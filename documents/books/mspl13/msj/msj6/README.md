---
layout: page
title: "Microsoft Systems Journal (Vol. 6)"
permalink: /documents/books/mspl13/msj/msj6/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft Systems Journal Volume 6

────────────────────────────────────────────────────────────────────────────

Volume 6 - Number 1

────────────────────────────────────────────────────────────────────────────



Adapting Extended Processes to the Cooperative Multitasking of Microsoft
Windows

William S. Hall

Programming a lengthy process in the Microsoft Windows graphical environment
requires unique considerations. Unlike single-tasking or preemptive
multitasking operating environments, Windows1 uses message-driven,
cooperative multitasking to perform tasks. Windows programs do not execute
until a message is received; once received, the message must be processed
quickly so that control of the CPU can be relinquished to permit other
Windows programs to run. Performing a time-consuming process by coding a
single uninterrupted thread of execution is completely unsatisfactory
because Windows will never run any other task and will appear frozen to the
user during that time.

Fortunately, large tasks can often be broken down into smaller ones, each of
which can be quickly executed whenever the program is allowed to run. If
some means can be found for gaining control at appropriate intervals and
dispatching each task in the proper sequence, then it should be possible to
implement an extended process smoothly in Windows.

Asynchronous file transfer between two computers serves as a good example of
an extended process, because it can take hours over conventional
communication lines. This article demonstrates how to coordinate an extended
process into Windows using the popular Kermit file transfer protocol. One
common approach to writing a Kermit program involves breaking the protocol
into a sequence of tasks controlled by a finite state machine. I'll describe
modifications of this approach that fit the requirements of Windows and
illustrate how the program can be made to schedule its next task without the
use of a timing mechanism.

An implementation of Kermit that can be easily integrated into a Windows
terminal emulator is provided, as well as a sample terminal program that
uses this implementation. The program is capable of sending and receiving
files in text and binary formats over 7- and 8-bit wide data paths while
employing any of three methods of error detection and run-length encoding
for efficiency. Wildcards can be used to transfer groups of files in a
single operation. Although server mode and extensions such as long and
attribute packets are not included, the program is quite complete.

A total of 40 files are used to build Kermit and the two terminal emulators
described here. Partial listings taken from the Kermit and terminal programs
are included with this article. The complete source code needed to build
Kermit, the simple Windows terminal emulator, and the same emulator with
embedded Kermit is available on any MSJ bulletin board.

Realizing Kermit's Session Layer in Windows

In a Kermit session, information is exchanged by encapsulating blocks of
data in various types of packets that are normally less than 100 bytes in
length, unless an extended packet type is being used (see Figure 1).
Although Kermit is not a layered protocol as specified in the ISO open
system standards, most versions of Kermit are written with these layers in
mind to isolate functionality and make it easy to extend and maintain.

The Kermit session layer acts as the basic controlling mechanism for the
protocol. When sending or receiving a file, the session layer is driven by
the packet type received from the remote Kermit. This session layer can be
thought of as a finite state machine.

A public-domain tool called Wart has been developed for Kermit that allows a
programmer to describe such state machines very elegantly (see the sidebar
"Building a Finite State Machine with Wart" ). The Wart tool converts the
protocol description into a table-driven case statement, which is entered at
run time by calling the wart() function. The current state is maintained in
a static variable; thepacket type is obtained by the wart() function's call
to the transport layer function input() (the Kermit code implements its
protocol description using wart() in the file WNKERM.W, as shown in Figure
2). In turn, input() calls a data link layer function, rpack (see Figure 3),
to obtain a complete packet. Figure 4 diagrams the various states of the
Kermit protocol implemented in WNKERM.W.

In Kermit implementations written for single-tasking or preemptive
multitasking operating systems, once wart() is entered it never returns
until the entire session is complete or has been aborted. Likewise, input()
does not return to wart() until a properly formed packet with the correct
sequence number has been found. In turn, rpack does not return to input()
until a complete packet with a correct checksum has been obtained or a
time-out (usually of several seconds) has elapsed.

Of course, none of this waiting around is acceptable in Windows. Suppose
wart() is called from a Windows program as the result of a message. If
wart() runs as above, no other Windows program can run until the file
transfer has completed. Even if wart() returns after the action associated
with each state has been executed, long delays could still be experienced
while rpack tries to read in a complete packet from the communications line.
In fact, a complete packet might never arrive.

On the other hand, the actions associated with each state complete without
significant delay because they involve reading or writing small chunks of
data from a file, encoding or decoding this data, forming it into a packet,
and writing it out to the communications buffer. The solution is to violate
the layering principle and allow the session layer to recognize an
incomplete packet whose associated action is simply to return from wart().
This simple addition to the packet types plus a mechanism to build a packet
incrementally from successive reads of the communications line allows
Windows to release the CPU to other programs in a timely fashion.

This is how it works. Periodically the Windows procedure is entered with a
programmer-defined message that calls wart(), which then calls input(). If a
packet is ready, the action for that state is executed and another call to
input() is made. This time input() most likely returns an incomplete packet
and wart() returns control to Windows. Other tasks can then run; the result
is a nearly seamless multitasking functionality that handles the file
transfer almost transparently.

Of course, the way wart() is scheduled to run has not been explained. But
first, let's look at how the data link layer is handled.

The Data Link Layer

After the input() function calls rpack in the data link layer to get the
next packet, rpack calls getpacket, which parses the input stream into the
packet fields (see Figure 3). The getpacket function frames a packet by
detecting the start-of-packet character; the length of the data field is
used to determine when a complete packet has arrived. On any single call to
getpacket, the input stream may not contain enough data to build a complete
packet, and it may take several calls to this function before a packet can
be delivered.

This means that getpacket must be designed so that when it exhausts the
current data stream, it remembers how far along it has progressed and the
point from which it must continue when called again with more data. A state
machine implementation is again implied; it is easily realized by a case
statement because of the simplicity of getpacket. The state variable itself
is maintained in a globally visible structure that also contains the other
fields of the current packet. Each time getpacket is called, the case
statement is executed from the current state and returns when the buffer is
exhausted. This way, getpacket and its caller rpack do not need to wait for
more data to arrive from the communications line, and input can return
immediately to wart() with an incomplete packet type.

Waking Up the Session Layer

The missing piece in the above scenario is the scheduling of the session
layer. An obvious solution is to use a timer and place the call to wart() on
this thread. A timer, however, does not adjust to changing load conditions
and extra effort must be made to set the timing interval according to the
current baud rate.

A more satisfactory method is to replace the conventional GetMessage call in
the Windows message loop with PeekMessage. Whereas GetMessage does not
return to the program until a message has been placed into its queue,
PeekMessage always returns whether there is a message or not.

To use PeekMessage, your program processes any Windows messages that can be
pulled from the queue, or, if there are none, it does something else for a
short period. In the design used here, the communications port is polled
during this time, and any pending data is loaded into a local buffer. Then a
programmer-defined message is posted back to the window. The next call to
PeekMessage retrieves this message and the associated action is to call
wart(). Getpacket is entered via calls to input and rpack with the buffer
that was filled when the communications port was polled by PeekMessage. If a
complete packet is built, the next action in the session layer state machine
is executed. Otherwise, wart() sees an incomplete packet, and returns to
Windows. Figure 5 shows the message loop and excerpts of the WinProc used in
the sample terminal emulator.

Sample Application

The complete source code for a Windows-based terminal emulator with embedded
Kermit support (see Figure 6) can be found on any MSJ bulletin board. You'll
need the Microsoft Windows Software Development Kit (SDK) Version 3.0 and
Microsoft C Version 5.1 or 6.0 to build the application. A typical Windows
program, the terminal program consists of three parts: source, resources,
and definitions. Of course, the additions needed to add Kermit functionality
affect each of these three components.

For the most part, the Kermit module is independent of the terminal source
code. This module is a library to be added at link time. Of course the
terminal program cannot be entirely ignorant of certain Kermit functions,
and Kermit itself needs to be aware of certain variables such as the main
window and instance handles, the current communications channel, and the
location of the buffer used for reading data from the port. However, all of
these details can be handled fairly easily in the terminal source. By using
conditional compilation, the changes to the original code become clearly
marked, making adaptation to other terminal programs fairly straightforward.

Trying to maintain this same degree of isolation with respect to resources
is another matter. Kermit requires a user interface, so a string table, menu
item, and several dialog boxes have been added. Although the resource
compiler supplied with Version 3.0 of the SDK is a definite improvement over
its 2.x predecessor, it is still difficult to maintain multiple compilations
with a single source. In the end, it is necessary to build one RC source
file for the plain terminal emulator (without Kermit), another for the
emulator with Kermit, and then #include other resource files as needed.

Of course, the additional Kermit code and resources also affect the DEF file
because they require more function exports and segment names. But since it
is possible to have more than one SEGMENTS and EXPORTS section in a single
DEF file, it is quite simple to create a combined DEF file by concatenation.
Of course, segment names as well as function export numbers should be
unique.

There are three make files that control the  sources. The first, WNTERM,
simply builds the original terminal program, WNTERM.EXE. It is provided so
you can see clearly what has to change when the Kermit code is added. The
second, WNKERM, makes the Kermit library and compiles the Kermit resources.
The third make file, WNKTERM, builds the terminal with embedded Kermit
support, WNKTERM.EXE.

The Kermit Header File

Each of the Kermit modules as well as the terminal code that references
Kermit variables or constants must include the header WNKERM.H (see Figure
7). It consists of Kermit function prototypes, a menu, resource strings,
general manifests, and a number of structures associated with dialog boxes
or the protocol. All Kermit variables are defined in this header file. At
least one module in the terminal code should include WNKERM.H to declare the
data. To avoid possible conflicts with the terminal code, all variables and
functions begin with the prefix krm. All manifests include the string KRM_.
Thus, IDS_KRM_XXX names a string stored in the resource file, IDM_KRM_XXX, a
menu item, and IDD_KRM_XXX, a dialog box control. Strings use a reference
value, and other strings' manifests base themselves from this reference. The
base value is set to 10,000, but can be changed to avoid possible conflict
with the terminal code. The same is true of menus.

The Kermit code expects certain variables to be available from the terminal.
These are copied to Kermit variables at initialization. One of these, the
handle of the main window, is good for the lifetime of the program. Other
values may change periodically. For example, the communications port
identifier (cid) may vary if the user selects a different port. Because of
this, the Kermit code uses a pointer to reference the cid. Kermit must also
be able to reference a linear character buffer along with its current count,
so the count and the start of the buffer are kept as pointers by Kermit.
Kermit also expects that there are routines in the terminal to fill this
buffer by reading the com port and delivering the input to Kermit via a call
to the state switcher wart().

Kermit and the Terminal's Main WinProc

Of course, the terminal's main WinProc is also affected by the addition of
Kermit support. When the main terminal window is created, a call is made to
Kermit at WM_CREATE time to pass along information such as the window
handle, buffer information, and the location of the communications port
identifier. Except for the handle, this information changes dynamically, so
pointer variables are needed. During the initialization, WIN.INI is also
read under the subhead [Kermit] to provide user settings pertaining to the
protocol and inbound and outbound packets. The Kermit menu is also added to
the end of the terminal's main menu. Finally, if the port to be used is not
yet known, the Kermit menu should be initially disabled.

In the event either Windows or the program is closed, any global resources
used by Kermit must be freed. If termination is attempted in the middle of a
transfer, the user must have a chance to change his or her mind. In the
Kermit exit code, a message box appears if a transfer is still in progress.
If the reply is to shut down (IDYES), an error packet is sent to the remote
Kermit, all files are closed (incompletely received files are deleted if
this option has been set), and the response to WM_CLOSE or
WM_QUERYENDSESSION proceeds as usual. Otherwise, the session continues as if
nothing happened.

The Kermit menu allows the user to send a group of files (see Figure 8),
receive a group of files, cancel a transfer in one of several ways, and
select default values for several protocol and packet parameters (see
Figures 9 and 10). The Kermit menu processor returns TRUE if a menu item was
recognized and handled. Otherwise it returns FALSE; this is a signal for the
terminal to execute its own handler for WM_COMMAND.

When Kermit is in action, any child windows on the screen are hidden and a
modeless dialog box is posted to show the state of the transfer (see Figure
11). Of course, the transfer continues even if the terminal program is
minimized. If the terminal program draws its own icon rather than using a
class icon, Kermit will show the number of packets exchanged like an
odometer (with rollover every 10,000 packets) in the icon window. This lets
the user monitor progress even when he or she is performing other tasks and
the terminal is running in the background (see Figure 12). This display is
managed in response to the WM_PAINT message.

Finally, as already noted, Kermit calls the state machine in response to a
programmer-defined message. You have already seen how such a message is
generated by PeekMessage.

Conclusion

By breaking up a long process into naturally occurring shorter ones, it is
possible to preserve the cooperative multitasking feature of Windows and
still get the job done. Although Kermit has been used to illustrate specific
techniques, the principles presented here can be applied to other
communication protocols, as well as complex, time-consuming tasks that can
be described with a finite state machine approach.

1  For ease of reading, "Windows" refers to the Microsoft Windows graphical
environment. "Windows" refers to this Microsoft product only and is not
intended to refer to such products generally.

2  As used herein, "DOS" refers to the MS-DOS and PC-DOS operating systems.

The Kermit File Transfer Protocol

Like its famous puppet namesake, the Kermit file transfer protocol is
internationally known. Since its introduction in 1980, Kermit has become a
mainstay of academic and business computing, supported on machines from the
largest mainframes to the tiniest microcomputers. Operating systems
supporting this protocol include VM/CMS, DOS2, OS/2, CP/M, UNIX, and even
the USCD P-System. Kermit has been written in Algol, Pascal, C, FORTRAN,
BASIC, BCPL, CROSS, Compass, FORTH, PAL-8, MUMPS, BLISS, PL/1, Ratfor, PL/M,
Modula-2, LISP, and quite a few assembly languages. Kermit's importance is
rivaled only by the XMODEM protocol. There is even an IBM 370 version of
Kermit in Russian.

Kermit was written to answer the need for a reliable means of transferring
files from micros to mainframes. Simply uploading and downloading files is
often unreliable. Unusual file formats, noisy lines, or busy mainframes
expecting input at human typing speed frequently result in a trashed
transfer. To address this problem, Frank da Cruz and his associates at
Columbia University developed a protocol that supported operations between
DECSYSTEM-20 or IBM 370 systems and microcomputers running CP/M and DOS.
These early programs were made available to users along with the source
code. Today, Kermit remains free and is widely available at no more than the
cost of distribution. This policy has not only broadened the support base
for Kermit, it has also contributed to its astounding acceptance by the
computing community.

At first, Kermit was only capable of transferring text files in packets
containing at most 94 characters, using a simple 1-byte checksum. Since
then, Kermit has been extended to include binary transfers over 7- and 8-bit
wide paths, run-length encoding, CRC checksums, long packets, transfers over
networks, server modes, and more recently, sliding windows. Today, you can
not only send your file, you can preserve its attributes including its date
and time of creation. Kermit can even translate between varying character
sets such as ASCII, ISO Latin I, ISO Latin/Cyrillic, ISO Latin/Hebrew, and
Japanese JIS X 0208. Kermit has special features for users with visual,
hearing, or motor impairments, including speech synthesis, a simple
command-line interface, and special program documentation.

Most Kermit programs offer sophisticated terminal emulation as well as file
transfer. For example, Version 3.0 for DOS, written by Joe Doupnik of Utah
State University, emulates DEC VT320 terminals and supports Tektronix
graphics. Other features include screen rollback, Windows compatibility, a
visual bell for deaf users, right-to-left screen display for Hebrew and
Arabic, and a complete scripting language. Kermit rivals commercially
available products, but costs at most $20.00.

Building a Finite State Machine with Wart



Wart, written by Jeff Damens of Columbia University, is a tool that builds
state table switchers. Wart contains a small subset of the UNIX lexical
analyzer generator, lex, and may be freely distributed (lex, which means
"word" in Latin, translates to wort in German, which sounds like wart on a
frog).

Wart accepts as input a C program in the following format.


  lines to be copied | %state <state names...>
  %%
  <state> | <state,state,...> CHAR  { actions }

        .
        .
        .

  %%



The %state directive declares the program's states. The section enclosed
between the %% delimiters is the state table. A typical entry has the form


  <state>X {action}



which is read as

"if in state <state> with input X, perform {action}".

The optional <state> field names the states the program must be in to
perform the related action. If no state is specified, the action is carried
out regardless of the current state. If more than one state is specified,
the action is performed in any of the listed states. Multiple states are
separated by commas.

The required input field consists of a single literal character. In a given
state, if the input is the specified character, the associated action is
performed. The character . matches any input character. No pattern matching
or range notation is provided. The input character itself is obtained from a
function called input(), which the user must define. Input should return an
alphanumeric character or one of the following characters.

        %    -    _    $    @    .

The action statement is a series of zero or more C statements enclosed in
curly braces. Wart also provides the BEGIN macro, which is defined as state
= , as it is in lex. Wart is invoked at the command line as follows:


wart file.w file.c



In this example, Wart reads FILE.W and produces FILE.C, which can then be
compiled as an ordinary C program. Wart's output contains the function
called wart(), whose form depends on the state declarations and the state
transition table. Wart loops through calls to input() and uses the result to
index into a case statement created from the state table.

The following program demonstrates some of the capabilities and limitations
of Wart. BINTODEC.W accepts a binary number from the command line, preceded
by an optional minus sign and possibly containing a fractional part, and
prints the decimal equivalent.


BINTODEC.W
#include <stdio.h>
int state, s = 1, m = 0, d;
float f;
char *b;

/* Declare wart states */
%states sign mantissa fraction

/* Begin state table */
%%
<sign>-  { s = -1; BEGIN mantissa; }  /* Look for sign */
<sign>0  { m = 0;  BEGIN mantissa; }  /*Got digit,start mantissa */
<sign>1      { m = 1;  BEGIN mantissa; }
<sign>.      { fatal("bad input"); }      /* Detect bad format */
<mantissa>0  { m *= 2; }                /* Accumulate mantissa */
<mantissa>1  { m = 2 * m + 1; }
<mantissa>$  { printf("%d\n", s * m); return; }
<mantissa>.  { f=0.0; d = 1; BEGIN fraction; } /* Start fraction */
<fraction>0  { d *= 2; }                  /* Accumulate fraction */
<fraction>1  { d *= 2; f += 1.0 / d; }
<fraction>$  { printf("%f\n", s * (m + f) ); return; }
<fraction>.  { fatal("bad input\n"); }
%%

input(void) {       /* Define input() function */
    int x;
    return(((x = *b++) = = '\0') ? '$' : x );
}

fatal(char *s) {    /* Error exit */

    fprintf(stderr,"fatal - %s\n",s);
    exit(1);
}

main(int argc,char **argv) {    /* Main program */
    if (argc < 2) {
        fprintf(stderr, "Not enough input\n");
        exit(1);
    }
    b = *++argv;
    state = sign;           /* Initialize state */
    wart();                 /* Invoke state switcher */
    exit(0);                /* Done */
}



The following code is generated by processing BINTODEC.W with WART.EXE:

BINTODEC.C

/* WARNING --This C source program generated by Wart preprocessor.*/
/* Don't edit this C file; edit the Wart-format .W file instead, */
/* and then run it through Wart to produce a new C source file.  */

/* Wart Version Info: */
char *wartv = "Wart Version 1A(006) Jan 1989";

#include <stdio.h>

int state, s = 1, m = 0, d;
float f;
char *b;

/* Declare wart states */
#define sign 1
#define mantissa 2
#define fraction 3

/* Begin state table */


#define BEGIN state =

int state = 0;

wart()
{
    int c,actno;
    extern short tbl[];
    while (1) {
 c = input();
 if ((actno = tbl[c + state*128]) != -1)
     switch(actno) {
case 1:
    { s = -1; BEGIN mantissa; }
    break;
case 2:
    { m = 0;  BEGIN mantissa; }
    break;
case 3:
    { m = 1;  BEGIN mantissa; }
    break;
case 4:
    { fatal("bad input"); }
    break;
case 5:
    { m *= 2; }
    break;
case 6:
    { m = 2 * m + 1; }
    break;
case 7:
    { printf("%d\n", s * m); return; }
    break;
case 8:
    { f = 0.0; d = 1; BEGIN fraction; }
    break;
case 9:
    { d *= 2; }
    break;
case 10:
    { d *= 2; f += 1.0 / d; }
    break;
case 11:
    { printf("%f\n", s * (m + f) ); return; }
    break;
case 12:
    { fatal("bad input\n"); }
    break;
     }
    }
}

short tbl[] = {
-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
-1,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
 4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
 4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  1,  4,  4,
 2,  3,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
 4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
 4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
 4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
 4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,
-1,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,
 8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,
 8,  8,  8,  8,  7,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,
 5,  6,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,
 8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,
 8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,
 8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,
 8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,
 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
12, 12, 12, 12, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
 9, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
};

input(void) {       /* Define input() function */
    int x;
    return(((x = *b++) = = '\0') ? '$' : x );
}

fatal(char *s) {                    /* Error exit */
    fprintf(stderr,"fatal - %s\n",s);
    exit(1);
}

main(int argc,char **argv) {    /* Main program */
    if (argc < 2) {
        fprintf(stderr, "Not enough input\n");
        exit(1);
    }
    b = *++argv;
    state = sign;           /* Initialize state */
    wart();                 /* Invoke state switcher */
    exit(0);                /* Done */
}




Creating a Network Service Using the Client-Server Model and LAN Manager 2.0

Brendan W. Dixon

As the PC industry has matured, concepts and techniques pioneered on larger
systems have been adapted for PC users. Many of these, such as preemptive
multitasking, virtual memory and paging, are little changed on PCs. Others
have been combined with features unique to PCs, producing new uses for
computers. For example, when the graphical capability of the PC was combined
with the large-system approach to document preparation, a whole new
industry, desktop publishing, was created. The client-server model combines
the large-system concept of centralized resources with the PC's peer-to-peer
approach to networking, and lays the groundwork for distributed processing.

The client-server model is an application design approach that distributes
resources and processing between systems in a network. Unlike the standard
network model, where each client participates in resource management, the
client-server model divides responsibilities and intelligence. Servers
contain all of the intelligence necessary to own and manage the resource
(for example, a database server, as in Figure 1). Clients contain only
nominal information about the resource (that it is a database, for instance)
and do not assist in its management; they pass requests to the server, which
the server decides to accept or reject. Conversely, servers are unaware of
the client's intentions. A server only responds to requests for the resource
it is managing (say, a database transaction). Centralizing resource
management onto the server simplifies error handling and reduces the network
load. Removing resource management tasks from the clients reduces processing
requirements on workstation hardware and allows them to focus on their
primary responsibilities such as interfacing with the end user.

Microsoft LAN Manager is designed to support client-server programming.
While LAN Manager provides all of the facilities of standard PC networks
(that is, file and printer sharing), it also provides a platform that
simplifies the construction of client-server-based applications and network
communication.

This article examines the building of a LAN Manager service. Creating and
managing a group of remote named pipes will be discussed in a future
article, as well as the construction of a LAN Manager client under the
Microsoft Windows and OS/2 Presentation Manager graphical environments.

The LAN Manager Application Programming Interface (API) gives the programmer
a robust set of function calls to communicate with LAN Manager and issue
network requests. Almost any network task that can be performed from the
command line or by using LAN Manager's full-screen interface can also be
done through in-line code. There are nearly 130 API calls (see Figure 2),
and many take modal parameters that can be used to tune the function.

Most important for client-server programmers is LAN Manager's support of
remote named pipes. Named pipes are one-way or bidirectional facilities that
allow processes to communicate. They offer guaranteed delivery and built-in
buffering, simplified error detection, and access security.

Another feature of LAN Manager is nonconnection oriented messaging through
mailslots. Mailslots are useful for peer-to-peer communication, message
broadcasting, and client-server communication that does not require all the
facilities of a named pipe. Mailslots are either first-class (with
guaranteed delivery) or second-class (without guaranteed delivery). Remote
first-class mailslots, which can receive messages from remote workstations,
must be created on a LAN Manager server. But any workstation may send or
receive remote messages on a second-class mailslot.

Named pipes and mailslots enable the programmer to build applications that
utilize the network without being network-aware. LAN Manager also makes it
easy for the network administrator to control access to named pipes and
mailslots, and therefore the network. These facilities lead to easily built,
easily maintained, and easily controlled client-server applications.

Sample LAN Manager Service

In order to provide a consistent method of control for the network
administrator, LAN Manager was designed as an extensible system, implemented
as a group of services. A LAN Manager service is a detached OS/2 process
(that is, no console I/O) running as an extension of LAN Manager. Such a
service can be controlled (that is, started, paused, continued, or stopped)
through LAN Manager. Developing a LAN Manager service requires only that the
service be listed in the LANMAN.INI file, that it register itself with LAN
Manager as part of its start-up processing, and that it respond to LAN
Manager requests, which are sent to the service through the OS/2 signal
mechanism. Additionally, a LAN Manager service may take tuning parameters;
these are also normally specified in the LANMAN.INI file.

In the client-server model, the server makes resources available to the
client and manages those resources for the client. One server resource,
normally unavailable to clients, is the ownership of remote named pipes.
While a client may open and communicate on a remote named pipe, it cannot
create the pipe; remote named pipes are a resource provided by a LAN Manager
server and must be created on the server.

A sample LAN Manager service designed for this article, PBX, can serve as
the foundation for real-world client-server applications. PBX gives clients
the ability to establish peer-to-peer communications using named pipes
through a transparent routing mechanism. Clients register with PBX and
request connections with other clients. Once a connection is established
between two clients, PBX maintains the image of a peer-to-peer named pipe
connection for each client until the connection is broken. PBX creates at
least three threads in addition to the main thread created when PBX is given
control. Each thread is named after its C routine (see Figure 3). This
article examines the main thread, which initializes PBX and communicates
with LAN Manager. A future article will examine the remaining threads, which
create and maintain the virtual named pipe connections (see Figure 4 for the
source code files used to build PBXSRV.EXE).

To build a LAN Manager application, you will need either the Microsoft LAN
Manager Programmer's Toolkit or the Microsoft LAN Manager Developer's
Toolkit. These toolkits include the C header files and libraries utilized
in a LAN Manager application.

To support a LAN Manager API category in your program, you add one or more
#define statements and a #include for LAN.H in your C source file. Figure 2
lists the C preprocessor constants for each LAN Manager API category. For
example, to include support for mailslots, you would add the following to
your program file:


#define INCL_NETMAILSLOT // Include mailslots
#define INCL_NETERRORS   // Include error constants
#include <lan.h>


As for linking your application, most LAN Manager applications need to link
only with LAN.LIB, so you simply add this library to those you would
normally use (see Figure 5).

To build a LAN Manager service you will need to include support for the
service APIs by including a #define statement for INCL_NETSERVICE before you
#include LAN.H. Your program must also contain an OS/2 signal handler and
use the service APIs to maintain a simple communication protocol with LAN
Manager. These points will be covered in more detail further on.

Installing a LAN Manager Service

A service is started from the command line using the LAN Manager NET command
or using the LAN Manager full-screen interface. The PBX service could be
started from an OS/2 command prompt by typing:


NET START PBX


Services can also be started and stopped automatically when the LAN Manager
Workstation or Server service starts or stops by adding the service name to
either the wrkservices or srvservices line in LANMAN.INI (see the Microsoft
LAN Manager Administrator's Reference for details on LANMAN.INI).

When requested to start a service, LAN Manager scans the services section of
LANMAN.INI for an entry describing where to find the EXE to execute. Each
entry under the services section names a service and supplies the location
and name of the EXE file to be executed to start the service.

[services]

    .
    .
    .
 service_name = service_exe_path

The service_name is the name the service is known by to LAN Manager and the
user; with our sample, it's PBX. The service_exe_path describes the path of
the EXE file to execute. If the service EXE is in the LAN Manager directory,
the pathname can be relative. This is the case for the services shipped with
LAN Manager. If the EXE is outside the LAN Manager directory, the full
pathname and drive must be supplied.

Optionally, a service may take configuration parameters. These are also
specified in LANMAN.INI (though the user may override them when starting the
service),

and should be placed under a section whose heading name is the same as the
service. PBX has five configuration parameters; they would be listed in
LANMAN.INI as shown in Figure 6.

Start-up of a LAN Manager Service

A LAN Manager service receives control at the C main function like any other
C program. Immediately upon receiving control, a service obtains its own
process identifier (PID) and registers with LAN Manager by calling the
NetServiceStatus API:


 PIDINFO    pidInfo; // OS/2 PID info
 struct service_status ssStatus; // LM Service info

 // Obtain the process ID of this process
 usRetCode = DosGetPID(&pidInfo);

    .
    .
    .

 // Inform LAN Manager that this service is in the
 // process of installation
 // Because the signal handler is not yet installed,
 // the service cannot be uninstalled or paused
 ssStatus.svcs_pid = pidInfo.pid;
 ssStatus.svcs_status = SERVICE_INSTALL_PENDING |
                        SERVICE_NOT_UNINSTALLABLE |
                        SERVICE_NOT_PAUSABLE;
 ssStatus.svcs_code=SERVICE_CCP_CODE (PBXINSTALLTIME,
                                      0);
 usRetCode = NetServiceStatus((char _far *)&ssStatus,
                              sizeof(ssStatus));


The NetServiceStatus API call takes as its primary argument a pointer to a
buffer that must contain a service_status structure (see Figure 7). LAN
Manager needs the PID of the service to pass control requests to the
service. When a request is made to control a service (for example, NET PAUSE
PBX), LAN Manager signals the service through the OS/2 signal mechanism,
passing a request code in the first byte of the signal argument.

NetServiceStatus is also used by the service to pass status or error
information to LAN Manager. For example, if your service takes more than a
few seconds to install or respond to any LAN Manager request, it should
periodically inform LAN Manager that the request is still pending by calling
NetServiceStatus. Status and error information is passed by setting the
svcs_status and svcs_code fields in the service_status structure. Your
service should set the svcs_status field to the bitwise OR of the
appropriate values (see Figure 8). The service uses the SERVICE_CCP_CODE
macro to set the svcs_code field during installation and while responding to
requests from LAN Manager. The first macro argument is the approximate time
the service will take to install or complete the request in tenths of a
second. The second argument is a checkpoint counter that should be
incremented each time the service informs LAN Manager a request is still
pending.

If an error occurs and your service cannot install, set the svcs_status
field to SERVICE_UNINSTALLED and use the SERVICE_UIC_CODE macro to set the
svcs_code with the uninstall information code (UIC). Some UICs allow an
additional text string to be passed in the svcs_text field. The first
argument to the macro is the code and the second is an optional modifier
(see Figure 9). When the service is uninstalled, use the SERVICE_UIC_CODE
macro to supply LAN Manager with a reason code. For instance,
SERVICE_UIC_NORMAL is the proper UIC during a normal uninstall.

After registering with LAN Manager, the service should next establish a
signal handler for communication with LAN Manager. As mentioned, LAN Manager
communicates with a service by sending OS/2 signals. It does this using the
OS/2 DosFlagProcess API. OS/2 defines three process flags (that is,
signals): PFLG_A, PFLG_B, and PFLG_C. LAN Manager sends requests to a
service using the process flag A (PFLG_A) signal. LAN Manager also defines a
special constant, SERVICE_RCV_SIG_FLAG, which equates to PFLG_A, that can be
used when registering a signal handler to inform OS/2 that the service
should receive signals from LAN Manager. After establishing your signal
handler, inform OS/2 that your handler will ignore CTRL-C, break, and kill
process signals. You want your service to shut down only if requested to by
LAN Manager. Additionally, unless they are used by your service for
communication, process flags B (PFLG_B) and C (PFLG_C) should be regarded as
errors. The InstallSignals function in SIGNALS.C (see Figure 4) demonstrates
the proper technique for establishing a signal handler to communicate with
LAN Manager. Once your signal handler is in place, your service should call
NetServiceStatus again and update LAN Manager with its new status. For
instance, once the signal handler is installed, PBX can be uninstalled,
though it cannot be paused until installation is complete.

Communicating with LAN Manager

LAN Manager control requests are passed to your signal handler in the low
byte of the signal argument, the first argument passed to an OS/2 signal
handler. Again, your handler should respond to these requests quickly or
give LAN Manager status hints as your service is responding. Currently, LAN
Manager passes one of four arguments (see Figure 10). Values 0 through
127 are reserved, leaving 128 through 255 available for your internal
communication. The simplest way to build your signal handler is to use a
switch statement with a case for each possible argument. The PBX signal
handler, SignalHandler in SIGNALS.C, follows the format shown in Figure 11.

The requests SERVICE_CTRL_UNINSTALL and SERVICE_CTRL_INTERROGATE must be
supported by your service. When a SERVICE_CTRL_UNINSTALL is received, your
service should take whatever steps are appropriate for clean up and exit.
Prior to exiting, call NetServiceStatus one last time with the appropriate
UIC code to inform LAN Manager that your service has successfully
uninstalled. The ExitHandler routine in SIGNALS.C handles all exit requests,
error or otherwise, for PBX.

In response to a SERVICE_CTRL_INTERROGATE request, your service should call
NetServiceStatus with the current state of the service. PBX maintains a
global service_status structure that always reflects the current
state of PBX and is returned in response to SERVICE_CTRL_INTERROGATE
requests.

If you allow pausing of your service (as PBX does), you need to process
SERVICE_CTRL_PAUSE and SERVICE_CTRL_CONTINUE requests. A simple and
efficient method is to use OS/2 semaphores to control child threads. If the
semaphore is set, the child thread waits until it is cleared.

Initializing a LAN Manager Service

Once your service is registered with LAN Manager and your signal handler is
in place, you can proceed with initialization. All services should redirect
file handles zero, one, and two (corresponding to standard input, standard
output, and standard error) to the NUL device. The technique used by the
RedirectFiles routine in PBXSRV.C (see Figure 4) is the easiest: it opens
the NUL device for I/O and redirects handles zero through two by calling
DosDupHandle.

After disabling the standard file handles, your service can perform any
specific initialization it has. At this point, most services process the
configurable parameters that were specified either in LANMAN.INI or by the
user when the service was started. LAN Manager passes these parameters to
your service as a standard OS/2 argument string. Values explicitly specified
by the user when the service was started are passed first, followed by any
values from your service's section in LANMAN.INI that were not overridden
when starting the service. These values arrive as the standard C argc-argv
pair. For example, if PBX was started from the command line as below,


NET START PBX /Lines:200 /Connsperthread:10


and LANMAN.INI contained the values listed in Figure 6, PBX would receive
the following in argv:


 argv[0] = Pathname of PBX .EXE file
 argv[1] = "Lines=200"
 argv[2] = "Connsperthread=10"
 argv[3] = "LINEBUFSIZE=1024"
 argv[4] = "OPENLINES=20"
 argv[5] = "AUDITING=NO"


As you can see, the keywords are not in any specific order or case. LAN
Manager preprocesses the keywords to remove blanks and converts the
separating colon to an equal-sign (the user may specify either a colon or an
equal-sign when entering the keyword and its value). Any text following the
equal-sign or colon is treated as the keyword value, including comments, and
is passed to your service. If while overriding a keyword in LANMAN.INI the
user enters only a part of the keyword name, LAN Manager still passes the
full keyword from LANMAN.INI (if it exists). Since explicitly specified
keywords always come first, you may want to ignore second and subsequent
occurrences of a keyword; this allows the user to override values in
LANMAN.INI using short-cuts when starting the service.

Making a Service Known

Some services, such as PBX, offer a resource that will be used
intermittently by clients. In such situations, it benefits the client
application if the service can be automatically detected on the network. PBX
informs clients of its existence by waiting for broadcasts on a mailslot and
then responding with a message containing the name of the computer on which
it is executing.

A mailslot name looks like a pathname without a drive specification whose
root directory is named MAILSLOT. Remote mailslot names are preceded with
either the name of an individual computer (both first-class and second-class
mailslots) or a logical group of computers called a domain, which is used
with second-class mailslots only. A second class message sent to a mailslot
with the following name


\\*\MAILSLOT\mailslotname


sends the message to all machines in the same domain as the sending LAN
Manager workstation. It is recommended that the first qualifier in a
mailslot name, after the keyword MAILSLOT, be a corporate or product
identifier to avoid conflicts with other applications. PBX creates a
mailslot with the following name, using MSJ as the qualifier:


\mailslot\msj\pbx


When a message arrives on its mailslot, PBX responds by sending the name of
the computer on which it is executing prefixed with two backslashes, as in
the start of a remote name. As a message from the client, PBX expects the
computer name on which the client application is executing prefixed with two
backslashes. PBX calls the NetWkstaGetInfo function to get the computer name
on which it is executing. The call is issued twice, the first time with a
zero-length buffer and the second time with the actual buffer size needed.
Any LAN Manager call that returns a structure containing pointers to strings
or other data (instead of a fixed-length array) returns the structure and
the data addressed by the structure in the supplied buffer. Since the buffer
size cannot be statically predetermined, you should make the LAN Manager API
call twice. On the first call your service would pass a zero-length buffer.
LAN Manager will return NERR_BufTooSmall for a return code and the actual
number of bytes needed in the appropriate argument (the last argument on the
NetWkstaGetInfo call). Next, you allocate a buffer of the required size and
make the call again to retrieve the data.

If it is necessary to ensure that only a single instance of your service
exists in a particular LAN Manager domain, a similar approach may be used.
Your service would create a mailslot and wait for messages to arrive, as PBX
does; if a message is received, your service would send an appropriate
response. To determine if an instance of your service is already executing,
your service should send a broadcast message on the mailslot while it is
initializing, and briefly wait for a response. If no response is received,
your service could assume that it is running alone.

Multiple Threads in a LAN Manager Service

When writing a service it's best to use a multithreaded design. Since LAN
Manager communicates with a service through the OS/2 signal mechanism, your
service's main thread will be used to process LAN Manager signals. With
simpler services, it won't be a problem if one thread is used for all
processing. But in more complex programs, the sudden interruption of
processing may leave your service in an unstable state. After initialization
is completed, your main application thread should sleep. This is done most
efficiently by waiting on a dummy OS/2 semaphore.

When its initialization is completed, PBX uses its main thread for
processing signals and responding to broadcasts arriving on its mailslot.


// Run until PBX is shutdown
  do {
// Wait until a signal is received or a message
// arrives on the mailslot (which means a client is /// looking for the PBX)

    usRetCode = DosReadMailslot(
              pbPBXMem->hMailslot,   // Handle
              pbPBXMem->pbMSlotBuf,  // Buffer
              &usByteCnt,            // Bytes read
              &usNextCnt,            // Next msg size
              &usNextPriority,       // Next msg
                                        priority
              MAILSLOT_NO_TIMEOUT);  // Wait forever

  // If control has been returned because a client
  // sent a message,return to the client the computer
  // name of the machine on which PBX is executing
    if (usRetCode == NERR_Success &&
        usByteCnt != 0             ) {
      strcat(pbPBXMem->pbMSlotBuf, ANNOUNCELINE);
      usRetCode = DosWriteMailslot(
                pbPBXMem->pbMSlotBuf,    // Mailslot
                pbPBXMem->pszPBXMsg,     // Message
                pbPBXMem->usPBXMsgSize,  // Message
                                            size
                9,                       // Priority
                2,                       // 2nd class
                0L);                     // No wait
    }

  } while (usRetCode == ERROR_INTERRUPT   ||
           usRetCode == ERROR_SEM_TIMEOUT  );

  // Control never arrives here; the ExitHandler
  // always exits PBX
  return;
}



Logging Events with LAN Manager

To assist the network administrator, your service should log significant
events with LAN Manager. LAN Manager provides API support for two event
logs, an error event log and a non-error (or audit) log. At the very least,
errors that cause your service to shut down should be reported to LAN
Manager in the svcs_code field of the service_status structure (as noted
above). However, for these and other errors, your service should also log
the event with LAN Manager.

Whenever a significant error is encountered, PBX writes a message to the LAN
Manager error log using NetErrorLogWrite. The second argument passed to this
function is the error number. There are more than 120 error numbers. Most
are specific to services shipped with LAN Manager, some may be used by your
service, and one, NELOG_OEM_Code, was designed for third-party services.
Your service can pass NULL-separated substitution strings for the message
and the number of substitution strings as the sixth and seventh parameters
to NetErrorLogWrite. The NELOG_OEM_Code error message is defined as nine
substitutable strings (with no predefined text). It is recommended that the
first four strings be the company name, service name, error severity (such
as error versus warning), and subidentifier code. The remaining five strings
should contain additional data or be initialized to empty.

PBX writes all of its error messages to the error log via the ErrorRpt
routine in PERROR.C (see Figure 4) using the NELOG_OEM_Code error code. In
addition to the recommended data, PBX supplies the filename and line number
of the place where the error occurred as part of the message. While this may
be unnecessary after you ship your service, it is extremely helpful during
debugging when similar errors may occur along different code paths.

In addition to logging errors, PBX logs significant, non-error events in the
LAN Manager audit log by calling the NetAuditWrite function at the
appropriate times. Audit logging is enabled/disabled in PBX by the AUDITING
keyword, which defaults to YES. Each record in the LAN Manager audit log is
variable length and contains a fixed header, followed by a variable amount
of event-specific data, and a 2-byte field. The fixed header contains the
total length of the record (the length value at the end of the record is
redundant), the type of the record, and the time the record was written.
Your service does not build either the fixed header nor the length field at
the end of the record. You supply only the type of the audit event and the
event-specific data; everything else is built and supplied by the
NetAuditWrite function. Microsoft reserves audit event types 0 through
32,767; audit event types in the range 32,768 through 65,535 may be used by
third-party applications.

To record an audited event, your service calls NetAuditWrite, passing the
appropriate audit event type, a pointer to the event specific data, and the
length of the data. To simplify the logic of your program, NetAuditWrite
returns NERR_Success even if LAN Manager is not currently maintaining an
audit log. The user can disable all auditing when starting the server
service.

If your service does write audit records, you should also supply either a
facility to examine the records in the audit log or at least the necessary
constants and structures to interpret the records written by your service.
The audit event type used by PBX and the structure that maps the variable
portion of the PBX audit record is contained in PBXSRV.H (see Figure 4).

Debugging a LAN Manager Service

Although messages written to the LAN Manager error log can be helpful during
development to track problems, it may be even more useful to build a debug
version of your service that writes more than just error messages to the
error log. Informational messages could be written at critical checkpoints
to track flow of control and processing of requests handled by your service.

Since a service is a detached OS/2 process, your service cannot write to
standard output or standard error to report problems. It also makes it
difficult to use tools such as the Microsoft CodeView debugger. Therefore,
as you develop your service you may want to consider writing and debugging
the bulk of the application prior to converting it to a LAN Manager service.
Also, once your application has been converted to a service, instead of
redirecting standard output to the NUL device, you could direct it to a disk
file and use printf or fprintf to record debugging information. This
technique was used very successfully while developing PBX.

The next article will concentrate on the portions of PBX that create and
manage the named pipes and demonstrate how to build a sophisticated named
pipe server. It will explain multiple threads, managing multiple instances
of a pipe, client-server race conditions, and offer a brief discussion on
the two types of pipes supported by OS/2 and LAN Manager, byte and message
mode pipes.

Figure 2

Category:    Access Permissions
Description:    Functions to examine or modify resource access
                permissions
C Define:    INCL_NETACCESS

Category:    Alert
Description:    Functions to notify services and applications of
                network events
C Define:    INCL_NETALERT

Category:    Auditing
Description:    Functions to access and control the LAN Manager
                audit log
C Define:    INCL_NETAUDIT

Category:    Character Device
Description:    Functions to control shared communication
                devices (such as COM ports) and their queues
C Define:    INCL_NETCHARDEV

Category:    Configuration
Description:    Functions to read the LANMAN.INI file
C Define:    INCL_NETCONFIG

Category:    Connection
Description:    Functions to list connections on a LAN Manager server
C Define:    INCL_NETCONNECTION

Category:    Domain
Description:    Functions to retrieve domain information
C Define:    INCL_NETDOMAIN

Category:    Error Logging
Description:    Functions to access and control the LAN Manager
                error log
C Define:    INCL_NETERRORLOG

Category:    File
Description:    Functions to monitor and close file, device, and
                pipe resources on a server
C Define:    INCL_NETFILE

Category:    Group
Description:    Functions to control groups of user (part of the
                LAN Manager user account subsystem)
C Define:    INCL_NETGROUP

Category:    Handle
Description:    Functions to retrieve or set information for
                character device or named pipe specified by a handle
C Define:    INCL_NETHANDLE

Category:    Mailslot
Description:    Functions supporting LAN Manager mailslots
C Define:    INCL_NETMAILSLOT

Category:    Message
Descripton:    Functions to send and receive messages, and
               manipulate message aliases
C Define:    INCL_NETMESSAGE

Category:    Print Destination
Description:    Functions to control printers that receive
                spooled jobs
C Define:    Uses PMSPL.H or DOSPMSPL.H

Category:    Print Job
Description:    Functions to control jobs in a printer queue
C Define:    Uses PMSPL.H or DOSPMSPL.H

Category:    Printer Queue
Description:    Functions to control printer queues
C Define:    Uses PMSPL.H or DOSPMSPL.H

Category:    Remote Utility
Description:    Functions to support remote file copy and move, the
                execution of remote programs, and accessing time-of-day
                on a remote server
C Define:    INCL_NETREMUTIL

Category:    Server
Description:    Functions to perform adminstrative tasks on a server
C Define:    INCL_NETSERVER

Category:    Service
Description:    Functions to control LAN Manager services
C Define:    INCL_NETSERVICE

Category:    Session
Description:    Functions to control sessions between workstations
                and a server
C Define:    INCL_NETSESSION

Category:    Share
Description:    Functions to control shared resources
C Define:    INCL_NETSHARE

Category:    Statistics
Description:    Functions to retrieve or clear statistics for a
                server or workstation
C Define:    INCL_NETSTATS

Category:    Use
Description:    Functions to examine or control uses between a
                workstation and a server
C Define:    INCL_NETUSE

Category:    User
Description:    Functions to control a user's account in the user
                account subsystem
C Define:    INCL_NETUSER

Category:    Workstation
Description:    Functions to control the operation of a workstation
C Define:    INCL_NETWKSTA

Figure 5

  ■   OS/2 1.2      PMSPL.LIB      Print functions (DosPrintxxx)
                    LAN.LIB        All other functions

  ■   OS/2 1.1      NETSPOOL.LIB   Print functions
                    LAN.LIB        All other functions

  ■   DOS 3.1 and up DOSLAN.LIB    All functions

  ■   Windows 3.0   PMSPL.LIB      Print functions
                    LAN.LIB        All other functions

  ■   Windows 2.x   PMSPL.LIB      Print functions
                    LAN.LIB        All other functions

Figure 6

    [pbx]
      lines = 100
      linebufsize = 1024
      openlines = 20
      connsperthread = 5
      auditing = no

Figure 7


struct service_status {
    unsigned short  svcs_status; /* Current service state          */
    unsigned long   svcs_code;   /* Install/Uninstall code         */
    unsigned short  svcs_pid;    /* Process identifier of service */
    char           svcs_text[64];/* Additional text buffer        */
};



Figure 8

  ■ General status           SERVICE_UNINSTALLED
                             SERVICE_INSTALL_PENDING
                             SERVICE_UNINSTALL_PENDING
                             SERVICE_INSTALLED

  ■ Paused/Active status     SERVICE_ACTIVE
                             SERVICE_CONTINUE_PENDING
                             SERVICE_PAUSE_PENDING
                             SERVICE_PAUSED

  ■ Uninstallable indication SERVICE_NOT_UNINSTALLABLE
                             SERVICE_UNINSTALLABLE

  ■   Pausable status        SERVICE_NOT_PAUSABLE
                             SERVICE_PAUSABLE

Figure 11


// Extract signal argument
fSigArg = (UCHAR)(usSigArg & 0x00FF);

// And take the appropriate action
switch (fSigArg) {

// Uninstall PBX
case SERVICE_CTRL_UNINSTALL:



// Pause PBX
case SERVICE_CTRL_PAUSE:



// Continue (a paused) PBX
case SERVICE_CTRL_CONTINUE:



// Return service information
// Unrecognized arguments should be treated as
// interrogate requests
case SERVICE_CTRL_INTERROGATE:
default:



}

// Acknowledge with OS/2 when signal processing is
// complete
DosSetSigHandler(0, 0, 0, SIGA_ACKNOWLEDGE, usSigNum);




Improve Windows Application Memory Use with Subsegment Allocation and Custom
Resources

Paul Yao

Improved memory usage is one of the most important enhancements in the
Microsoft Windows graphical environment Version 3.0. Protected mode Windows1
lets you access up to 16Mb of RAM, and in 386 enhanced mode, a virtual
address space as large as four times the available physical RAM can be
created. On a machine with 16Mb of RAM and sufficient room on the swap disk,
a 64Mb virtual address space is possible. This is quite an improvement over
the 640Kb limitation that plagued earlier versions.

Windows lets you choose among several types of memory. This article explores
application memory use in Windows and identifies every place that you can
store a byte of data, concluding with sample programs that demonstrate
subsegment allocation and the creation of custom resources.

Subsegment allocation uses the Windows local heap management routines, such
as LocalAlloc and LocalFree, to manage a dynamically allocated segment.
Programmers working in OS/2 systems will recognize this as something
performed by the DosSubAlloc routine, and OS/2 Presentation Manager
programmers may recall that the WinAllocMem routine provides this service.
In the second half of this article, I'm going to show how to use a little
assembly language programming to access this service in a Windows program.

Windows has built-in support for several types of resources: dialog box
templates, menu templates, icons, cursors, and so on, as well as
custom-written resources. Resources are quite memory-efficient because
they are read-only data objects that can be demand-loaded at any time, and
can be discarded (purged) from memory when system memory is low. When a
resource is needed again, it can be reloaded from disk. I'll demonstrate
creating and using custom resources with a sample program.



Memory Management Factors

Four factors are important when dealing with memory: allocation, visibility,
lifetime, and overhead.

"Allocation" refers to who sets aside a piece of memory (see Figure 1). In
some cases, the compiler allocates memory in response to the declaration of
variables. In other cases, memory is allocated in response to calls made to
dynamic allocation routines. Windows has two distinct dynamic allocation
packages: one to allocate segments, and one to partition segments into
smaller pieces. Memory allocation can also occur as a side effect of
creating graphical and user interface objects. For example, when you create
a pen in the Graphics Device Interface, space is set aside in GDI's local
heap. When you create a window or a menu, the Windows user interface manager
allocates memory in its own local heap.

"Visibility" describes who can access memory. Some objects have a very
limited visibility, such

as automatic variables declared inside a function. Other objects, such as
dynamically allocated segments, are visible systemwide. These objects are
the most suitable for sharing data among programs, and are central to the
implementation of the Windows Clipboard and Dynamic Data Exchange (DDE)
mechanisms.

"Lifetime" pertains to the way memory is reclaimed. Generally, when a
program terminates, Windows frees the memory the program allocated. Proper
reclamation of memory is essential to the health and well-being of Windows
as a whole. A few pitfalls require extra care when programming. For example,
programs must explicitly free GDI objects and user interface objects such as
menus before ending. A future version of Windows will hopefully reclaim
memory allocated for these types of objects as well.

"Overhead" refers to the extra cost of using a specific type of memory over
and above the actual bytes used. It is a factor primarily in the context of
dynamically allocated memory. For example, every global memory object has a
minimum overhead of 24 bytes. If you are used to allocating many small,
dynamic memory objects, you need to rethink your use of dynamic memory. In
most cases, arrays of data structures are a more efficient means of storing
data in Windows than linked lists, which are popular with C programmers.

Since Windows is built on top of the segmented architecture of the Intel-86
family of processors, the following discussion is organized in terms of the
segments that are present in the Windows global heap.

Default Data Segment

Windows uses two types of executable files: application programs and
dynamic-link libraries (DLLs). Applications are the active "clients" that
directly interact with users. DLLs are the passive "servers" that provide
code, data, and device support to applications. Both are referred to as
modules.

In Windows, every module can have a private data segment, which is sometimes
referred to as a default data segment. The C compiler, the linker, and the
Windows multitasking switcher together ensure that every module has access
to its correct data segment. From an architectural point of view, this means
that the processor's data segment (DS) register is set up every time a
module boundary is crossed. From a programming point of view, module
boundaries can only

be crossed by calling exported functions. Exported functions are listed in
the EXPORTS section of a module definition file or defined with the _exports
pragma.

Because of the manner in which Windows maintains the DS register for
different modules, you must use either the small or medium compiler model.
These memory models, after all, are built for a single data segment. Other
compiler models such as compact, large, and huge can be used, but they
impose certain restrictions on programs. One reason to use these models is
that they support multiple data segments. However, Windows allows only one
instance of a program to run if it has multiple data segments. Furthermore,
in real mode multiple data segments must be declared FIXED in the program's
DEF file. Unfortunately, this causes problems using the local heap, since a
fixed heap cannot grow beyond its initial size. This is why most Windows
programmers have concluded that these compiler models aren't worth the
trouble.

In Figure 2, HeapWalker is shown displaying the segments belonging to the
Windows Calculator. The highlighted segment is CALC's default data segment.
In many respects, a program's default data segment is like any other segment
in the global heap: it is allocated with a call to GlobalAlloc and has a
maximum size of 64Kb.

In other ways, a module's default data segment is different from other
segments. For one, it is automatically locked whenever a program receives a
message. Unlike most data segments, a program's default data segment is
automatically locked, so you don't have to lock it explicitly.

Another way in which the default data segment differs from other segments is
that it is accessible with near data pointers. That's because the DS
register points to the default data segment. When a Windows program calls a
DLL routine (such as TextOut), the processor's DS register is set up to
point to the library's default data segment. The same thing happens when
Windows calls a program's WinMain, or when it calls a WinProc. Handshaking
ensures that the DS register is assigned so that it references the module's
default data segment.

A typical default data segment consists of a header, a static data area, a
stack, a local heap, and an optional atom table (see Figure 3).

The header is a 16-byte data area containing pointers that Windows uses to
manage a default data segment. A Windows program must leave this area alone
since it is automatically allocated at compile/link time and managed by
Windows at run time.

The header contains five pointers. Perhaps the most important is pLocalHeap,
which points to the beginning of the local heap in the default data segment.
The local heap management routines use this pointer to find the heap. A
Windows program should not use it directly to manipulate the heap but
instead should call the Windows library routines.

Three of the pointers reference the stack: pStackBot, pStackMin, and
pStackTop. When running the debug version of Windows, these pointers are
used to check for stack overflow. It is a good idea to test your programs in
this special version to detect stack overflow and other error conditions.

The fifth pointer, pAtomTable, points to a local atom table if the program
has created one. An atom table stores variable length strings in a common
hash table. An atom is identified by a 2-byte handle, which allows variable
length strings to be referenced using a fixed-length 2-byte value. The atom
table is itself part of the default data segment's local heap.

The header does not contain any pointers to the static data area. The
compiler defines the static data area and generates code that correctly
accesses it.

The Static Data Area

The static data area contains the static variables, which C programmers
sometimes refer to as global variables. The static variables are those
declared outside a function boundary, and all variables declared with the
static keyword. In addition, all literal strings are stored as static data
objects.

In the following code fragment, four objects are allocated in the static
data area:


char *pchFile;
long lLength;

long FAR PASCAL WndProc (HWND hwnd,   WORD wMsg,
                         WORD wParam, LONG lParam)
{
    static int iCount;
    PAINTSTRUCT ps;

    switch (wMsg)
    {
    case WM_PAINT:
         BeginPaint (hwnd, &ps);
         TextOut (ps.hdc, 10, 10, "Windows", 7);
         EndPaint (hwnd, &ps);






The two variables defined outside the procedure, pchFile and lLength, are
allocated in the static data area, as you would expect. So is iCount, which
uses the static keyword. This keyword makes iCount visible only within this
routine. But as a static object, it has a lifetime as long as the program
itself and therefore it resides in the static data area.

The fourth object that is allocated in the static data area is the string
"Windows". Every literal string gets its own data area even if two strings
are the same. If a string is going to be used in several places, it is a
good idea to define it once as an array and then reference the array by
name. Even better, use a string table to minimize the impact of literal
strings on the size of the static data area. A string table is a resource
that keeps strings on disk until they are needed. When needed, a string is
read from disk into its own discardable data segment. This way, when your
program is finished using them, string resources can be purged from system
memory.

The Stack

The stack is a dynamic data area that is managed by high-level languages
like C. The stack is so important that 80x86 processors have a set of
registers dedicated to its support and maintenance: the SS (stack segment)
register, the BP (base pointer) register, and the SP (stack pointer)
register.

When the call machine instruction is executed, a return address is
automatically pushed onto the stack by the CPU. When the return (ret)
instruction is executed, the return address is popped from the stack to
determine the instruction to which control is to be passed.

The C compiler and the CPU store three things on the stack: automatic or
"local" variables, arguments to called functions, and return addresses. The
STACKSIZE statement in a program's DEF file sets the size of a stack, with a
minimum stack of 5Kb allocated by the Windows loader.

Automatic variables are allocated on entry into a function and freed upon
exit. All variables declared inside the boundaries of a function without the
static keyword are automatic variables. In the code fragment shown earlier,
the PAINTSTRUCT variable ps is an automatic variable. If a program uses a
lot of automatic variables, the STACKSIZE may need to be increased to
reflect this.

Figure 4 shows a function being called in C, the corresponding assembly
language instructions that are generated, and the arrangement of the stack
after a function has been called and the stack set up. Each push instruction
copies two bytes to the stack. In this case, the called function, y, takes
three integer parameters, so three push instructions are generated to put
these parameters in place. The call instruction places a return address on
the stack, then passes control to the called function.

Inside the called function, the compiler creates code to adjust the BP
register to establish the stack frame. The base pointer then serves as the
anchor point from which parameters can be referenced as positive offsets
from the base pointer. For example, this assembly language instruction
places the third parameter into AX.

mov ax, [bp+04]


If there are local variables, the compiler creates code to adjust the SP
register to reserve space on the stack for them. This is done by the
following assembly language instruction, which is found in Figure 4:

sub sp,6


Local variables are accessed as negative offsets from the base pointer. For
example, this instruction copies the third local variable in the example
into the AX register.

mov ax, [bp-06]


Though the workings of the stack are somewhat esoteric and complex, the C
compiler usually insulates you from needing to understand every detail of
its operation. Hopefully this brief explanation has clarified the role of
the stack, and therefore the rationale behind the size that you specify in
the STACKSIZE statement.

The Local Heap

The local heap provides a private area in the default data segment from
which memory can be dynamically allocated. Every program's default data
segment has a local heap, which is automatically set up by the program
loader. A local heap is set up by calling the LocalInit routine. Allocating
and using memory in a local heap involves making calls to the local heap
management routines (see Figure 5).

Windows local heap management routines support three types of memory
objects: fixed, moveable, and discardable. These are the same types that can
be allocated on the global heap. Windows local heap routines are much more
sophisticated than the C malloc routine, which allocates only fixed objects.

To support moveable and discardable objects, the local heap manager uses a
handle-based memory allocation scheme. In other words, when a call is made
to the local heap allocation routine LocalAlloc, it returns a memory handle,
not a pointer. A memory handle is an identifier. By hiding the location of
the memory object, the local heap manager can move or discard objects when
necessary to satisfy allocation requests.

To access a local memory object, you lock the object by calling LocalLock.
This routine does two things: it increments the lock count of an object and
it returns a pointer to the object. You can keep an object locked for as
long as you need to access the object. However, since locking prevents the
local heap from being reorganized, it's often a good idea to keep a lock on
for a very short time, perhaps only for the duration of a single message.
Remove a lock by calling LocalUnlock.

To free a memory object that has been allocated on the local heap, you must
first unlock it, and then call LocalFree. The following code fragment
demonstrates allocating a memory object and copying a string into the
object.


HANDLE hMem;
PSTR   pstr;

/*  Allocate a 15-byte moveable object.  */
hMem = LocalAlloc (LMEM_MOVEABLE, 15);

/*  Lock the object, getting a pointer.  */
pstr = LocalLock (hMem);
if (!pstr)
    return (ERROR);
lstrcpy (pstr, "Hello World");

/*  Unlock the object.  */
LocalUnlock (hMem);



As you can see, error checking is important when you allocate memory. You
have no guarantee that the system will be able to satisfy your allocation
request. And if you write to the NULL pointer returned by LocalLock when it
fails, you overwrite the bytes at the bottom of the data segment. Remember,
the segment header is located at the base of your default data segment.
Overwriting it could be disastrous.

Local Atom Table

A program can create an atom table in its default data segment with a call
to InitAtomTable. This routine creates an atom table in the local heap. An
atom table efficiently stores variable-length strings. Once stored, a 2-byte
atom is returned, which is in some ways analogous to a handle. When a
duplicate string is added to an atom table, the same atom value is returned,
minimizing the duplication of variable-length strings.

In addition to the local atom table, Windows provides a global atom table.
DDE uses the global atom table to pass the names of data topics between
programs.

Dynamically Allocated Segments

Dynamically allocated segments are the most flexible type of read/write
memory for a program. Up to the limit of available system memory, a program
can have as many dynamically allocated segments as it wants, and each
allocated segment can be as large as 64Kb. In fact, you can allocate
segments that are larger than 64Kb, although that is beyond the scope of
this article.

Windows 3.0 has a systemwide limit of 8192 segments in real mode and in 386
enhanced mode. In standard mode, the limit is 4096 segments. The standard
mode limitation reflects the fact that two entries in the system handle
table, also known as the Local Descriptor Table (LDT), are required for each
segment. One entry is for the allocated segment and the other is for a
16-byte header that is attached to every allocated segment. Because real
mode and 386 enhanced mode do not require this extra handle table entry,
they are able to support twice the number of segments as standard mode.

In a future version of Windows, the limit to standard mode segments should
eventually be raised to 8192. This limit will change from a systemwide limit
to a per-task limit for both standard mode and 386 enhanced mode. Windows
will then have one LDT per task instead of the current implementation of one
LDT for the entire system in protected mode.

Programs allocate and manage dynamic segments using Windows global heap
management routines (see Figure 6). Where applicable, routines in Figure 6
are paired as a "top slice" and a "bottom slice" in a construction I call
the Windows sandwich.

My Windows sandwich has three parts: two outside pieces of bread that hold
the third part, the filling (see Figure 7). The first piece of bread
represents the code that borrows a system resource. The second piece of
bread represents the code that relinquishes the resource. The filling
represents code with which a program uses the resource. The idea is that the
filling is always used inside the sandwich, never by itself. The most common
type of sandwich is probably the following, a standard response to a
WM_PAINT message:


case WM_PAINT:
   {
   PAINTSTRUCT ps;
   BeginPaint (hwnd, &ps);          // top slice
   TextOut (ps.hdc, x, y, "Hi", 2); // filling
   EndPaint (hwnd, &ps);            // bottom slice
       .
       .
       .



Segment allocation mirrors local heap allocation in that both use a
handle-based memory management scheme. A call to GlobalAlloc returns a
handle, which identifies the memory but does not reveal its location.
Segments can be allocated as fixed, moveable, or discardable. To determine
the attributes of a specific segment, you can run HeapWalker and look for
objects that are identified as type Task. Using Figure 8 as a guide, the
three types of memory attributes can be easily identified. Note that a
discardable segment is also a moveable segment.

To access a global memory object, a call must be made to GlobalLock. Like
its local heap counterpart, LocalLock, GlobalLock increments a memory
object's lock count and returns a pointer to the object. Again, it is a
good idea to keep a lock only as long as an object is being used, which in
most cases means for the duration of a message. Unlocking an object involves
making a call to GlobalUnlock, which decrements the lock count on an object.

The following code fragment allocates a global memory object and copies a
string into the allocated memory.


HANDLE hMem;
LPSTR  lpstr;

/*  Allocate a 15-byte moveable object.  */
hMem = GlobalAlloc (GMEM_MOVEABLE, 15);

/*  Lock the object, getting a pointer.  */
lpstr = GlobalLock (hMem);
if (!lpstr)
    return (ERROR);

lstrcpy (lpstr, "Hello World");

/*  Unlock the object.  */
GlobalUnlock (hMem);



Error checking is just as important when using global heap objects. There is
no guarantee that Windows will be able to satisfy all of your requests for
memory, so you should plan accordingly. The above code fragment checks the
return value of GlobalLock; many Windows programmers also check for a valid
(nonzero) return value from GlobalAlloc.

For a program to run properly in all operating modes, it's a good idea to
keep global memory objects only for the duration of a single message.
However, if a program is to run solely in protected mode, it can take a
shortcut that is unthinkable in real mode. It can lock global memory objects
once, upon allocation, and keep them locked for as long as the object needs
to be in memory.

This can be fatal in real mode because global memory objects are locked in
the physical address space and quickly create memory sandbars. In protected
mode, however, such objects are not locked in the physical address space.
These objects can be moved unbeknownst to the application program.

Resources

A resource is a read-only data object that has been merged into a module's
executable (DLL, DRV, FON, or EXE) file by the resource compiler. When the
data is needed, it can be read into a discardable segment. When the memory
manager needs to use that memory for other purposes, it can discard or purge
the segment containing the resource.

Locating a resource with HeapWalker is easy, since resources are labeled
clearly. HeapWalker knows if a particular resource is a menu template,
dialog box template, or whatever. HeapWalker can even show the bitmap
associated with a particular resource (see Figure 9). Windows has built-in
support for accelerator tables, bitmaps, cursors, dialog box templates,
fonts, icons, menu templates, and string tables. These resources are used to
support several Windows user-interface objects: menus and dialog boxes, to
name two. In addition, several GDI objects are stored as resources: fonts
and bitmaps, for example.

Each resource resides in a separate segment. A program with one menu
template, three dialog box templates, and two cursors has six segments'
worth of resources. Each resource is put in its own segment so that each can
be loaded and discarded individually.

If you are writing a Windows program that has a fairly large block of
read-only data, you should consider putting the data into a resource. If
your data does not fit easily

into one of the predefined resource types, it's simple to create a custom
resource. I will demonstrate this in the CUSTRES program.

GDI Data Segment

Windows programs can call GDI routines that cause objects to be allocated in
GDI's default data segment. Whenever a call is made to a GDI routine that
contains the word Create (such as CreateDC, CreatePen, CreateFontIndirect),
you know that the routine allocates memory in GDI's local heap (see Figure
10). Fonts and bitmaps also cause memory to be allocated from the global
heap.

In general, if a program creates an object, it should make sure that it
deletes the object. In all versions of Windows, GDI expects every program to
clean up after itself. If a program forgets to delete an object, the
allocated memory is lost to the system. GDI was designed this way to allow
programs and instances of programs to share GDI drawing objects. For
example, the first instance of a program could create the GDI drawing
objects to be used by all instances. When subsequent instances start up,
they access the existing drawing objects either by sending messages or
calling the GetInstanceData routine, which copies the value of static data
objects from one instance's data segment to another instance's data segment.

Unfortunately, this design has resulted in a problem. If a program does not
free a GDI object when it terminates, the memory is lost forever. For this
reason, in a future version of Windows, Microsoft should consider changing
GDI so that, upon termination of a program, all GDI objects created by the
program are automatically destroyed. Until that time, you should ensure that
your program explicitly deletes all GDI objects that it has created (and
that it has not passed to other programs on the Clipboard).

USER Data Segment

The Windows USER module supports Windows user-interface objects, such as
windows, menus, dialog boxes, cursors, carets, and accelerator tables.
Unlike GDI objects, USER objects are not designed to be shared between
programs. For the most part, when a program terminates, USER frees the
memory that has been allocated for the user interface objects. Nevertheless,
you should be aware of the ways that a Windows program can cause memory to
be allocated in USER's local heap, because it is a limited resource that is
shared by all applications.

Quite a few user interface objects are stored in their own segments. In
fact, this is true for all user interface objects that are created as
resources. Others are allocated in USER's local heap, as shown in Figure 11.
While these objects are small, there are a few "gotchas" to avoid.

If you create several different menus and attach some of them to a window
using SetMenu, you have to be careful when your program terminates. Menus
that are connected to a window are automatically freed. Menus that are not
connected to a window, however, must be explicitly freed by your program
when it terminates.

A second "gotcha" occurs when you register a window class. As you may
recall, class registration involves filling in the values of a structure of
type WNDCLASS and passing a pointer to the RegisterClass routine. Make sure
that you fill in all elements of the WNDCLASS structure. If you don't fill
in the values of two fields, cbWndExtra and cbClassExtra, you may be in for
a surprise. These values define the amount of extra bytes to be allocated in
USER's data segment: cbWndExtra defines the extra bytes to be allocated for
each window, and cbClassExtra defines the extra bytes to be allocated for
the class. If you forget to initialize these fields, the USER module
allocates extra bytes using whatever values it finds in the data structure.

Of course, you may wish to use the often-overlooked window or class extra
bytes. They may be accessed via the functions found in Figure 12. They can
be used to connect a window efficiently to its data. For example, two window
extra bytes might be allocated to hold a memory handle for the data to be
displayed in a window. Or two class extra bytes could be allocated for GDI
drawing objects shared by the windows in a class.

Window extra bytes can be very useful when creating custom dialog box
controls, or for creating MDI windows. In general, if you are creating a
window class that will support multiple windows in a single application,
window extra bytes provide an easy way to connect a window's data to the
window itself.

Subsegment Allocation

As already discussed, there are two dynamic memory allocation packages in
Windows: local heap allocation and global memory allocation. By default,
every Windows program has a local heap. The heap is created by a routine
called InitApp, which is undocumented  but is part of the standard start-up
sequence of every program. One advantage of the local heap is that the
overhead for objects is low (4 to 6 bytes), and with a granularity of 4
bytes, waste is kept to a minimum. The only problem with the local heap is
that it is too small for many uses. Depending on the size of your stack and
the static data, the room remaining for the largest default local heap might
be 30Kb--50Kb.

This problem can be solved by using the global heap. On 386 systems, this
implies taking advantage of disk swap space in addition to physical RAM.
With the global heap, however, the overhead per object is high. Also, at a
minimum of 32 bytes per segment, the granularity of segments is too high to
be used for very small objects. Only large objects or arrays of small
objects are suitable for storage in objects allocated from the global heap.

To get the benefits of both local and global heap management, it's possible
to create a local heap in a dynamically allocated global segment. You can
allocate small objects from this heap, all managed by the local heap
manager, that share the segment efficiently with other objects.

To do this, keep in mind that the first 16 bytes of a segment are reserved
for the use of the local heap manager. At offset 06H, it stores a pointer to
the local heap. This allows the local heap to sit at the end of an
application's default data segment, after its static data and stack.

A second concern involves local heap initialization, which is accomplished
by calling LocalInit. This code fragment allocates a segment and initializes
a local heap in it.


HANDLE hMem;
int    pStart, pEnd;
LPSTR lp;
WORD  wSeg;

hMem = GlobalAlloc (GMEM_MOVEABLE, 4096L);
if (!hMem)
    goto ErrorOut;

lp = GlobalLock (hMem);
wSeg = HIWORD (lp);

pStart = 16;
pEnd  = (int)GlobalSize (hMem)-1;
LocalInit (wSeg, pStart, pEnd);
GlobalUnlock(hMem);
GlobalUnlock(hMem);



Notice the two calls to GlobalUnlock. The first counteracts the call to
GlobalLock; the second is needed because LocalInit leaves a segment locked.
Without the second call, the data segment would still be locked. In
protected mode, this doesn't present a problem, but segments that are
unnecessarily locked can create memory sandbars in real mode.

As always, GlobalAlloc's return value should be checked to determine whether
the requested memory is available. Even though you asked for a 4096-byte
segment, because different operating modes align on different segment
boundaries, call GlobalSize to make sure you know the exact size of the
segment. To make room for the header, pStart is set to 16. Set pEnd to the
offset of the last byte in the segment, which is the segment size minus one.

Another way to do this is to set pStart to zero, and set pEnd to the actual
size of the local heap.

pEnd = (int)GlobalSize(hMem)-16;
LocalInit(wSeg, 0, pEnd);


You subtract 16 from the size of the segment to set aside space for the
segment's header.

Accessing the local heap requires some programming in assembly language
because the segment selector of the heap must be placed in DS. Any of the
local heap management routines may then be called to operate on the local
heap.

When the DS register is pointing at a heap segment, don't try referencing
any static variables. You won't be able to access them, but you will
overwrite some of the heap segment instead.

If you are using Microsoft C Version 6.0, you can use the _asm pragma to
embed assembly language in your C code. The following saves DS on the stack,
sets up the DS register to point to the heap segment, allocates memory from
the heap, and restores DS to point to the default data segment.


LPSTR  lp;
HANDLE hmem;
WORD  wHeapDS;   /*  Must be a stack variable!  */

lp = GlobalLock (hmem);  /* Where local heap lives */
wHeapDS = HIWORD (lp);

_asm{
    push  DS

    mov   AX, wHeapDS
    mov   DS, AX
    }

hmem = LocalAlloc (LMEM_MOVEABLE, 16);

_asm{
    pop   DS
    }

GlobalUnlock (hmem);



Using a local heap in a dynamically allocated segment requires calls to two
routines, one for the segment and one for the local heap object. To obtain a
pointer to the allocated memory, calls to GlobalLock and LocalLock are
required. And to prevent fragmentation in the global heap or the local heap,
you'll probably want to unlock at both levels.

There are other methods, of course. A program can make all local heap
objects fixed, removing the need to perform the second lock. To be most
effective, it makes sense to build a small subroutine library to manage the
two-level allocation scheme. This might be as simple as creating your own
32-bit handles, using half for the local handle and half for the global
handle. This is the approach used in the sample program, SUBSEG (see Figure
13). Another alternative is for a subroutine package to issue its own
private 16-bit handles that reference a table of segments and local memory
objects.

SUBSEG

The SUBSEG program demonstrates subsegment allocation in a dynamically
allocated segment. I borrow the term subsegment allocation from OS/2, since
it describes this procedure better than the term local allocation. This
program contains a set of subsegment allocation routines that mirror the
Windows standard memory allocation routines. A routine called SubAlloc takes
the same parameters as LocalAlloc. Four other routines provide the basic
allocation services. Another function, SubInitialize, allocates and
initializes the dynamically allocated segment.

SUBSEG displays information about the allocated data objects (see Figure
14). To convince you that it works as advertised, it reads this information
from the object itself. As you can see, the actual size of objects is a
little larger than requested, reflecting the 4-byte granularity of the local
heap manager.

Unlike the handles generated by the local and global heap managers, the
handles issued by the memory management routines in SUBMEM.C are 32-bit. The
HIWORD contains a global memory handle, and the LOWORD contains a local
memory handle. You may want to devise your own scheme for identifying memory
objects, but for many purposes this is fast and simple enough.

If you've examined the code, you may have noticed that the segment allocated
by SUBSEG is never freed. Well, do as I say, not as I do. In other words,
please be sure to free any memory you allocate, unlock any memory you lock,
and in general undo whatever needs undoing to free any resource you use.

Custom Resources

Custom resources, as I said earlier, let you exploit the built-in memory
management features of resources with a minimum of effort. The best custom
resources are data objects that won't change. The sample resource I'll
demonstrate contains a table for determining sine and cosine values. This
look-up table supplies an integer sine value, which is simply a sine value
multiplied by 10,000. Look-up tables are commonly used because they are
often faster than on-the-fly calculations. Also, because 80386 and earlier
Intel processors do not have built-in floating point support, you'll get
faster performance if you limit your calculations to integer arithmetic. (By
the way, this fact influenced Microsoft enough to build Windows without
using any floating point arithmetic.)

CUSTRES contains two routines that calculate sine and cosine values for an
angle in measured degrees. With two functions and 360 degrees, there are 720
different values required for the look-up table. By taking advantage of the
symmetry of sines and cosines and doing a little folding and rotating, I
produce the same results with a single table of 91 sine values.

I obtained the table by writing a C program that calculates sine values and
writes them as ASCII text to a data file. Why ASCII text? I'm going to show
you a trick that lets you build complex binary data objects from ASCII text
files. The only tools required are a macro assembler, the linker, and a
special converter called EXE2BIN.EXE that comes with DOS. Figure 15 contains
the program files that create the custom resource.

The data file created by this program is an assembly language file
containing data definitions but no machine code. Instead, I use the macro
assembler to convert the data definitions into a binary format. The assembly
language file that SINE.EXE creates is SINEDATA.ASM (see Figure 16).

After the data file SINEDATA.ASM has been run through the macro assembler
and the linker, you have a "ready-to-run" EXE file that contains no code.
Next, EXE2BIN is used to isolate the data into a pure binary object; this
program is ordinarily used to create COM files from EXE files. A COM file is
simply a memory image that can be loaded and run as is. Since that's exactly
what you want--a pure, binary image--EXE2BIN does the trick to create the
sine table resource.

To test the sine and cosine functions, CUSTRES connects 360 points to draw a
circle with a radius of 100 pixels (see Figure 17). While this is slower and
rougher than you would expect from a call to GDI's Ellipse routine, it does
show that the generated sine and cosine values at least look right in the
range 0 to 360 degrees.

CUSTRES (see Figure 18) does all its work during the WM_CREATE, WM_PAINT,
and WM_DESTROY messages. All of the sine and cosine information is contained
in two routines, intSin and intCos. The second function actually cheats;
since a cosine is always 90 degrees out of phase with a sine, the intCos
function subtracts 90 degrees from the actual angle and calls the intSin
function.

Using a custom resource requires the FindResource, LoadResource, and
LockResource routines. The first two are called in response to the WM_CREATE
message. The result is a memory handle stored in hresSinData. FindResource
searches for the reference to a resource in the module database, which is
simply an abbreviated memory image of the module's file header. FindResource
takes three parameters:

FindResource (hInstance, lpName, lpType)

The first, hInstance, is an instance handle. The second, lpName, is a long
pointer to a character string with the resource name. The third, lpType, is
a long pointer to a character string with the resource type.

Even though lpName and lpType are pointers to character strings, this is not
the most efficient way to identify a resource, since a string comparison is
more "expensive" than an integer comparison. Because of this, I use a macro,
MAKEINTRESOURCE, which lets me define integers and use them in place of a
character string. Following are the two integers defined in CUSTRES:

#define  TABLE  100  /*  Custom resource type.    */
#define  SINE   100  /*  ID of sine table.        */

These integers are used in the call to FindResource, as follows:

hRes = FindResource (hInst,
           MAKEINTRESOURCE(SIN),      /* Name.  */
           MAKEINTRESOURCE(TABLE));   /* Type.  */

The MAKEINTRESOURCE macro creates a pseudo-pointer, with 0 for a segment
identifier and the integer value for the offset value. It casts this value
as an LPSTR. When the FindResource routine sees this value, it does not
treat it as a pointer (this would be a fatal error). Instead it uses the
2-byte integer value to find the resource definition, using the following
line in the resource file.

SIN  TABLE  sinedata.bin   DISCARDABLE


This line causes the data in the resource file, SINEDATA.BIN, to be copied
entirely into CUSTRES.EXE at compile/link time. This means that CUSTRES is a
standalone program and doesn't need the original resource data file to be
present at run time.

Once FindResource has provided a resource identifier, a call to LoadResource
provides a global memory handle for the resource itself. LoadResource, the
next routine called, is defined as follows:

LoadResource (hInstance, hresInfo)

Its first parameter, hInstance, is the instance handle; the second
parameter, hresInfo, is the handle returned by the FindResource routine.

In spite of its name, LoadResource does not load a resource. It allocates a
global memory object with a size of 0. No memory is set aside; only a global
memory handle is assigned. CUSTRES stores this value in hresSinData.

The routine that causes a resource to be loaded into memory is LockResource.
CUSTRES calls this routine only when it needs to access the sine table data.
By postponing the loading of such a memory object, CUSTRES helps minimize
the demands it makes on system memory. LockResource itself performs several
tasks: it loads the resource into memory, locks it in place, and returns a
pointer to the data. LockResource is defined as follows.

LPSTR LockResource (hResData)


hResData is the handle returned by the LoadResource function. LockResource
returns a long pointer to a string. CUSTRES casts this return value to a
long pointer to integers.

    int FAR * fpSin;

    fpSin = (int FAR *)LockResource (hresSinData);
    if (fpSin == NULL)
        return (0);

Casting prevents the compiler from complaining about a type-mismatch error.
Notice that a check is made on the return value from LockResource, in case
something (like insufficient memory) prevented the resource from being
loaded.

The LockResource routine should always be used with UnlockResource (remember
the sandwich?). This construction was discussed earlier as a way to organize
the use of a shared resource, in this case memory. LockResource loads a
resource and ties it down in memory. UnlockResource unties the resource to
allow it to move, or to be discarded. In CUSTRES, the intSin function uses
these two routines to bracket its use of the sine data, creating a Windows
sandwich that ensures that the object is locked when you need it, and
unlocked when not. UnlockResource is defined as follows. hResData is the
handle returned by the LoadResource function.

BOOL UnlockResource (hResData)


The final routine involved with handling custom resources is FreeResource,
which frees the memory associated with a custom resource. Again, hResData is
the handle returned by the LoadResource function.

FreeResource (hResData)


CUSTRES calls FreeResource in response to the WM_DESTROY message to
deallocate the sine resource. This program doesn't actually need to call
FreeResource, since the resource will be freed when CUSTRES terminates, but
good programmers clean up after themselves.

This program draws using the default MM_TEXT mapping mode. The circle in
Figure 17 is perfectly round only if the program is displayed on a VGA
monitor with a 1:1 aspect ratio. CUSTRES moves the origin of the logical
coordinate system to the middle of the window with the following code:

GetClientRect (hwnd, &r);
SetViewportOrg (ps.hdc, r.right/2, r.bottom/2);



Conclusion

As a Windows programmer, you have many options for allocating and working
with memory. Knowing how to exploit the different ways of packaging data in
Windows should help you write programs that take better advantage of what
the system has to offer.

1  For ease of reading, "Windows" refers to the Microsoft Windows graphical
environment. "Windows" refers to this Microsoft product and is not intended
to refer to such products generally.

Figure 5.  Local Heap Management Routines

  ■   LocalAlloc
      Allocates memory from a local heap.
  ■   LocalCompact
      Reorganizes a local heap.
  ■   LocalDiscard
      Discards an unlocked, discardable object.
  ■   LocalFlags
      Provides information about a specific memory object.
  ■   LocalFree
      Frees a local memory object.
  ■   LocalHandle
      Provides the handle of a local memory object
      associated with a given memory address.
  ■   LocalInit
      Initializes a local heap.
  ■   LocalLock
      Increments the lock count on a local memory
      object and returns its address.
  ■   LocalReAlloc
      Changes the size of a local memory object.
  ■   LocalShrink
      Reorganizes a local heap and reduces the size of
      the heap (if possible) to the initial, starting size.
      If this routine is successful, it reduces the size of the data segment
      that contains the heap, so that
      the memory can be reclaimed by the global heap.
  ■   LocalSize
      Returns the current size of a local memory object.
  ■   LocalUnlock
      Decrements the lock count on a local memory object.

Figure 10. Memory Used in GDI's Local Heap

      Object           Size
  ■   Bitmap           28--32 bytes
  ■   Brush            32 bytes
  ■   Device context   100 bytes per device for fixed overhead +
                       200 bytes per DC allocated
  ■   Font             40--44 bytes
  ■   Palette          28 bytes
  ■   Pen              28 bytes
  ■   Region           28--104 bytes


Figure 11. Memory Used in USER's Local Heap

      Object           Size
  ■   Menu             20 bytes per menu +20 bytes per menu item
  ■   Window class     40--50 bytes
  ■   Window           6070 bytes

Figure 12. Memory Used in USER's Local Heap

  Window Extra Bytes Routines   Description
  ■   SetWindowWord             Copies two bytes into window extra bytes
  ■   SetWindowLong             Copies four bytes into window extra bytes
  ■   GetWindowWord             Retrieves two bytes from window extra bytes
  ■   GetWindowLong             Retrieves four bytes from window extra bytes

  Class Extra Bytes Routine     Description
  ■   SetClassWord              Copies two bytes into class extra bytes
  ■   SetClassLong              Copies four bytes into class extra bytes
  ■   GetClassWord              Retrieves two bytes from class extra bytes
  ■   GetClassLong              Retrieves four bytes from class extra bytes

Figure 15. SINE

SINE.MAK

sine.obj: sine.c
    cl -c sine.c

sine.exe: sine.obj
    link sine;

sinedata.asm: sine.exe
    sine

sinedata.bin: sinedata.asm
    masm sinedata.asm, sinedata.obj;
    link sinedata, sinedata.exe;
    exe2bin sinedata.exe


SINE.C

/*-------------------------------------------------------------*\
 |  SINE.C - Creates an .ASM data file containing sine values   |
 |               from 0 to 90 degrees.  This file is suitable  |
 |               for creating a custom Windows resource.       |
\*-------------------------------------------------------------*/

#include "stdio.h"
#include "math.h"

char achFileHeader[] =
     ";\n"
     "; Sine/Cosine Data Table\n"
     ";\n"
     ";\n"
     "; Table of Sine values from 0 to 90 degrees\n"
     ";\n"
     "SINDATA segment public\n";

char achFileFooter[] =
     "\n"
     "SINDATA ends\n"
     "END\n";


main()
    {
    double dbPI  = 3.1415926536;
    double dbRad;
    FILE   * fp;
    int    iAngle;
    int    iSin;

    if (!(fp = fopen("sinedata.asm", "w")))
        {
        printf("Can't create sinedata.asm.\n");
        exit(1);
        }

    fprintf (fp, achFileHeader);
    fprintf (fp, "DW ");

    for (iAngle = 0; iAngle <= 90; iAngle++)
        {
        dbRad = (((double)iAngle) * dbPI) / 180.0;
        iSin = sin(dbRad) * 10000.0 + 0.5;
        fprintf(fp, " %5d", iSin);

        if (iAngle % 8 == 7)
            fprintf (fp, "\nDW ");
        else if (iAngle != 90)
            fprintf (fp, ",");
        }

    fprintf(fp, achFileFooter);

    fclose(fp);
    }


Figure 16. SINEDATA.ASM, Generated by SINE.EXE

;
; Sine/Cosine Data Table
;
;
; Table of Sine values from 0 to 90 degrees
;
SINDATA segment public
DW      0,   175,   349,   523,   698,   872,  1045,  1219
DW   1392,  1564,  1736,  1908,  2079,  2250,  2419,  2588
DW   2756,  2924,  3090,  3256,  3420,  3584,  3746,  3907
DW   4067,  4226,  4384,  4540,  4695,  4848,  5000,  5150
DW   5299,  5446,  5592,  5736,  5878,  6018,  6157,  6293
DW   6428,  6561,  6691,  6820,  6947,  7071,  7193,  7314
DW   7431,  7547,  7660,  7771,  7880,  7986,  8090,  8192
DW   8290,  8387,  8480,  8572,  8660,  8746,  8829,  8910
DW   8988,  9063,  9135,  9205,  9272,  9336,  9397,  9455
DW   9511,  9563,  9613,  9659,  9703,  9744,  9781,  9816
DW   9848,  9877,  9903,  9925,  9945,  9962,  9976,  9986
DW   9994,  9998, 10000
SINDATA ends
END



Learning Windows Part IV: Integrating Controls and Dialog Boxes

Marc Adler

Dialog boxes and the control windows within them are an integral part of the
Microsoft Windows graphical environment. The topic is broad enough to devote
two articles, both the previous article in this "Learning Windows" series as
well as this one, entirely to it. First, I conclude the discussion of
controls with a look at combo boxes, scroll bars, and user-defined controls,
then I place the controls into their proper setting: a dialog box. Finally,
adding dialog boxes to the sample stock quoting application gives it most of
its functionality.

Combo Boxes

The combo box, which was introduced in Windows1 Version 3.0, combines a
single-line edit control and a list box into one control window. It can be
used to enter a value in an edit field or to choose one string from a
predefined list of text strings. A combo box can replace a series of radio
buttons in a dialog box, taking up less space. In a word processing
application, you might want to enter the type size, in points, of the font
you will be using. A combo box could display a list of existing point sizes
and permit you to type in another number. A radio button group could be used
for this task, but if there were many point sizes, the radio button group
would probably take too much room in the dialog box. In addition, the number
of choices in a combo box can vary throughout the lifetime of an
application, but a radio button group generally has a fixed number of
choices. To add another choice to a combo box control, all the developer has
to do is append a text string to a combo box's list box; adding another
option to a radio group probably means creating a new radio button and
rearranging the entire group.

The first element of a combo box is a single-line edit control. A button
control to the right of the edit field is the second element, and the third
element is a list box control just below the edit control. As you scroll
through the list box, the current selection is displayed in the edit
control. A list box control in a combo box has the standard Windows 3.0 list
box features, including possible owner-draw items.

Windows 3.0 supports three styles of combo boxes. The simple combo box
style, which is the least used, has the CBS_SIMPLE style flag. In a simple
combo box, the list box is always visible. This kind of combo box has no
advantage over defining a separate edit control and list box control, except
that you don't have to code the list-box-to-edit tracking logic.

The other two combo box styles are drop-down (see Figure 1) and drop-down
list, defined by the CBS_DROPDOWN and the CBS_DROPDOWNLIST styles. The only
difference between them is that the edit control is disabled in the
drop-down list combo box, so users cannot enter their own values in the edit
field. This is useful if you want to make users choose from a list of
predefined values only.

The nice thing about the drop-down and drop-down list styles is that the
list box is hidden until you pull it down. You can pull it down either by
clicking on the control's button or by pressing the Alt-Down key
combination. You can use the Up, Down, Page Up and Page Down keys while the
focus is on the control to scroll through the list box items.

The messages and notification codes that are processed by the combo box
message interface are similar to those used by the standard list box and
edit controls. The only difference is that the prefixes CB_  or CBN_ are
used instead of the EM_, EN_, LB_, and

LBN_ prefixes. The single unique message, CB_SHOWDROPDOWN, is used to
display or hide the list box portion of a drop-down or drop-down list combo
box. Just before the list box portion is made visible, the CBN_DROPDOWN
notification code is sent to the parent of the combo box. This gives the
programmer a chance to modify the contents of the list box before it is
shown to the user.

Scroll Bars

Many Windows applications use a window as a "viewport" into some sort of
large data set. A list box window is a viewport into a series of strings, a
word processing document window is a viewport into a portion of the data
file, and so on.

Scroll bars are the primary means for the user to inform the application
that he or she wants to move the viewport to a new position in the data set.

A scroll bar control can be either vertical or horizontal. It has two
primary attributes: the range of values that the length of the scroll bar
represents, and the current position in the range. The current position is
indicated with a square icon called a thumb.

Scroll bars are usually attached to a window when it is created. To attach a
vertical scroll bar to a window, you simply give the window the WS_VSCROLL
style during creation. Similarly, the WS_HSCROLL style attaches a horizontal
scroll bar to the bottom of the window.

Scroll bars can also be used as standalone control windows. A good example
can be seen in the Edit Colors dialog box of Windows Paintbrush (see Figure
2).

A standalone scroll bar control is created in the same way as any other kind
of control window--using CreateWindow or defining the control as part of a
dialog box in a resource file. Vertical control scroll bars have the
SBS_VERT style, and horizontal scroll bars have the SBS_HORZ style.

Windows API functions allow you to query and set the current position and
the range of the scroll bar. The five scroll bar functions are as follows:


int GetScrollPos(hWnd, nBar)
void GetScrollRange(hWnd, nBar, lpMin, lpMax)
int SetScrollPos(hWnd, nBar, iPos, bRedraw)
void SetScrollRange(hWnd, nBar, nMin, mMax, bRedraw)
void ShowScroll bar(hWnd, nBar, bShow)


The first parameter, hWnd, can be either the handle of a scroll bar (when
dealing with a control scroll bar), or the handle of the window that
contains the scroll bar. The second parameter, nBar, details which scroll
bar you want. If nBar is SB_CTL, the hWnd parameter is the handle of a
control scroll bar. If nBar is SB_VERT, hWnd is the handle of a window
containing the vertical scroll bar; if nBar is SB_HORZ, hWnd is the handle
of a window with a horizontal scroll bar.

Scroll bars, unlike other control windows, do not generate WM_COMMAND
messages when the parent window needs to be notified of some event. Instead,
they generate WM_VSCROLL and WM_HSCROLL messages. WM_VSCROLL messages are
sent by vertical scroll bars, and WM_HSCROLL messages are sent by horizontal
scroll bars. The notification codes for these messages are the same, and are
passed in wParam (see Figure 3). If the message was generated by a control
scroll bar, the handle of the scroll bar is passed in the HIWORD of the
lParam (otherwise, the HIWORD of lParam is 0). The LOWORD of the lParam
contains the current thumb position for two of these notification messages.

When the top arrow of a vertical scroll bar or the left arrow of a
horizontal scroll bar is clicked, the SB_LINEUP notification code is sent to
the parent window. Clicking on the down arrow or the right arrow generates
an SB_LINEDOWN code. Clicking in the area between the top or left side of
the scroll bar and the thumb causes the SB_PAGEUP code to be sent. And if
you click between

the bottom or right side of the scroll bar and the thumb, the SB_PAGEDOWN
message is generated. As you drag the thumb, the scroll bar generates a
series of SB_THUMBTRACK notification codes with the current position of the
thumb in the LOWORD of lParam. The SB_THUMBTRACK notification codes allow
the developer to vary the contents of the window continuously as the thumb
is dragged. However, it is not always possible to update the contents of a
window dynamically as the user is scrolling (this is often the case if the
window's contents are too complex). When dragging stops, the scroll bar
generates the SB_THUMBPOSITION message, which contains the final position of
the thumb in the LOWORD of lParam. If dynamic scrolling of the window is not
feasible, the window can be updated once at this point to reflect the new
position of the viewport.

When these notification codes are sent to the WinProc of the scroll bar's
parent, the WinProc must update the scroll bar thumb to reflect the new
position. The WinProc must scroll the data in the window as well. Windows
automatically handles scrolling for list boxes, combo boxes, and edit
controls that have scroll bars.

Sample Scroll Bar Use

Assume that you have written a simple Windows application that constantly
generates a tone (like a program that aids guitarists in tuning their
instruments). You attach a vertical scroll bar to the main window of the
program; the range of the scroll bar represents eight octaves (there are 12
notes in an octave, for a total of 96 notes), and the current position of
the thumb represents the note that is currently sounded. (You have a
function called SoundTone that accepts a note value and generates the
corresponding tone.)

First, create a window with a scroll bar and set the range of the scroll bar
from 1 to 96. Also, the initial tone is set to an A-440Hz, the 22nd note in
your range (see Figure 4).

To get to the next or previous note in the range, the user must click on the
down or up arrow of the scroll bar. To increase or decrease the octave, set
up the scroll bar so that the user can click between the thumb and the down
arrow, or the thumb and the up arrow. Dragging the thumb produces a sliding
glissando sound (see Figure 5). The WM_VSCROLL messages that are sent to the
main window must be processed and the tone adjusted accordingly. You must
also reposition the thumb so that it ends up at the correct location in the
scroll bar.

Dialog Boxes

Dialog boxes can be thought of as the glue that binds groups of control
windows together. A dialog box is simply a pop-up window containing one or
more child windows. These child windows can be in one of the previously
discussed control classes, or they can be custom developed. Two
characteristics distinguish a dialog box from an ordinary pop-up window.
First, a dialog box can be defined in an external ASCII resource file.
Second, a dialog box manager in Windows handles the interaction between the
user and the dialog box.

The dialog box manager processes the keystrokes that occur in a dialog box
and performs the actions indicated by the keystroke. If the user presses
Tab, the dialog box manager must search forward, starting after the control
that currently has the focus, for the next control on which the focus can be
set (that is, a control with the WS_TABSTOP style). If the user presses Esc,
the dialog box manager generates a WM_COMMAND message with the IDCANCEL
value and sends it to the user-defined dialog box procedure.

Several steps are involved in using a dialog box in your Windows
application. First, you must define a dialog box in the resource file (RC),
compile it using the resource compiler, and attach it to the EXE file of
your application. Second, your application must define a dialog box
procedure to handle the messages sent to the dialog box. Third, your
application must load the dialog box from the resource file and call the
dialog box manager to display it so it can interact with the user.

There are two types of dialog boxes, modal and modeless. Most applications
use modal dialog boxes to gather information from the user. A modal dialog
box does not permit you to interact with or switch to any other window in
your application until you are finished using the dialog box. In fact, when
you invoke a modal dialog box, the dialog box manager goes into its own
message loop and dispatches only those messages meant for the dialog box or
one of its controls. Usually a user gets out of a dialog box by clicking on
an OK or Cancel push button or pressing Esc or Enter.

Modeless dialog boxes allow you to switch the focus from them to the rest of
the application. You switch the focus by clicking the mouse on another
window. The Windows PIF Editor serves as a good example. In the PIF Editor,
you can activate the pull-down menu while the focus is set to one of the
modeless dialog box controls. Since the methods for loading and using
modeless and modal dialog boxes are quite different, both will be discussed.

Defining a Dialog Box in a Resource File

Defining a dialog box and its controls by hand in a resource file is
something that an experienced Windows programmer avoids, because it's much
simpler and easier to use the Windows Dialog Editor (see Figure 6) supplied
in the Microsoft Windows Software Development Kit (SDK). Dialog boxes and
control windows can have many different options and styles. The Dialog
Editor allows you to draw and edit a dialog box interactively and generate
the necessary resource file definition.

Figure 7 shows the syntax for a sample dialog box definition. The first line
specifies the name, load options, memory options, and coordinates of the
dialog box. The default load and memory options are LOADONCALL
and MOVEABLE. A LOADONCALL resource is not loaded into memory until the
application needs it. This is one of the primary advantages of resource
files.

The coordinates specified in dialog box definitions work in a special way.
Because Windows applications should be as device-independent as possible,
your dialog boxes should look the same no matter what sort of video display
adapter is used. If a dialog box is meant to encompass the entire display,
it should do so whether the video adapter is at 640 x 350 or 1024 x 768
resolution. To ensure this, the dialog box coordinate system is based upon
the dialog base unit. This is a unit of measurement that is calculated based
on the current system font. In a dialog box definition, the x coordinate and
the width are measured in 1/8 of a dialog base unit. The y coordinate and
the height are 1/4 of a dialog base unit. To determine the exact number of
pixels in the horizontal and vertical dialog base units, use the new Windows
3.0 function GetDialogBaseUnits.

After you define the name, load options, memory options, and coordinates of
the dialog box, you can define other dialog box options. The STYLE statement
can be used to give the dialog box certain style attributes, the same kind
that are used in the CreateWindow function. Four styles are specific to
dialog boxes. These styles are DS_LOCALEDIT, DS_MODALFRAME,
DS_NOIDLEMSG, and DS_SYSMODAL. The DS_SYSMODAL style creates a system
modal dialog box, in which all windows in the system are disabled until you
exit the dialog box. This style of dialog box could be used, for example, to
signal a fatal error that would affect the performance of the Windows
session.

You can give the dialog box a title with the CAPTION statement. Other
options are the MENU statement, the CLASS statement, and the FONT statement.
The FONT statement, new to Windows 3.0, allows you to specify the type style
and point size of the text inside the dialog box.

Once this header information has been defined in the resource definition,
all you need to do is define a list of the control windows between the BEGIN
and END statements. However, the Windows SDK Dialog Editor does all of this
work for you, allowing you to assemble controls graphically, while it builds
the actual RC file of definitions.

The definition of the Add Tick dialog box (see Figure 18) for the stock
charting application is shown in Figure 7. This definition was generated by
the Dialog Editor. You can usually tell if a dialog box definition was
generated by the Dialog Editor because it generates the longer CONTROL-style
statements to define controls as opposed to the handwritten format.

Tab Stops and Groups

I previously stated that the dialog box manager handles keystrokes within a
dialog box, and that when Tab is pressed, the dialog box manager moves the
input focus to the next control. How does it know which control to move the
input focus to?

The WS_TABSTOP style bit must be set for every control window to which you
can move by pressing Tab or BackTab. This is especially important for
programmer-defined controls, since the dialog box manager has no other way
of knowing if a custom control is used for output only or can interact with
the user. (If a static control has the WS_TABSTOP style set, the dialog box
manager must search for the next nonstatic control after the static control
in order to set the input focus to a valid control.)

The dialog box manager also supports something called a control group. This
is a group of controls organized so that you can move among them by pressing
the arrow keys instead of Tab and BackTab. The most common example is a
group box that contains radio buttons. If the first radio button in the
group box has the WS_GROUP style and the first control defined outside of
the group also has the WS_GROUP style, you will be able to move among the
radio buttons by using the arrow keys. If you want to move to a control that
resides outside of the radio group, you must use Tab. In general, to create
a control group, give the first control in the group the WS_GROUP style and
give the first control defined outside of the group the WS_GROUP style too.

 If you want to find the window handle of the next item in a control group,
you can use the GetNextDlgGroupItem function. This function is useful to set
up custom keyboard handling in a dialog box. For example, if you have a
Windows application that offers customized keyboard mapping, the user might
define a key combination to be the same as the down arrow key (for instance,
Ctrl-X in WordStar). When the user presses Ctrl-X in a dialog box, you may
want to set the input focus to the next member in a control group. You can
use the GetNextDlgGroupItem function to get the window handle of the next
control in the group and set the focus to it. A similar function,
GetNextDlgTabItem, is used for controls with the WS_TABSTOP style.

Loading a Dialog Box

Now that the dialog box has been defined, compiled, and attached to the EXE
file, you want to load it into your application. Four functions allow you to
load or create a modal dialog box and have it processed by the dialog manager
of the functions, DialogBox and DialogBoxParam, load the dialog box from the
RES file that is attached to the EXE. The other functions, DialogBoxIndirect
and DialogBoxIndirectParam, create dialog boxes from a description stored in
a template in your application. Since this method is uncommon, I will not
discuss it.

The function used to load and invoke a dialog box is DialogBox.

FARPROC lpfn;
lpfn = MakeProcInstance((FARPROC) OpenDlg,
                        hThisInstance);
DialogBox(hThisInstance, "Open", hWnd, lpfn);
FreeProcInstance(lpfn);

The MakeProcInstance call takes the address of the programmer-defined dialog
box procedure and creates a small piece of code known as a thunk. A thunk
first binds the data specified by hThisInstance to the function pointed to
by OpenDlg, and then branches to that function. MakeProcInstance returns a
far address to the thunk. When finished with the dialog box invocation, free
the thunk by calling FreeProcInstance. (Thunks are a complex mechanism and
are described in greater detail in Programming Windows,  Microsoft Press,
1990)

The DialogBox function takes four arguments; the handle of the application's
instance (remember, this is a unique program identifier so that Windows can
distinguish multiple copies of the same application that are running
simultaneously); the name of the dialog box to load; the handle of the owner
window; and the pointer to the instance thunk. The value returned by
DialogBox is the value that the programmer-defined dialog box procedure
returns. (Actually, the return value is the value that is passed as the
second argument to the EndDialog function.)

Dialog Box Procedure

Every dialog box must have a programmer-defined dialog box procedure
associated with it. The dialog box procedure is similar to a standard
WinProc, but dialog box procedures and WinProcs differ slightly. First, a
dialog box procedure returns a Boolean value, TRUE or FALSE.
Unlike a standard WinProc, your dialog box procedure must return TRUE if
it processes a message and FALSE if it does not.

When you invoke a modal dialog box, the dialog box manager goes into its own
internal message loop. If it receives a message intended for the dialog box,
it passes the message to your dialog box procedure first. If the dialog box
procedure returns FALSE, the dialog box manager passes the message to its
own internal default dialog box procedure. If your dialog box procedure
returns TRUE, the dialog box manager does nothing further with the message
and reads the next message. Windows 3.0 allows the advanced programmer to
access the default dialog box procedure, DefDlgProc. Microsoft distributes
the source code to DefDlgProc with the Windows 3.0 SDK.

The dialog box procedure should be defined as follows:

BOOL FAR PASCAL MyDialogProc(hDlg, message,
                             wParam, lParam)
 HWND  hDlg;
 WORD  message;
 WORD  wParam;
 DWORD lParam;

This header looks exactly like a WinProc, except for the BOOL return value.
And, just like a WinProc, the dialog box procedure must be exported in your
application's DEF file.

 EXPORTS
    .
    .
    .
  MYDialogProc

If a dialog box does not seem to be behaving correctly, check that you have
exported the dialog box function. This is a common error among novice
Windows programmers (and experienced ones too).

Most simple dialog box procedures process only the WM_INITDIALOG and
WM_COMMAND messages. WM_INITDIALOG, similar to the WM_CREATE message, is
sent by the dialog box manager just before the dialog box is displayed for
the first time. This message gives the dialog box procedure the opportunity
to initialize the contents of the controls in the dialog box. The dialog box
procedure, for example, could fill in the contents of edit fields with
default values, fill list boxes with strings, and check certain radio
buttons and check boxes. If you do not want the dialog box manager to set
the initial focus to the first control with the WS_TABSTOP style
automatically, you can set the focus to another control at this point. If
you do change the focus, the dialog box procedure must return FALSE after
processing the WM_INITDIALOG message. If it returns TRUE, the dialog box
manager will set the focus automatically. (This message is the exception to
the rule stated earlier about the Boolean values returned by your dialog box
procedure.)

The lParam of the WM_INITDIALOG message was not used in previous versions of
Windows. Windows 3.0 allows you to pass the dialog box manager a long value
that the dialog box manager will in turn pass to your dialog box procedure
as the lParam value of the WM_INITDIALOG message. To do this, use the
DialogBoxParam function. This function is identical to DialogBox, except
that a fifth argument is added, the long value to pass in the WM_INITDIALOG
message.

Other than processing the WM_INITDIALOG message, your dialog box procedure
mainly handles the WM_COMMAND messages generated when the user manipulates a
control window. These WM_COMMAND messages usually come in two varieties: the
ones generated when you click on a button control, and the ones sent with
notification codes in the HIWORD of lParam.

When the user clicks the OK or Cancel button, it usually means the user
wants to dismiss the dialog box. A WM_COMMAND message is sent to the dialog
box procedure with wParam set to the control identifier of the push
button. The dialog box manager is informed that the user is through with the
dialog box by a call to EndDialog.

EndDialog takes two arguments, the handle of the dialog box, and a
word-length value. This value will be used as the return value from the call
to DialogBox.

switch (message)
{
    case WM_COMMAND :
    switch (wParam)
    {
        case IDOK :
                         EndDialog(hDlg, TRUE);
        break;
        case IDCANCEL :
                         EndDialog(hDlg, FALSE);
        break;


If the user pressed  OK, EndDialog is called to tell the dialog box manager
that the dialog box should be dismissed. The value TRUE will be returned by
the dialog box manager to the application. In the following statement the
value TRUE would be returned and assigned to the variable rc.

rc = DialogBox(hInstance, "AddTick", hWndMain,
               lpfnDialogProc);

Similarly, if the user clicked on the Cancel push button, the value False
would be returned to the application.

EndDialog does not dismiss the dialog box immediately. It sets a bit in a
private data structure that the dialog box manager allocates for each dialog
box. (It also copies the value of the second argument into this structure.)
When your dialog box procedure returns control to the dialog box manager,
the manager examines this bit, and if it is set, the manager breaks out of
its message loop.

Message Boxes

Windows programs commonly inform the user of a potential or existing error
condition. For instance, if the user attempts to exit a word processing
application without first saving the document, the application should bring
up a dialog box that contains a warning message and a choice of actions. The
dialog box should have a message such as "Save the document before exiting?"
as well as three push buttons labeled Yes, No, and Cancel.

It would be extremely tedious if the Windows programmer had to design dialog
boxes for each possible error or warning condition. Fortunately, you can
call a single function to display some text in a dialog box and attach one
or more predefined buttons to it. This kind of dialog box is called a
message box; not surprisingly, the function that creates and displays one is
called MessageBox.

The nice thing about using message boxes is that Windows itself contains the
dialog box procedure for all message boxes and handles all the WM_COMMAND
messages. You don't have to create your own dialog box procedure, export it,
and load the dialog box. All you have to do is process the return code from
MessageBox.

The syntax of the MessageBox function is shown below.

int MessageBox(HWND hWndParent, LPSTR lpText,
               LPSTR lpCaption, WORD wType)

The first parameter is the handle of the owner window. The second parameter
is the static text that will appear inside the message box. If it is too
long to fit on one line, Windows wraps the text to the next line and
increases the height of the message box accordingly. The third parameter is
an optional title that will appear in the caption of the message box. The
fourth parameter consists of bit flags that tell Windows what kinds of
buttons and icons you want put into the message box. If you want a push
button other than the predefined push buttons, you must define your own
dialog box to be used as a message box. Windows gives you Yes, No, Cancel,
Abort, Ignore, and Retry push buttons. It also allows you to place one of
several predefined system icons on the left side of the message box (see
Figure 8).

The value returned from MessageBox is the control identifier of the push
button the user selected. (If the user presses OK, the IDOK value is
returned; if the user presses No, the IDNO value is returned, and so on.)
The complete list of identifiers of these buttons can be found in WINDOWS.H
(see Figure 9).

A typical use of a message box is:

rc=MessageBox(hWndMain,
              "Do you want to exit the application?",
              "Exit",MB_YESNO | MB_ICONQUESTION);
     if (rc == IDYES)
             PostQuitMessage(0);

Modeless Dialog Boxes Revisited

Modeless dialog boxes can be thought of as a hybrid of normal overlapped
windows and modal dialog boxes. To create a modeless dialog box, use the
CreateDialog function. The syntax of CreateDialog is exactly the same as the
DialogBox function. However, when you create a modeless dialog box, the
CreateDialog function returns immediately with the handle of the dialog box;
Windows does not invoke the internal dialog box manager. A typical call to
create a modeless dialog box is shown below.

hDlgModeless=CreateDialog(hInstance,"MyModelessDlg",
                          hWndMain, lpfnProc);

Since a modeless dialog box is simply a standard overlapped window with
child windows, messages get sent to it as they do to any other window in
your application. All you need is your application's normal message loop:

while (GetMessage(&msg, 0, 0, 0))
{
 TranslateMessage(&msg);
 DispatchMessage(&msg);
}

But there is something missing. Suppose the input focus is set to one of the
controls in the modeless dialog box and you press Tab. Nothing happens,
because there is no dialog box manager that processes the keystrokes and
gives a special significance to the Tab key. Of course, you could put code
in your application to handle Tab, but it would be a lot easier to "call the
dialog box manager" temporarily.

Windows allows you to do this. The function

IsDialogMessage(hDlg, &msg)

tests to see if the message contained in the passed MSG structure is meant
for the dialog box whose handle is passed in the first argument. If so,
IsDialogMessage performs all of the necessary keystroke translations and
dispatches the message itself to the dialog box. It takes care of all of the
keystroke interpretations. It then returns TRUE if the message has been
processed, and FALSE if not. The standard message loop modified to include
the use of IsDialogMessage looks like this:

    while (GetMessage(&msg, 0, 0, 0))
    {
     if (!hDlgModeless ||
           !IsDialogMessage(hDlgModeless, &msg))
     {
      TranslateMessage(&msg);
      DispatchMessage(&msg);
     }
    }

After obtaining the message, the message is passed to IsDialogMessage. If it
returns TRUE, you know it processed the message fully and there is no reason
to call TranslateMessage and DispatchMessage.

The only other concern with modeless dialog boxes is that since the dialog
manager is not used with modeless dialog boxes, the EndDialog function
cannot be used to terminate dialog box processing and destroy the dialog
box. Instead, you must use the standard DestroyWindow call. You also have to
invalidate the dialog box handle so that the IsDialogMessage function won't
be called in your message loop.

DestroyWindow(hDlg);
hDlgModeless = 0;

Sample Application

At the end of the previous article in this series, the stock charting
application had a complete pull-down menu system and  MDI capabilities.
Every time you chose the File/New menu item, a new MDI child window was
created. Items on the Window pull-down menu automatically tiled and cascaded
the child windows, and arranged minimized windows nicely. But that was all
the application did; there was no code actually relating to stocks.

Now that you understand dialog boxes, an entry form will be implemented that
prompts the user for information about the stocks. You'll need to decide
what kind of information should be associated with each stock, and create a
data structure describing a stock object. The stock information will also
need to be stored for easy access. Since this application is not designed to
be a commercial application (and since this application is designed to teach
Windows programming, not data structures), ease of implementation and
comprehension will be favored over performance. When applicable, I will
discuss alternatives you can use to obtain more palatable results.

The modules to build the version of STOCK.EXE discussed here are shown in
Figure 10. A real-time stock charting system is not being created, so the
application will not continuously monitor a stock's performance as it is
traded throughout the business day. The only concern is the stock's closing
price and perhaps its volume. Other types of analyses might involve the
average price during the day or the high and low prices, but that is left as
an exercise to the reader.

You may also want to keep track of each date. Here's a structure to hold the
date:

typedef struct tagDate
{
 BYTE  chMonth;
 BYTE  chDay;
 BYTE  chYear;
} DATE;

Six bytes are used for each date; however, I could probably get away with
two bytes if I stored the date as an offset from January 1, 1900 and put it
in an unsigned int. Some analysis programs do not store the date along with
every tick; they are just concerned with a series of price and volume data.

To avoid the overhead of floating point arithmetic, you can store the price
as a four-byte value using the following formula.

price = (dollar amount) X (fraction denominator) + (fractional amount)

For instance, a price of 16 7/8 would be stored as (16 * 8) + 7 = 135.

Now you can define a structure that holds the daily trade information:

typedef DWORD  PRICE;
typedef DWORD  VOLUME;

typedef struct tagTick
{
 PRICE  price;
 VOLUME dwVolume;
 DATE   date;
} TICK, FAR *LPTICK;

You also need a data structure that describes the properties of a stock
graph (see Figure 11). A future article will delve further into the logic of
creating graphs. This data structure will be discussed more fully at that
time.

All this information must be transferable to and from disk, or the program
would be pretty useless. Besides the ticker information, you want to save
the name of the stock (an up-to-five letter symbol), a description of the
stock, the graphing parameters, and the number of ticks. You also want to
store a signature at the beginning of the file for data integrity to ensure
that the file read from disk really is one of the stock files (see Figure
12).

Finally, a structure is needed to keep track of all of the stock information
while the application is running. In addition to all of the information that
resides in the stock file, you need to store the filename of the stock file,
the handle of the MDI child window in which the stock information is
displayed, a handle to the memory buffer that holds the tick data, and some
state flags that record the current status of the stock. All the stocks are
linked together in a single-linked list; a handle to the next stock
information data structure is kept in each structure (see Figure 13).

Each stock is stored in its own separate file whose name is comprised of the
stock symbol and an STO extension. For a commercial application, you would
most likely use a Windows-compatible commercial database access library.

Using Dialog Boxes

To demonstrate dialog boxes, examine a dialog box in the stock-charting
application. When the user chooses the File Open menu item, a dialog box
should be displayed that lists the files with the STO extension found in the
current directory. The user should be allowed to change directories and disk
drives to search for other STO files. Almost all Windows applications have a
File Open dialog box. Unfortunately, Windows provides no standard File Open
dialog box, so each vendor implements his or her own in a slightly different
way. The stock-charting application makes use of some sample code that comes
with the Windows SDK for a typical File Open dialog box.

You must first define the dialog box in the resource file. The resource
definition is shown in Figure 14.

The dialog box's name is Open; it has a caption and a system menu (see
Figure 15). An edit field lets the user input a filename or specification
other than the default *.STO. The edit field also tracks the current
selection in the file list box, which contains the names of all the files in
the current directory matching the file specification. It also contains a
list of subdirectories in the current directory, and a list of all disk
drives on the system. Finally, there is an OK push button that the user can
click to open the file, and a CANCEL button that aborts the Open operation.
The OK push button is the default, so if the user presses Enter, a
WM_COMMAND message with IDOK in wParam is sent to the user-defined dialog
box procedure.

The WinProc of the main window in the application processes the WM_COMMAND
message, and when wParam is set to ID_OPEN, invokes the File Open dialog
box.

 case ID_OPEN :
lpfn = MakeProcInstance((FARPROC) OpenDlg,
                             hThisInstance);
DialogBox(hThisInstance, "Open", hWnd, lpfn);
FreeProcInstance(lpfn);
break;

You want the dialog box procedure to return a handle to the opened stock
file rather than a TRUE/FALSE value or a control window identifier. A file
handle returned by the Windows OpenFile function is a WORD value, so it can
be returned to the application by passing it as the second argument to
EndDialog.

Here is the heading of the dialog box procedure:

BOOL FAR PASCAL OpenDlg(hDlg, message,
                        wParam, lParam)
 HWND hDlg;
 unsigned message;
 WORD wParam;
 LONG lParam;
{
 WORD index;
 PSTR pTptr;
 HANDLE hFile;

 switch (message)
 {
   .
   .
   .

The only two messages that you need to process in the dialog box procedure
are the WM_INITDIALOG and the WM_COMMAND messages. First, look at the small
function called UpdateListBox below. This function forms a complete pathname
with a file specification at the end by concatenating two string variables,
one holding the current path and the other holding the current filespec. It
then calls a Windows function called DlgDirList.

DlgDirList takes five arguments: a handle to a dialog
box, the identifier of a file list box within that dialog box, the
identifier of a static text field also within that dialog box, a string
containing a path and file specification, and a value representing file
attributes. It then searches the path for all files matching the file
specification and the desired attributes. The name of each matching file is
placed into the list box, and the full pathname is placed into the static
text field. DlgDirList also places the subdirectory and drive names in the
list box automatically.

Finally, UpdateListBox sets the contents of the dialog box's edit field to
the default file specification by calling SetDlgItemText. This function
takes the identifier of a control window in a dialog box, determines the
window handle of the control, and sends a WM_SETTEXT message to it.

void UpdateListBox(hDlg)
 HWND hDlg;
 {
  strcpy(str, DefPath);
  strcat(str, DefSpec);
   DlgDirList(hDlg, str, IDC_LISTBOX, IDC_PATH, 0x4010);
  SetDlgItemText(hDlg, IDC_EDIT, DefSpec);
 }

Next the WM_INITDIALOG message is processed. A call to UpdateListBox fills
the list box with the names of the STO files and sets the contents of the
file specification edit control to *.STO. The EM_SETSEL message is then sent
to the edit control to highlight the entire field. If you want to send a
message to any control within a dialog box, and you only know the identifier
of the control, you can use SendDlgItemMessage. This is equivalent to the
following statement.

 SendMessage(GetDlgItem(hDlg, ID_CONTROL), msg,
             wParam, lParam);

You also set the initial focus to the edit control.

case WM_INITDIALOG:      /* message: initialize    */
 UpdateListBox(hDlg);
 SendDlgItemMessage(hDlg,/* dialog handle          */
   IDC_EDIT,               /* where to send message  */
   EM_SETSEL,            /* select characters      */
   NULL,               /* additional information */
   MAKELONG(0, 0x7fff)); /* entire contents        */
 SetFocus(GetDlgItem(hDlg, IDC_EDIT));
 return (FALSE);
        /* Indicates the focus is set to a control */

Now it's time to process the WM_COMMAND message. You want the edit control
to track the currently selected item in the list box. When the current
selection of a list box changes, the list box notifies the dialog box by
sending a WM_COMMAND message with the identifier of the list box in wParam
and the LBN_SELCHANGE notification code in the HIWORD of lParam (see Figure
16). An easy way to get the text of the currently selected item is to call
the built-in Windows function DlgDirSelect.

Why aren't LB_GETCURSEL and LB_GETTEXT messages sent to the list box? Other
than the fact that I have to write more code to do this, the DlgDirSelect
function removes the square brackets surrounding the name of a directory and
the square brackets and hyphens surrounding the names of disk drives in the
list box. It returns zero if the selected item was a filename and nonzero if
it was a directory name. In this case, if the currently selected item is a
filename, you fill the edit control with the name of that file, and if it is
a directory name, you refresh the list box.

Double-clicking a list box selection has the same result as single-clicking
a list box item and then clicking OK. When the LBN_DLBCLK notification code
for the list box is received, the program simply jumps to the code that is
responsible for opening the file (see Figure 17).

Finally, you must process the two push buttons in the dialog box. Remember,
when a button is pressed, a WM_COMMAND message is sent to the parent window
with wParam set to the control identifier of the button. If the user clicks
Cancel, you simply end the dialog box processing and return NULL for the
value of the file handle. If the user clicks OK, you have a lot more work to
do. First, examine the contents of the edit field and see if the filename
contains a wildcard. If it does, assume that the user wants to search for a
new filespec. You get the file specification, separate it into a pathname
and a filespec, and refill the file directory list box with files matching
the new spec. If the edit field is empty, put up a message box warning the
user and return control to the dialog box manager. If neither is the case,
you have a valid filename in the edit field: open the file and return the
file handle.

There you have it--your first dialog box. Once you code a few dialog boxes,
you will find yourself churning out dialog box code by rote.

Adding a Tick

After a day of trading activity, you need to input the closing price and the
total trading volume for each stock in the database. To do this, select the
Add Tick item from the Edit menu. The Add Tick dialog box is displayed
forthe current stock (see Figure 18); you can fill in the various fields to
append a single tick to the list of tickers for that stock. The Add Tick
dialog has three fields; the trading date, the volume, and the final price
(the final price must be an integer for now). At this intermediate stage of
the application, the date and the volume fields are basically ignored in the
code--only the final price is important. Also, at this time, a tick cannot
be inserted in the middle of the ticker list. This will be remedied in a
future version of the code.

Options Dialog Box

The characteristics of a stock and how its graph is displayed can be
controlled through the Options dialog box (see Figure 19). Actually, the
same dialog box is displayed when you add a new stock to the database and
when you change the properties of an existing stock. The only difference is
that in the latter case, the field that contains the name of the stock is
disabled; this is the only piece of information that cannot be altered in an
existing stock. The following lines of code disable the symbol control if we
are altering the characteristics of an existing stock.

if (lpStockInfo->hTicks != NULL)
    .
    .
    .
EnableWindow(GetDlgItem(hDlg, ID_SYMBOL), FALSE);

As mentioned above, at this stage of the program, some of the fields in this
dialog box are ignored by the code. The minimum and maximum prices define
the range of the y-axis of the stock graph. The scale factor is a number
that all of the numeric data is divided by before the number is plotted on
the graph. If the price range of a stock is from 100 to 300, a ticker price
can be 201 different values (assuming that each price is a whole number).
Instead of having the y-axis of the graph divided into 201 points, you can
have the y-axis represent 20 different points if you divide each price by a
scale factor of 10. The tick interval is the interval between two successive
tick marks on the y-axis. The price denominator field is ignored in this
release. It represents the denominator in the fractional part of the stock
price. (Most stocks are traded in either eighths or sixteenths.) The final
component of the Options dialog box is the owner-draw combo box that
contains the styles for the various pens that draw the horizontal and
vertical grids of the graph.

Trying It Out

The function StockFileRead reads a stock file into the application. You can
test this application using the stock file included with the application.
StockFileRead first allocates space for the stock header and then reads the
header. The number field of the header is examined to ensure that it is a
valid stock file. You allocate memory to hold all of the ticker information
and then read the tickers. Then, call GraphCreateWindow to create an MDI
child window for this stock. The handle of the MDI child is returned and
stored in the stock information structure. Likewise, the memory handle of
the stock information structure is stored in the "extra-bytes" area in the
window by using the SetWindowWord function. This makes it possible to
determine stock information associated with a given window very quickly.

When a stock window is displayed, some text about the stock is also
displayed. A future installment will discuss graphics in Windows. I will
then expand this application to show graphical information about each stock.

This article focused on dialog boxes, which are often the most important
objects in a Windows application. You saw how to define one in a resource
file, load it into an application, and create a user-defined dialog box
procedure to handle the messages. The next article finishes the discussion
of dialog boxes, and discusses some of  the graphical capabilities of
Windows.

1  As used herein, "Windows" refers to the Microsoft Windows graphical
environment. Windows refers only to this Microsoft product and is not
intended to refer to such products generally.

Figure 7. Definition of the Add Tick Dialog Box


ADDTICK DIALOG LOADONCALL MOVEABLE DISCARDABLE 112, 31, 106, 86
 CAPTION "Add a Tick"
 STYLE WS_BORDER | WS_CAPTION | WS_DLGFRAME | WS_POPUP
BEGIN
  CONTROL "Date:", -1, "static", SS_LEFT | WS_CHILD, 2, 7, 22, 8
  CONTROL "", ID_TICK_DATE, "edit", ES_LEFT | WS_BORDER | WS_TABSTOP |
  WS_CHILD, 53, 5, 48, 12
  CONTROL "Closing price:", -1, "static", SS_LEFT | WS_CHILD, 2, 26, 55, 11
  CONTROL "", ID_TICK_PRICE, "edit", ES_LEFT | WS_BORDER | WS_TABSTOP |
  WS_CHILD, 57, 25, 44, 12
  CONTROL "Volume:", -1, "static", SS_LEFT | WS_CHILD, 2, 44, 32, 8
  CONTROL "", ID_TICK_VOLUME, "edit", ES_LEFT | WS_BORDER | WS_TABSTOP |
  WS_CHILD, 38, 43, 63, 12
  CONTROL "OK",   1, "button", BS_DEFPUSHBUTTON | WS_TABSTOP | WS_CHILD, 9,
  66, 28, 14
  CONTROL "Cancel", 2, "button", BS_PUSHBUTTON | WS_TABSTOP | WS_CHILD,  63,
  66, 32, 14
END



Figure 11. Graph Data Structure


/*
 Data structure describing how we draw the graph
*/
typedef struct tagGraphInfo
{
 PRICE dwMinPrice;
 PRICE dwMaxPrice;
 DWORD dwScaleFactor;
 DWORD dwTickInterval;
 WORD iDenominator;  /* the fractional amount used for this stock */
 WORD iGridPen;
} GRAPHINFO, FAR *LPGRAPHINFO;



Figure 12. Tagging a Stock File


#define MAXSTOCKNAME    5
#define MAXDESCRIPTION    32
#define MAXFILENAME        13

typedef struct tagStockFile
{
 DWORD dwMagic;
#define MAGIC_COOKIE    66666666L
 char     szStock[MAXSTOCKNAME];
 char    szDescription[MAXDESCRIPTION];
 GRAPHINFO    graphinfo;
 WORD    nTicks;
/*
 TICK  aTicks[1];
*/
} STOCKFILE;



Figure 13. Structure to Track Stock Information


typedef struct tagInCoreStockInfo
{
 char   szFileName[MAXFILENAME];    /* file name where the stock data is
       kept */
 STOCKFILE StockFile;    /* a copy of the stock file header  */
 HANDLE  hTicks;
 HWND   hWnd;    /* window in which stock is shown   */
 DWORD   dwFlags;    /* any kind of status bits we need
       to keep */
#define STATE_HAS_VGRID 1L
#define STATE_HAS_HGRID 2L
 HANDLE  hNextStockInfo;    /* link to next stock info struct   */
} STOCKINFO, FAR *LPSTOCKINFO;



Figure 14. Open Dialog Box Definition


Open DIALOG 10, 10, 148, 112
 STYLE DS_MODALFRAME | WS_CAPTION | WS_SYSMENU
 CAPTION "Open "
BEGIN
 LTEXT "Open File &Name:",    IDC_FILENAME,    4,    4,  60,  10
 EDITTEXT    IDC_EDIT,    4,    16, 100, 12, ES_AUTOHSCROLL
 LTEXT "&Files in",    IDC_FILES,    4,    40, 32,  10
 LISTBOX,    IDC_LISTBOX,    4,    52, 70,  56, WS_TABSTOP
 LTEXT "",    IDC_PATH,    40,    40, 100, 10
 DEFPUSHBUTTON "&Open" ,    IDOK,    87,    60, 50,  14
 PUSHBUTTON "Cancel",    IDCANCEL,    87,    80, 50,  14
END



Figure 16. Processing the WM_COMMAND Message


case WM_COMMAND:
 switch (wParam)
 {

  case IDC_LISTBOX:
    switch (HIWORD(lParam))
    {
     case LBN_SELCHANGE:
      if (!DlgDirSelect(hDlg, str, IDC_LISTBOX))
      {
       SetDlgItemText(hDlg, IDC_EDIT, str);
       SendDlgItemMessage(hDlg,
                       IDC_EDIT,
                       EM_SETSEL,
                       NULL,
                       MAKELONG(0, 0x7fff));
      }
      else
      {
       strcat(str, DefSpec);
       DlgDirList(hDlg, str, IDC_LISTBOX, IDC_PATH, 0x4010);
      }
      break;

     case LBN_DBLCLK:
      goto openfile;
    }
    return TRUE;



Figure 17. Opening a File When OK Is Pressed




     case IDOK:
openfile:
      GetDlgItemText(hDlg, IDC_EDIT, OpenName, 128);
      if (strchr(OpenName, '*') || strchr(OpenName, '?'))
      {
       SeparateFile(hDlg, (LPSTR) str, (LPSTR) DefSpec,
                    (LPSTR) OpenName);
       if (str[0])
        strcpy(DefPath, str);
       ChangeDefExt(DefExt, DefSpec);
       UpdateListBox(hDlg);
       return TRUE;
      }
      if (!OpenName[0])
      {
       MessageBox(hDlg, "No filename specified.", NULL,
                  MB_OK | MB_ICONHAND);
       return TRUE;
      }

      AddExt(OpenName, DefExt);

      /* The routine to open the file would go here, and the */
      /* handle would be returned instead of NULL.      */
      StockFileRead((LPSTR) OpenName);

      EndDialog(hDlg, hFile);
      return (TRUE);

     case IDCANCEL:
      EndDialog(hDlg, NULL);
      return (TRUE);
     }
     break;

  }
  return FALSE;
}



Questions & Answers - Windows

Q:

I'm curious about what a window handle (hWnd) object really is physically.
Is it a global memory handle? A segment or selector? An array index?

Josh Trupin
Stamford, CT

A:
When you call CreateWindow or CreateWindowEx, you are calling functions in
the Windows USER.EXE dynamic-link library (DLL). These functions perform the
following call:

LocalAlloc(LMEM_FIXED | LMEM_ZEROINIT, 64)

and then a LocalLock, resulting in a NEAR pointer (PSTR) to 64 bytes inside
of USER's data segment (DGROUP). This pointer is returned as a window handle
(HWND) after USER fills out the 64 bytes that it refers to.

To fill out this 64-byte "window object," USER actually employs an internal
structure similar to the following.

 typedef struct  tagWND //       bytes
                        //       from
  {                     //length  end  GetWindow...
                        //------ ----- -------------

  WORD    Undocumented[22]; // 44  -64
  DWORD   ExStyle;          //  4  -20 GWL_EXSTYLE
  DWORD   Style;            //  4  -16 GWL_STYLE
  WORD    ID;               //  2  -12 GWW_ID
  WORD    hWndText;         //  2  -10 GWW_HWNDTEXT
  HWND    hWndParent;       //  2   -8 GWW_HWNDPARENT
  HANDLE  hInstance;        //  2   -6 GWW_HINSTANCE
  FARPROC WndProc;          //  4   -4 GWL_WNDPROC
  }  WND;                   // 64
 typedef WND NEAR *PWND;

The elegance in this design is that when you make USER calls (functions
whose first argument is usually an HWND), hWnd is cast inside of USER as a
PWND so that the above WND structure elements can be addressed directly;
that is, the following refers to the window's parent.

((PWND)hWnd)->hWndParent

Code that refers to the window structures is therefore
very efficient.

Some of the arguments in the CreateWindow or CreateWindowEx call are placed
directly in the structure; others are determined by USER.

((PWND)hWnd)->ExStyle    =dwExStyle;
((PWND)hWnd)->WndProc    =<WndProc from WNDCLASS of ClassName>;
((PWND)hWnd)->hWndText    =<another local pointer to WindowName> ;
((PWND)hWnd)->Style    =dwStyle;
((PWND)hWnd)->hWndParent    =hWndParent;
((PWND)hWnd)->ID    =hMenu; //if child window,=child ID
((PWND)hWnd)->hInstance    =hInstance;

If your window class has extra bytes requested (specified by cbWndExtra in
the WNDCLASS structure of the RegisterClass call), then additional bytes are
allocated at the end of the 64-byte WND structure in the LocalAlloc call. In
other words, the LocalAlloc call that USER performs is really as follows.

LocalAlloc(LMEM_FIXED | LMEM_ZEROINIT, 64 +
           <cbWndExtra from WNDCLASS of ClassName> )

This allows you to attach (with SetWindowWord and SetWindowLong)
window-specific information to the window in an object-oriented way in your
application.

From all of the above you can see how SetWindowWord, SetWindowLong,
GetWindowWord, and GetWindowLong work. When you make these calls, USER adds
64 bytes to the hWnd pointer and then adds the nIndex.

(PSTR)hWnd + sizeof(WND) + nIndex

The resulting local offset refers to the value you are setting or getting
with SetWindowWord and SetWindowLong and GetWindowWord and GetWindowLong.
This is how application-specific extra window information is referred to
with a base index of 0, and why the GWW_XXX and GWL_XXX indexes have
negative offsets.

There is little to no protection when using window handles, because no
protected-mode selectors are being used. It is very easy to corrupt USER's
DGROUP by using invalid window handles. A bad window handle could cause USER
to corrupt its DGROUP without a protection violation occurring. Also, it is
very easy to see how you could use another application's valid window
handles to modify its window structures.

Finally, you can see that window handles are reused. Since they are just
offsets to structures that are created and destroyed, it is possible that
another CreateWindow or CreateWindowEx call could return the same "handle"
of a previously destroyed window, if the LocalAlloc resulted in the same
physical offset inside USER's DGROUP.

Therefore, a window handle is really an offset into USER's DGROUP at which a
structure exists that defines a window. If you're still curious, you can
look at these structures using HeapWalker. Just perform Object LocalWalk and
Object Show operations on USER DATA and look for 68-byte memory objects.
They're shown by HeapWalker as 68 bytes because of the additional 4 bytes at
the beginning of every local memory object that KERNEL uses to manage local
heaps.

Q:
I've written an application that uses more than 100 child windows. The
windows are created when the application starts, but only some of them are
visible at the same time. I have two problems.

First, I can only run a few instances of my application. When Free System
Resources (as reported in the Program Manager's About box, for example) gets
close to 0% I get failures trying to create new windows. I have tons of
memory, so I don't understand why this is happening.

Second, it seems as if my application is very slow to initialize. I'm in the
dark on this, since I can't find any documentation on what would cause it to
be slow.

Michael J. Paschal
Waterbury, CT

A:
Windows maintains all windows inside the USER.EXE DLL. USER's data segment
(DGROUP), like all C medium-model DGROUPs, is limited to 64Kb in size. All
windows that are created consume space inside this DGROUP, as do menus,
title-bar names, and so on, so you are bumping up against the 64Kb
segment-size limit. The Free System Resources percentage reflects this
constraint. The amount of global memory you have is irrelevant; the DGROUP
can only grow to 64Kb.

If you want to be able to start many instances of your application, you will
have to change your window creation strategy. If you can get by creating
your windows only as needed (Program Manager does this for its icon and
application-name windows), you should operate that way. If you can destroy
windows when they are not displayed, you should do that (although Program
Manager doesn't). Hiding windows does not reduce their USER memory
requirements.

Your ability to do these things depends on your application. If you are
creating all your windows in advance because you need to be positive you
have them before you start, you are stuck with your current situation. If
you can deal with a possible lack of windows further into run time, change
your strategy.

Each window you create requires a minimum of 68 bytes inside USER's 64Kb
maximum DGROUP. In theory you could therefore have a maximum of about 960
windows. But that estimation ignores the amount of static memory required by
USER, any window text, any menus, and so on. I wrote a small program to test
the maximum number of windows I could create. It turned out that the maximum
number of really bare-bones windows I could create was around 700. Assuming
you would more likely have some trimmings (menus, title-bar text), a more
realistic estimate is 350.

Your application is slow to start up because of KERNEL.EXE's local heap
memory manager. Since local heaps start off being relatively small, KERNEL
has to expand them as more local memory is requested; this takes a small
amount of time. What is more time consuming is that LMEM_MOVEABLE objects
inside USER's DGROUP have to be moved higher so that the LMEM_FIXED window
structures can be created low. Your initialization is slow because KERNEL
has to move the entire upper part (where LMEM_MOVEABLE objects are kept) of
your USER DGROUP and adjust all the local handle table entries, doing this
more than 100 times at start-up in your case.

Q:
I am creating a few edit class windows in my application by using
CreateWindow. They are displayed in my main client area as children of my
main window. The problem I am having is that the text that gets put in or
created in these windows ends up being stored in my application's local
heap, and space there has gotten very tight. Is there any way that edit
class windows can be coerced into having their text stored in the global
heap?

B.D. Beykpour
San Francisco, CA

A:
In edit controls in dialog boxes created with calls such as DialogBox and
CreateDialog, edit control text is stored in the global heap by default. To
have this text stored in the local heap, you must specify the DS_LOCALEDIT
style.

For edit class windows outside a dialog box that are created with
CreateWindow, the reverse is true. By default, edit class window text is
stored in the application's local heap. To force it to be stored in the
global heap, use the following trick. When you call CreateWindow, replace
the hInstance argument with a global handle to a small block of zeroed
memory. Specifically, create the global memory object as follows.

auto  GLOBALHANDLE  aGhEditBuffer;

aGhEditBuffer=GlobalAlloc(GMEM_MOVEABLE | GMEM_ZEROINIT,
                         256L);

Then call CreateWindow with aGhEditBuffer as the hInstance argument. If you
specify some initial text with the lpWindowName argument, it appears as the
initial text in the edit window. The edit window operates as normal, but
using the global heap for the edit text. The global memory block grows
automatically as the text gets longer. When you destroy the edit window, the
global memory buffer is automatically freed in the same way a local memory
buffer is freed.

Q:
In WINDOWS.H a section labeled OEMRESOURCE appears to refer to the
user-interface bitmaps, but I can't find much documentation on them. What
are all these bitmaps and can I access them?

Alex Polozoff
Austin, TX

A:
Figure 1 identifies these bitmaps and shows which version of Windows they
were developed for. The resolution of each bitmap depends on the display
driver you have installed. In the Windows environment, Versions 1.x and 2.x,
these were monochrome bitmaps; in Windows1 3.0 many of them are full-color
format bitmaps, although only the colors black, white, and gray are actually
used. In some cases (the Close bitmaps, for example) the bitmap really
contains two or more equally-sized bitmaps arranged in rows; these
"sub-bitmaps" would have to be extracted if you wanted to use them.

The following code, which loads OBM_ZOOM, is an example of how to access
these bitmaps:

    auto    HDC        ahDc;
    auto    HBITMAP    ahBm;
    auto    BITMAP     aBm;

    ahDc = CreateCompatibleDC(0);
    ahBm = LoadBitmap(0, MAKEINTRESOURCE(OBM_ZOOM));
    GetObject(ahBm, sizeof(aBm), (LPSTR)&aBm);
    /* aBm now has the bmWidth and bmHeight for
       BitBlt'ing */
    ahBm = SelectObject(ahDc, ahBm);

    /* the OBM_ZOOM bitmap can now be BitBlt'ed
       here from ahDc using the bmWidth and bmHeight
       in aBm */

    ahBm = SelectObject(ahDc, ahBm);
    DeleteObject(ahBm);
    DeleteDC(ahDc);

Q:
I have a child window that has a title bar in my client area. The child
window looks similar to the PageMaker Toolbox window. The title bar is meant
simply to label the window, though; I do not want the user to be able to
move the child window by grabbing the title bar with the mouse. How do I
lock down a child window that has a title bar?

Frank Mena
San Jose, CA

A:
What you want to do is prevent Windows from processing the move system
command for the child. The following code fragment, which would be placed at
the end of the child's WndProc message switch, shows how to do this.

switch (awMsg)
     {
    .
    .
    .
     case WM_SYSCOMMAND:
          if ((awParam & 0xFFF0) == SC_MOVE)
              break;
     default:
         return DefWindowProc(ahWnd, awMsg, awParam,
                              alParam);
     }
 return 0L;

As you can see in this code, all system commands except SC_MOVE are
processed by DefWindowProc. By not

sending the WM_SYSCOMMAND/SC_MOVE message to DefWindowProc, you will prevent
the default processing of this message, which is for Windows to move the
child window. This technique can be used to disable any WM_SYSCOMMAND
subcommands.

Reader Feedback

Regarding the fourth question in the September Windows Q&A, MSJ (Vol. 5, No.
5), Dean White of Dallas, Texas, notes that the following

rem >%temp%\dosapp.sem

accomplishes the same end and is better than

echo %0 >%temp%\dosapp.sem

He's right. Not only is no disk sector space wasted with his method, it is
faster. A file entry with a length of zero is all that is created as a
semaphore in the temporary files subdirectory.

1  For ease of reading, "Windows" refers to the Microsoft Windows graphical
environment. "Windows" refers only to this Microsoft product and is not
intended to refer to such products generally.
child window. This technique can be used to disable any WM_SYSCOMMAND
subcommands.
```

{% endraw %}
