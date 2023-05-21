#!/bin/bash
volume=$1
if [ -z "$volume" ]; then
    volume="CD_partition_scheme"
fi
drive=`diskutil list | grep -E "$volume" | head -n 1 | sed -E "s|.*(disk[0-9]*)$|\1|"`
if [ -z "${drive}" ]; then
    volume="Apple_partition_scheme"
    drive=`diskutil list | grep -E "$volume" | head -n 1 | sed -E "s|.*(disk[0-9]*)$|\1|"`
fi
if [ -z "${drive}" ]; then
    echo "cannot find disc"
    exit 1
fi
next=1
if [ -f "next" ]; then
    next=`cat next`
fi
diskNum=$(printf "%03d" ${next})
if [ "$volume" == "CD_partition_scheme" ]; then
    diskID=CD${diskNum}
    if [ -b /dev/${drive}s0 ]; then
        diskDrive=${drive}s0
    elif [ -b /dev/${drive}s1 ]; then
        diskDrive=${drive}s1
    else
        echo "cannot find disc volume"
        exit 1
    fi
else
    diskID=DVD${diskNum}
    diskDrive=${drive}
fi
diskLabel=PCjs
if [ -f "label" ]; then
    diskLabel=`cat label`
fi
diskVol=`df | grep -e "/dev/${drive}[^0-9]" | sed -E "s|.*/Volumes/(.*)|\1|" | tr '\n' ' ' | sed -E "s| *$||"`
if [ -z "${diskVol}" ]; then
    diskName=${diskLabel}-${diskID}
    if [ "${diskID}" == "CD${diskNum}" ]; then
        sudo mkdir /Volumes/${diskID}
        sudo mount_cd9660 -er /dev/${diskDrive} /Volumes/${diskID} > /dev/null
        if [ $? -eq 0 ]; then
            ls -alRT /Volumes/${diskID} > "${diskName}.txt"
            sudo umount /dev/${diskDrive}
        fi
        sudo rmdir /Volumes/${diskID}
    fi
    sudo diskutil unmountDisk /dev/${drive}
    echo Creating ${diskName}.bin from ${drive}
    sudo dd if=/dev/${drive} of="${diskName}.bin"
    sudo chown $USER "${diskName}.bin"
    if [ ! -f "${diskName}.bin" ]; then
        exit 1
    fi
    drutil eject
    if [ -f "${diskName}.iso" ]; then
        chmod +w "${diskName}.iso"
    fi
    node $PCJS/machines/shared/bin/bin2iso.js "${diskName}.bin" "${diskName}.iso" --overwrite
    if [ $? -eq 0 ]; then
        chmod a-w "${diskName}.iso"
        rm "${diskName}.bin"
    else
        echo error converting ${diskName}.bin
        exit 1
    fi
else
    diskName=${diskLabel}-${diskID}-${diskVol}
    sudo diskutil unmountDisk /dev/${drive}
    echo Creating ${diskName}.iso from ${diskDrive}
#   hdiutil makehybrid -iso -joliet -o "${diskName}.iso" /dev/${drive}
    sudo dd if=/dev/${diskDrive} of="${diskName}.iso"
    sudo chown $USER "${diskName}.iso"
    if [ ! -f "${diskName}.iso" ]; then
        exit 1
    fi
    drutil eject
    chmod a-w "${diskName}.iso"
fi
next=`expr ${next} + 1`
echo ${next}>next
dumpiso.sh "${diskName}.iso"
