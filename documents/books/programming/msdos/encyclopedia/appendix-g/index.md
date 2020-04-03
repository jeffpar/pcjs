---
layout: page
heading: The MS-DOS Encyclopedia
title: "The MS-DOS Encyclopedia: Appendix G: File Control Block (FCB) Structure"
permalink: /documents/books/programming/msdos/encyclopedia/appendix-g/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/appendix-g/
---

### Appendix G: File Control Block (FCB) Structure

{% raw %}

```none
    Figures G-1 and G-2 (memory block diagrams) and Tables G-1 and G-2
    describe the structure of normal and extended file control blocks
    (FCBs).


    Offset
        00H  ┌──────────────────────────┐
            │     Drive identifier     │
        01H  ├──────────────────────────┤
            │                          │
            │                          │
            │                          │
            │                          │
            │                          │
            │         Filename         │
            │                          │
            │                          │
            │                          │
            │                          │
            │                          │
            │                          │
            │                          │
        09H  ├──────────────────────────┤
            │                          │
            │      File extension      │
            │                          │
        0CH  ├──────────────────────────┤
            │                          │
            │   Current block number   │
            │                          │
        0EH  ├──────────────────────────┤
            │                          │
            │   Record size (bytes)    │
        10H  ├──────────────────────────┤
            │                          │
            │                          │
            │    File size (bytes)     │
            │                          │
            │                          │
        14H  ├──────────────────────────┤
            │                          │
            │        Date stamp        │
            │                          │
        16H  ├──────────────────────────┤
            │                          │
            │        Time stamp        │
            │                          │
        18H  ├──────────────────────────┤
            │                          │
            │                          │
            │                          │
            │         Reserved         │
            │                          │
            │                          │
        20H  ├──────────────────────────┤
            │  Current record number   │
        21H  ├──────────────────────────┤
            │                          │
            │                          │
            │   Random record number   │
            │                          │
            │                          │
            └──────────────────────────┘

    Figure G-1. Structure of a normal file control block.


    Table G-1. Elements of a Normal File Control Block.

╓┌──────────────────────┌──────────┌─────────────────────────────────────────╖
                    Maintained
    Element           by         Comments
    ──────────────────────────────────────────────────────────────────
    Drive identifier  Program    Designates the drive on which the
                                file to be opened or created resides
                                (0 = default drive, 1 = drive A, 2 =
                                drive B, and so on). If the
                                application supplies a zero in this
                                byte, MS-DOS alters the byte during
                                the open or create operation to
                                reflect the actual drive used.

    Filename          Program    Standard eight-character filename;
                                must be left justified and must be
                                padded with blanks if fewer than
                                eight characters. A device name (for
                                example, PRN) can be used; there is
                                no colon after a device name.

    File extension    Program    Three-character file extension; must
                                be left justified and must be padded
                                with blanks if fewer than three
                                characters.

    Current block    Program     Zero when the file is opened; the
    number                       current block number and the current
                                record number combined make up the
                                record pointer during sequential
                                file access.

    Record size       Program    Set to 128 when the file is opened or
                                created; the program can modify the
                                field afterward to any desired
                                record size.

    File size         MS-DOS     The size of the file in bytes; the
                                first 2 bytes of this 4-byte field
                                are the least significant bytes of
                                the file size.

    Date stamp        MS-DOS     The date of the last write operation
                                on the file; follows the same format
                                used by Interrupt 21H file handle
                                Function 57H (Get/Set Time and Date):

                                        Bits      Contents
                                        9-15      Year (relative to 1980)
                                        5-8       Month (1-12)
                                        0-4       Day of month (1-31)

    Time stamp        MS-DOS     The time of the last write operation
                                on the file; follows the same format
                                used by Interrupt 21H file handle
                                Function 57H (Get/Set Time and Date):

                                        Bits      Contents
                                        11-15     Hours (0-23)
                                        5-10      Minutes (0-59)
                                        0-4       Number of 2-second
                                                increments (0-29)

    Current record    Program    Limited to the range 0 through 127; there
    number                       are 128 records per block. The beginning
                                of a file is record 0 of block 0.
                                Together with the current block number,
                                this field constitutes the record pointer
                                used during sequential read and write
                                operations. MS-DOS does not automatically
                                initialize this field when a file is
                                opened.

    Random record     Program    Identifies the record to be transferred
    pointer                      by the Interrupt 21H random record
                                functions 21H, 22H, 27H, and 28H; if the
                                record size is 64 bytes or larger, only
                                the first 3 bytes of this field are used.
                                MS-DOS updates this field after random
                                block reads and writes (Functions 27H and
                                28H) but not after random record reads
                                and writes (Functions 21H and 22H).


    Table G-2. Additional Elements of an Extended File Control Block.

╓┌──────────────────────┌──────────┌─────────────────────────────────────────╖
                    Maintained
    Element           by         Comments
    ──────────────────────────────────────────────────────────────────
    Extended FCB flag Program    0FFH tells MS-DOS this is an extended
                                (44-byte) FCB.

    File attribute    Program    Must be initialized by the application
    byte                         when an extended FCB is used to open or
                                create a file. The bits of this field
                                have the following significance:

                                        Bit       Meaning
                                        0         Read-only
                                        1         Hidden
                                        2         System
                                        3         Volume label
                                        4         Directory
                                        5         Archive
                                        6         Reserved
                                        7         Reserved


    Offset
        00H  ┌──────────────────────────┐
            │ Extended FCB flag (0FFH) │
        01H  ├──────────────────────────┤
            │                          │
            │                          │
            │                          │
            │                          │
            │                          │
            │         Reserved         │
            │                          │
            │                          │
            │                          │
        06H  ├──────────────────────────┤
            │   File attribute byte    │
        07H  ├──────────────────────────┤
            │     Drive identifier     │
        08H  ├──────────────────────────┤
            │                          │
            │         Filename         │
            │                          │
        10H  ├──────────────────────────┤
            │                          │
            │      File extension      │
            │                          │
        13H  ├──────────────────────────┤
            │                          │
            │   Current block number   │
        15H  ├──────────────────────────┤
            │                          │
            │    Record size (bytes)   │
        17H  ├──────────────────────────┤
            │                          │
            │    File size (bytes)     │
            │                          │
        1BH  ├──────────────────────────┤
            │                          │
            │        Date stamp        │
        1DH  ├──────────────────────────┤
            │                          │
            │        Time stamp        │
        1FH  ├──────────────────────────┤
            │                          │
            │                          │
            │                          │
            │                          │
            │         Reserved         │
            │                          │
            │                          │
        27H  ├──────────────────────────┤
            │  Current record number   │
        28H  ├──────────────────────────┤
            │                          │
            │                          │
            │   Random record number   │
            │                          │
            │                          │
            └──────────────────────────┘

    Figure G-2. Structure of an extended file control block.
```

{% endraw %}

Return to [The MS-DOS Encyclopedia](../): [Contents](../#contents)
