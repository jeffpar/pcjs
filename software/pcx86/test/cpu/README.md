---
layout: page
title: PCx86 CPU Tests
permalink: /software/pcx86/test/cpu/
redirect_from: /tests/pcx86/cpu/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    autoGen: true
    autoMount:
      B: "PCx86 CPU Tests"
    autoType: $date\r$time\rB:\rDIR\r
---

### [CPUID.ASM](cpuid.asm)

```asm
{% include_relative cpuid.asm %}
```

### [ID.ASM](id.asm)

```asm
{% include_relative id.asm %}
```

### [TEST386.ASM](80386/test386.asm)

One early use of the [pc.js](/tools/pc/) utility was running a set of [80386 CPU Tests](https://github.com/jeffpar/pcjs/blob/master/software/pcx86/test/cpu/80386/test386.asm) as a custom ROM image inside an [80386 Test Machine](https://github.com/jeffpar/pcjs/blob/master/tools/pc/test386.json), and then comparing the results to [output](80386/test386.txt) from real hardware.

The test program ([test386.asm](80386/test386.asm)) was carefully designed to be built as a binary (`test386.com`) that could either be run as a DOS program *or* loaded as a ROM image.  To run the tests as a ROM image using `pc.js`:

    cd pcjs/tools/pc
    pc.js test386

```asm
{% include_relative 80386/test386.asm %}
```

{% include machine.html id="ibm5170" %}

### Directory of PCx86 CPU Tests

     Volume in drive A is CPUTESTS
     Directory of A:\

    CPUID    ASM     19038   3-08-20  12:38a
    ID       ASM      2299   3-08-20  12:38a
    ID       COM       347   3-08-20  12:38a
    TEST386  COM     65276   3-08-20  12:38a
            4 file(s)      86960 bytes
                           72192 bytes free
