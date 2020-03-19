---
layout: page
title: "RL02K XXDP+ Diagnostics Disk"
permalink: /software/dec/pdp11/disks/rl02k/xxdp/
redirect_from: /disks/dec/rl02k/xxdp/
---

### Boot

To boot the RL02K "XXDP+ Diagnostics" disk, start a [PDP-11/70](/machines/dec/pdp11/1170/panel/debugger/) with an
[RL11 Disk Controller](/configs/pdp11/rl11/), select the "XXDP+ Diagnostics" disk from the list of disks
available for drive "RL0", click **Load**, and wait for the message:

	Mounted disk "XXDP+ Diagnostics" in drive RL0

Then start the machine (click **Run**) and make sure the following prompt has been displayed:

	PDP-11 MONITOR V1.0
	
	BOOT>

At the prompt, type "BOOT RL0".  The following text should appear:

	CHMDLD0 XXDP+ DL MONITOR
	BOOTED VIA UNIT 0
	28K UNIBUS SYSTEM
	
	ENTER DATE (DD-MMM-YY):
	
	RESTART ADDR: 152010
	THIS IS XXDP+.  TYPE "H" OR "H/L" FOR HELP.
	
	.

NOTE: In theory, any RL11 disk drive (RL0-RL3) could be used.  However, the boot code on the disk appears to assume
drive 0, so RL0 should be selected.

PDPjs has been tested with the following diagnostics:

- [EKBAD0: 11/70 CPU DIAGNOSTIC (PART 1)](ekbad0/)
- [EKBBF0: 11/70 CPU DIAGNOSTIC (PART 2)](ekbbf0/)
- [EKBEE1: 11/70 MEMORY MANAGEMENT DIAGNOSTIC](ekbee1/)

If you want to run these or any other diagnostic, try this [PDP-11/70 Test Machine](/machines/dec/pdp11/1170/panel/debugger/xxdp/).

### Help

The "H" (HELP) command displays the following information:

	       Monitor Commands
	       ----------------
	
	          R              run a program
	          L              load a program
	          S              start a program
	          C              run a batch job (chain)
	          D              list directory of load medium
	          F              set the terminal fill count
	          E              enable alternate system device
	          H              type help information
	
	
	       DRS Commands
	       ------------
	               Execution
	               ---------
	          START          start the diagnostic and initialize
	          RESTART        start diagnostic and do not initialize
	          CONTINUE       continue   diagnostic   at   test   that    was
	                         interrupted by a ^C
	          PROCEED        continue from an error halt
	
	               Units Under Test
	               ----------------
	          ADD            activate a unit for testing
	          DROP           deactivate a unit
	          DISPLAY        print a list of device information
	
	               Flags
	               -----
	          FLAGS          print status of all flags
	          ZFLAGS         reset all flags
	
	               Statistics
	               ----------
	          PRINT          print statistical information
	
	               Exitting
	               --------
	          EXIT           return to XXDP+ runtime monitor
	
	
	       DRS Command Switches
	       --------------------
	          /TESTS:test-list    execute only the tests specified
	          /PASS:ddddd         execute ddddd passes (ddddd = 1 to 64000)
	          /FLAGS:flag-list    set specified flags
	          /EOP:ddddd          report end-of-pass after each ddddd passes
	                              (ddddd = 1 to 64000)
	          /UNITS:unit-list    command will affect only specified units
	
	
	       DRS Flags
	       ---------
	
	          Flag      Effect
	          ----      ------
	          HOE       halt on error  -  control  is  returned  to  runtime
	                    services command mode
	          LOE       loop on error
	          IER       inhibit all error reports
	          IBE       inhibit all error reports except first level  (first
	                    level  contains  error  type,  number,  PC, test and
	                    unit)
	          IXE       inhibit extended  error  reports  (those  called  by
	                    PRINTX macro's)
	          PRI       direct messages to line printer
	          PNT       print test number as test executes
	          BOE       "bell" on error
	          UAM       unattended mode (no manual intervention)
	          ISR       inhibit  statistical  reports  (does  not  apply  to
	                    diagnostics   which   do   not  support  statistical
	                    reporting)
	          IDR       inhibit program dropping of units
	          ADR       execute autodrop code
	          LOT       loop on test
	          EVL       execute  evaluation  (on  diagnostics   which   have
	                    evaluation support)
	
	
	       UPD1 Commands
	       -------------
	          CLR       clear UPD1 program buffer
	          LOAD      load a program
	          MOD       modify file image in memory
	          XFR       set transfer address
	          HICORE    set upper memory limit for dump
	          LOCORE    set lower memory limit for dump
	          DUMP      dump a program image
	          DEL       delete a file
	          BOOT      bootstrap a device
	
	
	       UPD2 Commands
	       -------------
	          File Manipulation
	          -----------------
	          DIR       give directory of specified medium
	          PIP       transfer a file or files
	          FILE      transfer a file or files
	          DEL       delete a file or files
	          REN       rename a file
	
	          File Modification
	          -----------------
	          CLR       clear UPD2 program buffer
	          LOAD      load a program
	          MOD       modify file image in memory
	          XFR       set transfer address
	          HICORE    set upper memory limit for dump
	          LOCORE    set lower memory limit for dump
	          DUMP      dump a program image
	
	          New Medium Creation
	          -------------------
	          ZERO      initialize a medium
	          SAVM      save a monitor on a disk
	          SAVE      save a monitor on a tape
	          COPY      copy entire medium
	
	          Miscellaneous
	          -------------
	          ASG       assign a logical name to a device
	          DO        execute an indirect command file
	          READ      read a file to check validity
	          EOT       write end-of-tape mark
	          DRIVER    load a device driver
	
	          Returning to Monitor
	          --------------------
	          BOOT      bootstrap a device
	          EXIT      return control to the runtime monitor
	
	          Printing
	          --------
	          PRINT     print a file on the line printer
	          TYPE      type a file on the console terminal
	
	
	       PATCH Commands
	       --------------
	          BOOT           Boot specified device
	          CLEAR          Clear input table
	          EXIT           Return to XXDP+ monitor
	          GETM           Load DEC/X11 MAP file
	          GETP           Load saved input table
	          KILL           Delete address from input table
	          MOD            Enter address in input table
	          PATCH          Crreate patched file
	          SAVP           Save input table
	          TYPE           Print input table on terminal
	
	
	       XTECO Non-edit Commands
	       -----------------------
	          TEXT - create new text file
	          TECO - modify a file on disk
	          EDIT - modify a file
	          TYPE - type a file on the console terminal
	          PRINT - print a file on the line printer
	          DIR - list directory of specified medium
	          EXIT - return to monitor
	
	
	       XTECO Edit Commands
	       -------------------
	
	          Pointer Location
	          ----------------
	          L - move the pointer line by line
	          C - move the pointer character by character
	          J - move the pointer to the beginning of text
	          ZJ - move the pointer to the end of text
	
	          Search
	          ------
	          S - search for specified string in text now in memory
	          N - search for specified string in remainder of text file
	
	          Modify/Display Text
	          -------------------
	          T - type text
	          D - delete character(s)
	          K - delete line(s)
	          I - insert text
	          A - append text to that currently in memory
	
	          Terminating Edit Mode
	          ---------------------
	          EX - exit edit mode
	<FF>

### Directory

The "D" (DIRECTORY) command displays the following information:

	ENTRY# FILNAM.EXT        DATE          LENGTH  START
	
	    1  MMDP  .SAV       3-MAR-83C        17    000310
	    2  MTDP  .SAV       3-MAR-83C        17    000331
	    3  HSAAD0.SYS       3-MAR-83         24    000352
	    4  HSABC0.SYS       3-MAR-83         28    000402
	    5  HSACC0.SYS       3-MAR-83         27    000436
	    6  HSADB0.SYS       3-MAR-83         25    000471
	    7  HUDIB0.SYS       3-MAR-83          5    000522
	    8  HELP  .TXT       3-MAR-83         14    000527
	    9  HDMMB0.SYS       3-MAR-83          3    000545
	   10  HDMTB0.SYS       3-MAR-83          3    000550
	   11  HDDBB0.SYS       3-MAR-83          2    000553
	   12  HDDDC0.SYS       3-MAR-83          3    000555
	   13  HDDKB0.SYS       3-MAR-83          2    000560
	   14  HDDLC0.SYS       3-MAR-83          4    000562
	   15  HDDMB0.SYS       3-MAR-83          4    000566
	   16  HDDUA0.SYS       3-MAR-83          3    000572
	   17  HDDPB0.SYS       3-MAR-83          2    000575
	   18  HDDRB0.SYS       3-MAR-83          3    000577
	   19  HDDSB0.SYS       3-MAR-83          2    000602
	   20  HDDTB0.SYS       3-MAR-83          2    000604
	   21  HDDXB0.SYS       3-MAR-83          3    000606
	   22  HDDYB0.SYS       3-MAR-83          3    000611
	   23  HDKBB0.SYS       3-MAR-83          1    000614
	   24  HDLPA0.SYS       3-MAR-83          1    000615
	   25  HDMSB0.SYS       3-MAR-83          3    000616
	   26  HDPDB0.SYS       3-MAR-83          3    000621
	   27  HDPPB0.SYS       3-MAR-83          1    000624
	   28  HDPRB0.SYS       3-MAR-83          1    000625
	   29  HDPTB0.SYS       3-MAR-83          1    000626
	   30  HDTRA0.SYS       3-MAR-83          2    000627
	   31  HMDBC0.SYS       3-MAR-83         12    000631
	   32  HMDDC0.SYS       3-MAR-83         13    000645
	   33  HMDKC0.SYS       3-MAR-83         12    000662
	   34  HMDLD0.SYS       3-MAR-83         13    000676
	   35  HMDMC0.SYS       3-MAR-83         12    000713
	   36  HMDPC0.SYS       3-MAR-83         11    000727
	   37  HMDRC0.SYS       3-MAR-83         12    000742
	   38  HMDSC0.SYS       3-MAR-83         12    000756
	   39  HMDTC0.SYS       3-MAR-83         12    000772
	   40  HMDUA0.SYS       3-MAR-83         12    001006
	   41  HMDXC0.SYS       3-MAR-83         12    001022
	   42  HMDYC0.SYS       3-MAR-83         12    001036
	   43  HMMMC0.SYS       3-MAR-83         12    001052
	   44  HMMSC0.SYS       3-MAR-83         13    001066
	   45  HMMTC0.SYS       3-MAR-83         12    001103
	   46  HMPDB1.SYS       3-MAR-83         17    001117
	   47  HMTRB0.SYS       3-MAR-83         12    001140
	   48  UPD1  .BIN       3-MAR-83         12    001154
	   49  UPD2  .BIN       3-MAR-83         25    001170
	   50  XTECO .BIN       3-MAR-83         16    001221
	   51  DXCL  .BIN       3-MAR-83         25    001241
	   52  SETUP .BIN       3-MAR-83         26    001272
	   53  PATCH .BIN       3-MAR-83         22    001324
	   54  XMOND0.LIB       3-MAR-83        179    001352
	   55  BKDMD0.BIC       3-MAR-83         13    001635
	   56  BKEAB0.BIC       3-MAR-83         16    001652
	   57  BKEBA0.BIC       3-MAR-83         17    001672
	   58  BKMAA0.BIN       3-MAR-83          1    001713
	   59  BKTAD1.BIC       5-AUG-83         17    001714
	   60  BKTBB0.BIC       3-MAR-83          8    001735
	   61  BKTCB0.BIC       3-MAR-83          9    001745
	   62  BKTDC0.BIC       3-MAR-83          7    001756
	   63  BKTFD0.BIC       3-MAR-83         16    001765
	   64  BKTGD1.BIC       3-MAR-83         17    002005
	   65  BQEAC1.BIC       3-MAR-83         57    002026
	   66  BVTAD0.BIN       3-MAR-83         22    002117
	   67  CFPAB0.BIC       3-MAR-83         13    002145
	   68  CFPBB0.BIC       3-MAR-83         15    002162
	   69  CFPCB0.BIC       3-MAR-83         15    002201
	   70  CFPDC0.BIC       3-MAR-83         17    002220
	   71  CFPEB0.BIC       3-MAR-83         16    002241
	   72  CFPFB0.BIC       3-MAR-83         12    002261
	   73  CFPGC0.BIC       3-MAR-83         11    002275
	   74  CFPHB0.BIC       3-MAR-83         16    002310
	   75  CFPIB0.BIC       3-MAR-83         16    002330
	   76  CFPJB0.BIC       3-MAR-83         16    002350
	   77  CFPKB0.BIC       3-MAR-83         10    002370
	   78  CFPLB0.BIC       3-MAR-83         15    002402
	   79  CFPMB0.BIC       3-MAR-83          7    002421
	   80  CFPOD0.BIC       3-MAR-83         12    002430
	   81  CFPRC0.BIC       3-MAR-83          7    002444
	   82  CFPSD0.BIC       3-MAR-83         17    002453
	   83  CFPTE0.BIC       3-MAR-83         17    002474
	   84  CFPUD0.BIC       3-MAR-83         17    002515
	   85  CKBAB0.BIC       3-MAR-83          4    002536
	   86  CKBBB0.BIC       3-MAR-83          4    002542
	   87  CKBCC0.BIC       3-MAR-83          8    002546
	   88  CKBDC0.BIC       3-MAR-83          8    002556
	   89  CKBEC0.BIC       3-MAR-83          3    002566
	   90  CKBIB0.BIC       3-MAR-83         13    002571
	   91  CKBCB0.PAT       9-AUG-83          1    002606
	   92  CMSBB0.BIN       3-MAR-83         10    002607
	   93  EFPAA0.BIC       3-MAR-83         59    002621
	   94  EFPBA1.BIC       3-MAR-83         46    002714
	   95  EKBAD0.BIC       3-MAR-83         11    002772
	   96  EKBBF0.BIC       3-MAR-83         61    003005
	   97  EKBCD1.BIC       3-MAR-83         44    003102
	   98  EKBDE0.BIC       3-MAR-83         78    003156
	   99  EKBEE1.BIC       3-MAR-83         61    003274
	  100  EKBFD1.BIC       3-MAR-83         31    003371
	  101  EKBGC0.BIC       3-MAR-83         27    003430
	  102  EMJAD0.BIC       3-MAR-83          9    003463
	  103  EMKAB0.BIC       3-MAR-83         81    003474
	  104  EQKCE1.BIC       3-MAR-83         58    003615
	  105  ERHAE1.BIC       3-MAR-83         54    003707
	  106  ERSAA0.BIC       3-MAR-83         22    003775
	  107  ERSBC0.BIC       3-MAR-83         18    004023
	  108  ERSCB0.BIC       3-MAR-83         26    004045
	  109  ERSDD0.BIN       3-MAR-83         24    004077
	  110  FFPAA1.BIN       3-MAR-83         60    004127
	  111  FFPBA0.BIN       3-MAR-83         59    004223
	  112  FFPCB0.BIC       3-MAR-83         59    004316
	  113  FKAAC0.BIC       3-MAR-83         24    004411
	  114  FKABD1.BIC      27-OCT-83         15    004441
	  115  FKACA0.BIC       3-MAR-83         16    004460
	  116  FKKAB0.BIN       3-MAR-83         37    004500
	  117  FKTGC0.BIC       3-MAR-83         17    004545
	  118  FKTHB0.BIC       3-MAR-83         44    004566
	  119  GKAAA0.BIC       3-MAR-83         14    004642
	  120  GKABC0.BIC       3-MAR-83         15    004660
	  121  XXBLD .CCC       3-MAR-83         23    004677
	  122  JDLAA0.BIC       3-MAR-83         19    004726
	  123  JFPAA1.BIC       3-MAR-83         50    004751
	  124  JFPBA0.BIC       3-MAR-83         39    005033
	  125  JKDAD1.BIC       3-MAR-83         28    005102
	  126  JKDBD0.BIC       3-MAR-83         52    005136
	  127  JKDCB0.BIC       3-MAR-83         52    005222
	  128  JKDDB0.BIC       3-MAR-83         32    005306
	  129  JKDEB0.BIN       3-MAR-83         90    005346
	  130  JKDFA0.BIC       3-MAR-83         25    005500
	  131  JKDHA0.BIC       3-MAR-83         54    005531
	  132  JKDIA0.BIC       3-MAR-83         23    005617
	  133  JKDJB0.BIN       3-MAR-83         93    005646
	  134  KFPAD0.BIC       3-MAR-83         62    006003
	  135  KFPBC0.BIC       3-MAR-83         60    006101
	  136  KFPCD0.BIC       3-MAR-83         64    006175
	  137  KKAAB0.BIC       3-MAR-83         36    006275
	  138  KKABD0.BIC       3-MAR-83         21    006341
	  139  KKACC0.BIC       3-MAR-83          9    006366
	  140  KKKAC0.BIC       3-MAR-83         42    006377
	  141  KKTAB1.BIC       3-MAR-83         27    006451
	  142  KKTBD0.BIC       3-MAR-83         30    006504
	  143  KKUAE0.BIC       3-MAR-83         28    006542
	  144  NKXAA0.BIC       3-MAR-83         24    006576
	  145  RDTAB0.BIC       3-MAR-83         31    006626
	  146  RIIAB0.BIC       3-MAR-83         35    006665
	  147  RLPAB0.BIN       3-MAR-83         48    006730
	  148  RLPBB0.BIN       3-MAR-83         19    007010
	  149  RLPFC0.BIN       3-MAR-83         20    007033
	  150  RLPGC0.BIN       3-MAR-83         28    007057
	  151  RLPKC0.BIN       3-MAR-83         19    007113
	  152  RLPLA0.BIC       3-MAR-83         32    007136
	  153  RLPMB0.BIN       3-MAR-83         24    007176
	  154  RLPNA1.BIC       3-MAR-83         26    007226
	  155  TDHAB0.MPG       3-MAR-83          8    007260
	  156  TDJAB0.MPG       3-MAR-83          6    007270
	  157  TDLAB0.MPG       3-MAR-83          6    007276
	  158  TDQAB0.MPG       3-MAR-83          8    007304
	  159  TDUAA0.MPG       3-MAR-83          8    007314
	  160  TCMPG .BIN       3-MAR-83         16    007324
	  161  RKMPG .BIN       3-MAR-83         16    007344
	  162  TMMPG .BIN       3-MAR-83         15    007364
	  163  THMPG .BIN       3-MAR-83         15    007403
	  164  RXMPG .BIN       3-MAR-83         17    007422
	  165  RBMPG .BIN       3-MAR-83         16    007443
	  166  TLPAB0.MPG       3-MAR-83          5    007463
	  167  TMGAC0.MPG       3-MAR-83         39    007470
	  168  TMMAB0.MPG       3-MAR-83         54    007537
	  169  TMSAA0.MPG       3-MAR-83          2    007625
	  170  TPCAB0.MPG       3-MAR-83          5    007627
	  171  TR3AA0.MPG       3-MAR-83          8    007634
	  172  TR6AA0.MPG       3-MAR-83         15    007644
	  173  TRKAB0.MPG       3-MAR-83          6    007663
	  174  TRPAB0.MPG       3-MAR-83         13    007671
	  175  TRSAA0.MPG       3-MAR-83          9    007706
	  176  TTCAB0.MPG       3-MAR-83          6    007717
	  177  TTMAB0.MPG       3-MAR-83          6    007725
	  178  TVDAB0.MPG       3-MAR-83          1    007733
	  179  VAAAA1.BIC       3-MAR-83         13    007734
	  180  VADAC0.BIC       3-MAR-83         16    007751
	  181  VAXAA0.BIC       3-MAR-83         16    007771
	  182  VCDAB0.BIC       3-MAR-83         16    010011
	  183  VCDBB0.BIC       3-MAR-83         31    010031
	  184  VCDCB0.BIC       3-MAR-83         30    010070
	  185  VCDDB0.BIC       3-MAR-83         29    010126
	  186  VCLHC0.BIN       3-MAR-83         34    010163
	  187  VCMAA0.BIC       3-MAR-83         15    010225
	  188  VDLAB0.BIC       3-MAR-83         16    010244
	  189  VDMAA2.BIC       3-MAR-83         31    010264
	  190  VDMBA1.BIC       3-MAR-83         30    010323
	  191  VDMCA2.BIC       3-MAR-83         30    010361
	  192  VDMDA1.BIC       3-MAR-83         27    010417
	  193  VDMEA2.BIC       3-MAR-83         27    010452
	  194  VDPVB1.BIC       3-MAR-83         31    010505
	  195  VDRAB0.BIC       3-MAR-83         14    010544
	  196  VDRBA0.BIN       3-MAR-83          7    010562
	  197  VDRCB0.BIN       3-MAR-83         16    010571
	  198  VDRDB0.BIC       3-MAR-83         15    010611
	  199  VDVAC0.BIC       3-MAR-83         14    010630
	  200  VDVCB0.BIC       3-MAR-83         13    010646
	  201  VDZAC2.BIC      22-AUG-84         17    010663
	  202  VDZBB2.BIC      22-AUG-84         16    010704
	  203  VDZCB1.BIN       3-MAR-83         12    010724
	  204  VDZDA0.BIN       3-MAR-83          4    010740
	  205  VIBAA2.BIC       3-MAR-83         12    010744
	  206  VIBBA1.BIC       3-MAR-83         12    010760
	  207  VKAAC0.BIC       3-MAR-83         16    010774
	  208  VKABB0.BIC       3-MAR-83         16    011014
	  209  VKACC1.BIC       3-MAR-83         16    011034
	  210  VKADC1.BIC       3-MAR-83         13    011054
	  211  VKAEB3.BIC      22-AUG-84          7    011071
	  212  VKAFE0.BIN       3-MAR-83          5    011100
	  213  VKAHA1.BIC       3-MAR-83         16    011105
	  214  VKAIB0.BIN       3-MAR-83         15    011125
	  215  VKAJB0.BIN       3-MAR-83         16    011144
	  216  VKALA1.BIC       3-MAR-83         12    011164
	  217  VKDAD0.BIN       3-MAR-83         25    011200
	  218  VKDBA0.BIC       3-MAR-83         27    011231
	  219  VKMAA0.BIN       3-MAR-83         19    011264
	  220  VKMBA0.BIN       3-MAR-83         13    011307
	  221  VKMCA0.BIN       3-MAR-83         30    011324
	  222  VKMEA0.BIN       3-MAR-83         17    011362
	  223  VKUAA0.BIN       3-MAR-83         16    011403
	  224  VKWAC0.BIC       3-MAR-83         17    011423
	  225  VM8AE0.BIC       3-MAR-83         14    011444
	  226  VMEMA0.BIC       3-MAR-83         16    011462
	  227  VMNAC1.BIC       3-MAR-83         48    011502
	  228  VMNBB0.BIC       3-MAR-83         18    011562
	  229  VMNCB1.BIC       3-MAR-83         21    011604
	  230  VMNDA1.BIC       3-MAR-83         17    011631
	  231  VMNEA1.BIC       3-MAR-83         14    011652
	  232  VMNFC0.BIC       3-MAR-83          9    011670
	  233  VMNGA0.BIC       3-MAR-83          3    011701
	  234  VMSAA0.BIC       3-MAR-83         24    011704
	  235  VMXAA0.BIC       3-MAR-83         15    011734
	  236  VPCAG0.BIC       3-MAR-83         85    011753
	  237  VRLAC0.BIN       3-MAR-83         24    012100
	  238  VRLBA0.BIC       3-MAR-83         28    012130
	  239  VTSAA0.BIC       3-MAR-83         36    012164
	  240  VTSBA0.BIC       3-MAR-83         61    012230
	  241  VTSCA0.BIC       3-MAR-83         73    012325
	  242  VTSDA0.BIC       3-MAR-83         68    012436
	  243  VTSEA0.BIC       3-MAR-83         23    012542
	  244  VVSAB0.BIC       3-MAR-83         76    012571
	  245  VVTAA1.BIN       3-MAR-83         18    012705
	  246  VVTBA0.BIN       3-MAR-83         20    012727
	  247  VVTCA0.BIN       3-MAR-83         19    012753
	  248  XAAAD0.OBJ       3-MAR-83          3    012776
	  249  XAABB0.OBJ       3-MAR-83          4    013001
	  250  XAACB0.OBJ       3-MAR-83          4    013005
	  251  XADAE0.OBJ       3-MAR-83          3    013011
	  252  XADBB0.OBJ       3-MAR-83          8    013014
	  253  XADCB0.OBJ       3-MAR-83          8    013024
	  254  XAFAE0.OBJ       3-MAR-83          3    013034
	  255  XARAB0.OBJ       3-MAR-83         10    013037
	  256  XBBAB0.OBJ       3-MAR-83          4    013051
	  257  XBEAB0.OBJ       3-MAR-83         10    013055
	  258  XBMCN0.OBJ       3-MAR-83          5    013067
	  259  XBMDE0.OBJ       3-MAR-83          3    013074
	  260  XBMEB0.OBJ       3-MAR-83          4    013077
	  261  XBMFB0.OBJ       3-MAR-83          3    013103
	  262  XBMGB0.OBJ       3-MAR-83          4    013106
	  263  XBMHB0.OBJ       3-MAR-83          3    013112
	  264  XBMIA0.OBJ       3-MAR-83          4    013115
	  265  XBTAB0.OBJ       3-MAR-83          3    013121
	  266  XBTBB0.OBJ       3-MAR-83          3    013124
	  267  XBTCA0.OBJ       3-MAR-83          8    013127
	  268  XCBAE0.OBJ       3-MAR-83          3    013137
	  269  XCBBE0.OBJ       3-MAR-83          2    013142
	  270  XCBCF0.OBJ       3-MAR-83          4    013144
	  271  XCDAG0.OBJ       3-MAR-83          4    013150
	  272  XCIAA0.OBJ       3-MAR-83          8    013154
	  273  XCMAB0.OBJ       3-MAR-83          3    013164
	  274  XCMJA0.OBJ       3-MAR-83          4    013167
	  275  XCPAG0.OBJ       3-MAR-83          5    013173
	  276  XCPBJ0.OBJ       3-MAR-83          5    013200
	  277  XCRAG0.OBJ       3-MAR-83          3    013205
	  278  XCSTA0.OBJ       3-MAR-83          3    013210
	  279  XDCAG0.OBJ       3-MAR-83          7    013213
	  280  XDHAL0.OBJ       3-MAR-83          7    013222
	  281  XDJAL0.OBJ       3-MAR-83          7    013231
	  282  XDLAJ0.OBJ       3-MAR-83          6    013240
	  283  XDLBB0.OBJ       3-MAR-83         10    013246
	  284  XDMBI0.OBJ       3-MAR-83          4    013260
	  285  XDMCB0.OBJ       3-MAR-83          8    013264
	  286  XDMDC0.OBJ       3-MAR-83         14    013274
	  287  XDMEB0.OBJ       3-MAR-83         12    013312
	  288  XDMRB0.OBJ       3-MAR-83          9    013326
	  289  XDMSA0.OBJ       3-MAR-83          3    013337
	  290  XDNAH0.OBJ       3-MAR-83          3    013342
	  291  XDPAE0.OBJ       3-MAR-83          6    013345
	  292  XDPBB0.OBJ       3-MAR-83          6    013353
	  293  XDPVA0.OBJ       3-MAR-83          4    013361
	  294  XDQAI0.OBJ       3-MAR-83          7    013365
	  295  XDRAD0.OBJ       3-MAR-83          3    013374
	  296  XDRBI0.OBJ       3-MAR-83          2    013377
	  297  XDRCI0.OBJ       3-MAR-83          3    013401
	  298  XDRDC0.OBJ       3-MAR-83          3    013404
	  299  XDREC0.OBJ       3-MAR-83          8    013407
	  300  XDRFD0.OBJ       3-MAR-83          8    013417
	  301  XDRJA0.OBJ       3-MAR-83          4    013427
	  302  XDRKA0.OBJ       3-MAR-83          4    013433
	  303  XDRWC0.OBJ       3-MAR-83          2    013437
	  304  XDTAD0.OBJ       3-MAR-83          7    013441
	  305  XDUAI0.OBJ       3-MAR-83          7    013450
	  306  XDUBC0.OBJ       3-MAR-83         12    013457
	  307  XDVAB0.OBJ       3-MAR-83         18    013473
	  308  XDXAG0.OBJ       3-MAR-83          3    013515
	  309  XDZAE0.OBJ       3-MAR-83          5    013520
	  310  XDZBC0.OBJ       3-MAR-83          7    013525
	  311  XFPAG0.OBJ       3-MAR-83          4    013534
	  312  XFPBE0.OBJ       3-MAR-83          9    013540
	  313  XGTAE0.OBJ       3-MAR-83          7    013551
	  314  XIBAD0.OBJ       3-MAR-83          4    013560
	  315  XICAD0.OBJ       3-MAR-83          2    013564
	  316  XICBC0.OBJ       3-MAR-83          6    013566
	  317  XIEAA0.OBJ       3-MAR-83          3    013574
	  318  XKEAD0.OBJ       3-MAR-83          3    013577
	  319  XKGAD0.OBJ       3-MAR-83          3    013602
	  320  XKLAE0.OBJ       3-MAR-83          6    013605
	  321  XKMAA0.OBJ       3-MAR-83         12    013613
	  322  XKMCB0.OBJ       3-MAR-83         12    013627
	  323  XKMDA0.OBJ       3-MAR-83          4    013643
	  324  XKUAB0.OBJ       3-MAR-83          8    013647
	  325  XKWAG0.OBJ       3-MAR-83          4    013657
	  326  XKWBK0.OBJ       3-MAR-83          4    013663
	  327  XKWCB0.OBJ       3-MAR-83          3    013667
	  328  XKWDB0.OBJ       3-MAR-83          8    013672
	  329  XKWEB0.OBJ       3-MAR-83          5    013702
	  330  XKWFB0.OBJ       3-MAR-83          4    013707
	  331  XKWGA0.OBJ       3-MAR-83          4    013713
	  332  XLKAB0.OBJ       3-MAR-83          7    013717
	  333  XLPAF0.OBJ       3-MAR-83          4    013726
	  334  XLPBF0.OBJ       3-MAR-83          3    013732
	  335  XLPCE0.OBJ       3-MAR-83          4    013735
	  336  XLPDF0.OBJ       3-MAR-83          6    013741
	  337  XLPED0.OBJ       3-MAR-83          5    013747
	  338  XLPFB0.OBJ       3-MAR-83          5    013754
	  339  XLPHC0.OBJ       3-MAR-83         27    013761
	  340  XMLAA0.OBJ       3-MAR-83          8    014014
	  341  XMNAA0.OBJ       3-MAR-83          8    014024
	  342  XMNBA0.OBJ       3-MAR-83         13    014034
	  343  XMNCA0.OBJ       3-MAR-83          5    014051
	  344  XMNDA0.OBJ       3-MAR-83          4    014056
	  345  XMNEA0.OBJ       3-MAR-83          4    014062
	  346  XNCAD0.OBJ       3-MAR-83          5    014066
	  347  XNCBA0.OBJ       3-MAR-83          9    014073
	  348  XPAAF0.OBJ       3-MAR-83          4    014104
	  349  XPABG0.OBJ       3-MAR-83          3    014110
	  350  XPCCE0.OBJ       3-MAR-83          2    014113
	  351  XPCSB0.OBJ       3-MAR-83          7    014115
	  352  XPLAB0.OBJ       3-MAR-83          7    014124
	  353  XRCAD0.OBJ       3-MAR-83          5    014133
	  354  XRFAG0.OBJ       3-MAR-83          6    014140
	  355  XRHAA0.OBJ       3-MAR-83          3    014146
	  356  XRKAG0.OBJ       3-MAR-83          7    014151
	  357  XRKBG0.OBJ       3-MAR-83         12    014160
	  358  XRLAG0.OBJ       3-MAR-83          8    014174
	  359  XRMAD0.OBJ       3-MAR-83         12    014204
	  360  XRMBC0.OBJ       3-MAR-83         12    014220
	  361  XRMCA0.OBJ       3-MAR-83         10    014234
	  362  XRMDB0.OBJ       3-MAR-83         19    014246
	  363  XRNAA0.OBJ       3-MAR-83         11    014271
	  364  XRPAM0.OBJ       3-MAR-83          8    014304
	  365  XRPBI0.OBJ       3-MAR-83         10    014314
	  366  XRPDD0.OBJ       3-MAR-83         16    014326
	  367  XRSAJ0.OBJ       3-MAR-83          7    014346
	  368  XRXAE0.OBJ       3-MAR-83          8    014355
	  369  XRXBC0.OBJ       3-MAR-83         13    014365
	  370  XTAAD0.OBJ       3-MAR-83          4    014402
	  371  XTCAG0.OBJ       3-MAR-83          6    014406
	  372  XTMAJ0.OBJ       3-MAR-83          6    014414
	  373  XTMBL0.OBJ       3-MAR-83         11    014422
	  374  XTMDA0.OBJ       3-MAR-83         18    014435
	  375  XTRAD0.OBJ       3-MAR-83          7    014457
	  376  XTSAA0.OBJ       3-MAR-83         10    014466
	  377  XTUAB0.OBJ       3-MAR-83         10    014500
	  378  XUACA0.OBJ       3-MAR-83         10    014512
	  379  XUDAD0.OBJ       3-MAR-83          3    014524
	  380  XVSAC0.OBJ       3-MAR-83         11    014527
	  381  XVSBB0.OBJ       3-MAR-83          8    014542
	  382  XVSCB0.OBJ       3-MAR-83         15    014552
	  383  XVTAB0.OBJ       3-MAR-83          7    014571
	  384  XVTBB0.OBJ       3-MAR-83          8    014600
	  385  XVTCA0.OBJ       3-MAR-83          8    014610
	  386  XVTVA0.OBJ       3-MAR-83          6    014620
	  387  XXYAD0.OBJ       3-MAR-83          4    014626
	  388  XXYBA0.OBJ       3-MAR-83          3    014632
	  389  ZAACB0.BIC       3-MAR-83         21    014635
	  390  ZADLB3.BIC       3-MAR-83         16    014662
	  391  ZAFAC0.BIC       3-MAR-83         15    014702
	  392  ZBMAE0.BIC       3-MAR-83          6    014721
	  393  ZBMDJ0.BIC       3-MAR-83         19    014727
	  394  ZCDAD0.BIN       3-MAR-83         15    014752
	  395  ZCDBB0.BIN       3-MAR-83         39    014771
	  396  ZCLKC0.BIN       3-MAR-83         33    015040
	  397  ZCLMB0.BIN       3-MAR-83         42    015101
	  398  ZCMBB1.BIN       3-MAR-83         14    015153
	  399  ZCMJB1.BIN       3-MAR-83         23    015171
	  400  ZCTAA0.BIN       3-MAR-83         17    015220
	  401  ZCTBA0.BIN       3-MAR-83         18    015241
	  402  ZDAVA0.BIN       3-MAR-83         10    015263
	  403  ZDCAD0.BIN       3-MAR-83         15    015275
	  404  ZDCBB0.BIN       3-MAR-83         14    015314
	  405  ZDCLA0.BIN       3-MAR-83         34    015332
	  406  ZDCOC0.BIN       3-MAR-83          4    015374
	  407  ZDFAC0.BIN       3-MAR-83         13    015400
	  408  ZDHAC0.BIC       3-MAR-83         18    015415
	  409  ZDHBB1.BIN       3-MAR-83         11    015437
	  410  ZDHCB1.BIC       3-MAR-83         16    015452
	  411  ZDHDC1.BIN       3-MAR-83         13    015472
	  412  ZDHEB1.BIC       3-MAR-83         15    015507
	  413  ZDHFB1.BIC       3-MAR-83         17    015526
	  414  ZDHGB0.BIC       3-MAR-83         12    015547
	  415  ZDHHB0.BIC       3-MAR-83         14    015563
	  416  ZDHIC1.BIC       3-MAR-83         12    015601
	  417  ZDHJB0.BIC       3-MAR-83          8    015615
	  418  ZDHKD0.BIC       3-MAR-83         17    015625
	  419  ZDHLC0.BIN       3-MAR-83          4    015646
	  420  ZDHMD2.BIC       3-MAR-83         31    015652
	  421  ZDHND0.BIC       3-MAR-83         29    015711
	  422  ZDJAF0.BIC       3-MAR-83         17    015746
	  423  ZDJBG0.BIC       3-MAR-83         10    015767
	  424  ZDJDB0.BIN       3-MAR-83          4    016001
	  425  ZDLAH0.BIN       3-MAR-83         17    016005
	  426  ZDLBC0.BIN       3-MAR-83         14    016026
	  427  ZDLCD0.BIN       3-MAR-83         18    016044
	  428  ZDLDH0.BIC       3-MAR-83         22    016066
	  429  ZDLOD0.BIN       3-MAR-83          4    016114
	  430  ZDMAD0.BIN       3-MAR-83         17    016120
	  431  ZDMBD0.BIC       3-MAR-83         13    016141
	  432  ZDMCC1.BIC       3-MAR-83         31    016156
	  433  ZDMED0.BIC       3-MAR-83         27    016215
	  434  ZDMFC0.BIC       3-MAR-83         31    016250
	  435  ZDMGD0.BIC       3-MAR-83         24    016307
	  436  ZDMHC0.BIC       3-MAR-83         18    016337
	  437  ZDMID2.BIC       3-MAR-83         31    016361
	  438  ZDMOA0.BIN       3-MAR-83          7    016420
	  439  ZDMPD0.BIC       3-MAR-83         28    016427
	  440  ZDMQE0.BIC       3-MAR-83         23    016463
	  441  ZDMRF0.BIC       3-MAR-83         29    016512
	  442  ZDMSF0.BIC       3-MAR-83         31    016547
	  443  ZDMTD0.BIN       3-MAR-83         27    016606
	  444  ZDNAC0.BIN       3-MAR-83         11    016641
	  445  ZDPAC0.BIC       3-MAR-83         17    016654
	  446  ZDPBC0.BIC       3-MAR-83         25    016675
	  447  ZDPCD0.BIC       3-MAR-83         22    016726
	  448  ZDPDD0.BIN       3-MAR-83         20    016754
	  449  ZDPEB0.BIC       3-MAR-83         10    017000
	  450  ZDPFB0.BIN       3-MAR-83          4    017012
	  451  ZDPOC0.BIN       3-MAR-83          3    017016
	  452  ZDQAD0.BIC       3-MAR-83         17    017021
	  453  ZDQBD0.BIC       3-MAR-83         12    017042
	  454  ZDQCE0.BIC       3-MAR-83         16    017056
	  455  ZDQDE0.BIC       3-MAR-83         17    017076
	  456  ZDQEE0.BIC       3-MAR-83         17    017117
	  457  ZDQFF0.BIC       3-MAR-83         15    017140
	  458  ZDQGB0.BIC       3-MAR-83          6    017157
	  459  ZDQHE0.BIC       3-MAR-83         15    017165
	  460  ZDQOD0.BIN       3-MAR-83          6    017204
	  461  ZDRBG0.BIC       3-MAR-83         12    017212
	  462  ZDRCH1.BIC       3-MAR-83          8    017226
	  463  ZDRGE0.BIC       3-MAR-83         17    017236
	  464  ZDRHA1.BIN       3-MAR-83         16    017257
	  465  ZDRIB0.BIC       3-MAR-83          5    017277
	  466  ZDRKA0.BIN       3-MAR-83         15    017304
	  467  ZDRLD0.BIC       3-MAR-83         41    017323
	  468  ZDTAB0.BIC       3-MAR-83         23    017374
	  469  ZDUAE0.BIC       3-MAR-83         18    017423
	  470  ZDUBD0.BIC       3-MAR-83         18    017445
	  471  ZDUCD0.BIC       3-MAR-83         18    017467
	  472  ZDUDD0.BIC       3-MAR-83         18    017511
	  473  ZDUED0.BIC       3-MAR-83         18    017533
	  474  ZDUFD0.BIC       3-MAR-83         12    017555
	  475  ZDUOB0.BIN       3-MAR-83          4    017571
	  476  ZDUQC0.BIN       3-MAR-83         16    017575
	  477  ZDURB1.BIC       3-MAR-83         16    017615
	  478  ZDUSB1.BIC       3-MAR-83         16    017635
	  479  ZDUTB1.BIC       3-MAR-83         16    017655
	  480  ZDUUB1.BIC       3-MAR-83         16    017675
	  481  ZDUVB1.BIC       3-MAR-83         16    017715
	  482  ZDVAC0.BIC       3-MAR-83         28    017735
	  483  ZDVBC0.BIC       3-MAR-83         21    017771
	  484  ZDVCD0.BIC       3-MAR-83         20    020016
	  485  ZDVDD1.BIC       3-MAR-83         22    020042
	  486  ZDVEC1.BIC       3-MAR-83         20    020070
	  487  ZDVFA0.BIC       3-MAR-83         32    020114
	  488  ZDVOB0.BIC       3-MAR-83          5    020154
	  489  ZDXAD3.BIC       3-MAR-83         32    020161
	  490  ZDXFD0.BIN       3-MAR-83         31    020221
	  491  ZDXGC0.BIN       3-MAR-83         24    020260
	  492  ZDXHD0.BIC       3-MAR-83         19    020310
	  493  ZDXIC0.BIC       3-MAR-83         16    020333
	  494  ZDXJC0.BIC       3-MAR-83         15    020353
	  495  ZDZAG1.BIC      27-OCT-83         27    020372
	  496  ZDZBC0.BIN       3-MAR-83          4    020425
	  497  ZFLAB0.BIN       3-MAR-83          8    020431
	  498  ZICAD0.BIN       3-MAR-83         24    020441
	  499  ZIEAB0.BIN       3-MAR-83         63    020471
	  500  ZIRAA0.BIN       3-MAR-83         29    020570
	  501  ZIRBA1.BIN       3-MAR-83         27    020625
	  502  ZITAD0.BIN       3-MAR-83         10    020660
	  503  CMFAF0.PAT       9-AUG-83          1    020672
	  504  CQKCG1.PAT       9-AUG-83          1    020673
	  505  EQKCE1.PAT       9-AUG-83          1    020674
	  506  EMJAD0.PAT       9-AUG-83          1    020675
	  507  QKDCA0.PAT       9-AUG-83          1    020676
	  508  JKDACO.PAT       9-AUG-83          1    020677
	  509  JKDBC0.PAT       9-AUG-83          1    020700
	  510  VDZAC0.PAT       9-AUG-83          1    020701
	  511  VDZBB0.PAT       9-AUG-83          1    020702
	  512  VKABB0.PAT       9-AUG-83          1    020703
	  513  VKACC1.PAT       9-AUG-83          1    020704
	  514  VKADC1.PAT       9-AUG-83          1    020705
	  515  VKAAC0.PAT       9-AUG-83          1    020706
	  516  ZKAQG0.BIC       3-MAR-83          6    020707
	  517  ZKARB0.BIC       3-MAR-83          9    020715
	  518  ZKCAA0.BIC       3-MAR-83         33    020726
	  519  ZKCCA0.BIC       3-MAR-83         32    020767
	  520  ZKCDA0.BIC       3-MAR-83         19    021027
	  521  ZKCEB0.BIC       3-MAR-83         28    021052
	  522  ZKCFB0.BIC       3-MAR-83         28    021106
	  523  ZKCGA0.BIC       3-MAR-83         30    021142
	  524  ZKDAA0.BIN       3-MAR-83          7    021200
	  525  ZKEBB0.BIC       3-MAR-83         17    021207
	  526  ZKECA0.BIN       3-MAR-83          8    021230
	  527  ZKEDA0.BIC       3-MAR-83         14    021240
	  528  ZKEEC0.BIC       3-MAR-83         76    021256
	  529  ZKGAB0.BIC       3-MAR-83          6    021372
	  530  ZKHAB0.BIC       3-MAR-83         10    021400
	  531  ZKLAE0.BIC       3-MAR-83         14    021412
	  532  ZDLDH0.PAT       9-AUG-83          1    021430
	  533  ZKMBA0.BIN       3-MAR-83         33    021431
	  534  ZKMCA0.BIN       3-MAR-83         24    021472
	  535  ZKMDA0.BIN       3-MAR-83         41    021522
	  536  ZKMEA0.BIN       3-MAR-83         43    021573
	  537  ZKMFA0.BIN       3-MAR-83         20    021646
	  538  ZKMGA0.BIN       3-MAR-83         17    021672
	  539  ZKMOA0.BIN       3-MAR-83         15    021713
	  540  ZKMSA0.BIN       3-MAR-83         49    021732
	  541  ZKMUA0.BIN       3-MAR-83         32    022013
	  542  ZKUAE0.BIN       3-MAR-83         17    022053
	  543  ZKUBC0.BIN       3-MAR-83         25    022074
	  544  ZKWAG0.BIC       3-MAR-83         11    022125
	  545  ZKWBJ1.BIC       3-MAR-83         11    022140
	  546  ZKWCC0.BIN       3-MAR-83         10    022153
	  547  ZKWKA2.BIC       3-MAR-83         26    022165
	  548  ZKWLA0.BIN       3-MAR-83         25    022217
	  549  ZLABA1.BIC       3-MAR-83         15    022250
	  550  ZLACF0.BIN       3-MAR-83         14    022267
	  551  ZLADD0.BIN       3-MAR-83         17    022305
	  552  ZLAEB0.BIN       3-MAR-83         15    022326
	  553  ZLAFA1.BIN       3-MAR-83         18    022345
	  554  ZLAIB0.BIN       3-MAR-83         36    022367
	  555  ZLCAC0.BIN       3-MAR-83         11    022433
	  556  ZLNAA0.BIN       3-MAR-83         17    022446
	  557  ZLPAB1.BIN       3-MAR-83          9    022467
	  558  ZLPBB0.BIN       3-MAR-83          9    022500
	  559  ZLPKH0.BIN       3-MAR-83         16    022511
	  560  ZLPLD0.BIN       3-MAR-83         31    022531
	  561  ZLQPB0.BIN       3-MAR-83         20    022570
	  562  ZLSAB0.BIC       3-MAR-83         13    022614
	  563  ZLVAB0.BIC       3-MAR-83         14    022631
	  564  ZLXAA0.BIN       3-MAR-83         15    022647
	  565  ZM9AE0.BIC       3-MAR-83          7    022666
	  566  ZM9BE0.BIC       3-MAR-83         11    022675
	  567  ZMLAD0.BIN       3-MAR-83         73    022710
	  568  ZMLBB0.BIN       3-MAR-83         49    023021
	  569  ZMLCB0.BIN       3-MAR-83         67    023102
	  570  ZMRAA0.BIC       3-MAR-83          6    023205
	  571  ZMSDD0.BIC       3-MAR-83         63    023213
	  572  ZMSPB0.BIC       3-MAR-83         65    023312
	  573  ZNCCC0.BIN       3-MAR-83         44    023413
	  574  ZNCDB0.BIN       3-MAR-83         11    023467
	  575  ZPCAE0.BIC       3-MAR-83         18    023502
	  576  ZPLAC0.BIN       3-MAR-83         30    023524
	  577  ZPLBC0.BIN       3-MAR-83         31    023562
	  578  ZQKBH0.BIC       3-MAR-83         17    023621
	  579  1124  .BAK      12-SEP-83          1    023642
	  580  ZQMCG4.BIC      27-OCT-83         27    023643
	  581  ZR6AD0.BIN       3-MAR-83         58    023676
	  582  ZR6BD0.BIN       3-MAR-83         51    023770
	  583  ZR6CE0.BIN       3-MAR-83         54    024053
	  584  ZR6DD0.BIN       3-MAR-83         46    024141
	  585  ZR6EC0.BIN       3-MAR-83         40    024217
	  586  ZR6GC0.BIC       3-MAR-83         55    024267
	  587  ZR6HF0.BIC       3-MAR-83         58    024356
	  588  ZR6IF0.BIC       3-MAR-83         43    024450
	  589  ZR6JF0.BIN       3-MAR-83         45    024523
	  590  ZR6KG0.BIN       3-MAR-83         51    024600
	  591  ZR6LD0.BIN       3-MAR-83         38    024663
	  592  ZR6ME1.BIC       3-MAR-83         52    024731
	  593  ZR6NE3.BIC       3-MAR-83         56    025015
	  594  ZR6PD0.BIN       3-MAR-83         57    025105
	  595  ZR6QC0.BIN       3-MAR-83         42    025176
	  596  ZR6RC1.BIN       3-MAR-83         37    025250
	  597  ZRCAB0.BIC       3-MAR-83         11    025315
	  598  ZRCBB0.BIC       3-MAR-83         10    025330
	  599  ZRCCB0.BIC       3-MAR-83          6    025342
	  600  ZRFAB0.BIC       3-MAR-83         11    025350
	  601  ZRFBB1.BIC       3-MAR-83         14    025363
	  602  ZRFCB0.BIC       3-MAR-83          6    025401
	  603  ZRHBF0.BIC       3-MAR-83         63    025407
	  604  ZRJAD0.BIC       3-MAR-83         43    025506
	  605  ZRJBD0.BIC       3-MAR-83         24    025561
	  606  ZRJCB0.BIC       3-MAR-83         20    025611
	  607  ZRJDE0.BIC       3-MAR-83         45    025635
	  608  ZRJED0.BIN       3-MAR-83         59    025712
	  609  ZRJFA0.BIN       3-MAR-83         26    026005
	  610  ZRJGE0.BIC       3-MAR-83         55    026037
	  611  ZRJHE0.BIC       3-MAR-83         49    026126
	  612  ZRJID0.BIC       3-MAR-83         60    026207
	  613  ZRJJD0.BIC       3-MAR-83         52    026303
	  614  ZRJKA0.BIC       3-MAR-83         23    026367
	  615  ZRJLA0.BIC       3-MAR-83         33    026416
	  616  ZRJMA0.BIC       3-MAR-83         35    026457
	  617  ZRJNA0.BIC       3-MAR-83         65    026522
	  618  ZRJOA0.BIC       3-MAR-83         54    026623
	  619  ZRKHG0.BIC       3-MAR-83         28    026711
	  620  ZRKIF0.BIN       3-MAR-83         21    026745
	  621  ZRKJE0.BIC       3-MAR-83         11    026772
	  622  ZRKKF2.BIC       3-MAR-83         28    027005
	  623  ZRKLE0.BIC       3-MAR-83         23    027041
	  624  ZRLGC0.BIN       3-MAR-83         19    027070
	  625  ZRLHB0.BIC       3-MAR-83         27    027113
	  626  ZRLID0.BIN       3-MAR-83         30    027146
	  627  ZRLJB1.BIC       3-MAR-83         23    027204
	  628  ZRLKB2.BIC       3-MAR-83         26    027233
	  629  ZRLLC0.BIN       3-MAR-83         14    027265
	  630  ZRLMB0.BIN       3-MAR-83         23    027303
	  631  ZRLNA2.BIN       3-MAR-83         28    027332
	  632  ZRMLB1.BIC       3-MAR-83         35    027366
	  633  ZRMMB2.BIC       3-MAR-83         72    027431
	  634  ZRMNB1.BIC       3-MAR-83         69    027541
	  635  ZRMOB1.BIC       3-MAR-83         74    027646
	  636  ZRMPB2.BIC       3-MAR-83         75    027760
	  637  ZRMQB1.BIC       3-MAR-83         48    030073
	  638  ZRMRB0.BIN       3-MAR-83         67    030153
	  639  ZRMSB0.BIN       3-MAR-83         22    030256
	  640  ZRMTB0.BIN       3-MAR-83         36    030304
	  641  ZRMUB1.BIC       3-MAR-83         48    030350
	  642  ZRMVB1.BIC       3-MAR-83         46    030430
	  643  ZRNAA0.BIC       3-MAR-83         49    030506
	  644  ZRNBA0.BIC       3-MAR-83         75    030567
	  645  ZRNCA0.BIC       3-MAR-83         47    030702
	  646  ZRNDA0.BIC       3-MAR-83         73    030761
	  647  ZRNEA0.BIC       3-MAR-83         70    031072
	  648  ZRNFA0.BIC       3-MAR-83         72    031200
	  649  ZRNGA0.BIC       3-MAR-83         37    031310
	  650  ZRNHA0.BIN       3-MAR-83         67    031355
	  651  ZRNIA0.BIN       3-MAR-83         22    031460
	  652  ZRNJB0.BIN       3-MAR-83         91    031506
	  653  ZRP1C0.BIC       3-MAR-83         29    031641
	  654  ZRP2B0.BIN       3-MAR-83         11    031676
	  655  ZRPAD1.BIN       3-MAR-83         13    031711
	  656  ZRPBE0.BIN       3-MAR-83         25    031726
	  657  ZRPCD0.BIC       3-MAR-83          7    031757
	  658  ZRPDB0.BIN       3-MAR-83          8    031766
	  659  ZRPEA0.BIN       3-MAR-83          9    031776
	  660  ZRPFB0.BIC       3-MAR-83         17    032007
	  661  ZRPGB0.BIC       3-MAR-83          7    032030
	  662  ZRPHA0.BIN       3-MAR-83          8    032037
	  663  ZRPWC0.BIC       3-MAR-83         27    032047
	  664  ZRPYD1.BIC       3-MAR-83         37    032102
	  665  ZRPZC0.BIC       3-MAR-83         21    032147
	  666  ZRTAC0.BIC       3-MAR-83          8    032174
	  667  ZRXAF0.BIC       3-MAR-83         17    032204
	  668  ZRXBF0.BIC       3-MAR-83         16    032225
	  669  ZRXCA0.BIN       3-MAR-83          7    032245
	  670  ZRXDC0.BIC       3-MAR-83         30    032254
	  671  ZRXEA2.BIC       3-MAR-83         17    032312
	  672  ZRXFB0.BIC       3-MAR-83         31    032333
	  673  ZTEAC1.BIC       3-MAR-83         26    032372
	  674  ZTEBB0.BIC       3-MAR-83         17    032424
	  675  ZTECC1.BIN       3-MAR-83         18    032445
	  676  ZTEDC0.BIC       3-MAR-83         27    032467
	  677  ZTEEC0.BIN       3-MAR-83         15    032522
	  678  ZTEFB0.BIN       3-MAR-83          6    032541
	  679  ZTMAI0.BIC       3-MAR-83         16    032547
	  680  ZTMBF0.BIC       3-MAR-83         13    032567
	  681  ZTMCD0.BIC       3-MAR-83         12    032604
	  682  ZTMDE0.BIN       3-MAR-83         10    032620
	  683  ZTMEE0.BIC       3-MAR-83         11    032632
	  684  ZTMFF0.BIC       3-MAR-83          8    032645
	  685  ZTMGC0.BIN       3-MAR-83          4    032655
	  686  ZTMHF0.BIC       3-MAR-83         27    032661
	  687  ZTRAC0.BIC       3-MAR-83         24    032714
	  688  ZTRBD0.BIC       3-MAR-83          3    032744
	  689  ZTSEB0.BIC       3-MAR-83         11    032747
	  690  ZTSFD0.BIC       3-MAR-83          8    032762
	  691  ZTSGB0.BIN       3-MAR-83          4    032772
	  692  ZTSHC0.BIC       3-MAR-83         21    032776
	  693  ZTSIB0.BIC       3-MAR-83         28    033023
	  694  ZTUAI0.BIN       3-MAR-83         23    033057
	  695  ZTUBG1.BIC       3-MAR-83         18    033106
	  696  ZTUCF2.BIC       3-MAR-83         32    033130
	  697  ZTUDD0.BIN       3-MAR-83         15    033170
	  698  ZTUED0.BIN       3-MAR-83          6    033207
	  699  ZTUFA0.BIN       3-MAR-83          4    033215
	  700  ZTUGC1.BIC       3-MAR-83         15    033221
	  701  ZTUIA0.BIN       3-MAR-83         29    033240
	  702  ZTUJA0.BIN       3-MAR-83         17    033275
	  703  ZTUKA0.BIN       3-MAR-83         31    033316
	  704  ZTULA0.BIN       3-MAR-83         14    033355
	  705  ZTUMA0.BIN       3-MAR-83          4    033373
	  706  ZTUNA0.BIN       3-MAR-83          4    033377
	  707  ZTUOB0.BIC       3-MAR-83         25    033403
	  708  ZTUPB0.BIC       3-MAR-83         16    033434
	  709  ZTUQB0.BIC       3-MAR-83         17    033454
	  710  ZTURB0.BIC       3-MAR-83         23    033475
	  711  ZTUSB0.BIN       3-MAR-83         14    033524
	  712  ZTUTA0.BIN       3-MAR-83          6    033542
	  713  ZTUUD0.BIN       3-MAR-83         22    033550
	  714  ZUAAA0.BIN       3-MAR-83         65    033576
	  715  ZUABA0.BIN       3-MAR-83         59    033677
	  716  ZUDAD0.BIN       3-MAR-83         19    033772
	  717  ZUDBB0.BIC       3-MAR-83         11    034015
	  718  ZUDCC0.BIC       3-MAR-83         26    034030
	  719  ZUDDC0.PAK       3-MAR-83        238    034062
	  720  ZUDEC1.BIN       3-MAR-83         18    034440
	  721  ZUDGA0.PAK       3-MAR-83         95    034462
	  722  ZVSEA0.BIC       3-MAR-83         21    034621
	  723  ZVTBD0.BIC       3-MAR-83         17    034646
	  724  ZVTCF0.BIN       3-MAR-83         23    034667
	  725  ZVTHC0.BIC       3-MAR-83         25    034716
	  726  ZVTJB0.BIN       3-MAR-83         26    034747
	  727  ZVTLA0.BIN       3-MAR-83         12    035001
	  728  ZVTMA0.BIN       3-MAR-83         29    035015
	  729  ZVTNA0.BIC       3-MAR-83         13    035052
	  730  ZVTVA0.BIN       3-MAR-83          9    035067
	  731  RMDP  .BIN      29-DEC-77         17    035100
	  732  RKDP  .BIN      29-DEC-77         17    035121
	  733  TCDP  .BIN      13-AUG-76         17    035142
	  734  TMDP  .BIN      29-DEC-77         17    035163
	  735  THDP  .BIN      29-DEC-77         17    035204
	  736  RXDP  .BIN      29-DEC-77         17    035225
	  737  RBDP  .BIN      13-AUG-76         17    035246
	  738  RPDP  .BIN      16-AUG-76         17    035267
	  739  RSDP  .BIN      13-AUG-76         17    035310
	  740  TADP  .BIN      13-AUG-76         17    035331
	  741  RLDP  .BIN      29-DEC-77         17    035352
	  742  RRDP  .BIN      23-MAY-80         17    035373
	  743  RYDP  .BIN       2-AUG-78         17    035414
	  744  ZQUAI0.BIN      13-AUG-76         17    035435
	  745  ZQUBJ0.BIN      29-DEC-77         31    035456
	  746  ZQU1C0.BIN      29-DEC-77         35    035515
	  747  ZQUQD0.BIN      29-DEC-77         22    035560
	  748  ZQU2C0.BIN      29-DEC-77         23    035606
	  749  ZQUXE0.BIN      29-DEC-77         46    035635
	  750  ZQUYC0.BIN      29-DEC-77         27    035713
	  751  ZQUGH0.BIN       6-MAY-76         27    035746
	  752  ZQUSD0.TXT      24-APR-81         23    036001
	  753  CHAIN .BIC      23-OCT-82          2    036030
	  754  SIZER6.BIC      10-JUN-81         23    036032
	  755  ROLLIN.BIN      15-NOV-76         18    036061
	  756  BBADB0.BIN       6-MAR-81         10    036103
	  757  ZQKCF0.PAT       9-AUG-83          1    036115
	  758  ZQMCG2.PAT       9-AUG-83          1    036116
	  759  CMFAF1.BIC      27-OCT-82         17    036117
	  760  ZQKCF1.BIC       6-OCT-82         16    036140
	  761  CQKAC0.BIC      11-JUN-82          6    036160
	  762  CQKCG2.BIC       6-OCT-82         29    036166
	  763  DQACA0.BIC      30-MAR-82          8    036223
	  764  ZSSAB0.PAT       9-AUG-83          1    036233
	  765  FKTAA0.BIC      11-AUG-76         17    036234
	  766  FKTBA0.BIC      11-AUG-76          8    036255
	  767  FKTCA0.BIC      11-AUG-76          9    036265
	  768  FKTDA1.BIC      11-AUG-76          7    036276
	  769  FKTFA0.BIC      11-AUG-76         16    036305
	  770  UWADA1.BIN      19-JUN-81          9    036325
	  771  ZKAAA0.BIN      11-AUG-76         13    036336
	  772  ZKABA0.BIN      11-AUG-76          5    036353
	  773  ZKACA0.BIN      11-AUG-76          6    036360
	  774  ZKADA0.BIN      11-AUG-76         17    036366
	  775  ZKAEA0.BIN      11-AUG-76         10    036407
	  776  ZKAFA0.BIN      11-AUG-76         16    036421
	  777  ZKAGA0.BIN      11-AUG-76         13    036441
	  778  ZKAHA0.BIN      11-AUG-76         12    036456
	  779  ZKAIA0.BIN      11-AUG-76         13    036472
	  780  ZKAJA0.BIN      11-AUG-76          8    036507
	  781  ZKAKA0.BIN      11-AUG-76          8    036517
	  782  ZKALA0.BIN      11-AUG-76         15    036527
	  783  ZKAMA0.BIN      11-AUG-76          4    036546
	  784  ZKMAF1.BIC      12-SEP-83          9    036552
	  785  ZKWDA0.BIN       5-JAN-81          4    036563
	  786  ZKWEA0.BIN       5-JAN-81         34    036567
	  787  ZMMJA0.BIC      26-JUN-82          5    036631
	  788  ZMMLC0.BIC      26-JUN-82         15    036636
	  789  ZMMCA0.BIC       6-MAY-76          4    036655
	  790  ZMMDB0.BIC       6-MAY-76          3    036661
	  791  ZMMEC0.BIC       6-MAY-76          4    036664
	  792  ZMMFB0.BIC       6-MAY-76          4    036670
	  793  ZMMGD0.BIC       6-MAY-76          3    036674
	  794  ZMMHB0.BIC       6-MAY-76          1    036677
	  795  ZMMIB0.BIC       6-MAY-76          3    036700
	  796  ZMMKB0.BIC       6-MAY-76          1    036703
	  797  ZMMAA0.BIN      11-AUG-76          2    036704
	  798  ZMMBA0.BIN      11-AUG-76          1    036706
	  799  ZSSAB1.BIC      22-SEP-82         10    036707
	  800  YPTCB0.BIN      11-AUG-76          8    036721
	  801  KKTAB0.PAT      28-MAY-82          1    036731
	  802  XMONC0.PAT      28-MAY-82          1    036732
	  803  XMONB0.PAT      28-MAY-82          1    036733
	  804  BOOTRX.BIN      16-FEB-79          1    036734
	  805  BOOTGT.BIN       7-MAR-80          1    036735
	  806  RPHEAD.BIN      15-NOV-76          4    036736
	  807  DHAUTO.BIN       8-JUN-81          6    036742
	  808  DZAUTO.BIN       8-JUN-81          5    036750
	  809  DZECHO.BIN       9-JUN-81         22    036755
	  810  DHECHO.BIN      11-JUN-81         27    037003
	  811  DATACM.BIN       1-JAN-70         13    037036
	  812  COMPCN.BIN      19-JUN-81          7    037053
	  813  BBAXE0.OBJ        -JAN-70          3    037062
	  814  1103  .BAK      27-OCT-83          2    037065
	  815  CTDP  .BAK       9-AUG-83          1    037067
	  816  DBDP  .BAK       9-AUG-83          1    037070
	  817  DDDP  .BAK       9-AUG-83          1    037071
	  818  DKDP  .BAK       9-AUG-83          1    037072
	  819  EEEEEE.CCC      24-APR-81          2    037073
	  820  1150  .CCC       9-AUG-83          1    037075
	  821  DLDP  .CMD       9-AUG-83          1    037076
	  822  CTDP  .CMD       9-AUG-83          1    037077
	  823  DBDP  .CMD       9-AUG-83          1    037100
	  824  DDDP  .CMD       9-AUG-83          1    037101
	  825  DKDP  .CMD       9-AUG-83          1    037102
	  826  DMDP  .CMD       9-AUG-83          1    037103
	  827  DRDP  .CMD       9-AUG-83          1    037104
	  828  DXDP  .CMD       9-AUG-83          1    037105
	  829  DYDP  .CMD       9-AUG-83          1    037106
	  830  1111  .CCC      28-MAY-81          1    037107
	  831  MTDP  .CMD       9-AUG-83          1    037110
	  832  RS04  .CCC      24-APR-81          1    037111
	  833  MSDP  .CMD       9-AUG-83          1    037112
	  834  1140  .CCC       9-AUG-83          3    037113
	  835  DECX11.BAK       9-AUG-83          1    037116
	  836  DXDP01.CMD       9-AUG-83          2    037117
	  837  DYDP22.BAK       4-AUG-83          2    037121
	  838  DYDP22.CMD       9-AUG-83          2    037123
	  839  1134  .BAK       9-AUG-83          2    037125
	  840  1135  .CCC       9-AUG-83          1    037127
	  841  SKDP00.BAK       9-AUG-83          3    037130
	  842  SKDP01.BAK       9-AUG-83          2    037133
	  843  1145  .CCC       9-AUG-83          2    037135
	  844  SKDP02.CMD       9-AUG-83          2    037137
	  845  SKDP01.CMD       9-AUG-83          2    037141
	  846  SKDP00.CMD       9-AUG-83          3    037143
	  847  SMDP00.CMD       9-AUG-83          1    037146
	  848  SMDP05.CMD       9-AUG-83          3    037147
	  849  SMDP07.CMD       9-AUG-83          1    037152
	  850  1134  .CCC      27-OCT-83          2    037153
	  851  1155  .CCC       9-AUG-83          2    037155
	  852  DECX11.CMD       9-AUG-83          1    037157
	  853  MINC11.CCC       9-AUG-83          1    037160
	  854  MINC23.CCC       9-AUG-83          1    037161
	  855  RK05  .CCC       9-AUG-83          1    037162
	  856  SXDP00.CMD       9-AUG-83          1    037163
	  857  SXDP0A.CMD       9-AUG-83          1    037164
	  858  SYDP01.BAK       9-AUG-83          2    037165
	  859  PDT130.CCC      13-MAR-81          2    037167
	  860  SXDP1A.CMD       9-AUG-83          1    037171
	  861  SXDP25.CMD       9-AUG-83          1    037172
	  862  SXDP26.CMD       9-AUG-83          1    037173
	  863  RK611 .CCC       9-AUG-83          1    037174
	  864  SXDP27.CMD       9-AUG-83          1    037175
	  865  SYDP00.BAK      13-APR-83          1    037176
	  866  MTDP  .BAK      24-APR-81          1    037177
	  867  SXDP08.CMD      24-APR-81          2    037200
	  868  DL11  .CMD      24-APR-81          1    037202
	  869  TU16  .CMD      24-APR-81          1    037203
	  870  LP0124.CMD      24-APR-81          1    037204
	  871  RP0456.CMD      24-APR-81          1    037205
	  872  THDP  .CMD      24-APR-81          1    037206
	  873  RXDP  .CMD      24-APR-81          1    037207
	  874  SXDP0A.BAK      25-MAR-82          1    037210
	  875  BM873 .CMD      24-APR-81          1    037211
	  876  DR11C .CMD      24-APR-81          1    037212
	  877  FP11B .CMD      24-APR-81          1    037213
	  878  VT05  .CMD      24-APR-81          1    037214
	  879  VT50  .CMD      24-APR-81          1    037215
	  880  LS11  .CMD      24-APR-81          1    037216
	  881  KJ11A .CMD      24-APR-81          1    037217
	  882  DR11L .CMD      24-APR-81          1    037220
	  883  KB11A .CMD      24-APR-81          1    037221
	  884  LA180 .CMD      24-APR-81          1    037222
	  885  KT11C .CMD      24-APR-81          1    037223
	  886  DM11BB.CMD      24-APR-81          1    037224
	  887  LA36  .CMD      24-APR-81          1    037225
	  888  TCDP  .CMD      24-APR-81          1    037226
	  889  LP05  .CMD      24-APR-81          1    037227
	  890  RKDP  .CMD      24-APR-81          1    037230
	  891  KW11L .CMD      24-APR-81          1    037231
	  892  RMDP  .CMD      24-APR-81          1    037232
	  893  M9301 .CMD      24-APR-81          1    037233
	  894  KD11E .CMD      24-APR-81          1    037234
	  895  BM792 .CMD      24-APR-81          1    037235
	  896  KT11D .CMD      24-APR-81          1    037236
	  897  TADP  .CMD      24-APR-81          1    037237
	  898  DH11  .CMD      24-APR-81          1    037240
	  899  RBDP  .CMD      24-APR-81          1    037241
	  900  KE11E .CMD      24-APR-81          1    037242
	  901  RLDP  .CMD      24-APR-81          1    037243
	  902  FP11C .CMD      24-APR-81          1    037244
	  903  RSDP  .CMD      24-APR-81          1    037245
	  904  MJ11  .CMD      24-APR-81          1    037246
	  905  KD11A .CMD      24-APR-81          1    037247
	  906  RXDP01.CMD      24-APR-81          1    037250
	  907  KB11B .CMD      24-APR-81          1    037251
	  908  CR11  .CMD      24-APR-81          1    037252
	  909  TU10  .CMD      24-APR-81          1    037253
	  910  RPDP  .CMD      24-APR-81          1    037254
	  911  RK05  .CMD      24-APR-81          1    037255
	  912  SXDP1B.CMD      18-MAR-82          2    037256
	  913  DM11  .CMD      24-APR-81          1    037260
	  914  KE11F .CMD      24-APR-81          1    037261
	  915  TALDRB.CMD      24-APR-81          1    037262
	  916  RH70  .CMD      24-APR-81          1    037263
	  917  SXDP07.CMD      25-MAR-82          1    037264
	  918  SYDP00.CMD       9-AUG-83          1    037265
	  919  XXDP  .CMD       9-AUG-83          2    037266
	  920  DYDP  .BAK      24-APR-81          1    037270
	  921  SKDP02.BAK      22-SEP-82          2    037271
	  922  SXDP01.BAK       9-AUG-83          2    037273
	  923  XXDP  .BAK       9-AUG-83          2    037275
	  924  KD11D .CMD      24-APR-81          1    037277
	  925  KD11B .CMD      24-APR-81          1    037300
	  926  RX01  .CMD      24-APR-81          1    037301
	  927  SYDP24.BAK       9-AUG-83          1    037302
	  928  DXDP01.BAK      25-MAR-82          1    037303
	  929  SXDP16.CMD      24-APR-81          1    037304
	  930  SXDP31.CMD      25-MAR-82          2    037305
	  931  SXDP30.CMD      25-MAR-82          1    037307
	  932  SXDP15.CMD      24-APR-81          1    037310
	  933  SXDP17.CMD      24-APR-81          1    037311
	  934  SXDP04.CMD      24-APR-81          1    037312
	  935  SYDP24.CMD      10-AUG-83          1    037313
	  936  SXDP05.CMD      24-APR-81          1    037314
	  937  SXDP11.CMD      24-APR-81          2    037315
	  938  DRDP  .BAK      24-APR-81          1    037317
	  939  DMDP  .BAK      24-APR-81          1    037320
	  940  DLDP  .BAK      26-OCT-82          1    037321
	  941  DXDP  .BAK      25-MAR-82          1    037322
	  942  DKDPU .CMD      24-APR-81          1    037323
	  943  DYDPU .CMD      24-APR-81          1    037324
	  944  SXDP02.CMD      18-MAR-82          1    037325
	  945  STDP01.CMD      24-APR-81          1    037326
	  946  SXDP2A.CMD      18-MAR-82          1    037327
	  947  SXDP25.BAK      25-MAR-82          1    037330
	  948  DXDPU .CMD      25-MAR-82          1    037331
	  949  SXDP26.BAK      25-MAR-82          1    037332
	  950  SXDP27.BAK      25-MAR-82          1    037333
