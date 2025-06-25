---
layout: page
title: PCjs Archive Utility
permalink: /tools/dx/
---

This directory contains [dx.js](dx.js), a stand-alone JavaScript command-line utility I created for displaying and extracting the contents of assorted archives and disk images.  It is built upon several other stand-alone JavaScript classes, the key ones being:

  - [dzip.js](dzip.js) (to read ZIP and ARC archive files)
  - [disk.js](disk.js) (to read IMG and JSON-encoded disk images used by PCjs)
  - [iso.js](iso.js) (to read ISO, MDF, and other ISO 9660 disc images)

[dzip.js](dzip.js) in turn uses the `LegacyARC` and `LegacyZIP` classes in [legacy.js](legacy.js), which add support for compression methods older than `deflate`, which is the only compression method that modern `zlib`-based utilities support.

This tool can also assist with [uploading files](#uploading-files-to-the-internet-archive) to the [Internet Archive](https://archive.org).

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

    Arguments: /Users/jeff/Sites/pcjs/tools/dx/dx.js -h

    Usage:
        dx.js [option(s)] [archive(s)]

    Processes ZIP, ARC, IMG, ISO and other archives

    Options:
        --batch [file]     process archives listed in file
        --banner           display archive comments (banners) [-b]
        --compat           enable CD-ROM compatibility mode [-c]
        --csv [file]       output file listings in CSV format
        --dir [dir]        extract files into specified directory [-d]
        --extract          extract files (implied by --dir) [-e,-x]
        --files [spec]     file specification (eg, "*.txt")
        --filter [...]     filter on criteria (see --filter list) [-f]
        --list             list contents of specified archive(s) [-l]
        --nodir            skip archive directory (scan for files) [-n]
        --overwrite        overwrite existing files when extracting [-o]
        --password [...]   decrypt garbled entries using password [-g,-s]
        --path [spec]      archive path specification (eg, "**/*.zip")
        --recurse          process archives within archives [-r]
        --test             test contents of specified archive(s) [-t]
        --upload           generate an upload script for the Internet Archive [-u]
        --verbose          display additional information [-v]
        --warnings         display additional warnings (eg, date errors) [-w]
        --help             display this help message [-h]

### Uploading Files to the Internet Archive

In 2018 and 2019, I digitized lots of CD-ROMs, including hundreds of Microsoft TechNet CD-ROMs, with the intention of eventually uploading them to the Internet Archive.  However, I was unfamiliar with the process *and* I wanted to avoid uploading images that already existed in the archive, so it wasn't until 2025, with the help of this utility, that I finally began looking for gaps that I could help fill in the Internet Archive's collection.

I started by using this utility's `--csv` option to produce a spreadsheet of all my own TechNet CDs, then with the help of the Internet Archive's [Python Package](https://archive.org/developers/quick-start-pip.html) and a [search.py](search.py) script, I produced a list of TechNet CDs already in the Archive.  I fed that list into `dx.js` using the `--batch` option and appended the results to the same spreadsheet using `--csv` again.

Then I added an `--upload` option to sort the CDs in my spreadsheet by volume name, number of entries on the volume, etc, filter out all the duplicates, and then generate a `bash` script to upload the remaining items.

Here's a stripped-down example of what `--upload` produces:

    # uploading MSTN-CD177-ARMEFPP_EN.iso
    cp "/Software/Discs/Microsoft/TechNet/MSTN-CD177-ARMEFPP_EN.iso" ARMEFPP_EN.iso
    cp "/Software/Discs/Microsoft/TechNet/MSTN-CD177-ARMEFPP_EN.png" ARMEFPP_EN.png
    node dx.js "ARMEFPP_EN.iso" --desc > desc.txt
    python upload.py ms-technet-armefpp_en "Microsoft TechNet ARMEFPP_EN Disc (March 2005)" 2005-03-25 desc.txt ARMEFPP_EN.iso ARMEFPP_EN.png
    rm desc.txt ARMEFPP_EN.iso ARMEFPP_EN.png

The upload script modifies my original image filename to match the disc's volume name (since no one else cares about my personal naming scheme), includes any matching photo image, and then passes that information to [upload.py](upload.py) to create a new item in the Internet Archive.

Later, I added an `--update` option to generate another `bash` script to update selected metadata (eg, *title* and *description*), which I then modified by hand, changing all the title dates to match those printed on the faces of the CDs.

For the initial upload dates, I had relied on the `Creation Date` stored in the CD-ROM volume descriptor.  Unfortunately, `Creation Date` usually pre-dated whatever Microsoft ultimately printed on the face of the CD-ROM, usually by at least one month.

You can browse the results [here](https://archive.org/details/@jeffpar).
