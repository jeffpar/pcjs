#!/bin/bash
if [ -z "$1" ]; then
    echo "usage: dumpiso.sh [ISO file]"
    exit 1
fi
diskname=$(basename "$1" .iso)
echo "Dumping $diskname"
hdiutil mount "$diskname.iso" > disk
if grep -q -e "^/dev" disk; then
    vol=`grep -o -e "/Volumes/.*" disk`
    ls -alRT "$vol" > $diskname.txt
    hdiutil unmount "$vol" > /dev/null
    hashiso.sh $diskname.iso
else
    echo "error: unable to mount $diskname.iso"
fi
rm disk
