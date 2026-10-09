---
layout: page
title: PocketChess on the Palm Pilot
permalink: /machines/palm/pilot/pocketchess/
preview: /machines/palm/pilot/images/screenshot.png
machines:
  - id: palm-pocketchess
    type: palm
    name: Palm Pilot
    config: /machines/palm/pilot.json
    layout: /_includes/machines/palm/pilot-diag.html
    state: /machines/palm/pilot/pocketchess/state.json
    unbundled: true
---

This [Palm Pilot](/machines/palm/pilot/) is running [PocketChess 1.1](#readme) by [Scott Ludwig](https://web.archive.org/web/19990220084804/http://www.eskimo.com/~scottlu/pilot/index.html).

The state of the machine (including all your changes/progress) is automatically saved in your browser whenever you leave the page and restored when you return.  Use the Pilot's own **Power** button to put it to sleep and wake it up again; it will turn itself off after a period of inactivity (see the "Auto-off" setting in Prefs).  Clicking the **Reset** button below the machine erases its memory (the equivalent of a "hard reset"), so any changes will be lost.

{% include machine.html id="palm-pocketchess" %}

### ReadMe

```
{% include_relative PocketChess.txt %}
```
