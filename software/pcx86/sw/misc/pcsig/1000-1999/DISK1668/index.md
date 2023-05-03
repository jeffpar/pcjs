---
layout: page
title: "PC-SIG Diskette Library (Disk #1668)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1668/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1668"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SPEECH"

    SPEECH is a program which generates speech and makes it possible for
    your computer to actually speak to you through its internal speaker.
    SPEECH is a "terminate and stay resident" program which becomes
    available as a background function, usable by other programs.  An
    additional program is included, SAY, which passes its command line
    arguments to the SPEECH function, thus allowing batch files to generate
    speech.
    
    SPEECH supports thirty-six phonemes, which are specified as one of two
    character codes, such as, a, ae, ah, b, ch, etc.  Phonemes may be given
    either upper or lower case.  Phonemes are separated with a dash and
    words are separated with a space.  For example, to say "this is a test",
    you would type; tz-ih-s ih-z ah t-eh-s-t-t.  This disk gives examples
    of how to say the cardinal numbers, the ordinal numbers, the
    letters of the alphabet, and over fifty different words.
    
    SPEECH is easy to use, comes fully documented, and can teach your
    computer to talk like a parrot.  AT and 386 users will need to slow
    their computers down to about 7.5 MHz in order to be able to understand
    the computer voice.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1668.TXT

{% raw %}
```
Disk No: 1668                                                           
Disk Title: Speech                                                      
PC-SIG Version: S1                                                      
                                                                        
Program Title: Speech                                                   
Author Version: 1.0                                                     
Author Registration: $19.95                                             
Special Requirements: Internal computer speaker.                        
                                                                        
SPEECH is a program which generates speech and makes it possible for you
computer to actually speak to you through its internal speaker.  SPEECH 
a "terminate and stay resident" program which becomes available as a    
background function, usable by other programs.  An additional program is
included, SAY, which passes its command line arguments to the SPEECH    
function, thus allowing batch files to generate speech.                 
                                                                        
SPEECH supports thirty six phonemes, which are specified as one of two  
character codes, such as, a, ae, ah, b, ch, etc.  Phonemes may be given 
either upper or lower case.  Phonemes are separated with a dash and word
are separated with a space.  For example, to say "this is a test", you  
would type; say tz-ih-s ih-z ah t-eh-s-t-t.  This disk gives examples of
how to say the cardinal numbers, the ordinal numbers, the letters of the
alphabet, and over fifty different words.                               
                                                                        
SPEECH is easy to use, comes fully documented, and can teach your comput
to talk like a parrot.  AT and 386 users will need to slow their compute
down to about 7.5 MHz in order to be able to understand the computer    
voice.                                                                  
                                                                        
File Descriptions:                                                      
                                                                        
SPEECH    COM Main Program.                                             
SPEECH    DOC Documentation.                                            
SAY       DOC Documentation.                                            
SAY       COM Say program.                                              
SAY       ASM Control file for say.                                     
SAYTIME   COM Program to tell time.                                     
SAYTIME   ASM Control file for saytime.                                 
SAYTIME   SAL Control file.                                             
MAXHEAD2  COM Demo program.                                             
MAXHEAD2  DAT Control file.                                             
REGIST    TXT Registration form.                                        
TALKDEMO  BAS Demo file.                                                
GO        BAT Batch start file.                                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk #1668  SPEECH  >>>>                          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start SPEECH program, type:  SPEECH (press enter)                    ║
║ To start SAY program, type:  SAY (press enter)                          ║
║ To start SAYTIME program, type:  SAYTIME (press enter)                  ║
║                                                                         ║
║ To print documentation for SPEECH, type:  COPY SPEECH.DOC PRN           ║
║ To print documentation for SAY, type:  COPY SAY.DOC PRN                 ║
║ To print documentation for SAYTIME, type:  COPY SAYTIME.DOC PRN         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## REGIST.TXT

{% raw %}
```
    -------------------------------------------------------------------



                        REGISTRATION

        SPEECH  is  NOT  a  public  domain  or  free program! It is
  being distributed  as  Shareware.    The  Association  of
  Shareware Professionals (ASP) offers the following definition of
  Shareware:

        Shareware distribution gives users a chance to try software
  before  buying  it.   If  you  try  a Shareware program and
  continue using it, you are expected to register. Individual
  programs differ on details  --  some  request  registration
  while  others  require  it,  some  specify  a maximum trial
  period.  With  registration,  you  get  anything  from  the
  simple  right  to continue using the software to an updated
  program with printed manual.

        Copyright laws  apply  to  both  Shareware  and  commercial
  software,  and  the  copyright  holder  retains all rights,
  with a few specific exceptions as stated below.   Shareware
  authors  are accomplished programmers, just like commercial
  authors, and the programs are of comparable  quality.
  (In both cases, there are good programs and bad ones!) The main
  difference  is  in  the method of distribution.  The author
  specifically grants the right to copy  and  distribute  the
  software,  either to all and sundry or to a specific group.
  For example, some authors require written permission before
  a commercial disk vendor may copy their Shareware.

        So, Shareware is a  distribution  method,  not  a  type  of
  software.  You  should  find software that suits your needs
  and pocketbook, whether it's commercial or Shareware.   The
  Shareware  system  makes fitting your needs easier, because
  you can try before you buy. And  because  the  overhead  is
  low,  prices  are  low  also.   Shareware  has the ultimate
  money-back guarantee -- if you don't use the  product,  you
  don't pay for it.

        Registration  licenses  you  to  use  SPEECH  Version 1.0,
  and all future 1.x updates.  Any unregistered use other than trial
  use to determine if SPEECH meets your needs is a violation of our
  license agreement and is forbidden.

        Single  user  registration  is  available  for  $19.95  per
  copy.  Registered users will be sent the  most  current  version
  of  the program  and a printed reference guide. Registration also
  entitles you to free telephone support and free 1.x updates.

        The SPEECH software license authorizes use of one copy  of
  SPEECH on  one machine  at  a  time.  If  you  have  multiple
  computers, either standalone, networked, or multi-user, you  need
  to  register one copy of SPEECH for each workstation on which it
  will be used.

        For  registration  and  licensing  of more than ten copies,
  please contact THE AUTHOR: VINCENT POY directly at (415) 391-0704
  for details on our quantity discounts and On-site licensing
  arrangements.  Discounts of as much as 70% are available on site
  licenses.

        ALL PRICES ARE SUBJECT TO CHANGE WITHOUT NOTICE.
 

                               INVOICE



                             Vincent Poy
                       895 Pacific Ave. Apt. #638
                      San Francisco, Ca. 94133-4340

                            (415) 391-0704


   QUANTITY             DESCRIPTION                             AMOUNT
   ----------------------------------------------------------------------

____  SPEECH Version 1.0 Registration ......... @ $ 19.95 ea $________
            (includes registration, printed manual,
            telephone support, and free 1.x updates)


         Registration is for each computer or
         workstation on which SPPECH will be used.


                                                              Subtotal
                                                              
                                                              ________

          (Orders outside U.S. and Canada, add $10.00 per copy)

                                                              ________
          (3.5 inch diskette, add $5.00 per copy)
                      
                                                              ________

          (California residents please add 6.5% sales tax)      Tax
                                                              
                                                              ________

                                                               Total $                                                                
                                                              ________

    Make All checks Payable to: Vincent Poy


Name: _______________________________________________________________


Company: ____________________________________________________________


Address: ____________________________________________________________


City, State, Zip Code: ______________________________________________


Phone Number: (  )___________________________________________________



                     THANK YOU FOR YOUR ORDER!
```
{% endraw %}

## SAY.ASM

{% raw %}
```
; -------------------------
; SAY.COM disassembly by CJD
; -------------------------

; ----- Define locations of interest in the vector table
Abs0    segment at 0

        org 0F1H*4+2                    ; Speech segment address
SpPtr   label word

        org 0F3H*4                      ; Code to call Speech (INT F2)
Speech  label far

Abs0    ends

; ----- Define a dummy Speech code segment for code verification
SpeechSeg  segment at 0                  ; Don't really know where, but...
           org 100H
SpeechCode label byte
SpeechSeg  ends


; ----- Finally our real code segment
code    segment
assume  cs:code,ds:code,es:code
        org 80H                         ; Length of input parms
ParmLen label byte
        org 81H                         ; Start of input parms
Parms   label byte

        org 100H                        ; Start of .COM code
main proc far

        push ds
        push es

        mov ax,Abs0                     ; Get Speech seg addr to DS
        mov es,ax
        assume es:Abs0
        mov ax,word ptr SpPtr
        mov ds,ax
        assume ds:SpeechSeg

        cmp SpeechCode,090H             ; Verify 1st three bytes of Speech code
        jne Dumb
        cmp SpeechCode+1,1EH
        jne Dumb
        cmp SpeechCode+2,0B8H
        jnz Dumb

        pop es
        pop ds
        assume ds:code,es:code

        mov ah,ParmLen                  ; Get length of parms
        mov PLen,ah                     ; Put where Speech can find it (?)
        mov ax,offset PLen              ; AX = ptr to parm len
        push ax                         ; Put on stack
        call Speech                     ; Call Speech program

        int 20H                         ; Back to DOS

PLen    db ?                            ; Length of parameters
        dw Parms                        ; Pointer to parameters

Dumb$   db 'SPEECH not installed',13,10,10,'$'

Dumb:
        pop es
        pop ds
        mov dx,offset Dumb$
        mov ah,9
        int 21H
        int 20H

main endp
code ends
end main
```
{% endraw %}

## SAY.DOC

{% raw %}
```
SPEECH is a program written by Vincent Poy which generates speech on
the IBM-PC/XT/AT and 100% Compatibles.  When run, it performs a
"terminate and stay resident", becoming available as a background
function, usable by other programs.


SAY is a short driver program written by Vincent Poy which passes
its command line arguments to the SPEECH function, thus allowing batch
files to generate speech.

You must install SPEECH before SAY will work.  SPEECH is installed
simply by running it.  It only needs to be run once.  SAY will
complain if SPEECH is not installed.



SPEECH supports thirty six phonemes, which are specified as one or two
character codes, as follows:

        a       f       n       tz
        ae      g       oh      u
        ah      h       oo      uh
        aw      i       p       v
        b       ih      r       w
        ch      j       s       wh
        d       k       sh      y
        ee      l       t       z
        eh      m       th      zh

Phonemes may be given in either upper case or lower case.  Phonemes are separated with a dash.  Words are separated with a space.  For
example, to say "this is a test", you would type:

    say tz-ih-s ih-z ah t-eh-s-t-t


Some common words are defined below.


Cardinal numbers:

    0                   z-ee-r-oh
    1                   w-uh-n
    2                   t-oo
    3                   th-r-ee
    4                   f-oh-r
    5                   f-i-v
    6                   s-ih-k-s
    7                   s-eh-v-eh-n
    8                   a-a-t
    9                   n-i-n
    10                  t-eh-n
    11                  eh-l-eh-v-uh-n
    12                  t-w-eh-l-v
    13                  th-ih-r-t-ee-n
    14                  f-oh-r-t-ee-n
    15                  f-ih-f-t-ee-n
    16                  s-ih-k-s-t-ee-n
    17                  s-eh-v-eh-n-t-ee-n
    18                  a-a-t-ee-n
    19                  n-i-n-t-ee-n
    20                  t-w-eh-n-t-ee
    30                  th-u-r-t-ee
    40                  f-oh-r-t-ee
    50                  f-ih-f-t-ee
    60                  s-ih-k-s-t-ee
    70                  s-eh-v-eh-n-t-ee
    80                  a-t-ee
    90                  n-ih-n-t-ee
    hundred             h-uh-n-d-r-eh-d
    thousand            th-ah-u-s-eh-n-d
    million             m-ih-l-y-uh-n


Ordinal numbers:

    first               f-u-r-s-t
    second              s-eh-k-u-n-d
    third               th-u-r-d
    fourth              f-oh-r-th
    fifth               f-ih-f-th
    sixth               s-ih-k-s-th
    seventh             s-eh-v-eh-n-th
    eighth              a-a-t-th
    ninth               n-i-n-th
    tenth               t-eh-n-th


Letters:

    A                   a-ee
    B                   b-ee
    C                   s-ee
    D                   d-ee
    E                   ee-ee
    F                   eh-f
    G                   j-ee
    H                   a-ch
    I                   i
    J                   j-a
    K                   k-a
    L                   eh-l
    M                   eh-m
    N                   eh-n
    O                   oh-w
    P                   p-ee
    Q                   k-y-oo
    R                   ah-r
    S                   eh-s
    T                   t-ee
    U                   y-oo
    V                   v-ee
    W                   d-uh-b-l-y-oo
    X                   eh-k-s
    Y                   w-i
    Z                   z-ee


Words:

    a                   uh
    ability             ae-b-ih-l-ih-t-ee
    aboard              uh-b-oh-r-d
    abort               uh-b-oh-r-t
    affirmative         ah-f-eh-r-m-ah-t-ih-v
    all                 aw-l
    alter               ah-l-t-r
    an                  ae-n
    and                 ae-n-d
    Andy                ae-n-d-ee
    any                 eh-n-ee
    anybody             ae-n-ee-b-ah-d-ee
    at                  ae-t
    attacked            uh-t-ae-k-t

    backup              b-ah-k-uh-p
    basic               b-a-s-ih-k
    baud                b-aw-d
    be                  b-ee
    begin               b-ee-g-ih-n
    boot                b-oo-t
    boss                b-oh-s
    break               b-r-a-k
    bug                 b-uh-g
    by                  b-i

    call                k-aw-l
    calling             k-aw-l-ih-n-g
    capable             k-a-p-uh-b-uh-l
    Charlie             ch-ah-r-l-ee
    city                s-ih-t-ee
    cold                k-oh-l-d
    combinations        k-ah-m-b-ih-n-a-sh-uh-n-s
    comes               k-uh-m-s
    command             k-uh-m-ah-n-d
    consider            k-uh-n-s-ih-d-r
    continue            k-uh-n-t-ih-n-y-oo
    copyright           k-ah-p-ee-r-i-t
    crash               k-r-ah-sh
    create              k-r-ee-a-t

    dancing             d-ae-n-s-ih-n-g
    December            d-ee-s-eh-m-b-uh-r
    different           d-ih-f-uh-r-eh-n-t
    disk                d-ih-s-k
    dog                 d-aw-g
    dog                 d-oh-g
    doing               d-oo-ih-n-g
    done                d-uh-n
    DOS                 d-aw-s
    down                d-ah-w-n
    drive               d-r-ae-v

    eating              ee-t-ih-n-g
    emergency           ee-m-r-j-eh-n-s-ee
    enter               eh-n-t-r
    error               eh-r-uh-r
    escape              eh-s-k-a-p
    exit                eh-k-s-ih-t

    falls               f-ah-l-l-s
    fast                f-ah-s-t
    fatal               f-a-t-l
    fault               f-aw-l-t
    fixed               f-ih-k-s-t
    floppy              f-l-oh-p-ee
    following           f-ah-l-oh-w-ih-n-g
    Foray               f-oh-r-a-ee

    gently              j-eh-n-t-l-ee
    gives               g-ih-v-s

    hard                h-aw-r-d
    has                 h-ae-s
    hello               h-eh-l-oh-w
    Henderson           h-eh-n-d-r-s-uh-n
    here                h-ee-r
    him                 h-ih-m
    his                 h-ih-s
    hit                 h-ih-t
    hot                 h-ah-t
    how                 h-aw-w
    hundred             h-uh-n-d-r-eh-d

    ignore              ih-g-n-oh-r
    in                  ih-n
    insert              ih-n-s-uh-r-t
    interface           ih-n-t-r-f-ah-y-s
    is                  ih-z
    it                  ih-t

    just                j-uh-s-t

    key                 k-ee
    killer              k-ih-l-r
    kludge              k-l-oo-d-zh

    like                l-i-k
    limitless           l-ih-m-ih-t-l-eh-s-s
    look                l-u-k

    mail                m-a-uh-l
    man                 m-ae-n
    McGuire             m-ih-k g-w-i-r
    memory              m-eh-m-oh-r-ee
    miss                m-ih-s
    modem               m-oh-d-ih-m
    moon                m-oo-n
    much                m-uh-ch
    my                  m-i

    name                n-a-m
    no                  n-oh

    of                  uh-f
    on                  ah-n
    or                  aw-r
    out                 ah-w-t
    out                 aw-t
    outside             aw-t-s-ah-y-d

    parallel            p-ah-r-uh-l-eh-l
    phone               f-oh-n
    phoneme             f-oh-n-eh-m
    phonemes            f-oh-n-eh-m-s
    plain               p-l-a-ih-n
    port                p-oh-r-t
    press               p-r-eh-s
    printer             p-r-ih-n-t-r
    program             p-r-oh-g-r-ae-m

    rain                r-a-ih-n
    RAM                 r-ah-m
    ready               r-eh-d-ee
    recover             r-ee-k-uh-v-r
    remote              r-eh-m-oh-t
    remove              r-ee-m-u-v
    replace             r-ee-p-l-a-s
    reproducing         r-ee-p-r-oh-d-oo-s-ih-n-g
    reserved            r-ee-s-u-r-v-d
    restore             r-ee-s-t-oh-r
    retry               r-ee-t-r-i
    rights              r-i-t-s

    seadog              s-ee-d-oh-g
    second              s-eh-k-uh-n-d
    see                 s-ee
    seen                s-ee-n
    sentence            s-eh-n-t-eh-n-s
    serial              s-ih-r-ee-ah-l
    service             s-uh-r-v-eh-s
    shall               sh-ah-l
    side                s-ah-y-d
    slow                s-l-oh-w
    something           s-uh-m-th-ih-n-g
    sound               s-ah-w-n-d
    Spain               s-p-a-ih-n
    speech              s-p-ee-ch
    start               s-t-ah-r-t
    starting            s-t-ah-r-t-ih-n-g
    sysop               s-ih-s-ah-p

    talk                t-aw-k
    tape                t-a-p
    telephone           t-eh-l-uh-f-oh-n
    test                t-eh-s-t-t
    the                 tz-uh
    these               tz-ee-s
    this                tz-ih-s
    Thom                t-ah-m
    to                  t-oo
    tomato              t-uh-m-a-t-oh
    too                 t-oo
    try                 t-r-i

    unit                y-oo-n-ih-t
    us                  uh-s
    user                y-oo-s-r
    using               y-oo-s-ih-n-g
    using               y-oo-z-ih-n-g

    very                v-ae-r-ee
    vocabulary          v-oh-k-ae-b-y-oo-l-ae-r-ee

    warm                w-ah-r-m
    we                  w-ee
    welcome             w-eh-l-k-uh-m
    working             w-uh-r-k-ih-n-g
    would               w-u-d

    yes                 y-eh-s
    your                y-oh-r

```
{% endraw %}

## SAYTIME.ASM

{% raw %}
```
; --------------------
; Speak de time by CJD
; --------------------

;	imbed c:\masm\saldef.sal
; ----- SAT definitions

;        saljmp short
;        salcmp unsigned

;        salmac := mov &-,&+
;        salmac ==> lea &-,&+
;        salmac =& mov &-,offset &+
;        salmac -> mov &-,offset &+

;        salmac -- dec &+
;        salmac ++ inc &+

;        salmac += add &-,&+
;        salmac -= sub &-,&+
;        salmac /= div &+
;        salmac *= mul &+

;        salmac |= or &-,&+
;        salmac &= and &-,&+
;        salmac ^= xor &-,&+

;        salmac >= shr &-,&+
;        salmac >> shr &-,&+
;        salmac <= shl &-,&+
;        salmac << shl &-,&+

;        salmac clear xor &+,&+

;        salmac <- push &+ ^ pop &-
;        saldef jmps jmp short
;        saldef (b) byte ptr
;        saldef (w) word ptr
;        saldef (si) byte ptr [si]
;        saldef (di) byte ptr [di]
;        saldef {si} word ptr [si]
;        saldef {di} word ptr [di]

	include c:\masm\stdlib.mac

; ----- Define locations of interest in the vector table
Abs0	segment at 0

	org 0F1H*4+2			; Speech segment address
SpPtr	label word

	org 0F3H*4			; Code to call Speech (INT F2)
Speech	label far

Abs0	ends

; ----- Define a dummy Speech code segment for code verification
SpeechSeg  segment at 0 		 ; Don't really know where, but...
	org 100H
SpeechCode label byte
SpeechSeg  ends


; ----- Finally our real code segment
code	segment
assume	cs:code,ds:code,es:code

	org 100H			; Start of .COM code
main proc far
	jmp start

; Table of number words.  Entries are number, word length, word.
NumTab	label byte
N0	db 0,  N1-N0-2,     'oh-oh'
N1	db 1,  N2-N1-2,     'w-uh-n'
N2	db 2,  N3-N2-2,     't-oo-oo'
N3	db 3,  N4-N3-2,     'th-r-ee'
N4	db 4,  N5-N4-2,     'f-oh-r'
N5	db 5,  N6-N5-2,     'f-i-v'
N6	db 6,  N7-N6-2,     's-ih-k-s'
N7	db 7,  N8-N7-2,     's-eh-v-eh-n'
N8	db 8,  N9-N8-2,     'a-a-t'
N9	db 9,  N10-N9-2,    'n-i-n'
N10	db 10, N11-N10-2,   't-eh-n'
N11	db 11, N12-N11-2,   'eh-l-eh-v-uh-n'
N12	db 12, N13-N12-2,   't-w-eh-l-v'
N13	db 13, N14-N13-2,   'th-ih-r-t-ee-n'
N14	db 14, N15-N14-2,   'f-oh-r-t-ee-n'
N15	db 15, N16-N15-2,   'f-ih-f-t-ee-n'
N16	db 16, N17-N16-2,   's-ih-k-s-t-ee-n'
N17	db 17, N18-N17-2,   's-eh-v-eh-n-t-ee-n'
N18	db 18, N19-N18-2,   'a-a-t-ee-n'
N19	db 19, N20-N19-2,   'n-i-n-t-ee-n'
N20	db 20, N30-N20-2,   't-w-eh-n-t-ee'
N30	db 30, N40-N30-2,   'th-ih-r-t-ee'
N40	db 40, N50-N40-2,   'f-oh-r-t-ee'
N50	db 50, N99-N50-2,   'f-ih-f-t-ee'
N99	db 99				; EOT mark

SpeechParms	db 'th-uh t-i-m ih-z'
SP2		db 255 dup (?)

StringLen	db SP2-SpeechParms
	dw SpeechParms

ErrMsg$ 	db 'saytime internal error',13,10,10,'$'


Start:
	call Init			; Find SPEECH
;	If carry Then			; SPEECH not installed
	JNC	SAAA_AA
	mov	al,1			; Return errorlevel 1
;	Else				; SPEECH installed
	JMP	SHORT	SAAA_AB
SAAA_AA:
	call Build			; Build the time string
	call Speak			; Say the time
	mov	al,0			; Return errorlevel 0
;	Endif
SAAA_AB:
	@doscall 4CH			; Back to DOS, AL=errorlevel
main endp

; -----------------------------------------------
; Build the time string and set length for SPEECH
; -----------------------------------------------
Build proc near
	@doscall 2CH			; Get time (CH=hr, CL=min, DH=sec)
	mov	di,offset	SP2

	mov	ah,ch			; Add hour
	call AddTime
	mov	al,' '			; Add extra pause between
	stosb
	inc	StringLen

	mov	ah,cl			; Add minute
	call AddTime
	mov	al,' '			; Add extra pause between
	stosb
	inc	StringLen

	mov	ah,dh			; Add second
	call AddTime
	ret

; ----- Add time component in AH to string
AddTime:
	push ax
	push bx

;	If ah < 10 Then 		; Prefix with "oh"
	CMP	ah,10
	JAE	SAAB_AA
	mov	al,0
	call AddWord
;	Endif
SAAB_AA:

;	If ah <= 20 Then
	CMP	ah,20
	JA	SAAC_AA
	mov	al,ah
	call AddWord
;	Else
	JMP	SHORT	SAAC_AB
SAAC_AA:
	mov	bl,10
	mov	al,ah
	cbw
	div bl			; AH = low digit; AL = high digit
	mov	bh,ah			; BH = low digit
	mul bl			; AL = 10*high digit = tens word
	call AddWord		; Add tens
;	    If bh <> 0 Then
	OR	bh,bh
	JE	SAAD_AA
	mov	al,bh			; Add ones
	call AddWord
;	    Endif
SAAD_AA:
;	Endif
SAAC_AB:

	pop bx
	pop ax
	ret

; ----- Add word for number in AL to string
AddWord:
	push ax
	push cx
	push dx

	mov	ah,al			; Move number to AH
	mov	ch,0
	mov	si,offset	NumTab

;	Repeat
SAAE_@R:
	lodsb			; Get the number from the table
	mov	cl,[si]			; CX = length
	inc	si			; SI => word for this number

;	    If ah = al Then		; Found the right entry
	CMP	ah,al
	JNE	SAAF_AA
	add	StringLen,cl		; Add length of word to total
	inc	StringLen		; + 1 for space
	mov	al,' '			; Insert a space
	stosb
	rep movsb		; Add word to string
;		Leave			; Exit loop
	JMP	SHORT	SAAE_@L
;	    ElseIf al <> 99 Then	; Not right entry, but not end of table
	JMP	SHORT	SAAF_@Z
SAAF_AA:
	CMP	al,99
	JE	SAAG_AA
	add si,cx		; Skip number word
;	    Else			; End of table--internal error
	JMP	SHORT	SAAF_@Z
SAAG_AA:
	mov	dx,offset	ErrMsg$
	@doscall 9
;	    Endif
SAAF_@Z:
;	Until Leave
	JMP	SHORT	SAAE_@R
SAAE_@L:
	pop dx
	pop cx
	pop ax
	ret
Build endp


; ---------------------------------
; Call SPEECH to say the time string
; ---------------------------------
Speak proc near
	mov ax,offset StringLen 	; AX = ptr to parm len
	push ax 			; Put on stack
	call Speech			; Call Speech program
	ret
Speak endp


; -----------------------------------------
; Make sure SPEECH is installed.  If not,
; return CF=1 and message displayed.
; -----------------------------------------
Dumb$	db 'SPEECH not installed',13,10,10,'$'
Init proc near
	push ds
	push es

	mov ax,Abs0			; Get Speech seg addr to DS
	mov es,ax
	assume es:Abs0
	mov ax,word ptr SpPtr
	mov ds,ax
	assume ds:SpeechSeg

	cmp SpeechCode,090H		; Verify 1st three bytes of Speech code
	jne Dumb
	cmp SpeechCode+1,1EH
	jne Dumb
	cmp SpeechCode+2,0B8H
	jnz Dumb

	pop es
	pop ds
	clc
Init9:
	ret


Dumb:
	pop es
	pop ds
	mov	dx,offset	Dumb$
	@doscall 9
	stc
	jmp Init9
Init endp
code ends
end main
```
{% endraw %}

## SPEECH.DOC

{% raw %}
```


















                                    SPEECH




                              
                       Copyright (C) 1988 Vincent Poy
                            All Rights Reserved



                               Vincent Poy
                        895 Pacific Ave. Apt. #638
                       San Francisco, Ca. 94133-4340

                             (415) 391-0704

                    24 Hour BBS will be available soon!

 






  LICENSE AGREEMENT






        This SPEECH software is protected by United  States
  Copyright  Law  and  International Treaty provisions.  All rights
  are reserved. Non-registered users of SPEECH are licensed only to
  use the program  on  a  trial  basis  for  the  sole  purpose  of
  determining  whether  or  not  it  meets their requirements.  All
  other use requires registration.

        Any other use of non-registered copies of SPEECH by  any
  person,  business,  corporation,  government  organization, or
  any other entity is strictly forbidden and is a violation of this
  license agreement.

        Registration  permits  a user a license to use SPEECH on a
  single computer.

        All users are granted a limited license to  copy  SPEECH
  Version 1.0  for  the  trial use of others, with the following
  additional conditions:

        SPEECH must  be  distributed  in  unmodified,  complete
  form,   including  this  Documentation  and  License
  Agreement.

        SPEECH may not be distributed in conjunction  with  any
  other   product,   without   written   permission  from  the
  AUTHOR.

        No fee, other than a bonafide disk duplicating fee Not 
  to Exceed $6.00, may be charged for SAY.
 





 WARRANTY






        AUTHOR  makes no warranty of  any  kind,  express  or
  implied, including  without  limitation, any warranties of
  merchantability and/or fitness for a particular purpose.
  The  AUTHOR  shall  not  be liable  for  any  damages, whether
  direct, indirect, special of consequential arising from a failure
  of this program  to  operate in  the manner desired by the user.             
        AUTHOR shall not be liable for any damage to data or property
  which may be caused  directly or indirectly by use of the program.

        IN  NO  EVENT WILL AUTHOR BE LIABLE FOR ANY DAMAGES,
  INCLUDING  ANY  LOST  PROFITS,  LOST  SAVINGS   OR   OTHER
  INCIDENTAL   OR   CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OR
  INABILITY TO USE THE PROGRAM, OR FOR ANY CLAIM BY ANY OTHER PARTY.

        The   License   Agreement   and   Warranty  shall  be
  construed, interpreted and governed by the laws of the state of
  California.
 





 ---------------------------------------------------------------------



 The SPEECH Program Disk



       Your SPEECH program disk includes the following files:

          SPEECH.COM        The main program file.

          SAY.DOC           The Documentation for this program.

          SPEECH.DOC        This File.

          SAY.ASM           The Control file for Say.Com.
      
          SAY.COM           The main program file for Say.

          SAYTIME.COM       The main program to tell time.
 
          SAYTIME.ASM       The Control file for Saytime.

          SAYTIME.SAL                   /           \
          
          MAXHEAD2.COM      See a presentation by Max Headroom
          
          MAXHEAD2.DAT      Control File

          REGIST.TXT        The Registration Form.
 
 For a on screen Demostration type "MAXHEAD2" after you install 
 SPEECH.  Read Say.Doc for more infomation.




    -------------------------------------------------------------------



                        REGISTRATION

        SPEECH  is  NOT  a  public  domain  or  free program! It is
  being distributed  as  Shareware.    The  Association  of
  Shareware Professionals (ASP) offers the following definition of
  Shareware:

        Shareware distribution gives users a chance to try software
  before  buying  it.   If  you  try  a Shareware program and
  continue using it, you are expected to register. Individual
  programs differ on details  --  some  request  registration
  while  others  require  it,  some  specify  a maximum trial
  period.  With  registration,  you  get  anything  from  the
  simple  right  to continue using the software to an updated
  program with printed manual.

        Copyright laws  apply  to  both  Shareware  and  commercial
  software,  and  the  copyright  holder  retains all rights,
  with a few specific exceptions as stated below.   Shareware
  authors  are accomplished programmers, just like commercial
  authors, and the programs are of comparable  quality.
  (In both cases, there are good programs and bad ones!) The main
  difference  is  in  the method of distribution.  The author
  specifically grants the right to copy  and  distribute  the
  software,  either to all and sundry or to a specific group.
  For example, some authors require written permission before
  a commercial disk vendor may copy their Shareware.

        So, Shareware is a  distribution  method,  not  a  type  of
  software.  You  should  find software that suits your needs
  and pocketbook, whether it's commercial or Shareware.   The
  Shareware  system  makes fitting your needs easier, because
  you can try before you buy. And  because  the  overhead  is
  low,  prices  are  low  also.   Shareware  has the ultimate
  money-back guarantee -- if you don't use the  product,  you
  don't pay for it.

        Registration  licenses  you  to  use  SPEECH  Version 1.0,
  and all future 1.x updates.  Any unregistered use other than trial
  use to determine if SPEECH meets your needs is a violation of our
  license agreement and is forbidden.

        Single  user  registration  is  available  for  $19.95  per
  copy.  Registered users will be sent the  most  current  version
  of  the program  and a printed reference guide. Registration also
  entitles you to free telephone support and free 1.x updates.

        The SPEECH software license authorizes use of one copy  of
  SPEECH on  one machine  at  a  time.  If  you  have  multiple
  computers, either standalone, networked, or multi-user, you  need
  to  register one copy of SPEECH for each workstation on which it
  will be used.

        For  registration  and  licensing  of more than ten copies,
  please contact THE AUTHOR: VINCENT POY directly at (415) 391-0704
  for details on our quantity discounts and On-site licensing
  arrangements.  Discounts of as much as 70% are available on site
  licenses.

        ALL PRICES ARE SUBJECT TO CHANGE WITHOUT NOTICE.
 

                               INVOICE



                             Vincent Poy
                       895 Pacific Ave. Apt. #638
                      San Francisco, Ca. 94133-4340

                            (415) 391-0704


   QUANTITY             DESCRIPTION                             AMOUNT
   ----------------------------------------------------------------------

____  SPEECH Version 1.0 Registration ......... @ $ 19.95 ea $________
            (includes registration, printed manual,
            telephone support, and free 1.x updates)


         Registration is for each computer or
         workstation on which SPPECH will be used.


                                                              Subtotal
                                                              
                                                              ________

          (Orders outside U.S. and Canada, add $10.00 per copy)

                                                              ________
          (3.5 inch diskette, add $5.00 per copy)
                      
                                                              ________

          (California residents please add 6.5% sales tax)      Tax
                                                              
                                                              ________

                                                               Total $                                                                
                                                              ________

    Make All checks Payable to: Vincent Poy


Name: _______________________________________________________________


Company: ____________________________________________________________


Address: ____________________________________________________________


City, State, Zip Code: ______________________________________________


Phone Number: (  )___________________________________________________



                     THANK YOU FOR YOUR ORDER!

```
{% endraw %}

## TALKDEMO.BAS

{% raw %}
```bas
10 'Sample program demonstrating the SPEECH program
20 'by Vincent Poy
30 'Copyright 1984,
40 'All Rights Reserved.
50 '
60 SCREEN 0,1,0:WIDTH 40:LOCATE ,,0:COLOR 7,0,0:CLS:KEY OFF
70 NUMBER = 15
80 DIM TALK$(NUMBER)
90 DIM DISPLAY$(NUMBER)
100 FOR I=1 TO NUMBER:READ TALK$(I):NEXT I
110 FOR I=1 TO NUMBER:READ DISPLAY$(I):NEXT I
120 'Each TALK$ in array represents sentences to be passed to SPEECH.
130 'Each DISPLAY$ in array is an English sentence representing each TALK$.
140 FOR I=1 TO NUMBER
150 GOSUB 1010   'Print sentence.
160 GOSUB 1030   'Pass string to SPEECH.
170 GOSUB 1050   'Delay
180 NEXT I
190 RESTORE 1370:FOR I=1 TO 8:FOR J=1 TO 11:READ X:READ C:COLOR C:PRINT CHR$(X);:NEXT J:PRINT:NEXT I:FOR I=1 TO 2000:NEXT I
200 CLS:RESTORE 2000:I=0
210 NUMBER = 15        'redefine (read second set of strings)
220 ERASE TALK$:ERASE DISPLAY$          'clear old arrays
230 DIM TALK$(NUMBER)   'redimension array
240 DIM DISPLAY$(NUMBER)        'same thing
250 FOR I=1 TO NUMBER:READ TALK$(I):NEXT I
260 FOR I=1 TO NUMBER:READ DISPLAY$(I):NEXT I
270 FOR I=1 TO NUMBER
280 GOSUB 1010          'Print sentence.
290 GOSUB 1030          'Pass string to SPEECH.
300 GOSUB 1050          'Delay
310 NEXT I
900 END
1000 'Subroutines follow.
1010 PRINT DISPLAY$(I):PRINT     'Print it on screen.
1020 RETURN
1030 DEF SEG=0:SPEECH=972:CALL SPEECH (TALK$(I))         'pass string to SPEECH.
1040 RETURN
1050 FOR J=1 TO 300:NEXT         'Delay loop
1060 RETURN
1070 DATA"S-P-EE-CH B-I V-I-N-C-ENT P-OY
1080 DATA "k-ah-p-ee-r-i-t d-ee-s-eh-m-b-uh-r s-eh-k-uh-n-d n-i-n-t-ee-n h-uh-n-d-r-eh-d a-t-ee th-r-ee"
1090 DATA "aw-l r-i-t-s r-ee-s-u-r-v-d"
1100 DATA "a-ee b-ee s-ee d-ee ee-ee eh-f j-ee a-ch i j-a k-a eh-l eh-m eh-n oh-w p-ee k-y-oo ah-r eh-s t-ee y-oo v-ee d-uh-b-l-y-oo eh-k-s w-i z-ee"
1110 DATA "z-ee-r-oh w-uh-n t-oo th-r-ee f-oh-r f-i-v s-ih-k-s s-eh-v-eh-n a-a-t n-i-n t-eh-n"
1120 DATA "tz-uh r-a-ih-n ih-n s-p-a-ih-n"
1130 DATA "f-ah-l-l-s j-eh-n-t-l-ee ah-n tz-uh p-l-a-ih-n"
1140 DATA "h-ae-s ae-n-ee-b-ah-d-ee s-ee-n m-i d-aw-g"
1150 DATA "h-ih-s n-a-m ih-s ch-ah-r-l-ee"
1160 DATA "ae-n-d i m-ih-s h-ih-m v-ae-r-ee v-ae-r-ee m-uh-ch"
1170 DATA "tz-ih-s ih-s ae-n ee-m-r-j-eh-n-s-ee"
1180 DATA "uh k-ih-l-r t-uh-m-a-t-oh h-ae-s j-uh-s-t uh-t-ae-k-t"
1190 DATA "ae-n-d ih-s ee-t-ih-n-g tz-uh s-ih-t-ee"
1200 DATA "l-u-k ah-w-t"
1210 DATA "h-ee-r ih-t k-uh-m-s"
1220 DATA "SPEECH by Vincent Poy"
1230 DATA "Copyright 1988,"
1240 DATA "All Rights Reserved."
1250 DATA "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
1260 DATA "0,1,2,3,4,5,6,7,8,9,10"
1270 DATA "The rain in Spain..."
1280 DATA "falls gently on the plain."
1290 DATA "Has anybody seen my dog?"
1300 DATA "His name is Charlie..."
1310 DATA "and I miss him very very much."
1320 DATA "This is an emergency..."
1330 DATA "A killer tomato has just attacked..."
1340 DATA "and is eating the city!"
1350 DATA "Look out!"
1360 DATA "Here it comes!!!"
1370 DATA 32,7,32,7,32,7,219,2,32,7,219,2,32,7,219,2,32,7,32,7,32,7
1380 DATA 32,7,32,7,219,2,219,4,219,4,219,4,219,4,219,4,219,2,32,7,32,7
1390 DATA 32,7,32,7,219,4,219,4,219,4,219,4,219,4,219,4,219,4,32,7,32,7
1400 DATA 32,7,219,4,219,4,32,7,219,15,219,4,32,7,219,15,219,4,219,4,32,7
1410 DATA 32,7,219,4,219,4,219,4,219,4,219,4,219,4,219,4,219,4,219,4,32,7
1420 DATA 32,7,219,4,219,4,219,4,219,12,32,7,32,7,219,4,219,4,219,4,32,7
1430 DATA 32,7,32,7,219,4,219,4,219,4,219,4,219,4,219,4,219,4,32,7,32,7
1440 DATA 32,7,32,7,32,7,219,4,219,4,219,4,219,4,219,4,32,7,32,7,32,7
2000 DATA "tz-ih-s ih-s tz-uh w-a-ee w-ee t-eh-l s-p-ee-ch"
2010 DATA "h-aw-w t-oo t-aw-k"
2020 DATA "k-uh-n-s-ih-d-r tz-uh f-ah-l-oh-w-ih-n-g s-eh-n-t-eh-n-s"
2030 DATA "        "
2040 DATA "w-ee w-u-d b-r-a-k tz-ih-s s-eh-n-t-eh-n-s"
2050 DATA "d-ah-w-n l-i-k tz-ih-s"
2060 DATA "tz-uh m-ae-n ih-n tz-uh m-oo-n"
2070 DATA "ih-s d-ae-n-s-ih-n-g        "
2080 DATA "uh f-oh-n-eh-m ih-s uh b-a-s-ih-k s-ah-w-n-d y-oo-n-ih-t"
2090 DATA "tz-uh s-p-ee-ch p-r-oh-g-r-ae-m ih-s k-a-p-uh-b-uh-l"
2100 DATA "uh-f r-ee-p-r-oh-d-oo-s-ih-n-g th-u-r-t-ee s-ih-k-s f-oh-n-eh-m-s"
2110 DATA "y-oo-s-ih-n-g tz-ee-s f-oh-n-eh-m-s"
2120 DATA "ih-n d-ih-f-uh-r-eh-n-t k-ah-m-b-ih-n-a-sh-uh-n-s"
2130 DATA "g-ih-v-s uh-s tz-uh ae-b-ih-l-ih-t-ee t-oo k-r-ee-a-t"
2140 DATA "l-ih-m-ih-t-l-eh-s-s v-oh-k-ae-b-y-oo-l-ae-r-ee s-p-ee-ch"
3000 DATA "This is the way we tell SPEECH..."
3010 DATA "how to talk."
3020 DATA "Consider the following sentence..."
3030 DATA "The man in the moon is dancing."
3040 DATA "We would break this sentence..."
3050 DATA "down like this..."
3060 DATA "tz-uh m-ae-n ih-n tz-uh m-oo-n"
3070 DATA "ih-s d-ae-n-s-ih-n-g"
3080 DATA "A phoneme is a basic sound unit."
3090 DATA "The SPEECH program is capable..."
3100 DATA "of reproducing 36 phonemes."
3110 DATA "Using these phonemes..."
3120 DATA "in different combinations..."
3130 DATA "gives us the ability to create..."
3140 DATA "limitless vocabulary speech."
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1668

     Volume in drive A has no label
     Directory of A:\

    FILE1668 TXT      3701  11-22-89  10:16a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       848  11-22-89  12:31p
    MAXHEAD2 COM     35984   1-10-87   8:31p
    MAXHEAD2 DAT      7680   1-10-87   8:31p
    REGIST   TXT      5197  10-02-88   8:31p
    SAY      ASM      2124   3-21-86   3:47p
    SAY      COM        97   3-12-86  11:24p
    SAY      DOC      9734  10-02-88   8:21p
    SAYTIME  ASM      6184   3-22-86  12:41p
    SAYTIME  COM       837   3-21-86   3:44p
    SAYTIME  SAL      4919   3-21-86   3:43p
    SPEECH   COM     21376   8-19-85   8:16p
    SPEECH   DOC      8927  10-02-88   8:32p
    TALKDEMO BAS      4465   9-21-88  10:02p
           15 file(s)     112111 bytes
                           43520 bytes free
