---
layout: page
title: "MS-DOS Version 3.3 Programmer's Reference"
permalink: /documents/books/mspl13/msdos/dosref33/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/dosref33/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
TITLE PAGE



───────────────────────────────────────────────────────────────────────────



Microsoft(R) MS-DOS(R)

Version 3.3

Programmer's Reference



───────────────────────────────────────────────────────────────────────────



Information in this document is subject to change without notice and does
not represent a commitment on the part of Microsoft Corporation. The
software described in this document is furnished under a license agreement
or nondisclosure agreement. The software may be used or copied only in
accordance with the terms of the agreement. The purchaser may make one copy
of the software for backup purposes. No part of this manual may be
reproduced or transmitted in any form or by any means, electronic or
mechanical, including photocopying and recording, for any purpose other
than the purchaser's personal use without the written permission of
Microsoft Corporation.



(c) Copyright Microsoft Corporation, 1988. All rights reserved.
Simultaneously published in the United States and Canada.



Microsoft(R), the Microsoft logo, MS(R), MS-DOS(R), and XENIX(R) are
registered trademarks of Microsoft Corporation.

IBM(R), IBM Personal Computer(R), IBM PC(R), and PC-DOS(R) are registered
trademarks of International Business Machines Corporation.

INTEL(R) is a registered trademark of Intel Corporation.



Contents

───────────────────────────────────────────────────────────────────────────

1   System Calls

        1.1   Introduction
        1.2   Standard Character Device I/O
        1.3   Memory Management
        1.4   Process Management
        1.5   File and Directory Management
        1.6   Microsoft Networks
        1.7   National Language Support
        1.8   Miscellaneous System-Management Functions
        1.9   Old System Calls
        1.10  Using the System Calls
        1.11  Interupts
        1.12  Function Requests


2   MS-DOS Device Drivers

        2.1   Introduction
        2.2   Format of a Device Driver
        2.3   How to Create a Device Driver
        2.4   Installing Device Drivers
        2.5   Device Headers
        2.6   Request Header
        2.7   Device Driver Functions
        2.8   The Media Descriptor Byte
        2.9   Format of a Media Descriptor Table
        2.10  The CLOCK Device
        2.11  Anatomy of a Device Call
        2.12  Two Sample Device Drivers


3   MS-DOS Technical Information

        3.1   Introduction
        3.2   MS-DOS Initialization
        3.3   The Command Processor
        3.4   MS-DOS Disk Allocation
        3.5   MS-DOS Disk Directory
        3.6   File Allocation Table (FAT)
        3.7   MS-DOS Standard Disk Formats


4   MS-DOS Control Blocks and Work Areas

        4.1   Introduction
        4.2   Typical Contents of an MS-DOS Memory Map
        4.3   MS-DOS Program Segment


5   National Language Support

        5.1   Introduction
        5.2   National Language Support Calls
        5.3   Font Files


6   .Exe File Structure and Loading

        6.1   Format of a File Header
        6.2   The Relocation Table


7   Relocatable Object Module Formats

        7.1   Introduction
        7.2   Module Identification and Attributes
        7.3   Conceptual Framework for Fixups
        7.4   Record Sequence
        7.5   Introducing the Record Formats
        7.6   Microsoft Type Representations for Communal Variables


8   Programming Hints

        8.1   Introduction
        8.2   Interrupts
        8.3   System Calls
        8.4   Device Management
        8.5   Memory Management
        8.6   Process Management
        8.7   File and Directory Management
        8.8   Miscellaneous


Figures

Figure 1.1   Example of the 8088 Registers

Figure 1.2   Sample Program with Common Skeleton

Figure 2.1   Sample Device Header

Figure 2.2   Attribute Word for Character Devices

Figure 2.3   Attribute Word for Block Devices

Figure 2.4   Request Header

Figure 2.5   Status Field

Figure 2.6   Format of a Boot Sector

Figure 2.7   Format of a Clock Device

Figure 4.1   Program Segment Prefix

Figure 5.1   Font File Structure

Figure 7.1   Location Types


Tables

Table 1.1   Standard Character I/O Functions

Table 1.2   Memory-Management Function Requests

Table 1.3   Process-Management Function Requests

Table 1.4   Predefined Device Handles

Table 1.5   File-Related Function Requests

Table 1.6   File-Sharing Function Requests

Table 1.7   Device-Related Function Requests

Table 1.8   Directory-Related Function Requests

Table 1.9   File Attributes

Table 1.10  Microsoft Networks Function Requests

Table 1.11  National-Language-Support Function Requests

Table 1.12  Miscellaneous System-Management Function Requests

Table 1.13  Old System Calls and Their Replacements

Table 1.14  Format of the File Control Block (FCB)

Table 1.15  Error Codes Returned in AX

Table 1.16  MS-DOS Interrupts, Numeric Order

Table 1.17  MS-DOS Interrupts, Alphabetic Order

Table 1.18  MS-DOS Function Requests, Numeric Order

Table 1.19  MS-DOS Function Requests, Alphabetic Order

Table 1.20  Bit Values for Function 29H

Table 1.21  Sharing Mode Bit Values

Table 1.22  Access Code Bit Values

Table 1.23  MS-DOS Data Bit Values

Table 1.24  Contents of the Parameter Block

Table 1.25  Contents of the Parameter Block

Table 1.26  DTA Values After Successful Find First File

Table 1.27  Allocation Strategy

Table 2.1   For Character Devices:

Table 2.2   For Block Devices

Table 3.1   MS-DOS Standard Removable-Disk Formats

Table 3.2   MS-DOS Standard Removable-Disk Formats (High-Density)

Table 7.1   Object Module Record Format

Table 7.1   Combination Attribute Example




Chapter 1  System Calls

───────────────────────────────────────────────────────────────────────────

1.1  Introduction

        1.1.1  System Calls That Have Been Superseded

1.2  Standard Character Device I/O

1.3  Memory Management

1.4  Process Management

        1.4.1  Loading and Executing a Program

        1.4.2  Loading an Overlay

1.5  File and Directory Management

        1.5.1  Handles

        1.5.2  File Related Function Requests

        1.5.3  Device-Related Function Requests

        1.5.4  Directory-Related Function Requests

        1.5.5  File Attributes

1.6  Microsoft Networks

1.7  National Language Support

1.8  Miscellaneous System-Management Functions

1.9  Old System Calls

        1.9.1  File Control Block (FCB)

1.10 Using the System Calls

        1.10.1  Issuing an Interupt

        1.10.2  Calling a Function Request

        1.10.3  Using the Calls from a High-Level Language

        1.10.4  Treatment of Registers

        1.10.5  Handling Errors

        1.10.6  System Call Descriptions

                1.10.6.1  Sample Programs

                1.10.6.2  Error Handling in Sample Programs

1.11 Interrupts

        1.11.1  Conditions upon Entry

        1.11.2  Requirements for an Interrupt 24H Handler



1.1  Introduction


The routines that MS-DOS uses to manage system operation and resources can
be called by any application program. Using these system calls makes it
easier to write machine-independent programs and increases the likelihood
that a program will be compatible with future versions of MS-DOS. MS-DOS
system calls fall into several categories:

    ■ Standard character device I/O

    ■ Memory management

    ■ Process management

    ■ File and directory management

    ■ Microsoft Network calls

    ■ National Language Support calls

    ■ Miscellaneous system functions

Applications invoke MS-DOS services by using software interrupts. The
current range of interrupts used for MS-DOS is 20H-27H; 28H-40H are
reserved. Interrupt 21H is the function request service; it provides
access to a wide variety of MS-DOS services. In some cases, the full AX
register is used to specify the requested function. Each interrupt or
function request uses values in various registers to receive or return
function-specific information.


1.1.1  System Calls That Have Been Superseded

Many system calls introduced in versions of MS-DOS earlier than 2.0 have
been superseded by function requests that are more efficient and easier to
use. Although MS-DOS still includes these old system calls, they should
not be used unless it is imperative that a program maintain backward-
compatibility with versions of MS-DOS before 2.0.

A table of the pre-2.0 system calls and a description of the File
Control Block (required by some of the old calls) appears in Section 1.8,
"Old System Calls."

The first part of this chapter explains how DOS manages its resources--
such as memory, files, and processes--and briefly describes the purpose of
most of the system calls. The remainder of the chapter describes each
interrupt and function request in detail.

The system-call descriptions are in numeric order, interrupts followed
by function requests. These descriptions include further detail on how
MS-DOS manages its resources.

Chapter 2 of this manual describes how to write an MS-DOS device driver.
Chapters 3, 4, and 5 contain more detailed information about MS-DOS,
including how it manages disk space, the control blocks it uses, and how it
loads and executes relocatable programs (files with an extension of .exe).
Chapter 6 describes the Intel object module format. Chapter 7 gives some
programming hints.


1.2  Standard Character Device I/O


The standard character function requests handle all input and output to and
from character devices such as consoles, printers, and serial ports. If a
program uses these function requests, its input and output can be
redirected.

Table 1.1 lists the MS-DOS function requests for managing standard
character input and output.


        Table 1.1
        Standard Character I/O Function Requests
╓┌──────────┌────────────────────┌───────────────────────────────────────────╖
        Code  Request              Description
    ───────────────────────────────────────────────────────────────────────
        Code  Request              Description
    ───────────────────────────────────────────────────────────────────────
        01H   Read Keyboard and    Gets a character from standard input
            Echo                 and echoes it to standard output

        02H   Display Character    Sends a character to standard output

        03H   Auxiliary Input      Gets a character from standard
                                auxiliary

        04H   Auxiliary Output     Sends a character to standard
                                auxiliary

        05H   Print Character      Sends a character to the standard
                                printer

        06H   Direct Console I/O   Gets a character from standard input
                                or sends a character to standard
                                output

        07H   Direct Console       Gets a character from standard input
        Code  Request              Description
        07H   Direct Console       Gets a character from standard input
            Input

        08H   Read Keyboard        Gets a character from standard input

        09H   Display String       Sends a string to standard output

        0AH   Buffered Keyboard    Gets a string from standard input
            Input

        0BH   Check Keyboard       Reports on the status of the
            Status               standard input buffer

        0CH   Flush Buffer, Read   Empties the standard input buffer
            Keyboard             and calls one of the other standard
                                character I/O function requests


Although several of these standard character I/O function requests seem to
do the same thing, they are distinguished by whether they check for control
characters or echo characters from standard input to standard output. The
detailed descriptions later in this chapter point out the differences.


1.3  Memory Management


MS-DOS keeps track of which areas of memory are allocated by writing a
memory control block at the beginning of each. This control block
specifies the size of the memory area; the name of the process, if any,
that owns the memory area; and a pointer to the next area of memory. If the
memory area is not owned, it is available.

Table 1.2 lists the MS-DOS function requests for managing memory.


        Table 1.2
        Memory-Management Function Requests
╓┌──────────┌─────────────────┌──────────────────────────────────────────────╖
        Code  Request           Description
    ───────────────────────────────────────────────────────────────────────
        Code  Request           Description
    ───────────────────────────────────────────────────────────────────────
        48H   Allocate Memory   Requests a block of memory

        49H   Free Allocated    Frees a block of memory
            Memory            previously allocated with 48H

        4AH   Set Block         Changes the size of an allocated
                                memory block


When a process requests additional memory with Function 48H (Allocate
Memory), MS-DOS searches for a block of available memory large enough to
satisfy the request. If it finds such a block of memory, it changes the
memory control block to show the owning process. If the block of memory is
larger than the requested amount, MS-DOS changes the size field of the
memory control block to the requested amount, writes a new memory control
block at the beginning of the unneeded portion showing that it is
available, and updates the pointers to add this memory to the chain of
memory control blocks. MS-DOS then returns the segment address of the
first byte of the allocated memory to the requesting process.

When a process releases an allocated block of memory with Function 49H
(Free Allocated Memory), MS-DOS changes the memory control block to show
that it is available (not owned by any process).

When a process uses Function 4AH (Set Block) to shrink an allocated
block of memory, MS-DOS builds a memory control block for the memory being
released and adds it to the chain of memory control blocks. When a process
tries to use Function 4AH (Set Block) to expand an allocated block of
memory, MS-DOS treats it as a request for additional memory rather than
returning the segment address of the additional memory to the requesting
process. However, MS-DOS simply chains the additional memory to the
existing memory block.

If MS-DOS can't find a block of available memory large enough to satisfy a
request for additional memory made with either Function 48H (Allocate
Memory) or Function 4AH (Set Block), MS-DOS returns an error code to the
requesting process.

When a program receives control, it should call Function 4AH (Set
Block) to shrink its initial memory-allocation block (the block that begins
with its Program Segment Prefix) to the minimum it requires. This frees
unneeded memory and makes the best application design for portability to
future multitasking environments.

When a program exits, MS-DOS automatically frees its initial memory-
allocation block before returning control to the calling program
(command.com is usually the calling program for application programs). The
DOS frees any memory owned by the exiting process.

Any program that changes memory that is not allocated to it will most
likely destroy at least one memory-management control block. This causes a
memory-allocation error the next time MS-DOS tries to use the chain of
memory control blocks; the only cure is to restart the system.


1.4  Process Management


MS-DOS uses several function requests to load, execute, and terminate
programs. Application programs can use these same function requests to
manage other programs.

Table 1.3 lists the MS-DOS function requests for managing processes.


        Table 1.3
        Process-Management Function Requests
╓┌────────────┌──────────────────┌───────────────────────────────────────────╖
        Code    Request            Description
        ──────────────────────────────────────────────────────────────────────
        31H     Keep Process       Terminates a process and
                                returns control to the
                                invoking process, but keeps
                                the terminated process in
                                memory

        4BH     Load and Execute   Loads and executes a program
                Program

        4B03H   Load Overlay       Loads a program overlay
                                without executing it

        Code    Request            Description

        4CH     End Process        Returns control to the
                                invoking process

        4DH     Get Return Code    Returns a code passed by an
                of Child Process   exiting child process

        62H     Get PSP            Returns the segment address of
                                the current process's Program
                                Segment Prefix


1.4.1  Loading and Executing a Program

When a program uses Function 4BH (Load and Execute Program) to load and
execute another program, MS-DOS allocates memory, writes a Program Segment
Prefix (PSP) for the new program at offset 0 of the allocated memory, loads
the new program, and passes control to it. When the invoked program exits,
control returns to the calling program.

Command.com uses Function 4BH to load and execute command files.
Application programs have the same degree of control over process
management as does command.com.

In addition to these common features, there are some differences in the
way MS-DOS loads .com and .exe files.


Loading a .com Program

When command.com loads and executes a .com program, it allocates all
available memory to the application and sets the stack pointer 100H bytes
from the end of available memory. A .com program should set up its own
stack before shrinking its initial memory-allocation block with Function
4AH (Set Block) because the default stack is in the memory to be released.

If a newly loaded program is allocated all of memory--as a .com program
is--or requests all of available memory by using Function 48H (Allocate
Memory), MS-DOS allocates to it the memory occupied by the transient part
of command.com. If the program changes this memory, MS-DOS must reload the
transient portion of command.com before it can continue. If a program exits
(via Function 31H, Keep Process) without releasing enough memory, the
system halts and must be reset. To minimize this possibility, a .com
program should use Function 4AH (Set Block) to shrink its initial
allocation block before doing anything else, and before exiting, all
programs must release all memory they allocate by using Function 48H
(Allocate Memory).


Loading an .exe Program

When command.com loads and executes an .exe program, it allocates the size
of the program's memory image plus either the value in the MAX_ALLOC field
(offset 0CH) of the file header (if that much memory is available) or the
value in the MIN_ALLOC field (offset 0AH). The linker sets these fields.
Before passing control to the .exe file, MS-DOS uses the relocation
information in the file header to calculate the correct relocation
addresses.

For a more detailed description of how MS-DOS loads .com and .exe
files, see Chapter 3, "MS-DOS Technical Information," and Chapter 4,
"MS-DOS Control Blocks and Work Areas."


Executing a Program from Within Another Program

Since command.com builds pathnames, searches directory paths for executable
files, and relocates .exe files, the simplest way to load and execute a
program is to load and execute an additional copy of command.com, passing
it a command line that includes the /C switch, which invokes the .com or
.exe file. The description of Function 4B00H (Load and Execute Program)
describes how to do this.


1.4.2  Loading an Overlay

When a program uses Function 4B03H (Load Overlay) to load an overlay, it
must pass MS-DOS the segment address at which the overlay is to be loaded.
The program must call the overlay, which then returns directly to the
calling program. The calling program is in complete control: MS-DOS does
not write a PSP for the overlay or intervene in any other way.

MS-DOS does not check to see if the calling program owns the memory
where the overlay is to be loaded. If the calling program does not own the
memory, loading the overlay will most likely destroy a memory-control
block, causing an eventual memory-allocation error.

Therefore, a program that loads an overlay must either allow room for
the overlay when it calls Function 4AH (Set Block) to shrink its initial
memory-allocation block, or shrink its initial memory-allocation block to
the minimum and then use Function 48H (Allocate Memory) to allocate memory
for the overlay.


1.5  File and Directory Management


The MS-DOS hierarchical (multilevel) file system is similar to that of the
XENIX operating system. For a description of the multilevel directory
system and how to use it, see the MS-DOS User's Reference.


1.5.1  Handles

To create or open a file, a program passes MS-DOS a pathname and the
attribute to be assigned to the file. MS-DOS returns a 16-bit number,
called a handle. For most subsequent actions, MS-DOS requires only this
handle to identify the file.

A handle can refer to either a file or a device. MS-DOS predefines five
standard handles. These handles are always open, so you needn't open them
before you use them. Table 1.4 lists these predefined handles.


        Table 1.4
        Predefined Device Handles
╓┌─────────────┌─────────────────┌───────────────────────────────────────────╖
        Handle   Standard device   Comment
        ──────────────────────────────────────────────────────────────────────
        0        Input             Can be redirected from command line
        1        Output            Can be redirected from command line
        2        Error
        3        Auxiliary
        4        Printer


When MS-DOS creates or opens a file, it assigns the first available handle.
Since a program can have 20 open handles, including the five predefined
handles, it typically can open 15 extra files. By using Function 46H
(Force Duplicate File Handle), MS-DOS can temporarily force any of the five
predefined handles to refer to an alternate file or device. For more
information about Function 46H, see its description later in this chapter.


1.5.2  File-Related Function Requests

MS-DOS treats a file as a string of bytes; it assumes no record structure
or access technique. An application program imposes whatever record
structure it needs on this string of bytes. Reading from or writing to a
file requires only pointing to the data buffer and specifying the number of
bytes to read or write.

Table 1.5 lists the MS-DOS function requests for managing files.


        Table 1.5
        File-Related Function Requests
╓┌──────────┌─────────────────────────────┌──────────────────────────────────╖
        Code  Request                       Description
        ──────────────────────────────────────────────────────────────────────
        3CH   Create Handle                 Creates a file

        3DH   Open Handle                   Opens a file

        3EH   Close Handle                  Closes a file

        3FH   Read Handle                   Reads from a file

        40H   Write Handle                  Writes to a file

        42H   Move File Pointer             Sets the read/write pointer in a
                                            file

        45H   Duplicate File Handle         Creates a new handle that refers
                                            to the same file as an existing
                                            handle

        Code  Request                       Description

        46H   Force Duplicate File Handle   Makes an existing handle refer to
                                            the same file as another existing
                                            handle

        5AH   Create Temporary File         Creates a file with a unique name

        5BH   Create New File               Attempts to create a file, but
                                            fails if a file with the same name
                                            exists

        67H   Set Handle Count              Increases or decreases the number
                                            of files a program can have open
                                            at one time

        68H   Commit File                   Flushes buffered data for a file
                                            without closing it to ensure the
                                            disk image of that file is current


File Sharing

Version 3.1 of MS-DOS introduces file sharing, which lets more than one
process share access to a file. File sharing operates only after the share
command has been executed to load file-sharing support. That is, you must
use the share command to take advantage of file sharing.

Table 1.6 lists the MS-DOS function requests for sharing files; if file
sharing is not in effect, these function requests cannot be used. Function
3DH (Open Handle) can operate in several modes. Here it is referred to in
the file-sharing modes, which require file sharing to be in effect.
(Compatibility mode is usable without file sharing in effect.)


        Table 1.6
        File-Sharing Function Requests
╓┌────────────┌─────────────┌────────────────────────────────────────────────╖
        Code    Request       Description
        ──────────────────────────────────────────────────────────────────────
        3DH     Open Handle   Opens a file by using one of the
                            file-sharing modes
        Code    Request       Description
                            file-sharing modes

        440BH   IOCtl Retry   (before Interrupt 24 is issued)
                            Specifies how many times to retry
                            an I/O operation that fails due
                            to a file-sharing violation

        5C00H   Lock          Locks a region of a file

        5C01H   Unlock        Unlocks a region of a file


1.5.3  Device-Related Function Requests

I/O Control for devices is implemented with Function 44H (IOCtl), which
includes several subfunctions necessary to perform device-related tasks.
Some forms of the IOCtl function request require that the device driver be
written to support the IOCtl interface. Table 1.7 lists the MS-DOS function
requests for managing devices.


        Table 1.7
        Device-Related Function Requests
╓┌────────────────┌─────────────────────────────┌────────────────────────────╖
        Code        Request                       Description
        ──────────────────────────────────────────────────────────────────────
        4400H,01H   IOCtl Data                    Gets or sets device
                                                description

        4402H,03H   IOCtl Character               Gets or sets character-
                                                device control data

        4404H,05H   IOCtl Block                   Gets or sets block-device
                                                control data

        4406H,07H   IOCtl Status                  Checks device input or
                                                output status

        4408H       IOCtl Is Changeable           Checks whether block device
                                                contains removable medium

        Code        Request                       Description

        440CH       Generic IOCtl (for handles)   Sets Generic IOCtl for
                                                handles and supports code
                                                pages for devices

        440DH       Generic IOCtl (for devices)   Sets Generic IOCtl for
                                                devices
        440E,0FH    Get/Set IOCtl Drive Map       Gets or sets logical
                                                drive map


Some forms of the IOCtl function request can be used only with Microsoft
Networks; these forms are listed in Section 1.6, "Microsoft Networks."


1.5.4  Directory-Related Function Requests

A directory entry is a 32-byte record that includes the file's name,
extension, date and time of last change, and size. An entry in a
subdirectory is identical to an entry in the root directory. Directory
entries are described in detail in Chapter 3, "MS-DOS Technical
Information."

The root directory on a disk has room for a fixed number of entries: 64
on a standard single-sided disk, 112 on a standard double-sided disk. For
hard disks, the number of directories depends on the DOS partition size. A
subdirectory is simply a file with a unique attribute; there can be as many
subdirectories on a disk as space allows. The depth of a directory
structure, therefore, is limited only by the amount of storage on a disk
and the maximum pathname length of 64 characters. Pre-2.0 disks appear to
have only a root directory that contains files but no subdirectories.

Table 1.8 lists the MS-DOS function requests for managing directories.


        Table 1.8
        Directory-Related Function Requests
╓┌──────────┌─────────────────────────────────┌──────────────────────────────╖
        Code  Request                           Description
        ──────────────────────────────────────────────────────────────────────
        39H   Create Directory                  Creates a subdirectory
        Code  Request                           Description
        39H   Create Directory                  Creates a subdirectory

        3AH   Remove Directory                  Deletes a subdirectory

        3BH   Change Current Directory          Changes the current directory

        41H   Delete Directory Entry (Unlink)   Deletes a file

        43H   Get/Set File Attributes (Chmod)   Retrieves or changes the
                                                attributes of a file

        47H   Get Current Directory             Returns current directory for
                                                a given drive

        4EH   Find First File                   Searches a directory for the
                                                first entry that matches a
                                                filename

        4FH   Find Next File                    Searches a directory for the
                                                next entry that matches a
        Code  Request                           Description
                                                next entry that matches a
                                                filename

        56H   Change Directory Entry            Renames a file

        57H   Get/Set Date/Time of File         Changes the time and date of
                                                last change in a directory
                                                entry


1.5.5  File Attributes

Table 1.9 describes the file attributes and how they are represented in
the attribute byte of the directory entry (offset 0BH). The attributes can
be inspected or changed with Function 43H (Get/Set File Attributes
[Chmod]).


        Table 1.9
        File Attributes
╓┌───────────┌───────────────────────────────────────────────────────────────╖
        Code   Description
        ──────────────────────────────────────────────────────────────────────
        00H    Normal; can be read or written without
            restriction

        01H    Read-only; cannot be opened for write; a
            file with the same name cannot be created

        02H    Hidden; not found by directory search

        04H    System; not found by directory search

        08H    VolumeID; only one file can have this
            attribute; it must be in the root directory

        10H    Subdirectory

        20H    Archive; set whenever the file is changed,
            or cleared by the Backup command


The VolumeID (08H) and Subdirectory (10H) attributes cannot be changed with
Function 43H (Get/Set File Attributes [Chmod]).


1.6  Microsoft Networks


Microsoft Networks consists of a server and one or more workstations.
MS-DOS maintains an assign list that keeps track of which workstation
drives and devices have been redirected to the server. For a description of
operation and use of the network, see the Microsoft Networks 1.0 Manager's
Guide and Microsoft Networks 1.0 User's Guide.

Table 1.10 lists the MS-DOS function requests for managing a Microsoft
Networks workstation.


        Table 1.10
        Microsoft Networks Function Requests
╓┌────────────┌───────────────────┌──────────────────────────────────────────╖
        Code    Request             Description
        ──────────────────────────────────────────────────────────────────────
        4409H   IOCtl Is            Checks whether a drive letter refers to
                Redirected Block    a local or redirected drive

        440AH   IOCtl Is            Checks whether a device name refers to a
                Redirected Handle   local or redirected device

        5E00H   Get Machine Name    Gets the network name of the workstation

        5E02H   Printer Setup       Defines a string of control characters
                                    to be added at the beginning of each
                                    file that is sent to a network
                                    printer

        5F02H   Get Assign-List     Gets an entry from the assign list,
                Entry               which shows the workstation drive letter
                                    or device name and the net name of the
                                    directory or device on the server to
                                    which the entry is reassigned

        Code    Request             Description

        5F03H   Make Assign-List    Redirects a workstation drive or device
                Entry               to a server directory or device

        5F04H   Cancel Assign-      Cancels the redirection of a workstation
                List Entry          drive or device to a server directory or
                                    device


1.7  National Language Support


National language support for this version of MS-DOS includes these
major features:

    ■ Country-dependent information

    ■ Support for national keyboard layouts

    ■ Programming interfaces for national language support

    ■ Utility commands

Country-dependent information is available on a per-country basis and
includes the following:

    ■ Time, date, and currency

    ■ Lowercase-to-uppercase character-conversion tables

    ■ Collating sequence for character sorting

    ■ Valid single-byte characters used in filenames

Keyboard support for different keyboard layouts is provided and
selectable.

Table 1.11 lists the MS-DOS national-language-support system calls that
allow applications to use the country-dependent information just described.


        Table 1.11
        National Language-Support Function Requests
╓┌──────────┌──────────────────────────────────┌─────────────────────────────╖
        Code  Request                            Description
        ──────────────────────────────────────────────────────────────────────
        65H   Get Extended Country Information   Returns standard
                                                country information,
                                                pointer to uppercase
                                                table, pointer to
                                                filename uppercasing
                                                table, or pointer to
                                                collating table

        66H   Get/Set Global Code Page           Gets or sets the code
                                                page used by the
                                                kernel and all
                                                devices.


1.8  Miscellaneous System-Management Functions


The remaining system calls manage other system functions and resources such
as drives, addresses, and the clock. Table 1.12 lists the MS-DOS function
requests for managing miscellaneous system resources and operation.


        Table 1.12
        Miscellaneous System-Management Function Requests
╓┌──────────┌───────────────────────┌────────────────────────────────────────╖
        Code  Request                 Description
        ─────────────────────────────────────────────────────────────────────
        0DH   Reset Disk              Empties all file buffers

        0EH   Select Disk             Sets the default drive

        19H   Get Current Disk        Returns the default drive

        1AH   Set Disk Transfer       Establishes the disk I/O buffer
            Address

        1BH   Get Default Drive       Returns disk-format data
        Code  Request                 Description
        1BH   Get Default Drive       Returns disk-format data
            Data

        1CH   Get Drive Data          Returns disk-format data

        25H   Set Interrupt Vector    Sets interrupt-handler address

        29H   Parse File Name         Checks string for valid filename

        2AH   Get Date                Returns system date

        2BH   Set Date                Sets system date

        2CH   Get Time                Returns system time

        2DH   Set Time                Sets system time

        2EH   Set/Reset Verify Flag   Turns disk verify on or off

        2FH   Get Disk Transfer       Returns system-disk-I/O-buffer
        Code  Request                 Description
        2FH   Get Disk Transfer       Returns system-disk-I/O-buffer
            Address                 address

        30H   Get MS-DOS Version      Returns MS-DOS version number
            Number

        33H   CONTROL-C Check         Returns CONTROL-C check status

        35H   Get Interrupt Vector    Returns address of interrupt
                                    handler

        36H   Get Disk Free Space     Returns disk-space data

        38H   Get/Set Country Data    Sets current country or
                                    retrieves country information

        54H   Get Verify State        Returns status of disk verify


1.9  Old System Calls


Most of the superseded system calls deal with files. Table 1.13 lists
these old calls and the function requests that have superseded them.

Although MS-DOS still includes these old system calls, they should not
be used unless a program must maintain backward-compatibility with earlier
versions of MS-DOS.


        Table 1.13
        Old System Calls and Their Replacements
╓┌─────────────────────────────────────────┌─────────────────────────────────╖
        Old System Call                      Has Been Superseded By
        Code   Function                      Code   Function
        ──────────────────────────────────────────────────────────────────────
        00H    Terminate Program             4CH    End Process

        0FH    Open File                     3DH    Open Handle

        10H    Close File                    3EH    Close Handle
        Old System Call                      Has Been Superseded By
        Code   Function                      Code   Function
        10H    Close File                    3EH    Close Handle

        11H    Search for First Entry        4EH    Find First File

        12H    Search for Next Entry         4FH    Find Next File

        13H    Delete File                   41H    Delete Directory Entry

        14H    Sequential Read               3FH    Read Handle

        15H    Sequential Write              40H    Write Handle

        16H    Create File                   3CH    Create Handle
                                            5AH    Create Temporary File
                                            5BH    Create New File

        17H    Rename File                   56H    Change Directory Entry

        21H    Random Read                   3FH    Read Handle
        Old System Call                      Has Been Superseded By
        Code   Function                      Code   Function
        21H    Random Read                   3FH    Read Handle

        22H    Random Write                  40H    Write Handle

        23H    Get File Size                 42H    Move File Pointer

        24H    Set Relative Record           42H    Move File Pointer

        26H    Create New PSP                4BH    Load and Execute Program

        27H    Random Block Read             42H    Move File Pointer
                                            3FH    Read Handle

        28H    Random Block Write            42H    Move File Pointer
                                            40H    Write Handle

        Code   Interrupt                     Code   Function
        ──────────────────────────────────────────────────────────────────────
        20H    Program Terminate             4CH    End Process
        Old System Call                      Has Been Superseded By
        Code   Function                      Code   Function
        20H    Program Terminate             4CH    End Process

        27H    Terminate But Stay Resident   31H    Keep Process


1.9.1  File Control Block (FCB)

The old file-related function requests require that a program maintain a
File Control Block (FCB) for each file; this control block contains such
information as a file's name, size, record length, and pointer to current
record. MS-DOS does most of this housekeeping for the newer, handle-
oriented function requests.

Some descriptions of the old function requests refer to unopened and
opened FCBs. An unopened FCB contains only a drive specifier and filename.
An opened FCB contains all fields filled by Function 0FH (Open File).

The Program Segment Prefix (PSP) includes room for two FCBs at
offsets 5CH and 6CH. For a description of how to use the PSP and FCB
calls, see Chapter 4, "MS-DOS Control Blocks and Work Areas," Table 1.14
describes the FCB fields.


        Table 1.14
        Format of the File Control Block (FCB)
╓┌────────────┌──────┌──────┌────────────────────────────────────────────────╖
        Offset
        Hex     Dec    Bytes  Field
        ──────────────────────────────────────────────────────────────────────
        00H      0     1      Drive Number
        01H      1     8      Filename
        09H      9     3      Extension
        0CH     12     2      Current Block

        0EH     14     2      Record Size
        10H     16     4      File Size
        14H     20     2      Date of Last Write
        16H     22     2      Time of Last Write

        18H     24     8      Reserved
        Offset
        Hex     Dec    Bytes  Field
        18H     24     8      Reserved
        20H     32     1      Current Record
        21H     33     4      Relative Record


Fields of the FCB

Drive Number (offset 00H): Specifies the disk drive; 1 means drive A and
2 means drive B. If you use the FCB to create or open a file, you can set
this field to 0 to specify the default drive; Function 0FH (Open File) sets
the field to the number of the default drive.

Filename (offset 01H): Eight characters, left-aligned and padded
(if necessary) with blanks. If you specify a reserved device name (such
as PRN), do not put a colon at the end.

Extension (offset 09H): Three characters, left-aligned and padded (if
necessary) with blanks. This field can be all blanks (no extension).

Current Block (offset 0CH): Points to the block (group of 128 records)
that contains the current record. This field and the Current Record field
(offset 1FH) make up the record pointer. This field is set to zero by the
Open File system call.

Record Size (offset 0EH): The size of a logical record, in bytes. Set
to 128 by the Open File system call. If the record size is not 128 bytes,
you must set this field after opening the file.

File Size (offset 0FH): The size of the file, in bytes. The first word
of this 4-byte field is the low-order part of the size.

Date of Last Write (offset 13H): The date the file was created or last
updated. The year, month, and day are mapped into two bytes as follows:

Off     set 14H          Offset 13H
|Y|Y|Y|Y|Y|Y|Y|M|   |M|M|M|D|D|D|D|D|
15              9   8    5 4        0

Time of Last Write (offset 15H): The time the file was created or last
updated. The hour, minutes, and seconds are mapped into two bytes as
follows:

Offset 16H          Offset 15H
|H|H|H|H|H|M|M|M|   |M|M|M|S|S|S|S|S|
15      11 10            5 4        0

Reserved (offset 17H): These fields are reserved for use by MS-DOS.

Current Record (offset 1FH): Points to one of the 128 records in the
current block. This field and the Current Block field (offset 0CH) make up
the record pointer. The Open File system call does not initialize this
field. You must set it before doing a sequential read or write to the file.

Relative Record (offset 20H): Points to the currently selected record,
counting from the beginning of the file (starting with 0). The Open File
system call does not initialize this field. You must set it before doing a
random read or write to the file. If the record size is less than 64 bytes,
both words of this field are used; if the record size is 64 bytes or more,
only the first three bytes are used.

───────────────────────────────────────────────────────────────────────────
Note
    If you use the FCB at offset 5CH of the Program Segment Prefix, the last
    byte of the Relative Record field is the first byte of the unformatted
    parameter area that starts at offset 80H. This is the default Disk
    Transfer Area.
───────────────────────────────────────────────────────────────────────────


Extended FCB

The Extended File Control Block is used to create or search for
directory entries of files with special attributes. It adds the following
7-byte prefix to the FCB:

Name                Bytes   Offset
───────────────────────────────────────────────────────────────────────────
Flag byte (FFH)     1       07H
Reserved            5       06H
Attribute byte      1       01H

File attributes are described earlier in this chapter in Section 1.5.5,
"File Attributes."

───────────────────────────────────────────────────────────────────────────
Note
    You must remember to point to the beginning of the extended FCB if you
    are using Functions 0FH-16H with extended FCBs.
───────────────────────────────────────────────────────────────────────────


1.10  Using the System Calls


The remainder of this chapter describes how to use the system calls in
application programs, and it lists the calls in numeric and alphabetic
order, describing each call in detail.


1.10.1  Issuing an Interrupt


MS-DOS reserves Interrupts 28H through 3FH for its own use, and
maintains the table of interrupt-handler addresses (the vector table) in
locations 80H-FCH. Also, in case you need to write your own routines for
three particular MS-DOS interrupt handlers (Program Terminate, CONTROL-C,
and Critical Error), this chapter includes descriptions of each. Function
requests have superseded most of these interrupts.

To issue an interrupt, move any required data into the registers and
give the INT instruction with the number of the interrupt you want.


1.10.2  Calling a Function Request


A function request is an MS-DOS routine for managing system resources. Use
the following procedure to call a function request:

    1. Move any required data into the registers.

    2. Move the function number into AH.

    3. Move the action code, if required, into AL.

    4. Issue Interrupt 21H.


1.10.3  Using the Calls from a High-Level Language


The system calls can be executed from any high-level language whose
modules can be linked with assembly-language modules. In addition to this
linking technique, you can:

    ■ Use the DOSXQQ function of Pascal-86 to call a function request
        directly.

    ■ Use the CALL statement or USER function to execute the required
        assembly-language code from the BASIC interpreter.


1.10.4  Treatment of Registers


When MS-DOS takes control after a function request, it switches to an
internal stack, and preserves any registers not used to return information
(except AX). The calling program's stack must be large enough to
accommodate the interrupt system--at least 128 bytes in addition to other
needs.


1.10.5  Handling Errors


Most of the function requests introduced with version 2.0 or later set
the Carry flag if there is an error, identifying the specific error by
returning a number in the AX register. Table 1.15 lists these error codes
and their meanings.


        Table 1.15
        Error Codes Returned in AX
╓┌────────────┌──────────────────────────────────────────────────────────────╖
        Code    Meaning
        ──────────────────────────────────────────────────────────────────────
        Code    Meaning
        ──────────────────────────────────────────────────────────────────────
        1      Invalid function code
        2      File not found
        3      Path not found
        4      Too many open files (no open handles left)
        5      Access denied
        6      Invalid handle
        7      Memory control blocks destroyed
        8      Insufficient memory
        9      Invalid memory block address

        10      Invalid environment
        11      Invalid format
        12      Invalid access code
        13      Invalid data
        14      Reserved
        15      Invalid drive
        16      Attempt to remove the current directory
        17      Not same device
        18      No more files
        Code    Meaning
        18      No more files
        19      Disk is write-protected

        20      Bad disk unit
        21      Drive not ready
        22      Invalid disk command
        23      CRC error
        24      Invalid length (disk operation)
        25      Seek error
        26      Not an MS-DOS disk
        27      Sector not found
        28      Out of paper
        29      Write fault

        30      Read fault
        31      General failure
        32      Sharing violation
        33      Lock violation
        34      Wrong disk
        35      FCB unavailable
        Code    Meaning
        35      FCB unavailable
        36-49   Reserved

        50      Network request not supported
        51      Remote computer not listening
        52      Duplicate name on network
        53      Network name not found
        54      Network busy
        55      Network device no longer exists
        56      Net BIOS command limit exceeded
        57      Network adapter hardware error
        58      Incorrect response from network
        59      Unexpected network error

        60      Incompatible remote adapter
        61      Print queue full
        62      Queue not full
        63      Not enough space for print file
        64      Network name was deleted
        65      Access denied
        Code    Meaning
        65      Access denied
        66      Network device type incorrect
        67      Network name not found
        68      Network name limit exceeded
        69      Net BIOS session limit exceeded

        70      Temporarily paused
        71      Network request not accepted
        72      Print or disk redirection is paused
        73-79   Reserved

        80      File exists
        81      Reserved
        82      Cannot make
        83      Interrupt 24 failure
        84      Out of structures
        85      Already assigned
        86      Invalid password
        87      Invalid parameter
        88      Net write fault
        Code    Meaning
        88      Net write fault


To handle error conditions, put the following statement immediately after
calls that return errors:

JC <error>

<Error> represents the label of an error-handling routine that gets the
specific error condition by checking the value in AX. This routine then
takes appropriate action.

Some of the older system calls return a value in a register that
specifies whether the operation was successful. To handle such errors,
check the error code and take the appropriate action.


Extended Error Codes

Versions of MS-DOS after 2.0 have added new error messages. Any
programs that use the older system calls cannot use these new error
messages. To avoid incompatibility, MS-DOS maps these new error codes
to the old error code that most closely matches the new one.

Function 59H (Get Extended Error) has been added so that these new
calls can be used. It provides as much detail as possible about the most
recent error code returned by MS-DOS. The description of Function 59H
lists the new, more detailed error codes and shows how to use this function
request.


1.10.6  System Call Descriptions


Most system calls require that you move information into one or more
registers before issuing the call that returns information in the
registers. The description of each system call in this chapter includes
the following:

    ■ A diagram of the 8088 registers that shows their contents before and
        after the system call

    ■ A more complete description of the register contents required before
        the system call

    ■ A description of the processing performed

    ■ A more complete description of the register contents after the
        system call

    ■ An example of how to use the system call

The following figure is a sample illustration of the 8088 registers,
showing how the information is presented. Shaded areas indicate that the
register receives or returns information used by the call.


┌──────────┬──────────┐
│▒▒▒▒AH▒▒▒▒│▒▒▒▒AL▒▒▒▒│
├──────────┼──────────┤
│    BH    │    BL    │
├──────────┼──────────┤
│    CH    │    CL    │
├──────────┼──────────┤
│▒▒▒▒DH▒▒▒▒│▒▒▒▒DL▒▒▒▒│
└──────────┴──────────┘
┌─────────────────────┐
│          SP         │
├─────────────────────┤
│          BP         │
├─────────────────────┤
│          SI         │
├─────────────────────┤
│          DI         │
└─────────────────────┘
┌─────────────────────┐
│          IP         │
├──────────┬──────────┤
│  FLAGSH  │▒▒FLAGSL▒▒│
└──────────┴──────────┘
┌─────────────────────┐
│          CS         │
├─────────────────────┤
│▒▒▒▒▒▒▒▒▒▒DS▒▒▒▒▒▒▒▒▒│
├─────────────────────┤
│          SS         │
├─────────────────────┤
│          ES         │
└─────────────────────┘

Figure 1.1  Example of the 8088 Registers


1.10.6.1  Sample Programs

The sample programs show only data declarations and the code that you need
to use the system calls. Unless stated otherwise, each example assumes a
common program skeleton that defines the segments and returns control to
MS-DOS. Each sample program is intended to be executed as a .com file.
Figure 1.2 shows a complete sample program. The unshaded portion shows
what appears in this chapter; the shaded portions are the common skeleton.

───────────────────────────────────────────────────────────────────────────
code       segment
            assume  cs:code,ds:code,es:nothing,ss:nothing
            org     100H
start:     jmp     begin
;
filename   db      "b:\textfile.asc",0
buffer     db      129 dup (?)
handle     dw      ?
;
begin:     open_handle filename,0        ; Open the file
            jc      error_open            ; Routine not shown
            mov     handle,ax             ; Save handle
read_line: read_handle handle,buffer,128 ; Read 128 bytes
            jc      error_read            ; Routine not shown
            cmp     ax,0                  ; End of file?
            je      return                ;   Yes, go home
            mov     bx,ax                 ;   No, AX bytes read
            mov     buffer[bx],"$"        ; To terminate string
            display buffer                ; See Function 09H
            jmp     read_line             ; Get next 128 bytes

return:    end_process 0                 ; Return to MS-DOS
last_inst:                               ; To mark next byte
;
code       ends
            end     start
───────────────────────────────────────────────────────────────────────────

Figure 1.2  Sample Program with Common Skeleton


A macro has been defined for each system call to allow the examples to
be more complete programs, rather than isolated uses of the system calls.
These macros, plus some general-purpose ones, are used in the sample
programs.  For instance, the sample program in the preceding figure
includes four such macros: open_handle, read_handle, display, and
end_process.  All the macro definitions are listed at the end of this
chapter.

The macros assume the environment for a .com program as described in
Chapter 4; in particular, they assume that all the segment registers
contain the same value. To conserve space, the macros generally leave error
checking to the main code and do not protect registers. This keeps the
macros short, yet useful. You may find that such macros are a convenient
way to include system calls in your assembly-language programs.


1.10.6.2  Error Handling in Sample Programs

Whenever a system call returns an error code, the sample program shows
a test for the error condition and a jump to an error routine. To conserve
space, the error routines themselves aren't shown. Some error routines
might simply display a message and continue processing. For more serious
errors, the routine might display a message and end the program (performing
any required housekeeping, such as closing files).

Tables 1.16 through 1.19 list the Interrupts and Function Requests in
numeric and alphabetic order.


        Table 1.16
        MS-DOS Interrupts, Numeric Order
╓┌────────────────┌──────────────────────────────────────────────────────────╖
        Interrupt   Description
        Interrupt   Description
        ──────────────────────────────────────────────────────────────────────
        20H         Program Terminate
        21H         Function Request
        22H         Terminate Process Exit Address
        23H         CONTROL-C Handler Address
        24H         Critical-Error-Handler Address
        25H         Absolute Disk Read
        26H         Absolute Disk Write
        27H         Terminate But Stay Resident
        28H-3FH     Reserved



        Table 1.17
        MS-DOS Interrupts, Alphabetic Order
╓┌─────────────────────────────────────┌─────────────────────────────────────╖
        Description                      Interrupt
        ──────────────────────────────────────────────────────────────────────
        Absolute Disk Read               25H
        Absolute Disk Write              26H
        Description                      Interrupt
        Absolute Disk Write              26H
        CONTROL-C Handler Address        23H
        Critical-Error-Handler Address   24H
        Function Request                 21H
        Program Terminate                20H
        Reserved                         28H-3FH
        Terminate Process Exit Address   22H
        Terminate But Stay Resident      27H



        Table 1.18
        MS-DOS Function Requests, Numeric Order
╓┌──────────────────┌────────────────────────────────────────────────────────╖
        Function      Description
        ──────────────────────────────────────────────────────────────────────
        00H           Terminate Program
        01H           Read Keyboard And Echo
        02H           Display Character
        03H           Auxiliary Input
        Function      Description
        03H           Auxiliary Input
        04H           Auxiliary Output
        05H           Print Character
        06H           Direct Console I/O
        07H           Direct Console Input
        08H           Read Keyboard
        09H           Display String
        0AH           Buffered Keyboard Input
        0BH           Check Keyboard Status
        0CH           Flush Buffer, Read Keyboard
        0DH           Reset Disk
        0EH           Select Disk
        0FH           Open File
        10H           Close File
        11H           Search For First Entry
        12H           Search For Next Entry
        13H           Delete File
        14H           Sequential Read
        15H           Sequential Write
        16H           Create File
        Function      Description
        16H           Create File
        17H           Rename File
        18H           Reserved
        19H           Get Current Disk
        1AH           Set Disk Transfer Address
        1BH           Get Default Drive Data
        1CH           Get Drive Data
        1DH-20H       Reserved
        21H           Random Read
        22H           Random Write
        23H           Get File Size
        24H           Set Relative Record
        25H           Set Interrupt Vector
        26H           Create New PSP
        27H           Random Block Read
        28H           Random Block Write
        29H           Parse File Name
        2AH           Get Date
        2BH           Set Date
        2CH           Get Time
        Function      Description
        2CH           Get Time
        2DH           Set Time
        2EH           Set/Reset Verify Flag
        2FH           Get Disk Transfer Address
        30H           Get MS-DOS Version Number
        31H           Keep Process
        32H           Reserved
        33H           CONTROL-C Check
        34H           Reserved
        35H           Get Interrupt Vector
        36H           Get Disk Free Space
        37H           Reserved
        38H           Get/Set Country Data
        39H           Create Directory
        3AH           Remove Directory
        3BH           Change Current Directory
        3CH           Create Handle
        3DH           Open Handle
        3EH           Close Handle
        3FH           Read Handle
        Function      Description
        3FH           Read Handle
        40H           Write Handle
        41H           Delete Directory Entry (Unlink)
        42H           Move File Pointer
        43H           Get/Set File Attributes (Chmod)
        4400H,4401H   IOCtl Data
        4402H,4403H   IOCtl Character
        4404H,4405H   IOCtl Block
        4406H,4407H   IOCtl Status
        4408H         IOCtl Is Changeable
        4409H         IOCtl Is Redirected Block
        440AH         IOCtl Is Redirected Handle
        440BH         IOCtl Retry
        440CH         Generic IOCtl (for code page functions)
        440DH         Generic IOCtl (for devices)
        440EH         Get IOCtl Drive Map
        440FH         Set IOCtl Drive Map
        45H           Duplicate File Handle
        46H           Force Duplicate File Handle
        47H           Get Current Directory
        Function      Description
        47H           Get Current Directory
        48H           Allocate Memory
        49H           Free Allocated Memory
        4AH           Set Block
        4BH           Load and Execute Program
        4B03H         Load Overlay
        4CH           End Process
        4DH           Get Return Code of Child Process
        4EH           Find First File
        4FH           Find Next File
        50H-53H       Reserved
        54H           Get Verify State
        55H           Reserved
        56H           Change Directory Entry
        57H           Get/Set Date/Time of File
        58H           Get/Set Allocation Strategy
        59H           Get Extended Error
        5AH           Create Temporary File
        5BH           Create New File
        5C00H         Lock
        Function      Description
        5C00H         Lock
        5C01H         Unlock
        5DH           Reserved
        5E00H         Get Machine Name
        5E02H         Printer Setup
        5F02H         Get Assign-List Entry
        5F03H         Make Assign-List Entry
        5F04H         Cancel Assign-List Entry
        60H-61H       Reserved
        62H           Get PSP
        63H,64H       Reserved
        65H           Get Extended Country Information
        66H           Get/Set Global Code Page
        67H           Set Handle Count
        68H           Commit File
        69H-7FH       Reserved



        Table 1.19
        MS-DOS Function Requests, Alphabetic Order
╓┌──────────────────────────────────────────────┌────────────────────────────╖
        Description                               Interrupt
        ──────────────────────────────────────────────────────────────────────
        Allocate Memory                           48H
        Auxiliary Input                           03H
        Auxiliary Output                          04H
        Buffered Keyboard Input                   0AH
        Cancel Assign-List Entry                  5F04H
        Change Current Directory                  3BH
        Change Directory Entry                    56H
        Check Keyboard Status                     0BH
        Close File                                10H
        Close Handle                              3EH
        Commit FIle                               68H
        CONTROL-C Check                           33H
        Create Directory                          39H
        Create File                               16H
        Create Handle                             3CH
        Create New File                           5BH
        Create New PSP                            26H
        Description                               Interrupt
        Create New PSP                            26H
        Create Temporary File                     5AH
        Delete Directory Entry (Unlink)           41H
        Delete File                               13H
        Direct Console I/O                        06H
        Direct Console Input                      07H
        Display Character                         02H
        Display String                            09H
        Duplicate File Handle                     45H
        End Process                               4CH
        Find First File                           4EH
        Find Next File                            4FH
        Flush Buffer, Read Keyboard               0CH
        Force Duplicate File Handle               46H
        Free Allocated Memory                     49H
        Generic IOCtl (for devices)               440DH
        Generic IOCtl (for code page functions)   440CH
        Get Assign-List Entry                     5F02H
        Get Current Directory                     47H
        Get Current Disk                          19H
        Description                               Interrupt
        Get Current Disk                          19H
        Get Date                                  2AH
        Get Default Drive Data                    1BH
        Get Disk Free Space                       36H
        Get Disk Transfer Address                 2FH
        Get Drive Data                            1CH
        Get Extended Country Information          65H
        Get Extended Error                        59H
        Get File Size                             23H
        Get Interrupt Vector                      35H
        Get IOCtl Drive Map                       440EH
        Get Machine Name                          5E00H
        Get MS-DOS Version Number                 30H
        Get PSP                                   62H
        Get Return Code of Child Process          4DH
        Get Time                                  2CH
        Get Verify State                          54H
        Get/Set Allocation Strategy               58H
        Get/Set Country Data                      38H
        Get/Set Date/Time Of File                 57H
        Description                               Interrupt
        Get/Set Date/Time Of File                 57H
        Get/Set File Attributes (Chmod)           43H
        Get/Set Global Code Page                  66H
        IOCtl Block                               4404H,4405H
        IOCtl Character                           4402H,4403H
        IOCtl Data                                4400H,4401H
        IOCtl Is Changeable                       4408H
        IOCtl Is Redirected Block                 4409H
        IOCtl Is Redirected Handle                440AH
        IOCtl Retry                               440BH
        IOCtl Status                              4406H,4407H
        Keep Process                              31H
        Load and Execute Program                  4BH
        Load Overlay                              4B03H
        Lock                                      5C00H
        Make Assign-List Entry                    5F03H
        Move File Pointer                         42H
        Open File                                 0FH
        Open Handle                               3DH
        Parse File Name                           29H
        Description                               Interrupt
        Parse File Name                           29H
        Print Character                           05H
        Printer Setup                             5E02H
        Random Block Read                         27H
        Random Block Write                        28H
        Random Read                               21H
        Random Write                              22H
        Read Handle                               3FH
        Read Keyboard                             08H
        Read Keyboard And Echo                    01H
        Remove Directory                          3AH
        Rename File                               17H
        Reserved                                  18H
        Reserved                                  1DH-20H
        Reserved                                  32H
        Reserved                                  34H
        Reserved                                  37H
        Reserved                                  50H-53H
        Reserved                                  55H
        Reserved                                  5DH
        Description                               Interrupt
        Reserved                                  5DH
        Reserved                                  60H-61H
        Reserved                                  63H, 64H
        Reserved                                  69H-7FH
        Reset Disk                                0DH
        Search for First Entry                    11H
        Search for Next Entry                     12H
        Select Disk                               0EH
        Sequential Read                           14H
        Sequential Write                          15H
        Set Block                                 4AH
        Set Date                                  2BH
        Set Disk Transfer Address                 1AH
        Set Handle Count                          67H
        Set Interrupt Vector                      25H
        Set IOCtl Drive Map                       440FH
        Set Relative Record                       24H
        Set Time                                  2DH
        Set/Reset Verify Flag                     2EH
        Terminate Program                         00H
        Description                               Interrupt
        Terminate Program                         00H
        Unlock                                    5C01H
        Write Handle                              40H


A detailed description of each system call follows. These calls are listed
in numeric order, interrupts first, followed by function requests.

───────────────────────────────────────────────────────────────────────────
Note
    Unless stated otherwise, in the system call descriptions--both text and
    code--all numbers are in hexadecimal.
───────────────────────────────────────────────────────────────────────────


1.11  Interrupts


The following pages describe Interrupts 20H-27H.


Program Terminate (Interrupt 20H)


Call:

CS
    Segment address of Program Segment Prefix


Return:

None


Comments:

Interrupt 20H terminates the current process and returns control to its
parent process. It also closes all open file handles and clears the disk
cache. When this interrupt is issued, CS must contain the segment address
of the Program Segment Prefix.

Interrupt 20H is provided only for compatibility with MS-DOS versions
prior to 2.0. New programs should use Function 4CH (End Process), which
permits returning a completion code to the parent process and does not
require CS to contain the segment address of the Program Segment Prefix.

The following exit addresses are restored from the Program Segment
Prefix:

Offset       Exit Address
───────────────────────────────────────────────────────────────────────────
0AH          Program terminate
0EH          CONTROL-C
12H          Critical error

All file buffers are flushed to disk.

───────────────────────────────────────────────────────────────────────────
Note
    You should close all files that have changed in length before issuing
    this interrupt. If you do not close a changed file, its length may not
    be recorded correctly in the directory. See Functions 10H and 3EH for
    a description of the Close File system calls. If sharing is loaded, you
    should remove all locks before using Interrupt 20H. See Function 5CH
    (Lock) for more information.
───────────────────────────────────────────────────────────────────────────


Macro Definition:

terminate  macro
            int 20H
            endm


Example:

The following program displays a message and returns to MS-DOS. It uses
only the opening portion of the sample program skeleton shown in
Figure 1.2:

message db "displayed by INT20H example". 0DH, 0AH, "$"
;
begin:  display message  ;see Function 09H
        terminate        ;THIS INTERRUPT
code    ends
        end     start


Function Request (Interrupt 21H)


Call:

AH
    Function number

Other registers
    As specified in individual function


Return:

None.


Comments:

As specified in individual function. Interrupt 21H causes MS-DOS to
carry out the function request whose number is in AH. See Section 1.12,
"Function Requests," for a description of the MS-DOS functions.


Example:

To call the Get Time function:

mov   ah,2CH           ;Get Time is Function 2CH
int   21H              ;MS-DOS function request


Terminate Process Exit Address (Interrupt 22H)


This interrupt may be issued only by MS-DOS; user programs must never
issue it. If you must write your own terminate interrupt handler, use
Function 35H (Get Interrupt Vector) to get the address of the standard
routine, save the address, then use Function 25H (Set Interrupt Vector)
to change the Interrupt 22H entry in the vector table so that it points
to your routine.

When a program terminates, MS-DOS transfers control to the routine that
starts at the address in the Interrupt 22H entry in the vector table.
When MS-DOS creates a program segment, it copies this address into the
Program Segment Prefix, starting at offset 0AH.


CONTROL-C Handler Address (Interrupt 23H)


When you type CONTROL-C or CONTROL-BREAK (on IBM-compatibles), MS-DOS
transfers control as soon as possible to the routine that starts at the
address in the Interrupt 23H entry in the vector table. When MS-DOS creates
a program segment, it copies the address currently in the interrupt table
into the Program Segment Prefix, starting at offset 0EH.

This interrupt may be issued only by MS-DOS; user programs must never
issue it. If you must write your own CONTROL-C interrupt handler, use
Function Request 35H (Get Interrupt Vector) to get the address of the
standard routine, save the address, then use Function Request 25H (Set
Interrupt Vector) to change the Interrupt 23H entry in the vector table
to point to your routine.

If the CONTROL-C routine preserves all registers, it can end with an
IRET instruction (return from interrupt) to continue program execution.
If a user-written interrupt program returns with a long return, the program
uses the carry flag to determine whether or not the program will abort.
If the carry flag is set, it will abort; otherwise, execution will continue
as with a return by IRET.

If a user-written CONTROL-BREAK routine interrupts function calls 09H,
0AH, or buffered I/O, and if it continues execution with an IRET, then I/O
continues from the start of the line.  MS-DOS always outputs a CONTROL-C
to the screen when it issues an Interrupt 23H.  There is no way to turn
this off.

When the interrupt occurs, all registers are set to the value they had
when the original call to MS-DOS was made. There are no restrictions on
what a CONTROL-C handler can do--including calling MS-DOS functions--
as long as the program restores the registers.

If a CONTROL-C interrupts Function 09H or 0AH (Display String or
Buffered Keyboard Input), the three-byte sequence 03H-0DH-0AH (usually
displayed as C followed by a carriage-return) is sent to the display and
the function resumes at the beginning of the next line.

Suppose a program uses Function 4BH (Load and Execute Program) to create
a second Program Segment Prefix and execute a second program, which then
changes the CONTROL-C address in the vector table. MS-DOS restores this
CONTROL-C vector to its original value before returning control to the
calling program.


Critical-Error-Handler Address (Interrupt 24H)


If a critical error occurs during execution of an I/O function request
(this often means a fatal disk error), MS-DOS transfers control to the
routine at the address in the Interrupt 24H entry in the vector table. When
MS-DOS creates a program segment, it copies this address into the Program
Segment Prefix, starting at offset 12H.

This interrupt may be issued only by MS-DOS; user programs must never
issue it. If you must write your own critical-error interrupt handler,
use Function 35H (Get Interrupt Vector) to get the address of the standard
routine, save the address, then use Function 25H (Set Interrupt Vector)
to change the Interrupt 24H entry in the vector table to point to your
routine.

MS-DOS does not issue Interrupt 24H if a failure occurs during execution
Interrupt 25H (Absolute Disk Read) or Interrupt 26H (Absolute Disk Write).
A command.com error routines handles these errors. This routine retries
the disk operation, then gives you the choice of aborting the operation,
retrying it, allowing the system call to fail and the application process
to continue, or ignoring the error.

The following topics describe the requirements of an Interrupt 24H
routine, including the error codes, registers, and stack.


1.11.1  Conditions upon Entry

After retrying an I/O error five times, MS-DOS issues Interrupt 24H, unless
a File Allocation Table (FAT) or directory sector is involved. In those
cases, DOS performs three retries. The interrupt handler receives control
with interrupts disabled. AX and DI contain error codes, and BP contains
the offset (to the segment address in SI) of a Device Header control block
that describes the device on which the error occurred.


1.11.2  Requirements for an Interrupt 24H Handler

To issue the "Abort, Retry, Fail or Ignore" prompt to a user, a user-
written critical-error handler should first push the flags and execute
a FAR call to the address of the standard Interrupt 24H handler (the user
program that changed the Interrupt 24H vector also should have saved this
address).  After a user responds to the prompt, MS-DOS returns control
to the user-written routine.

───────────────────────────────────────────────────────────────────────────
Note
    There are source applications which will have trouble handling critical
    errors, since this changes the stack frame.
───────────────────────────────────────────────────────────────────────────

The error handler can then do its processing, but before it does anything
else it must preserve BX, CX, DX, DS, ES, SS, and SP. Also, the error
handler may use only function calls 01-0CH (inclusive) and 59H (if it uses
any others, the error handler destroys the MS-DOS stack and leaves MS-DOS
in an unstable state). The contents of the Device Header should not be
changed.

It is recommended that Interrupt 24H routine fail critical errors and
let the application test for an extended error code when the Interrupt 21H
routine returns.


User Stack

This call uses the user stack that contains the following (starting
with the top of the stack):

IP     MS-DOS registers from issuing Interrupt 24H
CS
FLAGS

AX     User registers at time of original
BX     INT 21H
CX
DX
SI
DI
BP
DS
ES

IP     From the original INT 21H
CS     from the user to MS-DOS
FLAGS

The registers are set such that if the user-written error handler issues an
IRET, MS-DOS responds according to the value in AL:

AL   Action
───────────────────────────────────────────────────────────────────────────
0    Ignore the error.
1    Retry the operation.
2    Abort the program by issuing Interrupt 23H.
3    Fail the system call that is in progress.

Note that the ignore option may cause unexpected results, such as
causing MS-DOS to behave as if an operation had completed successfully.


Disk Error Code in AX

If bit 7 of AH is 0, the error occurred on a disk drive. AL contains the
failing drive (0=A, 1=B, etc.). Bit 0 of AH specifies whether the error
occurred during a read or write operation (0=read, 1=write), and bits 1
and 2 of AH identify the area of the disk where the error occurred:

Bits 1-2   Location of error
───────────────────────────────────────────────────────────────────────────
00         MS-DOS area
01         File Allocation Table
10         Directory
11         Data area

Bits 3-5 of AH specify valid responses to the error prompt:

Bit   Value   Response
───────────────────────────────────────────────────────────────────────────
3     0       Fail not allowed
        1       Fail allowed
4     0       Retry not allowed
        1       Retry allowed
5     0       Ignore not allowed
        1       Ignore allowed

If you specify Retry but it isn't allowed, MS-DOS changes it to Fail. If
you specify Ignore but it isn't allowed, MS-DOS changes it to Fail. If you
specify Fail but it isn't allowed, MS-DOS changes it to Abort. The Abort
response is always allowed.


Other Device Error Code in AX

If bit 7 of AH is 1, either the memory image of the File Allocation Table
(FAT) is bad or an error occurred on a character device. The device header
pointed to by BP:SI contains a WORD of attribute bits that identify the
type of device and, therefore, the type of error.

The word of attribute bits is at offset 04H of the Device Header. Bit 15
specifies the type of device (0=block, 1=character).

If bit 15 is 0 (block device), the error was a bad memory image of the FAT.

If bit 15 is 1 (character device), the error was on a character device.
DI contains the error code, the contents of AL are undefined, and bits 0-3
of the attribute word have the following meaning:

Bit  Meaning if Set
───────────────────────────────────────────────────────────────────────────
0    Current standard input
1    Current standard output
2    Current null device
3    Current clock device

See Chapter 2, "MS-DOS Device Drivers," for a complete description of
the Device Header control block.


Error Code in DI

The high byte of DI is undefined. The low byte contains the following
error codes:

Error code   Description
───────────────────────────────────────────────────────────────────────────
0            Attempt to write on write-protected disk
1            Unknown unit
2            Drive not ready
3            Unknown command
4            CRC error in data
5            Bad drive request structure length
6            Seek error
7            Unknown media type
8            Sector not found
9            Printer out of paper
A            Write fault
B            Read fault
C            General failure

A user-written Interrupt 24H handler can use Function 59H (Get Extended
Error) to get detailed information about the error that caused the
interrupt to be issued.


Absolute Disk Read (Interrupt 25H)


Call:

AL
    Drive number
DS:BX
    Disk Transfer Address
CX
    Number of sectors
DX
    Beginning relative sector


Return:

AL
    Error code if CF=1
Flags
    CF      = 0 if successful
            = 1 if not successful


Comments:

The registers must contain the following:

Register      Contents
───────────────────────────────────────────────────────────────────────────
AL            Drive number (0=A, 1=B, etc.)
BX            Offset of Disk Transfer Address (from segment address in DS)
CX            Number of sectors to read
DX            Beginning relative sector

───────────────────────────────────────────────────────────────────────────
Warning
    Avoid using this function unless absolutely necessary. Instead, you
    should access files through normal MS-DOS function requests. There is no
    guarantee of upward compatibility for the Absolute Disk I/O in future
    releases of MS-DOS.
───────────────────────────────────────────────────────────────────────────

Interrupt 25H transfers control to the device driver and reads from the
disk to the Disk-Transfer Address the number of sectors specified in CX.
The interrupt has the same requirements as and processes identically to
Interrupt 26H (Absolute Disk Write), except that it reads data rather than
writes it. Also, since this interrupt does not check your input parameters
too closely, make sure they are reasonable. If you use unreasonable
parameters, you may get strange results or cause your system to crash.

───────────────────────────────────────────────────────────────────────────
Note
    This call destroys all registers except the segment registers. So before
    issuing the interrupt, save any registers that your program uses.
───────────────────────────────────────────────────────────────────────────

The system pushes the flags at the time of the call; they are still
there upon return. To prevent uncontrolled growth, be sure to pop the
stack upon return.

If the disk operation is successful, the Carry Flag (CF) is 0. If the
disk operation is not successful, CF is 1 and AL contains the MS-DOS error
code (see Interrupt 24H earlier in this section for the codes and their
meanings).


Macro Definition:

abs_disk_read  macro  disk,buffer,num_sectors,first_sector
                mov    al,disk
                mov    bx,offset buffer
                mov    cx,num_sectors
                mov    dx,first_sector
                int    25H
                popf
                endm


Example:

The following program copies the contents of a single-sided disk in drive A
to the disk in drive B.

prompt     db   "Source in A, target in B",0DH,0AH
            db   "Any key to start. $"
first      dw    0
buffer     db    60 dup (512 dup (?))  ;60 sectors
;
begin:     display prompt         ;see Function 09H
            read_kbd               ;see Function 08H
            mov     cx,6           ;copy 6 groups of
                                    ;60 sectors
copy:      push    cx             ;save the loop counter
            abs_disk_read  0,buffer,60,first  ;THIS INTERRUPT
            abs_disk_write 1,buffer,60,first  ;see INT 26H
            add  first,60          ;do the next 60 sectors
            pop  cx                ;restore the loop counter
            loop copy


Absolute Disk Write (Interrupt 26H)


Call:

AL
    Drive number
DS:BX
    Disk Transfer Address
CX
    Number of sectors
DX
    Beginning relative sector


Return:

AL
    Error code if CF = 1
FLAGS
    CF      = 0 if successful
            = 1 if not successful


Comments:

───────────────────────────────────────────────────────────────────────────
Warning
    Avoid using this function unless absolutely necessary. Instead, you
    should access files through normal MS-DOS function requests. There is
    no guarantee of upward compatibility for the Absolute Disk I/O in future
    releases of MS-DOS.
───────────────────────────────────────────────────────────────────────────

The registers must contain the following:

Register       Contents
───────────────────────────────────────────────────────────────────────────
AL             Drive number (0=A, 1=B, etc.)
BX             Offset of Disk Transfer Address (from segment address in DS)
CX             Number of sectors to write
DX             Beginning relative sector

This interrupt transfers control to MS-DOS. The number of sectors
specified in CX is written from the Disk Transfer Address to the disk. Its
requirements and processing are identical to Interrupt 25H (Absolute Disk
Read), except data is written to the disk rather than read from it. Also,
since Interrupt 26H does not check your input parameters too closely, make
sure they are reasonable. If you use unreasonable parameters, you may get
strange results or cause your system to crash.

───────────────────────────────────────────────────────────────────────────
Note
    This call destroys all registers except the segment registers. So before
    issuing the interrupt, be sure to save any registers your program uses.
───────────────────────────────────────────────────────────────────────────

The system pushes the flags at the time of the call; they are still there
upon return. To prevent uncontrolled growth, be sure to pop the stack upon
return.

If the disk operation is successful, the Carry Flag (CF) is 0. If the
disk operation is not successful, CF is 1 and AL contains the MS-DOS error
code (see Interrupt 24H for the codes and their meanings).


Macro Definition:

abs_disk_write  macro  disk,buffer,num_sectors,first_sector
                mov    al,disk
                mov    bx,offset buffer
                mov    cx,num_sectors
                mov    dx,first_sector
                int    26H
                popf
                endm


Example:

The following program copies the contents of a single-sided disk in drive A
to the disk in drive B, verifying each write. It uses a buffer of 32K
bytes.

off        equ   0
on         equ   1
;
prompt     db   "Source in A, target in B",0DH,0AH
            db   "Any key to start. $"
first      dw    0
buffer     db    60 dup (512 dup (?))  ;60 sectors
;
begin:     display prompt       ;see Function 09H
            read_kbd             ;see Function 08H
            verify  on           ;see Function 2EH
            mov     cx,6         ;copy 6 groups of 60 sectors
copy:      push    cx           ;save the loop counter
            abs_disk_read  0,buffer,60,first  ;see INT 25H
            abs_disk_write 1,buffer,60,first  ;THIS INTERRUPT
            add  first,60        ;do the next 60 sectors
            pop  cx              ;restore the loop counter
            loop copy
            verify  off          ;see Function 2EH


Terminate But Stay Resident (Interrupt 27H)


Call:

CS:DX
    Pointer to first byte following
    last byte of code.


Return:

None


Comments:

This interrupt is provided only for compatibility with MS-DOS versions
prior to 2.0. Unless your resident program must be compatible with MS-DOS
versions before 2.0, you should use Function 31H (Keep Process) to install
it. Function 31H lets programs larger than 64K remain resident and allows
return information to be passed.

However, Interrupt 27H, which is often used to install device-specific
interrupt handlers, forces programs that are up to 64K to remain resident
after they terminate.

DX must contain the offset (from the segment address in CS) of the first
byte that follows the last byte of code in the program. When Interrupt 27H
is executed, the program terminates and control returns to MS-DOS, but the
program is not overlaid by other programs. Files left open are not closed.
When the interrupt is called, CS must contain the segment address of the
Program Segment Prefix (the value of DS and ES when execution started).

.Exe programs that are loaded into high memory must not use this
interrupt. Similarly, since it restores the Interrupt 22H, 23H, and
24H vectors, you should not use Interrupt 27H to install new CONTROL-C
or critical-error handlers.


Macro Definition:

stay_resident  macro last_instruc
                mov   dx,offset last_instruc
                inc   dx
                int   27H
                endm


Example:

Since the most common use of Interrupt 27H is to install a machine-specific
routine, there is no general example that applies. The macro definition,
however, shows the calling syntax.


1.12  Function Requests


The following pages describe function calls 00H-68H.


Terminate Program (Function 00H)


Call:

AH = 00H
CS
    Segment address of
    Program Segment Prefix


Return:

None


Comments:


Function 00H performs the same function as Interrupt 20H. It terminates
the current process and returns control to its parent process. It also
closes all open file handles and clears the disk cache. When this
interrupt is issued, CS must contain the segment address of the Program
Segment Prefix.

The CS register must contain the segment address of the Program
Segment Prefix before you call this interrupt.

The following exit addresses are restored from the specified offsets
in the Program Segment Prefix:

Offset        Exit Address
───────────────────────────────────────────────────────────────────────────
0AH     Program terminate
0EH     CONTROL-C
12H     Critical error

All file buffers are flushed to disk.

───────────────────────────────────────────────────────────────────────────
Warning
    Close all files that have changed in length before calling this function.
    If you do not close a changed file, its length is not correctly recorded
    in the directory. See Function 10H for a description of the Close File
    system call.
───────────────────────────────────────────────────────────────────────────


Macro Definition:

terminate_program  macro
                    xor    ah,ah
                    int    21H
                    endm


Example:

The following program displays a message and returns to MS-DOS. It uses
only the opening portion of the sample program skeleton shown in Figure
1.2.

message db "Displayed by FUNC00H example", 0DH,0AH,"$"
;
begin:  display message    ;see Function 09H
        terminate_program  ;THIS FUNCTION
code    ends
        end    start


Read Keyboard and Echo (Function 01H)


Call:

AH = 01H


Return:

AL
    Character typed


Comments:

Function 01H waits for a character to be read from standard input, then
echoes the character to standard output and returns it in AL. If the
character is CONTROL-C, it executes Interrupt 23H.


Macro Definition:

read_kbd_and_echo  macro
                    mov  ah, 01H
                    int  21H
                    endm


Example:

The following program displays and prints characters as you type them.
If you press the RETURN key, the program sends a linefeed/carriage-return
sequence to both the display and the printer.

begin:     read_kbd_and_echo         ;THIS FUNCTION
            print_char   al           ;see Function 05H
            cmp          al,0DH       ;is it a CR?
            jne          begin        ;no, print it
            print_char   0AH          ;see Function 05H
            display_char 0AH          ;see Function 02H
            jmp          begin        ;get another character


Display Character (Function 02H)


Call:

AH = 02H
DL
    Character to be displayed


Return:

None


Comments:

Function 02H sends the character in DL to standard output. If you press
CONTROL-C, it issues Interrupt 23H.


Macro Definition:

display_char macro   character
                mov     dl,character
                mov     ah,02H
                int     21H
                endm


Example:

The following program converts lowercase characters to uppercase before
displaying them.

begin:     read_kbd                 ;see Function 08H
            cmp     al,"a"
            jl      uppercase        ;don't convert
            cmp     al,"z"
            jg      uppercase        ;don't convert
            sub     al,20H           ;convert to ASCII code
                                    ;for uppercase
uppercase: display_char al          ;THIS FUNCTION
            jmp     begin:           ;get another character


Auxiliary Input (Function 03H)


Call:

AH = 03H


Return:

AL
    Character from auxiliary device


Comments:

Function 03H waits for a character from standard auxiliary devices (AUX,
COM1, COM2, COM3, COM4), then returns the character in AL. This system
call does not return a status or error code.

If you press CONTROL-C, it issues Interrupt 23H.


Macro Definition:

aux_input  macro
            mov  ah,03H
            int  21H
            endm


Example:

The following program prints characters as soon as it receives them from
the auxiliary device. It stops printing when it receives an end-of-file
character (ASCII 26, or CONTROL-Z).

begin:     aux_input        ;THIS FUNCTION
            cmp   al,1AH     ;end of file?
            je    return     ;yes, all done
            print_char  al   ;see Function 05H
            jmp   begin      ;get another character


Auxiliary Output (Function 04H)


Call:

AH = 04H
DL
    Character for auxiliary device


Return:

None


Comments:

Function 04H sends the character in DL to standard auxiliary. This system
call does not return a status or error code.

If you press CONTROL-C, it issues Interrupt 23H.


Macro Definition:

aux_output  macro  character
            mov  dl,character
            mov  ah,04H
            int  21H
            endm


Example:

The following program gets a series of strings of up to 80 bytes from the
keyboard and sends each string to the auxiliary device. It stops when you
type a null string (carriage-return only).

string   db    81 dup(?) ;see Function 0AH
;
begin:   get_string  80,string       ;see Function 0AH
            cmp  string[1],0            ;null string?
            je   return                 ;yes, all done
            mov  cx, word ptr string[1] ;get string length
            mov  bx,0                   ;set index to 0
send_it: aux_output string[bx+2]     ;THIS FUNCTION
            inc  bx                     ;bump index
            loop  send_it               ;send another character
            jmp  begin                  ;get another string


Print Character (Function 05H)


Call:

AH = 05H
DL
    Character for printer


Return:

None


Comments:

Function 05H sends the character in DL to the standard printer. If you
press CONTROL-C, it issues Interrupt 23H. This function does not return
a status or error code.


Macro Definition:

print_char macro character
            mov   dl,character
            mov   ah,05H
            int   21H
            endm


Example:

The following program prints a walking test pattern on the printer. It
stops if you press CONTROL-C.

line_num    db    0
;
begin:      mov   cx,60        ;print 60 lines
start_line: mov   bl,33        ;first printable ASCII
                                ;character (!)
            add   bl,line_num  ;to offset one character
            push  cx           ;save number-of-lines counter
            mov   cx,80        ;loop counter for line
print_it:   print_char bl      ;THIS FUNCTION
            inc   bl           ;move to next ASCII character
            cmp   bl,126       ;last printable ASCII
                                ;character (~)
            jl    no_reset     ;not there yet
            mov   bl,33        ;start over with (!)
no_reset:   loop  print_it     ;print another character
            print_char 0DH     ;carriage return
            print_char 0AH     ;linefeed
            inc   line_num     ;to offset 1st char. of line
            pop   cx           ;restore #-of-lines counter
            loop  start_line   ;print another line


Direct Console I/O (Function 06H)


Call:

AH = 06H
DL
    See text


Return:

AL
    If DL = FFH  before call,
    then zero flag not set means AL
    has character from standard input.
    Zero flag set means there was not
    a character to get, and AL = 0.


Comments:

The action of Function 06H depends on the value in DL when the function
is called:

Value in DL  Action
───────────────────────────────────────────────────────────────────────────
FFH          If a character has been read from standard input, it is
                returned in AL and the zero flag is cleared (0); if a
                character has not been read, the zero flag is set (1).

Not FFH      The character in DL is sent to standard output.

This function does not check for CONTROL-C.


Macro Definition:

dir_console_io  macro switch
                mov  dl,switch
                mov  ah,06H
                int  21H
                endm


Example:

The following program sets the system clock to 0 and displays the time
continuously. When you type any character, the display freezes; when you
type any character again, the clock is reset to 0 and the display starts
again.

time      db  "00:00:00.00",0DH,0AH,"$"  ;see Function 09H
;                                     ;for explanation of $
;
begin:        set_time  0,0,0,0       ;see Function 2DH
read_clock:   get_time                ;see Function 2CH
                CONVERT  ch,time        ;see end of chapter
                CONVERT  cl,time[3]     ;see end of chapter
                CONVERT  dh,time[6]     ;see end of chapter
                CONVERT  dl,time[9]     ;see end of chapter
                display  time           ;see Function 09H
                dir_console_io  FFH     ;THIS FUNCTION
                cmp      al,0           ;character typed?
                jne      stop           ;yes, stop timer
                jmp      read_clock     ;no, keep timer
                                        ;running
stop:         read_kbd                ;see Function 08H
                jmp      begin          ;start over


Direct Console Input (Function 07H)


Call:

AH = 07H


Return:

AL
    Character from keyboard


Comments:

Function 07H waits for a character to be read from standard input, then
returns it in AL. This function does not echo the character or check
for CONTROL-C. (For a keyboard input function that echoes or checks for
CONTROL-C, see Function 01H or 08H.)


Macro Definition:

dir_console_input  macro
                    mov  ah,07H
                    int  21H
                    endm


Example:

The following program prompts for a password (eight characters maximum) and
places the characters into a string without echoing them.

password  db  8 dup(?)
prompt    db "Password: $"       ;see Function 09H for
                                    ;explanation of $
begin:    display prompt         ;see Function 09H
            mov  cx,8              ;maximum length of password
            xor  bx,bx             ;so BL can be used as index
get_pass: dir_console_input      ;THIS FUNCTION
            cmp  al,0DH            ;was it a carriage return?
            je   return            ;yes, all done
            mov  password[bx],al   ;no, put character in string
            inc  bx                ;bump index
            loop get_pass          ;get another character


Read Keyboard (Function 08H)


Call:

AH = 08H


Return:

AL
    Character from keyboard


Comments:

Function 08H waits for a character to be read from standard input, then
returns it in AL. If you press CONTROL-C, it issues Interrupt 23H. This
function does not echo the character. (For a keyboard input function
that echoes the character or checks for CONTROL-C, see Function 01H.)


Macro Definition:

read_kbd  macro
            mov   ah,08H
            int   21H
            endm


Example:

The following program prompts for a password (eight characters maximum) and
places the characters into a string without echoing them.

password  db  8 dup(?)
prompt    db "Password: $"      ;see Function 09H
                                ;for explanation of $
begin:    display prompt        ;see Function 09H
            mov  cx,8             ;maximum length of password
            xor  bx,bx            ;BL can be an index
get_pass: read_kbd              ;THIS FUNCTION
            cmp  al,0DH           ;was it a carriage return?
            je   return           ;yes, all done
            mov  password[bx],al  ;no, put char. in string
            inc  bx               ;bump index
            loop get_pass         ;get another character


Display String (Function 09H)


Call:

AH = 09H
DS:DX
    Pointer to string to be displayed


Return:

None


Comments:

Function 09H sends to standard output a string that ends with "$" (the $ is
not displayed).

The DX register must contain the offset (from the segment address in
DS) of the string.


Macro Definition:

display  macro string
            mov   dx,offset string
            mov   ah,09H
            int   21H
            endm


Example:

The following program displays the hexadecimal code of the key that
is typed.

table    db     "0123456789ABCDEF"
result   db     " - 00H",0DH,0AH,"$"  ;see text for
                                        ;explanation of $
begin:   read_kbd_and_echo            ;see Function 01H
            xor     ah,ah                ;clear upper byte
            convert ax,16,result[3]      ;see end of chapter
            display result               ;THIS FUNCTION
            jmp     begin                ;do it again


Buffered Keyboard Input (Function 0AH)


Call:

AH = 0AH
DS:DX
    Pointer to input buffer


Return:

None


Comments:

Function 0AH gets a string from standard input. DX must contain the offset
(from the segment address in DS) of an input buffer of the following form:

Byte     Contents
───────────────────────────────────────────────────────────────────────────
1        Maximum number of characters in buffer, including the carriage
            return (you must set this value).

2        Actual number of characters typed, not counting the carriage
            return (the function sets this value).

3-n      Buffer; must be at least as long as the number in byte 1.

Characters are read from standard input and placed in the buffer
beginning at the third byte until a RETURN character (ASCII 0DH) is read.
If the buffer fills to one less than the maximum, additional characters
read are ignored and ASCII 07H (Bel) is sent to standard output until
a RETURN character is read. If you type the string at the console, it
can be edited as it is being entered. If you press CONTROL-C, it issues
Interrupt 23H.

MS-DOS sets the second byte of the buffer to the number of characters
read (not counting the carriage return).


Macro Definition:

get_string  macro  limit,string
            mov    dx,offset string
            mov    string,limit
            mov    ah,0AH
            int    21H
            endm


Example:

The following program gets a 16-byte (maximum) string from the keyboard and
fills a 24-line by 80-character screen with it.

buffer           label byte
max_length       db    ?                ;maximum length
chars_entered    db    ?                ;number of chars.
string           db    17 dup (?)       ;16 chars + CR
strings_per_line dw    0                ;how many strings
                                        ;fit on line
crlf             db    0DH,0AH
;
begin:           get_string 17,buffer   ;THIS FUNCTION
                    xor  bx,bx             ;so byte can be
                                        ;used as index
                    mov  bl,chars_entered  ;get string length
                    mov  buffer[bx+2],"$"  ;see Function 09H
                    mov  al,50H            ;columns per line
                    cbw
                    div  chars_entered     ;times string fits
                                        ;on line
                    xor  ah,ah             ;clear remainder
                    mov  strings_per_line,ax ;save col. counter
                    mov  cx,24             ;row counter
display_screen:  push cx                ;save it
                    mov  cx,strings_per_line ;get col. counter
display_line:    display  string        ;see Function 09H
                    loop display_line
                    display crlf           ;see Function 09H
                    pop  cx                ;get line counter
                    loop display_screen    ;display 1 more line


Check Keyboard Status (Function 0BH)


Call:

AH = 0BH


Return:

AL
    00H     = no characters in type-ahead buffer
    FFH     = characters in type-ahead buffer


Comments:

Function 0BH checks whether characters are available from standard input
(if standard input has not been redirected, it checks the type-ahead
buffer). If characters are available, AL returns FFH; if not, AL returns
0. If CONTROL-C is in the buffer, it issues Interrupt 23H.


Macro Definition:

check_kbd_status  macro
                    mov   ah,0BH
                    int   21H
                    endm


Example:

The following program displays the time continuously until you press
any key:

time        db       "00:00:00.00",0DH,0AH,"$"
            .
            .
begin:      get_time                  ;see Function 2CH
            byte_to_dec ch,time       ;see end of chapter
            byte_to_dec cl,time[3]    ;see end of chapter
            byte_to_dec dh,time[6]    ;see end of chapter
            byte_to_dec dl,time[9]    ;see end of chapter
            display time              ;see Function 09H
            check_kbd_status          ;THIS FUNCTION
            cmp     al,0FFH           ;has a key been typed?
            je      return            ;yes, go home
            jmp     begin             ;no, keep displaying
                                        ;time


Flush Buffer, Read Keyboard (Function 0CH)


Call:

AH = 0CH
AL
    1, 6, 7, 8, or 0AH = the
    corresponding function
    is called.
    Any other value = no
    further processing.


Return:

AL
    00H = Type-ahead buffer was
    flushed; no other
    processing performed.


Comments:

Function 0CH empties the standard input buffer (if standard input has not
been redirected, Function 0CH empties the type-ahead buffer). Further
processing depends on the value in AL when the function is called.

AL                     Action
───────────────────────────────────────────────────────────────────────────
1,6,7,8, or 0AH        The corresponding MS-DOS function is executed.
Any other value        No further processing; AL returns 0.


Macro Definition:

flush_and_read_kbd  macro switch
                    mov   al,switch
                    mov   ah,0CH
                    int   21H
                    endm


Example:

The following program both displays and prints characters as you type them.
If you press the RETURN key, the program sends a carriage-return/linefeed
sequence to both the display and the printer.

begin:     flush_and_read_kbd 1      ;THIS FUNCTION
            print_char   al           ;see Function 05H
            cmp          al,0DH       ;is it a carriage return?
            jne          begin        ;no, print it
            print_char   0AH          ;see Function 05H
            display_char 0AH          ;see Function 02H
            jmp          begin        ;get another character


Reset Disk (Function 0DH)


Call:

AH = 0DH


Return:

None


Comments:

Function 0DH flushes all file buffers to ensure that the internal buffer
cache matches the disks in the drives. It writes out buffers that have
been modified, and marks all buffers in the internal cache as free. This
function request is normally used to force a known state of the system;
CONTROL-C interrupt handlers should call this function.

This function does not update directory entries; you must close
changed files to update their directory entries (see Function 10H,
Close File).


Macro Definition:

reset_disk macro
            mov   ah,0DH
            int   21H
            endm


Example:

The following program flushes all file buffers and selects disk A.

begin:  reset_disk
        select_disk "A"


Select Disk (Function 0EH)


Call:

AH = 0EH
DL
    Logical drive number
    (0 = A, 1 = B, etc.)


Return:

AL
    Number of logical drives


Comments:

Function 0EH selects the drive specified in DL (0=A, 1=B, etc.) as the
current logical drive. AL returns the number of logical drives.

───────────────────────────────────────────────────────────────────────────
Note
    For future compatibility, treat the value returned in AL with care. For
    example, if AL returns 5, it is not safe to assume that drives A, B, C,
    D, and E are all valid drive designators.
───────────────────────────────────────────────────────────────────────────


Macro Definition:

select_disk macro disk
            mov   dl,disk[-64]
            mov   ah,0EH
            int   21H
            endm


Example:

The following program toggles between drive A and drive B to select the
current drive (in a two-drive system).

begin:    current_disk       ;see Function 19H
            cmp    al,00H      ;drive A: selected?
            je     select_b    ;yes, select B
            select_disk "A"    ;THIS FUNCTION
            jmp    return
select_b: select_disk "B"    ;THIS FUNCTION


Open File (Function 0FH)


Call:

AH = 0FH
DS:DX
    Pointer to unopened FCB


Return:

AL
    00H     = Directory entry found
    FFH     = No directory entry found


Comments:

Function 0FH opens a file. DX must contain the offset (from the segment
address in DS) of an unopened File Control Block (FCB). This call searches
the disk directory for the named file.

If the call finds a directory entry for the file, AL returns 0 and the
FCB is filled as follows:

    ■ If the drive code was 0 (current drive), it is changed to the actual
        drive used (1=A, 2=B, etc.). This lets you change the current drive
        without interfering with subsequent operations on this file.

    ■ Current Block (offset 0CH) is set to 0.

    ■ Record Size (offset 0EH) is set to the system default of 128.

    ■ File Size (offset 0FH), Date of Last Write (offset 13H), and Time of
        Last Write (offset 15H) are set from the directory entry.

Before performing a sequential disk operation on the file, you must set
the Current Record field (offset 1FH). Before performing a random disk
operation on the file, you must set the Relative Record field (offset 20H).
If the default record size (128 bytes) is not correct, set it to the
correct length.

If the call doesn't find a directory entry for the file, or if the
file has the hidden or system attribute, AL returns 0FFH.


Macro Definition:

open  macro fcb
        mov   dx,offset fcb
        mov   ah,0FH
        int   21H
        endm


Example:

The following program prints a file named textfile.asc that is on the disk
in drive B. If a partial record is in the buffer at end-of-file, the
routine that prints the partial record prints characters until it
encounters an end-of-file mark (ASCII 26, or CONTROL-Z).

fcb            db    2,"TEXTFILEASC"
                db    26 dup (?)
buffer         db    128 dup (?)
;
begin:         set_dta  buffer       ;see Function 1AH
                open  fcb             ;THIS FUNCTION
read_line:     read_seq  fcb         ;see Function 14H
                cmp   al,02H          ;end of file?
                je    all_done        ;yes, go home
                cmp   al,00H          ;more to come?
                jg    check_more      ;no, check for partial
                                        ;record
                mov   cx,80H          ;yes, print the buffer
                xor   si,si           ;set index to 0
print_it:      print_char buffer[si] ;see Function 05H
                inc   si              ;bump index
                loop  print_it        ;print next character
                jmp   read_line       ;read another record
check_more:    cmp   al,03H          ;part. record to print?
                jne   all_done        ;no
                mov   cx,80H          ;yes, print it
                xor   si,si           ;set index to 0
find_eof:      cmp   buffer[si],26   ;end-of-file mark?
                je    all_done        ;yes
                print_char buffer[si] ;see Function 05H
                inc   si              ;bump index to next
                                        ;character
                loop  find_eof
all_done:      close fcb             ;see Function 10H


Close File (Function 10H)


Call:

AH = 10H
DS:DX
    Pointer to opened FCB


Return:

AL
    00H     = Directory entry found
    FFH     = No directory entry found


Comments:

Function 10H closes a file. DX must contain the offset (to the segment
address in DS) of an opened FCB. This call searches the disk directory for
the file named in the FCB. If it finds a directory entry for the file, it
compares the location of the file with the corresponding entries in the
FCB. The call then updates the directory entry, if necessary, to match the
FCB, and AL returns 0.

After you change a file, you must call this function to update the
directory entry. You should close any FCB (even one for a file that has
not been changed) when you no longer need access to a file.

If this call doesn't find a directory entry for the file, AL
returns FFH.


Macro Definition:

close  macro fcb
        mov   dx,offset fcb
        mov   ah,10H
        int   21H
        endm


Example:

The following program checks the first byte of the file named mod1.bas in
drive B to see if it is FFH and, if it is, prints a message.

message        db   "Not saved in ASCII format",0DH,0AH,"$"
fcb            db    2,"MOD1    BAS"
                db    26  dup (?)
buffer         db    128 dup (?)
;
begin:         set_dta  buffer       ;see Function 1AH
                open  fcb             ;see Function 0FH
                read_seq  fcb         ;see Function 14H

                cmp   buffer,0FFH     ;is first byte FFH?
                jne   all_done        ;no
                display  message      ;see Function 09H
all_done:      close fcb             ;THIS FUNCTION


Search for First Entry (Function 11H)


Call:

AH = 11H
DS:DX
    Pointer to unopened FCB


Return:

    AL
    00H     = Directory entry found
    FFH     = No directory entry found


Comments:

Function 11H searches the disk directory for the first matching filename.
DX must contain the offset (from the segment address in DS) of an unopened
FCB. The filename in the FCB can include wildcard characters. To search
for hidden or system files, DX must point to the first byte of an
extended FCB prefix.

If this call does not find a directory entry for the filename in the
FCB, AL returns FFH.

But if the call does find a directory entry for the filename in the
FCB, AL returns 0 and the call creates an unopened FCB of the same type
(normal or extended) at the Disk Transfer Address as follows:

    1.  If the search FCB was normal, the first byte at the Disk Transfer
        Address is set to the drive number used in the search (1=A, 2=B,
        etc.) and the next 32 bytes contain the directory entry.

    2.  If the search FCB was extended, the first byte at the Disk Transfer
        Address is set to FFH, the next 5 bytes are set to 00H, and the
        following byte is set to the value of the attribute byte in the
        search FCB. The remaining 33 bytes are the same as the result of
        the normal FCB (drive number and 32 bytes of directory entry).

If you use Function 12H (Search for Next Entry) to continue searching
for matching filenames, you must not alter or open the original FCB
at DS:DX.

The attribute field is the last byte of the extended FCB fields that
precede the FCB (see earlier in this chapter). If the attribute field is
zero, Function 11H searches only normal file entries. It does not search
directory entries for hidden files, system files, volume label, and
subdirectories.

If the attribute field is hidden file, system file, or subdirectory
entry (02H, 04H, or 10H), or any combination of those values, this call
also searches all normal file entries. To search all directory entries
except the volume label, set the attribute byte to 16H (hidden file
and system file and directory entry).

If the attribute field is Volume ID (08H), the call searches only the
volume label entry.


Macro Definition:

search_first  macro fcb
                mov   dx,offset fcb
                mov   ah,11H
                int   21H
                endm


Example:

The following program verifies the existence of a file named report.asm on
the disk in drive B.

yes        db   "FILE EXISTS.$"
no         db   "FILE DOES NOT EXIST.$"
crlf       db    0DH,0AH,"$"
fcb        db    2,"REPORT  *ASM"
            db    26 dup (?)
buffer     db    128 dup (?)
;
begin:     set_dta  buffer           ;see Function 1AH
            search_first fcb          ;THIS FUNCTION
            cmp      al,0FFH          ;directory entry found?
            je       not_there        ;no
            display  yes              ;see Function 09H
            jmp      continue
not_there: display  no               ;see Function 09H
continue:  display  crlf             ;see Function 09H


Search for Next Entry (Function 12H)


Call:

AH = 12H
DS:DX
    Pointer to unopened FCB


Return:

AL
    00H     = Directory entry found
    FFH     = No directory entry found


Comments:

After you use Function 11H (Search for First Entry), you can use Function
12H to find any additional directory entries that match a filename
(containing wildcard characters). Function 12H searches the disk
directory for the next matching name. DX must contain the offset (from the
segment address in DS) of an FCB specified in a previous call to Function
11H. To search for hidden or system files, DX must point to the first byte
of an extended FCB prefix-one that includes the appropriate attribute
value.

If the call does not find a directory entry for the filename in the
FCB, AL returns FFH.

But if the call does find a directory entry for the filename in the
FCB, AL returns 0 and the call creates an unopened FCB of the same type
(normal or extended) at the Disk Transfer Address (see Function 11H for a
description of how the unopened FCB is formed).


Macro Definition:

search_next  macro fcb
                mov   dx,offset fcb
                mov   ah,12H
                int   21H
                endm


Example:

The following program displays the number of files on the disk in drive B.

message     db   "No files",0DH,0AH,"$"
files       db    0
fcb         db    2,"???????????"
            db    26  dup (?)
buffer      db    128 dup (?)
;
begin:      set_dta  buffer          ;see Function 1AH
            search_first  fcb        ;see Function 11H
            cmp  al,0FFH             ;directory entry found?
            je   all_done            ;no, no files on disk
            inc  files               ;yes, increment file
                                        ;counter
search_dir: search_next  fcb         ;THIS FUNCTION
            cmp  al,0FFH             ;directory entry found?
            je   done                ;no
            inc  files               ;yes, increment file
                                        ;counter
            jmp  search_dir          ;check again
done:       convert files,10,message ;see end of chapter
all_done:   display  message         ;see Function 09H


Delete File (Function 13H)


Call:

AH = 13H
DS:DX
    Pointer to unopened FCB


Return:

    AL
    00H     = Directory entry found
    FFH     = No directory entry found


Comments:

Function 13H deletes a file. DX must contain the offset (from the segment
address in DS) of an unopened FCB. This call searches the directory for a
matching filename. The filename in the FCB can contain wildcard characters.

If the call does not find a matching directory entry, AL returns FFH.

But if the call does find a matching directory entry, AL returns 0 and
the call deletes the entry from the directory. If the filename contains a
wildcard character, the call will delete all files which match.

Do not delete open files.


Macro Definition:

delete  macro  fcb
        mov    dx,offset fcb
        mov    ah,13H
        int    21H
        endm


Example:

The following program deletes each file on the disk in drive B that was
last written before December 31, 1982.

year           dw    1982
month          db    12
day            db    31
files          db    0
message        db   "No files deleted.",0DH,0AH,"$"
fcb            db    2,"???????????"
                db    26 dup  (?)
buffer         db    128 dup (?)
;
begin:         set_dta  buffer      ;see Function 1AH
                search_first fcb     ;see Function 11H
                cmp   al,0FFH        ;directory entry found?
                jne   compare        ;yes
                jmp   all_done       ;no, no files on disk
compare:       convert_date buffer  ;see end of chapter
                cmp  cx,year         ;next several lines
                jg   next            ;check date in directory
                cmp  dl,month        ;entry against date
                jg   next            ;above & check next file
                cmp  dh,day          ;if date in directory
                jge  next            ;entry isn't earlier.
                delete  buffer       ;THIS FUNCTION
                inc  files           ;bump deleted-files
                                    ;counter
next:          search_next fcb      ;see Function 12H
                cmp  al,00H          ;directory entry found?
                je   compare         ;yes, check date
                cmp  files,0         ;any files deleted?
                je   all_done        ;no, display No files
                                    ;message.
                convert files,10,message ;see end of chapter
all_done:      display message      ;see Function 09H


Sequential Read (Function 14H)


Call:

AH = 14H
DS:DX
    Pointer to opened FCB


Return:

AL
    00H = Read completed successfully
    01H = EOF
    02H = DTA too small
    03H = EOF, partial record


Comments:

Function 14H reads a record from a specified file. DX must contain the
offset (from the segment address in DS) of an opened FCB. This call loads
the record pointed to by the Current Block field (offset 0CH) and Current
Record (offset 1FH) field at the Disk Transfer Address, then increments the
Current Block and Current Record fields.

The length of the record is taken from the Record Size field (offset
0EH) of the FCB.

AL returns a code that describes the processing:

Code  Meaning
───────────────────────────────────────────────────────────────────────────
0     Read completed successfully

1     End-of-file; no data in the record

2     Not enough room at the Disk Transfer Address to read one record; read
        canceled

3     End-of-file; a partial record was read and padded to the record
        length with zeros


Macro Definition:

read_seq  macro fcb
            mov   dx,offset fcb
            mov   ah,14H
            int   21H
            endm


Example:

The following program displays a file named textfile.asc that is on the
disk in drive B; its function is similar to the MS-DOS type command. If a
partial record is in the buffer at end-of-file, the routine that displays
the partial record displays characters until it encounters an end-of-file
mark (ASCII 26, or CONTROL-Z).

fcb            db    2,"TEXTFILEASC"
                db    26  dup (?)
buffer         db    128 dup (?),"$"
;
begin:         set_dta  buffer    ;see Function 1AH
                open  fcb          ;see Function 0FH
read_line:     read_seq  fcb      ;THIS FUNCTION
                cmp   al,02H       ;DTA too small?
                je    all_done     ;yes
                cmp   al,00H       ;end-of-file?
                jg    check_more   ;yes
                display  buffer    ;see Function 09H
                jmp   read_line    ;get another record
check_more:    cmp   al,03H       ;partial record in buffer?
                jne   all_done     ;no, go home
                xor   si,si        ;set index to 0
find_eof:      cmp   buffer[si],26 ;is character EOF?
                je    all_done     ;yes, no more to display
                display_char buffer[si]  ;see Function 02H
                inc   si           ;bump index
                jmp   find_eof     ;check next character
all_done:      close fcb          ;see Function 10H


Sequential Write (Function 15H)


Call:

AH = 15H
DS:DX
    Pointer to opened FCB


Return:

AL
    00H = Write completed successfully
    01H = Disk full
    02H = DTA too small

Function 15H writes a record to a specified file. DX must contain the
offset (from the segment address in DS) of an opened FCB. This call
writes the record pointed to by the Current Block field (offset 0CH) and
Current Record field (offset 1FH) at the Disk Transfer Address, then
increments the Current Block and Current Record fields.

The record size is taken from the value of the Record Size field
(offset 0EH) of the FCB. If the record size is less than a sector, the call
writes the data at the Disk Transfer Address to an MS-DOS buffer; MS-DOS
writes the buffer to disk when it contains a full sector of data, when the
file is closed, or when Function 0DH (Reset Disk) is issued.

AL returns a code that describes the processing:

Code  Meaning
───────────────────────────────────────────────────────────────────────────
0     Write completed successfully

1     Disk full; write canceled

2     Not enough room at the Disk Transfer Address to write one record;
        write canceled


Macro Definition:

write_seq  macro fcb
            mov   dx,offset fcb
            mov   ah,15H
            int   21H
            endm


Example:

The following program creates a file named dir.tmp on the disk in drive B,
containing the disk number (0=A, 1=B, etc.) and filename from each
directory entry on the disk.

record_size    equ   0EH           ;offset of Record Size
;                                  field in FCB
fcb1           db    2,"DIR     TMP"
                db    26 dup (?)
fcb2           db    2,"???????????"
                db    26 dup (?)
buffer         db    128 dup (?)
;
begin:      set_dta      buffer     ;see Function 1AH
            search_first fcb2       ;see Function 11H
            cmp          al,0FFH    ;directory entry found?
            je           all_done   ;no, no files on disk
            create       fcb1       ;see Function 16H
            mov          fcb1[record_size],12
                                    ;set record size to 12
write_it:   write_seq    fcb1       ;THIS FUNCTION
            cmp          al,0       ;write successful?
            jne          all_done   ;no, go home
            search_next  fcb2       ;see Function 12H
            cmp          al,FFH     ;directory entry found?
            je           all_done   ;no, go home
            jmp          write_it   ;yes, write the record
all_done:   close        fcb1       ;see Function 10H


Create File (Function 16H)


Call:

AH = 16H
DS:DX
    Pointer to unopened FCB


Return:

AL
    00H     = Empty directory found
    FFH     = No empty directory available

Function 16H creates a file. DX must contain the offset(from the segment
address in DS) of an unopened FCB. MS-DOS searches the directory for an
entry that matches the specified filename or, if there is no matching
entry, an empty entry.

If MS-DOS finds a matching entry, it opens the file and sets the
length to zero (in other words, if you try to create a file that already
exists, MS-DOS erases it and creates a new, empty file). If MS-DOS doesn't
find a matching entry but does find an empty directory entry, it opens the
file and sets its length to zero. In either case, the call creates the
file, and AL returns 0. If MS-DOS doesn't find a matching entry and there
is no empty entry, the call doesn't create the file, and AL returns FFH.

You can assign an attribute to the file by using an extended FCB with
the attribute byte set to the appropriate value (see Extended FCB in
Section 1.9.1).


Macro Definition:

create  macro fcb
        mov   dx,offset fcb
        mov   ah,16H
        int   21H
        endm


Example:

The following program creates a file named dir.tmp on the disk in drive B,
containing the disk number (0 = A, 1 = B, etc.) and filename from each
directory entry on the disk.

record_size    equ   0EH           ;offset of Record Size
;                                  field of FCB
fcb1           db    2,"DIR     TMP"
                db    26  dup (?)
fcb2           db    2,"???????????"
                db    26  dup (?)
buffer         db    128 dup (?)
;
begin:         set_dta   buffer     ;see Function 1AH
                search_first  fcb2   ;see Function 11H
                cmp       al,0FFH    ;directory entry found?
                je        all_done   ;no, no files on disk
                create    fcb1       ;THIS FUNCTION
                mov       fcb1[record_size],12
                                    ;set record size to 12
write_it:      write_seq fcb1       ;see Function 15H
                cmp       al,0       ;write successful
                jne       all_done   ;no, go home
                search_next  fcb2    ;see Function 12H
                cmp       al,FFH     ;directory entry found?
                je        all_done   ;no, go home
                jmp       write_it   ;yes, write the record
all_done:      close     fcb1       ;see Function 10H


Rename File (Function 17H)


Call:

AH = 17H
DS:DX
    Pointer to modified FCB


Return:

AL
    00H     = Directory entry found
    FFH     = No directory entry found
            or destination already exists


Comments:

Function 17H changes the name of an existing file. DX must contain the
offset (from the segment address in DS) of an FCB with the drive number
and filename filled in, followed by a second filename at offset 11H. DOS
searches the disk directory for an entry that matches the first filename.
This filename can contain wildcard characters.

If MS-DOS finds a matching directory entry and there is no directory
entry that matches the second filename, it changes the filename in the
directory entry to match the second filename in the modified FCB. AL then
returns zero. If the second filename does contain a wildcard character,
this call does not change the corresponding characters in the filename
of the directory entry.

You cannot use this function request to rename a hidden file, a system
file, or a subdirectory. If MS-DOS does not find a matching directory entry
or if it finds an entry for the second filename, AL returns FFH.


Macro Definition:

rename macro fcb,newname
        mov   dx,offset fcb
        mov   ah,17H
        int   21H
        endm


Example:

The following program prompts for the name of a file and a new name; it
then renames the file.

fcb               db    37 dup (?)
prompt1           db   "Filename: $"
prompt2           db   "New name: $"
reply             db    15 dup(?)
crlf              db    0DH,0AH,"$"
;
begin:            display  prompt1       ;see Function 09H
                    get_string  15,reply   ;see Function 0AH
                    display  crlf          ;see Function 09H
                    parse    reply[2],fcb  ;see Function 29H
                    display  prompt2       ;see Function 09H
                    get_string  15,reply   ;see Function 0AH
                    display  crlf          ;see Function 09H
                    parse    reply[2],fcb[16]
                                            ;see Function 29H
                    rename   fcb           ;THIS FUNCTION


Get Current Disk (Function 19H)


Call:

AH = 19H


Return:

AL
    Currently selected drive
    (0 = A, 1 = B, etc.)


Comments:


Function 19H returns the current drive in AL (0=A, 1=B, etc.).


Macro Definition:

current_disk  macro
                mov   ah,19H
                int   21H
                endm


Example:

The following program displays the default drive in a two-drive system.

message    db  "Current disk is $"
crlf       db   0DH,OAH,"$"
;
begin:     display  message         ;see Function 09H
            current_disk             ;THIS FUNCTION
            cmp      al,00H          ;is it disk A?
            jne      disk_b          ;no, it's disk B:
            display_char "A"         ;see Function 02H
            jmp      all_done
disk_b:    display_char "B"         ;see Function 02H
all_done:  display  crlf            ;see Function 09H


Set Disk Transfer Address (Function 1AH)set disk transfer address


Call:

AH = 1AH
DS:DX
    Disk Transfer Address


Return:

None


Comments:

Function 1AH sets the Disk Transfer Address. DX must contain the offset
(from the segment address in DS) of the Disk Transfer Address. Disk
transfers cannot wrap around from the end of the segment to the beginning,
nor can they overflow into another segment.

If you do not set the Disk Transfer Address, MS-DOS defaults to offset
80H in the Program Segment Prefix. You can check the current Disk Transfer
Address with Function 2FH (Get Disk Transfer Address).


Macro Definition:

set_dta  macro  buffer
            mov    dx,offset buffer
            mov    ah,1AH
            int    21H
            endm


Example:

The following program prompts for a letter, converts it to its alphabetic
sequence (A=1, B=2, etc.), then reads and displays the corresponding record
from a file named alphabet.dat that is on the disk in drive B. The file
contains 26 records, each 28 bytes long.

record_size     equ   0EH      ;offset of Record Size
                                ;field of FCB
relative_record equ   21H      ;offset of Relative Record
;                              field of FCB
fcb           db    2,"ALPHABETDAT"
                db    26  dup (?)
buffer        db    28 dup(?),"$"
prompt        db   "Enter letter: $"
crlf          db    0DH,0AH,"$"
;
begin:        set_dta  buffer       ;THIS FUNCTION
                open     fcb          ;see Function 0FH
                mov      fcb[record_size],28 ;set record size
get_char:     display  prompt       ;see Function 09H
                read_kbd_and_echo     ;see Function 01H
                cmp      al,0DH       ;just a CR?
                je       all_done     ;yes, go home
                sub      al,41H       ;convert ASCII
                                    ;code to record #
                mov      fcb[relative_record],al
                                    ;set relative record
                display  crlf         ;see Function 09H
                read_ran fcb          ;see Function 21H
                display  buffer       ;see Function 09H
                display  crlf         ;see Function 09H
                jmp      get_char     ;get another character
all_done:     close    fcb          ;see Function 10H


Get Default Drive Data (Function 1BH)


Call:

AH = 1BH


Return:

AL
    Sectors per cluster
CX
    Bytes per sector
DX
    Clusters per drive
DS:BX
    Pointer to FAT ID byte


Comments

Function 1BH retrieves data about the disk in the default drive.
The data returns in the following registers:

Register       Contents
───────────────────────────────────────────────────────────────────────────
AL             Number of sectors in a cluster (allocation unit)
CX             Number of bytes in a sector
DX             Number of clusters on the disk

BX returns the offset (to the segment address in DS) of the first
byte of the File Allocation Table (FAT), which identifies the type of disk
in the drive:

Value   Type of Drive
───────────────────────────────────────────────────────────────────────────
FF      Double-sided disk, 8 sectors per track, 40 tracks per side
FE      Single-sided disk, 8 sectors per track, 40 tracks per side
FD      Double-sided disk, 9 sectors per track, 40 tracks per side
FC      Single-sided disk, 9 sectors per track, 40 tracks per side
F9      Double-sided disk, 15 sectors per track, 40 tracks per side
F9      Double-sided disk, 9 sectors per track, 80 tracks per side
F8      Fixed disk

This call is similar to Function 36H (Get Disk Free Space), except that it
returns the address of the FAT ID byte in BX instead of the number of
available clusters. It is also similar to Function 1CH (Get Drive Data),
except that it returns data on the disk in the default drive instead of on
the disk in a specified drive. For a description of how MS-DOS stores data
on a disk, including a description of the File Allocation Table, see
Chapter 3, "MS-DOS Technical Information."

───────────────────────────────────────────────────────────────────────────
Warning
    The FAT ID byte is no longer adequate to identify the type of drive
    being used. See Chapter 2, "MS-DOS Device Drivers," for more details.
───────────────────────────────────────────────────────────────────────────


Macro Definition:

def_drive_data  macro
                push   ds
                mov    ah,1BH
                int    21H
                mov    al,byte ptr[bx]
                pop    ds
                endm


Example:

The following program displays a message that tells whether the default
drive is a disk or a fixed disk drive.

stdout      equ         1
;
msg         db          "Default drive is "
dskt        db          "disk."
fixed       db          "fixed."
crlf        db          ODH,OAH
;
begin:      write_handle stdout,msg,17      ;display message
            jc           write_error        ;routine not shown
            def_drive_data                  ;THIS FUNCTION
            cmp          byte ptr [bx],0F8H ;check FAT ID byte
            jne          disk           ;it's a disk
            write_handle stdout,fixed,6     ;see Function 40H
            jc           write_error        ;see Function 40H
            jmp short    all_done           ;clean up & go home
disk:   write_handle stdout,dskt,9          ;see Function 40H
all_done:   write_handle stdout,crlf,2  ;see Function 40H
            jc           write_error        ;routine not shown


Get Drive Data (Function 1CH)


Call:

AH = 1CH
DL
    Drive (0=default, 1=A, etc.)


Return:

AL
    0FFH if drive number is invalid;
    otherwise, sectors per cluster
CX
    Bytes per sector
DX
    Clusters per drive
DS:BX
    Pointer to FAT ID byte


Comments:

Function 1CH retrieves data about the disk in the specified drive. DL must
contain the drive number (0=default, 1=A, etc.). The data returns in the
following registers:

Register       Contents
───────────────────────────────────────────────────────────────────────────
AL             Number of sectors in a cluster (allocation unit)
CX             Number of bytes in a sector
DX             Number of clusters on the disk

BX returns the offset (to the segment address in DS) of the first byte
of the File Allocation Table (FAT), which identifies the type of disk in
the drive:

Value   Type of Drive
───────────────────────────────────────────────────────────────────────────
FF      Double-sided disk, 8 sectors per track, 40 tracks per side
FE      Single-sided disk, 8 sectors per track, 40 tracks per side
FD      Double-sided disk, 9 sectors per track, 40 tracks per side
FC      Single-sided disk, 9 sectors per track, 40 tracks per side
F9      Double-sided disk, 15 sectors per track, 40 tracks per side
F9      Double-sided disk, 9 sectors per track, 80 tracks per side
F8      Fixed disk

If the drive number in DL is invalid, AL returns 0FFH.

───────────────────────────────────────────────────────────────────────────
Warning
    The FAT ID byte is no longer adequate to identify the type of drive being
    used. See Chapter 2, "MS-DOS Device Drivers" for more details.
───────────────────────────────────────────────────────────────────────────

This call is similar to Function 36H (Get Disk Free Space), except that it
returns the address of the FAT ID byte in BX instead of the number of
available clusters. It is also similar to Function 1BH (Get Default Drive
Data), except that it returns data on the disk in the drive specified in DL
instead of the disk in the default drive. For a description of how MS-DOS
stores data on a disk, including a description of the File Allocation
Table, see Chapter 3, "MS-DOS Technical Information."


Macro Definition:

drive_data  macro  drive
            push   ds
            mov    dl,drive
            mov    ah,1BH
            int    21H
            mov    al, byte ptr[bx]
            pop    ds
            endm


Example:

The following program displays a message that tells whether drive B is a
disk or a fixed disk drive.

stdout      equ          1
:
msg         db           "Drive B is "
dskt        db           "disk."
fixed       db           "fixed."
crlf        db           ODH,OAH
;
begin:      write_handle stdout,msg,11      ;display message
            jc           write_error        ;routine not shown
            drive_data   2                  ;THIS FUNCTION
            cmp          byte ptr [bx],0F8H ;check FAT ID byte
            jne          disk           ;it's a disk
            write_handle stdout,fixed,6     ;see Function 40H
            jc           write_error        ;routine not shown
            jmp          all_done           ;clean up & go home
disk:   write_handle stdout,dskt,9      ;see Function 40H
all_done:   write_handle stdout,crlf,2      ;see Function 40H
            jc           write_error        ;routine not shown


Random Read (Function 21H)


Call:

AH = 21H
DS:DX
    Pointer to opened FCB


Return:

AL
    0 = Read completed successfully
    1 = End of file, record empty
    2 = DTA too small
    3 = End of file, partial record


Comments:

Function 21H reads (into the Disk Transfer Address) the record pointed to
by the Relative Record field (offset 20H) of the FCB. DX must contain the
offset (from the segment address in DS) of an opened FCB. The Current Block
field (offset 0CH) and Current Record field (offset 1FH) are set to agree
with the Relative Record field (offset 20H). The record is then loaded at
the Disk Transfer Address. The record length is taken from the Record Size
field (offset 0EH) of the FCB.

AL returns a code that describes the processing:

Code  Meaning
───────────────────────────────────────────────────────────────────────────
0     Read completed successfully

1     End-of-file; no data in the record

2     Not enough room at the Disk Transfer Address to read one record;
        read canceled

3     End-of-file; a partial record was read and padded to the record
        length with zeros


Macro Definition:

read_ran  macro  fcb
            mov    dx,offset fcb
            mov    ah,21H
            int    21H
            endm


Example:

The following program prompts for a letter, converts it to its alphabetic
sequence (A = 1, B = 2, etc.), then reads and displays the corresponding
record from a file named alphabet.dat that is on the disk in drive B. The
file contains 26 records, each 28 bytes long.

record_size     equ   0EH      ;offset of Record Size
                                ;field of FCB
relative_record equ   21H      ;offset of Relative Record
;                              field of FCB
fcb           db    2,"ALPHABETDAT"
                db    26  dup (?)
buffer        db    28 dup(?),"$"
prompt        db   "Enter letter: $"
crlf          db    0DH,0AH,"$"
;
begin:        set_dta  buffer            ;see Function 1AH
                open     fcb               ;see Function 0FH
                mov      fcb[record_size],28 ;set record size
get_char:     display  prompt            ;see Function 09H
                read_kbd_and_echo          ;see Function 01H
                cmp      al,0DH            ;just a CR?
                je       all_done          ;yes, go home
                sub      al,41H            ;convert ASCII code
                                            ;to record #
                mov      fcb[relative_record],al ;set relative
                                            ;record
                display  crlf              ;see Function 09H
                read_ran fcb               ;THIS FUNCTION
                display  buffer            ;see Function 09H
                display  crlf              ;see Function 09H
                jmp      get_char          ;get another char.
all_done:     close    fcb               ;see Function 10H


Random Write (Function 22H)


Call:

AH = 22H
DS:DX
    Pointer to opened FCB


Return:

AL
    00H = Write completed successfully
    01H = Disk full
    02H = DTA too small


Comments:

Function 22H writes (from the Disk Transfer Address) the record pointed to
by the Relative Record field (offset 20H) of the FCB. DX must contain the
offset from the segment address in DS of an opened FCB. The Current Block
(offset 0CH) and Current Record (offset 1FH) fields are set to agree with
the Relative Record field (offset 20H). This record is then written from
the Disk Transfer Address.

The record length is taken from the Record Size field (offset 0EH) of
the FCB. If the record size is less than a sector, the data at the Disk
Transfer Address is written to a buffer, the buffer is written to disk when
it contains a full sector of data; or when a program closes the file, or
when it issues Function 0DH (Reset Disk).

AL returns a code that describes the processing:

Code  Meaning
───────────────────────────────────────────────────────────────────────────
0     Write completed successfully

1     Disk is full

2     Not enough room at the Disk Transfer Address to write one record;
        write canceled


Macro Definition:

write_ran  macro  fcb
            mov    dx,offset fcb
            mov    ah,22H
            int    21H
            endm


Example:

The following program prompts for a letter, converts it to its alphabetic
sequence (A = 1, B = 2, etc.), then reads and displays the corresponding
record from a file named alphabet.dat that is on the disk in drive B.
After displaying the record, it prompts you to enter a changed record. If
you type a new record, it is written to the file, but if you just press the
RETURN key, the record is not replaced. The file contains 26 records, each
28 bytes long.

record_size     equ   0EH      ;offset of Record Size
                                ;field of FCB
relative_record equ   21H      ;offset of Relative Record
;                              field of FCB
fcb        db    2,"ALPHABETDAT"
            db    26  dup (?)
buffer     db    28 dup(?),0DH,0AH,"$"
prompt1    db   "Enter letter: $"
prompt2    db   "New record (RETURN for no change): $"
crlf       db    0DH,0AH,"$"
reply      db    28 dup (32)
blanks     db    26 dup (32)
;
begin:     set_dta  buffer            ;see Function 1AH
            open     fcb               ;see Function 0FH
            mov      fcb[record_size],28 ;set record size
get_char:  display  prompt1           ;see Function 09H
            read_kbd_and_echo          ;see Function 01H
            cmp      al,0DH            ;just a carriage return?
            je       all_done          ;yes, go home
            sub      al,41H            ;convert ASCII
                                        ;code to record #
            mov      fcb[relative_record],al
                                        ;set relative record
            display  crlf              ;see Function 09H
            read_ran fcb               ;THIS FUNCTION
            display  buffer            ;see Function 09H
            display  crlf              ;see Function 09H
            display  prompt2           ;see Function 09H
            get_string 27,reply        ;see Function 0AH
            display  crlf              ;see Function 09H
            cmp      reply[1],0        ;was anything typed
                                        ;besides CR?
            je       get_char          ;no
                                        ;get another char.
            xor      bx,bx             ;to load a byte
            mov      bl,reply[1]       ;use reply length as
                                        ;counter
            move_string blanks,buffer,26 ;see chapter end
            move_string reply[2],buffer,bx ;see chapter end
            write_ran fcb              ;THIS FUNCTION
            jmp      get_char          ;get another character
all_done:  close    fcb               ;see Function 10H


Get File Size (Function 23H)


Call:

AH = 23H
DS:DX
    Pointer to unopened FCB


Return:

AL
    00H = Directory entry found
    FFH = No directory entry found


Comments:

Function 23H returns the size of a specified file. DX must contain the
offset (from the segment address in DS) of an unopened FCB.

If there is a directory entry that matches the specified file, MS-DOS
divides the File Size field (offset 1CH) of the directory entry by the
Record Size field (offset 0EH) of the FCB, puts the result in the Relative
Record field (offset 20H) of the FCB, and returns 00 in AL.

You must set the Record Size field of the FCB to the correct value
before calling this function. If the Record Size field is not an even
divisor of the File Size field, the value set in the Relative Record field
is rounded up, yielding a value larger than the actual number of records.

If this call does not find a matching directory, AL returns FFH.


Macro Definition:

file_size  macro  fcb
            mov    dx,offset fcb
            mov    ah,23H
            int    21H
            endm


Example:

The following program prompts for the name of a file, opens the file to
fill in the Record Size field of the FCB, issues a File Size system call,
and displays the record length and number of records.

fcb           db      37 dup  (?)
prompt        db     "File name: $"
msg1          db     "Record length:     ",0DH,0AH,"$"
msg2          db     "Records:      ",0DH,0AH,"$"
crlf          db      0DH,0AH,"$"
reply         db      17 dup(?)
;
begin:        display prompt            ;see Function 09H
                get_string 17,reply       ;see Function 0AH
                cmp     reply[1],0        ;just a CR?
                jne     get_length        ;no, keep going
                jmp     all_done          ;yes, go home
get_length:   display crlf              ;see Function 09H
                parse   reply[2],fcb      ;see Function 29H
                open    fcb               ;see Function 0FH
                file_size fcb             ;THIS FUNCTION
                mov     ax,word ptr fcb[33] ;get record length
                convert ax,10,msg2[9]     ;see end of chapter
                mov     ax,word ptr fcb[14] ; get record number
                convert ax,10,msg1[15]    ;see end of chapter
                display msg1              ;see Function 09H
                display msg2              ;see Function 09H
all_done:     close   fcb               ;see Function 10H


Set Relative Record (Function 24H)


Call:

AH = 24H
DS:DX
    Pointer to opened FCB


Return:

None


Comments:

Function 24H sets the Relative Record field (offset 20H) to the file
address specified by the Current Block field (offset 0CH) and Current
Record field (offset 1FH). DX must contain the offset (from the segment
address in DS) of an opened FCB. You use this call to set the file pointer
before a Random Read or Write (Functions 21H, 22H, 27H, or 28H).


Macro Definition:

set_relative_record  macro  fcb
                        mov    dx,offset fcb
                        mov    ah,24H
                        int    21H
                        endm


Example:

The following program copies a file using the Random Block Read and Random
Block Write system calls. It speeds the copy by setting the record length
equal to the file size and the record count to 1, and by using a buffer of
32K bytes. It positions the file pointer by setting the Current Record
field (offset 1FH) to 1 and using Function 24H (Set Relative Record) to
make the Relative Record field (offset 20H) point to the same record that
the combination of the Current Block field (offset 0CH) and Current Record
field (offset 1FH) points to.

current_record  equ   20H        ;offset of Current Record
                                    ;field of FCB
fil_size        equ   10H        ;offset of File Size
;                                field of FCB
fcb       db      37 dup (?)
filename  db      17 dup(?)
prompt1   db     "File to copy: $"  ;see Function 09H for
prompt2   db     "Name of copy: $"  ;explanation of $
crlf      db      0DH,0AH,"$"
file_length  dw   ?
buffer    db      32767 dup(?)
;
begin:    set_dta  buffer                    ;see Function 1AH
            display  prompt1                   ;see Function 09H
            get_string  15,filename            ;see Function 0AH
            display  crlf                      ;see Function 09H
            parse    filename[2],fcb           ;see Function 29H
            open     fcb                       ;see Function 0FH
            mov      fcb[current_record],0     ;set Current Record field
            set_relative_record  fcb           ;THIS FUNCTION
            mov      ax,word ptr fcb[fil_size] ;get file size
            mov      file_length,ax            ;save it for ran_block_write
            ran_block_read  fcb,1,ax           ;see Function 27H
            display  prompt2                   ;see Function 09H
            get_string  15,filename            ;see Function 0AH
            display  crlf                      ;see Function 09H
            parse    filename[2],fcb           ;see Function 29H
            create   fcb                       ;see Function 16H
            mov      fcb[current_record],0     ;set Current Record field
            set_relative_record  fcb           ;THIS FUNCTION
            mov      ax,file_length            ;get original file
            ran_block_write  fcb,1,ax          ;see Function 28H
            close    fcb                       ;see Function 10H


Set Interrupt Vector (Function 25H)


Call:

AH = 25H
AL
    Interrupt number
DS:DX
    Pointer to interrupt-handling
    routine


Return:

None


Comments:

Function 25H sets the address in the interrupt vector table for the
specified interrupt.

AL must contain the number of the interrupt. DX must contain the
offset (to the segment address in DS) of the interrupt-handling routine.

To avoid compatibility problems, programs should never set an interrupt
vector directly and should never use Interrupt 25H to read directly from
memory. To get a vector, use Function 35H (Get Interrupt Vector), and to
set a vector, use Function 25H, unless your program must be compatible with
MS-DOS versions earlier than 2.0.


Macro Definition:

set_vector  macro  interrupt,handler_start
            mov    al,interrupt
            mov    dx,offset handler_start
            mov    ah,25H
            endm


Example:

Because interrupts tend to be machine-specific, no example is shown.


Create New PSP (Function 26H)


Call:

AH = 26H
DX
    Segment address of new PSP


Return:

None


Comments:

This function request has been superseded. Use Function 4BH (Load and
Execute Program) to run a child process, unless your program must be
compatible with MS-DOS versions earlier than 2.0.

Function 26H creates a new Program Segment Prefix. DX must contain the
segment address where the new PSP is to be created.


Macro Definition:

create_psp  macro  seg_addr
            mov    dx,seg_addr
            mov    ah,26H
            endm


Example:

Because Function 4BH (Load and Execute Program) and 4B03H (Load Overlay)
have superseded this function request, no example is shown.


Random Block Read (Function 27H)


Call:

AH = 27H
DS:DX
    Pointer to opened FCB
CX
    Number of blocks to read


Return:

AL
    0 = Read completed successfully
    1 = End of file, empty record
    2 = DTA too small
    3 = End of file, partial record
CX
    Number of blocks read


Comments:

Function 27H reads one or more records from a specified file to the Disk
Transfer Address. DX must contain the offset (to the segment address in DS)
of an opened FCB. CX must contain the number of records to read. Reading
starts at the record specified by the Relative Record field (offset 20H);
you must set this field with Function 24H (Set Relative Record) before
calling this function.

DOS calculates the number of bytes to read by multiplying the value in
CX by the Record Size field (offset 0EH) of the FCB.

CX returns the number of records read. The Current Block field (offset
0CH), Current Record field (offset 1FH), and Relative Record field (offset
20H) are set to address the next record.

If you call this function with CX=0, no records are read.

AL returns a code that describes the processing:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
0        Read completed successfully

1        End-of-file; no data in the record

2        Not enough room at the Disk Transfer Address to read one record;
            read canceled

3        End-of-file; a partial record was read and padded to
            the record length with zeros


Macro Definition:

ran_block_read  macro  fcb,count,rec_size
                mov    dx,offset fcb
                mov    cx,count
                mov    word ptr fcb[14],rec_size
                mov    ah,27H
                int    21H
                endm


Example:

The following program copies a file by using Function 27H (Random Block
Read). This program speeds the copy process by specifying a record count
of 1 and a record length equal to the file size, and by using a buffer of
32K bytes; the file is read as a single record (compare to the sample
program for Function 28H that specifies a record length of 1 and a record
count equal to the file size).

current_record  equ  20H  ;offset of Current Record field
fil_size        equ  10H  ;offset of File Size field
;
fcb       db      37 dup (?)
filename  db      17 dup(?)
prompt1   db     "File to copy: $"         ;see Function 09H for
prompt2   db     "Name of copy: $"         ;explanation of $
crlf      db      0DH,0AH,"$"
file_length  dw   ?
buffer    db      32767 dup(?)
;
begin:    set_dta    buffer                ;see Function 1AH
            display    prompt1               ;see Function 09H
            get_string 15,filename           ;see Function 0AH
            display    crlf                  ;see Function 09H
            parse      filename[2],fcb       ;see Function 29H
            open       fcb                   ;see Function 0FH
            mov        fcb[current_record],0 ;set Current Record field
            set_relative_record fcb          ;see Function 24H
            mov        ax, word ptr fcb[fil_size]
                                            ;get file size
            mov        file_length,ax        ;save it
            ran_block_read  fcb,1,ax         ;THIS FUNCTION
            display    prompt2               ;see Function 09H
            get_string 15,filename           ;see Function 0AH
            display    crlf                  ;see Function 09H
            parse      filename[2],fcb       ;see Function 29H
            create     fcb                   ;see Function 16H
            mov        fcb[current_record],0 ;set current Record field
            set_relative_record fcb          ;see Function 24H
            ran_block_write  fcb,1,ax        ;see Function 28H
            close      fcb                   ;see Function 10H


Random Block Write (Function 28H)


Call:

AH = 28H
DS:DX
    Pointer to opened FCB
CX
    Number of blocks to write
    (0 = set File Size field)


Return:

AL
    00H = Write completed successfully
    01H = Disk full
    02H = End of segment
CX
    Number of blocks written


Comments:

Function 28H writes one or more records to a specified file from the Disk
Transfer Address. DX must contain the offset (to the segment address in DS)
of an opened FCB; CX must contain either the number of records to write
or 0.

If CX is not 0, the specified number of records is written to the file,
starting at the record specified in the Relative Record field (offset 20H)
of the FCB. If CX is 0, no records are written, but MS-DOS sets the
File Size field (offset 1CH) of the directory entry to the value in the
Relative Record field (offset 20H) of the FCB. To satisfy this new file
size, disk allocation units are allocated or released, as required.

MS-DOS calculates the number of bytes to write by multiplying the
value in CX by the Record Size field (offset 0EH) of the FCB. CX returns
the number of records written; the Current Block field (offset 0CH),
Current Record field (offset 1FH), and Relative Record (offset 20H) field
are set to address the next record.

AL returns a code that describes the processing:

Code  Meaning
───────────────────────────────────────────────────────────────────────────
0     Write completed successfully

1     Disk full. No records written

2     Not enough room at the Disk Transfer Address to write one record;
        write canceled


Macro Definition:

ran_block_write  macro  fcb,count,rec_size
                    mov    dx,offset fcb
                    mov    cx,count
                    mov    word ptr fcb[14],rec_size
                    mov    ah,28H
                    int    21H
                    endm


Example:

The following program copies a file using Function 27H (Random Block Read)
and Function 28H (Random Block Write). This program speeds the copy process
by specifying a record count equal to the file size and a record length of
1, and by using a buffer of 32K bytes; the file is copied quickly with one
disk access each to read and write (compare to the sample program of
Function 27H, which specifies a record count of 1 and a record length
equal to file size).

current_record  equ  20H   ;offset of Current Record field
fil_size        equ  10H   ;offset of File Size field
;
fcb       db      37 dup (?)
filename  db      17 dup(?)
prompt1   db     "File to copy: $"   ;see Function 09H for
prompt2   db     "Name of copy: $"   ;explanation of $
crlf      db      0DH,0AH,"$"
num_recs  dw      ?
buffer    db      32767 dup(?)
;
begin:    set_dta    buffer      ;see Function 1AH
            display    prompt1     ;see Function 09H
            get_string 15,filename ;see Function 0AH
            display    crlf        ;see Function 09H
            parse      filename[2],fcb  ;see Function 29H
            open       fcb              ;see Function 0FH
            mov        fcb[current_record],0;set Current Record field
            set_relative_record fcb     ;see Function 24H
            mov        ax, word ptr fcb[fil_size]
                                        ;get file size
            mov        num_recs,ax      ;save it
            ran_block_read  fcb,num_recs,1  ;THIS FUNCTION
            display    prompt2          ;see Function 09H
            get_string 15,filename      ;see Function 0AH
            display    crlf             ;see Function 09H
            parse      filename[2],fcb  ;see Function 29H
            create     fcb              ;see Function 16H
            mov        fcb[current_record],0  ;set Current Record field
            set_relative_record fcb     ;see Function 24H
            ran_block_write fcb,num_recs,1 ;see Function 28H
            close      fcb              ;see Function 10H


Parse File Name (Function 29H)


Call:

AH = 29H
AL
    Controls parsing (see text)
DS:SI
    Pointer to string to parse
ES:DI
    Pointer to buffer for unopened FCB


Return:

AL
    00H     = No wildcard characters
    01H     = Wildcard characters used
    FFH     = Drive letter invalid
DS:SI
    Pointer to first byte past
    string that was parsed
ES:DI
    Pointer to unopened FCB


Comments:

Function 29H parses a string for a filename of the form
drive:filename.extension. SI must contain the offset (to the segment
address in DS) of the string to parse; DI must contain the offset (to the
segment address in ES) of an area of memory large enough to hold an
unopened FCB. If the string contains a valid filename, this call creates
a corresponding unopened FCB at ES:DI.

AL controls the parsing. Bits 4-7 must be 0; bits 0-3 have the
following meaning:


        Table 1.20
        Bit values for Function 29H
╓┌──────────┌───────┌────────────────────────────────────────────────────────╖
        Bit   Value   Meaning
        ────────────────────────────────────────────────────────────────────
        0     0       Stop parsing if a file separator is encountered.
        Bit   Value   Meaning
        0     0       Stop parsing if a file separator is encountered.

            1       Ignore leading separators.

        1     0       Set the drive number in the FCB to 0 (current
                    drive) if the string does not contain a drive
                    number.

            1       Leave the drive number in the FCB unchanged if
                    the string does not contain a drive number.

        2     0       Set the filename in the FCB to eight blanks if
                    the string does not contain a filename.

            1       Leave the filename in the FCB unchanged if the
                    string does not contain a filename.

        3     1       Leave the extension in the FCB unchanged if the
                    string does not contain an extension.

        Bit   Value   Meaning

            0       Set the extension in the FCB to three blanks if
                    the string does not contain an extension.


If the string contains a filename or extension that includes an asterisk
(*), all remaining characters in the name or extension are set to question
marks (?).


Filename separators:

    :  ;  . ,  =  +  /  "  [  ]  \  <  >  |  space  tab

Filename terminators include all the filename separators, plus any control
character. A filename cannot contain a filename terminator, since if the
call encounters one, parsing stops.

If the string contains a valid filename:

    ■ AL returns 1 if the filename or extension contains a wildcard
        character (* or ?); AL returns 0 if neither the filename nor
        extension contains a wildcard character.

    ■ DS:SI points to the first character following the parsed string.

    ■ ES:DI points to the first byte of the unopened FCB.

If the drive letter is invalid, AL returns FFH. If the string does not
contain a valid filename, ES:DI+1 points to a blank.


Macro Definition:

parse macro string,fcb
        mov   si,offset string
        mov   di,offset fcb
        push  es
        push  ds
        pop   es
        mov   al,0FH        ;bits 0-3 on
        mov   ah,29H
        int   21H
        pop   es
        endm


Example:

The following program verifies the existence of the file named in reply to
the prompt.

fcb           db      37 dup (?)
prompt        db     "Filename: $"
reply         db      17 dup(?)
yes           db     "File exists",0DH,0AH,"$"
no            db     "File does not exist",0DH,0AH,"$"
                crlf    db 0DH,0AH,"$"
;
begin:        display    prompt        ;see Function 09H
                get_string 15,reply      ;see Function 0AH
                parse      reply[2],fcb  ;THIS FUNCTION
                display    crlf          ;see Function 09H
                search_first  fcb        ;see Function 11H
                cmp        al,0FFH       ;dir. entry found?
                je         not_there     ;no
                display    yes           ;see Function 09H
                jmp        return
not_there:    display    no


Get Date (Function 2AH)


Call:

AH = 2AH


Return:

CX
    Year (1980-2099)
DH
    Month (1-12)
DL
    Day (1-31)
AL
    Day of week (0=Sun., 6=Sat.)


Comments:

Function 2AH returns the current date set in the operating system as binary
numbers in CX and DX:

Register       Contents
───────────────────────────────────────────────────────────────────────────
CX             Year (1980-2099)
DH             Month (1=January, 2=February, etc.)
DL             Day of month (1-31)
AL             Day of week (0=Sunday, 1=Monday, etc.)


Macro Definition:

get_date  macro
            mov   ah,2AH
            int   21H
            endm


Example:

The following program gets the date, increments the day, increments the
month or year, if necessary, and sets the new date.

month      db      31,28,31,30,31,30,31,31,30,31,30,31
;
begin:     get_date            ;THIS FUNCTION
            inc    dl           ;increment day
            xor    bx,bx        ;so BL can be used as index
            mov    bl,dh        ;move month to index register
            dec    bx           ;month table starts with 0
            cmp    dl,month[bx] ;past end of month?
            jle    month_ok     ;no, set new date
            mov    dl,1         ;yes, set day to 1
            inc    dh           ;and increment month
            cmp    dh,12        ;past end of year?
            jle    month_ok     ;no, set new date
            mov    dh,1         ;yes, set month to 1
            inc    cx           ;increment year
month_ok:  set_date cx,dh,dl   ;see Function 2AH


Set Date (Function 2BH)


Call:

AH = 2BH
CX
    Year (1980-2099)
DH
    Month (1-12)
DL
    Day (1-31)


Return:

AL
    00H     = Date was valid
    FFH     = Date was invalid


Comments:

Function 2BH sets the date in the operating system (and in the CMOS clock,
if one exists). Registers CX and DX must contain a valid date in binary:

Register       Contents
───────────────────────────────────────────────────────────────────────────
CX             Year (1980-2099)
DH             Month (1=January, 2=February, etc.)
DL             Day of month (1-31)

If the date is valid, the call sets it and AL returns 0. If the date
is not valid, the function aborts and AL returns FFH.


Macro Definition:

set_date  macro  year,month,day
            mov    cx,year
            mov    dh,month
            mov    dl,day
            mov    ah,2BH
            int    21H
            endm


Example:

The following program gets the date, increments the day, increments the
month or year, if necessary, and sets the new date.

month      db      31,28,31,30,31,30,31,31,30,31,30,31
;
begin:     get_date            ;see Function 2AH
            inc    dl           ;increment day
            xor    bx,bx        ;so BL can be used as index
            mov    bl,dh        ;move month to index register
            dec    bx           ;month table starts with 0
            cmp    dl,month[bx] ;past end of month?
            jle    month_ok     ;no, set the new date
            mov    dl,1         ;yes, set day to 1
            inc    dh           ;and increment month
            cmp    dh,12        ;past end of year?
            jle    month_ok     ;no, set the new date
            mov    dh,1         ;yes, set the month to 1
            inc    cx           ;increment year
month_ok:  set_date cx,dh,dl   ;THIS FUNCTION


Get Time (Function 2CH)


Call:

AH = 2CH


Return:

CH
    Hour (0-23)
CL
    Minutes (0-59)
DH
    Seconds (0-59)
DL
    Hundredths (0-99)


Comments:

Function 2CH returns the current time set in the operating system (and sets
the CMOS clock, if one exists) as binary numbers in CX and DX:

Register        Contents
───────────────────────────────────────────────────────────────────────────
CH              Hour (0-23)
CL              Minutes (0-59)
DH              Seconds (0-59)
DL              Hundredths of a second (0-99)

Depending on how your hardware keeps time, some of these fields may be
irrelevant. As an example, many CMOS clock chips do not resolve more than
seconds. In such a case, the value in DL will probably always be 0.


Macro Definition:

get_time  macro
            mov   ah,2CH
            int   21H
            endm


Example:

The following program displays the time continuously until you press
any key.

time         db    "00:00:00.00",0DH,"$"
;
begin:       get_time               ;THIS FUNCTION
                byte_to_dec ch,time    ;see end of chapter
                byte_to_dec cl,time[3] ;see end of chapter
                byte_to_dec dh,time[6] ;see end of chapter
                byte_to_dec dl,time[9] ;see end of chapter
                display time           ;see Function 09H
                check_kbd_status       ;see Function 0BH
                cmp     al,0FFH        ;has a key been pressed?
                je      return         ;yes, terminate
                jmp     begin          ;no, display time


Set Time (Function 2DH)


Call:

AH = 2DH
CH
    Hour (0-23)
CL
    Minutes (0-59)
DH
    Seconds (0-59)
DL
    Hundredths (0-99)


Return:

AL
    00H     = Time was valid
    FFH     = Time was invalid


Comments:

Function 2DH sets the time in the operating system. Registers CX and DX
must contain a valid time in binary:

Register       Contents
───────────────────────────────────────────────────────────────────────────
CH             Hour (0-23)
CL             Minutes (0-59)
DH             Seconds (0-59)
DL             Hundredths of a second (0-9)

Depending on how your hardware keeps time, some of these fields may be
irrelevant. As an example, many CMOS clock chips do not resolve more than
seconds. In such a case, the value in DL will not be relevant.

If the time is valid, the call sets it and AL returns 0. If the time
is not valid, the function aborts and AL returns FFH.


Macro Definition:

set_time  macro  hour,minutes,seconds,hundredths
            mov    ch,hour
            mov    cl,minutes
            mov    dh,seconds
            mov    dl,hundredths
            mov    ah,2DH
            int    21H
            endm


Example:

The following program sets the system clock to 0 and displays the time
continuously. When you type a character, the display freezes; when you type
another character, the clock is reset to 0 and the display starts again.

time          db  "00:00:00.00",0DH,0AH,"$"
;
begin:        set_time  0,0,0,0       ;THIS FUNCTION
read_clock:   get_time                ;see Function 2CH
                byte_to_dec  ch,time    ;see end of chapter
                byte_to_dec  cl,time[3] ;see end of chapter
                byte_to_dec  dh,time[6] ;see end of chapter
                byte_to_dec  dl,time[9] ;see end of chapter
                display  time           ;see Function 09H
                dir_console_io 0FFH     ;see Function 06H
                cmp      al,00H         ;was a char. typed?
                jne      stop           ;yes, stop the timer
                jmp      read_clock     ;no keep timer on
stop:         read_kbd                ;see Function 08H
                jmp      begin          ;keep displaying time


Set/Reset Verify Flag (Function 2EH)


Call:

AH = 2EH
AL
    0 = Do not verify
    1 = Verify


Return:

None


Comments:

Function 2EH tells MS-DOS whether to verify each disk write. If AL is 1,
verify is on; if AL is 0, verify is off. MS-DOS checks this flag each time
it writes to a disk.

The flag is normally off; you may wish to turn it on when writing
critical data to disk. Because disk errors are rare and verification slows
writing, you will probably want to leave it off at other times. You can
check the setting with Function 54H (Get Verify State).


Macro Definition:

verify  macro  switch
        mov    al,switch
        mov    ah,2EH
        int    21H
        endm


Example:

The following program copies the contents of a single-sided disk in drive A
to the disk in drive B, verifying each write. It uses a buffer of
32K bytes.

on           equ   1
off          equ   0
;
prompt       db   "Source in A, target in B",0DH,0AH
                db   "Any key to start. $"
first        dw    0
buffer       db    60 dup (512 dup(?))   ;60 sectors
;
begin:       display prompt              ;see Function 09H
                read_kbd                    ;see Function 08H
                verify on                   ;THIS FUNCTION
                mov    cx,6                 ;copy 60 sectors
                                            ;6 times
copy:        push   cx                   ;save counter
                abs_disk_read  0,buffer,60,first ;see Int 25H
                abs_disk_write  1,buffer,64,first ;see Int 26H
                add    first,60             ;do next 60 sectors
                pop    cx                   ;restore counter
                loop   copy                 ;do it again
                verify off                  ;THIS FUNCTION


Get Disk Transfer Address (Function 2FH)


Call:

AH = 2FH


Return:

ES:BX
    Pointer to Disk Transfer Address


Comments:

Function 2FH returns the segment address of the current Disk Transfer
Address in ES and the offset in BX.


Macro Definition:

get_dta  macro
            mov    ah,2fH
            int    21H
            endm


Example:

The following program displays the current Disk Transfer Address in the
form:  segment:offset.

message   db      "DTA --        :    ",0DH,0AH,"$"
sixteen   db       10H
temp      db       2 dup (?)
;
begin:    get_dta                      ;THIS FUNCTION
            mov    word ptr temp,ex      ;To access each byte
            convert temp[1],sixteen,message[07H]  ;See end of
            convert temp,sixteen,message[09H]    ;chapter for
            convert bh,sixteen,message[0CH]      ;description
            convert bl,sixteen,message[0EH]      ;of CONVERT
            display message              ;See Function 09H


Get MS-DOS Version Number (Function 30H)


Call:

AH = 30H


Return:

AL
    Major version number
AH
    Minor version number
BH
    OEM serial number
BL:CX
    24-bit user (serial) number


Comments:

Function 30H returns the MS-DOS version number. AL returns the major
version number; AH returns the minor version number. (For example,
MS-DOS 3.0 returns 3 in AL and 0 in AH.)

If AL returns 0, the MS-DOS version is earlier than 2.0.


Macro Definition:

get_version  macro
                mov    ah,30H
                int    21H
                endm


Example:

The following program displays the MS-DOS version if it is 1.28 or greater.

message   db      "MS-DOS Version  . ",0DH,0AH,"$"
ten       db       0AH                 ;For CONVERT
;
begin:    get_version                  ;THIS FUNCTION
            cmp     al,0                 ;1.28 or later?
            jng     return               ;No, go home
            convert al,ten,message[0FH]  ;See end of chapter
            convert ah,ten,message[12H]  ;for description
            display message              ;See Function 09H


Keep Process (Function 31H)


Call:

AH = 31H
AL
    Return code
DX
    Memory size, in paragraphs


Return:

None


Comments:

Function 31H makes a program remain resident after it terminates. You can
use it to install device-specific interrupt handlers. But unlike Interrupt
27H (Terminate But Stay Resident), this function request allows more than
64K bytes to remain resident and does not require CS to contain the segment
address of the Program Segment Prefix. You should use Function 31H to
install a resident program unless your program must be compatible with
MS-DOS versions earlier than 2.0.

DX must contain the number of paragraphs of memory required by the
program (one paragraph = 16 bytes). AL contains an exit code.

Be careful when using this function with .exe programs. The value in
DX must be the total size to remain resident, not just the size of the code
segment which is to remain resident. A typical error is to forget about
the 100H-byte program-header-prefix and give a value in DX that is 10H
too small.

MS-DOS terminates the current process and tries to set the memory
allocation to the number of paragraphs in DX. No other allocation blocks
belonging to the process are released.

By using Function 4DH (Get Return Code of Child Process), the parent
process can retrieve the process's exit code from AL. (You can test this
exit code by using the if command with errorlevel.)


Macro Definition:

keep_process  macro return_code,last_byte
                mov   al,return_code
                mov   dx,offset last_byte
                mov   cl,4
                shr   dx,cl
                inc   dx
                mov   ah,31H
                int   21H
                endm


Example:

Because the most common use of this call is to install a machine-specific
routine, an example is not shown. The macro definition, however, shows the
calling syntax.


CONTROL-C Check (Function 33H)


Call:

AH = 33H
AL
    0 = Get state
    1 = Set state
DL (if AL=1)
    0 = Off
    1 = On


Return:

DL (if AL=0)
    0 = Off
    1 = On
AL
    FFH = error (AL was neither 0 nor 1
            when call was made)


Comments:

Function 33H gets or sets the state of CONTROL-C (or CONTROL-BREAK for IBM
compatibles) checking in MS-DOS. AL must contain a code that specifies the
requested action:

Code  Meaning
───────────────────────────────────────────────────────────────────────────
0     Current state of CONTROL-C checking in DL
1     Set state of CONTROL-C checking to the value in DL

If AL is 0, DL returns the current state (0=off, 1=on). If AL is 1, the
value in DL specifies the state to be set (0=off, 1=on). If AL is neither 0
nor 1, AL returns FFH and the state of CONTROL-C checking is unaffected.

MS-DOS normally checks for CONTROL-C only when carrying out certain
function requests in the 01H through 0CH group (see the description of
specific calls for details). When CONTROL-C checking is on, MS-DOS checks
for CONTROL-C when carrying out any function request. For example, if
CONTROL-C checking is off, all disk I/O proceeds without interruption, but
if it is on, the CONTROL-C interrupt is issued at the function request that
initiates the disk operation.

───────────────────────────────────────────────────────────────────────────
Note
    Programs that use Function 06H (Direct Console I/O) or 07H (Direct
    Console Input) to read CONTROL-C as data must ensure that the CONTROL-C
    checking is off.
───────────────────────────────────────────────────────────────────────────


Macro Definition:

ctrl_c_ck  macro  action,state
            mov    al,action
            mov    dl,state
            mov    ah,33H
            int    21H
            endm


Example:

The following program displays a message that tells whether CONTROL-C
checking is on or off:

message   db       "CONTROL-C checking ","$"
on        db       "on","$",0DH,0AH,"$"
off       db       "off","$",0DH,0AH,"$"
;
begin:    display   message          ;See Function 09H
            ctrl_c_ck 0                ;THIS FUNCTION
            cmp       dl,0             ;Is checking off?
            jg        ck_on            ;No
            display   off              ;See Function 09H
            jmp       return           ;Go home
ck_on:    display   on               ;See Function 09H


Get Interrupt Vector (Function 35H)


Call:

AH = 35H
AL
    Interrupt number


Return:

ES:BX
    Pointer to interrupt routine


Comments:

Function 35H gets the address from the interrupt-vector table for the
specified interrupt. AL must contain the number of an interrupt.

ES returns the segment address of the interrupt handler; BX returns
the offset.

To avoid compatibility problems, programs should never read an
interrupt vector directly from memory, nor set an interrupt vector by
writing it into memory. Use this function request to get a vector and
Function 25H (Set Interrupt Vector) to set a vector, unless your program
must be compatible with MS-DOS versions earlier than 2.0.


Macro Definition:

get_vector  macro  interrupt
            mov    al,interrupt
            mov    ah,35H
            int    21H
            endm


Example:

The following program displays the segment and offset (CS:IP) for the
handler for Interrupt 25H (Absolute Disk Read).

message   db     "Interrupt 25H -- CS:0000 IP:0000"
            db      0DH,0AH,"$"
vec_seg   db      2 dup (?)
vec_off   db      2 dup (?)
;
begin:    push    es                    ;save ES
            get_vector 25H                ;THIS FUNCTION
            mov     ax,es                 ;INT25H segment in AX
            pop     es                    ;save ES
            convert ax,16,message[20]     ;see end of chapter
            convert bx,16,message[28]     ;see end of chapter
            display message               ;See Function 09H


Get Disk Free Space (Function 36H)


Call:

AH = 36H
DL
    Drive (0=default, 1=A, etc.)


Return:

AX
    0FFFFH if drive number is invalid;
    otherwise, sectors per cluster
BX
    Available clusters
CX
    Bytes per sector
DX
    Clusters per drive


Comments:

Function 36H returns the number of clusters available on the disk in the
specified drive, and the information necessary to calculate the number of
bytes available on the disk. DL must contain a drive number (0=default,
1=A, etc.). If the drive number is valid, MS-DOS returns the information
in the following registers:

Register       Contents
───────────────────────────────────────────────────────────────────────────
AX             Sectors per cluster
BX             Available clusters
CX             Bytes per sector
DX             Total clusters

If the drive number is invalid, AX returns 0FFFFH.

This call supersedes Functions 1BH and 1CH in earlier MS-DOS versions.


Macro Definition:

get_disk_space  macro  drive
                mov    dl,drive
                mov    ah,36H
                int    21H
                endm


Example:

The following program displays the space information for the disk in
drive B.

message   db "      clusters on drive B.",0DH,0AH   ;DX
            db "      clusters available.",0DH,0AH    ;BX
            db "      sectors per cluster.",0DH,0AH   ;AX
            db "      bytes per sector,",0DH,0AH,"$"  ;CX
;
begin:    get_disk_space 2                 ;THIS FUNCTION
            convert    ax,10,message[55]     ;see end of chapter
            convert    bx,10,message[28]     ;see end of chapter
            convert    cx,10,message[83]     ;see end of chapter
            convert    dx,10,message         ;see end of chapter
            display message                  ;See Function 09H


Get Country Data (Function 38H)


Call:

AH = 38H
AL
    00H    = Current country
    1-0FEH = Country code
    0FFH   = BX contains country code
BX (if AL = 0FFH)
    Country code 255 or higher
DS:DX
    Pointer to 32-byte memory area


Return:

Carry set:
AX
    2 = Invalid country code
Carry not set:
BX
    Country code


Comments:

Function 38H gets the country-dependent information that MS-DOS uses to
control the keyboard and display, or it sets the currently defined country
(to set the country code, see the next function request description, Set
Country Data). To get the information, DX must contain the offset (from the
segment address in DS) of a 32-byte memory area to which the country data
returns. AL specifies the country code:

Value in AL  Meaning
───────────────────────────────────────────────────────────────────────────
00H          Retrieve information about the country currently set.

1 to 0FEH    Retrieve information about the country identified by
                this code.

0FFH         Retrieve information about the country identified by the
                code in BX.

BX must contain the country code if the code is 255 or greater. The
country code is usually the international telephone-prefix code.

The country-dependent information returns in the following form:

    Offset
Hex   Decimal   Field Name              Length in bytes
───────────────────────────────────────────────────────────────────────────
00H    0        Date format             2 (word)
02H    2        Currency symbol         5 (ASCIZ string)
07H    7        Thousands separator     2 (ASCIZ string)
09H    9        Decimal separator       2 (ASCIZ string)
0BH   11        Date separator          2 (ASCIZ string)
0DH   13        Time separator          2 (ASCIZ string)
0FH   15        Bit field               1
10H   16        Currency places         1
11H   17        Time format             1
12H   18        Case-map call address   4 (DWORD)
16H   22        Data-list separator     2 (ASCIZ string)
18H   24        Reserved                10


Date Format:

0 = USA               (month/day/year)
1 = Europe            (day/month/year)
2 = Japan             (year/month/day)


Bit Field:

Bit   Value   Meaning
───────────────────────────────────────────────────────────────────────────
0     0       Currency symbol precedes amount
        1       Currency symbol follows amount
1     0       No space between symbol and amount
        1       One space between symbol and amount

All other bits are undefined.


Time format:

0 = 12-hour clock
1 = 24-hour clock


Currency Places:

Specifies the number of places that appear after the decimal point on
currency amounts.


Case-Mapping Call Address:

Specifies the segment and offset of a FAR procedure that performs
country-specific lowercase-to-uppercase mapping on character values from
80H to 0FFH. You call it with the character to be mapped in AL. If there is
an uppercase code for the character, it is returned in AL; if there is not,
or if you call it with a value less than 80H in AL, AL returns unchanged.
AL and the FLAGS are the only altered registers.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code  Meaning
───────────────────────────────────────────────────────────────────────────
2     Invalid country code (no table for it).


Macro Definition:

get_country   macro  country,buffer
                local     gc_01
                mov       dx,offset buffer
                mov       ax,country
                cmp       ax,OFFH
                jl        gc_01
                mov       al,OFFh
                mov       bx,country
gc_01:        mov       ah,38h
                int       21H
                endm


Example:

The following program displays the time and date in the format appropriate
to the current country code, and the number 999,999 and 99/100 as a
currency amount with the proper currency symbol and separators.

time       db     "  :  :  ",5 dup (20H),"$"
date       db     "  /  /  ",5 dup (20H),"$"
number     db     "999?999?99",0DH,0AH,"$"
data_area  db      32 dup (?)
;
begin:    get_country  0,data_area       ;THIS FUNCTION
            get_time                       ;See Function 2CH
            byte_to_dec  ch,time           ;See end of chapter
            byte_to_dec  cl,time[03H]      ;for description of
            byte_to_dec  dh,time[06H]      ;CONVERT macro
            get_date                       ;See Function 2AH
            sub      cx,1900               ;Want last 2 digits
            byte_to_dec  cl,date[06H]      ;See end of chapter
            cmp      word ptr data_area,0  ;Check country code
            jne      not_usa               ;It's not USA
            byte_to_dec  dh,date           ;See end of chapter
            byte_to_dec  dl,date[03H]      ;See end of chapter
            jmp      all_done              ;Display data
not_usa:  byte_to_dec  dl,date           ;See end of chapter
            byte_to_dec  dh,date[03H]      ;See end of chapter
all_done: mov      al,data_area[07H]     ;Thousand separator
            mov      number[03H],al        ;Put in NUMBER
            mov      al,data_area[09H]     ;Decimal separator
            mov      number[07H],al        ;Put in AMOUNT
            display  time                  ;See Function 09H
            display  date                  ;See Function 09H
            display_char  data_area[02H]   ;See Function 02H
            display  number                ;See Function 09H


Set Country Data (Function 38H)


Call:

AH = 38H
DX = -1 (0FFFFH)
AL
    Country code less than 255, or
    0FFH if the country code is in BX
BX (if AL=0FFH)
    Country code 255 or higher


Return:

Carry set:
AX
    2 = Invalid country code
Carry not set:
    No error


Comments:

Function 38H sets the country code that MS-DOS uses to control the keyboard
and the display, or it retrieves the country-dependent information (to get
the country data, see the previous function request description, "Get
Country Data"). To set the information, DX must contain 0FFFFH. AL must
contain either the country code, if it is less than 255, or 255 to indicate
that the country code is in BX. If AL contains 0FFH, BX must contain the
country code.

The country code is usually the international telephone prefix-code.
See "Get Country Data" for a description of the country data and how
it is used.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code  Meaning
───────────────────────────────────────────────────────────────────────────
2     Invalid country code (no table for it).


Macro Definition:

set_country macro  country
            local  sc_01
            mov    dx,0FFFFH
            mov    ax,country
            cmp    ax,0FFH
            jl     sc_01
            mov    bx,country
            mov    al,0ffh
sc_01:      mov    ah,38H
            int    21H
            endm


Example:

The following program sets the country code to the United Kingdom (44).

uk        equ         44
;
begin:    set_country uk     ;THIS FUNCTION
            jc          error  ;routine not shown


Create Directory (Function 39H)


Call:

AH = 39H
DS:DX
    Pointer to pathname


Return:

Carry set:
AX
    2 = File not found
    3 = Path not found
    5 = Access denied
Carry not set:
    No error


Comments:

Function 39H creates a new subdirectory. DX must contain the offset (from
the segment address in DS) of an ASCIZ string that specifies the pathname
of the new subdirectory.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code  Meaning
───────────────────────────────────────────────────────────────────────────
2     File not found

3     Path not found

5     No room in the parent directory, a file with the same name exists in
        the current directory, or the path specifies a device


Macro Definition:

make_dir  macro path
            mov    dx,offset path
            mov    ah,39H
            int    21H
            endm


Example:

The following program adds a subdirectory named new_dir to the root
directory on the disk in drive B and changes the current directory to
new_dir. The program then changes the current directory back to the
original directory and then deletes new_dir. It displays the current
directory after each step to confirm the changes.

old_path  db        "b:
new_path  db        "b:\new_dir",0
buffer    db        "b:
;
begin:    get_dir    2,old_path[03H]  ;See Function 47H
            jc         error_get        ;Routine not shown
            display_asciz  old_path     ;See end of chapter
            make_dir   new_path         ;THIS FUNCTION
            jc         error_make       ;Routine not shown
            change_dir new_path         ;See Function 3BH
            jc         error_change     ;Routine not shown
            get_dir    2,buffer[03H]    ;See Function 47H
            jc         error_get        ;Routine not shown
            display_asciz  buffer       ;See end of chapter
            change_dir old_path         ;See Function 3BH
            jc         error_change     ;Routine not shown
            rem_dir    new_path         ;See Function 3AH
            jc         error_rem        ;Routine not shown
            get_dir    2,buffer[03H]    ;See Function 47H
            jc         error_get        ;Routine not shown
            display_asciz  buffer       ;See end of chapter


Remove Directory (Function 3AH)


Call:

AH = 3AH
DS:DX
    Pointer to pathname


Return:

Carry set:
AX
    2 = File not found
    3 = Path not found
    5 = Access denied
    16 = Current directory
Carry not set:
    No error


Comments:

Function 3AH deletes a subdirectory. DX must contain the offset (from the
segment address in DS) of an ASCIZ string that specifies the pathname of
the subdirectory you want to delete.

The subdirectory must not contain any files. You cannot erase the current
directory. If there is an error, the carry flag (CF) is set and the error
code returns in AX:

Code  Meaning
───────────────────────────────────────────────────────────────────────────
2     File not found

3     Path not found

5     Directory not empty, or path doesn't specify a directory,
        or it specifies the root directory, or it is invalid

16    Path specifies current directory


Macro Definition:

rem_dir  macro  path
            mov    dx,offset path
            mov    ah,3AH
            int    21H
            endm


Example:

The following program adds a subdirectory named new_dir to the root
directory on the disk in drive B and changes the current directory to
new_dir. The program then changes the current directory back to the
original directory and deletes new_dir. It displays the current directory
after each step to confirm the changes.

old_path  db        "b:
new_path  db        "b:\new_dir",0
buffer    db        "b:
;
begin:    get_dir    2,old_path[03H]  ;See Function 47H
            jc         error_get        ;Routine not shown
            display_asciz  old_path     ;See end of chapter
            make_dir   new_path         ;See Function 39H
            jc         error_make       ;Routine not shown
            change_dir new_path         ;See Function 3BH
            jc         error_change     ;Routine not shown
            get_dir    2,buffer[03H]    ;See Function 47H
            jc         error_get        ;Routine not shown
            display_asciz  buffer       ;See end of chapter
            change_dir old_path         ;See Function 3BH
            jc         error_change     ;Routine not shown
            rem_dir    new_path         ;THIS FUNCTION
            jc         error_rem        ;Routine not shown
            get_dir    2,buffer[03H]    ;See Function 47H
            jc         error_get        ;Routine not shown
            display_asciz  buffer       ;See end of chapter


Change Current Directory (Function 3BH)


Call:

AH = 3BH
DS:DX
    Pointer to pathname


Return:

Carry set:
AX
    2 = File not found
    3 = Path not found
Carry not set:
    No error


Comments:

Function 3BH changes the current directory. DX must contain the offset
(from the segment address in DS) of an ASCIZ string that specifies the
pathname of the new current directory.

The directory string is limited to 64 characters.

If any member of the path doesn't exist, the path is unchanged.
If there is an error, the carry flag (CF) is set and the error code returns
in AX:

Code  Meaning
───────────────────────────────────────────────────────────────────────────
2     File not found

3     Path either doesn't exist or it specifies a file instead of a
        directory


Macro Definition:

change_dir  macro  path
            mov    dx,offset path
            mov    ah,3BH
            int    21H
            endm


Example:

The following program adds a subdirectory named new_dir to the root
directory that is on the disk in drive B and changes the current directory
to new_dir. The program then changes the current directory back to the
original directory and deletes new_dir. It displays the current directory
after each step to confirm the changes.

old_path  db        "b:
new_path  db        "b:\new_dir",0
buffer    db        "b:
;
begin:    get_dir    2,old_path[03H]  ;See Function 47H
            jc         error_get        ;Routine not shown
            display_asciz  old_path     ;See end of chapter
            make_dir   new_path         ;See Function 39H
            jc         error_make       ;Routine not shown
            change_dir new_path         ;THIS FUNCTION
            jc         error_change     ;Routine not shown
            get_dir    2,buffer[03H]    ;See Function 47H
            jc         error_get        ;Routine not shown
            display_asciz  buffer       ;See end of chapter
            change_dir old_path         ;See Function 3BH
            jc         error_change     ;Routine not shown
            rem_dir    new_path         ;See Function 3AH
            jc         error_rem        ;Routine not shown
            get_dir    2,buffer[03H]    ;See Function 47H
            jc         error_get        ;Routine not shown
            display_asciz  buffer       ;See end of chapter


Create Handle (Function 3CH)


Call:

AH = 3CH
DS:DX
    Pointer to pathname
CX
    File attribute


Return:

Carry set:
AX
    2 = File not found
    3 = Path not found
    4 = Too many open files
    5 = Access denied
Carry not set:
AX
    Handle


Comments:

Function 3CH creates a file and assigns it the first available handle. DX
must contain the offset (from the segment address in DS) of an ASCIZ string
that specifies the pathname of the file to be created. CX must contain the
attribute to be assigned to the file, as described under "File Attributes"
earlier in this chapter.

If the specified file does not exist, this function creates it. But
if the file already exists, it is truncated to a length of 0. Function 3CH
then assigns the attribute in CX to the file and opens it for read/write.
AX returns the file handle.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code  Meaning
───────────────────────────────────────────────────────────────────────────
2     File not found

3     Path is invalid

4     Too many open files (no handle available)

5     Directory is full, a directory with the same name exists, or a file
        with the same name exists with more restrictive attributes


Macro Definition:

create_handle  macro  path,attrib
                mov    dx,offset path
                mov    cx,attrib
                mov    ah,3CH
                int    21H
                endm


Example:

The following program creates a file named dir.tmp, containing the name and
extension of each file in the current directory, on the disk in drive B.

srch_file db      "b:*.*",0
tmp_file  db      "b:dir.tmp",0
buffer    db       43 dup (?)
handle    dw       ?
;
begin:    set_dta buffer                ;See Function 1AH
            find_first_file  srch_file,16H  ;See Function 4EH
            cmp     ax,12H                ;Directory empty?
            je      all_done              ;Yes, go home
            create_handle  tmp_file,0     ;THIS FUNCTION
            jc      error                 ;Routine not shown
            mov     handle,ax             ;Save handle
write_it: write_handle handle,buffer[1EH],12 ;Function 40H
            find_next_file                ;See Function 4FH
            cmp     ax,12H                ;Another entry?
            je      all_done              ;No, go home
            jmp     write_it              ;Yes, write record
all_done: close_handle  handle          ;See Function 3EH


Open Handle (Function 3DH)


Call:

AH = 3DH
AL
    Access code (see text)
DS:DX
    Pointer to pathname


Return:

Carry set:
AX
    2      = File not found
    3      = Path not found
    4      = Too many open files
    5      = Access denied
    12      = Invalid access
Carry not set:
    No error


Comments:

Function 3DH opens any file, including hidden and system files, for input
or output. DX contains the offset (from the segment address in DS) of an
ASCIZ string that specifies the pathname of the file to be opened. AL
contains a code that specifies how the file is to be opened. This code
is described later under "Controlling Access to the File."

If there is no error, AX returns the file handle. MS-DOS sets the
read/write pointer to the first byte of the file.


Controlling Access to the File

The value in AL is made up of three parts that specify whether the file
is to be opened for read, write, or both (access code); what access other
processes have to the file (sharing mode); and whether a child process
inherits the file (inherit bit).


        |---|-----------|---------------|
Bit  | 7 | 6   5   4 | 3   2   1   0 |
        |---|---|---|---|---|---|---|---|
        \/  \________/   \____________/
        |       |             |
        |       |             |-------->  Access code
        |       |
        |       |-----------------------> Sharing mode
        |
        |-------------------------------> Inherit bit


Inherit Bit

The high-order bit (bit 7) specifies whether the file is inherited by a
child process created with Function 4BH (Load and Execute Program). If the
bit is 0, the child process inherits the file; if the bit is 1, it doesn't.


Sharing Mode

The sharing mode bits (bits 4-6) specify what access, if any, other
processes have to the open file. It can have the following values:


        Table 1.21
        Sharing Mode Bit Values
╓┌───────────────┌───────────────┌───────────────────────────────────────────╖
        Bits 4-6   Sharing Mode    Description
        ────────────────────────────────────────────────────────────────────
        000        Compatibility   On a given machine, any process
                                can open the file any number of
                                times with this mode. Fails if
                                the file has been opened with
                                any of the other sharing modes.

        001        Deny both       Fails if the file has been
                                opened in compatibility mode or
                                for read or write access, even
                                if by the current process.

        010        Deny write      Fails if the file has been
                                opened in compatibility mode or
                                for write access by any other
                                process.

        011        Deny read       Fails if the file has been
                                opened in compatibility mode or
        Bits 4-6   Sharing Mode    Description
                                opened in compatibility mode or
                                for read access by any other
                                process.

        100        Deny none       Fails if the file has been
                                opened in compatibility mode by
                                any other process.


Access Code

The access code (bits 0-3) specifies how the file is to be used. It can
have the following values:


        Table 1.22
        Access Code Bit Values
╓┌───────────────┌─────────┌─────────────────────────────────────────────────╖
                Access
        Bit 0-3    Allowed   Description
                Access
        Bit 0-3    Allowed   Description
        ────────────────────────────────────────────────────────────────────
        0000       Read      Fails if the file has been opened in
                            deny read or deny both sharing mode.

        0001       Write     Fails if the file has been opened in
                            deny write or deny both sharing
                            mode.

        0010       Both      Fails if the file has been opened in
                            deny read, deny write, or deny both
                            sharing mode.


If there is an error, the carry flag (CF) is set and the error code is
returned in AX:

Code  Meaning
───────────────────────────────────────────────────────────────────────────
2     Specified file is invalid or doesn't exist

3     Specified path is invalid or doesn't exist

4     No handles are available in the current process or the internal
        system tables are full

5     Program attempted to open a directory or VolumeID, or tried to open
        a read-only file for writing

12    Access code (bits 0-3 of AL) not 0, 1, or 2

If this system call fails because of a file-sharing error, MS-DOS
issues Interrupt 24H with error code 2 (Drive Not Ready). A subsequent
Function 59H (Get Extended Error) returns the extended error code that
specifies a sharing violation.

When opening a file, it is important to inform MS-DOS of any operations
that other processes may perform on this file (sharing mode). The default
(compatibility mode) denies all other processes access to the file, unless
they also attempt to open the file in compatibility mode.

The following table shows the effect of opening a file with compatibility
mode set:

Type of File Opening      Read-Only File    Not Read-Only
───────────────────────────────────────────────────────────────────────────
First open for read,      Succeeds          Succeeds
write, or both by
machine/process "N"

Subsequent opens by       Succeeds          Succeeds
machine or process "N"

An open by another        Succeeds          Fails
machine or process

Files may be read-only with the MS-DOS attrib command or by a read-only
share over the network.

It may be all right for other processes to continue to read the file
while your process is operating on it. In this case, you should specify
"Deny Write," which inhibits other processes from writing to your files
but allows them to read from these files.

Similarly, it is important for you to specify what operations your process
will perform ("Access" mode). If another process has the file open with any
sharing mode other than "Deny" mode, then the default mode ("Read/write")
causes the open request to fail. If you only want to read the file, your
open request succeeds unless all other processes have specified "Deny"
mode or "Deny write."


Macro Definition:

open_handle  macro  path,access
                mov    dx, offset path
                mov    al, access
                mov    ah, 3DH
                int    21H
                endm


Example:

The following program prints a file named textfile.asc that is on the disk
in drive B.

file       db  "b:textfile.asc",0
buffer     db   ?
handle     dw   ?
;
begin:     open_handle  file,0          ;THIS FUNCTION
            mov  handle,ax               ;Save handle
read_char: read_handle handle,buffer,1  ;Read 1 character
            jc   error_read              ;Routine not shown
            cmp  ax,0                    ;End of file?
            je   return                  ;Yes, go home
            print_char  buffer           ;See Function 05H
            jmp  read_char               ;Read another


Close Handle (Function 3EH)


Call:

AH = 3EH
BX
    Handle


Return:

Carry set:
AX
    6 = Invalid handle
Carry not set:
    No error


Comments:

Function 3EH closes a file opened with Function 3DH (Open Handle) or 3CH
(Create Handle). BX must contain the handle of the open file that you want
to close.

If there is no error, MS-DOS closes the file and flushes all internal
buffers. If there is an error, the carry flag (CF) is set and the error
code returns in AX:

Code  Meaning
───────────────────────────────────────────────────────────────────────────
6     Handle not open or invalid


Macro Definition:

close_handle  macro  handle
                mov    bx,handle
                mov    ah,3EH
                int    21H
                endm


Example:

The following program creates a file named dir.tmp, containing the filename
and extension of each file in the current directory, in the current
directory on the disk in drive B.

srch_file  db  "b:*.*",0
tmp_file   db  "b:dir.tmp",0
buffer     db   43 dup (?)
handle     dw   ?
;
begin:     set_dta  buffer              ;See Function 1AH
            find_first_file  srch_file,16H  ;See Function 4EH
            cmp      ax,12H              ;Directory empty?
            je       all_done            ;Yes, go home
            create_handle  tmp_file,0    ;See Function 3CH
            jc       error_create        ;Routine not shown
            mov      handle,ax           ;Save handle
write_it:  write_handle  handle,buffer[1EH],12 ;See Function 40H
            find_next_file               ;See Function 4FH
            cmp      ax,12H              ;Another entry?
            je       all_done            ;No, go home
            jmp      write_it            ;Yes, write record
all_done:  close_handle  handle         ;See Function 3EH
            jc       error_close         ;Routine not shown


Read Handle (Function 3FH)


Call:

AH = 3FH
BX
    Handle
CX
    Bytes to read
DS:DX
    Pointer to buffer


Return:

Carry set:
AX
    5 = Access denied
    6 = Invalid handle
Carry not set:
AX
    Bytes read


Comments:

Function 3FH reads from the file or device associated with the specified
handle. BX must contain the handle. CX must contain the number of bytes
to be read. DX must contain the offset (to the segment address in DS)
of the buffer.

If there is no error, AX returns the number of bytes read; if you
attempt to read starting at end of file, AX returns 0. The number of bytes
specified in CX is not necessarily transferred to the buffer; if you use
this call to read from the keyboard, for example, it reads only up to the
first carriage-return.

If you use this function request to read from standard input, you can
redirect the input.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code  Meaning
───────────────────────────────────────────────────────────────────────────
5     Handle not open for reading
6     Handle not open or invalid


Macro Definition:

read_handle  macro  handle,buffer,bytes
                mov    bx,handle
                mov    dx,offset buffer
                mov    cx,bytes
                mov    ah,3FH
                int    21H
                endm


Example:

The following program displays a file named textfile.asc that is on the
disk in drive B.

filename   db     "b:\textfile.asc",0
buffer     db      129 dup (?)
handle     dw      ?
;
begin:     open_handle  filename,0        ;See Function 3DH
            jc           error_open        ;Routine not shown
            mov          handle,ax         ;Save handle
read_file: read_handle  buffer,file_handle,128
            jc           error_open        ;Routine not shown
            cmp          ax,0              ;End of file?
            je           return            ;Yes, go home
            mov          bx,ax             ;# of bytes read
            mov          buffer[bx],"$"    ;Make a string
            display      buffer            ;See Function 09H
            jmp          read_file         ;Read more


Write Handle (Function 40H)


Call:

AH = 40H
BX
    Handle
CX
    Bytes to write
DS:DX
    Pointer to buffer


Return:

Carry set:
AX
    5 = Access denied
    6 = Invalid handle
Carry not set:
AX
    Bytes written


Comments:

Function 40H writes to the file or device associated with the specified
handle. BX must contain the handle. CX must contain the number of bytes to
be written. DX must contain the offset (to the segment address in DS) of
the data to be written.

If you set CX to zero, the file will be truncated at the current
position of the file pointer. MS-DOS will not perform the write if the
handle is read-only.

If there is no error, AX returns the number of bytes written. Be sure
to check AX after performing a write. If its value is less than the number
in CX when the call was made, it indicates an error, even though the carry
flag isn't set. If AX contains 0, and if the target is a disk file, the
disk is full.

If you use this function request to write to standard output, you can
redirect the output. If you call this request with CX=0, the file size is
set to the value of the read/write pointer. To satisfy the new file size,
allocation units are allocated or released, as required.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
5        Handle not open for writing
6        Handle not open or invalid


Macro Definition:

write_handle  macro  handle,buffer,bytes
                mov    bx,handle
                mov    dx,offset buffer
                mov    cx,bytes
                mov    ah,40H
                int    21H
                endm


Example:

The following program creates a file named dir.tmp, containing the filename
and extension of each file in the current directory, in the current
directory on the disk in drive B.

srch_file db     "b:*.*",0
tmp_file  db     "b:dir.tmp",0
buffer    db      43 dup (?)
handle    dw      ?
;
begin:    set_dta buffer                ;See Function 1AH
            find_first_file  srch_file,16H ;Check directory
            cmp     ax,12H                ;Directory empty?
            je      return                ;Yes, go home
            create_handle  tmp_file,0     ;See Function 3CH
            jc      error_create          ;Routine not shown
            mov     handle,ax             ;Save handle
write_it: write_handle handle,buffer[1EH],12 ;THIS FUNCTION
            jc      error_write           ;Routine not shown
            find_next_file                ;Check directory
            cmp     ax,12H                ;Another entry?
            je      all_done              ;No, go home
            jmp     write_it              ;Yes, write record
all_done: close_handle  handle          ;See Function 3EH
            jc      error_close           ;Routine not shown


Delete Directory Entry [Unlink] (Function 41H)


Call:

AH = 41H
DS:DX
    Pointer to pathname


Return:

Carry set:
AX
    2 = File not found
    3 = Path not found
    5 = Access denied
Carry not set:
    No error


Comments:

Function 41H erases a file by deleting its directory entry. DX must
contain the offset (from the segment address in DS) of an ASCIZ string that
specifies the pathname of the file that you want to delete. You cannot use
wildcard characters.

If the file exists and is not read-only, the call deletes it. If there
is an error, the call sets the carry flag (CF) and the error code returns
in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
2        File doesn't exist, or specifies a directory
3        Path is invalid
5        File is read-only

To delete a file with the read-only attribute, first change its
attribute to 0 with Function 43H (Get/Set File Attribute).


Macro Definition:

delete_entry  macro  path
                mov    dx,offset path
                mov    ah,41H
                int    21H
                endm


Example:

The following program deletes all files, dated before December 31, 1986,
from the disk in drive B.

year      db       1986
month     db       12
day       db       31
files     db       ?
message   db      "NO FILES DELETED.",0DH,0AH,"$"
path      db      "b:*.*", 0
buffer    db       43 dup (?)
;
begin:    set_dta  buffer           ;See Function 1AH
            select_disk "B"           ;See Function 0EH
            find_first_file  path,0   ;See Function 4EH
            jnc      compare          ;got one
            jmp      all_done         ;no match, go home
compare:  convert_date  buffer[-1]  ;See end of chapter
            cmp      cx,year          ;After 1986?
            jg       next             ;Yes, don't delete
            cmp      dl,month         ;After December?
            jg       next             ;Yes, don't delete
            cmp      dh,day           ;31st or after?
            jge      next             ;Yes, don't delete
            delete_entry  buffer[1EH] ;THIS FUNCTION
            jc       error_delete     ;Routine not shown
            inc      files            ;Bump file counter
next:     find_next_file            ;Check directory
            jnc      compare          ;Go home if done
how_many: cmp      files,0          ;Was directory empty?
            je       all_done         ;Yes, go home
            convert  files,10,message ;See end of chapter
all_done: display  message          ;See Function 09H
            select_disk "A"           ;See Function 0EH


Move File Pointer (Function 42H)


Call:

AH = 42H
AL
    Method of moving
BX
    Handle
CX:DX
    Distance in bytes (offset)


Return:

Carry set:
AX
    1 = Invalid function
    6 = Invalid handle
Carry not set:
DX:AX
    New read/write pointer location


Comments:

Function 42H moves the read/write pointer of the file associated with the
specified handle. BX must contain the handle. CX and DX must contain a 32-
bit offset (CX contains the most significant byte). AL must contain a code
that specifies how to move the pointer:

Code     Cursor Moved to
───────────────────────────────────────────────────────────────────────────
0        Beginning of file plus the offset
1        Current pointer location plus the offset
2        End of file plus the offset

DX and AX return the new location of the read/write pointer (a 32-bit
integer; DX contains the most significant byte). You can determine the
length of a file by setting CX:DX to 0, AL to 2, and calling this function.
DX:AX returns the offset of the byte following the last byte in the file
(size of the file in bytes).

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        AL not 0, 1, or 2
6        Handle not open


Macro Definition:

move_ptr  macro  handle,high,low,method
            mov    bx,handle
            mov    cx,high
            mov    dx,low
            mov    al,method
            mov    ah,42H
            int    21H
            endm


Example:

The following program prompts for a letter, converts it to its alphabetic
sequence (A=1, B=2, etc.), then reads and displays the corresponding record
from the file named alphabet.dat that is in the current directory on the
disk in drive B. The file contains 26 records, each 28 bytes long.

file      db      "b:alphabet.dat",0
buffer    db       28 dup (?),"$"
prompt    db      "Enter letter: $"
crlf      db       0DH,0AH,"$"
handle    db       ?
record_length  dw  28
;
begin:    open_handle  file,0      ;See Function 3DH
            jc       error_open      ;Routine not shown
            mov      handle,ax       ;Save handle
get_char: display  prompt          ;See Function 09H
            read_kbd_and_echo        ;See Function 01H
            sub      al,41h          ;Convert to sequence
            mul      byte ptr record_length  ;Calculate offset
            move_ptr handle,0,ax,0   ;THIS FUNCTION
            jc       error_move      ;Routine not shown
            read_handle handle,buffer,record_length
            jc       error_read      ;Routine not shown
            cmp      ax,0            ;End of file?
            je       return          ;Yes, go home
            display  crlf            ;See Function 09H
            display  buffer          ;See Function 09H
            display  crlf            ;See Function 09H
            jmp      get_char        ;Get another character


Get/Set File Attributes (Function 43H)


Call:

AH = 43H
AL
    0 = Get attributes
    1 = Set attributes
CX (if AL=1)
    Attributes to be set
DS:DX
    Pointer to pathname


Return:

Carry set:
AX
    1 = Invalid function
    2 = File not found
    3 = Path not found
    5 = Access denied
Carry not set:
CX
    Attribute byte (if AL=0)


Comments:

Function 43H gets or sets the attributes of a file. DX must contain the
offset (from the segment address in DS) of an ASCIZ string that specifies
the pathname of a file. AL must specify whether to get or set the attribute
(0=get, 1=set).

If AL is 0 (get the attribute), the attribute byte returns in CX. If AL
is 1 (set the attribute), CX must contain the attributes to be set. The
attributes are described under "File Attributes" earlier in this chapter.

You cannot change the VolumeID bit (08H) or the Subdirectory bit (10H)
of the attribute byte with this function.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        AL not 0 or 1
2        File doesn't exist
3        Path invalid
5        Attribute in CX cannot be changed (Subdirectory or VolumeID).


Macro Definition:

change_attr  macro  path,action,attrib
                mov    dx,offset path
                mov    al,action
                mov    cx,attrib
                mov    ah,43H
                int    21H
                endm


Example:

The following program displays the attributes assigned to the file named
report.asm that is in the current directory on the disk in drive B.

header    db      15 dup (20h),"Read-",0DH,0AH
            db     "Filename       Only      Hidden    "
            db     "System    Volume    Sub-Dir   Archive"
            db      0DH,0AH,0DH,0AH,"$"
path      db     "b:report.asm",3 dup (0),"$"
attribute dw      ?
blanks    db      9 dup (20h),"$"
;
begin:    change_attr  path,0,0  ;THIS FUNCTION
            jc      error_mode     ;Routine not shown
            mov     attribute,cx   ;Save attribute byte
            display header         ;See Function 09H
            display path           ;See Function 09H
            mov     cx,6           ;Check 6 bits (0-5)
            mov     bx,1           ;Start with bit 0
chk_bit:  test    attribute,bx   ;Is the bit set?
            jz      no_attr        ;No
            display_char "X"       ;See Function 02H
            jmp short  next_bit    ;Done with this bit
no_attr:  display_char  20h      ;See Function 02H
next_bit: display blanks         ;See Function 09H
            shl     bx,1           ;Move to next bit
            loop    chk_bit        ;Check it


IOCtl Data (Function 44H, Codes 0 and 1)


Call:

AH = 44H
AL
    0 = Get device data
    1 = Set device data
BX
    Handle
DX
    Device data (see text)


Return:

Carry set:
AX
    1 = Invalid function
    6 = Invalid handle
Carry not set:
DX
    Device data


Comments:

Function 44H, Codes 0 and 1, either gets or sets the data MS-DOS uses to
control the device. AL must contain 0 to get the data or 1 to set it. BX
must contain the handle. If AL is 1, DH must contain 0.

The device-data word is specified or returned in DX. If bit 7 of the
data is 1, the handle refers to a device and the other bits have the
following meanings:


        Table 1.23
        MS-DOS Data Bit Values
╓┌───────────┌───────┌───────────────────────────────────────────────────────╖
        Bit    Value   Meaning
        ────────────────────────────────────────────────────────────────────
        Bit    Value   Meaning
        ────────────────────────────────────────────────────────────────────
        0      1       Console input device

        1      1       Console output device

        2      1       Null device

        3      1       Clock device

        4      1       Reserved

        5      1       Don't check for control characters
            0       Check for control characters

        6      0       End of file on input

        8-10           Reserved

        11     1       Device understands open/close

        Bit    Value   Meaning

        12             Reserved

        13     1       Device supports output until busy

        14     1       Device can process control strings sent
                    with Function 44H, Codes 2 and 3 (IOCtl
                    character); bit can be read only, but
                    not set

        15             Reserved


You must set the reserved bits to zero.

The control characters referred to in the description of bit 5 are
CONTROL-C, CONTROL-P, CONTROL-S, and CONTROL-Z. To read these characters as
data, instead of as control characters, you must set bit 5 and use either
Function 33H, CONTROL-C Check, or the MS-DOS break command to turn off
CONTROL-C checking.

If bit 7 of DX is 0, the handle refers to a file and the other bits
have the following meanings:

Bit    Value   Meaning
───────────────────────────────────────────────────────────────────────────
0-5            Drive number (0=A, 1=B, etc.)
6      0       The file has been written
8-15           Reserved

If there is an error, the carry flag (CF) is set and the error code returns
in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        AL not 0 or 1, or AL is 1 but DH is not 0
6        Handle in BX not open or is invalid


Macro Definition:

ioctl_data macro  code,handle
            mov    bx,handle
            mov    al,code
            mov    ah,44H
            int    21H
            endm


Example:

The following program gets the device data for standard output, sets the
bit that specifies not to check for control characters (bit 5), and then
clears the bit.

get     equ         0
set     equ         1
stdout  equ         1
;
begin:  ioctl_data  get,stdout          ;THIS FUNCTION
        jc          error               ;routine not shown
        mov         dh,0                ;clear DH
        or          dl,20H              ;set bit 5
        ioctl_data  set,stdout          ;THIS FUNCTION
        jc          error               ;routine not shown
;
;  <control characters now treated as data, or "raw mode">
;
        ioctl_data  get,stdout          ;THIS FUNCTION
        jc          error               ;routine not shown
        mov         dh,0                ;clear DH
        and         dl,0DFH             ;clear bit 5
        ioctl_data  set,stdout          ;THIS FUNCTION
;
; <control characters now interpreted, or "cooked mode">
;


IOCtl Character (Function 44H, Codes 2 and 3)


Call:

AH = 44H
AL
    2 = Send control data
    3 = Receive control data
BX
    Handle
CX
    Bytes to read or write
DS:DX
    Pointer to buffer


Return:

Carry set:
AX
    1 = Invalid function
    6 = Invalid handle
Carry not set:
AX
    Bytes transferred


Comments:

Function 44H, Codes 2 and 3, sends or receives control data to or from a
character device. AL must contain 2 to send data or 3 to receive. BX must
contain the handle of a character device, such as a printer or serial port.
CX must contain the number of bytes to be read or written. DX must contain
the offset (to the segment address in DS) of the data buffer.

AX returns the number of bytes transferred. The device driver must
support the IOCtl interface.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        AL not 2 or 3, or device cannot perform the specified function
6        Handle in BX not open or doesn't exist


Macro Definition:

ioctl_char  macro  code,handle,buffer
            mov    bx,handle
            mov    dx,offset buffer
            mov    al,code
            mov    ah,44H
            int    21H
            endm


Example:

No general example is applicable, since processing of IOCtl control data
depends on the device being used, as well as the device driver.


IOCtl Block (Function 44H, Codes 4 and 5)


Call:

AH = 44H
AL
    4 = Send control data
    5 = Receive control data
BL
    Drive number (0=default, 1=A, etc.)
CX
    Bytes to read or write
DS:DX
    Pointer to buffer


Return:

Carry set:
AX
    1 = Invalid function
    5 = Invalid drive
Carry not set:
AX
    Bytes transferred


Comments:

Function 44H, Codes 4 and 5, sends or receives control data to or from
a block device. AL must contain 4 to send data or 5 to receive. BL must
contain the drive number (0=default, 1=A, etc.). CX must contain the number
of bytes to be read or written. DX must contain the offset (to the segment
address in DS) of the data buffer.

AX returns the number of bytes transferred. The device driver must
support the IOCtl interface. To determine whether it does, use Function
44H, Code 0, to get the device data, and test bit 14; if the bit is set,
the driver supports IOCtl.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        AL not 4 or 5, or device cannot perform the specified function
5        Number in BL not a valid drive number


Macro Definition:

ioctl_status macro  code,drive,buffer
                mov    bl,drive
                mov    dx,offset buffer
                mov    al,code
                mov    ah,44H
                int    21H
                endm


Example:

No general example is applicable, since processing of IOCtl control data
depends on the device being used, as well as the device driver.


IOCtl Status (Function 44H, Codes 6 and 7)


Call:

AH = 44H
AL
    6 = Check input status
    7 = Check output status
BX
    Handle


Return:

Carry set:
AX
    1      = Invalid function
    5      = Access denied
    6      = Invalid handle
    13      = Invalid data
Carry not set:
AL
    00H    = Not ready
    0FFH   = Ready


Comments:

Function 44H, Codes 6 and 7, checks whether the file or device associated
with a handle is ready. AL must contain 6 to check whether the handle
is ready for input or 7 to check whether the handle is ready for output.
BX must contain the handle.

AL returns the status:

        Meaning for   Meaning for         Meaning for
Value   Device        Input File          Output File
───────────────────────────────────────────────────────────────────────────
00H     Not ready     Pointer is at EOF   Ready
0FFH    Ready         Ready               Ready

An output file always returns ready, even if the disk is full.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        AL not 6 or 7
5        Access denied
6        Number in BX not a valid, open handle
13       Invalid data


Macro Definition:

ioctl_status  macro  code,handle
                mov    bx,handle
                mov    al,code
                mov    ah,44H
                int    21H
                endm


Example:

The following program displays a message that tells whether the file
associated with handle 6 is ready for input or whether it is at
end-of-file.

stdout      equ          1
;
message     db           "File is "
ready       db           "ready."
at_eof      db           "at EOF."
crlf        db           ODH,OAH
;
begin:      write_handle stdout,message,8   ;display message
            jc           write_error        ;routine not shown
            ioctl_status 6                  ;THIS FUNCTION
            jc           ioctl_error        ;routine not shown
            cmp          al,0               ;check status code
            jne          not_eof            ;file is ready
            write_handle stdout,at_eof,7    ;see Function 40H
            jc           write_error        ;routine not shown
            jmp          all_done           ;clean up & go home
not_eof:    write_handle stdout,ready,6     ;see Function 40H
all_done:   write_handle stdout,crlf,2      ;see Function 40H
            jc           write_error        ;routine not shown


IOCtl Is Changeable (Function 44H, Code 08H)


Call:

AH = 44H
AL = 08H
BL
    Drive number (0=default, 1=A, etc.)


Return:

Carry set:
AX
    1     = Invalid function
    15     = Invalid drive
Carry not set:
AX
    0 = Changeable
    1 = Not changeable


Comments:

Function 44H, Code 08H, checks whether a drive contains a removable or
nonremovable disk. BL must contain the drive number (0=default, 1=A, etc.).
AX returns 0 if the disk can be changed, 1 if it cannot.

This call lets a program determine whether to issue a message to
change disks.

If there is an error, the carry flag (CF) is set and the error code
returns in AX.

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        Device does not support this call
15       Number in BL not a valid drive number

When the call returns error 1 (because the driver doesn't support it),
the caller asssumes that the driver cannot be changed.


Macro Definition:

ioctl_change  macro  drive
                mov    bl, drive
                mov    al, 08H
                mov    ah, 44H
                int    21H
                endm


Example:

The following program checks whether the current drive contains a removable
disk. If not, processing continues; if so, the program prompts the user
to replace the disk in the current drive.

stdout    equ        1
;
message   db        "Please replace disk in drive "
drives    db        "ABCD"
crlf      db         0DH,0AH
;
begin:    ioctl_change 0                  ;THIS FUNCTION
            jc           ioctl_error        ;routine not shown
            cmp          ax,0               ;current drive changeable?
            jne          continue           ;no, continue processing
            write_handle stdout,message,29  ;see Function 40H
            jc           write_error        ;routine not shown
            current_disk                    ;see Function 19H
            xor          bx,bx              ;clear index
            mov          bl,al              ;get current drive
            display_char drives[bx]         ;see Function 02H
            write_handle stdout,crlf,2      ;see Function 40H
            jc           write_error        ;routine not shown
continue:
;         (Further processing here)


IOCtl Is Redirected Block (Function 44H, Code 09H)


Call:

AH = 44H
AL = 09H
BL
    Drive number (0=default, 1=A, etc.)


Return:

Carry set:
AX
    1      = Invalid function code
    15      = Invalid drive number
Carry not set:
DX
    Device-attribute bits


Comments:

Function 44H, Code 09H, checks whether a drive letter refers to a drive
on a Microsoft Networks workstation (local) or is redirected to a server
(remote). BL must contain the drive number (0=default, 1=A, etc.).

If the block device is local, DX returns the attribute word from the
device header. If the block device is remote, only bit 12 (1000H) is set;
the other bits are 0 (reserved).

An application program should not test bit 12, because applications
should not make distinctions between local and remote files (or devices).
Programs should be written so that they will be independent of the location
of a device that has been removed.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        File sharing must be loaded to use this system call
15       Number in BL not a valid drive number


Macro Definition:

ioctl_rblock  macro  drive
                mov    bl, drive
                mov    al, 09H
                mov    ah, 44H
                int    21H
                endm


Example:

The following program checks whether drive B is local or remote and
displays the appropriate message.

stdout    equ        1
;
message   db        "Drive B: is "
loc       db        "local."
rem       db        "remote."
crlf      db         0DH,0AH
;
begin:    write_handle stdout,message,12  ;display message
            jc           write_error        ;routine not shown
            ioctl_rblock 2                  ;THIS FUNCTION
            jc           ioctl_error        ;routine not shown
            test         dx,1000h           ;bit 12 set?
            jnz          not_loc            ;yes, it's remote
            write_handle stdout,loc,6       ;see Function 40H
            jc           write_error        ;routine not shown
            jmp          done
not_loc:  write_handle stdout,rem,7       ;see Function 40H
            jc           write_error        ;routine not shown
done:     write_handle stdout,crlf,2      ;see Function 40H
            jc           write_error        ;routine not shown


IOCtl Is Redirected Handle (Function 44H, Code 0AH)


Call:

AH = 44H
AL = 0AH
BX
    Handle


Return:

Carry set:
AX
    1 = Invalid function code
    6 = Invalid handle
Carry not set:
DX
    IOCtl bit field


Comments:

Function 44H, Code 0AH, checks whether a handle refers to a file or a
device on a Microsoft Networks workstation (local) or is redirected to a
server (remote). BX must contain the file handle. DX returns the IOCtl bit
field; bit 15 is set if the handle refers to a remote file or device.

An application program should not test bit 15, because applications
should not make distinctions between local and remote files (or devices).
Programs should be written so that they will be independent of the location
of a device that has been removed.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        Network must be loaded to use this system call
6        Handle in BX not a valid, open handle


Macro Definition:

ioctl_rhandle macro  handle
                mov    bx, handle
                mov    al, 0AH
                mov    ah, 44H
                int    21H
                endm


Example:

The following program checks whether handle 5 refers to a local or remote
file or a device and displays the appropriate message.

stdout    equ        1
;
message   db        "Handle 5 is "
loc       db        "local."
rem       db        "remote."
crlf      db         0DH,0AH
;
begin:    write_handle stdout,message,12   ;display message
            jc           write_error         ;routine not shown
            ioctl_rhandle 5                  ;THIS FUNCTION
            jc           ioctl_error         ;routine not shown
            test         dx,8000h            ;bit 15 set?
            jnz          not_loc             ;yes, it's remote
            write_handle stdout,loc,6        ;see Function 40H
            jc           write_error         ;routine not shown
            jmp          done
not_loc:  write_handle stdout,rem,7        ;see Function 40H
            jc           write_error         ;routine not shown
done:     write_handle stdout,crlf,2       ;see Function 40H
            jc           write_error         ;routine not shown


IOCtl Retry (Function 44H, Code 0BH)


Call:

AH = 44H
AL = 0BH
DX
    Number of retries
CX
    Wait time


Return:

Carry set:
AX
    1 = Invalid function code
Carry not set:
    No error


Comments:

Function 44H, Code 0BH, specifies how many times MS-DOS should retry a disk
operation that fails because of a file-sharing violation. DX must contain
the number of retries. CX controls the pause between retries.

MS-DOS retries this type of disk operation three times, unless you use
this system call to specify a different number. After the specified number
of retries, MS-DOS issues Interrupt 24H (Critical-Error-Handler Address)
for the requesting process.

The effect of the delay parameter in CX is machine-dependent because
it specifies how many times MS-DOS should execute an empty loop. The actual
time varies, depending on the processor and clock speed. You can determine
the effect on your machine by using debug. Set the number of retries to 1
and then time several values of CX.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        File sharing must be loaded to use this system call


Macro Definition:

ioctl_retry  macro  retries, wait
                mov    dx, retries
                mov    cx, wait
                mov    al, 0BH
                mov    ah, 44H
                int    21H
                endm


Example:

The following program sets the number of sharing retries to 10 and
specifies a delay of 1000 between retries.

begin:    ioctl_retry  10,1000          ;THIS FUNCTION
            jc           error            ;routine not shown


Generic IOCtl (for Handles) (Function 44H, Code 0CH)


Call:

AH = 44H
AL = 0CH
BX
    Handle
CH = 05H
    Category code (printer device)
CL
    Function (minor) code
DS:DX
    Pointer to data buffer


Return:

Carry set:
AX
    1 = Invalid function code
Carry not set:
    No error


Comments:

This call loads and selects code pages for devices on a per-device basis.
It also sets or gets the output iteration count for a printer that supports
"PRINT 'TIL BUSY."

The category code may be one of the following:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
00       Unknown device
01       Serial printer
03       Console device
05       Parallel printer

The function code may be one of the following:

Code      Meaning
───────────────────────────────────────────────────────────────────────────
45H       Sets iteration count for printer
4AH       Select code page
4CH       Start prepare list
4DH       End prepare list
65H       Gets iteration count for printer
6AH       Query code page selected
6BH       Query code page prepare list

───────────────────────────────────────────────────────────────────────────
Note
    DS:DX points to a word that contains the new value for the total number
    of output iterations performed before proceeding. Thus, DS:DX points to
    a word that contains the character iteration count for the "PRINT 'TIL
    BUSY" loop. This is the number of times the device driver will wait for
    the device to signal "ready" before acknowledging "Device busy."
───────────────────────────────────────────────────────────────────────────


Macro Definition:

ioctl_handles       macro handle,function,category,buffer
                    mov ch,05H
                    mov cl,function
                    mov dx,offset buffer
                    mov bx,handle
                    mov ah,44H
                    mov al,0CH
                    int 21H
                    endm


Generic IOCtl (for Devices) (Function 44H, Code 0DH)


Call:

AH = 44H
AL = 0DH
BL
    Drive number
        (0 = default, 1 = A, etc.)
CH = 08H
    Category (major) code
CL
    Function (minor) code
DS:DX
    Pointer to parameter block -1


Return:

Carry set:
AX
    1 = Invalid function code
    2 = Invalid drive
Carry not set:
    No error


Comments:

The function code may be one of the following:

Code      Meaning
───────────────────────────────────────────────────────────────────────────
40        Set device parameters
41        Write track on logical device
42        Format track on logical device
60        Get device parameters
61        Read track on logical device
62        Verify track on logical device

───────────────────────────────────────────────────────────────────────────
Note
    You must issue "Set Device Parameters" before you can read, write,
    format, or verify a logical drive.
───────────────────────────────────────────────────────────────────────────

You should use the following procedure when you want to read, write,
format, or verify a logical drive:

    1.  Save drive parameters using "Get Device Parameters."

    2.  Set desired drive parameters using "Set Device Parameters."

    3.  Perform the I/O operation.

    4.  Restore the original drive parameters using "Set Device Parameters."


Set Device Parameters (Function 44 0DH, CL=40H)

When CL=40H, the parameter block has the following field format:

                --------------------------------------
                | BYTE      Special Functions        |
                |------------------------------------|
                | BYTE      Device Type              |
                |------------------------------------|
                | WORD      Device Attributes        |
                |------------------------------------|
                | WORD      Number of Cylinders      |
                |------------------------------------|
                | BYTE      Media Type               |
                |------------------------------------|
                |           Device BPB               |
                |------------------------------------|
                |           Track Layout             |
                --------------------------------------

These fields have the following meanings:


Special Functions

╓┌───────┌────────┌──────────────────────────────────────────────────────────╖
Bit     Value    Meaning
Bit     Value    Meaning
───────────────────────────────────────────────────────────────────────────
    0      0        The Device BPB (BIOS Parameter Block)
                    field contains the new default BPB for
                    this device. If a previous "Set
                    Parameter Device" call set this bit,
                    Build BPB returns the actual media BPB;
                    otherwise, it returns the default BPB
                    for the device.

        1        All subsequent Build BPB requests
                    return the device BPB.

    1      0        Read all fields of the parameter block.

        1        Ignore all fields of the parameter
                    block except for the Track Layout
                    field.

    2      0        The sectors in the track may not all
                    be the same size. (You should not use
Bit     Value    Meaning
                    be the same size. (You should not use
                    this setting.)

        1        The sectors in the track are all the
                    same size and the sector numbers range
                    between 1 and the total number of
                    sectors actually in the track. You
                    should always set this bit.

3-7     0        These bits must be zero.


Device Type

This byte describes the physical device and is set by the device.
When set, it has the following meanings:

Value  Meaning
───────────────────────────────────────────────────────────────────────────
0      320/360 KB
1      1.2 MB
2      720 KB
3      8-inch, single-density
4      8-inch, double-density
5      Hard disk
6      Tape drive
7      Other


Device Attributes

Bit   Value   Meaning
───────────────────────────────────────────────────────────────────────────
        0     The media is removable.

    0      1     The media is not removable.

    1      0     Disk change-line is not
                supported; (no door lock
                support).

        1     Disk change-line is
                supported; (door lock
                support).

2-7     0     These bits must be zero.


Number of Cylinders

This field indicates the maximum number of cylinders that the physical
device can support. This information is set by the device.


Media Type

For drives that may contain different media, this field (which is
device-dependent) indicates which media the drive expects.

For a 1.2 MB disk, bit zero has the following meaning:

Bit   Value   Meaning
───────────────────────────────────────────────────────────────────────────
    0      0     Quad-density, 1.2 MB disk
        1     Double-density, 320/360 KB disk

The default media type is a quad-density 1.2 MB disk.


Device BPB

If bit 0 of the Special Functions field is clear, the BPB in this
field is the new default BPB for the device.

If bit 0 of the Special Functions field is set, the device driver
returns the BPB from this field for subsequent Build BPB requests.


Track Layout

This field contains a table of variable length for each logical device
and indicates the expected layout of the sectors on the media track.
The field has the following format:

        ------------------------------------------------
        | WORD      Sector Count -- total # of sectors |
        |----------------------------------------------|
        | WORD      Sector Number -- sector #1         |
        |----------------------------------------------|
        | WORD      Sector Size -- sector #1           |
        |----------------------------------------------|
        | WORD      Sector Number -- sector #2         |
        |----------------------------------------------|
        | WORD      Sector Size -- sector #2           |
        ------------------------------------------------
                                |
                                |
                                |
        ------------------------------------------------
        | WORD      Sector Number -- sector #n         |
        |----------------------------------------------|
        | WORD      Sector Size -- sector #n           |
        ------------------------------------------------

The Sector Count field indicates the total number of sectors. Each sector
number must be unique and in the range of 1 to sector count (n).

If bit 2 of the Special Functions field is set, all sector sizes must
be the same.


Get Device Parameters (Function 440DH, CL=60H)

When CL=60H, the parameter block has the same field layout as for CL=40H.
However, some of the fields have different meanings. These are described
as follows:


Special Functions

Bit   Value   Meaning
───────────────────────────────────────────────────────────────────────────
    0      0     Returns the default BPB for the device.
        1     Returns the BPB that Build BPB would return.

1-7     0     These bits must be zero.


Track Layout

The "Get Device Parameters" call does not use this field.


Read/Write Track on Logical Drive (Function 440D, CL=61H/CL=41H)

To write to a track on a logical drive, set CL=41H. To read a track on a
logical drive, set CL=61H.

When CL=41H or 61H, the parameter block has the following format:

            --------------------------------
            | BYTE      Special Functions  |
            |------------------------------|
            | WORD      Head               |
            |------------------------------|
            | WORD      Cylinder           |
            |------------------------------|
            | WORD      First Sector       |
            |------------------------------|
            | WORD      Number of Sectors  |
            |------------------------------|
            | DWORD     Transfer Address   |
            --------------------------------

These fields are described as follows:


Special Functions

This byte must be zero.


Head

This field contains the number of the head on which you perform the
write or read.


Cylinder

This field contains the number of the cylinder on which you perform
the write or read.


First Sector

This field contains the number of the first sector on which you perform
the write or read. Sectors are numbered starting with zero, so the fourth
sector is numbered 3.


Number of Sectors

This field contains the total number of sectors.


Transfer Address

This field contains the address for storing the data to be written or
the data just read.


Format/Verify Track on Logical Drive (Function 440DH, CL=42/CL=62)

To format and verify a track on a logical drive, set CL=42H. To verify a
track on a logical drive, set CL=62H.

When CL=42H or 62H, the parameter block has the following format:

            --------------------------------
            | BYTE      Special Functions  |
            |------------------------------|
            | WORD      Head               |
            |------------------------------|
            | WORD      Cylinder           |
            --------------------------------

These fields are described as follows:


Special Functions

This byte must be zero.


Head

This field contains the number of the head on which you perform the
format or verify.


Cylinder

This field contains the number of the cylinder on which you perform
the format or verify.

Get/Set IOCtl Drive Map (Function 44H, Codes 0EH and 0FH)


Call:

AH = 44H
AL
    OEH = Get logical drive map
    OFH = Set logical drive map
BX
    Drive number
        (0 = default, 1 = A, etc.)


Return:

Carry set:
AX
    1 = Invalid function code
    5 = Invalid drive
Carry not set:
AL = Logical drive mapped onto physical drive
        (= 0 if only one drive is
        assigned to this physical drive)


Comments:

MS-DOS 3.3 supports the mapping of multiple logical drives onto a single
physical block device. Get IOCtl Drive Map lets you query the DOS about
which logical drive is currently mapped onto the corresponding physical
device. Set IOCtl Drive Map alters the device that is currently mapped
onto the physical device. These functions are only useful if there is
more than one logical block device mapped onto a single physical device.

A possible use for these functions is with applications that want to
disable the DOS prompt in order to place the correct floppy disk in the
drive when accessing the other logical drive.

To detect whether a logical device currently owns the physical device
it is mapped to, a program needs to check the value in AL after calling
Function 440EH or 440FH (Get/Set IOCtl Drive Map).


Duplicate File Handle (Function 45H)


Call:

AH = 45H
BX
    Handle


Return:

Carry set:
AX
    4 = Too many open files
    6 = Invalid handle
Carry not set:
AX
    New handle


Comments:

Function 45H creates an additional handle for a file. BX must contain the
handle of an open file.

MS-DOS returns the new handle in AX. The new handle refers to the same
file as the handle in BX, with the file pointer at the same position.

After you use this function request, moving the read/write pointer of
either handle also moves the pointer for the other handle. You usually use
this function request to redirect standard input (handle 0) and standard
output (handle 1). For a description of standard input, standard output,
and the advantages and techniques of manipulating them, see Software Tools
by Brian W. Kernighan and P.J. Plauger (Addison-Wesley Publishing Co.,
1976).

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
4        Too many open files (no handle available)
6        Handle not open or is invalid


Macro Definition:

xdup  macro  handle
        mov    bx,handle
        mov    ah,45H
        int    21H
        endm


Example:

The following program redirects standard output (handle 1) to a file named
dirfile, invokes a second copy of command.com to list the directory (which
writes the directory to dirfile), and then restores standard input to
handle 1.

pgm_file  db    "command.com",0
cmd_line  db    9,"/c dir /w",0dH
parm_blk  db    14 dup (0)
path            db  "dirfile",0
dir_file        dw      ?         ; For handle
sav_stdout dw   ?                 ; For handle
;
begin:    set_block  last_inst    ; See Function 4AH
            jc      error_setblk    ; Routine not shown
            create_handle  path,0   ; See Function 3CH
            jc      error_create    ; Routine not shown
            mov     dir_file,ax     ; Save handle
            xdup    1               ; THIS FUNCTION
            jc      error_xdup      ; Routine not shown
            mov     sav_stdout,ax   ; Save handle
            xdup2   dir_file,1      ; See Function 46H
            jc      error_xdup2     ; Routine not shown
            exec    pgm_file,cmd_line,parm_blk ; See Function 4BH
            jc      error_exec      ; Routine not shown
            xdup2   sav_stdout,1    ; See Function 46H
            jc      error_xdup2     ; Routine not shown
            close_handle sav_stdout ; See Function 3EH
            jc      error_close     ; Routine not shown
            close_handle dir_file   ; See Function 3EH
            jc      error_close     ; Routine not shown


Force Duplicate File Handle (Function 46H)


Call:

AH = 46H
BX
    Handle
CX
    Second handle


Return:

Carry set:
AX
    4 = Too many open files
    6 = Invalid handle
Carry not set:
    No error


Comments:

Function 46H forces a specified handle to refer to the same file as
a second handle already associated with an open file. BX must contain
the handle of the open file; CX must contain the second handle.

On return, the handle in CX now refers to the same file at the same
position as the handle in BX. If the file referred to by the handle in
CX was open at the time of the call, this function closes it.

After you use this call, moving the read/write pointer of either handle
also moves the pointer for the other handle. Normally, you would use this
function request to redirect standard input (handle 0) and standard output
(handle 1). For a description of standard input, standard output, and the
advantages and techniques of manipulating them, see Software Tools by
Brian W. Kernighan and P.J. Plauger (Addison-Wesley Publishing Co., 1976).

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
4        Too many open files (no handle available)
6        Handle not open or is invalid


Macro Definition:

xdup2  macro  handle1,handle2
        mov    bx,handle1
        mov    cx,handle2
        mov    ah,46H
        int    21H
        endm


Example:

The following program redirects standard output (handle 1) to a file named
dirfile, invokes a second copy of command.com to list the directory (which
writes the directory to dirfile), and then restores standard input to
handle 1.

pgm_file  db    "command.com",0
cmd_line  db    9,"/c dir /w",0dH
parm_blk  db    14 dup (0)
path            db  "dirfile",0
dir_file        dw      ?         ; For handle
sav_stdout dw   ?                 ; For handle
;
begin:    set_block  last_inst    ; See Function 4AH
            jc      error_setblk    ; Routine not shown
            create_handle  path,0   ; See Function 3CH
            jc      error_create    ; Routine not shown
            mov     dir_file,ax     ; Save handle
            xdup    1               ; See Function 45H
            jc      error_xdup      ; Routine not shown
            mov     sav_stdout,ax   ; Save handle
            xdup2   dir_file,1      ;
            jc      error_xdup2     ; Routine not shown
            exec    pgm_file,cmd_line,parm_blk ; See Function 4BH
            jc      error_exec      ; Routine not shown
            xdup2   sav_stdout,1    ; THIS FUNCTION
            jc      error_xdup2     ; Routine not shown
            close_handle sav_stdout ; See Function 3EH
            jc      error_close     ; Routine not shown
            close_handle dir_file   ; See Function 3EH
            jc      error_close     ; Routine not shown


Get Current Directory (Function 47H)


Call:

AH = 47H
DS:SI
    Pointer to 64-byte memory area
DL
    Drive number
        (0 = default, 1 = A)


Return:

Carry set:
AX
    15 = Invalid drive number
Carry not set:
    No error


Comments:

Function 47H returns the pathname of the current directory on a specified
drive. DL must contain a drive number (0=default, 1=A, etc.). SI must
contain the offset (from the segment address in DS) of a 64-byte memory
area.

MS-DOS places an ASCIZ string in the memory area, consisting of the path
(starting from the root directory) of the current directory for the drive
specified in DL. The string does not begin with a backslash and does not
include the drive letter.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
15       Number in DL not a valid drive number


Macro Definition:

get_dir  macro   drive,buffer
            mov     dl,drive
            mov     si,offset buffer
            mov     ah,47H
            int     21H
            endm


Example:

The following program displays the current directory that is on the disk in
drive B.

disk        db      "b:
buffer      db       64 dup (?)
;
begin:      get_dir  2,buffer       ;THIS FUNCTION
            jc       error_dir      ;Routine not shown
            display  disk           ;See Function 09H
            display_asciz  buffer   ;See end of chapter


Allocate Memory (Function 48H)


Call:

AH = 48H
BX
    Paragraphs of memory requested


Return:

Carry set:
AX
    7 = Memory-control blocks damaged
    8 = Insufficient memory
BX
    Paragraphs of memory available
Carry not set:
AX
    Segment address of allocated memory


Comments:

Function 48H tries to allocate the specified amount of memory to the
current process. BX must contain the number of paragraphs of memory
(one paragraph is 16 bytes).

If sufficient memory is available to satisfy the request, AX returns
the segment address of the allocated memory (the offset is 0). If
sufficient memory is not available, BX returns the number of paragraphs
of memory in the largest available block.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
7        Memory-control blocks damaged (a user program changed memory
            that doesn't belong to it)

8        Not enough free memory to satisfy the request


Macro Definition:

allocate_memory  macro   bytes
                    mov     bx,bytes
                    mov     cl,4
                    shr     bx,cl
                    inc     bx
                    mov     ah,48H
                    int     21H
                    endm


Example:

The following program opens the file named textfile.asc, calculates its
size with Function 42H (Move File Pointer), allocates a block of memory the
size of the file, reads the file into the allocated memory block, and then
frees the allocated memory.

path      db      "textfile.asc",0
msg1      db      "File loaded into allocated memory block.",
                    0DH,0AH
msg2      db      "Allocated memory now being freed
                    (deallocated).",0DH,0AH
handle    dw       ?
mem_seg   dw       ?
file_len  dw       ?
;
begin:    open_handle  path,0
            jc       error_open         ;Routine not shown
            mov      handle,ax          ;Save handle
            move_ptr handle,0,0,2       ;See Function 42H
            jc       error_move         ;Routine not shown
            mov      file_len,ax        ;Save file length
            set_block  last_inst        ;See Function 4AH
            jc       error_setblk       ;Routine not shown
            allocate_memory  file_len   ;THIS FUNCTION
            jc       error_alloc        ;Routine not shown
            mov      mem_seg,ax         ;Save address of new memory
            move_ptr handle,0,0,0       ;See Function 42H
            jc       error_move         ;Routine not shown
            push     ds                 ;Save DS
            mov      ax,mem_seg         ;Get segment of new memory
            mov      ds,ax              ;Point DS at new memory
            read_handle  cs:handle,0,cs:file_len ;Read file into new memory
            pop      ds                 ;Restore DS
            jc       error_read         ;Routine not shown
;         (CODE TO PROCESS FILE GOES HERE)
            write_handle stdout,msg1,42 ;See Function 40H
            jc       write_error        ;Routine not shown
            free_memory  mem_seg        ;See Function 49H
            jc       error_freemem      ;Routine not shown
            write_handle stdout,msg2,49 ;See Function 40H
            jc       write_error        ;Routine not shown


Free Allocated Memory (Function 49H)


Call:

AH = 49H
ES
    Segment address of memory to be
    freed


Return:

Carry set:
AX
    7 = Memory-control blocks damaged
    9 = Incorrect segment
Carry not set:
    No error


Comments:

Function 49H frees (makes available) a block of memory previously allocated
with Function 48H (Allocate Memory). ES must contain the segment address of
the memory block to be freed.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
7        Memory-control blocks damaged (a user program changed memory
            that didn't belong to it)

9        Memory pointed to by ES was not allocated with Function 48H


Macro Definition:

free_memory  macro     seg_addr
                mov       ax,seg_addr
                mov       es,ax
                mov       ah,49H
                int       21H
                endm


Example:

The following program opens a file named textfile.asc, calculates its size
with Function 42H (Move File Pointer), allocates a block of memory the size
of the file, reads the file into the allocated memory block, and then frees
the allocated memory.

path      db      "textfile.asc",0
msg1      db      "File loaded into allocated memory block.",
                    0DH,0AH
msg2      db      "Allocated memory now being freed
                    (deallocated).",0DH,0AH
handle    dw       ?
mem_seg   dw       ?
file_len  dw       ?
;
begin:    open_handle  path,0
            jc       error_open         ;Routine not shown
            mov      handle,ax          ;Save handle
            move_ptr handle,0,0,2       ;See Function 42H
            jc       error_move         ;Routine not shown
            mov      file_len,ax        ;Save file length
            set_block  last_inst        ;See Function 4AH
            jc       error_setblk       ;Routine not shown
            allocate_memory  file_len   ;See Function 48H
            jc       error_alloc        ;Routine not shown
            mov      mem_seg,ax         ;Save address of new memory
            mov_ptr  handle,0,0,0       ;See Function 42H
            jc       error_move         ;Routine not shown
            push     ds                 ;Save DS
            mov      ax,mem_seg         ;Get segment of new memory
            mov      ds,ax              ;Point DS at new memory
            read_handle  handle,code,file_len ;Read file into new memory
;
            pop      ds                 ;Restore DS
            jc       error_read         ;Routine not shown
;         (CODE TO PROCESS FILE GOES HERE)
            write_handle stdout,msg1,42 ;See Function 40H
            jc       write_error        ;Routine not shown
            free_memory  mem_seg        ;THIS FUNCTION
            jc       error_freemem      ;Routine not shown
            write_handle stdout,msg2,49 ;See Function 40H
            jc       write_error        ;Routine not shown


Set Block (Function 4AH)


Call:

AH = 4AH
BX
    Paragraphs of memory
ES
    Segment address of memory area


Return:

Carry set:
AX
    7 = Memory-control blocks damaged
    8 = Insufficient memory
    9 = Incorrect segment
BX
    Paragraphs of memory available
Carry not set:
    No error


Comments:

Function 4AH changes the size of a memory-allocation block. ES must
contain the segment address of the memory block. BX must contain the
new size of the memory block, in paragraphs (one paragraph is 16 bytes).

MS-DOS attempts to change the size of the memory block. If the call
fails on a request to increase memory, BX returns the maximum size
(in paragraphs) to which the block can be increased.

Since MS-DOS allocates all available memory to a .com program, you would
use this call most often to reduce the size of a program's initial memory-
allocation block.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
7        Memory-control blocks destroyed (a user program changed memory
            that didn't belong to it)

8        Not enough free memory to satisfy the request

9        Wrong address in ES (the memory block it points to cannot
            be modified with Set Block)

The following macro shrinks the initial memory-allocation block of a
.com program. It takes as a parameter the offset of the first byte
following the last instruction of a program (LAST_INST in the sample
programs), uses it to calculate the number of paragraphs in the program,
and then adds 17 to the result: one to round up and 16 to set aside 256
bytes for a stack. It then sets up SP and BP to point to this stack.


Macro Definition:

set_block  macro   last_byte
            mov     bx,offset last_byte
            mov     cl,4
            shr     bx,cl
            add     bx,17
            mov     ah,4AH
            int     21H
            mov     ax,bx
            shl     ax,cl
            dec     ax
            mov     sp,ax
            mov     bp,sp
            endm


Example:

The following program invokes a second copy of command.com and executes a
dir (directory) command.

pgm_file  db      "command.com",0
cmd_line  db       9,"/c dir /w",0DH
parm_blk  db       14 dup (?)
reg_save  db       10 dup (?)
;
begin: set_block  last_inst                     ;THIS FUNCTION
        exec       pgm_file,cmd_line,parm_blk,0  ;See Function 4BH


Load and Execute Program (Function 4BH, Code 00H)


Call:

AH = 4BH
AL = 00H
DS:DX
    Pointer to pathname
ES:BX
    Pointer to parameter block


Return:

Carry set:
AX
    1      = Invalid function
    2      = File not found
    3      = Path not found
    4      = Too many open files
    5      = Access denied
    8      = Insufficient memory
    10      = Bad environment
    11      = Bad format
Carry not set:
    No error


Comments:

Function 4BH, Code 00H, loads and executes a program. DX must contain the
offset (from the segment address in DS) of an ASCIZ string that specifies
the drive and pathname of an executable program file. BX must contain the
offset (from the segment address in ES) of a parameter block. AL must
contain 0.

There must be enough free memory for MS-DOS to load the program file.
MS-DOS allocates all available memory to a program when it loads it, so
you must free some memory with Function 4AH (Set Block) before using this
function request to load and execute another program. Unless you or MS-DOS
needs the memory for some other purpose, you should shrink the memory to
the minimum amount required by the current process before issuing
this request.

MS-DOS creates a Program Segment Prefix for the program being loaded
and sets the terminate and CONTROL-C addresses to the instruction that
immediately follows the call to Function 4BH in the invoking program.

The parameter block consists of four addresses:


        Table 1.24
        Contents of the Parameter Block
╓┌─────────────┌───────────┌─────────────────────────────────────────────────╖
        Offset   Length
        (Hex)    (Bytes)     Description
        ──────────────────────────────────────────────────────────────────────
        Offset   Length
        (Hex)    (Bytes)     Description
        ──────────────────────────────────────────────────────────────────────
        00       2 (word)    Segment address of the environment
                            to be passed; 00H means copy the
                            parent program's environment.

        02       4 (dword)   Segment: Offset of command line to
                            be placed at offset 80H of the new
                            Program Segment Prefix. Must be a
                            correctly-formed command line no
                            longer than 128 bytes.

        06       4 (dword)   Segment: Offset of FCB to be placed
                            at offset 5CH of the new Program
                            Segment Prefix (the Program Segment
                            Prefix is described in Chapter 4
                            "MS-DOS Control Blocks and Work Areas")

        0A       4 (dword)   Segment: Offset of FCB to be placed
                            at offset 6CH of the new Program
        Offset   Length
        (Hex)    (Bytes)     Description
                            at offset 6CH of the new Program
                            Segment Prefix


All open files of a program are available to the newly loaded program,
giving the parent program control over the definition of standard input,
output, auxiliary, and printer devices. For example, a program could write
a series of records to a file, open the file as standard input, open a
second file as standard output, and then use Function 4BH, Code 00H (Load
and Execute Program) to load and execute a program that takes its input
from standard input, sorts records, and writes to standard output.

The loaded program also receives an environment, a series of ASCIZ
strings of the form parameter=value (for example, verify = on). The
environment must begin on a paragraph boundary, be less than 32K bytes
long, and end with a byte of 00H (that is, the final entry consists of an
ASCIZ string followed by two bytes of 00H). Following the last byte of
zeros is a set of initial arguments passed to a program containing a word
count followed by an ASCIZ string. If the call finds the file in the
current directory, the ASCIZ string contains the drive and pathname of the
executable program as passed to Function 4BH. If the call finds the file
in the path, it concatenates the filename with the path information. (A
program may use this area to determine whence it was loaded.) If the word-
environment address is 0, the loaded program either inherits a copy of the
parent program's environment or receives a new environment built for it
by the parent.

Place the segment address of the environment at offset 2CH of the new
Program Segment Prefix. To build an environment for the loaded program, put
it on a paragraph boundary and place the segment address of the environment
in the first word of the parameter block. To pass a copy of the parent's
environment to the loaded program, put 00H in the first word of the
parameter block.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code   Meaning
───────────────────────────────────────────────────────────────────────────
1      AL not 0 or 3

2      Program file not found

3      Path invalid or not found

4      Too many open files (no handle available)

5      Directory full, a directory with the same name exists,
        or a file with the same name exists

8      Not enough memory to load the program

10     Environment appears longer than 32K

11     Program file is an .exe file that contains internally
        inconsistent information


Executing Another Copy of Command.com

Since command.com builds pathnames, searches command paths for program
files, and relocates .exe files, the simplest way to load and execute
another program is to load and execute an additional copy of command.com,
passing it a command line that includes the /c switch, which invokes the
.com or .exe file.

This action requires 17K bytes of available memory, so a program that
does it should be sure to shrink its initial memory-allocation block with
Function 4AH (Set Block). The format of a command line that contains the
/c switch:

length,/c command,0DH

Length is the length of the command line, counting the length byte but
not the ending carriage-return (0DH).

Command is any valid MS-DOS command.

0DH is a carriage-return character.

If a program executes another program directly--naming it as the program
file to Function 4BH instead of command.com--it must perform all the
processing normally done by command.com.


Macro Definition:

exec  macro  path,command,parms
        mov    dx,offset path
        mov    bx,offset parms
        mov    word ptr parms[02H],offset command
        mov    word ptr parms[04H],cs
        mov    word ptr parms[06H],5CH
        mov    word ptr parms[08H],es
        mov    word ptr parms[0AH],6CH
        mov    word ptr parms[0CH],es
        mov    al,0
        mov    ah,4BH
        int    21H
        endm


Example:

The following program invokes a second copy of command.com and executes a
dir (directory) command by using the /w (wide) switch:

pgm_file  db      "command.com",0
cmd_line  db       9,"/c dir /w",0DH
parm_blk  db       14 dup (?)
reg_save  db       10 dup (?)
;
begin:
    set_block  last_inst                    ;See Function 4AH
    exec       pgm_file,cmd_line,parm_blk,0 ;THIS FUNCTION


Load Overlay (Function 4BH, Code 03H)


Call:

AH = 4BH
AL = 03H
DS:DX
    Pointer to pathname
ES:BX
    Pointer to parameter block


Return:

Carry set:
AX
    1      = Invalid function
    2      = File not found
    3      = Path not found
    4      = Too many open files
    5      = Access denied
    8      = Insufficient memory
    10      = Bad environment
Carry not set:
    No error


Comments:

Function 4BH, Code 03H, loads a program segment (overlay). DX must contain
the offset (from the segment address in DS) of an ASCIZ string that
specifies the drive and pathname of the program file. BX must contain the
offset (from the segment address in ES) of a parameter block. AL must
contain 3.

MS-DOS assumes that since the invoking program is loading into its own
address space, it requires no free memory. This call does not create a
Program Segment Prefix.

The parameter block is four bytes long:


        Table 1.25
        Contents of the Parameter Block
╓┌─────────────┌──────────┌──────────────────────────────────────────────────╖
        Offset   Length
        (Hex)    (Bytes)    Description
───────────────────────────────────────────────────────────────────────────
        Offset   Length
        (Hex)    (Bytes)    Description
───────────────────────────────────────────────────────────────────────────
        00       2 (word)   Segment address where program is to be loaded

        02       2 (word)   Relocation factor; usually the same as the
                            first word of the parameter block (for a
                            description of an .exe file and of
                            relocation, see Chapter 6, ".Exe File
                            Structure and Loading.")


If there is an error, the carry flag (CF) is set and the error code returns
in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        AL not 00H or 03H

2        Program file not found

3        Path invalid or not found

4        Too many open files (no handle available)

5        Directory is full, a directory with the same name exists,
            or a file with the same name exists

8        Not enough memory to load the program

10       Environment appears longer than 32K


Macro Definition:

exec_ovl  macro  path,parms,seg_addr
            mov    dx,offset path
            mov    bx,offset parms
            mov    parms,seg_addr
            mov    parms[02H],seg_addr
            mov    al,3
            mov    ah,4BH
            int    21H
            endm


Example:

The following program opens a file named textfile.asc, redirects standard
input to that file, loads more.com as an overlay, and calls an overlay
named bit.com, which reads textfile.asc as standard input. The overlay
must establish its own addressability and end with a FAR return.

stdin     equ       0
;
file      db    "TEXTFILE.ASC",0
cmd_file  db    "\bit.com",0
parm_blk  dw     4 dup (?)
overlay   label  dword
            dw     0
handle    dw     ?
new_mem   dw     ?
;
begin:    set_block   last_inst            ;see Function 4AH
            jc          setblock_error       ;routine not shown
            allocate_memory  2000            ;see Function 48H
            jc          allocate_error       ;routine not shown
            mov         new_mem,ax           ;save seg of memory
            open_handle file,0               ;see Function 3DH
            jc          open_error           ;routine not shown
            mov         handle,ax            ;save handle
            xdup2       handle,stdin         ;see Function 45H
            jc          dup2_error           ;routine not shown
            close_handle handle              ;see Function 3EH
            jc          close_error          ;routine not shown
            mov         ax,new_mem           ;addr of new memory
            exec_ovl cmd_file,parm_blk,ax    ;THIS FUNCTION
            jc          exec_error           ;routine not shown
            call        overlay              ;call the overlay
            free_memory new_mem              ;see Function 49H
            jc          free_error           ;routine not shown
;


End Process (Function 4CH)


Call:

AH = 4CH
AL
    Return code


Return:

None


Comments:

Function 4CH terminates a process and returns to MS-DOS. AL contains a
return code that can be retrieved by the parent process with Function 4DH
(Get Return Code of Child Process) or the if command, using errorlevel.

MS-DOS closes all open handles, ends the current process, and returns
control to the invoking process.

This function request doesn't require CS to contain the segment address
of the Program Segment Prefix. You should use it to end a program (rather
than Interrupt 20H or a jump to location 0) unless your program must be
compatible with MS-DOS versions before 2.0.

───────────────────────────────────────────────────────────────────────────
Note
    If you use file sharing, you must remove all locks issued by this
    process or the DOS will be in an uncertain state.
───────────────────────────────────────────────────────────────────────────


Macro Definition:

end_process  macro  return_code
                mov    al,return_code
                mov    ah,4CH
                int    21H
                endm


Example:

The following program displays a message and returns to MS-DOS with a
return code of 8. It uses only the opening portion of the sample program
skeleton shown at the beginning of this chapter.

message   db     "Displayed by FUNC_4CH example",0DH,0AH,"$"
;
begin:    display      message   ;See Function 09H
            end_process  8         ;THIS FUNCTION
code      ends
            end          code


Get Return Code of Child Process (Function 4DH)


Call:

AH = 4DH


Return:

AX
    Return code


Comments:

Function 4DH retrieves the return code specified when a child process
terminates via either Function 31H (Keep Process) or Function 4CH (End
Process). The code returns in AL. AH returns a code that specifies why
the program ended:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
0        Normal termination
1        Terminated by CONTROL-C
2        Critical device error
3        Function 31H (Keep Process)

This call can retrieve the exit code only once.


Macro Definition:

ret_code  macro
            mov    ah,4DH
            int    21H
            endm


Example:

No example is included for this function request, because the meaning of
a return code varies.


Find First File (Function 4EH)


Call:

AH = 4EH
DS:DX
    Pointer to pathname
CX
    Attributes to match


Return:

Carry set:
AX
    2      = File not found
    3      = Path not found
    18      = No more files
Carry not set:
    No error


Comments:

Function 4EH searches the current or specified directory for the first
entry that matches the specified pathname. DX must contain the offset (from
the segment address in DS) of an ASCIZ string that specifies the pathname,
which can contain wildcard characters. CX must contain the attribute to
be used in searching for the file, as described in Section 1.5.5, "File
Attributes."

If the attribute field is hidden file, system file, or subdirectory
entry (02H, 04H, or 10H), or any combination of these values, all normal
file entries are also searched. To search all directory entries except
the volume label, set the attribute byte to 16H (hidden file, system file,
and directory entry).

If this function finds a directory entry that matches the name and
attribute, it fills the current DTA as follows:


        Table 1.26
╓┌─────────────┌────────┌────────────────────────────────────────────────────╖
        Offset   Length   Description
        ──────────────────────────────────────────────────────────────────────
        00H      21       Reserved for subsequent Function 4FH (Find
                        Next File)

        15H      1        Attribute found

        16H      2        Time file was last written

        18H      2        Date file was last written

        1AH      2        Low word of file size

        1CH      2        High word of file size

        1EH      13       Name and extension of the file, followed by 00H.
                        All blanks are removed; if there is an extension,
                        it is preceded by a period. (Volume labels include
                        a period after the eighth character.)


If there is an error, the carry flag (CF) is set and the error code returns
in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
2        Specified file invalid or doesn't exist
3        Specified path invalid or doesn't exist
18       No matching directory entry found


Macro Definition:

find_first_file  macro  path,attrib
                    mov    dx,offset path
                    mov    cx,attrib
                    mov    ah,4EH
                    int    21H
                    endm


Example:

The following program displays a message that specifies whether a file
named report.asm exists in the current directory on the disk in drive B.

yes        db      "File exists.",0DH,0AH,"$"
no         db      "File does not exist.",0DH,0AH,"$"
path       db      "b:report.asm",0
buffer     db       43 dup (?)
;
begin:     set_dta  buffer           ;See Function 1AH
            find_first_file  path,0   ;THIS FUNCTION
            jc       error_findfirst  ;Routine not shown
            cmp      al,12H           ;File found?
            je       not_there        ;No
            display  yes              ;See Function 09H
            jmp      return           ;All done
not_there: display  no               ;See Function 09H


Find Next File (Function 4FH)


Call:

AH = 4FH


Return:

Carry set:
AX
    18 = No more files
Carry not set:
    No error


Comments:

Function 4FH searches for the next directory entry that matches the name
and attributes specified in a previous Function 4EH (Find First File).
The current DTA must contain the information filled in by Function 4EH
(Find First File).

If the function finds a matching entry, it fills the current DTA just
as it did for Find First File (see Function 4EH (Find First File)).

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
2        Specified path invalid or doesn't exist
18       No matching directory entry found


Macro Definition:

find_next_file  macro
                mov    ah,4FH
                int    21H
                endm


Example:

The following program displays the number of files contained in the current
directory on the disk in drive B.

message     db      "No files",0DH,0AH,"$"
files       dw       ?
path        db      "b:*.*",0
buffer      db       43 dup (?)
;
begin:      set_dta  buffer            ;See Function 1AH
            find_first_file  path,0    ;See Function 4EH
            jc       error_findfirst   ;Routine not shown
            cmp      al,12H            ;Directory empty?
            je       all_done          ;Yes, go home
            inc      files             ;No, bump file counter
search_dir: find_next_file             ;THIS FUNCTION
            jc       error_findnext    ;Routine not shown
            cmp      al,12H            ;Any more entries?
            je       done              ;No, go home
            inc      files             ;Yes, bump file counter
            jmp      search_dir        ;And check again
done:       convert  files,10,message  ;See end of chapter
all_done:   display  message           ;See Function 09H


Get Verify State (Function 54H)


Call:

AH = 54H


Return:

AL
    0 = No verify after write
    1 = Verify after write


Comments:

Function 54H checks whether MS-DOS verifies write operations to disk files.
The status returns in AL: 0 if verify is off, 1 if verify is on.

You can set the verify status with Function 2EH (Set/Reset Verify Flag).


Macro Definition:

get_verify  macro
            mov    ah,54H
            int    21H
            endm


Example:

The following program displays the verify status:

message   db     "Verify ","$"
on        db     "on.",0DH,0AH,"$"
off       db     "off.",0DH,0AH,"$"
;
begin:    display message      ;See Function 09H
            get_verify           ;THIS FUNCTION
            cmp     al,0         ;Is flag off?
            jg      ver_on       ;No, it's on
            display off          ;See Function 09H
            jmp     return       ;Go home
ver_on:   display on           ;See Function 09H


Change Directory Entry (Function 56H)


Call:

AH = 56H
DS:DX
    Pointer to pathname
ES:DI
    Pointer to second pathname


Return:

Carry set:
AX
    2      = File not found
    3      = Path not found
    5      = Access denied
    17      = Not same device
Carry not set:
    No error


Comments:

Function 56H renames a file by changing its directory entry. DX must
contain the offset (from the segment address in DS) of an ASCIZ string
that contains the pathname of the entry to be changed. DI must contain
the offset (from the segment address in ES) of an ASCIZ string that
contains a second pathname to which the first is to be changed.

If a directory entry for the first pathname exists, it is changed to
the second pathname.

The directory paths need not be the same; in effect, you can move the
file to another directory by renaming it. You cannot use this function
request to copy a file to another drive, however; if the second pathname
specifies a drive, the first pathname must specify or default to the
same drive.

You cannot use this function request to rename an open file, a hidden
file, a system file, or a subdirectory, because it may corrupt your disk.

If there is an error, the carry flag (CF) is set and the error code
returns in AX.

Code     Meaning
───────────────────────────────────────────────────────────────────────────
2        One of files is invalid or not open

3        One of paths is invalid or not open

5        First pathname specifies a directory, second pathname specifies
            an existing file; or second directory entry could not be opened

17       Both files not on the same drive


Macro Definition:

rename_file  macro  old_path,new_path
                mov    dx,offset old_path
                push   ds
                pop    es
                mov    di,offset new_path
                mov    ah,56H
                int    21H
                endm


Example:

The following program prompts for the name of a file and a new name,
then renames the file.

prompt1   db     "Filename: $"
prompt2   db     "New name: $"
old_path  db      15,?,15 dup (?)
new_path  db      15,?,15 dup (?)
crlf      db      0DH,0AH,"$"
;
begin:    display prompt1                      ;See Function 09H
            get_string  15,old_path              ;See Function 0AH
            xor     bx,bx                        ;To use BL as index
            mov     bl,old_path[1]               ;Get string length
            mov     old_path[bx+2],0             ;Make an ASCIZ string
            display crlf                         ;See Function 09H
            display prompt2                      ;See Function 09H
            get_string  15,new_path              ;See Function 0AH
            xor     bx,bx                        ;To use BL as index
            mov     bl,new_path[1]               ;Get string length
            mov     new_path[bx+2],0             ;Make an ASCIZ string
            display crlf                         ;See Function 09H
            rename_file old_path[2],new_path[2]  ;THIS FUNCTION
            jc      error_rename                 ;Routine not shown


Get/Set Date/Time of File(Function 57H)


Call:

AH = 57H
AL = Function code
    0 = Get date and time
    1 = Set date and time
BX
    Handle
CX (if AL = 1)
    Time to be set
DX (if AL = 1)
    Date to be set


Return:

Carry set:
AX
    1 = Invalid function
    6 = Invalid handle
Carry not set:
CX (if AL = 0)
    Time file last written
DX (if AL = 0)
    Date file last written


Comments:

Function 57H gets or sets the time and date when a file was last written.
To get the time and date, AL must contain 0; the time and date return in CX
and DX. To set the time and date, AL must contain 1; CX and DX must contain
the time and date. BX must contain the file handle. The time and date are
in the form described in "Fields of the FCB" in Section 1.9.1.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        AL not 0 or 1
6        Handle in BX invalid or not open


Macro Definition:

get_set_date_time macro  handle,action,time,date
                    mov    bx,handle
                    mov    al,action
                    mov    cx,word ptr time
                    mov    dx,word ptr date
                    mov    ah,57H
                    int    21H
                    endm


Example:

The following program gets the date of a file named report.asm in the
current directory on the disk in drive B, increments the day, increments
the month and/or year, if necessary, and sets the new date of the file.

month     db      31,28,31,30,31,30,31,31,30,31,30,31
path      db     "b:report.asm",0
handle    dw      ?
time      db      2 dup (?)
date      db      2 dup (?)
;
begin:    open_handle  path,0                  ;See Function 3DH
            mov     handle,ax                    ;Save handle
            get_set_date_time handle,0,time,date ;THIS FUNCTION
            jc      error_time                   ;Routine not shown
            mov     word ptr time,cx             ;Save time
            mov     word ptr date,dx             ;Save date
            convert_date  date[-24]              ;See end of chapter
            inc     dh                           ;Increment day
            xor     bx,bx                        ;To use BL as index
            mov     bl,dl                        ;Get month
            cmp     dh,month[bx-1]               ;Past last day?
            jle     month_ok                     ;No, go home
            mov     dh,1                         ;Yes, set day to 1
            inc     dl                           ;Increment month
            cmp     dl,12                        ;Is it past December?
            jle     month_ok                     ;No, go home
            mov     dl,1                         ;Yes, set month to 1
            inc     cx                           ;Increment year
month_ok: pack_date  date                      ;See end of chapter
            get_set_date_time handle,1,time,date ;THIS FUNCTION
            jc      error_time                   ;Routine not shown
            close_handle  handle                 ;See Function 3EH
            jc      error_close                  ;Routine not shown


Get/Set Allocation Strategy (Function 58H)


Call:

AH = 58H
AL
    0 = Get strategy
    1 = Set strategy
BX (AL = 1)
    0 = First fit
    1 = Best fit
    2 = Last fit


Return:

Carry set:
AX
    1 = Invalid function code
Carry not set:
AX (AL = 0)
    0 = First fit
    1 = Best fit
    2 = Last fit


Comments:

Function 58H gets or sets the strategy that MS-DOS uses to allocate memory
when a process requests it. If AL contains 0, the strategy is returned in
AX. If AL contains 1, BX must contain the strategy. The three possible
strategies are:


        Table 1.27
        Allocation Strategy
╓┌────────────┌───────────┌──────────────────────────────────────────────────╖
        Value   Name        Description
        ──────────────────────────────────────────────────────────────────────
        0       First fit   MS-DOS starts searching at the lowest
                            available block and allocates the
                            first block it finds (the allocated
                            memory is the lowest available block).
                            This is the default strategy.

        Value   Name        Description

        1       Best fit    MS-DOS searches each available block
                            and allocates the smallest available
                            block that satisfies the request.

        2       Last fit    MS-DOS starts searching at the
                            highest available block and allocates
                            the first block it finds (the
                            allocated memory is the highest
                            available block).


You can use this function request to control how MS-DOS uses its memory
resources.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        AL doesn't contain 0 or 1, or BX doesn't contain 0, 1, or 2.


Macro Definition:

alloc_strat macro  code,strategy
            mov    bx,strategy
            mov    al,code
            mov    ah,58H
            int    21H
            endm


Example:

The following program displays the memory-allocation strategy in effect,
then forces subsequent memory allocations to the top of memory by setting
the strategy to last fit (code 2).

get       equ       0
set       equ       1
stdout    equ       1
last_fit  equ       2
;
first     db       "First fit     ",0DH,0AH
best      db       "Best fit      ",0DH,0AH
last      db       "Last fit      ",0DH,0AH
;
begin:    alloc_strat get               ;THIS FUNCTION
            jc         alloc_error        ;routine not shown
            mov        cl,4               ;multiply code by 16
            shl        ax,cl              ;to calculate offset
            mov        dx,offset first    ;point to first msg
            add        dx,ax              ;add to base address
            mov        bx,stdout          ;handle for write
            mov        cs,16              ;write 16 bytes
            mov        ah,40h             ;write handle
            int        21H                ;system call
;         jc         write_error        ;routine not shown
            alloc_strat set,last_fit      ;THIS FUNCTION
;         jc         alloc_error        ;routine not shown


Get Extended Error (Function 59H)


Call:

AH = 59H
BX = 0


Return:

AX
    Extended-error code
BH
    Error class (see text)
BL
    Suggested action (see text)
CH
    Locus (see text)

CL, DX, SI, DI, DS, ES destroyed


Comments:

Function 59H retrieves an extended-error code for the preceding system
call. Each release of MS-DOS extends the error codes to cover new
capabilities. These new codes are mapped to a simpler set of error codes
based on MS-DOS Version 2.0, so that existing programs can continue to
operate correctly. Note that this call destroys all registers except CS:IP
and SS:SP.

A user-written Interrupt 24H (Critical-Error Handler Address) can use
Function 59H to get detailed information about the error that caused the
interrupt to be issued.

The input BX is a version indicator that specifies for what level of
error handling the application was written. The current level is 0.

The extended-error code consists of four separate codes in AX, BH, BL,
and CH that give as much detail as possible about the error and suggest
how the issuing program should respond.


BH--Error Class

BH returns a code that describes the class of error that occurred:

╓┌──────┌────────────────────────────────────────────────────────────────────╖
Class  Description
───────────────────────────────────────────────────────────────────────────
1      Out of a resource, such as storage or channels

2      Not an error, but a temporary situation (such as a locked region
        in a file) that is expected to end

3      Authorization problem

4      Internal error in system software

5      Hardware failure

Class  Description

6      System software failure not the fault of the active process (could
        be caused by missing or incorrect configuration files, for example)

7      Application program error

8      File or item not found

9      File or item of invalid format or type, or that is otherwise
        invalid or unsuitable

10     Interlocked file or item

11     Wrong disk in drive, bad spot on disk, or other problem
        with storage medium

12     Other error


BL--Suggested Action

BL returns a code that suggests how the issuing program can respond to
the error:

Action     Description
───────────────────────────────────────────────────────────────────────────
1          Retry, then prompt user

2          Retry after a Pause

3          If user entered data such as drive letter or filename,
            prompt for it again

4          Terminate with cleanup

5          Terminate immediately; system so unhealthy that program should
            exit as soon as possible without taking time to close files
            and update indexes

6          Error is informational

7          Prompt user to perform some action, such as changing disks,
            then retry operation


CH--Locus

CH returns a code that provides additional information to help locate the
area involved in the failure. This code is particularly useful for hardware
failures (BH=5).

Locus  Description
───────────────────────────────────────────────────────────────────────────
1      Unknown
2      Related to random-access block devices, such as a disk drive
3      Related to Network
4      Related to serial-access character devices, such as a printer
5      Related to random-access memory

Your programs should handle errors by noting the error return from the
original system call and then issuing this system call to get the extended-
error code. If the program does not recognize the extended-error code, it
should respond to the original error code.

This system call is available during Interrupt 24H and may be used to
return network-related errors.


Macro Definition:

get_error  macro
            mov    ah, 59H
            int    21H
            endm


Example:

Since this function request provides such detailed information, a general
example is not practical. User programs can interpret the various codes to
determine what sort of messages or prompts should be displayed, what action
to take, and whether to terminate the program if recovery from the errors
isn't possible.


Create Temporary File (Function 5AH)


Call:

AH = 5AH
CX
    Attribute
DS:DX
    Pointer to pathname, followed by a
    byte of 0, and then by 13 bytes of memory


Return:

Carry set:
AX
    2 = File not found
    3 = Path not found
    4 = Too many open files
    5 = Access denied
Carry not set:
AX
    Handle


Comments:

Function 5AH creates a file with a unique name. DX must contain the offset
(from the segment address in DS) of an ASCIZ string that specifies a
pathname and 13 bytes of memory (to hold the filename). CX must contain
the attribute to be assigned to the file, as described in Section 1.5.5,
"File Attributes," earlier in this chapter.

MS-DOS creates a unique filename and appends it to the pathname pointed
to by DS:DX, creates the file and opens it in compatibility mode, then
returns the file handle in AX. A program that needs a temporary file should
use this function request to avoid name conflicts.

When the creating process exits, MS-DOS does not automatically delete
a file created with Function 5AH. When you no longer need the file you
should delete it.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
2        File is invalid or doesn't exist
3        Directory pointed to by DS:DX is invalid or doesn't exist
4        Too many open files (no handle available)
5        Access denied


Macro Definition:

create_temp macro  pathname,attrib
            mov    cx,attrib
            mov    dx,offset pathname
            mov    ah,5AH
            int    21H
            endm


Example:

The following program creates a temporary file in the directory named
\wp\docs, copies a file named textfile.asc that is in the current directory
into the temporary file, and then closes both files.

stdout   equ       1
;
file     db       "TEXTFILE.ASC",0
path     db       "\WP\DOCS",0
temp     db        13 dup (0)
open_msg db       " opened.",0DH,0AH
crl_msg  db       " created.",0DH,0AH
rd_msg   db       " read into buffer.",0DH,0AH
wr_msg   db       "Buffer written to "
cl_msg   db       "Files closed.",0DH,0AH
crlf     db       0DH,0AH
handle1  dw        ?
handle2  dw        ?
buffer   db        512 dup (?)
;
begin:   open_handle file,0               ;see Function 3DH
            jc         open_error            ;routine not shown
            mov        handle1,ax            ;save handle
            write_handle stdout,file,12      ;see Function 40H
            jc         write_error           ;routine not shown
            write_handle stdout,open_msg,10  ;see Function 40H
            jc         write_error           ;routine not shown
            create_temp path,0               ;THIS FUNCTION
            jc         create_error          ;routine not shown
            mov        handle2,ax            ;save handle
            write_handle stdout,path,8       ;see Function 40H
            jc         write_error           ;routine not shown
            display_char "
            write_handle stdout,temp,12      ;see Function 40H
            jc         write_error           ;routine not shown
            write_handle stdout,crl_msg,11   ;See Function 40H
            jc         write_error           ;routine not shown
            read_handle handle1,buffer,512   ;see Function 3FH
            jc        read_error             ;routine not shown
            write_handle stdout,file,12      ;see Function 40H
            jc        write_error            ;routine not shown
            write_handle stdout,rd_msg,20    ;see Function 40H
            jc        write_error            ;routine not shown
            write_handle handle2,buffer,512  ;see Function 40H
            jc        write_error            ;routine not shown
            write_handle stdout,wr_msg,18    ;see Function 40H
            jc         write_error           ;routine not shown
            write_handle stdout,temp,12      ;see Function 40H
            jc         write_error           ;routine not shown
            write_handle stdout,crlf,2       ;see Function 40H
            jc        write_error            ;routine not shown
            close_handle handle1             ;see Function 3EH
            jc        close_error            ;routine not shown
            close_handle handle2             ;see Function 3EH
            jc        close_error            ;routine not shown
            write_handle stdout,cl_msg,15    ;see Function 40H
            jc        write_error            ;routine not shown


Create New File (Function 5BH)


Call:

AH = 5BH
CX
    Attribute
DS:DX
    Pointer to pathname


Return:

Carry set:
AX
    2     = File not found
    3     = Path not found
    4     = Too many open files
    5     = Access denied
    80     = File already exists
Carry not set:
AX
    Handle


Comments:

Function 5BH creates a new file. DX must contain the offset (from the
segment address in DS) of an ASCIZ string that specifies a pathname.
CX contains the attribute to be assigned to the file, as described in
Section 1.5.5, "File Attributes."

If there is no existing file with the same filename, MS-DOS creates
the file, opens it in compatibility mode, and returns the file handle
in AX.

This function request fails if the specified file exists, unlike
Function 3CH (Create Handle), which, under the same circumstances,
truncates the file to a length of 0. In a multitasking system, the
existence of a file is used as a semaphore; you can use this system
call as a test-and-set semaphore.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
2        File is invalid or doesn't exist

3        Directory pointed to by DS:DX is invalid or doesn't exist

4        No free handles are available in the current process,
            or internal system tables are full

5        Access denied

80       File with the same specification pointed to by DS:DX
            already exists


Macro Definition:

create_new macro  pathname,attrib
            mov    cx, attrib
            mov    dx, offset pathname
            mov    ah, 5BH
            int    21H
            endm


Example:

The following program attempts to create a new file named report.asm in
the current directory. If the file already exists, the program displays an
error message and returns to MS-DOS. If the file doesn't exist and there
are no other errors, the program saves the handle and continues processing.

err_msg  db       "FILE ALREADY EXISTS",0DH,0AH,"$"
path     db       "report.asm",0
handle   dw        ?
;
begin:    create_new path,0             ;THIS FUNCTION
            jnc        continue           ;further processing
            cmp        ax,80              ;file already exist?
            jne        error              ;routine not shown
            display    err_msg            ;see Function 09H
            jmp        return             ;return to MS-DOS
continue: mov        handle,ax          ;save handle
;
;         (further processing here)


Lock (Function 5CH, Code 00H)


Call:

AH = 5CH
AL = 00H
BX
    Handle
CX:DX
    Offset of region to be locked
SI:DI
    Length of region to be locked


Return:

Carry set:
AX
    1      = Invalid function code
    6      = Invalid handle
    33      = Lock violation
    36      = Sharing buffer exceeded
Carry not set:
    No error


Comments:

Function 5CH, Code 00H, denies all access (read or write) by any other
process to the specified region of the file. BX must contain the handle of
the file that contains the region to be locked. CX:DX (a four-byte integer)
must contain the offset in the file of the beginning of the region. SI:DI
(a four-byte integer) must contain the length of the region.

If another process attempts to use (read or write) a locked region,
MS-DOS retries three times; if the retries fail, MS-DOS issues Interrupt
24H for the requesting process. You can change the number of retries with
Function 44H, Code 0BH (IOCtl Retry).

The locked region can be anywhere in the file. For instance, locking
beyond the end of the file is not an error. A region should be locked for
only a brief period, so if it is locked for more than ten seconds you
should consider it to be an error.

Function 45H (Duplicate File Handle) and Function 46H (Force Duplicate
File Handle) duplicate access to any locked region. Passing an open file to
a child process with Function 4BH, Code 00H (Load and Execute Program) does
not duplicate access to locked regions.

───────────────────────────────────────────────────────────────────────────
Warning
    If a program closes a file that contains a locked region or terminates
    with an open file that contains a locked region, the result is undefined.
───────────────────────────────────────────────────────────────────────────

Programs that might be terminated by Interrupt 23H (CONTROL-C Handler
Address) or Interrupt 24H (Critical-Error-Handler Address) should trap
these interrupts and unlock any locked regions before exiting.

Programs should not rely on being denied access to a locked region.
A program can determine the status of a region (locked or unlocked)
by attempting to lock the region and examining the error code.

If there is an error, the carry flag (CF) is set and the error code is
returned in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        File sharing must be loaded to use this function request.

6        The handle in BX is not a valid, open handle.

33       All or part of the specified region is already locked.

36       There is no more room for lock entries in the buffer. Refer to
            the share command in the MS-DOS User's Reference for information
            on allocating more lock entries.


Macro Definition:

lock  macro  handle,start,bytes
        mov    bx, handle
        mov    cx, word ptr start
        mov    dx, word ptr start+2
        mov    si, word ptr bytes
        mov    di, word ptr bytes+2
        mov    al, 0
        mov    ah, 5CH
        int    21H
        endm


Example:

The following program opens a file named finalrpt in "Deny None" mode and
locks two portions of it: the first 128 bytes and bytes 1024 through 5119.
After some (unspecified) processing, it unlocks the same portions and
closes the file.

stdout    equ        1
;
start1    dd         0
lgth1     dd         128
start2    dd         1023
lgth2     dd         4096
file      db        "FINALRPT",0
op_msg    db        " opened.",0DH,0AH
11_msg    db        "First 128 bytes locked.",0DH,0AH
12_msg    db        "Bytes 1024-5119 locked.",0DH,0AH
u1_msg    db        "First 128 bytes unlocked.",0DH,0AH
u2_msg    db        "Bytes 1024-5119 unlocked.",0DH,0AH
cl_msg    db        " closed.:,0DH,0AH
handle    dw         ?
;
begin:    open_handle file,01000010b     ;see Function 3DH
            jc         open_error          ;routine not shown
            write_handle stdout,file,8     ;see Function 40H
            jc         write_error         ;routine not shown
            write_handle stdout,op_msg,10  ;see Function 40H
            jc         write_error         ;routine not shown
            mov        handle,ax           ;save handle
            lock       handle,start1,lgth1 ;THIS FUNCTION
            jc         lock_error          ;routine not shown
            write_handle stdout,11_msg,25  ;see Function 40H
            jc         write_error         ;routine not shown
            lock       handle,start2,lgth2 ;THIS FUNCTION
            jc         lock_error          ;routine not shown
            write_handle stdout,12_msg,25  ;see Function 40H
            jc         write_error         ;routine not shown
;
; ( Further processing here )
;
            unlock     handle,start1,lgth1 ;See Function 5C01H
            jc         unlock_error        ;routine not shown
            write_handle stdout,ul_msg,27  ;see Function 40H
            jc         write_error         ;routine not shown
            unlock     handle,start2,lgth2 ;See Function 5C01H
            jc         unlock_error        ;routine not shown
            write_handle stdout,u2_msg,27  ;See Function 40H
            jc         write_error         ;routine not shown
            close_handle handle            ;See Function 3EH
            jc         close_error         ;routine not shown
            write_handle stdout,file,8     ;see Function 40H
            jc         write_error         ;routine not shown
            write_handle stdout,cl_msg,10  ;see Function 40H
            jc         write_error         ;routine not shown


Unlock (Function 5CH, Code 01H)


Call:

AH = 5CH
AL = 01H
BX
    Handle
CX:DX
    Offset of area to be unlocked
SI:DI
    Length of area to be unlocked


Return:

Carry set:
AX
    1      = Invalid function code
    6      = Invalid handle
    33      = Lock violation
    36      = Sharing buffer exceeded
Carry not set:
    No error


Comments:

Function 5CH, Code 01H, unlocks a region previously locked by the same
process. BX must contain the handle of the file that contains the region
to be unlocked. CX:DX (a four-byte integer) must contain the offset in
the file of the beginning of the region. SI:DI (a four-byte integer) must
contain the length of the region. The offset and length must be exactly
the same as the offset and length specified in the previous Function 5CH,
Code 00H (Lock).

The description of Function 5CH, Code 00H (Lock) describes how to use
locked regions.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        File sharing must be loaded to use this function request.

6        The handle in BX is not a valid, open handle.

33       The region specified is not identical to one that was
            previously locked by the same process.

36       There is no more room for lock entries in the buffer. Refer
            to the share command in the MS-DOS User's Reference for
            information on allocating more lock entries.

You should issue Function 59H (Get Extended Error) to list the possible
errors returned by this function.


Macro Definition:

unlock  macro  handle,start,bytes
        mov    bx, handle
        mov    cx, word ptr start
        mov    dx, word ptr start+2
        mov    si, word ptr bytes
        mov    di, word ptr bytes+2
        mov    al, 1
        mov    ah, 5CH
        int    21H
        endm


Example:

The following program opens a file named finalrpt in "Deny None" mode and
locks two portions of it: the first 128 bytes and bytes 1024 through 5119.
After some (unspecified) processing, it unlocks the same portions and
closes the file.

stdout    equ        1
;
start1    dd         0
lgth1     dd         128
start2    dd         1023
lgth2     dd         4096
file      db        "FINALRPT",0
op_msg    db        " opened.",0DH,0AH
11_msg    db        "First 128 bytes locked.",0DH,0AH
12_msg    db        "Bytes 1024-5119 locked.",0DH,0AH
u1_msg    db        "First 128 bytes unlocked.",0DH,0AH
u2_msg    db        "Bytes 1024-5119 unlocked.",0DH,0AH
cl_msg    db        " closed.",0DH,0AH
handle    dw         ?
;
begin:    open_handle file,01000010b     ;see Function 3DH
            jc         open_error          ;routine not shown
            write_handle stdout,file,8     ;see Function 40H
            jc         write_error         ;routine not shown
            write_handle stdout,op_msg,10  ;see Function 40H
            jc         write_error         ;routine not shown
            mov        handle,ax           ;save handle
            lock       handle,start1,lgth1 ;See Function 5C00H
            jc         lock_error          ;routine not shown
            write_handle stdout,11_msg,25  ;see Function 40H
            jc         write_error         ;routine not shown
            lock       handle,start2,lgth2 ;See Function 5C00H
            jc         lock_error          ;routine not shown
            write_handle stdout,12_msg,25  ;see Function 40H
            jc         write_error         ;routine not shown
;
; ( Further processing here )
;
            unlock     handle,start1,lgth1 ;THIS FUNCTION
            jc         unlock_error        ;routine not shown
            write_handle stdout,u1_msg,27  ;see Function 40H
            jc         write_error         ;routine not shown
            unlock     handle,start2,lgth2 ;THIS FUNCTION
            jc         unlock_error        ;routine not shown
            write_handle stdout,u2_msg,27  ;see Function 40H
            jc         write_error         ;routine not shown
            close_handle handle            ;See Function 3EH
            jc         close_error         ;routine not shown
            write_handle stdout,file,8     ;see Function 40H
            jc         write_error         ;routine not shown
            write_handle stdout,cl_msg,10  ;see Function 40H
            jc         write_error         ;routine not shown


Get Machine Name (Function 5EH, Code 00H)


Call:

AH = 5EH
AL = 0
DS:DX
    Pointer to 16-byte buffer


Return:

Carry set:
AX
    1 = Invalid function code
Carry not set:
CX
    Identification number of local
    computer


Comments:

Function 5EH, Code 0, retrieves the net name of the local computer. DX
must contain the offset (to the segment address in DS) of a 16-byte buffer.
Microsoft Networks must be running.

MS-DOS returns the local computer name (a 16-byte ASCIZ string,
padded with blanks) in the buffer pointed to by DS:DX. CX returns the
identification number of the local computer. If the network was never
installed, the CH register returns with zero and the value in the CL
register is invalid.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        Microsoft Networks must be running to use this function request.


Macro Definition:

get_machine_name  macro  buffer
                    mov    dx,offset buffer
                    mov    al,0
                    mov    ah,5EH
                    int    21H
                    endm


Example:

The following program displays the name of a Microsoft Networks work-
station.

stdout equ 1
;
msg        db   "Netname: "
mac_name   db   16 dup (?),0DH,0AH
;
begin:    get_machine_name  mac_name        ;THIS FUNCTION
            jc                name_error      ;routine not shown
            write_handle      stdout,msg,27   ;see Function 40H
            jc                write_error     ;routine not shown


Printer Setup (Function 5EH, Code 02H)


Call:

AH = 5EH
AL = 02H
BX
    Assign-list index
CX
    Length of setup string
DS:SI
    Pointer to setup string


Return:

Carry set:
AX
    1 = Invalid function code
Carry not set:
    No error


Comments:

Function 5EH, Code 02H, defines a string of control characters that MS-DOS
adds to the beginning of each file sent to the network printer. BX must
contain the index into the assign list that identifies the printer (entry 0
is the first entry). CX must contain the length of the string. SI must
contain the offset (to the segment address in DS) of the string itself.
Microsoft Networks must be running.

MS-DOS adds the setup string to the beginning of each file sent to the
printer, which is specified by the assign-list index in BX. This function
request lets each program that shares a printer have its own printer
configuration. You can use Function 5F02H (Get Assign-List Entry) to
determine which entry in the assign list refers to the printer.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        Microsoft Networks must be running to use this function request.


Macro Definition:

printer_setup  macro  index,lgth,string
                mov    bx, index
                mov    cx, lgth
                mov    dx, offset string
                mov    al, 2
                mov    ah, 5EH
                int    21H
                endm


Example:

The following program defines a printer-setup string that consists of
the control character to print expanded type on Epson-compatible printers.
The printer cancels this mode at the first carriage return, so the effect
is to print the first line of each file sent to the network printer as a
title in expanded characters. The setup string is one character. This
example assumes that the printer is the entry number 3 (the fourth entry)
in the assign list. Use Function 5F02H (Get Assign-List Entry) to determine
this value.

setup     db   0EH
;
begin:    printer_setup 3,1,setup       ;THIS FUNCTION
            jc            error           ;routine not shown


Get Assign-List Entry (Function 5FH, Code 02H)


Call:

AH = 5FH
AL = 02H
BX
    Assign-list index
DS:SI
    Pointer to buffer for local name
ES:DI
    Pointer to buffer for remote name


Return:

Carry set:
AX
    1 = Invalid function code
    18 = No more files
Carry not set:
BL
    3 = Printer
    4 = Drive
CX
    Stored user value


Comments:

Function 5FH, Code 02H, retrieves the specified entry from the network list
of assignments. BX must contain the assign-list index (entry 0 is the first
entry). SI must contain the offset (to the segment address in DS) of a 16-
byte buffer for the local name. DI must contain the offset (to the segment
address in ES) of a 128-byte buffer for the remote name. Microsoft Networks
must be running.

MS-DOS puts the local name in the buffer pointed to by DS:SI and the
remote name in the buffer pointed to by ES:DI. The local name can be a null
ASCIZ string. BL returns 3 if the local device is a printer or 4 if the
local device is a drive. CX returns the stored user value set with
Function 5F03H (Make Assign-List Entry). The contents of the assign list
can change between calls.

You can use this function request to retrieve any entry, or to make a
copy of the complete list by stepping through the table. To detect the end
of the assign list, check for error code 18 (no more files), as you would
when stepping through a directory by using Functions 4EH (Find First File)
and 4FH (Find Next File).

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        Microsoft Networks must be running to use this function request.

18       The index passed in BX is greater than the number of entries
            in the assign list.


Macro Definition:

get_list  macro  index,local,remote
            mov    bx, index
            mov    si, offset local
            mov    di, offset remote
            mov    al,2
            mov    ah, 5FH
            int    21H
            endm


Example:

The following program displays the assign list on a Microsoft Networks
workstation, showing the local name, remote name, and device type (drive
or printer) for each entry.

stdout    equ        1
printer   equ        3
;
local_nm  db         16 dup (?),2 dup (20h)
remote_nm db         128 dup (?),2 dup (20h)
header    db        "Local name",8 dup (20h)
            db        "Remote name",7 dup (20h)
            db        "Device Type"
crlf      db         0dh,0ah,0dh,0ah
drive_msg db        "drive"
print_msg db        "printer"
index     dw         ?
;
begin:    write_handle stdout,header,51       ;see Function 40H
            jc         write_error              ;routine not shown
            mov        index,0                  ;assign list index
ck_list:  get_list   index,local_nm,remote_nm ;THIS FUNCTION
            jnc        got_one                  ;got an entry
error:    cmp        ax,18
            je         last_one                 ;yes
            jmp        error                    ;routine not shown
got_one:  push       bx                       ;save device type
            write_handle  stdout,local_nm,148   ;see Function 40H
            jc         write_error              ;routine not shown
            pop        bx                       ;get device type
            cmp        bl,printer               ;is it a printer?
            je         prntr                    ;yes
            write_handle stdout,drive_msg,5     ;see Function 40H
            jc         write_error              ;routine not shown
            jmp        get_next                 ;finish message
prntr:    write_handle stdout,print_msg,7     ;see Function 40H
            jc         write_error              ;routine not shown
get_next: write_handle stdout,crlf,2          ;see Function 40H
            jc         write_error              ;routine not shown
            inc        index                    ;bump index
            jmp        ck_list                  ;get next entry
last_one: write_handle stdout,crlf,4          ;see Function 40H
            jc         write_error              ;routine not shown
;


Make Assign-List Entry (Function 5FH, Code 03H)


Call:

AH = 5FH
AL = 03H
BL
    3 = Printer
    4 = Drive
CX
    User value
DS:SI
    Pointer to name of source device
ES:DI
    Pointer to name of destination
    device


Return:

Carry set:
AX
    1 = Invalid function code
    5 = Access denied
    3 = Path not found
    8 = Insufficient memory
    (Other errors particular to the
    network may occur.)
Carry not set:
    No error


Comments:

Function 5FH, Code 03H, redirects a printer or disk drive (source device)
to a network directory (destination device). BL must contain 3 if the
source device is a printer or 4 if it is a disk drive. SI must contain
the offset (to the segment address in DS) of an ASCIZ string that specifies
the name of the printer, or a drive letter followed by a colon, or a null
string (one byte of 00H). DI must contain the offset (to the segment
address in ES) of an ASCIZ string that specifies the name of a network
directory. CX contains a user-specified 16-bit value that MS-DOS maintains.
Microsoft Networks must be running.

The destination string must be an ASCIZ string of the following form:

machine-name pathname 00H password 00H

where:

Machine-name is the net name of the server that contains the network
directory;

Pathname is the alias of the network directory (not the directory
path) to which the source device is to be redirected;

00H is a null byte; and

Password is the password for access to the network directory. If no
password is specified, both null bytes must immediately follow the
pathname.

If BL=3, the source string must be PRN, LPT1, LPT2, or LPT3. This
function buffers and sends all output for the named printer to the remote-
printer spooler named in the destination string.

If BL=4, the source string can be either a drive letter followed by a
colon, or a null string. If the source string contains a valid drive letter
and colon, this call redirects all subsequent drive-letter references to
the network directory named in the destination string. If the source string
is a null string, MS-DOS attempts to grant access to the network directory
with the specified password.

The maximum length of the destination string is 128 bytes. You can
retrieve the value in CX by using Function 5FH, Code 02H (Get Assign-List
Entry).

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        Microsoft Networks must be running to use this function request;
            the value in BX is not 1 to 4, the source string is in the wrong
            format; the destination string is in the wrong format; or the
            source device is already redirected.

3        The network directory path is invalid or doesn't exist.

5        The network directory/password combination is not valid. This
            does not mean that the password itself was invalid; the directory
            might not exist on the server.

8        There is not enough memory for string substitutions.


Macro Definition:

redir macro  device,value,source,destination
        mov    bl, device
        mov    cx, value
        mov    si, offset source
        mov    es, seg destination
        mov    di, offset destination
        mov    al, 03H
        mov    ah, 5FH
        int    21H
        endm


Example:

The following program redirects two drives and a printer from a workstation
to a server named harold. It assumes the machine name, directory names,
and driver letters shown:

Local drive     Netname
or printer      on server    Password
E:              WORD         none
F:              COMM         fred
PRN:            PRINTER      quick

printer   equ  3
drive     equ  4
;
local_1   db  "e:",0
local_2   db  "f:",0
local_3   db  "prn",0
remote_1  db  "\harold\word",0,0
remote_2  db  "\harold\comm",0,"fred",0
remote_3  db  "\harold\printer",0,"quick",0
;
begin:    redir  local_1,remote_1,drive,0     ;THIS FUNCTION
            jc     error                        ;routine not shown
            redir  local_2,remote_2,drive,0     ;THIS FUNCTION
            jc     error                        ;routine not shown
            redir  local_3,remote_3,printer,0   ;THIS FUNCTION
            jc     error                        ;routine not shown


Cancel Assign-List Entry (Function 5FH, Code 04H)


Call:

AH = 5FH
AL = 04H
DS:SI
    Pointer to name of source device


Return:

Carry set:
AX
    1      = Invalid function code
    15      = Redirection paused on server
    (Other errors particular to the network
    may occur.)
Carry not set:
    No error


Comments:

Function 5FH, Code 04H, cancels the redirection of a printer or disk drive
(source device) to a network directory (destination device) made with
Function 5FH, Code 03H (Make Assign-List Entry). SI must contain the offset
(to the segment address in DS) of an ASCIZ string that specifies the name
of the printer or drive whose redirection is to be canceled. Microsoft
Networks must be running.

The ASCIZ string pointed to by DS:SI can contain one of three values:

    ■ The letter of a redirected drive, followed by a colon. Cancels the
        redirection and restores the drive to its physical meaning.

    ■ The name of a redirected printer (PRN, LPT1, LPT2, LPT3, or their
        machine-specific equivalents). Cancels the redirection and restores
        the printer name to its physical meaning.

    ■ A string starting with \\ (2 backslashes). Terminates the connection
        between the local machine and the network directory.

If there is an error, the carry flag (CF) is set and the error code
returns in AX:

Code     Meaning
───────────────────────────────────────────────────────────────────────────
1        Microsoft Networks must be running to use this function request;
            or the ASCIZ string names a nonexistent source device.

15       Disk or printer redirection on the network server is paused.


Macro Definition:

cancel_redir  macro  local
                mov    si, offset local
                mov    al, 4
                mov    ah, 5FH
                int    21H
                endm


Example:

The following program cancels the redirection of drives E and F and the
printer (PRN) of a Microsoft Networks workstation. It assumes that these
local devices were redirected previously.

local_1   db        "e:",0
local_2   db        "f:",0
local_3   db        "prn",0
;
begin:    cancel_redir  local_1    ;THIS FUNCTION
            jc            error      ;routine not shown
            cancel_redir  local_2    ;THIS FUNCTION
            jc            error      ;routine not shown
            cancel_redir  local_3    ;THIS FUNCTION
            jc            error      ;routine not shown


Get PSP (Function 62H)


Call:

AH = 62H


Return:

BX
    Segment address of the Program
    Segment Prefix of the current process


Comments:

Function 62H retrieves the segment address of the currently active process
(the start of the Program Segment Prefix). The address returns in BX.


Macro Definition:

get_psp macro
        mov    ah, 62H
        int    21H
        endm


Example:

The following program displays the segment address of its Program Segment
Prefix (PSP) in hexadecimal.

msg       db       "PSP segment address:  H",0DH,0AH,"$"
;
begin:    get_psp                       ;THIS FUNCTION
            convert   bx,16,msg[21]       ;see end of chapter
            display   msg                 ;see Function 09H


Get Extended Country Information (Function 65H)


Call:

AH = 65H
AL
    Function (minor) code
BX
    Code page (-1 = active CON device)
CX
    Amount of data to return
DX
    Country ID for which information is to be returned
    (-1=default country)
ES:DI
    Address of country information buffer


Return:

1 = Buffer has been filled
2 = File not found


Comments:

Function 65H retrieves standard country information. This information
includes country ID, code page, date and time format, currency symbol,
separators (for thousands, decimals, data list, date and time) currency
format flags, digits in currency, and case-mapping information.

The function code passed in AL may be one of the following:

Code   Description
───────────────────────────────────────────────────────────────────────────
1      Return standard information
2      Return pointer to uppercase table
3      Return pointer to filename uppercase table
4      Return pointer to collating table
5      Reserved (no entry)
6      Return pointer to collating sequence

MS-DOS 3.3 provides more country-dependent information than previous
versions of MS-DOS.  Only the information for the default country is kept
in the kernel.  Country-dependent information for all other countries is
contained in the country.sys file.  The MS-DOS nlsfunc command is used to
access the country-dependent information in country.sys using this call.
If the country code and code page number do not match, or if either is
invalid, error code 2 is returned to AX.  If CX is less than 5, error code
1 is returned.  If the amount of information requested is greater than the
value of CX, only CX bytes are returned and no error is reported.

If AL = 1, the buffer is filled with the following information:

db    1    ;  Information ID
dw    ?    ;  Size (<=38)
dw    ?    ;  Country ID
dw    ?    ;  Code page

If AL = 2, the buffer is filled with the following information:
db    2    ;  Information ID
dd    ?    ;  Double-word pointer to uppercase table

If AL = 4, the buffer is filled with the following information:

db    4    ;  Information ID
dd    ?    ;  Double-word pointer to filename uppercase table

Both of these tables consist of a length field (two bytes) followed by 128
uppercase values for the upper 128 ASCII characters. The following formula
is used to compute the address of an uppercase equivalent in the table:

Address of outchar = inchar - (256-table_len) = table_start

where:

Parameter     Meaning
───────────────────────────────────────────────────────────────────────────
inchar        Character to be generated
table_len     Length of list of uppercase values (two bytes)
table_start   Starting address of uppercase table
outchar       Uppercase value for inchar

If inchar is greater than or equal to (256 - table_len), there is an
uppercase equivalent in the table; otherwise, there is not.

If AL = 6, the buffer is filled with the following information:

db    6    ;  Information ID
dd    ?    ;  Double-word pointer to collating sequence

The table is 258 bytes long. The first word is the length of the table.
The rest of the table is 256 ASCII values in the appropriate order.


Get/Set Global Code Page (Function 66H)


Call:

AH = 66H
AL
    Function (minor) code
BX
    Code page to set (AL = 2)


Return:

Carry set:
AX
    02 = File not found
    65 = Device not selected
Carry not set:
    No error


Comments:

Function 66H gets or sets the code page used by the kernel and all devices.
If no other code page has been set, this function gets the default code
page from DX.  If another code page is set, this function retrieves the
active code page from BX.

The MS-DOS nlsfunc command and country.sys must be on the system if
this function is to be used to change the global code page.

The function code may be one of the following:

Code   Description
───────────────────────────────────────────────────────────────────────────
1      Get code page
2      Set code page

MS-DOS gets the new code page from the country.sys file. Devices must
be prepared for code page switching before a code page can be selected.
To prepare a device, a device driver that supports code page switching
must be installed by using the device command in the config.sys file.
The user must also use the prepare keyword with the MS-DOS mode command
to prepare the device for code page switching.

The code page selected must be compatible with the country code specified
in the config.sys file. If MS-DOS cannot read country.sys or other
specified country information file, error code 02 is returned to AX.


Set Handle Count (Function 67H)


Call:

AH = 67H
BX
    Number of allowed handles


Return:

Carry set:
AX
Carry not set:
    No error


Comments:

Function 67H increases or decreases the number of files a program can
have open at one time. The maximum number of files handles is 64K. If less
than 20 are specified, the minimum handle number, 20, is assumed. If this
call is used to reduce the number of allowed handles, the new limit does
not take affect until any handles above the new limit are closed.

The user should use Call 4AH (Set Block) to allocate memory for the
extended handle list if BX is greater than 255. The maximum number for
the value of the config.sys command files is 255.


Commit File (Function 68H)


Call:

AH = 68H
BX
    File handle


Return:

Carry set:
AX = error
Carry not set
    No error


Comments:

Function 68H flushes all buffered data for a file without closing it.
Using this call is more efficient than using the traditional close-open
sequence, and is more effective for network environments. This call makes
sure that the disk image of a file is current.

; Macro Definitions for MS-DOS System Call Examples
;
;*******************
; Interrupts
;*******************
;                                Interrupt 25H
ABS_DISK_READ  macro  disk,buffer,num_sectors,first_sector
        mov    al,disk
        mov    bx,offset buffer
        mov    cx,num_sectors
        mov    dx,first_sector
        int    25H
        popf
        endm

;                                Interrupt 26H
ABS_DISK_WRITE  macro  disk,buffer,num_sectors,first_sector
        mov    al,disk
        mov    bx,offset buffer
        mov    cx,num_sectors
        mov    dx,first_sector
        int    26H
        popf
        endm

;                                Interrupt 27H
STAY_RESIDENT  macro  last_instruc
        mov    dx,offset last_instruc
        inc    dx
        int    27H
        endm
;
;
;*******************
; Function Requests
;*******************
;                                Function Request 00H
TERMINATE_PROGRAM  macro
        xor    ah,ah
        int    21H
        endm

;                                Function Request 01H
READ_KBD_AND_ECHO  macro
        mov    ah,01H
        int    21H
        endm
;                                Function Request 02H
DISPLAY_CHAR  macro  character
        mov    dl,character
        mov    ah,02H
        int    21H
        endm

;                                Function Request 03H
AUX_INPUT    macro
        mov     ah,03H
        int     21H
        endm

;                                Function Request 04H
AUX_OUTPUT  macro
        mov    ah,04H
        int    21H
        endm
;                                Function Request 05H
PRINT_CHAR  macro  character
        mov    dl,character
        mov    ah,05H
        int    21H
        endm

;                                Function Request 06H
DIR_CONSOLE_IO  macro  switch
        mov    dl,switch
        mov    ah,06H
        int    21H
        endm
;                                Function Request 07H
DIR_CONSOLE_INPUT  macro
        mov    ah,07H
        int    21H
        endm

;                                Function Request 08H
READ_KBD  macro
        mov    ah,08H
        int    21H
        endm
;                                Function Request 09H
DISPLAY  macro  string
        mov    dx,offset string
        mov    ah,09H
        int    21H
        endm

;                                Function Request 0AH
GET_STRING  macro  limit,string
        mov    dx,offset string
        mov    string,limit
        mov    ah,0AH
        int    21H
        endm
;                                Function Request 0BH
CHECK_KBD_STATUS  macro
        mov    ah,0BH
        int    21H
        endm

;                                Function Request 0CH
FLUSH_AND_READ_KBD  macro  switch
        mov    al,switch
        mov    ah,0CH
        int    21H
        endm

;                                Function Request 0DH
RESET_DISK  macro
        mov    ah,0DH
        int    21H
        endm
;                                Function Request 0EH
SELECT_DISK  macro  disk
        mov    dl,disk[-65]
        mov    ah,0EH
        int    21H
        endm

;                                Function Request 0FH
OPEN  macro  fcb
        mov    dx,offset fcb
        mov    ah,0FH
        int    21H
        endm
;                                Function Request 10H
CLOSE  macro  fcb
        mov    dx,offset fcb
        mov    ah,10H
        int    21H
        endm

;                                Function Request 11H
SEARCH_FIRST  macro  fcb
        mov    dx,offset fcb
        mov    ah,11H
        int    21H
        endm
;                                Function Request 12H
SEARCH_NEXT  macro  fcb
        mov    dx,offset fcb
        mov    ah,12H
        int    21H
        endm

;                                Function Request 13H
DELETE  macro  fcb
        mov    dx,offset fcb
        mov    ah,13H
        int    21H
        endm

;                                Function Request 14H
READ_SEQ  macro  fcb
        mov    dx,offset fcb
        mov    ah,14H
        int    21H
        endm
;                                Function Request 15H
WRITE_SEQ  macro  fcb
        mov    dx,offset fcb
        mov    ah,15H
        int    21H
        endm

;                                Function Request 16H
CREATE  macro  fcb
        mov    dx,offset fcb
        mov    ah,16H
        int    21H
        endm
;                                Function Request 17H
RENAME  macro  fcb,newname
        mov    dx,offset fcb
        mov    ah,17H
        int    21H
        endm

;                                Function Request 19H
CURRENT_DISK  macro
        mov    ah,19H
        int    21H
        endm
;                                Function Request 1AH
SET_DTA  macro  buffer
        mov    dx,offset buffer
        mov    ah,1AH
        endm

;                                Function Request 1BH
DEF_DRIVE_DATA  macro
        mov    ah,1BH
        int    21H
        endm
;                                Function Request 1CH
DRIVE_DATA  macro  drive
        mov    dl,drive
        mov    ah,1CH
        int    21H
        endm

;                                Function Request 21H
READ_RAN  macro  fcb
        mov    dx,offset fcb
        mov    ah,21H
        int    21H
        endm

;                                Function Request 22H
WRITE_RAN  macro  fcb
        mov    dx,offset fcb
        mov    ah,22H
        int    21H
        endm
;                                Function Request 23H
FILE_SIZE  macro  fcb
        mov    dx,offset fcb
        mov    ah,23H
        int    21H
        endm

;                                Function Request 24H
SET_RELATIVE_RECORD  macro  fcb
        mov    dx,offset fcb
        mov    ah,24H
        int    21H
        endm
;                                Function Request 25H
SET_VECTOR  macro  interrupt,handler_start
        mov    al,interrupt
        mov    dx,offset handler_start
        mov    ah,25H
        int    21H
        endm

;                                Function Request 26H
CREATE_PSP  macro  seg_addr
        mov    dx,offset seg_addr
        mov    ah,26H
        int    21H
        endm
;                                 Function Request 27H
RAN_BLOCK_READ  macro  fcb,count,rec_size
        mov    dx,offset fcb
        mov    cx,count
        mov    word ptr fcb[14],rec_size
        mov    ah,27H
        int    21H
        endm

;                                 Function Request 28H
RAN_BLOCK_WRITE  macro  fcb,count,rec_size
        mov    dx,offset fcb
        mov    cx,count
        mov    word ptr fcb[14],rec_size
        mov    ah,28H
        int    21H
        endm

;                                Function Request 29H
PARSE  macro  string,fcb
        mov    si,offset string
        mov    di,offset fcb
        push   es
        push   ds
        pop    es
        mov    al,0FH
        mov    ah,29H
        int    21H
        pop    es
        endm

;                                 Function Request 2AH
GET_DATE  macro
        mov    ah,2AH
        int    21H
        endm

;                                 Function Request 2BH
SET_DATE  macro  year,month,day
        mov    cx,year
        mov    dh,month
        mov    dl,day
        mov    ah,2BH
        int    21H
        endm

;                                 Function Request 2CH
GET_TIME  macro
        mov    ah,2CH
        int    21H
        endm

;                                 Function Request 2DH
SET_TIME  macro  hour,minutes,seconds,hundredths
        mov    ch,hour
        mov    cl,minutes
        mov    dh,seconds
        mov    dl,hundredths
        mov    ah,2DH
        int    21H
        endm

;                                 Function Request 2EH
VERIFY  macro  switch
        mov    al,switch
        mov    ah,2EH
        int    21H
        endm

;                                 Function Request 2FH
GET_DTA  macro
        mov    ah,2FH
        int    21H
        endm

;                                 Function Request 30H
GET_VERSION  macro
        mov    ah,30H
        int    21H
        endm

;                                 Function Request 31H
KEEP_PROCESS  macro  return_code,last_byte
        mov    al,return_code
        mov    dx,offset last_byte
        mov    cl,4
        shr    dx,cl
        inc    dx
        mov    ah,31H
        int    21H
        endm

;                                 Function Request 33H
CTRL_C_CK  macro  action,state
        mov    al,action
        mov    dl,state
        mov    ah,33H
        int    21H
        endm

;                                 Function Request 35H
GET_VECTOR  macro  interrupt
        mov    al,interrupt
        mov    ah,35H
        int    21H
        endm

;                                 Function Request 36H
GET_DISK_SPACE  macro  drive
        mov    dl,drive
        mov    ah,36H
        int    21H
        endm

;                                 Function Request 38H
GET_COUNTRY  macro  country,buffer
                local  gc_01
                mov    dx,offset buffer
                mov    ax,country
                cmp    ax,0FFH
                jl     gc_01
                mov    al,0ffh
                mov    bx,country
gc_01:       mov    ah,38H
                int    21H
                endm

;                                 Function Request 38H
SET_COUNTRY  macro  country
                local  sc_01
                mov    dx,0FFFFH
                mov    ax,country
                cmp    ax,0FFH
                jl     sc_01
                mov    al,0ffh
                mov    bx,country
sc_01:       mov    ah,38H
                int    21H
                endm

;                                 Function Request 39H
MAKE_DIR  macro  path
        mov    dx,offset path
        mov    ah,39H
        int    21H
        endm

;                                 Function Request 3AH
REM_DIR  macro  path
        mov    dx,offset path
        mov    ah,3AH
        int    21H
        endm

;                                 Function Request 3BH
CHANGE_DIR  macro  path
        mov    dx,offset path
        mov    ah,3BH
        int    21H
        endm

;                                 Function Request 3CH
CREATE_HANDLE  macro  path,attrib
        mov    dx,offset path
        mov    cx,attrib
        mov    ah,3CH
        int    21H
        endm

;                                 Function Request 3DH
OPEN_HANDLE  macro  path,access
        mov    dx,offset path
        mov    al,access
        mov    ah,3DH
        int    21H
        endm

;                                 Function Request 3EH
CLOSE_HANDLE  macro  handle
        mov    bx,handle
        mov    ah,3EH
        int    21H
        endm

;                                 Function Request 3FH
READ_HANDLE  macro  handle,buffer,bytes
        mov    bx,handle
        mov    dx,offset buffer
        mov    cx,bytes
        mov    ah,3FH
        int    21H
        endm

;                                 Function Request 40H
WRITE_HANDLE  macro  handle,buffer,bytes
        mov    bx,handle
        mov    dx,offset buffer
        mov    cx,bytes
        mov    ah,40H
        int    21H
        endm

;                                 Function Request 41H
DELETE_ENTRY  macro  path
        mov    dx,offset path
        mov    ah,41H
        int    21H
        endm

;                                 Function Request 42H
MOVE_PTR  macro  handle,high,low,method
        mov    bx,handle
        mov    cx,high
        mov    dx,low
        mov    al,method
        mov    ah,42H
        int    21H
        endm

;                                 Function Request 43H
CHANGE_MODE  macro  path,action,attrib
        mov    dx,offset path
        mov    al,action
        mov    cx,attrib
        mov    ah,43H
        int    21H
        endm

;                                 Function Request 4400H,01H
IOCTL_DATA  macro  code,handle
        mov    bx,handle
        mov    al,code
        mov    ah,44H
        int    21H
        endm

;                                 Function Request 4402H,03H
IOCTL_CHAR  macro  code,handle,buffer
        mov    bx,handle
        mov    dx,offset buffer
        mov    al,code
        mov    ah,44H
        int    21H
        endm

;                                 Function Request 4404H,05H
IOCTL_STATUS  macro  code,drive,buffer
        mov    bl,drive
        mov    dx,offset buffer
        mov    al,code
        mov    ah,44H
        int    21H
        endm

;                                 Function Request 4406H,07H
IOCTL_STATUS macro  code,handle
        mov    bx,handle
        mov    al,code
        mov    ah,44H
        int    21H
        endm

;                                 Function Request 4408H
IOCTL_CHANGE  macro  drive
        mov    bl,drive
        mov    al,08H
        mov    ah,44H
        int    21H
        endm

;                                 Function Request 4409H
IOCTL_RBLOCK  macro  drive
        mov    bl,drive
        mov    al,09H
        mov    ah,44H
        int    21H
        endm

;                                 Function Request 440AH
IOCTL_RHANDLE  macro  handle
        mov    bx,handle
        mov    al,0AH
        mov    ah,44H
        int    21H
        endm

;                                 Function Request 440BH
IOCTL_RETRY  macro  retries,wait
        mov    dx,retries
        mov    cx,wait
        mov    al,0BH
        mov    ah,44H
        int    21H
        endm

;                                 Function Request 440CH
GENERIC_IOCTL_HANDLES macro handle,function,category,buffer
        mov    ch,05H
        mov    cl,function
        mov    dx,offset buffer
        mov    bx,handle
        mov    ah,44H
        mov    al,0CH
        int    21H
        endm

;                                 Function Request 440DH
GENERIC_IOCTL_BLOCK macro drive_num,function,category,parm_blk
        mov    ch,08H
        mov    cl,function
        mov    dx,offset parm_blk - 1
        mov    bx,drive_num
        mov    ah,44H
        mov    al,0DH
        int    21H
        endm

;                                 Function Request 440EH
IOCTL_GET_DRIVE_MAP macro   logical_drv
        mov    bx,logical_drv
        mov    ah,44H
        mov    al,0EH
        int    21H
        endm

;                                 Function Request 440FH
IOCTL_SET_DRIVE_MAP macro   logical_drv
        mov    bx,logical_drv
        mov    ah,44H
        mov    al,0FH
        int    21H
        endm

;                                 Function Request 45H
XDUP  macro  handle
        mov    bx,handle
        mov    ah,45H
        int    21H
        endm

;                                 Function Request 46H
XDUP2  macro  handle1,handle2
        mov    bx,handle1
        mov    cx,handle2
        mov    ah,46H
        int    21H
        endm

;                                 Function Request 47H
GET_DIR  macro  drive,buffer
        mov    dl,drive
        mov    si,offset buffer
        mov    ah,47H
        int    21H
        endm

;                                 Function Request 48H
ALLOCATE_MEMORY  macro  bytes
        mov    bx,bytes
        mov    cl,4
        shr    bx,cl
        inc    bx
        mov    ah,48H
        int    21H
        endm

;                                 Function Request 49H
FREE_MEMORY  macro  seg_addr
        mov    ax,seg_addr
        mov    es,ax
        mov    ah,49H
        int    21H
        endm

;                                 Function Request 4AH
SET_BLOCK  macro  last_byte
        mov    bx,offset last_byte
        mov    cl,4
        shr    bx,cl
        add    bx,17
        mov    ah,4AH
        int    21H
        mov     ax,bx
        shl     ax,cl
        dec     ax
        mov     sp,ax
        mov     bp,sp
        endm

;                                 Function Request 4B00H
EXEC macro  path,command,parms
        mov    dx,offset path
        mov    bx,offset parms
        mov    word ptr parms[02h],offset command
        mov    word ptr parms[04h],cs
        mov    word ptr parms[06h],5ch
        mov    word ptr parms[08h],es
        mov    word ptr parms[0ah],6ch
        mov    word ptr parms[0ch],es
        mov    al,0
        mov    ah,4BH
        int    21H
        endm

;                                 Function Request 4B03H
EXEC_OVL  macro  path,parms,seg_addr
        mov    dx,offset path
        mov    bx,offset parms
        mov    parms,seg_addr
        mov    parms[02H],seg_addr
        mov    al,3
        mov    ah,4BH
        int    21H
        endm

;                                 Function Request 4CH
END_PROCESS   macro  return_code
                mov    al,return_code
                mov    ah,4CH
                int    21H
                endm

;                                 Function Request 4DH
RET_CODE macro
        mov    ah,4DH
        int    21H
        endm

;                                 Function Request 4EH
FIND_FIRST_FILE  macro  path,attrib
        mov    dx,offset path
        mov    cx,attrib
        mov    ah,4EH
        int    21H
        endm

;                                 Function Request 4FH
FIND_NEXT_FILE  macro
        mov    ah,4FH
        int    21H
        endm

;                                 Function Request 54H
GET_VERIFY  macro
        mov    ah,54H
        int    21H
        endm

;                                 Function Request 56H
RENAME_FILE  macro  old_path,new_path
        mov    dx,offset old_path
        push   ds
        pop    es
        mov    di,offset new_path
        mov    ah,56H
        int    21H
        endm

;                                 Function Request 57H
GET_SET_DATE_TIME  macro  handle,action,time,date
        mov    bx,handle
        mov    al,action
        mov    cx,word ptr time
        mov    dx,word ptr date
        mov    ah,57H
        int    21H
        endm

;                                 Function Request 58H
ALLOC_STRAT  macro  code,strategy
        mov    bx,strategy
        mov    al,code
        mov    ah,58H
        int    21H
        endm

;                                 Function Request 59H
GET_ERROR  macro
        mov    ah,59
        int    21H
        endm

;                                 Function Request 5AH
CREATE_TEMP  macro  pathname,attrib
        mov    cx,attrib
        mov    dx,offset pathname
        mov    ah,5AH
        int    21H
        endm

;                                 Function Request 5BH
CREATE_NEW  macro  pathname,attrib
        mov    cx,attrib
        mov    dx,offset pathname
        mov    ah,5BH
        int    21H
        endm

;                                 Function Request 5C00H
LOCK        macro  handle,start,bytes
        mov    bx,handle
        mov    cx,word ptr start
        mov    dx,word ptr start+2
        mov    si,word ptr bytes
        mov    di,word ptr bytes+2
        mov    al,0
        mov    ah,5CH
        int    21H
        endm

;                                 Function Request 5C01H
UNLOCK      macro  handle,start,bytes
        mov    bx,handle
        mov    cx,word ptr start
        mov    dx,word ptr start+2
        mov    si,word ptr bytes
        mov    di,word ptr bytes+2
        mov    al,1
        mov    ah,5CH
        int    21H
        endm

;                                 Function Request 5E00H
GET_MACHINE_NAME  macro  buffer
        mov    dx,offset buffer
        mov    al,0
        mov    ah,5EH
        int    21H
        endm

;                                 Function Request 5E02H
PRINTER_SETUP  macro  index,lgth,string
        mov    bx,index
        mov    cx,lgth
        mov    dx,offset string
        mov    al,2
        mov    ah,5EH
        int    21H
        endm

;                                 Function Request 5F02H
GET_LIST    macro  index,local,remote
        mov    bx,index
        mov    si,offset local
        mov    di,offset remote
        mov    al,2
        mov    ah,5FH
        int    21H
        endm

;                                 Function Request 5F03H
REDIR       macro  device,value,source,destination
        mov    bl,device
        mov    cx,value
        mov    si,offset source
        mov    es,seg destination
        mov    di,offset destination
        mov    al,03H
        mov    ah,5FH
        int    21H
        endm

;                                 Function Request 5F04H
CANCEL_REDIR  macro  local
        mov    si,offset local
        mov    al,4
        mov    ah,5FH
        int    21H
        endm

;                                 Function Request 62H
GET_PSP     macro
        mov    ah,62H
        int    21H
        endm
;
;
;*******************
; General
;*******************
;
DISPLAY_ASCIIZ  macro  asciiz_string
        local  search,found_it
        mov    bx,offset asciiz_string

search:
        cmp    byte ptr [bx],0
        je     found_it
        inc    bx
        jmp short search

found_it:
        mov    byte ptr [bx],"$"
        display asciiz_string
        mov    byte ptr [bx],0
        display_char 0DH
        display_char 0AH
        endm

;
MOVE_STRING  macro  source,destination,count
        push   es
        push   ds
        pop    es
        assume es:code
        mov    si,offset source
        mov    di,offset destination
        mov    cx,count
    rep movs   es:destination,source
        assume es:nothing
        pop    es
        endm

;
CONVERT  macro  value,base,destination
        local  table,start
        jmp    start
table  db   "0123456789ABCDEF"

start:
        push   ax
        push   bx
        push   dx
        mov    al,value
        xor    ah,ah
        xor    bx,bx
        div    base
        mov    bl,al
        mov    al,cs:table[bx]
        mov    destination,al
        mov    bl,ah
        mov    al,cs:table[bx]
        mov    destination[1],al
        pop    dx
        pop    bx
        pop    ax
        endm

;
CONVERT_TO_BINARY  macro  string,number,value
        local  ten,start,calc,mult,no_mult
        jmp    start
ten  db     10

start:
        mov    value,0
        xor    cx,cx
        mov    cl,number
        xor    si,si

calc:
        xor    ax,ax
        mov    al,string[si]
        sub    al,48
        cmp    cx,2
        jl     no_mult
        push   cx
        dec    cx

mult:
        mul    cs:ten
        loop   mult
        pop    cx

no_mult:
        add    value,ax
        inc    si
        loop   calc
        endm

;
CONVERT_DATE  macro  dir_entry
        mov    dx,word ptr dir_entry[24]
        mov    cl,5
        shr    dl,cl
        mov    dh,dir_entry[24]
        and    dh,1FH
        xor    cx,cx
        mov    cl,dir_entry[25]
        shr    cl,1
        add    cx,1980
        endm

;
PACK_DATE  macro  date
        local set_bit
;
; On entry: DH=day, DL=month, CX=(year-1980)
;
        sub   cx,1980
        push  cx
        mov   date,dh
        mov   cl,5
        shl   dl,cl
        pop   cx
        jnc   set_bit
        or    cl,80h

set_bit:
        or    date,dl
        rol   cl,1
        mov   date[1],cl
        endm
;



Chapter 2  MS-DOS Device Drivers

───────────────────────────────────────────────────────────────────────────

2.1  Introduction

2.2  Format of a Device Driver

2.3  How to Create a Device Driver

        2.3.1  Device Strategy Routine

        2.3.2  Device Interrupt Routine

2.4  Installing Device Drivers

2.5  Device Headers

        2.5.1  Pointer to Next Device Field

        2.5.2  Attribute Field

        2.5.3  Strategy and Interrupt Routines

        2.5.4  Name Field

2.6  Request Header

        2.6.1  Length of Record

        2.6.2  Unit Code Field

        2.6.3  Command Code Field

        2.6.4  Status Field

2.7  Device Driver Functions

        2.7.1  The Init Function

        2.7.2  The Media Check Function

        2.7.3  The Build BPB Function

        2.7.4  The Read or Write Function

        2.7.5  The Non-destructive Read, No Wait Function

        2.7.6  The Open or Close Function

        2.7.7  The Removable Media Function

        2.7.8  The Status Function

        2.7.9  The Flush Function

        2.7.10 The Generic IOCtl Function

        2.7.11 The Get/Set Logical Drive Map Function

2.8  The Media Descriptor Byte

2.9  Format of a Media Descriptor Table

2.10 The CLOCK Device

2.11 Anatomy of a Device Call

2.12 Two Sample Device Drivers



2.1  Introduction


The io.sys file comprises the "resident" device drivers, which form the
MS-DOS BIOS. These drivers are called upon by MS-DOS to handle input/output
(I/O) requests initiated by application programs.

One of the most powerful features of MS-DOS is the ability to add new
devices such as printers, plotters, and mouse input devices without
rewriting the BIOS. The MS-DOS BIOS is configurable; that is, new drivers
can be added and existing drivers can be preempted. Nonresident, or
installable, device drivers may be easily added at boot time by including
a device command line in the config.sys file.

At boot time, a minimum of five resident device drivers must be present.
These drivers are in a linked list: the header of each one contains a DWORD
pointer to the next. The last driver in the chain has an end-of-list marker
of -1, -1 (all bits on).

Each driver in the chain has two entry points: the strategy entry point
and the interrupt entry point. MS-DOS does not take advantage of the two
entry points: it calls the strategy routine, then immediately calls the
interrupt routine.

The dual entry points will accomodate future multitasking versions of
MS-DOS and MS OS/2 operating systems. In multitasking environments,
I/O must be asynchronous; to accomplish this, the strategy routine will be
called to (internally) queue a request and return quickly. It is then the
responsibility of the interrupt routine to perform the I/O at interrupt
time by getting requests from the internal queue and processing them. When
a request is completed, it is flagged as "done" by the interrupt routine.
MS-DOS periodically scans the list of requests looking for those that are
flagged as done, and "wakes up" the process waiting for the completion
of the request.

When requests are queued in this manner, it is no longer sufficient to
pass I/O information in registers, since many requests may be pending at
any time. Therefore, the MS-DOS device interface uses "packets" to pass
request information. These request packets are of variable size and
format, and are composed of two parts:

    1.  The static request header section, which has the same format for
        all requests

    2.  A section which has information specific to the type of request

A driver is called with a pointer to a packet. In multitasking versions,
this packet will be linked into a global chain of all pending I/O requests
maintained by MS-DOS.

MS-DOS does not implement a global or local queue. Only one request is
pending at any one time. The strategy routine must store the address of
the packet at a fixed location, and the interrupt routine, which is called
immediately after the strategy routine, should process the packet by
completing the request and returning. It is assumed that the request
is completed when the interrupt routine returns.

To make a device driver that sysinit can install, a .bin (core
image) or .exe format file must be created with the device driver header
at the beginning of the file. The link field should be initialized to -1
(sysinit fills it in). Device drivers which are part of the BIOS should
have their headers point to the next device in the list and the last header
should be initialized to -1,-1. The BIOS must be a .bin (core image)
format file.

The .exe format installable device drivers may be used in non-IBM
versions of MS-DOS. On the IBM Personal Computer, the .exe loader is
located in command.com which is not present at the time that installable
devices are being loaded.


2.2  Format of a Device Driver


A device driver is a program segment responsible for communication between
DOS and the system hardware. It has a special header at the beginning
identifying it as a device driver, defining entry points, and describing
various attributes of the device.

───────────────────────────────────────────────────────────────────────────
Note
    For device drivers, the file must not use the ORG 100H (like .com files).
    Because it does not use the Program Segment Prefix (PSP), the device
    driver is simply loaded; therefore, the file must have an origin of zero
    (ORG 0 or no ORG statement).
───────────────────────────────────────────────────────────────────────────

There are two kinds of device drivers:

    ■ Character device drivers

    ■ Block device drivers

Character devices perform serial character I/O. Examples are the console,
communications port and printer. These devices are named (i.e., CON, AUX,
CLOCK, etc.), and programs may open channels (handles or file control
blocks) to do I/O to them.

Block devices include all the disk drives on the system. They can perform
random I/O in structured pieces called blocks (usually the physical sector
size). These devices are not named as the character devices are, and
therefore cannot be opened directly. Instead they have unit numbers and
are identified by drive letters such as A, B, and C.

A single block device driver may be responsible for one or more logically
contiguous disk drives. For example, block device driver ALPHA may be
responsible for drives A, B, C, and D. This means that it has four units
defined (0-3), and therefore, takes up four drive letters. The position of
the driver in the list of all drivers determines which units correspond to
which driver letters. If driver ALPHA is the first block driver in the
device list, and it defines four units (0-3), then they will be A, B, C,
and D. If BETA is the second block driver and defines three units (0-2),
then they will be E, F, and G, and so on. The theoretical limit is 63,
but it should be noted that the device installation code will not allow
the installation of a device if it would result in a drive letter greater
than Z (5AH). All block device drivers present in the standard resident
BIOS will be placed ahead of installable block device drivers in the list.

───────────────────────────────────────────────────────────────────────────
Note
    Because they have only one name, character devices cannot define
    multiple units.
───────────────────────────────────────────────────────────────────────────


2.3  How to Create a Device Driver


To create a device driver that MS-DOS can install, you must create a
binary file (.com or .exe format) with a device header at the beginning of
the file. Note that for device drivers, the code should not be originated
at 100H, but at 0. The device header contains a link field (a pointer to
the next device header) which should be -1, unless there is more than one
device driver in the file. The attribute field and entry points must be
set correctly.

If it is a character device, the name field should be filled in with
the name of that character device. The name can be any legal eight-
character filename. If the name is less than eight characters, it should
be padded out to eight characters with spaces (20H). Note that device
names do not include colons (:). The fact that CON is the same as CON: is a
property of the default MS-DOS command interpreter (command.com) and not of
the device driver or the MS-DOS interface. All character device names are
handled in this way.

MS-DOS always processes installable device drivers before handling the
default devices, so to install a new CON device, simply name the device
CON. Remember to set the standard input device and standard output device
bits in the attribute word on a new CON device. The scan of the device
list stops on the first match, so the installable device driver takes
precedence.

It is not possible to replace the resident disk block device driver
with an installable device driver the same way you can replace the other
device drivers in the BIOS. Block drivers can be used only for devices
not directly supported by the default disk drivers in the io.sys file.

───────────────────────────────────────────────────────────────────────────
Note
    Because MS-DOS can install the driver anywhere in memory, care must be
    taken when making far memory references. You should not expect that your
    driver will always be loaded in the same place every time.
───────────────────────────────────────────────────────────────────────────


2.3.1  Device Strategy Routine

The device strategy routine, which is called by MS-DOS for each device
driver service request, is primarily responsible for queuing these requests
in the order in which they are to be processed by the device interrupt
routine. Such queuing can be a very important performance feature in a
multitasking environment, or where asynchronous I/O is supported. As MS-DOS
does not currently support these facilities, only one request can be
serviced at a time, and this routine is usually very short. In the coding
examples in Section 2.12, "Two Sample Device Drivers," each request is
simply stored in a single pointer area.


2.3.2  Device Interrupt Routine

The device interrupt routine contains the code necessary to process
the service request. It may interface to the hardware, or it may use
ROM BIOS calls. It usually consists of a series of procedures that handle
the specific command codes to be supported as well as some exit and error-
handling routines. See the coding examples in Section 2.12, "Two Sample
Device Drivers."


2.4  Installing Device Drivers


MS-DOS allows new device drivers to be installed dynamically at boot
time. This is accomplished by initialization code in the io.sys file
that reads and processes the config.sys file.

MS-DOS calls upon the device drivers to perform their function in the
following manner:

    1.  MS-DOS makes a FAR call to the strategy entry.

    2.  MS-DOS passes device driver information in a request header to the
        strategy routine.

    3.  MS-DOS makes a FAR call to the interrupt entry.

This calling structure is designed to be easily upgraded to support
any future multitasking environment.


2.5  Device Headers


A device header is required at the beginning of a device driver. A device
header looks like this:


            +--------------------------------------+
            | DWORD Pointer to next device         |
            | (Usually set to -1 if this driver    |
            | is the last or only driver in the    |
            | file)                                |
            +--------------------------------------+
            | WORD Attributes                      |
            +--------------------------------------+
            | WORD Pointer to device strategy      |
            |      entry point                     |
            +--------------------------------------+
            | WORD Pointer to device interrupt     |
            |      entry point                     |
            +--------------------------------------+
            | 8-BYTE Character device name field   |
            | Character devices set a device name. |
            | For block devices the first byte is  |
            | the number of units.                 |
            +--------------------------------------+

                Figure 2.1  Sample Device Header


Note that the device entry points are words. They must be offsets from the
same segment number used to point to this table. For example, if xxx:yyy
points to the start of this table, then xxx:strategy and xxx:interrupt are
the entry points.

The device header fields are described in the following section.


2.5.1  Pointer to Next Device Field

The pointer to the next device header field is a double-word field
(offset followed by segment) that is set by MS-DOS to point at the next
driver in the system list at the time the device driver is loaded. It is
important that this field be set to -1 prior to load (when it is on the
disk as a file) unless there is more than one device driver in the file.
If there is more than one driver in the file, the first word of the
double-word pointer should be the offset of the next driver's device
header.

───────────────────────────────────────────────────────────────────────────
Note
    If there is more than one device driver in the file, the last driver in
    the file must have the pointer to the next device header field set to -1.
───────────────────────────────────────────────────────────────────────────


2.5.2  Attribute Field

The attribute field is used to identify the type of device for which
this driver is responsible. In addition to distinguishing between block
and character devices, these bits are used to give selected character
devices special treatment. (Note that if a bit in the attribute word is
defined only for one type of device, a driver for the other type of device
must set that bit to 0.)


        Table 2.1
        For Character Devices:
╓┌───────────┌───────┌───────────────────────────────────────────────────────╖
        Bit    Value   Meaning
        ──────────────────────────────────────────────────────────────────────
        Bit    Value   Meaning
        ──────────────────────────────────────────────────────────────────────
        0      1       Device is console input (sti) device
        1      1       Device is console output (sto) device
        2      1       Device is nul device
        3      1       Device is clock device
        4-5            Reserved (must be 0)
        6      1       Device supports 3.2 functions
        7-10           Reserved (must be 0)
        11     1       Device understands Open/Close
        12             Reserved (must be 0)
        13     1       Device supports Output Until Busy (OUB)
        14     1       Device supports IOCtl control strings
        15     1       Character device


        Table 2.2
        For Block Devices:
╓┌───────────┌───────┌───────────────────────────────────────────────────────╖
        Bit    Value   Meaning
        ──────────────────────────────────────────────────────────────────────
        Bit    Value   Meaning
        ──────────────────────────────────────────────────────────────────────
        0-5            Reserved (must be 0)

        6      1       Device supports 3.2 functions and Generic IOCtl
                    function calls

        7-10           Reserved (must be 0)

        11     1       Device understands Open/Close/Removable Media

        12             Reserved (must be 0)

        13     1       Device determines the media by examining the FATID byte

        14     1       Device supports IOCtl control strings

        15     0       Block device


For example, assume that you have a new device driver that you want to use
as the standard input and output. In addition to installing the driver,
you must tell MS-DOS that you want the new driver to override the current
standard input and standard output (the CON device). This is accomplished
by setting the attributes to the desired characteristics, so you would set
bits 0 and 1 to 1 (note that they are separate). Similarly, a new CLOCK
device could be installed by setting that attribute. (Refer to Section
2.10, "The Clock Device," in this chapter for more information.)
Although there is a NUL device attribute, the NUL device cannot be
reassigned. This attribute exists so that MS-DOS can determine if the
NUL device is being used.

Bit 13 for block devices affects the operation of the Build BPB (BIOS
Parameter Block) device call. If set, it requires the first sector of the
FAT always to reside in the same place. This bit has a different meaning
on character devices. It indicates that the device implements the Output
Until Busy device call.

The IOCtl bit (bit 14) has meaning on character and block devices. The
IOCtl functions allow data to be sent and received by the device for
its own use (to set baud rate, stop bits, form length, etc.) instead of
passing data over the device channel as a normal read or write does.
The interpretation of the passed information is up to the device but
it must not be treated as normal I/O. This bit tells MS-DOS whether
the device can handle control strings by using the IOCtl system call,
Function 44H.

If a driver cannot process control strings, it should initially set
this bit to 0. This tells MS-DOS to return an error if an attempt is made
(via Function 44H) to send or receive control strings to this device. A
device which can process control strings should initialize the IOCtl bit
to 1. For drivers of this type, MS-DOS will make calls to the IOCtl input
and output device functions to send and receive IOCtl strings.

The IOCtl functions allow data to be sent and received by the device
for its own use (for example, to set baud rate, stop bits, and form
length), instead of passing data over the device channel as does a normal
read or write. The interpretation of the passed information is up to the
device, but it must not be treated as a normal I/O request.

The Open/Close/Removable Media bit (bit 11) signals to MS-DOS 3.x
and later versions whether this driver supports additional MS-DOS 3.x
functionality. To support these old drivers, it is necessary to detect
them. This bit was reserved in MS-DOS 2.x, and is 0. All new devices
should support the Open, Close, and Removable Media calls and set this
bit to 1. Since MS-DOS 2.x never makes these calls, the driver will
be backward-compatible.

The MS-DOS 3.2 bit (bit 6) signals whether the device supports logical
drive mapping via Function 440EH (Get Logical Drive Map) and Function 440FH
(Set Logical Drive Map). This bit also supports generic IOCtl functions via
Function 440CH (Generic IOCtl for Handles) and Function 440DH (Generic
IOCtl for Block Devices).


    15  14  13  12  11  10  9   8   7   6   5   4   3   2   1   0
+---------------------------------------------------------------+
| C | I |   |   | O |   |   |   |   | 3 |   |   | C | N | S | S |
| H | O |   |   | P |   |   |   |   | . |   |   | L | U | T | T |
| R | C |   |   | N |   |   |   |   | 2 |   |   | K | L | O | I |
+---------------------------------------------------------------+

        Figure 2.2  Attribute Word for Character Devices


    15  14  13  12  11  10  9   8   7   6   5   4   3   2   1   0
+---------------------------------------------------------------+
|   | I | F |   | O |   |   |   |   | 3 |   |   |   |   |   |   |
|   | O | A |   | P |   |   |   |   | . |   |   |   |   |   |   |
|   | C | T |   | N |   |   |   |   | 2 |   |   |   |   |   |   |
+---------------------------------------------------------------+

            Figure 2.3  Attribute Word for Block Devices


2.5.3  Strategy and Interrupt Routines

These two fields are the pointers to the entry points of the strategy
and interrupt routines. They are word values, so they must be in the same
segment as the device header.


2.5.4  Name Field

This is an eight-byte field that contains the name of a character
device or the number of units of a block device. If the field refers
to a block device, the number of units can be put in the first byte. This
is optional, because MS-DOS will fill in this location with the value
returned by the driver's Init code. For more information, see Section 2.4,
"Installing Device Drivers."


2.6  Request Header


When MS-DOS calls a device driver to perform a function, it passes a
request header in ES:BX to the strategy entry point. This is a fixed
length header, followed by data pertinent to the operation being performed.
Note that it is the device driver's responsibility to preserve the machine
state (for example, save all registers, including flags, on entry, and
restore them on exit). There is enough room on the stack when the strategy
or interrupt routine is called to do about 20 pushes. If more room on the
stack is needed, the driver should set up its own stack.

The following figure illustrates a request header.


REQUEST HEADER ->
                +-----------------------------+
                | BYTE Length of record       |
                |  Length in bytes of this    |
                |  request header             |
                +-----------------------------+
                | BYTE Unit code              |
                |  The subunit the operation  |
                |  is for (minor device)      |
                |  (no meaning on character   |
                |   devices)                  |
                +-----------------------------+
                | BYTE Command code           |
                +-----------------------------+
                | WORD Status                 |
                +-----------------------------+
                | 8 BYTES Reserved            |
                |                             |
                |-----------------------------|

                    Figure 2.4  Request Header


The request header fields are described below.


2.6.1  Length of Record

This field contains the length (in bytes) of the request header.

2.6.2  Unit Code Field

The unit code field identifies which unit in your device driver the
request is for. For example, if your device driver has three units defined,
then the possible values of the unit code field would be 0, 1, and 2.


2.6.3  Command Code Field

The command code field in the request header can have the following
values:

╓┌───────┌───────────────────────────────────────────────────────────────────╖
Code    Function
──────────────────────────────────────────────────────────────────────────
0       Init

1       Media Check (Block devices only)

2       Build BPB (Block devices only)

3       IOCtl Input (Only called if device has IOCtl)

4       Input (Read)

5       Non-destructive Read, No Wait (Character devices only)

6       Input Status (Character devices only)

7       Input Flush (Character devices only)

8       Output (Write)
Code    Function
8       Output (Write)

9       Output (Write) with Verify

10      Output Status (Character devices only)

11      Output Flush (Character devices only)

12      IOCtl Output (Only called if device has IOCtl)

13      Device Open (Only called if Open/Close/Removable Media bit set)

14      Device Close (Only called if Open/Close/Removable Media bit set)

15      Removable Media (Only called if Open/Close/Removable Media bit
        set and device is block)

16      Output Until Busy (Only called if bit 13 is set on character
        devices)

Code    Function

19      Generic IOCtl Request

23      Get Logical Device

24      Set Logical Device


2.6.4  Status Field

The following figure illustrates the status field in the request header.


        15  14 13 12 11 10  9   8   7  6  5  4  3  2  1  0
    +---+---+--+--+--+--+---+---+--+--+--+--+--+--+--+--+
    | E |               | B | D |                       |
    | R |   Reserved    | U | O | Error code (bit 15 on)|
    | R |               | S | N |                       |
    |   |               | Y | E |                       |
    +---+---+--+--+--+--+---+---+--+--+--+--+--+--+--+--+

                    Figure 2.5  Status Field


The status word is zero on entry and is set by the driver interrupt routine
on return.

Bit 8 is the done bit. When set, it means the operation has
completed. The driver sets it to 1 when it exits.

Bit 15 is the error bit. If it is set, then the low eight bits
indicate the error. The errors are as follows:

Error    Meaning
───────────────────────────────────────────────────────────────────────────
0        Write protect violation
1        Unknown unit
2        Drive not ready
3        Unknown command
4        CRC error
5        Bad drive request structure length
6        Seek error
7        Unknown media
8        Sector not found
9        Printer out of paper
A        Write fault
B        Read fault
C        General failure
D        Reserved
E        Reserved
F        Invalid disk change

Bit 9 is the busy bit, which is set only by Status calls and the
Removable Media call.


2.7  Device Driver Functions


Device drivers may perform all or some of these general functions. In some
cases, these functions break down into several command codes, for specific
cases. Each of the following general functions is described in this
section.

    ■ Init

    ■ Media Check

    ■ Build BPB

    ■ Read, or Write, or Write Until Busy, or Write with Verify,
        or Read IOCtl, or Write IOCtl

    ■ Non-destructive Read, No Wait

    ■ Open or Close (3.x)

    ■ Removable Media (3.x)

    ■ Status

    ■ Flush

    ■ Generic IOCtl

    ■ Get or Set Logical Device

All strategy routines are called with ES:BX pointing to the request header.
The interrupt routines get the pointers to the request header from the
queue that the strategy routines store them in. The command code in the
request header tells the driver which function to perform and what data
follows the request header.

───────────────────────────────────────────────────────────────────────────
Note
    All DWORD pointers are stored offset first, then segment.
───────────────────────────────────────────────────────────────────────────


2.7.1  The Init Function

Command code = 0

INIT - ES:BX ->
+------------------------------------+
| 13-BYTE Request header             |
+------------------------------------+
| BYTE Number of units               |
+------------------------------------+
| DWORD End Address                  |
+------------------------------------+
| DWORD Pointer to BPB array         |
| (Not set by character devices)     |
+------------------------------------+
| BYTE Block device number           |
+------------------------------------+

One of the functions defined for each device driver is Init. This routine
is called only once when the device is installed. The Init routine must
return the end address, which is a DWORD pointer to the end of the portion
of the device driver to remain resident. To save space, you can use this
pointer method to delete initialization code that is needed only once.

The number of units, end address, and BPB pointer are to be set by the
driver. However, on entry for installable device drivers, the DWORD that
is to be set by the driver to the BPB array (on block devices) points to
the character after the "=" on the line in config.sys that caused this
device driver to be loaded. This allows drivers to scan the config.sys
invocation line for parameters that might be passed to the driver. This
line is terminated by a RETURN or a linefeed character. This data is
read-only and allows the device to scan the config.sys command line
for arguments.

        device=\dev\vt52.sys /l
            |
            |_____BPB address points here

Also, for block devices only, the drive number assigned to the first unit
defined by this driver (A=0) as contained in the block device number field.
This is also read-only.

───────────────────────────────────────────────────────────────────────────
Note
    The Init routine can issue only Functions 01H-0CH, 25H, 30H, and 35H.
───────────────────────────────────────────────────────────────────────────

For installable character devices, the end address parameter must be
returned. This is a pointer to the first available byte of memory above
the driver and may be used to throw away initialization code.

Block devices must return the following information:

    1.  The number of units must be returned. MS-DOS uses this number
        to determine logical device names. If the current maximum logical
        device letter is F at the time of the install call, and the Init
        routine returns 4 as the number of units, then they will have
        logical names G, H, I, and J. This mapping is determined by the
        position of the driver in the device list, and by the number of
        units on the device (stored in the first byte of the device
        name field).

    2.  A DWORD pointer to an array of word offsets (pointers) to BPBs
        (BIOS Parameter Blocks) must be returned. The BPBs passed
        by the device driver are used by MS-DOS to create an internal
        structure. There must be one entry in this array for each unit
        defined by the device driver. In this way, if all units are the
        same, all the pointers can point to the same BPB, saving space. If
        the device driver defines two units, then the DWORD pointer points
        to the first of two one-word offsets which in turn point to BPBs.
        The format of the BPB is described later in this chapter in Section
        2.7.3, "The Build BPB Function."

        Note that this array of word offsets must be protected (below the
        free pointer set by the return), since an internal DOS structure
        will be built starting at the byte pointed to by the free pointer.
        The defined sector size must be less than or equal to the maximum
        sector size defined by the resident device drivers (BIOS) during
        initialization. If it isn't, the installation will fail.

    3.  The last thing that the Init function of a block device must pass
        back is the media descriptor byte. This byte means nothing to
        MS-DOS, but is passed to devices so that they know what parameters
        MS-DOS is currently using for a particular drive.

───────────────────────────────────────────────────────────────────────────
Note
    If there are multiple device drivers in a single file, MS-DOS uses the
    ending address returned by the last Init function called. All device
    drivers in a single file should return the same ending address. All
    devices in a single file should be grouped together low in memory with
    the initialization code for all devices following it in memory.
───────────────────────────────────────────────────────────────────────────


2.7.2  The Media Check Function

Command Code = 1

MEDIA CHECK - ES:BX ->
+------------------------------------+
| 13-BYTE Request header             |
+------------------------------------+
| BYTE Media descriptor from BPB     |
+------------------------------------+
| BYTE Returned                      |
+------------------------------------+
| Returned DWORD pointer to previous |
| Volume ID if bit 11 set and        |
| Disk Changed is returned           |
+------------------------------------+

The Media Check function is used only with block devices. It is called
when there is a pending drive-access call other than a file read or write,
such as Open, Close, delete, and rename. Its purpose is to determine
whether the media in the drive has been changed. If the driver can assure
that the media has not been changed (through a door-lock or other interlock
mechanism), MS-DOS performance is enhanced, because MS-DOS does not need to
reread the FAT and invalidate in-memory buffers for each directory access.

When a disk-access call to the DOS occurs (other than a file read or
write), the following sequence of events takes place:

    1.  The DOS converts the drive letter into a unit number
        of a particular block device.

    2.  The device driver is then called to request a media check on that
        subunit to see if the disk might have been changed. MS-DOS passes
        the old media descriptor byte. The driver returns one of the
        following:

        Return    Meaning
        ───────────────────────────────────────────────────────────────────
        (1)       Media not changed
        (0)       Don't know if changed
        (-1)      Media changed
        value     Error (value is a standard error code value)

        If the media has not been changed, MS-DOS proceeds with the
        disk access.

        If the value returned is -1, then if there are any disk sectors
        that have been modified and not written back out to the disk for
        this unit, MS-DOS assumes that the disk has not been changed and
        proceeds. MS-DOS invalidates any other buffers for the unit and
        does a Build BPB call (see Step 3, following).

        If the media has been changed, MS-DOS invalidates all buffers
        associated with this unit including buffers with modified data that
        are waiting to be written, and requests a new BIOS Parameter Block
        via the Build BPB call (see Step 3).

    3.  Once the BPB has been returned, MS-DOS corrects its internal
        structure for the drive from the new BPB and proceeds with the
        access after reading the directory and the FAT.

Note that the previous media ID byte is passed to the device driver.
If the old media ID byte is the same as the new one, the disk might have
been changed and a new disk may be in the drive; therefore, all FAT,
directory, and data sectors that are buffered in memory for the drive
are considered invalid.

If the driver has bit 11 of the device attribute word set to 1, and
the driver returns -1 (Media Changed) the driver must set the DWORD pointer
to the previous Volume ID field. If the DOS determines that "Media changed"
is an error based on the state of the DOS buffer cache, the DOS will
generate a 0FH error on behalf of the device. If the driver does not
implement volume ID support, but has bit 11 set, (it should set a static
pointer to the string "NO NAME" ,0.)

It is not possible for a user to change a disk in less than two
seconds. So when Media Check occurs within two seconds of a disk access,
the driver reports "Media not changed (1)." This improves performance
tremendously.

───────────────────────────────────────────────────────────────────────────
Note
    If the media ID byte in the returned BPB is the same as the previous
    media ID byte, MS-DOS will assume that the format of the disk is the same
    (even though the disk may have been changed) and will skip the step of
    updating its internal structure. Therefore, all BPBs must have unique
    media bytes regardless of FAT ID bytes.
───────────────────────────────────────────────────────────────────────────


2.7.3  The Build BPB Function

Command code = 2

BUILD BPB - ES:BX ->
+------------------------------------+
| 13-BYTE Request header             |
+------------------------------------+
| BYTE Media descriptor from BPB     |
+------------------------------------+
| DWORD Transfer address             |
| (Points to one sector worth of     |
|  scratch space or first sector     |
|  of FAT depending on the value     |
|  of Bit 13 in the device attribute |
|  word.)                            |
+------------------------------------+
| DWORD Pointer to BPB               |
+------------------------------------+

The Build BPB function is used with block devices only. As described in
the Media Check function, the Build BPB function will be called any time
that a preceding Media Check call indicates that the disk has been or might
have been changed. The device driver must return a pointer to a BPB. This
is different from the Init call where the device driver returns a pointer
to an array of word offsets to BPBs.

The Build BPB call gets a DWORD pointer to a one-sector buffer. The
contents of this buffer are determined by the non-FAT ID bit (bit 13)
in the attribute field. If the bit is zero, then the buffer contains the
first sector of the first FAT. The FAT ID byte is the first byte of this
buffer. In this case, the driver must not alter this buffer. Note that
the location of the FAT must be the same for all possible media because
this first FAT sector must be read before the actualBPB is returned.
If the non-FAT ID bit is set, the pointer points to one sector of scratch
space (which may be used for anything). For information on how to construct
the BPB, see Section 2.8, "The Media Descriptor Byte," and Section 2.9,
"Format of a Media Descriptor Table."

MS-DOS 3.x includes additional support for devices that have door-locks
or some other means of telling when a disk has been changed. There is a new
error that can be returned from the device driver (error 15). The error
means "the disk has been changed when it shouldn't have been," and the user
is prompted for the correct disk using a volume ID. The driver may generate
this error on read or write. The DOS may generate the error on Media Check
calls if the driver reports media changed, and there are buffers in the DOS
buffer cache that need to be flushed to the previous disk.

For drivers that support this error, the Build BPB function is a trigger
that causes a new volume ID to be read off the disk. This action indicates
that the disk has been legally changed. A volume ID is placed on a disk by
the format command, and is simply an entry in the root directory of the
disk that has the Volume ID attribute. It is stored by the driver as an
ASCIZ string.

The requirement that the driver return a volume ID does not exclude
some other volume identifier scheme as long as the scheme uses ASCIZ
strings. A NUL (nonexistent or unsupported) volume ID is by convention
the following string:

DB     "NO NAME     ",0


2.7.4  The Read or Write Function

Command codes = 3,4,8,9,12, and 16

READ OR WRITE (Including IOCtl) or
    OUTPUT UNTIL BUSY - ES:BX ->
+------------------------------------+
| 13-BYTE Request header             |
+------------------------------------+
| BYTE Media descriptor from BPB     |
+------------------------------------+
| DWORD Transfer address             |
+------------------------------------+
| WORD Byte/sector count             |
+------------------------------------+
| WORD Starting sector number        |
|  (Ignored on character devices)    |
+------------------------------------+
| Returned DWORD pointer to requested|
| Volume ID if error 0FH             |
+------------------------------------+

Code      Request
───────────────────────────────────────────────────────────────────────────
3         IOCtl read
4         Read (block or character device)
8         Write (block or character device)
9         Write with Verify
12        IOCtl Write
16        Output Until Busy (character device only)

The driver must perform the Read or Write call depending on which command
code is set. Block devices read or write sectors; character devices read or
write bytes.

When I/O completes, the device driver must set the status word and report
the number of sectors or bytes successfully transferred. This should be
done even if an error prevented the transfer from being completed. Setting
the error bit and error code alone is not sufficient.

In addition to setting the status word, the driver must set the sector
count to the actual number of sectors (or bytes) transferred. No error
check is performed on an IOCtl I/O call. The device driver must always
set the return byte/sector count to the actual number of bytes/sectors
successfully transferred.

If the verify switch is on, the device driver will be called with command
code 9 (Write with Verify). Your device driver will be responsible for
verifying the write.

If the driver returns error code 0FH (Invalid disk change), it must
return a DWORD pointer to an ASCIZ string (which is the correct volume ID).
Returning this error code triggers the DOS to prompt the user to re-insert
the disk. The device driver should have read the volume ID as a result of
the Build BPB function.

Drivers may maintain a reference count of open files on the disk
by monitoring the Open and Close functions. This allows the driver to
determine when to return error 0FH. If there are no open files (reference
count = 0), and the disk has been changed, the I/O is okay. If there are
open files, however, an 0FH error may exist.

The Output Until Busy call is a speed optimization on character devices
only for print spoolers. The device driver is expected to output all the
characters possible until the device returns busy. Under no circumstances
should the device driver block during this function. Note that it is not an
error for the device driver to return the number of bytes output as being
less than the number of bytes requested (or = 0).

The Output Until Busy call allows spooler programs to take advantage
of the "burst" behavior of most printers. Many printers have on-board
RAM buffers that typically hold a line or a fixed amount of characters.
These buffers fill up without the printer going busy, or going busy for
a short period (less than ten instructions) between characters. A line of
characters can be quickly output to the printer, after which the printer
is busy for a long time while the characters are being printed. This new
device call allows background spooling programs to use this burst behavior
efficiently. Rather than take the overhead of a device driver call for
each character, or risk getting stuck in the device driver outputting a
block of characters, this call allows a burst of characters to be output
without the device driver having to wait for the device to be ready.


The Following Applies to Block Device Drivers:

Under certain circumstances, the BIOS may be asked to perform a write
operation of 64K bytes, which seems to be a "wrap-around" of the transfer
address in the BIOS I/O packet. This request, which arises due to an
optimization added to the write code in MS-DOS, will manifest itself only
on user writes that are within a sector size of 64K bytes on files
"growing" past the current end-of-file (EOF) mark. It is allowable for
the BIOS to ignore the balance of the write that "wraps around" if it so
chooses. For example, a write of 10000H bytes worth of sectors with a
transfer address of xxx:1 could ignore the last two bytes. A user program
can never request an I/O of more than FFFFH bytes and cannot wrap around
(even to 0) in the transfer segment. Therefore, in this case, the last
two bytes can be ignored.

MS-DOS maintains two FATs. If the DOS has problems reading the first,
it automatically tries the second before reporting the error. The BIOS is
responsible for all retries.

Although the command.com handler does no automatic retries, there are
applications that have their own Interrupt 24H handlers that do automatic
retries on certain types of Interrupt 24H errors before reporting them.


2.7.5  The Non-destructive Read, No Wait Function

Command code = 5

NON-DESTRUCTIVE READ NO WAIT - ES:BX ->
+------------------------------------+
| 13-BYTE Request header             |
+------------------------------------+
| BYTE Read from device              |
+------------------------------------+

The Non-destructive Read, No Wait function allows MS-DOS to look ahead one
input character. The device sets the done bit in the status word.

If the character device returns busy bit = 0 (there are characters in
the buffer), then the next character that would be read is returned.
This character is not removed from the input buffer (hence the term
"Non-destructive Read"). If the character device returns busy bit = 1,
there are no characters in the buffer.


2.7.6  The Open or Close Function

Command codes = 13 and 14

OPEN or CLOSE  - ES:BX ->
+------------------------------------+
| 13-BYTE Static request header      |
+------------------------------------+

The Open and Close functions are called by MS-DOS 3.x only if the device
driver sets the Open/Close/Removable Media attribute bit in the device
header. They are designed to inform the device about current file activity
on the device. On block devices, they can be used to manage local
buffering. The device can keep a reference count. Every Open causes the
device to increment the count, every Close to decrement. When the count
goes to zero, it means there are no open files on the device, and the
device should flush any buffers that have been written to that may have
been used inside the device, because it is now "legal" for the user to
change the media on a removable media drive.

There are problems with this mechanism on block devices because programs
that use FCB calls can open files without closing them. It is therefore
advisable to reset the count to zero without flushing the buffers when the
answer to "Has the media been changed?" is yes, and the Build BPB call
is made to the device.

These calls are more useful on character devices. The Open call, for
instance, can be used to send a device initialization string. On a printer,
this could cause a string for setting font and page size characteristics to
be sent to the printer so that it would always be in a known state at the
start of an I/O stream. Using IOCtl to set these pre- and post- strings
provides a flexible mechanism of serial I/O device stream control. The
reference count mechanism can also be used to detect a simultaneous access
error. It may be desirable to disallow more than one Open on a device at
any given time. In this case, a second Open would result in an error.

Note that since all processes have access to stdin, stdout, stderr,
stdaux, and stdprn (handles 0,1,2,3,4), the CON, AUX, and PRN devices are
always open.


2.7.7  The Removable Media Function

Command code = 15

REMOVABLE MEDIA - ES:BX ->
+------------------------------------+
| 13-BYTE Static request header      |
+------------------------------------+

The Removable Media function is called by MS-DOS 3.x only if the device
driver sets the Open/Close/Removable Media attribute bit in the device
header. This call is given only to block devices by a subfunction of the
IOCtl system call. It is sometimes desirable for a utility to know whether
it is dealing with a nonremovable media drive (such as a hard disk), or a
removable media drive (like a floppy). An example is the format command,
which prints different versions of some of the prompts.

The information is returned in the busy bit of the status word. If the
busy bit is 1, then the media is nonremovable. If the busy bit is 0,
then the media is removable. Note that the error bit is not checked.
It is assumed that this call always succeeds.


2.7.8  The Status Function

Command codes = 6 and 10

STATUS Calls ES:BX ->
+------------------------------------+
| 13-BYTE Request header             |
+------------------------------------+

The Status function returns information to the DOS as to whether data is
waiting for input or output. All the driver must do is set the status word
and the busy bit as follows:

    ■ For output on character devices--if the driver sets bit 9 to 1 on
        return, it informs the DOS that a write request (if made) would wait
        for completion of a current request. If it is 0, there is no current
        request, and a write request (if made) would start immediately.

    ■ For input on character devices with a buffer--A return of 1 implies
        that no characters are buffered and that a read request (if made)
        would go to the physical device. If it is 0 on return, then there are
        characters in the device buffer and a read would not be blocked. A
        return of 0 implies that the user has typed something. MS-DOS assumes
        that all character devices have an input type-ahead buffer.

Devices that do not have a type-ahead buffer should always return
busy = 0 so that the DOS will not "hang" waiting for something to get
into a nonexistent buffer.


2.7.9  The Flush Function

Command codes = 7 and 11

FLUSH Calls - ES:BX ->
+------------------------------------+
| 13-BYTE Request header             |
+------------------------------------+

The Flush function tells the driver to flush (terminate) all pending
requests. This call is used to flush the input queue on character devices.

The device driver performs the flush function, sets the status word,
and returns.


2.7.10  The Generic IOCtl Function

Command code = 19

ES:BX ->
+------------------------------------+
| 13-BYTE Static request header      |
+------------------------------------+
| BYTE Category (Major) code         |
+------------------------------------+
| BYTE Function (Minor) code         |
+------------------------------------+
| WORD (SI) Contents                 |
+------------------------------------+
| WORD (DI) Contents                 |
+------------------------------------+
| DWORD Pointer to data buffer       |
+------------------------------------+

The Generic IOCtl function provides a generic, expandable IOCtl facility
that replaces and makes the Read IOCtl and Write IOCtl device driver
functions obsolete. The MS-DOS 2.0 IOCtl functions remain to support
existing uses of the IOCtl system call (Subfunctions 2, 3, 4, and 5),
but new device drivers should use this generic MS-DOS IOCtl facility.

The Generic IOCtl function contains both a category and function code.
The DOS examines the category field in order to intercept and obey device
commands that are actually serviced by the DOS code; all other command
categories are forwarded to the device driver for servicing.

For more information on these category and function codes, refer to
Function 440CH (Generic IOCtl for Handles) and Function 440DH (Generic
IOCtl for Block Devices) in Chapter 1, "System Calls."


2.7.11  The Get/Set Logical Drive Map Function

Command codes = 23 (Get) or 24 (Set)

    +----------------------------------------+
    | 13-BYTE Static request header          |
    +----------------------------------------+
    | BYTE    Input (unit code)              |
    +----------------------------------------+
    | BYTE    Output (last device referenced)|
    +----------------------------------------+
    | BYTE    Command code                   |
    +----------------------------------------+
    | WORD    Status                         |
    +----------------------------------------+
    | DWORD   Reserved                       |
    +----------------------------------------+

The Get/Set Logical Drive Map function is called by MS-DOS only if the
device driver sets the DOS 3.2 attribute bit in the device header. The
call is issued only to block devices by the subfunction of the IOCtl system
call. The logical drive to be mapped is passed in the Unit field of the
header to the device driver. The device driver returns the current logical
drive owner of the physical device that maps to the requested physical
drive. To detect whether a logical device currently owns the physical
device to which it is mapped, a program needs to verify that, after a call
of Function 440EH or 440FH (Get/Set Logical Drive Map), the value of the
Unit field is unchanged.


2.8  The Media Descriptor Byte


In MS-DOS, the media descriptor byte is used to inform the DOS that a
different type of media is present. The media descriptor byte can be any
value between 0 and FFH. It does not have to be the same as the FAT ID
byte. The FAT ID byte, which is the first byte of the FAT, was used in
MS-DOS 1.00 to distinguish between different types of disk media, and may
be used as well under 2.x and 3.x disk device drivers. However, FAT ID
bytes have significance only for block device drivers where the
non-FAT ID bit is not set (0).

Values of the media descriptor byte or the FAT ID byte have no
significance to MS-DOS. They are passed to the device driver so that
programs can determine the media type.


2.9  Format of a Media Descriptor Table


The MS-DOS file system uses a linked list of pointers (one for each cluster
or allocation unit) called the File Allocation Table (FAT). Unused clusters
are represented by zero and end-of-file by FFFH (or FFFFH on units with
16-bit FAT entries). No valid entry should ever point to a zero entry, but
if one does, the first FAT entry (which would be pointed to by a zero
entry) was reserved and set to end of chain. Eventually, several end of
chain values were defined ([F]FF8-[F]FFFH), and these were used to
distinguish different types of media.

A preferable technique is to write a complete media descriptor table
in the boot sector and use it for media identification. To ensure backward
compatibility for systems whose drivers do not set the non-FAT ID bit
(including the IBM PC implementation), it is necessary also to write the
FAT ID bytes during the format process.

To allow more flexibility for supporting many different disk formats
in the future, it is recommended that the information relating to the BPB
for a particular piece of media be kept in the boot sector. Figure 2.6
shows the format of such a boot sector.


            +------------------------------------+
            | 3 BYTE Near JUMP to boot code      |
            +------------------------------------+
            | 8 BYTES OEM name and version       |
            ---+------------------------------------+---
            B  | WORD Bytes per sector              |
            +------------------------------------+
            B  | BYTE Sectors per allocation unit   |
            +------------------------------------+
            |  | WORD Reserved sectors              |
            V  +------------------------------------+
            | BYTE Number of FATs                |
            +------------------------------------+
            | WORD Number of root dir entries    |
            +------------------------------------+
            | WORD Number of sectors in logical  |
            ^  | image                              |
            |  +------------------------------------+
            B  | BYTE Media descriptor              |
            P  +------------------------------------+
            B  | WORD Number of FAT sectors         |
            ---+------------------------------------+---
            | WORD Sectors per track             |
            +------------------------------------+
            | WORD Number of heads               |
            +------------------------------------+
            | WORD Number of hidden sectors      |
            +------------------------------------+
            | WORD High order number of hidden   |
            | sectors                            |
            +------------------------------------+
            | DWORD Number of logical sectors    |
            +------------------------------------+

                Figure 2.6  Format of a Boot Sector


Although MS-DOS does not use the five fields that follow the BPB, these
fields may be used by a device driver to help it understand the media.

The "Sectors per track" and "Number of heads" fields are useful for
supporting different media which may have the same logical layout, but a
different physical layout (for example, 40-track, double-sided versus
80-track, single-sided). "Sectors per track" tells the device driver how
the logical disk format is laid out on the physical disk.

The "Number of hidden sectors" and "High order number of hidden sectors"
fields may be used to support drive-partitioning schemes.

The "Number of logical sectors" field is not currently used, but will
tell the device driver how many sectors to reserve if the "Number of
sectors in logical image" field is zero. (Note that this is intended
for supporting devices that access more than 32 megabytes.)

The following procedure is recommended for media determination by
NON FAT ID format drivers:

    1.  Read the boot sector of the drive into the one-sector scratch
        space pointed to by the DWORD transfer address.

    2.  Determine if the first byte of the boot sector is an E9H or EBIT
        (the first byte of a 3-byte NEAR or 2-byte SHORT jump) or an EBH
        (the first byte of a 2-byte jump followed by an NOP). If so, a BPB
        is located beginning at offset 3. Return a pointer to it.

    3.  If the boot sector does not have a BPB table, it is probably a disk
        formatted under a 1.x version of MS-DOS and probably uses a FAT ID
        byte for determining media.

        The driver may optionally attempt to read the first sector of the
        FAT into the one-sector scratch area and read the first byte to
        determine media type based upon whatever FAT ID bytes may have been
        used on disks that are expected to be read by this system. Return
        a pointer to a hard-coded BPB.


2.10  The CLOCK Device


MS-DOS assumes that some sort of clock is available in the system.
This may either be a CMOS real-time clock or an interval timer that
is initialized at boot time by the user. The CLOCK device defines and
performs functions like any other character device, except that it is
identified by a bit in the attribute word. The DOS uses this bit to
identify it; consequently, the CLOCK device may take any name. The IBM
implementation uses the name $CLOCK so as not to conflict with existing
files named clock.

The CLOCK device is unique in that MS-DOS will read or write a 6-byte
sequence that encodes the date and time. A write to this device will set
the date and time; a read will get the date and time.

Figure 2.7 illustrates the binary time format used by the CLOCK device:


    byte 0   byte 1   byte 2    byte 3   byte 4   byte 5
+--------+--------+---------+--------+--------+---------+
|        |        |         |        |        |         |
|days since 1-1-80| minutes |  hours | sec/100| seconds |
|low byte|hi byte |         |        |        |         |
+--------+--------+---------+--------+--------+---------+

            Figure 2.7  Format of a Clock Device


2.11  Anatomy of a Device Call

The following steps illustrate what happens when MS-DOS calls on a block
device driver to perform a Write request:

    1.  MS-DOS writes a request packet in a reserved area of memory.

    2.  MS-DOS calls the strategy entry point of the block device driver.

    3.  The device driver saves the ES and BX registers (ES:BX points
        to the request packet) and does a FAR return.

    4.  MS-DOS calls the interrupt entry point.

    5.  The device driver retrieves the pointer to the request packet and
        reads the command code (offset 2) to determine that this is a Write
        request. The device driver converts the command code to an index
        into a dispatch table and control passes to the Write routine.

    6.  The device driver reads the unit code (offset 1) to determine which
        disk drive it is supposed to write to.

    7.  Since the command is a disk Write, the device driver must get the
        transfer address (offset 14), the sector count (offset 18), and
        the start sector (offset 20) in the request packet.

    8.  The device driver translates the first logical sector number into
        a track, head, and sector number.

    9.  The device driver writes the specified number of sectors, starting
        at the beginning sector on the drive defined by the unit code (the
        subunit defined  by this device driver), and transfers data from
        the transfer address indicated in the request packet. Note that
        this may involve multiple Write commands to the disk controller.

    10.  After the transfer is complete, the device driver must report
        the status of the request to MS-DOS by setting the done bit in the
        status word (offset 3 in the request packet). It reports the number
        of sectors actually transferred in the sector count area of the
        request packet.

    11.  If an error occurs, the driver sets the done bit and the error
        bit in the status word and fills in the error code in the lower
        half of the status word. The number of sectors actually
        transferred must be written in the request header. It is not
        sufficient just to set the error bit of the status word.

    12.  The device driver does a FAR return to MS-DOS.

The device drivers should preserve the state of MS-DOS. This means
that all registers (including flags) should be preserved. The direction
flag and interrupt enable bits are critical. When the interrupt entry
point in the device driver is called, MS-DOS has room for about 40 to 50
bytes on its internal stack. Your device driver should switch to a local
stack if it uses extensive stack operations.


12.12  Two Sample Device Drivers

The following two examples illustrate a block device driver and a
character device driver program. These examples are provided as guides
for writing your own device drivers. However, since device drivers are
hardware-dependent, your device drivers will differ.


Block Device Driver


;********************* A Block Device *******************

        Title   5.25-inch Disk Driver

;This driver is intended to drive up to four 5.25-inch
;drives hooked to a single disk controller. All standard
;IBM PC formats are supported.


FALSE   EQU     0
TRUE    EQU     NOT FALSE

;The I/O port address of the disk controller
DISK    EQU     0E0H
;DISK+0
;       1793    Command/Status
;DISK+1
;       1793    Track
;DISK+2
;       1793    Sector
;DISK+3
;       1793    Data
;DISK+4
;       Aux Command/Status
;DISK+5
;       Wait Sync

;Back side select bit
BACKBIT EQU     04H
;5 1/4" select bit
SMALBIT EQU     10H
;Double Density bit
DDBIT   EQU     08H

;Done bit in status register
DONEBIT EQU     01H

;Use table below to select head step speed.
;Step times for 5" drives
;are double that shown in the table.
;
;Step value    1771    1793
;
;    0          6ms     3ms
;    1          6ms     6ms
;    2         10ms    10ms
;    3         20ms    15ms
;
STPSPD  EQU     1

NUMERR  EQU     ERROUT-ERRIN

CR      EQU     0DH
LF      EQU     0AH

CODE    SEGMENT
ASSUME  CS:CODE,DS:NOTHING,ES:NOTHING,SS:NOTHING
;-----------------------------------------------------
;
;       Device Header
;
DRVDEV  LABEL   WORD
        DW      -1,-1
        DW      0000     ;IBM format-compatible, Block
        DW      STRATEGY
        DW      DRV$IN
DRVMAX  DB      4

DRVTBL  LABEL   WORD
        DW      DRV$INIT
        DW      MEDIA$CHK
        DW      GET$BPB
        DW      CMDERR
        DW      DRV$READ
        DW      EXIT
        DW      EXIT
        DW      EXIT
        DW      DRV$WRIT
        DW      DRV$WRIT
        DW      EXIT
        DW      EXIT
        DW      EXIT

;------------------------------------
;
;       Strategy

PTRSAV  DD      0

STRATP  PROC    FAR
STRATEGY:
        MOV     WORD PTR [PTRSAV],BX
        MOV     WORD PTR [PTRSAV+2],ES
        RET
STRATP  ENDP

;--------------------------------------
;
;       Main Entry


CMDLEN  =       0       ;Length of this command
UNIT    =       1       ;Subunit specified
CMDC    =       2       ;Command Code
STATUS  =       3       ;Status
MEDIA   =       13      ;Media Descriptor
TRANS   =       14      ;Transfer Address
COUNT   =       18      ;Count of blocks or characters
START   =       20      ;First block to transfer

DRV$IN:
        PUSH    SI
        PUSH    AX
        PUSH    CX
        PUSH    DX
        PUSH    DI
        PUSH    BP
        PUSH    DS
        PUSH    ES
        PUSH    BX

        LDS     BX,[PTRSAV]     ;Get pointer to I/O packet

        MOV     AL,BYTE PTR [BX].UNIT   ;AL = Unit Code
        MOV     AH,BYTE PTR [BX].MEDIA  ;AH = Media Descrip
        MOV     CX,WORD PTR [BX].COUNT  ;CX = Count
        MOV     DX,WORD PTR [BX].START  ;DX = Start Sector
        PUSH    AX
        MOV     AL,BYTE PTR [BX].CMDC   ;Command code
        CMP     AL,15
        JA      CMDERRP                 ;Bad command
        CBW
        SHL     AX,1                    ;2 times command =
                                        ;word table index
        MOV     SI,OFFSET DRVTBL
        ADD     SI,AX                   ;Index into table
        POP     AX                      ;Get back media
                                        ;and unit

        LES     DI,DWORD PTR [BX].TRANS ;ES:DI = Transfer
                                        ;Address

        PUSH    CS
        POP     DS

ASSUME  DS:CODE

        JMP     WORD PTR [SI]             ;GO DO COMMAND

;----------------------------------------------------------
;
;       EXIT - All Routines return through this path
;
ASSUME  DS:NOTHING
CMDERRP:
        POP     AX                    ;Clean stack
CMDERR:
        MOV     AL,3                  ;Unknown command error
        JMP     SHORT ERR$EXIT

ERR$CNT:LDS     BX,[PTRSAV]
        SUB     WORD PTR [BX].COUNT,CX ;# OF SUCCESS. I/Os

ERR$EXIT:
;AL has error code
        MOV     AH,10000001B            ;Mark error return
        JMP     SHORT ERR1

EXITP   PROC    FAR

EXIT:   MOV     AH,00000001B
ERR1:   LDS     BX,[PTRSAV]
        MOV     WORD PTR [BX].STATUS,AX
                                    ;Mark Operation
CompleteE

        POP     BX
        POP     ES
        POP     DS
        POP     BP
        POP     DI
        POP     DX
        POP     CX
        POP     AX
        POP     SI
        RET                         ;Restore REGS and return
EXITP   ENDP

CURDRV  DB      -1

TRKTAB  DB      -1,-1,-1,-1

SECCNT  DW      0

DRVLIM  =       8       ;Number of sectors on device
SECLIM  =       13      ;Maximum Sector
HDLIM   =       15      ;Maximum Head

;WARNING - preserve order of drive and curhd!

DRIVE   DB      0       ;Physical Drive Code
CURHD   DB      0       ;Current Head
CURSEC  DB      0       ;Current Sector
CURTRK  DW      0       ;Current Track

;
MEDIA$CHK:              ;Always indicates Don't know
ASSUME  DS:CODE
        TEST    AH,00000100B       ;Test if Media Removable
        JZ      MEDIA$EXT
        XOR     DI,DI              ;Say I Don't know
MEDIA$EXT:
        LDS     BX,[PTRSAV]
        MOV     WORD PTR [BX].TRANS,DI
        JMP     EXIT

BUILD$BPB:
ASSUME  DS:CODE
        MOV     AH,BYTE PTR ES:[DI]       ;Get FAT ID Byte
        CALL    BUILDBP                   ;Translate
SETBPB: LDS     BX,[PTRSAV]
        MOV     [BX].MEDIA,AH
        MOV     [BX].COUNT,DI
        MOV     [BX].COUNT+2,CS
        JMP     EXIT

BUILDBP:
ASSUME  DS:NOTHING
;AH is media byte on entry
;DI points to correct BPB on return
        PUSH    AX
        PUSH    CX
        PUSH    DX
        PUSH    BX
        MOV     CL,AH       ;Save Media
        AND     CL,0F8H     ;Normalize
        CMP     CL,0F8H     ;Compare with Good Media Byte
        JZ      GOODID
        MOV     AH,0FEH     ;Default to 8-sector,
                            ;Single-sided
GOODID:
        MOV     AL,1        ;Set number of FAT sectors
        MOV     BX,64*256+8 ;Set Dir Entries and Sector Max
        MOV     CX,40*8     ;Set Size of Drive
        MOV     DX,01*256+1 ;Set Head Limit & Sec/All Unit
        MOV     DI,OFFSET DRVBPB
        TEST    AH,00000010B ;Test for 8 OR 9 Sectors
        JNZ     HAS8        ;NZ = has 8 sectors
        INC     AL          ;Inc Number of FAT sectors
        INC     BL          ;Inc Sector Max
        ADD     CX,40       ;Increase Size
HAS8:   TEST    AH,00000001B    ;Test for 1 or 2 Heads
        JZ      HAS1        ;Z = 1 Head
        ADD     CX,CX       ;Double Size of Disk
        MOV     BH,112      ;Increase # of Dir Entries
        INC     DH          ;Inc Sec/All Unit
        INC     DL          ;Inc Head Limit
HAS1:   MOV     BYTE PTR [DI].2,DH
        MOV     BYTE PTR [DI].6,BH
        MOV     WORD PTR [DI].8,CX
        MOV     BYTE PTR [DI].10,AH
        MOV     BYTE PTR [DI].11,AL
        MOV     BYTE PTR [DI].13,BL
        MOV     BYTE PTR [DI].15,DL
        POP     BX
        POP     DX
        POP     CX
        POP     AX
        RET

;----------------------------------------------------------
;
;       Disk I/O Handlers
;
;ENTRY:
;       AL = Drive Number (0-3)
;       AH = Media Descriptor
;       CX = Sector Count
;       DX = First Sector
;       DS = CS
;       ES:DI = Transfer Address
;EXIT:
;       IF Successful Carry Flag = 0
;         ELSE CF=1 AND AL contains (MS-DOS) Error Code,
            CX # sectors NOT transferred

DRV$READ:
ASSUME  DS:CODE
        JCXZ    DSKOK
        CALL    SETUP
        JC      DSK$IO
        CALL    DISKRD
        JMP     SHORT DSK$IO

DRV$WRIT:
ASSUME  DS:CODE
        JCXZ    DSKOK
        CALL    SETUP
        JC      DSK$IO
        CALL    DISKWRT
ASSUME  DS:NOTHING
DSK$IO: JNC     DSKOK
        JMP     ERR$CNT
DSKOK:  JMP     EXIT

SETUP:
ASSUME  DS:CODE
;Input same as above
;On output
; ES:DI = Trans addr
; DS:BX Points to BPB
; Carry set if error (AL is error code (MS-DOS))
; else
;       [DRIVE] = Drive number (0-3)
;       [SECCNT] = Sectors to transfer
;       [CURSEC] = Sector number of start of I/O
;       [CURHD]  = Head number of start of I/O   ;Set
;       [CURTRK] = Track # of start of I/O ;Seek performed
; All other registers destroyed

        XCHG   BX,DI              ;ES:BX = Transfer Address
        CALL   BUILDBP            ;DS:DI = PTR to B.P.B
        MOV    SI,CX
        ADD    SI,DX
        CMP    SI,WORD PTR [DI].DRVLIM
                                    ;Compare Against Drive Max
        JBE    INRANGE
        MOV    AL,8
        STC
        RET

INRANGE:
        MOV    [DRIVE],AL
        MOV    [SECCNT],CX     ;Save Sector Count
        XCHG   AX,DX           ;Set Up Logical Sector
                                ;For Divide
        XOR    DX,DX
        DIV    WORD PTR [DI].SECLIM ;Divide by Sec per Track
        INC    DL
        MOV    [CURSEC],DL          ;Save Current Sector
        MOV    CX,WORD PTR [DI].HDLIM ;Get Number of Heads
        XOR    DX,DX   ;Divide Tracks by Heads per Cylinder
        DIV    CX
        MOV    [CURHD],DL      ;Save Current Head
        MOV    [CURTRK],AX     ;Save Current Track
SEEK:
        PUSH   BX              ;Xaddr
        PUSH   DI              ;BPB pointer
        CALL   CHKNEW          ;Unload head if change drives
        CALL   DRIVESEL
        MOV    BL,[DRIVE]
        XOR    BH,BH           ;BX drive index
        ADD    BX,OFFSET TRKTAB        ;Get current track
        MOV    AX,[CURTRK]
        MOV    DL,AL         ;Save desired track
        XCHG   AL,DS:[BX]    ;Make desired track current
        OUT    DISK+1,AL     ;Tell Controller current track
        CMP    AL,DL         ;At correct track?
        JZ     SEEKRET       ;Done if yes
        MOV    BH,2          ;Seek retry count
        CMP    AL,-1         ;Position Known?
        JNZ    NOHOME        ;If not home head
TRYSK:
        CALL   HOME
        JC     SEEKERR
NOHOME:
        MOV    AL,DL
        OUT    DISK+3,AL       ;Desired track
        MOV    AL,1CH+STPSPD   ;Seek
        CALL   DCOM
        AND    AL,98H    ;Accept not rdy, seek, & CRC errors
        JZ     SEEKRET
        JS     SEEKERR         ;No retries if not ready
        DEC    BH
        JNZ    TRYSK
SEEKERR:
        MOV    BL,[DRIVE]
        XOR    BH,BH           ;BX drive index
        ADD    BX,OFFSET TRKTAB        ;Get current track
        MOV    BYTE PTR DS:[BX],-1     ;Make current track
                                        ;unknown
        CALL   GETERRCD
        MOV    CX,[SECCNT]     ;Nothing transferred
        POP    BX              ;BPB pointer
        POP    DI              ;Xaddr
        RET

SEEKRET:
        POP    BX              ;BPB pointer
        POP    DI              ;Xaddr
        CLC
        RET

;---------------------------------------------
;
;       Read
;

DISKRD:
ASSUME  DS:CODE
        MOV    CX,[SECCNT]
RDLP:
        CALL   PRESET
        PUSH   BX
        MOV    BL,10              ;Retry count
        MOV    DX,DISK+3          ;Data port
RDAGN:
        MOV    AL,80H             ;Read command
        CLI                       ;Disable for 1793
        OUT    DISK,AL            ;Output read command
        MOV    BP,DI              ;Save address for retry
        JMP    SHORT RLOOPENTRY
RLOOP:
        STOSB
RLOOPENTRY:
        IN     AL,DISK+5          ;Wait for DRQ or INTRQ
        SHR    AL,1
        IN     AL,DX              ;Read data
        JNC    RLOOP
        STI                       ;Ints OK now
        CALL   GETSTAT
        AND    AL,9CH
        JZ     RDPOP              ;Ok
        MOV    DI,BP              ;Get back transfer
        DEC    BL
        JNZ    RDAGN
        CMP    AL,10H             ;Record not found?
        JNZ    GOT_CODE           ;No
        MOV    AL,1               ;Map it
GOT_CODE:
        CALL   GETERRCD
        POP    BX
        RET

RDPOP:
        POP    BX
        LOOP   RDLP
        CLC
        RET

;---------------------------------------------
;
;       Write
;

DISKWRT:
ASSUME  DS:CODE
        MOV     CX,[SECCNT]
        MOV     SI,DI
        PUSH    ES
        POP     DS
ASSUME  DS:NOTHING
WRLP:
        CALL    PRESET
        PUSH    BX
        MOV     BL,10                   ;Retry count
        MOV     DX,DISK+3               ;Data port
WRAGN:
        MOV     AL,0A0H            ;Write command
        CLI                        ;Disable for 1793
        OUT     DISK,AL            ;Output write command
        MOV     BP,SI              ;Save address for retry
WRLOOP:
        IN      AL,DISK+5
        SHR     AL,1
        LODSB                      ;Get data
        OUT     DX,AL              ;Write data
        JNC     WRLOOP
        STI                        ;Ints OK now
        DEC     SI
        CALL    GETSTAT
        AND     AL,0FCH
        JZ      WRPOP              ;Ok
        MOV     SI,BP              ;Get back transfer
        DEC     BL
        JNZ     WRAGN
        CALL    GETERRCD
        POP     BX
        RET

WRPOP:
        POP     BX
        LOOP    WRLP
        CLC
        RET

PRESET:
ASSUME  DS:NOTHING
        MOV     AL,[CURSEC]
        CMP     AL,CS:[BX].SECLIM
        JBE     GOTSEC
        MOV     DH,[CURHD]
        INC     DH
        CMP     DH,CS:[BX].HDLIM
        JB      SETHEAD            ;Select new head
        CALL    STEP               ;Go on to next track
        XOR     DH,DH              ;Select head zero
SETHEAD:
        MOV     [CURHD],DH
        CALL    DRIVESEL
        MOV     AL,1               ;First sector
        MOV     [CURSEC],AL        ;Reset CURSEC
GOTSEC:
        OUT     DISK+2,AL     ;Tell controller which sector
        INC     [CURSEC]      ;We go on to next sector
        RET

STEP:
ASSUME  DS:NOTHING
        MOV     AL,58H+STPSPD  ;Step in w/ update, no verify
        CALL    DCOM
        PUSH    BX
        MOV     BL,[DRIVE]
        XOR     BH,BH           ;BX drive index
        ADD     BX,OFFSET TRKTAB        ;Get current track
        INC     BYTE PTR CS:[BX]        ;Next track
        POP     BX
        RET

HOME:
ASSUME  DS:NOTHING
        MOV     BL,3
TRYHOM:
        MOV     AL,0CH+STPSPD   ;Restore with verify
        CALL    DCOM
        AND     AL,98H
        JZ      RET3
        JS      HOMERR          ;No retries if not ready
        PUSH    AX              ;Save real error code
        MOV     AL,58H+STPSPD   ;Step in w/ update no verify
        CALL    DCOM
        DEC     BL
        POP     AX              ;Get back real error code
        JNZ     TRYHOM
HOMERR:
        STC
RET3:   RET

CHKNEW:
ASSUME  DS:NOTHING
        MOV     AL,[DRIVE]      ;Get disk drive number
        MOV     AH,AL
        XCHG    AL,[CURDRV]     ;Make new drive current.
        CMP     AL,AH           ;Changing drives?
        JZ      RET1            ;No
; If changing drives, unload head so the head load delay
;one-shot will fire again. Do it by seeking to the same
;track with the H bit reset.
;
        IN      AL,DISK+1       ;Get current track number
        OUT     DISK+3,AL       ;Make it the track to seek
        MOV     AL,10H          ;Seek and unload head

DCOM:
ASSUME  DS:NOTHING
        OUT     DISK,AL
        PUSH    AX
        AAM                     ;Delay 10 microseconds
        POP     AX
GETSTAT:
        IN      AL,DISK+4
        TEST    AL,DONEBIT
        JZ      GETSTAT
        IN      AL,DISK
RET1:   RET

DRIVESEL:
ASSUME  DS:NOTHING
;Select the drive based on current info
;Only AL altered
        MOV     AL,[DRIVE]
        OR      AL,SMALBIT + DDBIT      ;5 1/4" IBM PC disks
        CMP     [CURHD],0
        JZ      GOTHEAD
        OR      AL,BACKBIT      ;Select side 1
GOTHEAD:
        OUT     DISK+4,AL       ;Select drive and side
        RET

GETERRCD:
ASSUME  DS:NOTHING
        PUSH    CX
        PUSH    ES
        PUSH    DI
        PUSH    CS
        POP     ES              ;Make ES the local segment
        MOV     CS:[LSTERR],AL  ;Terminate list w/ error code
        MOV     CX,NUMERR       ;Number of error conditions
        MOV     DI,OFFSET ERRIN ;Point to error conditions
        RECRE   SCASB
        MOV     AL,NUMERR-1[DI] ;Get translation
        STC                     ;Flag error condition
        POP     DI
        POP     ES
        POP     CX
        RET                     ;and return

;*********************************************************
;       BPB for an IBM floppy disk, Various parameters are
;       patched by BUILDBP to reflect the type of Media
;       inserted
;       This is a 9-sector, single-side BPB
DRVBPB:
        DW      512          ;Physical sector size in bytes
        DB      1            ;Sectors/allocation unit
        DW      1            ;Reserved sectors for DOS
        DB      2            ;# of allocation tables
        DW      64           ;Number directory entries
        DW      9*40         ;Number 512-byte sectors
        DB      11111100B    ;Media descriptor
        DW      2            ;Number of FAT sectors
        DW      9            ;Sector limit
        DW      1            ;Head limit

INITAB  DW      DRVBPB               ;Up to four units
        DW      DRVBPB
        DW      DRVBPB
        DW      DRVBPB

ERRIN:  ;Disk errors returned from the controller
        DB      80H             ;No response
        DB      40H             ;Write protect
        DB      20H             ;Write Fault
        DB      10H             ;SEEK error
        DB      8               ;CRC error
        DB      1               ;Mapped from 10H
                                ;(record not found) on Read
LSTERR  DB      0               ;All other errors

ERROUT: ;Returned error codes corresponding to above
        DB      2               ;No response
        DB      0               ;Write Attempt
                                ;On Write-protected disk
        DB      0AH             ;Write fault
        DB      6               ;SEEK Failure
        DB      4               ;Bad CRC
        DB      8               ;Sector not found
        DB      12              ;General error

DRV$INIT:
;
; Determine number of physical drives by reading config.sys
;
ASSUME  DS:CODE
        PUSH    DS
        LDS     SI,[PTRSAV]
ASSUME  DS:NOTHING
        LDS     SI,DWORD PTR [SI.COUNT] ;DS:SI points to
                                        ;config.sys
SCAN_LOOP:
        CALL    SCAN_SWITCH
        MOV     AL,CL
        OR      AL,AL
        JZ      SCAN4
        CMP     AL,"s"
        JZ      SCAN4

WERROR: POP     DS
ASSUME  DS:CODE
        MOV     DX,OFFSET ERRMSG2
WERROR2: MOV    AH,9
        INT     21H
        XOR     AX,AX
        PUSH    AX                      ;No units
        JMP     SHORT ABORT

BADNDRV:
        POP     DS
        MOV     DX,OFFSET ERRMSG1
        JMP     WERROR2

SCAN4:
ASSUME  DS:NOTHING
;BX is number of floppies
        OR      BX,BX
        JZ      BADNDRV                 ;User error
        CMP     BX,4
        JA      BADNDRV                 ;User error
        POP     DS
ASSUME  DS:CODE
        PUSH    BX                      ;Save unit count
ABORT:  LDS     BX,[PTRSAV]
ASSUME  DS:NOTHING
        POP     AX
        MOV     BYTE PTR [BX].MEDIA,AL           ;Unit count
        MOV     [DRVMAX],AL
        MOV     WORD PTR [BX].TRANS,OFFSET DRV$INIT ;SET
                                                ;BREAK ADDRESS
        MOV     [BX].TRANS+2,CS
        MOV     WORD PTR [BX].COUNT,OFFSET INITAB
                                    ;SET POINTER TO BPB ARRAY
        MOV     [BX].ceOUNT+2,CS
        JMP     EXIT
;
; Put switch in CL, value in BX
;
SCAN_SWITCH:
        XOR     BX,BX
        MOV     CX,BX
        LODSB
        CMP     AL,10
        JZ      NUMRET
        CMP     AL,"-"
        JZ      GOT_SWITCH
        CMP     AL,"/"
        JNZ     SCAN_SWITCH
GOT_SWITCH:
        CMP     BYTE PTR [SI+1],":"
        JNZ     TERROR
        LODSB
        OR      AL,20H          ; Convert to lowercase
        MOV     CL,AL           ; Get switch
        LODSB                   ; Skip ":"
;
;  Get number pointed to by [SI]
;
;  Wipes out AX,DX only     BX returns number
;
GETNUM1:LODSB
        SUB     AL,"0"
        JB      CHKRET
        CMP     AL,9
        JA      CHKRET
        CBW
        XCHG    AX,BX
        MOV     DX,10
        MUL     DX
        ADD     BX,AX
        JMP     GETNUM1

CHKRET: ADD     AL,"0"
        CMP     AL," "
        JBE     NUMRET
        CMP     AL,"-"
        JZ      NUMRET
        CMP     AL,"/"
        JZ      NUMRET
TERROR:
        POP     DS              ; Get rid of return address
        JMP     WERROR
NUMRET: DEC     SI
        RET

ERRMSG1 DB      "SMLDRV: Bad number of drives",13,10,"$"
ERRMSG2 DB      "SMLDRV: Invalid parameter",13,10,"$"
CODE    ENDS
        END


Character Device Driver

The following program illustrates a character device driver program.


;******************** A Character Device *******************

Title   VT52 Console for 2.0    (IBM)

;::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
;
;       IBM Addresses for I/O
;
;::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

        CR=13              ;Carriage-Return
        BACKSP=8           ;BACKSPACE
        ESC=1BH
        BRKADR=6CH         ;006C  Break vector address
        ASNMAX=200         ;Size of key assignment buffer

CODE    SEGMENT BYTE

    ASSUME CS:CODE,DS:NOTHING,ES:NOTHING
;----------------------------------------------------------
;
;       C O N - Console Device Driver
;
CONDEV:                            ;Header for device "CON"
        DW      -1,-1
        DW      1000000000010011B  ;CON IN AND CON OUT
        DW      STRATEGY
        DW      ENTRY
        DB      'CON     '

;-----------------------------------------------------------
;
;       Command JUMP Tables
CONTBL:
        DW      CON$INIT
        DW      EXIT
        DW      EXIT
        DW      CMDERR
        DW      CON$READ
        DW      CON$RDND
        DW      EXIT
        DW      CON$FLSH
        DW      CON$WRIT
        DW      CON$WRIT
        DW      EXIT
        DW      EXIT

CMDTABL DB      'A'
        DW      CUU             ;cursor up
        DB      'B'
        DW      CUD             ;cursor down
        DB      'C'
        DW      CUF             ;cursor forward
        DB      'D'
        DW      CUB             ;cursor back
        DB      'H'
        DW      CUH             ;cursor position
        DB      'J'
        DW      ED              ;erase display
        DB      'K'
        DW      EL              ;erase line
        DB      'Y'
        DW      CUP             ;cursor position
        DB      'j'
        DW      PSCP            ;save cursor position
        DB      'k'
        DW      PRCP            ;restore cursor position
        DB      'y'
        DW      RM              ;reset mode
        DB      'x'
        DW      SM              ;set mode
        DB      00

PAGE
;---------------------------------------------------
;
;       Device entry point
;
CMDLEN  =       0       ;Length of this command
UNIT    =       1       ;Subunit Specified
CMD     =       2       ;Command Code
STATUS  =       3       ;Status
MEDIA   =       13      ;Media Descriptor
TRANS   =       14      ;Transfer Address
COUNT   =       18      ;Count of blocks or characters
START   =       20      ;First block to transfer

PTRSAV  DD      0

STRATP  PROC    FAR

STRATEGY:
        MOV     WORD PTR CS:[PTRSAV],BX
        MOV     WORD PTR CS:[PTRSAV+2],ES
        RET

STRATP  ENDP

ENTRY:
        PUSH    SI
        PUSH    AX
        PUSH    CX
        PUSH    DX
        PUSH    DI
        PUSH    BP
        PUSH    DS
        PUSH    ES
        PUSH    BX

        LDS     BX,CS:[PTRSAV]  ;GET POINTER TO I/O PACKET

        MOV     CX,WORD PTR DS:[BX].COUNT    ;CX = COUNT

        MOV     AL,BYTE PTR DS:[BX].CMD
        CBW
        MOV     SI,OFFSET CONTBL
        ADD     SI,AX
        ADD     SI,AX
        CMP     AL,11
        JA      CMDERR

        LES     DI,DWORD PTR DS:[BX].TRANS

        PUSH    CS
        POP     DS

        ASSUME  DS:CODE

        JMP     WORD PTR [SI]              ;GO DO COMMAND

PAGE
;=====================================================
;=
;=      Subroutines Shared by Multiple Devices
;=
;=====================================================
;-----------------------------------------------------
;
;       EXIT - All routines return through this path
;
BUS$EXIT:                               ;Device Busy Exit
        MOV     AH,00000011B
        JMP     SHORT ERR1

CMDERR:
        MOV     AL,3                ;Unknown command error

ERR$EXIT:
        MOV     AH,10000001B            ;Mark error Return
        JMP     SHORT ERR1

EXITP   PROC    FAR

EXIT:   MOV     AH,00000001B
ERR1:   LDS     BX,CS:[PTRSAV]
        MOV     WORD PTR [BX].STATUS,AX ;Mark
                                        ;Operation Complete

        POP     BX
        POP     ES
        POP     DS
        POP     BP
        POP     DI
        POP     DX
        POP     CX
        POP     AX
        POP     SI
        RET                        ;Restore REGS and Return
EXITP   ENDP
;-----------------------------------------------
;
;       BREAK Key Handling
;
BREAK:
        MOV     CS:ALTAH,3         ;Indicate BREAK key Set
INTRET: IRET

PAGE
;
;       WARNING - Variables are very order dependent,
                    so be careful when adding new ones!
;
WRAP    DB      0               ; 0 = WRAP, 1 = NO WRAP
STATE   DW      S1
MODE    DB      3
MAXCOL  DB      79
COL     DB      0
ROW     DB      0
SAVCR   DW      0
ALTAH   DB      0               ;Special key handling

;-------------------------------------------------------
;
;    CHROUT - Write out Char in AL using current attribute
;
ATTRW   LABEL   WORD
ATTR    DB      00000111B       ;Character Attribute
BPAGE   DB      0               ;Base Page
base    dw      0b800h

chrout: cmp     al,13
        jnz     trylf
        mov     [col],0
        jmp     short setit

trylf:  cmp     al,10
        jz      lf
        cmp     al,7
        jnz     tryback
torom:
        mov     bx,[attrw]
        and     bl,7
        mov     ah,14
        int     10h
ret5:   ret

tryback:
        cmp     al,8
        jnz     outchr
        cmp     [col],0
        jz      ret5
        dec     [col]
        jmp     short setit

outchr:
        mov     bx,[attrw]
        mov     cx,1
        mov     ah,9
        int     10h
        inc     [col]
        mov     al,[col]
        cmp     al,[maxcol]
        jbe     setit
        cmp     [wrap],0
        jz      outchr1
        dec     [col]
        ret
outchr1:
        mov     [col],0
lf:     inc     [row]
        cmp     [row],24
        jb      setit
        mov     [row],23
        call    scroll

setit:  mov     dh,row
        mov     dl,col
        xor     bh,bh
        mov     ah,2
        int     10h
        ret

scroll: call    getmod
        cmp     al,2
        jz      myscroll
        cmp     al,3
        jz      myscroll
        mov     al,10
        jmp     torom
myscroll:
        mov     bh,[attr]
        mov     bl,' '
        mov     bp,80
        mov     ax,[base]
        mov     es,ax
        mov     ds,ax
        xor     di,di
        mov     si,160
        mov     cx,23*80
        cld
        cmp     ax,0b800h
        jz      colorcard

        rep     movsw
        mov     ax,bx
        mov     cx,bp
        rep     stosw
sret:   push    cs
        pop     ds
        ret

colorcard:
        mov     dx,3dah
wait2:  in      al,dx
        test    al,8
        jz      wait2
        mov     al,25h
        mov     dx,3d8h
        out     dx,al           ;turn off video
        rep     movsw
        mov     ax,bx
        mov     cx,bp
        rep     stosw
        mov     al,29h
        mov     dx,3d8h
        out     dx,al           ;turn on video
        jmp     sret

GETMOD: MOV     AH,15
        INT     16             ;get column information
        MOV     BPAGE,BH
        DEC     AH
        MOV     WORD PTR MODE,AX
        RET
;------------------------------------------------------
;
;       Console Read Routine
;
CON$READ:
        JCXZ    CON$EXIT
CON$LOOP:
        PUSH    CX              ;Save Count
        CALL    CHRIN           ;Get Char in AL
        POP     CX
        STOSB                   ;Store Char at ES:DI
        LOOP    CON$LOOP
CON$EXIT:
        JMP     EXIT
;---------------------------------------------------------
;
;       Input Single Char into AL
;
CHRIN:  XOR     AX,AX
        XCHG    AL,ALTAH     ;Get Character & Zero ALTAH
        OR      AL,AL
        JNZ     KEYRET

INAGN:  XOR     AH,AH
        INT     22
ALT10:
        OR      AX,AX       ;Check for non-key after BREAK
        JZ      INAGN
        OR      AL,AL       ;Special case?
        JNZ     KEYRET
        MOV     ALTAH,AH        ;Store special key
KEYRET: RET
;----------------------------------------------------------
;
;       Keyboard Non-descructive Read, No Wait
;
CON$RDND:
        MOV     AL,[ALTAH]
        OR      AL,AL
        JNZ     RDEXIT

RD1:    MOV     AH,1
        INT     22
        JZ      CONBUS
        OR      AX,AX
        JNZ     RDEXIT
        MOV     AH,0
        INT     22
        JMP     CON$RDND

RDEXIT: LDS     BX,[PTRSAV]
        MOV     [BX].MEDIA,AL
EXVEC:  JMP     EXIT
CONBUS: JMP     BUS$EXIT
;----------------------------------------------------------
;
;       Keyboard Flush Routine
;
CON$FLSH:
        MOV     [ALTAH],0         ;Clear out holding buffer

        PUSH    DS
        XOR     BP,BP
        MOV     DS,BP                   ;Select segment 0
        MOV     DS:BYTE PTR 41AH,1EH    ;Reset KB queue head
                                        ;pointer
        MOV     DS:BYTE PTR 41CH,1EH    ;Reset tail pointer
        POP     DS
        JMP     EXVEC
;----------------------------------------------------------
;
;       Console Write Routine
;
CON$WRIT:
        JCXZ    EXVEC
        PUSH    CX
        MOV     AH,3            ;Set current cursor position
        XOR     BX,BX
        INT     16
        MOV     WORD PTR [COL],DX
        POP     CX

CON$LP: MOV     AL,ES:[DI]      ;Get Char
        INC     DI
        CALL    OUTC            ;Output Char
        LOOP    CON$LP          ;Repeat until all through
        JMP     EXVEC

COUT:   STI
        PUSH    DS
        PUSH    CS
        POP     DS
        CALL    OUTC
        POP     DS
        IRET

OUTC:   PUSH    AX
        PUSH    CX
        PUSH    DX
        PUSH    SI
        PUSH    DI
        PUSH    ES
        PUSH    BP
        CALL    VIDEO
        POP     BP
        POP     ES
        POP     DI
        POP     SI
        POP     DX
        POP     CX
        POP     AX
        RET

;----------------------------------------------------------
;
;       Output Single Char in AL to Video Device
;
VIDEO:  MOV     SI,OFFSET STATE
        JMP     [SI]

S1:     CMP     AL,ESC                 ;Escape sequence?
        JNZ     S1B
        MOV     WORD PTR [SI],OFFSET S2
        RET

S1B:    CALL    CHROUT
S1A:    MOV     WORD PTR [STATE],OFFSET S1
        RET

S2:     PUSH    AX
        CALL    GETMOD
        POP     AX
        MOV     BX,OFFSET CMDTABL-3
S7A:    ADD     BX,3
        CMP     BYTE PTR [BX],0
        JZ      S1A
        CMP     BYTE PTR [BX],AL
        JNZ     S7A
        JMP     WORD PTR [BX+1]

MOVCUR: CMP     BYTE PTR [BX],AH
        JZ      SETCUR
        ADD     BYTE PTR [BX],AL
SETCUR: MOV     DX,WORD PTR COL
        XOR     BX,BX
        MOV     AH,2
        INT     16
        JMP     S1A

CUP:    MOV     WORD PTR [SI],OFFSET CUP1
        RET
CUP1:   SUB     AL,32
        MOV     BYTE PTR [ROW],AL
        MOV     WORD PTR [SI],OFFSET CUP2
        RET
CUP2:   SUB     AL,32
        MOV     BYTE PTR [COL],AL
        JMP     SETCUR

SM:     MOV     WORD PTR [SI],OFFSET S1A
        RET

CUH:    MOV     WORD PTR COL,0
        JMP     SETCUR

CUF:    MOV     AH,MAXCOL
        MOV     AL,1
CUF1:   MOV     BX,OFFSET COL
        JMP     MOVCUR

CUB:    MOV     AX,00FFH
        JMP     CUF1

CUU:    MOV     AX,00FFH
CUU1:   MOV     BX,OFFSET ROW
        JMP     MOVCUR

CUD:    MOV     AX,23*256+1
        JMP     CUU1

PSCP:   MOV     AX,WORD PTR COL
        MOV     SAVCR,AX
        JMP     SETCUR

PRCP:   MOV     AX,SAVCR
        MOV     WORD PTR COL,AX
        JMP     SETCUR

ED:     CMP     BYTE PTR [ROW],24
        JAE     EL1

        MOV     CX,WORD PTR COL
        MOV     DH,24
        JMP     ERASE

EL1:    MOV     BYTE PTR [COL],0
EL:     MOV     CX,WORD PTR [COL]
EL2:    MOV     DH,CH
ERASE:  MOV     DL,MAXCOL
        MOV     BH,ATTR
        MOV     AX,0600H
        INT     16
ED3:    JMP     SETCUR


RM:     MOV     WORD PTR [SI],OFFSET RM1
        RET
RM1:    XOR     CX,CX
        MOV     CH,24
        JMP     EL2

CON$INIT:
        int     11h
        and     al,00110000b
        cmp     al,00110000b
        jnz     iscolor
        mov     [base],0b000h          ;look for bw card
iscolor:
        cmp     al,00010000b           ;look for 40 col mode
        ja      setbrk
        mov     [mode],0
        mov     [maxcol],39

setbrk:
        XOR     BX,BX
        MOV     DS,BX
        MOV     BX,BRKADR
        MOV     WORD PTR [BX],OFFSET BREAK
        MOV     WORD PTR [BX+2],CS

        MOV     BX,29H*4
        MOV     WORD PTR [BX],OFFSET COUT
        MOV     WORD PTR [BX+2],CS

        LDS     BX,CS:[PTRSAV]
        MOV     WORD PTR [BX].TRANS,OFFSET CON$INIT
                                ;SET BREAK ADDRESS
        MOV     [BX].TRANS+2,CS
        JMP     EXIT

CODE    ENDS
        END



Chapter 3  MS-DOS Technical Information

───────────────────────────────────────────────────────────────────────────

3.1  Introduction

3.2  MS-DOS Initialization

3.3  The Command Processor

3.4  MS-DOS Disk Allocation

3.5  MS-DOS Disk Directory

3.6  File Allocation Table (FAT)

        3.6.1  How to Use the FAT (12-Bit FAT Entries)

        3.6.2  How to Use the FAT (16-Bit FAT Entries)

3.7  MS-DOS Standard Disk Formats



3.1  Introduction


This chapter describes how MS-DOS initializes and how it allocates disk
space for the root directory, the File Allocation Tables (FAT), and the
data area. For programmers writing installable device drivers, this chapter
explains MS-DOS disk directory entries and File Allocation Tables. At the
end of the chapter, Tables 3.1 and 3.2 describe MS-DOS standard formats
for floppy disks.


3.2  MS-DOS Initialization


MS-DOS initialization consists of several steps. When you reset your
computer or turn on its power, the ROM (Read Only Memory) BIOS is invoked
and performs hardware checks and initialization. The ROM BIOS then examines
drive A for the boot sector. If it locates a boot sector, the ROM BIOS
reads it into low memory and gives it control. If it doesn't find the boot
sector, the ROM BIOS then looks in the active partition of the hard disk.
If it still doesn't find the boot sector, the ROM BIOS then invokes
ROM BASIC.

On a removable disk (3.5-inch, 5.25-inch, or 8-inch disk), the boot
sector sector is always located on track 0, sector 1, side 0 of the disk.
On a hard disk, the boot sector begins on the first sector of the MS-DOS
partition. The hard disk boot sector also includes a partition table. This
table identifies the active MS-DOS partition and any other partitions,
such as an extended MS-DOS partition, on the hard disk. Note that extended
MS-DOS partitions are not bootable.

The boot sector then reads the following files, in the order listed:

io.sys
msdos.sys

───────────────────────────────────────────────────────────────────────────
Note
    Versions of MS-DOS prior to 3.3 required the io.sys file to be
    contiguous. This is no longer a requirement.
───────────────────────────────────────────────────────────────────────────

Next, the system initialization routine SYSINIT loads all of the resident
device drivers. Then, it searches for a config.sys file on the boot disk.
SYSINIT allocates memory for buffers and files, based on settings in the
config.sys file, or system default settings. If the config.sys file
specifies any installable device drivers, these are installed next.

Finally, SYSINIT executes the MS-DOS command processor, command.com.


3.3  The Command Processor


The command processor command.com consists of three parts:

    ■  A resident part resides in memory immediately following msdos.sys
        and its data area. This part contains routines to process Interrupts
        22H (Terminate Process Exit Address), 23H (CONTROL-C Exit Address),
        and 24H (Critical-Error-Handler Address), as well as a routine to
        reload the transient part, if needed. All standard MS-DOS error
        handling is done within this part of command.com. This includes
        displaying error messages and processing the Abort, Retry, Fail,
        or Ignore messages.

    ■  An initialization part follows the resident part. During startup,
        the initialization part is given control; it contains the processor
        setup routine in the autoexec.bat file. The initialization part
        determines the segment address at which programs can be loaded, and
        because it is no longer needed, is overlaid by the first program
        that command.com loads.

    ■  A transient part is loaded at the high end of memory. This part
        contains all the internal command processors and the batch file
        processor.

        The transient part of the command processor produces the system
        prompt (A>, for example), reads commands from the keyboard (or from
        batch files), and causes them to be executed. For external commands,
        the transient part builds a command line and issues Function 4BH
        (Load and Execute Program) to load and transfer control to the
        program.


3.4  MS-DOS Disk Allocation


The area on a disk partitioned for use by MS-DOS is formatted as follows:

    1.  Reserved area--variable size

    2.  First copy of File Allocation Table--variable size

    3.  Additional copies of File Allocation Table--variable size
        (optional)

    4.  Root directory--variable size

    5.  File data area

Space for a file in the data area is not preallocated. The space is
allocated one cluster at a time. A cluster consists of one or more
consecutive sectors (the number of sectors in a cluster must be a
power of 2); the cluster size is determined at format time. All the
clusters for a file are "chained" together in the File Allocation Table,
discussed in greater detail in Section 3.5, "File Allocation Table (FAT)."
MS-DOS normally keeps a second copy of the FAT for consistency, except in
the case of reliable storage such as a virtual RAM disk. Should the disk
develop a bad sector in the middle of the first FAT, MS-DOS can use the
second. This avoids loss of data due to an unreadable FAT.


3.5  MS-DOS Disk Directory

The format utility builds the root directory for all disks. This
directory's location on the disk and the maximum number of entries are
dependent on the media. Specifications for standard removable-disk formats
are outlined later in this chapter. Note, however, that MS-DOS regards
directories, other than the root directory, as files, so there is no limit
to the number of files that the subdirectories under the root directory
may contain.

All directory entries are 32 bytes in length and are in the following
format (note that byte offsets are in hexadecimal):

╓┌───────┌───────────────────────────────────────────────────────────────────╖
Byte    Function
───────────────────────────────────────────────────────────────────────────
0-7     Filename. Eight characters, left-aligned and padded, if necessary,
        with blanks. The first byte of this field indicates the file
        status as follows:

        Byte Status
        ───────────────────────────────────────────────────────────────────
        00H  The directory entry has never been used. This is used to
                limit the length of directory searches, for performance
                reasons.

        05H  The first character of the filename contains an E5H character.
Byte    Function
        05H  The first character of the filename contains an E5H character.

        2EH  The entry is for a directory. If the second byte is also 2EH,
                the cluster field contains the cluster number of this
                directory's parent directory (0000H if the parent directory is
                the root directory). Otherwise, bytes 01H through 0AH are all
                spaces, and the cluster field contains the cluster number of
                this directory.

        E5H  The file was used, but it has since been erased.

        Any other character is the first character of a filename.

8-0A    Filename extension.

0B      File attribute. The attribute byte is mapped as follows (values
        are in hexadecimal):

        Byte Contents
        ───────────────────────────────────────────────────────────────────
Byte    Function
        ───────────────────────────────────────────────────────────────────
        01H  File is marked read-only. An attempt to open the file for
                writing using Function 3DH (Open Handle) results in an error
                code being returned. This value can be used in programs along
                with the other attributes in this list. Attempts to delete
                the file with Function 13H (Delete File) or Function 41H
                (Delete Directory Entry) will also fail.

        02H  Hidden file. The file is excluded from normal directory
                searches.

        04H  System file. The file is excluded from normal directory
                searches.

        08H  The entry contains the volume label in the first 11 bytes.
                The entry contains no other usable information (except date
                and time of creation), and may exist only in the root
                directory.

        10H  The entry defines a subdirectory, and is excluded from
Byte    Function
        10H  The entry defines a subdirectory, and is excluded from
                normal directory searches.

        20H  Archive bit. The bit is set to "on" whenever the file
                has been written to and closed.

                Note:  The system files (io.sys and msdos.sys) are marked
                as read-only, hidden, and system files. Files can be marked
                hidden when they are created. Also, you may change the read-
                only, hidden, system, and archive attributes through Function
                43H (Get/Set File Attributes).

0C-15   Reserved.

16-17   Time the file was created or last updated. The hour, minutes, and
        seconds are mapped into two bytes as follows (bit 7 on the left,
        0 on the right):

        Offset 17H
        | H | H | H | H | H | M | M | M |
Byte    Function
        | H | H | H | H | H | M | M | M |

        Offset 16H
        | M | M | M | S | S | S | S | S |

        where:

        H is the binary number of hours (0-23).
        M is the binary number of minutes (0-59).
        S is the binary number of two-second increments.

18-19   Date the file was created or last updated. The year, month,
        and day are mapped into two bytes as follows:

        Offset 19H
        | Y | Y | Y | Y | Y | Y | Y | M |

        Offset 18H
        | M | M | M | D | D | D | D | D |

Byte    Function

        where:

        Y is the year, 0-119 (1980-2099).
        M is the month (1-12).
        D is the day of the month (1-31).

1A-1B   Starting cluster; the number of the first cluster in the file.

        ■ Note that the first cluster for data space on all disks
            is cluster 002.

        ■ The cluster number is stored with the least significant
            byte first.

        ■ For details about converting cluster numbers to
            logical sector numbers, see Sections 3.6.1 and 3.6.2.

1C-1F   File size in bytes. The first word of this four-byte field
        is the low-order part of the size.
Byte    Function
        is the low-order part of the size.


3.6  File Allocation Table (FAT)


This section explains how MS-DOS allocates disk space in the data area
for a file by using the File Allocation Table to convert the clusters of a
file to logical sector numbers. The device driver is then responsible for
locating the logical sector on the disk. Programs should use the MS-DOS
file management function calls for accessing files. Programs that access
the FAT are not guaranteed to be upwardly-compatible with future releases
of MS-DOS. The following information is useful to system programmers who
wish to write installable device drivers.

The File Allocation Table is an array of 12-bit entries (1.5 bytes) for
each cluster on the disk. For disks containing more than 4085 clusters,
a 16-bit FAT entry is used.

The first two FAT entries are reserved; however, the device driver may
use the first byte as a FAT ID byte for determining media. For hard disks,
the value of this byte is F8H. See Tables 3.1 and 3.2 for the media byte
descriptors used for 8-inch, 5.25-inch, and 3.5-inch disks.

The third FAT entry, which starts at byte offset 4, begins the mapping
of the data area (cluster 002). The operating system does not always
sequentially write (to the disk) files in the data area. Instead, the
system allocates the data area one cluster at a time, skipping over
clusters it has already allocated. The first free cluster following
the last cluster allocated for that file is the next cluster allocated,
regardless of its physical location on the disk. This permits the most
efficient use of disk space, since if you erase old files, you can free
clusters, which the operating system can then allocate for new files.

Each FAT entry contains three or four hexadecimal characters,
depending on whether it is a 12-bit or 16-bit entry:

Entry       Contents
───────────────────────────────────────────────────────────────────────────
(0)000      If the cluster is unused and available.

(F)FF7      The cluster has a bad sector in it if it is not part of any
            cluster chain. MS-DOS will not allocate such a cluster. So for
            its report, the chkdsk command counts the number of bad
            clusters, which are not part of any allocation chain.

(F)FF8-FFF  The last cluster of a file.

(X)XXX      Any other characters that are the cluster number of the next
            cluster in the file. The number of the first cluster in the
            file is in the file's directory entry.

The File Allocation Table always begins on the first sector after the
reserved sectors. If the FAT is larger than one sector, the sectors are
contiguous. The operating system usually writes two copies of the FAT to
preserve data integrity. MS-DOS reads the FAT into one of its buffers,
whenever needed (open, read, write, etc.). The operating system also gives
this buffer a high priority to keep it in memory as long as possible.


3.6.1  How to Use the FAT (12-Bit FAT Entries)

To get the starting cluster of a file, examine its directory entry (in the
FAT). Then, to locate each subsequent cluster of the file, follow these
steps:

    1.  Multiply the cluster number just used by 1.5 (each FAT entry is
        1.5 bytes in length).

    2.  The whole part of the product is an offset into the FAT, pointing
        to the entry that maps the cluster just used. That entry contains
        the cluster number of the next cluster of the file.

    3.  Use a MOV instruction to move the word at the calculated FAT offset
        into a register.

    4.  If the last cluster used was an even number, keep the low-order
        12 bits of the register by using the AND operator with 0FFFH and
        the register. If the last cluster used was an odd number, keep
        the high-order 12 bits by using the SHR instruction to shift the
        register right four bits.

    5.  If the resultant 12 bits are 0FF8H-0FFFH, the file contains no more
        clusters. Otherwise, the 12 bits contain the number of the next
        cluster in the file.

To convert the cluster to a logical sector number (relative sector,
such as that used by Interrupts 25H and 26H (Absolute Disk Read/Write) and
by debug), follow these steps:

    1.  Subtract two from the cluster number.

    2.  Multiply the result by the number of sectors per cluster.

    3.  To this result, add the logical sector number of the beginning
        of the data area.


3.6.2  How to Use the FAT (16-Bit FAT Entries)

To get the starting cluster of a file, examine its directory entry (in the
FAT). Then, to find the next file cluster, follow these steps:

    1.  Multiply the cluster number last used by 2 (each FAT entry is
        2 bytes).

    2.  Use a MOV WORD instruction to move the word at the calculated FAT
        offset into a register.

    3.  If the resultant 16 bits are 0FFF8-0FFFH, no more clusters are in
        the file. Otherwise, the 16 bits contain the number of the next
        cluster in the file.


3.7  MS-DOS Standard Disk Formats


MS-DOS arranges data clusters on a disk to minimize head movement.
MS-DOS then allocates all the space on one track (or cylinder) before
moving to the next. It uses the sequential sectors on the lowest-numbered
head, then all the sectors on the next head, and so on, until it has used
all the sectors on all the heads of the track.

The size of the MS-DOS partition on a hard disk determines the size
of the FAT and root directory. Likewise, the type of floppy disk (tracks
per side, sectors per track, etc.) determines how MS-DOS uses the disk.
The removable disk formats listed in Tables 3.1 and 3.2 are standard and
should be readable in the appropriate standard drive.


Table 3.1
MS-DOS Standard Removable-Disk Formats
╓┌─────────────────────────────┌──────────────────────────┌──────────────────╖
Disk Size in inches                     5.25                     8
───────────────────────────── ────────────────────────── ──────────────────
WORD no. heads                  1     1     2     2         1     2     1
Tracks/side                    40    40    40    40        77    77    77
WORD sectors/track              8     9     8     9        26    26     8
WORD bytes/sector             512   512   512   512       128   128   024
BYTE sectors/cluster            1     1     2     2         4     4     1
WORD reserved sectors           1     1     1     1         1     4     1
Byte no. FATs                   2     2     2     2         2     2     2
WORD root directory entries    64    64   112   112        68    68   192
WORD no. sectors              320   360   640   720      2002  2002   616
BYTE media descriptor          FE    FC    FF    FD       FE☼1   FD   FE☼1
WORD sectors/FAT                1     2     1     2         6     6     2
Disk Size in inches                     5.25                     8
WORD sectors/FAT                1     2     1     2         6     6     2
WORD no. hidden sectors         0     0     0     0         0     0     0


Table 3.2
MS-DOS Standard Removable Disk Formats (High-Density)
╓┌─────────────────────────┌────────────────────────────┌───────┌────────────╖
Disk Size in inches              3.5 or 5.25             3.5      5.25
───────────────────────── ──────────────────────────── ─────── ────────────
WORD no. heads              1     2      2      2         2         2
Tracks/side                80    80     80     80        80        80
WORD sectors/track          8     9      8      9        18        15
WORD bytes/sector         512   512    512    512       512       512
BYTE sectors/cluster        2     2      2      2         1         1
WORD reserved sectors       1     1      1      1         1         1
BYTE no. FATs               2     2      2      2         2         2
WORD root dir entries     112   112    112    112       224       224
WORD no. sectors          640   720   1280   1440      2880      2400
BYTE media descriptor☼1    FA    FC     FB     F9        F0        F9
WORD sectors/FAT            1     2      2      3         9         7
Disk Size in inches              3.5 or 5.25             3.5      5.25
WORD sectors/FAT            1     2      2      3         9         7
WORD no. hidden sectors     0     0      0      0         0         0




Chapter 4  MS-DOS Control Blocks and Work Areas

───────────────────────────────────────────────────────────────────────────

4.1  Introduction

4.2  Typical Contents of an MS-DOS Memory Map

4.3  MS-DOS Program Segment



4.1  Introduction


This chapter describes a typical MS-DOS memory map and explains how a
program is loaded into memory. It also describes the structure of an
MS-DOS program segment and the contents of register segments for .exe
and .com program files.


4.2  Typical Contents of an MS-DOS Memory Map


A typical MS-DOS memory map contains the following information:

    +-----------------------------------------------------+
    |             ROM and Video Buffers                   |
    +-----------------------------------------------------+
    |          Transient Part of COMMAND.COM              |
    +-----------------------------------------------------+
    |                                                     |
    |                                                     |
    |                                                     |
    |                                                     |
    |              Transient Program Area                 |
    |- - - - - - - - - - - - - - - - - - - - - - - - - - -|
    |                                                     |
    |                                                     |
    |                                                     |
    |                                                     |
    |          External Commands and Utilities            |
    |                                                     |
    +-----------------------------------------------------+
    |           Resident Part of COMMAND.COM              |
    +-----------------------------------------------------+
    | MS-DOS buffers, control areas, & installed drivers  |
    +-----------------------------------------------------+
    |                                                     |
    |                MSDOS.SYS                            |
    +-----------------------------------------------------+
    |        IO.SYS and resident device drivers           |
    +-----------------------------------------------------+
    |                 Interrupt Vectors                   |
    0 +-----------------------------------------------------+

During system initialization, MS-DOS loads the io.sys and msdos.sys files
into low memory (Note that in MS-DOS 3.3, these files are not required to
be written contiguously to the disk). The io.sys system file is the MS-DOS
interface to hardware. The msdos.sys system file includes MS-DOS interrupt
handlers, service routines (Interrupt 21H functions).

Next, the system initialization routine loads the resident and installable
device drivers. Above the installable device drivers, MS-DOS writes the
resident part of command.com. This part includes interrupt handlers for
Interrupts 22H (Terminate Process Exit Address), 23H (CONTROL-C Handler
Address), 24H (Critical-Error-Handler Address) and code to reload the
transient part. The transient part of command.com is reloaded into high
memory. It includes the command interpreter, the internal MS-DOS commands,
and the batch processor.

External command and utility (.com and .exe) files are loaded into the
transient program area. MS-DOS also allocates 256 bytes for user stack
used with .com files. User memory is allocated from the lowest end of
available memory that fulfills the allocation request.


4.3  MS-DOS Program Segment


When you type an external command or execute a program through Function 4BH
(Load and Execute Program, also called EXEC), MS-DOS determines the lowest
available free memory address to use as the start of the program. The
memory starting at this address is called the Program Segment.

The EXEC system call sets up the first 256 bytes of the Program Segment
for the program being loaded into memory. The program is then loaded
following this block. An .exe file with minalloc and maxalloc both set
to zero is loaded as high as possible.

At offset 0 within the Program Segment, MS-DOS builds the Program
Segment Prefix control block. The program returns from EXEC by one of
five methods:

    ■ By issuing an Interrupt 21H with AH=4CH

    ■ By issuing an Interrupt 21H with AH=31H (Keep Process)

    ■ By a long jump to offset 0 in the Program Segment Prefix

    ■ By issuing an Interrupt 20H with CS:0 pointing at the PSP

    ■ By issuing an Interrupt 21H with register AH=0 and with CS:0
        pointing at the PSP

───────────────────────────────────────────────────────────────────────────
Note
    The first two methods are preferred for functionality, compatibility,
    and efficiency in future versions of MS-DOS.
───────────────────────────────────────────────────────────────────────────

All five methods transfer control to the program that issued the EXEC call.
The first two methods return a completion code. They also restore the
addresses of Interrupts 22H, 23H, and 24H (Terminate Process Exit Address,
CONTROL-C Handler Address, and Critical-Error-Handler Address) from the
values saved in the Program Segment Prefix of the terminating program.
Control then passes to the terminate address.

If a program returns to command.com, control transfers to the resident
portion. If the program is a batch file (in process), it continues.
Otherwise, command.com performs a checksum on the transient part, reloads
it if necessary, issues the system prompt, and waits for you to type
another command.

When a program receives control, the following conditions are in effect:


For all programs:

    ■ The segment address of the passed environment is at offset 2CH
        in the Program Segment Prefix.

    ■ The environment is a series of ASCII strings (totaling less than
        32K) in the form:

        NAME=parameter

    ■ A byte of zeros terminates each string, and another byte of zeros
        terminates the set of strings.

        Following the last byte of zeros is a set of initial arguments
        that the operating system passes to a program. This set of
        arguments contains a word count followed by an ASCII string.
        If the file is in the current directory, the ASCII string
        contains the drive and pathname of the executable program as
        passed to the EXEC function call. If the file is not in the
        current directory, EXEC concatenates the name of the file with
        the name of the path. Programs may use this area to determine
        where the program was loaded.

    ■ The environment built by the command processor contains at least
        a comspec= string (the parameters on comspec define the path that
        MS-DOS uses to locate command.com on disk). The last path and
        prompt commands issued are also in the environment, along with any
        environment strings you have defined with the MS-DOS set command.

    ■ EXEC passes a copy of the invoking process environment. If your
        application uses a "keep process" concept, you should be aware
        that the copy of the environment passed to you is static. That
        is, it will not change even if you issue subsequent set, path,
        or prompt commands. Conversely, any modification of the passed
        environment by the application is not reflected in the parent
        process environment. For instance, a program cannot change the
        MS-DOS environment values as the set command does.

    ■ The Disk Transfer Address (DTA) is set to 80H (default DTA in the
        Program Segment Prefix). The Program Segment Prefix contains file
        control blocks at 5CH and 6CH. MS-DOS formats these blocks using
        the first two parameters that you typed when entering the command.
        If either parameter contained a pathname, then the corresponding
        FCB contains only the valid drive number. The filename field is
        not valid.

    ■ An unformatted parameter area at 81H contains all the characters
        typed after the command (including leading and embedded delimiters),
        with the byte at 80H set to the number of characters. If you type
        <, >, or parameters on the command line, they do not appear in this
        area (nor the filenames associated with them). Redirection of
        standard input and output is transparent to applications.

    ■ Offset 6 (one word) contains the number of bytes available in
        the segment.

    ■ Register AX indicates whether the drive specifiers (entered with
        the first two parameters) are valid, as follows:

        AL=FF if the first parameter contained an invalid drive specifier
        (otherwise AL=00)

        AH=FF if the second parameter contained an invalid drive specifier
        (otherwise AH=00)

    ■ Offset 2 (one word) contains the segment address of the first byte
        of unavailable memory. Programs must not modify addresses beyond
        this point unless these addresses were obtained by allocating
        memory via Function 48H (Allocate Memory).


For Executable (.exe) Programs:

    ■ DS and ES registers point to the Program Segment Prefix.

    ■ CS,IP,SS, and SP registers contain the values that Microsoft link
        sets in the .exe image.


For Executable (.com) Programs:

    ■ All four segment registers contain the segment address of the initial
        allocation block that starts with the Program Segment Prefix control
        block.

    ■ .com programs allocate all of user memory. If the program invokes
        another program through Function 4BH (EXEC), it must first free some
        memory through Function 4AH (Set Block) to provide space for the
        program being executed.

    ■ The Instruction Pointer (IP) is set to 100H.

    ■ The Stack Pointer register is set to the end of the program's
        segment. The segment size at offset 6 is reduced by 100H to allow
        for a stack of that size.

    ■ A .com program places a word of zeros on top of the stack. Then by
        doing a RET instruction last, your program can exit to command.com.
        This method assumes, however, that you have maintained your stack
        and code segments.

Figure 4.1 illustrates the format of the Program Segment Prefix. All
offsets are in hexadecimal.


                        (Offsets in Hex)
0 -----------------------------------------------------------
    |             | End of      |                             |
    |   INT 20H   | alloc.      |        Reserved             |
    |             | block       |         04H                 |
8 -----------------------------------------------------------
    |             |   Terminate address    |   CONTROL-C exit |
    |  Reserved   |       (IP, CS)         |   address (IP)   |
    |             |                        |                  |
10-----------------------------------------------------------
    |CONTROL-C   | Hard error exit address |                  |
    |exit        |       (IP, CS)          |                  |
    |address (CS)|                         |                  |
    ----------------------------------------                  |
    |                                                         |
    |                   Used by MS-DOS                        |
    |                                                         |
    |                         5CH                             |
    |                                                         |
    -----------------------------------------------------------
    |                                                         |
    |    Formatted Parameter Area 1 formatted as standard     |
    |                    unopened FCB 6CH                     |
    -----------------------------------------------------------
    |                                                         |
    |    Formatted Parameter Area 2 formatted as standard     |
    |     unopened FCB (overlaid if FCB at 5CH is opened)     |
80-----------------------------------------------------------
    |             Unformatted Parameter Area                  |
    |            (default Disk Transfer Area)                 |
    |       Initially contains command invocation line.       |
    -----------------------------------------------------------
100

                Figure 4.1  Program Segment Prefix


───────────────────────────────────────────────────────────────────────────
Important
    Programs must not alter any part of the Program Segment Prefix below
    offset 5CH.
───────────────────────────────────────────────────────────────────────────



Chapter 5  National Language Support

───────────────────────────────────────────────────────────────────────────

5.1  Introduction

5.2  National Language Support Calls

5.3  Font Files

        5.3.1  Font File Structure

                5.3.1.1  File Header

                5.3.1.2  Information Header

                5.3.1.3  Code Page Entry Header

                5.3.1.4  Font Data Header

                5.3.1.5  Font Header



5.1  Introduction


National language support for this version of MS-DOS 3.3 includes these
major features:

    ■ Country-dependent information

    ■ Support for national keyboard layouts

    ■ Programming interfaces for national language support

    ■ Utility commands

Country-dependent information is available on a per-country basis and
includes the following:

    ■ Time, date, and currency

    ■ Lowercase-to-uppercase character-conversion tables

    ■ Collating sequence for character sorting

    ■ Valid single-byte characters used in filenames

Selectable keyboard support for different keyboard layouts is provided.

The MS-DOS 3.3 programming interfaces for national language support allow
applications to use the country-dependent information just described.
To access this information, applications do not need to change the
current country code of the system.

Utility commands allow the user to select the keyboard layout and
system country code.

This version of MS-DOS does not support right-to-left national languages.


5.2  National Language Support Calls


The following function calls allow an application to tailor its operation
to the current country code and to accept or change the current code page.
A country code defines the country in which you live or work. MS-DOS
uses this code to prepare and assign default code pages for your system.
A code page is a table that defines the character set you are using.
A character set is a country-specific or language-specific group of
characters that are translated from the code page table and displayed
on your screen or printer. Each code page character set contains
256 characters.

The following function calls are also used by MS-DOS 3.3 to support
the National Language requirements:

    ■ Function 44H, Code 0CH (Generic IOCtl)--supports code page switching
        on a per-device basis.

    ■ Function 65H (Get Extended Country Information)--returns standard
        country information, and points to related case-map or collating
        tables.

    ■ Function 66H (Get/Set Global Code Page)--gets or sets the code page
        used by the kernel and by all devices.

These functions support access to country-dependent information, all
of which resides in one file named country.sys.


5.3  Font Files


Font files, also called code page information files, contain the images
of code page character sets for use by console-screen or printer devices.
These font files are identified by a filename extension of .cpi. Four
font files are included with MS-DOS 3.3:

Font file   Supported device
───────────────────────────────────────────────────────────────────────────
ega.cpi     Color console used with an EGA card
lcd.cpi     Liquid crystal display
4201.cpi    IBM Proprinter
5202.cpi    Quietwriter III printer


5.3.1  Font File Structure

The contents of printer or console-screen font files are structured as
follows:


            +--------------------------------------+
            | 22-BYTE File Header                  |
            +--------------------------------------+
            | WORD Information Header              |
            +--------------------------------------+
            | 13-BYTE Code Page Entry Header       |
            +--------------------------------------+
            | 6-BYTE Font Data Header              |
            +--------------------------------------+
            | Variable size Font Header(s)         |
            +--------------------------------------+

                Figure 5.1  Font File Structure


The font file fields are described in the following sections.


5.3.1.1  File Header

Each file must begin with a file header that includes the following:

Length     Parameter
───────────────────────────────────────────────────────────────────────────
8 BYTES    File tag
8 BYTES    Reserved
WORD       Number of pointers
2 WORDS    Offset

where:

File tag begins with the byte 0FFH and is followed by a string "font   "
(seven characters).

Reserved is eight bytes of zeros.

Number of pointers is the number of pointers in the header. For
MS-DOS 3.3, the value of this word should be 1.

Offset is the two-word offset from the beginning of the file.


5.3.1.2  Information Header

Following the file header is a one-word information header:

Length     Parameter
───────────────────────────────────────────────────────────────────────────
WORD       Number of code pages

where:

Number of code pages is the number of code page entries in the file.


5.3.1.3  Code Page Entry Header

For each code page entry, a header in the following format is included in
the font file:

Length     Parameter
───────────────────────────────────────────────────────────────────────────
WORD       Length
WORD       Pointer
WORD       Device type
8 BYTES    Device subtype
WORD       Code page ID
WORD       Reserved
2 WORDS    Offset

where:

Length is the size of the code page entry header.

Pointer points to the next code page entry header (last header=0, 0).

Device type is 1 if the device is a console screen, or 2 if the device
is a printer.

Device subtype names the type of console screen or printer. This
field also determines the name of the font file. For example, if the
subtype is "CGA," the font file name is cga.cpi

Code page ID defines a valid three-digit code page identification
number. Valid code page numbers are 437, 850, 860, 863, and 865.

Reserved is eight bytes of zeros.

Offset is a pointer to the Font Data Header.


5.3.1.4  Font Data Header

The Font Data Header includes the following fields:

Length     Parameter
───────────────────────────────────────────────────────────────────────────
WORD       Reserved
WORD       Number of fonts
WORD       Length of font data

where:

Reserved must be 1.

Number of fonts is equal to the number of fonts defined in the font file.

Length of font data is equal to the size of the font-data portion of the
font file.


5.3.1.5  Font Header

The font-data portion of a font file will vary for each device. The
structure of the font-data portion consists of a set of data for each font
type. The following illustrates the data portion of a font file for a
console-screen device:

font_header:
    db   16, 8             ; character pixels
                            ; (rows, columns)
    db   0, 0              ; aspect ratio (unused)
    dw   256               ; number of characters in set


len_data   equ ($ - font_header)



Chapter 6  .EXE File Structure and Loading

───────────────────────────────────────────────────────────────────────────

6.1  Format of a File Header

6.2  The Relocation Table



───────────────────────────────────────────────────────────────────────────
Note
    This chapter describes .exe file structure and loading procedures
    for systems that use a version of MS-DOS earlier than 2.0. For MS-DOS
    versions 2.0 and later, use Function 4B00H (Load and Execute a Program)
    to load (or load and execute) an .exe file.
───────────────────────────────────────────────────────────────────────────

The .exe files produced by link consist of two parts:

    ■ Control and relocation information

    ■ The load module

The control and relocation information is at the beginning of the file in
an area called the header. Immediately following this header is the load
module.


6.1  Format of a File Header


The header is formatted as follows (note that offsets are in hexadecimal):

╓┌───────┌───────────────────────────────────────────────────────────────────╖
Offset  Contents
───────────────────────────────────────────────────────────────────────────
0-1     Must contain 4DH, 5AH.

2-3     Number of bytes contained in last page; useful for reading
Offset  Contents
2-3     Number of bytes contained in last page; useful for reading
        overlays.

4-5     Size of the file in 512-byte pages, including the header.

6-7     Number of relocation entries in table.

8-9     Size of the header in 16-byte paragraphs. Used to locate the
        beginning of the load module in the file.

AH-BH   Minimum number of 16-byte paragraphs required above the end of
        the loaded program.

CH-DH   Maximum number of 16-byte paragraphs required above the end of the
        loaded program. If both minalloc and maxalloc are 0, the program
        is loaded as high as possible.

EH-FH   Initial value to be loaded into stack segment before starting
        program execution. Must be adjusted by relocation.

Offset  Contents

10-11   Value to be loaded into the SP register before starting
        program execution.

12-13   Negative sum of all the words in the file.

14-15   Initial value to be loaded into the IP register before starting
        program execution.

16-17   Initial value to be loaded into the CS register before starting
        program execution. Must be adjusted by relocation.

18-19   Relative byte offset from beginning of run file to
        relocation table.

1AH-1BH The number of the overlay as generated by link.


6.2  The Relocation Table


The relocation table that follows the formatted area above, consists of
a variable number of relocation items. Each relocation item contains two
fields: a two-byte offset value, followed by a two-byte segment value.
These two fields contain the offset into a word's load module. This item
requires modification before the module is given control. The following
steps describe this process:

    1. The formatted part of the header is read into memory. Its size
        is 1BH.

    2. MS-DOS allocates a portion of memory depending on the size of the
        load module and the allocation numbers (AH-BH and CH-DH). MS-DOS
        then attempts to allocate 0FFFH paragraphs. This attempt always
        fails, and returns the size of the largest free block. If this
        block is smaller than minalloc and loadsize, there is no
        memory error. But if this block is larger than maxalloc and
        loadsize, MS-DOS allocates (maxalloc + loadsize). Otherwise,
        it allocates the largest free block of memory.

    3. A Program Segment Prefix is built in the lowest part of the
        allocated memory.

    4. MS-DOS calculates the load module size (using offsets 4-5 and
        8-9) by subtracting the header size from the file size. The actual
        size is adjusted down based on the contents of offsets 2-3. The
        operating system determines (based on the setting of the high/low
        load switch) an appropriate segment, called the start segment,
        where it loads the load module.

    5. The load module is read into memory beginning with the start
        segment.

    6. The items in the relocation table are read into a work area.

    7. MS-DOS adds the segment value of each relocation table item to the
        start segment value. This calculated segment, plus value, points
        to the module to which the start segment value is added. The
        result is then placed back into the word in the load module.

    8. Once all relocation items have been processed, the operating system
        sets the SS and SP registers, using the values in the header.
        MS-DOS then adds the start segment value to SS and sets the ES and
        DS registers to the segment address of the Program Segment Prefix.
        The start segment value is then added to the header CS register
        value. The result, along with the header IP value, is the initial
        CS:IP to transfer to before starting execution of the program.



Chapter 7  Microsoft Relocatable Object Module Formats

───────────────────────────────────────────────────────────────────────────

7.1  Introduction

        7.1.1  Definition of Terms

7.2  Module Identification and Attributes

        7.2.1  Segment Definition

        7.2.2  Addressing a Segment

        7.2.3  Symbol Definition

        7.2.4  Indices

7.3  Conceptual Framework for Fixups

        7.3.1  Self-Relative Fixup

        7.3.2  Segment-Relative Fixup

7.4  Record Sequence

7.5  Introducing the Record Formats

        7.5.1  Sample Record Format (SAMREC)

        7.5.2  T-Module Header Record (THEADR)

        7.5.3  L-Module Header Record (LHEADR)

        7.5.4  List of Names Record (LNAMES)

        7.5.5  Segment Definition Record (SEGDEF)

        7.5.6  Group Definition Record (GRPDEF)

        7.5.7  Public Names Definition Record (PUBDEF)

        7.5.8  Communal Names Definition Record (COMDEF)

        7.5.9  Local Symbols Record (LOCSYM)

        7.5.10 External Names Definition Record (EXTDEF)

        7.5.11 Line Numbers Record (LINNUM)

        7.5.12 Logical Enumerated Data Record (LEDATA)

        7.5.13 Logical Iterated Data Record (LIDATA)

        7.5.14 Fixupp Record (FIXUPP)

        7.5.15 Module End Record (MODEND)

        7.5.16 Comment Record (COMENT)

7.6  Microsoft Type Representations for Communal Variables



7.1  Introduction


This chapter presents the object record formats that define the relocatable
object language for the 8086, 80186, and 80286 microprocessors. The 8086
object language is the output of all language translators that have an
8086 processor and that will be linked by the Microsoft linker. The
8086 object language is used for input and output for object language
processors such as linkers and librarians, and is used in the XENIX,
PC-DOS, and MS-DOS operating systems.

The 8086 object module formats let you specify relocatable memory images
that may be linked together. These formats also allow efficient use of the
memory mapping facilities of the 8086 family of microprocessors.

The following table lists the record formats (each described in this
chapter) that Microsoft supports (the abbreviations appear in parentheses):


        Table 7.1
        Object Module Record Formats
───────────────────────────────────────────────────────────────────────────
        Symbol Definition Records

        Public Names Definition Record     (PUBDEF)
        Communal Names Definition Record   (COMDEF)
        Local Symbols Record               (LOCSYM)
        External Names Definition Record   (EXTDEF)
        Line Numbers Record                (LINNUM)

        Data Records

        Logical Enumerated Data Record     (LEDATA)
        Logical Iterated Data Record       (LIDATA)
        T-Module Header Record             (THEADR)
        L-Module Header Record             (LHEADR)
        List of Names Record               (LNAMES)
        Segment Definition Record          (SEGDEF)
        Group Definition Record            (GRPDEF)
        Fixup Record                       (FIXUPP)
        Module End Record                  (MODEND)
        Comment Record                     (COMENT)


───────────────────────────────────────────────────────────────────────────
Note
    If an object module contains any undefined values, the behavior of the
    Microsoft linker is undefined. All undefined values should be considered
    reserved by Microsoft for future use.
───────────────────────────────────────────────────────────────────────────


7.1.1  Definition of Terms

The following terms are fundamental to 8086 relocation and linkage:


OMF--Object Module Formats


MAS--Memory Address Space

The 8086 MAS is one megabyte (1,048,576 bytes). Note that the MAS is
distinguished from actual memory, which may occupy only a portion of
the MAS.


Module

A module is an "inseparable" collection of object code and other
information produced by a translator.


T-Module

A T-module is a module created by a translator, such as Pascal or FORTRAN.

The following restrictions apply to object modules:

    ■ Every module should have a name. Translators provide default
        names (possibly filenames or null names) for T-modules if neither
        the source code nor the user specifies otherwise.

    ■ Every T-module in a collection of linked modules should have a
        different name so that symbolic debugging systems can distinguish
        the various line numbers and local symbols. The Microsoft linker
        does not require or enforce this restriction.


Frame

A frame is a contiguous region of 64K of memory address space (MAS),
beginning on a paragraph boundary (i.e., on a multiple of 16 bytes)
or on a selector on the 80286 processor. This concept is useful because
the contents of the four 8086 segment registers define four (possibly
overlapping) frames; no 16-bit address in the 8086 code can access a
memory location outside the current four frames.


LSEG (Logical Segment)

A logical segment (LSEG) is a contiguous region of memory whose contents
are determined at translation time (except for address-binding). Neither
the size nor the location in MAS are necessarily determined during
translation: the size, although partially fixed, may not be final because
the linker may combine the LSEG when linking with other LSEGs, forming
a single LSEG. So that it can fit in a frame, an LSEG must not be larger
than 64K. Thus, a 16-bit offset, from the base of a frame that covers
the LSEG, may address any byte in that LSEG.


PSEG (Physical Segment)

This term is equivalent to frame. Some prefer "PSEG" to "frame" because
the terms PSEG and LSEG reflect the "physical" and "logical" nature of the
underlying segments.


Frame Number

Every frame begins on a paragraph boundary. The "paragraphs" in MAS can
be numbered from 0 through 65,535. These numbers, each of which defines
a frame, are called frame numbers.


Group

A group is a collection of LSEGs defined at translation time, whose
final locations in MAS have been constrained so that at least one frame
exists that covers (contains) every LSEG in the collection.

The notation "Gr A(X,Y,Z,)" means that LSEGs X, Y, and Z form a group
named A. That X, Y, and Z are all LSEGs in the same group does not imply
any ordering of X, Y, and Z in MAS, nor does it imply any contiguity
between X, Y, and Z.

The Microsoft linker does not currently allow an LSEG to be a member
of more than one group.


Canonic

On the 8086 processor, any location in MAS is contained in exactly 4096
distinct frames, but one of these frames can be distinguished because
it has a higher frame number. This frame is called the canonic frame of
the location. In other words, the canonic frame of a given byte is the
frame chosen so that the byte's offset from that frame lies in the range
0 to 15 (decimal).

For example, suppose FOO is a symbol defining a memory location. You
would then refer to this frame as the "canonic frame of FOO." Similarly,
if S is any set of memory locations, then a unique frame exists that has
the lowest frame number in the set of canonic frames of the locations in S.
This unique frame is called the canonic frame of the set S. You might refer
similarly to the canonic frame of an LSEG or of a group of LSEGs.


Segment Name

LSEGs are assigned Segment Names at translation time. These names serve
two purposes:

    ■ During linking they play a role in determining which LSEGs
        are combined with other LSEGs.

    ■ They are used in assembly source code to specify membership
        in groups.


Class Name

The translator may optionally assign class names to LSEGs during
translation. Classes define a partition on LSEGs: two LSEGs are in
the same class if they have the same class name.

The Microsoft linker applies the following semantics to class names:
the class name "CODE", or any class name whose suffix is "CODE", implies
that all segments of that class contain only code and may be considered
read-only. Such segments may be overlaid if you specify the module
containing the segment as part of an overlay.


Overlay Name

The linker may optionally assign an overlay name to LSEGs. The overlay
name of an LSEG is ignored by Microsoft language linkers for version 3.00
and later languages, but the standard MS-DOS linker supports it.


Complete Name

The complete name of an LSEG consists of the segment name, class name,
and overlay name. The linker combines LSEGs from different modules if their
complete names are identical.


7.2  Module Identification and Attributes


A module header record, which provides a module name, is always the first
record in a module. In addition to having a name, a module may represent
a main program and may have a specified starting address. When linking
multiple modules together, you should give only one module with the
main attribute. If more than one main module appears, the first takes
precedence.

In summary, modules may or may not be main and may or may not have a
starting address.


7.2.1  Segment Definition

A module is a collection of object code defined by a sequence of
records that a translator produces. The object code represents contiguous
regions of memory whose contents the linker determines during translation.
These regions are LSEGs. A module defines the attributes of each LSEG.
The segment definition record (SEGDEF) is responsible for maintaining
all LSEG information (name, length, memory alignment, etc.). The linker
requires the LSEG information when you combine multiple LSEGs and when
it establishes segment addressability. The SEGDEF records must follow the
first header record.


7.2.2  Addressing a Segment

The 8086 addressing mechanism provides segment base registers from
which you may address a 64K-byte region of memory (a Frame). There is
one code segment base register (CS), two data segment base registers
(DS, ES), and one stack segment base register (SS).

The possible number of LSEGs that may make up a memory image far exceeds
the number of available base registers. Thus, base registers may require
frequent loading. This would be the case in a modular program with many
small data and/or code LSEGs.

Since such frequent loading of base registers is undesirable, it is a good
strategy to collect many small LSEGs together into a single unit that will
fit in one memory frame. Then all the LSEGs may be addressed using the same
base register value. This addressable unit is a group and has been defined
earlier in Section 7.1.1, "Definition of Terms."

To establish addressability of objects within a group, you must explicitly
define each group in the module. The group definition record (GRPDEF) lists
constituent segments by their segment names.

The GRPDEF records within a module must follow all SEGDEF records
because GRPDEF records will reference SEGDEF records in defining a Group.
The GRPDEF records must also precede all other records except header
records, which the linker must process first.


7.2.3  Symbol Definition

The Microsoft linker supports three different types of records
belonging to the class of symbol definition records. The types are public
names definition records (PUBDEFs), communal names definition records
(COMDEFs), and external names definition records (EXTDEFs). You use these
record types to define globally visible procedures and data items and
to resolve external references.


7.2.4  Indices

"Index" fields appear throughout this chapter. An index is an integer
that selects a particular item from a collection of items; for example:
name index, segment index, group index, external index, type index, etc.

───────────────────────────────────────────────────────────────────────────
Note
    An index is normally a positive number. The index value zero is reserved,
    and may carry a special meaning depending on the type of index (for
    example, a segment index of zero specifies the "Unnamed" absolute pseudo-
    segment; a type index of zero specifies the "Untyped type.")
───────────────────────────────────────────────────────────────────────────

In general, indices must assume values that are quite large (that is, much
larger than 255). Nevertheless, a great number of object files contain no
indices with values greater than 50 or 100. Therefore, indices are encoded
in one or two bytes, as required.

The high-order (left-most) bit of the first (and possibly the only) byte
determines whether the index occupies one byte or two. If the bit is 0,
the index is a number between 0 and 127, occupying one byte. If the bit
is 1, the index is a number between 0 and 32K-1, occupying two bytes, and
is determined as follows: the low-order eight bits are in the second byte,
and the high-order seven bits are in the first byte.


7.3  Conceptual Framework for Fixups


A fixup is a modification to object code that achieves address binding
that a translator requested and a linker performed.

───────────────────────────────────────────────────────────────────────────
Note
    This is the linker's definition of fixup. Nevertheless, the linker
    can modify object code (make a "fixup") that does not conform to this
    definition. For example, binding code to either hardware or software
    floating-point subroutines is a modification to an operation code,
    which is treated as an address. The previous definition of fixup is not
    intended to disallow or discourage modifications to the object code.
───────────────────────────────────────────────────────────────────────────

8086-family translators need four kinds of data to specify a fixup:

    ■ The place and type of a Location to be fixed up.

    ■ One of two possible fixup modes.

    ■ A target, which is the memory address that Location must refer to.

    ■ A frame that defines a context in which the reference
        takes place.

Location--There are five types of Locations: a pointer, a base,
an offset, a hibyte, and a lobyte.

The vertical alignment of the following figure illustrates four points
(remember that the high-order byte of a word in 8086 memory is the byte
with the higher address):

    ■ A base is the high-order word of a pointer (the linker doesn't care
        whether the low-order word of the pointer is present).

    ■ An offset is the low-order word of a pointer (the linker doesn't care
        whether the high-order word follows).

    ■ A hibyte is the high-order half of an offset (the linker doesn't care
        whether the low-order half precedes).

    ■ A lobyte is the low-order half of an offset (the linker doesn't care
        whether the high-order half follows).


            +----+----+----+----+
Pointer:  |                   |
            +----+----+----+----+

                    +----+----+
Base:               |         |
                    +----+----+

            +----+----+
Offset:   |         |
            +----+----+

                +----+
Hibyte:        |    |
                +----+

            +----+
Lobyte:   |    |
            +----+

        Figure 7.1  Location Types


A Location is specified by two kinds of data: the Location type, and where
the Location is.

The Location type is specified by the LOC field in the FIXUPP record's
LOCAT field; where the Location is is specified by the Data Record Offset
field in the same LOCAT field.

Mode--The Microsoft linker supports two kinds of fixups: self-relative
and segment-relative.

Self-relative fixups support the 8-bit and 16-bit offsets used in CALL,
JUMP, and SHORT-JUMP instructions. Segment-relative fixups support all
other addressing modes of the 8086.

Target--The target is the location in MAS that the linker references.
(More explicitly, the linker considers the target the lowest byte in the
object that it is referencing.) The linker specifies a target by one of six
methods. There are three "primary" methods and three "secondary" ones. Each
primary method of specifying a target uses two kinds of data: an index
number X, and a displacement D.

Method      Explanation
───────────────────────────────────────────────────────────────────────────
(T0)        X is a segment index. The target is the Dth byte in the
            LSEG that the segment index identifies.

(T1)        X is a group index. The target is the Dth byte in the
            LSEG that the group index identifies.

(T2)        X is an external index. The external index identifies the
            external name that (eventually) gives the address of a byte.
            The Dth byte following this byte is the target.

Each secondary method of specifying a target uses only one item of data--
the index number X; this assumes an implicit displacement equal to zero.

Method      Explanation
───────────────────────────────────────────────────────────────────────────
(T4)        X is a segment index. The target is the 0th (first) byte in
            the LSEG that the segment index identifies.

(T5)        X is a group index. The target is the 0th (first) byte in the
            LSEG in the specified group located (eventually) lowest in MAS.

(T6)        X is an external index. The target is the byte whose address
            is the external name that the external index identifies.

The following nomenclature describes a target:

Nomenclature                                      Method
───────────────────────────────────────────────────────────────────────────
Target:  SI(segment name), displacement           [T0]
Target:  GI(group name), displacement             [T1]
Target:  EI(symbol name), displacement            [T2]
Target:  SI (segment name)                        [T4]
Target:  GI (group name)                          [T5]
Target:  EI (symbol name)                         [T6]

The following examples illustrate how this notation is used:

Sample Nomenclature             Explanation
───────────────────────────────────────────────────────────────────────────
Target:  SI(CODE), 1024         The 1025th byte in the segment CODE.

Target:  GI(DATAAREA)           The location in MAS of a group called
                                DATAAREA.

Target:  EI(SIN)                The address of the external subroutine SIN.

Target:  EI(PAYSCHEDULE), 24    The 24th byte following the location of an
                                external data structure called PAYSCHEDULE.

Frame--Every 8086 memory reference is to a location contained within
a frame. This frame is designated by the content of a segment register.
For the linker to form a correct, usable memory reference, it must know
what the target is, and to which frame the reference is being made. Thus,
every fixup specifies such a frame, in one of six methods. Some methods
use data, X, which is in the index number. Other methods require no data.

The five methods of specifying frames are as follows:

╓┌───────────┌───────────────────────────────────────────────────────────────╖
Method      Explanation
───────────────────────────────────────────────────────────────────────────
(F0)        X is a segment index. The frame is the canonic frame of the
            LSEG that the segment index defines.

(F1)        X is a group index. The frame is the canonic frame defined
            by the group (that is, the canonic frame defined by the LSEG
            in the group located (eventually) lowest in MAS).

(F2)        X is an external index. The frame is determined when the
            linker finds the external name's public definition. There
            are two cases:

Method      Explanation

            Case        Explanation
            ───────────────────────────────────────────────────────────────
            (F2a)       The linker defines the symbol relative to some
                        LSEG, and there is no associated group. The linker
                        also specifies the LSEG's canonic frame.

            (F2c)       Regardless of how the linker defines the symbol,
                        there is an associated group. And the linker
                        specifies the canonic frame of the group. (The
                        Group Index field of the PUBDEF record
                        specifies the group.)

(F4)        No X. The frame is the canonic frame of the LSEG that contains
            Location.

(F5)        No X. The target determines the frame. There are three cases:

            Case        Explanation
            ───────────────────────────────────────────────────────────────
Method      Explanation
            ───────────────────────────────────────────────────────────────
            (F5a)       The target specifies a segment index: in this case,
                        the frame is determined as in (F0).

            (F5b)       The target specifies a group index: in this case,
                        the frame is determined as in (F1).

            (F5c)       The target specifies an external index: in this
                        case, the frame is determined as in (F2).

The nomenclature that describes frames is similar to the above
nomenclature for targets.

Nomenclature                       Method
───────────────────────────────────────────────────────────────────────────
Frame:  SI (segment name)          [F0]
Frame:  GI (group name)            [F1]
Frame:  EI (symbol name)           [F2]
Frame:  Location                   [F4]
Frame:  target                     [F5]
Frame:  None                       [F6]

For an 8086 memory reference, the frame specified by a self-relative
reference is usually the canonic frame of the LSEG that contains Location.
Also, the frame specified by a segment-relative reference is the canonic
frame of the LSEG that contains the target.


7.3.1  Self-Relative Fixup

A self-relative fixup works as follows:  Location implicitly defines
a memory address-namely, the address of the byte following Location
(because at the time of a self-relative reference, the 8086 IP
(Instruction Pointer) is pointing to the byte following the reference).

For 8086 self-relative references, if either the Location or the target
is outside the specified frame, the linker gives a warning. Otherwise,
there is a unique l6-bit displacement that, when added to the address
implicitly defined by Location, yields the relative position of the
target in the frame.

    ■ If Location is an offset, the linker adds the displacement
        to Location (modulo 65,536) and reports no errors.

    ■ If Location is a lobyte, the displacement must be within the
        range {-128:127}; otherwise, the linker gives a warning. The
        linker adds the displacement to Location (modulo 256).

    ■ If Location is a base, pointer, or hibyte, it is unclear what
        the translator intended, so the linker's action is undefined.


7.3.2  Segment-Relative Fixup

A segment-relative fixup operates as follows: a nonnegative 16-bit
number, FBVAL, is defined as the frame number of the frame or selector
value that the fixup specifies. A signed 20-bit number, FOVAL, is defined
as the distance from the base of the frame to the target. If this signed
20-bit number is less than 0 or greater than 65,535, the linker reports
an error. Otherwise, the linker uses FBVAL and FOVAL to fix up Location
in the following fashion:

    ■ If Location is a pointer, the linker adds FBVAL (modulo 65,536) to
        the high-order word of pointer, and adds FOVAL (modulo 65,536) to
        the low-order word of pointer.

    ■ If Location is a base, the linker adds FBVAL (modulo 65,536) to
        the base and ignores FOVAL.

    ■ If Location is an offset, the linker adds FOVAL (modulo 65,536)
        to the offset and ignores FBVAL.

    ■ If Location is a hibyte, the linker adds (FOVAL/256) (modulo 256)
        to the hibyte and ignores FBVAL. (The division indicated is integer
        division; that is, the linker discards the remainder.)

    ■ If Location is a lobyte, the linker adds (FOVAL modulo 256)
        (modulo 256) to the lobyte and ignores FBVAL.


7.4  Record Sequence


A object code file must contain a sequence of (one or more) modules,
or a library containing zero or more modules. The following syntax shows
the valid record ordering necessary to form a module. In addition, the
given semantic rules provide information about how to interpret the record
sequence.

───────────────────────────────────────────────────────────────────────────
Note
    The description language used in the following syntax is defined in
    WIRTH: CACM, November 1977, vol. 20, no. 11, pp. 822-823. The character
    strings represented by capital letters are not literals but identifiers,
    and are further defined in the record format section.
───────────────────────────────────────────────────────────────────────────

object file  = tmodule

tmodule      = {THEADR | LHEADR} seg-grp {component} modtail

seg_grp      = {LNAMES} {SEGDEF} {EXTDEF | GRPDEF}

component    = data | debug_record

data         = content_def | thread_def |
                    PUBDEF | EXTDEF | COMDEF | LOCSYM

debug_record = LINNUM

content_def  = data_record {FIXUPP}

thread_def   = FIXUPP (containing only Thread fields)

data_record  = LIDATA | LEDATA

modtail      = MODEND

The following rules apply:

    ■ A FIXUPP record always refers to the previous data record.

    ■ All LNAMES, SEGDEF, GRPDEF, and EXTDEF records must precede all
        records that refer to them.

    ■ Comment records may appear anywhere in a file, except as the
        first or last record in a file or module, or within a content_def.


7.5  Introducing the Record Formats


The following pages present diagrams of record formats in schematic form.
Here is a sample record format that illustrates the various conventions:


7.5.1  Sample Record Format (SAMREC)

-----------------------///---------||||-----------
|     |          |            |            |     |
| REC |  Record  |    Name    |   Number   | CHK |
| TYP |  Length  |            |            | SUM |
| xxH |          |            |            |     |
|     |          |            |            |     |
----------------------///----------||||-----------
                    |            |
                    +----rpt-----+


The Title and Official Abbreviation

At the top of the figure is the name of the record format described, with
its official abbreviation. To promote uniformity among various programs,
including translators and debuggers, use the abbreviation in both code and
documentation. The abbreviation of the record format is always six letters.


The Boxes

Each format is drawn with boxes of two sizes. The narrow boxes represent
single bytes. The wide boxes each represent two bytes. The wide boxes
with three slashes in the top and bottom represent a variable number of
bytes, one or more, depending upon content. The wide boxes with four
vertical bars in the top and bottom represent four-byte fields.


RECTYP

The first byte in each record contains a value between 0 and 255,
indicating the record type.


Record Length

The second field in each record contains the number of bytes in the record,
exclusive of the first two fields, where a field is a 16-bit number--
a low byte followed by a high byte.


Name

Any field that indicates a name has the following internal structure:
the first byte contains a number between 0 and 127, inclusive, indicating
the number of remaining bytes in the field. The remaining bytes are
interpreted as a byte string.

Most translators constrain the character set to a subset of the ASCII
character set.


Number

A four-byte number field represents a 32-bit unsigned integer, where
the first eight bits (least-significant) are stored in the first byte
(lowest address), the next eight bits are stored in the second byte,
and so on.


Repeated or Conditional Fields

Some portions of a record format contain a field or series of fields that
may be repeated one or more times. Such portions are indicated by the
"repeated" or "rpt" brackets below the boxes.

Similarly, some portions of a record format are present only if some given
condition is true; these fields are indicated by similar "conditional"
or "cond" brackets below the boxes.


CHKSUM

The last field in each record is a check sum, which contains the two's
complement of the sum (modulo 256) of all other bytes in the record.
Therefore, the sum (modulo 256) of all bytes in the record is zero.


Bit Fields

Sometimes descriptions of contents of fields are at the bit level.
Boxes with vertical lines drawn through them represent bytes or words;
the vertical lines indicate bit boundaries. Thus, the following byte
representation has three bit fields of three, one, and four bits,
respectively.

---------------------------------
|   |   |   |   |   |   |   |   |
|           |   |               |
|   |   |   |   |   |   |   |   |
---------------------------------
        3       1         4


7.5.2  T-Module Header Record (THEADR)


-----------------------///-----------
|     |          |            |     |
| REC |  Record  |    T-      | CHK |
| TYP |  Length  |    Module  | SUM |
| 80H |          |    Name    |     |
|     |          |            |     |
----------------------///------------


T-Module Name

The T-Module Name field contains the name for the T-module.


7.5.3  L-Module Header Record (LHEADR)


-----------------------///-----------
|     |          |            |     |
| REC |  Record  |    L-      | CHK |
| TYP |  Length  |    Module  | SUM |
| 82H |          |    Name    |     |
|     |          |            |     |
----------------------///------------


L-Module Name

The L-Module Name field contains the name for the L-module.

Every module output from a translator must have a T-module or L-module
header record. The linker requires a THEADR or LHEADR record to come first
in the module and ignores any others. The LHEADR record is identical to
the THEADR record, except it has a record type of 82H.


7.5.4  List of Names Record (LNAMES)


-----------------------///-----------
|     |          |            |     |
| REC |  Record  |    Name    | CHK |
| TYP |  Length  |            | SUM |
| 96H |          |            |     |
|     |          |            |     |
----------------------///------------
                    |            |
                    +----rpt-----+

The LNAMES record contains a list of names that the following SEGDEF and
GRPDEF records may use as the names of segments, classes, and/or groups.

The order of LNAMES records in a module and the order of names within
each LNAMES record imply a mapping of these names to numbers: 1, 2, 3, etc.
These numbers are used as "Name Indices" in the Segment Name Index, Class
Name Index, and Group Name Index fields of the SEGDEF and GRPDEF records.


Name

This repeatable field provides a name, which may have zero length.


7.5.5  Segment Definition Record (SEGDEF)

-----------------///-----------------///-----///---///------
|   |        |         |         |         |     |     |   |
|REC| Record | Segment | Segment | Segment |Class|Over |CHK|
|TYP| Length |   ATTR  | Length  |   Name  |Name |Lay  |SUM|
|98H|        |         |         |  Index  |Index|Name |   |
|   |        |         |         |         |     |Index|   |
-----------------///-----------------///-----///---///------

Segment index values 1 through 32,767, which are used in other record
types to refer to specific LSEGs, are defined implicitly by the sequence
in which SEGDEF records appear in the object file.


SEG ATTR

The SEG ATTR field provides information on various attributes of a
segment, and has the following format:

------------------------
|     |        |       |
| ACB | Frame  |  Off- |
|  P  | Number |  Set  |
|     |        |       |
|     |        |       |
-------------r----------
        |                |
        +---conditional--+

The ACBP byte contains four numbers--the A, C, B, and P attribute
specifications. This byte has the following format:

---------------------------------
|   |   |   |   |   |   |   |   |
|     A     |     C     | B | P |
|   |   |   |   |   |   |   |   |
---------------------------------

A (Alignment) is a 3-bit subfield that specifies the alignment attribute of
the LSEG. The semantics are defined as follows:

───────────────────────────────────────────────────────────────────────────
A=0      SEGDEF describes an absolute LSEG.
A=1      SEGDEF describes a relocatable, byte-aligned LSEG.
A=2      SEGDEF describes a relocatable, word-aligned LSEG.
A=3      SEGDEF describes a relocatable, paragraph-aligned LSEG.
A=4      SEGDEF describes a relocatable, page(256-byte)-aligned LSEG.

If A=0, the Frame Number and Offset fields are present. With the Microsoft
linker, you may use absolute segments for addressing only; for example,
to define the starting address of a ROM and to define symbolic names for
addresses within the ROM. The linker ignores any data that belongs to an
absolute LSEG, and issues a warning if absolute segments are defined for
a program that runs in protected mode.

C (Combination) is a 3-bit subfield that specifies the Combination
attribute of the LSEG. Absolute segments (A=0) must have combination
zero (C=0). For relocatable segments, the C field encodes a number
(0,1,2,3,4,5,6, or 7) that indicates how the segment can be combined.
One way to interpret this attribute is to consider how two LSEGs
are combined.

For example, suppose that X and Y are LSEGs, and that Z is the LSEG
resulting from the combination of X and Y. Let LX and LY be the lengths of
X and Y, and let MXY denote the maximum of LX, LY. Now, to accommodate the
alignment attribute of Y, let G be the length of any gap required between
the X and Y components of Z. Then, let LZ denote the length of the
(combined) LSEG, Z; let dx (0≤dx<LX) be the offset in X of a byte,
and similarly, let dy be the offset (of a byte) in Y.

The following table gives the length LZ of the combined LSEG, Z, and the
offsets dx' and dy' in Z for the bytes corresponding to dx in X, and to
dy in Y.


        Table 7.2
        Combination Attribute Example
───────────────────────────────────────────────────────────────────────────
        C   LZ        dx'   dy'
        2   LX+LY+G   dx    dy+LX+G   "Public"
        5   LX+LY+G   dx    dy+LX+G   "Stack"
        6   MXY       dx    dy        "Common"


Table 7.2 has no lines for C=0, 1, 3, 4, or 7. C=0 indicates that the
relocatable LSEG may not be combined; C=1 and C=3 are undefined. C=4 and
C=7 are treated the same as C=2.

B (Big) is a 1-bit subfield, which, if set to 1, indicates that the
segment length is exactly 64K (65,536 bytes). In this case, the Segment
Length field must contain zero.

The P field must always be zero.

The Frame Number and Offset fields (present only for absolute segments,
A=0) specify the placement in MAS of the absolute segment. Offset is in
the range between 0 and 15, inclusive. If you want an offset value larger
than 15, you should adjust the frame number.


Segment Length

The Segment Length field gives a segment's length in bytes. This length
may be zero. If it is, the linker does not delete the segment from the
module. The Segment Length field is only large enough to hold numbers from
0 to 64K-1, inclusive. To give the segment a length of 64K, you must use
the B attribute bit in the ACBP field (see SEG ATTR in this section).


Segment Name Index

The segment name is a name that a programmer or translator assigns to
the segment; for example, CODE, DATA, TAXDATA, MODULENAME_CODE, or STACK.
The Segment Name Index field provides the segment name by indexing into
the list of names provided by the LNAMES record.


Class Name Index

The class name is a name the programmer or translator assigns to a segment.
If none is assigned, the name is null, and has a length of zero. The
purpose of a class name is to let the programmer define a "handle" to
order the LSEGs in MAS; for example,  RED, WHITE, BLUE; or ROM FASTRAM,
DISPLAYRAM. The Class Name Index field provides the class name by indexing
into the list of names provided by the LNAMES record.


Overlay Name Index

The overlay name is a name that the translator and/or the linker, at
the programmer's request, applies to a segment. The overlay name, like the
class name, may be null. The Overlay Name Index field provides the overlay
name by indexing into the list of names provided by the LNAMES record.

───────────────────────────────────────────────────────────────────────────
Note
    Microsoft language linkers (versions 3.00 and later) ignore the Overlay
    Name Index field, but the standard MS-DOS linker supports it.
───────────────────────────────────────────────────────────────────────────


7.5.6  Group Definition Record (GRPDEF)

-----------------------///---------///------------
|     |          |            |            |     |
| REC |  Record  |    Group   |   Group    | CHK |
| TYP |  Length  |    Name    |  Component | SUM |
| 9AH |          |    Index   | Descriptor |     |
|     |          |            |            |     |
--------------------///----------///--------------
                                |            |
                                +--repeated--+


Group Name Index

The linker may reference a collection of LSEGs with the group name. Most
importantly, when the LSEGs are eventually fixed in MAS, a frame must
exist that "covers" every LSEG of the group.

The Group Name Index field provides the group name by indexing into the
list of names provided by the LNAMES record.


Group Component Descriptor

This repeatable field has the following format:

-----------///-----
|     |           |
| FFH |  Segment  |
|     |   Index   |
|     |           |
|     |           |
-------------------

The first byte of the Group Component Descriptor field contains 0FFH; the
descriptor contains one field, which is a segment index that selects the
LSEG described by a preceding SEGDEF record.


7.5.7  Public Names Definition Record (PUBDEF)

---------------------///------///--------------///---------
|    |          |         |         |       |       |     |
| REC|  Record  |  Public | Public  |Public | Type  | CHK |
| TYP|  Length  |   Base  |  Name   |Offset | Index | SUM |
| 90H|          |         |         |       |       |     |
|    |          |         |         |       |       |     |
---------------------///-----///--------------///----------
                            |                         |
                            +---------repeated--------+

The PUBDEF record provides a list of one or more public names. For each
name, three kinds of data are provided: (1) a base value for the name,
(2) the offset value of the name, and (3) the type of entity represented
by the name.


Public Base

The Public Base field has the following format:

-----///---------///-----------------
|           |           |           |
|   Group   |  Segment  |   Frame   |
|   Index   |   Index   |   Number  |
|           |           |           |
-----///---------///-----------------
                        |           |
                        +conditional+

The Group Index field has a format given earlier, and contains a number
between 0 and 32,767, inclusive. A nonzero value in the Group Index
field associates a group with the public symbol, and is used as described
in case (F2c) of Section 7.3, "Conceptual Framework for Fixups." A zero
value in the Group Index field indicates that there is no associated group.

The Segment Index field has a format given earlier, and contains a number
between 0 and 32,767, inclusive.

A nonzero value in the Segment Index field selects an LSEG. In this case,
the location of each public symbol defined in the record is taken as a
nonnegative displacement (given by a Public Offset field) from the first
byte of the selected LSEG. Also, the Frame Number field must be absent.

A zero value in the Segment Index field means that the defined are
absolute, and that the absolute addresses of the symbols are the values
in the Public Offset field. The Group Index field is ignored.

The Frame Number field contains a frame number only if the value of the
Segment Index field is zero. The linker ignores this field.

A nonzero value in the Group Index field selects some group. This group
is taken as the "frame of reference" for references to all public symbols
defined in this record. That is, the linker performs the following actions:

    ■ The linker converts any fixup of the form:

        Target: EI(P)

        Frame: Target

        (where P is a public symbol in this PUBDEF record) to a fixup of
        the form:

        Target: SI(L),d

        Frame:  GI(G)

        where SI(L) and d are provided by the Segment Index and Public Offset
        fields. (The "normal" action would have the frame specifier in the
        new fixup be the same as in the old fixup: Frame:Target.)

    ■ When the linker converts the value of a public symbol, as defined
        by the Segment Index, Public Offset, and (optionally) Frame Number
        fields, to a {base,offset} pair, the base part is the base of the
        indicated group.

A zero value in the Group Index field selects no group. The linker
does not alter the frame specification of fixups referencing the symbol,
and takes, as the base part of the absolute value of the public symbol,
the canonic frame of the segment (either LSEG or PSEG) determined by
the Segment Index field.


Public Name

The Public Name field gives the name of the object whose location in MAS
the linker makes available to other modules. The name must contain one
or more characters.


Public Offset

The Public Offset field is a 16-bit value. It is either the offset of the
public symbol with respect to an LSEG (if the segment index is greater than
zero), or the offset of the public symbol with respect to the specified
frame (if the segment index is equal to zero).


Type Index

The Type Index field identifies a single preceding TYPDEF (Type Definition
Record), which contains a descriptor for the type of entity represented by
the public symbol. The linker ignores this field.


7.5.8  Communal Names Definition Record (COMDEF)

-----------------///---------///-----------------------------
|     |     |           |           |      |          |     |
| REC | REC | Communal  |   Type    | Data | Communal | CHK |
| TYP | LEN |   Name    |   Index   | Seg  | Length   | SUM |
| B0H |     |           |           | Type |          |     |
|     |     |           |           |      |          |     |
------------+----///---------///----------------------+------
            |                                         |
            +-------repeated--------------------------+

The COMDEF record provides a list of one or more Communal Names, which
define communal variables. A communal variable is an unitialized public
variable whose final size and location are not fixed during compiling.

Communal variables are similar to FORTRAN common blocks in that if you
are linking object modules that each declare a communal variable, then
the size of that variable is the largest of the declared variables. In the
C language, all uninitialized public variables are communal. The following
example shows three different declarations of the same C communal variable:

char    foo[4];         /* In file a.c */
char    foo[1];         /* In file b.c */
char    foo[1024];      /* In file c.c */

If the objects produced from a.c, b.c, and c.c are linked together, the
linker allocates 1024 bytes for the character array "foo."

───────────────────────────────────────────────────────────────────────────
Note
    This record requires that a COMENT record from the Microsoft
    Extension class appear before it in the object module.
───────────────────────────────────────────────────────────────────────────


Communal Name

The Communal Name field gives the communal variable name, and must contain
one or more characters.

Communal names are treated as external names when an external name is
requested elsewhere in the module. Communal names are ordered together
with external names for the purpose of referring to an external name by
its index. (See the description of the EXTDEF record later in this section
for more details on external names.)


Type Index

The Type Index field is ignored by the Microsoft linker.


Data Segment Type

The Data Segment Type field is a single byte that describes the data
segment in which the communal variable resides. It can contain the
following values:

    62H (NEAR) = the communal variable is in the default data segment.
    61H (FAR) = the communal variable is not in the default data segment.


Communal Length

The Communal Length field describes the length of the communal variable o
according to its data segment type.

If its value is NEAR (62H), the field represents the length in bytes.

If its value is FAR (61H), the field represents:

+----///----+-----///------+
| Number of | Element size |
| elements  | in bytes     |
+----///----+-----///------+

The format of all the length fields is as follows:

-------
|     |
|  0  |
| to  |
| 128 |
|     |
-------

-------------------
|     |           |
|     |     0     |
| 129 |    to     |
|(81H)|   64K-1   |
|     |           |
-------------------

-------------------------
|     |                 |
|     |        0        |
| 132 |       to        |
|(84H)|      16M-1      |
|     |                 |
-------------------------

-------------------------
|     |                 |
|     |     -2G-1       |
| 136 |       to        |
|(88H)|      2G-1       |
|     |                 |
-------------------------

The first format (single byte), containing a value between 0 and 127,
represents the number given.

The second format, with a leading byte containing 129, represents the
number contained in the following two bytes.

The third format, with a leading byte containing 132, represents the
number contained in the following three bytes.

The fourth format, with a leading byte containing 136, represents the
number contained in the following four bytes with its sign extended if
necessary.


Link-Time Semantics

A PUBDEF matching a communal variable definition overrides the communal
variable definition. Two communal variable definitions match if the names
in their definitions match. If two matching definitions disagree whether a
communal variable is NEAR or FAR, the linker assumes the variable is NEAR.

If the variable is NEAR, then its size is the largest of the sizes
specified for it. If the variable is FAR, the linker issues a warning
if the array element sizes conflict. If these sizes don't conflict,
the variable's size is the element size multiplied by the largest number
of elements specified. In addition, the sum of the sizes of all NEAR
variables must not exceed 64K bytes, and the sum of the sizes of all
FAR variables must not exceed the size of the machine's addressable
memory space.


HUGE Communal Variables:

A FAR communal variable that is larger than 64K bytes (a HUGE communal
variable) resides in segments that are contiguous (on an 8086) or that
have consecutive selectors (on an 80286). No other data items reside
in the segments occupied by a HUGE communal variable.

If the linker finds matching HUGE and NEAR communal variable definitions,
it issues a warning message, since it is impossible for a NEAR variable
to be larger than 64K bytes.


7.5.9  Local Symbols Record (LOCSYM)

---------------------///------///--------------///---------
|    |          |         |         |       |       |     |
| REC|  Record  |  Local  | Local   | Local | Type  | CHK |
| TYP|  Length  |   Base  |  Name   |Offset | Index | SUM |
| 92H|          |         |         |       |       |     |
|    |          |         |         |       |       |     |
---------------------///-----///--------------///----------
                            |                         |
                            +---------repeated--------+

The LOCSYM record provides information for the definition of a local
symbol, one that is visible only within the module in which it is
defined.

The form and meaning of each of the fields is identical to those in the
PUBDEF record.

───────────────────────────────────────────────────────────────────────────
Note
    The LOCSYM record requires that a COMENT record from the Microsoft
    Extensions class appear before it in the object module. Also, it is
    only recognized by Microsoft language linkers later than version 3.07.
───────────────────────────────────────────────────────────────────────────


7.5.10  External Names Definition Record (EXTDEF)

-----------------------///---------///-----------
|     |           |           |           |     |
| REC |  Record   | External  |   Type    | CHK |
| TYP |  Length   |   Name    |   Index   | SUM |
| 8CH |           |           |           |     |
|     |           |           |           |     |
-----------------------///---------///-----------
                    |                       |
                    +-------repeated--------+

The EXTDEF record provides a list of external names, and for each name, the
type of object it represents. The linker assigns to each external name the
value provided by an identical public name or local name (if such a name
is found).


External Name

The External Name field provides the external object name, which must have
nonzero length.

Including a name in an EXTDEF record is an implicit request to link the
object file to a module containing the same name declared as a public
symbol, unless the name is defined as a local symbol within the same
module as the EXTDEF. This request determines whether the external name
is referenced within some FIXUPP record in the module.

The order of EXTDEF records in a module and the order of external names
within each EXTDEF record, together with COMDEF records and communal
names, implies a mapping on the set of all external names requested
by the module; for example: 1, 2, 3, etc. So to refer to a particular
external name, the linker uses these numbers as "external indices"
in the Target Datum and/or Frame Datum fields of FIXUPP records.

External indices may not reference forward. For example, an EXTDEF
defining the kth object must precede any record referring to that
object with index k.


Type Index

The Type Index field is ignored by the Microsoft linker, except for linker
versions earlier than 3.05, and for object modules lacking the COMENT
record from the Microsoft Extensions class, in which case, refer to
Section 7.6, "Microsoft Type Representation for Communal Variables."


7.5.11  Line Numbers Record (LINNUM)

----------------------///-----------------------------------
|     |          |           |           |                 |
| REC |  Record  |   Line    |   Line    |   Line    | CHK |
| TYP |  Length  |  Number   |  Number   |  Number   | SUM |
| 94H |          |   Base    |           |  Offset   |     |
|     |          |           |           |           |     |
----------------------///-----------------------------------
                                |                       |
                                +--------repeated-------+

The LINNUM record allows a translator to relate a line number in source
code to the corresponding line in translated code.


Line Number Base

The Line Number Base field has the following format:

-----///---------///-----
|           |           |
|   Group   |  Segment  |
|   Index   |   Index   |
|           |           |
-----///---------///-----

The Group Index field is ignored by the Microsoft linker.

The Segment Index field determines the location of the first byte of code
corresponding to some source line number.


Line Number

The Line Number field provides a binary line number between 0 and 32,767,
inclusive. If the high-order bit is not zero, the number is considered
undefined.


Line Number Offset

The Line Number Offset field is a 16-bit value, which is the offset of
the line number with respect to an LSEG (if the segment index is greater
than zero).


7.5.12  Logical Enumerated Data Record (LEDATA)

-----------------------///-----------------------------
|     |           |           |           |     |     |
| REC |  Record   |  Segment  | Enumerated|     | CHK |
| TYP |  Length   |   Index   |   Data    | DAT | SUM |
| A0H |           |           |  offset   |     |     |
|     |           |           |           |     |     |
-----------------------///-----------------------------
                                            |     |
                                            +-rpt-+

The LEDATA record provides contiguous data from which the linker may
construct a portion of an 8086 memory image.


Segment Index

The Segment Index field, which must be nonzero, specifies an index relative
to the SEGDEF records that precede the LEDATA record.


Enumerated Data Offset

The Enumerated Data Offset field specifies an offset that is relative to
the base of the LSEG specified by the segment index. The field also defines
the relative location of the first byte of the DAT field. Successive data
bytes in the DAT field occupy successively higher locations of memory.


DAT

The DAT field provides up to 1024 consecutive bytes of relocatable or
absolute data.


7.5.13  Logical Iterated Data Record (LIDATA)

----------------------///---------------------///-----------
|     |          |           |           |           |     |
| REC |  Record  |  Segment  |  Iterated |  Iterated | CHK |
| TYP |  Length  |   Index   |    Data   |   Data    | SUM |
| A2H |          |           |   Offset  |   Block   |     |
|     |          |           |           |           |     |
----------------------///---------------------///-----------
                                            |           |
                                            +-repeated--+

The LIDATA record provides contiguous data from which the linker may
construct a portion of an 8086 memory image.


Segment Index

The Segment Index field, which must be nonzero, specifies an index that
is relative to the SEGDEF records that precede the LIDATA record.


Iterated Data Offset

The Iterated Data Offset field specifies an offset that is relative to
the base of the LSEG specified by the segment index. It also defines the
relative location of the first byte in the iterated data block. Successive
data bytes in the iterated data block occupy successively higher locations
of memory.


Iterated Data Block

This repeated field is a structure specifying the repeated data bytes.
It has the following format:

-----------------------------///-----
|          |            |           |
|  Repeat  |   Block    |           |
|   Count  |   Count    |  Content  |
|          |            |           |
|          |            |           |
-----------------------------///-----

───────────────────────────────────────────────────────────────────────────
Note
    The linker cannot handle LIDATA records whose iterated Data Blocks
    are larger than 512 bytes.
───────────────────────────────────────────────────────────────────────────


Repeat Count

The Repeat Count field specifies the number of times to repeat the Content
portion of this iterated data block. The value of the Repeat Count field
must be nonzero.


Block Count

The Block Count field specifies the number of iterated data blocks in
the Content portion of this iterated data block. If the Block Count field
has a value of zero, the Content portion of the iterated data block is
interpreted as data bytes. If the field is nonzero, the Content portion
is interpreted as that number of iterated data blocks.


Content

The Content field may be interpreted in one of two ways, depending on
the value of the previous Block Count field.

If the Block Count field is zero, this field is a 1-byte count followed
by the indicated number of data bytes. But if the Block Count field is
nonzero, the Content field is interpreted as the first byte of another
iterated data block.


7.5.14  Fixupp Record (FIXUPP)

-----------------------///-----------
|     |           |           |     |
| REC |  Record   |  Thread   | CHK |
| TYP |  Length   |    or     | SUM |
| 9CH |           |   Fixup   |     |
|     |           |           |     |
-----------------------///-----------
                    |           |
                    +----rpt----+

The FIXUPP record specifies zero or more fixups. Each fixup requests
a modification (fixup) to a Location within the previous data record.
A data record may be followed by more than one FIXUPP record that refers
to it. Each fixup is specified by a Fixup field that specifies four kinds
of data: a Location, a mode, a target, and a frame. The frame and target
may be specified completely within the Fixup field, or by reference to a
preceding Thread field.

A Thread field specifies a default target or frame that subsequently
may be referred to. Eight threads are provided--four for frame
specification and four for target specification. Once a thread has
specified a target or frame, any Fixup fields that follow (in the same
or following FIXUPP records) may refer to that target or frame until
another Thread field with the same type (target or frame) and thread
number (0-3) appears (in the same or in another FIXUPP record).


Thread

The Thread field has the following format:

-----------///-----
|     |           |
| TRD |   Index   |
| DAT |           |
|     |           |
-----------///-----
        |           |
        +conditional+

The TRD DAT (Thread Data) field is a byte with the following internal
structure:

---------------------------------
|   |   |   |   |   |   |   |   |
| 0 | D | 0 |  Method   | THRED |
|   |   |   |   |   |   |   |   |
---------------------------------

The D field is one bit and defines the type of thread being used. If D=0,
this bit defines a target thread, and if D=1, it defines a frame thread.

Method is a 3-bit field containing a number between 0 and 3 (if D=0) or a
number between 0 and 6 (if D=1).

If D=0, then Method = (0, 1, 2, 4, 5, 6)mod 4, where 0, 1, 2, 4, 5, 6
indicate methods T0, T1, T2, T4, T5, and T6 of specifying a target. Thus,
Method indicates the kind of index or frame number required to specify
the target, without indicating whether the target is specified by a primary
or secondary method.

If D=1, then Method = 0, 1, 2, 4, 5, corresponding to methods F0, F1,
F2, F4, F5 of specifying a frame. Here, Method indicates the kind (if any)
of index required to specify the frame.

The THRED field contains a number between 0 and 3, inclusive, and
associates a thread number to the frame or target defined by the
Thread field.

The Index field contains a segment index, group index, or external
index depending on the specification in the Method field. If Method
specifies F4 or F5, this field will not be present.


Fixup

The Fixup field has the following format:

-----------------------///---------///---------///-----
|           |     |           |           |           |
|   LOCAT   | FIX |   Frame   |  Target   |  Target   |
|           | DAT |   Datum   |   Datum   |   Dis-    |
|           |     |           |           | Placement |
|           |     |           |           |           |
-----------------------///---------///---------///-----
                    |           |           |           |
                    +conditional+conditional+conditional+

The LOCAT field is a byte pair with the following format:

-----------------------------------------------------------------
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
| 1 | M | 0 |    LOC    |  D a t a   R e c o r d   O f f s e t  |
|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
-----------------------------------------------------------------
|                               |                               |
+------------lo byte------------+------------hi byte------------+

M is a 1-bit field that specifies the mode of the fixups: self-
relative (if M=0) or segment-relative (if M=1).

───────────────────────────────────────────────────────────────────────────
Note
    Self-relative fixups may not be applied to LIDATA records.
───────────────────────────────────────────────────────────────────────────

LOC is a 3-bit field indicating that the byte(s) in the preceding data
record to be fixed up are a lobyte (if LOC=0), an offset (if LOC=1), a
base (if LOC=2), a pointer (if LOC=3), a hibyte (if LOC=4), or a "loader-
resolved" offset (if LOC=5). Any other values in LOC are invalid.

The Data Record Offset field contains a number between 0 and 1023,
inclusive, that gives the relative position of the lowest order byte
of Location (the actual bytes being fixed up) within the preceding data
record. The Data Record Offset value is relative to the first byte in
the data fields in the data records.

───────────────────────────────────────────────────────────────────────────
Note
    If the preceding data record is an LIDATA record, it is possible for the
    Data Record Offset value to designate a location within a Repeat Count
    field or a Block Count field of the Iterated Data Block field. Such a
    reference is an error. The linker's action on such a malformed record
    is undefined.
───────────────────────────────────────────────────────────────────────────

The FIX DAT field is a byte with the following format:

---------------------------------
|   |   |   |   |   |   |   |   |
| F |   Frame   | T | P | TARGT |
|   |   |   |   |   |   |   |   |
---------------------------------

F is a 1-bit subfield that specifies whether the frame for this Fixup
is specified by a thread (if F=1) or explicitly (if F=0).

The Frame field contains a number that is interpreted in one of two
ways, as indicated by the F bit. If F is zero, the Frame field contains a
number between 0 and 5, inclusive, corresponding to methods F0,...,F5 for
specifying a frame. If F=1, then the Frame field contains a thread number
(0-3). It specifies the frame most recently defined by a Thread field
that defined a frame thread with the same thread number. (Note that the
Thread field may appear in the same FIXUPP record, or in an earlier one.)

T is a 1-bit field that specifies whether the target specified for
this fixup is defined by reference to a thread (T=1), or is given
explicitly in the Fixup field (T=0).

P is a 1-bit field that indicates whether the Target is specified by a
primary method (requires a target displacement, if P=0) or by a secondary
method (requires no target displacement, if P=1). Since a target thread
does not have a primary/secondary attribute, the P bit is the only field
that contains the target specification attribute.

TARGT is interpreted as a 2-bit field. When T=0, it provides a number
between 0 and 3, inclusive, corresponding to methods T0, T1, T2 or T4, T5,
T6, depending on the value of P (where P is interpreted as the high-order
bit of T0, T1, T2, T4, T5, or T6). When a thread specifies the target
(if T=1), then the TARGET field specifies a thread number (0-3).

The Frame Datum field is the "referent" portion of a frame specification,
and is a segment index, group index, or external index. The Frame Datum
field is present only when the frame is not specified by a thread (if F=0)
or explicitly by methods F4, F5, or F6.

The Target Datum field is the "referent" portion of a target specification,
and is a segment index, group index, or external index. The Target Datum
field is present only when a thread does not specify the target (if T=0).

The Target Displacement field is the 2-byte displacement required by
primary methods of specifying targets. This field is present if P=0.

───────────────────────────────────────────────────────────────────────────
Note
    All these methods are described in Section 7.3, "Conceptual Framework
    for Fixups."
───────────────────────────────────────────────────────────────────────────


7.5.15  Module End Record (MODEND)

-----------------------------///-----------
|     |           |     |           |     |
| REC |  Record   | MOD |   START   | CHK |
| TYP |  Length   | TYP |   ADDRS   | SUM |
| 8AH |           |     |           |     |
|     |           |     |           |     |
-----------------------------///-----------
                        |           |
                        +conditional+

The MODEND record serves two purposes. It denotes the end of a module
and indicates whether the module that just ended specifies an entry point
to begin execution. If it does not, the linker specifies the execution
address.


MOD TYP

The MOD TYP field specifies the attributes of the module. The bit
allocation and associated meanings are as follows:

---------------------------------
|   |   |   |   |   |   |   |   |
| MATTR | 0 | 0 | 0 | 0 | 0 | 1 |
|   |   |   |   |   |   |   |   |
---------------------------------

MATTR is a 2-bit field that specifies the following module attributes:

MATTR   Module Attribute
───────────────────────────────────────────────────────────────────────────
0       Non-main module with no START ADDRS
1       Non-main module with START ADDRS
2       Main module with no START ADDRS
3       Main module with START ADDRS

The START ADDRS field (present only if MATTR is 1 or 3) has the following
format:

-----------///---------///-----------------
|     |           |           |           |
| END |   Frame   |  Target   |  Target   |
| DAT |   Datum   |   Datum   |   Dis-    |
|     |           |           | Placement |
|     |           |           |           |
-----------///---------///-----------------
        |           |           |           |
        +conditional+conditional+conditional+

The starting address of a module has all the attributes of any other
logical reference found in a module. The mapping of a logical starting
address to a physical starting address is done in the same manner as
mapping any other logical address to a physical address, as specified in
the discussion of fixups and the FIXUPP record. The fields of the START
ADDRS field have the same semantics as the FIX DAT, Frame Datum, Target
Datum, and Target Displacement fields in the FIXUPP record. Only primary
fixup methods are allowed. Frame method F4 is not allowed.


7.5.16  Comment Record (COMENT)

-----------------------------------///-----------
|     |           |           |           |     |
| REC |  Record   |  Comment  |           | CHK |
| TYP |  Length   |   Type    |  Comment  | SUM |
| 88H |           |           |           |     |
|     |           |           |           |     |
-----------------------------------///-----------

The COMENT record allows translators to include comments in object text.


Comment Type

The Comment Type field indicates the type of comment that this record
carries, allowing you to structure comments for processes that selectively
act on comments.

The format of the Comment Type field is as follows:

--------------------------------------------------------
| N | N |   |   |   |   |   |   |          Comment     |
| P | L | 0 | 0 | 0 | 0 | 0 | 0 |           Class      |
--------------------------------------------------------

The NP (NOPURGE) bit, if set to 1, indicates that this comment cannot be
purged by object file utility programs that can delete Comment records.

The NL (NOLIST) bit, if set to 1, indicates that the text in the Comment
field should not appear in the listing file of object file utility programs
that can list object Comment records.

The Comment Class field is a byte defined as follows:

╓┌───────────────────┌───────────────────────────────────────────────────────╖
Value               Meaning
───────────────────────────────────────────────────────────────────────────
Value               Meaning
───────────────────────────────────────────────────────────────────────────
0                   Language Translator Comment (obsolete)

                    If the comment field contains one of the strings
                    "MS PASCAL" or "FORTRAN 77," then the comment record
                    enables the dsallocation switch on the Microsoft
                    linker.

156(9CH)            DOS Version

                    The Comment field contains a 2-byte integer
                    that specifies the DOS level number.

157(9DH)            Memory Model

                    Indicates the memory model of the object module.
                    The Comment field contains a single byte with the
                    values S, M, L, or H, for SMALL, MEDIUM, LARGE, or
                    HUGE, respectively. This Comment record is used
                    only by the Microsoft XENIX linker.
Value               Meaning
                    only by the Microsoft XENIX linker.

158(9EH)            Force Segment Ordering

                    Causes the linker to use a special segment ordering
                    for executable files. This comment record has the
                    same effect as giving the dosseg switch to Microsoft
                    language versions of the linker.

159(9FH)            Library Specifier

129(81H)            Library Specifier (obsolete)

                    Specifies a library to add to the Microsoft linker's
                    library search list. The Comment field contains the
                    name of the library. Note that unlike all other name
                    specifications, the library name is not prefixed with
                    its length but is determined by the record length.
                    The nodefaultlibrarysearch switch causes the linker
                    to ignore these comment records. The 159(9FH) class
Value               Meaning
                    to ignore these comment records. The 159(9FH) class
                    record is ignored by XENIX versions of the
                    Microsoft linker.

161(A1H)            Microsoft Extensions

                    Indicates that the object module contains extensions
                    to the original Microsoft adaptation of the Intel
                    Relocatable Object Module Format, such as the COMDEF
                    and LOCSYM records.



Comment

The Comment field provides the commentary information.


7.6  Microsoft Type Representations for Communal Variables


───────────────────────────────────────────────────────────────────────────
Note
    Object modules not containing the COMENT record from the Microsoft
    Extensions class can represent communal variable definitions only with
    the obsolete method described here. Also, Microsoft language linkers
    earlier than version 3.05 can recognize this method only. The newer
    method uses the Communal Variable Definitions (COMDEF) record.
───────────────────────────────────────────────────────────────────────────

A communal variable is defined in the object text by an EXTDEF record
and the TYPDEF record to which it refers.

The TYPDEF record of a communal variable has the following format:

-------------------------///-----------
| REC | Record |   |    Eight   | CHK |
| TYP | Length | 0 |    Leaf    | SUM |
| 8EH |        |   | Descriptor |     |
-------------------------///-----------

The Eight Leaf Descriptor field has the following format:

---------///------
| E |    Leaf    |
| N | Descriptor |
---------///------

The EN bitfield specifies whether the next eight leaves in the Leaf
Descriptor field are EASY (if EN = 0) or NICE (if EN = l). This byte
is always zero for TYPDEFs of communal variables.

The Leaf Descriptor field has one of the following two formats. The
format for communal variables in the default data segment (NEAR variables)
is as follows:

------------------///-----///-----
| NEAR | VAR |  Length  |  VAR   |
| 62H  | TYP |    In    | SUBTYP |
|      |     |   Bits   |        |
------------------///------///----
                        |        |
                        +--------+
                        (optional)

The VARTYP (Variable Type) field may be either SCALAR (7BH), STRUCT
(79H), or ARRAY (77H). The linker ignores the VAR SUBTYP field (if one
exists). The format for communal variables not in the default data segment
(FAR variables) is as follows:

-----------------///-------///----
| FAR | VAR |  Number  | Element |
| 61H | TYP |    of    |  Type   |
|     | 77H | Elements |  Index  |
-----------------///-------///----

The VARTYP field must be ARRAY (77H). The Length in Bits field specifies
the Number of Elements, and the Element Type Index is an index to a
previously defined TYPDEF record whose format is that of a NEAR communal
variable.

The format for the Length in Bits or Number of Elements fields is the
same as the format of the Communal Length field of the COMDEF record.


Link-Time Semantics

All EXTDEF records referencing a TYPDEF record of one of the previously
described formats are treated as communal variables. All others are
treated as externally defined symbols for which a matching PUBDEF
record is expected.

For more information, see "Link-Time Semantics" in Section 7.5.8,
"Communal Names Definition Record (COMDEF)."



Chapter 8  Programming Hints

───────────────────────────────────────────────────────────────────────────

8.1  Introduction

8.2  Interrupts

8.3  System Calls

8.4  Device Management

8.5  Memory Management

8.6  Process Management

8.7  File and Directory Management

        8.7.1  Locking Files

8.8  Miscellaneous



8.1  Introduction


This chapter describes recommended MS-DOS 3.3 programming procedures.
By using these programming hints, you can ensure compatibility with future
versions of MS-DOS.

The hints are organized in the following categories:

    ■ Interrupts

    ■ System Calls

    ■ Device Management

    ■ Memory Management

    ■ Process Management

    ■ File and Directory Management

    ■ Miscellaneous


8.2  Interrupts


    ■ Never explicitly issue Interrupt 22H (Terminate Process Exit
        Address).

        Only the DOS should do this. To change the terminate address, use
        Function 35H (Get Interrupt Vector) to get the current address and
        save it, then use Function 25H (Set Interrupt Vector) to change the
        Interrupt 22H entry in the vector table to point to the new terminate
        address.

    ■ Use Interrupt 24H (Critical-Error-Handler Address) with care. The
        Interrupt 24H handler must preserve the ES register.

        An Interrupt 24H handler can issue only the system calls 01H-0CH.
        Making any other calls destroys the MS-DOS stack and prevents
        successful use of the Retry or Ignore options.

        When using the Retry or Ignore options, you must preserve the SS,
        SP, DS, BX, CX, and DX registers.

    ■ When an Interrupt 24H (Critical-Error-Handler Address) is received,
        always IRET back to MS-DOS with one of the standard responses.

        Programs that do not IRET from Interrupt 24H leave the system in an
        unpredictable state until a function call other than 01H-0CH is made.
        The Ignore option may leave incorrect or invalid data in internal
        system buffers.

    ■ Avoid trapping Interrupt 23H (CONTROL-C Handler Address) and
        Interrupt 24H (Critical-Error-Handler Address). Don't rely on
        trapping errors via Interrupt 24H as part of a copy protection
        scheme.

        These methods might not be included in future releases of MS-DOS.

    ■ A user program must never issue Interrupt 23H (CONTROL-C Handler
        Address).

        Only MS-DOS may issue Interrupt 23H.

    ■ Save any registers that your program uses before issuing Interrupt
        25H (Absolute Disk Read) or Interrupt 26H (Absolute Disk Write).

        These interrupts destroy all registers except for the segment
        registers.

        Avoid writing or reading an interrupt vector directly to or
        from memory.

    ■ Use Functions 25H and 35H (Set Interrupt Vector and Get Interrupt
        Vector) to set and get values in the interrupt table.


8.3  System Calls


    ■ Use new system calls.

        Avoid using system calls that have been superseded by new calls
        unless the program must maintain backward compatibility with MS-DOS
        versions before 2.0. See Section 1.9, "Old System Calls", for a list
        of these new calls.

    ■ Avoid using functions 01H-0CH and 26H (Create New PSP).

        Use the new "tools" approach for reading and writing on standard
        input and output. Use Function 4BH (Load and Execute Program)
        instead of 26H to execute a child process.

    ■ Use file-sharing calls if more than one process is in effect.

        For more information, see File Sharing, in Section 1.5.2, "File-
        Related Function Requests."

    ■ Use networking calls where appropriate.

        Some forms of IOCtl can only be used with Microsoft Networks.
        For more information, and a list of these calls, see Section 1.6,
        "Microsoft Networks,"

    ■ When selecting a disk with Function 0EH (Select Disk), treat the
        value returned in AL with care.

        The value in AL specifies the maximum number of logical drives;
        it does not specify which drives are valid.


8.4  Device Management

    ■ Use installable device drivers.

        MS-DOS provides a modular device driver structure for the BIOS,
        allowing you to configure and install device drivers at boot time.
        Block device drivers transmit a block of data at a time, while
        character device drivers transmit a byte of data at a time.

        Examples of both types of device drivers are given in Chapter 2,
        "MS-DOS Device Drivers."

    ■ Use buffered I/O.

        The device drivers can handle streams of data up to 64K bytes.
        To improve performance when sending a large amount of output to
        the screen, you can send it with one system call.

    ■ Programs that use direct console I/O via Function 06H and 07H (Direct
        Console I/O and Direct Console Input) and that want to read CONTROL-C
        as data should ensure that CONTROL-C checking is off.

        The program should ensure that CONTROL-C checking is off by using
        Function 33H (CONTROL-C Check).

    ■ Be compatible with international support.

        To provide support for international character sets, MS-DOS
        recognizes all possible byte values as significant characters
        in filenames and data streams. MS-DOS versions before 2.0 ignored
        the high bit in the MS-DOS filename.


8.5  Memory Management


    ■ Use memory management.

        MS-DOS keeps track of allocated memory by writing a memory control
        block at the beginning of each area of memory. Programs should use
        Functions 48H (Allocate Memory), 49H (Free Allocated Memory), and
        4AH (Set Block) to release unneeded memory.

        This allows for future compatibility. For more information, see
        Section 1.3, "Memory Management."

    ■ Use only allocated memory.

        Don't directly access memory that was not provided as a result
        of a system call. Do not use fixed addressing, use only relative
        references.

        A program that uses memory that has not been allocated to it may
        destroy other memory control blocks or cause other applications
        to fail.


8.6  Process Management


    ■ Use Function 4BH (Load and Execute Program, or EXEC) to load and
        execute programs.

        EXEC is the preferred call to use when loading programs and program
        overlays. Using the EXEC call instead of hard-coding information
        about how to load an .exe file (or always assuming that your file is
        a .com file) isolates your program from changes in .exe file formats
        and future releases of MS-DOS.

    ■ Use Function 31H (Keep Process), instead of Interrupt 27H (Terminate
        But Stay Resident).

        Function 31H allows programs that are greater than 64K bytes to
        terminate and stay resident.

    ■ Programs should terminate using Function 4CH (End Process).

        Programs that terminate by one of the following must ensure that the
        CS register contains the segment address of the PSP:

        ■ A long jump to offset 0 in the PSP

        ■ Issuing an Interrupt 20H with CS:0 pointing at the PSP

        ■ Issuing an Interrupt 21H with AH=0, CS:0 pointing at the PSP

        ■ A long call to location 50H in the PSP with AH=0


8.7  File and Directory Management


    ■ Use the MS-DOS file management system.

        Using the MS-DOS file system ensures program compatibility with
        future MS-DOS versions through compatible disk formats and consistent
        internal storage.

    ■ Use file handles instead of FCBs.

        A handle is a 16-bit number that MS-DOS returns when a file is opened
        or created using Functions 3CH, 3DH, 5AH, or 5BH (Create Handle, Open
        Handle, Create Temporary File, or Create New File). The MS-DOS file-
        related function requests that use handles are listed in Table 1.5
        in Chapter 1, "System Calls."

        Although the default maximum number of open files is 20, this limit
        can be raised to 64K by Function 67H (Set Handle Count). For more
        information on this system call, see Chapter 1, "System Calls."

        You should use these calls instead of the old file-related
        functions that use FCBs (file control blocks). This is because a
        file operation can simply pass its handle rather than maintaining
        FCB information. If you must use FCBs, be sure the program closes
        them and does not move them around in memory.

    ■ Close files that have changed in length before issuing an Interrupt
        20H (Program Terminate), Function 00H (Terminate Program), Function
        4CH (End Process), or Function 0DH (Reset Disk).

        If you do not close a changed file, its length will not be recorded
        correctly in the directory.

    ■ Close files when they are no longer needed.

        Closing unneeded files increases efficiency in a networking
        environment.

    ■ If a program does use FCBs, that program should not close an FCB file
        and then continue writing to it. This practice will not work in a
        network environment, and is not recommended under any circumstances.

    ■ Change disks only if all files on the disk are closed.

        If you don't close all the files, any information in internal system
        buffers may be written incorrectly to a changed disk.


8.7.1  Locking Files

    ■ Programs should not rely on being denied access to a locked region.

        To determine the status of a region, first, attempt to lock it,
        then examine its error code.

    ■ Programs should not close a file with a locked region or terminate
        with an open file that contains a locked region.

        The result of this procedure is undefined. Programs that might be
        terminated by an Interrupt 23H or Interrupt 24H (CONTROL-C Handler
        Address or Critical-Error-Handler Address) should trap these
        interrupts and unlock any locked regions before exiting.


8.8  Miscellaneous


    ■ Avoid timing dependencies.

        Various machines use CPUs of different speeds. Also, programs that
        rely upon the speed of the clock for timing are not dependable in a
        networking environment.

    ■ Use the documented interface to the operating system. If either the
        hardware or media change, the operating system can use the features
        without modification.

        Don't use the ROM support provided by the OEM (Original Equipment
        Manufacturer).

        Don't directly address the video memory.

        Don't use undocumented function calls, interrupts, or features.

        These items may change or may not exist in future MS-DOS versions.
        If you do use these features, you will make your program highly non-
        portable.

    ■ Use the .exe format rather than the .com format.

        .Exe files are relocatable; .com files are direct memory images that
        load at a specific place and have no room for additional control
        information. .Exe files have headers that can be expanded for
        compatibility with future MS-DOS versions.

    ■ Use the environment to pass information to applications.

        The environment allows a parent process to pass information to a
        child process. The command.com file is usually the parent process
        to every application, so it can easily pass default drive and path
        information to the application.



INDEX


Symbols
──────────────────────────────────────────────────────────────────────────
80186 microprocessor
80286 microprocessor
8086 microprocessor
8086 object language
8086 object module format. See Object Module Formats (OMF)


A
──────────────────────────────────────────────────────────────────────────
Absolute Disk Read (Interrupt 25H)
Absolute Disk Write (Interrupt 26H)
Absolute segment, LSEG
ACBP byte, SEG ATTR
Address mode
Alignment attribute
Alignment subfield, SEG ATTR
Allocate Memory (Function 48H)
Application
    Frame Number, protected-mode
Archive bit
Array, character
ASCII character set
ASCIZ string
Assign list
Attribute byte
Attribute field
Attribute, LSEG
    Alignment
    Combination
    SEG ATTR field, SEGDEF
Attribute
    primary
    secondary
    Target
AUTOEXEC file
Auxiliary Input (Function 03H)
Auxiliary Output (Function 04H)


B
──────────────────────────────────────────────────────────────────────────
base, definition
Big subfield, SEG ATTR
BIN format file
Binary line number
BIOS Parameter ^Block (<BPB)
BIOS Parameter Block (BPB)
Bit 8
Bit 9
Bitfield
Block Count subfield, Iterated Data Block
Block devices
    device drivers
    disk drives
    example
    installation
Boot sector
BPB pointer
Buffered Keyboard Input (Function 0AH)
BUILD BPB
Build BPB
Busy bit
Byte, representation


C
──────────────────────────────────────────────────────────────────────────
C language
CALL instruction
Cancel Assign-List Entry (Function 5FH, Code 04H)
Canonic Frame
Canonic Frame, definition
Carry flag
Case-Mapping
Change
Change Directory Entry (Function 56H)
Character array
Character device driver, example
Character devices
Character set
    definition
Check Keyboard Status (Function 0BH)
CHKSUM field, SAMREC
Class Name, definition
CLOCK device
Close
Close File (Function 10H)
Cluster
Code page
    definition
Code segment, CS
Combination attribute
Combination subfield, SEG ATTR
COMDEF record
    field
        CHKSUM
        Communal Length, repeated
        Communal Name, repeated
        Data Segment Type, repeated
        Record Length
        RECTYP
        Type Index, repeated
    length fields, format
    order with respect to COMENT
    purpose
    schematic
COMENT record
    field
        CHKSUM
        Comment
        Comment Type
        Record Length
        RECTYP
    order with respect to COMDEF
    order with respect to LOCSYM
    purpose
    schematic
    subfield of Comment Type
        Comment Class
Command code field
Command processor
Command.com
Commands, utility, NLS
Comment class subfield, Comment Type
Comment field, COMENT
Comment record
Comment Record (COMENT)
Comment Type field, COMENT
    bit settings
    definition
    format
Commit File (Function 68H)
Common blocks, FORTRAN
Communal Length field, COMDEF
Communal Name field, COMDEF
Communal Name, ordering with External Name
Communal Names Definition Record (COMDEF)
Communal names definition record. See COMDEF record
Communal variable
    FAR
    HUGE
    NEAR
    similarity to FORTRAN common block
    uninitialized public variable
Compatibility, ensuring
Complete Name, definition
Computer language
    C
    FORTRAN
COMSPEC
Con device
config.sys 1130
config.sys file 1114
Content subfield, Iterated Data Block
Control blocks
Control information
CONTROL-C
CONTROL-C Address (Interrupt 23H)
CONTROL-C Handler Address (Interrupt 23H)
Country code, current
Country code
    definition
Country-dependent information, NLS
Country-dependent information
    case conversion tables
    collating sequence, character sorting
    currency
    date
    DBCS environmental vector
    keyboard support
    time
    valid single-byte characters
Country.sys file
Create
Create File (Function 16H)
Create New File (Function 5BH)
Create Temporary File (Function 5AH)
Critical Error Handler Address (Interrupt 24H)
CS register


D
──────────────────────────────────────────────────────────────────────────
DAT field, LEDATA
Data Record
Data Segment Type field, COMDEF
Data segment
    DS
    ES
    FAR
    NEAR
Delete Directory Entry (Function 41H)
Delete File (Function 13H)
Descriptor, Group Component, GRPDEF
Device control
Device drivers
    block
    creating
    example
    installable
    installing
    non-resident
    preserving registers
    resident
Device Handles
Device header
Device interrupt routine
Device management, programming hints
Device strategy routine
Device-related function requests
Direct Console Input (Function 07H)
Direct Console I/O (Function 06H)
Directory Entry
Directory-Related Function Requests
Directory-related function requests
Disk allocation
Disk Directory
Disk formats
    IBM
    standard MS-DOS
Disk Transfer Address (DTA)
Dispatch table
Display Character (Function 02H)
Display String (Function 09H)
Done bit
DS register
Duplicate File Handle (Function 45H)


E
──────────────────────────────────────────────────────────────────────────
Eight Leaf Descriptor field, TYPDEF
    format
    subfield
        EN
        Leaf Descriptor
Element Type Index subfield, Leaf Descriptor
EN subfield, Eight Leaf Descriptor
End address
End Process (Function 4CH)
Enumerated Data Offset field, LEDATA
Error bit
Error codes
Error Handling
Error handling
ES register
EXE device drivers
.exe files
exe files
EXE format file
EXE loader
EXTDEF record
    field
        CHKSUM
        External Name, repeated
        Record Length
        RECTYP
        Type Index, repeated
    purpose
    schematic
Extended error codes
Extended FCB
Extensions class, Microsoft
External Index
External indices
External Name field, EXTDEF
External Name
    mapping
    referenced in FIXUPP record
External Names Definition Record (EXTDEF)
External names definition record. See EXTDEF record


F
──────────────────────────────────────────────────────────────────────────
FAR data segment
FAR subfield, Leaf Descriptor
FAR variable format, Leaf Descriptor
FAT
FAT ID byte
FAT <ID byte
FBVAL, definition
FCB
File Allocation Table
File and directory management, programming hints
File attributes
File Control Block
    definition
    extended
    fields
    format
    opened
    unopened
File locking, programming hints
Filename
File-related function requests
File-sharing function requests
Find First File (Function 4EH)
Find Next File (Function 4FH)
FIX DAT subfield, Fixup
    internal structure
    schematic
Fixup field, FIXUPP
    data type
        Frame
        Location
        Mode
        Target
    definition
    schematic
    subfield
        LOCAT
Fixup mode
    segment-relative
    self-relative
FIXUP record
Fixup
    definition
    Frame
    Location
FIXUPP record
FIXUPP Record (FIXUPP)
FIXUPP record
    External Name referenced in
    field
        CHKSUM
        Fixup, repeated
        Frame Datum, conditional
        Record Length
        RECTYP
        Target Datum, conditional
        Thread, repeated
    purpose
    schematic
    subfield of FIX DAT, Fixup
        F
        Frame
        P
        T
        TARGT
    subfield of Fixup
        Frame Datum, conditional
        Target Datum, conditional
        Target Displacement, conditional
    subfield of LOCAT, Fixup
        Data Record Offset
        LOC
        M (mode)
    subfield of Thread
        Index, conditional
        TRD DAT
    subfield of TRD DAT, Thread
        D
        Method
        THRED
Fixup
    segment-relative
    self-relative
    Target
Flush
Flush Buffer, Read Keyboard (Function 0CH)
Force Duplicate File Handle (Function 46H)
Format
FORTRAN, common blocks
FORTRAN language
FOVAL, definition
Frame Datum field, FIXUPP
Frame Datum subfield, Fixup
    External Index
    Group Index
    Segment Index
Frame Datum subfield, START ADDRS
Frame Number
Frame Number, conditional

Fr
    Frame Number
    nomenclature
    specifying
    specifying, FIXUPP
Frames
    Thread Number, FIXUPP
Free Allocated Memory (Function 49H)
Function
Function
Function Requests
    alphabetic order
    calling
Function requests
    definition
Function Requests
    definition
    device-related
    Directory-related
    directory-related
    file-related
    file-sharing
    Function 00H
    Function 01H
    Function 02H
    Function 03H
    Function 04H
    Function 05H
    Function 06H
    Function 07H
    Function 08H
    Function 09H
    Function 0AH
    Function 0BH
    Function 0CH
    Function 0DH
    Function 0EH
    Function 0FH
    Function 10H
    Function 11H
    Function 12H
    Function 13H
    Function 14H
    Function 15H
    Function 16H
    Function 17H
    Function 19H
    Function 1AH
    Function 1BH
    Function 1CH
Function requests
    Function 25H
Function Requests
    Function 25H
Function requests
    Function 35H
Function Requests
    Function 40H
    Function 41H
    Function 42H
    Function 43H
    Function 44H, Code 08H
    Function 44H, Code 09H
    Function 44H, Code 0AH
    Function 44H, Code 0BH
    Function 44H, Code 0CH
    Function 44H, Code 0DH
    Function 44H, Codes 00H and 01H
    Function 44H, Codes 02H and 03H
    Function 44H, Codes 04H and 05H
    Function 44H, Codes 06H and 07H
    Function 44H, Codes 0EH and 0FH
    Function 45H
Function requests
    Function 46H
Function Requests
    Function 47H
    Function 48H
    Function 49H
    Function 4AH
    Function 4BH, Code 00H
    Function 4BH, Code 03H
    Function 4CH
    Function 4DH
    Function 4EH
    Function 4FH
    Function 54H
    Function 56H
    Function 57H
    Function 58H
    Function 59H
    Function 5AH
    Function 5BH
    Function 5CH, Code 00H
    Function 5CH, Code 01H
    Function 5EH, Code 00H
    Function 5EH, Code 02H
    Function 5FH, Code 02H
    Function 5FH, Code 03H
    Function 5FH, Code 04H
    Function 62H
    Function 65H
    Function 66H
    Function 67H
    Function 68H
    Handling errors
    memory management
    National Language Support
    Network-related
    network-related
    numeric order
    process management
    standard character I/O
    system-management


G
──────────────────────────────────────────────────────────────────────────
Generic IOCtl for devices (Function 44H, Code 0DH)
Generic IOCtl for handles (Function 44H, Code 0CH)
Generic IOCtl Function
Get
Get Assign List Entry (Function 5FH, Code 02H)
Get Current Directory (Function 47H)
Get Current Disk (Function 19H)
Get Default Drive Data (Function 1BH)
Get Drive Data (Function 1CH)
Get Extended Country Information (Function 65H)
Get Extended Error (Function 59H)
Get Interrupt Vector (Function 35H)
Get Machine Name (Function 5EH, Code 00H)
Get PSP (Function 62H)
Get Return Code Child Process (Function 4DH)
Get Verify State (Function 54H)
Get/Set Allocation Strategy (Function 58H)
Get/Set Date/Time of File (Function 57H)
Get/Set File Attributes (Function 43H)
Get/Set Global Code Page (Function 66H)
Get/Set IOCtl Drive Map (Function 44H, Codes 0EH and 0FH)
Get/Set Logical Drive Map Function
Group Component Descriptor field, GRPDEF
Group, definition
Group definition record. See GRPDEF record
Group Definition Record (GRPDEF)
Group Index
Group Index subfield, Line Number Base
Group Index subfield, Public Base
Group Name Index field, GRPDEF
GRPDEF record
    definition
    field
        CHKSUM
        Group Component Descriptor, repeated
        Group Name Index
        Record Length
        RECTYP
    schematic


H
──────────────────────────────────────────────────────────────────────────
Handles
    definition
    device
Handling errors
Header
hibyte, definition
Hidden files
High-Level Language
HUGE communal variable


I
──────────────────────────────────────────────────────────────────────────
IBM disk format
Index fields
Index Number
Index subfield, Thread
    External Index
    Group Index
    Segment Index
Index
    definition
Indices
Indices, external
Init
INIT code
Installable device drivers
Instruction Pointer (IP)
Instruction
    CALL
    JUMP
    SHORT-JUMP
Internal stack
Interrupt entry point
Interrupt handlers
Interrupt routines
Interrupt-handling
Interrupts
    21H
    Address of handlers
    alphabetic order
    definition
    Interrupt 20H
    Interrupt 21H
    Interrupt 22H
    Interrupt 23H
    Interrupt 24H
    Interrupt 25H
    Interrupt 26H
    Interrupt 27H
    issuing
    numeric order
    programming hints
    Vector table
I/O Control for Devices (Function 44H)
IOCtl
IOCtl bit
IOCtl Block (Function 44H, Codes 4 and 5)
IOCtl Character (Function 44H, Codes 2 and 3)
IOCtl Data (Function 44H, Codes 0 and 1)
IOCtl Is Changeable (Function 44H, Code 08H)
IOCtl Is Redirected Block (Function 44H, Code 09H)
IOCtl Is Redirected Handle (Function 44H, Code 0AH)
IOCtl Retry (Function 44H, Code 0BH)
IOCtl Status (Function 44H, Codes 6 and 7)
io.sys file 1368
IP. See Instruction Pointer (IP)
Iterated Data Block field, LIDATA
Iterated Data Offset field, LIDATA


J
──────────────────────────────────────────────────────────────────────────
JUMP instruction


K
──────────────────────────────────────────────────────────────────────────
Keep
Keyboard layouts, national, NLS


L
──────────────────────────────────────────────────────────────────────────
Language
    C
    FORTRAN
Leaf Descriptor subfield, Eight Leaf Descriptor
    format
        FAR variable
        NEAR variable
    subfield
        NEAR
        VARTYP
LEDATA record
    field
        DAT, repeated
        Enumerated Data Offset
        Segment Index
    schematic
LEDATA
    field
        CHKSUM
        Record Length
        RECTYP
    purpose
Length fields, COMDEF, format
Length in Bits subfield, Leaf Descriptor
Length of Record Field
LHEADR record
    field
        CHKSUM
        L-module Name
        Record Length
        RECTYP
    schematic
LIDATA record
    field
        CHKSUM
        Iterated Data Block, repeated
        Iterated Data Offset
        Record Length
        RECTYP
        Segment Index
    purpose
    schematic
    subfield of Iterated Data Block
        Block Count
        Content
        Repeat Count
Line Number Base field, LINNUM
Line number, binary
Line Number field, LINNUM
Line Number Offset field, LINNUM
Line Numbers Record (LINNUM)
LINK
Linker, Microsoft
Linker, Microsoft
Link-time semantics
LINNUM record
    field
        CHKSUM
        Line Number Base
        Line Number Offset, repeated
        Line Number, repeated
        Record Length
        RECTYP
    purpose
    schematic
    subfield of Line Number Base
        Group Index
        Segment Index
List of Names Record (LNAMES)
L-module Header Record (LHEADR)
L-module Name
LNAMES record
    field
        CHKSUM
        Name, repeated
        Record Length
        RECTYP
    schematic
Load and Execute Program (Function 4BH, Code 00H)
Load module
Load Overlay (Function 4BH, Code 03H)
Loadsize
lobyte, definition
Local Base field, LOCSYM
Local buffering
Local Name field, LOCSYM
Local Offset field, LOCSYM
Local symbol
Local Symbols Record (LOCSYM)
LOCAT subfield, Fixup
    internal structure
    schematic
Location
    types
        base
        hibyte
        lobyte
        offset
        pointer
Lock (Function 5CH, Code 00H)
LOCSYM record
    field
        CHKSUM
        Local Base
        Local Name, repeated
        Local Offset, repeated
        Record Length
        RECTYP
        Type Index, repeated
    order with respect to COMENT
    purpose
    schematic
Logical Enumerated Data Record (LEDATA)
Logical Iterated Data Record (LIDATA)
Logical sector
Logical sector numbers
Logical Segment. See LSEG
LSEG
    absolute
        Combination attribute
    Alignment attribute
        absolute segment
        relocatable segment
    canonic Frame
    Class name
    Combination attribute
        absolute segment
        relocatable segment
    combining
    Complete name
    definition
    Overlay Name
    relocatable
        byte-aligned
        Combination attribute
        page-aligned
        paragraph-aligned
        word-aligned
    Segment Name


M
──────────────────────────────────────────────────────────────────────────
Make Assign-List Entry (Function 5FH, Code 03H)
Mapping
    logical to physical starting address
MAS. See Memory Address Space (MAS)
MATTR subfield, MOD TYP
Maxalloc
Media <Check
Media descriptor byte
Media, determining
Memory address
Memory Address Space (MAS)
Memory control block
Memory image,
Memory image, LSEGs in
Memory image, relocatable
Memory management function requests
Memory management, programming hints
Memory model
    huge
    large
    medium
    small
Microprocessor
    80186
    80286
    8086
Microsoft Extensions class
Microsoft linker
Microsoft linker
Microsoft Networks
Microsoft Networks Manager's Guide
Microsoft Networks User's Guide
Minalloc
MOD TYP field, MODEND
    MATTR subfield
    module attributes
Mode, address
Mode
    fixup
        segment-relative
        self-relative
MODEND record
    field
        CHKSUM
        MOD TYP
        Record Length
        RECTYP
        START ADDRS, conditional
    purpose
    schematic
    subfield of START ADDRS
        Frame Datum, conditional
        Target Datum, conditional
        Target Displacement, conditional
Module, definition
Module End Record (MODEND)
Module header record, definition
Module
    record ordering in
Move File Pointer (Function 42H)
MS-DOS, 8086 object language
MS-DOS initialization
MS-DOS memory map
MS-DOS User's Reference
msdos.sys file 1356
msdos.sys file 1368
Multitasking


N
──────────────────────────────────────────────────────────────────────────
Name field
Name field, SAMREC
Name Indices
National keyboard layouts, NLS
National Language Support Function Requests
National Language Support (NLS)
    restrictions
    unsupported features
National Language Support system calls
NEAR data segment
NEAR subfield, Leaf Descriptor
NEAR variable format, Leaf Descriptor
Network-related Function Requests
Network-related function requests
Non IBM format bit
Non-destructive Read No Wait
NUL device
Number field, SAMREC
Number of Elements subfield, Leaf Descriptor


O
──────────────────────────────────────────────────────────────────────────
Object language,
Object Module Formats
Object Module Formats (OMF)
Object module
    restrictions
offset, definition
Offset subfield, SEG ATTR
Old system calls
OMF. See Object Module Formats (OMF)
Open
Open File (Function 0FH)
Opened FCB
Operating system
    MS-DOS
    PC-DOS
    XENIX
Overlay Name, definition


P
──────────────────────────────────────────────────────────────────────────
Parameter block
Parse
Path command
PC-DOS, 8086 object language
Physical Segment. See PSEG
Pointer to Next Device field
Predefined device handles
Print Character (Function 05H)
Printer Setup (Function 5EH, Code 02H
Process management function requests
Process management, programming hints
Processor. See Microprocessor
Program
Program End Process (Interrupt 20H)
Program segment
Program Segment Prefix
Programming hints
    device management
    file and directory management
    file locking
    interrupts
    memory management
    miscellaneous
    process management
    recommendations
    system calls
Programming interfaces, NLS
Prompt command
Protected-mode
    application Frame Number
PSEG
    definition
PUBDEF record
PUBDEF record. See also
PUBDEF record
    field
        Public Base, repeated
        Public Name, repeated
        Public Offset, repeated
        Record Length
        RECTYP
        Type Index, repeated
    purpose
    schematic
    subfield of Public Base
        Frame Number, conditional
    subfield, Public Base
        Frame Number, conditional
        Group Index
        Segment Index
Public Base field, PUBDEF
Public Name field, PUBDEF
Public names definition record. See PUBDEF record
Public Names Definition Record (PUBDEF)
Public Offset field, PUBDEF
Public symbol
Public variable


R
──────────────────────────────────────────────────────────────────────────
Random
Read
Read Keyboard and Echo (Function 01H)
Read Keyboard (Function 08H)
Read Only Memory
Read or Write
Record format
    abbreviation
    bitfields
    conditional field
    repeated field
Record formats
Record format
    sample (SAMREC)
    SAMREC (sample record)
        CHKSUM field
        Name field
        Number field
        Record Length field
    SAMREC(sample record)
        RECTYP field
    title
Record Length field, SAMREC
Record order
    definition
    semantic rules
    syntax
Record Size
Record
    COMDEF
    COMENT
    comment
    Data
    EXTDEF
    FIXUP
    FIXUPP
    GRPDEF
    LEDATA
    LHEADR
    LIDATA
    LINNUM
    LNAMES
    LOCSYM
    MODEND
    PUBDEF
    RECTYP(record type)
    SAMREC (sample record)
    SEGDEF
    symbol definition
        COMDEF
        EXTDEF
        PUBDEF
    THEADR
    TYPDEF
RECTYP(record type)field
Reference self-relative
Reference
    segment-relative
References
    WIRTH:CACM, Nov. 1977)
Register
    CS
    DS
    ES
Registers, treatment of
Register
    SS
Relocatable memory image
Relocatable segment, LSEG
Relocation information
Relocation item offset value to a word in the load
Relocation table
Remove
Rename File (Function 17H)
Repeat Count subfield, Iterated Data Block
request header
Request packet
Reset Disk (Function 0DH)
Resident device drivers
ROM
Root directory


S
──────────────────────────────────────────────────────────────────────────
SAMREC (sample record)
    schematic
Search for First Entry (Function 11H)
Search for Next Entry (Function 12H)
Sector count
SEG ATTR field, SEGDEF
SEGDEF record
    definition
    field
        CHKSUM
        Class Name Index
        Overlay Name Index
        Record Length
        RECTYP
        SEG ATTR
        Segment Name Index
    schematic
    subfield of SEG ATTR
        Alignment
        Big
        Combination
        Offset, conditional
SEGDEF recrod
    field
        Segment Length
Segment addressing
Segment definition record. See SEGDEF record
Segment Definition Record (SEGDEF)
Segment Index
Segment Index field, LEDATA
Segment Index field, LIDATA
Segment Index subfield, Group Component Descriptor
Segment Index subfield, Line Number Base
Segment Index subfield, Public Base
Segment Length field, SEGDEF
Segment Name, definition
Segment Name Index field, SEGDEF
Segment
    absolute, LSEG
    attribute
        Alignment
        Combination
    logical (LSEG)
    physical (PSEG)
Segment-relative fixup
Segment-relative reference
Segment
    relocatable, LSEG
Select Disk (Function 0EH)
Self-relative fixup
Self-relative reference
Semantic rules, record ordering
Semantics, link-time
Sequential Read (Function 14H)
Sequential Write (Function 15H)
Set
Set Block (Function 4AH)
Set command
Set Disk Transfer Address (Function 1AH)
Set Handle Count(Function 67H)
Set Interrupt Vector (Function 25H)
Set/Reset
SHORT-JUMP instruction
SS register
Stack segment, SS
Standard character I/O function requests
START ADDRS field, MODEND
    Format
Start sector
Start segment value the relocation item offset
static request header
Status
Status field
Strategy entry point
Strategy routines
Subfield OFFH
Subfield
    Comment Type
        Comment Class
    Eight Leaf Descriptor
        EN
        Leaf Descriptor
    Fixup
        Frame Datum
        Target Datum
        Target Displacement
    Frame Number, conditional
    Group Component Descriptor
        Segment Index
    Iterated Data Block
        Block Count
        Content
        Repeat Count
    Leaf Descriptor
        Element Type Index
        FAR
        Length in Bits
        NEAR
        Number of Elements
        VAR SUBTYP
        VARTYP
    Line Number Base, LINNUM
        Group Index
        Segment Index
    MOD TYP
        MATTR
    Public Base
        Group INdex
    SEG ATTR
        Alignment
        Big
        Combination
    Segment Index
    START ADDRS
        Frame Datum
        Target Datum
        Target Displacement
    Thread
        Index
        TRD DAT
Superseded system calls
Symbol definition
Symbol definition record
    COMDEF
    EXTDEF
    PUBDEF
Symbol
    local
    public
Syntax, record ordering
Sysinit
System call
    National Language Support
System calls
    definition
    programming hints
    replacements for old
System Calls
    superseded calls
System calls
    types of
System files
System prompt
System-management function requests


T
──────────────────────────────────────────────────────────────────────────
Target Datum field, FIXUPP
Target Datum subfield, Fixup
    External Index
    Group Index
    Segment Index
Target Datum subfield, START ADDRS
Target Displacement subfield, Fixup
Target Displacment subfield, START ADDRS
Target
    definition
    nomenclature
    specification attribute
    specifying
    specifying, FIXUPP
    Thread Number, FIXUPP
Terminate But Stay Resident (Interrupt 27H)
Terminate Process Exit Address (Interrupt 22H)
Terminate Program (Function 00H)
THEADR record
    field
        CHKSUM
        Record Length
        RECTYP
        T-module Name
    schematic
Thread Data subfield. See TRD DAT subfield, Thread
Thread field, FIXUPP
    data type
        Frame
        Target
    definition
Thread Number, THRED
T-module, definition
T-module Header Record (THEADR)
T-Module Name
Transfer address
TRD DAT subfield, Thread
    D subfield
    internal structure
    Method subfield
    schematic
    THRED subfield
TYPDEF record
    communal variable
    field
        CHKSUM
        Eight Leaf Descriptor
        Record Length
        RECTYP
    subfield of Eight Leaf Descriptor
        EN
    subfield of Leaf Descriptor
        Element Type Index
        FAR
        Length in Bits
        NEAR
        Number of Elements
        VAR SUBTYP, optional
        VARTYP
Type Index field, COMDEF
Type Index field, EXTDEF
Type Index field, LOCSYM
Type Index field, PUBDEF
Type-ahead buffer


U
──────────────────────────────────────────────────────────────────────────
Unit code field
Unlock (Function 5CH, Code 01H)
Unopened FCB
User Stack
User stack
Utility commands, NLS


V
──────────────────────────────────────────────────────────────────────────
VAR SUBTYP subfield, Leaf Descriptor
Variable
    communal
        FAR
        HUGE
        NEAR
    public
VARTYP subfield, Leaf Descriptor
    ARRAY
    SCALAR
    STRUCT
Vector table
Volume ID
Volume label


W
──────────────────────────────────────────────────────────────────────────
Wildcard
Wildcard characters
Write Handle (Function 40H)


X
──────────────────────────────────────────────────────────────────────────
XENIX, 8086 object language
```

{% endraw %}
