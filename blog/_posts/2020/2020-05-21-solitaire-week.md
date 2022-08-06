---
layout: post
title: Solitaire Week at LCM
date: 2020-05-21 09:00:00
permalink: /blog/2020/05/21/
preview: /blog/images/solitaire-week.png
machines:
  - id: ibm5170-win300
    type: pcx86
    config: /machines/pcx86/ibm/5170/ega/1024kb/rev3/machine.xml
    drives: '[{name:"20Mb Hard Disk",type:2,path:"/harddisks/pcx86/20mb/PCDOS320-WIN300-EGA.json"}]'
    state: /software/pcx86/sys/windows/3.00/state-solitaire.json
    autoMount:
      A:
        name: None
      B:
        name: None
---

It's [Solitaire Week](https://livingcomputers.org/Exhibits-Events/Events/MS-Solitaire-s-30th-Anniversary.aspx) at
[Living Computers Museum+Labs](https://livingcomputers.org), and they've produced a lot of fun content celebrating the 30th
anniversary of Solitaire for Microsoft Windows.

They've got everything from blog posts, like "[Did You Know: Solitaire was Microsoft's Cherry on Top](https://livingcomputers.org/Blog/MS@45-Did-You-Know-Solitaire-was-Microsoft-s-cherr.aspx),"
to little-known facts on [Twitter](https://twitter.com/LivingComputers):
"[Did you know that the original card back art in @Microsoft Solitaire was designed by two women?](https://twitter.com/LivingComputers/status/1262526134836748288)"

And they have short YouTube videos, like "[Solitaire Speedrunning Tips+Tricks](https://www.youtube.com/watch?v=AXdtMYrTbYs),"
which offers several handy tips, including my favorite: play with your lucky cards!

To help everyone celebrate, I've created a special IBM PC AT machine below that's already running Solitaire on top of Windows 3.0.
If it seems a little slow, that's because you're spoiled by modern PCs that are *literally* hundreds of times faster than this 8Mhz
IBM PC AT from the 1980's.  You can crank up the speed if you like (click the "8.00Mhz" button), but don't
expect that to make you any luckier.

{% include machine.html id="ibm5170-win300" %}
