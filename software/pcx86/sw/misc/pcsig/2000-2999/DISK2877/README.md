---
layout: page
title: "PC-SIG Diskette Library (Disk #2877)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2877/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2877"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## INSTALL.DOC

{% raw %}
```


           ****************************************************
           *          RO-SOFT   SYSTEMS   (C) 1992            *
           * ================================================ *
           *   INSTALL.EXE   Ver 4.5   BY  Robert  Ossowski   *
           ****************************************************

                       * MAKE  YOUR  COMPUTING  EASY *

                           _______
                      ____|__     |               (R)
                   --|       |    |-------------------
                     |   ____|__  |  Association of
                     |  |       |_|  Shareware
                     |__|   o   |    Professionals
                   -----|   |   |---------------------
                        |___|___|    MEMBER


   * INSTALL.EXE *    This is a small customizable software installation
   routine.  It is being used for all RO-SOFT ShareWare installation and
   may be used by  Disk Venders  for easy installation  of any  software
   packages that do not supply an install routine.  It is being distrib-
   uted as  "FREEWARE" in that it must display the RO-SOFT header.  This
   is my first attempt at allowing  INSTALL customization  so I am  sure
   that improvements may be needed.  Users  may enter their own top line
   of the header but the rest remains.  This routine may be run from any
   source path (i.e. a:install) even though you may be on drive C:.  You
   must be aware that,  when you run the customize options, INSTALL puts
   the changes in it's own  ".EXE"  file on the disk it is executed from
   (giving virus checkers fits).  This will not affect the end user.

     INSTALL first checks the source disk for any zipped files  that are
   not in executable format.   The initialized search types are  ".ZIP",
   ".LZH", and ".ARC".   For these type files you must supply the unpack
   routine that is necessary, "PKUZIP.EXE", "LHA.EXE", and  "UNPACK.COM"
   or the user must have them in his DOS search path. Any files of these
   types will be passed to the appropiate unpack routine with the current
   destination directory as a command path.    You may change these file
   types and commands as needed.

     INSTALL  then checks for name entries  in the execute files  list.
   Any matching files found are executed with the destination directory
   as a command option.  These files should be in executable zip format.
   Or maybe you have a bat file on the source disk that you want run.

     INSTALL  then checks for name entries in the copy files name list.
   These files will be copied to the current destination directory. See
   the customize options for filename format entry.

     INSTALL  then checks for a ".BAT"  file name to run from the first
   destination path.   This file must have been transfered  during  the
   install.

     Available at install completion, is a listing of all the available
   RO-SOFT utilities.

     Finally INSTALL checks for a command to be executed upon exit. The
   command is put into the DOS keyboard buffer and INSTALL terminates.


                ***************************************
                *     Customizing Your Installation   *
                ***************************************


     To set up the install routine for your files enter "INSTALL /" and
   you will be given the following option screen :

                    DOS  UTILITIES  (C)1992  BY  RO-SOFT

                  ***************************************
                  *   RO-SOFT  INSTALLATION  PROCEDURE  *
                  * =================================== *
                  *    Ver 4.5  BY  Robert  Ossowski    *
                  ***************************************

                     * MAKE  YOUR  COMPUTING  EASY *

            1. Enter new installation pathname
            2. Edit sign on header line
            3. Enter new zip file extents and unzip commands
            4. Enter new zip.exe file names
            5. Enter new file names to copy
            6. Enter .BAT file name to run from installed directory
            7. Enter new command to execute on install completion


              Enter your option number or "Esc" to exit ?
  ==========================================================================

  # Option 1. Enter new installation pathname #

     With this option you may enter the initial drive and directory name
  for the installation destination. Of course this may be changed by the
  user during install.  Choosing  this option  gives  you the  following
  display screen.   It is the same screen the user will get for each ZIP
  file to install allowing him to change the path.

                    DOS  UTILITIES  (C)1992  BY  RO-SOFT

                  ***************************************
                  *   RO-SOFT  INSTALLATION  PROCEDURE  *
                  * =================================== *
                  *    Ver 4.5  BY  Robert  Ossowski    *
                  ***************************************

                    *   MAKE  YOUR  COMPUTING  EASY   *


	 Enter new path for  system     files destination ?

	 C:\ROSOFT\......................................................


		  Press "Enter" to accept or "Esc" to abort !



                ***************************************
                *     Customizing Your Installation   *
                ***************************************



  # Option 2. Edit sign on header line #

     With this option you may enter your customized header lines for the
  display screens.  The lines that you may change are as follows :

                    DOS  UTILITIES  (C)1992  BY  RO-SOFT

                      RO-SOFT  INSTALLATION  PROCEDURE
                       Ver 4.5  BY  Robert  Ossowski

                    *   MAKE  YOUR  COMPUTING  EASY   *



  # Option 3. Enter new zip file extents and unzip commands

     With this option you may enter new zip file extents and their associated
  commands.  Three types are allowed on any install.  The following three are
  the pre-initialized set.   Each is searched for using the *.ext mask so all
  files with these extents will be passed  to the associated command function
  followed by the current destination path.  You may also enter any necessary
  unzip command switches following the command name.


	  Edit zip file extents and associated unzip command




		ZIP     	PKUNZIP ................
		LZH     	LHA x ..................
		ARC     	UNPACK .................




	 Enter "F10" to store, "Enter" to accept, "Esc" to abort



                ***************************************
                *     Customizing Your Installation   *
                ***************************************


  # Option 4. Enter new zip.exe file names #

     With this option you may enter up to  ten filenames  to be executed
  from the source disk.   You may use the wildcard characters * and ? in
  the names.  All matching files found will be executed.  In the example
  below I use "??" so that when changing version numbers I don't have to
  reset the install routine.    These files should be in a zip.exe form.
  They will be executed with  the current destination path  as a command
  option.  At each such file found  the user  will be prompted  for  any
  destination change that he may desire.

	  Edit zip.exe filenames to be executed for installation

                     UTL??EXE.EXE
                     UTL??DOC.EXE
                     ............
                     ............
                     ............
                     ............
                     ............
                     ............
                     ............
                     ............

	 Enter "F10" to store, "Enter" to accept, "Esc" to abort



  # Option 5. Enter new file names to copy #

     This option gives you a screen similar to  Option 3  to enter up to
  ten other file names using wildcard characters.    All the files found
  matching these entries  will be copied to the current destination dir-
  ectory.    These would be any files that are not in any zip format but
  need to be installed.


  # Option 6. Enter .BAT file name to run from installed directory #

     With this option you may enter the name of a  .BAT  file to execute
  after all files are transfered.  This file  must reside  in the  first
  directory that files were installed in.


  # Option 7. Enter new command to execute on install completion #

     With this option you may enter a command to execute at installation
  completion. This is for automatically running the installed function.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2877

     Volume in drive A has no label
     Directory of A:\

    FILE_ID  DIZ       341  10-04-92  10:13a
    INSTALL  DOC      8865  10-04-92  10:13a
    VENDOR   DOC     27094  10-04-92  10:13a
    INSTALL  EXE     10043  10-04-92  10:13a
    UTL45EXE EXE    174362  10-04-92  10:13a
    UTL45DOC EXE     91996  10-04-92  10:13a
    GO       BAT        37  11-17-92   3:55p
    SHOW     EXE      2040   9-12-88  10:48a
            8 file(s)     314778 bytes
                            4096 bytes free
