---
layout: page
title: "PC-SIG Diskette Library (Disk #1606)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1606/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1606"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VERSA-SPOOL"

    VERSA-SPOOL brings a memory resident multi-printer spooler with big
    buffers and a bunch of options to the PC.  You get multiple buffers with
    adjustable output speeds.  If you're in a jam, you can redirect a
    printer output stream from one printer to another.  That lets you use
    two printers at once to print the same file, a bonus for people dealing
    with big database files.  It can also be a lifesaver for users who have
    a word processor whose output goes to a device other than the location
    of a letter quality printer.
    
    While useful to beginners, VERSA-SPOOL permits sophisticated adjustments
    and monitoring of its performance through command line arguments
    computer veterans are comfortable with.  It even allows the computer-
    wise to exploit memory locations beyond the 640k barrier that DOS was
    written to accommodate by specifying the location of RAM memory which
    VERSA-SPOOL will use for its buffers.  People with light programming
    experience can usually find between 64k and 192k of unused RAM lurking
    in a PC equipped with 640K RAM.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1606.TXT

{% raw %}
```
Disk No: 1606                                                           
Disk Title: Versa-Spool                                                 
PC-SIG Version: S2.0                                                    
                                                                        
Program Title: Versa-Spool                                              
Author Version: 2.10                                                    
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
VERSA-SPOOL brings a memory resident multi-printer spooler with big     
buffers and a bunch of options to the PC.  You get multiple buffers with
adjustable output speeds.  If you're in a jam, you can redirect a       
printer output stream from one printer to another.  That lets you use   
two printers at once to print the same file, a bonus for people dealing 
with big database files.  It can also be a lifesaver for users who have 
a word processor whose output goes to a device other than the location  
of a letter quality printer.                                            
                                                                        
While useful to beginners, VERSA-SPOOL permits sophisticated adjustments
and monitoring of its performance through command line arguments        
computer veterans are comfortable with.  It even allows the computer-   
wise to exploit memory locations beyond the 640k barrier that DOS was   
written to accommodate by specifying the location of RAM memory which   
VERSA-SPOOL will use for its buffers.  People with light programming    
experience can usually find between 64k and 192k of unused RAM lurking  
in a PC equipted with 640K RAM.                                         
                                                                        
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
║                 <<<<  Disk #1606  VERSA-SPOOL  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start VERSA-SPOOL, type:  SPOOL (press enter)                        ║
║                                                                         ║
║ To print documentation, type:  COPY SPOOL.DOC PRN                       ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
 
```
{% endraw %}

## SPOOL.DOC

{% raw %}
```






                                  Table of Contents


           1. Overview...................................................2

           2. Installation...............................................2

           3. Accessing Versa-Spool Once Installed.......................3

           4. The Parameters Enumerated..................................4

           5. Examples...................................................8
              5.1. To Install............................................8
              5.2. After Installation....................................9

           6. Programmer's Corner........................................9
              6.1. Sub-Function 0 : Return Signature....................10
              6.2. Sub-Function 1 : Toggle Pause........................10
              6.3. Sub-Function 2 : Clear Buffer........................10
              6.4. Sub-Function 3 : Request Pause Condition.............10
              6.5. Sub-Function 4 : Request Free Buffer Space...........10
              6.6. Sub-Function 5 : Request Total Buffer Size...........10
              6.7. Sub-Function 6 : Redirect Output To LPT1:............10
              6.8. Sub-Function 7 : Redirect Output To LPT2:............10
              6.9. Sub-Function 8 : Redirect Output To LPT3:............10
              6.10. Sub-Function 9 : Request Output Device..............10
              6.11. Sub-Function A : Request Output Speed...............10
              6.12. Sub-Function B : Set Speed..........................10
              6.13. Sub-Function C : Request Device Spooled Status......10
              6.14. Sub-Function D : Request Program Data Segment.......10
              6.15. Turbo Basic Function Call Examples..................11

           7. Business Stuff............................................11

           8. User Registration Form....................................12


















                                          i




























                                     Versa-Spool

                                    Version 2.10

                               A multi-printer spooler
                            Copyright 1990 - Jeff Newbro































                                          1












          1. Overview

          Versa-Spool is an extremely versatile print spooler  written  for
          the  IBM-PC/AT  series of computers.   In an effort to anticipate
          all the circumstances under which Versa-Spool may be required  to
          operate,  features  such as multiple buffers,  large buffer size,
          adjustable output speed,  and the ability to redirect  a  printer
          stream  from  one  printer  to another have been implemented.   A
          protocol has been developed  which  will  permit  access  to  the
          operating  parameters  and  current  status of Versa-Spool either
          from the dos prompt,  or from within a program in order to enable
          applications   to   interact  intelligently  with  their  printer
          resources.   And Versa-Spool may be instructed  to  automatically
          select  the  most efficient available printer to which output may
          be sent.

          Versa-Spool is installed and accessed at the dos prompt with  the
          following syntax :

               SPOOL [-option(s)] <enter>

            where option is one or more of the following :
              -a{n}      = Auto-select printer (n=Mode 1 or 2)
              -b{n}      = Buffer size (n=1..Available memory in k)
              -c         = Clear print buffer
              -n{n}      = Printer Number (n=1..3)
              -p         = Toggle Pause
              -r{n}      = Redirect output to new device (n=1..3)
              -s{n}      = Output Speed in cps (default = 100)
              -u{n}      = Allocate buffers in Unused memory (n=0..FFFF)
              -v{n}      = Offset interrupt Vectors (n=1..6)
              -?         = Show status


          2. Installation

          Versa-Spool  is  a  memory resident program which installs itself
          according to parameters specified by the -b, -n, -s,  -u,  and -v
          options the first time it is executed.   If no value is specified
          for these options,  Versa-Spool will  assume  that  1  buffer,  1
          kilobyte,   and  100  characters  per  second,  are  the  desired
          parameters.

          For example,  to install Versa-Spool to provide LPT1:  and  LPT2:
          with  80k  buffers  each,  the  following  command  line would be
          entered :

          C:\> spool -n2 -b80 <Enter>

          or, for a single 200k buffer for LPT1:, type :

          C:\> spool -n1 -b200 <Enter>

                                          2













          It would not be possible to install a single  buffer  for  LPT2:,
          since  the  buffers  are  allocated sequentially,  beginning with
          LPT1:.  It would, however, be possible to install a single buffer
          for LPT1: whose output was redirected to LPT2:.   This  would  be
          accomplished by the following two commands :

          C:\> spool -n1 -b100 <Enter>
          C:\> spool -n1 -r2 <Enter>

          The  redirection  feature  will  be  discussed  in greater detail
          later.

          Once Versa-Spool has installed itself as  a  terminate  and  stay
          resident program (TSR for short),  it will print its installation
          status on the screen and return to dos.   For those who may  want
          to install Versa-Spool with a batch files that checks the success
          of  its  commands,  an  error  level of 0 will be returned if the
          installation was successful,  or 1 if there was an error.   Also,
          for  the  batch  file  programmers,  the  messages printed on the
          screen by Versa-Spool may be piped to the nul  device  if  it  is
          undesirable  for the end user to see them.   For instance a batch
          file containing the lines :

          .
          .
          spool -n1 -b100 > nul
          IF ERRORLEVEL 1 GOTO NOGOOD
          .
          .

          would install a 100k buffer for LPT1: and show no  message  after
          installation.    If  Versa-Spool did not install itself properly,
          execution would be vectored to the label "NOGOOD",  presumably to
          echo an error message and exit.

          Subsequent executions of Versa-Spool will not install another TSR
          copy  of Versa-Spool,  but will rather provide communication with
          the already  installed  TSR  program.    The  protocol  for  this
          communication is described in the "Programmer's Corner" section.


          3. Accessing Versa-Spool Once Installed

          After  the first time Versa-Spool is run,  and its TSR portion is
          loaded, subsequent executions of the program will either cause it
          to print the current status of the resident copy in  response  to
          the  -?  option,  or  attempt  to  modify  its  operating  status
          according to the -c, -p, or -r parameters.

          For example, if LPT2: is to be paused for some reason, the line :


                                          3












          C:\> spool -n2 -p <Enter>

          would be entered.   Note that in this instance,  the -n parameter
          specifies  the device to be addressed,  rather than the number of
          buffers  to  be  installed.    This  convention  applies  to  all
          executions  of  Versa-Spool  subsequent  to  the  first,  when it
          installs its TSR portion.   The pause option is a toggle,  so  to
          restart the printer, the same line would be re-entered.

          Similarly, to clear the buffer for LPT1:, the line :

          C:\> spool -n1 -c <Enter>

          will  effect  the  desired  result.   Or,  since -n1 is a default
          value, simply :

          C:\> spool -c <Enter>

          would suffice.


          4. The Parameters Enumerated

          Now that you have the general idea,  here is some  more  specific
          information about the available parameters.

               -a   Automatic   printer  selection  permits  a  program  to
                    automatically redirect its output to the most available
                    printer.  This feature operates in one of two modes, as
                    specified by  a  1  or  2  following  the  "a"  on  the
                    installation command line.  In mode 1, each time Versa-
                    Spool  senses a form-feed character,  it will determine
                    which buffer is least full and redirect all  subsequent
                    output  to  that  printer.   This is useful for mailing
                    label programs and other  situations  in  which  single
                    page reports or forms are generated.   Mode 2 is useful
                    for situations in which multi-page  reports  are  being
                    generated  and  a  printer initialization string may be
                    sent between forms.   It operates similarly to mode  1,
                    except  that an escape character (character 27 decimal)
                    followed by a "@" symbol initiates the redirection.

               -b   This parameter is only available when installing Versa-
                    Spool.   Most currently available spoolers are  limited
                    to 64k, but Versa-Spool permits buffer sizes between 1k
                    and  the maximum available memory in your machine (less
                    64k) to be installed.  When allocating buffers with the
                    -u parameter,  the buffer size is restricted  by  other
                    factors  which  will  be  discussed later,  but in most
                    situations the previously stated rule applies.   During
                    installation,  the  default value for this parameter is
                    1k, and after installation, it cannot be used to modify

                                          4












                    the TSR portion of Versa-Spool.

               -c   The  buffer  selected  by  the  -n  parameter  will  be
                    cleared.    Any other buffers which have been allocated
                    will continue  to  function  without  disturbance.    A
                    typical command line would be :

                    C:\> spool -n2 -c

                    which would clear the contents of the buffer for LPT2:.
                    This   parameter   has   does   not   function   during
                    installation,  but the clearing of a buffer is implicit
                    in the process of its creation.

               -n   During installation, the -n option specifies the number
                    of  buffers  that will be allocated.   Each will be the
                    same size,  as specified by the -b option,  and will be
                    assigned sequentially to LPT1:, LPT2: and LPT3:.  Thus,
                    it is not possible to assign a buffer for LPT2: without
                    first  assigning  one  for  LPT1:.    Once the resident
                    portion of Versa-Spool is installed,  the -n  parameter
                    will  serve to specify the buffer to which any commands
                    will apply.   For instance,  in order  to  request  the
                    status  of  the  buffer  for LPT3:,  the following line
                    would be typed :

                    C:\> spool -n3 -?

                    When the  -n  parameter  is  not  specified,  either  1
                    buffer, or LPT1: will be assumed during installation or
                    subsequent operations, respectively.

               -p   Once Versa-Spool is installed, a printer may be paused,
                    if  that  is desirable.   The -p option,  which effects
                    this action, is a "toggle" and invoking it will cause a
                    printing device to pause,  or a paused device to resume
                    printing.

               -r   Once  installed,  the  output  from  the spooler may be
                    redirected from  its  normal  device  to  another  LPT:
                    through the use of this parameter.   Thus, if you had a
                    dot-matrix printer attached  to  LPT1:,  and  a  letter
                    quality printer attached to LPT2:, and a word processor
                    that only printed to LPT1:, you could redirect the word
                    processor  output  to  LPT2:  through  the  use of this
                    option.   The command line for that specific  situation
                    would be :

                    C:\> spool -n1 -r2 <Enter>

                    Also, in database applications where printer speed is a
                    problem  because large reports are generated regularly,

                                          5












                    Versa-Spool may be used to divide  the  output  between
                    two  or  three  printers  to afford an effective output
                    rate of two or three times that possible with a single,
                    unspooled printer.

                    The -r option is  only  available  after  the  resident
                    portion  of Versa-Spool has been installed,  and has no
                    effect during installation.

               -s   The output speed parameter determines the efficiency of
                    Versa-Spool for the environment in which  it  is  being
                    used.      Since   Versa-Spool  shares  the  computer's
                    attention with the currently running application, there
                    is a compromise between the rate at which it sends data
                    to the printer(s), and the rate at which it permits the
                    currently running application to perform its functions.
                    Outputting data to the printer at a  rate  faster  than
                    either the computer can process it,  or the printer can
                    accept  it  will  result  in  Versa-Spool  hogging  the
                    computer's  time  to  no  advantage,  and  causing  the
                    application program to seem unresponsive.    Outputting
                    too  slowly,  of  course  will cause large documents to
                    take excessive amounts of time to  print.    Since  the
                    circumstances  under  which Versa-Spool may be expected
                    to vary widely, this parameter has been made accessible
                    to the user.   This parameter is adjustable from 20  to
                    16000  characters per second,  in increments of 20 cps.
                    It will be some time before hardware is available  that
                    will  accommodate  the  higher speeds,  but Versa-Spool
                    will be ready when the time comes.

               -u   Although dos was only written to  accommodate  640k  of
                    main memory, many machines are currently being produced
                    which  permit  1000k  (1  megabyte)  to be installed on
                    their motherboards.   The additional  360k  of  memory,
                    beginning at hex segment A000 is partially allocated to
                    video  board  RAM,  extended memory buffers,  and other
                    such functions,  but there is frequently 64k or more of
                    contiguous  space available in this area.   With the -u
                    option,  Versa-Spool may be installed with its  buffers
                    allocated  in this unused area,  allowing large buffers
                    to be implemented while taking  up  less  than  30k  of
                    precious  dos  space.    It is not recommended that the
                    naive  user  try  to  install   Versa-Spool   in   this
                    configuration,   but  someone  with  light  programming
                    experience should be able to find between 64k and  192k
                    of  unused RAM in the range of segments C000 to F000 in
                    one of these 1 megabyte machines.   Once found,  Versa-
                    Spool   may  be  instructed  to  allocate  its  buffers
                    starting at a given segment address by entering the  -u
                    parameter  followed  by the HEX address of the segment.
                    Segment addresses of less that A000  will  be  adjusted

                                          6












                    upward to A000, and if Versa-Spool does not find RAM at
                    the  specified  segment,   an  error  message  will  be
                    displayed  and  the  resident  portion  will   not   be
                    installed.    A typical implementation of such a buffer
                    would be :

                    C:\> spool -n1 -b128 -uD000 <Enter>

                    Just to make it a little easier for the stout at  heart
                    who  decide to try this,  there should be 64k available
                    starting at E000 in nearly all of  these  machines  and
                    128k  starting at D000 in most without extended memory.
                    It is worth checking below that  area,  but  many  hard
                    disk controllers have a ROM starting at C800 which will
                    interfere with the buffer.

               -v   Many  TSR  programs  use  one or more of the interrupts
                    between 60h and 67h for their resident functions.    So
                    that  the two interrupts required by Versa-Spool do not
                    contend with any of the programs that you normally keep
                    resident,  you may install it with its  vectors  offset
                    from  the  default  60h and 61h through the use of this
                    parameter.  The example command line :

                    C:\> spool -n1 -v3 <Enter>

                    would install Versa-Spool with its  interrupts  at  63h
                    and  64h.     This  option  is  only  available  during
                    installation, and will default to 0 if not specified.
               -?   If it is desirable to know the status  of  one  of  the
                    spooled  printers,  this parameter will instruct Versa-
                    Spool to display a detailed report on the screen.  This
                    information includes any redirection  for  the  device,
                    the  output  speed,  buffer  size,  port status,  pause
                    status,  and remaining free space.   This function  may
                    also  be  useful  to  programmers,  as  it  returns the
                    remaining free space (in k) to dos as  an  error  level
                    when  it executes.   Thus it may be used in batch files
                    to test for insufficient buffer space before running  a
                    program which generates large reports.  An example from
                    a batch file which does this follows :

                    .
                    .
                    :START
                         REM Get the free space in buffer 1 (send the
                         REM display to nowhere)
                         spool -n1 -? > nul
                         REM If there is 10k or more of free space, print
                         REM the next file
                         IF errorlevel 10 GOTO PRINTDOC
                              REM Do some word processing until the spooler

                                          7












                              REM is ready
                              wordproc %2
                         :PRINTDOC
                         REM Print the report specified by %1
                         printrep %1

                    :NEXT
                    .
                    .

                    Of  course,  this  option  is  only  available once the
                    resident portion of Versa-Spool is installed and has no
                    effect during installation.


          5. Examples

          Here are a few more example command  lines  to  help  convey  the
          points expressed earlier.


          5.1. To Install

               Command                                 Configuration

          C:\> spool                         Show  syntax  for  Versa-Spool
                                             but do not install.

          C:\> spool -N2 -B60                Install Versa-Spool  with  60k
                                             100cps  buffers  for LPT1: and
                                             LPT2:.

          C:\> spool -n1 -b350               Install a 350k, 100cps spooler
                                             for LPT1:.

          C:\> spool -n1 -b128 -uC800        Install a 128k, 100cps spooler
                                             for  LPT1:  with  its   buffer
                                             starting at hex segment C800.

          C:\> spool -s256 -n1 -s200         Install a 256k, 200cps spooler
                                             for LPT1:.

          C:\> spool -s64 -n3 -s200 -a1      Install   three  64k,   200cps
                                             spoolers for auto-selection by
                                             the application at the end  of
                                             each page.

          C:\> spool -s64 -n3 -s200 -a2      Install   three  64k,   200cps
                                             spoolers for auto-selection by
                                             the application upon receiving
                                             CHR$(27)+"@".


                                          8













          5.2. After Installation

               Command                                 Effect

          C:\> spool -N1 -?                  Show  the  current  status  of
                                             LPT1:

          C:\> spool -n1 -c                  Clear the buffer for LPT1:.

          C:\> spool -P -N2                  If LPT2: is printing,  it will
                                             pause,   otherwise,   it  will
                                             resume printing.

          C:\> spool -n1 -r2                 Redirect the output of logical
                                             LPT1: to physical LPT2:.

          Note that the parameters are neither case-sensitive, nor required
          to be in any specific order.  Thus, the lines :

          C:\> spool -n1 - C

          and

          C:\> spool -c -N1

          are equivalent.   Also,  throughout the documentation, the prompt
          indicates that the current directory is C:\,  although this is by
          no means required for the proper operation of the program.

          6. Programmer's Corner

          When Versa-Spool is installed, it changes the original interrupts
          17h   and  1Ch  to  60h  and  61h  (plus  an  offset,   if  any),
          respectively, and installs its own interrupt handlers for 17h and
          1Ch.   The new interrupt 1Ch  performs  Versa-Spool's  background
          functions  and then passes control to the original interrupt 1Ch.
          The new interrupt 17h performs a reset (function  2)  immediately
          by  passing  control  to  the original interrupt 17h.   All other
          functions are buffered by Versa-Spool.   The  new  interrupt  17h
          also  has  an  additional  function  not provided by the original
          interrupt,  which may be called from  a  high  level  program  to
          request  the  spooler  status  or  control  the  operation of the
          spooler.   The additional  function  and  its  sub-functions  are
          implemented as follows :

          In all cases :
               Interrupt = 17h
               AH = 3                   ( Function # )
               AL = Sub-Function #      ( Sub-Function # )
               DX = Device # (0..2)     ( LPT1:..LPT3: )


                                          9












          6.1. Sub-Function 0 : Return Signature
               Return  Value  :  AX  =  1234  if  Versa-Spool is installed,
                    undefined if not installed.

          6.2. Sub-Function 1 : Toggle Pause
               Return Value : AX = 1 if paused, 0 if resumed.

          6.3. Sub-Function 2 : Clear Buffer
               Return Value : AX = 0 if cleared, 302h if not.

          6.4. Sub-Function 3 : Request Pause Condition
               Return Value : AX = 1 if paused, 0 if resumed.

          6.5. Sub-Function 4 : Request Free Buffer Space
               Return Value : AX = Remaining Buffer Space (in Kbytes).

          6.6. Sub-Function 5 : Request Total Buffer Size
               Return Value : AX = Total Buffer Size (in Kbytes).

          6.7. Sub-Function 6 : Redirect Output To LPT1:
               Return Value : none.

          6.8. Sub-Function 7 : Redirect Output To LPT2:
               Return Value : none.

          6.9. Sub-Function 8 : Redirect Output To LPT3:
               Return Value : none.

          6.10. Sub-Function 9 : Request Output Device
               Return Value :  AX = Output Device To Which Selected  Device
                    is printing (0..2).

          6.11. Sub-Function A : Request Output Speed
               Return Value :  AX = Output Speed in Characters per second.

          6.12. Sub-Function B : Set Speed
               Return Value : AX = Device status.

          6.13. Sub-Function C : Request Device Spooled Status
               Return Value : AX = 1 if device is spooled, 0 otherwise.

          6.14. Sub-Function D : Request Program Data Segment
               Return Value : AX = Versa-Spool data segment.
                    Note :    Address   Variable            Type
                              DS:10     Buffer 0 Pointer    huge *
                              DS:14     Buffer 1 Pointer    huge *
                              DS:18     Buffer 2 Pointer    huge *
                              DS:20     Port Status.        int [3]
                              DS:40     Return Status.      int [3]
                              DS:58     Input Pointer       long[3]
                              DS:68     Output Pointer      long[3]


                                         10












          6.15. Turbo Basic Function Call Examples

          The  following  Turbo Basic1 code will illustrate the use of some
          of the previous functions.   The same principles exemplified here
          will apply to all languages that permit interrupt calls.
               .
               .
               REG 1, &H304             ' AH = 3 AL = 4 (Function 3, Sub-
                                        ' Function 4)
               REG 4, &H0               ' DX = 0 (LPT:1)
               CALL INTERRUPT &H17      ' Call the interrupt
               PRINT "The buffer for LPT1: has ";REG(1);"k free"

               REG 1, &H304             ' AX = 304h
               REG 4, &H1               ' DX = 1 (LPT:2)
               CALL INTERRUPT &H17      ' Call the interrupt
               PRINT "The buffer for LPT2: has ";REG(1);"k free"

               REG 1, &H307             ' AX = 307h
               REG 4, &H0               ' DX = 0
               CALL INTERRUPT &H17      ' Call the interrupt
               PRINT "The data sent to LPT1: will now be output to LPT2:"
               .
               .

          7. Business Stuff

          This  program is distributed under the ShareWare concept.   Under
          this philosophy you may  run  the  program  for  the  purpose  of
          evaluation  for a reasonable period of time without incurring any
          liability either to purchase a license or be held responsible for
          any copyright violations.   If you decide that the  program  does
          suit  your  purposes,  however,  you  are  obliged  to purchase a
          license to use it and pay a registration fee.   When you register
          your  program,  you  will  receive your own serialized copy which
          will probably earn you money,  since a commission of 25% is  paid
          to  the licensee whose serial number appears on each registration
          form received.  Thus, if you upload your copy to a bulletin board
          and five people download it and register as licensees,  you  will
          not only have acted in good faith, but made money for having done
          so.  These commissions are paid at the end of each month.

          Now that your interests are protected,  the license to use Versa-
          Spool is issued  subject  to  the  conditions  specified  on  the
          registration form, which protect mine.

          Thank  you  for your interest in Versa-Spool and I hope you enjoy
          using it as much as I enjoyed writing it for you.

          --------------------
          1. Turbo Basic is a registered trademark of Borland International


                                         11












          8. User Registration Form

                                Licensing Conditions
          No warranty is either expressed or implied with regard to  Versa-
          Spool.   The user has more than ample opportunity to evaluate the
          performance of the program under normal operating conditions, and
          the author cannot be expected to  bear  the  consequences  of  an
          improper evaluation.   Further, the author will be held blameless
          for any and all damages arising from the use of  Versa-Spool,  be
          they direct or consequential.

          Name :______________________________________________________

          Title :_____________________________________________________

          Company :___________________________________________________

          Address :___________________________________________________

          City,State,Zip :____________________________________________

          Business Telephone :________________________________________

          Serial number of evaluation Versa-Spool :___________________

          Where did you obtain the evaluation copy ?

          (BBS, Consultant, Magazine, other) : _______________________


          I have read and agree to the terms of the license agreement :

          ________________________________________________ ___/___/___
                       (Signature)                            (Date)


          Comments or suggestions :___________________________________

          ____________________________________________________________

          ____________________________________________________________

          Please  complete  the  above  form and send it with your check or
          money order for $20 (plus appropriate sales tax in MA) to :

                                     Jeff Newbro
                                267 Lexington Street
                                East Boston, MA 02128

          Assigned Serial # :_________________________ (For office Use)



                                         12






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1606

     Volume in drive A has no label
     Directory of A:\

    SPOOL    DOC     32488   6-05-90  11:57p
    SPOOL    EXE     25473   6-05-90  11:57p
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       576   7-09-90   3:23a
    FILE1606 TXT      2369   7-10-90   2:21p
            5 file(s)      60944 bytes
                           97792 bytes free
