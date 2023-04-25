#
# Steps to regenerate a ROM by disassembling and re-assembling the JSON-encoded ROM.
#

FIMG=node ../../../../../../tools/fileimage/fileimage.js
TEXTOUT=node ../../../../../../tools/misc/old/textout/bin/textout.js

all: tmp tmp/1988-01-28.lst tmp/1988-01-28-regen.rom

tmp:
	mkdir tmp

tmp/1988-01-28.lst: 1988-01-28.asm
	nasm -f bin 1988-01-28.asm -l tmp/1988-01-28.lst -o tmp/1988-01-28.rom

tmp/1988-01-28.rom: 1988-01-28.json
	$(FIMG) --file=1988-01-28.json --output=tmp/1988-01-28.rom --format=rom

tmp/1988-01-28-regen.asm: tmp/1988-01-28.rom
	ndisasm -o0x8000 -se105h -se05ah -se6ffh -sf025h -sf8aah tmp/1988-01-28.rom > tmp/1988-01-28-regen.asm
	$(TEXTOUT) --file=tmp/1988-01-28-regen.asm --nasm > tmp/t.asm
	mv tmp/t.asm tmp/1988-01-28-regen.asm

tmp/1988-01-28-regen.rom: tmp/1988-01-28-regen.asm
	nasm -f bin tmp/1988-01-28-regen.asm -l tmp/1988-01-28-regen.lst -o tmp/1988-01-28-regen.rom
