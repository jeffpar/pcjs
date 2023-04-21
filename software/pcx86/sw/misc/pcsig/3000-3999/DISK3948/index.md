---
layout: page
title: "PC-SIG Diskette Library (Disk #3948)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3948/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3948"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ORDERFRM.DOC

{% raw %}
```
                        How to Register SCROLLit


     SCROLLit is registered by purchasing a registration key which
     converts your shareware copy of SCROLLit into a registered copy
     without the shareware screen. Your registration key will work for
     this and all future versions of SCROLLit. You do not need a new
     diskette copy of SCROLLit, but as we have received such requests,
     that option is provided for in the attached order form.
                                  
     Each registration key for SCROLLit is US$17 for U.S. and other
     international orders and CAD$20 for Canadian addresses. We can
     accept payment in other currencies such as UK Pounds, Australian
     Dollars or Dutch Guilders with a US$5 surcharge to cover increased
     banking fees. Overseas users should start with the US$ price, add
     US$5, and then convert to their local currency at current exchange
     rates.

     SCROLLit can be registered by mailing the registration fee to our
     Ottawa address, or, for a small surcharge, convenient registration
     using Compuserve's shareware registration service ('GO SWREG') is
     available. When you register with this service, the US$17
     registration fee (plus a $3 surcharge to cover Compuserve's service
     fee) is added to your monthly Compuserve bill. Your SCROLLit
     registration key will be sent to you by Compuserve mail (unless you
     request postal mail).
     
     Companies and other organizations interested in multiple copies of
     SCROLLit should obtain a site license. Please refer to the enclosed
     file SITE_LIC.DOC.

     SCROLLit 1.6            SINGLE USER ORDER FORM             Ref A008
     ===================================================================



                      _____ Registration keys at CAD$20/US$17  _________

              _____ diskette copies of SCROLLit at CAD$5/US$5  _________

            Ontario orders please add 8% Provincial Sales Tax  _________

                                        Total CAD$_________/US$_________

             Other currencies, add US$5 surcharge and convert  _________



     Name:     _________________________________________________________

     Address:  _________________________________________________________

               _________________________________________________________

               _________________________________________________________

     Country:  _________________________________________________________

     Todays Date:  _____________________________________________________

     I obtained SCROLLit from:  ________________________________________

     Comments: _________________________________________________________

               _________________________________________________________

               _________________________________________________________

               _________________________________________________________

               _________________________________________________________

               _________________________________________________________

               _________________________________________________________



     Remit to:   Bromfield Software Products       (Note: U.S. postage
                 P.O. Box 70081                     to Canada is $0.40)
                 Ottawa, Ontario  CANADA
                 K2P 2M3


     If you wish to receive your registration key via electronic mail
     rather than first class postal mail, then please specify your
     Compuserve User ID:
                        _________________________
```
{% endraw %}

## README.DOC

{% raw %}
```
SCROLLit 1.6         Advanced Scrollback Buffer           March 24, 1993


Introduction - What is SCROLLit? =======================================

SCROLLit is a memory resident (TSR) program that captures, in full
color, the lines of text that scroll off the top of the video screen and
stores them in an XMS, EMS or conventional memory 'scrollback' buffer of
a size specified by the user. A fast compression technique is used to
store more than twice the number of lines in the available buffer space.
SCROLLit can be activated or 'popped up' over any non-graphical program
by pressing the Scroll Lock key. Once activated, SCROLLit will let you
scroll back through this saved information, line by line or page by
page. SCROLLit has a fast search capability as well as a block-write
feature that allows you to mark a block of lines for writing to a disk
file or sending to your printer.

For details on how to use SCROLLit, please refer to the SCROLLIT.DOC
documentation file.

Requirements ===========================================================

SCROLLit requires DOS 3.1 or above and supports all monitor/video
combinations (monochrome or color; MDA/CGA/EGA/MCGA/VGA or Hercules).

Quick Start ============================================================

SCROLLit can be installed with a 100k buffer by typing:

    SCROLLit 100

SCROLLit can then by activated by pressing the Scroll Lock key. Once
activated, press the F1 key for a quick command summary. When SCROLLit
is installed, the Scroll Lock key no longer toggles your Scroll Lock
light on and off. Instead press Alt-Scroll Lock.

SCROLLit can be removed from memory by typing:

    SCROLLit /U

Refer to Appendix 3 in SCROLLIT.DOC for a command line summary, or type:

    SCROLLit /?

Special Cases ==========================================================

Qmodem/Telix users: You will need to configure your communications
software to use the BIOS to perform screen scrolling. This will allow
SCROLLit to intercept and save the lines that scroll off the top of the
screen. If SCROLLit isn't capturing your scrolling lines, chances are
you need to switch to BIOS screen scrolling. See Appendix 1 in
SCROLLIT.DOC. Procomm Plus and Commo always uses the BIOS for screen
scrolling so no reconfiguring is necessary.

Desqview users: SCROLLit is Desqview aware. You will need to load
SCROLLit in the Desqview window(s) where you want to capture scrolling.
See Appendix 2 in SCROLLIT.DOC.

The Last Byte Memory Manager users: Some versions of TLB's HIGHTSR
program appear to have difficulty with TSR parameters beginning with a
slash (/). SCROLLit accepts either slashes or dashes (-). For example,
to install SCROLLit in high memory with a 100k EMS buffer, type:

     HIGHTSR SCROLLIT 100 -E

Registered users of older versions of SCROLLit:  Please refer to
WHATSNEW.DOC to see what has changed since your version of SCROLLit.
Your registration key will work with this and all future versions of
SCROLLit. Thank you for supporting the shareware concept.
          
FILES in this archive ==================================================

  README.DOC    this file
  SCROLLIT.EXE  the SCROLLit program
  SCROLLIT.DOC  the SCROLLit documentation
  WHATSNEW.DOC  summary of changes since Version 1.0
  ORDERFRM.DOC  an order form for registering SCROLLit
  SITE_LIC.DOC  information on site licenses
  FILE_ID.DIZ   bulletin board file description
```
{% endraw %}

## SITE_LIC.DOC

{% raw %}
```
                   SCROLLit Site License Information


     Companies and other organizations wanting multiple copies of
     SCROLLit should obtain a site license by filling out the attached
     site license order form. The site license grants the organization a
     perpetual, nontransferable, nonexclusive right to use the specified
     number of copies of SCROLLit for the organization's internal use.

     The site license is valid for the current version and all future
     versions of SCROLLit. Note that the site license includes one
     diskette copy of the latest version of the software and
     documention. The site license grants you the right to make
     additional copies of the SCROLLit software and documentation up to
     the number of copies licensed. Distribution, repackaging, or
     reselling of SCROLLit to third parties is not allowed.
     
     The fee for a site license depends on the estimated number of
     copies of SCROLLit that you will use. The fee applies to one site.
     For local area networks, one copy must be licensed for each
     computer that will be using the program on the network. To use the
     discount schedule below, estimate the number of copies that you may
     eventually use. Site licenses for Canadian addresses are payable in
     Canadian dollars, while U.S. and other international site license
     fees are payable in U.S. currency. We can accept payment in other
     currencies such as UK Pounds, Australian dollars or Dutch Guilders
     with a US$5 surcharge to cover increased banking fees. Overseas
     users should start with the US$ site license fee, add US$5, and
     then convert to their local currency at current exchange rates.
     
     Number of users(copies)     Price per copy

          2 to 10                US$17   CAD$20
         11 to 20                   16       19
         21 to 30                   15       18
         31 to 40                   14       16
         41 to 50                   13       15
         51 to 60                   12       14
         61 to 70                   11       13
         71 to 80                   10       12

         Unlimited at one site  US$800  CAD$960
         Additional sites          400      480  unlimited at each site.

     All site licenses are prepaid. If you require an invoice before
     your payment can be processed, please send us the completed order
     form and we will mail you a printed invoice.

     If you require additional information or have any questions, please
     contact us at our Ottawa address or via electronic mail at
     Compuserve 71054,3051.

     SCROLLit 1.6       SITE LICENSE ORDER FORM                 Ref A008
     ===================================================================


               2 to 10  _____  copies at US$17/CAD$20 each     _________
              11 to 20  _____  copies at US$16/CAD$19 each     _________
              21 to 30  _____  copies at US$15/CAD$18 each     _________
              31 to 40  _____  copies at US$14/CAD$16 each     _________
              41 to 50  _____  copies at US$13/CAD$15 each     _________
              51 to 60  _____  copies at US$12/CAD$14 each     _________
              61 to 70  _____  copies at US$11/CAD$13 each     _________
              71 to 80  _____  copies at US$10/CAD$12 each     _________

                      Unlimited at one site US$800/CAD$960     _________
                   ____ additional sites at US$400/CAD$480     _________

             ____ additional diskette copies at US$5/CAD$5     _________

         Ontario orders please add 8% Provincial Sales Tax     _________

                                        Total CAD$_________/US$_________

             Other currencies, add US$5 surcharge and convert  _________


     Name:     _________________________________________________________

     Title:    _________________________________________________________

     Company:  _________________________________________________________

     Address:  _________________________________________________________

               _________________________________________________________

               _________________________________________________________

     Country:  _________________________________________________________

     Todays Date:  _____________________________________________________

     I obtained SCROLLit from:  ________________________________________

     Comments: _________________________________________________________

               _________________________________________________________

               _________________________________________________________

               _________________________________________________________

               _________________________________________________________

               _________________________________________________________


     Remit to:   Bromfield Software Products       (Note: U.S. postage
                 P.O. Box 70081                     to Canada is $0.40)
                 Ottawa, Ontario  CANADA
                 K2P 2M3
```
{% endraw %}

## CHIPSETS.TXT

{% raw %}
```
  Supported Chipsets
     
     Chipset                            Autodetect          BankSwitch
     -----------------------------------------------------------------
     Ahead V5000 A                      Untested            Tested
     Ahead V5000 B                      Untested            Tested
     ATI 18800                          Tested              Tested
     ATI 18800-1                        Tested              Tested
     ATI 28800-2+ HiColor               Tested              Tested
     Chips & Technologies 82C451        Untested            Untested
     Chips & Technologies 82C452        Untested            Tested
     Chips & Technologies 82C453        Untested            Untested
     Chips & Technologies 82C455        Untested            Untested
     Chips & Technologies 82C456        Untested            Untested
     Cirrus Logic 510/520               Untested            N/A
     Cirrus Logic 610/620               Untested            N/A
     Cirrus Logic Video7 OEM            Untested            N/A
     Compaq                             Untested            Tested
     Everex Ev673 EVGA                  Untested            Untested
     Everex Ev236 Ultragraphics II      Untested            Untested
     Everex Ev620 Vision VGA            Untested            Untested
     Everex Ev678 ViewPoint VGA         Untested            Untested
     Everex Ev629 ViewPoint TC          Untested            Untested
     Genoa 5X00 (ET3000)                Untested            Tested
     Genoa 6X00                         Untested            Tested
     NCR 77C22E                         Untested            Tested
     Oak Tech OTI-037C			Untested            Untested
     Oak Tech OTI-067                   Tested              Tested
     Oak Tech OTI-077                   Untested            Untested
     Paradise PVGA1A                    Tested              Tested
     S3 GUI Accelerator HiColor         Tested              Tested
     Trident 8800CS                     Untested            Tested
     Trident 8900B                      Untested            Tested
     Trident 8900C			Untested            Tested
     Trident 9000			Tested              Tested
     Trident LCD9100			Untested	    Tested
     Trident LX9200			Untested	    Tested
     Tseng Labs ET3000                  Tested              Tested
     Tseng Labs ET4000 HiColor          Tested              Tested
     VESA                               Tested              Tested
     VGA                                Tested              N/A
     Video 7 VEGA VGA                   Untested            Tested
     Video 7 V7VGA Rev 3                Tested              Tested
     Video 7 V7VGA Rev 4		Untested            Tested
     Video 7 V7VGA Rev 5                Tested              Tested
     Video 7 1024i                      Untested            Tested
     Western Digital 90C00              Tested              Tested
     Western Digital 90C10              Tested              Tested
     Western Digital 90C11              Tested              Tested

  Supported Video Modes
     
     Adapter              Xres    Yres   Colors   Memory
     ---------------------------------------------------
     Ahead A & B           320     200      256      64K
                           640     400      256     256K
                           640     480      256     512K
                           800     600      256     512K
                          1024     768      256    1024K
     
     ATI                   320     200      256      64K
                           640     400      256     256K
                           640     480      256     512K
                           640     480      32K    1024K
                           800     600      256     512K
			   800     600      32K    1024K
                          1024     768      256    1024K
     
     Chips & Technologies  320     200      256      64K
                           640     400      256     256K
                           640     480      256     512K
                           800     600      256     512K
			  1024	   768	    256    1024K  80C453 only
     
     Cirrus Logic          320     200      256      64K
     
     Compaq                320     200      256      64K
                           640     480      256     512K
     
     Everex                320     200      256      64K
                           512     480      256     256K
                           640     350      256     256K
                           640     400      256     256K
                           640     480      256     512K
                           800     600      256     512K
     
     Everex ViewPoint TC   320     200      256      64K
                           320     200      32K     256K
                           512     480      256     256K
                           512     480      32K     512K
                           512     480      16M    1024K
                           640     350      256     256K
                           640     400      256     256K
                           640     480      256     512K
                           640     480      32K    1024K
                           640     480      16M    1024K
                           800     600      256     512K
                          1024     768      256    1024K
     
     Genoa                 320     200      256      64K
                           640     350      256     256K
                           640     400      256     256K
                           640     480      256     512K
                           720     512      256     512K
                           800     600      256     512K
     
     NCR                   320     200      256      64K
                           640     400      256     256K
                           640     480      256     512K
                           800     600      256     512K
     
     Oak                   320     200      256      64K
                           512     512      32K     512K  OTI-077
                           640     400      32K     512K  OTI-077
                           640     480      256     512K
                           640     480      32K    1024K  OTI-077
                           800     600      256     512K
                          1024     768      256    1024K  OTI-077

     Paradise/WD           320     200      256      64K
                           640     400      256     256K
                           640     480      256     512K
                           800     600      256     512K  WD90C11
     
     S3 GUI Accelerator    320     200      256      64K
                           640     480      256     512K
                           640     480      32K    1024K
                           800     600      256     512K
                          1024     768      256    1024K
     
     Trident               320     200      256      64K
                           640     400      256     256K
                           640     480      256     512K
                           800     600      256     512K
                          1024     768      256    1024K
     
     Tseng 3000            320     200      256      64K
                           640     350      256      256
                           640     480      256     512K
                           720     512      256     512K
                           800     600      256     512K
                          1024     768      256    1024K
     
     Tseng 4000            320     200      256      64K
                           640     350      256     256K
                           640     350      32K     512K
                           640     400      256     256K
                           640     400      32K     512K
                           640     480      256     512K
                           640     480      32K    1024K
                           800     600      256     512K
                           800     600      32K    1024K
                          1024     768      256    1024K
     
     VESA                  320     200      256      64K
                           640     400      256     256K
                           640     480      256     512K
                           640     480      32K    1024K
                           640     480      64K    1024K
                           640     480      16M    1024K
                           800     600      256     512K
                           800     600      32K    1024K
                          1024     768      256    1024K
                          1280    1024      256    2048K
     
     Video 7               320     200      256      64K
                           640     400      256     256K
                           640     480      256     512K
                           720     540      256     512K
                           800     600      256     512K
                          1024     768      256    1024K
     
     VGA                   320     200      256      64K
     
     
```
{% endraw %}

## README.TXT

{% raw %}
```
Program Description
     SVGA is an easy to use multi-format image viewer designed to quickly
     browse through a collection of image files.

Program Features
     Automatically supports VESA, Ahead, ATI, C&T, Everex, Genoa, NCR,
	Headland, Oak, Paradise, S3, Trident, Tseng ET3000/ET4000,
	Video 7, Western Digital, and Zymos chip sets
     Full support for 4DOS file descriptions
     GIF, PCX, Windows BMP, and TARGA image formats
     Displays TrueColor PCX, BMP and TARGA images on VGA, HiColor,
     	and Everex TrueColor
     EMS, XMS, and virtual memory supported to view large images
     Easy viewing of images larger than the display supports
     Easy to operate, no configuration files necessary.
     
File Listing
     SVGA.EXE		SVGA Executable
     ADAPTER.EXE	Video adapter detection/mode display
     SVGA.MAN		Reference manual
     ADDENDUM.MAN	Manual addendum
     VERSION.TXT	Version history
     CHIPSETS.TXT	Currently supported chipsets
     README.TXT		This file
     TODO.TXT		Plans for the future
```
{% endraw %}

## TODO.TXT

{% raw %}
```
Things to do:

1.  Add slide show capability, single image viewing from command line

2.  Add JPEG, Sun Raster, Portable PixMap, RIX image support.

3.  Add configuration file capability, color selection capability,
    and configuration editing window (colors, standard toggles, sort modes,
    etc)

4.  Add mouse support of some kind

5.  Add support of BGR and RGB truecolor display types

The next two items are REAL low on the priority list, and may not be
implemented.

5.  Add full GIF89a support (at this point, should be little more than
	expanding the viewer and image descriptors, and adding support in
	the ShowPic function).

6.  Add image save capability.
```
{% endraw %}

## VERSION.TXT

{% raw %}
```
SVGA Change Log
---------------

1.11	Added SVGATEMP variable.
	Added a check for missing EMS page frame.
	Corrected Trident 8800 memory detection.
	Redesigned EMS/XMS identity determination code.
	Corrected minor video bug in exit cleanup code.
	Corrected mode listing for Video7 1024i adapters.
	Added full support for Oak 037C/067/077, including Oak HiColor.

1.10	Added Truevision TARGA support, types 1, 2, 9, and 10.
	Added 24 bit PCX, BMP support.
	Added S3 GUI Accelerator, HiColor support.
	Added Trident TVGA 8900C, 9000, LCD9100, LX9200 detection.
	Added VESA TrueColor extensions support.
	Added automatic resolution selection.
	Added accurate detection of ATI 1MB, gate version through rev 6.
	Added Tseng 4000 HiColor support.
	Added ATI 640x480x32k, 800x600x32k HiColor support.
	Added 386 detection/support.
	Added ability to display incomplete images.
	Added command line switch to force use of VESA interface.
	Added accurate video memory detection for Tseng3000 and VESA.
	Now selects native chipset in preference to VESA.
	Maximum number of files increased to ~925.
	Virtual memory errors are both clearer and less likely.
	Fixed Paradise 800x600 unsupported mode problem.
	Fixed Oak detection.

	Note:	I have completly rewritten the video adapter detection code.
		PLEASE report if you have ANY problems with adapter detection,
		such as incorrect video memory, incorrect adapter, or
		incorrect image display.

	Note:	No image quantization or dithering is currently performed.
		It is possible that it will be implemented in the future to
		improve display quality.  I chose speed over quality for this
		first truecolor version.

	Note:	HiColor modes on my ET4000 have problems with random pixels
		written to the video buffer.  This shows up while scrolling
		as image corruption, snow, etc.  This is not a software bug.
		Your mileage may vary.

1.02	No longer locks up when insufficient XMS memory is present when
	using HIMEM.SYS.

1.01	Images are now correctly displayed under low memory conditions.
	Situations where allocated disk space did not match reported disk
	space are now handled properly.

1.00	First release
```
{% endraw %}

## SYSCHK.DOC

{% raw %}
```

                                   SYSCHK

                   System Checkout for your personal computer

                                 Version 2.35
                           Released January 4, 1993

                  Copyright 1993 by Advanced Personal Systems
                             All rights reserved.


 SYSCHK is a program that provides valuable information about devices installed
 in your system. The following are the items SYSCHK will search for :

        - Computer model type including manufacturer if known
        - Micro Processor including the 80486
        - Detection of the older 80386 that had a 32-bit multiply bug
        - Math Coprocessor type
        - Detection of slave 8259 Interrupt controller
        - Presence of a real time clock
        - Presence of a Micro Channel bus
        - System BIOS including source, date and size
        - A listing of all known BIOS extensions in the system, and the
          size of those BIOS
        - Type of keyboard attached (84 key or 101 key) and keyboard status
        - Type of mouse installed, number of buttons, and interrupt used
        - Number of parallel ports in system and the base addresses
        - Number of serial ports in system and the base addresses and
          parameters of the port
        - Type of Serial port UART chip including 16550
        - Various information on a Network connection
        - Hard disk size including tracks, heads, sectors and CMOS type
        - Hard disk controller manufacturer
        - Hard disk partition information
        - Floppy disk size and parameters
        - Video type, chipset, video memory, and BIOS source
        - Amount of environment space used and available
        - Amount of conventional memory total and available
        - Amount of extended memory total and available
        - Amount of expanded memory total and available, version and
          location of page frame
        - Amount of XMS memory
        - Listing of all resident programs and the size of those programs
        - Listing of all non standard device drivers installed
        - Throughput speed of system, taking into account CPU speed and
          wait states
        - Self checking for virus detection
        - Operates under Windows in all modes (SYSCHK.ICO is included
          for your use with Windows).

   A hardcopy printout or file of your system's information is also available
   as an option.  Standard Output redirection is also available for use in
   batch files by simply adding "/F" as a SysChk parameter.
   For example "SYSCHK /f > MyInfo.txt" will create a file called MYINFO.TXT
   or "SYSCHK /f" will display a text file to the console screen.

   SCSI host adapter determination can sometimes cause the SCSI bus to hang.
   If you wish to disable the host adapter determination then enter /S as a
   SYSCHK parameter (SYSCHK /s).

   Support questions may be submitted through CompuServe ID [70323,136].

   REVISION HISTORY
   ----------------
   0.99 - Prerelease version to public domain, all items on a single page
   2.00 to 2.23 - Various Beta versions released only to Beta users
   2.24 - Official Shareware version first release
   2.30 - Added environment memory information.
          Combined Floppy and Hard drive information on one page.
          Added module on Networks.
          Added chipset information on VGA video cards.
          Added presence detection of DOS 5 in HMA area.
          Added presence of execution under Microsoft Windows.
          Added detection of serial ports not originally found by BIOS.
          Added option to save information to a file in addition to printer.
          Added disk controller manufacturer information.
          Added a few more model byte descriptions.
          Fixed DOS version lower than 3.0 announcement bug.
          Fixed bug with DISK module running with DR DOS 5.0.
   2.31 - Added detection of OAK Technologies Video chipset
   2.32 - Added detection of CPU clock speed
          Added Network information to printer output
          Added dectection of 8514/A
          Added standard output redirection option to the parameter line.
   2.33 - Fixed missing info of mouse and network in redirected output.
          Added some more information on HMA and XMS.
   2.34 - Fixed incorrect info on HMA area.
          Sped up initialization time.
          Changed speed bar to accomodate faster systems.
          Added detection of Logitech and Mouse Systems mice.
          Added detection of ISA or EISA bus type.
          Added detection of MODEM on serial port.
          Added detection of Sound Board.
          Added detection of (some) SCSI Host Adapters. (Test disabled by
                                                         entering Syschk /S)
   2.35   Removed detection of Trident video boards (caused hangup).
          Added detection of some S3 video chipsets.
          Added detection of 80386SX CPU.
          Added information on registration through CompuServe.


   REGISTRATION
   ------------
   The registration fee for this shareware product is $20.00. For the
   $20.00 registration fee, you will be sent the new version of SYSCHK
   version 3.0 for Windows when it is available.

   In addition, you will also receive the Advanced Personal System's Deluxe
   Utility Disk with a number of handy utilities including a menu system,
   an easy to use file viewer, a CMOS viewer and editor, and lots more.

   You can now register through CompuServe by entering "GO SWREG" and billing
   your CompuServe account.  The registration ID# is 497.  Or if you like,
   send in your name with a check or money order and your choice of diskette
   size to:

                        Advanced Personal Systems
                              105 Serra Way
                                Suite 418
                           Milpitas, CA. 95035

                   (408) 298-3703    FAX (408) 945-0242

   Note: California residents please add 8.25% sales tax.


     Advanced Personal Systems (APS) hereby disclaims all warranties
     relating to this software, whether express or implied, including
     without limitation any implied warranties of merchantability or
     fitness for a particular purpose. APS will not be liable for any
     special, incidental, consequential, indirect or similar damages
     due to loss of data or any other reason, even if APS or an agent
     of APS has been advised of the possibility of such damages.  In
     no event shall APS's liability for any damages ever exceed the
     price paid for the license to use software, regardless of the form
     of the claim.  The person using the software bears all risk as to
     the quality and performance of the software.

```
{% endraw %}

## HELPARCS.TXT

{% raw %}
```
.TOPIC:
Contents
             ░ ▓ ▓ ░           │▓▒▓        ░ ▓ ▓ ░
             ░▒▓█▓▒░           │           ░▒▓█▓▒░  
             ░▒▓▐▓▒░          ┌┼┐          ░▒▓▌▓▒░  
             ░▒▓█▓▒░     █████████████     ░▒▓█▓▒░
             ░▒▓▌▓▒░   ████▒▓█▒▓▒█▓▒████   ░▒▓▐▓▒░
             ░▒▓█▓▒░░▒███░░▒▓╓║║║╖▓▒░░███▒░░▒▓█▓▒░
             ░▒▓▐▓▒░░▒██▒░░▒▓║║║║║▓▒░░▒██▒░░▒▓▌▓▒░
             ░▒▓█▓▒░▒▒██▒░░▒▓║║║║║▓▒░░▒██▒░░▒▓█▓▒░
             ░▒▓█▓▒░░▒██▒░░▒▓║║║║║▓▒░░▒██▒░░▒▓█▓▒░
                     I N D I G O    C I S
    ╔═════════════════════════════════════════════════════╗
    ║The COMmunications NETwork School and Publishing Co. ║
╔═══╚═════════════════════════════════════════════════════╝════╗
║ Welcome to HyperHelp.  This program is provided as ShareWare ║
║ for you to use and pass around.  If you use this program for ║
║ more than 15 days you should register this program.  To send ║
║ your registeration in see ORDER FORM.  You may get a copy  ║
║ for a 286 or 386 computer.  This version is for the PC class.║
║                                        Click here --> MENU ║
╚══════════════════════════════════════════════════════════════╝
.TOPIC:
MENU
              COMmunications NETwork S&P Co.
                      P.O. Box 376
                  Farmington, NM 87499

(c) Copyright 1993 by COMmunications NETwork S&P Co.
All rights reserved.

Click the mouse over one of the topics below for more
information.  Or press TAB to select a topic then press ENTER
to jump to that topic.

Warranty          ZIPing Files             Search
Using Help        Self Extracting Files    Run
SetUp             UnZIPing Files           ORDER FORM 
                    ZIP Fixer
                    Virus Scan
                    Making a DIR
                    Removing a DIR
                    Delete a File
                    Format a Disk
                    Copy File(s)

.TOPIC:
Warranty
IMPORTANT WARRANTY INFORMATION PLEASE READ THIS INFORMATION CAREFULLY

SHAREWARE (TRIAL USE) VERSION WARRANTY:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The COMmunications NETwork School and Publishing Co. as well
as INDIGO Computer Information System provides Shareware on
(trial use) version AS IS.  COM-NET S&P and INDIGO CIS
MAKES NO WARRANTY OF ANY KIND EXPRESSED OR IMPLIED

INCLUDING WITHOUT LIMITATION ANY WARRANTIES OF MERCHANTABILITY
AND/OR FITNESS FOR A PARTICULAR PURPOSE.

COM-NET S&P Co. and INDIGO CIS SPECIFICALLY DISCLAIMS OTHER
WARRANTIES EXPRESSED OR IMPLIED INCLUDING BUT NOT LIMITED TO
ANY IMPLIED WARRANTY OF MERCHANTABILITY AND/OR FITNESS FOR A
PARTICULAR PURPOSE.
.TOPIC:
SetUp
To SetUp this program you need to place the program  in the same 
directory with your PKZIP and Virus scan files.  Place the help
text file (HELPARC3.TXT) is your root directory (C:\).

Add the directory to your PATH in your AUTOEXEC.BAT.  Remember
that all items on your PATH statement MUST be on the same line.
This line may be upto 256 spaces long.  To do this you may use
an ASCII word editor that dose not wordrap.  The ASCII editor
that comes with SCREEN MINDER II is a very good file editor for
this type of entry.

Example:     PATH C:\DOS;C:\ZIPS

NOTE: be sure to place a  ;  between PATH entries.

To RUN  ZIP Shell program type ZIPSHEL.EXE at the DOS prompt.

.TOPIC:
ZIPing Files
ZIPing Files is the act of arciving or combinding files into one file. 
This generally includes compressing the files down so that they take
less space on the disk or can be sent over the phone lines, via
modem, at a faster rate.

Select "ZIP Files" on the ACTION list

Enter "Source Mask".  This should be the drive, directory, and
      the filespects that you wish to have ZIPed.  You may select
      a Drive & Directory by using the Drive Select Box in the
      lower left corner or select a drive by use of the Drive
      Select Menu above Source Mask.  You may also use the Direct
      Entry method.
      Example: C:\HOLD\*.*   C:\HOLD\WORK*.*

      If you use the Target DIR Menu to select  a Target Drive,
      then the target file will be HOLD.ZIP by default.  By 
      placing the curser in the Dialog Box, you may edit the
      Default Target Name.

Enter "Target Name".  This should be the drive, directory, and
      the filename that you wish to have the ZIPed files in.
      Example:  C:\HOLD\WORKFIL.ZIP    B:\WORKFIL.ZIP

Select <RUN>.  This will ZIP your files.

NOTE:  It is not required that you UnZIP only files with the .ZIP 
extension, however if you try to UnZIP files that were not ZIPed 
you will get an error.  For this reason, you should always specify 
the .ZIP extension.

See Direct Entry   List Select Entry   Search Entry
    Source Dir     Target Dir
.TOPIC:
Self Extracting Files
Self Extracting means that an archived file will extract the archived 
files that it contains with out the use of an extractor program like 
PKUNZIP.  These files will have an .EXE extension and are treated 
like a standard program.  They are larger than a standard archived file, 
but are more convent to us when dearchiving.

Select "Self Extract" on the ACTION list

Enter "Source Mask".  This should be the drive, directory, and
      the filename that you wish to have made into a Self Extracting
      file.  This file Must have been ZIPed and have a .ZIP extension.
      This must be exact and will not except wild cards.
      Example:  C:\HOLD\WORKFILE.ZIP

      You may use the File Listing to select the file to be worked on.    

      The filename of the file being worked on will be used as the 
      filename of the new .EXE file.

Select <RUN>.  This will create your file.

See Direct Entry   List Select Entry   Search Entry
    Source Dir     Target Dir
.TOPIC:
UnZIPing Files
Select "UnZIP File" on the ACTION list

Enter "Source Mask".  This should be the drive, directory, and
      the filename that you wish to have UnZIPed.
      Example: C:\HOLD\*.ZIP   C:\HOLD\WORK*.ZIP  B:\WORKFILE.ZIP

      (Cation would be used in using wild cards as it is not
      uncommon for ZIPed files to contain ZIPed files.  It is also
      easier to evaluate programs if only one per subdirectory is
      unziped.)

Enter "Target Name".  This should be the drive, directory, and
      the filename that you wish to have the UnZIPed files in.
      Example:  C:\HOLD\    B:\

Select <RUN>.  This will UnZIP your files.

NOTE:  It is not required that you UnZIP only files with the .ZIP 
extension, however if you try to UnZIP files that were not ZIPed 
you will get an error.  For this reason, you should always specify 
the .ZIP extension.

See Direct Entry   List Select Entry   Search Entry
    Source Dir     Target Dir          ZIPing Files
.TOPIC:
ZIP Fixer
ZIP Fixer should be ran on a .ZIPed file when it will not dearchive.  
This will fix the problem most of the time.  However, you should be 
weary of the files that require ZIP Fixer as they may have been 
tampered with or contain a Virus.

Select "ZIP Fix" on the ACTION list

Enter the drive, directory, and filename to be acted upon.
      Example:  C:\HOLD\WORKFILE.ZIP

Select <RUN> to fix your file.

NOTE: You can not use wild cards.

See Direct Entry   List Select Entry   Search Entry
    Target Dir
.TOPIC:
Virus Scan
You should use a virus scan program that will receive parameters and 
execute from an other program.  We recommend the SCAN programs produced 
by McAfee Associates.  Your execution program MUST be named SCAN.EXE.

Select "VIRUS Scan" on the action list.

ENTER the drive, drive & directory, or drive & directory & filename to 
         be scanned into the Target Name Dialog Box.

ENTER <RUN> to scan your program(s).

See Direct Entry   List Select Entry   Search Entry
    Target Dir
.TOPIC:
Making a DIR
This will let you add SubDirectories to your disk.

Select "Make Dir" on the ACTION list.

ENTER in the Target Dir Dialog Box the drive or drive & directory that
         you wish the new directory to be subordinate to.  
      EXAMPLE:  C:\HOLD    B:\

ENTER in the Target Dir Dialog Box the name of the new subdirectory.
      EXAMPLE: C:\HOLD\NEWDIR   B:\NEWDIR

ENTER <RUN> to make the new directory.

See Direct Entry   List Select Entry
    Target Dir
.TOPIC:
Removing a DIR
This will let you remove SubDirectories from your disk.  The directory
to be deleted MUST not have any files in it at the time.  To remove
files see Delete a File

Select "Remove Dir" on the ACTION list.

ENTER in the Target Dir Dialog Box the drive or drive & directory that
         you wish to remove.  
      EXAMPLE:  C:\HOLD\NEWDIR    B:\NEWDIR

ENTER <RUN> to remove the directory.

See Direct Entry   List Select Entry  
    Target Dir     Delete a File
.TOPIC:
Delete a File
This function will let you remove or delete a file or files from 
      any directory on any drive.

Select "Delete File(s)" on the ACTION list.

ENTER in the Target Dir Dialog Box the drive or drive & directory that
      the file or files that you wish to remove are located.  
      EXAMPLE:  C:\HOLD    B:\

ENTER in the Target Dir Dialog Box the filename of the file(s) to be
      deleted.
      EXAMPLE: C:\HOLD\NEWDIR\*.*   B:\NEWDIR\*.TXT  D:\OLDFIL.DOC

ENTER <RUN> to remove file(s).

See Direct Entry   List Select Entry   Search Entry
    Target Dir
.TOPIC:
Format a Disk
This will let you Format your disk.

Select "Format Disk" on the ACTION list.

ENTER in the Target Dir Dialog Box the drive to be Formatted.  
      EXAMPLE:  C:\    B:\

ENTER <RUN> to display Dormant Selection list.

Select the disk size that fits your disk type (5 1/4 or 3 1/2).
      You may also select to have the SYStem placed on the disk,
      space left on the disk for SYStem, or no special action.

ENTER <Format> to format your disk.

See Target Dir
.TOPIC:
Copy File(s)
This will let you copy a file or files from one disk to another or from
        one directory to another.

Select "Copy File(s)" on the ACTION list.

ENTER in the Source Mask Dialog Box the drive or drive & directory that
        contains the file(s) to be copied.  
      EXAMPLE:  C:\HOLD    B:\

ENTER in the Source Mask Dialog Box the filespects of the file(s) to be
        copied.
      EXAMPLE: C:\HOLD\WORK*.*   B:\*.*  C:\WORK???.DOC

ENTER in the Target Name Dialog Box the drive & directory that the 
      file(s) is to be copied to.

ENTER <RUN> to copy your file(s).

See Direct Entry   List Select Entry   Search Entry
    Source Dir     Target Dir
.TOPIC:
Search
This function will locate a certain file or group of files in any 
          directory or group of directories on the specified drive.

ENTER <Search> key.  This will bring up the Search Menu.  

ENTER the Search Mask for the files you wish to locate.   
          You may use wild cards <*> <?>.

From the listing high-light the file you wish to work with.  
         This will replaced in the Source Mask Dialog Box.  
         You may then enter any of the functions that display 
         the Source Mask Dialog Box.
.TOPIC:
Using Help
Selecting a Help link:
----------------------
With a mouse - click on phrases outlined by two triangles.
With the keyboard - Press TAB or Shift-TAB to select a link.
   Press ENTER to jump to that topic.

Scrolling the Help window:
--------------------------
With a mouse - click on the horizontal or vertical scroll
   bars.
With the keyboard - press the cursor navigation keys (arrow keys).

Closing the Help window:
------------------------
With a mouse - double click on the window's control box icon.
With the keyboard - press Ctrl-F4.

Command Buttons:
----------------
Applications may use one or more of the following command
buttons.  Use a mouse to click a button or press the letter
mentioned below.

Contents - displays a table of contents for the application's
   Help.  Press C to select Contents.

Search -  opens a dialog box that lists all available Help
   topics.  Select a topic from the list box and press ENTER.
   Press S to select Search.

Back - jumps to the last Help topic viewed. Press B to select
    Back.

History - lists the last 20 Help topics viewed.  Jump to a
    topic by selecting from the list box and pressing ENTER.
    Press H to select History.

Print - Prints the contents of the current Help topic to
    a printer or a file.  Select the text you want copied to the
    Clipboard and choose Print.  Choosing Print without selecting
    any text in the edit area prints the entire Help topic to
    the printer or a file.
    Press P to select Print.

.TOPIC:
ORDER FORM

     The COMmunications NETwork School and Publishing Company
       P.O. Box 376  /  Farmington, New Mexico  87499-0376
            voice (505)325-6738  modem (505)326-2436

                                          CPU Type
                                           P 2 3
  Item No.   Title                         C 8 8 Price   Quty   Total   
---------------------------------------------6-6-----------------------
1|  U19   | Screen Minder II              | | | | 25.00 |      |
2|  U23   | Remote SYSOP Screens (MajorBBS|#|#|X|  5.00 |      |
3|  U24   | ZIP Shell                     | | | | 15.00 |      |
4|  P10   | HyperText Help&Catalog System | | | |150.00 |      |
5|        |                               | | | |       |      |
6|        |                               | | | |       |      |
7|        |                               | | | |       |      |
8|        |                               | | | |       |      |
9|        |                               | | | |       |      |
------------------------------------------------------------------------
 Make Check Payable to:                SubTotal          |
      COMmunications NETwork S&P Co.   Discount Rate     |
                                       SubTotal          |
                                       N.M Sales Tax 5.6%|
 <<IND>>                               TOTAL ----------->|
------------------------------------------------------------------------
             ALL PROGRAMS ARE FOR IBM COMPATIBLES
------------------------------------------------------------------------
For credit Card orders ONLY:
Card Type  Master Card [  ]  VISA [  ]
Card Number:___________________________  Exp Date:_________
Name on card:__________________________
Signature:_____________________________
------------------------------------------------------------------------
Send Disk to:
Name:   ________________________________
Address:________________________________
City:   _________________ State:____ Zip:________
Phone:  (____)____-_______
========================================================================

.TOPIC:
Direct Entry
You may select the Dialog Box that you wish to make the enter in 
with the mouse or the <Tab> key.  Then, type in the filespect needed.

Example C:\test\workfil.doc    C:\test\*.*    C:\test\work???.*

You may use wild cards <*> and <?> in your filespects.

This method may also be used the Edit data that is in any Dialog
Box.

The Dilog Boxes are: Source Mask and Target Dir
.TOPIC:
List Select Entry
Select the default drive by clicking on the down arrow above the
directory list box in the lower right of your screen.  Select the
desired drive.  In the directory list box you should select the
desired subdirectory.

You will see the files of the selected subdirectory in the file
list box in the lower middle of your screen.  You may click on
the desired file.

NOTE: some actions take a double-click and some may take a triple-
click from your mouse.
.TOPIC:
Search Entry
Press the <Search> key and enter the search parameters.  You will
see a file list box with all the files that fit your parameters.
You may click on the desired file.

Entering search parameters.  Enter parameters so as to give
you only the files that you wish to look at. 
Example C:\test\workfil.doc    C:\test\*.*    C:\test\work???.*

To check all of the disk enter only drive letter and the <*> 
wild card.
Example  A:\*.*    B:\*.*   C:\*.*   D:\*.*

You may use wild cards <*> and <?> in your filespects.
.TOPIC:
Source Dir
Click on the down arrow to the right.  This will show a menu list
of drives that may be used.  By clicking on the desired drive it
will be placed in the Source Mask Dialog Box.
.TOPIC
Target Dir
Click on the down arrow to the right.  This will show a menu list
of drives that may be used.  By clicking on the desired drive it
will be placed in the Target Dir Dialog Box.






```
{% endraw %}

## READ&ME.DOC

{% raw %}
```


ZIP Shell v1.01S
Copyrighted 1993 by
The COMmunications NETwork School
and Publishing Company 
All Rights Reserved



Disclaimer:

This information is very important - Read Carefully

THIS IS  A LEGAL AGREEMENT BETWEEN  YOU THE END USER  AND The
COMmunications   NETwork   School   and   Publishing  Company
("COMPANY"). BY  USING THIS SOFTWARE  YOU ARE AGREEING  TO BE
BOUND BY THE TERMS OF THIS AGREEMENT.

1   SOFTWARE LICENSE

1.1 GRANT OF LICENSE.

COMPANY grants you the right to copy of the enclosed software
program (the  "SOFTWARE") on any  number of single  computers
(i.e  CPU). You  may merge  this software  into an executable
load  module  (specifically  an  MS-DOS  COM  or  EXE file or
functional equivalent).

1.2 COPYRIGHT.

The SOFTWARE is  owned by COMPANY and is  protected by United
States  copyright laws  and international  treaty provisions.
Therefore you  must  treat  the  SOFTWARE  like  any  other
copyrighted material (e.g. a book or musical recording)

2   LIMITED WARRANTY

The SOFTWARE is provides "AS IS" without warranty of any kind
either expressed or implied including  but not limited to the
implied  warranties  of  merchantability  and  fitness  for a
particular  purpose. The  entire risk  as to  the quality and
performance of the software is  with you. Should the software
prove  defective  you  shall  assume  the  entire cost of all
necessary remedies.

Some states do not allow the exclusion of implied warranties
so the  above exclusion may  not apply to  you. This warranty
gives you specific  legal rights and you may  also have other
rights which vary from state to state.

3   LIMITATIONS OF REMEDIES

The  COMPANY's  entire  liability  and  your exclusive remedy
shall be at COMPANY's option (a) the repair or replacement of
the SOFTWARE  that does not  meet COMPANY's Limited  Warranty
and  which  is  returned  to  COMPANY  or  (b)  return of the
purchase price upon return of all copies of the SOFTWARE.


IN  NO  EVENT  SHALL  COMPANY   be  liable  for  any  damages
whatsoever (including without limitation  damages for loss of
business  profits  business  interruption  loss  of  business
information or  other pecuniary loss) arising  out of the use
of  the SOFTWARE  even if   COMPANY has  been advised  of the
possibility of such damages. Because some states do not allow
the exclusion or limitation of liability for consequential or
incidental damages the above limitation may not apply to you.

This Agreement will  be governed by the laws  of the State of
New Mexico.

BY  USING THIS  SOFTWARE YOU  ACKNOWLEDGE THAT  YOU HAVE READ
THIS  AGREEMENT UNDERSTAND  IT AND  AGREE TO  BE BOUND BY ITS
TERMS  AND  CONDITIONS.  YOU  FURTHER  AGREE  THAT  IT IS THE
COMPLETE AND EXCLUSIVE STATEMENT  OF THE AGREEMENT BETWEEN US
WHICH  SUPERCEDES ANY  PROPOSAL  OR  PRIOR AGREEMENT  ORAL OR
WRITTEN AND  ANY OTHER COMMUNICATIONS BETWEEN  US RELATING TO
THE SUBJECT MATTER OF THIS AGREEMENT.



START UP
ZIP Shell  is  a  Microsoft  Mouse  driven  program that
permits the use  of the arrow keys Alt  & Key combinations or
Tab & Enter rather than the mouse.

To run ZIP Shell:

1)  To SetUp this program you need to place the program  in the same 
directory with your PKZIP and Virus scan files.  Place the help
text file (HELPARC?.TXT) is your root directory (C:\).

2) Place the command to  start your mouse (MOUSE.EXE) in your
AUTOEXEC.BAT. This is optional but recommended.

3) Place ZIP Shell directory in your AUTOEXEC.BATs PATH.

4) The last command in your AUTOEXEC.BAT should be ZIPSHEL?.EXE



OPENING SCREEN
Press HELP for detailed information on how to use your program.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3948

     Volume in drive A has no label
     Directory of A:\

    SCROLLIT ZIP     37194   8-12-93   9:50a
    SVGA     ZIP     60701   8-12-93   9:54a
    SYSCHK   ZIP     70410   8-12-93   9:55a
    ZIPSHELL ZIP    139525   8-12-93   9:48a
    GO       BAT        30   8-12-93  10:01a
    GO       TXT      1155   8-12-93  10:06a
    PKUNZIP  EXE     29378   2-01-93   2:04a
            7 file(s)     338393 bytes
                           19456 bytes free
