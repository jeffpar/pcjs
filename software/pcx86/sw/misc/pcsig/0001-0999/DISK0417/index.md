---
layout: page
title: "PC-SIG Diskette Library (Disk #417)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0417/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0417"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "A.D.A. PROLOG"

    The PROLOG -- "Programming in Logic" -- language on this disk is
    the educational/public domain version from Automata Design
    Associates (A.D.A.).  PROLOG is considered one of the major fifth
    generation languages and is not for the faint-hearted.
    Considered the leading edge of most expert systems and artifical
    intelligence program developments, PROLOG is remarkably good for
    writing "question answering" systems.  It excells at writing
    programs that perform complicated strategies for computing the
    best or worst way to accomplish a task, or to avoid an
    undesirable result.
    
    Besides PROLOG, there are many companion programs here: PROLOGED.COM
    is a simple screen editor for use within PROLOG; ATN.ARC contains Lou
    Schumacher's natural language parser; EXPERT.ARC contains expert
    systems for such fields as medical, rockblasting, fault diagnosis,
    etc.  GAMES.ARC has some simple board games and adventure games, while
    PUZZLES.ARC demonstrates techniques of translating word problems into
    unambiguous logic.
    
    PIE.ARC contains Simon Blackwell's "PIE" Truth Maintenance System
    in revised, debugged, and enlarged form.  This system is found in
    the directory "expert" and augments the strictly deductive
    capabilities of raw Prolog with additional forms of reasoning.
    
    System Requirements: 256K, one disk drive and monochrome display.
    
    How to Start: As all programs and documentation are archived, consult
    the READ.ME for detailed information about the files on this disk and
    on how to unsqueeze all the archived files.  First one to get is
    PROLOG.DOC!
    
    Suggested Registration:  $10.00
    
    File Descriptions:
    
    READ     ME   Detail about the files on this disk and how to unsqueeze
    PROLOG   ARC  Squeezed Documention for the PROLOG programs
    GO       BAT  Batch file for basic directions
    FILES417 TXT  Description of files contents
    ARCDOC   ARC  Archived directions on using the ARC.EXE utility
    ARC      EXE  Utility to "Unsqueeze" the files on this disk
    README        Notes on archiving programs
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ARC.DOC

{% raw %}
```




















                                       ARC

                              File Archive Utility
                                   Version 5.0

















     (C) COPYRIGHT 1985, 1986 by System Enhancement Associates;
         ALL RIGHTS RESERVED





     This document describes the ARC file utility, version 5.0, which was
     created by System Enhancement Associates in January of 1986.











                                Table of Contents                                Table of Contents



     Introduction  ....................................................   1
     Using ARC  .......................................................   3
     ARC commands  ....................................................   4
         Adding files  ................................................   4
         Extracting files  ............................................   6
         Deleting files  ..............................................   6
         Listing archive entries  .....................................   7
         Printing files  ..............................................   9
         Running files  ...............................................   9
         Testing an archive  ..........................................  10
         Converting an archive  .......................................  10
     ARC options  .....................................................  11
         Suppressing compression  .....................................  11
         Backup retention  ............................................  12
         Message suppression  .........................................  13
         Encryption/decryption  .......................................  14
     RAMdisk support  .................................................  15
     MARC  ............................................................  16
     XARC  ............................................................  17
     Version numbers  .................................................  18
     Program update service  ..........................................  19
     Common questions and answers  ....................................  20
     Revision history  ................................................  22
         Changes in version 3  ........................................  22
         Changes in version 4  ........................................  22
         Changes in version 4.1  ......................................  23
         Changes in version 4.3  ......................................  23
         Changes in version 4.4  ......................................  24
         Changes in version 4.5  ......................................  24
         Changes in version 5.0  ......................................  25
     Program history and credits  .....................................  27
     Site license  ....................................................  28
     Order form  ......................................................  30























                                  INTRODUCTION                                  INTRODUCTION



     ARC is the copyrighted property of System Enhancement Associates.  You
     are granted a limited license to use ARC, and to copy it and
     distribute it, provided that the following conditions are met:

     1) No fee may be charged for such copying and distribution.

     2) ARC may ONLY be distributed in its original, unmodified state.


     Any voluntary contributions for the use of this program will be
     appreciated, and should be sent to:

                          System Enhancement Associates
                                  21 New Street
                                Wayne, NJ   07470

     You may not use this product in a commercial environment or a
     governmental organization without paying a license fee of $35.  Site
     licenses and commercial distribution licenses are available.  A
     program disk and printed documentation are available for $50.  See the
     order form in the back of this manual for more details.



     A word about user supported software:

                                                                 freeware     The user supported software concept (usually referred to as freeware)
     is an attempt to provide software at low cost.  The cost of offering a
     new product by conventional means is staggering, and hence dissuades
     many independent authors and small companies from developing and
     promoting their ideas.  User supported software is an attempt to
     develop a new marketing channel, where products can be introduced at
     low cost.

     If user supported software works, then everyone will benefit.  The
     user will benefit by receiving quality products at low cost, and by
     being able to "test drive" software thoroughly before purchasing it.
     The author benefits by being able to enter the commercial software
     arena without first needing large sources of venture capital.

     But it can only work with your support.  We're not just talking about
     ARC here, but about all user supported software.  If you find that you
     are still using a program after a couple of weeks, then pretty
     obviously it is worth something to you, and you should send in a
     contribution.









     ARC                                                           Page   1
     And now, back to ARC:

     ARC is used to create and maintain file archives.  An archive is a
     group of files collected together into one file in such a way that the
     individual files may be recovered intact.

     ARC is different from other archive and library utilities in that it
     automatically compresses the files being archived, so that the
     resulting archive takes up a minimum amount of space.

     When ARC is used to add a file to an archive it analyzes the file to
     determine which of four storage methods will result in the greatest
     savings.  These four methods are:

     1) No compression; the file is stored as is.

     2) Repeated-character compression; repeated sequences of the same byte
        value are collapsed into a three-byte code sequence.

     3) Huffman squeezing; the file is compressed into variable length bit
        strings, similar to the method used by the SQ programs.

     4) Dynamic Lempel-Zev compression;  the file is stored as a series of
        variable size bit codes which represent character strings, and
        which are created "on the fly".

     Note that since one of the four methods involves no compression at
     all, the resulting archive entry will never be larger than the
     original file.


     An interesting note:  It has been brought to our attention that BASIC
                                                       not     programs compress to a smaller size when they are not tokenized.  If
     you are more concerned with space than speed, you may wish to convert
     your BASIC programs to ASCII form before adding them to an archive.
     Your BASIC manual should give instructions on how to do this.























     ARC                                                           Page   2

                                    USING ARC                                    USING ARC



     ARC is invoked with a command of the following format:

         ARC <x> <arcname> [<template> . . .]

     Where:

         <x> is an ARC command letter (see below), in either upper or lower
         case.

         <arcname> is the name of the archive to act on, with or without an
         extension.  If no extension is supplied, then ".ARC" is assumed.
         The archive name may include path and drive specifiers.

         <template> is one or more file name templates.  The "wildcard"
         characters "*" and "?" may be used.  A file name template may
         include a path or drive specifier, though it isn't always
         meaningful.

     If ARC is invoked with no arguments (by typing "ARC", and pressing
     "enter"), then a brief command summary is displayed.



     Following is a brief summary of the available ARC commands:

         a   = add files to archive
         m   = move files to archive
         u   = update files in archive
         f   = freshen files in archive
         d   = delete files from archive
         x,e = extract files from archive
         r   = run files from archive
         p   = copy files from archive to standard output
         l   = list files in archive
         v   = verbose listing of files in archive
         t   = test archive integrity
         c   = convert entry to new packing method



     Following is a brief summary of the available ARC options, which may
     alter how a command works:

         b   = retain backup copy of archive
         s   = suppress compression (store only)
         w   = suppress warning messages
         n   = suppress notes and comments
         g   = encode or decode archive entry






     ARC                                                           Page   3

                                  ARC COMMANDS                                  ARC COMMANDS



     This section describes each of the commands.  ARC will accept any one
     command at a time.  If no commands are given, then a brief command
     list is displayed.



     ____________     ADDING FILES

     Files are added to an archive using the "A" (Add), "M" (Move), "U"
     (Update), or "F" (Freshen) commands.  Add always adds the file.  Move
     differs from Add in that the source file is deleted once it has been
     added to the archive.

     Update differs from Add in that the file is only added if it is not
     already in the archive, or if it is newer that the corresponding entry
     in the archive.

     Freshen is similar to Update, except that new files are not added to
     the archive; only files already in the archive are updated.


     For example, if you wish to add a file named "TEST.DAT" to an archive
     named "MY.ARC", you would use a command of the form:

         ARC a my test.dat

     If you wanted to add all files with a ".C" extension, and all files
     named "STUFF" to an archive named "JUNK.ARC", you could type:

         ARC a junk *.c stuff.*

     If you wanted to move all files in your current directory into an
     archive named "SUM.ARC", you could use a command of the form:

         ARC m sum *.*

     If you have an archive named "TEXT.ARC", and you wanted to add to it
     all of your files with an extension of ".TXT" which have been created
     or changed since they were last archived, then you would type:

         ARC u text *.txt

     If you have a bunch of files in your current directory, with backup
     copies being stored in an archive named "SAFE.ARC", then if you wanted
     to make sure that every file in the archive is the latest version of
     that file, you would type:

         ARC f safe






     ARC                                                           Page   4
     A word about Update and Freshen:  These are similar in that they look
     at the date and time of last change on the file, and only add it if
     the file has been changed since it was last archived.  They differ in
     that Update will add new files, while Freshen will not.

     In other words, Update looks for the files on disk, and adds them if
     they are new or have changed, while Freshen looks in the archive, and
     tries to update the files which are already there.


     Archive entries are always maintained in alphabetic order.  Archive
     entries may not have duplicate names.  If you add a file to an archive
     that already contains a file by that name, then the existing entry in
     the archive is replaced.  Also, the archive itself and its backup will
     not be added.

     You may also add a file which is in a directory other than your
     current directory.  For example, it is perfectly legal to type:

         ARC a junk c:\dustbin\stuff.txt

     You cannot add two files with the same name.  In other words, if you
     have a file named "C:\DUSTBIN\STUFF.TXT" and another file named
     "C:\BUCKET\STUFF.TXT", then typing:

         arc a junk c:\dustbin\*.* c:\bucket\*.*

     will not work.


     ARC does not save the path name.  In other words, if you specify a
     drive and/or path when adding a file, only the actual file name is
     stored in the archive.


     ARC will never add an archive to itself, nor will it add the temporary
     copy or a backup copy of the archive.






















     ARC                                                           Page   5
     ________________     EXTRACTING FILES

     Archive entries are extracted with the "E" (Extract) and "X" (eXtract)
     commands.  For example, if you had an archive named "JUNK.ARC", and
     you wanted all files in it with an extension of ".TXT" or ".DOC" to be
     recreated on your disk, you could type:

         ARC x junk *.txt *.doc

     If you wanted to extract all of the files in an archive named
     "JUNK.ARC", you could simply type:

         ARC x junk

     Whatever method of file compression was used in storing the files is
     reversed, and uncompressed copies are created in the current
     directory.

     You can also specify a path name, in which case the decompressed copy
     is placed in the specified directory.  For example, if you had an
     archive named "JUNK.ARC", and you wanted all files in it with an
     extension of ".TXT" to be placed in the directory "C:\WASTE\LAND",
     then you could type:

         ARC x junk c:\waste\land\*.txt

     If you wanted to put the file "TRASH.TXT" on your A: drive, and the
     file "LITTER.TXT" on your B: drive, you could type:

         ARC x junk a:trash.txt b:litter.txt

     If you give more than one path for a file, then only the first one is
     used.  For example, if you typed:

         ARC x junk a:trash.txt b:trash.txt

     then TRASH.TXT will be placed on your A: drive.



     ______________     DELETING FILES

     Archive entries are deleted with the "D" (Delete) command.  For
     example, if you had an archive named "JUNK.ARC", and you wished to
     delete all entries in it with a filename extension of ".C", you could
     type:

         ARC d junk *.c











     ARC                                                           Page   6
     _______________________     LISTING ARCHIVE ENTRIES

     You can obtain a list of the contents of an archive by using the "L"
     (List) command or the "V" (Verbose list) command.  For example, to see
     what is in an archive named "JUNK.ARC", you could type:

         ARC l junk

     If you are only interested in files with an extension of ".DOC", then
     you could type:

         ARC l junk *.doc


     ARC prints a short listing of an archive's contents like this:

         Name          Length    Date
         ============  ========  =========
         ALPHA.TXT         6784  16 May 85
         BRAVO.TXT         2432  16 May 85
         COCO.TXT           256  16 May 85
                 ====  ========
         Total      3      9472


     "Name" is simply the name of the file.

     "Length" is the unpacked file length.  In other words, it is the
     number of bytes of disk space which the file would take up if it were
     extracted.

     "Date" is the date on which the file had last been modified, as of the
     time when it was added to the archive.

     "Total" is pretty obvious, I think.


     ARC prints a verbose listing of an archive's contents like this:

     Name          Length    Stowage    SF   Size now  Date       Time    CRC
     ============  ========  ========  ====  ========  =========  ======  ====
     ALPHA.TXT         6784  Squeezed   35%      4413  16 May 85  11:53a  8708
     BRAVO.TXT         2432  Squeezed   41%      1438  16 May 85  11:53a  5BD6
     COCO.TXT           256   Packed     5%       244  16 May 85  11:53a  3AFB
             ====  ========            ====  ========
     Total      3      9472             27%      6095


     "Name", "Length", and "Date" are the same as for a short listing.

     "Stowage" is the compression method used.  The following compression
     methods are currently employed:

            --          No compression.
          Packed        Runs of repeated byte values are collapsed.
         Squeezed       Huffman squeeze technique employed.
         Crunched       Lempel-Zev compression technique employed.


     ARC                                                           Page   7

     "SF" is the stowage factor.  In other words, it is the percentage of
     the file length which was saved by compression.  The total stowage
     factor is the stowage factor for the archive as a whole, not counting
     archive overhead.

     "Size now" is the number of bytes the file is occupying while in the
     archive.

     "Time" is the time of last modification, and is associated with the
     date of last modification.

     "CRC" is the CRC check value which has been stored with the file.
     Another CRC value will be calculated when the file is extracted or
     tested to ensure data integrity.  There is no especially good reason
     for displaying this value.











































     ARC                                                           Page   8
     ______________     PRINTING FILES

     Archive entries may be examined with the "P" (Print) command.  This
     works the same as the Extract command, except that the files are not
     created on disk.  Instead, the contents of the files are written to
     standard output.  For example, if you wanted to see the contents of
     every ".TXT" file in an archive named "JUNK.ARC", but didn't want them
     saved on disk, you could type:

         ARC p junk *.txt

     If you wanted them to be printed on your printer instead of on your
     screen, you could type:

         ARC p junk *.txt >prn



     _____________     RUNNING FILES

     Archive entries may be run without being extracted by use of the "R"
     (Run) command.  For example, if you had an archive named "JUNK.ARC"
     which contained a file named "LEMON.COM", which you wished to run, you
     could type:

         ARC r junk lemon

     You can run any file from an archive which has an extension of ".COM",
     ".EXE", ".BAT", or ".BAS".  You do not have to specify the extension,
     but all matching files are run if you do not.  In other words, if you
     had an archive named "JUNK.ARC" which contained the files "LEMON.COM",
     "LEMON.EXE", and "LEMON.BAS", and you typed:

         ARC r junk lemon

     Then all three programs will be run.  You can avoid this by specifying
     an extension in this case.

     You cannot give arguments to a program you are running from an
     archive.  Also, you will need a fair amount of memory to run a program
     from an archive.  It probably cannot be done with less than 256k.

     In practice, the file to be run is extracted, run, and then deleted.
















     ARC                                                           Page   9
     __________________     TESTING AN ARCHIVE

     The integrity of an archive may be tested by use of the "T" (Test)
     command.  This checks to make sure that all of the file headers are
     properly placed, and that all of the files are in good shape.

     This can be very useful for critical archives, where data integrity
     must be assured.  When an archive is tested, all of the entries in the
     archive are unpacked (without saving them anywhere) so that a CRC
     check value may be calculated and compared with the recorded CRC
     value.

     For example, if you just received an archive named "JUNK.ARC" over a
     phone line, and you want to make sure that you received it properly,
     you could type:

         ARC t junk

     It defeats the purpose of the T command to combine it with N or W.


     _____________________     CONVERTING AN ARCHIVE

     The "C" (Convert) command is used to convert an archive entry to take
     advantage of newer compression techniques.  This is occasionally
     desirable when a new version of ARC is released.  Please refer to the
     revision history section for details on when new compression methods
     were implemented.

     For example, if you had an archive named "JUNK.ARC", and you wanted to
     make sure that all files with an extension of ".DOC" were encoded
     using the very latest methods, you could type:

         ARC c junk *.doc

     Or if you wanted to convert every file in the archive, you could type:

         ARC c junk





















     ARC                                                           Page  10

                                   ARC OPTIONS                                   ARC OPTIONS



     This section describes the options which are available to modify how
     ARC works.  Any of these options can be combined with any of the
     commands, though the result may not always be something you'd want to
     do.



     _______________________     SUPPRESSING COMPRESSION

     The "S" (Suppress compression) option can be combined with any command
     that updates archive entries.  These include Add, Move, Update,
     Freshen, and Convert.  The effect of the S option is to prevent any
     compression techniques from being employed.  This is intended to allow
     you to add a few files at a time to an archive quickly, and then later
     convert the archive to compress everything at once.

     For example, over the course of a day you might give each of the
     following commands:

         ARC as junk *.txt
         ARC as junk *.mac
         ARC as junk *.doc

     At the end of the day, when you have finished adding things to the
     archive, you could have all of the archive entries compressed at once
     by typing:

         ARC c junk

     You could also decompress the archive by typing:

         ARC cs junk

     though I can't imagine why you'd want to.




















     ARC                                                           Page  11
     ________________     BACKUP RETENTION

     When ARC changes an archive (during an Add, Move, Update, Freshen,
     Delete, or Convert) it creates a new archive with the same name, but
     with an extension of ".$$$".  For example, if you add a file to an
     archive named STUFF.ARC, then ARC will create a new archive named
     STUFF.$$$.  ARC will read from your existing archive and write out the
     new archive with any changes to the ".$$$" copy.

     Normally when ARC is finished it deletes the original and renames the
     new archive to the original name (ie. STUFF.ARC goes away, and
     STUFF.$$$ becomes the new STUFF.ARC).  Among other things, this means
     that if anything goes wrong and ARC is unable to finish, then your
     original archive will still be intact.


     In some circumstances you may wish to retain the original version of
     the archive as a backup copy.  You can do this easily by using the
     Backup option.  Add the letter "B" to your command, and ARC will
     rename your original archive to have an extension of ".BAK" instead of
     deleting it.


     In other words, if you wanted to add "WASTE.TXT" to an archive named
     "JUNK.ARC", but wanted to keep a backup copy, then you would type:

         ARC ab junk waste.txt

     Your original archive would become "JUNK.BAK", while "JUNK.ARC" would
     contain the new "WASTE.TXT" file.


     If you keep a backup of an archive which already has a backup, then
     the older backup copy is deleted.

























     ARC                                                           Page  12
     ___________________     MESSAGE SUPPRESSION

     ARC prints three types of messages: warnings, comments, and errors.

     Warnings are messages about suspected error conditions, such as when a
     file to be extracted already exists, or when an extracted file fails
     the CRC error check.  Warnings may be suppressed by use of the "W"
     (Warn) command.  You should use this command sparingly.  In fact, you
     should probably not use this command at all.

     Comments (or notes) are informative messages, such as naming each file
     as it is added to the archive.  Comments and notes may be suppressed
     by use of the "N" (Note) command.

     Errors are actual system problems, such as running out of disk space.
     You cannot suppress errors.


     For example, suppose you extracted all files with an extension of
     ".BAS" from an archive named "JUNK.ARC"  Then, after making some
     changes which you decide not to keep, you decide that you want to
     extract them all again, but you don't want to be asked to confirm
     every one.  In this case, you could type:

         ARC xw junk *.bas

     Or, if you are going to add a hundred files with an extension of
     ".MSG" to an archive named "TRASH.ARC", and you don't want ARC to list
     them as it adds them, you could type:

         ARC an trash *.msg

     Or, if you want to extract the entire contents of an archive named
     "JUNK.ARC", and you don't want to hear anything, then type:

         ARC xnw junk























     ARC                                                           Page  13
     _____________________     ENCRYPTION/DECRYPTION

     Archive entries may be encrypted and decrypted by using the "G"
     (Garble) option.  The Garble option takes the remainder of the command
                                                      last     string as the password to use, so it must be the last option.


     For example, if you wanted to add a file named "WASTE.TXT" to an
     archive named "JUNK.ARC", and you wanted to encrypt it using the
     password "DEBRIS", then you would type:

         ARC agdebris junk waste.txt

     Later on, when you want to extract it again, you would type:

         ARC xgdebris junk waste.txt


     The password you supply is used to encrypt (or decrypt) the archive
     entry by performing an exclusive OR between each byte of the packed
     data and each byte of the password.  The password can be any length,
     and each of its bytes is used in rotation.  The password is converted
                                              not     to uppercase before it is used, so it is not case sensitive.  Since
     the encryption is performed on the packed data, it has no effect on
     stowage factors.

     This is not a particularly sophisticated means of encryption, and it
     is theoretically possible to crack.  Still, since it is performed on
     the packed data, the result should be quite sufficient for casual use.


     You can, if you wish, use different passwords for different files in
     an archive, but we advise against it.  If you are going to encrypt an
     archive, we suggest you use the same password for every file, and give
     the password whenever you do anything at all with the archive.  It is
     possible to list the entries in an encrypted archive using the "L" and
     "V" commands without giving the password, but nothing else will work
     properly.


     We advise that you use this option sparingly, if at all.  If you
     should forget or mistype your password, it is highly unlikely that you
     will ever recover your data.
















     ARC                                                           Page  14

                                 RAMDISK SUPPORT                                 RAMDISK SUPPORT



     If you have a RAMdisk, or other high-speed storage, then you can speed
     up ARC somewhat by telling it to put its temporary files on the
     RAMdisk.  You do this by setting the ARCTEMP environment string with
     the MS-DOS SET command.  For example, if drive B: is your RAMdisk,
     then you would type:

         set ARCTEMP=B:

     Refer to the MS-DOS manual for more details about the SET command.
     You need only set the ARCTEMP string once, and ARC will use it from
     then on until you change its value or reboot your system.


     If ARC does not find an environment string named ARCTEMP, then it
     looks for one named TEMP to use instead.  Several packages already use
     the TEMP string for exactly this purpose.  If you have need of an
     environment string named TEMP for something else, then you should be
     sure to define ARCTEMP.


     There are a limited number of temporary files created by ARC.  The one
     most often used is "$ARCTEMP.CRN", which is created (if possible) when
     adding a file to an archive.  The Convert command uses a file named
     "$ARCTEMP.CVT" to hold each file as it is being converted.  The Run
     command also creates a temporary file, which has the name "$ARCTEMP",
     and whose extension matches that of the file being run.




























     ARC                                                           Page  15

                                      MARC                                      MARC



     MARC is a separate program which is used to merge archives created by
     ARC.  MARC moves files from one archive to another without unpacking
     them.


     MARC is used as follows:

         MARC <target> <source> [<template> . . .]

     Where:

         <target> is the name of the archive to add files to.

         <source> is the name of the archive to read files from.

         <template> is one or more file name templates.  The wildcard
         characters "*" and "?" may be used.  If no template is supplied,
         then all of the files in <source> are added to <target>.

     It is not necessary for the target to exist.  If it does not exist,
     then it is created.  Thus, MARC can be used as an "extractor" as well
     as a "merger".


     For example, if you wanted to create an archive named "JUNK.ARC",
     which is to contain all of the files with an extension of ".TXT" which
     are currently contained in another archive named "WASTE.ARC", then you
     could type:

         MARC junk waste *.txt

     If you wanted to create an archive named "JUNK.ARC", which is to
     contain all of the files currently in the archives "WASTE.ARC" and
     "TRASH.ARC", you could type:

         MARC junk waste
         MARC junk trash

     Though it would probably be faster to type:

         COPY waste.arc junk.arc
         MARC junk trash


     If MARC is invoked with no arguments, then it gives brief directions
     in its use.








     ARC                                                           Page  16

                                      XARC                                      XARC



     XARC is a separate program which is used to extract all files from one
     or more archives.  It doesn't do anything that ARC doesn't do, and it
     isn't any faster, but it may be preferred in certain cases, as it is
     much smaller than ARC.


     XARC is used as follows:

         XARC <arcname> . . .

     Where <arcname> is the name of one or more archives.  The wildcard
     characters "*" and "?" may be used.  All files are extracted from the
     named archives.


     For example, if you wanted to extract everything from two archives
     named "WASTE.ARC" and "JUNK.ARC", you could type:

         XARC waste junk

     If you wanted to extract every file from every archive in a
     subdirectory named "TRASH", you could type:

         XARC trash\*.arc


     If XARC is invoked with no arguments, then it gives brief directions
     in its use.


























     ARC                                                           Page  17

                                 VERSION NUMBERS                                 VERSION NUMBERS



     There seems to be some confusion about our version numbering scheme.
     All of our version numbers are given as a number with two decimal
     places.

     The units indicate a major revision, such as adding a new packing
     algorithm.

     The first decimal place (tenths) indicates a minor revision that is
     not essential, but which may be desired.

     The second decimal place (hundredths) indicates a trivial revision
     that will probably only be desired by specific individuals or by die-
     hard "latest version" fanatics.

     ARC also displays its date and time of last edit.  A change of the
     date and time without a corresponding change in version number
     indicates a truly trivial change, such as fixing a spelling error.


     To sum up: If the units change, then you should get the newer version
     as soon as you can.  If the tenths change, then you may want to get
     the newer version, but there's no hurry.  If anything else changes,
     then you probably shouldn't bother.  This is reflected by our own
     habit of referring to "version 4.5" instead of "version 4.52".






























     ARC                                                           Page  18

                             PROGRAM UPDATE SERVICE                             PROGRAM UPDATE SERVICE



     A license to ARC entitles you to use all future versions of ARC.  New
     versions are generally available through normal freeware distribution
     channels, and we prefer that you obtain them that way.  However, many
     users of ARC have written to ask us about an update service.

     A program disk containing the latest version is returned on every
     order of $50 or more.  If you wish to purchase a single-user license
     and want an update disk, please enclose a check or money order for $50
     instead of $35.

     For a fee of $50 per year you can subscribe to our program update
     service.  Subscribers get up to five program updates per year mailed
     to them as new versions come out.  This does not include trivial
     releases.








































     ARC                                                           Page  19

                          COMMON QUESTIONS AND ANSWERS                          COMMON QUESTIONS AND ANSWERS



     Here are some of the more common questions we've received about ARC,
     along with their answers:


     Q: Why do you bother with squeezing when crunching is so much faster?

     A: Because crunching isn't really as fast as it looks.  Crunching is a
        one pass operation, while squeezing requires two passes.  ARC
        actually does the crunching during the analysis pass, and puts the
        crunched output in a file named "$ARCTEMP.CRN".  If crunching turns
        out to be the best method, then this temporary file is copied into
        the new archive.  In other words, when ARC says "crunching" it
        isn't really crunching, it's just copying a file.

                                                              much        Also, there are a lot of files out there that squeeze much better
        than they crunch.


     Q: Why does ARC run out of room if I make an archive bigger than about
        180k?

     A: Because you are working on a floppy disk.  ARC creates a copy of
        your archive, incorporating any new files as it goes.  When it is
        done, it deletes the original and renames the new one.  There are a
        number of reasons for doing it this way, one being that your
        original archive is still intact if anything happens while ARC is
        running.  ARC also needs room for the temporary file used in
        crunching.

        You can save some space by using the ARCTEMP environment string to
        put the temporary file on another disk, as well as using drive
        specifiers and having the archive and the files to add on separate
        disks, but you still won't be able to make an archive larger than
        about 180k.  If you need to make a larger archive, and if you have
        a fixed disk, then you can create the archive on the fixed disk and
        then copy it to the floppy.


     Q: I've seen an ARC.COM and an ARC.EXE.  Which one is the right one?

     A: ARC.EXE.  One or more people have been running ARC through a
        utility that converts an ".EXE" file to a ".COM" file.  But this
                                    space        utility is designed to save space, not speed.  On ARC it saves
        about 250 bytes, and makes no measurable difference in program
        speed.  We've decided that the savings are not worth the extra step
        in development in this case.








     ARC                                                           Page  20
     Q: Can I use ARC to distribute my public domain or freeware program?

     A: Yes, of course.


     Q: Can I use ARC to distribute my commercial software package?

     A: Yes.  Please contact us for a commercial distribution license.


     Q: I'm a commercial user.  Why should I pay for freeware that others
        get for free?

                                                              all     A: Because you cannot credibly plead poverty.  Freeware, all freeware,
        is an attempt to develop a new marketing channel to the benefit of
        everyone.  You can still "test drive" freeware for a short period,
        but if you decide to use it in your business, then you should pay
        for it.


     Q: Why not allow me to select which method of compression I want ARC
        to use?

     A: It would needlessly complicate ARC, both internally and in use.
        The exact nature of the compression methods used are complex, and
        quite different.  The only sure way to tell which will be best in
        any given case is to analyze the data, as ARC does.  The method
        chosen may not always be what you expect.


     Q: How can I get the latest version of ARC?

     A: ARC updates are distributed through normal freeware channels, and
        by FidoNet.  We also ship a program update disk on every order of
        $50 or more.  In addition, we also offer an update subscription
        service.  See the previous section for more details.























     ARC                                                           Page  21

                                REVISION HISTORY                                REVISION HISTORY



     ____________________     CHANGES IN VERSION 3

     The function used to calculate the CRC check value in previous
     versions has been found to be in error.  It has been replaced with the
     proper function.  ARC will still read archives created with earlier
     versions of ARC, but it will report a warning that the CRC value is in
     error.  All archives created prior to version 3.0 should be unpacked
     and repacked with the latest version of ARC.


     Transmitting a file with XMODEM protocol rounds the size up to the
     next multiple of 128 bytes, adding garbage to the end of the file.
     This used to confuse ARC, causing it to think that the end of the
     archive was invalidly formatted.  This has been corrected in
     version 3.01.  Older archives may still be read, but ARC may report
     them to be improperly formatted.  All files can be extracted, and no
     data is lost.  In addition, ARC will automatically correct the problem
     when it is encountered.



     ____________________     CHANGES IN VERSION 4

     ARC is adding another data compression technique in this version.  We
     have been looking for some technique that could improve on Huffman
     squeezing in at least a few cases.  So far, Lempel-Zev compression
     seems to be fulfilling our fondest hopes, often achieving compression
     rates as much as 20% better than squeezing, and sometimes even better.
     Huffman squeezing depends on some bytes being more "popular" than
     others, taking the file as a whole.  Lempel-Zev compression is instead
     looking for strings of bytes which are repeated at various points
     (such as an end of line followed by spaces for indentation).  Lempel-
     Zev compression is therefore looking for repetition at a more "macro"
     level, often achieving impressive packing rates.

     In the typical case a file is added to an archive once and then
     extracted many times, so the increased time for an update should more
     than pay for itself in increased disk space and reduced file
     transmission time.

     As usual, ARC version 4.0 is completely upward compatible.  That is,
     it can deal properly with any archive created by any earlier version
     of ARC.  It is NOT reverse compatible.  Archives created by ARC 4.0
     will generally not be usable by earlier versions of ARC.










     ARC                                                           Page  22
     ______________________     CHANGES IN VERSION 4.1

     Lempel-Zev coding has been improved somewhat by performing non-repeat
     compression on the data before it is coded (as was already done with
     Huffman squeezing).  This has the two fold advantage of (a) reducing
     to some extent the amount of data to be encoded, and (b) increasing
     the time it takes for the string table to fill up.  Performance gains
     are small, but noticeable.

     The primary changes are in internal organization.  ARC is now much
     "cleaner" inside.  In addition to the aesthetic benefits to the
     author, this should make life easier for the hackers out there.  There
     is also a slight, but not noticeable, improvement in overall speed
     when doing an update.

     Version 4.1 is still fully upward compatible.  But regretfully, it is
     again not downward compatible.  Version 4.1 can handle any existing
     archive, but creates archives which older versions (including 4.0)
     cannot unpack.



     ______________________     CHANGES IN VERSION 4.3

     Version 4.3 adds the much-demanded feature of using pathnames when
     adding files to an archive.  For obscure technical reasons, files
     being extracted still go in the current directory on the current
     drive.  Pathnames are also not supported for any of the other
     commands, because it would make no sense.

     Version 4.3 is also using a slightly different approach when adding a
     file to an archive.  The end result is twofold:

     1) Slightly more disk space is required on the drive containing the
        archive.  This should only be noticeable to those creating very
        large archives on a floppy based system.

     2) A 30% reduction in packing time has been achieved in most cases.
        This should be noticeable to everyone.

     As always, version 4.3 is still fully upwards compatible, and is
     backwards compatible as far as version 4.1.

















     ARC                                                           Page  23
     ______________________     CHANGES IN VERSION 4.4

     The temporary file introduced in version 4.3 occasionally caused
     problems for people who had not added a FILES= statement to their
     CONFIG.SYS file.  This has now been corrected.  Also, support of the
     ARCTEMP environment string was added to allow placing of the temporary
     file on a RAMdisk.

     A bug was reported in the Run command, which has been fixed.  From the
     nature of the bug, and the extreme time required before the bug was
     reported, it is deduced that the Run command is probably the least
     used feature of ARC.

     The Update command was changed.  It is no longer a straight synonym
     for Add.  Instead, Update now only adds a file if it is newer than the
     version already in the archive, as shown by the MS-DOS date/time
     stamp.



     ______________________     CHANGES IN VERSION 4.5

     The Convert command was not making use of RAMdisk support.  Now it is.

     The Freshen command was added.  Our first choice for a name was
     Refresh, but we already had a Run command.  Assuming that you have an
     archive which already contains everything you want in it (for software
     distribution, perhaps), then Freshen would be used to update the
     archive.  It was pointed out to us that ARC already knows what is in
     the archive, so it should be able to look on disk for newer versions.
     Now it can.

     The Suppress compression option was added by popular demand.  It
     allows files to be added quickly to an archive, since the files are
     not analyzed or compressed, but merely stored straight.  The intent is
     to allow users to build an archive "in pieces", and then compress all
     of the entries at once with the Convert command.  The conversion is
     much faster if you take advantage of RAMdisk support.

     A minor bug was detected in our handling of date/time stamps which
     occasionally resulted in stamping an archive with the wrong date and
     time.  This has been corrected.

















     ARC                                                           Page  24
     ______________________     CHANGES IN VERSION 5.0

     Several users of ARC have written us to suggest that we should put an
     order form in the documentation.  It seems that several types of
     organizations require something like that or they cannot pay no matter
     how much they'd like to.  While doing that, we also went over the
     documentation from top to bottom and "slicked it up".  It's now a bit
     more of an actual manual.  We think you'll appreciate the table of
     contents as well; we sure do!

     The Move command used to delete the files as it went.  It now waits
     until it is finished updating the archive, and deletes them all at
                 did     once.  (You did know that Move is just an Add where the file gets
     deleted, didn't you?)  This, along with the changes made in version
     4.5, means that it is now much safer to interrupt ARC while it is
     working.

     The Print command no longer prints the name of each file.  Instead, it
     prints a formfeed after each file.

     The Run command now supports BASICA programs.  Also, the filename
     extension is no longer required on the Run command.

     The Garble option was added.  It provides a convenient means of low
     level data security for the casual user.  Use it sparingly, if at all.

     ARC no longer tests for the presence of $ARCTEMP.CRN before creating a
     new one.  If you interrupt ARC a lot, you'll find this much more
     convenient.  If you happen to have a file named $ARCTEMP.CRN which you
     want to keep, too bad.

     Improved error recovery was added when reading an archive.  ARC now
     has a good chance of recovering the data from a corrupted archive (the
     corrupted entry is still lost, of course).

     Path support has been added for all commands, though it doesn't do
     anything on most of them.  For example, there isn't much we can do
     with a path in the List command.  But many users will be glad to know
     that a path can be used when extracting a file, and specifies where
     the file is to be placed.

     Support for the TEMP environment string was added.  If ARC doesn't
     find an environment string named ARCTEMP, then it looks for one named
     TEMP to use instead.  Several packages already use the TEMP string for
     exactly this purpose.  With any luck, maybe we can get a standard
     going.













     ARC                                                           Page  25
     ARC is now using a different variation of Lempel-Zev coding, courtesy
     of Kent Williams, who found it on USENET and adapted it to the IBM PC.
     The new method differs from the old in several respects.  The most
     significant differences are:

     1) Where our previous implementation used a fixed code size of twelve
        bits, the new one starts with a code size of nine bits and
        increases it as it needs to.

     2) The earlier method tended to "choke" on large files when its string
        table filled up.  The new method has a rather ingenious scheme its
                     adaptive reset        authors call adaptive reset.  When it notices that its string table
        has filled, and its compression ratio is starting to suffer, it
        clears the table and starts defining new strings.

     Our benchmarks show an improvement in compression on the order of 10%
     when crunching is used.  Additionally, ARC 5.0 is on the order of 23%
     faster at adding a file when crunching is used, or 13% faster when
     squeezing is used.  Extracting a file crunched with the new method is
     27% faster than it is with the old method.  Extraction of any other
     type of file (including those crunched with the older method) is no
     faster than before.  These figures are based on our own benchmark
     tests; your results may vary.

     The previous implementation of Lempel-Zev coding is no longer used to
     pack files.  The "V" (Verbose listing) command distinguishes between
     the two by referring to the older method as "crunched" (with a lower-
     case "c"), and the newer method as "Crunched" (with a capital "C").


     ARC 5.0 can still read archives created by earlier versions of ARC,
     but once again it creates archives which older versions cannot read.



























     ARC                                                           Page  26

                           PROGRAM HISTORY AND CREDITS                           PROGRAM HISTORY AND CREDITS



     In its short life thus far, ARC has astounded us with its popularity.
     We first wrote it in March of 1985 because we wanted an archive
     utility that used a distributive directory approach, since this has
     certain advantages over the more popular central directory approach.
     We added automatic squeezing in version 2 at the prompting of a
     friend.  In version 2.1 we added the code to test for the best
     compression method.  Now (in October of 1985) we find that our humble
     little program has spread across the country, and seems to have become
     a new institution.

     We are thankful for the support and appreciation we have received.  We
     hope that you find this program of use.


     If we have achieved greatness, it is because we have stood upon the
     shoulders of giants.  Nothing is created as a thing unto itself, and
     ARC is no exception.  Therefore, we would like to give credit to the
     following people, without whose efforts ARC could not exist:


     Brian W. Kernighan and P. J. Plauger, whose book "Software Tools"
     provided many of the ideas behind the distributive directory approach
     used by ARC.

     Dick Greenlaw, who wrote the public domain SQ and USQ programs, in
     which the Huffman squeezing algorithm was first developed.

     Robert J. Beilstein, who adapted SQ and USQ to Computer Innovations
     C86 (the language we use), thus providing us with important parts of
     our squeezing logic.

     Kent Williams, who graciously allowed us to use his LZWCOM and LZWUNC
     programs as a basis for our Lempel-Zev compression logic, and who
     continues to make valuable contributions.

     David Schwaderer, whose article in the April 1985 issue of PC Tech
     Journal provided us with the logic for calculating the CRC 16 bit
     polynomial.

     Terry A. Welch, whose article "A Technique for High Performance Data
     Compression", IEEE Computer Vol 17 No 6 (June 1984) seems to have
     started all the research on Lempel-Zev coding.

     Spencer W. Thomas, Jim McKie, Steve Davies, Ken Turkowski, James A.
     Woods, and Joe Orost, who are the authors of the UNIX compress
     utility.


     And many, many others whom we could not identify.





     ARC                                                           Page  27

                                  SITE LICENSE                                  SITE LICENSE



     Corporate users may wish to obtain a site license for the use of ARC.
     Please use the order form in this manual to order a site license.
     Site licenses are granted as of when we receive your payment.  License
     fees vary depending on the number of computers on which ARC will be
     used, as follows:

          1 to  9 copies  $35 each
         10 to 24 copies  $25 each
         25 to 49 copies  $20 each
         50 to 99 copies  $15 each
         over  99 copies  $1500 one time fee



     The following page is a site license agreement, which should be signed
     and sent with your payment when ordering a commercial site license.






































     ARC                                                           Page  28

     The use of ARC in a commercial environment or government organization
     is granted under the following terms:

     1.  Payment of the license fee must be made to System Enhancement
         Associates.  The fee is based on the number of computers which
         will be used to run ARC, as follows:

               1 to  9 copies  $35 each
              10 to 24 copies  $25 each
              25 to 49 copies  $20 each
              50 to 99 copies  $15 each
              over  99 copies  $1500 one time fee

     2.  You may use ARC on the number of computers included in the license
         fee.  If you have paid the fee for over 99 copies, then you may
         use ARC on any number of computers within your organization.

     3.  You may make copies of the program, in its original,  unmodified
         form,  without restriction.  You may distribute these copies of
         the program without restriction.

     4.  If these copies are distributed outside of your organization,  you
         have no obligation to control the use of those copies which are
         outside of your organization.

     5.  You may make copies of the program documentation, in both its
         printed form and machine readable form, without restriction.

     6.  You may use future versions of ARC under this license.  The latest
         version is available from System Enhancement Associates for a
         small service charge.

     7.  You may NOT modify the program or charge a fee for copying or
         distributing the program.

     8.  It is your responsibility to make the necessary copies and to
         deliver them to the computers which they will be used on.



         I agree to abide by the terms and conditions of this license.


         _____________________________         __________________________
         Signature                             Date

         _____________________________
         Name (please print or type)

         _____________________________
         Title

         _____________________________
         Company




     ARC                                                           Page  29

                                   ORDER FORM                                   ORDER FORM



     Check which items you wish to purchase:

         (_) Noncommercial license for the use of ARC.

         (_) Commercial license for the use of ARC on ___ computers (see
             price schedule and terms on preceding page).

         (_) Program disk and documentation (only on orders of $50 or
             more).

         (_) Program update subscription service (not more than five
             updates, does not include trivial changes), $50/year.

         (_) Payment of $_____ is enclosed (check or money order).

         (_) Please charge $_____ to my (_) Visa or (_) MasterCard:

             Card number: ______________________________

             Expiration date: __________________________

         _______________________________________________
         Name

         _______________________________________________


         _______________________________________________
         Address

         ______________________   ________  ____________
         City                     State     Zip

         _______/_______
         FidoNet address


     Send this completed form to:

                          System Enhancement Associates
                                  21 New Street
                                Wayne, NJ   07470

     For program disk orders outside the U.S., please add an additional $5,
     and enclose an international money order payable in U.S. currency.

     For commercial site license orders, please enclose a signed copy of
     the site license agreement.






     ARC                                                           Page  30

```
{% endraw %}

## FILES417.TXT

{% raw %}
```
------------------------------------------------------------------------
DISK NO 417   A.D.A. PROLOG  VERSION 1.91P                           v4
------------------------------------------------------------------------
Prolog is popular in artificial intellegence circles.  The prolog on this
disk is the public domain version from automata design associates.  They
have other versions which they charge for.
 
PROLOG   ARC  Executable program after it is unsqueezed
ARCDOC   ARC  Squeezed Documention for the PDPROLOG program
READ     ME   Detail about the files on this disk and how to unsqueeze
ARC      EXE  Utility to "Unsqueeze" the files on this disk
GO       BAT  Start up instructions
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## ATNRPT.TXT

{% raw %}
```
..head01rCS680
..foot59ci

                  A Prolog Augmented Transition Network Parser

                               Table of Contents


1.  General                                                         1

2.  ATN Form                                                        1

        Figure 1.  ATN Network                                      1
        Figure 2.  Phrase Network                                   2

3.  Approach                                                        2
                                                                       
        Phase I                                                     2
        Phase II                                                    2
        Phase III                                                   2

4.  Phase I                                                         2

5.  Phase II                                                        3

6.  Phase III                                                       5
                                                                    
        ATNBLD                                                      6
        ATNNEW                                                      8

7.  Conclusions                                                     9

Attachements:                                                       

1.  ATN.PRO                                                         

        Program Listing                                             1-1
        Phase I - Example I                                         1-5
        Phase I - Example II                                        1-6

2.  ATNREV.PRO                                                      

        Program Listing                                             2-1
        Phase II - Example I                                        2-4
        Phase II - Example II                                       2-4

3.  ATNBLD.PRO                                                      

        Program Listing                                             3-1
        Example ATN Definition                                      3-3

4.  ATNNEW1.PRO                                                     

        Program Listing                                             4-1
        Phase III - Example I                                       4-4
        Phase III - Example II (Subject Predicate Agreement)        4-5
..head01rCS680
..foot59c##
                  A PROLOG AUGMENTED TRANSITION NETWORK PARSER

                                  submitted by

                              Ludwig J. Schumacher

                               November 26, 1985


1.  General.  This report documents the development of an Augmented Transition
Network (ATN) sentence parser in the PROLOG language and is submitted in partial
fulfillment of the requirements for CS 680, Natural Language Processing, George
Mason University, Fall 1985.  It is assumed that the reader is familiar with
natural language processing and PROLOG so associated terms will be used without
explanation.  The author had no prior experience with logic programming and does
not presume to evaluate the PROLOG language, only that small subset of commands
he was able to master in attempting to apply the language to this specific
project.  The examples contained herein are executed under A.D.A. PROLOG,
ver 1.6c, (c) Automata Design Associates 1985.


2.  ATN Form.  The form of the ATN which is used in this paper is shown in
Figure 1.  This form has been chosen not as comprehensive coverage of English
sentence structure but to provide a simple form which does incorporate the major
features of ATNs.  Figure 2 is the noun and prepositional phrase network.

              -  Transition from node to node based upon specified conditions.

              -  Optional conditions, such as the determiner and adjective in
                 the noun phrase.
                 
              -  Augmentation with sub-networks such as the noun and
                 prepositional phrases.

              -  Recursiveness such as the adjective in the noun phrase and the
                 noun phrase at node 2.




                                        np              pp
                                      *   *           *   *
                            verb     \/  *      pp   \/ * 
      np  **** >  q1 ************** > q2/ ********** > q3/
      *              *                /\
q0 *                    *    aux      * verb
      *                     *         *
      aux **** >  q4 ************* >  q5
                          np




                             Figure 1.  ATN Network
                   adj
       det      *   *
      ******    \/  *     noun                         prep
qnp *       * >  qnp1 ********** > qnp2/        qpp ****** > qnp
      ******
       jump

                           Figure 2.  Phrase Network


3.  Approach.  The project was conducted in three phases.

    a.  Phase I.  Phase I was experimentation with PROLOG to develop some
working application. An ATN parser was programmed but only by forcing PROLOG
into a procedural mold.  This phase culminated in a briefing presented in class
on 24 October.

    b.  Phase II.  Phase II was the translation of the procedures developed in
Phase I into facts and rules appropriate for a logic program, which would more
fully exploit the capabilities of PROLOG.

    c.  Phase III.  Phase III was additional experimentation to make the programs
more dynamic and to exploit the power of an ATN to pass differing information
depending upon the particular transition.  These experiments included procedures
to automatically update the vocabulary, allow for user defined networks,
refinement of the database search procedures, and incorporation of subject and
predicate agreement verification.


4.  Phase I

    a.  The program developed during Phase I (Attachment 1) is not a logic
program, but a set of procedures executed with the PROLOG language.  Procedures
are defined as a set of 'q' rules which are passed the current node number and
the unparsed and parsed parts of the sentence.  Each set of procedures defined
the actions to be taken at that node. For example, q(0,_) are the procedures for
node 0, q(1,_,_) are the procedures for node 1, etc.

    b.  There are a number of limitations to this approach.

              -  The addition of a node requires a new set of procedures and
modification of the code for each node from which a transition can be made.

              -  It would be difficult to modify the code dynamically, since
procedures must be executed in sequence, and changes would have to be inserted at
specific points.

              -  Elimination of a node requires not only the elimination of the
procedure for that node, but the removal of all calls to that node from other
procedures.

..page
5.  Phase II.  Phase II was the development of a logic program to accomplish the
same functions as that developed during Phase I.  The approach was to translate
the statement, "There is a transition from node X to node Y on condition Z", to
the PROLOG equivalent "arc(X,Y,Z)".  The complete program is at Attachment 2 and
appropriate sections are reproduced below.

    a.  The first step was to redefine the facts.  The transitions are in the
form of arc(from node,to node,condition).

            arc(q0,q1,np).
            arc(q1,q2,verb).
            arc(q2,q2,np).
            arc(q2,q3,pp).
            arc(q0,q4,aux).
            arc(q4,q5,np).
            arc(q1,q5,aux).
            arc(q5,q2,verb).


    b. The terminal nodes are identified by term(at node,empty list), where the
remainder of the sentence is the second variable.

            term(q2,[]).
            term(q3,[]).

    c.  Since phrase transitions are based upon a series of words rather than a
single condition, they are treated as separate networks.  The empty list as the
transition condition is used to effect a jump.

            arc(qnp,qnp1,det).
            arc(qnp,qnp1,[]).
            arc(qnp1,qnp1,adj).
            arc(qnp1,qnp2,noun).
            arc(qpp,qnp,prep).


    d.  With these 'facts' established, one can now use the recursive and
backtracking nature of PROLOG to find a path from the initial point to a
terminal node.

              1)  A sentence is input as a PROLOG list enclosed in brackets and
with each word separated by a comma.  There is no punctuation at the end of the
sentence.  All words must be in lower case.

              2)  Once the sentence, S, has been input, control is passed to the
rule trans (transition).  The variables are: current node, next node, parsed
sentence, sentence remaining to be parsed, and sentence remaining to be parsed
after transition.

         trans(q0,Nq,Parse,S,S1)

..page
              3)  If the current node (Lq) is a terminal node and the remainder
of the sentence (S1) is null, then the sentence has been parsed.

trans(Lq,_,Parse,S1,_) :- term(Lq,S1),nl,
                          print('Completed ',Lq),
                          nl,print(Parse).


              4)  If the next word (S0) is the type (Type) to effect a
transition, then trans is called recursively.  (Note: Nbr is a variable designed
to provide information on the singularity or plurality of the word.  It is not
used in this example.)

trans(Lq,Nq,Parse,[S0|S1],S1) :- word(S0,Type,Nbr),
                                 arc(Lq,Nq,Type),
                                 nl,
                            print('Transition ',Lq,' ',Nq,' ',S0, ' ',Type),
                                 append(Parse,[[Type],S0],P1),
                                 !,
                                 trans(Nq,Z,P1,S1,S2).


              5)  If the next word in the sentence does not establish the
criteria for a transition, check to determine if a phrase does. If so, the rest
of the sentence is checked for the proper phrase, either np or pp. This requires
the separate network check, ptrans, which allows parsing as the network is
transitioned, but will return unchanged if it fails.



trans(Lq,Nq,Parse,S0,S1) :-  arc(Lq,Nq,np),
                             ptrans(qnp,Nq,Lq,S0,[np],Parse).


trans(Lq,Nq,Parse,S0,S1) :-  arc(Lq,Nq,pp),
                             ptrans(qpp,Nq,Lq,S0,[pp],Parse).


              6)  If no word or phrase has been found to effect a
transition, the sentence will not parse.


trans(Lq,Nq,Parse,S0,S1) :- !,nl,
                            print('The sentence failed at ',Lq),
                            nl,print('Parsed ',Parse),
                            nl,print('Left ',S0).


              7)  The phrase transition network code is almost identical to the
primary code, except that it continues to call itself until such time as it
reaches qnp2, which is the terminal node, or fails at a node other than qnp2.
In the first case it will effect a transition to the next node (Nq) and call
trans with the new data.  In the second case, ptrans will fail and conditions
remain unchanged.
ptrans(Bq,Nq,Lq,[S0|S1],Pr,Parse) :- word(S0,Type,Nbr),
                                     arc(Bq,Zq,Type),
                                     append(Pr,[[Type],S0],P1),
                                     !,
                                     ptrans(Zq,Nq,Lq,S1,P1,Parse).

ptrans(qnp2,Nq,Lq,S0,Pr,Parse) :- nl,
                                  print('Transition ',Lq,' ',Nq),
                                  nl,
                                  print(Pr),
                                  append(Parse,Pr,P1),
                                  !,
                                  trans(Nq,Rq,P1,S0,S1).


6.  Phase III

    a.  These programs demonstrate that PROLOG can be used to develop an ATN
parser but still do not exploit the power of PROLOG to operate in a dynamic
environment.  Specific capabilities which should be included are:

              1)  The ATN should be able to provide additional information
beyond whether or not the sentence parsed.

              2)  The program should assist the user in construction of the ATN
definition.

              3)  The program should verify the words are in the vocabulary set
before attempting to parse, and if not, allow them to be added.

              4)  The database search should be efficient. Especially in the
case of a large vocabulary set, the initial form of word(Name,[type]) is
unacceptable in that PROLOG must conduct a linear search of the entire set of
words to identify success or failure.

                        (a)  Dr. Berghel, University of Nebraska, suggested in
his presentation at George Mason that the vocabulary be stored as individual
letters and the search space would be reduced to words of a particular length.
For example, the word 'the' would be in the database as "word(t,h,e)".  In order
to identify if "the" is in the vocabulary set, it is partitioned into the
individual letters and only those words with arity 3 would need to be searched.

                        (b)  An alternative to the use of arity would be to
construct each word as a separate fact.  Thus "the" would be represented as
"the(word)".  It is assumed that PROLOG is more efficient searching a database
of unique facts rather than one of fewer facts differentiated by arity.  There
may, however, be some impact on memory requirements.  It must also be noted that
this would not serve the spelling correction procedure outlined by Dr. Berghel.

                        (c)  A concept which could be integrated with either of
the two approaches outlined above would be to allow the facts which are used
more often to migrate to the front of the list. Specifically, exploit PROLOG's
capability to alter the program by deleting facts when used and adding them to
the front of the list.
    b.  The two programs at Attachments 3 and 4 incorporate some of these
concepts.  Attachment 3 is a listing and example use of the program 'ATNBLD'
which can be used to build the primary transition network.  Attachment 4,
'ATNNEW', uses the network developed by ATNBLD, stores each word as a separate,
unique fact, and identifies sentences in which the subject and predicate are not
in number agreement.

              1) ATNBLD  ATNBLD requests the names of the nodes and the
conditions for transition and establishes a separate database for the network
defined by the user.  The initial node must be entered and all terminal nodes
identified.  Then the user defines paths to each terminal node.

                        (a)  BUILD.  Build is the entry point into the program.
It requests the start node (Q0), the terminal nodes, termnode, then transfers to
flow.  The predicate 'ret', defined in a standard routine, is used to retract
predicates.  It is used here to retract any predicates which would interfere
with the construction of the network.  The predicates generated within the
program are:
 
                        - term: defines that a node is a
                                terminal node

                        - qend: identifies nodes that have a
                                path to a terminal node

                        - arc:  identifies the transitions from
                                node to node


build :- batch,ret(qend),nl,ret(arc),nl,ret(term),asserta(term([],[])),
         consult(node),nl,print('Enter the start node: '),read(Q0),
         asserta(qend(Q0)),termnode,flow(Q0).


termnode :- print('Enter the next terminal node or the word done: '),
            read(QT),
            not(QT=done),
            termck(QT),
            assertfa(node,term(QT,[])),
            asserta(qend(QT)),
            termnode.

termnode  :-  !,true.


termck(Qt)  :-  not(term(Qt,[]));
                nl,print('Terminal node ',Qt,' already entered'),nl.

..page
                        (b)  FLOW.  Flow is the primary control structure.  It
requests the next node and the condition for transition.  It verifies that the
condition is valid, that the arc has not been previously defined, and adds it to
the database. The predicate 'qendck' verifies a path has been completed.

flow(Q0)  :- nl,print('Transition from ',Q0,' to ? '),read(Qnext),
             print(' on condition ? '),read(Con),
             con(Q0,Con),arcck(Q0,Qnext,Con),
             assertfz(node,arc(Q0,Qnext,Con)),
             qendck(Q0,Qnext).

con(Q0,Con) :- condition(Con).

con(Q0,Con) :- nl,print(Con,' is an invalid condition. '),
               flow(Q0).

condition(verb).
condition(noun).
condition(aux).
condition(prep).
condition(aux).
condition(pp).
condition(np).


arcck(Q0,Qn,Z)  :-  not(arc(Q0,Qn,Z));
                    nl,print('Arc from ',Q0,' to ',Qn,' on ',Z,'
                              exits.').


                        (c) The predicate 'qendck' verifies that there is a path
from the end node of the arc just entered to a terminal node.  If not, control
is passed to 'flow', otherwise 'nextnode' allows a new path to be initiated or
the program terminated. Pthck is used to verify that there is a path to each of
the terminal nodes before the program is terminated. Checkstart prevents
isolated nodes from being inserted into the network.


qendck(Q0,Qnext)  :- qend(Qnext),(qend(Q0);asserta(qend(Q0))),nextnode.

qendck(Q0,Qnext)  :-  (qend(Q0);asserta(qend(Q0))),flow(Qnext).


nextnode :- nl,print('Enter next start node or the word done ? '),
            read(Ns),
            not(Ns=done),
            ((checkstart(Ns),
            flow(Ns));nextnode).

..page
nextnode :-  pthck,
             !,retract(term([],[])),
             nl,print('Network completed'),
             listing(arc),listing(term),
             nl,print('Enter name of new ATN file '),read(S),
             update(node,S),forget(node).


nextnode :-  nextnode.


pthck   :-    term(Q,[]),not(Q=[]),not(arc(_,Q,_)),
              nl,print('No path to terminal node ',Q),
              !,fail.

pthck    :-  term([],[]).


checkstart(Ns) :-  qend(Ns);
                   nl,print(Ns,' is an invalid node '),fail.


              2) ATNNEW  One of the features of an ATN vis-a-vis other parsers
is that the path of transversal can be used to provide information. ATNNEW is an
example which demonstrates that this can be accomplished in PROLOG. This
program, which is limited to the ATN in Figure 1, identifies the subject of the
sentence as the noun (or nouns) in the noun phrase used to transition between
nodes q0 and q1, or q4 and q5.  It also uses the 'p' or 's' associated with each
noun or verb and checks the subject and predicate for agreement in number.  The
code for the predicate ptrans, below, is annotated along the right-hand column
with numbers to correspond to the notes below.

 ptrans(Bq,Nq,Lq,[S0|S1],Pr,Parse) :-  S0(Type,Nbr),                       -1
                                       arc(Bq,Zq,Type),
        ( ( not(Type=noun); subj(_) ); asserta(subj(Nbr)) ),               -2
                                       append(Pr,[[Type],S0],P1),
                                       ptrans(Zq,Nq,Lq,S1,P1,Parse).

ptrans(Bq,Nq,Lq,S,Pr,Parse)   :-  arc(Bq,Zq,[]),
                                  ptrans(Zq,Nq,Lq,S,Pr,Parse).


ptrans(qnp2,Nq,Lq,[S0|S1],Pr,Parse) :-  S0=and,(Lq=q4;Lq=q0),              -3
                       ( ( subj(_),retract(subj(_)) ); not(subj(_)) ),     -4
                                        asserta(subj(p)),                  -5
                                        append(Pr,[and],P1),
                                        ptrans(qnp,Nq,Lq,S1,P1,Parse).


ptrans(qnp2,Nq,Lq,[S0|S1],Pr,Parse) :-  S0=and,                            -6
                                        append(Pr,[and],P1),
                                        ptrans(qnp,Nq,Lq,S1,P1,Parse).




ptrans(qnp2,Nq,Lq,S0,Pr,Parse) :-  nl,
                                   print('Transition ',Lq,' ',Nq),
                                   nl,
                                   print(Pr),
                                   append(Parse,Pr,P1),
                                   trans(Nq,Rq,P1,S0,S1).



              -1.  S0 is the next word in the sentence.  Each word is defined as
a unique fact with a type and number (p or s or x).

              -2.  This line establishes the number of the subject as that of
the noun unless one has already been established.  The subject for all sentences
covered by the ATN in Figure 1 will be located in noun phrases parsed before
reaching node q2, hence nouns in noun phrases at node q2 or q3 will be ignored.

              -3.  This predicate is a special provision for the use of 'and' if
the next word is 'and', and we are attempting to transition from node q4 or q0.

              -4.  Retract the predicate subj which contains the number for the
subject.  The not(subj(_)) is actually not required, since the subj has had to
been asserted if the program gets to this point but is included for balance.

              -5.  This part of the clause establishes the number associated with
the subject as plural based on the use of and.

              -6.  This clause accounts for the case of an and in a noun phrase
not at node q0 or q4.

6.  Conclusions.  The programs developed for this project demonstrate that
PROLOG is a powerful language that offers unique capabilities and interesting
potential but little user interface. It is surprising that the power of the
language has not been exploited to enhance the utility.

    a.  Any useful application will require some form of procedure.
Construction of these procedures, such as in the Phase III example, is awkward
in the current language.

    b.  Although all variables are local to a predicate, the dynamic nature of
PROLOG enables the programmer to establish global variables through program
modification.  It is this feature which appears to offer great potential.

    c.  There are some alternative search techniques, beyond the scope of this
paper, which should be evaluated.

    d.  Given that these examples only employ the most rudimentary PROLOG
commands, the language appears to offer a rich environment, limited primarily by
the lack of user interface.



..pgno1
..foot59c1-##
/*                 Augmented Transition Network Program

                                  ATN.PRO

                                 10/22/85
*/


/*  Standard routines for append & membership checking       */


append([],L,L).
append([Z|L1],L2,[Z|L3]) :- append(L1,L2,L3).

printstring([]).
printstring([H|T]) :- put(H), printstring(T).

member(X,[X|_]).
member(X,[_|Y]) :- member(X,Y).


/*  The start module accepts a set of words, enclosed in brackets and
separated by commas.  It calls wordck to verify that each of the words is
in the vocabulary set.   */



start :- batch,nl,print('INPUT'),nl,print('-----'),nl,
         nl,print('Input sentence: '),read(S),nl,
         print('The working set is ',S),wordck(S),!,
         nl,nl,print('TRANSFERS'),nl,nl,print('---------'),nl,nl,q(0,S).



/*  Wordck checks for the end of the set, [], then if the word is in the
vocabulary.  If not, it asks for the category, and adds it to the file
WORD.TEM which is joined with the program after it has run.*/



wordck([])   :-   !,true.

wordck([H|T]) :- word(H,Y),wordck(T).


wordck([H|T]) :-  nl,print(H,' is not a recognized word '),
                  nl,print(' enter verb,aux, .. '),read(Z),
                  wordnew(H,Z),wordck(T).

wordnew(W,Z) :- assertz(word(W,Z)),open('word.tem',ar),
                nlf('word.tem'),
                printf('word.tem', 'word(', W, ',', Z, ').'),
                close('word.tem').


/*  Trans checks the category of the current word (H) versus the category
required to make a transition (Z).  */


trans(H,Z)   :-  word(H,X), member(X,[Z]).


qfail(Nq,S,E)  :-  !, nl,nl,print('The sentence failed at ',Nq),nl,
                 print('The sentence form to this node is ',E),nl,
                 print('The rest of the sentence is ',S),qend1.


qend(Z,E)  :-  nl,nl,print('OUTPUT'),nl,print('------'),nl,nl,
               print('The sentence is:'),nl,nl,print(E),nl,nl,
               print('The sentence is completed at node ',Z),qend1.


qend1 :- open('word.tem',ar),nlf('word.tem'),
         close('word.tem'),exec('ren atn.pro atn.sav'),
         exec('copy atn.sav+word.tem atn.pro'),
         exec('erase atn.sav'),exec('erase word.tem').


/*    Print transfer from node to node */


qout(A,B,C,D,E,F) :- append(E,[C,'(',A,')'],F),
                     nl, print('Transfer from node ',B,' to node ',D,
                     ' by word ',A,' evaluated as a ',C).


/*   Main program to check the conditions for transfer from node to node.
     The first number is the number of the node, i.e. q(0.. is node 0.
     The module either checks for a word type and transfers control
     directly, or passes to np / pp the next node.                    */


/*  Node 0 - aux to 4 / np to 1 / or fail          */


q(0,[H|T])  :-  trans(H,[aux]),!,qout(H,0,[aux],4,E,F), q(4,T,F).

q(0,[H|T])  :-  np(H,T,1,[],0,[np]).

q(0,S)      :-  qfail(0,S,[]).


/*  Node 1 - verb to 2 / aux to 5 / or fail    */


q(1,[H|T],E)  :-  trans(H,[verb]),!,qout(H,1,[verb],2,E,F), q(2,T,F).

q(1,[H|T],E)  :-  trans(H,[aux]),!, qout(H,1,[aux],5,E,F), q(5,T,F).

q(1,S,E)      :-  qfail(1,S,E).

/*  Node 2 -  null to end / np to 2 / pp to 3 / or fail     */


q(2,H,E)      :- member(H,[[]]), !,
                   qend(2,E).

q(2,[H|T],E)  :-  np(H,T,2,E,2,[np]).


q(2,[H|T],E)  :-  pp(H,T,3,E,2,[pp]).

q(2,S,E)      :-  qfail(2,S,E).


/*  Node 3 - null to end / or fail         */


q(3,H,E)  :- trans(H,[]), !,
             qend(3,E).

q(3,S,E)      :-  qfail(3,S,E).



/*  Node 4 - np to 5 / or fail           */


q(4,[H|T],E)  :-  np(H,T,5,E,4,[np]).

q(4,S,E)      :-  qfail(4,S,E).



/*  Node 5 - verb to 2 / or fail         */


q(5,[H|T],E)  :-  trans(H,[verb]),!, qout(H,5,[verb],2,E,F), q(2,T,F).

q(5,S,E)      :-  qfail(5,S,E).



/*  Noun phrase -  (det) (adj) (adj) .. noun        */

/*  The np1 clause is required to allow recursive calls for adj   */


np(H,[S|T],Nq,E,Lq,G)  :-  trans(H,[det]), !,
                           append(G,['det(',H,')'],G1),
                           np1([S|T],Nq,E,Lq,G1).


np(H,Z,Nq,E,Lq,G)      :-  np1([H|Z],Nq,E,Lq,G).



np1([H|T],Nq,E,Lq,G)  :-  trans(H,[adj]),
                          append(G,['adj(',H,')'],G1),
                          np1(T,Nq,E,Lq,G1).


np1([H|T],Nq,E,Lq,G)  :- trans(H,[noun]),!,nl,
                         append(G,['noun(',H,')'],G1),
                         append(E,G1,F),
                         print('Transfer from node ',Lq,' to ',Nq),
                         print(' by ',G1),q(Nq,T,F).


/*  Prep phrase requires a prep followed by a np   */


pp(H,[S|T],Nq,E,Lq,G)  :-  trans(H,[prep]),
                           append(['prep(',H,')'],G,G1),
                           np(S,T,Nq,E,Lq,G1).


/*   Word defines the vocabulary set                  */


word(the,[det]).
word(boy,[noun]).
word(runs,[verb]).
word(happy,[adj]).
word(john,[noun]).
word(can,[aux]).
word(run,[verb]).
word(a,[det]).
word(big,[adj]).
word(small,[adj]).
word(girl,[noun]).
word(dog,[noun]).
word(on,[prep]).
word(pretty,[adj]).
word(fast,[adj]).
word(barks,[verb]).
word(to,[prep]).
word([],[]).
word(giant, [noun]).
word(is, [verb]).
word(giant, [noun]).
word(is, [verb]).
word(sleeps, [verb]).
word(mary, [noun]).
word(likes, [verb]).

..pgno1
..foot59c2-##
/*                 Augmented Transition Network Program

                                ATNREV.PRO

                                 11/24/85
*/


/*  Standard routines for append & membership checking       */


append([],L,L).
append([Z|L1],L2,[Z|L3]) :- append(L1,L2,L3).

printstring([]).
printstring([H|T]) :- put(H), printstring(T).

member(X,[X|_]).
member(X,[_|Y]) :- member(X,Y).


/*  The start module accepts a set of words, enclosed in brackets and
separated by commas.  It calls wordck to verify that each of the words is
in the vocabulary set.   */


start :- batch,nl,print('INPUT'),nl,print('-----'),nl,
         nl,print('Input sentence: '),read(S),nl,
         print('The working set is ',S),wordck(S),!,
         nl,nl,print('TRANSFERS'),nl,nl,print('---------'),nl,nl,
         Parse=[],
         trans(q0,Nq,Parse,S,S1).


/*  Wordck checks for the end of the set, [], then if the word is in the
vocabulary.  If not, it asks for the category, and adds it to the file
WORD.TEM which is joined with the program after it has run.*/


wordck([])   :-   !,true.

wordck([H|T]) :- word(H,_,_),wordck(T).


wordck([H|T]) :-  nl,print(H,' is not a recognized word '),
                  nl,print(' enter verb,aux, .. '),read(Z),
                  wordnew(H,Z),wordck(T).

wordnew(W,Z) :- assertz(word(W,Z,s)),open('word.tem',ar),
                nlf('word.tem'),
                printf('word.tem', 'word(', W, ',', Z, ').'),




/*  The arcs are defined in terms of from node, to node, condition.
Terminal nodes are identified with the empty list.  Words are defined by
type word name, type, and a character to be used in later examples with the
number (plural or singular).  */


arc(q0,q1,np).
arc(q1,q2,verb).
arc(q2,q2,np).
arc(q2,q3,pp).
arc(q0,q4,aux).
arc(q4,q5,np).
arc(q1,q5,aux).
arc(q5,q2,verb).

term(q2,[]).
term(q3,[]).


word(boy,noun,s).
word(boys,noun,pl).
word(run,verb,pl).
word(runs,verb,s).
word(the,det,s).

arc(qnp,qnp1,det).
arc(qnp,qnp1,_).
arc(qnp1,qnp1,adj).
arc(qnp1,qnp2,noun).
arc(qpp,qnp,prep).


/*  Trans recursively checks the conditions for transition from the last
node (Lq) to the next node (Nq).  Phrases are specifically treated as pp or
np in order to allow the type of phrase to be identified in the parsed
sentence.  */


trans(Lq,_,Parse,S1,_) :- term(Lq,S1),nl,
                          print('Completed ',Lq),
                          nl,print(Parse).


trans(Lq,Nq,Parse,[S0|S1],S1) :-  word(S0,Type,Nbr),
                                  arc(Lq,Nq,Type),
                                  nl,
                                  print('Transition ',Lq,' ',Nq,' ',S0,
                                            ' ',Type),
                                  append(Parse,[[Type],S0],P1),
                                  !,
                                  trans(Nq,Z,P1,S1,S2).


trans(Lq,Nq,Parse,S0,S1) :-  arc(Lq,Nq,np),
                             ptrans(qnp,Nq,Lq,S0,[np],Parse).


trans(Lq,Nq,Parse,S0,S1) :-  arc(Lq,Nq,pp),
                             ptrans(qpp,Nq,Lq,S0,[pp],Parse).



trans(Lq,Nq,Parse,S0,S1) :- !,nl,
                            print('The sentence failed at ',Lq),
                            nl,print('Parsed ',Parse),
                            nl,print('Left ',S0).

/*  Ptrans checks the transition of the phrase network.  The first clause
calls itself recursively until node qnp2 has been reached, which concludes
the transition.  Success results in trans being called  with the new node.
Failure returns the trans with conditions unchanged.  */


ptrans(Bq,Nq,Lq,[S0|S1],Pr,Parse) :-  word(S0,Type,Nbr),
                                arc(Bq,Zq,Type),
                                append(Pr,[[Type],S0],P1),
                                !,
                                ptrans(Zq,Nq,Lq,S1,P1,Parse).

ptrans(qnp2,Nq,Lq,S0,Pr,Parse) :-  nl,
                                   print('Transition ',Lq,' ',Nq),
                                   nl,
                                   print(Pr),
                                   append(Parse,Pr,P1),
                                   !,
                                   trans(Nq,Rq,P1,S0,S1).

..page
..pgno1
..foot59c3-##
/*        PROGRAM TO BUILD PRIMARY AUGMENTED TRANSITION NETWORK

                                ATNBLD.PRO

                                 11/24/85

*/


/*  Build is the entry point into the program.  It requires that the
program with standard routines and the program node, which is empty, have
already been consulted.  */

/*  The program requests the start and terminal nodes, the paths and
transition conditions, then establishes a node program with a name
specified by the user.  */

/*  Ret removes any data from memory which might interfere with network
construction.  Term([],[]) is required to prevent failure when checkint
terminal conditions.  Qend identifies all nodes for which there is a path
to a terminal node.  The start node is identified initially since the
program will require this path be completed before any other can be
constructed.  Termnode accepts the terminal nodes.  Flow accepts the
transition arcs and conditions.  */


build :- batch,ret(qend),nl,ret(arc),nl,ret(term),asserta(term([],[])),
         nl,print('Enter the start node: '),read(Q0),
         asserta(qend(Q0)),termnode,flow(Q0).


termnode :-  print('Enter the next terminal node or the word done: '),
             read(QT),
             not(QT=done),
             termck(QT),
             assertfa(node,term(QT,[])),
             asserta(qend(QT)),
             termnode.

termnode  :-  !,true.


/*  Flow requests transitions from node to node and adds each arc and new
node to the database.  Qendck will continue to call flow until such time as
a terminal node has been reached then allow a new path to be initiated.  */



flow(Q0)  :- nl,print('Transition from ',Q0,' to ? '),read(Qnext),
             print(' on condition ? '),read(Con),
             con(Q0,Con),arcck(Q0,Qnext,Con),
             assertfz(node,arc(Q0,Qnext,Con)),
             qendck(Q0,Qnext).

con(Q0,Con) :- condition(Con).

con(Q0,Con) :- nl,print(Con,' is an invalid condition. '),
               flow(Q0).

termck(Qt)  :-  not(term(Qt,[]));
                nl,print('Terminal node ',Qt,' already entered'),nl.

arcck(Q0,Qn,Z)  :-  not(arc(Q0,Qn,Z));
                    nl,print('Arc from ',Q0,' to ',Qn,' on ',Z,' exits.').

qendck(Q0,Qnext)  :-  qend(Qnext),(qend(Q0);asserta(qend(Q0))),nextnode.

qendck(Q0,Qnext)  :-  (qend(Q0);asserta(qend(Q0))),flow(Qnext).


/*  Nextnode allows a new path to be initiated or the program to be
terminated.  Before termination it calls pthck to insure there is a path to
each terminal node.  Checkstart prevents an isolated node from being
entered.  */

nextnode :-  nl,print('Enter next start node or the word done ? '),
             read(Ns),
             not(Ns=done),
             ((checkstart(Ns),
             flow(Ns));nextnode).

nextnode :-  pthck,
             !,retract(term([],[])),
             nl,print('Network completed'),
             listing(arc),listing(term),
             nl,print('Enter name of new ATN file '),read(S),
             update(node,S).

nextnode :-  nextnode.

pthck   :-    term(Q,[]),not(Q=[]),not(arc(_,Q,_)),
              nl,print('No path to terminal node ',Q),
              !,fail.

pthck    :-  term([],[]).

checkstart(Ns) :-  qend(Ns);
                   nl,print(Ns,' is an invalid node '),fail.

/*  Condition lists the acceptable conditions for a transition.   */

condition(verb).
condition(noun).
condition(aux).
condition(prep).
condition(aux).
condition(pp).
condition(np).
..pgno1
..foot59c4-##
/*              FINAL AUGMENTED TRANSITION NETWORK PROGRAM

                                ATNNEW1.PRO

                                 11/24/85
*/


/*  Start is the entry into the program.  It requires that a set of
standard routines has already been consulted (append in particular).  It
allows the user to specify the network program, which can be build using
ATNBLD.  Words is a file with the vocabulary set.  The sentences is a list
of words separated by commas and enclosed in brackets.  Wordck verifies
that the words are in the vocabulary set, and if not requests required
data. Parse is the sentence as it is parsed.  Trans controls the flow from
node to node.  */

start :- nl,print('ATN network file? '),read(Fn),
         consult(Fn),nl,
         asserta(file(Fn)),
         consult(words),nl,
         batch,nl,print('INPUT'),nl,print('-----'),nl,
         nl,print('Input sentence: '),read(S),nl,
         print('The working set is ',S),wordck(S),
         nl,nl,print('TRANSFERS'),nl,nl,print('---------'),nl,nl,
         Parse=[],
         trans(q0,Nq,Parse,S,S1).


wordck([])   :-   true.

wordck([H|T]) :- H(_,_),wordck(T).

wordck([H|T]) :-  nl,print(H,' is not a recognized word '),
                  nl,print(' enter verb,aux, .. '),read(Z),
                  nl,print(' enter p or s or x  '),read(Z1),
                  wordnew(H,Z,Z1),wordck(T).

wordnew(W,Z,Z1) :- assertfz(words,W(Z,Z1)).


/*  Since the phrase transition network includes more specific procedures
than the primary network, it is included in this program rather than in the
network file consulted by start.  It could be more dynamic, but that was
considered beyond the scope of this project.  */


arc(qnp,qnp1,det).
arc(qnp,qnp1,[]).
arc(qnp1,qnp1,adj).
arc(qnp1,qnp2,noun).
arc(qpp,qnp,prep).


/*  Trans controls the flow along the network.  If a terminal node has been
reached and the entire sentence has been parsed, the agreement in number
(plural or singular) between the subject and predicate is checked.  If they
do not agree, this fact is displayed.  Update words creates a file
WORDS.$$$ which contains the new vocabulary.

If a conditions for termination has not been met, trans checks for a
transition word or a transition phrase.  If none of these conditions are
met, the sentence will not parse.

When a verb is encountered the number (singular or plural) is 'filed'.
This procedure is unique for a specific network in which only one verb can
be encountered.  */

trans(Lq,_,Parse,S1,_) :- term(Lq,S1),nl,
                          print('Completed ',Lq),
                          nl,print(Parse),
                       (  ( subj(Nbr),pred(Nbr) );
                      (nl,print('The subject and predicate do not agree.')
                          ) ),
                          update(words),
                          exec('erase words.pro'),
                          exec('ren words.$$$ words.pro'),
                          forget(words),
                          file(Fn),
                          forget(Fn),
                          endclr.

endclr :-  (not(file(_));ret(file)),(not(subj(_));ret(subj)),
           (not(pred(_));ret(pred)).


trans(Lq,Nq,Parse,[S0|S1],S1) :-  S0(Type,Nbr),
                                  arc(Lq,Nq,Type),
                                 ((Type=verb,asserta(pred(Nbr)));
                                     not(type=verb)),
                                  nl,
                                  print('Transition ',Lq,' ',Nq,' ',S0,
                                            ' ',Type),
                                  append(Parse,[[Type],S0],P1),
                                  trans(Nq,Z,P1,S1,S2).


trans(Lq,Nq,Parse,S0,S1) :-  arc(Lq,Nq,np),
                             ptrans(qnp,Nq,Lq,S0,[' '+np],Parse).

trans(Lq,Nq,Parse,S0,S1) :-  arc(Lq,Nq,pp),
                             ptrans(qpp,Nq,Lq,S0,[' '+pp],Parse).

trans(Lq,Nq,Parse,S0,S1) :- nl,
                            print('The sentence failed at ',Lq),
                            nl,print('Parsed ',Parse),
                            nl,print('Left ',S0),
                            endclr.
/*  Ptrans checks the transition of the phrase network.  It calls itself
recursively until node qnp2 is reached.  Provisions are included to
establish the number (plural or singular) of the subject, which is designed
for a specific network in which the noun phrase in which the subject is
located will be encountered before any other noun phrase.

The upon reaching qnp2 a check is made for the word 'and'.  If encountered,
the number of the subject is changed to plural and a check for another noun
phrase is initiated.

The spacing of the parenthesis is to facilitate reading of the code.  */


ptrans(Bq,Nq,Lq,[S0|S1],Pr,Parse) :-  S0(Type,Nbr),
                                arc(Bq,Zq,Type),
                          (
                             (
                                 not(Type=noun);

                                 subj(_)
                                          );
                                 asserta(subj(Nbr))
                                                  ),
                                append(Pr,[[Type],S0],P1),
                                ptrans(Zq,Nq,Lq,S1,P1,Parse).

ptrans(Bq,Nq,Lq,S,Pr,Parse)   :-  arc(Bq,Zq,[]),
                                  ptrans(Zq,Nq,Lq,S,Pr,Parse).


ptrans(qnp2,Nq,Lq,[S0|S1],Pr,Parse) :-  S0=and,(Lq=q4;Lq=q0),
                                       ( ( subj(_),retract(subj(_)) );
                                         not(subj(_)) ),
                                         asserta(subj(p)),
                                          append(Pr,[and],P1),
                                          ptrans(qnp,Nq,Lq,S1,P1,Parse).


ptrans(qnp2,Nq,Lq,[S0|S1],Pr,Parse) :-  S0=and,
                                          append(Pr,[and],P1),
                                          ptrans(qnp,Nq,Lq,S1,P1,Parse).




ptrans(qnp2,Nq,Lq,S0,Pr,Parse) :-  nl,
                                   print('Transition ',Lq,' ',Nq),
                                   nl,
                                   print(Pr),
                                   append(Parse,Pr,P1),
                                   trans(Nq,Rq,P1,S0,S1).
```
{% endraw %}

## SKOLEM.DOC

{% raw %}
```
Contributed by Jim Adams of Bendix Aerospace.

The files "SKOLEM.OPS" and "SKOLEM.PRO" implement the translate 
program described in C&M Appendix B and discussed in Chapter 10.  
This is the program that translates predicate calculus statements 
into Prolog statements.  The program is named SKOLEM.PRO and is 
started on the command line with "pdprolog SKOLEM.OPS".  To 
translate a predicate calculus statement you type, e.g. Three 
sample predicate calculus statements are included in "SKOLEM.OPS" 
and may be commented out.


     ?- translate(all(X,s(X)<->exists(Y,e(X,Y)))).
The answer should be something like:
     s(X_1) :- e(X_1,Y_10).
     e(X_1,f1(X_1) :- s(X_1).
(The particular example comes from "x is a set iff there is a y
such that x is an element of y", the first axiom of set theory.)
The op codes are found in trans.ops and follow C&M:
             <->   if and only if
              ->   implies
              &    and
              #    or
              ~    not


```
{% endraw %}

## PROLOG.DOC

{% raw %}
```
















                           AUTOMATA DESIGN ASSOCIATES














                     A.D.A PROLOG Documentation Version 1.91P
                  for the Educational and Public Domain Versions

                                December 26, 1986

              Copyright Robert Morein and Automata Design Associates

                                 1570 Arran Way
                               Dresher, Pa. 19025

                                 (215)-646-4894



























                                      News

        A.D.A.  offers  the first Prolog with a Cyclic Structure  Unifier 
        for the IBM PC.

             Jim   Adams   of   Bendix  Aerospace   has   contributed   a 
        skolemizer  program  (look for the file "LOGIC.ARC".  This  nifty 
        thing takes statements written in the formalism of the  predicate 
        calculus  and  converts them to prolog Horn clauses.  You  should 
        refer to chapter 10 of Clocksin and Mellish for explanation.


             Take a look at the chess endgame program in "games."

             Simon   Blackwell's   "PIE"  Truth  Maintenance  System   is 
        presented in revised, debugged, and enlarged form. This system is 
        found  in  the  directory  "expert"  and  augments  the  strictly 
        deductive  capabilities  of raw Prolog with additional  forms  of 
        reasoning.  PIE  has a syntax that resembles colloquial  English. 
        Wait till you see the backwards quote marks!

             The predicates "batch" and "nobatch" are introduced to allow 
        execution  of batch files without confusing messages and  prompts 
        appearing on the screen. I've put one in Simon's "KOPS" file.

































                                        1








                                Copyright Notice

             The  public domain PD PROLOG system has been contributed  to 
        the  public domain for unrestricted use with one  exception:  the 
        object  code  may not be  disassembled  or  modified.  Electronic 
        bulletin  boards  and SIG groups are urged to aid in giving  this 
        software the widest possible distribution.

             This documentation may be reproduced freely,  but it may not 
        be  included in any other documentation without the permission of 
        the author.














































                                        2








                                  Introduction

        We  hope  that you'll get some fun out of this  PROLOG.  It  will 
        afford  you exposure to THE fifth generation language at the cost 
        only  of  some  intellectual  effort.  The  motive  is  perfectly 
        explicable:  We  want you to think of Automata Design  Associates 
        for  fifth  generation  software.  It also gives us a  nice  warm 
        feeling.

        The  minimum  memory  requirement is 200 k of  transient  program 
        area,  plus  whatever  space is needed to execute  programs  from 
        within PROLOG.  DOS or MSDOS 2.0 are required.  The program  does 
        not  require  IBM PC compatibility to run,  although  the  screen 
        access routines do require compatibility.











































                                        3








                     Products by Automata Design Associates

             Automata  Design  Associates  specializes  in  software  for 
        artificial  intelligence  and  robotic  applications.   A  PROLOG 
        language  system is available in various configurations.  A  LISP  
        interpreter will be introduced in March of 1985.
         


        1. LISP systems

             PD LISP

        PD  LISP is a public domain Common LISP subset.  It comes with  a 
        150 page instruction manual on disk, and is available from us for 
        $10.00.

             .UNX LISP

        UNX LISP, written by Dave Morein, is a Common LISP subset. It has 
        nifty  things like SAVE/RESTORE,  which let you stop a job in the 
        middle,  save  it,  and start it up again,  and  tree  structured 
        lexical scoping. It is available from us for $69.95.


































                                        4








        II. PROLOG Systems

             There  are  six versions of PROLOG available  from  Automata 
        Design Associates.  The systems run under the MSDOS or PCDOS. All 
        of them access all available memory up to 1 megabyte.

        .Public Domain PROLOG

        This  serves to further the general awareness of the public about 
        PROLOG.  It  also is an excellent adjunct to anyone learning  the 
        language.  Most  of  the core PROLOG described  by  Clocksin  and 
        Mellish  in  the book Programming In  PROLOG  is  implemented.  A 
        complete  IBM PC video screen support library is included in this 
        and  all other A.D.A.  prologs.  Trace predicates are  not.  This 
        version is available from us for $10.00 postage paid.


        .Educational PROLOG

        At  extremely modest cost this affords an educational institution 
        or  individual  a  PROLOG  system  which  provides  the   maximum 
        available  programming  area  available  within  the  8086  small 
        programming model.  Tracing,  a debugging aid,  allows monitoring 
        a program as it runs.  User settable spy points selectively allow 
        this.  Exhaustive  tracing  is also  available.  I/O  redirection 
        gives some file ability.

             An  "exec"  function allows the execution of  a  program  or 
        editor  from  within  PROLOG,  thus  encouraging  an  interactive 
        environment.

             An  "interrupt"   menu is added,  permitting the control  of 
        tracing, toggling the printer, and screen printing.

             Definite clause grammar support is now included.
             
             The cost of Educational PROLOG is $29.95.



        .FS PROLOG

             A  small  increment  in price adds full random  access  file 
        capability. Character and structure I/O are allowed.

             The  "asserta and "assertz" predicates are expanded and work 
        with a clause indexing ability.  One can assert clauses  anywhere 
        in the database under precise pattern matching control. 

             A tree structured lexical scoping system and floating  point 
        arithmetic are other enhancements.

             The cost of FSM PROLOG is $49.95




                                        5









        .VMI PROLOG -- Virtual Memory (Replaces type VMS)


             At reasonable cost the addition of virtual memory gives  an 
        expansion of capabilities of an order of magnitude. 

             The  database on disk is treated transparently.  No  special 
        provisions  need  be  made  by the  user.  Virtual  and  resident 
        databases  may be mixed.  A unique updating algorithim  preserves 
        the format of the database as typed by the user while making only 
        those changes necessary to make it equivalent to the database  in 
        central memory.

             The cost of VMI PROLOG is $99.95










































                                        6








        .VML PROLOG Large model Virtual Memory System

             A.D.A.  PROLOG is a remarkable fifth generation developement 
        tool  for  the  implementation  of  intelligent  strategies   and 
        optimized  control.  It  is both the kernel for  applications  of 
        virtually  unlimited scope and a sophisticated developement  tool 
        that multiplies the productivity of the programmer many times. 

             Conventional  Prolog  is based on the first order  predicate 
        calculus.   VML   emulates  the  second  order   calculus,   with 
        unconstrained   manipulation   of   cyclic,    self   referential 
        structures.  The  cyclic unifier is selectable by a mode  switch, 
        with no loss of compatibility. 

             Perhaps  only  one  other Prolog system,  written  by  Alain 
        Colmareur,  permits manipulation of cyclic structures.  Permitted 
        by the second order predicate calculus, but not the first, cyclic 
        structures are self referential, or recursively defined.

             A conventional Prolog system typically crashes when a cyclic 
        structure  is  found,  because  such a structure  appears  to  be 
        infinite. But with our Cyclic Unifier, available in types VML and 
        VMA Prolog, cyclic structures can be handled with impunity.

             Many  structures in nature are cyclic,  and we suggest  that 
        many applications will appear to the user.  For example, consider 
        the  benzene ring,  which chemists refer to as a cyclic  aromatic 
        hydrocarbon:
                                        

                                 H             H        
                                  \          /          
                                    C ===== C           
                                  /           \         
                                 /             \        
                          H --- C                C --- H
                                 \\            //       
                                  \\          //        
                                    C ----- C           
                                  /           \         
                                 H             H        
                                            

        This  might  be represented in Prolog by a  cyclic  structure  as 
        follows:
                                            
                                            
               X = [ [[c,h]],[c,h],[[c,h]],[c,h],[[c,h]],[c,h]|X]

        It  would  appear that groups and topological properties  can  be 
        succinctly described as cyclic structures.  A simple group can be 
        expressed as follows:

                                 X = [a,b,c|X]. 



                                        7








        Then  the cyclic nature of the group can be observed  with 
        the goal "member( M, X )", which gives:

                      a,b,c,a,b,c,a,b,c,....(ad infinitum)

             With  a  cost/performance ratio exceeding that of any  other 
        product  and  a  compatibility  insured  by  compliance  to   the 
        Edinburgh syntax, performance is enhanced by numerous extensions, 
        many of them invisible to the user.

             A quick overview of some of the features discloses:

             1)  This  system now incorporates a cyclic  structure 
             unifier.  The  only  other Prolog system  capable  of 
             unifying  cyclic structures is PrologII,  written  by 
             the inventor of Prolog, Alain Colmerauer. 

             2)  Invisible  compilation  to  a  semantic  network 
             preserves the flexibility of the interpreted mode and 
             the speed of a compiler.

             The  programmer can compile and recompile any portion 
             of a module at any time.  The edit/compile/test cycle 
             is short and free of strain. An interface is provided 
             to an editor of choice.


             3) Floating point arithmetic with a full  complement 
             of  input  and  output  methods,  transcendental  and 
             conversion functions.


             4)  Virtual  memory.  Module  size  and  number  are 
             unrestricted,   with  a  total  capacity  of  several 
             hundred megabytes.  Resident and virtual modules  may 
             be co-resident. Compilation is incremental. The cache 
             algorithim  is  sophisticated.  Changes made  in  the 
             database can be updated to disk by a single command.


             5) A powerful exec function and acceptance of  stream 
             input make  integration into  applications practical.


             6)  Global polymorphic variables  retain  information 
             that  would  otherwise  require  the  "assertion"  of 
             facts.


             7)  A  quoted  variable class,  borrowed  from  LISP, 
             permits  referencing variables as objects as well  as 
             by value.





                                        8








             8) Multidimensional arrays,  dynamically created  and 
             destroyed,  efficiently  store numeric and nonnumeric 
             structures. Arrays are ideal for representing spatial 
             and ordinal relationships.
             
             9)  Debugging facilities let you see your program run 
             without any additional generation steps.


             10)  Totally   invisible  and   incremental   garbage 
             collection.   There   is  NEVER  any  wait  for  this 
             function.


             11)  A  tree  structured,   dynamically  configurable 
             lexical scoping system. The work of many  programmers 
             can  be coupled together in the form of libraries and 
             nested domains. 

             Each lexically scoped domain is a hidden space  which 
             communicates  with the parent domain via exports  and 
             imports. Domains can be linked together under program 
             control to achieve any desired configuration.


             12) The Grammar Rule Notation is an integral feature.


             13) Keyword redefinition makes porting code easy.


        The  cost  of this system is $200 for the MSDOS version.



        .VMA PROLOG Large model Virtual Memory System

        This  system  has  additional forms of  virtual  memory.  It  was 
        intended  for  deep  reasoning  problems.  Contact  us  for  more 
        information.

















                                        9








                             Prolog Runtime Systems


             The A.D.A.  Runtime Systems permit distribution of  debugged 
        code in source form without royalties.  A Runtime System provides 
        all  of  the facilities of the corresponding  Development  System 
        except for:

             1) Tracing.

             2)  The  console  command loop.  

        A  Runtime  System is invoked from the DOS command line  with  an 
        argument specifying a stream file that replaces the console.  The 
        stream file is a UNIX* innovation that allows applications to  be 
        connected by "pipes", in a convenient, high level manner.

             All  the  other  development  facilities  remain  available, 
        including  multiple modules and virtual memory.  Since update  to 
        disk  is  included,  the ability of the system to  learn  is  not 
        impaired in any way.  Compare this to our competitors, whose hard 
        compiled  code results in fixed goals and inability to change the 
        distribution on a dynamic basis.

             Four versions are available.  Each is priced the same as the 
        corresponding development system,  and can be distributed without 
        royalty by the license holder with his applications:
             
             
                  FS  Runtime - $50.00
                                 
                  VMI Runtime - $100.00

                  VML Runtime - $200.00

                  VMA Runtime - $250.00

             The above systems are in stock for immediate delivery.


             * trademark AT&T
















                                       10








                                 Upgrade Policy

             Half the cost of any A.D.A. PROLOG system may be credited to 
        the purchase of a higher level version.      The full cost of VMS 
        prolog  may  be  applied to the purchase of VMI  or  VML  PROLOG. 
        Updates to a particular level product vary from $15.00 to $35.00.


                                Run-time Packages

             Software  developers wishing to integrate an A.D.A.  product 
        into  their  system  should inquire  about  specialized  run-time 
        packages available at reasonable cost.



                              Technical Information

             Technical information may be obtained at (215) - 646- 4894

             Perhaps we can answer the following questions in advance:

             There is no support for:  APPLE II, Atari, Commodore, or  
        CPM 80 .  Other machines from these manufactures may be supported 
        in the future.

             The MSDOS products are available on 5" and 8" diskettes.



                              To Place Your Order:

             You may place your order at the following number:

                        (215)-646-4894   - day and night.



                                     Returns

             The  software may be returned within 30 days of purchase for 
        a full refund.  This applies whether or not the software has been 
        used.  We do ask that manuals, disks and packaging be returned in 
        excellent condition.













                                       11








                                  Installation

             You will need an IBM PC compatible machine with a minimum of 
        256  kbytes  of  memory.  ED PROLOG benefits from  all  available 
        memory up to the 1 megabyte INTEL limit.

             To  determine the amount of TPA your machine  has,  run  the 
        "chkdsk" program which is supplied with DOS. The last line reads:

                                XXXXXX bytes free

        where XXXXXX is a six digit number.

        If  this  number  is greater than 200000,  ED  PROLOG  will  have 
        reduced workspace.  If it's over 245000,  the amount of memory is 
        optimal. If this is not the case, there are two possibilities:

        1) The machine doesn't have enough memory.

        2)  Something  else is removing memory from TPA,  such as  a  co-
        resident  program,  a  ramdisk,  a large dos driver,  or a  large 
        number of file or disk buffers.

        If  you're  short of memory,  make sure that no  other  programs, 
        ramdisks,  or drivers besides DOS are running in the machine. You 
        may find it helps to eliminate (by renaming) the config.sys  file 
        when you intend to run ED PROLOG.


                      How to run the Demonstration Programs 
                        without Knowing What You're Doing

             We strongly advise that you purchase the book Programming in 
        PROLOG by Clocksin and Mellish,  publisher Springer Verlag, 1981. 
        For  the  impatient we give some advice.  Type the  demonstration 
        program you wish to run.  There must be at least one entry  point 
        within  the  program.  

        Note:  Please  understand that these are demonstrations programs. 
        Regarding  user  interface,  they are poorly  written.  You  will 
        probably have to read Clocksin and Mellish to appreciate that the 
        following examples of input are not equivalent: "yes." , "yes" .

             The program fragment "console" shows how you may improve the 
        console input routines of any of these programs.
             

        The Hematology Diagnosis Program - "hemat"

             Although  the  logical structure is not as sophisticated  as 
        that of "animals", it is interesting for several reasons:

             1)  The  program  evaluates numerical data to  arrive  at  a 
        diagnosis.



                                       12








             2) Although inaccurate, it demonstrates that useful question 
        answering systems are not difficult to write in PROLOG.

             3)  There  are  some mistakes in  the  program,  which  only 
        slightly impede its usefulness. 

             This  program  uses  structure  input.  Terminate  all  your 
        answers with a period, as in "y.<CR>", or "no.<CR>".
        The starting point is "signs.<CR>".  PROLOG will prompt  you 
        for  signs  of  anemia.  The  program attempts  to  diagnose  two 
        varieties of a hemolytic anemia.
             The program could use a good working over by a  hematologist 
        and we would be delighted to collaborate.


        Prime Number Generator - "sieve"

             This  program demonstrates that anything can be programed in 
        PROLOG if one tries hard enough.  Asking the  question   
          "primes( 50, L ).<CR>" causes a list of prime numbers less than 
        50  to be printed out.  "Sieve" is heavily recursive and  quickly 
        exhausts the stack space of the small model interpreters.


        Grrules

             This  is  an  example  of the use  of  the  definite  clause 
        grammer  notation.  PD  PROLOG  does not  have  this  translation 
        facility,  but ED PROLOG and  all of our other versions do. It is 
        possible  to  perform  the  translations  by  hand  if  you  have 
        thoroughly  read  C  & M.  Then you would have  the  pleasure  of 
        asking:

                 ?-sentence( X, [every,man,loves,a,woman], [] ).

        and  having the meaning elucidated as a statment in the predicate 
        calculus.




















                                       13








                               Special Offer  # 1

             For  some  inexplicable reason,  demonstration programs  are 
        hard to come by. We are too busy writing PROLOG fill this gap. We 
        will reward the contribution of "cute" sample programs.  Here are 
        the guidlines as of 9/3/86:

        1) We've got enough games, puzzles and geneology programs. 
        2) We need:
             a)  Alternate  forms  of reasoning,  such  as  probabalistic 
        (Bayesian, fuzzy logic) forward chaining, cover sets.

             b)  Programs which use the graphics.

             c)  
        3) Expert systems.

        You  must be certain that your contribution does not infringe  on 
        anyone's copyright.

        The reward is the following: A copy of VMI virtual memory PROLOG. 
        There will be a charge of $20.00 to cover our costs. That way, we 
        won't go broke rewarding sample programs.

        The  sample program will be published as an intact file  together 
        with whatever comments or advertisments the author may see fit to 
        include, on our distribution disks. 

        Exceptional  contributions  may  merit a copy of type  VML  large 
        model virtual memory PROLOG which now incorporates a UNIX1  style 
        tree structured domain system.



                                Special Offer # 2


             If  you are a hardware manufacturer and would like a  PROLOG 
        language  for your system,  the solution is simple.  Just send us 
        one  of  your machines!  Provided your system  implements  a  "C" 
        compiler, it will be ported in no time flat.


        ______
             1. Trademark of AT & T.












                                       14








                         Writing Programs For ED PROLOG

             You do not type in programs at the "?-" prompt.  There is no 
        built-in  editor.  The command "consult( user )" is accepted  but 
        does not cause PROLOG to enter an editing mode.  We feel that the 
        most universally acceptable editing method is for the user to use 
        a text editor of choice,  which can be invoked from within PROLOG 
        by the "exec" predicate.

             Use  Wordstar  or your customary editor to write a  program. 
        Then  run  PD  PROLOG and use the consult function  to  load  the 
        program.

             In  all  cases except PD PROLOG,  you can  run  your  editor 
        without leaving PROLOG by use of the "exec" predicate.










































                                       15








                             Running the Interpreter

        COMMANDS: Give commands in lower case.

        TO RUN:
             Invoke PROLOG.EXE.  After the "?-" prompt appears,  you  may 
             give Prolog goals to be executed,  followed by a period, and 
             a carriage return.

        TO ENTER A FACT:
             Don't do it except with the "assert" predicates. This is the 
             most  frequently misunderstood aspect of A.D.A.  Prolog.  If 
             you want to enter a bunch of facts,  put them in a file  and 
             "consult" them using the "consult" predicate.

        TO ASK A QUESTION:
             At the prompt, type "<expression>.<CR>", where 
             <expression>  is  a  question as described by  Clocksin  and 
             Mellish. Be sure to terminate the question with a period.
             The question may be up to 500 characters long.

        TO INPUT A STRUCTURE AT THE KEYBOARD:
             The structure may be up to 500 characters in length. Be sure 
             to terminate with a period.

        TO ASK FOR ANOTHER SOLUTION:
             If a solution has been provided, the PROLOG interpreter will 
             ask  "More?  (Y/N):".  Only  if  a "y"  is  typed  will  the 
             interpreter perform a search.

        TO ABORT A SEARCH:
             Simply   type   the  escape  key.   The   interpreter   will      
             respond  with  "Interrrupted.",  and return to  the  command      
             prompt.

        TO LOAD DATABASE:
             Type  "consult(<filename>).<CR>" The file name must have the 
             extension  ".PRO".  It  is  not  necessary  to  include  the 
             extension in the argument of consult. The file name as given 
             must not be the same as a predicate name in the file or  any 
             file which will be loaded.

        TO TRACE:
             When the system displays the prompt "?-", type "trace.<CR>".  
             The display will likely move too rapidly for you to read. To 
             stop the display,  type Control S.  To restart the  display, 
             type  Control S.  To turn the trace      display  off,  type 
             "notrace<CR>"  at  the  prompt  "?-".   The  interrupt  menu 
             contains  additional  options,  such  as sending  all  trace 
             output to a file, as well as display at the console.







                                       16








        TO INTERRUPT A PROGRAM:
             See  the  section  entitled  "The  Interrupt  Menu"  for   a 
             description  of the flexible options.  Basically,  one types 
             ESC  to terminate a program,  while Control V or  Control  I 
             interrupt a program. 

        TO RECONSULT A FILE:
             The   predicate  "recon"  is  identical  to  the   Edinburgh 
             predicate "reconsult."

        TO REMOVE A DATABASE:
             Type "forget(<filename>).<CR>"

        TO EXIT TO THE OPERATING SYSTEM:
             Type "exitsys.<CR>"

             The system is totally interactive; any commands the operator 
        gives  are and must be valid program statements.  Statements must 
        terminate with a period.      All commands which take a file name 
        also  accept a path name.  Any name which is not a  valid  PROLOG 
        atom (refer to C & M) must be enclosed in single quotes. Thus one 
        could say

             consult( expert )

        but one would need single quotes with

             consult( 'b:\samples\subtype\expert' ).


        To exit the system, type "exitsys.<CR>"

        Atoms  may contain MSDOS pathnames if they are enclosed by single 
        quotes, ie.,  '\b:\samples\animal' .

        You may consult more than one file at a time.  However, all names 
        are public and name conflicts must be avoided. The order in which 
        modules are loaded may,  in cases of poor program design,  affect 
        the behavior.



                             Command Line Arguments

             ED and PD PROLOG accept one command line argument,  which is 
        the name of a "stream" which replaces the console for input.  The 
        "stream"  in  MSDOS is a pipe or file which supplies input  until 
        end-of-file is reached. Control then reverts back to the console. 
        To avoid noisy parser error messages when end-of-file is reached, 
        the  last command in the file should be "see( user )." See  Simon 
        Blackwell's PIE program for an example of this.






                                       17








                               A Reference of Note


             With  minor  exceptions,  the syntax is a superset  of  that 
        described  by  Clocksin and Mellish in the  book  Programming  in 
        Prolog by W.F.  Clocksin and C.S.  Mellish, published by Springer 
        Verlag in Berlin, Heidelberg, New York, and Tokyo. We shall refer 
        to this book as "C & M".


             There   are  very  few   syntactical   differences,   mostly 
        unrecognized and/or minor.
             When  an operator is declared using the "op" statement,  the 
        operator must be enclosed in single quotes in the "op"  statement 
        itself,  if  it would not otherwise be a legal Edinburgh functor. 
        Subsequently,  however,  the parser will recognize it for what it 
        is,  except  in  the "unop" statement,  where it  must  again  be 
        enclosed in single quotes.

             Variable numbers of functor paramaters are supported.

             A  goal  may be represented by a  variable,  which  is  less 
        restrictive  than  the  C  &  M requirement  that  all  goals  be 
        functors.  The  variable must be instantiated to a  functor  when 
        that goal is pursued.

             Rules which appear inside other expressions must be enclosed 
        in  parenthesis  if  the "," operator is to be  recognized  as  a 
        logical connective.

             All  infix  operators described by C & M,  and user  defined 
        infix,  prefix, and postfix operators with variable associativity 
        and precedence are supported exactly as in C & M.
























                                       18








                            Memory Size Configuration

             Type  ED  can  access the full memory of  the  machine,  but 
        previously required configuation by A.D.A.  The supplied  program 
        "prconf.exe"  allows  the user to configure the amount of  memory 
        used  by the PROLOG system.  The reason why this is important  is 
        that  it is the vacant memory above the system which is  used  by 
        the  "exec"  function  to load and execute  other  programs.  The 
        amount of memory used is configured into the PROLOG.EXE file  and 
        cannot be changed when PROLOG is actually running.

             The  configuration  is  carried  out  with  PRCONF.EXE   and 
        PROLOG.EXE on the same disk. The user runs PRCONF and answers the 
        sole question

            Enter the amount of workspace required in decimal Kbytes:

        PRCONF  then modifies the PROLOG.EXE file and writes the  changes 
        out  to  disk.  This may be done as many times  as  required  and 
        experimentation   is  beneficial.   There  are  several   factors 
        competing for memory and they must be balanced:

              1)  The  amount of workspace must be sufficient to run  the 
              prolog programs.  The total amount of memory used by PROLOG 
              given by the following formula:

                  size of PROLOG.EXE 
                 +size of workspace selected
                 +size of space needed to "exec" other programs, if used
                 +size of "COMMAND.COM" if "exec" is used
                ----------------------------------------
                 = Total used by Prolog system.

              "Total"  must be less than the available transient  memory. 
              To get this,  run the "chkdsk" program,  supplied with DOS, 
              and read the last line of the printout.


              2)  There must be sufficient memory to "exec"  the  desired 
              programs.

              3)  Drivers  and auxiliary programs installed by  the  user 
              such   as  "sidekick"  or  "superkey"  take  memory  in   a 
              preemptive  fashion.   You  may  have  some  difficulty  in 
              determining  how much free memory there  really  is.  After 
              PRCONF  has  been  run,  load  PROLOG  and  note  that  the 
              copyright  notice displays the highest memory location used 
              by PROLOG. 

        If the selected amount of workspace is greater than the memory of 
        the  machine allows,  PROLOG simply acquires all available memory 
        for  its  own  use.  This has only one bad  effect  - the  "exec" 
        function won't function.




                                       19








                         The Built In Predicate Library

                        Available Operators in PD and ED PROLOG


        Column 1 gives the function symbol. 

        Column 2 gives the precedence. The range of precedence is 1 to 255.
        A zero in the precedence column indicates the symbol is parsed as 
        a functor, and precedence is meaningless in this case.

        Column 3 gives the associativity. 
        A zero in the associativity column indicates the symbol is parsed
        as a functor, and associativity is meaningless in this case.

        Column 4 indicates which version the function is available in. 
        Unless otherwise noted, the function is available in all versions.
        Nonstandard predicates are indicated by "NS".


        op/pred      precedence    associativity         availability

        "!"             0             0
        "|"             0             0
        "="             40,           XFX                   
        "=="            40,           XFX                   
        "\\="           40,           XFX                   
        "\\=="          40,           XFX       
        "/"             21,           YFX       
        "@="            40,           XFX       
        ">="            40,           XFX       
        "=<"            40,           XFX       
        ">"             40,           XFX       
        "<"             40,           XFX       
        "-"             31,           YFX        
        "*"             21,           YFX
        "+"             31,           YFX
        "=.."           40,           XFX
        "-->"           255,          YFY       (not  in  PD PROLOG)
        "?-"            255,          FY  
              


        "arg"           0,            0,                                   
        "asserta"       0,            0,                                   
        "assertz"       0,            0,                                   
        "atom"          0,            0,                                   
        "atomic"        0,            0,                                   
        "batch"         0,            0
        "clause"        0,            0,                                   
        "clearops"      0,            0,                                   
        "cls"           0,            0,       NS
        "concat"        0,            0,                                   
        "consult"       8,            FX,                                  
        "crtgmode"      0,            0,       NS


                                       20








        "crtset"        0,            0,       NS
        "curset"        0,            0,       NS
        "curwh"         0,            0,       NS
        "debugging      0,            0,                                   
        "dir"           0,            0,                                   
        "display"       0,            0,                                   
        "dotcolor"      0,            0,       NS
        "drawchar"      0,            0,       NS
        "drawdot"       0,            0,       NS
        "drawline"      0,            0,       NS
        "exec"          0,            0,                                   
        "exitsys"       0,            0,       NS                          
        "forget"        0,            0,       NS                          
        "functor"       0,            0,                                   
        "get0"          8,            FX,                                  
        "integer"       0,            0,                                   
        "is"            40,           XFX,                                 
        "listing"       0,            0,                                   
        "memleft"       0,            0,      NS
        "mod"           11,           XFX,                                 
        "name"          0,            0,                                   
        "nl"            0,            0,                                   
        "nodebug"       0,            0,       (not in PD PROLOG)
        "nonvar"        0,            0,                                   
        "nospy"         50,           FX,      (not in PD PROLOG)
        "not"           60            FX                                   
        "notrace"       0,            0,       (not in PD PROLOG)
        "op"            0,            0,                                   
        "popoff"        0,            0,       NS
        "popoffd"       0,            0,       NS
        "popon"         0,            0,       NS
        "popond"        0,            0,       NS
        "print"         0,            0,                                   
        "prtscr"        0,            0,       NS
        "put"           0,            0,                                   
        "ratom"         0,            0,                                   
        "read"          0,            0,                                   
        "recon"         0,            0, (Note: this is "reconsult")
        "repeat"        0,            0,                                   
        "retract"       0,            0                                    
        "rnum"          0,            0,                                   
        "see"           0,            0,       
        "seeing"        0,            0,       
        "seen"          0,            0,       
        "skip"          0,            0,       (not in PD PROLOG)
        "spy"           50,           FX,      
        "tab"           0,            0,                                   
        "tell"          0,            0,       
        "telling"       0,            0,       
        "told"          0,            0,       
        "trace"         0,            0,       (not in PD PROLOG)
        "true"          0,            0,                                   
        "unop"          0,            0,                                   
        "var"           0,            0,                                   
        "write"         0,            0,                                   


                                       21








                        Description of the Modifications.
             

        I/O Redirection

        I/O  redirection is a feature described by Clocksin and  Mellish. 
        The predicates "see",  "seeing",  "seen",  "tell", "telling", and 
        "told" are used to select the streams used for input and output. 

             The  predicates  "seen" and "told" require as arguments  the 
        name of the stream that is to be closed.  This enables the system 
        to  remember the indices of several streams and switch  back  and 
        forth between them.

             The  predicate "batch",  when inserted at the beginning of a 
        stream file, has the following properties:

             1)  The normal prompt,  "?-",  and advisory messages do  not 
             appear at the screen.

             2)  It is self cancelling if the input stream is  reassigned 
             to the console.

             3) It may also be cancelled by the predicate "batch".



        call( <goal> )

             The  predicate as defined in C & M is obsolete.  The purpose 
        was  to permit a goal search where the goal name was  a  variable 
        instantiated  to  some functor name.  A.D.A.  permits writing  of 
        goals with such names,  so the mediation of the "call" clause  is 
        no longer necessary.

             The  "call"  predicate  may  be  trivially  implemented  for 
        compatibility with the PROLOG definition

                                 call( X ) :- X.



        clause

             The  function  clause(  X,  Y ) has the  new  optional  form 
        clause(  X,  Y,  I  ).  If the third variable is written,  it  is 
        instantiated  to the current address of a clause in  memory.  The 
        only  use of the result is with succeeding assertfa and  assertfz 
        statements.








                                       22








        debugging

             "Debugging"  prints a list of the current  spypoints.  After 
        each name a sequence of numbers may appear, indicating the number 
        of  arguments that is a condition of the trace.  The  word  "all" 
        appears  if  the  number of arguments is not a condition  of  the 
        trace.




        op( <prec>, <assoc>, <functor> )

             Defines  the  user  definable  grammar  of  a  functor.  The 
        definition conforms to that in C & M. We mention here a minor but 
        important point.  If <functor> is not a valid PROLOG atom it must 
        be   enclosed  in  single  quotes  when  declared  in  the   "op" 
        declaration.  It  is  not necessary or legal to do this when  the 
        functor is actually being used as an operator.  In version 1.6, a 
        declared  or built-in operator can be used either as an  operator 
        or as a functor. For example, 

                                 +(2,3) = 2 + 3.

        is a true statement.

             Declared  operators  are annotated in the directory  display 
        with their precedence and associativity.





























                                       23








        Output predicates

           display
           write
           print
           put

             These  functions  have  been  modified  to  accept  multiple 
        arguments in the form:

                       print( <arg1>, <arg2>, <arg3>,... )

        Thus, "put( a, b, c )" would result in the display of "abc".
             The  names  of  some  PROLOG atoms that may  occur  are  not 
        accepted  by  the  PROLOG scanner  unless  surrounded  by  single 
        quotes.  This only applies when such an atom is read in, not when 
        it is internally generated. Nevertheless, this presents us with a 
        problem:  We  would  like to be capable of writing  valid  PROLOG 
        terms to a file. In some cases, it is necessary to add the single 
        quotes.  In other cases,  such as human oriented output, they are 
        an irritant. The modified definitions of the following predicates 
        are an attempt at a solution:

             display
             Operator  precedence  is ignored,  all functors are  printed 
             prefix and single quotes are printed if needed or they  were 
             supplied if and when the atom was originally input.

             write
             Operator  precedence is taken into account and operators are 
             printed according to precedence.  Single quotes are  printed 
             under the same conditions as for "display."

             print
             Operator  precedence is taken into account and operators are 
             printed  according to precedence.  Single quotes  are  never 
             displayed.  This  is  a  human oriented form of  output  and 
             should  never  be used for writing of terms for  the  PROLOG 
             scanner.


















                                       24








        get0
        read

             The  functions  "get0"  and "read"  have  been  extended  to 
        support input from a stream other than the one currently selected 
        by "see". To direct output to a file or other stream, an optional 
        argument  is used.  For example,  "get0( char,  <file name> )" or 
        "get0( char,  user )" would cause input to come from <file  name> 
        or the console.  If the file has not already been opened,  "get0" 
        will fail.



             Atoms enclosed by single quotest, eg. '\nthis is a new line' 
        can contain the escape sequences

             '\n', '\r', '\t' and '\''.

             If these atoms are printed by "display" or "write" they  are 
        printed  just  as they are.  If they are printed by  the  "print" 
        clause they are translated as follows:

        '\n'  results  in  the printing of a carriage return and  a  line 
        feed.
        '\r' results in the printing of a carriage return only.
        '\t' results in the printing of a tab character.
        '\'' allows the printing of a single quote within a quoted atom.

             The "portray" feature is not presently implemented.




























                                       25








                        Description of the New Predicates


        batch, nobatch

        This  predicate now makes it possible to avoid the appearance  of 
        messages and prompts on the screen when input has been redirected 
        to come from a file.

        The  predicate  formerly had a different effect which  no  longer 
        exists.

        When  placed  at  the head of a stream file which is  "seen"  the 
        system  prompt  is not repetetively displayed as  the  stream  is 
        executed. Advisory messages are not displayed either.

        The  command "batch" is self cancelling if control reverts to the 
        console  at any time.  It may also be cancelled by  invoking  the 
        predicate "nobatch."

        A related change is that when the Prolog system is invoked with a 
        command  line  argument for a stream,  the system prompt  is  not 
        initially displayed.  So if the first command in the stream  file 
        is  "batch.",  it is possible to use i/o redirection without  the 
        appearance of any system messages except aor the signon message.



        clearops-

             Nullify  the  operator  status  of  every  operator  in  the 
             database.

        concat( (<variable> | <functor>), <List> )

             A  list  of functors or operators is concatenated  into  one 
        string,  which becomes the name of a new atom to which <variable> 
        or <functor> must match or be instantiated.


        dir( option )

             Provide  an  alphabetized listing to the console  of  atoms, 
        constants,   or   open  files.   Without  options,   simply  type 
        "dir.<CR>". Options are:

             dir( p ) - list clause names only.
             dir( c ) - list consulted files only.

        Consulted files are prefixed by "S:".







                                       26








        exec( arg1, arg2, ... argn )

             Execute  the program named as arg1,  provided that there  is 
        sufficient  memory.  arg2 through argn must be functors which are 
        supplied  as the command line argument,  separated by  one  space 
        from  neighbors.  The  PCDOS or MSDOS  operating  system  program 
        "COMMAND.COM"  must be reachable by the DOS search path,  because 
        using "exec" invokes "COMMAND.COM", which is the DOS shell.

             You  can temporarily leave PROLOG and execute the DOS  shell 
        with  the  invocation "exec( command )." The  DOS  prompt  should 
        appear,  and  you can run programs bearing in mind that PROLOG is 
        still  resident and occupying the bulk of memory.  To  return  to 
        PROLOG, type "exit" at the DOS prompt.

             This  function  is restricted in the case of the type PD  to 
        executing  a  program named "prologed",  which may be  an  editor 
        supplied by you.

             This  function  will not work properly unless the system  is 
        configured for memory.


        exitsys

             Exit to the operating system.



        forget( <file name> )
             Make  a database unavailable for use and reclaim the storage 
        it occupied.



        ratom( <arg>, <stream> )-
             Read an atom from the input stream,  to which <arg>  matches 
        or  is  instantiated.  <stream> is optional.  If <stream> is  not 
        given, the input stream defaults to the standar input.
             Input is terminated by a CR or LF, which are not included in 
        the stream.
















                                       27








                             Arithmetic Capabilities

             Integer  arithmetic is supported.  Numbers are 32 bit signed 
        quantities. The following arithmetic operators are supported:

                      "+", "-", "*", "/", <, <=, >, >=, mod.

        Arithmetic operators must never be used as goals,  although  they 
        may be part of structures. It is legal to write:

                                    X = a + b
             
        which  results in the instantiation of X to the struture (a + b). 
        But the following is not legal:

                       alpha( X, Y ) :- X + Y, beta( Y ).


        Evaluation  of  an arithemtic expression is mediated by the  "is" 
        and inequality predicates.  For instance,  the following would be 
        correct:

                         alpha( X, Y, Z ) :- Z is X + Y.

                         beta( X, Y ) :- X + 2 < Y + 3.
































                                       28








                            Memory Metric Predicate

             The purpose of this predicate is to give the prolog system 
        a  sense  of  how much memory remains so  that  expensive  search 
        strategies  can  be  controlled.  It is not possible  to  exactly 
        quantify how much memory remains.  At the lowest level, there are 
        two  types of memory - the stack and the heap.  The stack expands 
        down  from  high  memory,  while  the heap  tends  to  expand  at 
        unpredictable intervals upwards.  If the stack and heap meet, the 
        prolog  system  must abort the search and return to  the  prompt. 
        Judicious  use  of  the  memory  metric  predicates  reduces  the 
        probability of this happening.

             The  stack is easy to quantify because it expands  downwards 
        in  a  predictable  way with recursion.  The symbol  space  is  a 
        "heap".  For  those  interested,  the structure of  the  heap  is 
        determined  by  the C compiler under which Prolog  was  compiled. 
        There  is  a function internal to Prolog known as  the  allocator 
        searches  the  heap for enough contiguous memory to create a  new 
        symbol.  The  heap resembles a piece of Swiss cheese;  the  holes 
        represent symbols and already allocated memory while the remained 
        is  searched  by the allocator for a piece of  contiguous  memory 
        large enough to satisfy a request.  If one cannot be  found,  the 
        uppermost  bound of the heap is expanded upwards,  and that bound 
        is  the  number  which we measure for an  estimate  of  remaining 
        memory.

             The  sqace between the top of the heap,  and  the top of the 
        stack,  which we call "gap",  serves as a rough guide to how much 
        memory  remains.  The  demands  of the system  are  not  entirely 
        predictable,  however.  For example, the creation of a new symbol 
        larger  than "gap" would cause an abort.  The user must  use  the 
        numbers  supplied  by  these  functions  as  a  heuristic  guide, 
        tempered  by  experience,  to  minimize  the  possibility  of  an 
        unexpected abort.

        "Gap" is measured in 256 byte pages.

        memleft( X )

        If  the argument is an integer,  this is satisfied if the size of 
        "gap" is greater than "X".

        If the argument is a variable,  it is instantiated to the  amount 
        of "gap" remaining.












                                       29








                         IBM PC Video Display Predicates


        A high level method is provided for drawing and displaying on the 
        screen of IBM PC and compatible computers. 



        cls

        Clear  the screen and position the cursor at the upper left  hand 
        corner.



        crtgmode( X )

        Matches  the  argument to the mode byte of the display  which  is 
        defined as follows:

                  mode           meaning

                   0             40 x  25  BW (default)
                   1             40 x  25  COLOR
                   2             80 x  25  BW
                   3             80 x  25  COLOR
                   4            320 x 200  COLOR
                   5            320 x 200  BW
                   6            640 x 200  BW
                   7             80 x  25  monochrome  display card



        crtset( X )
         
        This  sets the mode of the display.  The argument must be one  of 
        the modes given above. 



        curset( <row>, <column>, <page> )

        Sets the cursor to the given row, column, and page. The arguments 
        must be integers.



        curwh(  <row>, <column> )

        Reports the current position of the cursor.  The argument must be 
        an integer or variable. The format is:

             1) page zero is assumed.
             2) The row is in the range 0 to 79, left to right.
             3) The column is in the range 0 to 24, bottom to top.


                                       30








        dotcolor( <row>, <column>, <color> )

        The  argument  <color> is matched to the color of  the  specified 
        dot. The monitor must be in graphics mode.



        drawchar( <character>, <attribute> )

        Put a character at the current cursor position with the specified 
        attribute.  The  arguments  <character> and <attribute>  must  be 
        integers.  Consult  the IBM technical reference manual  regarding 
        attributes.



        drawdot( <row>, <column>, <color> )

        Put  a dot at the specified position.  The monitor must be in the 
        graphics  mode.  The  arguments  must be  integer.  The  argument 
        <color> is mapped to integers by default in the following manner:



        drawline( <X1>, <Y1>, <X2>, <Y2>, <color> )

        Draw a line on the between the coordinate pairs. The monitor must 
        be in the graphics mode and the arguments are integer.



        prtscr

        Print  the  screen  as it currently appears.  Be  sure  that  the 
        printer  is  on  line and ready before invoking  this  predicate, 
        since otherwise, the system may lock up or abort.



        The  integer argument <color> referred to in the above predicates 
        is represented as follows:

             COLOR          PALETTE 0           PALETTE 1
             
               0            background          background
               1            green               cyan
               2            red                 magenta
               3            brown               white

        To change the palette and the background,  see the IBM  Technical 
        Reference Bios listings for more information.






                                       31








                                   Trace Files

                                 (type ED only)

             You  can  now dump your trace to disk,  instead  of  (groan) 
        wasting  reams of printer paper.  This option is described in the 
        next section.


                               The Interrupt Menu

                                 (type ED only)

             This  menu  has been modified.  It was formerly  called  the 
        ESCAPE   menu,  but  the  meaning  of the  ESCAPE  key  has  been 
        redefined.  It  is  no  longer necessary to display the  menu  to 
        perform  one of the menu functions.  This reduces the  amount  of 
        display which is lost by scrolling off the screen.

             Version  1.9 offers the ability to attempt a goal  from  the 
        interrupt menu, while not disturbing the ongoing computation.

             At any time while searching, printing, or accepting keyboard 
        input,  you can break to this menu.  It is generally not possible 
        to  do  this  during disk access,  since control  passes  to  the 
        operating  system  at this time.  Two keys cause  this  break  to 
        occur:

             ^V:  The menu is displayed and a command is accepted at the 
                  prompt  "INTERRUPT>".  After  a command,  the  menu  is 
                  redisplayed  until  the user selects  a  command  which 
                  causes an exit. 

             ^I:  The menu is not displayed.  Command is accepted at the 
                  prompt  "INTERRUPT>" until the user selects  a  command 
                  which causes an exit.

             ESC: Typing this key  causes a  termination of  the  PROLOG      
                  search  and  control returns to the user command  level      
                  with a prompt of "?-".  Notice that previously, the ESC      
                  key invoked this menu. 
















                                       32








             As the resulting menu indicates, the following functions are 
        possible:

             A: Abort the search and return to the prompt.

             O  Open  a trace file.  The user is prompted for  the  file 
                name.  The file receives all trace output.  If a file is 
                already opened it is closed with all output preserved.

             C  Close the trace file if one is open.  Otherwise there is 
                no effect.

            ^C: Immediately  exit PROLOG without closing files.  This is 
                not advised.

            ^P: Typing <Control>P toggles the printer. If the printer is 
                on,  all  input  and output will also be  routed  to  the 
                printer.

             S: If  the machine in use is an IBM PC compatible  machine, 
                the  currently displayed screen will be printed.  If  the 
                machine  is  not an IBM PC compatible,  do not  use  this 
                function.

             T: If  trace  is in use,  most of the trace output  can  be 
                temporarily turned off by use of this function,  which is 
                a toggle.

             G: Satisfy a goal.  The system prompt will appear. Do not be         
                confused  into  thinking that the system has reverted  to 
                the  prompt.  After the user has entered the goal in  the 
                usual  manner,  satisfaction  of the goal is  immediately 
                attempted.  This need not affect the running  computation 
                in  any way,  although it is certainly possible to do so. 
                After  the  goal is attempted,  control  returns  to  the 
                INTERRUPT  menu.  The  purpose is to facilitate  detailed 
                analysis of a running system.

             R:  Entering  another  ESC causes a return to the  current 
                activity  (keyboard  input or search)  with  no  residual 
                effect from the interruption.
















                                       33









                             Conserving memory space


               Success popping is controlled by the predicates "popond",
        "popoffd",  "popon",  and  "popoff".  Success popping is means of 
        reclaiming  storage which is used on backtracking to  reconstruct 
        how a particular goal was satisfied.  If it is obvious that there 
        is no alternative solution to a goal this PROLOG system is  smart 
        enough to reclaim that storage. 

             In  this system,  succees popping is an expensive operation. 
        Therefore,  there  is a tradeoff of memory versus  time.  On  the 
        other hand, discrete use of success popping can actually speed up 
        a program by recreating structures in a more accessible form.

             The  definitions of the control predicates is given in  this 
        manual  and  their use is totally  optional.  The  modulation  of 
        success popping has no effect on program logic (read solution.)
             
             The  "cut"  can  save  substantial  time  and  computational 
        overhead  as well as storage.  Although the execution of the  cut 
        costs  time,  you can design your program to use cuts in critical 
        places  to  avoid unnecessary backtracking.  Thus  the  execution 
        speed of the program can actually increase. 
             
             Anyone  who  has  read Clocksin and  Mellish  is  aware,  of 
        course, that the "cut" has a powerful logical impact which is not 
        always desirable.


        popoff 

        See the below definition.



        popon

        The  inference  engine  does complete success popping  for  goals 
        which appear after "popon".  Consider this example: 

          goal :-  a, popon, b, c, popoff, d.

        If  no alternative solutions exist for b,  then  success  popping 
        will  reclaim storage by removing unnecessary records  describing 
        how  "b"  was  satisfied.  If the Prolog system cannot  rule  out 
        possible additional solutions,  success popping will never occur, 
        regardless of your use of "popon". 
             Since goal "d" occurs after "popoff",  success popping  will 
        never occur.






                                       34








        popoffd

        If  no  "popon" or "popoff" declarations occur in a  clause,  the 
        default  action  is  determined by  "popoffd"  and  "popond".  If 
        "popoffd" has been invoked,  the default is that success  popping 
        will not occur.



        popond

        The inverse of "popoffd". Turns on default success popping.
        printf( <stream>, <term1>,<term2>,... )












































                                       35








                                 Prolog Tutorial          


                                  Introduction




             Probably  you  have heard of the language PROLOG within  the 
        last year or so. You probably wondered the following things:

        1) What does the name stand for? Names of computer languages are 
        almost always acronyms.

        2) What is it good for?

        3) Why now?

        4) Can I get a copy to play with?

             Congratulations! You obviously know the answer to the fourth 
        question. We now respond to the other three.
             
        1)  The  name  stands for "programming in logic." This  we  shall 
        elaborate on in depth later on.

        2) PROLOG is good for writing question answering systems.  It  is 
        also   good   for  writing  programs  that  perform   complicated 
        strategies  that  compute the best or worst way to  accomplish  a 
        task, or avoid an undesirable result.

        3) PROLOG was virtually unknown in this country until researchers 
        in  Japan announced that it was to be the core language  of  that 
        country's fifth generation computer project.  This is the project 
        with  which  Japan hopes to achieve a domainant position  in  the 
        world information industry of the 1990's. 

             PROLOG  is  one of the most unusual computer languages  ever 
        invented.  It  cannot be compared to  FORTRAN,  PASCAL,  "C",  or 
        BASIC.  The facilities complement,  rather than replace those  of 
        conventional  languages.  Although  it  has great  potential  for 
        database  work,  it  has  nothing in  common  with  the  database 
        languages used on microcomputers.

             Perhaps  the  best point to make is that while  conventional 
        languages are prescriptive, PROLOG is descriptive. A statement in 
        a conventional language might read:

             if( car_wheels = TRUE ) then
               begin
                 (some sort of procedure)
                 X = X + 1;
               end 




                                       36








        A statment in PROLOG could just be a statment of fact about  cars 
        and wheels. There are many relationships that hold. For instance,

             has( car, wheels ).

             has( car, quant(wheels, four) ).

             round( wheels ).

        Each  of  these statments is an independent fact  relating  cars, 
        wheels,  and  the  characteristics of wheels.  Because  they  are 
        independent, they can be put into a PROLOG program by programmers 
        working separately. The man who is a specialist on car bodies can 
        say  his thing,  the wheel specialist can have his say,  and  the 
        participants can work with relative independence. And this brings 
        to light a major advantage of PROLOG:


                             PARALLEL PROGRAMMING!!!
                            

        With  conventional  programming languages projects can  still  be 
        "chunked",  or  divided between programmers.  But efficiency on a 
        team  project  drops  drastically below that  of  the  individual 
        programmer  wrapped  up  in  his own trance.  As  the  number  of 
        participants    grows   the   need   for   communication    grows 
        geometrically. The time spent communicating can exceed that spent 
        programming! 
             Although   PROLOG   does   not  eliminate   the   need   for 
        task  coordination,  the problem is considerably  simplified.  It 
        also provides the ability to answer questions in a "ready to  eat 
        form."  Consider your favorite BASIC interpreter.  Based upon the 
        statements about cars and wheels previously given,  could you ask 
        it the following question?   

                       
              has( car, X ), round( X ).

             Does  a  car  have anything which  is  round?  The  question 
        instructs the PROLOG interpreter to consider all the objects that 
        it  knows are possessed by a car and find those which are  round. 
        Perhaps  you are beginning to guess that PROLOG has the abilities 
        of a smart database searcher.  It can not only find the facts but 
        selectively find them and interpret them.













                                       37








             Consider the problem of a fault tree, as exemplified by this 
        abbreviated one:



        {Car won't start}
             | 
             | 
        [Engine  turns  over](No) --> [Battery voltage](no)-\
                (Yes)                                       v
                 |                                  {Check battery}
                 |
        [Smell gasoline](yes) --> {Try full throttle cranking}
                 |                       (failure)
        /--------/                           |

                            (details omitted)



             The fault tree is easily programmed in BASIC. Later we shall 
        show  that  PROLOG supplies a superior replacement for the  fault 
        tree.  Though the tree is capable of diagnosing only the  problem 
        for  which  it was designed,  PROLOG dynamically  constructs  the 
        appropriate  tree from facts and rules you have provided.  PROLOG 
        is not limited to answering one specific question.  Given  enough 
        information,  it  will attempt to find all deductive solutions to 
        any problem.





























                                       38









                                  PROLOG PRIMER

        I.                       Rules and Facts     



             This  is  where you should start if you know  nothing  about 
        PROLOG. Let us consider a simple statment in PROLOG, such as:

        1)   has( car, wheels ).

        This  statement  is a "fact.  The word "has" in this statment  is 
        known  either  as a functor or predicate.  It is a name  for  the 
        relationship  within the parenthesis.  It implies that a car  has 
        wheels.  But  the  order  of  the words  inside  the  bracket  is 
        arbitrary and established by you. You could just as easily say:

        2)   has( wheels, car ).

        and if you wrote this way consistently,  all would be  well.  The 
        words  has,  wheels,  and car are all PROLOG atoms.  "Wheels" and 
        "car" are constants. 
             
        A   database   of  facts  can  illustrate  the   data   retrieval 
        capabilities of PROLOG. For instance:

        3)   has( car, wheels ).
             has( car, frame ).
             has( car, windshield ).
             has( car, engine ).

        You could then ask PROLOG the question:

        4)   has( car, Part ).

        The  capital  "P" of Part means that Part is a  variable.  PROLOG 
        will make Part equal to whatever constant is required to make the 
        question match one of the facts in the database. Thus PROLOG will 
        respond:

             Part = wheels.
             
             More?(Y/N):

        If you type "y" the next answer will appear:

             Part = frame.

             More?(Y/N):

        If you continue, PROLOG will produce the answers Part = windshield 
        and Part = engine. Finally, you will see:

             More?(Y/N):y


                                       39









             No.
         
        indicating that PROLOG has exhausted the database.  Incidentally, 
        when  a  variable is set equal to a constant or  other  variable, 
        it is said to be instantiated to that object.

             Notice  that  PROLOG searches the database forwards  and  in 
        this case,  from the beginning.  The forward search path is built 
        into PROLOG and cannot be changed. An author of a program written 
        in  a  prescriptive language is quite conscious of the  order  of 
        execution  of  his program,  while in PROLOG it is  not  directly 
        under his control.
             
             The other major element is the rule which is a fact which is 
        conditionally true. In logic this is called a Horn clause: 


        5)   has( X, wheels ) :- iscar( X ).

        The  fact iscar( car ) and the above rule are equivalent to

        6)   has( car, wheels).

        The  symbol :- is the "rule sign." The expression on the left  of 
        :-is the "head" and on the right is the body.  The variable X has 
        scope  of the rule,  which means that it has meaning only  within 
        the rule.  For instance,  we could have two rules in the database 
        using identically named variables.


        7)   has( X,  transportation ) :- 
                           has( X,  car ), has( license, X ).

        8)   has( X, elephant ) :- istrainer( X ), hasjob( X ).

        The  variables  X in the two expressions are completely  distinct 
        and have nothing to do with each other.

        The comma between has( X, car ) and has( license, X ) means "and" 
        or logical conjuction.  The rule will not be true unless both the 
        clauses has(X, car) and has( license, X ) are true.


             On the other hand if there is a rule
             
        9)   has( license, X ) :- passedexam( X ).

        consider what PROLOG will do in response to the question:

        10)  has( harry, transportation ).

        (Notice  that  harry has not been capitalized because we  do  not 
        want  it  taken as a variable.  We could,  however,  say  'Harry' 
        enclosed in single quotes.)


                                       40









             It  will scan the database and use (7),  in which X will  be 
        instantiated to harry. The rule generates two new questions:

        11)  has( harry, car ).

        12)  has( license, harry ).

        Assuming  that  harry  has  a car,  the first clause  of  (7)  is 
        satisfied and the database is scanned for a match to (12). PROLOG 
        picks  up  rule (9) in which X is instantiated to harry  and  the 
        question is now posed:

        13)  passedexam( harry ).

             If there is a fact:

             passedexam( harry ).

        in  the database then all is well and harry  has  transportation. 
        If there is not, then PROLOG will succinctly tell you:

             No.

        But  suppose Harry has money and can hire a chauffer as any  good 
        programmer  can.  That  could be made part of the program in  the 
        following way.

             The rule which PROLOG tried to use was:

        14)  has( X,  transportation ) :- 
                           has( X,  car ), has( license, X ).

        At any point following it there could be included another rule:

        15)  has( X, transportation ) :- has( X, money ).

        or simply the bald fact:

        16)  has( harry, transportation ).

             These  additional  rules  or  facts would  be  used  in  two 
        circumstances.  If at any point a rule does not yield a solution, 
        PROLOG   will  scan  forward  from  that  rule  to  find  another 
        applicable  one.  This process is known as "backtracking  search" 
        and can be quite time consuming.


        If  in response to the "More?" prompt you answer "y" PROLOG  will 
        search  for an additional distinct solution.  It will attempt  to 
        find an alternate rule or fact for the last rule or fact used. If 
        that  fails,  it  will back up to the antecedent rule and try  to 
        find  an alternate antecedent.  And it will continue to  back  up 
        until  it  arrives at the question you asked,  at which point  it 
        will say:


                                       41









             No.

        "Antecedent"  to a rule means that it gave rise to its' use.  For 
        example,  (7)  is  the antecedent of (9) in the  context  of  the 
        question (16).




        II.                          Grammar

             It is a boring subject, but it must be discussed. All PROLOG 
        statements are composed of valid terms, possibly a rule sign (":-
        "),  commas representing conjunction ("and"), and a period at the 
        very end.
             A term is a structure, constant, variable, or number.
         
             What is a structure? It is a kind of grouping:

             1) Structures consist of a functor, and a set of objects or
                structures in parenthesis.

             2)  Objects are constants,  variables,  numbers,  or  lists, 
                which we have not discussed yet.

             3)  A  constant or functor must be a string of  letters  and 
                numbers, beginning with a lower case letter, unless
                you  choose  to  enclose  it in single  quotes  (  'howdy 
                pardner'  ),  in  which  case you are  freed  from  these 
                restrictions.
             4) A  variable  must be a string of  letters  and  numbers 
                beginning with a capital letter.
             
             5) A  functor  may optionally have  arguments  enclosed  in 
                parenthesis , as in: hascar( X ) or hascar. 

        An example:  "has( X, transportation )." is a structure.



















                                       42








        III.                     Input / Output      

             You   now   know  enough  to  write  simple  databases   and 
        interrogate   them  profitably.   But  before  we  examine   more 
        sophisticated  examples,  it  will be necessary to add input  and 
        output to the language. There are built in functions which appear 
        as rules which are satisfied once. Thus the statment:

             write( 'Hello world.' ).

        can be included on the right side of a rule:


        greetings(  X ) :- ishuman( X ),  write( 'Hello world.' ).  You 
        can  also write "write( X )" where X is some variable.  Note that 
        'Hello  world.' is not enclosed in double quotes.  Single quotes, 
        which denote a constant, are required. Double quotes would denote 
        a list, which is another thing entirely.

        Provided  that  a match to "ishuman" can be  found,  the  builtin 
        function  "write"  is  executed and the message  printed  to  the 
        screen.
             The  builtin  read( X ) reads a "structure" that  you  input 
        from the keyboard. More formally, we have

             read( <variable> or <constant> )
             write( <variable> or <constant> )

        If you write read( Input ),  then the variable "keyboard" will be 
        assigned to whatever is typed at the keyboard,  provided that the 
        input  is a valid PROLOG structure.  The builtin "read" will fail 
        if instead of Keyboard we wrote read( baloney ),  where "baloney" 
        is a constant,  and the user at the keyboard did not type exactly 
        "baloney." 

        When you input a structure in response to a "read" statement,  be 
        sure to end it with a period and an <ENTER>. 

             There  is  a convenient way of putting the cursor on  a  new 
        line. This is the builtin "nl". For example:

             showme :- write( 'line 1' ), nl, write( 'line 2' ). 

        would result in:

             line 1
             line 2

             There  is  also a primitive form of input/output for  single 
        characters. It will be discussed later.







                                       43








        IV.                   A Fault Tree Example

             Consider the "won't start" fault tree for an automobile:

        {Car won't start}
             | 
             | 
        [Engine  turns  over](No) --> [Battery voltage](no)-\
                (Yes)                                       v
                 |                                  {Check battery}
                 |
        [Smell gasoline](yes) --> {Try full throttle cranking}
                 |                       (failure)
        /--------/                           |
        |           /------------------------/ 
        |           |                       
        |           |
        |  [Check for fuel line leaks](yes)-->{Replace fuel line}
        |          (no)
        |           |
        |           |
        |  [Check for defective carburator](yes)--\
        |          (no)                           v
        |                                {Repair carburator}
        \----\
             |
             |
        [Is spark present](no)-->[Do points open and close](no)-\
             |                             (yes)                v
        /----/                               |          {Adjust points}
        |           /------------------------/
        |           |
        |  [Pull distributor wire, observe spark](blue)--\
        |        (orange)                                v
        |           |                           {Check plug wires & cap}
        |           |
        |  [Measure voltage on coil primary](not 12V)--\
        |         (12V)                                v
        |           |              {Check wiring, ballast resistor}
        |           |
        |  [Check condenser with ohmmeter](conducts)--\
        |    (no conduction)                          v
        |           |                         {Replace condenser}
        |           |
        |  [Open and close points](voltage not 0 - 12)--\
        |   (voltage swings 0 - 12)                     v
        |           |                         {Fix primary circuit}
        |           |
        |  {Consider hidden fault, swap components]
        |
        |
        \-------{Call a tow truck!!}





                                       44








             A PROLOG program to  implement this is simple. Each statment 
        represents  a  decision point fragment of the  tree.  The  PROLOG 
        interpreter  dynamically  assembles  the tree as  it  attempts  a 
        solution. 

        'car wont start' :- write( 'Is the battery voltage low?' ), 
                            affirm, nl,
                            write( 'Check battery' ).

        'car wont start' :- write( 'Smell gasoline?' ), 
                            affirm, nl,
                            'fuel system'.

        'fuel system'    :- write( 'Try full throttle cranking' ).

        'fuel system'    :- write( 'Are there fuel line leaks?' ),
                            affirm, nl,
                            write( 'Replace fuel line.' ).

        'fuel system'    :- write( 'Check carburator' ).

        'car wont start' :- write( 'Is spark present?' ),
                            not( affirm ), nl,
                            'no spark'.

        'no spark'       :- write( 'Do points open and close?' ),
                            not( affirm ), nl,
                            write( 'Adjust or replace points.' ).

        'no spark'       :- write( 'Is the spark off the coil good?' ),
                            affirm,
                            write( 'Check plug wires and cap.' ).

        'no spark'       :- write( 'What is the voltage on the primary
                             of the coil: ' ), 
                            read( Volts ), 
                            Volts < 10,
                            nl,
                            write('Check wiring and ballast resistor.').

        'no spark'       :- write( 'Does the capacitor leak?' ),
                            affirm,
                            write( 'Replace the capacitor.' ).

        'no spark'       :- not( 'primary circuit' ).

        'primary circuit' 
                         :- write( 'Open the  points.  Voltage  across 
                              coil?:'), nl,
                            read( Openvolts ), Openvolts < 1, 
                            write(  'Close the points.  Voltage  across 
                              coil?:'),
                            read( Closevolts ), Closevolts > 10, nl,
                            write( 'Primary circuit is OK.' ). 



                                       45








        'no spark'       :- write( 'Consider a hidden fault. Swap
                              cap, rotor,points,capacitor.' ).


        'Car wont start' :- write( 'Get a tow truck!!' ).


                                 --End program--


             The  above  is  a  simple example of  an  expert  system.  A 
        sophisticated  system would tell you exactly the method by  which 
        it  has reached a conclusion.  It would communicate by a  "shell" 
        program  written  in PROLOG which would accept a wider  range  of 
        input   than  the  "valid  structure"  required  by  the   PROLOG 
        interpreter directly.









































                                       46








        V.                            Lists               

             Consider  a  shopping list given you by your wife.  It is  a 
        piece of paper with items written on it in an order that probably 
        symbolizes  their  importance.  At the top it  may  say  EGGS!!!, 
        followed by carrots, hamburger, and finally a flea collar for the 
        dog, if you can find one. In PROLOG such a list would be written:

        1)   [eggs, carrots, hamburger, fleacollar]

        The  order of a list is important so that eggs and carrots cannot 
        be reversed and PROLOG be uncaring.

        Let us put the list in a structure:

             shopping( [eggs, carrots, hamburger, fleacollar] ).

        Then  if you wished to isolate the head of the list you could ask 
        the question:

             shopping( [ Mostimportant | Rest ] ).

        and PROLOG would respond:

             Mostimportant   =  eggs,   
             Rest   =   [carrots,   hamburger, fleacollar].

        The vertical bar "|" is crucial here. It is the string extraction 
        operator,  which  performs  a  combination  of the  CDR  and  CAR 
        functions  of LISP.  When it appears in the context [X|Y] it  can 
        separate the head of the list from the rest, or tail.


             You  may have gained the impression that PROLOG is a  rather 
        static language capable of answering simple questions,  but it is 
        far  more powerful than that.  The string extraction operator  is 
        the  key.  It permits PROLOG to whittle a complex expression down 
        to the bare remainder.  If the rules you have given it permit  it 
        to  whittle  the  remainder  down to  nothing,  then  success  is 
        achieved. An example of this is the definition of "append."

             Let  us suppose you have not yet done yesterday's  shopping, 
        let alone today's. You pull it out of your wallet and sootch tape 
        it to the list your wife just gave you. Yesterday's list was:

             [tomatoes, onions, ketchup]

        Combined with [eggs, carrots, hamburger, fleacollar] we obtain

             [eggs,carrots,hamburger,fleacollar,tomatoes,onions,garlic].

        To  take one list and to attach it to the tail of another list is 
        to  "append"  the first to the second.  The PROLOG definition  of 
        append is:



                                       47










        Rule1:     append( [], L, L ).

        Rule2:     append( [X|List1], List2, [X|List3] ) :-
                      append( List1, List2, List3 ].

        The  general  scheme is this:  

        The definition consists of one rule and one fact.  The rule  will 
        be used over and over again until what little is left matches the 
        fact.  The [] stands for empty list,  which is like a bag without 
        anything in it. This is an example of a recursive definition.
             Suppose we ask:

             append( [a,b,c], [d,e,f], Whatgives ).

        1. Rule 2 is invoked with arguments ( [a,b,c], [d,e,f], Whatgives ).
        2. Rule 2 is invoked again with arguments:
             ( [b,c], [d,e,f], List3 ).
        3. Rule 2 is invoked again with arguments:
             ( [b], [d,e,f], List3 ).
        4.  The  arguments  are now ([],  [d,e,f],  List3 ).  Rule 1  now 
            matches. End.

        How does this cause a list to be constructed? The key is to watch 
        the   third  argument.   Supplied  by  the  user,   it  is  named 
        "Whatgives". The inference engine matches it to [X|List3] in rule 
        2. Now lets trace this as rule two is successivly invoked: 


                Whatgives                                                
                   |                                                     
                   |                                                     
                   |                                                     
                   v                                                     
        Rule2:  [X|List3] (List1 = [b,c])                                
                 |  \                                                    
                 |   \                                                   
                 |    \                                                  
                 v     \                                                 
        Rule2:   a   [X'|List3'] (List1' = [c])                          
                      |    \                                             
                      |     \                                            
                      |      \                                           
                      v       \                                          
        Rule2:        b     [X''|List3''] (List1'' = [], ie., empty set.)
                              |    \                                     
                              |     \                                    
                              |      \                                   
        Rule1:                c       L  ( in Rule1 = [d,e,f] )              
                                                                         
        End.




                                       48








        L in rule 1 is [d,e,f] for the following reason: Notice that rule 
        2 never alters List2. It supplies it to whatever rule it invokes. 
        So L in rule 1 is the original List2, or [a,b,c].

             This example would not have worked if the order of rules one 
        and  two  were  reversed.  The  PROLOG  inference  engine  always 
        attempts to use the the first rule encountered. You could imagine 
        it as always reading your program from the top down in attempting 
        to  find an appropriate rule.  Since rule 2 would always satisfy, 
        an  unpleasant  thing  would  have happened  if  the  order  were 
        reversed. The program would loop forever.



             I  hope  that  this tiny introduction to PROLOG  whets  your 
        appetite. Here's a suggested book list:

        If  you  don't  consider yourself very  technical,  or  you're  a 
        manager wishing to learn about Prolog, or you simply want as much 
        assistance as possible, a good starter book is:

             Introduction to Prolog
             Bharath, Ramachandran
             TAB books, 1985

        The "standard text",  which throws piles of source code fragments 
        at you is:

             Programming In Prolog
             W.F. Clocksin and C.S. Mellish
             Springer - Verlag
             Berlin,Heidelberg,New York. 1981,1984

        This  book  can be ordered from B.  Dalton's.  The one in  Willow 
        Grove, Pa (215)-657-8383, attempts to keep it in stock. Would you 
        please mention PD PROLOG?  We're trying to get Dalton's to  carry 
        our products in their software section.

        The  authors  apparently  believe  in the  Montessori  method  of 
        instruction.  

        If  you  think that what you want  is  detailed  explanation,  we 
        recommend:

             Prolog for Programmers
             Kluzniak, Feliks and Szpakowicz, Stanislaw
             APIC Studies in Data Processing No. 24
             Academic Press, 1985

        This is a detailed text which rewards careful study. Most likely, 
        you'll decide you didn't want detailed explanation afterall.

             If  one  purchased all of the books,  one would  undoubtedly 
        find  reward  in switching from one to the  other,  as  the  need 
        arose.


                                       49










        We also recomend, for the mathematically inclined

             Foundations of Logic Programming
             J.W. Lloyd
             Springer - Verlag 1984


             Logic Programming
             Edited by K.L. Clark and S.-A. Tarnlund
             Academic Press, 1982













































                                       50






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0417

     Volume in drive A has no label
     Directory of A:\

    ARC      EXE     32181   3-05-86  11:33a
    ARCDOC   ARC     24123   3-05-86  11:34a
    FILES417 TXT       803   1-31-87   3:08p
    GO       BAT       584  11-21-86   9:02a
    PROLOG   ARC    274923  12-26-86  11:13a
    READ     ME       3870  11-07-86   1:48a
    README            3200  11-18-85  12:00p
            7 file(s)     339684 bytes
                           19456 bytes free
