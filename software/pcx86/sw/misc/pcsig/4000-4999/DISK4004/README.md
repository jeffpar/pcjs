---
layout: page
title: "PC-SIG Diskette Library (Disk #4004)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4004/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4004"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  PC-SIG Disk #4004 MAWK  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║  The program is in a self-extracting archive.  To Install to another    ║
║  drive type:                                                            ║
║                                                                         ║
║  MAWK11AX [destination drive]:\[destination subdirectory]\  (Enter)     ║
║                                                                         ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MAWK.DOC

{% raw %}
```



MAWK(1)                   USER COMMANDS                   MAWK(1)



NAME
     mawk - pattern scanning and text processing language


SYNOPSIS
     mawk [-W _o_p_t_i_o_n] [-F _v_a_l_u_e]  [-v  _v_a_r=_v_a_l_u_e]  [--]  'program
     text' [file ...]
     mawk [-W _o_p_t_i_o_n] [-F _v_a_l_u_e] [-v _v_a_r=_v_a_l_u_e] [-f _p_r_o_g_r_a_m-_f_i_l_e]
     [--] [file ...]


DESCRIPTION
     mawk is an interpreter for  the  AWK  Programming  Language.
     The  AWK  language is useful for manipulation of data files,
     text retrieval  and  processing,  and  for  prototyping  and
     experimenting with algorithms.  mawk is a _n_e_w _a_w_k meaning it
     implements the AWK language as defined in Aho, Kernighan and
     Weinberger,  _T_h_e  _A_W_K  _P_r_o_g_r_a_m_m_i_n_g  _L_a_n_g_u_a_g_e, Addison-Wesley
     Publishing, 1988.  (Hereafter referred to as the AWK  book.)
     mawk conforms to the Posix 1003.2 (draft 11.2) definition of
     the AWK language which contains a few features not described
     in the AWK book,  and mawk provides a small number of exten-
     sions.

     An AWK program is a sequence of _p_a_t_t_e_r_n {_a_c_t_i_o_n}  pairs  and
     function  definitions.   Short  programs  are entered on the
     command  line  usually  enclosed  in  '  '  to  avoid  shell
     interpretation.   Longer programs can be read in from a file
     with the -f option.  Data  input is read from  the  list  of
     files  on  the  command line or from standard input when the
     list is empty.  The input is broken into records  as  deter-
     mined by the record separator variable, RS.  Initially, RS =
     "\n" and records are synonymous with lines.  Each record  is
     compared against each _p_a_t_t_e_r_n and if it matches, the program
     text for {_a_c_t_i_o_n} is executed.


OPTIONS
     -F _v_a_l_u_e     sets the field separator, FS, to _v_a_l_u_e.


     -f _f_i_l_e      Program text is read from _f_i_l_e instead of  from
                  the  command  line.   Multiple  -f  options are
                  allowed.


     -v _v_a_r=_v_a_l_u_e assigns _v_a_l_u_e to program variable _v_a_r.


     --           indicates the unambiguous end of options.





Version 1.1         Last change: Jan 22 1992                    1






MAWK(1)                   USER COMMANDS                   MAWK(1)



     The above options will be available with any Posix  compati-
     ble  implementation  of  AWK,  and  implementation  specific
     options are prefaced with -W. mawk provides three:


     -W version   mawk writes its version and copyright to stdout
                  and compiled limits to stderr and exits 0.

     -W dump      writes an assembler like listing of the  inter-
                  nal representation of the program to stderr.

     -W sprintf=_n_u_m
                  adjusts the size  of  mawk's  internal  sprintf
                  buffer  to  _n_u_m  bytes.   More than rare use of
                  this option indicates  mawk  should  be  recom-
                  piled.

     -W posix_space
                  forces mawk not to consider '\n' to be space.


THE AWK LANGUAGE
  1. Program structure
     An AWK program is a sequence of _p_a_t_t_e_r_n {_a_c_t_i_o_n}  pairs  and
     user function definitions.

     A pattern can be:
          BEGIN
          END
          expression
          expression , expression

     One, but not both, of _p_a_t_t_e_r_n {_a_c_t_i_o_n} can be omitted.    If
     {_a_c_t_i_o_n}  is omitted it is implicitly { print }.  If _p_a_t_t_e_r_n
     is omitted, then it is implicitly matched.   BEGIN  and  END
     patterns require an action.

     Statements are terminated by newlines, semi-colons or  both.
     Groups  of  statements  such  as  actions or loop bodies are
     blocked via { ... } as in C.  The last statement in a  block
     doesn't  need a terminator.  Blank lines have no meaning; an
     empty statement is terminated with a semi-colon. Long state-
     ments can be continued with a backslash, \.  A statement can
     be broken without a backslash after a comma, left brace, &&,
     ||,  do,  else, the right parenthesis of an if, while or for
     statement, and the right parenthesis of a  function  defini-
     tion.   A comment starts with # and extends to, but does not
     include the end of line.

     The following statements control program flow inside blocks.





Version 1.1         Last change: Jan 22 1992                    2






MAWK(1)                   USER COMMANDS                   MAWK(1)



          if ( _e_x_p_r ) _s_t_a_t_e_m_e_n_t

          if ( _e_x_p_r ) _s_t_a_t_e_m_e_n_t else _s_t_a_t_e_m_e_n_t

          while ( _e_x_p_r ) _s_t_a_t_e_m_e_n_t

          do _s_t_a_t_e_m_e_n_t while ( _e_x_p_r )

          for ( _o_p_t__e_x_p_r ; _o_p_t__e_x_p_r ; _o_p_t__e_x_p_r ) _s_t_a_t_e_m_e_n_t

          for ( _v_a_r in _a_r_r_a_y ) _s_t_a_t_e_m_e_n_t

          continue

          break

  2. Data types, conversion and comparison
     There are two basic data types, numeric and string.  Numeric
     constants  can  be integer like -2, decimal like 1.08, or in
     scientific notation like -1.1e4 or .28E-3.  All numbers  are
     represented  internally  and  all  computations  are done in
     floating point arithmetic.  So for example,  the  expression
     0.2e2 == 20 is true and true is represented as 1.0.

     String constants are enclosed in double quotes.

           "This is a string with a newline at the end.\n"

     Strings can be continued across a line by escaping  (\)  the
     newline.  The following escape sequences are recognized.

          \\        \
          \"        "
          \a        alert, ascii 7
          \b        backspace, ascii 8
          \t        tab, ascii 9
          \n        newline, ascii 10
          \v        vertical tab, ascii 11
          \f        formfeed, ascii 12
          \r        carriage return, ascii 13
          \ddd      1, 2 or 3 octal digits for ascii ddd
          \xhh      1 or 2 hex digits for ascii  hh

     If you escape any other character \c, you get \c, i.e., mawk
     ignores the escape.

     There are really three basic data types; the third is _n_u_m_b_e_r
     _a_n_d _s_t_r_i_n_g which has both a numeric value and a string value
     at  the  same  time.   User  defined  variables  come   into
     existence when first referenced and are initialized to _n_u_l_l,
     a number and string value which  has  numeric  value  0  and
     string  value  "".  Non-trivial number and string typed data



Version 1.1         Last change: Jan 22 1992                    3






MAWK(1)                   USER COMMANDS                   MAWK(1)



     come from input and are typically stored  in  fields.   (See
     section 4).

     The type of an expression is determined by its  context  and
     automatic type conversion occurs if needed.  For example, to
     evaluate the statements

          y = x + 2  ;  z = x  "hello"

     The value stored in variable y will be typed numeric.  If  x
     is  not  numeric,  the  value  taken  from x is converted to
     numeric before it is added to 2 and stored in y.  The  value
     stored  in variable z will be typed string, and the value of
     x will be converted to string if necessary and  concatenated
     with "hello".  (Of course, the value and type stored in x is
     not changed by any conversions.) A string expression is con-
     verted  to  numeric using its longest numeric prefix as with
     _a_t_o_f(3).  A numeric expression is  converted  to  string  by
     replacing  _e_x_p_r with sprintf(CONVFMT, _e_x_p_r), unless _e_x_p_r can
     be represented on the host machine as an exact integer  then
     it is converted to sprintf("%d", _e_x_p_r).  Sprintf() is an AWK
     built-in that duplicates the  functionality  of  _s_p_r_i_n_t_f(3),
     and CONVFMT is a built-in variable used for internal conver-
     sion from  number  to  string  and  initialized  to  "%.6g".
     Explicit  type  conversions can be forced, _e_x_p_r "" is string
     and _e_x_p_r+0 is numeric.

     To evaluate,  _e_x_p_r1  rel-op  _e_x_p_r2,  if  both  operands  are
     numeric or number and string then the comparison is numeric;
     if both operands are string the comparison  is  string.   If
     exactly  one operand is string and after trimming spaces and
     tabs from  the  front  and  back  the  remaining  string  is
     entirely  numeric  in  form, then the string is converted to
     number and the comparison is numeric; otherwise, the numeric
     operand is converted to string and the comparison is string.
     The result of a comparison is numeric, 0 or 1.

     In boolean contexts such as, if ( _e_x_p_r ) _s_t_a_t_e_m_e_n_t, a string
     expression evaluates true if and only if it is not the empty
     string ""; numeric values if and  only  if  not  numerically
     zero.

  3. Regular expressions
     In the AWK language, records, fields and strings  are  often
     tested  for  matching a _r_e_g_u_l_a_r _e_x_p_r_e_s_s_i_o_n.  Regular expres-
     sions are enclosed in slashes, and

          _e_x_p_r ~ /_r/

     is an AWK expression that evaluates to 1 if  _e_x_p_r  "matches"
     _r,  which means a substring of _e_x_p_r is in the set of strings
     defined by _r.  With no match the expression evaluates to  0;



Version 1.1         Last change: Jan 22 1992                    4






MAWK(1)                   USER COMMANDS                   MAWK(1)



     replacing ~ with the "not match" operator, !~ , reverses the
     meaning.  As  pattern-action pairs,

          /_r/ { _a_c_t_i_o_n }   and   $0 ~ /_r/ { _a_c_t_i_o_n }

     are the same, and for each  input  record  that  matches  _r,
     _a_c_t_i_o_n  is executed.  In fact, /_r/ is an AWK expression that
     is equivalent to ($0 ~ /_r/)  anywhere  except  when  on  the
     right side of a match operator or passed as an argument to a
     built-in function that expects a  regular  expression  argu-
     ment.

     AWK uses extended regular expressions as with _e_g_r_e_p(1).  The
     regular  expression metacharacters, i.e., those with special
     meaning in regular expressions are

           ^ $ . [ ] | ( ) * + ?

     Regular expressions are built up from characters as follows:

          _c            matches any non-metacharacter _c.

          \_c           matches a character defined  by  the  same
                       escape  sequences used in string constants
                       or the literal character _c if \_c is not an
                       escape sequence.

          .            matches any character (including newline).

          ^            matches the front of a string.

          $            matches the back of a string.

          [c1c2c3...]  matches  any  character   in   the   class
                       c1c2c3...  .  An interval of characters is
                       denoted c1-c2 inside a class [...].

          [^c1c2c3...] matches any character  not  in  the  class
                       c1c2c3...

     Regular expressions are built up from other regular  expres-
     sions as follows:

          _r1_r2 matches _r1 followed immediately by _r2  (concatena-
               tion).

          _r1 | _r2
               matches _r1 or _r2 (alternation).

          _r*   matches _r repeated zero or more times.

          _r+   matches _r repeated one or more times.



Version 1.1         Last change: Jan 22 1992                    5






MAWK(1)                   USER COMMANDS                   MAWK(1)



          _r?   matches _r zero or once.

          (_r)  matches _r, providing grouping.

     The increasing precedence of operators is alternation,  con-
     catenation and unary (*, + or ?).

     For example,

          /^[_a-zA-Z][_a-zA-Z0-9]*$/  and
          /^[-+]?([0-9]+\.?|\.[0-9])[0-9]*([eE][-+]?[0-9]+)?$/

     are matched by AWK identifiers  and  AWK  numeric  constants
     respectively.   Note  that  . has to be escaped to be recog-
     nized as a decimal point, and that  metacharacters  are  not
     special inside character classes.

     Any expression can be used on the right hand side of  the  ~
     or !~ operators or passed to a built-in that expects a regu-
     lar expression.  If needed, it is converted to  string,  and
     then interpreted as a regular expression.  For example,

          BEGIN { identifier = "[_a-zA-Z][_a-zA-Z0-9]*" }

          $0 ~ "^" identifier

     prints all lines that start with an AWK identifier.

     mawk recognizes the  empty  regular  expression,  //,  which
     matches  the empty string and hence is matched by any string
     at the front, back and between every character.   For  exam-
     ple,

          echo  abc | mawk { gsub(//, "X") ; print }
          XaXbXcX


  4. Records and fields
     Records are read in one at a time, and stored in  the  _f_i_e_l_d
     variable  $0.   The  record  is  split into _f_i_e_l_d_s which are
     stored in $1, $2, ..., $NF.  The built-in variable NF is set
     to  the  number of fields, and NR and FNR are incremented by
     1.  Fields above $NF are set to "".

     Assignment to $0 causes the fields and NF to be  recomputed.
     Assignment to NF or to a field causes $0 to be reconstructed
     by concatenating the $i's separated by OFS.  Assignment to a
     field with index greater than NF, increases NF and causes $0
     to be reconstructed.

     Data input stored in fields is  string,  unless  the  entire
     field  has  numeric  form  and  then  the type is number and



Version 1.1         Last change: Jan 22 1992                    6






MAWK(1)                   USER COMMANDS                   MAWK(1)



     string.  For example,

          echo 24 24E |
          mawk '{ print($1>100, $1>"100", $2>100, $2>"100") }'
          0 0 1 1

     $0 and $2 are string and $1 is number and string.  The first
     and  second  comparisons  are  numeric  and the last two are
     string.  In the second "100" is converted to 100, and in the
     third 100 is converted to "100".

  5. Expressions and operators
     The expression syntax is similar to C.  Primary  expressions
     are  numeric constants, string constants, variables, fields,
     arrays and functions. The identifier for a  variable,  array
     or  function can be a sequence of letters, digits and under-
     scores, that does not start with a digit.  Variables are not
     declared;  they exist when first referenced and are initial-
     ized to _n_u_l_l.

     New expressions are composed with the following operators in
     order of increasing precedence.

          _a_s_s_i_g_n_m_e_n_t          =  +=  -=  *=  /=  %=  ^=
          _c_o_n_d_i_t_i_o_n_a_l         ?  :
          _l_o_g_i_c_a_l _o_r          ||
          _l_o_g_i_c_a_l _a_n_d         &&
          _a_r_r_a_y _m_e_m_b_e_r_s_h_i_p    in
          _m_a_t_c_h_i_n_g       ~   !~
          _r_e_l_a_t_i_o_n_a_l          <  >   <=  >=  ==  !=
          _c_o_n_c_a_t_e_n_a_t_i_o_n       (no explicit operator)
          _a_d_d _o_p_s             +  -
          _m_u_l _o_p_s             *  /  %
          _u_n_a_r_y               +  -
          _l_o_g_i_c_a_l _n_o_t         !
          _e_x_p_o_n_e_n_t_i_a_t_i_o_n      ^
          _i_n_c _a_n_d _d_e_c         ++ -- (both post and pre)
          _f_i_e_l_d               $

     Assignment, conditional and exponentiation  associate  right
     to  left;  the other operators associate left to right.  Any
     expression can be parenthesized.

  6. Arrays
     Awk provides one-dimensional  arrays.   Array  elements  are
     expressed  as  _a_r_r_a_y[_e_x_p_r].  _E_x_p_r is internally converted to
     string type, so, for example, A[1] and A["1"] are  the  same
     element  and  the  actual  index  is "1".  Arrays indexed by
     strings are called associative arrays.  Initially  an  array
     is  empty;  elements  exist when first accessed.  An expres-
     sion, _e_x_p_r in _a_r_r_a_y evaluates to 1  if  _a_r_r_a_y[_e_x_p_r]  exists,
     else to 0.



Version 1.1         Last change: Jan 22 1992                    7






MAWK(1)                   USER COMMANDS                   MAWK(1)



     There is a form of the for statement that  loops  over  each
     index of an array.

          for ( _v_a_r in _a_r_r_a_y ) _s_t_a_t_e_m_e_n_t

     sets _v_a_r to each index of _a_r_r_a_y and executes _s_t_a_t_e_m_e_n_t.  The
     order  that  _v_a_r  transverses  the  indices  of _a_r_r_a_y is not
     defined.

     The statement, delete _a_r_r_a_y[_e_x_p_r], causes _a_r_r_a_y[_e_x_p_r] not to
     exist.

     Multidimensional arrays are synthesized  with  concatenation
     using  the  built-in variable SUBSEP.  _a_r_r_a_y[_e_x_p_r1,_e_x_p_r2] is
     equivalent to _a_r_r_a_y[_e_x_p_r1 SUBSEP _e_x_p_r2].  Testing for a mul-
     tidimensional element uses a parenthesized index, such as

          if ( (i, j) in A )  print A[i, j]


  7. Builtin-variables
     The following variables are built-in and initialized  before
     program execution.

          ARGC      number of command line arguments.

          ARGV      array of command line arguments, 0..ARGC-1.

          CONVFMT   format for internal conversion of numbers  to
                    string, initially = "%.6g".

          ENVIRON   array indexed by environment  variables.   An
                    environment  string,  _v_a_r=_v_a_l_u_e  is stored as
                    ENVIRON[_v_a_r] = _v_a_l_u_e.

          FILENAME  name of the current input file.

          FNR       current record number in FILENAME.

          FS        splits  records  into  fields  as  a  regular
                    expression.

          NF        number of fields in the current record.

          NR        current record  number  in  the  total  input
                    stream.

          OFMT      format  for  printing  numbers;  initially  =
                    "%.6g".

          OFS       inserted between fields on output,  initially
                    = " ".



Version 1.1         Last change: Jan 22 1992                    8






MAWK(1)                   USER COMMANDS                   MAWK(1)



          ORS       terminates each record on output, initially =
                    "\n".

          RLENGTH   length set by the last call to  the  built-in
                    function, match().

          RS        input record separator, initially = "\n".

          RSTART    index set by the last call to match().

          SUBSEP    used to build multiple array subscripts, ini-
                    tially = "\034".

  8. Built-in functions
     String functions

          gsub(_r,_s,_t)  gsub(_r,_s)
               Global  substitution,  every  match   of   regular
               expression  _r  in variable _t is replaced by string
               _s.  The number of replacements is returned.  If  _t
               is  omitted,  $0 is used.  An & in the replacement
               string _s is replaced by the matched  substring  of
               _t.  \& puts a literal & in the replacement string.

          index(_s,_t)
               If _t is a substring of _s, then the position  where
               _t  starts  is  returned,  else 0 is returned.  The
               first character of _s is in position 1.

          length(_s)  length()
               Returns the length of string _s; without  an  argu-
               ment, returns the length of $0.

          match(_s,_r)
               Returns the index of the first  longest  match  of
               regular expression _r in string _s.  Returns 0 if no
               match.  As a side effect, RSTART  is  set  to  the
               return value.  RLENGTH is set to the length of the
               match or -1 if no match.  If the empty  string  is
               matched, RLENGTH is set to 0, and 1 is returned if
               the match is at  the  front,  and  length(_s)+1  is
               returned if the match is at the back.

          split(_s,_A,_r)  split(_s,_A)
               String _s is split into fields by  regular  expres-
               sion  _r  and  the  fields are loaded into array _A.
               The number of fields is returned.  See section  11
               below  for  more  detail.   If _r is omitted, FS is
               used.

          sprintf(_f_o_r_m_a_t,_e_x_p_r-_l_i_s_t)
               Returns  a  string  constructed   from   _e_x_p_r-_l_i_s_t



Version 1.1         Last change: Jan 22 1992                    9






MAWK(1)                   USER COMMANDS                   MAWK(1)



               according  to  _f_o_r_m_a_t.   See  the  description  of
               printf() below.

          sub(_r,_s,_t)  sub(_r,_s)
               Single substitution, same as gsub() except at most
               one substitution.

          substr(_s,_i,_n)  substr(_s,_i)
               Returns the substring of  string  _s,  starting  at
               index _i, of length _n.  If _n is omitted, the suffix
               of _s, starting at _i is returned.

          tolower(_s)
               Returns a copy of _s with all upper case characters
               converted to lower case.

          toupper(_s)
               Returns a copy of _s with all lower case characters
               converted to upper case.

     Arithmetic functions

          atan2(_y,_x)     Arctan of _y/_x between -pi and pi.

          cos(_x)         Cosine function, _x in radians.

          exp(_x)         Exponential function.

          int(_x)         Returns _x truncated towards zero.

          log(_x)         Natural logarithm.

          rand()         Returns a random number between zero and one.

          sin(_x)         Sine function, _x in radians.

          sqrt(_x)        Returns square root of _x.

          srand(_e_x_p_r)  srand()
               Seeds the random number generator, using the clock
               if  _e_x_p_r  is omitted, and returns the value of the
               previous seed.  mawk seeds the random number  gen-
               erator  from  the  clock at startup so there is no
               real need to call srand().  Srand(_e_x_p_r) is  useful
               for repeating pseudo random sequences.

  9. Input and output
     There are two output statements, print and printf.

          print
               writes $0  ORS to standard output.




Version 1.1         Last change: Jan 22 1992                   10






MAWK(1)                   USER COMMANDS                   MAWK(1)



          print _e_x_p_r1, _e_x_p_r2, ..., _e_x_p_rn
               writes _e_x_p_r1 OFS _e_x_p_r2 OFS ... _e_x_p_rn ORS to  stan-
               dard output.  Numeric expressions are converted to
               string with OFMT.

          printf _f_o_r_m_a_t, _e_x_p_r-_l_i_s_t
               duplicates the printf C library  function  writing
               to  standard  output.   The complete ANSI C format
               specifications are recognized with conversions %c,
               %d, %e, %E, %f, %g, %G, %i, %o, %s, %u, %x, %X and
               %%, and conversion qualifiers h and l.

     The argument list to  print  or  printf  can  optionally  be
     enclosed  in  parentheses.  Print formats numbers using OFMT
     or "%d" for exact integers.  "%c" with  a  numeric  argument
     prints  the  corresponding  8  bit  character, with a string
     argument it prints the first character of the  string.   The
     output  of  print  and printf can be redirected to a file or
     command by appending > _f_i_l_e, >> _f_i_l_e or | _c_o_m_m_a_n_d to the end
     of  the  print statement.  Redirection opens _f_i_l_e or _c_o_m_m_a_n_d
     only once, subsequent redirections  append  to  the  already
     open  stream.   By  convention, mawk associates the filename
     "/dev/stderr" with stderr which allows print and  printf  to
     be redirected to stderr.

     The input function getline has the following variations.

          getline
               reads into $0, updates the fields, NF, NR and FNR.

          getline < _f_i_l_e
               reads into $0 from _f_i_l_e, updates  the  fields  and
               NF.

          getline _v_a_r
               reads the next record into  _v_a_r,  updates  NR  and
               FNR.

          getline _v_a_r < _f_i_l_e
               reads the next record of _f_i_l_e into _v_a_r.

           _c_o_m_m_a_n_d | getline
               pipes a record from _c_o_m_m_a_n_d into  $0  and  updates
               the fields and NF.

           _c_o_m_m_a_n_d | getline _v_a_r
               pipes a record from _c_o_m_m_a_n_d into _v_a_r.

     Getline returns 0 on end-of-file, -1 on error, otherwise 1.

     Commands on the end of pipes are executed by /bin/sh.




Version 1.1         Last change: Jan 22 1992                   11






MAWK(1)                   USER COMMANDS                   MAWK(1)



     The function close(_e_x_p_r) closes the file or pipe  associated
     with  _e_x_p_r.   Close  returns  0 if _e_x_p_r is an open file, the
     exit status if _e_x_p_r is a piped command,  and  -1  otherwise.
     Close()  is  used to reread a file or command, make sure the
     other end of an output pipe is  finished  or  conserve  file
     resources.

     The function system(_e_x_p_r) uses /bin/sh to execute  _e_x_p_r  and
     returns  the  exit status of the command _e_x_p_r.  Changes made
     to the ENVIRON array are not  passed  to  commands  executed
     with system or pipes.

  10. User defined functions
     The syntax for a user defined function is

          function name( _a_r_g_s ) { _s_t_a_t_e_m_e_n_t_s }

     The function body can contain a return statement

          return _o_p_t__e_x_p_r

     A return statement is not required. Function  calls  may  be
     nested  or  recursive.   Functions are passed expressions by
     value and arrays by reference.   Extra  arguments  serve  as
     local  variables  and are initialized to _n_u_l_l.  For example,
     csplit(_s,_A) puts each  character  of  _s  into  array  _A  and
     returns the length of _s.

          function csplit(s, A,    n, i)
          {
            n = length(s)
            for( i = 1 ; i <= n ; i++ ) A[i] = substr(s, i, 1)
            return n
          }

     Putting extra space between passed arguments and local vari-
     ables  is  conventional.  Functions can be referenced before
     they are defined, but the function name and the '('  of  the
     arguments must touch to avoid confusion with concatenation.

  11. Splitting strings, records and files
     Awk programs use the same algorithm to  split  strings  into
     arrays  with  split(),  and records into fields on FS.  mawk
     uses essentially the same  algorithm  to  split  files  into
     records on RS.

     Split(_e_x_p_r,_A,_s_e_p) works as follows:

          (1)  If _s_e_p is omitted, it is replaced by FS.  _S_e_p  can
               be  an expression or regular expression.  If it is
               an expression of non-string type, it is  converted
               to string.



Version 1.1         Last change: Jan 22 1992                   12






MAWK(1)                   USER COMMANDS                   MAWK(1)



          (2)  If _s_e_p = " " (a single  space),  then  <SPACE>  is
               trimmed  from  the front and back of _e_x_p_r, and _s_e_p
               becomes <SPACE>.  mawk defines <SPACE> as the reg-
               ular   expression  /[ \t\n]+/.  Otherwise  _s_e_p  is
               treated  as  a  regular  expression,  except  that
               meta-characters are ignored for a string of length
               1, e.g., split(x, A, "*") and  split(x,  A,  /\*/)
               are the same.

          (3)  If _e_x_p_r is not string, it is converted to  string.
               If  _e_x_p_r  is  then  the  empty  string "", split()
               returns 0 and  _A  is  unchanged.   Otherwise,  all
               non-overlapping,  non-null  and longest matches of
               _s_e_p in _e_x_p_r, separate _e_x_p_r into fields  which  are
               loaded  into  _A.   The  fields are placed in A[1],
               A[2], ..., A[n] and split() returns n, the  number
               of fields which is the number of matches plus one.
               Data placed in  _A  that  looks  numeric  is  typed
               number and string.

     Splitting records into fields  works  the  same  except  the
     pieces  are loaded into $1, $2,..., $NF.  If $0 is empty, NF
     is set to 0 and all $i to "".

     mawk splits files into records by the  same  algorithm,  but
     with  the  slight  difference that RS is really a terminator
     instead of a separator. (ORS is really a terminator too).

          E.g., if FS = ":+" and $0 = "a::b:" , then NF =  3  and
          $1  =  "a", $2 = "b" and $3 = "", but if "a::b:" is the
          contents of an input file and RS = ":+", then there are
          two records "a" and "b".

     RS = " " is not special.

  12. Multi-line records
     Since mawk interprets RS as a regular expression, multi-line
     records  are  easy.  Setting RS = "\n\n+", makes one or more
     blank lines separate records.  If FS = "  "  (the  default),
     then single newlines, by the rules for <SPACE> above, become
     space and single newlines are field separators.

          For example, if a file is "a b\nc\n\n",  RS  =  "\n\n+"
          and  FS  =  " ", then there is one record "a b\nc" with
          three fields "a", "b" and "c".   Changing  FS  =  "\n",
          gives two fields "a b" and "c"; changing FS = "", gives
          one field identical to the record.

     If you want lines with  spaces  or  tabs  to  be  considered
     blank,  set  RS  =  "\n([ \t]*\n)+".  For compatibility with
     other awks, setting RS = "" has the same effect as if  blank
     lines are stripped from the front and back of files and then



Version 1.1         Last change: Jan 22 1992                   13






MAWK(1)                   USER COMMANDS                   MAWK(1)



     records are determined as if RS = "\n\n+".   Posix  requires
     that  "\n"  always separates records when RS = "" regardless
     of the value of FS.  mawk does not support this  convention,
     because defining "\n" as <SPACE> makes it unnecessary.

     Most of the time when you change RS for multi-line  records,
     you  will  also  want  to change ORS to "\n\n" so the record
     spacing is preserved on output.

  13. Program execution
     This section  describes  the  order  of  program  execution.
     First  ARGC is set to the total number of command line argu-
     ments passed to the execution phase of the program.  ARGV[0]
     is  set  the  name  of  the  AWK interpreter and ARGV[1] ...
     ARGV[ARGC-1] holds  the  remaining  command  line  arguments
     exclusive of options and program source.  For example with

          mawk  -f  prog  v=1  A  t=hello  B

     ARGC = 5 with ARGV[0] = "mawk", ARGV[1] = "v=1",  ARGV[2]  =
     "A", ARGV[3] = "t=hello" and ARGV[4] = "B".

     Next, each BEGIN block is executed in order.  If the program
     consists  entirely  of  BEGIN  blocks,  then  execution ter-
     minates, else an input stream is opened and  execution  con-
     tinues.  If ARGC equals 1, the input stream is set to stdin,
     else  the command line arguments  ARGV[1]  ...  ARGV[ARGC-1]
     are examined for a file argument.

     The command line arguments  divide  into  three  sets:  file
     arguments,  assignment  arguments  and empty strings "".  An
     assignment has the form  _v_a_r=_s_t_r_i_n_g.   When  an  ARGV[i]  is
     examined  as  a possible file argument, if it is empty it is
     skipped; if it is an assignment argument, the assignment  to
     _v_a_r  takes  place  and  i  skips  to the next argument; else
     ARGV[i] is opened for input.  If it fails to open, execution
     terminates with exit code 1.  If no command line argument is
     a file argument, then input comes from stdin.  Getline in  a
     BEGIN  action  opens  input.  "-" as a file argument denotes
     stdin.

     Once an input stream is open, each input  record  is  tested
     against  each  _p_a_t_t_e_r_n,  and  if  it matches, the associated
     _a_c_t_i_o_n is executed.  An expression pattern matches if it  is
     boolean  true  (see  the end of section 2).  A BEGIN pattern
     matches before any input has been read, and an  END  pattern
     matches  after  all  input  has been read.  A range pattern,
     _e_x_p_r1,_e_x_p_r2 , matches every  record  between  the  match  of
     _e_x_p_r1 and the match _e_x_p_r2 inclusively.

     When end of file occurs on the input stream,  the  remaining
     command line arguments are examined for a file argument, and



Version 1.1         Last change: Jan 22 1992                   14






MAWK(1)                   USER COMMANDS                   MAWK(1)



     if there is one it is opened, else the END _p_a_t_t_e_r_n  is  con-
     sidered matched and all END _a_c_t_i_o_n_s are executed.

     In the example, the assignment v=1  takes  place  after  the
     BEGIN  _a_c_t_i_o_n_s  are  executed,  and  the data placed in v is
     typed number and string.  Input is then read  from  file  A.
     On  end  of file A, t is set to the string "hello", and B is
     opened for input.  On end of file B,  the  END  _a_c_t_i_o_n_s  are
     executed.

     Program flow at the _p_a_t_t_e_r_n {_a_c_t_i_o_n} level  can  be  changed
     with the

          next   and
          exit  _o_p_t__e_x_p_r

     statements.  A next statement causes the next  input  record
     to  be  read  and  pattern testing to restart with the first
     _p_a_t_t_e_r_n {_a_c_t_i_o_n} pair in the  program.   An  exit  statement
     causes  immediate  execution  of  the END actions or program
     termination if there are none or if the exit  occurs  in  an
     END action.  The _o_p_t__e_x_p_r sets the exit value of the program
     unless overridden by a later exit or subsequent error.


EXAMPLES
     1. emulate cat.

          { print }

     2. emulate wc.

          { chars += length($0) + 1  # add one for the \n
            words += NF
          }

          END{ print NR, words, chars }

     3. count the number of unique "real words".

          BEGIN { FS = "[^A-Za-z]+" }

          { for(i = 1 ; i <= NF ; i++)  word[$i] = "" }

          END { delete word[""]
                for ( i in word )  cnt++
                print cnt
          }

     4. sum the second field of every record based on  the  first
     field.




Version 1.1         Last change: Jan 22 1992                   15






MAWK(1)                   USER COMMANDS                   MAWK(1)



          $1 ~ /credit|gain/ { sum += $2 }
          $1 ~ /debit|loss/  { sum -= $2 }

          END { print sum }

     5. sort a file, comparing as string

          { line[NR] = $0 "" }  # make sure of comparison type
                          # in case some lines look numeric

          END {  isort(line, NR)
            for(i = 1 ; i <= NR ; i++) print line[i]
          }

          #insertion sort of A[1..n]
          function isort( A, n,    i, j, hold)
          {
            for( i = 2 ; i <= n ; i++)
            {
              hold = A[j = i]
              while ( A[j-1] > hold )
              { j-- ; A[j+1] = A[j] }
              A[j] = hold
            }
            # sentinel A[0] = "" will be created if needed
          }



COMPATIBILITY ISSUES
     The Posix 1003.2(draft 11.2) definition of the AWK  language
     is  AWK  as  described in the AWK book with a few extensions
     that appeared in SystemVR4 nawk. The extensions are:

          New functions: toupper() and tolower().

          New variables: ENVIRON[] and CONVFMT.

          ANSI  C  conversion  specifications  for  printf()  and
          sprintf().

          New command options:  -v var=value, multiple -f options
          and implementation options as arguments to -W.

     Posix AWK is oriented to operate on files a line at a  time.
     RS can be changed from "\n" to another single character, but
     it is hard to find any use for this - there are no  examples
     in  the AWK book.  By convention, RS = "", makes one or more
     blank lines separate records, allowing  multi-line  records.
     When RS = "", "\n" is always a field separator regardless of
     the value in FS.




Version 1.1         Last change: Jan 22 1992                   16






MAWK(1)                   USER COMMANDS                   MAWK(1)



     mawk, on the other hand, allows RS to be a  regular  expres-
     sion.  When "\n" appears in records, it is treated as space,
     and FS always determines fields.

     Removing the line at a time paradigm can make some  programs
     simpler  and  can  often  improve performance.  For example,
     redoing example 3 from above,

          BEGIN { RS = "[^A-Za-z]+" }

          { word[ $0 ] = "" }

          END { delete  word[ "" ]
            for( i in word )  cnt++
            print cnt
          }

     counts the number of unique words  by  making  each  word  a
     record.   On  moderate  size  files,  mawk executes twice as
     fast, because of the simplified inner loop.

     The following program replaces  each  comment  by  a  single
     space in a C program file,

          BEGIN {
            RS = "/\*([^*]|\*+[^/*])*\*+/"
               # comment is record separator
            ORS = " "
            getline  hold
            }

            { print hold ; hold = $0 }

            END { printf "%s" , hold }

     Buffering one record is needed to avoid terminating the last
     record with a space.

     With mawk, the following are all equivalent,

          x ~ /a\+b/    x ~ "a\+b"     x ~ "a\\+b"

     The strings get scanned twice, once as string  and  once  as
     regular  expression.   On  the string scan, mawk ignores the
     escape on non-escape characters while the AWK book advocates
     _\_c be recognized as _c which necessitates the double escaping
     of meta-characters in strings. Posix explicitly declines  to
     define  the  behavior  which  passively forces programs that
     must run under a variety of awks to use  the  more  portable
     but less readable, double escape.





Version 1.1         Last change: Jan 22 1992                   17






MAWK(1)                   USER COMMANDS                   MAWK(1)



     Posix AWK does not recognize "/dev/stderr" or \x hex  escape
     sequences in strings.  Unlike ANSI C, mawk limits the number
     of digits that follows \x to two.

     Finally, here is how mawk handles exceptional cases not dis-
     cussed  in the AWK book or the Posix draft.  It is unsafe to
     assume consistency across awks and safe to skip to the  next
     section.

          substr(s, i, n) returns the  characters  of  s  in  the
          intersection  of the closed interval [1, length(s)] and
          the half-open interval [i, i+n).  When  this  intersec-
          tion  is  empty,  the  empty  string  is  returned;  so
          substr("ABC", 1, 0) = "" and  substr("ABC",  -4,  6)  =
          "A".

          Every string, including the empty string,  matches  the
          empty  string  at  the front so, s ~ // and s ~ "", are
          always 1 as is match(s, //) and match(s, "").  The last
          two set RLENGTH to 0.

          index(s, t) is always the same as match(s, t1) where t1
          is  the  same  as t with metacharacters escaped.  Hence
          consistency  with  match  requires  that  index(s,  "")
          always  returns 1.  Also the condition, index(s,t) != 0
          if  and  only  t  is  a  substring   of   s,   requires
          index("","") = 1.

          If getline encounters end of file, getline var,  leaves
          var unchanged.  Similarly, on entry to the END actions,
          $0, the fields and NF have their value  unaltered  from
          the last record.


SEE ALSO
     _e_g_r_e_p (1)

     Aho, Kernighan and Weinberger, _T_h_e _A_W_K _P_r_o_g_r_a_m_m_i_n_g _L_a_n_g_u_a_g_e,
     Addison-Wesley Publishing, 1988, (the AWK book), defines the
     language, opening with a  tutorial  and  advancing  to  many
     interesting  programs  that  delve  into  issues of software
     design and analysis relevant to programming in any language.

     _T_h_e _G_A_W_K _M_a_n_u_a_l, The Free Software Foundation,  1991,  is  a
     tutorial  and  language  reference that does not attempt the
     depth of the AWK book and assumes the reader may be a novice
     programmer. The section on AWK arrays is excellent.  It also
     discusses Posix requirements for AWK.







Version 1.1         Last change: Jan 22 1992                   18






MAWK(1)                   USER COMMANDS                   MAWK(1)



BUGS
     mawk cannot handle ascii NUL \0 in the source or data files.
     You can output NUL using printf with %c, and any other 8 bit
     character is acceptable input.

     mawk implements printf() and sprintf() using the  C  library
     functions,  printf  and  sprintf, so full ANSI compatibility
     requires an ANSI C library.  In practice this  means  the  h
     conversion qualifier may not be available.  Also mawk inher-
     its any bugs or limitations of the library functions.

     Implementors of the AWK language  have  shown  a  consistent
     lack of imagination when naming their programs.


AUTHOR
     Mike Brennan (brennan@boeing.com).






































Version 1.1         Last change: Jan 22 1992                   19



```
{% endraw %}

## XDOSEXEC.ASM

{% raw %}
```

;********************************************
; xdosexec.asm
; copyright 1991, Michael D. Brennan
; 
; This is a source file for mawk, an implementation of
; the AWK programming language.
; 
; Mawk is distributed without warranty under the terms of
; the GNU General Public License, version 2, 1991.
;*******************************************/

; This is only used for small model DOS
; It executes a program via int 0x21 0x4b00
;

public  _xDOSexec

.model  small

;  _xDOSexec(char *command, void *blockp)

command  equ  [bp+4]
blockp   equ  [bp+6]

.data
extrn  _errno : word
.code

ss_save   dw   ?
sp_save   dw   ?

_xDOSexec  proc  near

     push  bp
     mov   bp, sp
     push  si
     push  di
     push  ds
     mov   ax, ds
     mov   es, ax
     mov   cs:ss_save, ss
     mov   cs:sp_save, sp
     mov   ax, 4b00h
     mov   bx, blockp
     mov   dx, command
     int   21h
     jc    @error
     cli            ;   restore  stack
     mov   ss, cs:ss_save
     mov   sp, cs:sp_save
     sti
     mov   ax, 4d00h
     int   21h      ;  get child exit code
@exit:
     pop   ds
     pop   di
     pop   si
     pop   bp
     ret
@error:
     mov   _errno, ax
     mov   ax, -1
     jmp   @exit

_xDOSexec  endp
end
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4004

     Volume in drive A has no label
     Directory of A:\

    MAWK11AX EXE    139829   8-26-93   2:21p
    MAWK11AS ZIP    214591   1-22-92   8:16a
    GO       TXT       924   9-24-93  10:12a
    GO       BAT        31   6-04-92   2:25a
            4 file(s)     355375 bytes
                            5120 bytes free
