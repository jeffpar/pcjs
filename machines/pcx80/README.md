PCx80 is our 8080-based machine emulation module.  The code is derived from [PCx86]({{ site.github.pages }}/machines/pcx86/).

See the list of available [PCx80 Machines](/machines/pcx80/), which includes
[Space Invaders (1978)](/machines/arcade/invaders/) and the [DEC VT100 Terminal](/machines/dec/vt100/).

PCx80 is comprised of the following non-shared components, as listed in [machines.json](/machines/machines.json) (see the *pcx80.scripts* property):

  - [defines.js](/machines/pcx80/lib/defines.js)
  - [cpudef.js](/machines/pcx80/lib/cpudef.js)
  - [messages.js](/machines/pcx80/lib/messages.js)
  - [panel.js](/machines/pcx80/lib/panel.js)
  - [bus.js](/machines/pcx80/lib/bus.js)
  - [memory.js](/machines/pcx80/lib/memory.js)
  - [cpu.js](/machines/pcx80/lib/cpu.js)
  - [cpustate.js](/machines/pcx80/lib/cpustate.js)
  - [cpuops.js](/machines/pcx80/lib/cpuops.js)
  - [chipset.js](/machines/pcx80/lib/chipset.js)
  - [rom.js](/machines/pcx80/lib/rom.js)
  - [ram.js](/machines/pcx80/lib/ram.js)
  - [keyboard.js](/machines/pcx80/lib/keyboard.js)
  - [video.js](/machines/pcx80/lib/video.js)
  - [serial.js](/machines/pcx80/lib/serial.js)
  - [debugger.js](/machines/pcx80/lib/debugger.js)
  - [computer.js](/machines/pcx80/lib/computer.js)
