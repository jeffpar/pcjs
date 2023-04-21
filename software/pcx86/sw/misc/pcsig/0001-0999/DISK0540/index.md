---
layout: page
title: "PC-SIG Diskette Library (Disk #540)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0540/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0540"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TINY PASCAL COMPILER"

    This disk will let you design and implement a small subset Pascal
    compiler, using the Turbo Pascal compiler.  It will let you translate
    the program into 8086 symbolic assembly language which you can compile.
    Not only can you build a small compiler, you learn how to create your
    own language tanslators and compilers.
    
    System Requirements:  64K, one disk drive and monochrome display, and a
    TURBO PASCAL compiler.
    
    How to Start:  To read TXT files, enter TYPE filename.ext and press
    <ENTER>.  To run a COM program, just type its name and press <ENTER>.
    For instructions on PAS listings, refer to your Pascal manual.
    
    File Descriptions:
    
    TUUTILS  PAS  Skeleton source file
    TUSYMS   PAS  Skeleton source file
    TUSKEL   PAS  Main "skeleton" file used by QPARSER to create
    PMACS    TXT  Macro forms file for use with QPARSER program generator
    CHASM    CFG  Configuration file for use with CHASM assembler
    TUSEMS   PAS  Skeleton source file
    TURUN    TXT  Sample program for compiler
    TURUN    LST  Chasm assembler list file
    TURUN    COM  Assembled (executable) sample program
    TURUN    ASM  Compiler output (8086 assembly code)
    TURPT    TXT  QPARSER report file (from compiler creation)
    TUPROG   PAS  Tiny Pascal compiler program
    TUPROG   COM  Executable compiler
    TUFILES  PAS  Skeleton source file
    TUDECLS  PAS  Skeleton source file
    TUDBUG   PAS  Skeleton source file
    TU       TBL  Table file created by QPARSER table generator
    TU       GRM  Tiny Turbo Pascal grammar
    TU       DOC  Tutorial on creating a Tiny Pascal compiler
    STDIO    HDR  Standard assembly IO routines needed for Tiny Pascal
    STDIO    HDR  Standard assembly IO routines needed for Tiny Pascal
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES540.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  540  Tiny Pascal Compiler Builder                         v1  DS2
---------------------------------------------------------------------------
This disk will let you design and implement a small subset Pascal compiler,
using the Turbo Pascal compiler.  It will et you translet the program into
8086 symbolic assembly language which you can compile.  Not only can you build
a small compiler, you learn how to create you own language tanslators and
compilers.  The documentation is easy to follow and very helpful in answering
those, "What if I?" questions.  It requires the Turbo Pascal Compiler to start
working with the program.
 
CHASM    CFG  Configuration file for use with CHASM assembler
PMACS    TXT  Macro forms file for use with QPARSER program generator
STDIO    HDR  Standard assembly IO routines needed for Tiny Pascal
TU       DOC  Tutorial on creating a Tiny Pascal compiler
TU       GRM  Tiny Turbo Pascal grammar
TU       TBL  Table file created by QPARSER table generator
TUDBUG   PAS  Skeleton source file
TUDECLS  PAS  Skeleton source file
TUFILES  PAS  Skeleton source file
TUPROG   COM  Executable compiler
TUPROG   PAS  Tiny Pascal compiler program
TURPT    TXT  QPARSER report file (from compiler creation)
TURUN    ASM  Compiler output (8086 assembly code)
TURUN    COM  Assembled (executable) sample program
TURUN    LST  Chasm assembler list file
TURUN    TXT  Sample program for compiler
TUSEMS   PAS  Skeleton source file
TUSKEL   PAS  Main "skeleton" file used by QPARSER to create TUPROG.PAS
TUSYMS   PAS  Skeleton source file
TUUTILS  PAS  Skeleton source file
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## NOTES540.TXT

{% raw %}
```
Program name:       A tiny Pascal Compiler Builder
 
Author name:        William A. Barret
 
Address:            QCAD Systems, Inc.
                    1164 Hyde Avenue
                    San Jose, CA  95129
 
 
Telephone Number:   800-538-9787 (408-727-6671 In CA)
 
Suggested Donation: $10 plus $2 shipping and handling
 
Program Description:
 
    In this program/article, they explain how to design and implement a
    small subset Pascal compiler, using the Turbo Pascal compiler and a
    couple of other software tools that you can purchase for a nominal
    charge.  It is capable of translating a Pascal subset program into 8086
    symbolic assembly language, which can then be assembled into a running
    program on an IBM PC.
 
    When you look at the tiny Pascal, it may strike you as being so
    ridiculously simple that it has no useful applications.  However, as it
    is explained, it provides all the important features of a high-level
    programming language, and can be extended indefinitely by writing more
    support functions.
 
    By reading this article, or better, by ordering the support software
    described at the end of this article, you will not only have your own
    extensible compiler going, but will have learned how language
    translators and compilers are organized and written.  So... carry on,
    please!
 
 
    Tiny Pascal Features
 
 
              * All four arithmetic operations in full expressions
                -- but on 16-bit integers only.
              * Assignment, IF-THEN-ELSE, BEGIN-END blocks, and WHILE-DO.
              * Functions with parameters
              * READ, WRITE, WRITELN with limited string support
              * Global variables
              * Integer literals
 
```
{% endraw %}

## PMACS.TXT

{% raw %}
```
{ Sample macros for Pascal parsers. }

{ This first group is not used much. }
begin_comment = '{';
char_quote = '''';            { for C, which makes a distinction }
end_comment = '}';
string_quote = '''';
zero_origin = 'false';        { don't force zero origin for arrays }

{ Apply cases:  Either a nop is generated (when there are 0 flags),
  or a case for each flag.  #N stands for the flag name, and #P for
  the whole production.  Note that there will be trouble if the
  production has token(s) with a closing curly brace. }
apply_case =
"case pflag of#{
  #N:  { #P }
    begin
      writeln(rfile, '#N applied.')
    end#^;#}
  end  { apply case };
";
apply_nop =  "{ no tagged productions }
";

{ Array inits (including token tables). }
token_table_init =
  { section which defines the tok table.  #N is the token name,
    #V is the token value (which the same as the index), and #X is
    the cumulative character count, plus one for a terminator. }
"{ initialize the token tables. }#{
puttok('#N', #V, #X);#}
";
array_names =  { array names, in the traditional order. }
  'STATEX, MAP, POPNO, STK_STATE, STK_TOSTATE,
   TOKNUM, TOSTATE, INSYM, PRODX, PRODS';
array_types =  { array type names, in the same order }
  'state_array, reduce_array, pop_array, ss_array, ss_array,
   token_array, tostate_array, insym_array, reduce_array, prod_array';
array_line_break = '#-
  { #3I: }  ';  { stuff to be inserted when the elt count overflows }
array_static_init =
  { template for Turbo Pascal typed consts.  translated starting
    from the #{, it means start loop, print the line break string
    if on the first or nth element, print the value, exit if none
    left, print ", ", and terminate the loop. }
'#N:  #T = (#{#10@#V#^, #});
';
array_assignment_init =
  { set of subscripted assignments for array initialization }
"{ initialize the #N array }#{
#N[#I] := #V;#}
";

{ Symbol table initialization }
symbol_table_init =
  { section which defines reserved wds.  one putsym call per symbol;
    #N is name, and #V is value (#I is also available). }
"{ initialize keywords in the symbol table. }#{
putsym('#N', #V);#}
";

{ scanner stuff }

char_case =  { character case in the scanner }
"'#C':  #S  { '#C' character case };
";
char_next_char =
  { start working on the next character position. }
"begin
  nextch;
  #S
end";
char_assignment = "token := #V  { '#N' }";  { when the token is known }
char_test =
  { the character in the current position is ambiguous.  If the next
    token starts with #C, then start working on the next character
    position; else try the next possibility for this character
    position.  this form is repeated until the ambiguity quits. }
"if ch = '#C' then
  #S
else #~";
char_error =
  { when there is no token which matches the prefix scanned. }
"
  begin
    error('Illegal character');
    nextch;
    get_token;
  end";
```
{% endraw %}

## TU.DOC

{% raw %}
```
 
 
 
                           Pascal in 25 Rules or Less
 
                               William A. Barrett
             QCAD Systems, Inc., 1164 Hyde Ave, San Jose, CA 95129
 
            In  this  article,  we're  going to design and implement a
          small  subset  Pascal  compiler,  using  the  Turbo   Pascal
          compiler  and  a couple of other software tools that you can
          purchase for a nominal charge.  It is capable of translating
          a  Pascal  subset  program  into  8086   symbolic   assembly
          language, which can then be assembled into a running program
          on an IBM PC.
            When  you  look  at  our tiny Pascal, it may strike you as
          being  so  ridiculously  simple  that  it  has   no   useful
          applications.   However,  as  we'll explain, it provides all
          the important features of a high-level programming language,
          and can be extended indefinitely  by  writing  more  support
          functions.
            By  reading  this  article,  or  better,  by  ordering the
          support software described at the end of this  article,  you
          will  not  only have your own extensible compiler going, but
          will  have learned  how  language translators and  compilers
          are organized  and written.   So... carry on, please!
 
 
          Tiny Pascal Features
 
            A full Pascal language, like Turbo, has  about  a  hundred
          features, and  a  large  support  library.    We're going to
          choose just a few features, and  simplify  the  language  to
          such an extent that it probably isn't fair to call it Pascal
          -- it just resembles Pascal in some ways.  In particular, we
          want  a  description  of  our  language  in just twenty-five
          production rules  or  less,  since  the  Qparser  demo  pack
          supports just  that  many.    Twenty-six rules, and the demo
          system won't work!  Does this sound like  a  contest  you've
          entered?
            Anyway,   we've  managed  to  pack  all  this  into  those
          twenty-five rules:
 
              * All four arithmetic operations in  full  expressions
            -- but on 16-bit integers only.
              *  Assignment,  IF-THEN-ELSE,  BEGIN-END  blocks,  and
            WHILE-DO.
              * Functions with parameters
              * READ, WRITE, WRITELN with limited string support
              * Global variables
              * Integer literals
 
            Although our feature list is very short, it's large enough
          to write some impressive and useful programs.  The reason is
          that tiny Pascal supports functions that can return values.
          If  you  need  a  capability,  then  you  can always write a
          function to provide that capability.
 
          A Tiny Pascal Program
 
             A complete program written in tiny  Pascal  follows  this
          paragraph.  You should be able to follow what it does.  When
          you  run this through the tiny Pascal compiler, you will get
 
 
                                     page 1
 
 
                           Pascal in 25 Rules or Less
 
 
          an assembler program that  is  ready  to  be  assembled  and
          executed on your PC.  That program will also contain all the
          high-level tiny  Pascal  statements  as comments.  The fully
          compiled and assembled listing is given near the end of this
          article.
 
            {TURUN -- A sample program written in Tiny Pascal }
            var I, J, K, PROBLEM;
 
            {*********************}
            function ISLESS(N1, N2);
            begin  {returns 1 if n1<n2, 0 otherwise}
              if n2-n1 then isless:=1   {truth value test is >0}
              else isless:=0;
              end;
 
            function ADDEMUP(LOWER, UPPER, SUM);
            begin end;    {makes it a forward declaration}
 
            {*********************}
            function ISEQUAL(N1, N2);
            begin
              if n2-n1 then isequal:=0   {false}
              else
              if n1-n2 then isequal:=0
              else isequal:=1;
              end;
 
            {***********************}
            function ADDEMUP(LOWER, UPPER, SUM);
                  {SUM is a local}
            begin
              sum:=0;
              while isless(lower, upper) do begin
                sum:=sum+lower;
                lower:=lower+1;
                end;
              addemup:=sum+lower;  { the last one was left out }
              end;
 
            {*********************}
            function MAIN(SUM, UPPER);
            begin
              i:=1;
              j:=i+5;
              k:=j-16;
              problem:=i+(j*k);
              writeln('I: ', i, ' J: ', j, ' K: ', k, ' Problem: ', problem);
              write('Enter upper ');
              upper:=read;
              sum:=addemup(1, upper);  {sum of integers 1..upper}
              if isequal(sum, (upper*(upper+1))/2) then
                writeln('Sum = ', sum)
              else begin
                writeln('BUG: Sum = ', sum, '; should be ',
                           (upper*(upper+1))/2);
                end;
              end;
 
 
                                     page 2
 
 
                           Pascal in 25 Rules or Less
 
 
 
 
          More About Tiny Pascal
 
            Our functions pass parameters by VALUE only -- there's  no
          VAR parameter capability.  However, a function can return an
          integer value, or it can set the value of a global variable.
          That's  a  bit awkward sometimes, but it's still better than
          assembler.
            There are no Boolean data types as such, but the  language
          uses 0   and   1  as  a  substitute  where  necessary.    In
          particular, the expression in an IF  or  a  WHILE  tests  an
          integer    value    for    greater-than-zero    (true)    or
          less-than-or-equal-to-zero (false).   That's  good  enough.
          For example, you would write
 
             if n1-n2 then ...
 
          in tiny Pascal, which is equivalent to
 
             if n1-n2>0 then ...  or
             if n1>n2 then ...
 
          in full  Pascal.   The comparison operators can of course be
          added with more production rules.
            There are also no local variables in tiny Pascal,  but  it
          turns out they really aren't needed.  For example,
 
            function ADDEMUP(LOWER, UPPER: integer): integer;
              var SUM: integer;
            begin ...  end;
 
          in full Pascal can be written
 
            function ADDEMUP(LOWER, UPPER, SUM);
            begin ...  end;
 
          in tiny  Pascal.    Note  that we don't bother with the type
          designators (i.e.    :  integer)  since  only  one  type  is
          supported.  Also our compiler is arranged so that if ADDEMUP
          is called with only two parameter values, SUM is initialized
          to 0.  For example,
 
            addemup(5, 10)
 
          causes LOWER=5,  UPPER=10, and SUM=0 inside ADDEMUP.  So you
          see the extra formal parameters have the same effect as  the
          local variables  in  full  Pascal.   Of course, you can also
          call ADDEMUP with all three parameters, or none -- that's an
          unsafe defect in tiny Pascal which can't be avoided with our
          tight production rule limit.  You'll just have to be sure to
          call functions with the correct number of parameters.
            Functions can be called within expressions, or on  a  line
          by themselves.    For  example, both of these statements are
          OK:
 
            addemup(5, 10); {returned value is ignored}
            x := y - addemup(5, 10);  {returned  value  is  subtracted
 
 
                                     page 3
 
 
                           Pascal in 25 Rules or Less
 
 
          from y}
 
            Literal  strings  are  permitted  only  within  a WRITE or
          WRITELN statement; they're intended to decorate messages  to
          the standard  output  device  only.   If you want strings to
          appear in expressions and other  functions,  then  you  will
          have to introduce declarations for them and type designators
          -- that'll take more productions.
 
          READ and WRITE
 
            Tiny  Pascal supports three I/O functions: READ, WRITE and
          WRITELN.  READ is called with no parameters, and returns  an
          integer value entered at the keyboard.
            WRITE  takes any number of integer expressions or strings,
          and writes them  to  the  console  screen  in  left-to-right
          order.   No  line  return  is emitted at the end, so you can
          call WRITE several times  before  sending  a  line  return.
          WRITELN  is  the  same as WRITE, except that it emits a line
          return after writing its parameters.  Both these can take no
          parameters if you like -- WRITE does  nothing,  and  WRITELN
          emits a return.
            It  happens  that  our integers will be read or written in
          hexadecimal for simplicity, but you can  easily  change  the
          STDIO.HDR file to support decimal notation instead.
 
          The MAIN Program
 
            There must be one function whose name is MAIN in each tiny
          Pascal program.   That'll  be the first function called.  It
          may have parameters, but we  haven't  provided  any  way  of
          passing   parameters   to  it  from  the  console  --  Turbo
          parameters  are  strings  anyway  and  would  have   to   be
          translated into integers somehow.
            MAIN  can  of  course  call  any other procedure, and it's
          through procedure calls and use of  the  control  structures
          that algorithms can be built up.
 
          Recursion and FORWARD Functions
 
            Tiny  Pascal  supports  recursion  --  a function can call
          itself any number of times.  Each time a function is called,
          its local variables are pushed onto a runtime  stack,  along
          with its  return address.  A special 8086 register -- the BP
          register -- is used to mark the position of these  variables
          so that  they can be accessed from within a function.  We'll
          explain just how that works later.
            Sometimes you'll have a procedure  A  that  calls  B  that
          calls A.   The  problem is that A needs a declaration for B.
          You can supply that in tiny Pascal by writing a function for
          B with an empty Stmt, like this:
 
            function B(P1, P2); begin end;
 
          You can even omit the begin end; if you want to.   The  tiny
          Pascal  compiler  will recognize this as a so-called forward
          declaration.  In full Pascal, you'd write it like this:
 
 
 
                                     page 4
 
 
                           Pascal in 25 Rules or Less
 
 
            function B(P1, P2: integer): integer; forward;
 
          The Grammar
 
            Computer  languages  are  described  by   a   context-free
          grammar, which  is  just a list of production rules.  Here's
          the grammar for tiny Pascal, all twenty-five rules of it:
 
              \ TU.GRM  -- tiny Pascal grammar held to 25 productions
            Goal -> FDeclList
            FDeclList -> FDeclList FuncDecl ;
                      -> FuncDecl ;
            FuncDecl -> FUNCTION <identifier> ( ExprList ) ; Stmt  #FDECL
                     -> VAR ExprList      #VDECL   \ Global variables
                           \ ExprList must be identifiers only
            Stmt -> <identifier> := Expr   #ASSIGN
                 -> IF Expr THEN Stmt ELSE Stmt  #IFTHEN
                 -> WHILE Expr DO Stmt     #WHILEDO
                 -> BEGIN StmtList END     #BLOCK
                 -> Expr                   #SEXPR  \ procedure call only!
            StmtList -> StmtList Stmt ;    #STLIST2
                     -> <empty>
            Expr -> Expr + Term            #ADDOPR
                 -> Expr - Term            #SUBOPR
                 -> Term
            Term -> Term * Primary         #MPYOPR
                 -> Term / Primary         #DIVOPR
                 -> Primary
            Primary -> ( Expr )            #PAREN
                    -> <integer>          \ only type INTEGER supported
                    -> <string>
                    -> <identifier>       \ variable or function call w/o parameters
                    -> <identifier> ( ExprList )      #FUNCP
            ExprList -> ExprList , Expr    #EXPRLIST2
                     -> Expr               #EXPRLIST1
 
            First, a word about the notation.  Each rule takes up  one
          line.   A  backslash starts a comment, which runs to the end
          of the line.  The pound sign (#) marks  a  production  flag,
          which  we'll  use  as  a  kind  of  handle in the compiler's
          parser.
            A rule with nothing to  the  left  of  the  symbol  ->  is
          assumed to  have the same symbol as the preceding rule.  For
          example, the third rule is written
 
                        -> FuncDecl ;
 
          but actually means
 
            FDeclList -> FuncDecl ;
 
            The first rule, with the left member Goal, expands into  a
          complete tiny  Pascal  program.    From the second and third
          rules, a program is a sequence  of  FuncDecl,  separated  by
          semicolons.
            Each  FuncDecl in turn is either a FUNCTION declaration or
          a VAR declaration, according to the fourth and fifth rules.
          In  fact, we will insist that a program consist only of some
 
 
                                     page 5
 
 
                           Pascal in 25 Rules or Less
 
 
          VAR declarations (the  global  variables)  followed  by  the
          FUNCTION declarations.
            Each    FUNCTION   declaration   carries   a   name   (the
          <identifier>),  an  expression  list  (with  at  least   one
          expression), and a statement Stmt.
            Note  that  a  Stmt  can  be a list of statements StmtList
          enclosed in a BEGIN-END pair, so that the body of a function
          can consist of one, two, three or more statements.
            There are four  kinds  of  statement,  an  assignment,  an
          IF-THEN-ELSE,   a   WHILE-DO,  a  BEGIN-END  block,  and  an
          expression -- which in fact must be just a  function  call.
          Note   that   the   ELSE   must  always  be  present  in  an
          IF-THEN-ELSE, unlike full Pascal.
            Also note that Stmt can be <empty>, i.e.  absent.  Thus
 
             if a-b THEN ELSE BEGIN ...  END
 
          is a legal statement.
            For expressions, we support all four arithmetic operations
          on our integers, as well as parenthesizing.  The  production
          rules  guarantee  that  the  usual  Pascal  precedence rules
          apply, and that things inside parentheses will be  evaluated
          first.
            The form  <integer>  stands  for  any  unsigned  integer.
          <string> stands for a Pascal literal string, for example
 
             'Here is a Pascal string'
 
          The form <identifier> stands for  any  legal  Pascal  name.
          Inside  an  expression, the name could stand for a global or
          local variable, or a function name.  As a function name, the
          function will  be  called  with  zero  or  more  parameters,
          returning some value.
 
          Compiler Overview
 
            Let's  first take a broad look at our compiler, then we'll
          look at some of the details.  We need to look at the  forest
          before we  study  the  trees.    (The  details  are  in fact
          voluminous as you might expect, and are best  examined  from
          the source files directly using your favorite editor.)
            We'll   be   using  a  compiler  generator  tool  for  the
          backbreaking part  of  the  job  --  our  choice  is  called
          Qparser, and is available from QCAD Systems, Inc.
            Qparser  accepts  the  25-rule grammar we've written above
          and  generates   a   complete   Pascal   program   from   it
          automatically.   All  you  have  to  do  is run two programs
          called LR1 and LR1P with the  appropriate  file  names,  and
          you'll get   a   Turbo   Pascal   source  file.    (Specific
          instructions are included with the product.)
            Now Qparser only generates a parser --  that's  a  program
          that  will  take a tiny Pascal source file and break it down
          into small steps.  Each  step  will  be  a  production  rule
          reduce or  apply operation.  We need to add some more Pascal
          source code to that  `front-end'  compiler,  to  get  it  to
          generate assembler code.
            In particular, the compiler will:
 
 
 
                                     page 6
 
 
                           Pascal in 25 Rules or Less
 
 
              1.   Construct  an  abstract  syntax  tree (AST) for a
            whole function.  This will be built  from  unit  records
            allocated  from  the heap, linked together with pointers
            in various  ways.    The  AST  will  carry  a   complete
            description    of   all   the   variables,   statements,
            expressions, function calls, etc.  in the function.
              2.   When  a  function  AST  is  complete,  its  local
            variables  will  be  added to a symbol table, along with
            their positions relative to register BP.
              3.  Then the statements  and  expressions  are  turned
            into 8086 assembly code through a recursive tree-walking
            procedure called   EVAL.    EVAL  is  rather  simple  to
            describe, and -- as we  shall  see  --  produces  rather
            tight 8086 code for our integer operations, assignments,
            function calls, IF-THENs, and WHILE-DOs.  It's also easy
            to understand, extend or modify.
 
            The  tiny  Pascal  compiler  acts  somewhat  like  a batch
          compiler -- it collects all the lines for a  function,  then
          emits all  the  code  for the function.  We've tried to make
          the resulting assembly code easy  to  read  by  copying  the
          function  source lines as comments, and by writing the names
          of local variables as comments.  (Local variable  references
          will  all appear as offsets from register BP in the assembly
          code, rather than as names.)
 
          Designing the Compiler
 
            Once we've written the grammar, we  can  pass  it  through
          Qparser,  then try out the automatically-generated parser on
          a sample program -- such as TURUN given earlier.  That  will
          verify that our grammar describes what we expect it to.
            The next big step is designing compiler data structures to
          support  the  AST  that  will  hold  all  the  features of a
          complete function.  It turns out that's easy to do,  too  --
          the  Qparser files contains a sample Pascal record structure
          designed for that purpose, called a SEMREC.  Here's what the
          generic  SEMREC  looks  like  as  supplied  in  the  Qparser
          software:
 
            type
              SEMTYPE = (OTHER, IDENT, FIXED, STRNG);
              SEMRECP = ^semrec;
              SEMREC = record
                         case SEMT: semtype of   { semantic stack structure }
                           ident: (SYMP: symtabp);
                           fixed: (NUMVAL: integer);
                           strng: (STX: integer);       {index to string table}
                           end;
 
            This supports only three kinds of object: an identifier, a
          fixed-point integer  and a string.  Identifiers are actually
          written into a symbol table -- the symtabp is a pointer to a
          symbol table record.  An integer has a  value,  NUMVAL.    A
          string  is  written  to a global packed array of char called
          STRTAB, starting at the index STX, and ending on a chr(0).
            Note that the type SEMRECP is  a  pointer  to  a  SEMREC.
          We're  going  to build our AST around a tree whose nodes are
 
 
                                     page 7
 
 
                           Pascal in 25 Rules or Less
 
 
          linked by SEMRECP pointers.  Each of the  SEMREC  structures
          will  be allocated from the Pascal heap as needed, and we'll
          dispose of them all after we're through with  them,  at  the
          end of scanning a tiny Pascal function.
 
          Arithmetic Operators
 
            The  AST  for the four arithmetic operators is the easiest
          to grasp.  We extend SEMREC to these operators by adding two
          lines to our SEMREC declaration.  The result is:
 
             SEMREC = record
                         case  SEMT:  semtype  of  {  semantic   stack
          structure }
                           ident: (SYMP: symtabp);
                           fixed: (NUMVAL: integer);
                           strng:  (STX:  integer);  {index  to string
          table}
                           addop, subop, mpyop, divop:
                                  (LEFT, RIGHT: semrecp);
                           end;
 
          Of course, we also need to add  the  enumerated  type  names
          addop, etc.  to the SEMTYPE list:
 
              SEMTYPE = (OTHER, IDENT, FIXED, STRNG,
                                ADDOP, SUBOP, MPYOP, DIVOP);
 
            Let's  look  at an example of an arithmetic expression and
          see how it is expressed as an AST: X * (Y-Z) / 15.
            Figure 1 shows the AST we want.  The -  operator  must  be
          performed  first,  since  we  need  its  result before the *
          operator, and it in turn is needed before the division / can
          be performed.  This  ordering  is  clearly  dictated  by  an
          inflexible  AST  rule:  the  children  of  a  node  must  be
          evaluated before the node itself.  The leaves  of  our  tree
          are identifiers (X, Y, Z) or numbers (15).  A number clearly
          stands  for  itself,  while  each identifier stands for some
          numeric value at runtime.  In fact, an  identifier  will  be
          associated  with  some memory address whose contents will be
          fetched in an appropriate instruction.
            Let's next see how the AST of figure 1 would be  described
          by SEMREC  structures  linked  by pointers.  That's shown in
          figure 2, where each SEMREC is a box, and its LEFT and RIGHT
          pointers are connected to other SEMREC boxes.  The root is a
          SEMREC whose SEMT=divop.  Its LEFT child is  another  SEMREC
          whose SEMT=mpyop.    The  leaves  are also SEMREC's, since a
          SEMRECP pointer must point to a SEMREC, but the  leaf  nodes
          are either  SEMT=ident or SEMT=fixed.  The ident nodes point
          to a symbol table entry  which  will  carry  the  identifier
          name, its type, its address and possible other information.
 
          How the AST is Built
 
            The AST  will  be  built through parser actions.  We don't
          have the space here to go into the  theory  of  the  parsing
          machine  -- that's described in several different references
          [1, 2].  However, we'll try to explain enough to see how our
 
 
                                     page 8
 
 
                           Pascal in 25 Rules or Less
 
 
          AST gets built.
            Let's look at our arithmetic expression again: X * (Y-Z) /
          15.  When the parser scans this,  it  will  go  through  the
          following sequence of production steps:
 
            Primary -> <identifier>          ; <identifier> = X
            Primary -> <identifier>          ; <identifier> = Y
            Primary -> <identifier>          ; <identifier> = Z
            Expr -> Expr - Term   #SUBOPR    ; Y - Z
            Primary -> ( Expr )   #PAREN     ; (Y-Z)
            Term -> Term * Primary  #MPYOPR  ; X * (Y-Z)
            Primary -> <integer>             ; 15
            Term -> Term / Primary  #DIVOPR  ; X * (Y-Z) / 15
            Expr -> Term
 
          We've left out several intermediate steps, but these are the
          important ones.  Essentially, a derivation of our expression
          is being reconstructed in reverse order -- we start with the
          expression,  match  various  production  right  parts to the
          expression, and eventually end up with a  single  expression
          node -- Expr.
            Notice  how the identifiers X, Y and Z are picked up first
          and `reduced' to a Primary.  Then the Y and Z primaries  are
          combined in  the  SUBOPR  production.   That agrees with our
          notion that the subtraction has to come first.
            The parentheses are covered by the  PAREN  production;  we
          can   then   reduce   the  multiplication  with  the  MPYOPR
          production.
            The integer 15 gets scanned next; we didn't need it  until
          now,  but  it's  involved  in  the division, and finally the
          division is covered through the DIVOPR production.
            This sequence of events is the same as if we evaluated the
          expression with  a  reverse-Polish  calculator,  like  those
          manufactured by  the  Hewlett-Packard  Co.  We enter X, then
          enter Y, enter Z, subtract, multiply, enter 15 and  divide.
          On each `enter', a value is pushed into a stack, which saves
          it for future reference.  Each operation is between a number
          on  the  stack  top and a number just below it; the stack is
          popped and the result appears on the stack top.
            Thus when the multiply is performed, it acts  on  the  two
          operands X and (Y-Z).  When the divide is performed, it acts
          on the operands X*(Y-Z) and 15.
 
          Using the Semantics Stack
 
            Qparser  also provides a stack that works almost like that
          on a reverse-Polish calculator.  The difference is that  the
          Qparser  stack  can  be  very  deep,  and  it  is  keyed  to
          production apply actions.  Let us explain what that means --
          it's crucial to understanding how our AST is built.
            Qparser's stack is called SEM.   SEM  is  declared  as  an
          array of  SEMRECP  pointers.    The stack top index is named
          TOS, which increases as more items are pushed onto the stack
          and decreases as the stack is popped.  Thus SEM[TOS]^ points
          to a SEMREC object on the  top  of  the  stack;  SEM[TOS-1]^
          points to  an object just below the stack top, etc.  (SEM[n]
          may also be NIL, which means there is no object.)
            Now  the  Qparser  software  will  perform  the  following
 
 
                                     page 9
 
 
                           Pascal in 25 Rules or Less
 
 
          services for you in response to scanning its input source:
 
            1.   Each  tagged production will cause procedure APPLY to
          be called with an  integer  parameter  that  designates  the
          production.  The APPLY procedure looks like this:
 
            procedure APPLY(PFLAG: integer; var TSEMP: semrecp);
            begin
              case PFLAG of
                ADDOPR: ...
                ASSIGN: ...
                BLOCK: ...
                 etc.
                WHILEDO: ...
                VDECL: ...
                end
              end;
 
          Note  that  PFLAG  causes  an immediate branch to one of the
          legs of the CASE statement -- a leg that corresponds to  one
          particular production.
            2.   When  a  production such as Term -> Term * Primary is
          invoked through an APPLY  call,  the  top  three  SEM  stack
          elements   will  be  aligned  with  Term,  *,  and  Primary,
          respectively.  SEM[TOS] will point to  something  associated
          with  Primary, SEM[TOS-1] will be NIL (since * needn't carry
          information),  and  SEM[TOS-2]  will  point   to   something
          associated with Term.
            This is an important concept, and is illustrated in figure
          3.   Just  before  our  APPLY  action,  the  stack has three
          elements on its top, which carry pointers to  the  roots  of
          the trees  X and (Y-Z), respectively.  (See figure 2 for the
          whole tree.)
            3.  In the APPLY procedure, you have an opportunity to  do
          something about the SEM information, and to return a pointer
          to a SEMREC through the var parameter TSEMP.
            Consider  production  Term -> Term * Primary again (figure
          3).  We assume that SEM[TOS-2] (= Term)  points  to  a  tree
          node, as  does SEM[TOS] (= Primary).  We want to construct a
          new SEMREC tree node whose SEMT is MPYOP,  whose  LEFT  will
          point to  Term and whose RIGHT will point to Primary.  TSEMP
          will be assigned to point to this new node.  That's easy  --
          here's the Pascal code fragment needed for the job:
 
             MPYOPR: { Term -> Term * Primary }
               begin
                 new(tsemp); {allocate a new node}
                 with tsemp^ do begin {and fill in its record fields}
                   left:=sem[tos-2]; {points to Term}
                   right:=sem[tos]; {points to Primary}
                   semt:=mpyop;
                   end
                 end;
 
            4.   When  APPLY  returns,  the  var  parameter  TSEMP  is
          returned to the parser, which will (a)  strip  off  the  top
          three  pointers  on  the  SEM  stack then (b) push the TSEMP
          pointer.  Notice that the top three  pointers  have  already
 
 
                                    page 10
 
 
                           Pascal in 25 Rules or Less
 
 
          been linked  to  TSEMP,  so  losing them is no big deal.  By
          pushing TSEMP on the stack, we have  effectively  associated
          our  new  tree  root  with  the Term on the left side of the
          production Term -> Term * Primary.
            Refer to figure 4.  This is how the stack will  look  just
          after returning  from  APPLY.    The top three pointers have
          been scraped off, and replaced by the  TSEMP  pointer.    We
          clearly  have a larger tree rooted in the stack top -- again
          look at figure 2 for the whole tree,  and  you'll  see  that
          we've added one node to it.
 
            That closes  the  loop  on our operations.  Eventually our
          new Term will show up again in  the  APPLY  procedure,  this
          time  as an element in the right part of some production; it
          will carry the root of a tree, and that tree will get  built
          into something bigger.
            Certain  actions  are  done  for  us  automatically by the
          parser  and  lexical  analyzer  system  of  Qparser  --  the
          <identifier>,  <integer>  and <string> forms are loaded into
          the SEM stack automatically when and where they are needed.
            For example, consider the production Stmt ->  <identifier>
          := Expr,  tagged  ASSIGN  in  our production set.  When this
          pops up in an APPLY call, there will be a SEMREC pointer  in
          SEM[TOS-2]  that  corresponds  to  the <identifier>; it will
          carry the tag SEMT=ident, and the SYMP pointer will point to
          a symbol table entry that corresponds to the identifier.
            Single productions needn't be tagged --  the  parser  will
          preserve  whatever  is attached to the right member, passing
          it along to the left  member.    (A  single  production  has
          exactly  one  token in its right member, for example Primary
          -> <identifier>).  Also, TSEMP is by default NIL, so  if  we
          choose not to set TSEMP, a NIL will be pushed on the stack.
 
          Other Tree Nodes
 
            Well,  we've seen how an arithmetic expression is built up
          as an AST.  The same principle can be applied to any form in
          our language.  Let's look at  some  others.    Consider  the
          assignment  production  Stmt -> <identifier> := Expr, tagged
          ASSIGN.  We'll use the tag SEMT=assignop for it, and use our
          friends LEFT and RIGHT as pointers to the  <identifier>  and
          Expr.   The  APPLY  code  that  builds  this tree node looks
          almost the same as for the multiply case:
 
             ASSIGNOP: { Stmt -> <identifier> := Expr }
               begin
                 new(tsemp); {allocate a new node}
                 with tsemp^ do begin {and fill in its record fields}
                   left:=sem[tos-2];
                   right:=sem[tos];
                   semt:=assignop;
                   end
                 end;
 
          In fact, it  looks  so  much  alike  that  we've  created  a
          procedure  that  deals with all these binary operator cases,
          called BIN_TREE; this takes one parameter, the  SEMT  value,
          and  expects  to  find a LEFT node in SEM[TOS-2] and a RIGHT
 
 
                                    page 11
 
 
                           Pascal in 25 Rules or Less
 
 
          node in SEM[TOS].
            Not all the tree nodes have binary operators.  Let's  look
          at an expression list, which is carried by two productions:
 
            ExprList -> ExprList , Expr #EXPRLIST2
                     -> Expr #EXPRLIST1
 
          These  don't  look  quite  like our binary operators, but in
          fact can be handled in a very similar way.  We'll create yet
          another SEMT enumerated  type  EXPR_LIST  with  a  LEFT  and
          RIGHT.   LEFT will point to an expression subtree, but RIGHT
          will be NIL or point to another EXPR_LIST.  Figure  5  shows
          the general  idea  for  a  list  of  two  subtrees.    (This
          structure is borrowed from Lisp --  the  LEFT  pointer  acts
          like CAR and the RIGHT pointer acts like CDR).
            The code for these two productions looks like this:
 
            EXPRLIST1:  { ExprList -> Expr }
              if not(is_void(sem[tos])) then begin
                tsemp:=new_sem(expr_list);
                tsemp^.left:=sem[tos];
                end;
            EXPRLIST2:  { ExprList -> ExprList , Expr }
              if not(is_void(sem[tos])) then begin
                tsemp:=new_sem(expr_list);
                tsemp^.left:=sem[tos];
                tsemp:=nconc(sem[tos-2], tsemp);
                end
              else tsemp:=sem[tos-2];
 
          Some new functions are shown in this code fragment.  NEW_SEM
          allocates  a  SEMREC  from  the  Pascal  heap using NEW, and
          assigns its SEMT to the passed parameter.  More importantly,
          it also initializes LEFT and RIGHT (or  other  pointers)  to
          NIL, rather than letting them be garbage.  NEW_SEM is always
          used  rather  than  NEW  directly  in  order to achieve this
          useful initialization.
            The IS_VOID function tests its SEMREC parameter for  NIL.
          Finally, NCONC takes two parameters, a list L and an element
          E.   It  attaches  the  element  to  the  end of the list by
          altering the RIGHT pointer of the last element of the list L
          to point to the element E.  (Again, this is inspired by  the
          Lisp function of the same name).
            Let's now  look  at  these operations in more detail.  The
          EXPRLIST1 operation must either return NIL or  an  EXPR_LIST
          that points  to the Expr.  It turns out that Expr will never
          be NIL, but we've written it this way for robustness.
            The EXPRLIST2 operation looks at the Expr; if it  is  NIL,
          then  we  can simply return the pointer to the ExprList (it,
          too, may be NIL).  If Expr isn't NIL, then we call NCONC  to
          stitch  it  onto  the  end  of the ExprList, as suggested by
          figure 5.
 
          Function Declaration
 
            It's time to consider the function declaration production
 
             FuncDecl -> FUNCTION <identifier> (  ExprList  )  ;  Stmt
 
 
                                    page 12
 
 
                           Pascal in 25 Rules or Less
 
 
          #FDECL
 
          When  this  pops  up  in  an  APPLY  action, we have scanned
          through the function name (the <identifier>), its  parameter
          list (ExprList),  and  its  body (the Stmt).  Assuming we've
          done all our AST building correctly, the ExprList  and  Stmt
          are the roots of some trees, possibly very large.
            The  scanning  and  parsing action have worked through the
          function  declaration  completely,  but   we   haven't   (1)
          generated  any  code,  nor (2) done anything about declaring
          the procedure or its parameters.
            In fact, we need to perform these actions in this order:
 
              1.  Add the function identifier to the symbol table at
            the global scope level, if it isn't already there.   (It
            could  have  been previously declared with an empty Stmt
            part, i.e.  as a forward.)
              2.  Raise the scope level by one.
              3.  Add the ExprList identifiers to the symbol  table,
            checking each  one  for  multiple  declarations.   These
            should each  be  a  single  identifier  rather  than  an
            expression; we can easily test their tree roots for this
            case and complain about an error.  We did it this way to
            save on  productions.    Each of the identifiers will be
            assigned a  location  in  the  stack  relative  to  base
            register BP -- we'll explain how that works shortly.
              4.  Evaluate  the Stmt tree.  A recursive procedure is
            needed for  this  that  will  work  through  the  entire
            statement tree, emitting code appropriate to each of the
            forms in  our  language.    We'll  see that this is much
            easier than it appears on  the  surface  and  is  almost
            trivial for some of the language forms.  All we need are
            some  simple translation forms in 8086 assembler and our
            AST will unfold very neatly into code.
              During the evaluation  phase,  every  identifier  will
            have  a pointer to a symbol table entry which will carry
            a relative address and a type for the name.   That  will
            be useful in generating instructions for the identifier.
 
          The Symbol Table
 
            We need  to  describe  our symbol table system.  There are
          various ways of organizing symbol  tables;  we're  going  to
          focus on the one used in the Qparser system.
            User  names  are  associated with the <identifier> form in
          the grammar.  The default <identifier> form is a Pascal name
          -- something that starts with a letter  and  continues  with
          letters, digits,  or  underscores.  The first character that
          isn't in this set stops the name -- it could be a  space,  a
          left parenthesis, or whatever.
            Names will be upper cased as in Pascal.
            Note  that  certain  keywords  look  like identifiers, for
          example, IF, WHILE, BEGIN, etc.  The lexical  scanner  scans
          one  of these as though it were an identifier, then searches
          the symbol table for it.  The keywords have previously  been
          entered  and  tagged  as such, therefore a successful `find'
          will immediately indicate that the supposed identifier is in
          fact a keyword.  Making this distinction  is  vital  to  the
 
 
                                    page 13
 
 
                           Pascal in 25 Rules or Less
 
 
          parser,   since   the   keywords   are  important  clues  to
          recognition of the program phrases.
            If the identifier isn't a  keyword,  it  will  be  entered
          anyway under an innocuous tag (user).
            Now  that  we've  discussed  how the symbol table works in
          general, let's look at the symbol table record structure:
 
            type
              SYMBOL = string[maxtoklen];
              SYMTYPE = (RESERVED, SYMERR, USER, VAR_TYPE, FUNC_TYPE);
              SYMTABP = ^symtabtype;
              SYMTABTYPE = record
                             { structure for <identifier>s and keywords }
                             NEXT: symtabp;
                             LEVEL: int;
                             SYM: symbol;
                             case SYMT: symtype of
                               reserved: (TOKVAL: tokrange);
                               var_type: (VADDR: integer);
                                  {relative to BP}
                               func_type:
                                 (FADDR: integer;  {code location}
                                  PBYTES: integer;  {bytes of parameters}
                                  IS_ACTUAL,     {TRUE if an actual declaration
                                                    has been seen}
                                  IS_SYSTEM   {system procedure, demands special
                                                  treatment}
                                    : boolean);
                               end;
 
          There are five classes of  symbol.    RESERVED  is  for  the
          keywords.   SYMERR  is  used  during error recovery when the
          parser  needs  to  make  up  an  identifier  for   insertion
          purposes.    USER   is  a  generic  name  attached  to  user
          identifiers when they are first seen.   VAR_TYPE  refers  to
          the  global  and  local  variable  names  -- its VADDR field
          provides (in the local case only) an offset from BP.
            FUNC_TYPE refers  to  a  declared  function.    These  are
          somewhat complicated in our tiny Pascal.
            FADDR actually isn't used, but could be to refer to a code
          location.  Since we generate symbolic assembly code, we will
          just  produce a symbol procedure label and let the assembler
          worry about where the function will be located.
            PBYTES is the number of bytes  of  formal  parameters  the
          function carries.    We  need  this  in order to generate an
          appropriate EXIT instruction, and also to generate calls.
            IS_ACTUAL will be false until a declaration  with  a  full
          statement body  is seen; after that, IS_ACTUAL will be true.
          We use this to catch such errors as undeclared functions and
          two functions with full statement bodies.
            IS_SYSTEM designates the function as a `system'  function,
          slated for special handling.  Our WRITE, WRITELN, READ and a
          couple of  other  functions  are  in  this class.  These are
          supported by special assembler routines  and  aren't  called
          quite the same way as user-declared functions.
 
            A symbol  name  is stuffed in SYM, which is just a string.
          NEXT carries a link to another  SYMTABTYPE  record,  and  is
 
 
                                    page 14
 
 
                           Pascal in 25 Rules or Less
 
 
          used  in  a  hash  table linked-list system for rapid symbol
          searching.
            The LEVEL parameter designates the scoping  level  of  the
          name.  Reserved names are carried at level -1.  Global names
          are at  level  0 and locals at level 1.  In full Pascal, the
          LEVEL would be incremented by one for every descent  into  a
          lexically nested   procedure   or  function.    Tiny  Pascal
          supports only one global level of procedures, so LEVEL never
          exceeds 1.
 
            There are several major symbol table actions  of  interest
          in tiny   Pascal.     Reserved  names  are  pushed  into  an
          otherwise-empty table as the first action of  the  compiler,
          at level -1.  This action is essentially automatic by virtue
          of the Qparser generator.
            When  an  <identifier> form is seen, the identifier string
          is picked up by the lexical  analyzer  and  entered  in  the
          table, if  not  already  there.   The analyzer also builds a
          SEMREC structure of type IDENT and pushes it  into  the  SEM
          stack at  the appropriate place.  APPLY will therefore `see'
          an IDENT structure of type USER upon the first appearance of
          some user identifier.
            Eventually, we choose to add attributes to the identifier.
          This will occur when a production appears that reveals  what
          attributes are required.  In tiny Pascal, that production is
          the FuncDecl  production  FDECL.   The action required is to
          scan through the ExprList, and change the attributes of  the
          names to   VAR_TYPE,  assigning  VADDR  values  as  we  go.
          Correction: if the name doesn't carry a  USER  tag,  it  may
          have  been  previously  declared  as  a global variable or a
          function; we need  to  override  the  previous  use  without
          destroying the  previous  use.    Our  symbol  table  scheme
          permits  doing  that  by  carrying  successive  names  in  a
          first-in-first-out stack organization.
            Once  these  names  have  been  declared, there will be no
          further declarations of names in  the  function  body;  only
          references   to  names  that  should  previously  have  been
          declared.  These name references will show up as we scan the
          AST in the EVAL function.  Among other things, we watch  out
          for  identifiers  carrying  a USER tag -- these haven't been
          declared anywhere and deserve an error complaint.
 
          Getting Rid of Unwanted Names
 
            When the function body has been fully  evaluated  and  all
          code generated, we need to get rid of the local variables in
          the symbol  table.    A  function  called  CLEARSYM does the
          trick.  It locates all the names in the symbol  table  whose
          LEVEL is  greater  than  0, and removes them from the table.
          That's important, since the  scope  of  a  function's  local
          variables  is  the  lexical  range  of  that function and no
          further.  By doing this, we make it possible to use the same
          name in different procedures without confusing the  compiler
          or assembler.
 
 
 
 
 
 
                                    page 15
 
 
                           Pascal in 25 Rules or Less
 
 
          The Run Time Environment
 
            We  need  to describe how we propose to generate 8086 code
          from our AST.  (If you're not familiar  with  the  8086,  we
          recommend  [3] as a reference.) There are four kinds of code
          generation problem confronting us:
 
              1) Function declaration -- what  assembler  forms  are
            needed  to  open a function and what are needed to close
            it?
              2) Function call -- how are the parameters passed  and
            how is the call generated?
              3) Expression and assignment evaluation -- how are the
            register and memory instructions used to maximum benefit
            and efficiency?
              4)  Control  structures -- how are the conditional and
            unconditional branches to be coded?
 
          We'll address each of these in turn.   Unfortunately,  items
          (1) and  (2)  depend  on  each  other.    Our procedure call
          strategy must be defined before we can decide on just how  a
          call and  a  declaration  are  to be carried out.  That will
          also  determine  how  our  local  variable   addresses   are
          computed.  So let's look at function calls first.
 
          Function Call Environment
 
            Our language is intended to support recursion, which means
          that  a  given  function  may have been called several times
          before any exit has taken place.  Each of these  uncompleted
          calls  is called an activation, and each activation requires
          an activation record that contains a set of  local  variable
          values, a return value and a return address.  The activation
          records  will  be  carved out of the 8086's stack, where the
          stack top is pointed to by register SP.
            The micro's stack will also  be  used  to  hold  temporary
          expression  values,  so  SP  will be moving up and down in a
          somewhat unpredictable fashion.  We need a  way  of  marking
          the position of the activation record that doesn't depend on
          SP.   The  current  activation  record will be pointed to by
          register BP.
            Figure 6 shows our activation record design.    The  stack
          top is  at  the bottom, perversely.  (Does that mean that we
          programmers don't know which way is up?) In  the  8086,  the
          PUSH operation causes SP to decrease in numeric value -- the
          stack  will start at the end of some segment and work toward
          its beginning.
            The figure shows an activation record for a function  with
          three parameters, P1, P2, and P3, in left-to-right order, as
          it  might  appear  when  we're ready to start executing some
          function body instructions.  However, the  record  got  that
          way  partly  through call operations and partly through code
          at the front end of the function.
            The function call will 1) reserve  space  for  a  function
          return  value  through  a  PUSH  AX  operation, 2) PUSH each
          parameter in their order of appearance, and then 3) CALL the
          function.  The CALL instruction will push the return address
          on the stack.  At this point, SP will point to the stack top
 
 
                                    page 16
 
 
                           Pascal in 25 Rules or Less
 
 
          (of course), and  BP  will  be  pointing  at  some  previous
          activation record deeper in the stack.
            Among  the first instructions executed within the function
          will be
 
               PUSH BP
               MOV BP,SP
 
          The first of these pushes the previous value of  BP  in  the
          stack, and the second sets BP to the new stack top.
            Notice  that  parameter P1 is at BP+8 (each stack location
          is a 2-byte word), P2 is at BP+6, P3 is  at  BP+4,  and  the
          function return  value  is  at  BP+10.  These offsets can be
          calculated by the compiler and associated with each  of  the
          respective names.  Furthermore, the 8086 instruction set and
          our  assembler permit us to use forms like 8[BP] to refer to
          an address offset from BP by +8 bytes.    We  can  therefore
          easily  generate  symbolic  address references to any of the
          function's variables.
 
          Function EXIT
 
            An EXIT from a function is similarly easy.    We  need  to
          restore  the  previous  BP value to the one carried at BP in
          the  stack,  then  return,  popping  the  right  number   of
          parameters from  the stack.  For the configuration of figure
          6, we therefore need
 
               POP BP
               RET 8
 
          We overlooked one thing --  since  we  are  dealing  with  a
          function,  it's  important  to send the return value back to
          whatever expression the function was  called  from.    We're
          going  to  adopt  the  convention that every expression will
          yield its value in the 16-bit AX  register.    However,  our
          function's return  value is in the stack.  We therefore need
          the instruction
 
               MOV AX,10[BP]
 
          before we POP BP.  Then we can  remove  the  parameters  and
          return value  from  the  stack upon a RET instruction.  Note
          that the `10' in this instruction is equal to 4  plus  twice
          the number  of  parameters of the function.  Also the `8' in
          the  RET  instruction  is  2  plus  twice  the   number   of
          parameters.
 
          Function CALL
 
            Before  we  discuss  function  calling,  we need to assert
          something about the way expressions will be evaluated.    We
          will  write  a  general-purpose  procedure  called EVAL that
          takes an expression root (a SEMREC pointer), then  generates
          code  such  that  the  arithmetic result of the tree will be
          left in the AX register.  By asserting this  first,  we  can
          design  EVAL  to  make  sure  that that is in fact what will
          happen in every case.  We can also use EVAL itself  to  deal
 
 
                                    page 17
 
 
                           Pascal in 25 Rules or Less
 
 
          with  subtrees,  with  assurance  that  AX  will receive the
          result.
            Of course, it's important that EVAL never change the value
          of BP or set SP capriciously.  It may push some stuff on the
          stack, but we'll also make sure that whatever is pushed will
          eventually be popped.  Certain other 8086 registers may also
          be used in very local situations, for example in  connection
          with a multiply or divide instruction.
            Given that EVAL will take an AST tree and produce code for
          AX, calling  a  function  will  be  very easy.  In fact, the
          function call will show up in EVAL itself, whenever  we  see
          the SEMT=funcall!
            Here's what we need to do (refer to figure 6):
 
               PUSH   AX     ; this reserves a return value word
               eval(P1)     ; parameter P1 is evaluated, result to AX
               PUSH   AX     ; push result on the stack
               eval(P2)
               PUSH   AX
                 etc.
               CALL   function
 
          We  can  of  course  just  use the function name in the CALL
          instruction, since the assembler can figure out where it is.
            Note that this code sequence will work  nicely  within  an
          expression,  since the result of the CALL is to pop down the
          stack to exactly the place just before the  first  PUSH  AX,
          and to yield the function's result in AX.
            We  can also use this sequence for a procedure call, where
          the return value is ignored.  AX will  just  get  lost,  and
          there's no change in the stack.
 
          ADD and SUB
 
            Let's   now   turn   our  attention  to  evaluating  other
          expressions.  We need to take  a  close  look  at  the  8086
          instruction set  and  decide  just how to handle arithmetic.
          We find that integer addition and  subtraction  are  handled
          alike,    but    are   coded   somewhat   differently   than
          multiplication and division.
            Our ADD or SUB will be between AX and some operand,  which
          may  be another register value, an immediate value, a memory
          value or an indirection through a register.   Our  AST  will
          look like  figure  7.  We imagine that the LEFT subtree will
          somehow yield AX -- that's easy if we just call EVAL on  the
          LEFT subtree.    We  would  then  like to emit an ADD or SUB
          instruction whose operand is the right subtree.
            Unfortunately, that's not possible if the right subtree is
          anything other than 1) a literal value, i.e.  SEMT=fixed, or
          2) a global variable, or 3) a  local  variable.    A  global
          variable  can  be  accessed by its name alone, while a local
          will be accessed as an offset through BP, e.g.  6[BP].
            So before we just go ahead and evaluate the LEFT  subtree,
          we  need  to test the RIGHT subtree -- is it `simple', i.e.,
          will it fit into an ADD or SUB instruction  operand  field?
          If  it  is,  then  we  can  just  EVAL(LEFT),  then emit the
          appropriate ADD or SUB instruction.
            The more difficult case in fact requires that we save  the
 
 
                                    page 18
 
 
                           Pascal in 25 Rules or Less
 
 
          result  of  evaluating one of the subtrees before evaluating
          the other one.  Since we want the left one in AX in order to
          emit an instruction, we must evaluate the right one  first.
          That  will  yield the result in AX, but we musn't just leave
          it there while evaluating the left subtree -- AX  will  very
          likely get  changed as a result.  Our solution is to PUSH AX
          before evaluating the LEFT subtree.  After that  evaluation,
          AX will  hold  the  left subtree.  We choose to POP DX, then
          emit an ADD or SUB instruction between AX and DX.
            We therefore arrive at the following compiler  coding  for
          the ADD and SUB cases of EVAL:
 
            addop, subop:
              if is_simple(right) then begin
                eval(left);  {goes to AX}
                code3(opcode(semt), ' AX,', nameof(right));
                end
              else begin
                eval(right);
                code('PUSH AX');  {put in stack temporarily}
                eval(left);  {left side to AX}
                code('POP DX');  {get the right value back from stack}
                code2(opcode(semt), ' AX,DX');
                end;
 
          Some unfamiliar  functions  are  used in this code fragment.
          OPCODE(SEMT) returns  a  string  that  represents  the  8086
          instruction for  the  SEMT.    NAMEOF(root) returns a string
          that represents a valid operand for the subtree  whose  root
          is  root  -- it may be a literal constant, a named variable,
          or an offset-BP form.
            CODE takes  one  string  and  formats  it  as  a  symbolic
          assembler line  with  no  label.    A space in the string is
          interpreted as a tab stop, to  produce  a  pretty  formatted
          effect in the assembly code.
            CODE2  takes two strings, concatenates them and calls CODE
          with the result.  CODE3 and CODE4 are similar.
            Note that although we pushed a word in the  stack  in  the
          non-simple case,  it  gets  popped  out two lines later.  We
          therefore can assert that EVAL will keep the stack  orderly,
          provided it does so everywhere else.
 
          MPY and DIV
 
            These  operations are somewhat more messy to encode in the
          8086.  The IMUL instruction requires one operand in  the  AX
          register, the  other  in  another register (we will use CX).
          It returns a result in the pair DX-AX, with AX carrying  the
          least significant    word.        Without   attempting   any
          optimizations, we therefore evaluate the right subtree, PUSH
          it, evaluate the left, then POP CX and emit the opcode.
            Division requires one additional step -- DX  should  be  a
          sign extension  of  AX  before dividing by CX.  Fortunately,
          the instruction CWD  performs  this  for  us.    Here's  the
          resulting EVAL code fragment:
 
            mpyop, divop: begin
              eval(right);     {divisor to AX}
 
 
                                    page 19
 
 
                           Pascal in 25 Rules or Less
 
 
              code('PUSH AX');
              eval(left);      {dividend to AX}
              if semt=divop then code('CWD');  {sign extend into DX}
              code('POP CX');
              code2(opcode(semt), ' CX');
              end;
 
          Assignment
 
            The  assignment  operation calls for a certain adjustment,
          depending  on  whether  the  right  subtree  is  a   literal
          fixed-point number or not.  Here's the EVAL fragment:
 
            assignop: begin
              if right^.semt=fixed then  {an immediate on the right is OK}
                code4('MOVW ', nameof(left), ',', nameof(right))
              else begin
                eval(right);  {goes to AX}
                code3('MOV ', nameof(left), ',AX');
                end
              end;
 
          The use of MOVW is required since the left operand will be a
          name  or  an  indirect BP reference (we can only assign to a
          variable or  a  function  return  value),  while  the  right
          operand could be a byte or a word.  We therefore need a word
          MOV in this case.
            In  the  other case, the right subtree is EVALed as usual,
          and the right MOV operand will be AX,  stamping  this  as  a
          word operation.    Thus  we  must  nurse the assembler along
          which otherwise wouldn't have the  foggiest  idea  of  which
          operation we intend.
 
          WHILE DO
 
            The  WHILE-DO  form  is  supported by a LEFT pointer and a
          RIGHT pointer.    LEFT  points  to  an  expression   subtree
          carrying  the boolean expression (it will be tested for >0 =
          TRUE, and <=0 = FALSE).  We have  to  encode  this  as  8086
          branch  instructions,  and have no idea how far the branches
          must reach.  Thus we use long  branch  instructions,  hoping
          that  an intelligent assembler can substitute short branches
          if possible.
            We need to manufacture a couple of temporary  labels,  and
          assign that job to a function NEW_LABEL -- this increments a
          global  label  counter, then appends its string value to the
          string 'XXX'.  Thus we create new labels such as XXX1, XXX2,
          etc.  as needed.
            The function LCODE takes two strings; the first  one  will
          become an assembler label, and the second the opcode-operand
          field.  Here's the EVAL code fragment for a WHILE-DO:
 
             while_do: begin
               label1:=new_label;
               lcode(label1, 'EQU $');
               eval(left);   {boolean condition}
               code('CMP AX,0');
               label2:=new_label;
 
 
                                    page 20
 
 
                           Pascal in 25 Rules or Less
 
 
               code2('JLE ', label2);
               eval(right);  {statement or statement list}
               code2('JMP ', label1);
               lcode(label2, 'EQU $');
               end;
 
          Note  that  we  attach a label before evaluating the boolean
          condition; this will later appear in a JMP around the  whole
          WHILE-DO form  back  to  the  boolean  test.   Following the
          boolean test is a comparison of AX to 0  (recall  that  EVAL
          yields a  result  in  AX).   We need the CMP since we aren't
          sure how AX got loaded, hence whether the sign flag  of  the
          8086 was  set  correctly.    The comparison is followed by a
          conditional jump to the end of the WHILE-DO form -- note how
          label2 reappears on an EQU $ as the last coded line.
            The beauty of EVAL appears between the conditional and the
          unconditional jump.  It's quite capable of dealing with  any
          number of statements, function and procedure calls, etc., so
          that  a  quite large and sophisticated sequence of code will
          appear in that innocent eval(right) call.  Yet we drop in  a
          JMP and  the labelled EQU $ at just the right place.  And --
          the correctness of this evaluation speaks for itself.
 
          Statement List
 
            We've seen how a sequence of expressions is turned into  a
          linked list  of  SEMREC  nodes.  We do the same thing with a
          sequence of statements.  An EVAL fragment can be written for
          a STMTLIST as follows:
 
             stmtlist:
               while root<>nil do begin
                 eval(root^.left);
                 root:=root^.right;
                 end;
 
          The ROOT is of course a value parameter passed to EVAL;  its
          LEFT  points  to some statement and its RIGHT to the rest of
          the statement list.  It's OK in Turbo Pascal to  change  the
          value of a passed value parameter, so we just do it.  Once a
          ROOT  is evaluated, we don't need it anymore, so we might as
          well use it to point to the next one.
            This could also have been coded using a recursive call  on
          EVAL,  but  sequences  of statements might get very lengthy,
          and could use up lots of stack space before they unwind.
 
          IF-THEN-ELSE
 
            Since an IF-THEN-ELSE has three parts, we need  a  special
          SEMREC clause to deal with it:
 
            if_then_else: {if B1 then S1 else S2}
               (B1, S1, S2: semrecp);
 
          This node  of an AST is then easily coded as follows.  We've
          discussed all the functions that appear in  this  EVAL  code
          fragment:
 
 
 
                                    page 21
 
 
                           Pascal in 25 Rules or Less
 
 
             if_then_else: begin
               label1:=new_label;
               eval(b1);   {boolean condition}
               code('CMP AX,0');
               code2('JLE ', label1);
               eval(s1);   {THEN statement}
               label2:=new_label;
               code2('JMP ', label2);
               lcode(label1, 'EQU $');
               eval(s2);   {ELSE statement}
               lcode(label2, 'EQU $');
               end;
 
 
          Summary
 
            The   following   listing   was  generated  by  the  Chasm
          assembler.  It is the  compiled  version  of  program  TURUN
          given near the beginning of this paper.
            This is  a  complete  program.   It fits into one segment,
          starting at address 100H.   The  stack  pointer  is  set  to
          location  STACKORG, which is at the end of a 2000 byte block
          near the end of the program.  (This is actually  unnecessary
          since  DOS  will by default set SP to the end of a segment.)
          The program then begins with a call  to  MAIN.    When  MAIN
          returns,  an  INT  020H  is  executed, which returns control
          cleanly to DOS.
            You can step through  this  program  with  the  DOS  DEBUG
          system if you want to see what's happening in detail.  Refer
          to the DOS manual for details.
            A  few  points  about this assembled listing: A bug in our
          version of the Chasm assembler (which I've been assured  has
          been   repaired)   made   it  impossible  to  code  the  RET
          instruction with a number; instead we've written the  opcode
          as a  DB followed by the number as a DW.  You'll see this in
          line 124 for example.
            Chasm also noticed four JMP  instructions  that  could  be
          encoded as  short  jumps.    As  we've explained, our simple
          compiler doesn't keep track of the span between  a  JMP  and
          its target,  and  that  span  could  be any number of bytes.
          Thus we've taken the safe approach in our compiler and coded
          long jumps.  An optimizing assembler could turn  these  into
          short jumps.
            Also,  our  compiler  has copied the contents of a support
          file called STDIO.HDR (not to be confused with the C library
          of the same name) into the assembly code.    STDIO  supports
          the WRITE  and  READ functions.  You can see where this file
          begins and ends from the comments.
            Are you impressed?  We hope so.  If  you've  followed  our
          development  and  reasoning  this far, you will have noticed
          that the code generation  algorithms  for  our  tiny  Pascal
          statements seem  very  clear  and transparent.  Yet when you
          look at the generated assembly code, it isn't at  all  clear
          what's going on.  Some of the PUSH AX instructions came from
          one  part  of  the  compiler algorithm and some from another
          part.  But that's the way it is.
            Many software  writers  prefer  a  high-level  programming
          language because a few very clear source statements can turn
 
 
                                    page 22
 
 
                           Pascal in 25 Rules or Less
 
 
          into  a  rats  nest  of assembly code -- but if the compiler
          generates that code correctly, we don't care how  convoluted
          and hard-to-understand the resulting code is.
 
          TURUN.ASM                                                               2/19/86
          Page: 1                                                                12:56:04
 
 
          LOC  OBJ          LINE  SOURCE                               CHASM version 4.00
          0100                 1   ; Tiny Pascal assembler code
          0100 BC290B          2            MOV   SP,OFFSET(STACKORG)
          0103 8BEC            3            MOV   BP,SP
          0105 E81901          4            CALL  MAIN
          0108 CD20            5            INT   020H
          010A                 6   ; <STDIO.HDR> included
          010A                 7  ;  STDIO.HDR
          010A                 8  ;
          010A                 9  ;  READ and WRITE routines needed for Tiny Pascal
          010A                10  ;
          010A                11  SYS_RCHAR   PROC   NEAR   ; Read single character from
          010A B401           12              MOV    AH,1
          010C CD21           13              INT    021H
          010E C3             14              RET           ; value comes back in AL
          010F                15              ENDP
          010F                16
          010F                17  SYS_WRCHAR  PROC   NEAR   ; Write a single character (
          010F B402           18              MOV    AH,2
          0111 CD21           19              INT    021H
          0113 C3             20              RET
          0114                21              ENDP
          0114                22
          0114                23  SYS_WHEX    PROC   NEAR   ; Write a single HEX number
          0114 80FA0A         24              CMP    DL,10
          0117 7C07           25              JL     SYS_01
          0119 80C237         26              ADD    DL,55     ; 'A' - 10
          011C E8F0FF         27              CALL   SYS_WRCHAR
          011F C3             28              RET
          0120 80C230         29  SYS_01      ADD    DL,'0'
          0123 E8E9FF         30              CALL   SYS_WRCHAR
          0126 C3             31              RET
          0127                32              ENDP
          0127                33
          0127                34  SYS_IWRT    PROC   NEAR   ; Write an integer to stdout
          0127 B604           35              MOV    DH,4   ; used as a counter
          0129 D1C0           36  SYS_11      ROL    AX
          012B D1C0           37              ROL    AX
          012D D1C0           38              ROL    AX
          012F D1C0           39              ROL    AX
          0131 8AD0           40              MOV    DL,AL
          0133 80E20F         41              AND    DL,0FH
          0136 50             42              PUSH   AX
          0137 E8DAFF         43              CALL   SYS_WHEX
          013A 58             44              POP    AX
          013B FECE           45              DEC    DH
          013D 75EA           46              JNZ    SYS_11
          013F C3             47              RET
          0140                48              ENDP
          0140                49
 
 
                                    page 23
 
 
                           Pascal in 25 Rules or Less
 
 
          0140                50  SYS_SWRT    PROC   NEAR   ; Write a string terminated
          0140 8A5700         51  SYS_21      MOV    DL,0[BX]
          0143 80FA00         52              CMP    DL,0
          0146 7501           53              JNZ    SYS_22   ; zero terminator?
          0148 C3             54              RET
          0149 E8C3FF         55  SYS_22      CALL   SYS_WRCHAR
          014C 43             56              INC    BX
          014D EBF1           57              JMPS   SYS_21
          014F                58              ENDP
          014F                59
          014F                60  SYS_WRTLN   PROC   NEAR    ; write carriage return/lin
          014F B20D           61              MOV    DL,0DH
          0151 E8BBFF         62              CALL   SYS_WRCHAR
          0154 B20A           63              MOV    DL,0AH
          0156 E8B6FF         64              CALL   SYS_WRCHAR
          0159 C3             65              RET
          015A                66              ENDP
          015A                67
          015A                68  READ        PROC   NEAR         ; read a HEX number fr
          015A BA0000         69              MOV    DX,0         ; clear DX
          015D E8AAFF         70  READ_01     CALL   SYS_RCHAR    ; get one character in
          0160                71                      ; won't affect DX
          0160 3C0D           72              CMP    AL,0DH
          0162 7506           73              JNZ    READ_02
          0164 52             74              PUSH   DX           ; save the thing we've
          0165 E8E7FF         75              CALL   SYS_WRTLN    ; send a carriage retu
          0168 58             76              POP    AX           ; was an ENTER
          0169 C3             77              RET
          016A 3C20           78  READ_02     CMP    AL,' '
          016C 74EF           79              JZ     READ_01      ; ignore spaces
          016E 2C30           80              SUB    AL,'0'       ; start conversion to
          0170 3C09           81              CMP    AL,9
          0172 7E02           82              JLE    READ_03
          0174 2C07           83              SUB    AL,7         ; turn 'A' into 0AH
          0176 3C0F           84  READ_03     CMP    AL,0FH
          0178 7E02           85              JLE    READ_04
          017A 2C20           86              SUB    AL,32        ; turn 'a' into 0AH
          017C 240F           87  READ_04     AND    AL,0FH       ; clip for good measur
          017E D1E2           88              SHL    DX           ; prepare DX for hex v
          0180 D1E2           89              SHL    DX
          0182 D1E2           90              SHL    DX
          0184 D1E2           91              SHL    DX
          0186 08C2           92              OR     DL,AL
          0188 EBD3           93              JMPS   READ_01      ; go do some more
          018A                94              ENDP
          018A                95
          018A                96  READLN      PROC   NEAR
          018A EBCE           97              JMPS   READ         ; does the same thing
          018C                98              ENDP
          018C                99
          018C               100   ; ... end of include STDIO.HDR
          018C               101   ;   {TURUN -- A sample program written in Tiny Pascal
          018C               102   ;   var I, J, K, PROBLEM;
          018C               103   ;
          018C               104   ;   {*********************}
          018C               105   ;   function ISLESS(N1, N2);
          018C               106   ;   begin  {returns 1 if n1<n2, 0 otherwise}
          018C               107   ;     if n2-n1 then isless:=1   {truth value test is
 
 
                                    page 24
 
 
                           Pascal in 25 Rules or Less
 
 
          018C               108   ;     else isless:=0;
          018C               109   ;     end;
          018C               110  ISLESS    PROC  NEAR
          018C 55            111            PUSH  BP
          018D 8BEC          112            MOV   BP,SP
          018F 8B4604        113            MOV   AX,4[BP] ; N2
          0192 2B4606        114            SUB   AX,6[BP] ; N1
          0195 3D0000        115            CMP   AX,0
          0198 7E08          116            JLE   XXX0
          019A C746080100    117            MOVW  8[BP],1 ; ISLESS
          **** Diagnostic: Could use JMPS
          019F E90500        118            JMP   XXX1
          01A2               119  XXX0      EQU   $
          01A2 C746080000    120            MOVW  8[BP],0 ; ISLESS
          01A7               121  XXX1      EQU   $
          01A7 8B4608        122            MOV   AX,8[BP] ; ISLESS
          01AA 5D            123            POP   BP
          01AB C2            124            DB    0C2H
          01AC 0600          125            DW    6
          01AE               126            ENDP
          01AE               127   ;    SYMBOL TABLE
          01AE               128   ; ISLESS                          8[BP]
          01AE               129   ; N1                              6[BP]
          01AE               130   ; N2                              4[BP]
          01AE               131
          01AE               132   ;
          01AE               133   ;   function ADDEMUP(LOWER, UPPER, SUM);
          01AE               134   ;   begin end;    {makes it a forward declaration}
          01AE               135   ;
          01AE               136   ;   {*********************}
          01AE               137   ;   function ISEQUAL(N1, N2);
          01AE               138   ;   begin
          01AE               139   ;     if n2-n1 then isequal:=0   {false}
          01AE               140   ;     else
          01AE               141   ;     if n1-n2 then isequal:=0
          01AE               142   ;     else isequal:=1;
          01AE               143   ;     end;
          01AE               144  ISEQUAL   PROC  NEAR
          01AE 55            145            PUSH  BP
          01AF 8BEC          146            MOV   BP,SP
          01B1 8B4604        147            MOV   AX,4[BP] ; N2
          01B4 2B4606        148            SUB   AX,6[BP] ; N1
          01B7 3D0000        149            CMP   AX,0
          01BA 7E08          150            JLE   XXX2
          01BC C746080000    151            MOVW  8[BP],0 ; ISEQUAL
          **** Diagnostic: Could use JMPS
          01C1 E91800        152            JMP   XXX3
          01C4               153  XXX2      EQU   $
          01C4 8B4606        154            MOV   AX,6[BP] ; N1
          01C7 2B4604        155            SUB   AX,4[BP] ; N2
          01CA 3D0000        156            CMP   AX,0
          01CD 7E08          157            JLE   XXX4
          01CF C746080000    158            MOVW  8[BP],0 ; ISEQUAL
          **** Diagnostic: Could use JMPS
          01D4 E90500        159            JMP   XXX5
          01D7               160  XXX4      EQU   $
          01D7 C746080100    161            MOVW  8[BP],1 ; ISEQUAL
          01DC               162  XXX5      EQU   $
 
 
                                    page 25
 
 
                           Pascal in 25 Rules or Less
 
 
          01DC               163  XXX3      EQU   $
          01DC 8B4608        164            MOV   AX,8[BP] ; ISEQUAL
          01DF 5D            165            POP   BP
          01E0 C2            166            DB    0C2H
          01E1 0600          167            DW    6
          01E3               168            ENDP
          01E3               169   ;    SYMBOL TABLE
          01E3               170   ; ISEQUAL                         8[BP]
          01E3               171   ; N1                              6[BP]
          01E3               172   ; N2                              4[BP]
          01E3               173
          01E3               174   ;
          01E3               175   ;   {***********************}
          01E3               176   ;   function ADDEMUP(LOWER, UPPER, SUM);
          01E3               177   ;         {SUM is a local}
          01E3               178   ;   begin
          01E3               179   ;     sum:=0;
          01E3               180   ;     while isless(lower, upper) do begin
          01E3               181   ;       sum:=sum+lower;
          01E3               182   ;       lower:=lower+1;
          01E3               183   ;       end;
          01E3               184   ;     addemup:=sum+lower;  { the last one was left ou
          01E3               185   ;     end;
          01E3               186  ADDEMUP   PROC  NEAR
          01E3 55            187            PUSH  BP
          01E4 8BEC          188            MOV   BP,SP
          01E6 C746040000    189            MOVW  4[BP],0 ; SUM
          01EB               190  XXX6      EQU   $
          01EB 50            191            PUSH  AX
          01EC 8B4608        192            MOV   AX,8[BP] ; LOWER
          01EF 50            193            PUSH  AX
          01F0 8B4606        194            MOV   AX,6[BP] ; UPPER
          01F3 50            195            PUSH  AX
          01F4 E895FF        196            CALL  ISLESS
          01F7 3D0000        197            CMP   AX,0
          01FA 7E15          198            JLE   XXX7
          01FC 8B4604        199            MOV   AX,4[BP] ; SUM
          01FF 034608        200            ADD   AX,8[BP] ; LOWER
          0202 894604        201            MOV   4[BP],AX ; SUM
          0205 8B4608        202            MOV   AX,8[BP] ; LOWER
          0208 050100        203            ADD   AX,1
          020B 894608        204            MOV   8[BP],AX ; LOWER
          **** Diagnostic: Could use JMPS
          020E E9DAFF        205            JMP   XXX6
          0211               206  XXX7      EQU   $
          0211 8B4604        207            MOV   AX,4[BP] ; SUM
          0214 034608        208            ADD   AX,8[BP] ; LOWER
          0217 89460A        209            MOV   10[BP],AX ; ADDEMUP
          021A 8B460A        210            MOV   AX,10[BP] ; ADDEMUP
          021D 5D            211            POP   BP
          021E C2            212            DB    0C2H
          021F 0800          213            DW    8
          0221               214            ENDP
          0221               215   ;    SYMBOL TABLE
          0221               216   ; ADDEMUP                         10[BP]
          0221               217   ; LOWER                           8[BP]
          0221               218   ; UPPER                           6[BP]
          0221               219   ; SUM                             4[BP]
 
 
                                    page 26
 
 
                           Pascal in 25 Rules or Less
 
 
          0221               220
          0221               221   ;
          0221               222   ;   {*********************}
          0221               223   ;   function MAIN(SUM, UPPER);
          0221               224   ;   begin
          0221               225   ;     i:=1;
          0221               226   ;     j:=i+5;
          0221               227   ;     k:=j-16;
          0221               228   ;     problem:=i+(j*k);
          0221               229   ;     writeln('I: ', i, ' J: ', j, ' K: ', k, ' Probl
          0221               230   ;     write('Enter upper ');
          0221               231   ;     upper:=read;
          0221               232   ;     sum:=addemup(1, upper);  {sum of integers 1..up
          0221               233   ;     if isequal(sum, (upper*(upper+1))/2) then
          0221               234   ;       writeln('Sum = ', sum)
          0221               235   ;     else begin
          0221               236   ;       writeln('BUG: Sum = ', sum, '; should be ',
          0221               237   ;                  (upper*(upper+1))/2);
          0221               238   ;       end;
          0221               239   ;     end;
          0221               240  MAIN      PROC  NEAR
          0221 55            241            PUSH  BP
          0222 8BEC          242            MOV   BP,SP
          0224 C70653030100  243            MOVW  I,1 ; I
          022A A15303        244            MOV   AX,I ; I
          022D 050500        245            ADD   AX,5
          0230 A35503        246            MOV   J,AX ; J
          0233 A15503        247            MOV   AX,J ; J
          0236 2D1000        248            SUB   AX,16
          0239 A35703        249            MOV   K,AX ; K
          023C A15703        250            MOV   AX,K ; K
          023F 50            251            PUSH  AX
          0240 A15503        252            MOV   AX,J ; J
          0243 59            253            POP   CX
          0244 F7E9          254            IMULW CX
          0246 50            255            PUSH  AX
          0247 A15303        256            MOV   AX,I ; I
          024A 5A            257            POP   DX
          024B 01D0          258            ADD   AX,DX
          024D A35103        259            MOV   PROBLEM,AX ; PROBLEM
          0250 BB4D03        260            MOV   BX,OFFSET(SS0)
          0253 E8EAFE        261            CALL  SYS_SWRT
          0256 A15303        262            MOV   AX,I ; I
          0259 E8CBFE        263            CALL  SYS_IWRT
          025C BB4803        264            MOV   BX,OFFSET(SS1)
          025F E8DEFE        265            CALL  SYS_SWRT
          0262 A15503        266            MOV   AX,J ; J
          0265 E8BFFE        267            CALL  SYS_IWRT
          0268 BB4303        268            MOV   BX,OFFSET(SS2)
          026B E8D2FE        269            CALL  SYS_SWRT
          026E A15703        270            MOV   AX,K ; K
          0271 E8B3FE        271            CALL  SYS_IWRT
          0274 BB3803        272            MOV   BX,OFFSET(SS3)
          0277 E8C6FE        273            CALL  SYS_SWRT
          027A A15103        274            MOV   AX,PROBLEM ; PROBLEM
          027D E8A7FE        275            CALL  SYS_IWRT
          0280 E8CCFE        276            CALL  SYS_WRTLN
          0283 BB2B03        277            MOV   BX,OFFSET(SS4)
 
 
                                    page 27
 
 
                           Pascal in 25 Rules or Less
 
 
          0286 E8B7FE        278            CALL  SYS_SWRT
          0289 E8CEFE        279            CALL  READ
          028C 894604        280            MOV   4[BP],AX ; UPPER
          028F 50            281            PUSH  AX
          0290 B80100        282            MOV   AX,1
          0293 50            283            PUSH  AX
          0294 8B4604        284            MOV   AX,4[BP] ; UPPER
          0297 50            285            PUSH  AX
          0298 B80000        286            MOV   AX,0
          029B 50            287            PUSH  AX
          029C E844FF        288            CALL  ADDEMUP
          029F 894606        289            MOV   6[BP],AX ; SUM
          02A2 50            290            PUSH  AX
          02A3 8B4606        291            MOV   AX,6[BP] ; SUM
          02A6 50            292            PUSH  AX
          02A7 B80200        293            MOV   AX,2
          02AA 50            294            PUSH  AX
          02AB 8B4604        295            MOV   AX,4[BP] ; UPPER
          02AE 050100        296            ADD   AX,1
          02B1 50            297            PUSH  AX
          02B2 8B4604        298            MOV   AX,4[BP] ; UPPER
          02B5 59            299            POP   CX
          02B6 F7E9          300            IMULW CX
          02B8 99            301            CWD
          02B9 59            302            POP   CX
          02BA F7F9          303            IDIVW CX
          02BC 50            304            PUSH  AX
          02BD E8EEFE        305            CALL  ISEQUAL
          02C0 3D0000        306            CMP   AX,0
          02C3 7E12          307            JLE   XXX8
          02C5 BB2403        308            MOV   BX,OFFSET(SS5)
          02C8 E875FE        309            CALL  SYS_SWRT
          02CB 8B4606        310            MOV   AX,6[BP] ; SUM
          02CE E856FE        311            CALL  SYS_IWRT
          02D1 E87BFE        312            CALL  SYS_WRTLN
          **** Diagnostic: Could use JMPS
          02D4 E92D00        313            JMP   XXX9
          02D7               314  XXX8      EQU   $
          02D7 BB1803        315            MOV   BX,OFFSET(SS6)
          02DA E863FE        316            CALL  SYS_SWRT
          02DD 8B4606        317            MOV   AX,6[BP] ; SUM
          02E0 E844FE        318            CALL  SYS_IWRT
          02E3 BB0B03        319            MOV   BX,OFFSET(SS7)
          02E6 E857FE        320            CALL  SYS_SWRT
          02E9 B80200        321            MOV   AX,2
          02EC 50            322            PUSH  AX
          02ED 8B4604        323            MOV   AX,4[BP] ; UPPER
          02F0 050100        324            ADD   AX,1
          02F3 50            325            PUSH  AX
          02F4 8B4604        326            MOV   AX,4[BP] ; UPPER
          02F7 59            327            POP   CX
          02F8 F7E9          328            IMULW CX
          02FA 99            329            CWD
          02FB 59            330            POP   CX
          02FC F7F9          331            IDIVW CX
          02FE E826FE        332            CALL  SYS_IWRT
          0301 E84BFE        333            CALL  SYS_WRTLN
          0304               334  XXX9      EQU   $
 
 
                                    page 28
 
 
                           Pascal in 25 Rules or Less
 
 
          0304 8B4608        335            MOV   AX,8[BP] ; MAIN
          0307 5D            336            POP   BP
          0308 C2            337            DB    0C2H
          0309 0600          338            DW    6
          030B 3B2073686F75  339  SS7       DB    '; should be ',0
               6C6420626520
               00
          0318 4255473A2053  340  SS6       DB    'BUG: Sum = ',0
               756D203D2000
          0324 53756D203D20  341  SS5       DB    'Sum = ',0
               00
          032B 456E74657220  342  SS4       DB    'Enter upper ',0
               757070657220
               00
          0338 2050726F626C  343  SS3       DB    ' Problem: ',0
               656D3A2000
          0343 204B3A2000    344  SS2       DB    ' K: ',0
          0348 204A3A2000    345  SS1       DB    ' J: ',0
          034D 493A2000      346  SS0       DB    'I: ',0
          0351               347            ENDP
          0351               348   ;    SYMBOL TABLE
          0351               349   ; MAIN                            8[BP]
          0351               350   ; SUM                             6[BP]
          0351               351   ; UPPER                           4[BP]
          0351               352
          0351               353   ;
          0351               354   ; GLOBAL VARIABLES
          0351 0000          355  PROBLEM   DW    0
          0353 0000          356  I         DW    0
          0355 0000          357  J         DW    0
          0357 0000          358  K         DW    0
          0359               359   ; RUNTIME STACK
          0359               360            DS    2000
          0B29 0000          361  STACKORG  DW    0
          0B2B               362   ; MAIN stack space
          0B2B 0000          363            DW    0
          0B2D 0000          364            DW    0
          0B2F 0000          365            DW    0
          0B31               366  ; NO errors
 
 
             0 Error(s) detected
             5 Diagnostic(s) offered
 
 
          817 (331H) Bytes of object code generated
 
          Symbol Table Dump:
 
          ADDEMUP.........P01E3     I...............M0353     ISEQUAL.........P01AE
          ISLESS..........P018C     J...............M0355     K...............M0357
          MAIN............P0221     PROBLEM.........M0351     READ............P015A
          READLN..........P018A     READ_01.........P015D     READ_02.........P016A
          READ_03.........P0176     READ_04.........P017C     SS0.............M034D
          SS1.............M0348     SS2.............M0343     SS3.............M0338
          SS4.............M032B     SS5.............M0324     SS6.............M0318
          SS7.............M030B     STACKORG........M0B29     SYS_01..........P0120
          SYS_11..........P0129     SYS_21..........P0140     SYS_22..........P0149
 
 
                                    page 29
 
 
                           Pascal in 25 Rules or Less
 
 
          SYS_IWRT........P0127     SYS_RCHAR.......P010A     SYS_SWRT........P0140
          SYS_WHEX........P0114     SYS_WRCHAR......P010F     SYS_WRTLN.......P014F
          XXX0............P01A2     XXX1............P01A7     XXX2............P01C4
          XXX3............P01DC     XXX4............P01D7     XXX5............P01DC
          XXX6............P01EB     XXX7............P0211     XXX8............P02D7
          XXX9............P0304
 
          Where to Obtain Software
 
            We  invite  you  to  try  writing your own compiler, or at
          least to try the tools and source code we  used  in  writing
          this one.  Here's what you need -- you'll find the cost very
          reasonable:
 
            The Qparser  demo  system.   Order from QCAD Systems, 1164
          Hyde  Ave,  San   Jose,   CA   95129,   phone   800/538-9787
          (408/727-6671 in  CA).    Price  is $10 plus $2 shipping and
          handling.  CA residents add sales tax.  Check, money  order,
          or bank  card  accepted.    This  comes  with a booklet that
          carries you through a simple pocket calculator example,  but
          contains  the  all-important parser generator needed for our
          tiny Pascal  compiler.    If  you  want  to  go  beyond   25
          productions,  the  unlimited  Qparser  system  will cost you
          $400.
 
            Source for the tiny Pascal  compiler.    Order  from  QCAD
          Systems, same  address  and  phones  as  above.  Ask for the
          "tiny Pascal disc": $10 plus $2 shipping and handling,  plus
          sales tax, etc.
 
            The Chasm assembler.  You can purchase an abridged version
          of  this  assembler  (but  powerful  enough  to support tiny
          Pascal) from PC Software Interest Group,  1030  E.    Duane,
          suite D,   Sunnyvale,  CA  94086.    Call  408/730-9291  for
          membership and ordering information.  Ask  for  disk  number
          10.   A  membership  in  PC-SIG  is  $20  for  one year, and
          entitles you to any number of software discs at $6 each from
          their catalog of over 540 discs.
            You can also order a full Chasm assembler for $40 directly
          from the author,  David  Whitman,  136  Wellington  Terrace,
          Lansdale, PA, 19446, phones 215/641-7114 (day), 215/362-8526
          (evenings).
            Tiny  Pascal  was written to be compatible with Chasm, but
          it can easily be adapted to other assembler conventions.
            The Qparser demo system disc  can  also  be  ordered  from
          PC-SIG for $6 -- ask for disk number 419.  (This version has
          the booklet information on the disc as a README file.)
 
          References
 
            [1]  Compiler  Construction--Theory and Practice, Barrett,
          Bates, Gustafson and  Couch,  Science  Research  Associates,
          Chicago, second  edition.    This is a companion textbook to
          the Qparser system.  This  and  reference  [2]  develop  the
          theory  of  grammars,  parsers,  translation,  symbol  table
          management and much more.
 
            [2]  Principles  of  Compiler  Design,  Aho  and   Ullman,
 
 
                                    page 30
 
 
                           Pascal in 25 Rules or Less
 
 
          Addison-Wesley.
 
            [3] 8086  Family  User's  Manual,  Intel Corp, 9800722-03.
          Order from the Literature Dept, Intel Corp, 3065 Bowers Ave,
          Santa Clara, CA, 95051.  A definitive  volume  on  the  8086
          architecture,  development  systems,  software  and  related
          semiconductor products.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                    page 31

```
{% endraw %}

## TURPT.TXT

{% raw %}
```
QPARSER LALR(1) Parser Generator Report

Grammar file  = tu.GRM
Report file   = turpt.TXT
Report level  = 1
LALR stack size = 50
Table file    = tu.TBL


Memory available 16650
----------------------
Productions

  1   \ TU.GRM  -- tiny Pascal grammar held to 25 productions
  1 Goal -> FDeclList
  2 FDeclList -> FDeclList FuncDecl ;
  3           -> FuncDecl ;
  4 FuncDecl -> FUNCTION <identifier> ( ExprList ) ; Stmt  #FDECL
  5          -> VAR ExprList      #VDECL   \ Global variables
  6                \ ExprList must be identifiers only
  6 Stmt -> <identifier> := Expr   #ASSIGN
  7      -> IF Expr THEN Stmt ELSE Stmt  #IFTHEN
  8      -> WHILE Expr DO Stmt     #WHILEDO
  9      -> BEGIN StmtList END     #BLOCK
 10      -> Expr                   #SEXPR  \ procedure call only!
 11 StmtList -> StmtList Stmt ;    #STLIST2
 12          -> <empty>
 13 Expr -> Expr + Term            #ADDOPR
 14      -> Expr - Term            #SUBOPR
 15      -> Term
 16 Term -> Term * Primary         #MPYOPR
 17      -> Term / Primary         #DIVOPR
 18      -> Primary
 19 Primary -> ( Expr )            #PAREN
 20         -> <integer>          \ only type INTEGER supported
 21         -> <string>
 22         -> <identifier>       \ variable or function call w/o parameters
 23         -> <identifier> ( ExprList )      #FUNCP
 24 ExprList -> ExprList , Expr    #EXPRLIST2
 25          -> Expr               #EXPRLIST1

Memory available 16300

Terminal tokens

  1: (
  2: )
  3: *
  4: +
  5: ,
  6: -
  7: /
  8: :=
  9: ;
 10: <empty>
 11: <eol>
 12: <identifier>
 13: <integer>
 14: <real>
 15: <stop>
 16: <string>
 17: BEGIN
 18: DO
 19: ELSE
 20: END
 21: FUNCTION
 22: IF
 23: THEN
 24: VAR
 25: WHILE

Nonterminal tokens

 26: Expr
 27: ExprList
 28: FDeclList
 29: FuncDecl
 30: Goal
 31: Primary
 32: Stmt
 33: StmtList
 34: Term
State building complete
Memory available 15746
Memory available 15682
Mixed read-reduce states split
57 LALR items required
Memory available 15187
Memory available 15156
READS completed
INCLUDES completed: max stack= 5
57 LALR list items
Memory available 15187
0 conflict found.
Resolution complete
Untagged single productions removed
Inaccessible states removed
Read tables compressed
Reduce tables compressed
Parser table reduction complete
States renumbered

No errors or warnings.
```
{% endraw %}

## TURUN.ASM

{% raw %}
```
 ; Tiny Pascal assembler code
          MOV   SP,OFFSET(STACKORG)
          MOV   BP,SP
          CALL  MAIN
          INT   020H
 ; <STDIO.HDR> included
;  STDIO.HDR
;
;  READ and WRITE routines needed for Tiny Pascal
;
SYS_RCHAR   PROC   NEAR   ; Read single character from stdin
            MOV    AH,1
            INT    021H
            RET           ; value comes back in AL
            ENDP

SYS_WRCHAR  PROC   NEAR   ; Write a single character (in DL) to stdin
            MOV    AH,2
            INT    021H
            RET
            ENDP

SYS_WHEX    PROC   NEAR   ; Write a single HEX number (in DL) to stdin
            CMP    DL,10
            JL     SYS_01
            ADD    DL,55     ; 'A' - 10
            CALL   SYS_WRCHAR
            RET
SYS_01      ADD    DL,'0'
            CALL   SYS_WRCHAR
            RET
            ENDP

SYS_IWRT    PROC   NEAR   ; Write an integer to stdout in HEX
            MOV    DH,4   ; used as a counter
SYS_11      ROL    AX
            ROL    AX
            ROL    AX
            ROL    AX
            MOV    DL,AL
            AND    DL,0FH
            PUSH   AX
            CALL   SYS_WHEX
            POP    AX
            DEC    DH
            JNZ    SYS_11
            RET
            ENDP

SYS_SWRT    PROC   NEAR   ; Write a string terminated by 0 to stdout
SYS_21      MOV    DL,0[BX]
            CMP    DL,0
            JNZ    SYS_22   ; zero terminator?
            RET
SYS_22      CALL   SYS_WRCHAR
            INC    BX
            JMPS   SYS_21
            ENDP

SYS_WRTLN   PROC   NEAR    ; write carriage return/line feed to stdout
            MOV    DL,0DH
            CALL   SYS_WRCHAR
            MOV    DL,0AH
            CALL   SYS_WRCHAR
            RET
            ENDP

READ        PROC   NEAR         ; read a HEX number from STDIN
            MOV    DX,0         ; clear DX
READ_01     CALL   SYS_RCHAR    ; get one character in AL
                    ; won't affect DX
            CMP    AL,0DH
            JNZ    READ_02
            PUSH   DX           ; save the thing we've done
            CALL   SYS_WRTLN    ; send a carriage return/line feed
            POP    AX           ; was an ENTER
            RET
READ_02     CMP    AL,' '
            JZ     READ_01      ; ignore spaces
            SUB    AL,'0'       ; start conversion to binary
            CMP    AL,9
            JLE    READ_03
            SUB    AL,7         ; turn 'A' into 0AH
READ_03     CMP    AL,0FH
            JLE    READ_04
            SUB    AL,32        ; turn 'a' into 0AH
READ_04     AND    AL,0FH       ; clip for good measure
            SHL    DX           ; prepare DX for hex value
            SHL    DX
            SHL    DX
            SHL    DX
            OR     DL,AL
            JMPS   READ_01      ; go do some more
            ENDP

READLN      PROC   NEAR
            JMPS   READ         ; does the same thing
            ENDP

 ; ... end of include STDIO.HDR
 ;   {TURUN -- A sample program written in Tiny Pascal }
 ;   var I, J, K, PROBLEM;
 ;   
 ;   {*********************}
 ;   function ISLESS(N1, N2);
 ;   begin  {returns 1 if n1<n2, 0 otherwise}
 ;     if n2-n1 then isless:=1   {truth value test is >0}
 ;     else isless:=0;
 ;     end;
ISLESS    PROC  NEAR
          PUSH  BP
          MOV   BP,SP
          MOV   AX,4[BP] ; N2
          SUB   AX,6[BP] ; N1
          CMP   AX,0
          JLE   XXX0
          MOVW  8[BP],1 ; ISLESS
          JMP   XXX1
XXX0      EQU   $
          MOVW  8[BP],0 ; ISLESS
XXX1      EQU   $
          MOV   AX,8[BP] ; ISLESS
          POP   BP
          RET   6
          ENDP
 ;    SYMBOL TABLE
 ; ISLESS                          8[BP]
 ; N1                              6[BP]
 ; N2                              4[BP]

 ;     
 ;   function ADDEMUP(LOWER, UPPER, SUM);
 ;   begin end;    {makes it a forward declaration}
 ;   
 ;   {*********************}
 ;   function ISEQUAL(N1, N2);
 ;   begin
 ;     if n2-n1 then isequal:=0   {false}
 ;     else
 ;     if n1-n2 then isequal:=0
 ;     else isequal:=1;
 ;     end;
ISEQUAL   PROC  NEAR
          PUSH  BP
          MOV   BP,SP
          MOV   AX,4[BP] ; N2
          SUB   AX,6[BP] ; N1
          CMP   AX,0
          JLE   XXX2
          MOVW  8[BP],0 ; ISEQUAL
          JMP   XXX3
XXX2      EQU   $
          MOV   AX,6[BP] ; N1
          SUB   AX,4[BP] ; N2
          CMP   AX,0
          JLE   XXX4
          MOVW  8[BP],0 ; ISEQUAL
          JMP   XXX5
XXX4      EQU   $
          MOVW  8[BP],1 ; ISEQUAL
XXX5      EQU   $
XXX3      EQU   $
          MOV   AX,8[BP] ; ISEQUAL
          POP   BP
          RET   6
          ENDP
 ;    SYMBOL TABLE
 ; ISEQUAL                         8[BP]
 ; N1                              6[BP]
 ; N2                              4[BP]

 ;     
 ;   {***********************}
 ;   function ADDEMUP(LOWER, UPPER, SUM);
 ;         {SUM is a local}
 ;   begin
 ;     sum:=0;
 ;     while isless(lower, upper) do begin
 ;       sum:=sum+lower;
 ;       lower:=lower+1;
 ;       end;
 ;     addemup:=sum+lower;  { the last one was left out }
 ;     end;
ADDEMUP   PROC  NEAR
          PUSH  BP
          MOV   BP,SP
          MOVW  4[BP],0 ; SUM
XXX6      EQU   $
          PUSH  AX
          MOV   AX,8[BP] ; LOWER
          PUSH  AX
          MOV   AX,6[BP] ; UPPER
          PUSH  AX
          CALL  ISLESS
          CMP   AX,0
          JLE   XXX7
          MOV   AX,4[BP] ; SUM
          ADD   AX,8[BP] ; LOWER
          MOV   4[BP],AX ; SUM
          MOV   AX,8[BP] ; LOWER
          ADD   AX,1
          MOV   8[BP],AX ; LOWER
          JMP   XXX6
XXX7      EQU   $
          MOV   AX,4[BP] ; SUM
          ADD   AX,8[BP] ; LOWER
          MOV   10[BP],AX ; ADDEMUP
          MOV   AX,10[BP] ; ADDEMUP
          POP   BP
          RET   8
          ENDP
 ;    SYMBOL TABLE
 ; ADDEMUP                         10[BP]
 ; LOWER                           8[BP]
 ; UPPER                           6[BP]
 ; SUM                             4[BP]

 ; 
 ;   {*********************}
 ;   function MAIN(SUM, UPPER);
 ;   begin
 ;     i:=1;
 ;     j:=i+5;
 ;     k:=j-16;
 ;     problem:=i+(j*k);
 ;     writeln('I: ', i, ' J: ', j, ' K: ', k, ' Problem: ', problem);
 ;     write('Enter upper ');
 ;     upper:=read;
 ;     sum:=addemup(1, upper);  {sum of integers 1..upper}
 ;     if isequal(sum, (upper*(upper+1))/2) then
 ;       writeln('Sum = ', sum)
 ;     else begin
 ;       writeln('BUG: Sum = ', sum, '; should be ',
 ;                  (upper*(upper+1))/2);
 ;       end;
 ;     end;
MAIN      PROC  NEAR
          PUSH  BP
          MOV   BP,SP
          MOVW  I,1 ; I
          MOV   AX,I ; I
          ADD   AX,5
          MOV   J,AX ; J
          MOV   AX,J ; J
          SUB   AX,16
          MOV   K,AX ; K
          MOV   AX,K ; K
          PUSH  AX
          MOV   AX,J ; J
          POP   CX
          IMULW CX
          PUSH  AX
          MOV   AX,I ; I
          POP   DX
          ADD   AX,DX
          MOV   PROBLEM,AX ; PROBLEM
          MOV   BX,OFFSET(SS0)
          CALL  SYS_SWRT
          MOV   AX,I ; I
          CALL  SYS_IWRT
          MOV   BX,OFFSET(SS1)
          CALL  SYS_SWRT
          MOV   AX,J ; J
          CALL  SYS_IWRT
          MOV   BX,OFFSET(SS2)
          CALL  SYS_SWRT
          MOV   AX,K ; K
          CALL  SYS_IWRT
          MOV   BX,OFFSET(SS3)
          CALL  SYS_SWRT
          MOV   AX,PROBLEM ; PROBLEM
          CALL  SYS_IWRT
          CALL  SYS_WRTLN
          MOV   BX,OFFSET(SS4)
          CALL  SYS_SWRT
          CALL  READ
          MOV   4[BP],AX ; UPPER
          PUSH  AX
          MOV   AX,1
          PUSH  AX
          MOV   AX,4[BP] ; UPPER
          PUSH  AX
          MOV   AX,0
          PUSH  AX
          CALL  ADDEMUP
          MOV   6[BP],AX ; SUM
          PUSH  AX
          MOV   AX,6[BP] ; SUM
          PUSH  AX
          MOV   AX,2
          PUSH  AX
          MOV   AX,4[BP] ; UPPER
          ADD   AX,1
          PUSH  AX
          MOV   AX,4[BP] ; UPPER
          POP   CX
          IMULW CX
          CWD
          POP   CX
          IDIVW CX
          PUSH  AX
          CALL  ISEQUAL
          CMP   AX,0
          JLE   XXX8
          MOV   BX,OFFSET(SS5)
          CALL  SYS_SWRT
          MOV   AX,6[BP] ; SUM
          CALL  SYS_IWRT
          CALL  SYS_WRTLN
          JMP   XXX9
XXX8      EQU   $
          MOV   BX,OFFSET(SS6)
          CALL  SYS_SWRT
          MOV   AX,6[BP] ; SUM
          CALL  SYS_IWRT
          MOV   BX,OFFSET(SS7)
          CALL  SYS_SWRT
          MOV   AX,2
          PUSH  AX
          MOV   AX,4[BP] ; UPPER
          ADD   AX,1
          PUSH  AX
          MOV   AX,4[BP] ; UPPER
          POP   CX
          IMULW CX
          CWD
          POP   CX
          IDIVW CX
          CALL  SYS_IWRT
          CALL  SYS_WRTLN
XXX9      EQU   $
          MOV   AX,8[BP] ; MAIN
          POP   BP
          RET   6
SS7       DB    '; should be ',0
SS6       DB    'BUG: Sum = ',0
SS5       DB    'Sum = ',0
SS4       DB    'Enter upper ',0
SS3       DB    ' Problem: ',0
SS2       DB    ' K: ',0
SS1       DB    ' J: ',0
SS0       DB    'I: ',0
          ENDP
 ;    SYMBOL TABLE
 ; MAIN                            8[BP]
 ; SUM                             6[BP]
 ; UPPER                           4[BP]

 ; 
 ; GLOBAL VARIABLES
PROBLEM   DW    0
I         DW    0
J         DW    0
K         DW    0
 ; RUNTIME STACK
          DS    2000
STACKORG  DW    0
 ; MAIN stack space
          DW    0
          DW    0
          DW    0
; NO errors
```
{% endraw %}

## TURUN.TXT

{% raw %}
```
  {TURUN -- A sample program written in Tiny Pascal }
  var I, J, K, PROBLEM;
  
  {*********************}
  function ISLESS(N1, N2);
  begin  {returns 1 if n1<n2, 0 otherwise}
    if n2-n1 then isless:=1   {truth value test is >0}
    else isless:=0;
    end;
    
  function ADDEMUP(LOWER, UPPER, SUM);
  begin end;    {makes it a forward declaration}
  
  {*********************}
  function ISEQUAL(N1, N2);
  begin
    if n2-n1 then isequal:=0   {false}
    else
    if n1-n2 then isequal:=0
    else isequal:=1;
    end;
    
  {***********************}
  function ADDEMUP(LOWER, UPPER, SUM);
        {SUM is a local}
  begin
    sum:=0;
    while isless(lower, upper) do begin
      sum:=sum+lower;
      lower:=lower+1;
      end;
    addemup:=sum+lower;  { the last one was left out }
    end;

  {*********************}
  function MAIN(SUM, UPPER);
  begin
    i:=1;
    j:=i+5;
    k:=j-16;
    problem:=i+(j*k);
    writeln('I: ', i, ' J: ', j, ' K: ', k, ' Problem: ', problem);
    write('Enter upper ');
    upper:=read;
    sum:=addemup(1, upper);  {sum of integers 1..upper}
    if isequal(sum, (upper*(upper+1))/2) then
      writeln('Sum = ', sum)
    else begin
      writeln('BUG: Sum = ', sum, '; should be ',
                 (upper*(upper+1))/2);
      end;
    end;

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0540

     Volume in drive A has no label
     Directory of A:\

    CHASM    CFG        15   2-17-86  10:07a
    FILES540 TXT      1816   6-03-86  11:37a
    GO       BAT       832   6-03-86  11:36a
    NOTES540 TXT      1802   6-03-86  11:52a
    PMACS    TXT      2966   1-10-86  10:03a
    STDIO    HDR      2845   2-19-86  12:35p
    TU       DOC     99978   6-03-86  11:46a
    TU       GRM      1125   2-17-86   2:35p
    TU       TBL      1770   2-17-86   2:36p
    TUDBUG   PAS      5427   2-17-86   2:59p
    TUDECLS  PAS      3347   2-17-86   2:57p
    TUFILES  PAS       511   2-17-86   2:46p
    TUPROG   COM     36049   2-24-86   2:06p
    TUPROG   PAS     29221   2-17-86   3:00p
    TURPT    TXT      2429   2-17-86   2:36p
    TURUN    ASM      9836   2-24-86   2:07p
    TURUN    COM      2609   2-24-86   2:10p
    TURUN    LST     20171   2-24-86   2:10p
    TURUN    TXT      1345   2-19-86  12:55p
    TUSEMS   PAS     23367   2-24-86   2:05p
    TUSKEL   PAS     24654   2-17-86   3:01p
    TUSYMS   PAS      4015   2-17-86   2:58p
    TUUTILS  PAS      1877   2-17-86   2:52p
           23 file(s)     278007 bytes
                           33792 bytes free
