---
layout: page
title: PCjs DZ Utility
permalink: /tools/dz/
---

This directory contains [DZ](dz.js), a stand-alone JavaScript command-line utility I created for displaying and extracting the contents of assorted archives and disk images. It is built upon several other stand-alone JavaScript classes, the key ones being:

  - [DZip](dzip.js) (to read ZIP and ARC archive files)
  - [Disk](disk.js) (to read IMG and JSON-encoded disk images used by PCjs)
  - [ISO](iso.js) (to read ISO, MDF, and other ISO 9660 disc images)

[DZip](dzip.js) in turn relies on the `LegacyARC` and `LegacyZIP` classes in [legacy.js](legacy.js), which add support for compression methods older than `deflate`, which is the only compression method that modern `zlib`-based utilities support.

This tool also assists me with uploads to the Internet Archive.  For example, I digitized hundreds Microsoft TechNet CD-ROMs seven years ago, so I used this utility's `--csv` option to produce a spreadsheet of all those TechNet CDs, then with the help of [search.py](search.py), I produced a list of TechNet CDs already on the Internet Archive. I fed that list into [DZ](dz.js) using the `--batch` option and appended the results to the same spreadsheet using `--csv` again.  Then I sorted the spreadsheet by volume name, number of entries on the volume, etc, and flagged all the duplicates.  Then I fed the filtered CSV list back into [DZ](dz.js) with the `--batch` option and generated an upload script with the `--upload` option.

Here's an example of what the `--upload` option produces:

    # uploading MSTN-CD177-ARMEFPP_EN.iso
    cp "/Software/Discs/Microsoft/TechNet/MSTN-CD177-ARMEFPP_EN.iso" ARMEFPP_EN.iso
    cp "/Software/Discs/Microsoft/TechNet/MSTN-CD177-ARMEFPP_EN.png" ARMEFPP_EN.png
    node dz.js "ARMEFPP_EN.iso" --desc > desc.txt
    python upload.py ms-technet-armefpp_en "Microsoft TechNet ARMEFPP_EN Disc (March 2005)" 2005-03-25 desc.txt ARMEFPP_EN.iso ARMEFPP_EN.png
    rm desc.txt ARMEFPP_EN.iso ARMEFPP_EN.png

The upload script renames the disc image files to match the disc's volume name, and it uses the Creation Date stored in the volume's descriptor as the YYYY-MM-DD to use for the date of the image.  Note that the Creation Date usually pre-dates whatever Microsoft decided to print on the face of the CD-ROM, but manually extracting and entering all the printed dates is an exercise for another day.
