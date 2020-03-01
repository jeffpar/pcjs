CA65 = ../../../../../projects/other/cc65/bin/ca65
LD65 = ../../../../../projects/other/cc65/bin/ld65
LD65_CFG = ../../../../../projects/other/cc65/cfg
ECHO = @/bin/echo
FILEDUMP = node ../../../../../modules/filedump/bin/filedump

CA65_OPTS =
LD65_OPTS = --cfg-path $(LD65_CFG) --target none

all: bcd.65v bcd.json

bcd.obj: bcd.asm
	$(CA65) bcd.asm -I ../.. -l bcd.lst -o bcd.obj

bcd.bin: bcd.obj
	$(LD65) $(LD65_OPTS) $+ -o $@

bcd.65v: bcd.bin
	$(ECHO) -n ".0200/" > bcd.65v
	hexdump -e '1/1 "%02X\n"' -v bcd.bin >> bcd.65v
	$(ECHO) -n ".0200G" >> bcd.65v

bcd.json: bcd.65v
	$(FILEDUMP) --file=bcd.65v --format=bytes --output=bcd.json --overwrite --comments
