---
layout: page
title: "PC-SIG Diskette Library (Disk #2826)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2826/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2826"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2826.TXT

{% raw %}
```
Disk No: 2826                                                           
Disk Title: MR. BILL  3/3 (also #469, & #470)                           
PC-SIG Version: S4.5                                                    
                                                                        
Program Title: Mr. Bill                                                 
Author Version: 3.41                                                    
Author Registration: $40.00                                             
Special Requirements: 320K RAM, and two floppy drives.                  
                                                                        
Money in the bank -- a lovely phrase.  Money owed to your company could 
be money in YOUR bank -- if you collect it.  MR. BILL does almost       
everything needed for your small- to medium-sized firm to birddog bills 
and increase collections with a minimum of labor and losses.            
                                                                        
Highly flexible, MR. BILL handles taxes and charges of every sort.  It  
automatically updates and sends client bills out monthly, prints your   
letterhead, and up to a 30-line message.  You can charge different      
customers different rates for the same thing.  Each file can have 16,000
entries.  Get the client's name, address, phone number, and current     
balance from the operating system in less than four seconds.            
                                                                        
Prepare itemized invoices/bills and generate a bevy of summary and in-  
depth reports including account aging and an excellent audit trail.  The
28-page manual is adequate for experienced clerks.                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1991 PC-SIG, Inc.                                         
```
{% endraw %}

## FLOP.TXT

{% raw %}
```
                        FOR FLOPPY DISK SYSTEMS:

          Take a blank disk from your box of disks and  "initialize"
    it.   This  means  you must run the "format" program which  came
    with your machine.   If you don't know how to do this,  read your
    DOS manual about formatting disks.

          Put Mr. Bill Disk #1 into the A drive and your new disk
    into the B drive.  Now, type:

          A>copy A:*.* B:

          Disk  Number  1 will be used to set up your  programs,  to
    enter  billing  data,  to add and change addresses  and  billing
    codes and rates, and to add files together.  Repeat for disk #2.

          Disk  Number 2 will be used to write your bills to a  disk
    file,  to  the printer,  to prepare ageing reports,  to  prepare
    audit  trails  and to prepare a report of your charges  in  date
    order.
```
{% endraw %}

## FLOP1.TXT

{% raw %}
```
          To  use either disk just type BILL and press return.

          Again,  use  disk  #1  to input your data and disk  #2  to
    prepare your reports.

          Okay,  so  much  for  the disk(s) holding  your  MR.  BILL
    programs.

          Now  you  must format a new disk to  hold  your
    data.   This will be your data disk.   Most people will put  the
    data disk into drive B.

          Label the program disk(s) as "MR.  BILL PROGRAM DISK  (#1)
    --DRIVE A" and in our example,  the data disk as "MR.  BILL DATA
    DISK--DRIVE  B".   Note:  your program disk does not have to  go
    into  drive A.   You can put your programs on any  disk.   Also,
    your  data disk does not have to go in drive B.   You can choose
    any drive as your data disk drive.
```
{% endraw %}

## HARD.TXT

{% raw %}
```
                      FOR HARD DISK SYSTEMS:

          Create a subdirectory on drive C:\ called BILL.
 Put the Mr. Bill Disks in drive A:, and type: A>COPY *.* C:\BILL [RETURN]
    Copy all the disks. Type: C: [return] then cd \bill [return]

                             FOR EVERYONE
          To begin type BILL [Return].  If this is the very first time
    you have used MR.  BILL  it will ask you what drive you want to hold
    your data disk.  In our example we will tell it B.  If you use a
    hard disk, you would tell it C.  Mr. Bill will create the file
    DISKDRVE and put the letter B or C into the file so that it can
    remember which drive you chose.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2826

     Volume in drive A has no label
     Directory of A:\

    README            2304  11-30-90  12:00p
    CONVTADD EXE     40058  11-23-90   3:41p
    BILLMAN  UAL    272640   1-09-91   1:53p
    FLOP     TXT       872   9-11-91   2:49p
    FLOP1    TXT       802   8-22-91  12:54a
    FLOPPY   BAT        56   9-11-91   2:51p
    GO       BAT        28   7-15-91   3:34p
    GO       TXT      1580   9-13-91   3:14a
    HARD     BAT        30   8-25-91  10:28p
    HARD     TXT       685   9-11-91   2:49p
    FILE2826 TXT      2221   8-25-91  11:10p
           11 file(s)     321276 bytes
                           33792 bytes free
