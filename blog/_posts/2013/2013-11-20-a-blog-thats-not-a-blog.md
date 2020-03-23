---
layout: post
title: "A Blog That's Not A Blog"
date: 2013-11-20 11:00:00
category: News
permalink: /blog/2013/11/20/
---

As you may have noticed (or not), the website had a very modest makeover recently.

Originally, the site was a smattering of HTML files, along with some XML files that I was rendering as HTML
using some simple XSL stylesheets.  However, I was tired of having one set of files for the website to explain
things and a different set of files on [GitHub](http://github.com) that explained other things -- many
of those things being the SAME things.

So this month, I decided to eliminate all the HTML files.  As you browse the site, you're simply navigating
folders from the **GitHub** project and reading the project's **README.md** files.

There's a single PHP script responsible for transforming a folder's default document (either **README.md**
or **machine.xml**) to HTML, as well as displaying the current directory across the top and a directory listing
down the left-hand side.

The same script provides support for a subset of the [Markdown](http://daringfireball.net/projects/markdown/)
syntax, which is more than sufficient to handle all the site's **README.md** files.  I probably should
have used a third-party Markdown library, but this was more educational, and it was easy to add extra features,
like the ability to embed JavaScript machines with a single Markdown-style link; eg:

	[IBM PC](/machines/pcx86/ibm/5150/mda/ "PCjs:ibm5150")

The script takes care of the rest, adding the appropriate stylesheets and PCjs scripts automatically.

I had more grandiose plans, including a command-line prompt written in JavaScript that would allow you to
navigate the site exactly as you would an IBM PC hard drive from a "DOS prompt", and I may try something
like that later, but don't hold your breath.

I've tried to improve the organization of all the [Machine Configuration Files]({{ site.github.pages }}/configs/)
as well.  The variety of configurations was getting out of hand.  It's a bit tidier now, but there's still room for
improvement.

My workflow is improving, too.  I'm more comfortable with [GitHub](http://github.com) now,
and I recently switched from Eclipse to JetBrains' [WebStorm](http://www.jetbrains.com/webstorm) (well,
actually [PhpStorm](http://www.jetbrains.com/phpstorm), since it's a superset of WebStorm, although I did start
with WebStorm), and the new development environment is feeling pretty good now.  I've had zero problems with
[JetBrains](http://www.jetbrains.com) products and I'm seriously impressed with their quality and completeness,
so I have no qualms about moving from the "free" Eclipse platform to the $99 PhpStorm IDE.

The nice thing about the new GitHub-centric approach is that it's easy to "push" changes to both the repository
and the website.  I update one or more **README.md** files, "Commit and Push" from the IDE, then "pull" from GitHub
on the web server.

This so-called blog is more of the same: **README.md** files in a series of folders.  The only question now:
will this actually evolve into a series...?
