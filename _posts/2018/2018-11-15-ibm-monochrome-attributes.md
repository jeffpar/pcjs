---
layout: post
title: IBM Monochrome Attributes
date: 2018-11-15 10:00:00
permalink: /blog/2018/11/15/
preview: /blog/images/mda-attributes.png
machines:
  - id: ibm5150
    type: pcx86
    config: /devices/pcx86/machine/5150/mda/256kb/debugger/machine.xml
    autoType: |
      $date
      $time
      BASIC
      10 DEFINT A-Z:DEF SEG=&HB000
      20 CLS:V=0:OUT &H3B8,&H9
      25 REM FOR EVERY ATTRIBUTE A, DISPLAY THE ATTRIBUTE IN HEX
      30 FOR A=0 TO 255
      35 H=A\\16:GOSUB 60:H=A MOD 16:GOSUB 60:H=16:GOSUB 60
      40 IF A MOD 16=15 THEN V=V+64:PRINT
      45 NEXT A
      50 REM OUT &H3B8,&H29 TO RE-ENABLE BLINKING
      55 END
      60 REM DISPLAY HEX DIGIT H AT VIDEO ADDRESS V WITH ATTRIBUTE A
      65 IF H<10 THEN H=H+&H30
      70 IF H<16 THEN H=H+&H41-10
      75 IF H=16 THEN H=&H20
      80 POKE V,H:POKE V+1,A:V=V+2
      85 RETURN
      RUN
---

The original IBM Monochrome Display Adapter (MDA) had some idiosyncrasies that PCjs didn't get quite right until
recently.  It all started when I was looking into this [GitHub Issue](https://github.com/jeffpar/pcjs/issues/71)
regarding the best color choice for simulating the green phosphor of an IBM 5151 monochrome monitor.

I started with this screenshot of an actual IBM 5151 monitor in my garage:

![MDA Screenshot](/blog/images/mda-screenshot.jpg)

The text was generated using a small ROM BASIC program that I wrote for this exercise:

    10 DEFINT A-Z:DEF SEG=&HB000
    20 CLS:V=0:OUT &H3B8,&H9
    25 REM FOR EVERY ATTRIBUTE A, DISPLAY THE ATTRIBUTE IN HEX
    30 FOR A=0 TO 255
    35 H=A\16:GOSUB 60:H=A MOD 16:GOSUB 60:H=16:GOSUB 60
    40 IF A MOD 16=15 THEN V=V+64:PRINT
    45 NEXT A
    50 REM OUT &H3B8,&H29 TO RE-ENABLE BLINKING
    55 END
    60 REM DISPLAY HEX DIGIT H AT VIDEO ADDRESS V WITH ATTRIBUTE A
    65 IF H<10 THEN H=H+&H30
    70 IF H<16 THEN H=H+&H41-10
    75 IF H=16 THEN H=&H20
    80 POKE V,H:POKE V+1,A:V=V+2
    85 RETURN

I eventually settled on `#09CC50` for PCjs' default monochromatic green, replacing my original choice of `#7FC07F`.
However, you're free to override the default color of any machine by adding a *fontColor* parameter to the machine's URL.
For example:

> [https://www.pcjs.org/?fontColor=3350CC](https://www.pcjs.org/?fontColor=3350CC)

will configure the IBM PC on the PCjs home page with a blue font.  Avoid colors with an R, G, or B component set to the
maximum value (FF), because otherwise there will be no difference between *normal* and *bright* intensities.

Next, I added a special PCjs Debugger command ("ev b000:0000") to display every possible attribute on a monochrome
screen in the same format, and this is what I saw:

![MDA Attributes BAD](/blog/images/mda-attributes-bad.png)

Obviously, that didn't match reality, but the fixes were fairly straightforward, and you can see live results in the
machine below.

It's interesting that IBM neutered the MDA in several unusual ways.  For instance, there aren't any attribute combinations
that yield underlining *and* reverse video.  There doesn't seem to be any technical reason for the omission, since underlining
is a *foreground* attribute and reverse video is a *background* attribute.  And there aren't any combinations that yield
reverse video with *bright* foreground characters either.

Other non-IBM monochrome adapters may have included some or all of those combinations, but that's an investigation for another
day.  For now, enjoy PCjs' improved IBM compatibility.

{% include machine.html id="ibm5150" %}

NOTE: To change the adapter's *blink* setting, you can either use PCjs Debugger commands to *enable* (`o 3b8 29`)
or *disable* (`o 3b8 9`) blinking, or you can use a BASIC command, such as:

    OUT &H3B8,&H29

*[@jeffpar](https://jeffpar.com)*  
*Nov 15, 2018*
