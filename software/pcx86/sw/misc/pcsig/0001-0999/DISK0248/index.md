---
layout: page
title: "PC-SIG Diskette Library (Disk #248)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0248/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0248"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PASCAL MATH LIBRARY"

    File Descriptions
    -------    ---   User-supported complex function library - version 1.2
    COMPLEX    LIB   Function library 1.3
    COMPLEX    DOC   Documentation  (32K)
    COMPLEXP   PAS   Pascal sample program
    COMPLEXF   FOR   Fortran sample program
    -------    ---   Pascal programs
    LISTING    COM   Lists Turbo Pascal files with xreference and begin/end
    blocks
    LISTING    DOC   Documentation for LISTING.COM
    LISTING    PAS   Source code for LISTING.COM
    PRINTER    COM   Sets Epson printer settings
    PRINTER    PAS   Source code for PRINTER.COM
    FUNCTION   PAS   Additional functions for Turbo Pascal
    FUNCTION   DOC   Documentation for FUNCTION.PAS
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COMPLEX.DOC

{% raw %}
```






          -----------------------------------------------------------

                        S R COMPLEX FUNCTION LIBRARY

                       For the IBM PC and the IBM PC
                       FORTRAN and  Pascal compilers

                                 Version 1.3

                  (C) Copyrighted by Robert Fruit, 1984,1987

         ------------------------------------------------------------

     GENERAL INFORMATION

     With the advent of version 2.0 of IBM Pascal and FORTRAN compilers,
     it has become practical to do serious numerical work with them.  In
     accord with the new capabilities of these two compilers, a library of
     functions of complex variables has been developed.  The library
     includes the arithmetic, trigonometric, and transcendental functions,
     in both single and double precision.  That library, COMPLEX.LIB is
     found on this disk.  There are four things that make up the complete
     complex function library.

          COMPLEX.DOC   documentation file for the complex function library
          COMPLEX.LIB   complex function library
          COMPLEXP.PAS  example Pascal program using the complex functions
          COMPLEXF.FOR  example FORTRAN program using the complex functions

     The documentation has five parts.  The first part is the general
     information that introduces you the the complex function library.  The
     second part is for those who will be using the library with Pascal
     programs.  The third part is for those who will be using the library
     with FORTRAN programs.  The fourth part is specific information needed
     both Pascal and FORTRAN users.  The fifth part contains the information
     on how you can be register owner of the complex function library.

     It is recommended that everyone who to us the complex function library
     print and read the entire documentation file, before starting to use
     it.
         ------------------------------------------------------------

     NOTICE - A limited license is granted to all users of this library, to
              make copies of this program and distribute them to other
              users, on the following conditions:

           1- The notices contained on the first two pages of the
              documentation, and the copyright notice inside the library,
              are not altered or removed.




     Documentation for Complex Function Library                      page 2



           2- The library and its documentation are not distributed to
              others in modified form.

           3- No fee is to be charged for copying or distributing the
              library or its documentation without an express written
              agreement with Robert Fruit.  Computer clubs are allowed to
              charge a distribution fee, so long as it does not exceed
              $10.00 total.

           4- Companies are granted permission by the author to copy the
              complex function library and documentation for use on other
              computers and at other locations in the company, so long as:

              a- The full $25.00 registration fee has been paid for the
                 original copy of the library.

              b- A usage fee of $15.00 is paid for each additional
                 "building" where the complex function library will be
                 used.  Within any building for which the usage fee has
                 been paid, the complex function library, may be copied
                 freely for use on any computers in that building.

     DISCLAIMER -  However, the author cannot be held liable to you
              or anyone to whom you pass part of or all of the complex
              library functions, be that as a library or part of any
              program that you create with the library.  The author will
              not be liable for any damages, including any lost profits,
              lost savings, or other incidental or consequential damages
              arising out of the use of, or inability to use these library
              functions, even if the author has been advised of the
              possibility of such damages, or any claim by any other party.

                  (C) Copyright 1984,1987 by Robert Fruit
                      P.O. Box 295, Clarendon Hills, Ill. 60521

         ------------------------------------------------------------

     PASCAL PROGRAM USERS

     All the libraries to be used with Pascal programs were compiled using
     IBM's Pascal Compiler 2.0.  The changes that went into version 2.0 of
     the Pascal compiler are such that programs created using the 2.0
     compiler are not compatible with programs using earlier versions of
     the Pascal compiler.  If you are not using an IBM Pascal compiler of
     version 2.0 or greater, then this library will not be of use to you.
     If someone wants a library to use with an earlier version of Pascal,
     they can request a special service.  At this time I have not experi-
     mented with using the 2.0 library building program with the earlier
     version of IBM's Pascal.  It might be possible to build a library
     for the earlier version of Pascal.  If one cannot be built, your fee
     for the extra service would be returned.




     Documentation for Complex Function Library                      page 3


     All the usual complex functions have been created for this library.
     To use these functions TYPE COMPLEX and DCOMPLEX must be defined,
     before the functions are defined in the program.  The complex types
     are used in defining the complex functions.  The complex type
     declared are:

     TYPE
       COMPLEX  = ARRAY[1..2] OF REAL4;
       DCOMPLEX = ARRAY[1..2] OF REAL8;

     The complex functions available are:

      SINGLE      DOUBLE
     PRECISION   PRECISION     DESCRIPTION

     CADD(X,Y)   CDADD(X,Y)    add the complex values X and Y
     CSUB(X,Y)   CDSUB(X,Y)    subtract (X-Y) the complex values X and Y
     CMUL(X,Y)   CDMUL(X,Y)    multiply the complex values X and Y
     CDIV(X,Y)   CDDIV(X,Y)    divide (X/Y) the complex values X and Y
     CINV(X)     CDINV(X)      1/X for complex X
     CNPOWR(N,X) CDNPOWR(N,X)  raise complex X to integer power N
     CNROOT(N,X) CDNROOT(N,X)  take integer root, N, of complex X
     CSQRT(X)    CDSQRT(X)     take square root of complex X
     CEXP(X)     CDEXP(X)      raise e to complex X
     CLN(X)      CDLN(X)       take log to base e of complex X
     CLOGXY(X,Y) CDLOGXY(X,Y)  take log of complex base Y of complex X
     CYX(X,Y)    CDYX(X,Y)     raise complex Y to complex power X
     CSIN(X)     CDSIN(X)      sine of complex X
     CCOS(X)     CDCOS(X)      cosine of complex X
     CTAN(X)     CDTAN(X)      tangent of complex X
     CARCSIN(X)  CDARCSIN(X)   arc sine of complex X
     CARCCOS(X)  CDARCCOS(X)   arc cosine of complex X
     CARCTAN(X)  CDARCTAN(X)   arc tangent of complex X

     When the single precision functions are used, the X and Y values are of
     type COMPLEX.  When the double precision functions are used the X and
     Y are of type DCOMPLEX.  The integer, N, is always of the type INTEGER,
     never of the type INTEGER4.

     Since no linking is done in the creation of the library, any functions
     used from it can be linked with any of the Pascal compiler libraries.
     If you use the REGMATH version of the Pascal library, then all the
     functions called from the complex function library will have the
     REGMATH properties.  If you use the 8087ONLY version of the Pascal
     library, then all the functions called from the complex function
     library will have the 8087ONLY properties.  It would be advisable that
     no one create a program with the complex library and link with the
     EMULATOR version of the Pascal library.  The time penality that anyone
     without an 8087 co-processor chip would pay, makes the EMULATOR version
     a poor choice.  It would be better to just use the REGMATH version,
     rather than the EMULATOR version, in almost every instance.

     Below is an example of the way a Pascal program would define the
     EXTERNAL functions in the complex library.




     Documentation for Complex Function Library                      page 4


     TYPE
       COMPLEX  = ARRAY[1..2] OF REAL4;
       DCOMPLEX = ARRAY[1..2] OF REAL8;

     FUNCTION CADD( X,Y : COMPLEX) : COMPLEX; EXTERN;
     FUNCTION CSUB( X,Y : COMPLEX) : COMPLEX; EXTERN;
     FUNCTION CMUL( X,Y : COMPLEX) : COMPLEX; EXTERN;
     FUNCTION CDIV( X,Y : COMPLEX) : COMPLEX; EXTERN;
     FUNCTION CINV( X : COMPLEX): : COMPLEX; EXTERN;
     FUNCTION CNPOWR( N : INTEGER; X : COMPLEX) : COMPLEX; EXTERN;
     FUNCTION CNROOT( N : INTEGER; X : COMPLEX) : COMPLEX; EXTERN;
     FUNCTION CSQRT( X : COMPLEX) : COMPLEX; EXTERN;
     FUNCTION CEXP( X : COMPLEX) : COMPLEX; EXTERN;
     FUNCTION CLN( X : COMPLEX) : COMPLEX; EXTERN;
     FUNCTION CLOGXY( X,Y : COMPLEX) : COMPLEX; EXTERN;
     FUNCTION CYX( X,Y : COMPLEX) : COMPLEX; EXTERN;
     FUNCTION CSIN( X : COMPLEX) : COMPLEX; EXTERN;
     FUNCTION CCOS( X : COMPLEX) : COMPLEX; EXTERN;
     FUNCTION CTAN( X : COMPLEX) : COMPLEX; EXTERN;
     FUNCTION CARCSIN( X : COMPLEX) : COMPLEX; EXTERN;
     FUNCTION CARCCOS( X : COMPLEX) : COMPLEX; EXTERN;
     FUNCTION CARCTAN( X : COMPLEX) : COMPLEX; EXTERN;

     The definitions shown here are for single precision functions.  If
     double precision functions are wanted, two things must be done
     differently.  First, the C at the beginning of each function name
     must be changed to CD.  Second, DCOMPLEX must be used in place of
     COMPLEX every place it appears.  If the COMPLEX type were used
     with a function that starts with CD, the program would compile and
     link.  However, there is no telling what the results would be.  The
     program could mysteriously hang up, making you turn the computer off
     to regain control.  Strange results, which may or may not be obviously
     wrong, could be occurring.  Double check all programs to make sure that
     the correct definitions are being used when the functions are defined.
     Never mix single and double precision types in the function calls.  If
     a single precision variable, or number, is to be used in a double
     precision function, convert it before the call is made.  Mixing the
     single and double precision types in the other direction is just as
     bad.

     The steps necessary to link a program using the complex function
     library will be covered in the fourth part of this documentation.

     With the information provided here, and the example program
     COMPLEXP.PAS, there should be no problems with using the portions of
     the complex function library needed for your Pascal programs.

     FORTRAN PROGRAM USERS

     All the libraries to be used with FORTRAN programs were compiled using
     IBM's FORTRAN Compiler 2.0.  The changes that went into the 2.0 version
     of the compiler are such that programs created using the earlier version
     of FORTRAN are not compatible.  This means that if you are using an




     Documentation for Complex Function Library                      page 5


     earlier version of FORTRAN, this library will not be of any use to
     you.  If someone wants a library to use with an earlier version of
     FORTRAN, they should request a special service.  I have not experimented
     with using the 2.0 library building program with the earlier versions
     of FORTRAN.  If a library cannot be built, the fee for the extra service
     would be returned.

     All the usual complex functions have been created for this library.
     To use these functions, there are a few things that must be known about
     the variables used in the SUBROUTINEs.  The X,Y,and Z have the
     following definitions:

     For single precision SUBROUTINEs   REAL*4 X(2),Y(2),Z(2)
     For double precision SUBROUTINEs   REAL*8 X(2),Y(2),Z(2)

     The FORTRAN SUBROUTINEs available are:

      SINGLE       DOUBLE
     PRECISION    PRECISION     DESCRIPTION

     FCADD(X,Y,Z) FCDADD(X,Y,Z) add the complex values X and Y, answer in Z
     FCSUB(X,Y,Z) FCDSUB(X,Y,Z) subtract (X-Y) the complex values X and Y,
                                answer in Z
     FCMUL(X,Y,Z) FCDMUL(X,Y,Z) multiply the complex values X and Y, answer
                                in Z
     FCDIV(X,Y,Z) FCDDIV(X,Y,Z) divide (X/Y) the complex values X and Y,
                                answer in Z
     FCINV(X,Z)   FCDINV(X,Z)   1/X for complex Z, answer in Z
     FCNPR(N,X,Z) FCDNPR(N,X,Z) raise complex X to the integer power N,
                                answer in Z
     FCNRT(N,X,Z) FCDNRT(N,X,Z) take the integer root N of complex X,
                                answer in Z
     FCSQR(X,Z)   FCDSQR(X,Z)   take the square root of complex X, answer
                                in Z
     FCEXP(X,Z)   FCDEXP(X,Z)   raise e to the complex X, answer in Z
     FCLN(X,Z)    FCDLN(X,Z)    take log to base e of complex X, answer
                                in Z
     FCLGY(X,Z)   FCDLGY(X,Z)   take log to complex base Y of complex X,
                                answer in Z
     FCYX(X,Y,Z)  FCDYX(X,Y,Z)  raise complex Y to complex power X, answer
                                in Z
     FCSIN(X,Z)   FCDSIN(X,Z)   sine of complex X, answer in Z
     FCCOS(X,Z)   FCDCOS(X,Z)   cosine of complex X, answer in Z
     FCTAN(X,Z)   FCDTAN(X,Z)   tangent of complex X, answer in Z
     FCASN(X,Z)   FCDASN(X,Z)   arc sine of complex X, answer in Z
     FCACS(X,Z)   FCDACS(X,Z)   arc cosine of complex X, answer in Z
     FCATN(X,Z)   FCDATN(X,Z)   arc tangent of complex X, answer in Z

     When the SUBROUTINE is single precision (that is the ones that start
     with FC) the X,Y, and Z are also single precision.  When the SUBROUTINE
     is double precision (that is, the ones that start with FCD) the X,Y, and
     Z are also double precision.  The integer, N, is always INTEGER*2
     regardless of whether the SUBROUTINE is single or double precision.
     That means the integer, N, is never an INTEGER*4.




     Documentation for Complex Function Library                      page 6


     Since no linking is done in the creation of the library, any functions
     used from it can be linked with any of the FORTRAN compiler libraries.
     If you use the REGMATH version of the FORTRAN library, then all the
     functions called from the complex function library will have the
     REGMATH properties.  If you use the 8087ONLY version of the FORTRAN
     library, then all the functions called from the complex function
     library will have the 8087ONLY properties.  It would be advisable that
     no one create a program with the complex library and link with the
     EMULATOR version of the FORTRAN library.  The time penality that anyone
     without an 8087 co-processor chip would pay, makes the EMULATOR version
     a poor choice.  It would be better to just use the REGMATH version,
     rather than the EMULATOR version, in almost every instance.

     The FORTRAN compiler expects calls for the complex function to look
     like:

     REAL*4 X(2),Y(2),Z(2)

     CALL FCADD(X,Y,Z)
     CALL FCSUB(X,Y,Z)
     CALL FCMUL(X,Y,Z)
     CALL FCDIV(X,Y,Z)
     CALL FCINV(X,Z)
     CALL FCNPR(N,X,Z)
     CALL FCNRT(N,X,Z)
     CALL FCSQR(X,Z)
     CALL FCEXP(X,Z)
     CALL FCLN(X,Z)
     CALL FCLGY(X,Y,Z)
     CALL FCYX(X,Y,Z)
     CALL FCSIN(X,Z)
     CALL FCCOS(X,Z)
     CALL FCTAN(X,Z)
     CALL FCASN(X,Z)
     CALL FCACS(X,Z)
     CALL FCATN(X,Z)

     FORTRAN assumes that all CALLs are for external subroutines, so the
     link step will look for the names in the libraries.

     The definitions shown here are for single precision functions.  If
     double precision functions are wanted, two things must be done
     differently.  First, the FC at the beginning of each subroutine name
     must be changed to FCD.  Second, the REAL*4 must be a REAL*8.  If
     the REAL*4 number type was used with the double precision functions,
     the program would compile and link.  However, there is no telling what
     the results would be.  The program could mysteriously hang up, making
     you turn off the computer to regain control.  Strange results, which may
     or may not be obviously wrong, could be occurring.  Double check all
     programs to make sure that the correct definitions are being used when
     the functions are called.  Never mix single and double precision
     definitions in the functions calls.  If a single precision variable
     is to be used in a double precision function, convert the variable




     Documentation for Complex Function Library                      page 7


     before the call is made.  Mixing the single and double precision
     definitions in the other direction is just as bad.

     The steps necessary to link a program using the complex function
     library will be covered in the fourth part of this documentation.

     With the information provided here, and the example program
     COMPLEXF.FOR, there should be no problem using the portions of the
     library needed for your FORTRAN programs.

     EVERYONE USING THE COMPLEX FUNCTION LIBRARY

     Due to the differences in the FORTRAN and Pascal compilers, there are
     two sets of the complex functions in the library, one for Pascal
     programs, and one for FORTRAN programs.  It was easier to write them
     twice than it was to make one set work with both compilers.  This
     means that the FORTRAN subroutines should never be called by a
     Pascal program, and the Pascal functions should never be called by a
     FORTRAN program.  Creating two sets of all the functions makes the
     complex function library about 75% larger than it would otherwise be,
     if one set of the functions could be made available to both languages.

     The link step must be changed slightly to call in the complex function
     library.  For this example it will be assumed that the Pascal example
     program was used on a computer with two disk drives.  The linker disk
     will be in drive A:, and the program object file, COMPLEXP.OBJ, and
     the complex function library, COMPLEX.LIB, will be in drive B:.  Call
     up the linker as you normally would, then:

         Object Modules [.OBJ]: COMPLEXP
         Run File [COMPLEXP.EXE]:
         List File [NUL.MAP]:
         Libraries [.LIB]: B:COMPLEX.LIB,A:PASCAL.LIB

     Notice the only thing that you are doing differently is on the
     libraries line.  Then, not only is the location of the libraries given,
     but its full name is given also.  If you follow this step exactly, then
     you will have no problem in compiling the example program.  If you
     want to compile the FORTRAN library, then its link step would look
     like:

         Object Modules [.OBJ]: COMPLEXF
         Run File [COMPLEXF.EXE]:
         List File [NUL.MAP]:
         Libraries [.LIB]: B:COMPLEX,A:FORTRAN.LIB

     There are six reserved words in the library.  If they are used in such a
     way that the complier will check for them in the library then unpredict-
     able things may happen.  Those reserved word are:

         ACOPYRIGHT               FARSN               FDRC2P
         COMPLEXS                 FDARSN              FRC2P




     Documentation for Complex Function Library                      page 8


     The best advice is not to use the reserve words anywhere in programs
     that will be linked using the complex function library.

     Should there be any difficulty with using the complex function library
     or the example program, contact me, Robert Fruit, at:

         Robert Fruit
         Simulation Rule
         P.O. Box 295
         Clarendon Hills, Ill. 60514

    Below is an sample of the program COMPLEXP.PAS, using a complex X of
    1.25 1.5, and a complex Y of 0.75 1.4, and an integer N of 8.  This
    sample will let you compare the results you get with the correct values.

     COMPLEXP

     What is the complex X? 1.25 1.5
     What is the complex Y? .75 1.4
     What is the integer N? 8
                    COMPLEX FUNCTION TEST

        X REAL         X COMPLEX          Y REAL        Y COMPLEX       N
        1.25000          1.5000           0.75000         1.40000        8

     X + Y =                    2.00000     2.90000
     X - Y =                    0.50000     0.10000
     X * Y =                   -1.16250     2.87500
     X / Y =                    1.20416    -0.24777
     X TO THE N POWER =       158.09690   140.14530      0.00354   -0.00314
     N ROOT OF X =              1.94454     0.17678      1.94454    0.17678
     SQUARE ROOT OF X =         1.26542     0.59269      1.25000    1.50000
     E TO THE X POWER =         0.24690     3.48160      1.25000    1.50000
     E TO THE -X POWER =        0.02027    -0.28579      1.25000    1.50000
     COMPLEX LN(X) =            0.66914     0.87606      1.25000    1.50000
     LOG OF X BASE Y =          0.91045    -0.22979      1.25000    1.50000
     Y TO THE X POWER =        -0.16063     0.31477      1.25000    1.50000
     COMPLEX SIN(X) =           2.23240     0.67141      1.25000    1.50000
     COMPLEX COS(X) =           0.74177    -2.02065      1.25000   -1.50000
     COMPLEX TAN(X) =           0.06458     1.08108      1.25000    1.50000
     COMPLEX ARCSIN(X) =        0.63321     1.37956      1.25000    1.50000
     COMPLEX ARCCOS(X) =        0.93759    -1.37956      1.25000    1.50000
     COMPLEX ARCTAN(X) =        1.20748     0.36525      1.25000    1.50000

     For the four arithmetic operations (+,-,*,/) it is easy to check that
     that the real and complex parts of the results shown are correct.
     However, for the other functions, it is not obvious what the correct
     results should be.  To help with seeing that a function is working,
     the function and its inverse are shown on the same line.  The first
     two numbers are the real and complex parts of applying the function.
     The third and fourth column are the real and complex parts after
     applying the function's inverse to the values in columns one and
     two.




     Documentation for Complex Function Library                      page 9


     There is one exception to this display of a function and its inverse.
     That occurs on the lines 'X to the N power' and 'N root of X'.  Since
     the inverse function is on the line below, the inverse of X to the N
     power, is found on the line below.  The values in columns three and
     four are the negative powers of N used on the same X.  As in columns
     one and two, the inverse is on the line below.

     One thing that should be remembered in complex functions is that
     applying a function, and then applying the function's inverse to
     the results, may not return you to the original value.  Usually, the
     difference is either a multiple of Pi, or a half integer multiple of
     Pi.  So don't assume that different results automatically mean that
     something is wrong.

     The minus sign on the 1.5 on the COS(X) might surprise you, but it is
     correct.  Remember that COS(X) = COS(-X), so when the inverse of the
     function is run, it cannot know what the sign should be.  This is just
     as it is with the square root function.  The sign on the square root
     of a number can be either + or -.  The + sign is usually shown, just
     because that is the convention, but it doesn't need to be that way.
     This is another way answers can be different, and still be correct.

     There is another line that may appear wrong because the inverse does
     not return the original values.  That is the N root of X line.  This
     is another example of how the trigonometric nature of complex functions
     does not always act in a manner we would expect from past experience.
     The values shown above, 1.94454  0.17678, are correct.

     Below is a sample using the COMPLEXF.FOR program, using a complex X of
     1.41421 0, and a complex Y of 1.73205 0, and an integer N of 2.  This
     sample will let you compare your results and see that you are getting
     the correct answers.

     COMPLEXF

     What is the complex X?
       1.41421  0.00000
     What is the complex Y?
       1.73205  0.00000
     What is the integer N?
        2

                    COMPLEX FUNCTION TEST

        X REAL         X COMPLEX          Y REAL        Y COMPLEX       N
        1.41421          0.00000          1.73205         0.00000        2

     X + Y =                    3.14626     0.00000
     X - Y =                   -0.31784     0.00000
     X * Y =                    2.44949     0.00000
     X / Y =                    0.81650     0.00000
     X TO THE N POWER =         1.99999     0.00000      0.50000    0.00000
     N ROOT OF X =              1.41421     0.00000      1.41421    0.00000
     SQUARE ROOT OF X =         1.18921     0.00000      1.41421    0.00000




     Documentation for Complex Function Library                      page 10


     E TO THE X POWER =         4.11325     0.00000      1.41421    0.00000
     E TO THE -X POWER =        0.24312     0.00000      1.41421    0.00000
     COMPLEX LN(X) =            0.34657     0.00000      1.41421    0.00000
     LOG OF X BASE Y =          0.63093     0.00000      1.41421    0.00000
     Y TO THE X POWER =         2.17458     0.00000      1.41421    0.00000
     COMPLEX SIN(X) =           0.98777     0.00000      1.41421    0.00000
     COMPLEX COS(X) =           0.15594     0.00000      1.41421    0.00000
     COMPLEX TAN(X) =           6.33412     0.00000      1.41421    0.00000
     COMPLEX ARCSIN(X) =        0.00000     0.00000      0.00000    0.00000
     COMPLEX ARCCOS(X) =        1.57080     0.00000      0.00000    0.00000
     COMPLEX ARCTAN(X) =        0.95532     0.00000      1.41421    0.00000

     The zeros in the arcsin and arccos lines occur because their is a
     special arcsin function internal to the library, that sets the arcsin
     value to zero when its argument exceeds 1.

     BECOMING A REGISTERED OWNER

      The four points listed on the first two pages in the general infor-
      mation section covers the main points of becoming a registered
      owner of the complex function library.

      The cost of becoming a registered owner of the complex function
      library is $25.00.  The benefits of being a registered owner are:

         You will receive free one up-date of the complex function library,
         should one be necessary, up to one year after you are register.  If
         a company with multiple locations is the registered owner, the
         alternate locations will receive a notice about the up-date.

         You will receive any notices that are sent out about the complex
         function library, and other products that Simulation Rule has
         developed.  This should be of particular value to people who are
         not using the IBM compilers.  Simulation Rule will act as a
         clearing house of other compilers which can be linked with the
         complex library.  As information warrants notices will be sent
         to registered owners.

     The last page of this documentation can be used as a bill for regis-
     tering, and for requesting special services.  If the last page is not
     used make sure that all the information requested is included in your
     mailing to become registered.

     This is part of the experiment in distributing computer programs by
     user-support.  This is based on the beliefs that:

       1- The value and utility of the library is best assessed by the
          user in their own system.

       2- The creation of personal computer programs can and should be
          supported by the computing community.





     Documentation for Complex Function Library                      page 11


       3- The copying of programs should be encouraged, rather than
          restricted.

     This means anyone may legally obtain an evaluation copy of the program
     from a friend or computer club.  After you have had a chance to use
     and evaluate the library in your own environment, you are trusted to
     either forward the registration fee to the author, or to discontinue
     using the library.  In any case, you are encouraged to copy the
     library for evaluation by others.

     The free distribution of the library and the voluntary payment for its
     use eliminates the cost for advertising and distributing the library.
     You obtain quality programs at a greatly reduced cost, get the
     opportunity to try it before buying it, and you get to do so at your
     own pace, in the convenience of your own home or office.  In this
     environment only the best programs will survive.

     Join the experiment, support user supported programs.



                     COMPLEX FUNCTION LIBRARY 1.3

     Robert Fruit
     Simulation Rule
     P.O. Box 295
     Clarendon Hills, Ill. 60514


         Complex Function Library          $25.00        ___________

         1.0 compiler versions of library   12.00        ___________
         (specify if it is to be Pascal or FORTRAN)

         Other services $12.00 additional each (specify)

         _____________________              12.00        ___________

         _____________________              12.00        ___________

         Other buildings where the complex function
         library will be used (give addresses on back
         if they are to receive notice of updates).
         number of buildings ____  @ $15.00 each         ___________

     Total                                               ___________

     You can purchase a copy of the source code that was used to create
     the complex function library.  The source code version of the library
     costs $750.00 and requires that you sign a non-disclosure form.  Both
     the money and the non-disclosure form must be sent to Simulation Rule
     before the source code version of the library will be sent.  Write
     to Simulation Rule to get the bill and the non-disclosure form.

     Registration information              registration date ___/___/___

     Company           _____________________________

     Contact person    _____________________________

     Address           _____________________________

     City, State       _____________________________  Zip _________

     Have you had any difficulty with the complex function library or its
     documentation?  If so, please use this space to comment.







     Are there any other services that Simulation Rule could be providing
     for you?  If so, please state what they may be.  Simulation Rule
     specializes in creating simulations and making complicated
     mathematical functions easy for others to use.

```
{% endraw %}

## FILES248.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No 248   Math Library                                           v1.2
---------------------------------------------------------------------------
------------  User-supported complex function library - version 1.2
COMPLEX  LIB  Function library
COMPLEX  DOC  Documentation  (32K)
COMPLEXP PAS  Pascal sample program
COMPLEXF FOR  Fortran sample program
------------  Pascal programs
LISTING  COM  Lists Turbo Pascal files with xreference, begin/end blocks...
LISTING  DOC  Instructions for above
LISTING  PAS  Source code for above
PRINTER  COM  Sets Epson printer for condensed, double, wide, normal print
PRINTER  PAS  Source code for above
FUNCTION PAS  Additional functions for Turbo Pascal  (time, date, min, max...)
FUNCTION DOC  Documentation for above
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## FUNCTION.DOC

{% raw %}
```
PROGRAM FUNCTION
   (* THIS FILE CONTAINS OF LIST OF THE TURBO PASCAL FUNCTIONS CONTAINED
      IN FUNCTION.PAS ALONG WITH THEIR CALLING PARAMETERS AND A BRIEF
      EXPLANATION OF EACH.             *)

FUNCTION TAB(TABSPACE:INTEGER): ZZZZZ1;
(* THIS FUNCTION TABS THE SCREEN TO TABSPACE *)

FUNCTION SPC(SPCE:INTEGER): ZZZZZ2;
(* THIS FUNCTION RETURNS A STRING OF 0 TO 80 SPACES *)

FUNCTION MIN(INT1, INT2:INTEGER):INTEGER;
(* THIS FUNCTION RETURNS THE MINIMUM OF 2 INTEGERS *)

FUNCTION MAX(INT1, INT2:INTEGER):INTEGER;
(* THIS FUNCTION RETURNS THE MAXIMUM OF 2 INTEGERS *)

FUNCTION MINR(REAL1, REAL2:REAL):REAL;
(* THIS FUNCTION RETURNS THE MINIMUM OF 2 REAL NUMBERS *)

FUNCTION MAXR(REAL1, REAL2:REAL):REAL;
(* THIS FUNCTION RETURNS THE MAXIMUM OF 2 REAL NUMBERS *)

PROCEDURE SWITCH(VAR INT1, INT2:INTEGER);
(* THIS PROCEDURE EXCHANGES THE VALUE OF 2 INTEGERS *)

PROCEDURE SWITCHR(VAR REAL1, REAL2:REAL);
(* THIS PROCEDURE EXCHANGES THE VALUE OF 2 REAL NUMBERS *)

FUNCTION DATE:ZZZZZ5;
(* THIS FUNCTION RETURNS AN 11 CHARACTER STRING WITH THE DATE AS MM-DD-YYYY *)

FUNCTION TIME: ZZZZZ5;
(* THIS FUNCTION RETURNS AN 11 CHARACTER STRING WITH THE TIME AS HH:MM:SS:HH *)

FUNCTION FLOAT(INT1: INTEGER): REAL;
(* THIS FUNCTION RETURNS THE REAL EQUIVALENT OF AN INTEGER NUMBER*)

```
{% endraw %}

## LISTING.DOC

{% raw %}
```
                         *****  LISTING.COM  *****

     THIS PROGRAM WILL PRODUCE A SOURCE CODE LISTING OF TURBO PASCAL FILES.

TO RUN THIS PROGRAM:

   1. TYPE 'LISTING'

   2. ENTER THE SOURCE CODE FILE NAME WHEN PROMPTED.  INCLUDE DISK AND
         FILE EXTENSION (.PAS WILL BE ASSUMED IF NO EXTENSION IS GIVEN).

   3. ENTER THE OUTPUT DESTINATION WHEN PROMPTED.  OPTIONS ARE:
      - A FILE NAME WILL SEND THE OUTPUT TO A DISK FILE OF THE SAME NAME
      - 'RETURN' WILL PRODUCE A LISTING WITH THE SAME NAME AS THE SOURCE CODE
           BUT WITH THE EXTENSION '.LST'
      - 'PRN' WILL SEND THE OUTPUT TO THE PRINTER
      - 'NUL' WILL PRODUCE NO OUTPUT EXCEPT FOR THE SCREEN OUTPUT

      A LISTING WILL ALWAYS BE SENT TO THE SCREEN IN ADDITION TO THE ABOVE

   4. ENTER 'Y' OR 'N' TO THE PROMPT 'DO YOU WANT A CROSS REFERENCE'.
         IF YES, A CROSS REFERENCE WILL BE PRODUCED WHICH WILL LIST EACH
         VARIABLE BY NAME, VARIABLE TYPE, PROCEDURE IN WHICH IT IS FOUND, AND
         ALL LINE NUMBERS IN WHICH IT OCCURS.

   5. IF A CROSS REFERENCE IS DESIRED, THE PROGRAM WILL PROMPT FOR THE
         CROSS REFERENCE OUTPUT FILE NAME.  THIS USES THE SAME OPTIONS AS
         FOR THE LIST OUTPUT FILE EXCEPT THAT 'RETURN' USES THE SAME FILE NAME
         WITH THE EXTENTION 'REF'.  IF YOU USE THE SAME NAME AS THE LISTING
         FILE, THEN THE LISTING AND CROSS REFERENCE FILES WILL BE CONCATENATED
         INTO ONE FILE.  IF A CROSS REFERENCE IS DESIRED, A COPY WILL ALWAYS
         GO TO THE SCREEN REGARDLESS OF THE OUTPUT FILE SPECIFIED.  THE
         CROSS REFERENCE FILE IS ALPHABETIZED BY PROCEDURE NAME, AND THEN
         BY VARIABLE NAME.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0248

     Volume in drive A has no label
     Directory of A:\

    COMPLEX  DOC     31729   1-15-87  10:25p
    COMPLEX  LIB     43520   1-15-87   7:36p
    COMPLEXF FOR      3103   1-16-87  11:09p
    COMPLEXP PAS      3655   1-16-87  11:09p
    FILES248 TXT       954   2-02-87   5:21p
    FUNCTION DOC      1323  11-09-84   9:54p
    FUNCTION PAS      3442  11-11-84   9:54p
    LISTING  COM     22210  11-11-84   9:53p
    LISTING  DOC      1699  11-10-84   9:53p
    LISTING  PAS     21175  11-11-84   9:53p
    PRINTER  COM     12663  11-11-84   9:53p
    PRINTER  PAS      2077  11-11-84   9:54p
           12 file(s)     147550 bytes
                            9728 bytes free
