---
layout: page
title: "PC-SIG Diskette Library (Disk #816)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0816/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0816"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO C TUTORIAL 1 OF 2 (ALSO 817)"

    If you are a programmer in C or other programming languages and have
    been thinking about moving up to Turbo C, TURBO C TUTORIAL can help
    open the door.
    
    TURBO C TUTORIAL will teach you the basic structure of the C
    language.  Turbo C is not really a beginner's language and the author
    assumes you are familiar with some other programming languages but know
    nothing about C. The tutorial starts by explaining the C language and
    by the time you have completed the lessons you should be very familiar
    with Turbo C.
    
    Included are over 60 C source code files, which are to be used
    with the tutorial.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHAP1.TXT

{% raw %}
```

                        Chapter 1 - Getting Started


                          WHAT IS AN IDENTIFIER?

             Before you can do anything in any language, you must at
        least  know  how you name an identifier.  An  identifier  is
        used  for any variable, function, data definition, etc.   In
        the  programming language C, an identifier is a  combination
        of alphanumeric characters, the first being a letter of  the
        alphabet or an underline, and the remaining being any letter
        of  the alphabet, any numeric digit, or the  underline.   In
        the  case of Turbo C, a dollar sign is permitted but not  as
        the first character of an identifier.  It should be  pointed
        out that even though a dollar sign is permitted by the Turbo
        C  compiler, it is not used anywhere in this tutorial  since
        it  is not in general use by C programmers, and is not  even
        allowed by most compilers.  If you do not plan to write  any
        portable  code, you can use it at will if you feel it  makes
        your code more readable.

             Two rules must be kept in mind when naming identifiers.

        1.   The  case  of  alphabetic  characters  is  significant.
             Using  "INDEX" for a variable is not the same as  using
             "index"  and  neither  of them is  the  same  as  using
             "InDeX"  for a variable.   All three refer to different
             variables.

        2.   As Turbo C is defined, up to 32 significant  characters
             can  be  used and will be considered  significant.   If
             more  than  32 are used, they will be  ignored  by  the
             compiler.  You can reduce the number used  to  anything
             less  than 32 if you desire as a compiler option.   You
             should  not do this for the duration of your  study  of
             this  tutorial  as  you could  get  some  odd  compiler
             diagnostics.

                         WHAT ABOUT THE UNDERLINE?

             Even  though  the  underline can be used as part  of  a
        variable  name, and adds greatly to the readability  of  the
        resulting  code,  it  seems  to  be  used  very  little   by
        experienced   C  programmers.   It  adds  greatly   to   the
        readability  of  a  program to  use  descriptive  names  for
        variables  and  it  would be to your  advantage  to  do  so.
        Pascal  programmers tend to use long descriptive names,  but
        most C programmers tend to use short cryptic names.  Most of
        the  example programs in this tutorial use very short  names
        for that reason.

             Any computer program has two entities to consider,  the
        data,  and  the program.   They are highly dependent on  one
        another  and  careful planning of both will lead to  a  well


                                 Page 4









                        Chapter 1 - Getting Started


        planned and well written program.   Unfortunately, it is not
        possible  to study either completely without a good  working
        knowledge of the other.  For this reason, this tutorial will
        jump  back  and forth between teaching  methods  of  program
        writing  and  methods of data  definition.    Simply  follow
        along and you will have a good understanding of both.   Keep
        in  mind that,  even though it seems expedient to  sometimes
        jump right into the program coding,  time spent planning the
        data  structures  will be well spent and the  final  program
        will reflect the original planning.

                        HOW THIS TUTORIAL IS WRITTEN

             As  you go through the example programs,  you will find
        that  every  program  is complete.   There  are  no  program
        fragments that could be confusing.   This allows you to  see
        every  requirement that is needed to use any of the features
        of  Turbo  C as they are presented.  Some tutorials  I  have
        seen give very few, and very complex examples.  They  really
        serve  more  to confuse the student.  This tutorial  is  the
        complete  opposite  because  it strives to  cover  each  new
        aspect  of programming in as simple a context  as  possible.
        This  method, however, leads to a lack of knowledge  in  how
        the  various parts are combined.  For that reason, the  last
        chapter is devoted entirely to using the features taught  in
        the  earlier  chapters. It will illustrate how  to  put  the
        various features together to create a usable program.   They
        are given for your study, and are not completely  explained.
        Enough details of their operation are given to allow you  to
        understand how they work after you have completed all of the
        previous lessons.

             At this point, you should load and run FIRSTEX.C if you
        have  not yet done so, to see that the Turbo C  compiler  is
        properly  loaded and operating.  If you have  any  problems,
        see  the COMPILER.DOC file for help in properly  setting  up
        your computer to compile and run Turbo C programs.

                     A DISCUSSION OF SOME OF THE FILES

                                  LIST.EXE

             This  file will list the source files for you with line
        numbers  and  filename.   To  use  it,  simply  type  "LIST"
        followed by the appropriate filename.   Type LIST  FIRSTEX.C
        now  for  an example.   The C source code is given later  in
        Chapter 14 along with a brief description of its operation.
        After  you  have completed your study of Turbo C,  you  will
        have the ability to read and understand the source code  for
        this program.



                                 Page 5









                        Chapter 1 - Getting Started


                                PRINTALL.BAT

             This is a batch file that will call the above  LIST.EXE
        file  once for each of the example C programs,  printing all
        of  the  files out.   If you want a hardcopy of all  of  the
        files,  enter PRINTALL and watch as your printer fills about
        150 sheets of paper with C programs.














































                                 Page 6
```
{% endraw %}

## CHAP10.TXT

{% raw %}
```

                       Chapter 10 - File Input/Output


                              OUTPUT TO A FILE

             Load  and  display  the file named FORMOUT.C  for  your
        first example of writing data to a file.  We begin as before
        with the "include" statement for "stdio.h", then define some
        variables for use in the example including a rather  strange
        looking new type.

             The  type  "FILE"  is used for a file variable  and  is
        defined in the "stdio.h" file.   It is used to define a file
        pointer  for use in file operations.   The definition  of  C
        contains  the requirement for a pointer to a "FILE",  and as
        usual, the name can be any valid variable name.

                               OPENING A FILE

             Before we can write to a file,  we must open it.   What
        this  really means is that we must tell the system  that  we
        want  to  write to a file and what the filename is.   We  do
        this with the "fopen" function illustrated in the first line
        of the program.   The file pointer, "fp" in our case, points
        to   the  file  and  two  arguments  are  required  in   the
        parentheses,  the filename first, followed by the file type.
        The filename is any valid DOS filename, and can be expressed
        in  upper  or lower case letters,  or even mixed if  you  so
        desire.   It is enclosed in double quotes.  For this example
        we have chosen the name TENLINES.TXT.   This file should not
        exist  on your disk at this time.   If you have a file  with
        this  name,  you should change its name or move  it  because
        when  we execute this program,  its contents will be erased.
        If you don't have a file by this name,  that is good because
        we will create one and put some data into it.

                               READING ("r")

             The  second parameter is the file attribute and can  be
        any  of three letters, "r", "w", or "a", and must  be  lower
        case. There are actually additional cases available in Turbo
        C to allow more flexible I/O.  These are defined on page  95
        of  the Turbo C Reference Guide.  When an "r" is  used,  the
        file is opened for reading, a "w" is used to indicate a file
        to be used for writing, and an "a" indicates that you desire
        to append additional data to the data already in an existing
        file.   Opening  a file for reading requires that  the  file
        already exist.  If it does not exist, the file pointer  will
        be set to NULL and can be checked by the program.

                               WRITING ("w")

             When  a file is opened for writing,  it will be created
        if it does not already exist and it will be reset if it does


                                   Page 70









                       Chapter 10 - File Input/Output


        resulting in deletion of any data already there.

                              APPENDING ("a")

             When a file is opened for appending, it will be created
        if it does not already exist and it will be initially empty.
        If  it does exist,  the data input point will be the end  of
        the  present data so that any new data will be added to  any
        data that already exists in the file.

                           OUTPUTTING TO THE FILE

             The  job of actually outputting to the file  is  nearly
        identical  to  the  outputting we have already done  to  the
        standard output device.   The only real differences are  the
        new  function names and the addition of the file pointer  as
        one  of  the function arguments.   In the  example  program,
        "fprintf" replaces our familiar "printf" function name,  and
        the  file  pointer  defined earlier is  the  first  argument
        within  the  parentheses.   The remainder of  the  statement
        looks  like,  and  in  fact is identical  to,  the  "printf"
        statement.

                               CLOSING A FILE

             To close a file,  you simply use the function  "fclose"
        with the file pointer in the parentheses.  Actually, in this
        simple  program,  it  is  not necessary to  close  the  file
        because   the  system  will  close  all  open  files  before
        returning to DOS.  It would be good programming practice for
        you to get in the habit of closing all files in spite of the
        fact  that they will be closed automatically,  because  that
        would act as a reminder to you of what files are open at the
        end of each program.

             You can open a file for writing,  close it,  and reopen
        it  for  reading,  then  close it,  and open  it  again  for
        appending,  etc.   Each time you open it,  you could use the
        same file pointer,  or you could use a different  one.   The
        file  pointer  is simply a tool that you use to point  to  a
        file and you decide what file it will point to.

             Compile  and run this program.   When you run  it,  you
        will  not  get any output to the monitor because it  doesn't
        generate any.   After running it, look at your directory for
        a file named TENLINES.TXT and "type" it.  That is where your
        output will be.   Compare the output with that specified  in
        the program.  It should agree.

             Do not erase the file named TENLINES.TXT yet.   We will
        use it in some of the other examples in this chapter.


                                   Page 71









                       Chapter 10 - File Input/Output




                  OUTPUTTING A SINGLE CHARACTER AT A TIME

             Load the next example file,  CHAROUT.C,  and display it
        on your monitor.  This program will illustrate how to output
        a single character at a time.

             The  program begins with the "include" statement,  then
        defines  some variables including a file pointer.   We  have
        called the file pointer "point" this time, but we could have
        used any other valid variable name.  We then define a string
        of characters to use in the output function using a "strcpy"
        function.   We are ready to open the file for appending  and
        we  do so in the "fopen" function,  except this time we  use
        the  lower cases for the filename.   This is done simply  to
        illustrate  that  DOS  doesn't care about the  case  of  the
        filename.  Notice that the file will be opened for appending
        so  we  will  add  to the lines  inserted  during  the  last
        program.

             The  program is actually two nested "for"  loops.   The
        outer  loop  is  simply a count to ten so that  we  will  go
        through the inner loop ten times.   The inner loop calls the
        function  "putc" repeatedly until a character in "others" is
        detected to be a zero.

                            THE "putc" FUNCTION

             The  part  of the program we are interested in  is  the
        "putc" function.   It outputs one character at a  time,  the
        character  being  the first argument in the parentheses  and
        the  file pointer being the second and last  argument.   Why
        the  designer of C made the pointer first in  the  "fprintf"
        function, and last in the "putc" function is a good question
        for which there may be no answer.   It seems like this would
        have been a good place to have used some consistency.

             When  the textline "others" is exhausted,  a newline is
        needed because a newline was not included in the  definition
        above.   A  single "putc" is then executed which outputs the
        "\n" character to return the carriage and do a linefeed.

             When  the outer loop has been executed ten  times,  the
        program  closes the file and terminates.   Compile  and  run
        this  program but once again there will be no output to  the
        monitor.

             Following  execution  of the program,  "type" the  file
        named  TENLINES.TXT and you will see that the 10  new  lines
        were  added to the end of the 10 that already  existed.   If


                                   Page 72









                       Chapter 10 - File Input/Output


        you run it again,  yet another 10 lines will be added.  Once
        again,  do  not  erase  this file because we are  still  not
        finished with it.

                               READING A FILE

             Load  the file named READCHAR.C and display it on  your
        monitor. This is our first program to read a file.

             This program begins with the familiar  "include",  some
        data  definitions,  and  the  file opening  statement  which
        should  require no explanation except for the fact  that  an
        "r"  is  used  here because we want to  read  it.   In  this
        program,  we  check to see that the file exists,  and if  it
        does,  we  execute  the  main body of the  program.   If  it
        doesn't,  we print a message and quit.  If the file does not
        exist,  the system will set the pointer equal to NULL  which
        we can test.

             The  main body of the program is one "do while" loop in
        which a single character is read from the file and output to
        the monitor until an EOF (end of file) is detected from  the
        input  file.   The  file is then closed and the  program  is
        terminated.

                         CAUTION  CAUTION  CAUTION

             At  this  point, we have the potential for one  of  the
        most  common and most perplexing problems of programming  in
        C.   The  variable returned from the "getc"  function  is  a
        character, so we can use a "char" variable for this purpose.
        There is a problem that could develop here if we happened to
        use  an "unsigned char" however, because Turbo C  returns  a
        minus one for an EOF which an "unsigned char" type  variable
        is  not  capable  of containing.  An  "unsigned  char"  type
        variable can only have the values of zero to 255, so it will
        return  a  255 for a minus one in Turbo C.  This is  a  very
        frustrating  problem to try to find.  The program can  never
        find  the EOF and will therefore never terminate  the  loop.
        This is easy to prevent, always use an "char" type  variable
        for use in returning an EOF.

             There is another problem with this program but we  will
        worry  about it when we get to the next program and solve it
        with the one following that.

             After  you  compile  and  run  this  program  and   are
        satisfied  with the results,  it would be a good exercise to
        change the name of "TENLINES.TXT" and run the program  again
        to see that the NULL test actually works as stated.  Be sure



                                   Page 73









                       Chapter 10 - File Input/Output


        to  change  the name back because we are still not  finished
        with "TENLINES.TXT".

                          READING A WORD AT A TIME

             Load  and  display  the file named  READTEXT.C  for  an
        example of how to read a word at a time.

             This  program  is nearly identical as the  last  except
        that  this program uses the "fscanf" function to read  in  a
        string  at  a  time.   Because the "fscanf"  function  stops
        reading  when it finds a space or a  newline  character,  it
        will read a word at a time, and display the results one word
        to  a line.   You will see this when you compile and run it,
        but first we must examine a programming problem.

                             THIS IS A PROBLEM

             Inspection of the program will reveal that when we read
        data in and detect the EOF, we print out something before we
        check  for the EOF resulting in an extra line  of  printout.
        What  we usually print out is the same thing printed on  the
        prior  pass  through  the loop because it is  still  in  the
        buffer "oneword".  We therefore must check for EOF before we
        execute  the  "printf"  function.   This has  been  done  in
        READGOOD.C,  which  you will shortly examine,  compile,  and
        execute.

             Compile  and execute the original program we have  been
        studying, READTEXT.C and observe the output.  If you haven't
        changed  TENLINES.TXT you will end up with "Additional"  and
        "lines."  on  two  separate lines  with  an  extra  "lines."
        displayed because of the "printf" before checking for EOF.

             Compile  and  execute READGOOD.C and observe  that  the
        extra  "lines." does not get displayed because of the  extra
        check for the EOF in the middle of the loop.   This was also
        the problem referred to when we looked at READCHAR.C,  but I
        chose  not  to expound on it there because the error in  the
        output was not so obvious.

                        FINALLY, WE READ A FULL LINE

             Load and display the file READLINE.C for an example  of
        reading  a complete line.   This program is very similar  to
        those  we have been studying except that we read a  complete
        line.

             We  are  using "fgets" which reads in an  entire  line,
        including  the newline character into a buffer.   The buffer
        to be read into is the first argument in the function  call,


                                   Page 74









                       Chapter 10 - File Input/Output


        and  the maximum number of characters to read is the  second
        argument,  followed by the file pointer.  This function will
        read  characters into the input buffer until it either finds
        a  newline  character,  or it reads the  maximum  number  of
        characters  allowed minus one.   It leaves one character for
        the end of string NULL character.   In addition, if it finds
        an  EOF,  it will return a value of NULL.   In our  example,
        when the EOF is found,  the pointer "c" will be assigned the
        value  of NULL.   NULL is defined as zero in your  "stdio.h"
        file.

             When  we find that "c" has been assigned the  value  of
        NULL,  we can stop processing data, but we must check before
        we print just like in the last program.

             Last of course, we close the file.

                       HOW TO USE A VARIABLE FILENAME

             Load  and display the file ANYFILE.C for an example  of
        reading  from any file.   This program asks the user for the
        filename desired,  reads in the filename and opens that file
        for reading.   The entire file is then read and displayed on
        the   monitor.    It  should  pose  no  problems   to   your
        understanding so no additional comments will be made.

             Compile  and  run  this program.   When it  requests  a
        filename,  enter  the  name and extension of any  text  file
        available, even one of the example C programs.

                              HOW DO WE PRINT?

             Load  the  last example file in this chapter,  the  one
        named  PRINTDAT.C  for an example of  how  to  print.   This
        program  should not present any surprises to you so we  will
        move very quickly through it.

             Once  again,  we  open TENLINES.TXT for reading and  we
        open PRN for writing.  Printing is identical to writing data
        to  a disk file except that we use a standard name  for  the
        filename.  Turbo C uses the reserved "filename" of PRN  that
        instructs the compiler to send the output to the printer.

             The  program is simply a loop in which a  character  is
        read, and if it is not the EOF, it is displayed and printed.
        When the EOF is found, the input file and the printer output
        files are both closed.  Note that good programming  practice
        would include checking both file pointers to assure that the
        files were opened properly.




                                   Page 75









                       Chapter 10 - File Input/Output


             You can now erase TENLINES.TXT from your disk.  We will
        not be using it in any of the later chapters.


        PROGRAMMING EXERCISES

        1.   Write a program  that will prompt for a filename for  a
             read file,  prompt for a filename for a write file, and
             open both plus a file to the printer. Enter a loop that
             will read a character,  and output it to the file,  the
             printer, and the monitor. Stop at EOF.

        2.   Prompt for a  filename to read. Read the file a line at
             a time and display it on the monitor with line numbers.

        3.   Modify ANYFILE.C to test if the file exists and print a
             message  if it doesn't.  Use a method similar  to  that
             used in READCHAR.C.



































                                   Page 76
```
{% endraw %}

## CHAP11.TXT

{% raw %}
```

                      Chapter 11 - Structures and Unions


                            WHAT IS A STRUCTURE?

             A structure is a user defined data type.   You have the
        ability  to  define  a new type of  data  considerably  more
        complex than the types we have been using.  A structure is a
        combination  of  several different previously  defined  data
        types,  including other structures we have defined.  An easy
        to  understand definition is,  a structure is a grouping  of
        related  data in a way convenient to the programmer or  user
        of the program.   The best way to understand a structure  is
        to  look  at  an example,  so if you will load  and  display
        STRUCT1.C, we will do just that.

             The  program begins with a structure  definition.   The
        key  word  "struct"  is followed by  some  simple  variables
        between  the  braces,   which  are  the  components  of  the
        structure.   After  the  closing brace,  you will  find  two
        variables listed,  namely "boy",  and "girl".   According to
        the  definition  of a structure,  "boy" is  now  a  variable
        composed of three elements,  "initial",  "age", and "grade".
        Each of the three fields are associated with "boy", and each
        can  store a variable of its respective type.   The variable
        "girl"  is also a variable containing three fields with  the
        same  names  as those of "boy" but  are  actually  different
        variables.  We have therefore defined 6 simple variables.

                         A SINGLE COMPOUND VARIABLE

             Lets  examine  the  variable "boy"  more  closely.   As
        stated above, each of the three elements of "boy" are simple
        variables  and can be used anywhere in a C program  where  a
        variable of their type can be used.   For example, the "age"
        element  is  an integer variable and can therefore  be  used
        anywhere  in a C program where it is legal to use an integer
        variable,  in calculations, as a counter, in I/O operations,
        etc.   The  only problem we have is defining how to use  the
        simple  variable  "age"  which is a  part  of  the  compound
        variable  "boy".   We  use both names with a  decimal  point
        between  them with the major name first.  Thus "boy.age"  is
        the  complete  variable name for the "age" field  of  "boy".
        This  construct can be used anywhere in a C program that  it
        is desired to refer to this field.   In fact,  it is illegal
        to  use the name "boy" or "age" alone because they are  only
        partial definitions of the complete field.  Alone, the names
        refer to nothing.

                     ASSIGNING VALUES TO THE VARIABLES

             Using  the above definition,  we can assign a value  to
        each  of  the  three fields of "boy" and each of  the  three
        fields  of  "girl".   Note carefully that  "boy.initial"  is


                                  Page 77









                      Chapter 11 - Structures and Unions


        actually  a "char" type variable,  because it  was  assigned
        that in the structure, so it must be assigned a character of
        data.   Notice  that "boy.initial" is assigned the character
        'R'  in agreement with the above rules.   The remaining  two
        fields of "boy" are assigned values in accordance with their
        respective  types.   Finally  the three fields of  girl  are
        assigned values but in a different order to illustrate  that
        the order of assignment is not critical.

                     HOW DO WE USE THE RESULTING DATA?

             Now  that  we  have assigned values to the  six  simple
        variables, we can do anything we desire with them.  In order
        to keep this first example simple,  we will simply print out
        the values to see if they really do exist as  assigned.   If
        you carefully inspect the "printf" statements,  you will see
        that there is nothing special about them.  The compound name
        of each variable is specified because that is the only valid
        name by which we can refer to these variables.

             Structures  are  a very useful method of grouping  data
        together  in  order to make a program easier  to  write  and
        understand.   This  first example is too simple to give  you
        even  a hint of the value of using structures,  but continue
        on  through  these lessons and eventually you will  see  the
        value of using structures.

             Compile and run STRUCT1.C and observe the output.

                           AN ARRAY OF STRUCTURES

             Load  and  display the next  program  named  STRUCT2.C.
        This  program  contains  the same  structure  definition  as
        before  but  this  time we define an array of  12  variables
        named "kids".   This program therefore contains 12 times 3 =
        36  simple variables,  each of which can store one  item  of
        data  provided  that  it is of the correct  type.   We  also
        define a simple variable named "index" for use in the  "for"
        loops.

             In order to assign each of the fields a value, we use a
        "for"  loop  and  each  pass through  the  loop  results  in
        assigning a value to three of the fields.  One pass  through
        the  loop assigns all of the values for one of  the  "kids".
        This would not be a very useful way to assign data in a real
        situation, but a loop could read the data in from a file and
        store it in the correct fields.  You might consider this the
        crude beginning of a data base, which it is.

             In  the next few instructions of the program we  assign
        new  values to some of the fields to illustrate  the  method


                                  Page 78









                      Chapter 11 - Structures and Unions


        used to accomplish this.  It should be self explanatory,  so
        no additional comments will be given.

                       A RECENT UPGRADE TO THE C LANGUAGE

             Turbo C allows you to copy an entire structure with one
        statement.  This  is  a  fairly recent  addition  to  the  C
        language and will be a part of the ANSI standard when it  is
        published, so you should feel free to use it with your Turbo
        C  compiler.   Line 22 is an example of  using  a  structure
        assignment.  In this statement, all 3 fields of kids[4]  are
        copied into their respective fields of kids[10].

                   WE FINALLY DISPLAY ALL OF THE RESULTS

             The  last few statements contain a "for" loop in  which
        all  of  the generated values are displayed in  a  formatted
        list.   Compile and run the program to see if it  does  what
        you expect it to do.

                   USING POINTERS AND STRUCTURES TOGETHER

             Load  and  display  the  file named  STRUCT3.C  for  an
        example of using pointers with structures.   This program is
        identical  to the last program except that it uses  pointers
        for some of the operations.

             The  first  difference shows up in  the  definition  of
        variables  following  the  structure  definition.   In  this
        program  we define a pointer named "point" which is  defined
        as  a  pointer that points to the structure.   It  would  be
        illegal  to  try to use this pointer to point to  any  other
        variable  type.   There  is a very definite reason for  this
        restriction  in  C as we have alluded to  earlier  and  will
        review in the next few paragraphs.

             The  next difference is in the "for" loop where we  use
        the pointer for accessing the data fields.  Since "kids"  is
        a  pointer  variable that points to the  structure,  we  can
        define "point" in terms of "kids".  The variable "kids" is a
        constant so it cannot be changed in value, but "point" is  a
        pointer  variable and can be assigned any  value  consistent
        with  its being required to point to the structure.   If  we
        assign  the  value of "kids" to "point" then  it  should  be
        clear that it will point to the first element of the  array,
        a structure containing three fields.

                             POINTER ARITHMETIC

             Adding  1 to "point" will now cause it to point to  the
        second  field of the array because of the way  pointers  are


                                  Page 79









                      Chapter 11 - Structures and Unions


        handled in C.   The system knows that the structure contains
        three  variables  and it knows how many memory elements  are
        required to store the complete structure.   Therefore if  we
        tell it to add one to the pointer,  it will actually add the
        number  of  memory  elements  required to get  to  the  next
        element of the array.   If, for example, we were to add 4 to
        the  pointer,  it would advance the value of the  pointer  4
        times the size of the structure,  resulting in it pointing 4
        elements  farther  along the array.   This is the  reason  a
        pointer  cannot be used to point to any data type other than
        the one for which it was defined.

             Now to return to the program displayed on your monitor.
        It  should be clear from the previous discussion that as  we
        go through the loop, the pointer will point to the beginning
        of  one of the array elements each time.   We can  therefore
        use  the  pointer to reference the various elements  of  the
        structure.   Referring to the elements of a structure with a
        pointer occurs so often in C that a special method of  doing
        that  was  devised.   Using "point->initial" is the same  as
        using  "(*point).initial" which is really the way we did  it
        in  the  last  two programs.  Remember that  *point  is  the
        stored  data to which the pointer points and  the  construct
        should be clear.  The "->" is made up of the minus sign  and
        the greater than sign.

             Since the pointer points to the structure, we must once
        again  define which of the elements we wish to refer to each
        time  we use one of the elements of  the  structure.   There
        are, as we have seen, several different methods of referring
        to the members of the structure, and in the "for" loop  used
        for output at the end of the program, we use three different
        methods.   This  would be considered very  poor  programming
        practice,  but  is done this way here to illustrate  to  you
        that  they all lead to the same result.  This  program  will
        probably   require  some  study  on  your  part   to   fully
        understand,  but  it will be worth your time and  effort  to
        grasp these principles.

             Lines  29  and  30  are  two  additional  examples   of
        structure assignment for your benefit.

             Compile and run this program.

                        NESTED AND NAMED STRUCTURES

             Load and display the file named NESTED.C for an example
        of  a nested structure.   The structures we have seen so far
        have been very simple,  although useful.   It is possible to
        define  structures  containing dozens and even  hundreds  or
        thousands  of  elements but it would be to  the  programmers


                                  Page 80









                      Chapter 11 - Structures and Unions


        advantage not to define all of the elements at one pass  but
        rather to use a hierarchical structure of definition.   This
        will be illustrated with the program on your monitor.

             The  first  structure  contains three elements  but  is
        followed by no variable name.  We therefore have not defined
        any variables only a structure, but since we have included a
        name  at the beginning of the structure,  the  structure  is
        named  "person".   The name "person" can be used to refer to
        the  structure  but not to any variable  of  this  structure
        type.   It is therefore a new type that we have defined, and
        we can use the new type in nearly the same way we use "int",
        "char",  or  any  other  types that exist in  C.   The  only
        restriction is that this new name must always be  associated
        with the reserved word "struct".

             The  next  structure definition contains  three  fields
        with the middle field being the previously defined structure
        which we named "person".  The variable which has the type of
        "person" is named "descrip".   So the new structure contains
        two   simple   variables,   "grade"  and  a   string   named
        "lunch[25]",  and  the  structure  named  "descrip".   Since
        "descrip"  contains  three  variables,   the  new  structure
        actually contains 5 variables.  This structure is also given
        a name "alldat",  which is another type definition.  Finally
        we  define an array of 53 variables each with the  structure
        defined by "alldat",  and each with the name "student".   If
        that is clear,  you will see that we have defined a total of
        53 times 5 variables,  each of which is capable of storing a
        value.

                             TWO MORE VARIABLES

             Since  we  have a new type definition we can use it  to
        define  two  more variables.   The variables  "teacher"  and
        "sub"  are  defined in line 16 to be variables of  the  type
        "alldat",  so  that each of these two  variables  contain  5
        fields which can store data.

                       NOW TO USE SOME OF THE FIELDS

             In  the next five lines of the program,  we will assign
        values to each of the fields of "teacher".   The first field
        is  the  "grade" field and is handled just  like  the  other
        structures  we  have studied because it is not part  of  the
        nested structure.  Next we wish to assign a value to her age
        which  is  part of the nested structure.   To  address  this
        field  we start with the variable name "teacher" to which we
        append  the name of the group "descrip",  and then  we  must
        define which field of the nested structure we are interested
        in,  so  we append the name "age".   The teachers status  is


                                  Page 81









                      Chapter 11 - Structures and Unions


        handled in exactly the same manner as her age,  but the last
        two  fields  are  assigned  strings using  the  string  copy
        "strcpy" function which must be used for string  assignment.
        Notice  that the variable names in the "strcpy" function are
        still variable names even though they are made up of several
        parts each.

             The variable "sub" is assigned nonsense values in  much
        the  same  way,  but in a different order since they do  not
        have to occur in any required order.   Finally, a few of the
        "student"  variables  are assigned values  for  illustrative
        purposes  and  the program ends.   None of  the  values  are
        printed  for illustration since several were printed in  the
        last examples.

                           MORE ABOUT STRUCTURES

             It is possible to continue nesting structures until you
        get  totally confused.   If you define  them  properly,  the
        computer  will  not get confused because there is no  stated
        limit as to how many levels of nesting are  allowed.   There
        is probably a practical limit of three beyond which you will
        get confused, but the language has no limit.  In addition to
        nesting, you can include as many structures as you desire in
        any level of structures,  such as defining another structure
        prior  to  "alldat" and using it in "alldat" in addition  to
        using  "person".   The  structure named  "person"  could  be
        included in "alldat" two or more times if desired,  as could
        pointers to it.

             Structures can contain arrays of other structures which
        in  turn  can  contain  arrays  of  simple  types  or  other
        structures.   It  can go on and on until you lose all reason
        to  continue.   I am only trying to illustrate to  you  that
        structures  are  very valuable and you will find them  great
        aids to programming if you use them wisely.  Be conservative
        at first, and get bolder as you gain experience.

             More  complex structures will not be illustrated  here,
        but  you will find examples of additional structures in  the
        example  programs  included  in the  last  chapter  of  this
        tutorial.     For   example,   see   the   "#include"   file
        "STRUCT.DEF".

                              WHAT ARE UNIONS?

             Load the file named UNION1.C for an example of a union.
        Simply stated,  a union allows you a way to look at the same
        data  with  different types,  or to use the same  data  with
        different names. Examine the program on your monitor.



                                  Page 82









                      Chapter 11 - Structures and Unions


             In this example we have two elements to the union,  the
        first part being the integer named "value",  which is stored
        as  a  two byte variable somewhere in the computers  memory.
        The  second  element is made up of two  character  variables
        named "first" and "second".   These two variables are stored
        in  the  same storage locations that "value" is  stored  in,
        because  that is what a union does.   A union allows you  to
        store  different types of data in the same physical  storage
        locations.  In this case, you could put an integer number in
        "value",  then retrieve it in its two halves by getting each
        half  using  the  two  names  "first"  and  "second".   This
        technique is often used to pack data bytes together when you
        are,  for  example,  combining  bytes  to  be  used  in  the
        registers of the microprocessor.

             Accessing  the fields of the union are very similar  to
        accessing the fields of a structure and will be left to  you
        to determine by studying the example.

             One  additional  note  must  be given  here  about  the
        program.   When  it is run using the Turbo C  compiler,  the
        data  will  be  displayed with two leading f's  due  to  the
        hexadecimal output promoting the char type variables to  int
        and extending the sign bit to the left.  Converting the char
        type data fields to int type fields prior to display  should
        remove the leading f's from your display.  This will involve
        defining  two new int type variables and assigning the  char
        type  variables to them.  This will be left as  an  exercise
        for  you.  Note that the same problem will come up in a  few
        of the later files also.

             Compile and run this program and observe that the  data
        is  read out as an "int" and as two "char"  variables.   The
        "char" variables are reversed in order because of the way an
        "int" variable is stored internally in your computer.  Don't
        worry  about this.  It is not a problem but it can be a very
        interesting area of study if you are so inclined.

                           ANOTHER UNION EXAMPLE

             Load  and  display the file named UNION2.C for  another
        example of a union,  one which is much more common.  Suppose
        you  wished to build a large database including  information
        on many types of vehicles.  It would be silly to include the
        number of propellers on a car,  or the number of tires on  a
        boat.   In  order to keep all pertinent data,  however,  you
        would  need  those  data points for their  proper  types  of
        vehicles.   In  order to build an efficient data  base,  you
        would need several different types of data for each vehicle,
        some  of which would be common,  and some of which would  be



                                  Page 83









                      Chapter 11 - Structures and Unions


        different.  That is exactly what we are doing in the example
        program on your monitor.

             In this program,  we will define a complete  structure,
        then  decide which of the various types can go into it.   We
        will  start at the top and work our  way  down.   First,  we
        define  a  few constants with the #defines,  and  begin  the
        program  itself.   We define a structure named  "automobile"
        containing  several fields which you should have no  trouble
        recognizing, but we define no variables at this time.

                         A NEW CONCEPT, THE TYPEDEF

             Next  we  define a new type of data with  a  "typedef".
        This  defines  a complete new type that can be used  in  the
        same way that "int" or "char" can be used.   Notice that the
        structure  has  no name,  but at the end where  there  would
        normally be a variable name there is the name "BOATDEF".  We
        now have a new type, "BOATDEF", that can be used to define a
        structure anyplace we would like to.   Notice that this does
        not  define  any  variables,  only a  new  type  definition.
        Capitalizing  the name is a personal preference only and  is
        not  a  C standard.   It makes the "typedef" look  different
        from a variable name.

             We  finally come to the big structure that defines  our
        data using the building blocks already defined  above.   The
        structure is composed of 5 parts, two simple variables named
        "vehicle" and "weight",  followed by the union,  and finally
        the last two simple variables named "value" and "owner".  Of
        course  the union is what we need to look at carefully here,
        so focus on it for the moment.   You will notice that it  is
        composed  of four parts,  the first part being the  variable
        "car" which is a structure that we defined previously.   The
        second  part is a variable named "boat" which is a structure
        of the type "BOATDEF" previously defined.  The third part of
        the  union is the variable "airplane" which is  a  structure
        defined in place in the union.   Finally we come to the last

        part  of  the  union,  the variable named  "ship"  which  is
        another structure of the type "BOATDEF".

             I  hope  it is obvious to you that all four could  have
        been defined in any of the three ways shown,  but the  three
        different  methods  were used to show you that any could  be
        used.   In practice,  the clearest definition would probably
        have occurred by using the "typedef" for each of the parts.






                                  Page 84









                      Chapter 11 - Structures and Unions


                            WHAT DO WE HAVE NOW?

             We  now have a structure that can be used to store  any
        of  four different kinds of data structures.   The  size  of
        every  record will be the size of that record containing the
        largest  union.   In this case part 1 is the  largest  union
        because  it is composed of three integers,  the others being
        composed  of  an integer and a character  each.   The  first
        member  of this union would therefore determine the size  of
        all structures of this type.  The resulting structure can be
        used to store any of the four types of data, but it is up to
        the  programmer  to  keep track of what is  stored  in  each
        variable of this type.   The variable "vehicle" was designed
        into  this  structure to keep track of the type  of  vehicle
        stored here.   The four defines at the top of the page  were
        designed  to  be  used  as indicators to be  stored  in  the
        variable "vehicle".

             A  few  examples of how to use the resulting  structure
        are given in the next few lines of the program.  Some of the
        variables are defined and a few of them are printed out  for
        illustrative purposes.

             The union is not used too frequently,  and almost never
        by   beginning   programmers.    You   will   encounter   it
        occasionally  so  it is worth your effort to at  least  know
        what  it is.   You do not need to know the details of it  at
        this time,  so don't spend too much time studying it.   When
        you do have a need for a variant structure, a union, you can
        learn it at that time. For your own benefit, however, do not
        slight the structure. You should use the structure often.

                            WHAT IS A BITFIELD?

             Load  and display the program named BITFIELD.C  for  an
        example  of how to define and use a bitfield,  a  relatively
        new  addition  to  the  C  programming  language.   In  this
        program,  we  have a union made up of a  single  "int"  type
        variable  in  line 5 and the structure defined  in  lines  6
        through  10.  The structure is composed of  three  bitfields
        named "x", "y", and "z".  The variable named "x" is only one
        bit  wide,the variable "y" is two bits wide and adjacent  to
        the variable "x", and the variable "z" is two bits wide  and
        adjacent  to  "y".  Moreover, because the union  causes  the
        bits  to  be  stored  in the same  memory  location  as  the
        variable "index", the variable "x" is the least  significant
        bit  of the variable "index", "y" is the next two bits,  and
        "z" is the next two.

             Compile  and run the program and you will see  that  as
        the  variable "index" is incremented by 1 each time  through


                                  Page 85









                      Chapter 11 - Structures and Unions


        the  loop, you will see the bitfields of the union  counting
        due   to  their  respective  locations  within   the   "int"
        definition.

             One  thing must be pointed out, the bitfields  must  be
        defined as parts of an "unsigned int" or your compiler  will
        issue an error message.

                       WHAT IS THE BITFIELD GOOD FOR?

             The  bitfield is very useful if you have a lot of  data
        to  separate  into separate bits or groups  of  bits.   Many
        systems use some sort of a packed format to get lots of data
        stored  in  a  few bytes.  Your  imagination  is  your  only
        limitation to effective use of this feature of C.

        PROGRAMMING EXERCISES

        1.   Define a named structure  containing a string field for
             a name,  an integer for feet, and another for arms. Use
             the new type to define an array of about 6 items.  Fill
             the fields with data and print them out as follows.

             A human being has 2 legs and 2 arms.
             A dog has 4 legs and 0 arms.
             A television set has 4 legs and 0 arms.
             A chair has 4 legs and 2 arms.
             etc.

        2.   Rewrite  exercise 1 using  a pointer to print the  data
             out.






















                                  Page 86
```
{% endraw %}

## CHAP12.TXT

{% raw %}
```

                      Chapter 12 - Dynamic Allocation


                        WHAT IS DYNAMIC ALLOCATION?

             Dynamic allocation is very intimidating to a person the
        first time he comes across it, but that need not be.  Simply
        relax  and  read this chapter carefully and you will have  a
        good grounding in a very valuable programming resource.  All
        of the variables in every program up to this point have been
        static  variables as far as we  are  concerned.   (Actually,
        some  of  them  have been "automatic" and  were  dynamically
        allocated for you by the system,  but it was transparent  to
        you.)   In  this  chapter,  we will study  some  dynamically
        allocated  variables.  They are variables that do not  exist
        when  the program is loaded, but are created dynamically  as
        they are needed.  It is possible, using these techniques, to
        create as many variables as needed, use them, and deallocate
        their space for use by other variables.  As usual, the  best
        teacher is an example, so load and display the program named
        DYNLIST.C.

             We  begin by defining a named structure "animal" with a
        few  fields  pertaining  to dogs.   We  do  not  define  any
        variables of this type,  only three pointers.  If you search
        through  the  remainder  of the program,  you will  find  no
        variables defined so we have nothing to store data in.   All
        we have to work with are three pointers, each of which point
        to the defined structure.   In order to do anything, we need
        some variables, so we will create some dynamically.

                         DYNAMIC VARIABLE CREATION

             The first program statement, which assigns something to
        the   pointer  "pet1"  will  create  a   dynamic   structure
        containing  three variables.   The heart of the statement is
        the "malloc" function buried in the middle of the statement.
        This  is a "memory allocate" function that needs  the  other
        things to completely define it.   The "malloc" function,  by
        default, will allocate a piece of memory on a "heap" that is
        "n" characters in length and will be of type character.  The
        "n"  must be specified as the only argument to the function.
        We will discuss "n" shortly,  but first we need to define  a
        "heap".

                              WHAT IS A HEAP?

             Every compiler has a set of limitations on it as to how
        big  the executable file can be,  how many variables can  be
        used,  how long the source file can be, etc.  One limitation
        placed  on users by the Turbo C compiler is a limit  of  64K
        for  the  executable code if you happen to be in  the  small
        memory   model.    This  is  because  the  IBM-PC   uses   a
        microprocessor  with  a 64K segment size,  and  it  requires


                                  Page 87









                      Chapter 12 - Dynamic Allocation


        special  calls to use data outside of a single segment.   In
        order  to keep the program small and efficient, these  calls
        are  not  used, and the memory space is  limited  but  still
        adequate for most programs.

             In  this  model Turbo C defines two  heaps,  the  first
        being called a "heap", and the second being called the  "far
        heap".   The "heap" is an area within the 64K boundary  that
        can  store dynamically allocated date and the "far heap"  is
        an  area outside of this 64K boundary which can be  accessed
        by the program to store data and variables.

             The  data  and variables are put on the "heap"  by  the
        system  as  calls to "malloc" are made.   The  system  keeps
        track  of where the data is stored.  Data and variables  can
        be deallocated as desired leading to holes in the heap.  The
        system  knows  where  the holes are and will  use  them  for
        additional  data  storage as more "malloc" calls  are  made.
        The  structure  of  the heap is  therefore  a  very  dynamic
        entity, changing constantly.

             The  data  and variables are put on the "far  heap"  by
        utilizing  calls  to  "farmalloc",  "farcalloc",  etc.   and
        removed  through use of the function "farfree".  Study  your
        Turbo  C  Reference Guide for details of how  to  use  these
        features.

                            MORE ABOUT SEGMENTS

             Turbo  C  gives the user a choice of memory  models  to
        use.  The  user  has a choice of using a model  with  a  64K
        limitation  for  either program or data leading to  a  small
        fast  program or selecting a 640K limitation  and  requiring
        longer  address calls leading to less efficient  addressing.
        Using  the  larger  address  space  requires  inter  segment
        addressing,  resulting in the slightly slower running  time.
        The  time  is probably insignificant in most  programs,  but
        there are other considerations.

             If a program uses no more than 64K bytes for the  total
        of its code and memory and if it doesn't use a stack, it can
        be  made  into  a  .COM file.  With Turbo  C  this  is  only
        possible by using the tiny memory model.  Since a .COM  file
        is  already in a memory image format, it can be loaded  very
        quickly  whereas  a  file in an .EXE format  must  have  its
        addresses  relocated  as  it is loaded.   Therefore  a  tiny
        memory  model can generate a program that loads faster  than
        one  generated with a larger memory model.  Don't  let  this
        worry  you,  it is a fine point that few  programmers  worry
        about.



                                  Page 88









                      Chapter 12 - Dynamic Allocation


             Even  more  important than the need to stay within  the
        small memory model is the need to stay within the  computer.
        If  you  had a program that used several large data  storage
        areas,  but not at the same time,  you could load one  block
        storing  it  dynamically,  then get rid of it and reuse  the
        space for the next large block of data.  Dynamically storing
        each block of data in succession, and using the same storage
        for  each block may allow you to run your entire program  in
        the computer without breaking it up into smaller programs.

                       BACK TO THE "MALLOC" FUNCTION

             Hopefully  the above description of the "heap" and  the
        overall plan for dynamic allocation helped you to understand
        what  we are doing with the "malloc"  function.   It  simply
        asks the system for a block of memory of the size specified,
        and  gets  the block with the pointer pointing to the  first
        element of the block.   The only argument in the parentheses
        is the size of the block desired and in our present case, we
        desire  a  block  that will hold one of  the  structures  we
        defined at the beginning of the program.  The "sizeof" is  a
        new  function, new to us at least, that returns the size  in
        bytes of the argument within its parentheses.  It therefore,
        returns the size of the structure named "animal", in  bytes,
        and  that  number is sent to the system  with  the  "malloc"
        call.   At the completion of that call, we have a  block  on
        the heap allocated to us, with "pet1" pointing to the  block
        of data.

                              WHAT IS A CAST?

             We  still  have  a  funny  looking  construct  at   the
        beginning  of the "malloc" function call.   That is called a
        "cast".   The  "malloc"  function returns a block  with  the
        pointer  pointing  to it being a pointer of type  "char"  by
        default.  Many times, if not most, you do not want a pointer
        to a "char" type variable,  but to some other type.  You can
        define  the  pointer type with the construct  given  on  the
        example line.   In this case we want the pointer to point to
        a  structure of type "animal",  so we tell the compiler with
        this strange looking construct.   Even if you omit the cast,
        most compilers will return a pointer correctly,  give you  a
        warning,  and  go  on to produce a working program.   It  is
        better programming practice to provide the compiler with the
        cast to prevent getting the warning message.

                USING THE DYNAMICALLY ALLOCATED MEMORY BLOCK

             If you remember our studies of structures and pointers,
        you  will recall that if we have a structure with a  pointer
        pointing  to it,  we can access any of the variables  within


                                  Page 89









                      Chapter 12 - Dynamic Allocation


        the structure.   In the next three lines of the program,  we
        assign  some silly data to the structure  for  illustration.
        It  should come as no surprise to you that these  assignment
        statements  look just like assignments to statically defined
        variables.


             In the next statement, we assign the value of "pet1" to
        "pet2" also.   This creates no new data,  we simply have two
        pointers  to the same object.   Since "pet2" is pointing  to
        the structure we created above,  "pet1" can be reused to get
        another  dynamically allocated structure which is just  what
        we  do next.   Keep in mind that "pet2" could have  just  as
        easily been used for the new allocation.   The new structure
        is filled with silly data for illustration.

             Finally,  we  allocate another block on the heap  using
        the  pointer  "pet3",  and fill its block with  illustrative
        data.

             Printing  the  data out should pose no problem  to  you
        since  there is nothing new in the three  print  statements.
        It is left for you to study.

             Even though it is not illustrated in this tutorial, you
        can dynamically allocate and use simple variables such as  a
        single  "char"  type variable.  This should  be  discouraged
        however,  since it would be very inefficient.  This is  only
        mentioned  to point out that there is nothing magic about  a
        data  structure  that  would  allow  it  to  be  dynamically
        allocated while simple types could not.

               GETTING RID OF THE DYNAMICALLY ALLOCATED DATA

             Another new function is used to get rid of the data and
        free  up  the  space on the heap  for  reuse,  the  function
        "free".   To use it,  you simply call it with the pointer to
        the   block  as  the  only  argument,   and  the  block   is
        deallocated.

             In  order  to illustrate another aspect of the  dynamic
        allocation and deallocation of data,  an additional step  is
        included in the program on your monitor.  The pointer "pet1"
        is assigned the value of "pet3" in line 38.  In doing  this,
        the  block that "pet1" was pointing to is  effectively  lost
        since  there  is  no pointer that is now  pointing  to  that
        block.   It  can  therefore  never  again  be  referred  to,
        changed,  or disposed of.  That memory, which is a block  on
        the  heap,  is  wasted  from this point  on.   This  is  not
        something that you would ever purposely do in a program.  It
        is only done here for illustration.


                                  Page 90









                      Chapter 12 - Dynamic Allocation



             The  first  "free" function call removes the  block  of
        data that "pet1" and "pet3" were pointing to, and the second
        "free"  call  removes  the block of  data  that  "pet2"  was
        pointing  to.   We therefore have lost access to all of  our
        data  generated earlier.   There is still one block of  data
        that  is on the heap but there is no pointer to it since  we
        lost  the address to it.   Trying to "free" the data pointed
        to by "pet1" would result in an error because it has already
        been  "freed"  by the use of "pet3".  There is  no  need  to
        worry,  when  we  return to DOS, the  entire  heap  will  be
        disposed  of with no regard to what we have put on it.   The
        point  does  need to made that, if you lose a pointer  to  a
        block  of  the heap, it forever removes that block  of  data
        storage from our use and we may need that storage later.

             Compile and run the program to see if it does what  you
        think it should do based on this discussion.

                        THAT WAS A LOT OF DISCUSSION

             It took nearly four pages to get through the discussion
        of  the last program but it was time well spent.   It should
        be  somewhat exciting to you to know that there  is  nothing
        else to learn about dynamic allocation,  the last four pages
        covered  it all.   Of course,  there is a lot to learn about
        the  technique  of using dynamic allocation,  and  for  that
        reason,  there  are two more files to study.   But the  fact
        remains,  there  is  nothing  more to  learn  about  dynamic
        allocation than what was given so far in this chapter.

                            AN ARRAY OF POINTERS

             Load and display the file BIGDYNL.C for another example
        of dynamic allocation.   This program is very similar to the
        last one since we use the same structure,  but this time  we
        define an array of pointers to illustrate the means by which
        you  could build a large database using an array of pointers
        rather  than a single pointer to each element.   To keep  it
        simple  we  define  12 elements in  the  array  and  another
        working pointer named "point".

             The "*pet[12]" is new to you so a few words would be in
        order.  What we have defined is an array of 12 pointers, the
        first  being "pet[0]",  and the last  "pet[11]".   Actually,
        since an array is itself a pointer, the name "pet" by itself
        is a pointer to a pointer.   This is valid in C, and in fact
        you  can  go  farther  if needed but you  will  get  quickly
        confused.   I  know  of no limit as to how  many  levels  of
        pointing are possible,  so a definition such as "int ****pt"
        is legal as a pointer to a pointer to a pointer to a pointer


                                  Page 91









                      Chapter 12 - Dynamic Allocation


        to an integer type variable, if I counted right.  Such usage
        is discouraged until you gain considerable experience.

             Now that we have 12 pointers which can be used like any
        other  pointer,  it  is a simple matter to write a  loop  to
        allocate  a data block dynamically for each and to fill  the
        respective  fields with any data desirable.   In this  case,
        the  fields  are  filled with simple data  for  illustrative
        purposes,  but we could be reading in a  database,  readings
        from some test equipment, or any other source of data.

             A  few fields are randomly picked to receive other data
        to illustrate that simple assignments can be used,  and  the
        data is printed out to the monitor.   The pointer "point" is
        used  in the printout loop only to serve as an illustration,
        the  data could have been easily printed using the  "pet[n]"
        means  of definition.   Finally,  all 12 blocks of data  are
        freed before terminating the program.

             Compile  and run this program to aid  in  understanding
        this  technique.   As stated earlier,  there was nothing new
        here  about  dynamic  allocation,  only about  an  array  of
        pointers.

                               A LINKED LIST

             We  finally  come to the grandaddy of  all  programming
        techniques as far as being intimidating.   Load the  program
        DYNLINK.C  for an example of a dynamically allocated  linked
        list.   It  sounds terrible,  but after a little time  spent
        with it,  you will see that it is simply another programming
        technique  made  up  of  simple components  that  can  be  a
        powerful tool.

             In order to set your mind at ease,  consider the linked
        list  you used when you were a child.   Your sister gave you
        your birthday present,  and when you opened it,  you found a
        note that said,  "Look in the hall closet."  You went to the
        hall closet,  and found another note that said, "Look behind
        the  TV  set."  Behind the TV you found  another  note  that
        said,  "Look  under  the  coffee pot."  You  continued  this
        search,  and finally you found your pair of socks under  the
        dogs  feeding dish.   What you actually did was to execute a
        linked  list,  the starting point being the wrapped  present
        and the ending point being under the dogs feeding dish.  The
        list ended at the dogs feeding dish since there were no more
        notes.

             In  the program DYNLINK.C,  we will be doing  the  same
        thing as your sister forced you to do.   We will however, do
        it  much  faster and we will leave a little pile of data  at


                                  Page 92









                      Chapter 12 - Dynamic Allocation


        each of the intermediate points along the way.  We will also
        have   the  capability  to  return  to  the  beginning   and
        retraverse the entire list again and again if we so desire.

                            THE DATA DEFINITIONS

             This program starts similarly to the last two with  the
        addition  of the definition of a constant to be used  later.
        The  structure  is nearly the same as that used in the  last
        two programs except for the addition of another field within
        the  structure in line 11, the pointer.  This pointer  is  a
        pointer  to another structure of this same type and will  be
        used  to point to the next structure in order.  To  continue
        the above analogy, this pointer will point to the next note,
        which in turn will contain a pointer to the next note  after
        that.

             We  define three pointers to this structure for use  in
        the program, and one integer to be used as a counter, and we
        are ready to begin using the defined structure for  whatever
        purpose  we  desire.   In  this case,  we  will  once  again
        generate nonsense data for illustrative purposes.

                              THE FIRST FIELD

             Using  the  "malloc" function,  we request a  block  of
        storage on the "heap" and fill it with data.  The additional
        field in this example, the pointer, is assigned the value of
        NULL, which is only used to indicate that this is the end of
        the  list.   We  will  leave  the pointer  "start"  at  this
        structure,  so  that  it  will always  point  to  the  first
        structure of the list.   We also assign "prior" the value of
        "start" for reasons we will see soon.  Keep in mind that the
        end  points of a linked list will always have to be  handled
        differently  than those in the middle of a list.   We have a
        single  element  of  our  list now and  it  is  filled  with
        representative data.

                       FILLING ADDITIONAL STRUCTURES

             The  next group of assignments and  control  statements
        are  included  within a "for" loop so we can build our  list
        fast  once  it is defined.   We will go through the  loop  a
        number  of times equal to the constant "RECORDS" defined  at
        the  beginning  of  our  program.   Each  time  through,  we
        allocate memory,  fill the first three fields with nonsense,
        and  fill the pointers.   The pointer in the last record  is
        given  the  address of this new record because  the  "prior"
        pointer is pointing to the prior record.  Thus "prior->next"
        is given the address of the new record we have just  filled.
        The  pointer in the new record is assigned the value "NULL",


                                  Page 93









                      Chapter 12 - Dynamic Allocation


        and  the  pointer "prior" is given the address of  this  new
        record  because the next time we create a record,  this  one
        will  be  the  prior  one at  that  time.   That  may  sound
        confusing  but it really does make sense if you  spend  some
        time studying it.

             When  we have gone through the "for" loop 6  times,  we
        will  have  a  list  of 7 structures including  the  one  we

        generated  prior  to  the loop.   The  list  will  have  the
        following characteristics.


        1. "start" points to the first structure in the list.

        2. Each structure contains a pointer to the next structure.

        3. The last structure has a pointer  that points to NULL and
           can be used to detect the end.

           start->struct1              This diagram should aid in
                  name              understanding the structure of
                  breed             the data at this point.
                  age
                  point->struct2
                         name
                         breed
                         age
                         point->struct3
                                name
                                breed
                                age
                                point-> . . . . struct7
                                                name
                                                breed
                                                age
                                                point->NULL


             It should be clear to you,  if you understand the above
        structure,  that  it is not possible to simply jump into the
        middle of the structure and change a few values.   The  only
        way  to  get  to the third structure is by starting  at  the
        beginning  and working your way down through  the  structure
        one  record at a time.   Although this may seem like a large
        price  to  pay for the convenience of putting so  much  data
        outside of the program area,  it is actually a very good way
        to store some kinds of data.

            A  word processor would be a good application  for  this
        type  of data structure because you would never need to have


                                  Page 94









                      Chapter 12 - Dynamic Allocation


        random access to the data.   In actual practice, this is the
        basic type of storage used for the text in a word  processor
        with one line of text per record.   Actually, a program with
        any degree of sophistication would use a doubly linked list.
        This  would  be  a list with two pointers  per  record,  one
        pointing down to the next record,  and the other pointing up
        to the record just prior to the one in question.  Using this
        kind  of a record structure would allow traversing the  data
        in either direction.

                           PRINTING THE DATA OUT

             To print the data out, a similar method is used as that
        used to generate the data.  The pointers are initialized and
        are  then  used  to go from record  to  record  reading  and
        displaying   each  record  one  at  a  time.    Printing  is
        terminated when the NULL on the last record is found, so the
        program  doesn't even need to know how many records  are  in
        the list.   Finally, the entire list is deleted to make room
        in  memory  for any additional data that may be  needed,  in
        this case, none.  Care must be taken to assure that the last
        record is not deleted before the NULL is checked.   Once the
        data is gone,  it is impossible to know if you are  finished
        yet.

               MORE ABOUT DYNAMIC ALLOCATION AND LINKED LISTS

             It  is  not difficult,  and it is not trivial,  to  add
        elements into the middle of a linked lists.  It is necessary
        to create the new record,  fill it with data,  and point its
        pointer to the record it is desired to precede.   If the new
        record  is  to be installed between the  3rd  and  4th,  for
        example,  it is necessary for the new record to point to the
        4th record,  and the pointer in the 3rd record must point to
        the new one.  Adding a new record to the beginning or end of
        a  list are each special cases.   Consider what must be done
        to add a new record in a doubly linked list.

             Entire books are written describing different types  of
        linked lists and how to use them,  so no further detail will
        be  given.   The amount of detail given should be sufficient
        for a beginning understanding of C and its capabilities.

                       ANOTHER NEW FUNCTION - CALLOC

             One  more  function must  be  mentioned,  the  "calloc"
        function.   This  function  allocates a block of memory  and
        clears  it  to  all  zeros  which  may  be  useful  in  some
        circumstances.   It is similar to "malloc" and will be  left
        as an exercise for you to read about and use "calloc" if you
        desire.


                                  Page 95









                      Chapter 12 - Dynamic Allocation



        PROGRAMMING EXERCISES

        1.  Rewrite the example program STRUCT1.C from chapter 11 to
            dynamically allocate the two structures.

        2.  Rewrite the example program STRUCT2.C from chapter 11 to
            dynamically allocate the 12 structures.













































                                  Page 96
```
{% endraw %}

## CHAP13.TXT

{% raw %}
```

                 Chapter 13 - Character and Bit Manipulation


                            UPPER AND LOWER CASE

             Load  and display the program UPLOW.C for an example of
        a  program that does lots of character  manipulation.   More
        specifically,  it changes the case of alphabetic  characters
        around.   It illustrates the use of four functions that have
        to  do with case.   It should be no problem for you to study
        this program on your own and understand how it  works.   The
        four functions on display in this program are all within the
        user written function, "mix_up_the_chars".  Compile and  run
        the  program  with  the  file  of  your  choice.   The  four
        functions are;

             isupper();     Is the character upper case?
             islower();     Is the character lower case?
             toupper();     Make the character upper case.
             tolower();     Make the character lower case.

             Many  more Classification and Conversion  routines  are
        listed on pages 10 and 11 of your Turbo C Reference Guide.

                        CLASSIFICATION OF CHARACTERS

             Load  and display the next program, CHARCLAS.C  for  an
        example of character counting.  We have repeatedly used  the
        backslash  n character representing a new line.   These  are
        called escape sequences, and some of the more commonly  used
        are defined in the following table;

             \n             Newline
             \t             Tab
             \b             Backspace
             \"             Double quote
             \\             Backslash
             \0             NULL (zero)

             A complete list of escape sequences available with your
        Turbo  C  compiler are listed on page 201 of  your  Turbo  C
        Reference Manual.

             By  preceding  each of the above  characters  with  the
        backslash character, the character can be included in a line
        of text for display,  or printing.   In the same way that it
        is  perfectly  all right to use the letter "n" in a line  of
        text as a part of someone's name, and as an end-of-line, the
        other  characters can be used as parts of text or for  their
        particular functions.

             The program on your screen uses the functions that  can
        determine   the  class  of  a  character,   and  counts  the
        characters  in  each class.   The number of  each  class  is


                                   Page 97









                 Chapter 13 - Character and Bit Manipulation


        displayed  along with the line itself.   The three functions
        are as follows;

             isalpha();     Is the character alphabetic?
             isdigit();     Is the character a numeral?
             isspace();     Is the character any of, \n, \t,
                              or blank?

             As  noted above, many more Classification Routines  are
        listed on page 10 of your Turbo C Reference Guide.

             This program should be simple for you to find your  way
        through  so no explanation will be given.   It was necessary
        to give an example with these functions used.   Compile  and
        run this program with any file you choose.

                           THE LOGICAL FUNCTIONS

             Load and display the program BITOPS.C. The functions in
        this  group of functions are used to do bitwise  operations,
        meaning  that  the operations are performed on the  bits  as
        though they were individual bits.   No carry from bit to bit
        is performed as would be done with a binary addition.   Even
        though  the operations are performed on a single bit  basis,
        an entire byte or integer variable can be operated on in one
        instruction.   The operators and the operations they perform
        are given in the following table;

             &    Logical AND, if both bits are 1, the result is 1.
             |    Logical OR, if either bit is one, the result is 1.
             ^    Logical XOR,  (exclusive OR),  if one and only one
                    bit is 1, the result is 1.
             ~    Logical invert,  if the bit is 1, the result is 0,
                    and if the bit is 0, the result is 1.

             The  example  program  uses  several  fields  that  are
        combined  in each of the ways given above.   The data is  in
        hexadecimal  format.   It  will be assumed that you  already
        know hexadecimal format if you need to use these operations.
        If  you  don't,  you  will need to study  it  on  your  own.
        Teaching  the  hexadecimal format of numbers is  beyond  the
        scope of this tutorial.

             Run the program and observe the output.

                           THE SHIFT INSTRUCTIONS

             The  last two operations to be covered in this  chapter
        are  the left shift and the right shift instructions.   Load
        the example program SHIFTER.C for an example using these two



                                   Page 98









                 Chapter 13 - Character and Bit Manipulation


        instructions.    The   two  operations  use  the   following
        operators;

             << n      Left shift n places.
             >> n      Right shift n places.

             Once again the operations are carried out and displayed
        using the hexadecimal format.   The program should be simple
        for you to understand on your own, there is no tricky code.












































                                   Page 99
```
{% endraw %}

## CHAP14.TXT

{% raw %}
```

                     Chapter 14 - Example Programs


                             WHY THIS CHAPTER?

             Although  every  program  in this tutorial has  been  a
        complete  program,  each  one  has also been  a  very  small
        program intended to teach you some principle of  programming
        in  C.   It  would do you a disservice to leave you at  that
        point  without introducing you to a few larger  programs  to
        illustrate  how  to  put together the  constructs  you  have
        learned  to create a major program.   This chapter  contains
        four  programs  of increasing complexity,  each designed  to
        take  you  into a higher plateau of  programming,  and  each
        designed to be useful to you in some way.

             DOSEX will illustrate how to make DOS system calls  and
        will teach you,  through self-study, how the system responds
        to  the  keyboard.   WHATNEXT  reads commands input  on  the
        command line and will aid you in setting up a variable batch
        file,  one  that requests an operator input and responds  to
        the  input  by branching to a different part  of  the  batch
        file.

             LIST  is  the source code for the program you  used  to
        print  out the C source files when you began studying C with
        the aid of this tutorial.  Finally we come to VC, the Visual
        Calculator,  which  you should find to be a  useful  program
        even  if you don't study its source code.   VC uses most  of
        the  programming  techniques we have studied in this  course
        and  a few that we never even mentioned such  as  separately
        compiled subroutines.

             We  will  take a look at the example programs one at  a
        time  but  without  a complete explanation of  any  of  them
        because  you  have  been studying C for some  time  now  and
        should be able to read and understand most of these programs
        on  your  own.

                     DOSEX.C - The DOS Example Program

             The  copy of DOS that you received with your IBM-PC  or
        compatible has about 80 internal DOS calls that you can  use
        as  a programmer to control your peripheral devices and read
        information  or status from them.   Some of the earlier  IBM
        DOS manuals, DOS 2.0 and earlier, have these calls listed in
        the back of the manual along with how to use them.   Most of
        the  manuals  supplied  with compatible  computers  make  no
        mention  of  these  calls even  though  they  are  extremely
        useful.   These  calls  can  be  accessed  from  nearly  any
        programming  language but they do require some initial study
        to learn how to use them.   This program is intended to  aid
        you in this study.



                                  Page 100









                     Chapter 14 - Example Programs


             Display the program on your monitor or print it out for
        reference.   It  is  merely a loop watching for  a  keyboard
        input or a change in the time.  If either happens, it reacts
        accordingly.   In line 32,  the function "kbhit()" returns a
        value  of 1 if a key has been hit but not yet read from  the
        input buffer by the program.

             Look at the function named "get_time" for an example of
        a  DOS call.   An interrupt 21(hex) is called after  setting
        the  AH  register to 2C(hex) =  44(decimal).   The  time  is
        returned in the CH,  CL, and DH registers.  Refer to the DOS
        call  definitions in your copy of DOS.   If the  definitions
        are  not included there,  Peter Nortons  book,  "Programmers
        Guide  to  the  IBM PC" is recommended as a  good  reference
        manual   for   these  calls  and  many   other   programming
        techniques.   Note  that  Turbo  C  has  a  function   named
        "gettime"  that does the same thing.  You should spend  some
        time  studying the Turbo C Reference Guide to learn  of  the
        availability of such functions.

             Another useful function is the "pos_cursor()"  function
        that  positions the cursor anywhere on the monitor that  you
        desire  by  using  a  DOS  interrupt.   In  this  case,  the
        interrupt  used  is  10(hex) which is  the  general  monitor
        interrupt.  This particular service is number 2 of about  10
        different  monitor  services available.   This  function  is
        included here as another example to you.

             The  next  function,  service  number  6  of  interrupt
        10(hex)  is the window scroll service.   It should  be  self
        explanatory.

             In this program, the cursor is positioned and some data
        is  output  to the monitor,  then the cursor is "hidden"  by
        moving  it  to line 26 which is not  displayed.   After  you
        compile and run the program, you will notice that the cursor
        is  not  visible on the monitor.   This is possible  in  any
        program,  but  be  sure  to put the cursor  in  view  before
        returning  to  DOS  because  DOS does not  like  to  have  a
        "hidden" cursor and may do some strange things.

             Some time spent studying this program will be  valuable
        to  you as it will reveal how the keyboard data is input  to
        the  computer.   Especially of importance is how the special
        keys such as function keys, arrows, etc. are handled.   Also
        note that this program uses full prototype checking and is a
        good  example  of  how to use it.  Since it  also  uses  the
        "modern"  method  of  function definitions,  it  is  a  good
        example of that also.




                                  Page 101









                     Chapter 14 - Example Programs


                  WHATNEXT.C - The Batch File Interrogator

             This  is  an  example of how to read the  data  on  the
        command line following the function call.  Notice that there
        are  two variables listed within the  parentheses  following
        the main() call.   The first variable is a count of words in
        the entire command line including the command itself and the
        second  variable  is  a  pointer to  an  array  of  pointers
        defining the actual words on the command line.

             First the question on the command line, made up of some
        number of words, is displayed on the monitor and the program
        waits for the operator to hit a key.   If the key hit is one
        of  those  in the last "word" of the group of words  on  the
        command  line,  the number of the character within the group
        is  returned to the program where it can be tested with  the
        "errorlevel" command in the batch file.   You could use this
        technique  to  create a variable AUTOEXEC.BAT  file  or  any
        other  batch  file  can  use this for  a  many  way  branch.
        Compile  and  run this file with TEST.BAT for an example  of
        how  it  works in practice.   You may  find  this  technique
        useful  in  one  of  your batch files and  you  will  almost
        certainly  need  to  read in  the  command  line  parameters
        someday.

             An  interesting alternative would be for you to write a
        program  named "WOULD.C" that would return a 1 if a  "Y"  or
        "y"  were typed and a zero if any other key were hit.   Then
        your batch file could have a line such as;

        WOULD YOU LIKE TO USE THE ALTERNATIVE METHOD (Y/N)

             Dos would use "WOULD" as the program name,  ignore  the
        rest  of  the  statement  except for displaying  it  on  the
        screen.   You  would  then respond to the  question  on  the
        monitor  with a single keyhit.   Your batch file would  then
        respond   to  the  1  or  0  returned  and  either  run  the
        alternative  part  of  the batch file or  the  primary  part
        whatever each part was.

        WOULD YOU LIKE PRIMARY (Y/N)
        IF ERRORLEVEL 1 GOTO PRIMARY
        (secondary commands)
        GOTO DONE
        :PRIMARY
        (primary commands)
        :DONE






                                  Page 102









                     Chapter 14 - Example Programs


                        LIST.C - The Program Lister

             This program is actually composed of two files,  LIST.C
        and  LISTF.C  that must be separately  compiled  and  linked
        together  with your linker.   There is nothing new here  and
        you  should  have  no  trouble compiling  and  linking  this
        program  by  reading the documentation  supplied  with  your
        Turbo C compiler.

             A  LIST.PRJ file is included on the SOURCE disk of  the
        tutorial  as  an aid to you in compiling  and  linking  this
        program.   Read pages 62 and 63 of the Turbo C  Users  Guide
        for instructions on how to do it.

             The  only  thing  that is new in this  program  is  the
        inclusion   of  three  "extern"  variables  in  the  LISTF.C
        listing.   The only purpose for this is to tie these  global
        variables  to  the main program and tell the  compiler  that
        these  are not new variables.   The compiler will  therefore
        not  generate any new storage space for them but simply  use
        their names during the compile process.   At link time,  the
        linker  will  get  their actual storage locations  from  the
        LIST.OBJ  file and use those locations for the variables  in
        the  LISTF part of the memory map also.   The  variables  of
        those  names in both files are therefore the same  identical
        variables and can be used just as any other global variables
        could be used if both parts of the program were in one file.

             There is no reason why the variables couldn't have been
        defined  in the LISTF.C part of the program and declared  as
        "extern"  in the LIST.C part.   Some of the variables  could
        have  been  defined  in one and some in the  other.   It  is
        merely a matter of personal taste.   Carried to an  extreme,
        all of the variables could have been defined in a third file
        and  named "extern" in both of these files.   The third file
        would then be compiled and included in the linking process.

             It would be to your advantage to compile, link, and run
        this  program to prepare you for the next program  which  is
        composed of 6 separate files which must all work together.

                        VC.C - The Visual Calculator

             This  program  finally ties nearly everything  together
        because  it uses nearly every concept covered in the  entire
        tutorial.   It  is so big that I will not even try to  cover
        the finer points of its operation.   Only a few of the  more
        important points will be discussed.

             The  first  thing  you  should do  is  go  through  the
        tutorial  for  VC included in the file  VC.DOC.   There  are


                                  Page 103









                     Chapter 14 - Example Programs


        several  dozen  steps  for you to execute,  with  each  step
        illustrating some aspect of the Visual Calculator.  You will
        get  a  good feel for what it is capable of doing  and  make
        your study of the source code very profitable.  In addition,
        you  will  probably  find  many  ways  to  use  the   Visual
        Calculator  to  solve problems involving calculations  where
        the  simplicity  of  the problem at hand  does  not  warrant
        writing a program.

             Notice that the structure definitions,  used in all  of
        the  separate parts of the program,  are defined in the file
        STRUCT.DEF.   During  program development,  when  it  became
        necessary  to change one of the structures slightly,  it was
        not  necessary to change it in all of the  files,  only  one
        file  required modification which was then "included" in the
        source files.   Notice that the transcript data is stored in
        a doubly linked list with the data itself being stored in  a
        separate  dynamically allocated char string.   This line  is
        pointed to by the pointer "lineloc".

             For  ease  of development,  the similar functions  were
        grouped together and compiled separately.   Thus, all of the
        functions  involving the monitor were included in  the  file
        named  VIDEO.C,  and all of the functions involving the data
        storage were grouped into the FILE.C  collection.   Dividing
        your  program  in  a  way similar to  this  should  simplify
        debugging and future modifications.

             Of special interest is the "monitor()" function.   This
        function  examines  the  video mode through  use  of  a  DOS
        command  and  if it is a 7,  it assumes it is  a  monochrome
        monitor,  otherwise it assumes a color monitor.   The colors
        of  the various fields are established at this time and used
        throughout  the  program.   Most  of  the  data  is  written
        directly  to the video memory,  but some is written  through
        the standard BIOS routines.

             The file DEFIN.H is a catalogue of the functions to aid
        in finding the functions.  This file was generated as one of
        the  first  files  and was maintained and  updated  for  use
        during  the  entire  design and coding  lifetime.   It  also
        contains all of the prototype definitions for the  functions
        in  all  of  the source files, and is  "included"  in  every
        source file to do prototype checking.

             The  file  VC.PRJ  is included as an  aid  for  you  to
        compile  and  link this program.  The Visual  Calculator  is
        supplied  to you as VC.EXE already compiled and  linked  for
        you.  Feel free, after understanding this code, to modify it
        in any way you desire for your own use.



                                  Page 104
```
{% endraw %}

## CHAP2.TXT

{% raw %}
```

                   Chapter 2 - Getting started in Turbo C


                            YOUR FIRST C PROGRAM

             The  best way to get started with C is to actually look
        at  a  program, so load the file named  TRIVIAL.C  with  the
        Integrated Environment for display on the monitor.  You  are
        looking at the simplest possible C program.  There is no way
        to   simplify  this  program  or  to  leave  anything   out.
        Unfortunately, the program doesn't do anything.

             The  word  "main" is very important,  and  must  appear
        once,  and only once in every C program.   This is the point
        where execution is begun when the program is run.   We  will
        see  later that this does not have to be the first statement
        in  the  program  but  it must exist  as  the  entry  point.
        Following  the "main" program name is a pair of  parentheses
        which  are  an  indication to the compiler that  this  is  a
        function.   We will cover exactly what a function is in  due
        time.   For now,  I suggest that you simply include the pair
        of parentheses.

             The  two curly brackets,  properly called  braces,  are
        used to define the limits of the program itself.  The actual
        program  statements  go between the two braces and  in  this
        case,  there  are  no  statements because the  program  does
        absolutely nothing.  You can compile and run this program by
        hitting Alt-R if in the Integrated Environment, but since it
        has no executable statements, it does nothing.  Keep in mind
        however, that it is a valid C program.

                       A PROGRAM THAT DOES SOMETHING

             For  a much more interesting program,  load the program
        named WRTSOME.C and display it on your monitor.   It is  the
        same  as  the  previous  program  except  that  it  has  one
        executable statement between the braces.

             The  executable  statement  is a  call  to  a  function
        supplied as a part of your Turbo C library.  Once again,  we
        will not worry about what a function is, but only how to use
        this  one  named "printf".  In order to output text  to  the
        monitor,  it  is  put within the  function  parentheses  and
        bounded by quotation marks.  The end result is that whatever
        is included between the quotation marks will be displayed on
        the monitor when the program is run.

             Notice the semi-colon at the end of the line.  C uses a
        semi-colon as a statement terminator,  so the semi-colon  is
        required  as  a  signal to the compiler that  this  line  is
        complete.   This  program  is also executable,  so  you  can
        compile  and  run  it to see if it does what  you  think  it
        should.


                                 Page 7









                   Chapter 2 - Getting started in Turbo C




                      ANOTHER PROGRAM WITH MORE OUTPUT

             Load  the  program  WRTMORE.C and display  it  on  your
        monitor  for an example of more output and another small but
        important concept.  You will see that there are four program
        statements  in  this program, each one being a call  to  the
        function  "printf".   The top line will be  executed  first,
        then the next, and so on, until the fourth line is complete.
        The statements are executed in order from top to bottom.

             Notice  the funny character near the end of  the  first
        line,  namely  the backslash.   The backslash is used in the
        printf   statement  to  indicate  that  a  special   control
        character  is  following.  In this case, the  "n"  indicates
        that  a  "newline" is requested.  This is an  indication  to
        return  the cursor to the left side of the monitor and  move
        down  one  line.  It is commonly referred to as  a  carriage
        return/line  feed.  Any place within text that  you  desire,
        you  can put a newline character and start a new line.   You
        could even put it in the middle of a word and split the word
        between two lines.  The C compiler considers the combination
        of the backslash and letter n as one character.

             A complete description of this program is now possible.
        The  first  printf outputs a line of text  and  returns  the
        carriage.   The  second printf outputs a line but  does  not
        return  the carriage so that the third line is  appended  to
        the second, then followed by two carriage returns, resulting
        in a blank line.  Finally the fourth "printf" outputs a line
        followed by a carriage return and the program is complete.

             Compile and run this program to see if it does what you
        expect  it to do.   It would be a good idea at this time for
        you to experiment by adding additional lines of printout  to
        see if you understand how the statements really work.

                          LETS PRINT SOME NUMBERS

             Load  the  file named ONEINT.C and display  it  on  the
        monitor for our first example of how to work with data in  a
        C program.  The entry point "main" should be clear to you by
        now as well as the beginning brace.  The first new thing  we
        encounter is the line containing "int index;", which is used
        to define an integer variable named "index".  The "int" is a
        reserved  word  in  C, and can therefore  not  be  used  for
        anything else.  It defines a variable that can have a  value
        from  -32768  to  32767  in Turbo C, and  in  most  other  C
        compilers  for microcomputers.  The variable name,  "index",
        can be any name that follows the rules for an identifier and


                                 Page 8









                   Chapter 2 - Getting started in Turbo C


        is  not one of the reserved words for Turbo C. The  Turbo  C
        User's Guide has a list of reserved words on page 199.   The
        final  character  on  the  line,  the  semi-colon,  is   the
        statement terminator used in C.

             Note  that, even though we have defined a variable,  we
        have not yet assigned a value to it.  We will see in a later
        chapter  that additional integers could also be  defined  on
        the  same  line,  but we will  not  complicate  the  present
        situation.

             Observing the main body of the program, you will notice
        that  there are three statements that assign a value to  the
        variable  "index",  but only one at a time.   The first  one
        assigns the value of 13 to "index", and its value is printed
        out.   (We will see how shortly.)  Later, the value of 27 is
        assigned to "index",  and finally 10 is assigned to it, each
        value  being  printed out.   It should be intuitively  clear
        that  "index"  is  indeed  a variable  and  can  store  many
        different  values.   Please note that many times  the  words
        "printed  out" are used to mean "displayed on the  monitor".
        You  will  find that in many cases  experienced  programmers
        take  this  liberty,  probably due to the "printf"  function
        being used for monitor display.

                          HOW DO WE PRINT NUMBERS

             To  keep  our promise,  let's return  to  the  "printf"
        statements  for a definition of how they work.   Notice that
        they are all identical and that they all begin just like the
        "printf"  statements  we  have  seen  before.    The   first
        difference occurs when we come to the % character.   This is
        a  special character that signals the output routine to stop
        copying characters to the output and do something different,
        namely output a variable.   The % sign is used to signal the
        output  of  many different types of variables, but  we  will
        restrict  ourselves  to  only one  for  this  example.   The
        character  following the % sign is a "d", which signals  the
        output routine to get a decimal value and output it.   Where
        the decimal value comes from will be covered shortly.  After
        the  "d",  we  find the familiar \n, which is  a  signal  to
        return the video "carriage", and the closing quotation mark.

             All  of  the  characters between  the  quotation  marks
        define  the pattern of data to be output by this  statement,
        and  after  the pattern,  there is a comma followed  by  the
        variable name "index".  This is where the "printf" statement
        gets  the decimal value which it will output because of  the
        "%d"  we saw earlier.   We could add more "%d" output  field
        descriptors within the brackets and more variables following
        the  description  to cause more data to be printed with  one


                                 Page 9









                   Chapter 2 - Getting started in Turbo C


        statement.   Keep in mind however, that it is important that
        the  number of field descriptors and the number of  variable
        definitions must be the same or the runtime system will  get
        confused and probably quit with a runtime error.

             Much  more  will  be  covered at a later  time  on  all
        aspects  of input and output formatting.  A reasonably  good
        grasp  of  these  fundamentals are  necessary  in  order  to
        understand  the following lessons.  It is not  necessary  to
        understand everything about output formatting at this  time,
        only a fair understanding of the basics.

             Compile and run ONEINT.C and observe the output.

                        HOW DO WE ADD COMMENTS IN C

             Load the file COMMENTS.C and observe it on your monitor
        for an example of how comments can be added to a C  program.
        Comments  are  added to make a program more readable to  you
        but the compiler must ignore the comments.   The slash  star
        combination  is used in C for comment delimiters.   They are
        illustrated  in the program at hand.   Please note that  the
        program does not illustrate good commenting practice, but is
        intended  to illustrate where comments can go in a  program.
        It is a very sloppy looking program.

             The  first slash star combination introduces the  first
        comment  and  the star slash at the end of  the  first  line
        terminates this comment.  Note that this comment is prior to
        the beginning of the program illustrating that a comment can
        precede the program itself.  Good programming practice would
        include  a  comment  prior  to  the  program  with  a  short
        introductory  description of the program.   The next comment
        is  after the "main()" program entry point and prior to  the
        opening brace for the program code itself.

             The  third  comment starts after the  first  executable
        statement and continues for four lines.   This is  perfectly
        legal  because  a comment can continue for as many lines  as
        desired  until  it is terminated.   Note carefully  that  if
        anything  were included in the blank spaces to the  left  of
        the  three  continuation lines of the comment,  it would  be
        part  of the comment and would not be  compiled.   The  last
        comment  is located following the completion of the program,
        illustrating  that  comments can go nearly anywhere in  a  C
        program.

             Experiment  with  this program by  adding  comments  in
        other places to see what will happen. Comment out one of the
        printf  statements by putting comment delimiters both before
        and after it and see that it does not get printed out.


                                 Page 10









                   Chapter 2 - Getting started in Turbo C



             Comments are very important in any programming language
        because  you will soon forget what you did and why  you  did
        it.   It  will  be  much  easier to modify  or  fix  a  well
        commented  program  a year from now than one with few or  no
        comments.   You will very quickly develop your own  personal
        style of commenting.

             The Turbo C compiler will allow you to "nest"  comments
        which  can  be  very handy if you need to  "comment  out"  a
        section  of  code  during  debugging.   In  order  to   nest
        comments, you must make a change in the default by selecting
        the  "Options"  menu, followed by the "Compiler"  menu,  and
        finally the "Source" menu.  The default for nested  comments
        is off, but changing it will not affect any of the files  in
        this tutorial.

                           GOOD FORMATTING STYLE

             Load  the  file  GOODFORM.C  and  observe  it  on  your
        monitor.   It  is  an example of a well  formatted  program.
        Even though it is very short and therefore does very little,
        it  is very easy to see at a glance what it does.   With the
        experience  you have already gained in  this  tutorial,  you
        should  be  able  to very quickly grasp the meaning  of  the
        program in it's entirety.  Your C compiler ignores all extra
        spaces  and  all carriage returns  giving  you  considerable
        freedom  concerning how you format your program.   Indenting
        and  adding spaces is entirely up to you and is a matter  of
        personal  taste.   Compile and run the program to see if  it
        does what you expect it to do.

             Now load and display the program UGLYFORM.C and observe
        it.   How  long  will it take you to figure  out  what  this
        program  will do?   It doesn't matter to the compiler  which
        format style you use, but it will matter to you when you try
        to  debug  your program.   Compile this program and run  it.
        You may be surprised to find that it is the same program  as
        the  last  one,  except for the formatting.   Don't get  too
        worried about formatting style yet.  You will have plenty of
        time  to  develop  a  style of your own  as  you  learn  the
        language.   Be observant of styles as you see C programs  in
        magazines, books, and other publications.

             This  should  pretty well cover the basic  concepts  of
        programming  in  C,  but as there are many other  things  to
        learn, we will forge ahead to additional program structure.






                                 Page 11









                   Chapter 2 - Getting started in Turbo C


        PROGRAMMING EXERCISES

        1. Write a program to display your name on the monitor.

        2. Modify  the  program to display your address  and  phone
           number  on  separate  lines  by  adding  two  additional
           "printf" statements.














































                                 Page 12
```
{% endraw %}

## CHAP3.TXT

{% raw %}
```

                        Chapter 3 - Program Control


                               THE WHILE LOOP

             The  C programming language has several structures  for
        looping  and conditional branching.   We will cover them all
        in this chapter and we will begin with the while loop.   The
        while  loop continues to loop while some condition is  true.
        When   the   condition  becomes  false,   the   looping   is
        discontinued.   It therefore does just what it says it does,
        the name of the loop being very descriptive.

             Load the program WHILE.C and display it for an  example
        of  a while loop.   We begin with a comment and the  program
        name,  then  go  on  to define an integer  variable  "count"
        within the body of the program.  The variable is set to zero
        and we come to the while loop itself.  The syntax of a while
        loop is just as shown here.  The keyword "while" is followed
        by an expression of something in parentheses,  followed by a
        compound  statement  bracketed by braces.   As long  as  the
        expression in parenthesis is true, all statements within the
        braces will be executed.   In this case,  since the variable
        count  is incremented by one every time the  statements  are
        executed, it will eventually reach 6, the statement will not
        be executed,  and the loop will be terminated.   The program
        control   will   resume  at  the  statement  following   the
        statements in braces.

             We  will  cover  the compare  expression,  the  one  in
        parentheses, in the next chapter.  Until then, simply accept
        the  expressions for what you think they should do  and  you
        will probably be correct.

             Several  things must be pointed out regarding the while
        loop.   First,  if the variable count were initially set  to
        any  number greater than 5,  the statements within the  loop
        would  not be executed at all,  so it is possible to have  a
        while  loop  that  never  is  executed.   Secondly,  if  the
        variable  were  not incremented in the loop,  then  in  this
        case,  the loop would never terminate, and the program would
        never complete.   Finally, if there is only one statement to
        be executed within the loop, it does not need braces but can
        stand alone.

             Compile and run this program.

                             THE DO-WHILE LOOP

             A  variation  of the while loop is illustrated  in  the
        program DOWHILE.C,  which you should load and display.  This
        program  is nearly identical to the last one except that the
        loop  begins  with the reserved word  "do",  followed  by  a
        compound  statement  in  braces,   then  the  reserved  word


                                 Page 13









                        Chapter 3 - Program Control


        "while",  and  finally  an expression in  parentheses.   The
        statements in the braces are executed repeatedly as long  as
        the expression in parentheses is true.   When the expression
        in parentheses becomes false,  execution is terminated,  and
        control passes to the statements following this statement.

             Several  things  must  be pointed  out  regarding  this
        statement.  Since  the test is done at the end of the  loop,
        the  statements  in  the braces will always be  executed  at
        least once.   Secondly,  if "i" were not changed within  the
        loop,  the loop would never terminate, and hence the program
        would  never terminate.   Finally,  just like for the  while
        loop,  if  only  one statement will be executed  within  the
        loop,  no braces are required.  Compile and run this program
        to see if it does what you think it should do.

             It  should come as no surprise to you that these  loops
        can be nested.  That is, one loop can be included within the
        compound  statement of another loop,  and the nesting  level
        has no limit.

                                THE FOR LOOP

             The  "for" loop is really nothing new,  it is simply  a
        new  way  to describe the "while" loop.   Load and edit  the
        file  named  FORLOOP.C for an example of a  program  with  a
        "for"  loop.  The  "for" loop consists of the reserved  word
        "for" followed by a rather large expression in  parentheses.
        This expression is really composed of three fields separated
        by  semi-colons.   The  first field contains the  expression
        "index  = 0" and is an initializing field.   Any expressions
        in  this field are executed prior to the first pass  through
        the loop.   There is essentially no limit as to what can  go
        here,  but  good programming practice would require it to be
        kept simple.   Several initializing statements can be placed
        in this field, separated by commas.

             The second field,  in this case containing "index < 6",
        is  the  test which is done at the beginning  of  each  loop
        through  the program.   It can be any expression which  will
        evaluate  to a true or false.   (More will be said about the
        actual value of true and false in the next chapter.)

             The expression contained in the third field is executed
        each time the loop is executed but it is not executed  until
        after  those  statements  in the main body of the  loop  are
        executed.   This field, like the first, can also be composed
        of several operations separated by commas.

             Following  the  for()  expression  is  any  single   or
        compound statement which will be executed as the body of the


                                 Page 14









                        Chapter 3 - Program Control


        loop.   A  compound  statement  is  any  group  of  valid  C
        statements enclosed in braces.   In nearly any context in C,
        a  simple statement can be replaced by a compound  statement
        that will be treated as if it were a single statement as far
        as program control goes.  Compile and run this program.

             You  may  be  wondering why there  are  two  statements
        available that do exactly the same thing because the "while"
        and  the "for" loop do exactly the same thing.  The  "while"
        is convenient to use for a loop that you don't have any idea
        how many times the loop will be executed, and the "for" loop
        is  usually used in those cases when you are doing  a  fixed
        number  of  iterations.  The "for" loop is  also  convenient
        because  it moves all of the control information for a  loop
        into one place, between the parentheses, rather than at both
        ends  of the code.  It is your choice as to which you  would
        rather use.

                              THE IF STATEMENT

             Load  and  display the file IFELSE.C for an example  of
        our first conditional branching statement, the "if".  Notice
        first,  that there is a "for" loop with a compound statement
        as its executable part containing two "if" statements.  This
        is an example of how statements can be nested.  It should be
        clear  to  you  that each of the  "if"  statements  will  be
        executed 10 times.

             Consider the first "if" statement.   It starts with the
        keyword  "if" followed by an expression in parentheses.   If
        the expression is evaluated and found to be true, the single
        statement following the "if" is executed,  and if false, the
        following  statement  is  skipped.   Here  too,  the  single
        statement  can be replaced by a compound statement  composed
        of  several statements bounded by  braces.   The  expression
        "data  == 2" is simply asking if the value of data is  equal
        to 2,  this will be explained in detail in the next chapter.
        (Simply suffice for now that if "data = 2" were used in this
        context, it would mean a completely different thing.)

                            NOW FOR THE IF-ELSE

             The  second  "if"  is  similar to the  first  with  the
        addition  of a new reserved word,  the "else" following  the
        first  printf  statement.   This  simply says  that  if  the
        expression in the parentheses evaluates as true,  the  first
        expression  is executed,  otherwise the expression following
        the "else" is executed.   Thus,  one of the two  expressions
        will  always be executed,  whereas in the first example  the
        single expression was either executed or skipped.  Both will



                                 Page 15









                        Chapter 3 - Program Control


        find  many uses in your C programming efforts.   Compile and
        run this program to see if it does what you expect.

                           THE BREAK AND CONTINUE

             Load  the file named BREAKCON.C for an example  of  two
        new statements.  Notice that in the first "for", there is an
        if  statement that calls a break if xx equals 8.   The break
        will  jump  out of the loop you are in and  begin  executing
        statements following the loop,  effectively terminating  the
        loop.   This  is a valuable statement when you need to  jump
        out  of  a  loop  depending on the  value  of  some  results
        calculated  in the loop.   In this case,  when xx reaches 8,
        the  loop is terminated and the last value printed  will  be
        the previous value, namely 7.

             The  next  "for" loop,  contains a  continue  statement
        which  does not cause termination of the loop but jumps  out
        of the present iteration.  When the value of xx reaches 8 in
        this case,  the program will jump to the end of the loop and
        continue  executing  the loop,  effectively eliminating  the
        printf statement during the pass through the loop when xx is
        eight.   Compile and run the program to see if it does  what
        you expect.

                            THE SWITCH STATEMENT

             Load  and  display the file SWITCH.C for an example  of
        the  biggest construct yet in the C  language,  the  switch.
        The switch is not difficult, so don't let it intimidate you.
        It  begins with the keyword "switch" followed by a  variable
        in parentheses which is the switching variable, in this case
        "truck".   As many cases as desired are then enclosed within
        a pair of braces.  The reserved word "case" is used to begin
        each  case  entered followed by the value of  the  variable,
        then a colon, and the statements to be executed.

             In  this example,  if the variable "truck" contains the
        value 3 during this pass of the switch statement, the printf
        will  cause "The value is three" to be  displayed,  and  the
        "break" statement will cause us to jump out of the switch.

             Once  an  entry  point is  found,  statements  will  be
        executed until a "break" is found or until the program drops
        through  the bottom of the switch braces.   If the  variable
        has  the value 5,  the statements will begin executing where
        "case  5  :" is found,  but the first statements  found  are
        where the case 8 statements are.  These are executed and the
        break  statement  in the "case 8" portion  will  direct  the
        execution  out the bottom of the switch.   The various  case



                                 Page 16









                        Chapter 3 - Program Control


        values can be in any order and if a value is not found,  the
        default portion of the switch will be executed.

             It should be clear that any of the above constructs can
        be  nested  within  each  other  or  placed  in  succession,
        depending on the needs of the particular programming project
        at hand.

             Compile  and  run SWITCH.C to see if it does  what  you
        expect it to after this discussion.

             Load  and display the file GOTOEX.C for an example of a
        file  with some "goto" statements in it.   To use  a  "goto"
        statement,  you simply use the reserved word "goto" followed
        by the symbolic name to which you wish to jump.  The name is
        then  placed  anywhere in the program followed by  a  colon.
        You  are  not  allowed to jump into any loop,  but  you  are
        allowed to jump out of a loop.  Also, you are not allowed to
        jump out of any function into another.   These attempts will
        be  flagged  by  your Turbo C compiler as an  error  if  you
        attempt any of them.

             This  particular program is really a mess but it  is  a
        good example of why software writers are trying to eliminate
        the  use of the "goto" statement as much as  possible.   The
        only place in this program where it is reasonable to use the
        "goto"  is the one in line 18 where the program jumps out of
        the three nested loops in one jump.   In this case it  would
        be  rather messy to set up a variable and jump  successively
        out of all three loops but one "goto" statement gets you out
        of all three.

             Some  persons say the "goto" statement should never  be
        used  under  any circumstances, but this  is  rather  narrow
        minded  thinking.  If there is a place where a  "goto"  will
        clearly do a neater control flow than some other  construct,
        feel free to use it.  It should not be abused however, as it
        is in the rest of the program on your monitor.

             Entire  books  are written on  "gotoless"  programming,
        better known as Structured Programming.   These will be left
        to  your  study.   One  point  of reference  is  the  Visual
        Calculator described in Chapter 14 of this  tutorial.   This
        program  is  contained in four separately compiled  programs
        and  is a rather large complex program.   If you spend  some
        time studying the source code,  you will find that there  is
        not  a single "goto" statement anywhere in it.   Compile and
        run  GOTOEX.C  and study its output.   It would  be  a  good
        exercise  to rewrite it and see how much more readable it is
        when the statements are listed in order.



                                 Page 17









                        Chapter 3 - Program Control


                       FINALLY, A MEANINGFUL PROGRAM

             Load  the  file  named TEMPCONV.C for an example  of  a
        useful,  even  though somewhat limited program.   This is  a
        program  that generates a list of centigrade  and fahrenheit
        temperatures  and prints a message out at the freezing point
        of water and another at the boiling point of water.

             Of particular importance is the formatting.  The header
        is  simply  several lines of comments  describing  what  the
        program  does in a manner that catches the readers attention
        and  is  still  pleasing to the  eye.  You  will  eventually
        develop your own formatting style, but this is a good way to
        start.   Also if you observe the for loop,  you will  notice
        that  all  of  the contents of the  compound  statement  are
        indented  3 spaces to the right of the "for" reserved  word,
        and  the  closing brace is lined up under the "f" in  "for".
        This  makes debugging a bit easier because the  construction
        becomes  very  obvious.   You  will  also  notice  that  the
        "printf"  statements that are in the "if" statements  within
        the  big  "for" loop are indented  three  additional  spaces
        because they are part of another construct.

             This  is  the first program in which we used more  than
        one  variable.   The three variables are simply  defined  on
        three  different lines and are used in the same manner as  a
        single variable was used in previous programs.   By defining
        them  on different lines,  we have an opportunity to  define
        each with a comment.

                      ANOTHER POOR PROGRAMMING EXAMPLE

             Recalling  UGLYFORM.C from the last chapter,  you saw a
        very  poorly  formatted program.   If you load  and  display
        DUMBCONV.C you will have an example of poor formatting which
        is  much closer to what you will find in practice.  This  is
        the same program as TEMPCONV.C with the comments removed and
        the variable names changed to remove the descriptive  aspect
        of  the names.  Although this program does exactly the  same
        as  the  last  one, it is much more difficult  to  read  and
        understand.   You should begin to develop  good  programming
        practices now.

             Compile  and  run  this program to  see  that  it  does
        exactly what the last one did.








                                 Page 18









                        Chapter 3 - Program Control


        PROGRAMMING EXERCISES

        1.  Write a program that writes your name on the monitor ten
            times.   Write this program three times, once with  each
            looping method.

        2.  Write a program that counts from one to ten, prints the
            values  on  a separate line for each,  and  includes  a
            message  of  your  choice when the count  is  3  and  a
            different message when the count is 7.











































                                 Page 19
```
{% endraw %}

## CHAP4.TXT

{% raw %}
```

                 Chapter 4 - Assignment & Logical compares


                       INTEGER ASSIGNMENT STATEMENTS

             Load the file INTASIGN.C and display it for an  example
        of  assignment statements.   Three variables are defined for
        use  in the program and the rest of the program is merely  a
        series of illustrations of various assignments.   The  first
        two  lines  of  the assignment statements  assign  numerical
        values  to "a" and "b",  and the next five lines  illustrate
        the  five  basic arithmetic functions and how to  use  them.
        The  fifth is the modulo operator and gives the remainder if
        the two variables were divided.   It can only be applied  to
        "int"  or  "char"  type  variables,   and  of  course  "int"
        extensions such as "long",  "short",  etc.  Following these,
        there  are two lines illustrating how to combine some of the
        variables  in  some complex math expressions.   All  of  the
        above examples should require no comment except to say  that
        none  of  the equations are meant to be particularly  useful
        except  as illustrations.  The "char" type variable will  be
        defined in the description of the next example program.

             The  expressions  in  lines 17  and  18  are  perfectly
        acceptable  as given, but we will see later in this  chapter
        that  there is another way to write these for  more  compact
        code.

             This leaves us with the last two lines which may appear
        to  you  as being very strange.   The C compiler  scans  the
        assignment  statement from right to left,  (which may seem a
        bit odd since we do not read that way),  resulting in a very
        useful construct,  namely the one given here.   The compiler
        finds the value 20, assigns it to "c", then continues to the
        left finding that the latest result of a calculation  should
        be  assigned to "b".   Thinking that the latest  calculation
        resulted in a 20,  it assigns it to "b" also,  and continues
        the leftward scan assigning the value 20 to "a" also.   This
        is a very useful construct when you are initializing a group
        of  variables.   The last statement illustrates that  it  is
        possible  to actually do some calculations to arrive at  the
        value  which  will be assigned to all three  variables.   In
        fact,  the rightmost expression can contain variables,  even
        "a", "b", & "c".

             The  program has no output, so compiling and  executing
        this  program  will be very uninteresting.  Since  you  have
        already  learned how to display some integer  results  using
        the "printf" function, it would be to your advantage to  add
        some output statements to this program to see if the various
        statements do what you think they should do.

             This would be a good time for a preliminary  definition
        of  a  rule to be followed in C.   The data definitions  are


                                  Page 20









                 Chapter 4 - Assignment & Logical compares


        always given before any executable statements in any program
        block.   This is why the variables are defined first in this
        program and in every C program.  If you try to define a  new
        variable  after  executing  some  statements,  the  Turbo  C
        compiler, and every other C compiler will issue an error.

                           ADDITIONAL DATA TYPES

             Loading and editing MORTYPES.C will illustrate how some
        additional  data  types can be used.   Once  again  we  have
        defined  a  few integer type variables which you  should  be
        fairly  familiar  with  by now,  but we have added  two  new
        types, the "char", and the "float".

             The  "char"  type  of data is nearly the  same  as  the
        integer  except that it can only be assigned values  between
        -128 to 127, since it is stored in only one byte of  memory.
        The "char" type of data is usually used for ASCII data, more
        commonly  known  as  text.  The text  you  are  reading  was
        originally written on a computer with a word processor  that
        stored the words in the computer one character per byte.  In
        contrast,  the integer data type is stored in two  bytes  of
        computer memory on microcomputers using Turbo C.

                              DATA TYPE MIXING

             It  would be profitable at this time to discuss the way
        C handles the two types "char" and "int".  Most functions in
        C  that are designed to operate with integer type  variables
        will work equally well with character type variables because
        they  are a form of an integer variable.   Those  functions,
        when called on to use a "char" type variable,  will actually
        promote  the "char" data into integer data before using  it.
        For this reason, it is possible to mix "char" and "int" type
        variables in nearly any way you desire.   The compiler  will
        not get confused,  but you might.  It is good not to rely on
        this too much, but to carefully use only the proper types of
        data where they should be used.

              The second new data type is the "float" type of  data,
        commonly  called floating point data.  This is a  data  type
        which  usually  has a very large range, a  large  number  of
        significant digits, and a large number of computer words are
        required  to store it.  The "float" data type has a  decimal
        point  associated with it and, in Turbo C, has an  allowable
        range of from 3.4E-38 to 3.4E+38, and is composed of about 7
        significant digits.

                       HOW TO USE THE NEW DATA TYPES

             The  first three lines of the program assign values  to


                                  Page 21









                 Chapter 4 - Assignment & Logical compares


        all nine of the defined variables so we can manipulate  some
        of the data between the different types.

             Since,  as  mentioned above,  a "char" data type is  in
        reality  an "integer" data type,  no special  considerations
        need be taken to promote a "char" to an "int",  and a "char"
        type data field can be assigned to an "int" variable.   When
        going the other way, there is no standard, so you may simply
        get garbage if the value of the integer variable is  outside
        the  range of the "char" type variable.   It will  translate
        correctly if the value is within the range of -128 to 127.

             The   third   line   illustrates  the   simplicity   of
        translating an integer into a "float",  simply assign it the
        new  value  and the system will do  the  proper  conversion.
        When  going  the  other  way  however,  there  is  an  added
        complication.   Since  there may be a fractional part of the
        floating  point number,  the system must decide what  to  do
        with it.  By definitions , it will truncate it.

             This program produces no output, and we haven't covered
        a way to print out "char" and "float" type variables, so you
        can't  really  get  in  to this program and  play  with  the
        results, but the next program will cover this for you.

             Compile  and  run  this program, then go  back  to  the
        Edit/Message  screen (by pressing any key) and  observe  the
        message  window.   Notice  that there  are  several  warning
        messages telling you that 6 variables were assigned a  value
        and  never  used.   These  warning  messages  are  for  your
        benefit,  so  it would pay you to keep a close  eye  on  the
        message window when writing and debugging a program.

                          LOTS OF VARIABLE TYPES

             Load the file LOTTYPES.C and display it on your screen.
        This  file contains nearly every standard simple  data  type
        available  in the programming language C.  There  are  other
        types,  but  they are the compound types (ie  -  arrays  and
        structures) that we will cover in due time.

             Observe  the  file.  First we define  a  simple  "int",
        followed by a "long int" which has a range of -2147483648 to
        2147483647  in Turbo C, and a "short int" which has a  range
        that is identical to that for the "int" variable in Turbo C,
        namely  -32768  to  32767. The "unsigned"  is  next  and  is
        defined as the same size as the "int" but with no sign.  The
        "unsigned" then will cover a range of 0 to 65535 in Turbo C.
        It  should be pointed out that when the "long", "short",  or
        "unsigned" is desired, the "int" is optional and is left out
        by  most experienced programmers.  We have  already  covered


                                  Page 22









                 Chapter 4 - Assignment & Logical compares


        the "char" and the "float", which leaves only the  "double".
        The "double" covers a greater range than the "float" and has
        more  significant digits for more precise calculations.   It
        also  requires more memory to store a value than the  simple
        "float". The "double" in Turbo C covers a range of  1.7E-308
        to 1.7E+308.

             Note  that other compounding of types can be done  such
        as "long unsigned int", "unsigned char", etc.  See pages  84
        to 86 of the TURBO C version 1.0 User's Guide.

             Another  diversion  is in order at  this  point.   Your
        Turbo  C  compiler,  like  most other  C  compilers  has  no
        provisions for floating point math, but only double floating
        point math.  It will promote a "float" to a "double"  before
        doing calculations and therefore only one math library  will
        be  needed.  Of course, this is totally transparent to  you,
        so  you don't need to worry about it.  Because of this,  you
        may  think  that  it would be best to  simply  define  every
        floating  point variable as double, since they are  promoted
        before  use in any calculations, but that may not be a  good
        idea.  A "float" variable requires 4 bytes of storage and  a
        "double" requires 8 bytes of storage, so if you have a large
        volume  of floating point data to store, the  "double"  will
        obviously require much more memory.

             After  defining  the data types in  the  program  under
        consideration, a numerical value is assigned to each of  the
        defined  variables  in  order to demonstrate  the  means  of
        outputting each to the monitor.

                            THE CONVERSION CHARACTERS

             Following   is  a  list  of  some  of  the   conversion
        characters  and  the  way  they are  used  in  the  "printf"
        statement.   A  complete  list  of  all  of  the  conversion
        characters  is  given  on page 171 to 178  of  the  Turbo  C
        Reference Guide.

             d    decimal notation
             o    octal notation
             x    hexadecimal notation
             u    unsigned notation
             c    character notation
             s    string notation
             f    floating point notation

             Each  of  these  is used following a  percent  sign  to
        indicate  the type of output conversion,  and between  those
        two characters, the following  fields may be added.



                                  Page 23









                 Chapter 4 - Assignment & Logical compares


             -    left justification in its field
             (n)  a number specifying minimum field width
             .    to separate n from m
             (m)  significant fractional digits for a float
             l    to indicate a "long"

             These  are all used in the examples which are  included
        in the program presently displayed on your monitor, with the
        exception of the string notation which will be covered later
        in  this tutorial. Note especially the variable field  width
        specification  demonstrated in lines 33 to 36.  This is  not
        part of the original definition of C, but it is included  in
        the  proposed  ANSI standard and will become part of  the  C
        language.   Compile and run this program to see what  effect
        the various fields have on the output.

             You  now  have the ability to display any of  the  data
        fields  in  the  previous programs and it would be  to  your
        advantage to go back and see if you can display some of  the
        fields anyway you desire.

                              LOGICAL COMPARES

             Load  and  view  the file  named  COMPARES.C  for  many
        examples  of compare statements in C.   We begin by defining
        and  initializing  nine variables to use  in  the  following
        compare  statements.   This initialization is new to you and
        can be used to initialize variables while they are defined.

             The  first  group of compare statements represents  the
        simplest  kinds  of compares since they simply  compare  two
        variables.    Either  variable  could  be  replaced  with  a
        constant and still be a valid compare,  but two variables is
        the general case.  The first compare checks to see if "x" is
        equal  to  "y"  and it uses the double equal  sign  for  the
        comparison.   A single equal sign could be used here but  it
        would have a different meaning as we will see shortly.   The
        second  comparison checks to see if "x" is greater than "z".

             The  third compare introduces the "NOT"  operator,  the
        exclamation,  which can be used to invert the result of  any
        logical  compare.   The fourth checks for "b" less  than  or
        equal to "c", and the last checks for "r" not equal to  "s".
        As  we  learned in the last chapter, if the  result  of  the
        compare  is  true, the statement following the  "if"  clause
        will be executed and the results are given in the  comments.
        Note  that  "less than" and "greater than or equal  to"  are
        also available, but are not illustrated here.

             It  would be well to mention the different format  used
        for the "if" statement in this example program.   A carriage


                                  Page 24









                 Chapter 4 - Assignment & Logical compares


        return  is  not  required as a statement  separator  and  by
        putting the conditional clause on the same line as the "if",
        it adds to the readability of the overall program.

                               MORE COMPARES

             The  compares  in  the  second group  are  a  bit  more
        involved.  Starting with the first compare, we find a rather
        strange  looking set of conditions in the  parentheses.   To
        understand  this  we must understand just what a  "true"  or
        "false"  is in the C language.   A "false" is defined  as  a
        value  of zero,  and "true" is defined as a non-zero  value.
        Any  integer  or char type of variable can be used  for  the
        result of a true/false test, or the result can be an implied
        integer or char.

             Look  at  the  first  compare of the  second  group  of
        compare statements.   The expression "r != s" will  evaluate
        as  a "true" since "r" was set to 0.0 above,  so the  result
        will be a non-zero value.  In Turbo C, it seems to always be
        a  1,  but you could get in trouble if you wrote  a  program
        that depended on it being 1 in all cases.  Good  programming
        practice  would  be  to  not use  the  resulting  1  in  any
        calculations.   Even  though  the  two  variables  that  are
        compared  are "float" variables, the result will be of  type
        "integer".   There is no explicit variable to which it  will
        be  assigned  so  the result of the compare  is  an  implied
        integer.   Finally the resulting number, probably 1 in  this
        case,  is assigned to the integer variable "x".   If  double
        equal signs were used, the phantom value, namely 1, would be
        compared  to  the value of "x", but since the  single  equal
        sign  is  used, the value 1 is simply assigned  to  "x",  as
        though  the  statement were not  in  parentheses.   Finally,
        since  the result of the assignment in the  parentheses  was
        non-zero, the entire expression is evaluated as "true",  and
        "z" is assigned the value of 1000.  Thus we accomplished two
        things  in  this  statement, we assigned "x"  a  new  value,
        probably  1,  and  we assigned "z" the value  of  1000.   We
        covered a lot in this statement so you may wish to review it
        before  going on.  The important things to remember are  the
        values  that  define "true" and "false", and the  fact  that
        several  things can be assigned in a conditional  statement.
        The  value  assigned to "x" was probably a 1,  but  remember
        that the only requirement is that it is nonzero.

             The next example should help clear up some of the above
        in your mind.  In this example, "x" is assigned the value of
        "y",  and since the result is 11, the condition is non-zero,
        which is true,   and the variable "z" is therefore  assigned
        222.



                                  Page 25









                 Chapter 4 - Assignment & Logical compares


             The third example, in the second group, compares "x" to
        zero.   If  the result is true,  meaning that if "x" is  not
        zero,  then "z" is assigned the value of 333,  which it will
        be.   The  last  example in this group illustrates the  same
        concept,  since the result will be true if "x" is  non-zero.
        The compare to zero is not actually needed and the result of
        the compare is true.   The third and fourth examples of this
        group are therefore identical.

                        ADDITIONAL COMPARE CONCEPTS

             The   third  group  of  compares  will  introduce  some
        additional  concepts,  namely  the  logical  "AND"  and  the
        logical  "OR".   We  assign  the value of 77  to  the  three
        integer  variables  simply to get started  again  with  some
        defined  values.   The  first  compare of  the  third  group
        contains  the new control "&&",  which is the logical "AND".
        The  entire statement reads,  if "x" equals "y" AND  if  "x"
        equals  77 then the result is "true".   Since this is  true,
        the variable z is set equal to 33.

             The  next  compare  in this group introduces  the  "||"
        operator which is the "OR".   The statement reads, if "x" is
        greater  than  "y"  OR if "z" is greater than  12  then  the
        result is true.   Since "z" is greater than 12,  it  doesn't
        matter  if "x" is greater than "y" or not,  because only one
        of  the  two conditions must be true for the  result  to  be
        true.  The result is true, so therefore "z" will be assigned
        the value of 22.

                             LOGICAL EVALUATION

             When a compound expression is evaluated, the evaluation
        proceeds from left to right and as soon as the result of the
        outcome is assured,  evaluation stops.   Namely, in the case
        of  an "AND" evaluation,  when one of the terms evaluates to
        "false",  evaluation is discontinued because additional true
        terms  cannot make the result ever become  "true".   In  the
        case of an "OR" evaluation,  if any of the terms is found to
        be  "true",  evaluation stops because it will be  impossible
        for additional terms to cause the result to be "false".   In
        the case of additionally nested terms,  the above rules will
        be applied to each of the nested levels.

                          PRECEDENCE OF OPERATORS

             The  question will come up concerning the precedence of
        operators.   Which  operators are evaluated first and  which
        last?   There are many rules about this topic, but  I  would
        suggest  that  you  don't  worry about  it  at  this  point.
        Instead,  use  lots  of  parentheses  to  group   variables,


                                  Page 26









                 Chapter 4 - Assignment & Logical compares


        constants,  and  operators  in  a  way  meaningful  to  you.
        Parentheses always have the highest priority and will remove
        any  question of which operations will be done first in  any
        particular statements.

             Going  on to the next example in group three,  we  find
        three  simple variables used in the conditional part of  the
        compare.   Since  all  three  are non-zero,  all  three  are
        "true",  and therefore the "AND" of the three variables  are
        true,  leading  to  the result being "true",  and "z"  being
        assigned  the value of 11.   Note that since the  variables,
        "r", "s", and "t" are "float" type variables, they could not
        be  used this way,  but they could each be compared to  zero
        and the same type of expression could be used.

             Continuing on to the fourth example of the third  group
        we  find three assignment statements in the compare part  of
        the "if" statement.  If you understood the above discussion,
        you  should have no difficulty understanding that the  three
        variables are assigned their respective new values,  and the
        result  of  all three are non-zero,  leading to a  resulting
        value of "TRUE".

                        THIS IS A TRICK, BE CAREFUL

             The last example of the third group contains a bit of a
        trick, but since we have covered it above, it is nothing new
        to you.  Notice that the first part of the compare evaluates
        to  "FALSE".   The  remaining parts of the compare  are  not
        evaluated,  because it is an "AND" and it will definitely be
        resolved as a "FALSE" because the first term is  false.   If
        the program was dependent on the value of "y" being set to 3
        in  the  next  part of the compare,  it  will  fail  because
        evaluation  will  cease following the "FALSE" found  in  the
        first  term.   Likewise,  "z" will not be set to 4,  and the
        variable "r" will not be changed.

                          POTENTIAL PROBLEM AREAS

             The   last   group   of   compares   illustrate   three
        possibilities for getting into a bit of trouble.   All three
        have  the  common  result that "z" will not get set  to  the
        desired value,  but for different reasons.   In the case  of
        the  first  one,  the compare evaluates as "true",  but  the
        semicolon  following the second parentheses  terminates  the
        "if"  clause,  and the assignment statement involving "z" is
        always executed as the next statement.   The "if"  therefore
        has  no  effect  because of the  misplaced  semicolon.   The
        second  statement is much more straightforward  because  "x"
        will  always  be equal to itself,  therefore the  inequality
        will never be true, and the entire statement will never do a


                                  Page 27









                 Chapter 4 - Assignment & Logical compares


        thing, but is wasted effort.  The last statement will always
        assign  0  to "x" and the compare will therefore  always  be
        "false",  never  executing the conditional part of the  "if"
        statement.

             The  conditional  statement is extremely important  and
        must be thoroughly understood to write efficient C programs.
        If  any  part of this discussion is unclear  in  your  mind,
        restudy  it  until you are confident that you understand  it
        thoroughly before proceeding onward.

             Compile and run this program and once again, return  to
        the  Edit/Message  screen to observe the  warning  messages.
        The Turbo C compiler is warning us that we have a  "possibly
        incorrect assignment in function main" because we have  used
        an  assignment statement within the conditional part of  the
        "if" statements.  Once again, the warnings are for our  aid,
        and  should  be carefully attended to.  In  this  case,  the
        assignments   were  purposely  inserted  for   instructional
        purposes  but assignments are not generally used in  compare
        statements  and  Turbo C is warning you that  you  may  have
        intended to use the double equal sign.

             Compile and run this program, then add some printout to
        see the results of some of the comparisons.

                           THE CRYPTIC PART OF C

             There are three constructs used in C that make no sense
        at   all  when  first  encountered  because  they  are   not
        intuitive,  but they greatly increase the efficiency of  the
        compiled  code  and  are used extensively by  experienced  C
        programmers.   You  should therefore be exposed to them  and
        learn to use them because they will appear in most,  if  not
        all,  of the programs you see in the publications.  Load and
        examine  the file named CRYPTIC.C for examples of the  three
        new constructs.

             In  this  program,   some  variables  are  defined  and
        initialized in the same statements for use below.  The first
        executable statement simply adds 1 to the value of "x",  and
        should come as no surprise to you.   The next two statements
        also  add one to the value of "x",  but it is not  intuitive
        that this is what happens.   It is simply by definition that
        this is true.  Therefore, by definition of the C language, a
        double   plus  sign  either  before  or  after  a   variable
        increments  that variable by 1.   Additionally,  if the plus
        signs are before the variable,  the variable is  incremented
        before  it  is used,  and if the plus signs  are  after  the
        variable,  the variable is used,  then incremented.   In the
        next statement, the value of "y" is assigned to the variable


                                  Page 28









                 Chapter 4 - Assignment & Logical compares


        "z",  then  "y"  is incremented because the plus  signs  are
        after  the  variable  "y".   In the last  statement  of  the
        incrementing  group of example statements,  the value of "y"
        is  incremented then its value is assigned to  the  variable
        "z".

             The  next group of statements illustrate decrementing a
        variable by one.   The definition works exactly the same way
        for decrementing as it does for incrementing.   If the minus
        signs are before the variable,  the variable is decremented,
        then  used,  and if the minus signs are after the  variable,
        the variable is used, then decremented.

                      THE CRYPTIC ARITHMETIC OPERATOR

             Another  useful but cryptic operator is the  arithmetic
        operator.   This operator is used to modify any variable  by
        some constant value.  The first statement of the "arithmetic
        operator" group of statements simply adds 12 to the value of
        the variable "a".   The second statement does the same,  but
        once again, it is not intuitive that they are the same.  Any
        of the four basic functions of arithmetic, "+", "-", "*", or
        "/",  can  be handled in this way,  by putting the  function
        desired  in  front  of the equal sign  and  eliminating  the
        second  reference to the variable name.   It should be noted
        that  the  expression on the right side  of  the  arithmetic
        operator can be any valid expression,  the examples are kept
        simple for your introduction to this new operator.

             Just  like the incrementing and decrementing operators,
        the arithmetic operator is used extensively by experienced C
        programmers and it would pay you well to understand it.

                         THE CONDITIONAL EXPRESSION

             The  conditional expression is just as cryptic  as  the
        last  two,  but once again it can be very useful so it would
        pay you to understand it.   It consists of three expressions
        within parentheses separated by a question mark and a colon.
        The  expression prior to the question mark is  evaluated  to
        determine  if it is "true" or "false".   If it is true,  the
        expression  between  the  question mark  and  the  colon  is
        evaluated,  and if it is not true,  the expression following
        the  colon  is evaluated.   The result of the evaluation  is
        used for the assignment.   The final result is identical  to
        that  of an "if" statement with an "else" clause.   This  is
        illustrated  by  the  second example  in  this  group.   The
        conditional  expression  has  the added  advantage  of  more
        compact code that will compile to fewer machine instructions
        in the final program.



                                  Page 29









                 Chapter 4 - Assignment & Logical compares


             The  final two lines of this example program are  given
        to  illustrate  a very compact way to assign the greater  of
        two variables "a" or "b" to "c", and to assign the lessor of
        the  same two variables to "c".   Notice how  efficient  the
        code is in these two examples.

             Compile and run this program and notice that once again
        we  get  a few warning to take heed to.  Since we  are  only
        demonstrating how to do these things, they are not  actually
        a problem but in a real program, these assignments would  be
        wasted code.

                     TO BE CRYPTIC OR NOT TO BE CRYPTIC

             Several students of C have stated that they didn't like
        these  three  cryptic constructs and that they would  simply
        never  use  them.  This will be fine if they never  have  to
        read  anybody  else's  program, or use  any  other  programs
        within their own.  I have found many functions that I wished
        to  use within a program but needed a small modification  to
        use  it, requiring me to understand another  person's  code.
        It  would therefore be to your advantage to learn these  new
        constructs, and use them. They will be used in the remainder
        of this tutorial, so you will be constantly exposed to them.

             This has been a long chapter but it contained important
        material  to  get  you  started in using  C.   In  the  next
        chapter,  we  will go on to the building blocks  of  C,  the
        functions.  At that point, you will have enough of the basic
        materials to allow you to begin writing meaningful programs.

        PROGRAMMING EXERCISES

        1.   Write  a program that will count from 1 to 12 and print
             the count, and its square, for each count.
                  1    1
                  2    4
                  3    9   etc.

        2.   Write a program that counts from 1 to 12 and prints the
             count  and  its  inversion  to  5  decimal  places  for
             each count. This will require a floating point number.
                  1    1.00000
                  2     .50000
                  3     .33333
                  4     .25000
                  etc.

        3.   Write a program that will count from 1 to 100 and print
             only those values between 32 and 39, one to a line.


                                  Page 30
```
{% endraw %}

## CHAP5.TXT

{% raw %}
```

            Chapter 5 - Functions, variables, and prototypes


                      OUR FIRST USER DEFINED FUNCTION

             Load  and examine the file SUMSQRES.C for an example of
        a C program with functions.   Actually this is not the first
        function  we have encountered because the "main" program  we
        have been using all along is technically a function,  as  is
        the  "printf" function.   The "printf" function is a library
        function that was supplied with your compiler.

             Notice the executable part of this program which begins
        in  line  8.   It  begins  with  a  line  that  simply  says
        "header()",  which  is the way to call  any  function.   The
        parentheses are required because the C compiler uses them to
        determine  that  it  is a function call  and  not  simply  a
        misplaced variable.  When the program comes to this line  of
        code, the function named "header" is called, its  statements
        are executed, and control returns to the statement following
        this call.  Continuing on we come to a "for" loop which will
        be  executed 7 times and which calls another function  named
        "square" each time through the loop, and finally a  function
        named "ending" will be called and executed.  For the  moment
        ignore  the  "index"  in  the parentheses  of  the  call  to
        "square".  We have seen that this program therefore calls  a
        header, 7 square calls, and an ending. Now we need to define
        the functions.

                           DEFINING THE FUNCTIONS

             Following the main program you will see another program
        that  follows all of the rules set forth so far for a "main"
        program  except that it is named "header()".   This  is  the
        function which is called from within the main program.  Each
        of  these  statements are executed,  and when they  are  all
        complete, control returns to the main program.

             The  first  statement sets the variable "sum" equal  to
        zero because we will use it to accumulate a sum of  squares.
        Since  the  variable  "sum" is defined as  an  integer  type
        variable  prior to the main program,  it is available to  be
        used  in  any of the following functions.   It is  called  a
        "global" variable,  and it's scope is the entire program and
        all  functions.   More  will  be  said about  the  scope  of
        variables near the end of this chapter.  The next  statement
        outputs  a header message to the monitor.   Program  control
        then  returns  to  the  main  program  since  there  are  no
        additional statements to execute in this function.

             It should be clear to you that the two executable lines
        from  this  function  could be moved to  the  main  program,
        replacing the header call,  and the program would do exactly
        the same thing that it does as it is now written.  This does


                                  Page 31









            Chapter 5 - Functions, variables, and prototypes


        not minimize the value of functions,  it merely  illustrates
        the operation of this simple function in a simple way.   You
        will find functions to be very valuable in C programming.

                       PASSING A VALUE TO A FUNCTION

             Going  back  to the main program,  and the  "for"  loop
        specifically,  we find the new construct from the end of the
        last lesson used in the last part of the "for" loop,  namely
        the  "index++".  You should get used to seeing this, as  you
        will see it a lot in C programs.

             In the call to the function "square",  we have an added
        feature, namely the variable "index" within the parentheses.
        This  is  an indication to the compiler that when you go  to
        the function,  you wish to take along the value of index  to
        use in the execution of that function.  Looking ahead at the
        function  "square",  we  find that another variable name  is
        enclosed in its parentheses,  namely the variable  "number".
        This  is  the name we prefer to call the variable passed  to
        the  function when we are in the function.   We can call  it
        anything  we wish as long as it follows the rules of  naming
        an identifier.   Since the function must know what type  the
        variable  is,  it is defined following the function name but
        before the opening brace of the function itself.   Thus, the
        line  containing "int number;" tells the function  that  the
        value  passed to it will be an integer type variable.   With
        all of that out of the way,  we now have the value of  index
        from  the main program passed to the function "square",  but
        renamed "number", and available for use within the function.
        This  is the "classic" style of defining function  variables
        and has been in use since C was originally defined.  A newer
        method is gaining in popularity due to its many benefits and
        will be discussed later in this chapter.

             Following the opening brace of the function,  we define
        another  variable "numsq" for use only within  the  function
        itself,  (more  about  that  later)  and  proceed  with  the
        required  calculations.   We set "numsq" equal to the square
        of  number,  then add numsq to the current total  stored  in
        "sum".   Remember  that "sum += numsq" is the same as "sum =
        sum + numsq" from the last lesson.   We print the number and
        its square, and return to the main program.

                  MORE ABOUT PASSING A VALUE TO A FUNCTION

             When we passed the value of "index" to the function,  a
        little  more  happened  than meets  the  eye.   We  did  not
        actually  pass  the  value  of index  to  the  function,  we
        actually  passed  a  copy of the value.   In  this  way  the
        original value is protected from accidental corruption by  a


                                  Page 32









            Chapter 5 - Functions, variables, and prototypes


        called  function.   We  could  have  modified  the  variable
        "number" in any way we wished in the function "square",  and
        when we returned to the main program, "index" would not have
        been  modified.   We thus protect the value of a variable in
        the main program from being accidentally corrupted,  but  we
        cannot  return  a value to the main program from a  function
        using this technique.  We will find a well defined method of
        returning  values  to  the main program or  to  any  calling
        function  when we get to arrays and another method  when  we
        get  to pointers.   Until then the only way you will be able
        to  communicate  back to the calling function will  be  with
        global  variables.    We  have  already  hinted  at   global
        variables  above,  and will discuss them in detail later  in
        this chapter.

             Continuing  in  the main program,  we come to the  last
        function call, the call to "ending".  This call simply calls
        the last function which has no local variables defined.   It
        prints out a message with the value of "sum" contained in it
        to  end the program.   The program ends by returning to  the
        main  program and finding nothing else to do.   Compile  and
        run this program and observe the output.

                        NOW TO CONFESS A LITTLE LIE

             I told you a short time ago that the only way to get  a
        value  back to the main program was through use of a  global
        variable,  but  there  is another way which we will  discuss
        after  you load and display the file  named  SQUARES.C.   In
        this  file we will see that it is simple to return a  single
        value  from a called function to the calling function.   But
        once again,  it is true that to return more than one  value,
        we will need to study either arrays or pointers.

             In the main program, we define two integers and begin a
        "for"  loop  which  will be executed  8  times.   The  first
        statement of the "for" loop is "y = squ(x);", which is a new
        and rather strange looking construct.  From past experience,
        we  should have no trouble understanding that  the  "squ(x)"
        portion  of  the statement is a call to the  "squ"  function
        taking along the value of "x" as a variable.  Looking  ahead
        to the function itself we find that the function prefers  to
        call  the variable "in" and it proceeds to square the  value
        of  "in" and call the result "square".  Finally, a new  kind
        of  a statement appears, the "return" statement.  The  value
        within  the parentheses is assigned to the  function  itself
        and  is  returned  as a usable value in  the  main  program.
        Thus,  the function call "squ(x)" is assigned the  value  of
        the square and returned to the main program such that "y" is
        then  set  equal  to  that value.   If  "x"  were  therefore



                                  Page 33









            Chapter 5 - Functions, variables, and prototypes


        assigned  the value 4 prior to this call, "y" would then  be
        set to 16 as a result of this line of code.

             Another  way  to  think  of this  is  to  consider  the
        grouping  of characters "squ(x)" as another variable with  a
        value  that is the square of "x",  and this new variable can
        be used any place it is legal to use a variable of its type.
        The values of "x" and "y" are then printed out.

             To  illustrate  that the grouping of  "squ(x)"  can  be
        thought  of as just another variable,  another "for" loop is
        introduced in which the function call is placed in the print
        statement rather than assigning it to a new variable.

             One  last  point must be made,  the  type  of  variable
        returned must be defined in order to make sense of the data,
        but the compiler will default the type to integer if none is
        specified.   If  any  other  type is  desired,  it  must  be
        explicitly defined.   How to do this will be demonstrated in
        the next example program.

             Compile  and  run  this program  which  also  uses  the
        "classic" method of defining function variables.

                            FLOATING POINT FUNCTIONS

             Load the program FLOATSQ.C for an example of a function
        with a floating point type of return.  It begins by defining
        a global floating point variable we will use later.  Then in
        the  "main"  part  of the program,  an integer  is  defined,
        followed  by two floating point variables,  and then by  two
        strange  looking definitions.   The expressions "sqr()"  and
        "glsqr()"  look like function calls and they are.   This  is
        the proper way in C to define that a function will return  a
        value that is not of the type "int", but of some other type,
        in  this case "float".   This tells the compiler that when a
        value  is returned from either of these  two  functions,  it
        will be of type "float".  This is, once again, the "classic"
        method of defining functions.

             Now  refer to the function "sqr" near the center of the
        listing and you will see that the function name is  preceded
        by the name "float".   This is an indication to the compiler
        that  this  function will return a value of type "float"  to
        any program that calls it.   The function is now  compatible
        with  the call to it.   The line following the function name
        contains  "float inval;",  which indicates to  the  compiler
        that  the variable passed to this function from the  calling
        program will be of type "float".




                                  Page 34









            Chapter 5 - Functions, variables, and prototypes


             The next function,  namely "glsqr",  will also return a
        "float"  type  variable,  but it uses a global variable  for
        input.   It  also does the squaring right within the  return
        statement  and  therefore has no need to define  a  separate
        variable to store the product.

             The  overall structure of this program should  pose  no
        problem and will not be discussed in any further detail.  As
        is customary with all example programs, compile and run this
        program.

               THERE IS A BUG IN THE FIRST VERSION OF TURBO C

             When  you run this program, using version 1.0 of  Turbo
        C, you will find that the function named "sqr()" will return
        a  value of zero.  This is because it receives a  zero  from
        the  calling program.  The program is written correctly  but
        the compiler has a bug in it.  A call to Borland resulted in
        a  fix  by  simply using the  "modern"  method  of  function
        definition rather than the "classic" which has been used  to
        this  point.   As  you  read articles on  C,  you  will  see
        programs  written in the "classic" style, so you need to  be
        capable  of reading them.  It would be  highly  recommended,
        however,  that you learn and use the "modern"  method  which
        will be covered shortly in this tutorial.  We will return to
        this program and show how to fix it so that it will work  in
        spite of the bug.

             Note that this bug is fixed in TURBO C version 1.5.

                             SCOPE OF VARIABLES

             Load the next program,  SCOPE.C,  and display it for  a
        discussion  of the scope of variables in a program.   Ignore
        the 4 statements in lines 2 through 5 of this program for  a
        few moments, and we will discuss them later.

             The first variable defined is a global variable "count"
        which  is available to any function in the program since  it
        is defined before any of the functions.   In addition, it is
        always  available  because  it does not come and go  as  the
        program  is  executed.   (That  will  make  sense  shortly.)
        Farther down in the program,  another global variable  named
        "counter"  is  defined  which  is also  global  but  is  not
        available  to the main program since it is defined following
        the main program.  A global variable is any variable that is
        defined  outside of any function.   Note that both of  these
        variables  are sometimes referred to as  external  variables
        because they are external to any functions.




                                  Page 35









            Chapter 5 - Functions, variables, and prototypes


             Return  to  the  main  program and  you  will  see  the
        variable  "index"  defined as an integer.   Ignore the  word
        "register" for the moment.   This variable is only available
        within the main program because that is where it is defined.
        In addition, it is an "automatic" variable, which means that
        it  only comes into existence when the function in which  it
        is  contained  is  invoked,  and ceases to  exist  when  the
        function  is  finished.   This  really  means  nothing  here
        because the main program is always in operation,  even  when
        it  gives  control to another function.  Another integer  is
        defined  within  the  "for"  braces,  namely  "stuff".   Any
        pairing  of braces can contain a variable  definition  which
        will  be  valid  and  available only while  the  program  is
        executing statements within those braces.  The variable will
        be  an  "automatic" variable and will cease  to  exist  when
        execution leaves the braces.   This is convenient to use for
        a loop counter or some other very localized variable.

                       MORE ON "AUTOMATIC" VARIABLES

             Observe  the  function named "head1" in line  26  which
        looks  a  little funny because of "void" being  used  twice.
        The purpose of the uses of the word "void" will be explained
        shortly.  The  function contains a variable  named  "index",
        which  has  nothing  to  do with the  "index"  of  the  main
        program, except that both are automatic variables.  When the
        program  is  not  actually  executing  statements  in   this
        function,  this variable named "index" does not even  exist.
        When "head1" is called, the variable is generated, and  when
        "head1"  completes its task, the variable in  "head1"  named
        "index"  is eliminated completely from existence.   Keep  in
        mind  however that this does not affect the variable of  the
        same  name  in the main program, since it  is  a  completely
        separate entity.

             Automatic   variables  therefore,   are   automatically
        generated and disposed of when needed.   The important thing
        to remember is that from one call to a function to the  next
        call,  the  value of an automatic variable is not  preserved
        and must therefore be reinitialized.

                         WHAT ARE STATIC VARIABLES?

             An  additional variable type must be mentioned at  this
        point,  the "static" variable.  By putting the reserved word
        "static"  in  front  of  a  variable  declaration  within  a
        function,  the variable or variables in that declaration are
        static  variables  and will stay in existence from  call  to
        call  of  the  particular function.




                                  Page 36









            Chapter 5 - Functions, variables, and prototypes


             By  putting  the  same reserved word  in  front  of  an
        external variable, one outside of any function, it makes the
        variable  private  and  not accessible to use in  any  other
        file.  This implies that it is possible to refer to external
        variables  in other separately compiled files,  and that  is
        true.  Examples of this usage will be given in chapter 14 of
        this tutorial.

                         USING THE SAME NAME AGAIN

             Refer  to  the  function named  "head2".   It  contains
        another  definition  of the variable  named  "count".   Even
        though  "count"  has  already  been  defined  as  a   global
        variable,  it  is  perfectly all right to reuse the name  in
        this  function.   It is a completely new variable  that  has
        nothing to do with the global variable of the same name, and
        causes  the  global  variable  to  be  unavailable  in  this
        function.   This allows you to write programs using existing
        functions  without worrying about what names were  used  for
        variables in the functions because there can be no conflict.
        You  only  need to worry about the variables that  interface
        with the functions.

                        WHAT IS A REGISTER VARIABLE?

             Now  to  fulfill  a promise made earlier about  what  a
        register  variable  is.   A  computer can  keep  data  in  a
        register  or  in  memory.   A  register is  much  faster  in
        operation  than  memory  but there are  very  few  registers
        available for the programmer to use.   If there are  certain
        variables  that are used extensively in a program,  you  can
        designate  that  those  variables  are to  be  stored  in  a
        register  if possible in order to speed up the execution  of
        the program.  Turbo C allows you to use 2 register variables
        and will ignore additional requests if you request more than
        2.

             Turbo C allows you to use register variables for  short
        int and int types along with their unsigned counterparts. It
        also  allows  you  to  use register  storage  for  two  byte
        pointers which we will study in about 3 chapters.

                        WHERE DO I DEFINE VARIABLES?

             Now for a refinement on a general rule stated  earlier.
        When  you have variables brought to a function as  arguments
        to  the function, and you are using the "classic"  style  of
        programming, they are defined immediately after the function
        name and prior to the opening brace for the program.   Other
        variables used in the function are defined at the  beginning



                                  Page 37









            Chapter 5 - Functions, variables, and prototypes


        of the function, immediately following the opening brace  of
        the function, and before any executable statements.

                            WHAT IS PROTOTYPING?

             A  prototype  is a "model" of the real thing  and  when
        programming  in  Turbo C, you have the ability to  define  a
        "model" of each function for the compiler.  The compiler can
        then  use  the "model" to check each of your  calls  to  the
        function  and determine if you have used the correct  number
        of  arguments  in the function call and if they are  of  the
        correct type.  By using prototypes, you let the compiler  do
        some  additional error checking for you.  The ANSI  standard
        for  C  should be released late in 1987,  and  will  contain
        prototyping as part of its recommended standard.  Every good
        C  compiler will have prototyping available, so  you  should
        learn to use it.

             Returning to lines 3, 4, and 5 in SCOPE.C, we have  the
        prototypes  for  the three functions  contained  within  the
        program.   The first "void" in each line tells the  compiler
        that  these particular functions do not return a  value,  so
        that the compiler would flag the statement index =  head1();
        as  an  error because nothing is returned to assign  to  the
        variable  "index".  The word "void" within  the  parentheses
        tells the compiler that this function requires no parameters
        and  if a variable were included, it would be an  error  and
        the  compiler would issue a warning message.  If  you  wrote
        the  statement  head1(index);, it would be  a  error.   This
        allows  you  to use type checking when programming in  C  in
        much the same manner that it is used in Pascal, Modula 2, or
        Ada.

             You  should enable prototype checking with Turbo  C  at
        this  point to see how well it works.  In the "Option"  menu
        select  "Compiler", then "Errors", followed by "Less  common
        errors",  then  turn  on  "F:  Call  to  function  with   no
        prototype" by hitting the "F" key.  The program SCOPE.C will
        not produce any warnings, but RECURSON.C which is next  will
        result in some warning messages.

             Line 2 of SCOPE.C tells the system to go to the include
        files  and  get the file named STDIO.H  which  contains  the
        prototypes  for the standard input and output  functions  so
        they can be checked for proper variable types.  Don't  worry
        about the "include" yet, it will be covered in detail  later
        in this tutorial.

             Compile  and run this program and, when you  return  to
        the  Integrated  Environment,  observe  that  there  are  no
        warning messages.


                                  Page 38









            Chapter 5 - Functions, variables, and prototypes



                         STANDARD FUNCTION LIBRARIES

             Every  compiler  comes  with some  standard  predefined
        functions  which  are available for  your  use.   These  are
        mostly   input/output   functions,   character  and   string
        manipulation  functions, and math functions.  We will  cover
        most  of  these  in  subsequent  chapters.   Prototypes  are
        defined  for you by the Turbo C compiler writer for  all  of
        the  functions that are included with your compiler.  A  few
        minutes  spent  studying your Turbo C Reference  Guide  will
        give you an insight in where the prototypes are defined  for
        each of the functions.

             In addition,  most compilers have additional  functions
        predefined that are not standard but allow the programmer to
        get the most out of his particular computer.  In the case of
        the  IBM-PC and compatibles,  most of these functions  allow
        the  programmer  to use the BIOS services available  in  the
        operating system, or to write directly to the video  monitor
        or to any place in memory.  These will not be covered in any
        detail as you will be able to study these unique aspects  of
        the  Turbo  C  compiler on your own.   The  entire  Turbo  C
        Reference Guide is devoted to defining functions.   Many  of
        these kinds of functions are used in the example programs in
        chapter 14.

                             WHAT IS RECURSION?

             Recursion  is another of those  programming  techniques
        that  seem very intimidating the first time you come  across
        it,  but  if  you will load and display the example  program
        named RECURSON.C, we will take all of the mystery out of it.
        This  is probably the simplest recursive program that it  is
        possible  to write and it is therefore a stupid  program  in
        actual  practice,  but for purposes of illustration,  it  is
        excellent.

             Recursion  is  nothing more than a function that  calls
        itself.  It is therefore in a loop which must have a way  of
        terminating.   In the program on your monitor, the  variable
        "index"  is  set to 8, and is used as the  argument  to  the
        function  "count_dn".   The function simply  decrements  the
        variable, prints it out in a message, and if the variable is
        not zero, it calls itself, where it decrements  the variable
        again, prints it, etc. etc. etc. Finally, the variable  will
        reach  zero,  and the function will not call  itself  again.
        Instead, it will return to the prior time it called  itself,
        and  return again, until finally it will return to the  main
        program and from there return to DOS.



                                  Page 39









            Chapter 5 - Functions, variables, and prototypes


             For  purposes  of understanding you can think of it  as
        having 8 copies of the function "count_dn" available and  it
        simply  called all of them one at a time,  keeping track  of
        which  copy it was in at any given time.   That is not  what
        actually  happened,  but it is a reasonable illustration for
        you to begin understanding what it was really doing.

                              WHAT DID IT DO?

             A  better explanation of what actually happened  is  in
        order.   When you called the function from itself, it stored
        all  of the variables and all of the internal flags it needs
        to  complete the function in a block  somewhere.   The  next
        time it called itself,  it did the same thing,  creating and
        storing  another  block of everything it needed to  complete
        that  function call.   It continued making these blocks  and
        storing them away until it reached the last function when it
        started  retrieving the blocks of data,  and using  them  to
        complete  each function call.   The blocks were stored on an
        internal part of the computer called the "stack".  This is a
        part  of  memory carefully organized to store data  just  as
        described above.  It is beyond the scope of this tutorial to
        describe the stack in detail,  but it would be good for your
        programming  experience to read some material describing the
        stack.   A stack is used in nearly all modern computers  for
        internal housekeeping chores.

             In using recursion,  you may desire to write a  program
        with  indirect recursion as opposed to the direct  recursion
        described  above.    Indirect  recursion  would  be  when  a
        function  "A"  calls the function "B",  which in turn  calls
        "A",  etc.   This is entirely permissible,  the system  will
        take  care of putting the necessary things on the stack  and
        retrieving  them when needed again.   There is no reason why
        you  could not have three functions calling each other in  a
        circle,  or four,  or five,  etc.   The C compiler will take
        care of all of the details for you.

             The thing you must remember about recursion is that  at
        some  point,  something  must  go to  zero,  or  reach  some
        predefined  point to terminate the loop.   If not,  you will
        have  an  infinite  loop,  and the stack will  fill  up  and
        overflow,  giving  you  an error and  stopping  the  program
        rather abruptly.

             Compile  and  run  this  program.   If  you  left   the
        prototype  checking on from the last program you  will  find
        several  "warnings"  in the message window when  you  return
        to  the  Integrated  Environment.  Study  these  for  a  few
        minutes.  One of the suggested exercises at the end of  this



                                  Page 40









            Chapter 5 - Functions, variables, and prototypes


        chapter is to modify this program to eliminate the prototype
        warnings.

                        ANOTHER EXAMPLE OF RECURSION

             The  program  named  BACKWARD.C is another  example  of
        recursion,  so load it and display it on your screen.   This
        program  is  similar to the last one except that it  uses  a
        character array.  Each successive call to the function named
        "forward_and_backwards" causes one character of the  message
        to  be printed.  Additionally, each time the function  ends,
        one of the characters is printed again, this time  backwards
        as the string of recursive function calls is retraced.

             This  program  uses  the "modern"  method  of  function
        definition  and  includes full prototype  definitions.   The
        "modern"  method of function definition moves the  types  of
        the  variables into the parentheses along with the  variable
        names  themselves.   The  final  result  is  that  the  line
        containing   the   function  name  looks   more   like   the
        corresponding line in Pascal, Modula 2, or Ada.

             Don't worry about the character array defined in line 9
        or  the  other  new  material  presented  here.   After  you
        complete chapter 7 of this tutorial,  this program will make
        sense.   It  was  felt that introducing a second example  of
        recursion was important so this file is included here.

             Compile  and run this program with  prototype  checking
        on, and observe the results.

                 HOW TO WORK AROUND THE TURBO C (v1.0) BUG

             Load and display the program named FLOATSQ2.C which  is
        an  exact copy of the program FLOATSQ.C which we  considered
        earlier with prototyping added.  The return of the erroneous
        zeros  is now repaired and the correct values are  returned.
        Apparently,  when  the  coders of Turbo C  at  Borland  were
        testing this compiler, they used prototyping and never found
        this bug.  The use of prototyping is a good practice for all
        C  programmers  to  get into.  Note that if  you  are  using
        version 1.5 of TURBO C this file will also compile correctly
        so you can use either method of programming.  It would be to
        your advantage to learn the newer method using prototypes.

             Several things should be mentioned about this  program.
        First, the word "float" at the beginning of lines 27 and  35
        indicate to the compiler that these functions are  functions
        that return "float" type values.  Also, since the prototypes
        are  given before "main", the functions are not required  to
        be identified in line 12 as they were in line 7 of FLOATSQ.C


                                  Page 41









            Chapter 5 - Functions, variables, and prototypes


        earlier  in this chapter.  They can be included in line  12,
        but they are not required to be.

             Notice  also that the type of the variable  "inval"  is
        included  within  the parentheses in line 27.  It  would  be
        very educational for you to modify this program so that  you
        included  a  call  to "sqr" with a variable  of  type  "int"
        within  the  parentheses to see what kind of a  warning  you
        would  get.   Do  the  same thing  in  the  program  without
        prototype checking, FLOATSQ.C.



        PROGRAMMING EXERCISES

        1.   Rewrite  TEMPCONV.C,  from an earlier chapter, and move
             the temperature calculation to a function.

        2.   Write a program that writes your name on the monitor 10
             times by calling a function to do the writing. Move the
             called function ahead of the "main" function to see  if
             the Turbo C compiler will allow it.

        3.   Add  prototyping  to the program  named  RECURSON.C  to
             eliminate the warnings.




























                                  Page 42
```
{% endraw %}

## CHAP6.TXT

{% raw %}
```

                       Chapter 6 - Defines and Macros


              DEFINES AND MACROS ARE AIDS TO CLEAR PROGRAMMING

             Load and display the file named DEFINE.C for your first
        look  at  some defines and macros.  Notice  the  first  four
        lines  2  through 5 of the program, each starting  with  the
        word "#define".  This is the way all defines and macros  are
        defined.  Before the actual compilation starts, the compiler
        goes  through  a  preprocessor pass to resolve  all  of  the
        defines.   In the present case, it will find every place  in
        the  program where the combination "START" is found  and  it
        will  simply  replace  it  with the  0  since  that  is  the
        definition.   The  compiler itself will never see  the  word
        "START",  so as far as the compiler is concerned, the  zeros
        were always there.  Note that if the word "START" appears in
        a  text  string  or  a  comment,  it  will  be  ignored  and
        unchanged.

             It should be clear to you by now that putting the  word
        "START"  in your program instead of the numeral 0 is only  a
        convenience  to you and actually acts like a  comment  since
        the  word "START" helps you to understand what the  zero  is
        used for.

             In  the  case  of a very small program,  such  as  that
        before  you,  it doesn't really matter what  you  use.   If,
        however,  you  had a 2000 line program before  you  with  27
        references  to  the  "START",  it  would  be  a   completely
        different  matter.   If  you wanted to  change  all  of  the
        "START"s in the program to a new number, it would be  simple
        to change the one #define, but difficult to find and  change
        all   of  the  references  to  it  manually,  and   possibly
        disastrous if you missed one or two of the references.

             In  the  same manner,  the preprocessor will  find  all
        occurrences of the word "ENDING" and change them to 9,  then
        the  compiler  will  operate  on the changed  file  with  no
        knowledge that "ENDING" ever existed.

             It is a fairly common practice in C programming to  use
        all  capital letters for a symbolic constant such as "START"
        and  "ENDING"  and use all lower case letters  for  variable
        names.  You can use any method you choose since it is mostly
        a matter of personal taste.

                           IS THIS REALLY USEFUL?

             When  we  get  to the  chapters  discussing  input  and
        output,  we  will need an indicator to tell us when we reach
        the end-of-file of an input file.  Since different compilers
        use different numerical values for this,  although most  use
        either a zero or a minus 1, we will write the program with a


                                  Page 43









                       Chapter 6 - Defines and Macros


        "define"  to define the EOF used by our particular compiler.
        If at some later date,  we change to a new compiler, it is a
        simple matter to change this one "define" to fix the  entire
        program.  In Turbo C, the EOF is defined in the STDIO.H file
        on  line 44.  You can observe this for yourself  by  listing
        this  file.

                              WHAT IS A MACRO?

             A macro is nothing more than another define, but  since
        it is capable of at least appearing to perform some  logical
        decisions  or  some math functions, it has  a  unique  name.
        Consider line 4 of the program on your screen for an example
        of  a macro.  In this case, anytime the  preprocessor  finds
        the  word  "MAX"  followed by a  group  in  parentheses,  it
        expects  to find two terms in the parentheses and will do  a
        replacement  of the terms into the second definition.   Thus
        the  first  term  will  replace  every  "A"  in  the  second
        definition and the second term will replace every "B" in the
        second definition.  When line 13 of the program is  reached,
        "index" will be substituted for every "A", and "count"  will
        be  substituted for every "B". But this replaceing will  not
        take place in string literals or comments.  Remembering  the
        cryptic  construct we studied a couple of chapters ago  will
        reveal  that "mx" will receive the maximum value of  "index"
        or "count".

             In  like  manner, the "MIN" macro will result  in  "mn"
        receiving  the  minimum value of "index"  or  "count".   The
        results are then printed out.  There are a lot of  seemingly
        extra  parentheses in the macro definition but they are  not
        extra,  they  are  essential.  We  will  discuss  the  extra
        parentheses in our next program.

             Compile and run DEFINE.C.

                         LETS LOOK AT A WRONG MACRO

             Load  the  file named MACRO.C and display  it  on  your
        screen for a better look at a macro and its use.  The second
        line  defines a macro named "WRONG" that appears to get  the
        cube of "A",  and indeed it does in some cases, but it fails
        miserably in others.  The second macro named "CUBE" actually
        does get the cube in all cases.

             Consider  the program itself where the CUBE of i+offset
        is  calculated.   If  i is 1,  which it is  the  first  time
        through,  then  we will be looking for the cube of 1+5 =  6,
        which  will result in 216.  When using "CUBE",  we group the
        values like this, (1+5)*(1+5)*(1+5) = 6*6*6 = 216.  However,
        when we use WRONG,  we group them as 1+5*1+5*1+5 = 1+5+5+5 =


                                  Page 44









                       Chapter 6 - Defines and Macros


        16 which is a wrong answer.   The parentheses are  therefore
        required  to  properly  group the  variables  together.   It
        should  be clear to you that either "CUBE" or "WRONG"  would
        arrive  at  a correct answer for a single  term  replacement
        such as we did in the last program.   The correct values  of
        the  cube  and the square of the numbers are printed out  as
        well as the wrong values for your inspection.

             Inspection   of  line  24  will  reveal  that  we   are
        evaluating  "5*(i) + (i)" which is 6 if "i" is one,  and  in
        the  second case "5*((i) + (i))" which is 10 if "i' is  one.
        The parentheses around the entire expression assure that the
        value will be evaluated correctly.

                      WHAT IS AN ENUMERATION VARIABLE?

             Load  and  display  the program  named  ENUM.C  for  an
        example  of  how to use the "enum" type  variable.   Line  4
        contains the first "enum" type variable named "result" which
        is a variable which can take on any of the values  contained
        within  the parentheses.  Actually the variable "result"  is
        an "int" type variable but can be assigned any of the values
        defined for it.  The names within the parentheses are  "int"
        type  constants and can be used anywhere it is legal to  use
        an "int" type constant.  The constant "win" is assigned  the
        value of 0, "tie" the value 1, "bye" the value 2, etc.

             In  use,  the variable "result" is used just  like  any
        "int" type variable would be used and can be seen by its use
        in the program.  The "enum" type of variable is intended  to
        be  used by you, the programmer, as a coding aid  since  you
        can use a constant named "mon" for control structures rather
        that  the meaningless (at least to you) value of 1.   Notice
        that  "days" is assigned the values of days of the  week  in
        the remainder of the program.  If you were to use a "switch"
        statement,  it  would  be much more meaningful  to  use  the
        labels "sun", "mon", etc, rather than the more awkward 0, 1,
        2, etc.  The remainder of the program is simple and will  be
        left to your inspection and understanding.

        PROGRAMMING EXERCISE

        1.   Write a program to count from 7 to -5 by counting down.
             Use #define statements to define the limits. (Hint, you
             will  need to use a decrementing variable in the  third
             part of the "for" loop control.

        2.   Add some print statements to MACRO.C to see the  result
             of the erroneous addition macro.




                                  Page 45
```
{% endraw %}

## CHAP7.TXT

{% raw %}
```

                      Chapter 7 - Strings and Arrays


                             WHAT IS A STRING?

             A  string is a group of characters,  usually letters of
        the  alphabet.   In order to format your printout in such  a
        way that it looks nice, has meaningful titles and names, and
        is  esthetically  pleasing to you and the people  using  the
        output of your program,  you need the ability to output text
        data.  Actually you have already been using strings, because
        the second program in this tutorial,  way back in Chapter 2,
        output a message that was handled internally as a string.  A
        complete  definition  is  a  series  of  "char"  type   data
        terminated by a NULL character, which is a zero.

             When  C  is going to use a string of data in some  way,
        either  to compare it with another,  output it,  copy it  to
        another string,  or whatever, the functions are set up to do
        what they are called to do until a NULL, which is a zero, is
        detected.

                             WHAT IS AN ARRAY?

             An array is a series of homogeneous pieces of data that
        are all identical in type, but the type can be quite complex
        as  we will see when we get to the chapter of this  tutorial
        discussing structures.  A string is simply a special case of
        an array, a series of char type data.

             The  best way to see these principles is by use  of  an
        example,  so  load  the program CHRSTRG.C and display it  on
        your monitor.   The first thing new is the line that defines
        a "char" type of data entity.  The square brackets define an
        array subscript in C, and in the case of the data definition
        statement,  the  5 in the brackets defines 5 data fields  of
        type  "char" all defined as the variable "name".   In the  C
        language,  all subscripts start at 0 and increase by 1  each
        step  up  to  the  maximum which in  this  case  is  4.   We
        therefore  have  5 "char" type variables  named,  "name[0]",
        "name[1]",  "name[2]",  "name[3]",  and "name[4]".  You must
        keep in mind that in C, the subscripts actually go from 0 to
        one   less  than  the  number  defined  in  the   definition
        statement.  This is due to the original definition of C  and
        these   limits  cannot  be  changed  or  redefined  by   the
        programmer.

                         HOW DO WE USE THE STRING?

             The  variable  "name" is therefore a string  which  can
        hold up to 5 characters, but since we need room for the NULL
        terminating  character, there are actually only four  useful
        characters.   To load something useful into the  string,  we
        have  5 statements, each of which assigns  one  alphabetical


                                  Page 46









                      Chapter 7 - Strings and Arrays


        character  to  one of the string characters.   Finally,  the
        last place in the string is filled with the numeral 0 as the
        end indicator and the string is complete.  (A "define" would
        allow us to use "NULL" instead of a zero, and this would add
        greatly  to  the clarity of the program. It  would  be  very
        obvious that this was a NULL and not simply a zero for  some
        other purpose.) Now that we have the string, we will  simply
        print  it  out  with some other string data  in  the  output
        statement.

             The %s is the output definition to output a string  and
        the  system  will output characters starting with the  first
        one in "name" until it comes to the NULL character,  and  it
        will quit.   Notice that in the "printf" statement, only the
        variable  name "name" needs to be given,  with no  subscript
        since  we  are  interested  in starting  at  the  beginning.
        (There  is  actually another reason that only  the  variable
        name  is  given without brackets.   The discussion  of  that
        topic will be given in the next chapter.)

                        OUTPUTTING PART OF A STRING

             The  next "printf" illustrates that we can  output  any
        single  character of the string by using the "%c" and naming
        the particular character of "name" we want by including  the
        subscript.   The last "printf" illustrates how we can output
        part  of the string by stating the starting point by using a
        subscript.   The & specifies the address of  "name[1]".   We
        will  study this in the next chapter but I thought you would
        benefit from a little glimpse ahead.

             This example may make you feel that strings are  rather
        cumbersome  to  use since you have to set up each  character
        one  at  a time.   That is an incorrect  conclusion  because
        strings  are  very easy to use as we will see  in  the  next
        example program.

             Compile and run this program.

                          SOME STRING SUBROUTINES

             Load  the  example program STRINGS.C for an example  of
        some  ways  to use strings.  First we define  four  strings.
        Next  we  come  to a new function that you  will  find  very
        useful,  the "strcpy" function,  or string copy.   It copies
        from  one  string  to another until it  comes  to  the  NULL
        character.  Remember that the NULL is actually a "0" and  is
        added to the character string by the system.  It is easy  to
        remember which one gets copied to which if you think of them
        like an assignment statement.  Thus if you were to say,  for



                                  Page 47









                      Chapter 7 - Strings and Arrays


        example, "x = 23;", the data is copied from the right entity
        to the left one.  In the "strcpy" function, the data is also
        copied  from  the right entity to the left,  so  that  after
        execution  of  the first statement, name1 will  contain  the
        string "Rosalinda", but without the double quotes, they  are
        the  compiler's  way  of knowing that  you  are  defining  a
        string.

             Likewise,  "Zeke"  is copied into "name2" by the second
        statement,  then the "title" is copied.   The title and both
        names are then printed out.   Note that it is not  necessary
        for  the  defined string to be exactly the same size as  the
        string it will be called upon to store,  only that it is  at
        least  as long as the string plus one more character for the
        NULL.

                      ALPHABETICAL SORTING OF STRINGS

             The  next function we will look at is the  "strcmp"  or
        the  string  compare function.   It will return a 1  if  the
        first string is larger than the second, zero if they are the
        same  length  and have the same characters,  and -1  if  the
        first  string  is  smaller  than the  second.   One  of  the
        strings,  depending  on the result of the compare is  copied
        into   the   variable  "mixed",   and   the   largest   name
        alphabetically  is  printed  out.   It  should  come  as  no
        surprise   to   you   that  "Zeke"  wins   because   it   is
        alphabetically  larger,  length  doesn't  matter,  only  the
        alphabet.  It might be wise to mention that the result would
        also depend on whether the letters were upper or lower case.
        There are functions available with your C compiler to change
        the  case of a string to all upper or all lower case if  you
        desire.   These  will be used in an example program later in
        this tutorial.

                             COMBINING STRINGS

             The last four statements have another new feature,  the
        "strcat",  or string concatenation function.   This function
        simply  adds the characters from one string onto the end  of
        another string taking care to adjust the NULL so  everything
        is  still all right.   In this case,  "name1" is copied into
        "mixed",  then two blanks are concatenated to  "mixed",  and
        finally  "name2"  is concatenated to the  combination.   The
        result  is printed out with both names in the  one  variable
        "mixed".

             Strings  are  not difficult and are  extremely  useful.
        You should spend some time getting familiar with them before
        proceeding on to the next topic.



                                  Page 48









                      Chapter 7 - Strings and Arrays


             Compile  and run this program and observe  the  results
        for compliance with this definition.

                            AN ARRAY OF INTEGERS

             Load the file INTARRAY.C and display it on your monitor
        for  an  example of an array of integers.   Notice that  the
        array is defined in much the same way we defined an array of
        char  in  order to do the string manipulations in  the  last
        section.   We  have  12 integer variables to work  with  not
        counting the one named "index".   The names of the variables
        are "values[0]",  "values[1]", ... , and "values[11]".  Next
        we have a loop to assign nonsense, but well defined, data to
        each  of  the  12 variables, then print all  12  out.   Note
        carefully that each element of the array is simply an  "int"
        type  variable  capable  of storing an  integer.   The  only
        difference  between the variables "index"  and  "values[2]",
        for  example,  is  in the way that you  address  them.   You
        should  have no trouble following this program, but be  sure
        you  understand  it.  Compile and run it to see if  it  does
        what you expect it to do.

                      AN ARRAY OF FLOATING POINT DATA

             Load  and display the program named BIGARRAY.C  for  an
        example  of  a program with an array of "float"  type  data.
        This  program has an extra feature to illustrate how strings
        can  be  initialized.    The  first  line  of  the   program
        illustrates to you how to initialize a string of characters.
        Notice  that the square brackets are empty leaving it up  to
        the  compiler  to count the characters and  allocate  enough
        space  for  our  string  including  the  terminating   NULL.
        Another string is initialized in the body of the program but
        it  must be declared "static" here.  This prevents  it  from
        being allocated as an "automatic" variable and allows it  to
        retain  the  string once the program is started.   There  is
        nothing  else new here, the variables are assigned  nonsense
        data  and  the results of all the nonsense are  printed  out
        along  with a header.  This program should also be easy  for
        you to follow, so study it until you are sure of what it  is
        doing before going on to the next topic.

                     GETTING DATA BACK FROM A FUNCTION

             Back  in chapter 5 when we studied functions,  I hinted
        to you that there was a way to get data back from a function
        by  using  an array,  and that is true.   Load  the  program
        PASSBACK.C for an example of doing that.   In this  program,
        we  define  an array of 20 variables  named  "matrix",  then
        assign  some nonsense data to the variables,  and print  out



                                  Page 49









                      Chapter 7 - Strings and Arrays


        the  first five.   Then we call the function "dosome" taking
        along  the entire array by putting the name of the array  in
        the parentheses.

             The  function  "dosome" has a name in  its  parentheses
        also but it prefers to call the array "list".   The function
        needs  to be told that it is really getting an array  passed
        to  it  and that the array is of type "int".  Line  20  does
        that  by  defining "list" as an integer  type  variable  and
        including  the square brackets to indicate an array.  It  is
        not necessary to tell the function how many elements are  in
        the  array,  but you could if you so desired.   Generally  a
        function  works with an array until some end-of-data  marker
        is  found,  such  as  a NULL for a  string,  or  some  other
        previously  defined  data or pattern.  Many  times,  another
        piece of data is passed to the function with a count of  how
        many elements to work with.  In our present illustration, we
        will use a fixed number of elements to keep it simple.

             So far nothing is different from the previous functions
        we  have called except that we have passed more data  points
        to  the function this time than we ever have before,  having
        passed 20 integer values.  We print out the first 5 again to
        see if they did indeed get passed here.   Then we add ten to
        each of the elements and print out the new values.   Finally
        we return to the main program and print out the same 5  data
        points.   We  find that we have indeed modified the data  in
        the function,  and when we returned to the main program,  we
        brought  the changes back.   Compile and run this program to
        verify this conclusion.

                         ARRAYS PASS DATA BOTH WAYS

             We  stated during our study of functions that  when  we
        passed data to a function,  the system made a copy to use in
        the  function which was thrown away when we returned.   This
        is not the case with arrays.   The actual array is passed to
        the  function  and  the function can modify it  any  way  it
        wishes  to.    The  result  of  the  modifications  will  be
        available  back  in  the calling  program.   This  may  seem
        strange  to  you that arrays are  handled  differently  from
        single point data, but they are.  It really does make sense,
        but  you  will  have  to wait until we get  to  pointers  to
        understand it.

                         A HINT AT A FUTURE LESSON

             Another way of getting data back from a function to the
        calling program is by using pointers which we will cover  in
        the  next chapter.   When we get there we will find that  an



                                  Page 50









                      Chapter 7 - Strings and Arrays


        array  is in reality a pointer to a list of  values.   Don't
        let  that  worry  you now,  it will make sense when  we  get
        there.  In the meantime concentrate on arrays and understand
        the  basics  of  them because when we get to  the  study  of
        structures  we will be able to define some pretty  elaborate
        arrays.

                        MULTIPLY DIMENSIONED ARRAYS

             Load  and  display  the file named  MULTIARY.C  for  an
        example  of a program with doubly dimensioned  arrays.   The
        variable "big" is an 8 by 8 array that contains 8 times 8 or
        64  elements total.  The first element is  "big[0][0]",  and
        the  last  is "big[7][7]".  Another array named  "large"  is
        also  defined  which is not square to  illustrate  that  the
        array need not be square.  Both are filled up with data, one
        representing  a  multiplication table and  the  other  being
        formed into an addition table.

             To illustrate that individual elements can be  modified
        at will,  one of the elements of "big" is assigned the value
        from  one of the elements of "large" after being  multiplied
        by 22.  Next "big[2][2]" is assigned the arbitrary value  of
        5,  and  this value is used for the subscripts of  the  next
        assignment statement.  The third assignment statement is  in
        reality  "big[5][5]  = 177" because each of  the  subscripts
        contain  the value 5.  This is only done to illustrate  that
        any  valid expression can be used for a subscript.  It  must
        only meet two conditions, it must be an integer (although  a
        "char"  will work just as well), and it must be  within  the
        range of the subscript it is being used for.

             The  entire matrix variable "big" is printed out  in  a
        square  form so you can check the values to see if they  did
        get set the way you expected them to.

             You  should spend enough time to completely  understand
        arrays since they are used in many C programs in one form or
        another.  You will find many opportunities to use arrays, so
        do not slight the material in this chapter.













                                  Page 51









                      Chapter 7 - Strings and Arrays


        PROGRAMMING EXERCISES

        1.   Write  a  program with  three short  strings,  about  6
             characters each, and use "strcpy" to copy "one", "two",
             and  "three" into them.  Concatenate the three  strings
             into one string and print the result out 10 times.

        2.   Define  two  integer  arrays,  each 10  elements  long,
             called "array1" and "array2".  Using a loop,  put some
             kind  of  nonsense data in each and add them  term  for
             term  into  another 10 element  array  named  "arrays".
             Finally,  print  all  results in a table with an  index
             number.
             1     2 +  10 =  12
             2     4 +  20 =  24
             3     6 +  30 =  36   etc.

             Hint; The print statement will be similar to;
                printf("%4d %4d + %4d = %4d\n",index,array1[index],
                        array2[index],arrays[index]);

































                                  Page 52
```
{% endraw %}

## CHAP8.TXT

{% raw %}
```

                            Chapter 8 - Pointers


                             WHAT IS A POINTER?

             Simply  stated,  a pointer is an address.   Instead  of
        being  a  variable,  it  is a pointer to a  variable  stored
        somewhere in the address space of the program.  It is always
        best to use an example so load the file named POINTER.C  and
        display  it on your monitor for an example of a program with
        some pointers in it.

             For  the moment,  ignore the data declaration statement
        where we define "index" and two other fields beginning  with
        a star.   It is properly called an asterisk, but for reasons
        we  will see later,  let's agree to call it a star.   If you
        observe  the  first statement,  it should be clear  that  we
        assign the value of 39 to the variable "index".   This is no
        surprise,  we  have been doing it for several programs  now.
        The  next  statement  however,  says to assign  to  "pt1"  a
        strange looking value,  namely the variable "index" with  an
        ampersand in front of it.   In this example, pt1 and pt2 are
        pointers,  and  the  variable "index" is a simple  variable.
        Now we have a problem.  We need to learn how to use pointers
        in a program, but to do so requires that first we define the
        means of using the pointers in the program.

             The  following two rules will be somewhat confusing  to
        you at first but we need to state the definitions before  we
        can  use  them.   Take your time,  and the whole thing  will
        clear up very quickly.

                          TWO VERY IMPORTANT RULES

             The  following two rules are very important when  using
        pointers and must be thoroughly understood.

        1.  A variable name with an ampersand in front of it defines
            the  address of the variable and therefore points to the
            variable.  You can therefore read line seven as "pt1  is
            assigned the value of the address of index".

        2.  A  pointer  with a "star" in front of it refers  to  the
            value of the variable pointed to by the  pointer.   Line
            ten  of the program can be read as "The stored (starred)
            value  to which the pointer "pt1" points is assigned the
            value  13".   Now  you can see why it is  convenient  to
            think of the asterisk as a star,  it sort of sounds like
            the word store.

                                  MEMORY AIDS

            1. Think of & as an address.
            2. Think of * as a star referring to stored.


                                  Page 53









                            Chapter 8 - Pointers



             Assume for the moment that "pt1" and "pt2" are pointers
        (we will see how to define them shortly).  As pointers, they
        do not contain a variable value but an address of a variable
        and  can  be  used to point to a variable.  Line  7  of  the
        program  assigns the pointer "pt1" to point to the  variable
        we have already defined as "index" because we have  assigned
        the address of "index" to "pt1".  Since we have a pointer to
        "index",  we  can manipulate the value of "index"  by  using
        either the variable name itself, or the pointer.

             Line 10 modifies the value by using the pointer.  Since
        the  pointer  "pt1"  points to the  variable  "index",  then
        putting  a star in front of the pointer name refers  to  the
        memory location to which it is pointing.  Line 10  therefore
        assigns to "index" the value of 13. Anyplace in the  program
        where it is permissible to use the variable name "index", it
        is  also permissible to use the name "*pt1" since  they  are
        identical in meaning until the pointer is reassigned to some
        other variable.

                              ANOTHER POINTER

             Just  to add a little intrigue to the system,  we  have
        another  pointer  defined in this  program,  "pt2".    Since
        "pt2" has not been assigned a value prior to statement 8, it
        doesn't point to anything, it contains garbage.  Of  course,
        that is also true of any variable until a value is  assigned
        to it. Statement 8 assigns "pt2" the same address as  "pt1",
        so  that now "pt2" also points to the variable "index".   So
        to continue the definition from the last paragraph, anyplace
        in  the program where it is permissible to use the  variable
        "index",  it  is  also permissible to use  the  name  "*pt2"
        because  they   are  identical in  meaning.   This  fact  is
        illustrated  in  the  first "printf"  statement  since  this
        statement  uses  the  three means of  identifying  the  same
        variable to print out the same variable three times.

                         THERE IS ONLY ONE VARIABLE

             Note carefully that,  even though it appears that there
        are three variables, there is really only one variable.  The
        two  pointers  point  to  the  single  variable.    This  is
        illustrated in the next statement which assigns the value of
        13  to  the  variable "index",  because that  is  where  the
        pointer  "pt1"  is pointing.   The next  "printf"  statement
        causes  the  new value of 13 to be printed out three  times.
        Keep  in mind that there is really only one variable  to  be
        changed, not three.




                                  Page 54









                            Chapter 8 - Pointers


             This is admittedly a very difficult concept,  but since
        it  is  used  extensively  in all but  the  most  trivial  C
        programs,  it  is  well  worth your time to stay  with  this
        material until you understand it thoroughly.

                        HOW DO YOU DECLARE A POINTER?

             Now  to  keep a promise and tell you how to  declare  a
        pointer.   Refer  to the third line of the program  and  you
        will  see  our  old familiar way of  defining  the  variable
        "index",  followed  by  two more  definitions.   The  second
        definition  can  be read as "the storage location  to  which
        "pt1"  points  will be an int  type  variable".   Therefore,
        "pt1" is a pointer to an int type variable.  Likewise, "pt2"
        is another pointer to an int type variable.

             A  pointer  must  be defined to point to some  type  of
        variable.   Following a proper definition, it cannot be used
        to point to any other type of variable or it will result  in
        a  "type incompatibility" error.   In the same manner that a
        "float"  type of variable cannot be added to an  "int"  type
        variable,  a pointer to a "float" variable cannot be used to
        point to an integer variable.

             Compile and run this program and observe that there  is
        only  one  variable  and the single  statement  in  line  10
        changes the one variable which is displayed three times.

                      THE SECOND PROGRAM WITH POINTERS

             In these few pages so far on pointers,  we have covered
        a lot of territory, but it is important territory.  We still
        have  a  lot  of  material to cover so stay in  tune  as  we
        continue  this important aspect of C.   Load the  next  file
        named  POINTER2.C  and display it on your monitor so we  can
        continue our study.

             In  this program we have defined several variables  and
        two pointers.   The first pointer named "there" is a pointer
        to  a "char" type variable and the second named "pt"  points
        to an "int" type variable.  Notice also that we have defined
        two  array variables named "strg" and "list".   We will  use
        them  to show the correspondence between pointers and  array
        names.

                  A STRING VARIABLE IS ACTUALLY A POINTER

             In  the programming language C,  a string  variable  is
        defined to be simply a pointer to the beginning of a string.
        This  will  take  some explaining.   Refer  to  the  example
        program  on  your monitor.   You will notice that  first  we


                                  Page 55









                            Chapter 8 - Pointers


        assign a string constant to the string variable named "strg"
        so we will have some data to work with.  Next, we assign the
        value  of the first element to the variable "one",  a simple
        "char" variable.   Next,  since the string name is a pointer
        by  definition  of the C language,  we can assign  the  same
        value to "two" by using the star and the string  name.   The
        result  of  the two assignments are such that "one" now  has
        the same value as "two", and both contain the character "T",
        the  first character in the string.   Note that it would  be
        incorrect  to  write  the ninth line as  "two  =  *strg[0];"
        because the star takes the place of the square brackets.

             For all practical purposes,  "strg" is a  pointer.   It
        does, however, have one restriction that a true pointer does
        not  have.   It cannot be changed like a variable,  but must
        always contain the initial value and therefore always points
        to  its  string.   It  could  be thought  of  as  a  pointer
        constant,  and in some applications you may desire a pointer
        that cannot be corrupted in any way.   Even though it cannot
        be changed, it can be used to refer to other values than the
        one  it is defined to point to,  as we will see in the  next
        section of the program.

             Moving ahead to line 13, the variable "one" is assigned
        the  value of the ninth variable (since the indexing  starts
        at zero) and "two" is assigned the same value because we are
        allowed to index a pointer to get to values farther ahead in
        the string.  Both variables now contain the character "a".

            The C programming language takes care of indexing for us
        automatically  by  adjusting the indexing for  the  type  of
        variable  the  pointer is pointing to.   In this  case,  the
        index  of  8  is simply added to the  pointer  value  before
        looking up the desired result because a "char" type variable
        is  one byte long.   If we were using a pointer to an  "int"
        type variable,  the index would be doubled and added to  the
        pointer  before  looking up the value because an "int"  type
        variable  uses two bytes per value stored.   When we get  to
        the chapter on structures,  we will see that a variable  can
        have  many,   even  into  the  hundreds  or  thousands,   of
        bytes  per  variable,  but  the  indexing  will  be  handled
        automatically for us by the system.

             Since "there" is already a pointer, it can be  assigned
        the  address  of  the  eleventh element  of  "strg"  by  the
        statement  in line 17 of the program.  Remember  that  since
        "there"  is a true pointer, it can be assigned any value  as
        long as that value represents a "char" type of address.   It
        should  be clear that the pointers must be "typed" in  order
        to  allow  the  pointer arithmetic  described  in  the  last



                                  Page 56









                            Chapter 8 - Pointers


        paragraph to be done properly.  The third and fourth outputs
        will be the same, namely the letter "c".

                             POINTER ARITHMETIC

             Not  all  forms  of  arithmetic are  permissible  on  a
        pointer.   Only  those things that make  sense,  considering
        that a pointer is an address somewhere in the computer.   It
        would  make sense to add a constant to an  address,  thereby
        moving it ahead in memory that number of places.   Likewise,
        subtraction  is permissible,  moving it back some number  of
        locations.   Adding  two  pointers together would  not  make
        sense  because absolute memory addresses are  not  additive.
        Pointer multiplication is also not allowed, as that would be
        a  funny number.   If you think about what you are  actually
        doing,  it will make sense to you what is allowed,  and what
        is not.

                         NOW FOR AN INTEGER POINTER

             The  array named "list" is assigned a series of  values
        from  100  to 199 in order to have some data to  work  with.
        Next  we  assign the pointer "pt" the address  of  the  28th
        element  of the list and print out the same value both  ways
        to  illustrate that the system truly will adjust  the  index
        for the "int" type variable.  You should spend some time  in
        this program until you feel you fairly well understand these
        lessons on pointers.

             Compile and run POINTER2.C and study the output.

             You  may recall that back in the lesson on functions we
        mentioned that there were two ways to get variable data back
        from a function.   One way is through use of the array,  and
        you should be right on the verge of guessing the other  way.
        If your guess is through use of a pointer,  you are correct.
        Load  and display the program named TWOWAY.C for an  example
        of this.

                    FUNCTION DATA RETURN WITH A POINTER

             In  TWOWAY.C,  there  are two variables defined in  the
        main program "pecans" and "apples".   Notice that neither of
        these is defined as a pointer.   We assign values to both of
        these  and print them out,  then call the  function  "fixup"
        taking with us both of these values.   The variable "pecans"
        is  simply  sent  to the function,  but the address  of  the
        variable  "apples" is sent to the function.   Now we have  a
        problem.   The two arguments are not the same, the second is
        a pointer to a variable.  We must somehow alert the function
        to  the  fact  that it is supposed  to  receive  an  integer


                                  Page 57









                            Chapter 8 - Pointers


        variable  and a pointer to an integer variable.   This turns
        out   to  be  very  simple.    Notice  that  the   parameter
        definitions in the function define "nuts" as an integer, and
        "fruit"  as a pointer to an integer.   The call in the  main
        program  therefore  is now in agreement  with  the  function
        heading and the program interface will work just fine.

             In  the body of the function,  we print the two  values
        sent  to  the function,  then modify them and print the  new
        values out.   This should be perfectly clear to you by  now.
        The  surprise occurs when we return to the main program  and
        print out the two values again.  We will find that the value
        of  pecans will be restored to its value before the function
        call  because  the C language makes a copy of  the  item  in
        question and takes the copy to the called function,  leaving
        the original intact.   In the case of the variable "apples",
        we  made  a copy of a pointer to the variable and  took  the
        copy of the pointer to the function.  Since we had a pointer
        to  the  original variable,  even though the pointer  was  a
        copy,  we  had  access  to the original variable  and  could
        change  it in the function.   When we returned to  the  main
        program,  we  found  a  changed value in  "apples"  when  we
        printed it out.

             By  using  a pointer in a function call,  we  can  have
        access  to the data in the function and change it in such  a
        way  that when we return to the calling program,  we have  a
        changed  value  of data.    It must be pointed out  however,
        that  if you modify the value of the pointer itself  in  the
        function,  you  will have a restored pointer when you return
        because the pointer you use in the function is a copy of the
        original.  In this example, there was no pointer in the main
        program because we simply sent the address to the  function,
        but  in  many  programs you will use  pointers  in  function
        calls.  One of the places you will find need for pointers in
        function  calls  will be when you request data  input  using
        standard  input/output routines.   These will be covered  in
        the next two chapters.

             Compile and run TWOWAY.C and observe the output.

                           POINTERS ARE VALUABLE

             Even  though  you are probably somewhat intimidated  at
        this point by the use of pointers,  you will find that after
        you  gain experience,  you will use them profusely  in  many
        ways.  You will also use pointers in every program you write
        other than the most trivial because they are so useful.  You
        should  probably  go  over this material  carefully  several
        times until you feel comfortable with it because it is  very



                                  Page 58









                            Chapter 8 - Pointers


        important  in the area of input/output which is next on  the
        agenda.


        PROGRAMMING EXERCISES

        1.   Define  a character array  and use "strcpy" to  copy  a
             string  into it.  Print the string out by using a  loop
             with  a  pointer to print out one character at a  time.
             Initialize the pointer to the first element and use the
             double  plus  sign  to increment  the  pointer.  Use  a
             separate  integer variable to count the  characters  to
             print.

        2.   Modify the program to print out the string backwards by
             pointing to the end and using a decrementing pointer.





































                                  Page 59
```
{% endraw %}

## CHAP9.TXT

{% raw %}
```

                     Chapter 9 - Standard Input/Output


                          THE STDIO.H HEADER FILE

             Load  the file SIMPLEIO.C for our first look at a  file
        with  standard I/O.   Standard I/O refers to the most  usual
        places  where  data is either read from,  the  keyboard,  or
        written to, the video monitor.  Since they are used so much,
        they are used as the default I/O devices and do not need  to
        be  named in the Input/Output instructions.   This will make
        more  sense when we actually start to use them so lets  look
        at the file in front of you.

             The  first thing you will notice is the second line  of
        the  file,  the #include "stdio.h" line.   This is very much
        like  the  #define  we have  already  studied,  except  that
        instead of a simple substitution,  an entire file is read in
        at  this  point.   The  system  will  find  the  file  named
        "stdio.h"  and read its entire contents in,  replacing  this
        statement.   Obviously then,  the file named "STDIO.H"  must
        contain  valid  C source statements that can be compiled  as
        part  of  a program.   This particular file is  composed  of
        several standard #defines to define some of the standard I/O
        operations.   The file is called a header file and you  will
        find several different header files on the source disks that
        came  with your Turbo C compiler.  Each of the header  files
        has  a  specific  purpose  and any or all  of  them  can  be
        included in any program.

             The  Turbo  C compiler uses the double quote  marks  to
        indicate  that the search for the "include" file will  begin
        in  the  current directory, and if it not found  there,  the
        search will continue in the "include" directory as set up in
        the environment.  It also uses the "less than" and  "greater
        than" signs to indicate that the file search should begin in
        the  directory  specified in the environment.  Most  of  the
        programs  in  this tutorial have the double  quotes  in  the
        "include" statements.  The next program uses the "<" and ">"
        to  illustrate the usage.  Note that this will result  is  a
        slightly  faster  (but  probably  unnoticeable)  compilation
        because  the  system will not bother to search  the  current
        directory.

                        INPUT/OUTPUT OPERATIONS IN C

             Actually  the  C programming language has no  input  or
        output operations defined as part of the language, they must
        be user defined.   Since everybody does not want to reinvent
        his  own input and output operations,  the compiler  writers
        have done a lot of this for us and supplied us with  several
        input  functions and several output functions to aid in  our
        program development.   The functions have become a standard,
        and  you  will find the same functions available  in  nearly


                                  Page 60









                     Chapter 9 - Standard Input/Output


        every  compiler.   In fact,  the industry standard of the  C
        language  definition has become the book written by Kernigan
        and Ritchie, and they have included these functions in their
        definition.   You will often,  when reading literature about
        C,  find  a reference to K & R.   This refers  to  the  book
        written  by Kernigan and Ritchie.  You would be  advised  to
        purchase a copy for reference.

             You should print out the file named "STDIO.H" and spend
        some  time studying it.   There will be a lot that you  will
        not understand about it, but parts of it will look familiar.
        The  name  "STDIO.H"  is  sort  of  cryptic  for   "standard
        input/output header",  because that is exactly what it does.
        It  defines  the standard input and output functions in  the
        form of #defines and macros.  Don't worry too much about the
        details  of this now.   You can always return to this  topic
        later  for  more study if it interests  you,  but  you  will
        really  have no need to completely understand the  "STDIO.H"
        file.  You will have a tremendous need to use it however, so
        these comments on its use and purpose are necessary.

                            OTHER INCLUDE FILES

             When  you  begin writing larger programs and  splitting
        them  up into separately compiled portions,  you  will  have
        occasion  to  use  some  statements common to  each  of  the
        portions.   It would be to your advantage to make a separate
        file  containing  the  statements and use  the  #include  to
        insert it into each of the files.  If you want to change any
        of the common statements,  you will only need to change  one
        file  and  you will be assured of having all of  the  common
        statements  agree.   This  is  getting  a  little  ahead  of
        ourselves  but  you  now  have  an  idea  how  the  #include
        directive can be used.

                    BACK TO THE FILE NAMED "SIMPLEIO.C"

             Lets  continue our tour of the file in  question.   The
        one  variable  "c" is defined and a message is  printed  out
        with the familiar "printf" function.  We then find ourselves
        in  a continuous loop as long as "c" is not equal to capital
        X.   If  there is any question in your mind about  the  loop
        control, you should review chapter 3 before continuing.  The
        two  new functions within the loop are of paramount interest
        in this program since they are the new functions.  These are
        functions to read a character from the keyboard and  display
        it on the monitor one character at a time.

             The  function "getchar()" reads a single character from
        the  standard  input  device,  the  keyboard  being  assumed
        because that is the standard input device, and assigns it to


                                  Page 61









                     Chapter 9 - Standard Input/Output


        the variable "c".   The next function "putchar(c)", uses the
        standard output device,  the video monitor,  and outputs the
        character contained in the variable "c".   The character  is
        output  at  the  current cursor location and the  cursor  is
        advanced  one space for the next character.   The system  is
        therefore taking care of a lot of the overhead for us.   The
        loop  continues reading and displaying characters  until  we
        type a capital X which terminates the loop.

             Compile and run this program for a few surprises.  When
        you type on the keyboard, you will notice that what you type
        is displayed faithfully on the screen,  and when you hit the
        return key,  the entire line is repeated.   In fact, we only
        told  it  to output each character once but it seems  to  be
        saving  the  characters up and redisplaying them.   A  short
        explanation is in order.

               DOS IS HELPING US OUT (OR GETTING IN THE WAY)

             We need to understand a little bit about how DOS  works
        to  understand  what is happening here.   When data is  read
        from  the keyboard,  under DOS control,  the characters  are
        stored  in  a buffer until a carriage return is  entered  at
        which  time the entire string of characters is given to  the
        program.   When the characters are being typed, however, the
        characters are displayed one at a time on the monitor.  This
        is called echo,  and happens in many of the applications you
        run.

             With  the above paragraph in mind,  it should be  clear
        that when you are typing a line of data into "SIMPLEIO", the
        characters are being echoed by DOS,  and when you return the
        carriage,  the characters are given to the program.  As each
        character  is given to the program,  it displays it  on  the
        screen  resulting  in  a repeat of the line  typed  in.   To
        better  illustrate  this,  type  a line  with  a  capital  X
        somewhere  in the middle of the line.   You can type as many
        characters  as you like following the "X" and they will  all
        display because the characters are being read in under  DOS,
        echoed  to the monitor,  and placed in the DOS input buffer.
        DOS doesn't think there is anything special about a  capital
        X.   When the string is given to the program,  however,  the
        characters  are  accepted by the program one at a  time  and
        sent  to  the monitor one at a time,  until a capital  X  is
        encountered.   After the capital X is displayed, the loop is
        terminated,  and the program is terminated.   The characters
        on  the input line following the capital X are not displayed
        because the capital X signalled program termination.

             Compile  and  run  "SIMPLEIO.C".    After  running  the
        program  several  times  and  feeling  confident  that   you


                                  Page 62









                     Chapter 9 - Standard Input/Output


        understand  the above explanation,  we will go on to another
        program.

             Don't  get  discouraged by the  above  seemingly  weird
        behavior  of the I/O system.   It is strange,  but there are
        other ways to get data into the computer.  You will actually
        find the above method useful for many applications,  and you
        will probably find some of the following useful also.

                         ANOTHER STRANGE I/O METHOD

             Load  the file named SINGLEIO.C and display it on  your
        monitor for another method of character I/O.  Once again, we
        start  with the standard I/O header file using the  "<"  and
        ">"  method of defining it. Then we define a variable  named
        "c",  and  finally we print a welcoming message.   Like  the
        last program, we are in a loop that will continue to execute
        until  we  type  a capital X, but the  action  is  a  little
        different here.

             The  "getch()"  is  a  new  function  that  is  a  "get
        character" function.  It differs from "getchar()" in that it
        does  not  get tied up in DOS.   It reads the  character  in
        without echo, and puts it directly into the program where it
        is operated on immediately.  This function therefore reads a
        character,  immediately  displays  it  on  the  screen,  and
        continues the operation until a capital X is typed.

             When  you compile and run this program,  you will  find
        that there is no repeat of the lines when you hit a carriage
        return,  and  when  you  hit  the  capital  X,  the  program
        terminates immediately.  No carriage return is needed to get
        it to accept the line with the X in it.   We do have another
        problem  here,  however,  there  is  no  linefeed  with  the
        carriage return.

                          NOW WE NEED A LINE FEED

             It  is not apparent to you in most application programs
        but  when  you hit the enter key,  the  program  supplies  a
        linefeed to go with the carriage return.  You need to return
        to  the  left side of the monitor and you also need to  drop
        down  a line.   The linefeed is not automatic.  We  need  to
        improve  our program to do this also.   If you will load and
        display the program named BETTERIN.C, you will find a change
        to incorporate this feature.

             In BETTERIN.C, we have two additional statements at the
        beginning  that  will  define the character  codes  for  the
        linefeed (LF), and the carriage return (CR).  If you look at
        any  ASCII table you will find that the codes 10 and 13  are


                                  Page 63









                     Chapter 9 - Standard Input/Output


        exactly  as  defined  here.   In  the  main  program,  after
        outputting the character,  we compare it to CR, and if it is
        equal to CR,  we also output a linefeed which is the LF.  We
        could have just left out the two #define statements and used
        "if  (c  ==  13)  putchar(10);" but it  would  not  be  very
        descriptive  of what we are doing here.  The method used  in
        the program represents better programming practice.

             Compile  and  run BETTERIN.C to see if it does what  we
        have said it should do.   It should display exactly what you
        type in, including a linefeed with each carriage return, and
        should stop immediately when you type a capital X.

                           WHICH METHOD IS BEST?

             We have examined two methods of reading characters into
        a  C program,  and are faced with a choice of which  one  we
        should  use.   It really depends on the application  because
        each  method has advantages and disadvantages.   Lets take a
        look at each.

             When using the first method,  DOS is actually doing all
        of  the  work for us by storing the characters in  an  input
        buffer and signalling us when a full line has been  entered.
        We  could write a program that,  for example,  did a lot  of
        calculations,  then  went to get some input.   While we were
        doing the calculations,  DOS would be accumulating a line of
        characters  for  us,  and they would be there when  we  were
        ready  for  them.   However,  we could not  read  in  single
        keystrokes   because  DOS  would  not  report  a  buffer  of
        characters to us until it recognized a carriage return.

             The second method, used in BETTERIN.C, allows us to get
        a single character,  and act on it immediately.   We do  not
        have  to  wait  until  DOS decides we can  have  a  line  of
        characters.  We cannot do anything else while we are waiting
        for  a  character  because  we are  waiting  for  the  input
        keystroke  and tying up the entire machine.   This method is
        useful  for highly interactive types of program  interfaces.
        It  is up to you as the programmer to decide which  is  best
        for your needs.

             I  should  mention at this point that there is also  an
        "ungetch" function that works with the "getch" function.  If
        you "getch" a character and find that you have gone one  too
        far,  you  can "ungetch" it back to the input device.   This
        simplifies  some  programs because you don't know  that  you
        don't  want the character until you get it.   You  can  only
        "ungetch"  one character back to the input device,  but that
        is  sufficient  to  accomplish the task  this  function  was
        designed for.   It is difficult to demonstrate this function


                                  Page 64









                     Chapter 9 - Standard Input/Output


        in  a simple program so its use will be up to you  to  study
        when you need it.

             The discussion so far in this chapter, should be a good
        indication  that,  while the C programming language is  very
        flexible,  it does put a lot of responsibility on you as the
        programmer to keep many details in mind.

                        NOW TO READ IN SOME INTEGERS

             Load  and display the file named INTIN.C for an example
        of  reading in some formatted data.   The structure of  this
        program  is  very similar to the last three except  that  we
        define  an "int" type variable and loop until  the  variable
        somehow acquires the value of 100.

             Instead of reading in a character at a time, as we have
        in the last three files,  we read in an entire integer value
        with  one  call  using the  function  named  "scanf".   This
        function  is very similar to the "printf" that you have been
        using for quite some time by now except that it is used  for
        input instead of output.   Examine the line with the "scanf"
        and  you  will notice that it does not ask for the  variable
        "valin"  directly,  but  gives the address of  the  variable
        since it expects to have a value returned from the function.
        Recall  that a function must have the address of a  variable
        in  order to return a value to that variable in the  calling
        program.   Failing  to  supply  a  pointer  in  the  "scanf"
        function is probably the most common problem encountered  in
        using this function.

             The  function  "scanf" scans the input  line  until  it
        finds  the first data field.   It ignores leading blanks and
        in this case,  it reads integer characters until it finds  a
        blank  or  an invalid decimal character,  at which  time  it
        stops reading and returns the value.

             Remembering  our discussion above about the way the DOS
        input  buffer  works,  it should be clear  that  nothing  is
        actually acted on until a complete line is entered and it is
        terminated by a carriage return.   At this time,  the buffer
        is  input,  and  our  program will search  across  the  line
        reading  all  integer values it can find until the  line  is
        completely scanned.  This is because we are in a loop and we
        tell it to find a value,  print it,  find another, print it,
        etc.   If you enter several values on one line, it will read
        each one in succession and display the values.  Entering the
        value  of  100  will cause the  program  to  terminate,  and
        entering  the  value 100 with other values  following,  will
        cause   termination   before  the   following   values   are
        considered.


                                  Page 65









                     Chapter 9 - Standard Input/Output



                      IT MAKES WRONG ANSWERS SOMETIMES

             If  you  enter a number up to and including  32767,  it
        will display correctly, but if you enter a larger number, it
        will appear to make an error.  For example, if you enter the
        value 32768,  it will display the value of -32768,  entering
        the  value  65536 will display as a  zero.   These  are  not
        errors but are caused by the way an integer is defined.  The
        most significant bit of the 16 bit pattern available for the
        integer variable is the sign bit,  so there are only 15 bits
        left  for the value.   The variable can therefore only  have
        the  values  from  -32768 to 32767,  any  other  values  are
        outside  the range of integer variables.   This is up to you
        to take care of in your programs.   It is another example of
        the increased responsibility you must assume using C  rather
        than a higher level language such as Pascal, Modula-2, etc.

             Compile and run this program,  entering several numbers
        on  a line to see the results,  and with varying numbers  of
        blanks between the numbers.   Try entering numbers that  are
        too big to see what happens,  and finally enter some invalid
        characters  to  see  what the system  does  with  nondecimal
        characters.

                           CHARACTER STRING INPUT

             Load  and  display  the file named  STRINGIN.C  for  an
        example  of  reading  a string variable.   This  program  is
        identical to the last one except that instead of an  integer
        variable,  we  have defined a string variable with an  upper
        limit of 24 characters (remember that a string variable must
        have  a  null character at the end).   The variable  in  the
        "scanf"  does  not  need  an & because  "big"  is  an  array
        variable  and by definition it is already a  pointer.   This
        program  should require no additional explanation.   Compile
        and run it to see if it works the way you expect.

             You probably got a surprise when you ran it because  it
        separated  your sentence into separate words.   When used in
        the string mode of input,  "scanf" reads characters into the
        string until it comes to either the end of a line or a blank
        character.   Therefore,  it  reads a word,  finds the  blank
        following it,  and displays the result.   Since we are in  a
        loop, this program continues to read words until it exhausts
        the DOS input buffer.   We have written this program to stop
        whenever  it  finds a capital X in column 1,  but since  the
        sentence  is split up into individual words,  it  will  stop
        anytime a word begins with capital X.  Try entering a 5 word
        sentence  with  a  capital X as the first character  in  the



                                  Page 66









                     Chapter 9 - Standard Input/Output


        third word.  You should get the first three words displayed,
        and the last two simply ignored when the program stops.

             Try  entering more than 24 characters to see  what  the
        program   does.    In  an  actual  program,   it   is   your
        responsibility  to count characters and stop when the  input
        buffer  is full.  You may be getting the feeling that a  lot
        of  responsibility is placed on you when writing in  C.   It
        is,  but  you also get a lot of flexibility in  the  bargain
        too.

                       INPUT/OUTPUT PROGRAMMING IN C

             C was not designed to be used as a language for lots of
        input and output,  but as a systems language where a lot  of
        internal operations are required.   You would do well to use
        another language for I/O intensive programming,  but C could
        be used if you desire.  The keyboard input is very flexible,
        allowing you to get at the data in a very low level way, but
        very little help is given you.  It is therefore up to you to
        take  care of all of the bookkeeping chores associated  with
        your  required  I/O operations.   This may seem like a  real
        pain in the neck, but in any given program, you only need to
        define your input routines once and then use them as needed.

             Don't let this worry you.   As you gain experience with
        C, you will easily handle your I/O requirements.

             One final point must be made about these I/O functions.
        It   is  perfectly  permissible  to  intermix  "scanf"   and
        "getchar"  functions during read operations.   In  the  same
        manner,  it  is also fine to intermix the output  functions,
        "printf" and "putchar".

                               IN MEMORY I/O

             The  next operation may seem a little strange at first,
        but  you will probably see lots of uses for it as  you  gain
        experience.   Load the file named INMEM.C and display it for
        another  type  of I/O,  one that never accesses the  outside
        world, but stays in the computer.

             In INMEM.C, we define a few variables, then assign some
        values to the ones named "numbers" for illustrative purposes
        and then use a "sprintf" function.   The function acts  just
        like  a  normal  "printf" function except  that  instead  of
        printing the line of output to a device,  it prints the line
        of  formatted  output to a character string in  memory.   In
        this  case  the string goes to the string  variable  "line",
        because  that  is the string name we inserted as  the  first
        argument  in the "sprintf" function.   The spaces after  the


                                  Page 67









                     Chapter 9 - Standard Input/Output


        2nd  %d were put there to illustrate that the next  function
        will  search  properly  across  the  line.    We  print  the
        resulting  string and find that the output is  identical  to
        what  it would have been by using a "printf" instead of  the
        "sprintf"  in the first place.   You will see that when  you
        compile and run the program shortly.

             Since  the generated string is still in memory,  we can
        now  read  it  with the  function  "sscanf".   We  tell  the
        function  in its first argument that "line" is the string to
        use for its input,  and the remaining parts of the line  are
        exactly  what  we  would  use if we were going  to  use  the
        "scanf"  function and read data from outside  the  computer.
        Note  that it is essential that we use pointers to the  data
        because  we  want to return data from a function.   Just  to
        illustrate  that  there are many ways to declare  a  pointer
        several methods are used,  but all are pointers.   The first
        two simply declare the address of the elements of the array,
        while the last three use the fact that "result", without the
        accompanying  subscript,  is  a pointer.   Just to  keep  it
        interesting,  the  values  are read back in  reverse  order.
        Finally the values are displayed on the monitor.

                           IS THAT REALLY USEFUL?

             It  seems sort of silly to read input data from  within
        the  computer  but  it does have  a  real  purpose.   It  is
        possible to read data from an input device using any of  the
        standard  functions  and  then do  a  format  conversion  in
        memory.   You  could read in a line of data, look at  a  few
        significant  characters,  then  use  these  formatted  input
        routines   to   reduce  the  line  of   data   to   internal
        representation.  That would sure beat writing your own  data
        formatting routines.

                           STANDARD ERROR OUTPUT

             Sometimes  it is desirable to redirect the output  from
        the  standard  output device to a file.   However,  you  may
        still  want the error messages to go to the standard  output
        device,  in our case the monitor.  This next function allows
        you to do that. Load and display SPECIAL.C for an example of
        this new function.

             The  program  consists  of a  loop  with  two  messages
        output,  one  to the standard output device and the other to
        the  standard  error device.   The message to  the  standard
        error  device  is  output with the  function  "fprintf"  and
        includes  the  device name "stderr" as the  first  argument.
        Other  than those two small changes,  it is the same as  our
        standard  "printf"  function.   (You will see  more  of  the


                                  Page 68









                     Chapter 9 - Standard Input/Output


        "fprintf"  function in the next chapter,  but its  operation
        fit  in better as a part of this chapter.)  Ignore the  line
        with the "exit" for the moment, we will return to it.

             Compile  and  run this program,  and you will  find  12
        lines of output on the monitor.   To see the difference, run
        the  program  again with redirected output to a  file  named
        "STUFF" by entering the following line at the Dos prompt;

        A> special >stuff

             More  information about I/O redirection can be found in
        your  DOS manual.   This time you will only get the 6  lines
        output to the standard error device, and if you look in your
        directory,  you will find the file named "STUFF"  containing
        the other 6 lines, those to the standard output device.  You
        can use I/O redirection with any of the programs we have run
        so far,  and as you may guess, you can also read from a file
        using I/O redirection but we will study a better way to read
        from a file in the next chapter.

                     WHAT ABOUT THE exit(4) STATEMENT?

             Now  to  keep our promise about the exit(4)  statement.
        Redisplay  the file named SPECIAL.C on  your  monitor.   The
        last  statement  simply  exits the program and  returns  the
        value  of 4 to DOS.   Any number from 0 to 9 can be used  in
        the parentheses for DOS communication.  If you are operating
        in  a  BATCH  file,  this  number can  be  tested  with  the
        "ERRORLEVEL" command.

            A check of the documentation for my COMPAQ, resulted  in
        a  minimal and confusing documentation of  the  "ERRORLEVEL"
        command, so a brief description of it is given in this file.


        PROGRAMMING EXERCISE

        1.   Write  a program to  read in a character using a  loop,
             and  display the character in its normal  "char"  form.
             Also  display  it  as a decimal  number.  Check  for  a
             dollar  sign  to use as the  stop  character.  Use  the
             "getch" form of input so it will print immediately. Hit
             some of the special keys,  such as function keys,  when
             you  run the program for some surprises.  You will  get
             two  inputs  from the special keys,  the first being  a
             zero  which  is  the indication to the  system  that  a
             special key was hit.





                                  Page 69
```
{% endraw %}

## FILES816.TXT

{% raw %}
```
Disk No  816
Program Title: TURBO C TUTORIAL version 1.5 (Disk 1 of 2)
PC-SIG version 1.5
 
    TURBO C TUTORIAL teaches the basic structure of the C language. TURBO C
is not really a beginners language so the author assumes you are familiar
with other programming languages. The tutorial starts out explaining the C
language and by the time you have completed the lesson you should be very
familiar with TURBO C.
 
Usage: Educational
 
System Requirements: 128K memory and a printer.
 
How to Start: Type PRINTALL (press enter).
 
Suggested Registration: $10.00
 
File Descriptions:
 
CHAP1    TXT  Turbo C tutorial chapter 1.
CHAP2    TXT  Turbo C tutorial chapter 2.
CHAP3    TXT  Turbo C tutorial chapter 3.
CHAP4    TXT  Turbo C tutorial chapter 4.
CHAP5    TXT  Turbo C tutorial chapter 5.
CHAP6    TXT  Turbo C tutorial chapter 6.
CHAP7    TXT  Turbo C tutorial chapter 7.
CHAP8    TXT  Turbo C tutorial chapter 8.
CHAP9    TXT  Turbo C tutorial chapter 9.
CHAP10   TXT  Turbo C tutorial chapter 10.
CHAP11   TXT  Turbo C tutorial chapter 11.
CHAP12   TXT  Turbo C tutorial chapter 12.
CHAP13   TXT  Turbo C tutorial chapter 13.
CHAP14   TXT  Turbo C tutorial chapter 14.
INTRO    TXT  Introduction text file.
LIST     COM  File used to print the different chapters.
PRINTEXT BAT  Batch file to print the tutorial.
READ     ME   How to start.
TABCONT  TXT  Table of contents.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  Disk #816 TURBO C TUTORIAL Disk 1 of 2  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the tutorial to your printer type: PRINTEXT (press enter)       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INTRO.TXT

{% raw %}
```

                   Introduction to the Turbo C Tutorial


             The programming language C, was originally developed by
        Dennis  Ritchie of Bell Laboratories and was designed to run
        on a PDP-11 with a UNIX operating system.   Although it  was
        originally  intended  to run under UNIX,  there has  been  a
        great  interest  in  running it under the  MS-DOS  operating
        system and specifically on the IBM PC and  compatibles.   It
        is an excellent language for this environment because of the
        simplicity of expression,  the compactness of the code,  and
        the wide range of applicability.

             It  is  not a good "beginning" language because  it  is
        somewhat cryptic in nature.  It allows the programmer a wide
        range of operations from high level down to a very low level
        approaching the level of assembly language.   There seems to
        be no limit to the flexibility available.  One experienced C
        programmer made the statement,  "You can program anything in
        C", and the statement is well supported by my own experience
        with  the  language.    Along  with  the  resulting  freedom
        however,  you take on a great deal of responsibility because
        it is very easy to write a program that destroys itself  due
        to  the  silly little errors that the Pascal  compiler  will
        flag  and call a fatal error.   In C,  you are very much  on
        your own as you will soon find.

             Since C is not a beginners language,  I will assume you
        are  not a beginning programmer,  and I will not attempt  to
        bore you by defining a constant and a variable.  You will be
        expected to know these basic concepts.   You will,  however,
        be  expected to know nothing of the C programming  language.
        I  will begin with the most basic concepts of C and take you
        up  to  the  highest level of C  programming  including  the
        usually intimidating concepts of pointers,  structures,  and
        dynamic allocation.   To fully understand these concepts, it
        will  take a good bit of time and work on your part  because
        they  not  particularly easy to grasp,  but  they  are  very
        powerful tools.   Enough said about that, you will see their
        power when we get there,  just don't allow yourself to worry
        about them yet.

             Programming  in C is a tremendous asset in those  areas
        where you may want to use Assembly Language but would rather
        keep it a "simple to write" and "easy to maintain"  program.
        It  has  been said that a program written in C  will  pay  a
        premium  of  a  50 to 100% increase in  runtime  because  no
        language  is  as  compact  or  fast  as  Assembly  Language.
        However, the time saved in coding can be tremendous,  making
        it the most desirable language for many programming  chores.
        In  addition, since most programs spend 90 percent of  their
        operating time in only 10 percent or less of the code, it is
        possible  to  write  a program in C, then  rewrite  a  small
        portion  of the code in Assembly Language and  approach  the


                                  Page 1









                   Introduction to the Turbo C Tutorial


        execution  speed  of  the same program if  it  were  written
        entirely in Assembly Language.

             Even  though the C language enjoys a good  record  when
        programs are transported from one implementation to another,
        there  are differences in compilers as you will find anytime
        you  try to use another compiler.   Most of the  differences
        become apparent when you use nonstandard extensions such  as
        calls  to  the DOS BIOS,  but even these differences can  be
        minimized  by careful choice of programming means.  Turbo  C
        follows  the  developing  ANSI standard so  well  that  your
        programs  developed with Turbo C should be very portable  if
        you should decide to use a different ANSI standard compiler.

             Throughout this tutorial, every attempt will be made to
        indicate  to  you what constructs are available in  every  C
        compiler  because they are part of the accepted standard  of
        programming practice.  Most of those constructs will use the
        generic  name "C", such as in the statement, "writing  to  a
        file is easy in C after you master a few fundamentals."   If
        a  particular  construct  is  a  Borland  extension  to  the
        language, it will be pointed out as such as an indication to
        you that it may not be available on other compilers.

             Turbo  C  is a very capable compiler, but  due  to  the
        tremendous  versatility of this compiler, it could  be  very
        difficult  for you to learn how to use it  effectively.   If
        you are a complete novice to programming, you will  probably
        find the installation instructions somewhat confusing.   The
        file on the SOURCE disk named COMPILER.DOC is provided  just
        for  you  since it will take you step by  step  through  the
        installation procedure and even show you how to compile  and
        run  your  first program.  You should print out  a  copy  of
        COMPILER.DOC at this time and use it as an aid to installing
        Turbo C on your system.

             This  tutorial cannot cover all aspects of  programming
        in C, simply because there is too much to cover, but it will
        instruct  you  in  all you need for  the  majority  of  your
        programming  in C.  You will receive instruction in  all  of
        the  programming constructs in C, but what must  be  omitted
        are  methods of programming since these can only be  learned
        by  experience.   More importantly, it will  teach  you  the
        vocabulary  of C so that you can go on to the more  advanced
        techniques of using the programming language C.

             It  would definitely be to your advantage to study  the
        Turbo C User's Guide at this point to gain experience in how
        to  edit,  compile, and run a C program.   You  should  read
        chapter  2  to  familiarize  yourself  with  the  Integrated
        Environment and learn how to use it, and to learn how to use


                                  Page 2









                   Introduction to the Turbo C Tutorial


        the  full  screen  editor which is a part  of  the  Turbo  C
        Integrated Environment.

             Remember  to read the file COMPILER.DOC To aid  you  in
        compiling your first program.
















































                                  Page 3
```
{% endraw %}

## TABCONT.TXT

{% raw %}
```





                  CORONADO ENTERPRISES TURBO C TUTOR - Ver 1.50


             This   documentation  and  the  accompanying  software,
        including all of the example C programs and text files,  are
        protected under United States copyright law to protect  them
        from  unauthorized commercialization.   This entire tutorial
        is distributed under the "Freeware" concept which means that
        you  are not required to pay for it.  You are  permitted  to
        copy  the  disks  in their entirety and pass them  on  to  a
        friend or acquaintance.   In fact,  you are encouraged to do
        so.   You  are permitted to charge a small fee to cover  the
        mechanical  costs of duplication,  but the  software  itself
        must be distributed free of charge, and in its entirety.

             If  you find the tutorial and the accompanying  example
        programs useful,  you may, if you desire, pay a small fee to
        the  author to help compensate him for his time and  expense
        in  writing  it.   A  payment  of  $10.00  is  suggested  as
        reasonable  and sufficient.   If you don't feel the tutorial
        was worth this amount,  please do not make any payment,  but
        feel free to send in the questionnaire anyway.

             Whether or not you send any payment, feel free to write
        to  Coronado  Enterprises  and ask for the  latest  list  of
        available  tutorials  and a list of the known Public  Domain
        libraries  that  can supply you with this software  for  the
        price of copying.   Please enclose a self addressed  stamped
        envelope,  business size preferred, for a copy of the latest
        information.   See  the  accompanying "READ.ME" file on  the
        disk for more information.

             I  have  no facilities for telephone  support  of  this
        tutorial  and have no plans to institute such.   If you find
        any problems,  or if you have any suggestions,  please write
        to  me at the address below.

                       Gordon Dodrill - Feb 1, 1988







               Copyright (c) 1987, 1988  Coronado Enterprises


                            Coronado Enterprises
                           12501 Coronado Ave NE
                       Albuquerque, New Mexico 87122












                    TURBO C TUTORIAL - TABLE OF CONTENTS




        Introduction --------------------------------------- Page  1

        Chapter  1 - Getting started ----------------------- Page  4
                      FIRSTEX.C   The first example program

        Chapter  2 - Program Structure --------------------- Page  7
                      TRIVIAL.C   The minimum program
                      WRTSOME.C   Write some output
                      WRTMORE.C   Write more output
                      ONEINT.C    One integer variable
                      COMMENTS.C  Comments in C
                      GOODFORM.C  Good program style
                      UGLYFORM.C  Bad program style

        Chapter  3 - Program Control ----------------------- Page 13
                      WHILE.C     The While loop
                      DOWHILE.C   The Do-While loop
                      FORLOOP.C   The For loop
                      IFELSE.C    The If & If-Else construct
                      BREAKCON.C  The Break & Continue
                      SWITCH.C    The Switch construct
                      GOTOEX.C    The Goto Statement
                      TEMPCONV.C  The temperature conversion
                      DUMBCONV.C  Poor program style

        Chapter  4 - Assignment & Logical Compare ---------- Page 20
                      INTASIGN.C  Integer assignments
                      MORTYPES.C  More data types
                      LOTTYPES.C  Lots of data types
                      COMPARES.C  Logical compares
                      CRYPTIC.C   The cryptic constructs

        Chapter  5 - Functions, variables, & prototyping --- Page 31
                      SUMSQRES.C  First functions
                      SQUARES.C   Return a value
                      FLOATSQ.C   Floating returns
                      SCOPE.C     Scope of variables
                      RECURSON.C  Simple Recursion Program
                      BACKWARD.C  Another Recursion Program
                      FLOATSQ2.C  Floating returns with prototypes

        Chapter  6 - Defines & Macros ---------------------- Page 43
                      DEFINE.C    Defines
                      MACRO.C     Macros
                      ENUM.C      The enum type variable

        Chapter  7 - Strings and Arrays -------------------- Page 46
                      CHRSTRG.C   Character Strings
                      STRINGS.C   More Character strings
                      INTARRAY.C  Integer Array
                      BIGARRAY.C  Many Arrays
                      PASSBACK.C  Getting data from Functions
                      MULTIARY.C  Multidimensional arrays









                    TURBO C TUTORIAL - TABLE OF CONTENTS



        Chapter  8 - Pointers ------------------------------ Page 53
                      POINTER.C   Simple Pointers
                      POINTER2.C  More pointers
                      TWOWAY.C    Twoway Function Data

        Chapter  9 - Standard Input/Output ----------------- Page 60
                      SIMPLEIO.C  Simplest standard I/O
                      SINGLEIO.C  Single character I/O
                      BETTERIN.C  Better form of single I/O
                      INTIN.C     Integer input
                      STRINGIN.C  String input
                      INMEM.C     In memory I/O conversion
                      SPECIAL.C   Standard error output

        Chapter 10 - File Input/Output --------------------- Page 70
                      FORMOUT.C   Formatted output
                      CHAROUT.C   Single character output
                      READCHAR.C  Read single characters
                      READTEXT.C  Read single words
                      READGOOD.C  Better read and display
                      READLINE.C  Read a full line
                      ANYFILE.C   Read in any file
                      PRINTDAT.C  Output to the printer

        Chapter 11 - Structures ---------------------------- Page 77
                      STRUCT1.C   Minimum structure example
                      STRUCT2.C   Array of structures
                      STRUCT3.C   Structures with pointers
                      NESTED.C    Nested structure
                      UNION1.C    An example union
                      UNION2.C    Another Union example
                      BITFIELD.C  A bitfield example

        Chapter 12 - Dynamic Allocation -------------------- Page 87
                      DYNLIST.C   Simple Dynamic Allocation
                      BIGDYNL.C   Large Dynamic Allocation
                      DYNLINK.C   Dynamic Linked List Program

        Chapter 13 - Character and Bit Manipulation -------- Page 97
                      UPLOW.C     Upper/Lower Case Text
                      CHARCLAS.C  Character Classification
                      BITOPS.C    Logical Bit Operations
                      SHIFTER.C   Bit Shifting Operations

        Chapter 14 - Example programs --------------------- Page 100
                      DOSEX.C     DOS call examples
                      WHATNEXT.C  Ask Question in Batch File
                      LIST.C      Source Code Lister
                      VC.C        Visual Calculator
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0816

     Volume in drive A has no label
     Directory of A:\

    CHAP1    TXT      6606   2-01-88  12:00p
    CHAP10   TXT     17903   2-01-88  12:00p
    CHAP11   TXT     28797   2-01-88  12:00p
    CHAP12   TXT     27291   2-01-88  12:00p
    CHAP13   TXT      5926   2-01-88  12:00p
    CHAP14   TXT     14698   2-01-88  12:00p
    CHAP2    TXT     15725   2-01-88  12:00p
    CHAP3    TXT     18514   2-01-88  12:00p
    CHAP4    TXT     33282   2-01-88  12:00p
    CHAP5    TXT     35051   2-01-88  12:00p
    CHAP6    TXT      8924   2-01-88  12:00p
    CHAP7    TXT     18648   2-01-88  12:00p
    CHAP8    TXT     18929   2-01-88  12:00p
    CHAP9    TXT     30620   2-01-88  12:00p
    FILES816 TXT      1532   2-16-88   9:29a
    GO       BAT        38   8-10-87  12:02p
    GO       TXT       386   8-10-87  12:05p
    INTRO    TXT      7071   2-01-88  12:00p
    LIST     COM     12791   2-01-88  12:00p
    PRINTEXT BAT       435   2-01-88  12:00p
    READ     ME       4718   2-01-88  12:00p
    TABCONT  TXT      7723   2-01-88  12:00p
           22 file(s)     315608 bytes
                           34816 bytes free
