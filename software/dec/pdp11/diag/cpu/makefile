#
# Don't have macro11?  Make yourself a copy from https://github.com/shattered/macro11
#

all: XCPA.json

XCPA.txt: XCPA.mac
	macro11 XCPA.mac -l XCPA.txt

XCPA.json: XCPA.txt
	node ../../../../modules/filedump/bin/filedump --file=XCPA.txt --format=octal --output=XCPA.json --overwrite
