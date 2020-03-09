---
layout: post
title: PCjs Coding Conventions
date: 2014-09-30 11:00:00
category: JavaScript
permalink: /blog/2014/09/30/
---

Here are a few highlights of the (evolving) JavaScript coding conventions used in PCjs.

### Tabs vs. Spaces

I've configured my IDE ([WebStorm](http://www.jetbrains.com/webstorm/)) to NEVER use tab characters in .js files
(spaces only) and to ALWAYS use tab characters in almost every other type of text file.  This is largely because
when a web browser displays a JavaScript file (either in the main window or in the Developer Tools window), tabs
usually screw up the formatting, which I find annoying when I'm debugging.  XML files, on the other hand,
are usually reformatted by the browser anyway, so in those cases, I opt for smaller files and use real tabs.

Note that most of the JavaScript delivered by a PCjs production server will have been compiled by Google's
Closure Compiler, which completely eliminates all non-essential whitespace, so this is just a development
preference, with little to no impact on production files.

Regardless of the choice of tab character however, I almost always use 4-column tab stops, except in legacy .asm
files, where 8-column tab stops were the norm.

I've noticed that 2-column tab stops have recently become popular, especially in Node projects; NPM, for example,
will rewrite package.json files, replacing my 4-column spacing with 2-column spacing.  I don't fight that trend -- I
just ignore it.

### Constants

Property names with all UPPER-CASE letters (with optional numbers and/or underscores) represent constants.

I originally adopted this rule in part because it's a popular C language convention, but also because it
made it easy to write a preprocessing script (see the PCjs Grunt task **prepjs** in /modules/grunts/prepjs/)
that replaced all such property references with the corresponding property values and then removed the original
property definitions.  Of course, this convention also depended on the properties never being modified *or* enumerated.
  
I later discovered that Google's Closure Compiler does an excellent job of automatically inlining properties
that are never modified or enumerated, so the **prepjs** preprocessing script is no longer used, but I've stuck
with the UPPER-CASE convention.

I don't bother with JSDoc *@const* annotations, because 1) the project contains far too many constants, 2)
all the constants are already effectively annotated by virtue of being UPPER-CASE, and 3) there is no noticeable
improvement in the Closure Compiler's inlining capability with the addition of *@const*.

All constants associated with a component are normally attached to the component's constructor; ie, as properties of
the constructor.  If you think of a JavaScript constructor as a "class', then constants attached to the constructor
can be thought of as "class constants".

For example, the ChipSet component, which manages (among other things) Programmable Interrupt Controllers or PICs,
*could* define the constant for an EOI command like this:

``` javascript
ChipSet.EOI = 0x20;                     // non-specific EOI (end-of-interrupt)
```

but since the EOI command is actually one of a number Operation Command Words (specifically, OCW2), I include an
"OCW2_" prefix in the constant name:

``` javascript
ChipSet.OCW2_EOI = 0x20;                // non-specific EOI (end-of-interrupt)
```

and since I also like to group constants that are associated with a particular register or port, and since I don't
want the ChipSet constructor becoming littered with property constants, I first define a constant object; in this
case, **PIC_LO**:

``` javascript
ChipSet.PIC_LO = {};
ChipSet.PIC_LO.OCW2_EOI = 0x20;         // non-specific EOI (end-of-interrupt)
ChipSet.PIC_LO.OCW2_EOI_SPEC = 0x60;    // specific EOI
ChipSet.PIC_LO.OCW2_EOI_ROT = 0xA0;     // rotate on non-specific EOI
ChipSet.PIC_LO.OCW2_EOI_ROTSPEC = 0xE0; // rotate on specific EOI
```

By using fully-qualified property names for each constant, the code has a more C-like appearance (think *#define*)
that's also easier to preprocess.

However, I've gradually switched to the more conventional JavaScript object notation for class constants:
 
``` javascript
ChipSet.PIC_LO = {
    OCW2_EOI:           0x20,           // non-specific EOI (end-of-interrupt)
    OCW2_EOI_SPEC:      0x60,           // specific EOI
    OCW2_EOI_ROT:       0xA0,           // rotate on non-specific EOI
    OCW2_EOI_ROTSPEC:   0xE0            // rotate on specific EOI
};
```

because, again, the Closure Compiler does an excellent job inlining such constants (or indeed any property that is
never modified *or* enumerated).

### DEBUG vs. RELEASE

While we're talking about constants, it's important to be aware of constants that are not scoped to
any particular component.

In [/modules/shared/lib/defines.js](/modules/shared/lib/defines.js), **DEBUG** is set to **TRUE**,
enabling all debug-only code by default.  It is also declared as a *@define* so that the Closure Compiler can
override it, setting it to **FALSE** and disabling debug-only code.

To ensure that debug-only code is not simply *disabled* but also *removed*, the code should be wrapped with:

``` javascript
if (DEBUG) {
    [code to be removed by the Closure Compiler]
}
```

In many cases, the compiler is able to completely remove calls to debug-only class methods; eg:

``` javascript
Component.assert(off >= 0 && off < this.cb);
```

However, calls to debug-only instance methods seem to be more problematic, so all such calls are wrapped; eg:

``` javascript
if (DEBUG) this.log('load("' + sFileURL + '")');
```

There are a number of other important shared constants in [/modules/shared/lib/defines.js](/modules/shared/lib/defines.js)
and PCjs-specific constants in [/modules/pcx86/lib/defines.js](/modules/pcx86/lib/defines.js); refer
to those files for more information.

### Braces and Parentheses

Most opening braces appear at the end of the line containing the associated "if", "while", "for", "switch",
"function", etc, preceded by a single space.  And most opening parentheses are also preceded by a single space,
except when following "function" or a function name, in which case there is NO space.

There's always the occasional exception.  For example, the opening brace of all the top-level (documented)
functions in a module may appear on its own line, because the extra whitespace can make the code a bit more
readable.

It's also important to be aware of JavaScript's automatic semicolon insertion feature and the associated danger of
putting an opening brace below a *return* statement that wants to return an object literal.  As long as you (and
your IDE) are aware of that specific danger, there's no need to be dogmatic about opening braces.

### Variable Names

I still tend to follow Charles Simonyi's "[Hungarian](http://en.wikipedia.org/wiki/Hungarian_notation)" naming
conventions -- or rather, a naming convention loosely inspired by Hungarian.

For example, if I need a string or numeric variable representing a "thing," I will name it "sThing" if it's a
string or "iThing" if it's a number (or possibly "nThings" if it represents a total of Things or "cThings"
if it's a counter of Things).  If a string or numeric variable has a very short-term use, I'll probably just name
it "s" or "i".

As I mention [below](./#quotation-marks), I still tend to distinguish single characters from strings too,
which means I may sometimes prefix character variables with "ch" and character counters with "cch".

Of course, variable name prefixes like "s" and "n" are irrelevant if you've already given your variables meaningful
names like "nameOfPerson" or "numberOfPeople".  And that's fine -- I sometimes do that as well.  But in general,
I still prefer variable names like "sPerson" and "nPeople".

I don't try to come up with special prefixes for Objects.  If there's a Person object, for example, I'll probably
use colloquial names like "personHere" or "personThere".  I am stricter with Arrays though: I prefix array variables
with "a", arrays of strings and numbers with "as" and "ai" (or "an"), arrays of arrays with "aa", etc.  As for Arrays
of anything else, I usually don't bother with anything more than an "a" prefix.

### Quotation Marks

Because of my C background, I prefer to use double-quotes around multi-character strings and single quotes
around single-character strings.  While the reasons for doing so are largely historical and currently irrelevant,
characters are STILL the building blocks of strings, and even the JavaScript String class contains methods that
deal with individual characters (eg, charCodeAt() and fromCharCode()).  So for any code that deals explicitly with
individual characters, I like to reinforce that with single quotes.

Also, to emphasize that object property names aren't really strings (even though strings can be used as property
names), I tend to use single quotes when quoting property names.  That does make me somewhat inconsistent with
the JSON standard, which insists that property names be double-quoted, but JSON.stringify() takes care of that, so
it's not really a problem.  Besides, I have a lot of quibbles with the JSON standard, like its "disapproval" of
comments and hexadecimal constants, and its failure to faithfully serialize and deserialize uninitialized Array
objects, but I'll leave my gripes about JSON for another post.

Generally speaking, the only time I quote property names is when I have to.  I'll use the "dot" syntax; eg:

``` javascript
obj.prop = true;
```

instead of:

``` javascript
obj['prop'] = true;
```

unless the property name doesn't conform to variable name syntax (eg, if it starts with a digit) or if it's a
"public" property and therefore I can't risk Google's Closure Compiler "minifying" the property name to something
else.

I break my own quoting rules slightly when dealing with strings that *contain* double-quotes, since it's more readable
to put double-quotes inside single-quoted strings than to "escape" every double-quote with a backslash.

For code that I originally wrote in PHP and later ported to JavaScript, there was a tendency in the original
code to always use double-quotes around strings and "escape" double-quotes regardless, and that tendency may linger
in code I didn't feel like rewriting much, but the tendency was due more to idiosyncrasies of PHP than any convention
of mine; for example:

- single-quoted PHP strings may not include any escaped characters (except for single-quote and backslash)
- single-quoted PHP strings cannot resolve references to string variables (eg, "the value of foo is {$foo}")

Because of PHP's restrictions on single-quoted strings, I tended to avoid them.  However, in JavaScript, those
restrictions/features don't exist.

### JSDoc

Most of the PCjs code is documented with [JSDoc](http://usejsdoc.org/) annotations -- not
because I want to be able to generate documentation (although that's something to think about), but because
it's the only way to tell both the Closure Compiler and my IDE exactly what data types are passed around.
The goals are to minimize the number of "code inspection" warnings in the IDE and produce warning-free
compilations.

In order to use the Closure Compiler's ADVANCED_OPTIMIZATIONS option and get maximum performance (and maximum
"minification", a form of "uglification"), every function and its parameters needs to be fully typed; otherwise,
the Compiler generates way too many warnings/errors -- at least, that was the case when I first started using
it a couple of years ago.

I've adopted a zero-tolerance policy for warnings: nothing gets checked in if the Closure Compiler generates even
a single warning.

And finally, speaking of warnings, I've had to tell [WebStorm](http://www.jetbrains.com/webstorm/) to "shut up"
about a few:

- Unfiltered for…in loop
- Bitwise operator usage
- Comma expressions
- loop statement that doesn't loop
- “throw” of exception caught locally

I acknowledge those those features can introduce bugs if you're not careful, so I make sure I'm careful.  I don't
subscribe to the dogmatic approach that others (eg, the author of JSLint) take about so-called "risky" features.
I agree that it's always a good idea to walk to the crosswalk before crossing a street, but I don't agree that it's
*never* a good idea to cross in the middle sometimes, too.

I've also made the following "weak warnings" instead of "warnings":

- Unused JavaScript / ActionScript local symbol

because it's a useful warning, but I don't like being penalized for functions that have been "prototyped" a specific
way but can't always be implemented exactly as prototyped.

*[@jeffpar](https://jeffpar.com)*  
*September 30, 2014*
