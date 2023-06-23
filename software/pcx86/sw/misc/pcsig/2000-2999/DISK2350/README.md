---
layout: page
title: "PC-SIG Diskette Library (Disk #2350)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2350/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2350"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "IMAGEACCESS"

    IMAGEACCESS -- a database program that associates a graphics image file
    with each text record. The result is a simple database of pictures that
    can be displayed on your monitor and printed on either a dot-matrix or
    laser printer.
    
    IMAGEACCESS accepts image files in .MSP (Microsoft Paint), .PCX (PC
    Paintbrush), or .TIF (Tagged Image File) formats. The image files can
    be created by a hand scanner, a full page scanner, any of several paint
    programs, or a video digitizer.
    
    Whatever the subject matter of the images or photographs, IMAGEACCESS
    will make their organization easier. Access to a specific image is
    only a few keystrokes away. Once entered, the database can be
    searched and images displayed or reports printed which include the data
    and images.
    
    The potential uses of IMAGEACCESS are limitless. IMAGEACCESS can
    create an inventory of just about any collection or group of people,
    places, or things. Clip-art for desktop publishing can easily be
    organized by category, description, and size. Personnel files can
    contain photographs of employees for easy identification and security.
    Collectors, genealogists, historians, writers, archaeologists,
    photographs or images of interest.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2350.TXT

{% raw %}
```
Disk No: 2350                                                           
Disk Title: ImageAccess                                                 
PC-SIG Version: S1                                                      
                                                                        
Program Title: ImageAccess                                              
Author Version: 1.0                                                     
Author Registration: $49.00                                             
Special Requirements: 512K RAM, and EGA. A hard drive is recommended.   
                                                                        
IMAGEACCESS is a database program that associates a graphics image file 
with each text record.  The result is a simple database of pictures that
can be displayed on your monitor and printed on either a dot-matrix or  
laser printer.  IMAGEACCESS accepts image files in MSP (Microsoft       
Paint), PCX (PC Paintbrush), or TIF (Tagged Image File) formats.  The   
image files can be created by a hand scanner, a full page scanner, any  
of several paint programs, or a video digitizer.                        
                                                                        
The potential uses of IMAGEACCESS are limitless.  IMAGEACCESS can       
create an inventory of just about any collection or group, of people,   
places, or things.  Consider the possibilities; Clip-art for desktop    
publishing can easily be organized by category, description, and size;  
Personnel files can contain photographs of employees for easy           
identification and security; Collectors, genealogists, historians,      
writers, archaeologists, biologists, and many others can use IMAGEACCESS
to attain quick access to photographs or images of interest.            
                                                                        
Whatever the subject matter of the images or photographs, IMAGEACCESS   
will make their organization easier.  Access to a specific image is only
a few keystrokes away.  Once entered, the database can be searched and  
images displayed or reports can be printed which include the data and   
images.                                                                 
                                                                        
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
╔═══════════════════════════════════════════════════════════════════════╗
║            <<<<  PC-SIG Disk #2350  IMAGE ACCESS  >>>>                ║
╠═══════════════════════════════════════════════════════════════════════╣
║ To start the program, type:  IA  (press ENTER)                        ║
║                                                                       ║
║ To print documentation, type:  copy MANUAL.DOC prn  (press ENTER)     ║
╚═══════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.


```
{% endraw %}

## MANUAL.DOC

{% raw %}
```

                          **** ImageAccess ****

    INSTALLATION 

First, make a backup copy of your ImageAccess program disk. If necessary 
consult your PC-DOS/MS-DOS manual for a description of the Diskcopy 
command. Save the original program disk in a safe place and use the copy 
as the working program disk. 

Second, although it is possible to use ImageAccess on a floppy disk 
system, a hard disk system is almost a necessity if you wish to store a 
number of image files. To install ImageAccess on a hard disk use the 
following steps: 

    1. From the hard disk prompt type CD\ to be sure you are in 
       the root directory.

    2. Type MD\IMAGE
       (This will make a directory called IMAGE on the hard disk for the 
       ImageAccess program, database files and image files.) 

    3. Type CD\IMAGE
       (This will place you in the IMAGE directory that was just 
       created.) 

    4. Place your working ImageAccess program disk in drive 
       A and type COPY A:*.*
       (This will copy all of the necessary files onto your hard disk.) 

    5. Type IA and the Image Access program will begin.



                          **** ImageAccess ****

    INTRODUCTION 

Welcome to ImageAccess, a simple database program that associates a 
graphics image file with each text record. The result is a database of 
pictures. The potential uses of ImageAccess are limitless. 

ImageAccess can create an inventory of just about any collection or 
group of people, places, or things. Consider the possibilities: 

    * Museums can catalog any collection including a description, price 
      paid and an image for each item. 

    * Clip art for desktop publishing can easily be organized by 
      category, description and size. 

    * Personnel files can contain photographs of employees for easy 
      identification and security. 

    * Collectors, genealogists, historians, writers, archaeologists, 
      biologists and many others can use ImageAccess to attain quick 
      access to photographs or images of interest. 

Whatever the subject matter of the images or photographs, ImageAccess 
will make their organization easier. Access to a specific image is only 
a few keystrokes away. Once entered, the database can be searched and 
images displayed or reports printed which include the data and images. 



                          **** ImageAccess ****

    WHAT HARDWARE DO I NEED TO RUN THIS PROGRAM?

An IBM compatible computer with 512K of memory and an EGA or VGA display 
are needed. Bi-level and color images are displayed equally well on 
either display. EGA displays will dither the grayscale images while VGA 
displays are capable of 16 level grayscale images. A hard disk is 
strongly recommended. 

A source that produces image files in either PCX, MSP or TIF file format 
is also needed. This source can be a simple hand scanner or full page 
scanner, one of several paint programs or a video digitizer. 

Printers supported are the Epson LQ family of 24 pin dot matrix 
printers, the IBM Proprinter X24 series or the Hewlett-Packard Laserjet 
series. 

ImageAccess creates a simple database consisting of records that contain 
a user defined number of fields of information. In addition to each 
record's descriptive text, a file name of a graphics image, in TIF, MSP 
or PCX format, is attached to the record along with the size of the 
image in pels. 

For those wanting a fast introduction to how ImageAccess operates, a 
small sample database file, including graphics, is included. Follow the 
quick demonstration on the next page to see how it works. 



                          **** ImageAccess ****

        A QUICK DEMONSTRATION FOR NEW USERS

    Type IA and then press Enter to start the program.

    Press Enter to select the File command.

    Press Enter to load a previously created database.

    Press Enter to load the SAMPLE.DTA database.

    Press Esc to return to the File options.

    Press Esc to return to the main menu.

    Press Left arrow twice to highlight the Display command.

    Press Enter to select Display.

    Type a 1 and then press Enter to see the text of the first record. 

    Press F10 to display the graphics image of the first record.

    Press any key to return to the text of the first record.

    Press Down arrow or Enter to display the text of the next record. 

    Go to the line above which says press F10 and repeat.



                          **** ImageAccess ****

    OPERATING INSTRUCTIONS 

To start ImageAccess simply type IA. The main menu will be displayed at 
the top of the screen with the File command highlighted. 

Display    Exit    File    Input    Options    Report    Query

The different commands are selected by moving the highlight bar with the 
Left and Right arrow keys and then pressing Enter. 

Here are some additional details on the ImageAccess commands. 


                            The File Command

The File command should always be selected first, either to create a new 
database file or open an existing database file. When the File command 
is selected a pull-down menu opens that displays the various choices. 
The four choices are: 

    Create a database

A file name of 8 characters or less is typed in to create a database 
file. The extension .DTA is automatically added to the name. After the 
name has been entered, an empty screen appears under the command line 
bar. A layout for the text portion of the database will now be created 
and stored. A simple example that stores an image of employees might be 
entered as follows: 

Name:_________________________________________________________________

Address:______________________________________________________________

City:____________________________________ State:_______ Zip:__________

Position:_______________________________________

Division:_______________________________________

Employee Number:_______________

The field names, such as Employee Number, Name, etc., are simply typed 
in, followed by a colon for appearances. The length of each field is 
determined and entered immediately following the field name by using the 
F1 key. For example the Employee Number field is 15 characters long so 
the F1 key is pressed 15 times immediately following the field name. The 
background color for the field names will be in contrast to the field 
itself for easy identification. When all the field names and field 
lengths have been entered the Esc key is pressed and ImageAccess does 
some checking to see if the format is correctly done. The format can be 
accepted or edited further at this point. 

The entire screen can be used for the layout and more than one field 
name and field can be entered on a line. Lines can also be skipped and 
fields can extend onto several lines. 

The following keys perform special functions. The cursor can be 
positioned by using the Arrow keys. The Backspace deletes the character 
in front of the cursor. The Insert key enters a complete additional 
blank line at the cursor location and the Delete key erases a complete 
line at the cursor location. 

    Load a previously created database

A second pull-down menu opens that contains the names of the current 
database files, with the first name highlighted.  The highlight bar can 
be moved with the Arrow keys. When the desired database file is 
highlighted the Enter key is pressed, and the file is loaded. 

    Change the current directory

A new directory can be chosen by typing in a valid path name. For 
example if a desired database is contained in directory \NEWPIX, this 
path name can be entered and the database then loaded. All path names 
must begin with a Backslash. 

    Sort the database

The records in the database can be arranged alphabetically by selecting 
a field on which to sort. When this option is selected a window displays 
the fields with the first name highlighted. The highlight bar can be 
moved with the Arrow keys and the field selected by pressing Enter. A 
check is then done to see if the sort will fit in memory. An additional 
database file is then created in proper order with a temporary name 
TMPxxxxx.DTA, with xxxxx being a unique number. If TMP1.DTA exists then 
the new file will be call TMP2.DTA, etc. These files can be renamed 
through the PC-DOS/MS-DOS rename command. The .DTA extension should be 
preserved so that ImageAccess will recognize it as a database file. 


To exit from any of the pull-down menus press Esc.


                            The Input Command

After a database file has been created records can be entered by 
selecting the Input command.  The next available record number will be 
displayed and the user created layout for the record appears on screen 
where the text will be entered.  Only a minimal amount of editing can be 
done when text is entered and there is no word wrap at the end of each 
line. 

When the text has been entered press the Esc key and a prompt for an 
image file name will appear under the text.  This file must have a TIF, 
MSP or PCX extension.  The TIF (Tagged Image File Format), MSP 
(Microsoft Paint) and PCX (PC Paintbrush) are among the most common 
image file formats and most scanners support one or more of these 
formats. 


                           The Display Command

Once records with text and an image file name have been entered they can 
be viewed by using the Display command.  When the Display command is 
first entered the user is prompted for a record number.  After typing in 
the desired record number and pressing Enter the text portion of that 
record is displayed. The bottom line contains the file name of the 
graphics image associated with the record and its size in pels. To see 
the image press F10. When necessary the displayed image will be 
automatically reduced to fit on the screen.  If the image size is too 
large it is reduced by 2, 4, 8, etc., until it will fit on the 
screen.Very large images or dithered ones may suffer in appearance 
because of this. When the image files are printed the full size image is 
used. While the image is appearing or after it is complete, pressing any 
key will return you to the text portion of the record. Depending on the 
image's size it may take some time for it to be painted on the screen. 

When at the text portion of the Display command there are six keys that 
are active. They are: 

    Enter - Display the text of the next record.

    Down arrow - Same as Enter.

    Up arrow - Display the text of the previous record.

    F10 - Display the graphics image.

    F9 - Edit the current text.

    F8 - Edit the current image file name.

    Esc - Quit the Display command and return to the main menu.


                           The Options Command

When the Options command is selected a pull-down menu opens and displays 
the four Options choices. They are: 
                          
    Select a printer

The Select printer option has four choices. The Enter key toggles the 
current selection and the Esc key sets the current selection. The 
default setting is for the Epson 24 pin printers.The choices are: 

        Epson LQ-800, LQ-1000, etc., series (24 pin printers) 

        IBM Proprinter X24 series (24 pin printers) 

        HP Laserjet series 

        Generic printer - text only (no images will be printed) 

    Select color or gray scale for graphics images

The Select color/gray scale option allows the user to toggle either 
option.The default setting is gray scale. 

    Select 8514A graphics driver

The Select 8514A driver allows users with this graphics card to set up 
higher resolution graphics. The 8514A graphics card displays 1024 x 768 
pixels on the screen in either 16 or 256 colors depending upon the 
memory in the graphics card. If your computer does not have this option 
and it is selected the computer may lock up or perform erratically. The 
default setting is to leave the 8514A driver inactive. 
    
    Set report page

The user can select the number of records that will be printed on each 
page of a report. Each record consists of its text and the graphics 
image associated with the record. The range of acceptable values is from 
1 to 10, with 2 being the default value. Depending on the size of the 
images users may need to change this value to avoid having the images 
printed across a page break. 

When ImageAccess is initially started the default options settings are 
used. When these settings are changed ImageAccess automatically saves 
the changes and uses them as the default settings the next time the 
program is started. 


                           The Report Command

The Report command allows simple reports to be printed that include the 
graphics image. When this command is selected the user is prompted for a 
report that includes all the records in the database, a range of records 
or selected records. An A, R or S should be entered. If a range of 
records are desired the user is prompted for the first and last record 
wanted. If selected records are desired the user is prompted for a 
search string. A word or phrase of up to 40 characters can be entered 
and the records in the database, including the image file name, will be 
searched for this particular string. The search is not case sensitive, 
so typing in "The" will also find "the". Note that searching for "The" 
will also identify "They" as a match. The only records printed will be 
those that contain text that matches the search string. 
                               
The size of printed images will vary depending on the dots/inch (dpi) 
setting when the images were scanned. If a 24 pin dot matrix printer is 
used, which prints at 180 dpi, images scanned at 200 dpi will be 
reproduced at a slightly increased size. Images printed on a Laserjet 
printer will appear at normal size when scanned at 300 dpi. 


                            The Query Command

The Query command prompts the user for a search string and then displays 
the records (in order) that contain text that matches the search string.  
After a match is found, and the text of that record is displayed, there 
are three active keys. They are: 

    Enter - Find the next match.

    F10 - Display the graphics image.

    Esc - Quit the Query command.


                            The Exit Command

The Exit command quits the ImageAccess program and returns to the DOS 
prompt.


                            REGISTRATION FORM

    Copies of this program may be freely shared with other users. 
Shareware users are invited to support the author and register their 
copies. The form found below should be used for registration. Registered 
users will receive an enhanced version of ImageAccess that allows access 
to additional image file formats including TIF 256 level grayscale, and 
two compressed TIF formats. The enhanced version also allows snapshots 
of image files to be sent to the printer with a single keystroke. The 
program will be sent in a attractive binder that includes a printed 
manual. 
    The registration fee is $49. and should be made out to: 
    
           Theron Wierenga, P.O. Box 595, Muskegon, MI 49443 




    Name____________________________________________________________

    Address_________________________________________________________

    City_______________________________________State_____Zip________

    Disk size desired:       5 1/4 in._______       3 1/2 in._______

    How did you receive your copy of this program?__________________

    ________________________________________________________________

    What type of computer and equipment are you using with
    ImageAccess?____________________________________________________

    ________________________________________________________________

    Suggested improvements__________________________________________

    ________________________________________________________________

    ________________________________________________________________

    ________________________________________________________________

    ________________________________________________________________



                  ImageAccess is a software product of
                   

                            Wierenga Software
                              P.O. Box 595 
                           Muskegon, MI 49443 

```
{% endraw %}

## PC-SIG.TXT

{% raw %}
```
The files on this disk are:

IA       EXE    125612 bytes ImageAccess program
IA       DEF         8 bytes ImageAccess option settings
SAMPLE   DTA      2050 bytes Sample database
ANTIQUE4 TIF     82862 bytes Sample image file
BERT4    TIF     59990 bytes Sample image file
LINDA    TIF     21162 bytes Sample image file
WHALE    TIF     14390 bytes Sample image file
HOUSE    TIF     28422 bytes Sample image file
MANUAL   DOC     16679 bytes ImageAccess users manual
PC-SIG   TXT       522 bytes This file

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2350

     Volume in drive A has no label
     Directory of A:\

    IA       EXE    125612   3-20-90  10:14p
    IA       DEF         8  11-05-89   1:27p
    SAMPLE   DTA      2050   3-22-90   6:54p
    ANTIQUE4 TIF     82862   9-29-89   4:59p
    BERT4    TIF     59990   9-29-89   4:58p
    LINDA    TIF     21162   3-22-90   6:38p
    WHALE    TIF     14390   9-24-89   6:52p
    HOUSE    TIF     28422   9-24-89   7:00p
    MANUAL   DOC     16785   3-18-90   3:21p
    PC-SIG   TXT       522   3-22-90   7:01p
    GO       TXT       562  10-05-90   2:07a
    GO       BAT        40   1-01-80   6:00a
    FILE2350 TXT      2739  10-05-90   9:41a
           13 file(s)     355144 bytes
                               0 bytes free
