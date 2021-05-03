---
layout: post
title: Welcome to PCjs 2.0
date: 2020-04-03 10:00:00
permalink: /blog/2020/04/03/
---

I recently decided 2020 would be a good year to refresh the PCjs website.

My main motivations were:

  - Make the website easier to navigate
  - Do a better job of highlighting content
  - Simplify the underlying the GitHub repository

The original PCjs repository had grown a bit unwieldy, to the point where I could no longer simply push my changes to the
`gh-pages` branch and let GitHub Pages automatically rebuild the site.  Instead, I had to create a special (private) repo that
was nothing more than a copy of the main repo, periodically pull all the changes from the main repo, perform a local Jekyll
rebuild of the entire site, and then commit the rebuilt site back to the special repo.  Kind of a nuisance.

In addition, the structure of the original repository had evolved over many years, resulting in a lot of redundant folder
structures.  For example, PCx86 machine emulation was comprised of at least *four* separate folder hierarchies:

  - Machine pages
  - Machine config files
  - Machine documentation
  - Machine source code

The new repository combines most of those under `/machines/pcx86`.  Only machine config files are still in a separate
`/configs` folder, and that's only to accommodate the Jekyll build system that GitHub Pages uses.  My Jekyll page templates
need access to PCjs machine configuration files, and Jekyll data files must be placed in a specially designated folder,
so I chose `/configs`.

And speaking of Jekyll, I also decided to ditch my old Node-based web server.  It still offered some advantages for local
development and testing, because it could dynamically construct web pages on the fly much faster than Jekyll, and it supported
debugging PCjs emulator source files without having to first "compile" them with the Closure Compiler.  But ultimately I
decided it was better to just have one build system to maintain.

I also considered rolling the new repo structure into the original PCjs repo, and I may still do that, but for now, I've
decided to keep things simple and use a [new repository]({{ site.github.repository_url }}).
