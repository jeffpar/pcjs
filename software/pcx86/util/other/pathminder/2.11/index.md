---
layout: page
title: PathMinder 2.11
permalink: /software/pcx86/util/other/pathminder/2.11/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/512kb/machine.xml
    autoMount:
      B:
        name: "PathMinder 2.11"
    autoStart: true
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}
