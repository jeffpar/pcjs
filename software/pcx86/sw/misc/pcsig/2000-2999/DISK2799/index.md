---
layout: page
title: "PC-SIG Diskette Library (Disk #2799)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2799/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2799"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## FILE2799.TXT

{% raw %}
```
Disk No: 2799
Disk Title: Fastgraph/Light #3 (2797 & 2798 also)
PC-SIG Version: S1

Program Title: Fastgraph/Light
Author Version: 1.04
Author Registration: $49.00
Special Requirements: 640K RAM, and a Compiler.

Fastgraph/Light 1.04 is a powerful programmer's graphics library.  The
zipped format is appropriate for BBS distribution.  Please note that
your customers only need a set of disks in one specific format, that is,
it is not necessary to send somebody both the zipped and unzipped
formats.  For the unzipped formats, the Fastgraph/Light installation
program asks for the disks by the names printed on the labels.  For this
reason, please include the exact disk names on any labels you affix to
the disks yo distribute.


PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## USER2.TXT

{% raw %}
```


Chapter 8

Video Page Management
110   Fastgraph User's Guide


Overview

     The amount of memory required to store one full screen of information is
called a video page.  This chapter will discuss video pages in detail, along
with the Fastgraph routines you can use to manage video pages.


Physical Pages and Virtual Pages

     Pages that use the memory that resides on the video adapter are called
physical pages or true pages.  The number of physical pages available depends
on the video mode and the amount of memory resident on the user's video
adapter.  All video modes have at least one physical page.

     In certain video modes, Fastgraph can allocate available random-access
memory (RAM) and treat this memory as a video page.  Pages that use standard
RAM in this sense are called virtual pages.  From a programmer's perspective,
virtual pages are essentially identical to physical pages.

     The following table shows the number of physical pages in each video
mode.  It also indicates whether or not specific video modes support virtual
pages.  A discussion on how to calculate the listed video page sizes (that
is, their memory requirements) was presented in chapter 2.


        Mode                            Page Size Physical Virtual
       Number Description                in Bytes    Pages   Pages

         0    40 column color text          2,000      8      no
         1    40 column color text          2,000      8      no
         2    80 column color text          4,000      4      no
         3    80 column color text          4,000      4      no
         4    320 x 200 CGA graphics       16,000      1      yes
         5    320 x 200 CGA graphics       16,000      1      yes
         6    640 x 200 CGA graphics       16,000      1      yes
         7    80 column monochrome text     4,000      1      yes
         9    320 x 200 Tandy graphics     32,000      1      yes
         11   720 x 348 Hercules graphics  31,320      2      yes
         12   320 x 200 Hercules graphics  31,320      2      yes
         13   320 x 200 EGA graphics       32,000      8      no
         14   640 x 200 EGA graphics       64,000      4      no
         15   640 x 350 EGA mono graphics  56,000      2      no
         16   640 x 350 EGA graphics      112,000      2      no
         17   640 x 480 MCGA/VGA graphics  38,400      1      no
         18   640 x 480 VGA graphics      153,600      1      no
         19   320 x 200 MCGA graphics      64,000      1      yes
         20   320 x 200 VGA graphics       64,000      4      no
         21   320 x 400 VGA graphics      128,000      2      no


The preceding table assumes the video adapter for EGA and VGA modes contains
256K bytes of video memory.  For EGA adapters with less video memory, the
number of physical pages is reduced proportionately.  In other words, a 64K
EGA has two video pages available instead of eight pages in mode 13.
                                       Chapter 8:  Video Page Management   111

     Physical pages are numbered starting at zero.  For example, there are
four physical video pages available in mode 3, and they are numbered 0 to 3.
Virtual pages are numbered n to 15, where n is the number of physical pages
in that mode.  For example, there are two physical pages (numbered 0 and 1)
and fourteen virtual pages (numbered 2 to 15) in mode 11.  Note only modes 4
through 12 and mode 19 offer virtual pages, and the amount of available RAM
in the user's system may limit the number of virtual pages Fastgraph may use
(this is especially true in mode 19 because of the large page size).


Pages With Special Meanings

     There are three video pages that have special meanings to Fastgraph.
The visual page, as one might guess, is the video page currently visible on
the user's display.  The active page is the video page to which Fastgraph
writes text or graphics information.  The hidden page is meaningful only to a
few Fastgraph routines and will be discussed specifically within the context
of those routines.  The fg_setmode routine sets all three of these pages to
page 0, and it does not matter if these pages are physical or virtual.

     One of the most useful features of multiple video pages (either physical
or virtual) is the ability to build a text or graphics image off screen (that
is, on some video page besides the visual page).  Then, once the image is
ready, we can either transfer it to the visual page, or make the page on
which the image resides the visual page.  This feature is especially useful
in animation, for it displays an image instantaneously instead of visibly
updating the screen while producing the image.


Some Simple Examples

     In this section, we will present six variations of a simple program that
uses four video pages.  The program fills each video page with a rectangle
and then displays text containing the video page number in the center of each
page.  The first two examples run in a specific text or graphics video mode
and only use physical pages.  The next two examples also run in a specific
text or graphics video mode, but they also use virtual pages.  The final two
examples are more general and run in several video modes.  You could of
course write a program that essentially does the same thing as the examples
in this section without using multiple video pages.  However, to use
Fastgraph's image display and animation routines effectively, you must first
understand the concept of video pages.

     Before proceeding, we must introduce the Fastgraph routines fg_setpage
and fg_setvpage.  The fg_setpage routine defines the active video page, which
causes Fastgraph to put subsequent text and graphics output on that page.
The fg_setvpage routine defines the visual video page displayed on the
screen.  Both routines take a single integer argument between 0 and 15 that
specifies the video page number.  It does not matter if the referenced video
page is a physical page or a virtual page.  As mentioned earlier, fg_setmode
makes page 0 the active and visual video page.

     Example 8-1 uses four video pages (numbered 0 to 3) in the 40-column
color text mode (mode 1).  The program first calls fg_testmode to check the
availability of the requested video mode when used with four video pages.  If
it is available, the program calls fg_setmode to establish that video mode.
The first for loop fills each of the four pages with different color
112   Fastgraph User's Guide

rectangles and then displays black text containing the video page number in
the center of each page.  It does this by calling fg_setpage to define the
active video page, fg_setcolor and fg_rect to draw the colored rectangles,
and finally fg_setattr, fg_locate, and fg_text to display the text.  The
program must call fg_locate inside the loop because each video page has its
own text cursor position.  The second for loop successively makes each video
page the visual page; the page remains displayed until you press a key.
After displaying all four video pages, the program restores the original
video mode and screen attributes before returning to DOS.

                                 Example 8-1.

               #define PAGES 4

               main()
               {
                  int color;
                  int old_mode;
                  int page;
                  char string[8];

                  if (fg_testmode(1,PAGES) == 0) {
                     printf("This program requires color.\n");
                     exit();
                     }

                  old_mode = fg_getmode();
                  fg_setmode(1);

                  for (page = 0; page < PAGES; page++) {
                     fg_setpage(page);
                     color = page + 1;
                     fg_setcolor(color);
                     fg_rect(0,fg_getmaxx(),0,fg_getmaxy());
                     fg_setattr(0,color,0);
                     fg_locate(12,17);
                     sprintf(string,"page %d",page);
                     fg_text(string,6);
                     }

                  for (page = 0; page < PAGES; page++) {
                     fg_setvpage(page);
                     fg_waitkey();
                     }

                  fg_setmode(old_mode);
                  fg_reset();
               }


     Example 8-2 is similar to example 8-1, but it uses the 320 by 200 EGA
graphics mode (mode 13) instead of a text mode.  Note the only real
difference between this program and the text mode version is the use of
fg_setcolor instead of fg_setattr to make the text appear in black.

                                       Chapter 8:  Video Page Management   113
                                 Example 8-2.

               #define PAGES 4

               main()
               {
                  int color;
                  int old_mode;
                  int page;
                  char string[8];

                  if (fg_testmode(13,PAGES) == 0) {
                     printf("This program requires a ");
                     printf("320 x 200 EGA graphics mode.\n");
                     exit();
                     }

                  old_mode = fg_getmode();
                  fg_setmode(13);

                  for (page = 0; page < PAGES; page++) {
                     fg_setpage(page);
                     color = page + 1;
                     fg_setcolor(color);
                     fg_rect(0,fg_getmaxx(),0,fg_getmaxy());
                     fg_setcolor(0);
                     fg_locate(12,17);
                     sprintf(string,"page %d",page);
                     fg_text(string,6);
                     }

                  for (page = 0; page < PAGES; page++) {
                     fg_setvpage(page);
                     fg_waitkey();
                     }

                  fg_setmode(old_mode);
                  fg_reset();
               }

     Virtual video pages are created with Fastgraph's fg_allocate routine.
The fg_allocate routine reserves random-access memory (RAM) which Fastgraph
then treats as a video page.  The amount of memory required depends on the
current video mode.  The fg_allocate routine takes a single integer argument
that specifies the page number by which the virtual page will be referenced.
This value must be between 0 and 15.

     If you attempt to create a virtual page with a page number already
assigned to a physical page, fg_allocate does nothing.  For example, in the
Hercules graphics modes (modes 11 and 12) there are two physical pages
numbered 0 and 1.  Virtual pages in the Hercules graphics modes must thus
have page numbers between 2 and 15.  If you tell fg_allocate to create a
Hercules virtual page numbered 0 or 1, it does nothing because the requested
video page already exists as a physical page.  Similarly, if you use the
fg_allocate routine in a video mode that does not support virtual video
pages, it simply returns without doing anything.
114   Fastgraph User's Guide

     A possible problem with fg_allocate can occur when there is not enough
memory available for creating a virtual page in the current video mode.  The
fg_allocate routine returns as its function value a status code indicating
whether or not it was successful.  The possible values of the status code
are:


   value   meaning

     0     virtual page created
     7     virtual page created, but memory control blocks were destroyed
     8     insufficient memory to create the virtual page


If you use the fg_testmode or fg_bestmode routines to check if the required
number of video pages are available when using the requested video mode, you
should not need to monitor the status code returned by the fg_allocate
routine.

     The fg_freepage routine releases the memory for a virtual page created
with the fg_allocate routine.  It requires a single integer argument that
specifies the virtual page number to release.  This value must be between 0
and 15.  If you try to release a physical video page, or release a virtual
page that was never created, fg_freepage does nothing.  It is a good idea to
use fg_freepage to release all virtual video pages before a program returns
control to DOS, or just before a program selects a new video mode.

     Example 8-3 is also similar to example 8-1, but it uses the monochrome
text mode (mode 7).  Because the monochrome text mode only has one physical
video page, we must use virtual video pages for page numbers 1, 2, and 3.
Note how the fg_allocate and fg_freepage routines are used to create and
release the virtual video pages in this example.

                                 Example 8-3.

             #define PAGES 4

             main()
             {
                int old_mode;
                int page;
                char string[8];

                if (fg_testmode(7,PAGES) == 0) {
                   printf("This program requires monochrome.\n");
                   exit();
                   }

                old_mode = fg_getmode();
                fg_setmode(7);
                fg_cursor(0);

                for (page = 0; page < PAGES; page++) {
                   fg_allocate(page);
                   fg_setpage(page);
                   fg_setcolor(7);

                                       Chapter 8:  Video Page Management   115

                   fg_rect(0,fg_getmaxx(),0,fg_getmaxy());
                   fg_setattr(0,7,0);
                   fg_locate(12,37);
                   sprintf(string,"page %d",page);
                   fg_text(string,6);
                   }

                for (page = 0; page < PAGES; page++) {
                   fg_setvpage(page);
                   fg_waitkey();
                   fg_freepage(page);
                   }

                fg_setmode(old_mode);
                fg_reset();
             }

     Example 8-4 is similar to example 8-3, but it uses the standard Hercules
graphics mode (mode 11) instead of the monochrome text mode.  Because the
Hercules graphics modes have two physical video pages, we must use virtual
video pages for page numbers 2 and 3.  Note the only real difference between
this program and the text mode version is the use of fg_setcolor instead of
fg_setattr to make the text appear in black.

                                 Example 8-4.

               #define PAGES 4

               main()
               {
                  int old_mode;
                  int page;
                  char string[8];

                  if (fg_testmode(11,PAGES) == 0) {
                     printf("This program requires Hercules ");
                     printf("monochrome graphics.\n");
                     exit();
                     }

                  old_mode = fg_getmode();
                  fg_setmode(11);

                  for (page = 0; page < PAGES; page++) {
                     fg_allocate(page);
                     fg_setpage(page);
                     fg_setcolor(7);
                     fg_rect(0,fg_getmaxx(),0,fg_getmaxy());
                     fg_setcolor(0);
                     fg_locate(12,37);
                     sprintf(string,"page %d",page);
                     fg_text(string,6);
                     }

                  for (page = 0; page < PAGES; page++) {
                     fg_setvpage(page);

116   Fastgraph User's Guide
                     fg_waitkey();
                     fg_freepage(page);
                     }

                  fg_setmode(old_mode);
                  fg_reset();
               }

     Example 8-5 is a generalized version of examples 8-1 and 8-3 that runs
in any 80-column text video mode.  To simplify the program, each video page
is filled with rectangles of the same color.  Note that fg_allocate and
fg_freepage are used to manage the virtual video pages in case fg_bestmode
selects the monochrome text mode (mode 7).  If fg_bestmode selects one of the
80-column color text modes (which have four physical video pages),
fg_allocate and fg_freepage will simply return without doing anything.

                                 Example 8-5.

                #define PAGES 4

                main()
                {
                   int old_mode, new_mode;
                   int page;
                   char string[8];

                   new_mode = fg_bestmode(80,25,PAGES);
                   if (new_mode < 0) {
                      printf("This program requires ");
                      printf("an 80-column display.\n");
                      exit();
                      }

                   old_mode = fg_getmode();
                   fg_setmode(new_mode);
                   fg_cursor(0);

                   for (page = 0; page < PAGES; page++) {
                      fg_allocate(page);
                      fg_setpage(page);
                      fg_setcolor(7);
                      fg_rect(0,fg_getmaxx(),0,fg_getmaxy());
                      fg_setattr(0,7,0);
                      fg_locate(12,37);
                      sprintf(string,"page %d",page);
                      fg_text(string,6);
                      }

                   for (page = 0; page < PAGES; page++) {
                      fg_setvpage(page);
                      fg_waitkey();
                      fg_freepage(page);
                      }

                   fg_setmode(old_mode);
                   fg_reset();
                }

                                       Chapter 8:  Video Page Management   117


     Example 8-6 is a generalized version of examples 8-2 and 8-4 that runs
in any 320 by 200 graphics video mode.  To simplify the program, each video
page is filled with rectangles of the same color.  As in example 8-5,
fg_allocate and fg_freepage are used to manage the virtual video pages in
case fg_bestmode selects a video mode with fewer than four physical video
pages.  Note the only real difference between this program and the text mode
version is the use of fg_setcolor instead of fg_setattr to make the text
appear in black.

                                 Example 8-6.

                #define PAGES 4

                main()
                {
                   int old_mode, new_mode;
                   int page;
                   char string[8];

                   new_mode = fg_bestmode(320,200,PAGES);
                   if (new_mode < 0) {
                      printf("This program requires a ");
                      printf("320 x 200 graphics mode.\n");
                      exit();
                      }

                   old_mode = fg_getmode();
                   fg_setmode(new_mode);

                   for (page = 0; page < PAGES; page++) {
                      fg_allocate(page);
                      fg_setpage(page);
                      fg_setcolor(15);
                      fg_rect(0,fg_getmaxx(),0,fg_getmaxy());
                      fg_setcolor(0);
                      fg_locate(12,17);
                      sprintf(string,"page %d",page);
                      fg_text(string,6);
                      }

                   for (page = 0; page < PAGES; page++) {
                      fg_setvpage(page);
                      fg_waitkey();
                      fg_freepage(page);
                      }

                   fg_setmode(old_mode);
                   fg_reset();
                }

118   Fastgraph User's Guide


Text Cursors

     As mentioned in the previous chapter, Fastgraph draws hardware
characters at the position defined by the text cursor.  Like the graphics
cursor, the text cursor is not a cursor in the true sense, but is simply a
pair of character space (row,column) coordinates with a special meaning.  The
first 8 video pages (that is, pages 0 through 7) each have their own text
cursor.  The last 8 video pages (pages 8 through 15) respectively share the
same text cursor positions as the first 8 pages.  This means the fg_locate
routine will update one of 8 different text cursors depending on the active
video page.  Similarly, the fg_where routine returns the text cursor position
for the active page.  The fg_setmode routine sets all 8 text cursor positions
to the character space coordinates (0,0).

     Example 8-7 demonstrates the use of different text cursors in an 80-
column color text mode (mode 3).  The program first displays the text "Page "
on video page 0 (the visible page) and waits for a keystroke.  It then makes
page 1 the active video page, changes the text cursor location for that page,
and displays the text "Page 1" on video page 1.  Next, it appends the
character "0" to the text originally displayed on page 0.  Note it is not
necessary to restore the text cursor position for page 0 because it is
unaffected by changing the text cursor for page 1.  After waiting for another
keystroke, the program makes video page 1 the visual page and then waits for
yet another keystroke before returning to DOS.

                                 Example 8-7.

                         main()
                         {
                            int old_mode;

                            old_mode = fg_getmode();
                            fg_setmode(3);
                            fg_cursor(0);
                            fg_setattr(10,0,0);

                            fg_locate(1,0);
                            fg_text("Page ",5);
                            fg_waitkey();

                            fg_setpage(1);
                            fg_locate(23,0);
                            fg_text("Page 1",6);

                            fg_setpage(0);
                            fg_text("0",1);
                            fg_waitkey();

                            fg_setvpage(1);
                            fg_waitkey();

                            fg_setmode(old_mode);
                            fg_reset();
                         }

                                       Chapter 8:  Video Page Management   119


Obtaining Video Page Information

     Fastgraph includes two routines, fg_getpage and fg_getvpage, that
respectively return the current active or visual video page number.  Each
routine returns the video page number as its function value, and neither
routine requires any arguments.

     The fg_getaddr routine is sometimes useful when using virtual pages.  It
returns as its function value the segment address for the start of the active
video page.  It does not require any arguments.  Although fg_getaddr is more
useful when using virtual video pages, it works equally well when using
physical video pages.

     Example 8-8 illustrates the use of the fg_getpage, fg_getvpage, and
fg_getaddr routines in the standard CGA color graphics mode (mode 4).  This
video mode offers only one physical page, so the program uses fg_allocate to
create a virtual video page (page 1).  After creating the virtual page, the
program makes it the active video page; page 0 remains the visual video page.
The fg_getpage routine then returns the active page number (1), followed by a
call to fg_getvpage to return the visual page number (0).  Next, the program
uses fg_getaddr to return the segment address for video pages 0 and 1.
Finally, it restores the original video mode and screen attributes, displays
the returned values, and returns to DOS.

                                 Example 8-8.

                 main()
                 {
                    int old_mode;
                    int active, visual;
                    int page0, page1;

                    old_mode = fg_getmode();
                    fg_setmode(4);
                    fg_allocate(1);
                    fg_setpage(1);

                    active = fg_getpage();
                    visual = fg_getvpage();

                    fg_setpage(0);
                    page0 = fg_getaddr();
                    fg_setpage(1);
                    page1 = fg_getaddr();

                    fg_freepage(1);
                    fg_setmode(old_mode);
                    fg_reset();

                    printf("Active page is %d.\n",active);
                    printf("Visual page is %d.\n",visual);
                    printf("Page 0 address is %4X\n",page0);
                    printf("Page 1 address is %4X\n",page1);
                 }

120   Fastgraph User's Guide


Considerations for Virtual Pages

     When you are using virtual pages, you should avoid using the fg_setvpage
routine in sections of the program that require fast screen updates or
animation sequences.  This is because the PC and PS/2 video BIOS are only
capable of displaying physical pages.  To compensate for this restriction,
Fastgraph exchanges the contents of a physical page with the requested
virtual page.  In other words, if page 1 is a virtual page and you make it
the visual page, Fastgraph will exchange the contents of page 1 with whatever
page was previously the visual page.  This does not mean Fastgraph's page
numbers change because Fastgraph also maintains an internal table containing
video page addresses and also exchanges the two corresponding table entries.
As before, you would make page 1 the active video page if you wanted to write
something to the visual page.

     About the only other potential problem when using virtual pages is what
happens when you attempt to write to a non-existent video page (for example,
if you write to virtual video page 1 before creating it with fg_allocate).
In this case, Fastgraph simply redirects the video output to the visual page.


Summary of Video Page Management Routines

     This section summarizes the functional descriptions of the Fastgraph
routines presented in this chapter.  More detailed information about these
routines, including their arguments and return values, may be found in the
Fastgraph Reference Manual.

     FG_ALLOCATE creates a virtual video page.  The amount of memory required
depends on the current video mode.  This routine has no effect if it
references a physical video page.

     FG_FREEPAGE releases a virtual video page created with the fg_allocate
routine.  This routine has no effect if it references a physical video page,
or a virtual page that was never created.

     FG_GETADDR returns the segment address of the active video page.

     FG_GETPAGE returns the active video page number.

     FG_GETVPAGE returns the visual video page number.

     FG_SETPAGE establishes the active video page.  It may be a physical or
virtual page.

     FG_SETVPAGE establishes the visual video page.  It may be a physical or
virtual page.


Chapter 9

Images and Image Management
122   Fastgraph User's Guide


Overview

     Within the context of Fastgraph, an image is a rectangular area of video
memory containing some type of picture.  An image might be something as
simple as a pointing hand icon, or as detailed as the dashboard of a sports
car.  Fastgraph includes a number of routines to display, retrieve, and
manipulate images, as well as transfer them between different areas of video
memory.  This chapter will discuss these routines in detail.  The information
presented here, combined with the video page management techniques described
in the previous chapter, will provide the tools we need for sophisticated
animation techniques.


Mode-Independent Bit-Mapped Images

     This section will discuss the image display routines that use the same
bit-mapped image format for all graphics video modes.  Another class of
routines, described in the next section, use different formats for different
video modes.  While these mode-independent image display routines are more
general, they achieve this generality at the sake of some execution speed.
This may especially be a concern if the image is large, or if speed is
critical in an application (as in arcade-style graphics).  For many programs,
however, the mode-independent routines provide all the image display
capability that is needed.

     Let's begin with an example of a very simple image.  Suppose we need to
display a small triangle whose perimeter is a different color than its
interior.  To use this image with Fastgraph, we must inscribe it in a
rectangular area.  Hence, the pixel representation of our triangle might
appear as shown below.

                              . . . . * . . . .
                              . . . * x * . . .
                              . . * x x x * . .
                              . * x x x x x * .
                              * * * * * * * * *

     As shown in this diagram, our triangle is 9 pixels wide at its base and
5 pixels high.  The pixels indicated by an asterisk (*) are the triangle's
perimeter, while those indicated by an x represent its interior points.  We
need to distinguish between these pixels because they will be different
colors.  The pixels shown as periods (.) are not part of the triangle itself.
They are required to make the image rectangular, so from Fastgraph's
perspective they are indeed part of the image.

     The Fastgraph routine fg_drawmap is a suitable routine for drawing our
triangle.  To use fg_drawmap, we must create a separate bit map for each
color in the image (excluding the points used to fill the rectangular region,
which is considered transparent).  In this example, we will thus need two bit
maps -- one for the perimeter points, and one for the interior points.  Let's
break the image into these two bit maps.
                                 Chapter 9:  Images and Image Management   123

                  . . . . * . . . .        . . . . . . . . .
                  . . . * . * . . .        . . . . x . . . .
                  . . * . . . * . .        . . . x x x . . .
                  . * . . . . . * .        . . x x x x x . .
                  * * * * * * * * *        . . . . . . . . .

                  perimeter points          interior points

     The next step is to convert these two bit maps into their binary
representations.  Just as there are eight bits in a byte, we will create a
data structure (an array in this case) with each byte holding eight pixels.
Bits that are set (1) indicate the corresponding pixel will appear displayed
in the color associated with that bit map.  Bits that are reset (0) leave the
corresponding pixel unchanged.  The size of each bit map array must be at
least 10 bytes because each bit map contains five rows with nine pixels in
each row (that is, two bytes are required for each row of the image).  Hence,
when we convert these bit maps to their binary representations, and
subsequently to their hexadecimal equivalent, the results will appear as
shown below.  The bits displayed in boldface represent the actual image; the
other bits are filler bits needed to complete each row of the bit maps after
the ninth pixel.  All filler bits must be zero.


              0 0 0 0 1 0 0 0   0 0 0 0 0 0 0 0         08   00

              0 0 0 1 0 1 0 0   0 0 0 0 0 0 0 0         14   00

              0 0 1 0 0 0 1 0   0 0 0 0 0 0 0 0         22   00

              0 1 0 0 0 0 0 1   0 0 0 0 0 0 0 0         41   00

              1 1 1 1 1 1 1 1   1 0 0 0 0 0 0 0         FF   80

                              perimeter bit map


              0 0 0 0 0 0 0 0   0 0 0 0 0 0 0 0         00   00

              0 0 0 0 1 0 0 0   0 0 0 0 0 0 0 0         08   00

              0 0 0 1 1 1 0 0   0 0 0 0 0 0 0 0         1C   00

              0 0 1 1 1 1 1 0   0 0 0 0 0 0 0 0         3E   00

              0 0 0 0 0 0 0 0   0 0 0 0 0 0 0 0         00   00

                               interior bit map

     The next question is the order in which the bit maps are stored in the
corresponding data structures.  Since our data structure is an array, it is
only necessary to show the relationship of the subscripts to the bit map
structures above.  The next diagram shows the subscript order for the case of
a two-column by five-row bit map.
124   Fastgraph User's Guide


                                  [8]   [9]

                                  [6]   [7]

                                  [4]   [5]

                                  [2]   [3]

                                  [0]   [1]

     From this diagram, we see the first element of the array (that is, the
element with subscript [0]) represents the lower left corner of the image.
The subscript progression then continues right until reaching the end of the
first row.  It then resumes at the leftmost element of the second row and
continues to the right until the end of that row.  It continues in this
manner for all remaining rows.

     We are now ready to present an example program to display our triangle.
The program will use the Fastgraph routine fg_drawmap, which expects three
arguments.  The first argument is the bit map array (passed by reference),
the second is the width of the bit map in bytes, and the last is the height
of the bit map in pixel rows.  The fg_drawmap routine displays the image such
that its lower left corner is at the graphics cursor position on the active
video page.  The routine has no effect in text video modes.  Additionally,
fg_drawmap displays the image using the current color index, which means we
will need to call fg_drawmap once for each color in the image.

     Example 9-1 runs in any 320 by 200 color graphics mode (it could be made
to run in mode 12 too, but that would detract from the purpose of the
example).  After establishing the video mode, the program uses fg_rect to
fill the entire screen with a gray rectangle (white in CGA).  Next, the
program establishes (156,101) as the graphics cursor position; this causes
the triangle to be centered on the screen.  The two calls to fg_drawmap, one
for each of the colors in the image, actually display the triangle.  Note
especially how fg_setcolor is used before each call to fg_drawmap to define
the current color index.  The end result is a triangle with a blue perimeter
(cyan in CGA) and green interior (magenta in CGA).

                                 Example 9-1.

             char perimeter[] = {
                0xFF,0x80,0x41,0x00,0x22,0x00,0x14,0x00,0x08,0x00
                };
             char interior[] = {
                0x00,0x00,0x3E,0x00,0x1C,0x00,0x08,0x00,0x00,0x00
                };

             main()
             {
                int old_mode, new_mode;

                new_mode = fg_bestmode(320,200,1);
                if (new_mode < 0 || new_mode == 12) {
                   printf("This program requires a 320 ");
                   printf("x 200 color graphics mode.\n");

                                 Chapter 9:  Images and Image Management   125

                   exit();
                   }

                old_mode = fg_getmode();
                fg_setmode(new_mode);

                fg_setcolor(7);
                fg_rect(0,319,0,199);

                fg_move(156,101);
                fg_setcolor(1);
                fg_drawmap(perimeter,2,5);
                fg_setcolor(2);
                fg_drawmap(interior,2,5);
                fg_waitkey();

                fg_setmode(old_mode);
                fg_reset();
             }


     The different color bit maps used by fg_drawmap do not all have to be
the same size.  In our triangle example, the perimeter is 9 pixels wide by 5
pixels high, but the interior is only 5 pixels wide by 3 pixels high.  Hence,
the bit map for the interior pixels only requires one byte for each of its
the three rows, so we can store it in a three-byte array.  Its structure
would be:

                                  [2]   08

                                  [1]   1C

                                  [0]   3E

     Example 9-2 is similar to example 9-1, but it uses a three-byte array
for the interior bit map.  Note the second call to fg_move in this example.
It is needed because the bottom row of the smaller interior bit map
corresponds to the second row of the larger perimeter bit map.  In other
words, the interior bit map must be displayed one row above the perimeter bit
map.

                                 Example 9-2.

             char perimeter[] = {
                0xFF,0x80,0x41,0x00,0x22,0x00,0x14,0x00,0x08,0x00
                };
             char interior[] = {
                0x3E,0x1C,0x08
                };

             main()
             {
                int old_mode, new_mode;

                new_mode = fg_bestmode(320,200,1);

126   Fastgraph User's Guide

                if (new_mode < 0 || new_mode == 12) {
                   printf("This program requires a 320 ");
                   printf("x 200 color graphics mode.\n");
                   exit();
                   }

                old_mode = fg_getmode();
                fg_setmode(new_mode);

                fg_setcolor(7);
                fg_rect(0,319,0,199);

                fg_move(156,101);
                fg_setcolor(1);
                fg_drawmap(perimeter,2,5);
                fg_move(156,100);
                fg_setcolor(2);
                fg_drawmap(interior,1,3);
                fg_waitkey();

                fg_setmode(old_mode);
                fg_reset();
             }


     In example 9-2, the time required to execute the second call to fg_move
may not be worth the saving of 7 bytes.  When array space is critical, or
when the images are larger, the use of smaller bit maps for certain colors
may be more valuable.

     Yet another possibility for example 9-2 would be to shift the elements
of the interior bit map two pixels to the left.  In this way, the bit map
would be aligned against the left side of the array, just as the perimeter
bit map is.  The three values comprising the interior bit map would then
become F8, 70, and 20.  We would also need to change the x coordinate in the
second call to fg_move from 156 to 158.


Mode-Specific Bit-Mapped Images

     This section will discuss the image display routines that use bit-mapped
image formats that are specific to each text and graphics video mode.  The
different image formats closely resemble the structure of video memory in
each mode, so these routines are much faster than displaying mode-independent
bit maps with fg_drawmap.  If you use the mode-specific bit maps in a program
that supports several video modes, there will be some additional programming
that is not needed when using mode-independent bit maps.  In most cases,
however, your efforts will be rewarded with considerably faster graphics.

     We'll demonstrate the use of mode-specific bit maps in graphics modes
with the familiar two-color triangle whose pixel representation appears
below.
                                 Chapter 9:  Images and Image Management   127

                              . . . . * . . . .
                              . . . * x * . . .
                              . . * x x x * . .
                              . * x x x x x * .
                              * * * * * * * * *

     As before, our triangle is 9 pixels wide at its base and 5 pixels high.
The pixels indicated by an asterisk (*) are the triangle's perimeter, while
those indicated by an x represent its interior points.  We need to
distinguish between these pixels because they will be different colors.  The
pixels shown as periods (.) are not part of the triangle itself.  They are
required to make the image rectangular, so from Fastgraph's perspective they
are indeed part of the image.


Regular Images

     The Fastgraph routine fg_drwimage displays regular mode-specific bit-
mapped images (by regular, we mean an image that is neither clipped nor
rotated).  Its arguments are identical to the fg_drawmap routine, and the bit
map array's subscript order is also the same as for fg_drawmap.  The major
difference is the bit map structure -- only in the EGA and VGA video modes
(modes 13 through 18) do we create separate bit maps for each color.  In all
other video modes, we combine the information for all colors into a single
bit map.  This is consistent with the structure and accessibility of video
memory for the various modes.  As in all of the other image display routines,
fg_drwimage displays the image on the active video page with its lower left
corner at the graphics cursor position (or the text cursor position for text
modes).  We'll now examine the use of fg_drwimage in several video modes.

CGA four-color graphics modes

     In the four-color CGA graphics modes (modes 4 and 5), each pixel can
assume a value between 0 and 3.  This means it takes two bits to represent a
pixel, or put another way, each byte of video memory holds four pixels.  Our
triangle image is nine pixels wide, so three bytes are needed for each row of
the image.  Because the image is five pixels high, we need a bit map array of
at least 15 bytes (five rows times three bytes per row) to hold the image.

     The image's binary representation and its hexadecimal equivalent for the
four-color CGA graphics modes are shown below.  The binary values displayed
in boldface represent the actual image; the other bits are the filler bits
needed to complete each row of the bit map after the ninth pixel.  We have
coded the perimeter pixels to be color 1 (01 binary) and the interior pixels
to be color 2 (10 binary).  Any pixel whose value is zero (00 binary) is
transparent and will thus leave the contents of video memory at that position
unchanged.
128   Fastgraph User's Guide


         00 00 00 00   01 00 00 00   00 00 00 00         00   40   00

         00 00 00 01   10 01 00 00   00 00 00 00         01   90   00

         00 00 01 10   10 10 01 00   00 00 00 00         06   A4   00

         00 01 10 10   10 10 10 01   00 00 00 00         1A   A9   00

         01 01 01 01   01 01 01 01   01 00 00 00         55   55   40


     Example 9-3 uses this mode-specific bit map to display the triangle in
the standard CGA four-color graphics mode (mode 4).  After establishing the
video mode, the program uses fg_rect to fill the entire screen with a white
rectangle.  Next, the program establishes (156,101) as the graphics cursor
position; this causes the triangle to be centered on the screen.  The call to
fg_drwimage produces a triangle with a cyan perimeter (color 1) and a magenta
interior (color 2).

                                 Example 9-3.

              char triangle[] = {
                 0x55,0x55,0x40, 0x1A,0xA9,0x00, 0x06,0xA4,0x00,
                 0x01,0x90,0x00, 0x00,0x40,0x00
                 };

              main()
              {
                 int old_mode;

                 if (fg_testmode(4,1) == 0) {
                    printf("This program requires a 320 ");
                    printf("x 200 CGA graphics mode.\n");
                    exit();
                    }

                 old_mode = fg_getmode();
                 fg_setmode(4);

                 fg_setcolor(7);
                 fg_rect(0,319,0,199);

                 fg_move(156,101);
                 fg_drwimage(triangle,3,5);
                 fg_waitkey();

                 fg_setmode(old_mode);
                 fg_reset();
              }


CGA two-color graphics mode

     In the two-color CGA graphics mode (mode 6), each pixel can assume the
values 0 or 1.  This means it takes just one bit to represent a pixel, so
each byte of video memory holds eight pixels.  Our triangle image is nine
                                 Chapter 9:  Images and Image Management   129

pixels wide, so two bytes are needed for each row of the image.  Because the
image is five pixels high, we need a bit map array of at least 10 bytes (five
rows times two bytes per row) to hold the image.

     The image's binary representation and its hexadecimal equivalent for the
two-color CGA graphics mode is shown below.  The binary values displayed in
boldface represent the actual image; the other bits are the filler bits
needed to complete each row of the bit map after the ninth pixel.  We have
coded both the perimeter pixels and the interior pixels to be color 1.  Any
pixel whose value is zero is transparent and will thus leave the contents of
video memory at that position unchanged.

              0 0 0 0 1 0 0 0   0 0 0 0 0 0 0 0         08   00

              0 0 0 1 1 1 0 0   0 0 0 0 0 0 0 0         1C   00

              0 0 1 1 1 1 1 0   0 0 0 0 0 0 0 0         3E   00

              0 1 1 1 1 1 1 1   0 0 0 0 0 0 0 0         7F   00

              1 1 1 1 1 1 1 1   1 0 0 0 0 0 0 0         FF   80

     Example 9-4 uses this mode-specific bit map to display the triangle in
the CGA two-color graphics mode (mode 6).  After establishing the video mode,
the program establishes (316,101) as the graphics cursor position; this
causes the triangle to be centered on the screen.  The call to fg_drwimage
produces a solid triangle.

                                 Example 9-4.

                  char triangle[] = {
                     0xFF,0x80, 0x7F,0x00, 0x3E,0x00,
                     0x1C,0x00, 0x08,0x00
                     };

                  main()
                  {
                     int old_mode;

                     if (fg_testmode(6,1) == 0) {
                        printf("This program requires a ");
                        printf("CGA graphics mode.\n");
                        exit();
                        }

                     old_mode = fg_getmode();
                     fg_setmode(6);

                     fg_move(316,101);
                     fg_drwimage(triangle,2,5);
                     fg_waitkey();

                     fg_setmode(old_mode);
                     fg_reset();
                  }

130   Fastgraph User's Guide



Tandy/PCjr 16-color graphics mode

     In the Tandy/PCjr 16-color graphics mode (mode 9), each pixel can assume
a value between 0 and 15.  This means it takes four bits to represent a
pixel, so each byte of video memory holds two pixels.  Our triangle image is
nine pixels wide, so five bytes are needed for each row of the image.
Because the image is five pixels high, we need a bit map array of at least 25
bytes (five rows times five bytes per row) to hold the image.

     In video mode 9, it is fairly easy to develop the hexadecimal
representation of a bit map without first producing its binary equivalent.
This is because a pixel value and a hexadecimal digit each occupy four bits.
The triangle's hexadecimal representation for the 16-color Tandy/PCjr
graphics mode is shown below.  The pixels appearing in boldface represent the
actual image; the others are the filler values needed to complete each row of
the bit map after the ninth pixel.  We have chosen to display the perimeter
pixels in color 1 and the interior pixels in color 2.  Any pixel whose value
is zero is transparent and will thus leave the contents of video memory at
that position unchanged.

                            00   00   10   00   00

                            00   01   21   00   00

                            00   12   22   10   00

                            01   22   22   21   00

                            11   11   11   11   10

     Example 9-5 is similar to example 9-3, but it uses the Tandy/PCjr 16-
color graphics mode (mode 9) and its mode-specific bit map just constructed
to display the triangle.  The call to fg_drwimage produces a triangle with a
blue perimeter (color 1) and a green interior (color 2).

                                 Example 9-5.

                char triangle[] = {
                   0x11,0x11,0x11,0x11,0x10,
                   0x01,0x22,0x22,0x21,0x00,
                   0x00,0x12,0x22,0x10,0x00,
                   0x00,0x01,0x21,0x00,0x00,
                   0x00,0x00,0x10,0x00,0x00
                   };

                main()
                {
                   int old_mode;

                   if (fg_testmode(9,1) == 0) {
                      printf("This program requires a 320 ");
                      printf("x 200 Tandy graphics mode.\n");
                      exit();

                                 Chapter 9:  Images and Image Management   131


                      }

                   old_mode = fg_getmode();
                   fg_setmode(9);

                   fg_setcolor(7);
                   fg_rect(0,319,0,199);

                   fg_move(156,101);
                   fg_drwimage(triangle,5,5);
                   fg_waitkey();

                   fg_setmode(old_mode);
                   fg_reset();
                }


Hercules graphics modes

     The structure of the mode-specific bit maps for the Hercules graphics
modes (modes 11 and 12) is identical to two of the CGA graphics modes.  For
the standard Hercules graphics mode (mode 11), please refer to the discussion
of CGA two-color (mode 6) bit maps on page 128.  For the low-resolution
Hercules graphics mode (mode 12), please refer to the discussion of the CGA
four-color (mode 4) bit maps on page 127.

EGA and VGA graphics modes

     The structure of the mode-specific bit maps for the native EGA and VGA
graphics modes (modes 13 through 18) is identical to the mode-independent bit
map structure described in the previous section.  It thus makes no difference
if you use the fg_drwimage or fg_drawmap routines in these video modes.
Please refer to page 122 for a discussion of mode-independent bit maps.

MCGA and VGA 256-color graphics modes

     In the MCGA and VGA 256-color graphics modes (modes 19, 20, and 21),
each pixel can assume a value between 0 and 255 (FF hex).  This means it
takes eight bits to represent a pixel, or each byte of video memory holds one
pixel.  Our triangle image is nine pixels wide, so nine bytes are needed for
each row of the image.  Because the image is five pixels high, we need a bit
map array of at least 45 bytes (five rows times nine bytes per row) to hold
the image.  Note we will never need any filler bits in the 256-color video
modes.

     In the 256-color graphics video modes, it is quite simple to develop the
bit map for an image because each byte holds exactly one pixel.  The
triangle's hexadecimal representation for the 256-color graphics modes is
shown below.  As before, we have coded the perimeter pixels to be color 1 (01
hex) and the interior pixels to be color 2 (02 hex).  Any pixel whose value
is zero is transparent and will thus leave the contents of video memory at
that position unchanged.
132   Fastgraph User's Guide


                  00   00   00   00   01   00   00   00   00

                  00   00   00   01   02   01   00   00   00

                  00   00   01   02   02   02   01   00   00

                  00   01   02   02   02   02   02   01   00

                  01   01   01   01   01   01   01   01   01


     Example 9-6 is also similar to example 9-3, but it uses the MCGA 256-
color graphics mode (mode 19) and its mode-specific bit map just constructed
to display the triangle.  The call to fg_drwimage produces a triangle with a
blue perimeter (color 1) and a green interior (color 2).

                                 Example 9-6.

               char triangle[] = {
                  0x01,0x01,0x01,0x01,0x01,0x01,0x01,0x01,0x01,
                  0x00,0x01,0x02,0x02,0x02,0x02,0x02,0x01,0x00,
                  0x00,0x00,0x01,0x02,0x02,0x02,0x01,0x00,0x00,
                  0x00,0x00,0x00,0x01,0x02,0x01,0x00,0x00,0x00,
                  0x00,0x00,0x00,0x00,0x01,0x00,0x00,0x00,0x00
                  };

               main()
               {
                  int old_mode;

                  if (fg_testmode(19,1) == 0) {
                     printf("This program requires a 320 ");
                     printf("x 200 MCGA graphics mode.\n");
                     exit();
                     }

                  old_mode = fg_getmode();
                  fg_setmode(19);

                  fg_setcolor(7);
                  fg_rect(0,319,0,199);

                  fg_move(156,101);
                  fg_drwimage(triangle,9,5);
                  fg_waitkey();

                  fg_setmode(old_mode);
                  fg_reset();
               }



Text Modes

     You can also use the fg_drwimage routine to display images in text video
modes (modes 0, 1, 2, 3, and 7).  As one might expect, the image structure in
                                 Chapter 9:  Images and Image Management   133

the text modes is rather different from the graphics modes.  In chapter 5 we
saw that each character cell on the screen actually consists of a character
and an attribute.  The character value determines what character is
displayed, while the attribute value controls the character's appearance.
The structure of the attribute is:


                            bits  attribute

                            0-3   foreground color
                            4-6   background color
                             7    blinking


     The text mode image structure used with fg_drwimage also consists of a
series of characters and attributes.  For example, the following diagram
illustrates the structure of an image that is three characters wide and two
characters high.


                   char   attr   char   attr   char   attr

                   char   attr   char   attr   char   attr


     To illustrate the use of fg_drwimage in a text video mode, we'll display
the phrase "hello there" on two different lines in the center of the screen.
Furthermore, let's assume we would like the first character of each word to
appear in foreground color 1, the second in color 2, and so forth.  Our image
will consist of two lines each containing five characters, and each character
requires two bytes of storage (one for the character and another for its
attribute), so we'll need a 20-byte array for holding the image.  The array
really doesn't hold a bit map as in the graphics modes, so in the text modes
the first argument passed to fg_drwimage is instead called the image array.
In our example, the structure of the image array is:


           'h'    1    'e'    2    'l'    3    'l'    4    'o'    5

           't'    1    'h'    2    'e'    3    'r'    4    'e'    5


The subscript order that fg_drwimage uses for text modes is the same as for
the graphics modes.  For our five-row by two-column image, this means the
array subscripts would be numbered as follows:


              [10] [11] [12] [13] [14] [15] [16] [17] [18] [19]

               [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]  [9]


     Depending on the character and attribute values in the image array,
fg_drwimage can display new characters and attributes, new characters leaving
the existing attribute unchanged, new attributes leaving the existing
character unchanged, or leave both the existing character and attribute
134   Fastgraph User's Guide

unchanged in video memory.  To keep an existing character or attribute,
simply specify a value of 0 in the corresponding element of the image array.
This capability is analogous to the fact that zero-valued pixels in graphics
mode bit maps leave video memory unchanged.

     Example 9-7 demonstrates the use of the fg_drwimage routine in the 80-
column color text mode (mode 3).  After establishing the video mode and
making the cursor invisible, the program calls fg_drwimage to display the
"hello there" image just discussed (note we pass the dimensions of the image
array as the number of bytes, not the number of characters).  The program
waits for a keystroke and then calls fg_drwimage again, passing a different
image array (called "image") of the same size.  This array changes the first
letter of both words from lower case to upper case (leaving the attribute
unchanged), and it makes the remaining characters have the same attribute as
the first character.  This is done in part by using zero-valued characters
and attributes to leave video memory unchanged.  After waiting for another
keystroke, the program exits.
                                 Example 9-7.

                    char hello[] = {
                       't',1, 'h',2, 'e',3, 'r',4, 'e',5,
                       'h',1, 'e',2, 'l',3, 'l',4, 'o',5
                       };

                    char image[] = {
                       'T',0, 0,1, 0,1, 0,1, 0,1,
                       'H',0, 0,1, 0,1, 0,1, 0,1
                       };

                    main()
                    {
                       int old_mode;

                       old_mode = fg_getmode();
                       fg_setmode(3);
                       fg_cursor(0);

                       fg_locate(12,37);
                       fg_drwimage(hello,10,2);
                       fg_waitkey();

                       fg_drwimage(image,10,2);
                       fg_waitkey();

                       fg_setmode(old_mode);
                       fg_reset();
                    }



Clipped Images

     The fg_drwimage routine displays an image without regard to the current
clipping limits.  If you want the image to be displayed with respect to the
clipping limits (as established by the most recent call to fg_setclip), you
should use the fg_clpimage routine instead of fg_drwimage.  Fg_clpimage takes
the same three arguments as fg_drwimage, and likewise displays the image such
                                 Chapter 9:  Images and Image Management   135

that its lower left corner is at the graphics cursor position.  Unlike
fg_drwimage, the fg_clpimage routine has no effect when used in a text video
mode.  Refer to pages 135 and 137 for example programs that use fg_clpimage.

     Because of the additional overhead involved in checking the clipping
limits, fg_clpimage is not as fast as fg_drwimage.  However, fg_clpimage does
attempt to reduce this overhead by temporarily extending the horizontal
clipping coordinates to a byte boundary in video memory.  For example, the
CGA two-color graphics mode (mode 6), the standard Hercules mode (mode 11),
and the native EGA and VGA graphics modes (modes 13 through 18) store eight
pixels in each byte of video memory.  This means the byte boundaries occur at
the horizontal coordinates 0, 8, 16, and so on.  The fg_clpimage routine will
extend the minimum horizontal (left) clipping limit to a byte boundary, and
it will extend the maximum horizontal (right) clipping limit to the last
pixel in a byte.  That is, if the left clipping limit is at x=10 and the
right clipping limit is at x=26, fg_clpimage will temporarily extend these
values to x=8 and x=31 respectively.  Please refer to page 158 for a further
discussion of byte boundaries.


Reversed Images

     The fg_revimage routine displays an image reversed (that is, mirrored
about the y-axis).  Fg_revimage takes the same three arguments as
fg_drwimage, and likewise displays the image such that its lower left corner
is at the graphics cursor position.  The fg_revimage routine has no effect
when used in a text video mode.  Refer to pages 135 and 137 for example
programs that use fg_revimage.


Reversed Clipped Images

     The fg_flpimage routine combines the effects of the fg_revimage and
fg_clpimage routines -- it displays a reversed image with respect to the
current clipping limits.  Fg_flpimage takes the same three arguments as
fg_drwimage, and likewise displays the image such that its lower left corner
is at the graphics cursor position.  Like the fg_clpimage routine,
fg_flpimage extends the clipping limits to a byte boundary to reduce the
overhead involved in clipping, and it has no effect when used in a text video
mode.  Refer to pages 135 and 137 for example programs that use fg_flpimage.


Some Examples

     Example 9-8 illustrates the use of the fg_drwimage, fg_clpimage,
fg_revimage, and fg_flpimage routines in the standard CGA four-color graphics
mode (mode 4).  The program uses each of these routines to display a small
white arrow, as shown in the pixel map below.

                             . . . . . . * . . .
                             . . . . . . * * . .
                             * * * * * * * * * .
                             * * * * * * * * * *
                             * * * * * * * * * .
                             . . . . . . * * . .
                             . . . . . . * . . .
136   Fastgraph User's Guide

As before, we must first convert this image to a bit map.  The image is ten
pixels wide and seven high.  In mode 4, each pixel occupies two bits, so we
need a 21-byte array (7 rows by 3 columns) to store the image.  Since we want
to make the arrow white, each pixel will be displayed in color 3 (11 binary).
Here is the bit map and its hexadecimal equivalent for the arrow image in
mode 4 (the actual image is in boldface).


         00 00 00 00   00 00 11 00   00 00 00 00         00   0C   00

         00 00 00 00   00 00 11 11   00 00 00 00         00   0F   00

         11 11 11 11   11 11 11 11   11 00 00 00         FF   FF   C0

         11 11 11 11   11 11 11 11   11 11 00 00         FF   FF   F0

         11 11 11 11   11 11 11 11   11 00 00 00         FF   FF   C0

         00 00 00 00   00 00 11 11   00 00 00 00         00   0F   00

         00 00 00 00   00 00 11 00   00 00 00 00         00   0C   00


     After establishing the video mode, the program defines the clipping
region.  It then uses fg_drwimage to display the arrow pointing to the right
and fg_clpimage to do the same thing, but with respect to the clipping
limits.  Because the left edge of the arrow is displayed at x=10 and the
right clipping limit is at x=15, the call to fg_clpimage only draws the first
six columns of the arrow (that is, it does not draw the arrow head).

     Next, example 9-8 uses fg_revimage to display the arrow pointing to the
left.  To allow for the filler pixels, we must establish the graphics cursor
position two pixels to the left of the position used by fg_drwimage if we
want the tip of the left-pointing arrow to align with the tail of the right-
pointing arrow.  Finally, the program uses fg_flpimage to display an arrow
pointing to the left with regard to the clipping limits.  The call to
fg_flpimage displays the arrow head and the first two columns of the arrow
shaft.

                                 Example 9-8.

              char arrow[] = {
                 0x00,0x0C,0x00, 0x00,0x0F,0x00, 0xFF,0xFF,0xC0,
                 0xFF,0xFF,0xF0, 0xFF,0xFF,0xC0, 0x00,0x0F,0x00,
                 0x00,0x0C,0x00
                 };

              main()
              {
                 int old_mode;

                 if (fg_testmode(4,1) == 0) {
                    printf("This program requires a 320 ");
                    printf("x 200 CGA graphics mode.\n");
                    exit();
                    }

                                 Chapter 9:  Images and Image Management   137

                 old_mode = fg_getmode();
                 fg_setmode(4);
                 fg_setclip(0,15,0,199);

                 fg_move(10,10);
                 fg_drwimage(arrow,3,7);
                 fg_move(10,20);
                 fg_clpimage(arrow,3,7);
                 fg_move(8,30);
                 fg_revimage(arrow,3,7);
                 fg_move(8,40);
                 fg_flpimage(arrow,3,7);
                 fg_waitkey();

                 fg_setmode(old_mode);
                 fg_reset();
              }


     Example 9-9 is identical to example 9-8, but it uses the low resolution
EGA graphics mode (mode 13).  In the native EGA and VGA video modes, recall
that fg_drwimage uses the same mode-independent bit map format as the
fg_drawmap routine.  Thus we need a 14-byte array (7 rows by 2 columns) to
store the image.  Here is the bit map and its hexadecimal equivalent for the
arrow image in mode 13 (again, the actual image is in boldface).

              0 0 0 0 0 0 1 0   0 0 0 0 0 0 0 0         02   00

              0 0 0 0 0 0 1 1   0 0 0 0 0 0 0 0         03   00

              1 1 1 1 1 1 1 1   1 0 0 0 0 0 0 0         FF   80

              1 1 1 1 1 1 1 1   1 1 0 0 0 0 0 0         FF   C0

              1 1 1 1 1 1 1 1   1 0 0 0 0 0 0 0         FF   80

              0 0 0 0 0 0 1 1   0 0 0 0 0 0 0 0         03   00

              0 0 0 0 0 0 1 0   0 0 0 0 0 0 0 0         02   00

     Here is the program to display the arrows in mode 13.  Note that we must
define the color associated with the bit map in the native EGA and VGA
graphics modes with a call to the fg_setcolor routine (the other video modes
implicitly define the pixel colors in the bit map itself).

                                 Example 9-9.

                char arrow[] = {
                   0x02,0x00, 0x03,0x00, 0xFF,0x80, 0xFF,0xC0,
                   0xFF,0x80, 0x03,0x00, 0x02,0x00
                   };

                main()
                {
                   int old_mode;

138   Fastgraph User's Guide


                   if (fg_testmode(13,1) == 0) {
                      printf("This program requires a 320 ");
                      printf("x 200 EGA graphics mode.\n");
                      exit();
                      }

                   old_mode = fg_getmode();
                   fg_setmode(13);
                   fg_setclip(0,15,0,199);
                   fg_setcolor(15);

                   fg_move(10,10);
                   fg_drwimage(arrow,2,7);
                   fg_move(10,20);
                   fg_clpimage(arrow,2,7);
                   fg_move(4,30);
                   fg_revimage(arrow,2,7);
                   fg_move(4,40);
                   fg_flpimage(arrow,2,7);
                   fg_waitkey();

                   fg_setmode(old_mode);
                   fg_reset();
                }



Pixel Run Maps

     The bit maps used with the fg_drawmap, fg_drwimage, and related routines
can consume array space quite rapidly.  This is especially true if the image
is large or contains many colors.  For example, a mode-independent bit-mapped
image that occupies the entire screen in a 320 by 200 graphics mode requires
8,000 bytes of space per color.  Fastgraph provides another mode-independent
image format called pixel run maps, which are more efficient in terms of
space.  In pixel run maps, you store the entire image in a single array.
Pixel run maps are particularly useful for displaying static images such as
backgrounds.

     Let's return to our familiar triangle example and show how we could use
a pixel run map to display it.

                              . . . . * . . . .
                              . . . * x * . . .
                              . . * x x x * . .
                              . * x x x x x * .
                              * * * * * * * * *

As before, the pixels indicated by an asterisk (*) are the triangle's
perimeter, while those indicated by an x represent its interior points.  The
pixels shown as periods (.) are not part of the triangle itself, but they are
part of the pixel run map.

     If we start at the lower left corner of the image and proceed to the
right, we could represent the first row of the image as nine pixels of color
"asterisk".  Such a group of consecutive identically colored pixels is called
                                 Chapter 9:  Images and Image Management   139

a pixel run, so a single pixel run describes the first row of the image.  The
row above this one is a bit more complex.  It consists of five pixel runs:
one pixel of color "period", followed by one of color "asterisk", then five
of color "x", one of color "asterisk", and finally one of color "period".

     While we could construct separate pixel runs for each row of the image,
notice that three of the five rows in our triangle begin with the same color
pixel as the rightmost pixel in the previous row.  Fastgraph's pixel run map
format lets you take advantage of this property by allowing pixel runs to
wrap from one row to the next.  This means we can represent the pixel run of
color "period" extending from the right side of the second row to the left
side of the third row as a single run of three pixels.

     The Fastgraph routine fg_display displays an image stored as a pixel run
map.  The fg_display routine expects three arguments.  The first is an array
containing the pixel runs (passed by reference), the second is the number of
pixel runs in the array, and the third is the width in pixels of the image.
As with the other image display routines, the fg_display routine displays the
image such that its lower left corner is at the graphics cursor position on
the active video page.  The pixel run array is of the following format:


                             [0]   color for run 1

                             [1]   count for run 1

                             [2]   color for run 2

                             [3]   count for run 2
                              .
                              .
                              .

                          [2n-2]   color for run n

                          [2n-1]   count for run n


Each color is a value between 0 and 255 specifying the color index for that
pixel run.  Each count is a value between 0 and 255 specifying the length in
pixels of that pixel run.  If a run is longer than 255 pixels, it must be
broken into two or more runs.  For example, we could represent a pixel run of
length 265 as a run of length 255 followed by a run of length 10 of the same
color.  Note also the array space in bytes needed to store a pixel run map is
twice the number of runs.

     It requires 16 pixel runs to store our triangle image as a pixel run
map.  If we want to display the perimeter pixels in color 1, the interior
pixels in color 2, and the filler area in color 7, the pixel run map would
contain 16 sets of (color,count) pairs:  (1,9), (7,1), (1,1), (2,5), (1,1),
(7,3), (1,1), (2,3), (1,1), (7,5), (1,1), (2,1), (1,1), (7,7), (1,1), and
(7,4).

     Example 9-10 uses the fg_display routine to display the triangle as a
pixel run map in a 320 by 200 graphics mode.  The program displays the
triangle against a background of color 7, so the selection of color 7 for the
140   Fastgraph User's Guide

filler area was important.  If some other color were chosen, the filler area
would not blend in with the background.

                                Example 9-10.

                char triangle[] = {
                   1,9, 7,1, 1,1, 2,5, 1,1, 7,3, 1,1, 2,3,
                   1,1, 7,5, 1,1, 2,1, 1,1, 7,7, 1,1, 7,4
                   };

                main()
                {
                   int old_mode, new_mode;

                   new_mode = fg_bestmode(320,200,1);
                   if (new_mode < 0 || new_mode == 12) {
                      printf("This program requires a 320 ");
                      printf("x 200 color graphics mode.\n");
                      exit();
                      }

                   old_mode = fg_getmode();
                   fg_setmode(new_mode);

                   fg_setcolor(7);
                   fg_rect(0,319,0,199);

                   fg_move(156,101);
                   fg_display(triangle,16,9);
                   fg_waitkey();

                   fg_setmode(old_mode);
                   fg_reset();
                }


     If you have a pixel run map that only uses the first 16 color indices (0
to 15), you can use Fastgraph's packed pixel run map image format.  This
format packs two color values into each color byte and thus needs 25% less
array space to store an image.  The Fastgraph routine fg_displayp displays an
image stored as a packed pixel run map.  It is identical in all respects to
the fg_display routine except for the structure of the pixel run array.  Like
fg_display, the pixel run array used with fg_displayp is a list of pixel
runs, but two runs are packed into three bytes.  In each such set of three
bytes, the high four bits of the first byte contain the color of the first
run, and the low four bits contain the color of the second run.  The second
byte contains the length of the first run, and the third byte contains the
length of the second run.

     The following diagram illustrates the format of the pixel run array used
with the fg_displayp routine.  The image is assumed to contain n pixel runs,
where n is an even number.  If n is odd, the index of the last element is
3n/2 (truncated) instead of 3n/2-1, and the low four bits of the last color
byte (that is, the color for pixel run n+1) are ignored.
                                 Chapter 9:  Images and Image Management   141

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


     The structure of the packed pixel run array allows for color values to
be between 0 and 15, and pixel run lengths to be between 0 and 255.  The
array space in bytes needed to store a packed pixel run map is 1.5 times the
number of runs, as compared to twice the number of runs for the standard
pixel run format.

     Example 9-11 is identical to example 9-10, but it uses fg_displayp
rather than fg_display to display the image.  Note the use of hexadecimal
numbers for defining the packed color values, which of course is not
necessary but certainly easier to read than expressing the quantities as
decimal numbers.

                                Example 9-11.

                char triangle[] = {
                   0x17,9,1, 0x12,1,5, 0x17,1,3, 0x12,1,3,
                   0x17,1,5, 0x12,1,1, 0x17,1,7, 0x17,1,4
                   };

                main()
                {
                   int old_mode, new_mode;

                   new_mode = fg_bestmode(320,200,1);
                   if (new_mode < 0 || new_mode == 12) {
                      printf("This program requires a 320 ");
                      printf("x 200 color graphics mode.\n");
                      exit();
                      }

                   old_mode = fg_getmode();
                   fg_setmode(new_mode);

142   Fastgraph User's Guide


                   fg_setcolor(7);
                   fg_rect(0,319,0,199);

                   fg_move(156,101);
                   fg_displayp(triangle,16,9);
                   fg_waitkey();

                   fg_setmode(old_mode);
                   fg_reset();
                }

     Both the fg_display and fg_displayp routines require the pixel run image
to be stored in an array.  In examples 9-10 and 9-11, the image is defined
within the program itself.  However, if the image is stored in a file, it
must first be read into the pixel run array.  Example 9-12 demonstrates this
procedure.  The program displays two images stored in files, one in standard
pixel run format and the other in packed pixel run format.  Each image is a
picture of the sea floor and some coral, as might be used for the background
in an aquarium.  The program runs in a 320 by 200 graphics mode, and the
image fills the entire screen.  It is assumed the image files contain the
list of pixel runs as a single byte stream that does not include embedded
characters such as carriage returns or line feeds.

     The first image, in standard pixel run format, is in the file coral.spr.
Note the program must open the file for reading in binary mode ("rb" in the
call to fopen).  The program reads the file's entire contents into the
pixel_runs array, whose size must be at least as large as the file size.
Because the image is stored in standard pixel run format, the number of pixel
runs is one-half the file size.  The program then uses the fg_move routine to
establish the lower left corner of the screen as the graphics cursor position
and then calls fg_display to display the image.  As mentioned earlier, the
image fills the entire screen, so its width is 320 pixels.

     After waiting for a keystroke, the program similarly displays the second
image.  This image is in the file coral.ppr and is stored in packed pixel run
format.  Because the image is packed, the number of pixel runs is two-thirds
the file size.  The program then clears the previous image from the screen
and calls fg_displayp to display the image.  After another keystroke, the
program restores the original video mode and screen attributes and returns to
DOS.

                                Example 9-12.

             #include <stdio.h>

             char pixel_runs[20000];

             main()
             {
                long filelength();
                FILE *stream;
                int file_size, run_count;
                int old_mode, new_mode;

                new_mode = fg_bestmode(320,200,1);

                                 Chapter 9:  Images and Image Management   143

                if (new_mode < 0 || new_mode == 12) {
                   printf("This program requires a 320 ");
                   printf("x 200 color graphics mode.\n");
                   exit();
                   }

                old_mode = fg_getmode();
                fg_setmode(new_mode);

                stream = fopen("coral.spr","rb");
                file_size = (int)(filelength(fileno(stream)));
                fread(pixel_runs,sizeof(char),file_size,stream);
                fclose(stream);
                run_count = file_size / 2;
                fg_move(0,199);
                fg_display(pixel_runs,run_count,320);
                fg_waitkey();

                stream = fopen("coral.ppr","rb");
                file_size = (int)(filelength(fileno(stream)));
                fread(pixel_runs,sizeof(char),file_size,stream);
                fclose(stream);
                run_count = file_size / 3 * 2;
                fg_erase();
                fg_displayp(pixel_runs,run_count,320);
                fg_waitkey();

                fg_setmode(old_mode);
                fg_reset();
             }


     Another Fastgraph routine, fg_dispfile, displays an image directly from
a file.  This eliminates the need to read the file contents into an array
before displaying the image, and it also eliminates the need to compute the
number of pixel runs in the image.  The fg_dispfile routine can display
images stored in either standard or packed pixel run images.  The first of
its three arguments is the name of the file containing the image.  The file
name must be terminated with a null character, so QuickBASIC and FORTRAN
programmers will need to store a zero byte as the last character of the file
name string.  The second argument is the width in pixels of the image, and
the third argument defines the image format (that is, standard or packed).
As with fg_display and fg_displayp, the fg_dispfile routine displays the
image such that its lower left corner is at the graphics cursor position.

     Example 9-13 illustrates how to use the fg_dispfile routine to display
an image stored in a file.  It is functionally identical to example 9-12, but
it is much simpler because it uses fg_dispfile instead of fg_display and
fg_displayp to display the images.  The value of fg_dispfile's third argument
tells Fastgraph the image format.  A value of 0 indicates the file contains
an image in standard pixel run format, while a value of 1 indicates an image
in packed pixel run format.  As in example 9-12, the image files are assumed
to contain the list of pixel runs as a single byte stream that does not
include embedded characters such as carriage returns or line feeds.

144   Fastgraph User's Guide
                                Example 9-13.

                main()
                {
                   int old_mode, new_mode;

                   new_mode = fg_bestmode(320,200,1);
                   if (new_mode < 0 || new_mode == 12) {
                      printf("This program requires a 320 ");
                      printf("x 200 color graphics mode.\n");
                      exit();
                      }

                   old_mode = fg_getmode();
                   fg_setmode(new_mode);

                   fg_move(0,199);
                   fg_dispfile("coral.spr",320,0);
                   fg_waitkey();

                   fg_erase();
                   fg_dispfile("coral.ppr",320,1);
                   fg_waitkey();

                   fg_setmode(old_mode);
                   fg_reset();
                }

     To display the image, the fg_dispfile routine attempts to allocate
enough dynamic memory to read the entire file.  If it is unable to do so, it
allocates the available memory and displays the image in more than one pass.
In either case, Fastgraph deallocates the memory after fg_dispfile displays
the image.

     The SNAPSHOT utility distributed with Fastgraph is a terminate and stay
resident program (TSR) that can capture graphics mode screen images and save
them in standard pixel run format files.  Thus, you can easily create files
with SNAPSHOT and display them with the fg_dispfile routine.  Appendix A
contains a complete description of the SNAPSHOT utility.


Display Patterns

     Examples 9-11, 9-12, and 9-13 work well in the graphics video modes with
16 or 256 available colors.  However, in the four-color CGA graphics modes
the resulting image is not too good because of our limited color choices, and
it would look even worse in the Hercules graphics mode.  The Fastgraph
routine fg_pattern allows you to associate a dither pattern (actually, any
pixel sequence) with one of Fastgraph's 256 color indices appearing in a
pixel run map.  When displaying a pixel run map (with the fg_display,
fg_displayp, or fg_dispfile routine), Fastgraph will use the pattern
associated with that color index instead of displaying the color itself.

     The fg_pattern routine requires two integer arguments -- a color index
(between 0 and 255) and the display pattern defined for that color index.  A
display pattern's structure resembles the structure of video memory and is
thus dependent on the current video mode.  The following sections list the
                                 Chapter 9:  Images and Image Management   145

initial display patterns and explain how to construct new display patterns
for different graphics video modes.

CGA four-color graphics modes

     In the four-color CGA graphics modes (modes 4 and 5), the display
pattern is a 16-bit quantity consisting of an 8-bit shift count followed by
an 8-bit pixel pattern.  Each pixel assumes a value between 0 and 3, so the
pattern represents four pixels.  In even-numbered pixel rows, Fastgraph uses
the pixel pattern itself.  In odd-numbered pixel rows, Fastgraph rotates the
original pattern to the left by the number of bits specified by the shift
count.

     For example, if we are using the default CGA color palette, we could
create a lighter shade of cyan by alternating cyan pixels (color 1, 01
binary) with white pixels (color 3, 11 binary), as shown below.


                                 01 11 01 11


If we convert this pixel pattern to its hexadecimal equivalent, we obtain the
value 77.

     To complete the display pattern, we need to determine the shift count.
If we use a shift count of zero, the resulting display will simply be a
series of cyan and white vertical lines.  What we really need is a
checkerboard effect where a white pixel is above and below each cyan pixel,
and vice versa.  If we rotate the pattern one pixel (two bits) to the left,
we will obtain the desired effect.  That is, a shift count of two produces
the following pixel patterns:

                       even-numbered rows   01 11 01 11
                        odd-numbered rows   11 01 11 01

Combining the shift count with the pixel pattern yields the display pattern
0277 hex.  The shift count is normally a multiple of two; note that a zero
shift count results in the same pattern being applied to all pixel rows.

     For the CGA four-color graphics modes, the fg_setmode routine
establishes the following initial display patterns:


                         color  shift count  hexadecimal
                         index  and pattern  equivalent

                           0    0 00000000   0000
                           1    0 01010101   0055
                           2    0 10101010   00AA
                           3    0 11111111   00FF


These values are repeated as necessary to define color indices 4 to 255.
That is, colors 4, 8, 12, ... , 252 use the same defaults as color 0.  Colors
5, 9, 13, ... , 253 use the same defaults as color 1, and so forth.  Also
note that pattern 0000 represents four pixels of color 0, 0055 represents
146   Fastgraph User's Guide

four pixels of color 1, 00AA represents four pixels of color 2, and 00FF
represents four pixels of color 3.

CGA two-color graphics mode

     In the two-color CGA graphics mode (mode 6), the display pattern is also
a 16-bit quantity consisting of an 8-bit shift count followed by an 8-bit
pixel pattern.  Each pixel assumes the value 0 or 1, so the pattern
represents eight pixels.  In even-numbered pixel rows, Fastgraph uses the
pixel pattern itself.  In odd-numbered pixel rows, Fastgraph rotates the
original pattern to the left by the number of bits specified by the shift
count.

     For example, we could create a lighter shade of white by alternating
black pixels (color 0) with white pixels (color 1), as shown below.


                               0 1 0 1 0 1 0 1


If we convert this pixel pattern to its hexadecimal equivalent, we obtain the
value 55.

     To complete the display pattern, we need to determine the shift count.
We must rotate the pattern one pixel (one bit) to the left to obtain the
checkerboard effect as in the CGA four color graphics modes.  That is, a
shift count of one produces the following pixel patterns:

                     even-numbered rows   0 1 0 1 0 1 0 1
                      odd-numbered rows   1 0 1 0 1 0 1 0

Combining the shift count with the pixel pattern yields the display pattern
0155 hex.

     For the CGA two-color graphics mode, the fg_setmode routine establishes
the initial display patterns such that all even-numbered color indices are
assigned the value 0000, while all odd-numbered color indices are assigned
the value 00FF.  Note that pattern 0000 represents eight pixels of color 0,
and 00FF represents eight pixels of color 1.

Tandy/PCjr 16-color graphics mode

     In the Tandy/PCjr 16-color graphics mode (mode 9), the display pattern
is also 16-bit quantity consisting of an 8-bit shift count followed by an 8-
bit pixel pattern.  Each pixel assumes a value between 0 and 15, so the
pattern represents two pixels.  In even-numbered pixel rows, Fastgraph uses
the pixel pattern itself.  In odd-numbered pixel rows, Fastgraph rotates the
original pattern to the left by the number of bits specified by the shift
count.

     For example, we could create a lighter shade of blue by alternating blue
pixels (color 1, 0001 binary) with white pixels (color 15, 1111 binary), as
shown below.


                                  0001 1111

                                 Chapter 9:  Images and Image Management   147


If we convert this pixel pattern to its hexadecimal equivalent, we obtain the
value 1F.

     To complete the display pattern, we need to determine the shift count.
Using the same process as in the CGA graphics modes, we must rotate the
pattern one pixel (four bits) to the left to obtain the checkerboard effect.
That is, a shift count of four produces the following pixel patterns:

                        even-numbered rows   0001 1111
                         odd-numbered rows   1111 0001

Combining the shift count with the pixel pattern yields the display pattern
041F hex.  The shift count is normally zero or four; note that a zero shift
count results in the same pattern being applied to all pixel rows.

     For the Tandy/PCjr 16-color graphics modes, the fg_setmode routine
establishes the initial display patterns such that color 0 is assigned the
value 0000 (two pixels of color 0), color 1 is assigned the value 0011 (two
pixels of color 1), color 2 is assigned the value 0022 (two pixels of color
2), and so forth.  These values are repeated as necessary to define color
indices 16 to 255.  That is, colors 0, 16, 32, ... , 240 use the same
defaults as color 0.  Colors 1, 17, 33, ... , 241 use the same defaults as
color 1, and so forth.

Hercules graphics modes

     The structure of the display patterns for the Hercules graphics modes
(modes 11 and 12) is identical to two of the CGA graphics modes.  For the
standard Hercules graphics mode (mode 11), please refer to the discussion of
CGA two-color (mode 6) display patterns on page 146.  For the low-resolution
Hercules graphics mode (mode 12), please refer to the discussion of the CGA
four-color (mode 4) display patterns on page 145.

EGA graphics modes

     In the EGA graphics modes (modes 13 to 16), the display pattern is an 8-
bit quantity consisting of two 4-bit color values (for consistency with the
other video modes, we still pass the display pattern as a 16-bit quantity).
Each pixel assumes a value between 0 and 15 (0 and 5 in the EGA monochrome
graphics mode), so the pattern represents two pixels.  In even-numbered pixel
rows, Fastgraph uses the pixel pattern itself.  In odd-numbered pixel rows,
Fastgraph rotates the original pattern one pixel (four bits) to the left.

     For example, we could create a lighter shade of blue by alternating blue
pixels (color 1, 0001 binary) with white pixels (color 15, 1111 binary), as
shown below.


                                  0001 1111


If we convert this pixel pattern to its hexadecimal equivalent, we obtain the
value 1F.  The implied four-bit shift count produces the following pixel
patterns:
148   Fastgraph User's Guide

                        even-numbered rows   0001 1111
                         odd-numbered rows   1111 0001

Extending the pixel pattern to a 16-bit quantify yields the display pattern
001F hex.

     For the EGA and VGA 16-color graphics modes, the fg_setmode routine
establishes the initial display patterns such that color 0 is assigned the
value 0000 (two pixels of color 0), color 1 is assigned the value 0011 (two
pixels of color 1), color 2 is assigned the value 0022 (two pixels of color
2), and so forth.  These values are repeated as necessary to define color
indices 16 to 255.  That is, colors 0, 16, 32, ... , 240 use the same
defaults as color 0.  Colors 1, 17, 33, ... , 241 use the same defaults as
color 1, and so forth.

MCGA/VGA 2-color graphics mode

     In the two-color MCGA/VGA graphics mode (mode 17), the display pattern
is a 2-bit quantity consisting of two 1-bit color values (for consistency
with the other video modes, we still pass the display pattern as a 16-bit
quantity).  Each pixel assumes the value 0 or 1, so the pattern represents
two pixels.  In even-numbered pixel rows, Fastgraph uses the pixel pattern
itself.  In odd-numbered pixel rows, Fastgraph rotates the original pattern
one pixel (one bit) to the left.

     For example, we could create a lighter shade of white by alternating
black pixels (color 0) with white pixels (color 1), as shown below.


                                     0 1


If we convert this pixel pattern to its hexadecimal equivalent, we obtain the
value 01.  The implied one-bit shift count produces the following pixel
patterns:

                           even-numbered rows   0 1
                            odd-numbered rows   1 0

Extending the pixel pattern to a 16-bit quantity yields the display pattern
0001 hex.

     For the MCGA/VGA two-color graphics mode, the fg_setmode routine
establishes the initial display patterns such that all even-numbered color
indices are assigned the value 0000 (two pixels of color 0), while all odd-
numbered color indices are assigned the value 0003 (11 binary, or two pixels
of color 1).

VGA 16-color graphics mode

     The structure of the display patterns for the VGA 16-color graphics mode
(mode 18) is identical to that of the EGA graphics modes.  A discussion of
EGA display patterns appears on page 147.
                                 Chapter 9:  Images and Image Management   149

MCGA and VGA 256-color graphics modes

     The MCGA and VGA 256-color graphics modes (modes 19, 20, and 21) offer
262,144 different colors, so dithering is seldom (if ever) required.  For
this reason, the fg_pattern routine has no effect in these video modes.

An example

     Example 9-14 illustrates the use of display patterns in several graphics
modes.  This program runs in any 320 by 200 color graphics mode and displays
the coral image in packed pixel run format, as in example 9-13, but it
redefines one or more of the color indices.  If the program runs in the
standard CGA four-color mode (mode 4), it redefines the first 16 display
patterns using the fg_pattern routine and the values in the CGApatterns
array.  In the Tandy/PCjr 16-color graphics mode (mode 9) and the EGA low-
resolution graphics mode (mode 13), the program redefines color index 15 to
produce an alternating gray and bright white dither pattern.  In the MCGA
256-color mode (mode 19), display patterns are not available, so the program
uses fg_setrgb to define color index 15 as slightly darker shade of gray than
the default for color 7.

                                Example 9-14.

                int CGApatterns[] = {
                   0x0000,0x00FF,0x00FF,0x00FF,
                   0x02BB,0x0000,0x0222,0x0255,
                   0x00FF,0x00FF,0x00FF,0x0055,
                   0x00AA,0x00AA,0x00FF,0x0277
                   };

                main()
                {
                   int color;
                   int old_mode, new_mode;

                   new_mode = fg_bestmode(320,200,1);
                   if (new_mode < 0 || new_mode == 12) {
                      printf("This program requires a 320 ");
                      printf("x 200 color graphics mode.\n");
                      exit();
                      }

                   old_mode = fg_getmode();
                   fg_setmode(new_mode);

                   if (new_mode == 4) {
                      fg_palette(0,0);
                      for (color = 0; color < 16; color++)
                         fg_pattern(color,CGApatterns[color]);
                      }
                   else if (new_mode == 9 || new_mode == 13)
                      fg_pattern(15,0x04F7);
                   else
                      fg_setrgb(15,38,38,38);

                   fg_move(0,199);

150   Fastgraph User's Guide

                   fg_dispfile("coral.ppr",320,1);
                   fg_waitkey();

                   fg_setmode(old_mode);
                   fg_reset();
                }


Masking Maps

     When you are using the CGA, Tandy/PCjr, Hercules, or MCGA graphics video
modes, it is not possible to include color 0 pixels in an image displayed
with the fg_drwimage, fg_clpimage, fg_revimage, or fg_flpimage routines.
This is because these routines consider color 0 pixels to be transparent,
which means such pixels do not affect the corresponding pixels in video
memory.  There are times, however, when you will want color 0 pixels to be
destructive, or replace the video memory contents.

     Consider again the arrow image of example 9-8 (see page 135).  In this
example, we displayed a bright white (color 3) arrow against a black (color
0) background in the standard CGA four-color graphics mode.  Suppose, though,
that we want to do just the opposite -- display a black (color 0) arrow
against a bright white (color 3) background.  Example 9-9 (see page 137) does
this in an EGA graphics mode, but how would we display the black arrow in a
CGA graphics mode?  We could of course use the fg_drawmap routine or one of
the routines for displaying pixel run maps, but fg_drawmap does not support
clipping or reversing an image.   There are, however, four Fastgraph routines
designed just for this purpose.  These routines are fg_drawmask, fg_clipmask,
fg_revmask, and fg_flipmask.

     Each of these routines uses a data structure called a masking map.  A
masking map is similar in structure to a pixel run map, but it does not
include any information about colors.  Instead, it consists of a series of
pixel runs that alternate between protected and unprotected pixels.  An
example might best clarify this.

     Once again, here is the arrow image of examples 9-8 and 9-9.

                             . . . . . . * . . .
                             . . . . . . * * . .
                             * * * * * * * * * .
                             * * * * * * * * * *
                             * * * * * * * * * .
                             . . . . . . * * . .
                             . . . . . . * . . .

This time, though, we want the arrow to appear in color 0.  Put another way,
we need the "period" pixels (.) to protect video memory, while we want the
"asterisk" pixels (*) to zero video memory.  Looking at this problem from the
perspective of a pixel run map, we have an alternating series of "protect"
and "zero" runs.  We don't need any information about pixel colors, just
whether to protect or to zero video memory.

     This is precisely the structure of a masking map.  Starting from the
lower left corner of the image and proceeding to the right, wrapping up to
the next row when needed, we could represent this image as a masking map with
                                 Chapter 9:  Images and Image Management   151

6 protected pixels, 1 zeroed pixel, 9 protected pixels, 2 zeroed pixels, and
so on.  In general, the structure of a masking map is as follows.


                      [1]   length of 1st protect run

                      [2]   length of 1st  zero   run

                      [3]   length of 2nd protect run

                      [4]   length of 2nd  zero   run
                       .
                       .
                       .

                    [n-2]   length of final protect run

                    [n-1]   length of final  zero   run


     Looking at this diagram, we see that the even-numbered array elements
hold the length of the "protect" runs, and the odd-numbered elements hold the
length of the "zero" runs.  If you need the first run to be a "zero" run,
just include a "protect" run of length zero as the first element of the
array.  If the final run is a "protect" run, you do not need to include a
zero-length "zero" run at the end of the array.  Finally, if either type of
run exceeds 255 pixels, you'll need to split this into two or more pixel
runs.  In this case, be sure to include a zero-length run of the other type
between the two array elements.

     Example 9-15 illustrates the use of a masking map through the
fg_drawmask, fg_clipmask, fg_revmask, and fg_flipmask routines in the
standard CGA four-color graphics mode (mode 4) to draw a black (color 0)
arrow against a bright white background.  These four routines are
respectively analogous to the fg_drwimage, fg_clpimage, fg_revimage, and
fg_flpimage routines, but they use masking maps rather than bit maps.  The
first argument of each routine is the masking map array (passed by
reference), the second argument is the number of runs (that is, the number of
elements) in the masking map array, and the third argument is the width in
pixels of the image.

                                Example 9-15.

                char arrow[] = {6,1,9,2,2,9,1,19,7,2,8,1};

                main()
                {
                   int old_mode;

                   if (fg_testmode(4,1) == 0) {
                      printf("This program requires a 320 ");
                      printf("x 200 CGA graphics mode.\n");
                      exit();
                      }

                   old_mode = fg_getmode();

152   Fastgraph User's Guide

                   fg_setmode(4);
                   fg_setclip(0,15,0,199);

                   fg_setcolor(3);
                   fg_rect(0,319,0,199);

                   fg_move(10,10);
                   fg_drawmask(arrow,12,10);
                   fg_move(10,20);
                   fg_clipmask(arrow,12,10);
                   fg_move(10,30);
                   fg_revmask(arrow,12,10);
                   fg_move(10,40);
                   fg_flipmask(arrow,12,10);
                   fg_waitkey();

                   fg_setmode(old_mode);
                   fg_reset();
                }

     One of the more useful features of masking maps is the ability to clear
a portion of video memory before placing an image there.  This technique
provides an efficient, simple way to include color 0 pixels in an image.  It
is especially effective when displaying large or dithered images because the
masking map is typically much smaller than the bit map required by fg_drawmap
or its related routines.  Example 9-16 illustrates this process in the
standard CGA four-color graphics mode (mode 4) by displaying our arrow image
against a colored background.  In this example, the arrow has a bright white
(color 3) perimeter and a black (color 0) interior.

     The program displays the arrow in two steps.  It first uses fg_drawmask
to clear the video memory where the arrow will be displayed.  It then draws
the arrow's perimeter using the fg_drwimage routine.  The interior pixels in
the perimeter bit map are transparent, but since we just zeroed that video
memory, they appear in color 0.  Note we could improve this example by
creating a smaller masking map that only applies to the rectangle inscribing
the arrow's interior.  That is, we don't need to zero the video memory under
the arrow's perimeter because we will immediately display other pixels there.

                                Example 9-16.

              char arrow_white[] = {
                 0x00,0x0C,0x00, 0x00,0x0F,0x00, 0xFF,0xFC,0xC0,
                 0xC0,0x00,0x30, 0xFF,0xFC,0xC0, 0x00,0x0F,0x00,
                 0x00,0x0C,0x00
                 };

              char arrow_black[] = {6,1,9,2,2,9,1,19,7,2,8,1};

              main()
              {
                 int old_mode;

                 if (fg_testmode(4,1) == 0) {
                    printf("This program requires a 320 ");
                    printf("x 200 CGA graphics mode.\n");

                                 Chapter 9:  Images and Image Management   153

                    exit();
                    }

                 old_mode = fg_getmode();
                 fg_setmode(4);

                 fg_setcolor(2);
                 fg_rect(0,319,0,199);

                 fg_move(10,10);
                 fg_drawmask(arrow_black,12,10);
                 fg_drwimage(arrow_white,3,7);
                 fg_waitkey();

                 fg_setmode(old_mode);
                 fg_reset();
              }



Retrieving Images

     Sometimes it is necessary to retrieve an image from video memory and
store it in one or more bit map arrays.  Fastgraph includes two routines,
fg_getmap and fg_getimage, for this purpose.  The fg_getmap routine retrieves
pixels of the current color index and stores them in the mode-independent bit
map format used by fg_drawmap.  The fg_getimage routine retrieves an image
and stores it in the mode-specific bit map format used by fg_drwimage,
fg_clpimage, fg_revimage, and fg_flpimage.  The arguments to fg_getmap and
fg_getimage are respectively analogous to those of fg_drawmap and
fg_drwimage:  the first is an array (passed by reference) to receive the bit
map, the second is the width of the bit map in bytes, and the last is the
height of the bit map in pixel rows.  With either routine, the graphics
cursor position on the active video page defines the lower left corner of the
image to retrieve.

     If we are using the fg_getmap routine (or the fg_getimage routine in any
of the native EGA and VGA graphics video modes) to retrieve an image
containing more than one color,  we must call the routine once per color.  In
this case we'll usually want to pass different bit map arrays to fg_getmap or
fg_getimage (or perhaps different offsets into the same array).  This might
seem unusual at first, but it parallels the behavior of the fg_drawmap and
fg_drwimage routines.  That is, to display a multicolor image using
fg_drawmap, we must call fg_drawmap once for each color in the image.  The
same holds true if we are using fg_drwimage in the native EGA and VGA
graphics video modes, because in these modes the mode-specific bit map
structure is identical to the mode-independent structure.

     Example 9-17 demonstrates a typical use of the fg_getmap routine.  The
program displays the word "text" in the upper left corner of the screen using
a 320 by 200 graphics mode.  It uses fg_getmap to retrieve the word as an
image and then displays it in a new position with the fg_drawmap routine.
Let's look at the program now, and afterward we'll more closely examine the
screen coordinates and the structure of the bit map array.

154   Fastgraph User's Guide
                                Example 9-17.

                main()
                {
                   char bitmap[32];
                   int old_mode, new_mode;

                   new_mode = fg_bestmode(320,200,1);
                   if (new_mode < 0 || new_mode == 12) {
                      printf("This program requires a 320 ");
                      printf("x 200 color graphics mode.\n");
                      exit();
                      }

                   old_mode = fg_getmode();
                   fg_setmode(new_mode);

                   fg_setcolor(9);
                   fg_text("text",4);
                   fg_waitkey();

                   fg_move(0,7);
                   fg_getmap(bitmap,4,8);
                   fg_move(4,15);
                   fg_drawmap(bitmap,4,8);
                   fg_waitkey();

                   fg_setmode(old_mode);
                   fg_reset();
                }

     In all 320 by 200 graphics video modes, individual characters are 8
pixels wide and 8 pixels high.  This means the lower left corner of the (0,0)
character cell is referenced by the screen coordinates (0,7).  Hence, these
are the coordinates of the first call to fg_move.  The image retrieved in
example 9-17 is four characters long (32 pixels wide), so we need a bit map
array capable of holding 8 rows of 32 pixels (4 bytes) each.  Our bit map
array is therefore a 32-byte array, logically structured to have 4 columns
and 8 rows.  These values are the width and height arguments passed to
fg_getmap and fg_drawmap.

     After it retrieves the image, example 9-17 displays it one line below
and one-half character cell (four pixels) to the right of its original
position.  In other words, the program displays the image four pixels to the
right of the (1,0) character cell.  The lower left corner of that cell is
referenced by the screen coordinates (0,15), so the image should appear at
the position (4,15).  These are the coordinates of the second call to
fg_move.

     Example 9-18 illustrates the use of the fg_getmap and fg_drawmap
routines to retrieve and display two-color image.  This example is similar to
example 9-17, but this program first draws a rectangle in the upper left
corner of the screen and then displays the word "text" on top of the
rectangle in a different color.  Each character in a 320 by 200 graphics
video mode is 8 pixels wide and 8 pixels high, so the rectangle must be 32
pixels wide (4 characters times 8 pixels per character) and 8 pixels high.
The image to retrieve will be the same size as the rectangle.
                                 Chapter 9:  Images and Image Management   155

     The image retrieved in example 9-17 required a 32-byte array, logically
structured to have 4 columns and 8 rows.  Example 9-18 will retrieve an image
of the same structure, but the image contains two colors instead of just one.
This means we need two 32-byte arrays, one for each color, to hold the image.
We could instead use a single 64-byte array and pass an offset into that
array (specifically, &bitmap[32]) for processing the second color.

                                Example 9-18.

                main()
                {
                   char bitmap1[32], bitmap2[32];
                   int old_mode, new_mode;

                   new_mode = fg_bestmode(320,200,1);
                   if (new_mode < 0 || new_mode == 12) {
                      printf("This program requires a 320 ");
                      printf("x 200 color graphics mode.\n");
                      exit();
                      }

                   old_mode = fg_getmode();
                   fg_setmode(new_mode);

                   fg_setcolor(7);
                   fg_rect(0,31,0,7);
                   fg_setcolor(9);
                   fg_text("text",4);
                   fg_waitkey();

                   fg_move(0,7);
                   fg_setcolor(7);
                   fg_getmap(bitmap1,4,8);
                   fg_setcolor(9);
                   fg_getmap(bitmap2,4,8);

                   fg_move(4,15);
                   fg_setcolor(7);
                   fg_drawmap(bitmap1,4,8);
                   fg_setcolor(9);
                   fg_drawmap(bitmap2,4,8);
                   fg_waitkey();

                   fg_setmode(old_mode);
                   fg_reset();
                }


     Example 9-19 is similar to example 9-18, but it uses fg_getimage and
fg_drwimage instead of fg_getmap and fg_drawmap to retrieve and display the
image.  That is, it uses the mode-specific rather than the mode-independent
image retrieval and display routines.  When using the mode-specific routines,
the size of the bit map needed to hold the image depends on the video mode.
Furthermore, we must account for the fact that the native EGA and VGA
graphics video modes (mode 13 in this example) only retrieve and display one
color at a time.
156   Fastgraph User's Guide

     For the CGA, Tandy/PCjr, and MCGA graphics video modes (modes 4, 9, and
19), example 9-19 first computes the image width in bytes.  The image is 32
pixels wide.  In the CGA graphics mode, there are four pixels per byte of
video memory, so the image width is 8 bytes.  Similarly, there are two pixels
per byte in the Tandy/PCjr graphics mode, so in this mode the image width is
16 bytes.  In the MCGA graphics mode, each byte holds one pixel, so the image
width is 32 bytes.  The image height is 8 pixels in all cases.  The size of
the bit map array is 256 bytes, which is the size required in the MCGA
graphics mode (32 bytes times 8 bytes).  The other video modes require less
storage, so in these modes only a portion of the bit map array will actually
be used.  The specified width is used in the calls to both fg_getimage and
fg_drwimage in these video modes.

     For the EGA graphics mode (mode 13), we must call fg_getimage and
fg_drwimage once for each of the two colors in the image.  As in example
9-18, each color requires 32 bytes.  The first call to fg_getimage stores the
color 7 pixels in the first 32 bytes of the bit map array, and the second
call stores the color 9 pixels in the next 32 bytes.  Similarly, the first
call to fg_drwimage displays the color 7 pixels from the first 32 bytes of
the bit map array, while the second call displays the color 9 pixels from the
next 32 bytes.  Note how the most recent call to the fg_setcolor routine
determines which pixels are retrieved or the color of the displayed pixels.

                                Example 9-19.

                main()
                {
                   char bitmap[256];
                   int old_mode, new_mode;
                   int width;

                   new_mode = fg_bestmode(320,200,1);
                   if (new_mode < 0 || new_mode == 12) {
                      printf("This program requires a 320 ");
                      printf("x 200 color graphics mode.\n");
                      exit();
                      }

                   if (new_mode == 4)
                      width = 8;
                   else if (new_mode == 9)
                      width = 16;
                   else if (new_mode == 19)
                      width = 32;

                   old_mode = fg_getmode();
                   fg_setmode(new_mode);

                   fg_setcolor(7);
                   fg_rect(0,31,0,7);
                   fg_setcolor(9);
                   fg_text("text",4);
                   fg_waitkey();

                   fg_move(0,7);
                   if (new_mode == 13) {

                                 Chapter 9:  Images and Image Management   157

                      fg_setcolor(7);
                      fg_getimage(bitmap,4,8);
                      fg_setcolor(9);
                      fg_getimage(&bitmap[32],4,8);
                      }
                   else
                      fg_getimage(bitmap,width,8);

                   fg_move(4,15);
                   if (new_mode == 13) {
                      fg_setcolor(7);
                      fg_drwimage(bitmap,4,8);
                      fg_setcolor(9);
                      fg_drwimage(&bitmap[32],4,8);
                      }
                   else
                      fg_drwimage(bitmap,width,8);

                   fg_waitkey();

                   fg_setmode(old_mode);
                   fg_reset();
                }

     We can also use the fg_getimage routine to retrieve images in text video
modes.  In text modes, however, there are a few differences we must consider
when using fg_getimage.  First, the text cursor position, not the graphics
cursor position, specifies the lower left corner of the image.  Hence we must
use the fg_locate routine instead of fg_move to define the image location.
Second, the image width is always twice the number of characters per image
row (that is, for each character we have an character byte and an attribute
byte).  The fg_getmap routine has no effect when used in a text video mode.

     Example 9-20 shows a simple use of fg_getimage in text modes.  This
program is similar to example 9-19, but it runs in an 80-column text mode
rather than a 320 by 200 graphics mode.  As before, the program will retrieve
the four characters "text" as an image from the upper left corner of the
screen and then display it in a different location.  Because the image
consists of four characters in one row, the image width is 8 bytes and the
image height is 1.

                                Example 9-20.

                   main()
                   {
                      int old_mode;
                      char image[8];

                      old_mode = fg_getmode();

                      if (fg_testmode(3,1))
                         fg_setmode(3);
                      else if (fg_testmode(7,1))
                         fg_setmode(7);
                      else {
                         printf("This program requires\n");

158   Fastgraph User's Guide

                         printf("an 80-column display.\n");
                         exit();
                         }

                      fg_cursor(0);
                      fg_setattr(9,7,0);
                      fg_text("text",4);
                      fg_waitkey();

                      fg_locate(0,0);
                      fg_getimage(image,8,1);
                      fg_locate(1,1);
                      fg_drwimage(image,8,1);
                      fg_waitkey();

                      fg_setmode(old_mode);
                      fg_reset();
                   }


Byte Boundaries

     Video memory, like standard random-access memory, is divided into units
called bytes.  In text modes, each byte holds either a character or an
attribute.  In graphics modes, each byte of video memory holds one or more
horizontally contiguous pixels.  If two adjacent horizontal pixels are stored
in different bytes, then we say that a byte boundary exists between the two
pixels.

     The number of pixels per byte depends on the video mode being used, so
the byte boundaries also depend on the video mode.  That is, a byte boundary
in a CGA graphics mode is not necessarily a byte boundary in an EGA graphics
mode.  The following table summarizes the number of pixels per byte of video
memory and the byte boundary sequences for each supported graphics video
mode.  Note that any horizontal coordinate whose value is a multiple of 8 is
always a byte boundary, regardless of the video mode.
                                 Chapter 9:  Images and Image Management   159


                   mode   pixels   horizontal coordinates
                  number per byte    of byte boundaries


                    4       4      0, 4,  8, 12, ... , 316
                    5       4      0, 4,  8, 12, ... , 316
                    6       8      0, 8, 16, 24, ... , 632
                    9       2      0, 2,  4,  6, ... , 318
                    11      8      0, 8, 16, 24, ... , 712
                    12      4      0, 4,  8, 12, ... , 316
                    13      8      0, 8, 16, 24, ... , 312
                    14      8      0, 8, 16, 24, ... , 632
                    15      8      0, 8, 16, 24, ... , 632
                    16      8      0, 8, 16, 24, ... , 632
                    17      8      0, 8, 16, 24, ... , 632
                    18      8      0, 8, 16, 24, ... , 632
                    19      1      0, 1,  2,  3, ... , 319
                    20      1      0, 1,  2,  3, ... , 319
                    21      1      0, 1,  2,  3, ... , 319




Image Transfer Routines

     The Fastgraph routines described in this section transfer images between
areas of video memory.  These routines are often used in animation sequences
requiring high-performance graphics, so they must be as efficient as
possible.  To this end, Fastgraph will force their horizontal pixel
coordinates to byte boundaries, which eliminates the need to process any
pixels individually.  Fastgraph accomplishes this by reducing minimum
horizontal coordinates to a byte boundary and extending maximum horizontal
coordinates to the last pixel in a video memory byte.  Note that since we are
talking about pixel coordinates and not character cells, the coordinate
modification only occurs in graphics video modes.

     An example might best help explain this important feature.  The CGA
four-color graphics modes (modes 4 and 5) store four pixels in each byte of
video memory.  This means the byte boundaries occur at multiples of four
pixels.  Thus, when you use the image transfer routines in modes 4 and 5,
Fastgraph reduces minimum x coordinates to the next lower multiple of four.
Similarly, it extends their maximum x coordinates to the next higher multipleof four, less one pixel.  That is, if a minimum x coordinate is 7 and a

160   Fastgraph User's Guide

maximum x coordinate is 30, Fastgraph will modify these values to 4 and 31
respectively.  If the x coordinates were originally 4 and 31, Fastgraph would
leave them unchanged.  Note, too, that because each pixel in the MCGA and VGA
256-color graphics modes (modes 19, 20, and 21) occupies a separate byte of
video memory, Fastgraph does not need to modify horizontal coordinates in
these video modes.

     Several of Fastgraph's image transfer routines reference a video page
called the hidden page.  The Fastgraph routine fg_sethpage defines which
video page will be used as the hidden page.  This routine takes as its only
argument an integer value specifying the hidden page number.  If you are
using a virtual video page for the hidden page, you must call the fg_sethpage
routine after allocating that page.  There is also a routine named
fg_gethpage that returns the hidden page number, as specified in the most
recent call to fg_sethpage, as its function value.  The fg_gethpage routine
takes no arguments.

     Fastgraph's simplest image transfer routines are fg_save and fg_restore.
The fg_save routine transfers a rectangular region from the active video page
(as defined in the most recent call to fg_setpage) to the same position on
the hidden video page (as defined in the most recent call to fg_sethpage).
The fg_restore routine performs the complementary task -- it transfers a
rectangular region from the hidden page to the active page.  Each of these
routines requires four arguments that define the coordinates of the region to
transfer, in the order minimum x, maximum x, minimum y, and maximum y.  In
text modes, the coordinates are expressed as character space quantities (rows
and columns).  In graphics modes, they are expressed as screen space values
(pixels); the x coordinates are extended to byte boundaries if required.
There are also world space versions of these routines named fg_savew and
fg_restorew available in graphics modes.

     Example 9-21 demonstrates the use of Fastgraph's fg_save, fg_restore,
and fg_sethpage routines in an 80-column text video mode.  After establishing
the video mode (note the calls to fg_testmode specify that two video pages
are needed), the program fills the screen with text and then waits for a
keystroke.  Following this, the program displays a small pop-up window
prompting for another keystroke.  After waiting for the second keystroke, the
program erases the pop-up window by restoring the original screen contents,
and then waits for yet another keystroke before returning to DOS.  We'll
present the program now, and afterward analyze it in detail.

                                Example 9-21.

                main()
                {
                   int row;
                   int old_mode;
                   char string[17];

                   old_mode = fg_getmode();

                   if (fg_testmode(3,2))
                      fg_setmode(3);
                   else if (fg_testmode(7,2))
                      fg_setmode(7);
                   else {

                                 Chapter 9:  Images and Image Management   161

                      printf("This program requires\n");
                      printf("an 80-column display.\n");
                      exit();
                      }

                   fg_cursor(0);
                   fg_setattr(9,7,0);

                   for (row = 0; row < 25; row++) {
                      sprintf(string," This is row %2d ",row);
                      fg_locate(row,0);
                      fg_text(string,16);
                      fg_text(string,16);
                      fg_text(string,16);
                      fg_text(string,16);
                      fg_text(string,16);
                      }
                   fg_waitkey();

                   fg_allocate(1);
                   fg_sethpage(1);
                   fg_save(32,47,11,13);
                   fg_setcolor(1);
                   fg_rect(32,47,11,13);
                   fg_setattr(15,1,0);
                   fg_locate(12,33);
                   fg_text("Press any key.",14);
                   fg_waitkey();

                   fg_restore(32,47,11,13);
                   fg_waitkey();

                   fg_freepage(1);
                   fg_setmode(old_mode);
                   fg_reset();
                }

     Example 9-21 first establishes the video mode and uses the fg_cursor
routine to make the BIOS cursor invisible.  It then executes a for loop that
fills each row of the screen with the phrase "This is row n", where n is the
row number (between 0 and 24).  Next, the program uses the fg_allocate
routine to create video page 1 as a virtual video page.  This is needed in
case the program is running in mode 7, which has only one true page (if the
program is running in mode 3, the call to fg_allocate has no effect).  The
program then makes page 1 the hidden page by calling the fg_sethpage routine.

     After setting up the hidden video page, but before displaying the pop-up
window, example 9-21 uses the fg_save routine to save the current contents of
the area that the pop-up window will replace.  The fg_save routine copies
this region to the hidden page.  The program then displays the pop-up window
in the middle of the screen and leaves it there until a key is pressed.
Following this, the program uses the fg_restore routine to replace the pop-up
window with the original contents of that region.  This effectively erases
the pop-up window and restores the original screen.  The program then waits
for another keystroke, after which it releases the virtual page and returns
to DOS.

162   Fastgraph User's Guide


     The next example, 9-22, is similar to example 9-21, but it runs in a 320
by 200 color graphics mode instead of a text mode.  The main differences
between this program and example 9-21 are the use of 40-column text and the
use of screen space coordinates instead of character space coordinates in the
calls to fg_save, fg_restore, and fg_rect.  Note that the call to fg_allocate
creates a virtual page if the program is running in modes 4, 9, or 19.  In
mode 13, which has 8 true pages, the fg_allocate routine does nothing.

                                Example 9-22.

              main()
              {
                 int row;
                 int new_mode, old_mode;
                 char string[21];

                 new_mode = fg_bestmode(320,200,2);
                 if (new_mode < 0 || new_mode == 12) {
                    printf("This program requires a 320 ");
                    printf("x 200 color graphics mode.\n");
                    exit();
                    }
                 old_mode = fg_getmode();
                 fg_setmode(new_mode);

                 fg_setcolor(7);
                 fg_rect(0,319,0,199);
                 fg_setcolor(9);

                 for (row = 0; row < 25; row++) {
                    sprintf(string,"   This is row %2d   ",row);
                    fg_locate(row,0);
                    fg_text(string,20);
                    fg_text(string,20);
                    }
                 fg_waitkey();

                 fg_allocate(1);
                 fg_sethpage(1);
                 fg_save(96,223,88,111);
                 fg_setcolor(1);
                 fg_rect(96,223,88,111);
                 fg_setcolor(15);
                 fg_locate(12,13);
                 fg_text("Press any key.",14);
                 fg_waitkey();

                 fg_restore(96,223,88,111);
                 fg_waitkey();

                 fg_freepage(1);
                 fg_setmode(old_mode);
                 fg_reset();
              }

                                 Chapter 9:  Images and Image Management   163

     The fg_save and fg_restore routines each copy a rectangular region from
one video page to the same position on another video page.  What if you need
to copy the region to a different position on another video page, or perhaps
copy it elsewhere on the same video page?  Fastgraph provides a more general
image transfer routine named fg_transfer.  The fg_transfer routine copies a
rectangular region on any video page to any position on any video page.  Like
fg_save and fg_restore, the fg_transfer routine works in text and graphics
video modes.  In graphics modes, fg_transfer extends its x coordinates to
byte boundaries if necessary.

     The fg_transfer routine requires eight integer arguments.  The first
four arguments define the region to copy, in the same order as expected by
the fg_save and fg_restore routines.  The next two arguments define the lower
left corner of the image destination, while the final two arguments
respectively specify the source and destination video page numbers.  In
short, fg_transfer copies the specified region from the source page to the
specified position on the destination page.

     Example 9-23 is identical to example 9-21, but it uses fg_transfer
rather than fg_save and fg_restore.  We have arbitrarily chosen to copy the
region overwritten by the pop-up window to the lower left corner of the
hidden page (page 1).  When we copy this region back to the visual page, we
copy from the lower left corner of the hidden page back to the original
position on the visual page (page 0).  This sequence is shown in the
following diagram.

             (11,32)    (11,47)               (22,0)     (22,15)
              +--------------+  first call     +--------------+
              |This is row 11|  ------------>  |This is row 11|
              |This is row 12|                 |This is row 12|
              |This is row 13|  <------------  |This is row 13|
              +--------------+    second call  +--------------+
             (13,32)    (13,47)               (24,0)     (24,15)

                visual page (0)                  hidden page (1)

To copy one region to a new position and then back to its original position,
note how we make the fifth and sixth arguments in the first call to
fg_transfer the same values as the first and fourth arguments in the second
call.  Similarly, the fifth and sixth arguments in the second call must be
the same as the first and fourth arguments in the first call.  Now, here is
example 9-23.

                                Example 9-23.

                main()
                {
                   int row;
                   int old_mode;
                   char string[17];

                   old_mode = fg_getmode();

                   if (fg_testmode(3,2))
                      fg_setmode(3);
                   else if (fg_testmode(7,2))

164   Fastgraph User's Guide

                      fg_setmode(7);
                   else {
                      printf("This program requires\n");
                      printf("an 80-column display.\n");
                      exit();
                      }

                   fg_cursor(0);
                   fg_setattr(9,7,0);

                   for (row = 0; row < 25; row++) {
                      sprintf(string," This is row %2d ",row);
                      fg_locate(row,0);
                      fg_text(string,16);
                      fg_text(string,16);
                      fg_text(string,16);
                      fg_text(string,16);
                      fg_text(string,16);
                      }
                   fg_waitkey();

                   fg_allocate(1);
                   fg_transfer(32,47,11,13,0,24,0,1);
                   fg_setcolor(1);
                   fg_rect(32,47,11,13);
                   fg_setattr(15,1,0);
                   fg_locate(12,33);
                   fg_text("Press any key.",14);
                   fg_waitkey();

                   fg_transfer(0,15,22,24,32,13,1,0);
                   fg_fg_waitkey();

                   fg_freepage(1);
                   fg_setmode(old_mode);
                   fg_reset();
                }


     Example 9-24 illustrates another use of the fg_transfer routine.  This
example is functionally identical to example 9-17 (see page 153), but it uses
fg_transfer instead of fg_getmap and fg_drawmap.  By using the fg_transfer
routine, we eliminate the calls to fg_getmap and fg_drawmap, the two calls to
fg_move, and the 32-byte array needed to retrieve the image.  As an added
bonus, using fg_transfer is much faster than the technique of example 9-17,
although we probably won't notice this gain with such a small image.

     The image copied in example 9-24 is one row of four characters, so its
width in screen space is 32 pixels and its height is 8 pixels.  Because the
image is in the upper left corner of the screen, the image boundaries are
xmin=0, xmax=31, ymin=0, and ymax=7.  We want to move the image one-half
character cell (4 pixels) to the right and one row (8 pixels) down, so our
destination coordinates are x=4 (xmin+4) and y=15 (ymax+8).  Also, we are
copying the image from one position to another on the visual page, so both
the source and destination pages are 0.

                                 Chapter 9:  Images and Image Management   165
                                Example 9-24.

                main()
                {
                   int old_mode, new_mode;

                   new_mode = fg_bestmode(320,200,1);
                   if (new_mode < 0 || new_mode == 12) {
                      printf("This program requires a 320 ");
                      printf("x 200 color graphics mode.\n");
                      exit();
                      }

                   old_mode = fg_getmode();
                   fg_setmode(new_mode);

                   fg_setcolor(9);
                   fg_text("text",4);
                   fg_waitkey();

                   fg_transfer(0,31,0,7,4,15,0,0);
                   fg_waitkey();

                   fg_setmode(old_mode);
                   fg_reset();
                }

     Example 9-25 shows yet another application of the fg_transfer routine in
a graphics video mode.  The program displays a rectangle in the upper left
quadrant of the screen and then centers the word "quadrant" inside the
rectangle.  After waiting for a keystroke, the program uses fg_transfer to
first copy the upper left quadrant to the upper right quadrant.  It then uses
fg_transfer again to copy the upper half of the screen to the lower half.
The end result of this is the screen being filled with what was originally in
the upper left quadrant.

                                Example 9-25.

                main()
                {
                   int new_mode, old_mode;

                   new_mode = fg_bestmode(320,200,1);
                   if (new_mode < 0 || new_mode == 12) {
                      printf("This program requires a 320 ");
                      printf("x 200 color graphics mode.\n");
                      exit();
                      }
                   old_mode = fg_getmode();
                   fg_setmode(new_mode);

                   fg_setcolor(7);
                   fg_rect(0,159,0,99);
                   fg_setcolor(9);
                   fg_locate(6,6);
                   fg_text("quadrant",8);
                   fg_waitkey();

166   Fastgraph User's Guide

                   fg_transfer(0,159,0,99,160, 99,0,0);
                   fg_transfer(0,319,0,99,  0,199,0,0);
                   fg_waitkey();

                   fg_setmode(old_mode);
                   fg_reset();
                }

     The final routines pertaining to image transfer are fg_tcxfer and
fg_tcmask.  The fg_tcxfer routine is similar to fg_transfer in that it copies
a rectangular region from one position to another, but fg_tcxfer allows you
to treat one or more colors as transparent (the name fg_tcxfer stands for
"transparent color transfer").  In other words, any pixel whose color value
is defined to be transparent is not copied to the destination area.  The
fg_tcxfer routine's arguments are the same as for the fg_transfer routine,
but fg_tcxfer has no effect in text video modes.  Because fg_tcxfer must
examine the color of individual pixels, it is not as fast as the fg_transfer
routine, especially in the native EGA and VGA graphics video modes (modes 13
through 18).

     The fg_tcmask routine defines which colors are considered transparent in
subsequent calls to fg_tcxfer.  Its argument is an integer bit mask
(specifically, a 16-bit mask) where each bit indicates whether or not the
color is transparent.  For example, if bit 0 (the rightmost bit) is set in
the mask, then color 0 will be transparent; if bit 0 is reset, color 0 will
not be transparent.  Because the bit mask size is 16 bits, only the first 16
color values may be defined as transparent.

     Example 9-26 illustrates the use of the fg_tcxfer and fg_tcmask
routines.  This program is identical to example 9-25, except the color of the
word "quadrant" (color 9) is defined to be transparent, and fg_tcxfer is used
in place of fg_transfer.  Because color 9 maps to color 1 in the CGA four-
color graphics mode (mode 4), we must define both colors 1 and 9 to be
transparent (remember, fg_tcmask considers actual color values transparent,
not color indices).  The bit mask passed to fg_tcmask thus will be 0000 0010
0000 0010 binary, or 0202 hex.  The end result of this program is the same as
example 9-25, but the word "quadrant" appears in the background color (color
0) instead of color 9 in the upper right, lower left, and lower right
quadrants.

                                Example 9-26.

                main()
                {
                   int new_mode, old_mode;

                   new_mode = fg_bestmode(320,200,1);
                   if (new_mode < 0 || new_mode == 12) {
                      printf("This program requires a 320 ");
                      printf("x 200 color graphics mode.\n");
                      exit();
                      }
                   old_mode = fg_getmode();
                   fg_setmode(new_mode);

                   fg_setcolor(7);

                                 Chapter 9:  Images and Image Management   167

                   fg_rect(0,159,0,99);
                   fg_setcolor(9);
                   fg_locate(6,6);
                   fg_text("quadrant",8);
                   fg_waitkey();

                   fg_tcmask(0x0202);
                   fg_tcxfer(0,159,0,99,160, 99,0,0);
                   fg_tcxfer(0,319,0,99,  0,199,0,0);
                   fg_waitkey();

                   fg_setmode(old_mode);
                   fg_reset();
                }



Summary of Image Display Routines

     This section summarizes the functional descriptions of the Fastgraph
routines presented in this chapter.  More detailed information about these
routines, including their arguments and return values, may be found in the
Fastgraph Reference Manual.

     For all of the image display routines, images are positioned so that
their lower left corner is at the graphics cursor position (or text cursor
position for those routines that also work in text video modes).  For all of
the image transfer routines, Fastgraph extends the horizontal pixel
coordinates to a byte boundary when the routines are used in a graphics video
mode.

     FG_CLIPMASK displays a clipped image stored as a masking map.  This
routine has no effect when used in a text video mode.

     FG_CLPIMAGE displays a clipped image stored as a mode-specific bit map.
This routine has no effect when used in a text video mode.

     FG_DISPFILE displays an image stored in Fastgraph's standard or packed
pixel run format, where the image resides in an external file.  This routine
has no effect when used in a text video mode.

     FG_DISPLAY displays an image stored in Fastgraph's standard pixel run
format, where the image resides in an array.  This routine has no effect when
used in a text video mode.

     FG_DISPLAYP displays an image stored in Fastgraph's packed pixel run
format, where the image resides in an array.  This routine has no effect when
used in a text video mode.

     FG_DRAWMAP displays an image stored as a mode-independent bit map.  This
routine has no effect when used in a text video mode.

     FG_DRAWMASK displays an image stored as a masking map.  This routine has
no effect when used in a text video mode.

     FG_DRWIMAGE displays an image stored as a mode-specific bit map.
168   Fastgraph User's Guide

     FG_FLIPMASK displays a reversed clipped image stored as a masking map.
This routine has no effect when used in a text video mode.

     FG_FLPIMAGE displays a reversed clipped image stored as a mode-specific
bit map.  This routine has no effect when used in a text video mode.

     FG_GETHPAGE returns the hidden page number, as defined in the most
recent call to fg_sethpage.

     FG_GETIMAGE retrieves an image as a mode-specific bit map.

     FG_GETMAP retrieves an image as a mode-independent bit map.  This
routine has no effect when used in a text video mode.

     FG_PATTERN defines a display pattern for use with the fg_dispfile,
fg_display, or fg_displayp routines.  This routine has no effect when used in
a text video mode.

     FG_RESTORE copies an image from the hidden video page to the same
position on the active video page.

     FG_RESTOREW is identical to fg_restore, but the image extremes are
specified as world space coordinates.

     FG_REVIMAGE displays a reversed image stored as a mode-specific bit map.
This routine has no effect when used in a text video mode.

     FG_REVMASK displays a reversed image stored as a masking map.  This
routine has no effect when used in a text video mode.

     FG_SAVE copies an image from the active video page to the same position
on the hidden video page.

     FG_SAVEW is identical to fg_save, but the image extremes are specified
as world space coordinates.

     FG_SETHPAGE defines the hidden video page (used by fg_restore,
fg_restorew, fg_save, and fg_savew).

     FG_TCMASK defines which colors the fg_tcxfer routine will consider
transparent.  This routine has no effect when used in a text video mode.

     FG_TCXFER copies an image from any position on any video page to any
position on any video page, excluding any pixels whose color value is
transparent.  This routine has no effect when used in a text video mode.

     FG_TRANSFER copies an image from any position on any video page to any
position on any video page.  It is Fastgraph's most general image transfer
routine.


Chapter 10

Animation Techniques
170   Fastgraph User's Guide


Overview

     Unlike other microcomputers, the IBM PC and PS/2 family of systems do
not have any special graphics hardware or firmware to assist in performing
animation.  This means that any animation done on these systems must be
implemented entirely through software.  This chapter will describe how to do
this using Fastgraph's video page management and image management routines.
The methods described in this chapter are not intended to be all inclusive,
for that would itself fill a separate volume at least as large as this
manual.  However, the animation techniques presented here should provide a
basis that you can readily extend to develop more sophisticated uses of
animation.  The examples in this chapter are restricted to graphics video
modes.


Simple Animation

     The first type of animation we'll examine is called simple animation.
In simple animation, we display an object, erase it, and then display it in a
new position.  When we perform this "erase and redisplay" sequence
repetitively, the object moves.  This method, however, has two drawbacks.
First, unless the object is rather small, it will flicker because the erasing
and display of the object does not coincide with the refresh rate of the
video display.  Second, and perhaps more importantly, anything underneath the
object is not saved as the object moves across it.  Despite these
limitations, simple animation is sometimes useful, and it is a good place to
begin our discussion of animation techniques.

     Example 10-1 moves a small bright green rectangle (magenta in CGA) from
left to right across the screen in any 320 by 200 color graphics mode.  The
program moves the rectangle, which is 20 pixels wide and 10 pixels high,
using a for loop.  This loop first uses the fg_clprect routine to display the
rectangle, then uses the fg_waitfor routine to leave the object on the screen
momentarily, and finally uses fg_clprect again to erase the rectangle by
redisplaying it in the original background color (the fg_waitfor routine is
described in chapter 14).  We use fg_clprect rather than fg_rect because the
first few and last few loop iterations result in at least part of the
rectangle being off the screen.  Each successive loop iteration displays the
rectangle five pixels to the right of its previous position.

                                Example 10-1.

          main()
          {
             int new_mode, old_mode;
             int x;

             /* initialize the video environment */

             new_mode = fg_bestmode(320,200,1);
             if (new_mode < 0 || new_mode == 12) {
                printf("This program requires a 320 ");
                printf("x 200 color graphics mode.\n");
                exit();
                }

                                       Chapter 10:  Animation Techniques   171

             old_mode = fg_getmode();
             fg_setmode(new_mode);

             /* move the object across the screen */

             for (x = -20; x < 320; x+=5) {
                fg_setcolor(10);
                fg_clprect(x,x+19,95,104);
                fg_waitfor(1);
                fg_setcolor(0);
                fg_clprect(x,x+19,95,104);
                }

             /* restore the original video mode and return to DOS */

             fg_setmode(old_mode);
             fg_reset();
          }

     Example 10-2 is identical to example 10-1, but it shows what happens
when we move the rectangle across an existing background (in this case, the
background is solid white).  If you run this program, you'll see that the
rectangle leaves a trail of color 0 behind it.  While this might be
occasionally useful, it demonstrates that simple animation is destructive
because it does not preserve the background.  In this particular example, if
we changed the second call to fg_setcolor within the for loop so revert to
color 15 instead of color 0, the background would be restored.  In general,
though, it may not be this easy to replace the background, so we must rely on
some other method for preserving it.

                                Example 10-2.

          main()
          {
             int new_mode, old_mode;
             int x;

             /* initialize the video environment */

             new_mode = fg_bestmode(320,200,1);
             if (new_mode < 0 || new_mode == 12) {
                printf("This program requires a 320 ");
                printf("x 200 color graphics mode.\n");
                exit();
                }
             old_mode = fg_getmode();
             fg_setmode(new_mode);

             /* draw some type of background */

             fg_setcolor(15);
             fg_rect(0,319,0,199);

             /* move the object across the screen */

             for (x = -20; x < 320; x+=5) {

172   Fastgraph User's Guide

                fg_setcolor(10);
                fg_clprect(x,x+19,95,104);
                fg_waitfor(1);
                fg_setcolor(0);
                fg_clprect(x,x+19,95,104);
                }

             /* restore the original video mode and return to DOS */

             fg_setmode(old_mode);
             fg_reset();
          }

     To summarize, we see that simple animation is easy to implement, but it
is destructive and typically causes the animated object to flicker.  For
these reasons, it is not used too frequently.


XOR Animation

     "Exclusive or" animation, or XOR animation for short, is an interesting
extension of simple animation and is most useful when animating a single-
color object against a single-color background.  Like simple animation, it
uses the "erase and redisplay" technique to move an object, but it does this
differently.  Instead of erasing the object by displaying it in the
background color, XOR animation does so by displaying it in the same color
using an exclusive or, or XOR, operation.  This method relies on a specific
property of the exclusive or operator:

               (object XOR background) XOR object = background

In other words, if you XOR something twice in the same position, the end
result is the same as the original image in that position.

     Example 10-3 demonstrates XOR animation.  This program is similar to
example 10-2, but it only runs in the 320 by 200 EGA graphics mode (mode 13).
After establishing the video mode, it uses the Fastgraph routine fg_setfunc
to select XOR mode.  This causes any subsequent graphics output to be XORed
with the contents of video memory instead of just replacing it.  The
fg_setfunc routine is described further in chapter 15.

     The other differences between examples 10-3 and 10-2 are that the call
to fg_setcolor has been moved outside the for loop, and that fg_setcolor
takes a different value.  Since the existing background is bright white
(color 15), we can't just use color 10 if we want to display a bright green
object.  The desired value is that which when XORed with color 15 produces
color 10; the easiest way to obtain this value is to XOR these two numbers.
The call to fg_setcolor can be moved outside the loop because we display the
object using the same color index throughout.

                                Example 10-3.

          main()
          {
             int old_mode;
             int x;

                                       Chapter 10:  Animation Techniques   173

             /* initialize the video environment */

             if (fg_testmode(13,1) == 0) {
                printf("This program requires EGA.\n");
                exit();
                }
             old_mode = fg_getmode();
             fg_setmode(13);
             fg_setfunc(3);

             /* draw some type of background */

             fg_setcolor(15);
             fg_rect(0,319,0,199);

             /* move the object across the screen */

             fg_setcolor(10^15);
             for (x = -20; x < 320; x+=5) {
                fg_clprect(x,x+19,95,104);
                fg_waitfor(1);
                fg_clprect(x,x+19,95,104);
                }

             /* restore the original video mode and return to DOS */

             fg_setmode(old_mode);
             fg_reset();
          }


     Fastgraph only supports the XOR pixel operation in the native EGA and
VGA graphics video modes (modes 13 through 18).  Thus, you cannot use XOR
animation in CGA, Tandy/PCjr, Hercules, or MCGA graphics modes.

     While XOR animation is non-destructive (that is, it restores the
original background), it still suffers from the flickering encountered in
simple animation.  In spite of this, it may be useful when animating a
single-color object against a single-color background.


Static Frame Animation

     Static frame animation uses a different strategy than simple animation
or XOR animation.  The general scheme of this method is to create the entire
animation sequence off-screen and then successively display each item, or
frame, in this sequence on one position of the visual video page.  This
results in a visually appealing animation which is non-destructive and does
not include the flickering associated with simple animation and XOR
animation.  Static frame animation requires the visual video page and one or
more additional pages to implement.  The number of pages needed depends on
the number of frames and the size of each frame.

     Example 10-4 runs in any 320 by 200 color graphics video mode and
illustrates a simple use of static frame animation.  The program displays an
animation sequence containing 12 frames; it displays this sequence three
times.  The animation sequence consists of a bright green rectangle (magenta
174   Fastgraph User's Guide

in CGA) moving from left to right across the center of the frame.  Each frame
is 96 pixels wide and 50 pixels high.  The 12 frames are set up on an off-
screen video page as shown below.

                         0       95 96     191 192    287

                      0
                          frame 1    frame 2    frame 3
                     49

                     50
                          frame 4    frame 5    frame 6
                     99

                    100
                          frame 7    frame 8    frame 9
                    149

                    150
                          frame 10   frame 11   frame 12
                    199

     Example 10-4 first establishes the video mode and allocates the
additional video page (needed if using a video mode in which page 1 is a
virtual video page).  The program then generates the background for frame 1;
the background is a blue rectangle (cyan in CGA) with a white ellipse
centered on it.  After the call to fg_ellipse, the first frame is ready.

     The next step is to create the remaining 11 frames.  In frame 2, the
right half of the 20-pixel wide rectangle will enter the left edge of the
frame.  In frame 3, the rectangle will be ten pixels farther right, or
aligned against the left edge of the frame.  In frames 4 through 12, the
rectangle will be ten pixels farther right in each frame, so that by frame 12
only the left half of the rectangle appears on the right edge of the frame.
The first for loop in the program builds frames 2 through 12 by copying the
background from frame 1 and then displaying the rectangle (that is, the
animated object) in the proper position for that frame.

     The second for loop performs the animation sequence.  To display the 12-
frame sequence three times, it must perform 36 iterations.  The loop simply
copies each frame from the appropriate position on video page 1 to the middle
of the visual video page.  Note how the fg_waitfor routine is used to pause
momentarily between each frame.

                                Example 10-4.

       #define VISUAL 0
       #define HIDDEN 1

       int xmin[] = {  0, 96,192,  0, 96,192,  0, 96,192,  0, 96,192};
       int ymax[] = { 49, 49, 49, 99, 99, 99,149,149,149,199,199,199};

       main()
       {
          int new_mode, old_mode;
          int frame, offset;

                                       Chapter 10:  Animation Techniques   175

          int i, x, y;

          /* initialize the video environment */

          new_mode = fg_bestmode(320,200,2);
          if (new_mode < 0 || new_mode == 12) {
             printf("This program requires a 320 ");
             printf("x 200 color graphics mode.\n");
             exit();
             }
          old_mode = fg_getmode();
          fg_setmode(new_mode);
          fg_allocate(HIDDEN);

          /* draw the background in the upper left corner */

          fg_setpage(HIDDEN);
          fg_setcolor(1);
          fg_rect(0,95,0,49);
          fg_setcolor(15);
          fg_move(48,25);
          fg_ellipse(20,20);

          /* display the animated object against each background */

          fg_setcolor(10);
          offset = -10;
          for (i = 1; i < 12; i++) {
             x = xmin[i];
             y = ymax[i];
             fg_transfer(0,95,0,49,x,y,HIDDEN,HIDDEN);
             fg_setclip(x,x+95,0,199);
             fg_clprect(x+offset,x+offset+19,y-29,y-20);
             offset += 10;
             }

          /* slide the object across the background three times */

          for (i = 0; i < 36; i++) {
             frame = i % 12;
             x = xmin[frame];
             y = ymax[frame];
             fg_transfer(x,x+95,y-49,y,112,124,HIDDEN,VISUAL);
             fg_waitfor(2);
             }

          /* restore the original video mode and return to DOS */

          fg_freepage(HIDDEN);
          fg_setmode(old_mode);
          fg_reset();
       }

176   Fastgraph User's Guide


Dynamic Frame Animation

     Dynamic frame animation is similar to static frame animation, but the
all of the animation frames are built as needed during the animation sequence
instead of in advance.  When using this method, you must first store a copy
of the background on an off-screen video page.  Then, to build a frame,
create another copy (called the workspace) of the background elsewhere on the
off-screen page (or perhaps even to a different off-screen page) and display
the object on that copy.  Finally, transfer the workspace to the visual page.
Like static frame animation, this method produces a non-destructive, flicker-
free animation sequence.

     Example 10-5 is functionally identical to example 10-4, but it uses
dynamic rather than static frame animation.  As before, the program builds
the background in the upper left corner of video page 1, but it then uses
fg_transfer to copy it to the center of the visual video page.  The for loop
builds each frame as it is needed and likewise copies it to the center of the
visual page.  Again, fg_waitfor creates the necessary pause between frames.

                                Example 10-5.

         #define VISUAL 0
         #define HIDDEN 1

         main()
         {
            int new_mode, old_mode;
            int frame, offset;
            int i;

            /* initialize the video environment */

            new_mode = fg_bestmode(320,200,2);
            if (new_mode < 0 || new_mode == 12) {
               printf("This program requires a 320 ");
               printf("x 200 color graphics mode.\n");
               exit();
               }
            old_mode = fg_getmode();
            fg_setmode(new_mode);
            fg_allocate(HIDDEN);

            /* draw the background in the upper left corner */

            fg_setpage(HIDDEN);
            fg_setcolor(1);
            fg_rect(0,95,0,49);
            fg_setcolor(15);
            fg_move(48,25);
            fg_ellipse(20,20);

            /* copy it to the center of the visual page */

            fg_transfer(0,95,0,49,112,124,HIDDEN,VISUAL);


                                       Chapter 10:  Animation Techniques   177

            /* slide the object across the background three times */

            fg_setcolor(10);
            for (i = 0; i < 36; i++) {
               frame  = i % 12;
               offset = 10 * frame - 10;
               fg_transfer(0,95,20,29,112,105,HIDDEN,HIDDEN);
               fg_rect(112+offset,131+offset,96,105);
               fg_transfer(112,207,96,105,112,105,HIDDEN,VISUAL);
               fg_waitfor(2);
               }

            /* restore the original video mode and return to DOS */

            fg_freepage(HIDDEN);
            fg_setmode(old_mode);
            fg_reset();
         }


     Two items in example 10-5 merit further discussion.  First, we have
chosen our workspace on page 1 so that it uses the same screen space
coordinates as the image area on the visual page.  This is not necessary
unless you are using the fg_restore routine instead of fg_transfer.  Second,
the program is able to use the faster fg_rect routine in place of fg_clprect.
It can do this because even though the object will extend beyond the
workspace limits, we only transfer the workspace itself.  However, for this
to function properly, the workspace's horizontal limits must fall on byte
boundaries.

     Note too that we do not need to transfer the entire frame during the
animation sequence.  In example 10-5, we know the vertical extremes of the
moving image are y=96 and y=105, so we only transfer 10 rows instead of the
entire frame.  We could similarly compute the x extremes for each frame and
only transfer the necessary portion.  Recall, however, that fg_transfer
extends the horizontal coordinates to byte boundaries, so we may copy a few
extra pixels as well.  This may or may not affect the animation sequence.
Again, the problem is eliminated if you align your workspace on byte
boundaries.

     When we use dynamic frame animation, it is fairly easy to change the
number of frames in the animation sequence.  Suppose we wish to produce a
smoother animation by increasing the number of frames from 12 to 24.  This
means the object will move in increments of five pixels instead of ten.  The
only changes needed are to double the number of loop iterations, modify the
calculations for the frame number and offset values as shown below, and
reduce the fg_waitfor pause from 2 to 1.


                           frame  = i % 24;
                           offset = 5 * frame - 10;


Compare this to all of the changes that would be necessary if we were using
static frame animation.
178   Fastgraph User's Guide


Page Flipping

     Page flipping is a variation of frame animation in which you construct
images on off-screen video pages and then repetitively make those pages the
visual page.  We can further divide the page flipping technique into static
and dynamic variants, just as we did with frame animation.

     In static page flipping, we construct the entire animation sequence in
advance, with one frame per video page.  Once this is done, we can display
each frame by using the fg_setvpage routine to instantly switch from one
video page to another.  Although this produces a smooth, flicker-free
animation, we cannot carry the sequence very far before running out of video
pages (and hence animation frames).

     In dynamic page flipping, we construct each animation frame when it is
needed.  As in static page flipping, we construct each frame on a separate
video page.  However, as example 10-6 demonstrates, we only need three video
pages to produce the animation sequence, regardless of the number of frames
in the sequence.  Two of the three video pages will alternate as the visual
page, while the remaining video page keeps a copy of the background.

     Example 10-6, which performs an animation sequence similar to examples
10-4 and 10-5, illustrates dynamic frame animation in the 320 by 200 EGA
graphics video mode (mode 13).  The program begins by displaying the
background on video page 2.  Video pages 0 and 1 will alternate as the visual
page; the page that is not the visual page is called the hidden page.  We
start with page 0 as the visual page, and hence page 1 as the hidden page.
To build each frame, the program uses fg_transfer to copy the background from
page 2 to the hidden page and then uses fg_clprect to display the animated
object at the correct position on the hidden page.  After this, it displays
the next frame by using fg_setvpage to make the hidden page the visual page.
Before beginning the next iteration, the program toggles the hidden page
number in preparation for the next frame.

                                Example 10-6.

          main()
          {
             int old_mode;
             int hidden;
             int x;

             /* initialize the video environment */

             if (testmode(fg_13,3) == 0) {
                printf("This program requires EGA.\n");
                exit();
                }
             old_mode = fg_getmode();
             fg_setmode(13);

             /* draw the background on page two */

             fg_setpage(2);
             fg_setcolor(1);

                                       Chapter 10:  Animation Techniques   179

             fg_rect(0,319,0,199);
             fg_setcolor(15);
             fg_move(160,100);
             fg_ellipse(20,20);

             /* slide the object across the screen */

             hidden = 1;
             setcolor(10);
             for (x = -10; x < 320; x+=4) {
                fg_setpage(hidden);
                fg_transfer(0,319,0,199,0,199,2,hidden);
                fg_clprect(x,x+19,96,105);
                fg_setvpage(hidden);
                hidden = 1 - hidden;
                fg_waitfor(1);
                }

             /* restore the original video mode and return to DOS */

             fg_setmode(old_mode);
             fg_reset();
          }

     A problem with either page flipping technique arises if we use virtual
video pages.  Page flipping relies on the fact that changing the visual page
number occurs instantly, which is exactly what happens when we use physical
video pages.  However, such is not the case with virtual pages because
Fastgraph must copy the entire virtual page contents into video memory.
While this occurs quite rapidly, it is not instantaneous, and its effects are
immediately apparent on the animation.


Summary of Animation Techniques

     This chapter has presented five animation techniques:  simple animation,
XOR animation, static frame animation, dynamic frame animation, and page
flipping.  The following table summarizes their behavior.

                    technique  destructive?  flicker-free?


                    simple          yes           no
                    XOR             no            no
                    static frame    no            yes
                    dynamic frame   no            yes
                    page flipping   no            yes

Simple animation and XOR animation are elementary techniques that are seldom
used once you master the concepts of frame animation and page flipping.

     As stated at the beginning of this chapter, the simple examples
presented here serve as the basis for understanding the mechanics of the
animation techniques we have discussed.  In "real world" programs, you'll
typically want to display an image using the fg_drwimage or fg_drawmap
routines instead using rudimentary images such as the rectangles in our
180   Fastgraph User's Guide

examples.  A helpful rule is to use pixel run maps (displayed by fg_dispfile,
fg_display, or fg_displayp) for both backgrounds and moving objects, and then
use fg_getimage or fg_getmap to retrieve the moving objects as bit-mapped
images for later display.  Of course, it is desirable to do all of this
"behind the scenes" work on video pages other than the visual page.


Chapter 11

Special Effects
182   Fastgraph User's Guide


Overview

     This chapter will discuss the Fastgraph routines that help produce
special visual effects.  These include the ability to dissolve the screen
contents in small increments, scroll areas of the screen, and change the
physical origin of the screen.  The accompanying example programs illustrate
how to use these routines to produce some interesting effects.


Screen Dissolving

     Screen dissolving is the process of replacing the entire screen contents
in random small increments instead of all at once.  Fastgraph includes two
routines, fg_fadeout and fg_fadein, for this purpose.  The fg_fadeout routine
incrementally replaces the visual page contents with pixels of the current
color, while fg_fadein incrementally replaces the visual page contents with
the hidden page contents (that is, the page defined in the most recent call
to fg_sethpage).  Both routines accept an integer argument that defines the
delay between each incremental replacement.  A value of zero means to perform
the replacement as quickly as possible, while 1 is slightly slower, 2 is
slower yet, and so forth.  The fg_fadeout and fg_fadein routines have no
effect in text video modes.

     Example 11-1 shows how to use the fg_fadeout routine.  The program,
which runs in any graphics video mode, first fills the screen with a
rectangle of color 2.  After waiting for a keystroke, the program
incrementally replaces the screen contents with pixels of color 15 (the
current color index when fg_fadeout is called).  After another keystroke, the
program exits gracefully.

                                Example 11-1.

                  main()
                  {
                     int old_mode;

                     old_mode = fg_getmode();
                     fg_setmode(fg_automode());

                     fg_setcolor(2);
                     fg_rect(0,fg_getmaxx(),0,fg_getmaxy());
                     fg_waitkey();

                     fg_setcolor(15);
                     fg_fadeout(0);
                     fg_waitkey();

                     fg_setmode(old_mode);
                     fg_reset();
                  }


     Example 11-2 shows how to use the fg_fadein routine in any 320 by 200
color graphics video mode.  The program first fills the screen with a
rectangle of color 2 and then fills video page 1 with a rectangle of color 1.
After waiting for a keystroke, the program incrementally transfers the
                                            Chapter 11:  Special Effects   183

contents of page 1 to the visual page.  After the call to fg_fadein, both
page 0 (the visual page) and page 1 (the hidden page) will contain rectangles
of color 1 that fill the entire video page.  Finally, the program waits for
another keystroke before returning to DOS.

                                Example 11-2.

                main()
                {
                   int new_mode, old_mode;

                   new_mode = fg_bestmode(320,200,2);
                   if (new_mode < 0 || new_mode == 12) {
                      printf("This program requires a 320 ");
                      printf("x 200 color graphics mode.\n");
                      exit();
                      }
                   old_mode = fg_getmode();
                   fg_setmode(new_mode);
                   fg_allocate(1);
                   fg_sethpage(1);

                   fg_setcolor(2);
                   fg_rect(0,319,0,199);
                   fg_setpage(1);
                   fg_setcolor(1);
                   fg_rect(0,319,0,199);
                   fg_waitkey();

                   fg_fadein(0);
                   fg_waitkey();

                   fg_freepage(1);
                   fg_setmode(old_mode);
                   fg_reset();
                }


     You can also produce some appealing visual effects by replacing the
screen contents in a non-random fashion using the fg_restore or fg_transfer
routines.  For example, you could copy the hidden page contents to the visual
page with a through a series of concentric rectangular areas, each slightly
larger than the previous, until the entire screen is copied.  Another
interesting effect is to start around the screen perimeter and proceed toward
the screen center, thus producing a "snake-like" effect.  Experimenting with
such techniques may reveal other effects that suit your application.


Scrolling

     Another useful effect is scrolling, and Fastgraph provides a routine
that performs vertical scrolling within a given region of the active video
page.  The fg_scroll routine scrolls a region defined in screen space or
character space.  It can scroll up or down and offers two types of scrolling:
circular and end-off.  In circular scrolling, rows that scroll off one edge
of the defined region appear at its opposite edge.  In end-off scrolling,
184   Fastgraph User's Guide

such rows are simply wind up above or below the scrolling area.  The
following diagrams illustrate the two types of scrolling.

                end-off scrolling            circular scrolling

              before         after          before         after

                               C                             B
                 A                             A

                               A                             A
                 B                             B

     In these diagrams, the area bounded by the double lines is the scrolling
region, as specified in the call to fg_scroll.  Also, the scrolling direction
is assumed to be down (that is, toward the bottom of the screen), and the
number of rows to scroll is the height of the area designated B.  The number
of rows to scroll is often called the scrolling increment.

     For the end-off scrolling example, the scrolling operation transfers
region A downward so that part of it is copied into area B.  The area C
(which is the same size as area B) at the top of the scrolling region is
filled with pixels of the current color index (as defined in the most recent
call to fg_setcolor), and the original contents of area B are lost.  The
circular scrolling example also copies region A downward into the original
area B.  Unlike end-off scrolling, however, circular scrolling preserves the
area B by copying it to the opposite edge of the scrolling region.

     The fg_scroll routine takes six arguments.  The first four define the
scrolling region in the order minimum x coordinate, maximum x coordinate,
minimum y coordinate, and maximum y coordinate.  In graphics video modes, the
x coordinates are extended by byte boundaries (see page 158) if needed.  The
fifth argument is the scrolling increment.  It specifies the number of rows
to scroll.  If it is positive, the scrolling direction is toward the bottom
of the screen; if it is negative, the scrolling direction is toward the top
of the screen.  The sixth and final argument specifies the scroll type.  If
this value is zero, the scroll will be circular; if it is any other value,
the scroll will be end-off.  If the scroll type is circular, Fastgraph will
use the hidden page (as defined in the most recent call to fg_sethpage) as a
workspace (more specifically, the area bounded by the scrolling region
extremes on the hidden page will be used).  We'll now present three example
programs that use the fg_scroll routine.

     Example 11-3 runs in any 320 by 200 graphics video mode.  The program
displays two lines of text ("line one" and "line two") in the upper left
corner of the screen against a white background.  It then uses the fg_scroll
routine to move the second line down four pixel rows using an end-off scroll.
After waiting for a keystroke, the program again uses fg_scroll to move the
text back to its original position.  Note especially how the fg_setcolor
routine appears before the first call to fg_scroll to replace the "scrolled
off" rows with pixels of color 15, thus preserving the white background.

                                Example 11-3.

                main()
                {

                                            Chapter 11:  Special Effects   185

                   int new_mode, old_mode;

                   new_mode = fg_bestmode(320,200,1);
                   if (new_mode < 0 || new_mode == 12) {
                      printf("This program requires a 320 ");
                      printf("x 200 color graphics mode.\n");
                      exit();
                      }
                   old_mode = fg_getmode();
                   fg_setmode(new_mode);

                   fg_setcolor(15);
                   fg_rect(0,319,0,199);
                   fg_setcolor(10);
                   fg_text("line one",8);
                   fg_locate(1,0);
                   fg_text("line two",8);
                   fg_waitkey();

                   fg_setcolor(15);
                   fg_scroll(0,63,8,15,4,1);
                   fg_waitkey();
                   fg_scroll(0,63,12,19,-4,1);
                   fg_waitkey();

                   fg_setmode(old_mode);
                   fg_reset();
                }

     Example 11-4 is similar to example 11-3, but it runs in the 80-column
color text mode (mode 3).  In text modes, we cannot scroll half a character
row (four pixels) as in example 11-3, so the program scrolls the minimum one
row instead.

                                Example 11-4.

                         main()
                         {
                            int old_mode;

                            old_mode = fg_getmode();
                            fg_setmode(3);
                            fg_cursor(0);

                            fg_setcolor(7);
                            fg_rect(0,79,0,24);
                            fg_setattr(10,7,0);
                            fg_text("line one",8);
                            fg_locate(1,0);
                            fg_text("line two",8);
                            fg_waitkey();

                            fg_setcolor(7);
                            fg_scroll(0,7,1,1,1,1);
                            fg_waitkey();
                            fg_scroll(0,7,2,2,-1,1);

186   Fastgraph User's Guide

                            fg_waitkey();

                            fg_setmode(old_mode);
                            fg_reset();
                         }


     Example 11-5, the final scrolling example, demonstrates a circular
scroll.  The program runs in any 320 by 200 color graphics video mode; note
the use of video page 1 for the workspace required when the fg_scroll routine
performs a circular scroll.  The program first fills the screen with a light
blue rectangle (cyan in CGA), displays a smaller white rectangle in the
center of the screen, and then uses fg_move, fg_draw, and fg_paint to display
a light green star (magenta in CGA) within the white rectangle.  The program
executes a while loop to scroll the star upward in four pixel increments.
Because the scroll is circular, rows of the star that "scroll off" the top
edge of the white rectangle (whose height is the same as the scrolling
region) reappear at its bottom edge.  The use of fg_waitfor within the loop
simply slows down the scroll.  The scrolling continues until any key is
pressed.

                                Example 11-5.

                main()
                {
                   int new_mode, old_mode;

                   new_mode = fg_bestmode(320,200,2);
                   if (new_mode < 0 || new_mode == 12) {
                      printf("This program requires a 320 ");
                      printf("x 200 color graphics mode.\n");
                      exit();
                      }
                   old_mode = fg_getmode();
                   fg_setmode(new_mode);
                   fg_allocate(1);
                   fg_sethpage(1);

                   fg_setcolor(9);
                   fg_rect(0,319,0,199);
                   fg_setcolor(15);
                   fg_rect(132,188,50,150);

                   fg_setcolor(10);
                   fg_move(160,67);
                   fg_draw(175,107);
                   fg_draw(140,82);
                   fg_draw(180,82);
                   fg_draw(145,107);
                   fg_draw(160,67);
                   fg_paint(160,77);
                   fg_paint(150,87);
                   fg_paint(160,87);
                   fg_paint(170,87);
                   fg_paint(155,97);
                   fg_paint(165,97);

                                            Chapter 11:  Special Effects   187

                   while (kbhit() == 0) {
                      fg_waitfor(1);
                      fg_scroll(136,184,50,150,-4,0);
                      }
                   fg_waitkey();

                   fg_freepage(1);
                   fg_setmode(old_mode);
                   fg_reset();
                }



Changing the Screen Origin

     Fastgraph includes two routines for changing the screen origin.  By
changing the screen origin, we simply mean defining the (x,y) coordinate of
the upper left corner of the display area.  The fg_pan routine performs this
function in screen space, while the fg_panw routine does in world space.
Neither routine changes the graphics cursor position.

     Each of these routines has two arguments that specify the x and y
coordinates of the screen origin.  For the fg_pan routine, the arguments are
integer quantities.  For the fg_panw routine, they are floating point
quantities.

     In the native EGA and VGA graphics modes (modes 13 through 18), you can
set the screen origin to any (x,y) coordinate position (that is, to any
pixel).  In the other graphics modes, certain restrictions exist, as imposed
by specific video hardware.  These constraints limit the coordinate positions
that can be used as the screen origin.  Fastgraph compensates for these
restrictions by reducing the specified x and y coordinates to values that are
acceptable to the current video mode, as shown in the following table.


                           x will be reduced  y will be reduced
               video mode  to a multiple of:  to a multiple of:

                  4, 5             8                  2
                    6             16                  2
                    9              4                  4
                   11              8                  4
                   12              4                2 or 3
               19, 20, 21          4                  1


For example, in modes 4 and 5, the x coordinate will be reduced to a multiple
of 8 pixels, and the y coordinate will be reduced to a multiple of 2 pixels.
In the Hercules low resolution mode (mode 12), the y coordinate reduction
depends on whether or not the specified pixel row is scan doubled.

     Example 11-6 shows a useful effect that can be made with the fg_pan or
fg_panw routines.  This program uses the fg_automode routine to select a
video mode and then draws an unfilled rectangle in color 15 (bright white).
The top and bottom sides of the rectangle are intentionally drawn just
smaller than the physical screen size.  After waiting for a keystroke, the
188   Fastgraph User's Guide

program uses a for loop to make the rectangle jiggle up and down.  The
rectangle moves because the fg_pan routine is called inside the loop to
switch the screen origin between the rectangle's upper left corner and the
original origin.  Note also the use of the fg_waitfor routine to cause slight
delays after each call to fg_pan.  If we didn't use fg_waitfor, the changing
of the origin would occur so rapidly we wouldn't notice the effect.  Finally,
the program restores the original video mode and screen attributes before
returning to DOS.

                                Example 11-6.

                 #define DELAY 2
                 #define JUMP  4

                 main()
                 {
                    int i;
                    int old_mode;

                    old_mode = fg_getmode();
                    fg_setmode(fg_automode());

                    fg_setcolor(15);
                    fg_move(0,JUMP);
                    fg_draw(fg_getmaxx(),JUMP);
                    fg_draw(fg_getmaxx(),fg_getmaxy()-JUMP);
                    fg_draw(0,fg_getmaxy()-JUMP);
                    fg_draw(0,JUMP);
                    fg_waitkey();

                    for (i = 0; i < 6; i++) {
                       fg_pan(0,JUMP);
                       fg_waitfor(DELAY);
                       fg_pan(0,0);
                       fg_waitfor(DELAY);
                       }

                    fg_setmode(old_mode);
                    fg_reset();
                 }



Summary of Special Effects Routines

     This section summarizes the functional descriptions of the Fastgraph
routines presented in this chapter.  More detailed information about these
routines, including their arguments and return values, may be found in the
Fastgraph Reference Manual.

     FG_FADEIN incrementally replaces the visual page contents with the
hidden page contents.  This routine has no effect in text video modes.

     FG_FADEOUT incrementally replaces the visual page contents with pixels
of the current color.  This routine has no effect in text video modes.
                                            Chapter 11:  Special Effects   189

     FG_PAN changes the screen origin (the upper left corner of the screen)
to the specified screen space coordinates.  This routine has no effect in
text video modes.

     FG_PANW is the world space version of the fg_pan routine.

     FG_SCROLL vertically scrolls a region of the active video page.  The
scrolling may be done either up or down, using either an end-off or circular
method.  Circular scrolling uses part of the hidden page as a temporary
workspace.
190   Fastgraph User's Guide


Chapter 12

Input Device Support
192   Fastgraph User's Guide


Overview

     The selection of application input devices is an important part of
designing a program for the IBM PC and PS/2 family of systems.  The keyboard
and mouse are very popular, and in fact more and more applications,
especially those that utilize a graphical interface, actually require a mouse
to use the product.  Another input device, primarily used in entertainment
software, is the joystick.  Although not as popular as the mouse, the
joystick nevertheless can simplify the use of certain applications.
Fastgraph provides support for these three types of input devices, and this
chapter will discuss this in detail.


Keyboard Support

     Fastgraph's keyboard support includes routines to read keystrokes, check
the state of certain keys, and set the state of these keys.  These routines
are independent of the other parts of Fastgraph and thus do not require that
you call fg_setmode.  All of the keyboard-related routines work in text and
graphics video modes.

     The IBM PC and PS/2 keyboards produce two types of character codes --
standard codes and extended codes (extended codes are sometimes called
auxiliary codes).  The standard codes correspond to the 128 characters in the
ASCII character set.  In general, pressing keys on the main part of the
keyboard, or on the numeric keypad with NumLock turned on, will generate a
standard code.  The 128 extended codes are specific to the IBM PC and PS/2
keyboards.  Some common keystrokes that produce extended codes are keys on
the numeric keypad with NumLock turned off, the function keys, or pressing
Alt with another key.  The following tables show the all of the standard and
extended keyboard codes.
                                       Chapter 12:  Input Device Support   193

                       Table of standard keyboard codes

          key     code   key     code   key     code   key     code

          (none)    0    space    32    @        64    `        96
          Ctrl+A    1    !        33    A        65    a        97
          Ctrl+B    2    "        34    B        66    b        98
          Ctrl+C    3    #        35    C        67    c        99
          Ctrl+D    4    $        36    D        68    d       100
          Ctrl+E    5    %        37    E        69    e       101
          Ctrl+F    6    &        38    F        70    f       102
          Ctrl+G    7    '        39    G        71    g       103
          Ctrl+H    8    (        40    H        72    h       104
          Ctrl+I    9    )        41    I        73    i       105
          Ctrl+J   10    *        42    J        74    j       106
          Ctrl+K   11    +        43    K        75    k       107
          Ctrl+L   12    ,        44    L        76    l       108
          Ctrl+M   13    -        45    M        77    m       109
          Ctrl+N   14    .        46    N        78    n       110
          Ctrl+O   15    /        47    O        79    o       111
          Ctrl+P   16    0        48    P        80    p       112
          Ctrl+Q   17    1        49    Q        81    q       113
          Ctrl+R   18    2        50    R        82    r       114
          Ctrl+S   19    3        51    S        83    s       115
          Ctrl+T   20    4        52    T        84    t       116
          Ctrl+U   21    5        53    U        85    u       117
          Ctrl+V   22    6        54    V        86    v       118
          Ctrl+W   23    7        55    W        87    w       119
          Ctrl+X   24    8        56    X        88    x       120
          Ctrl+Y   25    9        57    Y        89    y       121
          Ctrl+Z   26    :        58    Z        90    z       122
          Ctrl+[   27    ;        59    [        91    {       123
          Ctrl+\   28    <        60    \        92    |       124
          Ctrl+]   29    =        61    ]        93    }       125
          Ctrl+^   30    >        62    ^        94    ~       126
          Ctrl+-   31    ?        63    _        95    Ctrl+BS 127

194   Fastgraph User's Guide

                       Table of extended keyboard codes

              code        key

               3          Ctrl+@
              15          Shift+Tab (back tab)
              16-25       Alt+Q to Alt+P (top row of letters)
              30-38       Alt+A to Alt+L (middle row of letters)
              44-50       Alt+Z to Alt+M (bottom row of letters)
              59-68       F1 to F10
              71          Home
              72          up arrow
              73          PgUp
              75          left arrow
              77          right arrow
              79          End
              80          down arrow
              81          PgDn
              82          Ins
              83          Del
              84-93       Shift+F1 to Shift+F10
              94-103      Ctrl+F1 to Ctrl+F10
              104-113     Alt+F1 to Alt+F10
              114         Ctrl+PrtSc
              115         Ctrl+left arrow
              116         Ctrl+right arrow
              117         Ctrl+End
              118         Ctrl+PgDn
              119         Ctrl+Home
              120-131     Alt+1 to Alt+= (top row of keys)
              132         Ctrl+PgUp


In addition, four keys generate the same standard codes as other control key
combinations.  These keys are:


                         key        same as  code

                         Backspace  Ctrl+H   8
                         Tab        Ctrl+I   9
                         Enter      Ctrl+M   13
                         Escape     Ctrl+[   27


     The CapsLock, NumLock, and ScrollLock keys do not generate a standard or
extended code when pressed.  Instead, they toggle between off and on states.


Reading Keystrokes

     When you press a key or key combination, the standard or extended code
representing that keystroke is stored in the ROM BIOS keyboard buffer.  This
buffer can hold up to 16 keystrokes and thus provides a type-ahead
capability.  Fastgraph includes three routines for reading keystroke
information from the keyboard buffer.  The fg_getkey routine reads the next
item in the keyboard buffer if one is available (that is, if a key has been
                                       Chapter 12:  Input Device Support   195

pressed).  If the keyboard buffer is empty (meaning no key has been pressed),
fg_getkey waits for a keystroke and then reports information about it.
Another routine, fg_intkey, reads the next keystroke from the keyboard buffer
if one is available.  If the keyboard buffer is empty, fg_intkey immediately
returns and reports this condition.  The fg_intkey routine is useful when a
program must continue performing a task until a key is pressed.  We've
already seen the third routine, fg_waitkey, which flushes the keyboard buffer
and then waits for another keystroke.  Unlike fg_getkey and fg_intkey,
fg_waitkey does not return any keystroke information.  It is most useful in
"press any key to continue" situations.

     Both the fg_getkey and fg_intkey routines require two one-byte arguments
passed by reference.  If the keystroke is represented by a standard keyboard
code, fg_getkey and fg_intkey return its code in the first argument and set
the second argument to zero.  Similarly, if the keystroke generates an
extended code, the routines return its code in the second argument and set
the first argument to zero.  If the fg_intkey routine detects an empty
keyboard buffer, it sets both arguments to zero.

     Example 12-1 is a simple program that uses the fg_getkey routine.  It
solicits keystrokes and then displays the two values returned by fg_getkey,
one of which will always be zero.  The variable key receives the key's
standard code, while aux receives its extended code.  Note that fg_getkey is
the only Fastgraph routine in the program; this can be done because the
keyboard support routines are logically independent from the rest of
Fastgraph.  The program returns to DOS when you press the Escape key.

                                Example 12-1.

               #define ESC 27

               main()
               {
                  unsigned char key, aux;

                  fg_getkey(&key,&aux);
                  while (key != ESC) {
                     printf("key = %3d  aux = %3d\n",key,aux);
                     fg_getkey(&key,&aux);
                     }
               }

     Example 12-2 reads keystrokes using the fg_intkey routine at half-second
intervals (18 fg_waitfor units equals one second).  As in the previous
example, the program displays the standard and extended codes for each
keystroke.  However, example 12-2 will continuously execute the while loop
even if no keystrokes are available, in which case the key and aux values
will both be zero.  The program returns to DOS when you press the Escape key.

                                Example 12-2.

               #define ESC 27

               main()
               {
                  unsigned char key, aux;

196   Fastgraph User's Guide


                  fg_intkey(&key,&aux);
                  while (key != ESC) {
                     printf("key = %3d  aux = %3d\n",key,aux);
                     fg_waitfor(9);
                     fg_intkey(&key,&aux);
                     }
               }


     When you use fg_intkey in a "tight" loop that does little else, you
should force a small delay within the loop by calling fg_waitfor as in
example 12-2.  Typically a delay of one or two clock ticks is sufficient.
Without this delay, the BIOS may not be able to process all keyboard
activity, and thus some keystrokes may not be available to your program.


Testing and Setting Key States

     As mentioned earlier, the CapsLock, NumLock, and ScrollLock keys do not
generate a standard or extended code when pressed but instead toggle between
off and on states.  Fastgraph includes routines for checking the state of
these keys, as well as setting the state of the CapsLock and NumLock keys.

     The Fastgraph routines fg_capslock, fg_numlock, and fg_scrlock
respectively read the state of the CapsLock, NumLock, and ScrollLock keys.
Each routine has no arguments and returns the key state as its function
value.  A return value of 0 means the associated key is in the off state,
while 1 indicates the key is in the on state.  If the keyboard does not have
a ScrollLock key, fg_scrlock considers the key off and returns a value of
zero.

     Example 12-3 is a simple program that uses the fg_capslock, fg_numlock,
and fg_scrlock routines to print messages describing the current state of
these three keys.

                                Example 12-3.

                    main()
                    {
                       if (fg_capslock())
                          printf("CapsLock is on.\n");
                       else
                          printf("CapsLock is off.\n");

                       if (fg_numlock())
                          printf("NumLock is on.\n");
                       else
                          printf("NumLock is off.\n");

                       if (fg_scrlock())
                          printf("ScrollLock is on.\n");
                       else
                          printf("ScrollLock is off.\n");
                    }

                                       Chapter 12:  Input Device Support   197

     You can also set the state of the CapsLock and NumLock keys within a
program.  Fastgraph includes two routines, fg_setcaps and fg_setnum, for this
purpose.  Each routine requires an integer argument that specifies the new
key state.  If the argument value is 0, the key will be turned off; if the
value is 1, the key will be turned on.  Example 12-4 uses fg_setcaps and
fg_setnum to turn off CapsLock and NumLock.

                                Example 12-4.

                              main()
                              {
                                 fg_setcaps(0);
                                 fg_setnum(0);
                              }


     On most keyboards, changing key states with fg_setcaps or fg_setnum will
also change the keyboard state light to reflect the new key state.  However,
some older keyboards, especially when used on PC, PC/XT, or Tandy 1000
systems, do not update the state light.  This makes the state light
inconsistent with the true key state.


Mouse Support

     The mouse is a very popular input and pointing device, especially in
graphically-oriented programs.  Fastgraph contains a number of routines to
support mice.  These routines perform such tasks as mouse initialization,
controlling and defining the mouse cursor, and reporting information about
the mouse position and button status.

     The underlying software that controls the mouse is called the mouse
driver.  Fastgraph's mouse support routines provide a high-level interface to
this driver.  The Microsoft Mouse and its accompanying mouse driver have
essentially become an industry standard, and other manufacturers of mice have
also made their mouse drivers Microsoft compatible.  For this reason, the
Fastgraph mouse support routines assume you are using a Microsoft or
compatible mouse driver.

     Unfortunately, not all mouse drivers are created equal.  That is, some
drivers are not truly Microsoft compatible, even though they may be
advertised as such.  In some cases, these incompatibilities are rather
trivial, but others are significant.  For example, early versions of some
third party mouse drivers had real problems in the EGA graphics modes.  The
Microsoft mouse driver, the Logitech mouse driver (version 3.2 or above), and
the DFI mouse driver (version 3.00 or above) are known to work well with
Fastgraph's mouse support routines.  Any other Microsoft compatible mouse
driver should also work properly.


Initializing the Mouse

     There are two steps required to use Fastgraph's mouse support routines
within an application program.  First, you must install the mouse driver.
This is done prior to running the application, typically by entering the
command MOUSE at the DOS command prompt.  Second, you must use the Fastgraph
routine fg_mouseini to initialize the mouse within the program.
198   Fastgraph User's Guide


     The fg_mouseini routine has no arguments and returns a "success or
failure" indicator as its function value.  If the return value is -1, it
means fg_mouseini could not initialize the mouse (either because the mouse
driver is not installed, or the driver is installed but the mouse is
physically disconnected).  The fg_mouseini routine will also return -1 when
used in video modes 20 and 21 because there is no mouse support available in
these video modes.  If fg_mouseini returns a positive integer value, then the
mouse initialization was successful.  The value itself indicates the number
of buttons (either 2 or 3) on the mouse.  If you don't call fg_mouseini, or
if fg_mouseini can't initialize the mouse, none of Fastgraph's other mouse
support routines will have any effect.

     Example 12-5 illustrates how to initialize the mouse.  Unlike the
keyboard support routines, Fastgraph's mouse support routines require that
fg_setmode first be called.  In this example, we simply pass fg_setmode the
value -1 to initialize Fastgraph for whatever video mode is in effect when we
run the program.  The program then calls fg_mouseini and prints a message
indicating whether or not the initialization was successful.  If it was, the
message includes the number of buttons on the mouse.

                                Example 12-5.

               main()
               {
                  int status;

                  fg_setmode(-1);
                  status = fg_mouseini();

                  if (status < 0)
                     printf("Mouse not available.\n");
                  else
                     printf("%d button mouse found.\n",status);
               }


     You should be aware that certain Microsoft-compatible mouse drivers do
not fully initialize the mouse when a program changes video modes.  This
problem most frequently occurs when you restore the original video mode at
the end of a program that has called fg_mouseini.  When changing video modes,
it is recommended that you first make the mouse cursor invisible (this is
described in the next section), change the video mode, and then call
fg_mouseini again to initialize the mouse for the new video mode.


Controlling the Mouse Cursor

     The mouse cursor indicates the current position of the mouse.  By
default, the cursor is a small white arrow in graphics modes and a one-
character rectangle in text modes.  After you use fg_mouseini to initialize
the mouse, the mouse cursor is invisible.  To make it visible, you must use
the fg_mousevis routine.  This routine has a single integer argument that
defines the mouse cursor visibility.  If it is 0, the mouse cursor will be
invisible; if it is 1, the mouse cursor becomes visible.
                                       Chapter 12:  Input Device Support   199

     If the mouse cursor is in an area of the screen that is being updated,
or if it moves into this area during the update process, you must make the
mouse cursor invisible.  Instead of checking if the mouse cursor is within
such an area, it is generally more convenient just to make the mouse cursor
invisible during screen updates and then make it visible again when the
updating is finished.

     After you initialize the mouse, the cursor is positioned in the center
of the screen.  Moving the mouse of course changes the cursor position, but
you can also position the mouse cursor with the Fastgraph routine
fg_mousemov.  This routine has two arguments that specify the new horizontal
and vertical cursor position.  The position is expressed in screen space
units for graphics modes, while it is expressed in character cells for text
modes.  The fg_mousemov routine moves the cursor whether or not it is
currently visible.

     Sometimes it is useful to restrict the mouse cursor to a specific area
of the screen.  The Fastgraph routine fg_mouselim prevents the mouse cursor
from moving outside the specified rectangular area.  It requires four
arguments that specify the minimum horizontal coordinate, maximum horizontal
coordinate, minimum vertical coordinate, and maximum vertical coordinate of
this area.  Again, the coordinates are expressed in screen space units for
graphics modes and character cells for text modes.

     One of the most important functions of the mouse driver is to translate
the horizontal and vertical mouse movements into a position on the screen.
The mouse reports these movements to the mouse driver in units called mickeys
(one mickey is about 1/200 of an inch).  By default, moving the mouse 8
mickeys in the horizontal direction moves the mouse cursor one horizontal
pixel.  Similarly, moving the mouse 16 mickeys vertically moves the cursor
one vertical pixel.  Fastgraph provides a routine named fg_mousespd that can
change these values, which effectively allows you to control the speed at
which the mouse cursor moves relative to the movement of the mouse itself.
The fg_mousespd routine requires two arguments that define the number of
mickeys required for eight pixels of mouse cursor movement.  The first
argument specifies this for the horizontal direction, and the second for the
vertical direction.

     Example 12-6, which runs in any graphics mode, demonstrates the
fg_mousevis, fg_mousemov, fg_mouselim, and fg_mousespd routines.  The program
first establishes the video mode, initializes the mouse, and fills the screen
with a white rectangle.  Next, the program calls fg_mousevis to make the
mouse cursor visible and then calls fg_mouselim to restrict the mouse cursor
to an area one-fourth the size of the screen, centered in the middle of the
screen.  At this point you should move the mouse cursor around the screen to
see the effect of fg_mouselim and note the speed at which the cursor moves
relative to the mouse itself.  The program continues when you press any key.

     The program then uses fg_mousemov to move the mouse cursor to each
corner of the region established by fg_mouselim.  The call to fg_waitfor
keeps the cursor in each corner for two seconds, unless you move the mouse.
Note how the program tries to move the mouse cursor to each corner of the
screen, but since doing so would move the cursor outside the defined region
of movement, fg_mousemov just positions the cursor at the nearest point
possible within this region.  The last call to fg_mousemov moves the cursor
back to the middle of the screen.  After doing this, the program calls
fg_mousespd to change the mouse cursor speed.  The values passed to
200   Fastgraph User's Guide

fg_mousespd (16 and 32) are twice the defaults and therefore make you move
the mouse twice as far as before to move the mouse cursor the same distance.
When you run the program, compare the mouse sensitivity to the original
speed.  After a keystroke, the program returns to DOS.

                                Example 12-6.

               main()
               {
                  int maxx, maxy;
                  int old_mode;

                  old_mode = fg_getmode();
                  fg_setmode(fg_automode());

                  if (fg_mouseini() < 0) {
                     fg_setmode(old_mode);
                     fg_reset();
                     exit();
                     }

                  maxx = fg_getmaxx();
                  maxy = fg_getmaxy();
                  fg_setcolor(15);
                  fg_rect(0,maxx,0,maxy);

                  fg_mousevis(1);
                  fg_mouselim(maxx/4,3*maxx/4,maxy/4,3*maxy/4);
                  fg_waitkey();

                  fg_mousemov(0,0);
                  fg_waitfor(36);
                  fg_mousemov(maxx,0);
                  fg_waitfor(36);
                  fg_mousemov(maxx,maxy);
                  fg_waitfor(36);
                  fg_mousemov(0,maxy);
                  fg_waitfor(36);
                  fg_mousemov(maxx/2,maxy/2);
                  fg_mousespd(16,32);
                  fg_waitkey();

                  fg_setmode(old_mode);
                  fg_reset();
               }



Reporting the Mouse Status

     It is obviously important to be able to track the mouse position and
button status.  The Fastgraph routines fg_mousepos and fg_mousebut enable you
to do this.

     The fg_mousepos routine returns information about the current mouse
cursor position and button status.  It requires three integer arguments, all
passed by reference.  The first two arguments respectively receive the
                                       Chapter 12:  Input Device Support   201

horizontal and vertical coordinates of the mouse cursor.  These values are
expressed in screen space units for graphics modes and character cells for
text modes.  The third argument receives a three-bit mask containing the
button status as indicated below.


                  bit
                number  meaning

                   0    1 if left button pressed, 0 if not
                   1    1 if right button pressed, 0 if not
                   2    1 if middle button pressed, 0 if not


For example, if both the left and right buttons are pressed, the button
status will be set to 3.  If the mouse only has two buttons, bit 2 will
always be zero.

     Another routine, fg_mousebut, is available for returning the number of
button press or release counts that have occurred since the last check, or
since calling fg_mouseini.  Each mouse button maintains its own separate
counters, so fg_mousebut returns this information for a specific button.
Additionally, fg_mousebut returns the horizontal and vertical position of the
mouse cursor at the time the specified button was last pressed or released.

     The fg_mousebut routine takes four integer arguments, of which the last
three are passed by reference.  The first argument specifies the button of
interest (1 means the left button, 2 is the right button, and 3 is the middle
button).  If this value is positive, button press counts will be reported.
If it is negative, release counts will be reported.  The second, third, and
fourth arguments respectively receive the press or release count, the
horizontal mouse cursor position at the time of the last press or release,
and the vertical position at that same time.  If the press or release count
is zero, the mouse cursor position is returned as (0,0).  The coordinate
positions are expressed in screen space units for graphics modes and
character cells for text modes.

     Example 12-7 runs in any graphics video mode and illustrates the use of
the fg_mousepos and fg_mousebut routines.  The program first establishes the
video mode and then initializes the mouse (the program exits if the
initialization fails).  It next fills the entire screen with a white
rectangle and then calls fg_mousevis to make the mouse cursor visible.

     The main part of example 12-7 is a while loop that polls the mouse at
three-second intervals (the call fg_waitfor(54) delays the program for three
seconds).  Within the loop, the program first uses fg_mousebut to obtain the
number of times the left mouse button was pressed in the last three seconds.
Following this, the fg_mousepos routine obtains the current mouse position.
The program then displays this information in the upper left corner of the
screen; note how fg_mousevis is used to make the cursor invisible during
graphics operations.  The program continues until you press the right mouse
button, checked by the call to fg_mousebut at the end of the loop.

202   Fastgraph User's Guide
                                Example 12-7.

          main()
          {
             int old_mode;
             int buttons, count;
             int x, y;
             char string[25];

             old_mode = fg_getmode();
             fg_setmode(fg_automode());

             if (fg_mouseini() < 0) {
                fg_setmode(old_mode);
                fg_reset();
                exit();
                }

             fg_setcolor(15);
             fg_rect(0,fg_getmaxx(),0,fg_getmaxy());

             fg_mousevis(1);
             count = 0;

             while (count == 0) {
                fg_waitfor(54);
                fg_mousebut(1,&count,&x,&y);
                fg_mousepos(&x,&y,&buttons);
                sprintf(string,"X=%3d  Y=%3d  count=%4d",x,y,count);
                fg_mousevis(0);
                fg_setcolor(15);
                fg_rect(0,fg_xconvert(25),0,fg_yconvert(1));
                fg_setcolor(0);
                fg_locate(0,0);
                fg_text(string,24);
                fg_mousevis(1);
                fg_mousebut(2,&count,&x,&y);
                }

             fg_setmode(old_mode);
             fg_reset();
          }



Defining the Mouse Cursor

     By default, the mouse cursor is a small white arrow in graphics modes
and a one-character rectangle in text modes.  In graphics modes, you can
change the mouse cursor to any 16 by 16 pixel image with the Fastgraph
routine fg_mouseptr (in the CGA four-color graphics modes, the cursor size is
8 by 16 pixels).  You cannot change the mouse cursor shape in text modes, but
you can use the Fastgraph routine fg_mousecur to define how it interacts with
existing characters on the screen.
                                       Chapter 12:  Input Device Support   203

Text Modes

     To change the mouse cursor in text modes, you must first define two 16-
bit quantities called the screen mask and cursor mask.  The following figure
defines the format of each mask.


                       bits      meaning

                       0 to 7    ASCII character value
                       8 to 11   foreground color
                       12 to 14  background color
                       15        blink


Notice how this structure parallels the character and attribute bytes
associated with each character cell.  The default screen mask is 77FF hex,
and the default cursor mask is 7700 hex.

     When you position the mouse over a specific character cell, the mouse
driver uses the current screen and cursor masks to determine the mouse
cursor's appearance.  First, the mouse driver logically ANDs the screen mask
with the existing contents of that character cell.  It then XORs that result
with the cursor mask to display the mouse cursor.

     For example, consider how the mouse cursor is produced in the 80-column
color text mode (mode 3).  Suppose a specific character cell contains the
ASCII character 0 (48 decimal, 30 hex) and an attribute byte that specifies a
white (color 15) foreground on a blue background (color 1) and does not blink
(blink bit 0).  The binary structure of the character and its attribute are:

                            attribute    character

                            0 001 1111   00110000


Now let's see what happens when we apply the screen and cursor masks to the
character and its attribute.


            attribute/character   0001 1111 0011 0000   (1F30 hex)
            default screen mask   0111 0111 1111 1111   (77FF hex)
                                  -------------------
            result of AND         0001 0111 0011 0000   (1730 hex)
            default cursor mask   0111 0111 0000 0000   (7700 hex)
                                  -------------------
            result of XOR         0110 0000 0011 0000   (6030 hex)


The resulting character (30 hex) is the original character, but the new
attribute (60 hex) represents a black foreground with a brown background and
does not blink.  As long as the mouse cursor remains positioned on this
character cell, it would appear black on brown.
204   Fastgraph User's Guide

     When we use the default screen and cursor masks, the mouse cursor will
always display the original character and it will not blink.  The cursor
foreground color will be 15-F, where F is the displayed character's
foreground color.  Similarly, the cursor background color will be 7-B, where
B is the displayed character's background color.  The default masks will
virtually always produce a satisfactory mouse cursor.

     It is possible, however, to change the appearance of the mouse cursor in
text modes by using your own screen and cursor masks.  The Fastgraph routine
fg_mousecur does just that.  It expects two arguments, the first being the
cursor mask and the second the screen mask.  Example 12-8 demonstrates the
use of fg_mousecur.  The program displays some text and uses the default
mouse cursor.  After waiting for a keystroke, the program calls fg_mousecur
to define a new mouse cursor.  The new cursor is similar to the default
cursor, but it displays the foreground colors in the opposite intensity as
the default cursor.  The program then waits for another keystroke before
returning to DOS.

                                Example 12-8.

                  main()
                  {
                     int old_mode;
                     int row;

                     old_mode = fg_getmode();
                     fg_setmode(3);

                     if (fg_mouseini() < 0) {
                        fg_setmode(old_mode);
                        fg_reset();
                        exit();
                        }

                     fg_setattr(7,0,0);
                     fg_rect(0,fg_getmaxx(),0,fg_getmaxy());

                     fg_setattr(12,7,0);
                     for (row = 0; row < 25; row++) {
                        fg_locate(row,34);
                        fg_text("example 12-8",12);
                        }

                     fg_mousevis(1);
                     fg_waitkey();
                     fg_mousecur(0x7FFF,0x7F00);
                     fg_waitkey();

                     fg_setmode(old_mode);
                     fg_reset();
                  }

                                       Chapter 12:  Input Device Support   205

Graphics Modes

     Defining the mouse cursor in graphics video modes also requires creating
a screen mask and cursor mask, but as one might expect, the structure of
these masks is vastly different than for text modes.  In fact, it closely
resembles the mode-independent bit map format used by the fg_drawmap routine.
Although their structure differs, the way the mouse driver uses the masks is
the same as in the text modes.  That is, the driver displays the mouse cursor
by first logically ANDing video memory with the screen mask, and then XORing
that result with the cursor mask.

     Let's begin by looking at the masks for the default mouse cursor in
graphics modes.  The size of each mask (and hence the mouse cursor) is 16
pixels wide and 16 pixels high.  As mentioned earlier, the default cursor is
a small white arrow with a black outline around it.  Here are its screen and
cursor masks expressed as binary values.

            screen                  cursor                  cursor
             mask                    mask                 appearance

       1001111111111111        0000000000000000         **
       1000111111111111        0010000000000000         *x*
       1000011111111111        0011000000000000         *xx*
       1000001111111111        0011100000000000         *xxx*
       1000000111111111        0011110000000000         *xxxx*
       1000000011111111        0011111000000000         *xxxxx*
       1000000001111111        0011111100000000         *xxxxxx*
       1000000000111111        0011111110000000         *xxxxxxx*
       1000000000011111        0011111111000000         *xxxxxxxx*
       1000000000001111        0011111000000000         *xxxxx*****
       1000000011111111        0011011000000000         *xx*xx*
       1000100001111111        0010001100000000         *x* *xx*
       1001100001111111        0000001100000000         **  *xx*
       1111110000111111        0000000110000000              *xx*
       1111110000111111        0000000110000000              *xx*
       1111111000111111        0000000000000000               ***

     The mouse driver first ANDs the screen mask with video memory at the
mouse cursor position.  This means the screen mask 1 bits leave video memory
intact, while the 0 bits change the corresponding pixels to black.  Next, the
mouse driver XORs the result with the cursor mask.  This time the cursor mask
0 bits leave video memory unchanged, while the 1 bits change the
corresponding pixels to white.  This produces a mouse cursor as shown above
on the right, where a dot ( ) represents an unchanged pixel, an asterisk (*)
a black pixel, and an x a white pixel.  The following table summarizes the
cursor appearance for all possible combinations of mask bits.


           screen mask bit  cursor mask bit  resulting cursor pixel

                  0                0         black
                  0                1         white
                  1                0         unchanged
                  1                1         inverted

206   Fastgraph User's Guide

     The color of an "inverted" pixel is n-k, where n is the maximum color
number in the current video mode, and k is the color of the pixel being
replaced.  Also, "black" and "white" pixels are not necessarily these colors
in 16-color and 256-color modes.  More correctly, "black" pixels are
displayed in the color assigned to palette 0, and "white" pixels are the
displayed in the color assigned to palette 15.  If you're using the CGA color
modes, "black" pixels are displayed in the background color, and "white"
pixels appear in color 3 (whose actual color is determined by the selected
CGA palette).

     With an understanding of the way the default mouse cursor works in
graphics modes, we're now ready to define our own mouse cursor.  Shown below
are the screen mask, cursor mask, and resulting appearance for a solid plus-
shaped cursor.  The hexadecimal equivalents of the binary mask values are
also given.

   ----- screen mask ----      ----- cursor mask ----
                                                                cursor
        binary       hex            binary       hex          appearance

   1110000000111111  E03F      0000000000000000  0000      ...*******......
   1110000000111111  E03F      0000111110000000  0F80      ...*xxxxx*......
   1110000000111111  E03F      0000111110000000  0F80      ...*xxxxx*......
   0000000000000111  0007      0000111110000000  0F80      ****xxxxx****...
   0000000000000111  0007      0111111111110000  7FF0      *xxxxxxxxxxx*...
   0000000000000111  0007      0111111111110000  7FF0      *xxxxxxxxxxx*...
   0000000000000111  0007      0111111111110000  7FF0      *xxxxxxxxxxx*...
   0000000000000111  0007      0111111111110000  7FF0      *xxxxxxxxxxx*...
   0000000000000111  0007      0111111111110000  7FF0      *xxxxxxxxxxx*...
   0000000000000111  0007      0000111110000000  0F80      ****xxxxx****...
   1110000000111111  E03F      0000111110000000  0F80      ...*xxxxx*......
   1110000000111111  E03F      0000111110000000  0F80      ...*xxxxx*......
   1110000000111111  E03F      0000000000000000  0000      ...*******......
   1111111111111111  FFFF      0000000000000000  0000      ................
   1111111111111111  FFFF      0000000000000000  0000      ................
   1111111111111111  FFFF      0000000000000000  0000      ................

If we wanted to make the mouse cursor hollow rather than solid, the masks and
resulting cursor appearance would look like this.
                                       Chapter 12:  Input Device Support   207

   ----- screen mask ----      ----- cursor mask ----
                                                                cursor
        binary       hex            binary       hex          appearance

   1110000000111111  E03F      0000000000000000  0000      ...*******......
   1110111110111111  EFBF      0000000000000000  0000      ...*.....*......
   1110111110111111  EFBF      0000000000000000  0000      ...*.....*......
   0000111110000111  0F87      0000000000000000  0000      ****.....****...
   0111111111110111  7FF7      0000000000000000  0000      *...........*...
   0111111111110111  7FF7      0000000000000000  0000      *...........*...
   0111111111110111  7FF7      0000001000000000  0200      *.....x.....*...
   0111111111110111  7FF7      0000000000000000  0000      *...........*...
   0111111111110111  7FF7      0000000000000000  0000      *...........*...
   0000111110000111  0F87      0000000000000000  0000      ****.....****...
   1110111110111111  EFBF      0000000000000000  0000      ...*.....*......
   1110111110111111  EFBF      0000000000000000  0000      ...*.....*......
   1110000000111111  E03F      0000000000000000  0000      ...*******......
   1111111111111111  FFFF      0000000000000000  0000      ................
   1111111111111111  FFFF      0000000000000000  0000      ................
   1111111111111111  FFFF      0000000000000000  0000      ................

Note that the center bit defined in the cursor mask causes the corresponding
pixel in video memory to be inverted.

     There is one more item needed to define a graphics mode mouse cursor
completely.  That item is the hot spot, or the actual screen position used or
reported by the mouse driver.  For the plus-shaped cursors just constructed,
it would be sensible to define the hot spot in the center of the plus.  The
hot spot is specified relative to the upper left corner of the cursor, so its
position within the cursor would be (6,6) -- that is, six pixels to the right
and six pixels below the upper left corner.  You can specify the hot spot
offsets using negative values or values above 15 to position it outside the
mouse cursor matrix if desired.

     The Fastgraph routine fg_mouseptr defines a mouse cursor in graphics
modes.  The first of its three arguments is a 32-element integer array,
passed by reference.  The array's first 16 elements contain the screen mask,
and its second 16 elements contain the cursor mask.  The remaining two
arguments respectively specify the horizontal and vertical offsets for the
hot spot.  The fg_mouseptr routine has no effect in a text video mode.

     Example 12-9 is similar to example 12-8.  It shows how to define a
graphics mode mouse cursor using fg_mouseptr.  The values stored in the solid
and hollow arrays define the screen and cursor masks for the solid and hollow
plus-shaped mouse cursors discussed earlier.  After making the mouse cursor
visible, the program uses the default mouse cursor until a key is pressed.
Following this, it changes to the solid cursor.  After another keystroke, the
program changes to the hollow cursor.  The program waits for yet another
keystroke before returning to DOS.  When you run example 12-9, you should
compare the physical differences between the three mouse cursors it uses.

208   Fastgraph User's Guide
                                Example 12-9.

   int solid[]  = {0xE03F,0xE03F,0xE03F,0x0007,0x0007,0x0007,0x0007,0x0007,
                   0x0007,0x0007,0xE03F,0xE03F,0xE03F,0xFFFF,0xFFFF,0xFFFF,
                   0x0000,0x0F80,0x0F80,0x0F80,0x7FF0,0x7FF0,0x7FF0,0x7FF0,
                   0x7FF0,0x0F80,0x0F80,0x0F80,0x0000,0x0000,0x0000,0x0000};

   int hollow[] = {0xE03F,0xEFBF,0xEFBF,0x0F87,0x7FF7,0x7FF7,0x7FF7,0x7FF7,
                   0x7FF7,0x0F87,0xEFBF,0xEFBF,0xE03F,0xFFFF,0xFFFF,0xFFFF,
                   0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0200,0x0000,
                   0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000};

   main()
   {
      int old_mode;
      int column, row, last_row;

      old_mode = fg_getmode();
      fg_setmode(fg_automode());

      if (fg_mouseini() < 0) {
         fg_setmode(old_mode);
         fg_reset();
         exit();
         }

      fg_setcolor(15);
      fg_rect(0,fg_getmaxx(),0,fg_getmaxy());

      fg_setcolor(12);
      column = fg_xalpha(fg_getmaxx()/2) - 6;
      last_row = fg_yalpha(fg_getmaxy()) + 1;

      for (row = 0; row < last_row; row++) {
         fg_locate(row,column);
         fg_text("example 12-9",12);
         }

      fg_mousevis(1);
      fg_waitkey();
      fg_mouseptr(solid,6,6);
      fg_waitkey();
      fg_mouseptr(hollow,6,6);
      fg_waitkey();

      fg_setmode(old_mode);
      fg_reset();
   }

                                       Chapter 12:  Input Device Support   209

CGA Considerations

     The mouse driver treats the screen and cursor masks differently in the
CGA four-color graphics modes (modes 4 and 5) than in the other graphics
modes.  In the CGA modes, each pair of mask bits corresponds to one pixel.
This means the masks more closely resemble the mode-specific format used by
fg_drwimage instead of the mode-independent format of fg_drawmap.

     Fastgraph uses a different default mouse cursor for modes 4 and 5.  Its
screen and cursor masks, as well as the resulting cursor appearance, are
shown in the following diagram.
210   Fastgraph User's Guide

                screen                  cursor              cursor
                mask                    mask             appearance

           0000111111111111        0000000000000000        **
           0000001111111111        0011000000000000        ***
           0000000011111111        0011110000000000        ****
           0000000000111111        0011111100000000        *****
           0000000000001111        0011111111000000        ******
           0000000000000011        0011111111110000        *******
           0000000000000011        0011111100000000        *******
           0000000000111111        0011111110000000        *****
           0000000000001111        0011000011000000        ******
           0000110000001111        0000000011000000        ** ***
           1111111100000011        0000000000110000            ***
           1111111100000011        0010000000110000            ***
           1111111111000011        0000000000000000             **
           1111111111111111        0000000000000000
           1111111111111111        0000000000000000
           1111111111111111        0000000000000000

As you can see, the resulting mouse cursor is eight pixels wide instead of
16.

     Another important point concerning mouse cursors in modes 4 and 5 is the
possibility of pixel bleeding, or the changing of colors within the mouse
cursor as it moves horizontally.  Bleeding will occur if you use the bit
pairs 01 or 10 in either mask to represent a pixel.  In the default masks for
modes 4 and 5, note that only the binary values 00 and 11 appear as bit
pairs.  Keep this in mind if you create your own masks in these video modes.


Joystick Support

     The third type of input device supported by Fastgraph is the joystick.
Although joysticks are not as popular as mice, they generally are preferable
in cases where a user's reactions are critical, such as in an arcade-style
game.  Fastgraph includes routines for initializing a joystick, reading a
joystick's position or button status, and making a joystick behave
analogously to the keyboard.  These routines are independent of the rest of
Fastgraph and thus do not require that you first call the fg_setmode routine.

     Joysticks are connected to a system by means of a game port.  The PCjr
and Tandy 1000 systems come equipped with two game ports, and hence support
two joysticks.  On other systems in the IBM family, you can install a game
port card that contains either one or two game ports.  If the card only has
one game port, you can use a splitter cable to fork two joysticks into the
port.


Initializing Joysticks

     Before you can use any of Fastgraph's joystick support routines with a
specific joystick, you must initialize that joystick.  The fg_initjoy routine
performs this task.  This routine requires a single integer argument that
specifies which joystick to initialize, either 1 or 2.  If successful,
fg_initjoy returns 0 as the function value.  If the machine has no game port,
or if the requested joystick is not connected to the game port, fg_initjoy
                                       Chapter 12:  Input Device Support   211

returns -1.  When you use fg_initjoy, the joystick being initialized must be
centered (that is, the stick itself must not be tilted in either direction).

     Example 12-10 uses the fg_initjoy routine to attempt to initialize both
joysticks.  For each joystick, the program prints a message stating whether
or not the initialization was successful.

                                Example 12-10.

                 main()
                 {
                    if (fg_initjoy(1) < 0)
                       printf("Joystick 1 not available.\n");
                    else
                       printf("Joystick 1 found.\n");

                    if (fg_initjoy(2) < 0)
                       printf("Joystick 2 not available.\n");
                    else
                       printf("Joystick 2 found.\n");
                 }



Reporting Joystick Status

     Each joystick is capable of reporting three items:  its horizontal
position, its vertical position, and the button status.  Fastgraph includes
routines for obtaining each of these quantities.

     The fg_getxjoy and fg_getyjoy routines respectively return the
horizontal and vertical position of the indicated joystick.  Both routines
require a single integer argument, whose value is either 1 or 2, to identify
the joystick.  The requested position is returned as the function value.
Horizontal coordinates increase as the joystick moves to the right, while
vertical coordinates increase as the joystick moves downward.  If fg_initjoy
failed to initialize the specified joystick, or if your program hasn't yet
called fg_initjoy, both fg_getxjoy and fg_getyjoy will return the value -1.

     Joystick characteristics vary more than those of any other input device.
The values returned by fg_getxjoy and fg_getyjoy depend on the system's
processor speed and the brand of joystick used.  It often suffices just to
know the joystick position relative to its previous position, in which case
the actual coordinate values do not matter.  However, if you must rely on
specific coordinate values, your program must perform some type of manual
joystick calibration and then scale the coordinates reported by fg_getxjoy
and fg_getyjoy as needed.

     The other piece of information joysticks provide is the button status.
Most joysticks have two buttons, called the top and bottom buttons.  Others
have three buttons, but one of them duplicates the functionality of another
(for example, a joystick might have one bottom button on its left side and
another on its right side).  The Fastgraph routine fg_button returns the
joystick button status as its function value.  Like fg_getxjoy and
fg_getyjoy, the fg_button routine requires a single argument that specifies
the joystick number.  The meaning of the returned value is shown below.
212   Fastgraph User's Guide


                    value  meaning

                      0    neither button pressed
                      1    top button pressed
                      2    bottom button pressed
                      3    top and bottom buttons pressed


     It is not necessary to call fg_initjoy before using fg_button.  If the
specified joystick is not present, the fg_button routine will return a value
of 0.

     Example 12-11 uses fg_getxjoy, fg_getyjoy, and fg_button to poll both
joysticks at half-second intervals.  It then displays the joystick number (1
or 2), horizontal position, vertical position, and button status for each
joystick.  As the program runs, you can move the joysticks and watch how the
movements affect the displayed coordinate values.  The program continues
doing this until you press Ctrl/C or Ctrl/Break to stop it.

                                Example 12-11.

                  main()
                  {
                     int b, x, y;

                     fg_initjoy(1);
                     fg_initjoy(2);

                     while (1) {
                        x = fg_getxjoy(1);
                        y = fg_getyjoy(1);
                        b = fg_button(1);
                        printf("1:  %3d %3d %1d\n",x,y,b);
                        x = fg_getxjoy(2);
                        y = fg_getyjoy(2);
                        b = fg_button(2);
                        printf("2:  %3d %3d %1d\n\n",x,y,b);
                        fg_waitfor(9);
                        }
                  }


     There are two ways of effectively monitoring joystick button status.
One is to call fg_button at numerous places in your program and then take
appropriate action depending on the button status.  However, the preferable
method is to extend the BIOS time-of-day interrupt to check the button status
at each clock tick (there are 18.2 clock ticks per second), set a flag if a
button is pressed, and then check the flag as needed in your program.
Information on modifying the BIOS time-of-day interrupt appears in Appendix C
of this document.
                                       Chapter 12:  Input Device Support   213

Keyboard Emulation

     Although we can use the fg_getxjoy and fg_getyjoy routines to monitor
relative joystick movements, it is usually easier to do this with another
Fastgraph routine, fg_intjoy.  This routine is similar to the fg_intkey
routine in that it returns two values that are equivalent to the standard or
extended keyboard codes for analogous keystrokes.

     The fg_intjoy routine needs three arguments.  The first argument
specifies the joystick number, either 1 or 2.  The second and third
arguments, both one-byte quantities passed by reference, receive the standard
and extended keyboard codes analogous to the joystick movement and button
status.  The second argument receives a value of 13 (the standard keyboard
code for the Enter key) if any joystick button is pressed; it receives a
value of 0 if not.  The third argument receives a value corresponding to the
extended keyboard code for one of the directional keys on the numeric keypad,
as summarized in the following table.

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

The fg_intjoy routine will set both key code arguments to zero if the
specified joystick has not yet been initialized.

     Example 12-12 is similar to example 12-10, but it uses fg_intjoy in
place of fg_getxjoy and fg_getyjoy to report relative joystick position.
This program does not report the joystick button status as example 12-10
does, but you could readily add this feature to it.

                                Example 12-12.

                   main()
                   {
                      char key, aux;

                      fg_initjoy(1);
                      fg_initjoy(2);

                      while (1) {
                         fg_intjoy(1,&key,&aux);
                         printf("1: %2d %2d\n",key,aux);
                         fg_intjoy(2,&key,&aux);
                         printf("2: %2d %2d\n\n",key,aux);
                         fg_waitfor(9);
                         }
                   }

214   Fastgraph User's Guide




Special Joystick Considerations

     If you develop a program that supports only one joystick, you should use
joystick 1.  The reasons for this are twofold.  First, it will make your
program consistent with most other products that support joysticks.  Second,
and perhaps more importantly, many Tandy 1000 series machines cannot
determine if joystick 2 is present when neither joystick is connected.  This
means if you use joystick 2 instead of joystick 1 in a single joystick
program, you won't be able to tell if a joystick is available when running on
a Tandy 1000.


Summary of Input Routines

     This section summarizes the functional descriptions of the Fastgraph
routines presented in this chapter.  More detailed information about these
routines, including their arguments and return values, may be found in the
Fastgraph Reference Manual.

     FG_BUTTON returns information about the state of either joystick's
buttons.

     FG_CAPSLOCK determines the state of the CapsLock key.

     FG_GETKEY waits for a keystroke (or reads the next entry from the BIOS
keyboard buffer). It returns the keystroke's standard or extended keyboard
code.

     FG_GETXJOY and FG_GETYJOY return the horizontal and vertical coordinate
position of the specified joystick.  The actual coordinates depend on the
processor speed and brand of joystick used.

     FG_INITJOY initializes joystick 1 or 2 and must be called before using
fg_getxjoy, fg_getyjoy, or fg_intjoy.  It returns a status code indicating
whether or not the initialization was successful.

     FG_INTJOY returns the standard and extended keyboard codes analogous to
the current position and button status of the specified joystick.

     FG_INTKEY reads the next entry from the BIOS keyboard buffer and returns
the keystroke's standard or extended keyboard code.  It is similar to
fg_getkey, but it does not wait for a keystroke if the keyboard buffer is
empty.

     FG_MOUSEBUT returns information about mouse button press or release
counts, as well as the mouse cursor position at the time of the last button
press or release.

     FG_MOUSECUR defines the appearance of the mouse cursor in text video
modes.

     FG_MOUSEINI initializes the mouse and must be called before any of
Fastgraph's other mouse support routines.  It returns an error status if the
mouse driver has not been loaded, or if the mouse is not connected.
                                       Chapter 12:  Input Device Support   215


     FG_MOUSELIM defines the rectangular area in which the mouse cursor may
move.

     FG_MOUSEMOV moves the mouse cursor to the specified character cell (in
text modes) or screen space position (in graphics modes).

     FG_MOUSEPOS returns the current mouse position and button status.

     FG_MOUSEPTR defines the shape and appearance of the mouse cursor in
graphics video modes.

     FG_MOUSESPD defines the number of mickey units per eight pixels of
cursor movement.  This effectively controls the speed at which the mouse
cursor moves relative to the movement of the mouse itself.

     FG_MOUSEVIS makes the mouse cursor visible or invisible.

     FG_NUMLOCK determines the state of the NumLock key.

     FG_SCRLOCK determines the state of the ScrollLock key (which is not
present on some keyboards).

     FG_SETCAPS controls the state of the CapsLock key.

     FG_SETNUM controls the state of the NumLock key.

     FG_WAITKEY flushes the BIOS keyboard buffer (that is, removes any type-
ahead characters) and then waits for another keystroke.
216   Fastgraph User's Guide


Chapter 13

Sound Effects
218   Fastgraph User's Guide


Overview

     In the realm of the IBM PC and PS/2 family of systems, a sound is
defined by its frequency, duration, and volume.  The frequency of a sound is
measured in units called Hertz.  While the PC and PS/2 can produce sounds
ranging from 18 to over 1 million Hertz, the average human can hear sounds
between 20 and about 20,000 Hertz.  The length of a sound, called its
duration, is expressed in clock ticks; there are either 18.2 of 72.8 clock
ticks per second, depending on the method used to produce the sound.
Finally, the volume determines the loudness of the sound.  As we'll see in
this chapter, we can control a sound's volume only on the PCjr and Tandy 1000
systems.

     Fastgraph contains several different methods for producing sound
effects.  These include single tones, a series of tones expressed
numerically, or a series of tones expressed as musical notes.  The sound
effects may be discrete, continuous, or performed at the same time as other
activity.  The sound-related routines are independent of the other parts of
Fastgraph and do not require any initialization routines be called.


Sound Sources

     All members of the PC and PS/2 families can produce sounds using the
8253-5 programmable timer chip and the internal speaker.  This method is
essentially limited to producing single sounds of given frequencies and
durations, although we can combine these sounds to create interesting audio
effects or play music.  When we use this technique, we have no control over
the sound volume.  In fact, sound volumes often vary slightly on different
systems because the physical properties of the speaker and its housing are
not always identical.

     The PCjr and Tandy 1000 systems have an additional, more powerful chip
for producing sounds.  This is the Texas Instruments SN76496A sound chip,
called the TI sound chip for short.  The TI sound chip has three independent
voice channels for producing pure tones, and a fourth channel for generating
periodic or white noise.  Each voice channel has a separate volume control
that allows us to control the loudness of the sound it emits.


Synchronous Sound

     A sound effect is said to be synchronous if it is produced while no
other activity is being performed.  In other words, a program makes a
synchronous sound by starting the sound, waiting for a specified duration,
and then stopping the sound.  The program must wait for the sound to complete
before doing anything else.  As long as the duration is relatively short, the
fact that the sound is synchronous has little or no effect on the program's
execution speed.  Fastgraph includes routines for producing synchronous sound
using either the 8253-5 programmable timer or the TI sound chip.

     The fg_sound routine uses the programmable timer to produce a sound of a
given frequency and duration.  The frequency, defined by the first argument,
is expressed in Hertz and must be an integer value between 18 and 32,767.
The second argument defines the duration and is expressed in clock ticks;
                                              Chapter 13:  Sound Effects   219

there are 18.2 clock ticks per second.  If the duration is zero or negative,
the sound will continue until it is stopped with the fg_quiet routine.

     Example 13-1 uses the fg_sound routine to create different sound
effects, pausing for one second between each.  It first produces three
distinct sounds of 20, 100, and 1,000 Hertz.  Each of these sounds lasts for
approximately 1/6 of a second (three clock ticks).  The program then makes a
warbling noise by quickly alternating sounds of similar frequencies.
Finally, the program creates a sliding tone of increasing frequencies between
100 and 500 Hertz.  Each tone in this sequence lasts for two clock ticks, so
it takes about 4.5 seconds to play the entire sequence.  In all cases,
example 13-1 displays an identifying message just before each sound.

                                Example 13-1.

              main()
              {
                 int freq;

                 printf("20 Hz tone...\n");
                 fg_sound(20,3);
                 fg_waitfor(18);

                 printf("100 Hz tone...\n");
                 fg_sound(100,3);
                 fg_waitfor(18);

                 printf("1000 Hz tone...\n");
                 fg_sound(1000,3);
                 fg_waitfor(18);

                 printf("warble...\n");
                 fg_sound(400,1);
                 fg_sound(410,1);
                 fg_sound(400,1);
                 fg_sound(410,1);
                 fg_waitfor(18);

                 printf("sliding tone from 100 to 500 Hz...\n");
                 for (freq = 100; freq <= 500; freq+=10)
                    fg_sound(freq,2);
              }


     The fg_voice routine is analogous to the fg_sound routine, but it uses
the TI sound chip rather than the programmable timer to create sound.  For
this reason, the fg_voice routine can only be used on the PCjr or Tandy 1000
systems.  The TI sound chip allows us to control the volume of a sound, and
it also offers four distinct voice channels.  Thus, fg_voice requires two
additional arguments besides frequency and duration to define the voice
channel and sound volume.

     The first argument to fg_voice defines the voice channel, as shown
below.
220   Fastgraph User's Guide


                     value  meaning

                       1    voice channel #1
                       2    voice channel #2
                       3    voice channel #3
                       4    voice channel #4, periodic noise
                       5    voice channel #4, white noise


If we use voice channels 1, 2, or 3, the second argument defines the sound
frequency in Hertz, between 18 and 32,767.  If we use voice channel 4,
however, the second argument instead is a value that represents a specific
frequency, as shown in this table.


                           value  frequency

                             0     512 Hertz
                             1    1024 Hertz
                             2    2048 Hertz


The third argument defines the sound volume.  It must be between 0 and 15,
where 0 is silent and 15 is loudest.  The fourth argument defines the sound
duration in clock ticks.  As with the fg_sound routine, there are 18.2 clock
ticks per second, and if the duration is zero or negative, the sound will
continue until stopped with the fg_quiet routine.

     Example 13-2 uses the fg_voice routine to create different sound effects
using the TI sound chip.  As in example 13-1, there is a pause of one second
between each.  The program first calls the fg_testmode routine to verify it
is running on a PCjr or Tandy 1000 system (video mode 9 is only available on
these systems).  If so, the program uses voice channel #4 to produce a 2,048
Hertz periodic noise, followed by white noise of the same frequency.  Both
sounds are emitted at the maximum volume level (15) and last for about 1/6 of
a second each (three clock ticks).  After these noises, example 13-2 produces
a 500 Hertz tone of increasing volume.  In all cases, the program displays an
identifying message just before each sound.

                                Example 13-2.

             main()
             {
                int volume;

                if (fg_testmode(9,0) == 0) {
                   printf("This program requires a PCjr or ");
                   printf("a Tandy 1000 system.\n");
                   exit();
                   }

                                              Chapter 13:  Sound Effects   221

                printf("2048 Hz periodic noise...\n");
                fg_voice(4,2,15,3);
                fg_waitfor(18);

                printf("2048 Hz white noise...\n");
                fg_voice(5,2,15,3);
                fg_waitfor(18);

                printf("500 Hz tone of increasing volume...\n");
                for (volume = 1; volume <= 15; volume++) {
                   fg_voice(1,500,volume,0);
                   fg_waitfor(4);
                   }

                fg_quiet();
             }


     Note how example 13-2 uses a duration of zero (continuous sound) and the
fg_waitfor routine to specify the duration for each volume level the 500
Hertz tone sequence.  This causes the transition between changes in volume to
blend better with each other.  The fg_quiet routine, which stops continuous
sound started with the fg_sound or fg_voice routines, ends the sound after
the final volume level.

     The fg_sound and fg_voice routines each produce a single sound.  We've
seen how we can combine sounds to produce sound effects, but still the
individual sounds are defined numerically -- that is, by a certain frequency
and duration.  It is often easier to create sounds in terms of musical notes,
and for this reason Fastgraph includes a routine fg_music that produces such
sounds.  The fg_music routine uses the programmable timer to produce
synchronous sound; it does not support the TI sound chip.

     The fg_music routine has a single argument called the music string,
which is passed by reference as a byte array or character string.  The music
string is simply a variable-length sequence of music commands, followed by a
dollar-sign ($) terminator.  Music commands are summarized in the following
table.


               command   meaning

               A thru G  Play the specified note in the current
                         octave.

               #         May be appended to a note character (A
                         through G) to make that note sharp.

               .         May be appended to a note character (A
                         through G) or a sharp (#) to extend that note
                         by half its normal length.  Multiple dots may
                         be used, and each one will again extend the
                         note by half as much as the previous
                         extension.

               Ln        Set the length of subsequent notes and
                         pauses.  The value of n is an integer between
222   Fastgraph User's Guide

                         1 and 64, where 1 indicates a whole note, 2 a
                         half note, 4 a quarter note, and so forth.
                         If no L command is present, L4 is assumed.

               On        Set the octave for subsequent notes.  The
                         value of n may be an integer between 0 and 6
                         to set a specific octave.  It can also be a
                         plus (+) or minus (-) character to increment
                         or decrement the current octave number.
                         Octave 4 contains middle C, and if no O
                         command is present, O4 is assumed.

               P         Pause (rest) for the duration specified by
                         the most recent L command.

               Sn        Set the amount of silence between notes.  The
                         value of n is an integer between 0 and 2.  If
                         n is 0, each note plays for the full period
                         set by the L command (music legato).  If n is
                         1, each note plays for 7/8 the period set by
                         the L command (music normal).  If n is 2,
                         each note plays for 3/4 the period set by the
                         L command (music staccato).  If no S command
                         is present, S1 is assumed.

               Tn        Set the tempo of the music (the number of
                         quarter notes per minute).  The value of n is
                         an integer between 32 and 255.  If no T
                         command is present, T120 is assumed.

The fg_music routine ignores any other characters in the music string.  It
also ignores command values outside the allowable range, such as T20 or O8.

     Example 13-3 illustrates some uses of the fg_music routine.  The program
plays the first few bars of "Mary Had a Little Lamb", followed by the musical
scale (including sharps) in two octaves, and finally the introduction to
Beethoven's Fifth Symphony.  There is a pause of one second between each
piece of music, and the program displays the titles before playing the music.
Blank characters appear in the music strings to help make them more readable.

                                Example 13-3.


    main()
    {
       printf("Mary Had a Little Lamb...\n");
       fg_music("T150 L8 EDCDEEE P DDD P EGG P EDCDEEE L16 P L8 EDDEDC$");
       fg_waitfor(18);

       printf("up the scale in two octaves...\n");
       fg_music("L16 CC#DD#EFF#GG#AA#B O+ CC#DD#EFF#GG#AA#B$");
       fg_waitfor(18);

       printf("Beethoven's Fifth Symphony...\n");
       fg_music("T180 O2 L2 P L8 P GGG L2 D# L24 P L8 P FFF L2 D$");
    }

                                              Chapter 13:  Sound Effects   223



Asynchronous Sound

     Sounds made concurrently with other activity in a program are said to be
asynchronous.  Fastgraph's routines that produce asynchronous sound just
start the sound and then immediately return control to the calling program.
The sounds will automatically stop when the end of the sequence is reached,
and you can also stop it on demand before that time.  None of Fastgraph's
asynchronous sound routines have any effect if there is already asynchronous
sound in progress.  In addition, the asynchronous sound routines temporarily
disable the synchronous sound routines (fg_sound, fg_voice, and fg_music)
while asynchronous sound is in progress.

     To expand the range of sound effects and to play fast-tempo music,
Fastgraph temporarily quadruples the clock tick interrupt rate from 18.2 to
72.8 ticks per second while producing asynchronous sound.  Because many disk
controllers rely on the 18.2 tick per second clock rate to synchronize disk
accesses, your programs should not perform any disk operations when
asynchronous sound is in progress.

     The fg_sounds routine is the asynchronous version of the fg_sound
routine.  It uses the programmable timer to play a sequence of tones
simultaneous to other operations.  This routine expects as its first argument
a variable-length integer array, passed by reference, containing pairs of
frequency and duration values.  As with the fg_sound routine, each frequency
is expressed in Hertz and must be between 18 and 32,767.  The durations are
likewise measured in clock ticks, but because the interrupt rate is
quadrupled, there are 72.8 instead of 18.2 ticks per second.

     The format of the frequency and duration array passed to fg_sounds is
shown below.


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


Note that a null character (that is, a zero byte) terminates the array.  The
second argument passed to fg_sounds is an integer value indicating the number
of times to cycle through the frequency and duration array.  If this value is
224   Fastgraph User's Guide

negative, the sounds will continue until stopped with the fg_hush or
fg_hushnext routines.

     Example 13-4 uses the fg_sounds routine to play the 100 to 500 Hertz
sliding tone sequence of example 13-1.  To demonstrate the sounds are being
made concurrently with other operations, messages are displayed while the
sequence is playing.  This is controlled by the Fastgraph routine fg_playing,
which returns a value of 1 if asynchronous sounds are in progress, and 0 if
not.  Note how the duration must be specified as 8 clock ticks (instead of 2
as in example 13-1) to compensate for the quadrupled clock tick interrupt
rate.

                                Example 13-4.

                 main()
                 {
                    int i;
                    int freq;
                    int sound_array[83];

                    i = 0;

                    for (freq = 100; freq <= 500; freq+=10) {
                       sound_array[i++] = freq;
                       sound_array[i++] = 8;
                       }
                    sound_array[i] = 0;

                    fg_sounds(sound_array,1);

                    while(fg_playing())
                       printf("Still playing...\n");
                 }


     Just as the fg_sounds routine is analogous to the fg_sound routine,
there is a Fastgraph routine fg_voices that is similar to the fg_voice
routine.  That is, fg_voices uses the TI sound chip to play an asynchronous
sequence of tones.  Its arguments are identical to those of the fg_sounds
routine, but the structure of the sound array is different.  Its structure
is:
                                              Chapter 13:  Sound Effects   225


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


The channel numbers, frequencies, volumes, and durations must be in the same
ranges as discussed in the description of the fg_voice routine, except the
durations are quadrupled because of the accelerated clock tick interrupt
rate.  Again, note that a null character (that is, a zero byte) terminates
the array.

     Example 13-5 uses the fg_voices routine to play the 500 Hertz tone
sequence of increasing volume introduced in example 13-2.  As in example
13-4, the program displays messages while the tone sequence is playing to
demonstrate the sounds are being made concurrently with other operations.
Note how the duration is now 16 clock ticks (instead of 4 as in example 13-2)
because of the quadrupled clock tick interrupt rate.

                                Example 13-5.

           main()
           {
              int voice_array[61];
              int i;
              int volume;

              if (fg_testmode(9,0) == 0) {
                 printf("This program requires a PCjr or ");
                 printf("a Tandy 1000 system.\n");
                 exit();
                 }

              i = 0;

              for (volume = 1; volume <= 15; volume++) {
                 voice_array[i++] = 1;      /* use channel 1 */
                 voice_array[i++] = 500;    /* 500 Hz frequency */
                 voice_array[i++] = volume; /* variable volume */

226   Fastgraph User's Guide

                 voice_array[i++] = 16;     /* duration */
                 }
              voice_array[i] = 0;

              fg_voices(voice_array,1);

              while(fg_playing())
                 printf("Still playing...\n");
           }


     There is also an asynchronous version of the fg_music routine.  It is
called fg_musicb, and it uses the same format music string as the fg_music
routine does.  However, the fg_musicb routine has a second argument that
specifies the number of times to cycle through the music string.  If this
value is negative, the music will play repetitively until you stop it with
the fg_hush or fg_hushnext routine.

     Example 13-6 plays the same three pieces of music as example 13-3, but
it does so concurrently with other operations.  As the music plays, the
program continuously displays the title of each piece.  Note how we can take
advantage of the repetition in the music string for the "up the scale"
sequence by playing the sequence twice.

                                Example 13-6.

   main()
   {
      fg_musicb("T150 L8 EDCDEEE P DDD P EGG P EDCDEEE L16 P L8 EDDEDC$",1);
      while (fg_playing())
         printf("Mary Had a Little Lamb...\n");
      fg_waitfor(18);

      fg_musicb("L16 CC#DD#EFF#GG#AA#B O+$",2);
      while (fg_playing())
         printf("up the scale in two octaves...\n");
      fg_waitfor(18);

      fg_musicb("T180 O2 L2 P L8 P GGG L2 D# L24 P L8 P FFF L2 D$",1);
      while (fg_playing())
         printf("Beethoven's Fifth Symphony...\n");
   }

                                              Chapter 13:  Sound Effects   227

     Our final example pertaining to asynchronous sound demonstrates the
effects of the Fastgraph routines fg_hush and fg_hushnext, which stop sounds
started with the fg_sounds, fg_voices, or fg_musicb routines.  The fg_hush
routine immediately stops asynchronous sound, whereas the fg_hushnext routine
does so when the current cycle finishes.  Neither routine has any arguments,
and neither routine has any effect if no asynchronous sound is in progress.
Furthermore, note that fg_hushnext has no effect unless the asynchronous
sound is continuous.

     Example 13-7 runs in any text or graphics video mode.  It displays
rectangles in up to 16 colors while playing continuous asynchronous music.
The program periodically checks for keystrokes with the fg_intkey routine,
and it continues to play the music as long as there is no keyboard activity.
If you press the Escape key, the program uses fg_hush to stop the music
immediately; this causes an exit from the while loop.  If you press any other
key, the program uses fg_hushnext to stop the music as soon as the current
repetition finishes.  Once it does, the program exits the while loop because
fg_playing will return a value of zero.

                                Example 13-7.

      #define ESC 27

      main()
      {
         int color;
         int old_mode;
         unsigned char key, aux;

         old_mode = fg_getmode();
         fg_setmode(fg_automode());
         color = 0;

         fg_musicb("O4 L16 CC#DD#EFF#GG#AA#B O+ CC#DD#EFF#GG#AA#B$",-1);

         while (fg_playing())
         {
            color = (color + 1) & 15;
            fg_setcolor(color);
            fg_rect(0,fg_getmaxx(),0,fg_getmaxy());

            fg_waitfor(4);
            fg_intkey(&key,&aux);
            if (key == ESC)
               fg_hush();
            else if (key+aux != 0)
               fg_hushnext();
         }

         fg_setmode(old_mode);
         fg_reset();
      }

228   Fastgraph User's Guide



     Example 13-7 also demonstrates an important side-effect of the fg_musicb
routine when playing continuous music.  Any length, octave, silence, or tempo
values changed within the string are not reset to their original values at
the beginning of each repetition.  If we did not include the O4 command at
the beginning of the string, the later O+ command would cause the music to
play in octaves 4 and 5 during the first repetition, 5 and 6 during the
second repetition, and octave 6 for all subsequent repetitions (because you
cannot increase the octave number above 6).


Summary of Sound Routines

     This section summarizes the functional descriptions of the Fastgraph
routines presented in this chapter.  More detailed information about these
routines, including their arguments and return values, may be found in the
Fastgraph Reference Manual.

     FG_HUSH immediately stops asynchronous sound started with the fg_sounds,
fg_voices, or fg_musicb routines.

     FG_HUSHNEXT is similar to fg_hush, but it does not stop the asynchronous
sound until the current repetition finishes.

     FG_MUSIC uses the programmable timer to play a sequence of musical
tones.

     FG_MUSICB is the asynchronous version of the fg_music routine.  It uses
the programmable timer to play a sequence of musical tones, concurrent with
other activity.

     FG_PLAYING determines whether or not there is any asynchronous sound in
progress.

     FG_QUIET stops continuous synchronous sound started with the fg_sound or
fg_voice routines.

     FG_SOUND produces a tone of a specified frequency and duration using the
programmable timer.

     FG_SOUNDS is the asynchronous version of the fg_sound routine.  It can
play a series of tones of specified frequencies and durations, concurrent
with other activity.

     FG_VOICE produces a tone of a specified frequency, duration, and volume
using one of the TI sound chip's four voice channels.

     FG_VOICES is the asynchronous version of the fg_voice routine.  It can
play a series of tones of specified frequencies, durations, and volumes,
concurrent with other activity.


Chapter 14

Program Timing
230   Fastgraph User's Guide


Overview

     It is occasionally necessary to delay a program's execution for a brief
period, or to determine how long it takes to execute specific sections of a
program.  Fastgraph includes routines to accomplish these tasks.  Some of
these routines are said to be real-time, which means they are independent of
a system's processor speed, while the speed of others is processor-specific.
This chapter describes both classes of timing routines, all of which are
independent of the other parts of Fastgraph.


Real-Time Routines

     Real-time operations center around the BIOS time-of-day clock, which is
nothing more than a counter that the system automatically increments 18.2
times per second.  This number is often called the clock tick interrupt rate
because an interrupt routine performs the incrementing.  In addition, each
increment is usually called a clock tick.

     The Fastgraph routine fg_waitfor delays a program's execution by the
number of clock ticks specified as its argument.  Because fg_waitfor uses
clock ticks, the actual length of the delay is the same, regardless of the
system's processor speed.  Even when Fastgraph's asynchronous sound routines
quadruple the clock tick interrupt rate, Fastgraph compensates for this
internally so that fg_waitfor always works as though the actual rate were
still 18.2 times per second.

     Example 14-1 displays a message every five seconds that states how long
the program has been running.  The fg_waitfor routine produces the five-
second delay by pausing 91 (18.2 times 5) clock ticks before the program
displays each message.  The program returns to DOS when you press any key.

                                Example 14-1.

             main()
             {
                unsigned int seconds;
                unsigned char key, aux;

                seconds = 0;

                fg_intkey(&key,&aux);

                while (key+aux == 0) {
                   fg_waitfor(91);
                   seconds += 5;
                   printf("%u seconds have elapsed.\n",seconds);
                   fg_intkey(&key,&aux);
                }
             }


     Another common application of the fg_waitfor routine is to slow down a
loop that uses the fg_intkey routine to check for keystrokes.  In loops that
do little else, we may call fg_intkey too rapidly without this delay, and it
is then possible that the BIOS may not be able to store characters in its
                                             Chapter 14:  Program Timing   231

keystroke buffer fast enough.  A small delay, even one clock tick, often
helps such "tight" loops.

     The fg_getclock routine provides an efficient way to measure time,
especially differences in time.  This routine has no arguments and returns a
32-bit unsigned integer (as its function value) representing the number of
clock ticks since midnight.

     Example 14-2 demonstrates the fg_getclock routine.  In response to any
keystroke (except Escape, which returns control to DOS), the program displays
the number of clock ticks since midnight, and also the number since the
program started.  The FASTGRAF.H include file is needed in this example to
define fg_getclock as a function that returns a long integer.

                                Example 14-2.

      #include <fastgraf.h>
      #define ESC 27

      main()
      {
         unsigned long start, ticks;
         unsigned char key, aux;

         start = fg_getclock();

         fg_getkey(&key,&aux);

         while (key != ESC) {
            ticks = fg_getclock();
            printf("%lu ticks since midnight.\n",ticks);
            printf("%lu ticks since start of program.\n\n",ticks-start);
            fg_getkey(&key,&aux);
         }
      }




Routines Dependent on the System Speed

     The fg_waitfor routine described in the previous section is independent
of the system's processor speed.  This means the actual length of its delay
is the same on any system.  Another routine, fg_stall, is similar to
fg_waitfor, but its delay is proportional to the processor speed.  Like
fg_waitfor, fg_stall has a single integer argument that specifies the length
of the delay.  However, instead of being expressed in clock ticks, fg_stall
measures the delay in delay units.  The fg_stall routine treats the length as
an unsigned quantity, so the maximum number of delay units we can specify is
65,535.  The following table lists the approximate number of delay units per
clock tick on three typical systems.
232   Fastgraph User's Guide


                          system       delay units
                           type      per clock tick

                      Tandy 1000 HX        675
                      10 MHz 80286       3,000
                      25 MHz 80386      11,000


     Fastgraph includes a routine that determines the number of delay units
per clock tick for the current processor.  This is the fg_measure routine,
which has no arguments and returns the number of delay units per clock tick
as its function value.  Once we determine this value, we can use fg_stall to
delay a program's execution in real time.  This provides a much more refined
delay than the clock tick unit used by fg_waitfor.

     Example 14-3 is functionally identical to example 14-1, but it uses the
fg_stall routine instead of fg_waitfor to delay the program execution.  The
program first calls the fg_measure routine to determine number of delay units
equivalent to one clock tick.  It then passes this value to fg_stall, which
is called 91 times inside the for loop to create the five-second delay
(because 91 clock ticks equals five seconds).  The program returns to DOS
when you press any key.

                                Example 14-3.

             main()
             {
                int i;
                int units_per_tick;
                unsigned int seconds;
                unsigned char key, aux;

                seconds = 0;

                printf("Benchmarking system speed...\n");
                units_per_tick = fg_measure();
                printf("Benchmark completed.\n\n");

                fg_intkey(&key,&aux);

                while (key+aux == 0) {
                   for (i = 0; i < 91; i++)
                      fg_stall(units_per_tick);
                   seconds += 5;
                   printf("%u seconds have elapsed.\n",seconds);
                   fg_intkey(&key,&aux);
                }
             }


     One final point:  the fg_measure routine takes a few seconds to
benchmark the system speed accurately.  For this reason, you should only call
fg_measure once (typically at the beginning of the program) and use its
return value instead of calling fg_measure throughout the program.
                                             Chapter 14:  Program Timing   233


Summary of Timing Routines

     This section summarizes the functional descriptions of the Fastgraph
routines presented in this chapter.  More detailed information about these
routines, including their arguments and return values, may be found in the
Fastgraph Reference Manual.

     FG_GETCLOCK returns the number of clock ticks since midnight as its
function value.  This quantity is a 32-bit unsigned integer.

     FG_MEASURE returns the approximate number of delay units per clock tick
as its function value.  This quantity is proportional to the system's
processor speed.

     FG_STALL delays a program's execution for a given number of processor-
specific delay units.

     FG_WAITFOR delays a program's execution for a given number of clock
ticks.  There are 18.2 clock ticks per second, regardless of the system's
processor speed.
234   Fastgraph User's Guide


Chapter 15

Miscellaneous Routines
236   Fastgraph User's Guide


Overview

     There are a few remaining Fastgraph routines that really don't fit into
any of the categories discussed so far.  For this reason, they are described
separately in this chapter.


Determining Available Memory

     The fg_memavail routine returns the amount of free memory (in bytes)
available to DOS.  It returns the amount of memory as its function value,
which is a 32-bit unsigned integer.  Fg_memavail has no arguments.

     Example 15-1 uses fg_memavail to show the effects of allocating and
releasing virtual pages.  When run in a video mode in which video pages 1 and
2 are physical pages, the amount of free memory remains the same because
these pages use memory that is resident on the video adapter.  However, in
modes where pages 1 and 2 are virtual pages, the amount of free memory
decreases after each call to fg_allocate and returns to its original value
after the calls to fg_freepage.  Note how the program requests the video
mode, and that we must include the FASTGRAF.H file to define fg_memavail as a
function that returns a long integer.

                                Example 15-1.

       #include <fastgraf.h>

       main()
       {
          long original, mem0, mem1, mem2;
          int  mode, old_mode;

          printf("Which video mode? ");
          scanf("%d",&mode);

          if (fg_testmode(mode,0) == 0) {
             printf("Your system does not support that video mode.\n");
             exit();
             }
          if (fg_testmode(mode,3) == 0) {
             printf("Your system does not have enough memory.\n");
             exit();
             }

          original = fg_memavail();
          old_mode = fg_getmode();
          fg_setmode(mode);
          mem0 = fg_memavail();
          fg_allocate(1);
          mem1 = fg_memavail();
          fg_allocate(2);
          mem2 = fg_memavail();

          fg_freepage(1);
          fg_freepage(2);

                                     Chapter 15:  Miscellaneous Routines   237

          fg_setmode(old_mode);
          fg_reset();

          printf("originally     = %ld\n",original);
          printf("after setmode  = %ld\n",mem0);
          printf("after 1st page = %ld\n",mem1);
          printf("after 2nd page = %ld\n",mem2);
          printf("at end         = %ld\n",memavail());
       }



Choosing the Video Memory Update Function

     In chapter 10, we saw how to use the fg_setfunc routine to perform XOR
animation in native EGA and VGA graphics modes (modes 13 to 18).  In these
video modes, fg_setfunc controls the logical operation applied when the
contents of video memory change.  The specific operation is defined by its
argument, as shown below.

                         value of  logical
                         argument  operation

                             0     replacement
                             1     and
                             2     or
                             3     exclusive or

If your program does not use the fg_setfunc routine, replacement mode is
always used.  That is, information written to video memory replaces whatever
was there before.  The fg_setfunc routine does nothing in CGA, Tandy/PCjr,
Hercules, or MCGA graphics modes, or in any text modes.

     Example 15-2 demonstrates the fg_setfunc routine.  The program is
similar to example 6-10 which displays 200 random rectangles on the screen.
However, example 15-2 displays the rectangles in XOR mode, which means the
rectangle intersections will appear in different colors.

                                Example 15-2.

            #define RECTANGLES 200
            #define SWAP(a,b,temp) { temp = a; a = b; b = temp; }

            main()
            {
               int i;
               int minx, maxx, miny, maxy;
               int old_mode;
               int temp;
               int xres, yres;

               if (fg_egacheck() == 0) {
                  printf("This program requires EGA or VGA.\n");
                  exit();
                  }

238   Fastgraph User's Guide


               old_mode = fg_getmode();
               fg_setmode(fg_automode());
               fg_setfunc(3);

               xres = fg_getmaxx() + 1;
               yres = fg_getmaxy() + 1;

               for (i = 0; i < RECTANGLES; i++) {
                  minx = rand() % xres;
                  maxx = rand() % xres;
                  miny = rand() % yres;
                  maxy = rand() % yres;
                  if (minx > maxx)
                     SWAP(minx,maxx,temp);
                  if (miny > maxy)
                     SWAP(miny,maxy,temp);
                  fg_setcolor(rand()%16);
                  fg_rect(minx,maxx,miny,maxy);
                  }

               fg_setmode(old_mode);
               fg_reset();
            }



Summary of Miscellaneous Routines

     This section summarizes the functional descriptions of the Fastgraph
routines presented in this chapter.  More detailed information about these
routines, including their arguments and return values, may be found in the
Fastgraph Reference Manual.

     FG_MEMAVAIL returns the amount of memory available to DOS.

     FG_SETFUNC specifies the logical operation (replacement, or, and,
exclusive or) applied when video memory changes in the native EGA and VGA
graphics modes.  This routine has no effect in other video modes.


Appendix A

Fastgraph Utilities
240   Fastgraph User's Guide


Overview

     This appendix describes three utilities that allow you to create and
manage image files used with the fg_dispfile routine.  The Fastgraph
installation procedure places these utilities in the \FG directory.  To use
these utilities, you must either (1) copy the appropriate .EXE file from \FG
to your current directory, (2) make \FG your current directory, or (3)
include the \FG directory in your DOS path specification.


SNAPSHOT Utility

     The SNAPSHOT utility is a terminate and stay resident program (TSR) to
capture graphic images.  It stores the image in Fastgraph's standard pixel
run format.

     To load SNAPSHOT, just enter the command SNAPSHOT at the DOS prompt, and
you'll see messages similar to the following if SNAPSHOT loads successfully.


        C> SNAPSHOT

        SNAPSHOT  Version 1.0
        Copyright (c) 1991 Ted Gruber Software.  All Rights Reserved.

        Press <alt>-<left shift> to activate.


After SNAPSHOT loads, control returns to the DOS prompt.  At this point, you
can use any method whatsoever to display a graphic image and then press the
Alt and left shift keys at the same time to capture the image.  You don't
need to load SNAPSHOT for each image capture, just once per system boot.
SNAPSHOT uses about 12,000 bytes of conventional memory once loaded.

     To illustrate the use of SNAPSHOT, suppose you have drawn and saved an
image with a commercial paint program, and you want to incorporate this image
into a Fastgraph application.  Once you load SNAPSHOT, activate the paint
program and retrieve your image.  Then press the Alt and left shift keys
simultaneously and wait for the success tone (three quick medium-pitched
sounds).  Finally, exit the paint program to return to the DOS prompt.

     The sequence described in the preceding paragraph will store the
captured image in Fastgraph's standard pixel run format, in a file named
SNAPSHOT.nnn in the current directory.  The file type nnn will be the first
sequence of digits that does not result in a duplicate file name.  That is,
if there are no captured image files in the current directory, SNAPSHOT will
use the file name SNAPSHOT.000.  The next time you capture an image, SNAPSHOT
will store it in SNAPSHOT.001, then SNAPSHOT.002, and so forth.  If you
rename or delete one of these files, SNAPSHOT will again use that file name.
For example, if you delete SNAPSHOT.000 but keep SNAPSHOT.001, SNAPSHOT will
store the next image it captures in SNAPSHOT.000.

     If for some reason SNAPSHOT is unable to capture the image, it will
produce its error tone (a single low-pitched sound).  The most common cause
of this is trying to capture an image from a text video mode, but it will
                                        Appendix A:  Fastgraph Utilities   241

also occur if there is insufficient disk space or if all 1,000 image file
names are already being used.


CLIP Utility

     The SNAPSHOT utility described in the previous section captures the
entire screen.  While this might be desirable in many cases, other times
you'll just need a portion of the screen.  CLIP is an interactive utility
that you can use to reduce the size of any image stored in Fastgraph's
standard or packed pixel run format.

     The syntax of the command for invoking the CLIP utility from the DOS
prompt is

                     CLIP input_file output_file options

where input_file is the name of the original image file, and output_file is
the name of the new image file.  CLIP does not modify the input_file in any
way, but it will overwrite the output_file if an identically named file
exists in the current directory.  The options list specifies one or more
optional switches as shown below.


               option         meaning

               /M:mode   Specifies the video mode number in which to
                         display the image.  The mode value must be an
                         integer between 0 and 21.  If that video mode
                         is a text mode, an unsupported graphics mode,
                         or an unavailable graphics mode, CLIP
                         displays an error message stating this.  If
                         the /M switch is not present, CLIP uses the
                         first available video mode from the list 16,
                         15, 19, 13, 9, 4, 12.

               /P        Indicates the input_file is in Fastgraph's
                         packed pixel run format.  If the /P switch is
                         not present, CLIP assumes it is in standard
                         pixel run format.  The output_file will be in
                         the same format as the input_file.

               /W:width  Specifies the image width in pixels.  The
                         width value must be an integer between 1 and
                         the horizontal resolution of the selected
                         video mode.  If the /W switch is not present,
                         CLIP uses the horizontal resolution of the
                         selected video mode.


For example, if you wanted to create the image file PARTIAL.PPR from the
packed pixel run file SCREEN.PPR, and use the native 320 by 200 EGA graphics
video mode (mode 13), you would activate CLIP with the following command.


                     CLIP PARTIAL.PPR SCREEN.PPR /P /M:13

242   Fastgraph User's Guide



Because no /W switch appears in the above command and the horizontal
resolution of mode 13 is 320 pixels, CLIP assumes the image width is 320
pixels.

     When CLIP displays the image and the plus-shaped cursor, you are ready
to define one corner of the clipping region (that part of the image used to
create the output_file).  To do this, use the directional keys on the numeric
keypad to move the cursor to the desired position, then press the Enter key.
You are then ready to define the clipping region's opposite corner.  Again,
use the directional keys to move the cursor to the desired position.  When
defining the second corner, however, CLIP uses a rectangular box instead of
the plus-shaped cursor to simplify marking the clipping region's boundaries.
After you press Enter to define the second corner, CLIP creates the
output_file and displays the resulting image width and the number of pixel
runs the image contains.

     CLIP includes some features that may help you define the clipping
region.  You can change the distance the cursor moves in response to the
directional keys, display the current (x,y) pixel coordinates of the cursor,
and change the cursor color.  The following table explains the keystrokes
that CLIP recognizes when you are defining the clipping region.


       key       meaning

       F1        Displays the (x,y) coordinate bar at the top
                 of the screen.  If the coordinate bar is
                 already on, F1 removes it.
       F2        Displays the (x,y) coordinate bar at the
                 bottom of the screen.  If the coordinate bar
                 is already on, F2 removes it.
       F3        Changes the cursor or box color from white to
                 black, or from black to white.
       F4        Displays a summary of the keys CLIP recognizes
                 when defining the clipping region.
       KP1       Moves the cursor one unit down and to the left.
       KP2       Moves the cursor one unit down.
       KP3       Moves the cursor one unit down and to the right.
       KP4       Moves the cursor one unit to the left.
       KP6       Moves the cursor one unit to the right.
       KP7       Moves the cursor one unit up and to the left.
       KP8       Moves the cursor one unit up.
       KP9       Moves the cursor one unit up and to the right.
       +         Increases the unit of cursor movement by one
                 pixel.  The default cursor movement is one pixel.
       -         Decreases the unit of cursor movement by one pixel.
       Enter     Defines a corner of the clipping region at the
                 cursor position.
       Esc       Exits to DOS without creating the output_file.
                 CLIP will first issue an "Exit to DOS?" prompt in
                 case you pressed the Esc key accidentally.

                                        Appendix A:  Fastgraph Utilities   243

     The CLIP utility requires two video pages to run.  Thus, you cannot use
it in video modes 17 and 18, which have only one physical video page and no
virtual video pages.


CONVERT Utility

     The CONVERT utility lets you translate files between Fastgraph's
supported image file formats.  The syntax of the command for invoking CONVERT
from the DOS prompt is


                        CONVERT input_file output_file


where input_file is the name of the original image file, and output_file is
the name of the new translated image file.  CONVERT does not modify the
input_file in any way, but it will overwrite the output_file if an
identically named file exists in the current directory.

     By default, the file type of the input_file and output_file determine
the image format of that file.  If the file type is .PPR, CONVERT assumes the
image is in Fastgraph's packed pixel run format.  If the file type is .SPR,
CONVERT assumes it is in the Fastgraph's standard pixel run format.  If your
image files use other file types, you can explicitly specify the file's image
format by appending one of the switches /PPR or /SPR to the file name.  The
input_file and output_file must not both specify the same image format
(CONVERT will display an error message if this is so).

     The following command will translate the standard pixel run file
PICTURE.SPR to packed format.  The packed image will be stored in the file
PICTURE.IMG, so we must append the switch /PPR to tell CONVERT that it will
be a packed file.


                     CONVERT PICTURE.SPR PICTURE.IMG/PPR

244   Fastgraph User's Guide


Appendix B

Using Fastgraph from Assembly Language
246   Fastgraph User's Guide


     Fastgraph uses the same naming and calling conventions as Microsoft C
and Turbo C.  The details of these conventions that are important to assembly
language programming are summarized below.  If you are calling Fastgraph
routines from an assembly language program, the program must follow these
conventions.

       All arrays and pointers are passed by reference
       All other items are passed by value
       Arguments are pushed onto the stack in reverse order
       16-bit function values are returned in the AX register
       32-bit function values are returned in the DX:AX register pair
       Fastgraph routine names are prefixed with an underscore character

The small and medium model Fastgraph libraries pass arrays and pointers by
near reference, while the large model library does so by far reference.  This
is consistent with the run-time libraries for the supported compilers.

     All Fastgraph routines preserve the BP, DS, DI, and SI registers.  The
contents of any other registers are unknown upon return from a Fastgraph
routine (except for the AX register, which will either contain zero or the
routine's return value).

     The following DOS commands show how to assemble a program (using the
Microsoft Macro Assembler) and then link it with Fastgraph.  In all cases,
we'll assume the file EXAMPLE.ASM contains the source code for the program.
The resulting executable file will be called EXAMPLE.EXE.

                              small memory model

                         MASM EXAMPLE.ASM;
                         LINK /CP:4096 /E EXAMPLE,,NUL.MAP,FGS


                             medium memory model

                         MASM EXAMPLE.ASM;
                         LINK /CP:4096 /E EXAMPLE,,NUL.MAP,FGM


                              large memory model

                         MASM EXAMPLE.ASM;
                         LINK /CP:4096 /E EXAMPLE,,NUL.MAP,FGL


     Example B-1 calls the fg_getmode, fg_setmode, fg_reset, and fg_version
routines from an assembly language program.  The fg_getmode routine returns
its function value in the AX register.  The fg_setmode routine has a single
argument, while fg_reset has no arguments.  The fg_version routine has two
arguments, both passed by reference.  Notice how they are pushed on the stack
in reverse order.  This particular example would work with either the medium
or large memory model Fastgraph libraries.  To make it work with the small
model library, all you would need to do is change the word "far" to "near" in
the EXTRN declarations, and also change the name of the code segment from
"main_TEXT" to "_TEXT".
                     Appendix B:  Using Fastgraph from Assembly Language   247

                                 Example B-1.

                EXTRN   _fg_getmode:far  ; Fastgraph's GETMODE routine
                EXTRN   _fg_reset:far    ; Fastgraph's RESET routine
                EXTRN   _fg_setmode:far  ; Fastgraph's SETMODE routine
                EXTRN   _fg_version:far  ; Fastgraph's VERSION routine

      stackseg  SEGMENT stack         ; suppress the linker's
      stackseg  ENDS                  ; "no stack segment" error message

      _DATA     SEGMENT word public 'DATA'

      major     dw      ?             ; major version number
      minor     dw      ?             ; minor version number
      old_mode  dw      ?             ; original video mode

      _DATA     ENDS

      dgroup    GROUP   _DATA
                ASSUME  cs:main_TEXT,ds:dgroup

      main_TEXT SEGMENT byte public 'CODE'

      start:    mov     ax,_DATA      ; load segment location
                mov     ds,ax         ; into DS register

                call    _fg_getmode   ; AX = current video mode
                mov     old_mode,ax   ; save it

                mov     ax,4          ; use video mode 4
                push    ax            ; pass argument to SETMODE
                call    _fg_setmode   ; establish CGA four-color mode
                add     sp,2          ; remove SETMODE argument

                push    old_mode      ; pass argument to SETMODE
                call    _fg_setmode   ; restore original video mode
                add     sp,2          ; remove SETMODE argument

                call    _fg_reset     ; restore screen attributes

                lea     ax,minor      ; get address of minor variable
                push    ax            ; pass argument #2 to VERSION
                lea     ax,major      ; get address of major variable
                push    ax            ; pass argument #1 to VERSION
                call    _fg_version   ; get the Fastgraph version number
                add     sp,4          ; remove VERSION arguments

                mov     ah,76         ; function 76: terminate process
                xor     al,al         ; errorlevel 0
                int     21h           ; exit to DOS

      main_TEXT ENDS
                END     start

248   Fastgraph User's Guide


Appendix C

Interrupts and Fastgraph
250   Fastgraph User's Guide


Interrupts Used by Fastgraph

     DOS maintains an interrupt vector table that contains the addresses of
256 interrupt handlers, or routines, that perform various functions.  The
handlers are usually referenced by their hexadecimal interrupt number,
between 00 and FF.  Of these, only interrupts 60 through 67 and F1 through FF
are not used by DOS or the ROM BIOS and are thus available for user
applications.

     Certain Fastgraph routines use some of the available interrupts.
Namely, the fg_music routine uses interrupt 60, the asynchronous sound
routines (fg_musicb, fg_sounds, and fg_voices) use interrupts 60 and 61, all
Fastgraph/Light routines use interrupt 62, and any program that runs in the
native EGA or VGA graphics video modes (modes 13 through 18) uses interrupt
64.  If your program defines its own interrupt handlers, it must not use any
of the interrupts reserved for Fastgraph (unless, of course, it doesn't use
any of the Fastgraph routines or video modes that would create a conflict).


Extending the Time-of-Day Interrupt

     As mentioned in chapter 14, the BIOS time-of-day clock is incremented by
an interrupt handler.  The routine that does this is interrupt 08, a hardware
interrupt automatically activated 18.2 times per second.  After incrementing
the clock, interrupt 08 invokes interrupt 1C, which by default references a
"do-nothing" interrupt handler.  While modifying interrupt 08 can be tricky,
it is fairly straightforward to define our own handler for interrupt 1C.
This handler will also be executed automatically 18.2 times per second.
Example C-1 illustrates how to do this.

     When we discussed joysticks in chapter 12, we said there were two ways
to monitor joystick button status.  One is to intersperse calls to the
fg_button routine at strategic places in your program and then take
appropriate action depending on the button status.  However, the problem with
this scheme is the possibility of missing a button press -- if you press the
joystick button and then release it between calls to fg_button, the program
will not detect the joystick activity.  A preferable method is to call
fg_button from a handler for interrupt 1C, which essentially provides
continuous monitoring of the joystick buttons.  When we need the button
status within our program, all we need to do is examine a global variable.

     Example C-1 consists of a main program (written in C) and an assembly
language subroutine named int1C (suitable for the medium memory model).  The
main program calls int1C to define a handler for interrupt 1C.  In response
to any keystroke (except Escape), the program displays the button press
information for each joystick since the previous keystroke (refer to the
discussion of the fg_button routine for the meanings of the status values).
When you press the Escape key, the program exits to DOS, but not before
calling int1C to restore the original interrupt 1C handler.

                                   Appendix C:  Interrupts and Fastgraph   251

                         Example C-1 (main program).

               #define ESC 27

               int status1, status2;
               main()
               {
                  unsigned char key, aux;

                  int1C(1);

                  status1 = 0;
                  status2 = 0;
                  fg_getkey(&key,&aux);

                  while (key != ESC) {
                     printf("\n");
                     printf("Joystick 1 status: %d\n",status1);
                     printf("Joystick 2 status: %d\n",status2);
                     status1 = 0;
                     status2 = 0;
                     fg_getkey(&key,&aux);
                     }

                  int1C(0);
               }


     We'll now examine the int1C assembly language subroutine.  It actually
consists of three parts:  a portion to enable our interrupt handler, our
handler itself, and a portion to disable the handler.  When we call int1C
with a nonzero argument, it saves the original data segment (so we can access
the global variables within the handler), saves the original handler's
address (called the vector) for interrupt 1C, and then enables our handler,
which takes the form of a far procedure.

     The handler routine then begins to be activated at 18.2 times per
second.  After saving all of the important registers, the handler calls the
Fastgraph routine fg_button twice, once for each joystick.  The return values
are logically ORed with the status1 and status2 C global variables to update
the button status information.  Finally, the handler restores the original
registers and returns control to the point of the interrupt.

     Before the main program exits, it calls int1C with a zero argument to
restore the original handler for interrupt 1C.  No provision is made in the
program to check if we had previously defined our own handler (and hence
saved the original interrupt 1C vector), but this could be added with little
difficulty.

                 Example C-1 (assembly language subroutine).

              EXTRN   _status1:word ; C global variable for button 1 status
              EXTRN   _status2:word ; C global variable for button 2 status
              EXTRN   _fg_button:far ; Fastgraph routine

   int1C_TEXT SEGMENT byte public 'CODE'

252   Fastgraph User's Guide

              ASSUME  cs:int1C_TEXT

   int1C_CS   dw      ?             ; holds original INT 1C segment address
   int1C_IP   dw      ?             ; holds original INT 1C offset
   orig_DS    dw      ?             ; holds original data segment

   _int1C     PROC    far
              PUBLIC  _int1C

              push    bp            ; save caller's BP register
              mov     bp,sp         ; make BP point to argument list
              push    si            ; save caller's SI register
              push    di            ; save caller's DI register

              mov     dx,[bp+6]     ; get the flag parameter
              or      dx,dx         ; replace the old interrupt handler?
              jz      replace       ; yes, branch to that processing

   ; define a new handler for INT 1C

   define:    mov     ax,ds         ; put current data segment in AX
              mov     cs:orig_DS,ax ; save it in the control information area
              mov     al,1Ch        ; interrupt vector to save
              mov     ah,53         ; function 53: get interrupt vector
              int     21h           ; get the interrupt vector
              mov     cs:int1C_CS,es; save the segment
              mov     cs:int1C_IP,bx; save the offset

              push    ds            ; save our DS register
              mov     dx,offset handler ; get offset of interrupt handler
              mov     ax,seg handler; get segment of interrupt handler
              mov     ds,ax         ; put it in DS
              mov     al,1Ch        ; interrupt vector to change
              mov     ah,37         ; function 37: set interrupt vector
              int     21h           ; change the INT 1C vector to our handler
              pop     ds            ; restore our DS register
              jmp     short return  ; return to the caller

   ; replace the original handler for INT 1C

   replace:   push    ds            ; save our DS register
              mov     dx,cs:int1C_IP; put original INT 1C offset in DX
              mov     ds,cs:int1C_CS; put original INT 1C segment in DS
              mov     ah,37         ; function 37: set interrupt vector
              mov     al,1Ch        ; interrupt vector 1C
              int     21h           ; restore original INT 1C vector
              pop     ds            ; restore our DS register

   return:    xor     ax,ax         ; in case int1C was called as a function
              pop     di            ; restore our DI register
              pop     si            ; restore our SI register
              pop     bp            ; restore our BP register
              ret

                                   Appendix C:  Interrupts and Fastgraph   253

   _int1C     ENDP

   handler    PROC    far           ; interrupt handler that replaces INT 1C

              cli                   ; disable interrupts while handler active
              push    ax            ; save registers that may be altered
              push    bx
              push    cx
              push    dx
              push    di
              push    si
              push    ds
              push    es

              mov     ds,cs:orig_DS ; retrieve the original data segment

              mov     ax,1          ; use joystick 1
              push    ax            ; pass joystick number to button routine
              call    _fg_button    ; AX = button status for joystick 1
              add     sp,2          ; remove the argument
              or      _status1,ax   ; update status variable for joystick 1

              mov     ax,2          ; use joystick 2
              push    ax            ; pass joystick number to button routine
              call    _fg_button    ; AX = button status for joystick 2
              add     sp,2          ; remove the argument
              or      _status2,ax   ; update status variable for joystick 2

              pop     es            ; restore altered registers
              pop     ds
              pop     si
              pop     di
              pop     dx
              pop     cx
              pop     bx
              pop     ax
              iret                  ; return from the interrupt routine

   handler    ENDP

   int1C_TEXT ENDS

              END


     The example just presented is not meant to be a tutorial on interrupts;
there are many good references on DOS that explain them in detail.  However,
an example specific to Fastgraph should be helpful.



Appendix D

Contents of the Compiler-Specific Libraries
254   Fastgraph User's Guide



     For each of the supported Fastgraph compilers except QuickBASIC, there
is a compiler-specific Fastgraph library (also called the extended Fastgraph
library) that contains the following routines:

     fg_circlew        fg_getworld      fg_rectw          fg_setworld
     fg_clprectw       fg_initw         fg_restorew       fg_swchar
     fg_dashrw         fg_moverw        fg_savew          fg_swlength
     fg_dashw          fg_movew         fg_setangle       fg_swtext
     fg_drawrw         fg_paintw        fg_setclipw       fg_xscreen
     fg_draww          fg_panw          fg_setratio       fg_xworld
     fg_drectw         fg_pointw        fg_setsize        fg_yscreen
     fg_ellipsew       fg_polygonw      fg_setsizew       fg_yworld

All of these routines use the world space coordinate system, either directly
or internally.  Note that none of these routines are included in
Fastgraph/Light.

     As mentioned in chapter 1, if your program uses any of these routines,
you must link it with the standard Fastgraph library (FGx.LIB) and the
compiler-specific Fastgraph library (FGcccx.LIB).
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2799

     Volume in drive A has no label
     Directory of A:\

    USER2    TXT    311465   7-04-91   3:20p
    GO       TXT       848   8-03-91  12:25a
    GO       BAT        38   7-23-91   2:37a
    FILE2799 TXT       856   8-03-91  12:29a
            4 file(s)     313207 bytes
                            7168 bytes free
