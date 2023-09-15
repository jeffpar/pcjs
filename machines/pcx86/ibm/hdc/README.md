---
layout: page
title: IBM PC Hard Drive Types
permalink: /machines/pcx86/ibm/hdc/
redirect_from:
  - /disks/pcx86/drives/
  - /disks/pcx86/drives/68mb/
  - /machines/pcx86/hdc/
---

PCx86 Hard Drive (aka Fixed Disk) images generally use one of the following sizes:

  - [10Mb](10mb/)
  - [20Mb](20mb/)
  - [47Mb](47mb/)
  - 68Mb

Support is also being added for ATAPI CD-ROM drives.  Since ATAPI support was built on top of the ATA specification (originally introduced with the IBM PC AT), it requires a PC AT (or newer) machine configuration.

  - [PC AT with ATAPI CD-ROM Support](/machines/pcx86/ibm/5170/vga/cdrom/)

### IBM PC XT Drive Types

The IBM PC XT BIOS supported 4 predefined drive types:

  - Type 0: 306 cylinders, 2 heads, 17 sectors/track (5,326,848 bytes)
  - Type 1: 375 cylinders, 8 heads, 17 sectors/track (26,112,000 bytes)
  - Type 2: 306 cylinders, 6 heads, 17 sectors/track (15,980,544 bytes)
  - Type 3: 306 cylinders, 4 heads, 17 sectors/track (10,653,696 bytes or [10Mb]({{ site.github.pages }}/machines/pcx86/ibm/hdc/10mb))

Generally, our PC XT machines use 10Mb drives, configured as XT drive type 3.  Such drives can also be used in our PC AT machines, but they must be configured as AT drive type 1 instead (see below).

### IBM PC AT Drive Types

The IBM PC AT introduced a new drive controller and defined many new drive types.  You can find a listing of them in the PCjs [driveinfo.js](/machines/pcx86/modules/v2/driveinfo.js) component.

Generally, our PC AT machines only use a few common sizes, corresponding to the following AT drive types:

  - Type 1: 306 cylinders, 4 heads, 17 sectors/track (10,653,696 bytes or [10Mb]({{ site.github.pages }}/machines/pcx86/ibm/hdc/10mb))
  - Type 2: 615 cylinders, 4 heads, 17 sectors/track (21,411,840 bytes or [20Mb]({{ site.github.pages }}/machines/pcx86/ibm/hdc/20mb))
  - Type 3: 615 cylinders, 6 heads, 17 sectors/track (32,117,760 bytes or 30Mb)
  - Type 4: 940 cylinders, 8 heads, 17 sectors/track (65,454,080 bytes or 62Mb)
  - Type 5: 940 cylinders, 6 heads, 17 sectors/track (49,090,560 bytes or [47Mb]({{ site.github.pages }}/machines/pcx86/ibm/hdc/47mb))

Note that PC XT drive type 3 and PC AT drive type 1 have identical [10Mb](10mb/) disk geometry, which is why you'll find both PC XT and PC AT machines here using the same 10Mb disk image.

Similarly, PC AT drive types 1, 2, 3, and 5 match the drive types defined by the COMPAQ DeskPro 386, so those machines can use the same [10Mb](10mb/), [20Mb](20mb/), 30Mb, and [47Mb](47mb/) disk images.

### COMPAQ DeskPro 386 Drive Types

For drives larger than the PC XT and PC AT drive types listed above, we generally use a [COMPAQ DeskPro 386](/machines/pcx86/compaq/deskpro386/) machine and COMPAQ drive type 4, which specifies 1023 cylinders (instead of 940), yielding a drive capacity of 68Mb (instead of 62Mb).

For example, the [Microsoft Windows 95](/software/pcx86/sys/windows/win95/4.00.950/) machine uses a COMPAQ DeskPro 386 with a 68Mb drive.

See the complete list of [COMPAQ DeskPro 386 Drive Types](/machines/pcx86/compaq/deskpro386/#fixed-disk-drive-parameter-table-values) for more details.

{% include gallery/documents.html width="200" height="280" %}

{% comment %}

Here's some valuable information regarding DOS BPBs from [comp.os.msdos.programmer](https://groups.google.com/g/comp.os.msdos.programmer/c/ZGE7qkh4eI0/m/1vssg3Yt3nkJ):

    Wally Bass
    Feb 14, 1994, 10:00:32 AM

    (Pamela Kane) writes:
    >Does anyone know how DOS determines the cluster size when initializing a 
    >disk? Given a drive with x number of sectors (as reported by the BIOS) 
    >what is the formula for fixing the cluster size at 1, 2, 4, or 8 (or 
    >more) sectors per cluster as reported in the BPB?

    This is probably more information than you wanted, but the following are
    from some notes that I have on this topic from some time back.

    When DOS starts, it scans the partition table and additional partition
    subtables in the extended partition area of each drive to find the
    partitions that should be accessed. These tables give DOS (a) the
    starting sector of each partition, and (b) the size of each partition in
    sectors.

    For DOS 3 and later, using the starting sector address obtained above
    for each partition, DOS reads the first sector (the 'boot record') of
    each partition. If the partition has been formatted, the boot record
    will normally contain a control block called a BPB (BIOS parameter
    block) starting at offset 0Bh in the boot record. DOS does some checks
    (more on that later) to see if it thinks that the boot record has a
    valid BPB. If so, the cluster size and other mapping information is
    taken from the appropriate fields in the BPB. If DOS decides that the
    boot record has no valid BPB, then DOS determines and uses a cluster
    size and other parameters from an internal table, based solely on the
    size of the partition (as previously obtained from the partition table).

    I looked at PC-DOS 5 at one time, and it appeared to me that the code
    used the following table:

    <= 7FA8h sectors then cluster size is 8 (with a 12 bit FAT), else
    <= 40000h sectors then cluster size is 4 (with a 16 bit FAT), else
    <= 80000h sectors then cluster size is 8, else
    <= 100000h sectors then cluster size is 16, else
    <= 200000h sectors then cluster size is 32, else
    <= 400000h sectors then cluster size is 64, else
    <= 800000h sectors then cluster size is 128

    I also looked at DOS 3.0 at one time, and it appeared to use a table
    which consisted of the same first two entries as above, except that the
    limit in the second table item was 0FFFFh sectors (the maximum partition
    size supported by DOS 3.x, since two byte quantities were used in
    referring to sectors numbers).

    Each of these table entries also specifies a root directory size, so for
    each of these mappings, there is some specific corresponding root
    directory size. When it doesn't get it from the BPB, DOS calculates the
    FAT size by calculating how many entries the FAT must contain, which is
    determined by the partition size, the cluster size chosen, and whether a
    16 bit or 12 bit fat was used.

    For DOS 2.x, DOS does not read the BPB, and always determines the
    mapping solely on the basis of the partition size, using internal tables
    similar to the one above. DOS 2.x, of course, always uses 12 bit fats,
    and DOS 2.x and 3.x both only support partitions up to 32 MB. Over time,
    I have looked at several DOS versions, and my recollection is that the
    various DOS 2 versions from different vendors varied slightly as to the
    exact dividing points in their tables. For Compaq's DOS 2.12, the table
    is:
    > 8000h sectors then cluster size is 16, else
    > 2000h sectors then cluster size is 8, else
    > 800h sectors then cluster size is 4, else
    > 200h sectors then cluster size is 2, else
    the cluster size is 1

    In looking at both DOS 3 and DOS 5, there appeared to be a second table
    present (immediately preceding in memory the table which was actually
    used) which gave the same mappings as Compaq DOS 2.12. However, best I
    could tell, this table (which basically gives a set of mappings for the
    range of 12 bit fat cases case) was 'dead code' (actually, 'dead data')
    (a leftover from DOS 2.x, perhaps), and was not actually used.

    For all versions of DOS from 3.x on, DOS can handle variations in
    cluster sizes and other parameters (size of the root dir, for example)
    even if they don't match the values that DOS would normally use for that
    size partition. Hence, if you can get some program to format a partition
    with a 'non-standard' cluster size for that partition size, DOS will
    still be able (after the system has been rebooted) to handle it, *if*
    the formatting program installs a BPB that DOS will accepts as valid.
    Some third party 'disk manager' programs, such as SpeedStor, will let
    you to format partition with non-standard values. As long as DOS
    correctly maps a partition with unusual cluster size, running DOS FORMAT
    (most versions >= 3.0) against that partition will reformat it with the
    same mapping. But, with some MS-DOS versions (see below), although
    reformatting will not actually change the mapping, reformatting will
    leave the boot record in a state where DOS will not accept the BPB as
    valid after the next reboot, with the result that DOS will no longer
    correctly recognize the partition mapping after the reformat and reboot.

    The question of what DOS will accept as a valid BPB (which is important
    if one has a non-standard partition and one wants DOS to map it
    correctly) is not all that simple, and seems to be some kind of tribute
    to the confusion that reigns at Redmond and/or Boca Raton. In addition
    to the BPB, a normal DOS boot record contains a jmp (or jmp short)
    instruction at offset 0, and contains an 'OEM' (Original Equipment
    Manufacturer) identification field at offset 3 (length 8). In deciding
    whether the BPB is valid, some versions of DOS examine the jmp
    instruction and/or the OEM field in making the decision. The exact
    conditions under which a BPB is deemed valid are listed below for some
    versions of DOS that I have looked at (in each case, the first
    'satisfied' condition in each table determines the final outcome of the
    tests):

    PC-DOS 3.0
    Result Condition
    ------ ---------
    ignore BPB OEM[1-4] != 'IBM '
    use BPB OEM[6-8] == '2.0'
    ignore BPB otherwise

    Compaq DOS 3.0
    Result Condition
    ------ ---------
    use BPB OEM[1-4] == 'CCC ' && OEM[6-7] == '2.'
    ignore BPB OEM[1-4] != 'IBM '
    use BPB OEM[6-8] == '2.0'
    use BPB OEM[6-8] == '3.0'
    ignore BPB otherwise

    PC-DOS 3.1
    Result Condition
    ------ ---------
    ignore BPB OEM[1-4] != 'IBM '
    use BPB OEM[6-8] == '2.0'
    use BPB OEM[6-8] == '3.1'
    ignore BPB otherwise

    PC-DOS & MS-DOS 3.2 and 3.21
    Result Condition
    ------ ---------
    ignore BPB OEM[1-4] != 'IBM '
    use BPB OEM[6-8] == '2.0'
    ignore BPB OEM[6-7] != '3.'
    use BPB OEM[8] == '0'
    use BPB OEM[8] == '2'
    ignore BPB otherwise

    MS-DOS 3.3
    Result Condition
    ------ ---------
    ignore BPB OEM[1-4] != 'IBM '
    use BPB OEM[6-8] == '2.0'
    ignore BPB OEM[6-7] != '3.'
    ignore BPB OEM[8] <= '0'
    use BPB otherwise

    Compaq DOS 3.31
    Result Condition
    ------ ---------
    ignore BPB Doesn't start w/jmp or jmp short & nop
    ignore BPB Any of the chars in OEM[1-7] < 20h or >6Eh (doesn't
    check OEM[8], apparently a bug)
    ignore BPB High order nibble of media desc != 0Fh
    ignore BPB cluster size not a power of 2
    ignore BPB OEM[1-4] == 'IBM ' && OEM[6-8] == '3.0'
    use BPB otherwise

    PC and MS DOS 5
    Result Condition
    ------ ---------
    ignore BPB Doesn't start w/jmp or jmp short & nop
    ignore BPB High order nibble of media desc != 0Fh
    ignore BPB Sector size not 512
    ignore BPB cluster size not a power of 2
    use BPB OEM[6-8] == '2.0'
    use BPB OEM[5-7] == '10.'
    use BPB OEM[5-7] == '20.'
    ignore BPB OEM[6-7] == '0.'
    ignore BPB OEM[6-7] < '3.' (word compare, OEM[7] most significant)
    use BPB OEM[6-7] > '3.' (ditto)
    ignore BPB OEM[8] < '1'
    use BPB otherwise

    Some notes:

    All of this data applies only to fixed disks, and not to floppies.

    All of the MS-DOS versions looked at here are those distributed
    directly by Microsoft (as opposed to versions distributed by some OEM,
    which may modified and behave differently).

    The DOS FORMAT command is never the entity that decides or defines the
    mapping (e.g., cluster size, etc.) of a partition. DOS FORMAT always
    formats the partition according the mapping that DOS already assigned
    to the partition at boot time. Note that DOS assigns a mapping to a
    partition at boot time even if it has not been formatted.

    Compaq apparently used 'CCC' (Compaq Computer Corporation?) in the OEM
    field at some time, since Compaq DOS 3.0 recognizes that. But all
    versions of Compaq DOS that I have looked at since 2.12 initialize the
    OEM field to 'IBM'.

    MS-DOS 3.2, 3.21, and 3.3 (and perhaps others) place 'MSDOS' in
    OEM[1-5], hence these versions of DOS reject *ALL* BPB's in boot
    records which they themselves have constructed!! (Quite a tribute to
    the testing group that these versions got out the door, isn't it?)
    Also note that 3.2 and 3.21 versions of DOS accept 'IBM 3.0' and
    reject 'IBM 3.1' BPB's, whereas every other version of DOS since 3.1
    specifically rejects 'IBM 3.0' BPB's, and accepts 'IBM 3.1' BPB's.
    (Someone at IBM once told me that DOS 3.0 actually wrote invalid BPB's
    in some cases, and hence 'IBM 3.0' BPB's were rejected by design in
    later DOS versions. The DOS 3.2x behavior is apparently a bug.)

    The ONLY OEM field value that I have found that is accepted by ALL
    versions of DOS that I have checked is 'IBM 2.0'. (Notice that there
    are two spaces between 'IBM' and '2.0'.)

    The logic for recognizing whether a BPB is valid is amazingly
    inconsistent and buggy in the various DOS versions. However, it rarely
    matters, because even when a valid BPB is not recognized, the default
    mapping (based on the partition size) will normally be correct if the
    partition was formatted by DOS.

    Wally Bass

{% endcomment %}
