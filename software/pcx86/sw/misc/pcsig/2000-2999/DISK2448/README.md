---
layout: page
title: "PC-SIG Diskette Library (Disk #2448)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2448/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2448"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SCRAMBLE"

    Scramble plays like a familiar crossword board game of a similar name.
    It features stunning EGA graphics, optional mouse support, and a 33,000
    word dictionary, along with utilities to modify the dictionary or use
    your own dictionary.  Games can be played by one to four human or
    computer players.  If all the players are computer players, Scramble
    will play against itself.
    
    An infinite undo feature is included to let you undo all the words back
    to the first word.  A stats screen allows you to see what letters have
    been played, what words were made, and the point value for each word.
    Scramble can be played at two different skill levels.  You've really got
    to see this one!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DEDICT.DOC

{% raw %}
```
DEDICT.EXE will decode the Scramble dictionary so that you can look
at it, edit it, and re-encode it with ENDICT.EXE.
 
The proper way to use dedict is like this:
 
      dedict <infile name> <outfile name>
 
where the infile name is the name of the dictionary to be decoded
and the outfile name is the name of the decoded dictionary.  If a
file already exists in the directory with the same name as the
outfile name, dedict will ask you if you want to overwrite it.
     
For example, to decode the default Scramble dictionary, type this:
 
      dedict scramdic.dct scramdic.out

You can then look at scramdic with any text editor.  You can add
words (in alphabetical order!) or edit the words that are already
there.  For information on how to re-encode the dictionary, see the
file ENDICT.DOC.

```
{% endraw %}

## ENDICT.DOC

{% raw %}
```
ENDICT.EXE is a utility program designed to allow the user to insert
the dictionary of their choice into the Scramble game.  This would be
expecially useful if you want to use this game in some language other
than English.

The proper way to use endict is like this:
 
      endict <infile name> <outfile name>
 
where the infile name is the name of the dictionary to be encoded
and the outfile name is the name of the encoded dictionary.  If a
file already exists in the directory with the same name as the
outfile name, endict will ask you if you want to overwrite it.

The input dictionary should look something like this:

aback
abacus
abacuses
abalone
abandon
abandons
abase
abash
abasing
abate
  .
  .
  .

The words must be in alphabetical order, in lower case letters, with 
one word per line and no punctuation.  Words can not have more than 8
letters.

The output file needs to be named scramdic.dct in order to be used
with in Scramble game.  If you want to experiment with other
dictionaries, it is recommended you either put them in different
directories, or give them different names, such as scram1.dct,
scram2.dct, etc.

```
{% endraw %}

## FILE2448.TXT

{% raw %}
```
Disk No: 2448                                                           
Disk Title: Scramble                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: Scramble                                                 
Author Version: 1.0                                                     
Author Registration: $15.00                                             
Special Requirements: 512K RAM, EGA, and true 100% compatibles.         
                                                                        
Scramble plays like a familiar crossword board game of a similar name.  
It features stunning EGA graphics, optional mouse support, and a 33,000 
word dictionary, along with utilities to modify the dictionary or use   
your own dictionary.  Games can be played by one to four human or       
computer players.  If all the players are computer players, Scramble    
will play against itself.                                               
                                                                        
An infinite undo feature is included to let you undo all the words back 
to the first word.  A stats screen allows you to see what letters have  
been played, what words were made, and the point value for each word.   
Scramble can be played at two different skill levels.  You've really got
to see this one!                                                        
                                                                        
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
║                <<<<  PC-SIG Disk #2448  SCRAMBLE  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print documentation and installation instructions, type:             ║
║                    COPY SCRAMBLE.DOC  (press Enter)                     ║
║                                                                         ║
║ To begin SCRAMBLE, type:  SCRAMBLE  (press Enter)                       ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1990, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2448

     Volume in drive A has no label
     Directory of A:\

    DEDICT   DOC       819   9-18-90   1:45p
    DEDICT   EXE     12689   9-18-90   1:31p
    ENDICT   DOC      1176  11-01-90  10:45a
    ENDICT   EXE     13691  11-01-90  10:45a
    FONT     BIN       755   7-31-90   5:07p
    GO       BAT        40   1-01-80   6:00a
    SCRAMBLE EXE     95115  10-30-90   9:30p
    SCRAMBLE PBM     10980  10-25-90   6:28p
    SCRAMDIC DCT    132059  11-01-90  10:49a
    SCRAMBLE DOC     30558  12-05-90   7:19a
    FILE2448 TXT      1999  12-06-90   4:17p
    GO       TXT       925  12-05-90   7:37a
           12 file(s)     300806 bytes
                           17408 bytes free
