---
layout: page
title: "PC-SIG Diskette Library (Disk #709)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0709/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0709"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-CRYP2, DISKMASTER, & INSTACALENDAR"

    Is computer security important to you?  Look into PC-CRYP2.  First, it
    explains and demonstrates the Vernam encryption and decryption process
    of using a password as a numeric seed for encoding computer information.
    Second, it performs the encryption and decryption of your files.
    
    No one will be able to access your data except you!
    
    Tired of trying to read those scribbled labels on your disks? Print
    disk labels on 5" x 1-7/16" label stock. This is the ideal size for a
    floppy disk.
    
    INSTACAL can produce a full-page calendar for any month, or entire year,
    from 1600 to 2050 A.D.  You can print the calendar or show it on the
    screen.  The documentation is brief but gives all the help needed to use
    the program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES709.TXT

{% raw %}
```
Disk No  709
Program Title: DMASTER, PC-CRYP2 and INSTACALENDAR version 2.2
PC-SIG version 1.4
 
    DISKMASTER utility prints diskette labels on 5" x 1 7/16" label stock.
This size label just fits on the top of a standard 5 1/4" diskette. It
supports EPSON, IBM and OKIDATA printers with plug 'n play.
 
    PC-CRYP2 has two main functions: demonstration of the Vernam encryption
and decryption process using test character strings and the encryption and
decryption of both sequential and random access files.
 
    INSTACAL makes a full-page calendar for any month (or an entire year)
for any time from 1600 to 2050 A.D. Calendars can be printed or shown on
the screen. It runs on any IBM-PC or compatible using DOS version 2.11 or
higher. The documentation is less than one screen long but gives all the
help needed to use the program.
 
Usage: Various Utilities
 
System Requirements: 64K memory, one disk drive, and a printer is required
for INSTACAL.
 
How to Start: Type the file name you wish to laod. For example, type
DMASTER (press enter).
 
Suggested Registration: $10.00 + a formatted disk for DMASTER, $15.00 for
PC-CRYP2, and $1.00 or more for INSTACAL.
 
File Descriptions:
 
DMASTER  CMT  File used by DMASTER .EXE.
DMASTER  CTL  File used by DMASTER.EXE.
DMASTER  EXE  Label maker main program.
DMASTER  HLP  Instructions on how to use DMASTER.EXE.
------------
PC-CRYP2 DOC  Documentation for PC-CRYP2.EXE.
PC-CRYP2 EXE  Main program.
------------
INSTACAL COM  Main program.
INSTACAL DOC  Documentation for INSTACAL.COM.
INSTACAL DOC  Source code.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║        <<<<  Disk #709 DMASTER, PC-CRYP2 and INSTACALENDAR  >>>>        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for PC-CRYP2, Type                           ║
║               COPY PC-CRYP2.DOC LPT1  (press enter)                     ║
║                                                                         ║
║ To start PC-CRYP2, Type: PC-CRYP2 (press enter)                         ║
║                                                                         ║
║ To print the documentation for DMASTER, Type:                           ║
║               COPY DMASTER.HLP LPT1  (press enter)                      ║
║                                                                         ║
║ To start DMASTER, Type: DMASTER (press enter)                           ║
║                                                                         ║
║ To print the documentation for INSTALCAL, Type:                         ║
║               COPY INSTACAL.DOC PRN (press enter)                       ║
║                                                                         ║
║ To start INSTACAL, Type: INSTACAL (press enter)                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INSTACAL.DOC

{% raw %}
```





                             INSTACAL - Version 2.2

                                      by
                                  Jim Shellem
                              Woodlyn, Pennsylvania
                                 Copyright 1988



            INSTACAL generates a wall-size calendar for a specific month or
         for an entire year (1600 - 2400 A.D.).  You may select the calendar
         week that best suits your purpose (i.e. Sunday to Saturday, etc.).
         The calendar can be previewed on the screen, printed from most 80+
         column printers (dot matrix, daisywheel, thermal, etc.), or
         transferred to a text file so that you may customize it using
         your favorite editor or word processor.

            INSTACAL is menu driven and requires DOS 2.00 or higher.
         To use INSTACAL, just type:  INSTACAL <Return>  when prompted by
         DOS.


```
{% endraw %}

## PC-CRYP2.DOC

{% raw %}
```
                                                           Cover
 
                             PC-CRYP2
 
      PC-CRYP2 supercedes and replaces all versions of PC-CRYP1
 
                     Version 3.2  20 May 1985
 
               Data Encryption and Decryption Program
 
                   Copyright 1983, 1984, 1985 by
                        James T. Demberger
                      7280 60th Avenue North
                     St Petersburg, FL  33709
                          813-546-1182
 
     This is a user supported program.  If you use PC-CRYP2 and find it
of value, your contribution of any amount will be appreciated.  You are
are encouraged to copy and share this program with other users so long
as the program is not distributed in modified form and this notice is
not bypassed or removed.
 
     PC-CRYP2 is NOT a public domain program.  The compiled program
PC-CRYP2.EXE and the documenatation PC-CRYP2.DOC may be freely copied
HOWEVER the BASIC source code for PC-CRYP2 may not be copied except for
archive or working copies for personal non-profit use as outlined in
copyright regulations.  The BASIC source code may not be made available
thru clubs or user groups, program libraries or on remote access data
bases or bulletin boards.  A distribution diskette with the PC-CRYP2.EXE
file, the PC-CRYP2.DOC file and the BASIC source code PC-CRYP2.BAS file
is available from the author for $15.00 (diskette, postage and mailer
included).
 
                                 Index
 
                   Introduction                 Cover
                   Vernam Encryption              1
                   System Requirements            1
                   System Setup                   2
                   Running PC-CRYP2               2
                   Encrypt & Decrypt Test Strings 3
                   Processing Files               4
                        Sequential Files          4
                        Direct Files              5
                   Transmitting Encrypt Files     6
                   Double Encryption              7
                   Miscellaneous                  8
 
                              Introduction
 
     The program has two main functions:  demonstration of the Vernam
encryption and decryption process using test character strings and the
encryption and decryption of both sequential and random access files.
All encryption, decryption and file or record processing is done within
subroutines.  These subroutines may be merged into other file processing
programs if PC-CRYP2 does not provide the required file processing
capability.
                                                                 Page 1
                          Vernam Encryption
 
     Back in 1917, Gilbert S. Vernam developed an encryption process
for messages punched in paper tape using Baudot or five channel
teletype code.  He used the electro-mechanical equivalent of a logical
exclusive OR operation (XOR) on each character code in a message tape
and a corresponding character code in a key tape to produce a third
tape with the encrypt message.  Decryption used the same process except
that a tape with the encrypt message and a copy the key tape were XORed
to produce the decrypt message.  The program uses essentially the same
process even to the extent of using a five bit pattern to encrypt and
decrypt data.
 
     One problem with the original Vernam process related to the key
tapes.  For a secure system, the characters in the key tapes had to be
in random order and the number of characters in a key tape had to
exceed the number of characters in the message to be encrypt.  The
solution to the length problem was to use the XORed output of two
tapes, one with 999 characters and the other with 1000 characters, to
create a key with an effective length of 999,000 characters.  The
program generates as many random characters as are required for any
practical message length.  There is no need to store the randomly
generated characters since the generation process will consistently
produce the same characters in the same sequence.
 
     Another problem related to six of the 32 teletype codes.  These
six codes were teletype control codes (shift up, shift dowm etc.) and
required special consideration.  XORing two eight bit ASCII codes
creates the same problem in that the resulting value may be a display,
printer or communications control code.  The five bit code with binary
values from 0 thru 31 used by Vernam offers a solution to this problem.
XORing any number from 0 thru 31 with any of the ASCII codes 32 thru
255 never results in a value less than 32.  The program uses only XOR
values or codes from 0 thru 31; encryption will not produce any codes
that correspond to control codes for the display, printer or a
communications link.
 
     The program's counterpart of the two key tapes is a set of three
counters that are used as indexes or pointers to a code list, in random
order, of 103 codes that range in value from 0 thru 31.  The counters
are reset to 1 when they reach a maximum count of 97, 101 and 103
respectively.  The effective key length is 1,009,091; the least common
multiple of the prime numbers 97, 101 and 103.  The counters point to
the three codes that are XORed with an ASCII character code for
encryption and decryption.
 
                         System Requirements
 
     The program is written in IBM PC BASIC and runs on an IBM PC with
64 K or more of memory, an IBM or MX-80 printer, either a color or
monochrome display and one or more disk drives.
                                                                 Page 2
                             System Setup
 
     PC-CRYP2 may be run as interpreted or compiled BASIC.  Interpreted
BASIC will encrypt or decrypt at a rate of 12 or more characters per
second while compiled BASIC will encrypt or decrypt at a rate or 350 or
more characters per second.  Copy PC-CRYP2.BAS to a system or data
diskette if you are only interested in seeing how the program runs.
Copy PC-CRYP2.EXE to a data or system diskette if you want to take
advantage of the faster encryption and decryption rate.
 
                            Running PC-CRYP2
 
Using interpreted BASIC - From DOS ready key [dr:]BASIC [dr:]PC-CRYP2
     then press the Enter key.
 
Using compiled BASIC - From DOS ready key [dr:]PC-CRYP2 then press the
     Enter key.
 
     A default option is shown for the response to most prompts
displayed by the program.  As an example, a prompt for a yes or no
response will display "y/N".  Press Enter to take the no default option
indicated by the uppercase N.  Either a lower case y or an uppercase Y
must be pressed for the yes response.  If only lower case options or no
option is shown, an entry other than the Enter key must be used.
 
     The first two displays are a "USERWARE" commercials.  These
displays are followed by the password entry display:
 
                        SELECT NEW PASSWORD
 
            Press V for a visible display of Password or
                press Enter for non-visible display _
 
                   Old Password is
 
                   Enter New Password _
 
                   Code List for Password
 
     All encryption and decryption is controlled by the seed used for
the random code generation and the initial values for the three counters
used as pointers to the 103 random codes.  The ASCII codes for the
characters in the password are used to compute the seed number and the
initial settings for the three counters.  A seed number from 0 to 32767
is computed using the ASCII codes for the first five characters of the
password.  The initial setting for the counters (0 thru 99) is computed
from the last six characters of the password.  If the length of the
password entered in response to the prompt has less than eleven
characters, the characters are repeated until they create a string of
eleven or more characters.  Passwords may be more than eleven characters
long however only the left-most eleven characters or spaces are used to
compute the seed number and the initial values for the counters.
                                                                 Page 3
 
     For security, passwords may be keyed in a non-display mode.  Press
V for the first prompt for a visible display of the passwords.  Upper or
lower case letters, numbers, spaces or symbols may be used when keying
passwords.  The RANDOMIZE and RND functions do not, in some cases,
generate the same sequence of random numbers on different systems or on
similar systems with different versions of BASIC.  The program uses a
routine for generation of random numbers that results in identical
random values for the code list regardless of the system or the version
of BASIC that is used to run the program.  The random code values are
displayed as they are generated then the program prompts for display if
the PC-CRYP2 Menu.
 
                       PC-CRYP2 Menu
 
               P  Select a New Password
               T  Turn Timer On/Off
               S  Encrypt & Decrypt Test Strings
               F  Process Diskette Files
               X  Exit/End Program
 
     The program selected the New Password option before the menu
display since encryption or decryption cannot be done unless a password
has been entered.  Use the Select New Password option to change to a
different password.  Turning the timer on activates statements that
accumulate the total number of characters encrypt or decrypt and the
total time required.  The program uses these totals to compute and
display the thruput in characters per second.
 
                     Encrypt & Decrypt Test Strings
 
     The Encrypt & Decrypt Test Strings option displays a submenu from
which you may select four different types of strings for encryption and
decryption.  The original, encrypt and decrypt strings are displayed.
This option is primarily used to look at the pattern of characters
produced when you encrypt strings of upper case, lower case and numeric
characters.  Keyboard input of test records accepts ASCII codes entered
with the Alt key and numeric keys.
 
     This option uses a subroutine with two entry points or lines, one
for encryption and the other for decryption, to perform the actual
encryption and decryption.  The variable CTR.SET% must to set equal to 1
before using the subroutine for encryption or decryption of a file or of
a group of records.  CTR.SET% is used as a flag or switch that, when set
equal to 1, causes the three counters to be reset to the initial values
computed from the password in use.  If the subroutine is used in other
programs, do not set CTR.SET%=1 except for the first record of a file or
for the first string or record of a group of strings or records.  In
some cases, a character encrypts to the same character.  This is not an
error; it makes any attempt at unauthoried decryption more rather than
less difficult.  Character strings or records to be encrypt may have
characters with character codes 0 thru 255.  Characters with ASCII codes
from 0 thru 31 are not encrypt.
                                                                 Page 4
 
     This encryption/decryption subroutine uses ASCII code 7 or Control
G as an escape encryption code.  The first Control G sent to the
encryption/decryption subroutine turns encryption/decryption off, the
second Control G turns encryption/decryption back on.  For example,
printer control sequences, instructions or messages preceeded and
followed by Control G will not be encrypt.  The escape encryption code
is primarily used with keyboard input to prepare header message files
containing information that is to escape encryption.  Hold the Ctrl key
and press the letter G key to enter the ASCII 7 escape code.  Any files
or records that use Control G as a BELL (or BEEP) code must be changed
to use two consecutive Control G's so that encryption/decryption will
continue after the BELL codes.
 
                        Process Diskette Files
 
     The process diskette files option displays the following prompt:
 
                     Sequential or Direct file? s/d
 
     The Sequential file option can be used only with files of records
that are followed by carriage return and line feed characters.  Each
record is processed as a character string.  Many word or text processor
programs create sequential files; if a files can be displayed with the
DOS TYPE command, it can probably be processed as a sequential file.
With minor exceptions, other sequential files in ASCII character format
may be processed as well.  Exceptions are those files that contain ASCII
codes 7, 94 or 126.  Use of these codes has certain limitations outlined
in the next section.  Sequential file processing uses the same
encryption/decryption subroutine as is used for encrypting and
decrypting test strings.
 
     The Direct file option can be used with any disk(ette) file.  This
option treats any file as a random or direct file of 128 byte records
regardless of the fact that the file may have originally been created as
a sequential file with variable length records or as a random or direct
file with some record length other than 128.  The Direct file option
uses an encryption/decryption subroutine that does not have any
restrictions regarding ASCII codes nor does it do any lower/upper case
or space conversion or permit use of the Control G escape encryption
code.
 
                       Sequential File Processing
 
     If you select the sequential file option, the following prompts
will be displayed:
 
          Enter Input  dr:filename.ext or KEYBD  _
          Enter Output dr:filename.ext or NOFILE _
                    Encrypt or Decrypt? e/d _
          Use lower case to upper case convert? y/N _
          Use space to ^(94) & ~(126) convert? Y/n _
                    Print Input Text? y/N _
                    Print Output Text? y/N _
                                                                 Page 5
 
     Enter KEYBD for the input file prompt to enter records from the
keyboard rather than from a diskette file.  Keyboard input is primarily
used to prepare header records that contain data preceeded and followed
by Control G escape encryption codes.  Records input from the keyboard
may not be longer than 78 characters.  Enter NOFILE for the output file
prompt if you want to print the output file but not write it to
diskette.
 
     A yes response to the Use lower case to upper case convert? y/N
prompt will result in all lower case letters being encoded as upper
case letters.  This prompt is not displayed if decryption is selected
since the conversion is not reversible.
 
     A Y(es) or Enter response to the "Use space to ^(94) & ~(126)
convert?  Y/n" prompt will result in ASCII codes 94 and 126 being used
as substitute codes for a space (ASCII code 32) when encrypting data.
94 is used as a substitute for 32 when the preceeding character has an
ASCII code less than 96; 126 is used as the substitute character when
the preceeding character has an ASCII code greater than 95.  These
subtitutions are made to prevent creation of a pattern in the encrypt
data that would indicate the spaces between words.  Decryption does not
reverse this substitution; any ASCII code 94 or 126 that was in a
string or record before encryption will be replaced by a blank in the
decrypt string or record.  These two character codes seldom appear in
ordinary text; their loss may not even be noticed.
 
     Sequential files produced by some word processor programs have
records that contain format or printer control sequences that use ASCII
codes 0 thru 31.  Printer control codes that use an Escape code (ASCII
27) followed by a character code will be changed, when encrypt, to
other printer control codes.  Printing an encrypt file that has printer
control codes may result in turning on double strike mode instead of
turning off emphasized mode, etc.
 
     An "*C_T_R   R_E_S_E_T*" record is written as the last record of
encrypt files.  Header record files and data files, encrypt with the
same code number or password, may be combined or concantinated with the
DOS COPY /A command.  The counter reset record at the end of each of
the files that were combined forces a reset of the counters at the
beginning of each section of the combined file when it is decrypt.
 
                           Direct File Processing
 
     If you select the Direct file processing option the following
prompts and message will be displayed:
 
                   Enter Input  dr:filename.ext
 
                   Enter Output dr:filename.ext
 
                   Processing ___ strings of 128 characters
                                                                 Page 6
 
     As each block of 128 characters is encryp or decrypt, the block
number is displayed.  Since the subroutine used to encrypt/decrypt
direct files does not do any code conversion or check for the Control G
escape encryption code, it runs at a higher character per second speed
than the sequential file encryption/decryption subroutine.  The
subroutine encrypts and decrypts full sectors of 512 bytes; consequently,
the encrypt and decrypt files may be larger than the original file if
the original file did not use all of the last sector allocated to the
file.  The decrypt "garbage" in the last sector of a file will not
create a problem when processing sequential files that have a standard
end-of-file code.  Decrypt direct files that do not have an explicit
end-of-file record or some other method for recognizing end-of file may
require supplemental processing that recognizes the decrypt "garbage".
Files encrypt with the direct file option can not be concantinated since
concantination may result in "garbage" data in the middle of the
concantinated file.
 
                       Transmitting Encrypt Files
 
     An encrypt data file may be sent to another system for decryption
using a communications link, as a diskette file or as printed copy.
Since encrypt data files may contain characters or character strings
corresponding to transmission control codes, encrypt files should be
transmitted as eight bit binary files using XMODEM or some equivalent
transmission protocol for binary files.
 
     Any of several schemes may be used to insure that the receiving
operator knows the password required for decryption.  One scheme uses as
a password an eleven digit number (a passnumber?) known to both the
sender and receiver.  For the second and each succeeding message, each
digit of the number is increased by one.  For example, password
12345123456 will change to 23456234567 for the second message.
 
     The following steps outline another scheme that encodes the
password and makes it a part of an encrypt data file.
 
Step A  Sender and receiver agree on a key number to be used to
        encode the password.  For example, the sender's Social
        Security number (123 45 6789) might be used.
Step B  Assume that the sender uses password 11111223344
        to encrypt a file.
Step C  Sender adds (without carry) the key number, repeated as
        necessary, to the password numbers used for encryption.
               11111223344
               12345678912
               23456891256
Step D  The sender creates a header message file with the
        number 23456891256, preceeded and followed by a
        Control G escape encryption code, using the same
        password to encrypt this file as was used to encrypt
        the data file.  The data file is concantinated to
        the header message file and the combined file is sent
        to the receiver.
                                                                 Page 7
 
Step E  Receiver recovers the password to be used for
        decryption by subtracting (without carry) the key number
        from the number found in the header message.
               23456891256
               12345678912
               11111223344
 
                           Double Encryption
 
     Unauthorized decryption can be made even more improbable if the
encrypt data is encrypt a second time.  A password different from that
used for the first encryption must be used for the second encryption.
This same password must be used to decrypt the double encrypt data; the
resulting single encrypt data is decrypt with the password that was used
for the first encryption.
 
     The following steps outline the files and conversion prompt
responses required for double encryption and decryption when using
sequential file processing:
 
Step A    Password used for this step must be used for Step D.
       1  Input file - text file to be encrypt
       2  Encrypt or Decrypt? e/d - press E key
       3  Lower to upper case convert? - either yes or no
       4  Space convert? - Yes
       5  Output file - single encrypt file for input Step B 1
Step B    Password used for this step must be used for Step C.
       1  Input file - single encrypt file from Step A 5
       2  Encrypt or Decrypt? e/d - press E key
       3  Lower to upper case convert? - No
       4  Space Convert? - No
       5  Output file - double encrypt file for input Step C 1
Step C    Password for this step must be the same as used for Step B.
       1  Input file - double encrtpt file from step B 5
       2  Encrypt or Decrypt? e/d - press D key
       3  Lower to upper case convert? - Not displayed
       4  Space convert? - No
       5  Output file - single encrypt file for input Step D 1
Step D    Password for this step must be the same as used for Step A.
       1  Input file - single encrypt file from Step C 5
       2  Encrypt or Decrypt? e/d - press D key
       3  Lower to upper case convert? - Not displayed
       4  Space convert? - Yes
       5  Output file - copy of file input at Step A 1, file may
            be upper case only if response at Step A 3 was yes
 
     Double encryption using direct file processing uses the same steps
outlined above except sub-steps 2, 3 and 4 are not required; no prompts
are displayed for these sub-steps.  Double encryption of direct files
does not require that the two passwords be used in the same sequence for
both encryption and decryption; either password may be used for step C
so long as the other password is used for step D.
                                                                 Page 8
                           Miscellaneous
 
     Always keep a record of the password used to encrypt any file that
contain critical data.  If the password used to encrypt a file is not
known, the file is nothing more than computer generated garbage.
 
     How secure is the data in files encrypt with PC-CRYP2?  I don't
know since I don't have any depth of knowledge in cryptanalysis.  Since
very few encrypt files will be long enought to require recycling the
million character random key, it is probably impossible to find a
pattern that would be of any use in decrypting the data.  While there
may be some method or technique that can be used to decrypt files that
have been encrypt by PC-CRYP2, the method or technique would probably be
too time consuming to be of any value.  For all practical purposes, data
that has been encrypt using double encryption is probably totally secure
so long as the passwords used for encryption are not known.
 
     All the variable names used in the program have explicitly
assigned attributes (%,!,#,$) and one of the characters in a variable
name is a period.  There is little likelyhood that you will have any
duplication of variable names if the subroutines are merged into other
programs.

ittle likelyhood that you will have any
duplication of variable names if the subroutines are merged into other
programs
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0709

     Volume in drive A has no label
     Directory of A:\

    DMASTER  CMT        65   4-30-87   3:15p
    DMASTER  CTL        40   4-30-87   3:15p
    DMASTER  EXE     74660   4-30-87   3:15p
    DMASTER  HLP      5513   4-30-87   3:15p
    PC-CRYP2 EXE     40178   4-30-87   3:15p
    PC-CRYP2 DOC     24192   4-30-87   3:15p
    INSTACAL DOC       928   1-01-88   3:13a
    INSTACAL PAS     25191   1-05-88  12:36a
    INSTACAL COM     26234   1-05-88  12:41a
    FILES709 TXT      1720   1-25-88  11:53a
    GO       BAT        38   1-21-88  11:23a
    GO       TXT      1387   1-21-88  11:23a
           12 file(s)     200146 bytes
                          115712 bytes free
