### PCx80 Implementation

PCx80 is our 8080-based machine emulation module.  The code is derived from [PCx86]({{ site.github.pages }}/machines/pcx86/).

See the list of available [PCx80 Machines](/machines/pcx80/), which includes
[Space Invaders (1978)](/machines/arcade/invaders/) and the [DEC VT100 Terminal](/machines/dec/vt100/).

PCx80 is comprised of the following non-shared components, as listed in [machines.json](/machines/machines.json) (see the *pcx80.modules* property):

  - [defines.js](modules/v2/defines.js)
  - [cpudef.js](modules/v2/cpudef.js)
  - [message.js](modules/v2/message.js)
  - [panel.js](modules/v2/panel.js)
  - [bus.js](modules/v2/bus.js)
  - [memory.js](modules/v2/memory.js)
  - [cpu.js](modules/v2/cpu.js)
  - [cpustate.js](modules/v2/cpustate.js)
  - [cpuops.js](modules/v2/cpuops.js)
  - [chipset.js](modules/v2/chipset.js)
  - [rom.js](modules/v2/rom.js)
  - [ram.js](modules/v2/ram.js)
  - [keyboard.js](modules/v2/keyboard.js)
  - [video.js](modules/v2/video.js)
  - [serial.js](modules/v2/serial.js)
  - [debugger.js](modules/v2/debugger.js)
  - [computer.js](modules/v2/computer.js)
