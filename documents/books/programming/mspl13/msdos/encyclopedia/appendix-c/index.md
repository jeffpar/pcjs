---
layout: page
heading: The MS-DOS Encyclopedia
title: "The MS-DOS Encyclopedia: Appendix C: Extended Error Codes"
permalink: /documents/books/programming/mspl13/msdos/encyclopedia/appendix-c/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/appendix-c/
---

### Appendix C: Extended Error Codes

{% raw %}

```none
    The extended error codes used by Interrupt 21H functions consist of
    four separate codes in the AX, BH, BL, and CH registers. These codes
    give as much detail as possible about the error and suggest how the
    issuing program should respond.


AX--Extended Error Code

    If an error condition occurs in response to an Interrupt 21H function
    call, the carry flag is set and one of the following error codes is
    returned in AX:

╓┌──────────────┌────────────────────────────────────────────────────────────╖
    Error     Description
    ──────────────────────────────────────────────────────────────────
    01H       Invalid function code
    02H       File not found
    03H       Path not found
    04H       Too many open files (no handles left)
    05H       Access denied
    06H       Invalid handle
    07H       Memory control blocks destroyed
    08H       Insufficient memory
    09H       Invalid memory block address
    0AH       Invalid environment
    0BH       Invalid format
    0CH       Invalid access code
    0DH       Invalid data
    0EH       Reserved
    0FH       Invalid drive
    10H       Attempt to remove the current directory
    11H       Not same device
    12H       No more files
    13H       Disk is write-protected
    14H       Bad disk unit
    15H       Drive not ready
    16H       Invalid disk command
    17H       CRC error
    18H       Invalid length (disk operation)
    19H       Seek error
    1AH       Not an MS-DOS disk
    1BH       Sector not found
    1CH       Out of paper
    1DH       Write fault
    1EH       Read fault
    1FH       General failure
    20H       Sharing violation
    21H       Lock violation
    22H       Wrong disk
    23H       FCB unavailable
    24H       Sharing buffer overflow
    25-31H    Reserved
    32H       Network request not supported
    33H       Remote computer not listening
    34H       Duplicate name on network
    35H       Network path not found
    36H       Network busy
    37H       Network device no longer exists
    38H       Net BIOS command limit exceeded
    39H       Network adapter hardware error
    3AH       Incorrect response from network
    3BH       Unexpected network error
    3CH       Incompatible remote adapter
    3DH       Print queue full
    3EH       Print queue not full
    3FH       Print file was canceled (not enough space)
    40H       Network name was deleted
    41H       Access denied
    42H       Network device type incorrect
    43H       Network name not found
    44H       Network name limit exceeded
    45H       Net BIOS session limit exceeded
    46H       Sharing temporarily paused
    47H       Network request not accepted
    48H       Print or disk redirection paused
    49-4FH    Reserved
    50H       File exists
    51H       Reserved
    52H       Cannot make directory entry
    53H       Fail on Interrupt 24H
    54H       Out of network structures
    55H       Device already assigned
    56H       Invalid password
    57H       Invalid parameter
    58H       Network data fault


BH--Error Class

    BH returns a code that describes the class of error that occurred:

╓┌──────────────┌────────────────────────────────────────────────────────────╖
    Class     Description
    ──────────────────────────────────────────────────────────────────
    01H       Out of a resource, such as storage or channels
    02H       Not an error, but a temporary situation (such as a locked
            region in a file) that can be expected to end
    03H       Authorization problem
    04H       An internal error in system software
    05H       Hardware failure
    06H       A system software failure not the fault of the active
            process (could be caused by missing or incorrect
            configuration files, for example)
    07H       Application program error
    08H       File or item not found
    09H       File or item of invalid format or type or otherwise invalid
            or unsuitable
    0AH       File or item interlocked
    0BH       Wrong disk in drive, bad spot on disk, or other problem with
            storage medium
    0CH       Other error


BL--Suggested Action

    BL returns a code that suggests how the program should respond to the
    error:

╓┌──────────────┌────────────────────────────────────────────────────────────╖
    Action    Description
    ──────────────────────────────────────────────────────────────────
    01H       Retry, then prompt user.
    02H       Retry after a pause.
    03H       If the user entered data such as a drive letter or filename,
            prompt for it again.
    04H       Terminate with cleanup.
    05H       Terminate immediately. The system is so unhealthy that the
            program should exit as soon as possible without taking the
            time to close files and update indexes.
    06H       Error is informational.
    07H       Prompt the user to perform some action, such as changing
            disks, then retry the operation.


CH--Locus

    CH returns a code that provides additional information to help locate
    the area involved in the failure. This code is particularly useful for
    hardware failures (BH = 05H).

╓┌──────────────┌────────────────────────────────────────────────────────────╖
    Locus     Description
    ──────────────────────────────────────────────────────────────────
    01H       Unknown
    02H       Related to random-access block devices, such as a disk drive
    03H       Related to network
    04H       Related to serial-access character devices, such as a
            printer
    05H       Related to random-access memory


Procedure

    Programs should handle errors by noting the error returned in AX from
    the original system call and then invoking Interrupt 21H Function 59H
    to get the extended error information. If no extended error
    information is provided, the program should respond to the original
    error code.

    The Function 59H system call is available during Interrupt 24H.
```

{% endraw %}

Return to [The MS-DOS Encyclopedia](../): [Contents](../#contents)
