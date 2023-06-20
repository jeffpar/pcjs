#
# Steps to regenerate a ROM by disassembling and re-assembling the JSON-encoded ROM.
#

FIMG=node ../../../../../../tools/fileimage/fileimage.js
TEXTOUT=node ../../../../../../tools/old/textout/bin/textout.js

all: 1988-01-28.json5 tmp tmp/1988-01-28.lst tmp/1988-01-28-regen.rom

tmp:
	mkdir tmp

1988-01-28.json5: 109591-001.hex 109592-001.hex
	$(FIMG) --file=109592-001.hex --merge=109591-001.hex --output=1988-01-28.json5 --comments

tmp/1988-01-28.lst: 1988-01-28.asm
	nasm -f bin 1988-01-28.asm -l tmp/1988-01-28.lst -o tmp/1988-01-28.rom

tmp/1988-01-28.rom: 1988-01-28.json5
	$(FIMG) --file=1988-01-28.json5 --output=tmp/1988-01-28.rom --format=rom

tmp/1988-01-28-regen.asm: tmp/1988-01-28.rom
	ndisasm -o0x8000 -se105h -se05ah -se6ffh -sf025h -sf8aah tmp/1988-01-28.rom > tmp/1988-01-28-regen.asm
	$(TEXTOUT) --file=tmp/1988-01-28-regen.asm --nasm > tmp/t.asm
	mv tmp/t.asm tmp/1988-01-28-regen.asm

tmp/1988-01-28-regen.rom: tmp/1988-01-28-regen.asm
	nasm -f bin tmp/1988-01-28-regen.asm -l tmp/1988-01-28-regen.lst -o tmp/1988-01-28-regen.rom
