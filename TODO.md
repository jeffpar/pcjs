## TODO

### Changed on 2020-04-04

Reorganized the XML config files, like so:

  - Moved /configs/pcx86/xml/ folders to /configs/pcx86/:
      - chipset
      - fdc
      - hdc
      - keyboard
      - machine
      - panel
      - rom
      - video
  - Moved the following /configs/pcx86/machine/ folders to /configs/pcx86/machine/ibm/:
      - 4860
      - 5150
      - 5160
      - 5170
  - Moved all the new JSON config files from /configs/pcx86/ibm/ (in 5150/ and 5160/) into /configs/pcx86/machine/ibm/ (in 5150/ and 5160/)
  - Moved all the /configs/pcx86/ibm/keyboard/ files into /configs/pcx86/keyboard/:
      - 8042_1503033.TXT
      - 8042_INTERN.TXT
      - dasm42.c
      - index.md
      - us83-mobile.json
      - us83.json

Also added a catch-all page for information about supported IBM PC XT/AT hard drive types: /configs/pcx86/hdc/
