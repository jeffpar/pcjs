---
layout: page
title: Juku E5104 Test Machine
permalink: /machines/pcx80/juku/
machines:
  - id: juku
    type: pcx80
    debugger: true
    config: /machines/pcx80/juku/machine.xml
---

{% include machine.html id="juku" %}

### Selected Information

From the "Juku E5105 Microcomputer User Manual (1988)", p.10:

> Juku's memory consists of 16K (expandable up to 64K bytes) of non-volatile memory and 64K bytes of random access memory.
> 10K bytes of random access memory make up the so-called video memory, where a video image is formed on the TV screen based
> on the stored information.  Since the used microprocessor (KP580NK80) allows directly addressing the memory only to the
> extent of 64K bytes, 4 different memory addressing methods have been introduced for the sake of efficient use of the address
> space and further expansion of the memory.  The choice of the pile mode is made with the two lowest bits of the system gate
> (address 02H), according to the following table:
> 
> Mode 0
> 
> Apply computer when switching on right after RESET signal.  Within the first 16K bytes of the address space,
> variable and non-volatile memory are located in parallel.  With the read command, the data is read from the permanent
> memory, with the write command the data is stored in the non-volatile memory.  The last 10K bytes of random access memory
> (640 bytes less for Bigemini) are occupied by video memory.
> 
> Mode 1
> 
> In this way, other memory starts at address 0000.  In the last 10K bytes of the address space, the memory depends on the
> type of access operation.  With the read from memory command, the data is read from the permanent memory, but with the write
> command, the take data to video memory.  You can't do it this way turn towards the first 6K bytes of the non-volatile memory
> block.
> 
> Mode 2
> 
> Intended to refresh memory.  The memory zone 4000-BFFF is formed by the so-called memory window.  When accessing these
> addresses, the internal memory of the computer is not selected, the access is directed to an apparent 32K byte memory page.
> There can be more than ks of such external memory pages by thumb, but in that case they must be equipped with appropriate
> hardware means that allow them to be selectively opened and closed.  The non-volatile memory is located at the end of the
> address frame, parallel to the video memory.  The turning modes are the same as in mode 1.
> 
> Mode 3
> 
> When using mode 3, non-volatile memory is disabled.  It is possible to write to and read from the video memory.
> 
> Notes
> 
> Up to 64K bytes of non-volatile memory can be achieved with 8K bytes of non-volatile memory when using chips (K573РФ4,K573РФ6).
> In the future we will look at the so-called computer. puff variant - s. o. 16K permanent memory and 64K RAM.  In the case of a
> larger volume of permanent memory, the border between random access memory shown in mode 0 shifts «downwards».  The rest of the
> memory allocation blocks will remain the same.
