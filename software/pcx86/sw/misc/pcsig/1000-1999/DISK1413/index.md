---
layout: page
title: "PC-SIG Diskette Library (Disk #1413)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1413/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1413"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "RECORDS & TAPES DATABASE"

    RECORDS & TAPES organizes and catalogs all your records and tapes.
    
    Ideal for anyone with large collections, this database can store up to
    400 albums on a single disk and up to 32,000 on a hard disk.  It lets
    you search for a particular album or cut by title, artist, music style,
    or other categories of your choice, and print lists of your entire
    collection sorted alphabetically or by category.  It can even print
    individual "library cards" for each album, designed to fit in a
    rolodex file.
    
    You can display the database in several modes, two of which are hide and
    dim.  In the hide mode, only those records meeting the search criteria
    are displayed.  In the dim mode, the selected records are shown on the
    screen in bright characters, while all others appear in dim characters.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1413.TXT

{% raw %}
```
Disk No: 1413
Program Title:  RECORDS & TAPES version 1.00
PC-SIG version 1

RECORDS & TAPES will organize and catalog all your records and tapes.

Ideal for anyone with large collections, this database can store up to
400 albums on a single diskette or up to 32,000 on a hard disk.  It
allows you to search for a particular album or cut by title, artist,
music style, or other categories of your choice, and print out lists of
your entire collection sorted alphabetically or by categories.  It can
even print individual "library cards" for each album designed to fit in
a rolodex file.

The database can be displayed in one of several modes, either HIDE or
DIM.  In the Hide mode, only those records meeting the search criteria
are displayed.  In the Dim mode, the selected records are shown on the
screen in bright characters, while all others appear in dim characters.

Synopsis:  Organizes and catalogs your records and tapes.

Usage:  Records and Tapes Collection/Database/Cataloging.

Special Requirements:  Printer.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

SETUP    COM  Executable file to specify system environment.
START    COM  Executable file to initialize database and start program.
RNT      COM  Executable file RECORDS & TAPES program.
RNT      000  Program overlay files.
RNT      001  Program overlay files.
RNT      002  Program overlay files.
SETUP    COL  System environment SETUP file.
SETUP    COM  System environment SETUP file.
SETUP    DAT  System environment SETUP data file.
ALBUMS   REC  RECORDS & TAPES database file.
SONGS    REC  RECORDS & TAPES database file.
ARTIST   LST  RECORDS & TAPES database file.
LABEL    LST  RECORDS & TAPES database file.
SORT     LST  RECORDS & TAPES database file.
README   DOC  Instructions for using RECORDS & TAPES.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  Disk No 1413 RECORDS & TAPES DATABASE  >>>>             ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type RNT (press enter)                            ║
║                                                                         ║
║ To look at the documentation on your screen, type VIEW (press enter)    ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```


Sat. Jul. 09, 1988 16:12   File: TITLE.DOC
Page: 1                RECORDS & TAPES DATABASE

          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
                            ************************
                            ************************
          
                            RECORDS & TAPES DATABASE
          
                            ************************
                            ************************
          
           
          
          
          
                               USER DOCUMENTATION
          
          
                                  July 9, 1988
          
          
          
          
          
          
          
          
          
          
          
          
                 Christopher J. Noyes
                 191 Dean Street
                 Brooklyn, NY 11217
                 (718) 625-2262
          
                 (C) 1987 by Christopher J. Noyes
          
          






Sat. Jul. 09, 1988 16:12   File: LICENSE.DOC
Page: 2      USER'S LICENSE AND USER SUPPORT INFORMATION

          
                                       191 Dean Street
                                       Brooklyn, NY 11217
                                       July 8, 1988
          
          Dear User;
          
              This Program and the accompanying files are Shareware.
          If you like it and find it useful, register it and pay
          me $25. This will get you user support and the next version
          which I come out with free. If you find it useful, please
          register it, it is the only way that software developers
          like myself can keep going. We need new software, supplies
          and keep our computers up-to-date, and that takes money.
          If you don't register it you won't get more than minimal
          support if you have problems.
              You may, and please feel free to copy this ARC file 
          as much as you want. Copy it for your friends, put it on
          your favorite BBS.
              To register you can find a registration form in the
          back of this manual.
              I am interested in hearing your feedback. If you have
          any questions or comments, or have any problems with this
          software, you can reach me at (718) 625-2262. Currently 
          you can reach me at this number until 1:00 pm or after
          9:30 pm or thereabouts on weekdays, or almost anytime
          both weekends and holidays. If I am not there, leave a 
          message on the machine and I will return your call as 
          soon as I can. You can also write me at the above address.
          I can also be reached on the following NYC area BBS's:    
          Moondogs, PSCI, Northern Valley Systems, & Csig.
              This software is (C) 1987 by Christopher J. Noyes.
          
                                       Thanks,
          
                                       Christopher J. Noyes
          
          
          























Sat. Jul. 09, 1988 16:12   File: ABOUTRNT.DOC
Page: 3           ABOUT THE RECORDS & TAPES DATABASE

          
          
                            ABOUT RECORDS & TAPES:
          
              "Records & Tapes" is a powerful data-base system 
          for cataloging records and tapes. This program is ideal 
          for the record and tape collector that has many records 
          and loses track of their collection. This program is 
          capable of giving information on an individual record or 
          if desired on the individual songs on each record. The 
          system is capable of handling up to 400 records with up 
          to 1200 song entries on a single diskette system, or up 
          to 1000 records with 6000 songs on a dual diskette 
          system with 256k memory, and up to 2000 records with up 
          to 7000 songs on a dual diskette system with 640k memory.
          On a system with 640k memory and a hard disk, the system
          can manage up to 5500 records with up to 32000 song 
          entries. This is only an estimate.
              The program is easy to use and requires no knowledge 
          of data-base programming or management, and is simple 
          enough to be used by a child.
              Records & Tapes provides capabilities for sorting 
          records by up to 5 fields for display or printing.
          Also provided is a complete easy to use search function
          that allows for display or printing of only the records 
          you wish to look at, a boon for a person with a large 
          collection. Information entrered for search can also be 
          saved to disk for future use and recalled at any time.
              Records & Tapes provides several easy-to-use means 
          of accessing data in it's data-base system. When New
          entries or changes are made to the system, the program
          keeps track of all changed records and any one of up 
          to 16 can be accessed without going through the whole
          data-base. Entries that have already been entered into
          the system can be accessed through a screen that allows
          access to all of the data in the system. The program
          contains a means of searching for a record title in the
          system, while selecting a record, which can find any and
          all matches of any, (up to 20 characters) entries.
              Records & Tapes provides capabilities to print out 
          listings of either the whole data base or any selected 
          part of it. The system provides several different 
          printout formats including rolodex cards. Any of the 
          printouts can be sorted by any of up to 5 different 
          fields.
              The program will work with any IBM-PC, XT, or AT 
          or compatible with 256k memory or more, and at least one 
          floppy disk drive. The system supports hard disk drives, 
          and the user can set it up to use any subdirectory that 
          the user wishes. The system can be setup to support most 
          printers, either CGA (color monitor in text mode), MDA 
          (monochrome monitor), or EGA (enhanced Color monitor in 
          text mode) type displays. The program provides a fast 
          direct video for true IBM-compatibles and a more 
          compatible video routine for other systems.
          
          






Sat. Jul. 09, 1988 16:12   File: STARTRNT.DOC
Page: 4              SETTING UP AND STARTING RNT

          
          
                         SETTING UP RECORDS & TAPES:
          
              This supplied with an easy to use program Called
          SETUP. It is menu driven and provides specific help.
              To Start it enter SETUP<ENTER>. From there you
          you can select your topic you wish to customize  
          entering the number of your choice and pressing
          <ENTER>. You can press the <F1> key for help at
          almost any time. When you are finished customizing
          your setup save the file to disk using that option
          and quit. Your setup will now be ready for when you
          want to use RNT. SETUP also allows you to select the
          proper video driver as noted below in "Starting 
          Records & Tapes:".
              You can also change the setup by editing a file 
          called SETUP.DAT, which you can find on the disk. This 
          is the data that corresponds to each line of this file:
          
                Line       Data
                 1.        Next Album Record Number
                 2.        Next Song Record Number
                 3.        Y or N for IBM Compatible Video
                 4.        Text Color         
                 5.        Backgrounnd Color   
                 6.        Bright Color       
                 7.        Enhanced Color     
                 8.        Error Color        
                 9.        Main Drive and Directory
                 10.       Data Drive and Directory
                 11.       Printer Command for Bold
                 12.       Printer Command for Cancel Bold
                 13.       Printer Setup String for Reports
                 14.       Lines per Page for Report
                 15.       Rolodex Printer String
                 16.       Default Sort Field for Startup
          
              This file can be edited with standard ascii text 
          editor. Note that the printer strings have commands which
          use control characters and the escape character (#27).
          Note that the printer strings are setup for the IBM
          printer or equivalent. These will work with most 
          printers that emulate the IBM printers such as the
          Epson printers.
              If you are using a color monitor (either CGA or EGA)
          you should use the color setup file SETUP.COL. To use
          that file do the following. Rename the SETUP.DAT file
          SETUP.BAK, and rename the SETUP.COL file SETUP.DAT.
          If you are new or uncomfortable with dos do the following.
          On the command line type RENAME SETUP.DAT SETUP.BAK<RET>.
          Then type RENAME SETUP.COL SETUP.DAT<RET>.
          
           
                            PREPARING FOR STARTUP:
          
              Before using RNT you should backup your disk.






Sat. Jul. 09, 1988 16:12   File: STARTRNT.DOC
Page: 5              SETTING UP AND STARTING RNT

          copy the files starting with RNT.* and the file
          setup.dat to a directory or drive for the programs.
          This is known as the "Main Drive". This is the drive
          or directory that you will start RNT from. Copy the 
          files *.REC, and files *.LST to a directory or 
          drive for the data itself. This will be known as 
          the "Data Drive". Note that these two drives or 
          directories can be the same but can also be different 
          if you want it that way.
              RNT is supplied with a startup program START.COM.
          START has two uses. First when you are still playing
          with the supplied database, start plugs in the correct
          directory and disk data into the SETUP.DAT file which
          must be in the current directory when RNT is started.
          Its other use is to create initialized datafiles
          for starting your own database. These will be created
          in the directory that you designate as the "Data Drive".
              To use START, Just enter START on the command line.
          Note that the file SETUP.DAT must be in the current
          directory. First you will be asked for the Main Drive
          and directory. Enter the correct drive and path and 
          press return. Then you will be prompted for the
          Data Drive and directory. Enter the correct drive and
          path and press return. You will then be asked if you
          want to initialize data files. If you want to play 
          with the existing database that I have supplied so you
          can learn the capabilities of RNT answer N and press
          the return. If you are now comfortable with RNT and 
          are ready to create your own database, enter Y and
          press the return. Start will then either then create
          the data files and write a new setup file, or just
          write a new setup file.
          
          
                          STARTING RECORDS & TAPES:
          
              Records & Tapes is started by typing RNT on the 
          command line at the dos prompt. Note that the programs
          and the file SETUP.DAT must be in the current directory.
          The files ALBUMS.REC and SONGS.REC and files LABEL.LST,
          ARTIST.LST, and the file SORT.LST can be in a second
          directory, as referred to as the "data drive and
          directory".
              There are several options that can be used by 
          entering codes on the command line when you type RNT.
              Note that most of these functions can be selected
          from within the program.
              If your computer does not use a standard IBM MDA, 
          Hercules, CGA, or EGA graphic adapter, enter V=N on the 
          command Line. This need only be entered the first time 
          you use Records & Tapes. If you change video adapters 
          you can change that setting by typing V=Y, so you can 
          use the direct video option. The V=Y option is used by 
          the program unless you tell it otherwise is much faster
          than the screen printing routines otherwise provided.
          If the computer's current video mode is not compatible 
          with Records & Tapes own video driver then Records & 






Sat. Jul. 09, 1988 16:12   File: STARTRNT.DOC
Page: 6              SETTING UP AND STARTING RNT

          Tapes will default to V=N.
              You can also select the Field that the screen will
          be sorted in when the program starts up. The program
          sorts the data on the Name of the album unless you tell 
          it otherwise. Note that you can change this setting from
          inside the program, and this will be saved when the 
          program ends. To change the Sort field enter S=2 to sort
          based on the composer, S=3 for the artist S=4 for the 
          recording company, and S=5 for the type of music. This 
          data that you start the program with will also be saved 
          when the program ends.
              When you use the full search function, unless you 
          change this, only selected records will be shown on the
          screen. You can change this so that all records on file 
          will be shown, and the selected records will be 
          highlighted on the screen in bright color. To Use this 
          option, Type DIM following the program name or after the 
          other options. The program always starts up in HIDE
          mode, which only shows selected records. This option can 
          also be changed from inside the program from the utility 
          function menu.
          
          
                    BASIC INFORMATION ON RECORDS & TAPES:
          
              When you are using Records & Tapes, there are 
          several things and information that will apply 
          throughout the program. You can get help in many 
          functions by pressing the F1 key. The program will 
          prompt you to press any key to continue, so you 
          can see the rest of the information on that topic
          and return to the program. You can press the ESC key 
          at any time to escape or back out of from any function.
              You should only end the program by using the quit 
          function, unless the program locks up (which should not
          happen), or all the new entries will not be saved, and 
          the record selecting functions will not reflect what is
          on the disk.
          
                  






















Sat. Jul. 09, 1988 16:12   File: EDITING.DOC
Page: 7       ENTERING, EDITING AND ACCESSING INFORATION

          
                               EDITING SCREENS:
          
              Records & Tapes operates with several input/edit 
          screens which are easy to use. You can use the cursor 
          keys (left, right, end, and home) to move the cursor.
          If you exceed the width of that field, the program will 
          beep, and not allow you to go any further. You can 
          enter characters, (note that they will always be in 
          caps, no matter how you enter them. You can also delete
          characters with the backspace key and the delete key.
          If you need to insert characters, press the insert
          key. Note that INSERT is displayed at the bottom right 
          of the screen and you can insert text wherever you wish,
          any excess will be trimmed off the right. If you press 
          the insert key again the INSERT display is erased from 
          the screen. You can move from one field to the next one 
          by pressing the tab key or the return or enter key.
          You can move to the previous field by pressing the tab 
          key while holding down the shift key. If you are editing 
          entries and wish to skip to the bottom of the screen 
          press the F2 key.
              When you are entering information, take care to be 
          consistant. When you enter an artist, label, or composer,
          these are stored in a list. Each time you use that 
          person again, the program will use just the number of 
          that person in its datafiles, and the names will be 
          saved only once, saving space and increasing efficiency.
          Note that the entries HARRISON, GEO., G. HARRISON, an
          GEORGE HARRISON are probably the same person, but will 
          result in three names being saved in the list, and not 
          one, reducing operating efficency and will make it 
          harder to locate and sort all of george harrison's work 
          together into one group. If only one person is being 
          considered, it is a minor problem, but as your database 
          grows, it will become a bigger problem. The report 
          printing function has a function where it can print you 
          lists of how information is saved in its system for 
          reference.
          
          
                       USING THE INPUT MODE (CHOICE 1):
          
              The input mode allows you to input new information 
          into the database. This function allows you to enter 
          many different types of information. If you do not know 
          an answer and do not find that field useful, either 
          enter (NO or NONE) or skip it entirely. If you skip 
          a field, you will find that it has been filled with 
          a single `*' mark. Do not delete that mark, unless you 
          wish to enter an entry, as it will be replaced with 
          another `*' mark. Once you get to the bottom of the 
          screen, you will be asked how you want to proceed.
          You can edit this entry, or you can enter the specific 
          songs on this album or tape. You can also choose to go 
          to the menu. Note that if you use the ESC key at this 
          time, that your information will not be stored. If you 






Sat. Jul. 09, 1988 16:12   File: EDITING.DOC
Page: 8       ENTERING, EDITING AND ACCESSING INFORATION

          enter G, the information will be saved for future use,
          and you will return to the menu.
              If You enter E, you will go to the top of the screen 
          so you can make changes. If you entered S, the screen 
          will clear and a new screen will be displayed. This 
          screen allows you to input specific information about 
          each song on the album. The display at the bottom allows 
          you to see all the songs currently on that album, and 
          you can select from those to edit. You can use the same 
          keys as you used before, plus an additional one. You can 
          use the F3 key to copy information from the Album 
          information that you entered previously. Suppose that 
          you are entering an album where all the songs were 
          written by one person or group and were all performed by 
          one person and group, you can enter all that information 
          on the song entry by pressing the F3 key in each field.
              When you get to the bottom of that screen, you can 
          select to edit that song, enter more songs, and if this 
          is not the first song that you have entered, edit songs 
          that are already entered. To enter more just enter M, 
          and the process will start over. Note that the song that 
          you just entered was displayed at the bottom of the 
          screen. To Edit your current song enter E. To edit other 
          songs that you have entered, press O. If you entered E, 
          you will go to the top of that screen to edit. If you 
          entered O, the cursor will go to the first song display 
          line. Use the cursor key to select the song you wish to 
          edit. When you get to the bottom of the screen, keep 
          pressing the cursor down and songs will keep scrolling 
          down. To select any song press the return or enter key.
              When you reach the bottom of the song display, you 
          can return to the menu. if you use the G option, the 
          songs will be saved to disk, just as you left them. If 
          you use the ESC key they will not be saved to disk.
          If you use the ESC key in the song screen you will 
          return to the album screen, if you use the G option, the 
          album will be saved, but the songs won't. If you use the
          G option from the song screen, the songs will be saved.
          You can switch back and forth freely between the song 
          and album screens.
          
          
          
                  USING THE NEW ALBUM EDIT MODE (CHOICE 2):
          
              When you input or edit an album, each album and 
          songs are saved in memory. Note that they are written to 
          the disk when you press the G key in the input and edit 
          modes. Records & Tapes saves 16 albums in memory, from 
          the last startup. If you do more than 16 albums, it will 
          start over and use the reuse the oldest slot. You will 
          see a display of the albums stored in memory. Use the 
          cursor keys (up and down) to select an album. When you 
          have found the appropriate album, press the return or 
          enter key.
               You will then see the input screen. This time 
          it says ``EDIT NEW RECORD FUNCTION''. You can use the 






Sat. Jul. 09, 1988 16:12   File: EDITING.DOC
Page: 9       ENTERING, EDITING AND ACCESSING INFORATION

          screen to make changes to albums that you have just 
          entered. This operates like in the first mode. At the 
          bottom of the screen, you will see the prompt, this time 
          only a little different. If you have entered songs on 
          that album, you will be asked if you wish to edit songs. 
          If you did not enter any songs you will be asked again 
          if you wish to enter songs. This operates a lot like it 
          did before with one exception. When you get to the song 
          screen, you will be asked to select a song. If you wish 
          to enter a song, you will need to find the next open 
          slot and select that slot by pressing the return key.
          Remember that if you use the ESC key to get out, your 
          results will not be saved. Note that if you use the 
          G option on either menu, all information will be saved.
          
          
                  USING THE EXISTING ALBUM MODE (CHOICE 3):
          
              This mode allows you to edit any album that is 
          stored on the disk. You will see a listing of all the 
          records that are on the disk. If a search has been 
          executed previously, you will only see the information 
          that was valid for that search. You can use the cursor 
          keys to scroll through the information. You can also use 
          the page up and page down keys to scroll through a page 
          at a time.
              If you have changed the sort field from its default 
          of the album title, and you have added or edited 
          information, or if you have just changed the sort field, 
          you will see a prompt on the screen asking you if you 
          wish to sort. If you choose not to do the sort, several 
          things will be true. One if you have changed the sort, 
          the list will not be resorted till you answer yes to 
          this question. Two, you will not have access to the 
          information that you have just entered or edited.
          If you answer Y, there will be a slight delay and the 
          list will be sorted into proper order.
              If you have a lot of information stored in the
          system, you can scan through it with the scan function.
          Press the F5 key. You will be asked for the text to 
          search for. Enter part or all of the album name that 
          you wish to search for, and the cursor will stop at the
          titles that match your input. If you enter just two 
          letters, you will be able to find all the ones that have 
          those two letters as the first letters in the name. This 
          function only looks for the leftmost characters in the 
          names and continues when a non-match situation is found 
          and stops when the length of the input line has been 
          exhausted and a match is found. Once you have found the 
          first match, you can find others by pressing the F6 key. 
               You have by now noticed the two letters at the 
          bottom right of the screen. Those give the direction 
          that the search is done in. It will normally say DN for 
          down. You can change that by pressing the F4 key. A new 
          direction will printed when you press that key. You can 
          now scan up the listing when you reach the bottom. Press 
          the return key when you have found the record of interest






Sat. Jul. 09, 1988 16:12   File: EDITING.DOC
Page: 10        ENTERING, EDITING AND ACCESSING INFORATION

          and it will be displayed ready to edit.
              The editing function of this section functions 
          exactly like the previous one.
          
          
                       VIEWING THE DATABASE (CHOICE 4):
          
              This function operates much like the previous one, 
          with one exception. With this mode, you cannot make any 
          changes to information, and second, you don't have to 
          move through the fields with the return or tab key.
              With this mode, you select the record you wish as 
          displayed before, and it is shown in the input screen, 
          at this point, you will see a message at the bottom of 
          the screen. If you wish to see the songs press S, and 
          you will proceed, if there are no songs you will not 
          proceed. The song screen operates much like before, as 
          far as selecting records.
          











































Sat. Jul. 09, 1988 16:12   File: SEARCH.DOC
Page: 11                 SEARCHING FOR INFORMATION

          
          
                        SEARCHING DATABASE (CHOICE 5):
          
              Records & Tapes has complete search capabilities. 
          Records & Tapes has the capability to search for data 
          in six different fields. The program has full boolean 
          search functions. You can search for data that is equal 
          to, not equal to, less than, more than, less than or 
          equal to, or more than and equal to whatever data you 
          wish to enter. You can create compound search parameters 
          by combining different search parameters with boolean OR 
          and AND operators. You can also use one level of paren-
          theses to force proper evaluation. Records & Tapes also 
          has the capability to save to disk, and load from disk 
          search parameters that you use frequently.
              When you enter the search function, you will be 
          asked if you want to clear the search fields. Records & 
          Tapes allocates one byte per album for a search field. 
          This field is used to determine whether to print out the 
          album on the screen or to the printer. The search 
          function marks these fields when it searches for data.
          This field allows you to see only selected albums or 
          highlight those albums. When the program starts, these 
          fields are set so all albums are shown. If you had 
          earlier done a search and had wanted to do another 
          unrelated search, you would answer Y. If you had done
          an earlier search and wanted to narrow the results a 
          little, or you were just starting, you would answer N, 
          and the search function would combine the results of the 
          search with the search fields.
              The first field that you see is the first or open
          parenthesis field. If you don't wish to use the paren-
          theses, just hit the tab or return key, and they will be 
          ignored. If you wish to use them enter `('. If the paren-
          theses are shown in dim, or blank, they are not active. 
          If they are shown bright, they are active.
              Next you would enter the field number that you wish 
          to use. Then you would enter the operator you wish to 
          use. You can use < for less, > for more, = for equal, <> 
          for not equal, <= or =< for less or equal, and >= or => 
          for more or equal. Now the data field is resized to fit
          the width of the appropriate data. You then enter the 
          data and continue. Next you see the closing parenthesis.
          Continue as you had earlier with the open parenthesis, 
          only in this case use `)' if you want the data to be in 
          parentheses (see further for how to use parentheses). 
          Now you will have to enter a connector. If you are 
          entering only one search parameter, you should enter 
          END, otheriwse you will get an error saying NO END 
          FOUND!! If you wish to combine several different search 
          parameters enter either OR or AND. If you use OR, the 
          album will be shown if the first OR the second search 
          field are true. If you use AND, the album will be shown 
          if the first AND the second search fields are true.
              Now if you wish to edit that search, enter E, and 
          you will go back to the start again. If you wish to 






Sat. Jul. 09, 1988 16:12   File: SEARCH.DOC
Page: 12               SEARCHING FOR INFORMATION

          enter more search parameters, enter M. If you wish to 
          edit other search parameters that you had already 
          entered, enter O, then select the search parameter as 
          you had with the song selector. and press the return key
          to select the search. Now if you are ready to do the 
          search, press C, and the search process will start.
              When the search process is actually started, several 
          errors may crop up. If you did not enter an END, you 
          will get an error. If you did not include a close 
          parenthesis for every open parenthesis etc., you will 
          get an error. Also if you attempt to use two open 
          parenthesis without an intervening close parenthesis, 
          you will get an error. If you get an error, you will be 
          returned to the editor to fix the error. Once the search 
          is complete, you will be asked if you wish to save your 
          search to disk. If you wish to save your search entries 
          to disk, enter Y, and you will be prompted for a file 
          name. If you got to this by mistake, you can press the 
          ESC key to get out. If you don't wish to save, press N 
          or the ESC key. 
              Now you can view the database, and now only the 
          albums that were true for the search will be shown. If 
          you have changed the display mode to DIM, you will see 
          the selected albums shown bright and the rest dim.
          
          
                              USING PARENTHESES:
          
              Parentheses are used to force the program to test 
          the search parameters in parentheses before the rest of 
          the parameters. Here are some examples on how to use 
          parentheses.
          
               A.   ( year > 1950 AND year < 1960 ) OR 
                    ( type = R OR type = D ) END.
          
               B.   ( type = D OR type = R OR type = P ) AND
                    ( year > 1950 AND year < 1980 ) END.
          
              A Would show all albums that had years between 1950 
          or 1960 or were type R (Rock) or type D (Dance).
              B would show all albums that were type D (Dance), 
          type R (Rock), or type P (Pop) and were done between 
          1950 and 1980.
              If you did not use the parentheses in the first 
          case, it would show all albums that were type D (Dance), 
          or were type R (Rock) and and were done between 1950 and 
          1960, showing those of type D outside of the 1950 - 1960 
          range.
              If you did not use the parentheses in the second 
          case, it would show all type D (Dance), all type 
          R (Rock), and all type P (Pop) that was done between 
          1950 and 1960.
              Note that searches are examined in sequential order, 
          with those in parentheses being examined before the end 
          result.
          






Sat. Jul. 09, 1988 16:12   File: SEARCH.DOC
Page: 13               SEARCHING FOR INFORMATION

          
                USING EXISTING SEARCH INFORMATION (CHOICE 6):
          
              Records & Tapes has the ability to save and load 
          search information from disk. It is also able to edit 
          and reuse existing search information. This choice 
          operates a lot like the prior one with a few exceptions. 
          First when you enter it, you will be asked if you want 
          to load search files from disk. If you do, press Y, if 
          you do not, press N. If you chose to load search fields 
          from disk, you will be asked for a file name to load 
          from, and it will be loaded. If you have made a mistake, 
          by choosing Y, press the ESC key. The second difference 
          is that it starts you off with the search selector 
          screen. First you select a search to edit and continue 
          from there. If you just want to reuse other search 
          information, select any search press the F2 key then 
          press C.
          
          
          
          








































Sat. Jul. 09, 1988 16:12   File: PRINTING.DOC
Page: 14           PRINTING REPORTS AND ROLODEX CARDS

          
          
                     PRINTING REPORTS AND ROLODEX CARDS:
                                 (CHOICE 7):
          
              Records & Tapes has convenient, powerful reporting 
          capabilties. Records & Tapes can print lists of record 
          companies on file, artists and composers on file, 
          rolodex cards, and reports. Reports can be sorted on any 
          of five different fields. If the Search function is used 
          before printing a report, only selected records will be 
          printed. Records & Tapes can print several different 
          types of reports, with different amounts of information.
              Records & Tapes provides 3 different report forms.
          The first prints only the information that you see on 
          the screen when you are selecting existing records. The 
          second form prints all the information that you see on 
          the album screen, plus the number of songs on file. The 
          third form prints all the information that the previous 
          one does plus prints all the information in the songs.
              The Report printing functions require a printer 
          capable of 132 characters per line, either via a wide 
          carriage or by a compressed print mode. The rolodex 
          printing function requires a printer that can handle 
          rolodex cards.
              Records & Tapes uses a programmable string that is 
          printed out every time a report is printed, and a 
          separate programmable string is used for printing of 
          rolodex cards. The program also has a string for 
          enabling bold, enhanced, or underlined print, and a 
          separate string to cancel it. It also breaks pages 
          automatically, based on a programmable variable number 
          of lines per page. All this information is accessed 
          through SETUP.DAT via the setup program.
              You can abort the any printout at any time by 
          pressing and holding down the ESC key.
          
          
                           SHORT REPORT (CHOICE 1):
          
              The short report format prints all the information
          that you will see on the main album selecting screen. 
          A title bar is printed at the top of each page of the
          report with the date and sort field, and page number.
          
          
                           LONG REPORT (CHOICE 2):
          
              The long report format prints out all the infor-
          mation that you will see on the album screen, and the 
          number of songs on file. A title bar is printed at the 
          top of each page of the report like the above.
          
          
                           FULL REPORT (CHOICE 3):
          
              The full report format prints out all the 






Sat. Jul. 09, 1988 16:12   File: PRINTING.DOC
Page: 15           PRINTING REPORTS AND ROLODEX CARDS

          information that the above report does, but prints out 
          all of the songs. Each album prints out and on each one 
          with songs, a title bar is printed above all the songs.
          
          
                          ROLODEX CARDS (CHOICE 4):
          
              The rolodex format prints out all the information 
          that the album screen does. The information is printed 
          for standard rolodex cards. The rolodex control string 
          controls spacing so all the lines will print on each 
          card, and a page length command sets the page length to 
          be 1 rolodex card. You will need to do a test to 
          determine the exact placement of the cards in your 
          printer.
          
          
                           PRINT LISTS (CHOICE 5):
          
              The list printing function allows you to see which 
          artists and labels are currently in your database. You 
          can use these lists to keep you entries consistent.
          
          
                        CHANGE SORT FIELD (CHOICE 6):
          
              This function allows you to change the sort field 
          curently in use, that the reports are printed using. The 
          database is sorted first on the sort field, and second 
          alphabetically within the records where the sort field 
          is the same.
          
          





























Sat. Jul. 09, 1988 16:12   File: UTILITY.DOC
Page: 16                   UTILITY FUNCTIONS

          
          
                       UTILITIES FUNCTIONS (CHOICE 8):
          
              This option allows several functions that will be of 
          use to you when you are working with Records & Tapes. 
          As with any of the Records & Tapes functions, you can 
          exit or get out by pressing the ESC key.
          
          
                       CLEAR SEARCH FIELDS (CHOICE 1):
          
              This choice allows you to clear the fields that the 
          search function uses to select albums to show. This will 
          allow you to use go back to seeing your entire database 
          after doing a search on it.
          
          
                        CHANGE SORT FIELD (CHOICE 2):
          
              Choice 2 allows you to select a different sort 
          field. The sort field determines how the information 
          that prints out and is displayed for selection on the 
          screen is sorted. The information is sorted first based 
          on the sort field, and second alphabetically based on 
          the title of the song, where the sort field is the same
          in a group of two or more albums. This information is 
          saved to disk when the program ends so it will be reused 
          the next time the program starts.
          
          
                           DELETE ALBUM (CHOICE 3):
          
              This function allows you to delete an album record 
          that you do not want on file anymore. This is useful to 
          delete records that you no longer have, or entered by 
          mistake. To use this, select the album and press the 
          return key. Next the record number will be displayed and 
          you will be asked if you want to delete it. Make note of 
          the record number, so if you decide afterwards that you 
          didn't want to delete that record, and you will use that 
          number to recover the album. If you want to delete that 
          record, press Y and the return key. If you don't want to 
          delete that album, press N and the return key, or the 
          ESC key.
          
          
                           DELETE SONG (CHOICE 4):
          
              You can use this function to delete a song on an 
          album that you do not want on file any more. This is 
          useful if you entered a song by mistake. Note if you 
          delete a song by mistake, you cannot recover it. To
          use this function select the album involved, press 
          the return key, now you will see the songs. select the 
          song involved, press the return key. You will be asked 
          if you want to delete that song. If you wish to delete 






Sat. Jul. 09, 1988 16:12   File: UTILITY.DOC
Page: 17                   UTILITY FUNCTIONS

          that song press Y and the return key. If you don't wish 
          to delete that song press N and the return key, or the 
          ESC key.
          
          
                       CHANGE DISPLAY MODE (CHOICE 5):
          
              This choice allows you to change the mode that the 
          program uses to display information on the main album 
          selecting menus. The normal mode is hide, where only 
          albums that are selected are shown and others which the 
          search function doesn't select are not shown. When the 
          program starts up all albums are selected. Also after 
          you have used the Clear Search fields (Choice 1) 
          function, all albums will be shown. The other mode that 
          you can select is dim mode where all records are shown, 
          but selected records are shown in bright. To use this 
          function, press Y and return at the prompt, if you do 
          not want to change the mode, press N and return or the 
          ESC key. Note this information is not saved and the 
          program always starts up in hide mode, unless you 
          use the DIM option on the command line.
          
          
                        SAVE DATA TO DISK (CHOICE 6):
          
              Use this choice as basically a protective measure. 
          This function will save all changes to disk as though 
          you had selected quit, but does not end the program. You 
          should use this function after you enter a few albums, 
          so you do not lose you data if the computer breaks down, 
          or the something happens to interupt the power.
          
          
                      RECOVER ALBUM RECORDS (CHOICE 7):
          
              If you accidentally delete an album, you can re-
          cover that album record using this function. To use this 
          function, you need the record number that that data is 
          stored at. If an album or song is deleted, it is not 
          erased, just the references to it are eliminated. This 
          function, restores the references. To use this, enter
          the record number that you made note of when you deleted
          the record, and press the return key. If you enter data
          that is not legal (non-number or negative number) you
          will get an error message.
          
          














Sat. Jul. 09, 1988 16:12   File: ERROR.DOC
Page: 18                    ERROR HANDLING

          
          
                               HANDLING ERRORS:
          
              Records & Tapes is designed to prevent many kinds of 
          errors, but there are several different kinds of errors 
          that may occur. If you get an error that says either 
          RUNTIME ERROR #... OR I/O RUNTIME ERROR#..., make note 
          of the error numbers and call us immediately, there is 
          something wrong with the program. Any other error that 
          you will get, you should be able to resolve.
              In any case when you get an error, it will be 
          flagged to your attention in a bright blinking color, 
          and your computer will beep. Read the message, and press 
          any key. The program will return to the menu. At this 
          point you should quit and resolve the problem. If you 
          get any further errors, the program will abort all-
          together. If there are errors at startup, the program 
          will not start at all. If the SETUP.DAT file is not 
          available, the program will end with a I/O error 01.
          when you stop the program, you will see an error message.
          If you saw the error message at the bottom of the screen
          you can ignore this message.
              Here are some of the errors that you might get, and 
          what causes them and how to resolve them.
          
          OVERLAY FILE NOT FOUND. Records & Tapes relies on 3 
          files on your disk for additional programs. These are 
          RNT.000, RNT.001, and RNT.002. These are required on the 
          disk or startup directory, also known as the main or 
          first directory.
          
          OUT OF MEMORY ERROR. You do not have enough memory to 
          use Records & Tapes, or you have attempted to move a 
          database created on a larger machine to a smaller one, 
          and you have too many albums. You could  resolve it by
          getting more memory, or by unloading a resident program, 
          if you have any loaded.
          
          FILE NOT FOUND. The files SETUP.DAT, ARTIST.LST, 
          LABEL.LST, AND SORT.LST must be on the disk or the 
          startup directory, also known as the main or first 
          directory. Also files ALBUMS.REC and SONGS.REC must be 
          on the disk, or in the second or data directory. Also 
          if you were loading a search file into memory, you
          possibly used the wrong file name.
          
          DIRECTORY IS FULL. This is possibly what the case is. 
          Sometimes this error is caused by using an illegal e
          file nameto save search information to. Otherwise use 
          another disk.
          
          DISK IS FULL OR DISK WRITE ERROR. This is probably a 
          full disk, or a problem with your disk drive. This might 
          also be a problem with a disk.
          
          TOO MANY OPEN FILES. This is not likely to happen, but 
          if it does, increase the files line in your config.sys 
          file.




Sat. Jul. 09, 1988 16:12   File: ERROR.DOC
Page: 19                     ERROR HANDLING

          
          NOT ENOUGH MEMORY LEFT. You have reached the capacity of 
          your computer system. If you wish to add more, you will 
          need more ram memory, or unload a resident program.


          
          
          
          




















































Sat. Jul. 09, 1988 16:12   File: REGISTER.DOC
Page: 20                   REGISTRATION FORM

          
          
          
                          REGISTERING RECORDS & TAPES:
          
          
              To register this program fill out the below form and
          send it with $25.00 in check or money order to:
                             
                             Christopher J. Noyes
                             191 Dean Street
                             Brooklyn, NY 11217
          
              You may obtain the Turbo Pascal 3.0 source code for this
          program for an additional $50.
          
          
          --------------------------------------------------------------
          
          
          
                    RECORDS & TAPES DATABASE REGISTRATION:
          
          
          
          Name:_______________________________________________________
          
          Address:____________________________________________________
          
          City:_______________________State:_________Zip:_____________
          
          Work Phone: (___) ___-______Home Phone: (____) _____-_______
          
          I Got This Program From:____________________________________
          
          Comments:___________________________________________________
          
          ____________________________________________________________
          
          
          
          ______ Enclosed is $25 for Registration. Send me upgrade 
                 when it's ready.
          
          ______ Enclosed is $25 for Registration and $50 for Source.
                 Please send me my source code immediately and send
                 my upgrade when it's compete.    
          
          
          










```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1413

     Volume in drive A is DISK1413
     Directory of A:\

    ALBUMS   REC      6000   1-20-88  12:12p
    ARTIST   LST      4240   5-02-87   9:46p
    FILE1413 TXT      1985   6-01-89   9:37a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   6-01-89   9:51a
    LABEL    LST      1065   4-29-87  12:07p
    MANUAL   BAT       147   6-01-89   9:54a
    PAGE     COM       325   1-06-87   4:21p
    README   DOC     51466   7-09-88   4:23p
    RNT      000      5888   1-20-88  12:06p
    RNT      001      5376   1-20-88  12:06p
    RNT      002     29952   1-20-88  12:07p
    RNT      COM     38386   1-20-88  12:07p
    SETUP    COL        72   1-01-80   1:35a
    SETUP    COM     29143   7-11-88  11:29a
    SETUP    DAT        72   7-09-88   3:53p
    SONGS    REC      9900   1-20-88  12:12p
    SORT     LST      3692   1-20-88  12:14p
    START    COM     13710   1-03-88   2:35p
    VIEW     BAT        42   6-01-89   9:53a
           20 file(s)     202193 bytes
                          107520 bytes free
