---
layout: page
title: "PC-SIG Diskette Library (Disk #3134)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3134/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3134"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILELST.DOC

{% raw %}
```
ASTRO THE PROGRAM FOR ASTROLOGICAL ANALYSIS
SHAREWARE VERSION 2.71 FILE LISTING.

DISK FILE:      CONTENTS:               PURPOSE:

AST271-1.LZH    MAIN PROGRAM

                ASTRO.EXE               MAIN PROGRAM

AST270-2.LZH    GRAPHICS DRIVERS

                EP9DRV.OVL              EPSON 9 PIN GRAPHICS DRIVER
                EP24DRV.OVL             EPSON 24 PIN GRAPHICS DRIVER
                HPLDRV.OVL              HP LASERJET GRAPHICS DRIVER

AST270-3.LZH    GRAPHICS FONTS

                ASTROEP9.FON            EPSON 9 PIN GRAPHICS FONTS
                ASTRO24P.FON            EPSON 24 PIN GRAPHICS FONTS
                ASTROHPL.FON            HP LASERJET GRAPHICS FONTS
                
AST270-4.LZH    HELP FILES

                COMPATAB.HLP            ASTRO-HELPER HELP FILE.
                PLANETS.HLP
                RISING.HLP                 "    "     "     "
                ASPECTS.HLP                "    "     "     "
                FAMOUS.HLP                 "    "     "     "
                PLASIGNI.HLP               "    "     "     "
                RETROGRD.HLP               "    "     "     "
                HOUSES.HLP                 "    "     "     "
                TRANSITS.HLP               "    "     "     "
                SCOUTPL.HLP                "    "     "     "
                ASTROHLP.HLP            ASTRO MAIN HELP FILE. 

AST270-5.LZH    DATABASE FILES

                BIRTHBAS.DAT            BIRTH DATABASE DATA
                BIRTHBAS.NDX            BIRTH DATABASE INDEX
                BIRTHBAS.LST            BIRTH DATABASE POPUP LIST
                LOCATION.DAT            LOCATION DATABASE DATA
                LOCATION.NDX            LOCATION DATABASE INDEX
                LOCATION.LST            LOCATION DATABASE POPUP LIST
                LPOPLIST.NDX            LOCATION DATABASE POPUP INDEX

AST270-6.LZH

                PLANETS.TXT             NATAL TEXT
                PLANETS.NDX             NATAL INDEX
                SIGHOUSE.TXT            NATAL TEXT
                SIGHOUSE.NDX            NATAL INDEX
                HOUSES.TXT              NATAL TEXT
                HOUSES.NDX              NATAL INDEX
                ASPECTS.TXT             NATAL TEXT
                ASPECTS.NDX             NATAL INDEX
                SUMMARY.TXT             NATAL TEXT
                SUMMARY.NDX             NATAL INDEX

AST270-7.LZH

                REMSW.EXE               REMOVE OLD ASTRO USAGE FILE
                REMSW.DOC               DOCS FOR ABOVE
                PALTEST.EXE             SHOW PALETTES OF EGA/VGA
                MSHERC.COM              HERCULES SUPPORT PROGRAM
                PRNTFILS.EXE            PRINT FILE LISTING

AST270-8.LZH

                ASTRO.MAN               THE ASTRO MANUAL
                README.DOC              LICENSE INFORMATION AND REGISTRATION
                REGISTER.DOC            REGISTRATION FORM
                INSTALL.DOC             INSTALLATON INSTRUCTIONS
                FILELST.DOC             THIS FILE

AST270-9.LZH

                COMPAHSE.TXT            COMPATABILITY TEXT
                COMPAHSE.NDX            COMPATABILITY INDEX
                COMPASUM.TXT            COMPATABILITY TEXT
                COMPASUM.NDX            COMPATABILITY INDEX
                TRANSHSE.TXT            TRANSITS TEXT
                TRANSHSE.NDX            TRANSITS INDEX
                TRANSASP.TXT            TRANSITS TEXT
                TRANSASP.NDX            TRANSITS INDEX


README.DOC                              LICENSE INFORMATION AND REGISTRATION
REGISTER.DOC                            REGISTRATION FORM
INSTALL.DOC                             INSTALLATON INSTRUCTIONS
FILELST.DOC                             THIS FILE
INSTALL.EXE                           * INSTALLATION PROGRAM
INSTALL.DAT                           * DATA FILE FOR INSTALLATION
INSTALL.3                             * RENAME INSTALL.DAT FOR 3-1/2"
LHA.EXE                                 FILE ARCHIVER DEARCHIVER
LHA213.EXE                              FULL LHA 2.13 PACKAGE
HAREADME                                README FILE FOR LHA

* If you want to upload these files to a BBS, use LHA to create an
  archive and put the files marked with * in it call it AST271-0.LZH
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```






                  ASTRO. THE PROGRAM FOR ASTROLOGICAL ANALYSIS
                          REGISTRATION AND ORDER FORM:


        Complete and Mail with A U.S. check or money order (Funds Drawn
        on a U.S. Bank Only) to: Christopher J. Noyes Software 28
        Douglass Street, Brooklyn, NY 11231.
        -----------------------------------------------------------------
        NOTE: International orders Must include $5.00 postage. Orders
        Shipped To New York State MUST Include 8-1/4% Sales Tax. Orders
        Must Include Appropriate Shipping Cost See Below.  No Credit
        Cards or C.O.D.s Accepted.
        -----------------------------------------------------------------

        Name:____________________________________________________________

        Address:_________________________________________________________

        City:_________________________State:________Zip:_________________

        Telephone and time there:________________________________________
        I Enclose a check or money order for $_________. I am enclosing
        the appropriate shipping and sales tax as required.

        DISK SIZE I NEED (PICK ONE)
             5-1/4" (360k) __________    5-1/4" (1.2MB)  __________
             3-1/2" (720k) __________    3-1/2" (1.44MB) __________

        I WANT...(See READ.ME or ASTRO.DOC for Explanation of Options)
        1.____ Register Only. @ $29.95.
        2.____ Complete LITE ASTRO Package (This version) @ 39.95,
        3.____ Complete DELUXE ASTRO Package @ 54.95 (Includes        
               Printed Manual),
        4.____ Text Source & Compilers @ $20 (Needed to Modify or
               customize Text that ASTRO Uses)
        5.____ ASTRO DELUXE Package (3 & 4) @ $69.95 Save $5.
        6.____ ASTRO PROFESSIONAL Program @ $89.95. (Includes
               Printed Manual, Does Not Include Text or Report
               Customization Tools)
        7.____ ASTRO PROFESSIONAL Package @ $119.95. (Includes
               Printed Manual, and Text and Report
               Customization Tools)
                                                    Subtotal $___________
        SHIPPING:
        ____Disk Only Order (2) $1.50 U.S. & Canada, $3.50 International.
        ____Disk & Manuals $3.50 U.S. & Canada, $6.00 International.
        ____Express Mail U.S. $15.00, International $20.

                                                   Shipping: $___________

                  Sales Tax 8-1/4% (If Shipped To New York): $___________

                                                GRAND TOTAL: $___________






        Would You Be Interested In A Windows 3.0/3.1 Version? ___________

        Where Did you Receive ASTRO or hear about it?____________________

        Comments:________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        What Features Do You Need that are not

        Provided?__________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        Description Of Computer and Hardware_____________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3134

     Volume in drive A has no label
     Directory of A:\

    AST271-3 LZH     47745   3-31-92   4:24p
    AST271-4 LZH     39794   3-31-92   4:24p
    AST271-6 LZH     64127   4-01-92   4:35p
    AST271-7 LZH     29698   3-31-92   4:32p
    AST271-8 LZH     77439   4-04-92   5:14p
    AST271-9 LZH     55962   3-31-92   7:16p
    FILELST  DOC      4395   4-01-92   9:03p
    LHA      EXE     34283   7-20-91   2:13a
    REGISTER DOC      3868   4-03-92   5:47p
    GO       BAT       955  12-21-92   2:11a
           10 file(s)     358266 bytes
                               0 bytes free
