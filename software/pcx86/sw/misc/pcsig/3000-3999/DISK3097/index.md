---
layout: page
title: "PC-SIG Diskette Library (Disk #3097)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3097/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3097"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CUTZIT.DOC

{% raw %}
```





      FREEFREE    FR        EE    FREEFREE    FREEFREE    FREE    FREEFREE
      FREEFREE    FR        EE       EF             EE     RE        EF   
      FR          FR        EE       EF            RE      RE        EF   
      FR          FR        EE       EF           FR       RE        EF   
      FR          FR        EE       EF           FR       RE        EF   
      FR          FR        EE       EF           FR       RE        EF   
      FR          FR        EE       EF          EF        RE        EF   
      FR          FR        EE       EF          EF        RE        EF   
      FR          FR        EE       EF          EF        RE        EF   
      FR          FR        EE       EF         EE         RE        EF   
      FR          FR        EE       EF         EE         RE        EF   
      FR          FR        EE       EF         EE         RE        EF   
      FR          FR        EE       EF        RE          RE        EF   
      FR          FR        EE       EF        RE          RE        EF   
      FR          FR        EE       EF        RE          RE        EF   
      FREEFREE    FREEFREEFREE       EF       FR           RE        EF   
      FREEFREE    FREEFREEFREE       EF       FREEFREE    FREE       EF   


                                        
                   "CUTZIT" cuts up Files into Smaller Files

                                  Version 1.1

              \
               \\                       /)
                \\                     //
                 \\\                  //
        __________\\\ _________     ///  ___    ___    ___    ___    ___
       |           \\\\        |  ///   |   |  |   |  |   |  |   |  |   | 
       |  C U T S   \\\\\ U P  |////    | F |  | I |  | L |  | E |  | S | 
       |_____________\\\\\\____|///     |___|  |___|  |___|  |___|  |___|
                      \\\\\\ /////
                       \\\\/V///
                        \//_O/\ 
                       ///^\\\\\\  
                     ////    \\\\\\ 
                   ////        \\\\\\ 
                 ////            \\\\\\
            ___////                \\\\\___    
           //////(                  )\\\\\\\  
           |/[_]/|                  |\[_]\\| 
            \////                    \\\\\/  




            LUNCHWARE  - take a friend to Lunch and give them a copy

                      There is NO CHARGE for this program

                   There is NO REGISTRATION FEE of any kind

                      Copyright 1989,1990 by David Roper
 

                                                               PAGE 1
        
                                    CUTZIT
                                  Version 1.1
                   "a utility to Cut up files in many ways"
                      Copyright 1989,1990 by David Roper

        You may not NEED to read this manual in order to run CUTZIT, 
        but since everybody wants a manual, here it is.  Free.

        The purpose of CUTZIT is to be able to cut up any file into 
        smaller pieces as you wish .  Sometimes large files are harder 
        to manipulate - even if your application CAN handle it. 

        CUTZIT is great for word processor files.  It can slice and 
        cut up an ASCII data base, too.  You know the kind, they are 
        delimited by a Carriage Return and LineFeed (Hex 0D,0A). 

        CUTZIT can split a large BINARY file (without CR,LF's), like a
        dBASE III data file or a Display Write file, into smaller files 
        so that you can put them on 360K disks and send them through 
        the mail to someone.  When they arrive, they can be combined 
        (back) into a large file, once again, so they can be used.  If 
        you've ever tried to send someone a large, 2 Megabyte file 
        using 360K disks, you will appreciate this feature.  Sometimes, 
        even ARC-ed files are not small enough.  Cut them with CUTZIT.

        There are 2 screens with menu options for you to select. The 
        first menu screen you see has a "Clock" on it and I shall refer 
        to it as the "CLOCK" menu.  If you press the enter key without 
        selecting one of the menu options, you will get "more" options.  
        I shall call this 2nd screen the "MORE" options menu.  Press 
        Enter again and you'll return to the "CLOCK" menu.  Easy.

        For those of you with a COLOR Monitor, you can set the colors   
        that you want to use by pressing ALT C at either of the two 
        MENU screens, then, just follow the instructions. 

        Throughout the program, try to keep a few things in mind.  
        Cutzit "will not stomp" over any files that exist.  I wanted 
        your "originals" to remain safely intact.  Sometimes, when 
        CUTZIT is CREATING smaller files for you, the numbers, 1 to 
        999, will be used for extensions.  And, lastly, pressing ENTER 
        when you don't know what to enter for an answer will either 
        "get out" of that feature or use a Default value.  Again, don't 
        be scared to try a feature.  Nothing will happen to the original. 

        There's 3 commands that will make life easier for the beginner: 
        PRINT, RENAME, and APPEND.  They are found on the MORE options 
        menu.  They won't impress computer users.  I was just trying to 
        think of the beginner who will have all these small files with 
        numbers for extensions  -  what do they do then ???  
        
        Anyone can use and distribute "CUTZIT" and "CUTZIT.DOC" so long 
        as they don't charge other than the customary copying charges 
        of less than $10.  New versions are available from wherever you 
        got this version.  None are available from me - Please don't ask.
 
         

        CUTZIT                 TABLE OF CONTENTS               PAGE 2
        ---------------------------------------------------------------  




        MENU  KEY          AS IT APPEARS ON THE SCREEN         PAGE
       ====== === ============================================ ====

        CLOCK  H  Help...........................................3
        CLOCK  D  DIR...........................................28
        CLOCK  N  Number of files, you select....................4
        CLOCK  L  Lines per file, you select.....................5
        CLOCK  S  Select the Size for all to be..................6
        CLOCK  W  Whenever a phrase occurs.......................7
        CLOCK  I  Inspect and save what you want to..............8
        CLOCK  M  Merge a file into another file.................9
        CLOCK  B  Binary File cut into sizes/ratios.............10
        CLOCK  V  Vertical cuts from ASCII files................11
        CLOCK  P  PAD records with a character on the right.....12
        CLOCK  F  Features List.................................13
        Both   Q  Quit using CUTZIT.............................14
        MORE   A  Append one file to another....................15
        MORE   R  Rename a file to have a NEW name..............16
        MORE   G  Glue Two files Together, Side by Side.........17
        MORE   H  How many Bytes in file, ASCII or BINARY.......18
        MORE   L  Line Length test of ASCII files...............19
        MORE   C  Check whether the file is ASCII or BINARY.....20
        MORE   E  Extract a BASIC program from an ASCII file....21
        MORE   V  View  File on the Monitor.....................22
        MORE   P  Print a File to the Printer...................23
        MORE   S  Search a File to Replace a word...............24
        MORE   W  When a Field changes, make a New File.........25
        MORE   D  Data Range Must be Passed to Keep Record......26
        MORE   T  Trim Characters from Right Side of Record.....27
          -    -  Version History...............................29

  

                                      Help
        CLOCK  H                                               PAGE 3 
        ---------------------------------------------------------------  
        
        PURPOSE:   This screen provides reminders to the user.
                   #1 Reminder is that CUTZIT won't hurt your original 
        file, and that Numbers 1 - 999 will be used if CUTZIT creates 
        smaller files for you automatically.  

        Do NOT try to cut a BINARY FILE using the ASCII FILE cutting 
        functions.  I have tried to check for this occurence, but 
        Murphy lives and I may have missed one.  

        Still, nothing will harm your original file....
        
        ASCII vs. BINARY can be easily and quickly checked using the
        Checking function on the MORE menu (second menu, item C). 

        The A and B under the Title of each page in the Manual signify 
        whether the function is to be for Ascii or Binary or both (AB).

        A shortcut for writing "x" number of ASCII characters while in 
        Vertical Cuts, is (x,n).  For instance, if you wanted 22 dots 
        as a filler, then (22,43) would do it instead of keying in the 
        twenty-two dots like this:  "......................" 
        
        The 22 is "how many" and the 43 is the decimal ASCII value for 
        the dot or period (.)  It is similar to BASIC's STRING$( , ) 

        You MUST use the left parenthesis, the right parenthesis, and 
        the comma in the middle for this "shortcut" to work.

        When entering numbers, you can use "K" or "k" for 1000.  In 
        other words, 3K is as good as 3000 or 3,000.  Yes, you can use 
        a comma, too, if you in the habit.  Computer people don't use 
        commas most of the time, but secretaries and bosses DO.  
        
        So we have 3K, 3k, 3000, and 3,000 all equivalent. 
        You can even say 4.5K for 4,500.  How 'bout that?  Big deal!

        Also see:  FEATURES (CLOCK F)
                   
        "I can't find what I want to do!  I want to be able to..."

        Find a word in a file...see pages 8, 22, 24
        Count Lines in a file...see page 19
        Backup Large files to 360K disks....see page 10
        Separate Records in a file....see pages 5, 7, 25, 26
        Use EPI-INFO data....see page 26
        Filter Records with a range Value....see page 26
        Save records between 2 dates....see page 26
        Fill-in to make all records a certain size....see page 12
        Cut records to a certain size.....see page 11
        Cut a subroutine out of a BASIC program...see page 21
        See whether any lines are over 70 characters long...see page 19
        Put two fields side by side to create new file...see page 17
        Trim excess spaces from the right side of records...see page 27
  
        
                      Number Of Files, You Select How Many
        CLOCK  N                       A                       PAGE 4 
        ---------------------------------------------------------------  
        
        PURPOSE:    You can select HOW MANY FILES to make.  It does the 
                    rest.  
        
        You select a number, such as 3.  CUTZIT will then do the math 
        to decide how many lines of text to put in each file without 
        exceeding that calculated number.  The last file will have to 
        catch what remains. 

        Since we are working with ASCII files which have uneven lengths 
        of text on each line, it is "impossible" to cut precisely in 
        the middle of the line, just to make the math correct.  It 
        could have been done that way, but who wants a sentence or a 
        word cut in the middle....with the other half of the word or 
        sentence in another file? 

        If you want it cut precisely, then use Binary cuts (CLOCK B) 
        and select RATIO and input something like  1:1:1  which will 
        cut into thirds, etc.  A reminder though, each file's last 
        sentence will be probably cut in the middle of a word...so big 
        deal, do it over.  
        
        CUTZIT doesn't harm your original, so you can CUTZIT all day 
        long if you wish. 
        
        You will finish with 3 files (if you choose 3!) which will be 
        named Huey, Dewey and Louie -- sorry -- 
        which will have extensions of ".1", ".2", and ".3".  These 
        three are in order of their creation.  ".1" will be the first, 
        etc. 

        The file name will be shortened (if needed) and a dash "-" will 
        be the first character of the name.  Examples:  MYFILE.DOC will 
        become -MYFILE.1, -MYFILE.2, and -MYFILE.3

        Another example, using a long, 8 character name:  HAULDIRT.TXT 
        will become -HAULDIR.1, -HAULDIR.2, and -HAULDIR.3 

        Did you notice that DIRT became DIR?  Remember, your original 
        file is not hurt.  The dashes are to help you find the new 
        files when you do a DIRectory.  You can rename them later, if 
        you wish. 
                                                  

 

                           Lines Per File, You Select 
        CLOCK  L                       A                        PAGE 5
        ---------------------------------------------------------------  
        PURPOSE:   You can select HOW MANY LINES go into each and every 
                   file that is made.  Each file can have the SAME 
        number of lines in it, OR, you can select different numbers of 
        lines to go into each individual file made.  
        
        Each file created will get the "1 - 999" number extension 
        already discussed ad nauseum. 

        If the file called "MYMEMOS.TXT" is 200 lines long and you 
        select 60 as the number of lines to be in each file, obviously 
        you can get only three files made with 60 lines in each.  The 
        fourth file will get the remainder.  In this case it would get 
        the last 20 lines. 

        Here's the Math ---

        200 /  60 = 3.333 , so we will make three files with 60 lines 
        each, for a total of 180 lines.  That leaves 20 lines to go 
        into the fourth file because 200 - 180 = 20 . 

        The important thing here is that EACH file will get the number 
        of lines you requested it to have.  Each file will be different 
        in size (bytes), naturally, because we are counting lines, not 
        bytes. 
        
        The LAST FILE created (with the highest extension number!) will 
        contain the smallest number of lines.  In other words it gets 
        "what's left over" after all the files that Can be made, ARE 
        made.
        
        You will get four files made for you:

        -MYMEMOS.1  with 60 lines in it
        -MYMEMOS.2  with 60 lines in it
        -MYMEMOS.3  with 60 lines in it
        -MYMEMOS.4  with 20 lines in it

        Since "MYMEMOS" is 7 characters long, a dash was simply added 
        to the beginning.  No letters (characters) had to be dropped at 
        the right side of the word.
           
 
        
                         Select The Size For All To Be
        CLOCK S                        A                       PAGE 6   
        ---------------------------------------------------------------  
        PURPOSE:   This is a twist on the previous two options.  You 
                   will select HOW MANY bytes to go into each and every 
        file and CUTZIT will make files with that many bytes OR LESS.

        The size of the file that you select will actually be the 
        Maximum size allowed.  Remember, we are using lines of text 
        and we don't want to break a line or word in the middle of 
        itself.  

        If you select 2K as the size to make from a file that is 10,000 
        bytes long, then CUTZIT will produce 5 or 6 files.  Probably, 
        it will be six (6) files because each file will be a MAXIMUM of 
        2,000 bytes depending on where the lines end.  

        In fact, they would all have to be EXACTLY 2,000 bytes each 
        (unlikely) to create only 5 files.

        So, each file will probably be of a different length, but all 
        of them will be 2,000 bytes or LESS. 

        HINT: If you are wanting each file to be EXACTLY 2,000 bytes, 
        no more, no less, then you need to cut it up using the Binary 
        Cut option,  CLOCK B, page 10 in this manual.  Your sentences 
        will be chopped wherever they need to be in order to make each 
        file EXACTLY 2000 bytes in length.  
        
        If you're using text and ASCII files, you probably DON'T want 
        to cut it using the Binary Cut option. 

 
        
                            Whenever A Phrase Occurs
        CLOCK W                        A                       PAGE 7 
        ---------------------------------------------------------------  
        PURPOSE:   The operative word here is "WHENEVER."   CUTZIT will 
                   begin to make a new file (with the number extensions) 
        everytime/whenever a particular Word or Phrase is found.  

        If you have a 100,000 byte short story with chapters marked 
        in it like this:  "CHAPTER ** 1 **", "CHAPTER ** 2 **", 
        "CHAPTER ** 3 **", "CHAPTER ** 4 **", "CHAPTER ** 5 **", etc., 
        then this is for you.
        
        With this option, you can tell CUTZIT to "read your story" and 
        when it finds the words "CHAPTER ** ", begin to make a new file 
        and put that chapter of your story into a new file.  You would 
        create a new file for each chapter it reads.
        
        However, if you wanted to break the story into only two parts, 
        specifically beginning with the 6th chapter, then tell CUTZIT 
        that the words to find are "CHAPTER ** 6 **" and you will get 
        two files.  The first file will be the first 5 chapters and the 
        second will be chapters 6 thru the End 
        
        The word to find must be an exact match.  Upper and Lower case 
        must match.  "CAT" is not "cat" is not "Cat",etc.  And the 
        match must be performed on one line of text.  The phrase cannot 
        be found if it wraps around to the next line.  

        Another use of this which I use is to separate SIGS on captured 
        LOG sessions from Compuserve.  After an hour or two, I end up 
        with a 200K file that I cannot handle easily.
        
        Everytime I change SIGS, I get the phrase "....last time you 
        were on..." so that's what MY Phrase/Word is,  and I get EACH 
        SIG in a different file.                   

        Then I can easily look in the ones that I want.
        
 

                       Inspect And Save What You Want To
        CLOCK I                        A                       PAGE 8 
        ---------------------------------------------------------------  
        PURPOSE:   Have you ever wanted to look at a file line by line 
                   keeping some lines and throwing away others?  This 
        option allows you to do that very thing. 
        
        It can help you find a word in a sentence if you ask it to.
        If the word (or phrase) is found, a blinking star (*) will 
        appear at the beginning of the line. 

        When you begin looking at the file on the screen, you will see 
        the helping words at the bottom.  Nobody wants to have to 
        remember them so they are put at the bottom each screen.

        If you want to Skip a line, do so by pressing "S" for Skip a 
        line.  The top line will be colored as a marker for you.  Once 
        you've skipped it, you cannot go back.  Sorry, Dorothy. 
        
        When you want to Keep a line, press ENTER, and it disappears 
        from the screen indicating that it went to the file to be 
        kept.  At the bottom of the screen there is a symbol for the 
        Enter key.  It looks like this:  <--' 
         
        The Enter key keeps the Top-most line (if it hasn't been skipped 
        yet!)  
        
        Remember, NOTHING EVER HAPPENS TO YOUR ORIGINAL, so you can run 
        this feature on the same file the next day, over and over. 
        
        If you want to Keep all the remaining lines in the file, 
        press the "K" for Keep Remaining.  After all, you may just be 
        trying to throw away the trash at the beginning of the 
        file...after you have done that, Keep the Remaining without 
        having to look at them. 
        
        If you want to keep all the lines currently showing on the 
        screen, press the SPACE BAR.  If you have "Skipped" any lines, 
        then, of course, they won't be saved.  Just the ones remaining 
        uncolored will be kept.  The SPACE BAR is a convenient way of 
        keeping as many as 24 lines at a time if the screen is full.  

        When you are tired of looking at the file, press Q to quit.  
        The session will be over and you will not get to inspect the 
        rest of the file.  Whatever you have saved will be okay.

        If you have selected all the lines that you want from the 
        screen, you MAY want to get a fresh screen full.  Press "N" for 
        "None on the screen look good to me" and you will get a fresh 
        new batch of lines to pick over and choose FROM.  
        
        A preposition is a bad word to end a sentence WITH.  Oops....

 

                         Merge A File Into Another File
        CLOCK M                        A                       PAGE 9
        ---------------------------------------------------------------  
        PURPOSE:   This option will combine two files by placing the 
                   second file into the first file at any place that 
        you have marked beforehand.
        
        Suppose you have a small, two page story that you want to make 
        references to, so you want to include it in your large, annual 
        report.  Let CUTZIT do this for you.  Automatically. 

        Go into your first file, the report,  at the point where you 
        want to bring in the second file, the story.  Place a word (12 
        characters or less) there, which is STRANGE or UNIQUE and which 
        doesn't exist anywhere else in the report file.  I always use 
        "$$$$$$$$" because that word would never exist normally. 
        
        Put the word (like "$$$$$$$$") on a separate line, by itself. 
           (Actually, you know you can invent your OWN word to use.)
        
        When you choose this option, simply tell CUTZIT what the 
        STRANGE word is - (like "$$$$$$$$") - be sure to make it 
        UNIQUE enough that it can't be found anywhere else in your 
        report accidentally.  
        
        Then you will be asked the question, "Keep it (y/N)?"

        If you press Enter (alone) or press N, then the line with 
        "$$$$$$$$" on it will not be kept and it will not be 
        transferred to your newly formed file.  Then you will not have 
        to use your word processor to delete it. 
        
        CUTZIT will bring the second file into the first when it sees 
        the "$$$$$$$$" and then it will finish copying the rest of the 
        first file for you.  You have "Automatic Merge."  
        
        Of course, if you already have a STRANGE or UNIQUE word in the 
        first file, you don't need to invent one.  Use it.  And tell 
        CUTZIT to KEEP the line containing it (a "Y"es answer to the 
        question, "KEEP IT?" ).  This way is even easier, but it's hard 
        to have a UNIQUE WORD exactly where you want it unless you have 
        put it there previously. 
 
        
                       Binary File Cut Into Sizes/Ratios
        CLOCK B                        AB                      PAGE 10
        ---------------------------------------------------------------  
        PURPOSE:   This will cut ANY FILE into any smaller sizes.
                   NOT ALL FILES ARE TEXT FILES THAT END IN CR,LF. 
        (CR is Carriage Return.  LF is Line Feed.)  This special "CUT"
        will allow you to create smaller files from Large files.  They 
        can be put back together later by DOS - back into a whole file 
        once again.  

        If you have ever had a large file that would not fit onto a 
        single diskette, you'll like this.  Sometimes, even ARCed files 
        won't fit onto just one 360K diskette.  
        
        You could use DOS' BACKUP and RESTORE, but the other person had 
        better be using the same version of DOS or you're out of luck! 

        One way to cut up a Binary file is to tell CUTZIT how many 
        bytes to put into each file created.  CUTZIT will keep a 
        balance for you as you work, so put away your calculator. 

        You decide on the precision of the sizes because you determine 
        the size of the smallest part copied.  Files will be created 
        using CLUSTERS, or CLUMPS of bytes.  (My name for them,-- you 
        won't find it in any DOS book.) If you want the CLUSTER size to 
        be 1 byte, each file can be made exactly as big as you want - 
        to the exact, very byte, but it will take longer to create the 
        files.  If you make the CLUSTER size = 1000 bytes then the file 
        sizes will be multiples of 1000 bytes (44000, 360000, etc.) 
        
        You can make up to 20 smaller files from one large file.  If 
        they aren't small enough, simply run it again and break up the 
        smaller files still smaller.  Using this technique, you can 
        strip the header information from DBASE III files, etc. 

        OR - you may cut up your file using a simple, RATIO technique. 

        What is a Ratio?  A Ratio is "numbers that relate to each other 
        and represent the whole item."   My definition, not Webster's. 

        A ratio is like 1:1, pronounced "one to one."  It means there 
        are two parts (1+1) and both are equal.  Each part is 50%.

        If the ratio is 1:2:4, then there are 7 parts (1+2+4) with the 
        first part = 1/7th, the second part = 2/7ths, and the third 
        part = 4/7ths.  Since 1/7th is 14%, 2/7ths is 29% and 4/7ths is 
        57%, if your File were 10000 bytes, you would get three files: 
        Approximately 1400 bytes, 2900 bytes and 5700 bytes.  Actual 
        sizes depends on the CLUSTER size you picked, but they all will 
        total 10,000 bytes. 

        You can use any of four separators - ":" or ";" or "," or "-"
        You can use 1-2-4 or 1:2:4 or 1,2,4 or 1;2;4 or 1,2;4, etc.

        Use DOS' COPY to put them back together - and use the /B switch. 
        See the section on APPEND, page 15 of this manual.
 
        
                         Vertical Cuts From ASCII Files
        CLOCK V                        A                       PAGE 11
        ---------------------------------------------------------------  
        PURPOSE:   This cuts fields out of records.  This is the most 
                   difficult to explain.  Think of using your scissors 
        to cut Vertically on a file.  This feature will be used mostly 
        on ASCII Data files where each record is delimited by CR,LF. 

        NOTE: The opposite of this CLOCK V funtion is MORE G, which is 
        Gluing two fields back together into one record.  See page 17 
        for information on Gluing. 

        You cannot cut but 10 fields out at one time.  

        If you wish, there can be a "filling" put between the fields.

        For example, if one field was the Names of people (byte 1 to 
        11) and the other field was their phone number (byte 22 to 29), 
        it might look like this BEFORE the 2 CUTS: 

        DAVID ROPERFATHERBLUE765-4321GARNERNC27611

        After the Cut and without a filling, it looks like this:

        DAVID ROPER765-4321

        With a "Filling" of 22 dots, it would expand to look like this:

        DAVID ROPER......................765-4321

        (You decide whether a filling gets added or not.)

        If you are cutting a file vertically, you had better make sure 
        there is something to cut where you specify.  If you tell 
        CUTZIT to cut from byte position 34 to 55 and a record slips in 
        that is only 25 bytes long - we got trouble.  CUTZIT cannot 
        cut Air.  CUTZIT cannot cut if there is NOTHING to cut. 
        How can you cut a section of bytes from 34 to 55 on a record 
        whose length is only 25?  You cannot. 
        
        Hint: Use the PAD feature of CUTZIT, see the next section 
        following this one, PAD with blanks out to 55, and then come 
        back here and try again. 

        If you are cutting just ONE field, from byte 1 to byte 69, and 
        a record slips in that is only 25 bytes long, no problem.  
        Here's why there's NO trouble with this and the paragraph above 
        said "we got trouble" when we cut from byte 34 to byte 55. 
        
        IF you specify the starting byte to be 1 (and note that it 
        must start at position #1) AND IF you are cutting ONLY ONE 
        field, then CUTZIT figures you are just making sure that NO 
        LINES ARE LONGER THAN 69 (in this example) and everything is 
        okay no matter what line sizes are encountered. 
        
 
        
                   PAD Records With A Character On The Right
        CLOCK P                       A                        PAGE 12
        ---------------------------------------------------------------  
        PURPOSE:   Select this to insure that all of your lines of text 
                   or lines of records are at LEAST a Certain size.  
        You can select what character to pad with.  I know, the 
        preposition again. 

        Tell CUTZIT what size to make each record.

        Tell CUTZIT what character with which to PAD.  (...no prep!)

        The Padding Character is added to the RIGHT side of each line, 
        as many as it takes to fill it out.

        You can enter the Pad character in three ways:

        1 - Just enter the character itself (one character, no more)
        
        2 - Enter the HEXidecimal value of the ASCII character, 
            00 to FF (two characters indicate HEX to CUTZIT here)
        
        3 - Enter the decimal value of the ASCII character, 000 to 255 
            (three numbers indicate the use of DECIMAL to CUTZIT here)

        The ASCII value of the period  (.) is 046 or 2E (hex).
        
        If you wanted a period to be the padding character, you would 
        enter either 046 or 2E or the period (.) itself. 

        (Let's look again, if you enter just two characters like 46, 
        you get HEX values, and HEX 46 is "F".  Enter 046, three 
        characters, for DECIMAL Forty-Six.)

        If you just press ENTER, then a Space will be the Padding 
        Character, eliminating any need to know that the space is 
        ASCII 032 decimal, or 20 HEX.  
        
        Who am I kidding, if you're PADDING, you already know what 
        value a space is, don't you? 
 
        
                                 Features List
        CLOCK F                                                PAGE 13
        ---------------------------------------------------------------  
        PURPOSE:   A quick reminder of some of the features of CUTZIT.

        CUTZIT--

        --Cuts ASCII files into a Specified Number of files 
        --Cuts ASCII files into Specifed Sizes or Lengths 
        --Cuts ASCII files into a Specified Number of Lines 
        --Cuts ASCII files Whenever a Phrase or Word occurs 
        --Cuts ANY file, ASCII or BINARY, by the use of a Ratio 
        --Cuts ANY file, ASCII or BINARY, into smaller, specified Sizes 
        --Cuts Vertical Strips (fields) out of ASCII files
        --Glues the Vertical strips (fields) together, side by side 
        --Tests to see whether a file is Binary or ASCII 
        --Finds, then Removes (and/or Replaces) TEXT automatically 
        --Makes new ASCII files from selected lines, Throwing away others
        --Makes a new file everytime DATA changes in a specified Field  
        --Whenever a specified Field contains specified DATA  
        --Merges one ASCII file Into another ASCII file at any Spot  
        --Extracts BASIC program listings from Inside ASCII files 
        --Counts and Compares lines, lengths, statistics, etc. 
        --Pads ASCII Records on the right to make fixed lengths 
        --Trims Characters from the right side of ASCII Records
        --Views ASCII files on screen without DOS syntax  
        --Append one file to another to make a third file 
        --Prints ASCII file to printer without DOS syntax 
        --Performs Rename without DOS syntax 
        --Compares Ranges to Data and keeps those records that pass 
        --AND, best of all, CUTZIT is very affordable.  It's FREE!  
        
 
        
                               Quit Using CUTZIT
        CLOCK Q and MORE Q                                     PAGE 14
        ---------------------------------------------------------------  
        PURPOSE:   The proper way to leave the services of CUTZIT.

        If you have a habit of using the ESCape key to "get out", then 
        you don't have to change your habit.  ESCape works, too.  It's 
        just not there on the MENU.

        If you want to SHELL out to DOS, you can do so at either MENU 
        with an ALT S command.  It's not there in the MENU because most 
        of you don't need to be SHELLing out.  It's dangerous and it 
        doesn't work on everybody's DOS version.  Don't write me if 
        you have problems on your machine.  You're not going to hit ALT 
        and S unless it's deliberate.  Don't worry.  Just don't use it. 

        "Lunchware" will be explained to you.  Get on the phone.  Call 
         a friend you haven't seen in a long time.
        
        My Name and Address will appear if you need to send me a BUG 
        REPORT, a complaint, an idea for a new feature, or maybe, even, 
        a postcard to tell me you like it (naw, that'll never happen). 
                
                                    Thanks.

 
        
                        Append One File To Another File
        MORE A                         A                       PAGE 15
        ---------------------------------------------------------------  
        PURPOSE:   This will take one ASCII file and join another to   
                   the end of it.  A third file will be created.
        It will have a different name from the other two files.

        Again, your Originals will not be changed or appended to.

        You CANNOT join two Binary files using CUTZIT.  Don't try.

        If you have used CUTZIT's BINARY CUT, you cannot use this MENU 
        item here to combine files that you made.  You must use DOS.


        For those of you who would RATHER use DOS, read on....


                      Using pure DOS on ASCII files, it's:    

                             COPY FILE1+FILE2 FILE3  

        and that will make a large FILE3 from two small files, 1 and 2






                      Using pure DOS on BINARY files, it's

                           COPY /B FILE1+FILE2 FILE3 
                                ~~
        Note, this is how you will put back together files made using 
        CUTZIT's BINARY CUT feature.

                   The /B switch is for copying Binary files.  
               Important to use, because ASCII 26 might be inside 
          one of the files, and the /B switch ignores this EOF marker. 

                  The / indicates the use of a special switch

               ------ Read your DOS manual for more help. ------

 
        
                        RENAME A File To Have A NEW Name
        MORE R                         AB                      PAGE 16
        ---------------------------------------------------------------  
        PURPOSE:   Another DOS command is RENAME.  Here's a menu driven 
                   way to do the same thing.  You can take an old name 
        and change it to a new name WITHOUT having to leave CUTZIT.
        
        This feature will work on any file, BINARY or ASCII.

        RENAME them, NOW, from the number extensions that CUTZIT gave 
        them to more meaningful names while you still remember what you 
        did and what each file contains.
        
        
        If you still prefer to use DOS, that's okay.   
        
        In DOS, it's RENAME OLDFILE NEWFILE, remember?

        Example:

        I have just cut up a Big Book called "BIGBOOK.TXT" into four 
        chapters using "Whenever a phrase occurs", CLOCK W, page 7,...  
        So, I would have: 

        BIGBOOK.1
        BIGBOOK.2
        BIGBOOK.3
        BIGBOOK.4

        BIG DEAL, one month from now, I won't remember what they are.
        So I can use DOS to RENAME the 4 chapters, now!

        C:\>RENAME BIGBOOK.1 PREFACE.   
        C:\>RENAME BIGBOOK.2 ORGANIZ.CH1
        C:\>RENAME BIGBOOK.3   RULES.CH2
        C:\>RENAME BIGBOOK.4 REGULAT.CH3
        
        or I use CUTZIT to do the same thing described above as MORE R. 
 
        
                     Glue Two Files Together, Side by Side  
        MORE G                         A                       PAGE 17
        ---------------------------------------------------------------  
        PURPOSE:   This will enable you to place two files side by side 
                   and glue them together - horizontally.  You can use 
        this to put back together what you cut out with Vertical cuts.
        
        Example: If one file had just names in it (6 of them padded 
                 with dots) like this-    

                 ROPER........
                 TRUMAN.......
                 WILSON.......
                 MCDUFFIE.....
                 BRANCATO.....
                 BABCOCK......

        And another file had their ages (each on a line) like this-

                 46
                 48
                 45
                 34
                 25
                 49
                 88
                                   (Notice there are seven ages, not six)
                                   (88 is the seventh age, seventh line)

        Then you could "GLUE" them together to form one file with

                 ROPER........46
                 TRUMAN.......48
                 WILSON.......45
                 MCDUFFIE.....34
                 BRANCATO.....25
                 BABCOCK......49

        You MAY need to PAD the first file with any missing characters 
        such as dots (.) if they are not uniform in length.  Dots are 
        used here to illustrate the character.  Probably your Database 
        would use "Spaces", ASCII 032.  The PAD function is on page 12. 

        When either file runs out of data, the left or the right, the 
        operation stops.  The first file had only six names.  The 
        operation stopped when BABCOCK got 49.  The 88 was not used in 
        the second file.

        The "filler" is optional.  In this example, we did not need a 
        filler because the first file ALREADY had dots on the right of 
        the names.  If you are putting together two files without dots, 
        you can specify what character to make the filler and how many. 
        (Remember, you may ACTUALLY need to use the "space" character 
        as the filler, not a dot.) 

 
        
                    How Many Bytes In File, ASCII or BINARY
        MORE H                         AB                      PAGE 18
        ---------------------------------------------------------------  
        PURPOSE:   This will tell you how many bytes are in a file.
                   You could have used a DOS DIR to do the same thing, 
        but you would have had to get out of CUTZIT and then re-ENTER 
        CUTZIT.

        You could use the "Test Line Lengths of ASCII file" (MORE T) to 
        do the same thing if it's an ASCII file, except this is faster 
        and it works on ASCII or BINARY, both. 
                    

 
        
                        Test Line Lengths of ASCII Files
        MORE T                         A                       PAGE 19      
        ---------------------------------------------------------------  
        PURPOSE:   This feature gives a mini-statistics report on your 
                   ASCII file.

        CUTZIT asks you for a line length to use for comparing.  If you 
        press ENTER, the length of 80 will be used.  Don't use a 
        negative number.  Any decimals will be "integerized" 

        You will get the following information:

        How many Bytes are in the file.
        How many lines have exactly the length you input to compare.
        What is the smallest size found and how many lines are there.
        What is the largest size found and how many lines are there.
        How many lines are smaller than the comparison length.
        How many lines are larger than the comparison length.
        How many lines are in the file all together.

 
        
                   Check Whether The File Is ASCII or BINARY
        MORE C                         AB                      PAGE 20
        ---------------------------------------------------------------  
        PURPOSE:   In case you have a different idea from me, use this 
                   to test whether a file is ASCII or BINARY.

        Each Function in the Manual, like this page, will have a B or 
        an A under the Title to signify that the function is an Ascii 
        or Binary function.  If it can be either A or B, then you will 
        see both A and B together such as AB.  This one is AB.

        I check the first 500 bytes (if the file is that large) for any 
        occurence of High Bit ASCII.  (Actually, CUTZIT checks for 4 
        occurences of it.) 

        High Bit ASCII is also known as HASCII in some circles.  After 
        all, it's ALL really ASCII, isn't it?  Low ASCII 0 to 127 and 
        high ASCII 128 to 255.  ASCII is from 000 to 255, decimal.

        I call Low  ASCII (000 to 127) just plain "ASCII."
        I call High ASCII (128 to 255, HASCII) just plain "BINARY."

        Those are the names to use while using "CUTZIT."

        Put a switch, /%,  AFTER the file name, like "MYFILE.EXE /%" to 
        see the actual percentage and the number of bytes checked, 
        although it's not necessary.  Use it only if you're curious. 

        NOTE: Make sure IF YOU USE the switch /%, you don't use the 
        backslash and try to use \%.  Can you see which way it leans?
        Therefore, I will explain it again, /% is okay....
        and \% is wrong and won't work....

        
 
        
                   Extract A BASIC Program From An ASCII File
        MORE E                         A                       PAGE 21 
        ---------------------------------------------------------------  
        PURPOSE:   This will extract a BASIC program from any ASCII 
                   file. 
        I made this function to retreive BASIC listings hidden in the 
        middle of COMPUSERVE LOG sessions.  Sometimes I just look at 
        programs and capture them in my LOG of the session.
        
        If there are more than one program, CUTZIT will FIND them all - 
        
        (and CUTZIT will also find any lines in the ASCII text which 
        begin with numbers AND are increasing in value.  That's how it 
        works, I've told you now.)

        CUTZIT will also ask you for a range of line numbers to accept.

        If you enter -for example- 550 to 850, then only line numbers 
        between and including 550 and 850 will be saved if they are 
        found at all. 

        You can also use this to your advantage if you want to strip a 
        nice section of code out of another program to use in yours.

        After you get it, RENUM it and MERGE it with CUTZIT...
        
         - the line numbers in the first file will be UNIQUE enough if 
        you include the space after the line number, such as "1300 ", 
        not "1300" 

        Please note:
         ....you cannot use this function on TOKENIZED BASIC.  You must 
        have saved the program with the ASCII switch, such as this: 

                                SAVE "MYFILE",A
                                             ~~~

        See the ",A" - that tells BASIC or BASICA or GWBASIC to save in 
        ASCII format, not Tokenized BINARY.  See your BASIC manual for 
        more information on saving in ASCII format.


 
        
                            View File On The Monitor
        MORE V                        A                        PAGE 22
        ---------------------------------------------------------------  
        PURPOSE:   This is the part I am ashamed of, when there are so 
                   many nice viewing programs on the market.  Vernon 
        Beurg's LIST is THE standard for all others to imitate.  

        BROWSE and SMOOTH, distributed by ZIFF DAVIS, are two more, but 
        not really in the same league/class with Vernon's. 

        Anyway, I figured it would be nice to look at some of the files 
        without having to leave CUTZIT and so THAT is why VIEW is here. 

        You only see the first 80 characters of each line.  It's peek-
        a-boo.  And I calculate where you are --in percent-- so you can 
        tell where you are in the file.  1% is at the beginning, 100% 
        is through (at the END). 

        If a line is longer than 80 characters, you get a reminder of 
        that fact when you notice the rightmost character on the line 
        is a little arrowhead pointing to the right. 

        Sorry, Vernon.

        Sorry, ZIFF DAVIS.

 

                          Print A File To The Printer
        MORE P                         A                       PAGE 23
        ---------------------------------------------------------------  
        PURPOSE:   This will print any ASCII file to the printer like 
                   you can using DOS. 

        I figured it would be nice to do this without having to leave 
        the CUTZIT session.  

        I could have Shelled out and used DOS PRINT, but I wanted 
        CUTZIT to be compatible without crashing if it couldn't find 
        COMMAND.COM, etc., etc. 

        In DOS, this is what you do:

                              COPY FILENAME PRN

                                      or

                              TYPE FILENAME > PRN


                              To do the SAME THING....


         *** new for 1.1 ***
         In version 1.1 of CUTZIT, you may specify a margin to be used when 
         printing to the printer.  

         You may want to add a margin so that the DOCUMENT will fit inside
         a notebook and you will need the extra left margin for the punch 
         holes or the staples.  When asked for a margin, if you [ENTER] 
         without entering any number, then zero will be used and you will get
         the document without any added margin.  If you are printing in ELITE
         which is 12 CPI, then you can print most PICA (10 CPI) documents AND
         ADD A ONE INCH MARGIN by entering the number 12 for the left margin.

 
        
                        Search A File To Replace A Word
        MORE S                        A                        PAGE 24 
        ---------------------------------------------------6---^--------  
        PURPOSE:   To find and replace words or phrases automatically 
                   in a file, program, or database of ASCII records.

        The source file is the name of the file to look IN.

        Yep, I know.  The preposition "in" ......... I'm sorry....
        
        Then CUTZIT will ask you what word (or phrase) to try to find 
        to replace.

        CUTZIT will ask you if the word happens to be in any specific 
        position.  If the word being replaced is "PAGE" and it is in 
        the same position everytime it's found, then you're lucky.  The 
        word, for instance, "PAGE" is found in the same position in 
        this manual - at the Top Right side of every Page at position 
        64, and it's found in various positions in the paragraphs, too. 

        If you specified position = 64, then you would change all of 
        THOSE "PAGE" occurences and NOT the ones INSIDE the paragraphs 
        hopefully.  The position of "PAGE" in the last sentence is 16.
    -----1-----^---2---------3---------4---------5---------6---------7-----

        CUTZIT will ask you what to replace it with?  If you reply with 
        nothing, such as pressing ENTER alone, then the word will be 
        REMOVED.  If you respond with a word such as SHEET, then SHEET 
        will be placed everywhere PAGE was found at position = 64.

        Wow, it's hard to explain.  It's easier to use.  Really.

        If CUTZIT cannot fullfill its obligation to replace ALL that it 
        finds, then you will get a marker in your newly formed file 
        informing you that you need to take the matter into your own 
        hands.  The extra line will say: 
        "****** all the instances didn't get changed in the above line." 

        CUTZIT will tell you on the screen that it failed, also.  
        Look, you can't make those lines TOO big - the limit is set at 
        512 characters for now.  Maybe it could be bigger.  Let me know 
        if this gives you a problem.  (OR read the next NOTE:)
        
        NOTE: If you have PCTOOLS or NORTON Utilities, you can change 
        it on disk.  I made it a 5 character string "00512" so you can 
        find it easily. If you change it, don't distribute your own
        personal, changed version of CUTZIT to others, please. 

        This feature is mostly used for one line records of Data.

        Maybe the word "CLARK" was mispelled "CLRAK" in a report and you 
        don't know what data record it is, but you do know that all 
        NAMES are in position 4 of every line, every record. 
        
        Tell CUTZIT to find "CLRAK" at Byte 4 and change it to "CLARK" 
        for you. 

 
        
                     When A Field CHANGES, Make A New File
        MORE W                         A                       PAGE 25   
        ---------------------------------------------------------------  
        PURPOSE:   CUTZIT will make a new file everytime a certain 
                   position CHANGES in an ASCII file.

        This is to be used on Data which is SORTED, obviously.

        Use DOS' SORT program to SORT if needed.  Here's the syntax:
        "SORT < UNSORTED > SORTED"      and here's an example using an 
        unsorted file called RECORDS.DTA on drive A:.  A sorted file on 
        B: called RECSORTD.DTA will be created (sorted on position #9.)

                   SORT /+9 < A:RECORDS.DTA > B:RECSORTD.DTA 

        If you tell CUTZIT what byte to look at and for how many bytes 
        to look at, everytime that field - or chunk - CHANGES, a new 
        file will start collecting that record and all that follow - 
        until the field CHANGES again.

        Consider these 4 UNsorted data records:

        1        10        20        30  <-----This is a ruler for you.
        |        |         |         |         Byte positions 1 to 30
        |        |         |         |         are marked with a "|".
        |        |         |         |        (Position 9 is left of 10)
        ROPER   BLUE  140CLERK     189
        WILSON  BLONDE160TYPIST    155
        MCDUFFIEBLACK 133MUSICIAN  121
        TRUMAN  BLACK 177PROGRAMMER198
        |        |         |              When they are SORTED on the "B",
        |        |         |                   at position = 9,
        |        |         |                   they will be as follows:
        MCDUFFIEBLACK 133MUSICIAN  121
        TRUMAN  BLACK 177PROGRAMMER198
        WILSON  BLONDE160TYPIST    155
        ROPER   BLUE  140CLERK     189
        |        |         |         |
        |        |         |         |
        1        10        20        30  <-----This is a ruler for you.
        
        If you look at postion 9, for TWO bytes (#9, #10), they NEVER 
        change...they are all "BL".  Look at JUST those 2 bytes!
        
        BLack, BLack, BLonde, BLue - four "BL" words - 2 bytes 
        
        You would get just one file made....THEY NEVER CHANGED.  
        They're all "BL", if you look at JUST two bytes (#9, #10!) 

                                 B U T . . . .
        If you look at the same position 9 for 3 bytes (#9,#10,#11), 
        they CHANGE TWICE.  Once from "BLA" to "BLO" and then again 
        from "BLO" to "BLU".  Use 3 bytes and you get 3 files made. 

        The first file would contain the MUSICIAN and PROGRAMMER.
        The second file would contain the TYPIST.
        The third (and last) file would get the CLERK.
 
        
                    Data Range Must Be Passed To Keep Record
        MORE D                         A                       PAGE 26
        ---------------------------------------------------------------  
        PURPOSE:   Here, the best way to describe it is this.  If you 
                   had DATA containing peoples' weights in byte 
        positions 11, 12, and 13 (such as 188 pounds, etc.)  You 
        could tell CUTZIT to save all the records of people who weigh 
        between 125 and 198 pounds.  (All those who pass the "test")
        
        You will be prompted for "Start of DATA RANGE" 
        Let's use 125 as in the above example.  Enter 125.

        Then you will be prompted for "End of DATA RANGE"
        Let's use 198 as in the above example.  Enter 198

        CUTZIT will ask "What Byte Position is the above DATA FOUND?" 
        Pretend that the Data starts on position 11.  You enter 11.
        
        Then you CHOOSE whether to treat the DATA as NUMBERS or not.
        Since these ARE numbers, you may want to treat them as Numbers 
        for the comparisons being made.
        
        CUTZIT makes a new file containing all the records of people 
        who fall in the range of 125 to 198, and including 125 and 198.  
        
        It's up to you to know how your data looks and whether it needs 
        a preceeding zero or blank for that field.  All comparisons can 
        be done in ASCII or with NUMBERS.  In ASCII, "0200" comes before 
        "100." (0 before 1).  But, NUMERICALLY, 100 comes before 200.  
        If you have DATA like "ABC" and choose NUMBERS then "ABC" = 0

        If you can get your hands on a statistical package called 
        "EPI-INFO" from the CDC in Atlanta, do it.  Yes, it's FREE 
        PUBLIC DOMAIN.  Handles over 32,000 records, draws graphs, 
        write your own questionnaires with its editor, write "programs" 
        and it's even faster than the commercial, $600 statistical 
        programs, and "EPI-INFO" is STILL VERY EASY TO USE.  
        
        Don't write to me.... send off, on your OWN letterhead, to the 
        people who distribute "EPI-INFO" for the Centers for Disease 
        Control.  They are:         USD, INC.
                             2156-D West Park Court
                        Stone Mountain, GA 30087, U.S.A

        Four Disks, a printed 157 page manual, and shipping: prepaid or 
        credit card, $18.00 total, at THEIR cost...Phone (404) 469-4098 
        At the time of this writing, it's in version 3.0 -- with version 
        4.0 being promised in the "Late Summer of 1989,"- quoting USD.   

        Public Domain means you can use it for free, it doesn't mean you 
        get 4 diskettes or printed 157 page manuals for free.  C'mon now.
       
        Back to CUTZIT:  If you END the name of the file to be made 
        ".EPI", it will automatically bring in the header of the Epi-
        Data file (.REC) to create a subset of the original data. 
        (CUTZIT supports records of 77 bytes or less in this EPI mode) 
       
 
        
                 Trim Characters from the Right Side of Records
        MORE T                         A                       PAGE 27   
        ---------------------------------------------------------------  
        PURPOSE:   CUTZIT can look at lines of a file and remove 
                   characters from the right side according to what 
        character you desire to trim away.  You may enter the single 
        character or you may use the <, >, or = signs described below 
        for ranges if you are the "advanced user."

        If that character is not present, then of course, no cutting is 
        performed.  CUTZIT trims only what you want it to trim.
        
        If you tell CUTZIT to trim away all the SPACES it finds, then 
        CUTZIT will trim away all the SPACES it finds at the right side 
        of a line (record).  SPACES are hard to see in a word 
        processor, but not hard for CUTZIT to find.  A Space Character 
        is ASCII 032 decimal. 

        If you are trimming dots and your line looked like this:

        ABC...DEFGHIJK.............
        
        After you told CUTZIT to trim away all the dots (.), it would 
        look like this:

        ABC...DEFGHIJK               

        Notice that CUTZIT trims from the Right side and stops when it 
        no longer finds the character you're trying to trim.

        If you want to trim using Comparisons, use > for Greater than
                                               use < for Less than
                                               use = for Equals

        Use 2 characters for Hex numbers and three characters for 
        decimal numbers like in the PAD function (see CLOCK P for more 
        help on my syntax of two and three characters for Hex and 
        Decimal numbers): 20 is HEX, 032 is decimal, both are the same.

        Examples:
        If you wanted to trim all characters greater than Z , then...

        You could input ">Z"           (use the actual character itself)
                    or  ">5A"          (the HEX number for Z is 5A)
                    or  ">090"         (the decimal number for Z is 090)

        USE NO EXTRA SPACES WHEN INPUTTING THE 4 CHARACTERS (Maximum)
            ~~~~~~~~~~~~~~~
              "> 90" is WRONG and ">090" is RIGHT (see the Space?) 

        You could say "<032" for all characters less than SPACE (032).

        You could say "=254" for the character known as ASCII 254.
        You must do it like this because you can't enter a character 
        254 from the keyboard.  (Okay, I know you CAN, but use this way)
        (If you put "=FE", that's okay.  Hex FE is decimal 254, too.
 
        
                                      DIR                      
        CLOCK D                        B                       PAGE 28   
        ---------------------------------------------------------------  
        PURPOSE:   You may need to look at a diskette to remember
                   what the names of the files are that you want to CUT
        or inspect.  You will be prompted for the Drive letter such as 
        A: or B: in which the diskette rests.  

        You may use wildcards like in DOS.  

        Example:  to find all the files with extensions named ".DOC"
                  on a diskette in drive A: you would issue the following

                  A:*.DOC

        If you make a mistake or press [ENTER] with no entry, you will get the 
        main menu again.



 

                                VERSION HISTORY                PAGE 29
        ---------------------------------------------------------------  

        Version 1.0 - March 1989 - CUTZIT is born with 2 Screens, 
                                   QuickBASIC 3.0 was the doctor.

        Version 1.1 - Jan. 1990 - Cutzit adds optional Margin when 
                                  printing a file.  Adds D for Looking
                                  at a DIRectory.  Debugs ERROR CODE
                                  reporting.  Change of P.O.Box number.
                                  Changed some wording in Menus (minor).
                                  Compiled with QuickBasic 4.5 for 
                                  quicker display of screens.





                                 *** NOTICE ***

        You may include CUTZIT and CUTZIT.DOC in any program you give 
        away or call Shareware, etc.  Understand that there may NOT be 
        a charge for CUTZIT other than the normal and customary charge 
        for copying which is less than $10.00.  You could charge up to 
        $9.99 for copying - you CANNOT charge $10.00, get it? 

        I intend for this program to HELP others, therefore, I hope 
        that you will take your friends to lunch and give them a copy.   
        That is enough payment for me.  

        If you want to write to me with ideas, great....thanks, but be 
        sure you include a self addressed, stamped envelope if you  
        want me to write back to you.  I cannot make disk copies, so do 
        not send me diskettes to do that.  

        Then how do you get updates?  What to do?  Read on...MacBeth

        Get the newest versions from the distribution house that you 
        got this from.  I will keep them up to date with the latest 
        versions.  They do us a great service by distributing all this 
        software - 
        Lunchware, Shareware, Public Domain, etc.   My thanks to them. 
        +-------------------------------------------------------------+
        |       David Roper - P. O. Box 1353 - Garner, N.C. 27529     |
        +-------------------------------------------------------------+

         If you have gotten this by MODEM, then you have gotten it all

```
{% endraw %}

## FILE3097.TXT

{% raw %}
```
Disk No: 3097
Disk Title: CUTZIT
PC-SIG Version: S1.0

Program Title: CUTZIT
Author Version: 1.1
Author Registration: None.
Special Requirements: No special requirements.

There are many ways to "skin a cat".  And many ways to change a text
file or pull material from it.  This program has most of those tools
that let you make your text or binary files what you want them to be.

It not only lets you cut up your files into smaller pieces, but it lets
you cut them vertically as well as by lines or phrases.  You could
easily cut out data tables using the vertical cutting process.  You will
need some knowledge of the placement of text by bytes (or, the character
position in the file).

ASCII text files can be divided into a specified number of smaller
files, or by a specified number of lines to be in each file, or by a
specified size in kilobytes for each file.  Binary files can be cut into
a specified ratio or by specified file size in kilobytes.  Files can be
merged, appended, or pasted together side by side.  You can also extract
multiple vertical slices from a text file.  Many other text manipulation
features are included, such as search and replace text in a file,
padding or trimming characters on the right side of the file, create a
new file upon a phrase occurrence, and output of various statistics on a
text file.


PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3097

     Volume in drive A has no label
     Directory of A:\

    CUTZIT   DOC     63505   1-21-90   3:33p
    CUTZREAD ME        836   1-30-89  10:17a
    CUTZMAN  BAT       995   1-30-89  10:04a
    CUTZIT   EXE    125120   1-21-90   3:33p
    GO       TXT       924   8-24-92   6:04a
    GO       BAT        38   1-31-91  12:58a
    FILE3097 TXT      1475   8-24-92   6:17a
            7 file(s)     192893 bytes
                          125952 bytes free
