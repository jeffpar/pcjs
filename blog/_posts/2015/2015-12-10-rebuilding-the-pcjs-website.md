---
layout: post
title: Rebuilding the PCjs Website
date: 2015-12-10 11:03:00
category: Website
permalink: /blog/2015/12/10/
---

It's been nice using Node.js to power the PCjs website, using Amazon's Elastic Beanstalk service, but that combination
has also been a source of some frustrations.

+ When someone posts an article or a tweet linking to a PCjs page, the website bogs down, and while Amazon's Elastic
Beanstalk service makes it easy to automatically scale up, each new instance automatically multiplies my expenses as well,
which hover around $34/month for a single instance.  With assorted S3 and transfer charges, my average monthly bill is
over $55/month.  That's a bit much for a site that generates zero revenue.

+ Once or twice a year, when I'm attempting to either update the server or upgrade my Node configuration, the update
or upgrade will fail, and Amazon's web console provides virtually no details about why it failed.  I get an error message
like "**ERROR: Failed to deploy application**" and that is it.  Literally.

Granted, there are some "simple" things I could do to improve performance, like adding an **nginx** proxy server to
the configuration, but that feels like a band-aid solution, and as a software developer, the time spent fiddling with
web server issues is time I'd much rather spend writing code.

Since PCjs is designed to do all its work in the user's web browser, and since the website can be completely built out
as a set of static web pages, I've decided to stop using Node to power www.pcjs.org.  I'm in the process of migrating
the website to [GitHub Pages](https://pages.github.com/), and using [Jekyll](https://help.github.com/articles/using-jekyll-with-pages/)
to convert all my existing Markdown files to HTML.

This new approach is *very* similar to what the PCjs custom Node modules did: every time someone visited a folder
on the website that did not yet contain an "index.html", the PCjs Node server would create one, either by converting the
README.md file in that folder to HTML or generating a default HTML document.  The PCjs Markdown-to-HTML converter also
contained some special logic that made it easy to embed PCjs machines on a page.

Thanks to GitHub Pages, all of that now happens ahead of time: whenever I update the PCjs "gh-pages" branch on GitHub,
Jekyll automatically runs through the entire site and rebuilds a complete set of web pages.

The Node web server would automatically embed PCjs machines on web pages by looking for special Markdown links, such as:

	[Embedded IBM PC](machine.xml "PCjs:ibm5150")

After migrating to GitHub Pages and Jekyll, that markup must now be written as:

{% raw %}
	{% include machine.html id="ibm5150" %}
{% endraw %}

and the following "Front Matter" (YAML) must appear at the top of the Markdown file:

	---
	...
	machines:
	  - type: pcx86
	    id: ibm5150
	---

Basically, the YAML at the top of the file lists all the machines that the page intends to use, and then
{% raw %}`{% include ... %}`{% endraw %} is inserted in the text at the point where a machine should be embedded.

The `machine.html` include accepts only one parameter: the `id` of a machine listed at the top of the file.

The `machines` element at the top of the file must specify a `type` and `id` at a minimum.  `type` should be one of
the following values, depending on whether you want an IBM PC or Challenger 1P:

- pc
- c1p

and `id` can be any identifier you want to use to embed the machine.  If you want to include the machine's built-in
debugger, set `debugger` to *true*; the older method of specifying *pc-dbg* or *c1p-dbg* instead of *pc* or *c1p* as the
`type` still works, too.

You may also use `config` to specify a machine XML configuration file if not using the default *machine.xml*;
`template` to specify an alternate XSL template file if not using the default *components.xsl*; `state` to specify
a JSON-encoded machine state file if the machine requires a predefined state; and `uncompiled` may be set to *true*
to force a machine to use uncompiled sources, overriding the value of `site.pcjs.compiled` in **_config.yml**.

For example, this [IBM PC](/machines/pcx86/ibm/5150/mda/) contains the following at the top of the
[page]({{ site.github.pages }}/machines/pcx86/ibm/5150/mda/):

    machines:
      - id: ibm-5150-mda
        type: pcx86
        config: /configs/pcx86/machine/ibm/5150/mda/64kb/machine.json

If necessary, you can also override some of the settings in a machine XML file.  Here's an example of overriding the
FDC `autoMount` setting, making it easy to reuse the same machine XML file with different boot disks:

	machines:
	  - type: pcx86
	    id: deskpro386
	    debugger: true
	    autoMount:
	      A:
	        name: OS/2 FOOTBALL (v7.68.17)
	    config: /configs/pcx86/machine/compaq/deskpro386/ega/4096kb/debugger/machine.xml

Other settings that can currently be overridden include:

+ `autoStart`
+ `drives`
+ `messages`
+ `state`

Additional overrides will be added as needed.  See the [Windows 95 Demo](/software/pcx86/sys/windows/win95/4.00.950/)
machine and its associated [Markdown file]({{ site.github.pages }}/software/pcx86/sys/windows/win95/4.00.950/index.md)
for more override examples, including how to set `autoMount` to *not* mount any diskettes. 
 
I will continue to include a Node web server with the PCjs Project, but it's now intended for development
purposes only (not production servers).  I've updated the PCjs MarkOut component to parse any "Front Matter"
at the top of the PCjs Markdown files, and to convert all new Jekyll-style embedded machines and screenshots
to the older Markdown-compatible formats, so pages generated by the Node web server should still function
as before.  But there are no guarantees.

WARNING: If you decide to run/alternate between Jekyll's web server (WEBrick) and the built-in Node web
server (server.js), you should run "grunt clean" before starting either one, to remove any old **index.html**
files.  Node may inadvertently reuse old "index.html" files, and Jekyll may inadvertently propagate them
to its "_site" folder.  It's easy to tell when this happens, because you'll see the wrong color scheme: Node
web server pages were designed to use *dark* colors, whereas Jekyll web server pages currently use *light* colors.
