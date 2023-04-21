---
layout: page
title: "PC-SIG Diskette Library (Disk #3133)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3133/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3133"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## INSTALL.DOC

{% raw %}
```

		    INSTALLING ASTRO SHAREWARE 2.71

This version of ASTRO is shipped with an install program. If you
recieved it from a BBS you may find a file with a name AST271-0.
Note I am not including the file extension. This will either be
.LZH for files compatible with LHA, and .ZIP for files compatible
with PKZIP/PKUNZIP.

To Use the Install program, Log onto the drive that you want to
install from and type INSTALL and press the Enter Key. Then follow
the instructions.

NOTE: If you must run ASTRO on two 360k floppies and want to print out
the graphics, make sure your path includes A:\;B:\; so it can find
the Printer Driver which is on the B: drive. For Example if you
type PATH at the DOS Command Line, and DOS Responds with PATH=C:\DOS;
you will need to type PATH=A:\;B:\;C:\DOS; before you start ASTRO
so you can print the graphics. TIP: Put this in a batch file which
sets the path and then starts ASTRO.

NOTE: If you have a Monochrome or Hercules Graphics Adapter, You must
start the Program MSHERC provided before starting ASTRO.

If you did not get an install program, this may be installed on
a hard disk by creating a single directory and unpacking each file
into that directory.

You can also install it on a single 5-1/4" 1.2MB floppy or a single
3-1/2" 1.44MB floppy using the same procedure. In That case I suggest
only including the Necessary Graphics Files. See The NOTES section
below for an explanation.

If You need to install ASTRO on 5-1/4" 360k or 3-1/2" 720k floppies,
the following table shows the way various disks need to be layed out in
order to use ASTRO on floppies. The Install program does this for you.
Follow this in case you can't find the install program and INSTALL.DAT
data file.

The Original Master File column shows the Master Archive file that you
will need to un archive using PKUNZIP or LHA. These file Should Not
Be on your Final Disks.

See the file FILELST.DOC for the Complete File Listing.

5-1/4" TWO 360k FLOPPY DRIVES.

ORIGINAL
MASTER      DISK
FILE        LABEL               DESCRIPTION
------------------------------------------------------------------------
AST271-1    MAIN PROGRAM        Main Program Files.
........................................................................
AST271-7    UTILITIES           Utilities.
........................................................................
AST271-4    HELP/DATABASE       Help Files.
AST271-5                        Basic 200 Location Database.
........................................................................
AST271-3    NATAL DATA/       + Graphics Fonts for Natal Charts.
AST271-2    USER/TEMP         ^ Graphics Printing Drivers for Natal.
AST271-6                        Natal Text Data.
........................................................................
AST271-2    COMPAT/TRANS      ^ Graphics Printing Drivers for Comp & Trans.
AST271-9    DATA/USER/          Compatibility & Transits Text Data.
AST271-3    TEMP             +  Graphics Fonts for Compatibility & Transits.
........................................................................
AST271-8    DOCS                Documentation.

NOTES:
^ One file from this archive is needed on both disks. Use only one to
  conserve disk space. EP9DRV.OVL--9-pin printers, EP24DRV.OVL 24-pin
  printers, HPLDRV.OVL--Laser/DeskJet printers.

* One file from this archive is needed on both disks. Use only one to
  conserve disk space. ASTROEP9.FON--9-pin printers, ASTROP24.FON--24-pin
  printers, ASTROHPL.FON--Laser/DeskJet printers

If you use 24-pin or HPL Laser Driver you will need to set up the program
using the Setup Graphic Modes & Printing Screenm, and possibly Setup
Printer Screen.

3-1/2" TWO 720k FLOPPY DRIVES.

ORIGINAL
MASTER      DISK
FILE        LABEL               DESCRIPTION
----------------------------------------------------------------------
AST271-1    MAIN PROGRAM        Main Program Files.
AST271-7    UTILITIES           Utilities.
AST271-8    DOCS                Documentation.
......................................................................
AST271-4    HELP/DATABASE       Help Files.
AST271-5                        Basic 200 Location Database.
......................................................................
AST271-3    DATA/USER         * Graphics Fonts for Natal Charts.
AST271-2    TEMP              ^ Graphics Printing Drivers for Natal.
AST271-6                        Natal Text Data.
AST271-9                        Compatibility & Transits Text Data.

NOTES:
^ One file from this archive is needed. Use only one to conserve disk
  space. EP9DRV.OVL--9-pin printers, EP24DRV.OVL 24-pin printers,
  HPLDRV.OVL--Laser/DeskJet printers.

* One file from this archive is needed. Use only one to conserve disk
  space. ASTROEP9.FON--9-pin printers, ASTROP24.FON--24-pin printers,
  ASTROHPL.FON--Laser/DeskJet printers

If you use 24-pin or HPL Laser Driver you will need to set up the program
using the Setup Graphic Modes & Printing Screenm, and possibly Setup
Printer Screen.

```
{% endraw %}

## README.DOC

{% raw %}
```






                                LICENSE FOR USE:
                            Shareware Trial Edition.

        -----------------------------------------------------------------
        WARNING! THIS IS NOT FREE OR PUBLIC DOMAIN SOFTWARE. THIS IS A
        COPYRIGHTED COMMERCIALLY PUBLISHED PROGRAM.
        -----------------------------------------------------------------
                               WHAT IS SHAREWARE?
        Shareware is a means of marketing Software at a reasonable price.
        Developers of Software use Shareware to distribute their products
        using Shareware because it provides a minimal advertising cost.
        Advertising costs money. In order to market a program on a retail
        basis, a developer typically needs to sell a minimum of 5000
        copies a month. Shareware circumvents this somewhat and helps
        provide you the customer with a good value at a much lower price
        than you would receive from a commercial source.
             In order for shareware to work, If users are actually using
        a product, they must register. Developers can't continue to
        develop and improve products if customers don't register and
        upgrade. Running a small business costs money. If you enjoy using
        a shareware product, either register it or tell the developer
        what they can do to provide a product that you will register. If
        you don't register remove the product from your system and don't
        use it. Shareware is not Free or Public Domain Software. You
        can't expect timely upgrades and fixes from Free or Public Domain
        Software. With a Product like ASTRO, if you register, and you
        find there are problems I will do everything I can to see that
        the product works well for you. I will provide you as much
        assistance as I can. This unfortunately costs money. I can't do
        it without your registration.
        -----------------------------------------------------------------
             This software is provided for Trial Purposes Only! The
        purpose of this is to give you the user the opportunity to try
        out ASTRO without having to buy it in order to try it.
             This version allows you to use all features of this version
        unimpaired. You are Entitled to Use this Shareware Version for Up
        to 30 days from purchase without Obligation. You may not use this
        version for any Commercial Purpose. I will attempt to provide a
        minimal level of technical support to any caller who calls asking
        for help without registration.
             When you register this program, I will send you the latest
        version of ASTRO, free of limitations and reminders, complete
        with all utilities.
             Since this package is provided for trial purposes, you may
        copy the original .ZIP or .LZH files or disks you received as
        many times as you wish, and upload, download it to your heart's
        content.
             This version is provided in two different versions  One
        shipped in .ZIP format files compatible with PKZIP/PKUNZIP, this
        version is preferred for BBSs. The other is shipped with a
        proprietary install program which works with LHA.EXE uses .LZH
        compressed files. These files can be decompressed using LHA as
        well. If you wish to upload the .LZH version, you should create



                                     Page 1





        an archive called AST271-0.LZH containing INSTALL.EXE,
        INSTALL.DAT, and INSTALL.3.
             The only thing I ask is to upload or copy the entire package
        intact, in the original ZIP file (provided you got this package
        on a BBS) or disk form, and not change the program or any of the
        documentation.
             Unauthorized alterations versions to this package will be
        considered "Pirated" or hacked. This is to protect you the user
        from receiving a damaged files that may damage your system or
        disk. The disks I send you once you register this program may not
        be copied, except for archival or backup purposes only.
        -----------------------------------------------------------------
        NOTICE: Under no circumstances do you by registering this
        program, do you have the right to operate a chart service. You
        may offer charts for sale provided you offer a Value-Added
        Service such as consulting, you modify the text, etc. Please
        contact me if you have any questions about this.
        -----------------------------------------------------------------

                            THREE REGISTERED VERSIONS

             There are several different registered packages available at
        different price levels, depending on what you need or want. There
        are three different Versions of the Program.
             All registered versions include the 1200 location Extended
        Location Database. This contains mainly U.S. and Canadian
        Locations, but has some other locations as well.
             In the description of each version I show what will be
        provided for the registration. Each version comes with free
        technical support for a limited period of time (stated below).
        This is the stated minimum period. After that time I will do my
        best to provide any additional help that you may need.
             Technical support is provided by phone and by writing. I can
        also be reached via several BBS systems. See the Support section
        for details.

                                  LITE VERSION

             A LITE Version which is basically this version. This is
        mainly provided for beginners, and those who don't need the
        advantages of the more advanced versions. The LITE version also
        works on a Two 360k 5-1/4" floppy disk system. If you send $39.95
        you will get this version. This registration level only provides
        the disks, No printed manual is provided. Registering this
        Package entitles you to access to technical support for 90 days.
             Earlier shareware versions included a Progressed Report and
        midpoints which were taken out due to lack of disk space. In
        their place are better graphics printing, and true Astrological
        Glyphs. If you want these features you will want the DELUXE
        version Below.






                                     Page 2





                            FEATURES OF LITE VERSION.
        * Works With Mice.                * Location Database of 1200
        * Natal (Birth Reports).            Locations.
        * Compatibility Reports.          * Birth Database includes
        * Transits (or Day To Day)          examples, You can add your
          Charts.                           own to this database.
        * Shows Aspect Lines on           * Print to Epson and compatible
          Graphics.                         9 and 24 pin printers (B&W
        * Astrological Glyphs or Letter     and Color), HP LaserJet and
          Abbreviations.                    DeskJet Printers

                                 DELUXE VERSION.

             A DELUXE Version Which offers all the features that The Lite
        Version does, but adds more Reports and adds other Features and
        supports more printers. This version costs $54.95 and Includes a
        Printed Manual. Most users will find this version best for their
        needs. Registering this Package entitles you to access to
        technical support for 90 days.

            FEATURES OF DELUXE VERSION IN ADDITION TO LITE FEATURES.
        * Relocation Report With Text       The Ascendant, Med Coeli or a
          Interpretations.                  House Cusp Should Be, ASTRO
        * Progression Report With Text      can calculate the birth time.
          Interpretations.                * Support for HP PaintJet,  and
        * Composite Report With Text        Canon Laser Printers.
          Interpretations.                * Support For Microsoft Word
        * Solar and Lunar Return            and Microsoft Word For
          Report. Gives Dates and Times     Windows and other Windows
          that Sun and Moon return to       Word Processors using .RTF
          the Natal location.               file format.
        * Midpoints.                      * Printed Manual.
        * Advanced Birth Rectification.
          If you can determine where

             In addition to these features, for an additional $20, I will
        send you the Text Source files used to create ASTRO's Text
        interpretations. These are in ASCII. You can edit these files
        with any Word Processing program that accepts plain text or
        ASCII. This package also includes the programs required to build
        these files into ASTRO's Proprietary Indexed Compressed format.
        This is all controlled by a few batch files which eliminates the
        need to understand all the details of these programs.
             As a special Offer, You can order both the DELUXE Program
        and the Text Source and Compiler's Package for $69.95 a savings
        of $5.

                              PROFESSIONAL VERSION

             The third version is a more professional version. This
        version goes far beyond the features of the DELUXE PROGRAM, in
        that all the reports can be customized.
        This version comes with a Printed manual and is packaged in two
        packages. One which contains the Program itself with the


                                     Page 3





        necessary stuff. The second also contains all the stuff to
        Customize the text and the reports. A New Text Source and
        Compilers package is supplied with this that makes modifying text
        and reports easier and more automated.

              FEATURES PROFESSIONAL VERSION IN ADDITION TO DELUXE.
        * Totally customize output of     * Visual Graphic Chart
          reports and appearance of         Rectification.
          reports and manner of           * Create Cover Page.
          presentation.                   * Create Comment Page Files.
        * Separate Size and Typeface      * Heliocentric Chart.
          for Headlines.                  * Fixed Stars Chart.
        * Center Headlines.               * Arabic Parts Chart.
        * Better Handling of He/She in    * Progress almost any chart.
          Compatibility and Composited    * Relocate almost any chart.
          Charts.                         * Tag Multiple Charts to Print,
        * Batch Programming Language.       Delete Convert.
        * Macros.                         * Better Text Printing and
        * Keyboard Files.                   conversion, particularly
        * Save Graphics to .PCX             handling of tabs.
          Graphics.                       * Supports Publisher's
        * Graphically Step through          Powerpak.
          Transits.                       * Better Text Modification.
             The Professional Program prices at $89.95 for the Basic
        Professional Package and $119.95 for the entire package including
        the Text Source Files package which is required to modify text or
        reports. This package also includes 120 days access to technical
        support by telephone or other means.
             The text source files package that accompanies the PRO
        Program is much easier to use and includes a program which
        controls the process, rather than a batch file. This makes it
        easier to control the process and only rebuilds files that have
        changed. This package also allows you to use the native file
        format of several word processing programs (WordPerfect 4.2,
        WordPerfect 5.0-5.1, WordStar).
             By registering you will be entitled to technical support and
        future upgrades at reasonable prices. If You are in a rush I can
        notify you of the password for your program till your Updated
        copy arrives. You may distribute the Shareware version of ASTRO
        as long as you do not charge more than $5.00 per disk. A lot of
        hard work went into ASTRO. In order to continue improving ASTRO
        and providing extensions to it, you must register it. Without
        your support, I cannot afford to justify the expense and energy
        necessary, if you will not register and support this product.

                                             Thanks in Advance,


                                            Christopher J. Noyes







                                     Page 4





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



                                     Page 5






        Would You Be Interested In A Windows 3.0/3.1 Version? ___________

        Where Did you Receive ASTRO or hear about it?____________________

        _________________________________________________________________

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






















                                     Page 6
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3133

     Volume in drive A has no label
     Directory of A:\

    AST271-1 LZH    182501   4-04-92   5:30p
    AST271-2 LZH      9298   4-04-92   5:30p
    AST271-5 LZH     15085   4-04-92   5:10p
    INSTALL  3         726   4-02-92   9:40p
    INSTALL  DAT       726   4-02-92   9:40p
    INSTALL  DOC      5133   4-03-92   1:45p
    INSTALL  EXE     38214   4-04-92   5:41p
    LHA      EXE     34283   7-20-91   2:13a
    LHA213   EXE     44381   8-09-91   4:44p
    README   DOC     16943   4-03-92   9:13p
    GO       BAT       955  12-21-92   2:13a
           11 file(s)     348245 bytes
                            8192 bytes free
