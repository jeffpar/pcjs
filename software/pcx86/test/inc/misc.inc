CR	equ	0x0d
LF	equ	0x0a

;
; The "set" macro initializes a register to the specified value (eg, "set eax,0")
;
%macro	set	2
    %ifnum %2
      %if %2 = 0
	xor	%1,%1
      %else
    	mov	%1,%2
      %endif
    %else
    	mov	%1,%2
    %endif
%endmacro
