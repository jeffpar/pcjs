#ifdef __TURBOC__
#define USES_REGS
#else
#define USES_REGS union REGS reg; struct SREGS sreg;
#define _AH reg.h.ah
#define _AL reg.h.al
#define _BH reg.h.bh
#define _BL reg.h.bl
#define _CH reg.h.ch
#define _CL reg.h.cl
#define _DH reg.h.dh
#define _DL reg.h.dl
#define _AX reg.x.ax
#define _BX reg.x.bx
#define _CX reg.x.cx
#define _DX reg.x.dx
#define _SI reg.x.si
#define _DI reg.x.di
#define _DS sreg.ds
#define _ES sreg.es
#define _SS sreg.ss
#define geninterrupt(n) int86x(n,&reg,&reg,&sreg)
#define inport(port) _inpw(port)
#define inportb(port) _inp(port)
#define outport(port,data) _outpw(port,data)
#define outportb(port,data) _outp(port,data)
#endif
