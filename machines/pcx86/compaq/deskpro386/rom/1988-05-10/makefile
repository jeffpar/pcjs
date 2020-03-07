#
# Steps to produce a binary ROM from a JSON-encoded ROM, and then disassemble and re-assemble it.
#

all: 1988-05-10-test.rom

1988-05-10.rom: 1988-05-10.json
	node ../../../../../../modules/filedump/bin/filedump --file=1988-05-10.json --output=1988-05-10.rom --format=rom

1988-05-10-test.nasm: 1988-05-10.rom
	ndisasm -o0x8000 1988-05-10.rom > 1988-05-10-test.nasm
	node ../../../../../../modules/textout/bin/textout --file=1988-05-10-test.nasm --nasm > temp.nasm
	mv temp.nasm 1988-05-10-test.nasm

1988-05-10-test.rom: 1988-05-10-test.nasm
	nasm -f bin 1988-05-10-test.nasm -l 1988-05-10-test.lst -o 1988-05-10-test.rom
