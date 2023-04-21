---
layout: page
title: "PC-SIG Diskette Library (Disk #3333)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3333/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3333"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FONTS.DOC

{% raw %}
```

===============================================================================
                    FONT DISK FOR LASER LETTERHEAD PLUS
            - SEE README.DOC FILE FOR THE INSTALLATION PROGRAM -
===============================================================================

 NOTE: These PCL Bit Map Soft Fonts do not have to be placed into LLHP's
       SetUp, since they are already there as "examples" for those who do not
       have this Font Disk (or Prg Disk #3). After installing these fonts, you
       may start the Laser Letterhead plus, download the fonts to your printer
       when prompted, and immediately begin creating letterheads and documents! 

 Three Typeface Families Deco-Ritz, Deco-University, and Letter Gothica are
 represented by the following files on this disk:

 1.  LGOTH12R.SFP  2.  RITZ012B.SFL  3.  RITZ014B.SFL   4.  RITZ015B.SFL

 5.  RITZ015B.SFP  6.  UNIV010L.SFP  7.  UNIV012L.SFP   8.  UNIV014L.SFL

 9.  UNIV018L.SFP  10. UNIV024L.SFP                                      

 All but one of these fonts have been entered in Font SetUp Screen #2. The   
 one exception is LGOTH12R.SFP. This font may be entered into #6-Fontext 
 position, if you want to replace Courier 10 with a more modern san serif font
 (See Below). #6-Fontext is the font that is used to print the text for
 TextWriter documents.

 1. General Information.

 Laser Letterhead plus uses PCL bit map soft fonts. PCL bit map soft fonts are 
 downloaded to Hewlett-Packard (or compatible) laser printers. Each bit map soft
 font file has a specific point size, typeface design, portrait or landscape
 orientation, slant, and weight.  They have many other characteristics, but
 those are the main ones. Soft Font typefaces usually come in four styles: Light
 or Regular, Bold, Italics and Bold-Italics. Each bit map font file is like a 
 PCX bit map file. They are usually made up of black dots on a white background.

 A "portrait" oriented font is used for letters or printed material that prints
 across the short width of the paper (8.5"). The paper assumes a position much
 like a portrait painting, and hence its name. A "landscape" oriented font 
 prints across the long width of the paper (11.5"), as if the portrait were
 rotated 90 degrees into a position much like a landscape painting. LLHP uses
 portrait fonts for letterheads, and landscape fonts for envelopes.

 2. PCL bit map fonts.

 Internal bit map Fonts are those bit map fonts built into many laser printers.
 An example is COURIER 10 that is in the LaserJet Series II and LaserJet III
 printers. The LaserJet III also has Outline scalable fonts. "Soft Fonts" are
 PCL bit map fonts that are sold on floppy diskettes. They may be downloaded
 to a HP LaserJet or compatible, and become "permanent" fonts until they are
 deleted or the printer is turned off.    
 
 3. Outline Scalable Fonts.

 Outline fonts are scalable fonts such as PostScript from Adobe, Intellifonts
 from Hewlett-Packard (used in the LaserJet III), FastFonts from Atech, and 
 TrueType from Microsoft. It is possible to use scalable fonts with LLHP, but

~

 that is a different approach than downloading. Scalable fonts are bascially
 math formulas that may produce any size typeface. The download program in
 LLHP is primarily for PCL bit map soft fonts. A soon-to-be-released module is
 being tested that will make using scalable fonts very easy to use in LLHP.


 4. Application Fonts.

 Application printer fonts are fonts that are made for use with certain soft-
 ware applications. They are purposely made so that no other application may
 import or use them. An application using its own proprietary downloadable 
 fonts does not usually make them accessable for other uses.  
 

 5. Screen Fonts.

 Screen fonts cannot be used in LLHP, since they are not laser printer fonts.
 These fonts are made only for video use and may have a "VGA" or "EGA" file
 ending. LLHP uses a screen font that has a modern style. It is not easily
 accessable so that it may not be mistaken for a printer font.
  
 6. Point Sizes.

 Point sizes are the usual way that fonts are measured vertically. 1 point is 
 equal to 1/72nd inch, or 72 points equal 1 inch. Various typefaces of the same 
 point size may not appear to be of equal point size because several of their
 other characteristics may vary. For instance, if the "x" height (height of
 the lowercase letters measured by the letter "x") is larger, they may appear
 to be of larger point size.  
 
 7. The  fonts included on this Diskette.

 The soft fonts on the this Font Disk are Deco-Ritz, Deco-University, and
 Letter Gothica. They are similar to Bitstream's University Roman, Broadway,
 and Letter Gothic. Each file is in a very readable form using the usual 
 conventions for naming PCL bit map soft font files. Most companies distribute
 soft fonts using this convention, but some do not. A few use cryptic methods
 that may be read only by their font manager programs. 

 If you learn to use this convention as explained below, you will be able to 
 read many other soft font files. Some substitute numbers or characters for
 stroke weight (instead of using letters such as R, L, or B) or orientation.
 These variations are usually easy to decipher. Outline or Application fonts
 do not often follow these rules, and many use several files with different
 file endings to store various font data. 

 All but Letter Gothica (LGOTH12R.SFP) are "Proportional Spaced Fonts". This 
 means that each letter is of a different width. "Fixed Spaced Fonts" are like
 those used in typewriters: each letter has the same spacing or width. Text-
 Writer, the Compact Word Processor, uses fixed width fonts. COURIER is a fixed
 width font used as a default font in many laser printers. COURIER was designed
 for IBM Selectric typewriters. LGOTH12R.SFP is a fixed width font that you may
 use for TextWriter instead of the internal font, COURIER 10. It is a modern 
 san serif style that may be more appealing than the COURIER font. If you 
 replace COURIER 10 with LGOTH12R.SFP, also change the far right box on line 
 #6-Fontext from an "I" to "" or double quotes. This tells Laser Letterhead 
 plus to download the font.
 
~

 Fixed width fonts may be used in the body of a letter, but the letterhead 
 looks best if a proportionally spaced decorative font is used. The typefaces 
 on the Font Disk are mostly "Decorative" fonts.  This means that they are a
 bit more fancy than those used for text printing and reading. They are not 
 intended for long text passages.

 Laser Letterhead plus requires proportionally space fonts in the letterhead.
 If fixed width fonts are used, they will not be centered and will over-run the
 margins and boxes. If this occurs, switch to a font that you know is proport-
 ionally spaced. Proportionally spaced fonts are termed "varying width fonts."  


 3. How to decipher the  Font files:

 The  Font files that will be installed with this edition of LLHP are
 clearly marked with all information needed to properly identify them.
 There are two decorative typefaces installed, and a fixed-width font for
 TextWriter. The following examples will show you how to recognize them: 


                              (1) UNIV012L.SFP


 The typeface name is represented by "UNIV". This is "Deco-University", similar
 to the University Roman typeface. The "012" is the point size. In this case 
 the font is 12 points. The "SFP" means "Soft Font Portrait". This font is
 a Portrait oriented soft font. Portrait oriented fonts are used in the 
 letterhead page of Laser Letterhead plus. If it were Landscape oriented, the 
 file ending would be "SFL" for "Soft Font Landscape". The "L" after the point
 size is the type weight. "L" means that it is of a light weight. LLHP may 
 optionally convert a light or regular weight typeface to bold when it is 
 printed.

                              (2) RITZ014B.SFL


 The typeface name is represented by "RITZ". This is "Deco-Ritz" and is similar 
 to Broadway. The "014" indicates a point size of 14. The "SFL" is for "Soft 
 Font Landscape" or a Landscape oriented font that is used on an envelope in 
 Laser Letterhead plus. The "B" after the point size is for bold. This means
 that it's stroke weight is darker, or heavier, than the light weight Deco-
 university above. 


 Deco-University is a light typeface that may be made "bold" by selecting that
 option in LLHP's SetUp. Deco-Ritz is already bold and is not available in a 
 light or regular weight. If made "Bold" over Bold by using that option in 
 SetUp, it will lose some of its fine detail; therefore, it is not recommended. 
 
 When using a light typeface near the edge of an envelope, it may blurr when
 printed. This is because most envelopes form an air pocket along the folded
 edge of an envelope. When it passes through the laser rollers, the trapped
 air is squeezed out of the envelope and it moves slightly. This slight movement
 may cause a light typeface to blurr the return address on an envelope. If this
 happens, use Deco-Ritz or any heavier typeface and it will be corrected. This
 is not a problem with the mailing address since it is located away from the
 edges of the envelope.

~
                              (3) LGOTH12R.SFP

 Letter Gothica is intended for use only on line #6-Fontext. It is of fixed-
 width and will not be properly centered if used anywhere else. It is similar 
 to Letter Gothic. It is 12 point, regular weight, and is ideal for text. 

 4. How to enter the fonts into LLHP's SetUp program:

 The shareware copy of Laser Letterhead plus already has the fonts entered into
 LLHP's SetUp program, so you will not have to enter them there. However, you 
 should know how this is done in the event you wish to change fonts. If the 
 fonts were supplied separately, here is how you would go about using them 
 with LLHP:

      Portrait Fonts:

      #1-BNameCl:       UNIV024L.SFP      (Business Name version)
      #2-PNameCL ADDC:  UNIV018L.SFP      (Personal Name version)
      #3-AddL PhoDatCl: UNIV012L.SFP      (Telephone and Date)
      #4-PNameTitleCl:  UNIV010L.SFP      (Personal name and Title)
      #5-Letter Slogan: RITZ015B.SFP      (Letterhead Slogan) 
 
      Fixed Spaced Font: (You may substitute LGOTH12R.SFP - replace the "I"
                         (in the far right box with "" or double quotes)
 
      #6-Fontext:       COURIER 10        (Body of TextWriter Module)

      Landscape Fonts: 

      #7-ReturnPBName:   RITZ015B.SFL      (Envelope Return Address 1st line) 
      #8-ReturnAddress:  RITZ012B.SFL      (Envelope Return Address - remainder)
      #9-Mail Address:   UNIV014L.SFL      (Envelope Mailing Address)  
     #10-EnvelSlogan:    RITZ014B.SFL      (Envelope Slogan)

 Remember to place double quotes "" after "if Soft Font" at the right side of
 the screen. This tells LLHP that it is a soft font. Internal Laser fonts have
 the letter "I" and the Hewlett-Packard A-Z cartridges use letters A to Z.

 When finished, examine your entries to make sure all spelling is correct.
 Answer Y for "Yes" that they are correct, or N for "No" to go back and 
 correct errors. When completed, a window will open and you will be asked
 if you want to download your fonts to your laser printer.

 If your laser is  ready and the fonts have been placed into the same directory
 as indicated to the INSTALL program (or you modified LP.BAT with an editor),
 then say Y for "Yes". Watch as each one is downloaded. If you made an error in
 your font entry, you will be told that an error occurred.

 DO NOT PRESS ANY KEYS UNTIL THE DOWNLOAD PROGRAM SHOWS YOU ALL FONTS THAT
 WERE INCORRECTLY PLACED IN SETUP AND THE PROBABLE CAUSE OF THE ERROR. (The
 download program is very accomodating and user friendly.)

 Since you are still in Font Screen #2, you will be able is see the incorrect
 entries immediately. Make the proper corrections and download again until you
 have all fonts properly downloaded. If you attempt to print a letterhead or
 envelope when download errors have occurred, you will get print-time errors.
 Once all entries are properly entered you will never have to worry about 
 download errors unless you re-arrange Font Screen #2. By then, you will
 be an expert at it.
~

 5. Printing a Letterhead.

 Use the Basic SetUp Screen #1 to enter your own data, or leave as is for a
 trial printing. Retreat back to the Main Menu by pressing "R" for Return at 
 each Menu. (You will be asked to save your SetUp entries before leaving the
 Utility Menu). After your return to the Main Menu, select Letterhead. Select
 all the options to start out (Date on Letterhead, Logo, Watermark, etc.). The 
 business letterhead is a good one to print first. When you get to the type of
 letterhead (Centered, Left-Justified, Special Design, or Only Logo), start with
 the Centered letterhead. After printing the letterhead, check it out to see if
 it has the correct frame, shading, etc.. If not, go into SetUp, Graphics and 
 Text SetUp Screen #4, and make the proper selections. Print the letterhead 
 again to see if all is as you wish.

 Then print each type of letterhead to see what is possible. Also print trial
 envelopes to see if they are also as you want them (use 8.5"x 11" paper folded
 length-wise to simulate a business #10 envelope. Refold and print again). 

 Just a note: Letterheads and envelopes are only the beginning. With the 
 TextWriter module, you may print flyers, notices, newsletters, etc. All the
 necessary PCX files are supplied. Don't forget the customized free PCX letter-
 head for the Only Logo selection, the free Logo for the Special Design letter-
 head, and the free watermark for all your business/personal letterhead stock!

 6. Additional Information.

 For more about fonts, one of the following paperback books is recommended:
 a. The LaserJet Font Book, Katherine Shelly Pfeiffer, PeachPit Press 1990.
 b. Collier's Rules for Desktop Design and Typography, David Collier,
    Addison-Westley Publishing Company 1991.
 c. Desktop Publishing Type & Graphics, Deke McClelland and Craig Danuloff,
    Publishing Resources, Inc., Harcourt Brace Jovanovich 1987.
 PCL bit map soft fonts are available from Shareware distributors, mail order
 discount houses, or direct: i.e., Eagle Systems, PO Box 502, Moorpark, 
 CA 93021, (805) 529-6992.

      If you wish any other information or help, use our (813) 544-0212 
      Message-Fax-Voice line. If you have not yet registered LLHP, send 
      in the form located in the README.DOC file or in the HANDBOOK.

                             
                                Thank You 

                               CPI SOFTWARE
```
{% endraw %}

## README.DOC

{% raw %}
```

================================================================================
             SUPPLEMENTAL FONT DISK FOR LASER LETTERHEAD PLUS
--------------------------------------------------------------------------------
                   INSTALLING THE PCL BITMAP SOFT FONTS
--------------------------------------------------------------------------------

Please also see the file FONTS.DOC on this disk. It will give much information
about the PCL Soft Fonts on this disk, and detailed information not found 
elsewhere. It contains information about fonts that you should know.

Laser Letterhead plus assumes that you have some PCL bit map soft fonts. 
However,if you do not have PCL Bit Map Soft Fonts, this disk will give you 
enough fonts so that you may start using Laser Letterhead plus immediately. The 
fonts on this disk have already been entered into Laser Letterhead plus' SETUP 
program, so you may start using LLHP immediately after installing these fonts. 
Extra fonts have been supplied so you may change the point sizes and switch 
typefaces to suit your taste.

If you have already installed Laser Letterhead plus onto your hard disk, you
may remember that you were asked where you wanted to place your soft fonts.
You were given a choice to place them with the program files or in another 
directory. It is important that you install these fonts INTO THE DIRECTORY
THAT YOU INDICATED DURING THE INSTALLATION OF LASER LETTERHEAD PLUS. This
is very important, since that location is where LLHP will look for these fonts.

If you have NOT yet installed Laser Letterhead plus, then you may install these
fonts into a directory that you will indicate to LLHP when you do that install-
ation. On the other hand, you may go ahead and do the LLHP installation, and
install these fonts later. It makes no difference, as long as you indicate to
the LLHP install program where the soft font files are located.

There is included on disk a PCL bit map soft font, LGOTH12R.SFP, that you may
enter into the #6-Fontext position in LLHP's SETUP instead of using your lasers
COURIER 10 internal font (default). LGOTH12R.SFP is a non-proportional modern 
sans serif font that you may prefer over the typewriter styled COURIER 10. If 
you do this, also replace the "I" (for internal) on the far right line of 
#6-Fontext to "" (double quotes) to let Laser Letterhead plus know that this 
font must be downloaded. After making any changes in Font SetUp - Screen #2, 
you must download fonts. The program will prompt you to do this, automatically.

You will probably want to select your own style of PCL bit map soft fonts.
These fonts are readily available from your shareware dealer and other
commercial sources. Postscript fonts, outline fonts, or programs that are 
made to create fonts on the fly for specific applications will not work (see
the file FONTS.DOC on this disk for more information.

If you cannot locate PCL bitmap soft fonts, you may call or FAX our Technical
Support Voice/FAX/Message line: 813-544-0212 for help.

--------------------------------------------------------------------------------
         CAUTION NOTICE IF YOU ARE USING AN EXTENDED MEMORY DISK CACHE
--------------------------------------------------------------------------------

CAUTION: THIS PROGRAM UTILIZES EXTENDED AND/OR EXPANDED MEMORY IF AVAILABLE. IF
YOU HAVE A DISK CACHE THAT RUNS IN EXTENDED MEMORY, SHUT OFF THIS PROGRAM'S 
ABILITY TO ACCESS EXTENDED MEMORY IN SETUP. THE PROGRAM WILL ACT STRANGELY AND 
HANG UP IF YOU DO NOT DO SO. THIS DOES NOT APPLY TO WINDOWS 3.1 USERS (BELOW).

~
WINDOWS 3.1 USERS: IF YOU USE SMARTDRIV.EXE THAT IS INSTALLED IN AUTOEXEC.BAT
FILE, LASER LETTERHEAD PLUS VERSION 3.5 IS COMPATIBLE AND WILL WORK WITH IT
WITHOUT REGARD AS TO HOW YOU HAVE IT SET UP. YOU MAY ALSO SET LLHP TO USE
BOTH HIMEM.SYS AND EXPANDED MEMORY IN THE SETUP PROGRAM. SEE HANDBOOK (PRESS
THE F-1 FUNCTION KEY WHEN RUNNING LASER LETTERHEAD PLUS) ON HOW THIS IS DONE.

-------------------------------------------------------------------------------
|||||||||||||| EASY INSTALLATION INSTRUCTIONS - HARD DISK ONLY ||||||||||||||||
-------------------------------------------------------------------------------
 
You will also be asked where you want to place your PCL bit map soft font
files. You may place them in an existing directory, or have INSTALL create
a new directory and copy them into it. If you are new at using soft fonts, we
recommend that you place them with your program files in the LLHP directory.
This way, you may view them when in Font SetUp Screen #2 by pressing F-10.

-> 1. Place the font diskette (or Program Disk #3) in Drives A or B or whatever
floppy diskette drive you have. It does not HAVE to be drive A.  

-> 2. Log onto the drive containing the font diskette and type: INSTALL

-> 3. The INSTALL font will ask on what drive you wish to locate the font files 
(it must be on your hard disk). It will create a new directory for the files.
You are asked to supply the name of the directory.

-> 4. You will see on the screen what is occuring.

-> 5. Do not place fonts in a subdirectory off of a directory of another pro-
gram. this takes much longer for the LLHP to find the fonts, and may cause a 
problem. If you wish to have several programs access your soft fonts, place 
them in a directory directly off the root directory.

-> 6. When the INSTALL process stops, you will be on the drive you specified 
above for the font files.  Installation is completed. 

-> 7. Run a DIR command on the program directory. You must have a total of 10
font files installed with the file endings or SFP and SFL. If you do not, 
contact your shareware distributor or CPI Software. 

-> 8. Type LP to start the program, and go to the Handbook, and follow the
instructions under "How to Begin". 


              Thank You for trying Laser Letterhead Plus.

Don Gerlach, CPI Software, PO Box 47097, St Petersburg, FL 33743 - 813-544-0212 













~
===============================================================================
          Product Registration and Request for Basic Customized PCX Pak
===============================================================================

    Registration will entitle you to receive the Commercial Edition of Laser 
    Letterhead plus, a printed Handbook, and the Basic Customizing PCX Pak. The
    PCX Pak contains forms for obtaining one PCX text based logo, one PCX 
    letterhead image, and one PCX watermark image at NO COST TO YOU. The image 
    designs selected from the Pak are professionally designed as vector images
    using fountain fills, gray shades, 3-D perspective or other appropriate 
    effects. Finally, they are scaled to exact print size and converted to a
    black and white PCX image. Typefaces may be selected from a wide selection
    (over 100) of popular fonts. You may include material for scanning.
    
    In addition, you may have one image of your own converted to PCX format 
    and/or re-scaled if it is in one of the following formats: 

    1. TIFF files                           7. PIF, GDF from IBM 
    2. BMP or Windows 3.+ Bitmaps           8. PICT from MacIntosh computers
    3. DXF or Autocad                       9. HPGL plotter files
    4. AI, EPS, from Adobe                 10. CGM Computer Graphics Metafiles 
    5. GEM files                           11. EPS CorelTrace
    6. PIC from Lotus                      12. CDR Corel Draw!
    If your image is not in any of these formats, we will be able to scan it 
    with a high resolution 600dpi flatbed scanner, converting it to a PCX file.
    Scanned images run the risk of losing some small detail when transferred.
          
   
    Additional PCX images or logos may be ordered with the Basic PCX Pak.
    We reserve the right to refuse any image or letterhead requests that are 
    considered unreasonable or not within the scope or intent of this offer.

    --------------------------------------------------------------VER 35100192
 

    Name:________________________________________Telephone:(_____)____________ 

    Business Name:____________________________________________________________
 
    Street Address:___________________________________________________________

    City, State, Zip:_________________________________________________________

    Disk Size: __1.2M HD 5.25" __1.4M HD 3.5"      Amount of Laser Ram:_______
           
    Check if User is Vision Impaired & Requires Large Screen Font Driver:_____ 
 
    Registration Fee: Each Single User...............: ___@ $25.00....:_______
              
    Florida Residents Add 6% State Sales Tax (Pinellas County 7%).....:_______

    Shipping/Handling for US or Canada add $4.95 (Others add 8.95)....:_______

    Total.............................................................:_______
       
  Make Checks/Money Orders Payable to CPI Software and Send with this form to: 
    PO Box 47097, St. Petersburg, Florida 33743-7097 USA - FAX 813 544-0212
    All Currency in US dollars Drawn on a Bank or Branch Located in the USA
             - Allow up to 3 to 4 Weeks for Processing and Delivery -
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3333

     Volume in drive A has no label
     Directory of A:\

    BROWSE   COM      1088   7-09-87   5:58p
    INSTALL  EXE     12072  10-12-92   6:02p
    FONTS    EXE    142069  10-11-92   8:42p
    FONTS    DOC     15015  10-15-92   6:17p
    README   DOC      9347  10-11-92   7:56p
    GO       BAT        67  11-17-92   6:28p
    SHOW     EXE      2040   9-12-88  10:48a
            7 file(s)     181698 bytes
                          137216 bytes free
