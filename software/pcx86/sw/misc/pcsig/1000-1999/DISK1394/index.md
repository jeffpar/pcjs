---
layout: page
title: "PC-SIG Diskette Library (Disk #1394)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1394/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1394"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "READ MY DISK!"

    Anyone who works with ASCII-based databases, wordprocessors, or any
    program that stores its data in ASCII files will find this program
    useful. READ MY DISK! recovers ASCII data from a floppy or hard disk
    that has been severely damaged. This damage can be missing file
    allocation tables, missing directories, deleted files,
    magnetically-damaged disks and even disks with holes in them. In other
    words, if the disk will fit in your disk drive, then the damaged data
    can be recovered.
    
    When READ MY DISK! recovers data, it writes the data to an undamaged
    formatted disk. If needed, you can specify the size of the file in case
    you have a wordprocessor with limits on the size of the files it can
    handle. You can also specify if you would like high-order bit
    characters saved. This helps if you have damaged a file that was saved
    in a format used by WordStar or any other program that uses its own
    characters.
    
    READ MY DISK! works on all floppy and hard disks up to 32 megabytes in
    size.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1394.TXT

{% raw %}
```
Disk No: 1394
Program Title:  READ MY DISK!
PC-SIG version:  1.1

Anyone who works with ASCII-based databases, word-processors, or any
program that stores its data in ASCII files will find this program
useful.  READ MY DISK! recovers ASCII data from a floppy or hard disk
that has been severely damaged.  This damage can be missing file
allocation tables, missing directories, deleted files,
magnetically-damaged disks and even disks with holes in them.  In other
words, if the disk will fit in your disk drive, then the damaged data
can be recovered.

When READ MY DISK! recovers data, it writes the data to an undamaged
formatted disk . If needed, you can specify the size of the file in case
you have a word processor with limits on the size of the files it can
handle.  You can also specify if you would like high-order bit
characters saved.  This helps if you have damaged a file that was saved
in a format used by WordStar or any other program that uses its own
characters.

READ MY DISK! works on all floppy and hard disks up to 32 megabytes in
size.

Synopsis:  Recover data from severely damaged disks.  Will operate on
all floppies and hard disks up to 32 megabytes.

Usage:  Disk Utility/Data Recovery.

Special Requirements:  Two disk drives or one disk drive and a hard disk.

How To Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

INFO     DOC  Description of program.
MANUAL   DOC  Documentation for main program.
MANUAL   EXE  Manual generating program.
RMD!     EXE  Main Program.

PC-SIG
1030D E Duane Avenue
Sunnyvale, CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## MANUAL.DOC

{% raw %}
```






                                 READ MY DISK!
                                  (ver 1.3)

                               Advanced Version

                                Copyright 1988
                                By R. Harriman
                             All Rights Reserved



                           Direct All Inquiries To;

                          DairySoft Custom Software
                              72 Crestmont Road
                              Bangor, ME  04401

                                (207) 945-3500




                          LICENSE TO USE THIS PROGRAM

              This program is NOT in the public domain. To use this
          program you MUST REGISTER as described in the REGISTRATION
          section on the next page. Failure to register within 30
          days will terminate your license to use this program.

              Subject to the registration provision you are granted
          a license to copy and distribute this program provided
          that you do not sell it, and that the recipient is
          informed that he/she must register their copy.

              This license is also subject to the provision that all
          support for the software will be done by mail or at the
          expense of the user for phone, travel, lodging, etc. All
          support will be provided in the English language. Support
          contracts are available on a individually negotiated
          basis.

              The license is subject to the understanding that this
          manual and the software MAY contain errors and that the
          author or DairySoft Custom Software will not be held
          liable for any damages resulting from the use of this
          software. The software and manual are provided AS IS.

              This license is for one computer only. If you wish to
          use it on more than one computer you must request a
          multiple site license as described in the REGISTRATION
          section.















                                 REGISTRATION

              To use this program you must register with the company
          shown below;
                          DairySoft Custom Software
                              72 Crestmont Road
                               Bangor, ME 04401

              Your registration is NECESSARY for several reasons.

              1)    It provides us with an address to contact you
                 should a problem be discovered in the software.

              2)    If you need support for the software it will
                 only be provided if you have registered.

              3)    Each year we have a drawing from the names of
                 all the people who have registered that year. The
                 people chosen get to choose from a wide variety of
                 software (games, utilities, integrated packages,
                 etc.) from many of the famous software
                 manufacturers. We give away hundreds of dollars
                 worth of software to several different winners.

          Single User

              If you will be using this program on only one computer
          you can register by sending a check for $25.00 to the
          address shown above. Please include your name and address.


          Multiple Site Users

              If you wish to use this program on more than one
          computer you may register by sending the following items
          to the address shown above;

              1) A letter stating your name (business or school),
                 address, telephone number and the number of
                 computers you will be using this program on.

              2) Include a check for payment at the rate of $25.00
                 for the first computer and $10.00 for each
                 additional computer.

              Multiple site users will receive one entry into the
          drawing for each computer registered.



















                             GENERAL DESCRIPTION

              This program is designed to recover ASCII data from a
          floppy or hard disk that has been severely damaged.

              This damage can be in the form of missing File
          Allocation Tables, missing Directories, deleted files,
          magnetically damaged disks, disks with holes in them or
          disks that have been contaminated in any way.

              The data that is recovered from the damaged disk is
          written to ASCII files on another disk. This undamaged
          disk can then be read, edited and formatted by a word
          processor or text editor.


                            WHO NEEDS THIS PROGRAM?

              If you are a journalist, author, student, businessman,
          secretary or anyone who uses a word processor extensively,
          then you need this program.

              If you work with ASCII based databases or programs
          that store their data in ASCII files then you need this
          program.

              There are a lot of data recovery programs on the
          market. Most of them are designed to fix whatever is wrong
          with your disk so you can recover the lost data. If the
          disk cannot be fixed then the data cannot be recovered.

              READ MY DISK! assumes the worst. It assumes that the
          disk cannot be fixed. It will read every sector on your
          disk and write whatever it finds to ASCII files that you
          can edit as you desire.

              The only time READ MY DISK! will not recover your lost
          data is when the disk has been formatted. Your computer's
          disk operating system alters the disk in such a manner
          that no program on this planet can read it.

              Some programs advertise that they can recover data
          from a formatted disk. What they mean is that they can
          recover data that was on a disk formatted with their
          program.

              The format program provided with your DOS will destroy
          all data permanently.
          
                              EQUIPMENT REQUIRED

              A IBM PC* or PC compatible with at least 256K RAM. Two
          floppy drives or one floppy and a hard drive. A 80 X 25
          monitor.












                                   FEATURES

          1) Reads every sector (or group of sectors that you
             select) on the entire disk into ASCII files.

          2) Allows you to preview the disk to determine which
             sectors you wish to retrieve.

          3) You specify the size of the ASCII files so your word
             processor or text editor can handle them.

          4) Reads ASCII text files that use high bits such as
             WORDSTAR*.

          5) Works on all floppy disks and hard disks up to 32
             megabytes.

          6) Reads even the most severely corrupted disks. If it
             will fit in your drive, it can be read.

          7) Displays the drive being read, the drive being written
             to, the number of sectors on the disk and which sector
             is currently being read.

          8) Ignores sectors without data.

          9) Takes about 12 minutes to read a completely full 360K
             floppy disk when used on a 4.77 mhz machine.






































                  !!!!!!!!!    USING THE PROGRAM    !!!!!!!!!


              There are five steps that you must follow to use this
          program properly. They are;

              1) Make a backup of the disk to be read.

              2) Load the program.

              3) Set the parameters.

              4) Read the disk.

              5) Edit the ASCII files on the target disk using your
                 word processor or text editor.


                          BACKUP THE DISK TO BE READ
                                   (Step 1)

              Use the DISKCOPY.COM program provided on your DOS disk
          to make a backup copy of the bad disk (floppy disks only).
          Use the backup copy as the disk to be READ. This will
          allow you to have the original should you make an error
          and damage the backup disk. If the disk is too badly
          damaged you may not be able to make a copy.


                              LOADING THE PROGRAM
                                   (Step 2)

              The program RMD!.EXE must be copied to a formatted
          floppy disk and should contain only this program. Hard
          disk users should create a separate directory for this
          program and copy RMD!.EXE to that directory.

          Hard Disk Users

              Go to the directory containing RMD!.EXE and type RMD!
          then press the Return or Enter key.

          Dual Floppy Drive Users

              Place the disk to be read in one drive and the disk
          with RMD!.EXE in the other drive. If RMD!.EXE is in drive
          B go to the B> prompt (or A> if it is in the A drive) and
          type RMD! then press the Return or Enter key.

              The program will be loaded and a screen will appear
          that will allow you to set the parameters for this
          program.
















                              SETTING PARAMETERS
                                   (Step 3)


          Read From;

              Press the letter on the keyboard which corresponds
          with the drive that contains the disk to be read. Do not
          press the Enter or Return key.

              Pressing the Esc key will end the program.


          What Type Of Read?

              If you do not want to translate high bit characters
          then press the letter X when the cursor is in the Read All
          Data box. If you press the spacebar the cursor will move
          to the next box and you can press the letter X to indicate
          Read & Translate.

              Pressing the Esc key will back up to the READ FROM
          box.


          Target Drive;

              Press the letter on the keyboard which corresponds
          with the drive that contains the disk to be written to. Do
          not press the Enter or Return key.

              Pressing the Esc key will back up to the WHAT TYPE OF
          READ box.




          Maximum File Size;

              Type in a number that is smaller than the maximum file
          size your word processor or text editor will handle. If
          you do not know then type in 64. All files that are
          written to the target drive will be less than the size you
          specify.

              To erase a number that you have typed or press the Alt
          key and the C key at the same time.

              When you have the correct number typed in press the
          Return or Enter key to continue.

              Pressing the Esc key will back up to the TARGET DRIVE
          box.












                                Changing Disks

              If you have specified a floppy drive as the target
          drive you will be allowed to remove the program disk at
          this time and put in a blank, formatted disk.



                           STARTING THE READ PROCESS
                                   (Step 4)

              At this time you should be looking at the Parameters
          screen and there should be four choices showing at the
          bottom of the screen.

          F2 Read Entire Disk-F4 Select Sectors-F6 Quit-Esc Back up


          Back Up

              If you press the Esc key you will be able to back up
          and change the parameters.


          Quit

              Pressing F6 will end the program.


          Read Entire Disk

              If you press F2 the program will check to see that you
          have correctly defined the parameters. If something is not
          correct you will be warned and returned to the parameters
          screen. Make the corrections, move to the end of the
          parameters screen and press F2 again.


          Select Sectors

              If you press F4 you will be allowed to look at the
          contents of the sectors on the screen and decide which
          sectors you want to copy to the Target disk. See the
          SEARCHING AND SELECT SECTORS section for full details.


          Error Checking

              When you select F2 or F4 the program will check to see
          that you have selected valid drives to read from and write
          to. If you have not, it will beep and inform you of the
          specific problem. Then it will return you to the original
          screen to set the parameter correctly.

              IF THE READ DISK IS SEVERELY DAMAGED YOU WILL BE










          informed of this problem and will be asked how the size of
          the disk is described. If is described in kilobytes press
          the letter K. If it is described in megabytes press the
          letter M. You will then be asked to type in the number of
          kilobytes or megabytes on the READ disk. Type in the
          number and press Enter or Return to continue.


                        SEARCHING AND SELECTING SECTORS

              When you press F4 the screen will reformat and the
          contents of the first sector on the READ disk will be
          displayed on the screen.

              In addition the following information is also
          displayed;

              The sector at which the READ process will BEGIN.
              The sector at which the READ process will END.
              The sector that is currently displayed on the screen.


          Options

              F1 will mark the sector that is currently on the
          screen as the sector to BEGIN the READ process.

              F3 will mark the sector that is currently on the
          screen as the sector to END the READ process.

              F5 will allow you to select the sector that you want
          to be displayed on the screen.

              F7 will allow you to type in a word or phrase that you
          want to search for.
              The search will begin at the next sector from the one
          currently on the screen. It will stop when it finds the
          first sector containing the word or phrase you specified.
              That sector will be displayed as the current sector
          and pressing F7 again will allow you to select the search
          phrase again.

              F9 will begin the READ process at the BEGIN sector you
          specified and will end at the END sector specified.

              PgUp will backup and display the previous sector.

              PgDn will go forward and display the next sector.

              Esc will return to the PARAMETERS SCREEN.


          How To Use The Options

              Usually the amount of data that you have lost is quite
          small and it is not necessary to read the entire disk. By










          using the options shown above you can speed up the data
          retrieval process.

              These are the steps you would normally take to restore
          the lost data with the Select Sectors option.

              1) An important part of your research paper has not
          appeared on the screen where it should have been. All
          attempts at restoring the data have failed.

              2) Using READ MY DISK! you set up the parameters
          screen which instructs the program which disk to read from
          and which disk you want the recovered data to go to. Then
          you press F4 to Select Sectors.

              3) When the first sector is displayed on the screen
          you press F7 and enter a phrase that you remember was in
          the missing data. The program searches and finds the
          sector containing that phrase. It is displayed on the
          screen.

              4) Using the PgUp key you page backwards through the
          sectors until you find the beginning of the missing text.
          You press F1 to mark this as the beginning sector.

              5) You press F5 and enter the sector number that you
          started at with the phrase in it. That sector is displayed
          and then you press PgDn to page through the sectors until
          you find the end of the missing text.

              6) You press F3 to mark this sector as the ending
          sector.

              7) You then press F9 and the program reads the sectors
          that you selected into text files that can be read by your
          word processor. You combine those text files with the
          original document and you are finished.





























                                  READ SCREEN

              The Parameters screen will clear and the Read screen
          will appear. The following information is displayed;

              READING DRIVE:
              WRITING TO:
              TRANSLATE IS:
              TOTAL SECTORS:
              NOW READING SECTOR:


          READING DRIVE:

              Will display the letter of the drive being read.


          WRITING TO:

              Will display the letter of the drive being written to
          and the name of the file currently being written. The
          first file written is MYDISK1.DAT, the second file is
          MYDISK2.DAT, etc.

              Whenever the file currently being written to exceeds
          the maximum file size set in the parameters the next
          MYDISK?.DAT file is created.

              IF THE DISK BEING WRITTEN TO BECOMES FULL YOU WILL BE
          NOTIFIED BY A MESSAGE ON THE SCREEN. AT THIS TIME PLACE A
          BLANK, FORMATTED DISK IN THE TARGET DRIVE, CLOSE THE DRIVE
          DOOR AND PRESS ANY KEY TO CONTINUE.


          TRANSLATE IS:

              Will display either ON or OFF depending on which
          option you selected on the parameters screen. ON will
          translate high bit characters.


          TOTAL SECTORS:

              Will display the total number of sectors anticipated
          on the READ drive. The first sector is zero.


          NOW READING SECTOR:

              Will display the sector currently being read. If some
          numbers pass more quickly than others it is because the
          sector did not contain any data and was ignored.


              PRESS THE LETTER E TO END THE DISK READ AND RETURN TO
          THE PARAMETERS SCREEN.












































































                             EDIT THE ASCII FILES
                                   (Step 5)

              When the program has finished reading and writing it
          will return to the Parameters Screen.

              Press the Esc key and the program will end.

              Go to the drive designator for the drive the TARGET
          disk is in (A>, B>, C>, etc.) and type DIR, then press the
          Enter or Return key. You will see several files beginning
          with MYDISK and ending with .DAT. These files are in
          numerical order.

              If you were reading a 360 kilobyte drive and the
          maximum file size you set was 100 kilobytes you will see
          four files. They will be;

              MYDISK1.DAT - Size will be approximately 102400 bytes.
              MYDISK2.DAT - Size will be approximately 102400 bytes.
              MYDISK3.DAT - Size will be approximately 102400 bytes.
              MYDISK4.DAT - Size will be approximately 61440 bytes.


              Using a word processor or text editor load these files
          one at a time and view the contents. You will be amazed at
          what you see!

              Everything you put on the disk and did not write over
          will be displayed. It will appear even if you instructed
          DOS to delete it!

              Use your word processor or text editor to delete
          unwanted data and format the remaining data the way you
          want it.

              If you only needed a small portion of what was on the
          disk then copy it and transfer it to another file.

              To locate a particular section that you wanted to
          recover, use the search feature of your word processor to
          locate a particular phrase.

          
                            WE WANT YOUR COMMENTS!

              If you have ideas on improving this product or have
          questions about using it please write to DairySoft Custom
          Software, Dept Q, 72 Crestmont Road, Bangor, ME  04401.












```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1394

     Volume in drive A has no label
     Directory of A:\

    MANUAL   EXE     67069   7-12-89   9:13p
    MANUAL   DOC     21467   7-12-89   9:00p
    INFO              5450   7-12-89   9:01p
    RMD!     EXE     77187   1-12-89   3:19p
    FILE1394 TXT      1682   8-31-89   2:07p
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       540   5-30-89   8:57a
            7 file(s)     173433 bytes
                          145408 bytes free
