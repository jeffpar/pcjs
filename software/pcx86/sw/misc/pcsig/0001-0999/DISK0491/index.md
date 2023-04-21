---
layout: page
title: "PC-SIG Diskette Library (Disk #491)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0491/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0491"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CRYPTANALYSIS HELPER"

    This program is designed to aid in the decoding of simple substitution
    aristocrat ciphers; it suggests translations based on a comparison of
    letter frequencies, with the frequency of the first letters of words,
    all letters, last letters and one letter words in your secret message.
    It matches words with some letters decoded in its dictionaries
    which are written in 'C'.
    
    System Requirements:  64K RAM, one disk drive and a monchrome display
    
    How to Start:  Read CRYPTAID.DOC thoroughly before using this
    program. To run, enter CRYPTAID and hit <ENTER>.
    
    Suggested Registration:  $10.00
    
    File Descriptions:
    
    CRYPTAID DOC  Documentation-4 pages
    CRYPTAID EXE  Main program in Microsoft's "C" Ver 3.00
    SORTDCT  EXE  Sorts a dictionary
    AUTOADD  EXE  Adds words to dictionaries
    ADDTODCT EXE  Adds words to dictionaries
    ??       DCT  Dictionary of ?? letter words
    SAMPLE   CIP  Sample message that needs decoding
    SORTALL  BAT  Sorts all the dictionaries
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRYPTAID.DOC

{% raw %}
```

                  CRYPTANALYSIS HELPER
                          by
                     David Lovelock
                 11632 E Fort Lowell Rd.,
                    Tucson, AZ 85749.

I have a confession to make.  I know almost nothing about cryptanalysis.
While teaching myself "C", I was looking for a project on which to exercise
what I had learnt when my 13-year-old daughter received her latest copy of
GAMES magazine with some messages that needed decoding.  This was a natural
problem to tackle, but I am afraid I got a little carried away!  "C" is
like that!

This copyrighted program is TAX-FREE WARE.  It is in the public domain in
the sense that it may be distributed freely, without charge, by normal as
well as BBS means.  However, if you find it useful, you are asked to send a
$10 donation, which is TAX-DEDUCTIBLE, to

CCCC Search & Rescue Fund,
P.O. Box 32548,
Tucson,
AZ 85751-2548

All funds will be used to buy computing equipment for Search and Rescue.
None of this money goes to me or any other individual.  In fact, if you
send money to me I will donate it to the fund.  A program which I wrote for
the Commodore 64, called David's Directory Designer, has so far raised
about $5000 for Search & Rescue computing equipment, under the TAX-FREE
WARE concept.  Will MS-DOS users be as generous?

This program is designed to aid in the decoding of simple substitution
aristocrat ciphers, i.e. each letter in the original message is replaced
throughout by a unique cipher letter code, while punctuation and spaces are
unchanged.  An excellent introduction to cryptanalysis in general and
aristocrats in particular, can be found in CRYPTANALYSIS FOR MICROCOMPUTERS
by Caxton C. Foster, (Hayden Book Co., 1982, Chapters 7 and 8, about $15).
However, the programs mentioned there are not the ones presented here.

The programs supplied here are as follows:

CRYPTAID.DOC  - this file.
CRYPTAID.EXE  - the main program - written in Microsoft's "C", Ver 3.00.
02.DCT   \
03.DCT    \   - A total of 17 *.DCT
...       /   - dictionary files.
18.DCT   /
ADDTODCT.EXE  - file to append words to *.DCT files, with query.
AUTOADD.EXE   - file to append words to *.DCT files, without query.
SORTDCT.EXE   - sorts *.DCT files of up to 1,500 words.
SORTALL.BAT   - a batch file which sorts all *.DCT files.
SAMPLE.CIP    - a sample message that needs decoding.

They should all be on the same floppy, or all in the same sub-directory on a
hard drive.  Obviously everything runs faster if a hard drive is available.

Before using the program CRYPTAID, enter the message to be decoded in a
standard, unformatted, ASCII text file and  save it in the same directory
as CRYPTAID and all its supporting programs.  Let's assume you have saved
the file under the name "MESSAGE".  To invoke the deciphering aid, type

CRYPTAID MESSAGE

CRYPTAID will now load and display a title screen while it reads and
analyses the file MESSAGE.  While reading, CRYPTAID does a number of
things.
It counts the number of occurrences of each letter of the alphabet in the
entire text.
It counts the number of occurrences of each letter of the alphabet which
starts a word.
It counts the number of occurrences of each letter of the alphabet which
ends a word.
It counts the number of occurrences of each letter of the alphabet as a
single letter word.
It does a consonant line analysis, suggesting which letters might be
vowels, and which consonants.
(If you want to try the program immediately, then a sample message has been
included, called SAMPLE.CIP).

When it has read the entire text the main screen appears, divided into four
sections.

The top section initially contains the upper case alphabet corresponding to
the CIPHER text, with a blank line corresponding to the PLAIN text
translation table below it.  Below that there is a lower case alphabet
corresponding to the PLAIN text, followed by a blank line for the CIPHER
code table.  When a guess is made these blank lines will automatically
display the translation table.  Displaying the two way translation table is
particularly useful if the code-maker has used a keyword as the basis of
the cipher.  The convention adopted here, upper case for CIPHER text, and
lower case for PLAIN text (the translation) is used throughout.

The second section displays up to six lines, 468 characters, of the file
MESSAGE, in upper case.  Below each line is another line of characters,
initially blank, which holds the translation of the letter directly above
it.  It will be in lower case.  Word wrap is NOT in effect, so a word may
be split between two lines.  You can tell checking for spaces at the
borders.  Maybe, if there is demand, word wrap will be a future
enhancement.  Maybe!

The third section gives the title of the cipher file and the choice of
commands, while the fourth is the message area, which initially awaits you
command.  The commands are activated by using the Function Keys (F1 - F10)
and the SHIFTED function keys (S1 - S4).

Let's discuss these commands in order.

F1 IDEAS.  This will display a table of suggestions for the translation
table.  If a cipher letter has already been translated, an asterisk (*)
appears below it, and no suggestion is made.  If a letter from the plain
text has been chosen it will be absent from the table.  This table is based
entirely on the frequency count of total letters in the text.  According to
the Brown Corpus (see Foster, page 257) the letter "E" occurs most
frequently, and occurs 1250 times in every 10000 letters, i.e. it has a
12.5% frequency.  There is a table of frequency counts for all letters,
with "Z" occurring the least (10 times in 10000, i.e. .1%).  All letters
whose frequency in the cipher text are within 1% of the Brown Corpus
frequency, are the ones suggested for translation when F1 is selected.
Thus all letters in the cipher text which have a frequency count in the
interval 11.5% - 13.5% would be suggested as an "E".  A letter with a
frequency count greater than 13.5% would have no suggestion under it.

F2 TOTAL.  This is the frequency count of total letters in the cipher text.
It displays the letters of the cipher text in alphabetical order together
with the number of times the letter occurs in the text.  The number is also
presented as a percentage of the total letters.

F3 ALL.  This is the same display as F2, but sorted in descending order of
frequency.  The Brown Corpus frequency order of letters is also displayed
alongside.  This therefore represents another set of suggestions.  However,
if two or more letters of the cipher text have the same frequency count the
order within that group is not significant, nor therefore is the specific
suggestion.  Consequently the wise way to use this and subsequent tables is
to look at all text letters in the vicinity of the suggested letter, rather
than to treat the suggestion as absolute.

F4 FIRST.  This is similar to F3, except it is based on a frequency count
of the first letters of each word.

F5 LAST.  This is similar to F3, except it is based on a frequency count of
the last letters of each word.

F6 SINGLE.  This is similar to F3, except it is based on a frequency count
of the one letter words.

F7 VOWELS.  This displays the result of the so-called consonant line
analysis (Foster, pp 125 - 130), which offers suggestions for vowels and
consonants.  An excellent way to build up a feeling for the interpretation
and reliability of these (and other) suggestions is to get CRYPTAID to read
in a plain text message which has not been coded in any way and see how
good the correlation is!  An example at hand is this documentation file,
CRYPTAID.DOC.

F8 DATA.  This displays a screen full of useful data: the most common two
and three letter words and the frequency of the occurrences of successive
vowels.  For example if a word contains successive vowels, the combination
"AI" occurs 6.8% of the time compared to "IA"s 3.4%.

F9 MATCH.  As part of this package files named 02.DCT, 03.DCT, ..., and
18.DCT are included.  These are dictionaries (DCT) of two, three, ..., and
eighteen letter words.  When you select F9, you are asked to type in the
CIPHER text of the word you want to match.  The program works out the
length of that word, goes to the appropriate dictionary, and starts
searching through it for matches which are consistent with the pattern of
the word, and any letters already selected.  If it finds a match, it
displays the translation automatically on the screen.  If you want to
accept the choice, type "a".  To reject and continue looking press the
space-bar.  Any other key aborts the process.  This is a very useful aid. 
Later I'll explain how you can enlarge and personalize these dictionaries.

F10 SELECT. (This is displayed as F0 on the screen).  This is the choice
which allows you to select an individual letter's translation, and is the
main feature of the package.  It will not allow you to select the same
plain text letter for two different cipher text letters.  To deselect an
incorrect choice, assign the space bar to the cipher letter you want to
erase.

S1 QUIT.  Shifted F1 - ends the program immediately.

S2 CAESAR.  Shifted F2.  Perhaps the simplest aristocrat cipher is one in
which the cipher alphabet is a simple block movement of the text alphabet.
For example "a" might be "B", "b" would then be "C", and "z" would be "A". 
This is called a Caesar.  S2 steps through, and displays, successive Caesar
and reverse Caesar translations.

S3 CLEAR.  Shifted F3.  This immediately erases all you previous selections
for the plain text.

S4 SAVE.  Shifted F4.  When you have solved the cipher, this will save the
translated version of the first 6 lines of your cipher text, as an ASCII
text file under the name SOLUTION.SLN.  Actually it will append the new
message to any other message already there.  This is useful if you wish to
update your dictionaries, explained below.
There is no provision for reloading this saved text back into CRYPTAID.  If
you are part way through deciphering a message and have to break, the
easiest way to keep track of your place is to print the main screen to the
printer (SHIFT Prt Sc).  Also if you want a hard copy of your entire
solution, when completed, printing the screen gives it immediately.  Of
course if you don't have a graphics printer the border will print an
unusual sequence of letters!

CUSTOMIZING & ENLARGING THE DICTIONARIES.  There are three different ways
to do this.

1)  Count the number of letters in the word you want to add, and then load
the appropriate dictionary into any standard text editor, and add the words
you want.  (Words can be deleted in the same way.)  Make sure that each
word is in UPPER-CASE, and on a line by itself.  They need not be in
alphabetical order, although if you want to check whether your favorite
word is there, it is easier if they are sorted!  A sort routine, described
below, is supplied.  This technique is acceptable if you plan to add/delete
a number of words all of the same length, but is inappropriate for
multiple, different word length, additions.

2)  Create your own text file, say EXTRAS.DOC, containing the words you
want to add, again in upper-case, and each on a new line.  A good choice of
words to add would be those contained in Foster, Appendix G.

If you are absolutely sure all the words in this file are to be added, run
the program AUTOADD.EXE by typing

AUTOADD EXTRAS.DOC

This program will work out which dictionary the word should go in, and
check whether it is already there.  If it is present, it goes on to the
next word.  If it is absent it advises you and puts it at the end of the
correct dictionary.

If you want to be queried every time a word is absent then in place of
AUTOADD.EXE, you should run the program ADDTODCT.EXE by typing

ADDTODCT EXTRAS.DOC

On very large dictionaries with very large EXTRAS.DOC files, this process
can be a little slow , but just leave it alone and have some coffee!

3)  You can use the SOLUTION.SLN file in place of the EXTRAS.DOC example
in 2) above.  In this way, the more you solve, the larger your dictionaries
become.

A word of caution - DO NOT ADD WORDS WITH PUNCTUATION TO A DICTIONARY.  For
example, words like I'LL should not be in any of the dictionaries.

SORTING DICTIONARIES.
The program SORTDCT.EXE will sort any of the dictionaries provided they
have less that 1500 words.  To sort the dictionary 05.DCT enter

SORTDCT 05

It will read 05.DCT into memory, advise you how many words there are, sort
them (fairly quickly - a few seconds for 1500 words), save them in a file
called 05.SRT, delete any files called 05.BAK, rename 05.DCT to 05.BAK, and
then rename 05.SRT to 05.DCT.  It ends up by being pretty pleased with
itself!

There is a batch file, called SORTALL.BAT which will sort all 17
dictionaries if needed.

Finally, although this is designed to help solve aristocrats, it can also
be used to create them.  Enter the plain text as though it were a cipher,
and the encode it by selecting the translation, finally saving the encoded
message in the SOLUTION.SLN file.  That is how I created SAMPLE.CIP.

I hope you have as much fun using this program as I did writing it!

March 18, 1986.  Tucson, AZ.
```
{% endraw %}

## FILES491.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  491  CRYPTANALYSIS HELPER                                v1 DS2
---------------------------------------------------------------------------
 
CRYPTANALYSIS HELPER aids in decoding simple substitution aristocrat ciphers,
i.e.  each letter in the original message is replaced throughout by a unique
cipher letter code.  It suggests translations based on a comparison of standard
letter frequencies with the frequency counts of the first letters of words,
last letters of words, all letters, and one letter words in your secret
message.  It matches words with some letters decoded with its dictionaries of
words.  In "C".
 
CRYPTAID EXE  Main program in Microsoft's "C" Ver 3.00
CRYPTAID DOC  Documentation-4 pages
??       DCT  Dictionary of ?? letter words
ADDTODCT EXE  Adds words to dictionaries
AUTOADD  EXE  Adds words to dictionaries
SORTDCT  EXE  Sorts a dictionary
SORTALL  BAT  Sorts all the dictionaries
SAMPLE   CIP  Sample message that needs decoding
 
 
```
{% endraw %}

## NOTES491.TXT

{% raw %}
```
Program name:  CRYPTANALYSIS HELPER

Author name:  Davis Lovelock
Address:      11632 E. Fort Lowell Rd.
	      Tucson, AZ 85749

Telephone Number: Not given

Suggested Donation:  $10, as a tax deductible donation to:

		CCCC Search & Rescue Fund
		P.O. Boc 32548
		Tucson, AZ 85751-2548

The income received from this program will buy computer equipment.

Program Description:  CRYPTANALYSIS HELPER aids in decoding simple substitution
aristocrat ciphers, i.e. each letter in the original message is replaced
throughout by a unique cipher letter code.  It suggests translations based on a
comparison of standard letter frequencies with the frequency counts of the
first letters of words, last letters of words, all letters, and one letter
words in your secret message.  It matches words with some letters decoded with
its dictionaries of words.  Each dictionary lists words of a specific length.
Written in C for MS-DOS, the documentation does not list system requirements
or limitations.
















```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0491

     Volume in drive A has no label
     Directory of A:\

    02       DCT       488   3-14-86   7:24a
    03       DCT      1150   3-14-86   7:24a
    04       DCT      3744   3-14-86   7:24a
    05       DCT      6076   3-14-86   7:25a
    06       DCT      5712   3-14-86   7:25a
    07       DCT      6930   3-14-86   7:25a
    08       DCT      6910   3-14-86   7:25a
    09       DCT      5599   3-14-86   7:26a
    10       DCT      4596   3-14-86   7:26a
    11       DCT      2886   3-14-86   7:26a
    12       DCT      1834   3-14-86   7:26a
    13       DCT       945   3-14-86   7:26a
    14       DCT       400   3-14-86   7:26a
    15       DCT       153   3-14-86   7:26a
    16       DCT        18   3-14-86   7:26a
    17       DCT        19   3-14-86   7:26a
    18       DCT        20   3-14-86   7:26a
    ADDTODCT EXE     13040   3-14-86   7:34a
    AUTOADD  EXE     12944   3-15-86   3:20p
    CRYPTAID DOC     13486   3-18-86   1:28p
    CRYPTAID EXE     55296   3-18-86  12:16p
    FILES491 TXT      1073   4-29-86   7:59p
    GO       BAT       292   4-24-86   2:07p
    NOTES491 TXT      1048   1-01-80   2:50a
    SAMPLE   CIP       145   3-18-86   9:09p
    SORTALL  BAT       210   3-14-86   7:24a
    SORTDCT  EXE     46144   3-14-86   7:47a
           27 file(s)     191158 bytes
                          115712 bytes free
