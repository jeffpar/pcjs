---
layout: page
title: "PC-SIG Diskette Library (Disk #1028)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1028/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1028"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "AVSCRIPTER"

    If you write scripts that require separate audio and video columns,
    AVScripter is for you.
    
    Unlike programs that graphically create two columns on your computer
    screen, AVScripter works with full-screen ASCII text files created with
    your word processor.  Working with the whole screen, you see more text
    on the screen at one time, you don't have to continually jump back and
    forth from one column to the other, and you don't have to worry about
    keeping the appropriate audio and video lines opposite each other.
    AVScripter does it all for you, automatically.
    
    Features include:
    
    ~ Sends two-column output--single-spaced, double-spaced, or
    single-spaced video/double-spaced audio--to your printer, your screen,
    or a disk file, automatically syncing audio and video lines
    
    ~ Allows variable-width audio and video columns
    
    ~ Automatically numbers and renumbers your scenes and pages
    
    ~ Looks for the best place to start each new page, then adds the
    appropriate "CONTINUED"s where necessary
    
    ~ Automatically centers your title lines
    
    ~ Prints a header line at the top of each page
    
    ~ Permits you to switch between full-width lines and two-column
    format within your script
    
    ~ Allows underlining anywhere, even in headers and title lines
    
    ~ Sends printer commands to your printer
    
    ~ Prints selected pages and multiple copies
    
    ~ Chains files for processing
    
    ~ Generates prompter/narrator scripts from the audio column.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AVSCRIPT.DOC

{% raw %}
```
                       +++++++++++++++++++++++++++++++++++++++
                       +                                     +
                       +           AVScripter (R)            +
                       +            Version 3.62             +
                       +   The Two-Column Script Formatter   +
                       +                                     +
                       +             MINI-MANUAL             +
                       +                                     +
                       +  (c) Copyright 1990 Tom Schroeppel  +
                       +         4705 Bay View Avenue        +
                       +         Tampa, Florida 33611        +
                       +                                     +
                       +++++++++++++++++++++++++++++++++++++++



              +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
              +  Before using AVScripter, make a working copy of the  + 
              +  master disk and read ALL the instructions, please.   +
              +++++++++++++++++++++++++++++++++++++++++++++++++++++++++    







       _______________________________________________________________________
       |                                                                     | 
       | A QUICK INTRODUCTION--HOW AVSCRIPTER WORKS:                         |
       |                                                                     |
       |                                                                     |
       | 1.  USING YOUR OWN WORD PROCESSOR AND AVSCRIPTER'S SIMPLE COMMANDS, |
       |     WRITE YOUR SCRIPT LIKE THIS:                                    |
       |                                                                     |
       | .v# This is a video entry.  The # sign tells AVScripter that you    |
       | want a scene number for this block of audio and video lines.        |
       | .a This is an audio entry.  To start a new audio-video block, you   |
       | would skip a line after this entry.                                 |
       |                                                                     |
       |                                                                     |
       | 2.  SAVE YOUR SCRIPT AS AN ASCII OR DOS TEXT FILE.                  |
       |                                                                     |
       |                                                                     |
       | 3.  RUN THE ASCII FILE THROUGH AVSCRIPTER AND GET THIS:             |
       |                                                                     |
       |                -VIDEO-                            -AUDIO-           |
       |                                                                     |
       | 1    This is a video entry.  The #     This is an audio entry.  To  |
       |      sign tells AVScripter that        start a new audio-video block|
       |      you want a scene number for       you would skip a line after  |
       |      this block of audio and video     this entry.                  |
       |      lines.                                                         |
       |_____________________________________________________________________|












       AVScripter 3.62 Mini-manual                                           1

                               +++++++++++++++++++++++
                               +  TABLE OF CONTENTS  +
                               +++++++++++++++++++++++

               SHAREWARE, PERMISSION TO COPY, DISCLAIMER.............2

               OVERVIEW..............................................3

               AVSCRIPTER FILES......................................4

               REQUIREMENTS..........................................4

                   ASCII TEXT FILE (WordPerfect, MicroSoft Word).....4

                   WORDSTAR 3.3 AND AVSCRIPTER.......................5

                   DISK SPACE........................................6

               PREPARING A TEXT FILE.................................7

                   CREATING AUDIO AND VIDEO COLUMNS..................7

                   CREATING AUDIO-VIDEO BLOCKS.......................8

                   NUMBERING SCENES..................................9

                   UNDERLINING.......................................9

                   CREATING STAND-ALONE LINES AND 
                      BLANK LINES WITHIN A COLUMN...................10

                   INDENTING/LONG WORDS.............................11

                   CREATING HEADERS AND TITLE LINES.................12

               PROCESSING A TEXT FILE...............................13

                   TWO-COLUMN OUTPUT................................14

                   PROMPTER OUTPUT..................................15

                       PRINTING TO DISK.............................16

                   AVSCRIPTER PROGRESS BOX..........................17
                  
                   IF SOMETHING DOESN'T LOOK RIGHT..................17

                   PRINTING EXISTING FILES..........................18

               IF THE PROGRAM CRASHES...............................19














       AVScripter 3.62 Mini-manual                                           2

                            +++++++++++++++++++++++++++++
                            +  AVSCRIPTER IS SHAREWARE  +
                            +++++++++++++++++++++++++++++
                 
            Shareware, or shared software, may be copied and distributed 
       freely, with the understanding that, if a person likes and uses a 
       program, he or she will pay the program's author the suggested user's 
       fee.

            Distributing a program as shareware reduces the program 
       developer's advertising costs, allows potential users to try programs 
       before they buy, and makes it possible to sell quality software at 
       greatly reduced prices.

            If you like AVScripter, you can register your use by sending
       $30.00* per user/terminal to 

                                   Tom Schroeppel
                                4705 Bay View Avenue
                                Tampa, Florida 33611

                (Florida residents, please add $1.80 state sales tax.)

            When you register, I'll send you the latest version on disk, com-
       plete documentation explaining all advanced features, a handy command
       card, and free updates for six months.


                              ++++++++++++++++++++++++
                              +  PERMISSION TO COPY  +
                              ++++++++++++++++++++++++

            Anyone can copy and distribute this program, under the following 
       conditions:

            1.  AVScripter may not be sold or distributed in any way for 
       monetary or other consideration; however, a reasonable fee may be 
       charged for materials and handling.

            2.  The AVScripter program files and documentation files may not 
       be modified in any way and must be distributed together.

            3.  Distributors must inform recipients that AVScripter is 
       shareware and encourage them to send $30 to the author if they use the 
       program.


                                  ++++++++++++++++
                                  +  DISCLAIMER  +
                                  ++++++++++++++++

            In no event will the author be liable to any user of this program 
       for any damages, including any lost profits, lost savings, or other 
       incidental or consequential damages arising out of the use of or 
       inability to use this program, or for any claim by any other party.









       AVScripter 3.62                                                       3
                              +++++++++++++++++++++++++  
                              +  AVSCRIPTER OVERVIEW  +
                              +++++++++++++++++++++++++

            AVScripter works with full-screen ASCII text files created with
    your word processor.  Working with the whole screen, you see more text
    on the screen at one time, you don't have to continually jump back and
    forth from one column to the other, and you don't have to worry about
    keeping the appropriate audio and video lines opposite each other. This
    is what AVScripter does with your full-screen ASCII text file: 
     
            * It sends two-column output to your printer, your screen, 
       or a disk file, automatically syncing audio and video lines.

            * It automatically numbers and renumbers your scenes and pages.

            * It looks for the best place to start each new page, then adds 
       the appropriate "CONTINUED"s where necessary.  
         
            * It automatically centers your title lines. 

            * It prints a header line at the top of each page.

            * It allows underlining anywhere, even in headers and title lines.
               
            * It prints selected pages and multiple copies.
               
            * It generates prompter/narrator scripts from the audio column.


       ADVANCED FEATURES AVAILABLE TO REGISTERED USERS:

           * Start AVScripter from the main menu, bypassing the monochrome 
       test screen and the shareware screen.

           * Print your script with double-spacing.

           * Print your script with the video column single-spaced and the
       audio column double-spaced.

           * Print variable-width columns: narrow video/wide audio, wide
       video/narrow audio, or any setting in between.

           * Switch to margin-to-margin wide lines in the middle of a script.

           * Change page length and lines per page.

           * Change starting page number or starting scene number.

           * Insert non-printing comment lines--notes to yourself--inside your
       script.

           * Send commands to your printer each time you output a script.

           * Chain files for processing.










       AVScripter 3.62 Mini-manual                                           4

                               ++++++++++++++++++++++
                               +  AVSCRIPTER FILES  +
                               ++++++++++++++++++++++
       
       AVSREAD.ME      Instructions for printing this mini-manual.
       AVSCRIPT.EXE    The program itself.  
       AVSCRIPT.DOC    This mini-manual.
       AVSDEMO.ASC     A sample source file you can print out with AVScripter.
       WS2ASCII.EXE    A public domain program that converts WordStar 3.3 
                       Document files to ASCII text files.


                            +++++++++++++++++++++++++++++ 

                            +  AVSCRIPTER REQUIREMENTS  +
                            +++++++++++++++++++++++++++++

       +++++++++++++++++++++  
       +  ASCII TEXT FILE  +
       +++++++++++++++++++++
 
            AVScripter works on any pure unadorned ASCII text file--that is,
       a file in which each line ends with a hard carriage return.  AVScripter 
       outputs the same kind of file.

            Many word processors produce ASCII files as their normal output.   
       Most others can create ASCII files upon request.  
  
            WordPerfect, for example, calls ASCII files "DOS Text Files" and   
       creates them with the CONTROL-F5 TEXT IN/OUT command.  Save your file 
       this way, then when you exit and WordPerfect asks "Save Document? (Y/N)"
       answer No.  (If you answer Yes, your file will be saved in a non-ASCII  
       format.)  Once saved, an ASCII file can be retrieved for re-editing
       with the WordPerfect file menu command 5 - Text In.  
   
            In MicroSoft Word, select Plain printer/Print file from the Print  
       Options menu.  Or use the Transfer/Save option; when it asks 'Format?"  
       answer No. (In Word 5.0, select "Format:Text only with line breaks.")

            I suggest you give your ASCII files the extension .ASC as in       
        MYFILE.ASC.

       +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
       +  TURN AUTOMATIC HYPHENATION OFF.  IN FACT, IT'S BEST NOT TO USE   +
       +  ANY WORD PROCESSING EMBEDDED CODES, SOFT HYPHENS, OR DOT         +
       +  COMMANDS (LINES BEGINNING WITH A PERIOD) OTHER THAN AVSCRIPTER'S +
       +  DOT COMMANDS.  I CAN'T PREDICT WHAT WILL HAPPEN IF YOU DO.       +   

       +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
       













       AVScripter 3.62 Mini-manual                                           5


           RE-EDITING:  When you reload an ASCII full-width file into your 
       word processor and start making changes, word-wrap will create some 
       funny-looking 
       short lines like the one above.  Don't worry about them.  AVScripter
       will gather all lines, regardless of length, and format them correctly  
       into two columns.  If the short lines irritate you, save your full-
       width file twice: once as an ASCII file for AVScripter processing; 
       once as a regular word-processing file for re-editing.  (Be sure to 
       give the two files different names, such as MYFILE.ASC and MYFILE.DOC.)


       -----------------------------------------------------------------------
       | OLDER MODEL DOT MATRIX AND DAISY WHEEL PRINTERS:                    |
       |                                                                     |
       | On a very few models of older printers, AVScripter 3.62 will not    |
       | print page breaks correctly.  If this is the case, print to disk,   |
       | then print the disk file from your word processor. (See page 16.)   |
       | Upon request, I'll send registered users Ver. 3.2, which works with |
       | early printers, but not with laser printers.                        |
       -----------------------------------------------------------------------





       _______________________________________________________________________
       | +++++++++++++++++++++++++++++++++                                   |
       | +  WORDSTAR 3.3 AND AVSCRIPTER  +                                   | 
       | +++++++++++++++++++++++++++++++++                                   |
       |                                                                     |
       |      If you have WordStar, the Non-document (ASCII) mode works fine.| 
       | However, if you want the convenience of word-wrap, go ahead and use |
       | the Document mode.  Don't use any soft hyphens--turn Hyphen Help off|
       | with ^OH.                                                           |
       |                                                                     |
       |      To convert a WordStar Document file to ASCII format, use the   |
       | public domain program WS2ASCII.EXE.  I've included it with          |
       | AVScripter.  Type WS2ASCII and follow the prompts.                  |
       |                                                                     |
       |      When converting a file, I suggest you give each version of your|
       | script a distinctive file extent, such as .WS or .DOC for the       |
       | WordStar Document file and .ASC for the ASCII version.  That way    |
       | you'll always know which is which.                                  |
       |_____________________________________________________________________|



















       AVScripter 3.62 Mini-manual                                           6

      
       ++++++++++++++++ 
       +  DISK SPACE  +
       ++++++++++++++++

            AVScripter requires working space on your logged drive roughly 
       equal to the size of your source file.  Depending on how your system 
       allocates disk space, you may need 2 to 4 K more.  In other words, if 
       the file to be processed is 20K, you should have at least 24K free 
       space on your logged disk drive for AVScripter's working files.  These 
       working files are deleted at the end of the program.  Your source text 
       file can be on any drive.   

            I usually put a disk with nothing but AVSCRIPT.EXE on it in the A 
       drive, log on to A, and call up the program.  I keep my source files on 
       B drive.  That way all of disk A except for AVSCRIPT.EXE is always 
       available as working space.

            If you direct the two-column output to a disk file, that disk file 
       will occupy roughly twice the space of the original text file, plus 
       maybe 2K more.  For example, if your text file is 20K, the two-column 
       file will take up approximately 40 to 42 K of space.
        

       _______________________________________________________________________
       |                                                                     |
       | RAMDISKS:                                                           |
       |                                                                     |
       |     If you can configure part of your Random Access Memory as a     |
       | RAMdisk, do so, then copy AVScripter onto it.  By calling up the    |
       | program from a RAMdisk, the time spent shuttling to and from the    |
       | working files on the logged drive--the RAMdisk-- will be greatly    |
       | reduced, and AVScripter will work much faster.                      |
       |_____________________________________________________________________|
      





























       AVScripter 3.62 Mini-manual                                           7

                     ++++++++++++++++++++++++++++++++++++++++++
                     +  PREPARING A TEXT FILE FOR AVSCRIPTER  +
                     ++++++++++++++++++++++++++++++++++++++++++
                                                                 
       ++++++++++++++++++++++++++++++++++++++
       +  CREATING AUDIO AND VIDEO COLUMNS  +
       ++++++++++++++++++++++++++++++++++++++

            Type .V (upper or lower case) when you want something in the video 
       column.  Type .A (upper or lower case) for the audio column.
       _______________________________________________________________________
       |                                                                     |
       |.v THIS IS THE FIRST VIDEO LINE. NOTICE THAT BOTH AUDIO AND VIDEO    |
       |LINES AUTOMATICALLY WRAP AROUND INSIDE THEIR RESPECTIVE COLUMNS      |
       |WITHOUT YOU HAVING TO THINK ABOUT IT.                                |
       |.a This is the audio that goes with the first video line and ends up |
       |opposite it.  AVScripter automatically shortens audio and video lines|
       |to 30 characters and spaces so they'll fit in the columns.           |
       |_____________________________________________________________________|
                                  will print out as 
       _______________________________________________________________________
       |                                                                     |
       |     THIS IS THE FIRST VIDEO LINE.      This is the audio that goes  |
       |     NOTICE THAT BOTH AUDIO AND         with the first video line and|
       |     VIDEO LINES AUTOMATICALLY WRAP     ends up opposite it.         |
       |     AROUND INSIDE THEIR RESPECTIVE     AVScripter automatically     |
       |     COLUMNS WITHOUT YOU HAVING TO      shortens audio and video     |
       |     THINK ABOUT IT.                    lines to 30 characters and   |
       |                                        spaces so they'll fit in the |
       |                                        columns.                     |
       |_____________________________________________________________________|





       _______________________________________________________________________
       |                                                                     |
       | WORDSTAR 3.3 USERS:                                                 |
       |                                                                     |
       |      When working in WordStar Document mode, you'll have to         |
       | manually add a carriage return to the end of the first line of each |
       | .V or .A entry, or type ^B at any point beyond the right margin.    | 
       | After that, word-wrap will work normally.                           |
       |                                                                     |
       |      (In the example above, you'd add a carriage return or type ^B  | 
       | after "AND VIDEO" in the .v entry, and after "ends up" in the .a    |
       | entry)                                                              |
       |                                                                     |
       |      An alternative is to put a space in front of .a or .v when you |
       | think the entry will extend beyond the right margin.  WordStar will |
       | then ignore AVScripter's dot commands and give you word-wrap from   |
       | .a or .v onward.                                                    |
       |_____________________________________________________________________|










       AVScripter 3.62 Mini-manual                                           8

       +++++++++++++++++++++++++++++++++
       +  CREATING AUDIO-VIDEO BLOCKS  +
       +++++++++++++++++++++++++++++++++

            AVScripter works with audio-video blocks.  An audio-video block is 
       simply all the audio and video lines, in any order, that you want 
       synced up together.  To start a new block, skip a line. 
       _______________________________________________________________________
       |                                                                     |
       |.v THIS IS THE FIRST VIDEO LINE OF THE FIRST BLOCK.                  |
       |.a This is the audio that goes with the first video line and ends up |
       |opposite it.                                                         |
       |                                                                     |
       |.A This is audio beginning the second audio-video block.             |
       |.V THIS VIDEO BEGINS THE SECOND AUDIO-VIDEO BLOCK.  ALL THE AUDIO AND|
       |VIDEO LINES AFTER A BLANK LINE ARE SYNCED UP TOGETHER.               |
       |_____________________________________________________________________|
                                will print out as               
       _______________________________________________________________________
       |                                                                     |
       |     THIS IS THE FIRST VIDEO LINE       This is the audio that goes  |
       |     OF THE FIRST BLOCK.                with the first video line and|
       |                                        ends up oppposite it.        |
       |                                                                     |
       |     THIS VIDEO BEGINS THE SECOND       This is audio beginning the  |
       |     AUDIO-VIDEO BLOCK.  ALL THE        second audio-video block.    |
       |     AUDIO AND VIDEO LINES AFTER A                                   |
       |     BLANK LINE ARE SYNCED UP                                        |
       |     TOGETHER.                                                       |
       |_____________________________________________________________________|


            A block can consist of a single .v or .a entry.  For example, 
       _______________________________________________________________________
       |                                                                     |
       |.V DISSOLVE TO                                                       |
       |                                                                     | 
       |.v A SHORT VIDEO DESCRIPTION                                         |
       |.A This is the first point I want to make.                           |
       |                                                                     |
       |.a And let me tell you something else.                               |
       |_____________________________________________________________________|
                                  will print out as
       _______________________________________________________________________
       |                                                                     |
       |     DISSOLVE TO                                                     |
       |                                                                     |
       |     A SHORT VIDEO DESCRIPTION          This is the first point I    |
       |                                        want to make.                |
       |                                                                     |
       |                                        And let me tell you something|
       |                                        else.                        |
       |_____________________________________________________________________| 











       AVScripter 3.62 Mini-manual                                           9

       ++++++++++++++++++++++
       +  NUMBERING SCENES  +
       ++++++++++++++++++++++      

            To get a scene number, follow the first .a or .v in the block with 
       the # sign.  When AVScripter formats the file, it will automatically 
       number the scenes in sequence.  This makes it very easy to move, 
       delete, insert and rearrange scenes, since no matter what order the 
       scenes end up in, they'll always be numbered correctly.  
       _______________________________________________________________________
       |                                                                     |
       |.v# THIS IS THE FIRST VIDEO LINE OF THE FIRST SCENE.                 |
       |.a This is the audio that goes with the first video line and ends up |
       |opposite it.                                                         |
       |                                                                     |
       |.A# This is audio beginning the second audio-video scene.            |
       |.V THIS VIDEO BEGINS THE SECOND AUDIO-VIDEO SCENE.  ALL THE AUDIO AND|
       |VIDEO LINES AFTER A BLANK LINE ARE SYNCCED UP TOGETHER.              |
       |_____________________________________________________________________|
                                  will print out as               
       _______________________________________________________________________
       |                                                                     |
       |1    THIS IS THE FIRST VIDEO LINE       This is the audio that goes  | 
       |     OF THE FIRST SCENE.                with the first video line and|
       |                                        ends up opposite it.         |
       |                                                                     |
       |2    THIS VIDEO BEGINS THE SECOND       This is audio beginning the  |
       |     AUDIO-VIDEO SCENE.  ALL THE        second audio-video scene.    |
       |     AUDIO AND VIDEO LINES AFTER A                                   |
       |     BLANK LINE ARE SYNCCED UP                                       |
       |     TOGETHER.                                                       |
       |_____________________________________________________________________|

            A # sign on any line other than the first one in the block will be
       ignored.   (TIP: To keep the same scene numbers after deleting one or 
       more scenes, put ".V# [DELETED]" in place of the missing scene(s).)


       +++++++++++++++++ 
       +  UNDERLINING  + 
       +++++++++++++++++ 
                         
            You can underline anywhere, even in headers and titles.  Start and 
       stop underlining with the "_" underline character.  In the following 
       example, the phrase, "underlining is easy," would be underlined on the 
       hard copy of the two-column script.  Underlining is ignored when  
       printing to the screen or to a disk file.           
       _______________________________________________________________________
       |                                                                     |
       |.a With AVScripter, _underlining is easy_ to do.                     |
       |_____________________________________________________________________|

            Underlining works independently in each column.  If you start 
       underlining in a .v entry, all video lines from then on--but no audio 
       lines--will be underlined, until you stop the underlining with a second 
       "_" underline character in a .v entry.
            







       AVScripter 3.62 Mini-manual                                          10
       
       ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
       +  CREATING STAND-ALONE LINES AND BLANK LINES WITHIN A COLUMN  +
       ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

            AVscripter automatically wraps everything around in the last 
       designated column--audio or video--until it comes across the next .a or 
       .v line.  For example,
       _______________________________________________________________________
       |                                                                     |
       |.a# NARRATOR:                                                        |
       |Welcome to our program.  Today we'll be talking about why you should |
       |use AVScripter for all your audio-video scripts.                     |
       |.v NARRATOR ON CAMERA                                                |
       |Super title:                                                         |
       |JOE SPOKESPERSON                                                     |
       |_____________________________________________________________________|
                                  will print out as
       _______________________________________________________________________
       |                                                                     |
       |1    NARRATOR ON CAMERA Super           NARRATOR: Welcome to our     |
       |     title: JOE SPOKESPERSON            program.  Today we'll be     |
       |                                        talking about why you should |
       |                                        use AVScripter for all your  |
       |                                        audio-video scripts.         |
       |_____________________________________________________________________|

       which is probably not what you want.  To create a stand-alone line or a 
       blank line in a single column, start a new .a or .v line:
       _______________________________________________________________________
       |                                                                     |
       |.a# NARRATOR:                                                        |
       |.A Welcome to our program. Today we'll be talking about why you      |
       |should use AVScripter for all your audio-video scripts.              |
       |.V NARRATOR ON CAMERA                                                |
       |.v                                                                   |
       |.v Super title:                                                      |
       |.v JOE SPOKESPERSON                                                  |
       |_____________________________________________________________________|
                                  will print out as
       _______________________________________________________________________
       |                                                                     |
       |1    NARRATOR ON CAMERA                 NARRATOR:                    |
       |                                        Welcome to our program. Today|
       |     Super title:                       we'll be talking about why   |
       |     JOE SPOKESPERSON                   you should use AVScripter for|
       |                                        all your audio-video scripts.|
       |_____________________________________________________________________|

       By starting the audio line "Welcome to our program..." on a new .A 
       line, "NARRATOR:" stands alone.  The same technique works for the 
       "Super title:" and "JOE SPOKESPERSON" lines in the video column. 

       The blank .v line after "NARRATOR ON CAMERA" shows how to create a 
       blank line in one column without starting a new audio-video block.  A 
       blank .a line works the same in the audio column.  A completely blank 
       line, of course, starts a new block.








       AVScripter 3.62 Mini-manual                                          11


       +++++++++++++++
       +  INDENTING  +
       +++++++++++++++

            You can indent at the beginning of any .v or .a entry.  The 
       first space after the dot command is a separator and does not count; 
       so, if you want to indent 5 spaces, put six spaces between the dot 
       command and the first word following it.
       _______________________________________________________________________
       |                                                                     |
       |.v#    (Title)                                                       |
       |.v Tom Schroeppel                                                    |
       |.a      Hi, there.  I'm the guy who wrote AVScripter.                |
       |_____________________________________________________________________|
                                  will print out as
       _______________________________________________________________________
       |                                                                     |
       |1       (Title)                              Hi, there.  I'm the guy |
       |     Tom Schroeppel                     who wrote AVScripter.        |
       |_____________________________________________________________________|


       ++++++++++++++++
       +  LONG WORDS  +
       ++++++++++++++++

            AVScripter's audio and video columns can be between 20 and 40
       characters wide.  Words longer than the column are arbitrarily divided:
       _______________________________________________________________________
       |                                                                     |
       |.v Teacher in classroom                                              |
       |.a Students, today's subject is antidisestablishmentarianismism.     |
       |_____________________________________________________________________|
                                  will print out as
       _______________________________________________________________________
       |                                                                     |
       |     Teacher in classroom               Students, today's subject is |
       |                                        antidisestablishmentarianism-|
       |                                        ism.                         |
       |_____________________________________________________________________|

            If you have one or more long words and you're not sure how they'll 
       fit into the columns, use AVScripter's Screen Output option to check 
       the two-column layout.  Then, if you don't like where AVScripter 
       divided the word, go back into your source file and put a hyphen where 
       you want the word divided.  When you reprocess the file, AVScripter 
       will start a new line after your hyphen.
















       AVScripter 3.62 Mini-manual                                          12

       ++++++++++++++++++++++++++++++++++++++
       +  CREATING HEADERS AND TITLE LINES  +
       ++++++++++++++++++++++++++++++++++++++

            If you choose, AVScripter will automatically print a header, up to 
       65 characters (including _underline_ indicators) long, at the top of 
       each page.  Type .HE or .he to begin a header line:
       _______________________________________________________________________
       |                                                                     | 
       |.he AVScripter Revision 3.62                                         |
       |_____________________________________________________________________|

            You can have up to three title lines, each up to 77 characters 
       (including _underline_ indicators) long.  Enter them as .tl or .TL 
       followed by 1, 2, or 3:
       _______________________________________________________________________
       |                                                                     |
       |.tl1 The Wonderful World of AVScripter                               |
       |.tl2 By Tom Schroeppel                                               |
       |.TL3 (c) Copyright Tom Schroeppel 1990                               |
       |_____________________________________________________________________|

            AVScripter automatically centers each title line.  VIDEO and AUDIO 
       identifiers are placed above the left and right columns on each page.  
       The top of page one will look like this:
       _______________________________________________________________________
       |                                                                     |
       |                                            AVScripter Revision 3.62 |
       |                                                                     |
       |                The Wonderful World of AVScripter                    |
       |                        By Tom Schroeppel                            |
       |                (c) Copyright Tom Schroeppel 1990                    |
       |                                                                     |
       |              -VIDEO-                            -AUDIO-             |
       |                                                                     |
       |_____________________________________________________________________|

            The title lines are centered left to right on the page.  To center 
       a title line above the audio and video columns, put six blank spaces 
       between the .TL dot command and the title line.

            If you have only one or two title lines, or no title lines, 
       AVScripter will pull up the rest of the page to fill in the blank 
       space.  

       The tops of pages 2 through the end will look like this:
       _______________________________________________________________________
       |                                                                     |
       |                                    AVScripter Revision 3.62  Page 2 |
       |                                                                     |
       |              -VIDEO-                            -AUDIO-             |
       |                                                                     |
       |_____________________________________________________________________|











       AVScripter 3.62 Mini-manual                                          13

                    ++++++++++++++++++++++++++++++++++++++++++++  
                    +  PROCESSING A TEXT FILE WITH AVSCRIPTER  +
                    ++++++++++++++++++++++++++++++++++++++++++++

       +++++++++++++++++++++++++++++++++++++
       +  YOUR SOURCE FILE IS ALWAYS SAFE  +
       +++++++++++++++++++++++++++++++++++++

            There is no way AVScripter can erase your original text file or 
       alter it in any way.  

       ++++++++++++++++++++++
       +  BEFORE YOU START  +
       ++++++++++++++++++++++

            Be sure your source file is in pure ASCII format, preferably
       with the extension .ASC, as in MYFILE.ASC   If not, re-read page 4. 

            Be sure your printer is set for the standard form length of 66 
       lines (11 inches). 

            Remember that AVScripter needs working space on your logged disk 
       drive roughly equal to the size of your source file.  Depending on how 
       your system allocates disk space, you may need 2 to 4 K more.  So, if 
       your source file is 20K, you should have at least 24K free working 
       space on your logged disk drive.  This space will be freed up again 
       when you exit AVScripter.
       

       +++++++++++++++
       +  BEGINNING  +
       +++++++++++++++
 
            Type AVSCRIPT at the system prompt, followed by a carriage return.
       First is a monochrome display test, then the opening screen, followed by
       the main menu.  You'll be able to choose between Two-Column Output,     
       Prompter Output, Print, and Exit.



























       AVScripter 3.62 Mini-manual                                          14

       +++++++++++++++++++++++
       +  TWO-COLUMN OUTPUT  +
       +++++++++++++++++++++++

            Use the directory search screen to either name or select your 
       original full-width ASCII file.  

            If you type in a name without an extension, the file extension 
       .ASC will be automatically added.  (To name a file without an extension,
       type a period after it, as MYFILE.)

            Inside the directory window, you can move to a file by typing the
       first letter of its name.  For example, type T to go to TESTFILE.ASC.

                   +++++++++++++++++++++++++++++
                   +  TWO-COLUMN OUTPUT SETUP  +
                   +++++++++++++++++++++++++++++ 

            The default two-column output setup is:
           
                        Print to printer [screen, disk]
                        Start printing at the first page 
                        Stop printing after the last page 
                        One copy 
                        No print pause between pages.  
                        Printer port LPT1 (standard parallel port)*

           If this is what you want, just press <ESC>.  To change a default,   
       <SPACE> bar or arrow to the item, then press <ENTER> to toggle among 
       the options.  Numeric first page is 1.  Numeric last page is 999, or 
       any other number equal to or greater than your last page number.   

           Most people like to print to the screen first, to check for errors. 
       For information about printing to a disk file, see page 18.

           NOTE:  AVSCRIPTER DOES NOT WORK WITH PROPORTIONAL PRINTER FONTS.
       The audio and video columns line up properly only when printed with a  
       non-proportional, monospace type font.  This is a font, such as Courier
       10, in which each letter takes up the same amount of horizontal space.
       ______________________________________________________________________
       |                                                                    |
       | IF AVSCRIPTER DOESN'T PRINT CORRECTLY ON YOUR PRINTER:             |
       |                                                                    |
       | LASER PRINTERS:  Be sure you're in the default setup by clearing   |
       | the printer memory.  On HP LaserJets, use RESET.  For other lasers,|
       | check your manual.                                                 |
       |                                                                    |
       | SYMBOLS AND FOREIGN LANGUAGE CHARACTERS:  Print to an ASCII disk   |
       | file, then print the file from your word-processor. (See page 16)  |
       |                                                                    |
       | FOR OTHER PROBLEMS, SEE PAGE 17.                                   |
       |____________________________________________________________________|
       
       * If you have a serial printer connected to COM1 or COM2, set it to
         1200 baud, no parity, 1 stop bit, 8 data bits.









       AVScripter 3.62 Mini-manual                                          15

       +++++++++++++++++++++
       +  PROMPTER OUTPUT  +
       +++++++++++++++++++++

            Use the directory search screen, as described for Two-Column 
       output, to select the full-width ASCII file to be converted to 
       a single-column prompter or narrator script.  

            If you type in a name without an extension, the file extension 
       .ASC will be automatically added.  (To name a file without an extension,
       type a period after it, as MYFILE.)

            The prompter output comes from your audio column.  The only 
       blank lines it inserts are an extra line between numbered scenes
       and .a blank audio lines. 

                   +++++++++++++++++++++++++++
                   +  PROMPTER OUTPUT SETUP  +
                   +++++++++++++++++++++++++++ 

            The default prompter output setup is:
           
                        Print to printer [screen, disk]
                        Start printing at the first scene 
                        Stop printing after the last scene
                        Column centered on page [left, right]
                        Column width 24 characters [15-60]
                        Double spacing [single, triple]
                        Print across perfs (skip page breaks)
                        One copy 
                        No print pause between pages.  
                        Printer port LPT1 (standard parallel port)*

           If this is what you want, just press <ESC>.  To change a default,   

       <SPACE> bar or arrow to the item, then press <ENTER> to toggle among 
       the options.  Numeric first scene is 1.  Numeric last scene is 9999,   
       or any other number equal to or greater than your last scene number.   

           To create an ASCII file to be used in a computerized prompting
       system, choose the Left column position and print to Disk.
       ______________________________________________________________________
       |                                                                    |
       | IF AVSCRIPTER DOESN'T PRINT CORRECTLY ON YOUR PRINTER:             |
       |                                                                    |
       | LASER PRINTERS:  Be sure you're in the default setup by clearing   |
       | the printer memory.  On HP LaserJets, use RESET.  For other lasers,|
       | check your manual.                                                 |
       |                                                                    |
       | SYMBOLS AND FOREIGN LANGUAGE CHARACTERS:  Print to an ASCII disk   |
       | file, then print the file from your word-processor. (See page 16)  |
       |                                                                    |
       | FOR OTHER PROBLEMS, SEE PAGE 17.                                   |
       |____________________________________________________________________|
       
       * If you have a serial printer connected to COM1 or COM2, set it to
         1200 baud, no parity, 1 stop bit, 8 data bits.







       AVScripter 3.62 Mini-manual                                          16

            ++++++++++++++++++++++
            +  PRINTING TO DISK  +
            ++++++++++++++++++++++

            The disk file produced will be an ASCII text file, which can be    
       edited with any word processor.  I suggest you give your two-column disk
       files the file extension .TWO for quick identification, as MYFILE.TWO.  
       Give your prompter disk files the file extension .PRM, as MYFILE.PRM.
      
            Disk files are useful if you want to give a copy of the two-column 
       script or the prompter file to someone else via diskette or modem.  

            A left-column-position prompter disk file can be used in 
       computerized prompting systems.  

            Sometimes it's necessary TO EDIT OR PRINT AN AVSCRIPTER-CREATED 
       DISK FILE WITH YOUR WORD PROCESSOR;  I do it to print out foreign
       language scripts.  Import the disk file as an ASCII file, then change
       your word processor PAGE DEFAULTS to the following:  
              (Suggestion: put them all in a macro for quick use.)
 
            page length = 66 lines* (11"), number of lines per page = 66*
            left margin = column 0 or 1, right margin = column 80
            top margin =0, bottom margin =0
            turn off hyphenation       
            turn off automatic page numbering

            Some word processors may use inch measurements for the margins.
       What you want is to set up to print the entire page, top to bottom,
       side to side, with zero margins or the minimum margins all around.

            LASER PRINTERS:  With a laser printer, the macro shown above may
       print out extra blank lines between pages.  In WordPerfect 5.0 it
       prints out 6.  If this happens, add the following search-and-replace-
       with-no-confirm to the end of your macro: Search for: [HRt] [HRt]
       [HRt] [HRt] [HRt] [HRt]; Replace with: (nothing--just press F2 again.**)
       [HRt]--Hard Return--is the <ENTER> key.  This will replace the six
       extra carriage returns (<ENTER>'s) between pages with nothing.  Check
       your page breaks on screen before printing, as this method may in
       some rare cases delete too many blank lines.
       
            You can also print an existing ASCII disk file with AVScripter.  
       Select "Print" from the opening menu.  See "Printing Existing Files" 
       on page 20.

       _______________________________________________________________________
       |                                                                     |
       |     There is one drawback to the disk files created by AVScripter.  |
       | They don't include underlining.  Underlining is possible only when  |
       | you process your original source file and print it out immediately  |
       | on your printer.                                                    |
       |_____________________________________________________________________|

       * Or any alternate page length set with the .PL n command.
       ** If you have a LaserJet II, replace with three Hard Returns.









       AVScripter 3.62 Mini-manual                                          17

            +++++++++++++++++++++++++++++
            +  AVSCRIPTER PROGRESS BOX  +
            +++++++++++++++++++++++++++++

            I always get a little nervous when a program is grinding away and 
       I'm waiting.  I like to be reassured that it's really working and not 
       hung up somewhere.  That's why I added this feature.

            When AVScripter is working, it keeps a running tab of lines 
      processed in a box on the screen. 


            +++++++++++++++++++++++++++++++++++++
            +  IF SOMETHING DOESN'T LOOK RIGHT  +
            +++++++++++++++++++++++++++++++++++++

            If the two-column or prompter script doesn't look right, in order 
       of probability it's due to:

            1.  Your source file is not in pure ASCII format.  Re-read page 4.

            2.  You have some embedded word-processing commands or soft 
       hyphens in your source file.  Take them out.

            3.  Your printer is set to the wrong form length.  Reread page 15,
       "BEFORE YOU START."

            4.  You've inadvertently given AVScripter a dot command.  Check 
       all your lines in which the first character other than a space is a 
       period.  The program checks each initial period to see if it's followed 
       by an AVScripter dot command.  If so, the dot command is executed; if 
       not, the line is printed as is. 

            5.  Your laser printer is not in the default setup.  To clear the
       memory and restore your defaults, use RESET on HP LaserJets.  For other
       printers, consult your manual.

            6.  You are using non-standard symbols or foreign language 
       characters.  Print to disk, then print the disk file from your word
       processor.  (See page 18.)

            7.  You have an incompatible older model printer.  Reread page 4,
       "OLDER MODEL DOT MATRIX AND DAISY WHEEL PRINTERS."   Print to disk,
       then print the disk file from your word processor.  (See page 18.)
            
            8.  There's a bug in the program that slipped by me.  If this is 
       so, please send me as much information as possible, including copies of 
       your original full-width and two-column files.  I'll try to figure out 
       what went wrong and send you a corrected copy of the program.















       AVScripter 3.62 Mini-manual                                          18

       +++++++++++++++++++++++++++++
       +  PRINTING EXISTING FILES  +
       +++++++++++++++++++++++++++++

            To print an existing file, select "Print" from the main menu.  
       You can then select to print a full-width ASCII text file (the source
       file you prepared for AVScripter), an AVScripter-created two-column 
       file, an AVScripter-created prompter file, or this manual.  The only
       choices you have are how many copies, whether to pause between
       pages, and which printer port.
                
            Your full-width text file will be printed out, broken into 
       11-inch pages. Each page will have the file name and the page number 
       at the top.

            As long as your page/form length is the standard 66 lines, you
       can print your AVScripter-created two-column and prompter files
       exactly as you created them.  If you are using a non-standard page
       length, you'll have to print the two-column or prompter file from 
       within your word processor (see page 16).
    

       _______________________________________________________________________
       |                                                                     |
       | WORDSTAR 3.3 USERS:                                                 |
       |                                                                     |
       |      To print a copy of your Non-document ASCII text file from      |
       | within WordStar, use the "Suppress page formatting" option on the   |
       | WordStar printing menu.  Answer YES to "Suppress page formatting    |
       | (Y/N):".  Otherwise your AVScripter dot commands will be treated by |
       | WordStar as WordStar dot commands, with unpredictable results. This |
       | method prints the file straight through, with no page breaks.       |
       |_____________________________________________________________________|































       AVScripter 3.62  Mini-manual                                         19

       ++++++++++++++++++++++++++++
       +  IF THE PROGRAM CRASHES  +
       ++++++++++++++++++++++++++++

            If your original ASCII text file is prepared properly, with no 
       embedded word processing codes and no soft hyphens, there are only two 
       things that I know of that can cause the program to crash:

            1.  You don't have enough space on your logged disk drive for 
       AVScripter's working files.  Remember, you need space there roughly 
       equal to the size of the file or files being processed.  Depending on 
       how your system allocates disk space, you may need 2 or 4 K more.  If 
       your source file is 20K, allow for at least 24K working space on the 
       logged drive.

            2.  You don't have enough room on your disk for the disk file 
       output.  Remember, a two-column script file takes up approximately 
       twice the space of the original text file, plus maybe 2K more.  If your 
       source file is 30K, allow at least 62K for the two-column file.


            If AVScripter crashes, you should see a screen with something
       like this:
                   CODE = 106
                   ADDRESS =     0:1554

            The CODE and ADDRESS will probably be different.  Whatever you
       see, please write down the information.  Then please write me with as 
       many details as possible, as this would mean there's a bug I don't 
       know about in the program.  Please send me as much information as 
       you can, including copies of your original full-width and two-column 
       files.  I'll try to figure out what went wrong and send you a corrected 
       copy of the program.




                        +++++++++++++++++++++++++++++++++++++
                        +  Thank you for using AVScripter.  +
                        +    I hope it serves you well.     +
                        +++++++++++++++++++++++++++++++++++++























       AVScripter 3.62 Mini-manual                                          20






       |--------------------------------------------------------------------|
       | TO:    TOM SCHROEPPEL                                              | 
       |        4705 BAY VIEW AVENUE                                        |
       |        TAMPA, FLORIDA 33611                                        |
       |                                                                    |
       |                                                                    |
       | Please register my use of AVScripter and send me the latest version|
       | on disk, complete printed documentation explaining all advanced    |
       | features, command card, and free updates for six months.           |
       |                                                                    |
       | I enclose $30* X _____ user/terminals for a total of $ ___________ |
       |                                                                    |
       | I got my copy of the program from:________________________________ |
       |                                                                    |
       | My computer(s):___________________________________________________ |
       |                                                                    |
       | My disk size:_____________________________________________________ |
       |                                                                    |
       | My word processor is:_____________________________________________ |
       |                                                                    |
       | My printer(s):____________________________________________________ |
       |                                                                    |
       | What I like about the program:____________________________________ |
       |                                                                    |
       | __________________________________________________________________ |
       |                                                                    |
       | __________________________________________________________________ |
       |                                                                    |
       | Improvements I'd like to see:_____________________________________ |
       |                                                                    |
       | __________________________________________________________________ |
       |                                                                    |
       | __________________________________________________________________ |
       |                                                                    |
       |                                                                    |
       | Name (print) _____________________________________________________ |
       |                                                                    | 
       | Address __________________________________________________________ |
       |                                                                    |
       | City __________________________________ State ____ Zip ___________ |
       |                                                                    |
       |        * Florida residents please add $1.80 state sales tax        |
       |--------------------------------------------------------------------|
















       AVScripter 3.62 Mini-manual                                          21

                              +++++++++++++++++++++++++
                              +  A PLUG FOR MY BOOKS  +
                              +++++++++++++++++++++++++

            I've written and published two books on film and television 
       production which you may find useful for yourself or your associates.

            THE BARE BONES CAMERA COURSE FOR FILM AND VIDEO explains the 
       basics of shooting for editing.  Nestor Almendros, the Academy Award 
       winning cinematographer of "Days of Heaven" and "Kramer vs.Kramer," 
       called it "a marvel of clarity and conciseness." It's currently used as 
       a text at over 150 universities.  

            THE BARE BONES CAMERA COURSE covers: How the camera works, 
       Exposure, Color temperature, Using light meters, Lenses - wide angle, 
       normal and telephoto, Zoom lenses, Focus, Depth of field, Composition, 
       Rule of thirds, Leading lines, Camera angles, Screen direction, How to 
       cross the line, Using screen direction to solve shooting problems, 
       Making camera moves, Lighting, Using reflectors and bounce lights, 
       Planning and shooting a sequence, Storyboards, Shooting out of 
       sequence, and more.  89 pages, 8 1/2 x 11.  Over 200 illustrations.  

            My second book, VIDEO GOALS: GETTING RESULTS WITH PICTURES AND 
       SOUND, is a practical guide to the entire process, from initial concept 
       to final edit.  It covers: Planning the shape of your program, 
       Establishing a style, Writing dramatic and non-fiction scripts, Pre-
       production, Directing the basic sequence, Directing to edit, Directing 
       actors, Selecting the appropriate microphone, Recording voices and 
       presence, Basic rules of editing, Editing sound, Selecting and cutting 
       music, Editing montages, Preparing for the sound mix, and more.  116 
       pages, 8 1/2 x 11.

       Here's a coupon to order either or both books if you want:

       |--------------------------------------------------------------------|
       | TO:    TOM SCHROEPPEL                                              | 
       |        4705 BAY VIEW AVENUE                                        |
       |        TAMPA, FLORIDA 33611                                        |
       |                                                                    |
       | Please send me _____ copies of THE BARE BONES CAMERA COURSE FOR    |
       | FILM AND VIDEO at $6.95 each, plus $1 postage/handling per book.   |
       |                                                                    |
       | And _____ copies of VIDEO GOALS: GETTING RESULTS WITH PICTURES     |
       | AND SOUND at $7.95 each, + $1 postage/handling per book.           |
       |                                                                    |
       | I enclose check or money order for ________ total.                 | 
       |                                                                    |
       | Name (print) _____________________________________________________ |
       |                                                                    | 
       | Address __________________________________________________________ |
       |                                                                    |
       | City __________________________________ State ____ Zip ___________ |
       |                                                                    |
       |           Florida residents please add 6% state sales tax          |
       |--------------------------------------------------------------------|

       







```
{% endraw %}

## FILE1028.TXT

{% raw %}
```
Disk No: 1028                                                           
Disk Title: AVScripter                                                  
PC-SIG Version: S3.62                                                   
                                                                        
Program Title: AVScripter                                               
Author Version: 3.62                                                    
Author Registration: $30.00                                             
Special Requirements: A word processor capable of ASCII file output.    
                                                                        
If you write scripts that require separate audio and video columns,     
AVScripter is for you.                                                  
                                                                        
Unlike programs that graphically create two columns on your computer    
screen, AVScripter works with full-screen ASCII text files created with 
your word processor.  Working with the whole screen, you see more text  
on the screen at one time, you don't have to continually jump back and  
forth from one column to the other, and you don't have to worry about   
keeping the appropriate audio and video lines opposite each other.      
AVScripter does it all for you, automatically.                          
                                                                        
Features include:                                                       
                                                                        
~ Sends two-column output--single-spaced, double-spaced, or             
single-spaced video/double-spaced audio--to your printer, your screen,  
or a disk file, automatically syncing audio and video lines             
                                                                        
~ Allows variable-width audio and video columns                         
                                                                        
~ Automatically numbers and renumbers your scenes and pages             
                                                                        
~ Looks for the best place to start each new page, then adds the        
appropriate "CONTINUED"s where necessary                                
                                                                        
~ Automatically centers your title lines                                
                                                                        
~ Prints a header line at the top of each page                          
                                                                        
~ Permits you to switch between full-width lines and two-column         
format within your script                                               
                                                                        
~ Allows underlining anywhere, even in headers and title lines          
                                                                        
~ Sends printer commands to your printer                                
                                                                        
~ Prints selected pages and multiple copies                             
                                                                        
~ Chains files for processing                                           
                                                                        
~ Generates prompter/narrator scripts from the audio column.            
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1028

     Volume in drive A has no label
     Directory of A:\

    AVSCRIPT DOC     65567  10-20-90   6:41p
    AVSCRIPT EXE    100016  10-20-90   1:19p
    WS2ASCII EXE      6096   2-18-88  11:02a
    AVSDEMO  ASC      4418  10-20-90   6:35p
    AVSREAD  ME        621  10-20-90   6:21p
    FILE1028 TXT      4071  11-09-90   4:33p
            6 file(s)     180789 bytes
                          139264 bytes free
