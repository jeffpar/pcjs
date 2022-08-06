---
layout: post
title: Puzzled Programmers
date: 2017-09-21 10:00:00
permalink: /blog/2017/09/21/
machines:
  - id: ibm5160-msdos320
    type: pcx86
    resume: 1
    config: /machines/pcx86/machine/ibm/5160/ega/640kb/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/MSDOS320-C400.json"}]'
    autoMount:
      A:
        name: None
      B:
        name: None
---

A book I used to have a copy of (and perhaps still do, in the bowels of my storage unit) was "Puzzled Programmers"
by Michael Wiesenberg.  It was published by Microsoft Press in 1987, and I recently rediscovered an online copy in the
[Internet Archive's](https://archive.org) [Open Library](https://openlibrary.org):

> [Puzzled Programmers: 15 mind-boggling story puzzles to test your programming prowess, solutions in BASIC, Pascal, and C](https://openlibrary.org/books/OL2379315M/Puzzled_programmers)

Someone else was currently "borrowing" it, so I added myself to the wait-list, and a few days ago, the Internet Archive
notified me that it was available for reading.  I started skimming it, and noticed that for each of the puzzles, it
included complete solutions in all the aforementioned languages: BASIC, Pascal, and C.  I also noticed this portion of
the Introduction:

> **Timing the Programs on Your Computer**

> Run times are specified for each puzzle, but you should look at these times only as guidelines or, in the vernacular,
as ballpark figures. The figures given are for a Hewlett-Packard Vectra (IBM PC AT compatible) running at a clock speed
of 8 MHz. Obviously, the times will differ with other interpreters and on other computers. The following table gives you
some idea of how long a program ought to take on your particular system. This table shows timings on various systems
of the programs presented in the solution to Puzzle 5.

	Computer                    BASIC                   Turbo Pascal    Microsoft C
	-------------------------------------------------------------------------------
	Tandy 1000 (4.77 MHz)       2 minutes 11 seconds    1.3 seconds     2.4 seconds
	IBM PC XT clone (4.77 MHz)  1 minute 58.5 seconds   1.3 seconds     2.3 seconds
	IBM PC A T (6 MHz)          50 seconds              0.5 seconds     0.9 seconds
	HP Vectra (8 MHz)           35 seconds              0.5 seconds     0.4 seconds
	Macintosh Plus              8 seconds               < 1 second      < 1 second
	Apple II C                  2 minutes 20 seconds    23.6 seconds*   n/a
	-------------------------------------------------------------------------------
	*Apple Pascal

This almost seemed like an invitation to try my hand at Puzzle #5 and see how a PCjs "machine" compared.

### A Pleasant Fourthsum

I skipped ahead to page 27, "Puzzle 5: A Pleasant Fourthsum", and started reading.  I have to admit that the story
completely failed to interest me.  There were lots of irrelevant details about a delicious breakfast that this imaginary
bunch of successful twenty-somethings was enjoying, when suddenly one of them says:

	"Before we get into the future of languages at I-Q, I've got a great computer puzzle for everyone."

which he then states in one sentence:

	"Find a four-digit number that is the sum of the fourth powers of its digits."

and then the conversation returns to other random topics, like whether anyone should be worried that FORTRAN might
become a weapons guidance language, and whether they need to make lunch reservations -- when they've barely finished
breakfast!

Skipping ahead to the "Solutions" section, it turned out that the challenge was to actually find *all* four-digit
numbers, not just *a* number.  Also, only numbers 1000 through 9999 are considered (no numbers with leading zeros).

Just for fun, I created my own solution in JavaScript first:

```javascript
let p = new Array(10);

/**
 * test(n)
 *
 * Returns true IFF the number matches the criteria.
 *
 * @param {number} n
 * @returns {boolean}
 */
function test(n) {
    let total = 0;
    let value = n;
    while (n) {
        total += p[n % 10];
        n = (n / 10)|0;
    }
    return total == value;
}

function run() {
    let n = 1000;
    for (let d = 0; d < 10; d++) {
        p[d] = Math.pow(d, 4);
    }
    while (true) {
        if (test(n)) console.log(n);
        if (++n > 9999) break;
    }
}

run();
```

then I looked at the solutions in "Puzzled Programmers".  Here's the BASIC solution:

```bas
5 REM BASIC Solution to Puzzle #5 in "Puzzled Programmers" (c) 1987
10 DIM PWR(9)
20 FOR I = 0 TO 9
30  PWR(I) = I^4
40 NEXT I
50 H000 = 1000
60 FOR H = 1 TO 9
70  I00 = 0
80  FOR I = 0 TO 9
90   J0 = 0
100   FOR J = 0 TO 9
110    PARTSUM = H000 + I00 + J0
120    PART4THS = PWR(H) + PWR(I) + PWR(J)
130    FOR K = 0 TO 9
140     SUM = PARTSUM + K
150     IF PART4THS + PWR(K) <> SUM THEN 190
160     PRINT SUM; "= ";
170     PRINT USING "#^4 + "; H, I, J;
180     PRINT USING "#^4"; K
190    NEXT K
200    J0 = J0 + 10
210   NEXT J
220   I00 = I00 + 100
230  NEXT I
240  H000 = H000 + 1000
250 NEXT H
```

and the C solution (which I modified to loop 100 times, to make timing with a stopwatch easier):

```c
/* C solution to puzzle #5 in "Puzzled Programmers" (c) 1987 */
main()
{
  int pwr[10], /* the fourth power of each digit */
      h,    /* the digit in the thousands position */
      h000, /* h * 1000, that is, the value of the number
    in the thousands position */
      i,    /* the digit in the hundreds position */
      i00,  /* i * 100, that is, the value of the number
    in the hundreds position */
      j,    /* the digit in the tens position */
      j0,   /* i * 10, that is, the value of the number
    in the tens position */
      part4ths, /* h^4 + i^4 + j^4 */
      partsum, /* h000 + i00 + j0 */
      k,    /* the digit in the ones position */
      sum, l;

  for (i = 0; i < 10; i++) pwr[i] = i * i * i * i;
  for (l = 100; l-- > 0;) {
    for (h000 = 1000, h = 1; h <= 9; h++, h000 += 1000) {
      /* thousands digit */
      for (i00 = i = 0; i <= 9; i++, i00 += 100) {
        /* hundreds digit */
        for ( j0 = j = 0; j <= 9; j++, j0 += 10) {
          /* tens digit */
          partsum = h000 + i00 + j0;
          part4ths = pwr[h] + pwr[i] + pwr[j];
          for (   k = 0; k <= 9; k++) { /* ones digit */
            sum = partsum + k;          /* this produces the four-digit number */
            if (part4ths + pwr[k] == sum) {
              if (!l) printf("%d = %d^4 + %d^4 + %d^4 + %d^4\n",
                 sum, h, i, j, k);
            }
          }
        }
      }
    }
  }
}
```

Here's my own C solution, which is slightly smaller and faster than the book's solution:

```c
/* @jeffpar's optimized C solution to puzzle #5 */
main()
{
    int p[10];
    int d, l, n, s;
    for (d = 0; d < 10; d++) p[d] = d * d * d * d;
    for (l = 100; l-- > 0;) {   /* loop 100 times for timing purposes */
        for (n = 100; n < 1000; n++) {
            /* I originally used a "do...while (t /= 10)" loop here
               to create the power summation (where t was a copy of n),
               but since we know n is a 3-digit number, we can inline
               all three power references and minimize the number of
               divisions; we also bias the sum by -(n*10) so that we
               don't have to add (n*10) to d for the final comparison. */
            s = p[n/100] + p[(n/10)%10] + p[n%10] - (n*10);
            for (d = 0; d < 10; d++) {
                if (s + p[d] == d) {
                    if (!l) printf("%d = %d^4 + %d^4 + %d^4 + %d^4\n",
                           n * 10 + d, n/100, (n/10)%10, n%10, d);
                }
            }
        }
    }
}
```

And finally, here's the book's Pascal solution:

```pascal
program sum4ths(input, output);
var
  pwr:      { the fourth power of each number, 0 to 9       }
              array[0..9] of integer;
  h,        { the digit in the thousands position           }
  h000,     { h * 1000, that is, the value of the number
              in the thousands position                     }
  i,        { the digit in the hundreds position            }
  i00,      { i * 100, that is, the value of the number in
              the hundreds position                         }
  j,        { the digits in the tens position               }
  j0,       { j * 10, that is, the value of the number in
              the tens position                             }
  part4ths, { h^4 + i^4 + j^4                               }
  partsum,  { h000 + i00 + j0                               }
  k,        { the digit in the ones position                }
  sum:        integer;

begin
  for i := 0 to 9 do pwr[i] := i * i * i * i;
  h000 := 1000;
  for h := 1 to 9 do begin { thousands digit }
    i00 := 0;
    for i := 0 to 9 do begin { hundreds digit }
      j0 := 0;
      for j := 0 to 9 do begin { tens digits }
        partsum := h000 + i00 + j0;
        part4ths := pwr[h] + pwr[i] + pwr[j];
        for k := 0 to 9 do begin { ones digit }
          sum := partsum + k; { this produces the four-digit number }
          if part4ths + pwr[k] = sum then
            writeln(sum, ' = ', h, '^4 + ', i, '^4 + ', j, '^4 + ', k, '^4')
        end;
        j0 := j0 + 10;
      end;
      i00 := i00 + 100;
    end;
    h000 := h000 + 1000;
  end
end.
```

You can play with all these solutions in the 4.77Mhz IBM PC XT machine below.  Use `CD \PUZZLED\PUZZLE5` to switch
to the directory for Puzzle #5.

To run the BASIC version, use `GWBASIC`, since the machine boots MS-DOS 3.20:

	C:\PUZZLED\PUZZLE5>GWBASIC PUZZLE5.BAS

To compile and run the C version, you can use the pre-installed copy of Microsoft C 4.00:

	C:\PUZZLED\PUZZLE5>cl puzzle5.c
	Microsoft (R) C Compiler  Version 4.00
	Copyright (C) Microsoft Corp 1984, 1985, 1986.  All rights reserved.
	
	puzzle5.c
	Microsoft (R) Overlay Linker  Version 3.51
	Copyright (C) Microsoft Corp 1983, 1984, 1985, 1986.  All rights reserved.
	
	Object Modules [.OBJ]: PUZZLE5.OBJ 
	Run File [PUZZLE5.EXE]: PUZZLE5.EXE/NOI
	List File [NUL.MAP]: NUL
	Libraries [.LIB]: ;
	
	C:\PUZZLED\PUZZLE5>puzzle5
	1634 = 1^4 + 6^4 + 3^4 + 4^4
	8208 = 8^4 + 2^4 + 0^4 + 8^4
	9474 = 9^4 + 4^4 + 7^4 + 4^4

To compile and run the Pascal version, load diskette "IBM Pascal 1.00 (Combined)" in drive A, and then type the
commands shown below:

	C:\PUZZLED\PUZZLE5>a:pas1
	IBM Personal Computer Pascal Compiler 
	Version 1.00 (C)Copyright IBM Corp 1981
	Source filename [.PAS]: puzzle5p
	Object filename [PUZZLE5P.OBJ]: 
	Source listing  [NUL.LST]: 
	Object listing  [NUL.COD]: puzzle5p
	 Pass One    No Errors Detected.
	
	C:\PUZZLED\PUZZLE5>a:pas2
	
	 Code Area Size = #0296  (662)
	 Cons Area Size = #004C  (76)
	 Data Area Size = #002A  (42)
	
	 Pass Two    No Errors Detected.
	
	C:\PUZZLED\PUZZLE5>a:link
	IBM Personal Computer Linker
	Version 1.00 (C) Copyright IBM Corp 1981
	Object Modules: puzzle5p
	Run File: puzzle5p
	List File [PUZZLE5P.MAP] :
	Libraries [ ] : 
	Publics [No]: 
	Line Numbers [No]: 
	Stack size [Object file stack]: 
	Load Low [Yes]: 
	DSAllocation [No]: 
	
	C:\PUZZLED\PUZZLE5>puzzle5p
	    1634 =        1^4 +        6^4 +        3^4 +        4^4
	    8208 =        8^4 +        2^4 +        0^4 +        8^4
	    9474 =        9^4 +        4^4 +        7^4 +        4^4

It appears that PCjs is somewhat faster than a real machine.  For example, the author's BASIC solution ran
for almost two minutes on a PC XT clone, but it finishes in about one and a half minutes on the 4.77Mhz PC XT
configuration below.

Clearly, I still have some work to do if I want PCjs to faithfully simulate how *slow* these systems used to be. 

{% include machine.html id="ibm5160-msdos320" %}
