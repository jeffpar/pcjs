## TODO

### Minor Improvements

  - Add manual for 101 Mazes
  - Add instructions for Invaders Boot Sector (2019)
  - Add manuals for Turbo Pascal
  - Look into copy-protection status of Software Carousel
  - This [machine](/machines/dec/pdp11/1170/monitor/) says "Debugger" but only this [machine](/machines/dec/pdp11/1170/monitor/debugger/) actually has the Debugger enabled.

### Visual Improvements

  - Turn the [TI patents](/machines/ti/ti57/patents/) into a gallery
  - Machines like DEC PDP-11/70 with VT100 Terminal used to use special CSS classes (machine-right and machine-left) to arrange the machines side-by-side; think about alternatives.

### Link Issues

  - Verify redirects for these remaining [links](/assets/tests/links/)
  - There may be external links to a few text files, which I'm not sure Jekyll will allow me to redirect; eg:
      - /apps/pdp10/diags/ka10/dakam/DAKAM.LST.txt
      - /devices/pcx86/keyboard/8042_INTERN.TXT
    
### Bugs

  - This [COMPAQ machine](https://www.pcjs.org/software/pcx86/sys/dos/compaq/1.12/) does not appear to run their DEMO correctly; either there's an MDA bug or COMPAQ VDU emulation isn't up to the task.
  - This [COMPAQ machine](https://www/pcjs.org/configs/pcx86/machine/compaq/deskpro386/other/2048kb/debugger/visual/machine.xml) doesn't initialize its VGA successfully, and has other other issues as well.

### Mysteries

  - What's up with the Microsoft Chart 2.02 disk image? It fails our BPB check if we make the check too strict (see buildVolume() in diskinfo.js).
    
## Random Tips

### Generating Random Numbers in Jekyll

[Source](https://www.131-studio.com/blogs/shopify-conversion/generate-random-numbers-using-liquid-shopify)

{% raw %}

    The good news is that ... you can actually generate random numbers in Liquid
    through a simple trick: making use of both the liquid's date filters & modulo filter.
    
    Follow these steps:

    Get the current date, using 'now'
    Extract the nanoseconds value from the date, using "%N" date filter.
    Use the modulo filter to get your random value between the min & max of your random number.
    finally, add your min to the result.
    And here is an example, generate a random number from 65 to 80.

    {% assign min = 65 %}
    {% assign max = 80 %}
    {% assign diff = max | minus: min %}
    {% assign randomNumber = "now" | date: "%N" | modulo: diff | plus: min %}

{% endraw %}
