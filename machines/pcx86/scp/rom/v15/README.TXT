The 4/24/80 version of the v1.5 file came from the SCP-DOS v1.0 disk and
the 3/19/82 version came from the MS-DOS v1.25 disk. The newer version
appears to have added support for the double-density versions of the 
base Cromemco and Tarbell floppy controllers (i.e., the C16 and TDD
controllers).

I'm not 100% sure why Tim Paterson didn't increment the minor version
number - a change like this would certainly qualify as important
enough.

On 2/18/18, I purchased a spare CPU Support Board (SN #1902) with a
D2716-6 EPROM labeled "Seattle 8MHz Old". This version is different
yet from the other V1.5 versions or the V1.6 I have. So, I have no
idea which version this is.

On 4/19/19, I received another Gazelle, this one with original manuals.
The MON86 manual had "V 1.5A" on it. The listing in the manual is dated
4/24/80. The label on the EPROM (TMS2516JL-45) said "MON 86 V1.5T". Upon
comparing the binaries, the code was identical until offset 0x777-0x7D0
which is the disk boot code. The code in the 1.5A ROM appears to be the
same as in the 1.5A manual. I don't have a copy of the 1.5 listing from 
SCP so I do not know what boot code this might be.

The 1.5 monitor on my system seems to have an "IN AL,2A" before the
Tarbell code starts, but then there are continuing differences with the
V1.5A.


Also notable is the Version ID string in the dosio.asm (86-DOS) or 
io.asm (MS-DOS) files, as follows:

; From DOSIO.ASM dated 4/30/81
; I/O System for 86-DOS version 0.60 and later. Revised 04/28/81.

; From IO.ASM dated 4/20/82
; I/O System for 86-DOS version 1.20 and later. Revised 4-20-82.

