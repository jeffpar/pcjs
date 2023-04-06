---
layout: page
title: "PC-SIG Diskette Library (Disk #2004)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2004/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2004"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-IRIS, PC-MERLIN, PC-LOCK"

    A file containing sensitive information may be encrypted by IRIS,
    effectively precluding unauthorized disclosure.  The (encrypted) file
    may be copied to floppy disk and sent via public mail (an insecure
    channel) to another party, who, having access to IRIS and the "KEY"
    used to encrypt the document, will be able to decrypt the file,
    producing the original spreadsheet.
    
    IRIS implements these commercial cryptographic techniques:
    
    ~ ADFGVX
    
    ~ RSA public key cryptography
    
    ~ DES
    
    ~ LITTLEWOOD
    
    ~ VERNAM (XOR)
    
    ~ PLAYFAIR
    
    ~ BAZERIES
    
    ~ VIGENERE
    
    ~ CRC (checksum) generation
    
    ~ Secure file erasure.
    
    PC-LOCK allows the user of a PC to "lock" a DOS session, thereby
    inhibiting unauthorized usage of the machine during short absences such
    as lunchbreak.  The PC-LOCK program prompts the user for a password (and
    re-prompts for verification), and then prevents any further use of the
    machine until the correct password is re-entered.
    
    PC-MERLIN integrates the DOS "copy" program with data encryption.  This
    allows the user to copy multiple files to a target disk or directory,
    encrypting the data as the copy proceeds.  Such a function is
    particularly useful to users who only need to encrypt data that goes
    offsite to remote users, or backups.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #2004

     Volume in drive A has no label
     Directory of A:\

    IRIS     EXE    135285   4-09-90   5:31p
    IRIS     DAT       610   4-10-90   5:43a
    IRIS     HLP    118784   4-15-90   4:35p
    DEMO     BAT      3584   4-10-90   7:42p
    OZY      TXT       768   4-24-89   8:18p
    KEYS     DAT      1553   3-16-90   6:15p
    SWIFT    MSG       640   4-10-90   6:53p
    ENCRYPT  BAT       128   3-25-90  11:56a
    DECRYPT  BAT       128   3-25-90  11:57a
    INSTALL  BAT       384   3-27-90  12:04p
    READ     ME       2688   4-10-90   6:44p
    REGISTER DOC      4480   3-31-90  12:13p
    MERLIN   EXE     51815   4-09-90   5:51p
    MERLIN   DOC      4352   3-31-90  11:08a
    LOCK     EXE     15079   4-09-90   5:51p
    LOCK     DOC      1536   3-31-90  10:55a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT      1002   5-08-90  11:57p
    FILE2004 TXT      4219   5-09-90   1:33p
           19 file(s)     347073 bytes
                            5120 bytes free
