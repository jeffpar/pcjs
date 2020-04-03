# PCjs Machines

Welcome to PCjs, home of [PCx86](/machines/pcx86/), the original IBM PC simulation that runs in your web browser.  It is
one of several JavaScript Machines in the [PCjs Project](https://github.com/jeffpar/pcjs.org).

### Using PCjs locally with Jekyll

PCjs is now setup to use [Jekyll](http://jekyllrb.com) and the Ruby WEBrick web server.  This is how the project
is currently set up at [pcjs.org](https://www.pcjs.org).

This isn't going to be a Jekyll "How To" guide, because that would unnecessarily repeat all the information available
at [GitHub Pages](https://pages.github.com).  But we'll summarize the basic steps:

To install Jekyll for use with PCjs:

 1. Install Ruby (on OS X, it should already be installed)
 2. Install Bundler (on OS X, run `sudo gem install bundler`)
 4. Create a **Gemfile** containing `gem 'github-pages'` (this is already checked in)
 5. Run `bundle install` (GitHub Pages alternatively suggests: `bundle exec jekyll build --safe`)
 6. Run `bundle exec jekyll serve` to start the web server

Now open a web browser and go to `http://localhost:4000/`.  You're done!

Some useful Jekyll server options include:

	bundle exec jekyll serve --host=0.0.0.0 --config _config.yml,_developer.yml

The *--host* option makes it possible to access the web server from other devices on your local network;
for example, you may want to run PCjs on your iPhone, iPad, or other wireless device.  And by adding **_developer.yml**,
you can override the Jekyll configuration defaults in **_config.yml**.

GitHub Pages says you can run `jekyll serve` instead of `bundle exec jekyll serve`, but with the addition of
more gems to **Gemfile** (eg, "jekyll-sitemap"), running `jekyll serve` may trigger dependency errors on some systems.
`bundle exec jekyll serve` should always work.

Last but not least, run `bundle update` periodically to keep Jekyll up-to-date.

### Building PCjs

Unlike a typical project, where you have to *build* or *configure* or *make* something, PCjs is "ready to run".
That's because both the compiled and uncompiled versions of the PCjs emulation modules are checked into the project,
making deployment to a web server easier.

However, in order to build and test PCjs modifications, you'll want to use [Gulp](https://gulpjs.com/) and the
Gulp tasks defined by [gulpfile.js](gulpfile.js).  If you already ran `npm install --production` as described above,
then you should re-run it *without* the `--production` option:

	npm install

to get all the development dependencies, including Gulp 4.x.

You'll probably also want to install the command-line interface to Gulp.  You can install that locally as well, but
it's recommended you install it globally with *-g*; OS X users may also need to preface this command with `sudo`:

	npm install gulp-cli -g

Now you can run `gulp` anywhere within the PCjs project to build an updated version.  If no command-line arguments
are specified, `gulp` runs the "default" task defined by the project's [gulpfile.js](gulpfile.js); that task runs
Google's [Closure Compiler](https://developers.google.com/closure/compiler/) if any of the target files (eg, pcx86.js
in the [releases](/machines/pcx86/releases/) directory) are out-of date.

### Using the JavaScript-based Closure Compiler

The latest [gulpfile.js](gulpfile.js) now compiles all PCjs machine modules using
Google's [JavaScript-based Closure Compiler](https://github.com/google/closure-compiler-js).

Running `gulp` should build a complete set of "compiled" machine scripts in the appropriate `releases` directory.
Individual machines can be compiled as well (eg, `gulp compile/pcx86`).

### License

The [PCjs Project](https://github.com/jeffpar/pcjs.org) is an open-source project on [GitHub](https://github.com/jeffpar).
All published portions are free for redistribution and/or modification under the terms of an [MIT License](/LICENSE.txt).

You are required to include the following links and copyright notice:

> [PCjs](https://www.pcjs.org) © 2012-2020 by [Jeff Parsons](https://jeffpar.com)

in every copy or modified version of this work, and to display that notice on every web page or computer that it runs on.
