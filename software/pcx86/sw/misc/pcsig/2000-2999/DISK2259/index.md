---
layout: page
title: "PC-SIG Diskette Library (Disk #2259)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2259/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2259"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PTE, THE PROGRAMMER'S TEXT EDITOR"

    PTE is a fast full-screen programmer's editor with Wordstar-like
    commands, a complete command menu, multiple windows (limited only by
    memory), and an ``intelligent file finder.'' The editor includes all of
    the usual block commands, including copy to printer or file, block
    import and export, insert & delete, undo, autoindent, wordwrap, etc.
    
    PTE may be entered from the command line or the menu. You don't even
    have to have the correct spelling of the file to be edited!  PTE
    maintains a ``directory'' of each drive that it uses for fuzzy
    searching for filenames.
    
    File size is limited only by memory, as are the number of auxiliary
    edit or import windows opened.  PTE is intended for programmers,
    developers, and desktop publishers or anyone else looking to create
    ASCII files. It is suitable for all levels of users.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2259.TXT

{% raw %}
```
Disk No: 2259                                                           
Disk Title: PTE, The Programmer's Text Editor                           
PC-SIG Version: S1                                                      
                                                                        
Program Title: PTE                                                      
Author Version: 1.2                                                     
Author Registration: $39.95                                             
Special Requirements: CGA.  A hard drive is recommended.                
                                                                        
PTE is a fast full screen programmer's editor with Wordstar-like        
commands, a complete command menu, multiple windows (limited only by    
memory), and an "intelligent file finder". The editor includes all of   
the usual block commands, including copy to printer or file, block      
import and export, insert & delete, undo, autoindent, wordwrap, etc.    
                                                                        
PTE may be entered from the command line or the menu. You don't even    
have to have the spelling of the file to be edited right! PTE maintains 
a "directory" of each drive that it uses for fuzzy searching for        
filenames.                                                              
                                                                        
File size is limited only by memory, as are the number of auxiliary edit
or import windows opened.  PTE is intended for programmers, developers, 
and desktop publishers or anyone else looking to create ASCII files. It 
is suitable for all levels of users.                                    
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PTE.DOC

{% raw %}
```
Welcome to PTE the Programmer's Text Editor by The League Group, Inc.

This shareware version of PTE is complete, with a full screen editor that has
both Wordstar style and PTE key commands, a full command menu, multiple editing windows, block import, a full help file and a "smart file finder".

You may enter the editor via the command line: PTE <path filename> or via the main menu (PTE). In either case, if the file you request is not in the current directory, or if the name is mispelled, PTE will access its own "directory" and attempt to find the file via "fuzzy search". If you do not select any of the files found by the file finder, just press <Esc> to create a new file or return to the main menu.In all cases you will be guided by on screen prompts. At any filename prompt, you may press <Enter> to call up a directory display from which you may select a filename.

The main menu selection "Load PTE Directory" allows you to maintain your program files on or to extend the search to multiple hard disks. For maximum memory, you may unload or erase from memory one or more of the PTE directories. In general, you need take no direct action regarding the file finder - it works pretty much by itself. 

Once you have a file loaded into the editor, you may call up an extensive help file by pressing F1.

You may open additional editing windows by pressing F8 and entering a filename at the prompt or pressing <Enter> for a directory selection. F5 will resize the Auxiliary Edit window. You can have as many Aux. Edit windows open with files loaded as memory allows. You may also open an auxiliary file for block copying from either the main editor or any of the Aux. Edit windows.

A registered version of PTE is available from The League Group, Inc. for $39.95. It includes a printed manual, support for EGA and VGA moniters, and PTE with the additional ability to access and read/write dBaseIII and Lotus 123 files.

Registered users are also eligible for LGI's finder fee program - if a user that you recommend purchases a registered version of PTE from us, we will send you $5.00.

When you register, please indicate your favorite compiler/linker, as we hope to update PTE with support for the most widely used development programs. We also invite comment from our users as to other improvements or features to be added to PTE or as to other programs that you might like to see on the market.

			The League Group, Inc.
			P.O. Box 3568
			Winter Springs, FL 32708
			
To register PTE, mail the following form to LGI. You may print the form by 
loading this file into PTE, scroll to the following form and press Alt F8 at the beginning of the form. Note your printer must be on!
******************************************************************************



The League Group, Inc.			Date: _______________________
P.O. Box 3568
Winter Springs, FL 32708

Enclosed, please find my check/MO for $_______ for ______ copies of PTE 1.5 at $39.95 per copy (s&h included).

Mail the registered version(s) of PTE along with the manual(s) to:

	Name: ____________________________________________________
	
	Address: _________________________________________________
	
		__________________________________________________
		
		__________________________________________________			


My usual compiler is ___________________________________________

My usual linker is ______________________________________________

I would like to see PTE support _________________________________

Comments: _______________________________________________________

	_________________________________________________________
	
	_________________________________________________________
*****************************************************************************

*****************************************************************************
Coming soon:

  LGI's Expert System Development Program 

  LGI's Smart Hypermedia Database Manager 

  The International Database Service, an interactive, hypermedia, online     database developed by LGI. 
                
                  1-900-860-INFO after March 31,1990
         (no registration fees, $2.00 1st min, $1.00 ea.adt'l.min.) 
*****************************************************************************
	
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2259

     Volume in drive A has no label
     Directory of A:\

    PTE      EXE    144354   1-29-90   2:15p
    PTE      SYS      2134   1-25-90   5:12p
    PTEHLP   HLP      4804   1-26-90   1:28p
    PTEHLP   DEF       664   1-26-90   1:29p
    PTEED    HLP      1248   1-25-90   7:26p
    PTE      DOC      4328   1-26-90   3:01p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       573   7-18-90   7:07a
    FILE2259 TXT      2295   7-18-90   3:33p
            9 file(s)     160440 bytes
                          156672 bytes free
