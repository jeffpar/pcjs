---
layout: page
title: IBM EGA Fantasy Land Demo with Debugger
permalink: /software/pcx86/demo/ibm/ega/debugger/
redirect_from:
  - /disks/pcx86/apps/ibm/fland/debugger/
  - /disks/pcx86/diags/ibm/ega/debugger/
machines:
  - id: ibm5160
    type: pcx86
    debugger: true
    config: /machines/pcx86/ibm/5160/ega/256kb/color/debugger/machine.xml
    state: state.json
    autoMount:
      A:
        name: IBM EGA Fantasy Land Demo
      B:
        name: IBM EGA Fantasy Land Demo
    autoTypeNone: $date\r$time\rFLAND\r
---

This configuration of the [IBM EGA Fantasy Land Demo](../) includes the PCjs Debugger and
[Diagnostic Font Bank Displays](#pcjs-diagnostic-font-bank-displays).

{% include machine.html id="ibm5160" %}

### PCjs Diagnostic Font Bank Displays

The next 4 windows are "live" views of the EGA's four font banks.  Since every font can also be rendered in any of
16 colors, each window shows 16 "slices" of the font in each of the 16 active colors.

These windows were helpful when I was working on PCjs programmable font support, and they still provide a nice visual
insight into the active fonts and colors used by Fantasy Land and the EGA.

<div>
  <p>Font Bank 0</p>
  <canvas id="ibm5160.videoEGA.font0" class="pcx86-video-diagnostic" width="1024" height="512" style="width:100%;background-color:black;"></canvas>
  <p>Font Bank 1</p>
  <canvas id="ibm5160.videoEGA.font1" class="pcx86-video-diagnostic" width="1024" height="512" style="width:100%;background-color:black;"></canvas>
  <p>Font Bank 2</p>
  <canvas id="ibm5160.videoEGA.font2" class="pcx86-video-diagnostic" width="1024" height="512" style="width:100%;background-color:black;"></canvas>
  <p>Font Bank 3</p>
  <canvas id="ibm5160.videoEGA.font3" class="pcx86-video-diagnostic" width="1024" height="512" style="width:100%;background-color:black;"></canvas>
</div>
