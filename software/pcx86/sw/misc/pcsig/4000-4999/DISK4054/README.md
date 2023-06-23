---
layout: page
title: "PC-SIG Diskette Library (Disk #4054)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4054/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4054"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## MTHSHOP2.DOC

{% raw %}
```





















                                 MATH-SHOP 2
                                 (Fractions)




                             Copyright 1991,1993
                                      by

                                 Jack C Webb
                                 P.O. Box 357
                      Grand Blanc, Michigan 48439-0357


                              All Rights Reserved







                               Table of Contents



         Introduction 
           System requirements .............................. 1
           Disclaimer ....................................... 1
           Registration ..................................... 1
           Shareware ........................................ 1

         Getting started .................................... 2

         Menu system 
           Worksheets ....................................... 3
           Files ............................................ 5
           Utilitys ......................................... 5

         Headers ............................................ 6

         Editing keys ....................................... 7

         Printers
           Printer basics ................................... 7
           Installing printers .............................. 8
           Printer requirements ............................. 9
           Custom printer .................................. 10

         Printing to a file ................................ 11

         Range selection ................................... 12

         Problem selection ................................. 12

         Number selection .................................. 13



                                 INTRODUCTION
                                 ------------

      MATH-SHOP 2 (Fractions) - The ultimate worksheet generator.
      The program is menu driven and very easy to use. Problems can be
      generated in addition, subtraction, multiplication, division or a
      mixture. The worksheets can be customized by the user to produce 
      virtually any layout required. You can select the number of digits,
      the range of numbers used for the digits, the number of problems
      on a page and much more. Worksheets can be printed to a printer
      or to a file. Worksheet layouts can be stored and recalled later
      to print additional worksheets. Answers can be printed.


                             SYSTEM REQUIREMENTS
                             -------------------

                       IBM compatible PC,XT or AT
                       256K min. memory
                       Any display adapter
                       1 floppy drive and/or hard drive


                                 DISCLAIMER
                                 ----------

    This program is provided "as-is" without warranty of any kind either
    expressed or implied, including any warranties of merchantability
    and/or fitness for a particular purpose. No liability shall be assumed
    for any damages whether direct, incidental or consequential from a
    failure of this program to operate in the manner desired by the user.


                                 REGISTRATION
                                 ------------

    MATH-SHOP 2 is a shareware program and you are encouraged to try it
    out and make copies for friends. If you like the program and continue
    to use it, you are requested to register your copy. A registration form
    is included in the file REGISTER.DOC. You can print the form by typing
    REGISTER at the DOS prompt.


                                 SHAREWARE
                                 ---------

    Shareware distribution is subject to the following conditions.

        MATH-SHOP 2 must be distributed in unmodified form, including all
           files on this disk.
        MATH-SHOP 2 may not be distributed with any other product without
           prior written permission.
        No fee other than a disk distribution fee not to exceed $5.00 may
           be charged for MATH-SHOP 2.


                                       1


                              GETTING STARTED
                              ---------------


    You should have the following files on your shareware disk.

           Support files:

                1. NEW-USER.BAT   - run for beginner tips
                2. PRINTDOC.BAT   - run to print this file
                3. INSTALLH.BAT   - run to install program on hard drive
                4. REGISTER.BAT   - run to print registration form
                5. REGISTER.DOC   - file containing registration form
                6. MTHSHOP2.DOC   - file containing documentation

           Program files:

                7. MTHSHOP2.EXE   - the main program
                8. MTHSHOP2.DAT   - file in which saved formats are stored
                9. MTHSHOP2.HLP   - file containing text for help menu
               10. MTHSHOP2.PDB   - file containing control codes for
                                    printer drivers
               11. MTHSHOP2.PRN   - file containing control codes for
                                    installed printer
               12. MTHSHOP2.PRC   - file containing control codes for
                                    custom printer
               13. MTHSHOP2.HDR   - file containing the headers


         To run any of the files with the .BAT extension just type the
         file name followed by the Enter key at the dos prompt. For
         example NEW-USER <Enter>.

         To run the MATH-SHOP program type in MTHSHOP2 <Enter>.

         Not all the files above are necessary to run the program.
         Numbers 7, 9 and 10 are all that have to be available when
         the program is started. Files 8, 11, 12, and 13 will be created
         by the program as needed.

















                                       2


                                MENU SYSTEM
                                -----------
    MATH-SHOP 2 is a menu driven program. By just following the prompts
    you should be able to run the program with no problems. The following
    documentation will supplement the program menu help information.

    [Worksheets]   
        :          
     --------      
    | Create | - allows worksheets to be created.
     --------      
        :          
    -----------------
   |  Addition       |  Select type of problem for worksheet
   |  Subtraction    |
   |  Multiplication |
   |  Division       |
   |  Variety        |
   |  Comparison     |
   |  Reduction      |
    ----------------- 
           :          
      -----------     
     |           |       ---- Numbers --- 
     |  dd   dd  |......|  Odd and Even  |  Select number of digits and
     |  -- + --  |      |  Even only     |  if to use even numbers only
     |  dd   dd  |       ---------------- 
     |           |         :              
      -----------          :              
                           :              
                           :              
     ------(Number ranges)----  
    | min  max      min  max  | 
    | 01 - 99       01 - 99   |   Select ranges for numbers
    | -------   +   -------   | 
    | 01 - 99       01 - 99   | 
    | Unique problems: > 100  | 
     -------------------------  


     In previous versions the min and max had to have the same number
     of digits such as 10-99. In this version the range selection has
     been expanded to allow ranges such as 01-99. This will allow
     problems on the same worksheet to have different size numbers.

     These menus allow the selection of the range of numbers to be used.
     The program may not allow you to select certain ranges if they will
     not generate problems. For example the program does not allow negative
     answers in subtraction and therefore will not permit ranges that would
     only have problems with negative answers.
     For all problems the program will indicate the number of unique
     problems that are possible with the selected ranges. If there are 
     more than 100 the program will indicate >100



                                      3


                   |
         ----------------------
        | --              ---- |
        |                      |  This menu requests the number of problems
        |   +  +  +  +  +  +   |  vertically and horizontally that you want
        |   +  +  +  +  +  +   |  to display on the worksheet. If the total 
        |   +  +  +  +  +  +   |  number of problems requested is less than
        |   +  +  +  +  +  +   |  or equal to the number of unique possible
        |   +  +  +  +  +  +   |  then you will not have duplicates on the
        |   +  +  +  +  +  +   |  worksheet. If the number requested
        |   +  +  +  +  +  +   |  (NPH * NPV) is greater than the number
        |   +  +  +  +  +  +   |  of unique then all the unique + random
        |   +  +  +  +  +  +   |  duplicates will be put on each page.
        |                      |
         ---------(54)---------

          <F10> to save format - this allows you to save the worksheet
                                 created with a 20 character name.
                                 These saved formats can be accessed with
                                 the Recall menu to be discussed later.
                                 (see editing keys in Header section). You
                                 can store up to 100 formats.

          <Enter> - continue on and print the worksheets.

    [Worksheets]
         |
     ----------
    |  Recall  |
     ----------
         |
     --Formats--
    |           |
    | Print List| - Allows you to print a list of the stored formats
     -----------

     --Formats--
    | View List | - View displays on screen a list of the stored formats
    |           |   these can be scrolled thru and one can be selected with
     -----------    the <Enter> key. This will bring up the Format menu.
         |
      --Format---
     |  View     | - Allows the selected format to be viewed
     |  Locate   | - Search for a particular format
     |  Rename   | - Allows the selected format to be renamed
     |  Delete   | - Allows the selected format to be deleted
     |---List----|
     |  Count    | - display the number of saved formats (max of 100)
     |  Sort     | - sort formats by name or type
      -----------
           |
      --Sort by--
     |   Name    | - The list of formats can be sorted by name or
     |   Type    |   type (e.g. A-addition, etc.) 
      -----------

                                       4



       [Files]
          |
      --------
     | Load   |   ---File type----
     | Backup |--| Format         | - file with saved formats
     | Delete |  | Header         | - file with saved header
      --------   | Custom printer | - file with saved custom printer codes
                  ----------------
                 | User selected  | - input any file name
                  ----------------


      This menu allows the files which contain the stored information
      (MTHSHOP2.DAT- formats, MTHSHOP2.HDR - header, MTHSHOP2.PRC - printer)
      to be loaded or backed up to a separate disk. IF the program is run
      on a hard drive then the files will be in the same directory as the
      program. The files can be saved by using the Backup menu option
      which will store the selected file to a floppy drive. The Load menu
      item allows you to copy your data from a floppy disk to the hard
      drive. Doing this will overwrite the file on the hard drive and any
      information in the hard disk file will be lost. This allows several
      people to access the program on the computer using their own data
      files kept on individual floppy disks. The delete is included in case
      the files become corrupted and unusable. In this case they should be
      deleted and loaded from your backup disk or recreated.
      If the program is run off a floppy disk then the files will be
      stored on the same disk.



      [Utilitys]
          |
     ----------------------
    |  Headers             | - Text printed at top of worksheet
    |  Calendar            | - Displays a calendar for a user selected date
    |  Printer             | - Menu of functions for installed printer
    |----------------------|
    |  Install printer     | - List of printers available
    |  Edit custom printer | - Create a custom printer driver
     ----------------------















                                     5



      HEADERS:

         This option allows a line of text to be created or edited.
         This text will then be printed at the top of each worksheet
         along with the number key (e.g. ###-1 which is a three digit
         random number + the page number). The number key is used to
         identify the answer sheets. To print without a header (only 
         the number key) make a `Blank header' the active one.
         Up to 20 headers can be stored. These can then be scrolled
         and any selected to be active (the active one will be printed).

         Up-Dn arrows - scroll thru the stored headers one at a time

         F1 - will place the date function at the left end
         F2 - will place the date function at the right end

         The date function indicated by @Date----| is a place holder
         for the date which will be printed in the header. The date 
         will be your computer date. The format is 11-04-1992. The
         function reserves the 10 spaces that the date will require.
         The date function will delete all text when placed in the
         header so it should be put in first and then your text.

         F3 - will print the currently displayed header. Use this to
              check how a header will print while creating or editing.

         F4 - erase all headers. This will erase all the headers in 
              the file. Can also be performed by deleting the header
              file under the menu item [Files].

         F5 - make header active. The header that is in the number one
              position is the ACTIVE HEADER. This header will be printed
              at the top of each worksheet. To make one of the other 
              headers the active one scroll until it is displayed on the
              screen and then press F5. This header will be swapped with
              the active one.

         Enter - When creating or editing a header you must press Enter
                 to make the changes permanent.

         Escape - This will exit the current operation without saving any
                  changes since the last Enter.

         As you create each new header a blank one (Blank header) will
         be added to the bottom of the list up to the maximum of 20.
         Once created any header can be changed using the editing keys.









                                       6



      EDITING KEYS:

         These are the keys used for creating or editing format names,
         file names, headers and the custom printer codes. They operate
         much like a simplified word processor.

             Left & right arrow - move cursor in name
             Del                - delete item under cursor
             BackSpace          - delete item to left of cursor
             Crtl-BackSpace     - delete entire name
             Home               - move cursor to start of name
             End                - move cursor to end of name
             Esc                - exit
             Enter              - save




      PRINTER BASICS:

         Your printer has many options available such as fonts, quality
         of print (LQ, draft, bold), margins, etc. Typically just about
         every feature of a page can be changed. A printer has what are
         called defaults which are the settings used when the printer is
         turned on. Some of these defaults can be changed using physical
         switches located on your printer. Some can also be changed using
         front panel controls such as pushbuttons. The third way to change
         defaults is sending special commands to your printer by using
         a program.
         If programs that you run have special printer requirements they
         will usually send the commands automatically before printing.
         Normally you select what printer you will be using when the
         program is installed or by a setup utility. Then at print time
         the program will send codes to the printer to change defaults
         and select the features it needs.
         If you look in your printer manual in the appendix you will
         find these codes. They will be called control or command codes.
         Usually they will list a function such as Form Feed and the codes
         in three formats; ASCII, Decimal and Hexidecimal. The decimal
         codes for form feed are 27 12. If these codes are sent to your
         printer it will execute a form feed the same as if you had pushed
         form feed on the control panel.

         However once the printer is turned off or reset the features are
         returned to their default values until changed again manually or
         by a program.









                                       7



     INSTALLING PRINTERS:

         This program has installable printer drivers. What do these do?

         As discussed in PRINTER BASICS, programs have to send codes to
         a printer to change any defaults that are necessary for the
         program to operate properly. MATH-SHOP uses the full page for
         printing the problems. LaserJets and PaintJets have a non-zero
         top and bottom margin which interferes with the printing and
         causes the worksheets to print shifted down on the page. Codes
         to correct this have to be sent to the printer each time the
         worksheets are printed (codes are reset when the printer is
         shut off). When a printer is installed it becomes the active
         printer. The printer name and its functions will be displayed
         when [Utilitys:Printer] is selected or when <M> is selected
         at the print DESTINATION menu. When these lists of functions
         are displayed the codes for that function will be sent to
         the printer if selected.

         The most important use for the installed driver is to send
         codes automatically to the printer at print time. Each
         printer driver has a function called <Set Page>. The codes
         contained in this function are sent automatically. This 
         allows the printer to be set up correctly before each 
         worksheet is printed. (For example to correct the LaserJet
         margin problem).

         The list of printers has a custom option. Selecting this
         installs the printer driver created under [Utilitys:Edit
         custom printer]. If you have special requirements you can
         create your own printer driver to send codes at print time.
         See CUSTOM PRINTER.

         If you have strange characters printing in the top left corner
         of the first worksheet it means the <Set Page> codes are not
         correct for your printer and it is printing these codes rather
         than using them as control codes. If this happens you can 
         change drivers, Install <None> (no codes are sent) or use the 
         [Utilitys:Edit custom printer] option to define your own codes.
















                                       8



     PRINTER REQUIREMENTS:

       This program uses a line spacing of 6 lines per inch (lpi) - 
       66 lines per page with no top or bottom margins. The horizontal
       spacing is based on using a font with 10 characters per inch.
       Most printers should have these as the default.


     DOT MATRIX: 

       The program should print correctly on Epson or compatibles with no
       installed printer driver. The printer drivers can be used to access
       features such as LQ or bold when printing. The function labeled
       [Set Page] will be sent automatically when worksheets are printed
       The codes sent with this function are used to set the Printer
       requirements listed above. If your printer is not listed install
       the Epson driver and set your printer to emulate Epson.


     LASERJET AND PAINTJET OR COMPATIBLES:

        These two printers have a non-zero top and bottom margin so
        the printer drivers WILL HAVE TO BE INSTALLED (select the
        appropiate driver under [Utilitys:Install printer]. These
        drivers will automatically send correcting codes at print time
        For the division sign the printer must use the PC-8 symbol
        set or an equivalent one. The divide symbol must be at 
        decimal location 246. As mentioned above, the codes will be 
        sent at print time (if the printer is installed) to select 
        the PC-8 symbol set. If your printer does not have this
        symbol set the division sign will print as a minus sign.

       If you wish to send other codes automatically at print time there
       are two techniques you can use:

         1. Use the custom printer option (see CUSTOM PRINTER).
         2. Edit the text file MTHSHOP2.PDB - If your an experienced user
            and have a text editor you can change the codes in this file
            to whatever you want. You can modify an existing driver or 
            even add a complete new driver to the file. Just be sure to
            follow the same format. As a precaution be sure you have a
            BACKUP COPY of this file before you modify it. Remember codes
            included with the Set Page function name will be sent
            automatically at print time. You can combine codes, so for
            example you could use it to turn on NLQ and Bold, etc. The
            first letter of each function must be unique to allow first
            letter selection. Also, only the decimal form of the code will
            be accepted. These are listed in your printer manual.







                                       9



     CUSTOM PRINTER:


        The [Utilitys:Edit custom printer] option will allow you to
        create or edit your own printer driver. You will first be
        asked for a printer name (if none exists) and then up to
        10 printer functions. The function names can be up to 15 
        characters and each should start with a different letter.
        The control codes have to be in decimal format and separated
        by commas. As you add each new printer function a blank one
        will be added to the end of the list. If you create a <Set Page>
        function its codes will be sent automatically when printing
        worksheets. This allows you to set up your printer for any
        special functions like NLQ, etc. The custom driver will have to
        be installed like the other printer drivers before use. Select
        [Utilitys:Install printer:Custom]. Once created this driver is
        stored in the file MTHSHOP2.PRC and will remain until changed
        or deleted.



        Example printer codes:

        The LaserJet <Set Page> function has the typical codes

        27,38,108,69,27,38,97,82,27,38,108,54,68,27,38,108,54,54,70
        ------------ ----------- --------------- ------------------
            1            2             3                 4        


        1. set top margin to zero
        2. set vertical position to zero
        3. set 6 lines per inch
        4. set 66 lines on the page





















                                      10



     PRINTING TO A FILE:


       Just before printing you will have the option to print to a file.
       This operates like printing to a printer except the worksheets
       are placed in a file on a disk instead of on paper. If you looked
       at the file with a text editor the worksheets would appear the same
       as paper copies. The question is why would you want to do this?

       Once the worksheets are saved in the file they can be printed
       without using MATH-SHOP and you can print as many copies of the
       same worksheet as you want. Using a text editor you can alter
       anything on the worksheet including the problems. However the
       answers would have to be changed to agree with the new problems.

       Lets run through a example to demonstrate the procedure. Suppose
       you've created (or recalled) a worksheet to be printed. At print
       time you will see a menu that says <F> - to file. Press the letter
       F to select this option. You will be asked for a file name where
       you want the worksheets stored. You can enter a path here also
       otherwise the worksheet file will be stored on the same drive and
       in the same directory as the program. Lets store the worksheet on
       drive A: and in file named ADDITION.1ST. To do this change the name
       in the text line to A:ADDITION.1ST and hit enter. If the file exists
       you will asked whether to overwrite it or not. If you overwrite the
       file everything in it will be lost. If the file does not exist or
       you select Yes to overwrite the file the program will write the
       worksheets to ADDITION.1ST on drive A:. You will then be prompted
       to print the answers to the file.  Once this step is complete you
       will have a floppy disk with a file named ADDITION.1ST on it. This
       disk can then be taken to any dos computer and the worksheets printed
       by typing the following at the Dos prompt.                      

                COPY A:ADDITION.1ST PRN    Disk in A drive
                COPY B:ADDITION.1ST PRN    Disk in B drive

       One important item in printing to a file is printer codes. As dis-
       cussed in PRINTER REQUIREMENTS, LaserJets and PaintJets require
       codes to be sent at print time to correct the margins. How do
       these codes get sent when printing from a file. When the work-
       sheets are printed to a file the same correcting codes (Set Page
       function) which are normally sent to the printer are placed in
       the file in the top left corner. When the worksheets are printed
       using the COPY command these codes are sent to the printer.
       Therefore you should install the printer that you will be printing
       on before printing to the file. This will probably not matter if
       you use a dot matrix printer. If you do have the wrong printer 
       installed and then print, the only effect is that you may get
       funny characters in the top left corner of the 1st worksheet.






                                      11



     RANGE SELECTION:

       One big difference from previous versions is that the number
       of digits can vary on the same worksheet. Previous versions 
       could have either one or two digit numbers but not both     
       together. Now when you select the number of digits you are  
       selecting the digits for the range maximum. Review the      
       following examples: (assume odd and even numbers selected)  


      One Digit: (d)           Possible numbers                    

        1 - 9    default    :    1 thru 9                          
        1 - 5               :    1 thru 5                          
        8 - 8               :    only 8                            


      Two digit: (dd)                                              

       01 - 99   default    :    1 thru 99                         
       10 - 99              :    10 thru 99                        
       01 - 09              :    1 thru 9 (same as 1 digit default)
       01 - 25              :    1 thru 25                         
       25 - 25              :    only 25                           




     PROBLEM SELECTION:

       For all problems the program calculates the number of unique
       problems that are possible with the ranges selected and the
       type of problem. The program should not allow any duplicate
       problems on a page unless it is forced to by requesting more
       on a page than there are unique available. The program will
       fill the page with problems based on how many unique there are
       as follows:

       requested < unique : each page has random selection from unique
       requested = unique : each page has all unique in random order
       requested > unique : each page has all unique + random duplicates


       If there are less than 100 unique problems available the program
       determines all 100 unique and then randomly selects from these
       problems to fill the page. If there are more than 100 unique the
       program picks the numbers for each digit in the problem randomly
       in the selected ranges. The problems are then checked for dup-
       licates and any repeats are reselected.






                                      12



     NUMBER SELECTION:

       The main thing that determines what numbers are selected is
       the range settings. You can also select <even numbers only>
       which will limit the numbers to the even ones in the ranges
       selected. The ranges are modified if the range minimum and
       maximum are odd numbers. Stored formats will have these trimmed
       ranges. For example:

            Selected range 23 - 71
            Stored range   24 - 70    (if select even only)

      Subtraction problems are not used which have negative answers.
      If you select ranges which would only give negative answers the
      program will give a message and request new ranges. For all
      subtraction problems the ranges are modified if possible to
      eliminate any numbers which cannot have positive answers. Stored
      formats will have these modified ranges.

----------------------------------------------------------------------







                                      13

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```


                           REGISTRATION / ORDER FORM

                            MATH-SHOP 1 (whole #'s)
                            MATH-SHOP 2 (fractions)
                            MATH-SHOP 3 (decimals)

                                  Jack C Webb
                                  P.O. Box 357
                         Grand Blanc, Michigan 48439-0357


       Item                       Quantity  Version   Price     Extension
       ------------------------------------------------------------------

       INDIVIDUAL REGISTER/ORDER
         MATH-SHOP 1                  ___     ___     $10.00   $_________
         MATH-SHOP 2                  ___     ___     $10.00   $_________
         MATH-SHOP 3                  ___     ___     $10.00   $_________
         Any two                      ___             $15.00   $_________
         All three                    ___             $20.00   $_________

       SCHOOL / INSTITUTION
         REGISTER/ORDER PER SITE
          MATH-SHOP 1                 ___     ___     $25.00   $_________
          MATH-SHOP 2                 ___     ___     $25.00   $_________
          MATH-SHOP 3                 ___     ___     $25.00   $_________
          Any two                     ___             $35.00   $_________
          All three                   ___             $50.00   $_________


        If ordering please indicate
        disk size and include $1.50                 P & H      $_________
        for postage & handling
        (for each set of 1 to 3 disks)              Total      $_________


        Disk size:  ___ 5.25  ___ 3.5

        Please indicate above the versions you currently have.


          Please make checks payable to:  Jack C Webb


          Registrant Name________________________________________________

          Address________________________________________________________

          Address________________________________________________________

          City_______________________________State___________Zip_________

          Phone (______)_____________________________


        From what catalog was program obtained ___________________________

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4054

     Volume in drive A has no label
     Directory of A:\

    INSTALLH BAT      2225   4-18-93   7:12p
    NEW-USER BAT       585   4-19-93   6:36a
    PRINTDOC BAT       484   4-19-93   6:29a
    REGISTER BAT       475   8-28-92   9:36p
    MTHSHOP2 DAT       497   5-12-93   5:38p
    MTHSHOP2 DOC     30860   4-19-93   6:29a
    REGISTER DOC      2219   9-17-92   6:00a
    MTHSHOP2 EXE    225438   5-22-93   7:18p
    MTHSHOP2 HDR       350   4-29-93   7:58p
    MTHSHOP2 HLP     17436   5-22-93   7:10p
    MTHSHOP2 PDB      1439   4-04-93  10:37a
    MTHSHOP2 PRC       210   4-18-93  12:03p
    MTHSHOP2 PRN         6   5-21-93   5:24p
    GO       BAT        11   9-10-93  10:08a
           14 file(s)     282235 bytes
                           29696 bytes free
