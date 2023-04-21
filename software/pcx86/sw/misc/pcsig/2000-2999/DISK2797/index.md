---
layout: page
title: "PC-SIG Diskette Library (Disk #2797)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2797/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2797"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## REF.TXT

{% raw %}
```








Fastgraph (tm)

Reference Manual






































                                                            Copyright (c) 1991
                                                           All Rights Reserved



                                                           Ted Gruber Software
                                                                  PO Box 13408
                                                          Las Vegas, NV  89112

                                                                (702) 735-1980
Copyright (c) 1991 by Ted Gruber Software.

All rights reserved.  This publication and its associated software are sold
without warranties, either expressed or implied, regarding their
merchantability or fitness for any particular application or purpose.  The
information in this publication is subject to change without notice and does
not represent a commitment on the part of Ted Gruber Software.  In no event
shall Ted Gruber Software be liable for any loss of profit or any other
commercial damage, including but not limited to special, incidental,
consequential, or other damages resulting from the use of or the inability to
use this product, even if Ted Gruber Software has been notified of the
possibility of such damages.


First Printing, June 1991

Fastgraph version 2.00
Fastgraph/Light version 1.00




Fastgraph and Fastgraph/Light are trademarks of Ted Gruber Software.

Hercules is a trademark of Hercules Computer Technology.

IBM, IBM PC, IBM PC/XT, IBM PC/AT, PS/2, PCjr, and PC-DOS are
registered trademarks of International Business Machines, Inc.

Microsoft and MS-DOS are registered trademarks of Microsoft Corporation.

QuickBASIC is a trademark of Microsoft Corporation.

Tandy is a registered trademark of Tandy Corporation.



All other brand and product names mentioned in this publication are
trademarks or registered trademarks of their respective holders.
                      T a b l e   o f   C o n t e n t s


Introduction  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    1

Fastgraph Routines by Category  . . . . . . . . . . . . . . . . . . . . .    1

Alphabetical List of Fastgraph Routines . . . . . . . . . . . . . . . . .    2
     fg_allocate  . . . . . . . . . . . . . . . . . . . . . . . . . . . .    4
     fg_automode  . . . . . . . . . . . . . . . . . . . . . . . . . . . .    5
     fg_bestmode  . . . . . . . . . . . . . . . . . . . . . . . . . . . .    6
     fg_button  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    7
     fg_capslock  . . . . . . . . . . . . . . . . . . . . . . . . . . . .    8
     fg_chgattr . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    9
     fg_chgtext . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   10
     fg_circle  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   11
     fg_circlew . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   12
     fg_clipmask  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   13
     fg_clpimage  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   14
     fg_clprect . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   15
     fg_clprectw  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   16
     fg_cursor  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   17
     fg_dash  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   18
     fg_dashrel . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   19
     fg_dashrw  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   20
     fg_dashw . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   21
     fg_defcolor  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   22
     fg_dispfile  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   23
     fg_display . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   24
     fg_displayp  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   26
     fg_draw  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   28
     fg_drawmap . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   29
     fg_drawmask  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   30
     fg_drawrel . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   32
     fg_drawrw  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   33
     fg_draww . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   34
     fg_drect . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   35
     fg_drectw  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   36
     fg_drwimage  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   37
     fg_egacheck  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   38
     fg_ellipse . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   39
     fg_ellipsew  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   40
     fg_erase . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   41
     fg_fadein  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   42
     fg_fadeout . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   43
     fg_flipmask  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   44
     fg_flpimage  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   45
     fg_freepage  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   46
     fg_getaddr . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   47
     fg_getclock  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   48
     fg_getcolor  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   49
     fg_gethpage  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   50
     fg_getimage  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   51
     fg_getindex  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   52
     fg_getkey  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   53
     fg_getmap  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   54
     fg_getmaxx . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   55

     fg_getmaxy . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   56
     fg_getmode . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   57
     fg_getpage . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   58
     fg_getpixel  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   59
     fg_getrgb  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   60
     fg_getvpage  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   61
     fg_getworld  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   62
     fg_getxjoy . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   63
     fg_getxpos . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   64
     fg_getyjoy . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   65
     fg_getypos . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   66
     fg_hush  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   67
     fg_hushnext  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   68
     fg_initjoy . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   69
     fg_initw . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   70
     fg_intjoy  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   71
     fg_intkey  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   73
     fg_locate  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   74
     fg_measure . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   75
     fg_memavail  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   76
     fg_mousebut  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   77
     fg_mousecur  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   78
     fg_mouseini  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   80
     fg_mouselim  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   81
     fg_mousemov  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   82
     fg_mousepos  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   83
     fg_mouseptr  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   84
     fg_mousespd  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   86
     fg_mousevis  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   87
     fg_move  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   88
     fg_moverel . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   89
     fg_moverw  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   90
     fg_movew . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   91
     fg_music . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   92
     fg_musicb  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   94
     fg_numlock . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   95
     fg_paint . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   96
     fg_paintw  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   97
     fg_palette . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   98
     fg_palettes  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  100
     fg_pan . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  101
     fg_panw  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  102
     fg_pattern . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  103
     fg_playing . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  105
     fg_point . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  106
     fg_pointw  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  107
     fg_polygon . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  108
     fg_polygonw  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  109
     fg_quiet . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  110
     fg_rect  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  111
     fg_rectw . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  112
     fg_reset . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  113
     fg_restore . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  114
     fg_restorew  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  115
     fg_revimage  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  116
     fg_revmask . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  117
     fg_save  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  118

     fg_savew . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  119
     fg_scrlock . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  120
     fg_scroll  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  121
     fg_setangle  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  123
     fg_setattr . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  124
     fg_setcaps . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  125
     fg_setclip . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  126
     fg_setclipw  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  127
     fg_setcolor  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  128
     fg_setfunc . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  129
     fg_sethpage  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  130
     fg_setmode . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  131
     fg_setnum  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  133
     fg_setpage . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  134
     fg_setratio  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  135
     fg_setrgb  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  136
     fg_setsize . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  137
     fg_setsizew  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  138
     fg_setvpage  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  139
     fg_setworld  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  140
     fg_sound . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  141
     fg_sounds  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  142
     fg_stall . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  144
     fg_swchar  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  145
     fg_swlength  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  147
     fg_swtext  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  148
     fg_tcmask  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  150
     fg_tcxfer  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  151
     fg_testmode  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  153
     fg_text  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  154
     fg_transfer  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  155
     fg_version . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  157
     fg_voice . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  158
     fg_voices  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  160
     fg_waitfor . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  162
     fg_waitkey . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  163
     fg_where . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  164
     fg_xalpha  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  165
     fg_xconvert  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  166
     fg_xscreen . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  167
     fg_xworld  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  168
     fg_yalpha  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  169
     fg_yconvert  . . . . . . . . . . . . . . . . . . . . . . . . . . . .  170
     fg_yscreen . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  171
     fg_yworld  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  172

Introduction

     The Fastgraph Reference Manual is a companion publication to the
Fastgraph User's Guide.  Whereas the latter publication is essentially a
detailed tutorial about Fastgraph, the Fastgraph Reference Manual is intended
as a reference for programmers familiar with the product.

     This manual has two major parts.  The first part lists the Fastgraph
routines by category; each category corresponds to a chapter in the Fastgraph
User's Guide.  The second part, which occupies the larger portion of this
manual, gives descriptions of each Fastgraph routine in alphabetical order.


Fastgraph Routines by Category

     This section lists the Fastgraph routines by category.  These categories
parallel the chapters in the Fastgraph User's Guide.  The lists in this
section are provided as a general overview of Fastgraph's capabilities.  You
can find detailed information about each Fastgraph routine in the next
section of this manual, and of course in the Fastgraph User's Guide.

Video Initialization Routines:  fg_automode, fg_bestmode, fg_cursor,
fg_egacheck, fg_getmode, fg_reset, fg_setmode, fg_testmode.

Coordinate Routines:  fg_getmaxx, fg_getmaxy, fg_getworld, fg_initw,
fg_setworld, fg_xalpha, fg_xconvert, fg_xscreen, fg_xworld, fg_yalpha,
fg_yconvert, fg_yscreen, fg_yworld.

Color-Related Routines:  fg_defcolor, fg_getcolor, fg_getindex, fg_getrgb,
fg_palette, fg_palettes, fg_setattr, fg_setcolor, fg_setrgb.

Fundamental Graphics Routines:  fg_circle, fg_circlew, fg_clprect,
fg_clprectw, fg_dash, fg_dashrel, fg_dashrw, fg_dashw, fg_draw, fg_drawrel,
fg_drawrw, fg_draww, fg_drect, fg_drectw, fg_ellipse, fg_ellipsew, fg_erase,
fg_getpixel, fg_getxpos, fg_getypos, fg_move, fg_moverel, fg_moverw,
fg_movew, fg_paint, fg_paintw, fg_point, fg_pointw, fg_polygon, fg_polygonw,
fg_rect, fg_rectw, fg_setclip, fg_setclipw.

Character Display Routines:  fg_chgattr, fg_chgtext, fg_locate, fg_setangle,
fg_setattr, fg_setcolor, fg_setratio, fg_setsize, fg_setsizew, fg_swchar,
fg_swlength, fg_swtext, fg_text, fg_where, fg_xalpha, fg_xconvert, fg_yalpha,
fg_yconvert.

Video Page Management Routines:  fg_allocate, fg_freepage, fg_getaddr,
fg_gethpage, fg_getpage, fg_getvpage, fg_sethpage, fg_setpage, fg_setvpage.

Image Management Routines:  fg_clipmask, fg_clpimage, fg_dispfile,
fg_display, fg_displayp, fg_drawmap, fg_drawmask, fg_drwimage, fg_flipmask,
fg_flpimage, fg_getimage, fg_getmap, fg_pattern, fg_restore, fg_restorew,
fg_revimage, fg_revmask, fg_save, fg_savew, fg_tcmask, fg_tcxfer,
fg_transfer.

Special Effects Routines:  fg_fadein, fg_fadeout, fg_pan, fg_panw, fg_scroll.

Input Routines:  fg_button, fg_capslock, fg_getkey, fg_getxjoy, fg_getyjoy,
fg_initjoy, fg_intjoy, fg_intkey, fg_mousebut, fg_mousecur, fg_mouseini,


                                      1
fg_mouselim, fg_mousemov, fg_mousepos, fg_mouseptr, fg_mousespd, fg_mousevis,
fg_numlock, fg_scrlock, fg_setcaps, fg_setnum, fg_waitkey.

Sound Routines:  fg_hush, fg_hushnext, fg_music, fg_musicb, fg_playing,
fg_quiet, fg_sound, fg_sounds, fg_voice, fg_voices.

Timing Routines:  fg_getclock, fg_measure, fg_stall, fg_waitfor.

Miscellaneous Routines:  fg_memavail, fg_setfunc, fg_version.


Alphabetical List of Fastgraph Routines

     This section presents a detailed description of each Fastgraph routine.
Once you're familiar with Fastgraph, you'll probably refer to these
descriptions more often than any other section of the two Fastgraph
publications.

     The information presented for each routine includes the following:

     a function prototype for the C programming language
     a description of the routine itself
     the number of parameters, their purpose, and their data types
     the meaning and data type of the routine's return value (if any)
     information about important restrictions pertaining to the routine
     references to similar routines, or other routines that affect the routine
     example programs in the Fastgraph User's Guide that use the routine

     The C function prototype includes information about the routine's return
value, the number of parameters the routine expects, and their data types.
To C programmers, these prototypes should look very familiar, but if you're a
QuickBASIC or FORTRAN programmer not acquainted with C, a few examples might
be helpful.

     Here is the function prototype for the fg_allocate routine:


                      int fg_allocate (int page_number);


The int before the routine name means it returns an integer value.  This
corresponds to the QuickBASIC integer or FORTRAN INTEGER*2 data type.
Because the routine returns a value, you would call it as a FUNCTION.  The
int page_number means the routine expects one integer parameter (named
page_number) passed by value.  If the routine did not expect any parameters,
the word void would appear between the parentheses.

     The function prototype for the fg_drwimage routine illustrates some
additional features:


          void fg_drwimage (char *map_array, int width, int height);






                                      2

The void before the routine name indicates this routine has no return value.
Thus, in QuickBASIC your would call it as a SUB, and in FORTRAN as a
SUBROUTINE.  The parameter list shows three items, one of type char and two
of type int.  The asterisk (*) appearing before the name of the first
parameter means it is passed by reference instead of by value (however, the
DECLARE commands in the file FASTGRAF.BI and the INTERFACE statements in the
file INTRFACE.FOR automatically account for the differences between passing
parameters by reference and passing by value).

     The following table lists the C data types that Fastgraph uses for
parameters and return values, along with their QuickBASIC and FORTRAN
equivalents.


           C data type  QuickBASIC equivalent  FORTRAN equivalent

           char         string                 INTEGER*1 or
                                               CHARACTER*(*)
           int          integer                INTEGER*2
           long         long integer           INTEGER*4
           double       double precision       REAL*8

     Any data types prefixed with the unsigned keyword, such as unsigned
char, can generally be treated as the data type itself in QuickBASIC and
FORTRAN.  In other words, unsigned char is the same as char from the
QuickBASIC and FORTRAN perspectives.  Additionally, the DECLARE commands in
the file FASTGRAF.BI (which must be included in QuickBASIC programs that call
Fastgraph routines) and the INTERFACE statements in the file INTRFACE.FOR
(which must be included in FORTRAN programs that call Fastgraph routines)
automatically convert QuickBASIC and FORTRAN floating point constants to the
C double data type.  This means you don't have to pass double precision
constants when calling Fastgraph routines that require floating point
parameters.  The INTERFACE statements also determine whether char parameters
are passed from FORTRAN as INTEGER*1 or CHARACTER quantities.
























                                      3
fg_allocate


Prototype

   int fg_allocate (int page_number);

Description

   The fg_allocate routine creates a virtual video page.  The amount of memory
   required depends on the current video mode.

Parameters

   page_number is the number by which the virtual page will be referenced.  It
   must be between 0 and 15.

Return value

   A status code indicating the success or failure of the virtual page
   creation, as shown below.

     0 = virtual page created
     7 = virtual page created, but memory control blocks were destroyed
     8 = insufficient memory to create the virtual page

Restrictions

   This routine has no effect if page_number references a physical video page,
   or if used in a video mode that does not support virtual video pages.

See also

   fg_freepage

Examples

   8-3, 8-4, 8-5, 8-6, 8-8, 9-21, 9-22, 9-23, 10-4, 10-5, 11-2, 11-5, 15-1




















                                      4
fg_automode


Prototype

   int fg_automode (void);

Description

   The fg_automode routine determines the graphics video mode that offers the
   most features for the user's display and adapter configuration.

Parameters

   none

Return value

   The return value is the proposed video mode number.  The current display
   and adapter configuration determine the mode number, as illustrated in the
   following table.


                                         display
                       adapter   mono   RGB   ECD   VGA

                          MDA       7     0     7     7
                          HGC      11     0     0    11
                          CGA       0     4     0     0
                          EGA      15    13    16     0
                          VGA      17    17    17    18
                         MCGA      17    17    17    19
                        Tandy       7     9     0     0
                         PCjr       7     9     0     0


   The return value can either be passed directly to the fg_setmode routine,
   or it can help determine suitable video modes for your program.

Restrictions

   none

See also

   fg_bestmode, fg_setmode, fg_testmode

Examples

   3-6, 4-3








                                      5
fg_bestmode


Prototype

   int fg_bestmode (int horizontal, int vertical, int pages);

Description

   The fg_bestmode routine determines the video mode having the requested
   resolution and the most features for the user's display and adapter
   configuration.  It is similar to fg_automode, but it excludes video modes
   that do not offer the specified resolution and video page requirements.
   The video pages can include physical pages, virtual pages, or both.

Parameters

   horizontal specifies the required horizontal resolution.

   vertical specifies the required vertical resolution.

   pages specifies the required number of video pages.

Return value

   If fg_bestmode finds a video mode that offers the specified resolution and
   video page requirements, it returns the corresponding video mode number.
   If not, it returns -1.

Restrictions

   none

See also

   fg_automode, fg_setmode, fg_testmode

Examples

   3-4, 3-7


















                                      6
fg_button


Prototype

   int fg_button (int n);

Description

   The fg_button routine returns information about the state of either
   joystick's button status.

Parameters

   n specifies the joystick number, either 1 or 2.

Return value

   A status code indicating the current button status for the requested
   joystick, as shown below.

     0 = neither button pressed
     1 = top button pressed
     2 = bottom button pressed
     3 = top and bottom buttons pressed

Restrictions

   none

See also

   fg_getxjoy, fg_getyjoy, fg_initjoy, fg_intjoy

Examples

   12-11





















                                      7
fg_capslock


Prototype

   int fg_capslock (void);

Description

   The fg_capslock routine determines the state of the CapsLock key.

Parameters

   none

Return value

   If the return value is 0, it means the CapsLock key is off.  If it is 1, it
   means the CapsLock key is on.

Restrictions

   none

See also

   fg_numlock, fg_scrlock, fg_setcaps, fg_setnum

Examples

   12-3



























                                      8
fg_chgattr


Prototype

   void fg_chgattr (int n);

Description

   The fg_chgattr routine applies the current text attribute to a given number
   of characters, starting at the text cursor position.  This routine leaves
   the text cursor one column to the right of the last character changed (or
   the first column of the next row if the last character is at the end of a
   row).

Parameters

   n is the number of characters for which to change the text attribute.

Return value

   none

Restrictions

   This routine has no effect in graphics video modes.

See also

   fg_chgtext, fg_text

Examples

   7-3
























                                      9
fg_chgtext


Prototype

   void fg_chgtext (char *string, int n);

Description

   The fg_chgtext routine displays a string of hardware characters, starting
   at the text cursor position, using the existing text attributes.  This
   routine leaves the text cursor one column to the right of the last
   character changed (or the first column of the next row if the last
   character is at the end of a row).

Parameters

   string is the arbitrary-length sequence of characters to display.

   n is the number of characters in string.

Return value

   none

Restrictions

   This routine has no effect in graphics video modes.

See also

   fg_chgattr, fg_text

Examples

   7-3






















                                      10
fg_circle


Prototype

   void fg_circle (int radius);

Description

   The fg_circle routine draws an unfilled circle in screen space.  The circle
   is centered at the current graphics cursor position.

Parameters

   radius defines the circle's radius in horizontal screen space units.  Its
   value must be greater than zero.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_circlew, fg_ellipse, fg_ellipsew

Examples

   6-9


























                                      11
fg_circlew


Prototype

   void fg_circlew (double x, double y);

Description

   The fg_circlew routine draws an unfilled circle in world space.  The circle
   is centered at the current graphics cursor position.

Parameters

   radius defines the circle's radius in horizontal world space units.  Its
   value must be greater than zero.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light and has no effect in text
   video modes.

See also

   fg_circle, fg_ellipse, fg_ellipsew

Examples

   6-8

























                                      12
fg_clipmask


Prototype

   void fg_clipmask (char *map_array, int runs, int width);

Description

   The fg_clipmask routine displays a clipped image stored as a masking map.
   The image will be positioned so that its lower left corner is at the
   graphics cursor position.  Refer to the description of the fg_drawmask
   routine for more information about masking maps.

Parameters

   map_array is the arbitrary-length array containing the masking map.

   runs is the number of pixel runs in the masking map.

   width is the width in pixels of the masking map.

Return value

   none

Restrictions

   This routine has no effect in text video modes, or in the native EGA and
   VGA graphics video modes.

See also

   fg_drawmask, fg_flipmask, fg_revmask, fg_setclip

Examples

   9-15




















                                      13
fg_clpimage


Prototype

   void fg_clpimage (char *map_array, int width, int height);

Description

   The fg_clpimage routine displays a clipped image stored as a mode-specific
   bit map.  The image will be positioned so that its lower left corner is at
   the graphics cursor position.  Only that part of the image that falls
   within the current clipping limits will be displayed, but the clipping
   limits will be extended to a byte boundary if necessary.  Refer to the
   Fastgraph User's Guide for complete information about mode-specific bit
   maps.

Parameters

   map_array is the arbitrary-length array containing the bit map.  For EGA
   and VGA graphics modes, each color must be in a separate bit map.  For all
   other graphics modes, all colors are in a single bit map.

   width is the width in bytes of the bit map.

   height is the height in bytes (pixel rows) of the bit map.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_drwimage, fg_flpimage, fg_getimage, fg_revimage, fg_setclip

Examples

   9-8, 9-9
















                                      14
fg_clprect


Prototype

   void fg_clprect (int minx, int maxx, int miny, int maxy);

Description

   The fg_clprect routine draws a solid (filled) rectangle in screen space,
   with respect to the clipping region.

Parameters

   minx is the screen space x coordinate of the rectangle's left edge.

   maxx is the screen space x coordinate of the rectangle's right edge.  It
   must be greater than or equal to the value of minx.

   miny is the screen space y coordinate of the rectangle's top edge.

   maxy is the screen space y coordinate of the rectangle's bottom edge.  It
   must be greater than or equal to the value of miny.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_clprectw, fg_rect, fg_rectw, fg_setclip

Examples

   10-1, 10-2, 10-3, 10-4



















                                      15
fg_clprectw


Prototype

   void fg_clprectw (double xmin, double xmax, double ymin, double ymax);

Description

   The fg_clprectw routine draws a solid (filled) rectangle in world space,
   with respect to the clipping region.

Parameters

   xmin is the world space x coordinate of the rectangle's left edge.

   xmax is the world space x coordinate of the rectangle's right edge.  It
   must be greater than or equal to the value of xmin.

   ymin is the world space y coordinate of the rectangle's bottom edge.

   ymax is the world space y coordinate of the rectangle's top edge.  It must
   be greater than or equal to the value of ymin.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light and has no effect in text
   video modes.

See also

   fg_clprect, fg_rect, fg_rectw, fg_setclip






















                                      16
fg_cursor


Prototype

   void fg_cursor (int state);

Description

   The fg_cursor routine determines the ROM BIOS cursor visibility in text
   video modes.  After calling fg_setmode, the cursor is made visible by
   default.

Parameters

   The state parameter defines the cursor visibility.  If it is 0, the cursor
   becomes invisible; if it is 1, the cursor becomes visible.

Return value

   none

Restrictions

   This routine has no effect in graphics video modes.

Examples

   3-1, 3-2, 3-3, 3-4, 5-14, 7-1, 7-2, 7-3, 8-3, 8-5, 8-7, 9-7, 9-20, 9-21,
   9-23, 11-4




























                                      17
fg_dash


Prototype

   void fg_dash (int ix, int iy, int pattern);

Description

   The fg_dash routine draws a dashed line from the graphics cursor position
   to an absolute screen space position.  It also makes the destination
   position the new graphics cursor position.

Parameters

   ix is the screen space x coordinate of the destination position.

   iy is the screen space y coordinate of the destination position.

   pattern is a 16-bit value representing a cyclic dash pattern.  Bits that
   are 1 will result in a pixel being drawn; bits that are 0 will result in a
   pixel being skipped.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_dashrel, fg_dashrw, fg_dashw, fg_move

Examples

   6-6




















                                      18
fg_dashrel


Prototype

   void fg_dashrel (int ix, int iy, int pattern);

Description

   The fg_dash routine draws a dashed line from the graphics cursor position
   to a screen space position relative to it.  It also makes the destination
   position the new graphics cursor position.

Parameters

   ix is the screen space x offset of the destination position.

   iy is the screen space y offset of the destination position.

   pattern is a 16-bit value representing a cyclic dash pattern.  Bits that
   are 1 will result in a pixel being drawn; bits that are 0 will result in a
   pixel being skipped.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_dash, fg_dashrw, fg_dashw, fg_moverel
























                                      19
fg_dashrw


Prototype

   void fg_dashrw (double x, double y, int pattern);

Description

   The fg_dashrw routine draws a dashed line from the graphics cursor position
   to a world space position relative to it.  It also makes the destination
   position the new graphics cursor position.

Parameters

   x is the world space x offset of the destination position.

   y is the world space y offset of the destination position.

   pattern is a 16-bit value representing a cyclic dash pattern.  Bits that
   are 1 will result in a pixel being drawn; bits that are 0 will result in a
   pixel being skipped.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light and has no effect in text
   video modes.

See also

   fg_dash, fg_dashrel, fg_dashw, fg_moverw























                                      20
fg_dashw


Prototype

   void fg_dashw (double x, double y, int pattern);

Description

   The fg_dashw routine draws a dashed line from the graphics cursor position
   to an absolute world space position.  It also makes the destination
   position the new graphics cursor position.

Parameters

   x is the world space x coordinate of the destination position.

   y is the world space y coordinate of the destination position.

   pattern is a 16-bit value representing a cyclic dash pattern.  Bits that
   are 1 will result in a pixel being drawn; bits that are 0 will result in a
   pixel being skipped.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light and has no effect in text
   video modes.

See also

   fg_dash, fg_dashrel, fg_dashrw, fg_movew























                                      21
fg_defcolor


Prototype

   void fg_defcolor (int index, int value);

Description

   The fg_defcolor routine assigns a color value to a virtual color index.

Parameters

   index is the virtual color index to define, between 0 and 255.

   value is the color value to assign to the specified color index.  It must
   be between 0 and the maximum color value for the current video mode.

Return value

   none

Restrictions

   This routine has no effect in text video modes or in 256-color graphics
   video modes.

See also

   fg_getindex, fg_palette, fg_setcolor

Examples

   5-13, 5-14
























                                      22
fg_dispfile


Prototype

   void fg_dispfile (char *filename, int width, int format);

Description

   The fg_dispfile routine displays an image stored in Fastgraph's standard or
   packed pixel run format, where the image resides in an external file.  The
   image will be positioned so that its lower left corner is at the graphics
   cursor position.  Refer to the descriptions of the fg_display and
   fg_displayp routines for more information about the two pixel run formats.

Parameters

   filename is the name of the file that contains the image.  A device and
   path name may be included as part of the file name.  The file name must be
   terminated by a null character (that is, a zero byte).

   width is the width of the image in pixels.  It must be greater than zero.

   format specifies the image format.  The value of format must be 0 if the
   image is in standard pixel run format, and 1 if the image is in packed
   pixel run format.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_display, fg_displayp, fg_pattern

Examples

   9-13, 9-14
















                                      23
fg_display


Prototype

   void fg_display (char *map_array, int runs, int width);

Description

   The fg_display routine displays an image stored in Fastgraph's standard
   pixel run format, where the image resides in an array.  The image will be
   positioned so that its lower left corner is at the graphics cursor
   position.

Parameters

   map_array is the arbitrary-length array containing the pixel run map.  The
   pixel runs are represented by (color,count) pairs, as shown below.


                             [0]   color for run 1

                             [1]   count for run 1

                             [2]   color for run 2

                             [3]   count for run 2
                              .
                              .
                              .

                          [2n-2]   color for run n

                          [2n-1]   count for run n


   Each "color" element is a value between 0 and 255 specifying the color
   index for that pixel run.  Each "count" element is a value between 0 and
   255 specifying the length in pixels of that pixel run.

   runs is the number of pixel runs to display from the pixel run map.  It is
   normally 1/2 the size of the map_array array.

   width is the width of the image in pixels.  It must be greater than zero.

Return value

   none










                                      24
fg_display (continued)


Restrictions

   This routine has no effect in text video modes.

See also

   fg_dispfile, fg_displayp, fg_pattern

Examples

   9-10, 9-12












































                                      25
fg_displayp


Prototype

   void fg_displayp (char *map_array, int runs, int width);

Description

   The fg_displayp routine displays an image stored in Fastgraph's packed
   pixel run format, where the image resides in an array.  The image will be
   positioned so that its lower left corner is at the graphics cursor
   position.

Parameters

   map_array is the arbitrary-length array containing the pixel run map.  The
   pixel runs are represented by (color,count) pairs, as shown below.

                        7                4   3                0

                   [0]    color for run 1     color for run 2

                   [1]              count for run 1

                   [2]              count for run 2

                   [3]    color for run 3     color for run 4

                   [4]              count for run 3

                   [5]              count for run 4
                    .
                    .
                    .

              [3n/2-3]   color for run n-1    color for run n

              [3n/2-2]             count for run n-1

              [3n/2-1]              count for run n


   Each "color" element is a value between 0 and 15 specifying the color index
   for that pixel run.  Each "count" element is a value between 0 and 255
   specifying the length in pixels of that pixel run.

   runs is the number of pixel runs to display from the pixel run map.  It is
   normally 2/3 the size of the map_array array.









                                      26
fg_displayp (continued)


   width is the width of the image in pixels.  It must be greater than zero.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_dispfile, fg_display, fg_pattern

Examples

   9-11, 9-12






































                                      27
fg_draw


Prototype

   void fg_draw (int ix, int iy);

Description

   The fg_draw routine draws a solid line from the graphics cursor position to
   an absolute screen space position.  It also makes the destination position
   the new graphics cursor position.

Parameters

   ix is the screen space x coordinate of the destination position.

   iy is the screen space y coordinate of the destination position.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_drawrel, fg_drawrw, fg_draww, fg_move

Examples

   6-2, 6-5, 11-5, 11-6
























                                      28
fg_drawmap


Prototype

   void fg_drawmap (char *map_array, int width, int height);

Description

   The fg_drawmap routine displays an image stored as a mode-independent bit
   map.  The image will be positioned so that its lower left corner is at the
   graphics cursor position.  Refer to the Fastgraph User's Guide for complete
   information about mode-independent bit maps.

Parameters

   map_array is the arbitrary-length array containing the bit map.  Each byte
   of map_array represents eight pixels.  Bits that are set (1) result in the
   corresponding pixel being displayed in the current color.  Bits that are
   reset (0) leave the corresponding pixel unchanged.

   width is the width in bytes of the bit map.

   height is the height in bytes (pixel rows) of the bit map.

Return value

   none

Restrictions

   none

See also

   fg_drwimage, fg_getmap

Examples

   9-1, 9-2, 9-17, 9-18


















                                      29
fg_drawmask


Prototype

   void fg_drawmask (char *map_array, int runs, int width);

Description

   The fg_drawmask routine displays an image stored as a masking map.  The
   image will be positioned so that its lower left corner is at the graphics
   cursor position.  Refer to the Fastgraph User's Guide for a complete
   discussion of masking maps.

Parameters

   map_array is the arbitrary-length array containing the masking map.  The
   masking map is a series of alternating "protect" and "zero" pixel runs, as
   shown below.


                      [1]   length of 1st protect run

                      [2]   length of 1st  zero   run

                      [3]   length of 2nd protect run

                      [4]   length of 2nd  zero   run
                       .
                       .
                       .

                    [n-2]   length of final protect run

                    [n-1]   length of final  zero   run


   The "protect" runs protect video memory, while the "zero" runs zero video
   memory (that is, set the pixels to the background color).  The length of
   each run must be between 0 and 255.

   runs is the number of pixel runs in the masking map.

   width is the width in pixels of the masking map.

Return value

   none










                                      30
fg_drawmask (continued)


Restrictions

   This routine has no effect in text video modes, or in the native EGA and
   VGA graphics video modes.

See also

   fg_clipmask, fg_flipmask, fg_revmask

Examples

   9-15, 9-16











































                                      31
fg_drawrel


Prototype

   void fg_drawrel (int ix, int iy);

Description

   The fg_drawrel routine draws a solid line from the graphics cursor position
   to a screen space position relative to it.  It also makes the destination
   position the new graphics cursor position.

Parameters

   ix is the screen space x offset of the destination position.

   iy is the screen space y offset of the destination position.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_draw, fg_drawrw, fg_draww, fg_moverel

Examples

   6-3, 6-14
























                                      32
fg_drawrw


Prototype

   void fg_drawrw (double x, double y);

Description

   The fg_drawrw routine draws a solid line from the graphics cursor position
   to a world space position relative to it.  It also makes the destination
   position the new graphics cursor position.

Parameters

   x is the world space x offset of the destination position.

   y is the world space y offset of the destination position.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light and has no effect in text
   video modes.

See also

   fg_draw, fg_drawrel, fg_draww, fg_moverw



























                                      33
fg_draww


Prototype

   void fg_draww (double x, double y);

Description

   The fg_draww routine draws a dashed line from the graphics cursor position
   to an absolute world space position.  It also makes the destination
   position the new graphics cursor position.

Parameters

   x is the world space x coordinate of the destination position.

   y is the world space y coordinate of the destination position.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light and has no effect in text
   video modes.

See also

   fg_draw, fg_drawrel, fg_drawrw, fg_movew

Examples

   6-4























                                      34
fg_drect


Prototype

   void fg_drect (int minx, int maxx, int miny, int maxy, char *matrix);

Description

   The fg_drect routine draws a dithered rectangle in screen space, without
   regard to the clipping region.

Parameters

   minx is the screen space x coordinate of the rectangle's left edge.

   maxx is the screen space x coordinate of the rectangle's right edge.  It
   must be greater than or equal to the value of minx.

   miny is the screen space y coordinate of the rectangle's top edge.

   maxy is the screen space y coordinate of the rectangle's bottom edge.  It
   must be greater than or equal to the value of miny.

   matrix is a four-element array (an eight-element array in 256-color
   graphics modes) that defines the dithering matrix.  The format of the
   dithering matrix is dependent on the video mode; refer to the Fastgraph
   User's Guide for more information.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_drectw, fg_rect, fg_rectw


Examples

   6-11, 6-12, 6-13













                                      35
fg_drectw


Prototype

   void fg_drectw (double xmin, double xmax, double ymin, double ymax, char
   *matrix);

Description

   The fg_drectw routine draws a dithered rectangle in world space, without
   regard to the clipping region.

Parameters

   xmin is the world space x coordinate of the rectangle's left edge.

   xmax is the world space x coordinate of the rectangle's right edge.  It
   must be greater than or equal to the value of xmin.

   ymin is the world space y coordinate of the rectangle's bottom edge.

   ymax is the world space y coordinate of the rectangle's top edge.  It must
   be greater than or equal to the value of ymin.

   matrix is a four-element array (an eight-element array in 256-color
   graphics modes) that defines the dithering matrix.  The format of the
   dithering matrix is dependent on the video mode; refer to the Fastgraph
   User's Guide for more information.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light and has no effect in text
   video modes.

See also

   fg_drect, fg_rect, fg_rectw
















                                      36
fg_drwimage


Prototype

   void fg_drwimage (char *map_array, int width, int height);

Description

   The fg_drwimage routine displays an image stored as a mode-specific bit
   map.  The image will be positioned so that its lower left corner is at the
   graphics cursor position (or the text cursor position in text video modes).
   Refer to the Fastgraph User's Guide for complete information about mode-
   specific bit maps.

Parameters

   map_array is the arbitrary-length array containing the bit map.  For EGA
   and VGA graphics modes, each color must be in a separate bit map.  For all
   other video modes, all colors are in a single bit map.

   width is the width in bytes of the bit map.

   height is the height in bytes (pixel rows) of the bit map.

Return value

   none

Restrictions

   none

See also

   fg_clpimage, fg_flpimage, fg_getimage, fg_revimage

Examples

   9-3, 9-4, 9-5, 9-6, 9-7, 9-8, 9-9, 9-16, 9-19, 9-20


















                                      37
fg_egacheck


Prototype

   int fg_egacheck (void);

Description

   The fg_egacheck routine returns information about the active EGA adapter
   and display (or the EGA emulation capabilities of a VGA).  It is useful in
   checking if the adapter has enough memory to run a program.

Parameters

   none

Return value

   The fg_egacheck routine returns a value of 0 if an EGA is not found, or if
   an EGA without an Enhanced Color Display (ECD) is detected.  Otherwise,
   fg_egacheck returns a positive integer indicating the number of 64K-byte
   increments of video memory on the EGA, as summarized below.

     1 = EGA with 64K video memory
     2 = EGA with 128K video memory
     3 = EGA with 192K video memory
     4 = EGA with 256K video memory

Restrictions

   none

Examples

   3-5, 15-2






















                                      38
fg_ellipse


Prototype

   void fg_ellipse (int horiz, int vert);

Description

   The fg_ellipse routine draws an unfilled ellipse in screen space.  The
   ellipse is centered at the current graphics cursor position, and its size
   is determined by the specified lengths of its semi-axes.

Parameters

   horiz defines the horizontal semi-axis of the ellipse (the absolute screen
   space distance from the center of the ellipse to its horizontal extremity).

   vert defines the vertical semi-axis of the ellipse (the absolute screen
   space distance from the center of the ellipse to its vertical extremity).

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_circle, fg_circlew, fg_ellipsew

Examples

   6-9, 10-4, 10-5






















                                      39
fg_ellipsew


Prototype

   void fg_ellipsew (double horiz, double vert);

Description

   The fg_ellipsew routine draws an unfilled ellipse in world space.  The
   ellipse is centered at the current graphics cursor position, and its size
   is determined by the specified lengths of its semi-axes.

Parameters

   horiz defines the horizontal semi-axis of the ellipse (the absolute world
   space distance from the center of the ellipse to its horizontal extremity).

   vert defines the vertical semi-axis of the ellipse (the absolute world
   space distance from the center of the ellipse to its vertical extremity).

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light and has no effect in text
   video modes.

See also

   fg_circle, fg_circlew, fg_ellipse

Examples

   6-8





















                                      40
fg_erase


Prototype

   void fg_erase (void);

Description

   The fg_erase routine clears the active video page.  In text modes, fg_erase
   stores a space character (ASCII 32) with a gray foreground attribute in
   each character cell.  In graphics modes, fg_erase sets each pixel to zero.

Parameters

   none

Return value

   none

Restrictions

   none

See also

   fg_reset

Examples

   9-12, 9-13


























                                      41
fg_fadein


Prototype

   void fg_fadein (int delay);

Description

   The fg_fadein routine replaces the visual page contents with the hidden
   page contents.  The replacement is done randomly in small sections, thus
   giving a "fade in" effect.

Parameters

   delay controls the speed at which the replacement takes place.  A value of
   zero means to perform the replacement as quickly as possible, while 1 is
   slightly slower, 2 is slower yet, and so forth.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_fadeout, fg_sethpage

Examples

   11-2
























                                      42
fg_fadeout


Prototype

   void fg_fadeout (int delay);

Description

   The fg_fadeout routine replaces the visual page contents with pixels of the
   current color.  The replacement is done randomly in small sections, thus
   giving a "fade out" effect.

Parameters

   delay controls the speed at which the replacement takes place.  A value of
   zero means to perform the replacement as quickly as possible, while 1 is
   slightly slower, 2 is slower yet, and so forth.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_fadein, fg_setcolor

Examples

   11-1
























                                      43
fg_flipmask


Prototype

   void fg_flipmask (char *map_array, int runs, int width);

Description

   The fg_flipmask routine displays a reversed clipped image stored as a
   masking map.  The image will be positioned so that its lower left corner is
   at the graphics cursor position.  Refer to the description of the
   fg_drawmask routine for more information about masking maps.

Parameters

   map_array is the arbitrary-length array containing the masking map.

   runs is the number of pixel runs in the masking map.

   width is the width in pixels of the masking map.

Return value

   none

Restrictions

   This routine has no effect in text video modes, or in the native EGA and
   VGA graphics video modes.

See also

   fg_clipmask, fg_drawmask, fg_revmask, fg_setclip

Examples

   9-15




















                                      44
fg_flpimage


Prototype

   void fg_flpimage (char *map_array, int width, int height);

Description

   The fg_flpimage routine displays a reversed clipped image stored as a mode-
   specific bit map.  The image will be positioned so that its lower left
   corner is at the graphics cursor position.  Only that part of the image
   that falls within the current clipping limits will be displayed, but the
   clipping limits will be extended to a byte boundary if necessary.  Refer to
   the Fastgraph User's Guide for complete information about mode-specific bit
   maps.

Parameters

   map_array is the arbitrary-length array containing the bit map.  For EGA
   and VGA graphics modes, each color must be in a separate bit map.  For all
   other graphics modes, all colors are in a single bit map.

   width is the width in bytes of the bit map.

   height is the height in bytes (pixel rows) of the bit map.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_clpimage, fg_drwimage, fg_getimage, fg_revimage, fg_setclip

Examples

   9-8, 9-9
















                                      45
fg_freepage


Prototype

   int fg_freepage (int page_number);

Description

   The fg_freepage routine releases a virtual video page created with the
   fg_allocate routine.

Parameters

   page_number is the number of the virtual page to release.  It must be
   between 0 and 15.

Return value

   A status code indicating the success or failure of the virtual page
   release, as shown below.

     0 = virtual page released
     7 = virtual page released, but memory control blocks were destroyed
     9 = attempt to use fg_freepage on a virtual page that was never created

Restrictions

   This routine has no effect if page_number references a physical video page,
   or a virtual page that was never created.

See also

   fg_allocate

Examples

   8-3, 8-4, 8-5, 8-6, 8-8, 9-21, 9-22, 9-23, 10-4, 10-5, 11-2, 11-5, 15-1




















                                      46
fg_getaddr


Prototype

   int fg_getaddr (void);

Description

   The fg_getaddr routine returns the segment address of the active video
   page.

Parameters

   none

Return value

   The segment address of the active video page.

Restrictions

   none

See also

   fg_setpage

Examples

   8-8



























                                      47
fg_getclock


Prototype

   long fg_getclock (void);

Description

   The fg_getclock routine returns the number of clock ticks since midnight.

Parameters

   none

Return value

   The number of clock ticks since midnight.  There are approximately 18.2
   clock ticks per second.

Restrictions

   none

Examples

   14-2































                                      48
fg_getcolor


Prototype

   int fg_getcolor (void);

Description

   The fg_getcolor routine returns the current text attribute (in text modes)
   or color index (in graphics modes), as defined by the most recent call to
   fg_setattr or fg_setcolor.

Parameters

   none

Return value

   In graphics video modes, the return value is the current color index.  In
   text modes, it is the current text attribute.

Restrictions

   none

See also

   fg_setattr, fg_setcolor





























                                      49
fg_gethpage


Prototype

   int fg_gethpage (void);

Description

   The fg_gethpage routine returns the hidden video page number (as set in the
   most recent call to fg_sethpage).

Parameters

   none

Return value

   The number of the hidden video page, between 0 and 15.

Restrictions

   none

See also

   fg_sethpage































                                      50
fg_getimage


Prototype

   void fg_getimage (char *map_array, int width, int height);

Description

   The fg_getimage routine retrieves an image as a mode-specific bit map.  The
   graphics cursor position (the text cursor position in text video modes)
   defines the lower left corner of the image to retrieve. Refer to the
   Fastgraph User's Guide for complete information about mode-specific bit
   maps.

Parameters

   map_array is the arbitrary-length array in which to retrieve the bit map.
   For EGA and VGA graphics modes, only pixels of the current color are
   retrieved.  For all other video modes, the entire image is retrieved, with
   all colors combined into a single bit map.  In QuickBASIC, you must
   explicitly declare map_array as a fixed-length string variable of length
   width*height.

   width is the width in bytes of the bit map.

   height is the height in bytes (pixel rows) of the bit map.

Return value

   none

Restrictions

   none

See also

   fg_clpimage, fg_drwimage, fg_flpimage, fg_getmap, fg_revimage

Examples

   9-19, 9-20















                                      51
fg_getindex


Prototype

   int fg_getindex (int index);

Description

   The fg_getindex routine returns the color value assigned to a specified
   virtual color index.

Parameters

   index is the virtual color index to retrieve, between 0 and 255.

Return value

   In graphics video modes with fewer than 256 available colors, the return
   value is the color value assigned to the specified virtual index.  In text
   modes and 256-color graphics modes, the fg_getindex routine returns the
   value passed to it.

Restrictions

   none

See also

   fg_defcolor, fg_palette, fg_setcolor




























                                      52
fg_getkey


Prototype

   void fg_getkey (unsigned char *key, unsigned char *aux);

Description

   The fg_getkey routine waits for a keystroke, or reads the next entry from
   the BIOS keyboard buffer (without echo).  It returns the keystroke's
   standard or extended keyboard code (a list of these appears in chapter 12
   of the Fastgraph User's Guide).

Parameters

   key receives the keystroke's standard keyboard code if it represents a
   standard character.  If the keystroke represents an extended character, key
   will be set to zero.  In QuickBASIC, you must explicitly declare key as a
   fixed-length string variable of length 1.

   aux receives the keystroke's extended keyboard code if it represents an
   extended character.  If the keystroke represents a standard character, aux
   will be set to zero.  In QuickBASIC, you must explicitly declare aux as a
   fixed-length string variable of length 1.

Return value

   none

Restrictions

   none

See also

   fg_intkey, fg_waitkey

Examples

   12-1, 14-2

















                                      53
fg_getmap


Prototype

   void fg_getmap (char *map_array, int width, int height);

Description

   The fg_getmap routine retrieves an image as a mode-independent bit map.
   The graphics cursor position defines the lower left corner of the image to
   retrieve.  Refer to the Fastgraph User's Guide for complete information
   about mode-independent bit maps.

Parameters

   map_array is the arbitrary-length array in which to retrieve the bit map.
   Each byte of map_array represents eight pixels.  Pixels of the current
   color set the corresponding bits in map_array.  Pixels of other colors make
   the corresponding map_array bits zero.  In QuickBASIC, you must explicitly
   declare map_array as a fixed-length string variable of length width*height.

   width is the width in bytes of the bit map.

   height is the height in bytes (pixel rows) of the bit map.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_drawmap, fg_getimage

Examples

   9-17, 9-18

















                                      54
fg_getmaxx


Prototype

   int fg_getmaxx (void);

Description

   The fg_getmaxx routine returns the maximum x coordinate in screen space
   when used in a graphics video mode.  It returns the maximum column number
   in character space when used in a text mode.  In either case, the maximum x
   coordinate is one less than the horizontal screen resolution.

Parameters

   none

Return value

   The maximum x coordinate.

Restrictions

   none

See also

   fg_getmaxy

Examples

   4-1, 4-2

























                                      55
fg_getmaxy


Prototype

   int fg_getmaxy (void);

Description

   The fg_getmaxy routine returns the maximum y coordinate in screen space
   when used in a graphics video mode.  It returns the maximum row number in
   character space when used in a text mode.  In either case, the maximum y
   coordinate is one less than the vertical screen resolution.

Parameters

   none

Return value

   The maximum y coordinate.

Restrictions

   none

See also

   fg_getmaxx

Examples

   4-1, 4-2

























                                      56
fg_getmode


Prototype

   int fg_getmode (void);

Description

   The fg_getmode routine returns the current video mode number.  It is
   typically one of the first Fastgraph routines called in a program.  The
   value returned by fg_getmode can be retained to restore the original video
   mode when a program transfers control back to DOS.

Parameters

   none

Return value

   The current video mode number, between 0 and 21.  Refer to the description
   of the fg_setmode routine for descriptions of each video mode.

Restrictions

   none

See also

   fg_setmode

Examples

   3-3, 3-4, 3-5, 3-6, 3-7, 3-8
























                                      57
fg_getpage


Prototype

   int fg_getpage (void);

Description

   The fg_getpage routine returns the active video page number (as set in the
   most recent call to fg_setpage).

Parameters

   none

Return value

   The number of the active video page, between 0 and 15.

Restrictions

   none

See also

   fg_setpage

Examples

   8-8



























                                      58
fg_getpixel


Prototype

   int fg_getpixel (int ix, int iy);

Description

   The fg_getpixel routine returns the color value of a specified pixel.

Parameters

   ix is the pixel's screen space x coordinate.

   iy is the pixel's screen space y coordinate.

Return value

   The color value of the pixel, between 0 and one less than the number of
   colors available in the current video mode.  In text modes, fg_getpixel
   always returns zero.

Restrictions

   none

See also

   fg_point, fg_pointw

Examples

   6-1
























                                      59
fg_getrgb


Prototype

   void fg_getrgb (int number, int *red, int *green, int *blue);

Description

   The fg_getrgb routine returns the red, green, and blue color components for
   a specified video DAC register.  Each color component is a value between 0
   and 63; increasing values produce more intense colors.

Parameters

   number is the video DAC register number.  It must be between 0 and 15 in
   video modes 17 and 18, or between 0 and 255 in modes 19 through 21.

   red, green, and blue respectively receive the red, green, and blue
   components of the specified video DAC register.

Return value

   none

Restrictions

   This routine has no effect in text video modes, or in any graphics video
   mode numbered 16 or below (because these video modes do not use DAC
   registers).

See also

   fg_palette, fg_setrgb

Examples

   5-11




















                                      60
fg_getvpage


Prototype

   int fg_getvpage (void);

Description

   The fg_getvpage routine returns the visual video page number (as set in the
   most recent call to fg_setvpage).

Parameters

   none

Return value

   The number of the visual video page, between 0 and 15.

Restrictions

   none

See also

   fg_setvpage

Examples

   8-8



























                                      61
fg_getworld


Prototype

   void fg_getworld (double *xmin, double *xmax, double *ymin, double *ymax);

Description

   The fg_getworld routine returns the current world space limits, as defined
   in the most recent call to fg_setworld.

Parameters

   xmin receives the world space coordinate of the screen's left edge.

   xmax receives the world space coordinate of the screen's right edge.

   ymin receives the world space coordinate of the screen's top edge.

   ymax receives the world space coordinate of the screen's bottom edge.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light.

See also

   fg_setworld

Examples

   4-3





















                                      62
fg_getxjoy


Prototype

   int fg_getxjoy (int n);

Description

   The fg_getxjoy routine returns the horizontal coordinate position of the
   specified joystick.  The actual coordinates depend on the processor speed
   and brand of joystick used.

Parameters

   n specifies the joystick number, either 1 or 2.

Return value

   If the return value is positive, it represents the current horizontal
   coordinate position of the requested joystick.  If the return value is -1,
   it means the requested joystick has not been initialized or is not present.

Restrictions

   Before using this routine, you must use the fg_initjoy routine to
   initialize the requested joystick.

See also

   fg_button, fg_getyjoy, fg_initjoy, fg_intjoy

Examples

   12-11























                                      63
fg_getxpos


Prototype

   int fg_getxpos (void);

Description

   The fg_getxpos routine returns the screen space x coordinate of the
   graphics cursor position.

Parameters

   none

Return value

   The x coordinate of graphics cursor position.

Restrictions

   none

See also

   fg_getypos































                                      64
fg_getyjoy


Prototype

   int fg_getyjoy (int n);

Description

   The fg_getyjoy routine returns the vertical coordinate position of the
   specified joystick.  The actual coordinates depend on the processor speed
   and brand of joystick used.

Parameters

   n specifies the joystick number, either 1 or 2.

Return value

   If the return value is positive, it represents the current vertical
   coordinate position of the requested joystick.  If the return value is -1,
   it means the requested joystick has not been initialized or is not present.

Restrictions

   Before using this routine, you must use the fg_initjoy routine to
   initialize the requested joystick.

See also

   fg_button, fg_getxjoy, fg_initjoy, fg_intjoy

Examples

   12-11























                                      65
fg_getypos


Prototype

   int fg_getypos (void);

Description

   The fg_getypos routine returns the screen space y coordinate of the
   graphics cursor position.

Parameters

   none

Return value

   The y coordinate of graphics cursor position.

Restrictions

   none

See also

   fg_getxpos































                                      66
fg_hush


Prototype

   void fg_hush (void);

Description

   The fg_hush routine immediately stops asynchronous sound started with the
   fg_musicb, fg_sounds, or fg_voices routines.  It has no effect if there is
   no asynchronous sound in progress.

Parameters

   none

Return value

   none

Restrictions

   none

See also

   fg_hushnext, fg_musicb, fg_sounds, fg_voices

Examples

   13-7


























                                      67
fg_hushnext


Prototype

   void fg_hushnext (void);

Description

   The fg_hushnext routine stops asynchronous sound started with the
   fg_musicb, fg_sounds, or fg_voices routines, but not until the current
   repetition finishes.  It has no effect if there is no asynchronous sound in
   progress.

Parameters

   none

Return value

   none

Restrictions

   This routine has no effect unless the asynchronous sound is continuous.

See also

   fg_hush, fg_musicb, fg_sounds, fg_voices

Examples

   13-7

























                                      68
fg_initjoy


Prototype

   int fg_initjoy (int n);

Description

   The fg_initjoy routine initializes either joystick and must be called
   before using fg_getxjoy, fg_getyjoy, or fg_intjoy.

Parameters

   n specifies the joystick number, either 1 or 2.

Return value

   If the return value is 0, it means the joystick initialization was
   successful.  If it is -1, it means the machine has no game port, or the
   requested joystick is not connected to the game port.

Restrictions

   When you call fg_initjoy, Fastgraph assumes the requested joystick is
   centered.

See also

   fg_button, fg_getxjoy, fg_getyjoy, fg_intjoy

Examples

   12-10, 12-11, 12-12
























                                      69
fg_initw


Prototype

   void fg_initw (void);

Description

   The fg_initw routine initializes Fastgraph's internal parameters for world
   space.  This routine must be called once, before any other routine that
   uses world space coordinates.

Parameters

   none

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light.

Examples

   4-3, 6-4, 6-8, 7-7, 7-8, 7-9, 7-10






























                                      70
fg_intjoy


Prototype

   void fg_intjoy (int n, char *key, char *aux);

Description

   The fg_intjoy routine returns the standard and extended keyboard codes
   analogous to the current position and button status of the specified
   joystick.

Parameters

   n specifies the joystick number, either 1 or 2.

   key receives the joystick's button status.  If any button on the requested
   joystick is pressed, key is set to 13, the standard keyboard code for the
   Enter key.  If no buttons are pressed, key is set to zero.  In QuickBASIC,
   you must explicitly declare key as a fixed-length string variable of length
   1.

   aux receives the joystick's analog position, as listed below.  In
   QuickBASIC, you must explicitly declare aux as a fixed-length string
   variable of length 1.


           joystick position  corresponding key  extended key code

           up and left        Home               71
           up                 up arrow           72
           up and right       PgUp               73
           left               left arrow         75
           centered           (no action)         0
           right              right arrow        77
           down and left      End                79
           down               down arrow         80
           down and right     PgDn               81


   If the requested joystick has not been initialized, both key and aux will
   be set to zero.

Return value

   none

Restrictions

   Before using this routine, you must use the fg_initjoy routine to
   initialize the requested joystick.






                                      71
fg_intjoy (continued)


See also

   fg_button, fg_getxjoy, fg_getyjoy, fg_initjoy, fg_intkey

Examples

   12-12
















































                                      72
fg_intkey


Prototype

   void fg_intkey (unsigned char *key, unsigned char *aux);

Description

   The fg_intkey routine reads the next entry from the BIOS keyboard buffer
   (without echo) and returns the keystroke's standard or extended keyboard
   code (a list of these appears in chapter 12 of the Fastgraph User's Guide).
   It is similar to fg_getkey, but it does not wait for a keystroke if the
   keyboard buffer is empty.

Parameters

   key receives the keystroke's standard keyboard code if it represents a
   standard character.  If the keystroke represents an extended character, key
   will be set to zero.  In QuickBASIC, you must explicitly declare key as a
   fixed-length string variable of length 1.

   aux receives the keystroke's extended keyboard code if it represents an
   extended character.  If the keystroke represents a standard character, aux
   will be set to zero.  In QuickBASIC, you must explicitly declare aux as a
   fixed-length string variable of length 1.

   If the BIOS keyboard buffer is empty, both key and aux will be set to zero.

Return value

   none

Restrictions

   none

See also

   fg_getkey, fg_intjoy, fg_waitkey

Examples

   12-2, 13-7, 14-1, 14-3














                                      73
fg_locate


Prototype

   void fg_locate (int row, int column);

Description

   The fg_locate routine changes the text cursor position for the active
   display page.  The fg_setmode routine sets each page's text cursor position
   to (0,0).

Parameters

   row is the text cursor's destination row number, between 0 and 24 (0 and 29
   for VGA graphics modes 17 and 18).

   column is text cursor's destination column number, between 0 and 39 for 40-
   column modes, or between 0 and 79 for 80-column modes.

Return value

   none

Restrictions

   The first eight video pages (0 to 7) each have their own text cursor.  The
   last eight video pages (8 to 15) respectively share the same text cursor
   positions as the first eight pages.  For example, changing the text cursor
   position on video page 9 also changes its position on video page 1.

See also

   fg_where

Examples

   7-1 to 7-7



















                                      74
fg_measure


Prototype

   int fg_measure (void);

Description

   The fg_measure routine returns the approximate number of delay units per
   clock tick.  This quantity is proportional to the system's processor speed.
   Delay units are used by the fg_stall routine.

Parameters

   none

Return value

   The approximate number of delay units per clock tick.  Typical values for
   some common systems are:


                         system      delay units
                          type     per clock tick

                     Tandy 1000 HX        675
                     10 MHz 80286       3,000
                     25 MHz 80386      11,000


Restrictions

   none

See also

   fg_stall

Examples

   14-3
















                                      75
fg_memavail


Prototype

   long fg_memavail (void);

Description

   The fg_memavail routine determines the amount of memory available to DOS.

Parameters

   none

Return value

   The amount of memory (in bytes) available to DOS.

Restrictions

   none

Examples

   15-1
































                                      76
fg_mousebut


Prototype

   void fg_mousebut (int number, int *count, int *lastx, int *lasty);

Description

   The fg_mousebut routine returns information about mouse button press or
   release counts, as well as the mouse cursor position at the time of the
   last button press or release.

Parameters

   number is the mouse button for which to report information (1 means the
   left button, 2 the right button, and 3 the middle button).  If number is
   positive, button press counts will be reported.  If it is negative, release
   counts will be reported.

   count receives the number of press or release counts for the requested
   button since the last check, or since calling the fg_mouseini routine.

   lastx receives the x coordinate (in screen space) of the mouse cursor
   position at the time of the last press or release of the requested button.
   If count is zero, lastx is also set to zero.

   lasty receives the y coordinate (in screen space) of the mouse cursor
   position at the time of the last press or release of the requested button.
   If count is zero, lasty is also set to zero.

Return value

   none

Restrictions

   none

See also

   fg_mousepos

Examples

   12-7












                                      77
fg_mousecur


Prototype

   void fg_mousecur (int screen_mask, int cursor_mask);

Description

   The fg_mousecur routine defines the appearance of the mouse cursor in text
   video modes.  Refer to chapter 12 of the Fastgraph User's Guide for
   complete information about defining the mouse cursor in text modes.

Parameters

   screen_mask defines the screen mask.  When you position the mouse over a
   specific character cell, the mouse driver logically ANDs the screen mask
   with the existing contents of that cell.

   cursor_mask defines the cursor mask.  After logically ANDing the screen
   mask with the contents of a character cell, the mouse driver XORs the
   cursor mask with the result to produce the mouse cursor.

   The binary structure of screen_mask and cursor_mask is:


                         bits      meaning

                        0 to 7     ASCII character value
                        8 to 11    foreground color
                       12 to 14    background color
                          15       blink


Return value

   none

Restrictions

   This routine has no effect in graphics video modes.

See also

   fg_mouseini, fg_mouseptr, fg_mousevis













                                      78
fg_mousecur (continued)


Examples

   12-8




















































                                      79
fg_mouseini


Prototype

   int fg_mouseini (void);

Description

   The fg_mouseini routine initializes the mouse and must be called before any
   of Fastgraph's other mouse support routines.

Parameters

   none

Return value

   If the return value is positive, it indicates the number of buttons on the
   mouse being used (2 or 3).  If the return value is -1, it means the
   initialization failed because the mouse driver has not been loaded or the
   mouse is not physically connected.

Restrictions

   There is no mouse support available in video modes 20 and 21.  The
   fg_mouseini routine will always return -1 when used in these video modes.

See also

   fg_mousebut, fg_mousecur, fg_mouselim, fg_mousemov, fg_mousepos,
   fg_mouseptr, fg_mousespd, fg_mousevis

Examples

   12-5, 12-6, 12-7, 12-8, 12-9






















                                      80
fg_mouselim


Prototype

   void fg_mouselim (int minx, int maxx, int miny, int maxy);

Description

   The fg_mouselim routine defines the rectangular area in which the mouse
   cursor may move.  In graphics modes, the area is defined in screen space
   coordinates.  In text modes, it is defined in rows and columns.

Parameters

   minx is the x coordinate of the area's left edge.

   maxx is the x coordinate of the area's right edge.  It must be greater than
   or equal to the value of minx.

   miny is the y coordinate of the area's top edge.

   maxy is the y coordinate of the area's bottom edge.  It must be greater
   than or equal to the value of miny.

Return value

   none

Restrictions

   none

See also

   fg_mouseini, fg_mousemov

Examples

   12-6


















                                      81
fg_mousemov


Prototype

   void fg_mousemov (int ix, int iy);

Description

   The fg_mousemov routine moves the mouse cursor to the specified character
   cell (in text modes) or screen space position (in graphics modes).  The
   mouse cursor is moved whether or not it is currently visible.

Parameters

   ix is the x coordinate of the mouse cursor position.

   iy is the y coordinate of the mouse cursor position.

Return value

   none

Restrictions

   If you attempt to move the mouse cursor outside the area defined by
   fg_mouselim, the fg_mousemov routine just positions the cursor at the
   nearest point possible within that area.

See also

   fg_mouseini, fg_mouselim

Examples

   12-6






















                                      82
fg_mousepos

Prototype

   void fg_mousepos (int *ix, int *iy, int *buttons);

Description

   The fg_mousepos routine returns the current mouse position and button
   status.  In graphics modes, the position is defined in screen space
   coordinates.  In text modes, it is defined in rows and columns.

Parameters

   ix receives the x coordinate of the mouse cursor position.

   iy receives the y coordinate of the mouse cursor position.

   buttons receives a bit mask representing the button status, where each bit
   is set if the corresponding button is pressed.  Bit 0 corresponds to the
   left button, bit 1 to the right button, and bit 2 to the middle button.

Return value

   none

Restrictions

   none

See also

   fg_mousebut, fg_mouseini

Examples

   12-7





















                                      83
fg_mouseptr


Prototype

   void fg_mouseptr (int *masks, int xoffset, int yoffset);

Description

   The fg_mouseptr routine defines the shape and appearance of the mouse
   cursor in graphics video modes.  Refer to chapter 12 of the Fastgraph
   User's Guide for complete information about defining the mouse cursor in
   graphics modes.

Parameters

   masks is a 32-element array containing the 16-element screen mask followed
   by the 16-element cursor mask.  The mouse driver displays the mouse cursor
   by logically ANDing video memory with the screen mask, and then XORing that
   result with the cursor mask.  The first item of each mask corresponds to
   the top row of the mouse cursor.  The following table summarizes the cursor
   appearance for all possible combinations of mask bits.


           screen mask bit  cursor mask bit  resulting cursor pixel

                  0                0                  black
                  0                1                  white
                  1                0                unchanged
                  1                1                 inverted


   xoffset is the x coordinate of the mouse cursor "hot spot" relative to the
   upper left corner of the mouse cursor.

   yoffset is the y coordinate of the mouse cursor "hot spot" relative to the
   upper left corner of the mouse cursor.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_mousecur, fg_mouseini, fg_mousevis









                                      84
fg_mouseptr (continued)


Examples

   12-9




















































                                      85
fg_mousespd


Prototype

   void fg_mousespd (int xmickeys, int ymickeys);

Description

   The fg_mousespd routine defines the number of mickey units per eight pixels
   of cursor movement (one mickey unit equals 1/200 of an inch).  This
   effectively controls the speed at which the mouse cursor moves relative to
   the movement of the mouse itself.

Parameters

   xmickeys is the number of mickey units per eight pixels of horizontal mouse
   cursor movement (the default is 8).

   ymickeys is the number of mickey units per eight pixels of vertical mouse
   cursor movement (the default is 16).

Return value

   none

Restrictions

   none

See also

   fg_mouseini

Examples

   12-6





















                                      86
fg_mousevis


Prototype

   void fg_mousevis (int state);

Description

   The fg_mousevis routine makes the mouse cursor visible or invisible.  After
   calling fg_mouseini, the mouse cursor is invisible.

Parameters

   state defines the mouse cursor visibility.  If state is 0, the mouse cursor
   is made invisible.  If it is 1, the mouse cursor is made visible.

Return value

   none

Restrictions

   none

See also

   fg_mouseini

Examples

   12-6, 12-7, 12-8, 12-9


























                                      87
fg_move


Prototype

   void fg_move (int ix, int iy);

Description

   The fg_move routine establishes the graphics cursor position at an absolute
   screen space point.  The fg_setmode routine sets the graphics cursor
   position to (0,0).

Parameters

   ix is the screen space x coordinate of the graphics cursor's new position.

   iy is the screen space y coordinate of the graphics cursor's new position.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_moverel, fg_moverw, fg_movew

Examples

   6-2, 6-3, 6-5, 6-6, 6-9, 6-14, 9-1
























                                      88
fg_moverel


Prototype

   void fg_moverel (int ix, int iy);

Description

   The fg_moverel routine establishes the graphics cursor position at a screen
   space point relative to the current position.

Parameters

   ix is the screen space x offset of the graphics cursor's new position.

   iy is the screen space y offset of the graphics cursor's new position.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_move, fg_moverw, fg_movew

Examples

   6-3

























                                      89
fg_moverw


Prototype

   void fg_moverw (double x, double y);

Description

   The fg_moverw routine establishes the graphics cursor position at a world
   space point relative to the current position.

Parameters

   x is the world space x offset of the graphics cursor's new position.

   y is the world space y offset of the graphics cursor's new position.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light and has no effect in text
   video modes.

See also

   fg_move, fg_moverel, fg_movew




























                                      90
fg_movew


Prototype

   void fg_movew (double x, double y);

Description

   The fg_movew routine establishes the graphics cursor position at an
   absolute world space point.  The fg_initw routine sets the graphics cursor
   position to (0.0,0.0).

Parameters

   x is the world space x coordinate of the graphics cursor's new position.

   y is the world space y coordinate of the graphics cursor's new position.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light and has no effect in text
   video modes.

See also

   fg_move, fg_moverel, fg_moverw

Examples

   6-4, 6-8, 7-7, 7-8, 7-9, 7-10























                                      91
fg_music


Prototype

   void fg_music (char *music_string);

Description

   The fg_music routine uses the programmable timer to play a sequence of
   musical tones.

Parameters

   music_string is an arbitrary-length sequence of music commands, followed by
   a dollar-sign ($) terminator.  Music commands are summarized in the
   following table:


   command   meaning

   A thru G  Play the specified note in the current octave.

   #         May be appended to a note character (A through G) to make that
             note sharp.

   .         May be appended to a note character (A through G) or a sharp (#)
             to extend that note by half its normal length.  Multiple dots may
             be used, and each one will again extend the note by half as much
             as the previous extension.

   Ln        Set the length of subsequent notes and pauses.  The value of n is
             an integer between 1 and 64, where 1 indicates a whole note, 2 a
             half note, 4 a quarter note, and so forth.  If no L command is
             present, L4 is assumed.

   On        Set the octave for subsequent notes.  The value of n may be an
             integer between 0 and 6 to set a specific octave.  It can also be
             a plus (+) or minus (-) character to increment or decrement the
             current octave number.  Octave 4 contains middle C, and if no O
             command is present, O4 is assumed.

   P         Pause (rest) for the duration specified by the most recent L
             command.

   Sn        Set the amount of silence between notes.  The value of n is an
             integer between 0 and 2.  If n is 0, each note plays for the full
             period set by the L command (music legato).  If n is 1, each note
             plays for 7/8 the period set by the L command (music normal).  If
             n is 2, each note plays for 3/4 the period set by the L command
             (music staccato).  If no S command is present, S1 is assumed.

   Tn        Set the tempo of the music (the number of quarter notes per
             minute).  The value of n is an integer between 32 and 255.  If no
             T command is present, T120 is assumed.



                                      92
fg_music (continued)


   The fg_music routine ignores any other characters in music_string.  It also
   ignores command values outside the allowable range, such as T20 or O8.

Return value

   none

Restrictions

   This routine has no effect if there is asynchronous sound in progress.

See also

   fg_musicb

Examples

   13-3





































                                      93
fg_musicb


Prototype

   void fg_musicb (char *music_string, int ntimes);

Description

   The fg_musicb routine uses the programmable timer to play a sequence of
   musical tones, concurrent with other activity.

Parameters

   music_string is an arbitrary-length sequence of music commands, followed by
   a dollar-sign ($) terminator.  Refer to the description of the fg_music
   routine for a complete list of music commands.

   ntimes specifies the number of times to cycle through the music commands in
   music_string.  If ntimes is negative, the music will play repetitively
   until you stop it with the fg_hush or fg_hushnext routine.

Return value

   none

Restrictions

   This routine has no effect if there is asynchronous sound already in
   progress.  To allow for fast-tempo music, Fastgraph temporarily quadruples
   the clock tick interrupt rate from 18.2 to 72.8 ticks per second while
   producing asynchronous sound.  Because many disk controllers rely on the
   18.2 tick per second clock rate to synchronize disk accesses, your programs
   should not perform any disk operations when asynchronous sound is in
   progress.

See also

   fg_hush, fg_hushnext, fg_music, fg_playing

Examples

   13-6, 13-7















                                      94
fg_numlock


Prototype

   int fg_numlock (void);

Description

   The fg_numlock routine determines the state of the NumLock key.

Parameters

   none

Return value

   If the return value is 0, it means the NumLock key is off.  If it is 1, it
   means the NumLock key is on.

Restrictions

   none

See also

   fg_capslock, fg_scrlock, fg_setcaps, fg_setnum

Examples

   12-3



























                                      95
fg_paint


Prototype

   void fg_paint (int ix, int iy);

Description

   The fg_paint routine fills an arbitrary closed region with the current
   color value.  The region is defined by specifying a screen space point
   within its interior.

Parameters

   ix is the screen space x coordinate of the interior point.

   iy is the screen space y coordinate of the interior point.

Return value

   none

Restrictions

   This routine has no effect in text video modes.  The screen edges are not
   considered region boundaries, and filling an open region will cause
   fg_paint to behave unpredictably.

See also

   fg_paintw

Examples

   6-14, 11-5






















                                      96
fg_paintw


Prototype

   void fg_paintw (double x, double y);

Description

   The fg_paintw routine fills an arbitrary closed region with the current
   color value.  The region is defined by specifying a world space point
   within its interior.

Parameters

   x is the world space x coordinate of the interior point.

   y is the world space y coordinate of the interior point.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light and has no effect in text
   video modes.  The screen edges are not considered region boundaries, and
   filling an open region will cause fg_paintw to behave unpredictably.

See also

   fg_paint


























                                      97
fg_palette


Prototype

   void fg_palette (int number, int color);

Description

   The fg_palette routine has different functions depending on the current
   graphics video mode.  For CGA four-color modes (modes 4 and 5), it
   establishes the current palette and defines the background color for that
   palette.  In the CGA two-color mode (mode 6), it defines the foreground
   color.  For Tandy/PCjr, EGA, and VGA graphics modes (modes 9, 13, 14, 15,
   16, 17, and 18), it defines the value of a palette register.  For 256-color
   MCGA and VGA graphics modes (modes 19, 20, and 21), it defines the value of
   a video DAC register.

Parameters

   The meanings of the number and color parameters depend on the current video
   mode.  The following table summarizes the parameter meanings and legal
   values for each video mode.


   mode   number parameter (range)              color parameter (range)

   4, 5   CGA palette number (0 to 5)           background color (0 to 15)
   6      ignored                               foreground color (0 to 15)
   9      palette register number (0 to 15)     palette value (0 to 15)
   13, 14 palette register number (0 to 15)     palette value (0 to 23)
   15     palette register number (0,1,4,or 5)  palette value (0,8,or 24)
   16     palette register number (0 to 15)     palette value (0 to 63)
   17     palette register number (0 or 1)      video DAC register (0 to 15)
   18     palette register number (0 to 15)     video DAC register (0 to 15)
   19-21  video DAC register number (0 to 255)  DAC value (0 to 63)


   Refer to chapter 5 of the Fastgraph User's Guide for more specific
   information about the number and color parameters.

Return value

   none

Restrictions

   This routine has no effect in text video modes or Hercules graphics modes.
   Changing the foreground color (in mode 6) always works on true CGA
   adapters, but there are very few EGA and VGA adapters that correctly
   implement this capability in their mode 6 emulation.







                                      98
fg_palette (continued)


See also

   fg_defcolor, fg_palettes, fg_setcolor, fg_setrgb

Examples

   5-1, 5-2, 5-3, 5-6, 5-7, 5-8, 5-9, 5-14, 9-14
















































                                      99
fg_palettes


Prototype

   void fg_palettes (int *color_array);

Description

   The fg_palettes routine defines all 16 palette registers (in Tandy/PCjr,
   EGA, and VGA graphics modes), or the first 16 video DAC registers (in 256-
   color MCGA and VGA graphics modes).

Parameters

   color_array is a 16-element array that contains the values to assign to the
   palette registers or video DAC registers.

Return value

   none

Restrictions

   This routine has no effect in text video modes, CGA graphics modes, or
   Hercules graphics modes.

See also

   fg_palette

Examples

   5-12
























                                     100
fg_pan


Prototype

   void fg_pan (int ix, int iy);

Description

   The fg_pan routine changes the screen origin (the upper left corner of the
   screen) to the specified screen space coordinates.

Parameters

   ix is the new screen space x coordinate for the screen origin.

   iy is the new screen space y coordinate for the screen origin.

Return value

   none

Restrictions

   This routine has no effect in text video odes.  Because of hardware
   limitations, only certain coordinate positions can be used as the screen
   origin.  Fastgraph compensates for these restrictions by reducing ix and iy
   to values that are acceptable to the current video mode, as shown in the
   following table.


                            x will be reduced  y will be reduced
                video mode  to a multiple of:  to a multiple of:

                   4, 5             8                  2
                     6             16                  2
                     9              4                  4
                    11              8                  4
                    12              4                2 or 3
                19, 20, 21          4                  1


See also

   fg_panw

Examples

   11-6









                                     101
fg_panw


Prototype

   void fg_panw (double x, double y);

Description

   The fg_panw routine changes the screen origin (the upper left corner of the
   screen) to the specified world space coordinates.

Parameters

   x is the new world space x coordinate for the screen origin.

   y is the new world space y coordinate for the screen origin.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light and has no effect in text
   video modes.  To compensate for the hardware limitations that restrict the
   screen origin coordinates (see the description of the fg_pan routine),
   Fastgraph reduces x and y to an acceptable screen space equivalent.

See also

   fg_pan


























                                     102
fg_pattern


Prototype

   void fg_pattern (int index, int display_pattern);

Description

   The fg_pattern routine defines one of Fastgraph's 256 display patterns used
   with the fg_dispfile, fg_display, or fg_displayp routines.  When using
   these routines to display a pixel run map, Fastgraph will use the pattern
   associated with that color index instead of displaying the color itself.
   Refer to the Fastgraph User's Guide for more information about display
   patterns and their default values for each graphics video mode.

Parameters

   index is the number of the display pattern to define, between 0 and 255.

   display_pattern is a 16-bit value representing the actual display pattern.
   Its structure depends on the video mode, as summarized in the following
   table.


      video modes         pattern structure

      4, 5, 12            shift count (8 bits), four pixels (2 bits each)
      6, 11               shift count (8 bits), eight pixels (1 bit each)
      9                   shift count (8 bits), two pixels (4 bits each)
      13, 14, 15, 16, 18  unused (8 bits), two pixels (4 bits each)
      17                  unused (14 bits), two pixels (1 bit each)


   The shift count defines the number of bits that display_pattern is rotated
   left when applied to odd-numbered pixel rows, while the pixels are the
   actual color values replicated through the pixel run.  For the EGA and VGA
   graphics modes, an implied one pixel shift count is used.

Return value

   none

Restrictions

   This routine has no effect in text video modes or in 256-color graphics
   modes.

See also

   fg_dispfile, fg_display, fg_displayp







                                     103
fg_pattern (continued)


Examples

   9-14




















































                                     104
fg_playing


Prototype

   int fg_playing (void);

Description

   The fg_playing routine determines whether or not there is any asynchronous
   sound in progress.

Parameters

   none

Return value

   If the return value is 0, it means there is no asynchronous sound in
   progress.  If it is 1, then there is asynchronous sound in progress.

Restrictions

   none

See also

   fg_musicb, fg_sounds, fg_voices

Examples

   13-4, 13-5, 13-6, 13-7


























                                     105
fg_point


Prototype

   void fg_point (int ix, int iy);

Description

   The fg_point routine draws a point (displays a pixel) in screen space.

Parameters

   ix is the point's screen space x coordinate.

   iy is the point's screen space y coordinate.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_pointw

Examples

   6-1


























                                     106
fg_pointw


Prototype

   void fg_pointw (double x, double y);

Description

   The fg_pointw routine draws a point (displays a pixel) in world space.

Parameters

   x is the point's world space x coordinate.

   y is the point's world space y coordinate.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light and has no effect in text
   video modes.

See also

   fg_point





























                                     107
fg_polygon


Prototype

   void fg_polygon (int *ix_array, int *iy_array, int n);

Description

   The fg_polygon routine draws an unfilled polygon in screen space, using two
   coordinate arrays to define the polygon vertices.  The drawing of the
   polygon begins at the graphics cursor position, through the vertices
   defined by the coordinate arrays, and finally back to the original graphics
   cursor position if necessary.

Parameters

   ix_array is an arbitrary-length array containing the screen space x
   coordinates of the polygon vertices.

   iy_array is an arbitrary-length array containing the screen space y
   coordinates of the polygon vertices.

   n is the number of vertices in the polygon.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_polygonw

Examples

   6-7


















                                     108
fg_polygonw


Prototype

   void fg_polygonw (double *x_array, double *y_array, int n);

Description

   The fg_polygonw routine draws an unfilled polygon in world space, using two
   coordinate arrays to define the polygon vertices.  The drawing of the
   polygon begins at the graphics cursor position, through the vertices
   defined by the coordinate arrays, and finally back to the original graphics
   cursor position if necessary.

Parameters

   x_array is an arbitrary-length array containing the world space x
   coordinates of the polygon vertices.

   y_array is an arbitrary-length array containing the world space y
   coordinates of the polygon vertices.

   n is the number of vertices in the polygon.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light and has no effect in text
   video modes.

See also

   fg_polygon





















                                     109
fg_quiet


Prototype

   void fg_quiet (void);

Description

   The fg_quiet routine stops continuous synchronous sound started with the
   fg_sound or fg_voice routines.  It has no effect if there is no continuous
   sound in progress.

Parameters

   none

Return value

   none

Restrictions

   none

See also

   fg_sounds, fg_voices

Examples

   13-2


























                                     110
fg_rect


Prototype

   void fg_rect (int minx, int maxx, int miny, int maxy);

Description

   The fg_rect routine draws a solid (filled) rectangle in screen space or
   character space, without regard to the clipping region.

Parameters

   minx is the x coordinate of the rectangle's left edge.

   maxx is the x coordinate of the rectangle's right edge.  It must be greater
   than or equal to the value of minx.

   miny is the y coordinate of the rectangle's top edge.

   maxy is the y coordinate of the rectangle's bottom edge.  It must be
   greater than or equal to the value of miny.

Return value

   none

Restrictions

   none

See also

   fg_clprect, fg_clprectw, fg_drect, fg_drectw, fg_rectw

Examples

   6-10, 7-4, 7-6



















                                     111
fg_rectw


Prototype

   void fg_rectw (double xmin, double xmax, double ymin, double ymax);

Description

   The fg_rectw routine draws a solid (filled) rectangle in world space,
   without regard to the clipping region.

Parameters

   xmin is the world space x coordinate of the rectangle's left edge.

   xmax is the world space x coordinate of the rectangle's right edge.  It
   must be greater than or equal to the value of xmin.

   ymin is the world space y coordinate of the rectangle's bottom edge.

   ymax is the world space y coordinate of the rectangle's top edge.  It must
   be greater than or equal to the value of ymin.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light.

See also

   fg_clprect, fg_clprectw, fg_drect, fg_drectw, fg_rect

Examples

   7-10



















                                     112
fg_reset


Prototype

   void fg_reset (void);

Description

   When the ANSI.SYS driver is not loaded, the fg_reset routine erases the
   screen.  When ANSI.SYS is loaded, fg_reset also restores any previously set
   screen attributes.  It is generally the last Fastgraph routine called in a
   program.

Parameters

   none

Return value

   none

Restrictions

   This routine has no effect in graphics video modes.

See also

   fg_erase

Examples

   3-2

























                                     113
fg_restore


Prototype

   void fg_restore (int minx, int maxx, int miny, int maxy);

Description

   The fg_restore routine copies a rectangular region from the hidden video
   page to the same position on the active video page.  In text modes, the
   region is defined in character space; in graphics modes, it is defined in
   screen space.

Parameters

   minx is the x coordinate of the region's left edge.  In graphics modes, its
   value is reduced to a byte boundary if necessary.

   maxx is the x coordinate of the region's right edge.  It must be greater
   than or equal to the value of minx.  In graphics modes, its value is
   extended to a byte boundary if necessary.

   miny is the y coordinate of the region's top edge.

   maxy is the y coordinate of the region's bottom edge.  It must be greater
   than or equal to the value of miny.

Return value

   none

Restrictions

   none

See also

   fg_restorew, fg_save, fg_savew, fg_sethpage, fg_transfer

Examples

   9-21, 9-22















                                     114
fg_restorew


Prototype

   void fg_restorew (double xmin, double xmax, double ymin, double ymax);

Description

   The fg_restorew routine copies a rectangular region, defined in world
   space, from the hidden video page to the same position on the active video
   page.

Parameters

   xmin is the world space x coordinate of the region's left edge.  In
   graphics modes, its value is reduced to a byte boundary if necessary.

   xmax is the world space x coordinate of the region's right edge.  It must
   be greater than or equal to the value of xmin.  In graphics modes, its
   value is extended to a byte boundary if necessary.

   ymin is the world space y coordinate of the region's bottom edge.

   ymax is the world space y coordinate of the region's top edge.  It must be
   greater than or equal to the value of ymin.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light.

See also

   fg_restore, fg_save, fg_savew, fg_sethpage, fg_transfer




















                                     115
fg_revimage


Prototype

   void fg_revimage (char *map_array, int width, int height);

Description

   The fg_revimage routine displays a reversed image stored as a mode-specific
   bit map.  The image will be positioned so that its lower left corner is at
   the graphics cursor position.  Refer to the Fastgraph User's Guide for
   complete information about mode-specific bit maps.

Parameters

   map_array is the arbitrary-length array containing the bit map.  For EGA
   and VGA graphics modes, each color must be in a separate bit map.  For all
   other graphics modes, all colors are in a single bit map.

   width is the width in bytes of the bit map.

   height is the height in bytes (pixel rows) of the bit map.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_clpimage, fg_drwimage, fg_flpimage, fg_getimage

Examples

   9-8, 9-9



















                                     116
fg_revmask


Prototype

   void fg_revmask (char *map_array, int runs, int width);

Description

   The fg_revmask routine displays a reversed image stored as a masking map.
   The image will be positioned so that its lower left corner is at the
   graphics cursor position.  Refer to the description of the fg_drawmask
   routine for more information about masking maps.

Parameters

   map_array is the arbitrary-length array containing the masking map.

   runs is the number of pixel runs in the masking map.

   width is the width in pixels of the masking map.

Return value

   none

Restrictions

   This routine has no effect in text video modes, or in the native EGA and
   VGA graphics video modes.

See also

   fg_clipmask, fg_drawmask, fg_flipmask

Examples

   9-15


















                                     117
fg_save


Prototype

   void fg_save (int minx, int maxx, int miny, int maxy);

Description

   The fg_save routine copies a rectangular region from the active video page
   to the same position on the hidden video page.  In text modes, the region
   is defined in character space; in graphics modes, it is defined in screen
   space.

Parameters

   minx is the x coordinate of the region's left edge.  In graphics modes, its
   value is reduced to a byte boundary if necessary.

   maxx is the x coordinate of the region's right edge.  It must be greater
   than or equal to the value of minx.  In graphics modes, its value is
   extended to a byte boundary if necessary.

   miny is the y coordinate of the region's top edge.

   maxy is the y coordinate of the region's bottom edge.  It must be greater
   than or equal to the value of miny.

Return value

   none

Restrictions

   none

See also

   fg_restore, fg_restorew, fg_savew, fg_sethpage, fg_transfer

Examples

   9-21, 9-22

















                                     118
fg_savew


Prototype

   void fg_savew (double xmin, double xmax, double ymin, double ymax);

Description

   The fg_savew routine copies a rectangular region, defined in world space,
   from the active video page to the same position on the hidden video page.

Parameters

   xmin is the world space x coordinate of the region's left edge.  In
   graphics modes, its value is reduced to a byte boundary if necessary.

   xmax is the world space x coordinate of the region's right edge.  It must
   be greater than or equal to the value of xmin.  In graphics modes, its
   value is extended to a byte boundary if necessary.

   ymin is the world space y coordinate of the region's bottom edge.

   ymax is the world space y coordinate of the region's top edge.  It must be
   greater than or equal to the value of ymin.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light.

See also

   fg_restore, fg_restorew, fg_save, fg_sethpage, fg_transfer





















                                     119
fg_scrlock


Prototype

   int fg_scrlock (void);

Description

   The fg_scrlock routine determines the state of the ScrollLock key.

Parameters

   none

Return value

   If the return value is 0, it means the ScrollLock key is off.  If it is 1,
   it means the ScrollLock key is on.

Restrictions

   Not all PC keyboards have a ScrollLock key.  For such systems, fg_scrlock
   will return a value of zero.

See also

   fg_capslock, fg_numlock, fg_setcaps, fg_setnum

Examples

   12-3


























                                     120
fg_scroll


Prototype

   void fg_scroll (int minx, int maxx, int miny, int maxy, int jump, int
   type);

Description

   The fg_scroll routine vertically scrolls a region of the active video page.
   The scrolling may be done either up or down, using either an end-off or
   circular method.  In text modes, the region is defined in character space;
   in graphics modes, it is defined in screen space.

Parameters

   minx is the x coordinate of the scrolling region's left edge.  In graphics
   modes, its value is reduced to a byte boundary if necessary.

   maxx is the x coordinate of the scrolling region's right edge.  It must be
   greater than or equal to the value of minx.  In graphics modes, its value
   is extended to a byte boundary if necessary.

   miny is the y coordinate of the scrolling region's top edge.

   maxy is the y coordinate of the scrolling region's bottom edge.  It must be
   greater than or equal to the value of miny.

   jump is the number of pixels to jump between each scrolling iteration.  If
   jump is negative, the region will scroll toward the top of the screen.  If
   jump is positive, the region will scroll toward the bottom of the screen.

   type specifies the type of scroll.  If type is zero, rows that scroll off
   one edge appear at the opposite edge, thus producing a circular scrolling
   effect.  If type is any other value, rows that scroll off one edge will be
   replaced at the opposite edge by lines of the current color.

Return value

   none

Restrictions

   Circular scrolling uses part of the hidden page (as defined in the most
   recent call to fg_sethpage) as a temporary workspace.












                                     121
fg_scroll (continued)


See also

   fg_setcolor, fg_sethpage

Examples

   11-3, 11-4, 11-5
















































                                     122
fg_setangle


Prototype

   void fg_setangle (double angle);

Description

   The fg_setangle routine defines the angle or orientation at which software
   characters are displayed.  If a program draws software characters before
   calling fg_setangle, Fastgraph will use its default angle of zero degrees
   (that is, horizontal).

Parameters

   angle is the angle of rotation, expressed in degrees and measured
   counterclockwise from the positive x axis.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light.  Before using this
   routine, you must use the fg_initw and fg_setworld routines to establish a
   world space coordinate system.

See also

   fg_initw, fg_setratio, fg_setsize, fg_setsizew, fg_setworld, fg_swchar,
   fg_swlength, fg_swtext

Examples

   7-9





















                                     123
fg_setattr


Prototype

   void fg_setattr (int foreground, int background, int blink);

Description

   The fg_setattr routine establishes the current text attribute in text video
   modes.

Parameters

   foreground is attribute's foreground component, between 0 and 15.

   background is the attribute's background component, between 0 and 7.

   blink is the attribute's blink component, between 0 and 1.

Return value

   none

Restrictions

   This routine has no effect in graphics video modes.

See also

   fg_setcolor

Examples

   7-1, 7-2, 7-3, 8-1, 8-3, 8-5, 8-7, 9-20, 9-21, 9-23, 11-4, 12-8























                                     124
fg_setcaps


Prototype

   void fg_setcaps (int state);

Description

   The fg_setcaps routine controls the state of the CapsLock key.

Parameters

   state defines the CapsLock key state.  If state is 0, the CapsLock key is
   turned off.  If it is 1, the CapsLock key is turned on.

Return value

   none

Restrictions

   On most keyboards, changing the CapsLock key state will also change the
   keyboard state light to reflect the new key state.  However, some older
   keyboards, especially when used on PC, PC/XT, or Tandy 1000 systems, do not
   update the state light.  This makes the state light inconsistent with the
   true key state.

See also

   fg_capslock, fg_numlock, fg_scrlock, fg_setnum

Examples

   12-4























                                     125
fg_setclip


Prototype

   void fg_setclip (int minx, int maxx, int miny, int maxy);

Description

   The fg_setclip routine defines the clipping region in screen space.  The
   clipping region is a rectangular area outside of which graphics are
   suppressed.

Parameters

   minx is the screen space x coordinate of the clipping region's left edge.

   maxx is the screen space x coordinate of the clipping region's right edge.
   It must be greater than or equal to the value of minx.

   miny is the screen space y coordinate of the clipping region's top edge.

   maxy is the screen space y coordinate of the clipping region's bottom edge.
   It must be greater than or equal to the value of miny.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_setclipw

Examples

   6-5, 9-8, 9-9, 9-15, 10-4


















                                     126
fg_setclipw


Prototype

   void fg_setclipw (double xmin, double xmax, double ymin, double ymax);

Description

   The fg_setclipw routine defines the clipping region in world space.  The
   clipping region is a rectangular area outside of which graphics are
   suppressed.

Parameters

   xmin is the world space x coordinate of the clipping region's left edge.

   xmax is the world space x coordinate of the clipping region's right edge.
   It must be greater than or equal to the value of xmin.

   ymin is the world space y coordinate of the clipping region's bottom edge.

   ymax is the world space y coordinate of the clipping region's top edge.  It
   must be greater than or equal to the value of ymin.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light and has no effect in text
   video modes.

See also

   fg_setclip





















                                     127
fg_setcolor


Prototype

   void fg_setcolor (int color);

Description

   The fg_setcolor routine establishes the current color index (which may be a
   virtual color index) in graphics modes.  In text modes, fg_setcolor
   provides an alternate method of defining the current text attribute.

Parameters

   color defines the current color index (in graphics modes) or text attribute
   (in text modes).  Its value must be between 0 and 255.

Return value

   none

Restrictions

   none

See also

   fg_defcolor, fg_getcolor, fg_palette

Examples

   3-1 to 3-8

























                                     128
fg_setfunc


Prototype

   void fg_setfunc (int mode);

Description

   The fg_setfunc routine specifies the logical operation applied when video
   memory changes in the native EGA and VGA graphics modes.  Replacement mode
   is selected after you use the fg_setmode routine to establish a video mode.

Parameters

   mode defines the logical operation, as shown below.


                    value of   logical
                      mode    operation

                        0     replacement
                        1     and
                        2     or
                        3     exclusive or



Return value

   none

Restrictions

   This routine only functions in the native EGA and VGA graphics video modes
   (modes 13 through 18).

Examples

   10-3, 15-2


















                                     129
fg_sethpage


Prototype

   void fg_sethpage (int page_number);

Description

   The fg_sethpage routine establishes the hidden video page.  It may be a
   physical or virtual video page.  The fg_setmode routine designates video
   page 0 as the hidden page.

Parameters

   page_number is the hidden video page number, between 0 and 15.

Return value

   none

Restrictions

   This routine has no effect if page_number references a physical video page
   that does not exist, or a virtual video page that has not been created.

See also

   fg_gethpage, fg_setpage, fg_setvpage

Examples

   9-21, 9-22, 11-2, 11-5

























                                     130
fg_setmode


Prototype

   void fg_setmode (int mode);

Description

   The fg_setmode routine establishes a video mode and initializes Fastgraph's
   internal parameters for that video mode.  It must be called before any
   Fastgraph routine that performs video output.  A program can call
   fg_setmode as many times as needed to switch between different video modes.

Parameters

   mode is the video mode number, between 0 and 21.  The following table lists
   Fastgraph's supported video modes.


    Mode                       No. of     Supported          Supported
   Number  Type    Resolution  Colors     Adapters           Displays

      0    Text    40 x 25     16/8       CGA,EGA,VGA,MCGA   RGB,ECD,VGA
      1    Text    40 x 25     16/8       CGA,EGA,VGA,MCGA   RGB,ECD,VGA
      2    Text    80 x 25     16/8       CGA,EGA,VGA,MCGA   RGB,ECD,VGA
      3    Text    80 x 25     16/8       CGA,EGA,VGA,MCGA   RGB,ECD,VGA
      4  Graphics  320 x 200   4          CGA,EGA,VGA,MCGA   RGB,ECD,VGA
      5  Graphics  320 x 200   4          CGA,EGA,VGA,MCGA   RGB,ECD,VGA
      6  Graphics  640 x 200   2/16       CGA,EGA,VGA,MCGA   RGB,ECD,VGA
      7    Text    80 x 25     b/w        MDA,HGC,EGA,VGA    Mono,ECD,VGA
      9  Graphics  320 x 200   16         Tandy 1000,PCjr    RGB
     11  Graphics  720 x 348   b/w        HGC                Monochrome
     12  Graphics  320 x 200   b/w        HGC                Monochrome
     13  Graphics  320 x 200   16         EGA,VGA            RGB,ECD,VGA
     14  Graphics  640 x 200   16         EGA,VGA            RGB,ECD,VGA
     15  Graphics  640 x 350   b/w        EGA,VGA            Monochrome,VGA
     16  Graphics  640 x 350   16/64      EGA,VGA            ECD,VGA
     17  Graphics  640 x 480   2/256K     VGA,MCGA           VGA
     18  Graphics  640 x 480   16/256K    VGA                VGA
     19  Graphics  320 x 200   256/256K   VGA,MCGA           VGA
     20  Graphics  320 x 200   256/256K   VGA                VGA
     21  Graphics  320 x 400   256/256K   VGA                VGA


   For more information about each video mode, including their required
   display adapters (graphics cards) and monitors, please refer to the
   Fastgraph User's Guide.

   The value of the mode parameter can also be -1, which tells Fastgraph to
   use the current video mode.  This feature is often useful in programs that
   use only text video modes, programs executed from another program, or
   terminate and stay resident (TSR) programs.





                                     131
fg_setmode (continued)


Return value

   none

Restrictions

   The fg_setmode routine does not check if the specified video mode is
   available on the user's system.  If necessary, you should first use the
   fg_testmode routine to do this.

See also

   fg_automode, fg_bestmode, fg_testmode

Examples

   3-1






































                                     132
fg_setnum


Prototype

   void fg_setnum (int state);

Description

   The fg_setnum routine controls the state of the NumLock key.

Parameters

   state defines the NumLock key state.  If state is 0, the NumLock key is
   turned off.  If it is 1, the NumLock key is turned on.

Return value

   none

Restrictions

   On most keyboards, changing the NumLock key state will also change the
   keyboard state light to reflect the new key state.  However, some older
   keyboards, especially when used on PC, PC/XT, or Tandy 1000 systems, do not
   update the state light.  This makes the state light inconsistent with the
   true key state.

See also

   fg_capslock, fg_numlock, fg_scrlock, fg_setcaps

Examples

   12-4























                                     133
fg_setpage


Prototype

   void fg_setpage (int page_number);

Description

   The fg_setpage routine establishes the active video page.  It may be a
   physical or virtual video page.  The fg_setmode routine designates video
   page 0 as the active page.

Parameters

   page_number is the active video page number, between 0 and 15.

Return value

   none

Restrictions

   This routine has no effect if page_number references a physical video page
   that does not exist, or a virtual video page that has not been created.

See also

   fg_getpage, fg_sethpage, fg_setvpage

Examples

   8-1 to 8-8, 10-4, 10-5, 11-2

























                                     134
fg_setratio


Prototype

   void fg_setratio (double ratio);

Description

   The fg_setratio routine defines the aspect ratio for software characters.
   The aspect ratio is the ratio of character width to character height.  If a
   program draws software characters before calling fg_setratio, Fastgraph
   will use its default aspect ratio of 1.

Parameters

   ratio is the aspect ratio.  It must be greater than zero.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light.  Before using this
   routine, you must use the fg_initw and fg_setworld routines to establish a
   world space coordinate system.

See also

   fg_initw, fg_setangle, fg_setsize, fg_setsizew, fg_setworld, fg_swchar,
   fg_swlength, fg_swtext

Examples

   7-8






















                                     135
fg_setrgb


Prototype

   void fg_setrgb (int number, int red, int green, int blue);

Description

   The fg_setrgb defines the value of a palette register (in Tandy/PCjr and
   EGA graphics modes) or video DAC register (in VGA and MCGA graphics modes)
   by specifying its red, green, and blue color components.

Parameters

   number is the palette or video DAC register number.  If it references a
   palette register, it must be between 0 and 15 (0 and 1 in mode 17).  If it
   references a video DAC register, it must be between 0 and 255.  The value
   of number may be negative to specify an intense color for that palette
   register in Tandy/PCjr and 200-line EGA graphics modes.

   red, green, and blue respectively specify the red, green, and blue
   components of the specified palette or video DAC register.  These values
   must be 0 or 1 for Tandy/PCjr and 200-line EGA graphics modes, between 0
   and 3 for 350-line EGA modes, and between 0 and 63 for VGA and MCGA modes.

Return value

   none

Restrictions

   This routine has no effect in text video modes, CGA graphics modes, or
   Hercules graphics modes.

See also

   fg_getrgb, fg_palette, fg_setcolor

Examples

   5-9, 5-11, 5-14, 9-14
















                                     136
fg_setsize


Prototype

   void fg_setsize (int isize);

Description

   The fg_setsize routine defines the height of software characters in screen
   space units.  If neither fg_setsize nor fg_setsizew is called, Fastgraph
   will use its default character height of one world space unit.

Parameters

   isize is the character height in screen space units.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light.  Before using this
   routine, you must use the fg_initw and fg_setworld routines to establish a
   world space coordinate system.

See also

   fg_initw, fg_setangle, fg_setratio, fg_setsizew, fg_setworld, fg_swchar,
   fg_swlength, fg_swtext



























                                     137
fg_setsizew


Prototype

   void fg_setsizew (double size);

Description

   The fg_setsizew routine defines the height of software characters in world
   space units.  If neither fg_setsize nor fg_setsizew is called, Fastgraph
   will use its default character height of one world space unit.

Parameters

   size is the character height in world space units.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light.  Before using this
   routine, you must use the fg_initw and fg_setworld routines to establish a
   world space coordinate system.

See also

   fg_initw, fg_setangle, fg_setratio, fg_setsize, fg_setworld, fg_swchar,
   fg_swlength, fg_swtext

Examples

   7-7, 7-8, 7-9, 7-10























                                     138
fg_setvpage


Prototype

   void fg_setvpage (int page_number);

Description

   The fg_setvpage routine establishes the visual video page.  It may be a
   physical or virtual video page.  The fg_setmode routine designates video
   page 0 as the visual page.

Parameters

   page_number is the visual video page number, between 0 and 15.

Return value

   none

Restrictions

   This routine has no effect if page_number references a physical video page
   that does not exist, or a virtual video page that has not been created.

See also

   fg_getpage, fg_sethpage, fg_setpage

Examples

   8-1 to 8-7

























                                     139
fg_setworld


Prototype

   void fg_setworld (double xmin, double xmax, double ymin, double ymax);

Description

   The fg_setworld routine defines the world space coordinates that correspond
   to the physical edges of the screen.

Parameters

   xmin is the world space coordinate of the screen's left edge.

   xmax is the world space coordinate of the screen's right edge.  It must be
   greater than the value of xmin.

   ymin is the world space coordinate of the screen's top edge.

   ymax is the world space coordinate of the screen's bottom edge.  It must be
   greater than the value of ymin.

Return value

   none

Restrictions

   This routine is not available in Fastgraph/Light.  Before using this
   routine, you must call the fg_initw routine to initialize Fastgraph's world
   space parameters.

See also

   fg_getworld, fg_initw

Examples

   4-3, 6-4, 6-8, 7-7, 7-8, 7-9, 7-10

















                                     140
fg_sound


Prototype

   void fg_sound (int frequency, int duration);

Description

   The fg_sound routine produces a tone of a specified frequency and duration
   using the programmable timer.

Parameters

   frequency is tone's frequency in Hertz, between 18 and 32,767.

   duration is the tone's length in clock ticks (there are approximately 18.2
   clock ticks per second).  If duration is zero or negative, the tone is said
   to be continuous and will play until you stop it with the fg_quiet routine.

Return value

   none

Restrictions

   This routine has no effect if there is asynchronous sound already in
   progress.

See also

   fg_music, fg_quiet, fg_sounds, fg_voice

Examples

   13-1






















                                     141
fg_sounds


Prototype

   void fg_sounds (int *sound_array, int ntimes);

Description

   The fg_sounds routine uses the programmable timer to play a series of tones
   of specified frequencies and durations, concurrent with other activity.  It
   is the asynchronous version of the fg_sound routine.

Parameters

   sound_array is an arbitrary-length array containing a series of
   (frequency,duration) sound definitions.  The format of this array is:


                          [0]    frequency of sound 1

                          [1]    duration  of sound 1

                          [2]    frequency of sound 2

                          [3]    duration  of sound 2
                           .
                           .
                           .

                       [2n-2]    frequency of sound n

                       [2n-1]    duration  of sound n

                         [2n]       terminator (0)


   Each frequency value is measured in Hertz and must be between 18 and
   32,767.  The durations are measured in clock ticks (there are approximately
   72.8 clock ticks per second).  A null character (that is, a zero byte)
   terminates the array.

   ntimes specifies the number of times to cycle through the sounds defined in
   sound_array.  If ntimes is negative, the sounds will play repetitively
   until stopped with the fg_hush or fg_hushnext routine.

Return value

   none









                                     142
fg_sounds (continued)


Restrictions

   This routine has no effect if there is asynchronous sound already in
   progress.  To expand the range of sound effects, Fastgraph temporarily
   quadruples the clock tick interrupt rate from 18.2 to 72.8 ticks per second
   while producing asynchronous sound.  Because many disk controllers rely on
   the 18.2 tick per second clock rate to synchronize disk accesses, your
   programs should not perform any disk operations when asynchronous sound is
   in progress.

See also

   fg_hush, fg_hushnext, fg_musicb, fg_playing, fg_sound, fg_voice, fg_voices

Examples

   13-4






































                                     143
fg_stall


Prototype

   void fg_stall (int delay);

Description

   The fg_stall routine delays a program's execution for a given number of
   processor-specific delay units.  You can use the fg_measure routine to
   obtain the number of delay units per clock tick for the system being used.

Parameters

   delay is the number of delay units to wait.

Return value

   none

Restrictions

   none

See also

   fg_measure, fg_waitfor

Examples

   14-3


























                                     144
fg_swchar


Prototype

   void fg_swchar (char *string, int n, int justify);

Description

   The fg_swchar routine displays a string of software characters in the
   current color index.  The string may be left justified, centered, or right
   justified relative to the graphics cursor.

Parameters

   string is the arbitrary-length sequence of characters to display.  It may
   contain special operators, as summarized in the following table.


             operator    meaning

             \           switch to other font
             \^          superscript the next character
             \v          subscript the next character
             _           begin underlining characters until another
                         underscore character is encountered


   n is the number of characters in string, including any special operator
   characters.

   justify determines how string is positioned relative to the current
   position.  If justify is negative, string is left justified; if it is zero,
   string is centered; if it is positive, string is right justified.

Return value

   none

Restrictions

   Before using this routine, you must use the fg_initw and fg_setworld
   routines to establish a world space coordinate system.  This routine is not
   available in Fastgraph/Light and has no effect in text video modes.

See also

   fg_initw, fg_setangle, fg_setratio, fg_setsize, fg_setsizew, fg_setworld,
   fg_swlength, fg_swtext









                                     145
fg_swchar (continued)


Examples

   7-7, 7-8




















































                                     146
fg_swlength


Prototype

   double fg_swlength (char *string, int n);

Description

   The fg_swlength routine computes the length of a string of software
   characters.

Parameters

   string is the arbitrary-length sequence of characters for which to compute
   the length.  It may contain special operators used by the fg_swchar and
   fg_swtext routines.

   n is the number of characters in string, including any special operator
   characters.

   justify determines how string is positioned relative to the current
   position.  If justify is negative, string is left justified; if it is zero,
   string is centered; if it is positive, string is right justified.

Return value

   The length of string, in world space units.

Restrictions

   Before using this routine, you must use the fg_initw and fg_setworld
   routines to establish a world space coordinate system.  This routine is not
   available in Fastgraph/Light and has no effect in text video modes.

See also

   fg_initw, fg_setangle, fg_setratio, fg_setsize, fg_setsizew, fg_setworld,
   fg_swchar, fg_swtext

Examples

   7-10















                                     147
fg_swtext


Prototype

   void fg_swtext (char *string, int n, int justify);

Description

   The fg_swtext routine is a scaled down version of the fg_swchar routine.
   It does not include the alternate font character definitions and thus
   requires less memory than fg_swchar.

Parameters

   string is the arbitrary-length sequence of characters to display.  It may
   contain special operators, as summarized in the following table.


             operator    meaning

             \^          superscript the next character
             \v          subscript the next character
             _           begin underlining characters until another
                         underscore character is encountered


   n is the number of characters in string, including any special operator
   characters.

   justify determines how string is positioned relative to the current
   position.  If justify is negative, string is left justified; if it is zero,
   string is centered; if it is positive, string is right justified.

Return value

   none

Restrictions

   Before using this routine, you must use the fg_initw and fg_setworld
   routines to establish a world space coordinate system.  This routine is not
   available in Fastgraph/Light and has no effect in text video modes.

See also

   fg_initw, fg_setangle, fg_setratio, fg_setsize, fg_setsizew, fg_setworld,
   fg_swchar, fg_swlength










                                     148
fg_swtext (continued)


Examples

   7-9, 7-10




















































                                     149
fg_tcmask


Prototype

   void fg_tcmask (int mask);

Description

   The fg_tcmask routine defines which color values the fg_tcxfer routine will
   consider transparent.

Parameters

   mask is a 16-bit mask, where each bit indicates whether or not the
   corresponding color value is transparent.  For example, if bit 0 (the
   rightmost bit) is 1, then color 0 will be transparent.  If bit 0 is 0,
   color 0 will not be transparent.  Because the mask size is 16 bits, only
   the first 16 color values may be defined as transparent.

Return value

   none

Restrictions

   This routine has no effect in text video modes.

See also

   fg_tcxfer

Examples

   9-26























                                     150
fg_tcxfer


Prototype

   void fg_tcxfer (int minx, int maxx, int miny, int maxy, int newx, int newy,
     int source_page, int dest_page);

Description

   The fg_tcxfer routine copies a rectangular region from any position on any
   video page to any position on any video page, excluding any pixels whose
   color is transparent.  The transparent colors are defined by the fg_tcmask
   routine.

Parameters

   minx is the x coordinate of the source region's left edge.  Its value is
   reduced to a byte boundary if necessary.

   maxx is the x coordinate of the source region's right edge.  It must be
   greater than or equal to the value of minx.  Its value is extended to a
   byte boundary if necessary.

   miny is the y coordinate of the source region's top edge.

   maxy is the y coordinate of the source region's bottom edge.  It must be
   greater than or equal to the value of miny.

   newx is the x coordinate of the destination region's left edge.

   newy is the y coordinate of the destination region's bottom edge.

   source_page is the video page number containing the source region.

   dest_page is the video page number for the destination region.

Return value

   none

Restrictions

   If source_page and dest_page reference the same video page, the source
   region and destination region must not overlap.  This routine has no effect
   in text video modes.












                                     151
fg_tcxfer (continued)


See also

   fg_tcmask, fg_transfer

Examples

   9-26
















































                                     152
fg_testmode


Prototype

   int fg_testmode (int mode, int pages);

Description

   The fg_testmode routine determines whether or not a specified video mode is
   available on the user's system.  Additionally, fg_testmode can check if
   there is enough video memory (for physical pages) or random-access memory
   (for virtual pages) to support the number of video pages needed.

Parameters

   mode is the video mode number to test, between 0 and 21.  Refer to the
   description of the fg_setmode routine for a list of available video modes.

   pages is the number of video pages required (either physical pages, virtual
   pages, or both).  If the pages parameter is zero or negative, fg_testmode
   checks for availability of the video mode but does not consider video
   memory requirements.

Return value

   If the requested video mode is available (with the requested number of
   video pages), fg_testmode returns 1.  If not, it returns 0.

Restrictions

   none

See also

   fg_automode, fg_bestmode, fg_setmode

Examples

   3-3, 3-8, 5-14, 6-7


















                                     153
fg_text


Prototype

   void fg_text (char *string, int n);

Description

   The fg_text routine displays a string of hardware characters, starting at
   the text cursor position, using the current text attribute (for text modes)
   or color index (for graphics modes).  This routine leaves the text cursor
   one column to the right of the last character changed (or the first column
   of the next row if the last character is at the end of a row).

Parameters

   string is the arbitrary-length sequence of characters to display.

   n is the number of characters to display from string.

Return value

   none

Restrictions

   none

See also

   fg_locate

Examples

   7-1 to 7-7, 7-9, 7-10






















                                     154
fg_transfer


Prototype

   void fg_transfer (int minx, int maxx, int miny, int maxy, int newx, int
   newy,
     int source_page, int dest_page);

Description

   The fg_transfer routine copies a rectangular region from any position on
   any video page to any position on any video page.  In text modes, the
   region is defined in character space; in graphics modes, it is defined in
   screen space.  It is Fastgraph's most general image transfer routine.

Parameters

   minx is the x coordinate of the source region's left edge.  In graphics
   modes, its value is reduced to a byte boundary if necessary.

   maxx is the x coordinate of the source region's right edge.  It must be
   greater than or equal to the value of minx.  In graphics modes, its value
   is extended to a byte boundary if necessary.

   miny is the y coordinate of the source region's top edge.

   maxy is the y coordinate of the source region's bottom edge.  It must be
   greater than or equal to the value of miny.

   newx is the x coordinate of the destination region's left edge.

   newy is the y coordinate of the destination region's bottom edge.

   source_page is the video page number containing the source region.

   dest_page is the video page number for the destination region.

Return value

   none

Restrictions

   If source_page and dest_page reference the same video page, the source
   region and destination region must not overlap.












                                     155
fg_transfer (continued)


See also

   fg_restore, fg_restorew, fg_save, fg_savew, fg_tcxfer

Examples

   9-23, 9-24, 9-25, 10-4, 10-5
















































                                     156
fg_version


Prototype

   void fg_version (int *major, int *minor);

Description

   The fg_version routine returns the major and minor version numbers for your
   copy of Fastgraph or Fastgraph/Light.  For example, if you are using
   Fastgraph version 2.0, the major version number is 2 and the minor version
   number is 0.

Parameters

   major receives the major version number.

   minor receives the minor version number, expressed in hundredths.

Return value

   none

Restrictions

   none

Examples

   1-1, 1-2, 1-3



























                                     157
fg_voice


Prototype

   void fg_voice (int channel, int frequency, int volume, int duration);

Description

   The fg_voice routine produces a tone of a specified frequency, duration,
   and volume using one of the TI sound chip's four independent voice
   channels.

Parameters

   channel defines the voice channel or type of noise, as shown below.


                  value   meaning

                    1     voice channel #1
                    2     voice channel #2
                    3     voice channel #3
                    4     voice channel #4, periodic noise
                    5     voice channel #4, white noise



   frequency defines the tone's frequency in Hertz.  If channel is 1, 2, or 3,
   then frequency represents the actual frequency, between 18 and 32,767.  If
   channel is 4 or 5, frequency is instead a value that represents a specific
   frequency, as shown below.


                          value  frequency

                            0     512 Hertz
                            1    1024 Hertz
                            2    2048 Hertz


   volume is the tone's volume, between 0 (silent) and 15 (loudest).

   duration is the tone's length in clock ticks (there are approximately 18.2
   clock ticks per second).  If duration is zero or negative, the tone is said
   to be continuous and will play until you stop it with the fg_quiet routine.


Return value

   none

Restrictions

   This routine should only be used on systems equipped with the TI sound chip
   (namely, the PCjr and Tandy 1000 systems).  It has no effect if there is
   asynchronous sound already in progress.

                                     158
fg_voice (continued)


See also

   fg_music, fg_quiet, fg_sound, fg_voices

Examples

   13-2
















































                                     159
fg_voices


Prototype

   void fg_voices (int *sound_array, int ntimes);

Description

   The fg_voices routine uses the TI sound chip to play a series of tones of
   specified frequencies, durations, and volumes, concurrent with other
   activity.  It is the asynchronous version of the fg_voice routine.

Parameters

   sound_array is an arbitrary-length array containing a series of
   (channel,frequency,volume,duration) sound definitions.  The format of this
   array is:


                          [0]    channel # of sound 1

                          [1]    frequency of sound 1

                          [2]    volume    of sound 1

                          [3]    duration  of sound 1
                           .
                           .
                           .

                       [4n-4]    channel # of sound n

                       [4n-3]    frequency of sound n

                       [4n-2]    volume    of sound n

                       [4n-1]    duration  of sound n

                         [4n]       terminator (0)


   The channel numbers, frequencies, volumes, and durations must be in the
   same ranges as discussed in the description of the fg_voice routine, except
   the durations are quadrupled because of the accelerated clock tick
   interrupt rate (there are 72.8 instead of 18.2 clock ticks per second).  A
   null character (that is, a zero byte) terminates the array.

   ntimes specifies the number of times to cycle through the sounds defined in
   sound_array.  If ntimes is negative, the sounds will play repetitively
   until stopped with the fg_hush or fg_hushnext routine.







                                     160
fg_voices (continued)


Return value

   none

Restrictions

   This routine should only be used on systems equipped with the TI sound chip
   (namely, the PCjr and Tandy 1000 systems).  It has no effect if there is
   asynchronous sound already in progress.  To expand the range of sound
   effects, Fastgraph temporarily quadruples the clock tick interrupt rate
   from 18.2 to 72.8 ticks per second while producing asynchronous sound.
   Because many disk controllers rely on the 18.2 tick per second clock rate
   to synchronize disk accesses, your programs should not perform any disk
   operations when asynchronous sound is in progress.

See also

   fg_hush, fg_hushnext, fg_musicb, fg_playing, fg_sounds, fg_voice

Examples

   13-5

































                                     161
fg_waitfor


Prototype

   void fg_waitfor (int ticks);

Description

   The fg_waitfor routine delays a program's execution for a given number of
   clock ticks.  There are 18.2 clock ticks per second, regardless of the
   system's processor speed.

Parameters

   ticks is the number of clock ticks to wait.

Return value

   none

Restrictions

   none

See also

   fg_stall

Examples

   5-11, 10-1 to 10-5, 11-5, 11-6, 12-2, 12-6, 12-7, 12-11, 12-12, 13-1, 13-2,
   13-3, 13-6, 13-7, 14-1

























                                     162
fg_waitkey


Prototype

   void fg_waitkey (void);

Description

   The fg_waitkey routine flushes the BIOS keyboard buffer (that is, removes
   any type-ahead characters) and then waits for another keystroke.  It is
   most useful in "press any key to continue" situations.

Parameters

   none

Return value

   none

Restrictions

   none

See also

   fg_getkey, fg_intkey

Examples

   3-2 to 3-8


























                                     163
fg_where


Prototype

   void fg_where (int *row, int *column);

Description

   The fg_where routine retrieves the text cursor position for the active
   display page.

Parameters

   row receives the text cursor's current row number, between 0 and 24 (0 and
   29 for VGA graphics modes 17 and 18).

   column receives text cursor's current column number, between 0 and 39 for
   40-column modes, or between 0 and 79 for 80-column modes.

Return value

   none

Restrictions

   none

See also

   fg_locate

Examples

   7-2























                                     164
fg_xalpha


Prototype

   int fg_xalpha (int ix);

Description

   The fg_xalpha routine translates a screen space x coordinate to the
   character space column containing that coordinate.

Parameters

   ix is the screen space coordinate to translate.

Return value

   The character space column containing the screen space coordinate ix.  In
   text modes, the return value is equal to the value of ix.

Restrictions

   none

See also

   fg_xconvert, fg_yalpha, fg_yconvert

Examples

   12-9


























                                     165
fg_xconvert


Prototype

   int fg_xconvert (int column);

Description

   The fg_xconvert routine translates a character space column to the screen
   space coordinate of its leftmost pixel.  In graphics video modes,
   fg_xconvert(1) is an easy way to determine the width in pixels of a
   character cell.

Parameters

   column is the character space column to translate.

Return value

   The screen space x coordinate of the leftmost pixel in the character space
   column column.  In text modes, the return value is equal to the value of
   column.

Restrictions

   none

See also

   fg_xalpha, fg_yalpha, fg_yconvert

Examples

   7-6, 12-7























                                     166
fg_xscreen


Prototype

   int fg_xscreen (double x);

Description

   The fg_xscreen routine translates a world space x coordinate to its screen
   space equivalent.

Parameters

   x is the world space coordinate to translate.

Return value

   The screen space x coordinate equivalent to the world space coordinate x.

Restrictions

   This routine is not available in Fastgraph/Light.

See also

   fg_xworld, fg_yscreen, fg_yworld































                                     167
fg_xworld


Prototype

   double fg_xworld (int ix);

Description

   The fg_xworld routine translates a screen space x coordinate to its world
   space equivalent.

Parameters

   ix is the screen space coordinate to translate.

Return value

   The world space x coordinate equivalent to the screen space coordinate ix.

Restrictions

   This routine is not available in Fastgraph/Light.

See also

   fg_xscreen, fg_yscreen, fg_yworld































                                     168
fg_yalpha


Prototype

   int fg_yalpha (int iy);

Description

   The fg_yalpha routine translates a screen space y coordinate to the
   character space row containing that coordinate.

Parameters

   iy is the screen space coordinate to translate.

Return value

   The character space row containing the screen space coordinate iy.  In text
   modes, the return value is equal to the value of iy.

Restrictions

   none

See also

   fg_xalpha, fg_xconvert, fg_yconvert

Examples

   12-9


























                                     169
fg_yconvert


Prototype

   int fg_yconvert (int row);

Description

   The fg_yconvert routine translates a character space row to the screen
   space coordinate of its top (lowest-numbered) pixel.  In graphics video
   modes, fg_yconvert(1) is an easy way to determine the height in pixels of a
   character cell.

Parameters

   row is the character space row to translate.

Return value

   The screen space y coordinate of the top pixel in the character space row
   row.  In text modes, the return value is equal to the value of row.

Restrictions

   none

See also

   fg_xalpha, fg_xconvert, fg_yalpha

Examples

   7-6, 12-7
























                                     170
fg_yscreen


Prototype

   int fg_yscreen (double y);

Description

   The fg_yscreen routine translates a world space y coordinate to its screen
   space equivalent.

Parameters

   y is the world space coordinate to translate.

Return value

   The screen space y coordinate equivalent to the world space coordinate y.

Restrictions

   This routine is not available in Fastgraph/Light.

See also

   fg_xscreen, fg_xworld, fg_yworld































                                     171
fg_yworld


Prototype

   double fg_yworld (int iy);

Description

   The fg_yworld routine translates a screen space y coordinate to its world
   space equivalent.

Parameters

   iy is the screen space coordinate to translate.

Return value

   The world space y coordinate equivalent to the screen space coordinate iy.

Restrictions

   This routine is not available in Fastgraph/Light.

See also

   fg_xscreen, fg_xworld, fg_yscreen































                                     172
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2797

     Volume in drive A has no label
     Directory of A:\

    README   1ST     15631   7-04-91   2:42p
    INSTALL  EXE     16973   7-04-91   3:08p
    CLIP     EXE     18717   5-30-91  10:03p
    CONVERT  EXE      9037   5-30-91  10:04p
    FGDRIVER EXE     24717   6-03-91   5:46p
    SNAPSHOT EXE      9853   5-30-91  10:04p
    FASTGRAF H        4738   6-24-91   3:30p
    FASTGRAF BI       9564   6-24-91   3:32p
    INTRFACE FOR     12511   6-24-91   3:35p
    FGLS     LIB      8207   7-03-91  11:45p
    FGLM     LIB      8207   7-03-91  11:45p
    FGLL     LIB      8207   7-03-91  11:45p
    FGLQB    LIB      9239   7-03-91  11:46p
    FGLQB    QLB     10935   7-03-91  11:46p
    FGLQC    QLB     14684   7-03-91  11:46p
    ORDER    FRM      3007   5-31-91   2:10p
    REF      TXT    167564   6-12-91  10:59p
           17 file(s)     351791 bytes
                               0 bytes free
