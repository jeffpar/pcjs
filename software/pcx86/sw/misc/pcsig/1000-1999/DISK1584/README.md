---
layout: page
title: "PC-SIG Diskette Library (Disk #1584)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1584/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1584"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FC AND FCDOC"

    FCDOC is a file comparison utility that compares English
    documents and lists the differences between them, sentence by sentence.
    The program lists the changes applied to the first file to make the
    second file. The output listing can be put in a third output file, or
    displayed on the screen. Output to the screen can be controlled
    interactively; e.g., show next screen, show next line, scroll
    continuously, etc.
    
    FCDOC works with any file that contains up to 16,300 sentences of ASCII
    English text. FCDOC ignores non-printable characters and white space
    when comparing sentences, so only differences in the content of the
    document are shown.
    
    FCDOC always find a minimal list of differences (smallest number of
    lines or sentences deleted or added), and never misses matching
    sentences.
    
    FC compares ASCII text files and lists the differences between
    them line by line. FC provides the following benefits:
    
    ~ shows word by word differences between lines that
    have changed.
    
    ~ helps "C" programmers merge program changes. FC can compare two "C"
    programs containing separate sets of changes, and combine them
    automatically to make a single program.
    
    ~ lets you do multiple comparisons in one run. Wildcards can be used to
    specify groups of files to compare.
    
    ~ can ignore white space changes. This is useful when you want to ignore
    format changes in "C" programs or other text.
    
    ~ never gets confused or "unsynchronized" (as some comparison programs
    can).
    
    ~ always finds the smallest set of differences between files, and never
    misses matching lines.
    
    ~ lets you list changes in ways that make sense to you by providing
    multiple display options. You can also customize FC to use your favorite
    options automatically.
    
    ~ The difference listing can be put in a third output file, or displayed
    on the screen. Output to the screen can be controlled interactively;
    e.g.; show next screen, show next line, scroll continuously, etc.
    
    FC works with any ASCII text file that contains up to 16,300 lines.
    Non-ASCII characters (e.g., line drawing characters) are handled
    correctly too.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FC.DOC

{% raw %}
```



                                    FC Ver. 2.2
                                    Mike Albert
                                Copyright (c) 1990



     1   INTRODUCTION

     FC compares two text files and lists the differences between them line
     by line.  FC provides the following benefits:

         o   FC can show word by word differences between lines that have
             changed.

         o   FC helps "C" programmers merge program changes.  FC can compare
             two "C" programs containing separate sets of changes, and
             combine them automatically to make a single program.

         o   FC lets you do multiple comparisons in one run.

         o   FC can ignore white space changes.  This is useful when you want
             to ignore format changes in "C" programs or other text.

         o   FC never gets confused or "unsynchronized" (as some comparison
             programs can).

         o   FC always finds the smallest set of differences between files,
             and never misses matching lines.

         o   FC lets you list changes in ways that make sense to you by
             providing multiple display options.  You can also customize FC
             to use your favorite options automatically.

     If you're familiar with earlier versions of FC, look at section 7 to
     learn about the enhancements.

     FC can be used on any IBM-compatible computer.  Any display adapter that
     provides 25 lines of 80 characters will work correctly.  FC runs under
     MS-DOS versions 2.0 and later, but 3.0 or later is required to customize
     the default options.  The amount of memory required is dependent on file
     size.  100K is enough for small files, while up to 425K is needed for
     large ones.  Files containing up to 16,300 lines can be compared.



     2   OPERATION

     To list the differences between two ASCII text files line by line:
             fc  file1  file2  options

     Changes to file1 to make file2 are listed.  Wild-card characters can be
     used to do multiple comparisons.  The options are:

             -a      list all lines (whether different or the same)
             -s      list only lines that are the same
             -w      ignore white space differences in lines when comparing
             -b      don't list redundant blank lines
             -f      list using an alternate format that's useful for editing
             -m      merge two C programs


             -c<n>   show context for changes - list up to <n> unchanged
                     lines as changed when that's clearer - default <n> is 1
             -d<n>   show differences between changed lines word by word -
                     <n> = 1 shows minor differences, 10 shows all - default
                     <n> is 5
             -t<n>   tab interval is <n> characters - default interval is 8
             -u      update default options, -u- clears old defaults first
             >file3  put difference listing in file file3

     A default option can be turned off with a minus sign, e.g. -m- turns off
     the -m option.  You can also make an option affect only screen output or
     file output - an "s" after the option letter indicates screen output,
     while "f" indicates file output.  E.g. -ds5 specifies that the -d5
     option is used for screen output, but doesn't affect output to a file.
     This feature is useful when updating default options (with the -u
     option), because you often want different options for the two output
     devices.

     The following examples illustrate the use of FC:

         Compare two files in the current directory and display the
         differences on the screen:

             fc  prog1.asc  prog2.asc

         Compare two files in different directories and drives, list all
         lines using the alternate listing format (ignoring white space
         differences when comparing), and put the difference listing in file
         prog2.dif:

             fc  d:\backup\prog1.asc  c:\tc\prog2.asc  -a  -f  -w  >prog2.dif

         Compare two files with the same names in different directories and
         drives, and display the differences using the alternate listing
         format:

             fc  -f  d:\backup\prog1.asc  c:\tc

         Compare all files with ".c" extensions and the same names in two
         different directories:

             fc  \backup\*.c  \tc\*.*

         Merge two "C" programs to make a single combined program:

             fc  dbupdat1.c  dbupdat2.c  -m  >dbupdat3.c

         Change the default options for future invocations of FC to -w -c -b
         for output to either output device, and -d5 for output to the
         screen:

             fc  -u-  -w  -c  -b  -ds5

         Turn off the -w default option (which was previously set) for output
         to a file, but leave it on for screen output:

             fc  -u  -wf-


     3   DETAILED OPERATION

     The arguments to FC (files and options) can be supplied in any order.
     The options work as follows:

         -a      All - FC normally lists only the lines that differ between
                 the two files.  With the -a option, matching lines are also
                 listed.

         -s      Same - With the -s option, only matching lines are listed.

         -w      White space - FC normally lists lines as different if any
                 character in the line (except trailing white space) is
                 different.  With this option, differences in embedded white
                 space (i.e. space and tab characters) are ignored.  This is
                 useful when you want to ignore differences in the layout of
                 programs or documents.  FC knows about "C" language syntax,
                 so that only white space that is ignored by a "C" compiler
                 is ignored by FC.

         -b      Blanks - FC normally lists all lines that have changed.
                 With this option, redundant blank lines (i.e. more than one
                 blank line in a row, or blank lines leading or trailing a
                 group of changes) aren't shown.

         -f      Format - This option directs FC to list changes using a
                 different format that doesn't indent, and shows the line
                 numbers of changes in both files.  This format is useful
                 when directing the listing to a file used to re-create
                 changes.

         -m      Merge format - FC merges two "C" programs into a single
                 program when this option is used.  The new file can be
                 compiled as the first program, the second program, or the
                 combination of the two.  When you #define the symbol
                 FC_FILE_1, lines present in the first file are included.
                 FC_FILE_2 does the same thing for the second file.  If you
                 specify both #define's, lines from both programs are
                 included.  This feature is particularly useful when
                 combining two separate sets of changes to a program.  You
                 merge the two changed programs, examine the combined
                 program, and remove the #ifdefs to complete the merge.  In
                 most cases the #ifdefs can be removed without incident.
                 Where there are conflicts between the two sets of changes,
                 you can resolve them as needed.  If you feel brave, you can
                 compile the merged program with both #define's specified and
                 see if it works.  The merge does not always produce a
                 compilable program - if the changes involve comments,
                 #ifdef's, or multiline #defines, the #ifdef's inserted can
                 conflict with them.

         -c<n>   Context - When this option is used, FC shows context
                 surrounding changes to make the listing more readable.  This
                 is done by listing unchanged lines as changed when they are
                 between changed lines.  Use this option when you want to
                 make the listing easier to understand, and don't care if a
                 few unchanged lines are listed as changed.  The value <n>
                 indicates how many unchanged lines can be listed as changed.
                 An <n> of 1 or 2 is usually sufficient.  The default value
                 of <n> is 1.


         -d<n>   Differences - Show differences between changed lines word by
                 word.  If the listing is shown on the screen, differences
                 are identified by reverse video.  If the listing is directed
                 to an output file, changes are enclosed in curly brackets
                 (i.e. "{}").  The value of <n> indicates which differences
                 are shown - this is useful because showing the differences
                 between totally different lines is confusing.  An <n> of 1
                 shows only minor differences, while 10 shows all.  The
                 default value of <n> is 5.

         -t<n>   Tab interval - This option sets the tab interval used to
                 expand tabs when comparing and listing lines.  The default
                 interval is 8.

         -u      Update - This feature updates the default options.  You can
                 use this option to make your favorite options the default,
                 so you don't have to enter them every time you use FC.  When
                 you use the -u option, the current options (i.e. the current
                 defaults plus options specified on the command line) become
                 the default.  The -u- option is like -u, except that the
                 current defaults are ignored - only the options shown on the
                 command line become the new defaults.  FC can't update the
                 options and compare files in the same run, so don't specify
                 file names when you use the -u or -u- option.  This feature
                 works by changing the program (i.e. fc.exe) file.  If you
                 want, you can make multiple FC's with different default
                 options by simply copying the fc.exe file with a new name
                 (e.g. fcmerge.exe) and using the -u option to set the
                 default values of the copy.  This feature only works with
                 MS-DOS version 3.0 or later.

         >file   FC normally displays the difference listing on the screen.
           or    This option directs the listing to the file you specify -
         >>file  just enter the file name after the ">".  If the file already
                 exists, it is overwritten.  The ">>" option can be used in
                 the same way to append the listing to the end of a file,
                 instead of overwriting it.


     The file names specify a drive and directory in the normal MS-DOS
     manner.  If no drive is specified, FC looks for files on the current
     drive.  If no directory is specified, FC looks in the current directory.
     The standard MS-DOS wild-card characters may be used to compare multiple
     files.  When FC finds wild-card characters in the first file name, it
     performs a compare for each matching file.  A wild-card character in the
     second name means use the name (or extension) of the first file.  If the
     second file is not found FC indicates it is missing, and continues with
     other files that match the first name.  If you specify a directory or
     drive (without a file name and extension) for either the first or second
     name, FC acts as though you specified a file and extension of "*.*".
     The following examples illustrate these principles:

         Compare all files with ".c" extensions and the same names in two
         different directories:

             fc  \backup\*.c  \tc

         Compare files fcupdate.c1 and fcupdate.c2:

             fc  fcupdate.c1  *.c2


         Compare all files in the current directory with ".c1" extensions
         with files that have the same names and ".c2" extensions in the same
         directory:

             fc  *.c1  *.c2

         Compare all files in current directory with files that have the same
         names on the diskette in drive b:

             fc  .  b:

         Compare all files with names starting with "a" and having a ".c"
         extension with files that have the same names in the directory
         "work" that is a subdirectory of the parent directory of the current
         directory:

             fc  \backup\a*.c  ..\work


     The files you compare must contain ASCII text.  Displayable characters
     with values above hex 7F will also be processed correctly.  All
     characters except values 00, 07, and 08 (null, backspace, and bell) are
     passed through to the difference listing.  Character value 09 (tab) is
     passed through with the -f and -m formats, but expanded to spaces (as
     specified with the -t option) with the normal format.  FC expands tabs
     as specified in the -t option and removes trailing white space on each
     line before comparing.  If two lines differ only in this regard, FC will
     report that they are the same.  Other control characters (e.g. vertical
     tabs, page breaks) are not changed before comparing.

     Lines can end with carriage return characters (hex value 0D), new line
     characters (hex value 0A), or both characters together.  FC ignores line
     ending characters when comparing, so identical lines with different
     ending characters are listed as unchanged.  Lines in the difference
     listing always end with a carriage return followed by a new line.

     FC only processes lines of up to 2,000 characters.  If FC encounters a
     longer line, it breaks it after the 2,000th character to make two
     separate lines.

     If you display the difference listing on the screen, you can control the
     scrolling.  When FC is scrolling, pressing any key makes it pause.  When
     it pauses, you can use the following keys:

         Enter   Show another screen full (24 lines)
         space   Show one more line
         s       Scroll continuously
         ESC     Exit the program

     You can also use the Ctrl-S and Ctrl-Q keys (the ASCII terminal
     convention) to regulate scrolling if you prefer.



     4   FC MESSAGES

         Error: argument -<x> is invalid
             FC couldn't recognize the argument you specified on the command
             line (argument <x>).  Check the list of arguments that FC
             accepts to determine what options you can use.  You can list the
             options FC recognizes by typing "fc ?".


         Error: the -<x> option value <v> is wrong
             FC couldn't recognize the value <v> specified with the <x>
             option on the command line.  Most options accept one or two
             decimal digits, e.g. -t8 to specify a tab increment of 8.  Check
             the list of options that FC accepts to determine what values you
             can use.  You can list the options and values FC recognizes by
             typing "fc ?".

         Error: more than two file names specified
         Error: fewer than two file names specified
             FC didn't find the names of two files to compare on the command
             line.  If you forgot to specify the minus sign ("-") in front of
             an option, FC interpreted it as a file name.  You must specify
             two file names.

         Error: both -<x> and -<y> options specified together
             FC found two incompatible options (<x> and <y>) specified on the
             command line.  You can only use one at a time.

         Error: <n> is too small a value for option -<x> - the lower limit
             is <m>
             FC found a value (<n>) specified for option <x> that is too
             small.  You must specify a value greater than or equal to <m>.

         Error: <n> is too large a value for option -<x> - the limit is <m>
             FC found a value (<n>) specified for option <x> that is too
             large.  You must specify a value less than or equal to <m>.

         Error: file <f> wasn't found
             FC couldn't find file <f>.  If you didn't specify a directory or
             drive, FC looked in the current directory and drive.  Make sure
             you specify the correct file name, with the directory and drive
             if needed, on the command line.

         Error: no files found at <f>
             FC couldn't find any files in directory or drive <f>.  Make sure
             you specify the correct drive and directory on the command line.

         Error: no files match <f>
             FC couldn't find any files that matched file name <f>, which
             contains wild-card characters.  Make sure you specify the
             correct file name on the command line.

         Error: more than 16,300 lines in file <f>
             File <f> contains more than 16,300 lines.  FC can only process
             files containing up to 16,300 lines.  Your only option is to
             break your files into smaller files.

         Error: not enough memory to process these files
             FC needs more memory to process these files than is available.
             FC will continue by comparing the remaining files if you
             specified multiple comparisons, otherwise it will terminate.
             The only way to correct this problem is to run on a machine with
             more memory, remove any memory-resident programs, or to split
             the file into smaller files.  This problem only occurs when
             comparing large files on machines with small memory
             configurations.


         Warning: Not enough memory to compute word differences in the
         following change
             FC needs more memory to list the word-by-word differences
             between a set of changed lines (as requested with the -d option)
             than is available.  FC will not list word-by-word differences
             for this set of lines, but will with others.  This problem only
             occurs when comparing large files on machines with small memory
             configurations.

         Error: output failed, disk probably full
             FC detected an error when writing a file.  This only occurs when
             the difference listing is directed to a file with the ">" or
             ">>" options.  The most likely cause of this error is a full
             disk.

         Error: file names can't be used with the "-u" option
             FC found file names specified on the command line with the -u or
             -u- option.  You can't update default options and compare files
             at the same time.

         Error: couldn't update default options
             FC couldn't write to the program (i.e. fc.exe) file to update
             the default options.  This happens when the fc.exe file is on a
             write-protected floppy disk, the file has been given the read-
             only attribute, you're using an MS-DOS version less than 3.0, or
             the file is on a network server and you don't have write
             privileges for the file.



     5   LICENSING, WARRANTY, and REGISTRATION

     FC is distributed as user-supported software.  I encourage you to try
     the program and share it with friends as long as:

         The FC program and this documentation file are not modified and are
         distributed together.

         FC is not provided as a part of any other product.

         No fees, beyond a reasonable fee for media, duplication, or
         downloading costs, are charged.

         FC is not used for commercial, government, or business purposes
         without registration.  Each registration is for a single person or a
         single computer.

     If you find FC useful and decide to use it regularly, you are required
     to register.  All registration payments will be donated to Oxfam
     America, an international development and disaster relief agency.  It's
     a worthy charity that I've been supporting for many years.  For more
     information on Oxfam see section 6.

     When you register you get the satisfaction of saving lives in Africa,
     Asia, and South America, and encourage me to produce more software at
     reasonable prices.  You also get the following benefits:

         I'll notify you of new FC versions when they become available.


         I'll send an updated version of FC to you at no additional cost.
         You can request this at any time.  I'll do this once per registered
         user.

         I'll answer any questions you have on FC and its use.  You can
         contact me at the address shown below - I'll respond in writing or
         by phone.

         If any important bugs are found I will notify you.

         I'll make an attempt (but can't guarantee) to fix any problems you
         find.

     Registration is $25.  Please make your check payable to Oxfam America -
     I'll send your checks to Oxfam and record your registration information.
     I'll also accept original canceled checks or receipts from Oxfam that
     list you as the donor.  Please send payments, registration information,
     and any other correspondence to:

                  Mike Albert
                  Suite 42
                  P. O. Box 2100
                  Chelmsford, MA   01824

     Anyone can order the latest version of FC directly from me for a fee of
     $5.00.  Just send the order (make sure it contains your mailing address)
     with your check to the above address.  You'll receive a 5 1/4 inch 360Kb
     floppy disk containing the executable and documentation files.  If you
     need other formats (5 1/4 inch 1.2Mb or 3 1/2 inch 1.44Mb) I can provide
     them.  I'll also include other shareware products I produce.  If you
     live outside North America, please send extra money for the increased
     postage.

     I welcome all comments and suggestions concerning FC.  I'd like to know
     how you are using FC, where you obtained it, and what problems, bugs, or
     weaknesses you find.  If you tell me about enhancements or changes
     you're interested in, I'll make an effort to provide them.

     This program is provided "as is" without warranty of any kind, either
     express or implied, but not limited to the implied warranties of
     merchantability or fitness for a particular purpose.  The entire risk as
     to the results and performance of the program is assumed by the user.
     Should the program prove defective, the user assumes the entire cost of
     all necessary servicing, repair, or correction.



     6   OXFAM AMERICA

     As stated in Oxfam literature,

         "Oxfam America is an international agency that funds self-help
         development projects and disaster relief in poor countries in
         Africa, Asia, and Latin America, and also prepares and distributes
         educational materials for people in the United States on the issues
         of development and hunger.  The name "Oxfam" comes from the Oxford
         Committee for Famine Relief, founded in England in 1942.  Oxfam
         America, based in Boston, was formed in 1970, and is one of seven
         autonomous Oxfams around the world (Great Britain, Australia,
         Belgium, Canada, Quebec, Hong Kong and the United States).  Oxfam is
         a nonsectarian, nonprofit agency that neither seeks or accepts U.S.


         government funds.  All contributions are tax-deductible to the
         extent permitted by law."

     For more information, you can phone Oxfam at 617-482-1211, or write to
     them at:

                  Oxfam America
                  115 Broadway
                  Boston, MA  02116



     7   FC REVISION HISTORY

         FC version 2.2 - 6/5/90

             Increased the speed - some comparisons take only 60% as long as
             previous versions.

             Fixed a problem displaying per word changes in very long lines
             (around 2000 characters).

             Fixed a problem that occurred when '.' was used to indicate a
             directory.

             Fixed error in handling Ctrl-C when display scrolling is paused.


         FC version 2.1 - 4/29/90

             Altered the difference computation for word changes within lines
             to pick more intuitive changes.  In some cases there's more than
             one set of minimal changes.  Version 2.0 could pick differences
             that were minimal, but difficult to understand.

             Increased the speed.

             Fixed a problem in which characters with values above 127 were
             sometimes treated as spaces when comparing.

             Fixed a minor formatting problem with the difference listing
             produced with the -m option.

             Fixed a minor problem that occurred when another program invoked
             FC and input redirection was used.


         FC version 2.0 - 3/21/90

             Added -d option to show word-by-word differences between changed
             lines.

             Added -m option to merge two "C" source programs.

             Added comparison of multiple files in a single run - this is
             invoked by specifying wild-card characters in file names.

             Added -w option to ignore white space differences when
             comparing.


             Added -b option to not show redundant blank lines in difference
             listing.

             Added -c option to show changes in context.

             Added -u option to let the user set default options.

             Added -f option to produce a new format for the difference
             listing.

             Increased the speed - some comparisons take only half the time
             of the previous version.

             Added separate sets of options that are selected based on the
             output device, i.e. the screen or a redirected output file.

             Altered the difference computation to pick more intuitive
             changes.  In some cases there's more than one set of minimal
             changes.  Previous FC versions could pick differences that were
             minimal, but difficult to understand.

             Added support of Ctrl-S and Ctrl-Q to suspend and resume display
             scrolling.

             Added support of files that use carriage return characters
             (instead of new line characters) to end lines.


         FC version 1.3 - 7/10/89

             Corrected problem in which matching lines occasionally were
             listed as different.

             Added -s option to list only lines that match.


         FC version 1.2 - 3/20/89

             Increased speed.

             Increased number of lines that can be compared - from 8,000 to
             16,300.

             Increased maximum line length from 1000 to 2000 characters.

             Added display of characters with values above 7F.  This is
             particularly useful for non-English text.

             Fixed bug that occurred when processing a very large (around
             8,000 line) file - FC would incorrectly report that there was
             insufficient memory to process the file.

             Removed testing for Ctrl-Z (MSDOS end of file marker) in the
             middle of a file - Ctrl-Z is now compared and displayed just
             like other characters.


         FC version 1.1 - 2/16/89

             Added documentation (that you're reading now).


             Added interactive control of screen display.

             Changed informational and usage messages displayed by program.

             Corrected problem that occurred when long lines were displayed.

             Added accept of Ctrl-C during file read.


         FC version 1.0 - 1/9/89

             Initial release of FC program.

```
{% endraw %}

## FCDOC.DOC

{% raw %}
```



                                  FCDOC Ver. 2.2
                                    Mike Albert
                                Copyright (c) 1990



     1   INTRODUCTION

     FCDOC compares two text English files and lists the differences between
     them sentence by sentence.  FCDOC works with any ASCII text file
     containing English text.  FCDOC provides the following benefits:

         o   FCDOC ignores format differences, so changes in margins,
             indentation, and white space are not shown.  This allows you to
             look at content changes without being distracted by unimportant
             details.

         o   FCDOC can show word by word differences between sentences that
             have changed.

         o   FCDOC lets you do multiple comparisons in one run.

         o   FCDOC never gets confused or "unsynchronized" (as some
             comparison programs can).

         o   FCDOC always finds the smallest set of differences between
             files, and never misses matching sentences.

         o   FCDOC lets you list changes in ways that make sense to you by
             providing multiple display options.  You can also customize
             FCDOC to use your favorite options automatically.

     If you're familiar with earlier versions of FCDOC, look at section 7 to
     learn about the enhancements.

     FCDOC can be used on any IBM-compatible computer.  Any display adapter
     that provides 25 lines of 80 characters will work correctly.  FCDOC runs
     under MS-DOS versions 2.0 and later, but 3.0 or later is required to
     customize the default options.  The amount of memory required is
     dependent on file size.  100K is enough for small files, while up to
     425K is needed for large ones.  Files containing up to 16,300 sentences
     can be compared.



     2   OPERATION

     To list the differences between two ASCII English text files sentence by
     sentence:
             fcdoc  file1  file2  options

     Changes to file1 to make file2 are listed.  Wild-card characters can be
     used to do multiple comparisons.  The options are:

             -a      list all sentences (whether different or the same)
             -s      list only sentences that are the same
             -o      list one sentence per line
             -e      empty lines in the input file don't indicate sentence
                     ends


             -c<n>   show context for changes - list up to <n> unchanged
                     sentences as changed when that's clearer - default <n>
                     is 1
             -d<n>   show differences between changed sentences word by
                     word - <n> = 1 shows minor differences, 10 shows all -
                     default <n> is 5
             -u      update default options, -u- clears old defaults first
             >file3  put difference listing in file file3

     A default option can be turned off with a minus sign, e.g. -m- turns off
     the -m option.  You can also make an option affect only screen output or
     file output - an "s" after the option letter indicates screen output,
     while "f" indicates file output.  E.g. -ds5 specifies that the -d5
     option is used for screen output, but doesn't affect output to a file.
     This feature is useful when updating default options (with the -u
     option), because you often want different options for the two output
     devices.

     The following examples illustrate the use of FCDOC:

         Compare two files in the current directory and display the
         differences on the screen:

             fcdoc  wp1.asc  wp2.asc

         Compare two files in different directories and drives, list all
         sentences on separate lines, and put the difference listing in file
         wp2.dif:

             fcdoc  d:\backup\wp1.asc  c:\wp\wp2.asc  -a -o >wp2.dif

         Compare two files with the same names in different directories and
         drives:

             fcdoc  d:\backup\wp1.asc  c:\wp

         Compare all files with ".c" extensions and the same names in two
         different directories:

             fcdoc  \backup\*.c  \wp\*.*

         Change the default options for future invocations of FCDOC to -c for
         output to either output device, and -d5 for output to the screen:

             fcdoc  -u-  -c  -ds5

         Turn off the -o default option (which was previously set) for output
         to a file, but leave it on for screen output:

             fcdoc  -u  -of-



     3   DETAILED OPERATION

     The arguments to FCDOC (files and options) can be supplied in any order.
     The options work as follows:

         -a      All - FCDOC normally lists only the sentences that differ
                 between the two files.  With the -a option, matching
                 sentences are also listed.


         -s      Same - With the -s option, only matching sentences are
                 listed.

         -o      FCDOC normally lists the sentences as normal English text.
                 With the -o option, sentences are listed one per line.

         -e      FCDOC normally interprets an empty line in the input file as
                 a sentence end.  The -e option indicates that sentences
                 continue across empty lines.  This option is useful with
                 double-spaced documents.

         -c<n>   Context - When this option is used, FCDOC shows context
                 surrounding changes to make the listing more readable.  This
                 is done by listing unchanged sentences as changed when they
                 are between changed sentences.  Use this option when you
                 want to make the listing easier to understand, and don't
                 care if a few unchanged sentences are listed as changed.
                 The value <n> indicates how many unchanged sentences can be
                 listed as changed.  An <n> of 1 or 2 is usually sufficient.
                 The default value of <n> is 1.

         -d<n>   Differences - Show differences between changed sentences
                 word by word.  If the listing is shown on the screen,
                 differences are identified by reverse video.  If the listing
                 is directed to an output file, changes are enclosed in curly
                 brackets (i.e. "{}").  The value of <n> indicates which
                 differences are shown - this is useful because showing the
                 differences between totally different sentences is
                 confusing.  An <n> of 1 shows only minor differences, while
                 10 shows all.  The default value of <n> is 5.

         -u      Update - This feature updates the default options.  You can
                 use this option to make your favorite options the default,
                 so you don't have to enter them every time you use FCDOC.
                 When you use the -u option, the current options (i.e. the
                 current defaults plus options specified on the command line)
                 become the default.  The -u- option is like -u, except that
                 the current defaults are ignored - only the options shown on
                 the command line become the new defaults.  FCDOC can't
                 update the options and compare files in the same run, so
                 don't specify file names when you use the -u or -u- option.
                 This feature works by changing the program (i.e. fcdoc.exe)
                 file.  If you want, you can make multiple FCDOC's with
                 different default options by simply copying the fcdoc.exe
                 file with a new name (e.g. fcdocnew.exe) and using the -u
                 option to set the default values of the copy.  This feature
                 only works with MS-DOS version 3.0 or later.

         >file   FCDOC normally displays the difference listing on the
           or    screen.  This option directs the listing to the file you
         >>file  specify -just enter the file name after the ">".  If the
                 file already exists, it is overwritten.  The ">>" option can
                 be used in the same way to append the listing to the end of
                 a file, instead of overwriting it.


     The file names specify a drive and directory in the normal MS-DOS
     manner.  If no drive is specified, FCDOC looks for files on the current
     drive.  If no directory is specified, FCDOC looks in the current
     directory.  The standard MS-DOS wild-card characters may be used to
     compare multiple files.  When FCDOC finds wild-card characters in the


     first file name, it performs a compare for each matching file.  A wild-
     card character in the second name means use the name (or extension) of
     the first file.  If the second file is not found FCDOC indicates it is
     missing, and continues with other files that match the first name.  If
     you specify a directory or drive (without a file name and extension) for
     either the first or second name, FCDOC acts as though you specified a
     file and extension of "*.*".  The following examples illustrate these
     principles:

         Compare all files with ".wp" extensions and the same names in two
         different directories:

             fcdoc  \backup\*.wp  \wp

         Compare files fcupdate.wp1 and fcupdate.wp2:

             fcdoc  fcupdate.wp1  *.wp2

         Compare all files in the current directory with ".wp1" extensions
         with files that have the same names and ".wp2" extensions in the
         same directory:

             fcdoc  *.wp1  *.wp2

         Compare all files in current directory with files that have the same
         names on the diskette in drive b:

             fcdoc  .  b:

         Compare all files with names starting with "a" and having a ".wp"
         extension with files that have the same names in the directory
         "work" that is a subdirectory of the parent directory of the current
         directory:

             fcdoc  \backup\a*.wp  ..\work


     The files must contain ASCII English text.  Displayable characters with
     values above 7F hex (e.g. line drawing characters) will also be
     processed correctly.  FCDOC will process non-English languages
     incorrectly, because it cannot recognize the sentence ends reliably.

     FCDOC discards non-printable characters and extra blanks before
     comparing sentences.  If two sentences differ only in this regard, FCDOC
     will report that they are the same.

     If you want to compare WP documents, you must use the export, convert,
     or print-to-file feature of your word processor to make ASCII files.
     Your WP documentation should describe the process.

     FCDOC only processes sentences of up to 2,000 characters.  If FCDOC
     encounters a longer sentence, it breaks it after the 2,000th character
     to make two separate sentences.


     If you display the difference listing on the screen, you can control the
     scrolling.  When FCDOC is scrolling, pressing any key makes it pause.
     When it pauses, you can use the following keys:

         Enter   Show another screen full (24 lines)
         space   Show one more line
         s       Scroll continuously
         ESC     Exit the program

     You can also use the Ctrl-S and Ctrl-Q keys (the ASCII terminal
     convention) to regulate scrolling if you prefer.



     4   FCDOC MESSAGES

         Error: argument -<x> is invalid
             FCDOC couldn't recognize the argument you specified on the
             command line (argument <x>).  Check the list of arguments that
             FCDOC accepts to determine what options you can use.  You can
             list the options FCDOC recognizes by typing "fcdoc ?".

         Error: the -<x> option value <v> is wrong
             FCDOC couldn't recognize the value <v> specified with the <x>
             option on the command line.  Most options accept one or two
             decimal digits, e.g. -d10 to specify showing all word
             differences.  Check the list of options that FCDOC accepts to
             determine what values you can use.  You can list the options and
             values FCDOC recognizes by typing "fcdoc ?".

         Error: more than two file names specified
         Error: fewer than two file names specified
             FCDOC didn't find the names of two files to compare on the
             command line.  If you forgot to specify the minus sign ("-") in
             front of an option, FCDOC interpreted it as a file name.  You
             must specify two file names.

         Error: both -<x> and -<y> options specified together
             FCDOC found two incompatible options (<x> and <y>) specified on
             the command line.  You can only use one at a time.

         Error: <n> is too small a value for option -<x> - the lower limit
             is <m>
             FCDOC found a value (<n>) specified for option <x> that is too
             small.  You must specify a value greater than or equal to <m>.

         Error: <n> is too large a value for option -<x> - the limit is <m>
             FCDOC found a value (<n>) specified for option <x> that is too
             large.  You must specify a value less than or equal to <m>.

         Error: file <f> wasn't found
             FCDOC couldn't find file <f>.  If you didn't specify a directory
             or drive, FCDOC looked in the current directory and drive.  Make
             sure you specify the correct file name, with the directory and
             drive if needed, on the command line.

         Error: no files found at <f>
             FCDOC couldn't find any files in directory or drive <f>.  Make
             sure you specify the correct drive and directory on the command
             line.


         Error: no files match <f>
             FCDOC couldn't find any files that matched file name <f>, which
             contains wild-card characters.  Make sure you specify the
             correct file name on the command line.

         Error: more than 16,300 sentences in file <f>
             File <f> contains more than 16,300 sentences.  FCDOC can only
             process files containing up to 16,300 sentences.  Your only
             option is to break your files into smaller files.

         Error: not enough memory to process these files
             FCDOC needs more memory to process these files than is
             available.  FCDOC will continue by comparing the remaining files
             if you specified multiple comparisons, otherwise it will
             terminate.  The only way to correct this problem is to run on a
             machine with more memory, remove any memory-resident programs,
             or to split the file into smaller files.  This problem only
             occurs when comparing large files on machines with small memory
             configurations.

         Warning: Not enough memory to show sentence differences
             FCDOC needs more memory to list the word-by-word differences
             between a set of changed sentences (as requested with the -d
             option) than is available.  FCDOC will not list word-by-word
             differences for this set of sentences, but will with others.
             This problem only occurs when comparing large files on machines
             with small memory configurations.

         Error: output failed, disk probably full
             FCDOC detected an error when writing a file.  This only occurs
             when the difference listing is directed to a file with the ">"
             or ">>" options.  The most likely cause of this error is a full
             disk.

         Error: file names can't be used with the "-u" option
             FCDOC found file names specified on the command line with the -u
             or -u- option.  You can't update default options and compare
             files at the same time.

         Error: couldn't update default options
             FCDOC couldn't write to the program (i.e. fcdoc.exe) file to
             update the default options.  This happens when the fcdoc.exe
             file is on a write-protected floppy disk, the file has been
             given the read-only attribute, you're using an MS-DOS version
             less than 3.0, or the file is on a network server and you don't
             have write privileges for the file.



     5   LICENSING, WARRANTY, and REGISTRATION

     FCDOC is distributed as user-supported software.  I encourage you to try
     the program and share it with friends as long as:

         The FCDOC program and this documentation file are not modified and
         are distributed together.

         FCDOC is not provided as a part of any other product.

         No fees, beyond a reasonable fee for media, duplication, or
         downloading costs, are charged.


         FCDOC is not used for commercial, government, or business purposes
         without registration.  Each registration is for a single person or a
         single computer.

     If you find FCDOC useful and decide to use it regularly, you are
     required to register.  All registration payments will be donated to
     Oxfam America, an international development and disaster relief agency.
     It's a worthy charity that I've been supporting for many years.  For
     more information on Oxfam see section 6.

     When you register you get the satisfaction of saving lives in Africa,
     Asia, and South America, and encourage me to produce more software at
     reasonable prices.  You also get the following benefits:

         I'll notify you of new FCDOC versions when they become available.

         I'll send an updated version of FCDOC to you at no additional cost.
         You can request this at any time.  I'll do this once per registered
         user.

         I'll answer any questions you have on FCDOC and its use.  You can
         contact me at the address shown below - I'll respond in writing or
         by phone.

         If any important bugs are found I will notify you.

         I'll make an attempt (but can't guarantee) to fix any problems you
         find.

     Registration is $25.  Please make your check payable to Oxfam America -
     I'll send your checks to Oxfam and record your registration information.
     I'll also accept original canceled checks or receipts from Oxfam that
     list you as the donor.  Please send payments, registration information,
     and any other correspondence to:

                  Mike Albert
                  Suite 42
                  P. O. Box 2100
                  Chelmsford, MA   01824

     Anyone can order the latest version of FCDOC directly from me for a fee
     of $5.00.  Just send the order (make sure it contains your mailing
     address) with your check to the above address.  You'll receive a 5 1/4
     inch 360Kb floppy disk containing the executable and documentation
     files.  If you need other formats (5 1/4 inch 1.2Mb or 3 1/2 inch
     1.44Mb) I can provide them.  I'll also include other shareware products
     I produce.  If you live outside North America, please send extra money
     for the increased postage.

     I welcome all comments and suggestions concerning FCDOC.  I'd like to
     know how you are using FCDOC, where you obtained it, and what problems,
     bugs, or weaknesses you find.  If you tell me about enhancements or
     changes you're interested in, I'll make an effort to provide them.

     This program is provided "as is" without warranty of any kind, either
     express or implied, but not limited to the implied warranties of
     merchantability or fitness for a particular purpose.  The entire risk as
     to the results and performance of the program is assumed by the user.
     Should the program prove defective, the user assumes the entire cost of
     all necessary servicing, repair, or correction.


     6   OXFAM AMERICA

     As stated in Oxfam literature,

         "Oxfam America is an international agency that funds self-help
         development projects and disaster relief in poor countries in
         Africa, Asia, and Latin America, and also prepares and distributes
         educational materials for people in the United States on the issues
         of development and hunger.  The name "Oxfam" comes from the Oxford
         Committee for Famine Relief, founded in England in 1942.  Oxfam
         America, based in Boston, was formed in 1970, and is one of seven
         autonomous Oxfams around the world (Great Britain, Australia,
         Belgium, Canada, Quebec, Hong Kong and the United States).  Oxfam is
         a nonsectarian, nonprofit agency that neither seeks or accepts U.S.
         government funds.  All contributions are tax-deductible to the
         extent permitted by law."

     For more information, you can phone Oxfam at 617-482-1211, or write to
     them at:

                  Oxfam America
                  115 Broadway
                  Boston, MA  02116



     7   FCDOC REVISION HISTORY

         FCDOC version 2.2 - 6/5/90

             Added -c option to show changes in context.

             Added -u option to let the user set default options.

             Added -d option to show word-by-word differences between changed
             lines.

             Added comparison of multiple files in a single run - this is
             invoked by specifying wild-card characters in file names.

             Increased the speed - some comparisons take only half the time
             of the previous version.

             Added separate sets of options that are selected based on the
             output device, i.e. the screen or a redirected output file.

             Added support of Ctrl-S and Ctrl-Q to suspend and resume display
             scrolling.

             Fixed a minor problem that occurred when another program invoked
             FCDOC and input redirection was used.

             Fixed error in handling Ctrl-C when display scrolling is paused.


         FCDOC version 1.3 - 7/10/89

             Corrected problem in which matching sentences occasionally were
             listed as different.

             Added -s option to list only sentences that match.


         FCDOC version 1.2 - 3/20/89

             Increased speed.

             Increased number of sentences that can be compared - from 8,000
             to 16,300.

             Increased maximum sentence length from 1000 to 2000 characters.

             Added display of characters with values above 7F.  This is
             particularly useful for non-English text.

             Fixed bug that occurred intermittently with long sentences (i.e.
             around 1,000 characters) - FCDOC would never complete.

             Fixed bug that occurred when processing a very large (around
             8,000 sentence) file - FCDOC would incorrectly report that there
             was insufficient memory to process the file.


         FCDOC version 1.1 - 2/16/89

             Added documentation (that you're reading now).

             Improved readability of difference listing for multi-paragraph
             deletions or additions.

             Improved recognition of sentence ends.

             Added interactive control of screen display.

             Changed informational and usage messages displayed by program.

             Added display of international (above 7F hex) ASCII characters.

             Added accept of Ctrl-C during file read.


         FCDOC version 1.0 - 1/9/89

             Initial release of FCDOC program.

```
{% endraw %}

## FILE1584.TXT

{% raw %}
```
Disk No: 1584                                                           
Disk Title: FC and FCDOC                                                
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: FCDOC                                                    
Author Version: 2.2                                                     
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
FCDOC is a file comparison utility that compares English                
documents and lists the differences between them, sentence by           
sentence.  The program lists the changes applied to the first           
file to make the second file.  The output listing can be put in a       
third output file, or displayed on the screen.  Output to the           
screen can be controlled interactively, e.g. show next screen,          
show next line, scroll continuously, etc.                               
                                                                        
FCDOC works with any file that contains up to 16,300 sentences of       
ASCII English text.  FCDOC ignores non-printable characters and         
white space when comparing sentences, so only differences in the        
content of the document are shown.                                      
                                                                        
FCDOC always find a minimal list of differences (smallest number        
of lines or sentences deleted or added), and never misses               
matching sentences.                                                     
                                                                        
Program Title: FC                                                       
Author Version: 2.2                                                     
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
FC compares ASCII text files and lists the differences between          
them line by line.  FC provides the following benefits:                 
                                                                        
~ FC can show word by word differences between lines that               
have changed.                                                           
                                                                        
~ FC helps "C" programmers merge program changes.  FC can               
compare two "C" programs containing separate sets of                    
changes, and combine them automatically to make a                       
single program.                                                         
                                                                        
~ FC lets you do multiple comparisons in one run.                       
Wildcards can be used to specify groups of files to compare.            
                                                                        
~ FC can ignore white space changes.  This is useful when               
you want to ignore format changes in "C" programs or other text.        
                                                                        
~ FC never gets confused or "unsynchronized" (as some                   
comparison programs can).                                               
                                                                        
~ FC always finds the smallest set of differences between               
files, and never misses matching lines.                                 
                                                                        
~ FC lets you list changes in ways that make sense to you               
by providing multiple display options.  You can also                    
customize FC to use your favorite options automatically.                
                                                                        
~ The difference listing can be put in a third output                   
file, or displayed on the screen.  Output to the screen                 
can be controlled interactively, e.g. show next screen,                 
show next line, scroll continuously, etc.                               
                                                                        
FC works with any ASCII text file that contains up to 16,300            
lines.  Non-ASCII characters (e.g. line drawing characters) are         
handled correctly too.                                                  
                                                                        
                                                                        
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
║                 <<<<  Disk #1584  FC & FC DOC >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start FC, type:  FC (press enter)                                    ║
║                                                                         ║
║ To print documentation for FC, type: COPY FC.DOC PRN (press enter)      ║
║                                                                         ║
║ To start FCDOC, type:  FCDOC (press enter)                              ║
║                                                                         ║
║ To print documentation, for FCDOC type: COPY FCDOC.DOC PRN (press enter)║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1584

     Volume in drive A has no label
     Directory of A:\

    LETTER            2459   6-12-90   8:27p
    FC       DOC     28805   6-05-90
    FC       EXE     45350   6-05-90
    FCDOC    DOC     24316   6-05-90
    FCDOC    EXE     46512   6-05-90
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       883   7-09-90   3:20a
    FILE1584 TXT      5403   7-10-90   2:20p
            8 file(s)     153766 bytes
                            4608 bytes free
