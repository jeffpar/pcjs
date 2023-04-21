---
layout: page
title: "PC-SIG Diskette Library (Disk #870)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0870/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0870"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HGCIBM-COLOR EMULATION FOR HERCULES"

    If you're the owner of a computer with a Hercules monochrome graphics
    adapter card, and have been lusting after a nice piece of color graphic
    (CGA) software, but can't run it because of your current computer set-
    up, this software will solve your problems.
    
    HGCIBM provides owners of Hercules graphics cards with a means to run
    software written for the IBM Color Graphics Adapter.  You need no
    additional hardware to run this emulator -- HGCIBM works by ``tricking''
    programs into thinking you have a color card when you don't.
    
    With HGCIBM, a color program won't shut itself down but instead, will
    continue to send video output to your monochrome screen.  This program
    is one of the few ``must-own'' programs for all Hercules users.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES870.TXT

{% raw %}
```
Disk No  870
Program name: HGCIBM version 2.02
PC-SIG version 1
 
    HGCIBM provides owners of hercules graphics cards a means to run
software written for the IBM Color Graphics Adapter, and to introduce a
commercial version of the BIOS called Athena Digital Video BIOS which
offers added functionality.
 
Usage: Color Graphic Emulation on a Hercules Monographic Card.
 
System Requirements: 128K memory, a monochrome monitor, one
disk drive, and a Hercules Monochrome Graphics Adapter.
 
How to Start: Type: HGCIBM (press enter).
 
File Descriptions:
 
DISK     ID   Data file.
FEATURES PRX  Datafile.
HGCIB202 ARC  Archived file holding a backup of this disk.
HGCIBM   COM  CGA emulator for the Hercules Monochrome graphics card.
HGCIBM   DOC  Documentation file.
HGCTEST  BAS  Test graphics program.
PRINTDOC BAT  Batch file to print documentation.
PRINTDOC MSG  Preliminary message accessed by PRINTDOC.BAT.
QBDEMOC  EXE  Graphic Demo.
REGISTER      User registration form.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG

```
{% endraw %}

## HGCIBM.DOC

{% raw %}
```











                             HGCIBM.COM Version 2.02
               Copyright (C) Athena Digital, Gary Batson 1986, 1987
             2351 College Station Road, Suite 567, Athens, Ga. 30605
                                  404/354-4522

                          This Manual Dated June 1, 1987








































                                        1









                                TABLE OF CONTENTS

                                   HGCIBM.COM

        Acknowledgements .............................................  3
        Trademarks ...................................................  3
        Using HGCIBM.COM .............................................  3
        Precautions ..................................................  3
        Installation .................................................  4
        Using the Command Line .......................................  5
        HGCTEST program ..............................................  5
        Sales and Distribution Policies ..............................  6
        User Comments ................................................  6
        History ......................................................  6
        Future .......................................................  7
        Changes and Corrections ......................................  7
        Technicalities ...............................................  8

                            Athena Digital Video BIOS

        Purpose ......................................................  9
        Features .....................................................  9
        Control Program .............................................. 11
        Sales and Distribution Policies .............................. 11
        Software Author Note ......................................... 12
        Extended Functions ........................................... 13
        Library Versions ............................................. 19
        QBDEMOC program .............................................. 19

        This program is distributed as Shareware. All rights are reserved 
        except for distribution of the program, its documentation, and 
        any DEMO materials IN ITS ENTIRETY and un-modified. You may test 
        and use this program for 30 days, after which you must register 
        it, destroy it, or pass in along to a friend. If you would like 
        to keep HGCIBM, see the pricing within. This DOES NOT APPLY to 
        those who contributed to HGCIBM Version 1.11. Those individuals 
        are welcome to this upgrade without further remuneration. Please 
        accept it with my THANKS!!

        Athena Digital's program and emulation algorithms were first 
        Copyrighted June 10, 1986. It is now the basis for the existence 
        of Athena Digital and represents months of effort and a large 
        personal investment. Any information presented in this document 
        or available in the associated programs is and shall remain the 
        Copyrighted Property of Athena Digital. Any attempt to use this 
        information to create a competitive product, whether the product 
        is distributed "free" or otherwise is in violation of copyright 
        laws.

                                 Athena Digital
             2351 College Station Road, Suite 567, Athens, Ga. 30605





                                        2









        DISCLAIMER

        Athena Digital makes every effort to ensure that this 
        documentation is accurate. However, because we are constantly 
        striving to improve our products, we are unable to guarantee the 
        accuracy of the contents of this document after the date of 
        publication and we disclaim liability for any changes, errors or 
        omissions. We have also made every effort to warn you of possible 
        damage to your equipment from careless use of other applications 
        with ours. If you do somehow damage your display or anything 
        else, Athena Digital ASSUMES ABSOLUTELY NO RESPONSIBILITY FOR IT. 
        If it will make you more confident, no such claims have ever 
        been made against us .. but we have to protect ourselves.


        ACKNOWLEDGEMENTS

        Athena Digital would like to thank IBM for creating the Personal 
        Computer and Hercules Computer Technology for making PC graphics 
        as pleasurable as PC TTL text.


        TRADEMARKS MENTIONED

        Hercules and RamFont are trademarks of Hercules Computer 
        Technology.

        IBM is a trademark of International Business Machines.

        Microsoft, QuickBASIC, CodeView and MS-DOS are trademarks of 
        Microsoft Corporation.

        Athena Digital Video BIOS is a trademark of Athena Digital.


        USING HGCIBM.COM

        The purpose of this program is to provide owners of Hercules 
        Graphics Cards a means to run software written for the IBM Color 
        Graphics Adapter, and to introduce a commercial version of the 
        BIOS called Athena Digital Video BIOS which offers added 
        functionality.


        PRECAUTIONS - MONOCHROME DISPLAY DAMAGE !!!

        This program will not damage your display, but certain 
        application software certainly can. Programs which attempt to by-
        pass the BIOS (Basic Input/Output System) to set the CRT 
        operating parameters will cause severe problems. Fortunately 
        since most software operates in standard modes, most software 
        developers permit BIOS to set up the controller for them even if 
        they later write to screen ram directly.
                                    (cont'd)



                                        3









        HGCIBM will intercept the BIOS calls for all standard modes and 
        program the controller correctly. Writing directly to screen ram 
        is permitted and the emulator will still work properly. When 
        trying an un-tested (with HGCIBM) program for the first time, 
        watch your display carefully for signs of gross distortion or 
        shrinking when the program sets graphics mode. IF THIS OCCURS, 
        RE-BOOT OR TURN OFF YOUR COMPUTER IMMEDIATELY. The display should 
        return to normal quickly when you re-boot.

        HGCIBM INSTALLATION

        To install the emulator, you must tell it what mode to start in, 
        and a little information about your hardware. There are three 
        "modes" of operation for HGCIBM as follows:

        The /E[mulate] mode enables the emulator to respond to BIOS calls 
        to set standard CGA modes and provides maximum compatibility with 
        programs expecting to use the Color Graphics Adapter, but 
        displays the information on your Hercules adapter. When the 
        emulator is in this mode, the text buffer is at segment B800 and 
        the equipment flag is set to indicate that a CGA card is present. 
        Alas, you can't fool all the programs all the time. Some of them 
        read the equipment flag and then try to manipulate the crt 
        controller directly in order to provide faster screen output. 
        Naturally they try to do this at the CGA port addresses (which 
        don't exist) and will hang the system (This problem is overcome 
        with Athena Digital Video BIO). A re-boot will cure the problem 
        and you should then remember to either un-install the emulator 
        before running these programs or simply place it in /M(ono) mode 
        or /C[GA] mode (if you have a physical CGA) as described below.

        The /M[ono] mode effectively disables HGCIBM without uninstalling 
        it. The monochrome card is selected and Video BIOS control 
        returns to the computer's ROM (Read Only Memory).

        The /C[ga] mode also disables HGCIBM and returns control to ROM 
        except the physical Color Graphics Adapter is selected (if it 
        exists).

        There are also 3 installation switches available to warn HGCIBM 
        about special hardware. During initialization, the program tries 
        to determine if a Color Graphics Adapter is present. If it is, 
        the program will not install unless you assure it that the Color 
        Graphics Adapter in your system is compatible with Hercules 
        Graphics cards. If yours is or you have a Leading Edge computer, 
        then you should use the following switches:

        The /H[ercules Compatible] switch instructs HGCIBM to install and 
        allow the emulation mode even though a Color Graphics Adapter is 
        present. You may use this switch on installation if you have a 
        Hercules compatible CGA card in your system. If a CGA card is 
        present, HGCIBM will abort installation unless the /H switch is 
        used.
                                    (cont'd)



                                        4









        Also note that some software will output to the CGA registers 
        (3D4, 3D5, 3D8, etc.) to adjust video parameters. This can wreak 
        havoc on the real CGA adapter while in Emulation mode. If the CGA 
        is not physically present, this output causes no problems and is 
        ignored by Hercules adapters.

        The /L[eading Edge] switch instructs HGCIBM to install if the 
        Leading Edge Model D is connected to a TTL display.

        The /U[n-install] switch instructs the emulator to reset all 
        vectors and remove itself from memory, freeing the space for 
        other programs. You may un-install the emulator provided that 
        other programs have not altered vectors 8h and 10h, but memory 
        may become segmented if you have loaded another resident program 
        after HGCIBM. The system will be left in the same condition it 
        was in before the installation. (i.e. monochrome display).

        USING THE COMMAND LINE

        Simply type the command HGCIBM with a mode switch to install or 
        change to that mode. If you have special hardware, ADD the 
        hardware switch to the mode switch on the same command line as 
        shown in the following examples:

        HGCIBM /M      - installs in (or changes to) MONO mode (emulation 
                         disabled)
        HGCIBM /C      - installs in (or changes to) CGA mode (emulation 
                         disabled)
        HGCIBM /E      - installs in (or changes to) Emulation mode.
        HGCIBM /U      - un-installs the emulator
        HGCIBM /M/H    - informs HGCIBM that a Hercules compatible CGA is 
                         physically present.
        HGCIBM /M/L    - informs HGCIBM that you have a Leading Edge 
                         Model D computer.

        These commands may be issued from a batch file if desired.
        Hardware switches (/H or /L) are needed only on installation.

        To change modes after installation, just enter the command as 
        above. HGCIBM always checks to see if it is already installed and 
        will process the command correctly.

        HGCTEST PROGRAM

        This program is provided for you to test the operation of HGCIBM 
        with your computer configuration. Before running HGCTEST, Load 
        the emulator with the /E[mulate] switch. HGCTEST.BAS runs under 
        BASICA. Just enter BASICA HGCTEST to run it (assuming BASICA is 
        on the default disk drive with HGCTEST.BAS). The program is a 
        simple graphics demo and is self explanatory. If you have a basic 
        compiler, the demo program can be compiled to test the compiler.





                                        5









        SALES AND DISTRIBUTION POLICIES - HGCIBM.COM

        There is no limitation on distribution of HGCIBM.COM as long as 
        no remuneration is accepted in connection with it's distribution, 
        and as long as it is distributed un-modified, in it's entirety 
        (including any DEMO materials), and BY ITSELF. IT MUST NOT BE 
        DISTRIBUTED WITH your own application program or hardware, but it 
        is OK to mention that your software/hardware will/wont run with 
        it and our name and telephone number (so he can obtain a copy to 
        run your program). You are permitted a 30 day trial period to 
        decide whether or not you wish to keep HGCIBM or purchase Athena 
        BIOS after which you must either register it with Athena Digital, 
        destroy it, or pass it along to someone else. The registration 
        fee for HGCIBM.COM is $10.00 in check or money order (see 
        REGISTER file in this package).

        OEMS and Dealers are encouraged to support Athena BIOS with their 
        products. HGCIBM is an extremely limited version of Athena 
        Digital's software. Those interested should contact Athena 
        Digital for details. 

        USER COMMENTS

        Let us know what you think. Any criticism is better than none and 
        will help to steer us along a path which is in the majority's 
        best interest. Your suggestions need not be limited to graphics. 
        Any comment regarding Athena Digital programs or documentation is 
        welcome.

        Thank you for your support.

        HISTORY

        In June of 1986, Athena Digital released a simple "Freeware" 
        emulator for Hercules cards which supported only the 200 by 640 
        Color Graphics Card mode (HGCIBM.COM Version 1.11). To our 
        knowledge, this was the first such program publicly released. At 
        first glance there would appear to be no physical way to 
        effectively display CGA graphics on a ttl card. It not only could 
        be done, but done in such a way that resulting display quality is 
        actually better than the real CGA though it is in shades of one 
        color. Support came in from users as far as Israel and eventually 
        from CGA software developers. Though it represented no serious 
        income, This support inspired Athena Digital to create HGCIBM.COM 
        Version 2.00 which offers emulation support of all of the CGA 
        modes and to start the development of Athena's own Video BIOS to 
        support not only emulation, but to provide an upgradeable and 
        expandable Video BIOS which enhances any display system. 








                                        6









        FUTURE

        Version 2.02 provides only a SUBSET of the Athena Digital support 
        functions. It is a functional emulator only, and does not offer 
        support for Microsoft Mouse, Extended Video BIOS calls, RamFont, 
        or EGA. Due to restrictions imposed by the "resident" utility 
        implementation, the commercial release of Athena's BIOS 
        (ATHENA.SYS Version 3.00) is in the form of an MS-DOS Device 
        Driver. Installed in this way, the program becomes as much a part 
        of the operating system as is the ROM Video BIOS, except that it 
        can be easily upgraded and enhanced. Future enhancements will be 
        limited to Athena BIOS, thus obseleting HGCIBM.COM except as a 
        simple emulator. If bugs are found in HGCIBM, they will be 
        corrected. For more information about the commercial products, 
        read the section called Athena Digital Video BIOS in this 
        document.

        HGCIBM CHANGE AND CORRECTION NOTES

             o    Version 1.11 would sometimes crash with programs that 
                  intercepted the timer interrupt while in Graphics, and 
                  then changed to text.

             o    If interrupts were redirected, Version 1 could not find 
                  itself for a mode change and would install a second 
                  copy. Now it can find and control itself unless it is 
                  bypassed altogether.

             o    Version 2.00 (beta test version) would not install on a 
                  Leading Edge due to differences in the way the Leading 
                  Edge video buffers are implemented. This was corrected 
                  with the /L[eading Edge] switch.

             o    Version 2.01 failed to detect the EGA and would treat 
                  it as a CGA. Now HGCIBM will abort installation as it 
                  is supposed to.

        ENHANCEMENTS
             o    Version 2.02 contains a SUBSET of Athena Digital's own 
                  Video BIOS and will support a wider range of 
                  compatibles as well as the AT. This also provided a 
                  means for improved screen behavior in color text mode, 
                  and faster screen operations if BIOS is used.

             o    All standard video modes are now supported. The 320 x 
                  200 mode supports two intensities(colors). Color 1 and 
                  color 2 will appear identical, where color 3 will be 
                  high intensity. Forty column text is supported but will  
                  be displayed on the left half of the screen only at the 
                  same resolution as eighty column text. All four pages 
                  of 80 column text (or 8 pages of 40 column text) are 
                  available on CERTAIN Hercules cards. Some cards will 
                  display only one page (Athena Video BIOS displays all 
                  pages on all Hercules Adapters and clones).



                                        7









        TECHNICALITIES

        HGCIBM installs itself between two BIOS (Basic Input/Output 
        System) interrupts. The two interrupts used in this way are hex 
        10 (BIOS video) and hex 8 (timer). The later is used only while 
        in emulation mode. HGCIBM will fail to function properly if it is 
        not given control during the above interrupts. Other software 
        using interrupt 8 will be called on a priority basis, preempting 
        HGCIBM if necessary. HGCIBM version 2.02 no longer passes 
        interrupt 10h (while in emulation mode) since it was learned that 
        compatible ROM BIOS was not always entirely compatible. If you 
        have other software using interrupt 10h, try loading it after 
        HGCIBM. You can still control HGCIBM after the interrupt is 
        changed but you will not be allowed to un-install it. HGCIBM need 
        be loaded only once each time the computer is started since it 
        attaches itself to BIOS and stays in memory until re-boot or it 
        is commanded to detach. The memory usage has increased to about 
        5k now due to bypassing of ROM video BIOS in emulation mode, but 
        does provide much improved color text emulation and should be 
        compatible with a wider variety of machines.




































                                        8









                         Athena Video BIOS Version 3.00
                     Copyright (C) Athena Digital 1986,1987

         Preliminary Specifications - Subject to change without notice.

                                     PURPOSE

        For some unknown reason, hardware and software vendors have not 
        seen fit to establish adequate specifications and graphics 
        support for the widely used Hercules Graphics standard. The most 
        peculiar aspect of this is the fact that the Hercules standard 
        was the third available for the IBM personal computer and the 
        first which offered truly high graphics resolution as well as the 
        first to support graphics on the ttl monochrome display. Today, 
        this standard is almost universally accepted as the display 
        adapter of choice for ttl monochrome PC systems and its display 
        quality is yet challenged only by the EGA standard which 
        unfortunately requires an expensive color monitor to exploit it's 
        capabilities.

        Athena Digital will attempt to remedy the problem by making it as 
        simple as possible for vendors to exploit the capabilities of the 
        Hercules card, CGA, EGA and others. Athena BIOS now fully 
        supports the Hercules monochrome card and/or Color Graphics Card, 
        the EGA (and eventually others) with fast support for standard 
        modes, CGA emulation, and several new modes.

        One of the primary enhancements provided by ATHENA BIOS is 
        Emulation of the Color Graphics Adapter on the Hercules Graphics 
        Card. This allows Hercules owners to run the majority of graphics 
        programs which do not already support the Hercules adapter. The 
        list includes programs like BASICA, QuickBASIC, CodeView and the 
        majority of all others.

        This eliminates the need for a Color monitor and graphics card in 
        many cases with obvious price advantages.

        Athena also provides BIOS support for the higher resolution 
        Hercules 350 vertical by 720 horizontal modes, and a new 350 
        vertical by 360 mode with three intensities and 4 logical pixel 
        colors. ALL of the Standard BIOS call support for these new modes 
        including character generation, scrolling, and adapter switching 
        which greatly simplifies direct support of Hercules high 
        resolution modes by software vendors.

        ATHENA FEATURES

        o    Available in Programmer's Libraries for linking with high or 
             low level languages.

        o    Supports 6 new Hercules only modes, which are as      
             readily available to applications developers as are the      
             standard modes.



                                        9









        o    Provides extended equipment, system capability information 
             for applications.

        o    Supports Color Graphics Adapter Programs on the Hercules 
             Graphics Card.

        o    Fully compatible with Microsoft Mouse or Microsoft Mouse 
             software look-alikes.
         
        o    Includes a "Buss Terminator" which eliminates ALMOST all 
             of the application software incompatibility with Emulation 
             modes. This allows Microsoft's CodeView and QuickBasic 
             editors to function normally in Emulation mode.

        o    BIOS Character generation and scrolling in Emulation Modes 
             is accomplished without ghosting and no appreciable loss in 
             speed (it is usually faster than the CGA through ROM BIOS).

        o    All 4 pages of 80 column CGA text (or 8 pages of 40 column 
             text) are available on ALL Hercules cards or compatibles.

        o    Fully supports Hercules - Enhanced Graphics (color monitor) 
             combinations.

        o    Fully Compatible with the new Hercules Plus card in 4K 
             RamFont or Rom text mode.

        o    Supports new "Context Switching" between adapters and 
             certain modes.

        o    Supports faster video operation in ALL modes than Standard 
             ROM BIOS.

        o    Simple replacement for "buggy compatible" BIOS.

        o    Installs as a device driver for MS-DOS version 2.00 or later

        o    Adds PC-AT BIOS print string functions to the PC

        Once installed, Athena BIOS replaces the standard ROM video BIOS. 
        Software installation is a matter of copying ATHENA.SYS to your 
        boot disk, and inserting a one line command in your MS-DOS 
        config.sys file. This MUST be the FIRST "DEVICE =" command in the 
        file following the MOUSE and has the following basic form:

                               DEVICE = MOUSE.SYS
                               DEVICE = ATHENA.SYS

             Athena BIOS is compatible with a variety of MS-DOS 
        computers, including the PC, PC-XT, PC-AT, and Leading Edge, and 
        most any other hardware compatible. Our aim is to work with as 
        many different computers and display adapters as possible.




                                       10









        Version 3.00 Video Bios does not replace EGA BIOS, but is 
        compatible with it and controls it. If a non-ega adapter is 
        active, Athena BIOS controls the active adapter. While the EGA is 
        the active display, EGA BIOS controls the EGA adapter. Athena 
        BIOS supports the Hercules Graphics Card in FULL modes WITH the 
        EGA (if it is connected to a color display). The BIOS will 
        continue to add features supporting as many of the popular 
        adapters as possible and enhancing them wherever practical in 
        order to maintain compatibility for your programs.

        CONTROLLING ATHENA BIOS AFTER INSTALLATION

        With ATHENA.SYS, you are provided a utility which allows you 
        keyboard control over Athena's variety of modes. This utility 
        operates as any other external DOS command. Simply place it in 
        your program directory and use it with switches. If you forget 
        the switches, typing ATHENA will give you a help screen.

        ATHENA /M[ono]      - Places BIOS in MONO or EGA MONO mode 
                              (emulation disabled)
        ATHENA /C[ga]       - Places BIOS in CGA or EGA Color mode 
                              (emulation disabled)
        ATHENA /E[mulate]   - Places BIOS in CGA EMULATION mode.
        ATHENA /S[tatus]    - Gives a report of Athena's status.
        ATHENA /Q[uiet]     - ADDING this switch to others to suppress 
                              messages.
        ATHENA /D[isable]   - Disables the BIOS and returns control to
                              ROM
        ATHENA /R[eset]     - Resets and enables the BIOS.

           These commands may be issued from a batch file if desired.

        SALES AND DISTRIBUTION POLICIES - ATHENA.SYS

        For the purchase price of $34.95, you will receive the program on 
        a 5.25" IBM format diskette with documentation and Buss 
        Terminator, and be notified of upgrades at low cost as they 
        become available.

        Dealers, OEMS, and those desiring Site Licenses are welcome and 
        encouraged to contact Athena Digital about liberal discounts.















                                       11









        SOFTWARE AUTHORS

        Using Athena Video BIOS Libraries, you can easily upgrade your 
        application to support Hercules Adapters. There are several 
        options available to you with the library:

             o    You can link Athena Digital Video BIOS with your 
                  application. This allows your program to use all Athena 
                  functions whether the Athena device driver is present 
                  or not.

             o    You can link with the interface module only. This 
                  allows you to detect and and use Athena BIOS if the 
                  Device Driver is present.

             o    You can link a PARTIAL BIOS with your application. This 
                  allows you to use the CGA Emulation modes whether the 
                  Device Driver is present or not, but defeats the usage 
                  of Hercules Extended modes.

        See the QBDEMO program included for mmany more details.

        SUPPORTED HARDWARE

        o    IBM PC /XT /AT and most hardware compatibles which have an 
             expansion buss. (Expansion buss not necessary for 
             Libraries or for systems which will not need CGA Emulation).

        o    Microsoft Mouse (device drivers) or software compatibles 
             which provide Microsoft's defined function calls.

        o    The following Video hardware combinations have been tested 
             to date:

             Hercules Graphics Adapter, all versions including Plus. (MGA)
             IBM Monochrome Text Adapter. (MTA)
             IBM Color Graphics Adapter .. Hercules Color Card. (CGA)
             IBM Enhanced Graphics Adapter (EGA)
             Monochrome EGA with CGA
             Color EGA or CGA with MTA or MGA.
















                                       12









        Athena Digital Video BIOS FUNCTION CALLS

             This information is provided for technical users, and 
        presumes familiarity with Standard BIOS function calls. Presented 
        here is a subset of available services. A complete listing is 
        available in the Athena Video BIOS Programmers Reference Manual, 
        provided with each Programmer's Library.

        THIS DOCUMENT CONTAINS PRELIMINARY INFORMATION ABOUT ATHENA VIDEO 
        BIOS CONTEXT CALLS. THE PURPOSE OF THIS IS TO SHOW THE INTENT OF 
        THE CALLS. FOR PERMANENT AND ACCURATE INFORMATION, RELY ON THE 
        PROGRAMMER'S REFERENCE DATA PROVIDED WITH LIBRARY PACKAGES.
        ; ****
        (AH)=B0h     SetContext - (AL) contains context value

        These functions first save the current BIOS variables in the 
        current Context Buffer, then change the current VideoState 
        "emulation active" flag according to the table below and take one 
        of three actions depending on the condition of the target 
        screen's Context save buffer. There are 3 save buffers in the 
        initial Athena BIOS release:

             o    Hercules / Monochrome / Mono EGA adapter page at 0B000h
             o    Hercules adapter page at 0B800h
             o    Color Graphics Adapter / Color EGA Adapter at page 0B800h

        Each save buffer has room for:

             o    The current crt_context
             o    The current crt_mode
             o    The current crt_columns
             o    The current crt_len
             o    The current crt_start
             o    The current cursor_posn[8]
             o    The current cursor_mode
             o    The current active_page
             o    The current addr_6845
             o    The current crt_mode_set
             o    The current crt_palette
             o    The current rows
















                                       13









        Call B0h (cont'd)

        The three possible actions through call B0h are:

             o    If register AL bit 7 = 1 (or'd with 80h), the target 
                  screen Context buffer is initialized and the screen
                  is cleared.

                  Otherwise, the screen is not cleared and the Context 
                  buffer is treated as follows:

             o    If the target context's save buffer has not been 
                  overwritten since it was saved, it is restored intact.

             o    If the target context's save buffer has been 
                  overwritten, it is initialized to default values of the 
                  Target Context before restoration.

        Context switches do not "blink" the screen unless it is necessary 
        to re-program the 6845 controller to make the switch.

        This is a powerful function. It enables programmers to switch 
        rapidly back and forth between graphics and text, or between 
        adapters without having to concern themselves about re-
        initializing or restoring the screen(s). It also permits rapid 
        switching between 40 or 80 column graphics text modes without 
        loss of screen data, allowing mixed use of the provided (or user 
        provided) character fonts in Hercules Graphics modes. When 
        switching between 40 and 80 column text, the Context buffer is 
        initialized, so it is necessary to locate the cursor wherever you 
        want it in the new text map.

        Context switches also affect the way Athena interprets calls to 
        the standard BIOS function 0 as shown below. These calls cannot 
        be used to overide the hardware setup determined by Athens during 
        initialization. Calls for invalid context switches are ignored 
        and the call returns with the carry flag set:



















                                       14









        Athena BIOS function call B0h (continued):
                CONTEXT VALUES AND EFFECTS ON CGA EMULATION FLAG
        ;
        TARGET MODE         EMULATION           TARGET SCREEN

                            Standard Modes (Contexts)

        (AL)=0              deactivated         CGA/EGA 40x25   alpha
        (AL)=1              deactivated         CGA/EGA 40x25   alpha  
        (AL)=2              deactivated         CGA/EGA 80x25   alpha
        (AL)=3              deactivated         CGA/EGA 80x25   alpha
        (AL)=4              deactivated         CGA/EGA 200x320 graph
        (AL)=5              deactivated         CGA/EGA 200x320 graph
        (AL)=6              deactivated         CGA/EGA 200x640 graph
        (AL)=7              deactivated         MONO/EGA 80x25  alpha
        (AL)=13             deactivated         EGA     320x200 graph
        (AL)=14             deactivated         EGA     640x200 graph
        (AL)=15             deactivated         EGA     640x350 graph
        (AL)=16             deactivated         EGA     640x350 graph


        Call B0h (cont'd)
                               Hercules only modes

        CGA Emulation Contexts: (correspond to Standard modes 0 - 6)
        (AL)=20
           .                activated           HERC page at B800*
           .
        (AL)=26

        Hercules Logical Text Context 27:
        (supports 8 pages of 80 column text on ALL Hercules Cards)
        (AL)=27             deactivated         HERC 80x25 alpha

        Hercules Graphics Contexts 28,29,30,31:
        (AL)=28             deactivated         HERC 350x720 at B000
        (AL)=29             deactivated         HERC 350x720 at B800
        (AL)=30             deactivated         HERC 350x360 at B000*
        (AL)=31             deactivated         HERC 350x360 at B800*

        *modes 24,25, 30 and 31 support low and high intensity















                                       15









        Certain Context changes are not possible without erasure of the 
        contents of a previously buffered Context. To gain an 
        understanding of which context switches can be performed without 
        erasing another, study the above table. Context switches between 
        adapters never cause erasure. Context switches between differing 
        Hercules pages are likewise retained, except for emulation text 
        Contexts 20,21,22,23, and Logical text Contexts 27. 

        Emulation and Logical text modes use BOTH Hercules pages, thereby 
        erasing any previously saved Hercules Context .

        ; ****
        (AH)=D0h      SetAdapter - (AL) contains new Context Value as 
                      above. The new Context is set. This call supercedes 
                      the original BIOS call 0, which re-maps Modes 
                      to Contexts in order to effect transparent 
                      Emulation.

                      This call will switch to, reset and clear the 
                      target adapter, unless bit 7 is set, which inhibits 
                      clearing of the target regen buffer. The Target CRT 
                      Controller is re-initialized only if necessary.

        ; ****
        (AH)=0        SetMode - al contains then IBM defined Mode value.
                      This call will not switch adapters unless the 
                      equipment flag is changed prior to the call. The mode 
                      value is re-mapped to an Athena Context value 
                      depending on whether the BIOS is Emulating or not. 
                      This call is designed to support applications which 
                      are unaware of Athena BIOS. It's behavior is 
                      identical to the standard BIOS.

                      Function 0 is superceded in Athena BIOS by function 
                      D0, which accepts Context Values rather than Mode 
                      values.

                      Function 0 supports the IBM defined flag bit 7 
                      to inhibit regen buffer erasure.

















                                       16









        (AH)=BFh      AthenaState - Return the current driver state.
             OUTPUT:
                       (AL) = Current Context (as in call B0h)
                       (AH) = Character Columns on screen
                       (BH) = Current Active Display Page
                       (BL) = Reserved - destroyed
                       (DX) = Installed options, switch states
                           D0 = 1 if mono or Hercules card is installed
                           D1 = 1 if cga card is installed
                           D2 = 1 if an ega card is installed
                           D3 = 1 if Hercules modes/cga emulation are allowed
                           D4 = 1 if emulation modes are activated
                           D5 = reserved.
                           D6 = 1 if it is necessary to wait for 
                                  horizontal retrace before CGA text 
                                  screen updates. This bit is reset by 
                                  default when ATHENA initializes. If the 
                                  /W(ait) option switch is used on the 
                                  installation command line, this bit 
                                  will be set to cause ATHENA to wait for 
                                  retrace when updating CGA text. This 
                                  switch has no effect on Hercules or 
                                  Mono modes.
                                      Application software should never 
                                  try to wait in Hercules modes since the 
                                  CGA registers may not even exist and 
                                  the Hercules standard does not require 
                                  it.
                            D7 - D15 = reserved.

                       (CX) = ATHENA/HGCIBM version number
                              (CH) has major version
                              (CL) has minor version

                       (BP) = Reserved - destroyed

                       (DI) = Reserved - destroyed




                       (continued)














                                       17









        Function BFh (continued)

                       (SI) = Extended Flags.
                           D0 = 1 if the EGA is connected to an Enhanced 
                                Color Display.
                           D1 = 1 if the EGA is connected to a Monochrome 
                                Display.
                           D2 = 1 if the system is in CGA Context 2 or 3,           
                                AND the system is directed to wait for 
                                CRT retrace to update the screen.
                           D3 = 1 if the EGA is currently the active 
                                adapter.
                           D5 = 1 if the EGA is currently disabled.
                                (the system is in a Context which 
                                requires ega ram to be disabled). While 
                                disabled, function 12h will be ignored.
                           D6,D5 = Ega installed memory.
                           D7 = 1 if the EGA switches indicate it is the
                                Primary System Adapter.
                           D8 = 1 if there is a Microsoft Compatible 
                                Mouse and it is currently emulating a 
                                light pen.
                           D9 - D14 Reserved.
                           D15 = 1 if there is a Microsoft Compatible 
                                 Mouse and it reports -1 to function 0.

        * set cx to -1 before calling function BFh, if the major version is 
        greater than or equal to 3, the response is from an Athena Video 
        BIOS device driver. If the major version is greater than ar equal 
        to 23, the response is from an Athena Library BIOS. There will be 
        no Library response unless you linked with it. A response less 
        than 3 is from HGCIBM.COM, which will not occur if you are linked 
        with a library. If cx returns -1, there is no Athena BIOS.

        HGCIBM.COM will not be upgraded past major version 2, and 
        behavior in general is somewhat different than from the BIOS. If 
        HGCIBM is detected, either ignore it or use only the emulation or
        CGA modes. All future enhancements will be limited to Athena 
        Drivers or Libraries. 

        The above information is only a smattering of available services 
        and enhancements. Complete technical documentation is provided 
        with Programmer's Libraries and we don't recommend you try to 
        communicate with the BIOS without obtaining the technical 
        information.











                                       18









        ATHENA LIBRARY VERSIONS

        These are introduced in the accompanying QBDEMOC program. The 
        DEMO is subject to continuous updates and revisions as the 
        BIOS continues. It is entirely possible that new features and 
        capabilities have been added since this file was released. The 
        DEMO is a short first-hand introduction to Athena Device Drivers 
        and Athena Language Libraries for Programmers. If you find you 
        are seriously interested in Athena Digital Video BIOS, we will 
        send you the latest demo materials on request. There are 2 files 
        required to run the demo:

             QBDEMOC.EXE    ; QuickBasic library DEMO - BCOM20 program module
             FEATURES.PRX   ; DEMO text

        o    To run the demo, place these two files in your default 
             directory and type "QBDEMOC".

        o    If you have an older style Color Graphics Adapter which 
             "snows" when text is printed, then start the demo as 
             "QBDEMOC/W".

        o    It makes no difference whether HGCIBM is installed or not to 
             run the demo, since Athena Video BIOS is linked with the 
             demo and will be used in either case.

        o    DEMO Version 1.01 will now run on the EGA. If the EGA      
             is connected to a Monochrome Display, the Athena Logo will      
             display incorrectly. This appears to be a QuickBasic 2.00      
             bug but we have not yet heard from Microsoft about it so it 
             may just be our QuickBASIC programming. It definitely has 
             NOTHING to do with the BIOS.

        In case the demo is missing, here are a scant few of the 
        highlights of Athena Video BIOS Libraries.

        o    Allows graphic (or text) programs written using standard 
             video BIOS for all except regen access to run unmodified on 
             a Hercules Graphics Card. It is only necessary to initialize 
             the BIOS on entry, and detach it on exit. An example of one 
             such program would be anything compiled under Microsoft's 
             QuickBasic and using QuickBasic's screen and graphics 
             functions such as QBDEMOC.EXE.

        o    Provides all of the functions that are described under 
             Athena Video BIOS above. Thus it offers immediate Hercules 
             support for existing applications, and a natural upward path 
             to extended Hercules support.








                                       19









        o    Cooperates with (or without) a resident Athena Device 
             Driver. If your Library is a later version, it automatically 
             coordinates a temporary "takeover" from the resident while 
             your program runs. Control returns to the resident when your 
             program exits. This assures that your program will always 
             use the latest BIOS available, whether its the one you 
             linked with or not.

        o    Libraries will probably be released for QuickBASIC, C, and 
             Macro Assembler by the time anyone could read this. Others 
             will be developed depending on customer interest. Write or 
             call us about your favorite programming language if you 
             would like to see an Athena library to link with it. The 
             library core is intrinsically compatible with any compiler 
             supporting external assembly language procedure calls and a 
             means of linking them with the compiled program code.

             More details are available on request. 






































                                       20









```
{% endraw %}

## HGCTEST.BAS

{% raw %}
```bas
100	' Emulation Test Program Version 2.01
102	'
105	DIM VERT%(120)
110	INPUT "Test 200x320 or 200x640 (1 or 2)";RES%
120	IF RES% <> 1 AND RES% <> 2 THEN CLS: GOTO 110 ELSE SCREEN RES%:CLS
130	ASPECT = RES% * .5
140	RES% = RES% * 320
150	KEY OFF
160	CLS
170	INPUT "enter radius (10-100)";R
180	INPUT "enter number of vertices (3-50)";V
190	CLS
200	X0=(RES%/2)+R*2*ASPECT:Y0=100
210	PSET(X0,Y0)
220	THETA=6.28319/V:N=V-1
230	FOR I=1 TO N
240		VERT%(2*I-1)=R*2*ASPECT*COS(THETA*I)+(RES%/2)
250		VERT%(2*I)=R*SIN(THETA*I)+100
260		PSET(VERT%(2*I-1),VERT%(2*I)),1
270	NEXT I
280	N0=N
290	FOR J=1 TO N
300		FOR I= 1 TO N0
310			XN=VERT%(2*I-1):YN=VERT%(2*I)
320			LINE(X0,Y0)-(XN,YN)
330		NEXT I
340		X0=XN:Y0=YN:N0=N0-1
350	NEXT J
360	LOCATE 1,1
370	INPUT "Try another (Y/N)"; A$
380	CLS
390	SCREEN 0:WIDTH 80
400	IF A$="Y" OR A$="y" GOTO 110
410	END
```
{% endraw %}

## HGCIBM.DOC

{% raw %}
```
 
 
 
 
 
 
 
 
 
 
 
                             HGCIBM.COM Version 2.02
               Copyright (C) Athena Digital, Gary Batson 1986, 1987
             2351 College Station Road, Suite 567, Athens, Ga. 30605
                                  404/354-4522
 
                          This Manual Dated June 1, 1987
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                        1
 
 
 
 
 
 
 
 
 
                                TABLE OF CONTENTS
 
                                   HGCIBM.COM
 
        Acknowledgements .............................................  3
        Trademarks ...................................................  3
        Using HGCIBM.COM .............................................  3
        Precautions ..................................................  3
        Installation .................................................  4
        Using the Command Line .......................................  5
        HGCTEST program ..............................................  5
        Sales and Distribution Policies ..............................  6
        User Comments ................................................  6
        History ......................................................  6
        Future .......................................................  7
        Changes and Corrections ......................................  7
        Technicalities ...............................................  8
 
                            Athena Digital Video BIOS
 
        Purpose ......................................................  9
        Features .....................................................  9
        Control Program .............................................. 11
        Sales and Distribution Policies .............................. 11
        Software Author Note ......................................... 12
        Extended Functions ........................................... 13
        Library Versions ............................................. 19
        QBDEMOC program .............................................. 19
 
        This program is distributed as Shareware. All rights are reserved
        except for distribution of the program, its documentation, and
        any DEMO materials IN ITS ENTIRETY and un-modified. You may test
        and use this program for 30 days, after which you must register
        it, destroy it, or pass in along to a friend. If you would like
        to keep HGCIBM, see the pricing within. This DOES NOT APPLY to
        those who contributed to HGCIBM Version 1.11. Those individuals
        are welcome to this upgrade without further remuneration. Please
        accept it with my THANKS!!
 
        Athena Digital's program and emulation algorithms were first
        Copyrighted June 10, 1986. It is now the basis for the existence
        of Athena Digital and represents months of effort and a large
        personal investment. Any information presented in this document
        or available in the associated programs is and shall remain the
        Copyrighted Property of Athena Digital. Any attempt to use this
        information to create a competitive product, whether the product
        is distributed "free" or otherwise is in violation of copyright
        laws.
 
                                 Athena Digital
             2351 College Station Road, Suite 567, Athens, Ga. 30605
 
 
 
 
 
                                        2
 
 
 
 
 
 
 
 
 
        DISCLAIMER
 
        Athena Digital makes every effort to ensure that this
        documentation is accurate. However, because we are constantly
        striving to improve our products, we are unable to guarantee the
        accuracy of the contents of this document after the date of
        publication and we disclaim liability for any changes, errors or
        omissions. We have also made every effort to warn you of possible
        damage to your equipment from careless use of other applications
        with ours. If you do somehow damage your display or anything
        else, Athena Digital ASSUMES ABSOLUTELY NO RESPONSIBILITY FOR IT.
        If it will make you more confident, no such claims have ever
        been made against us .. but we have to protect ourselves.
 
 
        ACKNOWLEDGEMENTS
 
        Athena Digital would like to thank IBM for creating the Personal
        Computer and Hercules Computer Technology for making PC graphics
        as pleasurable as PC TTL text.
 
 
        TRADEMARKS MENTIONED
 
        Hercules and RamFont are trademarks of Hercules Computer
        Technology.
 
        IBM is a trademark of International Business Machines.
 
        Microsoft, QuickBASIC, CodeView and MS-DOS are trademarks of
        Microsoft Corporation.
 
        Athena Digital Video BIOS is a trademark of Athena Digital.
 
 
        USING HGCIBM.COM
 
        The purpose of this program is to provide owners of Hercules
        Graphics Cards a means to run software written for the IBM Color
        Graphics Adapter, and to introduce a commercial version of the
        BIOS called Athena Digital Video BIOS which offers added
        functionality.
 
 
        PRECAUTIONS - MONOCHROME DISPLAY DAMAGE !!!
 
        This program will not damage your display, but certain
        application software certainly can. Programs which attempt to by-
        pass the BIOS (Basic Input/Output System) to set the CRT
        operating parameters will cause severe problems. Fortunately
        since most software operates in standard modes, most software
        developers permit BIOS to set up the controller for them even if
        they later write to screen ram directly.
                                    (cont'd)


 
                                        3
 
 
 
 
 
 
 
 
 
        HGCIBM will intercept the BIOS calls for all standard modes and
        program the controller correctly. Writing directly to screen ram
        is permitted and the emulator will still work properly. When
        trying an un-tested (with HGCIBM) program for the first time,
        watch your display carefully for signs of gross distortion or
        shrinking when the program sets graphics mode. IF THIS OCCURS,
        RE-BOOT OR TURN OFF YOUR COMPUTER IMMEDIATELY. The display should
        return to normal quickly when you re-boot.
 
        HGCIBM INSTALLATION
 
        To install the emulator, you must tell it what mode to start in,
        and a little information about your hardware. There are three
        "modes" of operation for HGCIBM as follows:
 
        The /E[mulate] mode enables the emulator to respond to BIOS calls
        to set standard CGA modes and provides maximum compatibility with
        programs expecting to use the Color Graphics Adapter, but
        displays the information on your Hercules adapter. When the
        emulator is in this mode, the text buffer is at segment B800 and
        the equipment flag is set to indicate that a CGA card is present.
        Alas, you can't fool all the programs all the time. Some of them
        read the equipment flag and then try to manipulate the crt
        controller directly in order to provide faster screen output.
        Naturally they try to do this at the CGA port addresses (which
        don't exist) and will hang the system (This problem is overcome
        with Athena Digital Video BIO). A re-boot will cure the problem
        and you should then remember to either un-install the emulator
        before running these programs or simply place it in /M(ono) mode
        or /C[GA] mode (if you have a physical CGA) as described below.
 
        The /M[ono] mode effectively disables HGCIBM without uninstalling
        it. The monochrome card is selected and Video BIOS control
        returns to the computer's ROM (Read Only Memory).
 
        The /C[ga] mode also disables HGCIBM and returns control to ROM
        except the physical Color Graphics Adapter is selected (if it
        exists).
 
        There are also 3 installation switches available to warn HGCIBM
        about special hardware. During initialization, the program tries
        to determine if a Color Graphics Adapter is present. If it is,
        the program will not install unless you assure it that the Color
        Graphics Adapter in your system is compatible with Hercules
        Graphics cards. If yours is or you have a Leading Edge computer,
        then you should use the following switches:
 
        The /H[ercules Compatible] switch instructs HGCIBM to install and
        allow the emulation mode even though a Color Graphics Adapter is
        present. You may use this switch on installation if you have a
        Hercules compatible CGA card in your system. If a CGA card is
        present, HGCIBM will abort installation unless the /H switch is
        used.
                                    (cont'd)


 
                                        4
 
 
 
 
 
 
 
 
 
        Also note that some software will output to the CGA registers
        (3D4, 3D5, 3D8, etc.) to adjust video parameters. This can wreak
        havoc on the real CGA adapter while in Emulation mode. If the CGA
        is not physically present, this output causes no problems and is
        ignored by Hercules adapters.
 
        The /L[eading Edge] switch instructs HGCIBM to install if the
        Leading Edge Model D is connected to a TTL display.
 
        The /U[n-install] switch instructs the emulator to reset all
        vectors and remove itself from memory, freeing the space for
        other programs. You may un-install the emulator provided that
        other programs have not altered vectors 8h and 10h, but memory
        may become segmented if you have loaded another resident program
        after HGCIBM. The system will be left in the same condition it
        was in before the installation. (i.e. monochrome display).
 
        USING THE COMMAND LINE
 
        Simply type the command HGCIBM with a mode switch to install or
        change to that mode. If you have special hardware, ADD the
        hardware switch to the mode switch on the same command line as
        shown in the following examples:
 
        HGCIBM /M      - installs in (or changes to) MONO mode (emulation
                         disabled)
        HGCIBM /C      - installs in (or changes to) CGA mode (emulation
                         disabled)
        HGCIBM /E      - installs in (or changes to) Emulation mode.
        HGCIBM /U      - un-installs the emulator
        HGCIBM /M/H    - informs HGCIBM that a Hercules compatible CGA is
                         physically present.
        HGCIBM /M/L    - informs HGCIBM that you have a Leading Edge
                         Model D computer.
 
        These commands may be issued from a batch file if desired.
        Hardware switches (/H or /L) are needed only on installation.
 
        To change modes after installation, just enter the command as
        above. HGCIBM always checks to see if it is already installed and
        will process the command correctly.
 
        HGCTEST PROGRAM
 
        This program is provided for you to test the operation of HGCIBM
        with your computer configuration. Before running HGCTEST, Load
        the emulator with the /E[mulate] switch. HGCTEST.BAS runs under
        BASICA. Just enter BASICA HGCTEST to run it (assuming BASICA is
        on the default disk drive with HGCTEST.BAS). The program is a
        simple graphics demo and is self explanatory. If you have a basic
        compiler, the demo program can be compiled to test the compiler.
 
 
 
 
 
                                        5
 
 
 
 
 
 
 
 
 
        SALES AND DISTRIBUTION POLICIES - HGCIBM.COM
 
        There is no limitation on distribution of HGCIBM.COM as long as
        no remuneration is accepted in connection with it's distribution,
        and as long as it is distributed un-modified, in it's entirety
        (including any DEMO materials), and BY ITSELF. IT MUST NOT BE
        DISTRIBUTED WITH your own application program or hardware, but it
        is OK to mention that your software/hardware will/wont run with
        it and our name and telephone number (so he can obtain a copy to
        run your program). You are permitted a 30 day trial period to
        decide whether or not you wish to keep HGCIBM or purchase Athena
        BIOS after which you must either register it with Athena Digital,
        destroy it, or pass it along to someone else. The registration
        fee for HGCIBM.COM is $10.00 in check or money order (see
        REGISTER file in this package).
 
        OEMS and Dealers are encouraged to support Athena BIOS with their
        products. HGCIBM is an extremely limited version of Athena
        Digital's software. Those interested should contact Athena
        Digital for details.
 
        USER COMMENTS
 
        Let us know what you think. Any criticism is better than none and
        will help to steer us along a path which is in the majority's
        best interest. Your suggestions need not be limited to graphics.
        Any comment regarding Athena Digital programs or documentation is
        welcome.
 
        Thank you for your support.
 
        HISTORY
 
        In June of 1986, Athena Digital released a simple "Freeware"
        emulator for Hercules cards which supported only the 200 by 640
        Color Graphics Card mode (HGCIBM.COM Version 1.11). To our
        knowledge, this was the first such program publicly released. At
        first glance there would appear to be no physical way to
        effectively display CGA graphics on a ttl card. It not only could
        be done, but done in such a way that resulting display quality is
        actually better than the real CGA though it is in shades of one
        color. Support came in from users as far as Israel and eventually
        from CGA software developers. Though it represented no serious
        income, This support inspired Athena Digital to create HGCIBM.COM
        Version 2.00 which offers emulation support of all of the CGA
        modes and to start the development of Athena's own Video BIOS to
        support not only emulation, but to provide an upgradeable and
        expandable Video BIOS which enhances any display system.
 
 
 
 
 
 
 
 
                                        6
 
 
 
 
 
 
 
 
 
        FUTURE
 
        Version 2.02 provides only a SUBSET of the Athena Digital support
        functions. It is a functional emulator only, and does not offer
        support for Microsoft Mouse, Extended Video BIOS calls, RamFont,
        or EGA. Due to restrictions imposed by the "resident" utility
        implementation, the commercial release of Athena's BIOS
        (ATHENA.SYS Version 3.00) is in the form of an MS-DOS Device
        Driver. Installed in this way, the program becomes as much a part
        of the operating system as is the ROM Video BIOS, except that it
        can be easily upgraded and enhanced. Future enhancements will be
        limited to Athena BIOS, thus obseleting HGCIBM.COM except as a
        simple emulator. If bugs are found in HGCIBM, they will be
        corrected. For more information about the commercial products,
        read the section called Athena Digital Video BIOS in this
        document.
 
        HGCIBM CHANGE AND CORRECTION NOTES
 
             o    Version 1.11 would sometimes crash with programs that
                  intercepted the timer interrupt while in Graphics, and
                  then changed to text.
 
             o    If interrupts were redirected, Version 1 could not find
                  itself for a mode change and would install a second
                  copy. Now it can find and control itself unless it is
                  bypassed altogether.
 
             o    Version 2.00 (beta test version) would not install on a
                  Leading Edge due to differences in the way the Leading
                  Edge video buffers are implemented. This was corrected
                  with the /L[eading Edge] switch.
 
             o    Version 2.01 failed to detect the EGA and would treat
                  it as a CGA. Now HGCIBM will abort installation as it
                  is supposed to.
 
        ENHANCEMENTS
             o    Version 2.02 contains a SUBSET of Athena Digital's own
                  Video BIOS and will support a wider range of
                  compatibles as well as the AT. This also provided a
                  means for improved screen behavior in color text mode,
                  and faster screen operations if BIOS is used.
 
             o    All standard video modes are now supported. The 320 x
                  200 mode supports two intensities(colors). Color 1 and
                  color 2 will appear identical, where color 3 will be
                  high intensity. Forty column text is supported but will
                  be displayed on the left half of the screen only at the
                  same resolution as eighty column text. All four pages
                  of 80 column text (or 8 pages of 40 column text) are
                  available on CERTAIN Hercules cards. Some cards will
                  display only one page (Athena Video BIOS displays all
                  pages on all Hercules Adapters and clones).


 
                                        7
 
 
 
 
 
 
 
 
 
        TECHNICALITIES
 
        HGCIBM installs itself between two BIOS (Basic Input/Output
        System) interrupts. The two interrupts used in this way are hex
        10 (BIOS video) and hex 8 (timer). The later is used only while
        in emulation mode. HGCIBM will fail to function properly if it is
        not given control during the above interrupts. Other software
        using interrupt 8 will be called on a priority basis, preempting
        HGCIBM if necessary. HGCIBM version 2.02 no longer passes
        interrupt 10h (while in emulation mode) since it was learned that
        compatible ROM BIOS was not always entirely compatible. If you
        have other software using interrupt 10h, try loading it after
        HGCIBM. You can still control HGCIBM after the interrupt is
        changed but you will not be allowed to un-install it. HGCIBM need
        be loaded only once each time the computer is started since it
        attaches itself to BIOS and stays in memory until re-boot or it
        is commanded to detach. The memory usage has increased to about
        5k now due to bypassing of ROM video BIOS in emulation mode, but
        does provide much improved color text emulation and should be
        compatible with a wider variety of machines.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                        8
 
 
 
 
 
 
 
 
 
                         Athena Video BIOS Version 3.00
                     Copyright (C) Athena Digital 1986,1987
 
         Preliminary Specifications - Subject to change without notice.
 
                                     PURPOSE
 
        For some unknown reason, hardware and software vendors have not
        seen fit to establish adequate specifications and graphics
        support for the widely used Hercules Graphics standard. The most
        peculiar aspect of this is the fact that the Hercules standard
        was the third available for the IBM personal computer and the
        first which offered truly high graphics resolution as well as the
        first to support graphics on the ttl monochrome display. Today,
        this standard is almost universally accepted as the display
        adapter of choice for ttl monochrome PC systems and its display
        quality is yet challenged only by the EGA standard which
        unfortunately requires an expensive color monitor to exploit it's
        capabilities.
 
        Athena Digital will attempt to remedy the problem by making it as
        simple as possible for vendors to exploit the capabilities of the
        Hercules card, CGA, EGA and others. Athena BIOS now fully
        supports the Hercules monochrome card and/or Color Graphics Card,
        the EGA (and eventually others) with fast support for standard
        modes, CGA emulation, and several new modes.
 
        One of the primary enhancements provided by ATHENA BIOS is
        Emulation of the Color Graphics Adapter on the Hercules Graphics
        Card. This allows Hercules owners to run the majority of graphics
        programs which do not already support the Hercules adapter. The
        list includes programs like BASICA, QuickBASIC, CodeView and the
        majority of all others.
 
        This eliminates the need for a Color monitor and graphics card in
        many cases with obvious price advantages.
 
        Athena also provides BIOS support for the higher resolution
        Hercules 350 vertical by 720 horizontal modes, and a new 350
        vertical by 360 mode with three intensities and 4 logical pixel
        colors. ALL of the Standard BIOS call support for these new modes
        including character generation, scrolling, and adapter switching
        which greatly simplifies direct support of Hercules high
        resolution modes by software vendors.
 
        ATHENA FEATURES
 
        o    Available in Programmer's Libraries for linking with high or
             low level languages.
 
        o    Supports 6 new Hercules only modes, which are as
             readily available to applications developers as are the
             standard modes.
 
 
 
                                        9
 
 
 
 
 
 
 
 
 
        o    Provides extended equipment, system capability information
             for applications.
 
        o    Supports Color Graphics Adapter Programs on the Hercules
             Graphics Card.
 
        o    Fully compatible with Microsoft Mouse or Microsoft Mouse
             software look-alikes.
 
        o    Includes a "Buss Terminator" which eliminates ALMOST all
             of the application software incompatibility with Emulation
             modes. This allows Microsoft's CodeView and QuickBasic
             editors to function normally in Emulation mode.
 
        o    BIOS Character generation and scrolling in Emulation Modes
             is accomplished without ghosting and no appreciable loss in
             speed (it is usually faster than the CGA through ROM BIOS).
 
        o    All 4 pages of 80 column CGA text (or 8 pages of 40 column
             text) are available on ALL Hercules cards or compatibles.
 
        o    Fully supports Hercules - Enhanced Graphics (color monitor)
             combinations.
 
        o    Fully Compatible with the new Hercules Plus card in 4K
             RamFont or Rom text mode.
 
        o    Supports new "Context Switching" between adapters and
             certain modes.
 
        o    Supports faster video operation in ALL modes than Standard
             ROM BIOS.
 
        o    Simple replacement for "buggy compatible" BIOS.
 
        o    Installs as a device driver for MS-DOS version 2.00 or later
 
        o    Adds PC-AT BIOS print string functions to the PC
 
        Once installed, Athena BIOS replaces the standard ROM video BIOS.
        Software installation is a matter of copying ATHENA.SYS to your
        boot disk, and inserting a one line command in your MS-DOS
        config.sys file. This MUST be the FIRST "DEVICE =" command in the
        file following the MOUSE and has the following basic form:
 
                               DEVICE = MOUSE.SYS
                               DEVICE = ATHENA.SYS
 
             Athena BIOS is compatible with a variety of MS-DOS
        computers, including the PC, PC-XT, PC-AT, and Leading Edge, and
        most any other hardware compatible. Our aim is to work with as
        many different computers and display adapters as possible.
 
 
 
 
                                       10
 
 
 
 
 
 
 
 
 
        Version 3.00 Video Bios does not replace EGA BIOS, but is
        compatible with it and controls it. If a non-ega adapter is
        active, Athena BIOS controls the active adapter. While the EGA is
        the active display, EGA BIOS controls the EGA adapter. Athena
        BIOS supports the Hercules Graphics Card in FULL modes WITH the
        EGA (if it is connected to a color display). The BIOS will
        continue to add features supporting as many of the popular
        adapters as possible and enhancing them wherever practical in
        order to maintain compatibility for your programs.
 
        CONTROLLING ATHENA BIOS AFTER INSTALLATION
 
        With ATHENA.SYS, you are provided a utility which allows you
        keyboard control over Athena's variety of modes. This utility
        operates as any other external DOS command. Simply place it in
        your program directory and use it with switches. If you forget
        the switches, typing ATHENA will give you a help screen.
 
        ATHENA /M[ono]      - Places BIOS in MONO or EGA MONO mode
                              (emulation disabled)
        ATHENA /C[ga]       - Places BIOS in CGA or EGA Color mode
                              (emulation disabled)
        ATHENA /E[mulate]   - Places BIOS in CGA EMULATION mode.
        ATHENA /S[tatus]    - Gives a report of Athena's status.
        ATHENA /Q[uiet]     - ADDING this switch to others to suppress
                              messages.
        ATHENA /D[isable]   - Disables the BIOS and returns control to
                              ROM
        ATHENA /R[eset]     - Resets and enables the BIOS.
 
           These commands may be issued from a batch file if desired.
 
        SALES AND DISTRIBUTION POLICIES - ATHENA.SYS
 
        For the purchase price of $34.95, you will receive the program on
        a 5.25" IBM format diskette with documentation and Buss
        Terminator, and be notified of upgrades at low cost as they
        become available.
 
        Dealers, OEMS, and those desiring Site Licenses are welcome and
        encouraged to contact Athena Digital about liberal discounts.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                       11
 
 
 
 
 
 
 
 
 
        SOFTWARE AUTHORS
 
        Using Athena Video BIOS Libraries, you can easily upgrade your
        application to support Hercules Adapters. There are several
        options available to you with the library:
 
             o    You can link Athena Digital Video BIOS with your
                  application. This allows your program to use all Athena
                  functions whether the Athena device driver is present
                  or not.
 
             o    You can link with the interface module only. This
                  allows you to detect and and use Athena BIOS if the
                  Device Driver is present.
 
             o    You can link a PARTIAL BIOS with your application. This
                  allows you to use the CGA Emulation modes whether the
                  Device Driver is present or not, but defeats the usage
                  of Hercules Extended modes.
 
        See the QBDEMO program included for mmany more details.
 
        SUPPORTED HARDWARE
 
        o    IBM PC /XT /AT and most hardware compatibles which have an
             expansion buss. (Expansion buss not necessary for
             Libraries or for systems which will not need CGA Emulation).
 
        o    Microsoft Mouse (device drivers) or software compatibles
             which provide Microsoft's defined function calls.
 
        o    The following Video hardware combinations have been tested
             to date:
 
             Hercules Graphics Adapter, all versions including Plus. (MGA)
             IBM Monochrome Text Adapter. (MTA)
             IBM Color Graphics Adapter .. Hercules Color Card. (CGA)
             IBM Enhanced Graphics Adapter (EGA)
             Monochrome EGA with CGA
             Color EGA or CGA with MTA or MGA.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                       12
 
 
 
 
 
 
 
 
 
        Athena Digital Video BIOS FUNCTION CALLS
 
             This information is provided for technical users, and
        presumes familiarity with Standard BIOS function calls. Presented
        here is a subset of available services. A complete listing is
        available in the Athena Video BIOS Programmers Reference Manual,
        provided with each Programmer's Library.
 
        THIS DOCUMENT CONTAINS PRELIMINARY INFORMATION ABOUT ATHENA VIDEO
        BIOS CONTEXT CALLS. THE PURPOSE OF THIS IS TO SHOW THE INTENT OF
        THE CALLS. FOR PERMANENT AND ACCURATE INFORMATION, RELY ON THE
        PROGRAMMER'S REFERENCE DATA PROVIDED WITH LIBRARY PACKAGES.
        ; ****
        (AH)=B0h     SetContext - (AL) contains context value
 
        These functions first save the current BIOS variables in the
        current Context Buffer, then change the current VideoState
        "emulation active" flag according to the table below and take one
        of three actions depending on the condition of the target
        screen's Context save buffer. There are 3 save buffers in the
        initial Athena BIOS release:
 
             o    Hercules / Monochrome / Mono EGA adapter page at 0B000h
             o    Hercules adapter page at 0B800h
             o    Color Graphics Adapter / Color EGA Adapter at page 0B800h
 
        Each save buffer has room for:
 
             o    The current crt_context
             o    The current crt_mode
             o    The current crt_columns
             o    The current crt_len
             o    The current crt_start
             o    The current cursor_posn[8]
             o    The current cursor_mode
             o    The current active_page
             o    The current addr_6845
             o    The current crt_mode_set
             o    The current crt_palette
             o    The current rows
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                       13
 
 
 
 
 
 
 
 
 
        Call B0h (cont'd)
 
        The three possible actions through call B0h are:
 
             o    If register AL bit 7 = 1 (or'd with 80h), the target
                  screen Context buffer is initialized and the screen
                  is cleared.
 
                  Otherwise, the screen is not cleared and the Context
                  buffer is treated as follows:
 
             o    If the target context's save buffer has not been
                  overwritten since it was saved, it is restored intact.
 
             o    If the target context's save buffer has been
                  overwritten, it is initialized to default values of the
                  Target Context before restoration.
 
        Context switches do not "blink" the screen unless it is necessary
        to re-program the 6845 controller to make the switch.
 
        This is a powerful function. It enables programmers to switch
        rapidly back and forth between graphics and text, or between
        adapters without having to concern themselves about re-
        initializing or restoring the screen(s). It also permits rapid
        switching between 40 or 80 column graphics text modes without
        loss of screen data, allowing mixed use of the provided (or user
        provided) character fonts in Hercules Graphics modes. When
        switching between 40 and 80 column text, the Context buffer is
        initialized, so it is necessary to locate the cursor wherever you
        want it in the new text map.
 
        Context switches also affect the way Athena interprets calls to
        the standard BIOS function 0 as shown below. These calls cannot
        be used to overide the hardware setup determined by Athens during
        initialization. Calls for invalid context switches are ignored
        and the call returns with the carry flag set:
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                       14
 
 
 
 
 
 
 
 
 
        Athena BIOS function call B0h (continued):
                CONTEXT VALUES AND EFFECTS ON CGA EMULATION FLAG
        ;
        TARGET MODE         EMULATION           TARGET SCREEN
 
                            Standard Modes (Contexts)
 
        (AL)=0              deactivated         CGA/EGA 40x25   alpha
        (AL)=1              deactivated         CGA/EGA 40x25   alpha
        (AL)=2              deactivated         CGA/EGA 80x25   alpha
        (AL)=3              deactivated         CGA/EGA 80x25   alpha
        (AL)=4              deactivated         CGA/EGA 200x320 graph
        (AL)=5              deactivated         CGA/EGA 200x320 graph
        (AL)=6              deactivated         CGA/EGA 200x640 graph
        (AL)=7              deactivated         MONO/EGA 80x25  alpha
        (AL)=13             deactivated         EGA     320x200 graph
        (AL)=14             deactivated         EGA     640x200 graph
        (AL)=15             deactivated         EGA     640x350 graph
        (AL)=16             deactivated         EGA     640x350 graph
 
 
        Call B0h (cont'd)
                               Hercules only modes
 
        CGA Emulation Contexts: (correspond to Standard modes 0 - 6)
        (AL)=20
           .                activated           HERC page at B800*
           .
        (AL)=26
 
        Hercules Logical Text Context 27:
        (supports 8 pages of 80 column text on ALL Hercules Cards)
        (AL)=27             deactivated         HERC 80x25 alpha
 
        Hercules Graphics Contexts 28,29,30,31:
        (AL)=28             deactivated         HERC 350x720 at B000
        (AL)=29             deactivated         HERC 350x720 at B800
        (AL)=30             deactivated         HERC 350x360 at B000*
        (AL)=31             deactivated         HERC 350x360 at B800*
 
        *modes 24,25, 30 and 31 support low and high intensity
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                       15
 
 
 
 
 
 
 
 
 
        Certain Context changes are not possible without erasure of the
        contents of a previously buffered Context. To gain an
        understanding of which context switches can be performed without
        erasing another, study the above table. Context switches between
        adapters never cause erasure. Context switches between differing
        Hercules pages are likewise retained, except for emulation text
        Contexts 20,21,22,23, and Logical text Contexts 27.
 
        Emulation and Logical text modes use BOTH Hercules pages, thereby
        erasing any previously saved Hercules Context .
 
        ; ****
        (AH)=D0h      SetAdapter - (AL) contains new Context Value as
                      above. The new Context is set. This call supercedes
                      the original BIOS call 0, which re-maps Modes
                      to Contexts in order to effect transparent
                      Emulation.
 
                      This call will switch to, reset and clear the
                      target adapter, unless bit 7 is set, which inhibits
                      clearing of the target regen buffer. The Target CRT
                      Controller is re-initialized only if necessary.
 
        ; ****
        (AH)=0        SetMode - al contains then IBM defined Mode value.
                      This call will not switch adapters unless the
                      equipment flag is changed prior to the call. The mode
                      value is re-mapped to an Athena Context value
                      depending on whether the BIOS is Emulating or not.
                      This call is designed to support applications which
                      are unaware of Athena BIOS. It's behavior is
                      identical to the standard BIOS.
 
                      Function 0 is superceded in Athena BIOS by function
                      D0, which accepts Context Values rather than Mode
                      values.
 
                      Function 0 supports the IBM defined flag bit 7
                      to inhibit regen buffer erasure.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                       16
 
 
 
 
 
 
 
 
 
        (AH)=BFh      AthenaState - Return the current driver state.
             OUTPUT:
                       (AL) = Current Context (as in call B0h)
                       (AH) = Character Columns on screen
                       (BH) = Current Active Display Page
                       (BL) = Reserved - destroyed
                       (DX) = Installed options, switch states
                           D0 = 1 if mono or Hercules card is installed
                           D1 = 1 if cga card is installed
                           D2 = 1 if an ega card is installed
                           D3 = 1 if Hercules modes/cga emulation are allowed
                           D4 = 1 if emulation modes are activated
                           D5 = reserved.
                           D6 = 1 if it is necessary to wait for
                                  horizontal retrace before CGA text
                                  screen updates. This bit is reset by
                                  default when ATHENA initializes. If the
                                  /W(ait) option switch is used on the
                                  installation command line, this bit
                                  will be set to cause ATHENA to wait for
                                  retrace when updating CGA text. This
                                  switch has no effect on Hercules or
                                  Mono modes.
                                      Application software should never
                                  try to wait in Hercules modes since the
                                  CGA registers may not even exist and
                                  the Hercules standard does not require
                                  it.
                            D7 - D15 = reserved.
 
                       (CX) = ATHENA/HGCIBM version number
                              (CH) has major version
                              (CL) has minor version
 
                       (BP) = Reserved - destroyed
 
                       (DI) = Reserved - destroyed
 
 
 
 
                       (continued)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                       17
 
 
 
 
 
 
 
 
 
        Function BFh (continued)
 
                       (SI) = Extended Flags.
                           D0 = 1 if the EGA is connected to an Enhanced
                                Color Display.
                           D1 = 1 if the EGA is connected to a Monochrome
                                Display.
                           D2 = 1 if the system is in CGA Context 2 or 3,
                                AND the system is directed to wait for
                                CRT retrace to update the screen.
                           D3 = 1 if the EGA is currently the active
                                adapter.
                           D5 = 1 if the EGA is currently disabled.
                                (the system is in a Context which
                                requires ega ram to be disabled). While
                                disabled, function 12h will be ignored.
                           D6,D5 = Ega installed memory.
                           D7 = 1 if the EGA switches indicate it is the
                                Primary System Adapter.
                           D8 = 1 if there is a Microsoft Compatible
                                Mouse and it is currently emulating a
                                light pen.
                           D9 - D14 Reserved.
                           D15 = 1 if there is a Microsoft Compatible
                                 Mouse and it reports -1 to function 0.
 
        * set cx to -1 before calling function BFh, if the major version is
        greater than or equal to 3, the response is from an Athena Video
        BIOS device driver. If the major version is greater than ar equal
        to 23, the response is from an Athena Library BIOS. There will be
        no Library response unless you linked with it. A response less
        than 3 is from HGCIBM.COM, which will not occur if you are linked
        with a library. If cx returns -1, there is no Athena BIOS.
 
        HGCIBM.COM will not be upgraded past major version 2, and
        behavior in general is somewhat different than from the BIOS. If
        HGCIBM is detected, either ignore it or use only the emulation or
        CGA modes. All future enhancements will be limited to Athena
        Drivers or Libraries.
 
        The above information is only a smattering of available services
        and enhancements. Complete technical documentation is provided
        with Programmer's Libraries and we don't recommend you try to
        communicate with the BIOS without obtaining the technical
        information.
 
 
 
 
 
 
 
 
 
 
 
                                       18
 
 
 
 
 
 
 
 
 
        ATHENA LIBRARY VERSIONS
 
        These are introduced in the accompanying QBDEMOC program. The
        DEMO is subject to continuous updates and revisions as the
        BIOS continues. It is entirely possible that new features and
        capabilities have been added since this file was released. The
        DEMO is a short first-hand introduction to Athena Device Drivers
        and Athena Language Libraries for Programmers. If you find you
        are seriously interested in Athena Digital Video BIOS, we will
        send you the latest demo materials on request. There are 2 files
        required to run the demo:
 
             QBDEMOC.EXE    ; QuickBasic library DEMO - BCOM20 program module
             FEATURES.PRX   ; DEMO text
 
        o    To run the demo, place these two files in your default
             directory and type "QBDEMOC".
 
        o    If you have an older style Color Graphics Adapter which
             "snows" when text is printed, then start the demo as
             "QBDEMOC/W".
 
        o    It makes no difference whether HGCIBM is installed or not to
             run the demo, since Athena Video BIOS is linked with the
             demo and will be used in either case.
 
        o    DEMO Version 1.01 will now run on the EGA. If the EGA
             is connected to a Monochrome Display, the Athena Logo will
             display incorrectly. This appears to be a QuickBasic 2.00
             bug but we have not yet heard from Microsoft about it so it
             may just be our QuickBASIC programming. It definitely has
             NOTHING to do with the BIOS.
 
        In case the demo is missing, here are a scant few of the
        highlights of Athena Video BIOS Libraries.
 
        o    Allows graphic (or text) programs written using standard
             video BIOS for all except regen access to run unmodified on
             a Hercules Graphics Card. It is only necessary to initialize
             the BIOS on entry, and detach it on exit. An example of one
             such program would be anything compiled under Microsoft's
             QuickBasic and using QuickBasic's screen and graphics
             functions such as QBDEMOC.EXE.
 
        o    Provides all of the functions that are described under
             Athena Video BIOS above. Thus it offers immediate Hercules
             support for existing applications, and a natural upward path
             to extended Hercules support.
 
 
 
 
 
 
 
 
                                       19
 
 
 
 
 
 
 
 
 
        o    Cooperates with (or without) a resident Athena Device
             Driver. If your Library is a later version, it automatically
             coordinates a temporary "takeover" from the resident while
             your program runs. Control returns to the resident when your
             program exits. This assures that your program will always
             use the latest BIOS available, whether its the one you
             linked with or not.
 
        o    Libraries will probably be released for QuickBASIC, C, and
             Macro Assembler by the time anyone could read this. Others
             will be developed depending on customer interest. Write or
             call us about your favorite programming language if you
             would like to see an Athena library to link with it. The
             library core is intrinsically compatible with any compiler
             supporting external assembly language procedure calls and a
             means of linking them with the compiled program code.
 
             More details are available on request.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                       20
 
 
 
 
 
 
 
 

```
{% endraw %}

## HGCTEST.BAS

{% raw %}
```bas
100	' Emulation Test Program Version 2.01
102	'
105	DIM VERT%(120)
110	INPUT "Test 200x320 or 200x640 (1 or 2)";RES%
120	IF RES% <> 1 AND RES% <> 2 THEN CLS: GOTO 110 ELSE SCREEN RES%:CLS
130	ASPECT = RES% * .5
140	RES% = RES% * 320
150	KEY OFF
160	CLS
170	INPUT "enter radius (10-100)";R
180	INPUT "enter number of vertices (3-50)";V
190	CLS
200	X0=(RES%/2)+R*2*ASPECT:Y0=100
210	PSET(X0,Y0)
220	THETA=6.28319/V:N=V-1
230	FOR I=1 TO N
240		VERT%(2*I-1)=R*2*ASPECT*COS(THETA*I)+(RES%/2)
250		VERT%(2*I)=R*SIN(THETA*I)+100
260		PSET(VERT%(2*I-1),VERT%(2*I)),1
270	NEXT I
280	N0=N
290	FOR J=1 TO N
300		FOR I= 1 TO N0
310			XN=VERT%(2*I-1):YN=VERT%(2*I)
320			LINE(X0,Y0)-(XN,YN)
330		NEXT I
340		X0=XN:Y0=YN:N0=N0-1
350	NEXT J
360	LOCATE 1,1
370	INPUT "Try another (Y/N)"; A$
380	CLS
390	SCREEN 0:WIDTH 80
400	IF A$="Y" OR A$="y" GOTO 110
410	END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0870

     Volume in drive A has no label
     Directory of A:\

    DISK     ID        128   6-19-87  10:55p
    FEATURES PRX     19712   6-19-87   7:58p
    FILES870 TXT      1108  12-01-87   1:58p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       623  11-25-87   2:04p
    HGCIB202 ARC    106046   6-21-87  10:59a
    HGCIBM   COM      6710   5-20-87   1:15a
    HGCIBM   DOC     46402   7-15-87   4:32p
    HGCTEST  BAS       896   4-08-87   9:00a
    PRINTDOC BAT       128   4-09-87  11:16a
    PRINTDOC MSG       384   4-09-87  11:15a
    QBDEMOC  EXE     82578   6-20-87   7:09a
    REGISTER          1973   6-21-87  10:59a
           13 file(s)     266726 bytes
                           48128 bytes free
