---
layout: page
title: "PC-SIG Diskette Library (Disk #658)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0658/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0658"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TOOLKIT UTILITIES"

    This diskette contains a small but excellent collection of programs
    which aid in DOS utilities and collectively are called "TOOLKIT."
    WC.EXE is an advanced word/char/line counter PLUS checksummer, which
    supports command line wildcards.  TC.EXE is an easy to read text
    compare program to find differences in a file.  INPATH.EXE is a file
    finder program with a twist: it locates files based upon the PATH
    variable, and uses the same extension hierarchy (COM-EXE-BAT) that DOS
    does; it is similar to "whereis" in the UNIX system.
    
    System Requirements:  128K, one disk drive and monochrome
    display.
    
    How to Start:  Type GO and press <enter> for startup instructions. To
    read DOC files simply enter TYPE filename.ext and press <ENTER>.
    
    Suggested Registration:  $5.00 gets you latest version and documentation
    $20.00 requested for commercial/government usage.
    
    File Descriptions:
    
    INPATH   EXE  DOS file finder program
    TC       EXE  Text compare program
    TOOLKIT  DOC  Documentation for above programs (17k)
    WC       EXE  Text word, character and line counter program
    GO       BAT  Startup information batch file
    TOOLKIT  ORD  Toolkit registration form
    IDEA     DOC  Idea request message IDEA     FRM  Idea form
    IDEA     FRM  Idea form
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES658.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  658  DOS Toolkit                                          v1   DS2
---------------------------------------------------------------------------
This diskette contains a small collection of programs which aid in DOS
utilities and collectively are called, "TOOLKIT."  WC.EXE is an advanced
word/char/line counter PLUS checksummer, which supports command line
wildcards.  TC.EXE is an easy to read text compare program to find
differences in a file.  INPATH.EXE is a file finder program with a
twist: it locates files based upon the PATH variable, and uses the same
extension hierarchy (COM-EXE-BAT) that DOS does; it is similar to
"whereis."  All programs are documented in TOOLKIT.DOC.
 
------------- DOS Toolkit (v1.0)
INPATH   EXE  DOS file finder program
TC       EXE  Text compare program
WC       EXE  Text word, character and line counter program
TOOLKIT  DOC  Documentation for above programs (17k)
IDEA     DOC  Idea request message
IDEA     FRM  Idea form
TOOLKIT  ORD  Toolkit registration form
GO       BAT  Startup information batch file, type GO (enter)
 
PC Software Interest Group (PC-SIG)
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1986
```
{% endraw %}

## IDEA.DOC

{% raw %}
```
         


                                 $$$$$ FOR IDEAS


         Do You Have A Good Idea For A New ShareWare Software Product???
         Do  You  Not  Have  The  Time,  The  Tools, Or The Experience To
         Develop It Yourself???
                                  Read On!!!!!!

         I will pay you a commission for new ShareWare product ideas.  If
         you have an idea which  you  would  like  to  see  made  into  a
         program,  just  make a short document stating your idea and what
         features should be included.  Nothing fancy -- a  page  or  less
         will do.  Then, fill out my idea form and send it to me.  That's
         all!
         I  am  a professional software engineer specializing in assembly
         language and  C  language,  although  I  do  ShareWare  products
         strictly  as  a sideline to help offset the costs of my computer
         hobby.  Here are the details of my offer:

              ** If I use your idea for a ShareWare product, I  will
              pay  you 15% of the first year's received donations on
              the product, not to exceed $100.00.  Payments will  be
              made  quarterly during the first year of the product's
              issue.

              ** You will automatically become a registered user  of
              the product.

              **  You  may be asked to try out a pre-release version
              and report your opinions.  In addition, I may ask  for
              further details on your idea if necessary.  Failure to
              cooperate  with  me releases me from any obligation to
              you.

              ** Only  the  first  person  to  submit  a  particular
              suggestion  to  me  will  be  eligible  to receive any
              commission, and the submitted idea must not be already
              developed or under development or under  consideration
              by me.

              **  I will be the sole judge of which ideas to accept.
              I will inform you within 30 days of  receipt  of  your
              idea whether I intend to use it.

              **  Even  if  I  accept  your  idea,  I  am  under  no
              obligation to act upon that idea, nor to act  upon  it
              within a given time period.

              **  If  you  submit  an  idea  which I use, it is your
              responsibility to notify me of any change in  address.
              If I cannot find you, I cannot pay you!



         








         


              **  Commissions  are  paid  solely  on  the  basis  of
              received donations on the finished  product.    If  it
              doesn't sell, neither of us make anything.  That's how
              ShareWare works!


         So, put  me to work for you.  But please, let's be just a teensy
         original.  The world doesn't  need  another  directory  utility,
         unless it does something really original and useful.


         High  on my list of priorities for ideas are programs for use in
         Amateur Radio.  This is almost virgin  territory --   plenty  of
         room for growth!





                                STEVEN E. MARGISON
                                 124 Sixth Street
                             Downers Grove, IL, 60515

                              CompuServe 74435,1042
                                         





























         








```
{% endraw %}

## NOTES658.TXT

{% raw %}
```
Program name: DOS Toolkit (v1.0)
 
Author name:  Steve E Margison
Address:      124 Sixth Street
              Downers Grove, Il  60515
 
Tel number:   Compuserve (74435,1042)
 
Suggested Donation: $20.00 - includes soruce code
 
Program Description:
 
This diskette comprises a set of DOS utilities collectively called
"Toolkit." Each program is documented with the one documentation
file called TOOLKIT.DOC, which is about 17k. Each program is explained
below. This package is excellent for hard drive users, but will be
useful for anyone wishing to ease their DOS housekeeping. These programs
will run under the IBM-PC with at least 128k memory.
 
INPATH.EXE:
 
This is a utility to locate an EXECUTABLE program in your PATH variable.
It will report the location of the program which would be executed if
you used the filename as a DOS command.  This is identical to the UNIX
program "whereis".  INPATH will first look for the file in the current
directory, and then look in the PATH environment variable (if it is
present) in the order specified.  For each directory, INPATH first tries
to locate a .COM file, then a .EXE file, then a .BAT file, since that is
the order in which DOS searches for files.  On the first match, INPATH
reports the directory and full filename of the program and then exits.
If none are found, that fact is reported.
 
TC.EXE:
 
This is a Text Compare program, which works only on ASCII text files.
It reports differences between files in a very friendly manner, unlike
some other DIFF-type programs.  Most useful for subtle differences, such
as changed words or spellings.  The program will report any lines which
are different with the filename, line number, and a printout of the
actual line.  If one file ends before the other, the program reports
which file terminated first.
 
WC.EXE:
 
This is a Word Counting program which will report words, characters,
lines, and a checksum on the file.  For non-text files, only the
checksum is reported.  The program will report words, characters, lines,
and a checksum, which is a simple binary addition of all character
values.  No, it is not a CRC, but it is a quick check to see if it the
same as another file under the same name.  Many options are available
which tell the program to report ONLY specified items such as: only words,
lines, or characters.
```
{% endraw %}

## TOOLKIT.DOC

{% raw %}
```
         












                            ==========================
                            =        TOOLKIT         =
                            =    MS-DOS UTILITIES    =
                            =        - by -          =
                            =   Steven E. Margison   =
                            ==========================


                    Programs and Documentation Copyright 1986
                   by Steven E. Margison -- All Rights Reserved


































                   TOOLKIT Programs  Issue A.1         Page 1








         




                             TOOLKIT MS-DOS UTILITIES


         I. INTRODUCTION
                 Almost anyone who writes software eventually winds up by
         writing a whole bunch of  short  utilities  for  various  tasks.
         Normally,  I  issue  each  program  as  a  stand-alone ShareWare
         program.  However, I have several programs which  I  just  can't
         justify issueing  as  separate  products.  Therefore, my TOOLKIT
         will become the repository for all these little bits and pieces.
         The programs contained in this package may not all  be  to  your
         use,  but it is hoped that at least one or two will be useful to
         almost any PC user.  This package will be updated very often  to
         include  new  goodies,  and  an  update policy will be described
         later in this document.




         II. OVERVIEW OF PROGRAMS
                 Here is a short list and  description  of  the  programs
         currently in the TOOLKIT:

              * INPATH
              A utility to locate an EXECUTABLE program in your PATH
              variable.   Will  report  the  location of the program
              which would be executed if you used the filename as  a
              DOS command.  Identical to the UNIX program "whereis".

              * TC
              This  is  a  Text Compare program, which works only on
              ASCII text files.    It  reports  differences  between
              files  in  a  very  friendly manner, unlike some other
              DIFF-type programs.      Most   useful   for    subtle
              differences, such as changed words or spellings.

              * WC
              This  is  a  Word  Counting  program which will report
              words, characters, lines, and a checksum on the  file.
              For non-text files, only the checksum is reported.












                   TOOLKIT Programs  Issue A.1         Page 2








         


         III. PROGRAMS IN DETAIL

                                      INPATH

                 Typing INPATH at the DOS prompt will display the version
         number and a short usage message.  To use, type:

               inpath <filename>

         where filename is the basename portion of the executable file to
         find.  Note that an  extension  can  be  specified,  but  it  is
         ignored.   INPATH  will  first  look for the file in the current
         directory, and then look in the PATH environment variable (if it
         is present) in the order specified.  For each directory,  INPATH
         first tries to locate a .COM file, then a .EXE file, then a .BAT
         file,  since  that is the order in which DOS searches for files.
         On the first  match,  INPATH  reports  the  directory  and  full
         filename of the program and then exits.  If none are found, that
         fact is reported.


                                        TC

                 Typing  TC  at  the  DOS prompt will display the verison
         number and a short usage message.  To use, type:

               tc file1 file2

         where file1 and file2 are the two files  to  compare.    If  the
         files are  identical,  no  more message will appear.  Otherwise,
         the program will report any lines which are different  with  the
         filename, line  number,  and  a printout of the actual line.  If
         one file ends before the other, the program reports  which  file
         terminated first.




















                   TOOLKIT Programs  Issue A.1         Page 3








         


                                        WC

                 Typing WC at the DOS prompt  will  display  the  version
         number and a short usage message.  To use, type:

                wc [-wclsq] file1 file2 filen...

         where file?  is  the  name  of  the  file  to act upon.  With no
         options, the program will report words, characters, lines, and a
         checksum, which is a simple binary  addition  of  all  character
         values.   No,  it ain't a CRC, but it is a quick check to see if
         it the same as another file under the same name.    The  options
         [wcls] tell the program to report ONLY the items specified:

              -w     report only words
              -l     report only lines
              -c     report only characters
              -s     report only checksum

         Note  that  giving all options is the same as giving no options.
         The program normally reports the  full  filename  of  each  file
         processed,  unless  the  -q  option  is  given,  which supresses
         filename display.  Wildcards are as filenames,  and  directories
         are supported.    However, directory paths may be used only with
         unique filenames, not with wildcards; the coding was  simply  to
         ghastly for this application!  If options are used, they MUST be
         the   first  argument  given,  else  they  will  be  treated  as
         filenames.  The program aborts on the first non-existant file.

         Since words, lines, and characters are meaningless in a non-text
         file, the program examines the filename extension  to  determine
         if the  file  is  a  binary  or text file.  This isn't a perfect
         method, but it is good enough.  If the file extension  is  .COM,
         .EXE,  .OBJ,  or  .LIB,  then  only  the  checksum  is reported,
         overriding all other options.



















                  TOOLKIT Programs  Issue A.1         Page 4








         


         IV. SHAREWARE AND COMMERCIAL LICENSING
                 By  now,  the ShareWare concept should be familiar to PC
         users.   In  a  nutshell,  ShareWare   is   "try-before-you-buy"
         software, reasonably  priced  and  user-supported.   This simply
         means that you can get ShareWare software for free  from  anyone
         who has  a  copy,  or often from bulletin board systems.  If you
         use and like the program, then the author requests a donation to
         support further software development.  By registering and making
         a donation, you will often  also  receive  notice  of  available
         upgrades or  supplemental  programs.    Of course, payment under
         ShareWare is voluntary, but if the program  is  useful  and  the
         price  is  right, why not pay the dues and provide the incentive
         and reward necessary to continue development of new  and  better
         software?
                 TOOLKIT programs  are  ShareWare  programs.  If you like
         and use them, a donation of $5.00 to the author will  place  you
         on  a  mailing  list  for  any  future upgrade notices, and will
         register you as a user of these programs.  You will also receive
         a diskette (DSDD 5.25" DOS 2.0+) with the  latest  versions  and
         documentation,  plus  other  documentation relative to ShareWare
         programs by Steven Margison.  A registration form is provided at
         the end of this manual.  For  a  donation  of  $8.00,  you  will
         receive the  next  TOOLKIT  upgrade  automatically.  If you have
         suggestions for the improvement of these programs,  please  send
         them to  the  author.    If  they are incorporated into a future
         version of the program you will receive a  free  disk  with  the
         newer version.   Even if your suggestions are not used, they are
         appreciated and will be given due consideration.    It  is  only
         through  user  feedback  that  future  programs and upgrades can
         answer the needs of the PC community.
                 TOOLKIT may be used in  a  commercial  environment  only
         upon  payment of a site licensing fee to the author, although it
         may be tried for free under  the  ShareWare  concept.    A  site
         license  for  any  number  of  computers at the same location is
         $15.00, or $20.00 for one automatic upgrade.
                 TOOLKIT may be freely exchanged or given away.  However,
         it may not be included or "bundled" with any software  which  is
         sold  or is a commercial product, nor may any charge be made for
         copying or transferring the files.  PC Users groups may  request
         from the author an exemption to this restriction.
                 TOOLKIT and its documentation may not be transferred nor
         exchanged in  any  modified  form.  If you really want to "hack"
         the program or the documentation, by all means do so; but  don't
         give the  hacked  version to anyone else.  This author cannot be
         expected to help others use this program if it is not  the  same
         as it  was  when  distributed.    Under no circumstances may the
         copyright notices be altered or removed from the program or this
         documentation.
                 TOOLKIT programs were written in the C  language.    The
         source  code  is available from the author, but it is NOT in the
         public domain.  Source code on a  DSDD  5.25"  diskette  may  be
         obtained for  personal  use  upon  payment of a $20.00 fee.  The


                  TOOLKIT Programs  Issue A.1         Page 5








         


         source code  may  NOT  be  exchanged.    The  source code may be
         purchased for commercial use by special request to  the  author,
         and  the  payment  of $40.00 if not for resale, or $80.00 if for
         resale.




         V. WARRANTY
                 Oh,  this  shouldn't  be  necessary  among  friends  and
         gentlemen,  but  it's  really  the lawyers who run the world and
         they say we gotta do this:


              ** TOOLKIT programs are hereby placed  in  the  Public
              Domain,   subject  to  the  limitations  specified  in
              section IV of this manual.
              ** TOOLKIT programs and  documentation  are  copyright
              1986 by Steven E. Margison.
              **  These  programs and documentation are provided "as
              is" without warranty of any kind, either expressed  or
              implied,  including  but  not  limited  to the implied
              warranties  of  merchantability  and  fitness  for   a
              particular purpose.
              **  The user of these programs and documentation agree
              to hold  the  author  and/or  distributor(s)  of  this
              program  and  documentation harmless for any direct or
              consequential damages resulting  from  its  use.    In
              other words, "you're on your own!"
              **  If  these  programs were received by the user on a
              diskette directly from the author (S.E. Margison) then
              the diskette will be warranted to be free from defects
              for a period of 30 days from date of purchase.    Sole
              liability  of  the  author  shall  be  to replace such
              defective diskette with a like diskette upon return of
              the defective  diskette.  "Defective  diskette"  shall
              mean  a  diskette  which is physically or magnetically
              damaged in such a way as to make  the  contained  data
              inaccessible to a properly functioning computer of the
              type intended for the media.
              **  IBM  is  a  registered  trademark of International
              Business Machines Corporation.
              ** MS-DOS is a trademark of MicroSoft Corporation.











                  TOOLKIT Programs  Issue A.1         Page 6








         


         VI. And Now A Word From The Author...
                 Well,  if  you got this far, you must be at least mildly
         interested in what I have to say; for that I thank you.  I  hope
         that  you will use TOOLKIT programs and find them indispensable.
         Besides money, user satisfaction is all that a  REAL  programmer
         wants out  of  life.    Even if you do not decide to donate, I'd
         like  to  hear  your  comments   on   the   program   and   this
         documentation.
                 Got  an  idea  for a program which you would like to see
         written?  Let me know -- I pay commissions on ideas which I  use
         for new ShareWare programs!
                 A business-sized SASE will bring you a list of currently
         available programs from me.

                            --- Steven E. Margison ---
                          --- CompuServe 74435,1042 ---






































                   TOOLKIT Programs  Issue A.1         Page 7








         


         
         =======================================================================
                      SOFTWARE REGISTRATION FORM AND ORDER
         =======================================================================
         A separate form must be filled out for each product ordered or
         registered.  This form may be photocopied, printed out, or
         edited to include all information and re-printed.
         
         PRODUCT: --------- TOOLKIT PROGRAMS Issue A.1 -------------------
         
         Check all that apply:                                    Amount:
         
         [ ]  Standard non-commercial registration   $5.00        $______
         [ ]  as above, with 1 free update           $8.00        $______
         [ ]  Commercial site license                $15.00       $______
         [ ]  as above, with 1 free update           $20.00       $______
         [ ]  Non-commercial Source Code license     $20.00       $______
         [ ]  Commercial Source Code license         $40.00       $______
              * for non-resale use only.  Attach explanation
                of need for source code and intended purpose.
         [ ]  Commercial Source Code license         $80.00       $______
              * for resale use.  Attach explanation of intended
                use in your product of source code or modified
                program code.
         
                                          TOTAL ENCLOSED:         $______
         If you already have these programs, where were they obtained?
         [ ]CompuServe  [ ]Friend  [ ]Employer  [ ]BBS:__________________
         Version___________ Serial No._______________ 
         
         Payment is by check[ ] or money order[ ] (Sorry - no COD or charges)
         
         NAME _______________________________________________________
         
         COMPANY ____________________________________________________
         
         ADDRESS ____________________________________________________
         
         CITY _______________________________________________________
         
         STATE___________________________ ZIP _______________________
         
         =======================================================================
         Send completed form and payment to:
                             Steven E. Margison
                              124 Sixth Street
                          Downers Grove, IL, 60515
         =======================================================================
                       - do not write below this line -
         
         recd________   sent________  version #_____   serial #_____



                  TOOLKIT Programs  Issue A.1         Page 8








```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0658

     Volume in drive A has no label
     Directory of A:\

    FILES658 TXT      1292   1-04-80   2:56a
    GO       BAT       586   1-04-80   1:55a
    IDEA     DOC      3590   6-03-86   8:48p
    IDEA     FRM      1928   6-03-86   8:45p
    INPATH   EXE     14234   8-15-86   9:27p
    NOTES658 TXT      2389   1-04-80   2:58a
    TC       EXE     12566   6-14-86  10:01p
    TOOLKIT  DOC     16667   6-18-86  10:13p
    TOOLKIT  ORD      2275   8-03-86   9:43p
    WC       EXE     16696   6-18-86   9:35p
           10 file(s)      72223 bytes
                           85504 bytes free
