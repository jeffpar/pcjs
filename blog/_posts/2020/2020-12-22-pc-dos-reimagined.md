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
rarely be dropped, so the system inevitably grew.  The need to rapidly add new features and turn around
new versions, combined with compatibility constraints, meant that major architectural changes to DOS
were extremely difficult.

In 1983, PC DOS 2.00 represented perhaps the most dramatic and successful overhaul of PC DOS ever,
with the introduction of installable device drivers, a hierarchical file system, and a more powerful shell.
Yet it still couldn't make the leap to asynchronous I/O and true multitasking.

And multitasking was clearly something a lot of people wanted -- even Microsoft.
By late 1985, they had had some success multitasking DOS applications in other products, such as
[Microsoft Windows 1.01](https://www.pcjs.org/software/pcx86/sys/windows/1.01/) and
[Multitasking MS-DOS 4.00](/software/pcx86/sys/dos/microsoft/4.0M/).  But they were never able to add
that feature to PC DOS.

As a result, a variety of third-party solutions emerged, like VisiCorp's **Visi On**, IBM's **TopView**,
SoftLogic's **DoubleDOS** and **Software Carousel**, and Quarterdeck's **Desqview**.

![DoubleDOS Advertisement, PC Magazine, February 7, 1984](/blog/images/DoubleDOS-1984.jpg)

But all those solutions felt like band-aids.  As Michael J. Miller lamented in the
[August 11, 1986 issue of InfoWorld](https://books.google.com/books?id=Zi8EAAAAMBAJ&lpg=PA34&pg=PA34#v=onepage&q&f=false):

    All these programs may just be interim solutions. Given the increasing
    acceptance of 80286-based machines (the [IBM PC] AT and compatibles),
    it's crazy that we have to resort to environments that get around a
    single-tasking operating system.  What we really need is a multitasking
    operating system that addresses lots of memory.  Hello, Microsoft?

By that time, Microsoft and IBM were already hard at work on **OS/2**, but OS/2 was an effort to move
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

[![BASIC-DOS Demo #2](https://basicdos.com/assets/images/BASIC-DOS2.png)](https://basicdos.com/preview/part4/)

Read the [BASIC-DOS Blog](https://basicdos.com/blog/), check out the [BASIC-DOS Preview](https://basicdos.com/preview/),
and see what you think.

As a product, yes, it's completely out-dated.  But as retro-programming projects go, it's been a good one for 2020.

[![BASIC-DOS 1.00](https://basicdos.com/assets/images/BASIC-DOS-Cover.gif)](https://basicdos.com)
