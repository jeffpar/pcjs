---
layout: page
title: "The MS-DOS Encyclopedia: Appendix B: Critical Error Codes"
permalink: /documents/books/programming/msdos/encyclopedia/appendix-b/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/appendix-b/
---

### Appendix B: Critical Error Codes

{% raw %}

        Critical errors are returned via Interrupt 24H. If register AL bit 7
        is 0, then the error was a disk error; if register AL bit 7 is 1, then
        the error was a nondisk error. The upper half of DI is undefined; the
        lower half of DI contains one of the following error-condition codes:

    ╓┌──────────────┌────────────────────────────────────────────────────────────╖
        Code      Description
        ──────────────────────────────────────────────────────────────────
        00H       Attempt to write on write-protected disk
        01H       Unknown drive or unit
        02H       Drive not ready
        03H       Invalid command
        04H       Data error (CRC failed)
        05H       Bad request structure length
        06H       Seek error
        07H       Unknown media type
        08H       Sector not found
        09H       Printer out of paper
        0AH       Write fault
        0BH       Read fault
        0CH       General failure
        0FH       Invalid disk change

{% endraw %}

Return to [The MS-DOS Encyclopedia](../): [Contents](../#contents)
