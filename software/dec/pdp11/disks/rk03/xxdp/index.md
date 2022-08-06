---
layout: page
title: "RK03 XXDP+ Diagnostics Disk"
permalink: /software/dec/pdp11/disks/rk03/xxdp/
redirect_from: /disks/dec/rk03/xxdp/
---

### Boot

To boot the RK03 "XXDP+ Diagnostics" disk, start a [PDP-11/70](/machines/dec/pdp11/1170/panel/debugger/) with an
[RK11 Disk Controller](/machines/pdp11/rk11/), select the "XXDP+ Diagnostics" disk from the list of disks
available for drive "RK0", click **Load**, and wait for the message:

	Mounted disk "XXDP+ Diagnostics" in drive RK0

Then start the machine (click **Run**) and make sure the following prompt has been displayed:

	PDP-11 MONITOR V1.0

	BOOT>

At the prompt, type "BOOT RK0".  The following text should appear:

	CHMDKB1 XXDP+ DK MONITOR
	BOOTED VIA UNIT 0
	28K UNIBUS SYSTEM
	
	ENTER DATE (DD-MMM-YY): 
	
	RESTART ADDR: 152010
	THIS IS XXDP+.  TYPE "H" OR "H/L" FOR HELP.
	
	.

NOTE: Any RK11 disk drive (RK0-RK7) can be used.  RK0 was selected for demonstration purposes.

### Help

Unfortunately, this version of XXDP+ is not as complete as the [RL02K XXDP+ Diagnostics Disk](/software/dec/pdp11/disks/rl02k/xxdp/),
and there is no HELP information:

	? NOT FOUND: HELP  .TXT

Refer to [Help](/software/dec/pdp11/disks/rl02k/xxdp/#help) from the RL02K version.

### Directory

The "D" (DIRECTORY) command displays the following information:

	ENTRY# FILNAM.EXT        DATE          LENGTH  START
	
	    1  HDDKB0.SYS       2-JAN-70          2    000112
	    2  HMDKB1.SYS       2-JAN-70         17    000113
	    3  HDDKB1.SYS       2-JAN-70          2    000114
	    4  HSAAC4.SYS       8-DEC-82         24    000115
	    5  HSABC0.SYS       8-DEC-82         28    000116
	    6  HSACC0.SYS       8-DEC-82         27    000124
	    7  HSADB0.SYS       8-DEC-82         25    000126
	    8  HUDIB0.SYS       8-DEC-82          5    000240
	    9  HDDBB0.SYS       8-DEC-82          2    000271
	   10  HDDDC0.SYS       8-DEC-82          3    000303
	   11  HDDLC0.SYS       8-DEC-82          4    000305
	   12  HDDMB0.SYS       8-DEC-82          4    000322
	   13  HDDPB0.SYS       8-DEC-82          2    000323
	   14  HDDRB0.SYS       8-DEC-82          3    000331
	   15  HDDSB0.SYS       8-DEC-82          2    000332
	   16  HDDUA0.SYS       8-DEC-82          3    000333
	   17  HDDTB0.SYS       8-DEC-82          2    000335
	   18  HDDXB0.SYS       8-DEC-82          3    000344
	   19  HDDYB0.SYS       8-DEC-82          3    000346
	   20  HDKBB0.SYS       8-DEC-82          1    000347
	   21  HDLPA0.SYS       8-DEC-82          1    000350
	   22  HDPEA0.SYS       2-JAN-70          2    000352
	   23  HDMSB0.SYS       8-DEC-82          3    000354
	   24  HDMTB0.SYS       8-DEC-82          3    000355
	   25  HDPDB0.SYS       8-DEC-82          3    000363
	   26  HDPPB0.SYS       8-DEC-82          1    000364
	   27  HDPRB0.SYS       8-DEC-82          1    000365
	   28  HDPTB0.SYS       8-DEC-82          1    000371
	   29  HDTRA0.SYS       8-DEC-82          2    000372
	   30  HMDBB1.SYS       8-DEC-82         16    000373
	   31  HMDDB2.SYS       8-DEC-82         17    000374
	   32  HMDLC1.SYS       8-DEC-82         17    000376
	   33  HMDMB2.SYS       8-DEC-82         17    000402
	   34  HMDPB1.SYS       8-DEC-82         16    000404
	   35  HMDRB1.SYS       8-DEC-82         17    000513
	   36  HMDSB1.SYS       8-DEC-82         16    000521
	   37  HMDTB1.SYS       8-DEC-82         17    000523
	   38  HMDXB2.SYS       8-DEC-82         17    000524
	   39  HMDYB2.SYS       8-DEC-82         17    000527
	   40  HMMMB1.SYS       8-DEC-82         17    000640
	   41  HMDUA0.SYS       8-DEC-82         12    000641
	   42  HMMSB1.SYS       8-DEC-82         17    000650
	   43  HMMTB1.SYS       8-DEC-82         17    000651
	   44  HMPDB1.SYS       8-DEC-82         17    000654
	   45  HMTRA0.SYS       8-DEC-82         12    000735
	   46  HDMMA0.SYS      25-MAR-80          2    000765
	   47  UPD1  .BIN       8-DEC-82         12    000775
	   48  UPD2  .BIC       8-DEC-82         16    000776
	   49  UPD3  .BIN      29-DEC-77         35    000777
	   50  ZR6AD0.BIN       8-DEC-82         58    001001
	   51  ZR6BD0.BIN       8-DEC-82         51    001031
	   52  ZR6CE0.BIN       8-DEC-82         54    001071
	   53  ZR6DD0.BIN       8-DEC-82         46    001116
	   54  ZR6EC0.BIN       8-DEC-82         40    001256
	   55  ZR6GC0.BIC       8-DEC-82         55    001430
	   56  ZR6HF0.BIC       8-DEC-82         58    001443
	   57  ZR6IF0.BIC       8-DEC-82         43    001464
	   58  ZR6JF0.BIN       8-DEC-82         45    001507
	   59  ZR6KG0.BIN       8-DEC-82         51    001566
	   60  ZR6LD0.BIN       8-DEC-82         38    002013
	   61  ZR6ME1.BIC       8-DEC-82         52    002050
	   62  ZR6NE3.BIC       8-DEC-82         56    002053
	   63  ZR6PD0.BIN       8-DEC-82         57    002105
	   64  ZR6QC0.BIN       8-DEC-82         42    002165
	   65  ZR6RC1.BIN       8-DEC-82         37    002311
	   66  ZRCAB0.BIC       8-DEC-82         11    002454
	   67  ZRCBB0.BIC       8-DEC-82         10    002503
	   68  ZRCCB0.BIC       8-DEC-82          6    002507
	   69  ZRFAB0.BIC       8-DEC-82         11    002542
	   70  ZRFBB1.BIC       8-DEC-82         14    002543
	   71  ZRFCB0.BIC       8-DEC-82          6    002545
	   72  ZRHBF0.BIC       8-DEC-82         63    002565
	   73  ZRJAD0.BIC       8-DEC-82         43    002602
	   74  ZRJBD0.BIC       8-DEC-82         24    002603
	   75  ZRJCB0.BIC       8-DEC-82         20    002631
	   76  ZRJDE0.BIC       8-DEC-82         45    002651
	   77  ZRJED0.BIN       8-DEC-82         59    002773
	   78  ZRJFA0.BIN       8-DEC-82         26    002775
	   79  ZRJGE0.BIC       8-DEC-82         55    003131
	   80  ZRJHE0.BIC       8-DEC-82         49    003177
	   81  ZRJID0.BIC       8-DEC-82         60    003212
	   82  ZRJJD0.BIC       8-DEC-82         52    003260
	   83  ZRKHG0.BIC       8-DEC-82         28    003442
	   84  ZRKIF0.BIN       8-DEC-82         21    003554
	   85  ZRKJE0.BIC       8-DEC-82         11    003564
	   86  ZRKKF2.BIC       8-DEC-82         28    003653
	   87  ZRKLE0.BIC       8-DEC-82         23    003656
	   88  ZRLGC0.BIN       8-DEC-82         19    003664
	   89  ZRLHB0.BIC       8-DEC-82         27    003666
	   90  ZRLID0.BIN       8-DEC-82         30    003725
	   91  ZRLJB1.BIC       8-DEC-82         23    004023
	   92  ZRLKB2.BIC       8-DEC-82         26    004041
	   93  ZRLLC0.BIN       8-DEC-82         14    004067
	   94  ZRLMB0.BIN       8-DEC-82         23    004075
	   95  ZRLNA2.BIN       8-DEC-82         28    004153
	   96  ZRMLB1.BIC       8-DEC-82         35    004175
	   97  ZRMMB2.BIC       8-DEC-82         72    004206
	   98  ZRMNB1.BIC       8-DEC-82         69    004243
	   99  ZRMOB1.BIC       8-DEC-82         74    004260
	  100  ZRMPB2.BIC       8-DEC-82         75    004367
	  101  ZRMQB1.BIC       8-DEC-82         48    004454
	  102  ZRMRB0.BIN       8-DEC-82         67    004756
	  103  ZRMSB0.BIN       8-DEC-82         22    004774
	  104  ZRMTB0.BIN       8-DEC-82         36    005034
	  105  ZRMUB1.BIC       8-DEC-82         48    005042
	  106  ZRMVB1.BIC       8-DEC-82         46    005152
	  107  ZRNAA0.BIC       8-DEC-82         49    005156
	  108  ZRNCA0.BIC       8-DEC-82         47    005320
	  109  ZRNDA0.BIC       8-DEC-82         73    005422
	  110  ZRNFA0.BIC       8-DEC-82         72    005475
	  111  ZRNGA0.BIC       8-DEC-82         37    005520
	  112  ZRNHA0.BIN       8-DEC-82         67    005543
	  113  ZRNIA0.BIN       8-DEC-82         22    005673
	  114  ZRNJA0.BIN       8-DEC-82         91    006011
	  115  ZRP1C0.BIC       8-DEC-82         29    006051
	  116  ZRP2B0.BIN       8-DEC-82         11    006177
	  117  ZRPAD1.BIN       8-DEC-82         13    006245
	  118  ZRPBE0.BIN       8-DEC-82         25    006262
	  119  ZRPCD0.BIC       8-DEC-82          7    006266
	  120  ZRPDB0.BIN       8-DEC-82          8    006272
	  121  ZRPEA0.BIN       8-DEC-82          9    006331
	  122  ZRPFB0.BIC       8-DEC-82         17    006342
	  123  ZRPGB0.BIC       8-DEC-82          7    006346
	  124  ZRPHA0.BIN       8-DEC-82          8    006406
	  125  ZRPWC0.BIC       8-DEC-82         27    006411
	  126  ZRPYD1.BIC       8-DEC-82         37    006456
	  127  ZRPZC0.BIC       8-DEC-82         21    006457
	  128  ZRTAC0.BIC       8-DEC-82          8    006467
	  129  ZRXAF0.BIC       8-DEC-82         17    006537
	  130  ZRXBF0.BIC       8-DEC-82         16    006620
	  131  ZRXCA0.BIN       8-DEC-82          7    006630
	  132  ZRXDC0.BIC       8-DEC-82         30    006664
	  133  ZRXEA2.BIC       8-DEC-82         17    006673
	  134  ZRXFB0.BIC       8-DEC-82         31    006720
	  135  ZTEAC1.BIC       8-DEC-82         26    006740
	  136  ZTEBB0.BIC       8-DEC-82         17    006747
	  137  ZTECC1.BIN       8-DEC-82         18    007020
	  138  ZTEDC0.BIC       8-DEC-82         27    007074
	  139  ZTEEC0.BIN       8-DEC-82         15    007112
	  140  ZTEFB0.BIN       8-DEC-82          6    007142
	  141  ZTMAI0.BIC       8-DEC-82         16    007152
	  142  ZTMBF0.BIC       8-DEC-82         13    007153
	  143  ZTMCD0.BIC       8-DEC-82         12    007200
	  144  ZTMDE0.BIN       8-DEC-82         10    007225
	  145  ZTMEE0.BIC       8-DEC-82         11    007254
	  146  ZTMFF0.BIC       8-DEC-82          8    007272
	  147  ZTMGC0.BIN       8-DEC-82          4    007274
	  148  ZTMHF0.BIC       8-DEC-82         27    007303
	  149  ZTRAC0.BIC       8-DEC-82         24    007307
	  150  ZTRBD0.BIC       8-DEC-82          3    007320
	  151  ZTSEB0.BIC       8-DEC-82         11    007337
	  152  ZTSFD0.BIC       8-DEC-82          8    007342
	  153  ZTSGB0.BIN       8-DEC-82          4    007343
	  154  ZTSHC0.BIC       8-DEC-82         21    007367
	  155  ZTSIB0.BIC       8-DEC-82         28    007412
	  156  ZTUAI0.BIN       8-DEC-82         23    007426
	  157  ZTUBG1.BIC       8-DEC-82         18    007477
	  158  ZTUCF2.BIC       8-DEC-82         32    007512
	  159  ZTUDD0.BIN       8-DEC-82         15    007540
	  160  ZTUED0.BIN       8-DEC-82          6    007611
	  161  ZTUFA0.BIN       8-DEC-82          4    007626
	  162  ZTUGC1.BIC       8-DEC-82         15    007631
	  163  ZTUIA0.BIN       8-DEC-82         29    007647
	  164  ZTUJA0.BIN       8-DEC-82         17    007652
	  165  ZTUKA0.BIN       8-DEC-82         31    007653
	  166  ZTULA0.BIN       8-DEC-82         14    007744
	  167  ZTUMA0.BIN       8-DEC-82          4    007752
	  168  ZTUNA0.BIN       8-DEC-82          4    007776
	  169  ZTUOB0.BIC       8-DEC-82         25    007777
	  170  ZTUPB0.BIC       8-DEC-82         16    010022
	  171  ZTUQB0.BIC       8-DEC-82         17    010052
	  172  ZTURB0.BIC       8-DEC-82         23    010070
	  173  ZTUSB0.BIN       8-DEC-82         14    010106
	  174  ZTUTA0.BIN       8-DEC-82          6    010142
	  175  ZTUUD0.BIN       8-DEC-82         22    010174
	  176  ZUDAD0.BIN       8-DEC-82         19    010177
	  177  ZUDBB0.BIC       8-DEC-82         11    010200
	  178  ZUDGA0.PAK       8-DEC-82         95    010214
	  179  ZUAAB0.BIN       8-DEC-83         65    010253
	  180  ZUABB0.BIN       8-DEC-83         60    010267
	  181  ZUACA0.BIN       8-DEC-83         37    010336
	  183  ZDMBD0.BIC      17-JUN-82         13    010477
	  184  ZDMCC0.BIC      17-JUN-82         31    010600
	  185  ZDMED0.BIC      17-JUN-82         27    010627
	  186  ZDMFC0.BIC      17-JUN-82         31    010743
	  187  ZDMGD0.BIC      17-JUN-82         24    010760
	  188  ZDMHC0.BIC      17-JUN-82         18    011033
	  189  ZDMID1.BIC      17-JUN-82         26    011036
	  190  ZDMOA0.BIN      17-JUN-82          7    011147
	  191  ZDMPC0.BIC      17-JUN-82         28    011150
