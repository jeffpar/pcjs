---
layout: page
heading: The MS-DOS Encyclopedia
title: "The MS-DOS Encyclopedia: Appendix L: Intel Hexadecimal Object File Format"
permalink: /documents/books/programming/msdos/encyclopedia/appendix-l/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/appendix-l/
---

### Appendix L: Intel Hexadecimal Object File Format

{% raw %}

```none
        The MCS-86 hexadecimal object file format provides a means of
        recording a program's binary (compiled or assembled) image in a text-
        only (printable) file format. This format makes it easy to transfer
        the program between computers over telephone lines without using
        special communications software. More important, it provides a ready
        means of transferring programs between computers and the various types
        of laboratory equipment typically used during the development of
        specialized programs.

        The MCS-86 hexadecimal file format is a superset of Intel's older
        Intellec-8 hexadecimal object file format. Intel originally designed
        the Intellec-8 format for use with its 8-bit microprocessor line. The
        format rapidly gained acceptance among other microprocessor
        manufacturers. When Intel subsequently developed the MCS-86
        microprocessor family, it also expanded the Intellec-8 hexadecimal
        file format into the MCS-86 hexadecimal file format to support the new
        microprocessors' extended addressing capabilities.

        The MCS-86 hexadecimal object file format should not be confused with
        the object (.OBJ) files produced by the Microsoft Macro Assembler
        (MASM) and language compilers. The MCS-86 hexadecimal object file
        format is referred to as an absolute object file format because the
        code contained within the file has been completely linked and all
        address references have already been resolved. The object modules
        produced by the assembler and compilers (.OBJ files) are referred to
        as relocatable object modules because they contain the information
        necessary to relocate the enclosed code to any memory address for
        execution.

        The MCS-86 hexadecimal object file format consists of four types of
        ASCII text records:

        ■  Data record

        ■  End-of-file record

        ■  Extended-address record

        ■  Start-address record

        All records begin with a record mark consisting of a single ASCII
        colon character (:). The remainder of the record consists of a
        variable number of ASCII hexadecimal digit pairs (00-0FH), each
        representing an unsigned byte value (0-255 decimal). The first digit
        represents the value of the high nibble (bits 7-4) of the byte; the
        second digit represents the value of the low nibble (bits 3-0). These
        digit pairs begin immediately after the record mark and continue
        through the end of the record without any separation between them.

        All records have the following fields, in the order listed:

        ■  A fixed-length record length field

        ■  A fixed-length address field (optional)

        ■  A fixed-length record type field

        ■  A fixed-length or variable-length data field

        ■  A fixed-length checksum field

        The fixed-length record length field consists of the first digit pair
        following the record mark and gives the length of the record-type-
        dependent variable-length data field.

        The optional fixed-length address field consists of the second and
        third digit pairs following the record mark. The first digit pair of
        this field (second digit pair of the record) gives the high byte of a
        word address value (bits 15-8); the second digit pair (third digit
        pair of the record) gives the low byte of a word address value (bits
        7-0). If the record type does not use the address field, then the
        field contains a fill-in value consisting of the four-character ASCII
        string 0000.

        The fixed-length record type field consists of the fourth digit pair
        of the record and indicates the type of data the record contains. The
        valid record-type values are


        Value     Type
        ──────────────────────────────────────────────────────────────────
        00H       Data record
        01H       End-of-file record
        02H       Extended-address record
        03H       Start-address record

        All records end with a fixed-length checksum field. This field
        contains the negative of the sum of all byte values represented by the
        digit pairs in the record, from the record length field through the
        last digit pair before the checksum field. The checksum field is used
        to determine whether an error occurred during the transmission of a
        record between computers or other pieces of equipment.

        (The receiving equipment can easily perform this error checking as
        each record is received. It only has to add all digit pairs of the
        record, including the checksum, and ignore any overflow beyond 8 bits.
        The total should be 00H, because the checksum is the negative of the
        summation of all preceding digit pairs.)

        The variable-length data field of the data record contains the actual
        data bytes of the program's image. In data records, the record length
        field indicates the number of bytes, each represented as a digit pair,
        contained within the data field; the address field gives the offset
        within the current memory segment at which to load the record's data
        into memory.

        The fixed-length data field of the extended-address record establishes
        the memory segment into which subsequent data records are to be
        loaded. In extended-address records, the data field consists of a
        single field identical to the address field. The address field of an
        extended-address record always contains the ASCII 0000 filler, and the
        record length field always contains ASCII 02, which reflects the fixed
        length of the data field. The memory segment (also known as the memory
        frame) established by an extended-address record remains in effect
        until the next extended-address record is encountered; thus, all data
        records following the most recent extended-address record are loaded
        in the established memory segment. See PROGRAMMING IN MS-DOS:
        PROGRAMMING TOOLS: The Microsoft Object Linker.

        Figures L-1 and L-2 show how the extended-address record and the data
        record combine to load the byte values 0FDH, 0B9H, 75H, 31H, 0ECH,
        0A8H, 64H, and 20H into memory starting at address 9A6EH:429FH.


        ┌─┬───┬───────┬───┬───────┬───┐
        │:│0 2│0 0 0 0│0 2│9 A 6 E│F 4│
        └┬┴─┬─┴───┬───┴─┬─┴───┬───┴─┬─┘
            │  │     │     │     │     └──checksum
            │  │     │     │     └────────data = segment address
            │  │     │     └──────────────record type = expanded-address record
            │  │     └────────────────────address (filler)
            │  └──────────────────────────record length
            └─────────────────────────────record mark

        Figure L-1. The extended-address record.


        ┌─┬───┬───────┬───┬───┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─────┬───┐
        │:│0 8│4 2 9 F│0 0│F D B 9 7 5 3 1 E C A 8 6 4 2 0│A 3│
        └┬┴─┬─┴───┬───┴─┬─┴───┴───┴───┴───┬───┴───┴───┴───┴─┬─┘
        │  │     │     │ ┌───────────────┘                 │
        │  │     │     │ │  checksum───────────────────────┘
        │  │     │     │ └─ data
        │  │     │     └────record type = data record
        │  │     └──────────address
        │  └────────────────record length
        └───────────────────record mark

        Figure L-2. The data record.


        The start-address record provides the CS and IP register values at
        which program execution begins. This record contains the register
        values within the fixed-length data field. The address field of a
        start-address record always contains the ASCII 0000 filler, and the
        record length field always contains ASCII 04, which reflects the fixed
        length of the data field. The example in Figure L-3 shows a CS:IP
        setting (program entry point) of F924H:E69AH.

        The end-of-file record marks the end of an MCS-86 hexadecimal file.
        Under the MCS-86 hexadecimal file definition, the end-of-file record
        does not contain any variable-value fields; the record always appears
        as shown in Figure L-4.


        ┌─┬───┬───────┬───┬───────┬───────┬───┐
        │:│0 4│0 0 0 0│0 4│F 9 2 4 E 6 9 A│5 B│
        └┬┴─┬─┴───┬───┴─┬─┴───┬───┴───┬───┴─┬─┘
        │  │     │     │     │       │     │
        │  │     │     │     │       │     └──checksum
        │  │     │     │     │       │        data:
        │  │     │     │     │       └────────IP
        │  │     │     │     └────────────────CS
        │  │     │     └───────────────────record type = start-address record
        │  │     └────────────────────────────address (filler)
        │  └──────────────────────────────────record length
        └─────────────────────────────────────record mark

        Figure L-3. The start-address record.


        ┌─┬───┬───────┬───┬───┐
        │:│0 0│0 0 0 0│0 1│F F│
        └┬┴─┬─┴───┬───┴─┬─┴─┬─┘
        │  │     │     │   │
        │  │     │     │   │
        │  │     │     │   │
        │  │     │     │   └──checksum
        │  │     │     └──────record type = end-of-file record
        │  │     └────────────address (filler)
        │  └──────────────────record length
        └─────────────────────record mark

        Figure L-4. The end-of-file record.


        Traditionally, development equipment and programs that accept the MCS-
        86 hexadecimal file format as input also recognize an alternate end-
        of-file record. The alternate record consists of a data record that
        contains no data; therefore, its record length field contains 00.
        Figure L-5 shows this alternate end-of-file record.

        DEBUG is the only program supplied with MS-DOS that accepts the MCS-86
        hexadecimal file format. Even then, DEBUG only loads hexadecimal files
        into memory; it does not save a program back to disk as a hexadecimal
        file. (The same applies for SYMDEB and for CodeView.)


        ┌─┬───┬───────┬───┬───┐
        │:│0 0│0 0 0 0│0 0│0 0│
        └┬┴─┬─┴───┬───┴─┬─┴─┬─┘
        │  │     │     │   │
        │  │     │     │   └──checksum
        │  │     │     └──────record type = data record
        │  │     └────────────address (filler)
        │  └──────────────────record length
        └─────────────────────record mark

        Figure L-5. The alternate end-of-file record.


        While loading a hexadecimal file, DEBUG actually processes only data
        records and end-of-file records; it ignores both start-address records
        and any extended-address records. Thus, DEBUG actually supports only
        the older Intellec-8 hexadecimal file format but will not reject the
        file if it also contains the newer MCS-86 hexadecimal file records.

        DEBUG does not support MCS-86 records because it must operate within
        the MS-DOS environment and MS-DOS does not support the loading of
        programs into absolute memory locations--a restriction imposed by most
        general-purpose operating systems. Because DEBUG cannot load the data
        records into the absolute segments indicated by the extended-address
        records, it simply loads the program image contained within the data
        records in a manner similar to that in which a .COM program is loaded.
        See PROGRAMMING IN THE MS-DOS ENVIRONMENT: PROGRAMMING FOR MS-DOS:
        Structure of an Application Program. DEBUG uses the address field for
        the data records as the offset into the .COM program segment at which
        to load the contents of the records.

        The sample QuickBASIC (versions 3.0 and later) program shown in Figure
        L-6 converts binary files, including .COM files, into limited MCS-86
        hexadecimal files that DEBUG can load. Examining this program can
        provide additional understanding of the structure of Intel hexadecimal
        files.


        Figure L-6. QuickBASIC binary-to-hexadecimal file conversion utility.


                                                    Keith Burgoyne
```

{% endraw %}

Return to [The MS-DOS Encyclopedia](../): [Contents](../#contents)
