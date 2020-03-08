---
layout: post
title: Halt and Catch Liar
date: 2014-06-14 11:00:00
category: TV Shows
permalink: /blog/2014/06/14/
---

I had high hopes for the new AMC series "[Halt and Catch Fire](http://www.amctv.com/shows/halt-and-catch-fire),"
but it has proven to be an utter disappointment.  I think I can suspend my disbelief as well as anyone, but this
show requires you to completely turn your brain off in order to be believed.  I'm also baffled by the show's
high [IMDb score](http://www.imdb.com/title/tt2543312/), which is currently 8.4 (out of 10).  Either AMC has figured
out how to game the system, or viewers are easily turned on by clichés, like the know-it-all Hot Programmer,
the self-assured Sales Guy, and the non-plot-advancing sex that they almost instantly engage in.

The premise: ex-IBM Sales Guy waltzes into a fictional computer company, smooth-talks his way into a top
marketing position without so much as a resumé, and then immediately risks all, including a huge potential lawsuit
with IBM, because he has dreams of building IBM clones that are "2x fast" at "1/2 price" -- with *handles*!

And the first thing they must do to achieve this dream is clone the IBM PC ROM BIOS, which the show pretends
was so secret that you couldn't even tell which chips on the IBM PC motherboard contained the ROM.  Never mind
that IBM published the entire ROM BIOS listing in their Technical Reference Manual, which also included system
diagrams identifying every chip in the machine.  I think if you're going to weave facts into your fiction,
the least you can do is get your facts right.

And centerpiece of this whole conceit -- the cloning of the IBM PC ROM BIOS.  What a farce!  Check out this
scene from Episode 2, where Brilliant Engineer looks at Hot Programmer's whiteboard in awe.  Apparently, he
is easily awed, because he did the same thing when Sales Guy wrote "2x fast, 1/2 price" on an earlier whiteboard.

[<img src="/blog/images/halt-and-catch-liar-small.jpg" alt='"Halt and Catch Fire" Scene from Episode 2'/>](/blog/images/halt-and-catch-liar.jpg)

So if you deconstruct the code on this whiteboard, you quickly notice that while it IS assembly language, it is
NOT the sort of assembly language you would find in a ROM BIOS, let alone ANYTHING that would leave you in awe.

Here are some excerpts:

	Initialization
		MOV  AX,CX      ; set up DS
		MOV  DS,AX
		MOV  SS,AX      ; and SS
		LEA  AX,BEGINSTACK
		MOV  SP,AX
		MOV  AL,OUTINT
		...
	TSTART
		LEA  AX,BEGTRACE
		MOV  POINT,AX
		MOV  AL,YES     ; TURN TRACE ON
		MOV  TFLAG,AL
		MOV  AL,NO      ; NOT WRAPPED
		MOV  WRAP,AL
		MOV  AX,CS      ; CONVERT ADDRESS FOR OUTPUT
		LEA  SI,LOADCS
		CALL HEXPRT
		MOV  AX,100H
		LEA  SI,LOADIP
		CALL HEXPRT
		LEA  DX,SIGNIN
		MOV  AH,9
		INT  DOSINT
		LEA  DX,OUTPUT
		MOV  AL,OUTPUT (?)
		MOV  AH,25H     ; Set Interrupt Vector
		INT  DOSINT     ; Have DOS place the interrupt...
		...

This is clearly **NOT** code for a PC ROM BIOS, because no PC BIOS would ever issue a DOS interrupt.
A BIOS is designed to be called *by* DOS, not the other way around.

This turns out to be code largely copied from a file I found online: [PCTRACE.ASM](http://ftpmirror.your.org/pub/misc/dos/RbbsInABoxVol1No2_640/files/007P/PCTRACE.ZIP-contents/PCTRACE.ASM)

Another curiosity is that searching for this resulted in a "[Googlewhack](http://en.wikipedia.org/wiki/Googlewhack)"
of sorts:

![Googlewhack](/blog/images/googlewhack.jpg)

Technically, a Googlewhack (a two-word search that yields exactly one result) must use two words found in an actual
dictionary.  But dictionaries are so passé.
