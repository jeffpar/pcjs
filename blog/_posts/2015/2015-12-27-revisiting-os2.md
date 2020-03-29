---
layout: post
title: Revisiting OS/2
date: 2015-12-27 11:00:00
category: OS/2
permalink: /blog/2015/12/27/
machines:
  - id: ibm5170
    type: pcx86
    debugger: true
    config: /configs/pcx86/xml/machine/5170/ega/2048kb/rev3/debugger/machine.xml
    drives: '[{name:"20Mb Hard Disk",type:2,path:"/harddisks/pcx86/sys/os2/ibm/1.0/IBMOS210-EGA.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
---

Just for fun (because I have a warped sense of fun), I decided to revisit some of the old OS/2 software I wrote
almost 30 years ago.  But first, I needed an OS/2 development environment.

So I started with a clean install of [IBM OS/2 1.0](/software/pcx86/sys/os2/ibm/1.0/) in the 8Mhz IBM PC AT machine
below, by booting from the "IBM OS/2 1.0 (1.44M Install)" diskette in drive A and reformatting the machine's 20Mb
drive C.

Next, I installed the [MS OS/2 SDK 1.02](/software/pcx86/sdk/os2/microsoft/1.02/).  This SDK was released
in December 1987 along with [Microsoft OS/2 1.0](/software/pcx86/sys/os2/microsoft/1.0/).  I don't have all of the
printed documentation that came with the SDK, such as the *Installation Guide*, but I do have the
[Microsoft® Operating System/2 Programmer’s Toolkit](/software/pcx86/sdk/os2/microsoft/1.02/#documents) documentation
from March 1988, thanks to the [OS/2 Museum](http://www.os2museum.com/wp/os2-history/os2-library/os2-1-x-programming/).

Aside from **Microsoft Macro Assembler 5.00A** (MASM) and **Microsoft C Compiler 5.10 (Beta)** (CL), the SDK
included some other useful tools, such as the **SDK Editor** (SDKED), which was essentially an OS/2 port of
Mark Zbikowski's full-screen editor (Z) that was used internally at Microsoft for many years.  It was renamed
to the **Microsoft Editor** (M or MEP) with the release of **Microsoft C Compiler 5.10**, and it was later integrated
into **Programmer's Workbench** (PWB), the text-mode Integrated Development Environment (IDE) that came with
**Microsoft C Compiler 6.0**.

With the introduction of graphical IDEs, such as Visual BASIC in 1991, Visual C++ in 1993, and Visual Studio in 1995,
this stand-alone, text-mode editor became obsolete, but in the 1980s, it was a valuable tool.  You can learn more
about [SDKED](/software/pcx86/sdk/os2/microsoft/1.02/#using-sdked) on the
[MS OS/2 SDK 1.02](/software/pcx86/sdk/os2/microsoft/1.02/) page.

Our [IBM OS/2 1.0](/software/pcx86/sys/os2/ibm/1.0/) demo machine (shown below) has the
[MS OS/2 SDK 1.02](/software/pcx86/sdk/os2/microsoft/1.02/) pre-installed, so check out the
[Documentation](/software/pcx86/sdk/os2/microsoft/1.02/#documents) and then write some code!

{% include machine.html id="ibm5170" %}
