---
layout: page
heading: The MS-DOS Encyclopedia
title: "The MS-DOS Encyclopedia: Appendix D: ASCII Character Set and IBM Extended Character Set"
permalink: /documents/books/programming/mspl13/msdos/encyclopedia/appendix-d/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/appendix-d/
---

### Appendix D: ASCII Character Set and IBM Extended Character Set

{% raw %}

```none
╓┌──────────────┌────────┌─────────┌────────┌────────────────────────────────╖
    Char      Dec#     Hex#      Control
    ──────────────────────────────────────────────────────────────────
                0       00        NUL      (Null)
               1       01        SOH      (Start of heading)
               2       02        STX      (Start of text)
               3       03        ETX      (End of text)
               4       04        EOT      (End of transmission)
               5       05        ENQ      (Enquiry)
               6       06        ACK      (Acknowledge)
               7       07        BEL      (Bell)
               8       08        BS       (Backspace)
                9       09        HT       (Horizontal tab)
                10       0A        LF       (Linefeed)
                11       0B        VT       (Vertical tab)
                12       0C        FF       (Formfeed)
                13       0D        CR       (Carriage return)
              14       0E        SO       (Shift out)
              15       0F        SI       (Shift in)
              16       10        DLE      (Data link escape)
              17       11        DC1      (Device control 1)
              18       12        DC2      (Device control 2)
              19       13        DC3      (Device control 3)
              20       14        DC4      (Device control 4)
              21       15        NAK      (Negative acknowledge)
              22       16        SYN      (Synchronous idle)
              23       17        ETB      (End transmission block)
              24       18        CAN      (Cancel)
              25       19        EM       (End of medium)
              26       1A        SUB      (Substitute)
              27       1B        ESC      (Escape)
              28       1C        FS       (File separator)
              29       1D        GS       (Group separator)
              30       1E        RS       (Record separator)
                31       1F        US       (Unit separator)
    <space>   32       20
    !         33       21
    "         34       22
    #         35       23
    $         36       24
    %         37       25
    &         38       26
    '         39       27
    (         40       28
    )         41       29
    *         42       2A
    +         43       2B
    ,         44       2C
    -         45       2D
    .         46       2E
    /         47       2F
    0         48       30
    1         49       31
    2         50       32
    3         51       33
    4         52       34
    5         53       35
    6         54       36
    7         55       37
    8         56       38
    9         57       39
    :         58       3A
    ;         59       3B
    <         60       3C
    =         61       3D
    >         62       3E
    ?         63       3F
    @         64       40
    A         65       41
    B         66       42
    C         67       43
    D         68       44
    E         69       45
    F         70       46
    G         71       47
    H         72       48
    I         73       49
    J         74       4A
    K         75       4B
    L         76       4C
    M         77       4D
    N         78       4E
    O         79       4F
    P         80       50
    Q         81       51
    R         82       52
    S         83       53
    T         84       54
    U         85       55
    V         86       56
    W         87       57
    X         88       58
    Y         89       59
    Z         90       5A
    [         91       5B
    \         92       5C
    ]         93       5D
    ^         94       5E
    _         95       5F
    `         96       60
    a         97       61
    b         98       62
    c         99       63
    d        100       64
    e        101       65
    f        102       66
    g        103       67
    h        104       68
    i        105       69
    j        106       6A
    k        107       6B
    l        108       6C
    m        109       6D
    n        110       6E
    o        111       6F
    p        112       70
    q        113       71
    r        114       72
    s        115       73
    t        116       74
    u        117       75
    v        118       76
    w        119       77
    x        120       78
    y        121       79
    z        122       7A
    {        123       7B
    |        124       7C
    }        125       7D
    ~        126       7E
             127       7F        DEL
    Ç        128       80
    ü        129       81
    é        130       82
    â        131       83
    ä        132       84
    à        133       85
    å        134       86
    ç        135       87
    ê        136       88
    ë        137       89
    è        138       8A
    ï        139       8B
    î        140       8C
    ì        141       8D
    Ä        142       8E
    Å        143       8F
    É        144       90
    æ        145       91
    Æ        146       92
    ô        147       93
    ö        148       94
    ò        149       95
    û        150       96
    ù        151       97
    ÿ        152       98
    Ö        153       99
    Ü        154       9A
    ¢        155       9B
    £        156       9C
    ¥        157       9D
    ₧        158       9E
    ƒ        159       9F
    á        160       A0
    í        161       A1
    ó        162       A2
    ú        163       A3
    ñ        164       A4
    Ñ        165       A5
    ª        166       A6
    º        167       A7
    ¿        168       A8
    ⌐        169       A9
    ¬        170       AA
    ½        171       AB
    ¼        172       AC
    ¡        173       AD
    «        174       AE
    »        175       AF
    ░        176       B0
    ▒        177       B1
    ▓        178       B2
    │        179       B3
    ┤        180       B4
    ╡        181       B5
    ╢        182       B6
    ╖        183       B7
    ╕        184       B8
    ╣        185       B9
    ║        186       BA
    ╗        187       BB
    ╝        188       BC
    ╜        189       BD
    ╛        190       BE
    ┐        191       BF
    └        192       C0
    ┴        193       C1
    ┬        194       C2
    ├        195       C3
    ─        196       C4
    ┼        197       C5
    ╞        198       C6
    ╟        199       C7
    ╚        200       C8
    ╔        201       C9
    ╩        202       CA
    ╦        203       CB
    ╠        204       CC
    ═        205       CD
    ╬        206       CE
    ╧        207       CF
    ╨        208       D0
    ╤        209       D1
    ╥        210       D2
    ╙        211       D3
    ╘        212       D4
    ╒        213       D5
    ╓        214       D6
    ╫        215       D7
    ╪        216       D8
    ┘        217       D9
    ┌        218       DA
    █        219       DB
    ▄        220       DC
    ▌        221       DD
    ▐        222       DE
    ▀        223       DF
                224       E0
    ß        225       E1
    Γ        226       E2
    π        227       E3
    Σ        228       E4
    σ        229       E5
    µ        230       E6
    τ        231       E7
    Φ        232       E8
    Θ        233       E9
    Ω        234       EA
    δ        235       EB
    ∞        236       EC
    φ        237       ED
    ε        238       EE
    ∩        239       EF
    ≡        240       F0
    ±        241       F1
    ≥        242       F2
    ≤        243       F3
    ⌠        244       F4
    ⌡        245       F5
    ÷        246       F6
    ≈        247       F7
    °        248       F8
    ∙        249       F9
    ·        250       FA
    √        251       FB
    ⁿ        252       FC
    ²        253       FD
    ■        254       FE
             255       FF
```

{% endraw %}

Return to [The MS-DOS Encyclopedia](../): [Contents](../#contents)
