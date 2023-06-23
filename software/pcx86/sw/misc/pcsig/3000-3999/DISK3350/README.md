---
layout: page
title: "PC-SIG Diskette Library (Disk #3350)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3350/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3350"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.TXT

{% raw %}
```

   WELCOME TO FILE COMMANDER!

   This disk contains File Commander 2.0C

   File Commander is an extender for the Win 3.1 File Manager.  It allows
   you to add four (see below) menu items to the File Manager menu bar.
   From each of these top-level menu items, File Commander allows you to
   make up to 99 menu items spread up to 5 levels deep.

   There are few things you should understand about the File Manager and
   its relationship to File Commander and other File Manager extenders.
   Be sure to read the both this readme file and File Commander manual
   if you have any other File Manager extenders installed.



   ***   SPECIAL BONUS FOR REGISTERED USERS  ***

   Registered users receive our new "Dialog Editor" which allows them to
   graphically construct dialog boxes, (a lot like the Visual Basic dialog
   editor), and other utilities to help make programming File Commander menu
   items a tad easier and faster.


   *** LATE BREAKING NEWS ***

   File Commander 2.0 allows you to add upto 4 top-level menus to the
   Windows File Manager menu.  Previous versions only allowed one top-level
   menu.  Each top-level menu can support upto 99 menu items, spread across
   4 levels of drop-downs.  I know this is a tad confusing - the best bet is
   to install File Commander, run File Manager and poke around at the new
   menu items.   Once you see what our sample menu scripts can do for you,
   you will want to write your own menu scripts to add your own menu items
   to the menus.

   File Commander comes with four sample menu files, each of which are
   associated with a new File Manager menu item.  To wit:

       Menu title          Menu File

       Main                WWWFC1.MNU
       Applets             WWWFC2.MNU
       Utils               WWWFC3.MNU
       Demo                WWWFC4.MNU

   Although these files are mainly intended as code samples that you can
   peruse to make your own add-on menu items, a lot of people, especially
   those not willing to plunge in and learn the batch language, will find
   that the sample menu items do all sorts of neat stuff, and may be
   perfectly content to live with the sample menus supplied.

   These sample menus are not exactly documented anyplace, but if you
   browse through the pull-down menus in File Manager, the functions of
   the various menus items should become obvious.  We've carefully designed
   them to run on almost *any* system.  If something does not work for you,
   then its up to you to dig into the sample menu code and rectify any
   imcompatibilities that may be occurring.


   *** NORTON DESKTOP FOR WINDOWS ***

   This version also allows you to add the same menu items to the
   Norton Desktop for Windows File Manager menu.  File Commander will
   attempt to determine if there are any compatibility problems, and,
   if so, will put up a message with further instructions, and then
   exit.

   In some cases, especially with Non-English versions of NDW, there may
   be serious undetectable incompatibility problems.

   To turn off the informational message OR to tell File Commander NOT
   to run with the NDW File Manager, do the following:

       Edit the WINFILE.INI file  ((( NOT WIN.INI !!! )))

       Find the [FileCmdr] Section.  If it does not exist, make one.

       Insert a line containing "NDW=2"

       When you are done it should look something like...

               [FileCmdr]
               NDW=2


   If you experience problems when starting the Norton Desktop (Version 2.0)
   File Manager with File Commander, please contact Symantec's Peter Norton
   Group technical support at (310) 449-4900 for assistance.  Be sure to
   mention "File Commander" clearly, and they will be able take care of you.

   If you add the NDW=2 line to your WINFILE.INI file because of compatibility
   problems, be sure to remove the line when you wish to test to see if the
   compatibility problems got resolved.



   *** GENERAL INFORMATION ***

   File Commander is an extender for the Win 3.1 File Manager.  It allows
   you to add upto four menu items to the File Manager menu bar.

   From each of these top-level menu items, File Commander allows you to
   make up to 99 menu items spread up to 5 levels deep.

   The menu items, when selected, execute our Windows Interface Language (WIL)
   code.  What is the WIL language?  Well, its the Windows batch file language
   developed by Wilson WindowWare, and found in several products, including
   the following:

     Wilson WindowWare: Command Post     - As the menu script language
     Wilson WindowWare: WinBatch         - The Windows batch language
     Symantec:          Norton Desktop   - The Batch Runner/Builder language 

     >>> If you have used Command Post, you will find the menu scripts
     >>> *remarkably* similiar. 

   The WIL language supports zillions (well maybe 200) different functions
   that allow you to do pritnear anything.

   Be sure to check out our new WIL.HLP Windows help file.  It has a
   complete description of the WIL language (Thats the programming language
   found in our products).  It should prove useful.

   NOTE:  The documentation for the Windows File Manager Extender Interface
   states that 5 top-level menus may be added to the File Manager menu.
   However, due to what appears to be a bug, the fifth menu item does not
   work properly.  Any command selected from the fifth menu item becomes
   confused with the adjacent "Windows" menu, and the corresponding command
   from the "Windows" menu is executed instead.  All this is saying is don't
   use more than 4 new top-level menus with the Windows File Manager.

   Norton Desktop for Windows File Manager does support up to
   10 total addon menus.


   INSTALLATION NOTES

   File Manager Extenders are not EXE files.  They are DLL's.  When File
   Manager (either Windows or Norton) starts up, it inspects the WINFILE.INI
   (Note: NOT WIN.INI) file for a special [AddOns] section.  The [AddOns]
   section (when File Commander is installed) looks like the following:

         [AddOns]
         WWWFC1=WWWFC1.DLL
         WWWFC2=WWWFC2.DLL
         WWWFC3=WWWFC3.DLL
         WWWFC4=WWWFC3.DLL

   If you are running the Windows File Manager, you should only have 4 items
   in the [Addons] section (due to the aforementioned bug).  If you run NDW,
   you can have 5, but if you run the Windows File Manager from NDW, remember
   that the 5th added menu item is broken.

   The File Commander install process installs 4 DLL's to allow you to have
   4 menu items.  There are a few other *much less capable* extenders
   available from various sources.  Some of these are:

          a) The NDW extender.
          b) The Windows Resource toolkit File Size extender.
          c) An extender known as "Goodies"
          d) Certain internal corporate extenders
          e) And others likely to show up someplace or another.

   In any case, if you have another extender, you may have to pick and choose
   the extenders that you keep.  In general, File Commander, with just a few
   new menu scripts, can do *anything* and *everything* that any other
   extender imaginable could possibly hope to do.  The only real reason to
   keep any of the other extenders around is if your corporate MIS department
   informs you that if you don't, you might get fired.

   So....the upkeep and maintenance of the [AddOns] section of the WINFILE.INI
   is your responsibility.  You will have to decide what to keep and what goes.

   We do provide four extenders:

       WWWFC1.DLL
       WWWFC2.DLL
       WWWFC3.DLL
       WWWFC4.DLL

   which our installation program will install.  Each one controls a menu
   item.  The menu items will appear on your File Manager menu in the same
   order that the menu items occur in the [AddOns] section.

   The installation process installs, and File Commander refers to an
   additional, new section of the WINFILE.INI file -- The [FileCmdr] section.

   The [FileCmdr] section of the WINFILE.INI file contains the titles of the
   top level menu items, and also contains the file names of the menu script
   files.  You usually do not have to worry about these items, as our sample
   menu scripts maintain this section.  However, in the interest of complete
   documentation, the [FileCmdr] section as it appears immediately after File
   Commander installation is shown below:


       [FileCmdr]
       MenuFile1=WWWFC1.MNU
       MenuFile2=WWWFC2.MNU
       MenuFile3=WWWFC3.MNU
       MenuFile4=WWWFC4.MNU
       MenuTitle1=&Main
       MenuTitle2=&Applets
       MenuTitle3=&Utils
       MenuTitle4=&Demos

  The WWWFC1.DLL extender will refer to the MenuFile1 keyword to determine
  which menu script file to use, and it will refer to the MenuTitle1 keyword
  to determine the title of the desired menu item.

  Likewise, the WWWFC2.DLL extender will refer to MenuFile2 and MenuTitle2,
  and so on.



   HOW-2-ADD YOUR OWN MENU ITEMS

   The Main menu item added to the File Manager menu has a selection to
   assist you in editing menus.  All it really does is to run the Windows
   Notepad editor on one of the four menu files, WWWFC1.MNU, WWWFC2.MNU,
   WWWFC3.MNU or WWWFC4.MNU.

   In order to take full advantage of File Commander, you should read
   through most of the documentation.  It will teach you about the WIL
   script language in an easy step-by-step fashion (We've got stacks of
   letters from non-programmers who said they were a tad scared about
   tackling the WIL language, but once they went through our tutorial,
   can write menu scrips with the best of them.  One guy even decided he
   liked programming, took a few community college courses, and now has
   a job programming for a living!)

   More experienced people, people who are familiar with DOS BAT files,
   people familiar with DOS BASIC or other programming languages, and
   the average unreconstructed hackers may simply wish to plunge in,
   examine the sample menus and wing it.  Although we don't officially
   recommend this kind of thing, it does happen.

   In any case, especially for those trying to "wing it", the menu script
   files ares COLUMN SENSITIVE, especially in the first four columns
   (character positions) which define the menu item titles.  WIL batch code
   should start in column 5 or later (I like col 8).  The structure of a
   menu file (this is the short form, see the docs for a real explanation);

                         111111111122222222223
     Columns    123456789012345678901234567890... etc
                ; Semicolons are the comment symbol.  Everything to the
                ; right of a semi-colon is ignored.  At the top of the file
                ; is the "auto-exec" section which runs on File Manager
                ; startup, and whenever the extenders are reloaded.
                ; Note that the autoexec code starts in column 8 (way past
                ; column 5 so it does not get confused with menu items.
                        TAB=Num2Char(9)        ; Define a TAB char for laters
                        CR=strcat(Num2Char(13),Num2Char(10)) ; Define a CRLF
                ; That was our autoexec section.  It just defined a few
                ; special characters for later use.  Here is our first menu
                ; item...
                NOTEPAD
                        Run("Notepad.exe","")      ;Run Notepad
                ; That was it.  The word NOTEPAD will appear on a menu and
                ; when selected it will execute the command that launches the
                ; Notepad editor.
                ; Now, lets have a drop-down menu that off of a menu item.
                ; (Menu items don't need to be all CAPS, it is just to make
                ; this example a tad clearer.
                ACCESSORIES
                 CONTROL PANEL
                        Run("Control.exe","")
                 CALCULATOR
                        Run("Calc.exe","")
                ; Note that the first level menu, ACCESSORIES started in
                ; column 1, and that the two drop down menu items off of it
                ; both started in column 2.  It is important to remember that
                ; the columns that the menu titles start in control what kind
                ; of menu item it is, and putting a menu item in the wrong
                ; column is the most common error in writing a menu.


   When loading a new menu script, File Commander will report on lines in the
   menu script file that it does not like.  In general it is always expecting
   one kind of line or another, and if the current line does not meet up to
   its expectations, it displays the line with an error message.  Quite often,
   the actual error occurred on the previous line.  Almost all problems on
   load have to do with improper indent in the menu titles.  In addition,
   after an error, the remainder of the menu file is ignored.

   Each menu script file can only support upto 99 menu items.  It you have
   more that 99 menu items, the ones past the 99th item will not appear, and,
   if the 100th item occurs on some sub-level menu, can make its parent level
   disappear too.

   THE WIL.HLP file

   The installation program should have installed an icon in the Program
   Manager File Commander group which will bring up this file.  Or just
   double click on it to make it run.  Its also accessable from our sample
   menus.

   The first menu item you write might be to add a new menu item to access
   the WIL.HLP file to one of your own menus.  Here's one way to do it.

       First, figure out where the WIL.HLP file is.  Lets assume that you
       took the standard installation program defaults.  That would put
       the WIL.HLP file into the C:\FILECMDR\HELP directory.  Verify this.

       Assuming you have File Commander running, select the "Main" menu item.
       The first thing you will see in the drop-down menu that appears is the
       "Edit File Commander Menus".  Select that option.

       Another drop down menu will appear which gives you a choice of editing
       the menu scripts or changing the top-level menu titles.  Choose the
       first selection, "Edit menu scripts".

       Choose the first selection, WWWFC1.MNU, to edit the first menu file.

       This will pop you into the Notepad editor, editing the WWWFC1.MNU
       menu file.  Move to the bottom of the file and add the following
       lines.  BE SURE THAT THE MENU TITLE STARTS AT THE FAR LEFT WITH NO
       SPACES IN FRONT OF IT.  Adjust the DirChange command, if required,
       to point to the directory containing the WIL.HLP file.

              ; This menu item brings up the WIL.HLP help file
              Get WIL Help File
                      DirChange("C:\FILECMDR\HELP")
                      Run("winhelp.exe","wil.hlp")

       Close the note pad editor.  Look at your first menu.  Strange, the
       new menu item is NOT there.  Select one of the menu items, say 
       "Browse".  File Commander will look at the menu file, decide that it
       was modified since the last time it was inspected, and proceed to
       reload it.  Since there's no telling what might have changed in the
       file, File Commander will tell you that the menu files were reloaded,
       and that you should re-select the desired menu item.

       After a short delay while the reload occurs, look at the menu item 
       again.  Lo and behold, it should be there on the bottom of the first
       menu.  Select it.  WinHelp should load with the WIL language help.

       Good Luck.



   The WIL.HLP file was produced and designed by Jim Stiles.  If you need
   or want professional consulting for custom help systems,
   ask for Jim at (206) 937-3141.


  *** FOREIGN LANGUAGE SUPPORT ***

  File Commander now supports some foreign languages.  English is built in,
  and the software attempts to examine your system, and, if you are using
  German or French, will configure itself to use German or French.  More
  languages on the way.  There is also "ValSpeak", which is both a parody
  on Southern California slang, and an example of how *some* messages may
  be modified for the end users.

  If you are using Windows 3.1, File Commander will attempt to determine
  what language Windows you are running and automatically configure itself
  to use that language.

  To access a non-default langauage do the following:

      1) Examine the WWWDLANG.DLL file to determine the languages
         available.  The file has documentation in it that will help you
         figure this out.  (It is not really a DLL, you can look at it.
         It will probably be in your Windows directory.)
    
      2) Edit the WWWBATCH.INI file and add an item to the MAIN section,
         something like:

         WWWBATCH.INI
            [Main]
            Language=ValSpeak

  Restart Windows, and, walla, the new language should appear.

                       PACKING LIST:

 With this version you have the following files:   You will find that
 on your disk or ZIP file, many of the files end in a _ (underscore).  This
 is to be expected.  Some files may have been compressed and will need to
 properly installed to be useful, while other files may be simply copied and
 renamed.  Registered users may find a few other bonus files on the disk.

 README   TXT  Latest news and comments about File Commander  (this file)
 README2  TXT  Readme.txt  ...continued...
 FILECMDR MAN  The documentation for File Commander
 WIL      HLP  The Windows help file for the WIL language
 FC__VER  ???  Version number file.  The extension shows the version number
 FILE_ID  DIZ  A standard description file to help BBS sysops

 WWWFC1   DLL  The DLL for the first  extender menu item
 WWWFC2   DLL  The DLL for the second extender menu item
 WWWFC3   DLL  The DLL for the third  extender menu item
 WWWFC4   DLL  The DLL for the fourth extender menu item

 WWWFC1   MNU  The Menu file for the first  extender menu item
 WWWFC2   MNU  The Menu file for the second extender menu item
 WWWFC3   MNU  The Menu file for the third  extender menu item
 WWWFC4   MNU  The Menu file for the fourth extender menu item

 WWWFMEAA DLL  The Main File Commander DLL
 WWWBATxx DLL  The WIL script processor DLL (where xx is a number)
 WWWDLANG DLL  Foreign Language support for the WIL script processor DLL
 WWWDEALR DLL  Yet another required DLL
 WWWZIP   DLL  ZIP file processing scripts
 WWWVIRT  BAT  Sample BAT file that changes PATH for DOS apps
 WWWDOS   BAT  DOS BAT file used in some of our menu scripts
 WWWDOSC  PIF  PIF that calls WWWDOS.BAT and pauses
 WWWDOSP  PIF  PIF that calls WWWDOS.BAT and then closes the window
 WWWZIPLS EXE  Zip processor EXE file

 WSETUP   INF  A script file for the setup program
 WSETUP   EXE  The snazzy setup program
 WBINXZ   EXE  More of our setup program.
 WEXPAND  EXE  Manual install file expander (on disks only)
 WEXPAN1  EXE  Manual file expander overlay (on disks only)
 BROWSER  EXE  A handy file browser utility
 BROWLANG DLL  International language support for Browser


   Please see the README2.TXT file for more information
```
{% endraw %}

## README2.TXT

{% raw %}
```

                 REGISTRATION REMINDERS

 Unlicensed copies of Wilson WindowWare products are 100% fully functional.
 We make them this way so that you can have a real look at them, and then
 decide whether they fit your needs or not.  Our entire business depends
 on your honesty.  If you use it, we expect you to pay for it.  We feel
 that if we treat you right, you will treat us right.

 Unlicensed copies of our products do have a pesky registration reminder
 screen that pops up whenever you start the program.  This shouldn't
 really affect your evaluation of our software.

 We're sure that once you see the incredible quality of our software,
 you will dig out your credit card, pick up the phone, call the nice
 people at our 800 number and register the software.

 When you pay for the shareware you like, you are voting with your
 pocketbook, and will encourage us to bring you more of the same kinds
 of products.  Pay for what you like, and voila, more of what you like
 will almost magically be developed.


                        LEGAL MATTERS

 Of course the usual disclaimers still apply.  We are not 
 responsible for anything at all.  Nothing.  Even if we are held 
 responsible, the limit of our liability is the licensing fees 
 you paid.  The full text of our license agreement is found near 
 the bottom of this file. 




               HOW TO INSTALL THIS SOFTWARE

  Use our snazzy setup program...

        1) Close down all extraneous Windows applications.  
           (You do have to be in Windows to run WSETUP.EXE)

        2) Double-Click on the WSETUP.EXE program.  (If you have the
           WinCheck product in front of you, the setup program is still
           called SETUP.EXE)

        3) When the setup program asks for a directory, specify initial 
           directory, or accept the given default.

        4) When the screen comes up that asks you what you want to
           install, do your selections, or just hit the INSTALL ALL
           button.  Hit the OK button to continue.


          ******************** MANUAL INSTALL *********************

      If you cannot use the snazzy setup program, and must do a manual
      install.....good luck.  Basically installing our products without
      going through the setup program is "unsupported", as installation
      of Windows products does get tricky.  However as to not leave you
      completely in the lurch....

      1) Most files to be installed by the installation program end in
         an underscore "_".   The files might be compressed.

             If you received the files on a DISK, the probability is HIGH
             that you must expand the files with our WEXPAND (see below)
             program before use.

            If you received the files packaged in a ZIP file, the
            probability is LOW. and you may simply rename the files to the
            correct name.

         If you try to expand a file that was not compressed, the expand
         program will NOT give an error message, and will NOT correctly
         process the file.  In general, if the output from the expand
         program is smaller than the file that went in, the expand program
         should not be used.

         By examining the files with our Browser (possibly included with
         the package) program, or basically any tool that allows you to
         look at the file in hex, one can quickly learn how to determine
         if the file is compressed or not.  If you can read *any* text
         in the morass of funny looking symbols, the file is probably not
         compressed.  If the characters seem completely random, the it
         probably is compressed.

      2) The files (generally) must either be expanded into files with the
         correct names, or must be renamed, prior to use.

      3) In general, the DLL files should go into your WINDOWS directory,
         or else some directory mentioned in your DOS path statement.

      4) The BROWSER.EXE program may be used to view the *.MAN manual
         files.  It is recommended that you put the BROWSER program in
         the same directory you put the DLL files.

      5) You may want to add to the WIN.INI [Extensions] section the
         following lines:

         MAN=BROWSER.EXE ^.MAN
         HLP=WINHELP ^.HLP
         WBT=WINBATCH.EXE ^.WBT


         *** USING THE WEXPAND PROGRAM ***

     Example:

     The installation diskette is inserted into your A: floppy drive
     
     You wish to expand the WININFO.EX_ file.  At the DOS prompt type...

       WEXPAND.EXE WININFO.EX_  WININFO.EXE

     Make sure the output file (WININFO.EXE in this case) is LARGER than
     the imput file (WININFO.EX_), otherwise the file was not compressed,
     and should be renamed as follows:

       REN WININFO.EX_ WININFO.EXE



                    UPDATE POLICY

 It is the policy of Wilson WindowWare to protect faithful customers, and to
 derive the majority of our income via sales to new customers rather than
 continually attempting to extract more funds from existing customers.  Of
 course we must at least cover our costs or we could not stay in business
 bringing you new and updated software.

 Wilson WindowWare frequently updates it products.  There are various kinds
 of updates, including Major updates, Minor updates, and bug-fix updates.

 Minor and bug-fix updates for our shareware products are free -- subject
 only to our reasonable shipping and and handling charges for disks. As we
 are not in the disk selling business, you may find that shareware vendors
 specializing is disk sales can easily sell disks cheaper than we can.  On
 the other hand, we *always* have the most recent versions of our software.
 Our shipping and handling charges for update disks are as follows:

     10.00  US and Canada for the first product,
      5.00  US and Canada for each additional product.
      9.50  Surcharge for shipping outside of US and Canada.

 If you obtain a minor or bug-fix update from Compuserve or other online
 service, a BBS, a shareware disk vendor or from another source, there is
 no charge from us (of course you will have to pay the on-line service fees,
 disk vendors fees, or at least pay your phone bill for downloading from
 a BBS). In addition, you may use a single disk to update any number of
 copies of a product.

 The policy and pricing for Major shareware updates vary.  Depending on the
 nature of the upgrade, length of time since the previous major upgrade,
 desirability of new features added, the extent of revisions to the printed
 manuals (if any), work involved and possible price changes for new users,
 we may or may not charge fees.  Since it is difficult to determine what the
 cost of future major updates will be, and since we do not wish to commit 
 ourselves to the uncertainty of the future, we have provided information on
 the cost of major past updates here so that you can see our track record,
 and possibly feel reassured about the future.


    Command Post first released:     May, 1988
         1.0 thru 6.x    Free
        <6.x to   7.x    $18.50 (included a new manual)
         7.0 to   7.2+   Free

    WinBatch first released:         Jan 1991
         1.0 to   3.3   Free
         3.3 to   4.0    $25  (Includes over 300 pages printed docs)

    File Commander first released    May 1992
         1.0 to   2.0+   Free (Registered 1.0 users received free 2.0 manuals
                               and disks (not even any s&h charges))

    WinCheck first released:         Oct 1990
         1.0 thru 2.x    Free
        <2.x to   3.0    Free (New manual and disk  - $10)
         3.0 thru 3.0+   Free

    Address Manager first released:  July 1991
         1.0  to  1.1b   Free
         1.1b to  2.0+   Free  (New manual and disk - $10)

    Windows Reminder first released: July 1991
         1.0 to   1.3+   No major updates so far.

    WinEdit first released:          November 1990
         1.0 to   1.3+   No major updates fo far.


      * In the table Above  "Free" means the update costs the same as a
        minor update, in that if you want us to send you a disk, there is
        only our standard shipping and handling charges for disks.

      + Indicates current versions


                    ON-LINE SUPPORT

 Wilson WindowWare has on-line support!

 The home of all Wilson WindowWare is on Compuserve, in the WINAPA
 forum, in the Wilson WindowWare section (#15 currently).  Also
 the latest and greatest downloads are available from DL15 of the
 WINAPA forum.  The Wilson WindowWare section of the WINAPA forum
 is checked on a daily basis, and all questions will be responded to.

 The Fidonet Windows echo is also checked on a fairly regular basis.
 We only look at the titles of the messages.  If you want to leave a
 message for us be sure one of the following words are in the title.

      WINDOWWARE WILSON BATCH CMDPOST COMMANDER WINBATCH WIL

 Registered users may also call our BBS for the latest versions of
 our products. (206) 935-5198   USR HST D/S V.42bis 9600+ 8N1


       Association of Shareware Professionals Ombudsman Statement


       Wilson WindowWare, the producer of Wilson WindowWare software,
       is a member of the Association of Shareware Professionals (ASP).  
       ASP wants to make sure that the shareware principle works for
       you. If you are unable to resolve a shareware-related problem
       with an ASP member by contacting the member directly, ASP may
       be able to help. The ASP Ombudsman can help you resolve a
       dispute or problem with an ASP member, but does not provide
       technical support for members' products. Please write to the
       ASP Ombudsman at 545 Grover Road, Muskegon MI 49442 or send a
       Compuserve message via easyplex to ASP Ombudsman 70007,3536


 The legalese section...

 ADDRESS MANAGER   Copyright ⌐ 1990-92 by Wilson WindowWare, Inc.
 COMMAND POST      Copyright ⌐ 1988-92 by Morrie Wilson.
 FILE COMMANDER    Copyright ⌐ 1992    by Morrie Wilson.
 REMINDER          Copyright ⌐ 1990-92 by Wilson WindowWare, Inc.
 WINCHECK          Copyright ⌐ 1990-92 by Wilson WindowWare, Inc.
 WINEDIT           Copyright ⌐ 1990-92 by Steve Schauer.
 WINBATCH          Copyright ⌐ 1991-92 by Morrie Wilson.


 SOFTWARE LICENSE

 Wilson WindowWare software is not and has never been public domain
 software, nor is it free software. 

 Non-licensed users are granted a limited license to use our
 software on a 21-day trial basis for the purpose of determining
 whether the software is suitable for their needs.  Any use
 of our software, except for the initial 21-day trial, requires
 registration.  The use of unlicensed copies of our software,
 outside of the initial 21-day trial, by any person, business,
 corporation, government agency or any other entity is
 strictly prohibited. 

 A single user license permits a user to use one copy of the licensed
 software product only on a single computer.  Licensed users may use
 the program on different computers, but may not use the program
 on more than one computer at the same time.

 No one may modify or patch any of our executable files in any way,
 including but not limited to decompiling, disassembling, or otherwise
 reverse engineering our software programs.

 A limited license is granted to copy and distribute our shareware
 software only for the trial use of others, subject to the above
 limitations, and also the following: 

  1)    The software must be copied in unmodified form, complete
        with the file containing this license information.

  2)    The full machine-readable documentation must be included
        with each copy.

  3)    Our software may not be distributed in conjunction with
        any other  product with out a specific license to do so
        from Wilson WindowWare.

  4)    No fee, charge, or other compensation may be requested or
        accepted, except as authorized below:

        A) Operators of electronic bulletin board systems (sysops)
           may make our products available for downloading only as
           long as the above conditions are met.  An overall or
           time-dependent charge for the use of the bulletin board
           system is permitted as long as there is not a specific
           charge for the download of our software.

        B) Vendors of user-supported or shareware software approved by
           the ASP may distribute our products, subject to the
           above conditions, without specific permission.  Non-
           approved vendors may distribute our products only after
           obtaining written permission from Wilson WindowWare.
           Such permission is usually granted.  Please write for
           details (enclose your catalog).  Vendors may charge a
           disk duplication and handling fee, which, when pro-rated
           to each individual product, may not exceed eight dollars.

        C) Non-profit user groups may distribute copies of the our
           products to their members, subject to the above conditions,
           without specific permission.  Non-profit groups may collect
           a disk duplication fee not to exceed five dollars.

  LIMITED WARRANTY

  Wilson WindowWare guarantees your satisfaction with this
  product for a period of 90 days from the date of original
  purchase.  If you are unsatisfied with the product
  within that time period, return the package in saleable
  condition to the place of purchase for a full refund.

  Wilson WindowWare warrants that all disks provided are
  free from defects in material and workmanship, assuming
  normal use, for a period of 90 days from the date of
  purchase.

  Wilson WindowWare warrants that the program will perform
  in substantial compliance with the documentation supplied
  with the software product.  If a significant defect in
  the product is found, the purchaser may return the
  product for a refund.  In no event will such a refund
  exceed the purchase price of the product.

  EXCEPT AS PROVIDED ABOVE, WILSON WINDOWWARE DISCLAIMS ALL
  WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT
  LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY AND
  FITNESS FOR A PARTICULAR PURPOSE, WITH RESPECT TO THE
  PRODUCT.  SHOULD THE PROGRAM PROVE DEFECTIVE, THE
  PURCHASER ASSUMES THE RISK OF PAYING THE ENTIRE COST OF
  ALL NECESSARY SERVICING, REPAIR, OR CORRECTION AND ANY
  INCIDENTAL OR CONSEQUENTIAL DAMAGES.  IN NO EVENT WILL
  WILSON WINDOWWARE BE LIABLE FOR ANY DAMAGES WHATSOEVER
  (INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF
  BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS
  INFORMATION AND THE LIKE) ARISING OUT OF THE USE OR THE
  INABILITY TO USE THIS PRODUCT EVEN IF WILSON WINDOWWARE
  HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

  Use of this product for any period of time constitutes
  your acceptance of this agreement and subjects you to its
  contents.

  U.S. GOVERNMENT RESTRICTED RIGHTS

  Use, duplication, or disclosure by the Government is subject
  to restrictions as set forth in subdivision (b)(3)(ii) of
  the Rights in Technical Data and Computer Software clause at
  252.227-7013.  Contractor/manufacturer is Wilson WindowWare
  2701 California Ave SW /suite 212/ Seattle, WA 98116

  TRADEMARKS

  Microsoft and MS-DOS are registered trademarks of
  Microsoft Corporation.
  Windows is a trademark of Microsoft Corporation.

  File Commander  is a trademark of Wilson WindowWare, Inc.
  Command Post    is a trademark of Wilson WindowWare, Inc.
  WinBatch        is a trademark of Wilson WindowWare, Inc.
  WinCheck        is a trademark of Wilson WindowWare, Inc.
  Reminder        is a trademark of Wilson WindowWare, Inc.
  Address Manager is a trademark of Wilson WindowWare, Inc.
  WinEdit         is a trademark of Wilson WindowWare, Inc.


           *** WILSON WINDOWWARE PRODUCTS ***

 Our great line of Windows products includes:

        Address Manager - Tracks addresses, phone numbers, comments, 
                          important dates.  Includes dialer and label
                          printer.  Supports DDE.        $39.95

        Command Post    - A powerful text-based shell for Windows.
                          Programmable menus, built-in batch language,
                          file viewer and more.          $49.95

        File Commander  - Allows addition of programmable menu items to
                          the Windows 3.1 File Manager.  Make File Manager
                          into a super-powerful shell.   $49.95

        Reminder        - Personal Schedule Manager.  Keeps track of
                          to-do lists, set alarms (which can launch apps), 
                          prints reports. Supports DDE.  $59.95

        WinCheck        - Your personal finance manager for Windows.
                          Manages checking, savings, cash, and credit
                          card accounts. Features galore! Supports DDE.
                          Custom Reports.                $69.99

        WinEdit         - Power Programming for the Windows Environment.
                          Full featured editor, or simple file browser.
                          Super high speed, super powerful.  Batch
                          language supported.            $59.95

        WinBatch        - Write your own Windows Batch Files!  Dialogs,
                          automatic program control, and powerful data
                          manipulation lets you control your Windows.
                          A must for the power user.     $69.95

        WinBatch        - NOT A SHAREWARE PRODUCT.  The WinBatch compiler
             COMPILER!    can compile WinBatch batch files into standalone
                          EXE files that may be distributed on a royalty
                          free basis.  Great for networks and corporate
                          gurus.  Compile your WBT files and then hand
                          them out like candy.           $395.00



                          ORDERING INFORMATION

 Licensing our products brings you wonderful benefits.  Some of these are:
    - Gets rid of that pesky reminder window that comes up when you start
      up the software.
    - Entitles you to one hour free phone support for 90 days (Your dime).
    - Insures that you have the latest version of the product.
    - Encourages the authors of these programs to continue bringing you
      updated/better versions and new products.
   -  Gets you on our mailing list so you are occassionally notified of
      spectacular updates and our other Windows products.
   -  And, of course, our 90-day money back guarantee.



                  WILSON WINDOWWARE ORDER FORM
              
 Name:   ____________________________________________________

 Company:____________________________________________________

 Address:____________________________________________________

         ____________________________________________________

 City:   ________________________  St:______  Zip:___________

 Phone: (______)_________________    Country:________________


            ____ Address Manager(s)  @ $39.95 : _______.____
            ____ Command Post   (s)  @ $49.95 : _______.____
            ____ File Commander (s)  @ $49.95 : _______.____
            ____ Reminder       (s)  @ $59.95 : _______.____
            ____ WinBatch       (s)  @ $69.95 : _______.____
            ____ WinCheck       (s)  @ $69.99 : _______.____
            ____ WinEdit        (s)  @ $59.95 : _______.____

            ____ WinBatch Compiler   @$395.00 : _______.____   *call*

            ____ Foreign air shipping
                 (except Canada)     @  $9.50 : _______.____

    [Form ASP920915FC]                   Total: _______.____



 Please enclose a check payable to Wilson WindowWare;
 or you may use Access, Amex, Visa, MasterCharge, or EuroCard.
 For credit cards,  please enter the information below:


 Card #:__ __ __ __ - __ __ __ __ - __ __ __ __ - __ __ __ __


 Expiration date: ____/____


 Signature:  _________________________________________

 
 Where did you hear about or get a copy of our products?


 ____________________________________________________________


          Send to:  Wilson WindowWare, Inc.
                    2701 California Ave SW #212 
                    Seattle, WA 98116 
                    USA 

          or call:  (800) 762-8383  (USA orders only )
                    (206) 938-1740  (customer service)
                    (206) 937-9335  (tech support)
                    (206) 935-7129  (fax) 

          (Please allow 2 to 3 weeks for delivery)
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3350

     Volume in drive A has no label
     Directory of A:\

    WSETUP   INF      8749   9-06-92  12:11p
    README2  TXT     21197   9-06-92   4:30p
    FILE_ID  DIZ       156   6-13-92   8:33p
    FC__VER  20C       101   3-19-92  10:56p
    README   TXT     19619   9-06-92  12:13p
    WBINXZ   EXE     53856   8-24-92   6:26p
    WSETUP   EXE      6992   7-04-92   4:16p
    GO       BAT        33   1-28-93   7:54a
    SHOW     EXE      2040   9-12-88  10:48a
            9 file(s)     112743 bytes
                           44544 bytes free
