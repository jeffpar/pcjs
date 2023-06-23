---
layout: page
title: "PC-SIG Diskette Library (Disk #2517)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2517/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2517"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## MANUAL.TXT

{% raw %}
```























                      /-----------------------------------\
                      /-----------------------------------\
                      /-----------------------------------\
                      |                                   |
                      |                                   |
                      |                                   |
                      |  THE ICON MENU SELECTION PROGRAM  |
                      |  THE ICON MENU SELECTION PROGRAM  |
                      |  THE ICON MENU SELECTION PROGRAM  |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |      By: Victor J. Falgiano       |
                      |      By: Victor J. Falgiano       |
                      |      By: Victor J. Falgiano       |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |     VERSION 1.0     2/17/90       |
                      |     VERSION 1.0     2/17/90       |
                      |     VERSION 1.0     2/17/90       |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      \-----------------------------------/
                      \-----------------------------------/
                      \-----------------------------------/










                                TABLE OF CONTENTS








        INTRODUCTION..................................... 2
        Installing the ICON Program on a hard disk....... 3
        Creating the ICON.PFX file....................... 3
        Making custom icons with Paintbrush.............. 4
        Running the ICON program......................... 5


































                                        1










        INTRODUCTION
        ____________



        The  product, called the Icon Menu Selection Program, creates  an
        operating  environment in which other programs are  selected  and
        executed  by mouse or keyboard control.  The original  intent  of
        the program was an easy to use, picture oriented environment  for
        a  small  child to select and run programs  such  as  educational
        games from a hard disk.  As the project developed, it was  appar-
        ent the program would also be useful for adults as well.


        The  Icon Menu Selection Program is designed to run on an IBM  or
        compatible  PC  with  a minimum of EGA graphics,  256K  of  video
        memory and 512K or more main memory.  If custom icons are desired
        the  user must obtain a copy of PC-Paintbrush (product of  Z-Soft
        Inc.).  Also, a hard disk and Microsoft or compatible mouse,  are
        desirable but not required.

        The  Icon program consists of the executable file, the PIF  (Pro-
        gram Information Files) and a set of icon graphics files (one for
        each  icon).   There  are also utility programs to  aid  in  icon
        creation  and PIF file editing.  Once the program is set  up  for
        your applications, it is extremely simple to use by simply point-
        ing to icon representing the application and selecting it  (point
        and shoot).





















                                        2





        THE ICON MENU SELECTION PROGRAM




        Installing the ICON Program on a hard disk
        __________ ___ ____ _______ __ _ ____ ____




        The ICON program is easily installed on a hard disk by doing the
        following:



             1) Select drive you want to install program on, typically
                C:.

             2) Create a subdirectory named ICON from the root directory.

             3) Go to the subdirectory, put the distribution disk in
                drive A: and type copy a:\*.*

             4) Type copy a:\icons\*.* to copy the icon files to the
                current directory.



        The installation is now complete.



        Creating the ICON.PFX file
        ________ ___ ________ ____



        Creating the ICON.PFX file is a simple process, using the
        utility PIF_ED.EXE supplied with the program.  Go to the directo-
        ry  where the program resides and simply type PIF_ED at  the  DOS
        prompt.   The  program  will ask you to  supply  the  information
        required  for each icon display on the ICON program screen.   The
        icons  are numbered 1-12, starting from the upper left corner  of
        the screen.  The PIF_ED program will automatically create a  file
        named  ICON.PF0,  if this file exists, the current file  will  be
        modified.   If you want to create more than one PIF file, at  the
        command line type PIF_ED ICON.PFx ( where x is a number from 0 to
        9.   During operation of the ICON menu program, the  other  addi-
        tional  PIF files can be accessed by using the PAGE UP  and  PAGE
        DOWN keys.




                                        3





        THE ICON MENU SELECTION PROGRAM



        Special note:  When the ICON program is used to execute a batch file to
        indirectly execute a program, the batch file must reside in the same
        directory as COMMAND.COM, typically C:\.


        If  you  want  the icon program to prompt you  for  command  line
        arguements  put  an  @  for the command  line  arguement  in  the
        ICON.PFx file entry for the application.





        The ICON.PFx entry for batch applications must be in the  follow-
        ing format:




             * The icon image file name

             * The Comment text.

             * The path must be "C:\"

             * The filename must be "COMMAND.COM"

             * The command line arguement "/cBATCHFILENAME" without the
               extension (.BAT).



        Making custom icons with Paintbrush
        ______ ______ _____ ____ __________



        The ICON program is supplied with pre-drawn icons for many popular
        application programs as well as some generic icons such as kid's games,
        text editor and word processor.  If you wish to create your own icons
        you must have a copy of PC-PAINTBRUSH or MICROSOFT PAINTBRUSH.


        Assuming you have the paint program, the ICON program has a template
        file for quicker icon creation.  To create an icon execute the
        PAINTBRUSH program as you normally would.  Load the file
        \ICONS\ICONTMPL.PCX, the icon template will appear.  Next, inside
        the box in the upper left corner, draw your custom icon.


                                        4





        THE ICON MENU SELECTION PROGRAM




        When  you are done creating the icon, seclect the  cutout  option
        and  supply a cutout file name such as \ICON\ICONFILE.PCC.   Now,
        select COPY CUTOUT from the menu and place the cutout box  around
        the  icon so that you have about a 1/16 inch white border  around
        the icon.  Note, the *.PCC file must reside in the same directory
        as icon.exe before you proceed.


        The  image  file  must be prepared before using it  in  the  ICON
        program.  To prepare the image file go to the ICON program direc-
        tory  and at the DOS prompt, type PREPICON filename.pcc.  If  the
        program returns a message "The file has been prepared successful-
        ly"  the icon is ready for use.  If the program returns an  error
        message,  the program could either not find the file or the  file
        has been damaged or not created correctly.  If the file was  bad,
        it will probably need to be recreated.


        Once  the above steps have been completed, go back to the  PIF_ED
        program and select the number of the icon where you want the  new
        one  placed.  Supply the information the PIF_ED program asks  for
        and  save the file.  Start the icon program and verify that  your
        new icon and application works correctly.



        Running the ICON program
        _______ ___ ____ _______



        The  ICON program serves as a total visually  oriented  operating
        environment.  Below are some ways the program can be run on  your
        computer.   Also, below lists some cautionary notes to avoid  any
        conflict or operational problems.  The user should note the  ICON
        program  resides  in the computer's RAM and uses about  100  kilo
        bytes  of  memory when it is running.  Be sure your  machine  has
        sufficient  memory to run the ICON program and  the  applications
        you will be using.










                                        5





        THE ICON MENU SELECTION PROGRAM




        The ICON program can be run in the following ways:



             1) Selecting the \ICON directory and typing ICON at the DOS
                prompt.

             2) Placing the \ICON directory in the PATH command in your
                autoexec.bat file and typing ICON from any directory in
                PATH.

             3) Adding the following commands to your autoexec.bat file
                so that the ICON program executes at startup.

                  a) drive: (If not installed on current drive)

                  b) cd \ICON

                  c) ICON



        NOTE: Load all TSR programs before executing the ICON program to avoid
        memory conflicts.


        Once you execute the ICON program the controls are very simple, the
        operation is as follows:



             1) Either moving the mouse or using the cursor arrow keys on
                the keyboard causes the cursor to move around the screen.

             2) To select an application to run, move the cursor to the
                icon you want and either press any mouse button or the
                keyboard ENTER key.

             3) To leave the ICON program simply press the ESC key.

             4) To execute the DOS shell from within the ICON program
                simply press the keyboard exclamation point (!) key.  To
                return back to ICON from the DOS shell, type EXIT at the
                DOS command prompt.




                                        6





        THE ICON MENU SELECTION PROGRAM






             5) To change between PIF files, press the page up or page
                down key to select another set of icons (if installed).
                The name of the current PIF file is displayed in the
                lower right corner along with the time and date.



        Special  note:  In order for the DOS shell to operate,  the  ICON
        program assumes that COMMAND.COM is installed at C:\.  If this is
        not the case on your particular machine, either copy  COMMAND.COM
        to  C:\ or do not use the DOS shell.  Also, DO NOT load TSR  pro-
        grams  from  within the DOS shell, doing so will leave  a  memory
        "hole"  or  possibly hang the machine when the  ICON  program  is
        terminated.
































                                        7


```
{% endraw %}

## FILE2517.TXT

{% raw %}
```
Disk No: 2517                                                           
Disk Title: Icon Menu Select Prgm #2 (2516 also)                        
PC-SIG Version: S1.01                                                   
                                                                        
Program Title: Icon Menu Selection Program                              
Author Version: 1.01                                                    
Author Registration: $24.95                                             
Special Requirements: 512K RAM (EGA - 256K RAM). Hard drive & mouse reco
                                                                        
Most menu programs are just a list of program names -- BORING!  That was
until the ICON MENU SELECTION PROGRAM.  Now your menus can include      
pictures (icons) to represent program selections, instead of just lines 
of text.  It's also fun.  Use the cursor keys or the mouse to select the
icon/program you want to run, and off you go!                           
                                                                        
Icons are included for generic applications (word processing, kids      
games, etc.) and many specific applications (Lotus 1-2-3, Harvard       
Graphics, etc).  In addition, you can create icons if you're using a    
paint or graphics editor that supports PC-Paintbrush files.  While it   
takes a little more time to set up than other menu programs, the ICON   
MENU SELECTION PROGRAM is a great way to jazz up a computer or make     
it accessible to a child or anyone else who has trouble reading         
text-based menus.                                                       
                                                                        
As an added extra, a disk catalog and label program for both 5.25 and   
3.5 in. disks accompanies the package (currently supporting Epson or    
compatible printers only). The unique features of this program are the  
intuitive user interface ("pop-up" style windows), the ability to enter 
a bin number (for people with more than one disk box), and the ability  
to use more than one database file.  Also, the program allows you to    
print a custom footer on the label such as "Property of: ..." as well as
disk name, catalog number, and bin number.                              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║       <<<<  PC-SIG Disk #2517  ICON MENU SELECTION PROGRAM  >>>>        ║
║                        Disk 2 of 2 (also #2516)                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ NOTE:  Diskgraff (DSKGRAF) and Disklog (DSKLOG) need to be extracted    ║
║        to their own subdirectories as there are files in each program   ║
║        that have the same name, but unique information inside each.     ║
║                                                                         ║
║        To extract the two different files, type the respective name of  ║
║        each file after each is in its own subdirectory. For example,    ║
║                   C:\DISKGRAF>DSKGRAF  (press Enter)                    ║
║                                                                         ║
║ To print the DISKGRAF documentation and installation instructions, type:║
║                   COPY DISKGRAF.DOC PRN  (press Enter)                  ║
║                                                                         ║
║ To print the DISKLOG documentation and installation instructions, type: ║
║                    COPY MANUAL.DOC PRN  (press Enter)                   ║
║                                                                         ║
║ To print the registration form of either program, type: REGISTER (Enter)║
║                       *     *     *     *     *                         ║
║ NOTE:  To view/print the documentation and installation instructions    ║
║        for ICON MENU SELECTION PROGRAM, press ESC, ENTER, and PGDN.     ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MANUAL.TXT

{% raw %}
```























                      /-----------------------------------\
                      /-----------------------------------\
                      /-----------------------------------\
                      |                                   |
                      |                                   |
                      |                                   |
                      |  THE ICON MENU SELECTION PROGRAM  |
                      |  THE ICON MENU SELECTION PROGRAM  |
                      |  THE ICON MENU SELECTION PROGRAM  |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |      By: Victor J. Falgiano       |
                      |      By: Victor J. Falgiano       |
                      |      By: Victor J. Falgiano       |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |     VERSION 1.0     2/17/90       |
                      |     VERSION 1.0     2/17/90       |
                      |     VERSION 1.0     2/17/90       |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      |                                   |
                      \-----------------------------------/
                      \-----------------------------------/
                      \-----------------------------------/










                                TABLE OF CONTENTS








        INTRODUCTION..................................... 2
        Installing the ICON Program on a hard disk....... 3
        Creating the ICON.PFX file....................... 3
        Making custom icons with Paintbrush.............. 4
        Running the ICON program......................... 5


































                                        1










        INTRODUCTION
        ____________



        The  product, called the Icon Menu Selection Program, creates  an
        operating  environment in which other programs are  selected  and
        executed  by mouse or keyboard control.  The original  intent  of
        the program was an easy to use, picture oriented environment  for
        a  small  child to select and run programs  such  as  educational
        games from a hard disk.  As the project developed, it was  appar-
        ent the program would also be useful for adults as well.


        The  Icon Menu Selection Program is designed to run on an IBM  or
        compatible  PC  with  a minimum of EGA graphics,  256K  of  video
        memory and 512K or more main memory.  If custom icons are desired
        the  user must obtain a copy of PC-Paintbrush (product of  Z-Soft
        Inc.).  Also, a hard disk and Microsoft or compatible mouse,  are
        desirable but not required.

        The  Icon program consists of the executable file, the PIF  (Pro-
        gram Information Files) and a set of icon graphics files (one for
        each  icon).   There  are also utility programs to  aid  in  icon
        creation  and PIF file editing.  Once the program is set  up  for
        your applications, it is extremely simple to use by simply point-
        ing to icon representing the application and selecting it  (point
        and shoot).





















                                        2





        THE ICON MENU SELECTION PROGRAM




        Installing the ICON Program on a hard disk
        __________ ___ ____ _______ __ _ ____ ____




        The ICON program is easily installed on a hard disk by doing the
        following:



             1) Select drive you want to install program on, typically
                C:.

             2) Create a subdirectory named ICON from the root directory.

             3) Go to the subdirectory, put the distribution disk in
                drive A: and type copy a:\*.*

             4) Type copy a:\icons\*.* to copy the icon files to the
                current directory.



        The installation is now complete.



        Creating the ICON.PFX file
        ________ ___ ________ ____



        Creating the ICON.PFX file is a simple process, using the
        utility PIF_ED.EXE supplied with the program.  Go to the directo-
        ry  where the program resides and simply type PIF_ED at  the  DOS
        prompt.   The  program  will ask you to  supply  the  information
        required  for each icon display on the ICON program screen.   The
        icons  are numbered 1-12, starting from the upper left corner  of
        the screen.  The PIF_ED program will automatically create a  file
        named  ICON.PF0,  if this file exists, the current file  will  be
        modified.   If you want to create more than one PIF file, at  the
        command line type PIF_ED ICON.PFx ( where x is a number from 0 to
        9.   During operation of the ICON menu program, the  other  addi-
        tional  PIF files can be accessed by using the PAGE UP  and  PAGE
        DOWN keys.




                                        3





        THE ICON MENU SELECTION PROGRAM



        Special note:  When the ICON program is used to execute a batch file to
        indirectly execute a program, the batch file must reside in the same
        directory as COMMAND.COM, typically C:\.


        If  you  want  the icon program to prompt you  for  command  line
        arguements  put  an  @  for the command  line  arguement  in  the
        ICON.PFx file entry for the application.





        The ICON.PFx entry for batch applications must be in the  follow-
        ing format:




             * The icon image file name

             * The Comment text.

             * The path must be "C:\"

             * The filename must be "COMMAND.COM"

             * The command line arguement "/cBATCHFILENAME" without the
               extension (.BAT).



        Making custom icons with Paintbrush
        ______ ______ _____ ____ __________



        The ICON program is supplied with pre-drawn icons for many popular
        application programs as well as some generic icons such as kid's games,
        text editor and word processor.  If you wish to create your own icons
        you must have a copy of PC-PAINTBRUSH or MICROSOFT PAINTBRUSH.


        Assuming you have the paint program, the ICON program has a template
        file for quicker icon creation.  To create an icon execute the
        PAINTBRUSH program as you normally would.  Load the file
        \ICONS\ICONTMPL.PCX, the icon template will appear.  Next, inside
        the box in the upper left corner, draw your custom icon.


                                        4





        THE ICON MENU SELECTION PROGRAM




        When  you are done creating the icon, seclect the  cutout  option
        and  supply a cutout file name such as \ICON\ICONFILE.PCC.   Now,
        select COPY CUTOUT from the menu and place the cutout box  around
        the  icon so that you have about a 1/16 inch white border  around
        the icon.  Note, the *.PCC file must reside in the same directory
        as icon.exe before you proceed.


        The  image  file  must be prepared before using it  in  the  ICON
        program.  To prepare the image file go to the ICON program direc-
        tory  and at the DOS prompt, type PREPICON filename.pcc.  If  the
        program returns a message "The file has been prepared successful-
        ly"  the icon is ready for use.  If the program returns an  error
        message,  the program could either not find the file or the  file
        has been damaged or not created correctly.  If the file was  bad,
        it will probably need to be recreated.


        Once  the above steps have been completed, go back to the  PIF_ED
        program and select the number of the icon where you want the  new
        one  placed.  Supply the information the PIF_ED program asks  for
        and  save the file.  Start the icon program and verify that  your
        new icon and application works correctly.



        Running the ICON program
        _______ ___ ____ _______



        The  ICON program serves as a total visually  oriented  operating
        environment.  Below are some ways the program can be run on  your
        computer.   Also, below lists some cautionary notes to avoid  any
        conflict or operational problems.  The user should note the  ICON
        program  resides  in the computer's RAM and uses about  100  kilo
        bytes  of  memory when it is running.  Be sure your  machine  has
        sufficient  memory to run the ICON program and  the  applications
        you will be using.










                                        5





        THE ICON MENU SELECTION PROGRAM




        The ICON program can be run in the following ways:



             1) Selecting the \ICON directory and typing ICON at the DOS
                prompt.

             2) Placing the \ICON directory in the PATH command in your
                autoexec.bat file and typing ICON from any directory in
                PATH.

             3) Adding the following commands to your autoexec.bat file
                so that the ICON program executes at startup.

                  a) drive: (If not installed on current drive)

                  b) cd \ICON

                  c) ICON



        NOTE: Load all TSR programs before executing the ICON program to avoid
        memory conflicts.


        Once you execute the ICON program the controls are very simple, the
        operation is as follows:



             1) Either moving the mouse or using the cursor arrow keys on
                the keyboard causes the cursor to move around the screen.

             2) To select an application to run, move the cursor to the
                icon you want and either press any mouse button or the
                keyboard ENTER key.

             3) To leave the ICON program simply press the ESC key.

             4) To execute the DOS shell from within the ICON program
                simply press the keyboard exclamation point (!) key.  To
                return back to ICON from the DOS shell, type EXIT at the
                DOS command prompt.




                                        6





        THE ICON MENU SELECTION PROGRAM






             5) To change between PIF files, press the page up or page
                down key to select another set of icons (if installed).
                The name of the current PIF file is displayed in the
                lower right corner along with the time and date.



        Special  note:  In order for the DOS shell to operate,  the  ICON
        program assumes that COMMAND.COM is installed at C:\.  If this is
        not the case on your particular machine, either copy  COMMAND.COM
        to  C:\ or do not use the DOS shell.  Also, DO NOT load TSR  pro-
        grams  from  within the DOS shell, doing so will leave  a  memory
        "hole"  or  possibly hang the machine when the  ICON  program  is
        terminated.
































                                        7


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2517

     Volume in drive A has no label
     Directory of A:\

    DSKLOG   EXE     86523   4-02-91   2:50p
    DSKGRAF  EXE    117312   4-02-91   2:45p
    LIST     COM     20951   9-05-90   8:04a
    FILE2517 TXT      2813   7-15-91  10:25a
    GO       BAT        58   7-10-91   5:03a
    GO       TXT      2003   7-10-91   6:38a
    DOCS         <DIR>    
    ICONS        <DIR>    
            8 file(s)     229660 bytes

     Directory of A:\DOCS

    .            <DIR>    
    ..           <DIR>    
    MANUAL   TXT     12771   9-08-90   2:33p
            3 file(s)      12771 bytes

     Directory of A:\ICONS

    .            <DIR>    
    ..           <DIR>    
    GNCADICN PCC      2996  10-21-89   1:58p
    PBRSHICN PCC      4138  10-21-89   1:59p
    ORCICN   PCC      2704   9-10-89   6:36p
    KIDGICN  PCC      3524   9-10-89   8:31p
    TICON5   PCC      3482   9-10-89   8:30p
    HGICN    PCC      3678   9-01-89   9:33p
    TICON2   PCC      4325   9-10-89   7:07p
    ACDICN   PCC      4459   9-10-89   7:33p
    SYMICN   PCC      2787   9-10-89   8:03p
    SPICN    PCC      2868   9-10-89   7:45p
    MASMICN  PCC      2926   9-10-89   9:08p
    TXTICN   PCC      3958   9-10-89   7:07p
    MCADICN  PCC      3212   9-10-89   8:31p
    QBICN    PCC      2741   9-10-89   8:54p
    SIMICN   PCC      3140  10-01-89  10:03a
    SWAYICN  PCC      4084  10-21-89   2:56p
    BATCHICN PCC      4731  10-21-89   2:56p
    EGABCICN PCC      3929  11-06-89   9:27p
    ORCPICN  PCC      2907  11-08-89   2:09a
    CKEYICN  PCC      3214  11-17-89  11:26p
    EZFLOICN PCC      3650  11-18-89  11:58p
    FTAPEICN PCC      4683  11-26-89  12:17a
    PRODICN  PCC      3954  12-12-89   8:05p
    TUTICN   PCC      4728  12-16-89   1:06p
    WSICN    PCC      4064   1-29-90   9:33p
    DISKLOG  PCC      4126  12-10-90  11:34p
    DGRAF    PCC      4908  12-14-90   9:53p
           29 file(s)      99916 bytes

    Total files listed:
           40 file(s)     342347 bytes
                            3072 bytes free
