---
layout: page
title: "PC-SIG Diskette Library (Disk #1201)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1201/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1201"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EZ-DISKCOPY"

    Once EZ-DISKCOPY reads the contents of a disk into memory, you can make
    as many copies as you want without your PC rereading the original disk.
    Make unlimited copies after a single master disk read.  Just like a
    dedicated hardware duplicator (which can cost thousands), and just about
    as fast!  The DOS DISKCOPY command spends about 27 seconds loading data
    on every copy.  EZ-DISKCOPY does it only once, saving almost a minute
    every three disks.  Even better, the program verifies the copy during
    each operation.  Map disk usage and get sides and sectors information
    about a disk.  If you choose, you do it all without typing in a single
    command.  Just scroll across the pull-down menu and hit Enter.  As an
    option, you can use single-character commands.
    
    Other features include verify, format only, compare, directory
    information, extensive on-line help, and more.  Extensive, easy-to-read
    documentation is included in the package.  The only things to be
    wary of are memory-resident programs which chew into the memory needed
    for EZ-DISKCOPY.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EZDC_HM.TXT

{% raw %}
```
#1#


                                EZ-DiskCopy
                              by EZX Corporation

  EZ-DiskCopy  was  written  by  MaeDae Enterprises  based  on  FastCopy  by
  Systems, Software, Support of Houston, TX.

  EZ-DiskCopy  turns  your computer into a high speed  diskette  duplicating
  machine  equalling  the  performance of many dedicated  hardware  diskette
  duplicators costing thousands of dollars.   Comments  or  suggestions  for
  improving EZ-DiskCopy  will be appreciated.
     
  EZ-DiskCopy  requires  an  IBM PC or compatible with 256K of RAM.  Display
  adapters  known  to  work with EZ-DiskCopy  are the  IBM monochrome (MDA),
  color (CGA),  enhanced  graphics (EGA),  and  video  graphics  array (VGA)
  adapters.

  EZ-DiskCopy   supports  160K,  180K,  320K,  and  360K  format  5 1/4 inch
  diskettes and 720K 3 1/2 inch diskettes.
#20#

  General help for all menus:
  
  This menu is broken up into two basic windows.   The  window  at  the  top
  of  your screen shows several options to choose from.   The window at  the
  bottom  of  the  screen expands on what  will  occur  if  you  choose  the
  highlighted option (the one that has a different background color).
     
  Options may be selected in one of two ways.   You  can  either  press  the
  first letter of the desired command  or  move the highlight bar  over  the
  desired option and press enter.   To move the  highlight  bar  use  either
  the space bar, up arrow, down arrow, left arrow, or right arrow.   You can
  also use home to move to the first top line item on the menu.

  Using the first letter of a command only works in the  ACTIVE  window.  If
  you  don't have any pulldown then the active window  is  the  top  window.
  Once you pulldown one of the options that becomes the active window.   You
  must use one of the commands in the pulldown once it is active.    You can
  always  use Escape to back out of the pulldown and return to the top menu.
#21#

  You are now using the EZ-DiskCopy Main Menu.  From here you can access the
  main functional areas of EZ-DiskCopy.  Refer to the  On-Line Manual to get
  a feel for what a fully featured diskette duplicator can do.

  An additional  status window  is displayed near the bottow of your screen.
  It shows you the  status for load, copy, compare, and format.   A  time in
  seconds is  displayed after  each type of operation.   This  shows you the
  time it took for the previous load, copy, etc.  If 0 seconds is displayed,
  then you haven't performed an operation to allow EZ-DiskCopy  to time that
  function.  EZ-DiskCopy  uses a "smart" form of counting where the copy and
  compare counters are  reset to zero when you load a disk.   That way  they
  always provide you information  relative to the disk you are working with.

  Please note that an abbreviated directory window will appear in the middle
  of your screen as soon as a valid source diskette has been loaded. It will
  show the diskette volume label (if any) and the first four file names.

  We have tried to  design EZ-DiskCopy to let you get your job done  quickly
  and easily.   Please feel free to forward any  suggestions for improvement
  to us at EZX Publishing, Attn: EZ-DiskCopy Author.
#100#


  Drive  was  not ready for read/write.   Please ensure you have a floppy in
  the drive and the drive door is closed.

  Sometimes on very fast AT compatible computers with 1.2 Mb diskette drives
  the drive can't respond quickly enough.   In this case try  the  operation
  again  or  add  a  utility  to  modify the timeout on the drive.   Several
  programs are available to fix this disk drive timeout problem.

#200#

  An error was detected  while trying to read your source diskette.   Please
  ensure the diskette is inserted in the specified drive and that the  drive
  door is closed.  Also you might try to take the diskette out and re-insert
  it back into the drive.   Sometimes the diskette isn't centered  correctly
  within the disk drive.

  The  source  was not loaded so you will not be able to  make  any  copies.

  Only  standard  160K,  180K,  320K,  and  360K  5 1/4"   and  720K  3 1/2"
  diskette formats are supported.

#300#
  EZ-DiskCopy  could not perform the requested operation.  This screen gives
  help related to the format and copy diskette operations.  An error occured
  during the requested operation.   Listed below are some helpful hints with
  a detailed error listing provided on the next screen.

  Please ensure:    1. The diskette isn't write protected.
                    2. There really is a  diskette in the destination drive.
                    3. There is no obvious physical damage to the  diskette.
                    4. You aren't trying to save to a 1.2 Mb diskette  in  a
                       360 Kb disk drive or a 1.44M diskette as a 720K disk.
                    5. You don't have any disk cache software that is trying
                       to buffer writes to your floppy drive.
                    6. You  really do have the specified destination  drive.

  This error may be generated on some hard disk based systems where you boot
  from the hard disk.  Try  booting from a floppy containing your DOS.   The
  problem may go away.   We have seen this happen with certain  versions  of
  DOS, specifically Compaq DOS 3.31 and IBM PC DOS 4.0.  We will continue to
  research the problem and provide an update ASAP!

  The  next help screen  will provide a detailed explaination of  the  error
  codes.
#301#
 Error codes:

 Code                        Description
 ════  ═══════════════════════════════════════════════════════════════

    0  Unable to bring the diskette in drive up to speed for operation
    1  Bad command: invalid request made to diskette controller
    2  Bad address mark: sector ID marking invalid or not found
    3  Write protect error: attempt to write on protected diskette
    4  Bad sector: requested sector not on diskette
    8  DMA failure
    9  DMA boundary error: attempt to DMA outside 64K area
   16  Bad CRC: diskette read found invalid parity check of data
   32  Controller failed: diskette controller malfunction
   64  Bad seek: move to requested track failed
  128  Time out: drive did not respond

  Note:   The  description of these  error codes were  obtained from several
  sources for the IBM PC.   The  descriptions are very generic because there
  can be  a wide variety of problems return the  same error code.   We don't
  mean to be cryptic but there  is really  no way to return a specific error
  code for every possible error condition.
#400#
  This screen shows you a lot of technical information that  probably  seems
  very confusing at first.   DOS uses all this information and more to  keep
  track of information stored on floppy diskettes.

  As  the  IBM PC and DOS has evolved over the last  few years  so  has  the
  formats of the media used in the computer.  This has caused a large number
  of formats for the media.   EZ-DiskCopy uses the following drive types:

  0  160K  Single sided, 40 track, 8 sectors per track
  1  180K  Single sided, 40 track, 9 sectors per track
  2  320K  Double sided, 40 track, 8 sectors per track
  3  360K  Double sided, 40 track, 9 sectors per track
  4  720K  Double sided, 80 track, 9 sectors per track
  5  1.2M  Double sided, 80 track, 15 sectors per track  ** Not supported **
  6  1.44M Double sided, 80 track, 18 sectors per track  ** Not Supported **

  Note:  For the higher capacity drives use our EZ-Copy Plus!
 
  Other information displayed on this page will need to be looked  up  in  a
  DOS technical reference manual.   You can easily obtain a book  containing
  this information from your local computer store.
#401#

  A map of your diskette is also laid out before you.   Any cluster with a *
  contains information.  Any cluster with a  .  doesn't contain information.

  Information on how the clusters relate to absolute sides, tracks, sectors,
  etc. can be obtained using the info/drive status option under the  utility
  section of EZ-DiskCopy.

#600#

  You must  first load a diskette  before  you can save it  or compare it to
  another diskette.  Use the load disk option to load a diskette.

  Did you have a disk error on the previous read?  Only diskettes which have
  been read into memory can be written back out.

  If  you  are using this option to format diskettes first  format  a  clean
  master  diskette  using  your DOS.  Load that diskette  into  EZ-DiskCopy.
  Turn the forced format option on for best results.   You can now  save  as
  many copies of the diskette as desired.   The result  is the same as using
  DOS's format command but is faster.

#650#

  You  must first load a diskette before you can do a directory of it.   Use
  the load disk option to load a diskette.

  The  in-memory directory command looks at the diskette image stored in RAM
  and generates a directory from it instead of re-reading the diskette. This
  is much faster and more convient for the user.

#660#

  The in-memory directory command allows you to do a directory of the source
  disk  you have  loaded in memory.   This allows you to  quickly check  the
  contents of the in-memory diskette to ensure you have the correct diskette
  loaded for copies or compares.

  The  in-memory directory  displays a file number to keep track of the file
  you are on,  the filename,  file extension, and file size in bytes.   This
  directory is obtained by checking the file allocation table (FAT) which is
  located  in the  image of the diskette stored in memory.   This  technique
  doesn't use DOS.   EZDC tries to obtain the filenames from the information
  stored in memory.   There is  no other way without asking  DOS to read the
  diskette directory from the floppy diskette.   Our technique  works on all
  versions of DOS up to DOS 4.01. Since this is the latest version available
  at this time,  we feel  the technique works  under  all  known conditions.
  However, future versions of DOS may change the format of the FAT stored on
  floppy diskettes.   If this occurs, contact us to  upgrade  to the  latest
  version of EZDC that supports your new DOS version.

#800#
  Use  of  this  option   is  highly  recommended  for  companies  producing
  diskettes  which  need  to be read on the widest range of  computers.   By
  forcing  the  format of a diskette you guarantee that data  is  laid  down
  cleanly  on the new tracks.   If  you simply write over old  data  without
  reformatting  the  diskette it can cause some problems  with 1.2 Mb floppy
  drives.  The 1.2 Mb drives are very picky on the AT.   By reformatting the
  floppy it helps readability.

  Use  of the  forced format option will cause the copy  operation  to  take
  about  50% longer than saving to a formatted floppy without forced format.
  If you  are  constantly  saving  to  blank  unformatted  diskettes  it  is
  strongly recommended that you set the default at  forced format.   Without
  forced format EZ-DiskCopy  first tries to write to  the diskette,  if that
  fails it will then set forced format to on for  this  one copy  only.  You
  can save the one or two seconds test time by telling  EZ-DiskCopy  to just
  go ahead and format the floppy without testing to see if the  diskette  is
  already formatted.

  Note:  If you are always working with  unformatted diskettes,  using  this
  this option  will save  you about 1/2 second per copy.   EZ-DiskCopy, like
  DOS,  first tries to write to the floppy  before  resorting to formatting.
  You are saving the time it takes to determine the  floppy isn't formatted.
#900#

  This  option  allows  you to  define the default  path for  accessing  the
  on-line manual and context sensitive help.   Make  sure  you  include  the
  index file (.INX) along with the help/manual file (.TXT) in the  specified
  directory.

#1000#

  This option alows you to enable/disable the  sound  or  beeps  on  errors.
  Some  people  find  programs  that beep on errors to  be annoying  (me for
  one).   This option  will  allow you  to  disable  ALL  warning  beeps  in
  EZ-DiskCopy.

#1100#
   
  This  menu  allows you to change all the colors used in  EZ-DiskCopy.   To
  change a default color - first use the up or down arrow key to select  the
  color, then type in the new color.   When you have changed all the  colors
  press Ctrl+D to display these colors in a  sample  window.   As  with  all
  installation options,  these changes will not be used until you choose the
  retain option on the main menu.   This allows you to experiment  with  the
  installation options  and then not have to lose your original defaults.
   
  Please  keep  in  mind  the  foreground  text  colors  can  be  0-15,  the
  background 0-7. If you choose a text color the same as a background  color
  then the text will disappear.  You may notice some of your installed color
  combinations  result  in  invisible lines  on  the  Ctrl+D  popup  window.
  Please be careful not to choose this color for one of your text colors!!

  Note:  For many of the EZ-DiskCopy installable options and user inputs you
  will  see a prompt containing the characters  .   If  you  count  the
  number of 's you will find the maximum number of characters that  can  be
  entered.   Escape  is used throughout EZ-DiskCopy  to signal "I want out".
  Press Enter, up arrow, down arrow, or whatever  is  asked for to enter the
  desired value.   Escape  will  throw away any  immediate  changes and  get
  you out of the area you are in.
#1101#

  Please  note  that  the background color (0-7) is one digit long  and  the
  foreground color (0-15) is two digits long.   That is why you will see the
  input  prompt  (the  s) change it's  width as you go between the  colors.

#1200#

  This screen shows the possible combinations of colors in EZ-DiskCopy.

  If you are using a non IBM display adapter you may have to "play" with the
  colors to get a pleasing combination.  EZ-DiskCopy defaults to colors that
  work  well  with the  IBM Color Graphics Adapter,  IBM  Enhanced  Graphics
  Adapter, and IBM Monochrome Display Adapter.

  On  some  monochrome  display  adapter  clones  you  may  need  to alter a
  foreground text color to get the background to change intensity.

  The default combination of colors will work on any 100% IBM PC  compatible
  display adapter!

#1300#

  EZ-DiskCopy  allows  the  help & manual paths,  program  colors,  etc.  to
  be saved in a configuration file.   If no configuration file is  specified
  on the  command line  (ex. C:>EZDC C:\EZDC\MyConfg.CNF) when you  call  up
  EZ-DiskCopy then EZ-DiskCopy will use the default name of EZDC.CNF.

  You are being asked for the name of the configuration file to  load.   You
  may have several configuration files saved under different names.

  Example:   BW.CNF (for black and white composite monitors  attached  to  a
  composite color card), etc.

  Please make sure that the configuration file you are asking EZ-DiskCopy to
  use is really an EZ-DiskCopy configuration file!

  Remember you can always press ESC if you got into this area by accident.

#1400#

  EZ-DiskCopy  allows the default help/manual paths, program colors, etc  to
  be saved in a configuration file.   If no configuration file is  specified
  on the  command line  (ex. C:>EZDC C:\EZDC\MyConfg.CNF) when you  call  up
  EZ-DiskCopy then EZ-DiskCopy will use the default name of EZDC.CNF.

  You are being asked for the name of the configuration file to save all the
  program defaults to.  You may have several configuration files saved under
  different names.

  Examples:  BW.CNF  (for black and white composite monitors attached  to  a
  composite color card), etc.

  Please  remember  you can always press ESC  if you got into this  area  by
  accident.

#1500#

  The diskettes you are trying to compare are  not the same type.   Diskettes
  come in several different capacities.  You are trying to compare one format
  with another.  This can't be performed.

  Use the utilities section of EZ-DiskCopy  to determine the diskette  type.

#1510#

  The compare of the two diskettes failed.  The diskette stored in memory is
  not the same as the diskette you asked EZ-DiskCopy  to compare it to.

#1520#

  The diskette  in  memory  is the same as the diskette you  compared it to.
  Both  the  format  (160K, 180K, 320K, 360K, and 720K) are the same and the
  contents are the same.

  A  complete  byte for byte  comparison was performed.  The comparison  was
  performed on the  in-memory disk and the  specified diskette one byte at a
  time.  If any byte wasnn't the same, you would have been shown a different
  window saying that the diskettes were not the same.

#1600#

  This screen  allows you to  select the  default format capacity  for  your
  disk drives.   You  specify the format for each drive by  typing the drive
  letter, an equal sign, and then the desired format capacity.   Do  not use
  any  spaces  within  the specification.   For example:  A=360  is  ok, but
  A= 360 or A=3 60 are not!  You can change the format capacity of any drive
  or all drives by simply editing the displayed values.  Also, make sure the
  drive you specify is a DOS compatible drive.   Only those drives  normally
  addressable  through  DOS  via  INT13  (a DOS standard access method)  are
  supported.

  Editing keys:  Keypad Home, End,  left arrow, right arrow, insert, delete,
                 and much more.

  Each of your floppy drives support a high end format capacity but may also
  be  able  to support  older and smaller  disk formats.   For example:  The
  first IBM PC back in 1981 only supported the 5 1/4" 160K format.  With the
  improvements in disk drive technology and DOS revisions the capacity  grew
  in  steps up  to the  current 360K  for the  standard double sided  double
  density 5 1/4" drive.   We provide support for the older formats, allowing
  compatibility with the older machines and  users of older versions of DOS.
#1625#
  EZ-DiskCopy   could not understand  the format you specified.   One of two
  possibilities exist.   Either  you specified the information in an invalid
  format  or  the capacity you specified for one of the drives is not valid.

  Assume drive A: is a 720K drive and B: is a 360K drive.

  Valid commands:  A=720 B=360   or   A=720 B=160   or  A=720 B=180

  Invalid commands:  A=360 B=720   or  A=720 B=3 60   or  A =720 B=360

  Do not use any spaces in the drive=capacity statement. Ensure the capacity
  you specify is valid and that the drive is a DOS compatible drive.

  An arrow is probably  shown on your screen  under a section of the  format
  specification.   This  shows where we were in  working  with  your desired
  formats when the error was encountered.   Usually  the arrow  will  appear
  immediately  after  the end of the statement  that caused the error.   For
  example:  A=160 B=360    As the formats are looked at,  the arrow would be
  pointing to the space after 160 (it had just finished getting the  desired
  format capacity).   A check  would be performed  to see  if drive A  could
  support a 160K format (a 720K drive can't).   You would then be given  the
  error message.
#1650#

  This screen allows you to define the different drives on your computer and
  their maximum capacity.  You specify the capacity for each drive by typing
  the drive letter, an equal sign, and then the drive capacity.   Do not use
  any  spaces  within  the specification.   For example:  A=360  is  ok, but
  A= 360 or A=3 60 are not! You can change the maximum capacity of any drive
  or all drives by simply editing the displayed values.  Also, make sure the
  drive you specify is a DOS compatible drive.   Only those drives  normally
  addressable  through  DOS  via  INT13  (a DOS standard access method)  are
  supported.

  Editing keys:  Keypad Home, End,  left arrow, right arrow, insert, delete,
                 and much more.

  Many of the older computers don't directly support the newer drives  using
  the BIOS calls.  Because of this, we allow you to override the information
  we obtain from BIOS calls.   Some of the older computers may report that a
  drive  may not exist or be the wrong size when we inquire thru BIOS calls.
  If your configuration  differs  from the one shown, add  additional drives
  and correct capacities. After you save the configuration, EZ-Diskcopy will
  use your information and  ignore the initial drive information provided by
  BIOS calls.
#1675#
         The only valid capacities in K are 360, 720, 1200, or 1440!
  EZ-DiskCopy  could not understand the capacity you specified.   One of two
  possibilities exist.   Either  you specified the information in an invalid
  format  or  the capacity you specified for one of the drives is not valid.

  Assume drive A: is a 720K drive and B: is a 360K drive.

  Valid command:  A=720 B=360

  Invalid commands:  A=360 B=720   or  A=720 B=3 60   or  A=720 B=320

  Do not use any spaces in the drive=capacity statement. Ensure the capacity
  you specify is the  maximum capacity  supported  by the drive and that the
  drive is a DOS compatible drive.

  An arrow is probably shown on your screen  under a section of the capacity
  specification.   This  shows where we were in  working  with  your desired
  formats when the error was encountered.   Usually  the arrow  will  appear
  immediately  after  the end of the statement  that caused the error.   For
  example:  A=160 B=360  As the capacities are looked at, the arrow would be
  pointing to the space after 160  (it had just finished getting the actual
  maximum drive capacity).  160 is an invalid maximum capacity!
#1700#
  EZ-DiskCopy  "spools"  your diskette to a specified drive when you run out
  of normal RAM in your computer's main memory.   When  working  with 3 1/2"
  disks, your computer can't store the entire diskette in memory.   We  send
  the  portion  that  can't be stored in main memory  to a disk file.   This
  option allows you to specify which drive will  contain the temporary file.

  A file by the name of EZDCDISK.$$$ is created in the root of the specified
  spool drive  and  used for the  temporary storage  of  the  portion of the
  diskette that won't fit into memory.   This file is created  for  spooling
  and then erased after you finish using EZ-DiskCopy.

  Please ensure there is about  one megabyte of free disk space available on
  the specified drive.  Not all of this will be used but it is the suggested
  minimum to prevent any possible problems.

  For higher performance, specify a large RAM disk as the spool drive.  This
  will allow EZ-DiskCopy to spool to a high speed device, making the copying
  of larger diskettes very fast. Specify your extended or expanded memory as
  a RAM disk and install EZ-DiskCopy to spool to this drive for  much faster
  operation.

  Drives A-Z are allowed for spooling.   Do NOT spool to the same drive that
  you are copying!  Using floppy drives for spooling is not recommended.
#1800#

  This option  allows  you to  address  any floppy drive  attached  to  your
  computer as long as it is supported in your computer's  Basic Input Output
  System (BIOS).   Press the  letter corresponding  to the drive you want to
  access (example: G for diskette drive G:).   Special  checks are performed
  to ensure that you don't use a hard disk  or  simular type drive for  this
  operation.   Most of us  don't appreciate  it when a program  accidentally
  reformats our hard disk.

  Most computers  support drives A: and B: as floppy drives (removable media
  drives).   Hard disks  normally  start at  C: and run thru Z:  (and aren't
  normally removable).   Some computers are a little different, maybe even a
  little strange. They may even have a floppy drive addressed as G:. We have
  built in  support  for floppies addressed as  A: thru Z:  as  long as your
  computer fully supports them in its  BIOS.   We also work with most drives
  that use a device driver (in the CONFIG.SYS file) to  extend the ROM BIOS.

#1810#

  The  floppy drive  you have selected is not recognized by your system as a
  normal floppy drive.   We ask your computer using INT13 in your computer's
  Basic Input Output System (BIOS) what drives you have.   It reported  that
  the drive you selected is not a floppy drive.   Some  add-on floppy drives
  may provide you  with  some  software that  "tricks"  your  computer  into
  thinking it has  additional drives.   This kind of  thing  normally  works
  around the BIOS  and  isn't compatible  with normal BIOS calls.   We can't
  guarantee proper operation with your diskette drives in these cases.
#2000#

 EZ-DiskCopy  ran  out of memory  while  trying  to  perform  the  requested
 operation.  Generally this will only happen if you have limited free system
 memory (RAM) and try to perform an operation that requires a lot of memory.

 Possible corrective measures:

 1.  Limit the number of memory resident programs you load.
 2.  Upgrade your system RAM if you have less than 640K.
 3.  Provide  additional free disk space  on the drive you specified for the
     spooling of large floppies.

#20050#

  Quick startup info:

  EZ-DiskCopy  is a diskette duplication program which lets you,  the  user,
  mass  produce  diskettes  quickly and easily.   It  allows you  to read  a
  diskette once  and  then  make as many copies  as you want.   EZ-DiskCopy
  supports 5 1/4 inch 160K, 180K, 320K, and 360K; also 3 1/2 inch 720K.

  To copy a diskette  use the Load pulldown off the main menu.   Insert  the
  diskette you would like to copy.  Next tell EZ-DiskCopy  where you put the
  diskette by  selecting the Load pulldown  and pressing A for drive A: or B
  for drive B:.   Your diskette will be  loaded into memory.   Take out your
  master source diskette and place the diskette  you  would like to make the
  copy  on  into a drive,  it doesn't matter which drive.  Now it is time to
  tell EZ-DiskCopy  to make the copy.   Select the Copy pulldown and press A
  to  make  the  copy  in drive A:  or  B for drive B:.   EZ-DiskCopy   will
  automatically format  your floppy  if it isn't already formatted.   Repeat
  this step to make as many copies as you want.   Isn't it nice not to  have
  to reload your source diskette each time?

  Refer to other sections of the On-Line Manual for additional  information.
  F1  is  available  to  call up  help  while  you  are  using  EZ-DiskCopy.
#20051#

                       ┌──────────────────────────┐
                       │ Commonly Asked Questions │
                       └──────────────────────────┘


  1. Will  EZ-DiskCopy  (EZDC)  duplicate  copy protected  diskettes?    No.
     EZDC  will only  duplicate  unprotected diskettes  with no bad sectors.

  2. How does EZDC manage to copy even  720K floppies with  only 256K of RAM
     required?   EZDC holds as much of the  diskette in memory  as possible.
     The rest of the diskette is spooled to a file on another drive.

  3. What about 3 1/2" 1.44M, 5 1/4" 1.2M, and serialization?  See the sales
     literature section of the on-line manual.

#20100#

  EZ-DiskCopy   allows  you to read an entire diskette into memory and  then
  make  as many copies as you  want  without  reading  the  master  diskette
  again.   To  do  this it must retain an image of the  master  diskette  in
  memory.  This  image  can take up to 720K of  storage space.   The portion
  of the diskette that won't fit into memory is spooled to another drive.

  EZ-DiskCopy   out performs DOS's diskcopy both in speed  and in safety  of
  the  operation.   EZ-DiskCopy  speeds up  the access  times of  your  disk
  drive allowing  quicker  reads and writes.   It also verifys the  copy  by
  checking the CRC written to the diskette during the copy process.

  When making a copy,  EZ-DiskCopy  (unless told otherwise)  will check  the
  diskette to see if it is already formatted  and  then proceed either  with
  the copy or the format and copy.  Just feed it diskettes, you  don't  need
  to worry about the destination diskette.  Nothing could be easier!

  System requirements:  An IBM PC or totally compatible clone,  256K of RAM,
                        and  IBM PC DOS  version 3.0 or later.   EZ-DiskCopy
                        should work with any version of MS DOS 3.0 or  later
                        but has not been tested with all the possible MS DOS
                        versions.
#20200#
      ╔════════╦═══════════════════════════╦═══════════════════════════╗
      ║ PC DOS ║        PC DOS 4.0         ║     EZ-DiskCopy  v2.0     ║
      ║   vs   ╠══════╤══════╤══════╤══════╬══════╤══════╤══════╤══════╣
      ║  EZDC  ║ Load │ Save │FmtSav│Format║ Load │ Save │FmtSav│Format║
      ╠════════╬══════╪══════╪══════╪══════╬══════╪══════╪══════╪══════╣
      ║  360K  ║24 sec│41 sec│83 sec│44 sec║24 sec│40 sec│57 sec│40 sec║
      ╟────────╫──────┼──────┼──────┼──────╫──────┼──────┼──────┼──────╢
      ║  720K  ║50 sec│92 sec│179sec│88 sec║49 sec│89 sec│123sec│80 sec║
      ╚════════╩══════╧══════╧══════╧══════╩══════╧══════╧══════╧══════╝

  Notes:  EZ-DiskCopy (EZDC)  is a fast,  safe,  and  easy to  use  diskette
          duplication program.   Pull down menus,  context  sensitive  help,
          on-line manual, and multiple copies per read are supported.
                                                                            
          Times may change as  we continue to improve  EZ-DiskCopy.   Please
          note that  the faster your computer,  the  more  EZ-DiskCopy   out
          performs IBM PC DOS.  The virtual drive we used was a RAM disk.

          EZ-DiskCopy  can  make  multiple copies/compares per read,  PC DOS
          can't.  EZ-DiskCopy is  far faster than PC DOS (2-3x) for multiple
          operations because it  doesn't reload  the source and makes copies
          of even a 720K diskette in a single pass!
#20201#
  All benchmarks  are based on version 2.0  of  EZ-DiskCopy   running on  an
  IBM PS/2 model 70.   Run your own timing tests using your hardware,  don't
  take our word that  we are faster.   The  only true test  of  how  quickly
  EZ-DiskCopy  will  perform  diskette operations  on  your hardware  is  to
  actually time them.  We invite you to put EZ-DiskCopy to the test.

  The above times are  affected by the DOS version, both by its revision and
  its source  (IBM, Compaq, etc).   Any small change  in your  hardware  may
  throw off the timing of  EZ-DiskCopy.   Memory resident programs slow down
  EZ-DiskCopy  and may  drastically (up to 50%) slow  the  disk  operations.
  Even such a small thing as  displaying the track number while copying took
  many hours of work to speed up  to where it  didn't slow down  operations.

  All tests were run with IBM PC DOS with  no memory resident programs.   If
  your timing tests show results  radically different from the above figures
  please write us with figures.   If  you did better we will praise  EZ-Disk
  Copy,  if  you did worse we will try to  find  something  to blame  it on.
     For additional speed and media formats inquire about EZ-Copy Plus!

  Please  note  that  we  far out perform DOS  on 720K media  because of our
  ability to  work with the diskette  in a single pass without requiring you
  to swap diskettes.  Our tests added 10 sec to DOS's time for disk swaping.
#20300#
                                HISTORY OF REVISIONS:
                                ═════════════════════

  EZ-Copy Lite ver 1.0   Aug 1988    Basic Version.    Quickly   make   disk
                                     copies.   On-line  manual  and  context
                                     sensitive   help   make  it  easy.   No
                                     cryptic DOS commands needed.

  EZ-Copy Lite ver 1.1   Sep 1988    Added  on  screen  file  directory  and
                                     additional  help  and  manual  screens.

  EZ-Copy Lite ver 1.2   Nov 1988    Expanded on-line help  and  manual.   A
                                     few minor touchups and bug fixes.

  EZ-Copy Lite ver 1.3   Mar 1989    Added a diskette compare function.  Now
                                     replaces  both  diskcopy and  diskcomp.
                                     Released  EZ-Copy Plus  to handle  1.2M
                                     5 1/4  inch  diskettes  and  720K/1.44M
                                     3 1/2  inch formats.  See sales lit for
                                     more info  (Unbelievable performance!).

  EZ-Copy Lite ver 1.4   Jun 1989    A few minor enhancements and bug fixes.
#20301#

  EZ-Copy Lite ver 1.5   Jul 1989    Faster, smaller, ...   Replaced several
                                     C routines  with   faster  and  smaller
                                     assembly language routines.   About  6K
                                     less  memory  required  for  registered
                                     version.

  EZ-Copy Lite ver 1.6   Oct 1989    A little  faster and smaller.   Reduced
                                     the  overhead  in a few areas resulting
                                     in  about 5K  less memory  required for
                                     registered  version.   A  few minor bug
                                     fixes and touchups.

  EZ-Copy Lite ver 1.7   Feb 1990    Smaller and faster.   Combined help and
                                     on-line manual files to  save about 3K.
                                     Added  360K diskette format capability.
                                     Several other areas were touched up.

  EZ-DiskCopy ver 2.0    May 1990    Added 720K 3 1/2" disk support.   Added
  (We renamed it to better           virtual memory support,  minimum memory
   describe the product)             is now 256K!   Now  includes EZ-Labeler
                                     which prints diskette labels.
#20302#

  EZ-DiskCopy ver 2.1    Jun 1990    Added  additional support  for older XT
                                     class machines where the  BIOS  may not
                                     directly support  720K and 1.2M drives.
                                     Added  more  error checking  in several
                                     areas.   Also added additional help and
                                     manual screens.

#20500#

  GENERAL:
  ════════

  1.  EZ-DiskCopy was developed by Dave Black of MaeDae Enterprises.
  2.  Special thanks to Jim Nech for his technical advice on how to speed up
      EZ-DiskCopy.
  3.  EZ-DiskCopy  was written in C  with the core disk routines in assembly
      language.   It uses the  Professional C Windows described below.   The
      source for EZ-DiskCopy consists of about 8,000 lines of code.
  4.  Special thanks to  Jim Nech  at  SSS  for  his excellent  C & Assembly
      language windowing package (Professional C Windows)  used  in  EZ-Disk
      Copy.   It  comes  with complete source code and is  only  $89.   This
      package is a must for software developers  (info/orders 713-726-0386).

#20900#

             EZX Publishing for the EaZy computing eXperience!
                                    ~ ~             ~

α More info? Call us at 713/280-9900  BBS:713/280-8180  FAX:713/280-0525
  We'll send you our latest catalog ASAP.
ß For Visa/MasterCard/American Express/Discover credit card orders, call
  our toll free lines: OrderVoice:1-800-US-EASY_X  OrderFAX:1-800-SEE-FAX-EZX
Γ See end of this notice for more ordering information, and an order form.
π Updated 6/9/90. Pricing, terms, etc. subject to change without notice.
Σ UPGRADING? Anyone registered user of any of our products wishing to upgrade
  to the latest version products, call or FAX us for details and pricing.
  Please have your current serial number(s) available. We upgrade products on
  a 6-9 month cycle.
σ 
For your computing pleasure, EZX Publishing presents:
#20901#

            EZ-FORMS LITE <tm>     EZFL Ver. E20 (Released 3/1/90) 
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
- Great price, Less bytes than EZFX! 
- Never be without the perfect form with the PREMIER forms processor! 
- Create/Fill-in/Print/Revise all kinds of forms.
- And, when you have the perfect form, print a perfect master for your copier
  or local printer. 
- Or, leave the master form on screen, fill in your data, and print the
  perfect form, error free. 
- In just a snap! Your filled-in form can be automatically stored, each 
  with its own control number.
- It's like having an electronic filing cabinet for perfect audit control. 
- You can make solid borders, lines, shades, combs and numerous graphics with
  just a few key strokes. 
- In fact, you can create the perfect custom form faster than your local
  typesetter can say ... OVERCHARGE! 
- Clear Forms Overlay is great for pre-printed forms. Just enter your data
  in the  available spaces on the master form while previewing the results on
  screen.
- It prints perfectly! No more "goof-ups" and wastage of those expensive
  multi-part forms. Speeds processing too.
#20902#

Features include:
- Auto-time/date/sequence numbering;
- Block cut/paste/copy; import/export;
- Forms up to 130 columns by 86 lines. 
- Operates on IBM(tm) family and close compatible computers. 
  DOS 2.1+, 320K RAM and 1 floppy required.
- Complete printer drivers included. Supports most printers including
  Epson(tm)/IBM and compatible printers; also the HP-LaserJet(tm) and
  compatibles ("Y" cartridge; other fonts may vary - see soft font pack
  below). Over 90 user modifiable forms also included. 

Additional new features include:
- Slick user interface with moving bar "pull-down" menus and on-line help;
- Annotated forms directory;
- "LQ" 24 pin dot matrix and integrated Laser printer support
  (see optional laser Font pack below); 
- Bolding and underlining;  
- Printed user guide
- 90+ basic forms template/style sheet pack included.
#20903#

Version E20 adds: 4-function math (+-/*), and directory sorting.

Basic Laser Fonts now included. 10 soft fonts (which include the line drawing
characters not usually available in soft fonts) for the HP-LaserJet Plus,
Series 2 and compatibles are now included FREE with your retail order.
5 portrait and 5 landscape fonts are included. (HPLJFSP v 1.3). Please do
not confuse this with the HPLJFGSP v2.1 optionally available for use with
EZ-FORMS EXECUTIVE only. See details below.

•Only $59+s/h   (Extra forms packs... see below.)

#20904#

            EZ-FORMS EXECUTIVE<tm>     EZFX Ver.2.4  (Released 4/1/90) 
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
- "The Ultimate Forms Generator and Manager".
 
In addition to all the features of EZ-FORMS LITE, add:
- Moving-bar menus with over 200 screens of on-line help;
- A comprehensive printed manual/tutorial;
- Math (+, -, *, /, column/row addition, more ... over 40 functions);
- Macros (keystroke record/playback makes form fill-out a breeze); 
- ASCII data file merge;
- Auto date, time, increment numbering;
- Multi-character drawing;
- Fill-in and file;
- Clear forms overlay (for pre-printed forms); 
- Chain (multi-page forms) and multi-copy printing; 
- Handles forms up to 248 columns by 132 lines;
- Enhanced printer support includes extensive user modifiable printer
  attributes and embedded characters, also double/single block/shade
  character line drawing and any character "drag" modes; 
- Italics, superscript, subscript, double wide, bold, underline, etc. are
  supported for properly equipped printers.
#20905#

- Laser Printer (HP and compatibles) support includes auto font downloading,
  graphics emulation and custom font support (see optional font disk below).
- "LQ" 24 pin. as well as, 9 pin dot matrix printers also fully supported.

Other features include:
- File encryption to protect sensitive files;
- File compression to save valuable disk space;
- File description annotation;
- Increment number counter (different number on each form) printing;
- Auto-tab/fill-in and file (makes filling out pre-printed forms a snap); 
- Field markers (lock out designated areas); 
- Vertical typing;
- Large character translation; 
- Math zero suppression; 
- Word-wrap, centering, justification; 
- Cut and paste; 
- Protected field overide; 
- Graphics "walk-around" mode; 
- Fully customizeable printer drivers; 
- User definition of embedded characters; 
- Mouse support for Logitech and Microsoft mice.
#20906#

- Operates on IBM family and close compatible computers. DOS 2.1 or higher, 
  512K free RAM and a hard drive are required.
- 101+ pre-designed and user modifiable forms  (Basic Forms Pack) included.
- Comprehensive printed user guide is included. 

UPGRADE INFORMATION. If you own a registered copy of any EZ-FORMS,
call 1-713-280-9900 for upgrade details. Have your registration number handy.
Ask about the FORMS Combo Pack Special Offer!

New features of Version 2.4  (Released 4/1/90)

- Over 200 screens of on-line help/manual.
- Expanded math: 15 digits, square and other roots, trig, financial, etc.
  More than 40 functions.  100 accumulators for intermediate calculations.
- User configurable math auto-recalc.
- Improved CFO for pre-printed forms. Automatic grid generator.
- Expanded manual with triple the content.
- Data Export in 8 different ASCII delimited formats.
- Search Mode: Like a mini free form database.
- View/Search/Edit/Print from any forms directory.
#20907#

- Expanded HP LaserJet/Compatible printer support. With the optional
  HPLJ Font Support Pack 2.1, you get capability of 10 different fonts
  per forms and up to 15 graphic images per form.
- Requires 640K (512 free) and a hard disk for operation.
- Sorted directories, makes recursive directories very quick.
- Keyboard macros with an Auto-start feature.
- Support for non-USA characters like öòûùÿÖÜ¢£¥₧ƒáíóúñÑªÉÄÅîïèë etc.
- Menu integration to EZ-InFORMa dB manager. (Read about EZ-InFORMa dB below)

Basic Laser Fonts now included. 10 soft fonts (which include the line drawing
characters not usually available in soft fonts) for the HP-LaserJet Plus,
Series 2 and compatibles are now included FREE with your retail order.
5 portrait and 5 landscape fonts are included. (HPLJFSP v 1.3). Please do
not confuse this with the HPLJFGSP v2.1 optionally available for use with
EZ-FORMS EXECUTIVE only. See details below.

- Plus Much more...

•Only $119+s/h    (Extra forms packs... see below.)

#20908#
EZ-InFORMa dB  The DATABASE your FORMS have been waiting for! 
~~~~~~~~~~~~~                  Ver. 1.02 (Released 4/1/90)

EZ-InFORMa dB is EZ-FORMS' DATABASE COMPANION !

Now you can fill out your forms into a database....

- Handles inFORMation quickly and easily.
- Even converts from several other popular data formats, like fixed length,
  ASCII and "FileExpress".
- Reads/writes industry standard .dbf files. dBase III, III+, and IV.
- Will even create an input screen for you from your .DBF file.
- Handles over 2.1 BILLION records, limited only by disk space.
- Full tutorial for the database novice. "DR" program is included to create
  a meaningful database of all the files on any hard or floppy drive.
- Quickly create a database from an existing form (.FRM).
- Easily match a database to any existing form.
- On-line manual and extensive context sensitive help.
- Query, seek, find, and browse modes to quickly scan your records.
- View your database in any form - after the fact.
- Unlimited forms per database and Unlimited databases per form.
- Print fancy labels using a form as a label, auto horiz. space suppression.
#20909#
- Easily modify database format to add/delete fields, and change field sizes.
- Quick report feature for on-the-fly counting, summing, and averaging.
- Choose which fields show up on a form, and where.
- Multiple indexes: Have your database sorted every which way, so you
  don't have to wait.
- Automatic indexing as new records are added.
- Duplicate search mode.
- Merge or append other database files.
- Keyboard macros for those repetitive tasks.
- Repeat keys for repetitive data insertion, date, time, etc.
- Memo fields that allow meaningful comments of up to 5K in length.
- Field validations: numeric, logical, date.
- Can be used as a fill-out only module for EZFX or EZFL.
- Menu integration to EZ-FORMS EXECUTIVE or EZ-FORMS LITE.
- Forms printing with all the features supported in the source form.
  That is, EZ-FORMS LITE or EXECUTIVE applicable attributes, including math.
- Requirements: PC/XT/286/386 or compatible computer running DOS 2.1+ and
  a minimum of a 10 MB hard drive (floppy for loading). Also, EZFX v2.4 or
  EZFL vE20 or higher is required to modify master forms. A default form will
  be generated with each input .dbf file, if desired. A number of pre-
  designed forms and applications are included, but they can only be modified
  with EZ-FORMS EXECUTIVE or EZ-FORMS LITE.
#20910#

- Call for multiple copy, site license, or LAN pricing. $ stc w/o notice.

• Only $99 +s/h  

 (Note: EZ-FORMS EXECUTIVE is HIGHLY recommended.)

This is a limited time introductory price! Subject to change without notice.


  Bundled EZ-FORMS' Database InFORMapack:
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- EZ-FORMS' dataBase EXECUTIVE  • Only $199+s/h ... a $218 value!  
  Includes EZ-InFORMa dB ($99) and EZ-FORMS EXECUTIVE ($119)
#20911#

****
FEDB is available. This utility converts FileExpress .dta and .hdr files
to .dbf compatible databases for use with EZ-InFORMa dB, or any other
dBASE compatible file handler. (FileExpress tm Expressware Corp.)
•Cost is only $10 +($3 mail/$6 foreign). Included free with EZ-InFORMa dB!

**
DR is a directory scanning utility that scans all of the files on any drive
and generates a meaningful database (.dbf format) for use with EZ-InFORMa dB
or any other dBASE compatible file handler.
•Cost is only $10 +($3 mail/$6 foreign). Included free with EZ-InFORMa dB! 

#20912#

OPTIONAL FORMS PACKS for EZFX and EZFL --- None duplicated. 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
(See Order Coupon for special offer on the Combo Pack.)

Forms Pack "A"     (General Business): 68+ forms , ...Only $29
Forms Pack "B"     (Sales and Marketing): 56+ forms, ...Only $29
Forms Pack "C"     (Management and Personnel): 33+ forms, ...Only $19
Forms Pack "D"     (Technical): 47+ forms, ...Only $24
Forms Pack "E"     (Home and Personal): 27+ forms, ...Only $15
Forms Pack "F"     (Contracts): 22+ forms, ... Only $15
Forms Pack "G"     (Property Management): 40+ forms, ...Only $24
Forms Pack "H"     (Home/Office Records): 60+ forms, ... Only $14
Forms Pack "I"     (Construction Related) 70+ forms  Only $29
Forms Pack "J"     (Geneology Related): 60+ forms, ... Only $15

    Forms Combo Pack  
(Over 400 forms! Includes A, B, C, D, E, F, G, H, I, & J above):
•Only $99 with EZFX or $119 with EZFL ($200+ SRP)
#20913#

Laser Font Support Pack 2.1 (Requries EZFX 2.2+)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Includes over 100 soft fonts (GOTHIC, COURIER, PRESTIGE, in portrait,
landscape, 6, 9, 12, 15, 18, 21, 24, 27, 30 point), and over 100 graphic
images. Also, you can generate print macros, view/edit .RLE graphics, etc.

•Only $99+s/h (only $69 with your EZFX Ver.2.3 order)



Laser Font Support Pack 1.3   Now included free with the purchase of
~~~~~~~~~~~~~~~~~~~~~~~~~~~   EZ-FORMS LITE or EZ-FORMS EXECUTIVE!
10 downloadable soft fonts for the HP<tm> LaserJet Plus, Series II 
and compatibles. Includes 5 portrait and 5 landscape fonts in
"LINE PRINTER BOLD". 10, 11, 12, 15 and 17 pitch are represented.
Fonts are auto-downloadable with EZFL+ and include the line drawing, 
block, shade, etc. graphics characters not normally included with other 
soft fonts. Includes download utility. (For EZFX, you must pre-download the
font. Does not give multi-font capability to EZ-FORMS EXECUTIVE.)
•$49+s/h  (Only $29 with purchase of EZ-SPREADSHEET)

#20914#

                  EZ-COPY PLUS(tm)   Ver. 1.3 (Released 4/15/90)
                  ~~~~~~~~~~~~~~~~
                        "FLAWLESS DISKETTES FAST"<sm>

- EZ-COPY PLUS is faster than EZ-DISKCOPY because it bypasses DOS and talks
  directly to your diskette drives.
- It also serializes and prints labels "on-line".
- The ULTIMATE diskette duplicator for the PC you already own!
- Great for publishers, developers, MIS managers, etc.
- Makes unlimited copies of 5.25" and 3.5" disks.
- Supports all current DOS formats.(1.44M/1.2M/720K/360K/320K/180K/160K)
- Utilizes extended, expanded, and/or hard drive for overflow storage.
- Can take disk images to hard drive for retrieval at any time.
- Supports up to six floppy drives, 4 at a time.
- Replaces dedicated machines costing thousands.
- Also serializes (via sector/offset modification) and format only.
- Takes true compressed disk images so you can store to hard drive
  and/or transmit via modem.
- Uses EMS or Extended RAM, if available.
- Requires 640K RAM, hard drive, and PC/MS DOS 3.0+,
   at least 1 floppy drive required.
#20915#

New features for version 1.3 include: 

- The ability to print serialzed labels as well as serialze your disk via
  embedding a serial number at a specific location on the disk.
  
- EZ-LABELER, an off line serialized label printer with many features.
  See EZLBLDOC <enter> for the latest information on this new feature.
  Available seperately for $19 +s/h.

- NO FORMAT option. Allows for even faster copying of pre-formatted disks.

- Improved multi-adapter support for floppy drives.

- Many other touch-ups.

Don't want to produce your own diskettes? Call us for a quote on our
duplication services. 713-280-9900.

Multi-machine and site licenced versions are available.
#20916#

•EZ-COPY PLUS is  $495 +s/h. It is NON COPY PROTECTED just like all of
 other products. It is licensed for use on up to 10 machines at 1 location.
 A copy protected version suitable for 1 machine is available for $129 +s/h. 
 You may upgrade to the NCP version within 90 days for the price difference.


EZ-LABELER (tm)  Ver. 1.0 (Released 4/90)
~~~~~~~~~~~~~~~
Generates serialized labels based on input file parameters. Perfect for
serializing anything, including disketts. Includes editor and examples.
Included free with EZ-COPY LITE, or EZ-COPY PLUS.
•Only $19 +s/h


            EZ-DISKCOPY (tm)  Version 2.0  (Available 6/90)
            ~~~~~~~~~~~~~~~~
Have you ever had to copy a batch of floppies? Well, do it like the pros do
(EZX developed this program for our own use!!)  EZ-DISKCOPY allows you 
to make unlimited copies after just 1 master disk read. Just like 
a dedicated hardware duplicator (which can cost thousands), and just about 
as fast! 
#20917#
Other features include verify, format only, compare, directory 
infomation, extensive on-line help, and more. 

EZ-LABELER, off-line label/report printing (with or without serial numbers)
utility. EZ-LABELER also has the ability to serialize diskettes via writing
a file containing an incrementing ASCII number to disk. 
     EZ-LABELER is included FREE with EZ-DISKCOPY!!!
 
Requires 256K RAM, PC/MS DOS 3.0+, at least 1 floppy drive and a sufficiently
sized drive for spooling data (either a RAM disk *RECOMMENDED* or hard drive).
NOTE: VDISK.SYS (usually supplied with DOS allows you to use extended or 
expanded memory for a RAM disk, thus allowing high speed spooling).

EZ-DISKCOPY 2.0 supports 5.25"/360K(320K,180K,160K) and 3.5"/720K drives only.
EZ-COPY PLUS (description below) handles all current DOS formats, "spools"
excess data to extended or expanded memory (via RAM disk of sufficient size),
and/or hard drive.

•Only $79 +s/h  If you do not need great speed, 1.2MB or 1.44MB support, 
                this is a bargain!
#20918#
 •The UNLIMITED use verison (at the smaller of one company or location)
  is only $495!

MENU-EZX (tm)   Ver 1.01 (Released 2/90)
~~~~~~~~~~~~~
The simplest hard disk menu system on the market. Every novice can use it.
Get set up in no time. Requires only 4K of ram to operate, thus leaving
plenty of room for all of your applications. Requires a hard drive and DOS 3+.

•Only $39+s/h

EZ-SPREADSHEET(tm) "THE ULTIMATE SPREADSHEET"   Ver S23 (Released 2/90)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
You too can become a spreadsheet pro in 20 minutes or less! EZ-SPREADSHEET
won't confuse you, try your patience, or force you to learn 457 commands
to get started. What you get is a spreadsheet that will produce 64 columns
by 512 rows; more than enough for 99% of user's needs. EZS requires an IBM
family or compatible computer, DOS 2.1+, 256K ram minimum and 1 disk drive. 
Any monitor and almost any printer will work. For Epson type printers, a 
sideways printing program is supplied. Includes printed manual/tutorial 
plus 5 sample spreadsheets.  •Only $49+s/h
#20919#

EZ-CRYPT LITE (tm)   Ver. 2.0  (Released 3/90)
~~~~~~~~~~~~~~~~~~
Protect your sensitive files the easy, menu driven way. Even we can't 
unravel them if we don't have your "key"! Advanced encryption routines
ensure the ultimate in security. Completely menu driven for the novice user.
Encryption, decryption, and cryptanalysis program. Context sensitive help
and on-line manual make it easy!  Requires 384K ram, DOS 3.0+.
•Only $39+s/h


EZ-CRYPT DES (tm)  Ver. 1.0  (Rel. 5/8/90) "The ultimate file security!"
~~~~~~~~~~~~~~~~~
All the features of EZ-CRYPT LITE, but also adds the DES or data encryption
standard to your files if you choose. Additional feaatures include keyboard
macros, DOS shell, and more... This is the ULTIMATE in file security.
Do not trust the protection of your important data to anything else,
Requires 512K. This is the ultimate in file security.

•Only $119+s/h
#20920#

EZX-WRITE(tm) "Laptop"   "Perfect for the Laptop computer." 
~~~~~~~~~~~~~~~~~~~~~~    Ver W23b (Rel.4/90)

WordStar (<tm>MicroPro) compatible word processor with hundreds of features
including: Pulldown menus with on-line help; windows let you edit two files
at once; Macros for "recording" repetitive commands or boilerplate; print 
spooling - allows you to continue editing while your printer does its thing; 
Supports all popluar printers - bold, italics, underline, super/subscript, 
and alternate fonts are available - or create your own printer drivers; 
DOS shell for formatting that ever full diskette; EGA monitor support; 
headers and footers; lightning fast search and replace; word wrap 
and justification; "undo"; adjustable tabs, margins and ruler lines; 
"point-and-shoot" directories; automatic file backup; block copy, 
move, delete, read or write from disk, even between windows and documents; 
user defined colors; Requires IBM<tm> family of computers or compatible, 
with 256K ram, DOS 2.1+, one disk drive, any monitor, and a compatible 
printer.

- Over 500 Letters, Contracts, etc., as well as a simple off-line spell
  checker. This package is normally $29 by itself, and is now included
  FREE with EZXW.
#20921#

•$49+s/h   (Rev. W2x)  (No extra charge for 3.5" distribution media.)

- 500+ Business/Personal Letters & Contracts & Legal Documents: $29
  Included FREE with EZXW purchase.


ANNOUNCING PRIORITY SERVICE REGISTRATION
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
For an additional $39 (no shipping) for the first registration number, $19
for each additional, you can enjoy the benefits of PRIORITY Service.

Benefits include: - "First place" priority on all customer service calls.
                  - A same day call back if a rep. is unavailable when
                    you call. (USA-only).
                  - Unlimited BBS support with special file areas for
                    PSR customers.
                  - First-in-line notification of all upgrades.
                  - Free damaged disk replacement.
                  - PSR customers are randomly selected as beta testers.
#20922#

ORDER INFO: 
~~~~~~~~~~~
SEE ORDER COUPON! Or, if you are ordering with a VISA, MasterCard, or 
American Express/Optima, feel free to call in your order at 1-800-USEASYX
(1-800-USEASYX   -- CREDIT CARD ORDERS ONLY   ---  INFO: 1-713-280-9900). 

The Information and customer service line is 1-713-280-9900.

   OrderFAX: 1-800-SEE-FAX-EZX   InfoFAX: 1-713-280-0525   
                                 ~~~~~~~~~~~~~~~~~~~~~~~
BBS:1-713-280-8180 (1200/2400, N, 8,1)

Mail orders to: 

EZX Publishing, P.O. BOX 58177 Dept. ORD, Webster, TX 77598 USA.

(s/h add, $6 USA/48, $10 AK, HI, PR, APO, FPO, VI, Canada, $22 foreign.)
Add $2 for each additional item. ($4 foreign)
Add $5 per program for 3.5" distribution disks.

Pricing and terms are subject to change without notice. Code 6/9/90.
#END#
```
{% endraw %}

## FILE1201.TXT

{% raw %}
```
Disk No: 1201                                                           
Disk Title: EZ-Diskcopy                                                 
PC-SIG Version: S2.1                                                    
                                                                        
Program Title: EZ-DISKCOPY                                              
Author Version: 2.1                                                     
Author Registration: $79.00                                             
Special Requirements: PC/MS DOS 3.1+. A RAM disk or hard drive is recomm
                                                                        
Once EZ-DISKCOPY reads the contents of a disk into memory, you can make 
as many copies as you want without your PC rereading the original disk. 
Make unlimited copies after a single master disk read.  Just like a     
dedicated hardware duplicator (which can cost thousands), and just about
as fast!  The DOS DISKCOPY command spends about 27 seconds loading data 
on every copy.  EZ-DISKCOPY does it only once, saving almost a minute   
every three disks.  Even better, the program verifies the copy during   
each operation.  Map disk usage and get sides and sectors information   
about a disk.  If you choose, you do it all without typing in a single  
command.  Just scroll across the pull-down menu and hit Enter.  As an   
option, you can use single-character commands.                          
                                                                        
Other features include verify, format only, compare, directory          
information, extensive on-line help, and more.  Extensive, easy-to-read 
documentation is included in the package.  The only things to be        
wary of are memory-resident programs which chew into the memory needed  
for EZ-DISKCOPY.                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## WHATSNEW.DOC

{% raw %}
```

New Features for EZ-DiskCopy v2.1 over v2.0:   Released 6/25/90

- Added support for older XT systems where the BIOS doesn't correctly
  reflect the drive types.  This BIOS limitation can lead to EZ-DiskCopy
  obtaining incorrect drive information (both drive existance and type).
  You can now override the default drive type thru a drive installation
  option.  Install the proper drive configuration if you have problems.
- Added additional code to the installation section to make it even
  more obvious that you need to save the installation options for
  them to take effect.
- Expanded the help and on-line manual.
- Updated/touched up several areas of the program.

                                         Dave Black
                                         Author of EZ-DiskCopy
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1201

     Volume in drive A has no label
     Directory of A:\

    README   EXE      6715   6-24-90  11:36a
    EZXINFO  EXE     16011   9-17-90   1:52p
    EZDC     EXE     38732   9-20-90   2:46p
    EZDC_HM  INX       600   6-22-90   5:56p
    EZDC_HM  TXT     58203   6-22-90   5:56p
    EZLVLU   EXE     14830   4-18-90   2:55p
    EZLBLDOC EXE      9787   4-10-90   3:29p
    EXAMPLE  EZL      5937   4-10-90  12:59p
    EPSON    EZL       803   3-14-90   3:26p
    SIMPLE   EZL       184   3-14-90   8:58a
    !                 1574   9-17-90   1:53p
    FILE1201 TXT      2369  11-14-90   9:11a
    WHATSNEW DOC       806   6-24-90  11:49a
    SUPPORT  EXE      6779   9-17-90   1:53p
    !EZX!!!!          1574   9-17-90   1:53p
           15 file(s)     164904 bytes
                          151552 bytes free
