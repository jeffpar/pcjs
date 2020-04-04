---
layout: page
heading: The MS-DOS Encyclopedia
title: "The MS-DOS Encyclopedia: Appendix H: Program Segment Prefix (PSP) Structure"
permalink: /documents/books/programming/mspl13/msdos/encyclopedia/appendix-h/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/appendix-h/
---

### Appendix H: Program Segment Prefix (PSP) Structure

{% raw %}

```none
    Figure H-1 (memory block diagram) illustrates the structure of the
    program segment prefix (PSP).


                Size
                (in
    Offset     bytes)               Contents
    00H (0)      2┌──────────────────────────────────────────┐
                │           INT 20H instruction            │
    02H (2)      2├──────────────────────────────────────────┤
                │         Address of last segment          │
                │           allocated to program           │
    04H (4)      1├──────────────────────────────────────────┤
                │           Reserved; normally 0           │
    05H (5)      5├──────────────────────────────────────────┤
                │                                          │
                │ Long call to MS-DOS function dispatcher  │
                │                                          │
    0AH (10)     4├──────────────────────────────────────────┤
                │    Terminate program interrupt vector    │
                │             (Interrupt 22H)              │
    0EH (14)     4├──────────────────────────────────────────┤
                │     Ctrl-C handler interrupt vector      │
                │             (Interrupt 23H)              │
    12H (18)     4├──────────────────────────────────────────┤
                │ Critical error handler interrupt vector  │
                │             (Interrupt 24H)              │
    16H (22)    22├──────────────────────────────────────────┤
                │                                          │
                │                                          │
                │                 Reserved                 │
                │                                          │
                │                                          │
    2CH (44)     2├──────────────────────────────────────────┤
                │      Segment address of environment      │
    2EH (46)    34├──────────────────────────────────────────┤
                │                                          │
                │                                          │
                │                 Reserved                 │
                │                                          │
                │                                          │
    50H (80)     3├──────────────────────────────────────────┤
                │        INT 21H, RETF instructions        │
    53H (83)     9├──────────────────────────────────────────┤
                │                                          │
                │                 Reserved                 │
                │                                          │
    5CH (92)   16 ├──────────────────────────────────────────┤
                │                                          │
                │                                          │
                │       Default file control block 1       │
                │                                          │
                │                                          │
    6CH (108)  20 ├──────────────────────────────────────────┤
                │                                          │
                │       Default file control block 2       │
                │        (overlaid if FCB 1 opened)        │
                │                                          │
                │                                          │
    80H (128)  127├──────────────────────────────────────────┤
                └──────────────┐                           │
                ┌─────────────┐└─────────────┐             │
                │             └─────────────┐└─────────────┘
                │                           └──────────────┐
                │       Command tail and default DTA       │
                │                                          │
    FFH (255)     └──────────────────────────────────────────┘

    Figure H-1. Structure of the program segment prefix.
```

{% endraw %}

Return to [The MS-DOS Encyclopedia](../): [Contents](../#contents)
