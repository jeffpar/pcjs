---
layout: page
title: "PC-SIG Diskette Library (Disk #1364)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1364/
preview: https://pcsigdisks.pcjs.org/pcx86/sw/misc/pcsig/1000-1999/DISK1364/DISK1364.jpg
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1364"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PKZIP, PKUNZIP, AND PKSFX"

    Whoa! Hold on there guys! There's a new program in town!
    
    PKZIP is the new file compression system from PKWARE that lets you cram
    a lot more programs and data onto that precious, crowded real estate of
    your hard disk by shrinking it all into small archived ZIP files.
    Other things PKZIP can do for you: When you need to take your data on
    the go, ZIPping means you will have fewer floppies to carry or lose!
    Downloads and backing-up your system will go faster. ZIPped files also
    take less time to transmit via a modem. Many BBSs (computer bulletin
    board services) are now using ZIP files as their standard.
    
    PKZIP also handles all your file maintenance needs, including adding and
    deleting files, and reporting on technical information from within
    compressed files.
    
    PKUNZIP is the complementary program that reconstructs or extracts
    compressed files. In addition to reconstructing a complete ZIP file, it
    can selectively release individual files, show files on the screen for
    fast viewing, or print them. PKSFX creates self-extracting archive
    files. Archived files may be updated, listed to the screen, annotated
    with comments, printed, and password protected.
    
    Included is a 28-page on-disk manual telling you everything you could
    ever want to know about how compression works.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADDENDUM.DOC

{% raw %}
```


     PKZIP, PKUNZIP and PKSFX Version 1.1 includes several new features.
     They are described in this addendum to the PKZIP, PKUNZIP and PKSFX
     Version 1.0 manual.


     PKZIP

     The following new features have been incorporated into the PKZIP
     Version 1.1 software release.

     -3  Disable 80386 instruction usage
     -----------------------------------

          This option is available for users with 80386 type computers.
          It is used to turn OFF the added 80386 instructions or
          registers.  When these instructions are available, PKZIP will
          utilize them to allow the program to function even faster.
          However, if you are running a different program that may
          conflict with use of the 80386 instructions, you can disable
          them by using this command.

          The 80386 instructions will be disabled only for the current
          PKZIP operation.  They will then be enabled immediately after
          the command operation is completed.

          C:\PKWARE> PKZIP FILES.ZIP  -3   -a  *.DOC

          In the above example,  all of the *.DOC files in the current
          directory will be added to the ZIP file, FILES.ZIP.  The 80386
          instructions will be disabled while the command is being
          executed.


          You can also disable the 80386 instructions when you start
          PKZIP by using the PKNO386 environment variable.  To set the
          environment variable, type PKNO386=xxxx, where "xxxx" is any
          string you choose.  If the string PKNO386 is present in the
          environment, then PKZIP (and PKUNZIP) will not use the 80386
          instructions or registers.

          To enable the 80386 instructions after they have been
          disabled, type SET PKNO386=<Enter>, where <Enter> refers to
          the Enter key.


          NOTE:  Disabling the 80386 usage will make PKZIP run up to
                 twenty percent slower than if the 80386 instructions
                 are used.




     PKWARE Version 1.1  Addendum         1



     -^  Echo the command line
     -------------------------

          This command is used to display the PKZIP command that you
          entered on the console.  It is useful for example, when you
          are using the View file option; the file specifications that
          you entered will be echoed on the console along with the
          command output.

          E:\> PKZIP  docs.zip  -vd -^ *.doc

          In this example, technical information about all of the *.doc
          files included in the DOCS.ZIP  ZIP file will be displayed.
          The information will be sorted by date, and the command line
          will be redisplayed on the screen above the output.


     -x@file  Exclude list file
     --------------------------

          This option is used to exclude a List File from the current
          operation.  Recall that a List File is a file containing a
          list of files that are grouped together.  List Files can be
          used with all the PKZIP and PKUNZIP command options.  They are
          always preceded by the @ symbol on the command line.

          This command can be useful when you want to exclude a few
          files from an operation and the DOS wild cards cannot be used
          effectively.

          C:\ACTNG> PKZIP STORE  *.* -x@ACCOUNTS.LIS

          In the above example, all of the files in the current
          directory, except for the List File, ACCOUNTS.LIS, will be
          compressed into the ZIP file STORE.ZIP.


     -$[d]   Save volume label
     -------------------------

          This command is used to save the volume label of a specific
          drive along with the ZIP file.  The default drive is the
          current drive, unless another is specified.  The drive letter
          is not saved in the ZIP file, only the volume label.

          C:\ACCTNG> PKZIP  FILES.TAX  -a -$  *.*

          In the above example, all of the files in the current directory
          will be compressed into the ZIP file, FILES.TAX. They will be
          stored along with the volume label for the C: drive.


     PKWARE Version 1.1  Addendum         2



     -t  ZIP only files with a date equal to or later than specified
     ---------------------------------------------------------------

          With this option, you can specify a date so that only files
          with a date that is equal to or more recent than the date
          specified will be included in the PKZIP operation.  If no date
          is specified, today's date will be used by default.

          When specifying a date, use six digits in the following
          format:  mmddyy.  For example, February 14, l990 will be
          listed:  -t021490.  This is true for all computers setup as
          American.  If your computer is setup as European, use the
          following format: ddmmyy.  If your computer is setup as
          Japanese, use the following format:  yymmdd.  If you are not
          sure how your computer is setup, consult your user's manual.

          C:\BACKUP> PKZIP BAKS.ZIP  -t010190

          In this example, all files in the current directory with a
          date later than or equal to January 1, l990 will be compressed
          into the ZIP file, BAKS.ZIP.


     -ei   Implode files only
     ------------------------

          This option is used along with the mini-PKSFX program,
          PKSFXjr.  Only files that have been imploded can be extracted
          with PKSFXjr.  Shrunk files cannot be extracted.  In order to
          create a PKSFXjr.EXE file, this option must be used.

          E:\BATS> PKZIP  EXT.ZIP  -ei

          In this example, all of the files in the current directory
          will be compressed into the ZIP file, EXT.ZIP.  All of the
          files will be imploded.


     PKZIP Configuration File
     ------------------------

          The PKZIP Configuration file can be used to set parameters to
          values other than the normal default values.  There are three
          additional Configuration file options available.  They are
          explained on the following page.







     PKWARE Version 1.1  Addendum         3



          SHRINK > nnnnn
          Where nnnn is some number specifying that files that are
          greater than this number are to be Shrunk.  This option is
          used to save time when you are compressing large files.
          Typically, large files take longer to compress when the
          imploding method is used.

          LISTCHAR=
          This option is used to designate a special character to be used
          to indicate a List file.  By default the  @ character is used,
          as in @FILE.  If you want to use  @ as the first character in a
          file name, you can designate an alternate character to be used
          to indicate List files.  For example, you could use the # or
          the % characters.

          OPTIONCHAR=
          This option is used to designate a special character to be
          used to indicate a command on the command line.  By default,
          the minus sign  - is used.  If you want to use the minus sign
          as the first character in a file name, you can designate an
          alternate character to be used to indicate a command.  For
          example, you could use the / character.


          Also, PKZIP 1.1 will now search for the Configuration file in
          the following order:

          1.  In the current directory.
          2.  In the path specified by the PKZIP.CFG=  environment
              variable.
          3.  In the path where PKZIP was started from, if DOS version
              greater than or equal to 3.x is being used.


     Additional Error Code
     ---------------------

          There is an additional error code available with PKZIP version
          1.1.  PKZIP will exit with an errorlevel of 18 when it is
          unable to open one or more specified files.  It should be noted
          that this is a "warning" condition only,  and otherwise PKZIP
          was able to construct the ZIP file without any errors.


     NOTE:  There is no longer a 3900 file limit with PKZIP.  The total
            number of files that can be processed is limited only by the
            memory available in the system you are using.  Approximately
            8000 files can be compressed in a ZIP file with 500K+ of
            memory free.



     PKWARE Version 1.1  Addendum         4



     Authenticity Verification
     -------------------------

      -!  Encrypt authenticity verifiable data into the .ZIP file.

          This feature allows you to create ZIP files that PKUNZIP or
          PKSFX can test for authenticity while extracting, providing for
          detection of tampered, hacked, or virus infected files.

          To use this feature, you need to be a registered user of the
          software, and mail the form AUTHVERI.FRM to PKWARE.  PKWARE
          will then send you a postcard listing your name or the name of
          your company, and a unique serial number.

          You must then use the PUTAV.EXE program included with the
          PKWARE program files to install this information.  To do this,
          use the following steps.

          Step 1.  Type PUTAV.  Make sure that PKZIP.EXE is also in the
                   current directory when you do this.  The program will
                   then prompt you to enter your company name.

          Step 2.  Enter your name or the name of the company the
                   software is registered to.  Enter it the same as it
                   appears on the postcard that PKWARE sent.  Press the
                   Enter key when you are done.

          Step 3.  Enter the serial number at the prompt.  Then press
                   the Enter key.

          After successfully completing the above steps, "Serial number
          installation complete" will appear on the screen.  Your name
          and unique serial number will then be encrypted in the program.

          To use this option, include -! on the PKZIP command line. When
          you then extract or test a file using PKUNZIP, it will
          automatically be verified for authenticity.  An example is
          shown below.

          D:\> PKZIP -! ALL.ZIP *.*

          In this example, all of the files in the current directory
          will be ZIPPED into a file called ALL.ZIP, and they will
          include the Verify Authenticity option.  When this file is
          UNZIPPED using PKUNZIP, a message will appear stating the
          authenticity has been checked.

    NOTE: The authenticity verification feature is available in the
	  U.S.A. and Canada only.  File encryption and authenticity
	  verification is not available in export versions of the software.


     PKWARE Version 1.1  Addendum         5



     PKUNZIP

     The following new features have been incorporated into the PKUNZIP
     Version 1.1 software release.


     -3  Disable 80386 instruction usage
     -----------------------------------

          This option is available for users with 80386 type computers.
          It is used to turn OFF the added 80386 instructions or
          registers.  When these instructions are available, PKUNZIP
          will utilize them to allow the program to function even
          faster.  However, if you are running a different program that
          may conflict with the use of the 80386 instructions, you can
          disable them by using this command.

          The 80386 instructions will be disabled only for the current
          PKUNZIP operation.  They will be enabled immediately after the
          command operation is completed.


          C:\PKWARE> PKUNZIP -3 COMP.ZIP  DAT*.*

          In the above example,  all of the DAT*.* files in the ZIP file
          COMP.ZIP will be extracted.  The 80386 instructions will be
          disabled while the command is being executed.


          You can also disable the 80386 instructions when you start
          PKUNZIP by using the PKNO386 environment variable.  To set the
          environment variable, type PKNO386=xxxx, where "xxxx" is any
          string you choose.  If the string PKNO386 is present in the
          environment, then PKUNZIP will not use the 80386 instructions
          or registers.

          To enable the 80386 instructions after they have been
          disabled, type SET PKNO386=<Enter>, where <Enter> refers to
          the Enter key.

          NOTE:  Disabling the 80386 usage will make PKUNZIP run up to
                 forty percent slower than if the 80386 instructions are
                 used.









     PKWARE Version 1.1  Addendum         6



     -^  Echo the command line
     -------------------------

          This command is used to display the PKUNZIP command that you
          entered on the console.  It is useful for example, when you are
          using the View file option.  It allows the file specifications
          that you entered to be echoed on the screen along with the
          command output.

          E:\> PKUNZIP  -^ -vn  MAY.ZIP

          In this example, technical information about all of the files
          included in the MAY.ZIP  ZIP file will be displayed.  The
          information will be sorted by name in ascending order, and the
          command line will be redisplayed on the screen above the
          output.


     -$   Restore volume label
     -------------------------

          This command is used to restore any volume label that has been
          stored in the ZIP file.  It is important to remember that the
          PKZIP command used to save a volume label does not store a
          drive letter along with the label.  Upon extraction, the
          volume label will be assigned to the extract drive.

          C:\> PKUNZIP  stuff  -$ d:\misc

          In the above example, all of the files STUFF.ZIP will be
          extracted to the D:\MISC\ directory, and the volume label for
          drive D: will be reset to the one contained in STUFf.ZIP.


     -f   Freshen files in extract directory
     ---------------------------------------

          This function is the inverse of the Freshen option in PKZIP.
          When this option is used, files will be extracted from the ZIP
          file if and only if:

          a)  the files already exist in the target extract directory,
          AND
          b)  the files in the ZIP file are newer then the files in the
              extract directory.

          D:\MISC> PKUNZIP -f  files.zip  a:

          In this example, only those files that meet both of the above
          criteria will be extracted to the A: drive.


     PKWARE Version 1.1  Addendum         7



     -x or -e[c,d,e,n,p,s]  Extract files in designated order
     --------------------------------------------------------

          The above option is used to specify a particular order in
          which to extract files from a ZIP file.  These options are
          used along with  -x or -e, the default PKUNZIP extract option.
          All of the options are defined below.

          -xc or -ec   Extract files in order of CRC value
          -xd or -ed   Extract files in order of date
          -xe or -ee   Extract files in alphabetical order by extension
          -xn or -en   Extract files in alphabetical order by file name
          -xp or -ep   Extract files in order of percentage (ratio) of
                       compression
          -xs or -es   Extract files in order by size


          NOTE:  Future versions of PKUNZIP will only support the -e
                 option and support of the -x option will be discontinued
                 in future versions of PKUNZIP.

          C:\ZIPS>  PKUNZIP  -en -cm  keep.zip

          In this example, all of the files in KEEP.ZIP will be
          extracted to the monitor in alphabetical order.


     ZIP2EXE

          ZIP2EXE no longer requires external PKSFX.PRG files.  There are
          new command line features available with version 1.1 of the
          ZIP2EXE program.  The features available depend on whether you
          are using the MS-DOS or OS/2 versions of the sofware.

          ZIP2EXE  MS-DOS version   -j    Use PKFSXjr program
          ZIP2EXE  OS/2 version     -f    Use PKSFX family mode program


          ZIP2EXE -j   Use the PKSFXjr program

          This option is available only if you have the MS-DOS software
          version.  If the -j option is specified, the mini version,
          PKSFXjr, will be used.  For details on this option, see the
          section on PKSFXjr on page 10.  If this option is not
          specified, the ZIP2EXE program will utilize the standard PKSFX
          program.






     PKWARE Version 1.1  Addendum         8



          ZIP2EXE -f  Create family mode self-extracting file

          This option is used when you are using the OS/2 software
          version.  It specifies that an OS/2 family mode .EXE file is to
          be created, which will run under OS/2 and MS-DOS. If this
          option is not included on the command line, the software will
          create an OS/2 protected mode .EXE file.



     PKSFX  -s<password>   Support password decryption
     -------------------------------------------------

          PKSFX now supports the -s<password> decryption option.  This
          option functions the same as with the PKUNZIP option.  When
          unzipping a ZIP file, including a self-extracting ZIP file,
          that has been encrypted, the files cannot be extracted unless
          the correct password is specified on the command line.

          When specifying the password, there is no space between the s
          and the password.  Also, the password is case sensitive.
          Recall, it is important that you remember or somehow record
          the passwords that you use, because PKWARE does not retain a
          record of these passwords anywhere.

          D:\> a:files -sCode b:

          In the above example, the self-extracting ZIP file, FILES.EXE,
          will be extracted to the B: drive if the correct password for
          the file is Code.



     PKSFX   Confirm before extracting files
     ---------------------------------------

          If the ZIP comment for a file contains a Ctrl-S (0x13), PKSFX
          will display the ZIP comment followed by this statement: "Do
          you want to extract these files now (y/n)?"

          After viewing the ZIP comment, you can decide if you actually
          want to extract these particular files.  Press Y to extract the
          files.  Press N to abort the PKSFX process.  If the process is
          aborted, PKSFX will exit with with an ErrorLevel of 12.

          The Ctrl-S character string will not be displayed in the ZIP
          comment.





     PKWARE Version 1.1  Addendum         9



     PKSFXjr
     -------

          This is a mini-PKSFX program.  You can create a self-
          extracting ZIP file with it by using the -j option on the
          command line when running the ZIP2EXE version 1.1 program.  An
          example is shown below.

          C:\MISC> ZIP2EXE  -j  miscfile.zip


          PKSFXjr includes the following features.

          - PKSFXjr is only 2936 bytes in size.

          - PKSFXjr also supports the comment pausing feature added to
            the standard PKSFX program.  For details on this feature, see
            the explanation above.

          - PKSFXjr will extract all of the files in the self-extracting
            ZIP file.  Individual file names cannot be specified.

          - The only PKUNZIP command line option supported by PKSFXjr is
            the  -o Overwrite option.

          - A maximum of approximately 500 files can be contained within
            a PKSFXjr.EXE file.  However, there is no limit on the
            overall size of the .EXE file that can be created with
            PKSFXjr.

          - PKSFXjr only supports the Exploding of files.  Files that
            have been compressed using the Shrinking method will not be
            extracted.  In order to create a PKSFXjr.EXE file, the -ei
            Implode only option of PKZIP must be used.

          - PKSFXjr requires only about 32K of memory to run.

          - PKSFXjr has the following ErrorLevel exit codes:

            1.  Warning error (failed CRC etc.)
            2.  Can't find .EXE file
            3.  Error in .EXE file
            4.  File has a bad table
            5.  Can't create file
            6.  Disk full
            7.  Too many files
            8.  User aborted at comment pausing





     PKWARE Version 1.1  Addendum         10


```
{% endraw %}

## APPNOTE.TXT

{% raw %}
```

Disclaimer
----------

Although PKWARE will attempt to supply current and accurate
information relating to its file formats, algorithms, and the
subject programs, the possibility of error can not be eliminated.
PKWARE therefore expressly disclaims any warranty that the
information contained in the associated materials relating to the
subject programs and/or the format of the files created or
accessed by the subject programs and/or the algorithms used by
the subject programs, or any other matter, is current, correct or
accurate as delivered.  Any risk of damage due to any possible
inaccurate information is assumed by the user of the information.
Furthermore, the information relating to the subject programs
and/or the file formats created or accessed by the subject
programs and/or the algorithms used by the subject programs is
subject to change without notice.


General Format of a ZIP file
----------------------------

  Files stored in arbitrary order.  Large zipfiles can span multiple
  diskette media.

  Overall zipfile format:

    [local file header+file data] . . .
    [central directory] end of central directory record


  A.  Local file header:

	local file header signature	4 bytes  (0x04034b50)
	version needed to extract	2 bytes
	general purpose bit flag	2 bytes
	compression method		2 bytes
	last mod file time 		2 bytes
	last mod file date		2 bytes
	crc-32   			4 bytes
	compressed size			4 bytes
	uncompressed size		4 bytes
	filename length			2 bytes
	extra field length		2 bytes

	filename (variable size)
	extra field (variable size)


  B.  Central directory structure:

      [file header] . . .  end of central dir record

      File header:

	central file header signature	4 bytes  (0x02014b50)
	version made by			2 bytes
	version needed to extract	2 bytes
	general purpose bit flag	2 bytes
	compression method		2 bytes
	last mod file time 		2 bytes
	last mod file date		2 bytes
	crc-32   			4 bytes
	compressed size			4 bytes
	uncompressed size		4 bytes
	filename length			2 bytes
	extra field length		2 bytes
	file comment length		2 bytes
	disk number start		2 bytes
	internal file attributes	2 bytes
	external file attributes	4 bytes
	relative offset of local header	4 bytes

	filename (variable size)
	extra field (variable size)
	file comment (variable size)

      End of central dir record:

	end of central dir signature	4 bytes  (0x06054b50)
	number of this disk		2 bytes
	number of the disk with the
	start of the central directory	2 bytes
	total number of entries in
	the central dir on this disk	2 bytes
	total number of entries in
	the central dir			2 bytes
	size of the central directory   4 bytes
	offset of start of central
	directory with respect to
	the starting disk number	4 bytes
	zipfile comment length		2 bytes
	zipfile comment (variable size)




  C.  Explanation of fields:

      version made by

	  The upper byte indicates the host system (OS) for the
	  file.  Software can use this information to determine
	  the line record format for text files etc.  The current
	  mappings are:

	  0 - MS-DOS and OS/2 (F.A.T. file systems)
	  1 - Amiga			2 - VMS
	  3 - *nix			4 - VM/CMS
	  5 - Atari ST                  6 - OS/2 H.P.F.S.
	  7 - Macintosh			8 - Z-System
	  9 - CP/M			10 thru 255 - unused

	  The lower byte indicates the version number of the
	  software used to encode the file.  The value/10
	  indicates the major version number, and the value
	  mod 10 is the minor version number.

      version needed to extract

	  The minimum software version needed to extract the
	  file, mapped as above.

      general purpose bit flag:

          bit 0: If set, indicates that the file is encrypted.
          bit 1: If the compression method used was type 6,
		 Imploding, then this bit, if set, indicates
		 an 8K sliding dictionary was used.  If clear,
		 then a 4K sliding dictionary was used.
          bit 2: If the compression method used was type 6,
		 Imploding, then this bit, if set, indicates
		 an 3 Shannon-Fano trees were used to encode the
		 sliding dictionary output.  If clear, then 2
		 Shannon-Fano trees were used.
	  Note:  Bits 1 and 2 are undefined if the compression
		 method is other than type 6 (Imploding).

          The upper three bits are reserved and used internally
	  by the software when processing the zipfile.  The
	  remaining bits are unused in version 1.0.

      compression method:

	  (see accompanying documentation for algorithm
	  descriptions)

	  0 - The file is stored (no compression)
	  1 - The file is Shrunk
	  2 - The file is Reduced with compression factor 1
	  3 - The file is Reduced with compression factor 2
	  4 - The file is Reduced with compression factor 3
	  5 - The file is Reduced with compression factor 4
          6 - The file is Imploded

      date and time fields:

	  The date and time are encoded in standard MS-DOS
	  format.

      CRC-32:

	  The CRC-32 algorithm was generously contributed by
	  David Schwaderer and can be found in his excellent
	  book "C Programmers Guide to NetBIOS" published by
	  Howard W. Sams & Co. Inc.  The 'magic number' for
	  the CRC is 0xdebb20e3.  The proper CRC pre and post
	  conditioning is used, meaning that the CRC register
	  is pre-conditioned with all ones (a starting value
	  of 0xffffffff) and the value is post-conditioned by
	  taking the one's complement of the CRC residual.
	
      compressed size:
      uncompressed size:

	  The size of the file compressed and uncompressed,
	  respectively.

      filename length:
      extra field length:
      file comment length:

	  The length of the filename, extra field, and comment
	  fields respectively.  The combined length of any
	  directory record and these three fields should not
	  generally exceed 65,535 bytes.

      disk number start:

	  The number of the disk on which this file begins.

      internal file attributes:

	  The lowest bit of this field indicates, if set, that
	  the file is apparently an ASCII or text file.  If not
	  set, that the file apparently contains binary data.
	  The remaining bits are unused in version 1.0.

      external file attributes:

	  The mapping of the external attributes is
	  host-system dependent (see 'version made by').  For
	  MS-DOS, the low order byte is the MS-DOS directory
	  attribute byte.

      relative offset of local header:

	  This is the offset from the start of the first disk on
	  which this file appears, to where the local header should
	  be found.

      filename:

	  The name of the file, with optional relative path.
	  The path stored should not contain a drive or
	  device letter, or a leading slash.  All slashes
	  should be forward slashes '/' as opposed to
	  backwards slashes '\' for compatibility with Amiga
	  and Unix file systems etc.

      extra field:

	  This is for future expansion.  If additional information
	  needs to be stored in the future, it should be stored
	  here.  Earlier versions of the software can then safely
	  skip this file, and find the next file or header.  This
	  field will be 0 length in version 1.0.

	  In order to allow different programs and different types 
	  of information to be stored in the 'extra' field in .ZIP 
	  files, the following structure should be used for all 
	  programs storing data in this field:

	  header1+data1 + header2+data2 . . .

	  Each header should consist of:

	    Header ID - 2 bytes
	    Data Size - 2 bytes

	  Note: all fields stored in Intel low-byte/high-byte order.

	  The Header ID field indicates the type of data that is in 
	  the following data block.
      
	  Header ID's of 0 thru 31 are reserved for use by PKWARE.  
	  The remaining ID's can be used by third party vendors for 
	  proprietary usage.

	  The Data Size field indicates the size of the following 
	  data block. Programs can use this value to skip to the 
	  next header block, passing over any data blocks that are 
	  not of interest.

	  Note: As stated above, the size of the entire .ZIP file
		header, including the filename, comment, and extra
		field should not exceed 64K in size.

	  In case two different programs should appropriate the same 
	  Header ID value, it is strongly recommended that each 
	  program place a unique signature of at least two bytes in 
	  size (and preferably 4 bytes or bigger) at the start of 
	  each data area.  Every program should verify that it's 
	  unique signature is present, in addition to the Header ID 
	  value being correct, before assuming that it is a block of 
	  known type.

      file comment:

	  The comment for this file.

      number of this disk:

	  The number of this disk, which contains central
	  directory end record.

      number of the disk with the start of the central directory:

	  The number of the disk on which the central
	  directory starts.

      total number of entries in the central dir on this disk:

	  The number of central directory entries on this disk.
	
      total number of entries in the central dir:

	  The total number of files in the zipfile.


      size of the central directory:

	  The size (in bytes) of the entire central directory.

      offset of start of central directory with respect to
      the starting disk number:

	  Offset of the start of the central direcory on the
	  disk on which the central directory starts.

      zipfile comment length:

	  The length of the comment for this zipfile.

      zipfile comment:

	  The comment for this zipfile.


  D.  General notes:

      1)  All fields unless otherwise noted are unsigned and stored
	  in Intel low-byte:high-byte, low-word:high-word order.

      2)  String fields are not null terminated, since the
	  length is given explicitly.

      3)  Local headers should not span disk boundries.  Also, even
	  though the central directory can span disk boundries, no
	  single record in the central directory should be split
	  across disks.

      4)  The entries in the central directory may not necessarily
	  be in the same order that files appear in the zipfile.

UnShrinking
-----------

Shrinking is a Dynamic Ziv-Lempel-Welch compression algorithm
with partial clearing.  The initial code size is 9 bits, and
the maximum code size is 13 bits.  Shrinking differs from
conventional Dynamic Ziv-lempel-Welch implementations in several
respects:

1)  The code size is controlled by the compressor, and is not
    automatically increased when codes larger than the current
    code size are created (but not necessarily used).  When
    the decompressor encounters the code sequence 256
    (decimal) followed by 1, it should increase the code size
    read from the input stream to the next bit size.  No
    blocking of the codes is performed, so the next code at
    the increased size should be read from the input stream
    immediately after where the previous code at the smaller
    bit size was read.  Again, the decompressor should not
    increase the code size used until the sequence 256,1 is
    encountered.

2)  When the table becomes full, total clearing is not
    performed.  Rather, when the compresser emits the code
    sequence 256,2 (decimal), the decompressor should clear
    all leaf nodes from the Ziv-Lempel tree, and continue to
    use the current code size.  The nodes that are cleared
    from the Ziv-Lempel tree are then re-used, with the lowest
    code value re-used first, and the highest code value
    re-used last.  The compressor can emit the sequence 256,2
    at any time.



Expanding
---------

The Reducing algorithm is actually a combination of two
distinct algorithms.  The first algorithm compresses repeated
byte sequences, and the second algorithm takes the compressed
stream from the first algorithm and applies a probabilistic
compression method.

The probabilistic compression stores an array of 'follower
sets' S(j), for j=0 to 255, corresponding to each possible
ASCII character.  Each set contains between 0 and 32
characters, to be denoted as S(j)[0],...,S(j)[m], where m<32.
The sets are stored at the beginning of the data area for a
Reduced file, in reverse order, with S(255) first, and S(0)
last.

The sets are encoded as { N(j), S(j)[0],...,S(j)[N(j)-1] },
where N(j) is the size of set S(j).  N(j) can be 0, in which
case the follower set for S(j) is empty.  Each N(j) value is
encoded in 6 bits, followed by N(j) eight bit character values
corresponding to S(j)[0] to S(j)[N(j)-1] respectively.  If
N(j) is 0, then no values for S(j) are stored, and the value
for N(j-1) immediately follows.

Immediately after the follower sets, is the compressed data
stream.  The compressed data stream can be interpreted for the
probabilistic decompression as follows:


let Last-Character <- 0.
loop until done
    if the follower set S(Last-Character) is empty then
	read 8 bits from the input stream, and copy this
	value to the output stream.
    otherwise if the follower set S(Last-Character) is non-empty then
	read 1 bit from the input stream.
	if this bit is not zero then
	    read 8 bits from the input stream, and copy this
	    value to the output stream.
	otherwise if this bit is zero then
	    read B(N(Last-Character)) bits from the input
	    stream, and assign this value to I.
	    Copy the value of S(Last-Character)[I] to the
	    output stream.
	
    assign the last value placed on the output stream to
    Last-Character.
end loop


B(N(j)) is defined as the minimal number of bits required to
encode the value N(j)-1.


The decompressed stream from above can then be expanded to
re-create the original file as follows:


let State <- 0.

loop until done
    read 8 bits from the input stream into C.
    case State of
	0:  if C is not equal to DLE (144 decimal) then
		copy C to the output stream.
	    otherwise if C is equal to DLE then
		let State <- 1.

	1:  if C is non-zero then
		let V <- C.
		let Len <- L(V)
		let State <- F(Len).
	    otherwise if C is zero then
		copy the value 144 (decimal) to the output stream.
		let State <- 0

	2:  let Len <- Len + C
	    let State <- 3.

	3:  move backwards D(V,C) bytes in the output stream
	    (if this position is before the start of the output
	    stream, then assume that all the data before the
	    start of the output stream is filled with zeros).
	    copy Len+3 bytes from this position to the output stream.
	    let State <- 0.
    end case
end loop


The functions F,L, and D are dependent on the 'compression
factor', 1 through 4, and are defined as follows:

For compression factor 1:
    L(X) equals the lower 7 bits of X.
    F(X) equals 2 if X equals 127 otherwise F(X) equals 3.
    D(X,Y) equals the (upper 1 bit of X) * 256 + Y + 1.
For compression factor 2:
    L(X) equals the lower 6 bits of X.
    F(X) equals 2 if X equals 63 otherwise F(X) equals 3.
    D(X,Y) equals the (upper 2 bits of X) * 256 + Y + 1.
For compression factor 3:
    L(X) equals the lower 5 bits of X.
    F(X) equals 2 if X equals 31 otherwise F(X) equals 3.
    D(X,Y) equals the (upper 3 bits of X) * 256 + Y + 1.
For compression factor 4:
    L(X) equals the lower 4 bits of X.
    F(X) equals 2 if X equals 15 otherwise F(X) equals 3.
    D(X,Y) equals the (upper 4 bits of X) * 256 + Y + 1.


Imploding
---------

The Imploding algorithm is actually a combination of two distinct
algorithms.  The first algorithm compresses repeated byte
sequences using a sliding dictionary.  The second algorithm is
used to compress the encoding of the sliding dictionary ouput,
using multiple Shannon-Fano trees.

The Imploding algorithm can use a 4K or 8K sliding dictionary
size. The dictionary size used can be determined by bit 1 in the
general purpose flag word, a 0 bit indicates a 4K dictionary
while a 1 bit indicates an 8K dictionary.

The Shannon-Fano trees are stored at the start of the compressed
file. The number of trees stored is defined by bit 2 in the
general purpose flag word, a 0 bit indicates two trees stored, a
1 bit indicates three trees are stored.  If 3 trees are stored,
the first Shannon-Fano tree represents the encoding of the
Literal characters, the second tree represents the encoding of
the Length information, the third represents the encoding of the
Distance information.  When 2 Shannon-Fano trees are stored, the
Length tree is stored first, followed by the Distance tree.

The Literal Shannon-Fano tree, if present is used to represent
the entire ASCII character set, and contains 256 values.  This
tree is used to compress any data not compressed by the sliding
dictionary algorithm.  When this tree is present, the Minimum
Match Length for the sliding dictionary is 3.  If this tree is
not present, the Minimum Match Length is 2.

The Length Shannon-Fano tree is used to compress the Length part
of the (length,distance) pairs from the sliding dictionary
output.  The Length tree contains 64 values, ranging from the
Minimum Match Length, to 63 plus the Minimum Match Length.

The Distance Shannon-Fano tree is used to compress the Distance
part of the (length,distance) pairs from the sliding dictionary
output. The Distance tree contains 64 values, ranging from 0 to
63, representing the upper 6 bits of the distance value.  The
distance values themselves will be between 0 and the sliding
dictionary size, either 4K or 8K.

The Shannon-Fano trees themselves are stored in a compressed
format. The first byte of the tree data represents the number of
bytes of data representing the (compressed) Shannon-Fano tree
minus 1.  The remaining bytes represent the Shannon-Fano tree
data encoded as:

    High 4 bits: Number of values at this bit length + 1. (1 - 16)
    Low  4 bits: Bit Length needed to represent value + 1. (1 - 16)

The Shannon-Fano codes can be constructed from the bit lengths
using the following algorithm:

1)  Sort the Bit Lengths in ascending order, while retaining the
    order of the original lengths stored in the file.

2)  Generate the Shannon-Fano trees:

    Code <- 0
    CodeIncrement <- 0
    LastBitLength <- 0
    i <- number of Shannon-Fano codes - 1   (either 255 or 63)

    loop while i >= 0
	Code = Code + CodeIncrement
	if BitLength(i) <> LastBitLength then
	    LastBitLength=BitLength(i)
	    CodeIncrement = 1 shifted left (16 - LastBitLength)
	ShannonCode(i) = Code
	i <- i - 1
    end loop


3)  Reverse the order of all the bits in the above ShannonCode()
    vector, so that the most significant bit becomes the least
    significant bit.  For example, the value 0x1234 (hex) would
    become 0x2C48 (hex).

4)  Restore the order of Shannon-Fano codes as originally stored
    within the file.

Example:

    This example will show the encoding of a Shannon-Fano tree
    of size 8.  Notice that the actual Shannon-Fano trees used
    for Imploding are either 64 or 256 entries in size.

Example:   0x02, 0x42, 0x01, 0x13

    The first byte indicates 3 values in this table.  Decoding the
    bytes:
	    0x42 = 5 codes of 3 bits long
	    0x01 = 1 code  of 2 bits long
	    0x13 = 2 codes of 4 bits long

    This would generate the original bit length array of:
    (3, 3, 3, 3, 3, 2, 4, 4)

    There are 8 codes in this table for the values 0 thru 7.  Using the
    algorithm to obtain the Shannon-Fano codes produces:

                                  Reversed     Order     Original
Val  Sorted   Constructed Code      Value     Restored    Length
---  ------   -----------------   --------    --------    ------
0:     2      1100000000000000        11       101          3
1:     3      1010000000000000       101       001          3
2:     3      1000000000000000       001       110          3
3:     3      0110000000000000       110       010          3
4:     3      0100000000000000       010       100          3
5:     3      0010000000000000       100        11          2
6:     4      0001000000000000      1000      1000          4
7:     4      0000000000000000      0000      0000          4


The values in the Val, Order Restored and Original Length columns
now represent the Shannon-Fano encoding tree that can be used for
decoding the Shannon-Fano encoded data.  How to parse the
variable length Shannon-Fano values from the data stream is beyond the
scope of this document.  (See the references listed at the end of
this document for more information.)  However, traditional decoding
schemes used for Huffman variable length decoding, such as the
Greenlaw algorithm, can be succesfully applied.

The compressed data stream begins immediately after the
compressed Shannon-Fano data.  The compressed data stream can be
interpreted as follows:

loop until done
    read 1 bit from input stream.

    if this bit is non-zero then       (encoded data is literal data)
	if Literal Shannon-Fano tree is present
	    read and decode character using Literal Shannon-Fano tree.
	otherwise
	    read 8 bits from input stream.
	copy character to the output stream.
    otherwise                   (encoded data is sliding dictionary match)
	if 8K dictionary size
	    read 7 bits for offset Distance (lower 7 bits of offset).
	otherwise
	    read 6 bits for offset Distance (lower 6 bits of offset).
	
	using the Distance Shannon-Fano tree, read and decode the
	  upper 6 bits of the Distance value.

	using the Length Shannon-Fano tree, read and decode
	  the Length value.
	
	Length <- Length + Minimum Match Length
	
	if Length = 63 + Minimum Match Length
	    read 8 bits from the input stream,
	    add this value to Length.

	move backwards Distance+1 bytes in the output stream, and
	copy Length characters from this position to the output
	stream.  (if this position is before the start of the output
	stream, then assume that all the data before the start of
	the output stream is filled with zeros).
end loop

Decryption
----------

The encryption used in PKZIP was generously supplied by Roger
Schlafly.  PKWARE is grateful to Mr. Schlafly for his expert
help and advice in the field of data encryption.

PKZIP encrypts the compressed data stream.  Encrypted files must
be decrypted before they can be extracted.

Each encrypted file has an extra 12 bytes stored at the start of
the data area defining the encryption header for that file.  The
encryption header is originally set to random values, and then
itself encrypted, using 3, 32-bit keys.  The key values are 
initialized using the supplied encryption password.  After each byte
is encrypted, the keys are then updated using psuedo-random number
generation techniques in combination with the same CRC-32 algorithm 
used in PKZIP and described elsewhere in this document.

The following is the basic steps required to decrypt a file:

1) Initialize the three 32-bit keys with the password.
2) Read and decrypt the 12-byte encryption header, further
   initializing the encryption keys.
3) Read and decrypt the compressed data stream using the
   encryption keys.


Step 1 - Initializing the encryption keys
-----------------------------------------

Key(0) <- 305419896
Key(1) <- 591751049
Key(2) <- 878082192

loop for i <- 0 to length(password)-1
    update_keys(password(i))
end loop


Where update_keys() is defined as:


update_keys(char):
  Key(0) <- crc32(key(0),char)
  Key(1) <- Key(1) + (Key(0) & 000000ffH)
  Key(1) <- Key(1) * 134775813 + 1
  Key(2) <- crc32(key(2),key(1) >> 24)
end update_keys


Where crc32(old_crc,char) is a routine that given a CRC value and a 
character, returns an updated CRC value after applying the CRC-32 
algorithm described elsewhere in this document.


Step 2 - Decrypting the encryption header
-----------------------------------------

The purpose of this step is to further initialize the encryption
keys, based on random data, to render a plaintext attack on the
data ineffective.


Read the 12-byte encryption header into Buffer, in locations
Buffer(0) thru Buffer(11).

loop for i <- 0 to 11
    C <- buffer(i) ^ decrypt_byte()
    update_keys(C)
    buffer(i) <- C
end loop


Where decrypt_byte() is defined as:


unsigned char decrypt_byte()
    local unsigned short temp
    temp <- Key(2) | 2
    decrypt_byte <- (temp * (temp ^ 1)) >> 8
end decrypt_byte


After the header is decrypted, the last two bytes in Buffer
should be the high-order word of the CRC for the file being
decrypted, stored in Intel low-byte/high-byte order.  This can
be used to test if the password supplied is correct or not.


Step 3 - Decrypting the compressed data stream
----------------------------------------------

The compressed data stream can be decrypted as follows:


loop until done
    read a charcter into C
    Temp <- C ^ decrypt_byte()
    update_keys(temp)
    output Temp
end loop


In addition to the above mentioned contributors to PKZIP and PKUNZIP, 
I would like to extend special thanks to Robert Mahoney for suggesting 
the extension .ZIP for this software.


References:

    Storer, James A. "Data Compression, Methods and Theory",
       Computer Science Press, 1988
    
    Held, Gilbert  "Data Compression, Techniques and Applications,
		    Hardware and Software Considerations"
       John Wiley & Sons, 1987

```
{% endraw %}

## DEDICATE.DOC

{% raw %}
```
Dedication
----------

The file format of the files created by these programs, which file format 
is original with the first release of this software, is hereby dedicated to 
the public domain.  Further, the filename extension of ".ZIP", first used in 
connection with data compression software on the first release of this 
software, is also hereby dedicated to the public domain, with the fervent 
and sincere hope that it will not be attempted to be appropriated by anyone 
else for their exclusive use, but rather that it will be used to refer to 
data compression and librarying software in general, of a class or type 
which creates files having a format generally compatible with this 
software.


```
{% endraw %}

## FILE1364.TXT

{% raw %}
```
Disk No: 1364                                                           
Disk Title: PKZIP, PKUNZIP, and PKSFX                                   
PC-SIG Version: S1.3                                                    
                                                                        
Program Title: PKZIP, PKUNZIP, PKSFX                                    
Author Version: 1.1                                                     
Author Registration: $25.00.                                            
Special Requirements: None.                                             
                                                                        
Whoa! Hold on there guys! There's a new program in town!                
                                                                        
Call it the ``Amazing Shrinking RAM''.  PKZIP is the new file           
compression system from PKWARE that lets you cram a lot more programs   
and data onto that precious, crowded real estate of your hard disk by   
shrinking it all into ZIP files that need less bytes of space to do the 
same job.                                                               
                                                                        
Other things PKZIP can do for you: When you need to take your data on   
the go, ZIPping means you will have fewer floppies to carry or lose!    
Downloads and backing-up your system will go faster.  ZIPped files also 
take less time to transmit via a modem.  Many BBSs (computer bulletin   
board services) are now using ZIP files as their standard.              
                                                                        
PKZIP also handles all your file maintenance needs, including adding and
deleting files, and reporting on technical information from within      
compressed files.                                                       
                                                                        
PKUNZIP is the complementary program that reconstructs or extracts      
compressed files.  In addition to reconstructing a complete ZIP file, it
can selectively release individual files, show files on the screen for  
fast viewing, or print them.  Included is a 28-page on-disk manual      
telling you everything you could ever want to know about how compression
works.                                                                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## LICENSE.DOC

{% raw %}
```

Information on Site & Distribution Licenses and Custom Versions


Corporate and Governmental Site License

This is a license for use of the software within your company or
goverment agency, and is not transferable.  This allows internal
use and copying of the software for as many sites / computers as
contracted for.  (See the ORDER FORM for Site License price
schedule).  An unlimited Site License allows unlimited copying
of the software for internal use by your company or government
agency.  Distributing, repackaging, or reselling of the software
to third parties is not allowed.  All licenses are prepaid.


Distribution License

Commercial and Governmental Use
This allows distribution of the PKWARE software with software
that is distributed by your company or government agency.
(Please note that if you create a Self-Extracting file using the
PKSFX program, you will need a license, since you would be
sending out PKWARE code in the form of the PKSFX file combined
with your file(s).) This license is non-exclusive and non-
transferable.  Please complete and return the application for a
distribution license on the reverse side of this form.  Once we
receive the completed application, you will be sent a written
quote for a one time Distribution License fee.  A sample
Distribution Agreement is enclosed.  All licenses are prepaid.

Private Use

This license is not necessary for clubs or user groups distributing 
the software on a SHAREWARE basis, providing that the entire 
PKZIP/PKUNZIP/PKSFX package with accompanying documentation files is 
included in the distribution, and no more than a nominal fee (not to 
exceed $10) is charged for such distribution.


Custom Versions of the Software

If you require any modifications or changes to the software,
please include detailed written information describing all
changes you are interested in.  Customization fees will be based
on the extent of the modifications required to the software so
it performs as you describe.  Depending on the changes
requested, please allow six to eight weeks for custom versions
of the software.

Availability of Source Code

It is the policy of PKWARE, Inc. not to release source code of
its products.

SAMPLE SITE LICENSE

                          PKWARE, INC.
                 7545 NORTH PORT WASHINGTON ROAD
                    GLENDALE, WI  53217  USA

Voice (414) 352-3670
BBS   (414) 352-7176
FAX   (414) 352-3815


PKWARE, INC. hereby grants [ORGANIZATION NAME] a site license for 
[NUMBER OF SITES/COMPUTERS LICENSED] computers for the use of the 
following software programs:  [PKWARE PRODUCTS LICENSED].

This is a perpetual license for the use of the software within your 
company, and is not transferable.  This license allows internal use and 
copying of the software by as many users/ machines as contracted for.  
Distribution, repackaging, or reselling of the software, to third 
parties, is not allowed under this agreement.

The LICENSOR warrants that it is sole owner of the software and has full 
power and authority to grant this license herein without consent of any 
other party.

PKWARE hereby disclaims all warranties relating to this software, 
whether express or implied, including without limitation any implied 
warranties of merchantability or fitness for a particular purpose. 
PKWARE will not be liable for any special, incidental, consequential, 
indirect or similar damages due to loss of data or any other reason, 
even if PKWARE or an agent of PKWARE has been advised of the possibility 
of such damages.  In no event shall PKWARE's liability for any damages 
ever exceed the price paid for the license to use the software, 
regardless of the form of the claim.  The person using the software 
bears all risk as to the quality and performance of the software.

This agreement shall be construed and enforced in accordance with the 
laws of the STATE OF WISCONSIN.  Any action or proceeding brought by 
either party against the other arising out of or related to this 
agreement shall be brought only in a STATE or FEDERAL COURT of competent 
jurisdiction located in Milwaukee county, Wisconsin.  The parties hereby 
consent to in personam jurisdiction of said courts.


COMPANY: [ORGANIZATION NAME]

ADDRESS: [ORGANIZATION ADDRESS]

CITY:    [ORGANIZATION'S CITY]  STATE:  XX   ZIP CODE: 00000

COUNTRY: [ORGANIZATION'S COUNTRY]

AUTHORIZED  SIGNATURE:   _____________________________________

TITLE: _______________________         DATE: _______________


PKWARE, INC. AUTHORIZED SIGNATURE: _________________________

TITLE: Vice President           DATE: ______________________

SAMPLE DISTRIBUTION LICENSE AGREEMENT

                        PKWARE, INC.
              7545 NORTH PORT WASHINGTON ROAD
                 GLENDALE, WI  53217  USA

Voice (414) 352-3670
BBS   (414) 352-7176
FAX   (414) 352-3815

This agreement entered into, by and between PKWARE, INC., a Wisconsin 
corporation, located at 7545 North Port Washington Road, Glendale, 
Wisconsin 53217 (herein after referred to as "LICENSOR"), and <COMPANY 
NAME> a <STATE> CORPORATION  located at <ADDRESS, CITY, STATE, ZIP 
CODE> (herein after referred to as "LICENSEE").

This contract allows LICENSEE to DISTRIBUTE the program(s) developed 
by LICENSOR referred to as <PKWARE PRODUCT'S NAME> with software 
developed by LICENSEE.  This perpetual license of the <PKWARE 
PRODUCT'S NAME> software by LICENSOR TO LICENSEE IS NON-EXCLUSIVE AND 
NON-TRANSFERABLE.  LICENSEE shall pay LICENSOR a one time fee of US 
$<XXX.XX> in exchange for said license.  This is a license for 
<DISTRIBUTION `TYPE'> distribution for use with <YOUR PRODUCT NAME>.

The LICENSOR warrants that it is sole owner of the software and has 
full power and authority to grant this license herein without consent 
of any other party.

PKWARE hereby disclaims all warranties relating to this software, 
whether express or implied, including without limitation any implied 
warranties of merchantability or fitness for a particular purpose. 
PKWARE will not be liable for any special, incidental, consequential, 
indirect or similar damages due to loss of data or any other reason, 
even if PKWARE or an agent of PKWARE has been advised of the possibility 
of such damages.  In no event shall PKWARE's liability for any damages 
ever exceed the price paid for the license to use the software, 
regardless of the form of the claim.  The person using the software 
bears all risk as to the quality and performance of the software.

This agreement shall be construed and enforced in accordance with the 
laws of the STATE OF WISCONSIN.  Any action or proceeding brought by 
either party against the other arising out of or related to this 
agreement shall be brought only in a STATE or FEDERAL COURT of competent 
jurisdiction located in Milwaukee county, Wisconsin. The parties hereby 
consent to in personam jurisdiction of said courts.

This agreement can only be modified by mutual written consent of both 
parties.

COMPANY:  <COMPANY NAME>

_________________________________________  _________________
AUTHORIZED SIGNATURE                             DATE

_________________________________________
TITLE

_________________________________________  _________________
VICE PRESIDENT OF PKWARE, INC.                    DATE

APPLICATION  FOR  DISTRIBUTION  LICENSE

(Note there is no obligation in completing the
application for a quote.  Please print or type.)

    NAME:  ____________________________________________________

 COMPANY:  ____________________________________________________

   TITLE:  _________________________________  DATE:____________

 ADDRESS:  ____________________________________________________

    CITY:  _______________________________   STATE:  __________

ZIP CODE:  ____________   (COUNTRY:) __________________________ 

TELEPHONE #:  (_____)_____________  FAX #:  (____)_____________


PLEASE COMPLETE AS BEST AS POSSIBLE.

1)  I am interested in distributing the progams(s) PKZIP ___
    PKUNZIP ___  Self-Extracting file(s) created with 
    PKSFX ___    (check all that apply).

2)  In what quantity do you estimate distributing the software
    indicated above?   ________ copies.  This is per year ____
    or  one time ____ (check only one).

3)  If you are interested in distributing PKZIP, PKUNZIP or 
    PKSFX to save DISKETTES required to distribute your 
    software, how many disks does your software package require 
    WITHOUT compression ______, and how many diskettes are 
    required if the software is distributed in compressed form 
    _____? 

4)  Please describe the intended usage of the PKWARE programs 
    indicated in question 1.  If possible, please describe the 
    software packages(s) that you intend to distribute with or 
    using the PKWARE programs, and their price or price range.  
    Also, please list any other relevant information (feel free 
    to attach additional sheets):









5)  State the names(s) of the software package(s)/program(s) 
    which will be distributed using the PKWARE programs.



6)  Incorporated in what state/country ______________________.


```
{% endraw %}

## MANUAL.DOC

{% raw %}
```






                                                                       |
                                                                       |
                                                                       |
                                                               PKWARE  |
                                                                       |
                                          The file compression system  |
                                         where SPEED and SMALL SPACES  |
                                                make a BIG difference  |
                                                                       |
                                                                       |
                                                                       |
                                                                       |
                                                                PKZIP  |
                                                              PKUNZIP  |
                                                                PKSFX  |
                                                             PKZIPFIX  |
                                                                       |
                                                                       |
                                                                       |






                                 PKZIP / PKUNZIP

          The following 12 files are included in PKWARE Version 1.01

                PKZIP.EXE  Main compression program.
              PKUNZIP.EXE  Main extraction program.

              MAKESFX.COM  Starts the process of creating self-
                           extracting files
              ZIP2EXE.EXE  Used in creating self-extracting files.

               README.DOC  General Information.
             DEDICATE.DOC  Dedication of file format and extension to
                           the public domain.
                ORDER.DOC  Registration information and order form.
              LICENSE.DOC  Information on Site and Distribution Licenses.
             OMBDSMAN.ASP  Association of Shareware Professionals info.
               MANUAL.DOC  Reference manual for PKWARE File Compression
                           Programs.
              APPNOTE.TXT  Technical background material.

             PKZIPFIX.EXE  Reconstructs corrupted ZIP files.



                                 PKWARE FEATURES

          The following features are available with PKWARE Version 1.0
          (PKZIP/PKUNZIP/PKSFX) Compression Programs.


          1.  Improved Compression!  PKZIP 1.0 implements a new compression
              algorithm called Imploding, which averages 5% to 15% better
              compression than the maximal compression (Reducing) of
              PKZIP 0.92.  Imploding is also faster at compressing and
              extracting than Reducing was.

          2.  Password encryption.  Sensitive data files can be scrambled
              with password protection.

          3.  Automatic detection and utilization of 80386 CPU's.  PKZIP
              and PKUNZIP test for the presence of an 80386 CPU.  If
              present, PKZIP and PKUNZIP will use the 80386's 32 bit
              instructions and extended addressing modes for improved
              performance.

          4.  Special file handling capabilities will automatically
              recurse through subdirectories and store pathnames within
              a ZIP file.  These paths can then be created on extraction
              if they do not already exist.

          5.  Extra compression options allow you to specify the method
              of compression (Shrinking or Imploding) to be employed.


     PKWARE                           -2-



          6.  A file that has been created as a self-extracting file can
              be treated as a normal ZIP file.  All PKZIP and PKUNZIP
              options (except -v  View) will be valid.

          7.  Files contained in a ZIP file can be viewed in several
              different ways.  For example, the can be sorted by:
              compression ratio, size, date, name, or extension.

          8.  A new option, -x, can be used to specify files to be excluded
              from any ZIP operation being performed.

          9.  Special file attributes (hidden, read-only, system) can be
              masked during creation or extraction of a ZIP file.  PKZIP
              can also be configured to include or not include hidden and
              system files.

          10. ANSI comments may be enabled/disabled.

          11. Expanded Configuration file options are available.

          12. Individual file comments (up to 60 characters in length)
              can be programmed for each file in the ZIP file.


































     PKWARE                           -3-





                                     CONTENTS


           1.  INTRODUCTION TO FILE COMPRESSION . . . . . . . . . . . . 5
               A.  File Compression . . . . . . . . . . . . . . . . . . 6
               B.  Two Related Programs - PKZIP & PKUNZIP . . . . . . . 6
               C.  File Compression Terms . . . . . . . . . . . . . . . 7
               D.  Use of Hard and Floppy Disk Systems. . . . . . . . . 7
               E.  General Rules and Default Settings . . . . . . . . . 9
               F.  PKWARE System Limits . . . . . . . . . . . . . . . . 11


           2.  SUPER QUICK  . . . . . . . . . . . . . . . . . . . . . . 12
               A.  QUICK START - Extracting a File from a BBS . . . . . 12
               B.  Use of PKWARE in Telecommunications - BBS  . . . . . 13


           3.  PKZIP - COMPRESS FILES INTO ZIP FILES  . . . . . . . . . 15
               A.  QUICK START - Create a ZIP file. . . . . . . . . . . 16
               B.  PKZIP Reference Guide  . . . . . . . . . . . . . . . 18
               C.  Description of Command Options . . . . . . . . . . . 19


           4.  PKUNZIP - EXTRACT ZIP FILES  . . . . . . . . . . . . . . 36
               A.  QUICK START - Extract a ZIP File . . . . . . . . . . 37
               B.  PKUNZIP Reference Guide  . . . . . . . . . . . . . . 39
               C.  Description of Command Options . . . . . . . . . . . 40


           5.  PKSFX - SELF-EXTRACTION UTILITY  . . . . . . . . . . . . 50
               A.  Creating a Self-Extracting ZIP file  . . . . . . . . 51
               B.  PKSFX Reference Guide  . . . . . . . . . . . . . . . 53


           6.  SPECIAL HANDLING PROCEDURES  . . . . . . . . . . . . . . 54
               A.  How a ZIP File is Made . . . . . . . . . . . . . . . 55
               B.  Use of a RAM Disk with PKZIP . . . . . . . . . . . . 55
               C.  LAN - Local Area Network Support . . . . . . . . . . 55
               D.  Creating a Pre-Selected File List. . . . . . . . . . 56
               E.  Batch File Processing  . . . . . . . . . . . . . . . 57
               F.  The Configuration file . . . . . . . . . . . . . . . 58
               G.  PKWARE Error Messages  . . . . . . . . . . . . . . . 61
               H.  PKZIPFIX - File Reconstruction . . . . . . . . . . . 65


           7.  REGISTRATION AND BACKGROUND  . . . . . . . . . . . . . . 66
               A.  Technical Support  . . . . . . . . . . . . . . . . . 67
               B.  Other Background Information . . . . . . . . . . . . 67
               C.  Registration Information . . . . . . . . . . . . . . 67
               D.  Software License . . . . . . . . . . . . . . . . . . 68




     PKWARE                           -4-








                                                                       |
                                                                       |
                                                                       |
                                      INTRODUCTION TO FILE COMPRESSION |
                                                                       |
                                                      File Compression |
                                Two Related Programs - PKZIP & PKUNZIP |
                                                File Compression Terms |
                                   Use of Hard and Floppy Disk Systems |
                                    General Rules and Default Settings |
                                                  PKWARE System Limits |
                                                                       |
                                                                       |
                                                                       |





































     PKWARE                           -5-




                                    FILE COMPRESSION


               The term "compression" means to reduce in size.   Computer
          file compression refers to reducing files in size so that they
          take up less storage space on disk.  PKZIP will perform this
          reducing process quickly and easily.  The compressed files are
          then stored in a special file called a ZIP file.

          ZIP files have three distinct benefits:

               1.  They use less disk space than normal files.  Storing
                   files in compressed form increases the life and
                   storage availability of your expensive hard disk.

               2.  Many individual files can be compressed into a single
                   ZIP file.  This makes file group identification,
                   copying, and transporting faster and easier.

               3.  Compressed files travel faster via modem which
                   reduces telecommunication transmission and reception.
                   Many BBS (computer bulletin board services) use
                   PKWARE files as their standard.  This enables the BBS
                   to store more files and you to have transfer files
                   faster and easier.



                   TWO RELATED PKWARE PROGRAMS - PKZIP & PKUNZIP

               Together, PKZIP and PKUNZIP handle all of your file
          compression needs.

               PKZIP is the program that compresses files.  This shrinking
          process is often referred to as data compression.  Terms you will
          see during the compressing process are Storing, Shrinking, and
          Imploding.  PKZIP also handles all file maintenance including
          adding and deleting files, as well as reporting on technical
          information from within the compressed file.

               PKUNZIP is the program that uncompresses or extracts
          compressed files.  In addition to extracting a complete ZIP file,
          it can selectively release individual files, show files on the
          screen for fast viewing, or print them out on a printer.











     PKWARE                           -6-



                            FILE COMPRESSION TERMS

               The following terms are used throughout this manual.

               FILE = The SINGLE name that identifies information on
                    your floppy disk or hard drive.

               ZIP FILE = The file that holds file information that has
                    been reduced in size for better storage.  It is
                    sometimes called a compressed file or a library
                    file.   A ZIP file can be made up of either one or
                    more files compressed and stored together under one
                    file name.

               FILE EXTRACTION  = The process of recreating files that
                    have been previously compressed.

               FILE COMPRESSION  = is the process of reducing a file's
                    size.  This is sometimes referred to as data
                    compressing.

          ______________________________________________________________
          |                                                            |
          |   A ZIP file contains one or more files.                   |
          |                                                            |
          | MANUAL.ZIP contains -> chap1.txt  toc.txt  app.txt  cov.txt|
          |                        All of these files are compressed   |
          |                        and stored in one file.             |
          |                                                            |
          |                                                            |
          |                                                            |
          | BIG.ZIP   contains ->  Huge.Wks                            |
          |                        This is a very large worksheet      |
          |                        that has been shrunk in size for    |
          |                        better storage and faster           |
          |                        telecommunications.                 |
          |____________________________________________________________|




                  USING PKWARE WITH HARD AND FLOPPY DISK SYSTEMS

          PKWARE works BEST on a hard disk system.

           1.  Even though you are making files smaller, the process
               used to shrink them can BRIEFLY DOUBLE the storage space
               needed.  When a ZIP file is being modified (e.g. files
               being added), the process creates a new ZIP file which
               will be used as a REPLACEMENT for the old version.  Both
               the OLD and the NEW versions will be on your disk until
               just prior to the completion of the process.




     PKWARE                           -7-



           2.  When you extract a ZIP file, the amount of space
               needed to hold that file can double.  A large hard disk
               drive normally insures that enough storage area is
               available.

               Many compressed files are stored on floppy disks.  The
               limit to floppy storage is the number of characters your
               floppy system will hold:

                    Standard double density floppy     360K
                    High density floppy                1.2 meg
                    3-1/2" floppy                      .7 or 1.4 meg

               You may have problems either ADDING files to a ZIP file
               stored on a floppy disk, or extracting files to a
               floppy disk system when the number of characters in the
               ZIP file is more than 50% of the available storage space
               on the floppy disk.


          Consider a standard floppy disk system:

          ______________________________________________________________
          |                                                            |
          |              Standard Floppy Disk Drive of 360K            |
          |                                                            |
          |  A:> BigFile.ZIP  has 250,000 characters                   |
          |                                                            |
          |     1.  In order to ADD files to BigFile.ZIP, you need     |
          |         500,000 of space.  The extra space is used to      |
          |         hold a new updated ZIP file created before the     |
          |         old ZIP file is deleted.                           |
          |                                                            |
          |     2.  When BigFile is extracted, it might require        |
          |         400,000 of space, but the available space on the   |
          |         disk restricts it to 360,000.                      |
          |____________________________________________________________|



















     PKWARE                           -8-




          There are a number of ways to avoid the limitations.  A thorough
          knowledge of PKWARE Programs will show you how to:

               1.  Selectively extract files from a ZIP file.
                   Instead of extracting everything at once, you can
                   view file size information and then select SPECIFIC
                   files to be extracted to a floppy.

               2.  If you have two floppy drives, create the ZIP file on
                   your second disk drive so that you have the full 360K
                   available to you.

               3.  Use the special  -b  command option, which routes the
                   NEW file to an alternate disk drive during the
                   compressing process then copies it back to the floppy
                   disk upon completion.



                        GENERAL RULES AND DEFAULT SETTINGS

           1.  PKWARE programs MUST be located in:

               A.  The drive you are working on, OR . . .

               B.  Any directory accessible through the PATH= setting.

                   C:> PATH=C:/Utils

               In this example, PKWARE is in the Utils Directory.  The
               computer will find and execute the program even though
               you are in a different directory or drive because any
               commands entered will be run through the PATH.  Consult
               your MS-DOS documentation for more information.

               C.  Any directory through the use of PATH notation if you
                   are using MS-DOS 3.0 or later.

                   C:>B:PKZIP  -a  OldFile.ZIP  *.*   PKZIP is located
                                                      on the B:> drive

                   C:>\UTILS\PKZIP  -v  Stuff.ZIP     PKZIP is located
                                                      in \UTILS as
                                                      indicated in the
                                                      PATH notation

           2.  All PKWARE program commands are typed at the prompt.








     PKWARE                           -9-



           3.  Typed information can generally be in upper case, lower
               case, or a mixture, except where noted in the manual.
               The following options are case sensitive:  -J -j, -W -w,
               -C -c, -P -p, and the password for the -s option.  It is
               recommended however, to use lower case when possible in
               order to be compatible with future versions of PKWARE.

           4.  The DEFAULT is  *.*  or ALL FILES when specific files are
               not named (except for the  -d  delete files option).

           5.  It is NOT necessary to type the extension  .ZIP  when
               processing a ZIP file, it will be assumed.  The extension
               is used in this documentation for clarity.

           6.  A help screen is displayed when you type the program name
               (PKZIP or PKUNZIP) at the prompt then press <enter>.
               Also typing  -h  on the command line will call up the
               help screen.

           7.  The notation  PKUNZIP *  or  *.ZIP  will extract all
               ZIP files within the given area.

           8.  During the extracting process, the notation *.* will
               tell PKUNZIP to attempt to extract ALL files whether
               they are ZIP files or not.  This could waste time, but
               will not damage any files.

           9.  The default area for the temporary second ZIP file that
               is created while the original is being updated, is the
               same path and directory location as the original ZIP
               file.  As this can cause a space shortage on a floppy
               disk, the -b option is recommended.  (See Section 3.)

          10.  The compressing function will STOP if specific, pre-
               specified files are not found.

          11.  All MS-DOS file handling procedures can be used:

                   Filename.ext          Full file name designations

                      Name*.ext          Names with wild card markers
                          *.ext
                   Filename.*
                          *.*
                   File?ame.ext

                 A:filename.ext          Disk drive and file name

                 C:\Lotus\March\*.*      Disk drive and PATH locations







     PKWARE                           -10-



                                   PKWARE SYSTEM LIMITS


               The following limits should be noted when using the PKWARE
          file compression programs.


          - This software is designed to run on any IBM personal computer
            or compatible, that is running MS-DOS version 2.0 or higher
            (MS-DOS versions) or OS/2 (OS/2 versions only).

          - PKZIP requires a minimum of 85K memory to run.

	  - PKUNZIP requires a minimum of 70K free memory to run.

          - PKZIP is capable of compressing up to 3,900 files into a
            signgle ZIP file.







































     PKWARE                           -11-





                                                                       |
                                                                       |
                                                                       |
                                                           SUPER QUICK |
                                                                       |
                             QUICK START- Extracting a File from a BBS |
                             Use of PKWARE in Telecommunications - BBS |
                                                                       |
                                                                       |
                                                                       |
                                                                       |
                                                                       |
                                                                       |









































     PKWARE                           -12-




          ______________________________________________________________
          |                                                            |
          |                        QUICK START                         |
          |                                                            |
          |               Extracting a ZIP File from a BBS             |
          |                                                            |
          | A BBS is a Computer Bulletin Board Service.  Those who use |
          | this type of service can acquire programs or other         |
          | information in the form of compressed files.  These files  |
          | are picked up via a modem.  In order to use these files,   |
          | they must be extracted through the use of PKUNZIP.         |
          |                                                            |
          | Follow this example to UNZIP your files:                   |
          |                                                            |
          |     C:>PKUNZIP  A:AnyFile.XYZ   C:                         |
          |       _______  _____________   ___                         |
          |         |         |             |                          |
          |         |         |             Drive/Path to locate the   |
          |         |         |             files on                   |
          |         |         |                                        |
          |         |         Name/ Location of file being extracted   |
          |         |         > Use any MS-DOS file notation           |
          |         |                                                  |
          |         the UNZIP command                                  |
          |         >  The command MUST be located at the prompt       |
          |                or                                          |
          |         >  The program can be located elsewhere through    |
          |            the PATH= setting                               |
          |____________________________________________________________|



                     USE OF PKWARE IN TELECOMMUNICATIONS - BBS


               Compressed library files store much information into a
          relatively small space.  PKWARE file compression methods are the
          standard used by many successful BBS systems across the country.

               Compressed files, known as ZIP files in PKWARE notation,
          created through PKWARE, assure you of the highest level of file
          accuracy.  PKWARE compressed files are the most compact, meaning
          they take less telecommunications time to deliver, PLUS PKWARE is
          FAST!  According to benchmarks published in major computer
          magazines, you will be able to manipulate your compressed files
          many times faster with PKWARE as compared to similar programs on
          the market.  PKWARE provides you with the highest standards of
          the industry.







     PKWARE                           -13-



              If you find the software fast, easy, and convenient to use, a
          registration of $25 would be appreciated.  If you send $47 or
          more, you will receive a diskette with documentation for the next
          version of the software, when available.  Please state the
          version of the software that you currently have.  Send
          registrations to:


                                   PKWARE, Inc.
                            7545 N. Port Washington Rd.
                                    Suite 205
                                Glendale, WI 53217












































     PKWARE                           -14-






                                                                       |
                                                                       |
                                                                       |
                                 PKZIP - COMPRESS FILES INTO ZIP FILES |
                                                                       |
                                       QUICK START - Create a ZIP file |
                                        Description of Command Options |
                                                                       |
                                                                       |
                                                                       |











































     PKWARE                           -15-



                       QUICK START - CREATE A ZIP FILE

               This section will describe some simple examples,
          illustrating the command format for creating a ZIP file.

          ______________________________________________________________
          |                                                            |
          |                       QUICK START                          |
          |                   How to compress files                    |
          |                                                            |
          | Use PKZIP to reduce or compress the size of your files.    |
          | All compressed files are stored in a ZIP file, while in    |
          | their compressed state.                                    |
          |                                                            |
          |  The benefits of Compressing are:                          |
          |                                                            |
          |   - Better use of disk storage area                        |
          |   - Faster telecommunication file transfer via a modem     |
          |   - Collecting numerous files under a single file name     |
          |                                                            |
          | PKZIP uses 4 areas typed at the prompt:                    |
          |                                                            |
          |      PKZIP ZIPFILE [options] [files]                       |
          |                                                            |
          |  1.  The actual program name       PKZIP                   |
          |                                                            |
          |  2.  The command options           letter commands         |
          |                                    example:  -a = add files|
          |                                                            |
          |  3.  The name YOU give your        NewFile  and  LOCATION  |
          |      ZIP file and its location.                            |
          |      If no extension specified,                            |
          |      default = .ZIP.                                       |
          |                                                            |
          |  4.  The files that get compressed  any MS-DOS file        |
          |      into the ZIP file.             notation               |
          |                                                            |
          | Examples:                                                  |
          |                                                            |
          |   C:>PKZIP  -a   A:NEWFILE   *.*                           |
          |                                                            |
          | This will create a file named NEWFILE.ZIP.  The .ZIP       |
          | extension will be added automatically when the ZIP file has|
          | been completed.  In this example, all of the files in the  |
          | current directory will be compressed into NEWFILE.ZIP.     |
          |                                                            |
          |                                                            |
          | C:>PKZIP  -a  B:BUDGET  \LOTUS\Checks.Wks \LOTUS\Money.Wks |
          |                                                            |
          | This will create a ZIP file named BUDGET.ZIP on the B      |
          | drive.  It will contain two files, both currently located  |
          | located in the C:\LOTUS directory.                         |
          |                                                            |



     PKWARE                           -16-



          |                                                            |
          |   C:>PKZIP  -f  FILES   *.TXT                              |
          |                                                            |
          | This will update an existing ZIP file named FILES.ZIP.     |
          | The files with a .TXT extension that already exist in the  |
          | ZIP file, and that are also dated later then those already |
          | within FILES.ZIP, will be updated.                         |
          |____________________________________________________________|
















































     PKWARE                           -17-



                               PKZIP REFERENCE GUIDE


          The following table will provide a quick reference guide to
          all the options of PKZIP.  The command syntax is also shown
          below.


          ----------------------------------------------------------------
          |                                                              |
          |                          PKZIP                               |
          |                                                              |
          | PKZIP [-b[path]] [options] zipfile [@list] [files...]        |
          |                                                              |
          | zipfile = ZIP file name.  Default extension is .ZIP          |
          | file    = Names of files to compress. Wildcards *, ?  are ok.|
          |           Default is ALL files.                              |
          | list    = An optional list file name.                        |
          |                                                              |
          |                                                              |
          | Options are:                                                 |
          |   -a    = Add files                                          |
          |   -b[path] = Create temporary ZIP file on alternate drive    |
          |   -c -C = Create/Edit file comments                          |
          |   -d    = Delete files                                       |
          |   -f    = Freshen files                                      |
          |   -h    = Call up help screen                                |
          |   -i    = Add changed files                                  |
          |   -j -J<h,r,s> = Mask/Unmask file attributes                 |
          |   -k    = Retain original date of ZIP file                   |
          |   -l    = Display license information                        |
          |   -o    = Set time and date of ZIP file to oldest file       |
          |   -p -P = Store recursed pathnames                           |
          |   -q    = Enable ANSI comments                               |
          |   -r    = Recurse subdirectories                             |
          |   -s<password> = Scramble files with password protection     |
          |   -u    = Update files                                       |
          |   -m[u,f] = Move files                                       |
          |   -v[b,r,t,c,d,e,n,o,p,s] = View files                       |
          |   -e[x,s,a,b] = Method of compression                        |
          |   -w -W<h,s> = Include hidden/system files                   |
          |   -x    = Exclude files from ZIP operation                   |
          |   -z    = Create/Edit ZIP comment                            |
          |                                                              |
          ----------------------------------------------------------------











     PKWARE                           -18-



                           DESCRIPTION OF COMMAND OPTIONS


              The commands used in creating a ZIP file will be explained in
          detail in this section.  You will find that the new command
          format is much more flexible and easier to use.  Listed below is
          a summary of important facts to keep in mind while using PKZIP.

          - The command options can generally be placed anywhere on the
            command line.

          - The first filename listed on the command line will be
            interpreted as the ZIP file.

          - The commands can usually be typed using either upper case or
            lower case, with the following exceptions:
               W w include special files
               J j mask special files
               C c create comments
               P p store pathnames

            In general, you should use lower case for all commands that
            are not case sensitive in order to be compatible with future
            versions of PKZIP.

          - All command options for the software must be preceded by a
            '-' character or the MS-DOS switch character (usually '/').

          - Most options except where noted can be combined (i.e.
            "-x -y" or "-xy").

          - The default values for the command line are as follows:

               - If no options are entered, the default is '-a', the add
                 file option.
               - If no extension is specified for the ZIP file the .ZIP
                 extension will be used.
               - If no location is listed for the ZIP file, it will be
                 located in the current directory.
               - If no file specs (filenames, with or without wildcards)
                 are listed, the default is *.* (unless the  -d option
                 is being used).














     PKWARE                           -19-



              The following table lists all the options valid with the
          PKZIP command.  A brief summary is also given in the table.  The
          options are explained in detail, along with programming examples,
          following the table.


                         Table 3-1   PKZIP COMMAND OPTIONS
          --------------------------------------------------------------

          OPTION         SUMMARY

          -a             Adds files to ZIP file.

          -b[path]       Creates a temporary ZIP file at the specified
                         alternate location.  This temporary file is
                         used only in the creation of the ZIP file, and
                         will be automatically deleted when the process
                         is complete.

          -c -C          Adds file comments to individual files within
                         the ZIP file.

          -d             Deletes the specified files from the ZIP file.

          -e[x,s,a,b]    Specifies compression method.

          -f             Freshens files in the ZIP file.

          -h             Calls up a help screen.

          -i             Adds to the ZIP file only those files that were
                         changed since the ZIP file was last updated.

          -j -J<h,r,s>   Specifies masking or unmasking of file
                         attributes.

          -k             Retains the original date of the ZIP file
                         that is being updated.

          -l             Displays the license screen.

          -m[u,f]        Adds files to the ZIP file and automatically
                         deletes the original or source files.

          -o             Sets time and date of the ZIP file to the time
                         and date of the latest file contained in the
                         ZIP file.

          -p -P          Stores paths that are recursed along with the
                         filenames in the ZIP file.  The -p option should
                         be used with -r option.

          -q             Enables ANSI comments.



     PKWARE                           -20-



          -r             Recurses subdirectories from the specified
                         directories.

          -s<password>   Scrambles files in the ZIP file with password
                         protection.

          -u             Updates the ZIP file.

          -v[b,r,t,c,d,e,n,o,p,s] Views technical information about
                         files in the ZIP file.

          -w -W<h,s>     Specifies whether hidden or system files will
                         be included in the ZIP file.

          -x             Is used to exclude files from a ZIP file
                         operation.

          -z             Creates a ZIP comment for a ZIP file.


          Note:  Parameters listed in [ ] are optional.  Where parameters
          are listed in < >, at least one of the listed parameters must be
          specified.

              There are several size factors you must be aware of when
          using the PKZIP command.  A ZIP file can hold any number of files
          subject to the storage size of your disk.  You need unused
          storage space at least equal to the size of the existing ZIP file
          in order to complete any updating process.

              For example, if the ZIP file to be updated is currently 250K,
          you need 250K for actual storage space and another 250K for the
          updating process.  This is because PKZIP does not delete the
          original ZIP file until the new updated ZIP file has been
          created.  So at the instant the new updated ZIP file is completed
          the original ZIP file will still exist.  Therefore, you would
          need disk storage space twice the actual size of the ZIP file.

              If this poses a problem to you, it can be counteracted by
          using the -b command.  This process is explained in greater
          detail later in this section.

              This section will give a detailed explanation of the options
          used in the PKZIP command.  Recall that except where noted,
          several options can be combined on the command line, and the
          options can be placed in any order.

              The command options are explained in groups determined by
          function.  The options pertaining to adding or updating ZIP files
          are explained first, followed by the delete option, view options,
          configuration options, and miscellaneous options.





     PKWARE                           -21-



          -a  Add files to a ZIP file
          ---------------------------

              This command will add files to either a NEWLY CREATED or
          EXISTING ZIP file.  Same-name files will overwrite those already
          in the ZIP file regardless of which has the latest date.  This is
          the default option if no other options are specified.

               A:>PKZIP  -a  Text  chap1.doc chap2.doc toc.doc

              Once the program is finished creating a new ZIP file
          containing the three files listed above, the extension
          .ZIP will be added to "Text" making it TEXT.ZIP


          -u  Update existing ZIP file
          ----------------------------

              The existing ZIP file will be updated with files only if they
          are not currently in the ZIP file, or if they are dated later
          than those with the same name already in the ZIP file.

              Although this command is similar to the  -a  Add command, it
          has an update SAFEGUARD.  It will overwrite existing compressed
          files ONLY if the selected files have a more recent time and
          date.

               C:>PKZIP  -u  Oldfile.ZIP   *.Txt  Money.Wks  A:Funds.Wks

              This example will update the ZIP file named Oldfile.ZIP.  The
          files listed above will be updated within the ZIP file.  That is
          they will be added if they do not already exist, or overwritten
          if they already exist in the ZIP file with an earlier date.


          -f  Freshen files in ZIP file
          -----------------------------

              This option updates files that already exist in the ZIP file
          with same-named files with later times and dates.

              The Freshen option is limited to working with files that
          ALREADY exist in the ZIP file.  Existing zipped files will be
          overwritten ONLY if the files have been updated since being added
          to the ZIP file.  It will NOT add new files.

               C:>PKZIP  -f  STORE.ZIP  *.*

              In the above example, all the existing files in the ZIP file,
          STORE, will be updated if a newer version of the file exists in
          the current directory.





     PKWARE                           -22-



          -i  Selectively BACKUP files
          ----------------------------

              This option will add only those files to the ZIP file that
          were NOT backed up the last time.  It adds only those files that
          have been changed.  If the program returns the notation "No files
          found", this means that everything had been previously backed up.

               C:\PKWARE> PKZIP -i  allfiles.zip

              In this example, all the files in the ZIP file 'allfiles'
          that had not been previously backed up, will be backed up.


          -m[u,f]  Move files into a ZIP file
          -----------------------------------

              This option will add files to a new OR existing ZIP file then
          automatically DELETE the original or source file.  There are two
          additional options available with the Move option:  Move Update
          and Move Freshen.

              When used alone, the Move option is similar to the  -a  Add
          command option except that it automatically deletes the original
          files.  This is a real time saver, for example, when compressing
          an entire directory.  The  -m  option compresses all your files
          into a single ZIP file, then deletes the original files.

          -mu = This specifies the Move option used along with the
                Update option.  When these two options are used
                together, the existing ZIP file will be updated
                with files only if they are not currently in the ZIP
                file, or if they are dated later than those with the
                same name already in the ZIP file.  After the ZIP file
                is updated, the original files will be deleted.

          -mf = This specifies the Move option used along with the
                Freshen option.  When these two options are used
                together, files already existing in the ZIP file will be
                updated with same-named files with later times and
                dates.  After the ZIP file is updated, the original
                files will be deleted.

              The original files are deleted after the program verifies the
          ZIP file for accuracy.  If an error does occur, such as DISK
          FULL, the original files will NOT be deleted.

               C:\DB> PKZIP  -m tiny.ZIP  *.dbf

              In this example, all the database files will be compressed
          into tiny.ZIP and then will be erased from the \DB directory.





     PKWARE                           -23-



          -d  Delete files from WITHIN a ZIP file
          ---------------------------------------

              This option is used to delete single or multiple files within
          a ZIP file.  Any of the MS-DOS file handling descriptions may be
          used.  The name of the file will be displayed on the screen as it
          is being deleted.

               C:>PKZIP -d  OldFile.ZIP   Garbage.Txt  Useless.Dbf

              In this example, Garbage.Txt and Useless.Dbf will be deleted
          from the files in OldFile.ZIP


          -v[b,r,t][c,d,e,n,o,p,s]  View technical information
          ----------------------------------------------------

              This option will display technical information concerning the
          files contained within a ZIP file.  There are several options
          available with the View option.  All are explained below.  The
          options determine how the information will be displayed and
          sorted.

               The following information about each file contained in the
          ZIP file will be displayed on the screen.

                      Length      Original length of the file
                      Method      Type of file compression used
                      Size        Size of the compressed file
                      Ratio       Percent reduction in file size
                      Date        Actual date of the file
                      Time        Actual time of the file
                      CRC-32      The CRC-32 value of the file
                      Attribute   The attribute of the file (s=System,
                                  h=Hidden, w=Writable, r=readonly file,
                                  and *=encrypted)
                      Name        Name of the file


               The View options for PKZIP are explained below.  The options
          determine how the information will be displayed and sorted on the
          screen.  The following display options are available:

          -vb = The  -b Brief display option will display all the
                information shown above except the CRC-32 value and the
                file attribute.

          -vt = The  -t Additional Technical display option is used to
                display extra technical information.  When this option
                is active, the following information (shown on the
                following page) will be displayed on the screen.  With this
                display, the following information about each file in the
                ZIP file will be displayed on the screen.



     PKWARE                           -24-



                The following information will be displayed for each file
          in the ZIP file, when the  -vt option is used.


                Filename            Name of the file
                File type           Type of file
                Encrypted           It will be noted here if the file is
                                    encrypted
                Attribute           The attribute of the file (s=System,
                                    h=Hidden, w=Writable, and r=readonly
                                    file)
                Comments            File comment if present will be listed
                                    here
                Date and Time       Date and Time of the ZIP file
                Compression Method  Imploding or Shrinking (or Reducing, if
                                    an earlier of PKZIP was used)
                Compressed Size     Reduced or compressed size of the
                                    file
                Uncompressed Size   Original length of the file
                CRC-32              The numeric CRC-32 value
                Created by          The version of PKZIP and the
                                    operating system used to create
                                    the ZIP file.
                Needed to extract   The version of PKZIP required to
                                    extract the files


          -vc = This option is used to display any existing file
                comments.

          -vr = Display information in reverse order from the default
                order.  This option can be used with any of the other
                View options to reverse the order of sorting.


              Any of the display options explained above can be used with
          the sorting options listed below.

              The following sorting options are available with the View
          option.  The default order of sorting is also specified.  (This
          order can be reversed by using the particular sorting option
          along with the  -vr  View Reverse option.)

               -vd = Sort by date of files, oldest to most recent.
               -ve = Sort by file extension, alphabetically.
               -vn = Sort by name of files, alphabetically.
               -vo = Display in original order, i.e. the order in which
                     the files were zipped.  (This option can be used to
                     override any configuration parameter you may have
                     set.)
               -vp = Sort by percentage ratio of compression, smallest
                     to largest.
               -vs = Sort by size of files, smallest to largest.



     PKWARE                           -25-



              If no sorting option is specified, the files will be
          displayed in the order they were compressed.

              The following example illustrates the command used to display
          the technical information about a ZIP file sorted by date.  The
          output is shown below.


          D:> PKZIP allfiles.zip -vd

      Length  Method   Size  Ratio   Date    Time   CRC-32  Attr  Name
      ------  ------   ----- -----   ----    ----   ------  ----  ----
        6144  Implode   2228  64%  01-04-80  13:52  a1f719af --w  SAVE.DOC
        7168  Implode   2305  68%  01-04-80  14:58  fc970ad9 --w  EWEXE.DOC
        2560  Implode   1312  49%  09-03-87  11:12  b89abd8c --w  TYPOS.DOC
         423  Implode    337  21%  09-03-87  11:14  131dd142 --w  PINTS.DOC
        2793  Implode   1264  55%  09-03-87  19:16  dab0a3b5 --w  DCA.DOC
        6638  Implode   3082  54%  01-25-89  21:52  80046b74 --w  ADME.DOC
       14848  Implode   5514  63%  03-02-89  09:03  7f2d751b --w  IIM1.DOC
       10240  Implode   4312  58%  03-02-89  09:04  70324a2f --w  IIM2.DOC
       75264  Implode  23261  70%  03-02-89  09:16  8f5baa0f --w  IIM3.DOC
      ------          ------  ---                                  -------
      126078           43615  57%                                       12


               In the example shown below, the additional technical
          information will be displayed.  The files are sorted
          alphabetically by name.  The output displayed below would be
          repeated for each file within the ZIP file.


          C:\WORD> PKZIP -vtn docs.zip

                         Filename: M3.DOC
                        File type: text
                       Attributes: --w
                    Date and Time: Jul 17,1989  09:15:00
               Compression Method: Implode
                  Compressed Size:    8258
                Uncompressed Size:   25600
                 32 bit CRC value: 27418eb3
                       Created by:   PKZIP: 1.0 under MS-DOS
                Needed to extract: PKUNZIP: 1.0


              Any of the View options listed above can be set in the
          Configuration file.  For example, if you wanted to always display
          the files contained in a ZIP file sorted by extension, this can
          be set in the Configuration file.  If no View options are
          specified, the default View setting is the order in which the
          files were compressed in the ZIP file.  Any view options
          specified on the command line will however, override the
          configuration parameters.



     PKWARE                           -26-



              The following View options can be set in the Configuration
          file.  The corresponding command line option is also listed for
          reference.

               VIEW = date      -vd
               VIEW = extension -ve
               VIEW = name      -vn
               VIEW = ratio     -vp
               VIEW = size      -vs
               VIEW = natural   -vo
               VIEW = reverse   -vr
               VIEW = brief     -vb
               VIEW = long      -vt
               VIEW = comments  -vc

              As in the view options specified on the command line, the
          last four options, reverse, brief, long and comments, can be
          combined with any of the sorting options listed above.

          For more detailed information on the Configuration file, see
          section 5.


          -c -C   Create file comments
          ----------------------------

              This option is case sensitive.  It is used to create file
          comments for the individual files contained in the ZIP file.  The
          maximum length for the comments is 60 characters.  You will be
          prompted to enter the comments.  If a comment already exists, you
          can edit it or press the <Enter> key to retain the same comment.
          To delete an existing comment, press the Space bar followed by
          the <Enter> key.

               The  -c (lower case c) option is used to edit all comments
          for existing files or files that are added.

              The  -C (upper case C) option is used when you want to create
          comments for only the new files that were added to the ZIP file.
          It is used along with the add/update options.  If -C is used
          without any other options, it has the same effect as -c.

          C:\PK> PKZIP textfile.zip -C -u

              In the above example, any comments on existing files will be
          retained and you will be prompted to enter comments only for the
          newly added files.









     PKWARE                           -27-



          -z  Create a Zipcomment
          -----------------------

              This option allows you to create a descriptive label for your
          ZIP files.  The Zipcomment will then automatically be displayed
          by PKZIP or PKUNZIP whenever the specific ZIP file is processed.

              When you type in the command, as shown below, you will be
          prompted to enter the Zipcomment.  The  -z option can also be
          used to edit an existing Zipcomment.

              The  -z  option can be used alone on an EXISTING ZIP file or
          in combination with any of the add/update commands.  Examples are
          shown below.

          C:\PK>PKZIP  zipdoc -z

              After entering the above command, the program will prompt you
          to type in a Zipcomment for the ZIP file 'ZIPDOC.ZIP'.  After
          entering the Zipcomment, press the <Enter> key to save it.


          C:\PKWARE> PKZIP zipdoc -z -a  *.doc

               In this example both files and Zipcomments will be added.
          To add files and add a Zipcomment, both the  -z and one of the
          add/update commands must be entered.


          -x  Exclude files from the ZIP file operation
          ---------------------------------------------

              This option is used to exclude files from the current
          operation.  It can be used along with any of the MS-DOS file
          handling descriptions.  It can be used along with most of the ZIP
          command options such as add, update, view, delete, etc.

          C:\pkzip stuff *.* -x*.BAK

              In the above example, all of the files in the current
          directory will be compressed into the file stuff.zip except the
          files with a .BAK  extension.














     PKWARE                           -28-



          -b[path]  Create temporary ZIP file on alternate drive/path
          -----------------------------------------------------------

              This option is designed to be used when insufficient disk
          space is a problem.  Every time a ZIP file is updated, PKZIP
          creates a new pre-ZIP file.  When the updating is completed, the
          original ZIP file is automatically deleted and the pre-ZIP file
          becomes the new ZIP file.  The result of this operation is that
          you need disk storage space equal to at least twice the actual
          size of the ZIP file while updating the ZIP file.

              Disk space is generally not a problem on a hard disk, but can
          pose restrictions on a floppy disk.  If adequate disk space is
          not available, the program will stop.

              The -b option will locate the pre-ZIP file on the path and
          location specified.  This file is used only in the process of
          updating the original ZIP file.  It will replace the original ZIP
          file and will NOT exist on the location specified in the -b
          option, when the update process is completed.  The -b option can
          be used along with any of the update options.

          C:>PKZIP a:zipdoc *.doc -bc: -u

              The above example illustrates the use of the -b option.  A
          ZIP file, zipdoc, located on drive A will be updated with all the
          .doc files.

              A temporary ZIP file, used in the update process will be
          located on the C drive.  This file will not exist when the update
          process is completed.


          -e[x,s,a,b]  Use extra compression options
          ------------------------------------------

              This option is used to specify the compression algorithm to
          be used in creating the ZIP file.  There are two types of
          compression that can be used:  Shrinking and Imploding.  The
          options are explained below.

          -ex = This specifies the Imploding method is to be used on all
                files being compressed.  In general, it provides a
                greater degree of compression over the Shrinking method.
                Note that -ex does not try both Shrinking and Imploding.
                In most cases where Shrinking would work better than
                Reducing in PKZIP 0.9x, Imploding will do better than
                Shrinking.  This is the default for PKZIP.

          -es = This specifies the Shrinking method is to be used on all
                files being compressed.  In general, it provides a
                faster method of compression over the Imploding method.




     PKWARE                           -29-



          -ea = This specifies the Imploding method is to be used on all
                ASCII files and the Shrinking method is to be used on
                all binary files.

          -eb = This specifies the Imploding method is to be used on all
                binary files and the Shrinking method is to be used on
                all ASCII files.

          Note:  You should be aware of the following when specifying a
                 compression method.

          - Using -ea -eb is the same as using -ex.

          - Numbers after the parameters such as "-ex4" or "-ea3" are
            accepted for compatibility with PKZIP 0.92 but they have no
            effect on the data compression in PKZIP 1.0.

          - Regardless of the compression method specified, files
            smaller than 320 bytes in size will be Shrunk, if enough
            memory is present.

          - Shrinking requires more memory than Imploding.  If there is
            enough memory to perform Imploding, but not enough memory to
            perform Shrinking and any of the last three options listed
            are chosen, PKZIP will issue a warning and use Imploding
            instead.  Shrinking requires about 128K to run, and
            Imploding approximately 90K.


          Some example commands are shown below.

          C:>PKZIP zipdoc -es *.DOC

              This command would Shrink all the files with a .DOC extension
          into the ZIP file.

          C:>PKZIP -ea zipdoc

              This command would Implode the ASCII files and Shrink the
          binary files.
















     PKWARE                           -30-



          -p -P  Store relative paths with filenames in the ZIP file
          ----------------------------------------------------------

              This option is case sensitive.  It allows you to store the
          directory and path information pertaining to each file within the
          ZIP file (or list file).

              If -p (lower case p) is used, all the pathnames that are
          recursed into will be stored in the ZIP file.  The  -p option is
          meaningful only when used with the  -r  option explained below.
          If -P (upper case P) is used, all the pathnames specified on the
          command line and those recursed into will be stored in the ZIP
          file.


          -r  Recurse through subdirectories
          ----------------------------------

              This command allows you more flexibility when creating or
          updating ZIP files.  The program will recurse through specified
          directories when obtaining files to compress.

          For example:

          C:> PKZIP alldoc -r  D:*.doc  C:\word\pk\*.txt

              This command will search all .DOC files on the D drive and
          all  .TXT files on the C:\word\pk directory and all directories
          below.  For example:

          C:\data>PKZIP -rp stuff

              This example will compress all the files in the current
          directory, and all directories below the current subdirectory.
          PKUNZIP  can then restore this directory tree either in the same
          directory, or at any place in the directory tree.  An entire
          directory tree can be compressed into a ZIP file and then
          restored by using the  -d option in PKUNZIP.  (See the -d
          option for PKUNZIP, Section 4.)

              By default, the filename only will be stored, unless the  -p
          or  -P  option is specified on the command line.


          -l  Display the License screen
          ------------------------------

              This command will display the software license agreement.

          A:>PKZIP -l






     PKWARE                           -31-



          -h  Display help screen
          -----------------------

              This command will display a help screen whenever typed on
          the command line.

          D:\PKWARE> PKZIP -h



          -s<password>  Scramble files with password
          ------------------------------------------

              This option is used to scramble, or encrypt the files in the
          ZIP file.  It includes password protection.  When extracting the
          ZIP file, the files will not be extracted unless the correct
          password is included on the command line.

              When specifying the password, there is no space between the
          s and the password.  Also the password is case sensitive.  It
          must be entered exactly the same when you Unzip the file.  It is
          important that you remember or somehow record the passwords that
          you use, because PKZIP does not retain a record of these
          passwords anywhere.

          C:\FINANCE> PKZIP PAYROLL -m -sSecret  *.pyr

              In the above example, the ZIP file PAYROLL will be created
          with all the files having a *.pyr extension.  In order to Unzip
          this file, the password 'Secret' will have to be specified
          exactly as shown above.


          -q   Enable ANSI Comments
          -q-  Disable ANSI Comments
          --------------------------

              This option can be used to override a command in the
          Configuration file.  By default, ANSI sequences are disabled.
          ANSI sequences are enabled or disabled in the Configuration file
          by the following commands.

               ANSI = Enabled
               ANSI = Disabled

              To override the configuration string, simply include the  -q
          or  -q- option on the command line.  An example is shown below.

          C:\MAIN> PKZIP allfile.zip -u -q-

              In this example, the ZIP file, allfile.zip will be updated.
          If the ANSI comments had been enabled in the configuration file,
          they would be disabled by the  -q- option on the command line.



     PKWARE                           -32-



          -o   Set ZIP file date to latest file date included
          -o-  Set ZIP file date to current date
          --------------------------------------

              This option can be used to override a command in the
          Configuration file.  By default the ZIP file being created will
          be given the current time and date.  By using the following
          command in the Configuration file, the ZIP file date will be
          determined by the date of the latest file included in the ZIP
          file.

               ZIPDATE = latest

              To override the configuration string, simply include the  -o
          or  -o- option on the command line.  Note:  This option is
          denoted by the letter o, not a zero.  An example is shown below.

          C:\MAIN> PKZIP DONE.ZIP -a -o-  *.doc

              In this example, all the files with a .doc extension will be
          added to the ZIP file.  The file will then be given the current
          date.  Assuming the ZIPDATE had been set to latest in the
          configuration file, it would be overwritten to current by the
          -o-  option on the command line.

          NOTE:  Please see the -k option for related information.


          -k   Keep current date on the ZIP file
          -k-  Set ZIP file date to current date
          --------------------------------------

              This option can be used to override a command in the
          Configuration file.  By default the ZIP file being created will
          be given the current time and date.  By using the following
          command in the Configuration file, the current ZIP file date will
          be retained when the file is updated.

               ZIPDATE = keep

              To override the configuration string, simply include the  -k
          or  -k- option on the command line.  An example is shown below.

          C:\MAIN> PKZIP DONE.ZIP -f -k-  *.txt

              In this example, all the files with a .txt extension will be
          freshened in the ZIP file.  The file will then be given the
          current date.  Assuming the ZIPDATE had been set to keep in the
          configuration file, it would be overwritten to current by the
          -k- option on the command line.

          NOTE:  Please see the -o option for related information.




     PKWARE                           -33-



          -w<H,S>  Include hidden or system files
          -W<H,S>  Do not include hidden or system files
          ----------------------------------------------

              This option is used to specify whether or not the hidden or
          system files will be included in the ZIP file.  It can be used to
          override a command in the Configuration file.  By default, hidden
          or system files will not be included.  By using one of the
          following commands in the Configuration file, you can specify
          whether system or hidden files will be included by default.

               INCLUDE = hidden
               INCLUDE = system

              To override the string in the Configuration file, simply
          include the -w<H,S> or -W<H,S> option on the command line.  To
          specify hidden files, use H; and to specify system files, use S.
          An example is shown below.

          C:\DOS> PKZIP ALL.ZIP  -a -Whs

              In this example, all of the files in the current directory
          will be compressed into ALL.ZIP except the hidden and system
          files.  Assuming the hidden files had been included in the
          Configuration file, this command overrides the Configuration
          file.

          NOTE:  There is no space between the W or w, and the h or s.

               For more detailed information on the Configuration file, see
          section 5.



          -j<H,S,R>  Mask hidden, system or readonly file attributes
          -J<H,S,R>  Do not mask hidden, system or readonly file
                     attributes
          ------------------------------------------------------

              This option is used to mask the hidden, system or readonly
          attributes of files so that they can be treated as normal
          writable files.  This command can be used to override commands in
          the Configuration file.  By default, these files will not be
          masked.

              By using the following commands in the Configuration file,
          you can specify whether system, hidden or readonly files will be
          masked, and thus treated as normal writable files.

               MASK = hidden
               MASK = system
               MASK = readonly




     PKWARE                           -34-



              To override the string in the Configuration file, simply
          include the -j<H,S,R> or -J<H,S,R> option on the command line.
          To specify hidden files, use H; to specify system files, use S;
          and to specify readonly files, use R.  An example is shown below.

          C:\DOS> PKZIP SAVE.ZIP  -a -jrh -whs ibmbio.com ibmdos.com

              In this example, the hidden/system/readonly files IBMBIO.COM
          and IBMDOS.COM will be included in SAVE.ZIP.  However, their
          hidden and readonly attributes will be masked off in the .ZIP
          file, saving them with the system attribute only.

              When the hidden, system and readonly attribute of files are
          masked off, the  -v View option will display the attribute as --w
          (for writable) in the attribute column.

          NOTE:  There is no space between the J or j, and the h, s or r.







































     PKWARE                           -35-






                                                                       |
                                                                       |
                                                                       |
                                        PKUNZIP - EXTRACTING ZIP FILES |
                                                                       |
                                      QUICK START - Extract a zip File |
                                               PKUNZIP Reference Guide |
                                        Description of Command Options |
                                                                       |
                                                                       |
                                                                       |










































     PKWARE                           -36-




                         QUICK START - EXTRACTING A ZIP FILE


              This section will describe some simple examples, illustrating
          the command format for extracting files from a ZIP file.

          ______________________________________________________________
          |                                                            |
          |                      QUICK START                           |
          |                 How to Extract a ZIP file                  |
          |                                                            |
          | A ZIP file is one which holds much information in a        |
          | greatly reduced space.  Use the PKUNZIP program to         |
          | extract compressed files from a ZIP file.  An entire ZIP   |
          | file can be extracted, or specific files  can be           |
          | delegated to be extracted.                                 |
          |                                                            |
          | There are five main parameters in the PKUNZIP command:     |
          |                                                            |
          | 1. The actual program name          PKUNZIP                |
          |                                                            |
          | 2. The command options (optional)   letter commands        |
          |                                     example: -v=view files |
          |                                                            |
          | 3. The ZIP file name                AnyFile.ZIP            |
          |                                                            |
          | 4. The destination where you want  Default = directory     |
          |    the extracted information to    where program is started|
          |    be located (optional)                                   |
          |                                                            |
          | 5. Selected files to be extracted  Default = *.*           |
          |    (optional)                                              |
          |                                                            |
          |  Examples:                                                 |
          |                                                            |
          |    C:>PKUNZIP  AnyFile.ZIP  A:                             |
          |                                                            |
          | This command will extract all the files in the ZIP file    |
          | AnyFile.ZIP.  It will locate extracted files on the A      |
          | drive.                                                     |
          |                                                            |
          |                                                            |
          |    C:>PKUNZIP  A:AnyFile.ZIP  *.C                          |
          |                                                            |
          | In this example the ZIP file located in the A drive will   |
          | be extracted on the C drive.  The destination is the C     |
          | drive by default.  Only the *.C files will be extracted.   |
          |                                                            |
          |                                                            |






     PKWARE                           -37-



          |    C:>PKUNZIP \Collect\AnyFile.ZIP  A:  -o                 |
          |                                                            |
          |                                                            |
          | In this example, the path location of the ZIP file is      |
          | specified.   The files will be extracted on the A drive.   |
          | With the  -o option, the file with the same name as those  |
          | existing on the A drive, will overwrite the already        |
          | existing files, without asking for user confirmation.      |
          |____________________________________________________________|















































     PKWARE                           -38-



                              PKUNZIP REFERENCE GUIDE


          The following table will provide a quick reference guide to
          all of the options of PKUNZIP.  The command syntax is also shown
          below.


          ----------------------------------------------------------------
          |                                                              |
          |                        PKUNZIP                               |
          |                                                              |
          | PKUNZIP [options] zipfile [d:path\] [file...]                |
          |                                                              |
          | zipfile = ZIP file name.  Default extension is .ZIP          |
          | file    = Names of files to compress. Wildcards *, ?  are ok.|
          |           Default is ALL files.                              |
          | list    = An optional list file name.                        |
          |                                                              |
          |                                                              |
          | Options are:                                                 |
          |   -c[m] = Extract files to the screen [with more]            |
          |   -d    = Create directories on extraction from ZIP file     |
          |   -h    = Call up help screen                                |
          |   -j -J<h,r,s> = Mask/Unmask file attributes                 |
          |   -l    = Display license information                        |
          |   -n    = Extract only newer files                           |
          |   -o    = Overwrite existing files                           |
          |   -p[a/b][c][n] = Extract files to the printer               |
          |   -s<password> = Unscrambles files with password protection  |
          |   -t    = Test ZIP file integrity                            |
          |   -q    = Enable ANSI comments                               |
          |   -v[b,r,c,d,e,n,p,s] = View file information                |
          |   -x    = Extract files (the default option)                 |
          |                                                              |
          ----------------------------------------------------------------




















     PKWARE                           -39-



                       DESCRIPTION OF COMMAND OPTIONS


              The command options used in extracting a ZIP file will be
          explained in detail in this section.  You will find that the new
          command format is much more flexible and easier to use.  Listed
          below is a summary of important facts to keep in mind while using
          PKUNZIP.

          - The command options can generally be placed anywhere on the
            command line.

          - The first filename listed on the command line will be
            interpreted as the ZIP file to be extracted.  Subsequent
            filenames will be interpreted as specific files to be
            extracted.

          - The command can be typed using either upper case, lower
            case, or any combination.

          - All command options must be preceded by a '-' character
            (i.e. -v) or the MS-DOS switch character, usually '/'.

          - Unlike PKZIP, unrelated options of PKUNZIP cannot be combined.

          - The default values for the command line are as follows:

          - If no options are entered, the default is -x, the extract
            files option.

          - If no extension is specified for the ZIP file the .ZIP
            extension is assumed.

          - If no destination is specified for the extracted files, they
            will be located in directory that the program is being run
            from.

          - If no file specs (filenames, with or without wildcards) are
            listed, the default is *.*.


              The following table lists all the options valid with the
          PKZIP command.  A brief summary is also given in the table.  The
          options are explained in detail, along with programming examples,
          following the table.











     PKWARE                           -40-



                          Table 4-1   pkunzip Command Options
          --------------------------------------------------------------

          OPTION         SUMMARY

          -c[m]          Extracts files to the console [with more]

          -d             Uses the pathnames stored in the ZIP file and
                         creates the paths on extraction if they do not
                         already exist.

          -h             Displays a help screen.

          -j -J<h,r,s>   Specifies masking or unmasking of file
                         attributes.

          -l             Displays the license agreement.

          -n             Extracts files from the ZIP file only if they
                         are newer than the ones already on the disk.

          -o             Overwrites existing files without asking for
                         confirmation.

          -p[a/b][c][n]  Extracts files to a printer.

          -s<password>   Unscrambles the files with password protection.

          -t             Tests the ZIP file for corruption.

          -q             Enables ANSI comments.

          -v[b,r,c,d,e,n,p,s]  Views technical information about
                         files in the ZIP

          -x             Extracts files from the ZIP file.


          Note:  Parameters listed in [ ] are optional.  For parameters
          listed in < >, at least one of the listed parameters must be
          specified.

              This section will give a detailed explanation of the command
          options used in the PKUNZIP command.

              The command options are explained in groups determined by
          function.  The options pertaining to extracting ZIP files are
          explained first, followed by the view options, print options, and
          miscellaneous options.







     PKWARE                           -41-



          -x  Extract files from a ZIP file
          ---------------------------------

              This command will extract files from a ZIP file.  Either the
          entire ZIP file can be extracted or certain files can be
          specified to be extracted.  The extracted files will be located
          in the current directory unless you specify a destination.  The
          -x option is the default option for the PKUNZIP command.  If no
          option is listed on the command  -x will be assumed.

              If a file being extracted already exists at the same
          destination where the extracted files are being located, the
          program will prompt you for confirmation before it overwrites the
          existing file.

          C:\DB>PKUNZIP -x  A:lists.zip  *.dbf  *.txt

              In the above example, all of the files with a .dbf or a .txt
          extension will be extracted from the ZIP file called 'lists'.
          The ZIP file is located on the A drive.  When the noted files are
          extracted, they will be located in the C:\DB directory.


          -o  Extract files from ZIP file and overwrite existing files
              on disk
          ------------------------------------------------------------

              This command will extract files from a ZIP file and
          automatically overwrite any same-named files found in the
          destination where the extracted files are being located.  The
          program will NOT prompt you for confirmation before overwriting
          these files.

              Either the entire ZIP file can be extracted or certain files
          can be specified to be extracted.  The extracted files will be
          located in the current directory unless you specify a
          destination.

          C:>PKUNZIP  Zfile  *.doc -o


              In the above example, all of the files with a .doc extension
          will be extracted from the ZIP file called 'Zfile' (the .ZIP
          extension is assumed).  As the files are being extracted any
          files with the same name in the current directory will be
          automatically overwritten.










     PKWARE                           -42-



          -c[m]  Extract files from a ZIP file and display them on the
                 screen
          ------------------------------------------------------------

              This command will extract files from a ZIP file and display
          them on the monitor.  The extracted files will scroll
          continuously on the screen.  The software can be told to pause
          after each screen of output by using the -cm (more) option.

          A:>PKUNZIP  STUFF  -c  dates.doc

              In this example, the file 'dates.doc' will be extracted from
          the noted ZIP file, and displayed on the screen.



          -n  Extract only new files from the ZIP file
          --------------------------------------------

              This command will extract files from the ZIP file only if
          they are newer than the same-named ones already on the disk, or
          if they do not already exist on the disk.  This option serves as
          an overwriting safeguard.  It will not allow an older version of
          a file in a ZIP file to overwrite a newer version on disk.
          "Newer" is defined as the most recent time and date created.

          C:>PKUNZIP -n  C:\DB\lists  *.dbf

              In this example, all of the files with a .dbf extension, that
          are dated more recently than any same-named files on disk, or
          that do not already exist on disk will be extracted from the ZIP
          file 'lists'.



          -t  Test the ZIP file
          ---------------------

              This option is used to test the files to make sure they are
          valid and have not been corrupted.  The files will be listed as
          they are being tested 'OK' will listed after each file if it is
          not corrupted.  This option does not extract files from the ZIP
          file; it only tests them.  For instructions on reconstructing a
          ZIP file that has been corrupted, see the section on PKZIPFIX in
          section 5.

          C:\WORD\PK> pkunzip  zipdoc  *.doc -t

              In the above example all the .DOC files will be tested from
          the ZIP file 'zipdoc'.






     PKWARE                           -43-



          -v[b,r][c,d,e,n,p,s]  View technical information
          ----------------------------------------------------

              This option will display technical information concerning the
          files contained within a ZIP file.  There are several options
          available with the View option.  The view options for PKUNZIP are
          the same as those for PKZIP except for -vc.  In PKUNZIP -vc will
          cause the files to be sorted by the 32 bit CRC value.  Also,
          there is no  -vt (view more technical information) option.

               The following information about each file in the ZIP file
          will be displayed (scrolled) on the screen.

                      Length      Original length of the file
                      Method      Type of file compression used, Implode or
                                  Shrink, (or Reduce if an older version of
                                  PKZIP was used)
                      Size        Size of the compressed file
                      Ratio       Percent reduction in file size
                      Date        Actual date of the file
                      Time        Actual time of the file
                      CRC-32      The CRC-32 value of the file
                      Attribute   The attribute of the file (s=System,
                                  h=Hidden, w=Writable, r=readonly file,
                                  and *=encrypted file)
                      Name        Name of the file


              The View options for PKUNZIP are explained below.  The
          options determine how the information will be displayed and
          sorted.

          The following display options are available:

          -vb = The  -b Brief display option will display all the
                information shown above except the CRC-32 value and the
                file attribute.

          -vr = Display information in reverse order from the default
                order.  This option is used with any of the sorting
                options listed below to reverse the order of sorting.















     PKWARE                           -44-



              The following sorting options are available with the View
          option.  The default order of sorting is also specified.  (This
          order can be reversed by using the particular sorting option
          along with the  -vr  View Reverse option.)

               -vd = Sort by date of files, oldest to most recent.
               -ve = Sort by file extension, alphabetically.
               -vn = Sort by name of files, alphabetically.
               -vp = Sort by percentage ratio of compression, smallest
                     to largest.
               -vs = Sort by size of files, smallest to largest.
               -vc = Sort by 32 bit CRC value.

              If no sorting option is specified, the files will be
          displayed in the order they were compressed.


              The following command illustrates the View option used to
          display a ZIP file sorted by name.  The output display is shown
          below.

          D:> PKUNZIP backups.zip   -vn


       Length  Method   Size  Ratio   Date    Time   CRC-32  Attr  Name
       ------  ------   ----- -----   ----    ----   ------  ----  ----
        10752  Implode   3933  64%  07-06-89  19:23  426c896a --w  AGO.BAK
        25600  Implode   8525  67%  07-13-89  17:55  bacc8813 --w  DM1.BAK
        41984  Implode  13320  69%  07-10-89  21:36  b20889a9 --w  DM2.BAK
        26112  Implode   8470  68%  07-11-89  18:53  eb623405 --w  DM3.BAK
        16896  Implode   6153  64%  07-10-89  20:52  05d3ba41 --w  DM4.BAK
        28601  Implode   8602  70%  07-13-89  18:49  c0bd9829 --w  EM4.BAK
         7168  Implode   2456  66%  01-04-80  14:57  007c1270 --w  EXE.BAK
         4608  Implode   1906  59%  06-28-89  23:35  d70bcf7e --w  FMAL.BAK
         6656  Implode   1926  72%  06-28-89  13:00  7447224b --w  PK.BAK
         3072  Implode   1181  62%  06-28-89  16:59  597bade0 --w  PK1.BAK
         6144  Implode   2350  62%  01-04-80  13:48  96bb2322 --w  SAVE.BAK
         1240  Implode    754  40%  07-10-89  11:23  8899969f --w  TEEN.BAK
         8704  Implode   3504  60%  06-29-89  19:26  760cc345 --w  TIAL.BAK
        26624  Implode   8495  69%  06-29-89  00:16  8849114b --w  TZIP.BAK
        38400  Implode  12080  69%  06-29-89  18:31  53619fb8 --w  VZIP.BAK
          927  Implode    502  46%  07-17-89  18:31  61b90c8f --w  WIEW.BAK
          319  Shrunk     246  23%  07-17-89  18:33  045dda73 --w  XXXZ.BAK
       ------          ------  ---                                -------
       253807           84403  67%                                     17











     PKWARE                           -45-



          -p[a/b][c][n]  Extract files to a printer
          -----------------------------------------

              This option is used to extract files from a ZIP file and send
          them to a printer for printing.  The command parameters are
          defined below.  The parameters of the print option must be
          programmed together on the command line.  (i.e. -pac1 is correct,
          -p -a -c1 is NOT correct.)

           -p   Specifies the extract to printer option.

          a/b   The a and b parameters will set the printer device to
                either ASCII or Binary mode respectively.  If no mode
                is specified, whatever the default mode is for the
                device will be used.

                ASCII mode is commonly used to print text.  It will
                form feed after each file.

                Binary mode corresponds to the COPY command commonly
                used to send fonts or graphics to a laser printer.  It
                will not form feed after each file.

                The a and b options cannot be mixed in the same
                command.

            c   This option specifies the port that the data should be
                sent through.   If c is included in the print option,
                this specifies a serial (COM) port is to be used.  If c
                is NOT included in the print option, this indicates a
                parallel (LPT) port is to be used.

            n   This is the number of the print port being used.  It can
                be any number from 1 to 4.  If no number is listed, 1 is
                assumed by default.

          C:>PKUNZIP -pbc2  PICTURE.ZIP

              In the above example, the files compressed in the ZIP file
          'PICTURE' will be extracted and printed in binary mode to the
          serial port COM2.

          C:>PKUNZIP  stuff *.doc -p

              In the above example, all the .DOC files will be extracted
          from STUFF.ZIP to the parallel port LPT1.










     PKWARE                           -46-



          -d  Recreate directory paths upon extraction
          --------------------------------------------

              This command option uses the pathnames that have been stored
          in the ZIP file.  The directory pathnames are stored in the ZIP
          file by the use of  -p, -P and -r options in the list of PKZIP
          commands explained in Section 3.  If the stored output paths do
          not exist at the extraction destination, this command will create
          them as they are stored in the ZIP file.

          For example:  If the following directory tree exists on drive C.

               root----+-abc--+-dir1
                       |      |
                       |      +-dir2-+-dir3
                       |             |
                       +-xyz--       +-dir4
                       |
                       +-pdq


          If you then executed: PKZIP -r -p  A:STUFF  C:\abc\*.*

          If you then executed: PKUNZIP  -d  A:STUFF  C:\pdq\newabc

          After the PKUNZIP command is processed, the C drive would then
          look like this:

               root----+-abc--+-dir1
                       |      |
                       |      +-dir2-+-dir3
                       |             |
                       +-xyz--       +-dir4
                       |
                       +-pdq--+-newabc-+-dir1
                                       |
                                       +-dir2-+-dir3
                                              |
                                              +-dir4


              All of the files originally in C:\ABC and its subdirectories
          (dir1, dir2, dir3, and dir4) have been restored to C:\PDQ\NEWABC,
          with the directory tree being recreated.

              If this -d option is not specified and pathnames have been
          stored in the ZIP file, only the filenames stored in the ZIP file
          will be used, any pathnames will be ignored.








     PKWARE                           -47-



          -h  Display help screen
          -----------------------

              This command will display a help screen whenever typed on the
          command line.  The help screen will also occur when a command has
          been entered incorrectly.

          D:\PKWARE> PKZIP -h



          -l  Display the License screen
          ------------------------------

              This command will display the software license agreement.



          -q   Enable ANSI Comments
          --------------------------

              By default, ANSI sequences are filtered from the comments.
          This option allows any ANSI sequences to be displayed
          unfiltered.


          C:\ACCT> PKUNZIP ACCT.ZIP -o -q

              In this example, the ZIP file will be uncompressed
          (overwriting files existing on disk) and the ANSI comments of the
          file being extracted will be enabled.



          -j<H,S,R>  Mask hidden, system or readonly file attributes
          -J<H,S,R>  Do not mask hidden, system or readonly file
                     attributes
          ----------------------------------------------------------

              This option is used to mask the hidden, system or readonly
          attributes of files so that they will be treated as normal
          writable files.  By default hidden, system, and readonly
          attributes are masked off upon extraction.  To preserve these
          attributes, the -J option must be used.


          C:\DOS> PKUNZIP ALL.ZIP -Jhs

              In this example, any hidden or system file attributes of the
          files being extracted will be preserved.


          NOTE:  There is no space between the J or j, and the h, s or r.



     PKWARE                           -48-



          -s<password>  Unscramble files with password
          --------------------------------------------

              This option is used to unscramble, or decrypt the files in
          the ZIP file.  It is used in combination with the  -s Scramble
          option of the Zip options.  It includes password protection.

              When Unzipping a ZIP file that has been encrypted, the files
          will not be extracted unless the correct password is included on
          the command line.  Unzip skips encrypted files if the password is
          not stated on the command line.

              When specifying the password, there is no space between the
          s and the password.  Also the password is case sensitive.  It
          must be entered exactly the same as when you zipped the file.  It
          is important that you remember or somehow record the passwords
          that you use, because PKZIP does not retain a record of these
          passwords anywhere.

          C:\FINANCE> PKUNZIP PAYROLL -o -sSecret  *.pyr

              In the above example, all of the files with a *.pyr extension
          will be extracted from the ZIP file 'PAYROLL'.  In this case the
          password specified when the file was zipped, was 'Secret'.
































     PKWARE                           -49-






                                                                          |
                                                                          |
                                                                          |
                                          PKSFX - SELF-EXTRACTION UTILITY |
                                                                          |
                                      Creating a Self-Extracting ZIP File |
                                                    PKSFX Reference Guide |
                                                                          |
                                                                          |
                                                                          |
                                                                          |










































     PKWARE                           -50-




                          CREATING A SELF-EXTRACTING ZIP FILE


               ZIP files can be extracted without PKUNZIP through the
          use of self-extraction methods.  This is useful when you need to
          transfer compressed files to a person who may not be familiar
          with file compression and extraction procedures, or who does
          not have the PKUNZIP program.  The self-extracting ZIP file is
          an executable file with a .EXE extension.  By simply typing in
          the name of the self-extracting ZIP file, the PKUNZIP extraction
          process will be performed.

               Several options are available for running (extracting) self-
          extracting ZIP files.  They are listed on the following page.

               All self-extracting ZIP files can be treated as a normal ZIP
          file.  All of the PKZIP and PKUNZIP options can be performed on
          a self-extracting ZIP file.  The only difference is, the .EXE
          extension must be specified on the command line or the program
          will search for a ZIP file with the same name.

               In the example shown below, files in the self-extracting ZIP
          file, STARTUP.EXE will be freshened using the PKZIP  -f option.

          C:\PKWARE> PKZIP STARTUP.EXE -f


               There are also several options that are available to use
          WHILE extracting the self-extracting ZIP file.  These are listed
          in the PKSFX reference guide in the next section.  An example is
          shown below.

          C:\PKWARE> SEZIP  -d C:\

               In this example, the self-extracting ZIP file, will be
          extracted with the  -d  options.  The directories stored in the
          ZIP file will be reconstructed on the C: drive.


               The ZIP2EXE program is used to create a self-extracting ZIP
          file from a ZIP file, while leaving the original ZIP file
          intact.  ZIP2EXE in turn, uses PKSFX.PRG to create the self-
          extracting ZIP file.  PKSFX must be in the current directory or
          PATH when creating a self-extracting file.  The program MAKESFX
          will create PKSFX.PRG from the distribution file.  (You must run
          MAKESFX initially before you can create any self-extracting
          files.)








     PKWARE                           -51-



               The following example illustrates the process of creating a
          self-extracting ZIP file.  If you have not run MAKESFX to create
          PKSFX.PRG, you must do this first.


            -------------------------------------------------------------
            |          CREATING A SELF-EXTRACTING ZIP FILE              |
            |                                                           |
            | 1.  Create the ZIP file using PKZIP.                      |
            |                                                           |
            | 2.  Create the self-extracting file by entering:          |
            |                                                           |
            |          C:\>ZIP2EXE  zipfile                             |
            |                                                           |
            |     Where zipfile is the name of the ZIP file you want to |
            |     create the self-extracting file from.  The default    |
            |     extension is .ZIP if none is given.                   |
            |                                                           |
            |     When the process is completed a message such as the   |
            |     one shown below will be displayed on the screen to    |
            |     let you know the conversion has been successful.      |
            |                                                           |
            |          zipfile.ZIP => zipfile.EXE                       |
            -------------------------------------------------------------
































     PKWARE                           -52-



                               PKSFX REFERENCE GUIDE



               This is a quick reference guide to the options available
          while uncompressing a self-extracting ZIP file.



          ---------------------------------------------------------------
          |                         PKSFX                               |
          |                                                             |
          |                                                             |
          | Syntax:                                                     |
          |   PKSFX  [options]  [d:path\]  [file...]                    |
          |                                                             |
          | Where:                                                      |
          |   PKSFX   = Name of the self-extracting ZIP file.           |
          |   options = Any of the options listed below.                |
          |   d:path\ = Output drive and/or path.                       |
          |   file    = Name(s) of files to extract.  Wildcards *, ?,   |
          |             are ok.  Default is all files.                  |
          |                                                             |
          |                                                             |
          |  Options:                                                   |
          |                                                             |
          |    -c[m] = Extract to screen [with more]                    |
          |    -d    = Create directories stored in ZIP file            |
          |    -n    = Extract only newer files                         |
          |    -p[a,b,c][1,2,3] = Extract to printer                    |
          |            [ASC mode, Bin,mode, COM port] [port number]     |
          |    -o    = Overwrite existing files                         |
          |    -x    = Extract files (default)                          |
          |    -l    = Display software license agreement               |
          |    -t    = Test ZIP file integrity                          |
          |                                                             |
          |                                                             |
          ---------------------------------------------------------------


















     PKWARE                           -53-







                                                                       |
                                                                       |
                                                                       |
                                           SPECIAL HANDLING PROCEDURES |
                                                                       |
                                                How a ZIP File is Made |
                                          Use of a RAM Disk with PKZIP |
                                      LAN - Local Area Network Support |
                                     Creating a Pre-Selected File List |
                                                 Batch File Processing |
                                                The Configuration File |
                                                 PKWARE Error Messages |
                                        PKZIPFIX - File Reconstruction |
                                                                       |
                                                                       |
                                                                       |




































     PKWARE                           -54-



                              HOW A ZIP FILE IS MADE


              PKZIP creates a temporary pre-ZIP file that has an extension
          of .!!! such as in  OldFile.!!!  during the compressing process.
          OldFile.!!! is the upgraded version of OldFile.ZIP.

              When all of your files have been successfully compressed, the
          original ZIP file is deleted and the file with the extension .!!!
          is simply renamed with a new extension .ZIP.

              It is FASTER to rename the temporary ZIP file than to copy it
          from one disk drive to another.  The FASTEST way to create your
          ZIP files is to do so from your largest disk drive.  The -b
          option is used to locate the pre-ZIP file on an alternate drive
          location, when your disk space is limited.



                            USE OF A RAM DISK WITH PKZIP


              PKZIP swaps information on and off disk memory as it runs.
          This process is NOT the same as the physical creation of the NEW
          ZIP file.  The default drive for this program activity is the
          drive from which the program was executed.  You can speed up
          performance as well as gain disk space by telling PKZIP which
          drive and/or subdirectory to use through a DOS environmental
          string.  All routing can be directed to your RAM Disk by using
          the  Set PKTMP command.

               C:>Set PKTMP=D:   --->  where "D:" refers to the RAM disk



                       LAN - LOCAL AREA NETWORK SUPPORT

              Both PKZIP and PKUNZIP, when opening files for read-only type
          access, will automatically open files in SHARE "deny write
          access" mode.  This pertains to systems running with DOS 3.0 or
          above, so that files can be read concurrently by other tasks.
          PKZIP uses a unique filename for all temporary files created.
          This allows PKZIP to be run by concurrent programs or on a
          network drive without any file contention or conflict.












     PKWARE                           -55-



                         CREATING A PRE-SELECTED LIST FILE


              This option is used to create List Files to record file
          selections you use frequently.  These List Files can then be
          typed on the command line instead of typing all the file names
          separately. List Files can be used with all the PKZIP and PKUNZIP
          command options.

              The procedure for creating List Files is somewhat easier with
          the new PKWARE programs.  The following example illustrates the
          steps necessary for creating List Files.

               __________________________________________________
               |                                                |
               |             CREATE A LIST FILE                 |
               |                                                |
               |   1.  Create the list using a word processor   |
               |       or text editor.                          |
               |                                                |
               |   2.  Type in the names of the files you       |
               |       select using any MS-DOS file notation.   |
               |                                                |
               |   3.  Include the directory and path locations |
               |       of the files in the list.                |
               |                                                |
               |   4.  Save the List File under the name you    |
               |       choose.  There is no default extension.  |
               |                                                |
               |    List File Name       Files Included         |
               |                                                |
               |      Group              letters.txt            |
               |                         C:\LOTUS\*.*           |
               |                         C:\DB\Monthly.*        |
               |                         D:\*.WKS               |
               |________________________________________________|


              When using a List File, it is preceded by the @ symbol on the
          command line.  If the List File is not in the directory, the @
          symbol is put before the PATH designation.   Note:  more than one
          list may be used on one command line.

               The List File can be mixed with other options, examples are
          shown below.

               C:>PKUNZIP  -r  NewFile.ZIP   @Group

               C:>PKUNZIP  AnyFile.ZIP   Today.Txt  @Group  @Data

               C:>PKZIP  -u  MoreFile  @Group  @\LOTUS\Accounts

               C:>PKZIP  -a  OldFile   *.Dbf  @OldStuff



     PKWARE                           -56-



                         USE OF PKWARE IN BATCH FILE PROCESSING


              When running PKZIP and PKUNZIP with other applications, you
          can test if the PKWARE experienced an error by using the DOS
          error level variable.  PKZIP and PKUNZIP return zero error level
          if no errors have occurred.

              If an error has occurred, the software will return one of the
          following error codes:


           PKZIP:
                    0    No error.
                    1    Bad file name or file specification.
                    2,3  Error in ZIP file.
                    4-11 Insufficient Memory.
                    12   No files were found to add to the ZIP file,
                         or no files were specified for deletion.
                    13   File not found.  The specified ZIP file
                         or list file was not found.
                    14   Disk full.
                    15   ZIP file is read-only and can not be modified.
                    16   Bad or illegal parameters specified.
                    17   Too many files.

          PKUNZIP:
                    0    No error.
                    1    Warning error (such as failed CRC check).
                    2,3  Error in ZIP file.
                    4-8  Insufficient Memory.
                    9    File not found.  No ZIP files found.
                    10   Bad or illegal parameters specified.
                    11   No files found to extract/view etc.
                    50   Disk Full.
                    51   Unexpected EOF in ZIP file.

          NOTE:

             Please note that if testing errorlevels in a batch file that
          DOS tests the errorlevel not for equality, but for greater than
          or equal to.

             For example, if the software exits with an exit code of 10,
          errorlevel 10 will be true, and so will errorlevel 9, errorlevel
          8, and so on.  Therefore, Errorlevel 0 will always test as true.
          Therefore, errorlevels should be tested in descending order.









     PKWARE                           -57-



          For example:

               pkunzip stuff -d d:\temp
               if errorlevel 51 goto err51
               if errorlevel 50 goto err50
               if errorlevel 10 goto err10
               if errorlevel 9 goto err9
               if errorlevel 4 goto err4
               if errorlevel 2 goto err2
               if errorlevel 1 goto err1
               echo No Error
               goto exit
               :err51
               echo Unexpected EOF
               goto exit
               :err50
               echo Disk Full
               goto exit
               .
               .


                             THE CONFIGURATION FILE


               The Configuration file can be used to set parameters to
          values other than the normal default values.  These values will
          then be the defaults for the specified parameters.  You can
          override any parameters that are set in the Configuration file
          by entering contrary instructions on the command line.

               PKZIP 1.0 will look in the current directory for the
          Configuration file called PKZIP.CFG.  If not found, then PKZIP
          will look for an environment variable of the form
          PKZIP.CFG=d:\path and will look in the specified path for
          PKZIP.CFG.

               This is a brief explanation of the configuration options for
          PKZIP 1.0 and their equivalent command line options.  An asterisk
          (*) indicates that this is the default for PKZIP.
















     PKWARE                           -58-



          The following parameters can be set in the Configuration file.

          CONFIGURATION COMMAND      COMMAND LINE OPTION     DEFAULT
          ---------------------      -------------------     -------

          ANSI = enabled                     -q
               = disabled                    -q-                *

          ZIPDATE = latest                   -o
                  = keep                     -k
                  = current                  -k- -o-            *

          INCLUDE = hidden                   -wh
                  = system                   -ws
          EXCLUDE = hidden                   -WH                *
                  = system                   -WS                *
          Note:  These options can be combined. (For example:
                 INCLUDE = hidden/system)

          MASK = readonly                    -jr
               = hidden                      -jh
               = system                      -js
          PASS = readonly                    -Jr                *
               = hidden                      -Jh                *
               = system                      -Js                *
          Note:  These options can be combined.  (For example:
                 MASK = hidden, system)

          VIEW = comments                    -vc
               = extension                   -ve
               = size                        -vs
               = date                        -vd
               = name                        -vn
               = ratio                       -vp
               = natural                     -vo                *
               = reverse                     -vr
               = brief                       -vb
               = long                        -vl
          Note:  Some of these options can be combined.  The last three
                 options, reverse, brief and long, can be combined with any
                 of the above options.

          COMPRESS = size                    -ex                *
                   = speed                   -es

          PATHS = none                       -p-                *
                  all                        -P
                  recurse                    -p

          RECURSE = on                       -r
                  = off                      -r-                *





     PKWARE                           -59-



               For some of the parameters, only one value can be specified.
          For example, ANSI can be either enabled or disabled.  In other
          cases, more than one variable can be set per parameter.  For
          example, INCLUDE can be set to either system and/or hidden
          files.

               The parameters can be typed in uppercase, lowercase, or a
          combination.  When more than one variable can be set per
          parameter, the variables can be listed on the same line,
          separated by a comma (,), switch (/), or space.

               For example, when setting the MASK parameter to include all
          readonly, hidden and system files to be masked any of the
          following programming methods would be acceptable.



               MASK=readonly
               MASK=hidden
               MASK=system

               MASK=readonly, hidden, system

               MASK=readonly hidden system

               MASK=readonly/hidden/system

               MASK=readonly, hidden/system


               There are two environmental variables that can be set.
          These environmental strings can be typed in on the command line
          at the DOS prompt.

          Setting the path for the Configuration file.

               C:>SET PKZIP.CFG = C:\UTILS

               In this case, PKZIP.CFG is located in the \UTILS directory.
          Use the location of your choice.


          Setting a RAM disk.

               C:>SET PKTMP=D:

               This will speed up the program operation default by
          directing the mechanics of PKZIP to a RAM disk.  This has
          nothing to do with the creation of the "new" archive file during
          the add or upgrade process.






     PKWARE                           -60-



                                 ERROR MESSAGES


               The following error messages may appear when using PKZIP.
          When the word 'WARNING' appears in the message, program
          execution will continue, otherwise, the program will abort to
          DOS.

          A brief explanation of each message follows.


          PKZIP:  Can't open XXXX.ZIP for write access!

               The named ZIP file is read-only or locked by another
               application and can not be modified.


          PKZIP:  No file(s) found.

               No matching files were found to list using the View
               option.


          PKZIP:  Insufficient disk space for updated files:  XXXX.ZIP.

               The -b option was used, and there is not enough space on
               the original drive containing the ZIP file to receive the
               updated ZIP file.  Try to free up some space on the drive
               containing the ZIP file, and retry the operation.  Also,
               make sure that the drive specified with the -b option is
               different than the drive containing the ZIP file.


          PKZIP:  Insufficient disk space for ZIP comment.

               There is insufficient disk space to hold the comment as
               entered.


          PKZIP:  Warning!  Not enough memory for Shrinking method.

               The -es or -ea or -eb options were used to specify that
               certain files should be Shrunk.  However, there is not
               enough memory available to perform Shrinking.  Instead,
               all files will be Imploded.


          PKZIP:  Warning!  Can't delete XXXXX.

               The -m (Move) option was specified to delete files after
               the ZIP file was constructed.  However, the named file
               could not be deleted, and is probably read-only.




     PKWARE                           -61-



          PKZIP:  No files specified for deletion!

               The -d (Delete) option was specified, but no filenames
               were given to delete.  This option does NOT default to
               *.* if no filenames are given.


          PKZIP:  Nothing to do!

               No matching files, or files with the specified
               attributes, or files after the specified date etc., were
               found to compress.


          PKZIP:  Insufficient memory.

               Insufficient memory is available to process the ZIP file.
               Try making more memory available to PKZIP.  If this does
               not rectify the problem, then the ZIP file might be
               corrupted, and PKZIPFIX should be used to fix the ZIP
               file.


          PKZIP:  XXXX.ZIP - error in ZIP, use PKZIPFIX.

               The named ZIP file has a corrupted file index.  Use
               PKZIPFIX to reconstruct the ZIP file.


          PKZIP:  Can't create: XXXX.

               The named file could not be created.  Either the target
               directory is full or the file already exists and is read-
               only or locked by another application.


          PKZIP:  Disk full, file:  XXXX.

               A disk full error occurred while writing to the specified
               file.  Try freeing up some disk space on the target
               drive.  Also, see the -b option and the PKTMP environment
               variable.


          PKZIP:  Can't find:  XXXX.ZIP.

               The named ZIP file could not be found.


          PKZIP:  Too many files.

               There are too many files to compress into one ZIP file.  The
               limit is 3900 files per ZIP file.



     PKWARE                           -62-



          The following error messages may appear when using PKUNZIP.  A
          brief explanation of each message follows.


          PKUNZIP:  Warning!  File XYZZY already exists.  Overwrite (y/n)?

               The file XYZZY already exists on the disk.  Pressing N
               will leave the original file on the disk, and not extract
               the file from the ZIP file.  Pressing Y will extract the
               file from the ZIP file, and overwrite the file on the
               disk.  Also, see the -o and -n options.


          PKUNZIP:  Warning!  I don't know how to handle:  XYZZY.

               The file XYZZY is compressed or encoded in a way that
               this version of PKUNZIP is unable to handle.  Either a
               later version of PKUNZIP is required to properly extract
               this file, or the ZIP file is possibly corrupted.


          PKUNZIP:  Warning!  Inconsistent local header for file:  XYZZY.

               The local header for file XYZZY is different than the
               central header information.  Use PKZIPFIX to reconstruct
               the ZIP file.


          PKUNZIP:  Warning!  File fails CRC check.

               The CRC-32 check for the file being extracted or tested
               did not match the stored value for the file.  The file is
               probably corrupted.


          PKUNZIP:  Warning!  XXXX.ZIP has errors.

               The named ZIP file had one or more errors detected in it.


          PKUNZIP:  Warning!  File has bad table.

               The file being tested or extracted has an error in its
               encoding.  The file is probably corrupt.


          PKUNZIP:  Warning!  No file(s) found.

               No files were found to extract, test, or list.







     PKWARE                           -63-



          PKUNZIP:  Warning!  XXX.ZIP - error in ZIP, use PKZIPFIX.

               The named ZIP file has a corrupted file index.  Use
               PKZIPFIX to reconstruct the ZIP file.


          PKUNZIP:  Warning!  Insufficient memory.

               Insufficient memory is available to process the ZIP file.
               Try making more memory available to PKUNZIP.  If this
               does not rectify the problem, then the ZIP file might be
               corrupted, and PKZIPFIX should be used to fix the ZIP
               file.


          PKUNZIP:  Warning!  Can't create: XXXXX.

               The named file could not be created.  The output
               directory is either invalid or full.


          PKUNZIP:  Can't find: XXXX.ZIP.

               The named ZIP file(s) could not be found.


          PKUNZIP:  Can't open: XXXX

               The specified file list could not be opened.


          PKUNZIP:  Warning!  Can't open XXXX.ZIP

               The named file could not be opened.  Either a disk error
               occurred, or the file is locked by another application.


          PKUNZIP:  Disk full, file:  XXXXX.

               There is not enough free room on the destination
               drive/directory for the file being extracted.  The
               program will abort and exit to DOS.


          PKUNZIP:  Incorrect password for file.

               The ZIP file is password protected, and cannot be opened
               unless the correct password is entered.  The password
               entered is not the correct password.







     PKWARE                           -64-



          PKUNZIP:  Skipping encrypted file.

               Only the files that are password will be skipped (not
               extracted) because they are password protected and the
               correct password was not entered.



                          PKZIPFIX - RECONSTRUCTING ZIP FILES


               PKZIPFIX is a simple to use utility that takes advantage of
          the extra reliability of the ZIP file format to reconstruct
          truncated or damaged ZIP files.  The ZIP file format was
          designed for high reliability, using  4-byte signatures for all
          file headers, and redundant distributed and centralized
          directory structures.

               PKZIPFIX, however, cannot create good data out of bad data!
          If a portion of a ZIP file has been corrupted, PKZIPFIX will
          allow recovery of the unaffected files.  Depending on how badly
          damaged the ZIP file is, one or more files may still extract
          with errors.

               PKZIPFIX should be used when PKZIP or PKUNZIP indicates
          that a ZIP file is in error, or a ZIP file has become damaged.
          PKZIPFIX can also be used to extract the ZIP file portion from a
          PKSFX self-extracting file.



                     -------------------------------------------------
                     |                 PKZIPFIX                      |
                     |         Reconstructing ZIP files              |
                     |                                               |
                     |Syntax:  PKZIPFIX  zipfile                     |
                     |                                               |
                     | zipfile = The name of the ZIP file to be      |
                     |           reconstructed.  The .ZIP extension  |
                     |           will be assumed by default.         |
                     |                                               |
                     |                                               |
                     | PKZIP fix will attempt to recover zipfile,    |
                     | and will create a file called PKFIXED.ZIP     |
                     | which contains the reconstructed ZIP file.    |
                     |                                               |
                     |                                               |
                     -------------------------------------------------


               The file that is created by PKZIPFIX, PKFIXED.ZIP, can then
          be extracted or listed with PKUNZIP.  IT is strongly recommended
          that you then use PKZIP to create a new ZIP file from the files
          that are extracted from PKFIXED.ZIP.


     PKWARE                           -65-





                                                                       |
                                                                       |
                                                                       |
                                           REGISTRATION AND BACKGROUND |
                                                                       |
                                                     Technical Support |
                                          Other Background Information |
                                              Registration Information |
                                                      Software License |
                                                                       |
                                                                       |
                                                                       |










































     PKWARE                           -66-




                                  TECHNICAL SUPPORT


          If you have any further questions or comments about PKWARE File
          Compression programs, contact:

                   Mail:  PKWARE, Inc.
                          7545 North Port Washington Road
                          Suite 205
                          Glendale, WI 53217

                   PKWARE Support BBS - avaliable 24 hours
                       (414) 352-7176

                   Voice - 9am to 5pm CST:
                       (414) 352-3670

                   Fax - (414) 352-3815


                           _______
                      ____|__     |               (tm)
                   --|       |    |-------------------
                     |   ____|__  |  Association of
                     |  |       |_|  Shareware
                     |__|   o   |    Professionals
                   -----|   |   |---------------------
                        |___|___|    MEMBER
		      


                           REGISTRATION INFORMATION


          ______________________________________________________________
          |                                                            |
          |                      REGISTRATION                          |
          |                                                            |
          | If you find PKPZIP, PKUNZIP, and PKSFX fast, easy, and con-|
          | venient to use, a partial registration of $25 would be     |
          | appreciated.                                               |
          |                                                            |
          | If you send $47 or more, you will receive, when available, |
          | a diskette and manual for the next version of the software.|
          |                                                            |
          | Please state the current version number of the software    |
          | you are presently using.  Send check or money order to:    |
          |                                                            |
          |                       PKWARE, Inc.                         |
          |              7545 North Port Washington Road               |
          |                        Suite 205                           |
          |                 Glendale, WI  53217-3422                   |
          |____________________________________________________________|


     PKWARE                           -67-



                                 SOFTWARE LICENSE


          PKZIP (tm) FAST! Create/Update Utility
          PKUNZIP (tm) FAST! Extract Utility
          PKSFX (R) FAST! Self-Extract Utility
          Copyright 1989 PKWARE Inc.  All Rights Reserved

          PKSFX Registered U.S. Patent and Trademark Office


               You are free to use, copy and distribute PKZIP, PKUNZIP, and
          PKSFX for NONCOMMERCIAL use if:

               No fee is charged for use, copying or distribution.

               It is not modified in any way.

               Clubs and user groups may charge a nominal fee not to exceed
          ($10) for expenses and handling while distributing PKZIP,
          PKUNZIP, and PKSFX.

               Site licenses and commercial licenses for PKZIP, PKUNZIP,
          and PKSFX are available.  Consult the file ORDER.DOC for more
          information, or contact PKWARE for more information.


               PKWARE hereby disclaims all warranties relating to this
          software, whether express or implied, including without
          limitation any implied warranties of merchantability or fitness
          for a particular purpose. PKWARE will not be liable for any
          special, incidental, consequential, indirect or similar damages
          due to loss of data or any other reason, even if PKWARE or an
          agent of PKWARE has been advised of the possibility of such
          damages.  In no event shall PKWARE's liability for any damages
          ever exceed the price paid for the license to use software,
          regardless of the form of the claim.  The person using the
          software bears all risk as to the quality and performance of the
          software.

















     PKWARE                           -68-

```
{% endraw %}

## ORDER.DOC

{% raw %}
```

You can order or register PKWARE products by MasterCard or Visa!

To register with MasterCard or Visa, please fill out the information
requested below and the enclosed order form.

You can also register on-line with MasterCard or Visa on the
PKWARE Support BBS (414) 352-7176.

MasterCard ______ or Visa ______

Card Number _________________________________________________________

Expiration Date _____________

Card Holder's Signature REQUIRED ____________________________________


TO:                           FROM:

PKWARE, Inc.                  Name: __________________________________
7545 N. Port Washington Rd.
Glendale, WI 53217-3422  (Company): __________________________________

414-352-3670 Voice         (Title): __________________________________
414-352-7176 BBS
414-352-3815 Fax	   Address: __________________________________
Today's          
date: ___________       City,State: __________________________________
                                                              Zip Code
			   Country: _________________________

		      Phone Number: _________________________


PKZFIND (tm) File Finder Plus for MS-DOS

  Searches subdirecties & .ZIP files for wanted files.
  * Diskette with programs and documentation files ...... $25.    ______
  * Commercial site license for the use of PKZFIND.
    (Includes one diskette with programs & documentation files.)
     2 to  9 computers ..... at $20 each    # computers ___x 20   ______
    10 to 24 computers ..... at $16 each    # computers ___x 16   ______
    25 to 49 computers ..... at $13 each    # computers ___x 13   ______
    50 to 99 computers ..... at $10 each    # computers ___x 10   ______
    100 or more computers .. $1000 one time fee                   ______

Diskette format (choose one)     5.25" disk ____    3.5" disk ____

Extra program disk & documentation with purchase of
site licenses of 2 or more available at $7.00 each.     ___x  7   ______

PKZIP (R), PKUNZIP (R), and PKSFX (R) for MS-DOS

  * Diskette with programs and documentation files ...... $47.    ______
  * Site license for the use of PKZIP, PKUNZIP & PKSFX.
    (Includes one diskette with program disk & documentation.)
    2 to   9 computers ..... at $36 each    # computers ___x 36   ______
   10 to  24 computers ..... at $28 each    # computers ___x 28   ______
   25 to  49 computers ..... at $22 each    # computers ___x 22   ______
   50 to  99 computers ..... at $16 each    # computers ___x 16   ______
  100 to 149 computers ..... at $12 each    # computers ___x 12   ______
  150 to 199 computers ..... at $11 each    # computers ___x 11   ______
  200 or more computers .... $2000 one time fee                   ______

Diskette format (choose one)     5.25" disk ____    3.5" disk ____

Extra program disk & documentation with purhcase of
site licenses of 2 or more available at $8.00 each.     ___x  8   ______


PKZIP (R), PKUNZIP (R), and PKSFX (R) for OS/2

  * Diskette with programs and documentation files ...... $47.    ______
  * Site license for the use of PKZIP, PKUNZIP & PKSFX.
    (Includes one diskette with program disk & documentation.)
    2 to   9 computers ..... at $36 each    # computers ___x 36   ______
   10 to  24 computers ..... at $28 each    # computers ___x 28   ______
   25 to  49 computers ..... at $22 each    # computers ___x 22   ______
   50 to  99 computers ..... at $16 each    # computers ___x 16   ______
  100 to 149 computers ..... at $12 each    # computers ___x 12   ______
  150 to 199 computers ..... at $11 each    # computers ___x 11   ______
  200 or more computers .... $2000 one time fee                   ______

Diskette format (choose one)     5.25" disk ____    3.5" disk ____

Extra program disk & documentation with purhcase of
site licenses of 2 or more available at $8.00 each.     ___x  8   ______


Please add $3.50 for shipping & handling for each
package.                                          ___x $5.00/3.50 ______
(Please add $5.00 per package for overseas
orders.)

Wisconsin residents add 5% sales tax.                             ______

					Total enclosed            ______

Terms:
  MasterCard, Visa, Check or Money Order drawn on a U.S.A. bank in U.S. 
  funds.  Corporate Purchase orders (net 30) accepted for software from
  large corporations within the USA & Canada.  All licenses are prepaid
  only.  All orders outside of the United States & Canada must be prepaid.

* Includes a free upgrade to the next version of the software, when
  available.

PKWARE,PKZIP,PKUNZIP & PKSFX  Registered U.S. Patent and Trademark Office


```
{% endraw %}

## README.DOC

{% raw %}
```



This diskette contains the file PKZ110.EXE.  Type

PKZ110

followed by pressing the Enter key to create the program and
documentation files for PKUNZIP, PKZIP, and PKSFX version 1.1.
To print the documentation files after running PKZ110, type

COPY *.DOC PRN

followed by the return key.


If you distribute PKUNZIP, PKZIP, and PKSFX to friends, associates, 
or to a computer bulletin board system (BBS), please distribute the 
file PKZ110.EXE rather than the individual files for PKUNZIP, PKZIP
and PKSFX.


NOTE
----

This software contains data encryption technology.  Do not export
this software outside of the United States or Canada.  Export versions
of PKZIP, PKUNZIP, and PKSFX without encryption are available.  Call
or write PKWARE for more information.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1364

     Volume in drive A is #1364 S2.0
     Directory of A:\

    PKM104   EXE    130190   1-22-91  12:39a
    PKZF11   EXE     23962   1-22-91   1:25a
    PKZ110   EXE    149219   1-22-91   2:30a
    PKL103   EXE     50375   1-22-91  12:46a
    GO       COM      5428   2-26-91   1:39p
            5 file(s)     359174 bytes
                               0 bytes free

![PC-SIG Library Disk #1364]({{ site.software.pcsigdisks.server }}/pcx86/sw/misc/pcsig/1000-1999/DISK1364/DISK1364.jpg)
