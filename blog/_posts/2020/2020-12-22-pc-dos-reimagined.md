---
layout: post
title: PC DOS Reimagined
date: 2020-12-22 09:00:00
permalink: /blog/2020/12/22/
preview: https://basicdos.com/assets/images/BASIC-DOS-Cover.gif
---

Next year, on August 12, 2021, we'll be celebrating the 40th anniversary of the IBM PC, a machine that
put the world of personal computing on a path we're still on today.

Granted, that path looks a lot different now, but if you open a Command Prompt on Windows, you can still
type a few of the commands that were introduced in PC DOS 1.00 (eg, `DIR`, `COPY`, and `TYPE`), you can
still run batch (`BAT`) files, and you can even change the `DATE` and `TIME` just like you used to almost
40 years ago.

With PC DOS 1.00, Microsoft and IBM started down a road that could have forked in any number of directions at
any point in time, so it was by no means inevitable that we'd always end up where we are now, but it's also
true that each new step was constrained in many ways by the previous step.

Each new version of DOS had to retain compatibility with the previous version, and old features could
rarely be dropped, so the system inevitably grew.  And that growth, combined with the need to rapidly
turn around new versions, meant that major redesigns of DOS weren't feasible.  Features like preemptive
multitasking of DOS applications *were* implemented in other products as early as 1985 (see
[Multitasking MS-DOS 4.00](/software/pcx86/sys/dos/microsoft/4.0M/)), but that was never going to happen
in PC DOS, even though it was clearly something a lot of people wanted.

The mid-1980's saw lots of third-party solutions emerge, like VisiCorp's **Visi On**, IBM's **TopView**,
SoftLogic's **DoubleDOS** and **Software Carousel**, and Quarterdeck's **Desqview**.  And of course
**Microsoft Windows** -- although all it really multitasked were Windows applications, not DOS applications.

![DoubleDOS Advertisement, PC Magazine, February 7, 1984](/blog/images/DoubleDOS-1984.jpg)

And yet, as Michael J. Miller lamented in the August 11, 1986 issue of InfoWorld:

    All these programs may just be interim solutions. Given the increasing
    acceptance of 80286-based machines (the [IBM PC] AT and compatibles),
    it's crazy that we have to resort to environments that get around a
    single-tasking operating system.  What we really need is a multitasking
    operating system that addresses lots of memory.  Hello, Microsoft?

Granted, at that time, Microsoft and IBM were already hard at work on **OS/2**, but OS/2 was an effort to move
the world to an entirely new operating system, and it was a transition that ultimately proved too costly, both
in terms of the required hardware and the sacrifices in DOS compatibility, and not enough people were willing to
pay the price.

### Introducing BASIC-DOS

So over 40 years ago, if Microsoft and IBM had partnered just a little bit sooner, if they'd been able to
predict how popular the platform would become, if they could have harnessed more of its power, and if
Microsoft had been able to build more synergy between their flagship BASIC product and the underlying
"[Quick and Dirty](https://en.wikipedia.org/wiki/86-DOS)" operating system, how dramatic could the impact
have been?

It's impossible to know with any certainty.  However, what's *not* impossible is creating that product
today, and to see for ourselves what the IBM PC was really capable of from "Day One."

And that was the inspiration for BASIC-DOS, a product (well, just a proof-of-concept at this point) that
combines the power of BASIC with a multitasking DOS.

[![BASIC-DOS Demo #1](https://basicdos.com/assets/images/BASIC-DOS1.png)](https://basicdos.com/preview/)

Read the [BASIC-DOS Blog](https://basicdos.com/blog/), check out the [BASIC-DOS Preview](https://basicdos.com/preview/),
and see what you think.

As a product, yes, it's completely out-dated.  But as retro-programming projects go, it's been a good one for 2020.

[![BASIC-DOS 1.00](https://basicdos.com/assets/images/BASIC-DOS-Cover.gif)](https://basicdos.com)
