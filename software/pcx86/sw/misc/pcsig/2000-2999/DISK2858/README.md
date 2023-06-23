---
layout: page
title: "PC-SIG Diskette Library (Disk #2858)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2858/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2858"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CONFIG.DOC

{% raw %}
```

    CONFIGURING VPIC

    VPIC must be configured to run correctly with your display board.  The  con-
    figuration process tells VPIC:
    1. The title you want for the menu.
    2. What VGA chip you have, so it can use the proper bank switching routine.
    3. How much memory you have (in 64K banks).
    4. The menu color you want (background:foreground).
    5. How to set the various modes you want to use.

    This method is used instead of trying to autodetect the VGA chip and  memory
    because:
    1. Some chips are very hard to detect, and memory on board is even harder.
    2. As new VGA chips are released, there is a delay before the detection is
       implemented in the program.
    3. The WHICHVGA program is provided to autodetect the VGA chip and memory,
       but it fails on some chips.
    4. The config file provides more user control than automatic means.

    If you aren't sure which VGA chip your board uses,  you  can  run  WHICHVGA,
    which will try to identify your VGA chip and the amount of memory you  have.
    Also check for a list of some of the VGA boards each  chip  was used  on. If
    this doesn't work, you can remove the display board and look  at  the  label
    on the large chip with leads coming out all four sides. Sometimes,  you  can
    tell without removing the board by using DEBUG (or Turbo Debugger, Codeview,
    or any debugger) and 'dumping' the contents of display  BIOS.  To  do  this,
    enter DEBUG at the DOS prompt and you  will  get  a  -  prompt.  Then  enter
    dC000:0 to display the first part of display BIOS. To  dump  more  of  BIOS,
    juts enter d. You may recognize the chip manufacturers name  here,  such  as
    ATI, Trident, Tseng, Paradise, etc. To exit DEBUG, just enter q.

    If WHICHVGA comes back with VESA, that means that your  board  supports  the
    VESA standard, which offers a standard interface for VPIC to  your  SuperVGA
    display adapter. It defines the SuperVGA extended modes that your card  will
    do, and has a standard interface for setting the mode  and  bank  switching,
    etc. You  may  have  received  a  VESA  `Terminate and Stay Resident'  (TSR)
    program with your VGA board. If so, you are encouraged to use it,  since  it
    more or less guarantees that VPIC will work with your display card. The only
    disadvantage of VESA is concerned with scrolling the VGA screen, since there
    is no standard interface for setting the top of screen beyond 16 bits  (line
    81 at 800x600x256, line 102 at 640x480x256, or  line  204  at  320x200x256).
    This version of VPIC automatically reads the VESA  info  from  your  display
    BIOS, and uses the VESA interface. If you enter VPIC  with  the  /v  option,
    VESA info is ignored and VPIC uses the  configuration  file  info;  this  is
    helpful when VESA returns info VPIC isn't expecting or no  info  on  certain
    modes.




    The current VPIC config file VGA chips and the VGA chip manufacturers are:
    VGA Chip    Manufacturer/version        Comments
    =================================================================
    AHEADA     Ahead ver A             Older Ahead cards.
    AHEADB     Ahead ver B             Ahead VGA Wizard/Deluxe.
    ATIOLD     ATI, 1024x768x16 mode 65h   ATI ver 1 chip, VGAWonder.
    ATINEW     ATI, 1024x768x16 mode 55h   ATI ver 2 up chip, VGAWonder+.
               For the ATI Ultra, be sure to run ATI's HDILOAD program first to
               activate the 8514A interface for the 1024x768x256 mode.
    CIRRUS     Cirrus CL-GD 500/600    MaxLogic MaxVGA boards NOT SUPPORTED YET.
    CHIPSTECH  Chips & Technology 82C452   Cardinal, Older Boca.
    EVEREX     Original Everex chip
    EVBIOS     Everex 673, etc         Has bank switching built into BIOS.
    GENOA      Genoa (Sim ET 3000)     5300/6300 = 256K, others = 512K.
    HEADLAND   Headland HT-208         Used on VGA-1024i.
    NCR        NCR                     Boca, PVGA 1024i, etc
    OAK        Oak
    PARADISE   Paradise                Older Paradise cards.
    REALTEK    Realtek                 Used in RTVGA boards.
    S3         S3 GUI Accelerator      Used on Orchid Fahr 1280, Diamond Stealth,
                                        Genoa Windows VGA, etc.
    TRI88BR    Trident TVGA 8800BR     Used on older Trident boards, 128K banks.
    TRI88CS    Trident TVGA 8800CS     Used on older Trident boards (Maxxon)
    TRI89      Trident TVGA 8900       Latest Trident VGA chip, 1M memory avail.
    TS3000     Tseng ET 3000           Used on early Genoa, Orchid, others.
    TS4000     Tseng ET 4000           Recent Orchid, STB, other, 1M memory.
    TS4000HI   Tseng ET 4000 HiColor   Does 32K colors to 800x600, 1M memory.
    WD90C      Western Digital WD90C00  Recent Paradise cards, same operation.
    VIDEO7     Video 7                 Earlier Video 7 boards, BIOS bank switch.
                                        Hewlett Packard SVGA.
    ZYMOS      Zymos Poach 51          True Tech HiRes and others.
    VESA       VESA Standard           For boards which have VESA in BIOS.

    As new chips become available, they will be added to this list. Run WHICHVGA
    to find your VGA chip (works most of the time), and then run CONFIG and find
    a CFG file using that VGA chip. Check that the modes agree with the graphics
    modes in your manual (16 and 256 color modes only); if they match your  card
    exactly, use that CFG file by pressing ENTER. If not, copy the closest  file
    to a new filename with extension CFG and change the modes to agree with your
    manual. Make the title and menu color whatever you like  (see  CONFIGURATION
    FILE FORMAT). Then  rerun  CONFIG,  pick  that  file,  and  press  ENTER  to
    configure VPIC. There are numerous configuration files which come with VPIC,
    but there are so many boards out there that I can't list all of them.

    MENU CONFIGURATION
    To configure VPIC, make sure that VPIC, CVPIC,  CONFIG,  and  all  the  .CFG
    files are in the current directory. By running the CONFIG program, VPIC  can
    be configured from a menu. CONFIG lists all the configuration files (with  a
    .cfg extension) in the current directory, and shows you the contents of each
    as you move around the list using the cursor keys. ESCape aborts the  CONFIG
    program without changing VPIC, and ENTER configures VPIC for the highlighted
    file. Pressing a letter key jumps to next filename starting with that letter
    (or number).

    MANUAL CONFIGURATION
    You can use CVPIC to configure VPIC manually by entering:
         CVPIC config_file[.ext]
    where the default extension is .cfg and  config_file  is  the  configuration
    file you want to use.




    CONFIGURATION FILE (.CFG) FORMAT
    CVPIC ignores leading spaces and blank lines in the file, and all characters
    after a semicolon are considered comments and ignored. The .CFG file contains
    the following lines, which can be up to 150 characters in length each:

        1. Board name, which will appear in the VPIC menu. This is user  define-
           able, and could be something like 'Joe's VGA Board'.

        2. VGA CHIP should be one of the names supported  by  VPIC;  see  above.
           Upper or lower case is OK.

        3. The number of 64K banks of display ram usable  for  pictures  (1  for
           standard VGA (no extended modes), 4 for 256K, 8 for 512K, 16 for 1M).

        4. Menu text color. A number whose value is  background*16 + foreground.
           The allowable background colors are  0  thru  7,  and  the  allowable
           foreground colors are 0 thru 15. This number is easiest to figure  if
           entered in hex (prefixed by 0x); then the 1st digit is the background
           color (0-7) and the 2nd digit is  the  foreground  color  (0-F).  The
           digits correspond to black (0), blue (1),  green (2),  aqua (3),  red
           (4), violet (5), brown (6), and white (7), and  the  digits  8-F  are
           intensified versions of the 0-7. For example, 0x3E would tell VPIC to
           use bright yellow text on an aqua background. CONFIG gives the  value
           in hex, and the corresponding foreground-background colors.

        5 thru n. The following lines describe the modes supported by the board.
          Each line is of the form: F1 F2 AX BX CX DX W H C G P where:
            *  F1 = 0 for 16 color modes, 1 for 256 color modes, > 1 for  Sierra
               DAC modes (for Targa's only) as follows:
                    2 => 15 bits/pixel (32,000 colors)
                    3 => 16 bits/pixel (64,000 colors)
                    4 => 24 bits/pixel (16,000,000 colors)
            *  F2 = 0 for EGA (640x350x16) with 64 colors to choose from, and  1
               for all others modes (which have 256,000 colors to choose from).
            *  AX,BX,CX,DX  register values used to set this mode. Preceding the
               numbers by 0x indicates hex; ie., 0x10 = 16. Using 8514 for AX
               indicates an 8514A interface, where BX is the mode.
            *  W, H, C  are width, height, colors in this mode. For 24 bit modes
               the colors field has the color order; 123=>BGR, 321=>RGB.
          Additional Information if known
            *  G is the bank granularity in Kbytes; for instance,  the  Paradise
               has 4K banks.
            *  P is the number of color planes; usually 1 for  256  color  modes
               and 4 for 16 color modes. However, the ATI in 1024x768x16 and the
               S3 in 800x600x16 and 1024x768x16 uses 1 plane and 2 pixels/byte.

          The modes amy be entered in any order, but listing all  the  VGA  (256
          color) modes followed by the EGA (16 color)  modes,  followed  by  the
          Sierra DAC modes makes sense, and the mode numbers can  be  determined
          by looking at the configuration file.

          For specifying the mode N from the command line (/mN option for VPIC), the
          mode numbers increase with increasing resolution and can be found from
          the menu screen as follows:
            *  The 256 color modes are numbered 1 thru 10 starting at 320x200.
            *  The 16 color modes are numbered 11 thru 20 starting at 640x350.
          If you are configured with the Sierra DAC, Targa's will be automatically
          shown in 32K colors if you pick a resolution supported  by  the  board
          for the Sierra DAC.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  PC-SIG Disk #2825  VPIC  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the introductory instructions, type:                           ║
║                                    COPY README.1ST PRN  (press Enter)   ║
║                                                                         ║
║ To print the documentation, type:  COPY VPIC.TXT PRN  (press Enter)     ║
║                                    COPY VPIC.DOC PRN  (press Enter)     ║
║                                    COPY CONFIG.DOC PRN  (press Enter)   ║
║                                    COPY WAIT.DOC PRN  (press Enter)     ║
║                                                                         ║
║ To select the correct graphics configuration, type: CONFIG (press Enter)║
║                                                                         ║
║ To print the order form, type:  COPY ORDRFORM PRN  (press Enter)        ║
║                                                                         ║
║                                         (c) COPYRIGHT 1992, PC-SIG INC. ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## VPIC.TXT

{% raw %}
```
                                                   VPIC ver 5.1 REFERENCE CARD
                        @Copyright 1990 - 1992 by Bob Montgomery, All Rights Reserved.  [CIS 73357,3140]

    VPIC is a file viewer/converter for EGA, VGA and SuperVGA display adapters. It supports 8514A, Ahead (A & B chip), ATI, Chips
    & Technology, Everex, Genoa, Headland (Video 7), NCR, Oak, Paradise, Realtek, S3, Trident (8800 BR & CS and 8900), Tseng
    (ET3000 & ET4000 chip), Western Digital, and Zymos VGA chips in all VGA/EGA graphics modes. If your board supports the VESA
    standard, it is autodetected and used. It is configurable for your display card using a plain text configuration file and the
    accompanying CONFIG and CVPIC configuration programs.

    VPIC will display ,and convert to, the following graphics file formats:
        BIF Binary Image Format B&W Image Capture board files (display only).
        BMP Microsoft Windows 3.0 Bitmaps, uncompressed and compressed (change RLE to BMP extension). Save is W.
        GIF (GIF87a and GIF89a) viewing, normal and interlaced (Fractint FRA viewing too).
        GIF (GIF87a) saves in normal (G), interlaced (I), inverted (U), mirrored (M), rotated CW (>) or CCW (<) 90°.
        LBM Deluxe Paint VGA format, regular and enhanced (IFF Electronic Arts files too). Save command is D.
        MAC file (display only).
        PIC Pictor/PC Paint and ViewPoint (ViewSonic) files. Save command is P.
        PCX including the VGA version 1.61 of PC Paintbrush. Save command is Z.
        CUT Dr Halo machine independent format with a palette file. Save command is C.
        SCx file formats for Colorix and EGA Paint. Save command is R.
        TGA Targa 8 thru 32 bits/pixel normal and compressed file formats. Sierra and ATT DAC support too. Save is T.
    VPIC has 3 modes of operation from the DOS command line: Menu: vpic [[path\]filespec] ]options], Single File:
        vpic [path\]filename[.ext] [options], and Slideshow: vpic /@[path\]slidefile. The entries inside [ ] are optional, and
            path specifies a drive/directory for the Menu, Single File, or Slideshow.
            filename[.ext] specifies a Single File to show (GIF ext assumed). filespec = a DOS filespec (ie, c*.pcx) for the Menu.
            slidesile is an ASCII command file for the Slideshow. The pictures are shown in the order listed, and you can spec a
                delay, resolution, and animation for each picture. Spacebar pauses the Slideshow, Esc ends it.
    Options: The following options apply to the Menu and Single File modes except where noted, & need a space between the options.
        /a specifies auto resolution select.        /b specifies beep after decoding each file.
        /d saves files to the directory you started VPIC from; default is the viewing directory.
        /e specifies 16 color (EGA) mode.           /? shows VPIC help.
        /h lists hidden files in menu; great files you don't want to come up in menu normally such as x rated.
        /l specifies to not change the video mode; great for multi image screens called from an application with /r.
        /mN specifies locking mode N for menu or single file; mode as defined by CONFIG program.
        /r specifies return to calling application after showing picture file without changing the screen.
        /w specifies to wait for a keypress between images (in a multi-image GIF file only).
        /xN & /yN specify a left & top margin (in pixels) for the picture.  /v tells VPIC to ignore VESA info.
        /z inhibits printing the picture filename when it is displayed.
    Fast, easy menu system with mouse support and the following features:
        Handles up to 500 files using mouse or keyboard.
        Cursor moved with arrow keys, PgUp/PgDn keys, or starting letter/number of filenames.
        Files are Marked/Unmarked for viewing with the Spacebar or right mouse button.
        F1 displays built in help.       F2 does a slideshow of marked files in the order they were marked.
        Enter shows marked files individually in the order they were marked, or file at cursor (if none marked).
        F3 shows size and colors of picture at cursor. F4 selects between 256 and 16 color modes.
        F5/F6 decrease/increase default resolution.
        F7 selects Normal/Lock/Auto resolution. Auto picks the best resolution. Lock always uses default mode.
        F8 waits for a keypress between images in multi-image GIF's.
        F9 prompts for new path and filespec.  F10 shows current directory.
        Alt_D prompts for new slide delay in seconds.    Alt_X deletes file at cursor (with users permission; ESC or N aborts).
        Alt R renames a file.       Alt_T marks (tags) and Alt_U unmarks all files in the menu.
        Picture decoding aborted with Escape, and menu automatically updated after saving, renaming, or deleting a file.
    Commands while viewing a picture: (mouse buttons: left=Enter, right=ESC while decoding)
        A Animates the picture by rotating the palette; Up/Dn & PgUp/PgDn increase/decrease rate. Spacebar pauses, Enter holds.
        B converts screen image to gray shades. E expands a compressed Targa file to disk.
        F prompts for another file, and the x,y offset; allows you to make composite pictures. Works best with /m, /x, and /y.
        F1-F10 are adjustments for red, green, blue, brightness, and contrast for VGA viewing. Alt F10 restores original.
        Up/Down arrows and PgUp/PgDn scroll picture vertically if bigger than screen (with enough display memory). VPIC does not
            scroll sideways; see VPIC.DOC section on `How VPIC Works'.
        Alt_F momentarily displays filename while viewing./ or ? displays built in help.
        Alt_X deletes the current file (with users permission; ESC or N aborts).V inverts video.
        C, D, G, I, M, P, R, T, U, W, Z, <, > are file conversion/manipulation commands; see VPIC.DOC.

    Configuring VPIC: You can configure VPIC from a menu by simply entering CONFIG from DOS with CONFIG, VPIC, CVPIC and all the
    configuration files (.cfg extension) in the current directory. Then select the desired config file using the arrow keys and
    press Enter; ESC aborts CONFIG. VPIC can still be configred manually by entering cvpic configfile from DOS. The WHICHVGA
    program tries to identify your VGA chip and the amount of display memory you have installed; see CONFIG.DOC.

    History: The previous program was VGIF, which could display only GIF files. It became VPIC when it acquired the ability to
    display other graphics file formats. The GIF file format is copyrighted by CompuServe Inc., Columbus, Ohio.

    VPIC is continually being improved, and new features are added all the time. Check it out. You can register your current copy
    of VPIC for only $15, or register and get the latest version for $20 ($25 foreign). For updates from me, please include $5
    ($10 foreign) to cover shipping and handling. As a bonus, I will fill the rest of the disk with good GIF pictures. Please
    specify disk type; 1.2M 5.25" or 1.44M 3.5" (don't have low density), and EGA, VGA, or SuperVGA (640x480x256, etc) pictures.
    For foreign orders, please send an International or US Postal Money Order, check drawn on a US Bank, Travelers Check, or cash,
    since the banks charge up to $60 total collection fees for foreign checks.

    Bob Montgomery; 543 Via Fontana #203; Altamonte Springs, FL 32714-3172
```
{% endraw %}

## WAIT.DOC

{% raw %}
```
WAIT.COM  by Bob Montgomery    1-19-89

WAIT is a program to delay for the specified number of seconds. Format is:
    wait seconds
where seconds is in the range 1 to 65535 (about 18 hours). Defaults to 1 sec.

If a key is pressed before wait times out, wait returns to DOS.

If Control C is pressed, wait calls the DOS ^C routine. From a batch file this
gives the 'Terminate batch job (y/n)' message, and allows you to terminate a
batch program.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2858

     Volume in drive A has no label
     Directory of A:\

    8514A    CFG       386   6-23-92   5:29p
    AHEADA   CFG       437   8-27-91   8:27p
    AHEADB   CFG       516   8-27-91   8:23p
    ATINEW   CFG       596   8-27-91   8:23p
    ATIWONDR CFG       529   8-27-91   8:23p
    ATIXL    CFG       663   3-14-92   8:21a
    CHIPTECH CFG       613   8-27-91   8:23p
    QVISION  CFG       485   8-12-92  12:06p
    CONFIG   EXE     20379   2-17-92   8:50p
    CVPIC    EXE     22751   9-03-92   3:53p
    DEFINCON CFG       627   8-27-91   8:24p
    DIAMON24 CFG       749   6-07-92   8:19a
    EGA      CFG       234   8-27-91   8:24p
    EVERX673 CFG       600   8-27-91   8:24p
    EVERX678 CFG       553   8-27-91   8:24p
    GENO5400 CFG       534   8-27-91   8:24p
    GENO6400 CFG       505   8-27-91   8:24p
    GENO7900 CFG       829   6-07-92   8:19a
    HEADLAND CFG       701   8-27-91   8:24p
    HIRES    CFG       506   8-27-91   8:25p
    MAXXON   CFG       469   8-27-91   8:25p
    MK82452  CFG       384   8-27-91   8:25p
    NCR      CFG       491   4-08-92  10:23a
    OAK      CFG       483   7-29-92   2:58p
    ORCF1280 CFG       710   5-21-92   7:00p
    ORCPRO2  CFG       529   8-27-91   8:25p
    ORDRFORM          2912   6-23-92   5:55p
    PARADISE CFG       431   8-27-91   8:25p
    README   1ST      2542   6-23-92   5:55p
    REALTEK  CFG       558   5-28-92  11:14a
    S3       CFG       710   5-21-92   7:00p
    STB4000  CFG       529   8-27-91   8:26p
    TRI8800B CFG       406   8-27-91   8:26p
    TRI8800C CFG       469   8-27-91   8:26p
    TRID8900 CFG       599   8-27-91   8:26p
    TS3000   CFG       506   8-27-91   8:26p
    TS4000   CFG       565   8-27-91   8:26p
    TS4000HI CFG       725   2-27-92   9:28a
    VGA      CFG       300   2-17-92   7:07p
    VIDEO7   CFG       643   8-27-91   8:27p
    VPIC     DOC     72947   9-03-92   9:40p
    VPIC     EXE     99875   9-16-92   3:03p
    WAIT     DOC       458   1-20-89  10:39a
    WAIT     COM        98   1-20-89  10:41a
    WD90C    CFG       490   2-04-92  11:13p
    WHICHVGA COM      2544   8-11-92  10:42a
    ATIULTRA CFG       602   6-29-92  12:33p
    VPIC     TXT      7560   8-27-92   1:51a
    CONFIG   DOC     10678   9-03-92   9:33p
    GO       BAT        31   3-19-92  11:44a
    GO       TXT      1309   9-21-92   1:14p
           51 file(s)     264746 bytes
                           31744 bytes free
