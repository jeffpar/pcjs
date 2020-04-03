---
layout: page
heading: The MS-DOS Encyclopedia
title: "The MS-DOS Encyclopedia: Appendix F: ANSI.SYS Key and Extended Key Codes"
permalink: /documents/books/programming/msdos/encyclopedia/appendix-f/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/appendix-f/
---

### Appendix F: ANSI.SYS Key and Extended Key Codes

{% raw %}

```none
    The following escape sequence allows redefinition of keyboard keys to
    a specified string:

    ESC[code;string;...p

    where:

    string      is either the ASCII code for a single character or a
                string contained in quotation marks. For example, both 65
                and "A" can be used to represent an uppercase A.

    code        is one or more of the following values that represent
                keyboard keys. Semicolons shown in this table must be
                entered in addition to the required semicolons in the
                command line.

╓┌───────────────────────┌─────────┌─────────┌─────────┌─────────────────────╖
    Key                               Code
                        Alone     Shift-    Ctrl-     Alt-
    ──────────────────────────────────────────────────────────────────
    F1                 0;59      0;84      0;94      0;104
    F2                 0;60      8;85      0;95      0;105
    F3                 0;61      0;86      0;96      0;106
    F4                 0;62      0;87      0;97      0;107
    F5                 0;63      0;88      0;98      0;108
    F6                 0;64      0;89      0;99      0;109
    F7                 0;65      0;90      0;100     0;110
    F8                 0;66      0;91      0;101     0;111
    F9                 0;67      0;92      0;102     0;112
    F10                0;68      0;93      0;103     0;113
    Home               0;71      55        0;119     -
    Up Arrow           0;72      56        -         -
    Pg Up              0;73      57        0;132     -
    Left Arrow         0;75      52        0;115     -
    Down Arrow         0;77      54        0;116     -
    End                0;79      49        0;117     -
    Down Arrow         0;80      50        -         -
    Pg Dn              0;81      51        0;118     -
    Ins                0;82      48        -         -
    Del                0;83      46        -         -
    PrtSc              -         -         0;114     -
    A                  97        65        1         0;30
    B                  98        66        2         0;48
    C                  99        67        3         0;46
    D                  100       68        4         0;32
    E                  101       69        5         0;18
    F                  102       70        6         0;33
    G                  103       71        7         0;34
    H                  104       72        8         0;35
    I                  105       73        9         0;23
    J                  106       74        10        0;36
    K                  107       75        11        0;37
    L                  108       76        12        0;38
    M                  109       77        13        0;50
    N                  110       78        14        0;49
    O                  111       79        15        0;24
    P                  112       80        16        0;25
    Q                  113       81        17        0;16
    R                  114       82        18        0;19
    S                  115       83        19        0;31
    T                  116       84        20        0;20
    U                  117       85        21        0;22
    V                  118       86        22        0;47
    W                  119       87        23        0;17
    X                  120       88        24        0;45
    Y                  121       89        25        0;21
    Z                  122       90        26        0;44
    1                  49        33        -         0;120
    2                  50        64        -         0;121
    3                  51        35        -         0;122
    4                  52        36        -         0;123
    5                  53        37        -         0;124
    6                  54        94        -         0;125
    7                  55        38        -         0;126
    8                  56        42        -         0;127
    9                  57        40        -         0;128
    0                  48        41        -         0;129
    -                  45        95        -         0;130
    =                  61        43        -         0;131
    Tab                9         0;15      -         -
    Null               0;3       -         -         -
```

{% endraw %}

Return to [The MS-DOS Encyclopedia](../): [Contents](../#contents)
