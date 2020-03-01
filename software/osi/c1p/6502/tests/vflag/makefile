CA65 = ../../../../../projects/other/cc65/bin/ca65
LD65 = ../../../../../projects/other/cc65/bin/ld65
LD65_CFG = ../../../../../projects/other/cc65/cfg
ECHO = @/bin/echo
FILEDUMP = node ../../../../../modules/filedump/bin/filedump

CA65_OPTS =
LD65_OPTS = --cfg-path $(LD65_CFG) --target none

all: vflag.65v vflag.json

vflag.obj: vflag.asm
	$(CA65) vflag.asm -I ../.. -l vflag.lst -o vflag.obj

vflag.bin: vflag.obj
	$(LD65) $(LD65_OPTS) $+ -o $@

vflag.65v: vflag.bin
	$(ECHO) -n ".0200/" > vflag.65v
	hexdump -e '1/1 "%02X\n"' -v vflag.bin >> vflag.65v
	$(ECHO) -n ".0200G" >> vflag.65v

vflag.json: vflag.65v
	$(FILEDUMP) --file=vflag.65v --format=bytes --output=vflag.json --overwrite --comments
