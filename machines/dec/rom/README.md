---
layout: page
title: Digital Equipment Corp. (DEC) ROMs
permalink: /machines/dec/rom/
redirect_from: /devices/dec/rom/
---

This directory describes a variety of ROMs for DEC equipment, originally made available by Pete Turnbull at
[http://www.dunnington.u-net.com/public/DECROMs/](https://web.archive.org/web/20140723115846/http://www.dunnington.u-net.com/public/DECROMs/).

* [README](#readme)
* [INDEX](#index)
* [ROMLIST](#romlist)
* [WANTED](#wanted)

### README

	This directory contains a repository of ROM images, as BINARY files.
	
	Please note that these ROMs contain software which may be subject to
	copyright.  They are provided here as a convenience to collectors of
	classic computers, for use only in repairing machines and peripherals.
	
	They are not here for free upgrades, and any misuse may result in
	them going away.  If you are the owner of the copyright on any of
	these images, and wish them to be removed, please contact me
	(pete at dunnington dot u hyphen net dot com).
	
	Contributions of additional PDP-11 ROM images are welcome.  See the
	file "Wanted!" for images I'd especially like to get.  See the file
	"ROMlist" for a description of each image.
	
	If you download any of these images, make sure you do so in binary
	mode, not text.  The size of each ROM is an exact power of two; if
	the file you end up with after download is not exactly right, your
	browser scrambled it.
	
	DEC ROM part numbers all begin with "23-".
	The next three digits+letter+digit are the ROM number, eg "123E2"
	In some parts lists, numbers are shown with a trailing "-00".
	However, my parts microfiches show hundreds of ROM numbers, and only
	about eight have digits other than "-00" so in general it's redundant.
	
	The final letter+digit gives the general ROM type and size:
	
	A indicates 4-bit bipolar PROM
	F indicates 4-bit bipolar PROM
	D ?? same as E?  (mine are MOS EPROMs)
	E indicates 8-bit MOS EPROM (or occasionally a masked ROM)
	J indicates a PAL or HAL
	K indicates a registered PAL
	L ??
	U ??
	
	A9 means   512 x 4 16-pin, eg 82S131, MMI6306, 75S171, 27S13 etc
	F1 means  1024 x 4 18-pin, eg 82S137, 24S41, MMI6353, 27S573, 27S33, etc
	E2 means  2048 bytes, eg a 2716
	E3 means  4096 bytes, eg a 2732
	E4 means  8192 bytes, eg a 2764 or MCM68766
	E5 means 16384 bytes, eg a 27128
	E6 means 32768 bytes, eg a 27256
	E7 means 65536 bytes, eg a 27512
	E8 means  128K bytes or  64K x 16, eg a 27C210
	E9 means  256K bytes or 128K x 16

### INDEX

	00ReadMe                09-Sep-2009 19:51     2k  
	23-015E8.bin            12-Aug-2004 01:04   128k  
	23-017E3.bin            09-Sep-2009 19:52     4k  
	23-018E2.bin            23-Nov-2009 21:10     2k  
	23-021E3.bin            09-Sep-2009 19:52     4k  
	23-032E2.bin            07-May-2008 08:00     2k  
	23-033E2.bin            27-May-2004 23:22     2k  
	23-034E2.bin            27-May-2004 23:22     2k  
	23-039D1.bin            27-May-2004 23:43     1k  
	23-040D1.bin            27-May-2004 23:43     1k  
	23-042E5.bin            27-May-2004 23:22    16k  
	23-043E5.bin            27-May-2004 23:23    16k  
	23-045E2.bin            27-May-2004 23:43     2k  
	23-046E2.bin            27-May-2004 23:43     2k  
	23-054E7.bin            27-May-2004 23:23    64k  
	23-061E2.bin            25-Mar-2006 01:28     2k  
	23-088E8.bin            12-Aug-2004 01:05   128k  
	23-089E2.bin            09-Sep-2009 19:52     2k  
	23-089E8.bin            12-Aug-2004 01:06   128k  
	23-110E6.bin            27-May-2004 23:23    32k  
	23-111E6.bin            27-May-2004 23:44    32k  
	23-115E4.bin            11-Aug-2004 11:55     8k  
	23-115E8.bin            12-Aug-2004 01:06   128k  
	23-116E4.bin            27-May-2004 23:47     8k  
	23-116E5.bin            05-Sep-2004 00:47    16k  
	23-117E5.bin            05-Sep-2004 00:47    16k  
	23-126E4.bin            27-May-2004 23:47     8k  
	23-127E4.bin            27-May-2004 23:47     8k  
	23-134E8.bin            12-Aug-2004 01:07   128k  
	23-134K5.bin            22-Jan-2011 15:23    51k  
	23-135E8.bin            12-Aug-2004 01:08   128k  
	23-145E4.bin            27-May-2004 23:47     8k  
	23-146E4.bin            27-May-2004 23:47     8k  
	23-153D2.bin            22-Jan-2011 15:23     1k  
	23-154D2.bin            22-Jan-2011 15:23     1k  
	23-157E4.bin            09-Sep-2009 19:52     8k  
	23-158E4.bin            09-Sep-2009 19:53     8k  
	23-168E5.bin            27-May-2004 23:47    16k  
	23-169E5.bin            27-May-2004 23:47    16k  
	23-172E5.bin            27-May-2004 23:48    16k  
	23-173E5.bin            27-May-2004 23:48    16k  
	23-178E5.bin            05-Sep-2004 00:47    16k  
	23-179E5.bin            05-Sep-2004 00:47    16k  
	23-183E4.bin            27-May-2004 23:48     8k  
	23-184E4.bin            27-May-2004 23:48     8k  
	23-188E5.bin            27-May-2004 23:48    16k  
	23-189E5.bin            27-May-2004 23:48    16k  
	23-194E7.bin            12-Aug-2004 01:08    64k  
	23-195E7.bin            12-Aug-2004 01:09    64k  
	23-199E7.bin            12-Aug-2004 01:09    64k  
	23-208E5.bin            27-May-2004 23:48    16k  
	23-209E5.bin            27-May-2004 23:48    16k  
	23-213E4.bin            09-Sep-2009 19:52     8k  
	23-214E4.bin            09-Sep-2009 19:52     8k  
	23-216E5.bin            11-Aug-2004 14:01    16k  
	23-217E5.bin            11-Aug-2004 14:01    16k  
	23-238E4.bin            27-May-2004 23:48     8k  
	23-239E4.bin            27-May-2004 23:48     8k  
	23-243E5.bin            28-May-2004 00:01    16k  
	23-244E5.bin            28-May-2004 00:01    16k  
	23-248E5.bin            12-Aug-2004 01:09    16k  
	23-249E5.bin            12-Aug-2004 01:09    16k  
	23-254E6.bin            27-May-2004 23:54    32k  
	23-261E5.bin            18-May-2001 22:06    16k  
	23-262E5.bin            18-May-2001 22:07    16k  
	23-264E4.bin            27-May-2004 23:54     8k  
	23-265E4.bin            27-May-2004 23:54     8k  
	23-285E5.bin            27-May-2004 23:55    16k  
	23-286E5.bin            27-May-2004 23:55    16k  
	23-330E5.bin            10-Aug-2004 10:23    16k  
	23-331E5.bin            10-Aug-2004 10:24    16k  
	23-334E5.bin            27-May-2004 23:55    16k  
	23-335E5.bin            27-May-2004 23:55    16k  
	23-339E2.bin            27-May-2004 23:55     2k  
	23-339E5.bin            27-May-2004 23:55    16k  
	23-340E2.bin            27-May-2004 23:55     2k  
	23-340E5.bin            27-May-2004 23:59    16k  
	23-365E5.bin            09-Sep-2009 19:53    16k  
	23-366E5.bin            09-Sep-2009 19:52    16k  
	23-380E4.bin            27-May-2004 23:55     8k  
	23-381E4.bin            27-May-2004 23:56     8k  
	23-381E6.bin            27-May-2004 23:56    32k  
	23-382E6.bin            27-May-2004 23:58    32k  
	23-383E5.bin            27-May-2004 23:58    16k  
	23-384E5.bin            27-May-2004 23:58    16k  
	23-398E4.bin            27-May-2004 23:58     8k  
	23-399E4.bin            27-May-2004 23:58     8k  
	23-419E4.bin            22-Jan-2011 15:23     8k  
	23-420E4.bin            22-Jan-2011 15:23     8k  
	23-451E4.bin            09-Sep-2009 19:52     8k  
	23-452E4.bin            09-Sep-2009 19:53     8k  
	23-453E6.bin            25-May-2001 21:44    32k  
	23-465E4.bin            09-Sep-2009 19:52     8k  
	23-466E4.bin            09-Sep-2009 19:53     8k  
	23-529E6.bin            05-Sep-2004 00:49    32k  
	23-530E6.bin            05-Sep-2004 00:51    32k  
	ROMlist                 07-Jan-2012 00:17    24k  
	Wanted!                 22-Jan-2011 15:24     1k  

### ROMLIST

	ROM number  goes with   for module  size (K) socket function                          High byte
	==========  =========   ==========  ======== ====== ===============================   =========
	
	23-015E8                                128K        MicroVAX III
	                                                    KA655-A VMB Rev.5.3
	                                                    See also 23-194/5E7
	
	23-018E2      n/a   	    	    	  2K	    VT100 character generator
	
	23-017E3    23-021E3	    	    	  4K	    VT18x "Robin" boot ROMs
	                                                    Version 2.1
	
	23-021E3    23-017E3	    	    	  4K	    VT18x "Robin" boot ROMs
	                                                    Version 2.1
	
	23-031E2    032/33/34                     2K ROM0   Terminalboard ROM, VT100
	                                                    031/32/33/34 = VT100
	                                                    061/32/33/34 = VT125/105
	
	23-032E2    061/33/34                     2K ROM1   Terminalboard ROM, VT100
	                                                    031/32/33/34 = VT100
	                                                    061/32/33/34 = VT125/105
	
	23-033E2    061/32/34                     2K ROM2   Terminalboard ROM, VT100
	                                                    031/32/33/34 = VT100
	                                                    061/32/33/34 = VT125/105
	
	23-034E2    061/32/33                     2K ROM3   Terminalboard ROM, VT100
	                                                    031/32/33/34 = VT100
	                                                    061/32/33/34 = VT125/105
	
	23-039D1    23-040D1    M8047-AC          2K E57    MXV11-A2 Bootstrap                0
	                                                    039 => XE57 (low byte)
	
	23-040D1    23-039D1    M8047-AC          2K E67    MXV11-A2 Bootstrap                1
	                                                    040 => XE67
	
	23-042E5    23-043E5    M8639-YA         16K        RQDX1 T-11 code, issue 2          0
	                                                    RD51,RD52,RX50 support
	                                                    Firmware V9.0; rewrites 
	                                                    RCT/FCT so not back-compatible
	
	23-043E5    23-042E5    M8639-YA         16K        RQDX1 T-11 code, issue 2          1
	                                                    RD51,RD52,RX50 support
	                                                    Firmware V9.0; rewrites 
	                                                    RCT/FCT so not back-compatible
	
	23-045E2    23-046E2    M8012             2K        Standard BDV11 Boot ROMs          0
	                                                    (only about half used)
	
	23-046E2    23-045E2    M8012             2K        Standard BDV11 Boot ROMs          1
	                                                    (note only about 1K used)
	
	23-051L1                M7546                       E3 ROM on TQK50 Rev.D1            
	
	23-054E7                                 64K        VT320 code ROM                    
	
	23-061E2    032/33/34                     2K ROM0   Terminalboard ROM, VT100          1
	                                                    031/32/33/34 = VT100
	                                                    061/32/33/34 = VT125/105
	
	23-065L1                M7546                       E3 ROM on TQK50 Rev.J1,
	                                                    FC0 TQK50-R002         
	
	23-077E5    23-078E5    M8190-B          16K E116   KDJ-11B (PDP11/73+) boot          0
	                                                    Version 6
	                                                    See also 116/117
	
	23-078E5    23-077E5    M8190-B          16K E117   KDJ-11B (PDP11/73+) boot          1
	                                                    Version 6
	                                                    See also 116/117
	
	23-088E8    23-089E8                    128K        MicroVAX 3100
	                                                    KA42 V015
	
	23-089E2    	    	    	    	  2K	    TU-58 firmware, as used on
	                                                    standalone serial and VT103
							    integrated units
	
	23-089E8    23-088E8                    128K        MicroVAX 3100
	                                                    KA42 V015
	
	23-094E2                                  2K        extra chargen, VT100-WC-WK
	                                                    use with 095/096/139/140
	                                                    see also 097/098,180-183
	
	23-095E2    096/97/98                     2K ROM0   Terminalboard ROM, VT100
	                                                    095/096/139/140 = VT1xxAC
	                                                    Add CharGen 094 for -WC/WK
	                                                    see also 097/098,180-183
	
	23-096E2    095/97/98                     2K ROM1   Terminalboard ROM, VT100
	                                                    095/096/139/140 = VT1xxAC
	                                                    Add CharGen 094 for -WC/WK
	                                                    see also 097/098,180-183
	
	23-097E2    095/96/98                     2K ROM2   Terminalboard ROM, VT132
	                                                    095/096/139/140 = VT1xxAC
	                                                    Add CharGen 094 for -WC/WK
	                                                    see also 097/098,180-183
	
	23-098E2    095/96/97                     2K ROM3   Terminalboard ROM, VT132
	                                                    095/096/139/140 = VT1xxAC
	                                                    Add CharGen 094 for -WC/WK
	                                                    see also 097/098,180-183
	
	23-110E6    23-111E6    M7606            32K        uVax2 boot                        0
	                                                    (this one nearest centre of PCB)
	
	23-111E6    23-110E6    M7606            32K        uVax2 boot                        1
	                                                    (this one nearest edge of PCB)
	
	23-115E4    23-116E4                      8K        Pro350 bootstrap
	                                                    in MCM68766C
	                                                    (8k x 8, 24-pin)
	
	23-115E8                                128K        VAXstation framebuffer?
	                                                    WS01 V013
	
	23-116E4    23-115E4                      8K        Pro350 bootstrap
	                                                    in MCM68766C's
	                                                    (8k x 8, 24-pin)
	
	23-116E5    23-117E5    M8190-B          16K E116   KDJ-11B (PDP11/73+) boot          0
	                                                    Version 7
	                                                    See also 077/078
	
	23-117E5    23-116E5    M8190-B          16K E117   KDJ-11B (PDP11/73+) boot          1
	                                                    Version 7
	                                                    See also 077/078
	
	23-126E4    23-127E4	?????	    	  8K	    unknown - data welcome
	
	23-127E4    23-126E4	?????	    	  8K	    unknown - data welcome
	
	23-134E8    23-135E8                    128K        MicroVAX 3100
	                                                    KA43 V012
	
	23-134K5                M7169                E68    VCB02 framebuffer PAL
	                                                    (VAXstation II)
							    See also 23-419/420E4, 23-153/4D2
	
	23-135E8    23-134E8                    128K        MicroVAX 3100
	                                                    KA43 V012
	
	23-139E2    095/6,140                     2K ROM2   Terminalboard ROM, VT100-WC,-WK
	                                                    095/096/139/140 = VT1xxAC
	                                                    Add CharGen 094 for -WC/WK
	                                                    see also 097/098,180-183
	
	23-140E2    095/6,139                     2K ROM3   Terminalboard ROM, VT100-WC,-WK
	                                                    095/096/139/140 = VT1xxAC
	                                                    Add CharGen 094 for -WC/WK
	                                                    see also 097/098,180-183
	
	23-145E4    23-146E4    M7195             8K        MXV11-B2 boot ROMs                0
	
	23-146E4    23-145E4    M7195             8K        MXV11-B2 boot ROMs                1
	
	23-153D2    23-154E4    M7169             8K E58    VCB02 framebuffer PROM
	                                                    (VAXstation II)
							    See also 23-419/420E4, 23-134K5 
	
	23-153D2    23-154E4    M7169             8K E53    VCB02 framebuffer PROM
	                                                    (VAXstation II)
							    See also 23-419/420E4, 23-134K5 
	
	23-157E4    23-158E4    M8189-BE          8K        early KDF11-BE boot ROMs V0.8
	                                                    Not listed in KDF11-B
	                                                    Maintenance Manual.
	
	23-158E4    23-157E4    M8189-BE          8K        early KDF11-BE boot ROMs V0.8
	                                                    Not listed in KDF11-B
	                                                    Maintenance Manual.
	
	23-166E5    23-167E5    M7555            16K        Don't exist: wrongly numbered     0
	                                                    on parts list.
							    Should be 216/217.  Ver.1.10
	
	23-167E5    23-166E5    M7555            16K        Dont't exist: wrongly numbered    1
	                                                    on parts list.
							    Should be 216/217.
	
	23-168E5    23-169E5    M8190            16K        microPDP-11/83 bootrom            0
	                                                    Rev 8?
	
	23-169E5    23-168E5    M8190            16K        microPDP-11/83 bootrom            1
	                                                    Rev 8?
	
	23-170E5    23-171E5    M7546            16K        TQK50 ROMs, rev.1                 0
	                                                    see also 180/181, 208/209
	                                                             248/249, 330/331
	
	23-171E5    23-170E5    M7546            16K        TQK50 ROMs, rev.1                 1
	                                                    see also 180/181, 208/209
	                                                             248,249, 330,331
	
	23-172E5    23-173E5    M8639-YA         16K        RQDX1 T-11 code, issue 3          0
	                                                    RD51,RD52,RX50 support
	                                                    Firmware V9.4E; rewrites 
	                                                    FCT so not back-compatible
	
	23-173E5    23-172E5    M8639-YA         16K        RQDX1 T-11 code, issue 3          1
	                                                    RD51,RD52,RX50 support
	                                                    Firmware V9.4E; rewrites 
	                                                    FCT so not back-compatible
	
	23-178E5    23-179E5    M8639-YB         16K        RQDX2 T-11 code, issue 1          0
	                                                    RD51,RD52,RD53,RX50 support
	                                                    Firmware V10.0D
	
	23-179E5    23-178E5    M8639-YB         16K        RQDX2 T-11 code, issue 1          1
	                                                    RD51,RD52,RD53,RX50 support
	                                                    Firmware V10.0D
	
	23-180E2    181/2/3                       2K ROM0   Terminalboard ROM, VT132
	                                                    see also 095-098,181-183
	
	23-180E5    23-181E5    M7546            16K        TQK50 ROMs, rev.2 (C1)            0
	                                                    see also 170/171, 208/209.
	                                                             248/249, 330/331
	
	23-181E2    180/2/3                       2K ROM1   Terminalboard ROM, VT132
	                                                    see also 095-098,180-183
	
	23-181E5    23-180E5    M7546            16K        TQK50 ROMs, rev.2 (C1)            1
	                                                    see also 170/171, 208/209.
	                                                             248/249, 330/331
	
	23-182E2    180/1/3                       2K ROM2   Terminalboard ROM, VT132
	                                                    see also 095-098,180-182
	
	23-183E2    180/1/2                       2K ROM3   Terminalboard ROM, VT132
	                                                    see also 095-098,180-182
	
	23-183E4    23-184E4    M8189-BF          8K        KDF11-BF (µPDP11) Boot            0
	                                                    See also 157/158, 238/239,
	                                                             339/340
	                                                    (-BE v.0.9)ok:BDV11 (mod)
	
	23-184E4    23-183E4    M8189-BF          8K        KDF11-BF (µPDP11) Boot            1
	                                                    See also 157/158, 238/239,
	                                                             339/340, 380/381,
	                                                             453/454
	                                                    (-BE v.0.9)ok: BDV11(mod)
	
	23-188E5    23-189E5    M8639-YB         16K        RQDX2 T-11 code, issue 2          0
	                                                    RD51,RD52,RD53,RX50 support
	                                                    Firmware V10.0E
	
	23-189E5    23-188E5    M8639-YB         16K        RQDX2 T-11 code, issue 2          1
	                                                    RD51,RD52,RD53,RX50 support
	                                                    Firmware V10,0E
	
	23-194E7    23-195E7                     64K        MicroVAX III
	                                                    KA650-B VMB Rev.5.3
	                                                    See also 23-015E8
	
	23-195E7    23-194E7                     64K        MicroVAX III
	                                                    KA650-B VMB Rev.5.3
	                                                    See also 23-015E8
	
	23-199E7                                 64K        VAXstation framebuffer?
	                                                    VX40X
	
	23-208E5    23-209E5    M7546            16K        TQK50 ROMs, rev.3 (E1)            0
	                                                    see also 170/171, 180/181.
	                                                             248/249, 330/331
	
	23-209E5    23-208E5    M7546            16K        TQK50 ROMs, rev.3 (E1)            1
	                                                    see also 170/171, 180/181.
	                                                             248/249, 330/331
	
	23-213E4    23-214E4	    	    	  8K	    DCT-11-EM boot ROMs
	                                                    for T-11 Evaluation Board
	
	23-214E4    23-213E4	    	    	  8K	    DCT-11-EM boot ROMs
	                                                    for T-11 Evaluation Board
	
	23-216E5    23-217E5    M7555            16K        RQDX3 T-11 code issue 1           0
	
	23-217E5    23-216E5    M7555            16K        RQDX3 T-11 code issue 1           1
	
	23-228E4    23-229E4	M7792	    	  8K	    DEUNA Port Module
	
	23-229E4    23-228E4	M7792	    	  8K	    DEUNA Port Module
	
	23-238E4    23-239E4    M8189-BE          8K        KDF11-BE (µPDP11) Boot            0
	                                                    See also 183/184,339/340
	
	23-239E4    23-238E4    M8189-BE          8K        KDF11-BE (µPDP11) Boot            1
	                                                    See also 183/184,339/340
	
	23-243E5    23-244E5    M7555            16K        RQDX3 T-11 code issue 2           0
	
	23-244E5    23-243E5    M7555            16K        RQDX3 T-11 code issue 2           1
	
	23-248E5    23-249E5    M7546            16K        TQK50 (probably Rev.4)
	                                                    See 170/1, 180/1, 208/9, 330/1
	
	23-249E5    23-248E5    M7546            16K        TQK50 (probably Rev.4)
	                                                    See 170/1, 180/1, 208/9, 330/1
	
	23-254E6                TK50Z            32K        TK50Z-FA ROM
	                                                    The "not-so-good" version
	
	23-261E5    23-262E5    M7554 etc        16K        PDP11/53 (KDJ11-SD) Boot          0
	                                                    See also 23-529E6/23-530E6
	
	23-262E5    23-261E5    M7554            16K        KDJ11-SD boot (PDP11/53)          1
	                                                    See also 23-529E6/23-530E6
	
	23-264E4    23-265E4    M8639             8K        RQDX2 T-11 code, issue 1a         0
	                                                    RD51,RX50 support only
	                                                    Firmware V8.0
	                                                    238E4/239E4 = V7.0
	
	23-265E4    23-264E4    M8639             8K        RQDX2 T-11 code, issue 1a         1
	                                                    RD51,RX50 support only
	                                                    Firmware V8.0
	                                                    238E4/239E4 = V7.0
	
	23-285E5    23-286E5    M7555            16K        RQDX3 T-11 code issue 3           0
	                                                    up to RD53 only(?)
	
	23-286E5    23-285E5    M7555            16K        RQDX3 T-11 code issue 3           1
	                                                    up to RD53 only(?)
	
	23-287E8    23-288E8                     32K        VAXstation 4000 VLC
	                                                    40-pin 16K x 16, 27C201
	
	23-288E8    23-287E8                     32K        VAXstation 4000 VLC
	                                                    40-pin 16K x 16, 27C201
	
	23-330E5    23-331E5	M7546	    	 16K E29    TQK50 ROMs, Rev.? (J1 etc)        0
	                                                    E29 = low byte, FC0 TQK50-R002
	
	23-331E5    23-330E5	M7546	    	 16K E28    TQK50 ROMs, Rev.? (J1 etc)        1
	                                                    E28 = high byte, FC0 TQK50-R002
	
	23-334E5    23-335E5    M7516            16K        DELQA ROMs                        
	
	23-335E5    23-334E5    M7516            16K        DELQA ROMs                        
	
	23-339E2    23-340E2    M8189-BA          2K        KDF-11BA (PDP11/23+) boot         0
	                                                    See also 380/381,183/184,
	                                                             238/239,453/454
	
	23-339E5    23-340E5    M7555            16K        RQDX3 T-11 code issue 4           0
	                                                    Handles RD54
	
	23-340E2    23-339E2    M8189-BA          2K        KDF-11BA (PDP11/23+) boot         1
	                                                    See also 380/381,183/184,
	                                                             238/239,453/454
	
	23-340E5    23-339E5    M7555            16K        RQDX3 T-11 code issue 4           1
	                                                    Handles RD54
	
	23-365E5    23-366E5	M7516-YM    	 16K	    DELQA-Plus aka Turbo DELQA
	                                                    Ver.2.0.0  Replaces 334/335
	
	23-366E5    23-365E5	M7516-YM    	 16K	    DELQA-Plus aka Turbo DELQA
	                                                    Ver.2.0.0  Replaces 334/335
	
	23-368E9    23-E89J5                    256K E7     KZMSA-F001 FCO
	                                                    Needs new PAL E89J at E110
	
	23-380E4    23-381E4    M8189-BG          8K        KDF11-BG (uPDP11/23) boot         0
	                                                    See also 339/340,183/184,
	                                                             238/239,453/454
	                                                    KDF11-B Maintenance
	                                                    Manual calls this -BH
	
	23-381E4    23-380E4    M8189-BG          8K        KDF11-BG (uPDP11/23) boot         1
	                                                    See also 339/340, 183/184
	                                                             238/239,453/454
	                                                    KDF11-B Maintenance
	                                                    Manual calls this -BH
	
	23-381E6    23-382E6    M7554            32K        DECserver 500 (KDJ11-SD)          0
	                                                    (same board as 11/53, but
	                                                     S-box mounting)
	
	23-382E6    23-381E6    M7554            32K        DECserver 500 (KDJ11-SD)          1
	                                                    (same board as 11/53, but
	                                                     S-box mounting)
	
	23-383E5    23-384E5    M7769            16K        KFQSA                             0
	
	23-384E5    23-383E5    M7769            16K        KFQSA                             1
	
	23-398E4    23-399E4	?????	    	  8K	    unknown - data welcome
	
	23-399E4    23-398E4	?????	    	  8K	    unknown - data welcome
	
	23-410E6    23-411E6    M7559            32K E27    TKQ70 FCO TQK70-R001
	                                                    410 at E27, 411 at E28
	
	23-411E6    23-410E6    M7559            32K E28    TKQ70 FCO TQK70-R001
	                                                    410 at E27, 411 at E28
	
	23-419E4    23-420E4    M7169             8K E36    VCB02 framebuffer diagnostics
	                                                    (VAXstation II)
							    See also 23-153/4D2, 23-134K5 
	
	23-420E4    23-419E4    M7169             8K E43    VCB02 framebuffer diagnostics
	                                                    (VAXstation II)
							    See also 23-153/4D2, 23-134K5 
	
	23-432E4    23-433E4    M7521             8K        DELUA ROMs, old
	                                                    Replaced by 23-451/452E4
	
	23-433E4    23-432E4    M7521             8K        DELUA ROMs , FC0 DELUA-I002
	                                                    Replaced by 23-451/452E4
	
	23-451E4    23-452E4    M7521             8K E31    DELUA ROMs, FC0 DELUA-I002
	                                                    Replaces 23-432E4
							    See also 23-465/466E4
	
	23-452E4    23-451E4    M7521             8K E56    DELUA ROMs, FC0 DELUA-I002
	                                                    Replaces 23-433E4
	
	23-453E4    23-454E4    8189-BJ           8K        KDF11-BJ (uPDP11/23) boot         0
	                                                    Last release
	                                                    See also 339/340,238/239,
	                                                             158/159,183/184,
	                                                             380/381.
	
	23-453E6                TK50Z            32K        TK50Z-GA ROM
	                                                    The "best" version
	
	23-454E4    23-453E4    8189-BJ           8K        KDF11-BJ (uPDP11/23) boot         1
	                                                    Last release
	                                                    See also 339/340,238/239,
	                                                             158/159,183/184,
	                                                             380/381.
	
	23-465E4    23-466E4	M7521             8K E31    DELUA ROMs
	                                                    later than 23-451/452E4??
	
	23-466E4    23-465E4	M7521             8K E56    DELUA ROMs
	                                                    later than 23-451/452E4??
	
	23-529E6    23-530E6    M7554 etc        32K        DECserver 500 (KDJ11-SD) Boot     0
	                                                    See also 23-261E5/262E5
	
	23-530E6    23-529E6    M7554 etc        32K        KDJ11-SD (DECserver 500) Boot     1
	                                                    See also 23-261E5/262E5

### WANTED

	To Get:
	
	23-031E2    	     VT100 terminal ROM
	23-051L1      M7546  TQK50 Rev.D1 E3 ROM
	23-065L1      M7546  TQK50 Rev.J1 E3 ROM
	23-077E5      M8190  KDJ-11B (PDP11/73+) boot Version 6
	23-078E5      M8190  KDJ-11B (PDP11/73+) boot Version 6
	23-094E2             VT100 extra chargen
	23-095E2             VT100 extra chargen
	23-096E2             VT100 extra chargen
	23-097E2             VT132 extra chargen
	23-098E2             VT132 extra chargen
	23-139E2             VT100 terminal board ROM
	23-140E2             VT100 terminal board ROM
	23-170E5      M7546  TQK50 ROMs, rev.1
	23-171E5      M7546  TQK50 ROMs, rev.1
	23-180E2             VT132 terminal board ROM
	23-180E5      M7546  TQK50 ROMs, rev.2 (C1)
	23-181E2             VT132 terminal board ROM
	23-181E5      M7546  TQK50 ROMs, rev.2 (C1)
	23-182E2             VT132 terminal board ROM
	23-183E2             VT132 terminal board ROM
	23-228E4      M7792  DEUNA Port Module ROM
	23-229E4      M7792  DEUNA Port Module ROM
	23-287E8             VAXstation 4000 VLC (40-pin EPROM)
	23-288E8             VAXstation 4000 VLC (40-pin EPROM)
	23-368E9             KZMSA-F001 FCO (goes with PAL 23-E89J5)
	23-410E6      M7559  TKQ70 FCO TQK70-R001
	23-411E6      M7559  TKQ70 FCO TQK70-R001
	23-432E4      M7521  DELUA ROM, FC0 DELUA-I002
	23-433E4      M7521  DELUA ROM, FC0 DELUA-I002
	23-453E6    	     TK50Z-GA ROM
	23-453E4      M8189  KDF11-BJ (uPDP11/23) boot, last release
	23-454E4      M8189  KDF11-BJ (uPDP11/23) boot, last release
	
	What is:
	23-126E4
	23-127E4
	23-398E4
	23-399E4
