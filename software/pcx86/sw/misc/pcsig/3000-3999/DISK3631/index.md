---
layout: page
title: "PC-SIG Diskette Library (Disk #3631)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3631/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3631"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## VENDOR.TXT

{% raw %}
```
Dear Shareware Vendor:                   

This file contains our distribution policy and information on all
products.

Simvis Soft has a simple distribution policy: You have permission
to distribute our shareware in its original form as long as you:

* identify it as shareware (with an appropriate definition)

* leave all intellectual property (copyright) notices in place

..and as long as we do not request that you stop.

That's it.

You may archive our programs, unarchive them, include/exclude
optional files (like this one), include them with other programs on
the same diskette, and do essentially anything you want as long as
you follow these simple rules.  We want the widest possible
distribution, and don't want to stand in your way so long as you are
honest with our mutual customer.

If you have any questions, concerns, or complaints, please contact
me:

                               Simon Lee
                           7905 Bayview Ave.
                               Unit 1019
                          Thornhill, Ontario
                            Canada, L3T 7N3

                         Voice: (416) 882-2514
                           Fax: (416) 882-2527

International:

  If you are a publisher interested in translating and supporting
  our products in another language, please contact us to discuss
  an exclusive agreement for your language and country.  If you
  are interested in providing registration and support services
  outside of North America in English, we are interested in working
  with you on a non-exclusive basis.

Suggested Descriptions of BEN:

 Short:        ▒▒▒▒▒▒▒▒▒▒▒ Batch ENhancer v3.00 ▒▒▒▒▒▒▒▒▒▒▒
               Add colors, sounds, boxes, menus, directory
               controls and other SPECTACULAR features into
               batch files. Now with new Batch Editor! VG!

 Long:         ▒▒▒▒▒▒▒▒▒▒▒ Batch ENhancer v3.00 ▒▒▒▒▒▒▒▒▒▒▒
               BEN is an utility that specializes in
               enhancing batch files. It can incorporate
               colors, sounds, menus, pop-up boxes,
               directory controls and a host of other
               SPECTACULAR features into any batch file
               that you ever write. Easy yet powerful. Use
               it to complement your menuing program. Use
               it to develop network utilities. Use it
               anyway you want. There's no limit to what
               you can do with it. Now with the all new
               Batch Editor! VG!
```
{% endraw %}

## WHATSNEW.TXT

{% raw %}
```
List of Changes from Version 2.61 to Version 3.00
─────────────────────────────────────────────────

I.   Addition of new functions:
     A.   CLEANUP - used at the end of batch files. Its purpose is
          cleaning up the mess left behind by batch routines.
     B.   EXTRACT - returns a part of a fully qualified filename.
     C.   FLUSH - clears the keyboard buffer.
     D.   GETCD - returns the current directory to the batch file.
     E.   GETVIDEO - checks what kind of video system is installed
          (eg. CGA, VGA) and return the result to the batch file.
     F.   PLAY - produces music from the speaker. BEN PLAY uses the
          same statements that the BASIC PLAY uses.
     G.   LIST - a file browser.
     H.   MESSAGE - MESSAGE draws a box on the screen and displays
          the specified message.
     I.   SAVEPATH - SAVEPATH is a environment-memory conservation
          function.
     J.   SHELL - SHELL lets the user jump to DOS in the middle of
          a batch file.
     K.   TITLEDBOX - TITLEDBOX displays a filled box with a title
          on the screen.
     
II.  Changes made to old functions:
     A.   Renames:
          1.   GOTOXY is now LOCATE.
          2.   COLORNOW is now COLOR.
          3.   ATTRIB is now CLS.
          4.   WAITKEY is now PAUSE.
          5.   INLINE is now GETLINE.
          6.   INLINEU is now GETLINEU.
          7.   INKEY is now GETKEY.
          8.   INKEYU is now GETKEYU.
     B.   Splitting of the BOX function into BOX, FILLEDBOX,
          GROWFILLEDBOX, SHADFILLEDBOX, TRANSPARENTBOX.
     C.   EGAVGA now returns errorlevels of 1 or 2, insteads of 0
          or 1.
     D.   WRITE, WRITEC and WRITEV no longer require you to specify
          the number of words to display.
     E.   WRITE and WRITEC can now "not wrap" to the next line when
          finished displaying.
     F.   CURSOR now supports four shapes: ON, OFF, FULL, HALF.
     G.   DIRDISP gets a new look, and it is now separated to
          DIRDISP and DIRDISPA.
     H.   You can now specify colors with descriptive names. For
          example, instead of "BEN COLOR 15 1", you can use "BEN
          COLOR WHITE BLUE". This is not mandatory, but it
          increases the readability of your batch file.

III. Removal of useless functions:
     A.   DEBOX
     B.   SOUND T
     C.   SCROLL T

IV.  Other changes in BEN.EXE:
     A.   You can now use the ; comment symbol in T data files.
     B.   You can now use the separator "/" when you stack BEN
          functions. For example, instead of "BEN BEEP CLS BLUE",
          you can use "BEN BEEP / CLS BLUE". This is not mandatory,
          but it increases the readability of your batch file.
     C.   Online help is now placed in BEN.HLP instead of the main
          executable BEN.EXE.

V.   BENEdit
     A.   BENEdit is a text editor that allows you to edit batch
          files and select BEN features quickly and easily.

VI.  Miscellaneous
     A.   BENDEMO.BAT is redesigned.
     B.   INSTALL.BAT is added.
     C.   BEN now uses dynamic memory allocation. This memory
          management method is much better than the static memory
          allocation method in past versions of BEN.
     D.   BEN and the associated executables are now dynamically
          compressed.
     E.   BEN now runs at a much quicker speed.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3631

     Volume in drive A has no label
     Directory of A:\

    README            5151   7-15-92   3:00a
    BENDEMO  BAT     10869   7-15-92   3:00a
    BROWSE   BAT       283   7-15-92   3:00a
    INSTALL  BAT      2361   7-15-92   3:00a
    BENDEMO  DA1      2239   7-15-92   3:00a
    BENDEMO  DA2       228   7-15-92   3:00a
    BENDEMO  DA3      1122   7-15-92   3:00a
    BENDEMO  DA4      1444   7-15-92   3:00a
    BENDEMO  DA5      1378   7-15-92   3:00a
    BENDEMO  DA6      4617   7-15-92   3:00a
    FILE_ID  DIZ       182   7-15-92   3:00a
    BEN      EXE     53495   7-15-92   3:00a
    BENEDIT  EXE     77704   7-15-92   3:00a
    BEN      HLP     24558   7-15-92   3:00a
    BENEDIT  HLP     51357   7-15-92   3:00a
    BEN      TXT     49211   7-15-92   3:00a
    PRODUCTS TXT      5701   7-15-92   3:00a
    VENDOR   TXT      2547   7-15-92   3:00a
    WHATSNEW TXT      3429   7-15-92   3:00a
    GO       BAT        32   9-29-92  11:26a
    SHOW     EXE      2040   9-12-88  10:48a
           21 file(s)     299948 bytes
                            9216 bytes free
