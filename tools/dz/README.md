---
layout: page
title: PCjs DZ Utility
permalink: /tools/dz/
---

This directory contains [DZ](dz.js), a stand-alone JavaScript command-line utility I created for displaying and extracting the contents of assorted archives and disk images.  It is built upon several other stand-alone JavaScript classes, the key ones being:

  - [DZip](dzip.js) (to read ZIP and ARC archive files)
  - [Disk](disk.js) (to read IMG and JSON-encoded disk images used by PCjs)
  - [ISO](iso.js) (to read ISO, MDF, and other ISO 9660 disc images)

[DZip](dzip.js) in turn relies on the `LegacyARC` and `LegacyZIP` classes in [legacy.js](legacy.js), which add support for compression methods older than `deflate`, which is the only compression method that modern `zlib`-based utilities support.

This tool can also assist with [uploading files](#uploading-files-to-the-internet-archive) to the [Internet Archive](https://archive.org).

### Basic Usage

Here are the prerequisites:

  1. Install [Node and NPM](https://nodejs.org)
  2. Clone the [pcjs](https://github.com/jeffpar/pcjs) repository (eg, `git clone https://github.com/jeffpar/pcjs.git`)
  3. CD into `pcjs` and run `npm install`
  4. From the `pcjs` directory, CD to the `tools/dz` directory

The format of a `dz.js` command (as `--help` will also tell you) is:

    [node] dz.js [options] [archive(s)]

Here is the complete help text:

    dz.js 1.0
    Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>

    Arguments: /Users/jeff/Sites/pcjs/tools/dz/dz.js -h

    Usage:
        dz.js [option(s)] [archive(s)]

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

In 2018 and 2019, I digitized lots of CD-ROMs, including hundreds of Microsoft TechNet CD-ROMs, all with the intention of uploading them to the Internet Archive.  However, I was unfamiliar with the process *and* I wanted to avoid uploading images that already existed in the archive.

Having finally written this utility in 2025, I decided it was time to leverage it and start filling gaps in the Internet Archive's collection.

I started by using this utility's `--csv` option to produce a spreadsheet of all my own TechNet CDs, then with the help of the Internet Archive's [Python Package](https://archive.org/developers/quick-start-pip.html) and a [search.py](search.py) script, I produced a list of TechNet CDs already in the Archive.  I fed that list into `DZ` using the `--batch` option and appended the results to the same spreadsheet using `--csv` again.

Then I sorted my spreadsheet by volume name, number of entries on the volume, etc, and flagged all the duplicates.  Then I fed the filtered CSV list back into `DZ` with the `--batch` option again, and generated an upload script with the `--upload` option.

Here's an example of what `--upload` produced:

    # uploading MSTN-CD177-ARMEFPP_EN.iso
    cp "/Software/Discs/Microsoft/TechNet/MSTN-CD177-ARMEFPP_EN.iso" ARMEFPP_EN.iso
    cp "/Software/Discs/Microsoft/TechNet/MSTN-CD177-ARMEFPP_EN.png" ARMEFPP_EN.png
    node dz.js "ARMEFPP_EN.iso" --desc > desc.txt
    python upload.py ms-technet-armefpp_en "Microsoft TechNet ARMEFPP_EN Disc (March 2005)" 2005-03-25 desc.txt ARMEFPP_EN.iso ARMEFPP_EN.png
    rm desc.txt ARMEFPP_EN.iso ARMEFPP_EN.png

The upload script modifies my original image filename to match the disc's volume name (since no one else cares about my personal naming scheme), includes any matching photo image, and then passes that information to [upload.py](upload.py) to create a new item in the Internet Archive.

NOTE: It uses the `Creation Date` stored in the CD-ROM volume's descriptor as the YYYY-MM-DD to use for the date of the item.  Unfortunately, `Creation Date` usually pre-dates whatever Microsoft decided to print on the face of the CD-ROM, but I decided that manually extracting and entering all the printed dates from the photo images was an exercise for another day.

You can browse the results [here](https://archive.org/details/@jeffpar).
