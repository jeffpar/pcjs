#!/bin/bash
cd ../../disks
git clone https://github.com/microsoft/MS-DOS.git
cp ../ms-dos/v4.0/fixes/SETENV.BAT MS-DOS/v4.0/src/
cp ../ms-dos/v4.0/fixes/SELECT/* MS-DOS/v4.0/src/SELECT/
cd MS-DOS/v4.0
pc.js --maxfiles=3000 --system=msdos --version=3.30 --target=30M
