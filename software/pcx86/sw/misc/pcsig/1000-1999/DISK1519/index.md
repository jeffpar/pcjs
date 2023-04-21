---
layout: page
title: "PC-SIG Diskette Library (Disk #1519)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1519/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1519"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LETRHEAD"

    You have a small startup business with more time and ambition than
    bucks -- but you need classy-looking letterhead stationery and
    impressive envelopes and can't afford a graphics designer or expensive
    printing.  LETRHEAD gives you a way to look real good, real cheap!
    
    Create your own custom letterhead stationery and envelopes using a
    standard dot matrix printer.  Design your own distinctive company logo
    using the built-in font editor.
    
    A mail merge feature makes it easy to print custom envelopes complete
    with mailing addresses drawn from your ASCII files.  Or crank out fancy
    labels to dress up your shipments.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1519.TXT

{% raw %}
```
Disk No: 1519
Program Title:  LETRHEAD version 3.0C
PC-SIG version 1

You have a small startup business with more time and ambition than
bucks---but you need classy-looking letterhead stationery and impressive
envelopes and can't afford a graphics designer or expensive printing.
LETRHEAD gives you a way to look real good, real cheap!

Create your own custom letterhead stationary and envelopes using a
standard dot matrix printer.  Design your own distinctive company logo
using the built-in font editor.

A mail merge feature makes it easy to print custom envelopes complete
with mailing addresses drawn from your WordStar or Sidekick files.  Or
crank out fancy labels to dress up your shipments.

Synopsis:  Design your own company logo, and print great looking
letterheads and envelopes on your dot matrix printer!

Usage:  Printer utility/Letterhead Logo Design/Business Graphics

Special Requirements:  Compatible Epson FX or IBM dot matrix printer.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00

Author:  Skip Williams, Technical Service Associates

LETRHEAD DOC  User guide.
LETRHEAD ENV  Sample envelope return address.
LETRHEAD DEF  Program default save file.
LETRHEAD PTN  Sample logo.
LETRHEAD EXE  Main program.
LETREDIT EXE  Editor module.
LETRHEAD ADR  Sample address.
LETRHEAD LBL  Sample label.
LETRHEAD MRG  Sample names, addresses for envelope mergine.
LETRHEAD TXT  Sample letters to print.
REGISTER FRM  Registration form.

The PC-SIG Library
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## LETRHEAD.DOC

{% raw %}
```






















                          Technical Service Associates

                        Letterhead Generator Version 3.0 

                                    LETRHEAD


            (C) Copyright 1986, 1987, 1988 by George C. Williams, Jr.
                               All Rights Reserved


















        _______________________________________________________________

                          Technical Service Associates
                        George C. Williams, Jr. ("Skip")
                               277 Sandhurst Road
                              Columbia, S.C.  29210
        _______________________________________________________________




                                   1



                      Technical Service Associates
                   Letterhead Generator Version 3.0 


                               LETRHEAD

                           Table of Contents

        Section I 
           Introduction ............................................4
           Getting Started Quickly..................................4
           Registration ............................................5
                Source Code ........................................5
           Copying and the ShareWare Concept .......................5

        Section II 
           Hardware and Software Requirements ......................7
           The Logo Editor .........................................7
               Invoking the Editor .................................7
               Editor Commands .....................................7
           Menu Structure ..........................................9

        Section III 
           Program Functions .......................................10
               Main Menu ...........................................10
               Display/Edit the logo ...............................10
               Print the Letterhead ................................10
               Print Envelope/Index Cards ..........................10
               Print Labels ........................................10
               Change default settings .............................10
               Quit ................................................10

        Section IV 
           Program Variables .......................................11
               Data File Options ...................................11
               Printer and Print Style Options .....................11
               Letterhead Options ..................................11
               Envelope/Index Card Options .........................11
               Label Options .......................................11

        Section V 
           Data File Variables .....................................12 
               Default Disk Drive ..................................12
               Default Directory ...................................12
               .PTN File ...........................................12
               .ADR File ...........................................12
               .ENV File ...........................................13
               .LBL File ...........................................13
               .MRG File ...........................................13
               File of text to print on Letterhead .................13

        Section VI 
           Printer Variables .......................................15
               Printer Type ........................................15
               Resetting the Printer ...............................15


                                   2



               Letterhead Address Print Style ......................16
               Envelope Return Address Print Style .................16
               Envelope Mailing Address Print Style ................16
               Text Print Style ....................................16
               Label Information Print Style .......................16

        Section VII 
           Letterhead Variables ....................................17
               Number of Pages of Letterhead to Print ..............17
               Print Text File After Logo ..........................17
               Number of Text Lines to Skip ........................17
               Number of Spaces to Offset Text at Left Margin ......17   

        Section VIII 
           Envelope Variables ......................................18 
               Starting Column Number of Mailing Address ...........18
               Number of Blank Lines Between Logo and Mailing Adr ..18
               Size of Envelope/Card in Inches .....................18  
               Number of Envelopes/Cards to Print ..................18
               Number of Mailing Address Lines .....................19
               Source of Mailing Address Lines .....................19
               Pause Between Each Envelope? ........................19
               Number of Line Feeds to Insert Envelope .............19
               Number of Linefeeds to Eject Envelope ...............20

        Section IX 
           Label Variables .........................................21
               Number of Labels to Print ...........................21
               Size of the Label in Inches .........................21
               Print Contents of .ENV File Under Logo? .............21
               Number of Dummy Labels to Print for Line-up .........21

        Section X
           Run Time Options ........................................23
               Introduction ........................................23
               Reset to Standard Defaults ..........................23
               Print Letterhead and Text in One Pass ...............23
               Print Envelope and Find Mailing Address .............24

        Conclusion .................................................25
           Registration Form .......................................26
















                                   3
        Technical Service Associates                     LETRHEAD 3.0 




                                    Section I

                                  Introduction

        This  Shareware program provides the ability to design and  print 
        custom  letterhead,  envelopes,  index cards  and  labels.    The 
        system provides for an very simple way to design a logo, etc.  to 
        be printed on the top left side of the paper together with  other 
        name  and address information printed on the top middle or  right 
        side.

        The  logo design is simply done using the built-in editor  (or  a 
        word processor or notepad facility such as Sidekick(tm)). 

        An  x  (or non-blank character) represents a graphic dot  on  the 
        printer.   A blank represents a space the size of a graphic  dot.  
        You  design  the  logo  using blanks and  X's  with  the  editor, 
        creating the logo line by line.  This file is then used as  input 
        to  the  program  and  the logo  is  printed,  with  the  program 
        converting  the x's and blanks to the respective graphic dots  on 
        the  printer.   At  your  option, a name  and  address  or  other 
        information will also be printed. 

        Using this technique, the program will optionally print the  logo 
        on envelopes, index cards, or labels with additional text printed 
        where desired.

                             Getting Started Quickly

           1. Load the program LETRHEAD.EXE.

                  Put the diskette in drive A.
                  Type LETRHEAD

                  NOTE:  If  the  program  issues  a  message  that   the 
                  LETRHEAD.PTN  file  cannot  be  found,  then  exit  the 
                  program and type the following:

                  LETRHEAD R

                  This will reset the program to use all of the  standard 
                  defaults,  as well as the current drive and  directory.  
                  A  message will be issued, asking if it is ok to  write 
                  the defaults to disk.  Reply with a y or n.  A 'y' will 
                  cause  the  default file to be saved.  A 'n'  will  not 
                  save the file, and the defaults will be in effect  only 
                  for this execution of the program.

           2. Try  the  various options using the sample  logo  and  data 
              provided on the included files.

           3. Do your own designs.



                                   4
        Technical Service Associates                     LETRHEAD 3.0 


           4. If you like it...

                                  Registration


        Register by mailing $10.00.  For your registration fee, you  will 
        receive  written  notice of each new major  release  of  LETRHEAD 
        along  with a list of all of the new and improved features.   You 
        will  also help compensate the author for the many hours of  time 
        invested  in  the  program  and  encourage  the  development   of 
        additional ShareWare software products.

        For  your  convenience,  a form is provided at the  end  of  this 
        document for registration should you wish to use it.  

        If  you would like the latest version on diskette,  send  $15.00.  
        This includes the registration fee.

        If  you would like the source code to tinker with,  send  $25.00.  
        This  includes  the registration fee. A diskette  containing  the 
        latest  version     including the LETRHEAD source  code  will  be 
        returned  to  you.   The LETRHEAD program  is  written  in  Turbo 
        Pascal(tm) version 4.0.  

        The  source  code for the LETREDIT module (the  editor  function) 
        cannot be included as it contains modifications of routines  from 
        the  Borland  Editor Toolbox package.   Under  Borland's  license 
        agreement, the object code can be distributed but not the  source 
        code.  LETREDIT is a separate program and LETRHEAD may be changed 
        and  recompiled  as needed.  LETREDIT and LETRHEAD  have  similar 
        routines for the display and printing of the logo.

        The source code is for your private, non-commercial use only. 

        With either registration, you will be provided with notice of the 
        next  major release of the system.  If there is  enough  interest 
        and support, additional functions may be added.

        Your comments on the LETRHEAD program are welcome, along with any 
        suggestions that you might have or additional functions that  you 
        might  need.  This release has incorporated many of the  comments 
        and suggestions from registered users.  


                        Copying and the ShareWare Concept

        This   program  is  distributed  under  the  ShareWare   software 
        distribution   concept.    That   is,   this   program   may   be 
        uploaded/downloaded  via BBS's, copied and distributed with  only 
        several  restrictions  as stated below.  

        You  are encouraged to register your copy of LETRHEAD if you  use 
        it  and  find  it of value.  This  honor  system  encourages  the 
        continued  development  of  low cost  and  diverse  PC  software.  



                                   5
        Technical Service Associates                     LETRHEAD 3.0 


        Please  register  this  copy and all copies  of  other  ShareWare 
        products that you may be using.  It is a small way of paying back 
        the  authors for the enormous amount of time that is invested  in 
        creating software.  Thanks!

        This  program and the associated files may be freely  copied  and 
        distributed.   The  only restrictions are that  the  program  and 
        files  not be modified in any way and that all files  EXCEPT  the 
        Source (LETRHEAD.PAS) be included in the copy.  The source code 
        (LETRHEAD.PAS) is for your private use only.  Please do not 
        distribute this file.

        PC  User  Groups  or Clubs may add  LETRHEAD  to  their  software 
        libraries with the following restrictions:

             - That the program and files are not modified in any way

             - All files, including this .DOC file are included

             - A diskette copying fee of $10.00 or less is charged.

        If  this program and associated files are received through  a  PC 
        Group  or Club, please understand that any diskette or  club  fee 
        paid does not constitute registering your copy of LETRHEAD.

        The following files are distributed with the LETRHEAD system:

                  LETRHEAD.EXE  -  The LETRHEAD program
                  LETREDIT.EXE  -  The Logo Editor Module
                  LETRHEAD.DEF  -  Program default save file
                  LETRHEAD.DOC  -  Program documentation (this file)
                  LETRHEAD.PTN  -  Sample Logo
                  LETRHEAD.ADR  -  Sample address for letterhead 
                  LETRHEAD.ENV  -  Sample envelope return address
                  LETRHEAD.LBL  -  Sample stuff to print on labels
                  LETRHEAD.TXT  -  Sample letters to print
                  LETRHEAD.MRG  -  Sample names and address for  envelope
                                   merging.
                  REGISTER.FRM  -  Registration Form for LETRHEAD


















                                   6
        Technical Service Associates                     LETRHEAD 3.0 


                                   Section II

                       Hardware and Software Requirements

        Required  hardware includes an Epson FX or IBM printer  or  close 
        compatible.   If your printer will emulate the Epson/IBM  graphic 
        command set, it will probably work successfully.  The program has 
        been  used  on  a variety of printers,  including  several  laser 
        printers with Epson emulation.

        A  graphics display is useful as the program provides a  facility 
        to  display  the  logo on the screen much as it  will  look  when 
        printed.   This is especially helpful during the design  process.  
        LETRHEAD supports CGA, Hercules compatible, VGA, and EGA graphic 
        monitors.

        If  you do not have a graphics monitor, the program may still  be 
        used  but it will be necessary "test" print the logo each time  a 
        change or modification is made.


                                 The Logo Editor

        This  version of the LETRHEAD program contains a built-in  editor 
        to be used in creating and modifying your logo.  The editor is  a 
        standard  ASCII editor and also may be used to create  or  modify 
        the  various  other files associated with the  LETRHEAD  program, 
        such  as  the address file (.ADR), the  envelope  return  address 
        (.ENV), etc.

        The  editor  commands are similar to those used  for  many  other 
        editors  such  as  WordStar(tm),  Borland's  SideKick(tm),  Turbo 
        Pascal(tm),  etc.   If you are not familiar  with  the  commands, 
        there is a online help function - the F1 key, that will display a 
        list of commands while in edit mode.

        The  editor  may  be started from the LETRHEAD  main  menu  using 
        option  1  -  Display/Edit the Logo.  This  option  will  present 
        another menu from which to select - 1. Display or 2. Edit of  the 
        logo.  If Edit is desired, type 2 and press the return key. 

        The Editor module will be started (LETREDIT.EXE) and will present 
        your logo file to be edited.  The filename displayed is the  .PTN 
        file as named in the default file (To change this displayed file 
        name  or directory, see Section III, option 5. below.).  To  edit 
        the displayed file, simply press the Return key.  To edit another 
        file,  type the path (if any) and the filename to be  edited  and 
        press enter.  

                                 Editor Commands 

                                  Function Keys

        At  the  bottom  of the Editor screen is  a  description  of  the 
        available function keys.  Each of these keys are available during 


                                   7
        Technical Service Associates                     LETRHEAD 3.0 


        the edit process.  The function keys are defined as follows:

        F1  - HELP - Pressing this key will open a window that  list  the 
        available  commands  and  key combinations to be  used  with  the 
        editor.  Note that the ^ symbol denotes the Ctrl key and is  held 
        while the other keys of the command are pressed.

        F2 - Display Logo - This function key will cause the logo in  the 
        editor  to  be displayed on the screen much the same as  it  will 
        appear when printed.  To return to the editor, press Enter.

        F3  - Print Logo - The logo in the editor will be printed.   This 
        function  is  primarily used to see how the logo will  look  when 
        printed,  and  is not necessarily a substitute for  the  printing 
        functions in the LETRHEAD program.  

        F9  -  Abandon - Press this key to leave the  edit  function  and 
        return  to the LETRHEAD menu.  If the logo has been  modified  in 
        any  way,  a  message will appear at the  bottom  of  the  screen 
        asking if the modified text should be saved to disk or not.   

                      File Modified. Save It? (y or n).

        Responding n will cause any modifications to be lost.  Responding 
        y will cause the file to be saved to disk.

        F10 - Save File - Pressing this function key will cause the  file 
        to  be rewritten to disk and the return to the LETRHEAD  program.  
        Unless  you  use this F10 key or reply y when using the  F9  key, 
        your  changes will be lost and the LETRHEAD program will use  the 
        logo as contained in the .PTN file on disk. 

                                    Commands

        The  command  set  is  similar  to  that  used  in  WordStar(tm), 
        Borland's editors, and several others. 
         
                   Command                    PC Keys

                 Beginning of Line             Home
                 End of Line                   End
                 Top of Page                   ^Home
                 Bottom of Page                ^End
                 Top of File                   ^PgUp
                 Bottom of File                ^PgDn
                 Insert Mode On/Off            Ins
                 Insert a New Line             ^N or Return (with Ins on)
                 Delete a Line                 ^Y
                 Delete to End of Line         ^QY
                 Delete Character              Del
                 Mark Start of Block           ^KB
                 Mark End of Block             ^KK    
                 Copy Block                    ^KC
                 Move Block                    ^KV
                 Delete Block                  ^KY


                                   8
        Technical Service Associates                     LETRHEAD 3.0 



        Note that the ^ is the Ctrl key and should be held down while the 
        other keys are pressed.  

        Also,  the  Ins (insert) key is a toggle.  That is,  pressing  it 
        will  turn  insert mode off. Pressing it again will  turn  insert 
        mode on. If insert mode is on, the word INSERT will appear on the 
        editor status line near the top of the screen.


                                 Menu Structure

                                    Main Menu

        1. Display/Edit the Logo
           |
           |--  1. Display the Logo
           |
           |--  2. Edit the Logo
           |
           |--  0. Return to the Main Menu

        2. Print Letterhead

        3. Print Envelopes

        4. Print Labels

        5. Change Program Default Settings
           |
           |--  1. Data File Options
           |
           |--  2. Printer and Print Style Options
           |
           |--  3. Letterhead Options
           |
           |--  4. Envelope/Index Card Options
           |
           |--  5. Label Options
           |
           |--  0. Return to the Main Menu

        0. Quit














                                   9
        Technical Service Associates                     LETRHEAD 3.0 


                                   Section III

                                Program Functions

                                    Main Menu

           1.  Display/Edit the logo.  

        Selecting  this  option will provide yet another menu  to  select 
        whether the logo is to be 1. Displayed or 2. Edited.  Pressing  1 
        and the Return key will display the logo on the screen.

        This  gives  an  indication  of how the  logo  will  appear  when 
        printed.  The  contents of the logo file (.PTN) is  converted  to 
        graphics  and  displayed.  Press the ENTER key to return  to  the 
        menu.

        Pressing 2 and the return key will enter the logo editor.  Please 
        read  Section II for a description of the Editor and  the  editor 
        functions and commands. 

           2.  Print the letterhead. 

        This option will print the logo on the top left of the paper.  If 
        an address is provided in the appropriate file (.ADR), it will be 
        printed on the top middle or the right of the paper.

           3.  Print Envelope/Index Cards.

        This  prints  envelopes or index cards with the logo on  the  top 
        left and the return address below it, if desired.   Additionally, 
        the mailing address may be requested from the keyboard, retrieved 
        from  a  file  (.MRG), or extracted from a  text  file  and  then 
        printed on the envelope(s).

           4.  Print Labels.

        This  option  allows the logo to be printed  on  continuous  form 
        labels.   Optionally,  data from a file (.LBL)  will  be  printed 
        beside the logo and the contents of the address file (.ADR)  will 
        be printed below the logo.  This option may be used for  printing 
        return mailing labels, diskette labels, etc.

           5.  Change program default settings. 

        This  option allows the standard program defaults to be  changed.  
        Standard  filenames, number of letterhead copies to  be  printed, 
        print styles, etc. may be modified.  Optionally, the defaults may 
        be  saved  to disk (filename LETRHEAD.DEF) for later  use.   Each 
        Option  is  explained  in  detail in  Section  IV  and  following 
        sections below.

           0. Quit

        Exits the program and returns to DOS.


                                   10
        Technical Service Associates                     LETRHEAD 3.0 


                                   Section IV

                                Program Variables

           1. Data File Options

        Selecting  this option allows change of the data set  names,  the 
        default  drive and the default directory.  The options  and  file 
        usage are discussed below.

           2. Printer and Print Style Options

        This option allows the changing of the print styles available for 
        each of the forms.  Additionally, a limited printer selection  is 
        provided.   

           3. Letterhead Options

        This provides the ability to change the various options  involved 
        in the printing of letterhead.  The options are outlined below.

           4. Envelope/Index Card Options

        This  allows modification of the various parameters for  printing 
        envelopes or index cards.  These options are listed below.

           5. Label Options

        Again, this allows modification of the options used for  printing 
        continuous labels.


           0. Return to Main Menu

        Selecting  this  option will return you to the  main  menu  after 
        asking  if  the changes that you made to the  options  should  be 
        saved  to disk.  If you elect not to save the options,  then  the 
        options that you selected are in effect for this execution of the 
        program only.     


















                                   11
        Technical Service Associates                     LETRHEAD 3.0 


                                    Section V

                               Data File Variables

           1. Default Disk Drive

        This is the disk drive specification that will be placed on  each 
        file  name.  If the default file (LETRHEAD.DEF) is not found,  or 
        is reset, this value is set to the current default drive.

           2. Default Directory

        This  is the path specification that will be placed on each  file 
        name.   If  the default file (LETRHEAD.DEF) is not found,  or  is 
        reset, this value is set to the current directory.

        If  it is necessary to override the drive and path  specification 
        on an individual file, then type the full drive and path name  in 
        addition to the file name.  The program will then use that  disk, 
        path,  and file name, ignoring the default drive  and  directory.  
        For all files, except option 8, do not specify an extension.  The 
        proper extension will be added by the program. 

           3. ...PTN - Contains Letterhead logo pattern

        This  file  is  required and contains the logo as  built  by  the 
        editor.  The default name is LETRHEAD.PTN  but this option allows 
        changing the name to anything.PTN.  The graphic representation of 
        the  logo  in  this file is printed  on   letterhead,  envelopes, 
        labels, and/or index cards as desired.

           4. ...ADR - Contains the Letterhead Address

        This file is printed as the address on the top of the letterhead.  
        It  is optional, and if not present, a message will be  displayed 
        and only the logo will be printed on the letterhead.  The address 
        may  be  positioned at the top of the form by  adding  blanks  as 
        desired.  This will position the address horizontally across  the 
        top  beside  the logo.  Take a look at the  LETRHEAD.ADR  for  an 
        example.   This  is  the default name,  but,  by  selecting  this 
        option, may be changed to anything.ADR as desired.  

        Ten  lines  of address are allowed, but you will  achieve  better 
        results  if you leave every other line blank, using only 5  lines 
        of  address.  Due to the spacing required to print the logo,  the 
        address  gets squashed together if blank lines are not placed  in 
        between.

        If the entire address is not printed on the letterhead, add  some 
        blank  lines  after your logo in the .PTN file.   The  number  of 
        lines  in  the logo controls the number of lines printed  on  the 
        letterhead.   A  short  logo will sometimes  cause  some  of  the 
        address lines not to be printed.




                                   12
        Technical Service Associates                     LETRHEAD 3.0 


           5. ...ENV - Contains the envelope return address

        This  file  contains  the return address to  be  printed  on  the 
        envelope (or optionally on the label) underneath the logo.  It is 
        an optional file, and if not present, a message will be displayed 
        and  the  logo will be printed on the envelope without  a  return 
        address.  LETRHEAD.ENV is the default name, but may be changed to 
        anything.ENV as desired.

           6. ...LBL - Contains the data printed on label

        This file contains the data that will be printed next to the logo 
        on continuous labels.  This file is optional and the default name 
        is  LETRHEAD.LBL  but may be changed to anything.LBL  as  desired 
        using this option.

           7. ...MRG - File of envelope merge addresses

        This  file  is  used  to "mail  merge"  addresses  when  printing 
        envelopes.  The file is an ASCII file in the following format:

               First line of address one
               Second line of address one
               Third line of address one
               Forth line of address one
               Fifth line of address one
               First line of address two
               Second line of address two
               Third line of address two
               Forth line of address two
               Fifth line of address two
                       :
                       :
                      etc.

        The program will read the first five lines and print them on  the 
        first envelope.  The next five lines will be printed on the  next 
        envelope  and so on..  This file may be built using the  built-in 
        editor  or the ASCII file export of many database  programs.   If 
        other  than a five line address set is desired,  changing  option 
        number  5 on the Envelope Variables menu will specify a value  to 
        use  for  each  address  set.  Refer  to  this  option  for  more 
        information.   This file is optional and may be  anything.MRG  as 
        desired.  

           8. .... File of text to print on letterhead

        This  optional file may be printed after the logo and  letterhead 
        is  printed  and  may  be named  to  anything  as  desired.   The 
        extension  is also up to you.  The default name is  LETRHEAD.TXT.  
        This file would be ASCII output from your word processor.  

        For example, if you want to write a letter and have it printed on 
        letterhead,  write the letter on your word processor.  Instead of 
        printing the letter, have your word processor write the  document 


                                   13
        Technical Service Associates                     LETRHEAD 3.0 


        to a ASCII text file.  Specify the text file name in this  option 
        (see  also Option number 2 on the Letterhead Variables menu)  and 
        the  program will print the letterhead, followed by the  contents 
        of this text file.  If the text file consists of multiple  pages, 
        the letterhead logo will only be printed on the first page.

        Envelopes  may also be printed from this text file.  The  program 
        will  search the text file for a mailing address to print on  the 
        envelope.   See  option  number  6 in  Section  VIII  -  Envelope 
        Variables for more information.

        The  program also provides the ability to print multiple  letters 
        or envelopes from one ASCII text file.  This is done by inserting 
               
        !!LETRHEAD!! 

        in  the  text after the first letter and before  the  second  (or 
        succeeding) letters.  This code will trigger the program to print 
        the  logo  and  letterhead  again,  followed  by  the  text.   If 
        envelopes  are to be printed from this file, this  code  triggers 
        the  program to begin searching for the next address to print  on 
        the envelope as the mailing address.  The code !!LETRHEAD!!  must 
        start  in  column one and will be replaced by a blank  line  when 
        printed.   !!letrhead!! is also acceptable.  Also, a  page  break 
        should occur or be specified immediately before each !!LETRHEAD!! 
        code to insure proper page formatting.

           0. Return to the Previous Menu

        Returns you to the Program variable selection screen.



























                                   14
        Technical Service Associates                     LETRHEAD 3.0 


                                   Section VI    

                                Printer Variables

           1. Printer type (IBM/Epson or Epson FX-85/286)

        Selecting  this option will toggle between the two printer  types 
        that  are currently supported.  

        The  default  is IBM/Epson type of printers.  This  printer  type 
        will  allow  the selection of normal,  compressed,  or  miniature 
        print styles below.

        The Epson FX-85/286 option, if selected, will use several of  the 
        Epson  only  options.   In addition to the  above  print  styles, 
        Italics  and Near Letter Quality (NLQ) may be specified  for  the 
        letterhead address and the mailing address on the envelope.

           2. Program will Reset Printer.

        Various programs that might be used after LETRHEAD may not  reset 
        the printer.  Also, LETRHEAD may not reset all options  correctly 
        on the printer during its execution.  

        Please note that the reset is a hardware reset function.  If your 
        printer is printing from its internal buffer when LETRHEAD issues 
        a  reset,  the print in progress will be  lost.   Selecting  this 
        option will toggle the options between four different choices: 

                  Never - This is the default.  The LETRHEAD program will 
                  not  perform  a printer reset.  This option  should  be 
                  used  when executing the program in a batch  mode  when 
                  printing text, etc.  

                  Begin and End - resets the printer at the beginning and 
                  end of the LETRHEAD program execution.  Do not use this 
                  option when printing the logo and text in a batch mode, 
                  as  the reset will reset the printer at the end of  the 
                  program and your printer may still be printing the text 
                  file from its internal buffer.

                  Beginning - resets the printer only at the beginning of 
                  the  LETRHEAD program execution.  This option might  be 
                  selected if you want to leave the printer page size set 
                  after  printing  return  address  labels,  to  continue 
                  printing address labels from a database program, etc.

                  End  -  resets  the  printer only at  the  end  of  the 
                  LETRHEAD  program  execution.  Do not use  this  option 
                  when printing the logo and text in a batch mode, as the 
                  reset will reset the printer at the end of the  program 
                  and  your printer may still be printing the  text  file 
                  from its internal buffer.




                                   15
        Technical Service Associates                     LETRHEAD 3.0 


           3. Letterhead address print style

        Selection  of this option will toggle between the  various  print 
        styles available for printing the letterhead address.  The number 
        of choices available will depend on the type of printer  selected 
        in option 1 above.

           4. Envelope return address print style

        Selection  of this option will toggle between the  various  print 
        styles  available for printing the return address below the  logo 
        on the envelope.  The number of choices available will depend  on 
        the type of printer selected in option 1 above.

           5. Envelope Mailing address print style

        Selection  of this option will toggle between the  various  print 
        styles  available  for  printing  the  mailing  address  on   the 
        envelope.   The  number of choices available will depend  on  the 
        type of printer selected in option 1 above.

           6. Text print style

        Selection  of this option will toggle between the  various  print 
        styles  available  for  printing  the  ASCII  text  file  on  the 
        letterhead.   The number of choices available will depend on  the 
        type of printer selected in option 1 above.

           7. Label information print style

        Selection  of this option will toggle between the  various  print 
        styles available for printing data on the labels.  

           0. Return to Main Menu

        Returns to the Program variable menu.





















                                   16
        Technical Service Associates                     LETRHEAD 3.0 


                                   Section VII

                              Letterhead Variables

           1. Number of Pages of Letterhead to Print

        This  option provides for continuous printing of  the  letterhead 
        for  as many pages as are specified.  It is sometimes helpful  to 
        print  many  pages of the letterhead for later  use.   When  this 
        option is selected, a window will open and you will be  requested 
        to  specify the number of pages to be printed.  

        If  an ASCII text file is specified to be printed, changing  this 
        number  to  other than one will reprint the same  text  file  the 
        specified  number of times.  This is especially useful  for  form 
        letters,  etc.   Simply  create your form  letter  using  a  word 
        processor.   Write the output to a disk file.  Specify  the  disk 
        file name in option number 8 of the Data File variable menu,  set 
        number  of pages to print to the number of copies that you  want, 
        and set the next option (below) to "Yes".  When you select  Print 
        Letterhead  on the main menu, your letterhead and letter will  be 
        printed for as many times as you have specified in this option.

           2. Print Text File After Logo?

        This  is a toggle of whether a text file is to be  printed  after 
        the  letterhead.  The name of the file is specified in  option  8 
        under  Data  File  variables menu.  This  option  simply  toggles 
        between  "YES"  and "NO".  If "NO" then only letterhead  will  be 
        printed, if "YES" the program will attempt to print the specified 
        text file.

           3. Number of Text Lines to Skip for Logo Space

        Because your word processor probably did not allow space for  the 
        logo  when it formatted its page size, it is sometimes  necessary 
        to  ignore several beginning lines of the text file to allow  for 
        the space at the top of the page where the program will print the 
        logo.   This  helps  to get the pagination  back  in  sync  after 
        printing  the  logo.  The default is five lines  to  skip.   This 
        value  will depend largely on the size of your logo.   Trial  and 
        error is the best rule of thumb.

           4. Number of Spaces to Offset Text at Left Margin

        If  you want your left margin larger than what has been  provided 
        for  on the text file from your word processor, specify  a  value 
        here.  The program will insert this many spaces before printing a 
        line  of  text on the letterhead from the ASCII text  file.   The 
        default is 0 spaces of offset.

           0. Return to Main Menu

        Returns to the Program variable menu.



                                   17
        Technical Service Associates                     LETRHEAD 3.0 


                                  Section VIII

                               Envelope Variables

                --------------------------------------------------   ^
               | logo                                      ----   |  |
               | return adr                               | 22c|  |  |
               |    ^                                      ----   |  |
               |    |#2                                           |  |
               |    v                                             |  |
               |                 Mailing Address    ^             |  |#3 
               |<----#1--------> Mailing Address    | #5          |  |
               |                      :             |             |  |
               |                     etc            v             |  |
               |                                                  |  |
                --------------------------------------------------   v

           1. Starting Col Number of Mailing Address on Envelope

        This is the number of blanks to place between the left margin and 
        the  mailing address on the envelope.  Increasing  or  decreasing 
        this  number will move the mailing address left or right  on  the 
        envelope as desired.  The default is 30 spaces.

           2. Number of Blank Lines Between Logo and Mailing Address

        This  is the number of blank lines that will be inserted  between 
        the printing of the logo/return address and the mailing  address.  
        Increasing  or  decreasing  this number  will  move  the  mailing 
        address up or down on the envelope or index card.  The default is 
        2 blank lines.

           3. Size of Envelope/Card in Inches

        Use this option only if continuous forms are to be printed.  This 
        parameter  will specify the size of the form from the top of  one 
        form  to the top of the next form.  The size for the form  should 
        be  specified to the nearest eighth of an inch in  decimal.   For 
        example a 4 inch form should be specified as 4; a 4 1/2 inch form 
        should be specified as 4.5; a 3 1/8 inch form should be specified 
        as  3.125.   The  program will round your  specification  to  the 
        nearest eighth of an inch if necessary.

        If you are not using continuous forms, set this value to 0  which 
        is the default value.

           4. Number of Envelopes/Cards to Print

        This  option  tells the program how many envelopes  or  cards  to 
        print  if  the  mailing addresses are to  be  supplied  from  the 
        keyboard.   After each envelope is addressed from  the  keyboard, 
        the next envelope will be requested and aligned, with the mailing 
        address  again being requested.  This option is not used  if  you 
        are  reading a file containing the mailing addresses or  using  a 
        text  file  containing embedded addresses  within  letters.   The 


                                   18
        Technical Service Associates                     LETRHEAD 3.0 


        number of envelopes or cards is then controlled by the number  of 
        addresses on the file.

           5. Number of Mailing Address Lines

        This  option  specifies how many mailing address  lines  will  be 
        requested  from  the keyboard or will be considered  an  "address 
        set"  when reading a .MRG file.  The default is five, but may  be 
        specified to any value from 1 - 5.  

           6. Source of Mailing Address Lines

        This is a toggle between the keyboard, the .MRG file, and a text 
        file.   

        If  keyboard is specified, the mailing address will be  requested 
        from the operator.  

        If  .MRG is specified, then a file name as specified in option  7 
        in the Data File Variable menu will be used as the source of  the 
        mailing addresses.  Refer to that option for a description of the 

        If a search of a text file is specified, the program will read  a 
        text file as named in the Data File Variable option number 8.  It 
        will then search the first 35 lines of the text file looking  for 
        a  name and address.  When the first group of two or  more  lines 
        are found, it assumes these to be the address and will print this 
        group  of  lines  on the envelope as the  mailing  address.   The 
        program will ignore leading blanks on the address lines and  will 
        left justify each line of the mailing address that it finds. 

           7. Pause Between Each Envelope?

        This  yes  or  no  toggle is used  to  allow  manual  feeding  of 
        envelopes  into the printer.  If "YES" is specified, the  program 
        will pause after printing each envelope and request that  another 
        be  inserted.  If "NO" is specified, the program will  not  pause 
        between  envelopes  or  cards  and  assume  that  you  are  using 
        continuous forms.  Be sure and set the size of the form in option 
        number 3 above if "No" is specified in this option.

           8. Number of Line Feeds to Insert Envelope

        In order to quickly insert and align the envelope in the printer, 
        the  program will perform a number of line feeds before  printing 
        the  envelope logo, etc.  This number is set by trial  and  error 
        and  depends  on  your printer.  Simply  set up the  printer  for 
        friction  feed  (engaging  the paper release  lever),  place  the 
        envelope at the back of the platen like you were going to feed in 
        the envelope.  Maintain a slight pressure on the envelope to make 
        sure that the platen grabs it, press the enter key.  The  program 
        will  then issue this number of line feeds to feed and align  the 
        envelope.   The default number is 9 but may be specified as  0  - 
        99.  Specifying 0 will cause the envelope to have to be  inserted 
        and aligned manually.


                                   19
        Technical Service Associates                     LETRHEAD 3.0 



          9.  Number of Linefeeds to Eject Envelope

        The  program will issue this number of linefeeds  after  printing 
        the mailing address to eject the envelope from the printer.  This 
        number depends on your specific printer, and may be set by  trial 
        and error.  The default is 10 but may be specified to any  number 
        from 0 to 99.

           0. Return to Main Menu

        Returns to the Program variable menu.













































                                   20
        Technical Service Associates                     LETRHEAD 3.0 


                                   Section IX

                                 Label Variables


                ^     -      --------------------------
                |     |     |      Number of           |
                |    # 2    |   Line Up Labels         |
                |     |     |        # 4               |
                |     |      --------------------------  
                |     -      --------------------------
                |           | LOGO                     |
               # 1          |             .LBL file    |
                |           | .ENV file                |
                |            -------------------------- 
                |            --------------------------
                |           | LOGO                     |
                |           |             .LBL file    |
                |           | .ENV file                |
                v            -------------------------- 



           1. Number of Labels to Print

        This specifies how many labels are to be printed.  The default is 
        1 but may be changed to 1 - 1000.

          2. Size of the Label in Inches

        This option specifies the size of the label as measured from  the 
        top of one label to the top of the next.  For example, a standard 
        15/16"  label  has  1/16" of space  between  labels,  making  the 
        distance from top to top exactly 1 inch.  The size of the  labels 
        may be specified to the nearest eighth of an inch using decimals.  
        For  example, a one inch size would be specified as 1; a  3  1/4" 
        label  would  be specified as 3.25; and a 2 3/8" label  would  be 
        specified as 2.375.  The default is one inch for standard  labels 
        but may be specified at 1 - 11 inches.



          3. Print Contents of .ENV File Under Logo?

        This  is  a  "YES"  or "NO" toggle.  If  yes  is  specified,  the 
        contents of the .ENV file will be printed below the logo as it is 
        on the envelope.  If "NO" is toggled, the .ENV contents will  not 
        be printed.  Make sure before selecting "YES" that your logo  and 
        address  will  fit  the label.  If not,  either  make  your  logo 
        smaller or select "NO".

          4. Number of Dummy Labels to Print for Line-up

        This  option will allow line up labels to be printed  before  the 
        actual  labels  are printed.  You will be  given  an  opportunity 


                                   21
        Technical Service Associates                     LETRHEAD 3.0 


        after each dummy label to make adjustments to your line-up.  The 
        default is 1 dummy label, but may be changed to 0 - 9 as needed.

           0. Return to Main Menu

        Returns to the Program variable menu.



















































                                   22
        Technical Service Associates                     LETRHEAD 3.0 



                                    Section X    


                                Run Time Options


        The  Run Time Options of LETRHEAD allow execution of the  program 
        without   using  the  menu  selections.   This  provides  for   a 
        convenient way to use the program in a batch file or a single DOS 
        command when appropriate.  The available options are limited  and 
        are  a subset of the facilities and options that are  present  in 
        the menu execution.  

        The following is a list of the available run time options.


        R - Reset all of the defaults to the standard defaults.

        If  the  DOS command of LETRHEAD R is entered, the  program  will 
        ignore  any defaults that have been saved to disk and will  reset 
        all  to  the standard defaults as defined by the  program.   This 
        command  is  useful if you receive this program  from  a  unknown 
        source and want to set all options to the normal settings. 

        A  message  will be issued asking if it is OK to  write  the  new 
        default file to disk.  Respond with a 'y' if OK and the  standard 
        defaults  will  be written to disk.  Respond with a 'n'  and  the 
        standard  defaults  will  not be saved to disk, but  will  be  in 
        effect only for this execution of the program.  

        The reset command is not a normal or frequently used command.  It 
        is simply designed to reset all of the default settings.



        L - Print Letterhead.

        This command request that the program print letterhead, according 
        to  the  defaults currently in effect and saved on disk  for  the 
        program.  This command may be executed in a batch file.

        The second parameter of this command is optionally a text file to 
        be printed after the letterhead.  The format of the command is:

                  LETRHEAD L d:\path\filename:ext

        This  is  useful  if  a  document  has  been  prepared  using   a 
        word  processor and, instead of printed, is written as  an  ASCII 
        file  to disk.  The command LETRHEAD L filename will  then  cause 
        the  program to print the letterhead followed by the  text  file.  
        If the text file is more than one page long, the letterhead  will 
        only  be  printed  on the first page.  Most of  the  options  for 
        printing  letterhead will be in effect, so insure that  they  are 
        set  correctly.  Using this command will override the  text  file 


                                   23
        Technical Service Associates                     LETRHEAD 3.0 


        name as saved with the defaults.

        If the second parameter is omitted (the filename), then only  the 
        letterhead will be printed.

        E - Print an Envelope.

        This command request that the program print an envelope according 
        to  the  defaults that have been saved for  the  program.    This 
        command may be executed in a batch file, but the printing of  the 
        envelope  requires manual intervention to insert and  remove  the 
        envelope, etc. 

        The  second  part of the command is a filename that is  an  ASCII 
        text file as described in the L command above.  This file is  the 
        letter as prepared by a word processor and written to disk as  an 
        ASCII file.  If a file name is present, the program will  attempt 
        to  find the address in the first 35 lines of the text  file  and 
        print the result on the envelope as the mailing address.

                  LETRHEAD E d:\path\filename.ext

        This  command  may be used with the above l command  to  print  a 
        letter  followed  by an automatically addressed  envelope.   Note 
        that  the  filename  is  required  for  both  the  L  and  the  E 
        parameters, and usually points to the same ASCII file.

                  LETRHEAD L d:\path\filename.ext E d:\path\filename.ext
                  
        This  command may be inserted in a batch file or entered  at  the 
        DOS prompt.


























                                   24
        Technical Service Associates                     LETRHEAD 3.0 


                                   Conclusion

        Thanks for using LETRHEAD.  I hope that you have found it  useful 
        and  invite  you  to  register in order that  I  might  keep  you 
        informed as to future releases of this program as well as others.

        Much  effort  has been spent testing this  program  with  various 
        printers and PC configurations.  However, as is usually the case, 
        bugs creep in, never (well, hardly ever!) to be discovered during 
        testing.   If  you  are having a problem with  this  program,  or 
        suspect  a  malfunction  (bug!), please write and  let  me  know.  
        Include  a  description of your configuration, including  PC  and 
        Printer,  as well as the version of LETRHEAD that you are  using. 
        Sample printouts (and even a diskette containing your logo files) 
        concerning   the  problem  are  very  helpful  along  with   your 
        description of the problem.  

        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


           SideKick and Turbo Pascal are trademarks of Borland
           International.

           Epson is a trademark of Epson Corporation.

           IBM is a trademark of International Business Machines 
           Corporation
         
           WordStar is a trademark of MicroPro Int Corp.
         
                         --------------------------------


























                                   25
        Technical Service Associates                     LETRHEAD 3.0 


        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        LETRHEAD Registration Form                     Version 3.0C  8/88

        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        Please register ______ copy(s) of "LETRHEAD" Letterhead Generator. 

        I have enclosed a check for:

                 ___  $10.00  for registration of each copy.  I  will  be 
                      notified of each major release of LETRHEAD.

                                       or

                 ___  $15.00  for registration and a diskette  containing 
                      the latest version of LETRHEAD, documentation,  and 
                      supporting files.

                                       or

                 ___  $25.00 for registration and a diskette   containing 
                      the latest  version of the program and the LETRHEAD 
                      Turbo  Pascal(tm) source code.  I  understand  that 
                      the source code is for my private use only and will 
                      not be distributed with the system, should I upload 
                      or make copies. 

        Name:     _____________________________________________________
                                 (please print)

        Address:  _____________________________________________________

                  _____________________________________________________

                  _____________________________________________________

        Computer: _____________________  Printer: _____________________

        Version of LETRHEAD: 3.0C  or ____________

        Comments: ______________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________


        Mail to:  Technical Service Associates
                  277 Sandhurst Road
                  Columbia, S.C.  29210                             (148)
                 
        Thanks for your support.  It is appreciated!  I would also  enjoy 
        seeing the logo that you design.


                                   26
        Technical Service Associates                     LETRHEAD 3.0 



        This  program  is  supported  by  the  "Shareware"  concept.    A 
        registration  fee of $10.00 is requested if you use this  program 
        and find it of value.  This User Supported Concept encourages the 
        development  of quality, low cost, and varied PC software.   Your 
        comments are welcome... Thanks for your support!


           

                                    WARRANTY



        Technical Service Associates warrants that the diskette  received 
        from  Technical Service Associates is not defective and that  the 
        programs  contained  on  said  diskette  perform  essentially  as 
        indicated  and that the manual on said diskette is  substantially 
        complete.

        Technical  Service  Associates  excludes  any  and  all   implied 
        warranties of completeness and fitness for any particular purpose 
        or use, on any particular hardware or software configuration. 

        In  no event will Technical Service Associates be liable for  any 
        damages,  incidental or consequential resulting from the  use  of 
        the program or programs.  Technical Service Associates limits any 
        remedy to the replacement of the diskette received from Technical 
        Service Associates or the refund of the registration fee paid  to 
        Technical Service Associates.




              Copyright 1986, 1987, 1988 by George C. Williams, Jr.    
                              All Rights Reserved.

                          Technical Service Associates
                               277 Sandhurst Road
                             Columbia, S. C.   29210



        The  latest version of LETRHEAD and other shareware may be  found 
        on The Clearing House Bulletin Board, run for the support of User 
        Groups or Clubs.  The board operates at 1200/2400 8 N 1 at  (803) 
        738-2966.  The Clearing House, P.O. Box 339, Elgin, S.C. 29045.










                                   27

```
{% endraw %}

## LETRHEAD.TXT

{% raw %}
```
.PL









        June 14, 1987


        Technical Services Associates
        277 Sandhurst Rd.
        Columbia, S.C.  29210


        Dear Letrhead User;

        This is a sample letter to demonstrate the printing capabilities 
        of LETRHEAD.  If this file name is specified as option 8 in the 
        data file variables menu and option 2 is toggled to 'Yes' in the 
        letterhead variable menu, then this text will print after the 
        logo.  

        Another way to print letterhead and this text would be to 
        use the batch command facility.  At the DOS prompt simply enter 
        the command:

        letrhead l letrhead.txt

        This will print the logo, letterhead and this text file 
        regardless of the options set.  

        If this were a two or more page letter, the logo and letterhead 
        would be printed on only the first page.  

        Refer to letrhead.doc for more information on this and other 
        options.


        Sincerely, 



        TSA














                                   1



        !!LETRHEAD!!





        June 14, 1987

        Technical Services Associates
        Letter number two
        277 Sandhurst Rd.
        Columbia, S.C.  29210


        Dear Letrhead User;

        This second letter is to demonstrate the !!Letrhead!! command.  
        This command can be embedded in the text and will cause the logo 
        and letterhead to be reprinted, followed by the text of the 
        second (or succeeding) letters.  The word 'letrhead' in this 
        command must be all upper or all lower case. A page break should 
        immediately proceed the !!Letrhead!! code for proper spacing in 
        the word processor and in the letrhead program.  

        Envelopes may also be printed from this file.  The command:

        letrhead e letrhead.txt

        will request that an envelope be positioned at the back edge of 
        the printer platen.  When the Enter key is pressed, the envelope 
        will be fed into the printer, and the logo, return address, and 
        mailing address will be printed.  The program searches the first 
        35 lines of the text for something that looks like an address.  
        Most of the time it is successful but check the results closely.
        It does not guarantee to find the address perfectly each time.

        To print these two letters followed by two envelopes, at the DOS 
        prompt, enter the command:

        letrhead l letrhead.txt e letrhead.txt

        Give it a try on this text file.

        Remember, these same commands are available from within the 
        program as well, using the menus and setting the necessary 
        options.  Try different combinations and experiment.  


        Sincerely,



        TSA




                                   2

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1519

     Volume in drive A has no label
     Directory of A:\

    FILE1519 TXT      1630   8-07-89   3:14p
    GO       BAT        38   7-14-89   8:01a
    GO       TXT       925   8-07-89   3:18p
    LETREDIT EXE     62704   8-20-88   3:13p
    LETRHEAD ADR       192   3-19-88  12:19a
    LETRHEAD DEF       275   3-12-88  11:21p
    LETRHEAD DOC     61312  12-04-88   3:06a
    LETRHEAD ENV        43   3-09-87  11:41p
    LETRHEAD EXE     77360   8-20-88  10:19p
    LETRHEAD LBL        50   6-12-88   4:50p
    LETRHEAD MRG       440   6-14-87  10:28p
    LETRHEAD PTN      9319   8-20-88   3:47p
    LETRHEAD TXT      3200   6-14-87  10:02p
    MANUAL   BAT       147   8-07-89   3:16p
    PAGE     COM       325   1-06-87   4:21p
    REGFORM  BAT        60   8-07-89   3:19p
    REGISTER FRM      2304  12-04-88   3:06a
    VIEW     BAT        44   8-07-89   3:16p
           18 file(s)     220368 bytes
                           89088 bytes free
