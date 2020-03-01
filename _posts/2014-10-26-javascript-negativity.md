---
layout: post
title: JavaScript Negativity
date: 2014-10-26 11:00:00
category: JavaScript
permalink: /blog/2014/10/26/
---

Coming from the C programming language, it's easy to be "negative" about how JavaScript deals with 32-bit integers.

As a newcomer, you quickly learn that JavaScript supports only one numeric data type -- 64-bit floats -- and you groan.

Then you learn that all the "bitwise" operators (**~**, **|**, **&**, **^**, **&lt;&lt;**, **&gt;&gt;** and
**&gt;&gt;&gt;**) treat their operands as 32-bit integer values and produce 32-bit integer results, and you breathe
a sigh of relief.

But then you start noticing oddities.  In C, you can take any 32-bit value, such as -1526726656 (which is equivalent
to 0xA5000000), mask it with 0x80808080, and get 0x80000000.  However, in JavaScript, you actually get -0x80000000,
which, sadly, is not equal to 0x80000000.

To verify, type the following into any JavaScript REPL (eg, Node):

	> n = -1526726656
	-1526726656
	> n &= 0x80808080
	-2147483648
	> n == 0x80000000
    false
	> n == -0x80000000
	true

The sign (bit 31) of every 32-bit result is always extended into the entire 52 "significand" bits of the underlying
64-bit float.  And it's impossible to simply "mask away" those additional sign bits, thanks to a fundamental
restriction of JavaScript bitwise operators: they operate *only* on the low 32 bits.

With one exception: the unsigned right-shift operator.  It does more than simply shift zero bits in from
the left; it also zeros all the bits above the sign bit.  This means that `n >>> 0`, while leaving the low 32 bits
unchanged, also clears the upper bits, resulting in a value that is positive, albeit outside the signed 32-bit range.
It is equivalent to adding the 33-bit value 0x100000000 to a negative 32-bit number:

	> n = (n < 0? n + 0x100000000 : n)
	2147483648
	> n.toString(16)
	'80000000'

These operations work because JavaScript is perfectly capable of representing 0x80000000, or any other 32-bit value,
as a positive number, but it must use a floating point value to do so.  And be careful, because as soon as you perform
*any* bitwise operation on a value with bit 31 set, even an operation as innocuous-looking as:

	> n |= 0
	-2147483648
	> n.toString(16)
    '-80000000'

the result will be negative again.  This is simply how all bitwise operators (except for unsigned right-shift) operate:
they truncate the result to a signed 32-bit value.

This might tempt you to think that the right way to write negative 32-bit constants in hex is to simply precede 
them with a minus sign.  But that would be wrong.  For example, if you wrote the constant 0x80000080 as "-0x80000080",
JavaScript would treat that as negation of 2147483776, resulting in a value whose low 32 bits are 0x7FFFFF80, not
0x80000080.

The safest way to write a 32-bit constant like 0x80000080 is "0x80000080|0", which will produce -2147483520.  If you
write all your negative 32-bit constants that way, then you won't have to resort to using either unsigned right-shifts
or 33-bit addition, which in turn avoids the use of floating point values.

To continue the fun, try setting bit 0 of 0x80000000, which should give you 0x80000001:

	> n |= 1
	-2147483647
	> n.toString(16)
	'-7fffffff'
	
WTF?  Have all the low 32 bits flipped instead?

Actually, no, this time, I'm pulling your leg.  The low 32 bits of the internal value are exactly what you would
expect: 0x80000001 (the internal representation is more like 0xFFFFF80000001).  But as the
[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
explain, for a negative number, toString() returns the positive representation of the number, preceded by a - sign,
*not* the "two's complement" of the number.
 
*[@jeffpar](https://jeffpar.com)*  
*October 26, 2014 (Updated September 8, 2015)* 
