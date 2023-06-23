---
layout: page
title: "PC-SIG Diskette Library (Disk #226)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0226/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0226"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "FREECOPY"

    FREECOPY is a disk utility that is functionally equivalent to DISKCOPY
    which is distributed with IBM PC DOS. FREECOPY simply replaces
    MS-DOS's DISKCOPY, but written better and runs faster.  The author
    has encouraged your "improving" it by placing the source code here.
    
    The four major files are: FREECOPY.COM is the executable code in a
    binary .COM file in machine-readable format; FREECOPY.ASM contains the
    source code in structured assembly language with lots of comments;
    FREECOPY.MAP is an Assembler map listing; and FREECOPY.DOC contains a
    users guide.
    
    How to Start: Read documentation in FREECOPY.DOC.  To run, type
    FREECOPY from the prompt and answer all questions.
    
    Suggested Registration:  $25.00
    
    File Descriptions:
    
    FREECOPY COM  A user-supported version of DISKCOPY
    FREECOPY LST  Assembly listing for those without an Assembler
    FREECOPY DOC  Users manual  (28K)
    FREECOPY ASM  Source code for FREECOPY.COM
    FREECOPY MAP  Assembler map listing
    FREECOPY REF  Assembler reference listing
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES226.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 226   FREECOPY  Version 1.13                           v1.13 DS2
------------------------------------------------------------------------
FREECOPY COM  A user-supported version of DISKCOPY
FREECOPY ASM  Source code for FREECOPY.COM
FREECOPY DOC  Users manual  (28K)
FREECOPY LST  Assembly listing for those without an Assembler
FREECOPY REF  Assembler reference listing
FREECOPY MAP  Assembler map listing
```
{% endraw %}

## FREECOPY.ASM

{% raw %}
```
Page	55,132
Title	FREECOPY Version 1.13 (C)Copyright 1984
;***********************  F R E E C O P Y  ******************************
;*									*
;*	Program: FREECOPY						*
;*									*
;*	Author: Donald L. Buresh, C.D.P.				*
;*		Squire Buresh Associates, Inc.				*
;*		Post Office Box 112					*
;*		Millbury, MA  01527					*
;*		(617) 865-3435						*
;*									*
;*    !!!!!!!!!!!!!!!!!!!!!!   N O T I C E   !!!!!!!!!!!!!!!!!!!!!!     *
;*									*
;*	A limited license is granted to all users of this program to	*
;*	make copies of this source code and to distribute them to	*
;*	other users under the following conditions:			*
;*									*
;*	1. The notice contained in the variable MES00_Copy_Notice	*
;*	   is not to be altered, bypassed or removed.			*
;*									*
;*	2. The program is not to be distributed to others in		*
;*	   modified form.						*
;*									*
;*	3. If you think that this program has helped you, we request	*
;*	   a $25.00 contribution.					*
;*									*
;*	4. No other fee is to be charged or any consideration received	*
;*	   for copying or distributing the program without the		*
;*	   expressed written permission of Squire Buresh Assoc, Inc.	*
;*									*
;*									*
;*  (C) Copyright  1984		Squire Buresh Associates, Inc.		*
;*									*
;************************************************************************
Page
;************************************************************************
;*									*
;*	REVISION HISTORY						*
;*									*
;*	Version								*
;*	Number    Date		Comments				*
;*									*
;*	1.00	16-SEP-84	This is the first version of FREECOPY	*
;*									*
;*	1.01	13-OCT-84	Corrected a problem when copying	*
;*				diskettes on 512K systems. Reversed	*
;*				the order of testing the ES:BX table	*
;*				counter and the read/write track	*
;*				counter. Fix was near C2005, C2006,	*
;*				C2105 and C2106.			*
;*									*
;*	1.02	13-OCT-84	Flushed the standard input keyboard	*
;*				buffer before accepting a character.	*
;*				Fix was near U1101 and U1102.		*
;*									*
;*	1.03	21-OCT-84	Added parsing a tab character on the	*
;*				command line.  Fix was below C1215.	*
;*									*
;*	1.04 - 1.09		These versions never really existed in	*
;*				any decent form.  They are incorporated	*
;*				into fixing the memory allocation	*
;*				problems stemming from the original	*
;*				version of FREECOPY.			*
;*									*
;*	1.10	02-FEB-85	Allocated and freed memory when running	*
;*				FREECOPY under PC-DOS versions 2.00	*
;*				and greater.  The fix involved finding	*
;*				out the version of the operating system,*
;*				allocating the memory, establishing	*
;*				the ES:BX table entries and freeing	*
;*				memory before returning control to	*
;*				PC-DOS.					*
;*									*
;*	1.11	06-JUN-85	Modified the sequence of turning inter- *
;*				rupts on and off in the S1000 and S1100 *
;*				modules.				*
;*									*
;*	1.12	06-JUN-85	Allowed users to write more than one	*
;*				target diskette, by setting FLG17 to	*
;*				True and jumping to B1105A after ini-	*
;*				tializing the appropriate variables.	*
;*									*
;*	1.13	07-JUN-85	Fixed a stack imbalance that appeared	*
;*				only when running PC-DOS 3.00 on a PC	*
;*				rather than on an XT or AT		*
;*									*
;************************************************************************
Page
;************************************************************************
;*									*
;*	EQUATES								*
;*									*
;*	The constants defined below are used to to specify:		*
;*									*
;*			o Disk commands,				*
;*									*
;*			o Keyboard commands,				*
;*									*
;*			o Video commands				*
;*									*
;*			o Miscellaneous parameters,			*
;*									*
;*			o Various ASCII characters.			*
;*									*
;************************************************************************
;
Disk_Parameter_Addr	Equ	001EH*4	; Address of Disk Parameter Table
;
Reset_Command		Equ	0000D	; Diskette reset command
Status_Command		Equ	0001D	; Diskette status command
Read_Command		Equ	0002D	; Diskette read command
Write_Command		Equ	0003D	; Diskette write command
Verify_Command		Equ	0004D	; Diskette verify command
Format_Command 		Equ	0005D	; Diskette format command
;
Time_Out_Error		Equ	0080H	; Diskette error codes
Seek_Error		Equ	0040H	; .
Controller_Error	Equ	0020H	; .
CRC_Error		Equ	0010H	; .
DMA_Boundary_Error	Equ	0009H	; .
DMA_Error		Equ	0008H	; .
Sector_Error		Equ	0004H	; .
Write_Protect_Error	Equ	0003H	; .
Address_Mark_Error	Equ	0002H	; .
Command_Error		Equ	0001H	; ..End
;
Video_Address		Equ	0A000H	; Starting segment addr of Video RAM
;
Set_Mode_Command	Equ	0000D	; Set the video mode
Set_CType_Command	Equ	0001D	; Set the cursor type
Set_CPos_Command	Equ	0002D	; Set the cursor position
Read_Cursor_Command	Equ	0003D	; Get cursor position and attributes
Read_LPen_Command	Equ	0004D	; Get the light pen position
Set_ADPage_Command	Equ	0005D	; Set the active display page
Scroll_Up_Command	Equ	0006D	; Scrool up or blank a portion of
					; . the video display
;
Page
;************************************************************************
;*									*
;*	EQUATES		Page 2						*
;*									*
;************************************************************************
;
Scroll_Down_Command	Equ	0007D	; Scroll down or blank a portion
					; . of the video display
Read_AChar_Command	Equ	0008D	; Read the attribute and character
Write_AChar_command	Equ	0009D	; Write the attribute and character
Write_Char_Command	Equ	0010D	; Write the character only
Set_Color_Command	Equ	0011D	; Set the color pallette
Write_Dot_Command	Equ	0012D	; Write a pixel to a graphics screen
Read_Dot_Command	Equ	0013D	; Read a pixel from a graphics screen
Write_TTY_Command	Equ	0014D	; Write a character with automatic
					; . processing for LF, CR, Bell & BS
Video_State_Command	Equ	0015D	; Get the current video state
;
Read_Keyboard_Command	Equ	0007D	; Reads character from the keyboard
Flush_Keyboard_Command	Equ	0012D	; Clears the standard keyboard buffer
Get_DOS_Version_Number	Equ	0030H	; Gets the current version of PC-DOS
Allocate_Memory		Equ	0048H	; Allocate a block of memory
Free_Memory		Equ	0049H	; Free a block of memory
Modify_Memory_Block	Equ	004AH	; Modify the size of memory block
;
Default_Drive_Command	Equ	0025D	; Get PC DOS default drive number
;
Video_Interrupt		Equ	0010H	; Interrupt 10H for video calls
Equipment_Interrupt	Equ	0011H	; Interrupt 11H for equipment
Disk_Interrupt		Equ	0013H	; Interrupt 13H for disk calls
PC_DOS_Interrupt	Equ	0021H	; Interrupt 21H for PC DOS calls
;
Parallel_Ports_Mask	Equ	0C000H	; Equipment masks
Game_Adapters_Mask	Equ	00100H	; .
RS232_Ports_Mask	Equ	00E00H	; .
Disk_Drives_Mask	Equ	000C0H	; .
Init_Video_Mask		Equ	00030H	; .
Planar_RAM_Mask		Equ	0000CH	; .
IPL_Diskette_Mask	Equ	00001H	; ..End
;
Page
;************************************************************************
;*									*
;*	EQUATES		Page 3						*
;*									*
;************************************************************************
;
Command_Com_Size	Equ	0410D	; Size of various tables and programs
CHRN_Table_Size		Equ	0180D	; in 16 byte paragraphs
					; .
					; .
ESBX_Table_Size		Equ	0020D	; .
					; .
					; .
FAT_Sector_Size		Equ	0032D	; ..End
;
DMA_Boundary_Mask	Equ	0FFFH	; Mask to isolate the high nibble of
					; . the ES segment address
;
Invalid_Drive		Equ	0255D	; Invalid drive parameter
Maximum_Drives		Equ	0003D	; Maximum number of floppy drives 
Minimum_Drives		Equ	0000D	; Minimum number of floppy drives
;
Sector_Size		Equ	0512D	; Number of bytes per sector
Paragraph_Size		Equ	0016D	; Number of bytes per paragraph
Number_of_Retries	Equ	0005D	; Number of attempts to copy 
					; . a track before admitting failure
Final_Track		Equ	0039D	; The last track on a PC DOS diskette
;
One_Side_Eight_Sectors	Equ	00FEH	; First entry in the File Allocation
Two_Sides_Eight_Sectors	Equ	00FFH	; Table (FAT)
One_Side_Nine_Sectors	Equ	00FCH	; .
Two_Sides_Nine_Sectors	Equ	00FDH	; .
Fixed_Disk		Equ	00F8H	; ..End
;
Keyboard_Buffer_Size	Equ	0080D	; Maximum number of characters in
					; . the keyboard buffer
;
Minimum_Memory_Size	Equ	0288D	; Minimum memory size in 16 byte
					; . paragraphs to hold a nine
					; . sectored track
;
Blank_Cursor		Equ	0F0FH	; Blank cursor value
Underline_Cursor	Equ	0D0DH	; Underline cursor value
;
False			Equ	0000D	; Incorrect processing occured
True			Equ Not False	; Correct processing occured
High_Values		Equ	0FFFFH	; High values
;
Page
;************************************************************************
;*									*
;*	EQUATES		Page 4						*
;*									*
;************************************************************************
;
NUL			Equ	0000D	; Null character
SOH			Equ	0001D	; SOH character
STX			Equ	0002D	; STX character
ETX			Equ	0003D	; Control Break character
Bell			Equ	0007D	; Bell character
BS			Equ	0008D	; Backspace character
HT			Equ	0009D	; Horizontal tab character
LF			Equ	0010D	; Line feed character
CR			Equ	0013D	; Carriage return character
Space			Equ	0032D	; Space or blank character
Slash			Equ	0047D	; Slash character
Zero_Digit		Equ	0048D	; Digit Zero
One_Digit		Equ	0049D	; Digit One
Capital_Letter_A	Equ	0065D	; Capital letter A
Capital_Letter_N	Equ	0078D	; Capital letter N
Capital_Letter_Y	Equ	0089D	; Capital letter Y
Small_Letter_n		Equ	0110D	; Small letter n
Small_Letter_y		Equ	0121D	; Small letter y
EOT			Equ	0255D	; End of text character
;
Minus_One		Equ	  -1D	; Numbers used in FREECOPY
Zero			Equ	0000D	; .
One			Equ	0001D	; .
Two			Equ	0002D	; .
Three			Equ	0003D	; .
Four			Equ	0004D	; .
Six			Equ	0006D	; .
Eight			Equ	0008D	; .
Nine			Equ	0009D	; .
Ten			Equ	0010D	; .
Eleven			Equ	0011D	; .
Twelve			Equ	0012D	; .
Fourteen		Equ	0014D	;.
Fifteen			Equ	0015D	; .
Twenty_Four		Equ	0024D	; .
Twenty_Five		Equ	0025D	; .
Thirty_Four		Equ	0034D	; .
Thirty_Six		Equ	0036D	; .
Thirty_Nine		Equ	0039D	; .
Seventy_Nine		Equ	0079D	; ..End
;
Page
;************************************************************************
;*									*
;*	CSEG Segment							*
;*									*
;*	This segment contains all of the code of the program.  It is	*
;*	named CSEG because this name conforms with ASM-86.		*
;*									*
;************************************************************************
;
CSEG	Segment Para Public 'CSEG'
	Assume CS:CSEG,DS:CSEG,ES:CSEG,SS:Nothing
;
Page
;************************************************************************
;*									*
;*	PROGRAM SEGMENT PREFIX						*
;*									*
;*	The first 256 bytes of every program executed under PC DOS	*
;*	contains a Program Segment Prefix control block.  The data	*
;*	stored in this block of memory is used by FREECOPY to process	*
;*	the parameters when invoking the program.			*
;*									*
;************************************************************************
;
	Org	05CH
Source_Drive		Label Byte	; Source diskette drive number
	Org	05DH
Source_Filename		Label Byte	; Source diskette filename
	Org	068H
Source_Filler_Area	Label Byte
	Org	06CH
Target_Drive		Label Byte	; Target diskette drive number
	Org	06DH
Target_Filename		Label Byte	; Target diskette filename
	Org	078H
Target_Filler_Area	Label Byte
	Org	080H
Parameter_Count		Label Byte	; Number of parameters
	Org	081H
Parameter_String	Label Byte	; String entered by the user
;
Page
;************************************************************************
;*									*
;*	A1000_MAIN_MODULE						*
;*									*
;*	This is the top level of FREECOPY and it controls the flow of	*
;*	the program.  The first sequence of commands in the routine	*
;*	preserve the state of the machine.  Next, there is a set of	*
;*	three (3) calls to sub-modules that control the initial		*
;*	processing, detail processing and final processing.  Finally,	*
;*	FREECOPY restores the state of the machine an returns to 	*
;*	PC DOS via INT 20H.						*
;*									*
;************************************************************************
;
	Org	0100H
;
Public	A1000_Main_Module
;
A1000_Main_Module Proc Far
;
A1001:
	Cli				; Set up the top of the stack
	Mov	SP,Offset MEM04_Top_of_the_Stack
	Sti				; ..End
; 
	Push	BP			; Save the state of the machine
	Push	DS			; .
	Push	ES			; .
	Push	SS			; .
	Push	AX			; .
	Push	BX			; .
	Push	CX			; .
	Push	DX			; .
	Push	SI			; .
	Push	DI			; .
	Pushf				; ..End
;
	Cli				; Save the current stack pointer
	Mov	Word Ptr SYS15_Stack_Pointer,SP
	Add	Word Ptr SYS15_Stack_Pointer,Two			; .
	Sti				; ..End
;
	Call	B1000_Initial_Process	; Main flow of control
	Cmp	Byte Ptr FLG01_Good_Command,False
	Je	A1002			; .
	Cmp	Byte Ptr FLG03_Default_Drive,False
	Je	A1002			; .
	Call	B1100_Detail_Process	; .
A1002:					; .
	Call	B1200_Final_Process	; ..End
A1090:
	Popf				; Restore the state of the machine
	Pop	DI			; .
	Pop	SI			; .
	Pop	DX			; .
	Pop	CX			; .
	Pop	BX			; .
	Pop	AX			; .
	Pop	SS			; .
	Pop	ES			; .
	Pop	DS			; .
	Pop	BP			; ..End
A1099:
	Int	20H			; Return to PC DOS
;
A1000_Main_Module Endp
;
Page
;************************************************************************
;*									*
;*	B1000_INITIAL_PROCESS						*
;*									*
;*	This module performs the following functions after control	*
;*	passess to FREECOPY:						*
;*									*
;*	 1. Sets up the Disk Parameter Table.				*
;*									*
;*	 2. Gets the current PC-DOS version number.			*
;*									*
;*	 3. Initializes various parameters.				*
;*									*
;*	 4. Gets and sets the video mode.				*
;*									*
;*	 5. Displays the intiial message.				*
;*									*
;*	 6. Parses the command line entered by a user.			*
;*									*
;*	 7. Determines the amount of equipment on the machine.		*
;*									*
;*	 8. Validates the number of disk drives on the system.		*
;*									*
;*	 9. Displays the appropriate disk copying message.		*
;*									*
;*	10. Gets the amount of available memory.			*
;*									*
;*	11. Calculates the number and position of the entries in the	*
;*	    ES:BX buffer address table.					*
;*									*
;************************************************************************
;
Page
;
Public	B1000_Initial_Process
;
B1000_Initial_Process Proc Near
;
B1001:
	Call	S1000_Setup_Disk_Param_Table
	Call	S1200_Get_Version_Number
;
	Mov	Byte Ptr FLG01_Good_Command,True
	Mov	Byte Ptr FLG02_Double_Side,True
	Mov	Byte Ptr FLG03_Default_Drive,True
	Mov	Byte Ptr FLG04_Single_Drive,True
	Mov	Byte Ptr FLG07_First_Time,True
	Mov	Byte Ptr FLG16_Free_Memory,True
	Mov	Byte Ptr FLG17_Copy_More_Disks,False
B1002:
	Call	C1000_Get_And_Set_Video	; Get and set current video state
	Call	C1100_Display_Intro	; Display the intial screen
	Call	C1200_Parse_Commands	; Parse the command line entered
					; . by the user
	Cmp	Byte Ptr FLG01_Good_Command,False
	Je	B1099			; If false, go to end of the module
	Call	C1300_Get_Equipment	; Find out the equipment on the PC
	Call	C1400_Validate_Drives	; Validate the drive numbers
	Cmp	Byte Ptr FLG03_Default_Drive,False
	Je	B1099			; If false, go to end of the module
	Call	C1500_Diskette_Messages	; Display the appropriate messages
;
	Cmp	Byte Ptr SYS19_Major_Vers_Number,Zero
	Jne	B1003			; Get available memory in paragraphs
	Call	C1600A_Get_Free_Memory	; . and create the ES:BX table
	Jmp	B1004			; .
B1003:					; .
	Call	C1600B_Get_Free_Memory	; .
B1004:					; .
	Cmp	Byte Ptr FLG01_Good_Command,False
	Je	B1099			; .
	Call	C1700_Create_ESBX_Table; ..End
B1099:
	Ret
;
B1000_Initial_Process Endp
;
Page
;************************************************************************
;*									*
;*	B1100_DETAIL_PROCESS						*
;*									*
;*	This module performs the following functions when copying one	*
;*	or more diskettes:						*
;*									*
;*	1. Initializes various parameters.				*
;*									*
;*	2. Validates the contents of the source diskette.		*
;*									*
;*	3. Creates all of the entries of the CHRN table used in		*
;*	   formatting the target diskette.				*
;*									*
;*	4. Reads the tracks of the source diskette.			*
;*									*
;*	5. If the diskette is being copied on only one drive, the	*
;*	   routines asks the user to enter the target diskette.		*
;*									*
;*	6. Writes the tracks on the target diskette.			*
;*									*
;*	7. If FREECOPY is finished copying the source diskette, the	*
;*	   program asks whether to write another target diskette,	*
;*	   provided the source diskette fits completely in memory;	*
;*	   otherwise, the program asks whether to copy a new diskette.	*
;*	   If not, the module returns to A1000_Main_Module.  If so,	*
;*	   control transfers to 1.					*
;*									*
;*	8. If FREECOPY is not completed copying the source diskette,	*
;*	   control transfers to 4.					*
;*									*
;************************************************************************
;
Page
;
Public	B1100_Detail_Process
;
B1100_Detail_Process Proc Near
;
B1101:
	Mov	Byte Ptr WRK20_Current_Source_Head,Zero
	Mov	Byte Ptr WRK21_Current_Source_Track,Zero
	Mov	Byte Ptr WRK22_Current_Target_Head,Zero
	Mov	Byte Ptr WRK23_Current_Target_Track,Zero
	Mov	Word Ptr WRK33_CHRN_Table_Address,Offset MEM02_CHRN_Table
	Mov	Byte Ptr FLG13_First_Read_Write,True
	Mov	Byte Ptr FLG14_Copy_Complete,False
	Mov	Byte Ptr FLG15_IO_Error,Three
B1102:
	Call	C1800_Validate_Source_Disk
	Cmp	Byte Ptr FLG08_Good_Read,True
	Je	B1103			; If it is a valid source, continue
	Mov	SI,Offset MES07_Correct_And_Press_Key
	Call	U1000_Display_Message	; Display the message on the screen
	Mov	Byte Ptr FLG05_Store_Buffer,False
	Call	U1100_Get_Response	; Get the user's response
	Jmp	B1101			; Go back and try again
B1103:
	Call	C1900_Create_CHRN_Table
B1104:
	Call	C2000_Read_Source_Disk
	Cmp	Byte Ptr FLG08_Good_Read,True
	Je	B1105			; If read disk correctly, continue
	Mov	SI,Offset MES07_Correct_And_Press_Key
	Call	U1000_Display_Message	; Display the message on the screen
	Mov	Byte Ptr FLG05_Store_Buffer,False
	Call	U1100_Get_Response	; Get the user's response
	Jmp	B1101			; Go back and try again
B1105:
	Cmp	Byte Ptr FLG04_Single_Drive,False
	Je	B1106			; If a single drive copy, continue
B1105A:
	Mov	SI,Offset MES10_Insert_Target
	Mov	AL,Byte Ptr WRK02_Target_Drive
	Add	AL,Capital_Letter_A	; Put drive letter into AL
	Mov	[SI+Thirty_Four],AL	; Put the drive letter into the
					; . correct position in the message
	Call	U1000_Display_Message	; Display the message on the screen
	Mov	SI,Offset MES16_Press_Any_Key
	Call	U1000_Display_Message	; Display the message on the screen
	Mov	Byte Ptr FLG05_Store_Buffer,False
	Call	U1100_Get_Response	; Get the user's response
B1106:
	Call	C2100_Write_Format_Target_Disk
	Cmp	Byte Ptr FLG09_Good_Write,False
	Je	B1110			; If bad write, go to bottom of loop
	Cmp	Byte Ptr FLG11_Good_Format,False
	Je	B1110			; If bad format, go to bottom of loop
B1107:
	Cmp	Byte Ptr FLG14_Copy_Complete,True
	Je	B1109			; If copy done, go to bottom of loop
	Cmp	Byte Ptr FLG04_Single_Drive,False
	Je	B1108			; If double drive copy, continue
	Mov	SI,Offset MES09_Insert_Source
	Mov	AL,Byte Ptr WRK01_Source_Drive
	Add	AL,Capital_Letter_A	; Put the drive letter into AL
	Mov	[SI+Thirty_Four],AL	; Put the drive letter into the
					; . correct position in the message
	Call	U1000_Display_Message	; Display the message on the screen
	Mov	SI,Offset MES16_Press_Any_Key
	Call	U1000_Display_Message	; Display the message on the screen
	Mov	Byte Ptr FLG05_Store_Buffer,False
	Call	U1100_Get_Response	; Get the user's response
B1108:
	Call	C2200_Check_File_Alloc_Table
	Cmp	Byte Ptr FLG12_Good_FAT,False
	Je	B1110			; If bad FAT, go to bottom of loop
	Mov	Byte Ptr FLG13_First_Read_Write,False
	Jmp	B1104			; Go back and read some more
B1109:
	Mov	Byte Ptr FLG07_First_Time,False
	Mov	SI,Offset MES02_Copy_Complete
	Call	U1000_Display_Message
B1110:
	Cmp	Byte Ptr FLG17_Copy_More_Disks,False
	Je	B1111
	Mov	SI,Offset MES01A_Write_Another_Diskette
	Call	U1000_Display_Message
	Call	U1200_Get_Yes_or_No
	Cmp	Byte Ptr FLG06_Yes_or_No,False
	Je	B1111			; Continue
	Mov	Byte Ptr WRK22_Current_Target_Head,Zero
	Mov	Byte Ptr WRK23_Current_Target_Track,Zero
	Mov	Word Ptr WRK33_CHRN_Table_Address,Offset MEM02_CHRN_Table
	Mov	Byte Ptr FLG13_First_Read_Write,True
	Mov	Byte Ptr FLG14_Copy_Complete,False
	Mov	Byte Ptr FLG15_IO_Error,Three
	Jmp	B1105A			; Start writing a diskette again
B1111:
	Mov	SI,Offset MES01B_Copy_Another_Diskette
	Call	U1000_Display_Message
	Call	U1200_Get_Yes_or_No
	Cmp	Byte Ptr FLG06_Yes_or_No,False
	Je	B1199			; Go to the end of the module
	Call	C1500_Diskette_Messages	; Print out the messages on screen
	Jmp	B1101			; Start copying a diskette again
B1199:
	Ret
;
B1100_Detail_Process Endp
;
Page
;************************************************************************
;*									*
;*	B1200_FINAL_PROCESS						*
;*									*
;*	This module performs the following functions before returning 	*
;*	control to PC DOS:						*
;*									*
;*	1. Restores the value of the stack pointer.			*
;*									*
;*	2. Displays the final message of the program.			*
;*									*
;*	3. Restores the underline cursor.				*
;*									*
;*	4. Restores the settings in the Disk Parameter Table.		*
;*									*
;*	5. Returns control to A1000_Main_Module.			*
;*									*
;************************************************************************
;
Page
;
Public	B1200_Final_Process
;
B1200_Final_Process Proc Near
;
B1201:
	Cli				; Establish the stack pointer
	Mov	SP,Word Ptr SYS15_Stack_Pointer
	Sti				; ..End
;
	Call	C2300_Free_Memory	; Free allocated memory  if necessary
;
	Mov	SI,Offset MES100_Freecopy_Finished
	Call	U1000_Display_Message	; Display the message on the screen
;
	Mov	AH,Set_CType_Command	; Restore the underline cursor
	Mov	CX,Underline_Cursor	; .
	Int	Video_Interrupt		; ..End
;
	Call	S1100_Restore_Disk_Param_Table
;
	Mov	AX,Offset A1090		; Setup to return to the main module
	Push	CS			; .
	Push	AX			; ..End
B1299:
	Ret
;
B1200_Final_Process Endp
;
Page
;************************************************************************
;*									*
;*	C1000_GET_AND_SET_VIDEO						*
;*									*
;*	This module gets the current video state and saves this		*
;*	information in the various SYStem variables.			*
;*									*
;************************************************************************
;
Public	C1000_Get_And_Set_Video
;
C1000_Get_And_Set_Video Proc Near
;
C1001:
	Push	AX			; Save the registers
	Push	BX			; .
	Push	CX			; ..End
C1002:
	Mov	AH,Video_State_Command	; Get the current video state
	Int	Video_Interrupt		; ..End
	Mov	Byte Ptr SYS01_Number_Columns,AH
	Mov	Byte Ptr SYS02_Current_Mode,AL
	Mov	Byte Ptr SYS03_Active_Page,BH
C1003:
	Mov	AH,Set_CType_Command	; Set the cursor to blanks
	Mov	CX,Blank_Cursor		; .
	Int	Video_Interrupt		; ..End
C1090:
	Pop	CX			; Restore the registers
	Pop	BX			; .
	Pop	AX			; ..End
C1099:
	Ret
;
C1000_Get_And_Set_Video Endp
;
Page
;************************************************************************
;*									*
;*	C1100_DISPLAY_INTRO						*
;*									*
;*	This module displays the introductory message to FREECOPY.	*
;*	Please do not disable this message, since it states the		*
;*	conditions under which a person may copy this program.		*
;*									*
;************************************************************************
;
Public	C1100_Display_Intro
;
C1100_Display_Intro Proc Near
;
C1101:
	Mov	SI,Offset MES00_Copy_Notice	; Display the copy notice
	Call	U1000_Display_Message		; ..End
C1199:
	Ret
C1100_Display_Intro Endp
;
Page
;************************************************************************
;*									*
;*	C1200_PARSE_COMMANDS						*
;*									*
;*	This module parses the command line entered by the user		*
;*	by checking the following conditions:				*
;*									*
;*	1. The source and/or the target drives do not exist.		*
;*									*
;*	2. The command line contains any characters other than two	*
;*	   drive letters (e.g., a filename).				*
;*									*
;*	3. The /1 (single side) parameter is on the command line.	*
;*									*
;************************************************************************
;
Public	C1200_Parse_Commands
;
C1200_Parse_Commands Proc Near
;
C1201:
	Cmp	AH,Invalid_Drive	; Compare for invalid drive parms
	Jne	C1202			; .
	Mov	Byte Ptr FLG01_Good_Command,False
	Mov	SI,Offset MES14_Invalid_Drive
	Call	U1000_Display_Message
	Jmp	C1299			; .
C1202:					; .
	Cmp	AL,Invalid_Drive	; .
	Jne	C1203			; .
	Mov	Byte Ptr FLG01_Good_Command,False
	Mov	SI,Offset MES14_Invalid_Drive
	Call	U1000_Display_Message
	Jmp	C1299			; ..End
C1203:
	Mov	AL,Byte Ptr Source_Drive
	Mov	Byte Ptr WRK01_Source_Drive,AL
	Mov	AL,Byte Ptr Target_Drive
	Mov	Byte Ptr WRK02_Target_Drive,AL
C1204:
	Mov	SI,Offset Source_Filename
	Mov	DI,Offset WRK03_Valid_Filename
	Mov	CX,Eleven		; Set CX to compare 11 characters 
C1205:
	Mov	AL,[SI]			; Compare for valid source diskette
	Mov	AH,[DI]			; filename in the FCB at 05DH
	Cmp	AH,AL			; .
	Je	C1206			; .
	Mov	Byte Ptr FLG01_Good_Command,False
	Mov	SI,Offset MES12_Invalid_Parameter
	Call	U1000_Display_Message
	Jmp	C1299			; .
C1206:					; .
	Inc	SI			; .
	Inc	DI			; .
	Loop	C1205			; ..End
C1207:
	Mov	SI,Offset Target_Filename
	Mov	DI,Offset WRK03_Valid_Filename
	Mov	CX,Eleven		; Set CX to comapre 11 characters
C1208:
	Mov	AL,[SI]			; Compare for valid target diskette
	Mov	AH,[DI]			; . filename in the FCB at 06DH
	Cmp	AH,AL			; .
	Je	C1209			; .
	Mov	Byte Ptr FLG01_Good_Command,False
	Mov	SI,Offset MES12_Invalid_Parameter
	Call	U1000_Display_Message
	Jmp	C1299			; .
C1209:					; .
	Inc	SI			; .
	Inc	DI			; .
	Loop	C1208			; ..End
C1210:
	Mov	AL,Byte Ptr Parameter_Count
	Mov	Byte Ptr WRK04_Parameter_Count,AL
	Mov	SI,Offset Parameter_String
	Inc	Byte Ptr WRK04_Parameter_Count
C1211:
	Dec	Byte Ptr WRK04_Parameter_Count
	Jz	C1299			; Go to the end of the module
	Mov	AL,[SI]			; Put the character into AL
	Cmp	AL,Slash		; Compare character with a slash
	Je	C1212			; If so, then continue processing
	Inc	SI			; Increment the command string addr
	Jmp	C1211			; Go back and try again
C1212:
	Inc	SI			; Increment the command string addr
	Mov	AL,[SI]			; Get the next char after the slash
	Cmp	AL,One_Digit		; Compare with the char 1
	Je	C1214			; Set double side flag to false
C1213:
	Mov	Byte Ptr FLG01_Good_Command,False
	Mov	SI,Offset MES12_Invalid_Parameter
	Call	U1000_Display_Message
	Jmp	C1299			; Go to the end of the module
C1214:
	Mov	Byte Ptr FLG02_Double_Side,False
	Dec	Byte Ptr WRK04_Parameter_Count
	Jz	C1299			; Go to the end of the module
C1215:
	Dec	Byte Ptr WRK04_Parameter_Count
	Jz	C1299			; Go to the end of the module
	Inc	SI			; Increment the command string addr
	Mov	AL,[SI]			; Get the next char in command line
	Cmp	AL,HT			; Check for tabs and spaces
	Je	C1215			; .
	Cmp	AL,Space		; .
	Je	C1215			; ..End
C1216:
	Mov	Byte Ptr FLG01_Good_Command,False
	Mov	SI,Offset MES12_Invalid_Parameter
	Call	U1000_Display_Message
C1299:
	Ret
;
C1200_Parse_Commands Endp
;
Page
;************************************************************************
;*									*
;*	C1300_GET_EQUIPMENT						*
;*									*
;*	This module determines the peripheral devices on the machine.	*
;*	It invokes the equipment status interrupt and places the	*
;*	information into the appropriate SYStem parameters.		*
;*									*
;************************************************************************
;
Public	C1300_Get_Equipment


C1300_Get_Equipment Proc Near
;
C1301:
	Int	Equipment_Interrupt	; Get the equipment on machine
	Mov	BX,AX			; Save the result for future use
;
	And	AX,Parallel_Ports_Mask	; Get the number of parallel ports
	Mov	CL,Fourteen		; .
	Shr	AX,CL			; .
	Mov	Byte Ptr SYS07_No_Parallel_Ports,AL
;
	Mov	AX,BX			; Get the game adapter attachments
	And	AX,Game_Adapters_Mask	; .
	Mov	CL,Twelve		; .
	Shr	AX,CL			; .
	Mov	Byte Ptr SYS08_Game_Adapters,AL
;
	Mov	AX,BX			; Get the number of RS-232 ports
	And	AX,RS232_Ports_Mask	; .
	Mov	CL,Nine			; .
	Shr	AX,CL			; .
	Mov	Byte Ptr SYS09_No_RS232_Ports,AL
;
	Mov	AX,BX			; Get the number of diskette drives
	And	AX,Disk_Drives_Mask	; .
	Mov	CL,Six			; .
	Shr	AX,CL			; .
	Mov	Byte Ptr SYS10_No_Disk_Drives,AL
;
	Mov	AX,BX			; Get the initial video mode
	And	AX,Init_Video_Mask	; .
	Mov	CL,Four			; .
	Shr	AX,CL			; .
	Mov	Byte Ptr SYS11_Init_Video_Mode,AL
;
	Mov	AX,BX			; Get planar RAM size
	And	AX,Planar_RAM_Mask	; .
	Mov	CL,Two			; .
	Shr	AX,CL			; .
	Mov	Byte Ptr SYS12_Planar_RAM_Size,AL
;
	Mov	AX,BX			; Get IPL from diskette flag
	And	AX,IPL_Diskette_Mask	; .
	Mov	Byte Ptr SYS13_IPL_From_Diskette,AL
;
C1399:
	Ret
;
C1300_Get_Equipment Endp
; 
Page
;************************************************************************
;*									*
;*	C1400_VALIDATE_DRIVES						*
;*									*
;*	This module determines if the drives specified in the		*
;*	command line are floppy disk drives or RAM disk drives.		*
;*	It also checks if copying the source diskette takes place	*
;*	on a single drive.						*
;*									*
;************************************************************************
;
Public	C1400_Validate_Drives
;
C1400_Validate_Drives Proc Near
;
C1401:
	Mov	AH,Default_Drive_Command; Get the PC DOS default drive
	Int	PC_DOS_Interrupt	; .
	Mov	Byte Ptr SYS14_Default_Drive,AL
C1402:
	Cmp	Byte Ptr SYS10_No_Disk_Drives,Minimum_Drives
	Ja	C1403			; If not single drive copy, set
					; . FLG04 to false
	Mov	Byte Ptr SYS14_Default_Drive,Minimum_Drives
	Mov	Byte Ptr WRK01_Source_Drive,Minimum_Drives
	Mov	Byte Ptr WRK02_Target_Drive,Minimum_Drives
	Jmp	C1499			; Go to the end of the module
C1403:
	Mov	Byte Ptr FLG04_Single_Drive,False
C1404:
	Cmp	Byte Ptr SYS14_Default_Drive,Maximum_Drives
	Jbe	C1405			; If below maximum, continue
	Mov	Byte Ptr FLG03_Default_Drive,False
	Mov	SI,Offset MES13_Invalid_Default
	Call	U1000_Display_Message
	Jmp	C1499			; Go to the end of the module
C1405:
	Dec	Byte Ptr WRK01_Source_Drive
	Cmp	Byte Ptr WRK01_Source_Drive,Minus_One
	Jne	C1406
	Mov	AL,Byte Ptr SYS14_Default_Drive
	Mov	Byte Ptr WRK01_Source_Drive,AL
C1406:
	Dec	Byte Ptr WRK02_Target_Drive
	Cmp	Byte Ptr WRK02_Target_Drive,Minus_One
	Jne	C1407
	Mov	AL,Byte Ptr SYS14_Default_Drive
	Mov	Byte Ptr WRK02_Target_Drive,AL
C1407:
	Mov	AL,Byte Ptr WRK01_Source_Drive
	Mov	AH,Byte Ptr WRK02_Target_Drive
	Cmp	AH,AL			; Check source drive = target drive
	Jne	C1499			; If so, then continue
	Mov	Byte Ptr FLG04_Single_Drive,True
C1499:
	Ret
;
C1400_Validate_Drives Endp
;
Page
;************************************************************************
;*									*
;*	C1500_DISKETTE_MESSAGES						*
;*									*
;*	This module displays the appropriate source and target		*
;*	insertion diskette messages on the screen.			*
;*									*
;************************************************************************
;
Public	C1500_Diskette_Messages
;
C1500_Diskette_Messages Proc Near
;
C1501:
	Cmp	Byte Ptr FLG07_First_Time,False
	Je	C1502			; If not first time, continue
	Cmp	Byte Ptr FLG04_Single_Drive,False
	Je	C1502			; If false, then continue
	Mov	SI,Offset MES15_Single_Drive_Copy
	Call	U1000_Display_Message
C1502:
	Mov	SI,Offset MES09_Insert_Source
	Mov	AL,Byte Ptr WRK01_Source_Drive
	Add	AL,Capital_Letter_A	; Put the drive letter into AL
	Mov	[SI+Thirty_Four],AL	; Put the drive letter into the
					; . correct position in the message
	Call	U1000_Display_Message	; Display the message on the screen
C1503:
	Cmp	Byte Ptr FLG04_Single_Drive,True
	Je	C1505			; If true, go to the message to press
					; . any key to continue
C1504:
	Mov	SI,Offset MES10_Insert_Target
	Mov	AL,Byte Ptr WRK02_Target_Drive
	Add	AL,Capital_Letter_A	; Put the drive letter into AL
	Mov	[SI+Thirty_Four],AL	; Put the drive letter into the
					; . correct position in the message
	Call	U1000_Display_Message	; Display the message on the screen
C1505:
	Mov	SI,Offset MES16_Press_Any_Key
	Call	U1000_Display_Message
	Mov	Byte Ptr FLG05_Store_Buffer,False
	Call	U1100_Get_Response
C1599:
	Ret
;
C1500_Diskette_Messages Endp
;
Page
;************************************************************************
;*									*
;*	C1600A_GET_FREE_MEMORY						*
;*									*
;*	This module calculates the amount of free 16 byte paragraphs	*
;*	available on the machine. The segment address of the beginning	*
;*	of free memory is obtained by setting DX to:			*
;*									*
;*		1. The contents of the stack segment SS plus		*
;*									*
;*		2. 256 bytes for the Program Segment Prefix plus	*
;*									*
;*		3. 128 bytes for the stack.				*
;*									*
;*	After saving the ES segment register on the stack and		*
;*	initializing both the offset register BX and the 16 byte	*
;*	counter register CX to zero, the routine begins the looping	*
;*	through memory 16 bytes at a time (incrementing the segment	*
;*	register ES by one) until either the module encounters one	*
;*	of the two (2) conditions:					*
;*									*
;*		1. The beginning of Video RAM at the segment address	*
;*		   specified in Video_Address.				*
;*									*
;*		2. The memory pattern defined by the machine that	*
;*		   indicates no more memory.				*
;*									*
;*	When either of these two (2) conditions occur, CX contains	*
;*	the  number of 16 bytes paragraphs of free memory.		*
;*									*
;*	Since we do not know the size of the transient portion of	*
;*	COMMAND.COM, FREECOPY makes the worst case assumption that	*
;*	all of the bytes in COMMAND.COM reside in high memory.		*
;*									*
;*	This module also allocates space for the ES:BX table, the	*
;*	CHRN table, the File Allocation Table (FAT) of the source	*
;*	diskette and at least one track (4608 bytes).			*
;*									*
;*	This module executes only when running PC-DOS 1.0 and 1.1!!!	*
;*									*
;************************************************************************
;
Page
;
Public	C1600A_Get_Free_Memory
;
C1600A_Get_Free_Memory Proc Near
;
C1601A:
	Mov	DX,SS			; Calculate the segment address for
					; . the beginning of free memory
	Add	DX,Offset MEM04_Top_of_the_Stack
;
	Push	ES			; Save ES on the stack for a moment
	Mov	BX,NUL			; Initialize BX and CX registers
	Mov	CX,NUL			; ..End
C1602A:
	Mov	ES,DX			; Set ES to the appropriate value
	Cli				; Turn off interrupts for a moment
	Mov	AX,ES:[BX]		; Read a word from memory into AX
	Mov	Word Ptr ES:[BX],SOH	; Put the test pattern into memory
	Cmp	Word Ptr ES:[BX],SOH	; Compare memory with test pattern
	Mov	ES:[BX],AX		; Restore the contents of memory
	Sti				; Turn on the interrupts
	Jne	C1603A			; If not equal, stop looping
	Inc	DX			; Increment DX segment register
	Cmp	DX,Video_Address	; Compare for start of Video RAM
	Jae	C1603A			; If so, stop looping
	Inc	CX			; Increment 16 byte counter CX
	Jmp	C1602A			; Go back and try again
C1603A:
	Pop	ES			; Restore the ES register
	Cmp	CX,Command_Com_Size	; Compare the paragraph size of
					; . free memory with the paragraph
					; . size of COMMAND.COM.
	Ja	C1604A			; If greater, continue
;
	Mov	Byte Ptr FLG01_Good_Command,False
	Mov	SI,Offset MES11_Insufficient_Memory
	Call	U1000_Display_Message	; Display the message on the screen
	Jmp	C1699A			; Go to the end of the module
C1604A:
	Sub	CX,Command_Com_Size	; Subtract the size of COMMAND.COM
	Cmp	CX,ESBX_Table_Size	; Compare the paragraph size of the
					; . free memory with the paragraph
					; . size of the ES:BX table
	Ja	C1605A			; If greater, continue
	Mov	Byte Ptr FLG01_Good_Command,False
	Mov	SI,Offset MES11_Insufficient_Memory
	Call	U1000_Display_Message	; Display the message on the screen
	Jmp	C1699A			; Go to the end of the module
C1605A:
	Sub	CX,ESBX_Table_Size	; Subtract the size of ES:BX table
	Cmp	CX,CHRN_Table_Size	; Compare the paragraph size of the
					; . free memory with the paragraph
					; . size of the CHRN table
	Ja	C1606A			; If greater, continue
;
	Mov	Byte Ptr FLG01_Good_Command,False
	Mov	SI,Offset MES11_Insufficient_Memory
	Call	U1000_Display_Message	; Display the message on the screen
	Jmp	C1699A			; Go to the end of the module
C1606A:
	Sub	CX,CHRN_Table_Size	; Subtract the size of CHRN Table
	Cmp	CX,FAT_Sector_Size	; Determine if there is enough memory
	Jae	C1607A			; to read the File Allocation Table
	Mov	Byte Ptr FLG01_Good_Command,False
	Mov	SI,Offset MES11_Insufficient_Memory
	Call	U1000_Display_Message	; Display the message on the screen
	Jmp	C1699A			; Go to the end of the module
C1607A:
	Sub	CX,FAT_Sector_Size	; Subtract the size of the source FAT
	Cmp	CX,Minimum_Memory_Size	; Determine if the amount of memory
	Jae	C1608A			; can hold a nine sectored track
;
	Mov	Byte Ptr FLG01_Good_Command,False
	Mov	SI,Offset MES11_Insufficient_Memory
	Call	U1000_Display_Message	; Display the message on the screen
	Jmp	C1699A			; Go to the end of the module
C1608A:
	Mov	Word Ptr SYS05_Para_RAM_Size,CX
C1699A:
	Ret
;
C1600A_Get_Free_Memory Endp
;
Page
;************************************************************************
;*									*
;*	C1600B_GET_FREE_MEMORY						*
;*									*
;*	This module calcules the amount of available memory.  It	*
;*	executes when running PC-DOS versions 2.0 and above.		*
;*									*
;************************************************************************
;
Public	C1600B_Get_Free_Memory
;
C1600B_Get_Free_Memory Proc Near
;
C1601B:
	Mov	AH,Modify_Memory_Block	; Allocate enough space for the
	Mov	BX,Offset MEM00_Bottom_Free_Memory
	Mov	CL,Four			; . program and all tables
	Shr	BX,CL			; .
	Inc	BX			; .
	Int	PC_DOS_Interrupt	; .
	Jnc	C1603B			; ..End
C1602B:
	Mov	Byte Ptr FLG01_Good_Command,False
	Mov	SI,Offset MES11_Insufficient_Memory
	Call	U1000_Display_Message	; Display the message on the screen
	Jmp	C1699B			; Go to the end of the module
C1603B:
	Mov	AH,Allocate_Memory	; Get the amount of available memory
	Mov	BX,High_Values		; .
	Int	PC_DOS_Interrupt	; .
	Mov	Word Ptr SYS21_Alloc_Segment,AX
	Mov	Word Ptr SYS05_Para_RAM_Size,BX
	Jnc	C1699B			; .
	Cmp	AL,Eight		; .
	Je	C1605B			; .
C1604B:
	Mov	SI,Offset MES97_Return_Linefeed
	Call	U1000_Display_Message	; Issue a carriage return/linefeed
	Mov	SI,Offset MES99_Memory_Block_Destroyed
	Call	U1000_Display_Message	; Display the message on the screen
	Jmp	C1699B			; Go to the end of the module
C1605B:
	Mov	AH,Allocate_Memory	; .
	Int	PC_DOS_Interrupt	; ..End
	Mov	Word Ptr SYS21_Alloc_Segment,AX
	Mov	Word Ptr SYS05_Para_RAM_Size,BX
	Jnc	C1606B			; Set the allocation flag
	Jmp	C1604B			; Go to the error condition
C1606B:
	Mov	Byte Ptr FLG16_Free_Memory,False
C1699B:
	Ret
;
C1600B_Get_Free_Memory Endp
;
Page
;************************************************************************
;*									*
;*	C1700_CREATE_ESBX_TABLE						*
;*									*
;*	This module creates the correct ES:BX addresses that are	*
;*	used when storing tracks read from the source diskette.		*
;*	The routine allocates at most 80 entries in the table for	*
;*	double sided diskettes.						*
;*									*
;************************************************************************
;
Public	C1700_Create_ESBX_Table
;
C1700_Create_ESBX_Table Proc Near
;
C1701:
	Mov	Word Ptr WRK34_DMA_OverFlow_Counter,ZERO
;
	Mov	Word Ptr WRK18_Counter_ESBX_Entries,Zero
	Mov	AX,Nine			; Calculate DI = the number of bytes
	Mov	BX,Sector_Size		; per track and BX = the number of
	Mul	BX			; paragraphs per track
	Mov	DI,AX			; .
	Mov	BX,Paragraph_Size	; .
	Mov	DX,Zero			; .
	Div	BX			; .
	Mov	BX,AX			; ..End
;
	Cmp	Byte Ptr SYS19_Major_Vers_Number,Zero
	Je	C1702			; Compare for PC DOS 1.0 and 1.1
	Mov	AX,Word Ptr SYS21_Alloc_Segment
	Jmp	C1703			; Continue
C1702:
	Mov	AX,CS			; Calculate the address of the 1st
	Mov	CL,Four			; that will be copied into memory
	Shl	AX,CL			; .
	Add	AX,Offset MEM00_Bottom_Free_Memory
	Shr	AX,CL			; .
	Inc	AX			; ..End
C1703:
	Mov	SI,Offset MEM03_ESBX_Table
	Mov	Word Ptr [SI],Zero	; Put the 1st entry into the table
	Mov	Word Ptr [SI+Two],AX	; ..End
C1704:
	Cmp	Word Ptr WRK18_Counter_ESBX_Entries,Seventy_Nine
	Jae	C1707			; Calculate the ES:BX valid entries
	Add	SI,Four			; Get the next ES:BX table address
;
	Mov	AX,[SI-Two]		; Check for DMA overflow error
	And	AX,DMA_Boundary_Mask	; .
	Shl	AX,CL			; .
	Add	AX,DI			; .
	Jnc	C1705			; ..End
;
	Mov	AX,[SI-Two]		; Correction for DMA overflow
	Add	AX,BX			; .
	Mov	[SI-Two],AX		; ..End
	Inc	Word Ptr WRK34_DMA_Overflow_Counter
C1705:
	Mov	AX,[SI-Two]		; Increment the ES segment address
	Add	AX,BX			; ..End
C1706:
	Mov	Word Ptr [SI],Zero	; Put the address into the table
	Mov	Word Ptr [SI+Two],AX	; ..End
	Inc	Word Ptr WRK18_Counter_ESBX_Entries
	Jmp	C1704			; Go back and find another entry
C1707:
	Mov	AX,Word Ptr SYS05_Para_RAM_Size
	Mov	DX,Zero			; Divide by the number of paragraphs
	Div	BX			; . per track
	Mov	Word Ptr WRK19_Number_ESBX_Entries,AX
	Mov	AX,Word Ptr WRK34_DMA_Overflow_Counter
	Sub	Word Ptr WRK19_Number_ESBX_Entries,AX
	Cmp	Word Ptr WRK19_Number_ESBX_Entries,Seventy_Nine
	Jb	C1799			; If less than 79, continue
	Mov	Word Ptr WRK19_Number_ESBX_Entries,Seventy_Nine
	Mov	Byte Ptr FLG17_Copy_More_Disks,True
C1799:
	Ret
;
C1700_Create_ESBX_Table Endp
;
Page
;************************************************************************
;*									*
;*	C1800_VALIDATE_SOURCE_DISK					*
;*									*
;*	This module determines if the source diskette is readable	*
;*	and whether it was formatted under PC DOS 1.0, 1.1, 2.0 or	*
;*	2.1.  The routine also reads the first copy of the File		*
;*	Allocation Table (FAT) storing it for future comparisons	*
;*	as well as analyzing it first entry.				*
;*									*
;*	A series of comparisons for the number of sectors per track	*
;*	is done for the following reasons.  All diskettes formatted	*
;*	under PC DOS 2.0 and 2.1 really have nine sectors.  In order	*
;*	to obtain an eight sectored diskette, the operating system	*
;*	sets the first byte of the File Allocation Table (FAT)		*
;*	accordingly.  In contrast, PC DOS 1.0 and 1.1 formats a track	*
;*	to have exactly eight sectors.					*
;*									*
;************************************************************************
;
Public	C1800_Validate_Source_Disk
;
C1800_Validate_Source_Disk Proc Near
;
C1801:
	Mov	Byte Ptr FLG08_Good_Read,True
;
	Mov	AL,Byte Ptr WRK01_Source_Drive
	Mov	Byte Ptr WRK06_Drive_Number,AL
	Mov	Byte Ptr WRK07_Head_Number,Zero
	Mov	Byte Ptr WRK08_Track_Number,Zero
	Mov	Byte Ptr WRK09_Sector_Number,Nine
	Mov	Byte Ptr WRK10_Number_of_Sectors,One
	Push	CS			; Establish the address ES:BX
	Pop	ES			; ..End
	Mov	BX,Offset MEM01_File_Allocation_Table
;
	Call	D1000_Read_Diskette
;
	Cli				; Set the number of sectors to nine
	Mov	Byte Ptr SYS18_Disk_Parameter_Table[Four],Nine
	Sti				; .
	Mov	Byte Ptr WRK17_Maximum_Sectors,Nine
;				
	Cmp	Byte Ptr FLG08_Good_Read,True
	Je	C1803			; Check for good read of sector nine
	Cmp	Byte Ptr WRK14_Status_Operation,Sector_Error
	Je	C1802			; If so, continue
	Mov	Byte Ptr FLG15_IO_Error,One
	Call	D1200_Disk_IO_Error	; Process the error
	Jmp	C1899			; ..End
C1802:
	Cli				; Set the number of sectors to eight
	Mov	Byte Ptr SYS18_Disk_Parameter_Table[Four],Eight
	Sti				; .
	Mov	Byte Ptr WRK17_Maximum_Sectors,Eight
C1803:					; .
	Mov	Byte Ptr FLG08_Good_Read,True
;
	Mov	AL,Byte Ptr WRK01_Source_Drive
	Mov	Byte Ptr WRK06_Drive_Number,AL
	Mov	Byte Ptr WRK07_Head_Number,Zero
	Mov	Byte Ptr WRK08_Track_Number,Zero
	Mov	Byte Ptr WRK09_Sector_Number,Two
	Mov	Byte Ptr WRK10_Number_of_Sectors,One
	Push	CS			; Establish the address ES:BX
	Pop	ES			; ..End
	Mov	BX,Offset MEM01_File_Allocation_Table
;
	Call	D1000_Read_Diskette
;
	Cmp	Byte Ptr FLG08_Good_Read,True
	Je	C1804			; If the read operation was
					; . successful, continue
	Mov	Byte Ptr FLG15_IO_Error,One
	Call	D1200_Disk_IO_Error	; Display appropriate error message
	Jmp	C1899			; Go to the end of the module
C1804:
	Mov	AL,Byte Ptr MEM01_File_Allocation_Table[Zero]
;
	Cmp	AL,One_Side_Eight_Sectors
	Jne	C1805			; If not, continue
	Mov	Byte Ptr WRK15_Maximum_Heads,Zero
	Mov	Byte Ptr WRK16_Maximum_Tracks,Thirty_Nine
	Mov	SI,Offset MES03_Copy81_Sectors
	Jmp	C1809			; Continue the processing
C1805:
	Cmp	AL,Two_Sides_Eight_Sectors
	Jne	C1806			; If not, continue
	Mov	Byte Ptr WRK15_Maximum_Heads,One
	Mov	Byte Ptr WRK16_Maximum_Tracks,Seventy_Nine
	Mov	SI,Offset MES04_Copy82_Sectors
	Jmp	C1809			; Continue the processing
C1806:
	Cmp	AL,One_Side_Nine_Sectors
	Jne	C1807			; If not, continue
	Mov	Byte Ptr WRK15_Maximum_Heads,Zero
	Mov	Byte Ptr WRK16_Maximum_Tracks,Thirty_Nine
	Mov	SI,Offset MES05_Copy91_Sectors
	Jmp	C1809			; Continue the processing
C1807:
	Cmp	AL,Two_Sides_Nine_Sectors
	Jne	C1808			; If not, continue
	Mov	Byte Ptr WRK15_Maximum_Heads,One
	Mov	Byte Ptr WRK16_Maximum_Tracks,Seventy_Nine
	Mov	SI,Offset MES06_Copy92_Sectors
	Jmp	C1809			; Continue the processing
C1808:
	Mov	Byte Ptr FLG08_Good_Read,False
	Mov	SI,Offset MES19_Unrecoverable_Read
	Call	U1000_Display_Message	; Display the message on the screen
	Mov	SI,Offset MES90_Unknown_FAT_Error
	Call	U1000_Display_Message	; Display the message on the screen
	Jmp	C1899			; Go to display the message
C1809:
	Cmp	Byte Ptr WRK15_Maximum_Heads,Zero
	Je	C1810			; If the diskette is single sided,
					; . display the diskette message
	Cmp	Byte Ptr FLG02_Double_Side,True
	Je	C1810			; If the flag indicates to copy 
					; . both sides of the diskette,
					; . then continue
	Mov	Byte Ptr WRK15_Maximum_Heads,Zero
	Mov	Byte Ptr WRK16_Maximum_Tracks,Thirty_Nine
C1810:
	Mov	AL,Byte Ptr WRK01_Source_Drive
	Mov	Byte Ptr WRK06_Drive_Number,AL
	Mov	Byte Ptr WRK07_Head_Number,One
	Mov	Byte Ptr WRK08_Track_Number,Zero
	Mov	Byte Ptr WRK09_Sector_Number,One
	Mov	Byte Ptr WRK10_Number_of_Sectors,One
	Push	CS			; Establish the ES segment register
	Pop	ES			; .
	Push	ES			; ..End
	Mov	BX,Offset MEM00_Bottom_Free_Memory
	Cmp	SYS19_Major_Vers_Number,Zero
	Je	C1811			; If PC DOS 1.0 or 1.1, continue;
					; . otherwise, setup ES:BX a little
	Mov	ES,Word Ptr SYS21_Alloc_Segment
	Mov	BX,Zero			; . differently
C1811:
	Call	D1000_Read_Diskette
	Pop	ES			; Restore ES in any case
;
	Cmp	Byte Ptr FLG08_Good_Read,True
	Je	C1813		; Go to display the message
	Cmp	Byte Ptr WRK15_Maximum_Heads,One
	Je	C1812		; If double sided diskette, error!!!
	Mov	Byte Ptr FLG08_Good_Read,True
	Mov	Byte Ptr FLG02_Double_Side,False
	Jmp	C1813		; Display the appropriate message
C1812:
	Mov	SI,Offset MES19_Unrecoverable_Read
	Call	U1000_Display_Message	; Display the message on the screen
	Mov	SI,Offset MES91_Single_Side_Error
	Call	U1000_Display_Message	; Display the message on the screen
	Jmp	C1899			; Go to the end of the module
C1813:
	Call	U1000_Display_Message	; Display the message on the screen
C1899:
	Ret
;
C1800_Validate_Source_Disk Endp
;
Page
;************************************************************************
;*									*
;*	C1900_CREATE_CHRN_TABLE						*
;*									*
;*	This module creates the CHRN table to be used in case the	*
;*	target diskette needs to be formatted.	The abbreviation	*
;*	stands for C = track number, H = head number, R = sector	*
;*	number and N = a code for the number of bytes per sector.	*
;*									*
;************************************************************************
;
Public	C1900_Create_CHRN_Table
;
C1900_Create_CHRN_Table Proc Near
;
C1901:
	Mov	BH,Byte Ptr WRK15_Maximum_Heads
	Mov	BL,Byte Ptr WRK16_Maximum_Tracks
	Mov	AL,Nine
;
	Mov	CL,BH			; Establish correct track number
	Shr	BL,CL			; ..End
;
	Mov	DL,Two			; . DL = number of sectors
	Mov	DH,Zero			; . DH = head number
	Mov	CH,Zero			; . CH = track number
	Mov	CL,One			; . CL = sector number
	Mov	SI,Offset MEM02_CHRN_Table; Set up initial registers
C1902:
	Mov	[SI],CH			; Establish an entry in the CHRN
	Mov	[SI+One],DH		; . table
	Mov	[SI+Two],CL		; .
	Mov	[SI+Three],DL		; ..End
;
	Add	SI,Four			; Get the addr of next CHRN entry
	Inc	CL			; Increment the sector number
	Cmp	CL,AL			; Compare for maximum sectors
	Jbe	C1902			; If not, go back and try again
;
	Mov	CL,One			; Initialize sector number
	Inc	DH			; Increment the head number
	Cmp	DH,BH			; Compare for maximum heads
	Jbe	C1902			; If not, go back and try again
;
	Mov	CL,One			; Initialize sector number
	Mov	DH,Zero			; Initialize head number
	Inc	CH			; Increment the track number
	Cmp	CH,BL			; Compare for maximum tracks
	Jbe	C1902			; If not, go back and try again
C1999:
	Ret
;
C1900_Create_CHRN_Table Endp
;
Page
;************************************************************************
;*									*
;*	C2000_READ_SOURCE_DISK						*
;*									*
;*	This module reads a diskette track by track until it fills	*
;*	all of available memory specified by the ES:BX table.  The	*
;*	processing sequence is:						*
;*									*
;*	1. Initializes the SI resgister to point to the correct entry	*
;*	   in the ES:BX table.						*
;*									*
;*	2. Prints the initial read message on the screen.		*
;*									*
;*	3. Compares for the end of the ES:BX table and/or the number	*
;*	   of tracks on the diskette.  If not, continue.  If so,	*
;*	   return to B1100_Detail_Processing.				*
;*									*
;*	4. Reads a track from the source diskette.			*
;*									*
;*	5. Displays the track and head numbers on the screen.		*
;*									*
;*	6. Transfers control to 3.					*
;*									*
;************************************************************************
;
Page
;
Public	C2000_Read_Source_Disk
;
C2000_Read_Source_Disk Proc Near
;
C2001:
	Mov	Byte Ptr FLG08_Good_Read,True
;
	Mov	SI,Offset MEM03_ESBX_Table
	Mov	Word Ptr WRK18_Counter_ESBX_Entries,Zero
;
	Cmp	Byte Ptr FLG13_First_Read_Write,False
	Je	C2002			; If not first time, continue
	Mov	Byte Ptr WRK31_Track_Read_Counter,Zero
	Jmp	C2003			; Go to display the message
C2002:
	Cmp	Byte Ptr FLG04_Single_Drive,False
	Je	C2004			; If double drive copy, continue
C2003:
	Push	SI			; Save SI = Addr of ES:BX table
	Mov	SI,Offset MES97_Return_Linefeed
	Call	U1000_Display_Message	; Display a return and linefeed
	Mov	SI,Offset MES17_Reading_Track
	Mov	AL,Byte Ptr WRK21_Current_Source_Track
	Call	U1300_Convert_Binary_to_ASCII
	Mov	[SI+Fifteen],AX		; Put the track number into message
	Mov	AL,Byte Ptr WRK20_Current_Source_Head
	Call	U1300_Convert_Binary_to_ASCII
	Mov	[SI+Twenty_Five],AL	; Put the head number into message
	Call	U1000_Display_Message	; Display the message on the screeen
;
	Mov	AH,Read_Cursor_Command	; Get the current cursor position
	Mov	BH,Byte Ptr SYS03_Active_Page
	Int	Video_Interrupt		; ..End
;
	Dec	DH			; Save the row of the read track and
	Mov	Byte Ptr WRK24_Read_Message_Row,DH; . head message
;
	Pop	SI			; Restore SI = Addr of ES:BX table
C2004:
	Mov	AL,Byte Ptr WRK31_Track_Read_Counter
	Cmp	AL,Byte Ptr WRK16_Maximum_Tracks
	Jbe	C2005			; If more tracks, then continue
	Jmp	C2099			; Go to the end of the module
C2005:
	Mov	AX,Word Ptr WRK18_Counter_ESBX_Entries
	Cmp	AX,Word Ptr WRK19_Number_ESBX_Entries
	Jbe	C2006			; If more memory exists, continue
	Jmp	C2099			; Go to the end of the module
C2006:
;					; Display the current track and head
	Mov	AL,Byte Ptr WRK24_Read_Message_Row
	Mov	Byte Ptr WRK28_Current_Message_Row,AL
	Mov	AL,Byte Ptr WRK20_Current_Source_Head
	Mov	Byte Ptr WRK29_Current_Head,AL
	Mov	AL,Byte Ptr WRK21_Current_Source_Track
	Mov	Byte Ptr WRK30_Current_Track,AL
;
	Call	U1400_Display_Head_and_Track
;
					; Establish the disk parameters
	Mov	AL,Byte Ptr WRK01_Source_Drive
	Mov	Byte Ptr WRK06_Drive_Number,AL
	Mov	AL,Byte Ptr WRK20_Current_Source_Head
	Mov	Byte Ptr WRK07_Head_Number,AL
	Mov	AL,Byte Ptr WRK21_Current_Source_Track
	Mov	Byte Ptr WRK08_Track_Number,AL
	Mov	Byte Ptr WRK09_Sector_Number,One
	Mov	AL,Byte Ptr WRK17_Maximum_Sectors
	Mov	Byte Ptr WRK10_Number_of_Sectors,AL
	Mov	AX,DS:[SI]		; .
	Mov	BX,AX			; .
	Mov	AX,DS:[SI+Two]		; .
	Mov	ES,AX			; ..End
;
	Call	D1000_Read_Diskette	; Read the source diskette
C2007:
	Cmp	Byte Ptr FLG08_Good_Read,True
	Je	C2008			; If the read operation was 
					; . successful, then continue
	Mov	Byte Ptr FLG15_IO_Error,One
	Call	D1200_Disk_IO_Error	; Display appropriate error message
	Jmp	C2099			; Go to the end of the module
C2008:
	Inc	Byte Ptr WRK31_Track_Read_Counter
	Inc	Word Ptr WRK18_Counter_ESBX_Entries
	Add	SI,Four			; Increment addr of the ES:BX table
	Cmp	Byte Ptr FLG02_Double_Side,False
	Je	C2009			; If single sided, then continue
	Inc	Byte Ptr WRK20_Current_Source_Head
	Cmp	Byte Ptr WRK20_Current_Source_Head,One
	Jbe	C2010			; If the head number is less than or
					; . equal to one, then continue
	Mov	Byte Ptr WRK20_Current_Source_Head,Zero
C2009:
	Inc	Byte Ptr WRK21_Current_Source_Track
C2010:
	Jmp	C2004			; Go back and read another track
C2099:
	Ret
;
C2000_Read_Source_Disk Endp
;
Page
;************************************************************************
;*									*
;*	C2100_WRITE_FORMAT_TARGET_DISK					*
;*									*
;*	This module formats and writes  a diskette track by track	*
;*	until it fills all of available memory specified by the		*
;*	ES:BX table.  The processing sequence is:			*
;*									*
;*	1. Initializes the SI resgister to point to the correct entry	*
;*	   in the ES:BX table.						*
;*									*
;*	2. Prints the initial write message on the screen.		*
;*									*
;*	3. Compares for the end of the ES:BX table and/or the number	*
;*	   of tracks on the diskette.  If not, continue.  If so,	*
;*	   return to B1100_Detail_Processing.				*
;*									*
;*	4. Writes a track from the source diskette.			*
;*									*
;*	5. Displays the track and head numbers on the screen.		*
;*									*
;*	6. Transfers control to 3.					*
;*									*
;************************************************************************
;
Public	C2100_Write_Format_Target_Disk
;
C2100_Write_Format_Target_Disk Proc Near
;
C2101:
	Mov	Byte Ptr FLG09_Good_Write,True
	Mov	Byte Ptr FLG11_Good_Format,True
;
	Mov	Byte Ptr WRK13_Retry_Counter,Number_of_Retries
;
	Mov	SI,Offset MEM03_ESBX_Table
	Mov	Word Ptr WRK18_Counter_ESBX_Entries,Zero
;
	Cmp	Byte Ptr FLG13_First_Read_Write,False
	Je	C2102			; If not first time, continue
	Mov	Byte Ptr WRK32_Track_Write_Counter,Zero
	Jmp	C2103			; Go to display the message
C2102:
	Cmp	Byte Ptr FLG04_Single_Drive,False
	Je	C2104			; If double drive copy, continue
C2103:
	Push	SI			; Save SI = Addr of ES:BX table
;
	Mov	SI,Offset MES97_Return_Linefeed
	Call	U1000_Display_Message	; Display return and line feed
	Mov	SI,Offset MES23_Writing_Track
	Call	U1000_Display_Message	; Display write track message
;
	Mov	AH,Read_Cursor_Command	; Get the current cursor position
	Mov	BH,Byte Ptr SYS03_Active_Page
	Int	Video_Interrupt		; ..End
;
	Dec	DH			; Save the row of the I/O track and
	Mov	Byte Ptr WRK27_Write_Message_Row,DH; . head information
	Sub	DH,Two			; .
	Mov	Byte Ptr WRK24_Read_Message_Row,DH
;
	Pop	SI			; Restore SI = Addr of ES:BX table
C2104:
	Mov	AL,Byte Ptr WRK32_Track_Write_Counter
	Cmp	AL,Byte Ptr WRK16_Maximum_Tracks
	Jbe	C2105			; If more tracks, then continue
	Mov	Byte Ptr FLG14_Copy_Complete,True
	Jmp	C2199			; Go to the end of the module
C2105:
	Mov	AX,Word Ptr WRK18_Counter_ESBX_Entries
	Cmp	AX,Word Ptr WRK19_Number_ESBX_Entries
	Jbe	C2106			; If more memory exists, continue
	Jmp	C2199			; Go to the end of the module
C2106:
;					; Establish the disk parameters
	Mov	AL,Byte Ptr WRK02_Target_Drive
	Mov	Byte Ptr WRK06_Drive_Number,AL
	Mov	AL,Byte Ptr WRK22_Current_Target_Head
	Mov	Byte Ptr WRK07_Head_Number,AL
	Mov	AL,Byte Ptr WRK23_Current_Target_Track
	Mov	Byte Ptr WRK08_Track_Number,AL
	Mov	Byte Ptr WRK09_Sector_Number,One
	Mov	AL,Byte Ptr WRK17_Maximum_Sectors
	Mov	Byte Ptr WRK10_Number_of_Sectors,AL
	Mov	AX,DS:[SI+Two]		; .
	Mov	Word Ptr WRK11_Segment_Address,AX
	Mov	AX,DS:[SI]		; .
	Mov	Word Ptr WRK12_Offset_Address,AX
;
	Call	D1100_Write_Format_Diskette
;
	Cmp	Byte Ptr FLG11_Good_Format,True
	Je	C2107			; If a good format, continue
	Cmp	Byte Ptr FLG09_Good_Write,True
	Je	C2107			; If a good write, continue
	Call	D1200_Disk_IO_Error	; Display appropriate error message
	Jmp	C2199			; Go to the end of the module
C2107:
	Inc	Byte Ptr WRK32_Track_Write_Counter
	Inc	Word Ptr WRK18_Counter_ESBX_Entries
	Add	SI,Four			; Increment addr of the ES:BX table
	Cmp	Byte Ptr FLG02_Double_Side,False
	Je	C2108			; If single sided, then continue
	Inc	Byte Ptr WRK22_Current_Target_Head
	Cmp	Byte Ptr WRK22_Current_Target_Head,One
	Jbe	C2109			; If the head number is less than or
					; . equal to one, then continue
	Mov	Byte Ptr WRK22_Current_Target_Head,Zero
C2108:
	Inc	Byte Ptr WRK23_Current_Target_Track
C2109:
	Jmp	C2104			; Go back and write another track
C2199:
	Ret
;
C2100_Write_Format_Target_Disk Endp
;
Page
;************************************************************************
;*									*
;*	C2200_CHECK_FILE_ALLOC_TABLE					*
;*									*
;*	This module checks the File Allocation Table (FAT) of the	*
;*	diskette in the source drive and compares it with the File	*
;*	Allocation Table (FAT) of the original source diskette.  If	*
;*	there are any differences, the program sets the flag		*
;*	FLG12_Good_FAT to False; otherwise, the flag is True.		*
;*									*
;************************************************************************
;
Public	C2200_Check_File_Alloc_Table
;
C2200_Check_File_Alloc_Table Proc Near
;
C2201:
	Mov	Byte Ptr FLG12_Good_FAT,True
;
	Mov	AL,Byte Ptr WRK01_Source_Drive
	Mov	Byte Ptr WRK06_Drive_Number,AL
	Mov	Byte Ptr WRK07_Head_Number,Zero
	Mov	Byte Ptr WRK08_Track_Number,Zero
	Mov	Byte Ptr WRK09_Sector_Number,Two
	Mov	Byte Ptr WRK10_Number_of_Sectors,One
	Push	CS			; Establish the ES segment register
	Pop	ES			; .
	Push	ES			; ..End
	Mov	BX,Offset MEM00_Bottom_Free_Memory
	Cmp	SYS19_Major_Vers_Number,Zero
	Je	C2202			; If PC DOS 1.0 or 1.1, continue;
					; . otherwise, set up ES:BX a little
	Mov	ES,Word Ptr SYS21_Alloc_Segment
	Mov	BX,Zero			; . differently
C2202:
	Call	D1000_Read_Diskette	; Read the File Allocation Table
	Pop	ES			; Restore ES in any case
;
	Cmp	Byte Ptr FLG08_Good_Read,True
	Je	C2203			; If the read operation was
					; . successful, continue
	Mov	Byte Ptr FLG15_IO_Error,One
	Call	D1200_Disk_IO_Error	; Display appropriate error message
	Jmp	C2299			; Go to the end of the module
C2203:
	Mov	SI,Offset MEM01_File_Allocation_Table
	Mov	DI,Offset MEM00_Bottom_Free_Memory
	Push	ES			; Save ES for a moment
	Cmp	Byte Ptr SYS19_Major_Vers_Number,Zero
	Je	C2204			; If PC DOS 1.0 or 1.1, continue
	Mov	ES,Word Ptr SYS21_Alloc_Segment
	Mov	DI,Zero			; Set up ES:DI for PC DOS 2.0+
C2204:
	Mov	CX,Sector_Size		; Set counter CX to compare the
					; . sector size in words
	Shr	CX,1			; ..End
	Cld				; Clear the direction flag
	Rep	Cmpsw			; Compare all of the 512 bytes
	Jne	C2205			; If there is a discrepancy, go to
					; . the error message routine
	Jmp	C2206			; Go to the end of the module
C2205:
	Pop	ES			; Restore the ES register
	Mov	Byte Ptr FLG12_Good_FAT,False
	Mov	SI,Offset MES19_Unrecoverable_Read
	Call	U1000_Display_Message	; Display the message on the screen
	Mov	SI,Offset MES90_Unknown_FAT_Error
	Call	U1000_Display_Message	; Display the message on the screen
	Jmp	C2299			; Go to the end of the module
C2206:
	Pop	ES			; Restore the ES register
C2299:
	Ret
;
C2200_Check_File_Alloc_Table Endp
;
Page
;************************************************************************
;*									*
;*	C2300_FREE_MEMORY						*
;*									*
;*	This module free up allocated memory, provided that a user	*
;*	is running PC DOS 2.0 or greater; otherwise, it does nothing.	*
;*									*
;************************************************************************
;
Public	C2300_Free_Memory
;
C2300_Free_Memory Proc Near
;
C2301:
	Cmp	Byte Ptr SYS19_Major_Vers_Number,Zero
	Je	C2399			; If PC DOS 1.0 or 1.1, go to the
					; . end of the module
	Cmp	Byte Ptr FLG16_Free_Memory,True
	Je	C2399			; If memory was not allocated, go
					; . to the end of the module
;
	Mov	AH,Free_Memory		; Free allocated memory
	Push	ES			; .
	Mov	ES,Word Ptr SYS21_Alloc_Segment
	Int	PC_DOS_Interrupt	; .
	Pop	ES			; .
	Jnc	C2399			; ..End
;
	Mov	SI,Offset MES97_Return_Linefeed
	Call	U1000_Display_Message	; Issue a carriage return/linefeed
	Mov	SI,Offset MES99_Memory_Block_Destroyed
	Call	U1000_Display_Message	; Display the message on the screen
C2399:
	Ret
;
C2300_Free_Memory Endp
;
Page
;************************************************************************
;*									*
;*	D1000_READ_DISKETTE						*
;*									*
;*	This module reads a track at a time from a diskette. If it	*
;*	fails to read the diskette it tries Number_of_Retries = 5	*
;*	times.								*
;*									*
;************************************************************************
;
Public	D1000_Read_Diskette
;
D1000_Read_Diskette Proc Near
;
D1001:
	Mov	Byte Ptr WRK13_Retry_Counter,Number_of_Retries
D1002:
	Clc				; Clear the carry flag
	Mov	AH,Read_Command		; Read the data on the diskette
	Mov	DL,Byte Ptr WRK06_Drive_Number
	Mov	DH,Byte Ptr WRK07_Head_Number
	Mov	CH,Byte Ptr WRK08_Track_Number
	Mov	CL,Byte Ptr WRK09_Sector_Number
	Mov	AL,Byte Ptr WRK10_Number_of_Sectors
	Int	Disk_Interrupt		; ..End
;
	Mov	Byte Ptr WRK14_Status_Operation,AH
	Jnc	D1099			; Go to the end of the module
D1003:
	Dec	Byte Ptr WRK13_Retry_Counter
	Jz	D1004			; Could not read the diskette
	Clc				; Clear the carry flag
	Mov	AH,Reset_Command	; Initialize the disk controller
	Int	Disk_Interrupt		; .
	Mov	Byte Ptr WRK14_Status_Operation,AH
	Jnc	D1002			; .
	Jmp	D1003			; ..End
D1004:
	Mov	Byte Ptr FLG08_Good_Read,False
D1099:
	Ret
;
D1000_Read_Diskette Endp
;
Page
;************************************************************************
;*									*
;*	D1100_WRITE_FORMAT_DISKETTE					*
;*									*
;*	This module formats and writes a track at a time to a 		*
;*	diskette.  If it fails to format or a write a track, it tries	*
;*	Number_of_Retries = 5 times.					*
;*									*
;************************************************************************
;
Public	D1100_Write_Format_Diskette
;
D1100_Write_Format_Diskette Proc Near
;
D1101:
	Mov	Byte Ptr WRK13_Retry_Counter,Number_of_Retries
D1102:
	Clc				; Clear the carry flag
	Mov	AH,Format_Command	; Format the diskette
	Mov	DL,Byte Ptr WRK06_Drive_Number
	Mov	DH,Byte Ptr WRK07_Head_Number
	Mov	CH,Byte Ptr WRK08_Track_Number
	Mov	CL,Byte Ptr WRK09_Sector_Number
	Mov	AL,Byte Ptr WRK10_Number_of_Sectors
	Push	CS			; .
	Pop	ES			; .
	Mov	BX,Word Ptr WRK33_CHRN_Table_Address
	Int	Disk_Interrupt		; ..End
	Mov	Byte Ptr WRK14_Status_Operation,AH
	Jnc	D1105			; Formatted the diskette
D1103:
	Dec	Byte Ptr WRK13_Retry_Counter
	Jz	D1104			; Go to format error processing
	Clc				; Clear the carry flag
	Mov	AH,Reset_Command	; Initialize the disk controller
	Int	Disk_Interrupt		; .
	Mov	Byte Ptr WRK14_Status_Operation,AH
	Jnc	D1102			; Try to format the disk again
	Jmp	D1103			; Try to initialize the disk again
D1104:
	Mov	Byte Ptr FLG15_IO_Error,Zero
	Mov	Byte Ptr FLG11_Good_Format,False
	Jmp	D1199			; Go to the end of the module
D1105:
	Mov	Byte Ptr WRK13_Retry_Counter,Number_of_Retries
D1106:
	Clc				; Clear the carry flag
	Mov	AH,Write_Command	; Write the diskette
	Mov	ES,Word Ptr WRK11_Segment_Address
	Mov	BX,Word Ptr WRK12_Offset_Address
	Mov	AL,Byte Ptr WRK10_Number_of_Sectors
	Int	Disk_Interrupt		; .
	Mov	Byte Ptr WRK14_Status_Operation,AH
	Jnc	D1109			; ..End
D1107:
	Dec	Byte Ptr WRK13_Retry_Counter
	Jz	D1108			; Go to write error processing
	Clc				; Clear the carry flag
	Mov	AH,Reset_Command	; Initialize the disk controller
	Int	Disk_Interrupt		; .
	Mov	Byte Ptr WRK14_Status_Operation,AH
	Jnc	D1106			; .
	Jmp	D1107			; ..End
D1108:
	Mov	Byte Ptr FLG15_IO_Error,Two
	Mov	Byte Ptr FLG09_Good_Write,False
	Jmp	D1199			; Go to the end of the module
D1109:
	Add	Word Ptr WRK33_CHRN_Table_Address,Thirty_Six
;
	Mov	AL,Byte Ptr WRK27_Write_Message_Row
	Mov	Byte Ptr WRK28_Current_Message_Row,AL
	Mov	AL,Byte Ptr WRK22_Current_Target_Head
	Mov	Byte Ptr WRK29_Current_Head,AL
	Mov	AL,Byte Ptr WRK23_Current_Target_Track
	Mov	Byte Ptr WRK30_Current_Track,AL
	Call	U1400_Display_Head_and_Track
D1199:
	Ret
;
D1100_Write_Format_Diskette Endp
;
Page
;************************************************************************
;*									*
;*	D1200_DISK_IO_ERROR						*
;*									*
;*	This module fans out a disk error.  It tells a user if it	*
;*	occured on a read, format or write operation.  If it cannot	*
;*	determine the nature of the error, the routine displays an	*
;*	unknown disk error message.					*
;*									*
;************************************************************************
;
Public	D1200_Disk_IO_Error
;
D1200_Disk_IO_Error Proc Near
;
D1201:
	Cmp	Byte Ptr WRK14_Status_Operation,Time_Out_Error
	Jne	D1202			; If not time out error, continue
	Mov	SI,Offset MES08_Drive_Not_Ready
	Mov	AL,Byte Ptr WRK06_Drive_Number
	Add	AL,Capital_Letter_A	; Convert drive number to a letter
	Mov	[SI+Twenty_Four],AL	; Put the drive letter into position
	Call	U1000_Display_Message
	Jmp	D1299			; Go to the end of the module
D1202:
	Cmp	Byte Ptr FLG15_IO_Error,Zero
	Jne	D1203			; If not a format error, continue
	Mov	SI,Offset MES18_Unrecoverable_Format
	Jmp	D1206			; Continue processing
D1203:
	Cmp	Byte Ptr FLG15_IO_Error,One
	Jne	D1204			; If not a read error, continue
	Mov	SI,Offset MES19_Unrecoverable_Read
	Jmp	D1206			; Continue processing
D1204:
	Cmp	Byte Ptr FLG15_IO_Error,Two
	Jne	D1205			; If not a write error, continue
	Mov	SI,Offset MES21_Unrecoverable_Write
	Jmp	D1206			; Continue processing
D1205:
	Mov	SI,Offset MES22_Unrecoverable_IO
D1206:
	Call	U1000_Display_Message	; Display the message on the screen
D1207:
	Cmp	Byte Ptr WRK14_Status_Operation,Seek_Error
	Jne	D1208			; If not a seek error, continue
	Mov	SI,Offset MES80_Seek_Error
	Jmp	D1217			; Continue processing
D1208:
	Cmp	Byte Ptr WRK14_Status_Operation,Controller_Error
	Jne	D1209			; If not a controller error, continue
	Mov	SI,Offset MES81_Controller_Error
	Jmp	D1217			; Continue processing
D1209:
	Cmp	Byte Ptr WRK14_Status_Operation,CRC_Error
	Jne	D1210			; If not a CRC error, continue
	Mov	SI,Offset MES82_CRC_Error
	Jmp	D1217			; Continue processing
D1210:
	Cmp	Byte Ptr WRK14_Status_Operation,DMA_Boundary_Error
	Jne	D1211			; If not DMA boundary error, continue
	Mov	SI,Offset MES83_DMA_Boundary_Error
	Jmp	D1217			; Continue processing
D1211:
	Cmp	Byte Ptr WRK14_Status_Operation,DMA_Error
	Jne	D1212			; If not a DMA error, continue
	Mov	SI,Offset MES84_DMA_Error
	Jmp	D1217			; Continue processing
D1212:
	Cmp	Byte Ptr WRK14_Status_Operation,Sector_Error
	Jne	D1213			; If not a sector error, continue
	Mov	SI,Offset MES85_Sector_Error
	Jmp	D1217			; Continue processing
D1213:
	Cmp	Byte Ptr WRK14_Status_Operation,Write_Protect_Error
	Jne	D1214			; If not write protected, continue
	Mov	SI,Offset MES86_Write_Protect_Error
	Jmp	D1217			; Continue processing
D1214:
	Cmp	Byte Ptr WRK14_Status_Operation,Address_Mark_Error
	Jne	D1215			; If not addr mark error, continue
	Mov	SI,Offset MES87_Address_Mark_Error
	Jmp	D1217			; Continue processing
D1215:
	Cmp	Byte Ptr WRK14_Status_Operation,Command_Error
	Jne	D1216			; If not a command error, continue
	Mov	SI,Offset MES88_Command_Error
	Jmp	D1217			; Continue processing
D1216:
	Mov	SI,Offset MES89_Unknown_Error
D1217:
	Call	U1000_Display_Message	; Display the message on the screen
D1299:
	Ret
;
D1200_Disk_IO_Error Endp
;
Page
;************************************************************************
;*									*
;*	S1000_SETUP_DISK_PARAM_TABLE					*
;*									*
;*	This module sets up the Disk Parameter Table (Int 1EH) so that	*
;*	it points to the disk parameters for PC DOS 2.1 contained in	*
;*	this program.							*
;*									*
;************************************************************************
;
Public	S1000_Setup_Disk_Param_Table
;
S1000_Setup_Disk_Param_Table Proc Near
;
S1001:
	Push	AX			; Save the registers
	Push	BX			; .
	Push	DS			; ..End
;
	Cli				; Turn off the interrupts

;
	Sub	AX,AX			; Initialize DS to Absolute Zero
	Mov	DS,AX			; ..End
;
	Mov	BX,Disk_Parameter_Addr	; Save and redirect the address
	Mov	AX,[BX]			; .
	Mov	Word Ptr CS:SYS16_Save_DPT_Offset,AX
	Mov	AX,[BX+Two]		; .
	Mov	Word Ptr CS:SYS17_Save_DPT_Segment,AX
					; .
	Mov	AX,Offset SYS18_Disk_Parameter_Table
	Mov	[BX],AX			; .
	Mov	AX,CS			; .
	Mov	[BX+Two],AX		; ..End
;
	Sti				; Turn on interrupts
;
	Pop	DS			; Restore the registers
	Pop	BX			; .
	Pop	AX			; ..End
S1099:
	Ret
;
S1000_Setup_Disk_Param_Table Endp
;
Page
;************************************************************************
;*									*
;*	S1100_RESTORE_DISK_PARAM_TABLE					*
;*									*
;*	This module restores the Disk Parameter Table to its original	*
;*	address in PC DOS.						*
;*									*
;************************************************************************
;
Public	S1100_Restore_Disk_Param_Table
;
S1100_Restore_Disk_Param_Table Proc Near
;
S1101:
	Push	AX			; Save the registers
	Push	BX			; .
	Push	DS			; ..End
;
	Cli				; Turn off the interrupts
;
	Sub	AX,AX			; Initialize DS to Absolute Zero
	Mov	DS,AX			; ..End
;
	Mov	BX,Disk_Parameter_Addr	; Restore Disk Parameter Address
	Mov	AX,Word Ptr CS:SYS16_Save_DPT_Offset
	Mov	[BX],AX			; .
	Mov	AX,Word Ptr CS:SYS17_Save_DPT_Segment
	Mov	[BX+Two],AX		; ..End
;
	Sti				; Turn on the interrupts
;
	Pop	DS			; Restore the registers
	Pop	BX			; .
	Pop	AX			; ..End
S1199:
	Ret
;
S1100_Restore_Disk_Param_Table Endp
;
Page
;************************************************************************
;*									*
;*	S1200_GET_VERSION_NUMBER					*
;*									*
;*	This module gets the current version number of PC DOS and	*
;*	stores the information in determining whether to allocate	*
;*	memory using the PC DOS 2.0 function calls.			*
;*									*
;************************************************************************
;
Public	S1200_Get_Version_Number
;
S1200_Get_Version_Number Proc Near
;
S1201:
	Push	AX			; Save the registers and flags
	Pushf				; ..End
;
	Mov	AH,Get_DOS_Version_Number
	Int	PC_DOS_Interrupt
	Mov	Byte Ptr SYS19_Major_Vers_Number,AL
	Mov	Byte Ptr SYS20_Minor_Vers_Number,AH
;
	Popf				; Restore the registers and flags
	Pop	AX			; ..End
S1299:
	Ret
;
S1200_Get_Version_Number Endp
;
Page
;************************************************************************
;*									*
;*	U1000_DISPLAY_MESSAGE						*
;*									*
;*	This module displays a message on the screen. Before calling	*
;*	this module, the offset of the message should be in SI 		*
;*	relative to the DS register.  This routine preserves the	*
;*	registers and the flags.					*
;*									*
;************************************************************************
;
Public	U1000_Display_Message
;
U1000_Display_Message Proc Near
;
U1001:
	Push	AX			; Save the registers and flags
	Push	BX			; .
	Push	SI			; .
	Pushf				; ..End
U1002:
	Mov	AL,[SI]			; Put the character into AL
	Cmp	AL,EOT			; Compare for the end of the string
	Je	U1090			; If so, go to end of the module
	Mov	AH,Write_TTY_Command	; Write the Character
	Mov	BH,Byte Ptr SYS03_Active_Page
	Mov	BL,Byte Ptr SYS04_Foreground_Color
	Int	Video_Interrupt		; ..End
	Inc	SI			; Increment the SI counter
	Jmp	U1002			; Go back and try again
U1090:
	Popf				; Restore the registers and flags
	Pop	SI			; .
	Pop	BX			; .
	Pop	AX			; ..End
U1099:
	Ret
;
U1000_Display_Message Endp
;
Page
;************************************************************************
;*									*
;*	U1100_GET_RESPONSE						*
;*									*
;*	This module gets the response from the keyboard and displays	*
;*	the information on the video display unit.  The keyboard	*
;*	buffer is WRK05_Keyboard_Buffer.  The first byte of this	*
;*	buffer contains the length of the buffer and must be less	*
;*	than or equal to 80 characters.  The next 80 characters are	*
;*	the acutal buffer. The character EOT denotes the end of the	*
;*	buffer and can occur in any one of the 80 characters.		*
;*									*
;************************************************************************
;
Public	U1100_Get_Response
;
U1100_Get_Response Proc Near
;
U1101:
	Push	AX			; Save the registers and flags
	Push	BX			; .
	Push	CX			; .
	Push	SI			; .
	Pushf				; ..End
U1102:
	Mov	SI,Offset WRK05_Keyboard_Buffer+1
	Mov	CX,NUL			; Initialize the CX counter register
U1103:
	Mov	AH,Flush_Keyboard_Command; Read the character from keyboard
	Mov	AL,Read_Keyboard_Command; .
	Int	PC_DOS_Interrupt	; ..End
	Cmp	AL,ETX			; Compare for a control break
	Jne	U1104			; If not, then continue
	Mov	SI,Offset MES98_Control_Break
	Call	U1000_Display_Message	; Display the message on the screen
	Jmp	A1002			; Go to B1200_Final_Process
U1104:
	Cmp	Byte Ptr FLG05_Store_Buffer,True
	Je	U1105			; If store keyboard entries, continue
	Jmp	U1190			; If not, go to end of the module
U1105:
	Cmp	AL,BS			; Is AL a backspace character???
	Jne	U1106			; If not, continue processing AL
	Cmp	CX,NUL			; Is the cursor at column zero????
	Je	U1103			; Yes, so get another character
	Dec	CX			; Decrement CX to point to the
					; . previous cursor location
	Dec	SI			; Decrement SI to go back to the
					; . previos buffer location
;
	Mov	AH,Write_TTY_Command	; Write a backspace to the screen
	Mov	AL,BS			; .
	Mov	BH,Byte Ptr SYS03_Active_Page
	Mov	BL,Byte Ptr SYS04_Foreground_Color
	Int	Video_Interrupt		; ..End
;
	Mov	AH,Write_TTY_Command	; Write a space to the screen
	Mov	AL,Space		; .
	Mov	BH,Byte Ptr SYS03_Active_Page
	Mov	BL,Byte Ptr SYS04_Foreground_Color
	Int	Video_Interrupt		; ..End
;
	Mov	AH,Write_TTY_Command	; Write a backspace to the screen
	Mov	AL,BS			; .
	Mov	BH,Byte Ptr SYS03_Active_Page
	Mov	BL,Byte Ptr SYS04_Foreground_Color
	Int	Video_Interrupt		; ..End
;
	Jmp	U1103			; Go back and get another character
U1106:
	Cmp	AL,CR			; Compare char for a carriage return
	Je	U1108			; If so, insert an EOT into buffer
	Cmp	CX,Keyboard_Buffer_Size	; Check for keyboard buffer full
	Jae	U1107			; If so, sound bell and get new char
	Mov	[SI],AL			; Put the character into the buffer
	Inc	SI			; Increment the keyboard address
	Inc	CX			; Increment the CX character counter
	Jmp	U1103			; Go back and get another character
U1107:
	Mov	AH,Write_TTY_Command	; Sound the beep from the screen
	Mov	AL,Bell			; .
	Mov	BH,Byte Ptr SYS03_Active_Page
	Mov	BL,Byte Ptr SYS04_Foreground_Color
	Int	Video_Interrupt		; ..End
	Jmp	U1103			; Go back and get another character
U1108:
	Mov	AL,EOT			; Put an EOT into the buffer
	Mov	[SI],AL			; ..End
;
	Mov	AH,Write_TTY_Command	; Write a carriage return to the
	Mov	AL,CR			; . screen
	Mov	BH,Byte Ptr SYS03_Active_Page
	Mov	BL,Byte Ptr SYS04_Foreground_Color
	Int	Video_Interrupt		; ..End
;
	Mov	AH,Write_TTY_Command	; Write a line feed to the screen
	Mov	AL,LF			; .
	Mov	BH,Byte Ptr SYS03_Active_Page
	Mov	BL,Byte Ptr SYS04_Foreground_Color
	Int	Video_Interrupt		; ..End
;
	Mov	WRK05_Keyboard_Buffer[0],CL; Set the length accrodingly
U1190:
	Popf				; Restore the registers and flags
	Pop	SI			; .
	Pop	CX			; .
	Pop	BX			; .
	Pop	AX			; ..End
U1199:
	Ret
U1100_Get_Response Endp
;
Page
;************************************************************************
;*									*
;*	U1200_GET_YES_OR_NO						*
;*									*
;*	This module asks for a [Yy]es or [Nn]o answer from a user.  The	*
;*	routine accepts only a [Yy] or [Nn] and exists with the flag	*
;*	FLG06_Yes_or_No set to True for YES and False for NO.		*
;*									*
;************************************************************************
;
Public	U1200_Get_Yes_or_No
;
U1200_Get_Yes_or_No Proc Near
;
U1201:
	Push	AX			; Save the registers and flags
	Push	SI			; .
	Pushf				; ..End
U1202:
	Mov	AH,Flush_Keyboard_Command; Read the character from keyboard
	Mov	AL,Read_Keyboard_Command; .
	Int	PC_DOS_Interrupt	; ..End
	Cmp	AL,ETX			; Compare for control break
	Jne	U1203			; If not, then continue
	Mov	SI,Offset MES98_Control_Break
	Call	U1000_Display_Message	; Display the message on the screen
	Jmp	A1002			; Go to B1200_Final_Process
U1203:
	Cmp	AL,Capital_Letter_Y	; Check for capital letter Y
	Jne	U1204			; ..End
	Mov	Byte Ptr FLG06_Yes_or_No,True
	Mov	SI,Offset MES24_Yes	; Display YES on the screen
	Call	U1000_Display_Message	; ..End
	Jmp	U1290			; Go to the end of the module
U1204:
	Cmp	AL,Small_Letter_y	; Check for small letter y
	Jne	U1205			; ..End
	Mov	Byte Ptr FLG06_Yes_or_No,True
	Mov	SI,Offset MES24_Yes	; Display YES on the screen
	Call	U1000_Display_Message	; ..End
	Jmp	U1290			; Go to the end of the module
U1205:
	Cmp	AL,Capital_Letter_N	; Check for capital letter N
	Jne	U1206			; ..End
	Mov	Byte Ptr FLG06_Yes_or_No,False
	Mov	SI,Offset MES25_No	; Display NO on the screen
	Call	U1000_Display_Message	; ..End
	Jmp	U1290			; Go to the end of the module
U1206:
	Cmp	AL,Small_Letter_n	; Check for small letter n
	Jne	U1207			; ..End
	Mov	Byte Ptr FLG06_Yes_or_No,False
	Mov	SI,Offset MES25_No	; Display NO on the screen
	Call	U1000_Display_Message	; ..End
	Jmp	U1290			; Go to the end of the module
U1207:
	Jmp	U1202			; Go back and get another character
U1290:
	Popf				; Restore the registers and flags
	Pop	SI			; .
	Pop	AX			; ..End
U1299:
	Ret
;
U1200_Get_Yes_or_No Endp
;
Page
;************************************************************************
;*									*
;*	U1300_CONVERT_BINARY_TO_ASCII					*
;*									*
;*	This module BCD contained in the AL register into an ASCII	*
;*	character.  The output is returned in the AX register.		*
;*									*
;************************************************************************
;
Public	U1300_Convert_Binary_to_ASCII
;
U1300_Convert_Binary_to_ASCII Proc Near
;
U1301:
	Push	DX			; Save the registers
	Pushf				; ..End
;
	Cbw				; Perform sign extension for division
	Mov	DL,Ten			; Set DL disvisor to 10D
	Div	DL			; Divide AL by 10D remainder in AH
	Add	AL,Zero_Digit		; Setup the characters in AL & AH
	Add	AH,Zero_Digit		; ..End
;
	Popf				; Restore the registers
	Pop	DX			; ..End
U1399:
	Ret
;
U1300_Convert_Binary_to_ASCII Endp
;
Page
;************************************************************************
;*									*
;*	U1400_DISPLAY_HEAD_AND_TRACK					*
;*									*
;*	This module displays the current track and head number that	*
;*	is being read from the source diskette or written to the 	*
;*	target diskette.						*
;*									*
;************************************************************************
;
Public	U1400_Display_Head_and_Track
;
U1400_Display_Head_and_Track Proc Near
;
U1401:
	Push	AX			; Save the registers
	Push	BX			; .
	Push	DX			; .
	Pushf				; ..End
;
	Mov	AH,Set_CPos_Command	; Set cursor to track position
	Mov	BH,Byte Ptr SYS03_Active_Page
	Mov	DH,Byte Ptr WRK28_Current_Message_Row
	Mov	DL,Fifteen		; .
	Int	Video_Interrupt		; ..End
;
					; Write the current track number
	Mov	AL,Byte Ptr WRK30_Current_Track
	Call	U1300_Convert_Binary_to_ASCII
	Push	AX			; .
	Mov	AH,Write_TTY_Command	; .
	Mov	BH,Byte Ptr SYS03_Active_Page
	Mov	BL,Byte Ptr SYS04_Foreground_Color
	Int	Video_Interrupt		; .
	Pop	AX			; .
	Mov	AL,AH			; .
	Mov	AH,Write_TTY_Command	; .
	Mov	BH,Byte Ptr SYS03_Active_Page
	Mov	BL,Byte Ptr SYS04_Foreground_Color
	Int	Video_Interrupt		; ..End
;
	Mov	AH,Set_CPos_Command	; Set cursor to head position
	Mov	BH,Byte Ptr SYS03_Active_Page
	Mov	DH,Byte Ptr WRK28_Current_Message_Row
	Mov	DL,Twenty_Five		; .
	Int	Video_Interrupt		; ..End
;					; Write the current head number
	Mov	AL,Byte Ptr WRK29_Current_Head
	Call	U1300_Convert_Binary_to_ASCII
	Mov	AL,AH			;.
	Mov	AH,Write_TTY_Command	;.
	Mov	BH,Byte Ptr SYS03_Active_Page
	Mov	BL,Byte Ptr SYS04_Foreground_Color
	Int	Video_Interrupt		; ..End
;
	Mov	AH,Set_CPos_Command	; Set cursor to the next line
	Mov	BH,Byte Ptr SYS03_Active_Page
	Mov	DH,Byte Ptr WRK28_Current_Message_Row
	Inc	DH			; .
	Mov	DL,Zero			; .
	Int	Video_Interrupt		; ..End
U1490:
	Popf				; Restore the registers
	Pop	DX			; 
	Pop	BX			; .
	Pop	AX			; ..End
U1499:
	Ret
;
U1400_Display_Head_and_Track Endp
;
Page
;************************************************************************
;*									*
;*	FLAGS								*
;*									*
;*	This portion of FREECOPY contains the definitions of all of	*
;*	flags defined in the program.					*
;*									*
;************************************************************************
;
FLG01_Good_Command	DB (?)		; Establishes any errors in the
					; . command line entered by a user
FLG02_Double_Side	DB (?)		; Points out whether the user wants
					; . to copy only the top side of a
					; . floppy diskette
FLG03_Default_Drive	DB (?)		; Shows if the default drive is a
					; . valid floppy disk drive
FLG04_Single_Drive	DB (?)		; Determines if the machine is a
					; . single drive system
FLG05_Store_Buffer	DB (?)		; Establishes whether to put the
					; . characters entered from the
					; . keyboard into the buffer
FLG06_Yes_or_No		DB (?)		; Points out the user's response
					; . NO = False   YES = True
FLG07_First_Time	DB (?)		; Shows the number of times the user
					; . copies a diskette
					; . ONCE = True  MORE = False
FLG08_Good_Read		DB (?)		; Flags establish whether the
FLG09_Good_Write	DB (?)		; . operation was performed correctly
FLG10_Good_Verify  	DB (?)		; . YES = True    NO = False
FLG11_Good_Format	DB (?)		; ..End
FLG12_Good_FAT		DB (?)		; Establishes a good FAT when reading
					; . source diskette more than once
FLG13_First_Read_Write	DB (?)		; Shows if a diskette is being read
					; . or written for the first time
					; . YES = True    NO  = False
FLG14_Copy_Complete	DB (?)		; Points out if a diskette has been
					; . copied completely
					; . YES = True    NO = False
FLG15_IO_Error		DB (?)		; Establishes the type of IO error
					; . Zero = Format error
					; . One  = Read error
					; . Two  = Write error
					; ..End
FLG16_Free_Memory	DB (?)		; Determines whether memory should
					; . using the PC DOS function calls
FLG17_Copy_More_Disks	DB (?)		; Indicates whether to ask a user to
					; . write the same disk over again
;
Page
;************************************************************************
;*									*
;*	MESSAGES							*
;*									*
;*	This portion of FREECOPY contains the definitions of all of	*
;*	messages defined in the program.				*
;*									*
;************************************************************************
;
MES00_Copy_Notice		Label Byte
	DB	CR,LF
	DB	'FREECOPY Disk Utility',CR,LF
	DB	'IBM Personal Computer/Jr.',CR,LF
	DB	'Version 1.13 (C)Copyright 1984, 1985',CR,LF
	DB	CR,LF
	DB	'Squire Buresh Assoc., Inc.',CR,LF
	DB	'Post Office Box 112',CR,LF
	DB	'Millbury, MA 01527',CR,LF
	DB	CR,LF
	DB	'$25.00 requested contribution.',CR,LF,EOT
MES01A_Write_Another_Diskette	Label Byte
	DB	CR,LF
	DB	'Write source diskette again (Y/N)? ',EOT
MES01B_Copy_Another_diskette	Label Byte
	DB	CR,LF
	DB	'Copy another diskette (Y/N)? ',EOT
MES02_Copy_Complete		Label Byte
	DB	CR,LF
	DB	'Copy complete.',CR,LF,EOT
MES03_Copy81_Sectors		Label Byte
	DB	CR,LF
	DB	'Copying 8 sectors per track, 1 side.',CR,LF,EOT
MES04_Copy82_Sectors		Label Byte
	DB	CR,LF
	DB	'Copying 8 sectors per track, 2 sides.',CR,LF,EOT
MES05_Copy91_Sectors		Label Byte
	DB	CR,LF
	DB	'Copying 9 sectors per track, 1 side.',CR,LF,EOT
MES06_Copy92_Sectors		Label Byte
	DB	CR,LF
	DB	'Copying 9 sectors per track, 2 sides.',CR,LF,EOT
MES07_Correct_And_Press_Key	Label Byte
	DB	CR,LF
	DB	'Correct, and press any key to continue',CR,LF,EOT
MES08_Drive_Not_Ready		Label Byte
	DB	CR,LF
	DB	'Diskette not in drive  :.',CR,LF,EOT
MES09_Insert_Source		Label Byte
	DB	CR,LF
	DB	'Insert source diskette in drive  :.',CR,LF,EOT
MES10_Insert_Target		Label Byte
	DB	CR,LF
	DB	'Insert target diskette in drive  :.',CR,LF,EOT
MES11_Insufficient_Memory	Label Byte
	DB	CR,LF
	DB	'Insufficient memory.',Bell,CR,LF,EOT
MES12_Invalid_Parameter		Label Byte
	DB	CR,LF
	DB	'Invalid parameter(s) specified.',CR,LF,EOT
MES13_Invalid_Default		Label Byte
	DB	CR,LF
	DB	'Invalid default floppy disk drive',CR,LF,EOT
MES14_Invalid_Drive		Label Byte
	DB	CR,LF
	DB	'Invalid drive specification.',CR,LF,EOT
MES15_Single_Drive_Copy		Label Byte
	DB	CR,LF
	DB	'NOTE: Copying diskette on single drive.',Bell,CR,LF,EOT
MES16_Press_Any_Key		Label Byte
	DB	CR,LF
	DB	'Press any key when ready.',CR,LF,EOT
MES17_Reading_Track		Label Byte
	DB	'Reading track (  ) head ( ).',CR,LF,EOT
MES18_Unrecoverable_Format	Label Byte
	DB	CR,LF
	DB	'Unrecoverable format error on target.',CR,LF,EOT
MES19_Unrecoverable_Read	Label Byte
	DB	CR,LF
	DB	'Unrecoverable read error on source.',CR,LF,EOT
MES20_Unrecoverable_Verify	Label Byte
	DB	CR,LF
	DB	'Unrecoverable verify error on target.',CR,LF,EOT
MES21_Unrecoverable_Write	Label Byte
	DB	CR,LF
	DB	'Unrecoverable write error on target.',CR,LF,EOT
MES22_Unrecoverable_IO		Label Byte
	DB	CR,LF
	DB	'Unrecoverable IO error.',CR,LF,EOT
MES23_Writing_Track		Label Byte
	DB	'Writing track (  ) head ( ).',CR,LF,EOT
MES24_Yes			Label Byte
	DB	'YES',CR,LF,EOT
MES25_No			Label Byte
	DB	'NO',CR,LF,EOT
MES80_Seek_Error		Label Byte
	DB	'Seek operation has failed.',CR,LF,EOT
MES81_Controller_Error		Label Byte
	DB	'Disk controller has failed.',CR,LF,EOT
MES82_CRC_Error			Label Byte
	DB	'Cyclic redundancy check (CRC) error.',CR,LF,EOT
MES83_DMA_Boundary_Error	Label Byte
	DB	'Attempted to DMA across a 64K boundary.',CR,LF,EOT
MES84_DMA_Error			Label Byte
	DB	'DMA overrun on I/O operation.',CR,LF,EOT
MES85_Sector_Error		Label Byte
	DB	'Requested sector not found.',CR,LF,EOT
MES86_Write_Protect_Error	Label Byte
	DB	'Output diskette is write protected.',CR,LF,EOT
MES87_Address_Mark_Error	Label Byte
	DB	'Address mark was not found.',CR,LF,EOT
MES88_Command_Error		Label Byte
	DB	'Bad command passed to the disk interrupt 13H.',CR,LF,EOT
MES89_Unknown_Error		Label Byte
	DB	'Unknown diskette error encountered.',CR,LF,EOT
MES90_Unknown_FAT_Error		Label Byte
	DB	'First byte of the FAT does not',CR,LF
	DB	'match any known diskette type.',CR,LF,EOT
MES91_Single_Side_Error		Label byte
	DB	'Double sided diskette in a',CR,LF
	DB	'single sided disk drive.',CR,LF,EOT
MES97_Return_Linefeed		Label Byte
	DB	CR,LF,EOT
MES98_Control_Break		Label Byte
	DB	'^C',CR,LF,EOT
MES99_Memory_Block_Destroyed	Label Byte
	DB	'Memory control block destroyed.',CR,LF,EOT
MES100_Freecopy_Finished	Label Byte
	DB	CR,LF
	DB	'Returning to PC DOS.',CR,LF,EOT
;
Page
;************************************************************************
;*									*
;*	WORK VARIABLES							*
;*									*
;*	This portion of FREECOPY contains the definitions of the work	*
;*	variables that are used by the program.				*
;*									*
;************************************************************************
;
WRK01_Source_Drive		DB (?)	; Source diskette drive number
WRK02_Target_Drive		DB (?)	; Target diskette drive number
WRK03_Valid_Filename		DB 11 Dup (32D); Valid diskette file name
WRK04_Parameter_Count		DB (?)	; Valid diskette filler area
;
WRK05_Keyboard_Buffer		Label Byte
				DB 80D	; Length of the keyboard buffer
				DB 80 Dup (?); Actual keyboard buffer
				DB EOT	; Last char denotes the end of text
;
WRK06_Drive_Number		DB (?)	; Drive number of a disk drive
WRK07_Head_Number		DB (?)	; Head number of a disk drive
WRK08_Track_Number		DB (?)	; Track number of a diskette
WRK09_Sector_Number		DB (?)	; Sector number of a diskette
WRK10_Number_of_Sectors		DB (?)	; Number of sectors on a track
WRK11_Segment_Address		DW (?)	; ES segment address
WRK12_Offset_Address		DW (?)	; BX offset address
WRK13_Retry_Counter		DB (?)	; Number of retrys to make
WRK14_Status_Operation		DB (?)	; Result of the operation
;
WRK15_Maximum_Heads		DB (?)	; Maximum heads, tracks and sectors
WRK16_Maximum_Tracks		DB (?)	; .
WRK17_Maximum_Sectors		DB (?)	; ..End
;
WRK18_Counter_ESBX_Entries	DW (?)	; Counter to calculate ES:BX entries
WRK19_Number_ESBX_Entries	DW (?)	; Maximum ES:BX table entires
;
Page
;************************************************************************
;*									*
;*	WORK VARIABLES	Page 2						*
;*									*
;************************************************************************
;
WRK20_Current_Source_Head	DB (?)	; Current source head & track number
WRK21_Current_Source_Track	DB (?)	; ..End
WRK22_Current_Target_Head	DB (?)	; Current target head & track number
WRK23_Current_Target_Track	DB (?)	; . End
;
WRK24_Read_Message_Row		DB (?)	; Cursor row of read, verify, format
WRK25_Verify_Message_Row	DB (?)	; and write message
WRK26_Format_Message_Row	DB (?)	; .
WRK27_Write_Message_Row		DB (?)	; .
WRK28_Current_Message_Row	DB (?)	; ..End
;
WRK29_Current_Head		DB (?)	; Current head and track to display
WRK30_Current_Track		DB (?)	; . on the screen
;
WRK31_Track_Read_Counter        DB (?)	; Counter of tracks processed
WRK32_Track_Write_Counter       DB (?)  ; ..End
;
WRK33_CHRN_Table_Address	DW (?)	; Current address of the CHRN table
;
WRK34_DMA_Overflow_Counter	DW (?)	; Counts how many times FREECOPY
					; . adjusted for DMA overflow
;
Page
;************************************************************************
;*									*
;*	SYSTEM VARIABLES						*
;*									*
;*	This portion of FREECOPY contains the definitions of all of	*
;*	the system variables used by the program.			*
;*									*
;************************************************************************
;
SYS01_Number_Columns	DB (?)		; Number of columns in current mode
SYS02_Current_Mode	DB (?)		; Current video mode
SYS03_Active_Page	DB (?)		; Active display page
SYS04_Foreground_Color	DB (?)		; Foreground color number
SYS05_Para_RAM_Size	DW (?)		; Number of free 16 byte paragraphs
SYS06_Monitor_Flag	DB (?)		; 0 = monochrome  1 = graphics
SYS07_No_Parallel_Ports	DB (?)		; Number of parallel ports
SYS08_Game_Adapters	DB (?)		; Number of RS-232 ports
SYS09_No_RS232_Ports	DB (?)		; 0 = no adapter  1 = has adapter
SYS10_No_Disk_Drives	DB (?)		; Number of floppy disk drives
SYS11_Init_Video_Mode	DB (?)		; Initial video mode when powering
					; up the machine
SYS12_Planar_RAM_Size	DB (?)		; Planar RAM size
SYS13_IPL_From_Diskette	DB (?)		; Location of initial program load
SYS14_Default_Drive	DB (?)		; Default disk drive
;
SYS15_Stack_Pointer	DW (?)		; Stack pointer value when entering
					; . FREECOPY from PC DOS
SYS16_Save_DPT_Offset	DW (?)		; Address of Disk Parameter Table
SYS17_Save_DPT_Segment	DW (?)		; ..End
;
SYS18_Disk_Parameter_Table	Label Byte
			DB 11011111B	; SRT = 0D & Head Unload = 0FH
			DB 002H		; Head Load = 1 Mode = DMA
			DB 025H		; Wait to turn the motor off
			DB 002H		; 512 bytes per sector
			DB 009H		; 9 sectors per track
			DB 02AH		; PC DOS gap length for I/O
			DB 0FFH		; Data length parameter
			DB 050H		; PC DOS gap length for format
			DB 0F6H		; Fille byte for format
			DB 00FH		; Head Settle time in milliseconds
			DB 002H		; Motor start-up time (1/8 sec.)
;
SYS19_Major_Vers_Number DB (?)		; Major and minor version number
SYS20_Minor_Vers_Number DB (?)		; . of the operating system
;
SYS21_Alloc_Segment	DW (?)		; Beginning segment address of
					; . free memory
;
Page
;************************************************************************
;*									*
;*	SETUP STACK POINTER AND MEMORY					*
;*									*
;*	This portion of FREECOPY is contains the stack and the label	*
;*	that indicates the beginning of available memory.		*
;*									*
;************************************************************************
;
MEM05_Bottom_of_the_Stack	Label Word
			DW 64 Dup (?)
MEM04_Top_of_the_Stack		Label Word
;
MEM03_ESBX_Table		Equ MEM04_Top_of_the_Stack+2
;
MEM02_CHRN_Table		Equ MEM03_ESBX_Table+320
;
MEM01_File_Allocation_Table	Equ MEM02_CHRN_Table+2880
;
MEM00_Bottom_Free_Memory	Equ MEM01_File_Allocation_Table+512
;
Page
;************************************************************************
;*									*
;*	END OF THE PROGRAM						*
;*									*
;************************************************************************
;
CSEG	Ends
	End   A1000_Main_Module


```
{% endraw %}

## FREECOPY.DOC

{% raw %}
```































                   THIS IS THE BEGINNING OF THE DOCUMENT







































                     ****** FREECOPY Users Guide *****             Page   1.


















                 ---------------------------------------------------

                                  F R E E C O P Y

                    A Disk Utility for the IBM Personal Computer

                      Users Guide by Donald L. Buresh, C.D.P.

                                    Version 1.10

                (C)Copyright 1984, 85  Squire Buresh Associates, Inc.

                           $25.00 Requested Contribution

                 ---------------------------------------------------




















     Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527











                     ****** FREECOPY Users Guide *****             Page   2.










                             TABLE OF CONTENTS


                                                               Page


        I. To the Users of FREECOPY                              3

       II. Running FREECOPY                                      5

      III. Notes on FREECOPY
              a. The Parameters                                  6
              b. Fragmented Data                                 7
              c. Disk Errors                                     8

       IV. Messages from FREECOPY
              a. Informative Messages                           10
              b. Error Messages                                 13

        V. Remarks on User Supported Software                   17

       VI. Acknowledgements                                     19





















     Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527











                     ****** FREECOPY Users Guide *****             Page   3.





        I. To the Users Of FREECOPY

           This is a short summary describing what is on the FREECOPY

        diskette.  FREECOPY is a disk utility that is functionally

        equivalent to DISKCOPY which is distributed with IBM PC DOS.

           I am releasing this software into the public domain because I

        believe that the time has come for users to see and criticize 

        professional quality source code.  I welcome all comments on 

        FREECOPY, particularly about any bugs you discover in the code.

           In developing FREECOPY, I reversed engineered DISKCOPY and made

        sure that I did not violate the proprietary rights of either IBM or

        Microsoft.  In fact, I took great pains to ensure that FREECOPY

        is better than DISKCOPY.

           The three (3) files that are on this diskette are:

                  o FREECOPY.COM - The executable code

                  o FREECOPY.ASM - The source code

                  o FREECOPY.DOC - A users guide


          The executable code is a binary .COM file that comes in machine

        readable format.  The source code is structured assembly language

        with lots of comments.  This users guide is a short document

        describing how to run FREECOPY.








     Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527











                     ****** FREECOPY Users Guide *****             Page   4.



           FREECOPY is the first of a series of assembly language programs

        that I am distributing on a user supported basis.  I will create

        significant programs for the PC community.  These programs will 

        appear in conjunction with the articles that I am writing for the

        disk-based magazine PC FIRING LINE edited by Bill Salkin.  I am

        writing the PC DOS/ROM column.

            If you find FREECOPY helpful, please give the package to other

        users without alteration so that I can answer people's questions. 

        I am requesting a $25.00 contribution.  If you want a copy, send a

        self-addressed postage-paid mailer along with a formatted diskette

        to us.  No exceptions, please.

            Regardless of the contribution, users are encouraged to copy and

         share the program with other users.





                                       - Donald L. Buresh, C.D.P. -



















     Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527











                     ****** FREECOPY Users Guide *****             Page   5.





        II. Running FREECOPY

           FREECOPY copies the source diskette on a track by track basis

        to the target diskette  formatting and then writing to the target

        diskette.  The utility does not check the drive letter to see

        if you specified a hard disk drive.

           Before invoking FREECOPY, examine the PC DOS prompt (e.g.,

        A> for drive A:) that denotes the default drive.  To execute

        FREECOPY, enter the command:

                              FREECOPY X: Y:/1

        where the first parameter X: specifies the source drive, the second

        parameter Y: indicates the target drive and the /1 parameter

        instructs the utility to copy only the top side of the source

        diskette.

           The disk drives X: and Y: may or may not be the same.  If they

        are equal to each other or omitted altogether, FREECOPY copies the

        source diskette using a single drive.  The program prompts you to

        insert the appropriate diskette at the correct time.

           When FREECOPY finishes copying a diskette, the program asks

        you if you want to continue.  If you press Y(es), FREECOPY starts

        the process all over again with the same parameters that you

        specified when invoking the program.  If you press N(o), FREECOPY

        returns to PC DOS.  The program ignores all other answers except

        Control-C or Control-Break which also transfers control to PC DOS. 



     Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527











                     ****** FREECOPY Users Guide *****             Page   6.





        III. Notes on FREECOPY

           These notes on FREECOPY demonstrate to the user the features

        and/or limitations of the program.

        a. The Parameters

            If you do not specify both disk drive parameters, FREECOPY

        copies the source diskette using only the PC DOS default drive.

        For exammple, if the PC default drive is B:, and you invoke

        FREECOPY with the command:

                              B>FREECOPY

        the program copies the source diskette onto the target diskette

        using only drive B:.

           If you specify only one disk drive parameter, FREECOPY assumes

        that it is the source drive and that the target drive is the PC DOS

        default drive.  For example, if A: is the PC DOS default drive and

        you enter the command:

                              A>FREECOPY B:

        the program assumes that the source drive is B: and the target drive

        is A:.  If the default drive is the same as the drive that you

        indicated when you entered the command, FREECOPY copies the source

        diskette using a single drive.  This command might look like:

                              B>FREECOPY B:







     Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527











                     ****** FREECOPY Users Guide *****             Page   7.




           If you enter distinct source and target disk drivers, FREECOPY

        will follow your command exactly.  For example, if A: is the PC DOS

        default drive and you enter:

                              A>FREECOPY A: B:

        the program copies the the source diskette in drive A: to the target

        diskette in drive B:.  However, if you have only one disk drive on

        your system, FREECOPY is smart enough to use one drive.

           If you employ the /1 parameter when invoking FREECOPY, the program

        copies the top side of the source diskette.  If the source drive is

        single sided, FREECOPY recognizes that this parameter is not

        necessary.

        b. Fragmented Data

           While using a diskette, the sectors that contain your data may

        not be in sequential order.  This situation occurs because PC DOS

        uses the first available sector when writing files regardless of its

        position on the diskette.

           A diskette with fragmented files degrades the performance of

        PC DOS causing excessive head movement when reading and/or writing

        a file.  If so, you may want to use the COPY command to copy the

        files from the source diskette to the target diskette.










     Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527











                     ****** FREECOPY Users Guide *****             Page   8.





        c. Disk Errors

           There are many reasons for a diskette error.  The two (2) most

        common reasons are:

                  o The mylar for a given track wears out; or

                  o The contents of the diskette are copy protected
                    by the software manufacturer.

            All things have a finite lifespan, including diskettes.  When the

        mylar of a track can no longer retain the data, FREECOPY can do very

        little to recover the information.  We recommend that you always

        maintain a backup diskette of your important data.

           It is unfortunate that some software manufacturers make it

        difficult, if not impossible, to copy their programs. It is our

        opinion that copy protection assumes that everyone will attempt to

        violate the software manufacturer's rights.  One of the fundamental

        principles of FREEWARE is that the user has the right to

        examine the quality of the source code before deciding whether

        or not they want to purchase it.  FREECOPY is consistent with the

        FREEWARE concept and it does not currently break any copy protection

        schemes.

           FREECOPY always displays the head and track number that it is

        currently processing.  If the program encounters a disk error,

        it displays the appropriate message on the screen.  Section IV of

        this manual describes the messages in great detail.




     Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527











                     ****** FREECOPY Users Guide *****             Page   9.





        If FREECOPY encounters a disk error for either the source or

        target diskette, that diskette may or may not be usable, depending

        on whether the affected track contains valid data.











































     Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527

 









                     ****** FREECOPY Users Guide *****             Page   10.





        IV. Messages from FREECOPY

           The messages that FREECOPY displays on the screen come in two

        varieties: informative messages and error messages.

        a. Informative Messages

           Copy another diskette (Y/N)?

              If you want to copy another diskette, enter Y(y) and FREECOPY
              prompts you to insert a diskette in the source drive.  If you
              reply N(n), the program returns control to PC DOS.  FREECOPY
              ignores any other answer except Control-C, Control-Break and
              Control-Alt-Del.


           Copy is complete.

              FREECOPY has successfully copied the contents of the source
              diskette onto the target diskette.


           Copying X sectors per track, Y side.

              This message tells you that a source diskette is a PC DOS 1.0,
              1.1 or 2.0 diskette, single or double sided.


           Correct, and press any key to continue.

              This message appears when FREECOPY is unable to validate a
              source diskette for one or more of the following reasons:

                        o The diskette is unformatted;

                        o The first byte of the File Allocation Table (FAT)
                          is invalid;

                        o A double sided diskette is placed in a single
                          sided source drive and the user did not ask
                          FREECOPY to copy only the first side.






     Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527











                     ****** FREECOPY Users Guide *****             Page   11.





           A diskette is not in drive X:.

              FREECOPY displays this message on the screen when there is
              no diskette in either the source or target drive.


           Insert source diskette in drive X:.

              This message tells you when to insert the source diskette
              into the source drive.


           Insert target diskette in drive Y:.

              This message appears on the screen when FREECOPY is ready to
              copy the source diskette onto the target diskette.


           Insufficient memory.

              FREECOPY puts this message on the screen when there is not
              enough free memory on the machine to contain:

                        o A complete copy of COMMAND.COM, including the
                          resident portion in low memory and the transient
                          portion in high memory (PC DOS 1.0 and 1.1 only);

                        o A copy of the ES:BX table that holds the beginning
                          addresses of each track stored in memory;

                        o A copy of the CHRN table that is used when the 
                          target diskette is unformatted;

                        o A copy of the File Allocation Table (FAT) of the
                          source diskette;

                        o At least one (1) track of the source diskette.











     Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527











                     ****** FREECOPY Users Guide *****             Page   12.





           Invalid parameter(s) specified.

              FREECOPY issues this message when a colon did follow a drive
              letter, a file name appears after a drive letter and a colon,
              or a /1 occurs in the wrong position.


           Invalid default floppy disk drive.

              The program issues this message when the PC DOS default drive
              is invalid.  It can occur when a system has more than four (4)
              logical disk drives that reside on a hard disk.


           Note: Copying diskette on a single drive.

              FREECOPY displays this message and sounds the bell to inform
              you that it is using one (1) drive to copy the source diskette.


           Press any key when ready.

              This message is self-explanatory. Press any key except
              Control-C or Control-Break to continue the processing.


           Reading track (XX)  head (Y).

              The program issues this message when it is reading the source
              diskette.


           Returning to PC DOS.

              FREECOPY puts this message on the screen whenever it transfers
              control back to PC DOS.












     Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527











                     ****** FREECOPY Users Guide *****             Page   13.





           Write source diskette again (Y/N)?

              This message asks a user if he/she wants another copy of the
              source diskette.  It appears only  when the computer can
              store the source diskette completely in memory.


           Writing track (XX)  head (Y).

              This message tells you the track and head that FREECOPY is
              writing onto the target diskette.


        b. Error Messages

           Address mark was not found.

              When this message appears, INT 13H was not able to find the
              CHRN entry that is standard for PC DOS diskettes.  The diskette
              is probably copy-protected by the manufacturer.


           Bad command passed to the disk interrupt 13H.

              This is a diagnostic message that was used in debugging
              FREECOPY.


           Cyclic redundancy check (CRC) error.

              FREECOPY displays this message on the screen when the 16 bit
              CRC character is invalid.  This word immediately follows the
              CHRN entry on a diskette and is generated by the polynomial:

                               16    12    5
                       P(X) = X   + X   + X  + 1

              where X is any byte of a given sector except the CRC or ID
              byte.









     Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527











                     ****** FREECOPY Users Guide *****             Page   14.





           Disk controller has failed.

              The program issues this message when the disk controller chip
              is no longer working.  This chip can be the Intel 8272 or
              the NEC 765.  They are functionally equivalent.


           DMA overrun on an I/O operation.

              This is a diagnostic message used in debugging FREECOPY.  It
              means that the disk controller chip (i8272 or NEC 765) tried
              to use more memory than what was allocated to it by FREECOPY.


           Double sided diskette in a
           single sided disk drive.

              This message appears when you place a double sided diskette in
              a single sided drive and you did not tell FREECOPY to copy only
              the top side of the diskette.


           First byte of the FAT does not
           match any known diskette type.

              FREECOPY checks the first byte of the File Allocation Table
              (FAT) for validity. If it is not equal to 0FCH, 0FDH, 0FEH
              or 0FFH, the program displays this message.


           Memory control block destroyed.

              This was used in implementing and testing the PC DOS memory
              allocation function calls.  It should not appear when
              normally using FRECOPY.


           Requested sector not found.

              This message occurs when the sectors of a given track for 
              the source diskette are not in sequential order, starting at
              one (1) and ending at eight (8) or nine (9).  The source
              diskette is probably copy-protected by the manufacturer.





     Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527

   







                     ****** FREECOPY Users Guide *****             Page   15.





           Seek operation has failed.

              This message appears when FREECOPY attempts to read or write
              physical tracks greater than number forty-one (41) or seeks
              a valid physical track number with an invalid logical track
              number.  If the first case is true, FREECOPY contains a
              bug.  This should not be the case.  Probably a valid physical
              track is holding an invalid logical track number in the CHRN
              table.  If so, the source diskette is copy-protected by the
              manufacturer.


           Target diskette is write protected.

              If this message appears, remove the write protection tab on the
              target diskette.


           Tried DMA across a 64K boundary.

              Since the Intel 8088 processor chip breaks up memory into
              64K segments, this message appears when FREECOPY tries to
              write a track of the source diskette into memory across a
              64K boundary.  This is a diagnostic message that was used
              to debug FREECOPY.


           Unrecoverable format error on target.

              FREECOPY puts this message on the screen when it is unable
              to format the target diskette.  You should use another
              target diskette.


           Unrecoverable I/O error.

              This message appears when an error occurs and FREECOPY is
              unable to determine the nature of the error.


           Unrecoverable read error on source.

              The program displays this message when it cannot read the
              source diskette.  FREECOPY tries four (4) times before this
              statement appears on the screen.





     Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527











                     ****** FREECOPY Users Guide *****             Page   16.





           Unrecoverable write error on target.

              This message indicates that FREECOPY could not write the
              data on the source diskette onto the target diskette.  You
              should use another target diskette.











































     Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527











                     ****** FREECOPY Users Guide *****             Page   17.





        V. Remarks on User Supported Software

           According to Andrew Fluegelman, user supported software is based

        on the following three (3) principles:

                  o The utility of software can only be ascertained by a
                    user on their own system;

                  o The development of personal computer software should
                    be encouraged by the computing community; and

                  o The duplication of software should be encouraged rather
                    than restricted by copy-protection schemes.

        The basic assumption behind these principles is that software

        developers will rely on the individuals in the computing community 

        to support them financially.  However, most developers are committed

        to selling their wares through standard market channels.

           The market for personal computing software is growing without

        bound.  Advertising and documentation costs are now a significant

        barrier to the would be entrepreneur.  The shelf space of major

        distributors is commanding premium dollars.  This means that within

        a short period of time, we may see very few new programs on the

        market.  The small software developer will be driven from the

        marketplace.

           On the other hand, a computer program is a mechanism to process

        data and form information.  Information is a commodity that is

        neither non-renewable nor recycleable.  It is expandable.  If I






     Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527











                     ****** FREECOPY Users Guide *****             Page   18.
    




        have information and give or sell it to you, we both have it.

        The net effect of the transaction is positive.  The net effect

        of all other transactions in human history has been zero.  If you

        and I trade two goods, I lose what I have to gain what you have and

        vice versa.

           The FREEWARE concept admits that the exchange of software is an

        informational transaction where both parties gain and yet retain what

        they had before the transaction.  Software developers who are selling

        through standard market channels are attempting to make an

        informational transaction into an exchange transaction with a zero

        net effect.  This is impossible in the long run.    

           I am writing user supported software because I believe that it

        is a viable alternative to selling my wares through the standard

        market channels.  I believe that user supported software will 

        supply the computing community with significant computer programs

        as soon as professional developers recognize that they can thrive

        by selling their programs in this fashion.

           Therefore, I am pleased to offer FREECOPY to the computing

        community and I welcome other authors to try their hand at creating

        professional quality software.




                                       - Donald L. Buresh, C.D.P. -




      Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527











                     ****** FREECOPY Users Guide *****             Page   19.





        VI. Acknowledgements

           This is where I thank the people who made FREECOPY possible.

        My first round of thanks go out to Andrew Fluegelman for inventing

        the FREEWARE concept.  I would like to thank Marshall Goldberg for

        convincing me that the computing community needs public domain

        software.  I want to thank Patricia Smith and Jim Button for

        demonstrating to me that an individual can thrive on user supported

        software provided that they have the right product.  My thanks

        go out to Bill Salkin for creating PC Firing Line and for the

        many hours of conversation about the magazine.

           From a technical perspective, I want to thank Brian Markey

        for indicating how to overcome DMA boundary errors and Harry Keller

        for demonstrating how to calculate the amount of available free

        memory.  I also think that Keith Beal deserves credit for showing

        me a documentation system for assembly language programs.

           The trademarks that I have mentioned in this users guide are

        listed below.

                  o IBM and PC DOS are registered trademarks of International
                    Business Machines, Inc.

                  o FREEWARE is a trademark of The Headlands Press, Inc.

                  o PC Firing Line is a trademark of ABComputing


                                       - Donald L. Buresh, C.D.P. -





      Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527











                     ****** FREECOPY Users Guide *****             Page   20.





        VII. List of Bugs 

           Since the first release of FREECOPY, I have corrected a

        number of bugs.  Some were small and some were not.


                  o Ensured that FREECOPY runs on PC with lots of
                    memory.

                  o Flushed the standard keyboard buffer to prevent
                    a user from unwantly typing ahead.

                  o Modified the command line parser to process the
                    TAB character.

                  o Completely revampled the memory management scheme
                    so that FREECOPY uses the PC DOS function calls
                    when running versions of the operating system
                    greater than 2.0


























      Squire Buresh Associates, Inc.   P.O. Box 112   Millbury, MA  01527
 
                    































                        THIS IS THE END OF THE DOCUMENT















    
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0226

     Volume in drive A has no label
     Directory of A:\

    FILES226 TXT       497   7-02-85   2:28p
    FREECOPY ASM     93952   6-06-85   7:38p
    FREECOPY COM      5294   6-06-85   7:39p
    FREECOPY DOC     28800   6-06-85   7:51p
    FREECOPY LST    196547   6-06-85   7:39p
    FREECOPY MAP       190   6-06-85   7:39p
    FREECOPY REF     30773   6-06-85   7:40p
            7 file(s)     356053 bytes
                            2048 bytes free
