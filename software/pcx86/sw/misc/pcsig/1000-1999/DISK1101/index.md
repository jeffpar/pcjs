---
layout: page
title: "PC-SIG Diskette Library (Disk #1101)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1101/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1101"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "UTILITY POTLUCK"

    Are you looking for a nifty little gimmick to customize your own
    shareware release or perhaps the disks you share with friends or members
    of your local users group? If so, get DISK SIGN.
    
    DISK SIGN is a simple, inexpensive package that lets you place a
    customized message of up to three lines in length into the DOS
    directory. The message is displayed each time someone uses the DIR
    command on the disk. The special title or business name is displayed in
    vertical columns and outlined in borders for emphasis. Operating this
    package is easy and uses very little memory. One of the more clever
    promotional or marketing ideas to come around in a while!
    
    Keep sensitive data protected with CIPHER -- a powerful encryption
    package that can turn any file into an unintelligible jumble of random
    characters. Only you have the key to unscramble it back into a readable
    form. Each encoding can have up to 50 printable characters. And,
    unlike most other file encryption schemes, CIPHER is very difficult to
    uncode because it's based on sophisticated techniques similar to those
    used by U.S. Government agencies.
    
    AUTONUM is a simple, useful program for assigning sequential numbers
    (seven digits max.) to such items as purchase orders, invoices,
    statements, checks, memos, and many other business forms. It works by
    using batch files to effectively automate the numbering process and
    reduce the possibility of repetitive errors.
    
    If you're tired of typing multiple keystrokes to execute common DOS
    commands, then MASTERDOS can relieve your keyboard-cramped fingers. DOS
    commands are reduced to single keystrokes making the overall
    operation of your DOS-based machine a breeze. Master configurations are
    stored as data files to eliminate re-entering of data. MASTERDOS has
    selectable terminal emulations and includes commands to copy files,
    change drives, erase files, locate files globally, reorder files
    on-screen, type files, and perform many other features.
    
    Learning MASTERDOS requires minimal training time, and on-line help is
    only a function key away. Six pages of well-written documentation
    cover the basics of operation.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AUTONUM.DOC

{% raw %}
```
    
                           AUTONUM LICENSE AGREEMENT
                           =========================
                                Copyright 1988
                           LINNELL & ASSOCIATES LTD
       1218-545  The West Mall - Etobicoke - Ontario - Canada - M9C 1G6
      (416) 621-7949 - Telex CNCP Dialcom 23:JLN001 - Fax (416) 620-7312
                Industrial Control & Micro Computer Consultants 
    -----------------------------------------------------------------------
    
    This  is  a user supported software product.  It is NOT  public  domain 
    software, nor is it free software. You are granted a limited license to 
    use  this  product  on a trial basis.   If you  continue  to  use  this 
    product after a trial period, you are expected to register by sending:

    $25.00 U.S. $30.00 Canadian registration fee per copy. (Ont  purchasers 
    add $1.75 PST)

    which entitles you to one copy of the latest revision of the program(s) 
    and one year of free updates.

    Contact  us for information concerning low cost site licenses.  If  you 
    like  the shareware concept - try before you buy - please  support  the 
    companies that provide it.


    You are encouraged to distribute copies of this software providing that 
    you make no modifications to any of the files and that the copies  that 
    you  distribute, regardless of the means of distribution,  contain  all 
    files  that  came  on  your  product  diskette.  You  are  specifically 
    prohibited  from  either selling this product or including  it  in  any 
    software  package  for sale without written authority  from  Linnell  & 
    Associates Ltd. Violators will be prosecuted. 

                                   DISCLAIMER
                                   ----------

    This  software product and associated instructional material  are  sold 
    "as  is"  without warranty as to their performance,  accuracy,  freedom 
    from error, merchantability or fitness for any particular purpose.  The 
    entire  risk  as to the performance of the software is assumed  by  the 
    user.

    Under  no circumstances, whether in contract or tort, shall  Linnell  & 
    Associates Ltd. be liable for direct, indirect, consequential, special, 
    or  exemplary damages such as, but not limited to, loss of  revenue  or 
    anticipated profits, lost business or other economic loss, arising  out 
    of, or in connection with this agreement, or your use, or inability  to 
    use any program or sub-program associated with this software product.
 
 
                             APPLICATIONS & USE
                             ==================
 
    AUTONUM  is  intended for use with batch files on  IBM  PC,XT,AT  micro 
    computers.  It's  main applications lie in small  business  or  similar 
    installations  where  it  is desireable to  use  sequentially  numbered 
    documents such as purchase orders, invoices, statements etc.

    A typical installation would be as follows:

    Batch  files are prepared for Invoicing, Purchasing,  Statements,  Work 
    Orders  etc  accessed  by  either function  key  assignments  or  short 
    descriptive names such as 'INV', 'PURCH', etc. which switch directories 
    as necessary, call up the program, process the required application and 
    return you to your specified directory.

    You use your favorite word processor to do the actual form filling,  be 
    it  Wordstar,  Word Perfect etc. This program prepares a copy  of  your 
    basic form to be filled out and gives you the number to apply to it.

    It  can  also  be used in purchasing for example to look  up  the  next 
    Purchase Order number quickly while on the phone to a supplier, without 
    continuing on into the form preparation until a later time.





                              TYPICAL BATCH FILE
                              ==================
    Filename 'INV.BAT'

    ECHO OFF         Turns off the screen while the batch file runs.
    CLS              Clears the screen
    CD\FINANCE\INV   Change directory to where invoices are located
    AUTONUM          Runs the AUTONUM.EXE program.
    CD\WORK          Returns you to your normal directory on completion
    CLS              Clears the screen

    In our application here this handles our invoicing, a second batch file 
    'PURCH.BAT' deals with all purchase orders. In that case line 3 changes 
    directories to \FINANCE\PURCH.









                             INITIAL INSTALLATION
                             ====================

    The  first  time that you run AUTONUM on a new directory  you  will  be 
    presented with a screen of information advising you to note down before 
    continuing such items as:
    (1) The command used to invoke your word processor.
    (2) Any prefix used on your document numbering such as PO, INV etc.
    (3) The starting number of the form series.
    (4) The name of the blank  form which the program will copy for you  to 
        fill out.

    Note.  The maximum combined prefix and form number is 7 characters.  

    You  then have the option to continue and install the program  or  stop 
    and prepare the necessary data and blank form. 

    When you do install the program it produces a small file called 'FNREC' 
    which contains the up dates for serial number, word processor name  and 
    other  data the the program needs.  If you destroy that file  the  next 
    time  you run AUTONUM you will automatically be required to re  install 
    it. 


                               IN CONCLUSION
                               =============

    The  program copy on this disk is intended for demonstration and  trial 
    purposes  only.   When  you  find how useful it is  and  send  us  your 
    registration  we  will  send  you a  commercial  free  latest  revision 
    together  with any other current data or applications suggestions.  You 
    will  be entitled to free updates as they occur during the  first  year 
    and notification of any updates thereafter for purchase at reduced cost 
    on presentation of your original registered diskette.

    Our office hours are 9 A.M. TO 5.0 PM  Eastern Standard Time Monday  to 
    Friday,  Canadian  Public  & Civic  Holidays  excepted.  Any  personnel 
    answering the phones after those hours will not be qualified to  assist 
    you  in any manner so please do us both a favour, save your  money  and 
    call in the regular business hours or use fax.  

    Thank you for considering our product.

    John T. Linnell.
    President.      
    Linnell & Associates Ltd.  




```
{% endraw %}

## CIPHER.DOC

{% raw %}
```




                                CIPHER Ver. 1.2
                        (c) Copyright 1989 Mike Albert
                                  August 1989



1   INTRODUCTION

    Cipher is a program that scrambles files so that no one can use them -
unless they have the correct key.  (If you're familiar with earlier versions
of Cipher, look at section 8 to learn about new enhancements.)  Cipher
provides the following benefits:

    *   Protection is provided by a reliable, documented method that is highly
        resistant to attack - even by expert programmers and cryptographic
        analysts.

    *   Cipher is easy to use - it protects you from mistakes and helps you to
        remember keys.

    *   Cipher is faster than other programs that provide comparable security.

    *   Cipher can encrypt files in place, so unerase utilities can't recreate
        them.

    *   Cipher can also make a new encrypted file and leave the original file
        untouched - this is useful when sending an encrypted file to someone
        else.

    *   Cipher can be used from batch files to provide security automatically.

    *   Cipher is less expensive than commercially available programs.

    *   Cipher guards against changes to itself - you can be sure you have an
        unmodified Cipher and also detect any subsequent tampering.

    *   All proceeds of Cipher go to Oxfam America, an international self-help
        and disaster relief organization.


    Cipher encrypts and decrypts files using a cryptographically sound method.
Encryption makes a file unintelligible and useless.  Decryption is the
reverse - it converts the encrypted information to its original understandable
form.  The encryption is controlled by a key that you provide.  You can use
any string of characters you like.  When you want to use the files, you
decrypt them using the same key to return them to their original form.
Someone who doesn't know the correct key or doesn't have Cipher is powerless
to make the file useful again.

    Cipher protects you from common errors such as decrypting a file with the
wrong key, decrypting a file that's not encrypted, or encrypting a file twice
(unless you specifically request it).  It also helps you remember your key -
you describe the key when you encrypt (e.g. "my old Corvette license number"),



                                     - 1 -




and Cipher displays your description when you decrypt.  You can control Cipher
interactively, with command line arguments, or via an MS-DOS environment
variable.  Cipher is also well suited to batch file use.

    Cipher runs on any MS-DOS compatible machine (IBM and BIOS compatibility
is not needed) using MS-DOS 2.00 or later, and uses 64K of memory.  All
standard display adapters may be used as long they display at least 80
characters per line.  Files may reside on floppy or hard disks and be any type
or size.

    Note that Cipher keeps people from understanding and using the contents of
your files, but doesn't prevent normal file operations such as deleting,
copying, or renaming.  If you're concerned about someone destroying your data,
Cipher doesn't help.  Cipher does protect against the introduction of false
information.  Someone can modify an encrypted file, but they can't achieve a
specific result because decryption affects their changes in an unpredictable
way.  Consequently a file that is modified in its encrypted form will have
garbage in the changed portion of the file when it's decrypted.

    Remember that you MUST specify the correct key to decrypt a file and make
it useful again.  Cipher will help you recall the key and tell you if you
enter the wrong one, but it doesn't remember the key for you.  If you forget
the key there are no shortcuts or bypasses - you're stuck with a useless file!
Since Cipher encrypts files in-place to ensure security, Norton utilities or
the like won't help.  Cipher has no trapdoors that let you, me, or anyone else
decrypt a file without the key, so BE CAREFUL!

    If you want to try out Cipher right now, just run Cipher with no command
line arguments.  Cipher will display a brief description of its operation that
you can use to get started.  While you're getting used to Cipher, be sure to
work in a test directory with test files to ensure that you don't irrevocably
scramble something important.



2   OPERATION

    You control Cipher by command line arguments that specify the commands to
be performed, options, and the files to be encrypted or decrypted.  The
commands and options must precede the files on the command line and be
separated with blanks.  You can specify multiple options, but only one
command.  You can use one of the following commands:

    COMMAND     MEANING     EXPLANATION

    -e          Encrypt     Encrypts the files and prompts you for the key.
                            You are only prompted once - the key you enter is
                            used for all the files.

    -e<key>     Encrypt     Encrypts the files using <key>.

    -d          Decrypt     Decrypts the files and prompts for the key.
                            Cipher will only decrypt encrypted files.  If the



                                    - 2 -




                            files were encrypted with the -i option, Cipher
                            helps you remember the key by displaying the key
                            description you provided.  If the key you specify
                            is incorrect, Cipher prompts you for the correct
                            key.

    -d<key>     Decrypt     Decrypts the files using <key>.  This command
                            works like -d above except that the key provided
                            with the command is used.


You can use the following options:

    OPTION      MEANING     EXPLANATION

    -i<desc>    Info        Saves a description of the key used to encrypt the
                            files.  When you encrypt or decrypt the files,
                            Cipher displays the description for you in the key
                            prompt.  For example, you could use "my student id
                            number at Penn State".

    -r          Re-encrypt  Lets you encrypt a file even if it is already
                            encrypted.  This is useful when two people want to
                            control the use of one file - each person can
                            encrypt with his own password.  Encrypting a file
                            more than once also provides even greater
                            security.  A file encrypted more than once must be
                            decrypted in reverse order of encryption, i.e. the
                            first decryption must use the key from the last
                            encryption.

    -s          Suppress    Suppresses screen list of the name of each file
                            processed or skipped - only a summary is shown.
                            Error messages are not suppressed.


    If you specify the file names on the command line as described above,
Cipher encrypts or decrypts the files in place.  File names can include drive
letters, paths, and wild-card characters ("*" and "?") in the standard MS-DOS
format.  To specify multiple file names, separate the names with spaces.

    If you want to make a new file and leave the original file untouched, use
input and output redirection (invoked via the "<", ">", and "|" command line
options) to identify the files.  File redirection is described in the MS-DOS
manual under "Redirecting Command Input and Output".  You can only process one
file at a time this way.  Make sure the input and output file are different,
or the file will be destroyed.  An example of redirection is shown in the last
example below.








                                    - 3 -




    Some examples of Cipher use are as follows:

              cipher  -eMike  -i"my first name"  test.*

    All files in the current directory matching the name test.* are encrypted
    in place using key "Mike".  When you decrypt the files the key description
    (i.e. "my first name") will be shown with the prompt.

              cipher  -d  a:\mp\data\*.*  a:\wp\*.*

    All files on drive a: in directory \mp\data and \wp that were previously
    encrypted are decrypted in place.  Unencrypted files are left alone.  You
    are prompted for the decryption keys.  Cipher remembers the keys you enter
    during the run, and only prompts you for different keys.

              cipher  -eMike

    All files specified interactively (i.e. in response to Cipher's prompt)
    are encrypted in place using the key "Mike".

              cipher  -eMike  <letter.src  >letter.snd

    File letter.src is encrypted with key "Mike" and written to file
    letter.snd.  File letter.src is not altered.


    If you want to interrupt Cipher at any time press Ctrl-C.  If Cipher is
waiting for input from you it will terminate immediately.  If Cipher is
encrypting or decrypting a file, it will terminate when the operation is
complete.

    Note that Cipher gives you the capability to protect your information, but
doesn't guarantee safety.  To ensure security there are several things you
should remember:

    1.  Don't hard-code your keys in batch files.  Anyone can run or examine
        them and decrypt your files.

    2.  Don't use keys that can be easily guessed, such as your initials or
        your girlfriend's first name.  This sort of thing is the first method
        most attackers will try.

    3.  Don't write your keys down and leave them somewhere they can be found.

    4.  Be careful with the -i (key description) option.  To be safe, you must
        refer to information only YOU know.

    5.  Use long keys.  It's common to use short keys because they're easy to
        remember and enter.  The problem is that exhaustive testing of all
        short keys could succeed with relatively little effort.  Use at least
        8 characters for good protection, and 15 for maximum security.





                                    - 4 -




    6.  Use the cryptographic checksum feature (described in section 3) to
        protect against Trojan horses or other attacks.  It's surprisingly
        simple for a knowledgeable attacker to patch a program so it does what
        he wants.

    7.  Watch out for portions of confidential files that may remain on your
        disks.  Normal operations (e.g. editing a WP document or a spread
        sheet model) can leave copies of parts of your files in unused
        portions of the disk.  A knowledgeable user can poke around the disk
        looking for interesting stuff.  This information may reside in two
        places: unallocated clusters, or the unused portion of the last
        cluster of a file.  The first case is easy - unallocated clusters may
        be zeroed using Norton Utilities Wipedisk with the /E option.  The
        second case is tougher because your data can be at the end of ANY
        file, not just the one you're using.  Cipher takes care of the file
        being encrypted by zeroing the unused area at the end, but it doesn't
        do the same for all the files on the disk.  You can partially protect
        against this problem by running Wipedisk immediately after running any
        program that alters files containing confidential information.  This
        clears the information before at has the chance to be included in some
        other file.  The only way to completely protect against this problem
        is to delete all unencrypted files (or encrypt all files) on the disk
        and then using Wipedisk or the like to zero all unused sectors.

This all sounds obvious (except for item 7), but many attempts at security are
compromised because of this type of carelessness.



3   ADVANCED OPERATION

    If you don't specify enough information via the command line, Cipher
prompts you.  If you don't code -e or -d, Cipher asks if you want to encrypt
or decrypt.  Cipher also prompts you for the key, the key description, or the
file names if you don't specify them.  File names can include drive letters,
paths, and wild-card characters in the standard MS-DOS format.  To specify
multiple file names separate the names with spaces.  When you enter file names
from the prompt, Cipher lists the name of any files skipped, even if you
specified the -s option.

    You may also specify commands and options (but not files) in the
environment variable CIPHROPT.  You can use all commands and options available
from the command line.

    If someone alters Cipher you can detect the changes with the cryptographic
checksum feature.  Detecting changes is important because an attacker could
modify Cipher to encrypt files using a weaker method, write all keys to a file
only he knows about, or compromise the protection in some other way.
Detection is guaranteed only if the Cipher you have has not been tampered with
before you received it - see a later paragraph for detecting this situation.

    To compute the cryptographic checksum, run Cipher with the -c command.
Cipher asks you for a key, combines this key cryptographically with the file,



                                    - 5 -




computes the checksum, and displays it.  You can use any key you want.  If
anyone changes the file or you use a different key, the checksum changes too.
Someone who wants to compromise Cipher is frustrated because they don't know
what key you are using, so they can't make the corrupted Cipher display the
right checksum.  If you compute the checksum when you receive Cipher and write
down the key and checksum in a safe place, you can recompute the checksum at
any time to check for changes.  As long as you keep your key secret (and you
started with an unmodified Cipher), no one can change Cipher and still have it
produce the same checksum.

    The cryptographic checksum feature is also used to detect corruption of
Cipher that occurred before you received it.  You can detect Trojan horses,
viruses, or any other alterations to both the program and this documentation.
To test for changes you use a key/checksum combination that you can request
from me you when you register.  You compute the checksum for your Cipher using
the key I provide.  If your Cipher doesn't display the checksum I send, your
copy of Cipher is corrupted.  Since I send a different key (and checksum) to
each registered user, no attacker will be able to obtain your key and checksum
and circumvent the protection.  (Note that when you run any unknown program,
including Cipher, you run the risk of it performing mischief on your system,
so be careful.  It's probably not too helpful to learn that the checksum is
invalid if a Trojan horse has just erased your disk!)



4   OPERATIONAL DETAILS

    This section describes some details of operation that may be of interest,
as follows:

    1.  Cipher is careful not to encrypt itself.  This protects you from
        scrambling Cipher and having no way to unscramble it.

    2.  When Cipher encrypts or decrypts a file it doesn't alter the file's
        attributes or date/time stamp.

    3.  Cipher will not alter files with the system, hidden, or read-only
        attributes.

    4.  Encrypted files contain all 256 character combinations even if the
        original file only contained ASCII.  If you want to transmit an
        encrypted file via a modem make sure you use a communication protocol
        that supports binary files.

    5.  The key may consist of up to 50 printable characters.  Upper and lower
        case characters are considered to be different.  If you enter too many
        characters or a non-printable character you are notified.

    6.  It is possible that on a full disk Cipher will run out of disk space
        when it tries to append the encryption mark to the end. (The mark is
        described in section 5).  If this occurs you will be warned.  No
        damage results - Cipher does not encrypt the file in this case.  This
        problem doesn't occur with decryption.



                                    - 6 -




    7.  It is possible that even with the safeguards built into Cipher and
        careful use you will find yourself with an encrypted file and only a
        vague memory of the key.  If you just can't guess the right key,
        you're stuck.  Perhaps a close personal friend who works for the
        National Security Agency could help, but short of that there is no way
        to recover.  I can't help you.  Sorry, but that is, after all, the
        whole point of this product.



5   TECHNICAL INFORMATION

    The encryption method used in Cipher is described in the paper "Wide-Open
Encryption Design Offers Flexible Implementations" by Robert Scott,
CRYPTOLOGIA, January 1985.  Scott's method uses principles derived from the
Data Encryption Standard (DES), a standard for commercial and non-military
governmental data encryption adopted by the National Bureau of Standards in
1977.  The Scott method employs a longer key (providing greater security) and
executes more rapidly than the DES method.  The algorithm is coded in assembly
language and optimized to make it as fast as possible.  Cipher augments the
Scott method by randomizing the file before encrypting it.  This makes the
encrypted text even more secure, and ensures that patterns in the source file
cannot be detected in the encrypted file.

    It should be noted that methods used by many commercial encryption
products are not as secure as claimed.  The paper "A survey of Data Insecurity
Packages" by Martin Kochanski, CRYPTOLOGIA, January 1987, evaluated the
methods used by SuperKey (Borland International), Padlock (Sovereign
Software), PS3 (Stralfors Data Products), Crypt (BCS), and N-Code (K+L
Software).  Kochanski found that "all these packages are vulnerable to known-
plaintext attacks; some with as few as 6 bytes of plaintext needed.  Moreover,
all the packages except N-Code can be broken quite effectively without any
known plaintext at all."  He demonstrated his point by breaking the packages
using standard cryptanalysis techniques and an IBM PC.  The techniques he used
are known to students of cryptanalysis and could be employed by anyone who
wants to steal your information or invade your privacy.  The bottom line is
that if you want to be sure about the security of your files, you must be very
careful in selecting an encryption package.

    Kochanski did not examine the Scott method used in Cipher.  He did point
out the weakness of the methods he examined - "All the packages we have looked
at suffer from a lack of diffusion: a small change in the plaintext causes
only a small change in the ciphertext."  The Scott method allows each bit of
plaintext to affect 64 bits of ciphertext.  This diffusion is the same used in
the DES method.

    Cipher takes additional measures to ensure security.  Files are encrypted
and decrypted in place (except when file redirection is used) to ensure that
the original information does not remain on disk.  This also avoids running
out of space on full disks.  When files are encrypted in place, the unused
portion of the last cluster of the file (which often replicates data in the
file) is zeroed so that no unencrypted information can be found there.




                                    - 7 -




    The marking feature that enables Cipher to recall information about an
encrypted file is implemented by appending information to the end of a file
when it is encrypted.  This information contains an encryption signature (used
to determine if the file is encrypted), the key description (that is displayed
in the decryption key prompt), and some encrypted text (used to recognize the
correct key at decryption time).  Note that the encryption key itself if NOT
included.  The file is returned to its original length when it is decrypted.

    The cryptographic checksum feature was suggested by Dr. Fred Cohen in the
paper "A Cryptographic Checksum for Integrity Protection", Computers &
Security #6, 1987.  Cipher uses the Scott encryption method instead of the RSA
cryptosystem and reduction in modulus described by Cohen.  Each block of the
file is combined with a number indicating its position in the file, encrypted
with the user-provided key, and added (without carry) into the cumulative
checksum.  As a result any change in a character of the file or its position
is reflected in the checksum.



6   LICENSING, WARRANTY, and REGISTRATION

    Cipher is distributed as user-supported software.  I encourage you to try
the program and share it with friends as long as:

    1.  The Cipher program, this documentation, and any other Cipher files are
        not modified and are distributed together.

    2.  Cipher is not provided as a part of any other product.

    3.  No fees, beyond a reasonable fee for media, duplication, or
        downloading costs, are charged.

    4.  Cipher is not used for commercial, government, or business purposes
        without registration.  Each registration is for a single individual or
        a single computer.


    If you decide to use this product regularly I encourage you to show your
support by registering.  All proceeds of Cipher are directed to Oxfam America,
an international self-help and disaster relief organization that I've
supported for many years.  You can find more about Oxfam by reading section 7.
If you register you get the satisfaction of saving lives in Africa, Asia, and
South America, and encourage me to produce more software at reasonable prices.
You also get the following benefits:

    If you request, I'll provide a key/checksum pair for each Cipher file.
    You can then verify that the Cipher you have received is unmodified and
    contains no Trojan horses, computer viruses, or other illegitimate
    changes.

    I'll answer questions on Cipher and its use.  You can contact me at the
    address shown below.  I'll respond in writing or by phone.




                                    - 8 -




    I'll make an attempt (but no guarantee!) to fix any problems you find.

    If any important bugs are found I will notify you.  I'll do the same for
    any flaws found in the encryption method that compromise security.

    I'll send an updated version of Cipher to you at no additional cost.  You
    can request this when I notify you of a new version, when I've fixed a bug
    you have found, or any other time.  I'll only do this once per registered
    user.


    Registration is $40.  Please make your check payable to Oxfam America -
I'll send your checks to Oxfam and record your registration information.  I'll
also accept original canceled checks or receipts from Oxfam that list you as
the donor.  Please send payments, registration information, and any other
correspondence to:

           Mike Albert
           Suite 42
           P. O. Box 2100
           Chelmsford, MA   01824

    Anyone can order the latest version of Cipher directly from me for a fee
of $5.00.  Just send the order (make sure it contains your mailing address)
with your check to the above address.  You'll receive a 5 1/4 inch 360K floppy
disk containing the Cipher executable and documentation files.  If you live
outside North America, please send extra money for the increased postage.

    I welcome all comments and suggestions concerning Cipher.  I'd like to
know how you are using Cipher and what problems, bugs, or weaknesses you find.
If you tell me about enhancements or changes you're interested in, I'll make
an effort to provide them.  I'd also like to know what other products you
would like to see.

    This program is provided "as is" without warranty of any kind, either
express or implied, but not limited to the implied warranties of
merchantability or fitness for a particular purpose.  The entire risk as to
the results and performance of the program is assumed by the user.  Should the
program prove defective, the user assumes the entire cost of all necessary
servicing, repair, or correction.



7   OXFAM AMERICA

As stated in Oxfam literature,

    "Oxfam America is an international agency that funds self-help development
    projects and disaster relief in poor countries in Africa, Asia, and Latin
    America, and also prepares and distributes educational materials for
    people in the United States on the issues of development and hunger.  The
    name "Oxfam" comes from the Oxford Committee for Famine Relief, founded in
    England in 1942.  Oxfam America, based in Boston, was formed in 1970, and



                                    - 9 -




    is one of seven autonomous Oxfams around the world (Great Britain,
    Australia, Belgium, Canada, Quebec, Hong Kong and the United States).
    Oxfam is a nonsectarian, nonprofit agency that neither seeks or accepts
    U.S. government funds.  All contributions are tax-deductible to the extent
    permitted by law."

For more information, you can phone Oxfam at 617-482-1211, or write to them
at:

             Oxfam America
             115 Broadway
             Boston, MA  02116



8   REVISION HISTORY

    CIPHER version 1.2 - 8/1/89

        Added decryption of files encrypted by earlier versions of Cipher.
        Version 1.2 will decrypt files encrypted by versions 1.00 and 1.1.
        Versions 1.00 and 1.1 can only decrypt files encrypted by themselves.

        Added encryption of files that are already encrypted.  This lets two
        people control the use of one file - each person can encrypt with his
        own password.  It also provides even greater security.  The feature is
        invoked via the -r option.


    CIPHER version 1.1 - 7/1/89

        Added encryption/decryption of files without overwriting original
        file.

        Enhanced encryption method to ensure that patterns in the original
        file cannot be detected by examining the encrypted file.  Note that
        files generated by Cipher versions 1.00 and 1.1 are incompatible.

        Directed all Cipher proceeds to Oxfam America.

        Improved some messages.


    CIPHER version 1.00 - 3/30/88

        Original program.










                                    - 10 -

```
{% endraw %}

## FILE1101.TXT

{% raw %}
```
Disk No: 1101
Program Title:  UTILITY POTLUCK
PC-SIG version:  1.1

Are you looking for a nifty little gimmick to customize your own
shareware release or perhaps the diskettes that you share with friends
or members of your local users group?  If so, DISK SIGN just might be
the ticket!

DISK SIGN is a simple, inexpensive package that lets a user place a
customized message of up to three lines in length into the DOS
directory.  Thus the message is displayed each time a directory (dir)
command is invoked on the diskette.  The special title or business name
is displayed in vertical columns and outlined in borders for emphasis.
Operating this package is neat and easy and it utilizes only minute
amounts of available diskette memory in the process.  Certainly one of
the more clever and innovative promotional or marketing ideas to come
around in a while!

So...you say you're worried about your wife, Mother, or the FBI finding
those computer files containing your secret love letters to Jody
Foster??  Well, you need no longer fear because CIPHER is here!!

CIPHER is a powerful, inexpensive encryption package that turns any
desired file into an unintelligible jumble of random characters.  Only
you possess the key that can unscramble it back into a legible form --
an encoding key that can consist of up to 50 printable characters.  And,
unlike most other file encryption schemes, CIPHER is for all intents and
purposes unbreakable and is based upon sophisticated techniques similar
to those employed by U.S.  Government agencies!

AUTONUM is a simple, useful program for assigning sequential numbers to
such items as purchase orders, invoices, statements, checks, memos, and
many other business forms.  It works by using batch files to effectively
automate the numbering process and reduce the possibility of repetitive
errors.

Batch files can either be accessed by function key assignments or by
short descriptive names.  The batch files make the necessary directory
changes, initiate AUTONUM, complete the required procedure, and then
return the user to a specified directory.  The maximum number of
characters that can be used in a given application is seven.

If you're tired of typing multiple keystrokes to execute common DOS
commands, then MASTERDOS can help relieve your keyboard-cramped fingers.
MASTERDOS has selectable terminal emulations and can copy, change
drives, erase files, locate files globally, reorder files on-screen,
type files, and a host of other useful features.

MASTERDOS reduces common DOS commands to single keystrokes making the
overall operation of your DOS-based machine a breeze.  Learning
MASTERDOS requires minimal training time and on-line help is only a
function key away, anytime you're forgetful.  Once established, master
configurations are stored as data files to eliminate the necessity to
re-enter the data.  Six pages of written documentation cover the basics
of operation in an understandable format.

Usage:  Programming Utilities, Business Utilities, DOS Level Utilities.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00 for AUTONUM, $35.00 + $5.00 for shipping for
MASTERDOS, $20.00 for DISK SIGN, $40.00 for CIPHER.

File Descriptions:

------------  AUTONUM
AUTONUM  EXE  Main program file
AUTONUM  DOC  Documentation, 3 pp.
DOC      BAT  Automatic startup file
FILES         Data files
REGFRM        Registration form
AUTONUM  ARC  Archived version
------------  MASTERDOS
README        Update information
README   BAT  Loads the README file
D        EXE  Main program file
D        CFG  Configuration file
START    BAT  user information.
------------  CIPHER
CIPHER   COM  Main program file
CIPHER   DOC  Documentation, 8 pp.
------------  DISKSIGN
GO       COM  Initialization file
DISKSIGN COM  Main program file
README   TXT  Startup information

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## README.TXT

{% raw %}
```






              
                                      Disk Sign
                            (c) 1988 Dan Little Computing
                                            

             Type GO <return> for instructions.   To register, send
             $ 20.00 to:
              
                          Dan Little Computing
                          PO Box 1443 
                          Morgantown, WV  26507-1443

             You will receive a free update, and documentation.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1101

     Volume in drive A has no label
     Directory of A:\

    AUTONUM  DOC      6912   3-25-88   7:34a
    AUTONUM  EXE     36197   3-16-88   2:36p
    CIPHER   COM     32024   8-01-89
    CIPHER   DOC     27014   8-01-89
    D        CFG      4389  12-13-87   5:14p
    D        EXE     76009   2-03-88   9:52p
    DISKSIGN COM      9349   4-19-88   9:33a
    DOC      BAT       128   3-16-88   9:31p
    FILE1101 TXT      4062   8-31-89  11:08a
    FILES              384   3-20-88   9:57p
    GO       COM      8518   4-19-88   3:39p
    GO       TXT      1387   6-09-88   3:00p
    GO1      TXT       848   6-09-88   3:01p
    README           15059   2-09-88   8:36p
    README   BAT        29  12-10-86   8:43p
    README   TXT       507   4-19-88   3:45p
    REGFRM            1920   3-20-88   3:57p
    START    BAT        79   6-09-88   2:45p
           18 file(s)     224815 bytes
                           87040 bytes free
