---
layout: page
title: "PC-SIG Diskette Library (Disk #2166)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2166/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2166"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "COIN COLLECTOR'S DATABASE"

    Coin collections can be fun. But if you need information on one of
    your coins, it's usually quite a chore. Not with the COIN COLLECTOR'S
    DATABASE.
    
    COIN COLLECTOR'S DATABASE is capable of recording up to one million
    entries tracking the type of coin, year and place of mint, condition
    and quantity minted; face value; present value and country of mint --
    all with a couple of keystrokes. Once entered, you'll never have to
    thumb through a coin folder again. The system will report on the
    status of your collection just as easily.
    
    COIN COLLECTOR'S DATABASE comes with a sample file of coins,
    context-sensitive help screens to assist you in finding your way around
    and, as a bonus, a text file viewer to ease documentation reading.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2166.TXT

{% raw %}
```
Disk No: 2166                                                           
Disk Title: Coin Collector's Database                                   
PC-SIG Version: S1                                                      
                                                                        
Program Title: Coin Collector's Database                                
Author Version: 1.01                                                    
Author Registration: $25.00                                             
Special Requirements: 512k but 640k, hard drive, and EPSON compatible pr
                                                                        
If you find yourself for more than just a couple days holding onto the  
small change that gathers in the corner of your pockets, or the odd     
coinage you might find on a street corner (or until you have to make    
a phone call), you may consider yourself a collector.  You'll find      
yourself gathering coins, coin envelopes, and coin display folders.     
Your collection will grow without end. However, if you later want to    
find information on one of your coins, it will be quite a chore. Not    
with the COIN COLLECTOR'S DATABASE.                                     
                                                                        
COIN COLLECTOR'S DATABASE is capable of recording up to one million     
entries regarding: Type of coin; Year and Place of Mint; Condition;     
Quantity Minted; Face Value; Present Value and Country of Mint - all    
with a couple of keystrokes. Once entered, you'll never have to thumb   
through a coin folder again. The system will report on the status of    
your collection just as easily.                                         
                                                                        
COIN COLLECTOR'S DATABASE comes with a sample file of coins, context    
sensitive help screens to assist you in finding your way around and,    
as a bonus, a text file viewer to ease documentation reading.           
Registered users will receive the most current version and a printed    
manual.                                                                 
                                                                       
                                                                        
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
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk                   >>>>                       ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, create:  subdirectory on hard drive                   ║
║                     copy:  COIN_DB.EXE to subdirectory                  ║
║   from subdirectory type:  COIN                                         ║
║                                                                         ║
║ To print documentation, type: COPY PC_SIG.DOC PRN                       ║
║   				COPY COIN_DB.DOC PRN                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PC_SIG.DOC

{% raw %}
```
                                 INTRODUCTION

    Features

    As  a  coin collecting enthusiast examines his valuable possessions and
    places a value on each coin, according  to  manuals  purchased  in  the
    local  hobby  store, the most common method of managing the information
    gathered is in a notebook.  For the collector to  locate  a  particular
    coin, or group of coins, the task of skimming each page for the item is
    quite  time  consuming.   The  ultimate solution for this task would be
    some type of system to allow the  connoisseur  to  rapidly  add,  edit,
    locate and print this information.

    The  Coin  Collector's  Database Version 1.01 has been designed to make
    coin collecting less complicated for the coin collecting enthusiast  by
    placing  all  of  the  available  coins into a fast and easy to operate
    system.  This system has been designed for ease of use by any  computer
    user,  experienced  or  not, with speed, accuracy and efficiency as the
    main attractions.

    The Coin Collector's Database Version 1.01 will allow you to  enter  up
    to one million coins, or until you reach the maximum space available on
    your  hard  drive,  with  only a couple of keystrokes per entry.  Rapid
    searching of one coin or a group of coins can be accomplished by  using
    one  of the three available methods.  Reports can easily be produced by
    simple keystrokes to any EPSON compatible dot matrix printer in a  sort
    order selected by you.

    The Coin Collector's Database Version 1.01 contains a context sensitive
    help  system  and  an  on-screen  help  line  to  eliminate the need to
    memorize the keystrokes needed to operate the system.  To  make  things
    easier,  all  functions  are accessed by the function keys available on
    your standard keyboard.

    Files

    The  Coin  Collector's  Database  Version  1.01  is  distributed on one
    diskette. You should find the following files on this diskette.

     READ.ME        Additional information.

     INSTALL.EXE    Installation routine.

     COIN_DB.EXE    Archive of the Coin Collector's Database Version  1.01.
                    The following files are contained in this archive.

     COIN.EXE       Coin Collector's Database Version 1.01 main program.

     COIN.HLP       Help file.

     COINS.DAT      Database used in maintaining your coin collection. This
                    file will be created upon initialization of the program.

     COINS.IX       Index  used in rapid searching and general maintenance
                    of the database.  This file will be created upon
                    initialization of the program.

     VIEWER.EXE     BONUS.  Text  file viewer that allows you to view or
                    print text files.  To  operate  type  VIEWER  from  the
                    DOS  prompt  and  press  <F1> for help.  The syntax for
                    the  program's  command  line is VIEWER <filename>.  If
                    you do not include a filename or  place  wild-cards  on
                    the command  line  the  system  will  display  a  small
                    directory window to allow you choose your file from.

     COIN_DB.DOC    Documentation for the Coin Collector's Database Version
                    1.01.

     DOCS.BAT       Batch  file  allowing  you  to  view  or   print   the
                    documentation.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2166

     Volume in drive A has no label
     Directory of A:\

    COIN_DB  EXE    224485  12-17-89   8:59p
    READ     ME       1535  12-17-89   9:33p
    INS_COIN BAT        32   2-07-90  10:02a
    INSTALL  EXE     21096  12-17-89   9:24p
    PC_SIG   DOC      3512   1-01-80   3:54a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       747   1-01-80   4:00a
    FILE2166 TXT      2739   4-26-90   9:24a
            8 file(s)     254184 bytes
                           63488 bytes free
