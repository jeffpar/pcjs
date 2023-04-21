---
layout: page
title: "PC-SIG Diskette Library (Disk #454)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0454/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0454"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "UNIFORTH"

    The UNIFORTH Sampler from Unified Software Systems is a subset of the
    full Professional UNIFORTH.  It provides a full assembler, video editor
    and software floating-point arithmetic.  It supports the FORTH-83
    Standard with few exceptions.  You will find the Sampler to be the
    equivalent of several commercial systems.
    
    System Requirements:  64K, one disk drive and monochrome display.
    
    How to Start:  For complete information on how to start enter TYPE
    UNIFORTH.DOC and press <ENTER>.  This file also gives documentation on
    the FORTH language. To start program type UNIFORTH and press <ENTER>.
    
    Suggested Registration:  $25.00
    
    File Descriptions:
    
    UNIFORTH COM  UNIFORTH main program
    WORDS    DOC  The vocabulary word list
    VEDITOR  FTH  The configuration file for the video editor
    FORTH    FTH  The default file that is opened when UNIFORTH is executed.
    UNIFORTH DOC  Documentation for UNIFORTH (87K)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES454.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 454   UNIFORTH                                               v1
------------------------------------------------------------------------
The UNIFORTH Sampler from Unified Software Systems is a subset of the full
Professional UNIFORTH.  It provides a full assembler, video editor and
software floating-point arithmetic.  It supports the FORTH-83 Standard with
few exceptions.  You will find the Sampler to be the equivalent of several
commercial systems selling for $200 or more.
 
UNIFORTH COM  UNIFORTH main program
UNIFORTH DOC  Documentation for UNIFORTH (87K)
FORTH    FTH  The default file that is opened when UNIFORTH is executed.
              It contains the SYSGEN utility, the segment utility,
              a game and other stuff.
VEDITOR  FTH  The configuration file for the video editor
WORDS    DOC  The vocabulary word list
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1986,1987 PC-SIG
```
{% endraw %}

## UNIFORTH.DOC

{% raw %}
```







                              THE UNIFORTH SAMPLER



             The  UNIFORTH  Sampler is a subset of the full  Professional 
        UNIFORTH.   It  provides  a  full  assembler,  video  editor  and 
        software  floating-point arithmetic.   It supports  the  FORTH-83 
        Standard  with few exceptions.   You will find the Sampler to  be 
        the equivalent of several commercial systems selling for $200  or 
        more.

             We decided to release the Sampler into the public domain for 
        several reasons.   First, distributing a version of UNIFORTH that 
        is  useful,  inexpensive  and  reproducible is  a  cost-effective 
        method  of advertising.   Second,  it gives you a chance to try a 
        good FORTH system at no cost.   If you don't like it, you haven't 
        spent a dime.   If you do like it,  we ask (but don't demand!)  a 
        $25  donation,  most  of  which  will be  reinvested  in  product 
        development  to  improve both the Sampler and  the  Professional.  
        Lastly,  the Sampler includes several novel features that we feel 
        are  useful,   but  want  to  bring  before  the  community   for 
        discussion.

             You  are  encouraged to copy and distribute the  Sampler  to 
        your friends and local bulletin boards.   You may use the Sampler 
        as the underlying language for a commercial software product.  In 
        return,  we hope that you will consider us when you need a  full-
        featured FORTH system or other options,  and that you will spread 
        the word about UNIFORTH.

             We  can  supply  you  with the latest disk  version  of  the 
        Sampler  in your 5 1/4" or 8" (CP/M) format for $35,  or you  can 
        obtain a copy from a friend or local bulletin board.  Consult the 
        order form at the end for more details.

             This  manual is a much-abbreviated edition of  the  UNIFORTH 
        Manual Set.  (The complete set has over 500 pages, and comes in a 
        custom  slipcase/binder.   Copies of the full set are $60.)  This 
        manual  is  divided  into four  sections:   an  introduction  and 
        advertisement  for the Professional;  a brief tutorial on  FORTH; 
        some  of  the  system-specific  features  of  UNIFORTH;   and   a 
        vocabulary list.

             The  UNIFORTH  Sampler  is NOT a supported  product  and  is 
        distributed without warranties of Merchantability and fitness for 
        a  particular  purpose.    If  you  need  support,  purchase  the 
        Professional UNIFORTH.













        THE UNIFORTH SAMPLER                               Page 1-2


        1.1  Getting Started

             The Sampler is distributed on one disk.  You can use the DOS 
        utilities  COPY and DISKCOPY for backup and distribution  copies.  
        You will find on the disk the following files:

             UNIFORTH.COM   The executable task image.

             FORTH.FTH      The default file that is opened when UNIFORTH 
                            is executed.  It contains the SYSGEN utility, 
                            the segment utility, a game and other stuff.

             VEDITOR.FTH    The configuration file for the video editor.

             UNIFORTH.DOC   This manual.

             WORDS.LST      The vocabulary word list.

             README.1ST     If   present,   additional  information  that 
                            should be read before using the system.

        All  of  the features of UNIFORTH are preconfigured in  the  task 
        image.   You  need not "load" anything to have a working  system.  
        UNIFORTH.COM requires a minimum of 40Kb user space,  which  means 
        that  you  may be tight if running on a 64Kb machine  with  DOS2.  
        The Sampler will ONLY work with DOS2, and will bomb if you try it 
        with DOS1.  In addition, the terminal I/O assumes a good PC clone 
        that  has  a  compatible BIOS ROM.   If you are  using  an  MSDOS 
        machine  that is not a clone,  you need to make one patch  before 
        bringing  the system up.   Use DEBUG and change the "81" hex byte 
        that  follows  the  ASCII string IOBYTE  located  somewhere  near 
        address 1E6A to a "12" hex.

             Now start the execution of UNIFORTH by entering

                  UNIFORTH

        at which time you should get the Sampler startup screen.   If the 
        screen  is blank or your computer hangs up,  then your system  is 
        not PC compatible and you need to make the patch described above, 
        or  else you have insufficient memory.   If you get a message  to 
        the  effect of a missing file and an inquiry about  creating  it, 
        answer  "N"  and leave FORTH at the earliest  opportunity.   Then 
        make sure FORTH.FTH is on the same disk as UNIFORTH.COM.

             After  you get the "ok" prompt,  you're  into  FORTH.   Then 
        follow  the  tutorial or an introductory text,  and learn  FORTH.  

             There are three ways to exit UNIFORTH:  enter two successive 
        control-C  keystrokes (which aborts);  enter the word END  (which 
        has the same effect as the CTRL-C);  or enter BYE (which  flushes 
        and closes files before exiting).











        THE UNIFORTH SAMPLER                               Page 1-1






                                   Chapter 2

                                   USING FORTH


             The  first  concept  to  understand in using  FORTH  is  the 
        entering  and  execution  of words  through  the  terminal.   The 
        general rules are:


             1.   FORTH does not interpret a line of user input until the 
                  user  terminates the line by entering a carriage return 
                  (<cr>).

             2.   You  may  delete the previous character by  entering  a 
                  backspace (ASCII 08) or delete (ASCII 127).   An  ASCII 
                  "bell" character will be output if you try to backspace 
                  past the beginning of the line.

             3.   You may delete an entire line by entering a CTRL-U (the 
                  CTRL and U keys depressed simultaneously).

             4.   The user may interrupt printout at any time by entering 
                  CTRL-S.    The  printout  is  resumed  when  CRTL-Q  is 
                  pressed.  (Some systems permit any key for resumption.)

             5.   You  can  abort  a task that is  actively  printing  by 
                  pressing the ESCAPE key.

        After pressing the return key to terminate a line of input, FORTH 
        will  go  through the line and execute every "word" in the  input 
        line.  The definition of a FORTH word is very simple:

                              <<<WORD DEFINITION>>>

                       A FORTH word is a sequence of up to
                       64  characters,  with  at least one
                       blank (space) on  each  side.   The
                       sequence  of characters may contain
                       any  character  in  the  ASCII  set
                       except      control     characters.
                       UNIFORTH  retains  the   first   31
                       characters  and  the  length of the
                       word;  any word with the  first  31
                       characters and length identical are
                       not   unique.    All   words   with
                       identical  first  31 characters and
                       lengths greater than or equal to 31
                       characters     are    treated    as
                       identical.









        USING FORTH                                             Page 2-2




        For example, entering the line

                  OK 43 24 + LIST <cr>

        will cause FORTH to execute the four "words"

                  43         (push the number 43 on the stack)
                  24         (push the number 24 on the stack)
                  +          (add them together to get 67)
                  LIST       (and then list block 67)

        Notice the spaces between the words on the input line.  You don't 
        need to type spaces before the first word or after the last  one. 
        The  words are executed in the order in which they were  entered. 
        The actual execution of each word will be discussed later.

             If  all goes well and FORTH successfully executes each  word 
        in the input line,  then FORTH will respond with its prompt (OK). 
        If  an error occurs,  the name of the word it was executing  when 
        the error occurred will be repeated, followed by a question mark.


        2.1  The Stack


             To  see  how  FORTH does such things as  manipulating  data, 
        controlling  devices,  printing and accepting user's  input,  and 
        managing  files,  you will have to understand the mechanism  that 
        FORTH uses to keep track of the work in progress:  the STACK.

             A stack (sometimes called last-in-first-out or LIFO  memory) 
        is  a  device used largely in  compiler  writing,  microprocessor 
        design,  and HP calculators.  A stack can best be compared to the 
        tray holders commonly used in cafeterias:  the type with a spring 
        at  the bottom to push up trays as they are used.   Only the tray 
        most recently added is accessable;  it must be removed before the
        trays below it are available.  

             To see how this relates to FORTH, we need to experiment from 
        a terminal.   If you type a carriage return,  FORTH will  respond 
        with

                  OK  <cr>
                  OK

        to  indicate that it has completed your previous request (in this 
        case,  you requested nothing) and is ready to do  more.   Suppose 
        you type a number:

                  OK  5 <cr>
                  OK










        USING FORTH                                             Page 2-3


        FORTH  has apparently done nothing;   however,  it has taken your 
        number  (5),  interpreted it as the numeric value 5 (rather  than 
        some other word), and "pushed" it onto the stack (added a tray to 
        the holder).

             Suppose you type a series of numbers,  separated by at least 
        one space so FORTH can tell them apart.   Basic FORTH only under-
        stands 16-bit integers,  i.e.   numbers between -32768 and  32767 
        with  no  decimal  points or other punctuation except  a  leading 
        minus sign for negative numbers:

                  OK 4 1 2 7 -23 6 <cr>

        (We'll  tell  you  about other number types later.)  FORTH  still 
        doesn't  seem to have done anything,  but the stack now  contains 
        the original number 5,  plus 6 new numbers,  with the "top" value 
        being the number 6.

             Obviously something is missing:   a method of removing  data 
        from the stack and doing something useful with it.   The simplest 
        thing  that  can be done with the stack is to see what's  on  top 
        (easiest to get at).   FORTH has a word,  "." (dot),  which takes 
        the  number  on the top of the stack,  prints its  value  on  the 
        terminal,  and  throws the number away.   (We will enclose  FORTH 
        words in quotes whenever confusion is possible).   For an example 
        of dot:

                  OK 8 .  <cr>
                  8
                  OK

        will take the number 8,  push it on the stack,  then print it and 
        prompt for more input.  Another example,

                  OK 8 7 .  CR .  <cr>
                  7
                  8
                  OK 

        will type the two top stack values on separate lines.   CR is our 
        second learned FORTH word:  it just outputs a carriage return and 
        line feed to the terminal.


        2.2  Stack Operators


             So  far we can only get to the topmost stack value.   As  on 
        the HP calculators,  there are words that allow us to  manipulate 
        the stack to get at other values.   The table below lists some of 
        the  most important operators.   For this and subsequent  tables, 
        the topmost stack value is indicated by A,  the next stack  value 
        by B,  and so on.   The table gives the word, its function, and a 
        representation of the stack before and after the use of the word.









        USING FORTH                                             Page 2-4



             WORD          FUNCTION         BEFORE    AFTER
             DUP        copies top of stack    B A     B A A
             SWAP       reverses top two       B A     A B
                        numbers on the stack
             DROP       destroys top of stack  B A     B
             OVER       copies 2nd number and  B A     B A B
                         pushes it on top
             ROT        moves 3rd num to top   C B A   B A C
             -ROT       moves top to 3rd num   C B A   A C B


             The  usefulness  of these stack manipulation  words  becomes 
        apparent  when  you  consider  the  following  problem:   suppose 
        someone  else  has  put  a number on the stack and  you  wish  to 
        calculate its square without knowing what it is.  You could type

             OK  DUP * . <cr>
             25
             OK 

        By inference,  the number on the stack was 5.  Of course, we used 
        a  word  not defined yet to multiply the two  values.   So  let's 
        digress and discuss arithmetic functions.


        2.3  Arithmetic Functions


             All  arithmetic  functions act on the stack  with  a  method 
        called  postfix or Reverse Polish Notation (RPN),  commonly  used 
        with the HP calculators.  Rather than give extensive examples, we 
        will  assume  that you have used an RPN calculator at some  time, 
        and just give a table of the elementary functions.

             WORD       FUNCTION                BEFORE   AFTER
             ABS       absolute value of top       B A    B |A|
                       of stack
             NEGATE    2's complement top          B A    B -A
                       of stack
             +         add top stack values        B A    B+A
             -         sub top stack values        B A    B-A
             *         mul top stack values        B A    B*A 
             /         div top stack values        B A    B/A  
             MOD       remainder of division     C B A    C R
                       of B/A
             MAX       top two numbers dropped,  C B A    C MAX(A,B)
                       larger one put back
             MIN       top two numbers dropped,  C B A    C MIN(A,B)
                       smaller one put back













        USING FORTH                                             Page 2-5


        An  example of the use of some of these functions is to  evaluate 
        the expression

                               ABS [(5+4)/2 - 20]

        You would enter it with FORTH by

                  OK  5 4 + 2 / 20 - ABS . <cr>
                  16
                  OK

        Note  that  the division truncates because we are  using  integer 
        arithmetic.


        2.4  Logical Operators


             The  logical  operators act upon all 16 of the  bits  in  an 
        integer  and leave results which involve all those  bits.   There 
        are  four basic operators,  three of which require two numbers on 
        the stack and one which acts only on the top value:

                  NOT    one's complement of the top value.
                  AND    bitwise "AND" of the top two values.
                  OR     bitwise "OR" of the top two values.
                  XOR    bitwise exclusive OR of the top two values.


             The use of these definitions is most easily seen by using  a 
        base which is a power of two.  The most common of these are octal 
        and  hexadecimal.   This way there is an easily decoded relation-
        ship  between  the value of a number and the state of  its  indi-
        vidual bits.  Type

                  OCTAL <cr>

        FORTH is now ready to handle base 8.   Typing HEX would give base 
        16,  and DECIMAL gives base 10.   Using base 8, an example of the 
        logical operators is

                  OK 453 321 AND .  <cr>
                  1
                  OK

        where  the only bit in common between the octal numbers  453  and 
        321 is the least significant bit.
















        USING FORTH                                             Page 2-6


        2.5  Relational Operators


             Relational  operators  compare  stack  values  and  leave  a 
        logical  truth flag;   ie.,  a number that is either zero or  one 
        depending  on  the tested condition.   All  relational  operators 
        destroy  the stack values they test and just leave the truth flag 
        on  the  stack.   There  are  many  of  these  operators  because 
        condition  testing is one of the most common functions  performed 
        in FORTH.  The table below lists the major relational operators.

             WORD                   FUNCTION
               0=       If the top stack value equals zero, leaves a 1
                        (true);  otherwise, leaves a 0 (false).  Also
                        called NOT.

               0<       True if stack value is less than 0, false
                        otherwise.

               0>       True if stack value is greater than 0, false
                        otherwise.

               <        True if the next lower stack value (B) is less
                        than the top stack value (A), false otherwise.

               =        True if B is equal to A, false otherwise.

               >        True if B is greater than A, false otherwise.


             An example of the use of some of these relational  operators 
        is to compare

                  OK 8 0= 9 10 < = .  <cr>
                  0
                  OK 

        The  number 8 is compared to see if it is equal to zero.   It  is 
        not, so this operation leaves a 0 on the stack in place of the 8. 
        Then 9 is tested to see if it is less than 10.   This is true, so 
        a 1 is pushed on the stack.  Then the results of the previous two 
        operations  (0 and 1) are tested to see if they are  equal.   The 
        result is 0, which is then printed.  The stack is now empty.


        2.6  Forth Memory Allocation


             Before we go any further in examining FORTH, a little of the 
        nuts  and  bolts  must be presented.   FORTH is  a  core-resident 
        program that occupies approximately 24000 bytes of  memory.   Not 
        all of the allocated memory is filled under normal use;  instead, 
        it  is  partitioned  into subsections that can  expand  with  the 
        increasing load.  The partitions are:









        USING FORTH                                             Page 2-7



        I.   THE DICTIONARY.  Nearly all of FORTH resides in the diction-
             ary.   The  dictionary  starts at about address 300  and  is 
             composed of three contiguous sections:

             a.   Kernel.   Core locations 300 through 8000 (bytes)  hold 
                  the  FORTH  kernel.   This  is  the  assembly  language 
                  program  that  contains  the 190 most  primitive  FORTH 
                  definitions; somewhat ignorant but easily teachable. 

             b.   Basic FORTH.   This section is the SYSTEM  definitions, 
                  some  200  elementary words that later definitions  can 
                  draw on.

             c.   Application  FORTH.   In this area are the  definitions 
                  for any program or utility that you load after starting 
                  your session.  This area grows upwards to higher memory 
                  locations.

        II.  THE  DATA  STACK.   The data stack contains  such  items  as 
             arguments passed between routines, numbers typed in from the 
             terminal,  system word temporary storage,  etc.,  and is the  
             stack we previously talked about.  This stack is placed near 
             the  top of the FORTH program,  and "grows" downward towards 
             lower memory locations.

        III. THE  RETURN STACK.   Less used by the  beginning  programmer 
             (for  good  reason!),  the return stack's primary use is  to 
             contain  addresses  of  the words to  be  executed  when  we 
             "return" from the word being currently executed.  Other uses 
             include  storage for loop parameters,  and numbers that  are 
             "in  the  way" on the data stack.   The return stack  starts 
             near the top of the memory allocation and grows downward  in 
             memory.  It is much smaller than the data stack (only 80 16-
             bit  locations),  so  use  it  sparingly  and  with  careful 
             attention to the protocol.

        IV.  THE BLOCK BUFFERS.  UNIFORTH is a disk-based system and uses 
             two  or  more  buffers to bring data to and from  the  disk.  
             Each buffer is nominally 1024 bytes long.

        The  addresses  listed above are for a Z80  CP/M  system.   Other 
        systems will have slightly different addresses.




















        USING FORTH                                             Page 2-8


             A diagram of how memory is allocated in core is shown below.

             high limit     |---------------------------|
                            |    block buffer 2         |
                            |---------------------------|
                            |    block buffer 1         |
                            |---------------------------|
                            | v                         |
                            | v       return stack      |
                            | v                         |
                            |---------------------------|
                            | v                         |
                            | v        data stack       |
                            | v                         |
                        ^   |   .   .   .   .   .   .   |
                        ^   |                           |
                        ^   |                           |
              memory    ^   |   .   .   .   .   .   .   |
             addresses  ^   | ^                         |
                        ^   | ^ user application        |
                        ^   | ^  dictionary             |
                            | ^                         |
                            |---------------------------|
                            |                           |
                            | "standard" FORTH          |
                            |     dictionary            |
                            |                           |
                            |---------------------------|
                            |                           |
                            |    FORTH kernel           |
                            |        dictionary         |
                            |                           |
             low limit      |---------------------------|



        2.7  Pointer Values


             FORTH  has  four  "pointers,"  most  of  which  are  usually 
        transparent  to the user.   The two stack pointers  have  already 
        been mentioned.   The data stack pointer can be referenced by the 
        word  SP@,  which  indicates the address of the top of the  stack 
        before  SP@ was used.   The return stack pointer's current  value 
        can be obtained by the word RP@.

             The dictionary pointer (DP) indicates the first free  memory 
        address  for  the storage of new definitions.   Its value can  be 
        obtained by DP @ and can be changed by ALLOT,  which uses the top 
        stack  value  as the number of bytes by which  to  increment  the 
        pointer.   Further  explanation of the dictionary pointer can  be 
        found in the User's Guide.











        USING FORTH                                             Page 2-9


             The   interpreter  pointer  (IP)  is  an  internal  register 
        containing  the address of the next FORTH "word" to be  executed. 
        It  cannot  be accessed by the programmer  except  with  assembly 
        language  routines.   Some further information concerning the  IP 
        can be found in the User's Guide.


        2.8  Definitions


             Now let's get back to our problem of squaring numbers.  What 
        we discussed before leads into the next logical point:   it would 
        be   convenient  to  take  a  series  of  stack  operations   and 
        automatically call in the whole series when needed.  Consider the 
        case of squaring a number, i.e., calculating A*A.

             You can define a word to perform this function for you. Pick 
        a name for your word,  for example,  SQUARE.  You can define this 
        word by

                  OK : SQUARE DUP * ;  <cr>


             The  first  thing  on the line is a word which is  just  the 
        single  character  ":" (colon).   Following it (separated  by  at 
        least one space) is the word name you are defining.   Next is the 
        series of words you wish to have executed (DUP *).   Finally, the 
        closing word is a semicolon,  which indicates that the definition 
        of SQUARE is complete.   The word,  once defined, can now be used 
        like any of the well-known words, i.e.

                  OK 5 SQUARE . <cr>
                  25
                  OK 3 4 + SQUARE 40 - . <cr>
                  9
                  OK


             Before  proceeding,  you  should stop and consider  what  is 
        happening  in  more detail.   The process of putting a series  of 
        words  together  in  a so-called  "colon  definition"  is  called 
        "compilation".   When  FORTH  is  processing the words  inside  a 
        definition,  it  does almost all the work needed to perform  your 
        function.   When the word is used, FORTH can very rapidly perform 
        the function you have designed.

             The  colon  starts  the compilation  process  by  using  the 
        following  character  string  as  the "name"  of  what  is  being 
        compiled.   The name is stored at the beginning of the definition 
        in  the  "header section" as a count byte followed by  the  ASCII 
        characters  of  the name.   The address of an  assembly  language 
        routine  is next (the "code section") and then the information to 
        be processed (the "parameter section"),  such as the addresses of 
        the FORTH words to be included in your definition.   Finally, the 









        USING FORTH                                             Page 2-10


        semicolon turns off the compilation process and gets you back  to 
        the "interactive execution" mode you started with.  If you forget 
        the semicolon, any words you type after it will be thrown in with 
        the colon definition and not executed immediately.

             Remember  that the only restriction on names is that control 
        characters  are  not allowed.   There is nothing sacred  about  a 
        "number" such as "7".  If you want to be different you can define

                  :  7 5 ;  

        and obtain such bizarre results as

                  OK 7 3 + .  <cr>
                  8
                  OK


             The next step in defining words is to realize that there  is 
        no   distinction   between  "FORTH  words"  and   "your   words". 
        Previously, you defined the word

                  :  SQUARE DUP * ;  

        Using  this word you can define a routine to get the fifth  power 
        of numbers like this:

                  :  **5 DUP SQUARE SQUARE * ;  


             Now suppose you choose to redefine SQUARE.  You could choose 
        to do this by typing

                  OK :  SQUARE DROP 5 .  ;  <cr> SQUARE Redefined 
                  OK 7 SQUARE <cr>
                  5
                  OK

        Note the "Redefined" informative message that you get.   However, 
        the  new  definition  of SQUARE will not affect its  use  in  the 
        previously defined word, **5.

                  OK 2 **5 .  <cr>
                  32
                  OK

        But  if  **5 is now redefined,  the new definition of  SQUARE  is 
        used.

                  OK :  **5 DUP SQUARE SQUARE * ;  <cr> **5 Redefined 
                  OK 2 **5 .  <cr>
                  5 5 2
                  OK










        USING FORTH                                             Page 2-11



             The behavior is governed by these two rules:

             1.   When  you  define  a word,  all words used  within  the 
                  definition must have been previously defined.

             2.   Later  changing a word you use within definitions  will 
                  not  affect  words you have  already  defined  -- their 
                  function  will  remain unchanged until you enter a  new 
                  definition for the word.


             Notice  that only the most recent dictionary  definition  of 
        words used within a colon definition will be used.   For example, 
        in   subsequent  use,   the  correct  definition  for  SQUARE  is 
        inaccessible  because another definition for SQUARE  was  created 
        later.   There  is  a  way of "forgetting" the later  version  of 
        SQUARE.  The FORTH word FORGET, used like

                  OK FORGET SQUARE <cr>
                  OK

        will erase from the dictionary the most recent definition of
        SQUARE and all definitions made after it.

             We  have mentioned colon definitions.   You can also  define 
        machine  language words with the word CODE,  and terminate  their 
        definition with the word END-CODE,  in a similar manner as  colon 
        and semicolon.  We will mention machine language routines in more 
        detail in a subsequent chapter.

             One  other item before we leave the subject of  definitions. 
        Besides using RPN representation, FORTH is decidedly not FORTRAN-
        like   in  its  definitions.    Though  these  act  exactly  like 
        subroutines, they differ in that most arguments are passed on the 
        data   stack,   and  that  the  entire  definition   is   written 
        horizontally.   While  you can write definitions with each called 
        word  on a separate line,  it is not commonly done.   This can be 
        confusing to the beginning programmer,  but think of it as if you 
        were entering the line interactively.


        2.9  Constants and Variables


        FORTH  has several words for reading from and writing to  memory. 
        To  read  from memory,  an address must be specified.   Then  "@" 
        (pronounced "fetch") takes that address,  reads the 16-bit  value 
        starting at that address,  and places it on the stack.   The word 
        C@ accomplishes a similar task, except that it retrieves only the 
        byte stored at the address, places it in the low byte of a 16-bit 
        location or cell which is then placed on the stack.











        USING FORTH                                             Page 2-12


                              <<<CELL DEFINITION>>>

                       A cell is a 16-bit memory location.
                       The low order byte is stored at the
                       first byte address;  the high order
                       byte   is   stored   at   the  next
                       consecutive byte address.


        The  procedure  of  reading (or fetching as it is  more  commonly 
        called)  and  then printing is used  often.   Therefore,  a  word 
        exists that combines both of these operations--the question  mark 
        (?).  It fetches an integer from a given address and prints it. 

             Two words exist to write into a specific memory location. As 
        for  reading,  the  exclamation point ("!",  pronounced  "store") 
        stores a 16-bit value and C!   stores the low-order byte of a 16-
        bit  value from the top of the stack.   In both cases,  the  data 
        value and the address are removed from the stack.  For example, 

                                  16432 18500 !

        stores the values 16432 at address 18500.

             Also in the context of definitions, you can define constants 
        and variables to be used in your programs.  Numeric constants can 
        be defined with the word CONSTANT.  For example,

                  31415 CONSTANT PI-TIMES-10000

        defines  the FORTH word PI-TIMES-10000.   Whenever you type  this 
        word, the constant 31415 will be pushed on the stack.

             Often  you find that it is awkward to have all your data  on 
        the  stack at once.   You can store data in single  named  memory 
        locations with the FORTH word VARIABLE.  For example,

                  VARIABLE Q

        defines the word Q.   When you type Q, the address of the storage 
        location corresponding to Q is pushed onto the stack.  You cannot 
        preset  this storage location during the definition as you  could 
        with  CONSTANT.   You can use Q in conjunction with @ and  !   to 
        change  the  contents  during program  execution  (for  instance, 
        updating a counter).   There is a special word called tick,  "'", 
        which  allows  the  changing of the value of  a  CONSTANT.   Tick 
        places the address of a word's parameter field (where the  number 
        is  stored for CONSTANT) on the stack.   You can then change  the 
        value using "store".  For example,

                  31416 ' PI-TIMES-10000 !

        changes PI-TIMES-10000 from 31415 to 31416.










        USING FORTH                                             Page 2-13



        2.10  Typing


             One of the problems with FORTH as far as users are concerned 
        is that there is no typing of variables.   That is, once you have 
        defined  variable XXX,  the system doesn't know later whether XXX 
        is an integer,  floating point number, or what.  The advantage of 
        this  is  that  less  storage  space  and  compiler  overhead  is 
        necessary,  and  as long as you are dealing with  characters  and 
        integers, the inconvenience is small.

             The  disadvantage  comes into play when FORTH  becomes  more 
        complicated,  and  you  start implementing types such  as  double 
        precision integer,  string variables,  etc.  Because of this lack 
        of typing, you cannot perform mixed-mode arithmetic automatically 
        using a precedence scheme such as in FORTRAN.

             Therefore, when using FORTH, you must keep the type of every 
        variable  and  stack  member in mind,  and  perform  the  correct 
        operation on the numbers.  For example:

                +      Add the two top 16-bit stack values, assuming they
                       are single precision integers, and leave a 16-bit
                       result.

                D+     Add the four top 16-bit stack values, assuming
                       they are two double precision (32-bit) integers,
                       and leave a 32-bit result.

                F+     Add the four top 16-bit stack values, assuming
                       they are two single precision (32-bit) floating
                       point values, and leave a 32-bit floating point
                       result.

                SS*D   Multiply the two top 16-bit stack values assuming
                       they are single precision integers, and leave a
                       32-bit double precision integer result.

        In  other  words,  some  of the work has been taken  out  of  the 
        compiler  or language and placed on the  programmer's  shoulders. 
        There  is  no  inherent  reason why  a  typed-FORTH  couldn't  be 
        created;  there just has been no emphasis in this direction.




















        USING FORTH                                             Page 2-14


        2.11  Control Structures


             Control   structures  allow  you  to  modify  program  flow, 
        primarily by making decisions and causing various definitions  to 
        execute within a colon definition.  


        2.11.1  Looping


             Maintaining an iteration counter and causing a branch out of 
        the  loop  when a preset value is reached is a  very  fundamental 
        software feature.  FORTH provides the DO and LOOP words for this.

             When making a loop,  you usually know the starting value and 
        the number of repetitions desired.   When you sum these,  you get 
        the total.   DO expects to find two parameters on the stack,  the 
        total and the starting value:

             [total] [start] DO [things to be done] LOOP


             As an example, consider a definition to print out 5 numbers.  
        If we start with 1, then the total is 6, and our definition is:

                  :  PRINT_FIVE 6 1 DO .  LOOP ;  <cr>

        This definition expects to find 5 numbers on the stack.

                  OK 34 5 2 6 -3 PRINT_FIVE <cr>
                  -3 6 2 5 34
                  OK

             Other  languages use the starting value and the ending value 
        as the loop limits,  and switch the order of the  limits.   These 
        variances are  matters of preference.

             Often  it  is useful to have a word to access the  iteration 
        counter, and FORTH provides several of them as indicated below.

             WORD                    FUNCTION
             I           Push the value of the iteration counter of
                          the innermost loop onto the stack.

             J           Push the value of the next outermost loop
                          counter onto the stack (i.e.,2 nested 
                          loops).

             I-          Subtract the value of the innermost counter
                         from the value on the stack.

             I+          Add the value of the innermost counter to
                          the value on the stack.









        USING FORTH                                             Page 2-15




             Consider a loop to print the numbers from 1 to 10:

                  OK :  10_#'S 11 1 DO I .  LOOP ; <cr>

        When executed, 10_#'S will give

                  OK 10_#'S <cr>
                  1 2 3 4 5 6 7 8 9 10
                  OK


             Since  DO  expects to find the iteration parameters  on  the 
        stack at execution time,  you can wait until then to define them. 
        A general, ascending order, number printing routine might be:

                  OK :  GEN_ASC_ORD DO I .  LOOP ; <cr>

        When executed, this word expects to find the DO parameters on the 
        stack:

                  OK 11 1 GEN_ASC_ORD <cr>
                  1 2 3 4 5 6 7 8 9 10
                  OK

             Since  one  normally thinks of these parameters  as  [start] 
        [finish] rather than the order that DO prefers, and further since 
        [finish] is often preferred over [finish+1], try this:

                  :  LIMITS 1+ SWAP ;  

        The  1+ adds 1 to [finish] and SWAP puts [start] and [finish]  in 
        the correct order for a DO.   In other words,  you have created a 
        "preprocessor"  for  DO-LOOPS.   This is rarely  done  with  most 
        languages,  but  if  you  expect  to use this  a  few  times  the 
        convenience pays off in FORTH.

                  OK :  GEN_#_PRINT LIMITS DO I .  LOOP ; <cr>

        In use, this gives:

                  OK 1 5 GEN_#_PRINT <cr>
                  1 2 3 4 5 
                  OK


















        USING FORTH                                             Page 2-16


        2.11.2  Conditional branching


             Conditionals traditionally allow some value to be tested and 
        a  branch to occur based upon the test.   FORTH  allows  one- and 
        two-sided conditional branches.

             The  IF word and the THEN word are the simplest  cases.   IF 
        will  cause  the  definitions  between it  and  THEN  to  execute 
        provided  the top stack value (TOS) is logical true  (or  really, 
        not  equal  to zero).   If the TOS is zero,  FORTH will  skip  to 
        execute the words following the THEN word.  For example,

                  OK :  USE_IF IF 1 .  THEN 2 .  ;  <cr>

        When executed, this definition will give

                  OK 1 USE_IF <cr>
                  1 2
                  OK 0 USE_IF <cr>
                  2
                  OK

        IF always removes the logical quantity it tests from the stack.

             Another word,  ELSE, allows one of two branches to be taken. 
        As an example:

                  OK :  USE_ELSE IF 1 .  ELSE 0 .  THEN ;  <cr>

             If 0 is on the stack,  the ELSE-clause will be executed;  if 
        a  number other than 0 is on the stack,  the TRUE-clause will  be 
        executed, as in

                  OK 0 USE_ELSE <cr>
                  0
                  OK 4 USE_ELSE <cr>
                  1
                  OK

        The ELSE portion executes if TOS is false, or 0.  In either case, 
        the  definition after THEN executes.   In the preceding  example, 
        the compiler operator ";" will execute.   It will signal both the 
        end of the definition at compile time, and perform house-cleaning 
        at the end of the definition at execute time.


















        USING FORTH                                             Page 2-17


        2.11.3  Block structure branching


             FORTH also provides a block structure which is essentially a 
        loop without an iteration counter.  It is of the form:

                  BEGIN [good stuff] [flag] UNTIL

             BEGIN  is  a  place holder and marks the  beginning  of  the 
        block.   UNTIL tests for a true or false TOS, and if false trans-
        fers  back to the word following BEGIN.   If true,  the word fol-
        lowing UNTIL will execute.   UNTIL will remove its logical  quan-
        tity from the stack.


        2.12  And so Forth....


             You  now have seen most of the basics of FORTH,  along  with 
        some  examples.   The best way to learn more at this stage is  to 
        sit at a terminal and practice!










































        USING FORTH                                             Page 2-1





                                    Chapter 3

                           UNIQUE FEATURES OF UNIFORTH


                As  mentioned  earlier,  the Sampler is a subset  of  our 
        commercial FORTH.  Even so, it has many additions to the FORTH-83 
        standard.  This chapter will mention a few of those features.  We 
        recommend  the  purchase  of  the UNIFORTH Manual  Set  for  more 
        information.


        3.1  Files


             UNIFORTH uses DOS 2 tree-structured files.   In other words, 
        you can access files in any directory on any disk from inside  of 
        UNIFORTH.  The limitation is that the file pathname cannot exceed 
        63 characters.

             When  first  invoking  UNIFORTH,  you  have  the  option  of 
        including  a  file  name on the same line.   If no  name  follows 
        UNIFORTH,  then file FORTH.FTH will be  opened.   Otherwise,  the 
        passed file will be opened.  For example,

                       UNIFORTH TEST.BIN

        will  open file TEST.BIN for access after the coldstart procedure 
        is completed.

             All UNIFORTH source code filenames have an extension of .FTH 
        for unique identification.

             The following words give the basic file access functions:

             CHANA,CHANB
                  There  are  two default "channels" for file  access  in 
                  UNIFORTH,  selected by the words CHANA and CHANB.  When 
                  first  invoking UNIFORTH,  CHANA is assumed.   After  a 
                  channel has been selected, all file read/write commands 
                  are  directed  to that channel.   If  you  now  specify 
                  CHANB,  all  commands are directed to the file open  on 
                  that channel.

             MAKE-CHAN <name>
                  If  you  want more files to be open  concurrently,  you 
                  might  want to add channels.   This word will create  a 
                  new word like CHANA that,  when executed, switches file 
                  commands  to a new channel.   Each channel occupies  64 
                  bytes  of  dictionary  space in addition  to  the  word 
                  header.









        UNIQUE FEATURES OF UNIFORTH                        Page 3-2



             OPEN <fname>
                  Open the file.   If the file doesn't exist, you will be 
                  prompted for its creation.   If you decline to create a 
                  new file, the previous file will be reopened.

             CLOSE
                  Close  the file on the current channel.   No action  is 
                  taken if a file is not currently open.

             MAKE <fname>
                  You can explicitly create a file with this word.   MAKE 
                  and OPEN only create the DOS directory entry;  the file 
                  has  no length until you explicitly write data  to  it.  
                  Also,  until you close the file,  DOS does not know the 
                  file's length.

             DELETE <fname>
                  Deletes the file.

             FILESTATUS
                  Displays information about the currently open file.

             Once opened, a file can be accessed in one of two ways:

             (1)  As  a block-oriented (FORTH) file.   You read/write  to 
                  the file using 1024-byte random-access blocks of  data.  
                  Common words are BLOCK, BUFFER, UPDATE, LOAD, etc.

             (2)  As a sequential, text-oriented file.  You read/write to 
                  the file in bytes or lines,  where a line is terminated 
                  with  a  CR/LF pair of ASCII characters.   This is  the 
                  kind of file created by EDLIN or WORDSTAR.

             Block-oriented  files are the most straightforward.   All of 
        the  FORTH-83  read/write/load words work on  block  files.   The 
        limitations are that you will get an error message if you try  to 
        access data beyond the end of the file,  and that you cannot load 
        block  0  of any file.   You can also open and read binary  files 
        such as UNIFORTH.COM with BLOCK, and dump their contents.

             A blank file can be created,  or a current file extended  in 
        length,  using  the word EXTEND.   It has the number of blocks to 
        extend as its argument.   Each added block is blank-filled with a 
        ";S" at the beginning.


















        UNIQUE FEATURES OF UNIFORTH                        Page 3-3


             You can move blocks from one file to another with a brace of 
        words:

             n1 n2 COPYATOB
                  Copy  block n1 of the file currently open on channel  A 
                  into block n2 of channel B.


             n1 n2 #blks MCOPY
                  Copy #blks starting at block n1 in channel A to channel 
                  B, starting at block n2.

             Text files are read byte-by-byte.   You should not use BLOCK 
        on a text file, as there is no guarantee that the file will be an 
        exact multiple of 1024 bytes in length (meaning you won't be able 
        to access the last part of the file).  Instead, there is a set of 
        words to perform the major read/write operations for you.

             RDBYTE char
                  Read one byte from the current file.  If the end of the 
                  file  is  reached,  leave a true flag in place  of  the 
                  character.

             adr cnt handle READ-BYTES nchar
                  Read  several  bytes  from a file into a  buffer  (like 
                  EXPECT).   Leave on the stack the number of  characters 
                  actually read, or 0 if an eof was detected.

             adr cnt RDLINE nchar
                  Read a "line" from the file into a buffer.   The number 
                  of  characters actually read (nchar) will be less  than 
                  cnt if a CR/LF is detected.

             char WRBYTE
                  Write the character to the current file.

             adr cnt handle WRITE-BYTES nchar
                  Write  cnt  characters  to  the  file  pointed  to   by 
                  "handle".   nchar  is  the actual number of  characters 
                  written,  and will be less than cnt only if the disk is 
                  full.

             adr cnt WRLINE
                  Write  cnt characters to the current  file.   Append  a 
                  CR/LF pair to terminate the line.

             WREOF
                  Write an end-of-file mark on the current file.















        UNIQUE FEATURES OF UNIFORTH                        Page 3-4


             d1 meth handle !FILE-POS d2
                  A   method  of  random-access  on  a  sequential  file.  
                  Position  the  next read/write to byte d1 of  the  file 
                  pointed  to  by handle.   The position  method  can  be 
                  absolute (0),  relative (1) or past the end of the file 
                  (2).  d2 is the new location of the file pointer.

             handle @FILE-POS d1
                  Returns  the current file pointer (double integer bytes 
                  from beginning of file).

        The  "handle" on some of these words is the MSDOS handle  number.  
        It is returned when you open a file.   The current channel's name 
        is pointed to by variable FCB, and the first byte of that name is 
        the handle.   For example, to get the handle for the file open on 
        channel A:

                  CHANA FCB @ C@

        will do the trick.

             You  can  also  load source code  from  a  text  file.   For 
        example,  you might like to use FRED as a basic text editor,  and 
        feel  restricted by the 12x64 format of a FORTH block.   You  can 
        create a text file and load the entire file:

             TLOAD
                  Load  the  currently  open text file  starting  at  the 
                  current file pointer.  Each line of text is interpreted 
                  just  as if you had entered it from the  console.   You 
                  must terminate the file with a ;S.

        Loading  from  a  text  file requires a  minimum  of  three  disk 
        buffers, so check #BUFF before you attempt a load.


        3.2  Vectored I/O


             UNIFORTH  permits up to three input devices and five  output 
        devices to be used for console I/O.  These devices are controlled 
        by  the low-order byte of variable IOBYTE.   Each bit is assigned 
        to  a  particular  input  or  output  device.    By  setting  the 
        appropriate bit,  you can send output to 5 devices simultaneously 
        or select an alternate keyboard.


















        UNIQUE FEATURES OF UNIFORTH                        Page 3-5


             A 16-byte table is located at IOBYTE+2.   The bits in IOBYTE 
        select from these 8 addresses to execute the proper routine.  The 
        bit definitions are:

                  bit#      IOTAB+...      routine
                  0         2              PC-specific input
                  1         4              console input
                  2         8              user specified input routine
                  3         10             user specified output routine
                  4         12             console output
                  5         14             disk output
                  6         16             printer output
                  7         18             PC-specific output

                            20             PC-specific status
                            22             console status
                            26             user specified status

        For  example,  to select console input and  printer  output,  you 
        would  set  IOBYTE to 42H.   You can insert your own routines  in 
        this table, with restrictions.  Check the Professional Manual Set 
        for more information.

             We've defined a set of words to account for the most  common 
        combinations:

                  TERMINAL       select PC input and output
                  PRINTER        select printer output only
                  +PRINTER       add printer output to current selection
                  +DISK          add disk output to current selection

        The  disk output is very restricted.   You must have a text  file 
        open  on  channel B.   All terminal output is then stored on  the 
        text file (a log file if you will).


        3.3  Numeric input


             The  UNIFORTH  Sampler  supports  three  basic  data  types:  
        single  precision (16-bit) integers,  double  precision  (32-bit) 
        integers, and single precision (32-bit) floating point.

             When  entering  a number from the keyboard,  you  must  tell 
        FORTH  what  type  of  number it is  to  convert.   Since  16-bit 
        integers are the default,  you need only enter the digits with an 
        optional  +  or - sign at the beginning.   For  32-bit  integers, 
        include a comma anywhere within the number.   For floating point, 
        include a period anywhere within the number, with an optional "E" 
        style exponent.  Examples:













        UNIQUE FEATURES OF UNIFORTH                        Page 3-6


                  string         converted as:
                  235            16-bit integer 
                  23,5           32-bit integer
                  235.0          floating point
                  2.35E2         floating point

        All values convert to 235.   Variable PRECIS tells you what  kind 
        of  number  was  last  converted  (-1=none,  0=16-bit,  1=32-bit, 
        2=floating point),  and variable DPL locates the decimal point or 
        comma within the number.


        3.4  Video editor


             We've  included our "slow" video editor as part of the basic 
        system.   It  comes preconfigured for the IBM PC,  and uses  only 
        BIOS calls to perform its duties.   We suggest that clone  owners 
        try  this editor as-is before attempting any  modifications.   At 
        worst, the screen will be filled with garbage characters, and you 
        can  exit  the  editor  at  any  time  with  ctrl-X  without  any 
        modifications  being written to disk (or ESC if changes are to be 
        written).

             To enter the editor,  just use "n EDIT" where n is the block 
        number to be edited.   If you were attempting to load a block and 
        ran  into  an error,  and received the  block/line  number  error 
        message,  the word WHERE (no arguments) will enact the editor and 
        display  the  erroneous  code.   UNIFORTH  automatically  selects 
        between the monochrome and the color graphics cards,  and between 
        old  and new PC's,  so the editor should work without problem  on 
        almost every system.

             Once  inside  the  editor,  the commands  are  pretty  self-
        explanatory.  All commands are mnemonic related and are displayed 
        at the top of the screen.   The line stack is a temporary holding 
        area  that  can  be  used to transfer lines  from  one  block  to 
        another.   Jump  block will position the cursor at the  displayed 
        block number; overtype it with the block you wish to move to.

             If   you  wish  to  customize  the  editor,   look  at  file 
        VEDITOR.FTH.   It  contains configuration blocks for three  other 
        popular terminals:   the ADM3/5,  the H-19 and the  VT-100.   The 
        UNIFORTH  Professional  version includes about 10  more  terminal 
        types.  However, this basic selection will cover 95% of all clone 
        cases.   Find  the  terminal type that most closely matches  your 
        system  and  load  the  appropriate  block.   This  modifies  the 
        vectored editor words that are terminal specific.















        UNIQUE FEATURES OF UNIFORTH                        Page 3-7


             In  addition,  all control codes are defined  as  constants.  
        You  may  wish  to use another key (such as  a  WordStar  layout) 
        instead  of  what we've selected.   Just modify  the  appropriate 
        parameter   and   menu  item  from  VEDITOR.FTH  and   load   the 
        configuration block.

             When you've made all of the necessary changes, resysgen your 
        system to save the modifications.


        3.5  SYSGEN


             UNIFORTH permits the storage of a precompiled system,  to be 
        later executed in a similar manner as UNIFORTH.COM.   You may add 
        anything  to the system that you want;  make patches to the basic 
        system;  delete  earlier utilities like the  high-level  floating 
        point  functions;  and then save the new task image onto  another 
        file.

             The SYSGEN utility is in file FORTH.FTH.   You will find two 
        words most useful:

             REALLOCATE
                  This  word  prompts you for two pieces of  information:  
                  the  number of disk buffers and the  memory  size.   We 
                  recommend  3  buffers.   If you have more than 64Kb  of 
                  user program space on your system (that is,  more  than 
                  about 96Kb of total memory),  you may be tempted to use 
                  a  number  larger than 64 when asked for  memory  size.  
                  The  UNIFORTH  Sampler is limited to 64K,  and so  will 
                  truncate  any  answer  you give  to  fit  within  those 
                  constraints.

             SYSGEN
                  The main word.   After you have used reallocate, sysgen 
                  will  save  the compiled image onto a task  file.   You 
                  specify the file name.

             SCRAMBLE
                  If you wish to distribute a commercial application  and 
                  don't  want  the user to have any access to  FORTH,  we 
                  recommend  the  use of the  word  SCRAMBLE.   It  first 
                  destroys  the word links,  then executes  SYSGEN.   The 
                  resultant  compiled task image will not be able to find 
                  enough words in the dictionary to make effective use of 
                  FORTH,  yet your later application words will still  be 
                  available.















        UNIQUE FEATURES OF UNIFORTH                        Page 3-8


        3.6  Assembler


             Included  in UNIFORTH.COM is an assembler that uses the 8086 
        mnemonics.   This assembler is essential in defining some of  the 
        basic words of the system, and uses some 3K bytes of storage.

             You have full access to this assembler for your own use and, 
        in fact, are highly encouraged to use it.  FORTH machine language 
        definitions are extremely easy to create and debug, compared with 
        other  languages.   It  is ideal for learning how to  program  in 
        machine language, or to test out various algorithms before incor-
        porating them in other programs.

             Machine language FORTH words are created by using one of the 
        defining words CODE or SUBROUTINE.  In each case, the interpreta-
        tion state is changed from compilation (i.e.,storing the  addres-
        ses  of routines into a definition) to execution (executing  each 
        word as it is encountered).  The words executed are 8086 opcodes, 
        which  use stack parameters to create 8086 instructions which are 
        then stored into the definition.


        3.6.1  Creation of Code Words


             To create a machine-language word callable from other  FORTH 
        words,  use CODE,  just like you would the defining word "colon". 
        For example,

             CODE DUP  DX POP,  DX PUSH,  DX PUSH,  NEXT,  END-CODE

        which  creates  a  code word called DUP that pops the  top  stack 
        value  into the register DX,  then pushes it back on  twice.  The 
        last  statement  in  a CODE definition must  be  END-CODE,  which 
        cleans up the stack and returns the user to the FORTH vocabulary.

             The word NEXT, is one of the three required ways of termina-
        ting the actual word definition if the new word is to be callable 
        from other FORTH words.  The three ways are:

                  NEXT,     Jump  to the interpreter to pick up the  next 
                            word to execute.

                  APUSH,    Push  the  contents of AX onto the stack  and 
                            then jump to the interpreter (go to NEXT).

                  DPUSH,    Push the contents of DX onto the stack,  then 
                            push AX, and finally go to NEXT.














        UNIQUE FEATURES OF UNIFORTH                        Page 3-9



             A  defining  word called SUBROUTINE is available  to  create 
        machine-language  words  to  be used only  within  other  machine 
        language words (using CALLs or JMPs).  For example,

             SUBROUTINE 4*  AX AX ADD,  AX AX ADD,  RET,  END-CODE

        creates  the  word 4* that will multiply AX by 4.   To  use  this 
        word:

             CODE 64*  AX POP,  4* CALL,  4* CALL,  4* CALL,
               APUSH,  END-CODE

        will multiply the top stack value by 64.   Remember:   you cannot 
        directly execute 4* as defined in this way.  For example,

             : 64*  4* 4* 4* ;

        will leave three copies of the PFA of 4* on the stack, instead of 
        performing the desired multiplication.

             The  data  stack is accessed by the "PUSH," and "POP,"  8086 
        instructions.   All FORTH return stack operations are not  easily 
        accessible from inside CODE words.   Also,  because push, pop and 
        call  use  the  data stack,  you must be careful on how  to  pass 
        arguments  to subroutines as the arguments to be passed  will  be 
        covered  up by a "call" type statement unless you first pop  them 
        into registers in the calling routine.

             The 8086 registers are assigned by UNIFORTH as follows:

                  AX   general purpose register 
                  BX   general purpose register, also used by NEXT 
                  CX   general purpose register 
                  DX   general purpose register 
                  DI   general purpose register 
                  SI   the interpreter pointer, IP
                  BP   the FORTH "return stack", RP
                  SP   data stack pointer
                  CS   segment register.  Must be preserved
                  DS   segment register.  Must be preserved
                  SS   segment register.  Must be preserved
                  ES   temp seg register.  Only used by a few words.

        Any register labelled as general purpose can be used at any  time 
        by  any word.   Other registers can be used by the programmer  if 
        their contents are saved and restored.   DX is only used by ;CODE 
        and  can generally be used by the programmer as a general purpose 
        register.  DI may be used in future versions for storing the user 
        area pointer, so use it with caution in your applications.













        UNIQUE FEATURES OF UNIFORTH                        Page 3-10


             Here are some other points that may save you some grief.  As 
        shown  in  the  register assignment table,  SI is  used  for  the 
        interpreter  pointer.   String operations such as MOVS use SI  as 
        the  source address register.   Remember to save SI,  perform the 
        operation,  and then restore SI.  The UNIFORTH Sampler sets all 4 
        segment  registers equal.   You should therefore set DS=ES on all 
        string operations by a sequence similar to:

                       DS AX MOV,
                       AX ES MOV,

        (you can't MOVe directly between segment registers).   The  inner 
        interpreter,  NEXT,  assumes  that  the direction flag  has  been 
        cleared.  If you use STD in a word, be sure you reset it with CLD 
        before jumping to NEXT.

             The opcode mnemonics used in the assembler are basically the 
        same as used by Intel, except:

             1.  All instructions are reverse-polish.  For example,

                           Intel:  MOV CL,AH

                           FORTH:  AH CL MOV,


             2.   All instructions have a trailing comma.  This indicates 
                  that something is being stored in the dictionary by the 
                  instruction,  and also prevents multiple definitions as 
                  would be the case for XOR.

             3.   The calls,  unconditional jumps,  and returns have been 
                  divided into intrasegment versions (CALL, JMP, RET) and 
                  "long" intersegment versions (LCALL,LJMP,LRET).

             4.   The normal prefixes such as LOCK,  SEG, REP, BYTE, WORD 
                  are  coded  without  any suffixed  comma.   All  string 
                  operations assume byte mode unless overridden.

             5.   The assembler is definitely not user-proof.   The  only 
                  error  checking  is for removal of all items placed  on 
                  the stack during the definition (i.e.,  loops and bran-
                  ches properly terminated).  You, as the programmer, are 
                  responsible   for   knowing  proper   usage   of   each 
                  instruction.


















        UNIQUE FEATURES OF UNIFORTH                        Page 3-11


                                    NOTATION

        reg       any of the registers as appropriate
        cc        condition codes such as Z,NZ,CY,NC,GT,LT,LE,MI
        data      an 8-bit integer
        data16    a 16-bit integer
        addr      a 16-bit address
        addr32    a 32-bit address
        disp      a signed 8-bit displacement
        disp16    a signed 16-bit displacement


        Addressing modes:

             Intel                     FORTH
             MOV  AX,BX               BX AX MOV,
             MOV  AX,[DI]             [DI] AX MOV,
             MOV  AX,[BP+4]           4 [BP+] AX MOV,
             MOV  AX,[BP+DI]          [BP+DI] AX MOV,
             MOV  AX,[BP+DI+4]        4 [BP+DI+] AX MOV,
             MOV  AX,[4000]           4000 ) AX MOV,
             MOV  AX,32               32 # AX MOV,

        Instruction Specifics:

             Intel                    FORTH
             CALL addr32              addr32 LCALL,
             CALL disp16              addr CALL,
             REP BYTE CMPS            REP BYTE CMPS,
             ESC mem                  mem ESC,
             IN AX,32                 32  AX IN,
             INT  21                  21 INT,
             JMP addr32               addr32 LJMP,
             JMP  disp                addr JMP,
             LOOP disp                addr LOOP,
             RCL  AX,1                1 # AX RCL,
             RET disp16               disp16 RET,
             RET disp16               disp16 LRET,
             SEG  ES                  ES SEG,

        where  addr  is the actual address to which you  want  to  branch 
        (UNIFORTH calculates the appropriate offset).





















        UNIQUE FEATURES OF UNIFORTH                        Page 3-12


        13.6.2  Conditional Branching


             Several  branching structures have been included as in  high 
        level FORTH.   You can use IFs and BEGIN-UNTIL loops, in addition 
        to hard branching with JMP-style opcodes.

          cc IF,       Start a forward branch.   cc is the 8086 condition 
                       code  to be satisfied.   (Actually,  IF,  codes  a 
                       conditional jump of the opposite sense of cc).

          ELSE,        The branch for the case when the condition code is 
                       not satisfied.

          THEN,        Termination of an IF, statement.

          BEGIN,       Start of a block structure.

          cc UNTIL,    Branches back to BEGIN, until cc is satisfied.

          cc WHILE,    Executes   statements   following  while   cc   is 
                       satisfied.

          REPEAT,      End of a BEGIN, WHILE, sequence.

          DO,          Mark  the  beginning of a DO-LOOP.   Identical  to 
                       BEGIN,


        In each case of a conditional testing instruction,  you must have 
        set  or tested the condition codes before the instruction  execu-
        tion.   For example,  for 'NZ IF,' you could have executed 'BL AH 
        CMP,' before the IF, to set the condition codes.  Also, since the 
        conditionals  use the Intel conditional  jump  instructions,  all 
        branching must be less than 128 bytes in length.


        3.6.3  Examples


             Some of the best examples of CODE words can be found in your 
        library  disk.   Listed  below  are three simple  examples  as  a 
        further guide.

             For  more help in programming the 8086,  we highly recommend 
        the purchase of The 8086 Book, by Russel Rector and George Alexy, 
        Osborne  Press,  or The 8086 Primer,  by  Stephen  Morse,  Hayden 
        Press.















        UNIQUE FEATURES OF UNIFORTH                        Page 3-13


        Example  1.   Incrementing  the top stack value by the amount  in 
        variable INCREASE.

             VARIABLE INCREASE         ( initial value)
             2 INCREASE !     
          
             CODE BUMP                 ( define BUMP)
                 AX POP,               ( pop stack value into AX)
                 INCREASE ) DX MOV,    ( get increment into DX)
                 DX AX ADD,            ( add together)
                 APUSH,                ( put total back on stack)
                 END-CODE

        Example  2.   Adding  or subtracting 1 from the top  stack  value 
        depending on whether it is positive or negative respectively.

             CODE BIGGER               ( define BIGGER)
                  DX POP,              ( pop stack value into DX)
                  AX AX XOR,           ( clear AX)
                  DX AX CMP,           ( is value negative)
                  LT IF,               ( if LT, yes)
                  AX DEC,              (   so then subtract)
                  ELSE,                ( if not GT, then...)
                  AX INC,              (   increment)
                  THEN,                ( now end)
                  APUSH,               ( by pushing AX onto stack)
                  END-CODE

        Example 3.   Using a DO-LOOP construct with DO and LOOP.  Shift a 
        byte left n times.

             CODE LSHIFT               ( define LSHIFT)
                  CX POP,              ( get count)
                  AX POP,              ( byte to shift is now in AL)
                  DO,                  ( start of loop)
                  1 # AL ROL,          ( rotate left one bit)
                  LOOP,                ( continue until CX=0)
                  APUSH,               ( put rotated value back
                  END-CODE             (   on stack and end)



        3.7  Segment Utility

             A  short  utility  can be found  in  FORTH.FTH  that  allows 
        reading  and writing of data into the entire 1Mb address space of 
        the  8088.   The  utility can use either long  (32-bit)  absolute 
        addresses (in which case, the words are prefixed with an "L"), or 
        segment/offset addresses (words prefixed with "SEG").














        UNIQUE FEATURES OF UNIFORTH                        Page 3-14


             seg adr SEG@ n
                  Fetch the 16-bit value located at seg:adr.

             seg adr SEGC@ n
                  Fetch the 8-bit value located at seg:adr.

             n seg adr SEG!
                  Store the 16-bit value n at address seg:adr.

             n seg adr SEGC!
                  Store the 8-bit value n at address seg:adr.

             seg1 adr1 seg2 adr2 cnt SEGCMOVE
                  Move cnt bytes from seg1:adr1 to seg2:adr2.   Count has 
                  a maximum value of 64K-max(adr1,adr2).

             dadr L@ n
                  Fetch the 16-bit value located at address dadr.

             dadr LC@ n
                  Fetch the 8-bit value located at address dadr.

             n dadr L!
                  Store the 16-bit value n at address dadr.

             n dadr LC!
                  Store the 8-bit value n at address dadr.

             dadr1 dadr2 cnt LCMOVE
                  Move cnt bytes from dadr1 to dadr2.   Cnt has a maximum 
                  value of 64K.

             MYSEG val
                  Leave  on the stack the current segment number for  the 
                  code space (that is, CS).

             dadr ADR>SEG seg adr
                  Convert the 32-bit address into a segment number and  a 
                  16-bit offset.

             seg adr SEG>ADR dadr
                  Convert the seg:adr address into a 32-bit address.


        3.8  Deviations from FORTH-83


             We've sold FORTH-79 systems for years, but took 18 months to 
        decide to revise UNIFORTH to match the FORTH-83 Standard.   There 
        has been a lot of controversy about F83, with good reason.













        UNIQUE FEATURES OF UNIFORTH                        Page 3-15


             The primary problem is that FIG-FORTH and F79 programs  will 
        not  run  under F83.   The Standards committee changed the  basic 
        function of several words,  but kept their names the same.   This 
        means that the wealth of published FORTH software is not  useable 
        without recoding, so beware!

             UNIFORTH closely follows F83 with some exceptions.   Primary 
        amongst  these is the F83 requirement of floored division.   What 
        this  means  is  that integer truncation is  to  the  next  lower 
        number.   Dividing  -14  by 10 yields -2,  since  the  fractional 
        result   is   -1.4.    This  type  of  truncation   makes   sense 
        mathmatically  but  doesn't match your natural thinking  nor  the 
        currently available hardware.   All 8086,  68000,  PDP-11, Z8000, 
        etc.  processors  use  arithmetic where the result  is  truncated 
        towards zero.   Our example would then yield -1 as the result.

             Another  problem  is in handling the sign of the  remainder.  
        If you divide -14 by 10, is the remainder -4 or +4?  F83 requires 
        that  the  result by +4 (taking the sign of  the  divisor).   All 
        processors give remainders that use the sign of the dividend,  or 
        -4 in our example.  Again, UNIFORTH conforms to the hardware, not 
        the Standard.

             We've  left  many  words "immediate" (such  as  ."  and  all 
        vocabulary names).  F83 uses separate words for execution and for 
        compile.    F83's  UM*  is  UNIFORTH's  USS*D,   where  our  form 
        explicitly  tells  what  kind of mixed mode arithmetic  is  being 
        used.

             We're  not happy about the -1 truth flag.   While  it  makes 
        sense logically,  it makes error checking more difficult.  Beware 
        of F79 and FIG-FORTH uses of the truth flag!

             The  Programmer's Guide gives information on how to  convert 
        FIG-FORTH and F79 systems to UNIFORTH.

             There  is  much  more  about the Sampler  that  hasn't  been 
        discussed here.   Explore the system!  You may find features that 
        are of use.   The Manual Set describes the UNIFORTH  Professional 
        in  gory detail,  so you might take a look at it if you need more 
        help.






















        UNIQUE FEATURES OF UNIFORTH                        Page 3-1




                                    Chapter 4

                              WHAT YOU ARE MISSING


             Now that you have used UNIFORTH,  you might be interested in 
        how the Professional differs from the public domain Sampler.   We 
        recommend  writing  for our free,  complete catalog,  but  listed 
        below are some of the major differences in more technical detail.

        Multitasking
             The Professional is a fast multitasking system.   Tasks  can 
        be assigned priorities,  and messages can be passed between them.  
        Each  task  takes less than 1K bytes of memory,  so many  can  be 
        resident  at once.   We often build systems that include the user 
        task,  a  printer spooler,  a temperature background  acquisition 
        task,  and  a  telecommunications task,  where all  four  are  in 
        operation at once at no noticible degradation in response.

        Speed
             We've carefully optimized the Professional and use state-of-
        the-art  threading techniques to make the fastest possible  FORTH 
        system.   The  floating  point routines use a separate stack  for 
        fastest calculations.   You will find a 50% or larger improvement 
        in speed.

        Strings
             A full string package is included.   All the functions  that 
        you would find in BASIC,  such as MID$ and INSTR, are included so 
        that you can manipulate strings as easily as integers.

        Custom utilities
             The IBM PC Professional UNIFORTH includes files of functions 
        to access the keyboard, provide full musical note generation, and 
        to  draw  lines,  dots and filled polygons on the color  graphics 
        board.  In addition, every DOS2 system request is implemented.

        The fast video editor
             An  improved  video editor is included,  that  accesses  the 
        video memory directly.   Screens appear as fast on the screen  as 
        your  disk access will let them.   Extra functions such as multi-
        file editing,  line split and paste,  and adding blank blocks are 
        included.

        Source code
             You get the source code to everything except the 5Kb kernel.  
        In all, about 400Kb of source code is distributed.

        Debugger
             The  Professional  comes with a single-step  debugger/tracer 
        that can be used to track down errors in your code.  The data and 
        return  stacks  are displayed as each word  is  executed.   Break 









        WHAT YOU ARE MISSING                               Page 4-2


        points may be set.

        Decompiler
             A  complete decompiler will display any high-level  UNIFORTH 
        word on your screen.   This utility is highly useful to check the 
        syntax of a word or to retrieve an interactive definition.

        More systems
             The   Professional   UNIFORTH  is  available  for  a   dozen 
        processors and even more operating systems.  We will customize it 
        for  a particular computer,  create stand-alone systems  and  add 
        multi-user support as desired.

        Floating point
             Both hardware and software floating point is included.   The 
        hardware  floating  point uses the 8087,  gives both  single  and 
        double precision capability,  and provides some really impressive 
        speed gains.   Of course,  all opcode extensions to the assembler 
        are included.

        Documentation
             The   UNIFORTH  Professional  comes  with  500+   pages   of 
        documentation in a custom slipcase/binder.   All aspects of FORTH 
        are covered,  from a tutorial much like the one in this manual to 
        detailed   discussions   of   threading   techniques,    database 
        management,  forms generation,  coding conventions and much more.  
        Numerous examples are included to speed the learning process.

        Support
             You get 90 days of free hotline support.  Additional support 
        is also available.   We offer on-site classes.   The Professional 
        is offered with a 30-day money-back guarantee.

        Cross-compilers
             The  UNIFORTH cross-compiler requires the Professional,  and 
        supports many microprocessor targets.

             For  complete  information,  write  for  the  free  UNIFORTH 
        catalog.   If  you  just wish to order an MS/PCDOS  version  that 
        corresponds to this Sampler,  then use the catalog numbers listed 
        below.

        Cat #          Computer                      Price
        M22       Generic MSDOS 2.x                  $245
        M22P      IBM PC/XT/Jr DOS 2.x               $245
        M22T      TI Professional MSDOS 2.x          $245
        M22R      Rainbow 100 MSDOS 2.x              $245
        M22A      IBM PC/AT 80286 specific DOS 3.x   $295















        WHAT YOU ARE MISSING                               Page 4-3


        Other items of interest are listed below.

        Cat #          Sampler version               Price
        S21Z      Z80 CP/M 2.2                       $35
        S21P      IBM PC DOS 2.x                     $35
        S21A      Apple // (ProDos, 80col)      coming soon
        S21C      Commodore 64                  coming soon
        S21M      Macintosh                     coming soon

        Cat #          Item                          Price
        BK01      UNIFORTH Manual Set                $60
        BK11      Starting FORTH/Brodie              $17.95
        BK12      Thinking FORTH/Brodie              $15.95


        Ordering information:

             Specify your computer type and your disk format.   All items 
        are sent post-paid by UPS or First Class within the U.S.  Checks, 
        CODs,  money  orders  and purchase orders  in  U.S.  dollars  are 
        accepted.  Maryland residents add 5% sales tax.  Prices are valid 
        as of April 15,  1985 and may be different if ordering much later 
        than that date.  Make checks payable to:

                            Unified Software Systems
                                  P.O. Box 2644
                            New Carrollton, MD 20784
                                 (301) 552-9590


        Conclusions

             We  hope  that you have enjoyed using the UNIFORTH  Sampler.  
        It is a complete FORTH system that will provide you many years of 
        usefulness.   Please, let us know your impressions.  Did you find 
        FORTH worthwhile?   Are there bugs in this system?  What features 
        would  you  like to see?   Its through user input  and  community 
        discussion that FORTH will grow or die.  Cast your vote!

























ommunity 
        discussion that FORTH will grow or die.  Cast your vote!
```
{% endraw %}

## WORDS.DOC

{% raw %}
```








                                   Appendix A

                            UNIFORTH VOCABULARY LIST



             Listed on the next pages are definitions of all of the words 
        available  to  the user after invoking UNIFORTH.   The words  are 
        presented  in alphabetical order.   The first line of each  entry 
        consists of a symbolic description of the action of a  word,  the 
        interpreter characteristics, the level of word's standardization, 
        and the word's pronounciation.

             The  word action is shown in abbreviated form  by:   symbols 
        representing input parameters,  three dashes for the word  place-
        ment,  and  any parameters that might be left on the stack.   The 
        symbols used are:

                  n,n1,n2 ...         16-bit integer values
                  u,u1,u2 ...         16-bit unsigned integer values
                  d,d1,d2 ...         32-bit integer values
                  ud,ud1,ud2 ...      32-bit unsigned integer values
                  x,x1,x2 ...         32-bit floating point values
                  b,c                 8-bit values
                  cccc,ssss           character strings

        The interpreter characteristics are given below.

             C  The word may be used only within a colon definition.

             E  The  word  should  be executed;  it may not  normally  be 
                compiled within a colon-definition.

             I  The word has immediate action,  even when a colon word is 
                being defined.

             Words defined by the FORTH-83 Standards Team or by FIG-FORTH 
        essentially  follow  their  descriptions.    The  standardization 
        levels are given below.

             F  The word is part of the FORTH-83 Standard.

             G  The word is part of FIG-FORTH.

             U  The word is unique to UNIFORTH.














        UNIFORTH VOCABULARY LIST                                Page A-2




        !     n addr ---     F                            "store"
             Store n at address.

        !CSP                 
             Save the stack position in CSP.   Used as part of the compi-
             ler security.  

        !DATE     ---       U
             Store the date into time-keeping buffer CLKADR.   The system 
             will prompt you for input. 

        !TIME     ---       U     
             Store the time into time-keeping buffer CLKADR.   The system 
             will prompt you for input. 

        #      ud1 --- ud2     F                "sharp"
             The  remainder  of  ud1 divided by BASE is converted  to  an 
             ASCII  character and appended to the output  string  towards 
             lower  memory addresses.   Result ud2 is the quotient  after 
             division  by BASE and is maintained for further  processing.  
             Used between <# and #>.

        #>     d --- addr n     F               "sharp-greater"
             End pictured numeric output conversion.  Drop d, leaving the 
             text address and character count (as suitable for TYPE).

        #BUFF     --- adr
             A  variable containing the number of disk buffers  allocated 
             to the system.  

        #S     ud --- 0 0     F                 "sharp-s"
             Convert  all digits of an unsigned 32-bit number ud,  adding 
             each  to the pictured numeric output string,  until quotient 
             is zero.  A single zero is added to the output string if the 
             number  was  initially zero.   Use only between <#  and  #>. 

        #TIB      --- adr        F
             A variable containing the number of bytes in the text  input 
             buffer.

        $;;                U     
             basic case branch terminator word, compiled by ;; .  

        $<:                 U
             Basic case branch entry word, compiled by <:.

        $=:                U     
             Basic case branch entry word, compiled by =: .  

        $>:                 U
             Basic case branch entry word, compiled by >:.










        UNIFORTH VOCABULARY LIST                                Page A-3


        $CASE              U     
             Basic case beginning word, compiled by CASE.  

        '     --- addr     F,I             "tick"
             Used in the form:
                      ' <name>     
             Leave  the code field address of the next word accepted from 
             the  input stream.   An error condition exists if not  found 
             after  a search of the FORTH vocabulary.   Within  a  colon-
             definition  '  <name> is identical to [ ' <name> ]  LITERAL.  


        (                   F,I            "paren"
             Used in the form:
                     ( ccc)     
             Accept  and ignore comment characters from the input stream, 
             until  the  next right parenthesis.   As a  word,  the  left 
             parenthesis must be followed by one blank.  It may be freely 
             used  while  executing or  compiling.   An  error  condition 
             exists  if  the input stream is exhausted before  the  right 
             parenthesis.   The  right parenthesis is pronounced  "close-
             paren" 

        (+LOOP)     n ---     G     
             The  run-time procedure compiled by +LOOP,  which increments 
             the  loop  index by n and tests for  loop  completion.   See 
             +LOOP.   

        (.")               G          
             The run-time procedure,  compiled by ." which transmits  the 
             following  in-line text to the selected output device.   See 
             ."  

        (;CODE)               G     
             The run-time procedure, compiled by ;CODE, that rewrites the 
             code field of the most recently defined word to point to the 
             following machine code sequence.  See ;CODE.  

        (DO)               C,G     
             The  run-time procedure compiled by DO which moves the  loop 
             control parameters to the return stack.  See DO.  

        (FIND)     addr1 addr2 --- pfa b tf   (ok)    G           
                   addr1 addr2 --- ff        (bad)     
             Searches  the dictionary starting at the name field  address 
             addr2,  matching  to the text at addr1.   Returns  parameter 
             field  address,  length byte of name field and boolean  true 
             for  a good match.   If no match is found,  only  a  boolean 
             false is left.  

        (LATEST)   adr1 --- adr2 adr3     U
             Searching  at  vocabulary  line  adr1,  return  latest  word 
             address  in vocabulary (adr2) and a pointer to  the  correct 
             link thread (adr3).









        UNIFORTH VOCABULARY LIST                                Page A-4



        (LINE)     n1 n2 --- addr count     G     
             Convert  the  line number n1 and the screen n2 to  the  disk     
             buffer address containing the data.  The count  left  on the
             stack always is 64, the full line text length.  

        (LOOP)               G     
             The  run-time  procedure compiled by LOOP  which  increments     
             the loop index and tests for loop completion.  See LOOP.  

        (NUMBER)   adr --- d      G     
             Part of the numeric conversion process.  Called by NUMBER.

        (VALUE)     addr1 --- n     U     
             Convert  the ASCII text beginning at addr1+1 with regard  to     
             BASE.  The converted 16-bit value n is left on the stack.  

        *     n1 n2 --- n3     F           "times"
             Leave the arithmetic product of n1 times n2.

        */     n1 n2 n3 --- n4     F       "times-divide"
             Multiply  n1 by n2,  divide the result by n3 and  leave  the     
             quotient  n4.   n4 is rounded toward zero.   The product  of     
             n1  times  n2 is maintained as an intermediate 32-bit  value     
             for   greater  precision  than  the   otherwise   equivalent     
             sequence:  n1 n2 * n3 /

        */MOD     n1 n2 n3 --- n4 n5     F      "times-divide-mod"
             Multiply  n1  by n2,  divide the result by n3 and leave  the     
             remainder n4 and quotient n5.   A 32-bit intermediate result     
             is used as for */,  and the quotient is rounded toward zero.  
             The remainder has the same sign as the divisor, n1.

        +     n1 n2 --- n3     F           "plus"
             Leave the arithmetic sum of n1 plus n2.

        +!     n addr ---     F            "plus-store"
             Add n to the 16-bit value at the address,  by the convention     
             given for +.

        +@     n1 n2 --- n3     SYSTEM block 35     U     
             Add  n1 to n2 to create an address.   Fetch the contents  of 
             that address.  

        +DISK                    U
             Turn on text file echo.  Uses channel B.

        +LOOP     n ---     F,I            "plus-loop"
             Add the signed increment n to the loop index.  Return execu-
             tion  to  the  corresponding  DO  until  the  new  index  is 
             incremented across the boundary of limit-1 and limit.   Upon 
             exit from the loop, discard the loop control parameters.











        UNIFORTH VOCABULARY LIST                                Page A-5


        +ORIGIN    n --- addr     G     
             Leave  the  memory  address  relative by  n  to  the  origin 
             parameter area.   n is the minimum address unit, either byte 
             or  word.  This definition is used to access or  modify  the 
             boot-up parameters at the origin area. 

        +PRINTER                 U
             Enable  echo  to the printer as well as any  current  output 
             device.

        ,     n ---     F                       "comma"
             Allot two bytes in the dictionary, storing n there.

        -     n1 n2 --- n3     F           "minus"
             Subtract n2 from n1 and leave the difference n3.

        -->                G,I             "arrow"
             Continue interpretation with the next sequential block.  May 
             be used within a definition. 

        -ES       --- n          U
             Leave  the  negative of the system element size on the  data 
             stack.  For 16-bit systems, leaves -2.

        -FIND     --- pfa b tf   (found)     G          
                  --- ff         (not found)     
             Accepts  the  next  text word (delimited by blanks)  in  the 
             input  stream  to HERE,  and searches the CONTEXT  and  then 
             CURRENT vocabularies for a matching entry.   If  found,  the 
             dictionary entry's parameter field address, its length byte, 
             and a boolean true is left.  Otherwise, only a boolean false 
             is left. 

        -ROT     n1 n2 n3 --- n3 n1 n2     U     
             Rotate  the  top  stack value to the third  stack  position. 
             Inverse operation to ROT. 

        -TRAILING     addr n1 --- addr n2     F     "dash-trailing"
             The character count n1 of a text string beginning at addr is 
             adjusted  to  exclude trailing blanks.  An  error  condition 
             exists if n1 is negative.

        .     n ---     F                  "dot"
             Display n converted according to BASE in a free-field format 
             with  one  trailing blank.   Display only a  negative  sign.


















        UNIFORTH VOCABULARY LIST                                Page A-6


        ."              F,I                "dot-quote"
             Interpreted  or  used  in a colon-definition  in  the  form:                       
                       ." cccc"     
             Accept the following text from the input stream,  terminated 
             by  " (double-quote).   If executing,  transmit this text to 
             the selected output device.   If compiling,  compile so that 
             later  execution  will  transmit the text  to  the  selected 
             output device.   At least 127 characters are allowed in  the 
             text.   If   the  input  stream  is  exhausted  before   the 
             terminating double-quote,  an error condition exists.

        .(                       F
             Analogous to dot-quote, except the string is terminated with 
             a right-paren.  Execute mode only.

        .DATE          ---     U     
             Print  the  date on the current output devices in  the  form  
             dd-mmm-yy.

        .FSIZE    ---              U
             Display the current file's size in bytes

        .LINE     line scr ---     G     
             Print  on the terminal device,  a line of text from the disk 
             by  its  line  and  screen  number.    Trailing  blanks  are 
             suppressed. 

        .R     n1 n2 ---     G     
             Print  the number n1 right aligned in a field whose width is 
             n2.  No following blank is printed. 

        .S           ---     U
             Non-destructive print of the data stack contents.

        .TIME        ---     U     
             Print  the  time on the current output devices in  the  form  
             HH:MM:SS. 

        /     n1 n2 --- n3     F                     "divide"
             Divide  n1 by n2 and leave the quotient n3.   n3 is  rounded 
             toward zero.

        /MOD     n1 n2 --- n3 n4     F               "divide-mod"
             Divide n1 by n2 and leave the remainder n3 and quotient  n4. 
             n3 has the same sign as n1. n4 is rounded towards zero.

        0     --- 0     G     
             Leave the constant 0 on the stack. 

        0<     n --- flag     F                 "zero-less"
             True if n is less than zero (negative).

        0<=     n --- flag     U     
             True if n is less than or equal to zero. 









        UNIFORTH VOCABULARY LIST                                Page A-7



        0<>     n --- flag     U     
             True if n is not equal to zero. 

        0=     n --- flag     F                 "zero-equals"
             True is n is zero.

        0>     n --- flag     F                 "zero-greater"
             True if n is greater than zero.

        0>=     n --- flag     U     
             True if n is greater than or equal to zero. 

        0BRANCH     f ---     G     
             The  run-time  procedure to conditionally branch.   If f  is 
             false,  the  following  in-line parameter is  added  to  the 
             interpretive  pointer to branch ahead of back.   Compiled by 
             IF, UNTIL and WHILE. 

        1     --- 1     G     
             Leave the constant 1 on the stack. 

        1+     n --- n+1     F                  "one-plus"
             Increment n by one,  according to the operation for +.

        1+!     addr ---     U     
             Increment the contents of addr by 1. 

        1-     n --- n-1     F                       "one-minus"
             Decrement  n by one,  according to the  operation  minus.

        1-!     addr ---     U     
             Decrement the contents of addr by 1. 

        1.E1     --- n1     U     
             The floating point constant 10.0 .

        2     --- 2     G     
             Leave the constant 2 on the stack. 

        2!     d addr ---     F                      "two-store"
             Store  d in 4 consecutive bytes beginning at addr,  as for a 
             double number.

        2*     n1 --- n2     G     
             Multiply n1 by 2 (signed). 

        2+     n --- n+2     F                       "two-plus"
             Increment n by two,  according to the operation for +. 

        2+!     addr ---     U     
             Increment the contents of addr by 2. 











        UNIFORTH VOCABULARY LIST                                Page A-8


        2-     n --- n-2     F                       "two-minus"
             Decrement n by two,  according to the operation for minus. 

        2-!     addr ---     U     
             Decrement the contents of addr by 2. 

        2/     n1 --- n2     U     
             Divide n1 by 2 (signed). 

        2@     addr --- d     F                      "two-fetch"
             Leave  on  the stack the contents of  the  four  consecutive 
             bytes  beginning  at addr,  as for a double  number. 

        2>R     d1 ---     F     
             Remove  the  topmost 32-bit value from the  data  stack  and 
             place it on the return stack. 

        2CONSTANT     d ---     F                    "two-constant"
             A defining word used in the form:
                     d 2CONSTANT <name>     
             to  create a dictionary entry for <name>,  leaving d in  its 
             parameter field.   When <name> is later executed,  d will be 
             left on the stack.

        2DROP     d ---     F                   "two-drop"
             Drop the top double number on the stack.

        2DUP     d --- d d     F                "two-dup"
             Duplicate the top double number on the stack.

        2OVER     d1 d2 --- d1 d2 d1     F      "two-over"
             Leave a copy of the second double number on the stack.

        2R>     --- d1     F     
             Remove  the  topmost 32-bit value from the return stack  and 
             place it on the data stack. 

        2ROT     d1 d2 d3 --- d2 d3 d1     F     "two-rote"
             Rotate  the  third double number to the top  of  the  stack. 

        2SWAP     d1 d2 --- d2 d1     F         "two-swap"
             Exchange  the  top two double numbers on the  stack.

        2VARIABLE               F               "two-variable"
             Used in the form:
                       2VARIABLE <name>
             Create  a  dictionary entry for <name> and allocate 4  bytes 
             for  storage in the parameter field.   When <name> is  later 
             executed, it will leave the address of the first byte of its 
             parameter field on the stack.

        3     --- n     G     
             Leave the constant 3 on the stack. 










        UNIFORTH VOCABULARY LIST                                Page A-9


        4+    n1 --- n2     U
             Add 4 to the top stack value.

        4-    n1 --- n2     U
             Subtract 4 from the top stack value.

        8*     n1 --- n2     U
             Multiply n1 by 8 (3-bit left shift).

        :                    F                       "colon"
             A defining word used in the form:
                     : <name> . . . ;     
             Create a dictionary entry for <name>,  and set compile mode. 
             Words  thus  defined are  called  'colon-definitions'.   The 
             compilation  addresses  of subsequent words from  the  input 
             stream  which  are not immediate words are stored  into  the 
             dictionary  to  be executed when <name> is  later  executed. 
             IMMEDIATE  words are executed as encountered.   If a word is 
             not found after a search of the vocabulary,  conversion  and 
             compilation of a literal number is attempted, with regard to 
             the current BASE;  that failing,  an error condition exists.

        ;                 F,I,C                 "semi-colon"
             Terminate  a  colon  definition and  stop  compilation.   If 
             compiling  from  mass  storage  and  the  input  stream   is 
             exhausted before encountering ';' an error condition exists.

        ;;          U,I     
             Terminating  word of a satisfied CASE branch.   Branches  to 
             just after CASEND. 

        ;CODE             U,I     
             Used in the form:
                  : cccc . . . ;CODE . . . END-CODE     
             Stop  compilation and terminate a new defining word cccc  by 
             compiling  (;CODE).   Assemble the remaining mnemonics until 
             reaching END-CODE.  When cccc is later executed in the form:
                        cccc <name>     
             the word <name> will be created with its execution procedure 
             given by the machine instructions following ;CODE.  That is, 
             when <name> is executed,  it does so by jumping to the  code 
             after  ;CODE  of cccc.   An existing defining word (such  as 
             CREATE) must exist in cccc prior to ;CODE. 

        ;S                    G     
             Stop interpretation of a screen.

        <      n1 n2 --- flag     F                  "less-than"
             True  if  n1 is less than n2.   Two special  cases  must  be 
             considered.  ' -32768 32767 <' must return true, and '-32768 
             0' must be distinguished.












        UNIFORTH VOCABULARY LIST                                Page A-10


        <#                     F                "less-sharp"
             Initialize pictured numeric output.  The words: 
               <# ## #S HOLD SIGN #>     
             can be used to specify the conversion of a double- precision 
             number  into an ASCII character string stored  in  right-to-
             left order.

        <:                  U
             Start a less-than conditional in the case statement.

        <<               U     
             Mark the current stack position.   Used in conjunction  with 
             >> to fill an array. 

        <=     n1 n2 --- flag     U     
             True if n1 is less than or equal to n2. 

        <>     n1 n2 --- flag     U     
             Compare  n1  to n2.   If they are not equal,  leave  a  true     
             flag; otherwise, leave zero. 

        =     n1 n2 --- flag     F                   "equals"
             True if n1 is equal to n2.

        =:     n1 ---          U,I     
             Begin  a case comparison.   If satisfied,  execute the words     
             following  =:.   Otherwise,  jump to the word following  the     
             next ;; . 

        =CELLS    n1 --- n1      U
             Add 1 if necessary to make n1 an even number.

        >     n1 n2 --- flag     F                   "greater-than"
             True if n1 is greater than n2.

        >=     n1 n2 --- flag     U     
             True if n1 is greater than or equal to n2. 

        >>                  U     
             Used in the form:
                 << n1 n2 ... nn addr >>     
             this word stores all parameters n1, n2, ...nn into the array 
             starting at addr with n1 as the first element. 

        >BODY       adr1 --- adr2             F
             Move  from the code field address of a word to the parameter 
             field address (body).

        >IN     --- addr     F                       "to-in"
             Leave  the address of a variable which contains the  present 
             character  offset within the input stream {0...1023}   Note:  
             see WORD  (  ."  FIND 











        UNIFORTH VOCABULARY LIST                                Page A-11


        >LINK     adr1 --- adr2       F
             Move from the code field address of a word to its link field 
             address.

        >NAME     adr1 --- adr2       F
             Move from the code field address of a word to its name field 
             address.

        >R     n ---     F,C                    "to-r"
             Transfer n to the return stack.   Every >R must be  balanced 
             by  a  R> in the same control structure nesting level  of  a 
             colon-definition.

        ?     addr ---     F                    "question-mark"
             Display  the number at address,  using the format of  'dot'.

        ?ALIGN    ---       U    
             Force the dictionary pointer to an even address.

        ?BASE                U     
             Print the current base in decimal. 

        ?BLK     ---     U     
             Print the last accessed block in base 10. 

        ?COMP          G     
             Issue error message if not compiling.  

        ?CSP          G     
             Issue error message if stack position differs from the value 
             saved in CSP.

        ?DUP     n --- n  (n)     F             "query-dup"
             Duplicate n if it is non-zero.

        ?ERROR     f n ---     G     
             Issue  an  error message number n,  if the boolean  flag  is 
             true. 

        ?EXEC          G     
             Issue an error message if not executing. 

        ?KEY     --- n     U     
             Check  to see if a key has been struck on the  keyboard.  If 
             so, leave the ASCII value; otherwise, leave a zero. 

        ?LOADING          G     
             Issue an error message if not loading. 

        ?PAIRS     n1 n2 ---     G     
             Issue an error message if n1 does not equal n2.  The message 
             indicates that compiled conditionals do not match.  











        UNIFORTH VOCABULARY LIST                                Page A-12


        ?SAVE     adr --- adr     U     
             Flush buffer to disk if it has been updated.   Used by SAVE-
             BUFFERS. 

        ?STACK          G     
             Issue an error message if the stack is out of bounds.  

        ?TERMINAL     --- f     G     
             Perform a test of the terminal keyboard for actuation of any 
             key.  A true flag indicates actuation. 

        @     addr --- n     F                  "fetch"
             Leave on the stack the number contained at addr.

        @!     n addr ---     U     
             Fetch  the  contents of addr and use those contents  as  the 
             address into which to store n.  (indirect addressing) 

        @+     n1 addr --- n2     U     
             Fetch the contents of addr and add to n1. 

        A'        ---            U
             Used in the form:
                       A' c
             Leave  the  ASCII  code for character c  on  the  stack,  or 
             compile into the dictionary if in compile mode.

        ABORT          F     
             Clear  the  data and return stack,  setting execution  mode. 
             Return control to the terminal. 

        ABORT"    flag ---        F             "abort-quote"
             Used in the form:
                  flag ABORT" cccc"
             When  later executed,  if flag is true the characters  cccc, 
             delimited  by  the  close-quote,  are displayed and  then  a 
             abort sequence that includes ABORT is performed.  If flag is 
             false,  the  flag is dropped and execution  continues.   The 
             blank following ABORT" is not part of cccc.

        ABS     n1 --- n2     F                 "absolute"
             Leave the absolute value of a number.

        AGAIN     addr n ---     G     
             Used in a colon-definition in the form:
                    BEGIN . . . AGAIN
             At   run-time,   AGAIN   forces  execution  to   return   to 
             corresponding  BEGIN.   There  is no effect  on  the  stack.  
             Execution cannot leave this loop (unless R> DROP is executed 
             one level below). 













        UNIFORTH VOCABULARY LIST                                Page A-13


        ALLOT     n ---     F                   "allot"
             Allocate n bytes in the dictionary.  The address of the next 
             available dictionary location is updated accordingly.

        AND     n1 n2 --- n3     F     
             Leave the bitwise logical 'and' of n1 and n2. 

        ARRAY               U
             A defining word used in the form:
                  n ARRAY <name>     
             create a buffer n cells long (but not preset to zero).  When 
             <name>  is subsequently executed,  it leaves the address  of 
             the first element. 

        ASSEMBLER          F,I     
             The  name  of the  assembler  vocabulary.   Execution  makes 
             ASSEMBLER  the CONTEXT vocabulary.   ASSEMBLER is immediate, 
             so  it  will  execute  during  the  creation  of  a   colon-
             definition, to select this vocabulary at compile time. 

        AUTOLOAD  --- adr        U
             A  variable  containing  the block number  you  wish  to  be 
             automatically loaded when invoking UNIFORTH.

        B'     --- n     U
             Interpret the next number in base 2 (binary),  regardless of 
             the current base.

        B.     n ---     U
             Display  the  number in base 2 (binary),  regardless of  the 
             current base.

        B/BUF     --- n     G     
             Leave the number of bytes per buffer on the stack (1024). 

        BACK     addr ---          G     
             Calculate  the backward branch offset from HERE to addr  and 
             compile into the next available dictionary memory address. 

        BASE     --- addr     F     
             Leave  the  address  of a variable  containing  the  current 
             input-output numeric conversion base.  {2..70} 

        BASE'     ---     U
             A  defining  word used to create temporary  base  conversion 
             words.

        BASE.     ---     U
             A  defining  word  used to create  temporary  base  printing 
             words.













        UNIFORTH VOCABULARY LIST                                Page A-14


        BEGIN              F,I     
             Used in a colon-definition in the forms:
                     BEGIN . . . flag UNTIL       
             or             
                     BEGIN . . . flag WHILE . . . REPEAT     
             BEGIN  marks  the  start of a word sequence  for  repetitive 
             execution.   A BEGIN-UNTIL loop will be repeated until  flag 
             is  true.   A BEGIN-WHILE-REPEAT loop will be repeated until 
             flag  is  false.   The words after UNTIL or REPEAT  will  be 
             executed  when  either loop is  finished.   Flag  is  always 
             dropped after being tested. 

        BELL                  U     
             Send an ASCII 07 (bell) to the current output device. 

        BINARY                U     
             Change the current base to binary (base 2). 

        BL     --- c     G     
             A constant that leaves the ASCII value for a blank (32). 

        BLANKS     addr count ---     G     
             Fill an area of memory beginning at addr with count blanks. 

        BLK     --- addr     F                  "b-l-k"
             Leave the address of a variable containing the number of the 
             mass storage block being interpreted as the input stream. If 
             the  content  is zero,  the input stream is taken  from  the 
             text input buffer.

        BLOCK     n --- addr     F     
             Leave  the  address of the first byte in block  n.   If  the 
             block is not already in memory,  it is transferred from mass 
             storage into whichever memory buffer has been least recently 
             accessed.  If  the  block  occupying that  buffer  has  been 
             UPDATEd (i.e.  modified),  it is rewritten onto mass storage 
             before  block n is read into the buffer.   n is an  unsigned 
             number.   If   correct  mass  storage read or write  is  not 
             possible,  an error condition exists.

        BMOVE     blk1 blk2 n ---     U     
             Move  n  blocks starting at blk1 to the region  starting  at 
             blk2.  The  lowest  numbered block of region blk1  is  moved 
             first. 

        BMOVE>     blk1 blk2 n ---     U     
             Move  n  blocks starting at blk1 to the region  starting  at 
             blk2.   The  highest numbered block of region blk1 is  moved 
             first. 














        UNIFORTH VOCABULARY LIST                                Page A-15


        BRANCH          G     
             The  run-time procedure to unconditionally branch.   An  in-
             line  offset  is  added to the interpretive  pointer  IP  to 
             branch  ahead or back.   BRANCH is compiled by ELSE,  AGAIN, 
             REPEAT. 

        BS                  U     
             Send an ASCII 08 (backspace) to the current output device. 

        BSWAP     n1 --- n2     U     
             Swap the bytes of the 16-bit value n1. 

        BUFFER     n --- addr     F     
             Obtain the next block buffer,  assigning it to block n.  The 
             block  is  not  read from mass  storage.   If  the  previous 
             contents  of the buffer has been marked as  UPDATEd,  it  is 
             written to mass storage.  If correct writing to mass storage 
             is  not possible,  an error condition exists.   The  address 
             left  is the first byte within the buffer for data  storage.  
             n is an unsigned number.

        BYE       ---       U    
             Exit  UNIFORTH and return to your operating system,  closing 
             the current file in the process.

        C!      n addr ---       F              "c-store"
             Store the least significant 8-bits of n at addr.

        C,     n ---          G     
             Store  8 bits of n into the next available dictionary  byte, 
             advancing the dictionary pointer by one. 

        C/L     --- n     G     
             Leave the number of characters per line (64). 

        C@     addr --- byte     F                   "c-fetch"
             Leave  on  the stack the contents of the byte at addr  (with 
             the higher bits zero, in a 16-bit field).

        CARRAY     n ---     U
             A defining word used in the form:
                  n CARRAY <name>
             create a buffer n bytes long (but not preset to zero).  When 
             <name>  is subsequently executed,  it leaves the address  of 
             the first element.


















        UNIFORTH VOCABULARY LIST                                Page A-16


        CASE                U,I     
             A multiple-IF statement used in the form:
                  CASE
                      n1 =: . . . ;;
                      n2 >: . . . ;;
                      n3 <: . . . ;;
                      NOCASE =: . . . ;;
                 CASEND     
             It requires a testing value on the stack (it will be removed 
             by CASE).  n1, n2, ... are comparison value.  If the testing 
             value is equal to,  less than or greater than any of the set 
             (n1,n2,...),  then the words following the corresponding =:, 
             <:  or  >:  are executed,  followed by a branch  to  CASEND.  
             NOCASE is an optional test to satisfy all non-tested values. 

        CASEND          U,I     
             The terminating statement for CASE.   Drops the tested value 
             from the stack.  See CASE. 

        CBLIST     n1 n2 ---     U     
             List all blocks between n1 and n2 inclusive,  one at a time. 
             To  list  the next block,  hit any key.   To  terminate  the 
             listing abnormally, enter the escape key. 

        CDUMP     addr n ---     U     
             Dump n bytes starting at addr in hex format.   Sixteen bytes 
             are listed per line,  followed by their ASCII  equivalences. 
             Non-printing ASCII characters are indicated by periods.  You 
             can terminate abnormally by striking any key. 

        CHANA     ---       U  
             Make channel A the current default file channel.

        CHANB     ---       U 
             Make channel B the current default file channel.

        CLKADR     --- adr     U     
             The starting address of the 6-byte date and time buffer. 

        CLOSE        ---       U
             Close the current file.

        CLR-BLK     n ---     U     
             Fill block n with blanks, and put a ;S at its beginning. 

        CMOVE     addr1 addr2 n ---     F       "c-move"
             Move  n  bytes  beginning at address addr1  to  addr2.   The 
             contents  of  addr1 are moved first proceeding  toward  high 
             memory.   If n is zero or negative nothing is moved. 

        CMOVE>     adr1 adr2 n ---     F     
             Move  n  bytes  beginning  at address  adr1  to  adr2.   The 
             contents of adr1 are moved first preceeding from the end  of 
             the buffer toward low memory. 









        UNIFORTH VOCABULARY LIST                                Page A-17



        CMPS     adr1 adr2 cnt --- f     U     
             Compare  the string starting at adr1 to the string at  adr2, 
             each  with  length cnt bytes.   If str1 is less  than  str2, 
             leave -1 ; if str1 is equal to str2, leave zero ; if str1 is 
             greater than str2, leave one. 

        CODE               F,I     
             A defining word used in the form:
                       CODE <name> . . . END-CODE
             Create  a  dictionary entry for <name>,  and  set  execution 
             mode.   Words  thus compiled are called  'code-definitions'.  
             Used in creating assembly language routines.

        COLD          G     
             The cold start procedure to adjust the dictionary pointer to 
             the initial settings and restart via ABORT. 

        COMPILE               F,C     
             When  a word containing COMPILE executes,  the 16-bit  value 
             following  the  compilation  address of  COMPILE  is  copied 
             (compiled) into the dictionary.   That is,  COMPILE DUP will 
             copy the compilation address of DUP. 

        CONSTANT     n ---     F     
             A defining word used in the form:
                        n CONSTANT <name>     
             to  create a dictionary entry for <name>,  leaving n in  its 
             parameter field.   When <name> is later executed,  n will be 
             left on the stack. 

        CONTEXT     --- addr     F     
             A  user  variable  containing a pointer  to  the  vocabulary 
             within which dictionary searches will first begin. 

        CONTROLS?     adr cnt --- f     U     
             Check the buffer starting at adr with length cnt bytes.   If 
             there  are any control characters (ASCII 31 or less) in  the 
             buffer, leave a 1 on the stack; otherwise, leave a 0. 

        CONVERT     d1 addr1 --- d2 addr2     F     
             Convert  the ASCII text beginning at addr1+1 with regard  to 
             BASE.   The new value is accumulated into double number  d1, 
             being  left  as  d2.   Addr2  is the address  of  the  first 
             unconvertable digit.  Used by NUMBER.  

        COPY     n1 n2 ---     U     
             Copy block n1 into block n2. 

        COPYATOB       n1 n2 ---      U
             Copy block n1 from channel A to block n2 in channel B.












        UNIFORTH VOCABULARY LIST                                Page A-18


        COUNT     addr --- addr+1 n     F     
             Leave  the  address addr+1 and the character count  of  text 
             beginning at addr.   The first byte at addr must contain the 
             character count n.  Range of n is {0..255}. 

        CR                     F                          "c-r"
             Cause  a  carriage-return  and line-feed  to  occur  at  the 
             current output device.

        CREATE                F     
             A defining word used in the form:
                      CREATE <name>     
             to create a dictionary entry for <name>,  without allocating 
             any  parameter  field memory.   When <name> is  subsequently 
             executed,   the  address  of  the  first  byte  of  <name>'s 
             parameter field is left on the stack. 

        CSP     --- addr     G     
             A  user  variable  temporarily  storing  the  stack  pointer 
             position,     for compilation error checking. 

        CURRENT     --- addr     F     
             A variable containing the current vocabulary pointer. 

        D+     d1 d2 --- d3     F               "d-plus"
             Leave the arithmetic sum of d1 and d2.

        D-     d1 d2 --- d3     F                    "d-minus"
             Subtract d2 from d1 and leave the difference d3.

        D>S      d --- n     G     
             Truncate  the double precision value to its single precision 
             equivalent.  Same as DROP. 

        D.     d ---     F                      "d-dot"
             Display  d  converted  according to  BASE  in  a  free-field 
             format,  with one trailing blank.   Display the sign only if 
             negative.

        D.R     d n ---     F                   "d-dot-r"
             Display d converted according to BASE, right aligned in an n 
             character field.  Display the sign only if negative.

        D0<     d --- flag     U     
             Leave true if d is less than zero. 

        D0=     d --- flag     F                "d-zero-equals"
             Leave true if d is zero.

        D<     d1 d2 --- flag     F             "d-less"
             True if d1 is less than d2.  "d-less" 

        D=     d1 d2 --- flag     F             "d-equal"
             True is d1 equals d2.









        UNIFORTH VOCABULARY LIST                                Page A-19



        DABS     d1 --- d2     F           "d-abs"
             Leave as a positive double number d2,  the absolute value of 
             a double number, d1.  {0..2,147,483,647}

        DECIMAL             F

             Set the input-output numeric conversion base to ten. 

        DEFINITIONS               F     
             Used in the form:
                   cccc DEFINITIONS     
             Set  the CURRENT vocabulary to the CONTEXT  vocabulary.   In 
             the  example,  executing  vocabulary  name ccc made  it  the 
             CONTEXT  vocabulary  and  executing  DEFINITIONS  made  both 
             specify vocabulary cccc. 

        DELETE     ---     U
             When used in the form:
                       DELETE <fname>
             removes the file from the current directory.

        DEPTH     --- n     F     
             Leave  the number of the quantity of 16-bit values contained 
             in the data stack, before n was added. 

        DIGIT     c n1 --- n2 tf  (ok)        G
                  c n1 --- ff     (bad)     
             Converts the ASCII character c (using base n1) to its binary 
             equivalent  n2,   accompanied  by  a  true  flag.    If  the 
             conversion is invalid, leaves only a false flag. 

        DLITERAL     d --- d  (executing)     G
                     d ---    (compiling)     
             If compiling,  compile a stack double number into a literal. 
             Later  execution  of the definition containing  the  literal 
             will push it to the stack.   If executing,  the number  will 
             remain on the stack. 

        DMATRIX               U     
             A defining word used in the form:
                    n1 n2 DMATRIX <name>     
             to  create a dictionary entry for <name>,  making  a  double 
             precision  matrix  n1*n2*2 cells in length,  presetting  all 
             elements to zero.   When <name> is later executed,  it  uses 
             the  top stack parameter as the column number {0..n2-1}  and 
             the second stack parameter as the row number {0..n1-1},  and 
             returns the address of that element. 

        DMAX     d1 d2 --- d3     F             "d-max"
             Leave the larger of two double numbers. 

        DMIN     d1 d2 --- d3     F             "d-min"
             Leave the smaller of two double numbers.









        UNIFORTH VOCABULARY LIST                                Page A-20



        DNEGATE     d --- -d     F                   "d-negate"
             Leave the double number two's complement of a double number, 
             i.e., the difference 0 less d.

        DO     n1 n2 ---     F,I     
             Use in a colon-definition:
                       DO . . . LOOP
               or
                       DO . . . +LOOP     
             Begin   a  loop  which  will  terminate  based  on   control 
             parameters.  The  loop  index begins at n2,  and  terminates 
             based  on  the limit n1.   At LOOP or +LOOP,  the  index  is 
             modified  by a positive or negative value.   The range of  a 
             DO-LOOP is determined by the terminating word.   DO-LOOP may 
             be nested. 

        DOES>                 F,I,C                  "does"
             Define the run-time action of a word created by a high-level 
             defining word.  Used in the form:
                  : <name> . . . CREATE . . . DOES> . . . ;
                  and then  <name> <namex>     
             Marks  the termination of the defining part of the  defining 
             word <name> and begins the definition of the run time action 
             for  words  that  will  later  be  defined  by  <name>.   On 
             execution of <namex> the sequence of words between DOES> and 
             ;  will be executed, with the address of <namex>'s parameter 
             field on the stack.

        DP     --- addr     G     
             A user variable,  the dictionary pointer, which contains the 
             address   of  the  next  free  memory  location  above   the 
             dictionary.  The  value may be read by HERE and  altered  by 
             ALLOT. 

        DPL     --- addr     G     
             A user variable containing the number of digits to the right 
             of the decimal on floating point input. 

        DROP      n ---          F
             Drop the top number from the stack.

        DTOR      --- x1          U
             A constant containing the conversion factor from degrees  to 
             radians.

        DU<     ud1 ud2 --- flag     F               "d-u-less"
             True  if ud1 is less than ud2.   Both numbers are  unsigned.

        DUMP     addr n ---     G     
             Dump  n cells starting at addr.   Eight cells are listed per 
             output line in the current base.  The dump can be terminated 
             abnormally by striking any key. 










        UNIFORTH VOCABULARY LIST                                Page A-21


        DUP     n --- n n     F     
             Leave a copy of the top stack number. 

        DVECTOR                U     
             A defining word used in the form:
                   n DVECTOR <name>     
             to  create  a dictionary entry for <name> and make a  double 
             precision  vector,  preset to zero.   When <name>  is  later 
             executed,  it  uses  the  top stack value as  an  index  and 
             returns the corresponding element address <stgadr+2*value>.

        E.        x ---          U
             Print floating point number in free-format exponent form.

        E-        n1 --- n2      U
             Subtract the current element size from the top stack value.

        E+        n1 --- n2      U
             Add the current element size to the top stack value.

        EDIT     n ---     U     
             Start editing block (screen) number n. 

        EDITOR          U     
             The name of the video editor vocabulary. 

        EI+       n1 --- n2      U
             Add the loop index*element size to the top stack value.

        EI+!      n1 adr ---     U
             Add the loopindex*elementsize to the address,  and store  n1 
             at the resultant address.

        EI+@      n1 --- n2      U
             Add the loopindex*elementsize to the top stack value.  Using 
             the result as an address, fetch the contents.

        EI-       n1 --- n2      U
             Subtract the loopindex*elementsize from the top stack value.

        ELSE          F,I     
             Used in a colon-definition in the form:
                   IF . . . ELSE . . . THEN     
             ELSE executes after the true part following IF.  ELSE forces 
             execution to skip till just after THEN.  It has no effect on 
             the stack.  (See IF) 

        EMIT     char ---     F     
             Transmit character to the current output device. 














        UNIFORTH VOCABULARY LIST                                Page A-22


        EMPTY-BUFFERS          F     
             Mark  all  block  buffers  as  empty,   without  necessarily 
             affecting  their actual contents.   UPDATEd blocks  are  not 
             written to mass storage. 

        ENCLOSE     adr1 c --- adr1 n1 n2 n3     KERNEL     G     
             The  text  scanning primitive used by WORD.   From the  text 
             address  adr1 and an ASCII delimiting character  c,  ENCLOSE 
             determinines  the  byte offset to  the  first  non-delimiter 
             character  n1,  the offset to the first delimiter after  the 
             text n2, and the offset to the first character not included. 
             This  procedure  will  not  process past  an  ASCII  'null', 
             treating it as an unconditional delimiter. 

        END-CODE    ---     F
             Terminate a machine-code definition.

        ER1     ---     U
             An error handling word.

        ER2     ---     U
             An error handling word.

        ER3     ---         U
             An error handling word.

        ERASE     addr nbytes ---     G     
             Clear a region of memory to zero starting at addr. 

        ERCODE         --- n          U
             Return the last disk error code.

        ERROR     line ---     G     
             Execute error notification and possible restart of system.

        ES        --- n          U
             Leave the element size of the current system (16-bit = 2).

        EXCHANGE     n1 n2 ---     U     
             Exchange the contents of disk blocks n1 and n2. 

        EXECUTE     addr ---     F     
             Execute the dictionary entry whose code field address is  on 
             the stack. 

        EXIT          F,C     
             When compiled within a colon-defintion,  terminate execution 
             of that definition, at that point.  May not be used within a 
             DO-LOOP. 














        UNIFORTH VOCABULARY LIST                                Page A-23


        EXPECT     addr n ---     F     
             Transfer  characters  from the terminal beginning  at  addr, 
             upward,  until  a  "return"  or  the count  of  n  has  been 
             received.  Take  no action for n less than or equal to zero.  
             The  number  of  characters received is stored  in  variable 
             SPAN.

        EXPECTBL  addr n ---          U
             Same  as EXPECT except leaves a blank (ASCII 32)  after  the 
             entered string.

        EXTEND     n ---       U   
             Extend the current file by n blocks,  setting  each to blank
             except for a ";S" in the first bytes.

        F*     x1 x2 --- x3     U     
             Multiply x1 by x2, leaving the floating point result x3. 

        F/     x1 x2 --- x3     U     
             Divide x1 by x2, leaving the floating point result x3. 

        F+     x1 x2 --- x3     U
             Add x1 to x3, leaving the floating point result x3. 

        F-     x1 x2 --- x3     U
             Subtract x2 from x1, leaving the floating point result x3. 

        F.        x1 ---         U
             Print floating point number in free format.  #digits printed 
             is limited by constant FPSIG.

        FACOS          x1 --- x2   U
             Take the arc-cosine of an angle (x2 in radians).

        FALSE          --- n          U
             Return the value of a false flag (0).

        FASIN          x1 --- x2      U
             Take the arc-sine of an angle (x2 in radians).

        FATAN          x1 --- x2      U
             Take the arc-tangent of an angle (x2 in radians).

        FCB       --- n1         U
             Leave the address of the current File Control Block.

        FCONSTANT      x ---     U
             A defining word used in the form:
                  n FCONSTANT <name>
             To  create  a  dictionary  entry  for  <name>,  leaving  the 
             floating  point  constant x in its  parameter  field.   When 
             <name> is later executed, n will be left on the stack.











        UNIFORTH VOCABULARY LIST                                Page A-24


        FCOS      x1 --- x2      U
             Take the cosine of an angle (radians).

        FENCE     --- G
             A user variable containing an address below which FORGETting 
             is trapped.  To forget below this point, the user must alter 
             the contents of FENCE. 

        FEXP      x1 --- x2      U
             Raise x1 to the e power.

        FILESTATUS     ---       U
             List on the console information about the current file.

        FILL     addr n byte ---     F     
             Fill memory beginning at address with a sequence of n copies 
             of byte.   If the quantity n is less than or equal to  zero, 
             take no action. 

        FIND     --- addr     U     
             Leave  the compilation address of the next word name,  which 
             is accepted from then input stream.   If that word cannot be 
             found in the dictionary after a search, leave zero. 

        FIRST     --- n     G     
             A  variable that leaves the address of the  first  (lowest) 
             block buffer. 

        FIX     x1 --- d1     U
             Convert floating point x1 to a double precision integer d1. 

        FLD     --- addr     G     
             A user variable for control of number output field width. 

        FLN       x1 --- x2      U
             Take the natural (base e) logarithm of x1.

        FLOAT     d1 --- x1     U
             Convert  double  precision  integer  d1  to  the  equivalent 
             floating point value x1. 

        FLOG2     x1 --- x2      U
             Take the log base 2 of x1.

        FLOG10    x1   --- x2         U
             Take the common logarithm (base 10) of x1.

        FLUSH     ---     U,G
             A synonym for SAVE-BUFFERS.














        UNIFORTH VOCABULARY LIST                                Page A-25


        FMATRIX        n1 n2 ---      U
             A defining word used in the form:
                       n1 n2 FMATRIX <name>
             to  create  a  dictionary  entry for  <name>,  making  a  2-
             dimensional floating point matrix n1*n2 elements in  length.  
             When  <name>  is  later  executed,  it uses  the  top  stack 
             parameter  as  the column number {0..n2-1}  and  the  second 
             stack parameter as the row number {0..n1-1}, and returns the 
             address of that element.

        FNEGATE     x1 ---  -x1      U
             Change the sign of the floating point number x1. 

        FORGET                  F     
             Execute in the form:
                    FORGET <name>     
             Delete from the dictionary <name> and all words added to the 
             dictionary after <name>.  Failure to find <name> is an error 
             condition. 

        FORM               U     
             Send an ASCII 12 (formfeed) to the current output devices. 

        FORTH               F     
             The  name of the primary vocabulary.   Execution makes FORTH 
             the CONTEXT vocabulary.   Until additional user vocabularies 
             are  defined,  new user definitions become a part of  FORTH. 
             FORTH is immediate,  so it will execute during the  creation 
             of a colon-definition,  to select this vocabulary at compile 
             time. 

        FSIN      x1 --- x2      U
             Take the sine of an angle (radians).

        FSQRT     x1 --- x2      U
             Take the square root of x1.

        FTAN      x1 --- x2      U
             Take the tangent of an angle (radians).

        FVARIABLE      ---       U
             A defining word executed in the form:
                       FVARIABLE <name>
             to  create a dictionary entry for <name> and allot space for 
             one  floating-point element in its  body.   The  application 
             must  initialize  the stored value.   When <name>  is  later 
             executed, it will place the storage address on the stack.
















        UNIFORTH VOCABULARY LIST                                Page A-26


        FVECTOR        n ---          U
             A defining word used in the form:
                       n FVECTOR <name>
             to  create a dictionary entry for <name> ana allot space for 
             n floating-point elements (a one-dimensional vector).   When 
             name  is later executed,  it uses the top stack value as  an 
             index  {0..n-1}  into the array and returns the  address  of 
             that element.

        GETBUF    blk# --- bufadr flag     U
             Examine the block buffers,  and return the address of one of 
             them.  If that buffer has been updated, flag=true.

        GETNUM     --- val     U     
             Interactively bring in the next number from the keyboard. 

        H'     --- n     U
             Interpret the next number in hex,  regardless of the current 
             base.

        H.     n ---     U     
             Print the top stack value in hexadecimal,  regardless of the 
             current base. 

        HASH      stradr vocptr --- stradr vocthd         U
             Used for "hashing" the dictionary into 4 threads.

        HDUMP     addr n ---     U     
             Same  as DUMP,  but in hexadecimal regardless of the current 
             base. 

        HERE     --- addr     F     
             Return   the  address  of  the  next  available   dictionary 
             location. 

        HEX               G     
             Change the current numberic input base to hexadecimal  (base 
             16). 

        HLD     --- addr     G     
             A  user  variable  that  holds the  address  of  the  latest 
             character of text during numeric output conversion. 

        HOLD     char ---     F     
             Insert char into a pictured numeric output string.  May only 
             be used between <# and #>. 

        I     --- n     F,C     
             Copy  the loop index onto the data stack.   Can only be used 
             in the forms
                   DO . . . I . . . LOOP   
             or 
                  DO . . . I . . . +LOOP 










        UNIFORTH VOCABULARY LIST                                Page A-27


        I+        n1 --- n2      U
             Add index I to the top stack value. 

        I-     n1 --- n2     U,C     
             Subtract index I from the top stack value. 

        ID.     addr ---     G     
             Print a definition's name from its name field address. 

        IF     flag ---     F,I     
             Used in a colon-definition in the forms:
                  flag IF . . . ELSE . . . THEN
              or
                  flag IF . . . THEN     
             If flag is true, the words following IF are executed and the 
             words  following  ELSE  are  skipped.    The  ELSE  part  is 
             optional.  If flag is false,  words between IF and ELSE,  or 
             between  IF  and THEN (when no ELSE is used),  are  skipped.  
             IF-ELSE-THEN conditionals may be nested. 

        IMMEDIATE               F     
             Mark the most recently made dictionary entry as a word which 
             will be executed when encountered during compilation  rather 
             than compiled. 

        INCLUDE        n1 ---    U
             Used in the form:
                  INCLUDE <fname>
             Close the current file,  saving any updated blocks.   Switch 
             to  file  fname,  load  block 01,  and then  return  to  the 
             original file.  Only one level of nesting is allowed.

        INDEX     n1 n2 ---     G     
             Print  the first line of each screen over the range n1 to n2 
             inclusive.   This  is used to view the comment lines  of  an 
             area of text on disk screens. 

        INDGEN     addr n ---     U     
             Fill  n cells starting at addr with the cell  number.   That 
             is, (addr)=0, (addr+2)=1, (addr+4)=2, ...  Used to preset an 
             array to its element numbers. 

        INTERPRET              G     
             The  outer  text interpreter which sequentially executes  or 
             compiles  text  from  the input stream  (terminal  or  disk) 
             depending on STATE.   If the word name cannot be found after 
             a search of CONTEXT and CURRENT,  then it is converted to  a 
             number according to the current base.  That also failing, an 
             error message echoing the name with a "?" will be given. 

        IO!     val port ---     U     
             Store the 16-bit value val into port. 











        UNIFORTH VOCABULARY LIST                                Page A-28


        IO@     port --- val     U     
             Fetch a 16-bit value from a port. 

        IOBYTE     --- addr      U     
             A variable containing the printer/terminal output flag. 

        IOC!    val port ---     U     
             Store the 8-bit value val into port. 

        IOC@     port --- val     U     
             Fetch an 8-bit value from a port. 

        J     --- n     F,C     
             Return  the index of the next outer loop.   May be used only 
             within a nested DO-LOOP in the form:
                  DO . . . DO . . . J . . . LOOP . . . LOOP 

        KEY     --- char     F     
             Leave  the ASCII value of the next available character  from 
             then current input device. 

        LATEST     --- addr     G     
             Leave  the  name field address of the topmost  word  in  the 
             CURRENT vocabulary. 

        LEAVE               F     
             Force   immediate  termination  of  a  DO-LOOP.    Execution 
             continues after the next LOOP or +LOOP.

        LF              U     
             Send an ASCII 10 (linefeed) to the current output device. 

        LIMIT     --- n     G     
             A variable leaving the address just above the highest memory 
             available  for a disk buffer.   Usually this is the  highest 
             system memory. 

        LINE     n1 --- n2     U     
             Leave  the buffer address n2 of the n1th line in the current 
             screen (pointed to by SCR). 

        LIST     n ---     F     
             List the ASCII symbolic contents of screen n on the  current 
             output device, setting SCR to contain n.  n is unsigned. 

        LIT     --- n     G     
             Within  a  colon-definition,  LIT is automatically  compiled 
             before each 16-bit literal number encountered in input text.  
             Later  execution  of  LIT causes the contents  of  the  next 
             dictionary address to be pushed to the stack. 













        UNIFORTH VOCABULARY LIST                                Page A-29


        LITERAL     n ---     F,I     
             If  compiling,  then compile the stack value n as  a  16-bit 
             literal,  which  when  later executed,  will leave n on  the 
             stack. 

        LOAD     n ---     F     
             Begin  interpretation  of screen n by making  it  the  input 
             stream;  preserve  the locators of the present input  stream 
             (from  >IN  and BLK).   If interpretation is not  terminated 
             explicitly  it will be terminated when the input  stream  is 
             exhausted.    Control  then  returns  to  the  input  stream 
             containing LOAD, determined by the input stream locators >IN 
             and BLK. 

        LOOP            F,I     
             Increment  the DO-LOOP index by one,  terminating  the  loop 
             when  the new index crosses the boundary between limit-1 and 
             limit.

        LOWUP     --- adr        U
             A variable containing the flag that determines if input text 
             is  to  be  converted to upper  case  before  searching  the 
             dictionary.

        M/MOD     d n1 --- n2 n3     G     
             A  mixed  magnitude  math operator which leaves  the  signed 
             remainder  n2 and signed quotient n3,  from a double  number 
             dividend and divisor n1.   The remainder takes its sign from 
             the dividend. 

        MAKE      ---       U
             Used in the form:
                  MAKE <fname>
             Create a new file called fname.  After MAKE is executed, you 
             are left in the new file.

        MAKE-CHAN      ---       U
             Make a new FCB/channel for file access.

        MATCH    adr1 n1 adr2 n2 --- n3     U     
             Find  the  string  starting at adr2 (n2 bytes long)  in  the 
             larger string starting at adr1 (n1 bytes long,  n1>n2). If a 
             match  occurs,  leave  the address (in buffer adr1)  of  the 
             first correct character; otherwise, leave 0. 

        MATRIX            U     
             A defining word used in the form: 
                       n1 n2 MATRIX <name>     
             to  create  a  dictionary  entry for  <name>,  making  a  2-
             dimensional array (matrix) n1*n2 cells in length, presetting 
             all  elements to zero.   When <name> is later  executed,  it 
             uses the top stack parameter as the column number  {0..n2-1} 
             and  the second stack parameter as the row number {0..n1-1}, 
             and returns the address of that element.  









        UNIFORTH VOCABULARY LIST                                Page A-30



        MAX     n1 n2 --- n3     F                        "max"
             Leave the greater of two numbers.

        MAXI     --- n1     U,C     
             Copy  the maximum iteration counter of the  current  DO-LOOP 
             from the return stack to the data stack. 

        MCOPY     n1 n2 n3 ---     U 
             Copy  n3  blocks  from channel A (starting at block  n1)  to 
             channel B (starting at block n2).

        MESSAGE     n ---     G     
             Print  on  the  selected output device the text  of  line  n 
             relative  to  screen 200 of drive 0.   n may be positive  or 
             negative.  MESSAGE may be used to print incidental text such 
             as  report headers.   If WARNING is zero,  the message  will 
             simply be printed as a number (disk not available).

        MIN         n1 n2 --- n2     F               "min"
             Leave the lesser of two numbers.

        MOD         n1 n2 --- n3     F                    "mod"
             Divide  n1 by n2,  leaving the remainder n3,  with the  same 
             sign as n1.

        MOVE     addr1 addr2 n ---     F     
             Move  the  specified  quantity  n  of  16-bit  memory  cells 
             beginning  at addr1 into memory at addr2.   The contents  of 
             addr1 is moved first.   If n is negative or zero, nothing is 
             moved. 

        MS     n ---     G     
             Delay n milliseconds before continuing execution. 

        MSGBLK     --- adr     U
             Used  by MESSAGE.   A variable containing the starting block 
             number on which messages are stored.

        NAME>     adr1 --- adr2       F
             Convert  the  name  field address adr1 of a  word  into  its 
             corresponding code field address adr2.

        NEGATE     n --- -n     F     
             Leave the two's complement of a number, i.e., the difference 
             of 0 less n. 

        NOCASE     n1 --- n1 n1     U     
             Same as DUP, used in CASE statement. 

        NOOP     ---           G     
             Perform no operation whatsoever. 











        UNIFORTH VOCABULARY LIST                                Page A-31


        NOT     n1 --- n2     U     
             Perform the one's complement of n1. 

        NUMBER     addr --- d     G     
             Convert  a character string left at addr with  a  preceeding 
             count,  to a signed double number, using the current numeric 
             base.   If  numeric  conversion is not  possible,  an  error 
             message will be given. 

        O'     --- n     U
             Interpret  the  next number in base  8,  regardless  of  the 
             current base.

        O.     n ---     U     
             Print n in octal, regardless of the current base. 

        OCTAL          U     
             Change  the  current numeric conversion base to octal  (base 
             8). 

        ODUMP     addr n -----     U     
             Same  as  DUMP,  except output is in  octal,  regardless  of 
             current base. 

        OFFSET     --- addr     U     
             A  user variable which contains the sector offset  from  the 
             beginning of the current drive.  This offset is added to all 
             sector   requests.    Note   the  difference  between   this 
             definition and the FIG definition. 

        OPEN      ---       U 
             Used in the form:
                  OPEN <fname>
             This  word attempts to open file fname for future  I/O.   If 
             fname  does  not currently exist,  UNIFORTH will  query  you 
             about creating it.

        OR     n1 n2 --- n3     F     
             Leave the bitwise inclusive-or of two numbers. 

        OUT     --- addr     G     
             A  user variable that contains a value incremented by  EMIT. 
             The  user  may  alter and examine  OUT  to  control  display 
             formatting. 

        OVER     n1 n2 --- n1 n2 n1     F     
             Leave a copy of the second number on the stack. 

        P+     n1 n2 n3 n4 --- n5 n6     U     
             Perform addition of an ordered pair.  The results are:
                  n5=n1+n3       n6=n2+n4     
             Used in the editor for offsets on x,y cursor positioning. 











        UNIFORTH VOCABULARY LIST                                Page A-32


        PAD     --- addr     F     
             The address of a scratch area used to hold character strings 
             for intermediate processing.  The minimum capacity of PAD is 
             64 characters (addr through addr+63). 

        PICK     n1 --- n2     SYSTEM block 25     F     
             Return  a  copy of the n1th stack  value,  not  counting  n1 
             itself.  Aero relative:  1 PICK is equivalent to OVER.

        PLUS?     --- flag     U
             A  flag for Z.R.   If PLUS?  is nonzero,  Z.R will include a 
             plus sign preceding all positive numbers.

        PRECIS     --- adr     U     
             A USER variable containing the precision flag  (0=16,  1=32, 
             integer; 2=32-bit floating) of the last number converted. 

        PREMIT     b ---     U     
             Send a single ASCII character to the printer. 

        PREV     --- addr     G     
             A  variable  containing the address of the disk buffer  most 
             recently referenced.   The UPDATE commands marks this buffer 
             to be later written to disk. 

        PRINTER               U     
             Select the printer to be the current output device. 

        QUERY               F     
             Accept  input  of up to 80 characters (or until a  'return') 
             from  the  operator's  terminal,  into  the  terminal  input 
             buffer.  WORD may be used to accept text from this buffer as 
             the input stream, by setting >IN and BLK to zero. 

        QUIT                F     
             Clear the return stack,  setting execution mode,  and return 
             control to the terminal.  No message is given. 

        R#     --- addr     G     
             A user variable which may contain the location of an editing 
             cursor, or ther file related function. 

        R/W     addr blk f ---     G     
             The primitive block-oriented disk read/write routine.   Addr 
             specified the source or destination block buffer, blk is the 
             sequential number of the referenced block,  and f is a  flag 
             (f=0,  write;  f=1,  read).   R/W determines the location on 
             mass   storage,   performs  the  read/write  and  all  error 
             checking. 

        R>     --- n     F,C     
             Transfer  n from the return stack to the  data  stack.   "r-
             from" 










        UNIFORTH VOCABULARY LIST                                Page A-33


        R0     --- addr     G     
             A  user  variable  containing the initial  location  of  the 
             return stack.  "r-zero"  See RP! 

        R@     --- n     F,C     
             Copy  the number on the top of the return stack to the  data 
             stack.  "r-fetch" 

        REMSPACE             G     
             Print   the   remaining  space  (in  bytes)  available   for 
             dictionary entries. 

        REPEAT              F,I,C
             Used in a colon-definition in the form:
                  BEGIN . . . WHILE . . . REPEAT     
             At run-time,  REPEAT returns to just after the corresponding 
             BEGIN. 

        ROLL     n ---     F     
             Extract  the n-th stack value to the top of the  stack,  not 
             counting  n  itself,  moving the remaining values  into  the 
             vacated  position.   An error condition results for  n  less    
             than  one.   3  ROLL is the same as ROT.   1 ROLL is a  null 
             operation. 

        ROT     n1 n2 n3 --- n2 n3 n1     F     
             Rotate  the top three values,  bringing the deepest  to  the 
             top.  "rote" 

        RP@     --- n1     G     
             Copy  the address that the return stack pointer is  pointing 
             to onto the data stack. 

        RP!          G     
             Initialize the return stack pointer from user variable R0. 

        S>D     n --- d     G     
             Sign  extend a single 16-bit number to form a double  32-bit 
             number. 

        S0     --- addr     G     
             A  user  variable that contains the initial  value  for  the 
             stack pointer.  "s-zero"   See SP!  

        SAVE-BUFFERS             F     
             Write  all blocks to mass storage that have been flagged  as 
             UPDATEd.  An error condition results if mass storage writing 
             is not completed.  A synonym is FLUSH. 

        SCR     --- addr     F     
             Leave the address of a variable containing the number of the 
             screen most recently listed.  "s-c-r" 











        UNIFORTH VOCABULARY LIST                                Page A-34


        SHIFT     n1 n2 --- n3     U     
             Shift n1 by n2 bits right or left.   If n2 is negative,  the 
             shift is to the left; if positive, to the right. 

        SHOW     n1 n2 ---     G     
             List  all blocks at least including n1 through n2  in  TRIAD 
             form. 

        SHUCK    adr1 adr2 ---     U
             Remove all words following adr1 in the vocabulary pointed to 
             by adr2.

        SIGN     n ---     F,C     
             Insert  the ASCII "-" (minus sign) into the pictured numeric 
             output string, if n is negative. 

        SIGNON               U     
             A  word that prints the signon message of UNIFORTH and  then 
             enters ABORT. 

        SMUDGE               G
             Used  during word definition to toggle the "smudge bit" in a 
             definition's  name  field.   This  prevents  an  uncompleted 
             definition  from  being found  during  dictionary  searches, 
             until compiling is completed without error. 

        SP!               G     
             Initialize the data stack pointer from user variable S0. 

        SP@     --- addr     G     
             Return the address of the data stack position (that is,  the 
             value  of the stack pointer) to the top of the stack,  as it 
             was before SP@ was executed. 

        SPACE              F     
             Transmit an ASCII blank to the current output device. 

        SPACES     n ---     F     
             Transmit  n spaces to the current output  device.   Take  no 
             action for n of zero of less. 

        SPAN      --- adr        F
             A  variable containing the number of characters input during 
             the last EXPECT.

        SS*D     n1 n2 --- d     G     
             A  mixed  magnitude math operation which leaves  the  double 
             number  signed  product of two  signed  integers.   Warning:  
             this name may be changed to S*SD in future releases. 














        UNIFORTH VOCABULARY LIST                                Page A-35


        STATE     --- addr     F     
             Leave the address of the variable containing the compilation 
             state.    A   non-zero  content  indicates  compilation   is 
             occurring,   but   the  value  itself  may  be  installation 
             dependent. 

        SUBROUTINE          U     
             A defining word used in the form:
                 SUBROUTINE <name> . . . END-CODE     
             to create a machine-language word that is only callable from 
             other machine-language words.  It has no code field address.  
             Executing  <name>  at a later time puts the address  of  the 
             first machine-code instruction on the stack.   <name>  would 
             be used like:
             CODE XX . . . <name> CALL, . . . <name> JMP, . . . END-CODE     
             by another word. 

        SWAP     n1 n2 --- n2 n1     F     
             Exchange the top two stack values. 

        TERMINAL          U     
             Select the system console for further output. 

        THEN                 F,I     
             Used in a colon-definition in the form:
                   IF . . . ELSE . . . THEN
            or
                   IF . . . THEN     
             THEN  is the point where execution resumes after ELSE or  IF 
             (when no ELSE is present). 

        TIB     --- addr     G     
             A user variable containing the address of the terminal input 
             buffer. 

        TLOAD          ---       U
             Load  the  current file as a text-oriented  file.   (May  be 
             called FLOAD in your system).

        TOGGLE     addr b ---     G     
             Complement the contents of addr by the bit pattern b. 

        TRACE     --- addr     U
             Flag to turn the "unravel" trace on (1) or off(0).

        TRAVERSE     adr1 n --- adr2     G     
             Move  across  the name field of a definition.   adr1 is  the 
             address  of either the length byte or the last  letter.   If 
             n=1,  the motion is toward high memory;  if n=-1, the motion 
             is toward low memory.  The adr2 resulting the the address of 
             the other end of the name. 












        UNIFORTH VOCABULARY LIST                                Page A-36


        TRIAD     n ---     G     
             Display on the selected output device the three screens that 
             include n,  beginning with a screen that is evenly divisible 
             by 3. 


        TRUE      --- n               U
             A constant containing the value of a true flag (=-1).

        TRUNK          --- adr        F
             A variable containing the address of the trunk vocabulary.

        TURNKEY     --- adr     U     
             The  address  in the kernel COLD routine of the CFA  of  the 
             word  SIGNON.   By  replacing  SIGNON  with  a  user-defined 
             function, you can autostart any word upon coldstart. 

        TYPE     addr n ---     F     
             Transmit  n characters beginning at address to  the  current 
             output  device.   No  action takes place for n less than  or 
             equal to zero. 

        U.     un ---     F     
             Display  un  converted  according to  BASE  as  an  unsigned 
             number, in a free-field format, with one trailing blank. "u-
             dot" 

        U2/       ud1 --- ud2              F
             Divide unsigned double by 2.

        U<     un1 un2 --- flag     F     
             Leave  the flag representing the magnitude comparison of un1 
             <  un2,  where  un1 and un2 are treated at  16-bit  unsigned 
             integers.  "u-less-than" 

        U<=     un1 un2 --- flag     U     
             True if un1 is less than or equal to un2, unsigned. 

        U>     un1 un2 --- flag     U     
             True if un1 is greater than un2, unsigned. 

        U>=     un1 un2 --- flag     U     
             True if un1 is greater than or equal to un2, unsigned. 

        UM/MOD     ud1 un2 --- un3 un4     F     
             Perform  the unsigned division of double number ud1 by  ud2, 
             leaving the remainder un3 and quotient un4.   All values are 
             unsigned.

        UM/MODD     ud1 u2 --- u3 ud4     G     
             An  unsigned mixed magnitude math operation which  leaves  a 
             double quotient ud4 and remainder u3, from a double dividend 
             ud1 and single divisor u2. 










        UNIFORTH VOCABULARY LIST                                Page A-37


        UNPRINT               U     
             Prints an informative message for LIST and INDEX. 

        UNRAVEL     ---      U
             Trace the return stack nesting, then execute QUIT.

        UNTIL     flag ---     F,I     
             Within  a colon-definition,  mark the end of  a  BEGIN-UNTIL 
             loop,  which  will  terminate based on a flag.   If flag  is 
             true,  the loop is terminated.   If flag is false, execution 
             returns  to  the  first  word  after   BEGIN.    BEGIN-UNTIL 
             structures may be nested. 

        UPPER     adr cnt --          U
             Convert the string to upper case ASCII.

        UPDATE             F     
             Mark  the most recently referenced block as  modified.   The 
             block will subsequently be automatically transferred to mass 
             storage  should its memory buffer be needed for storage of a 
             different block, or upon execution of SAVE-BUFFERS. 

        US>D     u --- ud     U
             Convert the unsigned 16-bit integer to 32-bit form.

        USE     --- addr     G     
             A variable containing the address of the block buffer to use 
             next, or in other words, the one least recently written. 

        USER     n ---          G     
             A defining word used in the form:
                  n USER cccc     
             which creates a user variable cccc.   The parameter field of 
             cccc  contains  n  as a fixed offset relative  to  the  user 
             pointer  register UP for this user variable.   When cccc  is 
             later executed, it places the sum of its offset and the user 
             area  base  address on the stack as the storage  address  of 
             that particular variable. 

        USS*D     un1 un2 --- ud3     F     
             Perform  an unsigned multiplication of un1 by  un2,  leaving 
             the double number product ud3.  All values are unsigned. "u-
             times" 

        VARIABLE                F     
             A defining word executed in the form:
                       VARIABLE <name>     
             to create a dictionary entry for <name> and allot two  bytes 
             for  storage in the parameter field.   The application  must 
             initialize the stored value.  When <name> is later executed, 
             it will place the storage address on the stack. 












        UNIFORTH VOCABULARY LIST                                Page A-38


        VECTOR               U     
             A defining word used in the form:
                         n VECTOR <name>     
             to  create a dictionary entry for <name>,  thereby making  a 
             vector n cells long,  presetting all elements to zero.  When 
             <name> is later executed, it uses the top stack value  as an 
             index  into  the  array  and returns  the  address  of  that 
             element. {0..n-1} 

        WORDS          G     
             List the names of the definitions in the context vocabulary. 
             The actuation of any key on the terminal will stop the list. 

        VOC-LINK     --- addr     G     
             A  user  variable containing the address of a field  in  the 
             definition  of  the most recently created  vocabulary.   All 
             vocabulary names are linked by these fields to allow control 
             for FORGETing through multiple vocabularies. 

        VOCABULARY          F     
             A defining word used in the form:
                  VOCABULARY <name>     
             to create a vocabulary definition <name>.  Subsequent use of 
             <name> will make it the CONTEXT vocabulary which is searched 
             first by INTERPRET.   The sequence "<name> DEFINITIONS" will 
             also  make  <name>  the CURRENT vocabulary  into  which  new 
             definitions are placed.  By convention, vocabulary names are 
             to be declared IMMEDIATE.  See VOC-LINK. 

        WARM           G     
             A  warm-start  boot  entry point.   Resets  the  data  stack 
             pointer,  but  does  not re-initialize the return  stack  or 
             dictionary pointers. 

        WARNING     --- addr     G     
             A  user  variable  containing a value  controlling  messages 
             output  from ?ERROR or MESSAGE.   If WARNING=1,  a  disk  is 
             assumed present,  and messages are printed relative to block 
             200 of disk drive 0.   If it is equal to zero,  messages are 
             not  retrieved from disk;  they are just given numbers.   If 
             WARNING= -1, ?ERROR will execute ABORT. 

        WHILE     flag ---     F,I,C     
             Used in a colon-definition in the form:
                   BEGIN . . . flag WHILE . . . REPEAT     
             Select conditional execution based on the flag.   On a  true 
             flag,  continue  execution  through to  REPEAT,  which  then 
             returns  back to just after BEGIN.   On a false  flag,  skip 
             execution to just after REPEAT, exiting the structure. 














        UNIFORTH VOCABULARY LIST                                Page A-39


        WIDTH     --- addr     G     
             A  user  variable containing the maximum numbers of  letters 
             saved in the compilation of a definition's name.  It must be 
             1  through  31,  with  a default  value  of  31.   The  name 
             character count and its natural characters are saved,  up to 
             the  value in WIDTH.   The value may be changed at any  time 
             within the above limits. 

        WORD     char --- addr     F     
             Receive characters from the input stream until the  non-zero 
             delimiting  character is encountered or the input stream  is 
             exhausted,  ignoring leading delimiters.  The characters are 
             stored  as  a packed string with the character count in  the 
             first character position.   The actual delimiter encountered 
             (char  or  null) is stored at the end of the  text  but  not 
             included in the count.  If the input stream was exhausted as 
             WORD is called, then a zero length will result.  The address 
             of the beginning of this packed string is left on the stack. 

        X'     --- n     U
             Interpret  the  next number as decimal,  regardless  of  the 
             current base.

        X.     n ---     U
             Display  the number in decimal,  regardless of  the  current 
             base.

        XON/XOFF       --- adr        U
             A  variable  that turns on/off  the  ctrl-s/ctrl-q  keyboard 
             check.

        XOR     n1 n2 --- n3     F                   "x-or"
             Leave the bitwise exclusive-or of two numbers. 

        Y/N       ---  flag          U
             Bring in a yes/no/escape type answer.

        Z.R     n1 n2 ---     U
             Display n1 right justified in n2 columns.   Zero fill to the 
             left.  See PLUS?.

        [                      F,I                   "left-bracket"
             End the compilation mode.  The text from the input stream is 
             subsequently executed.  See ].

        [']                      F
             Immediate form of tick.

        [COMPILE]              F,I,C                 "bracket-compile"
             Used in a colon-definition in the form:
                   [COMPILE] <name>     
             Force compilation of <name>.   This allows compilation of an 
             IMMEDIATE   word  when  it  would  otherwise  be   executed.










        UNIFORTH VOCABULARY LIST                                Page A-40


        ]                       F                    "right-bracket"
             Set the compilation mode.  The text from the input stream is 
             subsequently compiled.  See [.




























































ee [.




















```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0454

     Volume in drive A has no label
     Directory of A:\

    FILES454 TXT      1039   2-17-87  12:43a
    FORTH    FTH     20480   8-20-85  10:42p
    UNIFORTH COM     29696   8-20-85  10:42p
    UNIFORTH DOC     87168   8-20-85  10:43p
    VEDITOR  FTH     10240   8-20-85  10:43p
    WORDS    DOC     93824   8-20-85  10:43p
            6 file(s)     242447 bytes
                           77824 bytes free
