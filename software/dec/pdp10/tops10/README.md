---
layout: page
title: DEC TOPS-10 for the PDP-10
permalink: /software/dec/pdp10/macro10/
redirect_from: /apps/pdp10/tops10/
---

Having never used TOPS-10 in real life, it seemed like a good idea to get familiar with it first, using another
emulator.  Thankfully, [The Digital Antiquarian](http://www.filfre.net/) created "[TOPS-10 in a Box](http://www.filfre.net/2011/05/tops-10-in-a-box/)",
everything you need to run TOPS-10 on a virtual PDP-10.

From README.txt (in the "TOPS-10 in a Box" zip file): 

	STARTING YOUR VIRTUAL PDP-10
	============================
	
	1. Bring up a command prompt in the PDP-10 In a Box directory using whatever technique is normal for your platform.
	
	2. Enter "pdp10 tops10.cfg".
	
	3. At the "BOOT>" prompt, just press enter.
	
	4. At the "Why reload:" prompt, enter "NEW".
	
	5. At the "Date:" prompt, just press enter to accept your host computer's current date.
	   If you wish, you may enter another date in the format "MM-DD-YYYY".
	
	6. At the "Time:" prompt, just press enter to accept your host computer's current time.
	   If you wish, you may enter another time in the format "HHMMSS".
	
	7. At the "Startup option:" prompt, enter "GO".
	
	8. After a moment, the system will place you in the system operator's console (denoted by the "OPR>" prompt).
	   To work with programs and files like a normal user, just type "EXIT" here.

Unfortunately, my first attempt hung after step #3, which I resolved by downgrading from [SIMH V4.0](https://github.com/simh/simh/releases/tag/v4.0-devel)
to the older [SIMH V3.9](http://simh.trailing-edge.com/sources/simhv39-0.zip).  Here's the resulting output:

	PDP-10 simulator V3.9-0
	Listening on port 2020 (socket 5)
	Modem control activated
	Auto disconnect activated
	Logging to file "tops10.log"
	BOOT V4(76)
	
	BOOT>
	[Loading from DSKB:SYSTEM.EXE[1,4]]
	
	KS10 07-Oct-88
	Why reload: NEW
	Date: 
	Time: 
	Startup option: GO
	[Rebuilding the system search list from the HOM blocks]
	
	[Rebuilding the active swapping list from the HOM blocks]
	
	[Rebuilding the system dump list from the HOM blocks]
	
	
	KS10 09:09:41 CTY system 4097
	Connected to Node CENTRA(0) Line # 42
	.LOGIN 1,2
	.R OPR
	
	[CCPWFD Waiting for file daemon to start]
	%%TTY STOMPER - Starting
	OPR>
	 9:09:51          -- Message from the Accounting System --
					Account validation is not required
	
	 9:09:52        -- Begin auto take file --
					File: SYS:SYSTEM.CMD[1,4]
	
	 9:09:52        -- End auto take file --
					17 lines processed
	
	OPR>
	
At this point, I stopped, because now that I knew the `pdp10` binary from
[SIMH V3.9](http://simh.trailing-edge.com/sources/simhv39-0.zip) worked on my system (macOS), I wanted to
create an Xcode project to build *just* that binary, and make it easier for me to modify and debug that binary.

I had already run `make` to build the official SimH `pdp10` binary, so in order to isolate all the commands required
to build *just* `pdp10`, I re-ran `make` with `-B` to unconditionally remake all targets and `-n` to print the commands
that would be executed with executing them, and then isolated the PDP10-specific command(s) with `grep`:

	make -Bn | grep pdp10

I was pleasantly surprised to see that there was only one (albeit rather lengthy) command:

	gcc -std=c99 -U__STRICT_ANSI__  -O2 -finline-functions -flto -fwhole-program -I . -D_GNU_SOURCE -DUSE_READER_THREAD \
	-DHAVE_DLOPEN=dylib  PDP10/pdp10_fe.c PDP11/pdp11_dz.c PDP10/pdp10_cpu.c PDP10/pdp10_ksio.c PDP10/pdp10_lp20.c \
	PDP10/pdp10_mdfp.c PDP10/pdp10_pag.c PDP10/pdp10_rp.c PDP10/pdp10_sys.c PDP10/pdp10_tim.c PDP10/pdp10_tu.c \
	PDP10/pdp10_xtnd.c PDP11/pdp11_pt.c PDP11/pdp11_ry.c PDP11/pdp11_cr.c scp.c sim_console.c sim_fio.c sim_timer.c \
	sim_sock.c sim_tmxr.c sim_ether.c sim_tape.c -DVM_PDP10 -DUSE_INT64 -I PDP10 -I PDP11 -o BIN/pdp10 -lm -lpthread \
	-ldl   -flto -fwhole-program

It was time to build the Xcode project.
