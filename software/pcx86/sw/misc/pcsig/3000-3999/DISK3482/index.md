---
layout: page
title: "PC-SIG Diskette Library (Disk #3482)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3482/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3482"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## LM.DOC

{% raw %}
```


                            /---------------------------\
                            | Lha Master - version 1.1b |
                            |            by             |
                            |           Usoft           |
                            \---------------------------/

          CONTENTS
          --------
               I - What is Lha Master, and what is Usoft?
              II - Operation of Lha Master.
             III - Ordering information
              IV - Future products
               V - Technical notes, credits, revision history, etc.

          SECTION I
          ---------
          What is Lha Master?

          Quite simply, Lha Master is a shell for Lha (by Yoshi).  Lha is a
          file archiver and compressor.  Lha is similar to PKZip (by Phil
          Katz), but Lha achieves higher compression ratios.  That is to
          say, Lha can make your files smaller than PKZip can, giving you
          more free disk space than you had before.  Lha is a command-line
          program, with many different switches.  Lha Master, however, is a
          menu-driven program.  Very similar in use to Microsoft Works or
          Quattro Pro, Lha Master makes use of pull-down menus, while
          allowing keyboard shortcuts.  This makes Lha easy to use and puts
          the power of Lha into the hands of all computer users.

          NOTICE:  Lha Master must have Lha to run correctly!  Lha can be in
                   the same directory as Lha Master, or in a directory
                   listed on your PATH statement.  If you do not have a
                   copy of Lha, registering Lha Master will bring you the
                   latest version of Lha Master as well as a copy of Lha. 

          What is Usoft?

          Usoft is a software company founded in 1991 by Steven R.
          Mathesius.  Usoft was created in the hopes of providing software
          that everyone could use.  Lha Master is the first product
          released by Usoft.  Usoft encourages Users to comment on Lha
          Master (from here on known as LM) and any other Usoft products.
          Send comments to the address listed in section III below.  In
          short, Usoft was created to be the software company where U ARE
          THE MOST IMPORTANT FACTOR.

          SECTION II
          ----------
          Use and operation of Lha Master:

          LM is very simple to use!  I hope you don't even need to read
          this.  But just in case, I'll detail how to use LM.  When you
          start LM you will see a notice informing you that you are using
          an evaluation copy (unless you've registered!).  Simply click on
          Ok or press ENTER after reading the notice to see the main
          screen.  At the top of the screen is a bar, with two titles:
          Archive and Help.  Press ALT to activate the menus.  When Archive
          is highlighted, the menu will drop down, displaying menu options:

          ADD FILES
          EXTRACT FILES
          LIST FILES
          DELETE FILES
          -------------
          EXIT

          To create a new archive choose ADD FILES.  A dialog box will
          appear, asking if you wish to create a new archive or add files
          to an existing archive.  We want to create a new archive, so
          simply hit enter.  A new dialog box appears, requesting the name
          of the archive you want to create.  Type in the name you want the
          archive to have.  You can also enter a path.  Note that the
          default extension is LZH.  You don't have to enter the LZH, just
          a file name.  Press enter or click on Ok, and another dialog box
          appears, requesting the files you want to compress.  Simply
          pressing enter here will compress all the files in the current
          directory.  You can enter a name of one file you want to
          compress (e.g., test.doc), a name with a wild card (test.*), or
          two wild cards (*.*).  You can also enter a path in front of a
          file name or wild card.  Once you have entered a file or wild
          card press enter.  Lha Master will put Lha to work, and compress
          the files you indicated.

          If you chose ADD FILES from the ARCHIVE MENU and then chose ADD
          TO AN EXISTING ARCHIVE, the procedure would differ little.  You
          would still be asked to enter an archive name, but after you
          enter the archive name a list box would appear, allowing you to
          choose which archive from that list you want to work with.  After
          you have chosen the archive you wish to work with, a dialog box
          requesting file information would appear.  Again, LM would put
          Lha to work, but instead of creating a new archive, Lha would add
          the files you indicated to an existing archive.

          The EXTRACT FILES, LIST FILES, and DELETE FILES commands work
          very similarly to the ADD TO AN EXISTING ARCHIVE command.
          EXTRACT FILES would extract files from an archive, LIST FILES
          lists files in an archive, and DELETE FILES deletes files from an
          archive.

          The best way to really learn how to use Lha Master effectively is
          to experiment.  Lha Master won't format your hard drive, or
          delete files (except those in archives), so don't worry.  Lha
          Master is versatile but simple.  Try creating an archive in a
          different directory, compressing files from another directory,
          while you are in yet another directory.  Lha Master is easiest to
          use when you put LM.EXE in a directory listed on your PATH.  Then
          no matter which directory you are in you can simply type LM and
          Lha Master pops up, ready to go.  This makes it easy to compress
          files in every day use.  If you happen to be in the WORD
          directory and decide that you have 72 letters that you probably
          won't need, simply type LM, and compress them into an archive!
          When you want to look at them, use LM again and extract them (or
          one of them).  LM is so simple you'll probably find yourself
          compressing things quite often.

          SECTION III
          -----------
          Ordering information:

          Ordering Lha Master brings many benefits to U, the User:

               * The latest, registered version of LM on disk, delivered to
                 your door.
               * Notices of upgrades
               * Notices of new products
               * A feeling of pride and a clear conscience in that you did
                 the right thing and registered.
               * Eternal thanks from me, Steven R. Mathesius

          By registering shareware you encourage programmers to use
          shareware as a distribution method.  Not registering will save
          you $10.00 now, but discourages programmers from developing
          better products, and instead encourages them to produce
          commercial software (usually with a price tag upwards of $30.00).
          So come on, order LM!

          The version you receive on disk will be the latest version.  The
          pesky registration notice (at startup) will be removed, and the
          ABOUT LM dialog box will display your name.  The main screen will
          also display your name (and company if you indicated a company on
          the order form).

          To order Lha Master:

          Have your printer on-line and have paper loaded, and then from
          the DOS command line type ORDERME

          OR

          Send a check or money order for $10.00 (or more!) to:

          Usoft
          329 N47th Rd.
          Mendota, IL  61342

          Be sure to include the shipping address, daytime phone, and
          preferred disk size (3.5" or 5.25").  Thanks for registering!

          Notice to corporate or educational institutions:

          The normal registration fee is $10.00.  If you are registering
          for more than one computer the fee varies.  Pricing structure is
          show below:

          * Site license for the use of Lha Master:
          (includes one program disk)

           2 to 10 computers ..... $8.00 each
          11 to 25 computers ..... $7.00 each
          26 to 99 computers ..... $5.00 each

          For registering 100 computers or more write for pricing
          information.  Extra program disks are available for site licenses
          at the price of $2.00 per computer.

          You are free to copy and distribute Lha Master for NONCOMMERCIAL
          use if, and only if:

          No fee is charged for use, copying, or distribution.

          Lha Master is not modified in any way.

          Disk vendors and user groups may charge a nominal fee not to
          exceed $10.00 for expenses and handling while distributing Lha
          Master.

          SECTION IV
          ----------
          Future products and upgrades:

          What can U expect from Usoft in the future?  In the near future U
          can expect LM to include features to test the integrity of an
          archive, and to create a self-extracting archive, and several
          other new features.  On-line help will be expanded and upgraded.
          The user interface will be improved.  Point and click file selection
          will be added.  Support might be extended to include not only Lha
          as the primary file compressor, but also ZIP, ARC, ZOO, PAK, ARJ,
          etc.  In the long-term U could see a Windows version of LM, an OS/2
          2.0 specific version of LM, educational products, and OS/2 2.0 based
          applications.  Usoft is committed to providing what U, the Users
          want.  If U ask for something, Usoft will try to provide what U
          want.  If U want something specific, don't hesitate to ask, Usoft
          is always looking for new programming opportunities.  I feel that
          OS/2 2.0 is the operating system of the future.  OS/2 2.0 is much
          better than DOS, or DOS/WINDOWS.  In light of that, Usoft will be
          working on several OS/2 2.0 based programs.  The first OS/2 2.0
          based program from Usoft will probably be LM.  A character-mode
          version of LM will be available shortly for OS/2.  A true OS/2
          2.0 based version of LM, using the graphical user interface is
          still several months away however.  Again, I want to hear what U,
          the Users have to say, so please write.

          SECTION V
          ---------
          Technical notes and credits:

          Lha Master was programmed in BASIC using the Microsoft
          Professional Development System, version 7.1.

          Lha Master will soon be available in an OS/2 version.  This
          version will be a straight port from the DOS version, and will
          not take advantage of OS/2 2.0's multithreading capabilities or
          graphical user interface.  A later version of Lha Master will be
          OS/2 2.0 specific, and will be programmed to use multithreading
          and the graphical user interface.

          KUDOS TO:
          ---------
          God, for being God.
          Scott Mosier, for beta-testing and offering ever insightful
               wisdom and programming help.
          Kelly Davis, for beta-testing and programming help.
          IBM, for developing OS/2 2.0, the ultimate operating system!

          REVISION HISTORY:

          Version .9 - All major functions operable.  Build from here!

          Version 1.0 - Stable enough to call a product, many bugs to fix...

          Version 1.1 - First public version, screen clearing codes fixed,
                        mouse support improved, on-line help added.

          Version 1.1b - Fixed mouse support at startup:  Don't have to run
                         credit screen for mouse to work!  Fixed ListFile
                         function.

          DISCLAIMER:

          Usoft hereby disclaims all warranties relating to this software,
          whether expressed or implied, including without limitation any
          implied warranties of merchantability or fitness for a particular
          purpose.  Usoft will not be liable for any special, incidental,
          consequential, indirect or similar damages due to loss of data or
          other reason.

          Lha Master - version 1.1
          (c) Copyright Usoft 1992




```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
NOTICE TO DISK VENDORS:
-----------------------
You are free to copy and distribute Lha Master for NONCOMMERCIAL use if, and 
only if:

* No fee is charged for use, copying, or distribution.

* Lha Master is not modified in any way.

A nominal fee not to exceed $10.00 for expenses and handling while distributing
Lha Master may be charged.

You are free to compress/archive Lha Master for distribution if the following
files are included in the archive:

LIST.COM
LM.DOC
LM.EXE
ORDER.FRM
ORDERME.BAT
VIEWDOC.BAT
README.BAT
README.NOW

This file, VENDOR.DOC, need not be included in the archive.

Please see LM.DOC for instructions and further information.  Thank you!

NOTICE:

Lha Master muust have access to LHA.EXE in order to run correctly.  if you do
not have Lha in your disk collection I strongly encourage you to include it.
For your convenience I have included a copy of the latest version of Lha and
its associated files in a directory on this disk.

If you wish to distribute Lha you can find the latest version and its files
in the A:\LHA directory.  These files are direct from an archive and all files
associated with Lha are included in this directory.  I in no way am
responsible for distributing Lha.  I am merely aiding disk vendors that may not
have the latest version of Lha in their disk collection.

LHA IS NOT A PART OF LHA MASTER!  Lha is a completely separate program, written
by a different programmer (Yoshi).  If you are going to distribute Lha and Lha
Master on the same disk, please make it clear that they are different programs
from different authors.  Thank you!

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3482

     Volume in drive A has no label
     Directory of A:\

    LM       DOC     12814  10-16-92   6:48p
    LIST     COM     20951   9-03-90   7:51a
    LM       EXE    131658  10-15-92   3:53p
    README   BAT        46  10-09-92   6:27p
    ORDER    FRM      1997  10-08-92   4:54p
    ORDERME  BAT       211  10-03-92   1:18p
    README   NOW      1108  10-12-92  12:06p
    VIEWDOC  BAT        43  10-09-92   6:27p
    VENDOR   DOC      1643  10-16-92   7:00p
    GO       BAT        96   4-12-93   4:28p
           10 file(s)     170567 bytes
                          145408 bytes free
