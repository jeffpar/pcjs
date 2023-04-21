---
layout: page
title: "PC-SIG Diskette Library (Disk #112)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0112/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0112"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMPUTER SECURITY"

    This computer security package is a set of Shareware programs for
    encrypting data files to prevent unauthorized access or for transmission
    across phone lines.  If you have a need to protect sensitive or private
    communications, then this disk has a lot to offer you.  Please read DOC
    files for operating instructions. The security principle employed in
    this program is coding with authorized persons having decoding
    capabilities.  The package also includes the ability to ascertain
    whether files have been tampered with.
    
    Special Requirments:  None.
    
    How to Start:  Type GO (press enter).
    
    Special Registration:  $25.00
    
    File Descriptions:
    
    PC-CODE1 153  Program versions to use with BASRUN.EXE.
    PC-CODE2 153  Program versions to use with BASRUN.EXE.
    PC-MENU  153  Program versions to use with BASRUN.EXE.
    PC-TAMP1 153  Program versions to use with BASRUN.EXE.
    PC-TAMP2 153  Program versions to use with BASRUN.EXE.
    PC-ZERO  153  Program versions to use with BASRUN.EXE.
    NEW1     KEY  Key file.
    NEW2     KEY  Key file.
    SAMPLE   KEY  Key file.
    AUTOEXEC BAT  Auto execute file.
    COPYRIGH T    Copyright notes - disk not for export.
    DIALOG?? DOC  Sample dialogues for using programs (12 files).
    FILES    DOC  Documentation.
    I-8087   DOC  Source of 8087 BASIC compiler versions.
    PC-CODE1 EXE  Encodes/decodes files.
    PC-CODE2 EXE  Encodes/decodes text files.
    PC-CODE1 DOC  Documentation for PC-CODE.
    PC-CODE2 DOC  Documentation for PC-CODE.
    PC-HELP  EXE  Type "PC-HELP" for help.
    PC-MENU  EXE  Execute other programs from this one.
    PC-STAT2 LOG  Sample files.
    PC-TAMP1 DOC  Documentation for PC-TAMP.
    PC-TAMP1 EXE  Checks if files have been altered or examined.
    PC-TAMP2 EXE  Checks if files have been altered or examined.
    PC-ZERO  DOC  Documentation for PC-ZERO.
    PC-ZERO  EXE  Writes "zeros" to file before deleting it.
    READ     ME   Notes from the author.
    SAMPLE   MSG  Sample message.
    SAMPLE1  COD  Sample file.
    SAMPLE2  COD  Sample file.
    SAMPLE3  COD  Sample file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DIALOG11.DOC

{% raw %}
```
A>
A> PC-CODE1




 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



Do you have COLOR installed on your PC (YES or NO) N


Do You wish some Instructions/Help (Yes or No) N


Debuging statistics cause slower execution
Do You Wish Debuging Statistics (Y or N) Y


Do You Wish to Load KEYS from a FILE (Y or N) YES
Enter the fully qualified Input Key File Name: SAMPLE.KEY
*** Loaded  25  Keys from SAMPLE.KEY Successfully


 ..........................................................


P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



 Input and Output File may be the same file
 Only Valid files; no use of 'CON:' or 'LPT1:'


Enter Output file name (Full name): SAMPLE1.COD
Enter Input FILE (full name): SAMPLE.MSG

Encode or Decode (E or D) E

 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


 * * * R U N N I N G * * *



Wish to Save newly Computed Keys to a File (Y or N) Y
Enter the fully qualified Output Key File Name: NEW1.KEY
*** Saved  25  Keys to NEW1.KEY Successfully

Wish to Save Log Statistics for Keys used (Y or N) YES
Enter Stat Log File Name or 'LPT1:' or default of blank
Enter Log File Name:
 *** Saved Log file to PC-STAT1.LOG ***

 ..........................................................



A>
qualified Input Key File Name: SAMPLE.KEY
*** Loaded  25  Keys from SAMPLE.KEY Succes
```
{% endraw %}

## DIALOG12.DOC

{% raw %}
```
A>
A> PC-CODE1




 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



Do you have COLOR installed on your PC (YES or NO) NO


Do You wish some Instructions/Help (Yes or No) NO


Debuging statistics cause slower execution
Do You Wish Debuging Statistics (Y or N) NO


Do You Wish to Load KEYS from a FILE (Y or N) YES
Enter the fully qualified Input Key File Name: SAMPLE.KEY
*** Loaded  25  Keys from SAMPLE.KEY Successfully


 ..........................................................


P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



 Input and Output File may be the same file
 Only Valid files; no use of 'CON:' or 'LPT1:'


Enter Output file name (Full name): SAMPLE1.TXT
Enter Input FILE (full name): SAMPLE1.COD

Encode or Decode (E or D) Decode

 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


 * * * R U N N I N G * * *



Wish to Save newly Computed Keys to a File (Y or N) N
Wish to Save Log Statistics for Keys used (Y or N) NO

 ..........................................................



A>



Do You wish some Instructions/Help (Yes or
```
{% endraw %}

## DIALOG13.DOC

{% raw %}
```
A>
A> PC-CODE1




 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



Do you have COLOR installed on your PC (YES or NO) NO


Do You wish some Instructions/Help (Yes or No) YES


 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



To begin execution of PC-CODE1 or PC-CODE2, just type these names
in PC DOS or type PC-MENU. For example:  "A> PC-MENU "


PC-CODE1 is intended to encode/decode files only. It does this
thru a process known as super-encipherment. This means that
each character of plain text (uncoded text) is both scrambled
(transposed) as well as substituted for some random "other"
character.

Keys may Optionally be Loaded or Saved to a FILE. The data format
of such a file is 25 KEY numbers (between 1 & 2,147,483,646)
each separated by A Carriage Return (on separate lines); And
finally a 26th line of required Comment/Remark Information.
An example of a key file is "SAMPLE.KEY". You can display
this file by typing one of the following in DOS.
=======================

Wish More Documentation (Yes or No)   <CR>=Yes: NO



Debuging statistics cause slower execution
Do You Wish Debuging Statistics (Y or N) YES


Do You Wish to Load KEYS from a FILE (Y or N) NO

 ..........................................................

P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......






 Enter the type of KEY desired
    Numeric; Number Only key N
    Alphabetic; alphanumeric A
 Enter N or A N

 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


 There are two(2) levels of Security HIGH and LOW
 Enter H for HIGH or L for LOW L
 LOW Level of Security Selected

 You must now enter SEVEN (7) KEY numbers as indicated:

[ 1 ] Enter a NUMBER between 1 and 9,999,999  1
[ 2 ] Enter a NUMBER between 1 and 9,999,999  20
[ 3 ] Enter a NUMBER between 1 and 9,999,999  300
[ 4 ] Enter a NUMBER between 1 and 9,999,999  4000
[ 5 ] Enter a NUMBER between 1 and 9,999,999  50000
[ 6 ] Enter a NUMBER between 1 and 9,999,999  600000
[ 7 ] Enter a NUMBER between 1 and 9,999,999  7000000

 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


The following Numeric Keys/Seeds were generated:


     ( A ) :     1856031743

     ( B ) :     277405183       1210387455      1289288703      902806527

     ( C ) :     737405183       1139478015      1764375039      405706239
1399377919       426254079       236302335       277987839       656553471
45072895         1754579967      1294269439      336157695       671749119

 --- To Print this screen depress 'Shift PrtSc' ---

 ..........................................................


P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



 Input and Output File may be the same file
 Only Valid files; no use of 'CON:' or 'LPT1:'


Enter Output file name (Full name): SAMPLE1B.COD
Enter Input FILE (full name): SAMPLE.MSG

Encode or Decode (E or D) E

 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


 * * * R U N N I N G * * *

Wish to Save newly Computed Keys to a File (Y or N) NO
Wish to Save Log Statistics for Keys used (Y or N) NO

 ..........................................................



A>
0387455      1289288703      902806527

     ( C ) :     737405183       1139478015      1764375039      405706239
13993779
```
{% endraw %}

## DIALOG14.DOC

{% raw %}
```
A>
A> PC-CODE1




 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



Do you have COLOR installed on your PC (YES or NO) no


Do You wish some Instructions/Help (Yes or No) no


Debuging statistics cause slower execution
Do You Wish Debuging Statistics (Y or N) y


Do You Wish to Load KEYS from a FILE (Y or N) N

 ..........................................................



P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......






 Enter the type of KEY desired
    Numeric; Number Only key N
    Alphabetic; alphanumeric A
 Enter N or A NUMERIC


 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


 There are two(2) levels of Security HIGH and LOW
 Enter H for HIGH or L for LOW L
 LOW Level of Security Selected

 You must now enter SEVEN (7) KEY numbers as indicated:

[ 1 ] Enter a NUMBER between 1 and 9,999,999  1
[ 2 ] Enter a NUMBER between 1 and 9,999,999  20
[ 3 ] Enter a NUMBER between 1 and 9,999,999  300
[ 4 ] Enter a NUMBER between 1 and 9,999,999  4000
[ 5 ] Enter a NUMBER between 1 and 9,999,999  50000
[ 6 ] Enter a NUMBER between 1 and 9,999,999  600000
[ 7 ] Enter a NUMBER between 1 and 9,999,999  7000000

 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


The following Numeric Keys/Seeds were generated:


     ( A ) :     1856031743

     ( B ) :     277405183       1210387455      1289288703      902806527

     ( C ) :     737405183       1139478015      1764375039      405706239
1399377919       426254079       236302335       277987839       656553471
45072895         1754579967      1294269439      336157695       671749119

 --- To Print this screen depress 'Shift PrtSc' ---

 ..........................................................


P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



 Input and Output File may be the same file
 Only Valid files; no use of 'CON:' or 'LPT1:'


Enter Output file name (Full name): SAMPLE1B.TXT
Enter Input FILE (full name): SAMPLE1B.COD

Encode or Decode (E or D) D

 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


 * * * R U N N I N G * * *

Wish to Save newly Computed Keys to a File (Y or N) NO
Wish to Save Log Statistics for Keys used (Y or N) YES
Enter Stat Log File Name or 'LPT1:' or default of blank
Enter Log File Name: STAT-1B.LST
 *** Saved Log file to STAT-1B.LST ***

 ..........................................................



A>
 426254079       236302335       277987839       65655
```
{% endraw %}

## DIALOG15.DOC

{% raw %}
```
A>
A> PC-CODE1




 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



Do you have COLOR installed on your PC (YES or NO) YES


Do You wish some Instructions/Help (Yes or No) NO


Debuging statistics cause slower execution
Do You Wish Debuging Statistics (Y or N) NO


Do You Wish to Load KEYS from a FILE (Y or N) NO

 ..........................................................



P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......






 Enter the type of KEY desired
    Numeric; Number Only key N
    Alphabetic; alphanumeric A
 Enter N or A A

 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


 There are two(2) levels of Security HIGH and LOW
 Enter H for HIGH or L for LOW LOW
 LOW Level of Security Selected

 You must now enter SEVEN (7) key Alphanumerics as indicated:

[ 1 ] Enter Password: $XIu+L?
[ 2 ] Enter Password: 8!v|:fe*
[ 3 ] Enter Password: %ZIU;^<sS
[ 4 ] Enter Password: vb0-4&).W
[ 5 ] Enter Password: @mq7/=wK3
[ 6 ] Enter Password: t,}Hy!pa2
[ 7 ] Enter Password: io$c"/E7\

 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


The following Numeric Keys/Seeds were generated:


     ( A ) :     1361829887

     ( B ) :     477976063       673798911       1239671807      1847482879

     ( C ) :     1634803711      1445970943      361860863       1341486079
510427647        364812799       1522112511      1339310591      207653375
25049855         2065608447      1616221183      554356735       647902719

 --- To Print this screen depress 'Shift PrtSc' ---

 ..........................................................


P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



 Input and Output File may be the same file
 Only Valid files; no use of 'CON:' or 'LPT1:'


Enter Output file name (Full name): SAMPLE1C.COD
Enter Input FILE (full name): SAMPLE.MSG

Encode or Decode (E or D) Encode

 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


 * * * R U N N I N G * * *

Wish to Save newly Computed Keys to a File (Y or N) NO
Wish to Save Log Statistics for Keys used (Y or N) NO

 ..........................................................



A>
      1239671807      1847482879

     ( C ) :     16348
```
{% endraw %}

## DIALOG16.DOC

{% raw %}
```
A>
A> PC-CODE1




 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



Do you have COLOR installed on your PC (YES or NO) NO


Do You wish some Instructions/Help (Yes or No) NO


Debuging statistics cause slower execution
Do You Wish Debuging Statistics (Y or N) YES


Do You Wish to Load KEYS from a FILE (Y or N) NO

 ..........................................................



P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......






 Enter the type of KEY desired
    Numeric; Number Only key N
    Alphabetic; alphanumeric A
 Enter N or A A

 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


 There are two(2) levels of Security HIGH and LOW
 Enter H for HIGH or L for LOW L
 LOW Level of Security Selected

 You must now enter SEVEN (7) key Alphanumerics as indicated:

[ 1 ] Enter Password: $XIu+L?
[ 2 ] Enter Password: 8!v|:fe*
[ 3 ] Enter Password: %ZIU;^<sS
[ 4 ] Enter Password: vb0-4&).W
[ 5 ] Enter Password: @mq7/=wK3
[ 6 ] Enter Password: t,}Hy!pa2
[ 7 ] Enter Password: io$c"/E7\

 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


The following Numeric Keys/Seeds were generated:


     ( A ) :     1361829887

     ( B ) :     477976063       673798911       1239671807      1847482879

     ( C ) :     1634803711      1445970943      361860863       1341486079
510427647        364812799       1522112511      1339310591      207653375
25049855         2065608447      1616221183      554356735       647902719

 --- To Print this screen depress 'Shift PrtSc' ---

 ..........................................................


P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



 Input and Output File may be the same file
 Only Valid files; no use of 'CON:' or 'LPT1:'


Enter Output file name (Full name): SAMPLE1C.TXT
Enter Input FILE (full name): SAMPLE1C.COD

Encode or Decode (E or D) DECODE

 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


 * * * R U N N I N G * * *



Wish to Save newly Computed Keys to a File (Y or N) NO
Wish to Save Log Statistics for Keys used (Y or N) NO

 ..........................................................



A>
1239671807      1847482879

     ( C ) :     1634803
```
{% endraw %}

## DIALOG17.DOC

{% raw %}
```
A>
A> PC-CODE1




 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



Do you have COLOR installed on your PC (YES or NO) NO


Do You wish some Instructions/Help (Yes or No) YES


 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



To begin execution of PC-CODE1 or PC-CODE2, just type these names
in PC DOS or type PC-MENU. For example:  "A> PC-MENU "


PC-CODE1 is intended to encode/decode files only. It does this
thru a process known as super-encipherment. This means that
each character of plain text (uncoded text) is both scrambled
(transposed) as well as substituted for some random "other"
character.

Keys may Optionally be Loaded or Saved to a FILE. The data format
of such a file is 25 KEY numbers (between 1 & 2,147,483,646)
each separated by A Carriage Return (on separate lines); And
finally a 26th line of required Comment/Remark Information.
An example of a key file is "SAMPLE.KEY". You can display
this file by typing one of the following in DOS.
=======================

Wish More Documentation (Yes or No)   <CR>=YES:


 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



     A> TYPE SAMPLE.KEY

           <OR>

     A> COPY SAMPLE.KEY LPT1:


A key file may be generated in PC-DOS by the Following:

     A> COPY CON: MYKEY.KEY
        2028841238
        156091745
        1551901393
        590357944
        ..........
        ..........     [a total of 25 numbers]
=======================

Wish More Documentation (Yes or No)   <CR>=Yes:


 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


        ..........
        109941534
        2110010604
        * This is my remarks 01/31/84 7:56 PM  PC-CODE1 V1.51
        ^Z  {Ctrl-Z}  {ENTER}

If a key file is not used the following discussion applies:
There are two levels of security "LOW" and "HIGH". If you
elect the LOW level you will only have to enter 7 key
(SEED) numbers or in the case of alphanumeric keys 7
passwords of 5 or more characters. Actually, the longer
the passwords - the better. An Ideal password length would
seven passwords of 8 characters each.


If you elect HIGH security be prepared to enter up to 25
numbers between 1 and 2,147,483,646; or a minimum of 180
=======================

Wish More Documentation (Yes or No)   <CR>=yes:


 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


characters of alphanumeric passwords. It is best, the first
time thru to elect LOW security for testing purposes.
Why so many characters are required in the HIGH ALPHA mode security
is due to the additional insecurity of letters/words/phrases
and that the Randomizing (hashing) routine requires 6 characters
to generate a uniformly random Number (used internally). If the
users' alphanumeric passwords were perfectfully random and
all 256 possible characters could be typed at a 47 key keybroad,
there would only be a need for 4 characters to generate this number.

The user must provide a series of keys (a minimum of 7) which
may either be numeric (i.e. characters "0123456789") or
alphanumeric which includes any character on your IBM PC
keybroad. This includes alphabetics, numerics, and special
symbols like  "!@#$%^&*()=+?:.<>[]~{}"  and so forth.
Each of these keys should be chosen at random, and each
should be different. For alphanumeric keys, the following
=======================

Wish More Documentation (Yes or No) <CR>=Yes:   NO



Debuging statistics cause slower execution
Do You Wish Debuging Statistics (Y or N) YES


Do You Wish to Load KEYS from a FILE (Y or N) NO

 ..........................................................



P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......
P C - C O D E 1 ......Binary SuperEncipherment......






 Enter the type of KEY desired
    Numeric; Number Only key N
    Alphabetic; alphanumeric A
 Enter N or A ALPHA

 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1




 There are two(2) levels of Security HIGH and LOW
 Enter H for HIGH or L for LOW HIGHEST

 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


 You must enter 3 long PASSWORDS of alphanumeric data
 (A) Enter Password of at least (MIN)  6  Chars


         123456
         ......
Password:abcdef

 (B) Enter Password of at least (MIN)  42  Chars

                  1         2         3         4
         123456789012345678901234567890123456789012
         .........+.........+.........+.........+..
Password:abcdefghijklmnopqrstuvwxyz1234567890!@#$%^


 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



 (C) Enter Password of at least (MIN)  102  Chars

                  1         2         3         4         5         6
         123456789012345678901234567890123456789012345678901234567890
         .........+.........+.........+.........+.........+.........+
Password:ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+=- 1234567890<>{}[]?/,


                  7         8         9        10
         123456789012345678901234567890123456789012
         .........+.........+.........+.........+..
Password:qwertyuiopasdfghjkl;'zxcvbnm,./:;QAZWSXEDC



 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


The following Numeric Keys/Seeds were generated:


     ( A ) :     949485921

     ( B ) :     949485921       1955816904      3018992949      1991530409

     ( C ) :     646312257       1349469576      2109471957      2926319400
1319706316       1971947683

 --- To Print this screen depress 'Shift PrtSc' ---

 ..........................................................


P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1



 Input and Output File may be the same file
 Only Valid files; no use of 'CON:' or 'LPT1:'


Enter Output file name (Full name): SAMPLE1E.COD
Enter Input FILE (full name): SAMPLE.MSG

Encode or Decode (E or D) ENCODE

 ..........................................................

P C   C O M P U T E R   S E C U R I T Y    V1.51   PC-CODE1


 * * * R U N N I N G * * *



Wish to Save newly Computed Keys to a File (Y or N) YES
Enter the fully qualified Output Key File Name: NEW17.KEY
*** Saved  25  Keys to NEW17.KEY Successfully

Wish to Save Log Statistics for Keys used (Y or N) YES
Enter Stat Log File Name or 'LPT1:' or default of blank
Enter Log File Name:
 *** Saved Log file to PC-STAT1.LOG ***

 ..........................................................



A>

1319706316       1971947683

 --- To Print this screen depress 'Shift Prt
```
{% endraw %}

## DIALOG21.DOC

{% raw %}
```

A>
A> PC-CODE2





 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2



Do you have COLOR installed on your PC (Yes or No) NO


Do you wish some instructions/Help (Yes or No) NO


Debug Statistics will slow down program execution
Do You Wish Debuging Statistics (Y OR N) YES


Do You Wish to Load KEYS from a FILE (Y OR N) YES
Enter the Fully Qualified Input Key FILE name: SAMPLE.KEY
*** Loaded  25  Keys from SAMPLE.KEY Successfully


 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2



Possible Output files:
  'A:FILE.EXT'  'B:FILE.EXT'  'LPT1:'  'CON:'  'CAS1:'
   for FILES the input and Output must be different

Enter Output file name (Full name): SAMPLE2.COD


Possible Input files:
  'A:FILE.EXT'  'B:FILE.EXT'  'C:FILE.EXT'  'CON:'  'CAS1:'

Enter Input FILE (full name): SAMPLE.MSG


Encode or Decode (E or D) ENCODE

 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2



 * * * R U N N I N G * * *



Wish to Save newly Computed KEYS to a FILE (Y OR N) YES
Enter the Fully Qualified Output Key File Name: NEW2.KEY
*** Saved  25  Keys to NEW2.KEY Successfully

Wish to Save Log Statistics for keys used (Y OR N) YES
Enter Stat Log File Name or 'LPT1:' or default of blank
Enter Log File Name:
 *** Saved Stat Log file to PC-STAT2.LOG ***

 .......................................................




A>

.....................

P C   C o m p u t e r   S e c u r i t y    V1.
```
{% endraw %}

## DIALOG22.DOC

{% raw %}
```

A>
A> PC-CODE2




 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2



Do you have COLOR installed on your PC (Yes or No) NO


Do you wish some instructions/Help (Yes or No) NO


Debug Statistics will slow down program execution
Do You Wish Debuging Statistics (Y OR N) YES


Do You Wish to Load KEYS from a FILE (Y OR N) YES
Enter the Fully Qualified Input Key FILE name: SAMPLE.KEY
*** Loaded  25  Keys from SAMPLE.KEY Successfully


 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2



Possible Output files:
  'A:FILE.EXT'  'B:FILE.EXT'  'LPT1:'  'CON:'  'CAS1:'
   for FILES the input and Output must be different

Enter Output file name (Full name): CON:


Possible Input files:
  'A:FILE.EXT'  'B:FILE.EXT'  'C:FILE.EXT'  'CON:'  'CAS1:'

Enter Input FILE (full name): SAMPLE2.COD


Encode or Decode (E or D) DECODE

 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2


 * * * R U N N I N G * * *


File Header: V1.51 PC-CODE2 ENCODED 02-01-1984 12:55:31



 ABC DEF GHI JKL MNO PQR STU VWX YZ0 123 456 789
 abc def fhi jkl mno pqr stu vwx uz0 123 456 789



 Shift number symbols: !@# $%^ &*( )_+


 Dollars:        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
 Percent:        %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 AT Symbol:      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 Number/Pound:   ################################
 Periods:        ................................
 Commas:         ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
 Mixed Brackets: ()  []  {}  <>  ()  []  {}  <>
 Quotes:         """"""""""""""""""""""""""""""""
 Apost:          ''''''''''''''''''''''''''''''''
 Askerichs:      ********************************
 Question mark:  ????????????????????????????????
 Divide          ////////////////////////////////
 Colons:         ::::::::::::::::::::::::::::::::
 Semi-colons:    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
 Up arrow        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 Plus:           ++++++++++++++++++++++++++++++++
 Equal:          ================================
 And symbol:     &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
 dash/subtract:  --------------------------------


 Alphabet:       aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                 bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                 cccccccccccccccccccccccccccccccc
                 dddddddddddddddddddddddddddddddd
                 eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

                 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                 BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
                 CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
                 DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
                 EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

                       *** END OF TEST ***




Wish to Save newly Computed KEYS to a FILE (Y OR N) NO
Wish to Save Log Statistics for keys used (Y OR N) NO

 .......................................................




A>

;;;;;;;;;;;
 Up arrow        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 Plus:           +++++++++++++++++++++
```
{% endraw %}

## DIALOG23.DOC

{% raw %}
```

A>
A> PC-CODE2



 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2



Do you have COLOR installed on your PC (Yes or No) N


Do you wish some instructions/Help (Yes or No) N


Debug Statistics will slow down program execution
Do You Wish Debuging Statistics (Y OR N) N


Do You Wish to Load KEYS from a FILE (Y OR N) NO

 .......................................................



P C - C O D E 2 ......Textual SuperEncipherment......
P C - C O D E 2 ......Textual SuperEncipherment......
P C - C O D E 2 ......Textual SuperEncipherment......
P C - C O D E 2 ......Textual SuperEncipherment......
P C - C O D E 2 ......Textual SuperEncipherment......
P C - C O D E 2 ......Textual SuperEncipherment......






 Enter the type of KEY desired
    Numeric; Number Only key N
    Alphabetic; alphanumeric A
 Enter N or A NUMERIC

 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2


 There are two(2) levels of Security HIGH and LOW
 Enter H for HIGH or L for LOW LOW
 LOW Level of Security Selected

 You must now enter SEVEN (7) KEY numbers as indicated:

[ 1 ] Enter a NUMBER between 1 and 9,999,999  1
[ 2 ] Enter a NUMBER between 1 and 9,999,999  2
[ 3 ] Enter a NUMBER between 1 and 9,999,999  3
[ 4 ] Enter a NUMBER between 1 and 9,999,999  4
[ 5 ] Enter a NUMBER between 1 and 9,999,999  5
[ 6 ] Enter a NUMBER between 1 and 9,999,999  6
[ 7 ] Enter a NUMBER between 1 and 9,999,999  7

 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2


The following Numeric Keys/Seeds were generated:


     ( A ) :     1856031743

     ( B ) :     1644781567      1238553087      823159295       1538023423

     ( C ) :     737405183       1139478015      1764375039      1590126335
1258193919       426254079       236302335       277987839       1214470655
45072895         1497160191      1294269439      1677861887      466270719

 --- To Print this screen depress 'Shift PrtSc' ---

 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2



Possible Output files:
  'A:FILE.EXT'  'B:FILE.EXT'  'LPT1:'  'CON:'  'CAS1:'
   for FILES the input and Output must be different

Enter Output file name (Full name): CON:


Possible Input files:
  'A:FILE.EXT'  'B:FILE.EXT'  'C:FILE.EXT'  'CON:'  'CAS1:'

Enter Input FILE (full name): CON:


Encode or Decode (E or D) ENCODE

 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2


 * * * R U N N I N G * * *


--> Terminate Console Input with use '//END'

AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
,KWEF'Mjjoc)[$'hJ:8N g$1d_vaEK,>|<v<#XtDQ!b(<V(fZG%;h(0pn{A)#Jh^,,

AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
doaOEU[@-=ZPB-C!5`vCwr,[_DEg.0Fi}'h9E*ffnsT-7:MezC^`kw#ys]3NXV64rc

AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
T~B2%$nK#|BitGu2Xq4KCc/Z!K"S^MjQ?+p2D1%"n  `~LM+8.O$FAh:Tqvd<~Z|oK

AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
Mh&HaI[~} }w0pXGnRiz`G~MO2g88.8H4Q|'e;~oddlr#Q4bT"90~Fz$6#',sV.`pZ

AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
;FK,I0L]?GGLxw|mgv?GfvhSz~4{G}\"s"4R^TKG,Lu*Kl[9i_hKt|Ly?i]o;},'a6

AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
a8,B+Q6:aRn7XlNQ55ZOr-P50l#-=*0-Dd&T0{PYWLT'*,iKI"9mPypJ!]/5HB1&K]

AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
NgXTG_<S'ReG[RyB1fmSq(^Jy5J`@Y51e}6|c*'0r%q?ICWi|zHr#NV}bjEz&\rf;,

AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
f0YU(f zN/=P"tcyvON:@Ko#M+(=\_hQO %f/4zoYP)au"so^y+a]xJn'M;voQm80,

aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
ScmH>B-e06BnB20#{bB_C)v'j/91+'?7x9s

aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
:AEToD(V;R<8i.S72Y .>0Qyp',+@n5GlpL

abcdefghijklmnopqrstuvwxyz 1234567890 !@#$%^&*()_+-={}[]<>,.?/"'~
ly%[m*BM3Ir<|ubQ3J<vKNc1KFO$5+;<BZo\kOU?C-X;0zp8MV5f\J`}/#(?#9iOX

aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
lE;Gp`mtQle~bV7~iY6JA<'n<z*)HDf#'(3

//end

Wish to Save newly Computed KEYS to a FILE (Y OR N) NO
Wish to Save Log Statistics for keys used (Y OR N) NO

 .......................................................




A>

GfvhSz~4{G}\"s"4R^TKG,Lu*Kl[9i_hKt|Ly?i]o;},'a6

AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
```
{% endraw %}

## DIALOG24.DOC

{% raw %}
```

A>
A> PC-CODE2



 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2



Do you have COLOR installed on your PC (Yes or No) NO


Do you wish some instructions/Help (Yes or No) NO


Debug Statistics will slow down program execution
Do You Wish Debuging Statistics (Y OR N) NO


Do You Wish to Load KEYS from a FILE (Y OR N) YES
Enter the Fully Qualified Input Key FILE name: SAMPLE.KEY
*** Loaded  25  Keys from SAMPLE.KEY Successfully


 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2



Possible Output files:
  'A:FILE.EXT'  'B:FILE.EXT'  'LPT1:'  'CON:'  'CAS1:'
   for FILES the input and Output must be different

Enter Output file name (Full name): LPT1:


Possible Input files:
  'A:FILE.EXT'  'B:FILE.EXT'  'C:FILE.EXT'  'CON:'  'CAS1:'

Enter Input FILE (full name): SAMPLE2.COD


Encode or Decode (E or D) DECODE

 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2


 * * * R U N N I N G * * *



File Header: V1.51 PC-CODE2 ENCODED 02-01-1984 12:55:31


Wish to Save newly Computed KEYS to a FILE (Y OR N) NO
Wish to Save Log Statistics for keys used (Y OR N) NO

 .......................................................




A>

```
{% endraw %}

## DIALOG25.DOC

{% raw %}
```

A>
A> PC-CODE2



 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2



Do you have COLOR installed on your PC (Yes or No) NO


Do you wish some instructions/Help (Yes or No) NO


Debug Statistics will slow down program execution
Do You Wish Debuging Statistics (Y OR N) NO


Do You Wish to Load KEYS from a FILE (Y OR N) NO

 .......................................................



P C - C O D E 2 ......Textual SuperEncipherment......
P C - C O D E 2 ......Textual SuperEncipherment......
P C - C O D E 2 ......Textual SuperEncipherment......
P C - C O D E 2 ......Textual SuperEncipherment......
P C - C O D E 2 ......Textual SuperEncipherment......
P C - C O D E 2 ......Textual SuperEncipherment......






 Enter the type of KEY desired
    Numeric; Number Only key N
    Alphabetic; alphanumeric A
 Enter N or A NUMERICS

 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2


 There are two(2) levels of Security HIGH and LOW
 Enter H for HIGH or L for LOW HIGH

 You have Selected HIGH security

 You must enter  25  key numbers between 1 and 2,147,483,64
 A(1) ?  1

 B( 1 )  2
 B( 2 )  3
 B( 3 )  4
 B( 4 )  5
 B( 5 )  6
 B( 6 )  7
 B( 7 )  8

 .......................................................

 C( 1 )  10
 C( 2 )  11
 C( 3 )  12
 C( 4 )  13
 C( 5 )  14
 C( 6 )  15
 C( 7 )  16
 C( 8 )  17
 C( 9 )  18
 C( 10 )  19
 C( 11 )  20
 C( 12 )  21
 C( 13 )  22
 C( 14 )  23
 C( 15 )  24
 C( 16 )  25
 C( 17 )  26

 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2



Possible Output files:
  'A:FILE.EXT'  'B:FILE.EXT'  'LPT1:'  'CON:'  'CAS1:'
   for FILES the input and Output must be different

Enter Output file name (Full name): CON:


Possible Input files:
  'A:FILE.EXT'  'B:FILE.EXT'  'C:FILE.EXT'  'CON:'  'CAS1:'

Enter Input FILE (full name): SAMPLE.MSG


Encode or Decode (E or D) ENCODE

 .......................................................

P C   C o m p u t e r   S e c u r i t y    V1.51 PC-CODE2


 * * * R U N N I N G * * *




"wlVCA~Pq4d_Rg@)9\%y'LN3,e?qB;b{0Gc}m*3((Z\1_]Z>

Nxb_d$N`ZK\od]!3#HAs^"r$B1g, =1P<nWk<,0Y]h/fr"TU



+x!aM6+<$~si6RLOiI^=MC$?zeEXN$_lRVRlJ_



mKOM-NAEG&cMzz4tp\}~%su1!.4Y!.aH85qIi#dV5=M^&F)j~

o8JAX%W@X0r0\,8E1Q'LLXnvSO0+T>D[BiH{aFj~<HUFG4dB5

CDeJX#g{8X!V/r=L_:!%d@NW'B\88y4Sxv/*SnaVD]VnS!C?O

&aiLop#NTli.xekW,gi9!;I}?4S~;[-0sw\VkYcJBh?:uwm2b

n|z1i2Rl}2^e2JJ.hnLCnPO) VW|&:z|n'p5 x~?J>~dkbC!l

4nv<rL<A^gH*ndcS</z|\yL[PT-}|c0':`?&b`:(BCC+Vh^FY

S#NZk36a.fN-g]Q1S4f}}`0I `+fm])>WPjKi$ ;Q0/r9hk

4him&"_GdfwC;yXY]i@txyyRV `SP78k,wk&:-<<dqYTCsPm0

Jqw'0oxqxAk\Irm-lyTd<AYM+AUs2l}j0Huer)[1S9~wMf8'M

dHkWi1zM:naQYms43k?,.?;5hN[Zhs~ 4m9iq~Qx4&e^n=F?w

M{4US0@)?y)r&|o@4aEs56/?R=)CA..b|T.60Q@6h[8A-mWNN

j!%/<JdT,Y:(;X6wd1U/V>UWLAlH.N0dw8D:Bi`9}8Dn6yww_

fz-YA9HU|Z4^\bk'_MbEKhuL;M;#Z_9leK=},n\RZopkI-#k:

t>oB+K:y&NW:68j(1=."j6!05AVA_\RkPrq8c: P=+E#}4iU+

+8l~yt'4Z^dABC,Es-.?8F+((f6Supu8H+S&~zkp8kLP_H&!)

rf~h/9pdJ?.&}U#KA,]a{=-G,&PjwFD)D#4irfxL#JLE][S5s

[oK[YM/0~Ij"\Il9iVRw=i6~35#P}:0Kyk<ejeqK<p1.vU#kY

 ]Xh4xx#tdO7;?Bw[;eNJ<ryUwn/2hbnu6$Y_;*UCLwQLdu&A

&!UZW#~^5{g\\)2ie25YSC@k&T#:Py=$2YE629]c,,hq!vpI\



$f3m8e0L$t(Z%!wKn9mON'zmwI*U}86i@g1p)g3v+((2h(j~9

GLbj5#G!J>Ow{lNbpIej6{YD{*Edn'Gf-ZUe=9 M,V@uihXXf

|xRF1ST=%ybs}P<56cd 3e2jxxJA14Y69f*OT^_N|gP~kp0}%

3aT5{m\R{haE(D;x:#u#f8I `EqL;~"GHd^r-T$8/qFs-G\H%

QVgsQrP5d(g-h#hcQQ"!r93'>Q&Og$WVpd*oT^j'BlK,Q\RW:



{j+ 7z-jE{<qvrq&#7~B^EA.p@PDSk]eMM?cNE8Ya a"z}U,1

hg8J>f/*l}R[^WySXMDilhk2O3e,<}5O%~tQ+wd8TInP#F*^o

#<kC`V"BFFJcV}Mp'Ca8eFTI]h9AH^93`CENXMBYm2Fq 38Nh

$VD{JER9RLOTu#YJV'?Z?mU|B!5rG7d^0OKFF\`'hrVF<xZ{*

d\k1g<z;ShRvWv2z[o6_r]eI12].o/_Xe=QU{Ed%,$"@~U3PA



iN3U=1qAjbs'eiSYPG]"SGfr/_wVH)Qkh!#Y<~`PJh




Wish to Save newly Computed KEYS to a FILE (Y OR N) N
Wish to Save Log Statistics for keys used (Y OR N) N

 .......................................................




A>

?8F+((f6S
```
{% endraw %}

## FILES.DOC

{% raw %}
```


 Directory of A:\PC-CODE      Version 1.53  date: 14-JUN-84

PC-MENU  EXE 19712   Executable Main MENU for PC-CODE (Start/Begin here)
PC-HELP  EXE 19328   Executable User Help Program/list <.DOC> files
PC-CODE1 EXE 38016   Executable Program PC-CODE1; For File Encipherment
PC-CODE2 EXE 38528   Executable Program PC-CODE2; For Text/printable data
PC-ZERO  EXE 19584   Executable Program to Zero and Erase files securely
PC-TAMP1 EXE 21632   Executable program to test Tampering of programs
PC-TAMP2 EXE 20864   Executable file to Verify PC-TAMP1 Tampering
READ     ME    768   Messages about authorship and Public Domain Comments
COPYRIGH T     512   Messages about Copyright of PC-CODE source
AUTOEXEC BAT   640   A batch file that will start with the Main Menu
PC-CODE1 DOC  8846   Documentation & Comments concerning PC-CODE1
PC-CODE2 DOC  6331   Documentation & Comments concerning PC-CODE2
DIALOG11 DOC  1536   Documenting Examples of PC-CODE1 execution
DIALOG12 DOC  1280    "  "       "     "     PC-CODE1  "  "
DIALOG13 DOC  3968    "  "       "     "     PC-CODE1  "  "
DIALOG14 DOC  3072    "  "       "     "     PC-CODE1  "  "		
DIALOG15 DOC  2816    "  "       "     "     PC-CODE1  "  "
DIALOG16 DOC  2816    "  "       "     "     PC-CODE1  "  "
DIALOG17 DOC  7424    "  "       "     "     PC-CODE1
DIALOG21 DOC  1664   Documenting Examples of PC-CODE2 execution
DIALOG22 DOC  3200    "  "       "     "     PC-CODE2  "  "
DIALOG23 DOC  4608    "  "       "     "     PC-CODE2  "  "
DIALOG24 DOC  1408    "  "       "     "     PC-CODE2  "  "
DIALOG25 DOC  4224    "  "       "     "     PC-CODE2  "  "
PC-MENU  153  2307   Source File for PC-MENU  (PC-MENU.BAS)  version 1.53
PC-HELP  153  1024   Source file for PC-HELP  (PC-HELP.BAS)  version 1.53
PC-CODE1 153 21219   Source File for PC-CODE1 (PC-CODE1.BAS) version 1.53
PC-CODE2 153 20263   Source File for PC-CODE2 (PC-CODE2.BAS) version 1.53
PC-ZERO  153   689   Source Program to zero out and delete files securely
PC-TAMP1 153  2588   Source Program (BAS) for Anti-tamper-proofing
PC-TAMP2 153  1881   Source Program to Verify PC-TAMP1 Tampering
I-8087   DOC   640   Comments about Intel 8087 chip possibilities/Speed
SAMPLE   MSG  1792   A Sample Message used for Encoding in the examples
SAMPLE   KEY   472   A Sample Key File used for Encoding/decoding example
NEW1     KEY   512   A Newly computed/resultant key file from PC-CODE1
NEW2     KEY   512   A Newly computed/resulting key file from PC-CODE2
SAMPLE1  COD  2048   Sample code from encoding SAMPLE.MSG with PC-CODE1
SAMPLE2  COD  1792   Sample code from encoding SAMPLE.MSG with PC-CODE2
PC-STAT2 LOG  3840   SAMPLE log Statistics from encoding with PC-CODE2
PC-ZERO  DOC   710   Documentation for PC-ZERO.153; Zero and delete files
PC-TAMP1 DOC   761   Documentation for TAMPERED.153 (check security)
FILES    DOC  3190   The file you are now looking at (the above text).
       42 File(s)
 for TAMPERED.153 (check security)
FILES    DOC  3190   The file you are now looking at (the
```
{% endraw %}

## FILES112.TXT

{% raw %}
```
Disk No:  112
Program Title:  COMPUTER SECURITY
PC-SIG version: 1.4

This computer security package is a set of user-supported for encrypting
data files to prevent unauthorized access or for transmission across
phone lines.  If you have a need to protect sensitive or private
communications, then this disk has a lot to offer you.  Please read DOC
files for operating instructions.

Usage:  DOS utilities/Security.

Special Requirments:  None.

How to Start:  Type GO (press enter).

Special Registration:  $25.00

File Descriptions:

PC-CODE1 153  Program versions to use with BASRUN.EXE.
PC-CODE2 153  Program versions to use with BASRUN.EXE.
PC-MENU  153  Program versions to use with BASRUN.EXE.
PC-TAMP1 153  Program versions to use with BASRUN.EXE.
PC-TAMP2 153  Program versions to use with BASRUN.EXE.
PC-ZERO  153  Program versions to use with BASRUN.EXE.
NEW1     KEY  Key file.
NEW2     KEY  Key file.
SAMPLE   KEY  Key file.
AUTOEXEC BAT  Auto execute file.
COPYRIGH T    Copyright notes - disk not for export.
DIALOG?? DOC  Sample dialogues for using programs (12 files).
FILES    DOC  Documentation.
I-8087   DOC  Source of 8087 BASIC compiler versions.
PC-CODE1 EXE  Encodes/decodes files.
PC-CODE2 EXE  Encodes/decodes text files.
PC-CODE1 DOC  Documentation for PC-CODE.
PC-CODE2 DOC  Documentation for PC-CODE.
PC-HELP  EXE  Type "PC-HELP" for help.
PC-MENU  EXE  Execute other programs from this one.
PC-STAT2 LOG  Sample files.
PC-TAMP1 DOC  Documentation for PC-TAMP.
PC-TAMP1 EXE  Checks if files have been altered or examined.
PC-TAMP2 EXE  Checks if files have been altered or examined.
PC-ZERO  DOC  Documentation for PC-ZERO.
PC-ZERO  EXE  Writes "zeros" to file before deleting it.
READ     ME   Notes from the author.
SAMPLE   MSG  Sample message.
SAMPLE1  COD  Sample file.
SAMPLE2  COD  Sample file.
SAMPLE3  COD  Sample file.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1985,86,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## PC-TAMP1.DOC

{% raw %}
```

  A N T I     T A M P E R      C H E C K

  This programs checks to see if certain critical files:

      (1) PC-CODE1.EXE
      (2) PC-CODE2.EXE
      (3) PC-CODE1.151
      (4) PC-CODE2.151
      (5) PC-TAMP1.151

  Have been modified or altered in any way other than by the AUTHOR.
  This program (PC-TAMP1) verifies the integrity of the security system
  by do a careful Bit-summing technique for any of these files above.

  If a program or file has been altered - the bitsums will differ as
  to what is expected. Also the following display will appear:

    ========================================================
    S E C U R I T Y       A L E R T        V I O L A T I O N
    ========================================================

```
{% endraw %}

## PC-ZERO.DOC

{% raw %}
```

 P C - Z E R O


 PC-ZERO is a Security feature for zeroing files before Deleting them.   
 It must be remembered in MS-DOS or PC-DOS that Erasing a file DOES NOT
 ERASE THE DATA on a diskette or hard disk - it merely removes the file 
 from the active directory. Files that are Erased or Deleted with PC-DOS or 
 MS-DOS leave the actual DATA of the file untouched and intact. Anyone
 with a disk utility like the Norton Utilities can still read sensitive 
 data you thought you Deleted or Erased.
  
 PC-ZERO erases all the data in a file as well as deleting it. Each
 character of such a file will be filled with hexadecimal X'FF' bytes
 [ or CHR$(255) ] before it is deleted thru DOS. 
  

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0112

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT       640   2-02-84   8:50p
    COPYRIGH T         512   1-22-84   7:16p
    FILES112 TXT      2030   1-27-89   9:11a
    DIALOG11 DOC      1536   2-09-84   9:10p
    DIALOG12 DOC      1280   2-09-84   8:55p
    DIALOG13 DOC      3968   2-09-84  10:06p
    DIALOG14 DOC      3072   2-09-84   8:51p
    DIALOG15 DOC      2816   2-09-84   8:53p
    DIALOG16 DOC      2816   2-09-84   8:58p
    DIALOG17 DOC      7424   2-09-84   9:09p
    DIALOG21 DOC      1664   2-09-84   9:12p
    DIALOG22 DOC      3200   2-09-84   9:17p
    DIALOG23 DOC      4608   2-09-84   9:20p
    DIALOG24 DOC      1408   2-09-84   9:22p
    DIALOG25 DOC      4224   2-09-84   9:24p
    FILES    DOC      3072   1-01-80  12:18a
    I-8087   DOC       640   2-09-84   9:29p
    NEW1     KEY       512   6-07-84   6:23p
    NEW2     KEY       512   6-07-84   6:25p
    PC-CODE1 153     21219   6-14-84   7:11p
    PC-CODE1 DOC      9486   6-14-84   8:10p
    PC-CODE1 EXE     38016   6-14-84   7:13p
    PC-CODE2 153     20263   6-11-84   4:37p
    PC-CODE2 DOC      6331   6-07-84   6:36p
    PC-CODE2 EXE     38528   6-11-84   4:53p
    PC-HELP  EXE     19328   5-07-84  10:08p
    PC-MENU  153      2307   5-12-84   6:49p
    PC-MENU  EXE     19712   5-12-84   6:53p
    PC-STAT2 LOG      3968   6-07-84   6:25p
    PC-TAMP1 153      2588   6-14-84   7:46p
    PC-TAMP1 DOC       767   5-12-84   7:44p
    PC-TAMP1 EXE     21632   6-14-84   7:38p
    PC-TAMP2 153      1881   6-14-84   7:45p
    PC-TAMP2 EXE     20864   6-14-84   7:48p
    PC-ZERO  153       689   5-08-84   7:46p
    PC-ZERO  DOC       710   4-02-84  10:43p
    PC-ZERO  EXE     19584   5-08-84   7:47p
    READ     ME        768   1-22-84   7:13p
    SAMPLE   KEY       472   6-07-84   6:27p
    SAMPLE   MSG      1792   1-20-84   8:24p
    SAMPLE1  COD      2048   6-07-84   6:23p
    SAMPLE2  COD      1792   6-07-84   6:25p
    SAMPLE3  COD      2560   6-14-84   6:48p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694  12-01-88   3:17p
    MANUAL   BAT       147   6-08-88   3:02p
           46 file(s)     304118 bytes
                           36864 bytes free
