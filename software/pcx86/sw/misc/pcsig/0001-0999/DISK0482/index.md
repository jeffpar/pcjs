---
layout: page
title: "PC-SIG Diskette Library (Disk #482)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0482/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0482"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ENCODE AND DECODE"

    ENCODE/DECODE gives you an efficient way to encrypt and
    decrypt sensitive and company-private information.  Protect spreadsheets
    source code, wordprocessor documents, data files -- in fact any file at
    all.  If your data is valuable, secure it with ENCODE/DECODE.
    File Descriptions:
    
    ENCODE   TXT  Documentation in plain vanilla DOS text file form.
    ENCODE   DOC  Documentation MS-WORD 3.0 form.
    ELITE    STY  Style sheet if your printer has 12 pitch 10 point type.
    NORMAL   STY  The style sheet used by all documentation.
    PICA     STY  Style sheet if your printer cannot do 12 pitch type.
    PIG      STY  Style sheet used to create the plain *.TXT documents.
    DECIPHER COM  Decipher executable.
    DECIPHER PAS  Decipher source.
    DECODE   COM  Decode executable.
    DECODE   PAS  Decode source.
    DECRYPT  COM  Decrypt executable.
    DECRYPT  PAS  Decrypt source.
    ENCIPHER 65   Encipher executable -- short 65 char lines.
    ENCIPHER COM  Encipher executable -- normal 125 char lines.
    ENCIPHER PAS  Encipher source.
    ENCODE   65   Encode executable -- short 65 char lines.
    ENCODE   COM  Encode executable -- normal 125 char lines.
    ENCODE   PAS  Encode source.
    ENCRYPT  65   Encrypt executable -- short 65 char lines.
    ENCRYPT  COM  Encrypt executable -- normal 125 char lines.
    ENCRYPT  PAS  Encrypt executable.
    MAKEKEY  COM  Makekey executable.
    MAKEKEY  PAS  MakeKey source.
    README   TXT  Introductory text file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ENCODE.TXT

{% raw %}
```

                  ENCODE DECODE FOR ELECTRONIC MAIL VERSION 2



     PURPOSE

     The computer programs "Encode" and "Decode" allow spreadsheets, pro-
     grams, source code, word processor documents, data files (in fact any
     file at all) to be sent via electronic mail (eg. Envoy, GTE Telemail,
     SourceMail, MCI Mail, Telex, Western Union EasyLink) between MS-DOS
     (ie. IBM PC compatible) computers with perfect integrity.

     Without Encode/Decode word processing files lose their formatting
     (underline, bold etc.) when they are sent via electronic mail.  Docu-
     ments with lots of blank lines in them often flood the Telenet packet
     network resulting in "data lost" errors.  Programs and spreadsheets
     cannot be sent at all as the Electronic Mail systems cannot handle the
     special characters in them.  Teleprocessing programs often tack on ex-
     tra characters at the beginning and end of documents that must be re-
     moved manually.  Static on the phone lines can garble the transmis-
     sions with no warning.

     Encode and Decode do not actually send the documents.  Programs such
     as Smart-Com and PC-Talk do this.  Encode prepares a document for
     sending by converting all the special characters in the document into
     ordinary characters.  The document is then sent via Envoy, Telemail,
     Telex etc.  At the other end, Decode converts the ordinary characters
     back into the original special characters.

     Encode also compresses the document and prepares it in special ways
     for very efficient transmission.  This means that the charges for
     sending the document are less.  For a simple word processing document,
     the encoded form is shorter than the original document.  Even in the
     worst possible case the encoded document is never more than twice as
     long as the original.

     If any characters were garbled in transmission via Electronic Mail,
     Decode would detect this and warn you that you must send the document
     again.

     There are also two systems for sending secret messages.  One
     (Encipher/Decipher) is quick and inexpensive and keeps the casual ob-
     server from intercepting the message.  The other (Encrypt Decrypt
     MakeKey) is a cumbersome, but a theoretically uncrackable system.
     Note that the commonly used DES government standard encryption algo-
     rithm is in theory crackable.

     Encrypt and Decrypt can also be used to encrypt files that are not
     even going to be sent via electronic mail, but which must be stored in
     an uncrackably secret form.





         \AB1\MODEM\ENCODE.DOC  -1-  last updated 1987 February 2







                          ENCODE DECODE for Electronic Mail


     It costs about $0.60 per 1000 characters to send a file by electronic
     mail.  Thus it is usually cheaper to send files by mailing a diskette
     rather than by sending via electronic mail.  Electronic mail is best
     used for short files or when the files are needed immediately.


     USING THE PROGRAMS

     If you wish to send a file, you must first use ENCODE to prepare it
     for sending, then send it using the standard electronic mail, then use
     DECODE at the other end.

     If you wish to send a confidential file you must first use ENCIPHER to
     prepare it for sending, then send it using the standard electronic
     mail, then use DECIPHER at the other end.  Note that an amateur cryp-
     tographer could crack the code if he intercepted the file or had a
     copy of DECIPHER.

     If you wish to send an absolutely top secret confidential file you
     must first use MAKEKEY to prepare a secret key file.  This file must
     be sent ahead of time via courier to the recipient.  The key file can
     be sent by electronic mail (using ENCODE ENCIPHER or ENCRYPT) but then
     you risk interception.  Then when you wish to send a secret message
     you must use ENCRYPT to prepare it for sending, then send it using the
     standard electronic mail, then use DECRYPT at the other end.  For ab-
     solute uncrackability (even by the CIA and the KGB) the key file must
     be used only once and it must be longer than the message encoded.


     USING ENCODE TO SEND FILES

     eg. ENCODE  C:\SYS\MYPROG.COM  C:\SCOM\MYPROG.TEL

     This means encode file MYPROG.COM on disk C: in subdirectory \SYS and
     create a file called MYPROG.TEL on disk C: in subdirectory \SCOM plac-
     ing the encoding of MYPROG.COM in it.

     Never use the same name for both files.  ENCODE does not modify or
     destroy the original file MYPROG.COM.

     The file C:\SCOM\MYPROG.TEL can then be sent using the standard elec-
     tronic mail.  Don't send MYPROG.COM!!


     USING DECODE TO RECEIVE FILES

     eg. DECODE  C:\SCOM\MYPROG.TEL  C:\FASTSYS\MYPROG.COM

     This means decode file MYPROG.TEL on disk C: in subdirectory \SCOM
     that has just arrived via electronic mail and create a file called
     MYPROG.COM on disk C: in subdirectory \FASTSYS placing the decoded
     original contents into it.



         \AB1\MODEM\ENCODE.DOC  -2-  last updated 1987 February 2







                          ENCODE DECODE for Electronic Mail


     If the C:\FASTSYS\MYPROG.COM is left out, the program will fill it in
     for you automatically with the name of the original file on the send-
     ing system.  This name (C:\SYS\MYPROG.COM) is embedded in the
     MYPROG.TEL file that is sent.

     Never use the same name for the two files.  DECODE does not modify or
     destroy the input file MYPROG.TEL.
















































         \AB1\MODEM\ENCODE.DOC  -3-  last updated 1987 February 2







                          ENCODE DECODE for Electronic Mail


     If DECODE Beeps and prints an error message that the transmission was
     garbled, you have three choices:

     1. Use the file as is knowing that it is slightly corrupted.  Attempt
      this only with word processing documents.  Any *.WKS spreadsheets,
      *.COM or *.EXE program files cannot be used even with the tiniest
      corruption.

     2. Receive the file over again and retry the DECODE.  This will fix
      the problem if the garbling occurred during the receive from the
      Electronic Mail system, but it won't help if the garbling occurred
      during the send to the Electronic Mail system.

     3. Send the file over again, receive the file over again and retry the
      DECODE.


     USING ENCIPHER TO SEND CONFIDENTIAL FILES

     eg. ENCIPHER  C:\LETS\MYSTUFF.DOC  C:\SCOM\MYSTUFF.TEL

     This means encipher file MYSTUFF.DOC on disk C: in subdirectory \LETS
     and create a file called MYSTUFF.TEL on disk C: in subdirectory \SCOM
     placing an enciphering of MYSTUFF.DOC in it.

     Never use the same name for both files.  ENCIPHER does not modify or
     destroy the original file MYSTUFF.DOC.

     The file C:\SCOM\MYSTUFF.TEL can then be sent using the standard elec-
     tronic mail.  Don't send MYSTUFF.DOC!!


     USING DECIPHER TO RECEIVE CONFIDENTIAL FILES

     eg. DECIPHER  C:\SCOM\MYSTUFF.TEL  C:\MAIL\MYSTUFF.DOC

     This means decipher file MYSTUFF.TEL on disk C: in subdirectory \SCOM
     that has just arrived via electronic mail and create a file called
     MYSTUFF.DOC on disk C: in subdirectory \MAIL placing the deciphered
     original contents into it.

     If the C:\MAIL\MYSTUFF.DOC is left out, the program will fill it in
     for you automatically with the name of the original file on the send-
     ing system.  This name (C:\LETS\MYSTUFF.DOC) is embedded in the
     MYSTUFF.TEL file that is sent.

     Never use the same name for the two files.  DECIPHER does not modify
     or destroy the input file MYSTUFF.TEL.







         \AB1\MODEM\ENCODE.DOC  -4-  last updated 1987 February 2







                          ENCODE DECODE for Electronic Mail


     If DECIPHER Beeps and prints an error message that the transmission
     was garbled, you have three choices:

     1. Use the file as is knowing that it is slightly corrupted.  Attempt
      this only with word processing documents.  Any *.WKS spreadsheets,
      *.COM or *.EXE program files cannot be used even with the tiniest
      corruption.

     2. Receive the file over again and retry the DECIPHER.  This will fix
      the problem if the garbling occurred during the receive from the
      Electronic Mail system, but it won't help if the garbling occurred
      during the send to the Electronic Mail system.

     3. Send the file over again, receive the file over again and retry the
      DECIPHER.


     USING MAKEKEY TO PREPARE A KEY TO SEND TOP SECRET FILES

     eg. MAKEKEY  C:\HIDE\MYKEY9.KEY

     This creates a file of random numbers that can be used as a key for
     encrypting.  You will be prompted to type anything you want.  You can
     just keep hitting the space bar if you like.  The program measures the
     random time between keystrokes -- not the keystrokes themselves.

     Hit Ctrl-Z when you have entered enough keystrokes.  What is enough?
     In practice 80 would be enough.  But if you want to ensure the code is
     totally theoretically uncrackable, hit more keystrokes than the length
     of the file you plan to encrypt.

     It is a boring task creating these random files.  I jokingly once said
     that the illegal drug industry would be more interested in Encrypt
     than anyone else.  They would need to set up cottage industries in
     Mexico to produce the necessary random key files;  hence the name "The
     Mexican Peasant" algorithm.

     The key file must be sent to the recipient ahead of time.  It could be
     sent via Electronic mail, but for complete security the key file
     should be sent via secure courier.  The key file can be re-used, but
     for total security a fresh key file should be used for every message.
     Copies of the key files must be kept secure.  With copies of the key
     files the messages can easily be decoded.

     For less secure systems, any file at all can be used as a key file as
     long as both the sender and recipient have a copy of it, and no one
     else does.


     USING ENCRYPT TO SEND TOP SECRET FILES

     eg. ENCRYPT  C:\HIDE\MYKEY9.KEY  C:\LETS\MYSEC.DOC  C:\SCOM\MYSEC.TEL



         \AB1\MODEM\ENCODE.DOC  -5-  last updated 1987 February 2







                          ENCODE DECODE for Electronic Mail


     This means use the secret key file MYKEY9.KEY on disc C: in subdirec-
     tory \HIDE to encrypt MYSEC.DOC on disk C: in subdirectory \LETS and
     create a file called MYSEC.TEL on disk C: in subdirectory \SCOM plac-
     ing the secure encryption of MYSEC.DOC in it.

     Never use the same name for any of the three files.  ENCRYPT does not
     modify or destroy the original file MYSEC.DOC.

     The file C:\SCOM\MYSEC.TEL can then be sent using the standard elec-
     tronic mail.  Don't send MYSEC.DOC!!


     USING DECRYPT TO RECEIVE CONFIDENTIAL FILES

     eg. DECRYPT C:\HIDE\MYKEY9.KEY  C:\SCOM\MYSEC.TEL  C:\MAIL\MYSEC.DOC

     This means use the secret key file MYKEY9.KEY on disc C: in subdirec-
     tory \HIDE to decrypt file MYSEC.TEL on disk C: in subdirectory \SCOM
     that has just arrived via electronic mail and create a file called
     MYSEC.DOC on disk C: in subdirectory \MAIL placing the decrypted orig-
     inal contents into it.

     If the C:\MAIL\MYSEC.DOC is left out, the program will fill it in for
     you automatically with the name of the original file on the sending
     system.  This name (C:\LETS\MYSEC.DOC) is embedded in the MYSEC.TEL
     file that is sent.

     Never use the same name for any of the three files.  DECRYPT does not
     modify or destroy the input file MYSEC.TEL.

     If DECRYPT Beeps and prints an error message that the transmission was
     garbled, you have three choices:

     1. Use the file as is knowing that it is slightly corrupted.  Attempt
      this only with word processing documents.  Any *.WKS spreadsheets,
      *.COM or *.EXE program files cannot be used even with the tiniest
      corruption.

     2. Receive the file over again and retry the DECRYPT.  This will fix
      the problem if the garbling occurred during the receive from the
      Electronic Mail system, but it won't help if the garbling occurred
      during the send to the Electronic Mail system.

     3. Send the file over again, receive the file over again and retry the
      DECRYPT.  The same key can be used over again with no danger.


     EQUIPMENT REQUIRED

     The programs work on MS DOS 2.00, 2.10, 3.00, 3.10 or 3.20.  They
     should also work on later versions when they become available.  They




         \AB1\MODEM\ENCODE.DOC  -6-  last updated 1987 February 2







                          ENCODE DECODE for Electronic Mail


     will not work on DOS 1.10 because that version of DOS does not support
     subdirectories.

     The programs will run on any MS-DOS computer eg. IBM PC, IBM XT, IBM
     AT, Ericsson, Compaq, Corona, Hewlett-Packard 110, Microcan, Dot etc.
     If the computer cannot read 5 1/4" diskettes, the programs must be
     copied to the non standard diskettes.  This can be done by connecting
     an IBM PC and the other computer back to back with a serial link (or
     through the dial up network) and transferring the programs using the
     XMODEM or KERMIT protocol.  CPM versions are also available for the
     underpriviledged.

     The programs will run with monochrome, color or Hercules CRT con-
     troller cards.

     The programs require only 15K of RAM (above what DOS uses) to run.

     No printer or modem is required.


     INSTALLING THE PROGRAMS

     Installing need be done only once by someone who understands the DOS
     commands MD CD and COPY.  From then on anyone can use the programs.

     The *.COM files are the executable versions of the programs.  The
     *.PAS files are the source code written in Turbo Pascal version 3.0.
     The *.DOC files are standard DOS text files that can be PRINTed.  The
     *.TXT files are Microsoft Word files.

     You must make copies of the diskette, send them by courier, and then
     install the programs on all the machines that will interchange files.
     It is not possible to receive the programs themselves by electronic
     mail without first having the DECODE program.

     Presuming you use subdirectory \FASTSYS on the C: hard disc drive to
     keep your most commonly used programs, and presuming the ENCODE
     diskette is your floppy drive A: type
     
     COPY  A:*.COM  C:\FASTSYS

     Presuming you have no hard disc and you have a diskette in the A:
     drive where your electronic mail software is and presuming the ENCODE
     diskette is your floppy drive B: type
     
     COPY  B:*.COM  A:

     The file ENCODE.TXT containing this documentation can be massaged with
     the Microsoft Word Processor.  You can modify this documentation for
     your own purposes or include it in your own documentation.   The file
     ENCODE.DOC is a standard DOS text file with this documentation in it
     which can be printed with the MS-DOS command



         \AB1\MODEM\ENCODE.DOC  -7-  last updated 1987 February 2







                          ENCODE DECODE for Electronic Mail


     
     PRINT A:ENCODE.DOC

     If your electronic mail system cannot handle lines 125 characters long
     (Envoy and Telenet can handle up to 132 characters), then you can re-
     place the programs with versions that produce lines only 65 characters
     long by typing
     
     COPY  A:*.65  C:\FASTSYS\*.COM
     
     or
     
     COPY B:*.65  A:*.COM

     It is theoretically possible to install the programs on a remote ma-
     chine without first sending a diskette.  The source code for DECODE
     can be sent using standard electronic mail.  At the remote site the
     code can be compiled using the Turbo Pascal compiler version 3.  Then
     the rest of the files can be sent via ENCODE / DECODE.


     NOTES FOR SOURCEMAIL USERS

     SourceMail (the electronic mail system offered by The Source) inserts
     -MORE- prompts into the messages as they are received.  These look to
     DECODE like part of the file (it is not very bright -- for all it
     knows you are writing a document about MCI mail (like the document you
     are reading now) and -MORE- truly is part of the file).  To get around
     this you must type NOCRT after the first -MORE- prompt appears
     (immediately following the subject line of your mail) to turn the
     -MORE- prompts off.


     TECHNICAL DETAILS

     This information is important only to people planning to modify the
     programs.

     Electronic mail systems cannot be trusted to pass control characters
     (Tab Cr Lf FF etc) or characters with the high bit on (accented char-
     acters).  In addition they sometimes trim trailing blanks from lines,
     or append them.  It is very inefficient to send short lines to an
     electronic mail system as each line usually forms a full packet even
     if it consists of a single Cr.  The file transfer programs often in-
     sert additional printable characters before and after the file itself
     because the computer operator must manually decide when to start and
     stop capturing characters from the communications line to disk.

     The brute force approach to solving this problem is to encode files in
     hexadecimal before transmission using only the safe characters 0..9
     A..F, inserting Cr-Lf sequences every 65 characters.  The problem with




         \AB1\MODEM\ENCODE.DOC  -8-  last updated 1987 February 2







                          ENCODE DECODE for Electronic Mail


     this is that a word processing file is exactly twice as long as if it
     were sent plain.  This means it costs twice as much to send

     The electronic mail system can be trusted only to handle the ASCII
     characters chr$(33..126) vis. A..Z a..z 0..9 or punctuation but not
     space.  Our approach roughly is this, if the character is already safe
     send it unmodified.  If it is a control character chr$(1..31) we send
     it as two safe characters ^A ^B  ^chr$(c+64) etc.  If it is a control
     character with the high bit on ie. chr$(128..159) it is encoded as the
     pair 'A 'B 'chr$(c-64) etc.  If it is a regular character with a high
     bit on ie. chr$(161..254) we encode it as the pair `A `B `chr$(c-128)
     etc.

     This means we have stolen some of the punctuation characters for use
     as indicators.  How then do we send a real ^ ' or ` and not have it
     taken as an indicator?  We steal yet another character the ! as lit-
     eral next character so that ^ is coded as the pair !^ ' as !' etc.
     What about ! itself?  It is coded as !!.

     In addition we note that text files often contain the string CrLf.
     This would be encoded as a 4-character sequence ^M^J.  This occurs so
     often we use a single character abbreviation ; for it.

     In addition text files often contain long strings of spaces or zeros
     and binary files contain long strings of nulls and hex FFs.  For exam-
     ple, if a file contained 5 spaces in a row we compress the file by
     sending two characters -- one indicating repeating spaces the > and
     another indicating the fact there were five of them -- the #
     (chr$(count+30)).

     This scheme does not do that great a job compressing a single space or
     a pair of spaces.  So we code a single space as an & and a pair of
     spaces as a <.

     In a similar way 0's are encoded with 0 { and }.  Nulls chr$(0) are
     encoded with \ ~ #, and hex FFs (binary -1) Chr$(255) are encoded with
     % [ ].

     This leaves three characters falling between the cracks chr$(127)
     which is encoded as the pair ^` and chr$(160) which is encoded as the
     pair ^a and the period chr$(46) which is encoded as the pair ^b.  Ear-
     lier versions did not encode the period in any special way.  This new
     feature was added to bypass a bug in the Envoy NIO electronic mail
     system.

     For a simple word processing document, the encoded form is even
     shorter than the original document.  Even in the worst possible case
     the encoded document is never more than twice as long as the original.

     We then insert CrLfs every 125 characters.  This breaks the document
     into efficient long lines for sending.  For maximum efficiency each
     line should exactly fill one packet.  Different Electronic mail sys-



         \AB1\MODEM\ENCODE.DOC  -9-  last updated 1987 February 2







                          ENCODE DECODE for Electronic Mail


     tems have different optimum line sizes, so this size can be modified
     in the source code of ENCODE, ENCIPHER and ENCRYPT.  DECODE, DECIPHER,
     and DECRYPT work with any line length.

     Find out the maximum length of a line that your Electronic mail system
     can send.  It will be 65, 80, 127, 132 or 255.  Find this out by ex-
     perimenting.  If you do not want to bother, presume 65.  For Envoy it
     is 132.  However the packets sent via the Telenet / Envoy gateway are
     128 characters long.  To allow for the CrLf and the space and the
     space at the head of the line, the optimal size of line is 125 charac-
     ters.  If 125 is not suitable, modify the source code and recompile or
     use the *.65 versions.

     The output is preceded by the letters ^cENCODE ^cENCIPHER or ^cENCRYPT
     to indicate the type.  Following that is the filename from which the
     file was encoded.  Following that is a ^c.  Then comes the encoded
     file.  Then come the two characters ^c to mark the end of the body of
     the file.  Then comes the 4 digit checksum.  Then comes another ^c.

     Every line except the first starts with a blank.  This ensures that no
     line of data will accidentally be interpreted as a command to the
     electronic mail system.  Envoy and Telemail for example treat any
     lines starting with a dot as a command.

     The checksum includes the words ENCODE, the file name, and most of the
     ^c's.  The checksum does not include the CrLfs, the first ^c or the
     checksum itself or the ^c after the checksum.  The checksum is com-
     puted by adding the codes of all the characters in the output file as
     a 16 bit binary number ignoring overflow.  The checksum consists of
     the 4 low order decimal digits of this sum, padding with zeros if
     necessary.

     Encipher uses a very simple algorithm to encode the file.  It simply
     converts each character with chr$(159-c) after encoding in the stan-
     dard way.  A more complex algorithm would end up turning the safe
     characters into unsafe ones and would thus require double the trans-
     mission time.  The algorithm is designed to keep the casual reader
     out.  Anyone with a copy of Decrypt or who is good at cryptograms can
     easily break the code.
















         \AB1\MODEM\ENCODE.DOC  -10-  last updated 1987 February 2







                          ENCODE DECODE for Electronic Mail


     Encrypt uses the only truly secure way of sending encrypted files.  It
     is cumbersome but perfectly secure.  You must first prepare a key file
     of random numbers -- for example the times between keystrokes accurate
     to the microsecond while you type the Gettysburg address (created by
     Makekey).  This file of random numbers must be sent ahead of time by
     secure courier to the recipient.  It must NOT be sent electronically
     unless you wish to take the risk of the key being intercepted.  Then
     the message to be sent is exclusive ORed with the key file of random
     numbers.  That message is then sent using the usual encode mechanism.
     At the receiving end the message is first decoded in the usual way
     then it is again exclusive ORed with the key file of random numbers,
     which reconstructs the message.

     For a theoretically uncrackable system, the file of random numbers can
     only be used once and it must be at least as long as the message.  In
     practice even the CIA could not crack the code if the key file were up
     to 3 times shorter than the message file.  However they could crack
     the code if the key file were used more than a few times.


     FUTURES

     Please pass along ideas for improvements or let me know how important
     or unimportant the following features would be:

     - interactive DECODE so that you get to see the default decoded file
      name and then accept it or override it.

     - super compression of files using Huffman encoding.

     - compression of files by arranging that if the same file is sent more
      than once, just the changes are sent.  Generalizations of this where
      compression uses a dictionary of common words and phrases.

     - faster execution by programmatic file deblocking.

     - DOS 1.1, UNIX or Apple MacIntosh versions.

     - Source code in other languages eg. C, Forth, Assembler.  On princi-
      ple I refuse ever to write in Basic.  An older less polished version
      of the program exists in C.

     - DES encryption standard.

     - ability to encode many files at once with wild cards eg. ENCODE
      S*.COM S*.TEL.  S1.COM encodes to S1.TEL  S2.COM encodes to S2.TEL.

     - ability to combine many files into one file to send eg. ENCODE
      S*.COM S*.EXE ALL.TEL would individually encode S1.COM S2.COM S1.EXE
      and S2.EXE into a single file ALL.TEL.





         \AB1\MODEM\ENCODE.DOC  -11-  last updated 1987 February 2







                          ENCODE DECODE for Electronic Mail


     - inserting Envoy TO:, CC:, SUBJECT:, . SEND Y etc into the encoded
      file, so that they need not be typed manually when the message is
      sent.  Ditto for other Email services eg. GTE Telemail, SourceMail,
      MCI Mail, Telex, and Western Union EasyLink.

     - Ability to reconstruct the original date and time of the source
      file.

     - Totally integrated package that encodes, dials, picks up mail, re-
      sends garbled documents, and allows unattended operation.

     - Public domain X.25 mini computer software to replace or augment the
      electronic mail service bureau.  The software would be optimized for
      file rather than message transfer by presuming local intelligence in
      the terminal.  It would handle 8-bit transparent data with immediate
      error retry on a line by line basis.  It would also allow a file
      transfer to pick up where it left off in case the connection were
      broken.  Any terminal with access to Datapac, Telenet or Tymnet via
      300 or 1200 baud dialup or X.25 hard-wired link could exchange files
      and messages.

     - This is not pie in the sky.  I, Roedy, have already written a pro-
      prietary system, MEDICS, to allow BC physicians to automatically send
      in their IBM PC based billings to a Prime minicomputer via Datapac.
      I wrote another proprietary system, CSL Stock Charter, that keeps
      stock portfolios up to date on the MacIntosh by automatically access-
      ing a database via Datapac, Telenet, or Tymnet.  I have already writ-
      ten about 3000 screens of public domain Forth Code known as Abundance
      to help charities track donors and volunteers.  The time of large
      public domain programs has come.  Some of my work was written up in
      the Public Domain special issue of Byte -- October 1986.


     PUBLIC DOMAIN

     The programs ENCODE, DECODE, ENCIPHER, DECIPHER, ENCRYPT, DECRYPT and
     MAKEKEY are written in Turbo Pascal version 3.0.  The programs, in
     both source and object form, and the documentation are in the public
     domain and may be used, copied, sold or modified without restriction
     or credit.  You may use them for any purpose except military.


     VERSION HISTORY

     Version 1.4 added a CrLf to the last line of an Encoded file to make
     it easier to use Procomm.

     Version 2.0 added special coding for the period to bypass bugs in
     Envoy NIO electronic mail.  It also added version messages.  It is not
     compatible with earlier versions.  To send the new versions to the
     field, you must encode/decode with the old versions.




         \AB1\MODEM\ENCODE.DOC  -12-  last updated 1987 February 2







                          ENCODE DECODE for Electronic Mail


     Please pass any comments or suggestions for improvement to the au-
     thors:
     Steve Cross or Roedy Green
     Canadian Mind Products
     #11 - 3856 Sunset Street
     Burnaby, BC
     Canada
     V5G 1T3
     (604) 435-2957

     Envoy/BIX ID:ROEDY












































         \AB1\MODEM\ENCODE.DOC  -13-  last updated 1987 February 2




```
{% endraw %}

## FILES482.TXT

{% raw %}
```
Disk No  482
Program Title: ENCODE/DECODE
PC-SIG version 2.1

ENCODE/DECODE presents the user with a more efficient and less expensive
way to send information via electronic mail.  ENCODE/ DECODE allows
speadsheets programs, source code, word processor documents, data files,
in fact any file at all, to be sent via electronic mail.  This progam is
valuable in the fact that without it word processing files lose their
formatting when sent via electronic mail.  Program is documented.

Usage:  File Security.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  None.

File Descriptions:

ENCODE   TXT  Documentation in plain vanilla DOS Text file form.
ENCODE   DOC  Documentation MS-Word 3.0 form.
ELITE    STY  Style sheet if your printer has 12 pitch 10 point type.
NORMAL   STY  The style sheet used by all documentation.
PICA     STY  Style sheet if your printer cannot do 12 pitch type.
PIG      STY  Style sheet used to create the plain *.TXT documents.
DECIPHER COM  Decipher executable.
DECIPHER PAS  Decipher source.
DECODE   COM  Decode executable.
DECODE   PAS  Decode source.
DECRYPT  COM  Decrypt executable.
DECRYPT  PAS  Decrypt source.
ENCIPHER 65   Encipher executable - short 65 char lines.
ENCIPHER COM  Encipher executable - normal 125 char lines.
ENCIPHER PAS  Encipher source.
ENCODE   65   Encode executable - short 65 char lines.
ENCODE   COM  Encode executable- normal 125 char lines.
ENCODE   PAS  Encode source.
ENCRYPT  65   Encrypt executable - short 65 char lines.
ENCRYPT  COM  Encrypt executable - normal 125 char lines.
ENCRYPT  PAS  Encrypt executable.
MAKEKEY  COM  Makekey executable.
MAKEKEY  PAS  MakeKey source.
README   TXT  Introductory text file.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1986,87,88 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk No 482 ENCODE/DECODE  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║   To print the documentation, type:                                     ║
║             COPY ENCODE.TXT PRN (press enter)                           ║
║   To run the program DECIPHER, type:                                    ║
║             DECIPHER (press enter)                                      ║
║   To run the program DECODE, type:                                      ║
║             DECODE (press enter)                                        ║
║   To run the program DECRYPT, type:                                     ║
║             DECRYPT (press enter)                                       ║
║   To run the program ENCIPHER, type:                                    ║
║             ENCIPHER (press enter)                                      ║
║   To run the program ENCODE, type:                                      ║
║             ENCODE (press enter)                                        ║
║   To run the program ENCRYPT, type:                                     ║
║             ENCRYPT (press enter)                                       ║
║   To run the program MAKEKEY, type:                                     ║
║             MAKEKEY (press enter)                                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.TXT

{% raw %}
```
README.TXT

Public Domain ENCODE ENCIPHER ENCRYPT by
Roedy Green
Canadian Mind Products
#11 - 3856 Sunset Street
Burnaby BC Canada
V5G 1T3

(604) 435-2957

Microsoft Word version 3 Style sheets
copy PICA.STY  NORMAL.STY 
copy ELITE.STY NORMAL.STY
before you print your documentation

I strongly suggest tweaking the style sheets first to get best
results on your printer.  If you don't have MS-Word, print
ENCODE.TXT instead.

ENCODE   TXT    Documentation in plain vanilla DOS Text file form

ENCODE   DOC    Documentation MS-Word 3.0 form
ELITE    STY	Style sheet if your printer has 12 pitch 10 point type
NORMAL   STY	The style sheet used by all documentation
PICA     STY	Style sheet if your printer cannot do 12 pitcth 10 point type
PIG      STY	Style sheet used to create the plain *.TXT documents

DECIPHER COM    Decipher executable    
DECIPHER PAS    Decipher source
DECODE   COM    Decode executable
DECODE   PAS    Decode source
DECRYPT  COM    Decrypt executable
DECRYPT  PAS    Decrypt source
ENCIPHER 65     Encipher executable - short 65 char lines
ENCIPHER COM    Encipher executable - normal 125 char lines
ENCIPHER PAS    Encipher source
ENCODE   65     Encode executable - short 65 char lines
ENCODE   COM    Encode executable- normal 125 char lines
ENCODE   PAS    Encode source
ENCRYPT  65     Encrypt executable - short 65 char lines
ENCRYPT  COM    Encrypt executable - normal 125 char lines
ENCRYPT  PAS    Encrypt executable
MAKEKEY  COM    Makekey executable
MAKEKEY  PAS    MakeKey source
README   TXT    This document
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0482

     Volume in drive A has no label
     Directory of A:\

    DECIPHER COM     13443   2-02-87   8:29p
    DECIPHER PAS      8682   2-02-87   9:02p
    DECODE   COM     13365   2-02-87   8:25p
    DECODE   PAS      8171   2-02-87   9:03p
    DECRYPT  COM     13880   2-02-87   8:26p
    DECRYPT  PAS      9488   2-02-87   9:03p
    ELITE    STY      1536  12-03-86   2:06p
    ENCIPHER 65      13351   2-02-87   6:27p
    ENCIPHER COM     13351   2-02-87   8:26p
    ENCIPHER PAS      8615   2-02-87   9:02p
    ENCODE   65      13289   2-02-87   6:27p
    ENCODE   COM     13289   2-02-87   8:25p
    ENCODE   DOC     26624   2-02-87   8:50p
    ENCODE   PAS      8324   2-02-87   9:03p
    ENCODE   TXT     29844  10-07-88   3:14p
    ENCRYPT  65      13675   2-02-87   6:27p
    ENCRYPT  COM     13675   2-02-87   8:25p
    ENCRYPT  PAS      9432   2-02-87   9:02p
    FILES482 TXT      1890  10-17-88   9:39a
    GO       BAT        38  10-10-88   9:00a
    GO       TXT      1541  10-10-88   8:57a
    MAKEKEY  COM     12245   2-02-87   8:26p
    MAKEKEY  PAS      3567   2-02-87   9:03p
    NORMAL   STY      1536  12-03-86   2:06p
    PICA     STY      1408  12-05-86   1:42p
    PIG      STY      1408  12-06-86  10:45p
    README   TXT      1595   2-02-87   6:41p
           27 file(s)     257262 bytes
                           50176 bytes free
