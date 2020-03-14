---
layout: page
title: Intel 8087 FPU Information
permalink: /documents/manuals/intel/8087/
redirect_from: /pubs/pc/reference/intel/8087/
---

From the *iAPX 86 [8086], 88 [8088] USER'S MANUAL, AUGUST 1981*, p.S-1, "THE 8087 NUMERIC DATA PROCESSOR":

> **S.1 Processor Overview**

> The 8087 Numeric Data Processor is a coprocessor that performs arithmetic and comparison operations on a
variety of numeric data types; it also executes numerous built-in transcendental functions (e.g., tangent and
log functions). As a coprocessor to a maximum mode 8086 or 8088, the NDP effectively extends the register and
instruction sets of the host CPU and adds several new data types as well. The programmer generally does not
perceive the 8087 as a separate device; instead, the computational capabilities of the CPU appear greatly expanded.

> ***Evolution***

> In the mid-1970's, Intel made the commitment to expand the computational capabilities of microprocessors
from addition and subtraction of integers to an array of widely useful operations on real numbers. (Real numbers
encompass integers, fractions, and irrational numbers such as π and √2.) In 1977, the corporation adopted a
standard for representing real numbers in a "floating point" format. Intel's Floating Point Arithmetic Library
(FPAL) was the first product to utilize this standard format. FPAL is a set of subroutines for the 8080/8085
microprocessors. These routines perform arithmetic and limited standard functions on single precision (32-bit)
real numbers; an FPAL multiply executes in about 1.5 ms (1.6 MHz 8080A CPU). The next product, the iSBC 31O™
High Speed Math Unit, essentially implements FPAL in a single iSBC™ card, reducing a single-precision multiply
to about 100 µs. The Intel® 8232 is a single-chip arithmetic processor for the 8080/8085 family. The 8232 accepts
double precision (64-bit) operands as well as single precision numbers. It performs a single precision multiply in
about 100 µs and multiplies double precision numbers in about 875 µs (2 MHz version).

> In 1979, a working committee of the Institute for Electrical and Electronic Engineers (IEEE) proposed an
industry standard for minicomputer and microcomputer floating point arithmetic*. The intent of the standard is
to promote portability of numeric programs between computers and to provide a uniform programming environment that
encourages the development of accurate, reliable software. The proposed standard specifies requirements and options
for number formats as well as the results of computations on these numbers. The floating point number formats are
identical to those previously adopted by Intel and used in the products described in this section.

> *J. Coonen, W. Kahan, J. Palmer, T. Pittman, D. Stevenson, "A Proposed Standard for Binary Floating Point Arithmetic,"
ACM SIGNUM Newsletter, October 1979.

> The 8087 Numeric Data Processor is the most advanced development in Intel's continuing effort to provide improved
tools for numerically-oriented microprocessor applications. It is a single-chip hardware implementation of the
proposed IEEE standard, including all its options for single and double precision numbers. As such, it is compatible
with previous Intel numerics products; programs written for the 8087 will be transportable to future products that
conform to the proposed IEEE standard. The NDP also provides many additional functions that are extensions to the
proposed standard.

> ***Performance***

> The 8087 multiplies 32-bit and 64-bit real numbers in about 19 µs and 27 µs, respectively. Of course, the actual
performance of the NDP in a given system depends on numerous application-specific factors.

> Table S-1 compares the execution times of several 8087 instructions with the equivalent operations executed in
software on a 5 MHz 8086. The software equivalents are highly optimized assembly language procedures from the 8087
emulator, an NDP development tool discussed later in this section.

> The performance figures quoted in this section are for operations on real (floating point) numbers. The 8087
also has instructions that enable it to utilize fixed point binary and decimal integers of up to 64 bits and 18 digits,
respectively. Using an 8087, rather than multiple precision software algorithms for integer operations, can provide
speed improvements of 10-100 times.

		Table S-1. 8087 Emulator Speed Comparison
	 (Approximate Execution Time in µs, 5 MHz Clock)
	
	Instruction                  8087   8086 Emulation
	
	Multiply (single precision)  19     1,600
	Multiply (double precision)  27     2,100
	Add                          17     1,600
	Divide (single precision)    39     3,200
	Compare                       9     1,300
	Load (single precision)       9     1,700
	Store (single precision)     18     1,200
	Square root                  36    19,600
	Tangent                      90    13,000
	Exponentiation              100    17,100

> The 8087's unique coprocessor interface to the CPU can yield an additional performance increment beyond that
of simple instruction speed. No overhead is incurred in setting up the device for a computation; the 8087 decodes
its own instructions automatically in parallel with the CPU. Moreover, built-in coordination facilities allow the
CPU to proceed with other instructions while the 8087 is simultaneously executing its numeric instruction.
Programs can exploit this processor parallelism to increase total system throughput.

> ***Usability***

> Viewed strictly from the standpoint of raw speed, the 8087 enables serious computation-intensive tasks to be
performed by microprocessors for the first time. The 8087 offers more than just high performance, however.
By synthesizing advances made by numerical analysts in the past several years, the NDP provides a level of usability
that surpasses existing minicomputer and mainframe arithmetic units. In fact, the charter of the 8087 design team was
first to achieve exceptional functionality and then to obtain high performance.

> The 8087 is explicitly designed to deliver stable, accurate results when programmed using straightforward "pencil
and paper" algorithms. While this statement may seem trivial, experienced users of "floating point processors" will
recognize its fundamental importance. For example, most computers can overflow when two single precision floating
point numbers are multiplied together and then divided by a third, even if the final result is a perfectly valid
32-bit number. The 8087 delivers the correctly rounded result. Other typical examples of undesirable machine behavior
in straightforward calculations occur when solving for the roots of a quadratic equation:

	-b ± √b^2 - 4ac
	---------------
	      2a

> or computing financial rate of return, which involves the expression: (1+i)^n. Straightforward algorithms will not
deliver consistently correct results (and will not indicate when they are incorrect) on most machines. To obtain
correct results on traditional machines under all conditions usually requires sophisticated numerical techniques that
are foreign to most programmers. General application programmers using straight-forward algorithms will produce much
more reliable programs on the 8087. This simple fact greatly reduces the software investment required to develop safe,
accurate computation-based products.

> Beyond traditional numerics support for "scien-tific" applications, the 8087 has built-in facilities for "commerical"
computing. It can process decimal numbers of up to 18 digits without round-off errors, and it performs exact arithmetic
on integers as large as 2^64. Exact arithmetic is vital in accounting applications where rounding errors may introduce
money losses that cannot be reconciled.

> The NDP contains a number of facilities that can optionally be invoked by sophisticated users. Examples of these
advanced features include two models of infinity, directed rounding, gradual underflow, and traps to user-written
exception handling software.

> ***Programming Interface***

> The combination of an 8086 or 8088 CPU and an 8087 generally appears to the programmer as a single machine. The 8087,
in effect, adds new data types, registers, and instructions to the CPU. The programming languages and the coprocessor
architecture take care of most interprocessor coordination automatically.

> Table S-2 lists the seven 8087 data types. Internally, the 8087 holds all numbers in the temporary real format; the
extended range and precision of this format are key contributors to the NDP's ability to consistently deliver stable,
expected results. The 8087's load and store instructions convert operands between the other formats and temporary real.
The fact that these conversions are made, and that calculations may be performed on converted numbers, is transparent
to the programmer. Integer operands, whether binary or decimal, yield correct integer results, just as real operands
yield correct real results. Moreover, a rounding error does not occur when a number in an external format is converted
to temporary real.

	                            Table S-2. Data Types
	
	    Data Type         Bits      Significant Digits      Approximate Range
	                                   (Decimal)                (Decimal)
	
	    Word Integer      16                4                     -32,768 <= X <= +32,767
	    Short Integer     32                9                     -2x10^9 <= X <= +2x10^9
	    Long Integer      64                18                   -9x10^18 <= X <= +9x10^18
	    Packed Decimal    80                18                   -99...99 <= X <= +99...99
	    Short Real*       32                6-7              8.43x10^-37 <= |X| <= +3.37x10^38
	    Long Real*        64                15-16           4.19x10^-307 <= |X| <= +1.67x10^308
	    Temporary Real    80                19              3.4x10^-4932 <= |X| <= +1.2x10^4932
	
	    *The short and long real data types correspond to the single and double precision data types
	    defined in other Intel numerics products.

> Computations in the 8087 center on the processor's register stack. These eight 80-bit registers provide the
equivalent capacity of 40 of the 16-bit registers found in typical CPUs. This generous register space allows more
constants and intermediate results to be held in registers during calculations, reducing memory access and consequently
improving execution speed as well as bus availability. The 8087 register set is unique in that it can be accessed both
as a stack, with instructions operating implicitly on the top one or two stack elements, and as a fixed register set,
with instructions operating on explicitly designated registers.

> Table S-3 lists the 8087's major instructions by class. Assembly language programs are written in A8M-86, the
8086/8088/8087 common assembly language. A8M-86 provides directives for defining all 8087 data types and mnemonics
for all instructions. The fact that some instructions in a program are executed by the 8087 and others by the CPU is
usually of no concern to the programmer. All 8086/8088 addressing modes may be used to access memory-based 8087
operands, enabling convenient processing of numeric arrays, structures, based variables, etc.

	                       Table S-3. Principal Instructions
	
	    Class                   Instructions
	
	    Data Transfer           Load (all data types), Store (all data types), Exchange
	
	    Arithmetic              Add, Subtract, Multiply, Divide, Subtract Reversed, Divide Reversed,
	                            Square Root, Scale, Remainder, Integer Part, Change Sign,
	                            Absolute Value, Extract
	
	    Comparison              Compare, Examine, Test
	
	    Transcendental          Tangent, Arctangent, 2^x-1, Y*Log2(X + 1), Y*Log2(X)
	
	    Constants               0, 1, π, Log10(2), Loge(2), Log2(10), Log2(e)
	
	    Processor Control       Load Control Word, Store Control Word, Store Status Word,
	                            Load Environment, Store Environment, Save, Restore, Enable Interrupts,
	                            Disable Interrupts, Clear Exceptions, Initialize

> NDP routines may also be written in PL/M-86, Intel's high-level language for the 8086 and 8088 CPUs. PL/M-86
provides the programmer with access to many 8087 facilities while reducing the programmer's need to understand the
architecture of the chip.

> Two features of the 8087 hardware further simplify numeric application programming. First, the 8087 is invoked
directly by the programmer's instructions. There is no need to write instructions that "address" the NDP as an "I/O
device", or to incur the overhead of setting up a DMA operation to perform data transfers. Second, the NDP
automatically detects exception conditions that can potentially damage a calculation at run-time. On-chip exception
handlers are automatically invoked by default to field these exceptions so that a reasonable result is produced and
execution may proceed without program intervention. Alternatively, the 8087 can interrupt the CPU and thus trap
to a user procedure when an exception is detected.

> Besides the assembler and compiler, Intel provides a software emulator for the 8087. The 8087 emulator (E8087)
is a software package that provides the functional equivalent of an 8087; it executes entirely on an 8086 or 8088 CPU.
The emulator allows 8087 routines to be developed and checked out on an 8086/8088 execution vehicle before prototype
8087 hardware is operational. At the source code level, there is no difference between a routine that will ultimately
run on an 8087 or on a CPU emulation of an 8087. At link time, the decision is made whether to use the NDP or the
software emulator; no re-compilation or re-assembly is necessary. Source programs are independent of the numeric
execution vehicle: except for timing, the operation of the emulated NDP is the same as for "real hardware". The
emulator also makes it simple fora product to offer the NDP as a "plug-in" performance option without the necessity
of maintaining two sets of source code.

> ***Hardware Interface***

> As a coprocessor to an 8086 or 8088, the 8087 is wired directly to the CPU. The CPU's queue status lines (QSO and QS1)
enable the NDP to obtain and decode instructions in synchronization with the CPU. The NDP's BUSY signal informs the
CPU that the NDP is executing; the CPU WAIT instruction tests this signal to ensure that the NDP is ready to execute
a subsequent instruction. The NDP can interrupt the CPU when it detects an exception. The NDP's interrupt request line
is typically routed to the CPU through an 8259A Programmable Interrupt Controller.

> The NDP uses one of its host CPU's request/grant lines to obtain control of the local bus for data transfers (loads
and stores). The other CPU request/grant line is available for general system use, for example, by a local 8089 
Input/Output Processor. A local 8089 may also be connected to the 8087's RQ/GT1 line. In this configuration, the 8087
passes the request/grant handshake signals between the CPU and the IOP when the 8087 is not in control of the local bus.
When it is in control of the bus, the 8087 relinquishes the bus (at the end of the current bus cycle) upon a request
from the connected IOP, giving the IOP higher priority than itself. In this way, two local 8089's can be configured in
a module that also includes a CPU and an 8087.

> All processors utilize the same clock generator and system bus interface components (bus controller, latches,
transceivers, and bus arbiter). Thus, no additional hardware beyond the 8087 is required to add powerful computational
capabilities to an 8086- or 8088-based system.

> **S.2 Processor Architecture**

> The NDP is internally divided into two processing elements, the control unit (CU) and the numeric execution unit
(NEU). In essence, the NEU executes all numeric instructions, while the CU fetches instructions, reads and writes memory
operands, and executes the processor control class of instructions. The two elements are able to operate independently
of one another, allowing the CU to maintain synchronization with the CPU while the NEU executes numeric instructions.

> ***Control Unit***

> The CU keeps the 8087 operating in synchronization with its host CPU. 8087 instructions are intermixed with CPU
instructions in a single instruction stream fetched by the CPU. By monitoring the status signals emitted by the CPU,
the NDP control unit can determine when an instruction is being fetched. When the instruction byte or word becomes
available on the local bus, the CU taps the bus in parallel with the CPU and obtains that portion of the instruction.

> The CU maintains an instruction queue that is identical to the queue in the host CPU. By monitoring the CPU's queue
status lines, the CU is able to obtain and decode instructions from the queue in synchronization with the CPU. In effect,
both processors fetch and decode the instruction stream in parallel.

> The two processors execute the instruction stream differently, however. The first five bits of all 8087 machine
instructions are identical; these bits designate the coprocessor escape (ESC) class of instructions. The control unit
ignores all instructions that do not match these bits, since these instructions are directed to the CPU only. When the
CU decodes an instruction containing the escape code, it either executes the instruction itself, or passes it to the
NEU, depending on the type of instruction.

> The CPU distinguishes between ESC instructions that reference memory and those that do not. If the instruction refers
to a memory operand, the CPU calculates the operand's address and then performs a "dummy read" of the word at that
location. This is a normal read cycle, except that the CPU ignores the data it receives. If the ESC instruction does
not contain a memory reference, the CPU simply proceeds to the next instruction.

> A given 8087 instruction (an ESC to the CPU) will either require loading an operand from memory into the 8087,
or will require storing an operand from the 8087 into memory, or will not reference memory at all. In the first two
cases, the CU makes use of the "dummy read" cycle initiated by the CPU. The CU captures and saves the operand address
that the CPU places on the bus early in the "dummy read". If the instruction is an 8087 load, the CU additionally
captures the first (and possibly only) word of the operand when it becomes available on the bus. If the operand to
be loaded is longer than one word, the CU immediately obtains the bus from the CPU and reads the rest of the operand
in consecutive bus cycles. In a store operation, the CU captures and saves the operand address as in a load, and
ignores the data word that follows in the "dummy read" cycle. When the 8087 is ready to perform the store, the CU
obtains the bus from the CPU and writes the operand at the saved address using as many consecutive bus cycles as are
necessary to store the operand.

> ***Numeric Execution Unit***

> The NEU executes all instructions that involve the register stack; these include arithmetic, comparison, transcendental,
constant, and data transfer instructions. The data path in the NEU is 68 bits wide and allows internal operand transfers
to be performed at very high speeds.

> ***Register Stack***

> Each of the eight registers in the 8087's register stack is 80 bits wide, and each is divided into the "fields"
shown in figure S-5. This format corresponds to the NDP's temporary real data type that is used for all calculations.
Section S.3 describes in detail how numbers are represented in the temporary real format.

> At a given point in time, the ST field in the status word (described shortly) identifies the current top-of-stack
register. A load ("push") operation decrements ST by 1 and loads a value into the new top register. A store-and-pop
operation stores the value from the current top register and then increments ST by 1. Thus, like 8086/8088 stacks in
memory, the 8087 register stack grows "down" toward lower-addressed registers.

> Instructions may address registers either implicitly or explicitly. Many instructions operate on the register at
the top of the stack. These instructions implicitly address the register pointed to by ST.

> For example, the ASM-86 instruction FSQRT replaces the number at the top of the stack with its square root; this
instruction takes no operands because the top-of-stack register is implied as the operand. Other instructions allow
the programmer to explicitly specify the register that is to be used. Explicit register addressing is "top-relative"
where the ASM-86 expression ST denotes the current stack top and ST(i) refers to the ith register from ST in the stack
(0 <= i <= 7). For example, if ST contains O11B (register 3 is the top of the stack), the following instruction would
add registers 3 and 5:

	FADD ST, ST(2)

> In typical use, the programmer may conceptually "divide" the registers into a fixed group and an adjustable group.
The fixed registers are used like the conventional registers in a CPU, to hold constants, accumulations, etc.
The adjustable group is used like a stack, with operands pushed on and results popped off. After loading, the registers
in the fixed group are addressed explicitly, while those in the adjustable group are addressed implicitly. Of course,
all registers may be addressed using either mode, and the "definition" of the fixed versus the adjustable areas may be
altered at any time. Section S.8 contains a programming example that illustrates typical register stack use.

> The stack organization and top-relative addressing of the registers simplify subroutine programming. Passing
subroutine parameters on the register stack eliminates the need for the subroutine to "know" which registers actually
contain the parameters and allows different routines to call the same subroutine without having to observe a convention
for passing parameters in dedicated registers. So long as the stack is not full, each routine simply loads the parameters
on the stack and calls the subroutine. The subroutine addresses the parameters as ST, ST(l), etc., even though ST may,
for example, refer to register 3 in one invocation and register 5 in another.

> ***Status Word***

> The status word reflects the overall condition of the 8087; it may be examined by storing it into memory with an
NDP instruction and then inspecting it with CPU code. The status word is divided into the fields shown in figure S-6.
The busy field (bit 15) indicates whether the NDP is executing an instruction (B=1) or is idle (B=O).

> Several 8087 instructions (for example, the comparison instructions) post their results to the condition code (bits
14 and 10-8 of the status word). The principal use of the condition code is for conditional branching. This may be
accomplished by executing an instruction that sets the condition code, storing the status word in memory and then
examining the condition code with CPU instructions.

> Bits 13-11 of the status word point to the 8087 register that is the current stack top (ST). Note that if ST=000B,
a "push" operation, which decrements ST, produces ST=111B; similarly, popping the stack with ST=111B yields ST=000B.

> Bit 7 is the interrupt request field. The NDP sets this field to record a pending interrupt to the CPU.

> Bits 5-0 are set to indicate that the NEU has detected an exception while executing an instruction. Section S.3
explains these exceptions.

> ***Control Word***

> To satisfy a broad range of application requirements, the NDP provides several processing options which are selected
by loading a word from memory into the control word. Figure S-7 shows the format and encoding of the fields in the
control word; it is provided here for reference. Section S.3 explains the use of each of these 8087 facilities except
the interrupt-enable control field, which is covered in section S.6.

> ***Tag Word***

> The tag word marks the content of each register as shown in figure S-8. The principal function of the tag word is to
optimize the NDP's performance under certain circumstances and programmers ordinarily need not be concerned with it.

> ***Exception Pointers***

> The exception pointers (see figure S-9) are provided for user-written exception handlers. Whenever the 8087 executes
an instruction, the CU saves the instruction address and the instruc- tion opcode in the exception pointers. In addition,
if the instruction references a memory operand, the address of the operand is retained also. An exception handler can
store these pointers in memory and thus obtain information concerning the instruction that caused the exception.
