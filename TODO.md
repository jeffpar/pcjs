## TODO

  - Verify redirects for these remaining [links](/assets/tests/links/)
  - Turn the TI patents into a gallery: https://www.pcjs.org/devices/ti57/patents/
  - Machines like DEC PDP-11/70 with VT100 Terminal used to use special CSS classes (machine-right and machine-left) to arrange the machines side-by-side; think about alternatives.
  - Someone may have linked to text files (and I'm not sure I can provide redirects for these kinds of links), such as:
      - /apps/pdp10/diags/ka10/dakam/DAKAM.LST.txt
      - /devices/pcx86/keyboard/8042_INTERN.TXT
  - Add manual to page for 101 Mazes
  - Add page with instructions for Invaders Boot Sector (2019)
    
## Tips

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
