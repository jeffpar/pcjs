---
layout: page
title: Space Invaders (1978)
permalink: /machines/arcade/invaders/
redirect_from: /devices/pc8080/machine/invaders/
machines:
  - id: invaders
    type: invaders
    name: Space Invaders
    config: /configs/invaders/invaders.json
    layout: /_includes/invaders/invaders-diag.html
---

This 8080-based PCjs machine emulates the original Space Invaders arcade machine.

Hard-coded key mappings include:

- 1: One Player
- 2: Two Player
- 3: Insert Coin
- A: Move Left
- D: Move Right
- L: Fire Missile

The PCjs debugger, along with a few [Notes](#space-invaders-emulation-notes), are provided below.

{% include machine.html id="invaders" %}

### Space Invaders Emulation Notes

For touch-screen devices like the iPhone and iPad, there are "touch regions" across the top of the virtual
monitor that correspond to first three buttons:

- Top Left: One Player
- Top Right: Two Players
- Top Center: Insert Coin

and regions across the bottom that correspond to the last three buttons:

- Left Side: Move Left and Move Right
- Right Side: Fire

This is purely experimental and may only work in portrait mode; landscape and full-screen modes will probably need
more work to make them usable.

### Space Invaders Hardware Notes

#### Memory Map

	0000-1FFF  r   ROM code
	2000-23FF  rw  RAM
	2400-3FFF  rw  bitmapped screen (224x256)

#### I/O Map

	00         r
	01         r   control inputs
	                bit 7
	                bit 6    right
	                bit 5    left
	                bit 4    fire
	                bit 3
	                bit 2    1 player start
	                bit 1    2 player start
	                bit 0    coin slot
	02         r   control inputs
	                bit 7    0=display coin info
	                bit 6    right 2
	                bit 5    left 2
	                bit 4    fire 2
	                bit 3    bonus (1500,1000) / preset mode
	                bit 2    1=tilt
	                bit 0-1  initial lives (3,4,5,6) / (3,4)
	02          w  shift count (0-7)
	03         r   shifted value (low then high)
	03          w  sound
	                bit 4    bonus base
	                bit 3    invader hit
	                bit 2    base hit
	                bit 1    base fire
	                bit 0    saucer
	04          w  value to shift
	05          w  sound
	                bit 5    flip video
	                bit 4    saucer hit
	                bit 3    invader movement 4
	                bit 2    invader movement 3
	                bit 1    invader movement 2
	                bit 0    invader movement 1
	06          w  watchdog timer clear

Note that, unlike other emulators, PCjs machines have a [Bus](/machines/lib/bus/bus.js) architecture,
allowing components to "plug in" different kinds of memory or memory-mapped devices at different addresses,
and to register specific functions for specific I/O ports.	

For example, Space Invaders has 8Kb of ROM at addresses 0x0000 through 0x1FFF, which means that if any 8080 code
attempts to write to those addresses, nothing should happen.  Unfortunately, most emulators treat the entire address
space as one contiguous array of bytes.  Which means either that the ROM is susceptible to corruption *or* that every
write operation must check the address to determine its validity, which hurts the performance of *all* writes.

In PCjs machines, all writes are equally fast, and all ROMs are fully protected.  An exception is made for the
Debugger, which allows you to use the "e" command to modify ("patch") ROM code on the fly, but that is completely
outside and independent of the 8080 code being emulated.

### Other Online References

See [Computer Archeology](http://www.computerarcheology.com/Arcade/SpaceInvaders/) for an excellent collection
of materials on the original Space Invaders, including commented ROM disassemblies. 
