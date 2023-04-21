---
layout: page
title: "PC-SIG Diskette Library (Disk #761)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0761/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0761"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE IMP SHELL"

    IMP SHELL is a powerful expert system for the IBM-PC. It has
    all the utilities needed to develop, test, and run new
    expert systems.
    
    An expert system is a program that has captured the expertise in some
    field and can deploy that expertise with seemingly intelligent
    behavior. This shell is useful for diagnostic problems -- whether
    you're an auto mechanic with a client whose car keeps stalling, or a
    test engineer with a batch of wafers that for some reason just won't
    pass QC. IMP SHELL can speed up your diagnosis process considerably.
    The IMP SHELL's functions are menu-driven and appear in windows. IMP
    expert systems are rule-based, backwards-chaining systems. They are
    very fast and not limited by an artificially small number of rules. It
    is especially good for classification tasks, troubleshooting, and
    alternative selection. It does not, however, have the proper
    architecture for applications that need a well-defined sequence of
    complex steps -- applications such as cost estimation or equipment
    configuration. These should be done on a forward-chaining shell.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES761.TXT

{% raw %}
```
Disk No  #761
Program Title: The IMP Shell
PC-SIG version 1
 
The IMP Shell is a powerful expert system development environment for
the IBM-PC. It contains all the utilities needed to develop and test
new expert systems, and run them when they are finalized.
All functions are menu driven and appear in windows. IMP expert
systems are rule based, backwards chaining systems.  They are very
fast and not limited by an artificially small number of rules. The
IMP Shell is in the public domain and is used in many educational
settings. It was developed by Daniel H. Marcellus of the
Middletown Programming  Works, Middletown, New York. It  is completely
described in  the book "Expert Systems Programming in Turbo Prolog"
which is written by Mr.  Marcellus, and published by Prentice- Hall,
Englewood Cliffs, N.J. (1987). An expert system is a program which has
captured the expertise of an expert in some field
and can deploy that expertise with seemingly intelligent behavior.
 
A shell makes it easy to set up an expert system by concentrating
on the problem at hand rather than on the details of a particular
machine reasoning system or artificial intelligence language. This
shell was written entirely in TURBO PROLOG, and the source code is
provided, although you don't need to understand anything about TURBO
PROLOG in order to set up an expert system  with this software.
 
The IMP Shell uses backward reasoning.  This means that it has the
proper architecture for creating good expert systems for
classification tasks, for troubleshooting, and, in general, for
anything that involves choosing among alternatives.  It is not the
proper architecture for applications that require a well defined
sequence of steps with complex reasoning going into the application of
each step.  Applications such as configuring complex equipment or
estimating costs of a project are of this sort. They should be
implemented with a forward chaining shell.
 
Usage:  Business/Professional Expert System development
 
System requirements:  PC-DOS 2.0 or higher with at least 512 K of
memory.  The system will run from a single dirve of any type.
 
How to start:  Place disk in your drive and type:  IMPSHELL  <return>
 
File Descriptions:
 
IMPSHELL PRO   Source code for the system
IMPSHELL EXE   Main program
IMPSHELL RUL   Sample expert system
IMPSHELL HLP   Help file used by the main program
README   TXT   Short description
IMPDESC1 TXT   Description file
IMPDESC2 TXT    "
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## IMPDESC1.TXT

{% raw %}
```
 SHORT DESCRIPTION OF  THE IMPSHELL  - 
                         AN EXPERT SYSTEM DEVELOPMENT ENVIRONMENT
 
 
 The IMP Shell is a powerful expert system development environment for
 the IBM PC.  It contains all the utilities needed to develop and test
 new expert  systems,  and run  them  when  they  are  finalized.  All
 functions are menu driven and appear in windows.   IMP expert systems
 are rule based,  backwards chaining systems.   They are very fast and
 not limited by an artificially small number of rules.
 
 The IMP Shell is in the public domain and is used in many educational
 settings.  It was developed  by Daniel H. Marcellus of the Middletown
 Programming  Works,  Middletown,  N.Y.  It is completely described in
 the book:
 
      D.   Marcellus, 
      Expert   Systems  Programming  in   Turbo  Prolog, 
      Prentice-Hall,
      Englewood Cliffs, N.J., 1987.
 
 An expert system is a program which has captured the expertise  of an
 expert  in  some field and  can deploy that expertise  with seemingly
 intelligent behavior.   For instance  there are expert  systems to do
 all these things:
 
 
      diagnose medical problems
 
      guide the repair of complex equipment
 
      give advice about taxes and investments
 
      guide chemists in synthesizing desired chemicals
 
      interpret telemetry data from satellites
 
      control nuclear reactors and electric utility grids
 
 
 A shell makes it easy to set up an expert system by  concentrating on
 the problem at  hand  rather  than  on  the details  of  a particular
 machine reasoning system or artificial  intelligence language.   This
 shell was written entirely  in TURBO  PROLOG,  and the source code is
 provided,  although you don't need to understand anything about TURBO
 PROLOG in order to set up an expert system with this software.
 
 The IMP Shell is menu driven,  and the menu allows you  to select all
 the  activities  that  are   necessary  at  various  stages   of  the
 development of an expert system, for example:
 
 
      1.   HELP information
      2.   MAKE rules for a new expert system
      3.   INSPECT the rule set that is loaded
      4.   SAVE the rule set that is loaded
      5.   LOAD an existing rule set
      6.   RUN the presently loaded rule set
      7.   EDIT an existing rule set
      8.   PRINT an existing rule set
      9.   DOS access
      10.  END this program
 
 
 The IMP Shell uses backward reasoning.   This means that  it has  the
 proper   architecture   for   creating   good   expert   systems  for
 classification  tasks,  for troubleshooting,  and, in  general,   for
 anything that involves choosing among   alternatives.    It   is  not
 the  proper  architecture  for  applications   that   require  a well
 defined sequence  of steps  with complex reasoning   going  into  the
 application of each step.   Applications such as configuring  complex
 equipment or  estimating costs of a project are of this  sort.   They
 should be implemented with a forward chaining shell.
 
```
{% endraw %}

## IMPDESC2.TXT

{% raw %}
```
FILES THAT SHOULD BE DISTRIBUTED WITH THE IMPSHELL



IMPSHELL.PRO - Source code for the entire system.



IMPSHELL.EXE - Compiled code for the shell, ready to run.



IMPSHELL.HLP - A tutorial and help file that can be accessed
               from the main menu of the shell.



IMPSHELL.RUL - This is an example expert system. It happens to 
               be an investment advisor.  The shell uses the
               file extension .RUL for any application systems
               that may be created.


README.TXT - Short information about the IMP Shell and how to
             start it up.
```
{% endraw %}

## NOTES761.TXT

{% raw %}
```
Program name:  IMP-shell

Author name:  Daniel H. Marcellus
              Middletown, N.Y.

Suggested donation:  Public domain

Program description:
 
    The IMP Shell is a powerful expert system development environment for the 
IBM-PC.  It contains all the utilities needed to develop and test new expert  
systems,  and run  them  when  they  are  finalized.  All functions are menu 
driven and appear in windows.   IMP expert systems are rule based,  backwards 
chaining systems.   They are very fast and not limited by an artificially 
small number of rules. 
    The IMP Shell is in the public domain and is used in many educational 
settings.  It was developed  by Daniel H. Marcellus of the Middletown 
Programming  Works,  Middletown,  New York.  It is completely described in the 
book "Expert Systems Programming in Turbo Prolog" which is written by 
Mr. Marcellus, and published by Prentice-Hall, Englewood Cliffs, N.J. (1987).
    An expert system is a program which has captured the expertise  of an expert
in  some field and  can deploy that expertise  with seemingly intelligent 
behavior.   For instance  there are expert  systems to do all these things: 

          Diagnose medical problems 
          Guide the repair of complex equipment 
          Give advice about taxes and investments 
          Guide chemists in synthesizing desired chemicals 
          Interpret telemetry data from satellites 
          Control nuclear reactors and electric utility grids 

    A shell makes it easy to set up an expert system by  concentrating on the 
problem at  hand  rather  than  on  the details  of  a particular machine 
reasoning system or artificial  intelligence language.   This shell was 
written entirely  in TURBO  PROLOG,  and the source code is provided,  
although you don't need to understand anything about TURBO PROLOG in order to 
set up an expert system with this software. 
    The IMP Shell is menu driven,  and the menu allows you  to select all the  
activities  that  are   necessary  at  various  stages   of  the development 
of an expert system, for example: 

                1.   HELP information 
                2.   MAKE rules for a new expert system 
                3.   INSPECT the rule set that is loaded 
                4.   SAVE the rule set that is loaded 
                5.   LOAD an existing rule set 
                6.   RUN the presently loaded rule set 
                7.   EDIT an existing rule set 
                8.   PRINT an existing rule set 
                9.   DOS access 
                10.  END this program 

    The IMP Shell uses backward reasoning.   This means that  it has  the proper
architecture   for   creating   good   expert   systems  for classification  
tasks,  for troubleshooting,  and, in  general,   for anything that involves 
choosing among   alternatives.    It   is  not the  proper  architecture  for  
applications   that   require  a well defined sequence  of steps  with 
complex reasoning   going  into  the application of each step.   Applications 
such as configuring  complex equipment or  estimating costs of a project are 
of this  sort.   They should be implemented with a forward chaining shell. 

```
{% endraw %}

## README.TXT

{% raw %}
```
 The IMP Shell is a powerful expert system development environment for
 the IBM PC.  It contains all the utilities needed to develop and test
 new expert  systems,  and run  them  when  they  are  finalized.  All
 functions are menu driven and appear in windows.   IMP expert systems
 are rule based,  backwards chaining systems.   They are very fast and
 not limited by an artificially small number of rules.
 
 The IMP Shell is in the public domain and is used in many educational
 settings.  It was developed  by Daniel H. Marcellus of the Middletown
 Programming Works, Middletown, N.Y.  It is described in his new book:
 Expert Systems Programming in TURBO PROLOG, Prentice-Hall, 1987.
 
 The IMP Shell requires DOS 2.0  or later and 512K of  memory.  It can
 run from a single disk of any sort.
 
 There is an extensive help and tutorial  facility  available from the
 main menu.  There is a large example in the file impshell.rul.  It is
 an investment advisor.  It can be loaded from the main menu.
 
 Start the system by typing IMPSHELL.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0761

     Volume in drive A has no label
     Directory of A:\

    FILES761 TXT      2614   5-21-87  11:39a
    GO       BAT        38   5-21-87  11:46a
    GO       TXT       848   5-21-87  11:45a
    IMPDESC1 TXT      3109   4-21-87   1:05a
    IMPDESC2 TXT       620   4-21-87   1:05a
    IMPSHELL EXE    142617   4-05-87   8:58p
    IMPSHELL HLP     13285   4-20-87  11:20a
    IMPSHELL PRO     27975   4-07-87   9:51a
    IMPSHELL RUL      5045   4-07-87   9:53a
    NOTES761 TXT      3271   5-03-87  11:04a
    README   TXT      1068   4-20-87  12:35p
           11 file(s)     200490 bytes
                          115712 bytes free
