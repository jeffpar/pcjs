---
layout: page
title: "PC-SIG Diskette Library (Disk #2330)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2330/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2330"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SR-INFO 1 OF 2 (2331 ALSO)"

    For anyone requiring a database, SR-INFO is capable of almost any
    database task from the most simple flat file application to complex
    relational database applications. SR-INFO is an upgrade of VP-Info,
    version 1.
    
    A relational database working with up to six data files at one time, it
    also works with any DOS file in both sequential and random access
    modes.
    
    A rich set of commands speeds the development of applications of any
    complexity. Programs compile to a special compact format and then run
    with blazing speed. Extensive on-line help and a comprehensive set of
    demonstration programs help new users get "up to speed" quickly.
    
    Speed is a hallmark of SR-INFO. Programs are compiled before
    they are run. The compilation is to a special SR-INFO format that runs
    at the same speed as C code. Comments in program files have no effect
    on execution speed -- a big plus when compared to database languages
    that interpret each line of code as it is read
    
    In addition to .DBF data files, SR-INFO can work with a variety of
    external formats including .SDF files. Any file can be processed one
    byte at a time, sequentially, or in random access mode. ASCII files
    can also be processed one line at a time. Data may be moved to and
    from serial ports.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```








            █████  ██████            ████            ███
           ██   ██  ██  ██            ██            ██ ██
           ███      ██  ██            ██   ██ ███   ██       ████
             ███    █████   ██████    ██    ██  ██ █████    ██  ██
               ███  ████              ██    ██  ██  ██      ██  ██
           ██   ██  ██ ██             ██    ██  ██  ██      ██  ██
            █████  ███  ██           ████   ██  ██ ███       ████





                       PC-SIG DISK #2330, ALSO 2331





                                  INSTALLATION

     Installing SR-Info consists of making a  subdirectory on your hard disk
      and copying  the contents  of the  distribution  disk's to  it.   This
      subdirectory that SR-Info is installed in, is referred  to as the home
      directory. Next you need to decompress three files.

             SRINFO14.ZIP       CHARITY.ZIP      SRIMAN.ZIP

       example:   PKUNZIP SRINFO14.ZIP (press enter)

     Shareware distribution disk's consists of the following files:

            SRINFO14.ZIP        PKUNZIP.EXE
            CHARITY.ZIP         GO.BAT
            SRIMAN.ZIP          GO.TXT








```
{% endraw %}

## FASTART.DOC

{% raw %}
```
So you want to get down to business...
Good idea!!

We suggest that you print out this file. It's only a few pages long.

SR-Info can be run from floppy drives. Only the files SRI.EXE and SRI.MSG
are required. However this guide will assume a hard disk and drive C: as
an example.

Create a directory off the root and switch to that directory.
These DOS commands will do the job:
    CD \
    MD SRI
    CD SRI

Unzip the files SRI.ZIP, SRIHELP.ZIP, and DEMOPRGS.ZIP. The manual can be
unzipped later.

Enter SRI
   The signon screen will stay on until you press Function key 10. We
   want you to read about us.

When you see the cursor on the line following "1>" you are 'at the one prompt'
and ready to key in commands. Press the ENTER key after each command.

Try some. These assume you have unzipped the demo programs disk.

    USE COMDESC   this opens a file with one line about each command
                  and function
    USE#2 MEMBERS  this is a fictional membership list opened in select area 2
                   SR-Info allows six data files to be opened at one time.

    STAT           The status display show information about open data files,
                   memory variables, and more.

    Keep pressing the RETURN or ENTER key until you again see the 'one prompt'.

    SELECT 2       We want to view the member file before we do anything as
                 serious as looking at commands. Note that the 'one prompt'
                 should now be a 'two prompt'.

    EDIT           The EDIT command displays one record at a time. Take time to
             study the HELP window. The notation is concise.
             ^<HOME> means press down the CTRL key and the HOME key
             together (CTRL first,keep it down and press HOME).

             Try pressing ^<PgDn>
             This will add a record and take you into the APPEND mode--
             same as EDIT but adds new records. Why not add a few of your
             own 'members'. Back up with PgUp to return to edit mode.
             Press the END key to return to the two prompt.



    SELECT 1 Now lets look at the brief command reference.

    BROWSE   You now see a screen full of records, one line for each.
             The HELP window is almost the same as in EDIT. We have
             tried to keep the keystrokes the same for both commands.
                In fact, you can build many applications, with these as
             your 'work horse' commands. Learn the variations
             BROWSE TEXT and EDIT TEXT and your applications will
             become more customized and sophisticated.

             Experiment with the keystrokes. PgUp and PgDn move you
             between records. The Up and Dn arrows move you between
             fields of the same record. (so do the TAB and shift TAB
             keys - a new feature added since the HELP screens were last
             edited. CAUTION!-don't edit the SRI.MSG file. There are
             trailing blanks on many lines that affect screen layout.
             Make changes at your own risk!

             Press the END key or one of the other keys to end the BROWSE
             session. Most special keys (e.g. the function keys) will
             cause SR-Info to exit BROWSE or EDIT. The exit key is saved
             in a system variable :KEY and may be read by your programs.
                You can decide your next action based on the key used. (See
             the MENU demo program for an example.)

    MODIFY    We are getting serious here! Don't modify important files
              without first backing up! A power or system failure could
              result in lost data.
                 We are going to add two new fields to the COMDESC file.
              PgDn to a blank field and create a new field called USED.
                 Choose type C (character) and width 1.
                 Add a second field NOTES, also type C, but width 60.
              Press the END key. The last blank field will be ignored.
                 Type 3 is OK, so press the enter key and watch the
              modification occur.

    EDIT      -to look at modified records one at a time.

    Return to the command line or one prompt and enter

    BROW      Note that commands can be shortened to four characters. This
              will not work with functions.
                You new fields will not fit on the screen. To see them,
              press ^L. Of course, they are all blank filled until you
              add something. Go back to EDIT, find the EDIT and BROWSE
              commands and fill in the new fields. You want to keep doing
              this as you try new commands and functions.



   You say you don't like the order of presentation! Good!

   INDEX ON COMMAND TO COMDESC
              Go back to BROWSE. The order should be better. Of course
              you could modify the file again and add a new field to
              distinguish between commands and functions, say FUNCORCOM
              and index on FUNCORCOM+COMMAND. Or you could index on ...

    Let's run one of the demo programs.

    DO MENU        Note that DO launches a program from the command line.
               After a few seconds you should see a menu.
                  You can select in two ways. Move the 'light bar' up
               and down with the Up and Down keys. Press the ENTER key
               when the light bar is on your choice. Many other special
               keys (like the function keys) will also work. Note that
               option zero cannot be chosen this way.
                  The second selection method is the press a number key. This
               works for options 0 through 9. Options greater than 9
               must be selected by moving the light bar.
                  Experiment with the menu choices, and work your way back to
               the command line (the one prompt).

    QUIT       This gets you out of SR-Info

    SRI        The lesson is almost over. Get back to the command line.

    COMPILE MENU
               This creates a file MENU.CPL which SR-Info can read and
               execute very quickly. If there is no CPL file, we build
               one when a program is started (the few second delay
               mentioned above) and throw it away.

    DO MENU        You should see the program begin much more quickly.
               Back to the command line ...

    WRITE MENU
               You are now looking at the MENU.PRG file with the SR-Info
               built in editor. Note how to get help.
                  The editor is not designed to persuade you to throw away
               your word processor or text editor. It is a modest editor
               with some special strengths.
                  It is internal to SR-Info. So it is always available.
               Thus it can be invoked in your programs to allow users
               to create memos, etc. It can be used when programming
               to make corrections. In fact, when errors are detected
               and WRITE is invoked, the file opens positioned near the
               error.
                  The Alt-F combination can be used to format program
               files with regular indentations. We strongly advise
               use of this feature. It will help solve nesting and
               unmatched structure statement problems (e.g. a
               missing ENDIF to go with an IF)
                  The ^P combination provides program printouts with
               headers and form feeds skipping over perforations.
               Leave WRITE - the END key will exit saving changes.
               ^Q will exit without saving.


    HELP!
               VP-Info has on-line help. To get help from the command
               line just enter HELP. If you are clear on the topic
               you want help with specify that as well.
               e.g. HELP BROWSE

               If VP-Info recognizes the the first four characters
               of what you key in, that's the help you will get.
               Note that VP-Info looks for commands before functions.
               e.g. HELP REPL will get you help on the REPLACE command.
               You must key in HELP REPLACE( to get help with the replace
               function.

    That's it! Try the sample programs. Read the sample programs. Contact
    us by leaving mail with SUB ROSA at CANADA REMOTE SYSTEMS. We are in
    the vendors' conference.
       Technical support is available by phone to registered users.
    Call us at (416) 398-8414. (We will answer 'quickies' without registration.
    - but full support is part of what you buy when you register.)
       Good luck!
                                Sid Bursten and Bernie Melman


```
{% endraw %}

## NEWSLETR.DOC

{% raw %}
```
Sub Rosa Publishing Inc.             SR-Info/VP-Info Discozine Subscription Form

       Beginning in the middle of 1990, Sub Rosa Publishing will publish
                       a periodical NEWSLETTER-ON-A-DISK,
                           SR-INFO/VP-INFO DISCOZINE,
                      with articles, programming examples,
          answers to technical questions we've dealt with on the phone
                      and on various BBS conferences, etc.
                                       *
        Subscriptions cost $25.00 (two disks per year).

SEND ORDER TO:
     Sub Rosa Publishing Inc.          Phone Orders (2-5 Eastern, 11-2 Pacific)
     Unit 18-1170 Sheppard Ave. W.    (416) 398-8414    24-hr Fax (416) 630-7384
     Downsview, ON  M3K 2A3

SHIP TO:                                   REGULAR MAILING ADDRESS IF DIFFERENT:

         Name: ________________________          Name: ________________________

      Company: ________________________       Company: ________________________

      Address: ________________________       Address: ________________________

City, St, Zip: ________________________ City, St, Zip: ________________________

    Day Phone: (______) _______________   Night Phone: (______) _______________

QUANT ITEM                                             PRICE       TOTAL
===== ================================================ ==========  ===========

                                          Subscription $ 25.00     $__________

Extra for outside U.S./Canada                          $  5.00     $__________

                                              TOTAL (U.S. Dollars) $
                                                                   ===========
DISK SIZE: [_] 360k 5.25"   [_] 1.2m 5.25"   [_] 720k 3.5"

PAYMENT: [_] Check (U.S./Canada bank)  [_] VISA  [_] MC

     VISA/MC Number: _______________________  VISA/MC Expiry Date: ___/___/9___

    Name on Card/PO: __________________________________________________________

          Signature: ______________________________________________

All prices and offerings subject to change
without notice. All prices in U.S. Dollars.

Thank you for your order!
```
{% endraw %}

## ORDER.DOC

{% raw %}
```
Sub Rosa Publishing Inc.                                   SR-Info Order Form

SEND ORDER TO:
   Sub Rosa Publishing Inc.               PHONE (416) 398-8414
   Unit 18-1170 Sheppard Ave. W.      24-hr Fax (416) 630-7384
   Downsview, ONTARIO
   CANADA           M3K 2A3

SHIP TO:                                REGULAR MAILING ADDRESS IF DIFFERENT:

       Name: ________________________          Name: ________________________

    Company: ________________________       Company: ________________________

    Address: ________________________       Address: ________________________

City,St,Zip: ________________________   City,St,Zip: ________________________

  Day Phone: (______) _______________   Night Phone: (______) _______________

QUANT ITEM                                             PRICE       TOTAL
===== ================================================ ==========  ===========

_____ Set of registered diskettes                      $ 50.00     $__________
      includes one-half hour technical support
_____ SR-Info Manual                                   $ 40.00     $__________

Diskozine - newsletter on a disk 2 copies per year     $ 25.00     $__________
Original VP-Info Manual with detailed turorials and
   sample programs (Programs also on floppy disk.)     $ 35.00     $__________
Shipping/handling per order, U.S./Canada               $  5.00     $__________
Extra for outside U.S./Canada                          $  5.00     $__________
Extra for company purchase order (D&B rated only)      $  5.00     $__________
Rush handling availablle on request                                $__________

Ontario Orders (8% sales tax on disks and manuals only)            $__________

                                              TOTAL (U.S. Dollars) $
                                                                   ===========

DISK SIZE: [_] 360k 5.25"     [_] 720k 3.5"

PAYMENT: [_] Check (U.S./Canada bank)   [_] VISA    [_] MC   [_] Company PO

VISA/MC/PO Number: _______________________  VISA/MC Expiry Date: ___/___/9___

  Name on Card/PO: __________________________________________________________

Cardholder Signature: ______________________________________________

                                                    Thank you for your order!


```
{% endraw %}

## ORDER.TXT

{% raw %}
```
Sub Rosa Publishing Inc.                                   SR-Info Order Form

SEND ORDER TO:
   Sub Rosa Publishing Inc.               PHONE (416) 398-8414
   Unit 18-1170 Sheppard Ave. W.      24-hr Fax (416) 630-7384
   Downsview, ONTARIO
   CANADA           M3K 2A3

SHIP TO:                                REGULAR MAILING ADDRESS IF DIFFERENT:

       Name: ________________________          Name: ________________________

    Company: ________________________       Company: ________________________

    Address: ________________________       Address: ________________________

City,St,Zip: ________________________   City,St,Zip: ________________________

  Day Phone: (______) _______________   Night Phone: (______) _______________

QUANT ITEM                                             PRICE       TOTAL
===== ================================================ ==========  ===========

_____ Set of registered diskettes                      $ 50.00     $__________
      includes one-half hour technical support
_____ SR-Info Manual                                   $ 40.00     $__________

Diskozine - newsletter on a disk 2 copies per year     $ 25.00     $__________
Original VP-Info Manual with detailed turorials and
   sample programs (Programs also on floppy disk.)     $ 35.00     $__________
Shipping/handling per order, U.S./Canada               $  5.00     $__________
Extra for outside U.S./Canada                          $  5.00     $__________
Extra for company purchase order (D&B rated only)      $  5.00     $__________
Rush handling availablle on request                                $__________

Ontario Orders (8% sales tax on disks and manuals only)            $__________

                                              TOTAL (U.S. Dollars) $
                                                                   ===========

DISK SIZE: [_] 360k 5.25"     [_] 720k 3.5"

PAYMENT: [_] Check (U.S./Canada bank)   [_] VISA    [_] MC   [_] Company PO

VISA/MC/PO Number: _______________________  VISA/MC Expiry Date: ___/___/9___

  Name on Card/PO: __________________________________________________________

Cardholder Signature: ______________________________________________

                                                    Thank you for your order!


```
{% endraw %}

## VENDOR.DOC

{% raw %}
```


                      Is it a bird?  Is it a Plane? . . .


     Every few years a product hits the shareware field like a rocket.

     Compared to anything you've every seen in a shareware library it's:

                       * More powerful
                            * More versatile
                                 * More efficient
                                      * More effective

                           It's just happened again!

                                  Introducing
                                *** SR-Info ***
                    The most powerful data-oriented language
                          ever in the Shareware Market

     More than 50,000 copies of VP-Info have been sold worldwide since its
     1986 release by Adam Osborne's Paperback Software International.  Now
     published by the original developers, an upgrade to the language has
     just been released as shareware under the name SR-Info and the rave
     reviews are already coming in, including highest-possible "trophy cup"
     rating by Public Brand Software.

          Last year the PC Week Poll of Corporate Satisfaction found VP-Info
     (with fewer capabilities than the new SR-Info) ranked first among all
     database languages in value, among the leaders in documentation,
     ease of programming and ease of the user interface, and ahead of dBASE
     in all 12 poll categories!  So if you think of dBASE, FoxBase and
     Clipper as the last word in corporate-quality database languages,
     consider this:

          1.   Major aerospace, engineering and scientific companies rely
               on Info for accurate mathematics beyond the ability of any
               database language running on any DOS machine

          2.   Its unique data-entry processing methods make creating
               accurate WYSIWYG screens with full verification quick and
               easy

          3.   Form letters, labels and other output can include data from
               up to six data files simultaneously, incorporate complex
               computations, be automatically wordwrapped, and be printed
               to any printer, disk file or DOS device

          4.   You can handle over 65,000 records per file, with hundreds
               of fields and thousands of bytes per record.

          5.   Its versatile report generator handles up to six related
               data files, up to three levels of totalling, multi-line
               column headings, and lots more

          6.   It reads and writes not only all data files created by
               SR-Info, VP-Info, dBASE, Clipper and FoxBase, but it reads
               and writes any DOS file or device, including all ports.

          7.   Best of all, it performs typical programs far faster than
               its high-cost competitors.

          In fact, SR-Info is so powerful it should be called a general-
     purpose language in the same way as BASIC, C, PASCAL, COBOL and
     FORTRAN.  It's just better than any of them for most users because so
     many features are built-in, so that professional developments that
     take man-months or man-years using any of the above can be up and
     running in days or weeks with SR-Info.

          And, finally, SR-Info is completely upward compatible to VP-Info
     Professional and VP-Info Professional Network Edition.  Every SR-Info
     program runs without change in either of these professional
     development languages.

          The library release consists of two 360K disks, containing the
     complete program and its supporting files, comprehensive on-line help
     facility, 450-page command and function reference manual, installation
     procedures, a fast-start file with examples, numerous sample programs,
     and a completely documented application using several related data
     files.


     SR-Info complete with tech support, disks and 544-page manual. $90.00
     Tech support and disk set alone (450-page manual on disk). . . $50.00
     544-page bound manual alone. . . . . . . . . . . . . . . . . . $40.00
                                 Plus shipping

        (Note: The bound manual contains more than 500K of material not
                         included in the on-disk file.)

                                 Requirements:
                          PC/XT/AT, PS/2 or Compatible
                2 floppies or hard-drive (hard-drive recommended)
                          512K RAM, DOS 2.10 or higher

          Please don't hesitate to call us with any questions, comments and
     suggestions.  We can be reached by phone at (416) 398-8414, fax at
     (416) 630-7384, and CompuServe at 72010,1323.

                                        Bernie Melman and Sid Bursten
                                        SUB ROSA PUBLISHING INC.
                                        1170 Sheppard Ave. West - Unit 18
                                        Downsview, ON, Canada   M3K 2A3

            Members:  Association of Shareware Professionals

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2330

     Volume in drive A has no label
     Directory of A:\

    SRINFO14 ZIP    313096   7-11-90   1:11p
    GO       TXT      1221  11-19-90   1:06p
    PKUNZIP  EXE     22022  10-01-89   1:02a
    GO       BAT        43  11-19-90   1:02p
            4 file(s)     336382 bytes
                           23552 bytes free
