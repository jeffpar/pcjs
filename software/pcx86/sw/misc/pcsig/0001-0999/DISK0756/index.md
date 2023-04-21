---
layout: page
title: "PC-SIG Diskette Library (Disk #756)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0756/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0756"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MEMOIRS"

    We all need a private place to keep our thoughts and notes, a place
    safe from prying eyes.  At one time, it was a small book with a lock on
    it.  But with the advent of the computer era, a better way has been
    made.
    
    MEMOIRS is a private diary program that lets you encrypt your
    personal diary and store each encrypted line on disk as fast as it's
    typed.  MEMOIRS also lets you view the encryption taking place as you
    go.  The encryption method is quite fast and effective, with no
    redundant patterns -- thus making it virtually impossible to crack the
    code.
    
    MEMOIRS also encrypts and decrypts ASCII text files or documents.  As
    with the personal diary, you can watch the encryption taking place.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES756.TXT

{% raw %}
```
Disk No:  756
Program name:  MEMOIRS version 5
PC-SIG version: 2

We all need a private place to keep our thoughts and notes, a place
which is safe from prying eyes.  At one time, it was a small book with a
lock on it.  But with the advent of the computer era, a better answer
has developed.

MEMOIRS is a private diary program that allows you to encrypt your
personal diary and store each encrypted line on disk as fast as it's
typed.  MEMOIRS also allows you to view the encryption taking place as
you go.  The encryption method is quite rapid and effective, with no
redundant patterns, thus making it virtually impossible to crack the
code.

MEMOIRS will also encrypt and decrypt a plain ASCII text file or
document.  As with the personal diary, you can watch the encryption
taking place.  MEMOIRS prompts you for the drive, and a directory of
that drive is displayed, then you choose the file.

Usage:  Diary Database.

Special Requirements:  None.

How to Start:  Type MEMOIRS5 (press enter).

Suggested Registration:  $29.00 plus $15.00 for a printed manual.

File Descriptions:

MEMOIRS5 EXE  Main program.
MEMOIRS5 DOC  Documenatation.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## MEMOIRS5.DOC

{% raw %}
```
MEMOIRS5.DOC:

MEMOIRS is a private-diary program which allows you to type a daily diary
directly into an encrypted disk file.  Emphasis has been placed upon ease
of use, so you'll be interested in making regular entries in your diary 
with a minimum of inconvenience.  If you wish, MEMOIRS will automatically 
name your daily diary files using today's date, so you can type into your 
diary without even having to make up a file name.  It's quick and simple
to use daily, and nobody can read your diary without your private password.

MEMOIRS also allows you to encrypt standard ASCII word processor documents 
if you wish; you can even view the encrypted data directly on-screen as it 
happens.  The encryption method was specifically chosen so that you can see 
the results as graphic characters on your screen.  As a test, use MEMOIRS 
to encrypt this file you are reading (use menu selection #2) and observe 
the encryption code that results from the following redundant lines:

The quick brown fox jumped over a lazy dogs back 1234567890.
The quick brown fox jumped over a lazy dogs back 1234567890.
The quick brown fox jumped over a lazy dogs back 1234567890.
The quick brown fox jumped over a lazy dogs back 1234567890.
The quick brown fox jumped over a lazy dogs back 1234567890.
The quick brown fox jumped over a lazy dogs back 1234567890.
The quick brown fox jumped over a lazy dogs back 1234567890.
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

You'll find that the encryption code is quite effective and unpredictable,
even if you have the patience to input several hundred thousand identical 
characters such as the 7 lines of repetitive "a", above.

MEMOIRS also has a biorhythm feature, which occasionally allows you to 
justify not getting up in the morning.

MEMOIRS runs either from a floppy disk or hard disk, with either a 
monochrome or color system.  To start MEMOIRS just type MEMOIRS5 on the 
command line, or give that command from a batch file or menu program.  
(You can rename the program if you wish.)  To bypass the opening menu and 
jump directly to the diary, put MEMOIRS5 AUTO on the command line.  

MEMOIRS was inspired by my visit to the western tip of Alaska in early
1987, where I was operating a trading post while the owner was on vacation.  
I could see Siberia off in the distance on a clear day.  I wrote this 
program as a hobby, in response to the security problems they were having 
at the American Embassy in Moscow at the time.

Some people really enjoy the privacy MEMOIRS gives them; I hope you find
that it can help brighten up your day now and then.

++ Tom Swanson  Bright Ideas Consulting 200 W. 34th #784 Anchorage AK 99503 ++
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0756

     Volume in drive A has no label
     Directory of A:\

    FILES756 TXT      1289   5-23-89   4:59p
    GO       BAT        38   5-19-87  11:44a
    GO       TXT       540   1-04-80   2:46a
    MEMOIRS5 DOC      3200   4-08-89  12:36p
    MEMOIRS5 EXE    143008   3-26-89   7:57p
            5 file(s)     148075 bytes
                           10240 bytes free
