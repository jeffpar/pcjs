---
layout: page
title: "PC-SIG Diskette Library (Disk #144)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0144/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0144"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "FABULA DISK 1 OF 2  (#145 SECOND DISK)"

    A fine collection of tools for communications users and others.  The
    SQIBM and USQIBM programs compress and expand files to save on costs
    when using modem transmission.  TALK450 shows how to add 450 baud
    capacity to your Hayes 300 modem.  There are other goodies like
    SCRNSAVE, which prevents phosphor burn on your monitor, and a series of
    batch files to give sorted directory listings.
    
    How to Start: To run a COM or BAT program simply type its name and
    press <ENTER>.  To read DOC files simply enter TYPE filename.ext and
    press <ENTER>.
    
    File Descriptions:
    
    The First Disk Contains:
    DNXSD    DOC  Documentation for .BAT files
    DN       BAT  Sorts Directory by fileName
    DXSAVE   BAT  Sorts Directory by eXtension and saves sorted
    DD       BAT  Sorts Directory by Date
    DS       BAT  Sorts Directory by Size
    DX       BAT  Sorts Directory by eXtension
    USQ      COM  Unsqueezes files
    SQ       DOC  Documentation for SQIBM
    SQ       COM  Squeezes files
    SCRNSAVE COM  Prevents screen "burn-in"
    SCROLLK  DOC  Documentation for SCROLLK
    TALK450  MRG  Adds 450 baud capacity to PC-TALK III
    SCROLLK  COM  Enables SCROLLLOCK key
    TALK450  DOC  Documentation for TALK450.MRG
    USQ      DOC  Documentation for USQIBM
    
    The Second Disk Contains:
    ASMGEN   COM  Converts EXE and COM to ASM files
    ASMGEN   DOC  Documentation for ASMGEN.COM
    BINSIX   DOC  Documentation for BINSIX.DOC
    COMP     BAS  Compares two tokenized BASIC files
    BINSIX   EXE  New squeeze program, 20% less then hex
    DIP-MEM  COM  Bypasses power-up memory test
    CROSSOPT      Data file for CROSSREF.EXE
    MAKEDATA BAS  Checksumed data files for COM/EXE
    DIP-MEM  DOC  Documentation for DIP-MEM.COM
    SQIBM    DOC  Documentation for SQIBM.DOC
    SQIBM    COM  Squeezes files for faster transfer
    RSVD     COM  Changes the size of VDISK
    WRT      DOC  DOC for WRTE.COM and WRTP.COM
    WRITECOM BAS  Converts data from MAKEDATA.BAS to EXE/COM
    UPNUM    COM  Shows if NumLock or CapsLock in use
    TABS     BAS  Puts tab codes in or removes them
    VDISK    COM  160k RAM disk program  (see RSVD.COM)
    USQIBM   DOC  Documentation for USQIBM.COM
    USQIBM   COM  Unsqueezes files squeezed by SQIBM
    UPNUM    DOC  Documentation for UPNUM.DOC
    WRTE     COM  Erases read-only attribute from a file
    WRTP     COM  Sets read-only attribute of a file
    XREF     BAS  BASIC program
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DNXSD.DOC

{% raw %}
```
                        DNXSD.DOC

	The batch files DN.BAT, DX.BAT, DS.BAT and DD.BAT write
sorted directories on the screen only. They sort on the directory
line starting with fileName, eXtension, Size or Date (mm/dd/yy).
The sorted directory can be stored by modifying the batch files,
as in the example of DXSAVE.BAT.
	These batch files have two dummy parameters: drive and
filename and extension restriction, if any. Thus, to sort the files
on drive E that satisfy the filename and extension restriction of
ABC?.*, sorting by size, one uses:
		DS E ABC?.*
The spaces between S, E and A are important.
	Note that if one sorts on a restricted set of files, such as 
with DX E *.COM, then that amounts to the same thing as DS E *.COM.

```
{% endraw %}

## SCROLLK.DOC

{% raw %}
```
SCROLLK:  This machine-language program is attached to DOS
whenever you run scrollk.com with the A> prompt showing. It
allows much better scroll control than <Ctrl-NumLock>. See
John Socha's article in Softalk for the IBM Personal Computer
for May 1983 for more information. Scrollk will be handy in 
using files under Directory 4: "Quick Looks at Distant BBSs".


```
{% endraw %}

## SQ.DOC

{% raw %}
```

SQ.COM - 

The purpose of this program is to squeeze all types of files. It is 
most effective on text files and least effective on binary files such
as .EXE and .COM.

The output file name is changed so that the middle letter in the 
filetype is changed to a "Q". For example, a file called  ABC.TXT
would be called  ABC.TQT. The input file is not changed.

To run the squeezer:

SQ filename.filetype               (i.e.  SQ  ABC.TXT)

There are no messages displayed while the program is running. Make sure
you have enough disk space to handle the output file (which can be 5% to
50% smaller than the original depending on the type of file).

```
{% endraw %}

## USQ.DOC

{% raw %}
```


USQ.COM - 

The purpose of this program is to un-squeeze processed by  the SQ.COM
program. This program will recontruct the files to their original state
before compression.

You must specify the input and output files names (if missing, you
will be prompted for them).

To run the un-squeezer:

USQ d:filename.filetype d:newfilename.filetype   (i.e.  SQ  ABC.TQT ABC.TXT)

After specifying the file names, you will be asked if this is a text file.
Reply as appropriate. The replies are Y or N.

Make sure you have enough disk space to handle the output file which could
be up to twice the size of the input file.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0144

     Volume in drive A has no label
     Directory of A:\

    DD       BAT        26   4-14-84   2:44p
    DN       BAT        22   4-14-84   2:41p
    DNXSD    DOC       752   4-16-84   3:55p
    DS       BAT        26   4-14-84   2:43p
    DX       BAT        25   4-14-84   2:43p
    DXSAVE   BAT        34   4-16-84   3:48p
    SCRNSAVE COM       384  12-21-83   1:12p
    SCROLLK  COM       251   3-07-84   8:33a
    SCROLLK  DOC       372   4-01-84   6:02p
    SQ       COM     14336   3-28-84   4:11a
    SQ       DOC       768   3-28-84   4:12a
    TALK450  DOC      7424   3-07-84  11:02p
    TALK450  MRG      1024   3-07-84  10:56p
    USQ      COM     22016   3-17-84  10:02p
    USQ      DOC       637   3-28-84   4:38a
           15 file(s)      48097 bytes
                          108032 bytes free
