---
layout: page
title: "PC-SIG Diskette Library (Disk #1504)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1504/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1504"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BROTHER'S KEEPER 1 OF 2 (ALSO 1505)"

    BROTHER'S KEEPER helps you keep track of all your brothers, sisters,
    aunts, uncles, and other relatives going back generations!
    
    In the hobby of genealogy, you never know just who or what you'll find
    once you start tracing your family tree!  BROTHER'S KEEPER allows you
    to gather and organize the tidbits of ancestral history you uncover and
    will print the information in a variety of helpful ways. Included are:
    ancestor charts, family group sheets, alphabetical name lists,
    descendant trees, birthday lists, custom reports, and ahnentafel
    charts. (This is a chart which lists ancestors of a person, with
    standard code numbers that show relationships, such as parent,
    grandparent, etc., instead of using lines to graphically indicate the
    relationships.)
    
    Two disk drives, or a hard drive, are recommended, but the program will
    work with one disk drive.  You can record over 1000 names on a 360K
    disk, or 15,000 with a hard drive.  For each person entered, you may
    include date of birth, date of death, and three other significant dates
    of your choosing. In addition, you may store place of birth, place of
    death, and three other places of important events.  You also may enter
    two additional fields, which you define.  Each person can have up to
    seven message lines of additional data, or a text file of unlimited size
    containing additional data that is linked to his record.
    
    Up to eight marriages may be recorded for each of your more fickle
    forebears.  Each record can hold a marriage date, a place of marriage,
    one additional date and place, and can store up to 24 children -- very
    useful if you are related to the Waltons!
    
    The GEDCOM file transfer standard is used so that data can be shared
    with other genealogists and amateur family tree-ers who use different
    programs.  This is one of the most intriguing aspects of genealogy --
    the joining together of your research and family tree with others. You
    suddenly gain both entire blocks of ancestral data, as well as potential
    busloads of distant relatives you never knew you were related to coming
    to visit you!
    
    A wide variety of printers are supported, including laser.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BROTHER.DOC

{% raw %}
```
                       Brother's Keeper version 4.5


                            Table of contents

               Description of the program . . . . . . . . 1

               Setting up your disks  . . . . . . . . . . 1

               General typing information . . . . . . . . 2

               Adding people to the file  . . . . . . . . 2

               Message lines  . . . . . . . . . . . . . . 7

               Modifying people . . . . . . . . . . . . . 8

               Edit text file . . . . . . . . . . . . . . 9

               Options  . . . . . . . . . . . . . . . .  10

               Print routines . . . . . . . . . . . . .  12

               Ancestor charts  . . . . . . . . . . . .  13

               Descendant chart . . . . . . . . . . . .  13

               Group sheets . . . . . . . . . . . . . .  13

               Tree chart . . . . . . . . . . . . . . .  14

               Name and number print  . . . . . . . . .  15

               Ahnentafel . . . . . . . . . . . . . . .  17

               Printer strings  . . . . . . . . . . . .  17

               Word search  . . . . . . . . . . . . . .  17

               Stop . . . . . . . . . . . . . . . . . .  18

               Appendix A.  How to correct problems . .  19
               Appendix B.  Printer problems  . . . . .  20
               Appendix C.  Explanation of relationships 21
               Appendix D.  Sample printouts  . . . . .  22
               Appendix E.  Changes from prior versions  23
               Appendix F.  Converting from version 3 .  24
               Appendix G.  Suggestions and help  . . .  24
               Appendix H.  Technical stuff . . . . . .  25
               Appendix I.  Alt keys  . . . . . . . . .  27
               Appendix J.  Utility program . . . . . .  28
               Appendix K.  Config.sys file . . . . . .  29
               Appendix L.  Custom reports  . . . . . .  30
               Appendix M.  Problems questions answers   31
               Appendix N.  Shareware . . . . . . . . .  35
               Index  . . . . . . . . . . . . . . . . .  36

                             Brother's Keeper Ver. 4.5                  Page 1
     
     
       To print this file                        by   John Steed
       COPY BROTHER.DOC PRN                           69O7 Childsdale Rd
                                                      Rockford, MI 49341


     DESCRIPTION OF THE PROGRAM

     BROTHER'S KEEPER is a set of programs which will help you organize your
     family tree information, and which will print the information in several
     ways.  You will be able to print descendant charts which show how anyone
     in the file is related to everyone else.  You may also print ancestor
     charts, family group sheets, alphabetical name lists, descendant trees,
     birthday lists, ahnentafel charts and customized reports.  For each
     person entered you may include a date of birth, a date of death, and
     three other dates and you may store a place of birth, a place of death,
     and a place for three other events.  You also may enter two additional
     fields, which you may define.  Each person can have up to seven message
     lines of additional data, or a text file of unlimited size containing
     additional data.  Each person may have up to eight marriages stored.
     Each marriage record can hold a marriage date, a place of marriage and
     one additional date and place, and can store up to 24 children.

     You will need 512K or more of RAM memory in your computer to run the BK
     program.  If you will be entering over 2000 names, you will need 640K of
     RAM.  This program may have problems if you have memory resident programs
     running also.  The Tandy 1000 computer sometimes uses 64K of RAM for
     video memory and you may have to change it to 16K in order to run these
     programs.  Two disk drives are recommended, but the program will work
     with one disk drive.  It will run on an IBM PCjr with 640K of RAM.

     Note: If you have used a previous version of this program which was
           called FAMILY3 (Version 3.1 or 3.2) you will need to run a
           conversion program to convert your old data files (see appendix F).
           Also, if you presently have data in another genealogy program,
           there are ways to transfer data from some other programs.

     SETTING UP YOUR DISKS

     If you do not have a file called CONFIG.SYS on your boot disk, read
     APPENDIX K also.   If you have problems starting, read APPENDIX M.

     If you have a hard disk, then create a subdirectory and copy all the
     files on the program disks into the subdirectory.  To run the program
     just change to that directory and type BK.  You may enter up to
     15,000 names with this version.

     If you have 2 disk drives (no hard disk), then put the BK program on one
     disk and have a separate blank formatted disk available for the data
     files.  Put the BK program disk in the A: drive and the data files disk in
     the B: drive.  Start the program by typing BK.  The very first time
     you start the program, it will say "if you have only 1 disk drive, insert
     the data disk now".  This does not apply to you since you have your data
     disk in the B: drive so just push enter.  The program should then ask you
     for a "path", and you would type B: since that is where your data will
     be.  You may put over 1000 names in the data files before you will fill
     up a 360K disk and over 2000 names if you have 720K disks.

                             Brother's Keeper Ver. 4.5                  Page 2
     
     
     If you have only 1 disk drive, put the BK program on one disk and have
     one separate formatted disk available for the data files.  Then start the
     program and when the opening screen comes up and says "If you have 1 disk
     drive, insert the data disk now and then push enter to start", at that
     time remove the BK program disk and insert the data disk and then push
     enter. You will not have to set up any path, so if it asks for a path,
     just push the enter key.  Each time you want to start one of the
     programs, insert the correct program diskette and type the program you
     want to run.  Each time the opening screen says "push enter to start"
     insert the data disk before pushing enter. If you are switching from one
     program to another, do NOT remove the data disk until you stop the
     program.  Because of the size of the BK program, you will need to keep
     COMMAND.COM on a separate diskette if you use 360K diskettes.  When you
     have only 1 disk drive, the options file (FOPTIONS.DT4) will be only on
     the data diskette.  If you accidently create the options file on the
     program disk, you can erase it from that disk.

     If you can not get the program to run, see APPENDIX M.

     GENERAL TYPING INFORMATION

       *  When you are typing, use the following keys to make corrections:

          Backspace   - delete the character to the left of the cursor
          Esc         - erase the whole field.  Esc again will restore it.
          Left arrow  - move the cursor to the left
          Right arrow - move the cursor to the right
          Del         - delete the character the cursor is under
          Ins         - insert mode - to insert letters
          Home        - move the cursor to the beginning of the field
          End         - move the cursor to the last character in the field

       *  If you make a mistake and are past the field where the mistake is,
          you may type Shift-Tab or UP arrow and move back to the field and
          correct the mistake.  Then push Enter or Tab or DOWN arrow to move
          forward to the next field you wish to input.  On most keyboards,
          the Tab key is to the left of the letter Q.

       *  You can set up Alt-keys to repeat any name or city (see Appendix I).

       *  You can type " to duplicate a location name which is above.

       *  If you want to type an accented or foreign letter, hold ALT and
          press F2 and a chart will pop up.  Then hold ALT and type the number
          that you want on the number keypad.  Then release ALT.


     ADDING

     You use the Add routine to add new people to the file, and to LINK
     together people who where previously entered.

     When you are Adding someone, you may enter the following information:

                                 (size of field)
       PERSON'S NAME                  40
       SEX M or F                      1
                             Brother's Keeper Ver. 4.5                  Page 3
     
     
       DATE OF BIRTH                  15
       PLACE OF BIRTH                 40
       DATE OF DEATH                  15
       PLACE OF DEATH                 40
       3 OTHER DATES                  15 each
       3 OTHER PLACES                 40 each
       REFERENCE                      15
       OCCUPATION                     25
       CHECK (1 field for each date)   5 each
       MESSAGE LINES         (7 lines 78 characters each)

     When you are adding a marriage, you may enter:

       MARRIAGE DATE                  15
       PLACE OF MARRIAGE              40
       OTHER DATE                     15
       OTHER PLACE                    40
       CHECK (1 field for each date)   5 each

     The person's name and sex are required information.  The rest is
     optional.  The sex is needed so that the program can correctly compute the
     relationships when printing.

       *  When you are entering names, use maiden names.

     All date fields are 15 characters long.  You may type any information
     into a date field and it will be accepted.  If you type a date in the
     form MMDDYYYY where MM is the month, DD is the day, and YYYY is the year,
     then the program will convert the date into a standard format.  If you
     enter MMDDYY (i.e. you only enter 2 digits for the year), the program
     will convert the year to 19YY.  Each date will be converted to whatever
     format (0-9) you have set in the options area.  Format type 0 (zero)
     means no change from the way you type it. The other date formats (1-9)
     will do a conversion on the date you type (provided it is typed as MMDDYY
     or MMDDYYYY).  If you wish to include /'s around the day you may, e.g.
     5/4/1954 is acceptable for input.  The following is an example of how the
     dates will be changed based on the format you have set.  If you type in
     05041954, it will be changed to:

       Type 1    04-MAY-1954        Types 7, 8 and 9 allow you to ENTER a date
       Type 2    04 MAY 1954        in European format (DDMMYY) with day first.
       Type 3    05/04/1954         The entered date will then display as:
       Type 4    05-04-1954             Type 7     04-MAY-1954
       Type 5    MAY-04-1954            Type 8     04 MAY 1954
       Type 6    MAY 04 1954            Type 9     04-05-1954

     You may change the option called "Months capital or lower case" on
     Options screen 1 so that the months will appear as May instead of MAY and
     the day will appear as  4 instead of 04.  Generally, if you type in less
     than 6 digits or more than 8 digits or type any alpha characters (A-Z),
     then no date conversion will take place no matter which date format type
     you have set.  You may, however, type either a ? or a _ for parts you
     don't know and it will still convert.  For example if you don't know the
     day of the month you could type 05__54 and it will convert to __-MAY-1954
     if you are using type 1 dates.

     Most dates will require 10 or 11 characters when converted.  However, the
                             Brother's Keeper Ver. 4.5                  Page 4
     
     
     field is 15 characters long to accommodate the exceptions.  If you are
     not sure of a date, you may add additional information.  The program will
     automatically recognize certain 3 character abbreviations such as ABT for
     about, CIR for circa, BEF for before, and AFT for after.  For example, if
     you know a person died before March 15, 1920 you may enter BEF 031520 and
     the program will convert it to BEF 15-MAR-1920 if you are using type 1
     dates.  The abbreviations (ABT, CIR, BEF, and AFT) may be in upper or
     lower case.

     The location fields each hold up to 40 characters.  These fields will not
     print on the descendant printout, but they do print on the family group
     sheets, the ancestor charts, and on the Register number system printout.
     Since many locations will be repeated, there are a few short-cuts to
     speed up your work.  One short-cut is to use the ALT-keys as described in
     Appendix I.  Another short-cut is that you may enter a quote or ditto
     mark in a location field, and the program will copy into that field
     whatever location is shown in a field above.  For example, if you enter
     the birth location as Detroit, Wayne County, Michigan, and then move down
     to the place of death, you may enter either " or ' in that field and when
     you push enter, the field will show Detroit, Wayne County, Michigan.
     When you use either the " or ' , the program will duplicate the closest
     non-blank location field above the one you are entering.  If you are
     entering a wife or child, it will even go to the person above to find the
     field to duplicate.

     If you leave the location field empty, you will not use as much disk
     space.  Therefore, avoid typing UNKNOWN in a location field.

     The other short-cut when entering locations is = (the equal sign).  When
     you enter = in a location field, it will make the location equal to what
     that same field was for the last person you entered or displayed.  For
     example, if you are entering data for a wife, and she was born in the
     same city as the husband, you may enter = for her place of birth, and
     when you push enter, it will display the same location that you entered
     for the husband.  This is handy for times when " would not work because
     there are other locations directly above (such as husband's place of
     death) which are different.  Using = will work even when the last person
     you entered is no longer showing, such as when you are entering several
     children.  If several children were born in the same location, you can
     enter = in the birth location and it will duplicate the location for the
     previous child.  You may use = to duplicate any of the five location
     fields from the previous person entered.  Remember that " will copy
     whatever is currently above on the screen at the time, whereas = will
     duplicate from the same location field from the previous person you
     entered, whether or not the person is still showing.

     The "check" fields (which are indicated by a check mark on the screen)
     are 5 characters each and appear after each date and place.  You may use
     these optional fields to indicate the source of the data, or possibly to
     indicate where you have filed copies of documents related to the date or
     event.  If you enter information in a location or "check" field, you will
     use up disk space faster.  If you decide not to use these "check" fields
     at all, you may go to the Options routine, and set the option to not
     input the check fields.  Then when you are in the Add routine, you will
     not have to push enter to skip the field each time.

     The "Reference" field (which holds 15 characters) may be useful if you
                             Brother's Keeper Ver. 4.5                  Page 5
     
     
     want to print out some other information about the person.  For example,
     if you are getting your information from a family history book, you may
     use the Reference space to show the number already assigned to this
     person.  When you print the descendant report, you have the option of
     printing this field in brackets after the name.

     You may assign any name you wish to the 3 extra date fields, the
     "Reference" field and the "Occupation" field.  Use the options routine to
     assign a new name to these fields.  Whatever names you assign in the
     options area, will display on the screen and show on the printouts.

     The Add screen shows husband information in the top section of the
     screen, wife information below that, the marriage information next, and
     then child information.  After each child is added, that child's
     information is erased from the screen and another child may be added.
     The way to add people is to first type in the husband, then the wife,
     then the marriage information, then each of their children in order.
     You may start entering people in any order that you wish.  You may start
     with yourself, or with your oldest known ancestor, or with anyone else
     that you wish.  The reports will look the same, regardless of which
     family you enter first.

       *  After you have entered all the fields that you wish to for a person,
          push F1 (Function 1) and you will be moved on to the next person.

     If you are adding people who are not already in the file, just type in
     the person's information.  If you are adding a spouse to someone who has
     already been added previously, you may type the person's code number or
     the person's first and last name and then F8 (F8 is the search key). (For
     example to find John Smith type  John Smith  then F8.)  Since you pressed
     F8, the program will not add John Smith as a new person in the event you
     misspelled his name.  If you type John Smith and press Enter, the
     computer will search for him, and if he is not found, it will add him.

     Let me show you an example to clarify this.  Let's suppose you type in
     the following people.

        Husband - John Smith     Wife - Jane Jones
        Child 1 - James Smith    Child 2 - Carol Smith

     After typing them all in, press the F1 key to clear the screen.  Now you
     want to type in information about John Smith's second marriage.  Since
     you have already added John Smith, you now only have to let the computer
     know who you want.  So when prompted for the Husband, either type his
     code number (which we will say is 25 - so you would type 25) or type his
     name   John Smith  then F8 and either way the computer would show you his
     information which was previously entered.  The computer would then notify
     you that it has information about his marriage which is already on file.
     You would then be asked if you wanted to display his first wife or add a
     new wife.  In this case you would respond that you want to add a new
     wife.  Then the computer would ask you for the Wife information.  After
     you add his second wife and second marriage date information, add the
     children of the second marriage (if any). Then you push the F1 key to
     clear the screen.

     Let's say you want to add the husband of Carol Smith, the daughter.
     (Carol has already been added.)  When the add screen prompts you for a
                             Brother's Keeper Ver. 4.5                  Page 6
     
     
     husband, type in the name of Carol's husband and the other data for him.
     When it prompts you for a wife, since Carol is already on file, type
     either her code number, (31 or whatever it is), or type  Carol Smith  and
     F8.  Then type the marriage date information and their children (if any).
     Then push F1 to clear the screen.

     Now let's suppose you just found out that John Smith and Jane Jones had a
     third child, a son named Remington.  You would add him this way.  When
     prompted for a husband, type 25 or type John Smith and F8 and John
     Smith's information will show.  The computer will inform you that he has
     two marriages on file.  You will be asked if you want to display one of
     his wives or add a new one.  In this case you are adding a child to a
     marriage which is already on file, so you will choose to display his
     first wife.  When Jane is showing as the wife you will be asked if you
     want to keep this wife or display another. You would choose to keep this
     wife.  When you do so, the program will jump to the child area, and will
     prompt you for child #3.  You would then type in the information about
     Remington.  (If the children are in the wrong order, use Modify to
     correct the order.)

     So, in summary, when the program is asking for a person - either husband,
     wife or child -  you may type in the person's name (if the person is new
     - i.e. is not already in the file), or you may type the person's code
     number (the number which is assigned to a person when they are added) or
     you may type the name of a person who is in the file and F8 and the
     computer will search and find that person.

     When you type a name and F8, the program searches for a person with that
     name.  In order to save memory, it is really only searching for a person
     who has the same first five letters in the first name and the same first
     five letters in the last name.  Because of this, you do not need to type
     in middle names when you are having the program search (unless the first
     name is only three letters or less long).  Also, if the last name is over
     five letters, you may leave off all letters after the fifth.  It is
     probable that more than one person could match when searching.  If there
     is more than one match, the first person to match will display and you
     will be asked if this is the desired person or if you wish to continue
     searching.  Push F1 if the person is correct, or push TAB to continue
     searching.

     If you are not sure of the spelling of a name that is in the computer,
     you may use ? for the first and/or last name.  For example use  ? Smith
     to find all people with the last name of Smith.  Or use  Joseph ?  to
     find all people with the first name of Joseph.  This will work in the
     Add, Modify, and Print routines.

     If you are entering a family, where the father is unknown, you can use
     the name  *UNKNOWN  for the father's name, and there will not be any
     reference to a father on any reports.  The name *UNKNOWN will not print.

     This version (4.5) has a feature so that when you type a name and push
     enter, the program will search for a name that is similar - just like
     pressing F8.  If a name is not found, it will add the name and continue.
     If a similar name is found, it will ask if it is the person desired.  If
     it is not the person you are referring to, it will add the new person.
     This change is due to the large number of people who forget to use F8 and
     add duplicate people when they are really trying to link to existing
                             Brother's Keeper Ver. 4.5                  Page 7
     
     
     entries.  If you are sure that the person you are adding is not already
     in the file, you may press F1 after typing the name, and it will add the
     person as new without searching the file.

     A new feature in this version is that when you are prompted for the name
     of a child, you may press F9 to display all the children entered so far.
     Also, you may press F6 to go immediately to the Modify routine and
     display the same family.

     Remember when you are adding to the file that you should make copies of
     the data disk regularly.  You do not want to have to add all these names
     again in case of a disk going bad (it happens) or a bug in the program
     (it happens).  You can use the Backup menu item to copy all the data
     files to another disk.  If you are using a hard disk and the files are
     too large to copy to a floppy, then use the DOS BACKUP command.  If you
     have a single drive computer, use DISKCOPY.

     Have at least 2 copies of the data disk, and in case of a major problem,
     make more copies before you attempt to fix the problem in case you make
     matters even worse.  These suggestions come from years of experience with
     computers and years of experience in making matters worse.


     MESSAGE LINES

     If you want to put in more information for a person, you may add up to 7
     message lines, each 78 characters long and you may also add text files
     which will be linked to the person.  Since there is not room to show
     these message lines on the screen all the time, you may see or add
     message lines by moving the cursor to any date or place field and then
     push the F5 (Function 5) key.  The bottom of the screen will then clear
     and display any existing messages for the person and let you add or
     modify the messages.  After you are finished with the messages, they will
     be replaced on the screen by the child information.  Remember that there
     are separate message lines for the husband and the wife.  Since message
     lines will not always be showing, the computer will notify you if a
     person on the screen has some message lines already.  It does this by
     putting an asterisk (*) on the screen at the beginning of the line which
     contains the person's name.

     The descendant report and group sheet routine will let you print message
     lines.  Each time you run those routines you will have the option to
     print no message lines or all message lines or certain message lines
     about a person. You may have certain messages which are only for your
     information about a person, and other messages which you wish to print
     out.  There is a way to designate certain message lines which you wish to
     print out.  If you want some message lines to print and others to not
     print, start each message line that you want to print with an asterisk *
     as the first character in the line.  When printing, you can choose the
     option to print only message lines that start with an asterisk and other
     message lines will not print on that report.  (The * will not print, it
     is simply a code to tell the computer which lines you want to print.)  If
     you want all message lines to print on reports, you do not need to start
     each line with an asterisk, just choose the print option which prints all
     message lines.

     In addition to the 7 message lines, you may also designate a text file to
                             Brother's Keeper Ver. 4.5                  Page 8
     
     
     be associated with a person.  To do this, go to the message lines section
     for a person and type at the beginning of a message line two dollar signs
     and then the name of a text file.  For example, if you have a text file
     on the B: drive called SMITH.TXT you would type a message line of
     $$B:SMITH.TXT  (Nothing else should be after the name of the text file on
     that message line.)  Then, whenever you are running a print routine that
     is printing all message lines, it would also print the file SMITH.TXT.
     The text file can be created by any word processor, provided it is saved
     in ASCII format or DOS text format.  (That is the format that you can
     read directly on the screen by using the DOS command TYPE.)  Each line in
     the file should have no more than 78 characters in it.  If you do not
     want to use your word processor to create the text file, you can use a
     limited 24 line editor that is included with the program.  You start the
     text editor by pressing F5 when in the message line area.  If you have
     already entered a message line starting with $$ it will use that line for
     the name of the file.

     The text editor has a few features to help you when making changes.  If
     you wish to insert a new line between two existing lines, then press F9.
     If you wish to delete a line, then first of all make the line blank (by
     pressing ESC) and then press F7 to remove the blank line.  If you wish to
     move a line, press Alt F10, then when it is blinking, press Alt = (Alt
     and equal) then move to the new location and press Alt = again.


     MODIFYING

       *  If you want to LOOK at a person's information, use the modify
          routine.  Then after looking, just push F1 (Function 1).

     The modify screen will ask you for a person's code number or name.  When
     it finds the person, it will show the person, the person's mother and
     father, the person's spouse, and the names of the children.  You may then
     modify any information about the person and the marriage.  (You may not
     change the sex of the person if the person is married.)  If a person has
     more than one spouse, you may display the other spouses in this manner:
     when the cursor is at the bottom right corner, push the F9 key (Function
     9) and the next spouse will display along with the children from that
     marriage.  If you want to change date or location information about the
     parents, spouse, or children, then you would need to switch to them as
     the person to modify.  If you want to add the parent's names, use the Add
     routine, not the Modify routine.  If you want to delete the parents
     (because of an error) then switch to one of the parents as the person to
     modify, and then delete the child.

     This same modify screen can be used to delete a child who was put in a
     family in error, to change the order of children, to delete a spouse who
     should not be married to this person, and to change the order of spouses.
     If you want to do one of these four things, type one of the following
     when the cursor is at the bottom right corner.

       R  =  rearrange the order of the children who are showing
       D  =  delete a child who is showing
       W  =  change the order of a spouse
       X  =  delete a spouse (all spouses will show - you pick one to delete)

     When you delete a child or delete a spouse, the child or spouse will
                             Brother's Keeper Ver. 4.5                  Page 9
     
     
     still exist in the file, however they will no longer be connected to this
     person in any way.  You are then able to add that person as a child of
     someone else, for example.  If a person has the wrong parents, modify one
     of the parents and delete the child.  If you want to ADD the parents for
     a person, use the ADD routine.

     There is not a way to completely DELETE someone from the file, but if
     they are neither someone's child, nor someone's parent, nor someone's
     spouse, then they will not show up on the printouts.  If you change the
     person's name to NOT USED then it will also be skipped on the
     alphabetical reports and number reports.  If in fact you have someone who
     was entered in error and is now not linked to anyone else, and you wish
     to re-use the number which was assigned to that person, then here is a
     way to re-use the number.  First, be sure that code number is not linked
     to anyone else.  Use Modify to call up the person and check that the
     parents say Unknown and the spouse and child areas are blank.  Then, when
     you are adding children to someone, type the code number that you wish to
     re-use.  It will display any information about the person who previously
     had that number.  Then use the UP arrow key to move up the fields to the
     name field.  Type the new correct name and then all the correct date and
     location information.  The new information will be stored with that code
     number and the person will now be linked into a family.

     Often, when you are looking at someone on the modify screen, you want to
     display someone else who is closely related to the person showing.
     Therefore, there is a quick routine for doing this.  When the cursor is
     at the bottom right corner of the modify screen, you may type one of the
     following characters (and enter) to move quickly to another person.

       F  =  display the person's Father
       M  =  display the person's Mother
       S  =  display the person's Spouse
       1  =  type a number from 1 to 9 to display child 1 to 9
       O  =  display the next Older brother or sister of this person
       Y  =  display the next Younger brother or sister of this person

     If the person you are displaying is married, then you may also press F6
     and you will go immediately to the Add routine so that you may add more
     children to the family.


     EDIT TEXT FILE

     The E routine will allow you to create or edit a text file with up to 24
     lines of text.  (You may also access this editor by pressing F5 when in
     the message line area.)  This is useful if you need to have more than 7
     message lines for a person and are using the $$FILENAME option on one or
     more of the message lines (as described above).  You can use this routine
     to create the file instead of having to stop the program and start your
     word processor.  Although this is a quick way to edit files, it is very
     limited in features.  You will have to push enter at the end of each line
     (there is no word-wrap).  In addition to the normal editing keys, the
     text editor has a few features to help you when making changes.  If you
     wish to insert a new line between two existing lines, then press F9.  If
     you wish to delete a line, then first of all make the line blank (by
     pressing ESC) and then press F7 to remove the blank line.  If you wish to
     move a line, press Alt F10, then when it is blinking, press Alt = (Alt
                             Brother's Keeper Ver. 4.5                 Page 10
     
     
     and equal) then move to the new location and press Alt = again.

     If you do not have a word processor, I would suggest the shareware
     program PC-WRITE which is available from several sources.  Do not use the
     E routine of this program to edit an existing file which is longer than
     24 lines.  If you use your word processor to create a file, there is no
     limit to the number of lines you may enter.  The print routines which
     print all message lines will print the entire text file that you have
     named in a message line.

     If you use a word processor to create your text files, be sure that the
     file is saved in ASCII format and not in some special format that is
     unique to that word processor.  The ASCII format is the format that can
     be read from DOS with the TYPE command.  If you are at the DOS prompt (A:
     or C:) and enter TYPE and then the name of the text file, you should be
     able to read the text file on the screen.  If you see strange characters,
     the file is not saved in ASCII format.  Some word processors always save
     files in ASCII format, but most word processors at least have an option
     of saving files that way.


     BACKUP DATA FILES

     You can use the B routine to make a backup copy of your data files.  I
     suggest that you do this on a regular basis.  At some point in time you
     will have a problem, either caused by hardware problems, or software
     problems, or maybe even by you.  I am sure that you do not want to start
     all over again.  So take a minute and make a copy of your files.  I have
     made the process as easy as possible.  Just pick the BACKUP routine and
     then put a formatted diskette in the A: drive or the B: drive.  When the
     Backup is complete, remove the copy and label it with the date.  Have two
     or three backups and store them in a safe place.  If your files are too
     large to fit on a diskette, then use the DOS BACKUP command or a similar
     program to make backup copies of your data.  If you have a single drive
     computer, use DISKCOPY.  Whatever the case, be sure you have a couple
     backup copies of your data.  No diskette and no hard disk will last
     forever.  It will fail someday, so be ready.


     OPTIONS

     The O options routine will let you change certain parameters.

     The first screen appears as follows:

                                    Default value     Monochrome default
       Form color                   (3)                  7    white
       Data color                   (7 white)            15   bright white
       Background color             (1 blue)             0    black
       Date format (0-9)            (1)
       Months Capital or Lower      (0)
       Name for date below Born     Baptized:
       Name for date below Died       Buried:
       Name for date 2 below Died      Other:
       Name for bottom line at left      Ref:
       Name for bottom in center  Occupation:
       Name for date below married     Other:
                             Brother's Keeper Ver. 4.5                 Page 11
     
     
       Use check field?             (yes)
       Special effects?             (yes)  radar/curtain/exploding windows
                                           make it no for faster screens
       Beginning output        (printer)   can be changed to display reports
       Push Enter at menu            (no)  make it yes if desired
       Path for data files                 where the data files are

     On this screen you may change the colors, change the conversion format
     for the dates (see the ADD section above for description of date types),
     use special effects, cause the program to always start with either the
     printer or screen as the normal output, and set up a path for the data
     files.  Also you may change the names which will appear for the other
     date fields and for two other fields.  Whatever description you put here
     in the options section will show on the Add and Modify screens and on the
     printouts.

     After you push F1 you will see screen 2 which is the printer options.

       Ascii code for vertical      (179)    these codes are used in the tree
       Ascii code for horizontal    (196)    print routine.  If your printer
       Ascii code for corner        (192)    prints DDDDDDDDDD on the tree
       Ascii code for vert/right    (195)    then change these.  Read Tree
       Ascii code for horz/down     (194)    section.
       Print generation bar         (yes)  1  2  3  4  on descendant printout
       Printer is LPT1 or LPT2      (LPT1)   LPT2 is your second parallel port
       Date format top of form      (1)   1 = 01-JUN-1989   4 = 06-01-1989
       Pause after each page        (no)  make it yes if single sheet printer
       Compress print on            (15)  ( )  codes to cause compressed print
       Regular print on             (18)  ( ) ( ) ( ) codes for regular print
       Bold print on                (27)  (69) ( ) ( ) ( ) printer bold print
       Bold print off               (27)  (70) ( ) ( ) ( ) ( )
       Can it bold/w compress       (no)  will bold print work with compress
       Can printer backspace        (yes) if names print twice, make this no
       Can it CR w/out LF           (yes) no if it can not
       Graphics spacing (sideways)  (18)  use smaller num to lessen the gap
       CR and LF for end of line    (0)   what makes printer start a new line
       Print string 1
       Print string 2
       Print string 3

     The BROTHERU program can help you in setting up the codes for your
     printer.  For the HP Laserjet printer, it will set up the codes:

       Compress   27 38 107 50 83 0 0
       Regular    27 38 107 48 83 0 0

     If that does not work on your model of Laserjet, you may wish to try:

       Compress   27 40 115 49 56 72 0
       Regular    27 40 115 49 48 72 0

     If you do not know the answer to the 3 "can" questions about your
     printer, you can run the printer test routine by typing a T at the bottom
     right corner of option screen 2.

     The three print strings allow you to send any information you wish to
     your printer (using the P routine).  You may wish to change to a
                             Brother's Keeper Ver. 4.5                 Page 12
     
     
     different type style, change the orientation for your laser printer, or
     set a left margin. Each of these strings can be up to 42 characters long.
     Set up the ASCII decimal values you wish to send to the printer with a
     comma or a / between values.  For example, if your printer has a NLQ
     (near letter quality) mode, you could set print string 1 to be:

       /27/52

     and then when you send print string 1 to the printer, it will be set to
     NLQ mode which will make the family group sheets look better.

     Consult your printer manual to see what features your printer has and
     what ASCII decimal codes must be sent to activate them.  If you need more
     codes than what will fit on one line, you may use two lines and then send
     both lines.  You may want to set string 3 to the code which resets your
     printer.  You may even send short character strings to the printer by
     entering the decimal values for each letter.

     RESTRUCTURE ALPHA FILE

     If the file ALPHFILE.DT4 is somehow erased or not correct, you will be
     given the opportunity to recreate it.  The ALPHFILE.DT4 file is used when
     searching for a person by name.


     PRINT ROUTINES

     In any of the print routines, you can type a person's code number or the
     person's name when specifying who to print. You may type a question mark
     (?) in place of a first or last name that you are not sure of.  When
     given a print option, the default answer will show and you may push enter
     to keep that response or you may type in a different response.

     All print routines may have the output sent to the PRINTER, to the
     SCREEN, or to a DISK file.  (You may use the Options routine to set up a
     default so that each time that you start the program it will be set for
     either the printer or the screen.)  Whenever you are at the main menu,
     push F9 if you wish to change the output.  There are two ways to write to
     a disk file.  One way is to include the control codes (such as compressed
     and bold).  This is useful if you want to print the data later.  The
     other way is to send the output to a file without control codes.  This
     method is useful if you wish to use a word processor to edit the file.
     (If you wish to save the output of an ancestor report without control
     codes, you should probably first set the printer options to "can not
     backspace" and "can not CR without LF" since that report tries to
     underline the names if possible.)

     If you send the output to a disk file, you can type the name for the disk
     file or use the default name (which is the date.)  If you send several
     printouts to the same file, it will append to the file (add to the end of
     the file).  The output file may later be edited or sent to a printer with
     the copy command.

     If you are printing a multi-page printout and the second and following
     pages do not start at the top of the paper, it means you need to set your
     "top of form" on your printer.  To set the "top of form", move the paper
     to the top of a page, then turn the printer off, then back on again.
                             Brother's Keeper Ver. 4.5                 Page 13
     
     
     ANCESTOR CHARTS

     The C routine will print an ancestor chart for anyone in the file.  The
     ancestor chart will show the person you choose and that person's parents,
     grandparents, great-grandparents, etc.  Birth, death, and marriage
     information will also print.  You may choose 8 different sizes of charts
     when printing. If you need to print over seven generations, you will need
     to print multiple charts.  For example, you can print a 5 generation
     chart starting with yourself.  Then if you have further ancestors on
     file, you can print other 5 generation charts starting with each of your
     great-great-grandparents.  This would give you a total of 9 generations
     printed.  Using this method, there is no limit to how many generations
     you can print.

     The first 6 types of ancestor charts (A - F) and type (H) will shorten
     long names to 30 characters.  This is accomplished by changing a middle
     name to an initial or removing a middle name if necessary.  The (G) type
     of ancestor chart will leave names at 40 characters, but will print only
     4 generations per page.

     If you have a wide carriage printer, the (H) type ancestor chart will
     print 6 generations.  This report also works with laser printers that can
     print up to 162 characters on a line in landscape mode.

     When printing a 5 generation chart, you have the option to print code
     numbers, no code numbers, or standardized numbers.  Standardized numbers
     are what you see on hand generated charts.

     DESCENDANTS REPORT

     The D routine will print the descendants of any person.  You will have
     the option to print code numbers and message lines.  You also have the
     option to double space and to print relationships.  The descendant
     routine will show up to 20 generations.  A sample printout appears in
     Appendix D.

     The D routine assumes your printer can print 132 characters in compressed
     (or condensed) mode.  It sends the code CHR$(15) to put the printer in
     compressed mode.  This works fine for Star, Epson, and most IBM printers.
     If you have a different printer, you may change the compression code that
     is sent by changing that field in the options routine or by using
     BROTHERU and picking a printer.  If your printer can print more or less
     than 132 characters, you may type in a different number when asked for
     the number of characters per line (the range is from 80 to 250).

     GROUP SHEETS

     The G group print routine will print the information for any person along
     with the person's parents, spouse and children.  Any message lines you
     entered may also be printed with this routine if desired.  The group
     sheets are useful if you are organizing your data, creating a book, or
     you wish to send the sheets to relatives for further information.  All
     fields will print for each person.  However, if you are not using an
     optional field (such as baptized), and you have set the name of the field
     equal to blanks (in the options routine), then that line will not print.

     There are many options when printing group sheets.  If you choose All for
                             Brother's Keeper Ver. 4.5                 Page 14
     
     
     children data, it will also include spouses of children.  Separation
     lines can be eliminated if desired, or changed to graphic lines if your
     printer prints IBM graphic characters.  If you set a left margin greater
     than two, you should probably print with Elete size characters so that
     information is not lost on the right side of the page. If you wish to
     save the options you have chosen, press F5.  The last option lets you add
     4 personal message lines to each page so that you could put instructions
     and your address on each page.

     You may print people one at a time, or you can choose to print a range of
     numbers, or everyone who is a descendant of or ancestor of a certain
     person.  When the program asks for the name of the person to print, you
     can type the name, or number, or type an R to print a range of numbers
     (or all) or an A to print all the ancestors of someone, or a D to print
     the descendants of someone.  If you type a D, you will then be asked for
     the name or number of the person for whom you want all descendants
     printed.  If you type an R, you can either get a group sheet for everyone
     in the range you specify (2 sheets for each family - one showing the
     husband first and one showing the wife first) or you can get 1 group
     sheet per marriage.

     TREE PRINT

     Use the T tree print routine to print a tree chart showing the
     descendants of any person with the parents and children connected with
     lines.  (If you do not get lines printed on your printer, see below for
     instructions on changing the line codes.)  The tree report will print up
     to 10 generations at a time (or more if you shorten the name length).  If
     you have the option set to pause after each page, it will print 2 or 3
     pages which you may tape together side by side, and, if the chart
     requires over 63 lines, it will print more sets of 2 or 3 pages which you
     may tape below the other sets.  If you do not have the option set to
     pause after each page, it will print continuously without page breaks
     until it finishes the left section of the chart.  It will then do a form
     feed and print the right section of the chart.  If you are not printing
     compressed, it may also have a middle section.  You also have an option
     of printing sideways on an Epson or IBM graphics compatible printer.

     When printing the tree chart, you have the option of leaving names at 40
     characters, or shortening them to less characters.  (Names are shortened
     if necessary by removing the middle name.)  The shortened name version
     will be able to print more generations on each page, thus condensing the
     size of the chart.  You may include spouse names, and if you choose a
     name width of less then 40, you may include birth dates or code numbers
     (thereby expanding width).

     If you have your output set to the SCREEN instead of the PRINTER, the
     first 22 lines of the tree will display and you are given the option to
     shift the screen image to the left to see other generations on the right.
     Each time you press the right arrow key, it will shift by one generation.
     You can also push the down arrow key to see names below. You may move up,
     down, left and right having a total of 66 lines and 10 or more columns.
     Press enter for the next 66 lines.

     This tree routine is the one that uses the five ascii codes that show on
     screen two of the options.  These codes are used to draw the lines from
     parent to child.  If your printer does not print IBM graphic characters,
                             Brother's Keeper Ver. 4.5                 Page 15
     
     
     (see your printer manual for a dip switch to change for IBM character
     set) try the sideways option (if you have a graphics printer) or change
     the codes to the ones your printer uses which look like those that
     display on the options screen.  If you can NOT get the lines to look
     right, set the options as follows and print regular (not sideways):

        vertical    (124)      |
        horizontal  (45)       -
        corner      (124)      |
        vert/right  (124)      |
        horz/down   (45)       -

     Note: If you have a laser printer which can print landscape, you can set
           your laser printer for landscape mode using the Print string
           routine and then you should print regular (not sideways).  The
           sideways routine in this program is different from the landscape
           mode of laser printers.  Also, laser printer users may have better
           results if they specify a page length of 59 lines instead of 9999.
           Also HP laser printer users can use the Print string routine at the
           main menu to send the string 27, 40, 49, 48, 85 to cause the
           printer to use IBM graphic characters.

     NAME, NUMBER, BIRTHDAY PRINTOUT

     Option number 1 of the N routine will print all names, birth dates, and
     code numbers in numerical order.  If a name field is blank or is equal to
     "Not used" or is equal to "*unknown" then it will not print.  Option
     number 2 will also print everyone, but it allows you to custom design a
     report with any information about each person.  See Appendix L for
     information on custom reports.

     If you pick option number 3, you will create a file called ALPHA1.DTA
     which may then be sorted alphabetically.  (You can have the routine copy
     everyone or just the descendants of a certain person.)  Each person's
     name will automatically be changed to last name first (see LAST NAMES
     below).  This file may then be sorted into a file called ALPHA2.DTA and
     when that file is printed (option 4 or 5), you will have an alphabetical
     list.  In order to print the alphabetical list you must first run routine
     number 3 to create the file ALPHA1.DTA.  (This file will take up 59 bytes
     of disk space for each name.)  After the file ALPHA1.DTA is created,
     you can sort the file while still in the Brother's Keeper program if you
     have enough memory and if the SORTF.COM program is on your program disk.

     If you are not able to sort from within the BK program, then you must
     stop the program in order to sort the file.  To sort the file use the
     SORTF program.  Copy the SORTF.COM file to your disk and then type SORTIT 
     which is a batch file to sort the file.  (The files SORTIT.BAT and 
     SORTF.COM should be on your data disk or in the same sub-directory as the 
     data.)  If you do not have the SORTIT batch file, just type: 

     SORTF  ALPHA1.DTA  ALPHA2.DTA

     The sort may take a minute or so, depending on how many names you have.
     (The sorted file will also use up 59 bytes of disk space for each name.)
     When the sort is finished, restart the BK program and run the N routine
                             Brother's Keeper Ver. 4.5                 Page 16
     
     
     option 4 or 5 to print the alphabetical list.

     You can run options 4 and 5 several times without having to sort the file
     again.  However, you will need to sort again if you add people to the
     file.  See Appendix L regarding custom reports.

     Option number 6 will create a file (called BIRTH1.DTA) which can be
     sorted to print a birthday list.  This routine will only include people
     who are still alive (the date of death field is blank) unless you
     specify otherwise.  This routine will also attempt to give married women
     the correct last name, even though you entered their maiden names.  If
     you choose to create a file of the descendants of someone, you will also
     have the option to include other people in the list (just in case you
     want to include a relative who is not part of the descendant list).
     After running this routine, you may type Enter to sort the file
     or you may stop the BK program and sort the file by typing BIRTHDAY.
     That will run the batch file which sorts the data.  The same requirements
     that are discussed above about needing the SORTF.COM program
     also apply to this sort routine.

     After the sorted file (called BIRTH2.DTA) is created, start the BK
     program and pick N then 7 to print a birthday list.  This will show
     everyone's birthday in order, starting with January.

     If the results of the birthday list are not correct, check to make sure
     that the format of your birth dates matches what is specified on the
     options screen as far as date type.  (See dates in Add section above.)
     If your dates are not all in the same format, you will get strange
     results.  You can use the BROTHERU program to change the format if you
     wish, but be sure to have a backup copy of all your data files before
     changing the date format since sometimes the results are not what you
     expected.

     The files ALPHA1.DTA, ALPHA2.DTA, BIRTH1.DTA, and BIRTH2.DTA are
     temporary files which can be deleted (if you wish) after printing.  They
     must be recreated anyway if you later want to print an updated report.
     You may edit these files if you wish to make changes before printing.  DO
     NOT EDIT ANY FILE WHICH HAS A NAME ENDING WITH .DT4.

     The .DTA files are created on the same drive or in the same subdirectory
     as the .DT4 files.  If your programs are on a different drive, or in a
     different subdirectory, you will need to change to that data area before
     sorting with the SORTIT or BIRTHDAY batch files.  It is possible to
     change the batch files so that the drive or path is included in the batch
     file.  Just put the drive or path name in front of the existing file
     names.  For example, if your data is on the B: drive, you could change
     the BIRTHDAY batch file to read:

     SORTF  B:BIRTH1.DTA  B:BIRTH2.DTA  /+47,4

     If you have modified the batch file to include drive or path names, you
     may then exit the BK program, type the name of the sort batch file, and
     then restart the BK program without having to change directories.

                             Brother's Keeper Ver. 4.5                 Page 17
     
     
     LAST NAMES

     Certain suffixes such as Jr and Sr will be ignored by the program while
     it is looking for each person's last name.  If you put a suffix after a
     name, and the program thinks that the suffix is the last name, you can
     add a period after the suffix and the program will skip it and find the
     correct last name. For example, if you put MD after a person's name, you
     should put a period after it so that it will not be alphabetized under
     the M's.  You could end the name with MD. or M.D. and then it should
     print correctly.  The program will also attempt to place two part last
     names in the proper order.  If you come across a two part last name that
     does not alphabetize correctly, let me know what it is and I will send
     you a corrected program.


     AHNENTAFEL

     The L routine will print an Ahnentafel list (Ahnentafel is from a German
     word meaning ancestor table).  This is a chart which lists ancestors of
     a person, without drawing a chart like the Ancestor routine.  You have
     the option to show relationships (such as Parent, Grand Parent, etc.).
     This routine will show standard code numbers starting with 1.  The father
     of any person has a standard code number of double the child.  The mother
     of any person has a standard code number of double the child plus 1.  The
     Custom report routine is used when printing so that you may choose which
     information to print about each person.


     PRINTER STRINGS

     The P routine will send any of the 3 print strings (described in detail
     above in the options section) to the printer.  It also has other print
     strings for laser printers.

     WORD SEARCH

     There are two types of Word searches.  The first type will let you enter
     one word or name and will search all fields of each person for a match.
     If you type "Chicago" it will find all people who were born or died in
     Chicago, or have the word "Chicago" in a message line, or even have
     "Chicago" in their name.  The second type of Word search is field
     specific, which means that it searches for a word only in a particular
     field.  It can also search for people with several fields which match,
     and it uses the Custom report format for printing.  This second type of
     Word search will let you find all the females who were born in Chicago in
     1950.

     First a discussion of the first type of Word search.  It will allow you
     to search all fields and message lines.  Type the word or words you are
     searching for (capitals or lower case makes no difference).  The program
     will then search the names, dates, locations, and message lines (not text
     files) to find a match and will display or print the names of people who
     have data which matches.  When the end of the file is reached, you will
     be asked if you also want to search the marriage records.  If you wish to
     search the 2 date fields and 2 place fields associated with each
     marriage, then push enter, otherwise you may skip the searching of the
     marriage file.
                             Brother's Keeper Ver. 4.5                 Page 18
     
     
     Note that the first word search routine is looking for an exact match to
     what you type in.  So if you type "Joe Doe", it will not match "Joe Q
     Doe".  However, the search is useful to find all relatives who were born
     in, or died in, or were married in, a certain city.  You may also match
     people who share a common date.  For example, if you matched "1954" you
     would find all people who were born or died in that year.

     The second type of Word search will let you enter what you are searching
     for in the appropriate field.  If you enter information in more than one
     field, a person will have to match ALL fields in order to be a match.
     Some of the fields (name and locations and message lines) will allow you
     to enter two words and you can specify whether it has to match both words
     or either word in order to qualify as a match.  Some examples are given
     on the input screen.  You may then use the Custom report format to print
     the matching names.  (See Custom reports in Appendix L.)


     STOP

       *  NEVER remove the DATA diskette unless instructed to change disks or
          until after typing S to stop.  Some of the files are not fully
          updated until you type S and stop.

       *  If you have 2 data diskettes, you must STOP the program, then change
          data diskettes, and then restart.  The program currently will not
          link people between 2 diskettes.

                             Brother's Keeper Ver. 4.5                 Page 19
     
     
     APPENDIX A.   HOW TO MAKE CORRECTIONS

     If you are correcting spelling or dates, use the MODIFY routine and TAB
     (or UP arrow) and Shift TAB (or DOWN arrow) to move to the field to
     change.  Then use the left or right arrow keys to move within a field,
     use Esc if you want to erase a field, and use Ins and Del to insert or
     delete characters.

     IF YOU ENTERED SOMEONE'S CHILDREN IN THE WRONG ORDER, do the following.
     First, go to the modify routine and type the parent's code number or name
     and the parent's information will appear on the screen (use either the
     husband or the wife).  The children's code numbers will show along with
     their names.  The first child you entered will be the first code number
     showing, the second child you entered will be listed second, etc.  You
     may correct the order on the screen by typing the letter R and then
     retyping the code numbers in the correct order.  Make sure the code
     number shown for first child is the actual first child, etc.  Push F1
     when they are correct.

     IF YOU ENTERED SOMEONE WITH THE WRONG PARENTS, you may correct it by
     doing the following.  First, modify the record of the person you said was
     the parent, but was not (use either the husband or the wife).  When the
     wrong parent's record is showing on the screen, type D and delete the
     child who should not be there.  Then you may go to the add screen and
     bring up the correct parents and then add the child by typing the child's
     code number or the name and F8. The child added to the family will then
     be the last child. If the children of the family are now out of order,
     you may correct that as described above in the children order section.

     IF A MARRIAGE IS IN ERROR, use the modify routine to show the person with
     the wrong marriage.  Type X to delete a marriage.  You will then be shown
     all the marriages for this person and be allowed to delete one.  When a
     marriage is deleted, the husband and wife stay in the file as people, but
     the connection which shows their marriage is deleted.  If the marriage
     also had children records related to it, the children will have their
     parent connection deleted, but the children will stay in the file as
     people.  These children may then be added as children of some other
     marriage by using the Add routine.

     IF A MARRIAGE IS OUT OF ORDER, use the modify routine to show either the
     husband or the wife.  Type W to correct the spouse order.  You will be
     shown all the marriages for this person and be allowed to change the
     order.

                             Brother's Keeper Ver. 4.5                 Page 20
     
     
     APPENDIX B.   PRINTER PROBLEMS.   (also see Appendix M)

     Many of the questions or problems I have received have related to printer
     problems.  The printer options can be set in the Options routine.

     Some printers can not backspace.  If your printer can not backspace you
     should set that option to 0 (zero) or names will double print on some
     printouts and the ancestor chart may not print correctly.

     Some printers can not do a carriage return (CR) without also doing a line
     feed (LF).  If your printer is one of those, set that option to 0 (zero)
     or names will double print on some printouts and the ancestor chart may
     not print correctly.

     You may test your printer's features by typing a T at the lower right
     corner of option screen 2.

     Most printers want a carriage return and line feed at the end of each
     line.  If your printer wants only a carriage return, set that option or
     everything will double space.

     The program will try to print some reports in compressed format which
     lets you print 132 characters per line on most printers.  You may enter
     the decimal values of the codes which must be sent to your printer to do
     compressed and regular print.  If you have a wide carriage printer, you
     may print 132 columns without compressing, so if you wish you may set the
     codes to zeros and it will print those reports using the full size paper.

     You may set up the codes which start bold print and turn off bold print
     for your printer.  Check your printer manual and see what the decimal
     values are for the codes which do that.  If your printer can not bold
     print, set the values to zero.  Bold could actually be enhanced or
     emphasized or italic or whatever you want the names to appear as.  The
     program also needs to know if your printer can bold print when printing
     compressed.  Many printers can not do that, so if yours can not, the
     program will try to backspace (if possible) to make names bold print when
     printing compressed (on the descendant printout).  The program will only
     try to bold print names on the descendant printout and the family group
     sheet printout.

     There are up to 7 codes to turn on and off compressed print and bold
     print.  Many printers only require 1, 2 or 3 codes to control those
     features.  If the first code of the 7 is zero, none of the 7 codes are
     sent.  If the first code is not zero, all 7 codes are sent.  Normally,
     codes of 0 (zero) at the end will not affect the printer output.  If you
     do not want the extra 0's to be sent to the printer, change the extra
     codes to 999 and those codes are not sent.

     The descendant printout will print generation numbers at the top and
     bottom of each page.  You may turn this feature off in Options.

     I have tested the programs on several computers and with several
     printers.  However, I do not have access to all combinations of equipment
     so it is quite possible that some program changes may still have to be
     made.  Let me know if your printer is not cooperating and I will try to
     help.  Tell me what version you are using. (4.5)
                             Brother's Keeper Ver. 4.5                 Page 21
     
     
     APPENDIX C.     A LITTLE EXPLANATION ABOUT RELATIONSHIPS:

     Your uncle is the brother of your father or mother.
     Your aunt is the sister of your father or mother.
     Your great uncle (or grand uncle) is the brother of your grandfather or
         grandmother.
     Your great aunt (or grand aunt) is the sister of your grandfather or
         grandmother.
     Your great-great uncle is the brother of your great-grandfather or
         great-grandmother.
     Your great-great aunt is the sister of your great-grandfather or
         great-grandmother.
     Your first cousin is the child of your aunt or uncle.
     Your second cousin is the grandchild of your great aunt or great uncle.
         (If two people are first cousins, the children of each of the
          people will be second cousins.)
     Your third cousin is the great-grandchild of your great-great uncle or
         great-great aunt. (Children of second cousins, are third cousins.)
     Your first cousin, once removed, is the child of your first cousin or
         is the child of your great uncle or great aunt. (see also REMOVED
         COUSINS) If someone is your first cousin, then his or her child is
         your first cousin once removed. (Once removed means one generation
         level different from you.)  All your regular cousins (first, second,
         etc.) are at the same generation level as yourself.  Those at
         different levels are "removed." If someone is YOUR first cousin once
         removed, then you are HIS or HER first cousin once removed also.
     Your second cousin once removed is the child of your second cousin.
     Your first cousin twice removed is the child of your first cousin once
         removed (i.e. the grandchild of your first cousin).
     Your second cousin twice removed is the child of your second cousin once
         removed (i.e. the grandchild of your second cousin).

     REMOVED COUSINS:
     If two people are some type of cousins, but they are at different
     generation levels, then here is the way to compute their relationship.
     (The program does this automatically when printing, but you may want to
     know what it is doing.)

       1. Count how many generation levels they are apart.  This is the number
          they are "removed."
       2. Start with the one at the highest generation level (the older level)
          and count how many generations up you must go to find the brothers
          or sisters that are the ancestors of these cousins.  This is the
          "FIRST" or "SECOND" or "THIRD" part of the cousin relationship.

                              GREAT-GRANDFATHER
                                  /     \
                        GRANDFATHER      GREAT-UNCLE
                          /     \              \
                    FATHER     UNCLE        1st COUSIN ONCE REMOVED
                    /  \         \                   \
                >YOU< BROTHER  1st COUSIN            2nd COUSIN
                 /      \          \                     \
              SON    NEPHEW   1st COUSIN ONCE REMOVED   2nd COUSIN ONCE REMOVED
              /         /           \                      \
     GRANDSON  GRAND-NEPHEW  1st COUSIN TWICE REMOVED  2nd COUSIN TWICE REMOVED
                             Brother's Keeper Ver. 4.5                 Page 22
     
     
     APPENDIX D.   SAMPLE PRINTOUT.

     Below is an example of a descendant printout.  Note that each new
     generation is indented. All relationships such as UNCLE, COUSIN, etc. are
     computed by the program.


     * JOSEPH P. JONES (12/20/1895) - (03/05/1949) m. SUSAN SMITH (01/05/1902-
       (GRANDFATHER)

     . * JOHN JONES (05/19/1920 -   m. (12/07/1940) MARY GREEN (08/05/1921 -
         (UNCLE)

     . . * BILL JONES (03/23/1942 -
           (FIRST COUSIN)

     . . * MARY JONES (02/04/1944 -    m. (03/04/1964) PETER WHITE
           (FIRST COUSIN)

     . . . * FRANK WHITE (05/04/1971 -
             (FIRST COUSIN ONCE REMOVED)

     . * MARTHA JONES (09/19/1923 - 11/17/1981)
         (AUNT)

     . * GEORGE JONES (12/13/1926 -  m. (01/05/1949) LOIS WILSON (03/18/1927-
         (FATHER)

     . . * CAROL JONES (05/18/1953 -
           (SISTER)

     . . * JACK JONES (05/03/1955 -  m. (08/23/1977) MICHELE MOE (07/22/1955-
           (MYSELF)

     . . . * MARTHA JONES (04/03/1981 -
             (DAUGHTER)


     The tree chart for this family would print as follows:

     Joseph P. Jones ----- John Jones ------ Bill Jones
                       |                 |-- Mary Jones ---- Frank White
                       |
                       |-- Martha Jones
                       |-- George Jones ---- Carol Jones
                                         |-- Jack Jones ---- Martha Jones

                             Brother's Keeper Ver. 4.5                 Page 23
     
     
     APPENDIX E.    CHANGES FROM PRIOR VERSIONS.

     Version 4.5 contains the following changes from 4.3

     1.  BROTHER and BROTHERP were combined into one large program (BK).
     2.  Program requires 512K to run, and 640K if over 2,000 names.  (If that
         is a problem, vers. 4.3 uses 384K and can read the same data files.)
     3.  Option for not pushing enter at main menu.
     4.  Left margins and top margins for group sheets.
     5.  Custom reports for Word search and Ahnentafel.
     6.  Word search (type 2) is field specific with "and" and "or".
     7.  When adding, can display children with F9 and jump to modify with F6
     8.  When modifying, can jump to add with F6.
     9.  On tree report, can show which of multiple spouses is parent.
     10. The BROTHERU utility program can correct more link problems with Q.
     11. The BROTHERU program can compute and display relationships.
     12. Age of person shows on Modify screen.
     13. Option of lower case date names and no leading 0 for day.
     14. Option can be set to have the startup output be Print or Display.
     15. Wider tree charts available.
     16. On custom reports, a birth or death date with field size of 4 will
         print only the year of birth or death.

     I have dozens of ideas from users for new features.  However, most
     features tend to make the program larger.  So, one of my current projects
     is to make the program smaller so that I can add more features.  This may
     take a few months.  I will be converting to a totally new file structure
     which will have many benefits.  When complete, people with 512K of RAM in
     their computer should be able to enter as many names as people with 640K
     machines.  The 15,000 name limit will then be raised to over 30,000.
     Also, the data files will be in compressed format, so that the same size
     diskettes will hold over 3 times the data.  Meanwhile, I will also be
     working on improving the BKBOX program (which prints box tree charts) and
     the BKREPORT program (which prints register number system reports,
     outline reports and 3 by 5 cards).  If you do not have these two programs
     yet, they are available on some BBS's and on CompuServe (ROOTS forum) and
     on GEnie (GENEALOGY forum).  They are also available by mailing in the
     form at the end of this file.

     All registered users are notified about new versions.  I will also send
     registered users at least one new version at no additional charge.
     (Actually, to date I have sent registered users all major upgrades at no
     charge, however, in the future, I may need to charge a small fee for
     updates beyond their one free update.)  If you have used this program and
     find it to be of value to you, you are encouraged to send in the
     registration fee to the author (see Appendix N for why to register).  I
     have no way of informing you about improvements to the program unless you
     write to me.  When you write, enclose the registration form found at the
     end of this document.  If the program does not have a feature you would
     like, mention it on the form.  I tend to add new features that registered
     users suggest whenever possible.  This program has come a long way since
     version 1.0 - thanks to the suggestions from registered users.  There is
     usually a new version of the program available (with minor changes) every
     couple months or so.  Lately, there have been significant improvements to
     the program about every 6 months.

                             Brother's Keeper Ver. 4.5                 Page 24
     
     
     APPENDIX F.    CONVERTING FILES FROM PREVIOUS VERSION.

     If you have used the FAMILY program or FAMILY3 program, there is a
     conversion program to convert your data. If you have been using BROTHER'S
     KEEPER version 4.0 through 4.3, you do not need to convert any files.

     If you have used PAF (Personal Ancestral File) there is a conversion
     program called BKGEDCOM that will convert your data for use by BROTHER'S
     KEEPER.  This program will also create GEDCOM files and read GEDCOM files
     from other programs which are compatible with PAF GEDCOM.

     If you have data in Genealogy on Display, Family History System, or
     Linkages, see information on the registration form (last page).

     If you have entered names using an old version of the my program (which
     was previously called FAMILY or FAMILY3), you will need to run the
     CONVERT4 program one time in order to move the data which you have
     previously entered over into some new files which version 4 of BROTHER'S
     KEEPER uses.

     The conversion program has been sent to all registered users.  If you
     need the CONVERT4 program and do not have it, write to John Steed and
     specify which version you need to convert from.


     APPENDIX G.   DO YOU HAVE ANY SUGGESTIONS and MAY I HELP YOU?

     I have received many fine suggestions from users of the program.  The
     program would not be what it is without this help.  Please send any
     suggestions you have.  I may not make all the changes you suggest, but I
     have been able to make many changes over the years.  Some changes are
     easy to make and I may be able to send you a revised version which would
     be very useful to you.  Other changes are complex and may take a long
     time to implement.

     If you have a problem I will try to help you.  Send me a description of
     the problem and tell me what version you have (4.5) and what size disks
     you use.  For reference, Version 4.5 was released November 1989.

                             Brother's Keeper Ver. 4.5                 Page 25
     
     
     APPENDIX H.   TECHNICAL STUFF

     You do not need to know any of this to run the program, but some people
     may want to know what is going on.

     Most information is stored in 10 disk files:

      FAMLFILE.DT4  -  holds information about people.
      MARRFILE.DT4  -  holds information about marriages.
      LOCATEFL.DT4  -  holds all locations and check data
      MESSFILE.DT4  -  holds message lines for each person.
      FOPTIONS.DT4  -  holds option parameters (colors, printer info, etc.)
      ALPHFILE.DT4  -  holds last and first names for alphabetical search
      ALTKEYS.DT4   -  holds Alt key names/places you define (see Appendix I)
      REPORTS.DT4   -  holds specifications for custom reports you create.
      BOTTMESS.DTA  -  holds the 4 line personal message for Group sheets.
      PARAMETR.DTA  -  holds default parameters for Group sheets.

     There are also 4 temporary files, ALPHA1.DTA, ALPHA2.DTA, BIRTH1.DTA, and
     BIRTH2.DTA which are used for printing birthday lists and names
     alphabetically.

     The data disk will contain the files called "FAMLFILE.DT4" "MARRFILE.DT4"
     "LOCATEFL.DT4" and "MESSFILE.DT4" which will store the information.  When
     first starting out these files will be created.  Each person added will
     take up 230 bytes (characters), each marriage added will use 98 bytes,
     each message line will use 91 bytes, and each location will use 60 bytes.
     Do NOT use a word processor or editor to modify any of the .DT4 files
     since they have records of fixed lengths and if any record length is
     changed by 1 character, it will mess up everything.

     The options file FOPTIONS.DT4 will be on the program diskette if you have
     2 disk drives, otherwise it will be on the data diskette.  If you have 2
     program diskettes, there will be a FOPTIONS.DT4 file on each program
     diskette.

     Each person has a code number, each marriage has a code number, and each
     message line has a code number.  These numbers can be up to 5 digits.  In
     order to save disk space, the code numbers are converted to a 2 character
     string.  Then these 2 character strings are written to the disk.  Only
     ascii characters from ascii value 32 ("space") up to ascii value 254 are
     used.  Each record ends with an asterisk, a carriage return and line feed
     (except in the alpha file).

     The alpha file (ALPHFILE.DT4) contains 5 characters of the person's last
     name and 5 characters of the person's first name (actually the first 5
     characters in the name field, so it may include part of the middle name).
     Certain suffixes like Jr and Sr are ignored.  Also anything after the
     last name which ends with a period will be ignored.  For example, if you
     put MD after a last name, the program will think the last name is MD, but
     if you put M.D. after the last name, the program will know that it is not
     the person's last name.  In the alpha file, the first 10 characters are
     person #1, the next 10 characters are person #2, etc.  Each time that the
     BROTHER program is started, the entire alpha file is read into RAM memory
     so that alpha searches will be quick.

                             Brother's Keeper Ver. 4.5                 Page 26
     
     
     Here is the file layout of the FAMLFILE.DT4 file in case you want to copy
     it and read it with a database program.  Do NOT copy from the database
     files back to the .DT4 file.

          field                     size
     code number                     5
     name                            40
     date born                       15
     where born                      2
     other date1                     15
     other where1                    2
     date died                       15
     where died                      2
     other date2                     15
     other where2                    2
     other date3                     15
     other where3                    2
     reference or other              15
     occupation or other             25
     sex                             1
     marriage record number
      of the parents                 2  (2 char representing a 5 digit number)
     marriage record numbers
      for 8 spouses                  2 each - total 16      "        "
     message record numbers
      for 7 message lines            2 each - total 14      "        "
     future use                      12
     future use                      12
     an asterisk                     1
     carriage return/line feed       2
                                    -----
       total                         230

     You may also create a Custom report and send it to a disk file and then
     read that file as fixed record length into a database program.

                             Brother's Keeper Ver. 4.5                 Page 27
     
     
     APPENDIX I.  ALT KEYS (user defined)

     If you find yourself repeatedly typing the same name or city, you may use
     a simple procedure to save time and reduce errors.  You may define any of
     the alphabet keys (A-Z) to be any name, city and state, or word.  After
     you define what the key will be, you just push and hold the Alt key and
     then press the alpha key and the name or word will appear on the screen.

     Use the following procedure to define an Alt key. Type the name or city
     or word in any field on the add or modify screen.  Then hold the Alt key
     and press F10 (function 10).  The words you have typed will start to
     blink.  When they are blinking, hold the Alt key and press any alpha key
     (A-Z).  The words will stop blinking and that key sequence (Alt-alpha
     key) is now programmed. The next time you want to type that name or city
     or word in any field, just hold Alt and press the same alpha key.  You
     may program all of the alpha keys to be a different name or word.  These
     programmed keys will be remembered each time you restart the program.
     You may change what a key is defined to be by simply re-defining using
     the above procedure.

     Example:  Suppose you are going to add several people who were all born
     in Rockford, Kent County, Michigan.  When you type the first person, type
     Rockford, Kent County, Michigan in the "born where" field.  Then before
     you push enter, hold the Alt key and press F10 (function 10).  The entire
     field will start blinking.  Then hold the Alt key and press R.  The field
     will stop blinking and you may continue with adding the person.  The next
     time you want to type Rockford, Kent County Michigan in any field, just
     hold the Alt key and press R and it will appear.

     Example:  Suppose you are going to add several people who all have the
     last name of Winchester.  When you type in one of them, type just
     Winchester in the name field (do not type the first name).  Hold the Alt
     key and press F10 and the word Winchester will blink.  Then hold the Alt
     key and press W and the word will stop blinking.  Then press Esc to erase
     the name, and type the first name and middle name.  Then hold Alt and
     push W and Winchester will appear.  For each person that you add, just
     type the first and middle names and then push Alt-W.

     If you press Alt-F10 and then decide you do not want to have what is
     blinking saved as an Alt-key, then just press any key without holding Alt
     and it will not be saved.

     Also see the sections above on pages 3 and 4 describing shortcuts for
     duplicating locations which were recently entered.

     You may print the strings you have saved for each Alt key with a routine
     in the BROTHERU program.

                             Brother's Keeper Ver. 4.5                 Page 28
     
     
     APPENDIX J.  Utility program

     There is also a utility program called BROTHERU included in this set of
     programs.  This program has a routine to check the quality of your data
     and can fix many errors which may turn up.  The program can set up the
     proper printer codes for certain printers.  If your printer is not
     listed, you may have to consult your printer manual to obtain the printer
     codes and then use the options routine to enter them.

     The utility program will also let you save your options file by copying
     it.  You may then restore the saved file at a later time.  This may be
     useful for people who have 2 different types of printers.  You may set up
     the options for one printer, and then save the file with a special name.
     Then set up the options for the second printer and save that file with a
     different name.  You may then run the utility program and restore either
     options file depending on which printer you wish to use.  All options on
     screen 1 and 2 of the options screens are saved or restored, so you can
     even save 2 different sets of screen colors, one set the way you like
     them, and the other the way your spouse likes them.

     You may also use the utility program to print all the values you have
     stored for the ALT key combinations.

     If you decide to change the date format after you have entered many
     dates, you can use the utility program to change from any of the 9
     formats to any other of the 9 formats.  Be sure to copy all of the .DT4
     files to backup floppy disks before running this routine, just in case
     there is any problem.  Also change date format on Option screen 1.

     You may use the utility program to "delete blank message lines"
     for people who once had messages.  If a person has message lines, there
     will be an * displayed at the beginning of the line which shows their
     name on the ADD or MODIFY screens.  If, however, you later delete those
     message lines for that person, the * will still be displayed (since the
     program does not check to see what is in the message lines at that time).
     By running this special routine in the utility program, it will reset the
     pointers for message lines, and all pointers to blank message lines will
     be removed.  That will cause the * to not appear for people who no longer
     have message lines.  This routine will NOT reduce the size of any files
     on your disk.

     There is also a routine to create a Tiny Tafel file.  This is a
     relatively new type of report.  The Tiny Tafel file is a summary of all
     of your ancestors.  The file can be used to find other people who are
     researching the same family lines that you are.  There are computer
     systems set up to help people match their research with other
     genealogists by matching the Tiny Tafel files of each.  This is a new
     idea and has only been in operation for a few months.  If you have a
     modem, you can call one of these "computer bulletin boards" which has the
     Tafel Matching System, and obtain further information.  This routine in
     BROTHERU only creates the Tiny Tafel file.  It is recommended that you
     also obtain a program such as TTGEN12 which will allow you to edit the
     file and insert and delete lines.  You may contact John Steed and ask for
     further information.

                             Brother's Keeper Ver. 4.5                 Page 29
     
     
     APPENDIX K.  CONFIG.SYS file.

     The BK program needs to open several files at the same time.  Because of
     this, you may need to add a line to a special file on the disk you "boot"
     from.  If you get an error message when starting BK relating to file
     problems, then check the disk that you use when turning on the computer
     each time.  (If your computer boots from ROM as TANDY 1000 systems do,
     you will need to make a boot disk using FORMAT B:/S as described in your
     DOS manual.)

     Type DIR and see if there is a file called CONFIG.SYS on your boot disk.

     If the CONFIG.SYS file DOES already exist, look at what is in it as
     follows:

     TYPE CONFIG.SYS

     That will display on the screen the lines that are in the file.  If it
     already has a line in it which says FILES=20 or FILES= (any number 12 or
     more) then leave it alone.  If not, you will need to add the FILES=12
     line to the file.  (Any number over 12 is fine, up to about 30.)  You do
     not want to change any other lines in the CONFIG.SYS file.  You can use a
     word processor to modify the file if the word processor reads and writes
     in ASCII (i.e. not in some special format).

     After the FILES=12 line is in the file, restart or reboot the computer.

     If the file DOES NOT exist, then create it and put a line in the file as
     follows:

     FILES=12

     If you do not know how to create the file and put that line in it, here
     is a way.  When you are at the system prompt ( which is A> or C> ) you
     would type the following, and push enter at the end of each line:

     COPY CON CONFIG.SYS
     FILES=12

     then push F6 (function 6), and then push enter.  It should say "1 file
     copied".  You should then have the CONFIG.SYS file with the FILES=12 line
     in it.

     After that line is in the CONFIG.SYS file, restart or reboot the
     computer.   When the computer boots, it reads that file and will allow 12
     files to be open at the same time.  The BK program should then work
     properly.

     TANDY 1000 users will have to change their systems to boot from a disk
     instead of from ROM.  You have a program called SETUP-- which you will
     need to run.  Look in your manual for the name of your setup program - or
     look in the index of your manual under CONFIG.SYS.  Run the setup program
     from TANDY and pick the option to boot from a disk.  Then put the disk
     with CONFIG.SYS in the A: drive and reboot the computer to read that
     file.

                             Brother's Keeper Ver. 4.5                 Page 30
     
     
     APPENDIX L.  CUSTOM REPORTS

     BROTHER'S KEEPER gives you the ability to design your own report format.
     You may print custom reports either in number order or alphabetical order
     when using the N routine and also when printing Ahnentafel charts and
     when using Word search.  When you pick the custom report option, you
     will be shown the different fields which you may print for each person.
     For example, you may wish to print for each person their number, name,
     father's name and mother's name.  So you would choose field numbers 1, 2,
     17, and 18. As you choose each field number, you will be shown the normal
     length for that field.  For example, the name field is 40 characters
     long.  You may shorten the normal length for your report if you wish.  If
     you type 25 for the name length, that will be the length when it prints.
     For all names, a special routine will automatically remove middle names
     of people with names longer than the length you specify.  That way, the
     last name will not be cut off.  If you shorten the length of a field
     which is not a person's name, the field will be cut off at the end if it
     is too long.  For example, date fields are 15 characters long, but most
     dates fit in 11 characters, so you may shorten a date field to 11
     characters.  There is also a special routine for birth date and death
     date so that if you shorten the length to 4, it will print only the year
     (the last 4 characters).  If you lengthen a field, it will print extra
     blanks after the field is printed.  (That may improve readability.)

     As you type the fields and lengths, the total length will display at the
     top.  The total length is the sum of the field lengths plus 1 space
     between each field.  Use this as a guide and try to keep the number
     under the maximum number of characters your printer can print on a line.
     Most printers can print 80 characters in normal print and 132 in
     compressed print.  If you attempt to print more than the number of
     characters your printer can handle, your printer might jump to the next
     line, which will cause problems with page headings.

     You may press the up arrow to back up if you wish to make a correction.

     After you define your report, press F1 and print it.  When the printout
     is finished, you will be asked if you wish to save that format.  If it is
     a report you wish to print again in the future, answer Y (for yes) and
     give a brief description of the report.  Then the next time you print a
     custom report, you may recall that format to print again.  (Press F5 to
     recall a previously saved report.)  You may create and save many
     different custom reports.

     If you are printing in alphabetical order, you do NOT need to sort the
     file each time you try a different custom report.  You only need to run
     routine 3 when you have added new people to the file, or when you wish to
     sort a different group of people.

     You may print the fields in any order.  (For example, birth date in first
     column and name in second.)  The names will print in number order if you
     choose N - 2 or are doing a word search or else they will print in
     alphabetical order if you choose N - 5.

     The custom report formats are saved in a file called REPORTS.DT4.

                             Brother's Keeper Ver. 4.5                 Page 31
     
     
     APPENDIX M.  PROBLEMS   Questions and answers

     If you have printer problems, also read Appendix B.  If you just want to
     make corrections to information you have entered, read Appendix A.


     Q.  I can't get the program to start.  What is wrong?

     A.  Well, it could be one of several things.

         First of all, do you have enough RAM memory in your computer?  The
         program needs at least 450K of available memory.  If you have only
         384K, write John Steed and request version 4.3 which will run on
         your computer.  Even though your computer may have 512K of RAM
         memory, other things may be using up some of the memory.  To see how
         much memory is available for the program, you should run a program
         called CHKDSK which is located on your DOS disk.  Just type CHKDSK at
         the A> prompt (or C> prompt) and it will give you several lines of
         information.  The last two lines are important to the discussion
         here.  The next to the last line will show total RAM memory, and the
         last line will show what is available for programs such as Brother's
         Keeper.  If the last line shows less than 450,000 you have a problem.
         If your computer has 512K, and is a Tandy 1000, it is possible that
         up to 64K of the memory is being reserved for extra video usage.
         There is a way to free up that memory and make it available for
         program usage (I don't think it is explained in your manuals).  It is
         possible to have 640K of RAM memory in your computer, and yet still
         not have 450K available for programs.  If for example you have a RAM
         disk in use it will take up memory.  Also pop-up programs such as
         Sidekick will use up some of your memory.  Look in your CONFIG.SYS
         and AUTOEXEC.BAT files to see what all you have running.  Also, DOS
         itself requires about 50K or so of memory, depending on what version
         you have.  The line BUFFERS=num in your CONFIG.SYS file will also use
         up some RAM memory (do not use over BUFFERS=25).

         OK, assuming you have enough memory, you also need a line in your
         CONFIG.SYS file which says FILES=12 (or some number larger than 12).
         This is explained in Appendix K.  If you don't have that line in the
         CONFIG.SYS file, you will see the opening screen of Brother's Keeper
         and then you will get a message telling you that you need that line
         in the file.

         Thirdly, you might have a problem of the computer "locking up" when
         you type BK.  This is caused by the dip switch inside your
         computer set in the position that means you have a 8087 co-processor,
         when in fact you do not have an 8087 math co-processor.  So, if the
         computer freezes up and you have to turn it off to regain control,
         check that co-processor switch.

         If you still have problems starting the program after checking all
         the above items, try removing all memory resident programs and all
         device drivers.  The easiest way is to format a blank diskette with
         the FORMAT /S command. Then create a CONFIG.SYS file on that diskette
         with only the line FILES=12 in it.  Then reboot the computer with
         that diskette in the A: drive.  Then try to start the program.  If it
         still does not work, contact John Steed and describe the problem.

                             Brother's Keeper Ver. 4.5                 Page 32
     
     
     Q.  I have played around with the program a little and now I want to just
         start over.  How do I get rid of the names and information I have
         entered so that I can start from scratch?

     A.  All the data that you enter is stored in files which have names
         ending with .DT4.  If you stop the program and change to the drive or
         subdirectory which contains the data files, you can type DIR *.DT4
         and you should see about 5 files listed.  If you erase those files,
         you can start over.  So if you are SURE that you want to start over,
         you can type ERASE *.DT4 and all the data files will be gone.


     Q.  When I look at someone's information in the Modify section, it shows
         UNKNOWN for the names of the parents.  How do type in the parent's
         names?

     A.  In order to add the parents of someone, you need to go to the Add
         routine. Type in the Father's name for husband, and the Mother's name
         for wife. Then type the child's name.  Then the parent's names will
         show at Modify. If you have entered the wrong parents for someone,
         see Appendix A.


     Q.  How do I enter information for a family if I only have the Mother's
         name but I don't know the Father's name?

     A.  You can either enter the Father's name as _____ _____ (if you think
         you will collect the information later) or you can type the name as
         *UNKNOWN and it will never print on any report.


     Q.  How do I enter the second husband for a woman?

     A.  Using the Add routine, type the name of the second husband.  Then for
         the wife, type the code number for the wife or search by name.  When
         the wife is displayed, the program will know that it is an additional
         marriage for her.


     Q.  When I print the Tree report, why do I get strange characters instead
         of the nice lines I see when I display the report?

     A.  The program will try to print lines using the extended IBM character
         set which contains graphic characters.  Some printers can print IBM
         graphic characters, and some will only do so if you set a certain
         switch in the printer or send a certain code to the printer.  Some
         printers such as the Epson FX series do not print the IBM extended
         graphic characters. In the case of the FX, there is a Shareware
         program available which will program your printer to print those
         characters.  If you have an HP Laserjet II printer, or have the
         original Laserjet with the Y cartridge, then use the P routine to
         send the codes to change to IBM graphic characters.  If your printer
         can not print graphic characters, then change the numbers at the top
         of Options screen 2 as described in Tree section above.

     Q.  Why doesn't the sideways Tree report print work for me?

                             Brother's Keeper Ver. 4.5                 Page 33
     
     
     A.  The sideways report is designed to work on a printer that is
         compatible with IBM or Epson graphic printers.  If your printer
         prints something that does not look like sideways characters, then
         your printer is not compatible.  Do not worry about it, it is the
         same report as the regular Tree report so you are not missing much.
         Note: if you have a laser printer, this Sideways report is not the
         same as Landscape.  If you wish to print in Landscape mode, set your
         laser printer for Landscape and then run the Tree report as a regular
         (not sideways) printout.


     Q.  I got an error message saying "Device fault".  What does that mean?

     A.  Usually it means that your printer was not turned on or not
         connected.  If you do not have a printer attached, be sure to have
         output set to DISPLAY.  Even the Word search routine will try to print
         unless you change output.  Device fault could also mean a problem
         with your disk drive (if it happens when you are adding, modifying,
         or reading data).


     Q.  What does the error message "Bad record number . . ." mean?

     A.  If you get this error message it could mean you have a problem in
         your data files.  Each name in the file has several "pointers" which
         indicate which other people are related to him or her and which
         message lines and which locations are associated.  If these pointers
         get messed up, you have a problem.  Hopefully, you have a recent
         backup of your data files which you can use if necessary.  In any
         case, make a couple more backup copies of your *.DT4 files before
         trying to solve this problem.  This problem is usually caused by
         exiting the program improperly.  Never remove the data diskette until
         you choose S to stop the program.  Also, never turn off the computer
         while still in the program.  If your data files get messed up, run
         the Q routine in BROTHERU.  Then if necessary contact John Steed.
         Usually if you send me a diskette with a copy of the *.DT4 files and
         a description of the problem I can correct it for you.  One person
         received the "Bad record number" error message only when printing an
         alphabetical list.  I had him look at what was in the ALPHA2.DTA file
         (which is the file that contains the names after they are sorted).
         It was an error message from the sort program.  It said that he had
         the incorrect version of SORT.


     Q.  If I want to keep 2 or more sets of data files totally separated from
         each other, how do I do it?

     A.  To create another set of data files which will not interact with your
         existing files, you need to use a new diskette (if you use B: for
         your data drive) or create a new subdirectory (if you have a hard
         disk). If you use floppy disks, be sure to STOP the program before
         changing diskettes.  If you have a hard disk, you can go to the
         Options screen 1 and type a different path and then the program will
         change to the data files located in that subdirectory.  (The program
         will not create the subdirectory, you need to create it yourself with
         the DOS command MD.) You do not need to copy the programs to that
         subdirectory unless you want different configuration files (e.g.
                             Brother's Keeper Ver. 4.5                 Page 34
     
     
         different names for the fields or different default parameters).


     Q.  I still need help, what do I do next?

     A.  Well, if you decided to read the documentation you must be desperate!
         And if you have not found a solution to your problem after reading
         this far, you are probably frustrated also.  So, here is what you can
         do.  You can write to John Steed, 6907 Childsdale Rd., Rockford, MI
         49341 and describe the problem.  Indicate what size disks you use in
         case the solution includes receiving a program in return.  Also
         indicate what version you have (4.5) and any other pertinent
         information.  If you give me your phone number, I may be able to give
         you an answer by phone.  If you wish to contact me through CompuServe,
         the ID number is 75745,1371 .  I try to check for Electronic Mail
         every day.  If you want to call me, call information (area code 616)
         for my number.  I am usually available in the evenings between 8pm
         and 10pm Eastern time.  I do programming during that time, but I do
         not mind taking a few minutes to answer some questions.

                             Brother's Keeper Ver. 4.5                 Page 35
     
     
     APPENDIX N.  SHAREWARE

     BROTHER'S KEEPER is a Shareware product protected by Copyright.  It is
     NOT public domain or free software.  Shareware is a method of
     distributing software, whereby copies may be passed around and each user
     can determine whether or not the program is suitable for him or her.
     After you have tested this program for yourself, and if you find it to be
     useful for you, you are requested to send the registration fee to the
     author of the program, John Steed.  The author of the program is not paid
     any fee when you buy a disk from a user group or company selling
     Shareware.  The only way the author gets paid is when you register.  If
     you want to encourage programs of this type, please register.

     Registered users will be sent the next new version of the program and are
     entitled to use the program, and all future upgrades.  Registered users
     may also request other programs which relate to Brother's Keeper, such
     as BKBOX and BKGEDCOM and BKREPORT (see registration form at the end of
     this printout).  Some of these other programs are available from computer
     bulletin boards which carry genealogy programs.  Minor upgrades are made 
     frequently to the programs, so you may wish to check to see if a new
     feature that you desire has been added.

     If you share this program with others, please give them at least the
     following files:

     BK.EXE, BROTHERU.EXE, BROTHER.DOC, SORTIT.BAT, BIRTHDAY.BAT, SIDEWAYS.DTA
     and any other files and programs you may wish to share.

     Please do not include the FOPTIONS.DT4 file on the disks you share, since
     that file contains options for your disk drives, printer, and monitor and
     others may have difficulty using your setup.  That file will be created
     the first time someone uses the programs.



                               _______
                          ____|__     |               (tm)
                       --|       |    |-------------------
                         |   ____|__  |  Association of
                         |  |       |_|  Shareware
                         |__|   o   |    Professionals
                       -----|   |   |---------------------
                            |___|___|    MEMBER


     This program is produced by a member of the Association of Shareware
     Professionals (ASP).  ASP wants to make sure that the shareware
     principle works for you.  If you are unable to resolve a shareware-
     related problem with an ASP member by contacting the member directly,
     ASP may be able to help.  The ASP Ombudsman can help you resolve a
     dispute or problem with an ASP member, but does not provide technical
     support for members' products.  Please write to the ASP Ombudsman at
     P.O. Box 5786, Bellevue, WA 98006 or send a Compuserve message via
     easyplex to ASP Ombudsman 70007,3536


      Add a child  . . . . .    6       Location fields  . . .    4
      Adding names . . . . .    2       Look for person  . . .    9
      Ahnentafel report  . .   17       Lower case months  . .    3
      Alphabetical printout    15       Maximum number of names   1
      Alt keys (user defined)  27       Memory requirements. .    1
      Ancestor chart . . . .   13       Message lines/file . .    7
      Backup data files  .  7, 10       Modify information . .    8
      Bad record number  . .   33       Months - lower case  .    3
      Birthday printout  . .   15       Move forward/backward     2
      Bold print . . . . . .   11       Multiple data sets . .   33
      BROTHERU program . . .   28       Multiple printers  . .   28
      Browse . . . . . . . .    9       Names of fields  . . .    5
      Change name of fields     5       New features in program  23
      Change order of child     8       Numerical printout . .   15
      Change parents . . . .   19       Options  . . . . . . .   10
      Changes to program . .   23       Order of children  .  8, 19
      Check fields . . . . .    4       Order of spouses . . .    8
      Colors . . . . . . . .   10       Order to add people  .    5
      Compress print . . . .   11       Output routines  . . .   12
      CONFIG.SYS file  . . .   29       Output to disk file  .   12
      Converting data files    24       Output to screen . . .   12
      Correcting problems   2, 19       Path for data files  .   11
      Custom reports           30       Prepare disks  . . . .    1
      Data files location  .   11       Print routines . . . .   12
      Database programs  . .   26       Printer options  . . .   11
      Date format - change     28       Printer problems . . .   20
      Date types . . . . . .    3       Printer setup  . . . .   28
      Delete a character . .    2       Printer strings  . . .   11
      Delete a person  . . .    9       Problems - questions     31
      Delete as a child  . .    8       Program will not start   31
      Delete spouse  . . .  8, 19       Questions & answers  .   31
      Descendant report  . .   13       Re-use a code number .    9
      Descendant tree  . . .   14       Relationships  . . . .   21
      Device fault . . . . .   33       Restructure alpha file   12
      Ditto " key  . . . . .    4       Sample reports . . . .   22
      Down arrow . . . . . .    2       Search for word or date  17
      Drive for data files .   11       Searching by name (add)   5
      Edit text file . . . . 8, 9       Second marriage  . . .    5
      Equal = key  . . . . .    4       Setup disks. . . . . .    1
      Erase a field  . . . .    2       Shareware concept  . .   35
      Esc key  . . . . . . .    2       Short-cuts . . . . .  4, 27
      European dates . . . .    3       Sideways printing  . .   15
      Example - adding names    5       Size of files - maximum   1
      Family group sheets  .   13       Sort alphabetically  .   15
      Father unknown . . . .   32       Special effects on/off   11
      Field names  . . . . .    5       Start over, erase files  32
      File layout  . . . . .   26       Stop . . . . . . . . .   18
      Find relative of person   9       Suggestions              24
      Find word or date  . .   17       Technical information    25
      First person to add  .    5       Text editor  . . . . .    8
      Foreign characters . .    2       Text file  . . . . . .    7
      GEDCOM files . . . . .   24       Tiny Tafel file  . . .   28
      Group sheets . . . . .   13       Top of form - printer    12
      HP Laserjet printer  .   11       Tree printout  . . . .   14
      Insert a character . .    2       Up arrow . . . . . . .    2
      Install  . . . . . . .    1       Use of ? to find name     6
      Landscape printing . .   15       Utility program  . . .   28
      Last names . . . . . .   17       Word processor . . . .    9
      Linking people . . . .    2       Word search  . . . . .   17     

  To: John Steed                              Date _______________________
      6907 Childsdale Rd
      Rockford, MI  49341   U.S.A.

        I have version 4.5B of Brother's Keeper.  (6/90)
   __
  |__|  I would like to become a Registered user.  Enclosed is a check for  
        $40 (U.S. check or Canadian check in U.S. funds).  Please send me
        the current version and printed manual.  I am also interested in the 
        additional features described below.  ($40 covers all programs.)
   __
  |__|  I have data in version ________ of FAMILY or FAMILY3.  Please send
        the CONVERT4 program also.
   __  
  |__|  I have data in PAF or ROOTS III and would like to be able to import
        and export data using GEDCOM files.  Please send the BKGEDCOM program.
   __
  |__|  I have data in  ___Genealogy on Display   ___FHS   ___Linkages and 
        would like a program to transfer the data to Brother's Keeper.
   __
  |__|  I would like to have the programs which will merge two sets of 
        Brother's Keeper data files into one large set and which will copy 
        only part of my Brother's Keeper files into a smaller set.
   __
  |__|  Please send BKBOX which will print descendant box tree charts. 
   __
  |__|  Please send BKREPORT which will print descendant reports using the 
        register numbering system with index (print a book).
   __
  |__|  Please send info on genealogy computer bulletin boards.
   __
  |__|  I would like the program translated into the ______________ language.

        I am using the program on the following type of equipment.
 
        Computer brand __________________________________

        Amount of RAM memory     384     512      640     _________

        Hard disk?          Yes        No

        Diskette size       3 1/2      5 1/4

        Monitor             mono       color -  CGA     EGA     VGA

        Printer      __________________________

  Name / Address     ______________________________________________

                     ______________________________________________

                     ______________________________________ Country __________

                    
  Comments and suggestions:  _________________________________________________

  ____________________________________________________________________________
  use back side also

  (Thank you very much for responding.  John)

```
{% endraw %}

## FILE1504.TXT

{% raw %}
```
Disk No: 1504                                                           
Disk Title: Brother's Keeper 1 of 2 (also 1505)                         
PC-SIG Version: S2                                                      
                                                                        
Program Title: Brother's Keeper Genealogy                               
Author Version: 4.5B                                                    
Author Registration: $40.00                                             
Special Requirements: 512K RAM.  Two drives recommended.                
                                                                        
BROTHER'S KEEPER helps you keep track of all your brothers, sisters,    
aunts, uncles, and other relatives going back generations!              
                                                                        
In the hobby of genealogy, you never know just who or what you'll find  
once you start tracing your family tree!  BROTHER'S KEEPER allows you   
to gather and organize the tidbits of ancestral history you             
uncover and will print the information in a variety of helpful ways.    
Included are: ancestor charts, family group sheets, alphabetical name   
lists, descendant trees, birthday lists, custom reports, and ahnentafel 
charts.  (This is a chart which lists ancestors of a person, with       
standard code numbers that show relationships, such as parent, grand-   
parent, etc., instead of using lines to graphically indicate the        
relationships.)                                                         
                                                                        
Two disk drives, or a hard drive, are recommended, but the program will 
work with one disk drive.  You can record over 1000 names on a 360K     
disk, or 15000 with a hard drive.  For each person entered, you may     
include date of birth, date of death, and three other significant dates 
of your choosing. In addition, you may  store place of birth, place of  
death, and three other places of important events.  You also may enter  
two additional fields, which you define.  Each person can have up to    
seven message lines of additional data, or a text file of unlimited size
containing additional data that is linked to his record.                
                                                                        
Up to eight marriages may be recorded for each of your more fickle      
forebears.  Each record can hold a marriage date, a place of marriage,  
one additional date and place, and can store up to 24 children -- very  
useful if you are related to the Waltons!                               
                                                                        
The GEDCOM file transfer standard is used so that data can be shared    
with other genealogists and amateur family tree-ers who use different   
programs.  This is one of the most intriguing aspects of genealogy --   
the joining together of your research and family tree with others. You  
suddenly gain both entire blocks of ancestral data, as well as potential
busloads of distant relatives you never knew you were related to coming 
to visit you!                                                           
                                                                        
A wide variety of printers are supported, including laser.              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
  To: John Steed                              Date _______________________
      6907 Childsdale Rd
      Rockford, MI  49341   U.S.A.

        I have version 4.5B of Brother's Keeper.  (6/90)
   __
  |__|  I would like to become a Registered user.  Enclosed is a check for  
        $40 (U.S. check or Canadian check in U.S. funds).  Please send me
        the current version and printed manual.  I am also interested in the 
        additional features described below.  ($40 covers all programs.)
   __
  |__|  I have data in version ________ of FAMILY or FAMILY3.  Please send
        the CONVERT4 program also.
   __  
  |__|  I have data in PAF or ROOTS III and would like to be able to import
        and export data using GEDCOM files.  Please send the BKGEDCOM program.
   __
  |__|  I have data in  ___Genealogy on Display   ___FHS   ___Linkages and 
        would like a program to transfer the data to Brother's Keeper.
   __
  |__|  I would like to have the programs which will merge two sets of 
        Brother's Keeper data files into one large set and which will copy 
        only part of my Brother's Keeper files into a smaller set.
   __
  |__|  Please send BKBOX which will print descendant box tree charts. 
   __
  |__|  Please send BKREPORT which will print descendant reports using the 
        register numbering system with index (print a book).
   __
  |__|  Please send info on genealogy computer bulletin boards.
   __
  |__|  I would like the program translated into the ______________ language.

        I am using the program on the following type of equipment.
 
        Computer brand __________________________________

        Amount of RAM memory     384     512      640     _________

        Hard disk?          Yes        No

        Diskette size       3 1/2      5 1/4

        Monitor             mono       color -  CGA     EGA     VGA

        Printer      __________________________

  Name / Address     ______________________________________________

                     ______________________________________________

                     ______________________________________ Country __________

                    
  Comments and suggestions:  _________________________________________________

  ____________________________________________________________________________
  use back side also

  (Thank you very much for responding.  John)


```
{% endraw %}

## SORTF.DOC

{% raw %}
```









				 SORTF Command

			  Version 2.32 - Feb 18, 1989





				     Index
				     -----


		 Purpose  ................................... 1
		  Format  ................................... 1
		  Remarks  ...................................1

		 Options summary  ........................... 2
		 Invoking from Quick Basic................... 2

		 Examples  .................................. 3

		 Version history  ........................... 4

		 Usage restrictions  ........................ 5



















	  Copyright (c) Vernon D. Buerg 1985-89. ALL RIGHTS RESERVED.



SORTF Command						  Version 2.32	Page 1
-------------						  Feb 18, 1989


Purpose:   The SORTF command reads record data from a file,  sorts the
	   records, and writes the data to another file.

Format:
	   SORTF [d:][path]fname[.ext] [d:][path]fname[.ext]
		 [/+nnn[,len]] -or- [/-nnn,[len]]
		 [/Lnnn]
		 [/R] [/C] [/Q]
|		 [/K] or [/X]

Remarks:   Records are read from the input file,  sorted,  and written
	   to the output file.

	   Two types of records may be sorted:

	   1)  logical	records.   Each  record  ends  with a carriage
	       return and line feed, and  may be up to 1024 characters
	       in length.

	   2)  fixed length  records.  Each record  is of length  L as
	       defined	by  the  '/Lnnn'  parameter.   The records may
	       contain any  kind of  data, including  carriage return,
	       line feed, and end-of-file without effecting the record
	       length. The maximum record is 1024 bytes.


	   The sort  order is  in ascending  ASCII character sequence.
	   You may supply the /R  parameter to reverse the sort  order
	   for all fields, or supply /- parameters for each key  field
	   to  be  sorted  in  reverse	order.	 The  key  fields  are
	   processed from  left to  right as  supplied in  the command
	   line.

	   The /C option may be added to cause SORTF to treat the  key
	   fields  as  case  insensitive  data.   That	is, lower case
	   letters in the key field are treated as upper case letters.

	   You may  supply up  to sixteen  key offsets	and lengths by
	   using the /+ or /- parameter, one for each key position and
	   its length.	 If /+	and /-	are omitted,  the key is taken
	   from the first character position for a length of 11.

	   The position 'nnn' may be a value from one to 255.

	   The key length 'len' may be  a value from 1 to 99.   The /+
	   operand  specifies  that  the  specified  key  is sorted in
	   ascending order.  The /- specifies desending sort order for
	   that key.

	   Use the /Q option to suppress the display of  informational
	   messages.  Error messages can not be suppressed.


SORTF Command						  Version 2.32	Page 2
-------------						  Feb 18, 1989

			Options Summary
			---------------


	   /C  specifies  that	the  keys  are	case  insensitive;  if
	       supplied, all lower case  characters in the key	fields
	       are  converted  to  upper  case	for  the  purposes  of
	       sorting.

	   /R  sort in	reverse order;	over-rides any	/- options and
	       treats them all as /+ options.

	   /Q  suppress informational messages.


	   /K  creates an output file that consists of sorted key data
	       which includes a 5-byte information prefix.

|	   /X  like /K, except that the 5-byte information prefix is
|	       omitted, and a cr/lf (carriage return and line feed)
|	       is added to each record.


	   /L  specifies the sorting of fixed length records

	   /+  defines the location  and length of  a key field  to be
	       sorted in ascending order

	   /-  defines the location  and length of  a key field  to be
	       sorted in descending order




			Invoking from Quick Basic
			-------------------------

	To invoke SORTF from a Quick Basic program, you can use either
	the SHELL or CALL statements.  Use of SHELL is straightforward.
	Use of CALL requires that you include SORTF.OBJ when you LINK
	your QB program, and that you use the /CP LINK option to ensure
	that memory is available for SORTF. For example:

	in the QB program : CALL SORTF ("test.fil new.fil /+1,12")
		     -or-   SHELL "sortf test.fil new.fil /+1,12"

	for CALL:	    LINK qbprogram + SORTF /CP:5000;

	The /CP:5000 option will limit the QB program to 80K plus the
	size of its code, data and stack. Whatever is left can be used
	by CALLed programs. That amount will be about 120K less than
	the DOS available memory.






SORTF Command						  Version 2.32	Page 3
-------------						  Feb 18, 1989

			Examples
			--------

	 o  to	sort  a  file  in  descending order with the keys in
	   position 10:

		SORTF TEST.DAT TEST.SRT /R/+10

	 o  to sort the same file using keys with 24 characters:

		SORTF TEST.DAT TEST.SRT /R/+10,24

	 o  to sort a file of fixed length, binary records; the input
	   file contains records of 18 bytes each,  the  key is  two
	   bytes  at  position	17  in	each  record  in  descending
	   order, and 11 bytes at postion 1 in ascending order:

		SORTF SRTCATS.RND SRTCATS.IND /L18 /-17,2 /+1,12

	 o  to sort on different keys, but creating an an output file
	   with the keys only:

		SORTF TEST.DAT TEST.KEYS /-10,2 /+20,4 /-16,3 /K

	   Note the use of /-.	It specifies that the first and  third
	   keys  are  sorted  in  descending  order, the second key is
	   sorted in ascending order.

	   The format of the keys-only file using /K is:

	   Offset  Length   Contents
	   ------  ------   ------------------------------------------
	     0	     2	    Length of data record excluding CR and LF
	     2	     3	    Offset to record in input file
			     +0  hi-byte of 3-byte address offset
			     +1  low word of address offset
	     5	     n	    Variable key data, depends on key definitions

|	   The format of the keys-only file using /X is:
|
|	   Offset  Length   Contents
|	   ------  ------   ------------------------------------------
|	     0	     n	    Variable key data, depends on key definitions
|	     n	     2	    Carriage return and line feed

	   In the example above, the variable key data format is:

	     5	     2	    Data in records at offset 10
	     7	     4	    Data in records at offset 20
	    11	     3	    Data in records at offset 16
	    14	     0	    End of key record.

	   The length of  each keys-only record  is 5 plus  the sum of
	   the individual key lengths.	The default, if no /+ or /- is
	   specified, is 16 bytes each.


SORTF Command						  Version 2.32	Page 4
-------------						  Feb 18, 1989

			Version History
			---------------

 2.0, July 11, 1985.  Corrects CR/LF problem.

 2.1, August 3, 1985. Corrects a problem sorting files larger than 64K.

 2.15, Dec 27, 1985.  Corrects problems with first record of file.
		      Adds /C option to treat keys as case insensitive data
		      The key length may be specified on the command line

 2.17, Feb 25, 1987.  Correct problem when maximum records exceeded
		      Convert to COM program

 2.20, June 28, 1987. Add /Q option to suppress informational messages
		      Change to allow up to 16 key field specifications

 2.23, Aug 6, 1987.   Add "-" option to sort individual fields in reverse order
		      Add /K option to produce output file with keys only

 2.24, Sep 15, 1987.  Add /Lnnn option for sorting fixed length records

 2.25, Sep 19, 1987.  Correction for /L dropping last char of file and fouling
		      records.

 2.26, Dec 16, 1987.  Cosmetic changes

 2.27, Feb 1, 1988.   Fix divide overflow on large files; terminate with
		      message "Maximum records exceeded"

 2.29, March 5, 1988. Release gotten memory
		      Add SORTF entry point for CALL from Quick Basic

 2.30, May 23, 1988.  Change maximum record size from 255 to 1023
		      Change default key length from 12 to 11

|2.31, Feb 16, 1989.  Add /X option like /K to write file with keys only,
|		      and a cr/lf at the end of each record.

|2.32, Feb 18, 1989.  Correct problem LINKing with QB 4.5


SORTF Command						  Version 2.32	Page 5
-------------						  Feb 18, 1989

			Restrictions
			------------

	   Depending on the amount of  memory available,  up to  40000
	   records may be sorted.  The maximum file  size that	can be
	   sorted depends  on the  maximum number  of records  and the
	   average record  length.  For  example,  the	file  size  is
	   limited to 3.2 mb for a file consisting of 80-byte records.


	   The advantages of using  SORTF  instead of the SORT filter:
		- files larger than 63K may be sorted
		- less time is required
		- sort order can be based on up to 16 fields
		- fixed length files can be sorted

	   For	best  results,	place the  input file  on the  fastest
	   available drive, e.g. RAM disk.



	   Written by  Vernon Buerg  for the  IBM PC  using DOS 2.0 or
	   later.  You may distribute SORTF given these restrictions:

	   o  the program shall be supplied in its original, unmodified
	      form, which includes this documentation;

	   o  no fee is charged;

	   o  for-profit use without a license is prohibited;

	   o  the program may not  be included, or bundled, with  other
	      goods  or  services.   Exceptions  may  be  granted  upon
	      written  request	only. This  also applies to  clubs  and
	      distributors.


	   For use by corporations and other institutions, contact  me
	   for a licensing agreement.

	   If you find SORTF useful, your gift of $15,	or any amount,
	   would be greatly appreciated.


		Vernon D. Buerg
		139 White Oak Circle
		Petaluma, CA  94952

		Data: (707) 778-8944, 24-hour BBS
		CompuServe: 70007,1212



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1504

     Volume in drive A has no label
     Directory of A:\

    START    BAT      1269   5-25-90  11:39p
    BK       EXE    153892   6-12-90   9:37p
    SIDEWAYS DTA      1628   1-01-90  10:47a
    BROTHER  DOC    119274   6-14-90   8:24p
    REGISTER DOC      2465   6-14-90   8:11p
    SORTIT   BAT       362   1-04-90   9:40p
    BIRTHDAY BAT        42   1-17-90   6:44p
    SORTF    COM      3175   2-18-89   2:32a
    SORTF    DOC      9878   2-18-89   2:32a
    FILE1504 TXT      3923   8-30-90  12:22p
    GO       BAT        38   7-14-89   8:01a
    GO       TXT       883   1-01-80   4:47a
    GO       BAK       848   1-01-80   4:37a
           13 file(s)     297677 bytes
                           17408 bytes free
