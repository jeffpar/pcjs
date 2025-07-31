---
layout: page
title: PCjs Archive Utility
permalink: /tools/dx/
---

This directory contains [dx.js](dx.js), a stand-alone JavaScript command-line utility I created for displaying and extracting the contents of assorted archives and disk images.  It is built upon several other stand-alone JavaScript classes, the key ones being:

  - [dzip.js](dzip.js) (to read ZIP and ARC archive files)
  - [disk.js](disk.js) (to read IMG and JSON-encoded disk images used by PCjs)
  - [iso.js](iso.js) (to read ISO, MDF, and other ISO 9660 disc images)

[dzip.js](dzip.js) uses the `LegacyARC` and `LegacyZIP` classes in [legacy.js](legacy.js), which add support for compression methods older than `deflate`, which is the only compression method that modern `zlib`-based utilities support.

To simplify container handling for both command-line and browser clients, the [dxc.js](dxc.js) wrapper class provides functions that call the appropriate container class:

  - *async* open()
  - *async* readDirectory()
  - *async* readFile()
  - filterEntry()
  - formatEntry()
  - formatHeading()
  - *async* close()

Finally, there are some Python scripts here to assist with [uploading files](#uploading-files-to-the-internet-archive) to the [Internet Archive](https://archive.org).  They are designed for use with the `--upload` option in [dx.js](dx.js).

### Basic Usage

Here are the prerequisites:

  1. Install [Node and NPM](https://nodejs.org)
  2. Clone the [pcjs](https://github.com/jeffpar/pcjs) repository (eg, `git clone https://github.com/jeffpar/pcjs.git`)
  3. CD into `pcjs` and run `npm install`
  4. From the `pcjs` directory, CD to the `tools/dx` directory

The format of a `dx.js` command (as `--help` will also tell you) is:

    [node] dx.js [options] [archive(s)]

Here is the complete help text:

    dx.js 1.0
    Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>

    Arguments: dx.js -h

    Usage:
        dx.js [option(s)] [item(s)]

    Processes ZIP, ARC, IMG, ISO, MDF and other container items

    Options:
        --batch [file]     process items listed in file
        --banner           print archive comments (banners) [-b]
        --compat           use CD-ROM 8.3 filenames only [-c]
        --csv [file]       write list of item contents to CSV file
        --dest [dir]       extract files into destination directory [-d]
        --dir              print directory of item contents
        --dump [spec]      dump contents of matching files
        --extract          extract files (implied by --dest) [-e,-x]
        --files [spec]     filter on matching files (eg, "*.txt")
        --filter [...]     filter on criteria (see --filter list) [-f]
        --in [encoding]    set input encoding (default is cp437)
        --list             print list of item contents [-l]
        --nodir            skip archive directory (scan for files) [-n]
        --out [encoding]   set output encoding (default is --in)
        --overwrite        overwrite existing files on extract [-o]
        --password [...]   decrypt garbled entries using password [-g,-s]
        --path [spec]      process matching items (eg, "**/*.zip")
        --pause            pause after each item until a key is pressed [-p]
        --recurse          process items within items [-r]
        --test             test contents of all items [-t]
        --type [spec]      type contents of matching files
        --upload           generate an upload script for the Internet Archive
        --verbose          display additional information [-v]
        --help             display this help message [-h]

### Uploading Files to the Internet Archive

In 2018 and 2019, I digitized lots of CD-ROMs, including hundreds of Microsoft TechNet CD-ROMs, with the intention of eventually uploading them to the Internet Archive.  However, I was unfamiliar with the process *and* I wanted to avoid uploading images that already existed in the archive, so it wasn't until 2025, with the help of this utility, that I finally began looking for gaps that I could help fill in the Internet Archive's collection.

I started by using this utility's `--csv` option to produce a spreadsheet of all my own TechNet CDs, then with the help of the Internet Archive's [Python Package](https://archive.org/developers/quick-start-pip.html) and a [search.py](search.py) script, I produced a list of TechNet CDs already in the Archive.  I fed that list into `dx.js` using the `--batch` option and appended the results to the same spreadsheet using `--csv` again.

Then I added an `--upload` option to sort the CDs in my spreadsheet by volume name, number of entries on the volume, etc, filter out all the duplicates, and then generate a `bash` script to upload the remaining items.

Here's a stripped-down example of what `--upload` produces:

    # uploading MSTN-CD177-ARMEFPP_EN.iso
    cp "/Software/Discs/Microsoft/TechNet/MSTN-CD177-ARMEFPP_EN.iso" ARMEFPP_EN.iso
    cp "/Software/Discs/Microsoft/TechNet/MSTN-CD177-ARMEFPP_EN.png" ARMEFPP_EN.png
    node dx.js ARMEFPP_EN.iso --dir --truncate > desc.txt
    python upload.py ms-technet-armefpp_en "Microsoft TechNet ARMEFPP_EN Disc (March 2005)" 2005-03-25 desc.txt ARMEFPP_EN.iso ARMEFPP_EN.png
    rm desc.txt ARMEFPP_EN.iso ARMEFPP_EN.png

The upload script modifies my original image filename to match the disc's volume name (since no one else cares about my personal naming scheme), includes any matching photo image, and then passes that information to [upload.py](upload.py) to create a new item in the Internet Archive.

Later, I added an `--update` option to generate another `bash` script that calls [update.py](update.py) to update selected metadata (eg, *title* and *description*).  After generating the initial script, I modified it by hand, changing all the title dates to match those printed on the faces of the CDs.  For the initial dates, I had relied on the `Creation Date` stored in the CD-ROM volume descriptor.  Unfortunately, `Creation Date` usually pre-dated whatever Microsoft ultimately printed on the face of the CD-ROM, often by one month or more.

The upload of TechNet CDs is now complete, and you can browse the results [here](https://archive.org/details/@jeffpar).
