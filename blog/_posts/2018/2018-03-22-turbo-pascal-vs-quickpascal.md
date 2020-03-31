---
layout: post
title: Turbo Pascal vs. QuickPascal
date: 2018-03-22 10:00:00
permalink: /blog/2018/03/22/
machines:
  - id: ibm5170-msdos320-1
    type: pcx86
    state: /software/pcx86/lang/microsoft/pascal/quickpascal/1.00/state.json
    config: /configs/pcx86/xml/machine/5170/ega/640kb/rev3/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:1,path:"/harddisks/pcx86/10mb/MSDOS320-C400.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
    autoStart: true
    autoType: CD TP\rTURBO\r$5$0$altf\r$5$0\r$5$0\r$5$0$altr\r
  - id: ibm5170-msdos320-2
    type: pcx86
    state: /software/pcx86/lang/microsoft/pascal/quickpascal/1.00/state.json
    config: /configs/pcx86/xml/machine/5170/ega/640kb/rev3/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:1,path:"/harddisks/pcx86/10mb/MSDOS320-C400.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
    autoStart: true
    autoType: CD QP\rQP\r$10$ctrl$f4$1$altf$down\r$bslashtp\r\t\r\r$10$altr$down\r
---

Below are side-by-side PCjs machines running
[Borland Turbo Pascal 5.00](/software/pcx86/lang/borland/pascal/5.00/) and
[Microsoft QuickPascal 1.00](/software/pcx86/lang/microsoft/pascal/quickpascal/1.00/).  Make your browser window
nice and wide, and then sit back and be mesmerized.

We reveal who the winner is [below the fold](#whos-the-winner). 

{% include machine.html id="ibm5170-msdos320-1" %}

{% include machine.html id="ibm5170-msdos320-2" %}

---

### Who's The Winner?

PCjs, obviously.  This demo shows off several PCjs improvements, like the *autoType* feature,
making it easier to encode delays and specify special key sequences.

Here's an example of "injecting" Ctrl-F4, followed by a 1/10 second delay, followed by Alt-F:

    autoType: $ctrl$f4$1$altf

Any of the keys listed in the [PCx86 Keyboard's](/machines/pcx86/lib/keyboard.js) **SOFTCODES** table can be
injected by preceding them with a `$`, such as:

- `$esc`
- `$tab` (or \t)
- `$enter` (or \r)

Modifier keys, such as:

- `$ctrl`
- `$shift`
- `$alt`

are automatically released after a non-modifier key has been injected.

Delays from 1/10 to 9/10 of a second, specified with `$1` through `$9`, set the default delay between *all*
subsequent keys, whereas delays of one second or more (eg, `$10`, `$20`, etc) set a *one-time* delay.

For software that needs more than just injected keys, sophisticated scripts are possible.  Here's the "startMouse"
script for IBM's [TopView 1.01](/software/pcx86/env/ibm/topview/1.01/debugger/):

    wait Keyboard DOS;
    type Keyboard "$date\r$time\r";
    wait Keyboard;
    sleep 1000;
    select FDC listDrives "A:";
    select FDC listDisks "MS Mouse 5.00 (SYSTEM)";
    loadDisk FDC;
    wait FDC;
    type Keyboard "MOUSE\r";
    sleep 7000;
    type Keyboard "B:\rSETUP\r$50.3\r$20n\r$20y\r$20\r$20\r$20.1\r";

The above script automatically "inserts" the [Microsoft Mouse 5.00](/software/pcx86/dev/mouse/microsoft/5.00/) diskette
into drive A:, loads the mouse driver, and then configures TopView for serial mouse support.
