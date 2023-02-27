---
layout: page
title: "Intel 80286 CPU Errata: ARPL"
permalink: /documents/manuals/intel/80286/arpl/
redirect_from: /pubs/pc/reference/intel/80286/arpl/
---

[The following information is from an Intel document titled "[80286 ARPL and Overlength Instructions, 15 October 1984](/documents/manuals/intel/80286/files/80286--ARPL--1984-10-15.pdf)"]

### ARPL (63H)

When the second operand of the ARPL instruction (as described in the iAPX286 Programmer's Reference Manual) is a null
selector, the ARPL instruction generates exception 13. This behavior of the ARPL instruction has not been previously described,
but will be described in future revisions of the "iAPX286 Programmer's Reference Manual."

This functionality of the ARPL is not believed not to be a problem, and there are no plans to change this functionality
of the ARPL instruction.
