---
layout: page
title: PCjs Library
permalink: /documents/
redirect_from:
  - /docs/
  - /pubs/pc/
  - /pubs/
---

The PCjs Library is nothing more than an assortment of documentation collected for the various hardware and software
featured on the website.  Much of it was obtained from [bitsavers.org](http://bitsavers.org/), with significant amounts
of PC hardware documentation from [minuszerodegrees.net](http://minuszerodegrees.net/) and PC software documentation
from [os2museum.com](http://www.os2museum.com/wp/).

Unfortunately, we've not done a good of consistently recording where a given document (or piece of software) came from.
Going forward, we plan to be more thorough.  In the documentation display below, you'll now see that many documents include
a link to the original "[Source]".  There's no guarantee that that source is definitive, or the best available, or even
still in existence; it's simply where we happened to find our copy.

Over the years, we've also acquired our own physical copies of software and documentation from ebay and generous PCjs users,
which we scan and post as well.  In those cases, no source link is displayed; internally, the source is recorded as "PCjs"
or "pcjs.org".  For example, we scanned the complete collection of [PC Tech Journal](/documents/magazines/pctj/) magazines;
someone else has since downloaded and uploaded that collection to [archive.org](https://archive.org/details/pctechjournal),
but for our records, the source is still PCjs.

## Organization

Each piece of documentation is filed under one of three general areas: Hardware, Software, or Documents.  The idea is to
have a single page for a given machine and its manuals, or for a given piece of software and its manuals.  Anything else (ie,
any document not created by the manufacturer of a piece of hardware or software featured here) is filed under an appropriate
category within Documents.

There are a few gray areas.  For example, there are programming books that also come with software, and in a few cases, we
have archived a copy of that software here.  So such a book *could* be filed with the software, rather than with other
programming books.  However, since such software is supplemental, we generally file such a book *primarily* as a document,
and include references to it from other pages as appropriate.

Use the {% include explorer/link.html %} to browse the collection.  Someday we may add a built-in Search feature as well.  We'll see.

{% include gallery/alldocs.html title="All Hardware Documents" root="hardware" %}

{% include gallery/alldocs.html title="All Software Documents" root="software" %}

{% include gallery/alldocs.html title="All Other Documents" %}

{% comment %}

{% include gallery/documents.html title="Featured Books" path="/documents/books/programming/" width="200" height="260" %}

{% include gallery/documents.html title="Featured Magazines" path="/documents/magazines/msj/" width="200" height="260" %}

{% include gallery/documents.html title="Featured Manuals" path="/machines/pcx86/ibm/5150/" width="200" height="280" %}

{% endcomment %}
