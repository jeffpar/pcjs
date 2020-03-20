---
layout: page
title: DEC PDP-11 Absolute Loader
permalink: /software/dec/pdp11/tapes/absloader/
redirect_from: /apps/pdp11/tapes/absloader/
---

[![DEC-11-L2PC-PO](DEC-11-L2PC-PO.jpg)](DEC-11-L2PC-PO.json)

The Absolute Loader is a special tape image that must be loaded in order to load *other* tapes
that use what we'll call the "Absolute Format."  To see the Absolute Loader in action, try the
[PDP-11/20 Bootstrap Loader Demo](/machines/dec/pdp11/1120/bootstrap/debugger/).

The *loadImage()* interface of the [PDPjs RAM Component](/machines/dec/pdp11/lib/ram.js) explains what
we know about the "Absolute Format":

	Data on tapes in the "Absolute Format" is organized into blocks; each block begins with
	a 6-byte header:
	
	    2-byte signature (0x0001)
	    2-byte block length (N + 6, because it includes the 6-byte header)
	    2-byte load address
	
	followed by N data bytes.  If N is zero, then the 2-byte load address is the exec address,
	unless the address is odd (usually 1).  DEC's Absolute Loader jumps to the exec address
	in former case, halts in the latter.
	
	All values are stored "little endian" (low byte followed by high byte), just like the
	PDP-11's memory architecture.
	
	After the data bytes, there is a single checksum byte.  The 8-bit sum of all the bytes in
	the block (including the header bytes and checksum byte) should be zero.
	
	ANOMALIES: Tape files don't always begin with a signature word, so I allow any number of
	leading zeros before the first signature.  Tape files don't always end cleanly either, so as
	soon as I see an invalid signature, I break out of the loop without signalling an error, as
	long as at least ONE block was successfully processed.  In fact, it's possible that as
	soon as a block with ZERO data bytes is encountered, processing is supposed to stop, but
	I haven't examined enough tapes (or the Absolute Loader code) to know for sure.

[Other sites](http://www.retrocmp.com/stories/dec-pc05-papertape/242-dec-pc05-working-with-paper-tapes)
have referred to this tape format as the "Standard Absolute" format, but I've not found that terminology
used in any DEC publication.  In fact, I think that term may have arisen from a misreading of instructions
found in DEC manuals like the ["MEM EXER 16K" Diagnostics Manual](https://1drv.ms/b/s!ArcO_mFRe1Z9gp49VqkiYkHIFs_VGA?e=3E9FRN):

	Load the program using any standard absolute loader.

The most notable feature of the "Absolute Format" is that it contains no relocation information; it is
designed for code that has been linked to run at a fixed ("absolute") address, or position-independent code
for which a specific address has been selected, based on the amount of RAM present in the target machine.

PCjs has archived the following Absolute Loader resources:

- [Absolute Loader](DEC-11-L2PC-PO.json)
- [LISTING OF PDP-11 ABSOLUTE LOADER (June 1975)](https://1drv.ms/b/s!ArcO_mFRe1Z9gp5GZuQhJdSZrND9_g?e=c4gZI6)
- "APPENDIX D: THE BOOTSTRAP AND ABSOLUTE LOADERS" from the [PDP-11 BASIC PROGRAMMING MANUAL (December 1970)](https://1drv.ms/b/s!ArcO_mFRe1Z9gp4hZ_ESc_wYWccLhg?e=UAT48R) 
