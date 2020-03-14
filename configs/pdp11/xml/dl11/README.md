---
layout: page
title: DL11 Serial Interface for Display Terminals
permalink: /configs/pdp11/xml/dl11/
redirect_from: /devices/pdp11/dl11/
---

PDPjs implements the DL11 component in [SerialPortPDP11](/machines/pdp11/lib/serial.js). 

This component is typically instantiated by a Machine XML file using:

```xml
<serial id="dl11" adapter="0" binding="print"/>
```

Most of our PDP-11 machines specify *binding="print"* to connect the DL11 to a `<textarea>` that serves as the machine's
display terminal.

However, some machines, such as the [PDP-11/70 with VT100 Terminal](/machines/pdp11/1170/vt100/), connect the DL11
to a separate machine (eg, a [VT100 Terminal](/machines/pc8080/vt100/)), using the PDP-11 machine's *connection* property.

Refer to the *initConnection()* function in the [SerialPortPDP11](/machines/pdp11/lib/serial.js),
[SerialPort8080](/machines/pc8080/lib/serial.js), and [SerialPort for PCx86](/machines/pcx86/lib/serial.js) components.
