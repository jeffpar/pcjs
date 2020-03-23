---
layout: post
title: All Your Keys Are Belong To Us
date: 2018-02-15 10:00:00
permalink: /blog/2018/02/15/
machines:
  - id: ibm5150
    type: pcx86
    config: /configs/pcx86/xml/machine/5150/mda/64kb/machine.xml
---

There are a number of "key" challenges to emulating *all* the keys on IBM PC and PC AT keyboards, due to
differences that have evolved over time between the early PC keyboards and keyboards people are using today.

Modern keyboards, like the keyboard on my MacBook Pro, have some extra keys (like "F11" and "F12"), which are easily
ignored.  The bigger problem is missing keys.  The more obvious ones include:

- `Num-Lock`
- `Scroll-Lock`

which PCjs allows you to simulate by simply clicking on the "Num" and "Scroll" LED indicators in top right corner of
a PCjs machine.  Unfortunately, that doesn't help much when you need to type:

- `Ctrl-Num-Lock` (also known as *Ctrl-Pause*, this spins inside the ROM BIOS keyboard interrupt handler)
- `Ctrl-Scroll-Lock` (also known as *Ctrl-Break*, this is the only way to abort a BASIC `LIST` command, for example)

Less obvious missing keys are all the "numeric keypad" keys.  Granted, you can type any of `0` through `9`, `.`, `+`,
and `-` using other keys on your modern keyboard, but the PC had those other keys as well, so typing those "other" keys
won't make your DOS application happy if it requires input from the PC's numeric keypad.

Fortunately, your modern keyboard *does* contain many keys that map to the IBM PC's numeric keypad; those include:

- Left (`4`)
- Right (`6`)
- Up (`8`)
- Down (`2`)
- Fn-Delete (`.`)
- Fn-Left, aka Home (`7`)
- Fn-Right, aka End (`1`)
- Fn-Up, aka PgUp (`9`)
- Fn-Down, aka PgDn (`3`)

So if you press any of those keys, the corresponding IBM PC numeric keypad key will be pressed.  If the PC's "Num-Lock"
is ON, you'll see the corresponding numbers, and if it's OFF, you'll see the corresponding cursor movement -- although
that's dependent on what the underlying PC application does with the key.

Unfortunately, that still leaves a number of keys on the PC's keypad that cannot be typed directly:

- Insert (`0`)
- Plus (`+`)
- Minus (`-`)
- Center (`5`)
- Print Screen (`PrtSc`)
- Sys Req (`SysReq`) [PC AT keyboards only]

When you connect a full-size keyboard to your computer, with a real numeric keypad, it becomes possible to type a few
more of those keys.  For example, all browsers generate unique codes for the `+` and `-` keys on the numeric keypad.
Sadly, [the results](#browser-key-code-results) were mixed for other keys, including all the numeric keypad digits.
And since a lot of people aren't using full-size keyboards anymore, those results are largely moot.

And then there are keys that have simply evaporated over time, like `PrtSc` and `SysReq`.  The `SysReq` key never
got much attention, in part because it didn't exist on the original 83-key keyboard, and even software that required a
PC AT, like early versions of OS/2, chose to use key combinations like `Ctrl-Esc` instead of `SysReq`.  Go figure.

However, the `PrtSc` key did have several useful functions:

- `Shift-PrtSc` (prints the entire contents of the screen to LPT1)
- `Ctrl-PrtSc` (enables echo of DOS output to LPT1)

While `Shift-PrtSc` is handled entirely by the PC ROM BIOS, `Ctrl-PrtSc` is simply passed on to DOS, which converts
the key internally to `Ctrl-P`.  PC DOS uses `Ctrl-P` to toggle printer echo, while other OEM versions of DOS
use `Ctrl-P` to enable printer echo and `Ctrl-N` to disable it.

The problem of "untypable" keys can be worsened by whatever operating system and browser combination you're using.  For
example, if you're running Windows, then it intercepts a variety of Alt-key combinations, such as Alt-Tab, which means
that if you're running an old version of Windows inside a PCjs machine, that machine won't be able to receive Alt-Tab.

I've not fully addressed that problem yet, but I *have* started to define some alternative keyboard shortcuts in PCjs.
Two of the most useful ones are:

- Ctrl-Delete (mapped to `Ctrl-Scroll-Lock`, aka *Ctrl-Break*)
- Ctrl-Alt-Period (mapped to `Ctrl-Alt-Delete`)

On some modern operating systems, like macOS, Ctrl-Alt-Delete is not intercepted, so you may be able to type it directly.

But first, you need to understand which key is your *Delete* key.  On a MacBook Pro, you might think it's the key labeled
"delete", but you'd be wrong.  That key is actually your *Backspace* key.  To type a *Delete* key, you must hold your
"fn" key and *then* press "delete".  So, putting that all together, if you want to reboot a PCjs machine with `Ctrl-Alt-Delete`,
press "fn", "ctrl", "alt", and "delete".

Now, if you forget to hold the "fn" key, you might notice that your machine still reboots.  But that's not because you
actually typed the correct sequence; it's because of another handy shortcut that PCjs defined for you: Ctrl-Alt-Backspace,
like Ctrl-Alt-Period, is mapped to `Ctrl-Alt-Delete`.

### Soft Keyboards

When all else fails (or when you're running on a touchscreen device with no physical keyboard at all), PCjs now offers
the ultimate solution: soft keyboards.  Most PCjs machines now sport a `Keys` button that will show/hide a full-size
virtual keyboard.  PC and PC XT-class machines use IBM's original 83-key layout, while PC AT-class machines use IBM's
84-key layout.

These new "soft keyboards" should make PCjs machines more usable on iOS and other touch-based devices.  PCjs did (and still
does) work with the built-in iOS soft keyboard, but iOS has lots of annoying quirks and limitations, including:

- Shift keys don't generate *any* events
- All other keys generate *fake* events
- Lots of keys are missing (eg, no `Ctrl` or `Alt` keys)
- Keyboard layouts cannot be customized by web applications

By *fake* events, I mean that 1) no events are generated until a key is released (ie, when you lift your finger off the key),
and 2) all the generated events (the *down*, the *press*, and the *up*) arrive back-to-back, as if the key was pressed
and released instantly -- which is not how a real keyboard behaves.  Android soft keyboards are generally even worse, because
in most cases, no key events are generated until an entire line of input is "entered".

PCjs soft keyboards operate much more like the original IBM PC keyboards.  Keys not only *press* when you press them and
*release* when you release them, but they also *auto-repeat* when you *hold* them.  What a concept!  And they support multi-touch,
so you can type `Ctrl-C` or `Ctrl-Alt-Delete` exactly as you would on a real keyboard.

For users who only have a mouse or trackpad, you can still type any of those multi-key sequences by first double-clicking
any of the `Ctrl`, `Alt`, or `Shift` modifier keys; they will remain "locked" in the down position while you click other keys.
To "unlock" them, simply click them once more.

Check out the new and improved soft keyboard support in the machine below, or in any of the other
[PCx86 Machines](/devices/pcx86/machine/).

{% include machine.html id="ibm5150" %}

### Browser Key Code Results

The following table summarizes the key codes generated by various browsers running on macOS, using an Apple full-size
(109-key) wireless keyboard.  The data illustrates how access to more physical keys isn't really all that helpful, in part
because of inconsistent results across browsers.

|Browser |      |      |      |      |      |      |      |      |      |      |      |      |      |        |      |      |       |      |      |      |       |
|:-------|:---- |:---- |:---- |:---- |:---- |:---- |:---- |:---- |:---- |:---- |:---- |:---- |:---- |:------ |:---- |:---- |:------|:---- |:---- |:---- |:----- |
|        | Esc  | F1   | F2   | F3   | F4   | F5   | F6   | F7   | F8   | F9   | F10  | F11  | F12  | F13    | F14  | F15  | F16   | Vol- | Vol+ | Mute | Eject |
|Chrome  | 27   | 112  | 113  | 114  | 115  | 116  | 117  | 118  | 119  | 120  | 121  | 122  | 123  | 124    |      |      | 127   |      |      |      |       |
|Firefox | 27   | 112  | 113  | 114  | 115  | 116  | 117  | 118  | 119  | 120  | 121  | 122  | 123  | 44     |      |      | 127   |      |      |      |       |
|Safari  | 27   | 112  | 113  | 114  | 115  | 116  | 117  | 118  | 119  | 120  | 121  | 122  | 123  | 124    |      |      | 127   |      |      |      |       |
|        |      |      |      |      |      |      |      |      |      |      |      |      |      |        |      |      |       |      |      |      |       |
|        | ` ~  | 1 !  | 2 @  | 3 #  | 4 $  | 5 %  | 6 ^  | 7 &  | 8 *  | 9 (  | 0 )  | - _  | = +  | Del    | Help | Home | PgUp  | Clr  |  =   |  /   |  *    |
|Chrome  | 192  | 49   | 50   | 51   | 52   | 53   | 54   | 55   | 56   | 57   | 48   | 189  | 187  | 8      |      | 36   | 33    | 12   | 187  | 111  | 106   |
|Firefox | 192  | 49   | 50   | 51   | 52   | 53   | 54   | 55   | 56   | 57   | 48   | 173  | 61   | 8      |      | 36   | 33    | 12   | 61   | 111  | 106   |
|Safari  | 192  | 49   | 50   | 51   | 52   | 53   | 54   | 55   | 56   | 57   | 48   | 189  | 187  | 8      | 45   | 36   | 33    | 12   | 187  | 111  | 106   |
|        |      |      |      |      |      |      |      |      |      |      |      |      |      |        |      |      |       |      |      |      |       |
|        | Tab  |  Q   |  W   |  E   |  R   |  T   |  Y   |  U   |  I   |  O   |  P   |  [   |  ]   |  \     | Del  | End  | PgDn  |**7** |**8** |**9** |  -    |
|Chrome  | 9    | 81   | 87   | 69   | 82   | 84   | 89   | 85   | 73   | 79   | 80   | 219  | 221  | 220    | 46   | 35   | 34    | 55   | 56   | 57   | 109   |
|FireFox | 9    | 81   | 87   | 69   | 82   | 84   | 89   | 85   | 73   | 79   | 80   | 219  | 221  | 220    | 46   | 35   | 34    | 103  | 104  | 105  | 109   |
|Safari  | 9    | 81   | 87   | 69   | 82   | 84   | 89   | 85   | 73   | 79   | 80   | 219  | 221  | 220    | 46   | 35   | 34    | 103  | 104  | 105  | 109   |
|        |      |      |      |      |      |      |      |      |      |      |      |      |      |        |      |      |       |      |      |      |       |
|        | Caps |  A   |  S   |  D   |  F   |  G   |  H   |  J   |  K   |  L   |  ;   |  '   |      | Enter  |      |      |       |**4** |**5** |**6** |  +    |
|Chrome  | 20   | 65   | 83   | 68   | 70   | 71   | 72   | 74   | 75   | 76   | 186  | 222  |      | 13     |      |      |       | 52   | 53   | 54   | 107   |
|Firefox | 20   | 65   | 83   | 68   | 70   | 71   | 72   | 74   | 75   | 76   | 59   | 222  |      | 13     |      |      |       | 100  | 101  | 102  | 107   |
|Safari  | 20   | 65   | 83   | 68   | 70   | 71   | 72   | 74   | 75   | 76   | 186  | 222  |      | 13     |      |      |       | 100  | 101  | 102  | 107   |
|        |      |      |      |      |      |      |      |      |      |      |      |      |      |        |      |      |       |      |      |      |       |
|        | Shft |  Z   |  X   |  C   |  V   |  B   |  N   |  M   |  ,   |  .   |  /   |      |      | Shft   |      | Up   |       |**1** |**2** |**3** |       |
|Chrome  | 16   | 90   | 88   | 67   | 86   | 66   | 78   | 77   | 188  | 190  | 191  |      |      | 16     |      | 38   |       | 49   | 50   | 51   |       |
|Firefox | 16   | 90   | 88   | 67   | 86   | 66   | 78   | 77   | 188  | 190  | 191  |      |      | 16     |      | 38   |       | 97   | 98   | 99   |       |
|Safari  | 16   | 90   | 88   | 67   | 86   | 66   | 78   | 77   | 188  | 190  | 191  |      |      | 16     |      | 38   |       | 97   | 98   | 99   |       |
|        |      |      |      |      |      |      |      |      |      |      |      |      |      |        |      |      |       |      |      |      |       |
|        | Ctrl | Alt  | Cmd  |      |      |      | Spc  |      |      |      |      | Cmd  | Alt  | Ctrl   | Left | Down | Right |**0** |      |  .   | Enter |
|Chrome  | 17   | 18   | 91   |      |      |      | 32   |      |      |      |      | 93   | 18   | 17     | 37   | 40   | 39    | 48   |      | 110  | 13    |
|Firefox | 17   | 18   | 224  |      |      |      | 32   |      |      |      |      | 224  | 18   | 17     | 37   | 40   | 39    | 96   |      | 110  | 13    |
|Safari  | 17   | 18   | 91   |      |      |      | 32   |      |      |      |      | 93   | 18   | 17     | 37   | 40   | 39    | 96   |      | 110  | 13    |
