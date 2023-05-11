#!/bin/bash
if [ -z "$1" ]; then
    echo "usage: dumpiso.sh [ISO file]"
    exit 1
fi
if [ ! -f "$1" ]; then
    echo "missing ISO: $1"
    exit 1
fi
diskName=$(basename "$1" .iso)
echo Dumping $1
if [ -f padding ]; then
    tail -b 4 "${diskName}.iso" | diff - padding > /dev/null
    if [ $? -ne 0 ]; then
        echo Padding $1
        chmod +w "${diskName}.iso"
        cat padding >> "${diskName}.iso"
        chmod -w "${diskName}.iso"
    fi
fi
hdiutil attach "${diskName}.iso" | grep -e "/Volumes" > disk
if grep -q -e "^/dev/" disk; then
    vol=`grep -o -e "/Volumes/.*" disk`
    ls -alRT "$vol" > "${diskName}.txt"
    hdiutil detach `grep -o -e "^/dev/[^ ]*" disk` > /dev/null
else
    echo "error: unable to mount ${diskName}.iso"
fi
rm disk
echo Summing $1
md5=`md5 -q "$1"`
grep -e "$1" MD5.txt
if [ $? -eq 0 ]; then
    echo Updating $1 checksum: $md5
    sed -i.bak -E "s|.* ${1}|${md5} ${1}|" MD5.txt
else
    echo Adding $1 checksum: $md5
    echo $md5 $1>>MD5.txt
fi
