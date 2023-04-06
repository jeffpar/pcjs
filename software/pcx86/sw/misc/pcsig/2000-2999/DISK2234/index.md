---
layout: page
title: "PC-SIG Diskette Library (Disk #2234)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2234/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2234"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VPT, VFONT, READ, SEL, SNOOP, V7CURS"

    With this program, VGA or MCGA users can use the quarter-million
    (262,144) available VGA colors.  It's interactive and easy to use. It
    has a graphic display -- there are no ``magic numbers'' to type.
    
    Set any text-mode attribute to any color out of the quarter-million and
    control the overscan (border) color (not available on MCGA
    systems).  The colors ``stick'' with almost all programs.  Load and
    save your favorite settings in color files, and use the program in a
    command-line mode (for batch files).
    
    VPT operates in text mode and allows setting of any or all of the
    sixteen attributes available in text mode.
    
    Tired of the default VGA text-mode font?
    VFONT contains and loads replacement fonts for VGA systems.  It
    includes two variations of a ``modern'' font, and a handwritten
    ``scrawl'' font.
    
    The DOS version is a TSR (memory-resident) program that takes up
    approximately 4.5K of RAM, and works only in text modes.  The OS/2
    version calls the OS to request a new font, and works only in
    full-screen sessions.
    
    The four fonts are modern solid-line, modern-double-line,
    scrawl-straight-line, and scrawl-scrawled-line.  Modern is a pleasing,
    sans serif font.  Scrawl is a handwritten looking ``scrawled'' font.
    
    VFONT remains in place even if your software sets the video mode. This
    means the font won't go away as with some other font programs.  The
    OS/2 version is saved and restored by the OS when switching between
    screen groups.
    
    If you are a batch file writer who needs interaction and the use of
    DOS' environment variables, here are utilities to make your life
    easier.
    
    Most batch file utilities return results in the ERRORLEVEL.  These
    utilities set an environment variable, which means direct character
    results can be communicated between programs.  If you ask for a Y or N
    you can test for a Y or N.
    
    READLN and READKEY are programs that get input from the keyboard and
    place it in environment variables.  They're perfect for making
    interactive batch files and much easier to use than utilities that use
    ERRORLEVEL to communicate the results.
    
    READLN displays the prompt and waits for input.  All input up to an
    ENTER is placed in a specified environment variable.  If the first
    letter of var is capitalized, the input will be also.
    
    READKEY displays the prompt and waits for input.  ONE character is read
    (no ENTER is needed) and it is placed in the environment variable var.
    If the first letter of var is capitalized, the input character will be
    also.  If an extended key (function key, arrow keys, &c.) is pressed,
    the ASCII representation of the hexadecimal scan code for the key is
    placed in the variable. If a Carriage Return, Escape, BEL, or TAB is
    pressed, the ASCII representation of the character's ASCII code is
    placed in the variable.
    
    SEL is an ANSI color selector for DOS or OS/2 for those who use any
    ANSI screen driver (ANSI.SYS, NANSI.SYS, &c. under DOS; ANSI ON for
    OS/2).
    
    The program has easy color selection using mnemonics instead of
    numbers, a random color selection mode, and sets the prompt to a
    contrasting color.
    
    This utility is not for beginners; it's for programmers and advanced
    users who wish to snoop around the VGA BIOS.
    
    SNOOP shows various EGA and VGA pointers maintained by BIOS, and
    displays the contents of the tables these pointers point to.  These
    tables include the user palette override table, the alpha character
    override table, and the SAVE_PTR table.  The program also displays the
    current contents of the VGA color registers.
    
    V7CURS is for anyone who owns a VGA card based on the V7VGA chipset,
    such as the FastWrite VGA or VRAM VGA and hates blinking cursors.
    
    It exploits the non-blinking hardware cursor built into the V7VGA
    chipset by Video-7/Headland Technologies.  It is a small TSR (memory-
    resident) program that turns off the blinking, leaving you with an XOR
    cursor.  This mode shows what's underneath the cursor.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #2234

     Volume in drive A has no label
     Directory of A:\

    LOCK     COM       170   9-24-89   7:46p
    SEL      EXE      7824   9-24-89   7:46p
    TSTPATN  EXE      6048   9-24-89   7:46p
    VPT      EXE     23840   9-24-89   7:46p
    VPT      MAN     15743  11-24-89   5:21p
    VFONT    COM     17310   3-05-89  10:32p
    VFONT    MAN      4819  11-08-89   9:43p
    VFONT2   EXE     18277   4-15-89   9:02p
    VFONT2   MAN      4393  10-29-89   8:01p
    SEL      BAT        35  10-31-89  10:28p
    SELPRG   EXE     15042  11-02-89  10:17p
    SEL      CMD        36  11-26-89   9:14p
    SELPRG2  EXE     15263  11-29-89   9:39p
    SEL      MAN      8293  11-27-89   8:00p
    READ     MAN      5527   3-27-89   9:13p
    READKEY  EXE      5632   3-27-89   9:10p
    READLN   EXE      5104   3-27-89   9:10p
    SNOOP    EXE     23104   3-02-89  10:35p
    V7CURS   COM       191   3-03-89   7:47p
    V7CURS   MAN      3607   3-03-89   8:07p
    GO       BAT        38   1-01-80   1:37a
    FILE2234 TXT      8954   1-01-80   4:01a
    GO       TXT      1618   1-01-80   4:11a
           23 file(s)     190868 bytes
                          119808 bytes free
