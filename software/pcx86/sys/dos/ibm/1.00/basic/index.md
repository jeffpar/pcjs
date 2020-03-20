---
layout: page
title: IBM PC DOS 1.00 BASIC Programs
permalink: /software/pcx86/sys/dos/ibm/1.00/basic/
redirect_from: /apps/pcx86/1981/basic/
machines:
  - id: ibm5150
    type: pcx86
    debugger: true
    config: /configs/pcx86/ibm/5150/machine-cga-debugger.json
    autoMount:
      A:
        name: PC DOS 1.00
      B:
        name: None
    autoType: $date\r
---

Using the PCx86 machine below, you can load any of the BASIC programs distributed with PC DOS 1.00, including
featured BASIC program [DONKEY.BAS](donkey/).

The procedure is simple.  For example, to capture [MUSIC.BAS](#musicbas):

- Run `BASIC` from the DOS prompt
- Type `LOAD "MUSIC"`
- Type `LIST ,"COM1"`

The `LIST` command is used to list all or part of a program on the screen, by including either a single line number
(e.g., `LIST 940`), a range of line numbers (e.g., `LIST 940-960`), or no numbers at all.  And if you want the listing
sent to a different output device, you must append a comma and the name of the device, in quotes.  Since this machine
has been configured with one serial port (COM1) bound to the text window inside the machine's Control Panel,
specifying "COM1" redirects the program listing to that window.  One parallel port has been added to the machine and
bound to the same window as well, so you can also use "LPT1".

Except for the [Music Samples](#music-samples), IBM stored all the BASIC files on the PC DOS 1.00 diskette as *BINARY*
files, to reduce their size; otherwise, one or more of the samples would have had to be removed, since there wasn't
enough space on a single-sided 160Kb diskette.

NOTE: To save a BASIC program as an *ASCII* file, save it with the `A` option; e.g.:

	SAVE "MUSIC",A

{% include machine.html id="ibm5150" %}

### ART.BAS

[[Download](ART.BAS)]

```basic
{% include_relative ART.BAS %}
```

### BALL.BAS

[[Download](BALL.BAS)]

```basic
{% include_relative BALL.BAS %}
```

### CALENDAR.BAS

[[Download](CALENDAR.BAS)]

```basic
{% include_relative CALENDAR.BAS %}
```

### CIRCLE.BAS

[[Download](CIRCLE.BAS)]

```basic
{% include_relative CIRCLE.BAS %}
```

### COMM.BAS

[[Download](COMM.BAS)]

```basic
{% include_relative COMM.BAS %}
```

### DONKEY.BAS

[[Download](DONKEY.BAS)]

```basic
{% include_relative DONKEY.BAS %}
```

### MORTGAGE.BAS

[[Download](MORTGAGE.BAS)]

```basic
{% include_relative MORTGAGE.BAS %}
```

### MUSIC.BAS

[[Download](MUSIC.BAS)]

```basic
{% include_relative MUSIC.BAS %}
```

### PIECHART.BAS

[[Download](PIECHART.BAS)]

```basic
{% include_relative PIECHART.BAS %}
```

### SAMPLES.BAS

[[Download](SAMPLES.BAS)]

```basic
{% include_relative SAMPLES.BAS %}
```

### SPACE.BAS

[[Download](SPACE.BAS)]

```basic
{% include_relative SPACE.BAS %}
```

---

### MUSIC Samples

The rest of the BASIC Samples are not stand-alone programs; they are collections of *DATA* statements loaded
by [MUSIC.BAS](#musicbas) using the *CHAIN* command.

#### BLUE.BAS

[[Download](BLUE.BAS)]

```basic
{% include_relative BLUE.BAS %}
```

#### BUG.BAS

[[Download](BUG.BAS)]

```basic
{% include_relative BUG.BAS %}
```

#### DANDY.BAS

[[Download](DANDY.BAS)]

```basic
{% include_relative DANDY.BAS %}
```

#### FORTY.BAS

[[Download](FORTY.BAS)]

```basic
{% include_relative FORTY.BAS %}
```

#### HAT.BAS

[[Download](HAT.BAS)]

```basic
{% include_relative HAT.BAS %}
```

#### HUMOR.BAS

[[Download](HUMOR.BAS)]

```basic
{% include_relative HUMOR.BAS %}
```

#### MARCH.BAS

[[Download](MARCH.BAS)]

```basic
{% include_relative MARCH.BAS %}
```

#### POP.BAS

[[Download](POP.BAS)]

```basic
{% include_relative POP.BAS %}
```

#### SAKURA.BAS

[[Download](SAKURA.BAS)]

```basic
{% include_relative SAKURA.BAS %}
```

#### SCALES.BAS

[[Download](SCALES.BAS)]

```basic
{% include_relative SCALES.BAS %}
```

#### STARS.BAS

[[Download](STARS.BAS)]

```basic
{% include_relative STARS.BAS %}
```
