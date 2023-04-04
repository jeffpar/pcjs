---
layout: page
title: "PC-SIG Library Disk #1536"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1536/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1536"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FINNISH GAMES"

    A smorgasbord of programs from the University of Vaasa in Finland!
    Games, linear programming tools, lots of telephone modem help, and even
    a touch of Scandinavian PC key use make an interesting mix of
    utilities.
    
    MANAGAME is a management simulation game from the Department of
    Business Studies.  You are in charge of a small manufacturing company
    with a new widget to market.  Fortune or bankruptcy await you!
    
    HEXAGAME is the old number guessing game with a twist: you can try it in
    decimal, binary or hexadecimal!  Each guess is also shown in its decimal
    equivalent.  Great for computer students.
    
    MLTIGAME provides timed competition for one or more students on
    multiplication tables.  Winners' names go into the Hall of Fame.
    Suitable for ages 9 to 14.
    
    LINSOLVE solves linear programming problems with up to 25 variables
    interactively.  It also solves linear GOAL programming problems.
    
    PCPFON tackles your special needs in using ProComm Plus, such as: 1) How
    to use Zmodem with ProComm Plus; 2) How to get the Scandinavian
    characters working; 3) How to transfer files between two PCs (when
    neither is a bulletin board) -- both by modem and by direct cable
    connection.  Other files explain how to ready ProComm Plus and the
    Worldport 2400 modem for the host mode; give routines for calling
    Finnish Opus Bulletin Boards, and more.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## TEMP.BAS

```bas
SUB WriteVid INLINE
  '
  ' Move bytes to video memory preventing screen flicker and snow.
  ' Turbo Basic calling sequence:
  '   call WriteVid (NumBytes%, Retracemode%, Source$, Scratr$, StringDisp%, _
  '     DestSeg%, Disp%)
  '   where:
  '     Numbytes% is the number of bytes that will be written to the screen.
  '     If Retracemode% <> 0, retrace is checked before writing to video
  '     memory to avoid snow.
  '     Source$ is the text string that will be written.  It must be
  '       NumBytes% + StringDisp% in length or longer.
  '     Scratr$ is the string containing the attribute bytes.  Each character
  '       of Source$ is mapped to each character of Scratr$.
  '     StringDisp% is the displacement from the start of Source$ and
  '       Scratr$ of the text to be written to the screen.
  '     DestSeg% is the segment address of the video ram.
  '     Disp% is the screen starting location to write to in terms of the
  '       number of characters displacement from the start of the screen video
  '       ram.  Thus the first row - first column is 0, second row - first
  '       column is 80, etc.
  '

  'This version is for size-displacement order of string descriptors

  $INLINE &H55, &H8B, &HEC, &H6 , &H1E, &H8B, &H16, &H0 , &H0 , &HC5
  $INLINE &H76, &HA , &H8E, &H4 , &HC5, &H76, &H6 , &H8B, &H3C, &HC5
  $INLINE &H76, &H1A, &H8B, &H4 , &H50, &HC5, &H76, &HE , &H8B, &H4
  $INLINE &HC5, &H76, &H12, &H8B, &H5C, &H2 , &H3 , &HD8, &HC5, &H76
  $INLINE &H1E, &H8B, &HC , &HC5, &H76, &H16, &H8B, &H74, &H2 , &H3
  $INLINE &HF0, &H58, &HD1, &HE7, &HFC, &H8E, &HDA, &H3D, &H0 , &H0
  $INLINE &H74, &H25, &HBA, &HDA, &H3 , &HAC, &H8B, &HEE, &H8B, &HF3
  $INLINE &H8A, &H24, &H43, &H8B, &HF5, &H8B, &HE8, &HB4, &H9 , &HEC
  $INLINE &HD0, &HD8, &H72, &HFB, &HFA, &HEC, &H22, &HC4, &H74, &HFB
  $INLINE &H8B, &HC5, &HAB, &HFB, &HE2, &HE1, &HEB, &HE , &H90, &HAC
  $INLINE &H8B, &HEE, &H8B, &HF3, &H8A, &H24, &H8B, &HF5, &H43, &HAB
  $INLINE &HE2, &HF3, &H1F, &H7 , &H5D

'cseg    segment     para public 'code'
'        assume      nothing
'        assume      cs:cseg
'
'WriteVid proc    far
'
'   push bp
'   mov  bp,sp
'   push es
'   push ds
'   mov  dx,ds:0    ;save string segment
'   lds  si,[bp+10]
'   mov  es,[si]    ;dest seg into ES
'   lds  si,[bp+6]
'   mov  di,[si]    ;dest disp into DI
'   lds  si,[bp+26]
'   mov  ax,[si]    ;Retracemode% to AX
'   push ax
'   lds  si,[bp+14]
'   mov  ax,[si]    ;Stringdisp%
'   lds  si,[bp+18]
'   mov  bx,[si+2]  ;addr of attr string
'   add  bx,ax      ;add string displacement
'   lds  si,[bp+30]
'   mov  cx,[si]    ;Numbytes% to CX
'   lds  si,[bp+22]
'   mov  si,[si+2]  ;source ptr to SI
'   add  si,ax      ;add string displacement
'   pop  ax
'   shl  di,1       ;displ * 2 for dest
'   cld             ;string direction forwd
'   mov  ds,dx      ;set string segment
'   cmp  ax,0
'   jz   h          ;not retracemode
'   mov  dx,03dah   ;DX to CGA status port
'z: lodsb           ;grab a video byte
'   mov  bp,si
'   mov  si,bx
'   mov  ah,[si]
'   inc  bx
'   mov  si,bp
'   mov  bp,ax      ;save it
'   mov  ah,9       ;save retrace mask
'o: in   al,dx      ;get 6845 status
'   rcr  al,1       ;check horiz retrace
'   jb   o          ;loop if in horiz retr:
'                   ; Prevents starting in
'                   ; mid-retr, since there
'                   ; is enough time for 1
'                   ; & only 1 STOSW during
'                   ; horizontal retrace.
'   cli             ;no ints, critical sect
't: in   al,dx      ;get 6845 status
'   and  al,ah      ;chk horiz & vert retr:
'                   ; If the video board
'                   ; doesn't report horiz
'                   ; retr while in vert,
'                   ; retr, this will allow
'                   ; several chars to be
'                   ; stuffed in during
'                   ; vertical retrace.
'   jz   t          ;loop if 0
'   mov  ax,bp      ;get the video byte
'   stosw           ;store the video word
'   sti             ;allow interrupts
'   loop z          ;go do next word
'   jmp  f
'h: lodsb           ;grab a video byte.
'   mov  bp,si
'   mov  si,bx
'   mov  ah,[si]
'   mov  si,bp
'   inc  bx
'   stosw           ;video word into screen
'   loop h          ;repeat for len in CX
'f: pop ds
'   pop es
'   pop bp
'
'WriteVid        endp
'
'cseg        ends
'            end

'  This version is for displacement-size order of string descriptors
'
'  $INLINE &H55, &H8B, &HEC, &H6 , &H1E, &H8B, &H16, &H0 , &H0 , &HC5
'  $INLINE &H76, &HA , &H8E, &H4 , &HC5, &H76, &H6 , &H8B, &H3C, &HC5
'  $INLINE &H76, &H1A, &H8B, &H4 , &H50, &HC5, &H76, &HE , &H8B, &H4
'  $INLINE &HC5, &H76, &H12, &H8B, &H1C, &H3 , &HD8, &HC5, &H76, &H1E
'  $INLINE &H8B, &HC , &HC5, &H76, &H16, &H8B, &H34, &H3 , &HF0, &H58
'  $INLINE &HD1, &HE7, &HFC, &H8E, &HDA, &H3D, &H0 , &H0 , &H74, &H25
'  $INLINE &HBA, &HDA, &H3 , &HAC, &H8B, &HEE, &H8B, &HF3, &H8A, &H24
'  $INLINE &H43, &H8B, &HF5, &H8B, &HE8, &HB4, &H9 , &HEC, &HD0, &HD8
'  $INLINE &H72, &HFB, &HFA, &HEC, &H22, &HC4, &H74, &HFB, &H8B, &HC5
'  $INLINE &HAB, &HFB, &HE2, &HE1, &HEB, &HE , &H90, &HAC, &H8B, &HEE
'  $INLINE &H8B, &HF3, &H8A, &H24, &H8B, &HF5, &H43, &HAB, &HE2, &HF3
'  $INLINE &H1F, &H7 , &H5D
'
'cseg    segment     para public 'code'
'        assume      nothing
'        assume      cs:cseg
'
'WriteVid proc    far
'
'   push bp
'   mov  bp,sp
'   push es
'   push ds
'   mov  dx,ds:0    ;save string segment
'   lds  si,[bp+10]
'   mov  es,[si]    ;dest seg into ES
'   lds  si,[bp+6]
'   mov  di,[si]    ;dest disp into DI
'   lds  si,[bp+26]
'   mov  ax,[si]    ;Retracemode% to AX
'   push ax
'   lds  si,[bp+14]
'   mov  ax,[si]    ;Stringdisp%
'   lds  si,[bp+18]
'   mov  bx,[si]    ;addr of attr string
'   add  bx,ax      ;add string displacement
'   lds  si,[bp+30]
'   mov  cx,[si]    ;Numbytes% to CX
'   lds  si,[bp+22]
'   mov  si,[si]    ;source ptr to SI
'   add  si,ax      ;add string displacement
'   pop  ax
'   shl  di,1       ;displ * 2 for dest
'   cld             ;string direction forwd
'   mov  ds,dx      ;set string segment
'   cmp  ax,0
'   jz   h          ;not retracemode
'   mov  dx,03dah   ;DX to CGA status port
'z: lodsb           ;grab a video byte
'   mov  bp,si
'   mov  si,bx
'   mov  ah,[si]
'   inc  bx
'   mov  si,bp
'   mov  bp,ax      ;save it
'   mov  ah,9       ;save retrace mask
'o: in   al,dx      ;get 6845 status
'   rcr  al,1       ;check horiz retrace
'   jb   o          ;loop if in horiz retr:
'                   ; Prevents starting in
'                   ; mid-retr, since there
'                   ; is enough time for 1
'                   ; & only 1 STOSW during
'                   ; horizontal retrace.
'   cli             ;no ints, critical sect
't: in   al,dx      ;get 6845 status
'   and  al,ah      ;chk horiz & vert retr:
'                   ; If the video board
'                   ; doesn't report horiz
'                   ; retr while in vert,
'                   ; retr, this will allow
'                   ; several chars to be
'                   ; stuffed in during
'                   ; vertical retrace.
'   jz   t          ;loop if 0
'   mov  ax,bp      ;get the video byte
'   stosw           ;store the video word
'   sti             ;allow interrupts
'   loop z          ;go do next word
'   jmp  f
'h: lodsb           ;grab a video byte.
'   mov  bp,si
'   mov  si,bx
'   mov  ah,[si]
'   mov  si,bp
'   inc  bx
'   stosw           ;video word into screen
'   loop h          ;repeat for len in CX
'f: pop ds
'   pop es
'   pop bp
'
'WriteVid        endp
'
'cseg        ends
'            end

END SUB 'WriteVid



SUB ReadVid INLINE
  '
  ' Move bytes from video memory preventing screen flicker and snow.
  ' Turbo Basic calling sequence:
  '   call ReadVid _
  '     (NumBytes%, Retracemode%, Text$, Attr$, StringDisp%, SourceSeg%, Disp%)
  '   where:
  '     NumBytes% is the number of bytes that will be read from the screen.
  '     If Retracemode% <> 0, retrace is checked before reading from video
  '       memory to avoid snow.
  '     Text$ is the text string that will be contain the characters read from
  '       the screen. It must be preset to NumBytes% + StringDisp% in length
  '       or longer.
  '     Attr$ is the string that will contain the attribute bytes.  Each
  '       character of Text$ will be mapped to each character of Scratr$.
  '       It must be preset to Numbytes% + StringDisp% in length or longer.
  '     StringDisp% is the displacement from the start of the Text$ and Attr$
  '       string to begin placing the characters read from the screen.
  '     SourceSeg% is the segment address of the video ram.
  '     Disp% is the screen starting location to read from in terms of the
  '       number of characters displacement from the start of the screen video
  '       ram.  Thus the first row - first column is 0, second row - first
  '       column is 80, etc.
  '

  'This version is for size-displacement order of string descriptors

  $INLINE &H55, &H8B, &HEC, &H1E, &H6 , &HBA, &HDA, &H3 , &HA1, &H0
  $INLINE &H0 , &H8E, &HC0, &HC5, &H76, &H1A, &H8B, &H4 , &HC5, &H76
  $INLINE &H1E, &H8B, &HC , &HC5, &H76, &H12, &H8B, &H5C, &H2 , &HC5
  $INLINE &H76, &HA , &H8E, &H1C, &H6 , &H50, &HC4, &H7E, &HE , &H26
  $INLINE &H8B, &H5 , &H3 , &HD8, &HC4, &H7E, &H6 , &H26, &H8B, &H35
  $INLINE &HC4, &H7E, &H16, &H26, &H8B, &H7D, &H2 , &H3 , &HF8, &H58
  $INLINE &H7 , &HD1, &HE6, &HFC, &H3D, &H0 , &H0 , &H74, &H23, &HB4
  $INLINE &H9 , &HEC, &HD0, &HD8, &H72, &HFB, &HFA, &HEC, &H22, &HC4
  $INLINE &H74, &HFB, &HAD, &HFB, &H26, &H88, &H5 , &H8B, &HEF, &H8B
  $INLINE &HFB, &H26, &H88, &H25, &H8B, &HFD, &H43, &H47, &HE2, &HE1
  $INLINE &H3B, &HC0, &H74, &H11, &HAD, &H26, &H88, &H5 , &H8B, &HEF
  $INLINE &H8B, &HFB, &H26, &H88, &H25, &H8B, &HFD, &H43, &H47, &HE2
  $INLINE &HEF, &H7 , &H1F, &H5D

'cseg    segment     para public 'code'
'        assume      nothing
'        assume      cs:cseg
'
'ReadVid  proc far
'    push bp
'    mov  bp,sp
'    push ds
'    push es
'    mov  dx,03dah   ;point DX to CGA status port
'    mov  ax,ds:0    ;string segment
'    mov  es,ax      ; to ES
'    lds  si,[bp+26] ;Retracemode%
'    mov  ax,[si]    ; to AX
'    lds  si,[bp+30] ;NumBytes%
'    mov  cx,[si]    ; to CX
'    lds  si,[bp+18] ;disp of attr str
'    mov  bx,[si+2]  ; to BX
'    lds  si,[bp+10] ;Sourceseg%
'    mov  ds,[si]    ; to DS
'    push es         ;
'    push ax
'    les  di,[bp+14]
'    mov  ax,es:[di] ;Stringdisp%
'    add  bx,ax      ;add string displacement
'    les  di,[bp+6]  ;Disp%
'    mov  si,es:[di] ; to SI
'    les  di,[bp+22] ;disp of text str
'    mov  di,es:[di+2] ; to DI
'    add  di,ax      ;add string displacement
'    pop  ax
'    pop  es         ;
'    shl  si,1       ;displacement * 2 for source
'    cld             ;set string direction to forward
'    cmp  ax,0
'    jz   .7         ;not retmode, use simpler routine
'.5: mov  ah,9       ;move horiz. + vertical retrace
'                    ; mask to fast storage
'.9: in   al,dx      ;get 6845 status
'    rcr  al,1       ;check horizontal retrace
'    jb   .9         ;loop if in horizontal retrace:
'                    ; this prevents starting in mid
'                    ; retrace, since there is enough
'                    ; time for 1 and only 1 STOSW
'                    ; during horizontal retrace
'    cli             ;no ints during critical section
'.6: in   al,dx      ;get 6845 status
'    and  al,ah      ;check for both kinds of retrace:
'                    ; if the video board does not
'                    ; report horizontal retrace while
'                    ; in vertical retrace, this will
'                    ; allow several characters to be
'                    ; stuffed in during vertical
'                    ; retrace
'    jz   .6         ;loop if zero. else clear to
'                    ; access video ram
'    lodsw           ;grab char + attribute).
'    sti             ;allow interrupts
'    mov  es:[di],al ;get character
'    mov  bp,di      ;save pointer to text string
'    mov  di,bx      ;get pointer to screen attribute
'    mov  es:[di],ah ;get screen attribute
'    mov  di,bp      ;restore pointer to text string
'    inc  bx         ;increment ptr to scr attribute
'    inc  di         ;increment pointer to text string
'    loop .5         ;do cx (numbytes) times
'    cmp  ax,ax      ;MASM V4 complains if just:
'    jz  .8          ;  jmp .8
'.7: lodsw           ;grab character + attribute
'    mov  es:[di],al ;get character
'    mov  bp,di      ;save pointer to text string
'    mov  di,bx      ;get pointer to screen attribute
'    mov  es:[di],ah ;get screen attribute
'    mov  di,bp      ;restor pointer to text string
'    inc  bx         ;increment ptr to scr attribute
'    inc  di         ;increment pointer to text string
'    loop .7         ;do cx (numbytes) times
'.8: pop  es
'    pop  ds
'    pop  bp
'
'
'ReadVid endp
'
'cseg        ends
'            end

'  This version is for displacement-size order of string descriptors
'
'  $INLINE &H55, &H8B, &HEC, &H1E, &H6 , &HBA, &HDA, &H3 , &HA1, &H0
'  $INLINE &H0 , &H8E, &HC0, &HC5, &H76, &H1A, &H8B, &H4 , &HC5, &H76
'  $INLINE &H1E, &H8B, &HC , &HC5, &H76, &H12, &H8B, &H1C, &HC5, &H76
'  $INLINE &HA , &H8E, &H1C, &H6 , &H50, &HC4, &H7E, &HE , &H26, &H8B
'  $INLINE &H5 , &H3 , &HD8, &HC4, &H7E, &H6 , &H26, &H8B, &H35, &HC4
'  $INLINE &H7E, &H16, &H26, &H8B, &H3D, &H3 , &HF8, &H58, &H7 , &HD1
'  $INLINE &HE6, &HFC, &H3D, &H0 , &H0 , &H74, &H23, &HB4, &H9 , &HEC
'  $INLINE &HD0, &HD8, &H72, &HFB, &HFA, &HEC, &H22, &HC4, &H74, &HFB
'  $INLINE &HAD, &HFB, &H26, &H88, &H5 , &H8B, &HEF, &H8B, &HFB, &H26
'  $INLINE &H88, &H25, &H8B, &HFD, &H43, &H47, &HE2, &HE1, &H3B, &HC0
'  $INLINE &H74, &H11, &HAD, &H26, &H88, &H5 , &H8B, &HEF, &H8B, &HFB
'  $INLINE &H26, &H88, &H25, &H8B, &HFD, &H43, &H47, &HE2, &HEF, &H7
'  $INLINE &H1F, &H5D
'
'cseg    segment     para public 'code'
'        assume      nothing
'        assume      cs:cseg
'
'ReadVid  proc far
'    push bp
'    mov  bp,sp
'    push ds
'    push es
'    mov  dx,03dah   ;point DX to CGA status port
'    mov  ax,ds:0    ;string segment
'    mov  es,ax      ; to ES
'    lds  si,[bp+26] ;Retracemode%
'    mov  ax,[si]    ; to AX
'    lds  si,[bp+30] ;NumBytes%
'    mov  cx,[si]    ; to CX
'    lds  si,[bp+18] ;disp of attr str
'    mov  bx,[si]    ; to BX
'    lds  si,[bp+10] ;Sourceseg%
'    mov  ds,[si]    ; to DS
'    push es         ;
'    push ax
'    les  di,[bp+14]
'    mov  ax,es:[di] ;Stringdisp%
'    add  bx,ax      ;add string displacement
'    les  di,[bp+6]  ;Disp%
'    mov  si,es:[di] ; to SI
'    les  di,[bp+22] ;disp of text str
'    mov  di,es:[di] ; to DI
'    add  di,ax      ;add string displacement
'    pop  ax
'    pop  es         ;
'    shl  si,1       ;displacement * 2 for source
'    cld             ;set string direction to forward
'    cmp  ax,0
'    jz   .7         ;not retmode, use simpler routine
'.5: mov  ah,9       ;move horiz. + vertical retrace
'                    ; mask to fast storage
'.9: in   al,dx      ;get 6845 status
'    rcr  al,1       ;check horizontal retrace
'    jb   .9         ;loop if in horizontal retrace:
'                    ; this prevents starting in mid
'                    ; retrace, since there is enough
'                    ; time for 1 and only 1 STOSW
'                    ; during horizontal retrace
'    cli             ;no ints during critical section
'.6: in   al,dx      ;get 6845 status
'    and  al,ah      ;check for both kinds of retrace:
'                    ; if the video board does not
'                    ; report horizontal retrace while
'                    ; in vertical retrace, this will
'                    ; allow several characters to be
'                    ; stuffed in during vertical
'                    ; retrace
'    jz   .6         ;loop if zero. else clear to
'                    ; access video ram
'    lodsw           ;grab char + attribute).
'    sti             ;allow interrupts
'    mov  es:[di],al ;get character
'    mov  bp,di      ;save pointer to text string
'    mov  di,bx      ;get pointer to screen attribute
'    mov  es:[di],ah ;get screen attribute
'    mov  di,bp      ;restore pointer to text string
'    inc  bx         ;increment ptr to scr attribute
'    inc  di         ;increment pointer to text string
'    loop .5         ;do cx (numbytes) times
'    cmp  ax,ax      ;MASM V4 complains if just:
'    jz  .8          ;  jmp .8
'.7: lodsw           ;grab character + attribute
'    mov  es:[di],al ;get character
'    mov  bp,di      ;save pointer to text string
'    mov  di,bx      ;get pointer to screen attribute
'    mov  es:[di],ah ;get screen attribute
'    mov  di,bp      ;restor pointer to text string
'    inc  bx         ;increment ptr to scr attribute
'    inc  di         ;increment pointer to text string
'    loop .7         ;do cx (numbytes) times
'.8: pop  es
'    pop  ds
'    pop  bp
'
'
'ReadVid endp
'
'cseg        ends
'            end

END SUB 'ReadVid
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1536

     Volume in drive A has no label
     Directory of A:\

    LIST              9876   2-26-90   5:02p
    TEMP     BAS     17537   2-26-90  11:57a
    HOSTMODE ASP      1775  12-27-88   9:51a
    OPUS     ASP      2801   6-21-88   3:28p
    GO       BAT        38   8-10-89   4:13p
    PC       BAT      1905   3-11-89   2:07p
    PCAT     BAT      1944   3-11-89   3:28p
    PFON     BAT      1961   8-10-88  11:53p
    ZMOD-D   BAT      1554   5-09-89  10:38a
    ZMOD-U   BAT      2579   5-09-89  10:41a
    ZMODEM-D BAT      1407  12-27-88  10:09a
    ZMODEM-U BAT      2425  12-26-88   8:48p
    HEXAGAME EXE     21248   4-07-89  11:48p
    LINSOLVE EXE     79824   9-27-89   9:40p
    MANAGAME EXE     24880   4-07-89  11:43p
    MLTIGAME EXE     18656   4-07-89  11:47p
    PCPFON   EXE     27280   4-21-89   8:46p
    TSGAME   INF      3480   6-02-89   7:14a
    TSPFON   INF     14355   5-29-89   2:30p
    TSPROG   INF      3824  10-28-89   4:59p
    LINSOLVE LIS     22958   9-27-89  10:01p
    FILE1536 TXT      3257   3-12-90   9:55p
    GO       TXT      1002   8-10-89   4:13p
    PCPQA    TXT     35395   5-19-89   8:06a
    TRANSFER TXT     15820  12-27-88   9:31a
           25 file(s)     317781 bytes
                           32768 bytes free
