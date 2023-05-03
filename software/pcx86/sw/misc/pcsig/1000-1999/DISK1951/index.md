---
layout: page
title: "PC-SIG Diskette Library (Disk #1951)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1951/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1951"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CMPCALC3"

    CMPCALC3 converts your PC into a programmable calculator for complex
    numbers. Using reverse Polish notation (RPN), like Hewlett-Packard
    calculators, complex numbers and functions become as easy to handle as
    real ones.
    
    CMPCALC3 provides the arithmetical functions of addition, subtraction,
    multiplication and division, as well as the more complex exponential,
    logarithmic, trigonometric, hyperbolic, and square root functions. It
    has nine labeled storage areas, which are shown on the screen, and 41
    numbered storage areas, which are not. CMPCALC3 can memorize programs
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CMPCALC3.DOC

{% raw %}
```










E                          -1CMPCALC3 INSTRUCTION MANUAL-0F


E                                    -109/15/88-0F


E                              -1UDH ENTERPRISES INC.-0F


                         1000 E.Williams St., Suite 100
                    Carson City, Nevada 89701,(702) 885-9918
                                 Copyright 1988









































                              Copyrighted 1988 by UDH Enterprises Inc.












E                               -1TABLE OF CONTENTS-0F






          1. Introduction............................................1

          2. Getting Started.........................................2

          3. Storage Areas...........................................5

          4. Programs - Writing and Memorizing.......................7

          5. Interlude - Program EDCLC..............................10

          6. A More Substantial Program.............................11

          7. Advanced Functions.....................................19

          8. License and Ordering Information.......................20

          9. Note on PC Incompatible MSDOS Machines.................21





























                              Copyrighted 1988 by UDH Enterprises Inc.





                                   CMPCALC3 INSTRUCTIONS  09/15/88 (1)






E                                1. -1Introduction-0F


          CMPCALC3 converts your PC  temporarily  into  a  progammable
          calculator  for  complex  numbers, having real and imaginary
          parts.   It  uses  reverse  Polish  notation   (RPN),   like
          Hewlett-Packard  calculators.Complex  numbers  and functions
          become as easy to handle as real ones.


          In  addition  to   addition,subtraction,multiplication   and
          division,  (+,-,*, and /), CMPCALC3 has complex exponential,
          complex   logarithmic,   complex    trignometric,    complex
          hyperbolic, and a complex square root function.


          It  also has 9 labeled storage areas, which are shown on the
          screen, and 41 numbered storage areas, which are  not.   All
          stores  may  be saved in a .CLC file.  A labeled store whose
          label begins with POL will display its data in polar form.


          CMPCALC3  can  be  used  very  efficently   for   repetitive
          calculations  since  it  can  memorize  programs of up to 50
          commands, and save the program in a .CLC file.


          CMPCALC3 is copyrighted by Soft Engineering Inc., and a cost
          free  license,  for  Enon-commercial  use  onlyF is granted to
          individuals in the  general  public.   (See  last  chapter.)
          CMPCALC3  has  a  much  more powerful big brother, CMPCALC4,
          with 500 command programs, reentrant programs,  the  ability
          to  use  several  programs at once, increased functions, and
          telephone support.  It may be  purchased  for  only  $49.90.
          (See last chapter.)


















                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                   CMPCALC3 INSTRUCTIONS  09/15/88 (2)






E                              2. -1Getting Started-0F


          With  CMPCALC3.EXE  on  your  active   disk/directory   type
          CMPCALC3.  After the title screen you will see:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)


          and  a blank screen.  Pressing H (or h) will show three help
          screens summarizing the information in  these  instructions.
          (Press  H  anytime  you  wish  when you see the instruction,
          nothing will be  lost  and  the  original  display  will  be
          restored immediately after the help screens.)


          For now lets try entering a complex number, say 2+3i.  Enter
          2<blank>3 and press <Enter>.  You should see:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)


          2.0000000000E+00 3.0000000000E+00


          You can enter decimal numbers  as  well  as  integers.   Now
          enter 2.5<blank>3.5.  You should see:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)


           2.5000000000E+00 3.5000000000E+00
           2.0000000000E+00 3.0000000000E+00

          You can also enter numbers in scientific  notation  (As  you
          see   thats   how   they   are   displayed  anyway).   Enter
          5E-1<blank>2E2.  You should see:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)

           5.0000000000E-01 2.0000000000E+02
           2.5000000000E+00 3.5000000000E+00
           2.0000000000E+00 3.0000000000E+00

          Notice how the last number you entered always  goes  to  the
          top  of  the  stack with earlier numbers pushed down?  Thats
          characteristic of RPN calculators.


                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                   CMPCALC3 INSTRUCTIONS  09/15/88 (3)






          Lets do something with these numbers.  With RPN  calculators
          the  top  of  the  stack  is always one of the operands, the
          other (if there is another) is the number immediately  below
          in  the  stack.   Now  enter a + to add the two top numbers.
          You should now see:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)

           3.0000000000E+00 2.0350000000E+02
           2.0000000000E+00 3.0000000000E+00

          Notice  that  the  first  two  numbers  on  the  stack  have
          vanished,  and  the  first  number on the stack is now their
          sum.  The third number on the stack is unchanged (but is now
          the second number.) Had there been more numbers on the stack
          they too would be unchanged.


          We can also subtract the top number on the  stack  from  the
          second by entering -.  This yields:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)

          -1.0000000000E+00-2.0050000000E+02

          Notice how the negative numbers are shown.


          Lets  get  rid  of  this  number  and  enter  new  ones  for
          illustrating multiplication and division.  Entering CLR will
          clear the top number from the stack,  ACLR  will  clear  the
          entire  stack.   Since  our current stack is only one number
          high we can use either.  Do so restoring your screen to:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)


          Now lets enter 1<blank>2 and the 2<blank>1 giving:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)

           2.0000000000E+00 1.0000000000E+00
           1.0000000000E+00 2.0000000000E+00

          To multiply these we enter * yielding:




                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                   CMPCALC3 INSTRUCTIONS  09/15/88 (4)






          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)

           0.0000000000E+00 5.0000000000E+00

          Lets try some  unary  functions,  ones  involving  only  one
          number  (always  the  one at the top of the stack).  To take
          the square root of 5i (the number now on top of  the  stack)
          enter SQRT yielding:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)

           1.5811388301E+00 1.5811388301E+00

          Lets check this result.  Duplicate the number on top of  the
          stack by entering DUP.  You should now have:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)

           1.5811388301E+00 1.5811388301E+00
           1.5811388301E+00 1.5811388301E+00

          Now multiply them together by entering *.  You should see:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)

           7.2759576142E-12 5.0000000000E+00

          Not surprisingly we're (almost) back where we started.


          Inversion (1/) inverts the number on top of the stack.   Try
          it by entering 1/ and getting:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)

           2.9103830457E-13-2.0000000000E-01

          Of course entering another 1/ restores the 5i.


          There is one more elementary binary function,  division  (/)
          which  divides  the second number in the stack by the number
          on top of the  stack,and,  as  always  in  RPN  calculators,
          removes  the  operands  and  places the result on top of the
          stack.  Clear the stack, enter 1<blank>2 and 2<blank>1,  and
          then enter /.  You should have:



                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                   CMPCALC3 INSTRUCTIONS  09/15/88 (5)






          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)

           8.0000000000E-01 6.0000000000E-01

          I'm getting off here.  You now have  all  you  need  to  use
          CMPCALC3  as  a  4 function complex calculator.  Play around
          till you feel comfortable with  it.   When  you're  finished
          enter  FIN  to  return  to  DOS.  See you next chapter where
          we'll learn about  storage  areas,  and  even  do  something
          (somewhat) useful.


E                               3. -1Storage Areas-0F


          CMPCALC3 provides 50  storage  areas  where  you  can  store
          complex   numbers,   either   entered   or   the  result  of
          calculations, and from which you can recall them for further
          calculations.  9 of these areas (the labelled stores) appear
          on the screen, and can be labelled by you, as  anything  you
          wish,  as  long  as  it starts with a letter and has no more
          than 10 characters.


          Numbers may be entered into the labelled storage areas  from
          the  top  of  the  stack, (EallF operations use the top of the
          stack), by entering STO<blank><LABEL> where <LABEL>  is  any
          sequence  of 10 characters or less, beginning with a letter.
          Try it.  Enter 2<blank>3  and  then  STO<blank>STORE1.   You
          should see:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)

           2.0000000000E+00 3.0000000000E+00
                  < 20 Blank Lines>
           2.0000000000E+00 3.0000000000E+00     STORE1

          Lets store another number, this time the square of  2+3i  in
          another  labelled  area  we'll call STORE2.  Remember how to
          square a number?  Enter DUP, then *, and  then  STO  STORE2.
          You should now have:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)

          -5.0000000000E+00 1.2000000000E+01
                 < 16  Blank Lines>
           2.0000000000E+00 3.0000000000E+00     STORE1
          -5.0000000000E+00 1.2000000000E+01     STORE2



                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                   CMPCALC3 INSTRUCTIONS  09/15/88 (6)






          Let us build a table of powers  of  2+3i,  putting  the  3rd
          power  in  STORE3, the 4th in STORE4, and so forth.  (I only
          promised you that I'ld show you something -1somewhat-0 useful in
          this  chapter.  The applications get more practical as we go
          on further.) We now have the square of 2+3i on  top  of  the
          stack,  and  its  first  power in STORE1.  To obtain the 3rd
          power recall STORE1 by entering REC<blank>STORE1,  and  then
          entering *, and STO STORE3.  Repeat the procedure till youve
          built a table of 9 entries:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)

          -8.6158000000E+04 5.6403000000E+04
                   < 12 Blank Lines>
           2.0000000000E+00 3.0000000000E+00     STORE1
          -5.0000000000E+00 1.2000000000E+01     STORE2
          -4.6000000000E+01 9.0000000000E+00     STORE3
          -1.1900000000E+02-1.2000000000E+02     STORE4
           1.2200000000E+02-5.9700000000E+02     STORE5
           2.0350000000E+03-8.2800000000E+02     STORE6
           6.5540000000E+03 4.4490000000E+03     STORE7
          -2.3900000000E+02 2.8560000000E+04     STORE8
          -8.6158000000E+04 5.6403000000E+04     STORE9

          If you try to go beyond the 9th labelled store you will  get
          a  !!STORE FULL!!  message and the attempted storage will be
          rejected.  Try it, nothing will be hurt.


          You  can  release  a  labelled  storage  area  by   entering
          0<blank>0  into  it, (from the top of the stack, of course).
          You are then free to reuse it with the same or  a  different
          label.  Try it.


          There are also 41 numbered storage areas, numbered 10 to 50,
          which do not appear on the screen.  Initially each  one  has
          0+0i   in  store,  (See  for  yourself,  Enter  REC  33  for
          example.), but can be loaded ,like the labelled stores, from
          the top of the stack.  For example try loading store 38 with
          3+8i by entering 3<blank>8, and then STO 38.  You  wont  see
          the  store on your screen, but it's there and can be brought
          to the top of the stack, at any time, by entering REC 38.


          The numbered stores  are  handy  for  storing  constants  in
          formulas,  while  the  labelled  stores are good for holding
          variable  parameters  and  intermediate  or  final  results.
          (We'll  illustrate  this  use  in the next chapter.) You can



                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                   CMPCALC3 INSTRUCTIONS  09/15/88 (7)






          save all stores and labels in a disk file  by  entering  SAV
          <yourname>,  where  <yourname> is any legal filename without
          extension.  (CMPCALC3 will add .CLC.)


          You're on your own for a while now.   Play  around  and  get
          comfortable.   I'll be back next chapter and show you how to
          write and save programs.


E                     4. -1Programs - writing and memorizing-0F


          Lets do something worthwhile, set up a program  for  solving
          quadratic  equations with complex coefficents.  You remember
          the formula from high school algebra: The solution of


          A*X^2+B*X+C = 0 is:


          X1 = (-B+D)/(2*A)  AND  X2 = (-B-D)/(2*A)  WHERE  D = SQRT(B
          *B-4*A*C)


          In  high school A,B, and C were always real, while X1 and X2
          could be complex.  The  formula  works  just  as  well  with
          complex coefficents.  We'll start with A=B=C=1, memorize the
          steps we used to  solve  the  formula,  and  then  solve  it
          automatically with other coefficents.


          We  start by entering MEM to enter the memorizing mode.  The
          heading line now becomes:


          >>MEMORIZING<< ENTER CMPLX NO.OR ORDER ("H" FOR HELP)

          Enter orders as on following table:

          Enter           Why

          ACLR            Clear Stack
          CLS             Clear Stores
          1              Entering value of A. (If entry real drop imag)
          STO A          Store Value in A
          1              Entering value of B
          STO B          Store Value in B
          1              Entering Value of C
          STO C          Store Value in C
          REC B          B now on top of stack


                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                   CMPCALC3 INSTRUCTIONS  09/15/88 (8)






          DUP            B,B now on top of stack
          *              B*B now on top of stack
          REC A          A,B*B now on top
          REC C          C,A,B*B now on top
          *              A*C,B*B now on top
          DUP            A*C,A*C,B*B now ontop
          +              2*A*C,B*B now on top
          DUP            2*A*C,2*A*C,B*B now on top
          +              4*A*C,B*B now on top
          -              B*B-4*A*C now on top
          SQRT           D now on top
          STO D          Store Value in D
          DUP            D,D now on top
          -              0 0 now on top
          REC B          B,0 0 now on top
          -              -B now on top
          REC D          D,-B now on top
          +              (-B+D) now on top
          REC A          A,(-B+D) now on top
          DUP            A,A,(-B+D) now on top
          +              2*A,(-B+D) now on top
          /              X1 now on top
          STO X1         Store Value in X1
          DUP            X1,X1 now on top                                       
          -              0 0 now on top
          REC B          B,0 0 now on top
          -              -B now on top
          REC D          D,-B now on top
          -              (-B-D) now on top
          REC A          A,(-B-D) now on top
          DUP            A,A,(-B-D) now on top
          +              2*A,(-B-D) now on top
          /              X2 now on top
          STO X2         Store Value in X1
          ACLR           Clear stack for neat presentation
          !              End Memorizing

          You should now see:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)
                  < 17 Blank Lines>
           1.0000000000E+00 0.0000000000E+00     B
           1.0000000000E+00 0.0000000000E+00     C
           0.0000000000E+00 1.7320508076E+00     D
          -5.0000000000E-01 8.6602540378E-01     X1
          -5.0000000000E-01-8.6602540378E-01     X2
           1.0000000000E+00 0.0000000000E+00     A





                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                   CMPCALC3 INSTRUCTIONS  09/15/88 (9)






          That was some work that we wont have to go thru again,  save
          it  by entering SAV QUAD.  The program is then saved in file
          QUAD.CLC  and  can  be  recalled  at  anytime  you're  using
          CMPCALC3  by  entering  LOAD QUAD  and  then RPT.  Since the
          program is already in memory we can recall it now by  simply
          entering RPT.Lets do so.


          The display clears and we see:


          !!AUTO!! ENTER CMPLX NO. STEP 3

          This tells us that we are running a memorized program  which
          has  stopped  at  step  3  for data input.  Here is where we
          entered the value for A; lets try a  new  value,  say  1+2i;
          enter 1 2.


          The  value we entered now appears, stored and displayed with
          label A.  The heading now tells us that its at step 5.  It's
          waiting  for  B,  give it 2+3i.  Now, at step 7 give it 3+4i
          for C.  In a flash we get:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)
                   < 14 Blank Lines>
           2.0000000000E+00 3.0000000000E+00     B
           3.0000000000E+00 4.0000000000E+00     C
           4.8355330807E+00-2.8952340448E+00     D
          -8.9549350089E-01-1.1566300206E+00     X1
          -7.0450649911E-01 1.3566300206E+00     X2
           1.0000000000E+00 2.0000000000E+00     A

          Check the result, right from the present display  by  direct
          substitution  in the original equation.  You can do it, it's
          easy.


          The QUAD program is worth some study, note how  I  used  DUP
          and  +  to  avoid  entering 2 and 4, thereby eliminating any
          need for the memorized program  to  stop  for  their  entry.
          Alternatively  I  could  have loaded 2 into a numbered store
          and used it in  the  program  by  REC  its  store.   Such  a
          technique would be necessary if complicated fixed parameters
          were involved.


          Play with the Quad program a while, trying  various  A,B,Cs,
          then try your hand at modifying or improving it.  You should



                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                  CMPCALC3 INSTRUCTIONS  09/15/88 (10)






          be  able  to  somewhat  better  it.   It  was  designed  for
          transparency,  not  efficency.  A command you'll find useful
          is SWI n, where n is any integer >1 and < the depth  of  the
          stack.   It  brings  the number at depth n to the top of the
          stack, and moves the number that was on top to depth n.


          See you next chapter.


E                         5. -1Interlude - Program EDCLC-0F


          Sometimes I forget the details of a program I've saved in  a
          .CLC file.  Occasionally I even make mistakes in the program
          or data entered.  You may have similar problems.  If so  the
          program  in  file EDCLC.EXE will prove handy.  To call it up
          just enter EDCLC from DOS.  It will ask you for the name  of
          the  .CLC  file  you  want  to  work  on, then permit you to
          conveniently inspect and modify it.  Theres no  need  to  go
          into  detail here, the program is self instructing.  Call it
          up and play with QUAD.































                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                  CMPCALC3 INSTRUCTIONS  09/15/88 (11)






E                         6. -1A More Substantial Program-0F


          Lets do some work.  Below is the schematic of  a  1000  ohm,
          1000  hz  cutoff,  m = 0.6, image derived pi section lo pass
          filter.


                               0.191 H       1E-6 Ohms
          Vin ----------------((((((((((----/\/\/\---------------------Vout
                           I    L             R        I          I
                           I        I  I   C2          I          I
                           I--------I  I---------------I          I
                           I        I  I  1.19E-7 Fds. I          / LOAD
                           I                           I          \~1000
                           I C1                   C3   I          / Ohms
                       ---------                  -----------     \~
                       ---------                  -----------     /
                           I 9.5E-8            9.5E-8  I          I
                           I  Fds.              Fds.   I          I
          --------------------------------------------------------------
          Lets  program  and  analyze  this  circuit,  first  for  the
          text-book  case  of  a  lossless inductance, and then with a
          more practical loss resistance.  (It's  a  lousy  filter  as
          you'll  soon  see, but is a passable example of how to put a
          real circuit on the calculator.)


          First we'll load up  the  numbered  stores.   From  CMPCALC3
          enter:  PI,  then DUP, then +, then STO 10, loading store 10
          with 2 pi, which we will need later for converting frequency
          into radians per second.


          We next enter:



          1000, then STO 11, saving Load resistance.
          0 0.191, then STO 12, saving L inductance.
          0 9.5E-8, then STO 13, saving C1 capacitance.
          0 1.19e-7, then STO 14, saving C2 capacitance.
          0 9.5E-8, then STO 15, saving C3 capacitance.

          (Inductance is entered as an imaginary value  because,  when
          multiplied  by  angular  frequency  it  becomes an imaginary
          impedance.  Capacitance is entered  as  an  imaginary  value
          because,  when multiplied by angular frequency it becomes an
          imaginary conductance.  Alternatively, and better, we  could
          have   entered  inductance  and  capacitance  as  real,  and
          frequency as imaginary.).


                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                  CMPCALC3 INSTRUCTIONS  09/15/88 (12)






          We next enter the L resistance as a displayed labeled  store
          by  entering 1E-6, and then STO R.  (Initially we're using a
          very low value to simulate the lossless case.  If we used  0
          then   store   R   would  not  be  displayed  and  might  be
          overwritten.)


          Finally we enter the program: We start by  entering  MEM  to
          enter the memorizing mode.  The heading line now becomes:


          >>MEMORIZING<< ENTER CMPLX NO.OR ORDER ("H" FOR HELP)

          Enter orders as on following table:

          Enter           Why

          ACLR            Clear Stack
          100             First frequency = 100 cps
          REC 10          Recall 2*PI
          *               Angular freq. now on top of stack
          STO W           Save it
          REC 12          Recall L
          *               Now W*L = Impedance of L on top of stack
          REC R
          +               Now impedance of L&R in series on top of stack
          1/              Convert to Admittance
          REC 14          Recall C2
          Rec W           Recall Angular Frequency
          *               C2 Admittance now on top of stack
          +               Get parallel circuit admittance
          1/              Convert to impedance
          STO Z           Save it

          We now can analyze the circuit as a ladder network:


          Vin ------------------------------/\/\/\---------------------Vout
                           I                  Z        I          I
                           I                           I          I
                           I                           I          I
                           I                           I          / LOAD
                           I                           I          \~1000
                           I C1                   C3   I          / Ohms
                       ---------                  -----------     \~
                       ---------                  -----------     /
                           I 9.5E-8            9.5E-8  I          I
                           I  Fds.              Fds.   I          I
          --------------------------------------------------------------

          assuming 1 volt out and calculating i's and v's back to Vin.


                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                  CMPCALC3 INSTRUCTIONS  09/15/88 (13)






          REC 11          Recall Load resistance
          1/              Convert to conductance
          REC 15          Recall C3
          REC W           Recall Angular Frequency
          *               C3 Admittance now on top of stack
          +               Get output circuit admittance = i thru Z
          STO IL          Save it
          *               Drop across Z now on top of stack
          ONE             Assumed volts out = 1
          +               Calculate Vin
          STO VIN         Save it
          REC 13          Recall C1
          REC W           Recall Angular Frequency
          *               C1 Admittance now on top of stack
          *               C1 Current now on top of stack
          REC IL
          +               Current in now on top of stack
          STO I           Save it
          REC VIN
          SWAP
          /               ZIN = VIN/I
          STO ZIN         Store it
          REC VIN
          1/              GAIN = VOUT/VIN = 1/VIN
          STO GAIN        Save it
          STO POLGAIN     Show in polar form
          ACLR            For neatness
          !               End memorizing

          Save the program in file FILT.CLC by entering SAV FILT.


          Your screen should now show:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)
                  < 14 Blank Lines>
           1.0000000000E-06 0.0000000000E+00     R
           6.2831853072E+02 0.0000000000E+00     W
           1.0181905686E-06 1.2109543470E+02     Z
           1.0000000000E-03 5.9690260418E-05     IL
           9.9277178299E-01 1.2109543476E-01     VIN
           9.9277178196E-04 1.1894906668E-04     I
           1.0002553747E+03 2.1313977072E+00     ZIN
           9.9251381136E-01-1.2106396813E-01     GAIN
           9.9987006662E-01-1.2137751335E-01     POLGAIN

          If your screen is different, congratulations !   That  means
          you made a mistake and can find and fix it using EDCLC.




                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                  CMPCALC3 INSTRUCTIONS  09/15/88 (14)






          Return  to  Dos  by entering EDCLC and then give FILT as the
          wanted file.  From the main menu  select  <1>  to  view  the
          program.  You should see:


          STEP COMMAND         STEP COMMAND         STEP COMMAND

             1      ACLR         21         *         41  STO GAIN
             2          @        22         +         42 STO POLGAIN
             3    REC 10         23    STO IL         43      ACLR
             4         *         24         *         44         !
             5     STO W         25       ONE
             6    REC 12         26         +
             7         *         27   STO VIN
             8     REC R         28    REC 13
             9         +         29     REC W
            10        1/         30         *
            11    REC 14         31         *
            12     REC W         32    REC IL
            13         *         33         +
            14         +         34     STO I
            15        1/         35   REC VIN
            16     STO Z         36      SWAP
            17    REC 11         37         /
            18        1/         38   STO ZIN
            19    REC 15         39   REC VIN
            20     REC W         40        1/
          If there are differences, note them, go to <4>  and  correct
          them.


          Look  at  the labeled stores with <2>.  Here only R matters,
          the others are results of calculation.  If its wrong fix  it
          with <5>.


          Look at the numbered stores with <3>.  You should see:
















                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                  CMPCALC3 INSTRUCTIONS  09/15/88 (15)






          filt.CLC Numbered Stores
          Store  Value                           Store  Value
          10  6.2831853072E+00  0.0000000000E+00   30  0.0000000
          11  1.0000000000E+03  0.0000000000E+00   31  0.0000000
          12  0.0000000000E+00  1.9100000000E-01   32  0.0000000
          13  0.0000000000E+00  9.5000000000E-08   33  0.0000000
          14  0.0000000000E+00  1.1900000000E-07   34  0.0000000
          15  0.0000000000E+00  9.5000000000E-08   35  0.0000000
          16  0.0000000000E+00  0.0000000000E+00   36  0.0000000
          17  0.0000000000E+00  0.0000000000E+00   37  0.0000000
          18  0.0000000000E+00  0.0000000000E+00   38  0.0000000
          19  0.0000000000E+00  0.0000000000E+00   39  0.0000000
          20  0.0000000000E+00  0.0000000000E+00   40  0.0000000
          21  0.0000000000E+00  0.0000000000E+00   41  0.0000000
          22  0.0000000000E+00  0.0000000000E+00   42  0.0000000
          23  0.0000000000E+00  0.0000000000E+00   43  0.0000000
          24  0.0000000000E+00  0.0000000000E+00   44  0.0000000
          25  0.0000000000E+00  0.0000000000E+00   45  0.0000000
          26  0.0000000000E+00  0.0000000000E+00   46  0.0000000
          27  0.0000000000E+00  0.0000000000E+00   47  0.0000000
          28  0.0000000000E+00  0.0000000000E+00   48  0.0000000
          29  0.0000000000E+00  0.0000000000E+00   49  0.0000000
          30  0.0000000000E+00  0.0000000000E+00   50  0.0000000
          If your  screen  is  different,  note  the  differences  and
          correct them with <6>.


          Don't  forget  to  save  the  changes to disc.  Then call up
          CMPCALC3, enter LOAD FILT,  then  RPT,  then  100,  and  you
          should get the right screen.  Now enter RPT, and then 200 to
          get:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)
                  < 14 Blank Lines>
           1.0000000000E-06 0.0000000000E+00     R
           1.2566370614E+03 0.0000000000E+00     W
           1.0758427694E-06 2.4895315469E+02     Z
           1.0000000000E-03 1.1938052084E-04     IL
           9.7027984381E-01 2.4895315482E-01     VIN
           9.7027984271E-04 2.3521303395E-04     I
           1.0032423353E+03 1.3374988091E+01     ZIN
           9.6697217181E-01-2.4810447659E-01     GAIN
           9.9829405105E-01-2.5116074589E-01     POLGAIN
          try it at 900 cps:








                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                  CMPCALC3 INSTRUCTIONS  09/15/88 (16)






          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)
                  < 14 Blank Lines>
           1.0000000000E-06 0.0000000000E+00     R
           5.6548667765E+03 0.0000000000E+00     W
           1.3399626709E-05 3.9536852725E+03     Z
           1.0000000000E-03 5.3721234376E-04     IL
          -1.1239685183E+00 3.9536852797E+00     VIN
          -1.1239685356E-03-6.6597418286E-05     I
           7.8880498729E+02-3.5643503608E+03     ZIN
          -6.6526961084E-02-2.3401604444E-01     GAIN
           2.4328860559E-01 1.2938197282E+00     POLGAIN
          and 1100 cps:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)
                  < 14 Blank Lines>
           1.0000000000E-06 0.0000000000E+00     R
           6.9115038379E+03 0.0000000000E+00     W
           1.3603267332E-04-1.5396696081E+04     Z
           1.0000000000E-03 6.5659286460E-04     IL
           1.1109360921E+01-1.5396695992E+01     VIN
           1.1109360727E-02 7.9509199758E-03     I
           5.3580521598E+00-1.3897557038E+03     ZIN
           3.0818574258E-02 4.2712107574E-02     GAIN
           5.2669807790E-02 9.4575855457E-01     POLGAIN
          (I told you that it was a rotten filter !)


          We can check the effect of increased coil losses by changing
          the  value  stored  in R.  Enter 1000, and then Sto R.  Note
          that the first line of the labeled stores changes to:


           1.0000000000E+03 0.0000000000E+00     R

          Now enter RPT, and then 900 to get:



          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)
                  < 14 Blank Lines>
           1.0000000000E+03 0.0000000000E+00     R
           5.6548667765E+03 0.0000000000E+00     W
           1.8958690845E+03-7.1639164719E+02     Z
           1.0000000000E-03 5.3721234376E-04     IL
           3.2807235203E+00 3.0209262714E-01     VIN
           8.3771211174E-04 2.2996575153E-03     I
           5.7477534977E+02-1.2172365796E+03     ZIN
           3.0224807207E-01-2.7831334636E-02     GAIN
           3.0352673730E-01-9.1822165286E-02     POLGAIN



                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                  CMPCALC3 INSTRUCTIONS  09/15/88 (17)






          Now entering RPT, and then 1100 yields:


          ENTER CMPLX NO.OR ORDER ("H" FOR HELP)
                  < 14 Blank Lines>
           1.0000000000E+03 0.0000000000E+00     R
           6.9115038379E+03 0.0000000000E+00     W
           1.4624023097E+03-1.3683007653E+03     Z
           1.0000000000E-03 6.5659286460E-04     IL
           3.3608188288E+00-4.0809784355E-01     VIN
           1.2679541321E-03 2.8632825268E-03     I
           3.1540229331E+02-1.0340939673E+03     ZIN
           2.9322302582E-01 3.5605514791E-02     GAIN
           2.9537687038E-01 1.2083651421E-01     POLGAIN

          A rotten filter is seldom drastically improved by increasing
          parasitics.


          The  program, like the filter leaves much to be desired.  It
          was written for easy understanding, not  efficent  use.   As
          you  get  more  familiar  with CMPCALC3 you'll find that you
          will make much less use of stores for intermediate  results,
          instead  keeping  them  on  the stack.  This saves steps and
          makes for a cleaner display.  A more  efficent  program  for
          the same filter is:



























                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                  CMPCALC3 INSTRUCTIONS  09/15/88 (18)






          STEP COMMAND         STEP COMMAND         STEP COMMAND

             1      ACLR         21         *
             2          @        22         +
             3  STO FREQ         23       DUP
             4    REC 10         24     SWI 3
             5         *         25         *
             6     STO W         26       ONE
             7    REC 12         27         +
             8         *         28       DUP
             9     REC R         29        1/
            10         +         30  STO GAIN
            11        1/         31 STO POLGAIN
            12    REC 14         32       CLR
            13     REC W         33      SWAP
            14         *         34         /
            15         +         35   STO ZIN
            16        1/         36       DUP
            17    REC 11         37         -
            18        1/         38     STO W
            19    REC 15         39      ACLR
            20     REC W         40         !

          For actually analyzing the filter design this program is far
          superior to the previous one.




























                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                  CMPCALC3 INSTRUCTIONS  09/15/88 (19)






E                             7. -1Advanced Functions-0F


          We have already used one of the  functions  in  QUAD,  SQRT.
          When  SQRT  is  entered  the  value  on  top of the stack is
          replaced by its square root, a real number if  the  original
          value  was  real  and  positive, an imaginary or complex one
          otherwise.  SQRT is a bivalued function, besides  the  value
          returned by CMPCALC3, the same value times -1 is equally the
          SQRT function.  In certain procedures, (such as QUAD),  this
          must be allowed for.


          The complex exponential function is obtained by entering EXP
          which replaces the value on top of the stack with  e  raised
          to that value.  The exponential function is single valued.


          Two  complex  trignometric  functions  are furnished SIN and
          COS.  If the complex tangent is needed it can be obtained by
          entering   in   sequence   DUP,  SIN,  SWAP,  COS,  /.   The
          trignometric functions are single valued.


          Two complex hyperbolic  functions  are  furnished  SINH  and
          COSH.  If the complex hyperbolic tangent is needed it can be
          obtained by entering in sequence DUP, SINH, SWAP,  COSH,  /.
          The hyperbolic functions are single valued.


          The  complex logarithmic function is obtained by entering LN
          which replaces the value  on  top  of  the  stack  with  its
          complex    logarithm.     The    logarithmic   function   is
          multi-valued, besides the value returned  by  CMPCALC3,  the
          same  value  +2*n*pi,  where  n  is any positive or negative
          integer,  is  equally  the  SQRT   function.    In   certain
          procedures this must be allowed for.
















                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                  CMPCALC3 INSTRUCTIONS  09/15/88 (20)






E                      8. -1License and Ordering Information-0F


          CMPCALC3, EDCLC, this manual, and all  other  files  on  the
          distribution disk are copyrighted by


                                  UDH Enterprises Inc.
                                  1000 E.William St., Suite 100
                                  Carson City, Nevada 89701

          A royalty free license is hereby granted to  any  individual
          (not corporation) under the following terms:


             (1) License is granted only for educational, hobby,
             public service, or other non-commercial use.

             (2) The programs furnished must not be changed or
             modified in any way.

             (3) Licensees must report any breaches of this agreement,
             known to them, to the licensor, Soft Engineering Inc., at
             the above adress.

             (4) The files provided on the distribution disk may be
             freely provided to others in the furnished form if: a)
             EallF files, including the one containing this license
             notice are distributed Etogether, unmodifiedF in any way,
             and b) No charge is made except for a reasonable material
             and handling charge not to exceed $10.

             (5) This manual, and any other text files furnished, may
             not be distributed in printed out form.

             (6) Violating EanyF of the terms of this notice voids the
             license granted hereby without in any way reducing any
             claims licensor may have against the violator.

          By using CMPCALC3 and/or EDCLC you accept the above license.


          ECMPCALC3 has a much more  powerful  big  brother,  CMPCALC4,
          with  500  command programs, reentrant programs, the ability
          to use several programs at once,  increased  functions,  and
          telephone support free for one year, for only $49.90.  Order
          on your Visa, or Master  Card  by  phoning 1-800-888-7070,
          ext.103, or order by mail from:





                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                  CMPCALC3 INSTRUCTIONS  09/15/88 (21)






                                  UDH Enterprises Inc.
                                  1000 E.William St., Suite 100
                                  Carson City, Nevada 89701F

          If you wish, you may  order  a  new  disc  with  the  latest
          version  of  CMPCALC3 with 30 days of free phone support for
          $15.  Mail orders only, must include payment.














































                                  COPYRIGHT 1988  UDH ENTERPRISES INC.





                                  CMPCALC3 INSTRUCTIONS  09/15/88 (22)






E                   9. -1NOTE TO USERS OF PC INCOMPATIBLE MSDOS-0
                                    -1MACHINES-0F


          If you use a MSDOS machine (such  as  a  Tandy  1000),  then
          CMPCALC3  will  not  operate  properly.   In  that  case use
          CMPCLCG3.EXE  instead  of  CMPCALC3.EXE,  (and   EDCLCG3.EXE
          instead of EDCLC3.EXE).


          There  will be three differences from the description in the
          Manual:


             (1) The program will be called up by typing CMPCLCG3,
             instead of CMPCALC3.

             (2) The line:

             ENTER CMPLX NO.OR ORDER ("H" FOR HELP)
                          will appear at the bottom of the screen,
             instead of at the top.

             (3) The display will change by scrolling, much more
             slowly than CMPCALC3.

          A disk with CMPCLCG3.EXE and EDCLCG3.EXE may be obtained  by
          sending $15.00 with your order to:


                            UDH Enterprises Inc
                            1000 E.William St., Suite 100
                            Carson City, Nevada 89701

          Mail order only, prepaid only.


          You may instead want to  order  the  much  superior  program
          CMPCALC4   which  comes  with  a  version  for  incompatible
          machines on the same disc.   It  may  be  ordered  for  only
          $39.95  from  the  address  above,  or  by phone, using your
          MasterCard or Visa, by calling 1-800-888-7070, ext.103.
```
{% endraw %}

## FILE1951.TXT

{% raw %}
```
Disk No: 1951                                                           
Disk Title: CMPCALC3                                                    
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: CMPCALC3                                                 
Author Version: 3.11                                                    
Author Registration: $49.00                                             
Special Requirements: None.                                             
                                                                        
CMPCALC3 converts your PC into a programmable calculator for complex    
numbers, having real and imaginary parts.  It uses reverse Polish       
notation (RPN), like Hewlett-Packard calculators.  Complex numbers and  
functions become as easy to handle as real ones.                        
                                                                        
In addition to addition, subtraction, multiplication and division,      
CMPCALC3 has complex exponential, logarithmic, trignometric, hyperbolic,
and square root functions.  It has nine labeled storage areas, which are
shown on the screen, and 41 numbered storage areas, which are not.      
It can also memorize programs of up to 50 commands.                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                     <<<<  Disk #1951  CMPCALC3  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To start program, type:  CMPCALC3  (press enter)                        ║
║                                                                         ║
║ To print documentation, type:  COPY CMPCALC3.DOC PRN   (press enter)    ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1951

     Volume in drive A has no label
     Directory of A:\

    CMPCALC3 DOC     45477  11-02-89   8:30a
    CMPCALC3 EXE     25680   5-18-90   2:28p
    EDCLC3   EXE     19216   9-20-89  12:28p
    READ     ME       1276   5-18-90   2:39p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       728   1-01-80   6:50a
    FILE1951 TXT      1851   7-13-90  11:23p
            7 file(s)      94266 bytes
                           64000 bytes free
