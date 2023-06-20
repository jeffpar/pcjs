#
# Steps to produce a binary ROM from a JSON-encoded ROM, and then disassemble and re-assemble it.
#

FIMG=node ../../../../../../tools/fileimage/fileimage.js
TEXTOUT=node ../../../../../../tools/old/textout/bin/textout.js

all: 1989-04-14.json5 1989-04-14-test.rom

1989-04-14.json5: archive/109592-005.U11.bin archive/109591-005.U13.bin
	$(FIMG) --file=archive/109592-005.U11.bin --merge=archive/109591-005.U13.bin --output=1989-04-14.json5 --comments

1989-04-14.rom: 1989-04-14.json5
	$(FIMG) --file=1989-04-14.json5 --output=1989-04-14.rom --format=rom

1989-04-14-test.nasm: 1989-04-14.rom
	ndisasm -o0x8000 1989-04-14.rom > 1989-04-14-test.nasm
	$(TEXTOUT) --file=1989-04-14-test.nasm --nasm > temp.nasm
	mv temp.nasm 1989-04-14-test.nasm

1989-04-14-test.rom: 1989-04-14-test.nasm
	nasm -f bin 1989-04-14-test.nasm -l 1989-04-14-test.lst -o 1989-04-14-test.rom
