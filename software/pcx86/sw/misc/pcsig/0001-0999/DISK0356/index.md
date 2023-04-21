---
layout: page
title: "PC-SIG Diskette Library (Disk #356)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0356/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0356"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FANSI-CONSOLE 1 OF 2 (ALSO 650)"

    A sophisticated memory-resident program which replaces the standard IBM
    PC console drivers.
    
    Full support is provided for:  IBM PS/2 product line for both video and
    keyboard;  VGA and Super-EGA, including 132 column and 60 row display
    drivers; enhanced 101/102 key keyboards, including foreign and ``Brand
    X'' keyboards.
    
    FANSI-CONSOLE extends and speeds up the ROM BIOS and processes ANSI
    X3.64 control sequences.  Keyboard macros are supported -- program
    specific keys to perform complex series of keystokes.  Reconfigure your
    keyboard however you wish -- even a Dvorak layout.  Experiment with
    different drivers.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ANSI80.TXT

{% raw %}
```
c
[=3;7h[0m[2J
[25;03H[37;40mAttribute test [SGR][K[01;01H
[17;01H[;37;40;00m Primary Rendition  
[18;01H[;37;40;01m Increased Intensity
[19;01H[;37;40;02m Decreased Intensity
[20;01H[;37;40;03m Italics            
[21;01H[;37;40;04m Underscored        
[17;41H[;32;40;1m FANSI-CONSOLE Demo!
[18;41H[;37;40;05m Slow Blink         
[19;41H[;37;40;06m Rapid Blink        
[20;41H[;37;40;07m Reversed Image     
[21;41H[;37;40;08m Concealed          

[17;21H[;00;31;46m Primary Rendition  
[18;21H[;31;46;01m Increased Intensity
[19;21H[;31;46;02m Decreased Intensity
[20;21H[;31;46;03m Italics            
[21;21H[;31;46;04m Underscored        
[17;61H[;32;40;1;7m FANSI-CONSOLE Demo!
[18;61H[;31;46;05m Slow Blink         
[19;61H[;31;46;06m Rapid Blink        
[20;61H[;31;46;07m Reversed Image     
[21;61H[;31;46;08m Concealed          

[25;03H[37;40mColor test [SGR][K[01;01H
[01;01H[;40m[37m white  [1m whiter   
[02;01H[;40m[36m cyan   [1m cyaner   
[03;01H[;40m[32m green  [1m greener  
[04;01H[;40m[33m yellow [1m yellower 
[05;01H[;40m[31m red    [1m redder   
[06;01H[;40m[35m violet [1m violeter 
[07;01H[;40m[34m blue   [1m bluer    
[08;01H[;40m[30m black  [1m blacker  

[09;21H[;45m[37m white  [1m whiter   
[10;21H[;45m[36m cyan   [1m cyaner   
[11;21H[;45m[32m green  [1m greener  
[12;21H[;45m[33m yellow [1m yellower 
[13;21H[;45m[31m red    [1m redder   
[14;21H[;45m[35m violet [1m violeter 
[15;21H[;45m[34m blue   [1m bluer    
[16;21H[;45m[30m black  [1m blacker  

[09;61H[;47m[37m white  [1m whiter   
[10;61H[;47m[36m cyan   [1m cyaner   
[11;61H[;47m[32m green  [1m greener  
[12;61H[;47m[33m yellow [1m yellower 
[13;61H[;47m[31m red    [1m redder   
[14;61H[;47m[35m violet [1m violeter 
[15;61H[;47m[34m blue   [1m bluer    
[16;61H[;47m[30m black  [1m blacker  

[09;41H[;46m[37m white  [1m whiter   
[10;41H[;46m[36m cyan   [1m cyaner   
[11;41H[;46m[32m green  [1m greener  
[12;41H[;46m[33m yellow [1m yellower 
[13;41H[;46m[31m red    [1m redder   
[14;41H[;46m[35m violet [1m violeter 
[15;41H[;46m[34m blue   [1m bluer    
[16;41H[;46m[30m black  [1m blacker  

[01;41H[;42m[37m white  [1m whiter   
[02;41H[;42m[36m cyan   [1m cyaner   
[03;41H[;42m[32m green  [1m greener  
[04;41H[;42m[33m yellow [1m yellower 
[05;41H[;42m[31m red    [1m redder   
[06;41H[;42m[35m violet [1m violeter 
[07;41H[;42m[34m blue   [1m bluer    
[08;41H[;42m[30m black  [1m blacker  

[09;01H[;44m[37m white  [1m whiter   
[10;01H[;44m[36m cyan   [1m cyaner   
[11;01H[;44m[32m green  [1m greener  
[12;01H[;44m[33m yellow [1m yellower 
[13;01H[;44m[31m red    [1m redder   
[14;01H[;44m[35m violet [1m violeter 
[15;01H[;44m[34m blue   [1m bluer    
[16;01H[;44m[30m black  [1m blacker  

[01;21H[;41m[37m white  [1m whiter   
[02;21H[;41m[36m cyan   [1m cyaner   
[03;21H[;41m[32m green  [1m greener  
[04;21H[;41m[33m yellow [1m yellower 
[05;21H[;41m[31m red    [1m redder   
[06;21H[;41m[35m violet [1m violeter 
[07;21H[;41m[34m blue   [1m bluer    
[08;21H[;41m[30m black  [1m blacker  

[01;61H[;43m[37m white  [1m whiter   
[02;61H[;43m[36m cyan   [1m cyaner   
[03;61H[;43m[32m green  [1m greener  
[04;61H[;43m[33m yellow [1m yellower 
[05;61H[;43m[31m red    [1m redder   
[06;61H[;43m[35m violet [1m violeter 
[07;61H[;43m[34m blue   [1m bluer    
[08;61H[;43m[30m black  [1m blacker  

[25;03H[37;40mInsert and Delete Line tests [IL, DL][K[01;01H
[41m
[13;41H[LInsert Line!
[13;41HDelete Line[M
[13;41H[2LInsert 2 Lines!
[13;41HDelete Line[2M

[25;03H[37;40mScroll test [SD, SU, SL, SR][K[01;01H
[01;01H[40m[9T[41m[1S[1S[1S[1S[1S[1S[1S[1S
[01;01H[40m[2 A[41m[1 @[1 @
[01;01H[42m[1T[1T[1T[1T[1T[1T[1T[43m[6S
[01;01H[42m[1 A[1 A[43m[2 @
[01;01H[44m[5T[45m[S[S[S[S
[01;01H[44m[2 A[45m[ @[ @
[01;01H[46m[T[T[T[47m[2S
[01;01H[46m[ A[ A[47m[2 @

[25;03H[37;40mInsert and Delete CHar tests [ICH, DCH, ECH][K[01;01H
[46m
[05;59H[2P[05;39H[2P[05;19H[2P
[06;59H[2P[06;39H[2P[06;19H[2P
[07;59H[2P[07;39H[2P[07;19H[2P
[08;59H[2P[08;39H[2P[08;19H[2P
[09;59H[2P[09;39H[2P[09;19H[2P
[10;59H[2P[10;39H[2P[10;19H[2P
[11;59H[2P[11;39H[2P[11;19H[2P
[12;59H[2P[12;39H[2P[12;19H[2P
[05;19H[2@[05;39H[2@[05;59H[2@
[06;19H[2@[06;39H[2@[06;59H[2@
[07;19H[2@[07;39H[2@[07;59H[2@
[08;19H[2@[08;39H[2@[08;59H[2@
[09;19H[2@[09;39H[2@[09;59H[2@
[10;19H[2@[10;39H[2@[10;59H[2@
[11;19H[2@[11;39H[2@[11;59H[2@
[12;19H[2@[12;39H[2@[12;59H[2@
[21;01HErase CHar [ECH]
[21;01H[X
[21;02H[19X

[25;03H[37;40mErase in Line test [EL][K[01;01H
[01;41H[41m[0K
[02;41H[43m[1K
[03;41H[45m[2K
[04;41H[47m[K

[25;03H[37;40mCursor movement tests[K[01;01H
[04;41H[31;46m[03ACUrsor Up [CUU]
[02;41H[31;46m[ACUrsor Up [CUU]
[01;41H[32;45m[03BCUrsor Down [CUD]
[03;41H[32;45m[BCUrsor Down [CUD]
[02;38H[33;44m[03CCUrsor Forward [CUF]
[02;40H[33;44m[CCUrsor Forward [CUF]
[03;44H[34;43m[03DCUrsor Backward [CUB]
[03;42H[34;43m[DCUrsor Backward [CUB]
[01;21H[35;42m[02ECursor New Line [CNL]
[02;21H[35;42m[ECursor New Line [CNL]
[04;21H[36;41m[02FCUrsor Prev Line [CPL]
[03;21H[36;41m[FCUrsor Prev Line [CPL]
[21;01H[37;40m[41GCursor Horiz Abs [CHA]
[21;21H[37;40m[41GCursor Horiz Abs [CHA]

[25;03H[37;40mRepetition tests [REP][K[01;01H
[44m
[23;01H[REP][b [REP][3b

[25;03H[37;40mTab tests [TAB, CBT, CHT, CTC, TBC, CVT][K[01;01H
[42m[2g
[22;01H[W[22;09H[W[22;17H[W[22;25H[W[22;33H[W
[22;41H[W[22;49H[W[22;57H[W[22;65H[W[22;73H[W
[22;01H[31;40m[I[2W[4ICursor Horiz Tab [TAB]
[22;09H[31;40m[W[Z[7I[2ZCursor Horiz Tab [TAB]
[22;01H[31;40m[I[g[4ICursor Horiz Tab [TAB]
[22;09H[31;40m[W[Z[7I[2ZCursor Horiz Tab [TAB]

[25;03H[37;40mPage tests [NP, PP][K[01;01H
[U[2J
[V[24;01HWait a short time....[01;01H
[30;46m
[U[12;21HSubliminal Message? Buy FANSI-CONSOLE![01;01H
[V[24;01HWait a short time....[01;01H
[3V
[3U
[2U
[2J
[01;01HThis is page 3 of however many there is...
[31;46m
                                                                         
                                                                         
                                                                         

                                                                         
                                                                         
                                                                         

[05;11HThis demo uses FANSI-CONSOLE (tm)

                                                                         
                                                                         
                                                                         

[06;11HA product of Hersey Micro Consulting, Inc.
                                                                         
                                                                         
                                                                         
[08;11HFor the best effects, try this on a color display.
                                                                         
                                                                         
                                                                         
[10;11HNow back to page 1!
                                                                         
                                                                         
                                                                         

                                                                         
                                                                         
                                                                         

                                                                         
                                                                         
                                                                         
                                                                         
                                                                         
[25;01HErase in Display test[H
[12;30H[41m[0J[H
[12;30H[42m[1J[H
[12;30H[43m[2J[H
[2V

[25;03H[00m[K[24;01H[00mc[47;30m[2J
[3;23;21;60r[35;40m[2J
We have now established the area with the black background as the scrolling
area.  Within this area we can do any kind of scrolling using the normal
scrolling escape sequences.  If we just type beyond the bottom of this area
we will force it to scroll.  Also if we exceed the column width it will
force the cursor to the start of the next line within the area.
Watch this text scroll out of the area without affecting the surrounding
white area.





















Now on to tests of relative addressing within the scrolling area:
[25;03H[37;40mAttribute test [SGR][K[01;01H
[14;01H[;00m Primary Rendition  
[15;01H[;01m Increased Intensity
[16;01H[;02m Decreased Intensity
[17;01H[;03m Italics            
[18;01H[;04m Underscored        
[14;21H[;05m Slow Blink         
[15;21H[;06m Rapid Blink        
[16;21H[;07m Reversed Image     
[17;21H[;08m Concealed          

[14;01H[;00;31;46m Primary Rendition   
[15;01H[;31;46;01m Increased Intensity
[16;01H[;31;46;02m Decreased Intensity
[17;01H[;31;46;03m Italics
[18;01H[;31;46;04m Underscored
[14;21H[;31;46;05m Slow Blink
[15;21H[;31;46;06m Rapid Blink
[16;21H[;31;46;07m Reversed Image
[17;21H[;31;46;08m Concealed

[25;03H[37;40mColor test [SGR][K[01;01H
[01;01H[;40m[37m white  [1m whiter   
[02;01H[;40m[36m cyan   [1m cyaner   
[03;01H[;40m[32m green  [1m greener  
[04;01H[;40m[33m yellow [1m yellower 
[05;01H[;40m[31m red    [1m redder   
[06;01H[;40m[35m violet [1m violeter 
[07;01H[;40m[34m blue   [1m bluer    
[08;01H[;40m[30m black  [1m blacker  

[09;21H[;45m[37m white  [1m whiter   
[10;21H[;45m[36m cyan   [1m cyaner   
[11;21H[;45m[32m green  [1m greener  
[12;21H[;45m[33m yellow [1m yellower 
[13;21H[;45m[31m red    [1m redder   
[14;21H[;45m[35m violet [1m violeter 
[15;21H[;45m[34m blue   [1m bluer    
[16;21H[;45m[30m black  [1m blacker  

[09;01H[;42m[37m white  [1m whiter   
[10;01H[;42m[36m cyan   [1m cyaner   
[11;01H[;42m[32m green  [1m greener  
[12;01H[;42m[33m yellow [1m yellower 
[13;01H[;42m[31m red    [1m redder   
[14;01H[;42m[35m violet [1m violeter 
[15;01H[;42m[34m blue   [1m bluer    
[16;01H[;42m[30m black  [1m blacker  

[01;21H[;47m[37m white  [1m whiter   
[02;21H[;47m[36m cyan   [1m cyaner   
[03;21H[;47m[32m green  [1m greener  
[04;21H[;47m[33m yellow [1m yellower 
[05;21H[;47m[31m red    [1m redder   
[06;21H[;47m[35m violet [1m violeter 
[07;21H[;47m[34m blue   [1m bluer    
[08;21H[;47m[30m black  [1m blacker  

[25;03H[37;40mIns & Del Line tests [IL, DL][K[01;01H
[41m
[13;21H[LInsert Line
[13;21HDelete Line[M
[13;21H[2LInsert Line
[13;21HDelete Line[2M

[25;03H[37;40mScroll test [SD, SU][K[01;01H
[01;01H[40m[9T[41m[1S[1S[1S[1S[1S[1S[1S[1S
[01;01H[42m[1T[1T[1T[1T[1T[1T[1T[43m[6S
[01;01H[44m[5T[45m[S[S[S[S
[01;01H[46m[T[T[T[47m[2S

[25;03H[37;40mIns & Del CHar tests [ICH, DCH, ECH][K[01;01H
[46m
[05;39H[2P[05;19H[2P
[06;39H[2P[06;19H[2P
[07;39H[2P[07;19H[2P
[08;39H[2P[08;19H[2P
[09;39H[2P[09;19H[2P
[10;39H[2P[10;19H[2P
[11;39H[2P[11;19H[2P
[12;39H[2P[12;19H[2P
[05;19H[2@[05;39H[2@
[06;19H[2@[06;39H[2@
[07;19H[2@[07;39H[2@
[08;19H[2@[08;39H[2@
[09;19H[2@[09;39H[2@
[10;19H[2@[10;39H[2@
[11;19H[2@[11;39H[2@
[12;19H[2@[12;39H[2@
[21;01HErase CHar [ECH][H
[21;01H[X[H
[21;02H[19X[H

[25;03H[37;40mErase in Line test [EL][K[01;01H
[01;21H[41m[0K
[02;21H[43m[1K
[03;21H[45m[2K
[04;21H[47m[K

[25;03H[37;40mCursor movement tests[K[01;01H
[04;21H[31;46m[03ACUrsor Up [CUU]
[02;21H[31;46m[ACUrsor Up [CUU]
[01;21H[32;45m[03BCUrsor Down [CUD]
[03;21H[32;45m[BCUrsor Down [CUD]
[02;18H[33;44m[03CCUrsor Fwd [CUF]
[02;20H[33;44m[CCUrsor Fwd [CUF]
[03;24H[34;43m[03DCUrsor Bkwrd [CUB]
[03;22H[34;43m[DCUrsor Bkwrd [CUB]
[01;11H[35;42m[02ECursor NL [CNL]
[02;11H[35;42m[ECursor NL [CNL]
[04;11H[36;41m[02FCUrsor Prv L [CPL]
[03;11H[36;41m[FCUrsor Prv L [CPL]
[20;01H[37;40m[21GCursor Hrz Abs [CHA][H
[20;11H[37;40m[21GCursor Hrz Abs [CHA][H

[25;03H[37;40mRepetition tests [REP][K[01;01H
[44m
[23;01H[REP][b [REP][3b[H

[25;03H[37;40mTab tests [TAB,CBT,CHT,CTC,TBC,CVT][K[01;01H
[42m[2g
[22;01H[W[22;09H[W[22;17H[W[22;25H[W[22;33H[W[H
[22;41H[W[22;49H[W[22;57H[W[22;65H[W[22;73H[W[H
[22;01H[31;40m[I[2W[ICursor Hrz Tab [TAB][H
[22;09H[31;40m[W[Z[4I[2ZCursor Hrz Tab [TAB][H
[22;01H[31;40m[I[g[ICursor Hrz Tab [TAB][H
[22;09H[31;40m[W[Z[4I[2ZCursor Hrz Tab [TAB][H

[r[40m[2J
[1;25;9;69r[41m[2J
[1;23;9;64r[43m[2J
[1;21;9;59r[42m[2J
[1;19;9;54r[41m[2J
[1;17;9;49r[43m[2J
[1;15;9;44r[42m[2J
[1;13;9;39r[41m[2J
[1;11;9;34r[43m[2J
[1;9;9;29r[42m[2J
[1;7;9;24r[41m[2J
[1;5;9;19r[43m[2J
[1;3;9;14r[42m[2J
[1;1;9;9r[41m[2J
[1;1;9;14r[H[42m[5 A[1;3;14;14r[H[42m[2T
[3;3;9;14r[H[42m[5 @[1;3;9;9r[H[42m[2S
[1;3;9;19r[H[43m[5 A
[1;5;14;19r[H[43m[2T
[3;5;9;19r[H[43m[5 @
[1;5;9;14r[H[43m[2S
[1;5;9;24r[H[41m[5 A
[1;7;14;24r[H[41m[2T
[3;7;9;24r[H[41m[5 @
[1;7;9;19r[H[41m[2S
[1;7;9;29r[H[42m[5 A
[1;9;14;29r[H[42m[2T
[3;9;9;29r[H[42m[5 @
[1;9;9;24r[H[42m[2S
[1;9;9;34r[H[43m[5 A
[1;11;14;34r[H[43m[2T
[3;11;9;34r[H[43m[5 @
[1;11;9;29r[H[43m[2S
[1;11;9;39r[H[41m[5 A
[1;13;14;39r[H[41m[2T
[3;13;9;39r[H[41m[5 @
[1;13;9;34r[H[41m[2S
[1;13;9;44r[H[42m[5 A
[1;15;14;44r[H[42m[2T
[3;15;9;44r[H[42m[5 @
[1;15;9;39r[H[42m[2S
[1;15;9;49r[H[43m[5 A
[1;17;14;49r[H[43m[2T
[3;17;9;49r[H[43m[5 @
[1;17;9;44r[H[43m[2S
[1;17;9;54r[H[41m[5 A
[1;19;14;54r[H[41m[2T
[3;19;9;54r[H[41m[5 @
[1;19;9;49r[H[41m[2S
[1;19;9;59r[H[42m[5 A
[1;21;14;59r[H[42m[2T
[3;21;9;59r[H[42m[5 @
[1;21;9;54r[H[42m[2S
[1;21;9;64r[H[43m[5 A
[1;23;14;64r[H[43m[2T
[3;23;9;64r[H[43m[5 @
[1;23;9;59r[H[43m[2S
[1;23;9;69r[H[41m[5 A
[1;25;14;69r[H[41m[2T
[3;25;9;69r[H[41m[5 @
[1;25;9;64r[H[41m[2S
[r[40m[2J
[1;25;9;69r[41m[2J
[1;23;9;64r[43m[2J
[1;21;9;59r[42m[2J
[1;19;9;54r[41m[2J
[1;17;9;49r[43m[2J
[1;15;9;44r[42m[2J
[1;13;9;39r[41m[2J
[1;11;9;34r[43m[2J
[1;9;9;29r[42m[2J
[1;7;9;24r[41m[2J
[1;5;9;19r[43m[2J
[1;3;9;14r[42m[2J
[1;1;9;9r[41m[2J
[1;3;9;9r[H[42m[2T
[3;3;9;14r[H[42m[5 A[1;3;14;14r[H[42m[2S
[1;1;9;14r[H[42m[5 @[1;5;9;14r[H[43m[2T
[3;5;9;19r[H[43m[5 A
[1;5;14;19r[H[43m[2S
[1;3;9;19r[H[43m[5 @
[1;7;9;19r[H[41m[2T
[3;7;9;24r[H[41m[5 A
[1;7;14;24r[H[41m[2S
[1;5;9;24r[H[41m[5 @
[1;9;9;24r[H[42m[2T
[3;9;9;29r[H[42m[5 A
[1;9;14;29r[H[42m[2S
[1;7;9;29r[H[42m[5 @
[1;11;9;29r[H[43m[2T
[3;11;9;34r[H[43m[5 A
[1;11;14;34r[H[43m[2S
[1;9;9;34r[H[43m[5 @
[1;13;9;34r[H[41m[2T
[3;13;9;39r[H[41m[5 A
[1;13;14;39r[H[41m[2S
[1;11;9;39r[H[41m[5 @
[1;15;9;39r[H[42m[2T
[3;15;9;44r[H[42m[5 A
[1;15;14;44r[H[42m[2S
[1;13;9;44r[H[42m[5 @
[1;17;9;44r[H[43m[2T
[3;17;9;49r[H[43m[5 A
[1;17;14;49r[H[43m[2S
[1;15;9;49r[H[43m[5 @
[1;19;9;49r[H[41m[2T
[3;19;9;54r[H[41m[5 A
[1;19;14;54r[H[41m[2S
[1;17;9;54r[H[41m[5 @
[1;21;9;54r[H[42m[2T
[3;21;9;59r[H[42m[5 A
[1;21;14;59r[H[42m[2S
[1;19;9;59r[H[42m[5 @
[1;23;9;59r[H[43m[2T
[3;23;9;64r[H[43m[5 A
[1;23;14;64r[H[43m[2S
[1;21;9;64r[H[43m[5 @
[1;25;9;64r[H[41m[2T
[3;25;9;69r[H[41m[5 A
[1;25;14;69r[H[41m[2S
[1;23;9;69r[H[41m[5 @
[r[40m[2J
[1;25;9;69r[41m[2J
[1;23;9;64r[43m[2J
[1;21;9;59r[42m[2J
[1;19;9;54r[41m[2J
[1;17;9;49r[43m[2J
[1;15;9;44r[42m[2J
[1;13;9;39r[41m[2J
[1;11;9;34r[43m[2J
[1;9;9;29r[42m[2J
[1;7;9;24r[41m[2J
[1;5;9;19r[43m[2J
[1;3;9;14r[42m[2J
[1;1;9;9r[41m[2J
[1;3;9;9r[H[42m[2T
[3;3;9;14r[H[42m[5 A[1;3;14;14r[H[42m[2S
[1;1;9;14r[H[42m[5 @[1;3;9;19r[H[43m[5 A
[1;5;14;19r[H[43m[2T
[3;5;9;19r[H[43m[5 @
[1;5;9;14r[H[43m[2S
[1;7;9;19r[H[41m[2T
[3;7;9;24r[H[41m[5 A
[1;7;14;24r[H[41m[2S
[1;5;9;24r[H[41m[5 @
[1;7;9;29r[H[42m[5 A
[1;9;14;29r[H[42m[2T
[3;9;9;29r[H[42m[5 @
[1;9;9;24r[H[42m[2S
[1;11;9;29r[H[43m[2T
[3;11;9;34r[H[43m[5 A
[1;11;14;34r[H[43m[2S
[1;9;9;34r[H[43m[5 @
[1;11;9;39r[H[41m[5 A
[1;13;14;39r[H[41m[2T
[3;13;9;39r[H[41m[5 @
[1;13;9;34r[H[41m[2S
[1;15;9;39r[H[42m[2T
[3;15;9;44r[H[42m[5 A
[1;15;14;44r[H[42m[2S
[1;13;9;44r[H[42m[5 @
[1;15;9;49r[H[43m[5 A
[1;17;14;49r[H[43m[2T
[3;17;9;49r[H[43m[5 @
[1;17;9;44r[H[43m[2S
[1;19;9;49r[H[41m[2T
[3;19;9;54r[H[41m[5 A
[1;19;14;54r[H[41m[2S
[1;17;9;54r[H[41m[5 @
[1;19;9;59r[H[42m[5 A
[1;21;14;59r[H[42m[2T
[3;21;9;59r[H[42m[5 @
[1;21;9;54r[H[42m[2S
[1;23;9;59r[H[43m[2T
[3;23;9;64r[H[43m[5 A
[1;23;14;64r[H[43m[2S
[1;21;9;64r[H[43m[5 @
[1;23;9;69r[H[41m[5 A
[1;25;14;69r[H[41m[2T
[3;25;9;69r[H[41m[5 @
[1;25;9;64r[H[41m[2S
[r[40m[2J
[1;25;9;69r[41m[2J
[1;23;9;64r[43m[2J
[1;21;9;59r[42m[2J
[1;19;9;54r[41m[2J
[1;17;9;49r[43m[2J
[1;15;9;44r[42m[2J
[1;13;9;39r[41m[2J
[1;11;9;34r[43m[2J
[1;9;9;29r[42m[2J
[1;7;9;24r[41m[2J
[1;5;9;19r[43m[2J
[1;3;9;14r[42m[2J
[1;1;9;9r[41m[2J
[1;1;9;14r[H[42m[5 A[1;3;9;19r[H[43m[5 A
[1;5;9;24r[H[41m[5 A
[1;7;9;29r[H[42m[5 A
[1;9;9;34r[H[43m[5 A
[1;11;9;39r[H[41m[5 A
[1;13;9;44r[H[42m[5 A
[1;15;9;49r[H[43m[5 A
[1;17;9;54r[H[41m[5 A
[1;19;9;59r[H[42m[5 A
[1;21;9;64r[H[43m[5 A
[1;23;9;69r[H[41m[5 A
[1;3;69;69r[H[42m[2T
[1;5;64;69r[H[43m[2T
[1;7;59;69r[H[41m[2T
[1;9;54;69r[H[42m[2T
[1;11;49;69r[H[43m[2T
[1;13;44;69r[H[41m[2T
[1;15;39;69r[H[42m[2T
[1;17;34;69r[H[43m[2T
[1;19;29;69r[H[41m[2T
[1;21;24;69r[H[42m[2T
[1;23;19;69r[H[43m[2T
[1;25;14;69r[H[41m[2T
[25;25;64;69r[H[42m[5 @[23;25;59;69r[H[43m[5 @
[21;25;54;69r[H[41m[5 @
[19;25;49;69r[H[42m[5 @
[17;25;44;69r[H[43m[5 @
[15;25;39;69r[H[41m[5 @
[13;25;34;69r[H[42m[5 @
[11;25;29;69r[H[43m[5 @
[9;25;24;69r[H[41m[5 @
[7;25;19;69r[H[42m[5 @
[5;25;14;69r[H[43m[5 @
[3;25;9;69r[H[41m[5 @
[23;25;9;9r[H[42m[2S
[21;25;9;14r[H[43m[2S
[19;25;9;19r[H[41m[2S
[17;25;9;24r[H[42m[2S
[15;25;9;29r[H[43m[2S
[13;25;9;34r[H[41m[2S
[11;25;9;39r[H[42m[2S
[9;25;9;44r[H[43m[2S
[7;25;9;49r[H[41m[2S
[5;25;9;54r[H[42m[2S
[3;25;9;59r[H[43m[2S
[1;25;9;64r[H[41m[2S
[r[40m[2J
[1;25;9;69r[41m[2J
[1;23;9;64r[43m[2J
[1;21;9;59r[42m[2J
[1;19;9;54r[41m[2J
[1;17;9;49r[43m[2J
[1;15;9;44r[42m[2J
[1;13;9;39r[41m[2J
[1;11;9;34r[43m[2J
[1;9;9;29r[42m[2J
[1;7;9;24r[41m[2J
[1;5;9;19r[43m[2J
[1;3;9;14r[42m[2J
[1;1;9;9r[41m[2J
[1;3;9;9r[H[42m[2T
[1;5;9;14r[H[43m[2T
[1;7;9;19r[H[41m[2T
[1;9;9;24r[H[42m[2T
[1;11;9;29r[H[43m[2T
[1;13;9;34r[H[41m[2T
[1;15;9;39r[H[42m[2T
[1;17;9;44r[H[43m[2T
[1;19;9;49r[H[41m[2T
[1;21;9;54r[H[42m[2T
[1;23;9;59r[H[43m[2T
[1;25;9;64r[H[41m[2T
[25;25;9;14r[H[42m[5 A[23;25;9;19r[H[43m[5 A
[21;25;9;24r[H[41m[5 A
[19;25;9;29r[H[42m[5 A
[17;25;9;34r[H[43m[5 A
[15;25;9;39r[H[41m[5 A
[13;25;9;44r[H[42m[5 A
[11;25;9;49r[H[43m[5 A
[9;25;9;54r[H[41m[5 A
[7;25;9;59r[H[42m[5 A
[5;25;9;64r[H[43m[5 A
[3;25;9;69r[H[41m[5 A
[23;25;69;69r[H[42m[2S
[21;25;64;69r[H[43m[2S
[19;25;59;69r[H[41m[2S
[17;25;54;69r[H[42m[2S
[15;25;49;69r[H[43m[2S
[13;25;44;69r[H[41m[2S
[11;25;39;69r[H[42m[2S
[9;25;34;69r[H[43m[2S
[7;25;29;69r[H[41m[2S
[5;25;24;69r[H[42m[2S
[3;25;19;69r[H[43m[2S
[1;25;14;69r[H[41m[2S
[1;1;64;69r[H[42m[5 @[1;3;59;69r[H[43m[5 @
[1;5;54;69r[H[41m[5 @
[1;7;49;69r[H[42m[5 @
[1;9;44;69r[H[43m[5 @
[1;11;39;69r[H[41m[5 @
[1;13;34;69r[H[42m[5 @
[1;15;29;69r[H[43m[5 @
[1;17;24;69r[H[41m[5 @
[1;19;19;69r[H[42m[5 @
[1;21;14;69r[H[43m[5 @
[1;23;9;69r[H[41m[5 @
[r[40m[2J
[1;25;9;69r[41m[2J
[1;23;9;64r[43m[2J
[1;21;9;59r[42m[2J
[1;19;9;54r[41m[2J
[1;17;9;49r[43m[2J
[1;15;9;44r[42m[2J
[1;13;9;39r[41m[2J
[1;11;9;34r[43m[2J
[1;9;9;29r[42m[2J
[1;7;9;24r[41m[2J
[1;5;9;19r[43m[2J
[1;3;9;14r[42m[2J
[1;1;9;9r[41m[2J
[1;3;9;9r[H[42m[2T
[1;3;9;19r[H[43m[5 A
[1;7;9;19r[H[41m[2T
[1;7;9;29r[H[42m[5 A
[1;11;9;29r[H[43m[2T
[1;11;9;39r[H[41m[5 A
[1;15;9;39r[H[42m[2T
[1;15;9;49r[H[43m[5 A
[1;19;9;49r[H[41m[2T
[1;19;9;59r[H[42m[5 A
[1;23;9;59r[H[43m[2T
[1;23;9;69r[H[41m[5 A
[11;13;39;39r[H[42m[2S
[11;13;34;44r[H[43m[5 @
[9;15;34;44r[H[41m[2S
[9;15;29;49r[H[42m[5 @
[7;17;29;49r[H[43m[2S
[7;17;24;54r[H[41m[5 @
[5;19;24;54r[H[42m[2S
[5;19;19;59r[H[43m[5 @
[3;21;19;59r[H[41m[2S
[3;21;14;64r[H[42m[5 @
[1;23;14;64r[H[43m[2S
[1;23;9;69r[H[41m[5 @
[1;3;9;9r[H[42m[2T
[1;3;9;19r[H[43m[5 A
[1;7;9;19r[H[41m[2T
[1;7;9;29r[H[42m[5 A
[1;11;9;29r[H[43m[2T
[1;11;9;39r[H[41m[5 A
[1;15;9;39r[H[42m[2T
[1;15;9;49r[H[43m[5 A
[1;19;9;49r[H[41m[2T
[1;19;9;59r[H[42m[5 A
[1;23;9;59r[H[43m[2T
[1;23;9;69r[H[41m[5 A
[11;13;39;39r[H[42m[2S
[11;13;34;44r[H[43m[5 @
[9;15;34;44r[H[41m[2S
[9;15;29;49r[H[42m[5 @
[7;17;29;49r[H[43m[2S
[7;17;24;54r[H[41m[5 @
[5;19;24;54r[H[42m[2S
[5;19;19;59r[H[43m[5 @
[3;21;19;59r[H[41m[2S
[3;21;14;64r[H[42m[5 @
[1;23;14;64r[H[43m[2S
[1;23;9;69r[H[41m[5 @
[r[40m[2J
c
[25;03H[00m[K[24;01H[00m
```
{% endraw %}

## CHARSETS.TXT

{% raw %}
```
 K(BFinals
(BA=UK       	(BB=ASCII    	(B0=VT100 grf	(B1=IBMPC grf	(B2=IBMPC mis	(B  
(B2 3 4 5 6 7	(B2 3 4 5 6 7	(B2 3 4 5 6 7	(B2 3 4 5 6 7	(B2 3 4 5 6 7	(B  
(B-----------	(B-----------	(B-----------	(B-----------	(B-----------	(B  
(A  0 @ P ` p	(B  0 @ P ` p	(0  0 @ P ` p	(1  0 @ P ` p	(2  0 @ P ` p	(B|0
(A! 1 A Q a q	(B! 1 A Q a q	(0! 1 A Q a q	(1! 1 A Q a q	(2! 1 A Q a q	(B|1
(A" 2 B R b r	(B" 2 B R b r	(0" 2 B R b r	(1" 2 B R b r	(2" 2 B R b r	(B|2
(A# 3 C S c s	(B# 3 C S c s	(0# 3 C S c s	(1# 3 C S c s	(2# 3 C S c s	(B|3
(A$ 4 D T d t	(B$ 4 D T d t	(0$ 4 D T d t	(1$ 4 D T d t	(2$ 4 D T d t	(B|4
(A% 5 E U e u	(B% 5 E U e u	(0% 5 E U e u	(1% 5 E U e u	(2% 5 E U e u	(B|5
(A& 6 F V f v	(B& 6 F V f v	(0& 6 F V f v	(1& 6 F V f v	(2& 6 F V f v	(B|6
(A' 7 G W g w	(B' 7 G W g w	(0' 7 G W g w	(1' 7 G W g w	(2' 7 G W g w	(B|7
(A( 8 H X h x	(B( 8 H X h x	(0( 8 H X h x	(1( 8 H X h x	(2( 8 H X h x	(B|8
(A) 9 I Y i y	(B) 9 I Y i y	(0) 9 I Y i y	(1) 9 I Y i y	(2) 9 I Y i y	(B|9
(A* : J Z j z	(B* : J Z j z	(0* : J Z j z	(1* : J Z j z	(2* : J Z j z	(B|A
(A+ ; K [ k {	(B+ ; K [ k {	(0+ ; K [ k {	(1+ ; K [ k {	(2+ ; K [ k {	(B|B
(A, < L \ l |	(B, < L \ l |	(0, < L \ l |	(1, < L \ l |	(2, < L \ l |	(B|C
(A- = M ] m }	(B- = M ] m }	(0- = M ] m }	(1- = M ] m }	(2- = M ] m }	(B|D
(A. > N ^ n ~	(B. > N ^ n ~	(0. > N ^ n ~	(1. > N ^ n ~	(2. > N ^ n ~	(B|E
(A/ ? O _ o	(B/ ? O _ o  	(0/ ? O _ o  	(1/ ? O _ o  	(2/ ? O _ o	(B|F
(A[>16l
```
{% endraw %}

## DVORAK.TXT

{% raw %}
```
M["!&"p
M["@%"p
M["$!"p
M["%("p
M["^)"p
M["&@"p
M["*$"p
M["(^"p
M[")*"p
M["-+"p
M["_="p
M["=["p
M["+{"p
M["q/"p
M["Q?"p
M["è"p
M["w,"p
M["W<"p
M["ê"p
M["e."p
M["E>"p
M["ë"p
M["rp"p
M["RP"p
M[""p
M["ty"p
M["TY"p
M[""p
M["yf"p
M["YF"p
M[""p
M["ug"p
M["UG"p
M[""p
M["ic"p
M["IC"p
M[9;""p
M["or"p
M["OR"p
M[""p
M["pl"p
M["PL"p
M[""p
M["['"p
M["{"""p
M["so"p
M["SO"p
M[""p
M["de"p
M["DE"p
M[""p
M["fu"p
M["FU"p
M[""p
M["gi"p
M["GI"p
M["";9p
M["hd"p
M["HD"p
M[8;""p
M["jh"p
M["JH"p
M[10;8p
M["kt"p
M["KT"p
M[""p
M["ln"p
M["LN"p
M[""p
M[";s"p
M[":S"p
M["à"p
M["'-"p
M["""_"p
M["z;"p
M["Z:"p
M[26;"à"p
M["xq"p
M["XQ"p
M[""p
M["cj"p
M["CJ"p
M["";10p
M["vk"p
M["VK"p
M[""p
M["bx"p
M["BX"p
M[""p
M["nb"p
M["NB"p
M[""p
M[",w"p
M["<W"p
M["ê"p
M[".v"p
M[">V"p
M["ë"p
M["/z"p
M["?Z"p
M["è";26p
```
{% endraw %}

## DVORAK2.TXT

{% raw %}
```
[>23h
```
{% endraw %}

## FANSICAP.TXT

{% raw %}
```
# This is a termcap for FANSI-CONSOLE when FANSI-VT100 is reset.
# When FANSI-VT100 is set, you should use the termcap entry for a VT100.
#
# This should be used with UNIX or UNIX-like utilities.
# It works with communications programs that interface with the console 
# through BIOS or DOS calls.
#
# The comments provided within curly braces must be removed.
# The lines which end with :NO in the comments must also be removed.
# They are provided only for reference. 
#
# Tabbing may not always be done correctly unless MS-DOS program writes
# in RAW mode to console.  Otherwize MS-DOS gets in the way!
# See notes in the manual about this.
#
# Macros are assigned to the cursor and function keys F1-F10 
# to make them recognizable as function keys to UNIX.
# This is because most UNIX systems ignore the nuls which are the first
# part of the normal char sequences generated by these keys.
# Use Alt-Ctrl-Caps to turn the macros on/off if you need to use these keys 
# in your terminal program for menus, etc, and you have problems with them. 
# However, you should only have this problem if you use the communication
# program menus or exit the communication program in the middle of your
# connection to your UNIX host computer.
#
# This termcap was written by:
# Mark Hersey
# Hersey Micro Consulting, Inc.
# P.O. Box 8276
# Ann Arbor, MI USA 48107
# (313) 994-3259
#
# This termcap is NOT copyrighted. 
# Therefore you may legally enter it into any termcap files, with or without
# editing changes, without specific permission or renumeration.
#
# Hersey Micro-Consulting's FANSI-CONSOLE
#
fc|fansi|fconsole|Hersey Micro Consulting's FANSI-CONSOLE:\
	:al=\E[L:\		{al=Add Line}
	:AL=\E[%dL:\		{AL=Add Lines}
	:am:\			{am=Automatic Margins: unless WRAP off}
	\			{bc=BackspaCe:NO}
	:bs:\			{bs=BackSpace char works}
	:bt=\E[Z:\		{bt=BackTab}
	:cd=\E[J:\		{cd=Clear to end of Display}
	:ce=\E[K:\		{ce=Clear End of line}
	:cl=\E[H\E[J:\		{cl=CLear screen and home}
	:cm=\E[%i%d;%dH:\	{cm=Cursor Motion}
	:co#80:\		{co=COlumns on screen}
	:cr=^M:\		{cr=Carriage Return}
	\			{cs=Change Scrolling region:NO, use al,dl instead}
	\			{da=Display retained Above:NO}
	\			{db=Display retained Below:NO}
	:dc=\E[P:\		{dc=Delete Character}
	:DC=\E[%dP:\		{DC=Delete Characters}
	:dl=\E[M:\		{dl=Delete Line}
	:DL=\E[%dM:\		{DL=Delete Lines}
	\			{dm=Delete Mode:NO}
	:do=\E[B:\		{do=cursor DOwn}
	:DO=\E[%dB:\		{DO=cursor DOwns}
	\			{ed=End Delete:NO}
	:ei=\E[4l:\		{ei=End Insert}
	:eo:\			{eo=Erase Overstrikes: with blanks?}
	\			{hc=Hard Copy:NO}
	\			{ho=HOme:NO, use cm instead}
	\			{hz=HaZeltine terminal:no tildes:NO}
	:ic=\E[@:\		{ic=Insert Char}
	:IC=\E[%d@:\		{IC=Insert Chars}
	:im=\E[4h:\		{im=Insert Mode}
	\			{in=INsert mode:distinguishes nulls:NO}
	\			{ip=Insert Post char:NO}
	:is=\E[>0;'G';27;'[H'p\E[>0;'H';27;'[A'p\E[>0;'K';27;'[D'p\E[>0;'M';27;'[C'p\E[>0;'P';27;'[B'p\E[>0;';';27;'OP'p\E[>0;'<';27;'OQ'p\E[>0;'=';27;'OR'p\E[>0;'>';27;'OS'p\E[>0;'?';27;'OT'p\E[>0;'@';27;'OU'p\E[>0;'A';27;'OV'p\E[>0;'B';27;'OW'p\E[>0;'C';27;'OX'p\E[>0;'D';27;'OY'p:\	{is=Init String}
	:kd=\E[B:\		{kd=Keypad Down}
	\			{ke=Keypad End:NO}
	:kh=\E[H:\		{kd=Keypad Home}
	:kl=\E[D:\		{kl=Keypad Left}
	:kr=\E[C:\		{kr=Keypad Right}
	\			{ks=Keypad Start}
	:ku=\E[A:\		{ku=Keypad Up}
	:k1=\EOP:\		{k1=Key f1}
	:k2=\EOQ:\		{k2=Key f2}
	:k3=\EOR:\		{k3=Key f3}
	:k4=\EOS:\		{k4=Key f4}
	:k5=\EOT:\		{k5=Key f5}
	:k6=\EOU:\		{k6=Key f6}
	:k7=\EOV:\		{k7=Key f7}
	:k8=\EOW:\		{k8=Key f8}
	:k9=\EOX:\		{k9=Key f9}
	:k0=\EOY:\		{k0=Key f0}
	:LE=\E[%dD:\		{LE=cursor LEfts}
	:li#25:\		{li=LInes on screen}
	\			{ll=Lower Left, use cm instead}
	:mb=\E[5m:\		{mb=Make Blink}
	:md=\E[2m:\		{md=Make Dull}
	:me=\E[m:\		{me=Make Exit}
	:mh=\E[1m:\		{mh=Make High intensity}
	:mi:\			{mi=Move in Insert mode: OK}
	:mk=\E[8m:\		{mk=Make Koncealed}
	:mr=\E[7m:\		{mr=Make Reversed}
	:ms:\			{ms=Move in Standout:OK}
	:nd=\E[C:\		{nd=Non-Destructive space}
	:nl=^J:\		{nl=New Line}
	\			{nc=No Carriage return:NO}
	\			{ns=No Scroll:NO}
	\			{os=Over Strike:NO}
	\			{pc=Pad Char:NO}
	:rc=\E[u:\		{rc=Restore Cursor}
	:RI=\E[%dC:\		{ri=cursor RIghts}
	:rs=\E[>0;'G';0;'G'p\E[>0;'H';0;'H'p\E[>0;'K';0;'K'p\E[>0;'M';0;'M'p\E[>0;'P';0;'P'p\E[>0;';';0;';'p\E[>0;'<';0;'<'p\E[>0;'=';0;'='p\E[>0;'>';0;'>'p\E[>0;'?';0;'?'p\E[>0;'@';0;'@'p\E[>0;'A';0;'A'p\E[>0;'B';0;'B'p\E[>0;'C';0;'C'p\E[>0;'D';0;'D'p:\	{rs=Reset String}
	:sc=\E[s:\		{sc=Save Cursor}
	:se=\E[27m:\		{se=Standout mode Exit, restore color?}
	:sf=\ED:\		{sf=Scroll Forward}
	:so=\E[7m:\		{so=StandOut mode, use color if you have it}
	:sr=\EM:\		{sr=Scroll Reverse}
	:ta=\E[I:\		{ta=TAb char}
	:te=\E[>0;'G';0;'G'p\E[>0;'H';0;'H'p\E[>0;'K';0;'K'p\E[>0;'M';0;'M'p\E[>0;'P';0;'P'p\E[>0;';';0;';'p\E[>0;'<';0;'<'p\E[>0;'=';0;'='p\E[>0;'>';0;'>'p\E[>0;'?';0;'?'p\E[>0;'@';0;'@'p\E[>0;'A';0;'A'p\E[>0;'B';0;'B'p\E[>0;'C';0;'C'p\E[>0;'D';0;'D'p:\	{te=Terminal End}
	:ti=\E[>0;'G';27;'[H'p\E[>0;'H';27;'[A'p\E[>0;'K';27;'[D'p\E[>0;'M';27;'[C'p\E[>0;'P';27;'[B'p\E[>0;';';27;'OP'p\E[>0;'<';27;'OQ'p\E[>0;'=';27;'OR'p\E[>0;'>';27;'OS'p\E[>0;'?';27;'OT'p\E[>0;'@';27;'OU'p\E[>0;'A';27;'OV'p\E[>0;'B';27;'OW'p\E[>0;'C';27;'OX'p\E[>0;'D';27;'OY'p:\	{is=Terminal Init}
	:ue=\E[24m:\		{ue=Underscore End}
	:ul:\			{ul=UnderLine: OK}
	:up=\E[A:\		{up=cursor UP}
	:UP=\E[%dA:\		{UP=cursor UPs}
	:us=\E[4m:\		{us=Underscore Start}
	\			{vb=Visible Bell:NO}
	\			{ve=Visual Exit:NO}
	\			{vs=Visual Start:NO}
	\			{xb=XBehive terminal:no esc key:NO}
	\			{xn=XNewline:lf after wrap ignored:NO, unless FANSI-WRAP on}
	\			{xt=XTeleray 1061:desructive tabs:NO}
	\			{xx=XtektroniX insert line:NO}
```
{% endraw %}

## FANSISET.TXT

{% raw %}
```
[>5;7z[>6;18z
```
{% endraw %}

## FILE0356.TXT

{% raw %}
```
Disk No:  356                                                           
Disk Title: Fansi-Console 1 of 2 (also 650)                             
PC-SIG Version: S3.1                                                    
                                                                        
Program Title: Fansi-Console                                            
Author Version: 2.00U                                                   
Author Registration: $49.95 -- use license; $75.00 -- user manual and up
Special Requirements: Two floppy drives.                                
                                                                        
A sophisticated memory-resident program which replaces the standard IBM 
PC console drivers.                                                     
                                                                        
Full support is provided for:  IBM PS/2 product line for both video and 
keyboard for models 50 and up;  VGA and Super-EGA, including 132 column 
and 60 row display drivers; enhanced 101/102 key keyboards, including   
foreign and ``Brand X'' keyboards.                                      
                                                                        
FANSI-CONSOLE extends the ROM BIOS and processes ANSI X3.64 control     
sequences.  Keyboard macros are supported -- program specific keys to   
perform complex series of keystokes.  Reconfigure your keyboard however 
you wish -- even a Dvorak layout.  Experiment with different drivers.   
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0356

     Volume in drive A has no label
     Directory of A:\

    -README- NOW      4656  11-27-89   3:31p
    123V200  PCH      1493  12-22-86   5:29p
    ANSI80   TXT     23434  10-13-86   6:06p
    AT       LAY       110  10-10-86   5:58p
    ATT6310  PCH      1016  10-19-87  11:53a
    BRIEF133 PCH      1510  12-07-87   8:16a
    CHARSETS TXT      1581   2-15-86   5:58p
    DEJAVU   EXE      8122  10-21-86  11:22p
    DG1PLUS  LAY       176   3-19-87   1:26p
    DIZZY    C        7936   6-30-86   9:26p
    DVORAK   TXT      1152  10-23-84   4:11p
    DVORAK2  TXT         7  10-14-86   6:11p
    EGAFAKE  PCH       841   3-25-87   7:04p
    EGALGCHR COM       116   3-25-87  12:49p
    EGASMCHR COM       177   3-25-87  12:49p
    EXPAND   COM      3210   8-14-89   2:52p
    FANSICAP TXT      5753   1-08-87   7:31p
    FANSISET EXE     25612  10-22-86  10:34a
    FANSISET TXT        16   1-13-87  12:47p
    FCON200  PCH     28409  11-27-89   1:52p
    FCONBETA DEV     41458  10-21-86  11:54p
    FCONSOLE DEV     41493  11-27-89   1:53p
    FLAYOUT  EXE     29754  10-21-86  11:22p
    IBMBIO   320      7071  12-29-88  12:20p
    IBMBIO   330      9005  12-29-88  12:21p
    IBMMODE  300      2038  12-29-88  12:22p
    IBMMODE  310      2065  12-29-88  12:22p
    IBMMODE  320      2299  12-29-88  12:20p
    IBMMODE  330      2299  12-29-88  12:21p
    LOGO     PCH      1618   6-30-86   9:29p
    MEM32K   PCH      1130  11-02-86  11:27a
    NOBLUE   COM        18  11-18-86   7:35p
    NOCURMOV PCH       937   3-16-87  11:02a
    NOHERC   PCH       794  12-12-86  10:35a
    NOHERC2  PCH       604   6-24-87   3:40p
    NOKEYS   PCH      1299   3-09-87   1:24p
    NOPEN    PCH       729   7-06-87  10:22a
    RAWMODE  MAC      2592   8-29-86  11:39a
    SEND     EXE      7306   1-08-87  10:12a
    SK111    PCH      2696   6-30-86   9:29p
    SNOW     COM       795  12-01-86   1:55p
    SPIT     EXE     13574   6-30-86   9:29p
    STANDARD LAY       110   1-20-88   4:17p
    STKSTRAW COM       184   2-02-86   5:11p
    TRAP     COM       391  12-31-85  11:38a
    UNSQZ    COM      5642   8-14-89   7:33p
    WATZITBE COM       508  10-22-86  12:00a
    WATZITDO COM       775  10-22-86  12:00a
    WORDSTAR PCH      2853  12-22-86   5:19p
    Z200     LAY       172  10-10-86   5:58p
    EGAFONT  DEV      7601   3-09-89   2:12p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       576   1-01-80  11:27a
    FILE0356 TXT      1999   7-13-90  11:12p
           54 file(s)     307750 bytes
                           24576 bytes free
