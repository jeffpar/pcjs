---
layout: post
title: Connecting an IBM PC to a DEC VT100 Terminal
date: 2016-08-19 10:00:00
permalink: /blog/2016/08/19/
machines:
  - id: ibm5170
    type: pcx86
    connection: com2->vt100.serialPort
    config: /configs/pcx86/xml/machine/5170/ega/2048kb/rev3/machine.xml
  - id: vt100
    type: pc8080
    connection: serialPort->ibm5170.com2
    config: /devices/pc8080/machine/vt100/machine.xml
---

Now that you've had a chance to play with a standalone [VT100 Terminal](/devices/pc8080/machine/vt100/), not to mention
[Dual VT100 Terminals](/devices/pc8080/machine/vt100/dual/), it's time to take [PCjs Machines](/) to the next level, and
begin connecting PCs to terminals.

Below you'll find an 80286-based [IBM PC AT](/devices/pcx86/machine/5170/ega/2048kb/rev3/) connected to an 8080-based
[VT100 Terminal](/devices/pc8080/machine/vt100/) via the PC's **COM2** serial port.

At this point, the connection is *very* thin.  The [PCx86](/modules/pcx86/) [SerialPort](/modules/pcx86/lib/serial.js)
and [PC8080](/modules/pc8080/) [SerialPort](/modules/pc8080/lib/serial.js) each export exactly two methods:

- *initConnection()*
- *receiveData()*

The *receiveData()* method always returns *success*, because both SerialPort components buffer all received data.
For now, the VT100 SerialPort component avoids overflowing the VT100 firmware's buffers by automatically throttling the flow
of data whenever the firmware, in desperation, issues an XOFF.  This "Auto XOFF" behavior will eventually be superseded by
additional interfaces that provide conventional RS-232 signal-based flow control.

What can you do with these machines?  Click on the PC screen and type:

	DIR > COM2

or any command redirected to COM2.  The output should appear on the VT100's screen.

A more interesting example:

	CTTY COM2

redirects all *stdout* (screen) and *stdin* (keyboard) I/O to the VT100.  Then click on the VT100 screen to switch focus,
and you can now interact with the PC via the terminal.  The `CTTY CON` command will restore control to the PC.

More useful scenarios include machines running PC-based debuggers that communicate via a serial port, such as the
OS/2 kernel debugger, Windows debuggers like `WDEB386`, some versions of `SYMDEB`, and so on.  PC-to-PC configurations will
also be possible, enabling live demonstrations of classic communication software packages such as `CROSSTALK`.

I've also made it incredibly easy to put machines like this on any PCjs web page.  For this blog post, all I had to do
was add the following Front Matter to the top of the Markdown file:

	machines:
	  - id: ibm5170
	    type: pcx86
	    connection: com2->vt100.serialPort
	    config: /devices/pcx86/machine/5170/ega/2048kb/rev3/machine.xml
	  - id: vt100
	    type: pc8080
	    connection: serialPort->ibm5170.com2
	    config: /devices/pc8080/machine/vt100/machine.xml

and then embed the machines in the post, each with a single line:

{% raw %}
	{% include machine.html id="ibm5170" %}
	{% include machine.html id="vt100" %}
{% endraw %}

For people rolling their own web pages, [the basics](/docs/pcx86/) haven't changed, and adding a serial connection merely
requires adding a *connection* property (eg, `connection:"com2->vt100.serialPort"`) to the *parms* parameter passed to the
*embedPCx86()* interface.  A similar property (eg, `connection:"serialPort->ibm5170.com2"`) must also be added to the *parms*
passed to *embedPC8080()*.

For the more adventurous, a [Dual Debugger Configuration](/devices/pcx86/machine/5170/ega/2048kb/rev3/debugger/vt100/)
is also available.

{% include machine.html id="ibm5170" %}

{% include machine.html id="vt100" %}

*[@jeffpar](https://jeffpar.com)*  
*Aug 19, 2016*
