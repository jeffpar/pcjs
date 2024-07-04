#!/bin/bash
cd ../../disks
git clone https://github.com/microsoft/MS-DOS.git
cp ../ms-dos/v4.0/fixes/SETENV.BAT MS-DOS/v4.0/src/
cp -p ../ms-dos/v4.0/fixes/SELECT/* MS-DOS/v4.0/src/SELECT/
cp -p ../ms-dos/v4.0/fixes/XMAEM/MAKEFILE MS-DOS/v4.0/src/DEV/XMAEM/
cp -p ../ms-dos/v4.0/fixes/MEMM/MAKEFILE MS-DOS/v4.0/src/MEMM/MEMM/
cd MS-DOS/v4.0
pc.js --system=msdos --version=3.30 --target=30M --normalize
