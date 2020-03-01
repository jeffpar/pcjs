---
layout: post
title: Google Is Starting To Piss Me Off
date: 2017-10-19 10:00:00
permalink: /blog/2017/10/19/
---

Today, during a random of check of my website's "health" using [Google Search Console](https://www.google.com/webmasters/),
I was surprised to discover the following "Security Issue":

	Harmful content
	
	Google has detected harmful content on some of your site’s pages.  We recommend that you remove
	it as soon as possible.  Until then, browsers such as Google Chrome will display a warning when
	users visit or download certain files from your site.

Total bullshit.  I downloaded their `www-pcjs-org_20171019T184636Z_samples_-_malware.csv` CSV file,
and it contained nothing but a header row:

	Security issue type | URL | Date | Sample snippet

There was a "**Request A Review**" button, so I clicked it and added the following comment:

> I downloaded your CSV, but it's empty, and this "Security Issues" page doesn't list any issues.
The only thing it mentions is "Uncommon Downloads", without providing any specific examples.  This is
a fully curated archival website, so yes, the files will typically be older and not commonly used.
But there is absolutely	nothing malicious here.

>As an aside, I'm getting a bit tired of Google's heavy-handed approach to how it deals with websites
like mine.  Earlier this year, I was essentially forced to switch to https, because Google "threatened"
my ranking in its search results AND "threatened" to display security warnings whenever someone visited
my site (even though my site is 100% static and doesn't transmit any sensitive information back to the
server).  And now this, "threatening" to make vague warnings to users about "Uncommon Downloads."
Give the little guys a break and focus on ACTUAL security threats instead.

Pushing me to replace HTTP with HTTPS was a hassle that accomplished very little.  I'm all for greater privacy,
but if any visitors to my site were concerned that the URLs they visited might be visible to eavesdroppers, then
they should have been using password-protected WiFi hot-spots, VPNs, or other means of encrypting their traffic.
And in any case, no user-specific information is ever requested, and the only information sent back to the server
are static requests for additional JSON-encoded resources (eg, ROM images, disk images, etc).

In fact, the example that Google gave me as potentially "UNSECURE" was a PCjs web page that contained text
&lt;input&gt; fields: fields used *exclusively* for processing PCjs Debugger commands.  Yes, I understand that
Google has no (easy) way of knowing whether the page might also be transmitting those commands over the network
as well, but that's beside the point.  Google routinely takes approaches that are expedient for Google, allowing
them to tout how they're making the Internet safer for everyone, while ignoring the costs of those decisions
for the rest of the world.

In both of these situations -- punishing me for using HTTP instead of HTTPS and for having "Uncommon Downloads"
(whatever the hell those are) -- Google's heavy-handedness has become a growing and on-going irritation.

What hoops will Google decide I must jump through tomorrow?

*[@jeffpar](https://jeffpar.com)*  
*Oct 19, 2017*
