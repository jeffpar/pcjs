---
layout: post
title: The PDP-11 and VT100 Revisited
date: 2016-12-03 01:00:00
permalink: /blog/2016/12/02/
---

I recently did some more work on the PCjs [VT100 Terminal](/devices/pc8080/machine/vt100/) emulation, making
it work a bit better with other PCjs machines -- specifically, [PDP-11](/devices/pdp11/machine/) and
[IBM PC](/devices/pcx86/machine/) machines.

As I explained back in [August 2016](/blog/2016/08/03/), the PCjs VT100 emulation isn't just another VT100 emulator,
but a simulation of the original VT100 terminal.  One of the goals is to provide users with a more authentic
retro-computing experience, by combining classic computers with display terminals from the same time period.

One of the latest improvements was a simple layout change, so that if you stretch your browser window wide
enough, you can have your PDP-11 Front Panel and VT100 Terminal side-by-side.  It's like having Certs with Retsyn:
TWO PCjs machines on ONE screen!

[![Image of PDP-11/70 with VT100 Terminal](/blog/images/pdp-1170-vt100-side-by-side.png)](/devices/pdp11/machine/1170/vt100/)

There were also a few important changes under the hood:

- All PCjs machines with a SerialPort component (ie, PCx86, PC8080, and PDPjs) now support RS-232 flow control
notifications, and changes to a port's DTR or RTS lines are communicated to the SerialPort on the other end using
standard RS-232 DB-25 pin assignments (since every machine's internal SerialPort states are different).
- Both the VT100 and PDP-11 terminal window support ALT-ENTER and ALT-DELETE as aliases for LINEFEED and BACKSPACE,
since the VT100 keyboard has both RETURN and LINEFEED, as well as BACKSPACE and DELETE, and sometimes you need to use
both (of course, you can always type CTRL-J or CTRL-H for LINEFEED or BACKSPACE, but I thought these ALT combinations
would seem less strange to modern users).
- The VT100 CAPS-LOCK state is now displayed alongside the standard VT100 LEDs, and PC8080 (the PCjs machine driving
the VT100 simulation) makes a valiant effort to keep it in sync with your own keyboard's CAPS-LOCK state. 

One more comment about BACKSPACE and DELETE: in the post-PDP-11, post-VT100 world of the IBM PC, BACKSPACE has come
to mean "delete the character to the *left* of the cursor," and DELETE now means "delete the character *under* the cursor."
Those are NOT what those keys meant to the average VT100 user.  BACKSPACE was originally a *non-destructive* leftward
movement of the cursor, whereas DELETE was a *destructive* leftward movement.  So DELETE on a VT100 is what an IBM PC
user would think of as BACKSPACE.  To make matters worse, some modern keyboards now label the traditional BACKSPACE key
as DELETE.

With all that mind, I've tried to make the best of a bad situation, by treating your traditional BACKSPACE key as the
VT100's DELETE key, and treating the ALT-BACKSPACE combination as the VT100's BACKSPACE key.

Finally, while we're on the subject of keys, it's worth making a note of the following
[VT100 Terminal Key Assignments](/devices/pc8080/machine/vt100/debugger/#vt100-keys):

### VT100 Keys

Function keys are mapped as follows:

- F1: PF1
- F2: PF2
- F3: PF3
- F4: PF4
- F6: BREAK
- F7: LINE FEED
- F8: NO SCROLL
- F9: SET-UP

From the SET-UP screen, you can press **4** to switch to LOCAL mode and verify local operation of most VT100
keys.  The following keys have special meaning inside SET-UP Mode.

### SET-UP Mode Keys

- 0: RESET
- 2: SET/CLEAR TAB
- 3: CLEAR ALL TABS
- 4: ONLINE/LOCAL
- 5: SET-UP A/B
- 6: TOGGLE FEATURE
- 7: TRANSMIT SPEED
- 8: RECEIVE SPEED
- 9: 80/132 COLUMNS
- SHIFT-S: Save SET-UP Features
- SHIFT-R: Restore SET-UP Features

*[@jeffpar](https://jeffpar.com)*  
*Dec 3, 2016*
