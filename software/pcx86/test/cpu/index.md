---
layout: page
title: PCx86 CPU Tests
permalink: /software/pcx86/test/cpu/
redirect_from: /tests/pcx86/cpu/
machines:
  - id: ibm5170
    type: pcx86
    config: /configs/pcx86/machine/ibm/5170/cga/640kb/rev3/machine.xml
    autoGen: true
    autoMount:
      B:
        name: "PCx86 CPU Tests"
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
