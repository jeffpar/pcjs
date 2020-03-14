---
layout: page
title: PDP-11/20 BASIC Demo with Debugger (New)
permalink: /devices/pdp11/machine/1120/basic/debugger/new/
machines:
  - id: pdp1120
    type: pdp11v2
    config: pdp1120.json
styles:
  .pcjsContainer:
    background-color: slategray;
    border: 1px solid black;
    border-radius: 15px;
    overflow: auto;
    padding: 8px;
  .pcjsDiagnostics:
    clear: both;
  .pcjsConsole:
    font-family: monospace;
    width: 100%;
  .pcjsControlsLeft:
    display: table;
    float: left;
  .pcjsControlsRight:
    display: table;
    float: right;
    padding-bottom: 4px;
  .pcjsControl:
    display: table-cell;
    padding-left: 8px;
    vertical-align: middle;
  .pcjsLabel:
    float: left;
    text-align: right;
    font-size: small;
  .pcjsButton:
    display: block;
---

PDP-11/20 BASIC Demo with Debugger (New)
----------------------------------------

{% include machine.html id="pdp1120" %}

<div id="pdp1120" class="pcjsContainer">
  <div class="pcjsControlsRight">
    <div class="pcjsControl"><button class="pcjsButton" id="powerPDP11">Power</button></div>
  </div>
</div>
<div class="pcjsDiagnostics">
  <div>
    <div>Diagnostics</div>
    <textarea id="printPDP11" class="pcjsConsole" cols="128" rows="20"></textarea>
  </div>
  <button id="resetPDP11">Reset</button>
  <button id="runPDP11">Run</button>
  <button id="stepPDP11">Step</button>
  <button id="clearPDP11">Clear</button>
  <button id="setSpeedPDP11">Speed</button>
</div>
