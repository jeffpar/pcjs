---
layout: page
title: "PC-SIG Diskette Library (Disk #569)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0569/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0569"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-CODE3 AND PC-CODE4"

    PC-CODE3 is a simplified version of PC-CODE2 (V1.53); it is a code
    analysis program.  PC-CODE4 is a simplified version of PC-CODE1 (V1.53)
    and likewise is intended for encoding files as opposed to text.
    
    PC-STAT3 is a simple statistical program by which the user may do
    simple analysis of either a Plain Text FILE or a Coded FILE.
    Basically, it does frequency counts that were previously embedded
    features of PC-CODE1 & 2.
    
    PC-CODE3 and PC-CODE4 are Portable Versions Specifically for Generic
    MS-DOS and Xenix 5.  They are written in a strictly portable Microsoft
    FORTRAN-77 V3.30.  The Object code on these diskette(s) is compatiable
    with both MS-DOS and Microsoft Xenix; meaning these program need NO
    recompiling - they only needed to LINKED to the respective libraries.
    
    System Requirements:  64K RAM, two disk drives and a monochrome
    display; MS-DOS or Xenix 5 are operating system options.
    
    How to Start:  After loading DOS, enter PC-CODE.DOC for a review of
    the documentation.  Note that you must run INSTALL3 before you can run
    either PC-CODE3 or 4.
    
    Suggested Registration:  $10.00
    
    File Descriptions:
    
    PC-CODE  DOC  Documentation and Notes on PC-CODE3 & PC-CODE4
    PC-STAT3 OBJ  Object code for BOTH MS-DOS (PC-DOS) and XENIX V
    PC-STAT3 EXE  A Analysis program to check codes/texts
    INSTALL3 EXE  A program configurator that sets options/defaults
    PC-CODE4 EXE  Cluster Oriented Block Semi-binary version PC-CODE3
    PC-CODE3 EXE  Combination 8086(88) and 8087 version (works on both)
    INSTALL3 OBJ  Object code for BOTH MS-DOS (PC-DOS) and XENIX V
    PC-CODE3 OBJ  Object code for BOTH MS-DOS (PC-DOS) and XENIX V
    PC-CODE4 OBJ  Object code for BOTH MS-DOS (PC-DOS) and XENIX V
    INSTALL3 FOR  FORTRAN77 Source Code for Installer program
    PC-CODE3 FOR  FORTRAN77 Source Code for PC-CODE3.EXE (8088/8087)
    PC-CODE4 FOR  FORTRAN77 Source Code for PC-CODE4.EXE (8088/8087)
    PC-STAT3 FOR  FORTRAN77 Source Code for PC-STAT.EXE
    CONFIG   PC3  The Configuration file used by PC-CODE3 & INSTALL3
    SECRET3  MSG  Test file for Encoding using PC-CODE3
    SECRET3  KEY  Test key file for encoding "SECRET.MSG" for PC-CODE3
    SECRET3  COD  Test code from encoding "SECRET.MSG" using PC-CODE3
    EXAMPLE  DOC  This Execution Log or printout of sample run
    CRC      TXT  This is the Check Bit Sums for the Entire Disk
    CRC      COM  Does Check Bit sums to verify NO alterations of files
    SECRET4  TXT  Result of decoding SECRET.COD using PC-CODE4
    SECRET4  KEY  Test key file for encoding "SECRET.MSG" for PC-CODE4
    SECRET4  COD  Test code from encoding "SECRET.MSG" using PC-CODE4
    SECRET4  MSG  Test file for Encoding using PC-CODE4
    SECRET3  TXT  Result of decoding SECRET.COD using PC-CODE3
    README        Notes on programs
    COPYRIGH T    Copyright notice
    DIR      TXT  Listing of included files
    ???      DOC  Notes on programs
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```

CRC VER 1.1x MS-DOS 86 Versn   
                          

--> FILE:  FILES   .DOC         CRC = C4 0A

--> FILE:  PC-CODE .DOC         CRC = 57 23

--> FILE:  COPYRIGH.T           CRC = FC 0E

--> FILE:  PC-CODE3.EXE         CRC = 5F 19

--> FILE:  INSTALL3.EXE         CRC = DE 2B

--> FILE:  PC-STAT3.EXE         CRC = 9A 1C

--> FILE:  PC-CODE4.EXE         CRC = F7 03

--> FILE:  CONFIG  .PC3         CRC = C7 36

--> FILE:  PC-CODE3.OBJ         CRC = BB 02

--> FILE:  INSTALL3.OBJ         CRC = 18 DD

--> FILE:  PC-STAT3.OBJ         CRC = A1 16

--> FILE:  PC-CODE4.OBJ         CRC = 2F 59

--> FILE:  PC-CODE3.FOR         CRC = BA EF

--> FILE:  INSTALL3.FOR         CRC = A7 87

--> FILE:  PC-STAT3.FOR         CRC = 98 CE

--> FILE:  PC-CODE4.FOR         CRC = EE 03

--> FILE:  SECRET3 .COD         CRC = 2A 50

--> FILE:  SECRET3 .TXT         CRC = 24 42

--> FILE:  SECRET3 .MSG         CRC = 20 31

--> FILE:  SECRET3 .KEY         CRC = E1 92

--> FILE:  SECRET4 .COD         CRC = D7 B4

--> FILE:  SECRET4 .TXT         CRC = D0 B7

--> FILE:  SECRET4 .KEY         CRC = E1 92

--> FILE:  SECRET4 .MSG         CRC = 20 31

--> FILE:  CRC     .COM         CRC = 5C 5B

--> FILE:  CRC     .TXT         CRC = 00 00

--> FILE:  DIR     .TXT         CRC = EC 39

--> FILE:  EXAMPLE .DOC         CRC = 52 89

 ---------------------> SUM OF CRCS = D0 09

DONE
```
{% endraw %}

## DIR.TXT

{% raw %}
```

 Volume in drive C is NIAL_MACH
 Directory of  C:\PC-CODE3

.            <DIR>      4-06-86  12:33p
..           <DIR>      4-06-86  12:33p
FILES    DOC     1844   4-06-86  11:57a
PC-CODE  DOC     8061   4-06-86  11:11a
COPYRIGH T       1228   4-06-86  11:11a
PC-CODE3 EXE    58552   4-06-86  11:11a
INSTALL3 EXE    36350   4-06-86  11:11a
PC-STAT3 EXE    32646   4-06-86  11:11a
PC-CODE4 EXE    56940   4-06-86  11:11a
CONFIG   PC3      472   4-06-86  11:11a
PC-CODE3 OBJ    14158   4-06-86  11:11a
INSTALL3 OBJ     7799   4-06-86  11:11a
PC-STAT3 OBJ     2735   4-06-86  11:11a
PC-CODE4 OBJ    13240   4-06-86  11:11a
PC-CODE3 FOR    16186   4-06-86  11:11a
INSTALL3 FOR     5661   4-06-86  11:11a
PC-STAT3 FOR     2053   4-06-86  11:11a
PC-CODE4 FOR    16538   4-06-86  11:11a
SECRET3  COD     4018   4-06-86  11:11a
SECRET3  TXT     3714   4-06-86  11:11a
SECRET3  MSG     3702   4-06-86  11:11a
SECRET3  KEY      174   4-06-86  11:11a
SECRET4  COD     4608   4-06-86  11:11a
SECRET4  TXT     4608   4-06-86  11:11a
SECRET4  KEY      174   4-06-86  11:11a
SECRET4  MSG     3702   4-06-86  11:11a
CRC      COM     1536   4-06-86  11:11a
CRC      TXT     1432   4-06-86  11:58a
DIR      TXT        0   4-06-86  11:58a
EXAMPLE  DOC     4671   4-06-86  11:55a
       30 File(s)    667648 bytes free
```
{% endraw %}

## EXAMPLE.DOC

{% raw %}
```

 C> COPY SECRET3.MSG  CON:

  abc def ghi jkl mno pqr stu vwx yz 012 345 678 90+
  ABC DEF GHI JKL MNO PQR STU VWX YZ 012 345 678 90+
  !@# $%^ &*( )_+ |\. <>? /_; :"' ~` XXX XXX XXX XXX
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  ##################################################
  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  [][][][][][][][][][][][][][][][][][][][][][][][][]
  {}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
  ()()()()()()()()()()()()()()()()()()()()()()()()()

                                   $END_OF_TEST_DATA


 C>
 C> PC-CODE3





          PC-CODE3  PORTABLE CRYPTO-SYSTEM  v6.2B


          (c) Copyright R. Nolen COLVARD Company 1986
              Commercial Rights Reserved
          (c) Copyright Microsoft Corp 1985
              Microsoft FORTRAN-77 V3.30


 3            <------- SECURITY ALGORITHM
 Y            <------- KEYS TO BE READ FROM A FILE
 Y            <------- TRANSPOSITION
  32          <------- LOWEST ASCII CHARACTER
 125          <------- HIGHEST ASCII CHARACTER
 Y            <------- ENCODED FILE HEADER
 Y            <------- KEY HASK (CRC) CHECK
   4          <------- FREQ/PERIOD FOR TRANSPOSITIONS
 N            <------- DISPLAY ALL INPUT ON TERMINAL
 N            <------- DISPLAY ALL OUTPUT ON TERMINAL


 Pause.
 Please press <return> to continue.



 Enter Key FILE Name below ---

 secret3.key

 KEYS FOUND=  18

 Encode or Decode ("E" or "D") a file:
 e


 Enter the INPUT File to be ENCODED -----

 secret3.msg

 Enter the OUTPUT file for the CODE -----

 secret3.cod



     *** End of Program PC-CODE3 ***



C>
C> COPY SECRET3.COD  CON:

 $PC-CODE3 V6.2 APR-86;  HASHED=777  $END HEADER
 52Rit|=oY8vODu}Fa=q*3SQ41ZD6p/GA7ac>1wao@E|SHGOY_CfGt_
 52heH|CCCn(/x9;BK{IRyO32Y6"0LS9W=1+h1k{{8!*1F{qqMWbg|a
 52gOzVYv3:0O;}5nD7aW-uuma%!O]1-WD]6g7!QiJMec,T#m]q9cWc
 52B^vfJ TlFnFoH0\P2P{J^0RX"NP|8:dDVhL"*<<X2.R"hLbTv6Zn
 52EGGw'}Y'+I=Q[-CmY]eOI#qcU=]3;+K;/5QIG3;?usuuge})M1se
 52>rHpFb|"&zD0HHz/>60j ZN24^,F$Z^Ntp(LS2hj<vBJx>0P6xv`
 52o+5o5qK?Y9O=E3Se-qqi1;eO;i{;M9=eoEw?Uqoy!O]uc=)Uqwck
 52NnX4,"<$Z0vT"vBA&"^vl^L$V0dl6 L8V0$ZKRPj&V"^: &`F6$b
 52k[+m=5og#7!Wo?=/Q)%w;79-K/M'7MGu7)wm9g#e5eaIm7C1[5)c
 52S%icqQ#e5#}!Ge5mEI3Cck'S5a+[%]MimEa7Y}=m_q/{U}q;g#mo
 52Jhd,<::^808:Z^rVj@\V\*DTJnjXdl?jh8x*<F $zXnpT|.:FlPQ
 52B^Z`V"Z0Jz"L.|r@:8Rx:<D.8xVhB<iVdD|4^FXH"N:X08Z NFdu
 52{HdY5f:yWulhdn18ex!2;x ql\Z$";^?"qV=S}3=EN%#i*L^QWs]
  0
 52UiHI(#-%C)ly%U!KujwS'+#cw^/kWC{[}9rIs/'+F#OEpCY=GEPs



C>
C> PC-CODE3


          PC-CODE3  PORTABLE CRYPTO-SYSTEM  v6.2B


          (c) Copyright R. Nolen COLVARD Company 1986
              Commercial Rights Reserved
          (c) Copyright Microsoft Corp 1985
              Microsoft FORTRAN-77 V3.30


 3            <------- SECURITY ALGORITHM
 Y            <------- KEYS TO BE READ FROM A FILE
 Y            <------- TRANSPOSITION
  32          <------- LOWEST ASCII CHARACTER
 125          <------- HIGHEST ASCII CHARACTER
 Y            <------- ENCODED FILE HEADER
 Y            <------- KEY HASK (CRC) CHECK
   4          <------- FREQ/PERIOD FOR TRANSPOSITIONS
 N            <------- DISPLAY ALL INPUT ON TERMINAL
 N            <------- DISPLAY ALL OUTPUT ON TERMINAL



 Pause.
 Please press <return> to continue.


 Enter Key FILE Name below ---

 secret3.key

 KEYS FOUND=  18

 Encode or Decode ("E" or "D") a file:
 d



 Enter the INPUT File to be DECODED -----

 secret3.cod

 Enter the OUTPUT file for plain TEXT ---

 secret3.txt

     *** End of Program PC-CODE3 ***


 C>
 C> COPY SECRET3.TXT  CON:

  abc def ghi jkl mno pqr stu vwx yz 012 345 678 90+
  ABC DEF GHI JKL MNO PQR STU VWX YZ 012 345 678 90+
  !@# $%^ &*( )_+ |\. <>? /_; :"' ~` XXX XXX XXX XXX
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  ##################################################
  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  [][][][][][][][][][][][][][][][][][][][][][][][][]
  {}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
  ()()()()()()()()()()()()()()()()()()()()()()()()()

                                   $END_OF_TEST_DATA


 C>

```
{% endraw %}

## FILES.DOC

{% raw %}
```

 Volume in drive A is PC-CODE3


FILES    DOC  ...This files contents...
COPYRIGH .T   ...(c) Copyright Notice
PC-CODE  DOC  ...Documentation and Notes on PC-CODE3 & PC-CODE4
PC-CODE3 EXE  ...Combination 8086(88) and 8087 version (works on both)
PC-CODE4 EXE  ...Cluster Oriented Block Semi-binary version PC-CODE3
INSTALL3 EXE  ...A program configurator that sets options/defaults
PC-STAT3 EXE  ...A statistical Analysis program to check codes/texts
CONFIG   PC3  ...The Configuration file used by PC-CODE3 & INSTALL3
PC-STAT3 FOR  ...FORTRAN77 Source Code for PC-STAT.EXE
PC-CODE4 FOR  ...FORTRAN77 Source Code for PC-CODE4.EXE (8088/8087)
PC-CODE3 FOR  ...FORTRAN77 Source Code for PC-CODE3.EXE (8088/8087)
INSTALL3 FOR  ...FORTRAN77 Source Code for Installer program
PC-CODE4 OBJ  ...Object code for BOTH MS-DOS (PC-DOS) and XENIX V
PC-CODE3 OBJ  ...Object code for BOTH MS-DOS (PC-DOS) and XENIX V
INSTALL3 OBJ  ...Object code for BOTH MS-DOS (PC-DOS) and XENIX V
PC-STAT3 OBJ  ...Object code for BOTH MS-DOS (PC-DOS) and XENIX V
SECRET3  MSG  ...Test file for Encoding using PC-CODE3
SECRET3  COD  ...Test code from encoding "SECRET.MSG" using PC-CODE3
SECRET3  KEY  ...Test key file for encoding "SECRET.MSG" for PC-CODE3
SECRET3  TXT  ...Result of decoding SECRET.COD using PC-CODE3
SECRET4  MSG  ...Test file for Encoding using PC-CODE4
SECRET4  COD  ...Test code from encoding "SECRET.MSG" using PC-CODE4
SECRET4  KEY  ...Test key file for encoding "SECRET.MSG" for PC-CODE4
SECRET4  TXT  ...Result of decoding SECRET.COD using PC-CODE4
CRC      COM  ...Does Check Bit sums to verify NO alterations of files
CRC      TXT  ...This is the Check Bit Sums for the Entire Disk
DIR      TXT  ...This directory of the Master Distribution disk
EXAMPLE  DOC  ...This Execution Log or printout of sample run


```
{% endraw %}

## FILES569.TXT

{% raw %}
```
--------------------------------------------------------------------------
Disk No  569  PC-CODE3 and PC-CODE4                                v1  DS2
--------------------------------------------------------------------------
The PC-CODE3 disk includes a analysis program to check codes; a program to
encode data and another to test that a file has not been altered.  The
source code for many of the programs is also included.
 
COPYRIGH .T   (c) Copyright Notice
PC-CODE  DOC  Documentation and Notes on PC-CODE3 & PC-CODE4
PC-CODE3 EXE  Combination 8086(88) and 8087 version (works on both)
PC-CODE4 EXE  Cluster Oriented Block Semi-binary version PC-CODE3
INSTALL3 EXE  A program configurator that sets options/defaults
PC-STAT3 EXE  A Analysis program to check codes/texts
CONFIG   PC3  The Configuration file used by PC-CODE3 & INSTALL3
PC-STAT3 FOR  FORTRAN77 Source Code for PC-STAT.EXE
PC-CODE4 FOR  FORTRAN77 Source Code for PC-CODE4.EXE (8088/8087)
PC-CODE3 FOR  FORTRAN77 Source Code for PC-CODE3.EXE (8088/8087)
INSTALL3 FOR  FORTRAN77 Source Code for Installer program
PC-CODE4 OBJ  Object code for BOTH MS-DOS (PC-DOS) and XENIX V
PC-CODE3 OBJ  Object code for BOTH MS-DOS (PC-DOS) and XENIX V
INSTALL3 OBJ  Object code for BOTH MS-DOS (PC-DOS) and XENIX V
PC-STAT3 OBJ  Object code for BOTH MS-DOS (PC-DOS) and XENIX V
SECRET3  MSG  Test file for Encoding using PC-CODE3
SECRET3  COD  Test code from encoding "SECRET.MSG" using PC-CODE3
SECRET3  KEY  Test key file for encoding "SECRET.MSG" for PC-CODE3
SECRET3  TXT  Result of decoding SECRET.COD using PC-CODE3
SECRET4  MSG  Test file for Encoding using PC-CODE4
SECRET4  COD  Test code from encoding "SECRET.MSG" using PC-CODE4
SECRET4  KEY  Test key file for encoding "SECRET.MSG" for PC-CODE4
SECRET4  TXT  Result of decoding SECRET.COD using PC-CODE4
CRC      COM  Does Check Bit sums to verify NO alterations of files
CRC      TXT  This is the Check Bit Sums for the Entire Disk
EXAMPLE  DOC  This Execution Log or printout of sample run
 
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## KEYS.DOC

{% raw %}
```

Key Period Data
===============

The users may select between 4 and 999 Key NUMBERS.
Each Key number is in the Range 1 to 2,147,483,647.
Although, numbers larger than 65,000 are superior.
Generally, the more numbers, the larger the period
and more complex is the cipher. The period is:

     Period =  (2 ^ 30) ^ (the number of keys)

Where "^" indicates "raised to a power".



Low Security
============

For Low Security 4 to 18 keys are recommended.


High Security
=============

For Low Security 19 to 999 keys are recommended.
Generally, the more the better; and the more often changed
the better.

For 19 keys the period is approxiately (2^571) or about
(2^256) times the period of the National Bureau of Standards
DES algorithm. But, this may not be enough for very long
messages or if the key is used many times.


```
{% endraw %}

## NOTES569.TXT

{% raw %}
```
Program name:          PC-CODE3
 
Author name:           Richard Nolen
Address:               COLVARD
 
Suggested Donation:    $10
 
Program Description:
           PC-CODE3  is a program designed to help enchipher data and
           would be of interest to programmers and other users.
 
           PC-CODE3 and PC-CODE4 are Portable Versions Specifically
           for Generic MS-DOS and Xenix 5. They are written in a
           strictly portable Microsoft FORTRAN-77 V3.30. The Object
           code on these diskette(s) is compatiable with both MS-DOS
           and Microsoft Xenix; meaning these program need NO recompiling
           - they only needed to LINKED to the respective libraries.
           As distributed they have been Linked for MS-DOS.
 
           As an added side feature, the MS-DOS version will automatically
           execute faster if the PC contains an Intel 8087 math co-processor.
 
           PC-CODE3 is a simplified version of PC-CODE2 (V1.53) and likewise
           is intended for "Printable" textal data or Console input (CON:).
 
           PC-CODE4 is a simplified version of PC-CODE1 (V1.53) and likewise
           is intended for encoding Files as opposed to text.
 
           PC-STAT3 is a simple statistical program by which the user may
           do simple analysis of either a Plain Text FILE or a Coded FILE.
           Basically, it does frequency counts that were previously embedded
           features of PC-CODE1 & 2.
```
{% endraw %}

## PC-CODE.DOC

{% raw %}
```

   * * * * * * * * * * * * * * * * * * * * * * * * *
   *                                               *
   *  P C - C O D E 3     &      P C - C O D E 4   *
   *                                               *
   * * * * * * * * * * * * * * * * * * * * * * * * *



   v6.1/v6.2   April 1986    By Richard Nolen COLVARD


   PC-CODE3 and PC-CODE4 are Portable Versions Specifically
   for Generic MS-DOS and Xenix 5. They are written in a
   strictly portable Microsoft FORTRAN-77 V3.30. The Object
   code on these diskette(s) is compatiable with both MS-DOS
   and Microsoft Xenix; meaning these program need NO recompiling
   - they only needed to LINKED to the respective libraries.
   As distributed they have been Linked for MS-DOS.

   It is a goal to generate only Portable Source Code in
   universally Portable languages like FORTRAN and "C".
   Most versions of Unix (copyright ATT) supply a FORTRAN
   compiler usually called "F77".

   As an added side feature, the MS-DOS version will automatically
   execute faster if the PC contains an Intel 8087 math co-processor.
   If your PC doesnot - no matter - except that the programs will
   run slower.


   PC-CODE3 is a simplified version of PC-CODE2 (V1.53) and likewise
   is intended for "Printable" textal data or Console input (CON:).


   PC-CODE4 is a simplified version of PC-CODE1 (V1.53) and likewise
   is intended for encoding Files as opposed to text.


   PC-STAT3 is a simple statistical program by which the user may
   do simple analysis of either a Plain Text FILE or a Coded FILE.
   Basically, it does frequency counts that were previously embedded
   features of PC-CODE1 & 2.


   INSTALL3 is used to drive and configure PC-CODE3/PC-CODE4.
   Many options that were specified repeatitively by questions
   now are answered only once - when a change is required.
   The user elelected options are stored in a file called "CONFIG.PC3".
   An example of this file Follows:



   3            <------- SECURITY ALGORITHM
   Y            <------- KEYS TO BE READ FROM A FILE
   Y            <------- TRANSPOSITION
   32           <------- LOWEST ASCII CHARACTER
   125          <------- HIGHEST ASCII CHARACTER
   Y            <------- ENCODED FILE HEADER
   Y            <------- KEY HASK (CRC) CHECK
   4            <------- FREQ/PERIOD FOR TRANSPOSITIONS
   N            <------- DISPLAY ALL INPUT ON TERMINAL
   Y            <------- DISPLAY ALL OUTPUT ON TERMINAL



          SECURITY ALGORITHM
          ==================

          The user may select from up to three Psuedo Random Number
          generators. A user who knows FORTRAN may also add as many
          as he/she wishes - since the Source Code is provided.
          As programmed the present options are 1 or 2 or 3.


          KEYS TO BE READ FROM A FILE
          ===========================

          Valid answers are "Y" for YES and "N" for NO. If the user
          wishes to read this key numbers from a file enter "Y".
          If "N" is specified, the user must type in these numbers.
          The numbers are between 1 and 2,147,483,647. And for true
          security only 6 to 8 digits numbers should be used.

          A key file is simply a series of number (4 or more)
          separated by Fortran Carriage returns (and/or line feeds)
          and terminated by an end of file mark (CNTL-Z).

          For example (ignoring scale):

          0        1         2    <----- File Column Position
          12345678901234567890
          ..........+.........
          41626272
          10973003
          05553134
          99185776
          44045122
          126477121
          200943657
          ^Z




          TRANSPOSITION
          =============

          Transposition is an added feature to allow Super-Encipherment.
          If this option is "Y" (for YES), then the code is Scrambled
          and well as encoded. This features improves security by
          400 percent, but costs in execution time. Execution times
          in some cases are more than doubled. If you desire is for
          speed as opposed to improved security "N" is the correct
          option.



          LOWEST ASCII CHARACTER
          ======================

          Actually, this is more correctly Lowest EBCDIC character.
          On the IBM PC, 32 is the Space/blank and is also the first non
          special character. Characters 00 thru 31 are special
          Control or Communications characters and are for the most
          part "Non-printable". Refer to Appendix D (Pages D-1 thru
          D-5) in the IBM BASIC Reference Manual 6361134 dated May
          1984 for PC-DOS 3.0. Generally, using 32 as a default
          will save later problems.




          HIGHEST ASCII CHARACTER
          =======================

          Actually, this is more correctly Highest EBCDIC character.
          On the IBM PC, 125 is the last originary character -
          excluding the non-printable graphic characters. Generally,
          using a value of 125, will allow every character on any
          PC keybroad.



          ENCODED FILE HEADER
          ===================

          If this option is "Y" (for YES), than an Encoded File
          will have an Header record to verify that the file
          was encoded by a particular version of this program.
          The program will also refuse to decode a file that
          has not been encoded. This is generally a good safety
          feature. A value of "N" (for NO) diables this feature.



          KEY HASK (CRC) CHECK
          ====================

          If this Option is "Y" AND the prior option (file header)
          is also "Y", then a hash total from the keys used to
          encode the file is stored in the Encoded File Header
          record. The Hashed number is between 000 and 996.
          No security is loss by this feature of any consequences.
          It protects the users from decoding a file with the wrong
          keys. In rare cases, an encoded file could be destroyed
          if the wrong key(s) were used (especially PC-CODE4).



          FREQ/PERIOD FOR TRANSPOSITIONS
          ==============================

          If the user has elected to Transpose (scramble) his/her
          encoded (Y) - then a new deal or permutation must be
          generated for this scrambling. The highest security
          means that a frequency of one (1) should be used ;
          meaning a new permutation for each record. But, for
          economy, it has been found that a new permuation can
          be used up to 4 times - with little loss in security.
          Note, also that is feature is nullified if the inputed
          records are of differing lengths constantly. Each time
          a record length varies from the previous length a
          new deal must be generated regardless for PC-CODE3.
          This restriction does not apply to PC-CODE4 where are
          records are fixed at 128 characters (or 256 or 512..etc).




          DISPLAY ALL INPUT ON TERMINAL
          =============================

          If this option is "Y" (for YES), then all input to the
          programs are listed or displayed on the Console (CRT).
          This is assumed to be "CON:" on MS-DOS.



          DISPLAY ALL OUTPUT ON TERMINAL
          ==============================

          If this option is "Y" (for YES), then all output from
          the program is listed or displayed on the Console (CRT).
          This is assumed to be "CON:" on MS-DOS.




   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

   These programs are released in the Public Domain and only the
   Commercial Rights are Reserved.   By Richard Nolen COLVARD.

   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


```
{% endraw %}

## SECRET3.TXT

{% raw %}
```
Now the LORD had shown unto me, Abraham, the intelligences that were
organized before the world was; and among all these were many noble
and great ones;
              And God saw these souls that they were good, and he
stood in the midst of them, and he said: These I will make my rulers;
for he stood among those that were spirits, and he saw that they were
good; and he said unto me: Abraham, thou art one of them; thou wast
chosen before thou wast born.
 
Where wast thou when I laid the foundations of the earth? declare,
if thou hast understanding.
Who hath laid the measures thereof, if thou knowest? or
who laid the corner stone thereof;
 When the Morning Stars sang together, and all the Sons of God shouted
for joy?
 
Then shall the dust return to the earth as it was:
and the spirit shall return unto the God who gave it.
 
Then the word of the Lord came unto me, saying,
Before I formed thee in the belly I knew thee; and be-
fore thou camest forth out of the womb I sanctified thee,
and I ordained thee a prophet unto the nations.
 
In hope of eternal life, which God that cannot lie, prom-
ised before the world began.
 
Furthermore we have had fathers of our flesh which corrected us, and
we gave them reverence: shall we not much rather be in subjection unto
the Father of Spirits, and live?
 
The Lord possessed me in the beginning of his way, be-
fore his works of old.
   I was set up from everlasting, from the beginning, or
ever the earth was.
   When there were no depths, I was brought forth, when
there were no fountains abounding with water.
   Before the mountains were settled, before the hills was
I brought forth.
  While as yet he had not made the earth, nor the fields,
nor the highest part of the dust of the world.
  When he prepared the heavens, I was there: when he
set a compass upon the face of the depth:
  When he established the clouds above: when he
strengthened the fountains of the deep:
  When he gave the sea his decree, that the waters
should not pass his commandment: when he appointed the
foundations of the earth:
   Then I was by him, as one brought up with him: and I was daily
his delight, rejoicing always before him;
   Rejoicing in the habitable part of his earth; and my
delights were with the Sons of Men.
 
           Our birth is but a sleep and a forgetting;
           The soul that rises with us, our life's star
             Hath had elsewhere its setting
               And commeth from afar;
             Not in entire forgetfulness,
               And not in utter nakedness,
           But trailing clouds of glory do we come
             From God, who is our home.
 
 
  If I have told you earthly things,
  and ye believe not, how shall ye
  believe, if I tell you heavenly
  things ?
  And no man hath ascended up
  to heaven, but he that came down
  from heaven, even the Son of man
  which is in heaven.
 
 
 
  abc def ghi jkl mno pqr stu vwx yz 012 345 678 90+
  ABC DEF GHI JKL MNO PQR STU VWX YZ 012 345 678 90+
  !@# $%^ &*( )_+ |\. <>? /_; :"' ?` XXX XXX XXX XXX
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  ##################################################
  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  [][][][][][][][][][][][][][][][][][][][][][][][][]
  {}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
  ()()()()()()()()()()()()()()()()()()()()()()()()()
 
                                   $END_OF_TEST_DATA
```
{% endraw %}

## SECRET4.TXT

{% raw %}
```
Now the LORD had shown unto me, Abraham, the intelligences that were
organized before the world was; and among all these were many noble
and great ones;
              And God saw these souls that they were good, and he
stood in the midst of them, and he said: These I will make my rulers;
for he stood among those that were spirits, and he saw that they were
good; and he said unto me: Abraham, thou art one of them; thou wast
chosen before thou wast born.

Where wast thou when I laid the foundations of the earth? declare,
if thou hast understanding.
Who hath laid the measures thereof, if thou knowest? or
who laid the corner stone thereof;
 When the Morning Stars sang together, and all the Sons of God shouted
for joy?

Then shall the dust return to the earth as it was:
and the spirit shall return unto the God who gave it.

Then the word of the Lord came unto me, saying,
Before I formed thee in the belly I knew thee; and be-
fore thou camest forth out of the womb I sanctified thee,
and I ordained thee a prophet unto the nations.

In hope of eternal life, which God that cannot lie, prom-
ised before the world began.

Furthermore we have had fathers of our flesh which corrected us, and
we gave them reverence: shall we not much rather be in subjection unto
the Father of Spirits, and live?

The Lord possessed me in the beginning of his way, be-
fore his works of old.
   I was set up from everlasting, from the beginning, or
ever the earth was.
   When there were no depths, I was brought forth, when
there were no fountains abounding with water.
   Before the mountains were settled, before the hills was
I brought forth.
  While as yet he had not made the earth, nor the fields,
nor the highest part of the dust of the world.
  When he prepared the heavens, I was there: when he
set a compass upon the face of the depth:
  When he established the clouds above: when he
strengthened the fountains of the deep:
  When he gave the sea his decree, that the waters
should not pass his commandment: when he appointed the
foundations of the earth:
   Then I was by him, as one brought up with him: and I was daily
his delight, rejoicing always before him;
   Rejoicing in the habitable part of his earth; and my
delights were with the Sons of Men.

           Our birth is but a sleep and a forgetting;
           The soul that rises with us, our life's star
             Hath had elsewhere its setting
               And commeth from afar;
             Not in entire forgetfulness,
               And not in utter nakedness,
           But trailing clouds of glory do we come
             From God, who is our home.


  If I have told you earthly things,
  and ye believe not, how shall ye
  believe, if I tell you heavenly
  things ?
  And no man hath ascended up
  to heaven, but he that came down
  from heaven, even the Son of man
  which is in heaven.



  abc def ghi jkl mno pqr stu vwx yz 012 345 678 90+
  ABC DEF GHI JKL MNO PQR STU VWX YZ 012 345 678 90+
  !@# $%^ &*( )_+ |\. <>? /_; :"' ~` XXX XXX XXX XXX
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  ##################################################
  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  [][][][][][][][][][][][][][][][][][][][][][][][][]
  {}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
  ()()()()()()()()()()()()()()()()()()()()()()()()()

                                   $END_OF_TEST_DATA
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0569

     Volume in drive A has no label
     Directory of A:\

    FILES    DOC      1844   4-06-86  11:57a
    CONFIG   PC3       472   4-06-86  11:11a
    COPYRIGH T        1228   4-06-86  11:11a
    CRC      COM      1536   4-06-86  11:11a
    CRC      TXT      1432   4-06-86  11:58a
    DIR      TXT      1335   4-06-86  11:58a
    EXAMPLE  DOC      4671   4-06-86  11:55a
    INSTALL3 EXE     36350   4-06-86  11:11a
    INSTALL3 FOR      5661   4-06-86  11:11a
    INSTALL3 OBJ      7799   4-06-86  11:11a
    KEYS     DOC       859   4-06-86  12:37p
    PC-CODE  DOC      8061   4-06-86  11:11a
    PC-CODE3 EXE     58552   4-06-86  11:11a
    PC-CODE3 FOR     16186   4-06-86  11:11a
    PC-CODE3 OBJ     14158   4-06-86  11:11a
    PC-CODE4 EXE     56940   4-06-86  11:11a
    PC-CODE4 FOR     16538   4-06-86  11:11a
    PC-CODE4 OBJ     13240   4-06-86  11:11a
    PC-STAT3 EXE     32646   4-06-86  11:11a
    PC-STAT3 FOR      2053   4-06-86  11:11a
    PC-STAT3 OBJ      2735   4-06-86  11:11a
    README             422   4-06-86  12:16p
    SECRET3  COD      4018   4-06-86  11:11a
    SECRET3  KEY       174   4-06-86  11:11a
    SECRET3  MSG      3702   4-06-86  11:11a
    SECRET3  TXT      3714   4-06-86  11:11a
    SECRET4  COD      4608   4-06-86  11:11a
    SECRET4  KEY       174   4-06-86  11:11a
    SECRET4  MSG      3702   4-06-86  11:11a
    SECRET4  TXT      4608   4-06-86  11:11a
    GO       BAT       770   6-20-86   1:22p
    NOTES569 TXT      1512   6-20-86   1:26p
    FILES569 TXT      2154   6-20-86   1:25p
           33 file(s)     313854 bytes
                           32768 bytes free
