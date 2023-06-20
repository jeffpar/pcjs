#
# Steps to produce a binary ROM from a JSON-encoded ROM, and then disassemble and re-assemble it.
#

FIMG=node ../../../../../../tools/fileimage/fileimage.js
TEXTOUT=node ../../../../../../tools/old/textout/bin/textout.js

all: 1988-05-10.json5 1988-05-10-test.rom

1988-05-10.json5: 109591-003.hex 109592-003.hex
	$(FIMG) --file=109592-003.hex --merge=109591-003.hex --output=1988-05-10.json5 --comments

1988-05-10.rom: 1988-05-10.json5
	$(FIMG) --file=1988-05-10.json5 --output=1988-05-10.rom --format=rom

1988-05-10-test.nasm: 1988-05-10.rom
	ndisasm -o0x8000 1988-05-10.rom > 1988-05-10-test.nasm
	$(TEXTOUT) --file=1988-05-10-test.nasm --nasm > temp.nasm
	mv temp.nasm 1988-05-10-test.nasm

1988-05-10-test.rom: 1988-05-10-test.nasm
	nasm -f bin 1988-05-10-test.nasm -l 1988-05-10-test.lst -o 1988-05-10-test.rom
