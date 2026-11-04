---
layout: page
title: DEC VT100 Terminal connected to SDF.ORG
permalink: /machines/dec/vt100/sdf/
machines:
  - id: vt100
    type: vt100
    name: DEC VT100
    config: /machines/dec/vt100/vt100.json
    layout: /_includes/machines/vt100/vt100.html
    connection: serialPort->sdf
---

This DEC VT100 Terminal is connected to the [SDF Public Access UNIX System](https://sdf.org/) through
SDF's [WeTTY service](https://connect.sdf.org:3000/).

To explore SDF's vintage systems, log in as `menu`.  You can also log in with an existing SDF account.

{% include machine.html id="vt100" %}
