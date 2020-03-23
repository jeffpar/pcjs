---
layout: post
title: JavaScript Idiosyncrasies
date: 2015-03-26 11:00:00
category: JavaScript
permalink: /blog/2015/03/26/
---

Time to mention a few JavaScript idiosyncrasies, and how I deal with them.

Also, see my previous posts on [PCjs Coding Conventions](/blog/2014/09/30/) and [JavaScript Negativity](/blog/2014/10/26/).

### Strict Equality

Many JavaScript websites will advise you to *never* use the "==" and "!=" JavaScript operators, because when they compare
variables containing different data types, JavaScript will coerce one of the operands to a matching type, sometimes in
unexpected ways.  We can thank the early days of JavaScript for this feature, when it was trying to be extraordinarily
forgiving of sloppy code.  I'm not going to list all the odd results that can arise from JavaScript's operand coercion,
because there are more than enough examples on the web already.

To avoid unexpected type coercion, and thus unexpected matches and/or mismatches, the usual advice is to *always* use
strict equality operators ("===" and "!==").

I disagree.

In well-written code, the variable data types should always be clear.  In fact, the more you're able to
use [JSDoc](http://developers.google.com/closure/compiler/docs/js-for-compiler) types to declare the data types
of all your parameters, return values, and other variables, the fewer errors you'll have.  As long as you're always
comparing variables with matching types, there shouldn't be any unexpected coercions.

Obviously, there will be times when a polymorphic variable is required, especially when dealing with APIs that can
return multiple types.  But those should be the exception, not the rule.

Another exception is optional parameters.  When I write a method with optional parameters, I generally allow those
parameters to either be omitted (ie, *undefined*) or set to *null*.  Using "==", you can check for either value with
a single comparison:

``` javascript
if (parameter == null) { ... }
```

whereas strict equality requires more work:
 
``` javascript
if (parameter === undefined || parameter === null) { ... }
```

This is one of those times when coercion (of *undefined* to *null*), and the use of "non-strict" operators, is beneficial.
Here's another:

``` javascript
if (!b) { ... }
```

Coercing a value to *boolean* is a popular way of checking for all "falsy" values (ie, *undefined*, *null*,
0, false, "", NaN, etc).  It is shorthand for:

``` javascript
if (b == false) { ... }
```

yet I suspect the proponents of strict equality would embrace the former while rejecting the latter.

However, I don't recommend "falsy" checks for optional parameters:

``` javascript
if (!parameter) { ... }
```

because often a valid numeric parameter might include 0, or a valid string parameter might include "", so it's better
to do this:

``` javascript
if (parameter == null) { ... }
```

and obviously if *null* is also a acceptable value, then you should definitely use strict equality:
	
``` javascript
if (parameter === undefined) { ... }
```

Problems with type coercion are **NOT** problems caused by a poor choice of operators, so trying to make
those problems go away by artificially limiting your choice of operators seems like the wrong solution.
Type coercion problems are, by definition, problems involving mismatched types.  Solutions include:

- Avoid comparing variables of different types; or
- Convert your variables to matching types first; or
- Use strict equality operators (just don't use them mindlessly)

Explicitly convert variables to a single type whenever possible.  For example, I might define a method
that accepts an optional numeric parameter, with a documented default value when it's omitted.  I think it's
important make that parameter unambiguously numeric as soon as possible; eg:

``` javascript
/**
 * foo(n)
 *
 * Performs a mathematical operation on n and returns a result.
 *
 * @param {number} [n] is an optional parameter (defaults to zero if omitted)
 * @return {number}
 */
function foo(n) {
    n = n || 0;
    ...
}
```

The expression `n || 0` might seem pointless, because *undefined* and *zero* are equivalent in a "falsy" sense, but
*undefined* is not a number, and there will be fewer problems downstream if you ensure that n is *always* a number.

### Enumerating Array or Object Properties

When using *for*...*in* loops like this:

``` javascript
var a = [100, 200, 300];
for (var i in a) { ... }
```
	
the type of variable *i* will be **string** rather than **number**; that is, it will contain "0", "1", and "2" rather
than 0, 1, and 2.  If you then use *i* to set a matching element in another array, that element will not be stored in
the same (numeric) position as the original array.

One solution is to convert *i* to a **number**:

``` javascript
parseInt(i, 10);
```

However, a more elegant solution is to use the unary "+" operator to coerce the **string** to a **number**:

``` javascript
+i;
```

The same problem arises with objects using numeric properties.  And watch out for JavaScript's automatic base
conversion of numeric properties.  For example, when you enumerate the properties of object "o":

``` javascript
var o = {
    0x20: ' ',
    0x41: 'A'
};
```

you will get the strings "32" and "65", not "0x20" and "0x41".  You must quote your property names to prevent
any conversion; eg:

``` javascript
var o = {
    "0x20": ' ',
    "0x41": 'A'
};
```

Numeric properties can always be safely converted using the unary "+" operator, regardless whether they were quoted
or not.

The unary "+" is a great alternative to parseInt(), but be mindful of their differences.  One important difference
is that parseInt() will stop when it encounters an invalid digit, returning whatever value was parsed up to that point,
whereas unary "+" conversion will return *NaN* if there are any invalid digits in the string.

### Shift Counts For Bitwise Shifts

It turns out that shifting an integer value by more than 31 bits in either direction may not shift as many bits as
you'd expect.  For example:

``` javascript
n = 0x10000000;
n >>>= 33;
```

will shift n by only *one* bit, not 33 bits, and the result will be 0x08000000, not zero.  This is because,
just like the shift instructions on 32-bit Intel processors, JavaScript converts the shift count to a *mod 32* value
(in other words, it truncates the shift count to a 5-bit value).

So the above example is equivalent to:

``` javascript
n >>>= 1;
```

If you really need larger shift counts to work in a consistent manner, you can perform multiple shifts, where each
shift count is in the range 0-31.  Here's one way to shift a number 33 bits:

``` javascript
n = (n >>> 31) >>> 2;
```

Also, it's not quite correct to say that a shift count of zero has *no* effect on a number:

``` javascript
n = 0x88888888|0;       // n is displayed as -2004318072
n >>>= 0;               // n is displayed as 2290649224
```

It's true that the bottom 32 bits of the number were not changed, but a side-effect of the unsigned shift operator
is that all the upper sign bits are stripped from the (64-bit) result.

Similarly, as soon as you perform any other bitwise operation on the number, even one that does not modify the low
32 bits, the upper bits will revert to the sign of the lower 32-bit value:

``` javascript
n |= 0;                 // n is displayed as -2004318072 again
```
