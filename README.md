# PCjs Machines

Welcome to PCjs, home of [PCx86](/machines/pcx86/), the original IBM PC simulation that runs in your web browser.

It is one of several JavaScript Machines in this project that span a variety of devices:

  - [6502-based Microcomputers](/machines/osi/c1p/)
  - [8080-based Microcomputers](/machines/pcx80/)
  - [Arcade Machines](/machines/arcade/invaders/)
  - [DEC Minicomputers and Terminals](/machines/dec/)
  - [IBM PC and PC Compatibles](/machines/pcx86/)
  - [Texas Instruments Programmable Calculators](/machines/ti/)
  - [LED Simulations](/machines/led/)

along with a small collection of software used for archival/demonstration purposes only.

### Running PCjs

PCjs now uses [Jekyll](http://jekyllrb.com), so that [pcjs.org](https://www.pcjs.org) can use [GitHub Pages](https://pages.github.com).

Here are the basic steps to install Jekyll locally and run your own PCjs web server:

 1. Install Ruby (on OS X, it should already be installed)
 2. Install Bundler (on OS X, run `sudo gem install bundler`)
 3. Run `bundle install`
 4. Run `bundle exec jekyll serve` to start the web server

Now open a web browser and go to `http://localhost:4000/`.  You're done!

Some useful server options include:

	bundle exec jekyll serve --host=0.0.0.0 --port #

The *--host* option makes it possible to access the web server from other devices on your local network;
for example, you may want to run PCjs on your iPhone, iPad, or other wireless device.  And --port allows you
to override the port number (e.g., `--port 80` if you simply want to use `http://localhost/`).

Last but not least, run `bundle update` periodically to keep Jekyll up-to-date.

### Building PCjs

Unlike a typical project, where you have to *build* or *configure* or *make* something, PCjs is "ready to run".
That's because both the compiled and uncompiled versions of the PCjs emulation modules are checked into the project,
making deployment to a web server easier.

However, in order to build and test PCjs modifications, you'll want to use [Gulp](https://gulpjs.com/) and the
Gulp tasks defined by [gulpfile.js](gulpfile.js).  Assuming you already [Node and NPM](https://nodejs.org/) installed,
run:

	npm install

to get all the development dependencies, including Gulp 4.x.

You'll probably also want to install the command-line interface to Gulp.  You can install that locally as well, but
it's recommended you install it globally with *-g*; OS X users may also need to preface this command with `sudo`:

	npm install gulp-cli -g

Now you can run `gulp` anywhere within the PCjs project to build updated emulator releases.  If no command-line arguments
are specified, `gulp` runs the "default" task defined by the project's [gulpfile.js](gulpfile.js); that task runs
Google's [Closure Compiler](https://developers.google.com/closure/compiler/) if any of the target files (eg, pcx86.js
in the [releases](/machines/pcx86/releases/) directory) are out-of date.

### License

The [PCjs Project](https://github.com/jeffpar/pcjs.org) is an open-source project on [GitHub](https://github.com/jeffpar).
All published portions are free for redistribution and/or modification under the terms of an [MIT License](/LICENSE.txt).

You are required to include the following links and copyright notice:

> [PCjs](https://www.pcjs.org) © 2012-2020 by [Jeff Parsons](https://jeffpar.com)

in every copy or modified version of this work, and to display that notice on every web page or computer that it runs on.
