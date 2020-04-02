#include <stdio.h>		// we use printf() 


/*  
	Small Intel UPI-41/42 DISASSEMBLER
	==================================
	A. Tarpai 2010 (tarpai76 gmail com)

	It was written to look at some 8042 ROM dump code. 
	You can use and modify it for any purpose. 
	I'm happy if you mention me, the author. 
	No warranties (what for?). 

	Usage:
	------
	Call dasm42() passing a pointer, an offset and number of bytes. 
	Uses 1 external: printf(). 

	The disassembler is based on the book
	  "Microprocessor Peripherals UPI-41A/41AH/42/42AH User's Manual, INTEL CORPORATION, 1996"
*/




static int PC; 


/* Operand Addressing Mode writers */

typedef void (*Tfop)(unsigned char *p);

static void fopJMP(unsigned char *p)				// JMP and CALL: 11-bit absolute address (2K)
{
	printf("$%04X", ((*p<<3)&0x700) | p[1]);
}

static void fopJ(unsigned char *p)					// jumps: 8-bit in-page address
{
	printf("$%04X", (PC&0xff00)|p[1]);	// TODO!! Jump at page boundary?? PC or PC+2 here?
}	

static void fopRx(unsigned char *p)					// Register Direct (x=0-7)
{
	printf("R%x", *p&7);
}

static void fopPx(unsigned char *p)					// Port Direct (x=[1,2])
{
	printf("P%x", *p&3);
}

static void fopRRx(unsigned char *p)				// Indexed @R0 or @R1
{
	printf("@R%x", *p&1);
}

static void fopA(unsigned char *p)					// Accumulator
{
	printf("A");
}

static void fopIMM(unsigned char *p)				// Immediate 8-bit value
{
	printf("#$%02X", p[1]);
}



typedef void (*Tfmnop)(unsigned char *p, Tfop fop1, Tfop fop2);

static void fopJB(unsigned char *p, Tfop fop1, Tfop fop2)	// JBx is special (have to complete the mn)
{
	printf("%x ", *p>>5);
	fopJ(p);
}

static void fmnop2(unsigned char *p, Tfop fop1, Tfop fop2)	// 2-operand instructions 
{
	printf(" ");
	fop1(p);
	printf(",");
	fop2(p);
}

static void fmnop1(unsigned char *p, Tfop fop1, Tfop fop2)	// 1-operand instructions 
{
	printf(" ");
	fop1(p);
}





struct instr {
	char *mn;
	unsigned char opcd;
	unsigned char opcdmsk;
	char len; 
	Tfmnop fmnop;
	Tfop fop1, fop2;
};


static struct instr instrs[] = {
	{ "ADD", 0x68, 0xf8, 1, fmnop2, fopA, fopRx},	// ADD A,Rr Add Register Contents to Accumulator
	{ "ADD", 0x60, 0xfe, 1, fmnop2, fopA, fopRRx},	// ADD A,@Rr Add Data Memory Contents to Accumulator
	{ "ADD", 0x03, 0xff, 2, fmnop2, fopA, fopIMM},	// ADD A,Ýdata Add Immediate Data to Accumulator
	{ "ADDC", 0x78, 0xf8, 1, fmnop2, fopA, fopRx},	// ADDC A,Rr Add Carry and Register Contents to Accumulator
	{ "ADDC", 0x70, 0xfe, 1, fmnop2, fopA, fopRRx},	// ADDC A,@Rr Add Carry and Data Memory Contents to Accumulator
	{ "ADDC", 0x13, 0xff, 2, fmnop2, fopA, fopIMM},	// Add Carry and Immediate Data to Accumulator
	{ "ANL", 0x58, 0xf8, 1, fmnop2, fopA, fopRx},	// AND A,Rr Add Register Contents to Accumulator
	{ "ANL", 0x50, 0xfe, 1, fmnop2, fopA, fopRRx},	// AND A,@Rr Add Data Memory Contents to Accumulator
	{ "ANL", 0x53, 0xff, 2, fmnop2, fopA, fopIMM},	// AND A,Ýdata Add Immediate Data to Accumulator
	{ "ANL", 0x98, 0xfc, 2, fmnop2, fopPx, fopIMM},	// ANL PP,Ýdata Logical AND PORT 1±2 With Immediate Mask
	{ "ANLD", 0x9C, 0xfc, 1, fmnop2, fopPx, fopA},	// ANLD Pp,A Logical AND Port 4±7 With Accumulator Mask
	{ "CALL",  0x14, 0x1f, 2, fmnop1, fopJMP},
	{ "CLR A", 0x27, 0xff, 1, 0},	// CLR A
	{ "CLR C", 0x97, 0xff, 1, 0},	// CLR C Clear Carry Bit
	{ "CLR F1", 0xA5, 0xff, 1, 0},	// CLR F1 Clear Flag 1
	{ "CLR F0", 0x85, 0xff, 1, 0},	// CLR F0 Clear Flag 0
	{ "CPL A", 0x37, 0xff, 1, 0},	// CPL A Complement Accumulator
	{ "CPL C", 0xA7, 0xff, 1, 0},	// CPL C Complement Carry Bit
	{ "CPL F0", 0x95, 0xff, 1, 0},	// CPL F0 COMPLEMENT FLAG 0
	{ "CPL F1", 0xB5, 0xff, 1, 0},	// CPL F1 COMPLEMENT FLAG 1
	{ "DA A", 0x57, 0xff, 1, 0},	// DA A Decimal Adjust Accumulator
	{ "DEC A", 0x07, 0xff, 1, 0},	// DEC A Decrement Accumulator
	{ "DEC", 0xC8, 0xf8, 1, fmnop1, fopRx},		// DEC Rr Decrement Register
	{ "DIS I", 0x15, 0xff, 1, 0},		// DIS I Disable IBF Interrupt
	{ "DIS TCNTI", 0x35, 0xff, 1, 0},	// DIS TCNTI Disable Timer/Counter Interrupt
	{ "DJNZ",  0xE8, 0xf8, 2, fmnop2, fopRx, fopJ},		// DJNZ Rr, address Decrement Register and Test
	{ "EN DMA", 0xE5, 0xff, 1, 0},	// EN DMA Enable DMA Handshake Lines
	{ "EN FLAGS", 0xF5, 0xff, 1, 0 },		// EN FLAGS Enable Master Interrupts
	{ "EN I", 0x05, 0xff, 1, 0 },		// EN I Enable IBF Interrupt
	{ "EN TCNTI", 0x25, 0xff, 1, 0},	// EN TCNTI Enable Timer/Counter Interrupt
	{ "IN A,DBB", 0x22, 0xff, 1, 0},		// IN A,DBB Input Data Bus Buffer Contents to Accumulator
	{ "IN", 0x08, 0xfc, 1, fmnop2, fopA, fopPx},		// IN A,Pp Input Port 1±2 Data to Accumulator
	{ "INC A", 0x17, 0xff, 1, 0},	// INC A
	{ "INC", 0x18, 0xf8, 1, fmnop1, fopRx},		// INC Rr Increment Register
	{ "INC", 0x10, 0xfe, 1, fmnop1, fopRRx},	// INC @Rr Increment Data Memory Location
	{ "JB",    0x12, 0x1f, 2, fopJB},					// JBb address Jump If Accumulator Bit is Set
	{ "JC",    0xF6, 0xff, 2, fmnop1, fopJ },			// 
	{ "JF0",   0xB6, 0xff, 2, fmnop1, fopJ },			// 
	{ "JF1",   0x76, 0xff, 2, fmnop1, fopJ },			// 
	{ "JMP",   0x04, 0x1f, 2, fmnop1, fopJMP},
	{ "JMPP @A",   0xB3, 0xff, 1, 0 },		// JMPP @A Indirect Jump Within Page
	{ "JNC",   0xE6, 0xff, 2, fmnop1, fopJ },			// 
	{ "JNIBF", 0xD6, 0xff, 2, fmnop1, fopJ },			// 
	{ "JNT0",  0x26, 0xff, 2, fmnop1, fopJ },			// JNTO address Jump if TEST 0 is Low
	{ "JNT1",  0x46, 0xff, 2, fmnop1, fopJ },			// 
	{ "JNZ",   0x96, 0xff, 2, fmnop1, fopJ },			// 
	{ "JOBF",  0x86, 0xff, 2, fmnop1, fopJ },			// 
	{ "JTF",   0x16, 0xff, 2, fmnop1, fopJ },			// 
	{ "JT0",   0x36, 0xff, 2, fmnop1, fopJ },			// 
	{ "JT1",   0x56, 0xff, 2, fmnop1, fopJ },			// 
	{ "JZ",    0xC6, 0xff, 2, fmnop1, fopJ },			// 
	{ "MOV", 0x23, 0xff, 2, fmnop2, fopA, fopIMM },		// MOV A,Ýdata Move Immediate Data to Accumulator
	{ "MOV A,PSW", 0xC7, 0xff, 1, 0},	// MOV A,PSW Move PSW Contents to Accumulator
	{ "MOV", 0xF8, 0xf8, 1, fmnop2, fopA, fopRx },		// MOV A,Rr Move Register Contents to Accumulator
	{ "MOV", 0xF0, 0xfe, 1, fmnop2, fopA, fopRRx },		// MOV A,@Rr Move Data Memory Contents to Accumulator
	{ "MOV A,T", 0x42, 0xff, 1, 0},	// MOV A,T Move Timer/Counter Contents to Accumulator
	{ "MOV PSW,A", 0xD7, 0xff, 1, 0},	// MOV PSW,A Move Accumulator Contents to PSW
	{ "MOV", 0xA8, 0xf8, 1, fmnop2, fopRx, fopA },		// MOV Rr,A Move Accumulator Contents to Register
	{ "MOV", 0xB8, 0xf8, 2, fmnop2, fopRx, fopIMM },	// MOV Rr,Ýdata Move Immediate Data to Register
	{ "MOV", 0xA0, 0xfe, 1, fmnop2, fopRRx, fopA },		// MOV @Rr,A Move Accumulator Contents to Data Memory
	{ "MOV", 0xB0, 0xfe, 2, fmnop2, fopRRx, fopIMM },	// MOV @Rr,Ýdata Move Immediate Data to Data Memory
	{ "MOV STS,A", 0x90, 0xff, 1, 0},		// MOV STS,A Move Accumulator Contents to STS Register
	{ "MOV T,A", 0x62, 0xff, 1, 0},	// MOV T,A Move Accumulator Contents to Timer/Counter
	{ "MOVD", 0x0C, 0xfc, 2, fmnop2, fopA, fopPx },		// MOVD A,Pp Move Port 4±7 Data to Accumulator
	{ "MOVD", 0x3C, 0xfc, 2, fmnop2, fopPx, fopA },		// MOVD Pp,A Move Accumulator Data to Port 4, 5, 6 and 7
	{ "MOVP A,@A", 0xA3, 0xff, 1, 0},	// MOVP A,@A Move Current Page Data to Accumulator
	{ "MOVP3 A,@A", 0xE3, 0xff, 1, 0},	// MOVP3 A,@A Move Page 3 Data to Accumulator
	{ "NOP", 0x00, 0xff, 1, 0},
	{ "ORL", 0x48, 0xf8, 1, fmnop2, fopA, fopRx},	// ORL A,Rr Logical OR Accumulator With Register Mask
	{ "ORL", 0x40, 0xfe, 1, fmnop2, fopA, fopRRx},	// ORL A,@Rr Logical OR Accumulator With Memory Mask
	{ "ORL", 0x43, 0xff, 2, fmnop2, fopA, fopIMM},	// ORL A,ÝData Logical OR Accumulator With Immediate Mask
	{ "ORL", 0x88, 0xfc, 2, fmnop2, fopPx, fopIMM},	// ORL Pp,Ýdata Logical OR Port 1±2 With Immediate Mask
	{ "ORLD", 0x8C, 0xfc, 2, fmnop2, fopPx, fopA},		// ORLD Pp,A Logical OR Port 4±7 With Accumulator Mask
	{ "OUT DBB,A", 0x02, 0xff, 1, 0},	// OUT DBB,A Output Accumulator Contents to Data Bus Buffer
	{ "OUTL", 0x38, 0xfc, 1, fmnop2, fopPx, fopA },		// OUTL Pp,A Output Accumulator Data to Port 1 and 2
	{ "RET", 0x83, 0xff, 1, 0},	// RET Return Without PSW Restore
	{ "RETR", 0x93, 0xff, 1, 0},	// RET Return Without PSW Restore
	{ "RL A", 0xE7, 0xff, 1, 0},	// RL A Rotate Left Without Carry
	{ "RLC A", 0xF7, 0xff, 1, 0},	// RLC A Rotate Left Through Carry
	{ "RR A", 0x77, 0xff, 1, 0},	// RR A Rotate Right Without Carry
	{ "RRC A", 0x67, 0xff, 1, 0},	// RRC A Rotate Right Through Carry
	{ "SEL RB0", 0xC5, 0xff, 1, 0},	// SEL RB0 Select Register Bank 0
	{ "SEL RB1", 0xD5, 0xff, 1, 0},	// SEL RB1 Select Register Bank 1
	{ "STOP TCNT", 0x65, 0xff, 1, 0},	// STOP TCNT Stop Timer/Event Counter
	{ "STRT CNT", 0x45, 0xff, 1, 0},	// STRT CNT Start Event Counter
	{ "STRT T", 0x55, 0xff, 1, 0},	// STRT T Start Timer
	{ "SWAP A", 0x47, 0xff, 1, 0},	// SWAP A Swap Nibbles Within Accumulator
	{ "XCH", 0x28, 0xf8, 1, fmnop2, fopA, fopRx},	// XCH ARr Exchange Accumulator-Register Contents
	{ "XCH", 0x20, 0xfe, 1, fmnop2, fopA, fopRRx},	// XCH A,@Rr Exchange Accumulator and Data Memory Contents
	{ "XCHD", 0x30, 0xfe, 1, fmnop2, fopA, fopRRx},	// XCHD A,@Rr Exchange Accumulator and Data Memory 4-bit Data
	{ "XRL", 0xD8, 0xf8, 1, fmnop2, fopA, fopRx},	// XRL A,Rr Logical XOR Accumulator With Register Mask
	{ "XRL", 0xD0, 0xfe, 1, fmnop2, fopA, fopRRx},	// XRL A,@Rr Logical XOR Accumulator With Memory Mask
	{ "XRL", 0xD3, 0xff, 2, fmnop2, fopA, fopIMM},	// XRL A,Ýdata, Logical XOR Accumulator With Immediate Mask

	{ "???", 0, 0, 1, 0}	// All others (zero-mask will be true - if reached, len=1)
};


static int instr1(unsigned char *p)
{
	struct instr *i= instrs;
	for (; ; i++) {
		if ((*p & i->opcdmsk) == i->opcd) {
			printf("%04X: ", PC);							// print Program Counter 
			PC+=i->len;										// we increment PC as if CPU did for JMP instructions(?)
			printf("%02X ", p[0]);							// write 1 or 2 code bytes 
			if (i->len==2) printf("%02X   ", p[1]);
			else printf("     ");
			printf("%s", i->mn);							// write mnemonic
			if (i->fmnop) i->fmnop(p, i->fop1, i->fop2);	// write 0, 1 or 2 operands
			printf("\n");
			return i->len;
		}
	}
}




/*	Extern.
	Disassemble iNTEL UPI-41/42 machine code 
	of n bytes, from p + offset

	*/

void dasm42(char *p, int offs, int n)
{
	p+=offs;
	PC=offs;
	n+=offs;
	for (; PC < n;) p+=instr1(p);
}





/**********   NOTES   ****************************************************

	Addressing:
	- implicite (in instr)
	- register Rn (0..7)
	- indexed @Rn (0..1) 
	- A
	- # (0..$ff)
	- addr, 1 byte + PC (0..$ffff)


	--------------------
	RAM (DATA) 256 bytes
	--------------------
	0..7   R0..R7           BANK0 (Bs in PSW) 
	8..23  STACK (8x16bit)  .....
    24..31 R0..R7           BANK1
	...... to top: "RAM"    .....

	R0, R1 can be index register

	----------------
	ROM (PROGRAM) 2K
	----------------
	RESET:      $0000
	IBR INT:    $0003
	TIMER INT:  $0007

	-----------
	PC - 10-bit (not 11?)
	-----------
	PC always points to next instruction. 

	----
	JUMP
	----
	a.) absolute address: JMP $35E = aa a9 a8 0 0 1 0 0  a7 a6 a5 a4 a3 a2 a1 a0 (2-byte instr)
	b.) "relative" (op -> PC-LO): JZ $addr = $C6 $op (2-byte instr) 
	// OK.. "If a conditional JUMP or indirect JUMP begins in location 255 of a page, it must reference a destination on the following page"

	--------
	PC-stack
	--------
	8x16 bits: call/int saves PSW[7..4]&PC[11..0]
	
	-------------------------
	PSW - program status word
	-------------------------
	7  6  5  4 | 3 | 2  1  0
	C  AC F0 Bs| - |   SP

	CALL: push PC&PSW[7..4]
	RET: pop PC
	RETR: pop PC&PSW[7..4]

	
	On-chip oscillator
	------------------
	1 to 12.5 MHz
	or external

	-------------------
	8-bit Timer/Counter
	-------------------

	Timer-mode
	- increments on OSC + 32-prescale
	- START T .. STOP TCNT

	Counter-mode
	- increments on falling edges on TEST1-pin
	- START CNT .. STOP TCNT

	- MOV T,A and MOV A,T for reading/writing 
	

	Timer/Counter OVERFLOW
	----------------------
	fe..ff..00

	1. sets timer flag (TF) - then can be tested by JTF (which clears TF)
	2. generates IRQ
	3. EN/DIS TCNTI
	4. if enabled: CALL $0007 happens


	----------
	INTERRUPTS
	----------
	
	IBF:
	- higher pri
	- EN/DIS I
	- CS & RW triggers 

	Timer
	- EN/DIS TCNTI
	- 

	1. IRQ set + disable all interrupts
	2. CALL 3 (IBF) or 7 (T)
	3. entering ISR clears IRQ
	4. ISR
	5. RETR (re-enables interrupt)

	HOST INTERRUPTS
	---------------

	EN FLAGS will allocate P24/P25 to OBF/_IBF (only RESET clears it)
	"These interrupt outputs reflect the internal status of the OBF flag and the IBF inverted flag." 
	"Note, these outputs may be inhibited by writing a '0' to these pins. Reenabling interrupts is done by writing a '1' to these port pins."

	==> so host cpu doesn't have to poll the same bits in STATUS REG (0x64); it can have it as interrupts (this is set in the code after RESET..)

	------------
	HOST CPU I/O
	------------

	!!! There are 3 registers in the UPI on the host side !!! (NB. host CPU writes into DBBIN..)

	               <--R--    STATUS   <---  MOV STS,A + JF0,JF1,JOBF,JNIBF
	HOST CPU I/O   <--R--    DBBOUT   <---  OUT DBB,A
	                --W-->   DBBIN     --->  IN A,DBB

	RD WR A0
	0  1  0   (0x60) Read DBBOUT register 
	0  1  1   (0x64) Read STATUS register
	1  0  0   (0x60) Write DBBIN! 
	1  0  1   (0x64) Write DBBIN!

	==> A0-pin simply latches into STATUS-F1-bit on host write, what the UPI can test by JF1 $xx. 

	-----------------
	Data buffers: DBB
	-----------------

	DBBIN, DBBOUT

	"When CS, A0 and RD are low, the contents of the DBBOUT register is placed on the three-state Data lines D0-D7 and the OBF flag is cleared." 
	"When CS and WR are low, the contents of the system data bus is latched into DBBIN. Also, the IBF flag is set and an interrupt is generated, if enabled." 
	
	--------------------
	ST - status register
	--------------------

	= Bus buffer register status word. 

	ST7 ST6 ST5 ST4 | F1  F0 | IBF OBF
	
	ST7-4: user defined, MOV STS,A writes them, UPI doesn't care more about it. 
	F0: user defined (JF0 $xx)
	F1 = A0-pin (Command/Data)
	"OBF Output Buffer Full: This flag is automatically set when the UPI-Microcomputer loads the DBBOUT register and is cleared when the master processor reads the data register."
	"IBF Input Buffer Full: This flag is set when the master processor writes a character to the DBBIN register and is cleared when the UPI INputs the data register contents to its accumulator." 

	---------
	I/O PORTS
	---------

	2 x 8-bit: P1 and P2
	OUTL Pn,A 
	IN A,Pn
	"To use a particular PORT pin as an input, a logic '1' must first be written to that pin."

*/
