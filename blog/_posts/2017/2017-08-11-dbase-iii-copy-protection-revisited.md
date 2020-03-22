---
layout: post
title: dBASE III Copy Protection Revisited
date: 2017-08-11 10:00:00
permalink: /blog/2017/08/11/
---

One of the earliest tasks I remember tackling on an IBM PC was a basically a favor for my father-in-law, Tom Estelita.
In 1984, he had purchased a copy of dBASE III and had become frustrated by its copy-protection.  The previous version,
dBASE II, had no such protection, which probably added to his frustration.  At the time, he was running his own tiny
software company, Radix 2 Software, and he certainly wasn't interested in redistributing dBASE III -- he just wanted to
be able to back-up his software and switch between a handful of machines without the hassle or worry of relying on a
single fragile copy-protected diskette.

At that time, my day job was writing PDP-11 application software, but I really wanted to learn more about the IBM PC,
and I had done work for Tom in the past (writing BASIC accounting software on CP/M-based machines), so he made me a
deal: he would loan me a floppy-based IBM PC and some IBM reference manuals, in exchange for attempting to crack dBASE
III's copy-protection.

I have no recollection of how feasible I thought this challenge was, but I'm sure I jumped at the opportunity.
Perhaps my thinking was that, after all, it's just software, so how hard could it be.  In any case, I apparently took
the challenge very seriously, because I also made a lot of notes.

I recently found [those notes](/docs/personal/#dbase-iii-copy-protection), along with copies of the
[dBASE III disks](/software/pcx86/app/other/dbase3/1.0/) used.  Unfortunately, all the disks contained was my *patched*
(unlocked) version of `DBASE.EXE`, and for the sake of a complete archive, I wanted the *unpatched* (locked) version as
well.  Fortunately, my patching notes also show all the original bytes, so I reproduced the original file by reversing
the patching process, using PCjs:

	Loading /software/pcx86/app/other/dbase3/1.0/DBIII-100-UNLOCKED.json.......
	FDC: Mounted diskette "dBASE III 1.0 (Unlocked)" in drive A
	
	A>dir
	
	 Volume in drive A has no label
	 Directory of  A:\
	
	DBASE    EXE   112720   9-28-84   3:46p
	DBASE    OVL   147456   6-26-84   5:36p
	HELP     DBS    53760   6-26-84   5:36p
	ASSIST   HLP    15223   6-26-84   5:37p
	READ     ME      4224   6-26-84   5:37p
	CONFIG   SYS       22   6-26-84   5:37p
	        6 File(s)     15360 bytes free
	
	A>ren dbase.exe dbase.tmp
	
	A>b:debug dbase.tmp
	-d 5f4 l4
	08FF:05F4  25 39 4F 45                                       %9OE
	-e 5f4
	08FF:05F4  25.     39.e3   4F.c4   45.eb
	-d a44
	08FF:0A44  2D 26 AB 36-38 06 9C 17 1A 54 A5 4B               -&+68....T%K
	08FF:0A50  E8 41 4C E0 AF 68 0B 07-6E 07 80 16 1B B6 BF B7   hAL`/h..n....6?7
	08FF:0A60  4C 6B C2 39 26 DC 97 BF-3B CE C0 EB 4F BB B3 C2   LkB9&\.?;N@kO;3B
	08FF:0A70  27 A6 90 75 F4 AF 68 93-DF 62 43 CD B7 65 AD 34   '&.ut/h._bCM7e-4
	08FF:0A80  11 B0 85 93 29 A2 9B A4-42 74 A6 84 24 7C 17 4C   .0..)".$Bt&.$|.L
	08FF:0A90  7B 5E F9 2C 66 0E 4E 27-B4 2F 50 4E 9C 76 CE D6   {^y,f.N'4/PN.vNV
	08FF:0AA0  DB 51 21 D1 2C 4B 3B 73-48 EE 8E 6A 9C D7 E2 4F   [Q!Q,K;sHn.j.WbO
	08FF:0AB0  FA B6 10 24 28 A0 45 C8-50 36 9A 5E 9F C4 A1 EC   z6.$( EHP6.^.D!l
	08FF:0AC0  A2 51 AA B8                                       "Q*8
	-e a44
	08FF:0A44  2D.b0   26.5e   AB.e6   36.af   
	08FF:0A48  38.1e   06.f1   9C.41   17.31   1A.73   54.59   A5.c1   4B.a4   
	08FF:0A50  E8.0e   41.cd   4C.63   E0.fe   AF.c1   68.39   0B.0b   07.62   
	08FF:0A58  6E.60   07.93   80.be   16.cf   1B.08   B6.f8   BF.4e   B7.56   
	08FF:0A60  4C.53   6B.d3   C2.5d   39.4f   26.a3   DC.9a   97.ae   BF.14   
	08FF:0A68  3B.c4   CE.7b   C0.dc   EB.e4   4F.ee   BB.45   B3.f9   C2.ab   
	08FF:0A70  27.3f   A6.15   90.56   75.3d   F4.5b   AF.a3   68.a1   93.20   
	08FF:0A78  DF.ad   62.98   43.be   CD.02   B7.c8   65.63   AD.df   34.c3   
	08FF:0A80  11.e0   B0.2f   85.26   93.af   29.31   A2.29   9B.40   A4.4f   
	08FF:0A88  42.86   74.98   A6.90   84.fc   24.d6   7C.76   17.e3   4C.e5   
	08FF:0A90  7B.f1   5E.61   F9.08   2C.8a   66.20   0E.f7   4E.37   27.64   
	08FF:0A98  B4.4f   2F.e2
	-w
	Writing 1B850 bytes
	-q
	
	A>ren dbase.tmp dbase.exe
	
	A>dir
	
	 Volume in drive A has no label
	 Directory of  A:\
	
	DBASE    EXE   112720   8-11-17   9:51a
	DBASE    OVL   147456   6-26-84   5:36p
	HELP     DBS    53760   6-26-84   5:36p
	ASSIST   HLP    15223   6-26-84   5:37p
	READ     ME      4224   6-26-84   5:37p
	CONFIG   SYS       22   6-26-84   5:37p
	        6 File(s)     15360 bytes free
	
	saving diskette /software/pcx86/app/other/dbase3/1.0/DBIII-100-UNLOCKED.json...

I haven't examined this patch again (yet), but I will admit that it seems rather lengthy.  Usually one strives for
a very small, surgically precise patch that's more on the order of 3 or 4 bytes, but we have to remember that I wasn't
very familiar with either the IBM PC or the 8088 instruction set at this point -- this was also a learning exercise.

And who knows, maybe Vault Corporation (the company that Ashton-Tate used to provide the copy-protection logic for
dBASE III) wrote such sophisticated code that it was impossible to defeat so simply.  However, experience suggests
that's unlikely. 

*[@jeffpar](https://jeffpar.com)*  
*Aug 11, 2017*
