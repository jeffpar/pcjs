### PCx86 Implementation

PCx86 is the emulation module powering all our IBM PCs and compatibles.

This module divides PC functionality into variety of logical and visual components.
In general, each JavaScript file is responsible for a single component or set of related components (eg,
[chipset.js](modules/v2/chipset.js)).  Most components represent familiar PC devices, such as video cards, disk drive
controllers, etc.

*Component* is an overloaded term, since **Component** is also the name of the shared base class in
[component.js](../modules/v2/component.js) used by most machine components.  A few low-level components
(eg, the **Memory** and **State** components, the Card class of the **Video** component, the Color and Rectangle
classes of the **Panel** component, etc) do not extend **Component**, so don't assume that every PCx86 object has
access to [component.js](../modules/v2/component.js) methods.

Examples of non-device components include visual components like [panel.js](modules/v2/panel.js) and
[debugger.js](modules/v2/debugger.js), and sub-components like [x86ops.js](modules/v2/x86ops.js) and [x86func.js](modules/v2/x86func.js),
which separate the CPU functionality of [x86.js](modules/v2/x86.js) into more manageable pieces.

These components should always be loaded or compiled in the order listed by the *pcx86.modules* property in
[machines.json](https://github.com/jeffpar/pcjs/blob/master/machines/machines.json), which includes all the necessary
[shared components](../modules/v2/) as well.

At the time of this writing, the recommended order is:

  - [shared/defines.js](../modules/v2/defines.js)
  - [shared/diskapi.js](../modules/v2/diskapi.js)
  - [shared/dumpapi.js](../modules/v2/dumpapi.js)
  - [shared/reportapi.js](../modules/v2/reportapi.js)
  - [shared/userapi.js](../modules/v2/userapi.js)
  - [shared/strlib.js](../modules/v2/strlib.js)
  - [shared/usrlib.js](../modules/v2/usrlib.js)
  - [shared/weblib.js](../modules/v2/weblib.js)
  - [shared/component.js](../modules/v2/component.js)
  - [pcx86/defines.js](modules/v2/defines.js)
  - [pcx86/x86.js](modules/v2/x86.js)
  - [pcx86/interrupts.js](modules/v2/interrupts.js)
  - [pcx86/message.js](modules/v2/message.js)
  - [pcx86/panel.js](modules/v2/panel.js)
  - [pcx86/bus.js](modules/v2/bus.js)
  - [pcx86/memory.js](modules/v2/memory.js)
  - [pcx86/cpu.js](modules/v2/cpu.js)
  - [pcx86/cpux86.js](modules/v2/cpux86.js)
  - [pcx86/fpux86.js](modules/v2/fpux86.js)
  - [pcx86/segx86.js](modules/v2/segx86.js)
  - [pcx86/x86func.js](modules/v2/x86func.js)
  - [pcx86/x86help.js](modules/v2/x86help.js)
  - [pcx86/x86mods.js](modules/v2/x86mods.js)
  - [pcx86/x86ops.js](modules/v2/x86ops.js)
  - [pcx86/x86op0f.js](modules/v2/x86op0f.js)
  - [pcx86/chipset.js](modules/v2/chipset.js)
  - [pcx86/rom.js](modules/v2/rom.js)
  - [pcx86/ram.js](modules/v2/ram.js)
  - [pcx86/keyboard.js](modules/v2/keyboard.js)
  - [pcx86/video.js](modules/v2/video.js)
  - [pcx86/parallel.js](modules/v2/parallel.js)
  - [pcx86/serial.js](modules/v2/serial.js)
  - [pcx86/mouse.js](modules/v2/mouse.js)
  - [pcx86/disk.js](modules/v2/disk.js)
  - [pcx86/fdc.js](modules/v2/fdc.js)
  - [pcx86/hdc.js](modules/v2/hdc.js)
  - [pcx86/debugger.js](modules/v2/debugger.js)
  - [pcx86/computer.js](modules/v2/computer.js)
  - [shared/state.js](../modules/v2/state.js)
  - [shared/embed.js](../modules/v2/embed.js)
  - [shared/save.js](../modules/v2/save.js)

Some of the components *can* be reordered or even omitted (eg, [debugger.js](modules/v2/debugger.js) or
[embed.js](../modules/v2/embed.js)), but you should observe the following:

  - [component.js](../modules/v2/component.js) must be listed before any component that extends **Component**
  - [panel.js](modules/v2/panel.js) should be loaded early to initialize the Debugger controls (if any) as soon as possible
  - [computer.js](modules/v2/computer.js) should be the last device component, as it supervises and notifies all the other device components

To minimize ordering requirements, the init() handlers and constructors of all components should avoid
referencing other components.  Device components should define an initBus() notification handler, which the
*Computer* component will call after it has created/initialized the *Bus* component.

### Major Features

[List of major existing features goes here]

###Experimental Features

#### BackTrack Support

One experimental PCx86 feature is known as BackTrack Support, or simply BackTracks.  When BackTracks are enabled, every
memory location (at the byte level) and every general-purpose byte register may have an optional link back to its
source.  These links are called BackTrack indexes.

All the code that a virtual machine initially executes enters the machine either via ROM or disk sectors, and as that
code executes, the machine is loading data into registers from memory locations and/or I/O ports and writing the results
to other memory locations and/or I/O ports.  BackTracks keep track of that data flow, allowing us to examine the history
of any piece of data at any time, down to the byte level; while this feature could be extended to the bit level, it
would make the feature dramatically more expensive, both in terms of size and speed.

A BackTrack index is encoded as a 32-bit value with three parts:

- Bits 0-8: 9-bit BackTrack object offset (0-511)
- Bits 9-15: 7-bit type and access info
- Bits 16-30: 15-bit BackTrack object number (1-32767, 0 reserved for dynamic data)

This represents a total of 31 bits, with bit 31 reserved.

For example, look at one of the last things a ROM does during boot: loading a disk sector into RAM.  It will be up to
the drive controller (or DMA controller, if used) to create a BackTrack object representing the sector that was read,
adding that object to the global BackTrack object array, and then associating the corresponding BackTrack index with
the first byte of RAM where the sector was loaded.  Subsequent bytes of RAM containing the rest of the sector will refer
to the same BackTrack object, using BackTrack indexes containing offsets 1-511.

**WARNING**: BackTrack support is controlled by a global define (**BACKTRACK** in [defines.js](modules/v2/defines.js)) which is
*false* in the compiled version of PCx86, because it imposes a huge performance penalty.  The only way to use the feature
is with a [machine](https://www.pcjs.org/blog/2015/01/17/) explicitly configured to use "uncompiled" source *and* with the PCjs Debugger
enabled (since, without the debugger, the feature is more or less useless).

Machines using "uncompiled" source also enable additional checks controlled by the global define **DEBUG**, which is
another reason those machines are much slower.  And **DEBUG** must be *true* for **BACKTRACK** to be enabled.
As an aside, you can selectively disable either of those settings at run-time, by adding *debug=false* or *backtrack=false*
parameters to an "uncompiled" machine's URL; make sure there's also a *?* separating the original URL from any parameters.

### Resources

#### Microsoft Bus Mouse

See this [Microsoft Bus Mouse implementation](https://www.virtualbox.org/browser/vbox/trunk/src/VBox/ExtPacks/BusMouseSample/DevBusMouse.cpp),
written by [Michal Necasek](http://www.os2museum.com) for Oracle's [VirtualBox](https://www.virtualbox.org).

NOTE: The above file has already moved once (without any redirect), so just in case that happens again, we've saved a [copy](/machines/pcx86/devices/microsoft/mouse/virtualbox/BusMouse.cpp).

It references two Microsoft KnowledgeBase (KB) Articles of note:

- [Q12230: IRQ Settings and Mouse Installation](https://jeffpar.github.io/kbarchive/kb/012/Q12230/)
- [Q46369: InPort/Bus Mouse Comparison and Overview](https://jeffpar.github.io/kbarchive/kb/046/Q46369/)

Over the years, Microsoft has sporadically published and then deleted those and many other KnowledgeBase articles,
for reasons known only to itself.  See the blog post [Corporations Are Crappy Archivists](https://www.pcjs.org/blog/2017/10/13/) for further
discussion.
