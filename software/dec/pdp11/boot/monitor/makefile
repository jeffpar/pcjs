#
# Don't have macro11?  Make yourself a copy from https://github.com/shattered/macro11
#

all: BOOTMON.json BOOTMON.md

BOOTMON.txt: BOOTMON.mac
	macro11 BOOTMON.mac -l BOOTMON.txt

BOOTMON.json: BOOTMON.txt
	node ../../../../modules/filedump/bin/filedump --file=BOOTMON.txt --format=octal --output=BOOTMON.json --load=0xC000 --exec=0xC000 --overwrite

BOOTMON.md: BOOTMON.mac
	tabify -8 -d BOOTMON.mac > BOOTMON.md
