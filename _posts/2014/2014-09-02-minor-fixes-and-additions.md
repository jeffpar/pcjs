---
layout: post
title: Minor Fixes and Additions
date: 2014-09-02 11:00:00
category: Releases
permalink: /blog/2014/09/02/
---

The following fixes were made in PCjs v1.15.1

 1. Using the "User-defined URL" option when loading a disk image from a 3rd-party server was broken if the URL
contained certain special characters; that should be fixed now, but be aware that only web servers (ie, URLs
using the HTTP protocol) are supported.  URLs that trigger a redirect may also not work (more testing required).
 2. Any errors that occur during the call to either *embedPC()* or *embedC1P()* should be properly displayed on the
caller's page now.
 3. Two embedding helper functions have been added to provide more control over the machine startup
and shutdown process:
	+ *enableEvents(boolean)*: pass *false* to disable delivery of all page events to all machines on the page,
	or *true* to re-enable;
	+ *sendEvent(string)*: pass *"init"*, *"show"* or *"exit"* to simulate the corresponding browser event 
	(*onload*, *onpageshow* or *onbeforeunload*, respectively).

If a page calls *enableEvents(false)* before calling *embedPC()*, all machine layouts will be instantiated
but the machines themselves will not be initialized.  When the page is ready, call *enableEvents(true)* to restore
normal event processing, and if the browser has already sent the *onload* event, then call *sendEvent("init")*
to manually initialize the machine(s).

These two new functions are designed to assist in testing the starting up, shutting down and restarting of machines,
by allowing scripts to control the overall process, without requiring use of the browser's back/forward/close controls.

*[@jeffpar](https://jeffpar.com)*  
*September 2, 2014*
