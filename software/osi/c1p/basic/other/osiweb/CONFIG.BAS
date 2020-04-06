#
# uk101.tcl -- uk101 hardware configuration
#
processor 6502
device ram 0x0000 0x4000

device rom 0x8000 0x0800 "uk101/roms/toolkit-ii"
device rom 0x8800 0x0800 "uk101/roms/encoder"
device rom 0xf800 0x0800 "uk101/roms/cegmon"
device rom 0xa000 0x2000 "uk101/roms/basic"

device display 0xd000 64 32 "uk101/chars"
device kbduk_tk 0xdf00
device tapeuk_tk 0xf000 0x0100

