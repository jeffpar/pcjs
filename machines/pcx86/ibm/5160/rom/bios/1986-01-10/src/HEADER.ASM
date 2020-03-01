PAGE 118,121
TITLE HEADER --- 01/08/86 POWER ON SELF TEST (POST)

;-------------------------------------------------------------------------------
; BIOS I/O INTERFACE							       ;
;									       ;
;	THESE LISTINGS PROVIDE INTERFACE INFORMATION FOR ACCESSING	       ;
;	THE BIOS ROUTINES.  THE POWER ON SELF TEST IS INCLUDED. 	       ;
;									       ;
;	THE  BIOS  ROUTINES  ARE  MEANT  TO  BE  ACCESSED  THROUGH	       ;
;	SOFTWARE  INTERRUPTS  ONLY.    ANY  ADDRESSES  PRESENT	IN	       ;
;	THESE  LISTINGS  ARE  INCLUDED	 ONLY	FOR  COMPLETENESS,	       ;
;	NOT  FOR  REFERENCE.   APPLICATIONS  WHICH  REFERENCE  ANY	       ;
;	ABSOLUTE  ADDRESSES  WITHIN  THE  CODE	SEGMENTS  OF  BIOS	       ;
;	VIOLATE  THE  STRUCTURE  AND  DESIGN  OF  BIOS. 		       ;
;									       ;
;-------------------------------------------------------------------------------



;-------------------------------------------------------------------------------
;   MODULE REFERENCE							       ;
;									       ;
;    HEADER.ASM     -->  DEFINITIONS					       ;
;      DSEG.INC     -->   DATA SEGMENTS LOCATIONS			       ;
;      POSTEQU.INC  -->   COMMON EQUATES FOR POST AND BIOS		       ;
;									       ;
;    DSKETTE.ASM    -->  DISKETTE BIOS					       ;
;			   DISKETTE_IO_1 - INT 13H BIOS ENTRY (40H)   -INT 13H ;
;			   DISK_INT_1	 - HARDWARE INTERRUPT HANDLER -INT 0EH ;
;			   DSKETTE_SETUP - POST SETUP DRIVE TYPES	       ;
;									       ;
;    KEYBRD.ASM     -->  KEYBOARD BIOS					       ;
;			   KEYBOARD_IO_1 - INT 16H BIOS ENTRY	      -INT 16H ;
;			   KB_INT_1	 - HARDWARE INTERRUPT	      -INT 09H ;
;			   SND_DATA	 - KEYBOARD TRANSMISSION	       ;
;									       ;
;    PRT.ASM	    -->  PRINTER ADAPTER BIOS			      -INT 17H ;
;									       ;
;    RS232.ASM	    -->  COMMUNICATIONS BIOS FOR RS232		      -INT 14H ;
;									       ;
;    VIDEO.ASM	    -->  VIDEO BIOS				      -INT 10H ;
;									       ;
;    BIOS1.ASM	    -->  INTERRUPT 15H BIOS ROUTINES		      -INT 15H ;
;			   DEV_OPEN	 - NULL DEVICE OPEN HANDLER	       ;
;			   DEV_CLOSE	 - NULL DEVICE CLOSE HANDLER	       ;
;			   PROG_TERM	 - NULL PROGRAM TERMINATION	       ;
;			   JOY_STICK	 - JOYSTICK PORT HANDLER	       ;
;			   SYS_REQ	 - NULL SYSTEM REQUEST KEY	       ;
;			   EXT_MEMORY	 - EXTENDED MEMORY SIZE DETERMINE      ;
;			   DEVICE_BUSY	 - NULL DEVICE BUSY HANDLER	       ;
;			   INT_COMPLETE  - NULL INTERRUPT COMPLETE HANDLER     ;
;									       ;
;    POST.ASM	    -->  BIOS INTERRUPT ROUTINES			       ;
;			   POST 	 - POWER ON SELF TEST & INITIALIZATION ;
;			   TIME_OF_DAY_1 - TIME OF DAY ROUTINES       -INT 1AH ;
;			   PRINT_SCREEN1 - PRINT SCREEN ROUTINE       -INT 05H ;
;			   TIMER_INT_1	 - TIMER1 INTERRUPT HANDLER  ->INT 1CH ;
;			   DDS		 - LOAD (DS:) WITH DATA SEGMENT        ;
;			   BEEP 	 - SPEAKER BEEP CONTROL ROUTINE        ;
;			   WAITF	 - FIXED TIME WAIT ROUTINE	       ;
;									       ;
;-------------------------------------------------------------------------------
.XLIST
SUBTTL POSTEQU.INC - COMMON EQUATES
.LIST
PAGE
INCLUDE POSTEQU.INC
.XLIST
SUBTTL DSEG.INC - DATA SEGMENTS
.LIST
PAGE
INCLUDE DSEG.INC
.XLIST
SUBTTL
.LIST
PAGE
CODE	SEGMENT WORD PUBLIC

	PUBLIC	HEADER

	ASSUME	CS:CODE,DS:NOTHING,ES:NOTHING,SS:NOTHING

HEADER	PROC	NEAR

BEGIN	EQU	$
	DB	'62X0854 COPR. IBM CORP. 1981,1986 '           ;COPYRIGHT NOTICE
	EVEN						       ;EVEN BOUNDARY
	DB	'                       '                      ;PAD
	DB	'                       '                      ;PAD

HEADER	ENDP
CODE	ENDS
	END
