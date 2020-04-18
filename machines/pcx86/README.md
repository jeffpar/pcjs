### PCx86 Implementation

PCx86 is the emulation module powering all our IBM PCs and compatibles.

This module divides PC functionality into variety of logical and visual components.
In general, each JavaScript file is responsible for a single component or set of related components (eg,
[chipset.js](lib/chipset.js)).  Most components represent familiar PC devices, such as video cards, disk drive
controllers, etc.

*Component* is an overloaded term, since **Component** is also the name of the shared base class in
[component.js](../shared/lib/component.js) used by most machine components.  A few low-level components
(eg, the **Memory** and **State** components, the Card class of the **Video** component, the Color and Rectangle
classes of the **Panel** component, etc) do not extend **Component**, so don't assume that every PCx86 object has
access to [component.js](../shared/lib/component.js) methods.

Examples of non-device components include visual components like [panel.js](lib/panel.js) and
[debugger.js](lib/debugger.js), and sub-components like [x86ops.js](lib/x86ops.js) and [x86func.js](lib/x86func.js),
which separate the CPU functionality of [x86.js](lib/x86.js) into more manageable pieces.

These components should always be loaded or compiled in the order listed by the *pcx86.scripts* property in
[machines.json](https://github.com/jeffpar/pcjs/blob/master/_data/machines.json), which includes all the necessary
[shared components](../shared/lib/) as well.

At the time of this writing, the recommended order is:

  - [shared/defines.js](../shared/lib/defines.js)
  - [shared/diskapi.js](../shared/lib/diskapi.js)
  - [shared/dumpapi.js](../shared/lib/dumpapi.js)
  - [shared/reportapi.js](../shared/lib/reportapi.js)
  - [shared/userapi.js](../shared/lib/userapi.js)
  - [shared/strlib.js](../shared/lib/strlib.js)
  - [shared/usrlib.js](../shared/lib/usrlib.js)
  - [shared/weblib.js](../shared/lib/weblib.js)
  - [shared/component.js](../shared/lib/component.js)
  - [pcx86/defines.js](lib/defines.js)
  - [pcx86/x86.js](lib/x86.js)
  - [pcx86/interrupts.js](lib/interrupts.js)
  - [pcx86/messages.js](lib/messages.js)
  - [pcx86/panel.js](lib/panel.js)
  - [pcx86/bus.js](lib/bus.js)
  - [pcx86/memory.js](lib/memory.js)
  - [pcx86/cpu.js](lib/cpu.js)
  - [pcx86/cpux86.js](lib/cpux86.js)
  - [pcx86/fpux86.js](lib/fpux86.js)
  - [pcx86/segx86.js](lib/segx86.js)
  - [pcx86/x86func.js](lib/x86func.js)
  - [pcx86/x86help.js](lib/x86help.js)
  - [pcx86/x86mods.js](lib/x86mods.js)
  - [pcx86/x86ops.js](lib/x86ops.js)
  - [pcx86/x86op0f.js](lib/x86op0f.js)
  - [pcx86/chipset.js](lib/chipset.js)
  - [pcx86/rom.js](lib/rom.js)
  - [pcx86/ram.js](lib/ram.js)
  - [pcx86/keyboard.js](lib/keyboard.js)
  - [pcx86/video.js](lib/video.js)
  - [pcx86/parallel.js](lib/parallel.js)
  - [pcx86/serial.js](lib/serial.js)
  - [pcx86/mouse.js](lib/mouse.js)
  - [pcx86/disk.js](lib/disk.js)
  - [pcx86/fdc.js](lib/fdc.js)
  - [pcx86/hdc.js](lib/hdc.js)
  - [pcx86/debugger.js](lib/debugger.js)
  - [pcx86/computer.js](lib/computer.js)
  - [shared/state.js](../shared/lib/state.js)
  - [shared/embed.js](../shared/lib/embed.js)
  - [shared/save.js](../shared/lib/save.js)

Some of the components *can* be reordered or even omitted (eg, [debugger.js](lib/debugger.js) or
[embed.js](../shared/lib/embed.js)), but you should observe the following:

  - [component.js](../shared/lib/component.js) must be listed before any component that extends **Component**
  - [panel.js](lib/panel.js) should be loaded early to initialize the Debugger controls (if any) as soon as possible
  - [computer.js](lib/computer.js) should be the last device component, as it supervises and notifies all the other device components

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

**WARNING**: BackTrack support is controlled by a global define (**BACKTRACK** in [defines.js](lib/defines.js)) which is
*false* in the compiled version of PCx86, because it imposes a huge performance penalty.  The only way to use the feature
is with a [machine](/blog/2015/01/17/) explicitly configured to use "uncompiled" source *and* with the PCjs Debugger
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

- [Q12230: IRQ Settings and Mouse Installation](/pubs/pc/reference/microsoft/kb/Q12230/)
- [Q46369: InPort/Bus Mouse Comparison and Overview](/pubs/pc/reference/microsoft/kb/Q46369/)

Over the years, Microsoft has sporadically published and then deleted those and many other KnowledgeBase articles,
for reasons known only to itself.  See the blog post [Corporations Are Crappy Archivists](/blog/2017/10/13/) for further
discussion.
