---
layout: page
title: "PC-SIG Diskette Library (Disk #245)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0245/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0245"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "ULTRA UTILITIES UNARCHIVED VER. OF 133"

    The Ultra-Utilities are a powerful collection of tools for the PC owner
    interested in getting more from his system.  U-MIND is an "intelligent"
    database generator which allows you to produce clean, sophisticated
    programs very quickly.  U-OPT will help clean-up BASIC code so that it
    will compile tighter and faster.  More of these utilities are
    available, in squeezed format, on Disk 133.
    
    How to Start:  For instructions on running BASIC programs, please refer
    to the GETTING STARTED section in this catalog.  To run an EXE program
    simply type its name and press <ENTER>. To read DOC or TXT files simply
    enter TYPE filename.ext and press <ENTER>.
    
    Suggested Registration:  Ultra-Utilities $30.00
    
    File Descriptions:
    
    U-MIND   DOC  Documentation for U-MIND  (51K)
    U-MIND   BAS  Ultra-Mind program  (Intelligent database)
    SKELETON BAS  Used with Ultra-Mind
    U-OPT    EXE  Ultra-Optimize program
    DOC42    TXT  Ultra-Utility documentation - Part 2  (23K)
    DOC41    TXT  Ultra-Utility documentation - Part 1  (52K)
    U-OPT    DOC  Documentation for O-OPT  (2K)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #245, version V1 
 
The following is a list of the file checksums which should be produced by
the CRCK4 program on this disk.  If the CRC numbers do not match the following
list you may have a bad file.  To use type:  CRCK4 <filespec>
 
CRCK4 output for this disk:
 

CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  U-MIND  .DOC         CRC = DB 50

--> FILE:  U-OPT   .DOC         CRC = 35 DF

--> FILE:  DOC41   .TXT         CRC = 2C 95

--> FILE:  DOC42   .TXT         CRC = D1 68

--> FILE:  U-OPT   .EXE         CRC = CB F4

--> FILE:  SKELETON.BAS         CRC = F5 E0

--> FILE:  U-MIND  .BAS         CRC = 15 9A

 ---------------------> SUM OF CRCS = E6 9A

DONE 
 
These and other Public Domain and user-supported programs from:
 
PC Software Interest Group (PC-SIG)
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## DOC41.TXT

{% raw %}
```

           
          
                         :::::::::::::::::::::::::::::::::::::::
                         :::::: NEW RELEASE! VERSION 4.00 ::::::
                         :::::::::::::::::::::::::::::::::::::::
          
          
          
          
          
          
          
                    ==================================================
                    I                                                I
                    I                                                I
                    I         The FreeSoft Company Presents:         I
                    I                                                I
                    I         ---> The Ultra Utilities <---          I
                    I           "The Wizard's Apprentice"            I
                    I                                                I
                    I      User's Manual And Guide To Operation      I
                    I                                                I
                    ==================================================
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
            Copyright (C), 1983 by The FreeSoft Company.  All rights reserved
                        Version 4.00, First Release: January, 1984
          
          This manual and the accompanying programs U-ZAP.EXE, U-FORMAT.EXE and 
          U-FILE.EXE may be copied and shared freely as long as certain 
          duplication rules are adhered to.  Please see Appendix A of this 
          manual for the FreeSoft duplication policy.  Anyone found duplicating 
          any part of this manual or the programs mentioned above not according 
          to the policies in Appendix A of this manual will suffer from guilt 
          for eternity.  Think about it...
                                 Ultra-Ultility Warranty
          
          The programs U-ZAP.EXE, U-FORMAT.EXE and U-FILE.EXE and this manual 
          are provided on an "AS IS" basis without warranty of any kind, 
          expressed or implied, including but not limited to the implied 
          warranties of merchantability and fitness for a particular purpose.  
          The entire risk as to quality and performance of these programs and 
          this manual rests solely with the user.  Should any part of these 
          programs or this manual prove defective, the user will assume the 
          entire cost of all necessary repair, servicing, and correction.  In 
          no event will The FreeSoft Company be liable to you for any damages, 
          including any lost profits, lost savings, or other incidental or 
          consequential damages arising out of the use or inability to use 
          these programs or this manual, even if The FreeSoft Company has been 
          advised of the possibility of such damages.  This warranty gives you 
          specific legal rights, and you may have other rights which may vary 
          from state to state.  Some states do not allow the exclusion of 
          implied or consequential damages so parts of the above may not apply 
          to you.  By operating any of the above programs or using any part of 
          this manual, you acknowledge that you have read this agreement, 
          understand it, and agree to be bound by its terms and conditions.  
          You further agree that it is the complete and exclusive statement of 
          the agreement between us, which supercedes any proposal or prior 
          agreement, oral or written, and any other communications between us.
          
          If you have registered, feel free to write us with any questions you 
          might have concerning our products.  If there seems to be a need for 
          it, we may open up a telephone hotline or bulletin board for fast 
          service.
          
          WE WILL OFFER ABSOLUTELY NO SUPPORT TO UNREGISTERED USERS.  IF YOU DO 
          NOT CHOOSE TO REGISTER, YOU ARE COMPLETELY ON YOUR OWN!  ANY LETTERS 
          OR QUESTIONS FROM UNREGISTERED USERS WILL BE IGNORED.  SO THERE!
                                    Table Of Contents
          
          Introduction.................................................. 1

                                   Section I: Ultra-Zap
          Display/Modify Disk Sectors................................... 2
          Display/Modify File Sectors................................... 4
          Copy Disk Sectors............................................. 5
          Fill Disk Sectors............................................. 5
          Search For Bytes In Disk Sectors.............................. 5
          Search For Bytes In File Sectors.............................. 6
          Modify Sector Fill Byte....................................... 6
          Modify Display Radix.......................................... 6
          Interrogate Disk Sectors...................................... 7
          Toggle Menu Alert Tone........................................ 8
          Display/Modify Disk Parameters................................ 8     
          How To Display/Modify Non-Standard Sectors.................... 9

                                 Section II: Ultra-Format
          Format A Standard Track.......................................10
          Re-format A Standard Track Without Erasing Old Data...........10
          Format A Non-standard (Copy-Protected) Track..................10
          Display/Modify Disk Parameter Table...........................11
          Modify Display Radix..........................................11
          
                                 Section III: Ultra-File                      
          Display File's Directory Information..........................12
          Assign Or Remove System Status................................12
          Assign Or Remove Hidden Status................................12
          Display List Of Sectors Allocated To File.....................12
          Build A File From Scratch.....................................13
          Attempt To Restore An Erased File.............................13
          Produce A Map Of Diskette.....................................13
          Selectively Purge Files.......................................14
          
                                  Section IV: Appendices                      
          Appendix A: The FreeSoft Duplication Policy...................15
          Registration Form.............................................18
          Invoice.......................................................19
          Appendix B: A Brief Discussion Of Diskette Formats............20
          Appendix C: Version changes and additions.....................21
          (1)                          Introduction
                                       ------------
          
          The Ultra-Utilities are a powerful collection of programs that will 
          allow you complete access to the power of your IBM-PC's disk drive 
          controller circuitry and PC-DOS disk operating system.  With this 
          power also comes the abilty to do terrible damage to your diskettes 
          if you make a mistake at the wrong time.  To avoid this:
          
             A) Make a copy of the Ultra-Utilities and keep the originals in a  
                safe place.  When using the copies, remove the diskette 
                containing the Ultra-Utilities after the desired program has    
                loaded.  It is not necessary for this diskette to remain in the 
                disk drive after the program has begun execution.
          
             B) When working on other diskettes, ALWAYS WORK ON A COPY!  The 
                time it takes to backup a diskette is well worth it effort. If  
                you are working on a diskette that you are unable to yet make a 
                copy of, at least place a write-protect tab on it and work 
                slowly and cautiously.
          
          To use these programs properly you will need:
          
             1) IBM-PC with at least 64K RAM, one single or double-sided disk   
                drive, and an 80-column display.  Because of the wide variety   
                of IBM-PC configurations and the varying levels of 
                "compatibility" with PC clones, we cannot and do not support
                questions concerning support of other equipment configurations.
                Additional memory may be needed if you boot under DOS 2.00.

             2) DOS 1.10 or 2.00: Again, if you try to use other versions of 
                PC-DOS, you are on your own.  These programs have been tested   
                only on PC-DOS versions 1.10 and 2.00.
          
          You do not have to be a "hacker" or be able to multiply four digit 
          hexadecimal numbers in your head to be able to use the 
          Ultra-Utilities.  If you are more technically inclined, you'll no 
          doubt find many uses for the powerful features of these programs.  If 
          you're not so technically inclined, you'll probably use these 
          programs for "snooping" and educational purposes, and will first want 
          to read the chapter on Modifying The Display Radix.  When first 
          executed, the Ultra-Zap and Ultra-Format programs display all numbers 
          in hexadecimal format (base 16).  If you are not comfortable using 
          hex values, use that function to change all printed values to decimal 
          (base 10).
          
          Features of the Ultra-Utilities
          -------------------------------
          1) The Ultra-Utilties use a special input procedure that allows you 
             to only enter in characters appropriate to the question being 
             asked.  In most cases, a number of small boxes will appear next to 
             a question.  These boxes tell you that the program is waiting for  
             your response, as well as the maximum number of characters you may 
             type to answer the question.  If no boxes are displayed, a single  
             key press is all that's needed, and it is not necessary to press   
             the <ENTER> key afterwards.
          
          2) Although the Ultra-Utilities will display numeric values in the    
             format specified by the display radix, you can input numbers using 
             any of three allowable radices without regard for the display 
             radix.  Decimal numbers should be entered normally, without any
          (2)
             prefix.  Octal numbers should be entered using the prefix &O, and 
             hexadecimal numbers should be entered using the prefix &H.  This 
             is in keeping with the standard numeric entry procedures of IBM    
             BASIC.  Example: the decimal number 17 could be entered as:
                                17 (decimal)
                              &H11 (hexadecimal)
                              &O21 (octal)
          
          3) If you have a lineprinter installed and selected, you can obtain   
             a hardcopy of the screen at any point by pressing the "PrtSc" key  
             while holding down the <SHIFT> key.  This is also in keeping with  
             BASIC operation.
          
          4) The Ultra-Utilities are completely menu-driven.  This means you'll
             never have to guess which cryptic command the computer is waiting  
             for: all of your available options are displayed on the screen.    
             Although some folks prefer non-menu-driven programs, we feel it is
             a necessary deterrent to possibly catastrophic mistakes made by 
             the wrong guess with these programs.
          
          5) Ultra-Zap will allow you to display and modify sectors of any 
             length or name (such as those used in copy-protected software).    
             Although this is by no means meant to be a "pirate" program, it    
             is of great educational use for the novice "zapper".  It can be
             used in conjunction with Ultra-Format to create your own copy-
             protected diskettes.
          
          6) IN MOST CASES, answering a prompt with the single letter "Q" 
             followed by the <ENTER> key will CANCEL THE CURRENT FUNCTION and   
             RETURN YOU BACK to the main menu.
          
          GET READY TO "ZAP" AWAY YOUR TROUBLES!
          --------------------------------------
          Hopefully, you have restrained you anxiousness to get started with 
          the Ultra-Utilities and have taken at least a few moments to scan 
          this manual.  We hope that you have fun with these programs and that 
          they earn a permanent home in your software library.  Don't forget to 
          look over the duplication policy in Appendix A of this manual.  It 
          explains how the Ultra-Utilities can even earn you a few extra bucks 
          just for spreading it around.
          
          Whenever you are finished with an Ultra-Utility program, always exit 
          by choosing the Q>uit function from the main menu.  The 
          Ultra-Utilities change some important tables in memory that DOS 
          expects to be present and correct, and the "Q" function restores them 
          to their original values.

          One last caveat... this manual is by no means meant to be a tutorial 
          on the diskette storage techniques of the IBM-PC and PC-DOS.  We 
          recommend for further study the PC-DOS manual, the IBM Technical 
          Reference manual, and Peter Norton's "Inside The IBM-PC" published by 
          Robert J. Brady.
          
                               Display/Modify Disk Sectors
                               ---------------------------
          
          This function, along with the Display/Modify File Sectors function is 
          the real meat of the Ultra-Zap program.  It gives you the ability to 
          "snoop" around your diskettes, modify bytes or characters, and
          (3) 
          encrypt or decode encrypted sector data.
          
          When you select this function, you'll first be prompted for the side, 
          drive, track and sector number of the first sector you wish to look 
          at.  Remember, if you only have a single-sided disk drive, you will 
          always specify side 0.  If you are unclear what to enter, take a 
          moment to peruse Appendix B of this manual.
                                                                  
          Once you have entered the above info, you will be instructed to mount 
          the diskette on the appropriate drive and press any key.  Once you 
          have done so, the disk drive should come to life and you will enter 
          what we call the "search mode".
          
          The search mode displays a straight dump of the ASCII characters in a 
          sector, allowing you to find the information you're looking for in a 
          hurry.  Only those characters with ASCII codes between 32 and 127 
          (decimal) will be displayed.  The rest will be displayed as periods.
          
          There are several command keys active in the search mode:
          UP ARROW - increments the track by one and displays that sector.
          DOWN ARROW - decrements the track by one and displays that sector.
          RIGHT ARROW - increments the sector by one and displays that sector.
          LEFT ARROW - decrements the sector by one and displays that sector.
          "5" KEY ON NUMERIC KEYPAD - switches from Side 0 to Side 1 and vice-  
             versa (if you have double-sided drives) and displays that sector.
          "M" key - enters "modify" mode.
          "Q" key - returns to Ultra-Zap main menu.
          
          In the "modify mode" the sector information will be displayed a bit 
          differently.  Select a random sector and let's go through the display 
          together.  The top line reiterates the current side, drive, track, 
          and sector number of the sector you are working on, as well as the 
          current display radix.  The second line just identifies what is in 
          the columns below.  The third line is a template for the "ones" digit 
          of the offset address- we'll come back to this in a moment.  The 
          fourth line starts with the actual sector data.  The leftmost column 
          of these rows show the number of bytes offset into the sector.  Then 
          comes the sector data in numeric form.  The rightmost column contains 
          the ASCII equivalent of the numeric data.  If you are using 
          hexadecimal for the display radix, there will be 16 rows of 16 bytes 
          each.  Decimal uses 20 rows X 10 bytes, and octal uses 16 rows X 
          8 bytes.  If you wanted to find the fifth byte in a sector, you 
          would go to the row marked with the offset address 0000 and scan 
          across under the template in line three of the display marked 
          "5".  It's really pretty easy to find an individual byte in a snap 
          once you get used to this "offset address/template column" 
          arrangement.
          
          The bottom of the screen tells you your available choices, as well as 
          the current modify mode for byte replacement (either "NUM" for entry 
          of numeric replacement bytes, or "ASC" for the direct entry of ASCII 
          replacement characters from the keyboard).  You can toggle back and 
          forth between ASC and NUM modes by choosing the "C" choice.  The "Q" 
          choice returns you to the search mode.  The "I" and "D" choices allow 
          you to add or subtract a number from each of the bytes in the sector 
          for either encrypting or decoding encrypted sector data.  The "M" 
          choice takes you into what we call "replacement mode".  The other two 
          choices are "N" and "P".  You will notice that all of the bytes in a 
          standard 512-byte disk sector aren't displayed all at once in the
          (4) 
          display screen.  What we did is divide the sector into "pages" of 
          data.  Use the "N" key to look at the next higher display "page" of 
          sector data.  Use the "P" key to look at the next lower display page 
          of data.  Depending on the display radix and sector size, each sector 
          may actually be displayed as several pages.
          
          If you wish to modify the bytes in a sector, you should first choose 
          the modify mode you wish to use, and the "N" and "P" choices to 
          display the "page" that contains the bytes you wish to modify.  Once 
          you have done so, select the "M" option to enter the "replacement 
          mode".  In the replacement mode, an inverse cursor will appear in the 
          first byte of that page.  Use the arrow keys to position the cursor 
          on the byte you wish to modify and then press the spacebar.  If you 
          are in NUM mode, you will be prompted to enter in the new value.  For 
          each byte you wish to modify in the NUM mode, you will have to press 
          the spacebar as above.  However, in the ASC modify mode, you just 
          press the spacebar once.  You can then type in characters from the 
          keyboard continuously.  When you are finished modifying bytes in 
          either mode, just press the <ENTER> key.  Note that in the ASC mode 
          you can enter in any ASCII character that appears on the keyboard 
          except the <ENTER> key.  If you wish to enter in a character that 
          does not appear on the keyboard, just hold down the ALT key and type 
          in the three-digit ASCII code of the character on the numeric keypad, 
          just as you would in BASIC.
          
          One more note about the "replacement mode": any ASCII characters that 
          are not between codes 32 and 127 are displayed as dots.  This is 
          because some codes will cause your printer to do weird things if you 
          try to get a screendump using the <SHIFT>-PrtSc combination.  If you 
          wish to look at the actual character for non-alphanumeric characters, 
          just move the cursor over the byte in the replacement mode.  The dot 
          will be replaced with the actual character in the ASCII equivalent 
          column.
          
          After you have pressed the <ENTER> key to end replacement, you will 
          be asked if you wish to update the disk sector with your replacements 
          or just cancel all changes.  Up to now, nothing on the diskette has 
          actually been changed.  Instead, any changes you made were done on a 
          copy of the disk sector in memory.  If you cancel, you will be 
          immediately returned to the main menu with no changes recorded.  If 
          you select the update choice, your changes will be recorded on the 
          disk sector permanently (so be careful, for heaven's sake!).
          
          Whew!  That's quite a bit to swallow in one reading...  My advice is 
          to read this through, practice on a "scratch" diskette (one you can 
          afford to destroy) and then re-read this chapter for the finer points 
          of this powerful feature of the Ultra-Zap program.

                               Display/Modify File Sectors
                               ---------------------------
          
          This function is used to root around the program and data files that 
          are on your diskettes.  By using this feature, you can do such things 
          as make easy corrections to data files and change ASCII messages in 
          the programs.  We do not condone people going through and wiping out 
          an author's name or copyright notices.  Such things are not only 
          childish, they deprive the author and software company of the money 
          and credit they deserve, and stifle creative folks from producing
          better software for us all.  However, who can resist going into
          (5) 
          COMMAND.COM and changing the sign-on message to "Ed Spread's Garbage 
          DOS"?  Oh well, it's a dilemma for the philosophers.  Have fun...
          
          This function operates almost exactly like the Display/Modify Disk 
          Sectors function with a few exceptions that pertain to disk files.  
          Once you are familiar with that function, you should have no trouble 
          with this one.  One important difference we will note here is that in 
          the search mode, the up arrow, down arrow, and "5" key have no 
          function.  The left arrow and right arrows still move backwards and 
          forwards through the file sectors.
          
          You should also notice that all file sectors are displayed as 
          physical (we call them logical) sectors.  That means that even if you 
          created a random access data file with a record length of 53 bytes, 
          each sector in this function will still be displayed as 512 bytes.
          
          You will not be able to use this function on any files that contain 
          the "HIDDEN" or "SYSTEM" attributes in their directory entry.  Use 
          Ultra-File to remove these attributes.

                                    Copy Disk Sectors
                                    -----------------
          
          This function is used to copy disk sectors from one part of a 
          diskette to another, or between diskettes.  Copying is not done with 
          regard to the prior contents of the destination sectors, and any old 
          data will be destroyed.
          
          Use of this function is pretty straightforward.  If the specified 
          drives for the source and destination diskettes are the same, the 
          program will ask you if the source and destination sectors are on the 
          same diskette, if they are not, you will be prompted to mount the 
          appropriate diskette during the copying process.  Sectors are copied 
          consecutively, according to the progression order described in 
          Appendix B of this manual.
          
                                    Fill Disk Sectors
                                    -----------------
          
          This function is used to fill one or more sectors entirely with a 
          repeating single byte value.  This byte value is selected using the 
          Modify Sector Fill Byte function and has a default value of &HF6 (246 
          decimal) upon program execution.  This is the same as the default 
          value used in formatting fresh sectors by the DOS FORMAT program.
          
          Again, this function is pretty straightforward.  Sectors are filled 
          consecutively according to the progression order described in 
          Appendix B of this manual.
          
                             Search For Bytes In Disk Sectors
                             --------------------------------
          
          This function is used to quickly locate the position of a specified 
          sequence of bytes or ASCII characters in disk sectors.  The sequence 
          of desired bytes or characters may be up to 15 long.  You will first 
          be asked if the sequence is numeric or ASCII.  Once you have chosen, 
          the program will ask you how many bytes or characters long the 
          sequence is.  Next, you will be prompted to enter the bytes or 
          characters for the search sequence in order one at a time.
          (6)
          Next, you will enter the side, drive, track, and sector number for 
          the start of the search, as well as the number of sectors to search 
          through.  Then the search begins, moving consecutively through 
          sectors as described in Appendix B of this manual.
          
          If the sequence is found in a searched sector, a message will be 
          displayed telling you the side, drive, track, and sector number 
          containing the sequence as well as the offset address of the sequence 
          within that sector.  When each match is displayed, you have the 
          ability to abort the search or continue from that point.  If no 
          matches are found, a message will be displayed telling you so at the 
          end of the search.
          
                             Search For Bytes In File Sectors
                             --------------------------------
          
          This function is operates just like the above Search For Bytes In 
          Disk Sectors except that file sectors are searched instead.  Again 
          you won't be able to use this function with files marked in their 
          directory entries as "HIDDEN" or "SYSTEM" files.  Use Ultra-File to 
          remove these attributes before using this function.
          
                                 Modify Sector Fill Byte
                                 -----------------------
          
          This function allows you to change the default sector fill byte 
          value.  There are essentially two reasons to do this:
          
          A) For use with the Fill Disk Sectors function
          
          B) Before any disk sector or file sector is read from the disk in the 
             Display/Modify functions, the memory buffers that will contain a 
             copy of the sector data are first "flushed" with the sector fill 
             byte value.  If you ever run across a sector with a CRC-type error 
             (either intentionally formatted or caused by diskette wear/tear) 
             the Display/Modify functions will report the error.  Normally, if  
             you do not select the re-try function when a disk error occurs, 
             you are returned to the main menu.  In this instance, Ultra-Zap    
             will allow you to go ahead and look at the contents of the sector. 
             Some of the data may look funny due to effects of the error, but 
             at least you'll be able to have a look at where the CRC error      
             botched things up.  We suggest you select a sector fill byte of    
             zero for this type of work, since it will quickly show you where   
             the read data ends.
          
                                   Modify Display Radix
                                   --------------------
          
          This function is used to present all displayed numeric values in a 
          form you are most comfortable with.  When zapping, some folks 
          naturally hanker to hexadecimal (base sixteen); others are lost 
          without good old decimal (base 10).
          
          Still, there are actually those around that cut their milkteeth on a 
          Sperry-Univac and can't cut it without octal (base eight).  Whatever 
          you folks choose as your strokes, Ultra-Zap is well equipped to make 
          life easy for you.
          (7)
          If you are a beginning zapper, We suggest the first thing you do upon
          executing Ultra-Zap is to choose this function and select the decimal 
          radix.  You Sperry-Univac people can do the same except choose octal. 
          For those of you who learned to count with sixteen fingers, you won't 
          need to do anything.  Hexadecimal is the default radix for Ultra-Zap.
          
                                Interrogating Disk Sectors
                                --------------------------
          
          So, you just bought a protected diskette and you just can't wait to 
          find out what makes that thing tick, eh?  This function gets into the 
          guts of a diskette's format and tells you all of its secrets.  While 
          it's great for just snooping around, it's best use will come by being 
          used in concert with the special formatting abilities of the 
          Ultra-Format program.
          
          This function will ask you to specify the drive, side, starting 
          track, and ending track of the interrogation.  It will then ask you 
          the lowest and highest sector numbers to search for.  If you've got 
          a 40-track drive (like most of us), the maximum interrogation will be 
          from track 0 to track 43 (throw in a couple extra tracks for those 
          tricky buggers), searching for sectors 0 to 255 (all values decimal). 
          Such an interrogation will take quite a bit of time, which is why we 
          included the Toggle Menu Alert Tone function.
          
          You can also specify that the output be recorded on your printer to 
          be used for later reference.
          
          Here's a few tips to get the most out of this function:
          
          A) Try to make a backup of the suspect diskette with DOS's DISKCOPY 
             program.  On the weirdly formatted tracks, the program will report 
             a read error.  Write down these track numbers.
          
          B) Place a write-protect tab on the suspect disk and interrogate all 
             of the tracks that DISKCOPY threw a fit over.  Search for sectors  
             0 to 255 (decimal).
          
          C) Most often, the protection scheme is to either format one or more  
             sectors or tracks with sector sizes other than the standard 512    
             bytes, or to either give one of the sectors a wild sector number   
             like 214 or just not format a whole track of eight sectors.  If    
             you've got the same VisiCalc master I do, you'll find that sector  
             8 on track 39 is missing entirely.
          
          The interrogation function will tell you which sector numbers were 
          found, their size in bytes, and if they were formatted with a CRC 
          error (another not so fancy trick).  Also notice that the 
          interrogation process can be aborted by pressing the "C" key.
          (8)                     Toggle Menu Alert Tone
                                  ----------------------
          
          This function is used to sound the computer's speaker when a 
          particularly time consuming function has been completed.  Selecting 
          this function toggles the alert tone on and off, and is most often 
          used with the Interrogate Disk Sectors function, which returns 
          directly to the main menu when finished.
          
          Display/Modify Disk Parameters
          ------------------------------
          Even though the IBM-PC uses a standard format for writing data on 
          diskettes (40 tracks numbered 0 to 39 of 8 sectors each numbered 1 to 
          8 of 512 bytes each), it has the capability of reading and writing 
          many other formats.  To do so, you'll have to change certain bytes in 
          a special table kept in the PC's memory called the Disk Parameter 
          Table.  This function displays the current value of these bytes and 
          allows you to modify them.  Note that not all of the values will be 
          of any use to you.
          
          There are 11 bytes in the Disk Parameter Table:
          
          1) Specify byte #1: the left "nybble" or single digit of this value  
             when viewed in hex is the step rate time for the disk drive head.  
             The right "nybble" is the disk head unload time.  These values are 
             best left alone.

          2) Specify byte #2: Again, don't fool around with these values.  The 
             left "nybble" is the disk head load time, and the right nybble is  
             the direct memory access mode select.
          
          3) Wait time until motor is turned off.  Not normally of use.
          
          4) Bytes-per-sector value: AH-HAH!  If you place a "0" in this value, 
             The PC expects all sectors to be 128 bytes long.  A "1" means a 
             sector size of 256 bytes, a "2" means 512 bytes (this is the       
             standard DOS value), and a "3" means 1024 bytes per sector.
          
          5) Highest sector number on a track: This is used for formatting and  
             tells DOS how many sectors there are on each track.
          
          6) Gap length for diskette reads: this is what you fool around with 
             if you keep getting CRC errors when you try to read a non-standard 
             size sector.  Normally, you can just leave this alone except when  
             formatting with Ultra-Format.
          
          7) Data length: This contains the number of bytes in a sector when 
             the value in table byte #4 doesn't contain a 0, 1, 2, or 3.
          
          8) Number of bytes in the gap between sectors: this is also only used 
             when formatting special tracks.
          
          9) Format fill byte: When formatting, this is the initialization byte 
             that will be placed in all new sectors.
          
          10) Head settle time: leave this alone.
          
          11) Motor start time: don't fool with this either.
          (9)           How To Display/Modify Non-Standard Sectors
                        ------------------------------------------
          
          The best way we can think of to demonstrate how to use this program 
          with protected diskettes is to give you an actual example "script".
          
          One fine day, a local marketing manager for a large software company 
          was in our offices boasting his company's newest product.  When we 
          showed him the Ultra-Utilities, he challenged us that it "won't be 
          able to touch this disk".  We sat him down at our PC and booted up 
          Ultra-Zap.  This first thing we did was Interrogate track 1 of his 
          diskette, searching for sectors 0 to 255.  Like magic, Ultra-Zap told 
          us that his diskette was formatted as five sectors, numbered 1, 2, 3, 
          4, and 5, and were 1024 bytes long each.  Next, we went into the Disk 
          Parameter table and changed byte #4 (bytes-per-sector value) to a 
          value of 3 (meaning 1024 bytes per sector).
          
          Now, we choose the Display/Modify function to look at track 1, sector 
          1.  The first thing this function does is attempt to read the 
          FAT table on the diskette to determine if is single or double-sided.
          When you are working with protected diskettes that do not have a 
          valid FAT table, or if you change the bytes-per-sector value, this 
          function will report an error reading track 0, side 0, sector 2.  It 
          will then ask you how many sides are on the diskette (since it 
          couldn't figure this out from the FAT).  We answered 1 side, knowing 
          that nearly all distribution software comes on single-sided 
          diskettes.  The Display/Modify function worked perfectly, as 
          evidenced by the look of worry on our friend's face.  "You're giving 
          this thing away for free?", he asked us.  We decided it would be best 
          not to show him how we could make a backup of his disk with 
          Ultra-Format.
          (10)                   Format A Standard Track
                                 -----------------------
          
          This function is used to lay down a fresh format pattern on a single 
          track.  It will destroy any previous data on that track.  If you are 
          attempting to revive sectors that were marked "damaged" by the DOS 
          FORMAT program, you will have to also change the corresponding values 
          in the File Allocation Table (FAT) after getting a successful format. 
          Refer to the IBM DOS manual for details on the FAT.  Our experience 
          is that the work required is usually not worth the trouble of getting 
          back a few sectors.
          
          When the sectors are formatted, they are initialized with whatever 
          byte is in the "Fill byte" parameter in the Disk Parameter Table.  
          Initially this is &HF6 (246 decimal).  If you wish to change this, 
          see the Display/Modify Disk Parameter Table chapter below.
          
                   Re-Format A Standard Track Without Erasing Old Data
                   ---------------------------------------------------
          
          This function is used whenever a disk starts to report read and write 
          errors in normal use.  It repairs the diskette by first reading the 
          sector data into memory, writing a fresh format pattern on the 
          diskette, and the writing back the old data into the freshly 
          formatted sectors.
          
          You may specify how many times the program should attempt to re-read 
          a sector that reports an error.  Depending on the severity of damage 
          to a sector, it may be necessary to re-read it 50 or more times 
          before you get a good read.  If after the specified number of 
          re-reads the sector still cannot be read, the program will format a 
          fresh sector in that location.  Depending on the file, this may make 
          it unusable.  If it's a program file, probably so.  However, if it's 
          a data file or BASIC program stored in ASCII format, you should be 
          able to go in with Ultra-Zap and patch things up.  After reading the 
          old data, you have the option to abort the fresh formatting and 
          return to the main menu.
          
                               Format A Non-Standard Track
                               ---------------------------
          
          This function is used to create a copy-protected diskette track by 
          placing a format pattern on the diskette that DOS is normally not 
          able to read except under special circumstances.  On the IBM-PC, 
          there are four sector sizes we can format: 128 bytes, 256 bytes, 512 
          bytes, and 1024 bytes.  These sectors sizes can be read by DOS by 
          placing the values 0, 1, 2, and 3 respectively into the 
          byte-per-sector value in the Disk Parameter Table.  Now let's discuss 
          the difference between a logical and physical disk sector as referred 
          to by Ultra-Format.  The normal disk format is 8 sectors of 512 bytes 
          each numbered 1 to 8.  It is possible to give your non-standard 
          sectors any numeric name you wish.  That is, you could format a track 
          with three physical sectors numbered 12, 20, and 235.  This makes it 
          difficult for someone to copy your disk.  Another fancy trick is to 
          format a standard track 40.  Most disk drives are capable of 
          reading and writing a few extra tracks than the standard 0 through 
          39.  Most copy programs, and DISKCOPY, do not look for such a track.
          
          The "Highest Sector Number On Track" value in the Disk Parameter 
          Table tells this function how many physical sectors you wish to
          (11)
          format on your non-standard track.  It does not dictate what the 
          highest logical sector number can be.  For each physical sector, you 
          will be asked to enter the logical sector name (0 to 255) and size 
          value (0, 1, 2, or 3).
          
          Non-standard tracks are usually used to hold special codes that a 
          program checks for when first executing.  To do this, you'll need to 
          incorporate a short disk sector reading assembly language subroutine 
          into your program.  Study the ROM-BIOS calls in the Technical 
          Reference manual for disk I/O (interrupt 13H).  If this is still over 
          your head, drop us a line (registered users only) and we'll send you 
          some ready-to-go sample routines for use in assembly, compiled BASIC, 
          and regular BASIC programs.
          
          One more thing, when you format a non-standard track, you'll need 
          to fiddle around with a couple of values in the Disk Paramter Table, 
          specifically, bytes #6 and #8.  Look at the default values for a 
          standard 8 sector, 512 byte/sector format.  If you wanted to format a 
          track of 256 byte sectors, you might try doubling the standard 
          value of these bytes.  Our first issue of "The Zapper" newsletter 
          deals with formatting non-standard tracks for copy-protection work.
          If you're not a registered user, all we can suggest is 
          experimentation to come up with formats and Disk Parameter Table 
          values that do not cause CRC errors.
          
                           Display/Modify Disk Parameter Table
                           -----------------------------------
          
          This function works exactly like that in the Ultra-Zap program,  
          please refer to that chapter for instructions on how to use this 
          function.
          
                                   Modify Display Radix
                                   --------------------
          
          This function also works just like the Ultra-Zap Modify Display Radix 
          function.  Please refer to that chapter for more information.
          (12)             Display File's Directory Information
                           ------------------------------------
          
          This function allows you to see everything about a file that is kept 
          in DOS's directory of files.  As with most of the functions in the 
          Ultra-File program, this starts with a menu of all of the programs in 
          the directory.  Each filename is preceded with a number.  After the 
          filename, a single character (called the "attribute") tells you the 
          characteristics of a file.  These attribute codes are explained at 
          the bottom of the display.  If you have a double-sided diskette, 
          choose the "M" key to look at the rest of the directory entries. If 
          you have a single-sided diskette, all available file locations are 
          displayed at the same time.
          
          To see the directory information on a file, just type in its 
          corresponding number on the list.  Interestingly enough, we have 
          found that DOS 1.10 has some bugs in the way it sometimes reports a 
          file's date, time, and size in bytes when you issue the DOS command 
          DIR.  This function displays their correct values.
          
          You'll also notice that on all file lists in Ultra-File, deleted 
          files (those killed with BASIC's KILL or DOS's ERASE commands, for 
          example) are shown with the first character of their filename as a 
          question mark.
          
                              Assign Or Remove System Status
                              ------------------------------
          
          This function allows you to either remove or assign the "SYSTEM" 
          attribute given to a file.  Files given this attribute are not 
          displayed with DOS's DIR command, cannot be accessed through DOS, and 
          are not copied with DOS's COPY *.* command.
          
                              Assign Or Remove Hidden Status
                              ------------------------------
          
          This function allows you to either remove or assign the "HIDDEN" 
          attribute given to a file.  Functionally, the "HIDDEN" and "SYSTEM" 
          attributes are alike to DOS.  You'll notice though that system files 
          like IBMBIO.COM and IBMDOS.COM are given both "HIDDEN" and "SYSTEM" 
          attributes.  Hidden files are used a lot by software companies to 
          keep a program "secret".  Backup diskettes made with DISKCOPY still 
          include hidden and system programs, so it is not a good protection 
          means on its own.
          
                        Display List Of Sectors Allocated to File
                        -----------------------------------------
          
          You'll notice that Ultra-Zap's Display/Modify File Sectors function 
          never really tells you where on the diskette the logical file sectors 
          are located.  This function knows all, tells all, about the location 
          of all sectors allocated to a file.  Notice that with double-sided 
          diskettes, sectors are allocated to a file two at a time (sectors 1 
          and 2, 3 and 4, 5 and 6, 7 and 8 are considered groups on a 
          double-sided diskette.  We think a good name for this is a "lump".  
          Just remember there is one sector per lump on a single-sided 
          diskette and two sectors per lump on a double-sided diskette).
          (13)                  Build A File From Scratch
                                -------------------------
          
          This function is used for creating a new file, and then taking 
          specific "lumps" (see section above for definition of a "lump") and 
          allocating them to this new file.  It can also be used when the 
          Attempt To Restore An Erased File function fails and you have used  
          Ultra-Zap to find the lumps that belong to a file.
          
          THIS IS A POTENTIALLY DANGEROUS FUNCTION!  Always work on a backup if 
          possible!  This function does not care if a lump was allocated to a 
          different file and can generally screw things up royally if you don't 
          know what you're doing.  If you're trying to restore an accidentally 
          erased file, always try the Attempt To Restore An Erase File function 
          first.
          
          This function will ask you to enter in the sectors to allocate to the 
          file.  You must enter these sectors in order!  Also, if you are 
          working on a double-sided diskette, only enter in the first sector of 
          each "lump" (that is, sectors 1, 3, 5, and 7).  If you try to 
          allocate both sectors 1 and 2 to a file, the disk will be thrown into 
          an endless loop.  You can allocate any sector for single-sided 
          diskettes since each sector is considered one lump.
          
          Using this function, you can experiment with a variety of neat tricks 
          including cross-threading files (two files having the same sectors 
          allocated) and allocating an entire diskette to one file.
          
                             Attempt To Restore An Erase File
                             --------------------------------
          
          If you use this function IMMEDIATELY after accidentally erasing a 
          single file, you stand a near 100% chance of resurrection with this 
          function.  When a file is restored with this function or the Build 
          File From Scratch function (deleted file), the first character of the 
          filename will be changed to the letter "Z".  You can use DOS's RENAME 
          command to rename it to its original filename.
          
          If you killed multiple files (ERASE *.TXT type commands are notorious 
          for this), this function will probably not work.  Always use a backup 
          disk (made with DISKCOPY) before allowing this function to change the 
          directory info.
          
                                Produce A Map Of Diskette
                                -------------------------
          
          This function allows you to examine an entire diskette, sector by 
          sector, in the form of a unique road map.  Since the output is 
          self-explanatory, we will not discuss it here.  Suffice it to say 
          that you'll wish you took the time to make one of these for your most 
          valued diskettes should you ever experience the hand-spasm that 
          causes one to type ERASE *.* accidentally.   The ORP code means that 
          a sector is an "orphan", that is, it's been marked as allocated in 
          the File Allocation Table (FAT) but doesn't belong to any file in the 
          directory.  Running the DOS program CHKDSK will usually fix any 
          orphan lumps.
          (14)                   Selectively Purge Files
                                 -----------------------
          
          You'll really appreciate this function on those times you want to 
          kill about 20 .TXT-type programs but want to keep one.  In such a 
          case ERASE .TXT will wipe them all out.  This function allows you to 
          go through and choose one by one the files you wish to "purge" from 
          the diskette.  Everytime you enter a file's number from the file 
          list, that file's number will begin to blink.  If you make a mistake, 
          just choose the "Q" function to cancel the purge.  If you have a 
          double-sided diskette, choose the "M" function to look at the rest of 
          the files in the directory.  When you've "marked" all of the files to 
          be purged, just choose the "P" function to start the hand of diskette 
          doom (ouch!).



```
{% endraw %}

## DOC42.TXT

{% raw %}
```
          (15)         Appendix A: The FreeSoft Duplication Policy
                       -------------------------------------------
          
          Before we get into the meat of how FreeSoft is going to make you a 
          billionaire, we'd like to give you a little background on how the 
          Ultra-Utility series came to be.  The software authors at FreeSoft 
          have been professionally involved with microcomputers since 1977.  
          When our IBM-PC became a member of the family, we were constantly 
          blowing up diskettes.  This, of course, was before any utility 
          programs of value existed for the PC.  Hoped as we did for help, the 
          Norton Utilities finally showed up and we snatched one of the first 
          packages that arrived at our local dealer.  Although the Norton 
          Utilities are a fine piece of programming, we were still 
          disappointed.  We suppose that the programs were great for the PC, 
          but being old-timers and certified hackers besides, we were spoiled 
          for what 80-bucks-plus-tax could buy in the way of utilities for our 
          other in-house micros.  To make a long story short, we did what any 
          self-respecting computerphiles would do.  We reinvented the wheel, 
          only made it round this time.
          
          Several thousand gallons of Pepsi later, the Ultra-Utilities emerged 
          (TA-DA!).  Everyone we showed it to alternated between spasms and 
          wild-salivation.  We thought we had a winner.  The next problem was 
          how to sell the damn thing.  We don't know, but we think a company 
          would have to be nuts to plunk down a couple thousand clams for a 
          small-shot ad in some of the phone-book sized IBM-PC magazines.  
          Sandwiched in there between a million other products just didn`t seem 
          to be the way to get good exposure.  Submitting it to a software 
          publishing house for distribution didn't seem like a good choice 
          either.  A machine language game we had written for the TRS-80 sold a 
          grand total of 11 copies (to date) once we had submitted it to a 
          publisher .  The problem is that you are at the mercy of how much
          the publisher is willing to spend for advertising. (Games for the PC? 
          Hmmmm...).  At any rate, it sure was funny that so many TRS-80 
          BBS's had rave reviews of the game.  Those eleven guys sure had a lot 
          of friends.  That brought us to the final problem.  Could we afford 
          not to copy-protect the Ultra-Utilities?  Much as we hate protected 
          software, when it's your money on the line you seem to modify your 
          feelings a bit.
          
          When we started seeing programs distributed on the User-Supported 
          basis, the old cogs really started spinning.  Now here was a way to 
          get maximum exposure at minimum cost.  Instead of trying to defeat 
          the many ways that software gets passed around, you take advantage of 
          them.  The whole thing relies on the fact that most of you folks are 
          honest users who will support a company that gives you a good 
          product.  Having been burned by some products that didn't live up to 
          their claims, we certainly agree that the best way for a person to 
          evaluate a package is to have it in their hands and run it through 
          its paces on their own terms.
          
          Therefore, we have decided to release the Ultra-Utilities by means 
          that will be the acid-test for the package.  Give it away!  If you 
          don't like it - pitch it.  If you like it but can't afford the 
          registration fees, we'll appreciate any donation you care to make.  
          If you like it and want to support us, we hope you'll consider 
          becoming a registered user.  Please think this over.  If you want to 
          see more software from us, we'll have to make a decent enough go of 
          this to justify it.  Without further pathos, let us make you an offer 
          of solid committment.  You support us, we'll give you your money's 
          worth and more.
          (16)
          One thing is for sure, the quality of many User-Supported programs 
          certainly rivals, and in many cases exceeds, that of commercial 
          software costing much more.  We hope you'll make User-Supported 
          software an experiment THAT WORKS!
          
          Enough Coddling, Now On To The Good Stuff!
          ------------------------------------------
          
          If you feel the Ultra-Utilities are a good product that is worth 
          supporting, we've got a deal for you!  Here's the duplication policy 
          for FreeSoft products:
          
             A) We not only encourage you to share this product with your 
                friends, we will make it worth your while.  All we ask is       
                that you distribute the package as a whole in disk file form    
                as you would receive it from us.  (If you didn't get your copy  
                from us, that means that the following files should be on any   
                copy you give out: U-ZAP.EXE, U-FILE.EXE, U-FORMAT.EXE, 
                DOCUMENT.ONE, and DOCUMENT.TWO).  We also do not allow anyone   
                to charge money for a copy of our product.  If you must charge  
                for the diskette(s), you may charge no more than $8.00 total 
                for all diskettes included with the Ultra-Utilties without      
                special written permission from FreeSoft.
          
             B) You'll notice that on the main menu of each program is a 
                serial number.  When you become a registered user, we will ask  
                you what serial number is on your copy.  This does two things,  
                it tells you what version you have so we can send you the 
                latest if necessary, and it tells us where your copy 
                originated.  We will then give you a new serial number with     
                the registered copy of the Ultra-Utilities we send you.  When 
                someone registers and gives us your serial number, you get a    
                check from us for $10.  If you give a copy to every member of   
                your users group or even put it up on a BBS, every time someone 
                registers you get ten bucks, just like that.  Remember, in 
                order to get this commission, you have to register your copy    
                with us before giving out any copies.  Don't underestimate the 
                ability of a program to get spread around - this can really 
                bring you some big bucks.
          
             C) If you give someone a copy and you have not registered, you do  
                not make a commission.  We offer two ways to register your      
                program.  Registration with eligibility for commission costs 
                $40.  If you don't know any other PC owners or just don't want  
                to risk getting yourself into a higher tax bracket off of       
                commissions (!), we also offer a registration without 
                commission eligibility.  This costs $30, and gives full 
                benefits of registration with the exception of commissions.  We 
                hope you'll agree that either way is still a lot cheaper than   
                shelling out $80 for the Norton Utilities.
          
             D) If you can't afford the 30 bucks or are just the type who feels 
                better getting something for nothing, we understand.  We      
                would appreciate it if you could at least give out some copies  
                of this package, though.  The more people that get it, the more 
                people there are who will potentially support our company by    
                registering.
          (17)
          So What Do I Get For Registering When I Already Have It For Free?
          -----------------------------------------------------------------
          
          We thought you'd never ask.  If you are one of the folks who support 
          us, we will continue to make it worth your while with the following 
          benefits:
          
             1) If the version you register is not the latest, we will send 
                you the latest version, plus documentation, at no extra charge. 
                We will also inform you of any updates, and provide you with    
                those for no extra charge.
          
             2) You will also receive the next FreeSoft product WITH 
                REGISTRATION WITH COMMISSION ELIGIBILITY free of charge.  We    
                have many great products on the drawing board and near          
                completion, including machine language games, a database        
                program generator that is truly fantastic, BASIC programming   
                and compiler utilities, ready to run assembly language          
                subroutines, and a host of other goodies.  Remember, as a       
                registered user of the Ultra-Utilities, you will be a preferred 
                customer for all future FreeSoft releases.
          
             3) You'll get a free one-year subscription to "THE ZAPPER"         
                newsletter.  This is a consortium of no-holds-barred knowledge  
                for the IBM-PC.  It's where you'll find out the kinds of things 
                about your PC and PC software that the magazines would lose     
                advertisers over if they published them.  "THE ZAPPER" is    
                published quarterly and will be sent to you at no charge.
          
             4) Complete support by mail.  If the need arises, we may open up   
                a telephone hotline or bulletin board for our registered users.
          
             5) A date with our sisters - just kidding!  But seriously, what 
                could be a better way to pay for a program you like than a way  
                that puts money back into your pocket?
          (18)                      Registration Form
                                    -----------------
          <<< IF YOU NEED AN INVOICE FOR BUSINESS REASONS, PLEASE USE THE ONE   
              PROVIDED ON THE NEXT PAGE AND INCLUDE IT WITH THIS FORM >>>
          
          Send to: The FreeSoft Company, P.O. Box 27608, St. Louis, MO 63146
          
          YES, I want to be a registered user of the Ultra-Utilities and be 
          placed on the preferred customer list for all future FreeSoft 
          releases!
          
          I am enclosing the following formatted diskette(s) with a 
          SELF-ADDRESSED, RETURN POSTAGE PAID MAILER.  Please send me the 
          latest versions of the Ultra-Utilities and documentation manuals, 
          plus any other good things you might have laying around.
          
          (Note: please sandwich your diskette(s) between two stiff pieces of 
          cardboard and mark the return mailer clearly with the message 
          "MAGNETIC MEDIA - DO NOT X-RAY OR EXPOSE TO MAGNETIC FIELDS".
          
          Mark one of the following:
          
          ___ Single-sided diskettes enclosed (send two with your request).
          
          ___ Double-sided diskettes enclosed (send one with your request).
          --------------------------------------------------------------------
          
          The old serial number in my program is _ _ _-_ _ _ _ _
          (This also tells us what version you have so we can send you the 
          latest. You will receive your personal serial number from us
          after we have filed your registration).
          --------------------------------------------------------------------
          
          Name:    _____________________________________________________
          
          Address: _____________________________________________________
          
          City:    _____________________________________________________
          
          State:   ____________    Zip Code ____________________________
          
          --------------------------------------------------------------------
          Please register me as (MARK ONE OF THE BELOW): 

          ___ Registered eligible for commissions (I enclose $40 check or money 
              order, and postage paid return mailer).

          ___ Registered not eligible for commissions (I enclose $30 check or 
              money order, and postage paid return mailer).
          
          PLEASE NOTE: Make all checks or money orders payable to THE FREESOFT 
          COMPANY.  Foreign registrations please add $10 to help with later 
          postage.
          
          Comments, Suggestions or Questions:
                                         INVOICE
                                         -------
          
          Invoice #34-34256
          
          Please make payable to :The FreeSoft Company
          
          Quantity              Description                           Price
          -----------------------------------------------------------------
             1             The Ultra-Utilities disk file             $40.00
                           repair software.
          
          
                                                      Subtotal.......$40.00
                                                      Tax............$ 0.00
          -----------------------------------------------------------------
                    Please remit ------------->       Amount Due.....$40.00
          -----------------------------------------------------------------
          Company Name ___________________________________________________
          
          Address      ___________________________________________________
          
                       ___________________________________________________
          
                       ___________________________________________________
          
          -----------------------------------------------------------------
                                   The FreeSoft Company
                                      P.O. Box 27608
                                   St. Louis, MO 63146
          -----------------------------------------------------------------
          (20)      Appendix B: A Brief Discussion Of Diskette Formats
                    --------------------------------------------------
          
          The standard IBM-PC stores data on floppy diskettes by dividing the 
          surface of the diskette into circular tracks (like the grooves on a 
          phonograph record, only complete circles instead of one long spiral). 
          There are 40 of these tracks on a standard IBM-PC disk drive numbered 
          0 through 39.  Each of these tracks are further sub-divided into gaps 
          and sectors.  Gaps are used to separate the sectors and help out with 
          the disk drive timing.  Sectors are used to hold the actual data that 
          will later be retrieved by the computer.  These sectors are numbered 
          1 through 8 on a standard diskette and hold 512 bytes of data each.  
          A double-sided diskette merely has an additional read/write head on 
          the reverse side of the diskette, effectively doubling the available 
          surface space for data.  A single-sided diskette can hold 39 tracks X 
          sectors/track X 512 bytes/sector = 159,744 bytes.  Double this for a 
          double-sided drive and you've got 319,488 bytes per diskette.  Of 
          course, not all of this space is available for use by the user.  Some 
          of it is set aside to contain the DOS system files.  Another chunk is 
          reserved for the File Allocation Table (FAT) and Directory that tells 
          the DOS where files and free space are located on a diskette.
          
          When you write a file on a freshly-formatted diskette, your data is 
          placed in consecutive sectors.  If your file begins on track 1, 
          sector 1, the first 512 bytes of data is placed in this sector, the 
          second 512 bytes are placed in track 1, sector 2, and so on.  What 
          happens when you reach the end of a track?  If you have a 
          single-sided diskette, the data continues on the first sector of the 
          next track.  If you have a double-sided diskette, each track is 
          actually composed of the sectors on both sides of the diskette.  In 
          other words, track 1 begins with side 0, track 1, sector 1, and ends 
          with side 1, track 1, sector 8.  When side 1 is filled up, the first 
          sector of the next higher track of side 0 is used.  This is the 
          normal progression order of sectors on a disk with PC-DOS version 
          1.10, and how Ultra-Zap spans to the "next" or "previous" sectors in 
          multiple-sector functions.
          (21)          Appendix C: Version Changes and Additions
                        -----------------------------------------
          11/03/83: Version 2.00 release
          With the release of version 2.00 of the Ultra-Utilities, several new 
          and powerful features were added.  Mainly, we added compatibility 
          with DOS versions 2.0 and (from what we've been able to gather) 2.1.  
          We also fixed some bugs from the first version that could cause some
          potential damage under certain conditions.
          
          Of course, even version 2.00 is not completely compatible with all of 
          the nifty features of DOS 2.0 and 2.1.  In a few instances, you'll 
          have to be a bit sneaky in order to get the job done.  Here's an 
          overview of the limitations and considerations for version 2.00 of 
          the Ultra-Utilities when being used on DOS 2.0 or 2.1:
          
             1) Automatic DOS and FORMAT recognition: All Ultra-Utility 
                programs automatically recognize the DOS version being used 
                with a diskette, and the number of sectors formatted on each    
                track.  This allows us to have only one version of the Ultra-   
                Utilities for use with all DOS versions.  Since we are issuing  
                version 2.00 release before we have actually seen a copy of DOS 
                2.1, a new release may be in order at a later date.
          
             2) No hard disk support: The Ultra-Utilities are not meant to be   
                used with hard disks, although a very few functions will work.  
                The Display/Modify File Sectors and Search For Bytes In File 
                Sectors functions in Ultra-Zap should work, for instance.  For  
                other file work, the file should be copied onto a floppy.
          
             3) Root directory support only:  At this time, the Ultra-Utilities 
                are written to work only on files contained in DOS 2.0 and 2.1  
                root directories.  Files in subdirectories should be copied 
                into the root directory.  Again, experimentation will expose 
                a few features that will work on subdirectory files.  However,  
                this is left to your own device and is not documented.
          
             4) Format considerations: When using Ultra-Format, always verify   
                that the Highest Sector Number On Track byte in the Disk Par-
                ameter Table is set correctly to the number of sectors you wish 
                to format.  Disk swapping may cause this byte to be incorrect.
                This is also true for the Re-Format Without Erasing Old Data    
                function.
          
             5) Disk Roadmap: When you print out a map of a diskette using 
                Ultra-File, sectors allocated to subdirectory files may be 
                reported as ORPhan clusters.  Always use the CHKDSK utility     
                to free up actual orphan (allocated but not assigned to a       
                file) clusters if there is any question.
          
          12/10/83: Version 3.00 release
          Because of a mysterious hand spasm that caused us to stab a single
          wrong character while typing in Version 2.00, Ultra-File suffered
          a partial lobotomy that made it forget how to read single-sided
          diskettes.  We fixed it and then went out to drink our embarrassment
          into oblivion.
          
          We also added an invoice to the documentation so companies could
          register easier.
          (22)
          01/29/84: Version 4.00 release
          U-Zap: Display no longer corrupted if you just press ENTER when
          entering ASCII search bytes in Search For Bytes functions.
          
          Interrogate function waits for prompt when finished if menu alert
          tone function is turned off.
          
          Fixed our post office box number on opening page (GADZOOKS!).
          
          U-Format: Fixed main menu Format Standard Track function to reflect
          correct number of sectors for current Disk Parameter Table.
          
          U-File: Major bug fixed in Build A File From Scratch function when
          working with single-sided diskettes.  Approved a resolution to do
          a version of The Ultra-Utilities for the MacIntosh the day after
          IBM sponsors a multi-million dollar rock festival.
          
          Waits for pauses after each main output section of Produce A Map 
          function if output is not to printer.
          
          All three programs: Version number is now displayed on fancy-pants 
          opening title display.  Serial number is still displayed on main
          menu page.
          
          Incorporated a secret into the Ultra-Utilities just to see how many
          of you read this crap.  You can skip the opening page altogether and
          go directly to the main menu by pressing your ESCape key once while
          the program is loading, but before it begins execution.

          Thought about changing U-Zap and U-Format to automatically accept 
          numeric input in the same radix as display radix is set, but then
          decided it would be too much work since you can do that anyway by
          just entering &H or &O prefixes for hex or octal entry.  Let's take
          a vote whether or not Version 5 should include this.


```
{% endraw %}

## SKELETON.BAS

{% raw %}
```bas
1 CLS:KEY OFF:AQ$="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !@#$%^&*()_-+={}[]:;'?/>.<,|\":IN=0:ON ERROR GOTO 49000:CURRENT=-1
100 GOSUB 50000:GOSUB 46000:STAT1$="A"
110 IF MAXSIZE=0 THEN GOTO 100 ELSE CURRENT=-1
500 REM ************************************************************
501 REM *** Main Menu Function         Process: Display choices, get choice
502 REM ***                                     then call appropriate routine
503 REM ************************************************************
505 IF CURRENT=-1 THEN C$=" NONE" ELSE C$=STR$(CURRENT)
510 CLS:LOCATE 1,1:A$="Current Record ="+C$:A1$="Number of entered records ="+STR$(GOOD):A2$="Maximum number of records ="+STR$(MAXSIZE):A3$="Current Data Disk Volume: "+V$
520 PRINT TAB(1);A$;TAB(80-LEN(A1$));A1$:LOCATE 2,1:PRINT TAB(40-(LEN(A2$)/2));A2$:LOCATE 3,1:PRINT TAB(40-LEN(A3$)/2);A3$
525 LOCATE 4,1:PRINT STRING$(79,"_");:LOCATE 19,1:PRINT STRING$(79,"_");
530 LOCATE 6,1:A$="---> Main Menu Choices <---":PRINT TAB(40-(LEN(A$)/2));A$
540 LOCATE 8,20:PRINT "G)et A Record.":LOCATE 9,20:PRINT "S)earch For And List Records."
550 LOCATE 10,20:PRINT"A)dd A Record.":LOCATE 11,20:PRINT"D)elete Current Record.":LOCATE 12,20:PRINT"U)pdate Current Record.":LOCATE 13,20:PRINT"X)-tend Work To New Data Diskette."
560 LOCATE 14,20:PRINT"I)nitialize New Data Diskette.":LOCATE 15,20:PRINT"Q)uit And Return To BASIC."
580 A$="Enter your choice (G,S,A,D,U,X,I, or Q):  ":LOCATE 18,1:PRINT TAB(40-(LEN(A$)/2));A$:ROW=18:COLUMN=((40-LEN(A$)/2)+LEN(A$)-1):A1%=1:AX$="GgSsAaDdUuXxIiQq":GOSUB 40130
590 IF AN$="" GOTO 580
600 IF AN$="Q" OR AN$="q" THEN CLOSE:GOSUB 50000:CLS:PRINT"Program Finished...":END
610 IF AN$="G" OR AN$="g" THEN GOSUB 680:GOSUB 39000:GOTO 500
620 IF AN$="S" OR AN$="s" THEN GOSUB 680:GOSUB 45000:GOTO 500
630 IF AN$="A" OR AN$="a" THEN GOSUB 41000:GOTO 500
640 IF AN$="D" OR AN$="d" THEN GOSUB 680:PAGE=0:GOSUB 2000:GOSUB 7000:GOSUB 42000:GOTO 500
650 IF AN$="U" OR AN$="u" THEN GOSUB 680:GOSUB 43000:GOTO 500
660 IF AN$="X" OR AN$="x" THEN GOSUB 680:GOSUB 46000:GOTO 500
670 IF AN$="I" OR AN$="i" THEN GOSUB 680:GOSUB 47000:GOTO 500
680 CLS:LOCATE 24,1:PRINT STRING$(79,"=");:RETURN
2000 REM ************************************************************
2001 REM *** Display Screen Info Routine    In: PAGE = page #
2002 REM ***                                        or
2003 REM ***                                    FL = field #
2004 REM ***                               Out: Screen info on that page is
2005 REM ***                                    displayed, then exit to
2006 REM ***                                    caller.
2007 REM ************************************************************
7000 REM ************************************************************
7001 REM *** Display Record Fields Routine  In: Page = page #
7002 REM ***                               Out: Working strings displayed,
7003 REM ***                                    then exit to caller
7004 REM ************************************************************
12000 REM ************************************************************
12001 REM *** Block Record Routine     In: Working strings filled
12002 REM ***                         Out: Record strings filled then exit
12003 REM ***                              to caller.
12004 REM ************************************************************
17000 REM ************************************************************
17001 REM *** Unblock Record Routine   In: Record strings filled
17002 REM ***                         Out: Working strings filled then
17003 REM ***                              exit to caller.
17004 REM ************************************************************
22000 REM ************************************************************
22001 REM *** Input A Field Routine    In: FL = field number to input
22002 REM ***                         Out: Working string filled after
22003 REM ***                              passing edit check, then exit
22004 REM ***                              to caller.
22005 REM ************************************************************
32000 REM ************************************************************
32001 REM *** Get a Record Routine      In: RECNUM = record number to get
32002 REM ***                          Out: Record strings filled (need to be
32003 REM ***                               unblocked.)
32004 REM ************************************************************
32010 GET 1,RECNUM:RETURN
33000 REM ************************************************************
33001 REM *** Hash Keyfield Routine    In: KY$ = Key field
33002 REM ***                         Out: RECNUM = Hashed record specifier
33003 REM ************************************************************
33010 X#=0:FOR ZZ=1 TO LEN(KY$):X#=X#+ZZ*ASC(MID$(KY$,ZZ,1)):NEXT ZZ
33020 X#=X#*X#*X#*X#:X$=STR$(X#):RECNUM=VAL(MID$(X$,5,4)):X#=0
33030 RECNUM=INT(MAXSIZE*RECNUM/9999):IF RECNUM<=0 THEN RECNUM=1
33040 RETURN
34000 REM ************************************************************
34001 REM Delete a record routine    IN: RECNUM = record number to delete
34002 REM                           OUT: Record is deleted
34003 REM                                CURRENT = -1
34004 REM ************************************************************
34010 GOOD=GOOD-1:STAT1$="D":GOSUB 12000:GOSUB 35000:CURRENT=-1:STAT1$="A":LSET STAT$=STAT1$:OPEN "O",#2,NA$+".def":GOOD=GOOD-1:PRINT#2,MAXSIZE,GOOD:CLOSE #2:RETURN
35000 REM ************************************************************
35001 REM *** Put a Record Routine     In: RECNUM = record number to put
35002 REM ***                              Record strings must be filled
35003 REM ***                         Out: CURRENT = Record number
35004 REM ***                              Record is writted to disk file
35005 REM ************************************************************
35010 PUT 1,RECNUM:CURRENT=RECNUM:OPEN "O",#2,NA$+".DEF":GOOD=GOOD+1:PRINT#2,MAXSIZE,GOOD:CLOSE #2:RETURN
36000 REM ************************************************************
36001 REM Error Response Routine   In:ERROR = 1,2,3, or 4
36002 REM                             ER$= error string if ER = 4
36003 REM                         OUT: Error message is printed, waits
36004 REM                              For 'c' or 'C' keypress, then
36005 REM                              exits to caller
36006 REM ************************************************************
36010 LOCATE 25,1:PRINT STRING$(79,32);:A$=" ERROR! ":P=40-LEN(A$)/2
36020 BEEP:ON ER GOTO 36030,36040,36050,36060
36030 B$="Record Not Found... Press <C> to Continue":GOTO 36070
36040 B$="Data Diskette Is Full... Press <C> to Continue":GOTO 36070
36050 B$="No Current Record In Memory... Press <C> to Continue":GOTO 36070
36060 B$="Entry Must Not Be "+ER$+"... Press <C> to Continue"
36070 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,40-LEN(B$)/2:PRINT B$;
36080 LOCATE 24,P:PRINT A$;:CT=1
36090 Z$=INKEY$:IF Z$="C" OR Z$="c" GOTO 36150
36100 CT=CT+1:IF CT=4 THEN CT=1
36110 IF CT=1 THEN LOCATE 24,1:PRINT STRING$(35,"/");:LOCATE 24,44:PRINT STRING$(36,"/");:GOTO 36090
36120 IF CT=2 THEN LOCATE 24,1:PRINT STRING$(35,"-");:LOCATE 24,44:PRINT STRING$(36,"-");:GOTO 36090
36130 IF CT=3 THEN LOCATE 24,1:PRINT STRING$(35,"\");:LOCATE 24,44:PRINT STRING$(36,"\");:GOTO 36090
36140 LOCATE 24,1:PRINT STRING$(79,"=");:LOCATE 25,1:PRINT STRING$(79,32);:RETURN
36150 LOCATE 24,1:PRINT STRING$(79,"=");:LOCATE 25,1:PRINT STRING$(79,32);:RETURN
37000 REM ************************************************************
37001 REM *** Submenu #1 Function    Process: Display choices M)enu, U)pdate,
37002 REM ***                                 D)elete, A)dd, and S)witch
37003 REM ***                                 page.  Get choice and
37004 REM ***                                 Branch to appropriate function
37005 REM ************************************************************
37010 LOCATE 25,1:PRINT STRING$(79,32);:A$="Enter choice: M)enu, U)pdate, D)elete, A)dd, S)witch page: ":LOCATE 25,1:PRINT A$;
37020 ROW=25:COLUMN=LEN(A$)+2:AX$="MmUuDdAaSs":A1%=1:GOSUB 40130:IF AN$="" GOTO 37010
37030 IF AN$="M" OR AN$="m" THEN RETURN
37040 IF AN$="U" OR AN$="u" GOTO 43000
37050 IF AN$="D" OR AN$="d" GOTO 42000
37070 IF AN$="A" OR AN$="a" GOTO 41000
37080 PAGE=PAGE+1:IF PAGE>ND THEN PAGE=1
37090 CLS:FL=0:GOSUB 2000:GOSUB 7000:GOTO 37000
38000 REM ************************************************************
38001 REM *** Submenu #2 Function      Process: Ask for R)estore, S)witch
38002 REM ***                                   Page, or M)enu and
38003 REM ***                                   Branch to appropriate function
38004 REM ************************************************************
38010 LOCATE 25,1:PRINT STRING$(79,32);:A$="Please choose: R)estore, S)witch page, or M)enu ":LOCATE 25,1:PRINT A$;:ROW=25:COLUMN=LEN(A$)+2:A1%=1:AX$="RrSsMm":GOSUB 40130
38020 TEST$=AN$:IF AN$="" GOTO 38010
38030 IF TEST$="M" OR TEST$="m" THEN CURRENT=-1:RETURN
38040 IF TEST$="P" OR TEST$="p" THEN GOSUB 36000:GOTO 38010
38050 IF TEST$<>"s" AND TEST$<>"S" GOTO 38100
38060 PAGE=PAGE+1:IF PAGE>ND THEN PAGE=1
38070 CLS:FL=0:GOSUB 2000:GOSUB 7000:GOTO 38010
38100 STAT1$="A":GOSUB 12000:GOSUB 35000:CURRENT=RECNUM:GOTO 37000
39000 REM ************************************************************
39001 REM *** Get a Record         Process: Accepts key field, searches
39002 REM ***                               for record, if found, displays
39003 REM ***                               it and verifies that its the
39004 REM ***                               right one.  If not, continue
39005 REM ***                               search until error.  Otherwise,
39006 REM ***                               display the record and branch
39007 REM ***                               to Submenu #1 Function
39008 REM ************************************************************
39010 PAGE=1:FL=0:GOSUB 2000:FL=1:GOSUB 22000:KY$=F$(1):GOSUB 33000
39020 CURRENT=RECNUM
39030 GOSUB 32000:IF STAT$="E" THEN ER=1:CURRENT=-1:GOTO 36000
39040 IF STAT$="D" GOTO 39200
39050 GOSUB 17000:IF KY$<>LEFT$(F$(1),LEN(KY$)) GOTO 39200
39060 GOSUB 7000:LOCATE 25,1:PRINT STRING$(79,32);:A$="Is this it (Y/N)? ":LOCATE 25,1:PRINT A$;
39070 ROW=25:COLUMN=LEN(A$)+2:AX$="YyNn":A1%=1:GOSUB 40130:IF AN$="" GOTO 39060
39080 IF AN$="y" OR AN$="Y" THEN CURRENT=RECNUM:GOTO 37000
39200 RECNUM=RECNUM+1:IF RECNUM>MAXSIZE THEN RECNUM=1
39210 IF RECNUM=CURRENT THEN ER=1:CURRENT=-1:GOTO 36000
39220 GOTO 39030
40127 REM ************************************************************
40128 REM *** Alphanumeric Input routine   IN: ROW,COLUMN, A1%,ax$  OUT: AN$
40129 REM ************************************************************
40130 AN$="":A%=0:LOCATE ROW,COLUMN,0,1,20:PRINT STRING$(A1%,CHR$(22));
40131 IF A%=A1% THEN 40134 ELSE LOCATE ROW,COLUMN+A%,0,1,20:PRINT CHR$(22);
40132 A$=INKEY$:IF A$="" THEN 40132 ELSE IF INSTR(AX$,A$) THEN AN$=AN$+A$:LOCATE ROW,COLUMN+A%,0,1,20:PRINT A$;:A%=A%+1:GOTO 40131
40133 ON INSTR(CHR$(8)+CHR$(13),A$) GOTO 40135,40138:GOTO 40131
40134 A$=INKEY$:IF A$="" THEN 40134 ELSE 40133
40135 IF A%<A1% THEN LOCATE ROW,COLUMN+A%,0,1,20:PRINT CHR$(22);
40136 A%=A%-1:IF A%<0 THEN A%=0:GOTO 40131:ELSE AN$=LEFT$(AN$,LEN(AN$)-1):GOTO 40131
40138 LOCATE ROW,COLUMN+A%,0,1,20:PRINT STRING$(A1%-A%," ");
40139 RETURN
40147 REM ************************************************************
40148 REM ***  FORMATTED NUMERIC INPUT  IN:ROW,COLUMN,AF$   OUT: AN$
40149 REM ************************************************************
40150 GOSUB 40200:PV=LEN(AF$)-1:R1=ROW:C1=COLUMN:AN$="":A%=0:LOCATE ROW,COLUMN:PRINT AF$;:A1%=LEN(AF$)
40151 IF A%=>LEN(AF$) THEN 40156 ELSE A%=INSTR(A%+1,AF$,CHR$(22)):LOCATE ROW,COLUMN+A%-1
40152 A$=INKEY$:IF A$=""THEN 40152 ELSE IF INSTR("1234567890",A$) THEN PRINT A$;:GOTO 40151
40153 ON INSTR(CHR$(8)+CHR$(13),A$) GOTO 40150, 40159
40154 GOTO 40151
40156 A$=INKEY$:IF A$="" THEN 40156 ELSE 40153
40159 AN$="":FOR Z=C1 TO C1+PV:AN$=AN$+CHR$(SCREEN(R1,Z)):NEXT Z:RETURN
40200 FOR Z=1 TO LEN(AF$):IF MID$(AF$,Z,1)="/" THEN MID$(AF$,Z,1)=CHR$(22)
40210 NEXT Z:RETURN
41000 REM ************************************************************
41001 REM *** Add A Record Function       Process: Fill input strings
41002 REM ***                                      write it disk, then
41003 REM ***                                      exit to caller on
41004 REM ***                                      error, or to submenu #1
41005 REM ************************************************************
41020 STAT1$="A":LSET STAT$=STAT1$:PAGE=0:FOR A=1 TO NF:FL=A:GOSUB 2000:GOSUB 22000:NEXT A
41030 LOCATE 25,1:PRINT STRING$(79,32);:A$="Press <Y> to add record or <N> to abort":LOCATE 25,1:PRINT A$;
41040 ROW=25:COLUMN=LEN(A$)+2:AX$="YyNn":A1%=1:GOSUB 40130:IF AN$="N" OR AN$="n"THEN CURRENT=-1:RETURN
41045 IF AN$="" GOTO 41030
41050 KY$=F$(1):GOSUB 33000
41060 GOSUB 32000:IF STAT$="A" GOTO 41100
41070 GOSUB 12000:GOSUB 35000:CURRENT=RECNUM:GOTO 37000
41100 RECNUM=RECNUM+1:IF RECNUM>MAXSIZE THEN RECNUM=1
41110 IF RECNUM=CURRENT THEN ER=2:GOTO 36000
41120 GOTO 41060
42000 REM ************************************************************
42001 REM *** Delete Current Record Function   Process: Verify delete
42002 REM ***                                           then erase it from
42003 REM ***                                           from view by marking
42004 REM ***                                           Stat$ as "D"
42005 REM ************************************************************
42007 IF CURRENT=-1 THEN ER=3:GOTO 36000
42010 LOCATE 25,1:PRINT STRING$(79,32);:A$="Press <Y> to delete this record or <N> to abort.":LOCATE 25,1:PRINT A$;
42020 ROW=25:COLUMN=LEN(A$)+2:AX$="YyNn":A1%=1:GOSUB 40130:IF AN$="N" OR AN$="n" THEN LOCATE 25,1:PRINT STRING$(79,32);:RETURN
42025 IF AN$="" GOTO 42010
42040 RECNUM=CURRENT:GOTO 34000
43000 REM ************************************************************
43001 REM *** Update Current Record Function   Process: Allow modifications
43002 REM ***                                           to specified fields,
43003 REM ***                                           make changes to record,
43004 REM ***                                           then exit to caller.
43005 REM ************************************************************
43010 STAT1$="A":LSET STAT$=STAT1$:KY=0:IF CURRENT=-1 THEN ER=3:GOTO 36000
43020 LOCATE 25,1:PRINT STRING$(79,32);:A$="Enter field number to modify "
43030 LOCATE 25,1:PRINT A$;:ROW=25:COLUMN=LEN(A$)+2:AX$="0123456789":A1%=LEN(STR$(NF))-1:GOSUB 40130:FL=VAL(AN$):IF FL=0 THEN LOCATE 25,1:PRINT STRING$(79,32);:RETURN
43035 IF AN$="" GOTO 43020
43040 IF FL>NF GOTO 43020
43050 PAGE=0:GOSUB 2000:GOSUB 7000:GOSUB 22000:IF FL=1 THEN KY=1
43060 LOCATE 25,1:PRINT STRING$(79,32);:A$="Any more changes (Y/N)? ":LOCATE 25,1:PRINT A$;
43070 ROW=25:COLUMN=LEN(A$)+2:AX$="YyNn":A1%=1:GOSUB 40130:IF AN$="Y" OR AN$="y" GOTO 43020
43075 IF AN$="" GOTO 43060
43080 IF KY=1 GOTO 43100 ELSE RECNUM=CURRENT:GOOD=GOOD-1:GOSUB 12000:GOSUB 35000:GOTO 37000
43100 RECNUM=CURRENT:GOSUB 34000:KY$=F$(1):GOSUB 33000:CURRENT=RECNUM
43110 GOTO 41060
45000 REM ************************************************************
45001 REM *** Search and List Function     Process: Look for records matching
45002 REM ***                                       any specified parameters
45003 REM ***                                       and display them
45004 REM ************************************************************
45010 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:A$="Enter record # to start search or <ENTER> to start at current record ":PRINT A$;
45020 ROW=25:COLUMN=LEN(A$)+2:A1%=LEN(STR$(MAXSIZE)):AX$="0123456789":GOSUB 40130:RECNUM=VAL(AN$)
45030 IF RECNUM<>0 GOTO 45050 ELSE IF CURRENT=-1 THEN RECNUM=1:GOTO 45060
45040 RECNUM=CURRENT:GOTO 45060
45050 IF RECNUM>MAXSIZE THEN RECNUM=1
45060 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:A$="Do you wish to display records that have been deleted (Y/N)? ":PRINT A$;
45070 ROW=25:COLUMN=LEN(A$)+2:AX$="YyNn":A1%=1:GOSUB 40130:IF AN$="" GOTO 45060
45080 DEL$=AN$
45090 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:A$="Do you wish to select by a field's contents (Y/N)? ":PRINT A$;
45100 ROW=25:COLUMN=LEN(A$)+2:AX$="YyNn":A1%=1:GOSUB 40130:IF AN$="" GOTO 45090
45110 TEST$=AN$:IF TEST$="N" OR TEST$="n" GOTO 45200 ELSE LOCATE 25,1:PRINT STRING$(79,32);
45120 LOCATE 25,1:A$="Enter field number to test ":PRINT A$;:ROW=25:COLUMN=LEN(A$)+2:AX$="0123456789":A1%=LEN(STR$(NF)):GOSUB 40130:IF AN$="" GOTO 45120 ELSE FL=VAL(AN$):PAGE=0:GOSUB 2000
45130 LOCATE 25,1:PRINT STRING$(79,32);:A$="Enter test string":LOCATE 25,1:PRINT A$;:ROW=25:COLUMN=LEN(A$)+2:AX$=AQ$:A1%=35:GOSUB 40130:IF AN$="" GOTO 45130
45140 COMPARE$=RIGHT$(AN$,LEN(AN$)-1):TYPE$=LEFT$(AN$,1):IF TYPE$<>"<" AND TYPE$<>">" AND TYPE$<>"=" GOTO 45130
45200 GOSUB 32000:IF STAT$="E" GOTO 45300
45210 IF STAT$<>"D" GOTO 45220
45215 IF DEL$="N" OR DEL$="n" GOTO 45300
45220 IF TEST$="Y" OR TEST$="y" GOTO 45400
45230 GOSUB 17000:PAGE=1:FL=0:GOSUB 2000:GOSUB 7000:LOCATE 25,1:PRINT STRING$(79,32);:IF STAT$="A" THEN S$="Active" ELSE S$="Deleted"
45240 A$="Status: "+S$+": Continue search (Y/N)":LOCATE 25,1:PRINT A$;:ROW=25:COLUMN=LEN(A$)+2:A1%=1:AX$="YyNn":GOSUB 40130:IF AN$="Y" OR AN$="y" GOTO 45300
45250 IF AN$="" GOTO 45240 ELSE IF STAT$="D" GOTO 38000
45260 CURRENT=RECNUM:GOTO 37000
45300 RECNUM=RECNUM+1:IF RECNUM>MAXSIZE THEN CURRENT=-1:RETURN
45310 GOTO 45200
45400 GOSUB 17000:IF TYPE$<>"<" GOTO 45500
45410 IF LEFT$(F$(FL),LEN(COMPARE$))=COMPARE$ GOTO 45230
45420 GOTO 45300
45500 IF TYPE$<>">" GOTO 45600
45510 FOR A=1 TO LEN(F$(FL))-LEN(COMPARE$)
45520 IF MID$(F$(FL),A,LEN(COMPARE$))=COMPARE$ GOTO 45230
45530 NEXT A:GOTO 45300
45600 IF F$(FL)=COMPARE$ GOTO 45230
45610 GOTO 45300
46000 REM ************************************************************
46001 REM *** X-tend Work To New Disk Function  Process: Prompt for new
46002 REM ***                                            data disk mount, then
46003 REM ***                                            read in MAXSIZE from
46004 REM ***                                            .DEF file and return
46005 REM ***                                            to caller
46006 REM ************************************************************
46010 CURRENT=-1:LOCATE 25,1:PRINT STRING$(79,32);:A$="Mount data disk in drive "+LEFT$(NA$,1)+", then press <C> to continue":LOCATE 25,1:PRINT A$;
46020 ROW=25:COLUMN=LEN(A$)+2:AX$="Cc":A1%=1:GOSUB 40130:IF AN$="" GOTO 46010
46030 IN=2:OPEN "I",#2,NA$+".DEF":INPUT#2,MAXSIZE,GOOD:CLOSE:OPEN "i",1,NA$+".vol":INPUT#1,V$:CLOSE:OPEN "r",1,NA$+".DAT",SIZE:IN=0:RETURN
46100 IN=0:LOCATE 25,1:PRINT STRING$(79,32);:GOSUB 47000:GOTO 46000
47000 REM ************************************************************
47001 REM *** Initialize New Data Disk Function  Process: Write records to data
47002 REM ***                                             disk until error
47003 REM ***                                             occurs.  Error
47004 REM ***                                             routine will then
47005 REM ***                                             branch back to line
47006 REM ***                                             47500 where ".DEF"
47007 REM ***                                             file is written.
47008 REM ************************************************************
47010 CLOSE:CURRENT=-1:IN=1:LOCATE 25,1:PRINT STRING$(79,32);:A$="S)pecify number of records, or U)se all available disk space? ":LOCATE 25,1:PRINT A$;
47020 ROW=25:COLUMN=LEN(A$)+2:AX$="SsUu":A1%=1:GOSUB 40130:IF AN$="" GOTO 47020
47030 IF AN$="U" OR AN$="u" GOTO 47100 ELSE LOCATE 25,1:PRINT STRING$(79,32);:A$="How many data records?":LOCATE 25,1:PRINT A$;
47040 ROW=25:COLUMN=LEN(A$)+2:AX$="0123456789":A1%=6:GOSUB 40130:NU=VAL(AN$):IF AN$="" OR NU=0 GOTO 47030
47050 GOTO 47110
47060 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:A$="Enter volume name:":PRINT A$;:ROW=25:COLUMN=LEN(A$)+2:AX$=AQ$:A1%=25:GOSUB 40130:V$=AN$:IF AN$="" GOTO 47060
47070 OPEN "o",1,NA$+".VOL":PRINT#1,V$:CLOSE:RETURN
47100 NU=-1
47110 GOSUB 47060:OPEN "o",2,NA$+".DEF":PRINT#2,100000!,100000!:CLOSE
47120 OPEN "R",#1,NA$+".DAT",SIZE
47125 STAT1$="E":FOR Z=1 TO NF:F$(Z)=STRING$(80,32):NEXT Z:GOSUB 12000
47140 CT=1
47150 LOCATE 25,1:PRINT STRING$(79,32);
47160 A$="Stand by... Initializing record #":LOCATE 25,1:PRINT A$;
47200 LOCATE 25,LEN(A$)+1:PRINT CT;:PUT 1,CT
47210 CT=CT+1:IF NU=-1 GOTO 47200 ELSE NU=NU-1
47220 IF NU=0 GOTO 47500 ELSE GOTO 47200
47500 CLOSE:CT=CT-1:OPEN "O",#2,NA$+".DEF":PRINT#2,CT,0:CLOSE #2
47510 IN=0:LOCATE 25,1:PRINT STRING$(79,32);:RETURN
49000 REM ************************************************************
49001 REM *** BASIC Error Handler         Process: This is really only set
49002 REM ***                                      up to handle the DISK
49003 REM ***                                      SPACE full error when
49004 REM ***                                      initializing a new data
49005 REM ***                                      disk indicated by variable
49006 REM ***                                      IN = 1.  Otherwise ERROR
49007 REM ***                                      code is reported, files are
49008 REM ***                                      closed, and program ends.
49009 REM ************************************************************
49010 IF IN=0 GOTO 49100
49020 IF IN=1 AND ERR=61 THEN RESUME 47500
49030 IF IN=2 AND ERR=53 THEN RESUME 46100
49100 CLS:RESET:PRINT "Internal ERROR #";ERR;" in line #";ERL:PRINT"Consult BASIC manual appendix A for explanation.":END
50000 REM ************************************************************
50001 REM *** Program Title Display Function     Process: Used to display
50002 REM ***                                             program title and
50003 REM ***   Display idea credit to:                   author at beginning
50004 REM ***      John Vandergrift                       and end of program
50005 REM ***                                             execution.
50006 REM ************************************************************
50010 BEEP:CLS:A$=TI$:A1$="B":A2$="Y":A3$=AU$:C=10
50020 GOSUB 50060
50030 A$=STRING$(LEN(A$)," "):A1$=" ":A2$=" ":A3$=STRING$(LEN(A3$)," "):C=9
50040 GOSUB 50060
50050 FOR Z=1 TO 2000:NEXT Z:RETURN
50060 FOR I=1 TO C
50070 LOCATE I,40-LEN(A$)/2:PRINT A$;
50080 LOCATE 12,4*I:PRINT A1$;
50090 LOCATE 12,81-(4*I):PRINT A2$;
50100 LOCATE 24-I,41-(LEN(A3$)/2):PRINT A3$;
50110 NEXT I
50120 RETURN
60000 REM *** Do not remove lines 60000 through 60009!
60001 REM *** This program SKELETON.BAS is to be used with the Ultra-Mind
60002 REM *** intelligent database program generator.  It is copyright, (C),
60003 REM *** 1983, by The FreeSoft Company, P.O. Box 27608, St. Louis, MO
60004 REM *** 63146.  For copies of this and the other Ultra-Utility programs,
60005 REM *** send 2 double sided or 4 single sided diskettes and a postage
60006 REM *** paid self addressed return mailer to the address above.  Specify
60007 REM *** that you want LIBRARIES #1 and #2.  The Ultra-Utilities include
60008 REM *** Ultra-Zap, Ultra-Format, Ultra-File, Ultra-Optimize, and
60009 REM *** Ultra-Mind.  Lines 60000 through 60009 all be removed from all
60010 REM *** programs generated by Ultra-Mind.
```
{% endraw %}

## U-MIND.BAS

{% raw %}
```bas
0 REM *** DO NOT REMOVE OR MODIFY LINES 0 THROUGH 10
1 REM *** U-MIND.BAS and SKELETON.BAS are copyrighted (C),1983 by The FreeSoft
2 REM *** Company, P.O. Box 27608, St. Louis, MO 63146
3 REM *** To get copies of the entire 5 volume set of Ultra-Utilties, send 2
4 REM *** double sided diskettes or 4 single sided diskettes to us at the above
5 REM *** address.  Be sure to include a postage-paid, self-addressed return
6 REM *** mailer and specify that you want LIBRARIES #1 and #2.
7 REM *** The Ultra-Utilities include Ultra-Zap, Ultra-Format, Ultra-File,
8 REM *** Ultra-Optimize, and Ultra-Mind.
9 REM *** AUTHOR: WAT BUCHANON, All Rights Reserved.
10 AQ$=" abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890!@#$%^&*()_-=+}{[]`~':;?><|\,./":AX$=AQ$
20 KEY OFF
30 ON ERROR GOTO 1150
40 DIM EL$(10),CL$(10):CLS:A$="The FreeSoft Company Presents:":A1$="Ultra-Mind":A2$="The Intelligent Data Base Generator":A3$=" Copyright, 1983, The FreeSoft Co."
50 COLOR 7,0:LOCATE 5,(40-LEN(A$)/2):PRINT A$:COLOR 15,0:LOCATE 7,(40-LEN(A1$)/2):PRINT A1$
60 A4$=STRING$(LEN(A3$)," ")
70 LOCATE 9,(40-LEN(A2$)/2):PRINT A2$:COLOR 0,7:LOCATE 13,(40-LEN(A3$)/2):PRINT A3$
80 LOCATE 12,(40-LEN(A3$)/2):PRINT A4$:LOCATE 14,(40-LEN(A3$)/2):PRINT A4$
90 LOCATE 1,1:COLOR 15,0:PRINT STRING$(79,205):LOCATE 24,1:PRINT STRING$(79,205);
100 COLOR 7,0:FOR Z=1 TO 2000:NEXT Z:CLS
110 PRINT"Do you wish to:":PRINT:PRINT"1) Define a database":PRINT"2) Generate a defined database":PRINT:PRINT:PRINT"Enter your choice (1 or 2)"
120 A$=INKEY$:IF A$<>"1" AND A$<>"2" GOTO 120
130 IF A$="2" GOTO 1510
140 CLS
150 PRINT "Enter the filename of your data base (DO NOT INCLUDE AN EXTENSION)"
160 INPUT NA$
170 PRINT:PRINT"Now enter a heading title that will be displayed on the screen:":INPUT TI$
180 PRINT:PRINT"Who is the author of this program:":INPUT AU$:PRINT
190 INPUT "What drive will the data diskette be in (A,B,etc.) ";DA$
200 NA$=DA$+":"+NA$
210 OPEN "O",#1,NA$+".atr":WRITE#1,AU$,NA$,TI$
220 ND=1:NF=1:CLS:LOCATE 24,1:PRINT STRING$(79,205);:GOTO 320
230 TY=0:LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT "1) Enter new field.  2) Start new page  3) Enter non-field symbols.  4) Quit";
240 A$=INKEY$:IF A$="" OR INSTR("1234",A$)=0 GOTO 240
250 IF A$="1" THEN NF=NF+1:GOTO 320
260 IF A$="3" THEN TY=7:NF=NF+1:GOTO 340
270 IF A$="2" THEN ND=ND+1:CLS:GOTO 230
280 IF A$="4" THEN CLOSE:OPEN "O",#1,NA$+".HDR":WRITE#1,NF,ND,TB:CLOSE:CLS
290 PRINT "Do you wish to go ahead and generate the database? (Y/N)"
300 A$=INKEY$:IF A$<>"Y" AND A$<>"y" AND A$<>"N" AND A$<>"n" GOTO 300
310 IF A$="Y" OR A$="y" GOTO 1520 ELSE CLS:PRINT"Program finished...":END
320 LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:IF NF=1 THEN PRINT "<KEY FIELD>"; ELSE PRINT "Field ";NF;
330 GOTO 350
340 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT "Symbols";
350 PRINT ", Page";ND;": Use arrow keys to position cursor then press <H>";
360 GOSUB 820
370 IF TY=7 THEN MR=R:MC=C:B$="":GOTO 410
380 A$=RIGHT$(STR$(NF),LEN(STR$(NF))-1):B$=A$+") "
390 MR=R:MC=C:LOCATE R,C:PRINT B$
400 GOTO 420
410 A$=" Now enter the symbols you wish to put at that position: ":A1%=79:GOTO 430
420 A$=" Now enter the field prompt you wish to use: ":A1%=50
430 WRITE #1,ND,MR,MC:LOCATE 24,(40-LEN(A$)/2):PRINT A$;:ROW=25:COLUMN=1:LOCATE ROW,COLUMN:PRINT STRING$(79,32);
440 GOSUB 1320:LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);:M$=B$+AN$:LOCATE MR,MC:IF TY<>7 THEN PRINT M$;:WRITE #1,M$
450 IF (TY=7 AND M$="@") GOTO 2510 ELSE IF TY=7 THEN GOSUB 1050:GOTO 810
460 A$=" Now enter the type of field: 1) Numeric, ":LOCATE 24,40-LEN(A$)/2:PRINT A$;:LOCATE 25,1:PRINT "2) Alphanumeric, 3) Formatted Numeric, 4) Calculated, 5) Date, 6) Time";
470 A$=INKEY$:IF A$="" OR INSTR("123456",A$)=0 GOTO 470
480 TY=VAL(A$):WRITE#1,TY
490 IF A$="5" THEN AF$=DATE$:FL=10:TB=TB+FL
500 IF A$="6" THEN AF$=TIME$:FL=8:TB=TB+FL
510 LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT "Use arrow keys to position cursor, then press <H>";
520 GOSUB 820:FR=R:FC=C:WRITE #1,FR,FC:IF TY=5 OR TY=6 THEN WRITE#1,FL
530 LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1
540 IF TY=1 OR TY=2 OR TY=4 THEN A$="How many characters long is this field? ":PRINT A$;:ROW=25:COLUMN=LEN(A$)+1:A1%=2:GOSUB 1320:FL=VAL(AN$):AF$=STRING$(FL,22)
550 IF TY=3 THEN A$="Enter your special format below.  Use \'s for input character positions:":LOCATE 24,1:PRINT A$;:ROW=25:COLUMN=1:A1%=80-FC:GOSUB 1320:AF$=AN$:LOCATE 24,1:PRINT STRING$(79,205);
560 IF TY=3 THEN FOR A=1 TO LEN(AF$):IF MID$(AF$,A,1)="\" THEN MID$(AF$,A,1)=CHR$(22)
570 IF TY=3 THEN NEXT A:FL=LEN(AF$)
580 IF FL=0 THEN LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT "ERROR - Null fields not allowed. Use symbolic fields.  Press <C> to continue";:ELSE GOTO 600
590 A$=INKEY$:IF A$="C" OR A$="c" THEN LOCATE MR,MC:PRINT STRING$(LEN(M$),32);:GOTO 320 ELSE GOTO 590
600 IF TY=1 OR TY=2 OR TY=3 THEN TB=TB+FL:WRITE #1,FL
610 IF TY=3 THEN WRITE #1,AF$
620 LOCATE FR,FC:PRINT AF$;
630 IF TY=4 THEN LOCATE 25,1:A$="How many lines of calculations for this field? ":PRINT A$;:ROW=25:COLUMN=LEN(A$)+1:A1%=2:GOSUB 1320:CL=VAL(AN$):IF CL=0 GOTO 630 ELSE WRITE#1,CL
640 IF TY=4 THEN FOR A=1 TO CL:LOCATE 25,1:PRINT STRING$(79,32);:A$=" Enter calculation line #"+STR$(A)+" of"+STR$(CL)+" ":LOCATE 24,40-LEN(A$)/2:PRINT A$;:ROW=25:COLUMN=1:A1%=70:GOSUB 1320:CL$=AN$:WRITE#1,CL$:NEXT A
650 LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);
660 GOSUB 1160:IF TY=1 THEN LOCATE 25,1:PRINT STRING$(73,32);:LOCATE 25,1:A$="How many lines of edit checking for this field? ":PRINT A$;:ROW=25:COLUMN=LEN(A$)+1:A1%=2:GOSUB 1320:EL=VAL(AN$)
670 IF TY=1 OR TY=2 THEN WRITE#1,AI$:IF TY=1 THEN WRITE#1,EL
680 IF (TY=2 AND NF<>1) THEN LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:A$="Null entry valid (Y/N)":PRINT A$;:ROW=25:COLUMN=LEN(A$)+2:A1%=1:GOSUB 1320:IF INSTR("YyNn",AN$)=0 GOTO 680 ELSE PRINT#1,AN$
690 IF TY=1 AND EL<>0 THEN FOR A=1 TO EL:A$=" Enter edit check line #"+STR$(A)+" of"+STR$(EL)+" ":LOCATE 24,40-(LEN(A$)/2):PRINT A$;:ROW=25:COLUMN=1:A1%=70:GOSUB 1320:EL$=AN$
700 IF TY=1 AND EL<>0 THEN GOSUB 1020:IF T=0 THEN WRITE#1,EL$:NEXT A:GOTO 730:ELSE LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT "ERROR - illegal edit command! Press <C> to continue.";
710 IF TY=3 THEN WRITE#1,AI$
720 IF TY=1 AND EL<>0 THEN A$=INKEY$:IF A$="c" OR A$="C" GOTO 660 ELSE GOTO 720
730 LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);
740 IF TY=1 OR TY=4 THEN LOCATE 25,1:A$="Do you wish to have a special format for printing the field (Y/N)? ":PRINT A$;:ROW=25:COLUMN=LEN(A$)+1:A1%=1:GOSUB 1320:SP$=AN$:IF SP$<>"Y" AND SP$<>"y" AND SP$<>"N" AND SP$<>"n" GOTO 740
750 IF TY=1 OR TY=4 THEN WRITE#1,SP$
760 IF (TY=1 OR TY=4) AND (SP$="Y" OR SP$="y") THEN A$="Enter your printing format below. Use #'s for char. positions":LOCATE 24,40-LEN(A$)/2:PRINT A$;:LOCATE 25,1:PRINT STRING$(79,32);:ROW=25:COLUMN=1:A1%=FL:GOSUB 1320:SF$=AN$
770 LOCATE 24,1:PRINT STRING$(79,205);:IF (TY=1 OR TY=4) AND (SP$="y" OR SP$="Y") THEN AC=0:FOR A=1 TO LEN(SF$):IF MID$(SF$,A,1)="#" THEN AC=AC+1
780 IF (TY=1 OR TY=4) AND (SP$="Y" OR SP$="y") THEN NEXT A:IF AC>0  THEN WRITE#1,SF$:GOTO 810
790 IF (TY=1 OR TY=4) AND (SP$="Y" OR SP$="y") THEN LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT "ERROR - null print field! Press <C> to continue.";
800 IF (TY=1 OR TY=4) AND (SP$="y" OR SP$="Y") THEN A$=INKEY$:IF A$="c" OR A$="C" THEN LOCATE 25,1:PRINT STRING$(79,32);:GOTO 740:ELSE GOTO 800
810 GOTO 230
820 R=23:C=40
830 HOLD=SCREEN(R,C,0)
840 DEF SEG = &H40:A=PEEK(&H17):B= A OR 32:POKE &H17,B
850 LOCATE R,C: PRINT CHR$(4);
860 A$=INKEY$:IF A$="" GOTO 860
870 IF INSTR ("48621793Hh",A$)=0 GOTO 860
880 IF A$="H" OR A$="h" THEN LOCATE R,C:PRINT CHR$(HOLD):GOTO 1000
890 IF A$="4" THEN AR=0:AC=-1:GOTO 970
900 IF A$="8" THEN AR=-1:AC=0:GOTO 970
910 IF A$="6" THEN AR=0:AC=1:GOTO 970
920 IF A$="7" THEN AR=-R+1:AC=-C+1:GOTO 970
930 IF A$="9" THEN AR=-R+1:AC=73-C:GOTO 970
940 IF A$="3" THEN AR=23-R:AC=73-C:GOTO 970
950 IF A$="1" THEN AR=23-R:AC=-C+1:GOTO 970
960 AR=1:AC=0
970 IF R+AR>23 OR R+AR<1 THEN BEEP:GOTO 840
980 IF C+AC>73 OR C+AC<1 THEN BEEP:GOTO 840
990 LOCATE R,C:PRINT CHR$(HOLD):R=R+AR:C=C+AC:SOUND 7000,1:GOTO 830
1000 IF HOLD=32 THEN RETURN ELSE LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT "ERROR - You are overwriting other screen information!  Press <C> to continue";
1010 A$=INKEY$:IF A$="C" OR A$="c" THEN LOCATE 25,1:PRINT STRING$(79,32);:GOTO 820 ELSE GOTO 1010
1020 REM *** check edits for syntax
1030 A$=LEFT$(EL$,1):IF A$="<" OR A$=">" OR A$="=" THEN T=0 ELSE T=1
1040 RETURN
1050 IF LEFT$(M$,1)<>"@" GOTO 1140
1060 REM *** PROCESS REPEATING SYMBOL LINE ***
1070 Q$=RIGHT$(M$,LEN(M$)-1):AZ=LEN(Q$)
1080 A$="":T$="":FOR Z=1 TO AZ
1090 K$=MID$(Q$,Z,1):IF K$="," THEN A9=VAL(T$):A$=A$+CHR$(A9):T$="":GOTO 1110
1100 T$=T$+K$
1110 NEXT Z:A9=VAL(T$):A$=A$+CHR$(A9):M$=""
1120 R$=LEFT$(A$,1):R=ASC(R$):A$=RIGHT$(A$,LEN(A$)-1)
1130 FOR A=1 TO R:M$=M$+A$:NEXT A
1140 PRINT M$;:WRITE #1,M$,TY:RETURN
1150 CLOSE:CLS:PRINT"ERROR";ERR;"in line";ERL:STOP
1160 IF TY<>1 AND TY<>2 AND TY<>3 THEN RETURN ELSE LOCATE 24,1:PRINT STRING$(79,32);
1170 LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:A1$="Do you wish to restrict input characters (Y/N)? ":PRINT A1$;:ROW=25:COLUMN=LEN(A1$)+1:A1%=1:GOSUB 1320
1180 IF INSTR("YyNn",AN$)=0 GOTO 1170
1190 IF INSTR("Yy",AN$)=0 AND TY=2 THEN AI$=AX$:RETURN
1200 IF INSTR("Yy",AN$)=0 AND (TY=1 OR TY=3) THEN AI$="0123456789.-":RETURN
1210 LOCATE 24,1:PRINT STRING$(79,32);:LOCATE 25,1:PRINT STRING$(79,32);:LOCATE 24,1:A1$="Type X under character to restrict it: ":PRINT A1$;
1220 AI$="":AT$="0123456789+.-":GOSUB 1260:IF TY=1 OR TY=3 THEN LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);:RETURN
1230 AT$="ABCDEFGHIJKLMNOPQRSTUVWXYZ":GOSUB 1260
1240 AT$="abcdefghijklmnopqrstuvwxyz":GOSUB 1260
1250 AT$="!@#$%^&*()_=[]}{;:"'`~<>?,/\|":gosub 10100:LOCATE 24,1:PRINT STRING$(79,205);:LOCATE 25,1:PRINT STRING$(79,32);:return
1260 LOCATE 24,LEN(A1$)+1:PRINT AT$;:ROW=25:COLUMN=LEN(A1$)+1:A1%=LEN(AT$):AX$=" Xx":GOSUB 1320:AX$=AQ$:IF LEN(AN$)<>LEN(AT$) THEN AN$=AN$+STRING$(LEN(AT$)-LEN(AN$),32)
1270 FOR Z=1 TO LEN(AN$):IF MID$(AN$,Z,1)=" " THEN AI$=AI$+MID$(AT$,Z,1)
1280 NEXT Z:LOCATE 24,LEN(A1$)+1:PRINT STRING$(LEN(AT$),32);:LOCATE 25,1:PRINT STRING$(79,32);:RETURN
1290 REM _____________________________________________________________________
1300 REM * IN: ROW,COLUMN, A1%     OUT: AN$
1310 REM _____________________________________________________________________
1320 AN$="":A%=0:LOCATE ROW,COLUMN,0,1,20:PRINT STRING$(A1%,CHR$(22));
1330 IF A%=A1% THEN 1360 ELSE LOCATE ROW,COLUMN+A%,0,1,20:PRINT CHR$(22);
1340 A$=INKEY$:IF A$="" THEN 1340 ELSE IF INSTR(AX$,A$) THEN AN$=AN$+A$:LOCATE ROW,COLUMN+A%,0,1,20:PRINT A$;:A%=A%+1:GOTO 1330
1350 ON INSTR(CHR$(8)+CHR$(13),A$) GOTO 1370,1390:GOTO 1330
1360 A$=INKEY$:IF A$="" THEN 1360 ELSE 1350
1370 IF A%<A1% THEN LOCATE ROW,COLUMN+A%,0,1,20:PRINT CHR$(22);
1380 A%=A%-1:IF A%<0 THEN A%=0:GOTO 1330:ELSE AN$=LEFT$(AN$,LEN(AN$)-1):GOTO 1330
1390 LOCATE ROW,COLUMN+A%,0,1,20:PRINT STRING$(A1%-A%," ");
1400 RETURN
1410 REM _____________________________________________________________________
1420 REM   FORMATTED NUMERIC INPUT  IN:ROW,COLUMN,AF$   OUT: AN$
1430 REM _____________________________________________________________________
1440 AN$="":A%=0:LOCATE ROW,COLUMN:PRINT AF$;:A1%=LEN(AF$)
1450 IF A%=>LEN(AF$) THEN 1490 ELSE A%=INSTR(A%+1,AF$,CHR$(22)):LOCATE ROW,COLUMN+A%-1
1460 A$=INKEY$:IF A$=""THEN 1460 ELSE IF INSTR("1234567890",A$) THEN PRINT A$;:AN$=AN$+A$:GOTO 1450
1470 ON INSTR(CHR$(8)+CHR$(13),A$) GOTO 1440, 1500
1480 GOTO 1450
1490 A$=INKEY$:IF A$="" THEN 1490 ELSE 1470
1500 RETURN
1510 CLS:INPUT "NAME ";NA$
1520 OPEN "I",#1,NA$+".HDR":INPUT #1,NF,ND,TB
1530 CLOSE:TB=TB+1
1540 OPEN "I",#2,NA$+".ATR":OPEN "O",#1,NA$+".BAS"
1550 LN=1:Q$=CHR$(34):RM$="REM "+STRING$(65,"*")
1560 PRINT#1,LN;RM$:INPUT#2,AU$,NA$,TI$:DR$=LEFT$(NA$,2):LN=2:PRINT#1,LN;"REM *** PROGRAM ";NA$;".BAS":LN=3:PRINT#1,LN;"REM *** AUTHOR: ";AU$
1570 LN=4:PRINT#1,LN;"REM *** DATA DISKETTE MOUNTED ON DRIVE ";DR$
1580 LN=5:PRINT#1,LN;RM$
1590 LN=10:PRINT#1,LN;"SIZE=";TB;":ND=";ND;":TI$=";Q$;TI$;Q$;":NF=";NF;":AU$=";Q$;AU$;Q$;":na$=";Q$;NA$;Q$
1600 LN=20:PRINT#1,LN;"DIM F$(";NF;"),fr$(";NF;")"
1610 REM *****************************************************************
1620 PRINT "*** GENERATE BLOCKING ROUTINE                                 ***"
1630 REM *****************************************************************
1640 LN=12010:CT=1:PRINT#1,LN;"FIELD #1, 1 AS STAT$:LSET STAT$=STAT1$"
1650 FOR Z1=1 TO NF:V1=Z1:GOSUB 2330:IF TY=4 OR TY=7 GOTO 1710
1660 LN=LN+5:PX=CT:PRINT#1,LN;"field 1, ";
1670 IF PX>=255 THEN PRINT #1,"255 as n$, ";:PX=PX-255:GOTO 1670
1680 IF PX<>0 THEN PRINT#1,PX;" as n$, ";
1690 PRINT#1,FL;" as fr$(";Z1;"):lset fr$(";Z1;")=f$(";Z1;")"
1700 CT=CT+FL
1710 NEXT Z1:LN=LN+5:PRINT#1,LN;"RETURN":CLOSE#2:OPEN "I",2,NA$+".ATR":INPUT#2,AU$,NA$,TI$
1720 REM *****************************************************************
1730 PRINT "*** GENERATE UN-BLOCKING ROUTINE                              ***"
1740 REM *****************************************************************
1750 LN=17010:CT=1:PRINT#1,LN;"FIELD #1, 1 AS STAT$:STAT1$=STAT$"
1760 FOR Z1=1 TO NF:V1=Z1:GOSUB 2330:IF TY=4 OR TY=7 GOTO 1820
1770 LN=LN+5:PX=CT:PRINT#1,LN;"FIELD 1, ";
1780 IF PX>=255 THEN PRINT#1,"255 AS N$, ";:PX=PX-255:GOTO 1780
1790 IF PX<>0 THEN PRINT#1,PX;" AS N$, ";
1800 PRINT#1,FL;" AS FR$(";Z1;"):F$(";Z1;")=FR$(";Z1;")";:IF TY=1 THEN K=Z1:GOSUB 2310:PRINT#1,":";V$;"=VAL(F$(";Z1;"))" ELSE PRINT #1,""
1810 CT=CT+FL
1820 NEXT Z1:LN=LN+5:PRINT#1,LN;"RETURN":CLOSE#2:OPEN "I",2,NA$+".ATR":INPUT#2,AU$,NA$,TI$
1830 REM *****************************************************************
1840 PRINT "*** GENERATE DISPLAY FIELDS ROUTINE                           ***"
1850 REM *****************************************************************
1860 LN=7010:FOR Z1=1 TO NF:V1=Z1:GOSUB 2330:IF TY=4 OR TY=7 GOTO 1910
1870 LN=LN+5:PRINT#1,LN;"IF PAGE=";PG;" THEN LOCATE ";FR;",";FC;":";
1880 IF TY=1 AND (SP$="y" OR SP$="Y") THEN PRINT#1,"PRINT USING ";Q$;SF$;Q$;";";:K=Z1:GOSUB 2310:PRINT#1,V$:GOTO 1900:ELSE PRINT #1,"PRINT ";
1890 PRINT#1,"F$(";Z1;");"
1900 NEXT Z1:LN=LN+5:PRINT#1,LN;"RETURN":CLOSE#2:OPEN "I",2,NA$+".ATR":INPUT#2,AU$,NA$,TI$:GOTO 1970
1910 IF TY=7 GOTO 1900
1920 LN=LN+5:PRINT#1,LN;"IF PAGE<>";PG;" GOTO ";LN+((CL+2)*5)
1930 FOR Q=1 TO CL:LN=LN+5:PRINT#1,LN;CL$(Q):NEXT Q
1940 LN=LN+5:PRINT#1,LN;"F$(";Z1;")=STR$(F";:Z1$=STR$(Z1):Z1$=RIGHT$(Z1$,LEN(Z1$)-1):PRINT#1,Z1$;"#):LOCATE ";FR;",";FC;":PRINT ";:IF SP$="y" OR SP$="Y" THEN PRINT#1,"USING ";Q$;SF$;Q$;";
1950 K=Z1:GOSUB 2310:PRINT#1,V$
1960 GOTO 1900
1970 REM ****************************************************************
1980 PRINT "*** GENERATE SCREEN INFO DISPLAY ROUTINE                      ***"
1990 REM ****************************************************************
2000 LN=2013:PRINT#1,LN;"LOCATE 24,1:PRINT STRING$(79,61);":LN=2010:FOR Z2=1 TO NF:V1=Z2:GOSUB 2330
2010 LN=LN+5:PRINT#1,LN;"IF PAGE=";PG;" THEN LOCATE ";MR;",";MC;":PRINT ";Q$;M$;Q$;";"
2020 NEXT Z2:CLOSE #2:OPEN "I",2,NA$+".ATR":INPUT#2,AU$,NA$,TI$:LN=LN+5
2030 PRINT#1,LN;"RETURN":LN=LN+5
2040 X=2010:PRINT#1,X;"IF FL<>0 GOTO ";LN
2050 FOR Z2=1 TO NF:V1=Z2:GOSUB 2330:PRINT#1,LN;"IF (FL=";Z2;" AND PAGE<>";PG;") THEN PAGE=";PG;":CLS:GOTO 2013":LN=LN+5:NEXT Z2:PRINT#1,LN;"RETURN"
2060 CLOSE #2:OPEN "I",2,NA$+".ATR":INPUT#2,AU$,NA$,TI$
2070 REM ****************************************************************
2080 PRINT "*** GENERATE INPUT FIELD AND EDIT CHECKING ROUTINE            ***"
2090 REM ****************************************************************
2100 LN=22010:FOR Z2=1 TO NF:V1=Z2:GOSUB 2330
2110 IF TY=4 OR TY=7 THEN PRINT#1,LN;"IF Fl=";Z2;" THEN RETURN":GOTO 2190
2120 IF TY=5 THEN PRINT#1,LN;"IF Fl=";Z2;" THEN F$(";Z2;")=DATE$:LOCATE ";FR;",";FC;":PRINT F$(";Z2;"):RETURN":GOTO 2190
2130 IF TY=6 THEN PRINT#1,LN;"IF Fl=";Z2;" THEN F$(";Z2;")=TIME$:LOCATE ";FR;",";FC;":PRINT F$(";Z2;"):RETURN":GOTO 2190
2140 IF TY=2 THEN PRINT#1,LN;"IF Fl=";Z2" THEN ROW=";FR;":COLUMN=";FC;":A1%=";FL;":AX$=";Q$;AI$;Q$;":GOSUB 40130:";:IF Z2=1 OR (Z2<>1 AND NE$="n" OR NE$="N") THEN PRINT#1,"IF AN$="Q$;Q$;" GOTO ";LN;" ELSE ";
2150 IF TY=2 THEN PRINT#1,"F$(";Z2;")=AN$:RETURN":GOTO 2190
2160 IF TY=3 THEN PRINT#1,LN;"IF Fl=";Z2;" THEN ROW=";FR;":COLUMN=";FC;":AF$=";Q$;AF$;Q$;":AX$=";Q$;AI$;Q$;":GOSUB 40150:";:IF Z1=1 THEN PRINT#1,"IF AN$=";Q$;Q$;" GOTO ";LN;" ELSE ";
2170 IF TY=3 THEN PRINT#1,"F$(";Z2;")=AN$:RETURN":GOTO 2190
2180 IF TY=1 GOTO 2200
2190 LN=LN+5:NEXT Z2:PRINT#1,LN;"RETURN":GOTO 2250
2200 SV=LN:PRINT#1,LN;"IF Fl<>";Z2;" GOTO ";LN+((EL+2)*5);" ELSE ROW=";FR;":COLUMN=";FC;":A1%=";FL;":AX$=";Q$;AI$;Q$;":GOSUB 40130:";:IF Z2=1 THEN PRINT#1,"IF AN$=";Q$;Q$;" GOTO ";LN;" ELSE ";
2210 PRINT#1,"F$(";Z2;")=AN$:";:P$=STR$(Z2):P1$=RIGHT$(P$,LEN(P$)-1)+"#":PRINT#1,"F";P1$;"=VAL(AN$)"
2220 IF EL=0 GOTO 2240 ELSE FOR Z3=1 TO EL:LN=LN+5:PRINT#1,LN;"IF F";P1$;EL$(Z3);"THEN ER$=";Q$;EL$(Z3);Q$;":ER=4:GOSUB 36000:GOTO ";SV
2230 NEXT Z3
2240 LN=LN+5:PRINT#1,LN;"RETURN":GOTO 2190
2250 CLOSE:OPEN "o",1,NA$+".bat":PRINT#1,"BASIC ";NA$+".bas";"/F:2/S:";TB:CLOSE
2260 PRINT:PRINT "Now Merging Skeleton Program...":CL$=STRING$(255,32)
2270 OPEN "a",1,NA$+".bas":OPEN "i",2,"skeleton.bas"
2280 LINE INPUT#2,A$:PRINT ".";:PRINT#1,A$
2290 IF EOF(2) GOTO 2300 ELSE GOTO 2280
2300 RESET:CLS:PRINT "Program ";NA$+".BAS";" has been generated!":END
2310 V$=STR$(K):V$=RIGHT$(V$,LEN(V$)-1):V$="F"+V$+"#":RETURN
2320 RESET:STOP
2330 REM *** READ IN NEXT FIELD ATTRIBUTES
2340 INPUT#2,PG,MR,MC,M$,TY:IF TY=7 THEN RETURN
2350 IF TY<>1 AND TY<>2 GOTO 2400
2360 INPUT#2,FR,FC,FL,AI$:IF TY=2 GOTO 2490 ELSE INPUT#2,EL:IF EL=0 GOTO 2380
2370 ERASE EL$:DIM EL$(EL):FOR Z=1 TO EL:INPUT#2,EL$(Z):NEXT Z
2380 INPUT#2,SP$:IF SP$="y" OR SP$="Y" THEN INPUT#2,SF$
2390 RETURN
2400 IF TY<>3 GOTO 2430
2410 INPUT#2,FR,FC,FL,AF$,AI$
2420 RETURN
2430 IF TY<>4 GOTO 2460
2440 INPUT#2,FR,FC,CL:ERASE CL$:DIM CL$(CL):FOR Z=1 TO CL:INPUT#2,CL$(Z):NEXT Z:INPUT#2,SP$:IF SP$="y" OR SP$="Y" THEN INPUT#2,SF$
2450 RETURN
2460 IF TY<>5 AND TY<>6 GOTO 2480
2470 INPUT#2,FR,FC,FL:RETURN
2480 RETURN
2490 IF V1<>1 THEN INPUT#2,NE$
2500 RETURN
2510 LOCATE 25,1:PRINT"<Help>: Enter key-> ";
2520 Z$=INKEY$:IF Z$="" GOTO 2520
2530 PRINT Z$;" is ASCII code";ASC(Z$);"... Press <C> to cont.";
2540 Z$=INKEY$:IF Z$<>"C" AND Z$<>"c" GOTO 2540
2550 GOTO 410
```
{% endraw %}

## U-MIND.DOC

{% raw %}
```


















    







                -----------------------------------------------
                :                                             :
                : Supplement To Ultra-Utilities Documentation :
                :                                             :
                :           >>>>>> Ultra-Mind <<<<<<          :
                :                                             :
                :  The Intelligent Database Program Generator :
                :                                             :
                -----------------------------------------------

                  RELEASE 1.0, First Release, December, 1983
                             Author: Wat Buchanon
          
          
                    

          Ultra-Mind program and documentation Copyright (C), 1983, The
          FreeSoft Company, P.O. Box 27608, St. Louis, MO 63146.  All Rights
          Reserved.  Please see Ultra-Utilities documentation for warranty and
          duplication policy.
                               Table Of Contents
                               -----------------

          Introduction........................................UM-1
          
          Defining And Generating Your Database...............UM-2
          
          How To Use The Generated Program....................UM-8
          
          Appendix A: Format Of Ultra-Mind Disk Files.........UM-11
          
          Appendix B: Wish List...............................UM-13
          
          Appendix C: The Ultra-Utilities.....................UM-14
          
          Appendix D: Limited License For Ultra-Mind..........UM-15
          UM-1)                   Introduction
                                  ------------
          
          At FreeSoft, we do quite a lot of database work, both for ourselves 
          and for clients.  After writing about the seven millionth database 
          manager, we came to a startling conclusion: very little was actually 
          changing from program to program.  We admittedly are experts when it 
          comes to reinventing the wheel, but this time a thought struck us, 
          "Why not write a database program generator?" (TA-DA! Sound of 
          trumpets...).  Well, that was several years ago, and Ultra-Mind is 
          the end result.  Basically what it does is allow you to set up your 
          unique database needs, and then actually writes a dedicated database 
          program in BASIC while you watch.
          
          What we found was that we were doing in a few minutes what used to 
          take hours or days.  Here's a brief outline of Ultra-Mind's 
          capabilities and features:
          
          1) This program allows you to set up a customized data entry system 
             and then writes a dedicated BASIC database manager program.
          
          2) The data entry can be divided into multiple screens, called 
             "pages".
          
          3) Several different types of input fields are supported: Numeric,    
             Alphanumeric, Formatted Numeric, Calculated, Automatic Date, and   
             Automatic Time.  In addition, the user can specify any keys that   
             are restricted from entry for each individual field (No Z's 
             allowed, for instance).
          
          4) Non-field symbols, such as titles or borders, can be placed any-   
             where on the data entry screens for a truly professional 
             appearance.
          
          5) Generated program is documented with remarks for easy 
             customization.
          
          6) Sophisticated hashing algorithm nullifies BASIC's slow execution.  
             Typical record access (no matter how many records in the system)   
             when the key field is known is under 1/2 second.
          
          7) Knowledge of BASIC, data-file input/output routines, or other      
             special functions is not required.  A small amount of BASIC 
             formula format is helpful for using calculation fields.
          
          8) All generated programs can be compiled for added speed under the   
             Search and List functions.
          
          9) Number of fields and total field characters dependent only on 
             available memory (total field characters per record must be less   
             than 65,536 characters not counting program size).

          We hope you'll enjoy this package and will choose to support The 
          FreeSoft Company in our endeavor to bring you the most interesting 
          software at the best price.  We place this product in your hands at 
          no cost in order for you to truly judge its appropriatness for your 
          applications.
          UM-2)           Defining And Generating Your Database
                          -------------------------------------

          Before executing the Ultra-Mind program generator, you should insure 
          that the following programs are on the diskette in your logged 
          (default) disk drive:
          
          1) Ultra-Mind program generator (U-MIND.BAS)
          2) Ultra-Mind skeleton program (SKELETON.BAS)
          3) BASIC programming language  (BASIC.COM or BASICA.COM)

          From the DOS prompt, type: BASIC U-MIND
          and the program should load and execute after a few seconds.  You 
          will first be presented with the question:
          
          Do you wish to:
          
          1) Define a database
          2) Generate an already defined database
          
          You should reply by pressing the '1' key (don't press <ENTER> after 
          this). The program will ask you for a filename for the resulting 
          program (8 characters, first character alphabetic).  DO NOT add an 
          extension (a period followed by 1-3 characters) to this filename. The 
          program will now ask you for the title of the program and the 
          author's name (yours!). Finally, you'll be asked which disk drive 
          will later be used to hold the data file.  You should have a disk 
          with plenty of room in this drive, as the generated program itself,
          as well as several other information files will be sent to this drive
          while Ultra-Mind is working.         
          
            You are now presented with the screen layout display. This display 
          is used to tell Ultra-Mind the information you wish to have displayed
          in your database program data entry screens, as well as to define the
          type of input fields.
          
          The bottom of the screen is used as a message area in both the 
          program generator and in your generated program.  Therefore, the top 
          23 lines of the screen are reserved for your information.
          
          First, a little background on database files.  A database file
          consists of a group of individual entries called "records".  A record
          might be a recipe, information on an employee, or an address book
          listing.  Each record is further subdivided into groups of 
          information called "fields".  In an employee record, one field might 
          contain the date the employee was hired, and another might have his 
          zip code.  One of the fields in each record is predefined as the "key 
          field".  This is the field that best identifies each record, and will 
          be used to retrieve the record from the file.  If a file contained 
          records of inventory parts, you might designate the inventory number 
          as the key field.  In an address list, you might use the person's 
          last name as a key field.
          
          Why the last name instead of the full name?  Ultra-Mind works best in 
          applications where you know the key field.  It's easy to forget 
          whether you entered a person as George Smith or W. G. Smith, so the 
          last name system would work best.  If you're not sure of the key 
          field exactly, there is a mechanism for still finding the record, but 
          it is much slower.
          UM-3)
          O.K., back to the program.  At the bottom of the screen, you should 
          see the message:
          
          <Key Field>, Page 1: Use arrow keys to position cursor, then press 
            <H>.
          
          There are three parts to a field, it's number (the key field is 
          always field number 1), the field prompt (that tells you what to 
          enter), and the input field area itself.  Directly above the message 
          area in the center you should see a diamond character.  This is 
          Ultra-Mind's "cursor", and is what you will move around to point to 
          different areas of the screen.  Practice moving the cursor around 
          with the arrow keys (or the number keys 8=up, 2=down, 6=right, and 
          4=left).  Notice that if you press the Home key (or 7 key), the 
          cursor jumps to the upper left hand corner of the screen.  The PgUp 
          (or 9) key moves the cursor to the upper right, the PgDn (or 3) moves 
          to the lower right, and the End (or 1) key moves the cursor to the 
          lower left corner.  Select a place that will be appropriate for the 
          key field and press the 'H' key.  Notice that the characters "1)" 
          appear where the cursor used to be.  That's the field number that 
          will make it easy for you to later tell the generated program which 
          field you want to update or search for.
          
          At the bottom of the screen, a new message appears telling you to 
          enter the field prompt you wish to use.  Type in a descriptive 
          message that will prompt the user to type in the correct information 
          for that field (like NAME: or PART NUMBER:, for instance).  You have 
          up to 50 characters for the field prompt, and you can leave it blank 
          should you wish.  The program will again ask you to position the 
          cursor and press the <H> key.  Don't worry about moving the cursor 
          over other characters on the screen, it's doesn't destroy what it 
          moves over.  Don't allow your information to overlap other fields, 
          though, or you will get an error message.
          
          When you've positioned the cursor and pressed the H key, you'll see 
          your field prompt appear at that location.  Now, we must tell the 
          computer what type of field this is.  The different field types each 
          ask different questions, so we'll cover them one at a time.
          
          NUMERIC
          -------
          This type of field is composed only of numeric symbols, that is 0-9, 
          the plus and minus signs and the decimal point (period).  Although it
          is kept as a string of characters in the disk file, it is converted 
          into a number when displayed by the generated program.  Only numeric 
          fields can be used by calculation fields (described below).
          
          When you select this type of field, you will be asked to type in the
          length of the field.  This is the number of characters that the 
          largest possible number that can be entered will have.  FOR ALL 
          FIELDS, THE FIELD NUMBER, FIELD PROMPT, AND INPUT FIELD MUST NOT BE 
          GREATER THAN 79 CHARACTERS LONG TOTAL.  Because the number of fields 
          is limited only by your computer's memory (and believe us, you have 
          plenty of room), this really isn't a problem.  Just split up extra 
          long fields into smaller ones.  You will then be asked to locate the
          cursor and press <H>.  When you have done so, the input field appears
          as a series of small boxes.  This field now looks exactly as it will
          on the data entry screen of the generated program.
          UM-4)
          There is still more information the computer needs about this field.  
          It next asks if you wish to restrict input characters.  If you type 
          "N", any numeric character can be typed into the field.  If you 
          answer "Y", you will be shown a list of all numeric characters and 
          asked to type an "X" under the characters you wish to restrict.  Type 
          a space under those you wish to allow.  Those characters that you 
          restrict will be dead on the keyboard during entry of this field.
          
          Now the program asks you how many lines of edit checking you wish to 
          have.  If you don't wish to check the field for entry errors, just 
          type a 0.  Otherwise, for each edit check you'll be asked to enter an 
          edit string.  The format for an edit string is:
          
          TESTSYMBOL VALUE
          
          Where TESTSYMBOL is either a > (greater than), < (less than), or = 
          (equal to), and VALUE is a number.  Edit checks should be entered in 
          the negative.  In otherwords the edit check:
          < 52 
          will tell the operator they've made an error only if the number they 
          enter into this field is less than 52. 
          
          Finally, you'll be asked if you wish to use a special printing format 
          when this field is later displayed.  If you do, just type the format 
          as you would the format string in a BASIC PRINT USING statement 
          (without surrounding quotes).  You should consult your BASIC manual 
          on the PRINT USING statement if you're unsure of this.  As an 
          example, if a field contained the number 342342.345 and your special 
          printing format was ###,###.## the number would be displayed as 
          342,342.34 when the record is displayed later.        
          
          ALPHANUMERIC
          ------------
          This field is used for entries that are either all alphabetic or 
          mixed letters, symbols, and numbers.  Even if a number is entered 
          into an alphanumeric field, it will be considered only a string of 
          characters, and calculation fields cannot use it.
          
          This type of field needs the same type of information as numeric 
          fields in the way of field position, field length, and input 
          character restriction, except that it does not ask for edit checks or 
          special printing formats.  There is only one type of edit check for 
          alphanumeric fields and that is for a null entry (<ENTER> pressed 
          without entering any characters).  Null entries can be allowed in any 
          field except the key field.

          FORMATTED NUMERIC
          -----------------
          This is a special type of field that allows you to enter numbers into 
          a "template".  For instance, the parentheses, space,  and hyphen in  
          the following number (323) 343-3423 identify it as a phone number.  
          Although formatted numeric fields are handy for entering numeric data 
          into a template, the resulting number is treated as a string of 
          characters, including the special symbols used in the template, and 
          cannot be used by calculation fields.  After locating the cursor 
          where you wish the input template to appear and pressing H, the 
          computer will ask you to enter your special format.  Any special keys 
          can go into the template except the backslash (\).  The backslash is 
          used to show where the input numbers will be located.  If we wanted a 
          phone number field like the one above, we would enter our format as:
          (\\\) \\\-\\\\
          UM-5)
          When it's displayed on the screen, the backslashes will be converted 
          to the familiar small input boxes.  Pay attention to your format, as 
          its a bit easy to get confused.  For example, the format:
          \\/\\/\\
          could actually be used for entry of a date.  Look closely and see how 
          it would displayed.  (Hint: 01/14/84).
          
          CALCULATED
          ----------
          This type of field is not entered by the user at all.  It is 
          calculated from values in other numeric fields.  It is not displayed 
          at all during the data entry process, only later when the record is 
          retrieved from the file and displayed.  It's helpful to know BASIC's 
          format for specifying formulas when using this type of field.  You 
          need to pay attention to what the field numbers are of the numeric 
          fields to be used and the resulting calculation field.  Here's an 
          example.  If we were working on field 5 and we specified a 
          calculation field, the computer would ask us how many calculation 
          lines we wished to have.  For this example we'll just do something 
          simple in a single calculation line.  To specify numeric or 
          calculation fields in a calculation line, use the symbols F# followed 
          by the field number in parentheses.  O.K., let's add the values in 
          field 2 and field 4 and display that in our calculation field (field 
          5, remember?).  Here's how our calculation line would look:
          F#(5)=F#(2)+F#(4)
          You can do all kinds of tricky things with calculation fields, and 
          it's easy to get yourself in trouble with them, so practice is in 
          order before using them.  If you need to store temporary values in a 
          variable, use the variables U1# through U100#.
          
          You can also specify a special printing format for this field, just 
          as you can for numeric fields.
          
          DATE AND TIME FIELDS
          --------------------
          These field types are also done automatically, but in the data entry 
          stage.  It permanently stores the date or time in the field at the 
          moment of data entry.  It's useful for fields such as "Last Updated 
          ON: 03-15-1983".  Just use the U>pdate function on these fields each 
          time you update a record.
          
          Each time you finish entering a field, you are presented with a list 
          of choices:
          
          1) Enter new field, 2) Start new page, 3) Enter non-field symbols, 4) 
          Quit.
          
          Select "Enter new field" to continue adding fields to that page.  
          Whoops!  What's a page?  Well, that's a special feature of Ultra-Mind 
          that keeps your screens from getting cluttered.  You can have as many 
          display screens (called "pages") as you wish.  When you select "Start 
          new page" the screen layout area is erased and you continue with a 
          fresh slate.
          
          The "Enter non-field symbols" option is used to "prettify" your 
          screen layouts with titles, borders, etc.  When you select this 
          option, you will again be asked to locate the cursor where you wish 
          to place the symbols.  Then you will asked to enter the symbols you 
          wish to place there.  There are two different ways to specify the
          UM-6)
          characters:
          
          1) Just type them in from the keyboard.  (Note: your string cannot    
             begin with an "@" symbol).  
          
          2) Using a special syntax.  The syntax is:
             @,REPEAT,ASCIICODE,ASCIICODE,ASCIICODE...etc.
             The @ symbol in the first position tells the computer that the     
             special syntax follows.  The REPEAT is a numeric value that tells 
             how many times to repeat the following symbols.  The ASCIICODE's 
             are the ASCII values of the symbols you with to display.  
             Confusing?  It's easier than it sounds.  Let's look at a couple of 
             examples:
             @,79,61
             would print a string of 79 equal signs (ASCII code 61).
             @,10,40,41
             would print the sequence () ten times for a total length of 20 
             characters.  It would look like this:
             ()()()()()()()()()()
             The reason for using this syntax is so you can draw vertical lines 
             of characters on the screen.  Try this sequence:
             @,10,42,31,29
             It should have drawn a vertical line of 10 equal signs.  The 
             special codes 31 and 29 are used to move the cursor down a row and 
             backspace one character after each equal sign is printed.  The 
             special control codes are:
                    28 - Move right one character
                    29 - Move left one character
                    30 - Move up one row
                    31 - Move down one row
             Please note that because of Microsoft BASIC peculiarities, you 
             won't be able to print a vertical line of more than 13 characters 
             at one time (all sorts of strange things happen).  To get around 
             this anomaly, just print a string of 13 vertical characters and 
             then print a string of 10 more just beneath it for a line that 
             will stretch from top to bottom of the screen.  Experimentation is 
             in order to get the most out of this feature.
          
          If you're like us and don't happen to like digging through the BASIC 
          manual for the chart of ASCII codes, you might appreciate this 
          feature:  When asked to enter the symbols, just type the @ symbol 
          alone.  You will now enter the <Help> mode.  To find out a 
          character's ASCII code, just type it on the keyboard.  Nifty, eh?
          
          One last caveat, the non-field symbols are not checked very closely 
          for overlapping other screen info, so caution is the word.  Wrap 
          around is allowed on the horizontal only.
          
          When you're all done entering your screen displays, the fun part 
          starts.  Just enter the selection "Quit" and the program will ask 
          you if you wish to go ahead and generate the database.  If you don't, 
          you can always generate it later by selecting the "Generate an 
          already defined database" function when first executing this program.
          
          As the program is being written, just sit back and appreciate the 
          number of hours it would have taken you to do this by hand.  All in
          all, program generation should take only a few minutes.
          UM-7)
          During the definition and generation process, a number of important 
          files are created.  The extensions of the programs tell what their 
          purpose are.  Let's assume your program is called TEST.  The files 
          TEST.ATR and TEST.HDR contain information that is used to generate 
          the program.  These are both explained in Appendix A.  It's not 
          necessary to keep these files on your program disk once the program 
          is generated.  In the generation process, two more files are created: 
          TEST.BAS is your database program, and TEST.BAT is a DOS batch file 
          used to execute the program.  YOU SHOULD ALWAYS USE THE BATCH FILE TO 
          START YOUR PROGRAM since it sets important record size pointers.  If 
          you choose to compile the program, you can discard the batch file.
          Otherwise, to execute your database program, you should exit to DOS, 
          make sure a copy of BASIC is on your program diskette, and type the 
          word TEST at a DOS prompt.
          
          The first time this program is loaded will be very time consuming.  
          If you used the DOS TYPE command to look at the program, you would 
          see that it is in ASCII format with line numbers out of sequence.
          It's a good idea once the program is loaded to break out by pressing 
          the BREAK key while holding down the CTRL key, and save the program 
          in compressed format using the BASIC command SAVE "TEST.BAS".  The 
          program can be restarted then by entering the command RUN.
          
          TIPS FOR MAKING DEFINITION A PLEASANT EXPERIENCE
          ------------------------------------------------
          1) Always have a couple of disks with plenty of room and copies of 
             BASIC on them on hand just in case.
          
          2) There's no way to go back if you make an error during definition, 
             so move slowly and have some sense of direction.  Freestyle coding 
             can be fast, but you're better off at least having a rough sketch 
             of what you'd like to end up with before starting.  This goes 
             double if you intend to use edit lines, special printing formats,  
             or calculation fields.
          
          3) Since the method used to make copies of screen information on the 
             printer is by pressing the PrtSc key while holding down the SHIFT 
             key, you'll want to be careful about using non-printable 
             characters for non-field symbols or in field prompts.  They can    
             cause some printers to do all sorts of wild things.
          UM-8)              How To Use The Generated Program
                             --------------------------------
          Once the program is loaded as above described, you can remove the 
          program diskette.  After a brief title display, you'll be instructed 
          to mount your data disk in the drive specified during the generation 
          process, and press the "C" key.  All data disks used by Ultra-Mind 
          programs must be first initialized with special information.  When 
          you press the "C" key, the program will look for and load in this 
          information if it exists.  Otherwise, it will automatically begin 
          the initialization process.  You will be asked if the data file 
          should use all available disk space, or if you'd like to specify the 
          maximum number of records on that diskette.  After getting your 
          choice, initialization will begin.  Depending on the number of 
          records that must be initialized, this can take a few minutes or so.
          
          When choosing the size of your data file, keep this in mind: this 
          program will work most efficiently when there is lots of room on the 
          disk.  Even though you know your particular program will never have 
          more than 200 records, go ahead and use all available space.  The 
          "Specify number of records" option is mainly included for testing
          purposes.  Diskettes are cheap, your time isn't.
          
          You'll also be asked to give the data diskette a "volume label".  
          Just type in a word or two (Like Disk #1), and record this on the 
          diskette's label.  It just identifies the diskette to the system.
          The volume label really serves no function in this program.  However, 
          we envisioned it for our report generator program (forthcoming) so 
          that you could extend your data file over several diskettes, yet have 
          them all act as one big file for reports.  If you already know that 
          your file will be too big to put on one data diskette, you might use 
          this to divide your file (two disks, labeled A-L and M-Z might be an 
          example for a name list file).
          
          Once this data diskette is loaded into the program, it is important 
          that you DO NOT REMOVE THE DATA DISKETTE before doing either of two 
          things:
          
          1) Choose the "X-tend Work To New Data Diskette" function.
          2) Choose the "Quit and return to BASIC" function.
          
          Removing or swapping diskettes without doing either of these will at 
          best confuse the program into not knowing where the hell your data 
          is and at worst absolutely destroying your data files (ouch).

          Data disk in place, initialized, and special information loaded?  
          Good, now you're in the MAIN MENU area of your program.  In the 
          middle of the screen are your current list of choices, which we'll 
          cover in a moment, and at the top is some important information about 
          your data diskette and the current status of the program.
          UM-8)
          The top of the screen lists the number of initialized records as well 
          as the number of records you have already entered.  It also displays 
          the volume label name of the current data diskette.  At the top left 
          of the screen is a message marked "Current Record".  This is used for 
          two things, first to let you know that a record has been retrieved 
          using the "Get A Record" function before updating or deleting it, or 
          to allow you to continue a "Search For And List Records" function 
          from a certain point after aborting a search.  If no record has been 
          recently retrieved with the "Get A Record" function, the current 
          record will be NONE.  Otherwise, it will be a number between 1 and 
          the number of records initialized on that data diskette.
          
          Let's go through the commands on the main menu screen:
          
          GET A RECORD
          ------------
          This simply retrieves an entered record and displays it on the 
          screen.  It will prompt you for the key field of your desired record 
          and then will search for it.  Remember to use the correct case to 
          enter the key field, as this program views lowercase and uppercase 
          letters differently.  JOE SMITH and joe smith and Joe Smith are each 
          considered different records.  When the record is displayed, you'll 
          be asked "Is This It (Y/N)?"  This allows you to find the correct 
          record when two or more records have identical key fields.  If you 
          just can't find a record that you know should be in there, use the 
          "Search For And List Records" to scan through the data file and note 
          the correct key field.
          
          When the correct record is displayed, you'll see a short menu at the 
          bottom of the screen.  The Update, Delete, and Add functions are 
          described below.  The Menu function takes you back to the main menu 
          page, and the Switch Page function let's you look at the various 
          pages of the record, if there are more than one.
          
          SEARCH FOR AND LIST RECORDS
          ---------------------------
          This function is used to list all active (and deleted if you wish) 
          records in the data file, or to select records on the contents of one 
          of the fields.
          
          You will first be asked to enter the record # to start the search or 
          press <ENTER> to start at current record.  If you had just completed 
          a partial search and want to continue from the point you left off, 
          just press the <ENTER> key.  Otherwise, enter the record number you 
          wish to start the listing with (the first record in a datafile is 
          record #1).  If you press <ENTER> and there is no current record in 
          memory, the search will begin at record #1.  Except for this 
          function, we don't make much use of record numbers with this system.
          
          Next, you will be asked whether you wish to display records that have 
          been deleted.  Records in a data file exist in one of three states: 
          Active (meaning it contains a valid record), Deleted (meaning it 
          contains a record marked as deleted), and Empty (meaning it has not 
          yet ever contained a record).  Accidentally deleted records can be 
          restored to active status by using this function unless they have 
          been overwritten by recently added records.
          
          The next prompt is whether you wish to select records for display by 
          the contents of one it's fields.  If you don't, you will see every 
          record on file.
          UM-9)
          If you do, you'll be asked which field you wish to test.  Then, 
          you'll be asked to enter a test string.  The three types of tests 
          that can be made on a field are:
          
          >STRING  (field contains "STRING" somewhere in it)
          <STRING  (field begins with "STRING")
          =STRING  (field contains "STRING" exactly and only)
           
          Once again, lowercase is considered different than uppercase.  For 
          our purposes here at FreeSoft, we don't use lowercase at all for 
          field information and it makes life much easier.
          
          If a match is found, you have the choice of either continuing the 
          search or aborting it.  If you abort, operation continues just as if 
          the record were retrieved with the "Get A Record" function.
          
          ADD A RECORD
          ------------
          This function is used to add records to the data file.  It is pretty 
          much a straight ahead entry procedure.  After all fields have been 
          entered, you can proofread the current page and either abort the add 
          or go ahead and save the record on disk.
          
          DELETE CURRENT RECORD
          ---------------------
          This function is used to mark records as "deleted" status.  Deleted 
          records cannot be retrieved by a "Get A Record" function and can only 
          be viewed by the "Search For And List Records" function.  Deleted 
          records can be overwritten by newly added records as the space is 
          needed.
          
          UPDATE CURRENT RECORD
          ---------------------
          Any of a field's records, including the key field, can be modified
          using this function.  Like the "Delete Current Record" function, the
          record must first be retrieved using the "Get A Record Function". 
          You may wish to review the record and note the field numbers you 
          want to modify before selecting the "Update Current Record" 
          function, because the prior contents of a field are erased as soon 
          as you specify that you wish to modify that field.
          
          X-TEND WORK TO NEW DATA DISKETTE
          --------------------------------
          This function is used to close the data file on one data diskette and 
          load the special information from a new one.  The new disk must be 
          already initialized or initialization procedures will begin 
          automatically.  NEVER SWAP DATA DISKETTES WITHOUT SELECTING THIS 
          FUNCTION FIRST!
          
          INITIALIZE NEW DATA DISKETTE
          ----------------------------
          This is used to perform the initialization procedures on a data 
          diskette so that it can be used to hold your data file.  THIS DOES 
          NOT LOAD IN THE SPECIAL INFORMATION!  Always verify that the volume 
          label specified in the MAIN MENU display corresponds the data 
          diskette mounted in the drive before attempting to do any work with 
          it!
          UM-10)
          QUIT AND RETURN TO BASIC
          ------------------------
          This is the only approved way of ending the program.  Ending the 
          program by any other means could possibly lead to a destroyed data 
          file!
          
          Well, that about does it.  Chances are good that you'll find many 
          more undocumented features (hopefully not bugs), that we'll need to 
          include in the next revision of this manual.  We always appreciate 
          your comments and suggestions.  Keep those cards and letters coming 
          (we always wanted to say that).
                                          
          UM-11)     APPENDIX A: FORMAT OF THE ULTRA-MIND DISK FILES
                     -----------------------------------------------
          
          Chances are, you're going to want to do some rather exciting and 
          unusual things with this package.  To aid you in your endeaver, 
          here's a description of the data files used by these programs.
          
          In the following examples, we use the filespec TEST for the program 
          name.
          
          TEST.HDR
          --------
          NF  - Number of defined fields
          ND  - Number of defined display pages
          TB  - Total number of field characters - 1 (one byte variable         
                STAT$ is added to beginning of each record to hold         
                record status: A=Active, D=Deleted, E=Empty
          
          TEST.ATR
          --------
          AU$ - Author's name
          NA$ - Program's filespec (including drive but without extension)
          TI$ - Program title
             For each field defined by NF in TEST.HDR:
               PG - Page number
               MR - Field prompt row
               MC - Field prompt column
               M$ - Field prompt string
               TY - Field type (1=Numeric, 2=Alphanumeric, 3=Formatted numeric, 
                    4=Calculation, 5=Date, 6=Time, 7=Non-field symbols)
          
                   If TY=1
                   -------
                   FR  - Field row
                   FC  - Field column
                   FL  - Field length
                   AI$ - String of acceptable input characters
                   EL  - Number of edit lines
                        For each EL: EL$ - Edit line
                   SP$ - Special printing format (Y or N)
                        If SP$="Y": SF$ - special printing format string
          
                   If TY=2
                   -------
                   FR  - Field row
                   FC  - Field column
                   FL  - Field length
                   AI$ - String of acceptable input characters
                      If not key field:  AI$ - Null entry valid (Y or N)
          
                   If TY=3
                   -------
                   FR  - Field row
                   FC  - Field column
                   FL  - Field length
                   AF$ - Input format string
                   AI$ - String of acceptable input characters
          UM-12)
                   If TY=4
                   -------
                   FR  - Field row
                   FC  - Field column
                   CL  - Number of calculation lines
                       For each CL: CL$ - Calculation line string
                   SP$ - Special printing format (Y or N)
                       If SP$="Y": SF$ - Special printing format string
          
                   If TY=5 or TY=6
                   ---------------
                   FR - Field row
                   FC - Field column
                   FL - Field length
          
                   If TY=7
                   -------
                   No further variables
          
          TEST.VOL
          ---------
          V$ - Volume label string of data diskette
           
          TEST.DEF
          --------         
          MAXSIZE - Number of initialized records on data diskette
          GOOD    - Number of entered records on data diskette
          
          TEST.DAT
          --------
          The data file is a variable length random file than varies with the 
          number of fields, length of fields, etc.  Study the blocking and un-  
          blocking procedures in your generated program to see the format of 
          your data file.
          
          HASHING ALGORYTHM EXPLAINED
          ---------------------------
          This package uses a hashing routing for placing and retrieveing data 
          records.  Basically, what happens is that your key field is converted 
          to a number between 1 and the number of initialized records on your 
          data diskette.  This becomes the record number for the record.  If a 
          record is already in that location, the file is scanned sequentially 
          from that record until an empty or deleted record space is found.  
          The hashing algorythm we're using was developed and placed in the 
          public domain by Bruce L. Tonkin and we're indebted to him for its 
          usefulness.
            To be effective, the hashing algorythm must be reasonably "random" 
          to insure that records will spread out through the available space 
          instead of clumping together.  This is what gives this package such 
          excellent retrieval speed under typical circumstances.
          UM-13)                  APPENDIX B: WISH LIST
                                  ---------------------
             For many purposes, this package will be sufficient "off the 
          shelf".  However, we encourage you all to do what you do best: take a 
          skeleton package and refine it to something really phenomenal.  
          Here's our wish list for Ultra-Mind:
          
          1) Better documentation:  O.K., we admit that this isn't the best in 
             the world, but it's all in there if you look close enough.  This 
             manual definitely needs a re-write.  We'll take responsibility for 
             this and offer the fact that we wanted to get the darned thing out 
             as our only excuse.
          
          2) Sample definition (.HDR & .ATR) files: This is the best way for    
             folks to learn how to get the fanciest use out this package.  If   
             you develope a snazzy file for keeping track of your video tape    
             collection or christmas card list, why not share it with all of    
             us.  The definition files are rather small, so it's not necessary  
             to distribute the package in generated form.  We'll give this      
             responsibility to y'all.
          
          3) Report generator program:  We're working on this one and it should 
             be ready in the first quarter of 1984.
          
          4) Better UPDATE function:  We sorely need an update function that 
             uses the INS and DEL keys like an editor instead of wiping out the 
             field to be replaced.  Any of you hot shots care to take this on?
          
          5) Better lineprinter support: A small assembly language program that 
             would print the screen and turn all non-printable characters into  
             periods would be great.  BASIC routines are just too slow.  We 
             give this one to you also.
          
          6) Definition file editor:  Let's make it easy to take a definition   
             file and either edit, delete, or add field information.  This 
             would be great for "cloning" one data file's information into      
             a new one, not to mention making it less frustrating when you      
             make a mistake near the end of a lengthy definition session.  Any
             takers?
          
          7) A natural evolution would allow you to define how your title   
             and main menu pages will look. 
           
          As you can see, we've got all kinds of suggestions for making this 
          product better.  After all, if we'd taken the time to do everything 
          to Ultra-Mind that we wanted, you probably would never get it in your 
          hands.  Sooner or later, you just have to take the darn thing and say 
          "sink or swim, booger".
           
          One thing we do ask is that you not distribute the program in 
          modified form.  Instead, offer your corrections or improvements as    
          merge files.  That way, we can continue to support this package with  
          updates and corrections from our end.  Otherwise, we just won't be 
          able to keep track of all of the modifications floating around.  Be 
          sure to send us any of your improvements or suggestions, though.  
          They just might find a permanent home in Ultra-Mind.
          UM-14)             APPENDIX C: THE ULTRA-UTILITIES
                             -------------------------------

          The FreeSoft Company produces only user supported software.  If you 
          find the software to be useful, we have a registration program so you
          can support us.  As long as we keep getting the great support 
          we've enjoyed so far, we'll continue to add packages to our one and 
          only product: The Ultra-Utilities.  Our registration and duplication 
          policies are in the Library #1 documentation.  Do not distribute this 
          program until you have obtained, read, and understand these policies!
          
          If you don't have the complete 5-volume Ultra-Utility set, you don't 
          know what you're missing.  To get the entire set, read and follow the 
          below carefully:
          
          1) We now offer two libraries of the Ultra-Utilities.  FOR EACH 
             LIBRARY that you want, send us one double sided, or two single     
             sided diskettes formatted 8 sectors per track.  Do not send 
             diskettes formatted 9 sectors per track or we'll just waste our    
             time reformatting them.
          
          2) Send them to us along with a POSTAGE PAID, SELF-ADDRESSED RETURN   
             MAILER.  A couple of stiff pieces of cardboard is suggested for    
             envelope mailers.  We will not try to protect your diskettes from  
             damage any better than you do.  Also, please make sure that you've 
             got the correct amount of postage.  We hate to bitch, but we 
             sometimes get up to 5 requests per day that arrive postage due.
          
          3) Send this conglomeration to: The FreeSoft Company, P.O. Box 27608, 
             St. Louis, MO  63146.  Drop a note in the envelope telling us 
             which library you want and where you heard about us.  If you don't 
             send enough disks for both libraries, we'll assume you want only   
             Library #1.
          
          The Ultra-Utilities Includes:
          LIBRARY#1
          ---------
          ULTRA-ZAP: disk repair/modification utility with functions for 
          display/modify disk sectors, display/modify file sectors, copy disk 
          sectors, fill disk sectors, search for byte sequences (ASCII or 
          numeric) in disk sectors, search for byte sequences in file sectors, 
          interrogate disk format and protection schemes, modify BIOS disk 
          parameter table.
          
          ULTRA-FORMAT: functions for formatting single standard tracks, 
          re-format a "flaky" track without erasing old data, and format a 
          non-standard (copy protected) track.
          
          ULTRA-FILE: functions for display file's directory information, 
          assign or remove hidden status, assign or remove system status, 
          display list of sectors allocated to a file, build a disk file from 
          scratch, restore accidentally erased files, produce a unique roadmap 
          of a diskette, and selectively kill files from a menu.
          UM-14)
          LIBRARY #2
          ----------
          ULTRA-OPTIMIZE: takes a standard BASIC program saved in ASCII format 
          and optimizes it so that the /N switch can be used with the BASIC 
          compiler to produce smaller and more efficient object code.
          
          ULTRA-MIND: intelligent database generator program that allows you to 
          define a database with six different field types, full input control, 
          and multiple full screens, and generates a unique BASIC program that 
          offers record access in typical applications in less than 1/2 second 
          (no matter how many records in the file).
          
          Coming soon to LIBRARY #2: Ultra-Report: report program generator for 
          databases created with Ultra-Mind.
          All of the Ultra-Utilties work with PC-DOS versions 1.10, 2.00 and
          2.10
          UM-15)        APPENDIX D: LIMITED LICENSE FOR ULTRA-MIND
                        ------------------------------------------
          
          U-MIND.BAS and SKELETON.BAS are copyrighted programs and are owned 
          soley by The FreeSoft Company.  You are free to use and distribute 
          these and all other Ultra-Utility programs under the policies set 
          forth in the LIBRARY #1 documentation manual.  By using this 
          software, you agree not to distribute or duplicate any Ultra-Utility 
          program until you have obtained, read, and understand all duplication 
          and registration policies listed in that manual.
          
          You agree not to distribute any Ultra-Utility program in modified 
          form and you agree not remove any information concerning The FreeSoft 
          Company, it's products or copyrights from the programs or 
          documentation.
          
          The FreeSoft Company gives sole ownership to you for all programs 
          generated by Ultra-Mind.  You agree not to copyright such programs as 
          not to interfere with our existing copyrights.  Otherwise, you are 
          free to compile, modify, sell, or destroy any programs generated by 
          Ultra-Mind.  No royalties are due The FreeSoft Company under any 
          circumstance for the sale of programs generated by Ultra-Mind.
          
          If you have a problem with the above policies, we'll be willing to 
          consider a special license for registered users only.






















```
{% endraw %}

## U-OPT.DOC

{% raw %}
```

                      Supplementary Instructions For Ultra-Optimize
                      ---------------------------------------------
          
          Note: These instructions are for version 1.00 (No serial number) and 
          will be updated on 02/01/1984 as part of the Ultra-Mind manual.  You 
          should send for version 2.00 of Library #2 of The Ultra Utilties 
          >>>AFTER<<< 02/01/84.


          Ultra-Optimize is used with a BASIC program saved in ASCII format 
          (using the SAVE "FILESPEC.BAS",A syntax).  It removes unnecessary 
          line numbers so that the /N switch can be used with the BASIC 
          compiler to produce smaller and more efficient object code.
          
          Since an optimized file cannot be loaded by the BASIC interpreter, 
          all debugging and trial compilations should be done on the 
          un-optimized file.  The optimized file will operate exactly like the 
          un-optimized version, except of course in many cases it will execute 
          must faster and require less disk space.
          
          Ultra-Optimize will execute slightly faster if you request that it 
          not display line numbers during operation.  We generally name the 
          optimized file with the same filespec, but an extension of .CMP to 
          designate that it is for the compiler only.
          
          Hope you find use for this utility. Don't forget to contact us for 
          Library #1 programs if you haven't done so already.  Either Library 
          #1 (Ultra-Zap, Ultra-Format, and Ultra-File) or Library #2 
          (Ultra-Mind and Ultra-Optimize) can be ordered by sending one 
          double-sided or two single-sided diskettes formatted 8 sectors per 
          track (DOS 1.10 style), and a self-addressed, postage-paid return 
          mailer to: The FreeSoft Company, P.O. Box 27608, St. Louis, MO 63146. 
          Don't forget to specify which library you want.
          
          Sincerely,
          Wat Buchanon, President
          The FreeSoft Company

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0245

     Volume in drive A has no label
     Directory of A:\

    U-MIND   DOC     51120  11-20-84   5:14p
    U-OPT    DOC      2124  11-20-84   5:18p
    DOC41    TXT     52574  11-20-84   5:23p
    DOC42    TXT     23210  11-20-84   5:26p
    U-OPT    EXE     25601  11-20-84   5:45p
    SKELETON BAS     23809  11-28-84  10:49p
    U-MIND   BAS     15233  11-28-84  10:51p
    CRC      TXT       911  12-18-84   9:29a
    CRCK4    COM      1536  10-21-82   5:50p
            9 file(s)     196118 bytes
                          121856 bytes free
