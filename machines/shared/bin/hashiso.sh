#!/bin/bash
if [ -z "$1" ]; then
    echo "usage: hashiso.sh [ISO file]"
    exit 1
fi
diskname=$(basename "$1" .iso)
md5=`md5 -q $diskname.iso`
grep $diskname.iso MD5.txt
if [ $? -eq 0 ]; then
    echo Updating $diskname checksum: $md5
    sed -i.bak -E "s|.* ${diskname}\.iso|${md5} ${diskname}.iso|" MD5.txt
else
    echo Adding $diskname checksum: $md5
    echo $md5 $diskname.iso>>MD5.txt
fi
