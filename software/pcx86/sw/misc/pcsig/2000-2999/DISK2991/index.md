---
layout: page
title: "PC-SIG Diskette Library (Disk #2991)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2991/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2991"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## LHA.DOC

{% raw %}
```
------------------------------------------------------------------------
                       Manual for LHA Version 2.13

                                                 Ver 2.13  July 20, 1991
------------------------------------------------------------------------
                             NIFTY-Serve  SDI00506    HARUYASU YOSHIZAKI
                             ASCII-pcs    pcs02846    Yoshi
                             PC-VAN       FEM12376
------------------------------------------------------------------------

     This is a manual for the public release of LHA.EXE.v 2.13. LHA
     is an upward compatible and improved version of LH Ver 1.13C.
     Since Microsoft's DOS 5.0 now has an interior command LH (for
     Load High), the name has been changed from LH.EXE to LHA.EXE.


0.  To begin with
-----------------

     This is a revised version of LH113c.EXE, an archiver which was
     rather slow in execution but tight in compression rate.  I am
     grateful for the support of LH113c's users both in Japan where
     the .LZH file is a standard archived file name and in other
     countries where .LZH has become well-known and used often.  I
     have been  working on this new version for two years since the
     last release of LH113c.EXE.  I am now glad to announce the re-
     lease of LHA. I am constantly upgrading upon user's report on
     bugs and on new requests.


     LHA differs from LH113c:
     -----------------------

     LHA is better than LH Ver 1.13 in compression rate, especially
     with large files.  There are a few exceptions if using rather
     small files.  (Under 1 Kb.)  LHA is faster than LH113c in de-
     compressing, with new static Huffman coding, compared with the
     older dynamic Huffman.  The speed of compression is not as fast
     as I was expecting.  <Sigh>

     LHA needs more memory than LH113c did.  If there is not enough
     for LHA to work, it may have looser compression rate, although
     it tries to continue execution.  LHA is upward compatible with
     LH113c.  But LH113c is not completely compatible with the LHA
     format.  Please switch from LH113c to LHA as soon as you can.
     With the "/o" option, you can make archives dearchivable by
     LHarc Ver 1.xx - otherwise LHarc will complain for "unknown
     method".

     LHA is distributed as a free program with copyright reserved.
     There is no restriction for the use within private corporations
     or the use for governmental agencies.  Users must be respon-
     sible for the use of facilities of the software, especially of
     the auto ! batch file (Often called a "Telop file).  The soft-
     ware is distributed as is.  I am not liable for any damage
     caused by the use of this software.  For commercial use, please
     refer to our distribution policy.

     You can now proceed to read the complete description of com-
     mands and options.  However, if you are not familiar with what
     an archiver is, please refer to the introductory note LHA.HLP
     written especially for LHA.EXE by late Irvin Hoff.


1.  Usage
---------

  A.  General Format:
  ==================

    LHA <command> [/<option> ARC [[DIR\] [FILE]...]...  [-+012|WDIR]...]


    <command>: if one is not used, you get the help screen or a list of
               FILE(s).
    <option>:  you may supply one or more of options explained below.
               (needs an  /  or  -  in front, to designate an option)

    ARC:       archive name.
    DIR:       base directory name.
    FILE:      File name or full pathname if specified.
    WDIR:      Working Directory name.


  B.  <command>
  =============

   a (Add) compress and add to an archive.

     Compress and Add files specified to an archive.  If the named
     archive does not exist, then create one with the name.  LHA
     overwrites any file in the archive by the given file name with
     'a' command.  Compare with 'u' command.

     The commands 'a' and 'm' are used to make an archive.

     < Example 1 >  LHA a EX *.EXE

     LHA makes an archive named EX.LZH from all the files with ex-
     tension 'EXE'.  Extension .LZH is default.


   u (Update) Compress and Update.

     Compress and add files specified to an archive as command 'a'.
     If LHA detects a file with the name same as the one in the
     archive, then LHA selects the new one to add to archive, by
     comparing the time stamp of each.

     < Example 2 > LHA u EX *.C

     All the FILE(s) with extension '.C' are archived in EX.LZH.
     If you already have an SX.LZH containing a FILE with the same
     name, only the one with newer time stamp is archived.


   m (Move)

     Compress and add to an archive as 'u' command with checking
     time stamps.  The difference is that LHA deletes all the files
     moved into the archive.

     < Example 3 > LHA m EX *.C

     does  the same as

                  LHA u EX *.C
                  del *.C

     Watch the second line.  With the /C option, LHA removes all the
     FILE(s) into the ARChive ignoring time stamps.  You may lose
     the one with the older time stamp.


   f (Freshen)

     LHA looks for a FILE with the same name as the FILE in the
     archive.  If it finds one with a newer time stamp, LHA
     rewrites the one in the archive.  'LHA f /c ARC ' will not
     check the time stamp.

     < Example 4 > LHA f EX LHA.DOC

     You have LHA.DOC compressed and archived in EX.LZH.  You get a
     new LHA.DOC, then you replace the one in the ARChive, also.


   d (Delete)

     LHA deletes a file (or files) in the archive.
    
     < Example 5 > LHA d ex lha.doc

     LHA deletes lha.doc in the ARChive ex.LZH.

   e (Extract)

     LHA extracts FILE(s) from the archive with decompressing.  If
     LHA finds a FILE in the archive with a newer FILE on the same
     DIR and having the same name, it skips that FILE(s).  LHA
     extracts FILE(s) from ARChives made by L113C, namely, those
     with the compression ids -lzs-, -lz4-, -lz5-.

     <Example 6 > LHA e EX 

     Extracts all the FILE(s) in the archive 'EX.LZH'.

     < Example 7 > LHA e EX *.COM

     LHA extracts all the files with extension .COM from 'EX.LZH'.


  x (eXtract) LHA eXtracts compressed FILE with pathnames.

     If LHA can not find any path, then it will create directories.
     FILE(s) must be archived with full-pathnames.  LHA restores the
     entire directory structure.  'LHA e /x1m1 ARC' does the same.

     < EXample 8 > LHA x EX

     Suppose '\BIN\CG86.EXE' were among the FILE(s) in 'EX.LZH'.  LHA
     creates directory '\BIN' if necessary, and extracts 'CG86.EXE'
     there.


   p (Print) Print FILE on standard out.

     LHA prints FILE decompressing from ARC to standard output.

     < Example 9 >  LHA  p ex lha.doc

     LHA extracts 'LHA.DOC' from 'EX.LZH' and displays it on your
     terminal.

     < Example 10 > LHA p EX LHA.DOC > prn

     LHA extracts 'LHA.DOC' from 'EX.LZH' and prints it out from
     your printer.


   l (List)

     LHA lists FILE names in the archive on a line.  A FILE with
     pathname will have a mark '+' on the head of the line.  'LHA
     l /x ARC' shows full-pathnames of FILE(s) in ARC, and in 2 lines
     per FILE.  You need not type 'l' to have the list.

     <Example 11> LHA LHA213.EXE

     LHA assumes command 'l' and shows list of FILE(s) archived FILE
     per line.

     < Example 11x > LHA /x LHA213.EXE

     You get a similar list but full-pathnames are inserted, and
     each FILE is shown on two lines.

     NOTE:  Forward slash '/' is used as the pathname separator.


   v (View)

     'LHA v ARC' is the same with 'LHA l /x ARC'.


   t (Test)

     Check the integrity of ARC, by CRC check.

     LHA t LHA.EXE or LHA t LHA213.EXE

     will announce the authenticity of the file you own.

           LHA t LHA.EXE

     "This file seems to be ORIGINAL distributed from H.Yoshi."

     LHA.EXE tests itself for you.  This guarantees the version you
     have is not hacked by anyone, though it is not the full guaran-
     tee in the present state of art.  You can't check LHA.EXE if
     you have used executable file compressors such as LZEXE, PKLITE
     or DIET.

     < Example 12 > LHA t EX

     LHA tests integrity of the FILE(s) in 'EX.LZH'.

     < Example 13 > LHA t LHA.EXE

     LHA checks if LHA.EXE is the original file distributed.
     
     It has often been asked that files made by LHarc v 1.xx
     fail this test. You cannot test LHARC.exe with this test.
     If you get an answer "file corrupt", don't get panic.
     These files often have extra padding in the back of the file.

   s (Self-extract)

     LHA makes a Self-Extracting archive from ARC.LZH.  The default
     switch /x0 is assumed when you do not specify.  SFX made with
     the /x0 switch, small model, extracts files on the current
     directory.  You can't activate some programs in the archived
     FILE(s) automatically with small model.  The size of the SFX file
     is smaller than those made with /x1 switch, large model.

     The large model SFX has the ability to restore subdirectory
     structures and can automatically start execution from a FILE
     inside the archive.

     < Example 14 > LHA s EX

     In this case, LHA makes a small model EX.EXE from EX.LZH.
     
     We had many inquiries that LHA does not make SFX file.
     You must first make LZH file by 'a' or 'm' command. Then
     you use 's' command to make it a self-extracting file.


  C.  </option>
  =============

     Each option takes 3 numerical values to define its finer
     actions.  Use 0,1 and 2 to specify.  For some options, the
     values 1 and 2 does the same thing.  You may toggle 0 and 1 by
     '+' and '-" as with LH113c.  You may change switch character
     (option) from  /  to  - if you prefer the '-'.

     /x[0|1] (eXtend)


     LHA uses eXtended FILE names, namely full-pathnames for FILE(s).

     You are on the root directory.  Suppose you want to archive the
     FILE '\tc\include\sys\stat.h' in an archive 'ARC.LZH'.  You type
     'LHA a /x1 ARC.LZH \tc\include\sys\stat.h' to store the FILE
     with full-pathname,'\tc\include\sys\stat.h'.  Similarly, you
     have a 2-lined list with full-pathnames with 'l' command.

     /p[0|1|2] (Precise)


     Search file names precisely.

     Suppose an ARChive 'TC.LZH' contains both 'STAT.H' and
     'SYS\STAT.H'.  A simple command like 'LHA e TC stat.h' will
     extract both files on the current directory and let one
     override the other.  To avoid such confusion, you can type 'LHA
     e -p TC stat.h' to extract 'STAT.H' only.  While by typing 'LHA
     e -p TC sys\stat.h' you will get 'SYS\STAT.H'.

     /c[0|1|2]  (ignore Comparison of time)


     With commands 'u', 'f', 'e', 'x', LHA ignores the checking of
     time stamps.  With these commands, LHA chooses the newest FILE
     with the same pathname to act on, by default.  This option lets
     LHA ignore the time stamps.


     /m[0|1|2]  (no Message)

     The switch '/m1' let LHA assumes answer 'Y' for all the
     queries. "LHA e /m1 ARC" will extract files in ARC.LZH
     wherever "Y" is typed for the queries "Overwrite? [Y/N]"
     are asked. If there is a file in the directory with the
     same name but with attribute read-only, LHA reports
     'file creation error'. Similarly LHA creates new directory
     if it meets 'Directory DIR does not exit. Create [Y/N]'.
   
     On the other hand, with '/m2' switch LHA acts differently.
     'LHA e /m2 ARC.LZH FILE' dearchives every FILE by choosing
     an unused file extension among 000-999, when LHA finds
     FILE(s) with the same name as in the ARChive.

     /a[0|1] (any Attribute)


     This switch enables LHA to archive FILE(s) with any attributes.

     In the process of archiving with default switch /a0, LHA will
     not archive FILE(s) with hidden and system attributes.  FILE(s)
     with read-only attribute is archived with the attribute. With
     this switch on, '/a1', FILE(s) of any attribute are archived

     In the process of dearchiving, with /a1, dearchived FILE(s)
     preserve their original attributes. With /a0, you can't
     dearchive files with hidden and system attributes.  Read-only
     FILE(s) are dearchived deprived of their original attribute.

     /r[0|1|2] (Recursive)


     LHA archives and extracts files recursively from subdirect-
     ories.  'Recursively' means LHA searches all FILE(s) from all
     subdirectories under the specified directory if there is any.

     There are three different modes for the '/r' switch.

     /r0: (non-recursive mode, default)


     LHA collects files specified by path names only.

     /r1:


     LHA separates the given pathname into a directory name and FILE
     name.  LHA recursively collects FILE(s) with the given name from
     all the directories under the directory specified.

     < Example 15 > LHA a /r1 SOURCE.LZH \SOURCE.C\SOURCE\*.H

     LHA collects FILE(s) with extension C and H from the directory
     \source and its subdirectories, probably '\SOURCES\SAMPLES\*.C'
     but not '\SOURCE\*.OBJ'.

     /r2:


     LHA recursively collects all the files from all the specified
     subdirectories.  Tree structure of the specified directory is
     archived as it is.

     < Example 16 > LHA a /r2x1 a:\*.*


     NOTE:  LH113c has set /x whenever /r is set in 'e' or 'x'
            commands.  LHA differs from LH113c in that /x is
            not set with /r automatically.

     The following questions are the most frequently asked ones:

     (1) How do you backup a disk a: ?

                        LHA a /r2x1 LZH a:\

     (2) Then how do you retrieve all the directories and files on
         b:?

                        LHA x ARC.LZH b:\


     /w[0|1|<Directory Name>] (Work directory)

     Specify the directory name where LH makes temporary files.

                        LHA a /wd:\  ARC.LZH FILE(s)

     set -w switch on.

     By default, LHA makes all the temporary files on the directory
     where ARC.LZH is to be made.  It will rename the temporary file
     as ARC.LZH.

     LHA makes temporary files on the current directory if no name
     is specified with '/w+'.

     When you set Environmental variable 'TMP' this switch is set
     automatically to be 1, and you have the directory set by 'TMP='.
     as your working directory.

     The switch helps LHA when you have not enough room in your base
     directory, or when you have a high speed memory device like RAM
     disk or HARD ram.




     /t[0|1] (Time stamp)

     With command a,u,m,f,d reset time stamp of ARC.lzh according to
     the newest file in the archive.  By default, the time stamp of
     an ARC.LZH is the time when the ARC.LZH is made.


     /z[0|1|2] (Zero compression)

     LHA makes an archive without compressing.

     /z1: None of the FILE(s) is compressed

     /z2: Compress and archive except for the FILE(s) with exten-
          sions:

               .ARC, .LZH, .LZS, .PAK, .ZIP, .ZOO.

     /z<extension>:  Do not compress FILE(s) with the specified
     extension.  This switch assumes /z2.  You may use wild card to
     specify, and you may or may not put '.' in front of the exten-
     sion.  With '/zdbf' you don't compress FILE(s) with extension
     '.DBF'.  With '/z' you will not have FILE(s) with no extension
     compressed.  You may specify multiple extensions by writing
     sequentailly:

               LHA a /ZCOM /ZERO ARChive.LH *.*.

     /o[0|1] (Old compatible compression)

     LHA makes an archive compatible with the LH113c format.  Even
     in this case, LHA makes tighter compression than LH113c ver
     1xx.  The header id is automatically set to -h1.

     /h[0|1|2] (Header level)

     Choice of header level, default is /h0.


     /i[0|1] (don't Ignore case)

     Recognize Upper and Lower cases.  LH(arc)s have common header
     format in other OS's where cases are recognized as distinct.
     This option is prepared for dearchiving archives made by other
     OS'.  In the DOS version of LHA, you can't differentiate upper
     and lower when LHA archives FILE(s) into the archive.  Names
     are all stored in upper case.

     /n[0|1|2] (No indicator)

     In this version, LHA outputs compressing indicator "ooo....."
     to standard error.  The switch is to suppress this output.

     /n1: LHA disables output "ooo....." to indicate its progress.

     /n2: LHA disables outputs of filename, compression rates.


     /l[0|1|2] (Long display ).

     LHA outputs filenames in different formats when LHA archives
     and dearchives.

      /l0 : FILE names only.
      /l1 : Full-pathnames stored or to be stored in archive in 2 lines.
      /l2 : Full-pathname of FILEs accessed by LHA in 2 lines.

     < Example 16 > LHA a /r1x1l2 LINK.LZH c:\LINK.*

     LHA collects LINK.* with full-pathname from directories below
     c:\, with information from where LHA gets this FILE(s).


     /-[1|2] (The first letter switch).

     LHA recognizes the characters '-' and '@' as the first letter
     of a FILE name.  By default, any file beginning with '@', like
     '@xxx' is recognized as a Response File 'xxx'.  

     With
     '/-1' switch LHA reads '@' as a character in the file name,
     while with switch
     '/-2' LHA recognizes both '-' and '@' as characters.

     To exit from this mode specify '/-[0]'.  You cannot use '--0' 
     in this particular case.  LHA believes '--0' as a file name.

     /s[0|1] (refrain from "Skipped filename.ext" message).
     
     When LHA finds a file with the same name with newer time stamp,
     LHA skips decompressing a file from an ARChive. This message may
     cause some confusion in Batch mode execution. You may suppress the
     display. New from this version 2.13.

  D.  Base Directory.
  ==================

     Base directory is not the current nor the root directory.  It
     is the directory on which LHA is executed.  Or you may believe
     that you move to this directory and execute LHA from there. You
     may specify a number of directories as your base directories.


  < Example 17 > LHA x program c:\BIN\ *.EXE *.COM c:\TEMP\ *.MAN *.DOC
                              ~~~~~~~             ~~~~~~~~

     Suppose you are on the directory d:\.  You want to extract
     files with extensions .COM and .EXE on c:\BIN, and those with
     extensions .MAN and .DOC on the directory c:\TEMP.  This is
     equivalent to the following set of command lines:

             D>C:
             C>CD \BIN
             C>LHA x D:\program *.COM *.EXE
             C>cd \TEMPp
             C>LHA x D:\program *.MAN *.DIX

     Naturally, you can't dearchive a single FILE on multiple di-
     rectories.  The directory specified first has the priority.


  E.  DOS redirection and response file
  =====================================

     LHA can't accept too many file names on a command line due to
     MS-DOS's restriction.  To avoid this inconvenience, LHA now
     accepts PIPES and REDIRECTS of DOS.  Besides, LHA can use work
     file called response file to record the names of the files to
     be archived like MAKEFILE for some compilers.

 a.  Response File.

     The response file name will be marked with the letter '@' as of
     LINK.EXE, which is a text file.  You may just write whatever
     you want LHA to be done on this file.  Response file ignores CR
     code and uses space as a separator.  You may write options in
     the response file but you can't nest, calling other response
     file, file names.


 b.  DOS Pipes and Redirects.

     You may specify the same information supplied by a response
     FILE by using pipes or redirections.  You may create a response
     FILE by redirection.

     < Example 18 > LHA l /n1 PARTS > FILE(s)
                    LHA a NEWPARTS @FILE(s)

     Make a list of files in the 'PARTS.LZH' archive and use it to
     make a new ARChive 'NEWPARTS.LZH'.  This is done by using the
     response files, after some editing.

     < Example 19 > LS | SORTR | LHA a ALL ls -c | LHA a ALL

     Make a list of files in a directory by LS.EXE.  Sort file names
     and make a sorted archive ALL.LZH.  Beware of the various for-
     mats from output of LS.EXE.  LS.EXE is supposed to list files
     one name per line without any attributes or time stamps.  LS
     designed after UNIX will do the trick by "ls -c" or "ls -C".
     C or c stand for "sorted by columns".


  F.  Environmental Variables
  ===========================

 a.  LHA and LHARC

     LHA overrides LHARC.  This will reset default optional.


 b.  TMP

     Set working directory as -w option.  In case LHA recognizes no
     working directory, it uses the current directory as the working
     directory and creates temporary files on it.


 c.  TZ

     The time zone (EST, PST, etc.) must be set when you archive
     with the header level -h2- and when you dearchive with -h2-. In
     the Eastern Standard Time zone you have to set TIME ZONE with
     the DOS command: set TZ=EST+5.  Remember the default Remember
     the default header level is -h1-, in which case you are all
     set.


  G.  Exit Codes.
  ==============

     LHA will return following result codes after batch or other
     processes' execution.

     0.  Normal.

     1.  CRC error occured, probably with 'e','x','t' commands.
         Or LHA failed to create files because of disk space, or
         because of files in existence.

     2.  Fatal error.  Process terminated without transactions.

     3.  Failed to write temporary files in the archive.  You may
         find a temporary file LHTEMP)2(.LZH on your working direct-
         ory.  You may rename this file with extension LZH, and use
         it as an archive.


  H.  Working File Names
  ======================

       LHTMP)1(.LZH : Old ARChive renamed.
       LHTMP)2(.LZH : Working file to be renamed as ARChive.


2.SFX, Self-Extracting archive
------------------------------

      General Usage:

         SFX.EXE [/x] [/!] [/eDIR] [DIR]

           /x: do not create new directory.
           /!: auto-execution batch enable.
           /a: restore file attributes.
           [/eDIR],[DIR]; specify directory to extract.


         SFX.EXE is an executable file with FILE(s) stored in
         the archive to be automatically extracted by exe-
         cution.  All the LHA distribution will be in the
         Self-Extracting (SFX) .EXE-format.  Only LHA.EXE makes
         SFX files from archive *.LZH made by LHA.EXE.  You
         can't make a Self-Extracting executable file from the
         archive made by 'LH113c.1.xx'.

     LHA makes two models of SFX files: (a) the small model and (b)
     the large model according to the switch /x0 or /x1, with the
     following special functions.


   A.  Telop.
   =========

     LHA displays any file with name '!' if SFX.EXE finds it
     archived. LHA holds one screen after showing [Y/N] prompt.  LHA
     proceeds to execute if it receives 'Y'.  It quits (aborts)
     execution for 'N'.  (The '!' character was used as it is the
     first printing character.  A file starting with '!' will always
     be the first file in that archive.)


   B.  Directory Specification.
   ===========================

     This is possible only for the large model.  You can name the
     directory on which to execute SFX.EXE.

     < Example 20 > LHA213.EXE c:\user

     LHA extracts FILE(s) in LHA212.EXE on C:\USER.  You may of
     course type:

                LHA e /x0 LHA213.EXE c:\user ,

     to keep the TELOP file.


   C.  Auto Execution
   ==================

     This is possible only for large models.

     Archive a batch file with the name "!.BAT" and include it in
     the SFX file.  This batch works if and only if you type:

                     LHA213 /!

     LHA always extracts files on the current directory.  Any
     existing "!.BAT" file is overwritten.  You can't activate an
     existing !.BAT by using the "/!" switch even if there is one on
     the current directory.  The batch file is read if and only if
     it is archived in the SFX file.

     Two Models of Self-Extracting files are available:


 a.  Small Model  (LHA s SFX.LZH)

     This is the default model.

     LHA ignores the directory structures even if you make the
     archive file with the /x or /r[1|2] switch.  LHA holds only the
     FILE names.  SFX.EXE extracts files to the current directory.

     There is no limit on the size of SFX.EXE as there was for
     LH113c.


 b.  Large Model  (LHA s /x1 SFX.LZH)

     You can run a batch file to specify the directory to extract
     files.  You can retrieve original directory structures with
     this model.  You may refrain from creating unexpected
     structures by using the /x switch.


3.  Main Differences from LH113c
--------------------------------

     LHA is an improved version of LH113c in principle.  You will
     notice a number of differences between the two, when comparing.
     Some of the differences will be mentioned at this time.  (You
     may wish to read the LH113c manual for a better comparison if
     anything appears confusing.)

     FILE names are not sorted when entered into an archive.  They
     are entered in the order in which they appear in the directory,
     when using wild cards.  (This is different from LH113c.) 
     If you specify the order of FILE, then the order is
     reproduced in the archive.  If you add new FILE(s), they will
     be added at the end of the existing files.

     There are external utility programs by other authors which you
     may use to sort the FILE names in your directory prior to
     adding them to the archive.  Some programs actually resort the
     archive itself.  Few include LH113c archives as LH113c already
     sorted those.  LHA210 doesn't.  By using a 'pipe' you can type:

     < Example 21 >   LS *.C *.H | SORT | LHA a EX.

     LHA collects FILE(s) with extensions C and H sorted in the
     archive named 'EX.LZH'.

     With LHA, the /r switch does not necessarily activate the /x
     switch in extraction. In this version of LHA, the 'x' command
     is equivalent to using 'E /x1m1', namely, LHA restores all the
     tree structures of subdirectories.

     LHARC executed an AUTOLARC.BAT file by key word upon self-
     extracting.  LHA no more uses keyword comparison.  If a SFX
     file contains an !.BAT file, the batch is activated by '-!'
     following the executable file name.

     The time stamp of LHA is relatively counted from 1970-01-01,
     00:00:00 UTC by seconds.  You must be careful not to set date
     or time which is illusory, like 00-00-00.  LHA will display
     some indefinite date from overflow of the counter.


4.  Our distribution Policy
---------------------------

     This software, this document and LHA.EXE, is a copyright-
     reserved free program.  You may use, copy and distribute this
     software free of charge under the following conditions.

  1.  Never change Copyright statement.

  2.  The enclosed documents must be distributed with as a package.

  3.  When you have changed the program, or implemented the program
      for other OS or environment, then you must specify the part
      you have changed.  Also make a clear statement as to your name
      and MAIL address or phone number.

  4.  The author is not liable for any damage on your side caused by
      the use of this program.

  5.  The author has no duty to remedy for the deficiencies of the
      program.

  6.  When you are to distribute this software with publications or
      with your product, you have to print the copyright statement
      somewhere on the disk or on the package.  You cannot
      distribute this software with copyprotected products.


          As long as those conditions are satisfied, you do not
          need to get the author's permission to use or to dis-
          tribute the software.


5.  How to contact the author.
------------------------------

     Please send MAIL to Forum flabo on Nifty Serve.  Go Nifty on
     CompuServe and read the instructions there.  Your inquiries or
     your questions are to be addressed to the one of the above
     Nifty forums.  Direct MAIL to the author.

    My mail address :  SDI00506 | PFF00253 on Nifty Serve.
                       pcs02846               ASCII-NET pcs.
                       FEM12376               PC-VAN.

    Oversea Users may send inquiries, also, to K.Okubo to the address:
                       [74100,2565]        on Compuserve,
                       K.Okubo                Genie,
                       c00236@sinet.ad.jp.    INTERNET,CSNET etc.


6. Acknowledgments
-------------------

     I used the following softwares distributed on BBS.

     1. LSI-C86 ver 3.20 evaluation copy, from LSI Japan.

     2. A-MACROS /Structured Assembler Macros, from AMSCLS.INC
        (c) Hortense S. Endoh 1986,1987 ver.2.10. I appreciate
        the public distribution of these excellent softwares.

     What have I done in these days of rapidly changing software
     technologies?  My LH113c has contributed for the improvements
     of similar products such as PKZIP(tm) and PAK(tm).  Even with
     my modest Japanese estimate, I can be proud of this achievement
     at this time.  I thank all those people who supported and used
     LH113c - voices of users have always been a constant encourage-
     ment to me.

        I express my gratitude to Haruhiko Okumura and members
        of SIG Science of PCVAN for the improvements of algo-
        rithms,

        to K.Okubo who introduced and supported LH113c on over-
        sea networks such as CompuServe and GEnie.

        to late Irvin Hoff, CP/M sysop Compusrve, who reviewed
        the English version for spelling, grammar and English
        phrasing while he was struggling with cancer,

        to K.Miki who introduced me to archivers and hold a
        place for experiments,

        to members of LSI-Japan who offered excellent versions
        of LSI-C, to the members of Forum FHONYAKU who prepared
        the English manual, and finally to all who used LH113c
        and supported it.


7.  Reference
-------------
  1.  Knuth, D.E., Dynamic Huffman Coding, J.Algorithms, 6:163-180.
  2.  Kurita, T.   Harddisk Cook Book.  1987 Shoeisha,Tokyo.
  3.  Kurita, T.  Tool Box of Computing, Huffman Coding, bit
      70:100-101,1988.
  4.  Okumura,K.,Masuyama,K.,Miki,K.  Practice and theory of Data
      Compression.  The Basic, 70(March):1-65,1989.
  5.  Fiala,E.R., and Greene,D.H., Data Compression with Finite Win-
      dows, Comm.ACM, 32:490-595,1989.
  6.  Okumura,H., and Yoshizaki,H.  Introduction to  Compression
      Algorithm, C Magazine 3:1:44-68,1991.

                              - end -

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2991

     Volume in drive A has no label
     Directory of A:\

    FILE0002 LZH    181439   8-31-92   6:26p
    GO       TXT      1386   9-17-92   2:24p
    GX1      EXE     42987   8-31-92   6:26p
    INSTALL  EXE     27483   8-31-92   6:26p
    INSTALL  WRF      7250   8-31-92   6:26p
    LHA      DOC     31840   8-31-92   6:26p
    LHA      EXE     34283   8-31-92   6:26p
    ORDRFORM EXE     12676   8-31-92   6:27p
    README   EXE     17284   9-08-92   6:19p
    GO       BAT        38   1-31-91  12:58a
           10 file(s)     356666 bytes
                               0 bytes free
