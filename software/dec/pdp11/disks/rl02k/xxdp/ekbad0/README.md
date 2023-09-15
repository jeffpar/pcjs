---
layout: page
title: "EKBAD0: 11/70 MEMORY MANAGEMENT DIAGNOSTIC (PART 1)"
permalink: /software/dec/pdp11/disks/rl02k/xxdp/ekbad0/
redirect_from: /disks/dec/rl02k/xxdp/ekbad0/
machines:
  - id: test1170
    type: pdp11
    config: /machines/dec/pdp11/1170/panel/debugger/machine.xml
    debugger: true
    autoStart: true
machineScripts:
  runEKBAD0: |
    selectDrive RL11 RL0;
    select RL11 listDisks "XXDP+ Diagnostics";
    loadDisk RL11;
    wait RL11;
    bootDisk RL11;
    sleep 1000;
    receiveData SerialPort "\r";
    sleep 500;
    receiveData SerialPort "R EKBAD0\r";
---

From the [PDP-11 Diagnostic Handbook (1988)](https://1drv.ms/b/s!ArcO_mFRe1Z9gp4d3zhflWyJp07i9g), p. 1-6:

	11/70 CPU DIAGNOSTIC PART 1
	
	ABSTRACT:
	
	    This diagnostic is the first part of the 11/70 CPU, it designed to detect and
	    report logic faults in the CPU. Any fault detected in this program causes the
	    program to "HALT". After this, run the second part of the CPU test, EKBBF0.
	
	OPERATING PROCEDURES:
	        Set the switch register by <CONTROL P> (RD console)
	    CON = xxxxxxWZ
	        (W = deposit xxxxxx into console switch register)
	        (R = read and type console switch settings)
	        (Z = switch console terminal back to program)
	
	    .R EKBAD0
	
	SWITCH SETTINGS
	    SW15 = 1 halt on error
	    SW14 = 1 loop on test
	    SW13 = 1 inhibit error typeouts
	    SW12 = 1 inhibit T-bit trapping
	    SW11 = 1 inhibit iterations
	    SW10 = 1 ring bell on error
	    SW09 = 1 loop on error
	    SW08 = 1 loop on test in SWR <07:00>
	    SW07 = 1 not used
	    SW06 = 1 skip bus request 6 test
	    SW05 = 1 skip bus request 5 test
	    SW04 = 1 skip bus request 4 test
	    SW00 = 1 skip operator intervention testing

The closest we have to a source code listing of the EKBAD0 diagnostic comes from some
[scanned microfiche](https://1drv.ms/b/s!ArcO_mFRe1Z9gp46rtFNcs5qr4fnXw)
on [bitsavers.org](http://bitsavers.trailing-edge.com/pdf/dec/pdp11/microfiche/ftp.j-hoppe.de/bw/gh/) for:

	PRODUCT CODE: AC-7962D-MC
	PRODUCT NAME: CEKBAD0 11/70 CPU #1
	DATE CREATED: MAY, 1980
	MAINTAINER:   DIAGNOSTIC ENGINEERING

Step-by-step instructions for running EKBAD0 can be found below. 

{% include machine.html id="test1170" %}

### Instructions For Running EKBAD0

1. Select drive RL0 {% include machines/command.html type='button' label='Do It' machine='test1170' command='script' value='selectDrive RL11 RL0' %}
2. Select disk "XXDP+ Diagnostics" for drive RL0 {% include machines/command.html type='button' label='Do It' machine='test1170' command='script' value='select RL11 listDisks "XXDP+ Diagnostics"' %}
3. Click `Load` to load the disk {% include machines/command.html type='button' label='Do It' machine='test1170' command='script' value='loadDisk RL11' %}
4. Wait for message `Loaded disk "XXDP+ Diagnostics" in drive RL0` {% include machines/command.html type='button' label='Do It' machine='test1170' command='script' value='wait RL11' %}
5. Click `Boot` to boot the disk {% include machines/command.html type='button' label='Do It' machine='test1170' command='script' value='bootDisk RL11' %}
6. Wait for a date prompt and then press *Return* {% include machines/command.html type='button' label='Do It' machine='test1170' command='script' value='sleep 1000; receiveData SerialPort "\r"' %}
7. Wait for a `.` prompt and then type `R EKBAD0` and press *Return* {% include machines/command.html type='button' label='Do It' machine='test1170' command='script' value='sleep 500; receiveData SerialPort "R EKBAD0\r"' %}

To automatically perform all of the above, click this button: {% include machines/command.html type='button' label='Run EKBAD0' machine='test1170' command='runEKBAD0' %}
