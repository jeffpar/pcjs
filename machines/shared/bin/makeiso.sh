#!/bin/bash
drive=`diskutil list | grep CD_partition_scheme | sed -E "s|.*(disk[0-9]*)$|\1|"`
if [ -z "$drive" ]; then
    echo "unknown CD-ROM drive"
    exit 1
fi
diskID=$1
next=`cat next`
if [ -z "$1" ]; then
    next=`expr $next + 1`
    disk=$(printf "%03d" $next)
    diskID=CD${disk}
fi
diskname=`df | grep -e "/dev/${drive}" | sed -E "s|.*/Volumes/(.*)|MSDN-${diskID}-\1|"`
if [ -z "$diskname" ]; then
    diskname=MSDN-${diskID}
    sudo diskutil unmountDisk /dev/$drive
    echo Creating $diskname.bin
    sudo dd if=/dev/${drive} of=$diskname.bin
    drutil eject
    if [ -f "${diskname}.iso" ]; then
        chmod +w $diskname.iso
    fi
    node bin2iso.js $diskname.bin $diskname.iso --overwrite
    if [ $? -eq 0 ]; then
        chmod a-w $diskname.iso
        hashiso.sh $diskname.iso
        rm $diskname.bin
    else
        echo error converting $diskname.bin
        exit 1
    fi
else
    echo $next>next
    sudo diskutil unmountDisk /dev/$drive
    echo Creating $diskname.iso
#   hdiutil makehybrid -iso -joliet -o ${diskname}.iso /dev/$drive
    sudo dd if=/dev/${drive}s0 of=$diskname.iso
    drutil eject
    chmod a-w $diskname.iso
    dumpiso.sh $diskname.iso
fi
