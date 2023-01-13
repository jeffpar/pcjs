---
layout: page
title: "Balance of Power (1987)"
permalink: /software/pcx86/game/other/1987/balance_of_power/
machines:
  - id: ibm5160-ega-win101
    type: pcx86
    resume: 1
    state: /software/pcx86/sys/windows/1.01/ega/state.json
    config: /machines/pcx86/ibm/5160/ega/640kb/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/PCDOS200-WIN101-EGA.json"}]'
    autoMount:
      A:
        name: "Balance of Power (Setup Disk)"
---

{% include machine.html id="ibm5160-ega-win101" %}
