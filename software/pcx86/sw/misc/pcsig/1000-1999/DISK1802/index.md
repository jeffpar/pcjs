---
layout: page
title: "PC-SIG Diskette Library (Disk #1802)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1802/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1802"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BALLISTIC"

    BALLISTIC is a program used to calculate bullet trajectories, remaining
    energy, velocities, etc., for small arms.  It will generate ballistic
    tables, calculate point blank range, and many other useful functions.
    Several may be plotted vs. range on systems with VGA, EGA, CGA, MCGA or
    Hercules graphics adapters.  A built-in database makes storage of
    personal data easy.
    
    The purpose of this program is NOT to teach the fundamentals of
    reloading small arms ammunition, but rather to aid the hobbyist in
    assessing the performance of the ammunition he has produced.  It is
    assumed from the outset that the user of this program is acquainted with
    basic reloading techniques.  For review, a list of references is
    supplied.
    
    This program is very thorough and complete.  The documentation is over
    35 pages long and extremely informative.  It discusses the variables
    considered in calculations, how they are to be derived, and why they are
    so important.  The appendix even has definitions on key words, making
    BALLISTIC a fine learning tool.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BALISTIC.DOC

{% raw %}
```














                                B A L L I S T I C

                                  Version  4.00




                   Copyright 1988, 1989 by William R. Frenchu
                              All Rights Reserved.










                                     WARNING

        Reloading  small arms ammunition can be a DANGEROUS pastime.  The
        purpose  of this program is NOT to teach the principles  of  this
        fascinating  hobby.  It is, rather, to aid the  hobbyist  in  as-
        sessing the performance of the ammunition he has produced. It  is
        assumed  from  the outset that the user of this  program  is  ac-
        quainted with basic reloading techniques. (For review, a list  of
        references  may be found in Appendix B of this document.) DO  NOT
        ATTEMPT  TO PRODUCE AMMUNITION FOR YOURSELF OR OTHERS  UNTIL  YOU
        ARE  COMPLETELY FAMILIAR WITH ALL THE FUNDAMENTALS OF  RELOADING.
        ALWAYS  START WITH THE MINIMUM LOAD AND WORK SLOWLY UP TO  (NEVER
        EXCEED) THE MAXIMUM LISTED LOAD.




                       User Supported Software (Shareware)

        These  programs (and their documentation) are  copyrighted  mate-
        rial.  Non-registered  users of BALLISTIC are granted  a  limited
        license to use the complete package for a trial period, to deter-
        mine  if it suits their needs. See Appendix F for further  infor-
        mation (and the usual pitch for cash).






                                COPYRIGHT NOTICE
                                ----------------



        BALLISTIC v4.00 is Copyright 1988, 1989 by William R. Frenchu.
        GENTABLE  v4.00 is Copyright 1988, 1989 by William R. Frenchu.
        READTABLE v4.00 is Copyright 1988, 1989 by William R. Frenchu.

        This document is Copyright 1988, 1989 by William R. Frenchu.

        None of the programs listed above (or their documentation) may be
        copied, in part or in whole, except as provided in the License in
        the following pages.






                                   Disclaimer

        Although  every reasonable care was taken to insure the  accuracy
        of  these  programs and their documentation,  they  are  provided
        "AS IS"  and  without warranties as to performance  of  merchant-
        ability  or  any other warranties whether expressed  or  implied,
        including,  but not limited to warranty of fitness for a  partic-
        ular  purpose. Good data processing procedure dictates  that  any
        program  be tested with non-critical data before relying  on  it.
        The user must assume the entire risk of using the program. In  no
        event  will  the  author be liable for any  damages  (or  injury)
        arising out of the use of or inability to use this program.






                                   Trademarks

        The several product names found throughout this manual are trade-
        marks of various companies.






                                     LICENSE
                                     -------



        The  "BALLISTIC software package" (hereafter referred to  as  the
        Package)  includes the executable versions of BALLISTIC 4.00  and
        GENTABLE 4.00, and this document. Source code for these  programs
        is  specifically  excluded.  (READTABLE is  an  optional  program
        available only to registered users. See Appendix E.)

        The  Package is not, nor has it ever been, public domain or  free
        software.

        The  Package  is distributed under the  User  Supported  Software
        concept.  Non-registered users (private, governmental OR  commer-
        cial)  are granted a limited license to use the Package for a  30
        day  trial  period, to determine if it suits  their  needs.  This
        license further allows registered OR non-registered users to make
        and distribute copies of the Package for the purpose of  allowing
        others to try it, provided the following restrictions are met:

           1. The  Package  must include unmodified  copies  of  all
              files and documentation.
           2. The Package may not be included with any other product
              for any reason without a license from the author.
           3. No charge or payment may be levied or accepted for the
              Package beyond a small media fee.

        Bulletin Board System Operators (sysops) may post the Package  on
        their  BBS for downloading without written permission so long  as
        no  SPECIAL  fees are necessary to access the files. (A  fee  for
        general access to the BBS or charge for connect time is  specifi-
        cally allowed.)

        Distributors  of User Supported and Public Domain  Software  MUST
        additionally obtain permission in writing from William R. Frenchu
        before  distributing  the Package. Permission  is  almost  always
        granted.

        Any  other  use of Package, or use past the 30 day  trial  period
        requires registration.

        Appendix F contains information on registration.


                                TABLE OF CONTENTS
                                -----------------


        1. ABOUT THE PROGRAM
          A. General ............................................... 1
          B. Program Files ......................................... 1
          C. System Requirements ................................... 1
          D. Program Limitations ................................... 2
          E. Communicating with BALLISTIC .......................... 2
          F. What's New ............................................ 2
          G. The Future ............................................ 3
          H. Acknowledgments ....................................... 3

        2. INSTALLATION
          A. Shareware Copies....................................... 5
          B. All Users ............................................. 5
          C. The Configuration File ................................ 5
          D. Using the Pre-programmed Functions .................... 5

        3. CALCULATING A BALLISTIC TABLE
          A. Command Line Arguments ................................ 8
          B. Calculating a Ballistic Coefficient ................... 8
          C. The Ballistic Table ................................... 9
          D. Sight (Trajectory) Tables ............................. 9
          E. Plotting the Trajectory ............................... 10

        4. OTHER MAIN MENU FUNCTIONS
          A. Modifying the Ballistic Coefficient ................... 11
          B. Changing the Cross Wind Value ......................... 11
          C. Changing the Input Function Table ..................... 11
          D. Miscellaneous Functions Menu .......................... 11
          E. Database Function Menu ................................ 11

        5. THE MISCELLANEOUS FUNCTIONS MENU
          A. Calculating Recoil .................................... 13
          B. Calculating Minimum Twist ............................. 13
          C. Calculating the Point Blank Range ..................... 14
          D. Correction from Instrumental to True Muzzle Velocity .. 14
          E. Calculation of Velocity Statistics .................... 14
          F. Calculation of Target Statistics ...................... 15

        6. DATABASE FUNCTIONS
          A. Internal or External Databases ........................ 16
          B. Display Database ...................................... 16
          C. Search Database ....................................... 16
          D. Delete Record from Database ........................... 17
          E. Add Record to Database ................................ 17
          F. Print Reloading Label ................................. 17
          G. Select Database File .................................. 17
          H. Internal Database Structure ........................... 17
          I. External Database Return Values ....................... 18

        7. GRAPHICS MODE FUNCTIONS
          A. Changing the Axes ..................................... 19
          B. Saving and Restoring Plot Data ........................ 19
          C. Graphics Cursor ....................................... 19
          D. Hardcopy of Graphic Data .............................. 19
          E. Plotting Other Functions .............................. 20
          F. Miscellaneous Graphics Commands ....................... 20


        8. THE BALLISTIC TABLE
          A. The Table Header ...................................... 21
          B. Functions of Merit .................................... 21
          C. Energy ................................................ 22
          D. Momentum .............................................. 22
          E. Maximum Ordinate ...................................... 22
          F. Deflection ............................................ 22
          G. Drop .................................................. 23
          H. Lead .................................................. 23
          I. Time of Flight ........................................ 23
          J. Trajectory ............................................ 23

        9. THE CONFIGURATION FILE
          A. Using the Configuration File .......................... 25
          B. Allowable Parameters .................................. 25

        10. SOURCES OF DATA
          A. Altitude .............................................. 27
          B. Ballistic Coefficient ................................. 27
          C. Bullet Weight, Length and Caliber ..................... 27
          D. Gun and Powder Weight ................................. 27
          E. Specific Gravity of Bullet Alloy ...................... 28
          F. Temperature, Atmospheric Pressure and Wind ............ 28
          G. Velocity .............................................. 28

        Figures .................................................... 30

        Appendix A, Glossary ....................................... 35
        Appendix B, Information Sources ............................ 38
        Appendix C, Coefficients for Several Factory Cartridges .... 40
        Appendix D, Specific Gravities of Bullet Alloys ............ 43
        Appendix E, Using Other Standard Functions ................. 44
          1. Creating Custom Function Tables ....................... 44
          2. Checking the Function File with READTABLE ............. 44
        Appendix F, User Supported Software (Shareware) ............ 46

        Registration Form .......................................... 47




        1.  ABOUT THE PROGRAM

        A. General
             BALLISTIC  is a Turbo C (v2.0) program written  to  generate
        ballistic  tables for shooters. Given easily obtainable data,  it
        calculates  such useful information as the ballistic  coefficient
        and  sectional  density, remaining  velocity,  energy,  momentum,
        drop, deflection, maximum ordinate, time of flight and lead  (for
        moving  targets) at a given range. In addition, it can  determine
        the  recoil, estimate the minimum rifling twist, calculate  point
        blank  range, generate statistics, and produce trajectory  tables
        for estimating holdover. Several of the values calculated by BAL-
        LISTIC may be displayed not only in tabular form, but also graph-
        ically as a function of range.

        B. Program Files
             The  following files should be included in any  distribution
        of BALLISTIC:

           BAL-GEN.EXE  -GENTABLE  :Creates ballistic function tables.
           BAL-READ.ME! -Describes version, etc.
           BALISTIC.EXE -BALLISTIC :Executable file.
           BALISTIC.DOC -This file.

             Registered users may additionally receive:

           BAL-READ.EXE -READTABLE :Optionally displays function tables.
           BALISTIC.REV -Program revision history.
           *.DB         -BALLISTIC databases of commercial components.
           CHECK_DB.COM -Checks format of user created databases.
           BAL400-?.C   -C Source code (extra cost)

        C. System Requirements
             BALLISTIC  should run on most IBM BIOS-compatible  computers
        using PC/MS-DOS 3.0 or above. It requires 256k of free memory and
        at  least one disk drive. Non-graphic functions are  directed  to
        the default display. Graphic output (for non-registered versions)
        requires  a  VGA, MCGA, EGA, CGA or Hercules  compatible  display
        adapter.  Registered  versions can be supplied that  support  the
        higher resolution modes of several additional displays. (See file
        BAL-READ.ME! for the current list.)
             BALLISTIC 4.00 has been tested and found to operate properly
        on the following systems:

           PC/XT with Hercules monochrome or ATI "EGA Wonder" adapter
           PS/2 System 30 with MCGA adapter
           Compaq Plus with Compaq CGA-type adapter
           Compaq DeskPro 386 with Compaq EGA-type adapter
           Compaq DeskPro 386s with Compaq VGA-type adapter
           Panasonic Executive Partner (8086 with CGA type display)

        Version  2.0 of Turbo C appears to use a new method to check  for
        available  graphics adapters. This may cause BALLISTIC  to  crash
        some  of  the less compatible clones.  (The  Panasonic  Executive
        Partner  is  an  example of this.) In most cases,  this  will  be
        solved  by using the configuration file or command line to  force
        BALLISTIC  to use BIOS calls for video I/O. See section 3A  (com-
        mand  line) or 9 (configuration file) for more detailed  instruc-
        tions.


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 1



        D. Program Limitations
             Any  program of this type will have certain  limitations  on
        its  use and accuracy. BALLISTIC is no  exception.  Discrepancies
        between actual and calculated performance arise primarily because
        of approximations the program uses in its calculations.
             An  additional source of error is the inability of the  user
        to  measure input values exactly. Assuming that the input  values
        are  known  to  1% the average user should  find  agreement  with
        published  velocity  and trajectory data to be 1-2%.  The  recoil
        calculation,  due  to its more approximate nature,  shouldn't  be
        considered more than 10-15% accurate.
             In  any case, while the numbers produced by the program  are
        believed  to be accurate enough for all practical purposes,  they
        are meant only as a guide to ammunition performance. How a parti-
        cular  load performs with a given gun can only be  determined  by
        actual firings.
             BALLISTIC  works by comparing the user's bullet to a  "stan-
        dard projectile" with a well known trajectory. Since the standard
        data  is calculated before use by a separate program  (GENTABLE),
        the user's ballistic tables can be produced very quickly.
             For  best results, one should try to use the  same  standard
        function  to produce the table that was initially used to  calcu-
        late the ballistic coefficient. This may not always be  possible,
        as in the case where a published coefficient was calculated using
        a drag function to which the program doesn't have access.

        E. Communicating with BALLISTIC
             Throughout this document, single keys pressed in response to
        program  prompts  are enclosed in angle  brackets.  For  example,
        "press  <1>" means to press the key labeled "1" on the  keyboard.
        For  "press  <ENTER>",  use the key  marked  either  "return"  or
        "enter".
             When  the document requires that a value be  "entered",  the
        <ENTER>  key must be pressed when finished, e.g., to  "enter  10"
        press <1><0><ENTER>.
             Prior to hitting the <ENTER> key, values may be edited using
        any  of  the appropriate cursor keys,  including  <HOME>,  <END>,
        <INSERT> and <DELETE>. Improper entries on previous lines can  be
        corrected  by using the <ESC> key to "back up" to the  bad  line,
        then  retyping the data. In most cases, obviously  improper  data
        will be refused and an acceptable range displayed.
             File  names each have an associated default extension  which
        need not be entered. For input filenames, a directory of matching
        files  may be displayed by entering a name containing  the  usual
        DOS  wildcards,  "?" or "*". (This option is NOT  implemented  in
        graphics  mode.)  Input filenames will be checked  for  existence
        before they are accepted.
             Several function keys have been implemented in version 4.00.
        These  keys  will always perform the same  functions,  even  when
        similar menu choices are available. "F1" currently provides  help
        when  in graphics mode. (The author's plan is to use this key  to
        provide "context sensitive" help in a future release.) "F5"  will
        execute  a "shell to DOS" function from anyplace EXCEPT  graphics
        mode.  "F9"  will perform a "selective"  print  screen  function,
        i.e.,  it will print that part of the screen containing the  cur-
        rent calculations, without the titles, etc. "F10" will perform  a
        form feed.

        F. What's New
             There have been several additions to the program since  ver-


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 2


        sion 3.20. Some of these include:

           1. Added database functions for storage and retrieval  of
              ballistic  input  values. Both internal  and  external
              databases are supported.
           2. Added angle of departure feature to trajectory menu.
           3. Added  ability to plot energy, velocity,  momentum  or
              deflection as a function of range.
           4. Added  choice of several "functions of merit"  to  the
              original IPSC power function.
           5. Added graphics cursor with coordinate display.
           6. Added "print to file" option for tables.
           7. Maximum range has been extended.
           8. Minimum  bullet weight is now 1 grain.
           9. Minimum bullet diameter is now 0.08" (#9 shot).
          10. Users can now print input data and results of calcula-
              tions performed in miscellaneous functions menu.
          11. When  modifying atmospheric data, the standard  values
              may be accepted by pressing <SHIFT-RETURN>.
          12. HP  Paintjet and C. Itoh 8510A printers are  now  sup-
              ported in graphics mode.

             As  a result of these (and other) changes, plot files  saved
        under  previous versions of BALLISTIC are incompatible  with  the
        new release.

        G. The Future
             The  author is the first to admit that BALLISTIC isn't  per-
        fect  (or even necessarily finished). It is hoped, for  instance,
        that  future releases will incorporate a "Powley  Computer"  type
        computation  for  estimating the powder charge  necessary  for  a
        given  velocity. The ability to make calculations based  on  dis-
        tances  given in meters OR yards would be a welcome  improvement.
        Additional  features  the author is considering  include  context
        sensitive help.
             The author is interested in adding new drag function  tables
        if reliable data can be found. He is currently on the lookout for
        listings of the "J", "G5" or "G7" drag functions. Also of  inter-
        est is additional specific gravity data for commonly used  bullet
        casting alloys, and information on the types of materials used in
        non-lead  bullet  designs (e.g., bronze and  steel).  Finally,  a
        description of the Relative Incapacitation Index (RII) would help
        round out the merit function selections.
             All in all, BALLISTIC seems likely to fill the needs of many
        shooting  buffs.  Included  in the  documentation  is  a  section
        listing sources for further reading on small arms ballistics  and
        reloading. The local gun shop or public library may have  others.
        READ some of them!.. AND the disclaimers. Then enjoy the program.

        H. Acknowledgments
             The  author  is indebted to the following people  for  their
        help, support, and the many suggestions they made. Without  dedi-
        cated  users such as these, the program would never have  reached
        its current level of sophistication:

                                   Jim Kreiser
                                   Hugh Roberts
                                  James Roberts
                                Donald Terwilliger

             Special  thanks  are due to the author's  wife  and  family,


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 3


        Susan, Billy and Karen, for understanding (or at least putting up
        with!) the author's wild mood swings, ranting and raving as  var-
        ious parts of BALLISTIC (which were working just fine yesterday!)
        stopped working for no apparent reason. Thank you.



























































        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 4




        2.  INSTALLATION

             BALLISTIC is available in two formats. The shareware version
        is  a packed or archive type file (typically with a  .ZIP  exten-
        sion)  which the user has most often downloaded from  a  computer
        bulletin  board  system. The registered version may  be  supplied
        already  "unpacked" on one 3.5" or two 5.25"  diskettes  directly
        from the author.
             The  installation  procedure for both  formats  is  similar.
        Briefly,  the executable files are installed on a  working  disk,
        the  system graphics printer is chosen, and a  standard  function
        file is created.

        A. Shareware Copies
             Those users starting with a packed file should create  their
        own  "distribution diskette" by formatting a blank  floppy,  then
        unpacking all the files directly to the new diskette. This floppy
        is identical to "disk 1" of the registered version.

        B. All Users
             The  first step should be to print (and read!) the  documen-
        tation file from "disk 1". (3.5" disk users receive "disk 1"  and
        "disk  2" on a single diskette.) This may be done with either  of
        the DOS commands:

        PRINT BALISTIC.DOC

        or:

        TYPE BALISTIC.DOC >PRN

        (The documentation is an ascii file formatted for 66 lines of  80
        characters each per page.)
             The second step is the creation of a "working diskette"  (or
        directory).  If  installing to a hard disk, this may be  done  by
        simply creating an appropriate sub-directory and copying all  the
        files from the distribution diskettes.
             If  installing  to a floppy disk based system,  the  working
        diskette  is created by copying ONLY the files  BALISTIC.EXE  and
        BAL-GEN.EXE  from "disk 1". This is necessary in order  to  leave
        enough room to create the .TAB files later.
              Finally,  the distribution diskettes should be stored in  a
        safe place, away from electric or magnetic fields and extremes of
        temperature.

        C. The Configuration File
             Certain program default values may be changed by creating an
        ascii file called BALISTIC.CFG. (Detailed instructions and allow-
        able  parameters are described in section 9.) It  is  recommended
        that  the user determine the proper value for PTYPE  (the  system
        graphics  printer) at this time. (The default value is  NO  PRIN-
        TER.) The author suggests that other parameters be left at  their
        default  values until installation is complete, and the  user  is
        satisfied with the program's operation.

        D. Using the Pre-programmed Functions
             Before  running  BALLISTIC for the first time, a  file  con-
        taining  the "standard" drag values the program will  use  during
        its calculations must be produced.


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 5


            Although Ingalls' table was historically the most often  used
        for  this sort of work, several others are likely to  be  encoun-
        tered  today.  Many manufacturers, for instance, favor  the  "G1"
        table.  For the types of bullets typically used by reloaders  the
        results  will be very similar regardless of the  table  employed.
        Indeed,  the  variation between handloads or  factory  ammunition
        randomly selected from the same lot will probably be greater than
        the  discrepancies  noted between different  tables  over  normal
        shooting ranges.
             GENTABLE  Version 4.00 makes the following functions  avail-
        able:

                 FUNCTION             VELOCITY         ATMOSPHERIC
                                     max.   min.     temp.  pressure
             British 1909            4000   300       59      29.53
             Brit. 1929 Round Shot   1900   300       59      29.53
             "G1"                    4095   300       59      29.53
             Ingalls'                3600   300       60      30.00
             Ingalls' (extended)     4095   300       60      30.00

             The G1, British 1909 and Ingalls' functions are  practically
        identical  until low velocities are reached. All are well  suited
        to  calculations  involving typical hunting  or  pistol  bullets,
        i.e.,  rounded or slightly pointed spitzers. Results for  sharply
        pointed spitzers and boattails may not be as accurate with  these
        functions  as they might with some others. Less accurate  results
        will  also be obtained if ballistic coefficients calculated  with
        one  set  of  functions are used with another,  e.g.,  using  the
        coefficients  listed  in  Appendix C  (calculated  with  Ingalls'
        table) with the British 1909 tables. (Descriptions of the differ-
        ences  between the functions, and the projectiles used to  deter-
        mine them, may be found in HATCHER'S NOTEBOOK.)
             The  extended  Ingalls' table is simply the  standard  table
        continued to the maximum allowable program velocity following the
        method  used  in  Hatcher. Since the values above  3600  fps  are
        extrapolated, they will not be as accurate as those below.
             Many  of the companies producing reloading  components  feel
        that the G1 table is the best choice for all around use.  Indeed,
        most  of  the major ammunition manufacturers seem to use  the  G1
        drag  function  for calculating their own  "factory"  ballistics.
        Duplication  of  these tables is most easily  accomplished  using
        this selection. This function is used by SAAMI in calculating the
        tables they supply to the manufacturers as well.
             The Round Shot table should be of special interest to  those
        using black powder arms and shotguns. To the author's  knowledge,
        however,  no ballistics have been published using  these  tables.
        Consequently, ballistic coefficients are unavailable. The  author
        recommends that the user "roll his own" by assuming a coefficient
        of form equal to 1.00 and using the formula:

                                        M
                            B.C. =  ---------
                                    i * d * d

        where  M  is  the bullet mass (not weight) in pounds,  i  is  the
        coefficient of form, and d is the bullet diameter in inches.
             GENTABLE is started by typing its name (BAL-GEN) at the  DOS
        prompt, optionally following it with a command line argument. The
        user will be presented with a short menu and be prompted for  the
        number  of  the drag function he desires. The program  will  next
        prompt  for a filename to contain the new data. After  this  data


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 6


        has  been  entered, GENTABLE will create the new  function  file,
        overwriting any previous file with that name.
             Users  planning  the routine use of more than  one  function
        should  probably create them all ahead of time, giving  them  de-
        scriptive  file  names. The one to be used most often  should  be
        copied to BALISTIC.TAB.
             GENTABLE  will accept two arguments on the command line.  If
        the  flag  "-BIOS" is used all video output will be sent  to  the
        screen via BIOS calls. The default is to write directly to screen
        memory. The "-H" flag will display a short help screen.

             Once  a drag function file has been generated, BALLISTIC  is
        ready to run. A minimum working disk need only include the  files
        BALISTIC.EXE and BALISTIC.TAB. (If the graphics printer or  other
        defaults  require  changing,  BALISTIC.CFG must also  be  on  the
        working disk.) This should leave sufficient room for the  program
        to write plot and table files, and for the user to create a  fair
        sized database of his most currently used loads.













































        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 7




        3.  CALCULATING A BALLISTIC TABLE

             The goal in writing BALLISTIC was to produce a program which
        was at once versatile and relatively easy to use. While there  is
        still room for improvement, some success in both of these  direc-
        tions has been achieved. The program is primarily menu driven and
        prompts for all required data. Values entered (or calculated)  in
        one  part  of the program become the default for all  other  sec-
        tions.  This  default data is displayed during  the  prompts.  To
        accept  the displayed value press <ENTER>. To change  it,  simply
        enter the new data over the old.
             The output values calculated by BALLISTIC (the ballistic and
        trajectory tables) will be discussed in depth in section 8.

        A. Command Line Arguments
            BALLISTIC is started by simply typing its filename (BALISTIC)
        at  the DOS prompt, optionally following it with one or  more  of
        the following arguments:

           "-BIOS" will cause all video output to be performed using
              BIOS calls rather than direct screen writes. This will
              significantly  slow screen I/O, but may  be  necessary
              with computers that are not 100% IBM compatible.

           "-F" followed (with NO spaces) by the name of a BALLISTIC
              drag function file, will cause that file to be  loaded
              instead  of the default. For example,  -FG1.DAT  would
              cause  the  program  to load the  file  called  G1.DAT
              instead of the BALISTIC.TAB.

           "-H" (Help) will display a brief help screen, including a
              description of these arguments, then stop.

           "-NOCHECK" causes the initial check of the function  file
              to be skipped. This may be useful on machines  without
              a math coprocessor.

             Upon  startup, BALLISTIC will attempt to read  the  configu-
        ration file (BALISTIC.CFG, see Section 9), then load the  default
        function  file (either BALISTIC.TAB or that file  specified  with
        the "-F" option).
             If  the default file is not found in the current  directory,
        the  user will be prompted for the name of an alternate. The  de-
        fault file type is ".TAB". (To use a name with no extension enter
        "filename."  with the trailing period.) BALLISTIC will  read  the
        function  file, make a brief check to determine its  validity  (a
        checksum  procedure),  and present the user with the  main  menu.
        (Fig. 1)

        B. Calculating a Ballistic Coefficient
             The first step in developing a ballistic table is to  deter-
        mine the ballistic coefficient. If this value cannot be found  in
        one  of the sources described in section 10B, main menu choice  2
        may  be  used  to calculate it. Press <2> and  the  program  will
        prompt  for  an initial and final velocity, the  range  and  some
        atmospheric  data.  After this has been entered,  the  calculated
        value  of  the effective ballistic coefficient (as  well  as  the
        coefficient at standard conditions for the table chosen) will  be
        displayed.  (Fig. 2). Having determined a coefficient,  BALLISTIC


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 8


        can now calculate the table.
             Pressing the <ENTER> key will redisplay the main menu,  then
        <1> will bring up the input screen.

        C. The Ballistic Table
             Figure  3  shows sample input data for main menu  choice  1,
        calculating  the  ballistic table. Since  the  initial  velocity,
        range  and ballistic coefficient have been entered or  calculated
        on  a prior screen, they needn't be re-typed unless  a  different
        value is desired.
             The  bullet diameter prompt should be answered with the  ac-
        tual  bore  diameter in inches although input  of  the  firearm's
        nominal caliber (with leading decimal point, e.g., .22) is  often
        close enough.
             Throughout  the  program, entering a value of  0.0  for  the
        "effective" ballistic coefficient, will cause the program to  re-
        prompt  for the value of the coefficient at STP. The  "effective"
        value  will then be calculated from the STP value using the  cur-
        rent  values of temperature and pressure. (Temperature and  pres-
        sure  may be changed from either main menu choice 3, or the  con-
        figuration file.)
             In this example, entering a range value of 500 will create a
        table to 500 yards based on the performance noted over the  first
        100. If a value of zero had been entered for the range, it  would
        have caused the program to switch to "metallic silhouette  mode".
        The user would then be prompted for his choice of standard  rifle
        or  pistol  silhouette target distances (rounded to  the  nearest
        yard).  As long as the input value for range remains zero,  these
        alternate ranges will be used.
             The  final  necessary data item is the number  of  intervals
        into which the total range should be divided. The maximum  number
        allowed is the smaller of 50 or the total range (in yards).  This
        value is assumed to be four when operating in silhouette mode.
             Data entry is concluded with an optional table title.
             Figure 4 shows the table itself and the program's prompt for
        generation  of a sight table. At this point, should it be  desir-
        able to get a printed copy, press <1>. The program will  redirect
        ballistic table output to the system's LST: device and return  to
        the  prompt. A form feed (page eject) can be sent to the  printer
        by pressing <2>.
             The table can be written to an ASCII file (for inclusion  by
        a word processor or later printing) by pressing <3>. The  program
        will  prompt for a filename, which may exist. (Default  extension
        is  .OUT.)  The  file will in NO case be overwritten.  If  it  is
        already present, the data will be appended. If the file does  not
        exist, BALLISTIC will create it.
             The "New Data" choice, <5>, will return the user to the data
        entry  screen to calculate another ballistic table.  "Main  Menu"
        (<6>  or <ESC>) will jump directly back to the program's  initial
        screen.

        D. Sight (Trajectory) Tables
             Sight  tables can be produced by pushing <4> in response  to
        the prompt at the bottom of the ballistic table. The program will
        require that distance for which the weapon is "sighted in"  (this
        value need NOT have appeared in the range column of the  original
        ballistic table), the height of the sight above the centerline of
        the  bore,  and  any angular correction for  uphill  or  downhill
        shooting.
             In  silhouette mode, entering a value of zero for  the  tar-
        geted range will cause the prompt to take the form of which  sil-


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 9


        houette  (chicken, pig, turkey or ram) the weapon is zeroed  for.
        The user should respond with the first letter of the  appropriate
        target.
             If  the program is not in silhouette mode, entering a  range
        of zero for the targeted range will cause the program to reprompt
        for the bullet's angle of departure (in decimal degrees).
             Output  of  this table can be diverted in exactly  the  same
        manner  as the ballistic table. Pressing <5> allows the  user  to
        enter  new data for another sight table (using the  current  bal-
        listic  conditions), and <6> (or <ESC>) returns to the  ballistic
        table and prompt.

        E. Plotting the Trajectory
             Pressing <4> at the sight table prompt will present the user
        with a graphic representation of the bullet's trajectory.  Range,
        in  yards,  will be shown along the bottom, with  tic  marks  ap-
        pearing at distances corresponding to the entries in the  ballis-
        tic  table. Dotted lines will appear vertically at  the  distance
        for  which the weapon is zeroed and horizontally at the  line  of
        sight.  The  trajectory  (in inches above or below  the  line  of
        sight)  is  indicated  on the left  scale.  (Additional  commands
        available in graphics mode are discussed in section 7.)  Pressing
        <X> (or <ESC>) will return the user to the sight table prompt.








































        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 10




        4.  OTHER MAIN MENU FUNCTIONS

        A. Modifying the Ballistic Coefficient
             Those living at high altitude or in areas of extreme temper-
        ature  will  want to adjust published (sea level) values  of  the
        ballistic  coefficient to more accurate local values.  Main  menu
        choice  3 may be used to accomplish this (Figure 5). The  program
        will need to know the altitude, barometric pressure and  tempera-
        ture in addition to the value of the ballistic coefficient at STP
        (Standard Temperature and Pressure, the published value).
             One  should  bear in mind that these  meteorological  values
        (especially  temperature) ALSO affect the initial velocity  of  a
        given load. This effect is beyond the ability of this program  to
        calculate  but descriptions of it may be found in many  reloading
        manuals.

        B. Changing the Cross Wind Value and Angle
             Menu choice 3 also allows for adjustment of the speed of the
        cross  wind  used to calculate wind deflection. By  default,  the
        program sets this value to 10 miles per hour. It should be  noted
        that  deflection  is linear with wind speed, i.e., a 5  mph  wind
        will  deflect  a bullet by exactly half the amount of  a  10  mph
        wind.
             The angle of the cross wind may be changed here as well.  In
        program coordinates, 0 degrees (the default) is blowing  directly
        across the bullet's path, either left to right or right to  left.
        90 degrees would be either a head or tail wind with no cross wind
        component. These values are used ONLY for calculating deflection.
        Their  effect  on other aspects of the  trajectory  is  currently
        ignored.

        C. Changing the Input Function Table
             Starting  with version 2.00, it is possible to change  func-
        tion tables without restarting the program. Pressing <4> from the
        main menu will cause a prompt for the new file name. As noted  in
        subsection  A, the default extension is ".TAB" which need not  be
        entered.  Users should remember that to enter a filename with  no
        extension, the trailing period is required. Simply press <ESC> to
        abort the function and return to the main menu.
             This option doesn't alter the fact that BALISTIC.TAB (or the
        filename  supplied  with the "-F" command line  option)  will  be
        loaded  (if  present) when the program is first  started.  It  is
        provided only for users who routinely use more than one  function
        table.  Even so, program startup will be simplified if the  table
        most commonly used is copied to BALISTIC.TAB.
             Loading  a new function file will not reset the  temperature
        and  pressure to the defaults for the new table. Thus, some  care
        should be taken if switching between two tables that use  differ-
        ent standard conditions.

        D. Miscellaneous Functions Menu
             Pressing  <5> at the main menu prompt will present the  user
        with  the miscellaneous functions menu. From this menu  the  user
        may choose to calculate recoil, shot statistics, the minimum  ne-
        cessary twist for bullet stabilization, or the point blank  range
        for  a  given target size. These functions will be  discussed  in
        section 5 of this document.
        E. Database Function Menu
             Pressing <6> at the main menu prompt will cause the  program


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 11


        to  enter the database section. Both internal and external  data-
        bases  are  supported.  When entered, the program  looks  in  the
        current  directory  to  see if an executable  file  (.BAT,  .COM,
        or .EXE)  called  BAL-DBF exists. If it does (and  if  sufficient
        memory is installed), control passes to that program. If not, the
        internal  database is invoked. Section 6 will explain  the  func-
        tions available there in greater detail.
























































        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 12




        5.  THE MISCELLANEOUS FUNCTIONS MENU

             Several interesting calculations not as often needed by  the
        shooter have been grouped together in the miscellaneous functions
        menu.

        A. Calculating Recoil
             The recoil energy and velocity of a weapon can be calculated
        using  miscellaneous menu choice 1, provided its weight  and  the
        weight of the powder charge are known (Figure 6). This number can
        be deceptive as the perception of recoil by different shooters is
        VERY subjective. In addition to the physics involved, there  must
        be some consideration given to the fit of the gun to the individ-
        ual,  shape  and  material  of the  stock  or  grips,  etc.  Many
        shooters,  for  instance, fear the recoil of a 12  gauge  shotgun
        (even  with  target  loads) while thinking  nothing  of  using  a
        6 pound  30-06 despite the fact that the "calculated" recoil  can
        be  quite similar. Such recoil is often in the eye (or  shoulder)
        of the beholder.
             This  section also calculates whether a "muzzle brake"  will
        be useful in reducing felt recoil by allowing the user to  deter-
        mine  the rough percentage of recoil caused by the bullet  itself
        (which  a muzzle brake cannot affect). The value produced is  the
        level  to which recoil energy would be reduced if there  were  no
        powder  at all. This is a crude estimate of what a shooter  might
        achieve  with  a perfect brake. (Bear in mind, however,  that  NO
        muzzle brake is 100% effective and the actual amount of reduction
        will be less.)
             The recoil calculation used by BALLISTIC is a rough approxi-
        mation,  similar  to that discussed in the  March  1988  American
        Rifleman. It would be extremely challenging to write a completely
        accurate description of the recoil process. It would also be very
        difficult  to use as many variables are involved  including,  but
        not  limited to bore cross sectional area, length of barrel,  at-
        mospheric pressure and temperature, type of powder, loading  den-
        sity,  etc. The values calculated here should not  be  considered
        accurate  to  more than 10-15%. Barrel/powder  combinations  that
        produce excessive muzzle flash will be even less accurate.

        B. Calculating Minimum Twist
             The slowest twist that will stabilize a bullet in flight may
        be calculated using miscellaneous menu choice 2. The formula used
        here is the approximation credited to Sir Alfred George Greenhill
        in 1879. Necessary input data includes the bullet's diameter  and
        length in inches and specific gravity.
             The  default value for specific gravity is the average  den-
        sity  of  a  typical jacketed bullet. Also listed  on  the  input
        screen  (for  reference) is the specific gravity  of  pure  lead.
        Specific  gravities  (or densities) of other bullet  alloys  seem
        difficult  to find. The user should be aware that these  specific
        gravities can NOT be added algebraically. That is, an alloy  con-
        taining  50%  lead and 50% tin will NOT have a  specific  gravity
        that  is the average of the two pure metals. Appendix D  of  this
        document contains specific gravity data for a small selection  of
        common alloys.
             The  angle made by the rifling grooves and the axis  of  the
        bore  is  known as the "helix angle". As some  European  manufac-
        turers  describe the twist using this value rather than the  cus-
        tomary "1 turn in xx inches", BALLISTIC provides both numbers.


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 13


             The  author  has been informed that this  approximation  was
        originally  intended  for use with  artillery  projectiles.  More
        recent findings suggest that, for typical small arms  ammunition,
        a  Greenhill number smaller than the default of 150.0 may be  ap-
        propriate,  especially under adverse atmospheric conditions  such
        as rain and snow (100 has been recommended). A discussion may  be
        found  in the June 1988 issue of Rifle. ("Shooting the  Kalashni-
        kov",  pp.  28 - 31.) This number may  be  "permanently"  changed
        using the configuration file.

        C. Calculating the Point Blank Range
             Given the velocity, sight height and ballistic  coefficient,
        a point blank range may be determined for a specific target size.
        The point blank range is the maximum range for which a bullet can
        be  counted upon to strike a target by simply aiming  the  weapon
        directly  at  its center. For example, given a 6 inch  target,  a
        point blank range may be calculated so the bullet is always  less
        than 3 inches above or below the line of sight.
             BALLISTIC  will calculate this distance for a  given  target
        size  and  tell  the user for what range  the  weapon  should  be
        sighted,  the maximum point blank range and what  trajectory  the
        bullet  will  have at 100 yards. (If the targeted range  is  less
        than  100  yards, the trajectory at 25 yards will  be  given  in-
        stead.)  This  figure may be used to sight the  weapon  when  the
        targeted range is either unrealistically far away, or an  unusual
        number  of yards. For instance, in the example  screen,  sighting
        the weapon 2.9 inches high at 100 yards will allow the shooter to
        hit  a 6 inch target out to 257 yards, without allowing  for  any
        holdover. (However, the bullet will only strike the CENTER of the
        target at 219 yards.)
             BALLISTIC  always  calculates the point blank range  for  an
        uphill/downhill  angle of zero degrees. As during previous  input
        screens,  entering a value of zero for the "effective"  ballistic
        coefficient  will  cause  the program to re-prompt  for  the  STP
        value.

        D. Correction from Instrumental to True Muzzle Velocity
             When  bullet velocities are measured by chronograph,  it  is
        necessary to set the first (or start) screen far enough away from
        the  muzzle to avoid blast effects. The second (or  stop)  screen
        must  be set a fixed distance from the first so the elapsed  time
        between the two can be measured. Unfortunately, the speed  calcu-
        lated  under these conditions is NOT the actual muzzle  velocity,
        but  rather  the average speed of the bullet  over  the  interval
        between  the two screens. While the difference is usually  small,
        it  is possible to make the correction to the true muzzle  veloc-
        ity, provided the screen distances and the ballistic  coefficient
        are known. Miscellaneous menu choice 4 provides for this calcula-
        tion.

        E. Calculation of Velocity Statistics
             Not all bullets from the same load will leave the barrel  of
        a  gun at exactly the same speed. Some statistical  variation  is
        also to be expected in the measurement of any physical  quantity.
        Analysis  of  a string of measured velocities (up to 25)  may  be
        accomplished  using miscellaneous menu choice 5. Output data  in-
        cludes  the  maximum  and minimum velocity  values  (and  extreme
        spread),  the average velocity for the string, and  the  standard
        deviation  of the sample. BALLISTIC updates these values as  each
        point  is entered, allowing the user to determine the  effect  of
        each  shot  on the statistics. Pressing <ESC> at the  prompt  for


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 14


        "Next  Velocity" will display the statistics menu,  allowing  the
        user to correct or delete the entry list. From here, pressing <5>
        (or <ESC>) will return to the miscellaneous menu.
             A  complete discussion of statistics is beyond the scope  of
        this document, but it should be noted that standard deviation  of
        a  velocity string is a measure of data or sampling scatter,  and
        NOT necessarily an indication of the target accuracy of a partic-
        ular  load.  (Accurate loads will, however, tend  to  have  lower
        standard  deviations.) Examination of the standard deviation  can
        show  whether a particular measurement should be included in  the
        average.  For  example, in a string of 10 shots or  less,  it  is
        usually safe to delete any velocity that deviates by more than  2
        standard  deviations from the average as a  statistical  anomaly.
        BALLISTIC  will mark each shot that exceeds the  current  average
        value by more than one standard deviation (SD). A single star (*)
        indicates  difference of more than one but less than two SD.  Two
        stars (**) indicate a value more than 2 SD from the mean.

        F. Calculation of Target Statistics
             BALLISTIC  will  also provide some statistical  analysis  of
        targets, including group center, group size and an evaluation  of
        "true  fliers".  This section is most easily used  when  the  x,y
        coordinates  of  each shot can be read directly from one  of  the
        "sighting in" targets commonly supplied by some firearms manufac-
        turers.  (These  targets are marked off in small  squares  rather
        than the concentric circles used for "bullseye" shooting.)  Enter
        the  coordinates  of each shot (up to 10 total) and  the  program
        will  display  the x,y coordinates of the group center,  and  the
        size  of  the  group as measured across the  two  shots  furthest
        apart. As with the velocity statistics section, pressing <ESC> in
        response to a coordinate prompt will cause the statistics menu to
        be displayed.
             Each  shot will be marked for geometric standard  deviations
        in a manner similar to that used for velocity statistics. A  sin-
        gle  star  will indicate that the shot exceeds one  SD  from  the
        group  center  in the x direction, the y direction OR  both.  Two
        stars  indicates a deviation of more than 2 SD from  the  current
        group  center.  Shots which lie outside of 2 SD  from  the  group
        center,  especially  in the absence of other  "wide"  shots,  can
        usually be safely labeled "fliers".























        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 15






        6.  DATABASE FUNCTIONS

             While writing BALLISTIC, the author was convinced that  some
        kind of database feature would prove extremely useful. The  prob-
        lem  confronting  him was what kind of database to  provide.  The
        established  databases,  like dBase III+ or  Symphony,  might  be
        preferred  by users with access to them, but those  without  them
        would then be left out in the cold. Clearly some type of internal
        database  was  necessary. Ideally, it would be able to  read  ex-
        isting database files.
             The  solution was to provide both options. Version  4.00  of
        BALLISTIC  incorporates a rudimentary database program,  using  a
        simple  ascii file format for storage. Users without access to  a
        more comprehensive database program can use this feature to build
        up their own library of ballistic information.
             Those  fortunate  enough to have access to one of  the  more
        powerful commercial database managers have two options. They  may
        use the "report generation" features of their databases to create
        a BALLISTIC compatible database, or they can choose to ignore the
        built  in feature and have BALLISTIC run their program  directly.
        (BALLISTIC  will remain in memory.) On exiting from the  external
        program,  BALLISTIC  will attempt to read a file  containing  the
        updated parameters returned by their program.

        A. Internal or External Databases
             Upon  pressing  the <6> key from the  main  menu,  BALLISTIC
        attempts  to determine which of its database options to  execute.
        It  first  searches (in the current directory ONLY)  for  a  file
        called  BAL-DBF.BAT,  a batch file that will start up  the  users
        database  program. If that file cannot be found, it will  attempt
        to run either BAL-DBF.COM or BAL-DBF.EXE. If none of these  files
        exist, the program executes the internal database.
             If  the  internal  database is activated,  and  the  program
        cannot  find the datafile, only options 5 and 6 (Print Label  and
        Select  Database) will be active. If the database is  found,  but
        contains no records, option 4 (Append Record to Database) will be
        operational as well.

        B. Display Database
             Assuming  the  internal database has been selected,  and  an
        appropriate database file was found, menu choice 1 will allow the
        user  to display individual records on the screen. Several  "sub-
        options"  will  be available. Pressing <1> or <2> (or  the  arrow
        cursor  keys) will display the previous or next  record,  respec-
        tively.  If the user already knows which record is  of  interest,
        choice  3 will allow him to proceed directly to that record  num-
        ber. The <HOME> and <END> keys will at all times take the user to
        the first or last record in the current dataset.
             Choice  4  (Accept data) will read the  currently  displayed
        record into BALLISTIC. If the record contains muzzle velocity and
        another  velocity recorded at a given distance, the program  will
        ask  the user if the ballistic coefficient should  be  calculated
        for the current drag function.

        C. Search Database
             Database menu choice 2 will allow the user to perform a text
        search  of the records. Upon entering the search subroutine,  the


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 16


        user  will be prompted for a search string, and the  search  will
        begin  with the last record displayed. Record movement  keys  are
        similar  to  those discussed in the previous  section,  with  the
        addition  of  choice  4 (New Key) which will allow  the  user  to
        specify a new search key. The <HOME> and <END> keys will initiate
        a forward or reverse search from either end of the database.

        D. Delete Record from Database
             Database  menu  choice  3 will allow the user  to  delete  a
        record  from  the current database. Records may be  displayed  as
        described  in section B, and the currently displayed  record  de-
        leted by pressing <4>.
             The first time the database is changed, whether by appending
        or deleting a record, the original database file is backed up  by
        copying it to <database filename>.BAK. If the user should  decide
        that  an error was made, the backup file can be recopied  or  re-
        named.

        E. Add Record to Database
             This option (number 4 from the Database menu) will append  a
        new  record to the end of an existing database. The user will  be
        prompted  for all the necessary data, using the  current  program
        values as the default.

        F. Print Reloading Label
             Pressing  <5> from the Database menu will present  the  user
        with  a function virtually identical to the Display  option.  The
        primary  difference  is  that sub-option 4 will  now  direct  the
        record's image to the printer, for including in boxes of reloaded
        cartridges.

        G. Select Database File
             Option  6  (Select  Database File) will allow  the  user  to
        choose  a new database file for use. After being prompted  for  a
        name,  the  program will attempt to open the file  and  read  the
        header record. If the file does not exist, the user is given  the
        option  of creating it. Since the performance of several  of  the
        database functions degrades as file size gets larger, this option
        allows the user to keep several smaller databases available,  and
        switch between them as necessary.

        H. Internal Database Structure
             Data  files for the internal database may be  created  using
        BALLISTIC  itself, the "report" option of most  commercial  data-
        bases, or any ascii word processor. Each line must be EXACTLY 120
        characters  long, not counting the CR/LF pair used as a  termina-
        tor.
             The first line should contain (starting in the left  column,
        WITHOUT  leading spaces) the number of records contained  in  the
        database,  a space, the version number of BALLISTIC  (4.00),  an-
        other  space,  and a database comment. If necessary, it  must  be
        padded with blanks on the right to bring the total line length to
        120 characters.
             Second and subsequent lines will consist of a chart title or
        load  comment exactly 79 characters long (padded with  blanks  if
        necessary), followed (starting in column 80) by:

             Bullet Weight    (integer, bullet weight in grains)
             Caliber          (real, bullet diameter in inches)
             Initial Velocity (real, f.p.s)
             Final Velocity   (integer, f.p.s)


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 17


             Range            (integer, range for final velocity in yds.)
             Bal. Coeff.      (real, ballistic coeff. at STP, can be 0)
             Powder Weight    (real, powder weight in grains, can be 0)

        Again,  the values must be separated by at least one  space.  The
        whole line must be exactly 120 characters long, not counting  the
        terminating CR/LF pair.

        I. External Database Return Values
             The values from an external database program can be imported
        into  BALLISTIC through the file BALISTIC.RET. The external  pro-
        gram  should  create  this ascii file  containing  the  following
        information:

         (Line 1)
            Chart title or comment (79 characters max., ending in CR/LF)

         (Line 2 - Each entry separated by a space, line ends with CR/LF)
            Bullet Weight     (integer, bullet weight in grains)
            Caliber           (real, bullet diameter in inches)
            Initial Velocity  (real, f.p.s)
            Final Velocity    (integer, can be zero)
            Range             (integer, range for final velocity in yds.)
            Bal. Coeff.       (real, ballistic coeff. at STP, can be 0)
            Powder Weight     (real, powder weight in grains, can be 0)

         (Maximum length of Line 2 must be less than 79 characters)




































        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 18






        7.  GRAPHICS MODE FUNCTIONS

             It  is possible to display several useful bullet  character-
        istics  graphically  (as a function of range). Graphics  mode  is
        entered  by  pressing <4> from the trajectory table  prompt.  The
        following commands are available to users only while in  graphics
        mode.

        A. Changing the Axes
             Pressing <A> (for axes) will allow the user to set a  "view-
        port"  in the current graphics display. The program  will  prompt
        for starting and ending range, and the maximum and minimum  ordi-
        nate  then  plot only that portion of the  chosen  function  that
        falls  in the described "window". The minimum and maximum  allow-
        able  range  values are 0 and the maximum  table  range,  respec-
        tively. Pressing <S> (for start) will reset the plot to the  ini-
        tial (program chosen) limits.

        B. Saving and Restoring Plot Data
             If  <W>  is pressed, graphics data (for  the  current  range
        viewport ONLY) will be written to a file. The user will first  be
        prompted for a filename and any existing file with that name will
        be overwritten. (There is NO default extension.) ONLY the current
        data (plotted with a solid line) will be saved to the file.  This
        data  may be "merged" with the current graphics plot at any  time
        by  pressing <R>. When read back, it will be scaled  and  plotted
        using a different color (if available) to distinguish it from the
        current  plot. The number of files that can be read back is  lim-
        ited  only by the user's ability to tell them apart on  the  gra-
        phics  screen. Data types CANNOT be mixed, i.e., the user  cannot
        read a trajectory plot onto an energy display.

        C. Graphics Cursor
             The coordinates of a given point (to the nearest pixel)  can
        be  displayed with the graphics cursor feature. Pressing  <C>  in
        graphics  mode  toggles the appearance of a small,  cross  shaped
        cursor,  and two boxes at the top of the plot containing the  co-
        ordinates of the displayed point. The current function value will
        be on the left and range (in yards) will be on the right.
             The  cursor may be moved around the screen (one pixel  at  a
        time) through use of the the cursor keys. Holding the <SHIFT> key
        down  while manipulating the cursor keys will cause faster  move-
        ment (about 16 pixels).
             Increased (apparent) resolution can be obtained by using the
        <A>xes  command to expand the screen around the region of  inter-
        est.  (This  actually just makes each pixel represent  a  smaller
        area.)

        D. Hardcopy of Graphic Data
             A  hardcopy  of the plot (actually, a screen  dump)  may  be
        produced by pressing <P> if an graphics printer is present. (Sup-
        ported  printers are discussed in the configuration file  section
        under PTYPE.) Depending on the display adapter and printer,  this
        may require several minutes. (A typical EGA graphics screen  dump
        is about 30k, roughly the size of a ten page document, and  takes
        as  long  to  print.) Printing may be abandoned at  any  time  by
        pressing a key.


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 19


             Users  with a printer not listed may want to try  using  the
        <PRINT  SCREEN> key which will usually require that  the  program
        GRAPHICS.COM (from the DOS system diskette) be run before BALLIS-
        TIC  is  started. Neither method will work with all  display  and
        printer  combinations. (Registered users may, of course,  contact
        the author and request support for their particular printer.)

        E. Plotting Other Functions
             When  the  plotting command is first issued, a plot  of  the
        bullet's trajectory versus range is immediately generated.  Plots
        of  several  other  parameters as a function of  range  are  also
        available.  Pressing  <V> will present the user with  a  plot  of
        velocity, <M> with momentum, <D> with deflection and <E> with the
        bullet's  kinetic  energy. The original trajectory  plot  may  be
        restored by pressing <T>.

        F. Miscellaneous Graphics Commands
            Pressing  <X>  or the <ESC> key will return the user  to  the
        sight  table prompt. <G> will toggle the appearance of a grid  on
        the plot and <H> will provide a short help screen.











































        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 20






        8.  THE BALLISTIC TABLE

             The primary purpose of BALLISTIC is to produce a  "ballistic
        table"  showing the remaining velocity at given ranges. The  pro-
        gram is also capable of supplying a wealth of additional informa-
        tion derived from these values. (Refer to Fig. 4)

        A. The Table Header
             The ballistic table header merely provides a "data echo"  of
        the  conditions used to produce the accompanying table. In  addi-
        tion  to the table title and other user supplied data,  two  cal-
        culated values are displayed here.
             Sectional density of the bullet is defined as the weight  of
        the  projectile in pounds, divided by the square of its  diameter
        (in  inches). Sectional density can provide the reloader  with  a
        handle on two important pieces of information. First, it provides
        a measure of how fast a bullet can be safely "pushed".  Certainly
        for a given caliber, bullets with a high sectional density should
        not be loaded to as high a velocity as bullets with a low  value.
        Secondly, a bullet with high sectional density will tend to  have
        greater  penetration than a projectile with a smaller  value.  An
        excellent  discussion  of sectional density and its  relation  to
        hunting  bullets may be found in June 1988 issue of The  American
        Rifleman.  ("From the Loading Bench: Sectional  Density  Counts",
        page 16)

        B. Functions of Merit
             There  is great interest in a simple calculation that  would
        allow shooters to rank quantitatively the terminal performance of
        their  loads. Given the difficulty of obtaining  reliable  scien-
        tific data on stopping power (the subjects tend to object...),  a
        universally  accepted  description of it has been  a  Holy  Grail
        among gun gurus for practically as many years as there have  been
        cartridges.  (It  has  been the author's  observation  that  many
        shooters find a gun that they like FIRST, THEN try to justify  it
        with  the calculation that makes their choice look best!) In  the
        interest  of  peace and harmony, the user may choose one  of  six
        "functions  of merit" to be displayed in the header.  These  are,
        IPSC Power Factor, Tappen WAVE Function, Taylor Knock Out, Josse-
        rand Energy Transfer, Hatcher RSP or Coefficient of Form (i). The
        user can specify his particular choice with BALISTIC.CFG (section
        9).  Default  is the Coefficient of Form (which plays  no  favor-
        ites).  All  functions are determined using the  muzzle  velocity
        rather than velocity at range.
             The  coefficient of form relates the shape of the bullet  in
        question to the shape of the projectile used in constructing  the
        drag function.
             The IPSC Power Factor is a number used by the  International
        Practical  Shooting Confederation to determine whether a  compet-
        itor's  handgun load is to be scored as "major" or "minor"  cali-
        ber. It is calculated by multiplying the bullet weight in  grains
        by  the  initial velocity and dividing by 1000.  Any  load  whose
        power factor is over 175 is scored as major. Factors between  125
        and 175 are scored as minor caliber. Loads with a power factor of
        less than 125 are not legal for IPSC competition.
             Taylor Knock Out was devised by John Taylor to describe  his
        experiences  with bullet performance in large game. It's  defined


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 21


        as  bullet  weight (in pounds) times velocity  times  the  bullet
        diameter in inches. (See "African Rifles and Cartridges" by  John
        Taylor for a more thorough description.)
             General  Julian  Hatcher, following his involvement  in  the
        Thompson-LaGarde  experiments in wound ballistics, established  a
        widely used scale he called the Relative Stopping Power (RSP).  A
        simplified  version has been credited to Mel Tappan in  his  book
        SURVIVAL  GUNS. Called the WAVE factor, (for Weight, Area,  Velo-
        city  and  Efficiency) it is typically about 1/2 the  actual  RSP
        listed  by Hatcher. Defined (as the name implies) as the  product
        of  weight, area, and velocity divided by 1000, it is  frequently
        modified  by a rather arbitrary bullet shape factor (the  effici-
        ency).  Hatcher gave a "slightly flat pointed" bullet an  effici-
        ency of 1.0, and scaled everything else from 0.9 (for round nosed
        bullets) to 1.25 (for semi-wadcutters or jacketed hollow points).
        Tappen also adopted this factor. In the value provided by BALLIS-
        TIC  the efficiency is ALWAYS assumed to be 1.0 and  any  scaling
        for bullet shape must be done by the user.
             Recently  popular, (although first described some time  ago)
        is  the concept of "energy transfer" or "energy dump" as  an  ap-
        proximation  of  stopping power. The  Josserand  Energy  Transfer
        Function provided by BALLISTIC is defined as the product of  area
        and kinetic energy.

        C. Energy
             The  kinetic  energy of a moving body is  described  by  1/2
        times the mass of the body multiplied by the square of its veloc-
        ity. It may be thought of as the amount of work the bullet can do
        on its target. The unit (foot-pounds) is the amount of work  nec-
        essary to lift an object weighing 1 pound to a height of 1  foot.
        Many  hunters feel this quantity is good to use when  determining
        the  suitability of a given load for a particular game animal  as
        (under certain conditions) it is probably related to the "killing
        power" of a projectile. One cannot rely entirely on this  simpli-
        fied  picture, however, as terminal ballistics is also  concerned
        with bullet and target construction.

        D. Momentum
             As,  in  any collision of moving bodies,  momentum  is  con-
        served,  it  may be thought of as the "striking"  or  "knockdown"
        power of a projectile. This can be slightly misleading,  however,
        as  the conservation applies only to the total "system"  of  par-
        ticles.  If,  for example, the bullet completely  penetrates  the
        target,  it may retain a large portion of its original  momentum,
        transferring to the target only that part it actually lost. It is
        defined as the mass of a body times its velocity.

        E. Maximum Ordinate
             The maximum ordinate calculated by BALLISTIC is the greatest
        distance  that a projectile will pass above a straight  reference
        line  drawn from the muzzle to its current position at any  given
        range.  It is NOT the same as the mid-range trajectory  which  is
        defined  as  the bullet's trajectory (above the  line  of  sight)
        exactly  half  way to the indicated range. It  is  also  slightly
        different  from the maximum height (which is also  referenced  to
        the line of sight).

        F. Deflection
             Deflection  is  the amount of sideways motion which  can  be
        attributed  to the action of a crosswind on the projectile.  This
        value  is  directly proportional to wind speed, that is,  if  the


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 22


        wind  at the site is 5 m.p.h. and the figures calculated are  for
        10 m.p.h., simply divide the table values by 2.
             Deflection  should not be confused with drift, the  sideways
        motion  caused  by the bullet's spin. Deflection is  typically  a
        much larger figure. For example, at 1000 yards the drift of a .30
        caliber service bullet is only about 7 inches. Compare this value
        with  the roughly 175 inches of deflection produced by  the  same
        bullet in a 10 m.p.h. cross wind.

        G. Drop
             From the instant a bullet leaves the barrel, gravity and air
        resistance conspire to bend its path from that along which it was
        originally  projected (the bore line, NOT the line of  sight).  A
        bullet's  drop is the distance it has fallen away from that  ini-
        tial path, known as the line of departure. This is that  quantity
        to  which shooters refer when speaking about the "flatness" of  a
        particular loading.

        H. Lead
             Lead  is  primarily of interest to those who hunt.  By  now,
        most experienced hunters will have realized that aiming  directly
        at  an  animal running across the path of the  bullet  is  almost
        guaranteed  to produce a miss. By the time the bullet has got  to
        the point of aim, the animal is somewhere else. The trick,  then,
        is to know how far ahead of the target one needs to aim so bullet
        and target arrive in the same place at the same instant.
             In BALLISTIC, the units used for this figure are "inches per
        m.p.h. of target speed" and are used as follows. Imagine a target
        moving  10 m.p.h. across the path of the bullet at a distance  of
        100  yards.  Examining  the table (Fig. 4) produces  a  value  of
        2.0 in./m.p.h. at that distance, so the proper target lead  would
        be (10 m.p.h.) times (2.0 in./m.p.h.) or 20.0 inches. Wind  speed
        (deflection) is NOT taken into account during the calculation  of
        lead.

        I. Time of Flight
             Time  of flight is simply that; the amount of time,  in  se-
        conds,  necessary  for a bullet to travel the distance  from  the
        muzzle to the indicated range.

        J. Trajectory
             Loosely speaking, trajectory is the path of a moving projec-
        tile. BALLISTIC provides both tabular and graphic representations
        of  this path, relative to the weapon's line of sight, i.e.,  the
        line drawn directly from the sights (either "iron" or telescopic)
        to the target. The user should note that the actual trajectory of
        a small arms bullet coincides with the line of sight at only  two
        places. Once, a few yards from the muzzle, (when its motion rela-
        tive  to the line of sight is upward) and again at  the  targeted
        (or "sighted in") distance (when it crosses in a downward  direc-
        tion).
             Trajectory  may  be described in several ways, but  the  two
        most  common are "inches" and "minutes of angle". When  expressed
        in  inches it is the actual distance of the projectile  above  or
        below  the line of sight. This value may be converted to the  ne-
        cessary  angular correction (minutes of angle, or M.O.A.) by  ap-
        plying the conversion factor of 1 M.O.A. = 1.047 inches/100  yds.
        This  value is particularly useful as most sight adjustments  are
        calibrated  in minutes of angle. Target scopes are usually  cali-
        brated  at  1/4 minute per "click", while iron sights may  be  as
        much  as  1 minute per click. (In this notation, minutes  do  NOT


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 23


        refer  in  any way to units of time, but rather to 1/60th  of  an
        angular  degree.) BALLISTIC provides both systems in its  trajec-
        tory tables.
             Shooting  at a target either uphill or downhill  will  cause
        the  bullet to shoot higher than it is aimed. Under these  condi-
        tions, the projectile doesn't make a second crossing of the  line
        of  sight  until  AFTER the targeted distance.  The  term  "level
        firing" used here may be slightly misleading. Most small arms are
        sighted  so the initial angle of the bullet's departure  is  very
        slightly  up. (This angle is known as the "angle  of  departure",
        and for a typical rifle, is less than one degree.) Firing  uphill
        or downhill usually produces a tilt that dwarfs this small value.



















































        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 24






        9.  THE CONFIGURATION FILE

             Version  4.00  of BALLISTIC will allow certain  program  de-
        faults to be overridden with a configuration file,  BALISTIC.CFG.
        The  file  is  searched for ONLY in the  current  directory  when
        BALLISTIC is first started and is NOT necessary for operating the
        program.

        A. Using the Configuration File
             The  configuration file is a user-created, ascii text  file,
        each  line  of  which contains the name of the  parameter  to  be
        changed, one or more spaces, and the new value. Parameters listed
        as "must be integer" may NOT contain a decimal point or  exponen-
        tial notation. Certain parameters may only accept ON and OFF  (or
        similar string choices) as values. Entries are NOT case specific.
              The following file would turn off the bell, set the default
        altitude to 2000 feet and set the video write mode to BIOS:

        BELL OFF
        Altitude 2000
        video bios


        B. Allowable Parameters
             The following parameters are allowable for BALLISTIC v4.00:

           ALTITUDE - The altitude to be used in the ballistic table
              and  ballistic coefficient calculations. May be  REAL.
              The default value is zero.

           BELL - Controls  whether  the console bell  is  rung  for
              errors  detected by the program. Allowable values  are
              ON and OFF. The default is BELL ON.

           BKG - Determines the background text screen color. Allow-
              able  values  are 0 through 7. Must  be  INTEGER.  The
              default  value  is 0. This parameter  is  illegal  for
              systems  having only a monochrome text/graphics  card.
              Following are the colors corresponding to each value:
                  0 - Black             4 - Red
                  1 - Blue              5 - Magenta
                  2 - Green             6 - Brown
                  3 - Cyan              7 - Lt. Gray

           COLOR - The  text color. Default is 7. See BKG for a  de-
              scription of allowable values and restrictions.

           FUNCTION - The "function of merit" to be displayed in the
              table  header. Default is 0, for Coefficient of  Form.
              The  choices are described in more detail  in  section
              8B. Acceptable values are:
                  0 - Coefficient of Form
                  1 - IPSC Power Function
                  2 - Taylor Knock Out (TKO) Value
                  3 - Tappen WAVE Function
                  4 - Josserand Energy Transfer Function
                  5 - Hatcher Relative Stopping Power (RSP)


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 25



           GREENHILL - This option specifies a new Greenhill  number
              for  use in the minimum twist calculation.  Acceptable
              values range from 75.0 to 200.0. The default is 150.0.

           GRID - This  option informs the program whether the  grid
              should initially appear in the Plot function. This may
              also be toggled from the Plot function itself.  Allow-
              able values are ON and OFF.

           PCHECK - The  type  of printer check to be  performed  by
              BALLISTIC   before  printing  tabular  data.   Non-IBM
              printers and computers may have trouble with the  BIOS
              level check. Default is 2. Acceptable values are:
                  0 - Don't perform any check
                  1 - Perform BIOS check of printer
                  2 - Prompt for user check
                  3 - Perform both checks

           PRESSURE - The atmospheric pressure used for the  ballis-
              tic table and ballistic coefficient calculations.  May
              be  REAL. The default value is dependent on the  func-
              tion file chosen.

           PRINTER - Line width in characters of the system printer.
              Must  be an INTEGER value from 80 to 200.  Default  is
              80.

           PTYPE - Type  of  graphics printer connected  to  system.
              This  option is only used by the graphic  screen  dump
              routine.  Default is 0, for no graphics printer.  Cur-
              rently supported values are:
                  0 - No graphics printer
                  1 - Hewlett Packard LaserJet
                  2 - Star SG-10 (in IBM mode)
                  3 - IBM Proprinter
                  4 - IBM Graphics Printer
                  5 - Epson FX-80
                  6 - C. Itoh 8510A
                  7 - Hewlett Packard PaintJet

           TEMPERATURE - The  temperature to be used  for  ballistic
              table  and ballistic coefficient calculations. May  be
              REAL.  The default value is dependent on the  function
              file chosen.

           TCHECK - Determines whether the program performs a  check
              sum  test of the function file after reading  it.  De-
              fault value is ON, allowable values are ON or OFF.

           VIDEO - Determines  the  method  used  to  write  to  the
              screen.  Allowable  values are BIOS and  DIRECT.  BIOS
              causes all output to be done through the use of system
              BIOS  calls.  This mode may be useful  for  computers/
              graphics  adapters that are not 100%  compatible  with
              the  IBM  PC family. It does,  however,  significantly
              slow output. Using the DIRECT option causes all screen
              output to be written directly to video memory. Default
              is DIRECT.




        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 26






        10.  SOURCES OF DATA

             Much  of  the data necessary for ballistic  calculations  is
        readily available. Even the ballistic coefficient can usually  be
        calculated from the information at hand. Following are  suggested
        sources for specific input data to the program.

        A. Altitude
             The  calculation  doesn't depend on altitude  directly,  but
        rather  on the way air temperature and pressure vary  with  alti-
        tude.  The program uses this value to determine what  the  "stan-
        dard"  temperature and pressure are for a given  ballistic  func-
        tion. Users can look up the actual altitude of their location  in
        an  almanac or one of the U.S. Department of the Interior  "Quad-
        rangle Maps" available at many sporting goods or camping  stores.
        Either  jot it down near the computer so it can be  entered  when
        the  program  is run or add it to the configuration file  as  de-
        scribed in section 9.

        B. Ballistic Coefficient
             This  will  probably be the most difficult number  to  find.
        Those who reload will usually be able to get this value from  the
        manufacturer  of their bullets. (Speer and Sierra, for  instance,
        print this data in their reloading manuals.) The value for  other
        bullets  may sometimes be estimated by comparing  bullet  shapes,
        provided the bullet is of the same caliber. Comparing the  bullet
        in question to a specially prepared chart of shapes is often more
        accurate.  The  DuPont Company at one time produced a  series  of
        these  and  other useful charts, called "A Short Cut  To  Ballis-
        tics".  The complete set is supplied with Ackley's  handbook  and
        the  specific chart for estimating ballistic coefficients is  re-
        printed in HATCHER'S NOTEBOOK.
             BALLISTIC  will itself calculate the coefficient in  certain
        cases.  Both the initial and remaining velocity at a fixed  range
        must be known. This data is available for factory loaded  ammuni-
        tion  in manufacturers' literature and sources such  as  SHOOTERS
        BIBLE.  (A  short  section of coefficients  for  several  factory
        loadings calculated using this program and Ingalls' table may  be
        found in Appendix C.)

        C. Bullet Weight, Length, and Caliber
             These are easy. On factory-loaded ammunition or  components,
        bullet weight (in grains) and caliber will be written on the box.
        Those who cast their own bullets will need to weigh several  sam-
        ples  prepared  with the actual alloy used. Take the  average  of
        half  a dozen or so and use that value. A  sufficiently  accurate
        value for bullet length may be found with a ruler.

        D. Gun and Powder Weights
             These two are needed only to calculate the amount of  recoil
        generated  by a given load. The weight of a rifle can usually  be
        found accurately enough on a bathroom-type scale. Actual  weights
        of  most  firearms can be found in manufacturers'  literature  as
        well as in such sources as SHOOTER'S BIBLE, GUN DIGEST, and  pro-
        duct reviews in many magazines. The user shouldn't forget to  add
        in  the  weight  of scopes, slings, custom stocks  or  any  other
        accessories.


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 27


             Powder weights will be known if performing calculations  for
        handloads. If using factory loads, try estimating by comparing to
        available  reloading  data. Find a load that moves  a  bullet  of
        similar  construction  (jacketed, soft lead, etc.) to  about  the
        same muzzle velocity.

        E. Specific Gravity of Bullet Alloy
             This  value  is only required for  calculating  the  minimum
        necessary  twist  for stabilization. Two more  or  less  standard
        values are 11.34 for pure lead, and 10.90 for a typical  jacketed
        bullet.  Other values are very difficult to find in  the  litera-
        ture.  Hatcher,  describes a fairly simple way  to  measure  this
        quantity,  but the two values above should be sufficiently  accu-
        rate for most practical purposes.
             Appendix D of this document contains a short compilation  of
        specific  gravity data for some common Lead/Tin/Antimony  alloys.
        These  were taken primarily from volume one of the  American  So-
        ciety of Metals METALS HANDBOOK.

        F. Temperature, Atmospheric Pressure, Wind
             Suitably accurate values for temperature and pressure can be
        obtained  from a weather report or newspaper. As  with  altitude,
        the  calculation isn't terribly sensitive to these  factors,  so,
        unless the range is in the Sahara Desert or Antarctica, they  can
        probably be ignored. (It CAN be interesting to set up a ballistic
        table and vary them just to see what happens... Experiment!)  The
        same  suggestion applies; try the program with and  without  cor-
        recting and see if the difference is big enough to notice.
             Bear in mind that this program examines the effect of  these
        variables  only  on the ballistic coefficient.  Temperature,  for
        instance,  will  also change the initial velocity of  a  load,  a
        factor  beyond the ability of this program to calculate.  (Tables
        describing  this effect can be found in both the Speer  reloading
        manual and Ackley's handbook.) Temperature and pressure are  also
        valid parameters for use in the configuration file. (Section 9)
             Wind direction can only be estimated at the actual  shooting
        site.  Zero degrees indicates a wind blowing across the  bullet's
        path to either the right or left. Ninety degrees describes a wind
        blowing  either  directly behind or directly  into  the  bullet's
        path. As this value is only used for calculating wind deflection,
        a signed value isn't necessary. Also, since deflection is  linear
        with  wind  speed, leaving the value set for the default  10  mph
        allows for easy interpolation at the range.

        G. Velocity
             Muzzle velocities of most factory ammunition can be found in
        periodicals  such  as the SHOOTER'S BIBLE. Those who  reload  are
        aware  that estimated or reported velocities are  usually  listed
        with the loading data for a particular cartridge.
             The most effective way to find the velocity for a completely
        unknown  load is, of course, the chronograph. Unfortunately,  few
        people  have access to one and their price puts them  beyond  the
        reach of the casual buyer.
             The author once built an inexpensive attachment that allowed
        a Commodore-64 home computer to be used as a simple  chronograph,
        but  its usefulness was limited since a source of  house  current
        was still needed nearby... also, the C-64 isn't exactly portable.
        The  technique SHOULD be adaptable to many other  home  computers
        and the author would be happy to discuss the project with  regis-
        tered users.
             Ackley,  in  his book HANDBOOK FOR SHOOTERS  AND  RELOADERS,


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 28


        describes a simple "ballistic pendulum" that can be used to esti-
        mate  projectile velocities. No external power is  necessary;  it
        relies on the kinetic energy of the bullet to swing a heavy mass.




























































        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 29





                      --==<  B A L L I S T I C  v4.00  >==--
                       Copyright 1988, 1989 by W.R. Frenchu
                              All Rights Reserved.



                                  - MAIN MENU -

                      1 ........ Calculate Ballistic Table.
                      2 .. Calculate Ballistic Coefficient.
                      3 .... Adjust Atmospheric Conditions.
                      4 ........ Select New Function Table.
                      5 .......... Miscellaneous Functions.
                      6 ............... Database Functions.
                      7 ................. Return to System.


                                 Your Choice ? 1





        ---------------------( Fig. 1 - Main Menu )----------------------






                      --==<  B A L L I S T I C  v4.00  >==--
                       Copyright 1988, 1989 by W.R. Frenchu
                              All Rights Reserved.



                       - CALCULATE BALLISTIC COEFFICIENT -

                                  Please input:
                         Initial velocity ....(fps)  2820
                         Final velocity ......(fps)  2520
                         Range .............(yards)  100
                         Altitude ............(ft.)  0
                         Temperature ......(deg. F)  59.0
                         Atmos. pressure ..(in. Hg)  29.53

                          Effective Bal. Coeff. =  0.301
                           (Bal. Coeff. at STP = 0.301)




        -------( Fig 2. - Calculating the Ballistic Coefficient )-------







        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 30





                      --==<  B A L L I S T I C  v4.00  >==--
                       Copyright 1988, 1989 by W.R. Frenchu
                              All Rights Reserved.



                          - CALCULATE BALLISTIC TABLE -

                                  Please input:
                     Initial velocity ...........(fps)  2820
                     Bullet weight ...........(grains)  147
                     Bullet diameter ............(in.)  0.308
                     Effective Bal. Coeff. ...........  0.301
                     Range ....................(yards)  100
                     Number of intervals .....(50 max)  10


                          Chart title (79 chars. max) ?
        7.62 NATO - 147gr FMJ




        ------------------( Fig. 3 - Main input screen )-----------------


                             7.62 NATO - 147gr FMJ
                          (Calculated using G1 table)
      Bullet Weight ......... 147 grains   Bullet Caliber ........ 0.308
      Sectional Density ..... 0.221        Coefficient of Form ... 0.735
      Effective Bal. Coeff... 0.301        Bal. Coeff. at STP .... 0.301
      Cross wind ............ 10.0 m.p.h.  Altitude .............. 0    Ft.
      Atmospheric pressure .. 29.53 in.    Temperature ........... 59.0 F

    Range  Velocity  Energy   Momentum  Mx. Ord. Defl.   Drop   Lead   Time
    yards   f.p.s.   ft-lb.   lb.-sec.    in.     in.     in.  in/mph  sec.
       0     2820    2595.4    1.8407     0.0     0.0     0.0    0.0   0.000
      10     2789    2538.8    1.8205     0.0     0.0     0.0    0.2   0.011
      20     2758    2483.3    1.8005     0.0     0.0     0.1    0.4   0.022
      30     2728    2428.8    1.7806     0.1     0.1     0.2    0.6   0.032
      40     2698    2375.2    1.7609     0.1     0.2     0.4    0.8   0.044
      50     2668    2322.6    1.7413     0.1     0.3     0.6    1.0   0.055
      60     2638    2270.9    1.7218     0.2     0.4     0.8    1.2   0.066
      70     2608    2220.1    1.7024     0.3     0.5     1.1    1.4   0.077
      80     2579    2170.3    1.6832     0.4     0.7     1.5    1.6   0.089
      90     2549    2121.3    1.6641     0.5     0.9     1.9    1.8   0.101
     100     2520    2073.1    1.6451     0.6     1.1     2.4    2.0   0.113


   1=Print  2=Form Feed  3=File  4=Sight Table  5=New Data  6=Main Menu  ? 4


        ------------( Fig. 4 - The completed ballistic table )-----------







        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 31





                      --==<  B A L L I S T I C  v4.00  >==--
                       Copyright 1988, 1989 by W.R. Frenchu
                              All Rights Reserved.



                        - ADJUST ATMOSPHERIC CONDITIONS -

                                  Please input:
                        Bal. Coeff. at STP ........  0.301
                        Altitude .............(ft.)  5000
                        Temperature .......(deg. F)  41.2
                        Atmos. pressure ...(in. Hg)  25.44
                        Wind speed ........(m.p.h.)  10.0
                        Angle from broadside (deg.)  0


                     Effective Ballistic Coefficient = 0.337





        --------( Fig. 5 - Modifying the ballistic coefficient )--------






                      --==<  B A L L I S T I C  v4.00  >==--
                       Copyright 1988, 1989 by W.R. Frenchu
                              All Rights Reserved.



                               - CALCULATE RECOIL -

                                  Please input:
                        Initial velocity .....(fps)  2820
                        Weight of gun ........(lbs)  9.50
                        Weight of bullet ..(grains)  147
                        Weight of powder ..(grains)  43.0

                            Recoil Velocity =  8.8 fps
                           Recoil Energy =  11.5 ft-lbs
                   (Recoil due to bullet =  5.7 ft-lbs or 50%)





        -----------------( Fig. 6 - Recoil calculation )----------------







        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 32





                      --==<  B A L L I S T I C  v4.00  >==--
                       Copyright 1988, 1989 by W.R. Frenchu
                              All Rights Reserved.



                         - CALCULATE POINT BLANK RANGE -

                                  Please input:
                     Initial velocity ...........(fps)  2820
                     Sight height ............(inches)  0.90
                     Max. dist. from sight line .(in.)  3.00
                     Effective Bal. Coeff. ...........  0.301

                 Targeted range for +/-3.00 inch path is 220 yds.
                          Point-blank range is 258 yds.
                         (100 yd. trajectory = +2.9 in.)






        -----------( Fig. 7 - Calculating Point Blank Range )-----------






                      --==<  B A L L I S T I C  v4.00  >==--
                       Copyright 1988, 1989 by W.R. Frenchu
                              All Rights Reserved.



                               - CALCULATE TWIST -

                                  Please input:
                        Bullet diameter ......(in.)  0.308
                        Bullet length ........(in.)  1.20
                        Greenhill number ..........  150.0
                        Spec. Gravity of Bullet ...  10.90

                   Slowest twist allowing for stabilization is
                              1 turn in 11.9 inches.
                           (Helix angle = 4.7 degrees)





        ------------------( Fig. 8 - Calculating twist )----------------







        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 33





                      --==<  B A L L I S T I C  v4.00  >==--
                       Copyright 1988, 1989 by W.R. Frenchu
                              All Rights Reserved.



                        - CALCULATE TRUE MUZZLE VELOCITY -

                                  Please input:
                     Distance to first screen ...(ft.)  3.00
                     Distance between screens ...(ft.)  1.00
                     Instrumental Velocity ......(fps)  2820
                     Effective Bal. Coeff. ...........  0.301


                        Actual Muzzle Velocity =  2824 fps







        ---( Fig. 9 - Calculating muzzle velocity from instrumental )---






                     --==<  B A L L I S T I C  v4.00  >==--
                      Copyright 1988, 1989 by W.R. Frenchu
                          All Rights Reserved.



                       - CALCULATE VELOCITY STATISTICS -

     1 - 2820.0     6 - 2852.0*
     2 - 2825.0     7 - 2827.0
     3 - 2830.0     8 - 2818.0*
     4 - 2835.0
     5 - 2850.0*

          Maximum = 2852.0,  Minimum = 2818.0,  Extreme Spread = 34.0
          Average Velocity = 2832.1,  Sample Standard Deviation = 12.8



           1=Clear All  2=Delete  3=Correct  4=Add Entries  5=Exit ? 4


        ----------( Fig. 10 - Calculating velocity statistics )----------







        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 34




                                   Appendix A
                                    Glossary

        BALLISTICS - The  study of moving projectiles. Commonly, what  is
           meant  is "exterior" ballistics, that is, the portion  of  the
           bullet's flight between muzzle and target. "Interior"  ballis-
           tics  refers to the portion between primer ignition  and  free
           flight  and  "terminal" ballistics to what  happens  when  the
           bullet strikes its target.

        BALLISTIC COEFFICIENT - The  ratio of the sectional density of  a
           projectile to its coefficient of form. A measure of how well a
           bullet  retains its velocity. Commonly supplied  by  reloading
           manufacturers,  or it may be derived from their ballistic  ta-
           bles. Two types are used by the program. The STP value is that
           which  the bullet would have at the standard  temperature  and
           atmospheric pressure for the table being used. The "effective"
           value  is  the STP value modified for the  actual  atmospheric
           conditions.

        BULLET - The actual projectile in small arms ammunition. Commonly
           corrupted to mean the entire cartridge.

        BULLET WEIGHT - Weight of the actual projectile. Usually given in
           grains.

        CALIBER - Technically, the diameter of the barrel measured across
           the lands. In practice, the diameter of the bullet.

        CARTRIDGE - Fixed ammunition, including case, powder, primer, and
           bullet, for small arms.

        COEFFICIENT OF FORM - A number relating the ballistic  efficiency
           of  a given shape to the shape of the projectile used to  cal-
           culate the ballistic table.

        CROSS WIND ANGLE - The angle between the wind and line of  depar-
           ture.

        DRIFT - Technically,  the distance a bullet will travel  horizon-
           tally  due  to its spin. This effect is usually  quite  small,
           amounting  to about 7 inches at 1000 yards for a  military  M2
           (30-06) cartridge. Often confused with wind deflection.

        DEFLECTION - See wind deflection.

        DROP - The  distance a bullet will fall due to the  influence  of
           gravity. Measured from the line of departure, not the line  of
           sight.

        ENERGY - Here,  the  kinetic energy of a moving  bullet,  usually
           given  in  ft-lbs. Equal to one half the mass  of  the  bullet
           multiplied by the square of the velocity.

        F.P.S. - Feet per second. A unit of velocity.

        FT.-LBS. - Foot  pounds.  A unit of energy equal  to  the  effort
           required to raise one pound to a height of one foot.



        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 35


        GRAINS - A unit of weight equal to 1/7000 of a pound.

        INGALLS' TABLES - A  set of ballistic tables first calculated  by
           Col.  J.  M. Ingalls in 1918. Probably the  most  widely  used
           tables for small arms calculations. Other tables commonly used
           include  the British tables of 1909, 1929, Winchester's G  ta-
           bles and the Ordnance Department's J table.

        I.H.M.S.A. - International  Handgun Metallic Silhouette  Associa-
           tion.

        I.P.S.C - International Practical Shooting Confederation.

        LEAD - How far ahead of a moving target a shooter must aim to  be
           assured  of  hitting it. In BALLISTIC, the lead  is  given  in
           inches/m.p.h.  of target speed. If the entry in the  table  is
           "1.2", the lead for a target moving at 5 m.p.h., (perpendicul-
           ar  to the bullet's path) would be (5 * 1.2) 6.0 inches.  Wind
           speed is NOT taken into account in this calculation.

        LINE OF DEPARTURE - An  imaginary  line formed by  extending  the
           muzzle of the weapon. It coincides with the bullet's path only
           while the bullet is actually in the barrel.

        LINE OF SIGHT - An  imaginary line from the center of the  sights
           to  the point of aim. The bullet typically crosses  this  line
           only  twice; once, a few yards from the muzzle, and  again  at
           the targeted distance.

        MAXIMUM ORDINATE - The  highest  vertical distance above  a  line
           from  the muzzle to the bullet's current  position.  Sometimes
           confused  with the maximum height (which is referenced to  the
           line of sight).

        M.O.A. - Minute of Angle. Equal to 1/60 of an angular degree.  At
           100 yards, 1 M.O.A. is approximately 1.047 inches.

        MOMENTUM - Equal to the mass of a bullet multiplied by its veloc-
           ity.  Indicative of the striking or knockdown power of a  pro-
           jectile.

        N.R.A - National  Rifle  Association. If you  shoot,  you  SHOULD
           belong to this organization.

        POINT-BLANK  RANGE - That  range  for  which  the  bullet's  path
           doesn't  vary  from  the line of sight by more  than  a  given
           amount.

        POWER FACTOR - A  number  used in IPSC competition  to  determine
           whether  a  handgun cartridge may be scored as  a  "major"  or
           "minor"  caliber.  Defined as the bullet  weight  (in  grains)
           divided  by  1000 and multiplied by the  velocity.  Cartridges
           with  a power factor equal to or greater than 175 are  consid-
           ered  "major".  Cartridges  ranking between 125  and  175  are
           "minor"  and those below 125 are not legal for  IPSC  competi-
           tion.

        S.A.A.M.I - Sporting Arms Ammunition Manufacturers Institute.

        SECTIONAL DENSITY - The  weight of a projectile (in  pounds)  di-
           vided by the square of its diameter (in inches).


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 36



        SIGHT HEIGHT - The  measured distance between the centerlines  of
           the sights and muzzle of a gun.

        SPECIFIC GRAVITY - The ratio of the mass of a material to that of
           an equal volume of water.

        TARGETED RANGE - That  distance  where  the path  of  the  bullet
           crosses the line of sight. (The "sighting in" distance.)

        TIME OF FLIGHT - The  time necessary for a bullet to travel  from
           the muzzle of a gun to a given range.

        TRAJECTORY - The path of a moving projectile. Here, the number of
           inches above or below the line of sight.

        TWIST - Here,  the rate of twist in the rifling of a gun  barrel.
           The minimum amount of twist necessary to stabilize a bullet in
           flight  can be determined from its length, density, and  cali-
           ber.  Usually expressed as "1 turn in xx inches" where xx  may
           range from about 8 inches up to over 30. "Faster" twist trans-
           lates  to  a smaller number. Minimum twist  is  the  "slowest"
           twist that will stabilize a given bullet.

        WIND DEFLECTION - The amount of horizontal motion attributable to
           the action of the wind. Often mistakenly called drift.





































        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 37




                                   Appendix B
                               Information Sources


        BALLISTICS:

             Any intermediate physics (mechanics) text.
             BALLISTICS ON THE HOME COMPUTER, American Rifleman, June
               1983
             BALLISTICS ON YOUR POCKET CALCULATOR, American Rifleman,
               June 1987
             BALLISTIC TABLES AND HOW TO USE THEM, American Rifleman,
               December 1963
             CALCULATING RECOIL, American Rifleman, March 1988
             EXPLORING BALLISTICS WITH YOUR COMPUTER, Byte Magazine
               September 1980
             EXTERIOR BALLISTICS, McShane, Kelly and Reno, University of
               Denver Press, 1953
             HATCHER'S NOTEBOOK, Julian S. Hatcher, Harrisburg: Stackpole
               Books, 1962
             METALLIC CARTRIDGE RELOADING, Edward A. Matunas: DBI Books
             SHOOT WITH A COMPUTER, Outdoor Life, January 1989
             TRAJECTORY COMPUTATION SYSTEM FOR DIGITAL COMPUTER, SAAMI
               publications, 1976



        RELOADING:

             CARTRIDGES OF THE WORLD, J.T. Amber, Northfield: Digest
               Books, 1972
             COMPLETE GUIDE TO HANDLOADING, Philip B. Sharpe, New York:
               Funk & Wagnells Co., 1953
             HANDBOOK FOR SHOOTERS AND RELOADERS, VOL I & II, P.O. Ackley,
               Salt Lake City: Publisher's Press, 1965
             HODGDON POWDER DATA MANUAL #25, Shawnee Mission, KS: Hodgdon
               Powder Co. Inc., 1987
             HORNADY HANDBOOK OF CARTRIDGE RELOADING, RIFLE-PISTOL, Grand
               Island: Hornady Manufacturing Co., 1973
             LYMAN RELOADING HANDBOOK #46, Middlefield: Lyman Products
               for Shooters, 1970
             NRA HANDLOADER'S GUIDE, Wash. D.C.: The National Rifle
               Association of America, 1969
             PRINCIPLES AND PRACTICE OF HANDLOADING, Georgetown: Small
               Arms Technical Publishing Co., 1954
             SIERRA BULLETS RELOADING MANUAL, Santa Fe Springs: Sierra
               Bullets, 1971
             SPEER RELOADING MANUAL #10, Lewiston: Speer, Inc., 1979



        STATISTICS:

             DATA REDUCTION AND ERROR ANALYSIS FOR THE PHYSICAL SCIENCES,
               Philip R. Bevington, New York: McGraw-Hill Co., 1969






        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 38


        ASSOCIATIONS:

             AMERICAN SHOOTING SPORTS COALITION, INC. - P.O. Box 1447,
               Ft. Washington, PA  19034
             FIREARMS COALITION (Neal Knox Associates) - Box 6537, Silver
               Springs, MD 20906
             GUN OWNERS OF AMERICA - 8001 Forbes Place (Suite 102),
               Springfield, VA 22151
             INTERNATIONAL HANDGUN METALLIC SILHOUETTE ASSOCIATION -
               Box 1609, Idaho Falls, ID 83401
             NATIONAL ASSOCIATION TO KEEP & BEAR ARMS - P.O. Box 78336,
               Seattle, WA  98178
             NATIONAL FIREARMS ASSOCIATION - P.O. Box 160038, Austin,
               TX  78716
             NATIONAL RIFLE ASSOCIATION - 1600 Rhode Island Ave. NW,
               Washington, D.C. 20036
             S. A. A. M. I. (SPORTING ARMS AMMUNITION MANUFACTURERS
               INSTITUTE) - P.O. Box 838, Branford, Conn. 06405
             SECOND AMENDMENT FOUNDATION  - 12500 N.E. Tenth Place,
               Bellvue, WA 98005



        BULLETIN BOARDS/INFORMATION SERVICES:

             BULLET'N BOARD BBS - Tanya Metaska, Sysop - (703) 971-4491
                 BBS of the Firearms Coalition. Legal updates, firearms
                 programs, Reload conference.
             COMBAT ARMS BBS - Richard Bash, Sysop - (415) 537-1777
                 BBS of Combat Arms Gun Shop. Many firearms, legal, and
                 aviation programs. National Firearms Echo.
             COMPUSERVE INFORMATION SERVICE - (check local numbers)
                 Outdoor forum (firearms and NRA conferences) LOTS of
                 useful information.
             POLYMATH ONE BBS - D.G. Gabrial, Sysop - (609) 394-2608
                 BALLISTIC support board. PCRelay Firearms Echo.



























        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 39




                                   Appendix C
                   Ballistic Coefficients for Factory Bullets

             The  coefficients  listed here were calculated  from  tables
        found  in  SHOOTER'S BIBLE No. 75 (1984) using  the  program  and
        Ingalls'  function.  No attempt was made to include  every  load,
        instead, representative loads for each caliber were chosen.



                     Part 1 - Centerfire Pistol and Revolver


             Cartridge      Bullet       Coefficient    Manufacturer
        ================================================================
             .25 ACP        50 FMC          .174            F
             .25 ACP        50 FMC          .097            R,W
             .380 ACP       85 STHP         .105            W
             .380 ACP       90 JHP          .073            F
             .380 ACP       95 FMC          .082            F,R,W
              9 mm          95 JHP          .101            F,R,W
              9 mm         115 FMC          .128            W
              9 mm         115 JHP          .131            R,F
              9 mm         115 STHP         .131            W
              9 mm         123 FMC          .140            F
             .38 SPEC.     110 STHP         .147            W
             .38 SPEC.     148 WC           .062            F,R,W
             .38 SPEC.     158 LRN          .162            F,R,W
             .357 MAG.     110 JHP          .093            F,R,W
             .357 MAG.     125 JHP          .122            F,R,W
             .357 MAG.     158 JSP          .135            F,R,W
             .44 MAG.      180 JHP          .120            F,R
             .44 MAG.      210 STHP         .125            W
             .44 MAG.      220 MCP          .193            F
             .44 MAG.      240 JHP          .156            R
             .44 MAG.      240 LGC          .139            R
             .45 ACP       185 MCWC         .082            R,W
             .45 ACP       185 JHP          .152            F
             .45 ACP       185 STHP         .137            W
             .45 ACP       230 FMC          .165            R,W
             .45 COLT      225 STHP         .167            W
             .45 COLT      225 SWCHP        .172            F
             .45 COLT      250 LRN          .157            R


        ---------------
        ABBREVIATIONS
        Manufacturers: F=Federal, R=Remington, W=Winchester
        Bullets:  FMC=Full  Metal  Case, STHP=Silver  Tip  Hollow  Point,
          JHP=Jacketed  Hollow Point, MCWC=Metal Case Wadcutter,  WC=Wad-
          cutter,  LRN=Lead Round Nose, LGC=Lead Gas Check,  JSP=Jacketed
          Soft Point, MCP=Metal Case Profile, SWCHP=Semiwadcutter  Hollow
          Point








        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 40








                            Part 2 - Centerfire Rifle


             Cartridge      Bullet       Coefficient    Manufacturer
        =================================================================
           .22-250 REM.     55 PSP          .231            F,W
           .22-250 REM.     55 PSP          .253            R
           .223 REM.        55 FMC          .207            R
           .223 REM.        55 FMC          .278            W
           .223 REM.        55 MCBT         .350            F
           .243 WIN.        80 SP           .259            F,R,W
           .243 WIN.       100 PSP          .371            F,R,W
           .270 WIN.       130 PSP          .378            F,W
           .270 WIN.       130 PSP          .345            R
           .270 WIN.       150 SP           .267            F,R
           .270 WIN.       150 PSP          .356            W
            7mm MAUSER     140 PSP          .433            F,R
            7mm MAUSER     175 SP           .280            F,W
            7mm REM.MAG.   150 PSP          .354            F,R,W
            7mm REM.MAG.   175 PSP          .453            F,R,W
           .30 CARBINE     110 FMC          .180            F,W
           .30 CARBINE     110 FMC          .164            R
            30-30 WIN.     150 SP           .221            F,W
            30-30 WIN.     150 SP           .195            R
            30-30 WIN.     170 SP           .259            F,R,W
            30-06          150 PSP          .329            F,R,W
            30-06          180 PSP          .398            F,R,W
            30-06          200 BTSP         .592            F
            30-06          220 SP           .299            R,W
           .300 WIN.MAG.   180 PSP          .462            F,R,W
           .308 WIN.       150 PSP          .323            F,R,W
           .308 WIN.       180 PSP          .390            F,R,W
           .35 REM         200 SP           .193            F,R,W
           .45-70          300 JHP          .302            F,W
           .45-70          405 SP           .269            R


        ---------------
        ABBREVIATIONS
        Manufacturers: F=Federal, R=Remington, W=Winchester
        Bullets:  FMC=Full  Metal Case, PSP=Pointed Soft  Point,  SP=Soft
          Point, BTSP=Boat Tail Soft Point, MCBT=Metal Case Boat Tail















        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 41








                                Part 3 - Rimfire


             Cartridge              Bullet   Coefficient  Manufacturer
        ==================================================================
           .22 LR "VIPER"           36 TC       .110           R
           .22 LR "YELLOW JACKET"   33 TCHP     .101           R
           .22 LR HV                40 LRN      .128           R
           .22 LR HV                36 LHP      .115           R
           .22 LR TARGET            40 LRN      .136           R
           .22 LONG                 29 LRN      .095           R
           .22 SHORT                29 LRN      .098           R
           .22 SHORT                27 LHP      .091           R
           .22 SHORT TARGET         29 LRN      .097           R

           .22 WIN. MAG.            40 JHP      .108           W
           .22 WIN. MAG.            40 FMC      .108           W
           .22 LR "XPEDITER"        29 LHP      .079           W
           .22 LR "H.P."            37 LRN      .117           W
           .22 LR "DYNAPOINT"       40 LDP      .127           W
           .22 LR "T22"             40 LRN      .135           W
           .22 LR                   40 LRN      .127           W
           .22 LONG                 29 LRN      .095           W
           .22 SHORT "H.P."         27 LRN      .091           W
           .22 SHORT "T22"          29 LRN      .097           W
           .22 SHORT                29 LRN      .098           W

           .22 LR "HI POWER"        40 LRN      .126           F
           .22 LR "HI POWER"        38 LHP      .122           F
           .22 LR "CHAMPION"        40 LRN      .135           F
           .22 LONG "HI POWER"      29 LRN      .094           F
           .22 SHORT                29 LRN      .100           F
           .22 SHORT                29 LHP      .092           F


        ---------------
        ABBREVIATIONS
        Manufacturers: F=Federal, R=Remington, W=Winchester
        Bullets:  LRN=Lead  Round Nose, LHP=Lead Hollow  Point,  LDP=Lead
          Dynapoint, FMC=Full Metal Case, TC=Truncated Cone, TCHP=  Trun-
          cated Cone Hollow Point
















        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 42




                                   Appendix D
                       Specific Gravities of Bullet Alloys


                        Part 1 - Lead/Tin/Antimony Alloys

           Percent Composition     Specific Gravity       Trade or
           Pb      Sn       Sb         of alloy          Common Name
        =================================================================
          100                           11.340        pure lead
                  100                    7.298        pure tin
                           100           6.62         pure antimony
           30      70                    8.32         soft solder
           37      63                    8.42         eutectic solder
           50      50                    8.89         50-50 solder
           75      10       15           9.73         lead babbit-SAE 14
           80      20                   10.20         20-80 solder
           80       5       15          10.04         alloy 8
           83       2       15          10.09         alloy 10
           85               15          10.28         alloy 11
           85       5       10          10.24         lead babbit-SAE 13
           91                9          10.66         9% antimonial lead
           92                8          10.74         8% antimonial lead
           94                6          10.88         hard lead (bullets)
           95       5                   11.00         5-95 solder
           96                4          11.04         hard lead
           99                1          11.27         1% antimonial lead
                   92        8           7.28         white metal



                             Part 2 -  Other Alloys

                Composition        Specific Gravity       Trade or
                                       of alloy          Common Name
        =================================================================
          100 Cu                         8.96         pure copper
          100 Fe                         7.87         pure iron
           95 Cu, 5 Zn                   8.86         gilding
           90 Cu, 10 Zn                  8.80         commercial bronze
           70 Cu, 30 Zn                  8.53         cartridge brass
           98.75 Cu, 1.25 Sn             8.89         1.25% phos. bronze
           90 Cu, 10 Sn                  8.78         10% phosphor bronze
           97 Cu, 3 Si                   8.53         silicon bronze (A)
           98.5 Cu, 1.5 Si               8.75         silicon bronze (B)
           99.5 Fe,.06 C,.38 Mn,.01 Si   7.87         .06% carbon steel
           99.0 Fe,.23 C,.64 Mn,.11 Si   7.86         .23% carbon steel
           98.7 Fe,.44 C,.69 Mn,.20 Si   7.84         .435% carbon steel


        ---------------
        SOURCES:
        Metals Handbook, Vol. 1, "Properties and Selection of Metals"
          (8th ed.), American Society for Metals
        Metal and Alloys Data Book, Samuel L. Hoyt






        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 43




                                   Appendix E
                         Using Other Standard Functions


        1. Creating Custom Function Tables
             The  user is not limited to using the functions produced  by
        GENTABLE. Tables may be produced by any program or language  that
        stores  numbers  in IEEE format, including Microsoft  C  v5.0  or
        Quick  C.  (There will be a problem  calculating  checksums  when
        using  Microsoft  5.0 unless the -Op optimization is  used.)  The
        file format and data types used are:

           1. Truncated revision number for version of GENTABLE used
              multiplied by -1. (int)
           2. The complete revision number. (float) (Added in v4.0)
           3. The table name. (char[32])
           4. Standard temperature for table data. (double)
           5. Standard pressure for table data. (double)
           6. Maximum velocity in table (<=4094). (unsigned)
           7. Minimum velocity in table. (unsigned)
           8. S_table, T_table pairs as described in HATCHER'S NOTE-
              BOOK for velocities (max >= v >= 0). (float)
           9. Checksum calculated as the sum of (S_table -  T_table)
              values. (float)

        2. Checking the Function File with READTABLE
             After creating the function file, registered users may  (op-
        tionally) check it with READTABLE. Since BALLISTIC makes its  own
        brief check, this step is usually unnecessary.
             READTABLE  was originally written as a debugging aid and  is
        provided only to satisfy user's curiosity as to what is contained
        in  a ballistic function table. It might also be of some  use  to
        those  contemplating creation of their own function  files.  Once
        started, it prompts the user for the name of the function file to
        be  examined,  displays the header information, then  prints  the
        values to the screen. The speed of the display may be altered  by
        pressing either the <-> or <+> keys. Pressing any other key  will
        cause  the  display  to pause at the  next  value.  Once  paused,
        pressing  <ESC>  causes execution to abort. Any  other  key  will
        cause the program to resume.
             As  with GENTABLE, READTABLE is started by typing  its  name
        (BAL-READ)  at the DOS prompt, optionally followed by any of  the
        following flags:

           "-BIOS"  Causes the program to perform all  writes  using
              BIOS calls. This will significantly slow output.

           "-F" (From) - Start listing the table to the screen  with
              the  value immediately following the argument,   i.e.,
              -F2000 will start the listing at 2000 fps.

           "-G"  (Graphics)  - Don't use the IBM  graphic  character
              set. (Use ASCII characters instead.)

           "-H"  (Help) - Display a short help screen listing  these
              flags.

           "-T"  (To) - End the listing at the value following  this
              argument.


        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 44



           "-N"  (Noprint)  - Don't print the table,  calculate  the
              checksum only.

             Flags  requiring numeric arguments should NOT have  a  space
        between the flag and input value.

























































        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 45




                                   Appendix F
                       User Supported Software (Shareware)


             User  Supported  Software is based on the  premise  that  if
        someone  gets a chance to try out a program, likes it, and  finds
        he uses it on a regular basis, he will contribute to the  support
        of that program. Users who take the trouble to register know they
        are helping to make sure that high quality software like  BALLIS-
        TIC continues to be sold in this low cost way.
             BALLISTIC  is being distributed as User Supported  Software.
        Registration  allows  you to continue using BALLISTIC  after  the
        initial 30 day trial period. Registered users get mailed  notifi-
        cation  of  future BALLISTIC releases, and are eligible  for  low
        cost  (or  free) upgrades.  Additionally,  registered  users  may
        obtain support for special printers, video cards, etc.
             Registration  of  BALLISTIC costs $15.00.  For  $30.00,  you
        receive  registration, a disk containing the current  version  of
        the BALLISTIC package, READTABLE, CHECK_DB, a printed copy of the
        manual,  and whatever BALLISTIC compatible databases  the  author
        has  acquired.  (Currently available: Sierra, Nosler,  Speer  and
        Hornady  reloading components, and CCI and Federal  handgun  car-
        tridges.)
             Source  code  for version 4.00 is available  (to  registered
        users  only) for an additional $50.00. (This price does  NOT  in-
        clude registration.)
             Checks and money orders are accepted for payment, as well as
        corporate purchase orders.
             A registration (order) form appears on the following page.
             Comments  or  suggestions may be left for the  author  (Bill
        Frenchu) at any of the following places:

             Bullet 'n Board BBS     (703) 971-4491
             Polymath One BBS        (609) 394-2608 (Co-Sysop)
             CompuServe              74575,61 (E-Plex or Outdoor Forum)
             PCRelay Firearms Echo   (routed mail to ->POLYMATH)





                         Corporations and Institutions

             Please contact the author for information on licensing  mul-
        tiple  copies of BALLISTIC. (Site licenses are available at  very
        reasonable  rates.)  Under no circumstances may  an  unregistered
        copy  of BALLISTIC be used in a corporate, institutional or  gov-
        ernment environment.













        BALLISTIC v4.00 - Copyright 1988, 1989 by  W.R. Frenchu       Page 46


                        BALLISTIC 4.00 REGISTRATION FORM

        Name _____________________________________   Date _______________

        Mailing Address:

         Street __________________________________   Phone ______________

         City  ________________________  State ___   Zip ________________



        Computer/DOS (& BIOS)  _____________________ Printer ____________

        Display/adapter type _______________________ Co-processor? ______


        Where did you find out about BALLISTIC? _________________________

        =================================================================
        Quan     Item                                    Each       Total


        ____   BALLISTIC v4.00 - Registration ONLY        $15.00    _____
                 (No diskette or manual)

        ____   BALLISTIC v4.00 - "Deluxe" Registration    $30.00    _____
                 (Includes current version of BALLISTIC,
                 databases, aux. files, and manual.)

                 Diskette size:  ___ 5.25"     ___ 3.5"


        ____   Version 4.00 source code. (Turbo C v2.0)   $50.00    _____
                 Must be registered user. (Price does
                 NOT include registration.)

                                                           TOTAL    =====

        =================================================================
        The author is always trying to improve BALLISTIC. You can help!
        Comments about BALLISTIC v4.00 (and documentation):



        Suggestions for future versions of BALLISTIC:




        Types of shooting you do (or how will you use BALLISTIC?):




        Have you used any other ballistic programs? Which ones?







        Mail to: William Frenchu, 79 Taylor Terrace, Hopewell, NJ  08525

```
{% endraw %}

## FILE1802.TXT

{% raw %}
```
Disk No: 1802                                                           
Disk Title: Ballistic                                                   
PC-SIG Version: S2                                                      
                                                                        
Program Title: Ballistic                                                
Author Version: 4.00                                                    
Author Registration: $15.00 basic or $30.00 deluxe.                     
Special Requirements: None.                                             
                                                                        
BALLISTIC is a program used to calculate bullet trajectories, remaining 
energy, velocities, etc., for small arms.  It will generate ballistic   
tables, calculate point blank range, and many other useful functions,   
even plot trajectory vs. range on systems with VGA, EGA, CGA, MCGA or   
Hercules graphics adapters.                                             
                                                                        
The purpose of this program is NOT to teach the fundamentals of         
reloading small arms ammunition, but rather to aid the hobbyist in      
assessing the performance of the ammunition he has produced.  It is     
assumed from the outset that the user of this program is acquainted with
basic reloading techniques.  For review, a list of references is        
supplied.                                                               
                                                                        
This program is very thorough and complete.  The documentation is over  
35 pages long and extremely informative.  It discusses the variables    
considered in calculations, how they are to be derived, and why they are
so important.  The appendix even has definitions on key words, making   
BALLISTIC a fine learning tool.                                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1802

     Volume in drive A has no label
     Directory of A:\

    BAL-READ ME!      3647  11-15-89
    BALISTIC DOC    136404  11-15-89
    BALISTIC EXE    127479  11-15-89
    BAL-GEN  EXE     33507  11-15-89
    BALISTIC DB       4480  11-15-89
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       732   7-11-90  12:58a
    FILE1802 TXT      2443   7-12-90   3:24p
            8 file(s)     308730 bytes
                            9216 bytes free
