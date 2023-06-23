---
layout: page
title: "PC-SIG Diskette Library (Disk #1605)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1605/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1605"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DIRECTORY EXTENDED"

    Give yourself more power and freedom in managing your files operating
    totally from the DOS command line.
    
    DIRECTORY EXTENDED (DX) allows you to easily select one file or
    multiple files, including hidden and system files if desired, which you
    may then copy, move, delete, rename, compare or append with
    another file. You can change a file's attribute or its date, and check
    if a group of files can fit on a disk.
    
    Normal DOS files, as well as those within an archive (.ARC) file, can be
    directly sorted by name, extension, size, date, or file attributes. DX
    can perform a CRC or checksum test on your files to detect defects or
    alterations in files. DX commands can be incorporated into batch files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DX.DOC

{% raw %}
```



















          DDDDDDD                                                         
          DDDDDDDD                                                        
          DD    DD  IIIII  RRRR   EEEEE   CCC   TTTTT   OOO   RRRR   Y   Y
          DD    DD    I    R   R  E      C   C    T    O   O  R   R  Y   Y
          DD    DD    I    R   R  E      C        T    O   O  R   R   Y Y 
          DD    DD    I    RRRR   EEEE   C        T    O   O  RRRR     Y  
          DD    DD    I    R   R  E      C        T    O   O  R   R    Y  
          DDDDDDDD    I    R   R  E      C   C    T    O   O  R   R    Y  
          DDDDDDD   IIIII  R   R  EEEEE   CCC     T     OOO   R   R    Y  


                   XX    XX                                              
                   XX    XX                                              
            EEEEE   XX  XX   TTTTT  EEEEE  N   N  DDDD   EEEEE  DDDD     
            E        XXXX      T    E      NN  N  D   D  E      D   D    
            E         XX       T    E      N N N  D   D  E      D   D    
            EEEE     XXXX      T    EEEE   N  NN  D   D  EEEE   D   D    
            E       XX  XX     T    E      N   N  D   D  E      D   D    
            E      XX    XX    T    E      N   N  D   D  E      D   D    
            EEEEE  XX    XX    T    EEEEE  N   N  DDDD   EEEEE  DDDD (TM)






                            Version 2.0  of  December 1988


                            Robert K. Blaine / ECONO-SOFT
                                   P.O. Box 181030
                                Austin, TX 78718-1030
                             800-367-7590,  512-832-1675


                              CompuServe   [73267,1664]
                                 GEnie  [ROB.BLAINE]
















                                DISCLAIMER OF WARRANTY

         THIS SOFTWARE AND MANUAL ARE SOLD "AS IS" AND WITHOUT WARRANTIES AS
         TO PERFORMANCE OF MERCHANTABILITY OR ANY  OTHER  WARRANTIES WHETHER
         EXPRESSED OR IMPLIED.  IN NO EVENT SHALL ECONO-SOFT  OR  ROBERT  K.
         BLAINE  BE  HELD  LIABLE  FOR  ANY  LOSS  OF  PROFIT  OR ANY  OTHER
         COMMERCIAL DAMAGE RESULTING FROM THE USE OR MISUSE OF THIS PRODUCT,
         INCLUDING BUT NOT LIMITED TO SPECIAL, INCIDENTAL,  CONSEQUENTIAL OR
         OTHER DAMAGES.

         BECAUSE OF THE  VARIOUS  HARDWARE  AND  SOFTWARE  ENVIRONMENTS INTO
         WHICH  THIS  PROGRAM  MAY  BE  PUT,  NO  WARRANTY  OF FITNESS FOR A
         PARTICULAR PURPOSE IS OFFERED. THE USER MUST ASSUME THE ENTIRE RISK
         OF USING THE PROGRAM.  ANY LIABILITY OF THE SELLER WILL  BE LIMITED
         EXCLUSIVELY TO PRODUCT REPLACEMENT OR REFUND OF PURCHASE PRICE.


         Throughout this document,  references  are  made  to  the following
         trademarks:

             -  ARC is a trademark of System Enhancement Associates.

             -  DESQview is a trademark of Quarterdeck Office Systems.

             -  DX  and  Directory  eXtended  are  trademarks  of  Robert K.
                Blaine/ECONO-SOFT.

             -  DoubleDOS is a trademark of SoftLogic Solutions, Inc.

             -  Epson is a trademark of Epson Corporation.

             -  IBM,  PC-DOS,  and  TopView  are trademarks of International
                Business Machines Corporation.

             -  LIST is Copyrighted by Vernon D. Buerg.

             -  MS-DOS is a trademark of Microsoft Corporation.

             -  PCED is a trademark of Cove Software Group, Inc.

             -  Turbo Pascal are trademarks of Borland International, Inc.































                              C O N T E N T S


            1.0  Introduction  . . . . . . . . . . . . . . . . . . . . . . 2
               1.1  Feature Summary  . . . . . . . . . . . . . . . . . . . 2
               1.2  The ShareWare Concept -- DX IS NOT FREE! . . . . . . . 4
               1.3  A Sample Display . . . . . . . . . . . . . . . . . . . 5
               1.4  General Syntax . . . . . . . . . . . . . . . . . . . . 6
               1.5  System Requirements  . . . . . . . . . . . . . . . . . 8
            2.0  Formatting Options  . . . . . . . . . . . . . . . . . . . 9
               2.1  /Pause -- A Screenful at a Time  . . . . . . . . . . . 9
               2.2  /Wide -- A Quick Look  . . . . . . . . . . . . . . . . 9
               2.3  /SINGle -- One File Per Line . . . . . . . . . . . .  10
               2.4  /Totals -- Statistics Only . . . . . . . . . . . . .  10
               2.5  /HEader -- Setting the Header Level  . . . . . . . .  11
               2.6  /STats -- Setting the Statistics Level . . . . . . .  11
               2.7  /CAse -- Setting the Output Case . . . . . . . . . .  12
               2.8  /12 -- Setting the Time Format . . . . . . . . . . .  12
               2.9  Color Configuration  . . . . . . . . . . . . . . . .  12
                  2.9.1  /BColor -- Background Color . . . . . . . . . .  13
                  2.9.2  /FColor -- Foreground Color . . . . . . . . . .  13
                  2.9.3  /DColor -- Directory Color  . . . . . . . . . .  13
                  2.9.4  /ANSI -- xANSI Driver Support . . . . . . . . .  13
               2.10  /Output -- Where to Send the Directory  . . . . . .  14
               2.11  /PRint -- Formatting for the Printer  . . . . . . .  14
                  2.11.1  /PRMode -- Establishing the Print Mode . . . .  15
                  2.11.2  /PRMArg -- Setting Print Margins . . . . . . .  15
               2.12  /FSBlink -- Causing /FSize Message to Blink . . . .  15
               2.13  /Quiet -- Inhibit Informative Messages  . . . . . .  16
               2.14  /NLines -- Specify Output Height  . . . . . . . . .  16
               2.15  /ALign -- Aligning Extensions . . . . . . . . . . .  16
               2.16  /ANgle -- Angle Bracket Directory Indicator . . . .  16
               2.17  /DOTstar -- Automatic ".*"  . . . . . . . . . . . .  17
            3.0  File Matching Options . . . . . . . . . . . . . . . . .  18
               3.1  /Command -- Finding Commands . . . . . . . . . . . .  18
               3.2  Extended Pattern Matching  . . . . . . . . . . . . .  18
               3.3  File attribute Matching  . . . . . . . . . . . . . .  20
                  3.3.1  /Full -- All Files  . . . . . . . . . . . . . .  20
                  3.3.2  /ATtr -- Select File Attributes . . . . . . . .  21
               3.4  /SIze -- Setting a Size Range  . . . . . . . . . . .  23
               3.5  /SINce and /BEfore -- Date/Time Ranges . . . . . . .  23
               3.6  Viewing ARChive and LiBRary Directories  . . . . . .  25
                  3.6.1  /ARCDT -- Validating ARC/LBR Timestamps . . . .  26
            4.0  Utility Options . . . . . . . . . . . . . . . . . . . .  27
               4.1  /SOrt -- Sorting Files . . . . . . . . . . . . . . .  27
               4.2  /FFind -- Searching Multiple Directories . . . . . .  28
               4.3  /FSize -- Testing if File Transfer Possible  . . . .  29
               4.4  /Ldir -- Listing Directory Names . . . . . . . . . .  29


                                          i









               4.5  /CKsum -- Checksumming Files . . . . . . . . . . . .  30
               4.6  /CRC -- Cyclic Redundancy Checks . . . . . . . . . .  30
            5.0  Special Processing  . . . . . . . . . . . . . . . . . .  32
               5.1  Target File Specifications . . . . . . . . . . . . .  32
               5.2  /MOve and /COPy -- Moving/Copying Files  . . . . . .  33
                  5.2.1  /APpend -- Append Files . . . . . . . . . . . .  35
                  5.2.2  /MDir -- Create Missing Directories . . . . . .  36
                  5.2.3  /RDir -- Remove Empty Directory . . . . . . . .  36
                  5.2.4  /TDate -- Set Target File's Date/Time . . . . .  36
                  5.2.5  /TAttr -- Set Target File Attributes  . . . . .  37
                  5.2.6  /VLevel -- Verify Level . . . . . . . . . . . .  37
               5.3  /COMPare -- Comparing Files  . . . . . . . . . . . .  38
               5.4  /REName -- Renaming Files  . . . . . . . . . . . . .  39
               5.5  /GOBak -- Reverting to Previous Versions . . . . . .  40
               5.6  /FDate -- Changing File Date/Time Stamps . . . . . .  40
               5.7  /FAttr -- Changing File Attributes . . . . . . . . .  41
               5.8  /DELete -- Deleting Files  . . . . . . . . . . . . .  42
               5.9  /VIew -- View FIles  . . . . . . . . . . . . . . . .  43
               5.10  /RUn -- Immediate Command Execution . . . . . . . .  43
               5.11  Verifying Special Processing  . . . . . . . . . . .  43
                  5.11.1  Answering the Questions  . . . . . . . . . . .  44
                  5.11.2  /Verify -- Normal Verification . . . . . . . .  44
                  5.11.3  /OVerwrite -- Verifying File Overwrites  . . .  45
                  5.11.4  /ROnly -- Read-only File Handling  . . . . . .  46
               5.12  /LIst - Defining the LIST Processor . . . . . . . .  47
               5.13  /DEfer -- Deferred Special Processing . . . . . . .  47
               5.14  /MSP -- Multi-pass Special Processing . . . . . . .  48
            6.0  Batch File Generation . . . . . . . . . . . . . . . . .  49
               6.1  /Batch -- Specifying the Batch Template  . . . . . .  50
               6.2  /EXec -- Controlling Automatic Execution . . . . . .  53
               6.3  /CDir -- Automatic CHDIR Commands  . . . . . . . . .  55
               6.4  Preview a Batch File / Create a List of Files  . . .  55
               6.5  Matching Directories in Batch Files  . . . . . . . .  56
            7.0  Customizing DX  . . . . . . . . . . . . . . . . . . . .  57
            8.0  Using DX  . . . . . . . . . . . . . . . . . . . . . . .  60
               8.1  Testing Termination Conditions . . . . . . . . . . .  60
               8.2  Compatibility and Performance Considerations . . . .  61
                  8.2.1  /VIDeo -- Controlling Direct Screen Access  . .  61
                  8.2.2  /NONstd -- Handling Non-standard Environments .  61
                  8.2.3  /NETaccess -- Handling Network Conflicts  . . .  62
                  8.2.4  Enhancing DOS Performance . . . . . . . . . . .  62
               8.3  Using DX with PCED . . . . . . . . . . . . . . . . .  63
               8.4  /ALTernate Pattern Separators  . . . . . . . . . . .  63
               8.5  /INfo -- A Quick Reminder  . . . . . . . . . . . . .  64
               8.6  Memory Utilization . . . . . . . . . . . . . . . . .  64
               8.7  Aborting and Escaping  . . . . . . . . . . . . . . .  65
               8.8  /SWatch -- Execution Time and ERRORLEVEL . . . . . .  65

         Appendix A.  Quick Reference                                     66

         Appendix B.  Registration Form                                   69

         Index                                                            71



                                         ii





         Directory eXtended                                      Version 2.0





         1.0  Introduction


         DX was born out of the desire to  have  a  double  column directory
         display. It has grown into a very powerful disk and file management
         tool. Even if you never use  the  advanced features of DX, you will
         find the output  much  more  informative  than  that  of  DOS's DIR
         command.  There  are  two  major  distinctions between DX  and  the
         plethora of other file managers in the world:

            1.  DX has a very powerful and  versatile  file-matching engine.
                You can search an entire disk and select a  group  of  files
                based on very sophisticated criteria --  unsurpassed  by any
                other  DOS  program!  Most  DOS  users  are   familiar  with
                directory  wildcards  --  the '?' being used  to  match  any
                single  character   and  the  '*'  to  match  zero  or  more
                characters.  DX  takes  this  concept  one  step  further by
                allowing  any  number  of  '*'s  and  additional  characters
                between  and  after  the  '*'s.  Multiple  patterns  may  be
                included and excluded. Files  may  be  selected  or excluded
                based  on  file attributes, sizes,  and  creation  date/time
                ranges.

            2.  DX  is  not  menu  or  mouse  oriented.  DX  is  aimed at  a
                significant portion of DOS users  who prefer to use a quick,
                command-line oriented utility to do their file management. A
                full-screen version of DX is under development for those who
                want the power of DX but prefer that environment.

         Using the matching engine  to  display  your  directory is only the
         beginning. DX can perform just about any function  you  can imagine
         on these files starting with  enhanced  versions  of  COPY, APPEND,
         COMPARE,  MOVE,  DELETE,  and RENAME and continuing on to setting a
         file's  attributes  or   creation  date/time  or  determining  it's
         checksum or CRC. If  none  of DX's built-in functions fit the bill,
         you can have DX write a  batch  file  to process your files any way
         you like! The possibilities are endless!

         Don't let the size of DX scare you  --  it  will  take the place of
         many disk/file utilities that  you  now  use -- standardizing their
         usage  and making your work easier. There  are  many  examples  and
         suggestions in this manual  --  these  are  just the beginning; you
         will undoubtedly think of many more!


              1.1  Feature Summary

                  -  Full path and hard disk support.






         Page 2                                             1.0 Introduction





         Version 2.0                                      Directory eXtended



                  -  A  very  powerful  and  flexible  file-matching  engine
                     allowing multiple wildcards  and  additional characters
                     following  and between  the  wildcard  characters.  For
                     example, "DX *TEST" will match files  named "FILETEST",
                     "XTEST", and "TEST"  while "DX ?*TEST" would only match
                     files "FILETEST" and "XTEST".

                  -  Multiple file specifications can be  given  --  both as
                     inclusion and exclusion. For example, "DX .BAS+.PAS;*T"
                     will match files with extensions of  ".BAS"  and ".PAS"
                     only if their names do not end with a "T".

                  -  DX can  search  all  directories,  list  all  directory
                     names, and test  whether  a  set  of files can fit on a
                     different disk.

                  -  DX can  search any and all ARChives and LiBRaries using
                     full pattern matching;  compare files within an ARChive
                     to files outside; rename and  change  the  date/time of
                     files within ARChives.

                  -  You  can  specify  exactly  which  file  attributes  to
                     display. See any hidden or system files.

                  -  You  can  select  files  between  (or  outside)   of  a
                     specified range of file sizes and/or dates/times.

                  -  Have  you  ever  received a new disk and wanted to know
                     immediately  what commands are available? An option  on
                     DX will display all ".COM", ".EXE", and ".BAT" files.

                  -  DX suppresses the annoying "."  and  ".."  entries that
                     are always present in directories.

                  -  DX can  sort  files  by  any  combination  of filename,
                     extension,  size,  date/time,  or  file  attributes  --
                     ascending or descending. Sort files within archives and
                     libraries. The sorted output may be  across  the screen
                     or columnar.

                  -  Move, copy, compare, delete,  and  rename  files across
                     disks and  directories.  Append  files  to pre-existing
                     files. Change file attributes and date/time stamp.

                  -  All of DX's special processing  may  be  verified  on a
                     file-by-file    basis     (default)     or    performed
                     automatically.

                  -  Produce either  a  Cyclic  Redundancy  Check  (CRC)  or
                     checksum of your files for data  integrity  checking --
                     useful in detecting Trojan horses!





         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT         Page 3





         Directory eXtended                                      Version 2.0



                  -  You can carry all  of  the  extensive  pattern matching
                     capabilities into  any  task  you  need  to  perform by
                     having DX generate (and optionally  internally execute)
                     DOS batch files  for  you. Couple this with the ability
                     to search all  directories, archives, and libraries and
                     you can build  batch  files to process your entire hard
                     disk.

                  -  DX has an extensive set of output formatting options --
                     including  colors, printer formatting, UPPER, lower  or
                     Initial Caps cases, 12 or  24  hour  time  formats, and
                     screen width, height, and screen-handling options.

                  -  DX is fully customizable -- set  your  favorite options
                     once and they will always be used.

                  -  Make decisions in batch files based  on  the ERRORLEVEL
                     set  by DX -- i.e. if files or  disks  exist  or  don't
                     exist; if  files  compare;  if  a  copy,  move, rename,
                     delete, etc. was successful or not.



              1.2  The ShareWare Concept -- DX IS NOT FREE!

              DX  is  released  as ShareWare and, as such, is dependent upon
              your support for ongoing development.  You  are  encouraged to
              freely copy and distribute this product (DX.EXE and DX.DOC) to
              friends, business associates, and user groups. It  is expected
              that  DX  will  only be available commercially at some time in
              the future. THIS PRODUCT IS NOT FREE! You  have  an evaluation
              period of two weeks. If you decide not to use DX,  simply pass
              the  disk along to someone else. If you  are  still  using  DX
              after two weeks of  evaluation,  you  are  obligated to send a
              minimum donation of $25  ($35  includes  a printed manual). If
              the future of low-cost,  quality  software  is to continue, we
              all must support this concept.

              Send any comments,  suggestions, questions, or problem reports
              to the  address  below.  Customized  versions  are  available.
              Dealer   inquiries   are   welcome.  Corporate  discounts  are
              available. (Please  quote  your  version  number  --  from the
              program, not the documentation -- on all correspondence.)

              Texas residents please add 8% sales tax.

              Appendix B has a convenient form to use  for  registration and
              ordering. Please address all donations and correspondence to:

                   ECONO-SOFT                        CompuServe [73267,1664]
                   P.O. Box 181030                        GEnie [ROB.BLAINE]
                   Austin, TX 78718-1030          800-367-7590, 512-832-1675




         Page 4                                          1.1 Feature Summary





         Version 2.0                                      Directory eXtended



              Mastercard and VISA are accepted.  Our  policy  includes  a 30
              day, no questions asked guarantee.



              1.3  A Sample Display

              DX's default output mode is a two column  display  which gives
              much more information about  a  disk  and directory than DOS's
              DIR command. While reading this  information,  why  not simply
              type  "DX"  and  compare  the  display   with   the  following
              discussion. A sample output is shown here:


Volume [E:RAM Disk] created: 88-Dec-16 18:33:14;             Directory of [E:\]

Temp         --dir--     88dec16 21:30 | Dx.Exe         71216 r   88dec12  8:04
List.Com        8191 r   88jul08  3:53 | Path.Bat         103 a   88dec16 18:33
Sk1.Swp       378880 a   88dec16 21:13 | Sk4.Swp       301104 a   88dec16 18:32
St.Exe         11152 r   88may12  1:19 | Xx.Spr           981 a   88dec16 21:20

    771,627 bytes in 8 files.               774,144 bytes allocated (1% slack).
    516,096 bytes free (40%).                 1,024 byte minimum allocation.   
  1,291,264 bytes total on: RAM Disk.               Attributes hidden: none.   


              The first line contains the volume  name,  creation date/time,
              if  present,  and  the  file  specification  given  for  file-
              matching.

              For  each  file,  its  name,  extension, size in  bytes,  file
              attributes, and date/time of last modification  are  shown. An
              'a' appears  in the attribute field if the 'Archive' attribute
              is set for this file. This attribute indicates  that  the file
              has been created or modified  since the last disk BACKUP (this
              is of primary interest to hard disk users). An 'r'  appears if
              the  file  has  been  marked  as  'Read-only'.  This attribute
              indicates that DOS will not allow the file to  be  deleted  or
              written over. An 'h' appears if the file is  'Hidden'  and  an
              's' appears if the file is a 'System' file.  (These  last  two
              attributes are not displayed by default -- see section 3.3 for
              more  information.)  The  designation  '--dir--'  indicates  a
              directory.

              The  statistics  printed  at  the  end  contain  the following
              information: the  number of files matched and the total number
              of bytes in those files; the actual amount of space allocated;
              the percentage of "slack" or wasted space (or percentage saved
              in an archive);  the  number  of  bytes free on the device and
              what percentage  of total disk space that represents; the size
              of an allocation  unit  (DOS allocates disk space in multiples
              of this amount); the total disk space and type  of  the  disk;
              and an indication of which file attributes were not displayed.



         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT         Page 5





         Directory eXtended                                      Version 2.0



              (Other information may be  displayed  if  certain  options are
              selected.)

              The type of disk will be one of the following:

                   Disk Type          Sides Sectors/Track  Size    Ref
                   SS/8s Floppy       1     8              160 KB  DOS 1
                   SS/9s Floppy       1     9              180 KB  DOS 2+
                   DS/8s Floppy       2     8              320 KB  DOS 1
                   DS/9s Floppy       2     9              360 KB  DOS 2+
                   QD/15s or 3.5"/9s  2     15             1.2 MB  PC/AT
                                      2     9              740 KB  PS/2
                   3.5"/18s Floppy    2     18             1.44 MB PS/2
                   Hard Disk          Hard (fixed) Disk.
                   RAM Disk           RAM or virtual disk.
                   NET Disk           Network (remote) drive.


              The  "Attributes hidden" indicator will either display  "none"
              -- which indicates that  all  files  were considered for file-
              matching  --  or  a list of attributes that were not selected.
              For  example,  if  the  disk  were  bootable,  the designation
              "Attributes hidden: HS" would be displayed indicating  that in
              order to see  the  hidden  and  system  files  present  in the
              directory, it is necessary to include the H and S flags on the
              /ATtr switch.  By default, hidden and system are not displayed
              -- remember any of  these  options  may  be customized to your
              taste (see section 3.3).



              1.4  General Syntax

              DX's command format complies with the original DOS standard --
              i.e. the standard that DOS was modeled after.  The  problem in
              the PC community is that everyone has a better idea for syntax
              so there really are no  standards. This syntax conforms to all
              DOS utilities. The  format  is shown below and then explained.
              Items within square brackets are optional, items  within curly
              braces may be repeated any number of times, and a vertical bar
              indicates that you should pick one of them (believe it or not,
              some people actually like to see this format):

                   DX [/switch {/switch}] [filespec] [/switch {/switch}]

              The syntax for a file specification is as follows:

                   filespec ::= [d:][path][[;]pattern{+pattern|;pattern}]

              The syntax for a switch designation is as follows:

                   switch ::= /name[-|:[-]value[:value]|=[-]value[:value]]




         Page 6                                         1.3 A Sample Display





         Version 2.0                                      Directory eXtended



              Now what does that  mean  to the average user? There are three
              major parts to the command line. The first is  the  name  (and
              possibly  the  drive  and path) where DOS should load DX from.
              The second part is the file specification and  the  third part
              consists of option selection. This is done via switches.

              The file specification defaults to  "*.*" -- that is all files
              with all  extensions in the current directory of the currently
              logged disk. A  drive  and/or path specification may be given.
              If a path starts with a back-slash ("\") the path  starts from
              the root of the directory tree, otherwise the path starts from
              the current directory level. If the file specification ends in
              a directory name, all files  in  that  directory  are selected
              implicitly. Currently, wildcards are not allowed in  the drive
              or path portions of  the  file  specification and this portion
              cannot be repeated.

              The last name in the "path" specification may be an archive or
              library name -- thus allowing archives and libraries to become
              a  logical extension to the DOS path.  This  is  described  in
              detail in section 3.6.

              After the drive and path, any number of optional file patterns
              may be given. Refer to section 3.2 for detailed information on
              pattern matching.

              Throughout this document,  switch  names  are  shown  in mixed
              upper/lower case. The portion  in  upper  case  represents the
              minimum abbreviation. For example, the "/SINce" switch  may be
              given as "/SINCE", "/SINC",  and  "/SIN",  but not "/SI" since
              that is a valid abbreviation for the "/SIze" switch.

              Switches may be specified either  after  the  command  name or
              after the file  specification.  There  may  be  spaces between
              switches, after the command name, and between a switch and the
              file specification. There may  not  be  any spaces between the
              '/' that starts  the  switch,  the  name of the switch, or any
              values associated with that switch.

              In general a switch is either on or off, and  may  have one or
              two values associated with it. Let's use "SW" as the name of a
              sample switch. The notation "/SW" will turn the switch on, and
              "/SW-" will  turn the switch off. "/SW:value" supplies a value
              to the switch and  "/SW:value:value"  supplies  two  values. A
              switch value may be  a  single  character  option, a string, a
              number, a  keyword, or a complete file specification. For each
              switch discussed in this documentation,  the  types  of values
              and their defaults are  given.  The '=' may be used instead of
              ':'  to  assign  values  to  a  switch  as in  "/SW=value"  or
              "/SW=value:value"   (this  format  is  not  possible  on   DOS
              environment variables -- see section 7).





         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT         Page 7





         Directory eXtended                                      Version 2.0



              DOS limits the length of a command line to 127  characters. If
              you need more room to enter your commands to  DX,  simply  end
              the  current line with a comma (',');  DX  will  then  solicit
              continuation  lines.  DX  limits  the total file specification
              pattern and the total switch specification  to  255 characters
              each -- of course, they can be intermixed.



              1.5  System Requirements

                  -  Any IBM PC family or PS/2 or compatible.

                  -  About  88k  above  that used by DOS  and  any  resident
                     software.  (Special  and  Batch processing require more
                     memory).

                  -  Color or monochrome monitor.

                  -  MS/PC-DOS 2.x, 3.x, or 4.x.

                  -  DX  runs  under  Topview,  DesqView, DoubleDos, and the
                     OS/2 Compatibility Option (see  section  8.2.1)  and is
                     compatible with most networks.
































         Page 8                                      1.5 System Requirements





         Version 2.0                                      Directory eXtended





         2.0  Formatting Options


         This section describes switches  that  modify  how the directory is
         displayed. Keep in mind  that  when you decide what format you like
         best, you can customize  DX  to always use that format (see section
         7).



              2.1  /Pause -- A Screenful at a Time

              The /Pause option is used to cause DX to stop when  the screen
              fills and wait for any key to be struck. Examples:

                  dx /p                    => list full directory; pause
                                              when screen fills

              This switch  is automatically turned off by /Output and /Batch
              and the use of special processing.

              The  /Pause switch may take the  keyword  values  'Screen'  or
              'Directory'.  The default is 'Screen'; 'Directory' will  cause
              DX to pause between directories, archives, and libraries (when
              used with the /FFind option):

                  dx /p:d /ffind           => search the entire disk pausing
                                              whenever the screen fills or a
                                              new directory is entered

              When  DX has paused, you may type a  "G"  to  prevent  further
              pausing.



              2.2  /Wide -- A Quick Look

              The  /Wide  option  is  used  to display 5 entries across  the
              screen when operating in normal  mode. When used with the List
              Directory option ("/Ldir"), as  many  directories  as possible
              are displayed across the screen. Examples:

                  dx /w                    => list all files in the current
                                              directory in a wide format










         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT         Page 9





         Directory eXtended                                      Version 2.0



              2.3  /SINGle -- One File Per Line

              The /SINGle option is  used  to display one file per line with
              some more information than is otherwise displayed.  Some extra
              spaces  are  inserted  for  increased  readability,  the  file
              modification time is displayed with seconds, and the amount of
              space actually  allocated to the file is shown in parentheses.
              (The  seconds field is only accurate  to  within  two  seconds
              because of the way DOS stores packed times.)

                  DX /single               => list all files in the current
                                              directory one file per line

                  DX \*.pas/sing/ff        => starting in the root, search
                                              the entire disk for any pascal
                                              files and list them one file
                                              per line



              2.4  /Totals -- Statistics Only

              The /Totals option causes DX to output the  file  totals only.
              The body of  the  display -- filenames, sizes, attributes, and
              date/times  are  not  displayed. If used with  the  File  Find
              option ("/FFind"),  you may want to specify only the directory
              subtotals, or only  the  grand totals. These are selected with
              the 'Subtotals' or 'Global' qualifiers as shown:

                  dx /t                    => list the totals for all files
                                              in the current directory

                  dx test.*/ffind/t:s      => starting from the current
                                              directory, list the subtotals
                                              by directory for all files
                                              matching test.* in the current
                                              directory and all
                                              subdirectories

                  dx \*b/ff/totals:global  => starting at the root, search
                                              the entire disk for files that
                                              end in "b" and print only the
                                              grand total

              ("/Totals:Off" is equivalent to "/Totals-" and is  the default
              -- i.e. directories are listed along with totals.)










         Page 10                            2.3 /SINGle -- One File Per Line





         Version 2.0                                      Directory eXtended



              2.5  /HEader -- Setting the Header Level

              The /HEader option determines  how  many  lines of heading are
              output. This switch takes a numeric value between 0 and  2. If
              the switch is not  specified,  the  value  defaults to 2 which
              gives all heading  lines.  A  value  of  1  will  suppress the
              Copyright line. A value of 0 will suppress all headers.

                  dx /he:1                 => list all files in the current
                                              directory; omit the copyright
                                              headline

                  dx files /header:0       => list all files matching
                                              "files.*" with no heading



              2.6  /STats -- Setting the Statistics Level

              The /STats  option determines how many lines of statistics are
              displayed at the end  of  the  directory.  This switch takes a
              numeric  argument  between  0  and  4. The default value of  4
              selects  all  statistics.  A value of 3 will suppress the last
              line which contains the total size of the disk,  the  type  of
              disk, and what attributes were not selected. A value of 2 will
              also suppress the total space allocated by the selected files,
              the percentage  of wasted space, and the minimum allocation. A
              value of 1 will only display the number of files and number of
              bytes matched -- this avoids  the  "Free  space" determination
              which  can be time consuming on a hard disk. A value of 1 also
              shows  how many directories were scanned  via  the  File  Find
              (/FFind) or List Directory (/Ldir)  options. A value of 0 will
              suppress  all statistics including those generated by  special
              processing.

                  dx /stat:0               => turn off all statistics

                  dx files/st=1            => list all files matching
                                              "files.*" listing the number
                                              of files and number of bytes
                                              matched

              Two values may be given in which case the second value is used
              on hard  disks  only  which  may  be  used to prevent the time
              consuming free space computation on large hard disks:

                  dx /st:4:1               => level 1 statistics on hard
                                              disks; full statistics on all
                                              other disks







         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 11





         Directory eXtended                                      Version 2.0



              2.7  /CAse -- Setting the Output Case

              The  /CAse  switch  selects  whether  the  output   should  be
              displayed in all upper case, all lower case,  or  with initial
              caps (the first character of each  word  capitalized). Initial
              caps  ("/CAse:Initial") is the default; specify  "/CAse:Lower"
              for lower case and "/CAse:Upper" for upper case:

                  dx /ca:u                 => desplay the directory in upper
                                              case

                  dx *.asm /case:low       => display all "*.asm" files in
                                              lower case



              2.8  /12 -- Setting the Time Format

              The /12 switch  selects  12 hour format when displaying times.
              The default is 24 hour format:

                  dx /12                   => use 12-hour format



              2.9  Color Configuration

              If no colors are specified, DX will set its  colors  to  match
              the current on-screen colors of the left-most character of the
              line above the cursor position when DX is  loaded.  This means
              that DX will blend  in  with  whatever  screen colors you have
              selected  for DOS. If you want DX to  come  up  with  specific
              colors, use the following three  switches  (to  make  them the
              default, see section 7). Each  switch  takes  a  color keyword
              (they may be abbreviated as shown in capital letters):

              Keyword                Color     Keyword                Color
              Black ................ Black     GRAy ............. Dark Gray
              BLUe .................. Blue     LBlue ........... Light Blue
              Green ................ Green     LGReen ......... Light Green
              Cyan .................. Cyan     LCyan ........... Light Cyan
              Red .................... Red     LRed ............ Bright Red
              Magenta ............ Magenta     LMagenta .... Bright Magenta
              BRown ................ Brown     Yellow ....... Bright Yellow
              Lgray ........... Light Gray     White ......... Bright White

              Some color displays, the 3270-PC  for  example,  cannot accept
              the high-intensity colors  (the  second  column).  If  a high-
              intensity  color  is  used  on  one  of  these  displays,  the
              corresponding low-intensity color will appear instead.






         Page 12                        2.7 /CAse -- Setting the Output Case





         Version 2.0                                      Directory eXtended



                   2.9.1  /BColor -- Background Color

                   The background color  may  be  selected  via  the /BColor
                   switch. Only colors on the left side of  the  above table
                   (Black  ..  Lgray  -- low intensity) should be used. If a
                   high intensity color is selected, the low intensity color
                   will  actually  display  and  the foreground display will
                   blink. The default is determined by the current colors at
                   the cursor position when DX is started:

                       dx /bcolor:bl          => set background black

                       dx /bc:cyan            => set background cyan


                   2.9.2  /FColor -- Foreground Color

                   The foreground color  may  be  selected  via  the /FColor
                   switch.  Any  of  the  colors  in the above table may  be
                   specified. The  default  is  determined  by  the  current
                   colors at the cursor position when DX is started:

                       dx /fc=gr              => set foreground gray

                       dx /fcolor:black       => set foreground black


                   2.9.3  /DColor -- Directory Color

                   DX highlights certain parts  of  it's  display  using the
                   color specified by /DColor  (this  includes  the Diretory
                   name, volume name, and verification questions). Any color
                   in the above table may be specified. The default for this
                   color is  based on the foreground color and is determined
                   by  toggling  the  high  intensity screen attribute. This
                   means that  if the foreground color is brown, the default
                   directory color is bright yellow, and  if  the foreground
                   color is light blue, the default directory color is blue.
                   (If  run  on  a  display  that  does  not  support  high-
                   intensity,  directories  will  not be high-lighted unless
                   you specify this switch.) This color may be specified by:

                       dx /dc:blu             => set directories blue

                       dx /dcol:yellow        => set directories yellow


                   2.9.4  /ANSI -- xANSI Driver Support

                   Colors are normally  set  through  the  system  BIOS. The
                   /ANSI switch when used in conjunction with  screen output
                   through DOS (see /Output, section 2.10)  will  set colors
                   via standard ANSI escape sequences.



         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 13





         Directory eXtended                                      Version 2.0



                       dx /fc:bl /bc:cy /out /ansi
                                              => set black on cyan; send
                                                 ANSI sequences to DOS



              2.10  /Output -- Where to Send the Directory

              The /Output switch is  used  to specify an output file. DOS is
              not  normally  used  for screen output at all (this means that
              the DOS RAW mode setting has no effect). This allows colors to
              be used and  speeds  up the screen display. Specifying /Output
              causes output to go through DOS in one  of  two  ways.  If the
              switch is given without a value, then DOS  standard  output is
              used. This allows  redirection  (via  '>')  and  piping ('|').
              Redirection  allows  you  to route the output to any device or
              file -- including  'NUL'  which  discards  all  output. Piping
              allows  you to send the output of DX  to  another  program  as
              input  to  that  program. A file specification may be given to
              /Output which is the preferred method of output to disk  as it
              will run significantly faster than redirecting to a disk file.
              Examples:

                  dx /output:a:\misc\fred  => output to "a:\misc\fred"

                  dx file1.?xx/o | myprog  => pipe output to "myprog"

                  dx /o:nul                => discard output entirely

                  dx /out >a:fred          => redirect output to a:fred
                                              ("/out:a:fred" is more
                                              efficient)



              2.11  /PRint -- Formatting for the Printer

              The /PRint switch is used to format the output for  a printer.
              This  switch  automatically  selects  "/Output:PRN"   but  the
              /Output switch may be explicitly specified. A printer type may
              be given  as  a  value  to  the  switch but currently the only
              printers that may be specified  are 'Epson' and 'Ibm' and they
              do the  same  thing!  'Epson'  is  the  default so there is no
              reason to specify them at all. Other printers may be  added in
              the future. If this switch does not work well on your printer,
              please write.

              The print formatting consists of setting skip over perforation
              to 6, not starting a new directory in the last 12 lines of the
              page, and highlighting directory names by double-striking.






         Page 14                 2.10 /Output -- Where to Send the Directory





         Version 2.0                                      Directory eXtended



                  dx a:/print              => send printer formatted output
                                              to "prn"

                  dx .pas /pr /out:lpt3:   => send printer formatted output
                                              to "lpt3:"

                  dx /pr/out:b:myfile      => format for IBM printer and
                                              send output to "b:myfile"


                   2.11.1  /PRMode -- Establishing the Print Mode

                   The /PRMode switch selects the  type  size  (font)  to be
                   used   when  printing.  The  default  is  'Normal',   but
                   'Compressed'  and  'Tiny'  may  be used. 'Compressed' and
                   'Tiny' both allow more columns  across  the  page; 'Tiny'
                   allows more lines on the page.

                       dx /pr/prm:c           => format compressed output
                                                 and send to "prn"

                       dx /pr/prmode:tiny     => format tiny output and send
                                                 to "prn"


                   2.11.2  /PRMArg -- Setting Print Margins

                   The /PRMArg switch allows you  to  specify  the  left and
                   right print margins. If  you  give  only the left margin,
                   the right margin is set to 80 (normal) or 121 (compressed
                   and tiny) columns  past  the  left  margin.  Specifying a
                   larger right  margin assumes that you have a printer that
                   can handle the increased width.

                       dx /pr/prma:5          => use print margins 5:80;
                                                 send output to "prn"

                       dx /pr/prm:comp/prmarg:10:240
                                              => use print margins 10 and
                                                 240; format compressed
                                                 output and send to "prn"



              2.12  /FSBlink -- Causing /FSize Message to Blink

              The  /FSBlink  switch  will  cause  the  "SUFFICIENT"  or "NOT
              SUFFICIENT" message  from /FSize to blink. See section 4.3 for
              information on /FSize.

                  dx /fs:b/fsb             => message will blink





         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 15





         Directory eXtended                                      Version 2.0



              2.13  /Quiet -- Inhibit Informative Messages

              The  /Quiet  switch  will  inhibit  the  flashing  informative
              "quick" messages -- the ones that tell you  what  directory DX
              is scanning or sorting or what file is being checksummed, etc.
              This  may  be  useful in batch files where you may not want to
              see them.

                  dx /q                    => inhibit all informative
                                              "quick" messages



              2.14  /NLines -- Specify Output Height

              The /NLines switch may  be  used to specify the height of your
              screen or printer page. If this switch is  not  specified, the
              screen height is taken from the system BIOS (usually 25 lines)
              and  the printed page is assumed to be  66  lines  tall.  This
              switch  may  be  useful  when  running  DX  under  a  windowed
              environment.

                  dx /nl=15                => set screen height to 15

              NOTE that since DX takes the screen height and width  from the
              BIOS, the EGA/VGA screen heights of 43 and 50  lines  (in  8x8
              modes) and widths of 132 characters will be supported. DX will
              not set  these modes directly but will format output correctly
              for them if you use them.



              2.15  /ALign -- Aligning Extensions

              The  /ALign  switch  will cause DX to  align  file  extensions
              similar to the way DOS's DIR does.

                  dx /al                   => align extensions



              2.16  /ANgle -- Angle Bracket Directory Indicator

              The /ANgle switch will cause DX to indicate  a  directory with
              "<DIR>" as DOS's DIR does instead of "--dir--".

                  dx /an                   => use "<DIR>" instead of "--
                                              dir--"








         Page 16                 2.13 /Quiet -- Inhibit Informative Messages





         Version 2.0                                      Directory eXtended



              2.17  /DOTstar -- Automatic ".*"

              DX normally appends ".*" to any  directory  specification that
              does not include a "." -- you can turn this off by:

                  dx /dot-                 => do not assume ".*"


















































         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 17





         Directory eXtended                                      Version 2.0





         3.0  File Matching Options


         The  heart  of  DX  is  a very powerful file-matching engine.  Many
         possibilities exist for selecting and excluding files.



              3.1  /Command -- Finding Commands

              The /Command switch  is  used  to  match  only  files  with an
              extension of ".COM", ".EXE", and  ".BAT".  This  is  useful in
              answering the question: "I just got this disk  from  Joe; what
              am I supposed to type to start the program?"

                  dx /c b:                 => show all commands on "b:"

              This is  exactly  equivalent  to  (this  pattern  is described
              below):

                   dx b:*.com+*.exe+*.bat



              3.2  Extended Pattern Matching

              The file-matching mechanism  allows for multiple inclusion and
              exclusion patterns. A space or plus separate patterns that are
              to be selected. For example:

                  dx .dbf abc*.bas+ralph.  => selects all files with an
                                              extension of ".DBF"; all files
                                              that start with "ABC" and have
                                              an extension of ".BAS"; and
                                              the file "RALPH" (with no
                                              extension).

              Note that if a  file  or extension is missing, '*' is assumed.
              "FILE1" and "FILE1.*" are equivalent  and  ".COM"  and "*.COM"
              are equivalent.  "FILE1."  or  "*."  explicitly  specifies  no
              extension -- this can be turned off via /DOTstar- (see section
              2.17).

              A semi-colon is used to separate patterns where the subsequent
              pattern is to be excluded from the search. For example:









         Page 18                                   3.0 File Matching Options





         Version 2.0                                      Directory eXtended



                  dx .bas+.asm;goodfile    => selects all files with an
                                              extension of ".BAS" and ".ASM"
                                              except "GOODFILE.BAS" and
                                              "GOODFILE.ASM".

                  dx ;test*;.com           => selects all files except those
                                              starting with "TEST" or having
                                              an extension of ".COM".

              See  section  8.4  for   information   on   setting  alternate
              characters for '+' and ';'.

              Within each  pattern, multiple wildcards may be given. The DOS
              wildcard characters  are used but greatly expanded upon. A '?'
              matches  any  single  character  and  a '*' matches 0 or  more
              characters ('?*', therefore, matches  1  or  more characters).
              DOS  allows any number of '?'s but only  one  '*'.  DX  allows
              multiple '*'s  with  characters  between  and  after  the '*'.
              Examples:





































         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 19





         Directory eXtended                                      Version 2.0



                  A*Z                      => selects any file that starts
                                              with an "A" and ends in a "Z".
                                              "AFILEZ" and "AZ" both fit,
                                              but "AFILE" does not.

                  .*S                      => select any extension that ends
                                              in an "S". "TEST.PAS",
                                              "MYFILE.BAS", and "TEST.S" all
                                              fit.

                  *TEMP*+.TMP              => selects any files that have
                                              "TEMP" anywhere in their names
                                              or ".TMP" for extensions.
                                              "TEMP.X", "TEMP12", "XTEMP.C",
                                              "XTEMP12" and "FILE.TMP" all
                                              fit.

                  ;T*F?;.EXE               => selects all files except those
                                              that start with a "T" and have
                                              an "F" as the second to last
                                              letter or have an extension of
                                              ".EXE". "TFA", "TESTFL", and
                                              "DX.EXE" are examples of files
                                              that will not match. "TF" and
                                              "TESTF" will match.

                  DX.EXE+DX.DOC            => selects the two files that you
                                              might want to give to your
                                              buddy.

                  *.                       => select all files with no
                                              extensions.

                  .                        => select all files in the
                                              current directory (equivalent
                                              to ".\*.*").



              3.3  File attribute Matching

              You may select  any  set  of  file  attributes  to  include or
              exclude. By default, DX  is  set  to  include all files except
              hidden  and  system  files. DX will tell you (unless you limit
              output with the /STats option) what file attributes were found
              and not displayed.


                   3.3.1  /Full -- All Files

                   The /Full switch specifies all file  attributes.  This is
                   the simplest way to see the entire directory:

                       dx /f                  => display all files


         Page 20                                 3.3 File attribute Matching





         Version 2.0                                      Directory eXtended



                   NOTE that  this option will override the /ATtr switch and
                   is exactly equivalent to "/ATtr:F".


                   3.3.2  /ATtr -- Select File Attributes

                   The /ATtr switch modifies  or  selects  the group of file
                   attributes to display. By default, DX includes  all files
                   except those that have the  hidden  or  system attributes
                   set -- this  is  referred  to  as the base set. The /ATtr
                   switch  takes  a   set  of  characters  indicating  which
                   attributes should  be added or removed from the base set.
                   The letters  used are "A" for archive, "D" for directory,
                   "H" for hidden, "N"  for  normal,  "R" for read-only, and
                   "S" for system. A  letter  by itself or followed by a "+"
                   will be added to the set. A letter followed by a "-" will
                   be removed from the set. The letter "F"  will  select the
                   full  set  of  attributes. To "wipe out" the base set and
                   specify all attributes explicitly, begin the switch value
                   with a "!".

                   DX  defines  a  "normal"  file  to  be  one that  has  no
                   attributes set. To see system  and  hidden  files,  it is
                   often necessary to specify both (or use /Full or "F"):
































         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 21





         Directory eXtended                                      Version 2.0



                       dx /at:!a              => only files with archive set

                       dx /at:a-              => Exclude files with archive
                                                 set

                       dx /at:fa-             => All files except archive --
                                                 i.e. those that have been
                                                 backed up

                       dx /at:!d              => display only directories

                       dx /at:d-              => exclude directories

                       dx /at:fd-             => all files except
                                                 directories

                       dx /at:!n              => display only "normal" files
                                                 --i.e. those that have no
                                                 attributes set

                       dx /at:n-              => exclude "normal" files

                       dx /at:fn-             => all files except "normal"
                                                 files

                       dx /at:!r              => display only read-only
                                                 files

                       dx /at:r-              => exclude read-only files

                       dx /at:fr-             => all files except read-only
                                                 files

                       dx /at:!h              => display only hidden files

                       dx /at:h               => include hidden files

                       dx /at:!s              => display only system files.

                       dx /at:s               => include system files

                       dx /at:hs              => all files (same as /Full)

                       dx /at:f               => all files (same as /Full)

                   NOTE that DX will not proceed into or display the name of
                   any directory that  has  been marked as hidden unless the
                   directory name is explicitly  given  as  part of the file
                   specification or the hidden attribute is turned on.







         Page 22                         3.3 /ATtr -- Select File Attributes





         Version 2.0                                      Directory eXtended



              3.4  /SIze -- Setting a Size Range

              The /SIze switch specifies a range of file sizes to include or
              exclude  from the selection. Two values may  be  given.  If  a
              minus sign precedes  the  first value, the range is considered
              an exclusion range. If only one value is given, an exact match
              or  exact exclusion is selected. The letter  'K'  or  'M'  may
              follow either  value  and  specifies  a  number  of kilo-bytes
              (1024) or mega-bytes (1024*1024):

                  dx /si:1000:10000        => files between 1000 and 10000
                                              bytes (inclusive) only

                  dx /si:-500:25000        => files less than 500 bytes or
                                              larger than 25000 bytes

                  dx /si:2345              => only files exactly 2345 bytes

                  dx /si:-45               => only files that are not 45
                                              bytes

                  dx /si:100k:5m           => files between 102400 and
                                              5242880

                  dx /si:0 /del            => delete all zero length files



              3.5  /SINce and /BEfore -- Date/Time Ranges

              Files may be included or excluded based on a  range  of  dates
              and times specified  by  the /SINce and /BEfore switches. This
              affords a much more flexible method of specifying  a  date and
              time. Those of  you  familiar with Digital Equipment's line of
              mini-computers, will have no trouble with the new format... it
              is very similar and expands on DEC's format in some areas.

              The general format is:

                   /SINce:date:time    /BEfore:date:time

              If "date" is omitted, TODAY  is assumed; if "time" is omitted,
              midnight is  used. The following formats may be used (keywords
              may be abbreviated):












         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 23





         Directory eXtended                                      Version 2.0



                   Date                  Example                 Description
                   +nn                   +5                  5 days from now
                   -nn                   -3                       3 days ago
                   dd-                   15-          15th day of this month
                   dd-month[-yy[yy]]     3-may-88                May 3, 1988
                   mm-dd[-yy[yy]]        5-3-1988                May 3, 1988
                   yymmdd                880503                  May 3, 1988
                   Today                 tod                    today's date
                   TOmorrow              tomorrow            tomorrow's date
                   Yesterday             y                  yesterday's date
                   dayofweek             tuesday                last tuesday
                   Next_dayofweek        next_wednesday       next wednesday

                   Time                  Example
                   hh:mm[:ss][Pm]        12:34, 12:34:56, 8:34pm, 4:34:45a
                   hh[mm][Pm]            12, 1234, 5p, 714pm
                   +hh[mm]]              +4, -3
                   -hh:mm[:ss]           +2:34, -3:12:34

              It may  seem odd to include keywords that represent date/times
              in the future, but  these  same  formats  are supported on the
              /FDate and /TDate switches.

              In addition, the keyword "NOW"  is  defined  as  "TODAY:+0" --
              i.e. the current date and time.

              NOTE  that  if you only specify a  time,  DX  will    normally
              correctly interpret the  value  and assume TODAY for the date.
              There is one case where DX cannot tell the difference.  If you
              want to specify a plus/minus  number of hours without giving a
              date, you must use two colons -- i.e. a null  date  -- see the
              example below.

              A date/time may also be given by reference to another  file by
              using  the   "@filename"   format   illustrated   below.  This
              specification may include  simple DOS-style wildcards (not DX-
              style) in which case,  the  first  file  that matches, will be
              used.


















         Page 24                  3.5 /SINce and /BEfore -- Date/Time Ranges





         Version 2.0                                      Directory eXtended



                  /since:2-feb-87 /before:2-feb-87:23:59:59
                                           => all files created on February
                                              2, 1987

                  /sin:1-jan-87 /be:31-dec-87:23:59:59
                                           => all files created in 1987

                  /before:monday           => before Monday at midnight

                  /sin:3-mar:7p            => since the 3rd of March at 7pm

                  /sin:y:1200              => since yesterday at noon

                  /sin:-2:5pm              => since 2 days ago at 5pm

                  /sin:-5                  => since 5 days ago

                  /sin:y:-1                => since yesterday, 1 hour before
                                              now

                  /sin::-1                 => since 1 hour ago (note two
                                              colons)

                  /sin:851004              => 10/4/85 -- for backward
                                              compatibility

                  /sin:@dump.dir           => since date/time on "dump.dir"

              Note  that /Since is defined as on or  after  and  /BEfore  is
              defined as on or before.



              3.6  Viewing ARChive and LiBRary Directories

              DX has the  capability  to display the directories of archives
              and  libraries  and perform limited  processing  within  them.
              ARChives conform to the format  produced by the ARC program by
              System  Enhancement Associates and other shareware and  public
              domain  programs.  This  format  is   a   powerful   tool  for
              compressing and combining files so that they take up less disk
              space  --  it  has become the standard  in  file  compression.
              LiBRaries have been in the  public domain for many, many years
              and are the "old" standard  in combining multiple files into a
              single file. These files are  not  necessarily  compressed. DX
              considers any file  that  has  an  extension of ".ARC" to be a
              potential archive and any file  with an extension of ".LBR" to
              be a potential library. DX will not look in  any  other  files
              for internal directories.







         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 25





         Directory eXtended                                      Version 2.0



              DX treats  archives and libraries as logical extensions to the
              DOS directory structure.  To  obtain the directory of a single
              archive or library, simply give  its  name  (with  an optional
              drive and path specification)  and  a  backslash  -- it is not
              necessary to specify the extension  (.ARC  or  .LBR)  unless a
              normal DOS subdirectory with the  same name exists in the same
              directory.  Any  DX   pattern  specification  may  follow  the
              backslash  -- if no pattern follows,  "*.*"  is  assumed.  The
              backslash is required -- without it, DX will simply report the
              directory of the archive  or  library  file  and not the files
              within it! Examples:

                  dx source\               => all files in "source.arc" or
                                              "source.lbr".

                  dx a:\save\.pas;file     => all "*.pas" files except
                                              "file.pas" in "a:\save.arc" or
                                              "a:\save.lbr".

                  dx \misc\85.arc\t*.*     => all "t*.*" files in
                                              "\misc\85.arc".


                   3.6.1  /ARCDT -- Validating ARC/LBR Timestamps

                   The original ARC  program always maintained the archive's
                   date/time as that of the most recent file within it. This
                   is  obviously  useful.  Some  archive  utilities  do  not
                   correctly   maintain  date/time.  In  addition,  if   you
                   download an archive from a bulletin board system, it will
                   get the current date/time which is not  representative of
                   the files you received.

                   The  /ARCDT  switch  insures  that  an  .ARC   or  .LBR's
                   date/time  is correct -- i.e. that it  is  equal  to  the
                   date/time of  the most recent file within it. This switch
                   only  applies  to  .ARC/.LBRs that DX looks in and is not
                   verifiable --  i.e.  if  you  don't  actually  select the
                   contents  of the .ARC/.LBR (with "arcname\" or  "/FF:A"),
                   DX will not detect  an  incorrect  date/time and will not
                   correct it. The switch may  take  the  value "/ARCDT:Log"
                   (default)  or  "/ARCDT:Nolog"  to  determine  whether  an
                   informative message is  displayed. The switch is intended
                   to  be  set  on in your environment  and  forgotten  (the
                   default is /ARCDT-):

                       dx /arcdt              => correct ARC/LBR
                                                 date/timestamps

                       dx /arcdt:nolog        => do it quietly (no message)






         Page 26                 3.6 Viewing ARChive and LiBRary Directories





         Version 2.0                                      Directory eXtended





         4.0  Utility Options



              4.1  /SOrt -- Sorting Files

              DX can sort files in any order. Sorting is off by default. The
              /SOrt switch without a value selects directories  before files
              and  then  name  and then extension in  ascending  order.  The
              sorting criteria consists of: "N" for name, "E" for extension,
              "S"  for  size,  "D" for date/time, "A" for attribute, and "*"
              for directory vs. file. Specifying  a letter by itself or with
              a '+'  suffix  indicates  ascending  order;  specifying  a '-'
              suffix    indicates    descending   order.    (For    backward
              compatibility, "T" is accepted as equivalent to "D".)

              The "*" is a special type of sorting -- it splits  the display
              showing directories first and then files or vice versa ("*-").

              If  the  letter  "C" appears anywhere in  the  sort  criteria,
              column sorting is enabled  --  DX  will  display the output in
              columns ("C" by itself is undefined).

              The sort criteria may  be  up to 16 characters long. Note that
              you can sort files within ARChives and LiBRaries.

                  dx /so                   => directories before files; sort
                                              by name and extension (same as
                                              "*ne")

                  dx /so:*-ne              => files before directories; sort
                                              by name and extension

                  dx /so:ne                => sort by name and extension

                  dx/so:e-n-               => sort files descending by
                                              extension first and then by
                                              descending name

                  dx /so:snd-              => sort files by ascending size,
                                              ascending name, and then
                                              descending date

                  dx /so:*nec              => directories before files; sort
                                              by name and extension; display
                                              in columns








         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 27





         Directory eXtended                                      Version 2.0



              4.2  /FFind -- Searching Multiple Directories

              The "File  Find"  (/FFind)  option  searches  the  entire disk
              directory for files that match. This is primarily intended for
              hard disk  users  but  may  be  used  on floppies as well. The
              search starts in the current directory. If you want the search
              to start at  the  root  or  in a different directory, you must
              specify that in the path:

                  dx \ /ff                 => display all files in all
                                              directories on the default
                                              disk

                  dx .pas/ff               => find all files ending in
                                              ".pas" in this directory and
                                              any sub- directories of this
                                              directory

                  dx d:\foo.bar/ff         => search the entire D: disk for
                                              the file "foo.bar"

              Normally only directories  are  searched ("/FFind:Directory").
              You can expand the search to include any archives or libraries
              encountered by use of the following  keywords:  'All' searches
              directories, archives, and libraries; 'ARchive'  searches only
              archives  found  in   the  current  directory;  and  'Library'
              searches only libraries found in the current directory:

                  dx \.pas /ff:a           => find all "*.pas" files in
                                              every directory, archive, and
                                              library

                  dx /ff:all               => display all files in every
                                              directory, archive, and
                                              library starting with the
                                              current directory

                  dx .doc /ff:l            => find all "*.doc" files in the
                                              current directory and any
                                              libraries in the current
                                              directory

              NOTE that DX will not proceed into a  hidden  directory unless
              the hidden attribute is turned on via /ATtr (see section 3.3).












         Page 28                4.2 /FFind -- Searching Multiple Directories





         Version 2.0                                      Directory eXtended



              4.3  /FSize -- Testing if File Transfer Possible

              The "File Size" (/FSize) option is used to determine whether a
              set of  files (matching all other criteria) can be transferred
              to a specified disk. This  option does not transfer any files.
              /FSize takes into account the differences in  allocation units
              on  different disk drives and tells you  how  many  bytes  the
              files will occupy on the  destination  drive  (along  with how
              much free space there exists on that drive).  You  can request
              that the sufficient/not sufficient message blink by specifying
              the /FSBlink parameter. The value specified  with  /FSize must
              be a valid disk drive or the minimum allocation (cluster) size
              of a disk drive:

                  dx *.pas/fs:a:           => determine if all ".pas" files
                                              may be transferred to the disk
                                              in A:

                  dx b:\*test/fs:d/ff      => determine if all files ending
                                              in "test" anywhere on the B:
                                              drive can be transferred to
                                              disk D:

                  dx xxx./fs:512/fsb       => determine how much space is
                                              required to transfer the file
                                              "xxx" to a disk with 512 byte
                                              minimum allocations. The
                                              message will blink

              When used with /COPy or /MOve, the drive may  be  omitted  and
              will  be taken from the target given to  /COPy  or  /MOve.  In
              addition, the /COPy or /MOve will not be done  if  the  /FSize
              test fails.

                  dx files/cop:a:/fs       => copy to a: if room is
                                              available

              NOTE:  DX  does not detect the case  where  a  file  is  being
              overwritten  --  thus resulting in  it's  previous  allocation
              being reclaimed; nor will it detect the case where directories
              may have to be  created  or  expanded  -- taking up additional
              allocation units.



              4.4  /Ldir -- Listing Directory Names

              The  "List Directories" (/Ldir) option displays the  directory
              names, number of files and size of the files in each directory
              for  all  directories  found on the disk. The search begins in
              the current directory unless a path is specified:





         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 29





         Directory eXtended                                      Version 2.0



                  dx c:/ld                 => list the default directory on
                                              C: and all of its sub-
                                              directories.

                  dx /ld/ff:a              => list ARChive and LiBRary
                                              directories too.

                  dx \/ld/w                => starting at the root, list all
                                              directories on the logged
                                              drive in a wide format.



              4.5  /CKsum -- Checksumming Files

              A  checksum is a method of "folding" all of the data in a file
              into a single value. This value can then be  compared  to  the
              checksum of a file that should  be  a copy of the original. If
              the checksums match, you have a high probability (estimated at
              99.6%) that the files are  identical.  It,  therefore,  can be
              used as a quick check to see if files have  changed. Checksums
              are printed as  4  hexadecimal  digits  --  the  value  is not
              important; only that it matches the original.

                  dx newfile /cksum        => compute newfile's checksum.



              4.6  /CRC -- Cyclic Redundancy Checks

              A Cyclic Redundancy Check is very similar to a checksum except
              that the summation is  constantly  rotated  logically  (it's a
              little  more  complicated  than  that.)  CRCs  were  developed
              because a simple checksum  is  not  always accurate enough for
              high speed  tele-communications where an error may occur for a
              few characters in a row  and end up cancelling themselves out.
              In  other  words,  the checksum may match but the files don't.
              The CRC algorithm takes  almost  twice  as  long as the simple
              checksum but it is estimated  to  be  99.9969%  effective. The
              algorithm used for the CRC  computation is exactly the same as
              that used  in the ARC program by System Enhancement Associates
              and comes from an article in PC Tech Journal of April  1985 by
              W. David Schwaderer. Since the  algorithm is the same, DX uses
              the CRC to compare files inside an archive to those outside of
              an archive (see section 5.3).

              CRCs  (or  checksums)  may  be  compared  over  the  phone  or
              electronically with another user  --  if  the values match you
              have  a 99.9969% (or 99.6%) probability  that  the  files  are
              identical.

                  dx .bas /crc             => compute the CRC of all "*.bas"
                                              files.



         Page 30                            4.5 /CKsum -- Checksumming Files





         Version 2.0                                      Directory eXtended



              CRCs are displayed  within  curly braces. When DX displays the
              subtotal and total CRC summations at the end  of  the display,
              these  values   are  a  summation  of  the  actual  CRCs  and,
              therefore, are not true CRCs.




















































         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 31





         Directory eXtended                                      Version 2.0





         5.0  Special Processing


         Special  processing  is  the term used to collectively refer to all
         the little extras that DX can  do  to  your files as it finds them.
         There   are   currently   10   functions  that  constitute  special
         processing:  /VIew, /RUn, /MOve, /COPy, /COMPare, /REName,  /GOBak,
         /FDate,  /FAttr, and /DELete. Special processing  is  done  in  the
         order just given --  this  is important because if any error occurs
         in any step, all subsequent steps are skipped for  that  file.  The
         decision to skip is performed separately for each file that matches
         the directory specification. In addition,  if  you  use  the /FSize
         switch  with  /COPy  or  /MOve,  special  processing  is completely
         bypassed for all  matched  files  if  the  /FSize  test  fails (see
         section 4.3). This allows you to /MOve or /COPy a group of files to
         another disk only if  sufficient  room exists. In order to make the
         decision  based  on  the   /FSize   test,   the  /DEfer  switch  is
         automatically turned on -- this defers all special processing until
         the entire directory is scanned and is necessary so that  the total
         space required is known  before  any  transfers  begin. DX will not
         perform  any  special  processing on directory names -- it will, of
         course, proceed deeper into  the  directory  structure if /FFind is
         on.

         By default, DX asks for  verification before it does anything. Many
         options  exist  when  DX is asking for  verification  (see  section
         5.11).



              5.1  Target File Specifications

              Several  special  processing  options  accept  a  target  file
              specification -- /COPy,  /MOve, /COMPare, /REName, and /GOBak.
              The  target   specification   may   contain   a  sophisticated
              replacement pattern as detailed below.  If the target is a DOS
              character device (like "PRN"), this discussion does not apply.

              Only  one target specification may be  given  --  despite  the
              number of the above switches  selected. If no target is given,
              the  current  drive/directory  and  the  source  filename  and
              extension are the default (".\*.*").

              If the drive/or  directory  are not specified, they are filled
              in from the  current  defaults  --  just  like  the  main file
              specification. The target  filename and extension are replaced
              separately on a file-by-file basis and follow these rules:

                  -  If the filename or  extension  is  not specified in the
                     replacement option, "*" or  ".*"  is  used (this is NOT
                     affected by the /DOTstar switch).



         Page 32                                      5.0 Special Processing





         Version 2.0                                      Directory eXtended



                  -  A "*" copies 0 or more characters; no more than one "*"
                     may  be  present  in the pattern (that is, no more than
                     one  in  the  filename  and  one in the  extension)  --
                     characters may preceed and succeed the "*".

                  -  Characters from the beginning of the string up to a "*"
                     are test/copied first; characters from the  end  of the
                     string back to a "*" are test/copied next -- backwards;
                     any leftover characters "in the middle" match  the "*".
                     Test/copied  means that if the character is  explicitly
                     specified in the  replacement pattern, it will override
                     the character in the source pattern; if a  '?'  is used
                     in  the  replacement  pattern, the corresponding source
                     character  will  be  used; if a  '/'  is  used  in  the
                     replacement  pattern,  the  source  character  will  be
                     deleted with no replacement.

              If this seems complicated, just  try it! Chances are that it's
              going to work the  way  you'd like it to and, with verfication
              on, you'll see just what DX  will  do  and get to say "Yes" or
              "No" before it does it!

              In the following example  table,  "Source"  is the filename or
              extension as matched by the normal  file  matching mechanisms;
              "Replacement" is the pattern  as  given  to  one of the target
              switches;  and  "Target"  is the generated target  name  as  a
              result of  the  combination.  Remember  that  the  replacement
              procedure  is  performed  on   the   filename   and  extension
              individually.

                   Source              Replacement         Target
                   myfile              *                   myfile
                   hisfile             her*                herfile
                   yourfile            *list               yourlist
                   myfile              ??te??              mytele
                   xxxy                xxx?z               xxxyz
                   yyxxyyyy            "//*////"           xx
                   xxxxxxyy            "zz////??"          zzyy

              NOTE that the use of "/"s in your patterns  require  that  the
              target file specification be quoted.



              5.2  /MOve and /COPy -- Moving/Copying Files

              /MOve and /COPy  are  two  very  powerful ways to move or copy
              files from one disk/directory  to  another.  /MOve  will first
              attempt to  rename the file across the DOS directory structure
              -- this will only work if  the  source and target are the same
              physical disk (SUBST'd disks are  the  same  physical  disk as
              their root directory  and  move-rename  will  work).  If move-
              rename is successful, the file is not actually  copied  -- its
              directory entry  is  simply  removed  from  one  directory and


         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 33





         Directory eXtended                                      Version 2.0



              placed in another. If the  rename  process  fails,  /MOve will
              then attempt to  perform  a copy, optional compare, and delete
              to move the file(s).

              /COPy  always makes a physical copy of the  file.  It  may  be
              followed by an optional compare.

              From here on in  the  discussion,  "move-rename" refers to the
              renaming of a  file  across the directory structure and "copy-
              operation" refers  to both /COPy and to /MOve when move-rename
              fails.

              If not enough disk space is available during a copy-operation,
              the partial copy will be deleted and the original will  not be
              touched.

              If  the  destination  directory does not exist,  you  will  be
              prompted for permission to create it (this is on by default --
              see section 5.2.2). If an empty directory results,  it  may be
              removed (this is off by default -- see  section  5.2.3). There
              are  a  variety  of  verification options (including automatic
              compare  after  copy)  discused  under /VLevel (section 5.2.6.
              Pattern replacement may take place to change the  name  of the
              files as they are moved. For instance.

                  dx *.wrk /move:\temp\*.hld
                                           => move all "*.wrk" files to the
                                              "\temp" directory and give
                                              them extensions of ".hld".

                  dx t*.doc+t*.txt /copy:b:
                                           => copy all "t*.doc" and "t*.txt"
                                              to b:

                  dx .doc;text /cop:e:*.hld
                                           => copy all "*.doc" except
                                              "text.doc" to e:*.hld

                  dx ;myfile /cop:\temp    => copy all files except
                                              "myfile.*" to \temp

                  dx ;my* /cop:\temp\new\  => copy all files except "my*.*"
                                              to newly created directory
                                              \temp\new

                  dx .pas /move:b: /fsize  => move all "*.pas" files to B:
                                              only if enough room exists.

                  dx t*.bas /move:\basic   => move any files "t*.bas" to
                                              "\basic" -- see note on
                                              ambiguity below if "\basic"
                                              does not exist.




         Page 34                 5.2 /MOve and /COPy -- Moving/Copying Files





         Version 2.0                                      Directory eXtended



              NOTE:  Be careful when specifying pattern replacement  because
              it is easy  to  end  up  with  more than one source file being
              mapped to the same  target  file.  In the first example above,
              all "t*.bas" files are being moved to "\basic". If "\basic" is
              indeed  an  existing  directory, DX will figure it out and map
              the files  implicitly to "\basic\t*.bas". If "\basic" is not a
              directory, all  the files will map to "\basic.bas" -- probably
              NOT  what you had in mind! If you want DX to interpret this as
              a  request  to  create  a   directory,   you   must   end  the
              specification with a "\". (One protection here is that DX will
              not overwrite an existing  file,  so  the second file transfer
              will pause with an overwrite question.) It is always safest to
              end a directory with a "\":

                  dx t*.bas /move:\basic\  => move any files "t*.bas" to a
                                              new directory "\basic\t*.bas".

              Care must be taken when using /MOve or /COPy  with  /FFind  --
              see the discussion in section 5.13.

              DX will not allow a file to be  moved  or  copied  over itself
              (this  test  can  be  confused  by  the  DOS ASSIGN  or  SUBST
              commands). Neither the source nor the target of /MOve or /COPy
              may be within an archive or library.

              The final statistics  will  reflect the number of bytes copied
              for all  copy-operations (not for move-renames) -- this is the
              total  of  the  actual  sizes  of  the  files  and  not  their
              allocations.

              NOTE  that  the  target of a /COPy or /MOve may be a character
              device:

                  dx myfile /copy:prn      => copy file to system printer


                   5.2.1  /APpend -- Append Files

                   /APpend  is  equivalent  to using /COpy /OVerwrite:Append
                   and will only affect a  copy-operation  where  the target
                   exists: the source  file  will be appended to the target.
                   If  the file did not previously  exist,  the  first  file
                   copied  to  it  will  create  it  (unless  combined  with
                   /OVerwrite:Mustexist;  see  section  5.11.3). If the last
                   character  of  the  existing  file  is a ^Z, the file  is
                   assumed to be a text file and the ^Z is overwritten:

                       dx .pas /ap:b:all.pas  => combine all "*.pas" files
                                                 into "all.pas".

                   NOTE: If you use /VLevel:Compare (see  section  5.2.6), a
                   compare of an appended file is currently not possible, so
                   the DOS VERIFY switch will be turned on as the "next best
                   thing".


         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 35





         Directory eXtended                                      Version 2.0



                   5.2.2  /MDir -- Create Missing Directories

                   The /MDir option is normally  on. It permits DX to create
                   directories  needed  to  place a file in a path that does
                   not currently  exist  (subject  to  verification  --  see
                   section 5.11). Turning this switch  off  will  prevent DX
                   from trying to create directories. This switch may take a
                   keyword  value  of   'Log'  (default)  or  'Nolog'  which
                   determines whether you get  an  informative  message when
                   directories are created:

                       dx /mdir-              => never create directories

                       dx /md:n               => create them quietly


                   5.2.3  /RDir -- Remove Empty Directory

                   The /RDir option, when combined  with  /DELete  or /MOve,
                   will  cause DX to attempt to  remove  a  directory  after
                   removing files. This  switch  may take a keyword value of
                   'Log'  (default) or 'Nolog' which determines whether  you
                   get an informative message when directories are removed:

                       dx \mydir/del/rd       => remove empty directories

                       dx a:/move:b: /rdir:n  => no informative message

                   DX will remove the current  directory, if it is empty, by
                   "backing" out of all empty  directories  --  you  will be
                   left in the first non-empty directory. Note that DX, like
                   DOS,  cannot  remove  a directory if a DOS 3.x (or above)
                   SUBST has been designated for this directory.


                   5.2.4  /TDate -- Set Target File's Date/Time

                   The /TDate switch may be used to set the date/time of the
                   target  file or files AFTER a /MOve  or  /COpy  has  been
                   performed -- this switch does NOT affect the source file;
                   use /FDate for  that.  All  the  formats  discussed under
                   section  3.5  may  be used here. The default action is to
                   copy  the date/time of the source file to the target:

                       dx /move:xx /td:1-may  => set target file's date to
                                                 May 1.

                       dx /mo:b:/td:@foo.bar  => set target file's date to
                                                 that of "foo.bar".







         Page 36                     5.2 /MDir -- Create Missing Directories





         Version 2.0                                      Directory eXtended



                   5.2.5  /TAttr -- Set Target File Attributes

                   The  /TAttr switch may be used to  set  the  target  file
                   attributes AFTER a  /MOve  or /COPy has been performed --
                   this switch does  NOT  affect the source file; use /FAttr
                   for that. The letters used are "A" for  archive,  "H" for
                   hidden, "N" for normal,  "R"  for  read-only, and "S" for
                   system.  A  special  form of /TAttr ("/TA:*")  is  on  by
                   default: it sets the target's attributes as follows: if a
                   file overwrite is  performed,  the "new" target is set to
                   the  "old" target's  attributes;  otherwise,  the  source
                   file's attributes are copied  to  the  target;  in either
                   case,  if  a  physical  copy  is  performed,  the archive
                   attribute is turned  on.  Any explicit use of /TAttr will
                   override this action. It is an error to use "+" or "-" on
                   /TAttr.

                   The  "@"  format  may  be  used to copy  attributes  from
                   another file (see section 3.5).

                       dx /cop:xxx /ta:r      => set read-only on copied
                                                 file.

                       dx /ta:*               => copy attributes as outlined
                                                 above (default).

                       dx /ta:n               => target set to normal.

                       dx /ta-                => don't touch the file
                                                 attributes (DOS sets "a").

                       dx /ta:r-a+            => ERROR: '+'/'-' illegal on
                                                 /TA.

                       dx /tattr:hrs          => set hidden, read-only, and
                                                 system; but not archive.

                       dx /ta:@sample         => set the target attributes
                                                 to "sample"s attributes.


                   5.2.6  /VLevel -- Verify Level

                   DX allows five choices in how  verification  is performed
                   during a copy-operation.  The /VLevel option controls how
                   DX manipulates the  DOS  VERIFY  setting  and  whether an
                   automatic  compare-after-copy should occur. For those  of
                   you  not  familiar  with  DOS  VERIFY,  DOS  maintains an
                   internal flag  to  determine  whether  a read-after-write
                   verify should be performed after every  disk  write. This
                   is established by the DOS command "VERIFY ON" or by using
                   DOS COPY's /V switch. Many users run with "VERIFY ON" all
                   the time and it is a good idea. Personally, I don't think
                   that level of verification on a copy is adequate -- being


         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 37





         Directory eXtended                                      Version 2.0



                   a skeptic, I prefer the separate compare  cycle following
                   the copy which causes data to be reread  from  the source
                   -- thus eliminating the  situation  where  the  data read
                   from the source was read in error before being written to
                   and verified  from the target.

                   Before we  get into the individual options, be aware that
                   if DX changes your DOS VERIFY setting, it  will  reset it
                   to whatever it previously was.

                   You can tell DX  to  use the DOS VERIFY switch by setting
                   "/VLevel:ON" or not to by setting "/VLevel:Off" or not to
                   touch it at all (leave it the way you have  "VERIFY" set)
                   by "/VLevel:Default". Another option is 'Ifcompare' which
                   says that if you  specify  /COMPare  with /COPy or /MOve,
                   turn the DOS verify off, otherwise leave it alone -- this
                   is the  released default. (The philosophy here is that if
                   you're doing a  compare,  there's no reason to use VERIFY
                   as well since VERIFY does slow down disk I/O.)

                   By far the safest  option  is  an automatic compare after
                   copy.  This  is  the  recommended  setting  to  make your
                   default  by placing  "/VL:Compare"  in  your  environment
                   string (see section 7). Setting  "/VL:C"  will  also turn
                   off the DOS VERIFY setting  for  the  same  reason stated
                   above.

                       dx.pas /copy:a: /vl:c  => copy and compare files to
                                                 a: -- DOS VERIFY is turned
                                                 off.

                       dx abc /move:a: /vl:on => use DOS VERIFY on move.

                       dx /copy:d: /comp /vl:if
                                              => turn off DOS VERIFY and
                                                 compare after copy.

                       dx /copy:d: /vl:off    => fastest copy -- without any
                                                 verification.



              5.3  /COMPare -- Comparing Files

              The /COMPare switch will cause  DX  to  compare  files matched
              with other files:

                  dx .pas /comp:a:         => compare all "*.pas" files with
                                              matching files on a:







         Page 38                                 5.2 /VLevel -- Verify Level





         Version 2.0                                      Directory eXtended



              This compare  is  significantly  faster  than  DOS's  COMP and
              reports the total number of  mismatched  bytes  --  it doesn't
              stop  at  10.  If the files differ in size, the compare is not
              performed and a message indicates that they differ in size. If
              the  last  character  in both files is a ^Z, DX will report an
              EOF found -- this tells you the files are probably text files.

                  dx \ibm*.com+command.com /full /comp:b:
                          => compare the version of DOS on two disks (note
                             the use of /Full since IBMBIO.COM and
                             IBMDOS.COM are not usually matched).

              It is possible to compare the CRC of file(s) within an ARChive
              with file(s) outside of the ARChive. (Remember to add a '\' to
              the archive name to cause DX to look inside it!) This  gives a
              fairly reliable indication that the files  within  and outside
              the ARChive are identical.  NOTE  that  while  the CRCs of the
              outside  files  are  computed, the CRC of the files within the
              ARChive are simply taken from  the ARChive header (this is why
              comparing files within a LiBRary is not supported):

                  dx source.arc\ /comp:b:\source
                                           => compare files in archives to
                                              corresponding files outside.

              DX will perform a DOS Disk Reset function if a compare follows
              a copy (either explicitly  with  /COMPare  or  implicitly with
              /VLevel:Compare)  thus flushing any DOS or supplemental  cache
              buffers.  If  this  were not done, the  compare  might  simply
              compare data in the  cache  buffers  and  not reread the disk.
              Note that some public domain  cache programs do not detect the
              DOS Disk Reset and do  not flush their cache -- compare-after-
              copy may not  be  able  to  reread  the disk with this type of
              cache program.



              5.4  /REName -- Renaming Files

              The /REName switch will cause DX to rename the matched files:

                  dx *.bak /ren:*.hld      => rename all "*.bak" files to
                                              "*.hld".

              DX now has the  ability  to  rename  files within ARChives and
              LiBRaries! In the past, it was necessary to extract the files,
              delete the files (or the  entire  ARC/LBR),  rename  them, and
              then  add  them  again -- a very slow process. DX now makes it
              painless:

                  dx myarc\old /ren:new    => rename the file "old" within
                                              "myarc.arc" (or "myarc.lbr")
                                              to "new".



         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 39





         Directory eXtended                                      Version 2.0



              NOTE that some  ARChive  utilities,  like  SEA's  original ARC
              program,  assume  that  the  ARChive  directory  is  always in
              alphabetical  order  and  may  have  trouble  if   the  rename
              operation distorts that order.

              NOTE that DX cannot  currently  rename  files within .LBR's if
              they are squeezed -- i.e. DX will refuse to rename files in an
              .LBR where a 'Q' is the second letter of the extension.

              NOTE that DX will add the archive attribute to the  archive or
              library but will otherwise leave all other file attributes and
              the DOS date and time the same.



              5.5  /GOBak -- Reverting to Previous Versions

              A  very  common  operation,  when  using   editors   and  word
              processors that create backup files,  is  to  decide  that you
              wish to discard all changes to a file and revert to a previous
              version. How many times have  you  found  yourself  deleting a
              file and renaming  it's  .BAK  file?  DX has the ability to do
              this for you  --  SAFELY!  You  can  even  specify  the backup
              extension:

                  dx goof.pas /gobak       => go back to "goof.bak".

                  dx spread.wkz /gob:.baq  => go back to "spread.baq".

              NOTE that if the backup file does not exist, DX will not touch
              the source file.



              5.6  /FDate -- Changing File Date/Time Stamps

              The /FDate switch may be used to set the date/time stamp  of a
              file  or files. All of the  date/time  forms  discussed  under
              section  3.5  may  be  used.  In addition, you may change  the
              date/time  stamps  of  files  within  ARChives.  (Setting  the
              date/time within an .LBR was considered but it  resulted  in a
              lot of potentially never used code since .LBR's do not use the
              DOS standard date/time format.)













         Page 40                               5.4 /REName -- Renaming Files





         Version 2.0                                      Directory eXtended



                  dx /fd:now               => set all matching files to the
                                              current date/time -- ala
                                              Unix's "touch".

                  dx /fd:tuesday:1500      => set all matching files to last
                                              Tuesday at 1500.

                  dx myarc\file.ext /fd:yesterday:3pm
                                           => set "file.ext" within "myarc"
                                              to yesterday 3pm.

                  dx /fdate:@file.ext      => set matching files to the
                                              date/time of "file.ext".



              5.7  /FAttr -- Changing File Attributes

              The /FAttr switch can be used  to  cause DX to change the file
              attributes  on  all  files that match. By default, DX will ask
              for  verification  on  each  file.  The value of  this  switch
              corresponds to a set of attributes to add to  or  remove  from
              the file. The  letters  used  are  "A"  for  archive,  "H" for
              hidden, "N" for normal, "R" for read-only, and "S" for system.
              If a letter  is specified (or followed by a "+") the attribute
              will  be  added;  if the letter  is  followed  by  a  "-"  the
              attribute will removed.

              The  special  case  "!" (as the first  character)  clears  all
              current  attributes.  If  the  "!"  is followed by  any  other
              letters,  those  become  the  only  new  attributes.  The file
              attribute switches take precedence so you must specify "/Full"
              or "/ATtr:HS" in order  to  change  hidden and/or system files
              (see section 3.3). "F" is not defined.

              The "@" format may  be  used  to  copy attributes from another
              file (see section 3.5).

              NOTE:  For  backward  compatibility,  the  "N"  is  treated as
              equivalent to the "!". This is true on /FAttr only;  the other
              attribute   switches  (/ATtr   and   /TAttr)   interpret   "N"
              differently. To avoid confusion, use "!" in all cases to clear
              current attributes.













         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 41





         Directory eXtended                                      Version 2.0



                  dx \dira/fa:a            => add the archive attribute to
                                              all files in "dira".

                  dx \dir\/fa:!a           => set archive only.

                  dx b:/fattr:r            => add read-only to all files in
                                              the default directory of B:.

                  dx b:/fattr:!r           => set only read-only.

                  dx /fa:!                 => clear all attributes.

                  dx /fa:hs                => add hidden and system.

                  dx /fa:!hs               => set hidden and system only.

                  dx \/at:!a/ffind/fa:a-   => turn the archive attribute off
                                              on any file that has it set.

                  dx ibm*.com/full/fa:!    => change the operating system
                                              files to normal.

                  dx /at:!a/cop:a:/fa:a-   => copy any files that have
                                              changed (archive bit set) to
                                              a: -- and then clear the
                                              archive bit if the copy
                                              succeeded!

                  dx xx /fa:@file.ext      => set attributes to those on
                                              "file.ext".



              5.8  /DELete -- Deleting Files

              The /DELete  option specifies that DX will delete all matching
              files.  By  default,  DX  will  ask  for  verification  before
              deleting each file. If any previous special processing failed,
              the delete will not be performed. Be careful, you can instruct
              DX to delete every file on your hard disk if you  combine this
              option with /FFind.

                  dx b:/del                => perform a verified delete on
                                              all files on the B: drive (DX
                                              will ask permission for each
                                              file individually).

                  dx \.bak+.tmp /ff/del/v- => delete all "*.bak" and "*.tmp"
                                              files on an entire disk
                                              without verification.

              The final statistics will  reflect  the  number of bytes freed
              (i.e.  the  number  of bytes that were allocated) by the files
              deleted and not their actual sizes.


         Page 42                               5.8 /DELete -- Deleting Files





         Version 2.0                                      Directory eXtended




              5.9  /VIew -- View FIles

              The simplest of all special processing  options,  /VIew allows
              you  the ability to call your  /LIst  processor  (see  section
              5.12) for all files that match your criteria  allowing  you to
              bring the full  power  of  DX's  file  matching  to  your list
              processor or editor which may  expect a single file or perhaps
              may understand DOS wildcards.

                  dx .pas /view /list:d:\list.com
                                           => use "d:\list.com" to
                                              selectively view all "*.pas"
                                              files.



              5.10  /RUn -- Immediate Command Execution

              The /RUn switch allows you to execute a  given  command string
              for  any  or  all  files  matched. The format of this  command
              string is similar to batch  file processing but simpler -- you
              can specify only a single line as the template:

                  dx .pas;badfile.pas /run:'arc a source $n'
                                           => place all "*.pas" files except
                                              "badfile.pas" into an archive
                                              by the name "source.arc".

              Single  or  double  quotes  may  delimit  the  string and  are
              required if spaces  or  special characters are embedded in the
              string.

              By default, DX  will  prompt  for  verification  including the
              command about to be executed (see section 5.11).

              If  you  are  not familiar with the concepts behind batch file
              generation and template variables, refer to section 6 for more
              information.



              5.11  Verifying Special Processing

              DX asks for permission before  doing  any  special processing.
              There   are  three  "levels"  of  verification.  Most   verify
              questions are controlled by the  /Verify switch which is on by
              default;  an  overwrite  question  from  /COPy  or   /MOve  is
              controlled by the  /OVerwrite  switch which is off by default;
              and the handling of read-only (and system files) is controlled
              by the /ROnly switch which is set to "ask" by default.





         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 43





         Directory eXtended                                      Version 2.0



                   5.11.1  Answering the Questions

                   When presented with a question during special processing,
                   you have a number of options available...

                        Option  Action
                        Y       Acknowledge a VERIFY question.
                        O       Acknowledge an OVERWRITE question.
                        R       Acknowledge a READ-ONLY question.
                        N       Negative acknowledgement.
                        G       Go!  This turns off the associated class  of
                                verification (see below).
                        D       View   the  directory  of  the  file(s)   in
                                question (may not be an archive or library).
                        L       Invoke the /LIst  processor to view the file
                                (see section 5.12).
                        T       Invoke  the  /LIst  processor  to  view  the
                                target file (i.e. on overwrite).
                        S       Shell  a  copy  of  the   command  processor
                                (COMMAND.COM); type EXIT to return.
                        I       If...  this  option   presents   a  sub-menu
                                allowing  you  to  choose  "if  newer",  "if
                                older",  "if  larger",   and   "if  smaller"
                                (OVERWRITE only).
                        ^C      Abort DX.
                        ?       Any other key presents a short menu.

                   Many  messages  displayed while asking  a  question  will
                   remain on the screen for a few seconds.  Hitting  any key
                   (especially the answer) will get you back to the question
                   quicker.

                   The reason that there are three  classes  of verification
                   is for safety -- too many people simply got in  the habit
                   of always answering "Y" without reading the question.

                   Answering "G" to any question will turn off that class of
                   question -- i.e. answering "G" to  an  overwrite question
                   is the same as having specified /OV on the command line.


                   5.11.2  /Verify -- Normal Verification

                   The /Verify  switch controls the action DX takes for most
                   verifications:

                       dx /v                  => ask verify questions
                                                 (default).

                       dx /v-                 => do not ask verify
                                                 questions.





         Page 44                                5.11 Answering the Questions





         Version 2.0                                      Directory eXtended



                   5.11.3  /OVerwrite -- Verifying File Overwrites

                   /OVerwrite  controls  the  action  DX takes for questions
                   involving file overwriting. Valid options are shown below
                   with their minimum abbreviations in capital letters:

                       /ov                    => do not ask overwrite
                                                 questions.

                       /ov:Yes                => same as "/ov".

                       /ov-                   => ask overwrite questions
                                                 (default).

                       /ov:Ask                => same as "/ov-".

                       /ov:Newer              => overwrite if source is
                                                 newer.

                       /ov:Older              => overwrite if source is
                                                 older.

                       /ov:Larger             => overwrite if source is
                                                 larger.

                       /ov:Smaller            => overwrite if source is
                                                 smaller.

                       /ov:Mustexist          => target must exist!

                       /ov:Append             => append to existing file.

                       /ov:NO                 => never overwrite a file.

                   "Ask",  "Append",  and  "Mustexist"  may be combined with
                   other  options   to   create   more   powerful  overwrite
                   conditions -- specifying "/ov:newer:larger" is illegal.

                       dx /mo:e: /ov:new:must => move files to E: -- if
                                                 newer and file exists.

                       dx /mov:b: /ov:l:ap:a  => copy files to B: -- if
                                                 larger, ask, then append.

                       dx file/cop:\save\ /v-/ov
                                              => copy "file" to another
                                                 subdirectory, without
                                                 verification and without
                                                 asking for overwrite
                                                 permission.

                   NOTE:   /OV:Append  is  equivalent  to  /APPEND  and   is
                   discussed in detail in section 5.2.1.



         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 45





         Directory eXtended                                      Version 2.0



                   If any options  are  specified  on  /OVerwrite,  "ask" is
                   turned off... but it  may  be turned back on by naming it
                   explicitly -- the following will overwrite files  if they
                   are newer with and without asking:

                       dx t* /copy:b: /ov:n   => copy "t*.*" to b:;
                                                 overwrite if newer

                       dx t* /copy:b: /ov:n:a => copy "t*.*" to b:; ask
                                                 whether to overwrite only
                                                 if newer

                       dx files /move:\save /ov:must
                                              => do not create a new file;
                                                 overwrite an existing file
                                                 only

                       dx myfile /mov:log /ov:mu:ap:a
                                              => ask permission to append
                                                 "myfile" to "log" only if
                                                 it exists; "myfile" will be
                                                 deleted after the append


                   5.11.4  /ROnly -- Read-only File Handling

                   /ROnly determines the action  to  take  when  deleting or
                   overwriting a read-only or system file:

                       /ro:Ask                => ask permission on read-only
                                                 files (default).

                       /ro:Never              => never touch a read-only
                                                 file.

                       /ro:Ignore             => ignore the read-only
                                                 attribute (BE CAREFUL!)

                   To convert a system  disk  to a normal disk (one that can
                   no longer be booted) without verification:

                       dx b:\ibm*.com+command.com /full /ro:i /del /v-
                                              =>













         Page 46                5.11 /OVerwrite -- Verifying File Overwrites





         Version 2.0                                      Directory eXtended



              5.12  /LIst - Defining the LIST Processor

              The  /LIst  switch  may  specify  a program to be used  during
              verification to display a file's  contents (via the "L" or "T"
              responses)  and for use with /VIew. It must  be  a  full  file
              specification including drive, path, filename,  and extension.
              This  switch is intended to be set  in  your  environment  and
              forgotten (see section 7). DX will load your program to be run
              with the name of the file as its only parameter:

                  dx /list:d:\list.com /del
                                           => use "d:\list.com" for viewing
                                              files.

              The /LIst switch may take a complete template (like /Batch and
              /RUn) to  allow more flexibility in calling a browsing utility
              (see section 6). For example, if your editor has a "read-only"
              switch, "/r", you might specify it as your  browse  utility as
              follows:

                  /list:'\path\myedit.com $s /r'
                                           => full filespec will be
                                              substituted for "$s".

              If no /LIst processor has been selected, DX uses COMMAND.COM's
              TYPE  command  to  copy  the  file to the screen... poor,  but
              effective.



              5.13  /DEfer -- Deferred Special Processing

              The /DEfer  option is primarily used internally. If the /FSize
              option and  any special processing options are selected at the
              same time, the  special  processing needs to be deferred until
              the decision can be made if enough space exists to proceed.

              This switch may be used manually if it is ever desired to view
              the  entire  directory  before  allowing special processing to
              commence.

              Another case where /DEfer may be useful is when /MOve or /COPy
              are being used with /FFind. If files are moved to  a directory
              that has not yet been scanned, they may be  matched  a  second
              time! This probably is not a desired effect. The use of /DEfer
              would allow  the  entire  directory  structure  to  be scanned
              before   any   files   are   moved  thereby  eliminating  that
              possibility.

              This switch also takes  a  value  to determine whether actions
              performed during deferred  special processing are displayed or
              not. A  value of 'Log' (default) or 'Nolog' determines whether
              an informative message is printed or not.



         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 47





         Directory eXtended                                      Version 2.0



                  dx /copy:a: /defer       => defer file copies until the
                                              end.

                  dx /del /de:nolog        => defer file deletions until the
                                              end; no messages when deleting
                                              files.



              5.14  /MSP -- Multi-pass Special Processing

              The /MSP switch may be used to allow DX to make several passes
              through special processing  --  asking  the  set  of questions
              about  the  selected  file(s)  again. This automatically turns
              /DEfer on.

                  dx *.bas /del/msp        => view the directory of all
                                              "*.bas" files; then make
                                              repeated passes querying
                                              whether to delete.




































         Page 48                  5.14 /MSP -- Multi-pass Special Processing





         Version 2.0                                      Directory eXtended





         6.0  Batch File Generation


         One of the more powerful features of DX is its ability  to generate
         batch files. This allows you to apply all of  DX's  file-  matching
         capabilities to any task you need to perform.

         The process consists of  supplying  a file which acts as a template
         to create the batch file. This file can reside on  disk,  it can be
         entered from the keyboard, it can be redirected from a file,  or it
         can  be  piped  from another program. Within this file, various two
         character "variables" get replaced by  the  information  about each
         file in the directory. The template file does not have  a specified
         size limit (see section 8.6 on Memory Utilization).

         In the following table, the examples show what would be substituted
         for each template variable if the file "C:\Utility\Misc\Myfile.Ext"
         were matched:

              $D   =>   the drive id ("C:").
              $F   =>   the filename only ("Myfile").
              $E   =>   the extension only (".Ext").
              $N   =>   the filename and extension ("Myfile.Ext").
              $P   =>   the file's path ("\Utility\Misc").
              $S   =>   the         entire        file         specification
                        ("C:\Utility\Misc\Myfile.Ext").

         Note  that  if  a  file  within  an  archive  or library were being
         matched, $P would contain the path  and  name of the archive and $n
         would be the name and extension  of  the file within the archive --
         this is of value in building batch files  to  add  or  delete files
         from archives or libraries.  These  variables  allow you to "build"
         filenames from separate parts of files.

             copy $n b:$f.hld            => template copies all matching
                                            files to the B: drive giving
                                            them an extension of ".HLD"

         In  building a batch file, most lines in  the  batch  template  are
         generated once for each file  processed. This allows you to execute
         more than one program for each file matched. It may be desirable to
         execute certain lines only  once  -- either at the beginning of the
         batch  file  or  at the end. DX will generate lines that start with
         "${" only once at the beginning and lines that start with "$}" only
         once at the end. Now, suppose we wanted to copy all  matching files
         to  B: and then compare them. (Note the use of a DOS pipe ('|')  to
         answer "COMP"'s "Compare more files ?" question.) We  also  want to
         issue a pause at the beginning and end and turn echo off:






         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 49





         Directory eXtended                                      Version 2.0



              ${echo off
              ${echo Insert archive disk in B: and strike any key ...
              ${pause
              copy $n b:
              echo n | comp $n b:
              $}echo Copy and compare complete ...
              $}pause

         NOTE that most template  variables  are  recognized anywhere on the
         line -- the exceptions are "${" and "$}" which are  only recognized
         if they are the first two characters on the line.

         Two more exceptions are '$(' and '$)' which also match only if they
         are the first two characters on a line. They are used  similarly to
         '${' and '$}' but '$(' and '$)' match the beginning and end of each
         directory  that   contains   files   that   match   the   directory
         specification (useful with /FFind).

         Often, it is necessary to  generate labels or unique numbers within
         batch files. This  is  accomplished  by  using  "$%"  and  "$#". DX
         maintains an internal counter and will generate unique numbers each
         time "$%" is referenced. "$#"  refers to the last number generated.
         Thus you could generate "GOTO"s within batch files:

              myprog $s
              if not errorlevel 1 goto L$%
              pause Error in MYPROG for file: $s
              :L$#

         NOTE that two of the above examples and  some  that  follow  can be
         done far more efficiently  via  DX's  Special  Processing switches.
         These examples pre-date DX's ability to do these functions but they
         were  left as is, rather than changed  to  made-up  program  names,
         because they are easier  to  relate  to  when visualizing how batch
         generation works.



              6.1  /Batch -- Specifying the Batch Template

              The /Batch switch turns batch processing on and tells DX where
              to  read  the  "template" file. If no  file  specification  is
              supplied, DOS Standard  Input  is read. This allows input from
              the keyboard, input redirection, or piping.

              The  /EXec-  switch  may be used to  inhibit  execution  until
              you've tested the command (see section 6.2).









         Page 50                                   6.0 Batch File Generation





         Version 2.0                                      Directory eXtended



              For simple one line batch  generations,  DOS's  "echo" command
              can be piped into DX. One line batch files are by far the most
              common -- the /RUn switch was added to make  them  easier.  In
              the long run, /RUn is slower than "echo"  because  it executes
              the command for each file  immediately  instead  of processing
              them as a "batch". Many of the examples here can be  done with
              "echo" or /RUn:

                  echo ren $n $f.hld | dx *xx.tmp/b
                                           => rename all files that end in
                                              "XX" with the extension ".TMP"
                                              to ".HLD".

                  dx *xx.tmp /run:'ren $n $f.hld'
                                           => same idea using /RUn.

              Notice,  here,  the  use of "$F" with a different extension to
              "build" a  filename.  The  "|"  character  between  the "echo"
              command and the call to DX is called a pipe. DOS will pass the
              output of "echo"  to  DX  via  a temporary disk file. For this
              reason, you cannot use this  method  if  the  currently logged
              disk is  full or write protected. Certain characters cannot be
              passed via "echo" or /RUn to DX because  they  are interpreted
              immediately  by  DOS. To overcome  this  restriction,  several
              other template variables are available:

                   $_   =>   carriage  return/line  feed   --   this  allows
                             multiple  line  generation  via  "echo"   (this
                             template variable cannot be used with /RUn).
                   $(   =>   '<' -- this allows input redirection within the
                             batch file.
                   $)   =>   '>'  --  this  allows output redirection within
                             the batch file overwriting an existing file.
                   $]   =>   '>>'  -- this allows output redirection  within
                             the batch file appending to an existing file.
                   $!   =>   '|'  --  this allows piping  within  the  batch
                             file.
                   $$   =>   '$' -- to actually generate a  dollar  sign two
                             successive dollar signs are needed.

              For example:

                  echo prog1 $n $_ prog2 $n $_ print $f.prn | dx *.in/b
                          => generate a batch file that runs the programs
                             "PROG1", "PROG2", and then prints an output
                             file -- for each file that matches "*.IN".










         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 51





         Directory eXtended                                      Version 2.0



              One caution has to  be  observed.  If  any commands within the
              batch file will read from DOS Standard In (like DOS's  COMP or
              EDLIN),  you cannot use this mechanism  unless  its  input  is
              redirected  or piped in. When the  program  attempts  to  read
              Standard In, there won't be anything left for it and it's time
              to re-boot. You can overcome  this by either supplying a batch
              template on disk and giving its name on the /Batch switch (the
              default extension is ".TPL"):

                  dx myfile.*/bat:sample   => read the batch template from
                                              the file "sample.tpl".

              or  by   generating  the  batch  file  and  not  executing  it
              immediately (see  the /EXec switch below), or by supplying the
              input  needed  to  that program. For instance,  in  the  above
              example  back  at  the beginning of this chapter we COPY'd and
              COMP'd a set of files. Input to COMP could be piped from ECHO:

                  echo copy $n b: $_ echo n $! comp $n b: | dx files/b
                          => generate two lines per matched file; the first
                             line copies the matched file to B:; the "$_"
                             creates a carriage return/line feed thus
                             separating the two lines; the second line
                             contains "$!" -- this will be expanded to "|"
                             and cause the "n" to be piped from ECHO to COMP
                             and, thus, will answer the question "Compare
                             more files?". (Note that you cannot use "|"
                             between ECHO and COMP or it will create a pipe
                             immediately, before DX ever sees the input!)

              If  any  error  conditions  occur,  batch  file  execution  is
              inhibited. This includes the  cases  where  no files match the
              file specification and no room exists for a transfer as tested
              by /FSize.

              Note that if you enter input directly from  the  keyboard, the
              input must be terminated by a line containing only a Control-Z
              and a Carriage Return.

              It is perfectly legitimate for a batch file generated by DX to
              call DX again and again ... you are only limited by the amount
              of memory you have. One thing to be careful of, however, if DX
              is called in a batch file being executed by  DX,  a  different
              output file must be specified  (see the discussion in the next
              section).  In addition, if DOS Standard  Input  or  Output  is
              redirected, the internal  call  to DX (and all programs within
              the batch file) will have the same redirection. It is  best in
              these cases, to specify all files explicitly.

              As another example  of  batch file generation, consider a case
              where  a   user  may  wish  to  copy  the  complete  directory
              structure, with  all subdirectories in place, from one disk to
              another (C: to D: in the following example):



         Page 52                 6.1 /Batch -- Specifying the Batch Template





         Version 2.0                                      Directory eXtended



                  echo $(dx c:$p /copy:d:$p\ /v- | dx c:\ /ff /b
                          => for every directory on c: (template starts with
                             '$('); build a batch file that calls DX to copy
                             that entire directory without verification
                             (unless the files already exist on D:) to the
                             D: disk -- creating the corresponding path if
                             necessary (note the trailing '\' in the target
                             path).



              6.2  /EXec -- Controlling Automatic Execution

              The /EXec switch determines whether execution  of  a generated
              batch file (via /Batch) should begin immediately.  The default
              for this switch is on. To turn it off, use:

                  dx myfiles.* /batch:template /ex-
                                           => build a batch file to process
                                              all "myfiles.*" but don't
                                              automatically execute it.

              Even when DX executes  the  batch  file  internally, it has to
              write (and then later, delete) a disk file -- this is not true
              of the /RUn  switch.  The  file  name  on  the  /Output switch
              determines where this disk  file  is  written.  If /EXec is on
              (the  default),  the  default  name  for  this  disk  file  is
              "$$$$DX.BAT". If an  environment variable, "TEMP=" is defined,
              this variable determines the drive to write this  file  to; if
              not,  this file is created on the default  drive  and  in  the
              default directory. If /EXec is turned off, DOS Standard Output
              becomes the default.  This  means the output can be redirected
              or piped. If you have a RAM disk, this file  can  be routed to
              that device to make processing faster. For example, suppose D:
              is a RAM disk:

                  dx /b:my_tpl/ex-/out:d:$$$$dx
                                           => build a batch file using the
                                              template in "my_tpl"; write it
                                              to "d:$$$$dx; but don't
                                              execute it.

                  set temp=d:              => define D: as the default drive
                                              for batch files.

              If  no  extension  is  given  on  this  file, ".BAT"  will  be
              supplied. The output file name can include a  drive  and path.
              Note that under DOS 2.x, if you use  immediate  execution, you
              cannot include a path  in  this  file specification; under DOS
              3.x  (and  above)  you can. Also note that in order to use the
              immediate  execution feature, you must have sufficient  system
              memory to hold DX  (about  88k),  another  copy of the command
              processor (COMMAND.COM), and the applications you want to run.



         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 53





         Directory eXtended                                      Version 2.0



              There may also be  reasons  to generate the batch file and not
              execute  it  immediately.  For  floppy-based  users,  internal
              execution will require the  current  disk  (or  a RAM disk) to
              have a copy of the command processor.

              Another reason applies  to  hard disk users. Let's examine the
              following scenario. Everyone knows that it's  a  good practice
              to backup their hard disk to floppies but how  should  one  do
              it? Doing a full  backup  can take hours -- especially if you,
              like me, want  two  complete  sets.  Ok, the solution is to do
              full backups once  every  couple of weeks and do "incremental"
              or "change" dumps  daily.  This is convenient because you only
              back  up  what  has been changed or newly created. The problem
              here is that you end up with a ton of incremental  dump disks.
              In addition, if disaster should strike, you have to go through
              all of those disks to reload everything!

              The solution? The  best  plan  is  to dump all files that have
              changed  since the last full dump. This  gives  four  sets  of
              disks (or two if you only make one set of backups) -- two full
              dump sets and two incremental dump sets. If you had a disaster
              you simply reload the two sets. The problem, though, is how do
              you get your favorite backup utility to do  this  little trick
              for you.  The answer is: before doing your incremental backup,
              use  DX to generate a batch file that  can  turn  the  archive
              attribute back on after dumping  the  files!  This  means that
              tomorrow when you run your backup again, the  same  files plus
              newly  changed  files  will  be  dumped  to  the same  set  of
              incremental backup diskettes!

              The following batch file performs  an  incremental  dump using
              DOS's BACKUP utility -- but  could easily work with any backup
              utility. It generates calls to DX to set the archive attribute
              back  on  for  all files that had the archive bit set prior to
              the dump. This batch file  is generated once and then executed
              after  each  call  to  BACKUP.  (The  batch  file is  executed
              externally via the "COMMAND/C" command. This  is  actually the
              same way that DX  executes  the  batch  file internally.) I am
              assuming, here, that your hard disk is drive C:

                   echo dx $s/fa:a/v- | dx c:\/at:!a/ff/b/ex-/o:$$dx
                   pause Ready to create primary Incremental Dump ...
                   backup c:\ a:/s/m
                   command/c $$dx
                   pause Ready to create secondary Incremental Dump ...
                   backup c:\ a:/s/m
                   command/c $$dx
                   del $$dx.bat








         Page 54                6.2 /EXec -- Controlling Automatic Execution





         Version 2.0                                      Directory eXtended



              Reading from the pipe again, this instructs DX  to  start with
              the  root  of  C:,  process  all files which have the  archive
              attribute set, search the entire directory tree,  and generate
              a batch file in the file "$$DX.BAT" without executing it. Each
              line in the batch file will call DX passing the  complete file
              specification  and  requesting  that  the archive attribute be
              set. DOS BACKUP is then called to dump all  changed  files  on
              the disk. The next step is to execute the batch  file created.
              When the process is repeated, the exact same set of files will
              be dumped because  their  archive  attributes  will  have been
              turned  back  on.  In addition, tomorrow, when  you  run  this
              again, all files dumped  today  plus  any newly modified files
              will be dumped. This means that the size of the dump will grow
              somewhat  from  day  to day -- when it gets too big, simply do
              another full dump and start from scratch.



              6.3  /CDir -- Automatic CHDIR Commands

              The above discussions of batch processing  (/Batch)  work well
              with  utilities  that  understand  path  specifications.  What
              happens when you want to  run utilities that do not understand
              paths? Use the /CDir  switch  to  instruct DX to automatically
              generate change directory commands ("CHDIR"  or  "CD")  in the
              batch file. At the  end  of the batch file, a change directory
              will be issued  back  to  the  directory in effect when DX was
              run:

                  dx \t*.pas /ffind /b:skel /cd
                                           => issue automatic change
                                              directories to process all
                                              "t*.pas" files on the disk.



              6.4  Preview a Batch File / Create a List of Files

              If you are not sure of how a batch file will turn out, preview
              it  before  actually  letting it run by adding "/EXec-" to the
              command  (see  section  6.2). This will cause the output to be
              written to DOS  Standard  Output (unless an /Output switch was
              used) which allows  you  to  view  the output. If you like it,
              simply  recall  the  line with F3 (or  whatever  your  command
              processor  requires)  and  erase the "/EX-" -- or modify it as
              needed.

              A  natural  consequence  of  batch  file  creation  is  simply
              creating  a list of files that may  be  processed  by  another
              program.  Use  a  template file of  simply  "$n"  or  "$s"  or
              whatever  your program expects (perhaps "file=$n; path=$p"  ?)
              and either pipe this to your program or  write  it  to  a file
              that  your  program  will read. Don't forget to use the "/EX-"
              switch to inhibit execution. Examples:


         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 55





         Directory eXtended                                      Version 2.0



                  echo $s | dx *.pas/b/ex- | myprog
                                           => create a file containing the
                                              complete filespec of all
                                              "*.pas" files and pipe it into
                                              "myprog".

                  echo drive=$d; path=$p; name=$n | dx files/b/ex-/o:d:xx
                                           => create one line per file and
                                              write it to "d:xx".



              6.5  Matching Directories in Batch Files

              Normally, DX will not match  directory  names  when generating
              batch files. In most cases, you would not want this to happen.

                  dx .../b/at:d            => match directory names as well
                                              as filenames.

                  dx .../b/at:!d           => match only directory names.



































         Page 56                     6.5 Matching Directories in Batch Files





         Version 2.0                                      Directory eXtended





         7.0  Customizing DX


         DX has a veritable plethora of switches and  options  available but
         it sure would be inconvenient to have to type them every  time. The
         convenience options -- like /Pause, /CAse, /FColor, and /12 -- just
         wouldn't seem  very convenient. You may set default switch settings
         for DX by  using  DOS "environment variables". Your DOS environment
         consists  of  strings  that  specify  things like where  to  reload
         COMMAND.COM  from (COMSPEC), your PATH, and  your  PROMPT  (if  you
         change it). DX will  recognize  two  strings  in the environment --
         "DX0" and "DX". The reason for  two  is that you will probably want
         to place one string in your AUTOEXEC.BAT file so that it will be in
         effect every time you start your computer. The other string is then
         available to use as a temporary in case you want to  use  a  set of
         parameters for a few calls to DX and then get rid of them.

         To set environment variables, you simply type:

              set dx0=/switch:value/switch:value...
                   - or -
              set dx=/switch:value/switch:value...

         DX first scans the "DX0" variable, then the "DX" variable, and then
         options on the command line. For this reason, "DX0" should  be used
         in your AUTOEXEC.BAT file  and  "DX"  should  be the temporary. For
         example, you might put the following in your AUTOEXEC.BAT (the line
         is  split  for  readability; it cannot be split in the AUTOEXEC.BAT
         file but it can be longer than 80 characters):

              set dx0=/he:1/p:d/ca:l/fc:black/bc:cyan/so:nes-...
                   /vl:c/li:d:\list.com/rd/arcdt

         This has the effect of setting the header level to 1  (no Copyright
         notice);  pausing  on directory boundaries;  selecting  lower  case
         output; setting colors to black on cyan; sort criteria of ascending
         name, ascending extension, and  then  descending  size;  the verify
         level is set to automatic compare after copy; the list processor is
         specified; and permission to remove empty directories and update an
         ARChive's date/time is given.

         To see what your environment variables are currently set to, simply
         type the DOS command "SET".

         You can  change these environment variables simply by retyping them
         and you can delete them by setting them to nothing:

              set dx=






         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 57





         Directory eXtended                                      Version 2.0



         NOTE: There is an undocumented "feature" in DOS of which you should
         be aware. If you type any spaces between the keyword and  the equal
         sign, they will be recorded with the keyword. This is not a problem
         to DX but if you are  not  consistent, you will create two versions
         of the same variable. For example:

             set dx =/Pause              => DOS sets the environment
                                            variable name to "DX ".

             set dx=/Wide                => DOS sets the environment
                                            variable name to "DX".

         will set two environment variables -- DX will only "see" the first.
         The rule is to be consistent.

         If you set a switch on or off in an  environment  variable and then
         decide you  don't  want  it  set for a specific call to DX, you can
         still change it temporarily. Environment  variables  only  change a
         switch's default:

             set dx0=/pause/exec-        => set /Pause on and /EXec off by
                                            default.

             dx/p-/ex                    => override default: don't pause
                                            and execute automatically.

         In addition, you can decide that for an individual call to  DX, all
         environment settings should be  ignored.  This  is done by starting
         the switch string on the command line with a  double  slash  ('//')
         optionally followed by actual switches. Examples:

             dx // a:                    => ignore all default switches.

             dx //w test.fil             => ignore all defaults; display
                                            wide output.

         Similarly, if the DX environment variable starts with '//', the DX0
         variable will be ignored. In actuality, any time a double  slash is
         encountered, all previous switches are discarded.

         Again,  the "TEMP=" environment variable may be  used  to  set  the
         default drive for batch files:

             set temp=d:                 => use drive "D:" as the default
                                            for generated batch files.

         NOTE that while DX  normally  allows switch values to be equated by
         either a ':' or an '=', most versions of DOS will not allow the use
         of more than one '=' on the SET directive:

             set dx0=/bcolor=yellow      => DOS ERROR!!

             set dx0=/bcolor:yellow      => no problem.



         Page 58                                          7.0 Customizing DX





         Version 2.0                                      Directory eXtended



         NOTE that the use  of  environment variables ties up a small amount
         of  DOS system memory. This is usually not a concern, but a copy of
         the environment  is allocated with each Terminate and Stay Resident
         (TSR) utility. For this reason, it is considered  good  practice to
         set your environment variables AFTER any TSR's are loaded.



















































         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 59





         Directory eXtended                                      Version 2.0





         8.0  Using DX



              8.1  Testing Termination Conditions

              DX will set  DOS's  ERRORLEVEL  variable  to  indicate various
              termination conditions. This can be helpful in a batch file to
              detect errors, determine if  a  drive  exists  or if any files
              match a given specification. (We  are now referring to a batch
              file containing a call to DX, not one that DX  generates.) The
              following values are returned under the following conditions:

                     0   =>  Normal termination, no problems.
                    10   =>  No files matched the specification.
                    12   =>  Directory path not found.
                    20   =>  No room for transfer (/FSize failure).
                    22   =>  Files did not compare.
                    30   =>  User abort: Terminated by a ^C or ^Break.
                    40   =>  A syntax error was detected.
                    50   =>  An  access  error.  This includes referencing a
                             disk that  does not exist and not being able to
                             open a file.
                   100   =>  An  internal runtime  error.  This  could  mean
                             running out of managed memory (see section 8.6)
                             or a program bug.

              As  an example, you might want to test  if  any  hidden  files
              exist in the current directory (note that DOS allows a maximum
              of  8-character  labels,  longer  labels  are  used  here  for
              illustration only):

                   dx /at:!h/out:nul
                   if errorlevel 10 goto no-hidden

              Notice the use of "/out:nul"  throwing  the  output  away. You
              might want to determine if a disk exists on a given system:

                   dx d:/out:nul
                   if errorlevel 50 goto no-d-disk

              Remember, when checking ERRORLEVEL, DOS considers the  test to
              be a greater than or equal to test. In the example above, when
              testing  ERRORLEVEL  against  the value 10, any  value  10  or
              greater will match. For  this  reason,  the  checks have to be
              done in reverse order. If you ever wanted to test all possible
              conditions:







         Page 60                                                8.0 Using DX





         Version 2.0                                      Directory eXtended



                   dx ...
                   if errorlevel 100 goto runtime-error
                   if errorlevel 50 goto access-error
                   if errorlevel 40 goto syntax-error
                   if errorlevel 30 goto control-c
                   if errorlevel 22 goto bad-compare
                   if errorlevel 20 goto no-room
                   if errorlevel 12 goto no-path
                   if errorlevel 10 goto no-files
                   rem No problems here.



              8.2  Compatibility and Performance Considerations

                   8.2.1  /VIDeo -- Controlling Direct Screen Access

                   DX has three options  to  determine  how screen output is
                   performed. By  far  the  fastest  output  is  produced by
                   writing directly  to your display memory. This opens up a
                   number of hardware and software  compatibility questions.
                   Hardware  compatibility because your display adapter  may
                   or  may  not   create  "snow"  when  directly  addressed;
                   software   compatibility   because   many   multi-tasking
                   programs and even some screen  drivers may not be able to
                   handle programs that directly address the screen.

                       dx /vid:Direct         => fastest I/O, no snow
                                                 prevention

                       dx /video:DIRECTSnow   => direct screen I/O with snow
                                                 prevention (default)

                       dx /vid:Bios           => use the system BIOS

                       dx /output             => output through DOS

                   NOTE: You  can select DOS Standard Output through the use
                   of the /Output switch (see  section  2.10)  --  this only
                   affects  the main display. Informative messages never  go
                   through DOS so you may have to use both options.


                   8.2.2  /NONstd -- Handling Non-standard Environments

                   DX makes one non-documented DOS function  call  to obtain
                   certain disk parameters without  incurring  a  free space
                   computation  which  can  be  very time-consuming on large
                   hard disks. This function request has historically caused
                   problems for  network users and users with less than 100%
                   compatible systems. This function call is no  longer used
                   on network drives but  at  least  one system, the Toshiba
                   3200 running Toshiba-DOS 3.2, hangs when this function is



         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 61





         Directory eXtended                                      Version 2.0



                   issued. A  "/NONstd" switch has been added to defeat this
                   request on such systems:

                       set dx0=.../nonstd     => inhibit the non-standard
                                                 DOS function request.


                   8.2.3  /NETaccess -- Handling Network Conflicts

                   The /NETaccess switch may be  used  to  determine  how DX
                   will handle  a  Local  Area  Network  conflict  ("Sharing
                   Violation" or "Lock Violation"):

                   The default  (/NET:Criterr)  puts  the  standard flashing
                   critical  error  message  at the top of  the  screen  and
                   allows you  to  select  'A'bort,  'R'etry,  'I'gnore,  or
                   'F'ail.  In  addition,  selecting  'W'ait switches to the
                   /NET:Wait mode.

                   Selecting /NET:Fail will not give a  flashing  message at
                   all, the critical error handler will automatically return
                   a fail to DOS resulting in an appropriate message.

                   Selecting  /NET:Wait, you'll get a flashing message  that
                   includes "waiting for network  access".  In  a  couple of
                   seconds, the message will disappear and DX  will initiate
                   a retry. When  the  message is blinking onscreen, you can
                   answer 'A'bort, 'I'gnore, or 'F'ail yourself (if  you get
                   tired of waiting).

                       /NETaccess:Criterr     => default error handler.

                       /NETacc:Fail           => automatic fail.

                       /NET:Wait              => wait for file.


                   8.2.4  Enhancing DOS Performance

                   DX runs best from a RAM Disk; loading from a hard disk is
                   slightly  slower;  and  loading  from  a  floppy  disk is
                   unreasonable.

                   How many software products do you have that recommend you
                   create  a  CONFIG.SYS  file  specifying FILES and BUFFERS
                   statements?  The  truth  is,  they  really  do   make  an
                   incredible difference and they don't  cost  very  much in
                   terms  of  memory.  DX and every program you run will run
                   faster with more  buffers  available and the default of 8
                   files  when  DOS  uses 5 only leaves 3 for your programs.
                   The CONFIG.SYS file must be present on the  boot  disk. I
                   recommend creating a CONFIG.SYS file  with  at  least the
                   following lines (you  may  already  have  one  that loads



         Page 62           8.2 /NONstd -- Handling Non-standard Environments





         Version 2.0                                      Directory eXtended



                   various drivers --  make  sure these lines are present as
                   well):

                        FILES=20
                        BUFFERS=24



              8.3  Using DX with PCED

              In case you  haven't  found  it  yet,  there  is  an excellent
              product called the Professional  Command  Editor  (PCED) which
              features, among other things,  command stacking (scrolling and
              editing of previous commands) and synonym processing.  The use
              of synonyms greatly enhances DX's usability. PCED is available
              from:

                   The Cove Software Group
                   P.O Box 1072
                   Columbia, Maryland  21044

              If  you  use  PCED,  please  check  the  file  DX.CED  on  the
              distribution disk for a fully-commented, sample initialization
              file with over xxx synonyms for using DX.



              8.4  /ALTernate Pattern Separators

              The  '+'  and  ';'  were  chosen  to  separate  inclusion  and
              exclusion  patterns because they are considered as  separators
              by DOS's COMMAND.COM. Some  command  processors,  most notably
              PCED  have  trouble  with  these  characters.  You  may choose
              alternate  separators with the /ALTernate switch. This  switch
              takes exactly two characters  where  the  first  is taken as a
              substitute for '+' and the second is a substitute for ';'. Any
              ASCII   character   may   be   used  (including  most  control
              characters) but the  selection  should be made carefully as it
              may conflict  with  other  uses  for  various  characters. You
              should avoid using characters  that  might  be  present within
              filenames. The following works well with PCED:

                  set dx0=/alt:%~          => use '%' instead of '+' and '~'
                                              instead of ';'

                  dx file.*%*test*~test.com
                                           => match "file.*" and "*test*"
                                              but not "test.com".








         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 63





         Directory eXtended                                      Version 2.0



              8.5  /INfo -- A Quick Reminder

              The decision was made not to include help  information  in the
              DX  program because of the size of the  program  now  and  the
              probability  that it will get bigger.  There  is,  however,  a
              small amount of help available with the /INfo  switch.  All of
              the switch names  are  shown in mixed upper/lower case showing
              you  the minimum abbreviation for each  switch.  This  is  not
              intended to be a complete help system, but it may serve to jog
              your memory.

                  /INfo                    => display switch names.



              8.6  Memory Utilization

              DX is set up to allocate  15k  of memory for internal usage --
              this  is  called  the  "heap"  and is used for sorting  files,
              searching directories, archives, and libraries  (with /FFind),
              storing a batch  template  file, and storing the various file-
              matching patterns. This  memory  is sufficient to use sort and
              file  find  together  on  a  30 Megabyte disk with about  1500
              files. DX  is usually very memory efficient and re-uses memory
              as soon as it's not needed any longer. One  option  that  will
              defeat that is the use of /DEfer (or /FSize which uses /DEfer)
              --  this  causes  DX to keep every matching filename until the
              end of it's run. If you are matching  "*.*"  on  a  large disk
              combined  with  /FFind...  you  may  run out of memory. If  DX
              should run out of  memory,  it  will  inform you. You probably
              will never see  this  message  but,  if  you  do,  the DX_HEAP
              program included on  the  DX distribution diskette may be used
              to  inspect  and  change the amount of memory allocated to the
              heap.

              DX_HEAP will search the current directory and DOS path to find
              DX.EXE -- or you  may  supply the full file specification as a
              command-line  parameter. The second command-line parameter  to
              DX_HEAP  may be the size to set the heap to -- or DX_HEAP will
              prompt  you  for  the value. (Actually, DX_HEAP may be used to
              modify the heap in  any  program  created with Borland's Turbo
              Pascal v5.0.)

              You  may want to create a "large-memory"  version  of  DX  for
              those  tasks that need it (by large-memory,  40k  of  heap  is
              probably more than you would ever need!).

              The next question, then,  is  why  allocate  only 15k? Why not
              make use of  all  of  my  system's memory? The main reason for
              this is that DX has  many options for executing other programs
              from within it. In order for these programs to  have  as  much
              memory as possible, the  size  of  DX  is kept small. Another,
              less important reason, is that  limiting  memory  protects the
              transient portion of COMMAND.COM  from  being  over-written --


         Page 64                               8.5 /INfo -- A Quick Reminder





         Version 2.0                                      Directory eXtended



              which  avoids  the  reload  delay  (and  the  annoying "Insert
              COMMAND.COM disk" message on a floppy-based system).

              NOTE   that  when  DX  performs  special  processing   (/COPy,
              /COMPare, /CRC, etc.),  it  quite often needs larger blocks of
              memory  --  these  are requested of  DOS  for  only  the  time
              required  and  then   returned.  This  also  maximizes  memory
              available  for  other   programs.  (Previous  versions  of  DX
              reserved an internal 64k buffer for these operations.)



              8.7  Aborting and Escaping

              At any time during  DX's  execution, you may type ^C or ^Break
              to  abort the program. In addition,  hitting  the  ESCape  key
              while the directory is being  displaying will cause DX to skip
              to  the statistics portion of the output  as  if  the  /Totals
              switch had been used (hitting  ESCape a second time will cause
              DX to skip to global  statistics as if /Totals:Global had been
              used).

              A ^S may  be  typed  at  any  time and will force an immediate
              pause.

              NOTE  that  if  you have typed ahead, DX will not "see" any of
              these characters... a ^Break will be your only option.



              8.8  /SWatch -- Execution Time and ERRORLEVEL

              The /SWatch switch will cause DX to display  the  elapsed time
              and the DOS ERRORLEVEL set on termination:

                  dx /sw                   => display the elapsed time and
                                              DOS ERRORLEVEL.



















         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 65





         Directory eXtended                                      Version 2.0





         Appendix A.  Quick Reference


         Formatting and Preference Options:
             /Pause             => Pause when screen full.
             /Pause:Directory   => Pause on directory boundaries as well.
             /Wide              => List names only across the screen.
             /SINGle            => One file per line with extra info.
             /Totals            => Sub and Grand totals only.
             /Totals:Global     => Grand totals only.
             /Totals:Subtotals  => Subtotals only.
             /Header:n          => Header level n: 0 .. 2.
             /STats:n           => Statistics level n: 0 .. 4.
             /STats:f:h         => Statistic levels for floppy:hard disks.
             /CAse:option       => Select Upper/Lower/Initial(default) caps.
             /12                => Select 12 hour time format.
             /Output            => Output to DOS Standard Output allowing
                                   redirection and piping.
             /Output:filespec   => Output to filespec (batch processing
                                   default extension is ".BAT").
             /PRint:printer     => Format for printer (sets /Output:PRN).
             /PRMode:mode       => Print mode: Normal, Compressed, or Tiny.
             /PRMArg:left:right => Set left or left and right margins.
             /BColor:color      => Background color: Black, BLUe, Green,
                                   Cyan, Red, Magenta, BRown, Lgray, GRAy,
                                   LBlue, LGReen, LCyan, LRed, LMagenta,
                                   Yellow, White.
             /FColor:color      => Foreground color (as above).
             /DColor:color      => Directory  color (as above).
             /ANSI              => Color support through xANSI.SYS
             /Quiet             => Inhibit informative messages.
             /NLines:n          => Set screen or page height.
             /ALign             => Align extensions.
             /ANgle             => Use "<DIR>" instead of "--dir--".
             /ARCDT:Log/Nolog   => Validate ARC/LBR timestamps.
             /ALTernate:xy      => Use 'x' for '+' and 'y' for ';'.

         File Matching Options:
             /Full              => Display all files.
             /ATtr:!fadhnrs+-   => Select file attributes.
             /Command           => Match .COM/.EXE/.BAT files.
             /SIze:low:high     => Range of size (inclusive).
             /SIze:-low:high    => Range of size (exclusive).
             /SINce:datetime    => Start of date/time range.
             /BEfore:datetime   => End of date/time range.
             /DOTstar-          => Turn automatic ".*" addition off.








         Page 66                                         0.0 Quick Reference





         Version 2.0                                      Directory eXtended



         Utility Options:
             /SOrt:nesdac*-     => Sort files according to "NESDTAC*-".
             /FFind             => Search multiple directories.
             /FFind:option      => Search: All/Directory/ARchive/Library.
             /FSize:d           => Test for room to transfer to drive "d".
             /FSize:nnnn        => Test for room needed to transfer to a
                                   drive with cluster size "nnnn".
             /FSBlink           => Cause /FSize message to blink.
             /Ldir              => List directory names only.
             /CKsum             => Checksum files.
             /CRC               => Cyclic Redundancy Checks.
             /SWatch            => Show runtime and DOS ERRORLEVEL.
             /INfo              => Report switch names and abbreviations.

         Special Processing:
             /MOve:target       => Move files.
             /COPy:target       => Copy files.
             /APpend:target     => Append files.
             /COMPare:target    => Compare files.
             /REName:target     => Rename files.
             /GOBak:.ext        => Go back to backup file.
             /FDate:datetime    => Set a file's date/time.
             /FAttr:!ahnrs+-    => Change file attributes.
             /TDate:datetime    => Set target file's date/time.
             /TAttr:*!ahnrs     => Set target file's attributes.
             /DELete            => Delete files.
             /RUn:'command'     => Single-line batch-like commands.
             /VIew              => View files.
             /Verify-           => Turn off special processing verification.
             /OVerwrite:option  => Overwrite options: Yes, NO, Ask, Newer,
                                   Older, Larger, Smaller, Mustexist,
                                   APPend.
             /ROnly:option      => Read-only handling: Ask, Never, Ignore.
             /LIst:filespec     => List utility for /Verify and /VIew.
             /VLevel:option     => Verify level: Default, Compare,
                                   Ifcompare, Off, ON.
             /RDir:Log/Nolog    => Remove empty directories.
             /MDir:Log/Nolog    => Create missing directories.
             /DEfer:Log/Nolog   => Force deferred special processing.
             /MSP               => Multi-pass Special Processing.

         Compatibility Options:
             /VIDeo:mode        => Screen I/O: Direct, DIRECTSnow, or Bios.
             /NONSTD            => Prevent non-documented DOS function call.
             /NETaccess:mode    => Action to take on network conflict:
                                   Criterr, Wait, Fail

         Batch File Generation:
             /Batch             => Read template from DOS Standard Input
                                   allowing redirection and piping.
             /Batch:filespec    => Read template from filespec (the default
                                   extension is ".TPL").
             /EXec-             => Inhibit automatic execution.
             /CDir              => Generate CHDIR commands.


         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 67





         Directory eXtended                                      Version 2.0



         Template File Variables (/Batch and /RUn):
             $D                 => Drive id (A:).
             $F                 => Filename only (FILE).
             $E                 => Extension only (.EXT).
             $N                 => Filename and extension (FILE.EXT).
             $P                 => File's path (\SUB1\MISC).
             $S                 => Full spec (A:\SUB1\MISC\FILE.EXT).
             $_                 => New Line (Carriage Return/Line Feed).
             $(                 => "<" -- input redirection.
             $)                 => ">" -- output redirection (overwrite).
             $]                 => ">>" -- output redirection (append).
             $!                 => "|" -- piping.
             $$                 => "$" -- to actually output a "$".
             $%                 => Unique number.
             $#                 => Last unique number.

         Template File Variables -- Beginning of Line Only (/Batch):
             ${                 => Generate as batch file header only.
             $}                 => Generate as batch file trailer only.
             $(                 => Beginning of directory only.
             $)                 => End of directory only.

         Remember  that  file  specifications  may contain multiple patterns
         separated  by  '+'  or  spaces  to  include  multiple patterns  and
         separated by ';' to exclude patterns:

                         Include.fil+Include.fil;Exclude.fil

         Also remember that  patterns  may have characters between and after
         the '*'s and any number of '*'s:

                    *TEST*.*X*           F*TE*LF            F*?*X

         The following may be typed anytime:
             ^C or ^Break       => Abort DX immediately.
             ESC                => Skip to statistics.
             ^S                 => Force a pause.

         Use a comma at the end of a command for continuation.

















         Page 68                                         0.0 Quick Reference





         Version 2.0                                      Directory eXtended





         Appendix B.  Registration Form


         If  you  find  DX useful, a  donation  will  be  appreciated.  This
         donation  is  the  only incentive to continue  to  produce  quality
         software at affordable prices. Please support the ShareWare concept
         and send a minimum donation of $25 ($35 includes a printed manual).
         Also, whether you use DX or  not,  please pass DX.EXE and DX.DOC on
         to as many people or  bulletin boards as possible. Dealer inquiries
         welcome. Corporate licenses available. ECONO-SOFT offers a  30 day,
         no questions asked, money-back guarantee.

         Name:      __________________________________  Date: ____/____/____

         Address:   ________________________________________________________

         City:      _________________________  State: _____  Zip: __________

         Version:   ________  My Copy From: ________________________________

         Computer:  _________________  DOS Version: PC-DOS ____; MS-DOS ____

         E-Mail:    _______________               Manual preference: _______
                  (Printed ($35), Postscript, Epson FX80, FX85, simple text)

         I am enclosing $______ ($25 minimum; $35 includes a printed manual)
         to help support DX. Texas residents please add 8% sales tax. Please
         send my personally  registered  copy  of  DX. Please add my name to
         your mailing list for information on updates and other products.

         Please charge my credit card as indicated:

         Master Card or Visa # _____________________________ Exp ___/___/___

         Signature  ________________________________________________________



         Please address all correspondence to:

                 ECONO-SOFT                          CompuServe [73267,1664]
                 P.O. Box 181030                          GEnie [ROB.BLAINE]
                 Austin, TX 78718-1030            800-367-7590, 512-832-1675

         Please use the back to give any comments you can think of about DX.
         What  do you think its best/worst features are?  Do  you  have  any
         suggestions? Complaints? (use the back if necessary)







         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 69





         Directory eXtended                                      Version 2.0



























































         Page 70                                       0.0 Registration Form





         Version 2.0                                      Directory eXtended









                                   Index


                /12 12                       /LIst 43, 44, 47
                /ALign 16                    /MDir 36
                /ALTernate 63                /MOve 29, 32, 33, 36,
                /ANgle 16                       37, 38, 47
                /ANSI 13                     /MSP 48
                /APpend 35                   /NETaccess 62
                .ARC See:                    /NLines 16
                   ARChive/LiBRary           /NONstd 61
                /ARCDT 26                    /Output 9, 13, 14, 53,
                /ATtr 6, 21, 41                 55
                .BAK files 40                /OVerwrite 35, 43, 45
                /Batch 9, 50, 53, 55         /Pause 9, 65
                /BColor 13                   /PRint 14
                /BEfore 23                   /PRMArg 15
                ^Break 65                    /PRMode 15
                ^C 65                        /Quiet 16
                /CAse 12                     /RDir 36
                /CDir 55                     /REName 32, 39
                /CKsum 30                    /ROnly 43, 46
                /Command 18                  /RUn 32, 43, 51, 53
                /COMPare 32, 38              ^S 65
                /COPy 29, 32, 33, 37,        /SINce 23
                   38, 47                    /SINGle 10
                /COpy 35, 36                 /SIze 23
                /CRC 30                      /SOrt 27
                /DColor 13                   /STats 11, 20
                /DEfer 32, 47, 48            /SWatch 65
                /DELete 32, 42               /TAttr 37
                /DOTstar 17, 18, 32          /TDate 24, 36
                /EXec 50, 53, 55             /Totals 10, 65
                /FAttr 32, 41                /Verify 43, 44
                /FColor 13                   /Video 61
                /FDate 24, 32, 40            /VIew 32, 43, 47
                /FFind 9, 10, 11, 28,        /VLevel 34, 35, 37
                   32, 35, 47, 50            /Wide 9
                /FSBlink 15, 29
                /FSize 15, 29, 32, 47,       A
                   52                        abort 65
                /Full 20, 41                 All 28
                /GOBak 32, 40                ANSI 13
                /HEader 11                   Append 45
                /INfo 64                     append files 35
                .LBR See:                    ARC See: ARChive/LiBRary
                   ARChive/LiBRary           ARchive 28
                /Ldir 9, 11, 29


         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 71





         Directory eXtended                                      Version 2.0



                archive See:                    append ".*" 17
                   ARChive/LiBRary              ARChive/LiBRary
                archive attribute See:          date/time 26
                   file attributes              colors 12, 13
                ARChive/LiBRary                 compatibility 61, 62
                   comparing members 30,        create missing
                   39                           directories 36
                   date/time 26, 40             display format 9, 10,
                   directory 5, 7, 25           16
                   renaming members 39          environment variables
                   searching 28, 29             57
                   sorting 27                   header lines 11
                   template variables 49        memory utilization 64
                Ask 45, 46                      number of lines 16
                AUTOEXEC.BAT 57                 pattern separators 63
                                                pausing the display 9
                B                               print margins 15
                BAKup files 40                  print mode 15
                batch 43, 50, 53, 55, 60        remove empty
                   directories 56               directories 36
                   preview 55                   sorting 27
                batch generation 49             statistics lines 11
                Bios 61                         upper/lower case 12
                                                verify level 37
                C                               verify options 43,
                CD 55                           44, 45, 46
                CHDIR 55                        video handling 61
                checksum 30                  Cyclic Redundancy Check
                cluster size See: disk          30
                   allocation
                colors 12                    D
                   background 13             date/time
                   directory 13                 12-hour format 12
                   foreground 13                ARChive/LiBRary 26
                   highlight 13                 current 24
                column sorting 27               display 5, 10
                Compare 38                      indirect reference
                compare files 38                24, 36, 40
                compatibility                   matching files 23
                   disk drives 61               setting file 40
                   network 62                   setting target 36
                   video 61                     sorting 27
                Compressed 15                   specification 23
                CONFIG.SYS 62                Default 38
                configuration See:           defaults See:
                   customization                customization
                copy files 33                defer special processing
                create missing                  47
                   directories 36            deleting files 42
                Criterr 62                   DIR 5, 16
                critical error 62            Direct 61
                customization                Directory 9, 28
                   12-hour format 12         directory attribute See:
                   /LIst processor 47           file attributes


         Page 72                                                   0.0 Index





         Version 2.0                                      Directory eXtended



                DIRECTSnow 61                L
                disk allocation 5, 10,       Larger 45
                   11, 29, 35, 42            LBR See: ARChive/LiBRary
                display 5                    Library 28
                display format 5, 9, 10,     library See:
                   11, 16, 29                   ARChive/LiBRary
                DOS VERIFY See: VERIFY       LIST.COM 47
                                             list directories 29
                E                            list of files 55
                EGA 16                       list processor 47
                environment variables 57     lock violation 62
                Epson 14                     Log 26, 36, 47
                ERRORLEVEL 60, 65            Lower 12
                                             lower-case 12
                F
                Fail 62                      M
                feature summary 2            memory 64
                file attributes              move files 33
                   batch generation 56       multi-pass special
                   display format 5, 6,         processing 48
                   10, 11                    Mustexist 45
                   hidden directories
                   22, 28                    N
                   indirect reference        network conflicts 62
                   37, 41                    Never 46
                   matching 20, 21           Newer 45
                   read-only handling        NO 45
                   44, 46                    Nolog 26, 36, 47
                   setting file 41           Normal 15
                   setting target 37         normal attribute See:
                   sorting 27                   file attributes
                file find 28
                file-matching 5, 6, 7,       O
                   18, 23, 28, 29, 56        Off 10, 38
                file size 29                 Older 45
                file size range 23           ON 38
                                             overwriting 45
                G
                Global 10                    P
                                             pattern matching See:
                H                               file-matching
                help 64                      pattern replacement 33
                hidden attribute See:        PCED 63
                   file attributes           performance 62
                                             piping 14, 49, 50, 51,
                I                               53, 54
                Ibm 14                       print
                Ifcompare 38                    compressed 15
                Ignore 46                       formatting 14
                Initial 12                      margins 15
                initial caps 12                 mode 15
                installation See:               number of lines 16
                   customization                tiny 15



         Copyright (C) 1985-1989, Robert K. Blaine/ECONO-SOFT        Page 73





         Directory eXtended                                      Version 2.0



                R                            T
                read-only attribute See:     target 32, 33, 35, 36
                   file attributes           target attributes 37
                read-only handling 46        target date 36
                redirection 14, 49, 50,      template 43, 47, 49, 50,
                   51, 52, 53                   52, 55
                remove empty directories     template variables 49,
                   36                           51
                rename files 39              time See: date/time
                running files 43                execution 65
                                             Tiny 15
                S
                Screen 9                     U
                screen size 16               Upper 12
                searching 28                 upper-case 12
                setting date/time 40
                setting file attributes      V
                   41                        verification 37, 44
                ShareWare 4                  VERIFY 35, 37
                sharing violation 62         verify options 43
                size range 23                verify questions 44
                Smaller 45                   VGA 16
                sorting 27                   viewing files 43
                special processing 32,
                   47, 48                    W
                   defer 47                  Wait 62
                   multi-pass 48
                statistics 65                Y
                Subtotals 10                 Yes 45
                system attribute See:
                   file attributes

























         Page 74                                                   0.0 Index



```
{% endraw %}

## FILE1605.TXT

{% raw %}
```
Disk No: 1605                                                           
Disk Title: Directory eXtended                                          
PC-SIG Version: S1                                                      
                                                                        
Program Title: Directory eXtended                                       
Author Version: 2.0                                                    
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
Give yourself more power and freedom in managing your files operating   
totally from the DOS command line.                                      
                                                                        
DX allows you to easily select one file or multiple files, including    
hidden and system files if desired, which you may then copy, move,      
delete, rename, compare or append with another file.  You can change a  
file's attribute or its date, and check if a group of files can fit on  
a disk.                                                                 
                                                                        
Normal DOS files, as well as those within an archive (ARC) file,        
can be directly sorted by name, extension, size, date, or file          
attributes.  DX can perform a CRC or checksum test on your files to     
detect defects or alterations in files.  DX commands can be             
incorporated into batch files.                                          
                                                                        
File Descriptions:                                                      
DX       CED  Sample PCED file for use with DX.                         
DX       DOC  Documentation.                                            
DX       EXE  Main program.                                             
DX_HEAP  EXE  Program file.                                             
DX_QUICK REF  Quick reference guide.                                    
READ     ME   Program introduction.                                     
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk #1605  Directory eXtended >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start Directory eXtended, type:  DX (press enter)                    ║
║                                                                         ║
║ To print documentation, type: COPY DX.DOC PRN (press enter)             ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1605

     Volume in drive A has no label
     Directory of A:\

    DX       CED      7690   2-01-89   2:09a
    DX       DOC    202739   2-01-89   2:09a
    DX       EXE     68320   2-01-89   2:09a
    DX_HEAP  EXE      9296   2-01-89   2:09a
    DX_QUICK REF      8436   2-01-89   2:09a
    FILE1605 TXT      2812  10-18-89   7:12p
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       542  10-18-89   7:15p
    READ     ME       8895   2-01-89   2:09a
            9 file(s)     308768 bytes
                            9216 bytes free
