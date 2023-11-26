---
layout: page
title: "Microsoft Systems Journal (Vol. 1)"
permalink: /documents/books/mspl13/msj/msj1/
---

The following document is from the [Microsoft Programmer's Library 1.3](../../) CD-ROM.

{% raw %}

```none
Microsoft Systems Journal Volume 1

────────────────────────────────────────────────────────────────────────────

Vol. 1 No. 1 Table of Contents

────────────────────────────────────────────────────────────────────────────

Advanced Reuter Terminal Gives Traders Windows on Financial World

The Advanced Reuter Terminal (ART), a dedicated hardware and software system
that runs under Microsoft(R) Windows, enables currency traders to view and
analyze up-to-the-minute financial data. An exclusive interview reveals the
developing team's experiences.


DDE: A Public Protocol for Advanced Application Linkages

An extension of Microsoft Windows data exchange facilities, the Dynamic
Data Exchange (DDE) protocol allows developers to establish sophisticated
application linkages, ranging from automatic updating of documents to
processing of real-time data.


New Intel Graphics Coprocessor Makes Windows Sparkle

Intel has a new way to boost the display speed of Windows and other
graphics applications: the 82786, a high-powered coprocessor that
improves workstation performance, moving graphics functions from
software to high-speed hardware.


TI's Programmable Graphics Processor Perks Up PC Pixels

The first true graphics microprocessor, Texas Instruments' 32-bit TMS34010
executes at 6 MIPS, addresses up to 4 gigabytes of memory, supports displays
of up to 64K by 64K pixels, and includes high-speed pixel-processing
instructions.


Latest Dialog Editor Speeds Windows Application Development

An improved version of the Microsoft Windows Dialog Editor (supplied with
the software development kit) simplifies designing and testing a dialog
box──one of the key elements of a Windows application. Here's how to use it
and what to watch out for.


Ask Dr. Bob


EDITOR'S NOTE

This first issue of the Microsoft Systems Journal is devoted in its entirety
to Microsoft Windows operating environment, Microsoft's most important
system software product since MS-DOS(R).

Windows has encountered remarkable success both as a retail product and as
a development environment since its release last November. While much of
the product's initial popularity can be attributed to its flexibility as
a "switcher" for traditional applications and the included sample
applications, its ultimate success will depend on the acceptance of native
Widows applications.

Reuters' ART. As a definitive example of the capabilities of Microsoft
Windows and its flexibility to serve particular user interface designs,
we examine the Advanced Reuter Terminal (ART), the most sophisticated
Windows application to date. A superb example of design and coding
craftsmanship, the ART would be worth featuring even if it were not based
on Windows.

We also present profiles of two graphics processors that will have a
significant impact on future graphics systems: the Intel 82786 and the
Texas Instruments TMS34010. And we take a look at DDE, a new standard
for interprogram data exchange, as well as examine the improved Dialog
editor. In addition, Dr. Bob tackles some questions about Windows from
developers. In sum, we hope to present a developer's view of Microsoft
Windows.

Future Issues. In future issues we will focus on other areas of interest to
developers, including C programming, device drivers, extended and expanded
memory, debuggers, code portability, and the inside view of MS-DOS and
Microsoft XENIX(R). We will tackle the subjects that interest serious
developers most──from user interface design to guidelines for writing
ternimate-and-stay-resident programs. Our aim is to confront the real
issues confronting serious developers.

Write to Us. We invite you to write to us, to subscribe, and equally
important, to tell us what you think we should include in the Journal.
Beginning in January 1987, our issues will expand to full size, more than
twice the length of this special issue.

We hope the Journal will become one of the most important publications you
receive.──Ed.

JONATHAN D. LAZARUS
Editor

MICHAEL LONGACRE
Design

Copyright(C) 1986 Microsoft Corporation. All rights reserved; reproduction
in part or in whole without permission is prohibited.

Microsoft Systems Journal is published every other month by Microsoft
Corporation, 16011 NE 36th Way, Box 97017, Redmond, WA 98073-9717. Officers:
William H. Gates, III, Chairman of the Board and Chief Executive Officer;
Jon Shirley, President and Chief Operating Officer; Francis J. Gaudette,
Treasurer; William Neukom, Secretary.

Microsoft Corporation assumes no liability for any damages resulting from
the use of the information contained herein.

Microsoft, the Microsoft logo, MS-DOS, and XENIS are registered trademarks
of Microsoft Corporation. Intel is a registered trademark of Intel
Corporation. IBM is a registered trademark of International Business
Machines Corporation. Lotus is a registered trademark of Lotus
Development Corporation. Texas Instruments is a registered trademark of
Texas Instruments, Inc.

────────────────────────────────────────────────────────────────────────────

ART Showcases Microsoft Windows

MSJ Interview

One of the finest examples to date of software running under Microsoft
Windows is a product called the ART, the Advanced Reuter Terminal. When you
think of Reuters, you think of news, but to currency traders who buy and
sell millions of dollars each day, Reuters means finance. Its financial
information service is the lifeblood of their trade, providing the timely
and accurate information on which their success depends. The ART is a
complete hardware and software solution that supplies a high-resolution
color monitor and features multiple windows showing text and graphics
displays of up-to-the-minute financial information. It has the equivalent
display capacity of ten of the previous Reuter Monitor terminals, which
limited users to viewing information on a monochrome text display. What's
more, ART users can perform data analyses by choosing options from pull-down
menus.


ART's Configuration

ART hardware consists of an 80286-based (PC-AT compatible) NCR computer with
1.5 megabytes of RAM, a 20-megabyte hard disk, high-resolution (EGA)
display, 1200-baud modem, Reuters proprietary communications board, a
Reuters programmable keyboard, and, of course, a mouse.

But the heart of the system is the Windows-based software. Developed by the
Reuters office in London, it offers such capabilities as real-time graphics,
user-defined montage pages, limit and news watching, and graphics analysis.
Real-time graphics are made possible by calling up a graphics window and
linking it to a particular currency value displayed on the screen. Each time
the value of the currency changes, a new tick is added to the graph.

The ART provides automatic limit watching, using dialogs in which users
enter upper and lower limits for any currency displayed on a stored page.
When limits are broken, the ART gives audible and visible signals allowing a
dealer to react instantly. News watching works the same way; the ART
immediately alerts the user when the preselected word or phrase appears in a
headline. In sum, the ART system allows the user to determine the screen's
content and layout, an asset to active traders.

To find out about some of the background development of the ART, we spoke
with Paul Lucke, manager of the Reuters micro section in London, and asked
him some questions about developing a product under Microsoft Windows.

To find out about some of the background and development of the ART, we
spoke with Paul Lucke, manager of the Reuters micro section in London, and
asked him some questions about developing a product under Microsoft Windows
operating environment.


Why Windows?

MSJ: Why did you choose Microsoft Windows rather than some of the other
graphics environments such as GEM?

REUTERS: Clearly we wanted a bit-mapped graphics display because a major
component of the system is drawing graphs and performing analytical studies.
That cut out the non-bit-mapped graphics systems, which brings you down to
Windows and GEM.

We started out by buying a Laser (computer) as soon as they arrived on the
scene. At the time it looked as if that was the way user interfaces were
going. After we did some development work on the Laser, we saw the IBM PC
running Microsoft Windows and figured that this particular combination was
the way to go. We felt that Microsoft had the makings of a market leader, so
we took Windows on as an alpha test site and put up some experimental demos
using Reuters data. Our objective was to turn data into information, and we
believed that Microsoft Windows was the right vehicle for doing so.

Clearly, when GEM came out, we had to consider it as well, particularly
because an alpha release of any product has its fair share of bugs. But we
found GEM's method of window interfacing, at least at the time we reviewed
it, to be inferior to Microsoft's tiled windows concept.

Think of it as two kinds of desks: the untidy desk and the tidy desk. Tidy
is the way we wanted to go. When information changes, traders need to see it
as it happens. They can't afford to have it obscured underneath another
window. So any kind of obscuring device must be something temporary, like
pull-down menus, which disappear once you select an item.

Also, some of the simple things were better implemented in Windows──like the
accuracy of the pointing. We just found it easier to use than GEM.


Microsoft Support

MSJ: How did you find Microsoft's support?

REUTERS: We took care only to go to our contact at Microsoft when we were
dealing with a problem that was clearly a fault of the product. That way we
were able to encourage him to listen to us. And he offered good support on a
one-to-one basis.

Clearly, something like the DIAL system would have been useful, had it been
available. We have a North American operation that has a DIAL account, and
users report that it has recently improved considerably. One of the things
that's been particularly useful is watching the bulletin board as other
people's problems are discussed.

MSJ: You depend on having information updated instantly. Did you run into
any problems when you were working with your implementation?

REUTERS: We have to go through a lot of tricks to design the system in such
a way that the time-critical aspects of the application are catered to.
There must be an easier way.

What's also a major problem is 640K restrictions. It's imperative that we're
able to access lots of memory. For large data areas you can do something
with RAM disks, but we really need MS-DOS 5.0. It seems to be receding into
the far distance; every quarter it seems to slip a quarter. The whole point
of a windows environment is to have multiple simultaneous applications
running, and if memory limitations prevent loading more than two
applications, that's really bad news.

If Microsoft is going to keep faith with the developers of Windows
applications, it has to come out with MS-DOS 5.0──or at least a
mechanism for making large chunks of executable memory available.


Cautious Interest

MSJ: You mentioned that in the course of developing your product you had to
come up with some tricks to perform cerain tasks. Do you ever share this
information with other developers? Would, for instance, a user group benefit
from your experiences, or would you rather keep that kind of information to
yourself?

REUTERS: I'd characterize our attitude as "cautious interest." You must
understand that the major users of Microsoft Windows in the U.K. are either
our customers or competitors. And so, while we will certainly chat about our
experiences and exchange information on bugs and so on, we would not be
quite as forthcoming as perhaps a company that was trying to advertise
itself.

MSJ: The keyboard used with ART is quite different from the normal PC-style
keyboard. Tell us something about it.

REUTERS: The keyboard uses an 80186, which gives it more processing power
than a PC. It is completely programmable, which we need since we have many
different installations, which drive different kinds of terminal keyboards.
The keyboard we use lets us emulate any of these.

MSJ: What is the function of your proprietary communications board?

REUTERS: The board has its own processor and handles the communications
link, which is a multi-drop line protocol. The board also de-couples
communications processing from Windows processing and does page-caching.
Information pages are put into cache memory so that dealers will get a
quicker response when changing pages.

MSJ: Are you looking at any of the new graphics chips like the Intel 82786
and TI34010 to enhance the system?

REUTERS: Yes. We've developed a super-high-resolution graphics board that
uses the Intel chip, and we are waiting for Intel to release the final
version. We were also impressed with the TI chip, and we're looking at it
seriously. We'll use the one that's up and running at board production
time.

MSJ: Your windows work a little differently from the typical Microsoft
windows. Why did you choose to have a common menu bar?

REUTERS: We eliminated the menus because we didn't want to waste any
precious screen space, and found that it simplified usage.


Mouse-o-phobia?

MSJ: What has been the reaction of dealers to the mouse?

REUTERS: We've had a positive response at demonstrations we've given. No one
who has used it has ever let it go. We have found, however, that some people
take time to adjust to pointing with it──as long as two to three hours.

MSJ: Now that you've had considerable experience with it, what is your
overall impression of the Microsoft Windows environment?

REUTERS: Windows is an extremely powerful set of tools. We could not have
brought to market a product of the quality of the ART in such a relatively
short time frame without it. The learning curve is reasonably short, too. An
experienced C programmer will take only a matter of days to get a simple
application running. And in perhaps four to five weeks he'll become fully
productive, partly as a result of support within the team.

A large number of people on the team now know how to use Microsoft Windows.
Also, the examples of working systems make the learning curve easier. From
that point of view, I'm convinced Windows is the right choice for Reuters.
As an environment for running third-party applications, Windows might not be
the ideal choice, but we're using it for specialized applications within the
financial marketplace.

The thing that makes it so useful is its ability to adapt quickly to
different high-resolution screens. For example, we pulled in a Wyse PC with
a 1280 by 786 monochrome screen. In a couple of hours we got the whole
system running in a totally different resolution, different character sets,
different fonts and looking nice. If you've got a Windows driver for your
display, you can port your application onto it and make use of the
facilities provided by that display. It's that flexible.

MSJ: Is there anything else?

REUTERS: One of the most imaginative ideas I've seen yet is that Microsoft
has been advertising in a specialist magazine, called DOT.EXE. It's targeted
at ISVs and offers, for four hundred pounds, a one-day course in Microsoft
Windows, which includes an ISV tool kit and a Microsoft Mouse. We'll
probably be plugging our new people into it.

The credit for developing ART should go to a team of high-powered
programmers led by Chris Oswald. They are the ones who deserve the credit
for doing an incredible job.

────────────────────────────────────────────────────────────────────────────

Dynamic Data Exchange Enhances Application Connectivity

Harvey Berger

One of the most valuable benefits of Microsoft Windows is that enables you
to use a number of application programs in combination to solve a problem.
With Windows you can transfer text, numbers, or pictures from one
application to another. A classic example is the ability of Windows to take
a table or a graph from a spreadsheet program and insert it into a word
processing document.

The Windows Clipboard is what serves as the intermediate repository for such
information exchanges among applications. At your direction, information is
placed on the Clipboard by a CUT or COPY operation in one application and
then inserted into the context of a second application with a PASTE
operation.

On the surface the process seems straightforward──a selection, a CUT or
COPY, and then a PASTE──and manual. But behind the scenes the two
applications and Windows combine to effect the actual transfer. The donating
application takes control of the Clipboard and places the selected
information on it in one or a series of formats. The receiving application
then selects a format and requests the data from the Clipboard.

In many cases, to save memory and reduce processing overhead, the donating
applications may defer actually rendering the selected data until another
applications requests it.


A Step Forward

The Clipboard's facilities are quite flexible, but they require manual
intervention for each transfer, and the Clipboard can hold only one "item"
at a time. In a multitasking environment like Windows, the need rapidly
develops for more sophisticated data exchange facilities. Windows Dynamic
Data Exchange (DDE) is intended to facilitate implementation of more complex
information transfers than are possible with a single or even multiple
clipboards.

DDE is a formal, public protocol for data exchange built on Windows
messaging, and the shared memory facility. DDE is much more an agreement
among cooperating applications than it is a particular body of code or
executable routine. It's a special usage of Windows messages.

Windows applications routinely receive messages corresponding to user- and
system-initiated actions ranging from keystrokes to request to repaint the
screen. DDE uses a set of formerly reserved message numbers to implement the
protocol. In the Windows environment any application may send a message to
any other application, without explicit knowledge of the nature of the other
application.

DDE is designed to facilitate implementation of a wide variety of data
exchanges, ranging from simple one-time transfers of selected data to
automatic parallel transfers of real-time data. Since many DDE relationships
are likely to be more complicated than those of the Clipboard, DDE is
described in terms of a server and client applications rather than in terms
of a donor and a receiver, where a single server may be supplying data to
many clients and a single client application may be communicating with many
servers simultaneously.


Data Formats

DDE and the Clipboard share a number of common facilities, most notably an
extensible set of data exchange formats. Initially Microsoft Windows
recognized a limited set of public formats for data exchange (TEXT, BIT MAP,
META-FILE, SYLK, DIF, and so forth) and custom formats. Concurrent with the
announcement of DDE, Microsoft has announced five additional clipboard data
formats (Rich Text, Table, Sub-Table, WKS, and DBF).

Windows also allows cooperating applications to register custom formats for
private usage. The new formats allow the economical transfer of data with
its formatting information.


Object Orientation

A key distinction between Clipboard and DDE exchanges is DDE's object
orientation. The Clipboard is used to transfer a user selection from one
application to another. Each Clipboard transfer is independent; the sequence
of transfers corresponds to the sequence of user operations. With DDE each
transfer consists of an item associated with a "name."


Names and Topics

When requesting or supplying data, the names are provided to allow the
communicating task to identify the source or disposition of the data item.
Names describe either the location or the contents of a data item. In a
spreadsheet, each cell has an address (for example, R2C3 for the cell in the
second row and third column). Some spreadsheets also have named cell ranges
(R1:4C5, for example, might be named TOTALS). In either case, a natural
relationship exists between names and data items. With other kinds of
applications, like word processors, names are likely be to more positionally
oriented. The DDE protocol requires a name or a positional reference for
each item to be transferred.

By definition, each name, as recognized by the server, refers uniquely to a
specific data item. The choice of names and topics are the private concern
of a server and its clients. Some servers will associate names relevant to a
given subject with a topic. Client applications typically ask potential
servers if they recognize (and can supply data about) the topic. Where the
server's names are in themselves very complete descriptions of data items, a
sample name may be used as the topic. Servers that define topics should be
worded carefully to avoid accidental duplication.


Applications

In the first example the Clipboard is used to paste a chart into a word
processing document. With DDE it is possible to construct more complex
scenarios. In addition to saving the pasted chart, the word processor might
store the name of the chart, the file name worksheet it was associated with,
and the file name of the application program. Given that information, the
word processor could ensure that it had the latest version of the chart.

First the word processor could, after verifying existence of the worksheet
file, start executing the spreadsheet application, specifying the worksheet
file name and a DDE startup parameter. Then, using DDE, the word processor
could request retransfer of the graph. The exact procedures to be used are
left up to the developers of the respective applications. Microsoft will
most likely issue guidelines soon for future application development.


Chain Reaction

A scenario in which the chart is the result of calculations in a spreadsheet
is also reasonable to envision. When printing the document, the word
processor might request the chart from the graphics application, which in
turn might extract the applicable data from the spreadsheet. The integration
becomes involved, but the burden moves from the user repeating manual steps
(which he might forget) to the PC using DDE.


DDE Sequences

A sequence of DDE exchanges between a client and a server are referred to as
sessions.(Figures 2, 3, 4, 5, 7, 8, and 9 show portions of sample
client and server applications.) A session typically begins with an INQUIRE
message. A client application sends a WM_DDE_ INQUIRE to every other active
application (potential server) in the system. The INQUIRE message includes a
topic or a sample name. If an active server is willing to exchange data
related to the topic, it in turn responds with a WM_DDE_ ACK message.

After establishing a session, the client and the server exchange messages
according to the operating rules of the server. Servers may have
implementation restrictions on the number of clients or the types of
transfers it will honor. DDE provides eight message types that establish
transfer protocols.

The terms client and server are largely semantic, since either application
can send (or receive) any message type. In practice, a given application may
be functioning as a server to one application and as a client to the same or
another application.

A simple example of a DDE transfer would consist of the following sequence:

  1.  Application One broadcasts an INQUIRE message to those windows in
      search of a server that will discuss CHEMICAL FORMULAS.

  2.  APP2, with a database of chemical formulas, responds to APP1 with an
      ACK (acknowledgement) message.

  3.  APP1 then sends a REQUEST message specifying WATER as the desired item
      name.

  4.  APP2 responds with a text string UPDATE message pointing to WATER=H2O.

  5.  APP1 then sends a REQUEST message for SALT.

  6.  APP2 responds with an UPDATE message specifying SALT=NaCl.


Real-Time Data

DDE was developed in response to the users' need for the coupling of data
from separate applications. The stock market is another classic example of
the need for DDE. During trading hours there's a constant flow of data as
each transaction is processed by the exchanges. Market watchers need to
filter the data stream and isolate the transactions of interest to them. The
selected data is then analyzed to determine the required action. One of the
first demonstrations of DDE modeled this process.

A SignalTM receiver (supplied by Lotus Information Network Corporation)
offered a continuous feed of stock prices (for up to 600 selected stocks).
Normally the Signal receiver (connected to a serial port) supplies data to
special Lotus(R) software. For this demonstration Windows Terminal was
modified to detect price changes and respond to DDE messages. A simple bar-
charting program was then written to receive the DDE UPDATE messages.

Interestingly the SIGNAL monitor program was written in New York City by
consultant Louis Cutrona, and the Charting program was written by Mark
Taylor of Microsoft. When brought together, the two programs were able to
communicate through DDE after being developed 3,000 miles apart.


ADVISE-DATA

In the first example above, the transfers are relatively simple. For each
REQUEST message there's a corresponding UPDATE. The ADVISE message allows
for more complex transfers. In the following example it accommodates the
automatic transfer of real-time data as it changes.

  1.  APP3 broadcasts an INQUIRE message to those windows, looking for a
      server with NY STOCK PRICES.

  2.  The Signal Monitor Application Four (APP4) responds with an ACK.

  3.  APP3 sends APP4 an ADVISE message that specifies IBM.(R)

  4.  APP4 responds with an ACK indicating that it recognizes IBM and can
      supply data about it.

  6.  APP4 then sends the current price data for IBM.

  7.  Steps 3 to 5 are repeated for each stock of interest.

  8.  Each time APP4 learns of a new price for stock about which it has
      received an ADVISE, it sends an UPDATE message with the new price.


Atom Management

To speed processing and simplify the development of DDE Servers, DDE
applications exchange "atoms" rather than strings. A central atom manager
allows all applications in the system to register strings in exchange for a
16-bit atom. The atom manager (a shared executable library) will also
translate the atom to its corresponding string. A single atom pool is
maintained for all DDE applications in the system.

In anticipation of sophisticated client/server relationships, DDE offers
optional specification of the Clipboard format for data exchange,
acknowledgement of messages, and shared memory controls. Private
client/server priority schemes are also accommodated.

Developers interested in the details of DDE, the central atom manager, or
the new Clipboard formats can download the specifications documents and
sample programs from either DIAL or GENIE.

On the basis of early response to the DDE design specification, a
significant number of the new Microsoft Windows applications now being
developed will incorporate DDE provisions. The nature of the implementation
depends on the type of application and its particular features.


Macros

Many applications, including spreadsheets, databases, and charting programs,
include user-definable macros or other programming capabilities. The DDE
design anticipates the combination of these applications based entirely on
user programming. If the application implements a substantive part of DDE
capabilities, the user can supply the topics and item names, constructing
data relationships not contemplated by the application developer.
Generalized applications can thus be combined into tightly coupled
customized applications suites.

This process is not as complex as it might sound. In the bar chart example
described above, the user can specify, via a dialog box, the particular
stocks to be tracked. In a more generalized implementation, the user might
also have been allowed to specify the topic, directing the DDE message to a
different server. If, hypothetically, another server existed in the PC, it
could supply the data to be plotted. Thus one instance of the bar chart
program might display stock market data, while another instance displays
temperature, pulse, and blood pressure from a server connected to
appropriate sensors.

This example may be far-fetched in the choice of data to be displayed side
by side, but it's reasonable to imagine the development of common analytical
software that can be applied to disparate tasks. Microsoft Windows and DDE
expand the potential market for analytical software by providing a protocol
that is truly application independent.


Outside Influence


So far this discussion has been limited to communications among
applications running on the same PC. The principles of DDE are, however,
applicable to transfers of data across machines, even computers of different
types.

The DDE protocol assumes that (if possible) a request for data exchange will
be satisfied by "broadcasting" a request to all other tasks in the PC and
that one of those contacted will supply the desired data. If the data
desired is not available locally, DDE provides for the use of "agents."

An agent is an application that serves as the importer/exporter of data.
When an agent application receives an INQUIRE request for data about a
given topic, it determines whether it can satisfy the request by in turn
sending the message to its "correspondents" in other machines, which may be
able to satisfy the request.

A given agent might use a local area network, micro-mainframe link, or
other communications facility to reach its correspondents. The correspondent
agent may then issue a DDE INQUIRE (if it is located in a PC) to locate the
ultimate server. The exchange of data then proceeds without either the
client or the server being aware of the agents.


Access Control

While DDE does not explicitly provide for access control or data security, a
server application has a number of alternatives at its disposal to validate
the authority of a given client before exchanging data with it. The server
could require a password or other access parameter to be sent along with the
plete communication faciT message back to the client for the password, or
using the window handle provided, access a lot of information (from Windows)
about the client.

The DDE protocol is a framework on which software developers can construct
private or public exchange mechanisms. When exchanging data with private
(well-known) clients, servers can supplement DDE with message priority, data
queueing, and private message protocols. In addition to Microsoft Windows'
built-in facilities for inter-application communication, very complete
communication facilities designs can be implemented.


The Future

The fact that Microsoft Windows is independent of any physical device
permits applications to take full advantage of the capabilities of a wide
variety of current and future displays, printers, and pointing devices.
Application developers are freed from having to be concerned in their
programs with the peculiarities of particular devices. DDE extends the same
concept to data exchange. If an application honors DDE requests, it's then
able to communicate with all other applications that do so, without having
to consider their peculiarities.

DDE is an important step forward in inter-application communication, since
it provides a public protocol that applications can subscribe to rather
than requiring each application developer to have to consider all the
possible applications that users might want to exchange data with. The user
can then combine programs and achieve results that no single application can
offer.


Figure 1:  DDE Messages

╓┌─────────────────┌───────────────────┌──────────────────┌──────────────────╖
DDE Messages      Purpose             Argument 1         Argument 2

WM_DDE_INITIATE   Ask if a window     Atom ─► Topic
                  will exchange
                  items related
                  to a topic
WM_DDE_TERMINATE  End the exchange    Atom ─► Topic
                  of items related
                  to the topic
WM_DDE_ACK        Response to a       Atom               Acknowledgement
                  DDE message                            code
WM_DDE_REQUEST    Request a given     Atom ─► Item name  Desired data
                  item                                   format
WM_DDE_DATA       Contains a          Atom ─► Item name  Handle to
                  requested data                         data object
                  item
WM_DDE_ADVISE     Request a given     Atom ─► Item name  Desired data
                  item and automatic                     format
                  updating
DDE Messages      Purpose             Argument 1         Argument 2
                  updating
WM_DDE_UNADVISE   Request end of      Atom ─► Item name  Desired data
                  automatic updating                     format
                  for a given time
WM_DDE_POKE       Contains an         Atom ─► Item name  Handle to
                  unsolicited data                       data object
                  item
WM_DDE_EXECUTE    Request execution                      Handle to data
                  of indicated                           object containing
                  command                                command


Figure 2:  Client's Window Procedure

typedef struct {
    WORD wDDEMODE;
    WORD wFormat;
}  DDEADVISEBLOCK;
typedef struct {
    WORD wClientRelease;
    WORD wFormat;
    WORD hServerWnd;
    WORD ClipData;
}  UPDATEINFO;
ATOM aCompare;
BOOL bAccepted;

long FAR PASCAL SampleRcvrWndProc(hWnd, message, wParam, lParam)
     switch (message)
{
                                    ∙
                                    ∙
                                    ∙
      case WM_DDE_ACK:
          aCompare  = HIWORD(lParam);
          bAccepted = LOWORD(lParam);
               /* Is this acknowledgement of first inquire message? */
           if ((aCompare == aStockInfo) && bAccepted)
               hwndServer = wParam;
           else {
               /* is this the acknowledgement of an advise message? */
               for (i = 0; i<NUMSTOCKS; i++) {
                   if (aCompare == stockinfo[i].Atom) {
                        /* Record Server's response to Stock Symbol */
                                    ∙
                                    ∙
                                    ∙
                   }
               }
           }

           break;
        case WM_DDE_DATA:
           ProcessNewData(wParam, lParam);
           break;
        default:
           return((long)DefWindowProc(hWnd, message, wParam, lParam));
           break;
        }
        return(0L);
    }


Figure 3:  Client's Window Creation Procedure

SampleRcvrCreate(hwnd)
HWND hwnd;
{
HMENU hMenu;
DDEADVISEBLOCK far *lpmem;
int i;
         /* DDEAddAtom is part of the global atom manager
          * in the dynamically linked library -- DDE.EXE */
aStockInfo = DDEAddAtom((LPSTR)"NYSE.COM.STK");
         /* For the first message, broadcast it to everyone;
          * When we return from this call, hwndServer will be valid
          * if a server exists. NULL as loword of lParam means server
          * can be any application. */
SendMessage((HWND) -1, WM_DDE_INITIATE, hwnd, MAKELONG(NULL, aStockInfo));
DDEDeleteAtom(aStockInfo);
        /* If Server isn't available, return. hwndServer
         *         can't be null in a call to PostMessage */
if (hwndServer == NULL) return;
      /* Some Dummy Stocks for this example */
stockinfo[0].Atom = DDEAddAtom((LPSTR)"T");
stockinfo[1].Atom = DDEAddAtom((LPSTR)"GM");
stockinfo[2].Atom = DDEAddAtom((LPSTR)"IBM");
stockinfo[3].Atom = DDEAddAtom((LPSTR)"INDU");
                                    ∙
                                    ∙
                                    ∙
   for (i = 0; i< NUMSTOCKS; i++) {
       hmem[i] = GlobalAlloc(GHND, (DWORD)4);
       lpmem = (DDEADVISEBLOCK far *)GlobalLock(hmem[i]);
       lpmem->wDDEMODE = 0;    /* I'm not going to ACK his updates */
       lpmem->wFormat = CF_TEXT;
       GlobalUnlock(hmem[i]);
       PostMessage( (HWND) hwndServer, WM_DDE_ADVISE, hwnd,
          MAKELONG(hmem[i],stockinfo[i].Atom)  );
        }


Figure 4:  Client's Data Update Procedure

ProcessNewData(hwnd, lStuff)
HWND hwnd;
DWORD lStuff;
{
    ATOM     aData    = HIWORD(lStuff);
    HANDLE   hDDEData = LOWORD(lStuff);
    UPDATEINFO far *lpDataBlock;
    LPSTR lpData;
    HDC hdc;
    int i,c;
         /* Make sure we're getting info only from our server */
         /* Note: hwndServer is a  global variable */
    if (hwnd != hwndServer)
        return;
    lpDataBlock = (UPDATEINFO far *)GlobalLock(hDDEData);
    for (i = 0; i<NUMSTOCKS; i++) {
        if (aData == stockinfo[i].Atom) {
                                    ∙
                                    ∙
                                    ∙
             }
        }
        GlobalUnlock(hDDEData);
        GlobalFree(hDDEData);
    }


Figure 5:  Server's Window Procedure

/* Procedures which make up the window class. */

long FAR PASCAL TermWndProc(hwnd, message, wParam, lParam)
                                ∙
                                ∙
                                ∙
    switch (message)

        {
                                ∙
                                ∙
                                ∙
         case WM_DDE_INITIATE:
                dde_initiate( hwnd, wParam, lParam );
                break;
         case WM_DDE_ADVISE:
                dde_advise( hwnd, wParam, lParam );
                break;
         case WM_DDE_UNADVISE:
                dde_unadvise( hwnd, wParam, lParam );
                break;
         case WM_DDE_CLOSE:
                dde_cancel  ( hwnd, wParam, lParam );
                break;
         case WM_DDE_REQUEST:
                dde_request( hwnd, wParam, lParam );
                break;
         case WM_DDE_EXECUTE:
                dde_execute( hwnd, wParam, lParam );
                break;
                              ∙
                              ∙
                              ∙
        default:
            return(DefWindowProc(hwnd, message, wParam,lParam));
            break;
    }
    return(0L);
  }


Figure 6:  Foreign Intrigue

╔══════════════════════════════════════╗
║ ┌──────────┐             ┌─────────┐ ║
║ │          │             │         │ ║
║ │  APP  5  │►DDE REQUEST►│  LOCAL  │ ║
║ │          │             │         │ ║
║ │  CLIENT  │◄◄◄DDE ACK◄◄◄│  AGENT  │ ║
║ │          │             │         │ ║
║ └──────────┘             └─────────┘ ║
╚══════════════════════┌─►──►──►──►──►──►──►──►─┐
                          LOCAL AREA NETWORK   ▼
                       └─◄──◄──◄──◄──◄──◄──◄──◄─┘═══════════════════════╗
                                 ║  ┌─────────┐             ┌──────────┐║
                                 ║  │         │             │          │║
                                 ║  │ FOREIGN │►DDE REQUEST►│  APP  6  │║
                                 ║  │         │             │          │║
                                 ║  │  AGENT  │◄◄◄DDE ACK◄◄◄│  CLIENT  │║
                                 ║  │         │             │          │║
                                 ║  └─────────┘             └──────────┘║
                                 ╚══════════════════════════════════════╝


Figure 7:  Server's Initialization Procedure

typedef struct

{
        WORD    wHandshake;
        WORD    wFormat;
        HWND    hServerWnd;
        char    szData[ MAXDATACHARS ];
} DDEUPDATEBLOCK;

typedef struct

{
        WORD    DDEMode;
        WORD    wFormat;
} DDEADVISEBLOCK;

typedef struct

{
       int     cActive;                  /* Number of active clients */
       ATOM    aSymbol;                  /* Atom identifies symbol */
       char    szSymbol[ MAXSYMCHARS ];  /* Text of the symbol name */
       HWND    hwndClient[ MAXCLIENTS ]; /* Handles of active clients */
} HOTITEMS;

static  HOTITEMS        DDE[ MAXHOTITEMS ];
static  DDEUPDATEBLOCK  DDEUpdateBlock;
static  ATOM            aStockInfo;
                /* This atom means DDE_INITIATE is for us */
void     dde_init()
{
         /* Atoms for WM_DDE_INITIATE */
         aStockInfo = DDEAddAtom( (LPSTR) "NYSE.COM.STK" );
                                    ∙
                                    ∙
                                    ∙
{


Figure 8:  Server's INITIATE Response Procedure

void    dde_initiate( hwnd, hwndClient, lData )
    HWND    hwnd;
    WORD    hwndClient; /* Contains client's window handle */
    DWORD   lData;
    {
        ATOM    atom;
        atom = (ATOM) HIWORD( lData );
        if( atom == aStockInfo )  {
            if( IsWindow( (HWND) hwndClient ) )
                SendMessage( (HWND) hwndClient,WM_DDE_ACK,
                       hwnd, MAKELONG( TRUE, atom )  ): )
    }


Figure 9:  Server's Response to Advise Request

void    dde_initiate( hwnd, hwndClient, lData )
HWND    hwnd;
WORD    hwndClient; /* Contains client's window handle */
DWORD   lData;
{
     ATOM                    atom;
     BOOL                    b;
     GLOBALHANDLE            gh;
     DDEADVISEBLOCK FAR *    lpDDEAdviseBlock;
     int                     i, j, k;
     LPSTR                   lps;
     char *                  p;
     char                    sz[ 20 ];
     b = FALSE;
     atom = (ATOM) HIWORD( lData );
               /* Lookup Symbol in Table */
     if( SymbolIsAvailable( atom ) )  {
         gh = (HANDLE) LOWORD( lData );
         lpDDEAdviseBlock = (DDEADVISEBLOCK FAR *) GlobalLock( gh );

            if( lpDDEAdviseBlock->wFormat == CF_TEXT ) {
                for( i = 0; i < MAXHOTITEMS; i++ ) {
                    if( DDE[i].aSymbol == atom ) {
                        for( j = 0; j < MAXCLIENTS; j++ )  {
                           if(
                              DDE[i].hwndClient[j]==(HWND)hwndClient){
                                 b = TRUE; /* Already there */
                                 break;
                          }  }
                     if( !b )   /* if atom is there but client isn't */
                      {   for( j = 0; j < MAXCLIENTS;j++ )
                          {        /* Look for an empty slot */
                             if( DDE[i].hwndClient[j]==(HWND)NULL )
                               { DDE[i].hwndClient[j]= (HWND)hwndClient;
                                 DDE[i].cActive++;
                                 b = TRUE;
                                 break;
                  }   }   }  }
                  if( b ) break;
          }
          if( !b )        /* If atom is not already in the table */
          {  for( i = 0; i < MAXHOTITEMS; i++ )
             {  if( DDE[i].cActive <= 0 )
                {   DDE[i].aSymbol = atom;
                    DDEGetAtomName( atom, (LPSTR) DDE[i].szSymbol,
                                    MAXSYMCHARS - 1 );
                    DDE[i].szSymbol[MAXSYMCHARS - 1 ] = '\0';
                    DDE[i].hwndClient[ 0 ] =(HWND) hwndClient;
                    DDE[i].cActive = 1;
                    b = TRUE;
                    break;
          }  }  }
                GlobalUnlock( gh );
        }
         /* Acknowledge one way or the other */
        if( IsWindow( (HWND) hwndClient ) )
            SendMessage( (HWND) hwndClient,
                WM_DDE_ACK, hwnd, MAKELONG( b, atom ) );
        if( b )
        {
            /* Transmit latest data we received */
            if(  ( gh = GlobalAlloc( GMEM_MOVEABLE, (DWORD)
                    sizeof(DDEUPDATEBLOCK)))
                  && ( lps = (LPSTR) GlobalLock( gh ) ) )
                {   for( p = (char *) &DDEUpdateBlock, k = 0;
                         k < sizeof( DDEUPDATEBLOCK );
                         *lps++ = *p++, k++ );
                    GlobalUnlock( gh );
                    PostMessage( (HWND) hwndClient, WM_DDE_DATA, hwnd,
                         MAKELONG( gh, atom ) );
        }       }
           return;
   }

────────────────────────────────────────────────────────────────────────────

New Intel Graphics Coprocessor Makes Windows Sparkle

───────────────────────────────────────────────────────────────────────────
Also see related tables:
  82786 Features
  82786 Graphics Instruction
───────────────────────────────────────────────────────────────────────────

The new graphics coprocessor from Intel, the 82786, is expected to
substantially enhance the performance of Microsoft Windows and other
graphics applications on the IBM PC, XT, AT, and compatibles. The chip
performs near-instantaneous screen updates, draws graphic primitives such
as lines and circles at more than 2 million pixels per second, and creates
text at a rate of 25,000 characters per second. It also supports
multitasking and ultra-high-resolution displays.

The 82786 has four major components: a graphics processor, display
processor, bus interface unit, and dynamic RAM controller. These parts
of the chip communicate over a built-in asynchronous bus.

The graphics processor accepts commands from applications programs to draw
bit maps, which create objects in memory. The processor contains a set of
on-chip graphics commands that draw points, lines, rectangles, circles,
polygons, and other primitives, to relieve the host CPU of the task of
creating these figures from scratch. To display any of these figures on the
screen, the CPU sends a single 16-bit request to the 82786 graphics
coprocessor.

To handle specialized drawing functions, the 82786 includes commands such as
BitBLT (bit block transfer), ChaBLT (character-block transfer), Incremental
Point, and Fill. BitBLTs are performed upon request from the CPU at a rate
of 24 megabits per second. ChaBLTs occur at the rate of 25,000 characters
per second. The Incremental Point command is used to draw more complex
figures. An incremental point list describes the figure's shape, and, once
the CPU sends the list to the 82786, the graphics processor draws the shape
at a rate of 2 million pixels per second. The Fill command instructs the
graphics processor to fill in any shape with horizontal lines.

The coprocessor also has non-drawing instructions. For example, the Link
command executes an unconditional jump to another command, and Enter Macro
and Exit Macro are used to call and return, respectively, from a
subroutine.

The 82786 can receive a block of commands at one time from the CPU, and do
it while executing other commands.

Many of the graphics processor's functions are implemented in hardware
rather than software. These include clipping, mouse support, character-set
support, logical operations, and bit-plane masking.

The amount of display memory is the only limitation on the number of
character sets that the 82786 can support. Any one can be activated by a
single command. All character sets can have proportional spacing or kerning.

The next major functional block of the 82786 is the display processor. This
part of the 82786 is independent of the graphics processor. Microsoft
Windows would use the display processor to control display contents.

The display processor transfers multiple bit maps from memory to window
areas on the screen. It also provides a hardware cursor and colored borders
around the windows. An almost unlimited number of windows can be displayed
on the screen.

To create windows, the display processor divides the screen into strips and
tiles. A strip is one or more horizontal scan lines, and a tile is a section
of a strip. A collection of tiles forms a window.

Unlike the graphics and display processors, the bus-interface unit and
dynamic RAM controller are invisible to the CPU software. The bus interface
unit maintains the integrity of a display by arbitrating requests for
graphics memory. The dynamic RAM controller handles up to 4 megabytes of
graphics memory and screen rereshing.


82786 and Windows

What will the 82786 do for a product like Microsoft Windows? According to
Richard Bader of Intel, "The 82786 will make Windows so responsive that a
computer like the IBM PC will no longer stand in the way of what the user
wants to do. Operations that took seconds to execute previously will now
happen instantaneously. The 82786 enhances the intimacy between user and
machine, and thus enhances productivity."

Will Windows developers need to understand the intricacies of the 82876 in
order to achieve this high performance? Says Bader, "When an 82786 board-
level product comes to market, it will have a Windows driver, which would
then make the 82786 virtually transparent to the applications programmer──as
transparent as the Microsoft Graphics Device Interface allows. When an
applications programmer uses any graphics board, he needs to interrogate the
GDI interface to find out specific characteristics of the board such as the
resolution it supports and whether or not it supports color. The application
is then adapted to those physical characteristics. But for the most part
there is a great deal of transparency provided by GDI, and this will be
applicable to new 82786 graphics boards."


An Ideal Application

One application that stands to gain significantly from the appearance of
82786 boards is desktop publishing. Intel's Bader points out, "As Windows
evolves, we expect that it will be ideally suited for desktop publishing.
And since the 82786 is so well suited as a GDI device, we believe that the
82786 is also applicable to that market." Many of the desktop publishing
packages currently on the market take quite a long time to reformat
information on the screen. And displaying a variety of fonts on the screen
is time consuming and awkward. Continues Bader, "The speed of the 82786 will
change all that. Microsoft Windows in conjunction with the 82786 will give a
good performance."

The 82786 supports a wide range of monitors, which is also a plus for
desktop publishing. It easily supports systems that are 640 by 480 with 64
colors. Additionally, Bader points out, "We can also support large-format
screens, full-page displays, with a resolution in the order of 1200 by 800,
1400 by 1400, or 1000 by 800 with gray scales. What we've found in a number
of instances is that people are looking for that 17-inch high-resolution
monochrome monior. They're looking for extremely crisp, stable, high-
performance text displays, and that's exactly what the 82786 is capable of
providing."

Intel and Microsoft have entered a cooperative program to provide Microsoft
Windows software driver technology for systems designs using the Intel
82786.

───────────────────────────────────────────────────────────────────────────
82786 Features
───────────────────────────────────────────────────────────────────────────

  ■  High-performance graphics

  ■  Fast polygon and line drawing

  ■  High-speed character drawing

  ■  Advance DRAM controller for graphics memory up to 4 megabytes

  ■  Supports up to 200-MHz CRTs
     ──up to 640 by 480 by 8 bits (1K∙1K∙8) or
     1400 by 1400 by 1 bit (2K∙2K∙2)

  ■  Up to 1,024 simultaneous colors

  ■  Integral DRAM controller, shift registers, and DMA Channel

  ■  IBM PC Computer Graphics Adaptor compatbility

  ■  Hardware windows

  ■  Fast bit-block copies between system and bit-map memories

  ■  Integral video DRAM support──up to 1900 by 1900 by 8

  ■  Multitasking support

  ■  International character support

  ■  Provides support for rapid filling with patterns

  ■  88- pin grid array leadless chip carrier

  ■  Advanced CHMOS technology


───────────────────────────────────────────────────────────────────────────
Graphics Instructions
───────────────────────────────────────────────────────────────────────────

  64 Bit Block Transfer within bit-map
  AE Bit Block Transfer across bit-maps
  06 Define Texture: Opaque
  0A Define Character Set: Word
  64 Bit-Block Transfer Within Bit-Map
  AE Bit-lock Transfer Across Bit-Maps
  06 Define Texture: Opaque
  07 Define Texture: Transparent
  0A Define Character Set: Word
  0B Define Character Set: Byte
  1A Define Bit-Map
  3D Define Colors
  41 Define Logical Combination
  46 Define Clip Rectangle
  4D Define Inter character Space
  4E Define Character Orientation
  68 Draw Arc: Exclusion
  69 Draw Arc: Inclusion
  53 Draw Point
  B4 Draw Incremental Points
  BA Draw Series of Horizontal Lines
  54 Draw Line
  58 Draw Rectangle
  73 Draw Polygon
  74 Draw Polyline
  8E Draw Circle
  A6 Draw Character String: Opaque
  A7 Draw Character String: Transparent
  44 Enter Pick Mode
  45 Exit Pick Mode
  4F Move to Absolute Position
  52 Move to Relative Position

────────────────────────────────────────────────────────────────────────────

Programmable Graphics processor from TI Perks up PC Pixels

───────────────────────────────────────────────────────────────────────────
Also see the related TMS34010 tables:
  TMS34010 Features
  TMS34010 Graphics Instruction
───────────────────────────────────────────────────────────────────────────

Joe Desposito

Texas Instruments(R) has developed the first graphics microprocessor, the
TMS34010. This is a significant development in the world of graphics chips,
which to date has been populated with less powerful graphics coprocessors
and controllers. The TMS34010 is a 32-bit processor that executes 6-million
instructions per seconds (MIPS), addresses up to 4-gigabytes of memory, and i
a general-purpose instruction set.

The chip, which will enhance all graphics applications, is of particular
interest to developers using Microsoft Windows on the IBM PC and
compatibles, where up until now performance has been less than spectacular.
The TMS34010 will be contained in an add-on board that will handle all the
graphics processing, replacing the monohrome color graphics or enhanced
graphics display adaptor.


Inside the TMS34010

Like most microprocessors, the TMS34010 has an ALU, general registers, stack
pointer, program counter, instruction decoder, and control unit. However, it
also contains components that optimize the chip for graphics processing.

It has a far greater number of general registers contained in the
microprocessor than that found in general-purpose processors. Thirty 32-bit
registers are divided into an A file and a B file. This large number
prevents the shifting of bits between registers that often occurs with
graphics processing. It uses a barrel shifter for high-speed bit rotations
and can rotate a field of up to 32-bits in a single instruction cycle.

The microprocessor uses a four-segment instruction cache for loading
instructions from memory before they are executed. Each segment has eight
subsegments, each holding eight bytes of code. This 256-byte instruction
cache speeds up the execution of graphics algorithms by capturing loops of
instructions. Once a loop is captured, "fetch" memory cycles in the loop
halt. Loop execution is fast because the chip can access instruction cache,
internal register files, and external memory simultaneously instead of
sequentially.

The chip's input/output registers include interrupt registers, host
interface registers (for communicating with a host processor), video timing
registers (to drive a CRT), and local memory control registers.

To further increase speed, the TMS34010 employs some of the principles of
reduced-instruction-set computer (RISC) chips; for example, it executes most
of its instructions in a single 160-ns cycle.


Pixel Processing

In addition to approximately 100 general-purpose instructions, the TMS34010
uses special high-speed instructions called PixBLTs (pixel block transfers)
to handle character display and bit-mapped graphics. These instructions are
an extension of BitBLTs (bit-block transfers) found in some graphics
controllers. Transfers are made between source and destination arrays using
linear addressing or X-Y coordinates.

PixBLT instructions include Boolean and arithmetic operations, expansion of
a single bit to one of two colors, transparency detection, and plane-
masking. These types of instructions can also be combined to perform a much
larger set of operations.

The TMS34010 operates on single-bit pixels, which are usually associated
with monochrome graphics, by using its Boolean operations on source and
destination arrays. The common combining operations are Replace, OR, NOT-
AND, AND, and XOR.

For multiple-bit pixels, which are usually associated with color and gray-
scale graphics, the processor uses arithmetic operations such as Maximum,
Minimum, Add, Add with Saturate, Subtract, and Subtract with Saturate. The
Maximum and Minimum functions are used to create a sense of depth and to
smooth jagged lines, a technique called antialiasing. Add with Saturate and
Subtract with Saturate are useful for dedicating multiple color planes to
each of the three primary colors.

A PixBLT instruction can expand a bit to one of two colors by taking one bit
per pixel data from memory, expanding it to multiple-bit color data, and
placing it anywhere in the frame buffer. PixBLT instructions also handle
windowing, allowing the placement of windows of variable size and content
anywhere on the display, and clipping, which prevents drawing outside the
boundaries of a window.

The way the TMS34010 handles text generation is quite different from other
processors. First, a display list, which defines what is to be displayed,
appears. For normal block text, the list is simple; say, a list of ASCII
character codes. As text becomes more complex, requiring, for example,
proportional spacing and kerning, the display list becomes more complicated.
The TMS34010 general-purpose instructions typically break down the display
list, and then a PixBLT is used to move this image from off-screen memory
onto the screen.

Texas Instruments is supporting the TMS34010 with a line of software
development and support products, including low-level assembly language
tools, a C compiler with a run-time support package, a function library,
and support of the CGI (computer graphics interface) standard. Hardware
and software development systems are also available.


Building Applications

Since the TMS34010 is a microprocessor, a software developer has a great
deal of flexibility in determining what runs on the graphics processor and
what runs on the host processor. Since the chip will also support a number
of graphics standards such as CGI and Microsoft's GDI (graphics device
interface), many applications can be ported by using these standards.

One way that developers can tap the potential of the chip is to port a
graphics environment like Microsoft Windows to it at GDI levels. Thus any
software application running through Windows could be accelerated by a 32-
bit graphics processor.

However, many of the graphics cards being developed are relatively "soft"
cards, in that they are RAM based. In effect, the command set for the board
will be downloaded to it. As Kevin McDonough of Texas Instruments points
out, "This will give the cards tremendous flexibility and tremendous
performance advantages. For example, a program such as AutoCAD running under
Microsoft Windows will run much faster in the Windows environment. You can
probably gain another performance factor of 10 by doing specific algorithms
and downloading them to the graphics processor for specific applications."

According to McDonough, graphics boards incorporating the TMS34010 processor
are currently under development at Video 7, Number 9, and other vendors.

The distinguishing feature of the TMS34010 is that the processor is not
limited to a few algorithms. Rather, any algorithm, be it a line, ellipse,
circle, or whatever, can be programmed. And similarly, for text, the chip
can be programmed for any format.

Karl Guttag, also of Texas Instruments, points out that the chip is also
excellent at performing data compression algorithms. "You know that when you
draw images, they have to be stored on disk. And since the images take up a
lot of disk space, it makes sense to compress them. Data compression mostly
involves bit manipulation, which the TMS34010 excels at, so it turns out
that this chip is better than any general-purpose processor for doing image
compression."

Texas Instruments and Microsoft have entered a cooperative program to
provide Microsoft Windows software driver technology for systems designs
using the TMS34010.

With graphics boards that incorporate the TMS34010 processor now under
development, a new world of graphics will soon open up to personal computer
users.

───────────────────────────────────────────────────────────────────────────
TMS34010 Features
───────────────────────────────────────────────────────────────────────────

  ■  160-ns instruction cycle time

  ■  Fully programmable 32-bit general-purpose processor with 128-megabyte
     address range

  ■  Pixel processing, X-Y addressing, and window clip/pick built into the
     instruction set

  ■  Programmable 1,2,4,8, or 16-bit pixel size with 16 Boolean and 6
     arithmetic pixel processing options (Raster-Ops)

  ■  31 general purpose 32-bit registers

  ■  256-byte LRU on-chip instruction cache

  ■  Direct interfacing to both conventional DRAM and multiport video RAM

  ■  Dedicated 8/16-bit host processor interface and HOLD/HLDA interface

  ■  Programmable CRT control (HSYNC,VSYNC,BLANK)

  ■  High-level language support

  ■  Full line of hardware and software development tools including a C
     compiler

  ■  68-leaded packaging (PLCC)

  ■  5-volt CMOS technology Graphics Instruction


───────────────────────────────────────────────────────────────────────────
TMS34010 Graphics Instruction
───────────────────────────────────────────────────────────────────────────

ADDXY     RS,RD           Add Registers in XY Mode
CMPXY     RS,RD           Compare X and Y Halves of Registers
CPW       RS,RD           Compare Point to Window
CVXYL     RS,RD           Convert XY Address to Linear Address
DRAV      RS,RD           Draw and Advance
FILL      L               Fill Array with Processed Pixels: Linear
FILL      XY              Fill Array with Processed Pixels: XY
MOVX      RS,RD           Move X Half of Register
MOVY      RS,RD           Move Y Half of Register
PIXBLT    B,L             Pixel Block Transfer: Binary to Linear
PIXBLT    B,XY            Pixel Block Transfer: Binary to XY
PIXBLT    L,L             Pixel Block Transfer: Linear to Linear
PIXBLT    L,XY            Pixel Block Transfer: Linear to XY
PIXBLT    XY,L            Pixel Block Transfer: XY to Linear
PIXBLT    XY,XY           Pixel Block Transfer: XY to XY
PIXT      RS,*RD          Pixel Transfer: Register to Indirect
PIXT      RS,*RD.XY       Pixel Transfer: Register to Indirect XY
PIXT      *RS,RD          Pixel Transfer: Indirect to Register
PIXT      *RS,*RD         Pixel Transfer: Indirect to Register
PIXT      *RS.XY,RD       Pixel Transfer: Indirect XY to Register
PIXT      *RS.XY,*RD.XT   Pixel Transfer: Indirect XY to Indirect Y
SUBXY     RS,RD           Subtract Registers in XY Mode
LINE      Z               Line Draw

Key to abbreviations: S (source register), D (destination register),
R (register file select), K (constant), Z (draw option)

────────────────────────────────────────────────────────────────────────────

Developers' Aid: Dialog Editor

Charles Petzold

The Microsoft Windows dialog box is both one of the most important elements
of a Windows application and the most difficult element to design. Since
dialog boxes allow the user to select or enter information too complex for
an application's menu, they must be clearly and logically organized. Yet
the graphical image of the dialog box is normally derived from a template
in a Resource Script (.RC) file, where all the coordinates and sizes are
specified as numbers. For the programmer, editing the .RC file to get these
coordinates and sizes right (both in terms of clarity and aesthetics) is
mostly a matter of trial and error.


New Dialog Editor

The only help the original Microsoft Windows Software Development Kit
offered in designing dialog boxes was the barely adequate DLGEDIT.EXE. If
you've tried DLGEDIT and rejected it, don't overlook version 2 of the dialog
editor, now called DIALOG.EXE. It's a complete rewrite and a major
improvement. A beta test version of the new dialog editor is distributed at
Windows Development Seminars and can also be downloaded from the Microsoft
SIG on CompuServe.

Aside from it's practical value in helping you create attractive dialog
boxes for Windows applications, DIALOG is also an excellent tool to learn
about the various styles, controls, and options of dialog boxes. The only
problem is that it is distributed without documentation. But like most
Windows applications, some creative playtime unlocks most of it's
treasures.

DIALOG saves files in two different formats: a .RES format (the compiled
format that it uses for later editing) and a human-readable ASCII format
with the extension DLG. The .DLG file contains the complete dialog template
as it would normally appear in a .RC file, with style parameters expressed
in terms of the macro definitions from WINDOWS.H (such as BS_PUSHBUTTON) and
IDs identifying each control as specified in a header file for the
application.

One .RES file created by DIALOG can contain many different dialog templates
for the application. You can begin a new file within DIALOG by selecting New
from the File menu. To start a new dialog template, select New Dialog from
the Edit menu and switch between dialog templates by using the View Dialog
option of the File menu.

To fill up the dialog box with various controls, use the Control menu, which
lists 12 basic types of controls (such as Check Box, Radio Button, Push
Button). If the control uses text, it will simply show the word TEXT. You
can select the control for editing simply by clicking on it. By hooking the
sides or corners you can stretch and size it, and by hooking the center you
can move it around.


A Matter of Style

The Control menu lets you select from the basic types of controls. The
Styles menu allows you to further refine them, replace the word TEXT with
something else, and assign an ID to each control. These IDs are usually
macro definitions from the application's header (.H) file. Your source
program can then reference each control by these names.

Although DIALOG can read a header file and let you use the name (rather than
the number), it asks for the header file only when reading an existing RES
file. So, before you get too far, you'll want to save a new file using the
Save As option from the Files menu, create a header file with define
statements for the IDs, read the file back into DIALOG with File Open, and
enter the name of the header file when DIALOG asks for it.

From the Styles menu you have a choice of Class Styles and Standard Styles.
The options here let you refine the way the control appears on the screen
and how it works.

For instance, you might select Push Button from the Control menu, which will
display text in a rounded rectangle and is often used for things like OK and
CANCEL If you want a default setting for the push button (which has a bold
outline), you first select the push button control for editing, bring down
the Class Styles option of the Styles menu, and select Def Push Button.
Another example: The dialog box itself is initially shown with a simple
frame. You can add a caption bar and a system menu box by selecting those
options from Standard Styles.

Controls in a Windows dialog box are generally organized by "groups" and
"tab stops." Controls marked as tab stops can be navigated using the tab
key. Within a group, however, you can use the arrow keys. You can mark
controls as groups and tab stops from the Standard Styles option of the
Styles menu. However, if you've been designing your dialog box in a free-
form manner, you'll find that the tab stops will bounce around from item to
item in the order that you've created them rather than a visually logical
order.

Fortunately, you can both re-order the controls and select groups and tab
stops through the Order Groups option of the Options menu. This shows a list
of all the controls you've created. Selecting a control with the mouse and
placing the horizontal black bar cursor in a different location moves the
control. To define a group, you have to mark only the first and last control
of the group. You would usually flag the first control of the group as a tab
stop also, but you can pick another control as the tab stop if you'd like
the cursor to jump to the middle of a group.


Make Sure It Works

Of course, now you'll have to recompile to see if the thing works right.
Well, not quite yet. You can now pick Test Mode from the Options menu and
test the tab stops and groups from within DIALOG. This test mode is one of
the nicest features of the program.

DIALOG is not perfect. You should watch out for a few things: If you want to
delete a specific control from the dialog box, first select it and then pick
Clear Control from the Edit menu. The Cut Dialog option of the Edit menu
deletes the whole dialog box and everything in it. You can get it back by
selecting Paste Dialog from the Edit menu, but it's a little disconcerting
to see the whole thing disappear.

Icons do not work right. You should be able to identify an icon by typing
the name in the Text field of the Class Styles box. However, DIALOG will
ignore this name. You can either avoid using icons in dialog boxes or enter
in the name later using a text editor.

The worst problem does not lie with DIALOG. Preferably, you should be able
to include the .DLG file created by DIALOG in the application's Resource
Script (.RC) file, as:

  #include "myprog.dlg"

However, the RC.EXE resource compiler version 1.00 will not correctly
process an include file in the resource script unless the include file
contains only define statements. Until this problem has been fixed, you'll
probably have to copy the .DLG file into your .RC file manually. You'll also
want to use a different name for the .RES file that is created by DIALOG and
used for future editing. Otherwise, DIALOG's .RES file will be overwritten
when you run the RC resource compiler. Although DIALOG can read and properly
modify a RES file that it did not create and which contains information
other than the dialog boxes, it would probably be safer to let DIALOG work
with its own .RES file.


Required Reading

Chapter 7 (pages 147 to 174 of the Microsoft Windows Software Development
Kit Programming Guide (for a general discussion of controls and dialog boxes
of controls and dialog boxes).

Section 6.2.6 (pages 292 to 307 of the Programmer's Reference (for the
format of the DIALOG template).


Figure 1:

TRYOUT DIALOG 11, 18, 208, 165
 CAPTION "Mythical Windows Spreadsheet"
 STYLE WS_BORDER | WS_CAPTION | WS_DLGFRAME | WS_SYSMENU | WS_POPUP
 BEGIN
  CONTROL "Number Format"  11,"button", BS_GROUPBOX    | WS_CHILD, 12, 4, 64,
  CONTROL "General"    ID_GEN, "button",BS_RADIOBUTTON | WS_GROUP | WS_TABSTO
  CONTROL "Fixed"      ID_FIX, "button", BS_RADIOBUTTON | WS_CHILD, 16, 28, 4
  CONTROL "Scientific" ID_SCI, "button", BS_RADIOBUTTON | WS_CHILD, 16, 40, 5
  CONTROL "Currency"   ID_CUR, "button", BS_RADIOBUTTON | WS_CHILD, 16, 52, 4
  CONTROL "Comma"      ID_COM, "button", BS_RADIOBUTTON | WS_CHILD, 15, 65, 4
  CONTROL "Default Column Width:" 8, "static", SS_LEFT | WS_GROUP | WS_CHILD,
  CONTROL " 9" ID_DCW, "edit", ES_LEFT | ES_RIGHT | WS_BORDER | WS_TABSTOP |
  CONTROL "Decimal Places:" 17, "static", SS_LEFT | WS_CHILD, 88, 28, 66, 10
  CONTROL " 2" ID_DPL, "edit", ES_LEFT | ES_RIGHT | WS_BORDER | WS_TABSTOP |
  CONTROL "Fast Entry Mode" ID_FEM, "button", BS_AUTOCHECKBOX | WS_TABSTOP |
  CONTROL "Flag Circular Calcs" ID_FCC, "button", BS_CHECKBOX | WS_TABSTOP |
  CONTROL "Text Format"   19,  "button", BS_GROUPBOX | WS_CHILD, 12, 84, 64,
  CONTROL "Left"       ID_LEF, "button", BS_RADIOBUTTON | WS_GROUP | WS_TABST
  CONTROL "Right"      ID_RIT, "button", BS_RADIOBUTTON | WS_CHILD, 16, 108,
  CONTROL "Centered"   ID_CEN, "button", BS_RADIOBUTTON | WS_CHILD, 16, 120,
  CONTROL "Recalculation" 3, "button", BS_GROUPBOX | WS_GROUP | WS_CHILD, 88,
  CONTROL "Auto"       ID_AUT, "button", BS_RADIOBUTTON | WS_GROUP | WS_TABST
  CONTROL "Manual"     ID_MAN, "button", BS_RADIOBUTTON | WS_CHILD, 96, 108,
  CONTROL "Row-Wise"   ID_ROW, "button", BS_RADIOBUTTON | WS_CHILD, 148, 96,
  CONTROL "Col-Wise"   ID_COL, "button", BS_RADIOBUTTON | WS_CHILD, 148, 108,
  CONTROL "Natural"    ID_NAT, "button", BS_RADIOBUTTON | WS_CHILD, 148, 119,
  CONTROL "OK" 0,     "button", BS_DEFPUSHBUTTON | WS_GROUP | WS_TABSTOP | WS
  CONTROL "Cancel" 0, "button", BS_PUSHBUTTON | WS_TABSTOP | WS_CHILD, 120, 1
 END



NULL
                );
            }
        }

        return 0L;

      case WM_CREATE:

────────────────────────────────────────────────────────────────────────────

Ask Dr. Bob!

Multitasking?

Dear Dr. Bob,

I'm confused: Is Microsoft Windows a multitasking environment or not?
Sometimes it seems like it is, and sometimes it seems like it isn't. What's
the story, Dr. Bob?──Confused

Dear Confused,

Most people think of multitasking as a process requiring time-slicing. In a
traditional multitasking environment, the operating system switches between
different tasks by allocating short periods of time to each. Microsoft
Windows does not yet time-slice between applications. Windows will probably
use time-slicing for multitasking only when MS-DOS also does so.

Instead, Windows has a nonpreemptive multitasking scheduler for running
Windows applications (programs written specifically for Microsoft Windows).
A Windows application will not be interrupted if it does not want to be
interrupted; only when it specifically relinquishes control do other
applications get a chance to run.

A Windows application normally sits in a loop waiting to receive messages,
usually executing a GetMessage call. The messages it receives cover all the
events (keystrokes, mouse movements, window resizing, and so forth) that
affect the application. When it gets a message, the Windows application
dispatches it to the appropriate procedure in the program. This procedure
can either act on the message or ignore it.

Microsoft Windows switches between applications when an application polls
for a message by using the GetMessage call or the similar WaitMessage call.
Once it has the message, the application can take as long as it wants,
without interruption. In the interim other applications (for instance, the
CLOCK) will stop working.

Polite Windows applications check frequently for messages while performing
lengthy chores. This way they can yield control to other applications and
give them an opportunity to run.

However, if a Windows application needs an unbroken chunk of time (say, for
high-speed real-time data acquisition), it can take it. The application can
interrogate the mouse and the keyboard, write to the screen, and do
everything it needs to do──all without interruption. It just has to avoid
looking for more messages.

So Microsoft Windows is multitasking, but it's up to the individual Windows
applications when to allow multitasking with other applications and when not
to.

For "good old applications" (MS-DOS applications that don't write directly
to the display and that can run in a window), Windows yields control to
other applications during keyboard input and screen output. But for old
applications that do write directly to the display, Microsoft Windows
suspends all multitasking but still allows the user (in most cases) to
switch among applications.


Compilers

Dear Dr. Bob,

Why do I need to use Microsoft compilers for developing Windows
applications?──Puzzled

Dear Puzzled,

Right now the only compilers that support Microsoft Windows are the
Microsoft C and Pascal compilers. You can also program Windows applications
in assembler, but the most convenient way to do that would be to use
assembler routines called from a C program. Microsoft has made public the
relatively minor support for Windows that a C compiler requires, and so
other compilers may also support Microsoft Windows.

A C compiler for Windows requires procedures to be "Pascal" (arguments are
pushed on the stack from left to right and that the procedure itself adjusts
the stack). Normally, C pushes arguments right to left and adusts the stack
after returning from the procedure. The C compiler must also allow mixed-
model programming with the "near" and "far" key words. Procedures called
from Microsoft Windows must have a small prolog and epilog so that Windows
can adjust data segment references after moving data.


No Software Interrupt

Dear Dr. Bob,

Is there some kind of software interrupt or other hook I can use to access
Microsoft Windows procedures from within a program I write in another
language, such as BASIC or Turbo Pascal? Can I get at Windows graphics
functions any other way?──Frustrated

Dear Frustrated,

No. Windows functions are not accessed through a software interrupt. The
Windows loader resolves all function references in the new format executable
at load time. This means that only programs in the new EXE format can access
Microsoft Windows functions.

It might be possible to write a shell program as a Windows application that
would provide a path for other programs that are not Windows applications to
call Windows procedures. But this task would be very difficult. Moveover,
these programs would almost certainly have to be fixed in memory and could
not be moved.

The WINOLDAP module allows some old applications to run in a window, by
providing one type of shell that intercepts DOS and BIOS calls and
translates these calls into Windows functions. This shell is one of Windows'
more complex features, since it must deal with many of the nasty things that
old applications do. A more extensive shell──even one that included only
graphics support──would have to be more complex.


Executive

Dear Dr. Bob:

Can I execute a Windows application from within another Windows
application?──Stumped

Dear Stumped,

Sure. That's what the MS-DOS Executive does. The recommended method for
executing a program from a Windows application is with an assembly language
subroutine using the EXEC function call 0x4B. Windows intercepts this MS-DOS
call and can correctly load the new format executable.

The EXEC function call returns to the calling program right after the child
process has been loaded. Under MS-DOS, the calling program doesn't get
control back until the child process has terminated.

You can even execute an old application from a Windows application or vice
versa. You can get a little sense of what happens in this latter case by
running COMMAND.COM from Microsoft Windows. If you lie in the PIF file and
say that COMMAND.COM writes directly to the screen, you'll find that
executing a Windows application from the MS-DOS command level results in the
"This program requires Microsoft Windows" message.

If you run COMMAND.COM in a window and enter the name of a Windows
application, however, it will load correctly and take over the area of the
screen occupied by COMMAND.COM. When you bring up COMMAND.COM again, you'll
see the cursor sitting at the MS-DOS prompt. The Windows application has
been loaded, and Windows has returned control back to COMMAND.COM.


Expanded RAM

Dear Dr. Bob,

Can Microsoft Windows use an expanded memory board?──Fuzzy

Dear Fuzzy,

Yes and no. Microsoft Windows can take advantage of a RAM-Disk on an
expanded memory board but not of expanded memory itself. However, Windows
supports the use of expanded memory by old applications by preserving and
restoring the state of the Expanded Memory Manager.

Let's look at these two topics separately.

The presence of any high-speed disk storage will improve Windows'
performance. Windows uses the disk for storing temporary files from Windows
applications and for swapping old applications in and out of memory. The
disk used for these purposes can be any real or virtual disk on your system,
including any type of RAM-Disk. A RAM-Disk installed in expanded memory is
ideal.

If your RAM-Disk is installed as drive D: (for instance), put the following
statement in your AUTOEXEC.BAT:

  SET TEMP=D:

This statement directs Microsoft Windows applications to store temporary
files (for instance, those created by WRITE) on the RAM-Disk. These
temporary files begin with a tilde (~) and have the extension TMP.

If you do Windows program development, you should also include the following
statement in your AUTOEXEC.BAT:

  SET TMP=D:

This statement directs the Microsoft C Compiler to use the RAM-Disk for its
temporary files.

To use drive D: as a swapping disk for old applications, replace the line in
your WIN.INI file that reads

Beyond using a RAM-Disk in expanded memory, neither Microsoft Windows nor
Windows applications use expanded memory directly. (A future version of
Windows may have more support for expanded memory.)

However, Microsoft Windows can detect the presence of an expanded memory
board. If it finds one, Windows can let old applications use expanded memory
in the multitasking environment without memory conflicts. Windows will save
the contents of the expanded memory board registers and restore them when
switching among applications.

Some early Expanded Memory Managers did not include full support of the
"Get/Set Page Map" (function 15) of the Expanded Memory Specification
Release 3.20. This call is the one Microsoft Windows uses to save the
contents of the expanded memory board registers. For this reason, Release
3.20 versions of the Expanded Memory Manager are included with Windows.
These drivers are called EMM.PC and EMM.AT; they work only with the Intel
Above Boards. You can also use any Expanded Memory Manager, Release 3.20 or
later, supplied with an Intel Above Board. Before using any other expanded
memory board, check with the manufacturer to determine if the Expanded
Memory Manager provides Release 3.20 support of the "Get/Set Page Map"
call.


Math Coprocessor

Dear Dr. Bob,

Can Windows applications use an 8087 or 80287 math coprocessor?
──Perplexed

Dear Perplexed,

Yes. Microsoft Windows provides full support for saving the state of the
math coprocessor and restoring it when switching among applications. That's
the good news. However, Windows applications cannot yet use the 8087
floating point libraries provided with the Microsoft C Compiler (version 3
or 4). This problem lies with the libraries themselves rather than with
Windows support of the 8087.

If you want to use floating point in a Windows application written in C, you
must currently use the /FPa compiler switch and link with the SLIBFA.LIB,
MLIBFA.LIB, or LLIBFA.LIB──depending on your memory model──alternate math
library. The alternate math library, which uses a subset of the IEEE
standard, is faster and smaller (but less accurate) than the 8087-emulation
code of the other floating point math libraries. The alternate math library
does not use an 8087 even if one is present.

When the 8087 floating point libraries are eventually modified for Windows,
upgrading the program should only require relinking it with LINK4.

In the interim, you could define your own floating point routines that use
either the regular C library routines or the assembly language subroutines
using the 8087, depending on the presence of the math coprocessor.


Printf

Dear Dr. Bob,

What happens ins a Windows application if I try to write to the Display in
the conventional way using the C function printf?──Stymied

Dear Stymied,

Nothing. Microsoft Windows intercepts all DOS and BIOS output headed for the
display and dumps it into the bit bucket, where it is never seen again.

If you need to write formatted text output to the screen, you can use
sprintf and display the resultant string with Windows TextOut procedure.


Instances

Dear Dr. Bob, What happens when I run the same program simultaneously in
Microsoft Windows? Are the two versions entirely distinct or do they share
code and data?──Unclear

Dear Unclear,

When an application is loaded more than once, the loadings of the
application are referred to as different "instances." Generally, multiple
instances of the same application share the same code segment but have
different data segements. Windows applications also share resources such as
menus, icons, cursors, and bitmaps, since such resources are read-only
data.

During initialization, an application can determine whether or not it is the
first instance of that application. If it is not the first instance, it can
retrieve some data that must be shared from the previous instance.


════════════════════════════════════════════════════════════════════════════


Vol. 1 No. 2 Table of Contents

Aldus: Preparing PageMaker for the Move to Windows

The success of Aldus Corporation's PageMaker(TM) has made this program
practically synonymous with desktop publishing. Now, Aldus is moving
PageMaker to Microsoft(R) Windows and rewriting the program in C for both
the PC and the Macintosh.


Moving Toward an Industry Standard for Developing TSRs

Terminate-and-stay-resident programs such as Borland International's
SideKick(TM) have become popular tools for many PC users. A report from the
May gathering of software developers attempting to formulate guidelines for
peaceful coexistence among TSRs.


A Step-by-Step Guide to Building Your First Windows Application


At first, creating a Microsoft Windows-based application seems to be a
complex process involving an oddly structured C program that uses Windows
functions and macros. This simple program, WSZ, provides a model for
building a Windows application.


New XENIX Version Will Be First to Run On the Intel 80386

In early 1987, Microsoft will release XENIX(R) System V/386, the first
version of XENIX to make full use of Intel's new 32-bit 80386
microprocessor. In this exclusive interview, XENIX Development Manager
Martin Dunsmuir tells what to expect.


A New Generation of Debugging Arrives with CodeView

The CodeView(TM) debugger included with the Microsoft(R) C Compiler 4.00,
the latest debugging tool to become available, marks improvement over
SYMDEB by including symbolic local variable and subroutine names with
additional debugging capabilities.


Ask Dr. Bob


EDITOR'S NOTE

Welcome to Issue 2 of Microsoft Systems Journal, up in size from the last
issue of MSJ, but already too small to accommodate the problem-solving
and problem-avoiding technical articles that many of you have already come
to expect──judging from the first subscription mailing response. We are,
of course, delighted by your interest and approval.

There's still time to become a charter subscriber to Microsoft Sytems
Journal and avoid missing the solutions, insights, and inspirations we're
dedicated to bringing you. Consider what's coming up: a closeup of the IRMA
3270 board (from a developer's point of view, of course), a comparison of
page description languages, details of the MS-DOS CD ROM extensions, and a
step-by-step debugging session using CodeView. Down the road: authoritative
examinations of operating systems developments and language enhancements.

Wish List. How many times have you said to yourself, "How could they have
gone to all the trouble to design such a useful product and left out _____?"
MSJ is so committed to the principle of product improvement that we'll pay
you a $100 for your idea if we publish it, and you can be sure that the
manufacturer will hear of its sins of omission directly from the editors
of Microsoft Systems Journal.

Write to Us. Our aim at Microsoft Systems Journal is to tackle the issues
confronting serious developers, but we need your help. Write us, or send us
a message on MCI Mail (MSJ). Tell us what you want to see in the Journal.
Or let us pass on your most recent programming snafu to Dr. Bob. And, of
course, we'd like your feedback on these first two issues. Whether you've
got a question, comment, or complaint, we'd like to hear from you.──Ed.


Masthead

JONATHAN D. LAZARUS
Editor

BARRY OWEN
Managing Editor

CHRISTINA G. DYAR
Assistant Editor

MICHAEL LONGACRE
Art Director

VALERIE MYERS
Associate Art Director

WILLIAM B. GRANBERG
Circulation Manager

L. PERRIN TOMICH
Office Manager

Copyright(C) 1986 Microsoft Corporation. All rights reserved; reproduction
in part or in whole without permission is prohibited.

Microsoft Systems Journal is a publication of Microsoft Corporation, 16011
NE 36th Way, Box 97017, Redmond, WA 98073-9717. Officers: William H.
Gates, III, Chairman of the Board and Chief Executive Officer; Jon Shirley,
President and Chief Operating Officer; Francis J. Gaudette, Treasurer;
William Neukom, Secretary.

Microsoft Corporation assumes no liabilty for any damages resulting from the
use of the information contained herein.

Microsoft, the Microsoft logo, MS-DOS, and XENIX are registered trademarks
and CodeView is a trademark of Microsoft Corporation. Apple is a registered
trademark and Macintosh is a trademark of Apple Computer, Inc. IBM is a
registered trademark of International Business Machines Corporation.
PageMaker is a registered trademark of Aldus Corporation. Lotus and 1-2-3
are registered trademarks of Lotus Development Corporation. UNIX is a
registered trademark of AT&T. Compaq is a registered trademark of Compaq
Computer Corporation. Intel is a registered trademark of Intel Corporation.

────────────────────────────────────────────────────────────────────────────

Aldus: Preparing Pagemaker(TM) for the Move to Windows

Kevin Strehlo

Several years after the end of Ethel Merman's heyday as the queen of musical
comedy on Broadway, a reporter said to her, "Broadway has been very good to
you." Merman was quick to retort, "Yes, and I have been very good for
Broadway."

Such is the mutually advantageous relationship between the Apple
Macintosh(TM) and Aldus Corporation's PageMaker, the leading desktop
publishing software. While the Macintosh has certainly been very good for
PageMaker, PageMaker has been very good for the Mac.

Pagemaker's featured position in Apple advertising has helped push it to the
top ten in the bestseller charts, while it returned the favor by selling
lots of Macs (Aldus research shows that one out of three of Macintosh users
bought their computers primarily to use PageMaker). Indeed, the PageMaker
program has been such a success that the Mac and desktop publishing have
become practically synonymous.

It comes as little surprise that Aldus is attempting to repeat its success
by making a move to Microsoft Windows(R), the logical vehicle for cracking
the lucrative PC marketplace. What may be surprising, however, is the
Seattle-based company's decision to throw away the code of its original
Pascal-based version of PageMaker in favor of a complete rewrite in C that
will run on both the PC and the Macintosh.

From the start, Aldus Corporation had planned to merge the Macintosh version
of the PageMaker page layout program with the version it was developing
under Microsoft Windows. Rather than release the Macintosh version first,
Aldus decided to wait until the PC version of PageMaker was out the door.


A Rare Problem

In Aldus's effort to share source code between the Mac and the PC, however,
the decision to wait was reversed by a problem in one of the environments.
It was a rare case where the problem was located in the Mac.

"We had made all the data structures in the original Mac version of
PageMaker 'resources' and saved them out to files using the Mac's Resource
Manager," says Jeremy Jaech, programming manager for Aldus. "That turned out
to be a mistake."

The Resource Manager was designed to read small, indexed data structures
(such as fonts and dialog boxes) into memory. It wasn't intended to
continually write large pieces of data back to disk. Aldus found itself
plagued with less-than-optimum performance and occasional file corruption
caused by persistent bugs in the Resource Manager's garbage collection
routines.

Fortunately the PC team was already working on the solution. "There is no
equivalent to the Resource Manager under Windows, so we spent a lot of time
up front designing and implementing a file system that did exactly what we
wanted to do on the PC," says Jaech.

But because they had not cleanly separated the file system layer from the
rest of the Mac code, sliding that file system underneath the Mac code would
necessitate a major rewrite. They decided to bite the bullet and merge the
Mac and Windows versions right away.


The Edge

The project was organized into three teams: the core code team and──because
of the significant differences between the two environments──two teams that
would each write the unavoidable environment-specific modules, dubbed the
Macintosh edge code and the Windows edge code.

One of the first choices was fundamental. Building for the lowest common
denominator of the Macintosh and Windows would result in failure to take
advantage of the most appealing features of both. Instead, the Aldus team
decided to write for the union of the two environments' capabilities.

That often meant that the edge code for one environment had to emulate a
capability that was missing from the other. For example, the Mac provided
continually scalable fonts and Windows did not.

"Microsoft went for the concept of readability," explains Dave Walter, the
lead programmer for the core code group. "But a lot of things PageMaker does
involve showing the form rather than the content. We need to be able to get
a piece of type up on the screen the actual size it's going to be. We don't
really care if it's readable."

Thus, given a request from the core code drawing routine for a particular
size and face of type, the Windows edge code read the character metrics of
the printer font and returned the appropriate bit map for screen display.

Fortunately, Windows did make provisions for handling fractional character
values──a feature missing from the Mac Toolbox until the 128K ROM
upgrade──so the PC version of PageMaker was able to portray line lengths
accurately on-screen despite a screen resolution that is much lower than
(and not necessarily an even divisor of) the final 300 DPI printer output.

When possible, the environments were equalized in the core code rather than
in the edge code. When the user drags a guide on PageMaker's page layout
board, for example, Aldus's Walter wanted the code that actually moved it to
be part of the core. That meant accommodating the differences between the
way the two environments handled the pattern used to represent that guide.

The Windows GDI (graphics device interface) drawing routines automatically
align a pattern so that it begins and ends at the same point, ensuring it is
"in phase." The Mac Quickdraw routines do not align patterns for you; the
application must rotate patterns into proper phase for drawing. To deal with
the discrepancy, Walter says, "We just used an 'if def Mac' or 'if def
Windows' clause."


Complex Code

Sometimes, however, the environments' differing approaches made the patch
code so complex that it was forced out of the core and into the edges,
Walter says.

For example, under Windows, scrolling involved handling a series of messages
that described the user clicking on the cursor keys or clicking the thumb, a
simple procedure. But tracking a scroll bar on the Mac required calling the
Mac Toolbox's TrackControl function. Unfortunately, the arguments
TrackControl passed were different depending on whether the user was
clicking on the thumb or a cursor key.

"You actually have to have two different scrolling procedures on the Mac,"
Walter explains.

In other ways, Windows is less orthogonal and therefore more complex to work
with than the Mac environment.

For example, under Windows the function GetMessagePos fetched the position
of the mouse, while GetCurrentPos fetched the cursor position. "But the
first returns the value to you as a Long (pointer), while the other gives
you a pointer to a pointer," says Walter.

Clyde McQueen, who wrote the shared memory management and file handling code
for the two environments, had to deal with a number of similarly
disconcerting choices as he strove to keep as much of the code in core as
possible.

"On the Mac it's neat and clean to dereference from your handle to get a
pointer," says McQueen. Doing a dereference once outside a loop would be far
more efficient than doing it inside a thousand times, of course, and it
would be perfectly safe as long as he knew the object pointed to would not
be moved. Since times of memory movement are pretty well defined on the Mac,
he wouldn't have to lock the object down.

Under Windows, however, an object is automatically locked whenever you
dereference its handle to get a pointer. (This will allow Microsoft to flesh
out Windows in the future with preemptive scheduling of tasks.)

McQueen had a choice: he could add overhead by locking memory "needlessly"
on the Mac or move that central part of the memory management system out of
the core code. He decided that the lesser of these evils was locking memory
on the Mac.


Low Memory

In another case, the problem was the lack of an early warning under Windows
that you were about to run out of memory. "I can get a ballpark," says
McQueen, "but it's not reliable." A clause in the core code lets the program
know it's operating in the Windows environment and thus has to be careful
about running out of memory.

"That's why a lot of user operations under the Windows version of PageMaker
result in a little disk hit," McQueen says. Such behavior is less acceptable
for PageMaker on the Mac, where the program is much more likely to be
running on floppy disk drives. Thus, if the clause senses it is on the Mac,
writing data out to disk or purging code segments is deferred until a global
memory warning is received.


Fixing the Bugs

To work out the early kinks in his memory management and file handling
routines, McQueen used Heapwalker, the Windows utility designed to track
objects in the global heap. Since he knew the number and approximate sizes
of objects he was dealing with, Heapwalker let him see instantly when
something had gone awry.

But discovering a bug was not the same as fixing it. For bug hunting,
McQueen turned to home-brewed tools he called "scopes" (see Figure 1☼).

"The scopes were a way to quickly examine the memory structures I was
using," McQueen says. The scopes were modeless dialog boxes, written as an
excuse to learn the structure of a Windows application. They proved
exceedingly useful.

Although they could alter as well as display memory, viewing turned out to
be far more valuable than altering. McQueen could often tell what had gone
wrong simply by examining his memory structures. Clicking on the "next"
button he had built into the scope would display the next record, allowing
him to follow whatever errant trail he had blazed through memory.

"It sure beat trying to figure out what was going on from SYMDEB's
hexadecimal dump," he says.


Working Environments

Once the Mac and Windows projects merged, however, the development of the
core code could be done in either environment. For Windows, the Microsoft C
Compiler and the Make program were used; on the Mac, Lightspeed C and
Polytron's Polymake were used.

"Some of the problems we've got when we're dealing with an Intel processor
are the segmentation of memory and the existence of two different pointers,
near and far," says Walter. To avoid such processor-specific dependencies,
he says, "We found that using warning level 2 on the Microsoft C Compiler
was crucially important for our development."

The Aldus team found the Microsoft debugger for Windows helpful. "But what
we're really looking forward to is a future version of CodeView(TM) that
works with Windows applications──it's certainly a big help with DOS apps,"
says Ted Johnson, lead programmer on the Windows edge code.

To an outsider, it might seem Aldus had something to lose by going with the
common code approach. The marketplace for PC page layout programs was wide
open, after all, and an early presence in the market would be a great
advantage. So why waste time making sure that the Windows code already under
development would also work on the Mac?

One reason was to get the PC product out sooner. It was simply too hard to
find good Windows programmers at such an early stage in the game. "The PC
project was definitely resource starved," Johnson explains, "until the Mac
team's talents were brought to bear."


Common Benefits

The benefits to Aldus of a common code approach, says Jaech, are several.
"Since 80 percent of the code is shared, you usually implement a feature
just once, not twice. Also you only have to fix a bug once, unless it's
environment specific. And from a maintenance point of view, people over in
customer service trying to deal with phone calls won't have to remember two
sets of technical issues and problems."

Finally there's the advantage of file compatibility. PageMaker files will be
interchangeable between the Mac and the PC, as will import filters for key
word processing products.

"We didn't plan it that way," says Jaech. But, as with most of the spinoffs
of the decision to write common source code, it seems to have worked out for
the best.

────────────────────────────────────────────────────────────────────────────

Moving Toward an Industry Standard for Developing TSRs

Nancy Andrews

Terminate-and-stay-resident programs──"pop ups"──are like people: they can't
live together but they can't live alone either. If you are running Microsoft
Word, for example, you cannot check spelling interactively with Turbo
Lightning. If you interrupt Lotus(R) 1-2-3(R) with SideKick, strange things
can happen when you return. If you run XyWrite you can't use any TSRs. And
if you run two or more TSRs, there's no knowing how they will interact.

Currently all software developers program their TSRs a little differently.
There is no established set of programming rules to ensure smooth
interaction with other TSRs and with the operating system itself. To make a
TSR work with everyone else's requires an enormous programming
commitment──it must be tested against everything in the marketplace. This
includes not only other TSRs but normal applications as well.

Some normal applications make life difficult for TSRs. XyWrite, for example,
steals the hardware keyboard interrupt, thus locking out any TSR that also
requires INT 9. Are there "offenders," TSRs that purposely try to be
exclusive, taking the system resources they need without regard for others?

John Socha, chief programmer at Peter Norton Computing, says no. Different
software vendors have depended upon different approaches to solving problems
in a world where there are no rules.

Others who are not so kind cite Borland as an offender; Borland's SideKick
takes the keyboard interrupt, for example, and then at each timer tick
checks to see if anyone else has taken it. If another program has it, then
SideKick will steal it back. These factors complicate writing a TSR, making
it a tough job to deliver a good and flexible product.

One of the reasons all TSRs work differently is that TSR controls are not
built into MS-DOS(R). There was no such thing as a TSR in the UNIX(R) world.

"It was a radically new idea," says Socha, "to be able to change the
behavior of an existing program──a dynamic rather than a background
process──and to add new features without having the source code."

Later operating systems like the Apple(R) Macintosh did incorporate TSR
controls into the operating system. The Mac makes its desk accessories
constantly available on the Apple menu and handles their interactions for
you.

Because current versions of MS-DOS do not provide similar capabilities,
Microsoft is part of the team working toward developing standards or
guidelines. According to Adrian King, Microsoft's Director of Operating
Systems, future versions of MS-DOS will address this at the outset. King,
however, declined to comment about which versions, when, and how.


The Solution

A group of software developers co-chaired by Adrian King of Microsoft and
Tony Middleton of Softronics, and hosted by Softronics, met in Colorado in
May. King said that his goal was to put together standards "of maximum
benefit to the software community that could be wholeheartedly endorsed by
as many organizations as possible." Lynn Stricklan from Softronics said
that what he wanted was standards that would make TSRs "clean and
nonviolent."

Participants at the conference agreed to agree that they were not able to
issue a standard──a formal definition of rules. Instead, they aimed for the
creation of a set of programming guidelines, and they called their efforts
"Programming Guidelines for MS-DOS Co-Resident Software."


The Guidelines

Microsoft produced a draft of these guidelines. The original draft included
the following: a set of operational rules for TSRs, specifications for their
order of loading, a set of data records that describe operational
characteristics, and a program interface to allow other applications to
avail themselves of a TSR's functions.

Two parts included in the original draft but recognized as unfeasible were a
mechanism for TSRs to uninstall and a procedure for loading TSRs into
extended memory, leaving memory below 640K available for normal
applications.

Operational rules include two major areas: interrupts and maintaining
software variables for changes that are made directly to the hardware. Major
problems have occurred with the keyboard interrupts INT 9 and INT 16h. Some
applications hook INT 9 and bypass INT 16h, thus preventing others from
seeing the keyboard request.

Other applications take complete control over the keyboard with INT 9,
presumably to trap keystrokes that the BIOS does not generate, such as Ctrl-
Up Arrow. The proposed way to handle interrupt conflicts is to always use
INT 16h to get a keystroke and to chain the interrupts. Essentially,
chaining stores the old interrupt vector inside the program before replacing
it with its own vector.

The code sample in Figure 1 illustrates how to chain into INT 9. This
routine doesn't do anything useful now──you can insert your own code for
that. It simply passes control back to the old INT 9 routine, which can be
either the ROM BIOS routine or some other memory-resident program like
Prokey. But as long as everyone does, in fact, chain interrupts, all should
function properly and it shouldn't matter who gets control next.

Other proposed interrupt operational rules prohibit setting a timer to
retrieve an interrupt vector and using a stack only when interrupts are off
or in a protected or non-reentrant area.

The remaining operational rules require that the BIOS data area be updated
in order to reflect any of the following alterations: changing video modes,
setting the high-order attribute bit for background intensity, using a
software cursor, or changing the EGA palette directly.

If your program is interrupted by another TSR, it ought to know what to
restore when it relinquishes control.

The proposed data records to describe operational characteristics of TSRs
include a Program Identification Record and an Interrupt Information Record
(see Figure 2). Each TSR will have only one Program Information Record but
will have an Interrupt Information Record for each interrupt vector it
intercepts. The record includes a pointer to the old routine. This allows
any program to trace through the chain of installed programs. The
Interrupt_Priority value in the Interrupt Information Record will be
assigned based on the type of program, and it can be used to control the
order of loading TSRs. Keyboard macro processors such as SuperKey and
Prokey need to be last in the chain and will be given high priority
numbers.

The guidelines also propose a TSR program interface. Such an interface would
permit users to write programs that call functions provided by a TSR. This
way a Turbo Pascal program could, for example, run a SuperKey macro.
Proposed functions include Get Program Information By Name or Number
functions, Activate and Deactivate functions, and Enable and Disable
functions. This interface would be implemented by a set of subfunctions to
function 52h on INT 15h, the cassette interrupt. INT 15h was chosen because
it's used infrequently and has a lot of unused function numbers.


More Details To Come

The participants generally concurred with the proposed guidelines and
determined that more detailed work was needed in four areas. These include:


  1. A revised set of rules for interaction with DOS. Currently TSRs depend
     on several undocumented MS-DOS features such as the IN_DOS flag (see
     Figure 3), the critical error flag, and some undocumented system calls.
     Microsoft's Adrian King has agreed to provide this information. Both
     Borland and Lotus say that this information is critical for TSRs to
     work consistently.

  2. A standard model for keyboard handling. This will most likely include
     scan codes for keys (such as Ctrl-Cursor Up) that don't currently
     exist. David Rose of Rosesoft and Roger Schlafley of Borland have been
     put in charge of this area.

  3. More extensive work on data structures. This will refine and expand the
     data structures section in the original guidelines. Norton's John Socha
     is in charge of data structures.

  4. A kernel to be added to DOS to take charge of RAM-resident programs.
     This kernel will tell the operating system what programs to install and
     where to install them, and it will allocate resources based on the
     priority of the requester. Lynn Stricklan of Softronics is
     investigating the feasibility of the kernel approach. Softronics
     currently uses a kernel to manage its RAM-resident programs.

Participants agreed to have work completed in 90 days and to publish results
on the CompuServe Microsoft SIG. Unfortunately, the 90 days have elapsed,
and the work has not yet been completed. But King reports that the
guidelines are "not dead." He expects to finish his part, and he encourages
others to do the same. He says he hopes that we'll see a new draft on the
SIG in early November.


But Will They Work?

Participants in the drafting of the TSR guidelines qualify their work. They
want it to be understood that guidelines are "evolving," that right now they
are a "moving target" and "will definitely change," that this is not a "be
all and end all" solution, and that "enforcement is not possible." They
caution against unmitigated optimism, pointing out that even if the
guidelines are completed and generally accepted, developers will still have
to deal with users who choose not to upgrade.

But even with these qualifications, the possibility that both software
developers and end users will benefit looks good. Writing a TSR will still
be a difficult and complex task, but once the TSR is written, if it plays by
the rules, software developers will know that it will work with any other
TSR or application that also plays by the rules. If the big players──Lotus,
Microsoft, Borland──agree to support the guidelines, others will as well,
and the guidelines can do the job they're intended to do. So far this looks
like a real possibility.

David Reed from Lotus acknowledged that there are some incompatibilities
between 1-2-3 and the guidelines, and said that once a consensus document
has been produced, Lotus will make 1-2-3 and Spotlight, its TSR, conform. He
points out that it is to their advantage to have their applications work
with everyone else's and that this will directly reduce their support
costs.

Microsoft has taken an active role in this. It co-chaired the conference and
agreed to provide the necessary information about DOS. Beyond that the
company has also made some changes to its standard applications so that they
will work better with TSRs.

David Intersimone at Borland says that when everyone else writes well-
behaved applications──that is, when the guidelines have been agreed to and
implemented──Borland will too. He claims that SideKick programmers had no
choice but to grab INT 9 back because some of the applications SideKick was
expected to work with were ill-behaved and users expected SideKick to appear
when they pressed Ctrl-****. And he says that Borland has gone out of its
way to help developers work around the idiosyncrasies of SideKick.

Phillipe Kahn says, "The whole issue of standardization should not be driven
by the software publishers or the press but by the users." And when
standardization actually happens, end users can't help but be the ultimate
beneficiaries. They'll be able to choose from the full range of available
software──to work with any combination of TSRs and applications without
conflict.


Figure 1:  Code Sample for Chaining Interrupts

This code sample illustrates how to chain into INT 9. This routine won't
be useful until you insert your own code; it just passes control back to the
old INT 9 routine.

CODE_SEG        SEGMENT
        ASSUME  CS:CODE_SEG
        ORG     100h

BEGIN:          JMP     INIT_VECTORS   ;Initialize vectors and attach
                                       ;to DOS
OLD_KEYBOARD_INT        DD      ?      ;Address for ROM routine

;-----------------------------------------------------------------;
; This procedure intercepts the INT 9 keyboard vector. Right now it
;  just calls the old INT 9 routine.
;
;-----------------------------------------------------------------;
INTERCEPT_KEYBOARD_INT  PROC NEAR

        ###                             ;Put your code here
        CLI                             ;Disable interrupts
        JMP     OLD_KEYBOARD_INT        ;Chain back to the old Int 9
INTERCEPT_KEYBOARD_INT  ENDP

;-----------------------------------------------------------------;
;  This procedure initializes the interrupt vectors and installs this
;  program. This routine also throws itself away after the install.
;
;-----------------------------------------------------------------;
INIT_VECTORS    PROC NEAR
MOV     AH,35h                     ;Get the old keyboard interrupt vector
MOV     AL,9                            ;This is INT 9
INT     21h                             ;Old vector now in ES:BX
MOV     Word Ptr OLD_KEYBOARD_INT,BX
MOV     AX,ES
MOV     Word Ptr OLD_KEYBOARD_INT[2],AX

MOV     AH,25h                  ;Set the new KEYBOARD_INT vector
MOV     AL,9                            ;This is INT 9
LEA     DX,INTERCEPT_KEYBOARD_INT
INT     21h

MOV     AX,3100h                        ;Terminate but stay resident
                                        ;with
                                        ;return code of
0
LEA     DX,INIT_VECTORS         ;End of resident portion
ADD     DX,15                           ;Round up paragraph number
MOV     CL,4                            ;Convert from bytes to
                                        ;paragraphs
SHR     DX,CL                           ;Divide by 16
INT     21h                             ;Terminate but stay resident
INIT_VECTORS    ENDP

CODE_SEG        ENDS

        END     BEGIN


Figure 2:  Proposed Data Structures for TSRs

These are the proposed data records to describe operational characteristics
of TSRs. Each TSR will have one Program Information Record but will have an
Interrupt Information Record for each interrupt record it intercepts.

Program Identification Record -- PIDR

Program_Record_ID       DB      "PIDR"
Version_Number          DW      BCD version number
Interrupt_List          DW      Near Pointer to list of interrupts
Startup_Shift_Keys      DW      Near Pointer to shift-pairs
Startup_Key_Codes       DW      Near Pointer to startup codes
Options_Area            DW      Near Pointer to local data area
Program_ID_String       DB      ASCIIZ string

Interrupt Information Record -- IINR

Down_Pointer            DD      Far pointer to old interrupt routine
Program_ID                      DW      Near Pointer to PIDR
Interrupt_priority              DB      Between 0 and 255 giving priority
Function_Numbers                DB      Null-terminated function list

To correlate interrupts with the associated IINR, each interrupt
procedure must be preceded by a 6-byte record. The first four bytes
identify it as a valid interrupt record, and the last two bytes point
to the IINR for more information.

        DB      "SRID"
        DW      Offset Interrupt_Record

Intercept_Interrupt     Proc Far
###
###
Intercept_Interrupt     Endp
-----------------------------------------------------------------


Figure 3:  The IN_DOS Flag

The IN_DOS flag is an undocumented MS-DOS feature that TSRs depend on.

IN_DOS_FLAG     DD      ?       ;Address of IN_DOS flag

MOV     AH,34h
INT     21h                     ;Get pointer to IN_DOS flag
MOV     Word Ptr IN_DOS_FLAG,BX
MOV     Word Ptr IN_DOS_FLAG[2],ES
                                ;Above four lines are init code -- they
                                ;are done once to get address of flag

                                ;Following 7 lines done each time to
                                ;check if IN DOS
PUSH    BX                      ;See if you can popup
PUSH    DS
LDS     BX,IN_DOS_FLAG  ;Set DS:BX to point to IN_DOS flag
CMP     Byte Ptr [BX],0 ;Are we inside DOS?
POP     DS
POP     BX
JNZ     DO_NOT_POPUP_NOW

*This routine is not foolproof. For example, your program would never popup
if you were at the DOS prompt. Information to make it usable in all
situations will be provided with the revised guidelines (on CompuServe in
the Microsoft SIG).

────────────────────────────────────────────────────────────────────────────

A Step-by-Step Guide to Building Your First Windows Application

Charles Petzold

The notion of "building" a Windows application rather than simply "writing"
one implies that the job involves more than just cranking out hot C code.
This is true. While the core of most Microsoft Windows applications
certainly is a C program, it is a C program that is oddly structured and
makes heavy use of Windows functions, macros, and type definitions.

A typical Windows application also requires several other files besides the
C program. Much of the difficulty for programmers first approaching
Microsoft Windows is the large amount of overhead and the new concepts
needed just to get a small program off the ground.

To clear away some of the mystery that surrounds building a Windows
application, we'll put together a fairly simple program called Whatsize, or
WSZ. WSZ displays the dimensions of its own window in units of pixels,
millimeters, or inches. The program also allows you to switch this display
between black text on a white background and white text on a black
background.

Despite its limited functionality, WSZ illustrates some basic Microsoft
Windows concepts; demonstrates the use of such familiar Windows accessories
as menus, icons, and dialog boxes; and offers some insight into the nature
of device-independent applications.


Getting Set Up

I will assume that you have a Microsoft Windows Software Development Kit,
the Microsoft C Compiler 4.00, a hard disk, and a mouse. Some of the
procedures in building the Windows application are slightly different from
the earlier C compiler included with the Software Development Kit.

The files you'll need for this project are shown below in one possible
subdirectory organization. Notations in parentheses indicates whether a file
comes from the C Compiler 4.00 (C4) or the Software Development Kit (SDK).

  \MSC
    CL.EXE      (C4)
    P1.EXE      (C4)
    P2.EXE      (C4)
    P3.EXE      (C4)
    MAKE.EXE    (C4)
    RC.EXE      (SDK)
    RCPP.EXE    (SDK)
    LINK4.EXE   (C4)
    WINSTUB.EXE (SDK)
    MAPSYM.EXE  (SDK)
    SYMDEB.EXE  (SDK)

  \MSC\INC
    WINDOWS.H   (SDK)

          (and regular C header files from C4 if needed)

  \MSC\LIB
    SLIBC.LIB   (C4)
    SLIBW.LIB   (C4)
    SLIBFA.LIB  (C4)
    LIBH.LIB    (C4)
    (and other memory models from C4 if needed)

  \WINDOWS
    Installed version of Windows (SDK)
    ICONEDIT.EXE (SDK)
    DIALOG.EXE (optional)

  \WINDOWS\WSZ
    All WSZ files

The environment variables necessary for the C compiler to get at the
libraries and the include files are

  SET PATH=\MSC
  SET LIB=\MSC\LIB
  SET INCLUDE=\MSC\INC

Microsoft Windows programmers generally do most of their development work
(particularly editing source code and compiling) outside of Windows in
regular old MS-DOS. This is due partly to the inadequacy of current Windows
text editors and the problems that occur when running the C compiler in a
limited memory environment.


Creating an Icon

We'll begin with one exception to this rule. Let's get into Microsoft
Windows and start with a part of WSZ where you can ignore what I've done and
exercise your own creativity.

Most Windows applications have an icon that Windows displays when the
program is parked downstairs at the bottom of the screen. You can create an
icon for WSZ by using ICONEDIT (see Figure 1☼). Choose Icon from the mode
menu, pick a pen color, a pen size, and then use the mouse to draw. For the
icon I created for WSZ, I painted the surface white and then drew a question
mark in black.

The resolution of the bit-mapped icon you created in ICONEDIT will be
considerably reduced when Windows displays the icon when your program runs.
This is why ICONEDIT shows the icon in a reduced size at the left of the
screen. If you use thin lines (three or fewer pixels wide) in your icon,
they could possibly disappear when the icon is displayed. You'll eventually
want to see how the icon looks on both a low-resolution (IBM CGA or
equivalent) and medium-resolution (EGA or Hercules) display.

When you finish creating your miniature masterpiece, save the icon as
WSZ.ICO in the subdirectory WSZ.


Resources

That icon you just created is called a "resource." It will eventually become
part of the WSZ.EXE executable file, but it is neither part of your
program's code nor part of your program's data. Icons are not the only type
of resource you can have in your .EXE file. Resources also include dialog
boxes, menus, and (most preferably) all displayable text.

Think of a resource as read-only data that is conveniently stored right in
the application's .EXE file. In most cases, resources are not loaded from
the disk into memory until they are needed. (This is why you'll often see a
disk access when you pop up a dialog box.) Simple Microsoft Windows calls
retrieve these resources from the disk so your program can use them. Because
resources are read-only, Windows may discard them from memory when they are
no longer needed and then reload them later if necessary. In an operating
system that implements virtual memory, a resource currently in memory would
not have to be saved to the disk because it would still be available in the
same form from the .EXE file.

Resources are defined in a resource script (.RC) file, which is an ASCII
file you create in a normal text editor. The resource script for WSZ is
called WSZ.RC and is shown in Figure 2. This file includes definitions for
the icon, all of the displayable text strings used in the C program, a menu,
and two dialog boxes.

The dialog boxes are usually the most complex part of the resource script
file. You can either work out the dialog box coordinates manually (as I've
done here) or by using DIALOG.EXE (see Figure 3☼; also see "Latest Dialog
Editor Speeds Windows Application Development," MSJ Vol. 1, Issue 1).

The resource script file also contains all the displayable text strings that
the C program will use. You are not required to put them in the resource
script. In fact, defining text strings in the C program usually makes both
the source file and the .EXE file somewhat smaller. The program will run
faster (since it doesn't have to retrieve strings from disk) but will
require more memory space because the strings have to remain in memory
rather than reside on the disk. However, if you want to adapt Windows
applications for foreign-language markets, collecting all displayable text
into one relatively small file will be enormously helpful.

The STRINGTABLE option in the resource script file can handle only single
lines. If you need to include larger text strings in your program (for
instance, for a "Help" window like PIFEDIT's), put this text into separate
files and use the "user-defined" resources in the resource script file. You
can then use the FindResource, LoadResource, and LockResource functions
within your program to get pointers to those resources. The user-defined
resource is a general-purpose facility that allows you to imbed any read-
only data into the .EXE file and access it very easily with just three
simple Microsoft Windows calls.


Avoid Header Loss

The names in the WSZ.RC file that begin with the letters "ID" are really
just numbers that are defined as macros in the WSZ.H header file shown in
Figure 4. It's possible to use macro names here in a resource script because
the RC.EXE resource compiler has its own C-like preprocessor. Using names
instead of numbers makes both the resource script and your C program easier
to understand and maintain.

The WSZ.RC file also has an include statement for WINDOWS.H, which comes
with the Windows Software Development Kit. WINDOWS.H is a massive 80K header
file that is much more important for compiling Windows C programs than
resource scripts. Here it is used only to define the macro names beginning
with "WS" (window style).


The C Program

Now that we've gotten some of the preliminaries out of the way, we're ready
to start looking at some C code.

The complete WSZ.C file is shown in Figures 5, 6, 7, 8 and 9. This file
functions: WinMain, Initialization, MainWndProc, AboutWndProc, and
UnitsWndProc.

WSZ.H and WINDOWS.H are specified as include files at the top of the
program. You will often find that it is helpful when you are programming
Windows applications to consult the WINDOWS.H header file. It contains
declarations for every Windows function and loads of #define and typedef
definitions that ought to be used within Windows applications.

Every Windows application requires a WinMain procedure. This is the entry
point to the application. The WinMain procedure for WSZ is shown in Figure
5.

The input parameters to WinMain include two "handles," one to the current
instance and another to the previous instance. When you load a Windows
application, that's the first "instance" of the program, and there is no
previous instance. If you load the same application without terminating the
first, the previous instance handle will refer to the copy loaded
previously.

You'll run across handles a lot in Windows programming. Almost everything in
Microsoft Windows (menus, windows, memory) is represented by a handle. If
you look at the WINDOWS.H file you'll discover that the various handle data
types are just plain old integers. Handles are just numbers that Windows
uses to refer to things.

WinMain also receives a command line parameter string. If the user of your
application entered a parameter in the File Run box, this is where your
application will get the parameter. The fourth parameter to WinMain
("nCmdShow") indicates the initial state of the application. It could be a
window (if the application was invoked by File Run) or an icon (if File Load
was used).

After WinMain calls the Initialization routine, it sits in a small loop
polling for messages from Microsoft Windows. When it gets a message, WinMain
dispatches it off to somewhere else. Right now, this looks a little
mysterious. Let's leave WinMain in this loop while we take a look at the
Initialization function.


Initialization

The Initialization function (see Figure 6) does several chores necessary to
get the application moving. The two most important chores are defining a
"window class" and a "window." More than one window may use the same class.
The window class defines such things as the standard cursor, the icon, and
the window procedure. Creating the window defines the style and title of the
window.

If you run more than one copy of WSZ in Windows, different instances of the
application will use the same code segment, but different data segments.
This reduces memory use considerably. Different instances of the same
application will have different windows, but the windows will use the same
window class. This is the reason we define the window class only if this is
the first instance of the program.

Although each instance of a Windows application will generally have its own
data segment, the instances are able to share some data. This is illustrated
by the two GetInstanceData calls.


Window Procedure

When we last left WinMain, it was sitting in a loop getting messages from
Microsoft Windows and dispatching them somewhere. Where these messages
ultimately go is the MainWndProc procedure shown in Figure 7. This is a
window procedure. It receives messages from Windows regarding everything
that affects the WSZ window. Every keystroke, every mouse click, even every
movement of the mouse is a message. Within a window procedure, you can
ignore many of these messages by passing them on to the Windows function
DefWindowProc.

The message handling in window procedures makes Windows programming seem
very strange to programmers who have previously worked in more traditional
environments. Usually a program makes a call to the operating system to find
out what's going on. Microsoft Windows is different. From the viewpoint of
the window procedures, it seems like Windows is calling your program to tell
you what's going on. If you feel comfortable with that concept, stick with
it. Otherwise, you can think of DispatchMessage as initiating the call to
the window procedure.

MainWndProc handles only a few of the messages that are sent to it by
Windows. The WM_CREATE message is sent by Windows as a result of the
CreateWindow call in Initialization. WSZ takes this opportunity to retrieve
some of the information that will not be changing during the Windows
session. This information includes the size (in both millimeters and pixels)
of the entire display surface and the dimensions of a character that is in
the default system font.

Microsoft Windows sends a WM_SIZE message to the window procedure when the
window is first displayed and whenever the window is resized. The new
dimensions of the window are encoded in the lParam variable. The dimensions
refer only to the "client area," which excludes the caption bar, menu, and
scroll bars. This is the area that a Windows application is free to write
in.

A window procedure will receive a WM_ERASEBKG any time Windows wants it to
erase the background of the window client area. The color of the background
is defined as part of the window class. Since WSZ will be coloring the
background itself, all we need to do is tell Windows not to erase the
background.

Windows sends window procedures a WM_PAINT message whenever the client area
needs repainting. This can happen after the window has been resized (in
which case it has been preceded by a WM_SIZE message) or after a pop-up menu
has been removed. This is where WSZ will do most of its work. It calculates
values to write the display, colors the whole client area with PatBlt, loads
strings from the resource table with LoadString, and then writes text to the
screen with a combination of DrawText and the regular C sprintf function.

Generally, Windows applications use TextOut rather than DrawText for simple
text strings. However, DrawText provides such amenities as centering and
word-wrap options. The text is drawn in a rectangle indicated by the rect
structure. The rectangle is defined to allow a top and bottom border equal
to the height of a character and a left and right border equal to the width
of a character.

Creating a device-independent application requires that you not make any
assumptions about the size of the display or the client area or the
character sizes. You will probably find that it works best to dynamically
design window displays within your program based around the size of a
default character rather than around hard-coded constants.


Dialog Boxes

The WM_SYSCOMMAND message means that the user of the application has
selected something from the system menu. Normally we wouldn't care, except
that we've added "About..." to the system menu. If About... has been
selected, then WSZ calls DialogBox to indicate that control should now
transfer to the procedure called AboutWndProc (see Figure 8).

Because the About dialog box is fairly simple (just some text and an "Ok"
button), AboutWndProc is also simple. Microsoft Windows is responsible for
actually displaying the dialog box and passing messages back to
AboutWndProc. The only message that we really care about is a WM_COMMAND
message, which means that the Ok button has been hit.

When the MainWndProc receives a WM_COMMAND message, it knows that the user
has selected something from the window menu (rather than from the system
menu). The two choices from the Color menu option (ID_BLACK and ID_WHITE)
simply require changing a checkmark and then saving the CurrentColor. The
Units menu selection then passes control to UnitsWndProc (see Figure 9),
another dialog box.

Note that both the menus and dialog boxes make full use of the same mouse
and keyboard interface as in other Windows applications. Yet nowhere does
WSZ make any explicit keyboard or mouse calls.


Definitions

Finally (well, almost finally), a Windows application requires a Definition
(.DEF) file. The Definition file contains information about the program
segments and procedures that LINK4 (the Windows linker) needs in order to
construct the .EXE file. WSZ.DEF is shown in Figure 10v1n2a3fa.

The code and data segments are both defined as MOVEABLE, which means that
Microsoft Windows can move them around in memory in order to make room for
other programs. The idea that Windows may be moving your program around in
memory may give you the willies, and it should. Many Windows bugs result
from doing such things as saving far pointers (where they become invalid) or
not properly locking and unlocking allocated memory.

The MainWndProc, AboutWndProc, and UnitsWndProc routines are very special
because they are called by Windows. These routines must be specified as
EXPORTS in the WSZ.DEF file. The STUB called WINSTUB.EXE is a small program
that LINK4 embeds in the .EXE file. Try running WINSTUB.EXE on the DOS
command level to see what it does.


Putting It All Together

So far we've created five different source files with the extensions .ICO,
.RC, .H, .C, and .DEF──all for just one application. Now we have to run
these files through the RC.EXE resource compiler, the CL.EXE C compiler, and
the LINK4 linker.

You may be wondering how you're going to keep this mess straight. If you
decide to change the icon file, what do you have to do to bring everything
up to date? It's a problem, and that's why all good Windows programmers use
MAKE.

MAKE.EXE is a program maintainer. The "make-file" for an application
contains sections that look like this:

  target: dependent
          command

If the file change date of any "dependent" file is later than the file
change date of the "target" file, then the "command" is run. Otherwise, it
is not run.

The make-file for WSZ is shown in Figure 11. By convention, make-files have
no extension, so the file is just called WSZ. By executing

  MAKE WSZ

after making changes to your source files, you can bring the whole thing up
to date.

The make-file also serves as a form of documentation of the different pieces
that contribute to the application and indicates how to recreate the program
from the source files.


From Source to .EXE

Figure 12 shows a system flowchart of the various WSZ files and how they
eventually get into the WSZ.EXE executable file.

Some of this should look normal. The CL.EXE C Compiler uses the WSZ.C source
code, and two header files to create a WSZ.OBJ object file. The command line
options may look excessive, but they are all there for a reason. The -Gw
option, for instance, adds some special Windows Prolog code to far
procedures.

LINK4.EXE is much like the normal LINK program. It uses the WSZ.OBJ file and
C .LIB library files and creates an executable WSZ.EXE file. But this .EXE
file is not the same format as the .EXE files we've been using for 5 years
with MS-DOS. These .EXE files have expanded header information, and some of
this information will come from the WSZ.DEF definition file.

One apparent oddity in this flowchart is that the resource compiler (RC.EXE)
must be run twice, once at the beginning and again at the end. This is
because the resource compiler has to do two things: First, it must compile
your ASCII .RC file into a binary .RES file, and second, it must append data
from the .RES file to your .EXE file and set up pointers in the .EXE file
header to reference each resource.

To do both these steps at once (assuming LINK4 has already created an .EXE
file), you would execute

  RC FILENAME [.RC]

This creates the compiled .RES file from your .RC file and copies the
contents of the .RES file to the .EXE file. However, this approach creates
problems with program maintenance. If you need to relink following a C
source code change, you don't need to recompile the resource script. All you
need to do is add the existing .RES data to the new .EXE file.

For this reason it's better to use RC.EXE in two separate steps:

  RC -r FILENAME [.RC]

creates the compiled .RES file from the .RC file, and

  -RC FILENAME.RES

copies the data from the .RES file to the .EXE file.

If you change the .RC file now, you'll have to recompile it with RC.EXE,
relink, then use RC.EXE to add the new compiled resources to the .EXE file.
But if you change something that affects only the C compilations (which is
more often the case), then you need only relink and add the .RES file to the
.EXE file. You don't have to recompile the resource script.


The Rewards

Building a Windows application up from the beginning is no picnic. Yet
neither is writing your own graphics routines, menu logic, and dialog
boxes──and Microsoft Windows does all that for you.


Figure 2:  WSZ.RC

Th resource script for WSZ, called WSZ.RC. This file includes definitions
for the icon, all of the displayable text strings used in the C program, a
menu, and two dialog boxes.

#include <windows.h>
#include "WSZ.h"

WhatSize ICON WSZ.ico

STRINGTABLE
    BEGIN
        IDS_NAME,   "WhatSize"
        IDS_ABOUT,  "About..."
        IDS_TITLE,  "What Size is the Window?"
        IDS_FORMAT, "%.3G %s by %.3G %s"
        ID_MILLIM,  "millimeters"
        ID_INCHES,  "inches"
        ID_PIXELS,  "pixels"
    END

WhatSize MENU
    BEGIN
        POPUP "Colors"
            BEGIN
                MENUITEM "Black on White", ID_BLACK
                MENUITEM "White on Black", ID_WHITE
            END
        MENUITEM "Units", IDM_UNITS
    END

AboutBox DIALOG 20, 20, 144, 75
    STYLE WS_POPUP | WS_DLGFRAME
    BEGIN
        CTEXT "What Size?",             -1, 37,  5,  68,  8
        ICON  "WhatSize",               -1,  9, 23,   0,  0
        CTEXT "A Windows Application",  -1,  0, 14, 144,  8
        CTEXT "Version 1.00",           -1, 38, 34,  64,  8
        DEFPUSHBUTTON "Ok",           IDOK, 53, 59,  32, 14, WS_GROUP
    END

UnitsBox DIALOG 20, 20, 100, 90
    STYLE WS_POPUP | WS_BORDER
    CAPTION "What Size Units"
    BEGIN
        RADIOBUTTON "Pixels",ID_PIXELS,20,5,60,15,WS_GROUP | WS_TABSTOP
        RADIOBUTTON "Millimeters", ID_MILLIM, 20, 25, 60, 15
        RADIOBUTTON "Inches",      ID_INCHES, 20, 45, 60, 15
        DEFPUSHBUTTON "Ok",        IDOK,      10, 70, 32, 15, WS_GROUP
        PUSHBUTTON "Cancel",       IDCANCEL,  58, 70, 32, 15
    END


Figure 4:  WSZ.H Header File

The WSZ.H header file contains numbers that are defined as macros, which
become the names in the WSZ.RC file that begin with the letters "ID".

#define IDS_NAME        101
#define IDS_ABOUT       102
#define IDS_TITLE       103
#define IDS_FORMAT      104

#define ID_PIXELS       105
#define ID_MILLIM       106
#define ID_INCHES       107
#define ID_BLACK        108
#define ID_WHITE        109

#define IDM_ABOUT       110
#define IDM_UNITS       111


Figure 5:  WinMain Function for WSZ

The WinMain procedure for WSZ. Every Windows application requires such a
procedure, which is the entry point to the application.

/*  whatsize -- Windows application in C */

#include <windows.h>
#include "wsz.h"

long FAR PASCAL MainWndProc (HWND, unsigned, WORD, LONG) ;
BOOL FAR PASCAL AboutWndProc (HWND, unsigned, WORD, LONG) ;
BOOL FAR PASCAL UnitsWndProc (HWND, unsigned, WORD, LONG) ;

FARPROC lpAbout ;
FARPROC lpUnits ;
HANDLE  hInst;
int     CurrentUnits = ID_PIXELS ;
int     CurrentColor = ID_BLACK ;

int PASCAL WinMain (hInstance, hPrevInstance, lpszCmdLine, nCmdShow)
    HANDLE hInstance, hPrevInstance;
    LPSTR  lpszCmdLine;
    int    nCmdShow;
    {
    MSG    msg;

    if (!Initialize (hInstance, hPrevInstance, lpszCmdLine, nCmdShow))
        return FALSE ;

    while (GetMessage ((LPMSG)&msg, NULL, 0, 0))
        {
        TranslateMessage ((LPMSG)&msg) ;
        DispatchMessage ((LPMSG)&msg) ;
        }
    return (msg.wParam) ;
    }


Figure 6:  Initialization Function for WSZ

The Initialization function performs several of the chores necessary to get
the application moving. The two most important chores are deining a "window
class" and a "window."

BOOL Initialize (hInstance, hPrevInst, lpszCmdLine, nCmdShow)
    HANDLE   hInstance, hPrevInst ;
    LPSTR    lpszCmdLine ;
    int      nCmdShow ;
    {
    char     *szAppName [10] ;
    char     *szAbout [10] ;
    char     *szTitle [30] ;
    WNDCLASS wndclass ;
    HWND     hWnd;
    HMENU    hMenu;

    LoadString (hInstance, IDS_NAME, (LPSTR) szAppName, 10) ;
    LoadString (hInstance, IDS_ABOUT, (LPSTR) szAbout, 10) ;
    LoadString (hInstance, IDS_TITLE, (LPSTR) szTitle, 30 ) ;

    if (!hPrevInst)
        {
        wndclass.style        = CS_HREDRAW | CS_VREDRAW;
        wndclass.lpfnWndProc  = MainWndProc;
        wndclass.cbClsExtra   = 0;
        wndclass.cbWndExtra   = 0;
        wndclass.hInstance    = hInstance ;
        wndclass.hIcon        = LoadIcon (hInstance, (LPSTR) szAppName);
        wndclass.hCursor      = LoadCursor (NULL, IDC_ARROW);
        wndclass.hbrBackground= (HBRUSH) GetStockObject (WHITE_BRUSH);
        wndclass.lpszMenuName = (LPSTR) szAppName;
        wndclass.lpszClassName= (LPSTR) szAppName;

        if (!RegisterClass ((LPWNDCLASS) &wndclass))
            return FALSE;
        }
    else
        {
        GetInstanceData(hPrevInst,(NPSTR)&CurrentUnits,sizeof(int));
        GetInstanceData(hPrevInst,(NPSTR)&CurrentColor,sizeof(int));
        }

    hWnd = CreateWindow (
            (LPSTR) szAppName,  /* class name       */
            (LPSTR) szTitle,    /* caption title    */
            WS_TILEDWINDOW,     /* windows style    */
            0,                  /* x (ignored)      */
            0,                  /* y (ignored)      */
            0,                  /* width (ignored)  */
            0,                  /* height (ignored) */
            (HWND) NULL,        /* parent (none)    */
            (HMENU) NULL,       /* menu (use class) */
            (HANDLE) hInstance, /* instance handle  */
            (LPSTR) NULL) ;     /* parameters       */

    hInst = hInstance ;

    lpAbout = MakeProcInstance ((FARPROC) AboutWndProc, hInstance) ;
    lpUnits = MakeProcInstance ((FARPROC) UnitsWndProc, hInstance) ;

    hMenu = GetSystemMenu (hWnd, FALSE) ;
    ChangeMenu (hMenu, 0, NULL, 999, MF_APPEND | MF_SEPARATOR) ;
    ChangeMenu (hMenu, 0, (LPSTR) szAbout, IDM_ABOUT,
      MF_APPEND | MF_STRING) ;


    hMenu = GetMenu (hWnd) ;
    CheckMenuItem (hMenu, CurrentColor, MF_CHECKED) ;

    ShowWindow (hWnd, nCmdShow) ;
    UpdateWindow (hWnd) ;

    return TRUE ;
    }


Figure 7:  MainWndProc Procedure for WSZ

MainWndProc is a window procedure that receives messages from windows on
everything that affects the WSZ window.

long FAR PASCAL MainWndProc (hWnd, message, wParam, lParam)
    HWND       hWnd;
    unsigned   message;
    WORD       wParam;
    LONG       lParam;
    {
    HMENU      hMenu ;
    static int CharHorzPix, CharVertPix ;
    static int ScrnHorzPix, ScrnVertPix ;
    static int ScrnHorzMil, ScrnVertMil ;
    static int WindHorzPix, WindVertPix ;

    switch (message)
        {
        case WM_CREATE:
            {
            TEXTMETRIC tm ;
            HDC        hDC = GetDC (hWnd) ;

            GetTextMetrics (hDC, (LPTEXTMETRIC) &tm) ;
            CharHorzPix = tm.tmAveCharWidth ;
            CharVertPix = tm.tmHeight ;

            ScrnHorzPix = GetDeviceCaps (hDC, HORZRES) ;
            ScrnVertPix = GetDeviceCaps (hDC, VERTRES) ;
            ScrnHorzMil = GetDeviceCaps (hDC, HORZSIZE) ;
            ScrnVertMil = GetDeviceCaps (hDC, VERTSIZE) ;

            ReleaseDC (hWnd, hDC) ;
            }
            break ;

        case WM_SIZE:
            WindHorzPix = LOWORD (lParam) ;
            WindVertPix = HIWORD (lParam) ;
            break ;

        case WM_ERASEBKGND:
            return TRUE ;

        case WM_PAINT:
            {
            PAINTSTRUCT ps ;
            char        szFormat [20] ;
            char        szUnits [20] ;
            char        szBuffer [60] ;
            float       nHorz = (float) WindHorzPix ;
            float       nVert = (float) WindVertPix ;
            RECT        rect ;

            if (CurrentUnits != ID_PIXELS)
                {
                nHorz *= (float) ScrnHorzMil / ScrnHorzPix ;
                nVert *= (float) ScrnVertMil / ScrnVertPix ;
                }
            if (CurrentUnits == ID_INCHES)
                {
                nHorz /= 25.4 ;
                nVert /= 25.4 ;
                }

            BeginPaint (hWnd, (LPPAINTSTRUCT) &ps) ;

  PatBlt (ps.hdc, 0, 0, WindHorzPix, WindVertPix,
               (CurrentColor == ID_WHITE) ? BLACKNESS : WHITENESS) ;

            if (CurrentColor == ID_WHITE)
                {
                SetTextColor (ps.hdc, RGB (255, 255, 255)) ;
                SetBkColor (ps.hdc, RGB (0, 0, 0)) ;
                }
            LoadString (hInst, IDS_FORMAT, (LPSTR) szFormat, 20) ;
            LoadString (hInst, CurrentUnits, (LPSTR) szUnits, 20) ;

            rect.bottom = WindVertPix - (rect.top  = CharVertPix) ;
            rect.right  = WindHorzPix - (rect.left = CharHorzPix) ;

            DrawText (ps.hdc, (LPSTR) szBuffer,
                sprintf(szBuffer,szFormat,nHorz,szUnits,nVert,szUnits),
                (LPRECT) &rect, DT_CENTER | DT_WORDBREAK) ;

            EndPaint (hWnd, (LPPAINTSTRUCT) &ps) ;
            }
            break;

        case WM_SYSCOMMAND:
            switch (wParam)
                {
                case IDM_ABOUT:
                    DialogBox(hInst,(LPSTR)"AboutBox",hWnd,lpAbout);
                    break;

                default:
                    return DefWindowProc(hWnd,message,wParam,lParam);
                }
            break;

        case WM_COMMAND :
            switch (wParam)
                {
                case ID_BLACK:
                case ID_WHITE:
                    hMenu = GetMenu (hWnd) ;
                    CheckMenuItem(hMenu,CurrentColor,MF_UNCHECKED);
                    CheckMenuItem (hMenu, CurrentColor = wParam,
                         MF_CHECKED) ;
                    InvalidateRect (hWnd, (LPRECT) NULL, TRUE) ;
                    break ;

                case IDM_UNITS:
                    if (DialogBox (hInst, (LPSTR) "UnitsBox", hWnd,
                              lpUnits))
                         InvalidateRect (hWnd, (LPRECT) NULL, TRUE) ;
                    break ;

                default :
                    return DefWindowProc (hWnd, message, wParam, lParam) ;
                }
            break ;

        case WM_DESTROY:
            PostQuitMessage (0) ;
            break;

        default:
            return DefWindowProc (hWnd, message, wParam, lParam) ;
            break;
        }
    return (0L) ;
    }


Figure 8:  AboutWndProc Procedure for WSZ

AboutWndProc is the window procedure for the dialog box called up by
selecting the About option from the menu.

BOOL FAR PASCAL AboutWndProc (hDlg, message, wParam, lParam)
    HWND     hDlg ;
    unsigned message ;
    WORD     wParam ;
    LONG     lParam ;
    {
    switch (message)
        {
        case WM_INITDIALOG :
            return TRUE ;

        case WM_COMMAND :
            EndDialog (hDlg, TRUE) ;
            return TRUE ;

        default:
            return FALSE ;
        }
    }


Figure 9:  UnitsWndProc Procedure for WSZ

UnitsWndProc is the window procedure for the dialog box called up by
selecting the Units option from the menu.

BOOL FAR PASCAL UnitsWndProc (hDlg, message, wParam, lParam)
    HWND       hDlg ;
    unsigned   message ;
    WORD       wParam ;
    LONG       lParam ;
    {
    static int NewUnits ;

    switch (message)
        {
        case WM_INITDIALOG :
            CheckRadioButton (hDlg,ID_PIXELS,ID_INCHES,CurrentUnits);
            SetFocus (GetDlgItem (hDlg, NewUnits = CurrentUnits)) ;
            return FALSE ;

        case WM_COMMAND :
            switch (wParam)
                {
                case ID_MILLIM:
                case ID_INCHES:
                case ID_PIXELS:
                    NewUnits = wParam ;
                    CheckRadioButton (hDlg,ID_PIXELS,ID_INCHES,NewUnits);
                    break ;

                case IDOK:
                    CurrentUnits = NewUnits ;
                    EndDialog (hDlg, TRUE) ;
                    break ;

                case IDCANCEL:
                    EndDialog (hDlg, FALSE) ;
                    break ;

                default:
                    return FALSE ;
                }
            break ;

        default:
            return FALSE ;
        }
    return TRUE ;
    }


Figure 10:  WSZ.DEF Definition File

The Definition file for WSZ, called WSZ.DEF contains information about the
program segments and procedures that LINK4, the Windows linker, requires for
constructing the .EXE file.

NAME    WhatSize

DESCRIPTION 'A Windows Application'

STUB    'WINSTUB.EXE'

CODE    MOVEABLE
DATA    MOVEABLE MULTIPLE

HEAPSIZE  1024
STACKSIZE 4096

EXPORTS
        MainWndProc     @1
        AboutWndProc    @2
        UnitsWndProc    @3


Figure 11:  Make-File for WSZ

The make-file for WSZ is a program maintainer that keeps everything up to
date. It serves as a record of the different pieces that contribute to the
application and indicates how to recreate the program from the source files.

wsz.res: wsz.rc wsz.ico wsz.h
    rc -r wsz.rc

wsz.obj: wsz.c wsz.h
    cl -d -c -W2 -AS -Gs -Gw -Oas -Zpd -FPa wsz.c

wsz.exe: wsz.obj wsz.res wsz.def
    link4 wsz, wsz/align:16, wsz/map, slibw, wsz.def
    mapsym wsz
    rc wsz.res


Figure 12:  This system flowchart of the various WSZ files shows how the
            files eventually get into the WSZ.EXE executable file.

┌──────────┐   ┌───────────┐   ┌─────────────┐   ┌─────────┐
│  WSZ.RC  │   │  WSZ.ICO  │   │  WINDOWS.H  │   │  WSZ.C  │
└─────┬────┘   └─────┬─────┘   │    WSZ.RC   │   └─┬───────┘
      └──────────┐   │         └─┬────┬──────┘     │  ╔════════════╗
                 │   │       ┌───┘    │        ┌───┘  ║   P1.EXE   ║
╔════════════╗  ╔▼═══▼═══════▼═╗  ╔═══▼════════▼═╗  ┌─►   P2.EXE   ║
║  RCPP.EXE  ◄──╢  RC.EXE(-r)  ║  ║    CL.EXE    ╟──┘ ║   P3.EXE   ║
╚════════════╝  ╚═══════╤══════╝  ╚══════╤═══════╝    ╚════════════╝
                  ┌─────▼─────┐    ┌─────▼─────┐      ┌───────────┐
                  │  WSZ.RES  │    │  WSZ.OBJ  │┌─────┤  WSZ.DEF  │
                  └─────┬─────┘    └─────┬─────┘│     └───────────┘
                        │   ╔════════════▼══╗   │ ┌───────────────┐
                        └───►               ◄───┘┌┤  WINSTUB.EXE  │
                            ║     LINK4     ◄────┘└───────────────┘
                            ║               ◄───────────┐
                            ╚═╤═══════════╤═╝        ┌──┴─────────┐
                     ┌────────▼──┐  ┌─────▼─────┐    │ SLIBC.LIB  │
            ┌────────┤  WSZ.EXE  │  │  WSZ.MAP  │    │ SLIBW.LIB  │
      ╔═════▼════╗   └───────────┘  └─────┬─────┘    │ SLIBFA.LIB │
      ║  RC.EXE  ║                  ╔═════▼════╗     │ LIBH.LIB   │
      ╚═════╤════╝                  ║  MAPSYM  ║     └────────────┘
      ┌─────▼─────┐                 ╚═════╤════╝
      │  WSZ.EXE  │                 ┌─────▼─────┐
      └───────────┘                 │  WSZ.SUM  │
                                    └───────────┘

────────────────────────────────────────────────────────────────────────────

New XENIX Version Will Be First to Run On the Intel 80386

Joe Desposito

Microsoft's XENIX(R) System V/386 is expected to be released during the
first quarter of 1987. This version of the product is especially
significant, as it is the first version of XENIX to take full advantage of a
32-bit microprocessor──namely, Intel's 80386. To learn more about XENIX 386
we went straight to the source: Martin Dunsmuir, Microsoft's XENIX
Development Manager.

MSJ: We're here to talk about Microsoft XENIX System V/386. But could you
first give us a brief background on the other versions of XENIX?

MARTIN DUNSMUIR: The product out there at the moment is XENIX 286, for which
there is a number of large OEMs (original equipment manufacturers),
particularly IBM(R), Compaq(R), Altos, Tandy, and Intel(R). There have been
two releases of XENIX 286: System 3, which went out in the '84 time frame,
and System V, which came out in '85. The first release, System 3, was really
targeted at the Intel 310 Machine. With the exception of IBM──we made a
version available on the AT──most other versions of XENIX System 3 were on
proprietary architectures. Then, when we went to System V, the emphasis
moved to the AT architecture and its clones.

Except for the Altos, which has its own architecture and is intended to be
used in a turnkey environment, all of the XENIX 286 versions are on the IBM
AT or clones──for example, IBM, Compaq, the TI Business Pro, and the Sperry
IT.

In the last year, the Intel 80386 microprocessor has appeared. And the
machines that are currently being manufactured or are on the verge of being
shipped──which use the 80386──are AT clones that replace the 80286 with the
80386. So what we're aiming at is a release of XENIX 386 that will run on
these machines. Now that's not to say that somebody like Altos, for example,
can't take the source of what we produce and make it work on their own
proprietary architecture. In fact, Altos is planning to do that──they've
already started.

MSJ: You mentioned 80386 machines. One that has already hit the marketplace
is the Compaq 386. What's your opinion of it?

DUNSMUIR: That's the machine that we've been using for development. We
actually had some of the earliest prototypes and now we have some real
models of it. It's really very good. It's very fast──about three times the
speed of the AT. The only slow part of it is the disk, which, of course,
operates at the same speed as it does on the AT. When you speed up the
processor and you don't speed up the disk in proportion, the effective speed
of the whole system obviously doesn't increase as much as that of the
processor.


The 386 Explosion

MSJ: At the fall Comdex, there is expected to be an explosion of 386
accelerator cards for the IBM AT and other 286 machines. Have you worked
with any of them?

DUNSMUIR: Well, the question really is: What machines will XENIX run on, or
rather, what does it run on so far? It runs on any machines containing an
80386 that have an AT compatible architecture. This includes the Compaq
Deskpro 386, of course, but also machines running the Intel motherboard and
386 turbo cards plugged into ATs.

MSJ: In terms of the microprocessor itself, the 80386──what are some of the
advantages that it has over the 80286, and how do these advantages relate to
XENIX?

DUNSMUIR: One advantage the 80386 has over the 80286 is that it is much
faster──about three times the speed in terms of raw CPU power. And it also
has this large address space. On the 286 your program can be very large, but
basically it is composed of 64K segments.

The problem with this is that people who have written applications for
UNIX(R) in general find it difficult to bring those applications down onto
XENIX 286. In other words, the applications are bigger than the 64K limit
that you can get with one segment. Originally we hoped to put a real UNIX
machine on everybody's desktop──or a small multiuser UNIX machine──but the
number of ISVs (independent software vendors) who actually have gone to
XENIX 286 has been somewhat less than we had hoped. That's not to say that
the volumes aren't very good. XENIX 286 is probably the single most-
installed derivative of UNIX ever. But the number of applications that have
been written specifically for XENIX 286 is smaller than we had hoped at the
outset.

With the 386, you can easily bring your application down from, say, a VAX or
a Sun or whatever, because you don't have this problem with these segments
getting in the way of your large programs.


Possible Problems

MSJ: That sounds good in theory, but in practice, won't there be some snags
when you try to port a UNIX program running on a VAX to a microcomputer like
the Compaq 386 running XENIX?

DUNSMUIR: On the VAX, the pointers and the integers in your program are all
32 bits. Now, that means that if you simply compile your program on the 286,
then it breaks because the integers on the 286 are 16 bits and the addresses
are, too──unless you use multiple segments. So you're forced to use multiple
segments.

Now, when you use multiple segments, you've got a choice: You can go to
what's called the large model, which means that the compiler automatically
generates the instructions that change the segments when it needs to. This
simulates the large address space in the 286 but reduces performance by
about 20 percent. The alternative is to rewrite your application to optimize
the use of the segments.

On the 80386, however, segments are so large that there are essentially no
segments. As a result, all you need to do is recompile, and the thing will
run. And XENIX provides the right set of subroutines for the application to
call, because it's a standard UNIX programming interface.

A caveat to this arises, for example, if the program does graphics through
some known standard interface. For instance, on the Sun they may be driving
the graphics interface directly. Then the programmer is going to have to
emulate that or provide support. But in terms of some straightforward
application like a compiler or anything that's terminal-based, the program
will just recompile and run.


A Big Change

MSJ: All the recent Intel processors like the 8088, 8086, and 80286 use 64K
segments. The 80386 processor represents a radical change, doesn't it?

DUNSMUIR: It certainly does. On the 286 you have these segments, and each
segment has a number that you load into the segment register. The segments
themselves can be up to 64K. So to actually address a piece of memory you
specify the segment and the offset, which is a 16-bit number. On the 386,
segments exist, too──except that the offsets are 32-bit numbers. This means
that once you've loaded the segment register, you can address 4 gigabytes of
memory, rather than 64K, without reloading the segment register.

On the 386 you can emulate 286 programs. You can actually make a segment
look like a 16-bit segment or a 32-bit segment. Basically, the operating
system sets up the segment descriptor table as appropriate, depending on
whether you're running a 286 or a 386 program.

MSJ: Are there other characteristics that distinguish the 80386 from its
predecessors?

DUNSMUIR: Underneath the segmentation of the 386 is also paging, which
doesn't exist on the 286. Underneath the 4-gigabyte segment are page tables,
which map each 4K piece of that address space onto some piece of physical
memory──or not, as the case may be. You don't have to actually have all of
the physical paging present in that 4-gigabyte segment. Typically, you have
only a few. A big program might have 4 megabytes, say, of actual paging
mapped. But the advantage of having the very large address space is that you
can actually put different parts of the program at completely weird,
enormous addresses. So you can say: Okay, shared memory regions, for
example, start at 2 gigabytes. But then you must make sure that the
operating system maps the shared memory regions up to the 2-gigabyte virtual
address used in the program.

This is very similar to the way it works, for example, on the VAX or a 68020
machine like the Sun. Any of these 32-bit minicomputers really do it the
same sort of way. And that's what the 386 brings you on a chip. It brings
you the minicomputer architecture. Microsoft hopes that the people who write
UNIX applications for 32-bit minicomputers like the VAX will bring their
application, which is presumably written in C, down onto XENIX 386 and then
make a low-end version available. That's one of the main thrusts.

MSJ: Where does that leave users with XENIX 286 applications?

DUNSMUIR: There are, of course, applications that have been written
specifically for XENIX 286. These will be available on XENIX 386 simply
because it runs all the 286 software. One of the advantages of the 386 is
its downward compatibility. If somebody wants a higher-performance multiuser
solution, he can just use his old XENIX-286-based programs on the 386
machine, and they'll run just fine.

MSJ: XENIX 286 was primarily aimed at the multiuser market. Will the same
hold true for XENIX 386?

DUNSMUIR: The market position of XENIX 386 will be the small, multiuser
marketplace. That's the main thrust. And that's where XENIX 286 has been
successful. However, we now have the ability to create, if you like, a
workstation with the 386, which we didn't have on the 286. So we will also
be trying to address the workstation marketplace. I know that OEMs are
planning to compete with the low-end VAX and Sun stations, and they'll offer
a very cost-effective solution if, for example, you want to do CAD/CAM or
desktop publishing, or anything like that.


DOS Overlap

MSJ: Doesn't this overlap with the potential market for MS-DOS 5.0?

DUNSMUIR: Yes. When it becomes available, MS-DOS 5.0 will offer a very good,
single-user workstation environment that will be very similar to a UNIX
workstation in many ways. The main difference between an MS-DOS 5.0 and a
XENIX 386 workstation is the existence of a UNIX market that is distinct
from any other single-user market. UNIX allows you to have an application
that will run on anything from a mainframe to a micro. In contrast,
applications designed to run under MS-DOS 5.0 won't run under any other
version. Hence, there will probably always be a UNIX workstation market
unless UNIX disappears completely. This single-user workstation group is a
separate group that we'll address with XENIX.

MSJ: Will XENIX 386 have any brand-new features?

DUNSMUIR: For the single-user workstation group, we've got to provide new
features with XENIX. The features that make a good multiuser operating
system──for example, supporting terminals──are not the sort of features. . .
well, they're a subset, but they're not really the features that you need
for a good, single-user workstation. The features that spring to mind for a
single-user workstation are windowing, some sort of graphics capability, the
ability to run 32-bit applications (which is what you get with the 386), and
a networking facility so that you can connect your workstation to a larger
machine, whatever that might be. What we're trying to do is to put together
all of these various pieces in XENIX 386.

MSJ: So XENIX System V/386 is slated to appear in the first quarter of
1987?

DUNSMUIR: Right. The beta version will be shipped to OEMs in late November.
We plan to ship them the final product in early January. Now, the time delay
for any of those OEMs to get a product out in the field is about 2 months at
least. So you probably won't see any XENIX 386 operating systems appearing
from our OEMs until something like April. But in the meantime, the Santa
Cruz Operation (SCO) will be making available a retail version of the same
software. I don't know exactly what their plans are, but I imagine that they
will make it available very early in January close to the same time that we
ship the product to the OEMs.

MSJ: But isn't SCO one of your OEMs?

DUNSMUIR: We have what's called a second-source agreement with SCO. What
that actually means is that we work together to create XENIX. They have
access on a daily basis to the code, and therefore they are in a much better
position to put together a product. In fact, in the case of XENIX 386,
they're actually doing a bit of device driver work, and so forth.

One other thing needs to be said about SCO. At the present time, if you buy
XENIX directly from SCO, you can get certain added features that we don't
provide. This added value is being incorporated into XENIX 386, and we are
committed to having functionally identical products from now on. This should
silence some criticism in the press that SCO and MS XENIX versions are not
compatible. We are very concerned about providing ISVs and end-users with a
compatible platform for their XENIX applications whether they choose to buy
XENIX from SCO or one of our other OEMs.


V/386 Toolkit

MSJ: Although XENIX 386 isn't available right now, a XENIX System V/386
Toolkit is. Can you tell us something about it?

DUNSMUIR: The XENIX System V/386 Toolkit is a special upgrade package for
Microsoft XENIX System V/286. It's for independent software developers who
want to write XENIX 386 applications now.

The Toolkit includes both the program development tools needed to create
XENIX 386 applications and the execution environment needed to run them.
Virtually all of the 386 applications developed under the Toolkit will
execute without recompilation under XENIX 386.

Program development tools include a Microsoft C compiler for the 386; a new
version of the Microsoft Macro Assembler, extended to support the 386
instruction set and addressing modes; and a debugger for 386 programs.

These tools can be installed on any computer running XENIX 286. But the
execution environment portion of the Toolkit requires not only XENIX 286,
but also a system with a 386 processor.

────────────────────────────────────────────────────────────────────────────

A New Generation of Debugging Arrives with CodeView

───────────────────────────────────────────────────────────────────────────
Also see the related articles:
  A Look at DEBUG and SYMDEB
  Codeview Command Summary
───────────────────────────────────────────────────────────────────────────

Charles Petzold

Debugging is such an awful, dirty, unglamorous, time-consuming job that
nobody likes to think much about it. Perhaps for this reason, good debugging
tools have always lagged behind other advances in language technology. It
wasn't until the introduction of SYMDEB (SYMbolic DEBugger, first included
with the Macro Assembler 3.0) that Microsoft offered programmers an
alternative to the inadequate DEBUG.

The CodeView(TM) debugger included with Microsoft's C Compiler Version 4.00,
however, represents a new generation. Just as SYMDEB added to DEBUG's
features by reading in source code and displaying symbolic references to
global variables and subroutines, CodeView advances over SYMDEB by including
symbolic local variable and subroutine names, new data display and enter
types, an 8087 math coprocessor dump, and some additional debugging
techniques.

CodeView uses a full-screen windowed display and includes a mouse, menu, and
command line interface. It can do C expression evaluation and UNIX-like
regular expression evaluation. For now, CodeView is limited to Microsoft C
4.00 and cannot yet be used for debugging Microsoft Windows applications,
but it will eventually be adapted for other languages.


Prepararation

The mechanics of preparing a program for CodeView are simple. When compiling
a program, use the /Zi switch

  MSC PROGRAM /Zi;

This option directs the compiler to include in the .OBJ file the names,
addresses, and types of all global and local variables; the names,
addresses, and return values of all global and static functions; and source
code line number references.

If you don't need all this information (perhaps for a module that's already
in good shape), you can specify that only global functions and variables and
line number information be included in the .OBJ file by using the /Zd
switch

  MSC MODULE /Zd;

This is the same switch used for preparing programs for SYMDEB.

In either case, you might also want to disable optimization with the /Od
switch. This will make it easier to correlate source code and the compiled
assembly language.

When you link, use the /CO (CodeView) switch

  LINK PROGRAM /CO;

The /CO switch directs LINK to include the debugging information from each
.OBJ file in the .EXE file together with directory paths of the .OBJ files.
CodeView uses these directory paths to search for the C source code file.
You will want to help CodeView out by keeping source code and object files
in the same subdirectory.

Both CodeView and SYMDEB are easier to use if you follow certain programming
rules. For instance, since SYMDEB can handle only global functions and
variables, you might be less inclined to use local variables or functions
defined as static. With CodeView, however, you don't have to accommodate the
debugger in this way.

The rules for programming for CodeView are generally the same as those for
writing structured readable C. You should use small modular functions. You
should keep source code statements to one line each since multiple-line
source code statements do not show up well in CodeView's combined source and
assembly display. You can get a better feel for the relationship between
source and compiled code by avoiding long, complex C statements.

On the other hand, CodeView does not show source from include files and
macros. Also, since LIB strips out the debugging information, CodeView
cannot show source code for functions retrieved from libraries, even if the
modules were compiled with the /Zi switch. For this reason you will want to
wait until certain modules have been debugged before putting them in
libraries.


Letting MAKE Help Out

The symbolic information that LINK embeds into an .EXE file for use by
CodeView can make the .EXE much larger than normal. You will not want to
distribute an .EXE file with this information because anybody looking at the
program in CodeView can learn a great deal about its inner workings from the
variable and procedure names that CodeView displays.

You can use MAKE to help out with the chore of compiling a program with or
without CodeView information. At the top of the make-file for a particular
program, define several macros

  CVC  = /Zi /Od
  CVL  = /CO
  COMP = msc $* $(CVC) ;
  LINK  = link $** $(CVL) ;

where CVC and CVL are the CodeView switches for the compile and link steps,
respectively. After the definition of these macros, you can set up the make-
file like this:

  prog.obj : prog.c
         $(COMP)
  module1.obj : module1.c
         $(COMP)
  module2.obj : module2.c
         $(COMP)
  prog.exe : prog.obj\module1.obj\module2.obj
         $(LINK)

When it is time to prepare the final .EXE file without embedded debugging
information, just undefine the macros on the MAKE command line

  MAKE prog /DCVC= /DCVL=

Alternatively, you can use the EXEPACK utility to strip debugging
information from the .EXE file.


Starting It Up

In many cases you can bring up CodeView for debugging your program with the
command line

  CV PROGRAM

However, certain situations (such as using a PC compatible or a black-and-
white monitor on a color adapter) will warrant CodeView command line
switches. These switches must be placed before the name of the program that
you're debugging.

The most important command line switches relate to how CodeView uses the
display. Because CodeView is a full-screen debugger, it must share the
display with the out-put from the program you are debugging. Depending on
the hardware installed on your system, you have several options for handling
this problem.

For systems with one video adapter, CodeView will use either video
"swapping" or video "flipping" to keep the CodeView and program output
separate.

If you have only a monochrome adapter on your system, CodeView will use the
"swapping" method. CodeView allocates some memory to save the contents of
the display. It swaps screen displays between this memory and the video
adapter memory when switching back and forth between CodeView and your
program.

If you have only a Color Graphics Adapter (CGA) or Enhanced Graphics Adapter
(EGA) on your system, CodeView will, by default, use the "flipping" option.
CodeView will use different video pages for its own display and the display
of the program being debugged. Flipping between these video pages is faster
than swapping video contents in and out of memory.

You cannot use screen flipping with a monochrome adapter because it has only
4K of memory and one video page. You also cannot use flipping on a CGA or
EGA if you are debugging a program that uses multiple video pages or
graphics. In this case, you must override the default and specify screen
swapping with the /S parameter.

Both screen flipping and screen swapping have some problems. Every time you
trace a statement, CodeView switches the display to program output and back
again. You're likely to find your head aching before you find the bug. If
you are debugging a program that directly accesses output ports on the video
adapter, CodeView may not be able to restore the exact video state when it
returns to your program output display. But there is really no alternative
to this when debugging programs using a single monitor.

These problems can be alleviated with a second display adapter. If you have
two adapters on your system, you can specify the /2 option when you bring up
CodeView, and CodeView will use the second adapter. (This option is not in
the manual, but it's mentioned in the C 4.00 README.DOC file.) Unfortunately
(as also mentioned in this README file), the /2 option does not allow the
mouse to work on the debugging display.

As with SYMDEB, you can redirect CodeView input and output through a serial
port and use a separate debugging terminal. However, you lose many of the
advantages of working with CodeView in a full-screen mode.


Menus and the Mouse

Although the pull-down menu interface and mouse support in CodeView make it
easier to use than most debuggers, early encounters with CodeView can be
quite confusing. There are actually several user interfaces──a SYMDEB-like
command line, a Windows-like menu, the PC function keys, and the mouse. Each
of these different interfaces has some distinct features and also some
overlap. You can usually do things in several different ways, and it is
precisely this flexibility that makes CodeView a bit awkward at first.

On entry to CodeView, the screen is divided into two windows called Display
and Dialog. The Display window shows either your source code, or source code
combined with the compiled assembly language code.

The Dialog window at first appears to be SYMDEB running in a window.
However, you'll find that CodeView is missing a few DEBUG and SYMDEB
commands (Fill, Move, Compare) and adds other valuable functions, such as
expression evaluation, symbol examination, a file browser with a search
capability, and additional methods to set breakpoints.

Everything you can do in CodeView is done by entering commands in the Dialog
window. This allows you to use CodeView in a SYMDEB-like teletype mode and
still retain full functionality. Some commands (Dump, Enter, Assemble) must
be entered in the Dialog window and cannot be done any other way.

The menu, mouse, and function key interfaces duplicate many of the more
common commands. They do not add functionality but they do provide ease of
use.

Let's explore some of the ways you can use CodeView by examining the guts of
debugging──tracing through code.


Trace, Go, and Break

Users of DEBUG and SYMDEB are familiar with the Trace and Go commands. DEBUG
3.x and SYMDEB also include a Proceed command. CodeView implements all three
of these methods to trace code.

The Trace command uses the Intel microprocessors' single-step trap to
single-step through instructions. Just as in DEBUG and SYMDEB, you can do a
one-instruction trace in CodeView by entering T in the Dialog window. If
you're in assembly mode, you'll step through assembly language instructions.
In source code mode, you'll step through source code instructions. You can
also do a one-instruction trace by pressing the F8 function key or clicking
Trace! on the menu with the left mouse button. A multiple-instruction trace
is possible only through the Dialog window by including a value after the T.

The Program Step command (which was called the Proceed command when
introduced in DEBUG 3.0) is similar to the Trace command except that it will
not trace through subroutine calls or software interrupts. This is good for
skipping through BIOS calls or subroutines that you know work. You can
Program Step by entering P in the Dialog window, pressing F10, or clicking
Trace! on the menu with the right mouse button.

Note that Program Step works by setting a breakpoint following the call or
interrupt that it skips through. This breakpoint will not work in ROM or
with calls and interrupts to routines that adjust the return address.

The Go command just executes code until it hits a breakpoint. You can set a
breakpoint at the same time you do a Go by entering G in the Dialog window
with a breakpoint expressed as an address, line number, or symbolic label.
Alternatively, you can position the cursor in the Display window at the
break line and press F7. For a Go command with no break, press F5. With the
mouse, you can Go to a particular line by clicking the line with the right
mouse button. For a no-break Go, click Go! on the menu.

Users of SYMDEB are also familiar with setting explicit breakpoints. The
advantage of this method over specifying a breakpoint in the Go command is
that you can set more than one of them, and they are sticky──the breakpoint
will remain in effect until you disable it or clear it.

The breakpoint command in CodeView works like the one in SYMDEB. Twenty
breakpoints are available. Setting a breakpoint with the mouse is very
easy──you just click on the line with the left mouse button. You can also
use the keyboard to move the cursor to the break line and press F9.


Beyond SYMDEB

Now let's look at some of the ways that CodeView goes beyond the
functionality of SYMDEB. We have watches, watchpoints, and tracepoints. They
all appear on the same menu, they are listed in the same window, and they
have confusingly similar names. They are not the same.

A "watch" is a C expression using any global or currently available local
variable. The expression is displayed in the Watch window along with the
calculated value. For instance, if you have a routine that writes directly
to the video display memory using two variables called row and col, you
might want to keep a watch on the implied display address referenced by
these two variables. Your watch would look like this:

  2 * (row + 80 * col)

The C expression evaluator can even handle calls to your program's C
functions. This lets you test individual functions by passing experimental
values to them.

A "watchpoint" is generally a Boolean expression, again expressed using C
syntax with global and currently available local variable names. When the
watchpoint becomes true (i.e., is nonzero), CodeView will break and return
control to you.

For both watches and watchpoints, CodeView must repeatedly evaluate the
expression while single-stepping through code. For watches, it just displays
the new value. For watchpoints, it breaks if the expression evaluates to a
nonzero value.

A "tracepoint" is similar to a watchpoint in that it can cause a break in
program execution. But while a watchpoint depends on the evaluation of an
expression, a tracepoint will break when an area of memory changes. This is
much easier and faster for CodeView to do, but is not quite as flexible for
the user.

For instance, suppose you had a for loop that increments the variable i,
such as

  for (i = 0; i < 100; i++)

If you wanted to break every time that i changed value, you could set a
tracepoint that is simply the expression

  i

But if i is a registered variable, the tracepoint would not work, because i
does not refer to an area of memory.

Also, if you wanted to break every ten cycles through, you could not set a
tracepoint that looks like

  i % 10

because "i % 10" does not refer to a memory location. What you really need
is a watchpoint that looks like this:

  i % 10 == 0


Watching Tracepoints

In debugging any program it is advisable to try to localize your problem
before setting either watchpoints or tracepoints. Watchpoints take longer to
evaluate than tracepoints, but they do not need to refer to memory
locations. Here's a simple rule: When you think you need to set a watchpoint
or tracepoint, try to do it as a tracepoint first. If you can't, use a
watchpoint.

Watchpoints and tracepoints both require some time at every program step.
For real-time applications, you may need a hardware debugger.


Null Pointers

The ability to test the contents of any variable or any region of memory
continually is a very powerful debugging tool. For instance, you may be
familiar with the run-time message

  error 2001: Null pointer assignment

At the very beginning of your program's data segment is a small area of
memory containing some zeros and the Microsoft copyright notice. The clean-
up exit code calculates a checksum on this memory. If the memory has been
changed, the "Null pointer assignment" message is displayed.

In C, a null pointer is an invalid pointer. If the beginning of the data
segment has been changed, then it may very well be the result of using a
null pointer. The message you get doesn't mean you've just assigned 0 to a
pointer. It means that you've actually used that pointer to write something
into memory.

You can find the buggy code that does this by setting a tracepoint on this
memory. From the command line of the Dialog window, you can enter

  TPB 0 L 8

This means "Set a Tracepoint of type Byte, starting at address 0 for a
Length of 8." CodeView displays the current values in a Dump-like format.

Or you can do essentially the same thing as an expression from the
Tracepoint option of the Watch menu

  *((double *) 0)

The contents of this double pointer to zero are the eight bytes starting at
address 0. When this memory is changed, CodeView will break and show you
where it happened.

If you have a particular character string getting chewed up or an array
picking up some strange values or even code that gets destroyed, you can set
a tracepoint at the variable or the explicit address, and CodeView will
break when the damage happens.


The Panic Button

CodeView also supports dynamic breaking using the SysReq key on the PC-AT.
The SysReq key usually works to regain control when your program seems to
avoid the breakpoints you set for it. The Calls option on the menu (or the K
command in the Dialog window) displays a stack trace. The stack trace is
good for answering the question "Where am I and how did I get here?" It
displays a list of nested subroutines, the parameters passed to them, and
(when the command is entered in the Dialog window) the line numbers where
these routines were called.


The Caveats

Some warnings about CodeView:

First, if you've been using DEBUG or SYMDEB, you should be aware that all
the CodeView commands use a civilian form of notation called base-10 or
decimal. If you enter D 197F, you'll get an error message. You should have
typed D 6527 or D 0x197F instead. You can change the radix to hexadecimal if
you can't get accustomed to this. (Dumps, assembly language listings, and
register contents are displayed in hexadecimal regardless.)

However, be aware that watch, watchpoint, and tracepoint expressions also
use the radix. If you set the radix to 16, the numbers you type in the
expressions will also be interpreted as hexadecimal. For instance, this is
the watch I showed earlier:

  2 * (row + 80 * col)

After radix is set to 16, the 80 is interpreted as hexadecimal and would
actually be the decimal value 128. If you'll be changing the radix, write
expressions with explicit hexadecimal or decimal prefixes, such as

  2 * (row + 0x50 * col)
or
  2 * (row + 0n80 * col)

Second, CodeView 1.00 has at least one bug in its assembly and disassembly
logic regarding the DWORD data type (typically used in floating point
arithmetic). It treats DWORDs as WORDs.

Finally, don't get rid of SYMDEB. CodeView itself uses 160K of memory, and
.EXEs prepared for CodeView are larger than normal to include the symbol
information, so you may have problems with large programs. Go back to SYMDEB
for those.

SYMDEB is also easier to use for some chores, such as taking a quick look at
some disassembled ROM code, printing a disassembly, or creating short
assembly language .COM files. For exploration and experimentation, you'll
still think SYMDEB. For serious debugging, you'll definitely want to use Code

───────────────────────────────────────────────────────────────────────────
A Look at DEBUG and SYMDEB
───────────────────────────────────────────────────────────────────────────

Remember the "good" old days? you'd start off with and innocent looking
peice of C code:

mainmenu ()
        {
        int i, code, good, donw = 0 ;

        do
                {
                topline (atl) ;
                menutype ("MAIN MENU", at3) ;

                clrwin (6, 10, 24, 69, at2) ;
                clrwin (6, 0, 24, 9, at3) ;
                clrwin (6, 70, 24, 79, at3) ;

                writestr ( 7, 21, "Press:", at2) ;

But when it came time to do a little debugging in DEBUG, all you saw is
something that just doesn't look the same:

-u 24a
1434:024A 55           PUSH      BP
1434:024B 8BEC         MOV       BP,SP
1434:024D V80800       MOV       AX,0008
1434:0250 E8881C       CALL      1EDB
1434:0253 57           PUSH      DI
1434:0254 56           PUSH      SI
1434:0255 C746FE0000   MOV       WORD PTR [BP-02],0000
1434:025A FF36A241     PUSH      [41A2]
1434:025E E8B304       CALL      0714
1434:0261 83C402       ADD       SP,+02
1434:0264 FF36A641     PUSH      [41A6]
1434:0268 B86E01       MOV       AX,016E
1434:026B 50           PUSH      AX
1434:026C E8E004       CALL      074F
1434:026F 83C404       ADD       AP,+04
1434:0272 FF36A441     PUSH      [41A4]

Are we really sure it's the same program? Fortunately, SYMDEB took some of
the guesswork out of debugging (below). Today, the CodeView debugger
included with the Microsoft C Compiler 4.00 makes debugging even less
painful.

-u _mainmenu
12:             {
_TEXT:_mainmenu:
1AA4:024A 55           PUSH      BP
1AA4:024B 8BEC         MOV       BP,SP
1AA4:024D B80800       MOV       AX,0008
1AA4:0250 E8881C       CALL      _chkstk
1AA4:0253 57           PUSH      DI
1AA4:0254 56           PUSH      SI
20:            int i, code, good, done = 0 ;
1AA4:0255 C746FE0000   MOV       Word Ptr [BP-02],0000
24:                   topline (atl) ;
1AA4:025A FF36A241     PUSH      [41A2]
1AA4:025E E8B304       CALL      _topline
1AA4:0261 83C402       ADD       SP,+02

───────────────────────────────────────────────────────────────────────────
Codeview Command Summary
───────────────────────────────────────────────────────────────────────────

╓┌─────────────┌────────────────────┌────────────┌────────────┌──────────────╖
Command       Dialog Window        Menu         Mouse        Function Key

Assemble      A (address)

Breakpoint    BC list:*            Run/Clear    Left click   F9 (cursor on
Clear                              Breakpoints               break line)

Breakpoint    BD list:*
Disable

Breakpoint    BE list:*
Enable
Command       Dialog Window        Menu         Mouse        Function Key
Enable

Breakpoint    BL
List

Breakpoint    BP (address)                      Left click   F9 (cursor on
              (passcount)                       break line   break line)
              (commands)

Dump Data     D (type) (range)

Enter Data    E (type) address
              (list)

Execute       E                    Run/Execute

Go            G                    Go!          Click Go!    F3

Goto          G (break                          Right click  F7 (cursor on
              address)                          break line   break line)
Command       Dialog Window        Menu         Mouse        Function Key
              address)                          break line   break line)

Help          H                    View/Help                 F1

Stack Trace   K                    Calls

Restart       L                    Run/Restart
              (arguments)

Restart & Go                       Run/Start

Radix         N (radix)

Program step  P (count)                         Right click  F10
                                                Trace !

Quit          Q                    File/Quit

Register      R                    Options/                  F2
Display                            Registers
Command       Dialog Window        Menu         Mouse        Function Key
Display                            Registers

Register      R (register)                      Click on
Change        ((=)                              Flag
              expression))                      Mnemonic

Set Mode -    S +                  View/Source               F3
Source

Set Mode -    S -                  View/                     F3
                                   Assemble

Trace         T (count)            Trace!       Left click   F8
                                                Trace!

Tracepoint    TP? expression       Watch/
              (,format)            Tracepoint
              TP (type) range

Unassemble    U (range)
Command       Dialog Window        Menu         Mouse        Function Key
Unassemble    U (range)

View File     V (. (filename:)     File/Load
              line)
              V (expression)

Watch         W? expression        Watch/Add
              (,format)            Watch
              W(type) range

Watch List    W

Watchpoint    WP? expression       Watch/
                                   Watchpoint

Examine       X? (module!)
Symbol        (function.)
              (symbol) (*)

Examine       X*
Command       Dialog Window        Menu         Mouse        Function Key
Examine       X*
Module Names

Delete Watch  Y number             Watch/Delete
                                   Watch

8087 Dump     7

Display       ?expression          View/
                                   Evaluate

Expression    (,format)
Display       .
Location

Redraw        .@
Screen

Screen        \                    View/Output
Exchange
Command       Dialog Window        Menu         Mouse        Function Key
Exchange

Search        /(expression)        Search/Find

Search Next   /                    Search/Next
Search                             Search/
Previous                           Previous

Search Label  V (expression)       Search/Label

Shell to DOS  !                    File/Shell

Tab Size      # number


────────────────────────────────────────────────────────────────────────────

Ask Dr. Bob!

Peeks and Pokes

Dear Dr. Bob,

In my programs I often have to get at memory outside my program segment, say
to retrieve values from the BIOS data area or to write directly to the
display. In BASIC I can use PEEK and POKE. How can I do PEEKs and POKEs in
C?──"C"urious

Dear "C"urious,

Very easily. The flexibility you have using pointers in C makes this job
almost trivial. For instance, if you need to retrieve the current video mode
(located at address 0040:0049 in the BIOS data area), you can use the
statement in Figure 1. The 0x400049L is a long integer containing the
segment and offset address of the value you want to access. The (char far *)
casts this number into a far pointer to a character. The indirection
operator * retrieves the 1-byte value stored at this pointer.

You can also use a similar construction to store values, as shown in
Figure 2. Obviously, in this example, you would not do this unless your
program has manually changed the video mode and you want the BIOS data area
to agree with what you have done.

If you have to reference data outside your program frequently, you might
want to set up a couple of macros, as shown in Figure 3, where s and o are
the segment and offset parts of the far address. You would use MEMC for 1-
byte characters and MEMI for integers. The examples in Figure 3 would then
look like Figure 4.

If you need a far pointer that accesses the IBM Color Graphics Adapter, you
could define it as shown in Figure 5.


Interrupts

Dear Dr. Bob,

I've been using the intdos and int86 functions included with the Microsoft C
3.0 compiler to call DOS and BIOS routines directly. I haven't experienced
many problems. However, I recently tried to use int86 for the DOS Interrupts
0x25 and 0x26 (which read and write absolute sectors on a disk) and I can't
get it to work. For instance, this program should read the first sector of a
drive A: disk into the array called buffer:

  #include <dos.h>
  main ()
  {
  char    buffer [512];
  union   REGS regs;
  regs.h.al=0;
  regs.x.bx=(int)buffer;
  regs.x.cx=1;
  regs.x.dx=0;
  int86 (0x25, &regs, &regs);
  }

But this program crashes. What's the problem?──Puzzled

Dear Puzzled,

Interrupts 0x25 and 0x26 are a little different from the other DOS and BIOS
interrupts because they leave the original flags on the stack. The stack
must be adjusted after returning from the interrupt. The int86 function
included with C 3.0 did not make this adjustment.

The solution to your problem is as simple as an upgrade. The int86 function
in Microsoft C 4.0 specifically checks for Interrupts 0x25 and 0x26 and
adjusts the stack after the interrupt function returns control.


Arrays and Pointers

Dear Dr. Bob,

I've been programming in C for a while now, but I still get confused about
the relationship between arrays and pointers. For instance, I can define two
variables like this:

  char str1[] = "This is a string" ;
  char *str2 = "This is a string" ;

For some purposes, str1 and str2 appear to work the same. Other times,
however, it's obvious that they are not the same. What is the difference
between a character array and a pointer to a character string, and when
should I use one instead of the other.──Unsure

Dear Unsure,

Both str1 and str2 may be used as pointers that address the first element of
the string. Both

  puts (str1) ;

and

  puts (str2) ;

print the string on the display. It may help to think of str2 as a pointer
to the string and str1 as shorthand notation for &str1[0], which is a
pointer to the first element of the array.

You can see what the compiler does with these two definitions by compiling
with the /Fc switch. The compiler creates a combined source code and
assembly code listing created as a file with the .COD extension.

If both str1 and str2 are defined at the external level (outside of any
function), then str1 is compiled into the assembly language statement shown
in Figure 6, while str2 is compiled in the manner shown in Figure 7.
The pointer definition takes up 2 additional bytes of memory.

When you define and initialize str1, you are allocating 17 bytes to hold the
string and the terminating zero. When you define str2, however, you are
really only allocating 2 bytes for the pointer. The initialization directs
the compiler to store in str2 the address of the string. In theory, this
string should be treated as "read-only" (but nothing bad will happen if you
try to write into it). For str1, you've defined the whole string, so you can
read from it and write to it.

Again in theory, if you also define

  char str3[] = "This is a string" ;

and

  char *str4 = "This is a string" ;

then str1 and str3 must define two separate strings. However, it would be
legitimate for a compiler to initialize str2 and str4 as pointers to the
same string. (The Microsoft C Compiler will not do this.)

For both str1 and str2, you can reference characters in the strings using
either array notation or indirection. All of these statements will then put
the character 's' into the character variable ch:

  ch = *(str1 + 3) ;
  ch = str1[3] ;
  ch = *(str2 + 3) ;
  ch = str2[3] ;

The assignment statements using str1 are compiled into assembly language
statements that look something like this:

  mov al,[_str1 + 3]
  mov [_ch],al

However, an extra assembly language step is required for the assignments
using str2 because the address of the string must be retrieved from str2
before the string can be referenced:

  mov bx,[_str2]
  mov al,[bx + 3]
  mov [_ch],al

If str1 and str2 are defined inside a function, then str1 must be defined as
static:

  static char str1[] = "This is a string" ;

because arrays can't be initialized inside functions. However, you can
define str2 either way:

  char *str2 = "This is a string" ;

or

  static char *str2 = "This is a string" ;

In the first case, 2 bytes will be allocated on the function's stack frame
for str2, and the function will store the address of the string in that
location. In the second case, the str2 pointer variable is stored in static
memory just as if it were defined outside the function.

So far it looks like the array definition is preferable to the pointer
definition, but this is not always the case. One important distinction is
that str2 is an lvalue, but str1 is not; that is, you can assign another
pointer to str2. You can say

  str2 = str1 ;

but you cannot say

  str1 = str2 ;

If you go back and look at the assembly language code for the str1
definition, you will see that this second statement makes no sense.

Initialized strings are more efficient when defined as an array. However,
if you need to use the variable name as a pointer to other strings, then
you must use a pointer definition.


Recognizing Windows

Dear Dr. Bob,

When I try to execute a Windows application on the DOS command level, I get
the message "This program requires Microsoft Windows." How does a Windows
application determine whether it's running under Windows or running under
plain MS-DOS?──Wondering

Dear Wondering,

It doesn't. Although Windows programs have an .EXE extension, the format of
the .EXE file is different from the DOS .EXE format. This "new format
executable" is created by LINK4, the Microsoft Windows linker. Only the
Windows loader knows about the new format of the .EXE file; MS-DOS does not.
But the new format executable is constructed in such a way that it appears
to MS-DOS to be an old format executable.

The program that runs when Microsoft Windows loads the .EXE file is the
Windows application. The program that runs when MS-DOS loads the .EXE file
is a small piece of code that prints the message "This program requires
Microsoft Windows."

The new format executable is required to give Microsoft Windows more
information about the program. Windows must know which segments of the
program are code and which are data, which segments it can move around
in memory and

which segments must be fixed, whether a segment can be loaded immediately or
only when it is needed, and so forth.

The new format executable also contains support for resources (menus, icons,
cursors, bitmaps, dialog boxes, etc.) that Windows loads from the disk as
the application requires them. All calls to Windows functions from the
application appear in the new format executable as dummied-out far calls.
The Microsoft Windows loader resolves these calls based on a table that is
also within the .EXE file.

The program that runs when MS-DOS attempts to execute the Windows
application can be any .EXE file and not necessarily the standard one. You
could even use a non-Windows version of your application for that file.


Figure 1:

videomode = *(char far *)0x400049L ;


Figure 2:

*(char far *)0x400049L = videomode ;


Figure 3:

#define MEMC(s,o) (*(char far *)((long)(s)<<16|(o)))
#define MEMI(s,o) (*(int far *)((long)(s)<<16|(o)))


Figure 4:

videomode = MEMC (0x40, 0x49) ;
MEMC (0x40, 0x49) = videomode ;


Figure 5:

int far *colorscreen = 0xB8000000L ;


Figure 6:

_str1    db "This is a string", 0


Figure 7:

label    db "This is a string", 0
_str2    dw label
```

{% endraw %}
