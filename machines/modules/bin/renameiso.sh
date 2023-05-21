#!/bin/bash
if [ -z "$3" ]; then
    echo "usage: renameiso.sh [starting CD] [ending CD] [new ID]"
    exit 1
fi
for ((i=$1; i<=$2; i++)); do
    disk=$(printf "CD%03d" $i)
    ls -1 TechNet-${disk}* | sed -E "s|(.*)(${disk})(.*)|mv -n \1\2\3 \1${3}-\2\3|"
    echo sed -i.bak -E "\"s|TechNet-${disk}|TechNet-${3}-${disk}|\"" MD5.txt
done
