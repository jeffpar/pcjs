---
layout: page
title: "PC-SIG Diskette Library (Disk #3672)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3672/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3672"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library.  Every shareware program we have is on one disc; over
900 megabytes of software you can have immediate access to.

Easy to use, all you have to do is insert the disc and type 'INSTALL' at
the DOS prompt.  We've included all the tools you need for fast easy
access to the programs and their descriptions.

The WordCruncher text retrieval software allows you to quickly access
the description for any program you want.  All the programs are indexed
by title, filename, PC-SIG disk number, and every word within the
program description.  There couldn't be an easier way to find just the
right program.  All the programs are logically divided into thirteen
major categories with subcategories, making it easier to find just the
right software.

All of the programs have been scanned for viruses.  There are also three
online virus utilities that can be run from the CD-ROM which will scan,
screen and clean viruses.  Not only does this save hard disk space, but
also gives every user added security from viruses.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

Additional BBS file descriptions are available from PC-SIG so that the
CD-ROM can be set up quickly on a bulletin board.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 530K memory DOS 3.1 or higher and
a graphics monitor (Hercules/EGA/VGA/SVGA).  A mouse is optional.





T h e E s s e n t i a l H o m e & B u s i n e s s C o l l e c t i o n
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

"Never before has such a valuable collection of popular shareware been
compiled on one CD-ROM that everyone can afford." Dr. File Finder a.k.a.
Michael Callahan

Finally, 368 of the most useful, popular, important shareware programs
have been put together on one CD. No matter what your need, it's on The
Essential Home & Business Collection.  Everything from Administration to
Windows software is here.

The Essential CD incorporates the WordCruncher text retrieval system.
Every program on the disc is indexed by title, filename, PC-SIG disk
number, and every word in the program description.  A new utility, Narc,
is implemented so you can look at the program files and the author's
on-line documentation without having to first copy the program to your
hard disk.  By using WordCruncher and Narc, you can quickly find the
program you want and review it to be sure, without ever having to run it
from your hard disk.

If you've got a CD-ROM player at home and want to get more use of it and
your computer, or if you're trying to avoid purchasing another Nintendo
cartridge, or if you just enjoy looking at new software, you need The
Essential Home & Business Collection.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 384K memory DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions.


                      The PC-SIG Games CD-ROM
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Now you can play a game a day fo over a year.  This CD-ROM is jammed
with over 380 shareware games of all types, designed to appeal to the
new generation of CD-ROM users out for fun.  The CD incorporates a
hypermedia interface and allows 250 of the games to be played directly
from the CD-ROM.

The hottest games in shareware are on this disk, including the
action/arcade games "Jill of the Jungle" and "Wolfenstein 3D," which
rival or surpass commercial PC and Nintendo for use of animation,
SoundBlaster audio, and VGA graphics.  There are also games designed to
teach children mathematics, spelling and even ecology.  All these games
for less than a dime each!

Over 250 of the games can be played directly from the CD without copying
them to a floppy or a hard drive.  Being able to run from the CD means
that users can explore games without using up valuable hard disk space
or spending time downloading and deleting files.  The hypermedia
interface makes it easy to browse the titles, read a one line
description or full review, and copy or start a game by clicking the
mouse or using the keyboard.


To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## FILES.TXT

{% raw %}
```
FILES  list for Post's Conservative Pascal-C Converter (PCPC):

1   grammar5.txt     Pascal syntax definition file (production rules)
2   gramtool.pas     Tools for grammar check. Generate 3 kinds of parsers
3   chekgram.pas     Consistency check utility for file 1. Needs 2,4-6
4   pcpcdata.pas     Global data structures for all of the following
5   pascannr.pas     Scanner of Pascal code, symbol table handler. Needs 1,4
6   semanti6.pas     Semantic actions, data from declarations. Needs 4,5
7   cdeclara.pas     C code generator: declaration parts.  Needs 4-6
8   cnesting.pas     Unpack nested procedures/functions.  Needs 4-7
9   cbulk.pas        C code generator: statement parts.    Needs 4-8
10  getunits.pas     Get the used units (direct,indirect)
11  pcpcpars.pas     Main loop of LL(1) parser. Needs 4-10
12  pcpc.pas         User interface of PCPC. Needs 4-11.
13  killansi.pas     Back transformation engine:  ANSI C --> K&R C.
14  reord2.pas       Postprocessor for output from 7-9.   Needs 10,13
15  convpac.h        Macros, typedefs, glob.data, funct.protos, to #include.
16  convpac.c        C function source for the prototypes defined in 15.
17  files.txt        This file
18  doc\pcpcinfo.txt Product and Licence information
19  doc\pcpcdoc.txt  User's Guide and documentation of PCPC.
20  doc\pcpcmess.txt PCPC's Error and warning messages explained.
21  doc\pcpccode.txt Inside PCPC: description of the source code.
22  doc\pcpclog.txt  Evolutionary path of this software
23  dos.pas          Sloppy Pascal declarations for "Uses Dos"
24  crt.pas          Sloppy Pascal for "Uses Crt"
25  graph.pas        Sloppy Pascal for "Uses Graph"
26  ex\crtdos.pas    Partial, C-convertible implementation of Crt & Dos
27  ex\crtdos.c      Translate of 26, with patches for Turbo C !
28  ex\toytest.pas   Two-window editor: demo for PCPC with Crt/Dos use
29  ex\toyedit.pas   editor hard core, used by 28
30  ex\toymenu.pas   menu box generator, used by 28
31  ansikill.pas     Stand-alone ANSI killer for PCPC & REORD2 output.
32  ex\nested.pas    Example program with highly nested Pascal code.
```
{% endraw %}

## GRAMMAR5.TXT

{% raw %}
```
! Grammar5.txt :  Turbo Pascal  rules
! list of semantic actions, "forbidden" MUST be the last one:

(ifThen,     elseDo,     endIf,      doLoop,     doWhile,    endWhile,
 endRep,     caseSel,    blockEntry, blockBegin, blockEnd,   pointTo,
 subField,   arrayAddr,  getAddr,    pushVar,    pushConst,  assignmt,
 addit,      subtr,      multi,      divis,      modulo,     negate,
 andLog,     orLog,      notLog,     equal,      unEqual,    greater,
 less,       greaterEqu, lessEqu,    arrayDef,   midIndex,   lastIndex,
 arrayEnd,   recordDef,  newField,   fieldType,  recordEnd,  ptrDef,
 linkToPtr,  typeDef,    enumDef,    newConst,   enumEnd,    subranDef,
 subranEnd,  typeName,   typeEnd,    firstVar,   nextVar,    tpVarList,
 constIde,   assignCon,  stringCon,  plus,       minus,      constRef,
 intConst,   endConst,   nilSymbol,  paramDef,   paramTp,    paramEnd,
 procEnd,    functEnd,   functName,  functCall,  procCall,   pushParam,
 doCall,     forInit,    comparTo,   increment,  comparDown, decrement,
 caseFirst,  caseNext,   caseLast,   caseEnd,    caseOther,  caseTerm,
 withFirst,  withNext,   withReleas, withAddr,   assignDef,  parAddr,
 valpAddr,   typeBool,   typeByte,   typeChar,   typeInt,    typeWord,
 typeLong,   typeReal,   typeDoub,   typeText,   typePoin,   typeStr,
 maxiStr,    trueSymb,   falsSymb,   forwDecl,   terminator, repLoop,
 beginSymb,  endSymb,    parenthes,  shfLeft,    shfRight,   xorLog,
 setDef,     interval,   setList,    setMake,    inOper,     formData,
 fmtOne,     fmtTwo,     fileRef,    doRead,     doRdLn,     doWrite,
 doWriLn,    rdVar,      wrFmt,      numToStr,   fileAddr,   memAlloc,
 typeShort,  dotSymb,    typeNull,   typeSet,    tpSetEnd,   mainFile,
 unitFile,   implPart,   useUnit,    mainPrgr,   linkTname,  intLabel,
 intJump,    intLbDef,   symbLabel,  symbJump,   symbLbDef,  normUnit,
 optional,   typeFile,   tpFlEnd,    forDef,     typeCast,   valCast,
 relaxTp,    dummyTp,    isMissing,  doProg,     doUnit,     doIntf,
 typConst,   initUnit,   getPtr,     getSize,    gotoExit,   setcoInit,
 setcoOne,   setcoTwo,   setcoTerm,  tradCons,   tradOpen,   tradSepa,
 tradClos,   assignTC,   typeSize,   typeComp,   typeExte,   mkVariant,
 extDecla,   intfDecl,   kwMem,      kwMemw,     kwMeml,     memArray,
 kwPort,     kwPortw,    ioPort,     caseIntv,   ignore,     forbidden
)

!  grammar non-terminal symbols in the exact order of declaration :
(constant,   posiConst,  paramType,  simpType,   strucType,  genType,
 fieldList,  field,      variant,    sintrval,
 tpdConst,   address,    variable,   memport,
 varRefer,   assiLeft,   modifier,   unsigned,   factor,     term,
 simpExpr,   expression, format,     binary,     sizeCode,   inlCode,
 inOut,      interval,   oneCase,    statement,  statemt,    paramLis,
 subList,    varList,    constDef,   typeDef,    lablDef,    declPart,
 block,      useList,    externals,  mainProg,   goodFile,   intrFace
)

!  identifier classes:
(constId,    typeId,     fieldId,    varId,      functId,    procId,
 varParId,   valParId,   fileId,     forwId,     unitId,     otherId,
 labelId
)

! standard symbols:
! double-strokes, keywords, std types, std constants, irregular proc./funct
!                  Alphabetic Order.  All Upper case if strictly reserved !
..|:=|>=|<=|<>|
ABSOLUTE|AND|ARRAY|BEGIN|Boolean|Byte|CASE|Char|Comp|Concat|CONST|DIV|DO|
Double|DOWNTO|ELSE|END|Exit|Extended|EXTERNAL|False|FILE|FOR|FORWARD|FUNCTION|
GOTO|IF|IMPLEMENTATION|IN|INLINE|Integer|INTERFACE|INTERRUPT|LABEL|
Longint|Mem|Meml|Memw|MOD|New|NIL|NOT|OF|OR|OTHERWISE|PACKED|
Pointer|Port|Portw|PROCEDURE|PROGRAM|Read|Readln|Real|RECORD|
REPEAT|SET|SHL|Shortint|SHR|Sizeof|Str|STRING|Text|THEN|TO|True|TYPE|UNIT|
UNTIL|USES|VAR|WHILE|WITH|Word|Write|Writeln|XOR||

!  Top-down grammar rules use non-Pascal chars as metasymbols:
!  underbar semantic action, ?  marks new identifier, &  known identifier.
!  % is number, ' is string
!  {||} is list of alternatives,  # means 0 or more repetitions

"constant"
   {' _stringCon | + _plus posiConst | - _minus posiConst | posiConst |
     NIL _nilSymbol | TRUE _trueSymb | FALSE _falsSymb }
"posiConst"
   { {&constId _constRef |% _intConst } _endConst }
"paramType"  ! all named types
   {BOOLEAN _typeBool | BYTE _typeByte | CHAR _typeChar | SHORTINT _typeShort|
    INTEGER _typeInt | WORD _typeWord | LONGINT _typeLong | REAL _typeReal |
    DOUBLE _typeDoub | TEXT _typeText | POINTER _typePoin| STRING _maxiStr |
    FILE _typeFile | COMP _typeComp | EXTENDED _typeExte |&typeId _typeName }
"simpType"
   {BOOLEAN _typeBool | BYTE _typeByte | CHAR _typeChar |
    INTEGER _typeInt | WORD _typeWord | SHORTINT _typeShort |
   &typeId _typeName | ( _enumDef ?constId _newConst #{,?constId _newConst })
   _enumEnd  |constant _subranDef .. constant _subranEnd }
"strucType"
   { SET OF _typeSet simpType _tpSetEnd |
     FILE _typeFile {OF genType _tpFlEnd|} |
     ARRAY _arrayDef
   [ simpType#{,_midIndex simpType} ] _lastIndex OF genType _arrayEnd |
   RECORD _recordDef fieldList END _recordEnd }
"genType"
   { LONGINT _typeLong | REAL _typeReal | DOUBLE _typeDoub | simpType |
     COMP _typeComp | EXTENDED _typeExte |
   TEXT _typeText | POINTER _typePoin|
   STRING _maxiStr {[posiConst _typeStr ]|} |
   PACKED strucType | strucType |
   ^ _ptrDef { paramType _linkTname | ?forwId  _linkToPtr} }
"fieldList"
   {field#{;field} { CASE ! nested CASE is buggy
    {paramType _dummyTp| ?fieldId _newField: paramType _fieldType}
    OF variant #{;variant} |} } ! field and variant may be void!
"field"
   {?fieldId _newField #{,?fieldId _newField }:genType _fieldType |}
"variant"
   {constant #{,constant} :_mkVariant (fieldList) |} ! possibly recursion
"sintrval"
   {constant _setcoOne {..constant _setcoTwo|}}
"tpdConst" ! typed constants: simple,set, array,record, recursive!
   {constant _tradCons|
    (_tradOpen {&fieldId:tpdConst #{;_tradSepa &fieldId:tpdConst} | !record
     tpdConst #{,_tradSepa tpdConst} } )_tradClos | ! ... and array
   [ _setcoInit {sintrval #{, sintrval} |} ] _setcoTerm }  ! set const
"address"   ! simplest variable references
   {&varId _getAddr | &varParId _parAddr | &valParId _valpAddr |
    &fieldId _withAddr | &fileId _fileAddr }
"variable"  ! in  @ operator: loss of generality bug?
   { address #modifier }
"memport"
   {{MEM _kwMem |MEMW _kwMemw |MEML _kwMeml} _forbidden
     [expression:expression] _memArray|
    {PORT _kwPort | PORTW _kwPortw } _forbidden [expression] _ioPort}
"varRefer" !  general variable reference : functionCall^ and var-typeCast
    {{address| &typeId(varRefer) _typeCast| &functId _functCall
     {(expression _pushParam #{,expression _pushParam })|} _doCall ^ _pointTo}
     #modifier |memport}
"assiLeft" ! left side of assignment: complicated because of functions
    {{address| &typeId(varRefer) _typeCast}#modifier _assignDef:= |
     &functId { ! if "(" or "^" follows here, PointerFctCall !
     {( _functCall expression _pushParam #{,expression _pushParam })^|
       ^ _functCall} _doCall _pointTo
     #modifier _assignDef:= |:= _functName }|  ! void: function return value.
     memport _assignDef :=  }
"modifier" ! array,record,pointer addressing
   { [expression _arrayAddr #{,expression _arrayAddr } ]|
   . _dotSymb &fieldId _subField | ^ _pointTo }
"unsigned"
   {&constId _constRef |% _intConst |NIL _nilSymbol |
   TRUE _trueSymb | FALSE _falsSymb | ' _stringCon }
"factor"   ! Bug: allow #modifier after valCast ?
   {unsigned _pushConst |variable _pushVar |
   &functId _functCall { (expression
   _pushParam #{,expression _pushParam })| } _doCall
    {^ _pointTo #modifier|} |  ! pointer-valued function call
   (expression) _parenthes|
   [ _setDef {expression {..expression _interval |} _setList  !set construct
    #{,expression{..expression _interval|} _setList}|} ] _setMake |
   NOT factor _notLog |
   @ _forbidden {variable|&procId _functName|&functId _functName} _getPtr |
   paramType _forbidden (expression) _valCast | ! value OR variable type cast
   CONCAT(expression #{,expression _addit}) |
   SIZEOF ({paramType _typeSize |expression _getSize}) |
   memport }
"term"
   {factor #{* factor _multi |/ factor _divis |DIV factor _divis |MOD factor
   _modulo |AND factor _andLog|SHL factor _shfLeft| SHR factor _shfRight }}
"simpExpr"
   {{+term|-term _negate |term} #{+ term _addit |- term _subtr |
   OR term _orLog| XOR term _xorLog }}       ! simple expr
"expression"
   {simpExpr {=simpExpr _equal |<simpExpr _less |>simpExpr _greater |
   <>simpExpr _unEqual |<=simpExpr _lessEqu |>=simpExpr _greaterEqu |
   IN simpExpr _inOper |}}
"format"
   {expression _formData {:expression _fmtOne {:expression _fmtTwo |}|}}
   ! formatted data needed in write and str
"binary"
   {INLINE _forbidden (sizeCode inlCode #{/sizeCode inlCode}) }
"sizeCode"
   {<|>|}
"inlCode"
   {constant _ignore| {&varId|&varParId|&valParId} #{{+|-}constant _ignore} }
"inOut"
   {READ({&fileId _fileRef,|}varRefer _rdVar #{,varRefer _rdVar }) _doRead|
   READLN{({&fileId _fileRef|varRefer _rdVar }#{,varRefer _rdVar })|} _doRdLn|
   WRITE({&fileId _fileRef,|}format _wrFmt #{,format _wrFmt}) _doWrite|
   WRITELN{({&fileId _fileRef|format _wrFmt} #{,format _wrFmt})|} _doWriLn|
   STR(format,varRefer _numToStr ) | NEW (varRefer _memAlloc ) }
"interval"
   {.. _caseIntv constant|}
"oneCase"
   {constant interval _caseFirst #{, constant interval _caseNext}
    : _caseLast statement _caseEnd |}
"statement" ! may be labeled
  { {% _intLabel| &labelId _symbLabel}: statemt _terminator|
    statemt _terminator}
"statemt"
   { assiLeft expression _assignmt |
   &procId _procCall
   { (expression _pushParam #{,expression _pushParam })| } _doCall |
   BEGIN _beginSymb statement #{;statement} END _endSymb |
   IF expression THEN _ifThen statement {ELSE _elseDo statement|} _endIf |
   WHILE _doLoop expression DO _doWhile statement _endWhile |
   REPEAT _repLoop statement#{;statement} UNTIL expression _endRep |
   FOR &varId _forDef := expression _forInit
     {TO expression _comparTo DO statement _increment
     |DOWNTO expression _comparDown DO statement _decrement } |
   inOut | ! irregular (read,write,str) procedures
   CASE expression OF _caseSel oneCase #{;oneCase} ! case items
    {{ELSE|OTHERWISE} _caseOther statement #{;statement} END| END} _caseTerm |
   WITH varRefer _withFirst #{,varRefer _withNext } DO statement _withReleas |
   EXIT _gotoExit |
   GOTO {% _intJump |&labelId _symbJump} |
   binary |} ! Inline statement, null statement
"paramLis"   ! parameter list of proc or funct declaration.
   { (subList #{;subList} {)| [_optional #{;subList} ]) } _paramEnd |
     [_optional subList #{;subList} ] _paramEnd |}
!  { (subList #{;subList} { [_optional #{;subList} ]|} )} has a bug! Where?
"subList"
   {{VAR ?varParId _paramDef #{,?varParId _paramDef } |
   ?valParId _paramDef #{,?valParId _paramDef }} _typeNull !typeless params !
   {: {:_relaxTp |} paramType _paramTp |} }
"varList" ! declare variable list
   {?varId _firstVar #{,?varId _nextVar}:genType _tpVarList
    {ABSOLUTE _forbidden {posiConst:posiConst|&varId|&varParId|&valParId}|} ;}
"constDef" ! normal or typed const definition
   {?constId _constIde {= constant _assignCon|
    : genType _typConst = tpdConst _assignTC} ;}
"typeDef"
   { {&forwId|?typeId} _typeDef = genType _typeEnd;} ! type definition
"lablDef"
   { % _intLbDef| ?labelId _symbLbDef}
"declPart"  ! declaration part
   { LABEL lablDef #{,lablDef}; |
     CONST constDef#constDef|
     TYPE typeDef#typeDef|
     VAR varList#varList| !block header.
    {PROCEDURE ?procId _blockEntry paramLis _procEnd; {INTERRUPT; _forbidden|}
     | FUNCTION ?functId _blockEntry paramLis ! fct type = option after Forwd
      {: paramType;|; _typeInt} _functEnd }
      {FORWARD _forwDecl| EXTERNAL _extDecla _forbidden| binary _forwDecl|
      #declPart block} ;
   }  ! series of proc/funct
"block"
   { BEGIN _blockBegin statement#{;statement} END _blockEnd }
"useList"
   {USES &unitId _useUnit #{,&unitId _useUnit} ;|}
"externals"   !  unit headings, for level 0
   { ?unitId _unitFile ; INTERFACE  useList
    #{CONST constDef#constDef|
    TYPE typeDef#typeDef|
    VAR varList#varList|
    PROCEDURE ?procId _blockEntry paramLis _procEnd; _intfDecl {@ _isMissing|}|
    FUNCTION ?functId _blockEntry paramLis: {: _relaxTp|} paramType _functEnd;
    _intfDecl {@ _isMissing|} }
   IMPLEMENTATION } ! header stops here !
"mainProg"
   { ?unitId _mainFile _blockEntry {( ?otherId#{,?otherId})|} _procEnd ;
     useList #declPart block. _mainPrgr } ! main program.
"goodFile" ! either program or unit
   {PROGRAM _doProg mainProg |
    UNIT _doUnit externals _implPart #declPart
    {END _normUnit | block _initUnit} .}
"intrFace" ! part of unit
   {UNIT _doIntf externals }
~

{header of standard Pascal procedures/functions for Level 0
 special [ ] and :: syntax in "prototypes" allowed ONLY here !
 They all get uppercase initials --> avoid  C library conflicts !
}

unit System; interface

const Pi=3.1415926;
var  CSeg,DSeg,SSeg,SPtr: word;

function  Copy(s:string; ix,count:integer): string;
procedure Insert(source:string; var s::string; ix::word);
procedure Delete(var s::string; ix,count::word);
function  Pos(sub,s: string):byte;
function  Length(s:string):integer;
procedure Val(s:string; var v::real; var code::word);
function  UpCase(c:char):char;
procedure Inc(var x::integer[; n:integer]);
procedure Dec(var x::integer[; n:integer]);
function  Hi(x:integer):byte;
function  Lo(x:integer):byte;

function  Ofs(var x): word;
function  Seg(var x): word;
procedure Halt [exitcode:word];
procedure BlockRead (var f:file; var buf; count:word [; var res: word]); @
procedure BlockWrite(var f:file; var buf; count:word [; var res: word]); @

procedure Dispose(p:pointer);
procedure Mark(var p::pointer);
procedure Release(var p::pointer);
function  MemAvail:longInt;
procedure Reset(var f::file [;rsize:word]);
procedure Rewrite(var f::file [;rsize:word]);
procedure Close(var f::file);
procedure Assign(var f::file; s:string);
function  Eof[var f::file]:boolean;
function  Eoln[var f:text]:boolean;
function  IoResult:word;
procedure Rename(var f::file; s:string);
procedure Erase(var f::file);
function  ParamCount: integer;
function  ParamStr(i:integer): string;
function  Ord(c::integer):byte;
function  Chr(i:integer):char;
function  Succ(i::integer)::integer;
function  Pred(i::integer)::integer;
function  Abs(r::real)::real;
function  Round(r:real):integer;
function  Trunc(r:real):integer;
function  Odd(i:integer):boolean;
function  Sqr(r:real):real;
function  Sqrt(r:real):real;
function  ArcTan(r:real):real;
function  Exp(r:real):real;
function  Ln(r:real):real;
function  Cos(r:real):real;
function  Sin(r:real):real;

var
  Input: Text;
  Output: Text;
  PrefixSeg: Word;
  HeapOrg: Pointer;
  HeapPtr: Pointer;
  FreePtr: Pointer;
  FreeMin: Word;
  HeapError: Pointer;
  ExitProc: Pointer;
  ExitCode: Integer;
  ErrorAddr: Pointer;
  RandSeed: Longint;
  SaveInt00: Pointer;
  SaveInt02: Pointer;
  SaveInt23: Pointer;
  SaveInt24: Pointer;
  SaveInt75: Pointer;
  FileMode: Byte;

procedure Append(var f:text); @
procedure Flush(var f:text);  @
procedure ChDir(s:string);    @
procedure MkDir(s:string);    @
procedure RmDir(s:string);    @
procedure GetDir(d:byte; var s::string); @
procedure SeekEof[var f:text];   @
procedure SeekEoln[var f:text];  @
function  FilePos(var f:file): longInt;   @
function  FileSize(var f:file): longInt;  @
procedure Seek(var f:file; n:longInt);    @
procedure Truncate(var f:file);           @
procedure SetTextBuf(var f:text; var buf [; size:word]); @

{ procedure Exit; @ }
function  Addr(var x): pointer; @
procedure FillChar(var x; count:word; ch::integer);
procedure Move(var source,dest; count:word);    @
procedure Randomize;                            @
function  Random[range:word] :word; {or real!}  @
procedure GetMem (var p::pointer; size:word);
procedure FreeMem(var p::pointer; size:word);
function  Frac(x:real):real;     @
function  Int(x:real): real;     @
function  MaxAvail: longInt;     @
function  Ptr(seg,ofs:word): pointer;  @
procedure Swap(var x::word);           @

implementation

{Things Left Out:
   exit absolute addr
   external TypeCasts TypedConstants @-operator concat sizeof
   chDir getDir mkDir rmDir append flush seekEof seekEoln setTextBuf
   blockread blockwrite seek truncate freeMem getMem maxAvail
   frac int fillchar move paramCount paramStr random randomize swap
   inline interrupt shortint single extended comp ptr
   UnitQualifiers TypelessParameters
}
```
{% endraw %}

## PCPCCODE.TXT

{% raw %}
```

------  pcpccode.txt ----------- Copyright (C) 1991  by Georg Post


This file documents some internals of the PCPC Pascal-C code converter.
It is a complement to the user's guide PCPCDOC.TXT .

Whenever I refer to some object (type,procedure,variable...) in the code,
I'll use the notation [UnitId.ObjectId] in the following discussion.

Topics included here are:
  1. Coding discipline
  2. Overview of the code
  3. Data structures of the Pascal to C translation program
  4. The theory of AuxParams
  5. The Parser
  6. The Scanner
  7. Standard library
  8. Organization of the grammar specification file Grammar5
  9. Syntax debug utility Chekgram.pas
 10. Grammar Bugs
 11. Hints on customizing PCPC
 12. Work in progress on future version of PCPC


1. Coding discipline

    PCPC is a conservatively written program supplied in FULL SOURCE CODE.
It compiles under Turbo Pascal Version 4.0 (no other versions tested).
It does not use any of the following hardware specific, "unsafe" or
"outright dangerous" features:
  no  Units Dos,Crt;
  no  sins against Structured Program Flow  such as label,goto,halt,exit;
  no  inline,interrupt,absolute,external;
  no  mem,port, move,fillchar, addr,@,ptr,ofs,seg, cseg,dseg,sptr,sseg;
  no  typeless parameters, typeless files, generic pointers;
  no  typecasts or sizeofs;
  no  conditional compilation.
(The sole exception to these rules is the [Pascannr.rangeCheck] routine,
included for debugging purposes. That one would disappear if MS-DOS were a
true operating system, with memory protection.)
   Among the "sound" features of Turbo Pascal, I did not use: typed constants,
automatic unit initialisation code, files other than Text, variant records,
qualified identifiers.

    At the expense of speed, the array bounds and stack overflow checkings are
ON {$R+,S+}, and almost every pointer which isn't NEW undergoes a lengthy
test before anything is written to the place it is pointing to. All that means
you can be confident to get a slow but virus-free binary code - if your copy
of the TP compiler isn't infected, of course. Because of the complicated data
structures on the heap, however, I won't guarantee that my translator is free
from pointer bugs and doesn't crash the system, some ugly source code being
some day fed into it.

    Hopefully, this program as it evolves will never indulge in
hardware dependencies or safety peepholes. One single @-operator in a Turbo
Pascal code might suffice to create the most ugly self-modifying program,
overwriting one of its procedures with some bomb extracted from innocent-
looking ASCII strings... even if all the rest spoke the purest Jensen-Wirth
dialect only. While Turbo Pascal has pitfalls related to most of the
above-mentioned "extensions" which I have banished from my code, I do not
even dare to confess my true opinion on the C language.


2. Overview of the code

Program files .PAS ( after the ":" list of those upon which they depend)

#(1)          for PCPC.EXE first pass of translator:
pcpcdata:
pascannr: pcpcdata
semanti6: pascannr
cdeclara: pascannr
cnesting: cdeclara
cbulk   : semanti6 cnesting
pcpcpars: cbulk
getunits:
pcpc    : pcpcpars getunits

#(2)           the REORD2.EXE postprocessor
killansi:
reord2  : getunits killansi

#(3)           the CHEKGRAM.EXE grammar debugger
gramtool:
chekgram: semanti6 getunits gramtool


Essential parts of the PCPC program (pass 1):

- The Startup Code: units [pcpcdata] and [pascannr]
               makes the Grammar Table and other global and heap data
- The Scanner: extracts elementary items from the source text
               (numbers, strings, reserved and user-defined symbols)
               and updates the Symbol Table (a series of binary trees).
               It strips comments and converts numbers to binary format.
- The Parser:  [pcpcpars] is steered recursively by the Grammar Table
               [pcpcdata.Gt] and the incoming symbols from the Scanner.
- The Semantics Part: [semanti6] does housekeeping of types, partial
               expressions etc.
               All the information contained in declaration parts is stored
               here in internal heap data.
               Feedback interaction with the symbol table handler for the
               management of identifier scopes (block nesting,
               record field scope nesting).
- The Code Generator: 3 Units [cdeclara], [cnesting], [cbulk].
               writes program code in the destination language.
               In my design, the toughest part of it (Unit [Cnesting])
               as well as the second pass (postprocessor [Reord2]) does the
               hard work of "peeling" nested procedures.

The main loop of PCPC acts on any of the PAS files in the list to be converted.
It first calls three INIT routines for: Pascannr Semantic Cbulk.
  (allocation of heap memory, global variables start values).
Then it translates the file, preceded by all the interface parts of used units.
Finally, it calls the TERM routines for: Cbulk Semantic Pascannr.
  (de-allocation of used heap, garbage collection)
Remark:
  The most efficient (but non-portable to C) heap management would have been
a single Mark/Release pair. I chose to implement explicit, slow Dispose loops
in each one of the modules. Any pointed objects are inserted into trees and
linked lists so that one can reach them at heap cleanup time.


3. Data structures of the Pascal to C translation program

 The program keeps the following data on the heap:
- a binary tree  of identifiers (the Symbol Table), of type [Pcpcdata.Ide].
  Identifiers that come in lists (record fields, enumerated consts,
  proc/funct parameters, var declaratons) have a .chain link .
  The identifier forest has one tree for each nested block level ("scope").
- a collection of all the Type Elements [Pcpcdata.Tpel] used by the source text
  There are pre-defined standard type elements for Boolean, Integer ...
  Each Identifier is linked to some type element via .typo
  Each Named type element is linked back to an identifier via .tName
  We look up the type hierarchy for (assignment) compatibility checks.
     Unit [Semantic] has local data:
- a stack of type element pointers, accompanying the target data stack
- a stack of identifier pointers
- a stack of Labels for control statement translation

Type elements have a "class" character .cl, two pointers p,q to other type
elements, as well as two integers l,m. Their meaning varies.
Data for type Elements (with their letter codes .cl):

Y Array     : p=first index type,
              q="rest array" type or base type,
              l=total length,
              m="rest array" length for index offset calculations.
R Record    : p=first field type,
              q="rest record" type or Nil,
              l=total length,
              m=first field length.
U Function  : p=result type,
              q=rest A/L type,
              l=total length of the parameter zone,
              m=number of optional parameters
D Procedure : p=nil,
              q=rest A/L type,
              l and m: like U
A var-param : p=parameter type,
              q=rest A/L, (vAr/vaL parameters)
              m=1 for weak parameter type, else 0
L val-param : p=parameter type,
              q=rest A/L,
              m= as for A.
P Pointer   : p=pointed type, l=2
S Subrange  : p=parent type,
              l,m= ord of mini and maxi
E Enumerated: p,q=Nil,
              l=ord of maxi,
              m=discriminating number.
F typed File: p= record type (if Nil, untyped file)
e Set       : p= base type

Pre-defined type elements:

b Boolean
c Char
y Byte
h Short
i Integer
w Word
l LongInt
r Real
d Double
s String
t Text
p (Generic) Pointer
* typeless (parameter)


        All const, var, type, procedure, function identifiers have a
        pointer to a Type entry. All field id's point to their
        origin Record type.

Conventions for entries in the symbol table (type is [Pcpcdata.ide] ):

 name: is the identifier , truncated to 15 characters or padded with #0
       First character converted to upper case, else spelled as encountered
       for the first time
 class: one of the classification hints (enumerated type PASCANN4.idClass)
 typof: pointer to a type element related to the identifier. Should never be
        undefined or NIL, during the useful lifetime of the symbol.
 rg,lf: right-left pointers for the binary tree structure of the
        symbol table. No effort has been made to balance that tree...
 chain :another link used by chains of parameter or variable declaration
        lists, and by field identifiers in Records.
 x:     Number of various meaning, defined in the Semantics part:
        For variables, procedure parameters, and record fields, x is the
        address offset that a compiler would use. For procedures and
        function Ids, x is the label number of the entry point.
        For constants, x is the integer value.
 y:     Is the ordinal number of chained elements (parameter lists, record
        fields, VAR identifiers). For Type and Const identifiers, y is the
        scope level: useful for local types to be made global in C.
        For procedure and function Ids, y classifies normal,forward,external
        and interface-part procedures.
 rScope:record scope number, is positive for record field Id's.
 reUse: flag for Pascal-legal, C-illegal, reused global identifier.


Procedures/Functions:
At declaration time, there are 2 chains:
The type element of the proceDure/fUnction, defined at _blockEntry
[Semantic.defFunct] is linked via q to the chain of vAr/vaL parameters.
Each Parameter type element has a pointer p to the base type.
The Function's pointer p is the result type.
All these tpel are linked to their names (of type Ide) via typof, backward
link with tname.
The Id chain has its own (redundant) link via the Chain field.
HOWEVER, only the proc/function Name is externally visible at scope level L.
The parameter names have level L+1 and will be scratched at the exit point
of the proc/funct definition. Their Chain, and the Tname pointers, will
lose any meaning at Call Time of a proc/funct. The q links survive intact.


4. The theory of AuxParams:

Nested procedures are not allowed in C. Such Pascal procedures can escape from
their local context by acquiring auxiliary parameters (abbrev. as AuxParam).
A "semilocal" symbol which can occur as a new auxiliary parameter will have
6  places of use:

1.  Origin,      some procedure declares a VAR or a var/val parameter
2.  Use,         in the procedure where it originates
3.  Use,         in the body of an INNER procedure (scope_of_use > decl.scope)
4.  Declaration, in the header of the inner procedure to be made global
5.  Call INNER   param. passed from the proc. declaring the symbol (at place 1)
6.  Call INNER   by another proc. inside the scope of symbol's origin (place 4)

Cases 3,4 and 6 refer to AuxParams: the identifier gets a _p prefix there
to make it unique. Cases 5,6 are handled in the Reorder postprocessor.

Three classes of variables should be considered: simple types, arrays, records.
Typed Const and File are treated like declared Variables, simple Constants
become global.

Example types for the translation list:

type Stri=string[23];              -->   typedef char Stri[24];
type Compx=record r,i:real end;    -->   typedef struct {r,i:double;} Compx;
Stri is an array type, Cmpx is a record type.

Here is what the C program will contain in the places 1 to 6:

  Pascal origin           generated C  program code

A.  Variable        1         2       3       4            5       6

var i:integer;     Int I;     I       *_pI    int *_pI     &I      _pI
const pi=3.14;     Float Pi=  Pi      _pPi    float _pPi   Pi      _pPi
var s:Stri;        Stri S;    S       _pS     char *_pS    S       _pS
var c:Compx;       Compx C;   C       *_pC    Compx *_pC   &C      _pC

B. Value Parameter  (local copies _g for arrays & records )

pi: integer        int pi     pi      *pi     int *pi      &pi     pi
ps: Stri           Stri ps    _gps    ps      Stri ps      _gps    ps
pc: Compx          Compx *pc  _gpc    *pc     Compx *pc    &_gpc   pc

C. Var Parameter    (the easiest job )

var vi:integer;    int *vi    *vi     *vi     int *vi      vi      vi
var vs:Stri;       Stri vs    vs      vs      Stri vs      vs      vs
var vc:Compx;      Compx *vc  *vc     *vc     Compx *vc    vc      vc

{ --------   Example code for nested procedures and AuxParams ------- }

program nestdemo;

procedure global;
type arr= array[1..10] of real;
     rec= record re,im: real end;
var  x,y,z: real;
     a:arr;  r:rec;   {x,y,z,a,r are semilocal variables}

procedure local1;
var i:byte;
begin
  with r do begin re:=x; im:=y; end;
  for i:=1 to 10 do a[i]:=z;
end;

procedure local2;
begin
  x:=1.0;y:=2.0; z:=10.0;
  local1;
end;

procedure local3(a1:arr; var a2:arr; r1:rec; var r2:rec);
begin
  a1:=a2; a2:=a1; {array & record assignments, Var or Value parameters}
  r1:=r2; r2:=r1;
end;

begin local2 end; {global}

begin global end. {nestdemo}
---------------------------------------------
translation with -a option, commented extract
---------------------------------------------
  typedef Real _tArr[10];     /* types become global, with _t prefix  */
  typedef struct _gRec {      /* struct get tags with -g, seldom used */
      Real Re;
      Real Im;
    } _tRec;

void _fLocal1 (        /* prefix _f for globalised functions */
_pR,_pX,_pY,_pA,_pZ)   /* AuxParams get -p prefix */
                       /* all but array (implicit pointer) are pointers */
_tRec *_pR;Real *_pX;Real *_pY;_tArr _pA;Real *_pZ;
{
  Byte I;
  {                 /* dummy {} from With block in Pascal */
    (_pR)->Re = *_pX;
    (_pR)->Im = *_pY;
  }
  for(I= 1;I<= 10;I++) _pA[I-1] = *_pZ; /* array index corrected by offset */
}

void _fLocal2 (       /* AuxParams come in a different order of use */
_pX,_pY,_pZ,_pR,_pA)

Real *_pX;Real *_pY;Real *_pZ;_tRec *_pR;_tArr _pA;
{
  *_pX = 1.0;
  *_pY = 2.0;
  *_pZ = 10.0;
  _fLocal1(_pR,_pX,_pY,_pA,_pZ); /* call of 1 local by another one */
}

void _fLocal3 (A1,A2,R1,R2  /* demonstrates structured type parameters */
)
_tArr A1;_tArr A2;_tRec *R1;_tRec *R2  /* ALL params are pointers */
;
{
  _tArr _gA1;  /*  local copies required for A1, R1 */
  _tRec _gR1;
  _mY(_gA1,A1);
  _mR(_gR1,R1);
  _mA(_gA1,A2,sizeof(_tArr));  /* for  array Parameters: sizeof(Type)  */
  _mA(A2,_gA1,sizeof(_tArr));  /* sizeof(A2) would be wrong ! */
  _mR(_gR1,(*R2));
  _mR((*R2),_gR1);
}

void Global (){
  Real X,Y,Z;  /* outer level context: variables have their Pascal Id's */
  _tArr A;
  _tRec R;
  _fLocal2(&X,&Y,&Z,&R,A); /* call of the local by global procedure */
}                          /* note the missing & for arrays */
----------------------------------------------------------------------


5. The Parser.

The parser relies on a Scanner and the syntax definition file GRAMMAR5.TXT.
The syntax is defined in a readable text file, in a more-Prolog-than-
Backus-Naur like notation. That grammar file is read at the start of the
program [Pcpcdata.ReadGram], and is squeezed into a grammar table,
[Pcpcdata.GT] in a very compact format. The syntax productions in GRAMMAR5
are definitions of Nonterminal Symbols, in terms of sequences of
other symbols (terminal or nonterminal) = the AND clauses, separated by OR
bars. The AND/OR formulae may be nested with {  } brackets, and a special
#-operator signals 0 or more repetitions of an element. The parser moves along
in this table somewhat like a primitive Prolog interpreter,
BUT without backtracking.

The grammar must be LL(1): the recognition of a leading nonterminal symbol
of an AND chain must uniquely qualify the rest of the chain as the only valid
production. As "side effects", the grammar rules contain references to
"semantic actions" marked with the _-symbol. These side effects tell the
parser to call the Action part of the program which manages things like the
type checking database, and which hands information over to the Code Generator
parts (for C).


6. The Scanner.

Calling the Scanner (procedure [Pascann.Scanner]) returns the following
information inside the record [Pcpcdata.ScanStatus],
after advancing by 1 item in the source text:
 cc = a char symbol, ii = an integer, pp = a pointer to an [.Ide] entry.
 eventually, a character chain (for string,real number ..)
Meanings of the symbol cc:
  cc> chr(127)  represents a Reserved multicharacter symbol of Pascal
  cc= '%'  : an unsigned decimal integer, ii=its value
  cc= '''  : a string constant, ii=its length
  cc= '?'  : an identifier, pp  points to its data in the symbol table
  cc= '$'  : end of source file is reached.
  cc= other character: single-character symbol of Pascal.

The Grammar Tables contain more "reserved keywords" than Pascal officially
allows. Those standard words have their first character only in upper case,
in the alphabetical list preceding the grammar rules. For example, the
read/write operations show up in the grammar tables since their flexible
argument syntax doesn't conform to that of standard Pascal procedures. The
standard procedure New for heap space allocation will translate into some
macro call in the C code requiring the pointer's precise data type; that's why
it figures as a terminal grammar element, too. When the scanner detects one of
those standard identifiers, flagged as "not really reserved" in an
accompanying data field, it looks at the user-defined symbol list and gives
priority to the user's identifier if it finds one: [Pascannr.scankeywd].
[pascannr.treatSymbol] does a context check to guess if a standard-but-reusable
Symbol is wanted as a newly defined item: in that case it enters by force
into the user's Symbol Table.

Search rules for the symbol table manager [Pascannr.SearchId] and [.AnnexId]:

There are two status numbers in the [Pcpcdata.Scope] record:
actual: is the depth of the procedure block nesting, at any moment  (0,1,2...).
         Any active level has its own symbol tree rooted at pstart[level].
recIndex: is the number identifying the record structure we're in.
          It is 0 at any time when no field identifiers are expected.

A given identifier Id will match the one at PP in the symbol list, IF:
1. The identifiers (converted to upper case, truncated to size 15) are the same
2. After a Unit-dot prefix, the unit qualifier Id^.qualif must match
3. If a Record Dot operation is pending, the record number Id^.rscope is Ok
4. Inside With clauses, the record number may be one of the With records
   With record field Ids are searched before non-record Ids.

Inside a record context, PCPC screens anything but that record's field
identifers, const and type identifers. Elsewhere, searching starts at the
innermost block level, down to level 0, for any non-field identifier
(rscope=0). The rule applies in the declaration parts to reject confusing
objects as field names, and in the statement parts to identify field names
versus synonymous non-field identifiers.

The Parser kernel compares the source symbols with the LL(1)  productions
of the syntax data in GT. It generates error messages for any unexpected
non-leading symbol and for undefined, multiply defined or misused
identifiers.
For any error, the errorCounter is incremented. Above a fixed limit,
the tooManyErrors flag is set.
For identifier errors, the symbol table is modified to fit the last use
of the offending identifier and parsing goes on. Any grammar rule that cannot
be satisfied triggers a fatal error and the translating program finishes
without any panic Exit or Goto, by leaving all loops and returning from any
depth of recursion.


7. Standard library.

The System unit interface code, as seen by PCPC, is the last part of the
grammar.txt file. Those procedures and functions which are not (yet)
imitated in my C library have the mark "@" at the end of their declaration.
   The System procedures and functions enjoy some freedom which the language
denies to ordinary functions, as declared by us disciplined Pascal users:
 *  they may have a LIST of an arbitrary number of parameters (Write, Concat).
      Such functions are not declared but absorbed in the syntax rules.
 *  they may have OPTIONAL parameters. To account for this, an exceptional
      declaration syntax is tolerated ONLY in the System interface code, e.g:
          procedure Halt [exitcode:word] ;
          procedure SetTextBuf (var f:text; var buf [; size:word] );
 *  their parameter's TYPE may be weakly defined. Weak typing is denoted by
      using the "::" symbol in the declaration. For example
          procedure Inc(var x::integer [;n:integer]);
      means that any "weak integer" (finite, scalar type) may be incremented
      but that the optional count (1 by default) must be assignment compatible
      to a true integer.

All these "Sloppy Pascal" features ( [] @ :: ) are vigorously rejected by
PCPC in the application code. Who wants to extend Turbo Pascal even more?
Procedures with an optional parameter have two C versions, for example
Dec(x,y) and DeC(x). [Cnesting.MissingParam] makes the distinction.


8.  Organization of the grammar specification file Grammar5.txt.

 That file has 3 main parts:
 - declaration of 4 lists of symbols used in the syntax rules
 - the syntax rules of the language, written in a meta-language
 - the Interface declaration for the Turbo Pascal SYSTEM unit.

The four lists of symbols are:

- The Semantic Actions which are interspersed in the syntax rules with a
  leading underbar. This list MUST have a verbatim copy in the Pascal file
  pcpcdata.pas, where is serves as an enumeration type declaration. The last
  symbol MUST be "forbidden" since it stops some loop in [pcpcdata.]
  In fact, the action identifiers act as CASE labels at 2 places of
  the translator:
  in Semanti5 they trigger the semantic "understanding" of the source code;
  in Cbulk they direct the subsequent target code generation.

- The explicit nonterminal symbols of the grammar. These are re-declared later
  between double quotes at the heading of each set of syntax expansions. Note
  that the grammar has many more (implicit) nonterminal symbols.
  Pascannr needs this list, in the precise order of declarations, to detect
  the position of the entry symbols of the Turbo Pascal grammar which are
  "goodFile" and "intrFace".

- The list of Pascal identifier classes. We introduce 13 kinds of identifiers
  in Pascal (e.g. Constant Identifiers, Function Identifiers, ...) which may
  occur in the syntax rules with 2 styles of reference:
  ?suchId    means : here Pascal wants a NEW identifier of class "suchId"
  &suchId    means:  here we should find a KNOWN ident. of class "suchId".

- The ORDERED list of all special symbols of Turbo Pascal, separated by "|" and
  terminated by "||". This includes all two-character reserved symbols, all
  Reserved Words of Pascal (in upper case) and all Special Features of Pascal
  (first char in upper case, then lower case). Special Features are standard
  type, procedure, function etc. identifiers which are not reserved: any
  Pascal program may redeclare them as something else. We include here those
  procedures which have a flexible parameter scheme (like Writeln) so that it
  is easier to describe their calls together with the other syntax rules, than
  to define them with a header in the System interface.

 The meta-rules for the syntax rules:

  The notation of syntax rules makes use of symbols which do not otherwise
  occur in Pascal (or which the scanner preprocessor strips away).
  A nonterminal symbol which may be expanded into an alternative set of
  symbol sequences ( a List) is written:
    "nonterm" { sequ1 | seq2 | sequ3 | .......  }
  If the List stops with |} , this means that the symbol may expand to Null.
  Inside a List {||| },  each item is a sequence of:
   - Pascal terminal symbols (one-char, two-char, all-uppercase-words)
   - Semantic action triggers (symbols preceded by the underbar)
   - Identifier symbols (preceded by & or ? )
   - Explicit nonterminals (must have their expansion elsewhere)
   - Implicit nonterminals which are in fact Lists {||| } again.
  Optionally, an explicit or implicit nonterminal has a prefix, the special
  character # which means: Repeat this construct 0 or more times. Obviously,
  such a nonterminal must not be null-reducible.
  The special symbol % denotes a number, ' denotes a string constant.
  The character ! means that the rest of the line is a comment.
  The syntax of string and numeric constants is "hard-wired" in the scanner.
     Pascannr.ReadGram reads the rules and packs them in a condensed form
  into the global table Gt. Consistency checks on that material are the
  aim of the CHEKGRAM utility.

 The SYSTEM interface part:

  Here we have CONST TYPE VAR PROCEDURE and FUNCTION declarations for standard
  Turbo Pascal features, in "almost" regular Pascal syntax. As the System
  procedures and functions may have varying numbers of parameters and relaxed
  type checking on those parameters, we introduce "Sloppy Pascal extensions".
  These are valid ONLY in system-related declarations, NOT in user code:
  - A Sloppy Pascal procedure may have trailing optional parameters which are
    declared after the regular parameters, between []. If all the parameters
    may be missing, the parameter part is enclosed in [] instead of ().
  - A Sloppy Pascal parameter may have a weak type indicated by the "::"
    symbol (for example var i::integer;). A weak type is a set of the regular
    types (see   .pas) to which an actual parameter may conform in that place.
  - The symbol "@" may follow a Sloppy Pascal procedure/function declaration.
    This simply means that the library code is not (yet) available in C and
    that warning messages occur at each call.


9.   Syntax debug utility  Chekgram.pas:

   The program CHEKGRAM.PAS should be run any time the grammar file GRAMMAR5
is modified. There are checks for trivial errors (braces that do not match,
redundant terminal or nonterminal symbols) and a systematic investigation
of the LL(1) conflicts and of misplaced semantic action markers. CHEKGRAM
builds a transition matrix holding for each pair (terminal, nonterminal) the
next grammar rule to be observed. If abundant memory space were available, that
table would control a fast non-recursive parser kernel, instead of the
recursive one driven by the original syntax rules. Anyway, the grammar is
too big to allow for an elegant handcrafted ("hard-wired") recursive descent
parser; and by principle I would dislike "compiler-compiler"-generated Pascal
source code: I prefer to keep the superiour nonprocedural data.

If you start Chekgram without command-line parameters, you get a menu. Else
it goes through an automatic sequence of tests on the grammar5.txt file and
then takes the first argument as a Pascal file to be parsed.
Chekgram's current output is too confusing, neat formatting still is on my
to-do list.
To catch all of Chekgram's remarks in a file, simply type at MS-DOS:
  chekgram blabla >chekgram.out

 Actions of Chekgram (unit [gramtool] ):

- Import the gramar table Gt of "condensed" syntax specs (repetition clauses,
  implicit nonterminals, nested braces ): [pascannr.readGram]
- Expansion into simple grammar rules
  (procedure productionList). Repetitions are transformed into right (i.e.
  tail) recursions.  Left recursion is strictly forbidden in LL(1) grammars.
  Terminals, Nonterminals and Semantic Actions are part of the productions.
- For any nonterminal, make the First and the Follow sets.
- Then check that the Continuation sets (director symbols) of each pair of
  expansion rules for the same nonterminal are  disjoint.
  Ambiguous rule pairs and director symbols are shown (procedure testLL1).
- Standard heuristics handle ambiguities such as the "dangling else problem":
  Take the FIRST rule that works while tracking the syntax. For example,
  specify : "IF x THEN s {ELSE s|}" never: "IF x THEN s {|ELSE s}" .
- CheckActions: Check that the semantic actions for a given rule occur only
  after it has been accepted (a nontrivial First symbol has been seen).
  Only trivial actions (e.g. output a statement terminator) that don't alter
  the semantic state database may occur in epsilon-reducible rules.


Samples of Chekgram output, with comments:

Too many "}" in intrFace        Ignore this, it's a bug biting the last one.

    constant       :- FALSE _falsSymb $         this is a primary rule
    posiConst      :- 301 _endConst $           number 301 points to sub-rule
301.posiConst      :- &constId _constRef $      sub-rules expanded
301.posiConst      :- % _intConst $             $ marks end of rule
    paramType      :- BOOLEAN _typeBool $

------- Checking LL(1) properties
Ambiguous rules: &typeId BOOLEAN BYTE CHAR COMP
  DOUBLE EXTENDED FILE INTEGER LONGINT
  POINTER REAL SHORTINT STRING TEXT WORD
363.factor         :- paramType _typeSize $
363.factor         :- expression _getSize $
Ambiguous rules: &fileId
378.inOut          :- &fileId _fileRef , $
378.inOut          :- $
Ambiguous rules: &fileId
382.inOut          :- &fileId _fileRef $
382.inOut          :- varRefer _rdVar $
Ambiguous rules: &fileId
385.inOut          :- &fileId _fileRef , $
385.inOut          :- $
Ambiguous rules: &fileId
389.inOut          :- &fileId _fileRef $
389.inOut          :- format _wrFmt $
Ambiguous rules: ELSE
400.statemt        :- ELSE _elseDo statement $
400.statemt        :- $

   CHEKGRAM finds three kinds of ambiguities in the Turbo Pascal grammar file.
All of them are resolved automatically by the parser, in favour of the first
matching production. Here they are (bottom up):
 * the dangling ELSE, ambiguous for nested if-then-else
 * the optional leading file Id in the Read/Write statements which has
   priority over other Ids in that context (4 cases)
 * type identifiers are ambiguous after SIZEOF: either the expression
   Sizeof(TypeId) is intended - the preferred interpretation, or the TypeId
   is just a typecast operator of another expression: rejected after Sizeof.

------- Checking for suspect triples:
    oneCase        :- constant interval _caseFirst 392
                        : _caseLast statement _caseEnd $ at 5
    statemt        :- BEGIN _beginSymb statement 398 END _endSymb $ at 5
    statemt        :- REPEAT _repLoop statement 401
                        UNTIL expression _endRep $ at 5
406.statemt        :- 407 _caseOther statement 408 END $ at 5
    block          :- BEGIN _blockBegin statement 447 END _blockEnd $ at 5
    externals      :- ?unitId _unitFile ; INTERFACE useList
                        451 IMPLEMENTATION $ at 7
(List of all production which contain sequences of the form A B c, where
 A and B are null-reducible nonterminals and c is a terminal symbol.
 This was a first step to detect the last Grammar Bug explained below.
 Apparently, there is nothing wrong with these productions and the critical
 ones must be more subtle).

------- Checking for anticipated Actions
Unsafe Action _terminator      in     statement      :- statemt _terminator $
(The _terminator action is triggered even for a void "statemt"!)


 Usefulness of the grammar check:

 Early versions of Grammar5 had a nonobvious LL(1) bug which had Chekgram tell
 that the "term+term" construct in "simpExpr" was ambiguous, precisely
 at the + sign!? After playing around with the grammar by leaving out things,
 I found that the bug came from the CASE construct expanding into sequences
 like
     statement { ;| } next-case-label  .
 The signed constant of case labels could be confused with the +term tail of
 an expression of some assignment statement.
 Repair: enforce the semicolon, even before the ELSE section of CASE.
 That was a deviation from Turbo Pascal, however. Finally, the expansion
     oneCase #{; oneCase}
 was adopted, where oneCase is reducible to Null. This allows parasitic ;;;;
 between case clauses: never mind!

 There are places where my Grammar5 still is in slight contradiction with the
 documented railroad diagrams of Turbo Pascal. Checkgram cannot know that.
 Currently, Chekgram does report 6 internal inconsistencies in Grammar5.
 These ambiguities comprise Pascal's (=ALGOL's) classic "dangling else" bug,
 and the optional fileId arguments in READ/WRITE operations. Here I tried
 to mix too much of the semantics into the syntax. Maybe there is no precise
 frontier between the two?  Anyway, as long as the first-come-first-serve
 disambiguating principle will work, take Chekgram complaints as "warnings",
 not "errors".


10. Grammar BUGS:

 Some trouble may arise from the old (now undocumented!) syntax of control
 character constants in Turbo Pascal. Here the border line between the lexical
 analyser and the parser fades away. Consider the Pascal text:
   TYPE ctrl= ^C..^Z;
   TYPE ptrC= ^C;
 The first type is a subrange of characters, the second one is a pointer to
 some other type called C, to be defined later. A parser must keep two
 symbols in mind, the "^" and the "C", before deciding at ".." or ";" what
 "^C" should mean!  The scanner is too dumb to see when it is allowed to
 contract ^C into one token, and the parser, by principle, should not backtrack
 or rely on a two-token lookahead. What to do: introduce an ugly exceptional
 lookahead kludge in the scanner ? Write messy syntax rules for the parser?
 No idea. PCPC accepts the historical control character syntax but excludes
 one-letter type names (thus strains the Pascal syntax a bit!)

 The Scanner always finds #12 for new identifiers, but the parser tables only
 have pre-selected (typed) new Identifiers. The line 12 of the parsing table is
 artificially filled with the non-null entry from any other new-Id line,
 in procedure [gramtool.modifParsTab].
 Other ad-hoc fill-ins apply to known Ids.

 Turbo Pascal constructs PointerFunctionCall(....)^ and typecast(...) are
 allowed to the left of assignments. Top-down parsing implies clumsy
 production rules here. I needed 3 kinds of variable references, to separate
 the  "f:="           function return syntax from the
      "f(x,y)^.z := " -like construction.

 Here are two grammar constructs where ChekGram detects nothing wrong but
 my parsers only work with the first one.
   Good: ( subList #{;subList} {)| [ #{;subList} ]  ) }
   Bad : ( subList #{;subList} {   [ #{;subList} ] |  } )
 Sequences ... #B C d  ( C null-reducible nonterminal, d terminal, here =')')
 seem to generate a parsing error: When the parser exits from B, and if C is
 absent, it does not find d in the input. Where was it swallowed?
 Exercise for the reader. I did not yet find the bug's origin.

----------------------------------------------------------------------------

11. Hints on customizing PCPC:

Any maintenance should be done on the Pascal source code, not on the C version
of PCPC and its utilities. By all means, take care of the self-translation
property of the software and the compatibility with classic non-DOS platforms
and traditional C compilers of the Eighties.

If you add your own code for missing features to the supplied .C library,
do not forget to delete the flag "@" at the end of the standard procedure
declaration in one of the system files. That will deactivate the warning
message for unimplemented functions.

   Some obvious speed improvements could be made if you are willing to give up
failsafe operation under DOS and portability: throw out the {$R+,S+} compiler
option and the pointer bounds check routine, replace the Dispose loops with a
Mark/Release, use big buffers for text file read/write or even
blockread/blockwrite.
I'm too conservative to do that.


12. Work in progress on future version of PCPC:

   In the Cbulk unit, a series of bugs are mentioned as comments. They will be
corrected as soon as possible. Unit Semanti6 needs some improvement on type
compatibility checking.

   Version 1.0 has serious shortcomings with regard to efficiency. After each
translation of a file, it throws away all the accumulated information on the
grammar, the System procedures, and the system units Dos, Crt etc.
For the next translation, it must read and interpret grammar5.txt a second
time, as well as the system units.
It uses a slow recursive parser, a price to pay for the small size: it needs
no tables in memory except for the initial grammar table Gt.

   Version 1.1 will repair some inefficiencies. Grammar and system infos will
stay in RAM between translation runs.  Gt will disappear, making room for the
condensed tables of the "medium size" parser which is tested in ChekGram.
The tables will be read in from ready-made files, instead of being
reconstructed over and over from scratch, as still happens in ChekGram.
In summary, the "parser generator" and the "parser" will become two separate
programs. Of course, the package will contain the source code of everything,
and nothing but source code.

   The C code from PCPC's self-translation, as well as the tables produced
by the parser generator, shall always be plain 7-bit ASCII and compatible
with basic Unix-style systems. I'll consider the machine-made C and data files
as public-domain OBJECT code, by contrast to my (Pascal and English) sources.
What I want to achieve is a free Turbo-Pascal compatible "compiler" (i.e.
preprocessor for K&R C "assemblers"), running on Unix, Dos and their clones.
This translator will never compete with the original Turbo Pascal compiler,
produced with aggressive assembler programming to get all that unbeatable
performance out of a PC. My modest goal is to contribute to a wider
portability of the de-facto standard dialect of Pascal.

```
{% endraw %}

## PCPCDOC.TXT

{% raw %}
```
PCPCDOC.TXT    Copyright (c) 1991  by Georg Post

Documentation on PCPC:    Post's Conservative Pascal-C Converter

Please read the licence information in file PCPCINFO.TXT first.

Refer to  FILES.TXT for the list of supplied files. All of them consist of
printable 7-bit ASCII characters, there's not a single bit of binary code.

The file PCPCMESS.TXT lists the error and warning messages issued by PCPC.

To learn more about the internals of PCPC and the related utilities, have a
look at the file PCPCCODE.TXT, a supplement to this one.


i   . Introduction
ii  . User's Guide
iii . Translation Strategy



I. INTRODUCTION
---------------

About the design of PCPC:

   The Pascal-C converter will accept "portable" algorithms coded in
Pascal's most widespread dialect which is Turbo Pascal (Trademark of Borland
International). Hardware-related features such as the Unit Dos, the register-,
memory- and port-relative data access, and machine code inclusion, will NOT be
supported. Anyway, it's easy to code system program fragments directly in C,
the language that is meant for bit-twiddling.

   As can be tolerated for a Programmer's utility only, the converter takes
command line parameters and lacks a slick, colorful User Interface. On the
other hand, being of interest to all folks who have a working knowledge of
Turbo Pascal, the software should be - and is - available in source code.
I must apologize for my bad English in comments and document files; a
special-purpose program for an international audience just has to get along
with English explanations.

   Protagonists of Pascal-C translation may want to gently push you away from
the "student language" into that industrial world of Real (i.e. C-)
Programming. Not so with PCPC: Keep your Turbo Pascal, fix the safety belts of
strong type and index bound  checking (array index bugs must be a nightmare
in C), and use low-level C as the portable assembler which allows you to run
programs anywhere you like. This utility is biased towards Pascal programmers
who don't want to fiddle with C code much more than with assembler: the less
is the better.

   The output will conform to the 1978 Kernighan-Ritchie definition of C and
import the BARE MINIMUM of standard C libraries which are supposed to exist
everywhere: stdio.h, stdlib.h and math.h . On classical Unixes, there is no
"stdlib", but I need only 5 symbols therein that will link automatically:
  exit  free  malloc  rand  srand .
One "modern" feature has been permitted, for minimal type safety: the function
declarations are preferentially written as ANSI prototypes. A postprocessor
option may still produce the obsolete header syntax of the historical C.
The postprocessor does not kill THREE extensions to K&R'78 which I use, but
which ought to be available on many pre-ANSI C compilers:
  void              as a result type of functions
  enum              data types, assignment with integers is tolerated.
  unsigned short    data type, equivalent to Pascal's Word.
( The enum types exist by November 1978: "Recent Changes to C", and the void
results and unsigned shorts before 1982: S.R. Bourne, "The UNIX System").
PCPC never produces the following C keywords:
    auto  const  continue  float  int  register  signed  volatile
and just  *hates*  MSDOS keywords like:  asm  cdecl  far  huge  near ...
Requiring a wide portability of the output code calls for old-fashioned habits.
Along these lines, Structures don't appear as function results or parameters,
only pointers to them will pass as arguments or return values.

   Since my idea of a general-purpose program embraces this software itself,
I gave the highest priority to the correct translation of Record, String
and Set data and operations, and of nested procedures with all kinds of
recursions. Somewhat less important are the variant records, the typed
constants, and handling of other-than-Text files. Turbo extensions like all
those facilities to work around strong data typing, are considered luxury
goods with a low priority for implementation.

   In summary, if a Pascal program is written with portability in mind,
refraining from IBM-PC and MS-DOS (trademarks of the respective companies)
specific details, non-text files, unreadable nested type declarations, chances
are good that the automatic conversion to standard C code will succeed.
The translator will evolve from this initial release (1.0) to include
"esoteric" Turbo Pascal features: in decreasing order of usefulness from
the author's point of view - or better - that of the users who care to give
me some feedback.

    As a mandatory test, PCPC is able to translate ITSELF and the accompanying
utilities into plain vanilla K&R-1978 C with (removable) ANSI function
prototypes.
Under C, the translated code shoud compile flawlessly and run perfectly to
redo its own translation, reproducing the same result. That allows anyone
to bootstrap a reasonable subset of Turbo Pascal on most systems, IBM-PC
compatible or not, given the ubiquity of C compilers.
  For my C tests, I used Turbo C++ 1.0 with ANSI prototypes, and the C compiler
of the Ridge Operating System 3.3 (1985 Unix derivative), after filtering the
code through my ANSI killer. My Turbo C 1.0 (1987) failed but I don't know why.

   No effort has been spent on transporting Comments from Pascal to C: the best
comment on the C output is the original Pascal program. Anyway, C code appears
all too unreadable to me: Has the portable assembler called C  been hyped
into the True Professional's tool, just because its use is pretty dangerous?
Both the dictatorship of Microsoft over the PC world, and the reign of old
UNIX on the workstation universe, have enforced that system language as the one
and only programming hook to modern graphical user interfaces. Which isn't
to say that Turbo Pascal, with all those extensions borrowed from C, qualifies
as this planet's most neat and orderly computer tongue!

   PCPC is a two-pass translator: the program PCPC proper converts a file
xyz.PAS into the intermediate text xyz.PC1; the postprocessor REORD2 does
some macro expansion and rearrangement to obtain the final xyz.C.
The optional ANSI destroyer in REORD2 also comes as a stand-alone utility,
ANSIKILL.
PCPC requires that the Units used by xyz.PAS be in the same directory, with
file names uuu.PAS, and that each Unit identifier equal its file name.
The main file should start with the PROGRAM keyword (though TP4 allows you to
drop that one).
  I recommend to submit only texts that the fast TP4 compiler did accept,
in order not to bother the lengthy PCPC translator with trivial syntax errors.


II. USER'S GUIDE
----------------

Remark: in the following text, there are some pieces of MSDOS code for you to
block-write into batch files. I did not want to clutter up the distribution
disk with those tiny command scripts.


2.1  Installation of PCPC, and Part 1 of self-test :

These are suggestions only, not a unique recipe. Dear reader, you are a Pascal
programmer and so you'll easily manage things intelligently your own way.

Let's assume the following:
*  You have Turbo Pascal Version 4.0
*  You have 580 K bytes of free DOS memory (no TSRs, Devices, ... )
*  there is a hard disk volume C: under MS-DOS Version 3.3.
*  The DOS prompt says:    C:\>

- Create some directory , for example, type:     md \pastoc
- Move into the directory:                       cd \pastoc
       make document subdirectory:               md doc
       make examples subdirectory:               md ex
- Copy the whole distribution diskette:
     copy a:*.*                 ( use xcopy if you didn't forget the syntax..)
     copy a:\doc\*.* doc
     copy a:\ex\*.*  ex
- Load the Turbo Pascal 4 integrated version:    \turbo4\turbo
  ...and step through the following compilations & executions:
        File/ Load/ pcpc.pas      F10/ Compile/ Destination=Disk  Make
   F10/ File/ Load/ chekgram.pas  F10/ Compile/ Make
   F10/ File/ Load/ reord2.pas    F10/ Compile/ Make
   F10/ File/ Load/ ansikill.pas  F10/ Compile/ Make
  (By now, any Unit has its TPU counterpart, the compiler saw every *.PAS)
-  F10/ Options/ Parameters      -b pcpc
  (Pcpc and Reord take identical command line input: -Build option, File pcpc)
   F10/ File/ Pick/ pcpc.pas    F10/ Run
   F10/ File/ Pick/ reord2.pas  F10/ Run
  (self translation of PCPC and its units. It is a slow 2-pass process ).
-  F10/ Options/ Parameters  -b reord2
   F10/ File/ Pick/ pcpc.pas    F10/ Run
   F10/ File/ Pick/ reord2.pas  F10/ Run
-  F10/ Options/ Parameters  gramtool chekgram ansikill
   F10/ File/ Pick/ pcpc.pas    F10/ Run
   F10/ File/ Pick/ reord2.pas  F10/ Run
  (self translation of Reord2, Chekgram and Ansikill)
-  F10/ File/ Quit
  By now, you have PCPC.EXE, REORD2.EXE, CHEKGRAM.EXE, ANSIKILL.EXE,
  and a lot of .C files, one for each of the parameter list entries and its
  subordinate units.
  The Pascal part of the test is over, I'll discuss the C part soon.


2.2  Full syntax of the Pcpc and Reord2 command lines ( [] = optional part):

Command:   Pcpc(Reord2)  Options file1 [ file2 file3 ... file9]
Options:   [/Ppath] [/Dpath] [/A] [/B] [/T] [/U]

The Options may appear in arbitrary order but must precede the (list of) file
name(s). The leading '/' is interchangeable with '-' .
  The file names must NOT have a directory prefix (use the /P option instead)
nor a suffix (automatically ".pas" or ".pc1").

/P specifies the "path" where to find the .PAS files to be translated. Any Unit
   used by a file must exist as a .PAS file in the same directory, except for
   Dos, Crt and Graph. By default, "path" is the current directory.
   PCPC output files .PC1 are stored in the "path" directory, and Reord2 stores
   the .C result files there as well.

/D is the path where Pcpc will find its auxiliary files grammar5.txt, crt.pas,
   dos.pas and graph.pas. By default, this is the current directory.
   Reord2 ignores the option.

/A tells Reord2 to kill the Ansi function headers in order to obtain old-style
   K&R'78 C output. Pcpc ignores this option.

/B is the Build option. If it is present, the program translates only the first
   file of the list. However, every Unit on which it depends will be translated
   automatically. If /B is missing, Pcpc and Reord2 convert the list of files
   and check only the Interface part of any imported Unit.
   When the /B option is given,
      Reord2 -b file1
   creates two auxiliary files to aid with compiling and linking under C:
      Cfile1.bat  and file1.lnk.
   They are useless outside the MSDOS environment.
   See the example for MicroCalc below.

/T is a Trace option which sends debugging output to the screen.
   Currently undocumented. Ignored by Reord2.

/U is undocumented.


2.3  About the use of PCPC :

The files PCPC.EXE, REORD2.EXE, GRAMMAR5.TXT, CONVPAC.H and CONVPAC.C make up
the entire Pascal-C converter. That's NOT YET an independent public-domain
program since GRAMMAR5 is precious source text - I don't care for the EXEs.
CHEKGRAM.EXE is essentially a debugging tool for the maintenance of GRAMMAR5.
ANSIKILL.EXE is nothing but the part of REORD2 triggered by the -a option.
Please give GRAMMAR5 to anyone BUNDLED only with the COMPLETE source code and
documentation, which is copyrighted shareware. If you scramble GRAMMAR5 into
its binary memory image format, you may work out a faster PCPC.EXE which would
then be freeware, but bare of any documentation...

The size of buffers and data structures has been adjusted such that the two
parts of the converter work well from inside the integrated Turbo Pascal 4
environment: at least on the largest of its own files, on 640 K PC's
without bulky TSR programs.

When running, both PCPC and REORD2 put a fair amount of noise on the screen.
Every now and then, one more dot appears so that the user can be sure that the
program is still alive and she can stop it orderly with Ctrl-Break.
Things in the source code which don't appeal to PCPC trigger a two-line
message; a copy goes as a comment into the C output file.

Outside Turbo Pascal, you can start the converter by typing an old-fashioned
command line. For example, if you want to convert two files One.pas and
Two.pas  which are in the path \foo\bar , enter:

pcpc    /P\foo\bar One Two          ( the first pass makes *.pc1 )
reord2  /P\foo\bar One Two          ( the second pass makes One.c Two.c )
The  /P path specifier defaults to the currrent directory if omitted.

Here, I assumed that  pcpc.exe, together with the auxiliary files grammar5.txt,
crt.pas, dos.pas, graph.pas, was in the current directory. If pcpc is started
from elsewhere, supply an optional "codepath" specifier /C because Pcpc
isn't smart enough to know where it comes from.
   Example:
d:\util\pastoc\pcpc /Cd:\util\pastoc /P\foo\bar One Two Three

   It is said that, ( I was too conservative to check for details) above
certain version numbers of Dos and/or Turbo Pascal, the ParamStr(0) call
returns a program's full path name...

Any units on which the argument files depend must exist as source files *.PAS
in the "/P" directory. In fact, the first thing PCPC will do is to read the
interface source code af all Units which the file relies on, in a direct or
some indirect way.

In the package there are "system" files Dos.pas,
Crt.pas and Graph.pas which are quite different from the Dos.doc, Crt.doc
and Graph.doc header files (Copyright by Borland): they're uncommented and
written with my private extensions called "Sloppy Pascal". If your program uses
Printer, copy Borland's Printer.doc as Printer.Pas to your "/P"  directory.
Important: for subtle reasons the method doesn't work  for Dos,Crt,Graph.
Never did I try anything with the backward compatible Turbo3 & Graph3 units.
No equivalent C library for Dos/Crt/Graph exists yet in version 1.0 of the
software. Programs using Dos/Crt/Graph may be converted to C, they will
compile but won't link. Programs headed for export from the PC platform - the
initial motivation of this package - will avoid Dos/Crt/Graph, of course.
  The unit ex\crtdos.pas is my C-convertible substitute for Dos and Crt which
supports only the most popular features  (Read the comments in Crtdos).
  I should need the help of C aficionados to write the missing
libraries for me: as general as possible, even running on UNIX ?


2.4  Anti-bug Checklist, before an attempt at Pascal-C conversion:

- The software is a set of (20 or less) *.PAS files, each smaller than 55K.
- The Unit identifiers  are identical to the file names ($U not supported).
- The Include directive: not recommended (partial support for short Includes)
- Units Turbo3, Graph3 and Printer are unwanted.
- For export from MS-DOS, units Dos,Crt and Graph to be avoided.
- All identifiers are unique in the first 15 characters.
- Expressions are not too long ( string concatenations may saturate buffers).
- Type identifiers are longer than one character (... the ^T bug)
- There are no: Inline External Absolute Mem Port PrefixSeg Ptr @ ...  hacks.
- File I/O only by sequential, ASCII text Read/Write.
- The shortcut anyString[0] for Length is never used.
- Identifiers from Interfaces of used Units are mutually distinct.
  (qualified identifiers: not supported; identical re-definition: tolerated)


2.5   Compiling and linking the C output:

  After running Pcpc and Reord2, you get as many *.C files as you had *.PAS
files to start with.  Delete the intermediate *.PC1 files by hand.
If you're confident, you'll invent a simple batch file to chain PCPC and
REORD2 (with identical arg lists) and DEL *.PC1 , like this:

c:\pastoc\pcpc   -Dc:\pastoc  &1 &2 &3 &4 &5 &6 &7 &8 &9
c:\pastoc\reord2  &1 &2 &3 &4 &5 &6 &7 &8 &9
del *.pc1

   Your C compiler needs:
stdio.h, math.h  : very standard headers, always included via convpac.h.
stdlib.h         : included by convpac.c (but superfluous on old Unix?).
convpac.h        : any C output file starts with #include "convpac.h"
convpac.c        : the PCPC "system library"
ex\crtdos.c      : if your Pascal code uses Crt and/or Dos.
                   Crtdos is incomplete and non-portable outside MSDOS!
<product>.c      : all the output from PCPC + REORD2

    Compile all the *.c files into *.obj,  with the LARGE MEMORY MODEL.
Compiler errors reflect bugs or size limits of PCPC. In these cases, adapt the
Pascal sources to the constraints of PCPC (or repair PCPC and show me
your work) and restart.
Then, link together all those *.obj files (crtdos.obj only when needed), using
the standard libraries of your compiler. For Turbo C, these are:
  - the object module c0L.obj
  - the 3 libraries   emu.lib  mathL.lib   cL.lib


2.6   Self test of PCPC, Part 2  (suggested as an example) :

Move into the directory where you did the Pascal part of the self-test.
Let me suppose that you have Turbo C++ 1.0 on disk D in subdirectory tcpp.

* Make 3 batch files modeled after these:

--------------
rem cc.bat
d:\tcpp\bin\tcc -ml -N -c -Id:\tcpp\include %1 %2 %3 %4 %5 %6 %7 %8
--------------
rem bcc.bat
d:\tcpp\bin\tcc -ml -N -c -Id:\tcpp\include %args%
--------------
rem tlink.bat
d:\tcpp\bin\tlink /c d:\tcpp\lib\c0L @%1.lnk,,d:\tcpp\lib\emu d:\tcpp\lib\mathL d:\tcpp\lib\cL
-------------

The first one: CC invokes the C compiler with the correct options (large memory
model, check stack overflow, don't link) and takes up to 8 file name
arguments.

The second one: BCC runs the C compiler just like CC, but it takes its argument
list from a DOS environment variable (SET ARGS=.....). This is used in batch
processing: by one of MSDOS' peculiarities, a batch file which starts another
one by name, really does a GOTO; but a batch cannot pass parameters if it uses
the CALL command instead. We must use Call after Set, to get arguments across.

The third one: TLINK launches the Turbo linker with the case-sensitivity
option and the standard Turbo C startup code and libraries. It takes one
argument which is an auxiliary file (*.lnk) with the list of linkable OBJ's.

* Make sure that the first part of the self test made two auxiliary linker
data files (else "Ctrl-K W" them from here):

----------------
|  pcpc.lnk    |  3-line text file:  Obj file list , Exe file name
----------------
convpac pcpcdata pascannr semanti6 cdeclara+
cnesting cbulk getunits pcpcpars pcpc+
,pcpc

----------------
|  reord2.lnk  |  2-line text file
----------------
convpac getunits killansi reord2+
,reord2


* Make 2 more batch files (just block-write the following with the TP editor):

rem ctod.bat  :  rename all .c to .d
ren pcpcdata.c pcpcdata.d
ren pascannr.c pascannr.d
ren semanti6.c semanti6.d
ren cdeclara.c cdeclara.d
ren cnesting.c cnesting.d
ren cbulk.c cbulk.d
ren getunits.c getunits.d
ren pcpcpars.c pcpcpars.d
ren pcpc.c pcpc.d
ren killansi.c killansi.d
ren reord2.c reord2.d

rem fccd.bat   :  file compare all .c to .d
fc pcpcdata.c pcpcdata.d
fc pascannr.c pascannr.d
fc semanti6.c semanti6.d
fc cdeclara.c cdeclara.d
fc cnesting.c cnesting.d
fc cbulk.c cbulk.d
fc getunits.c getunits.d
fc pcpcpars.c pcpcpars.d
fc pcpc.c pcpc.d
fc killansi.c killansi.d
fc reord2.c reord2.d

* Now execute the following commands under DOS:

----  compile  the PCPC "system library"
cc convpac
cc ex\crtdos
----  compile the pcpc C code
cc pcpcdata pascannr semanti6 cdeclara cnesting cbulk
cc getunits pcpcpars pcpc killansi reord2
---- linking
tlink pcpc
tlink reord2
---- now you should have C-derived versions of pcpc.exe and reord2.exe
---- ( you could use the automatic way instead of cc and tlink:
----   Part 1 created  batches cpcpc.bat and  creord2.bat for you)
----  rename all .C files to .D for later comparison
ctod
---- use the C versions to redo the self-translation:
pcpc   -b pcpc
pcpc   -b reord2
reord2 -b pcpc
reord2 -b reord2
del *.pc1
---- compare the new .C files with the old ones (renamed .D)
fccd
---- you should find only minor differences (trailing blank lines ?)


* This brings the test of PCPC to an end and hopefully demonstrates that the
Pascal and the C version work alike for self-translation.
In your spare time, you might try the C version of CHEKGRAM and its three
parsers, too. The Turbo C versions execute appreciably faster than the
Turbo(?)Pascal 4.0 originals. Nothing astonishing about that: C never checks
any array indexes, whereas Pascal's $B+ option takes you on a safer route.


2.7   A second test:

You may check that the Pascal and C versions of pcpc + reord2  work
identically on Borland's MicroCalc as an input file set.

--- copy MC files from your TP4 distribution diskette to some directory "test"
copy a:mc*.pas test
--- run the converter, C version
pcpc -ptest -b mcalc
reord2 -ptest -b mcalc
---- save all the C files mc*.c
---- rerun the conversion from within Turbo Pascal 4, Pascal version of PCPC
---- compare the *.C files

Note that the C version of MicroCalc is useless! More about that later.
Nevertheless, let's look at the two auxiliary texts mcalc.lnk and Cmcalc.bat,
written by Reord2:

-----  mcalc.lnk ------
convpac crtdos mcvars mcutil mcdisply mcparser+
mclib mcinput mcommand mcalc+
,mcalc
-------Cmcalc.bat -----
rem Cmcalc.bat
set args=test\mcvars test\mcutil test\mcdisply test\mcparser
call bcc
set args=test\mclib test\mcinput test\mcommand test\mcalc
call bcc
set args=
tlink mcalc

The batch file would start the C compiler several times, using the Set/Call
parameter passing scheme and the BCC batch explained above.
The last line would start the linking process (see the TLINK.BAT example) with
the help of mcalc.lnk.
To translate, compile and link MicroCalc, you would type these 3 lines only:

pcpc -ptest -b mcalc
reord2 -ptest -b mcalc
cmcalc


2.8   A third test

This one demonstrates the limited Crt and Dos capabilities of PCPC.
Make sure that you have the files ex\crtdos.c, ex\toyedit.pas, ex\toymenu.pas
and ex\toytest.pas  with respect to your working directory.
   Warnings: If you remake ex\crtdos.c from the supplied ex\crtdos.pas, don't
forget the special -u option and patches mentioned in crtdos.pas. The macro
that invokes Turbo C's "intr" function may need some tweaking for other
brands of compilers.
   Now, play around under Turbo Pascal with "toytest" which is a trivial
split-screen text editor with some menus and a file pick list.
Then, translate it to C: (I use my "standard" batch files):

pcpc   -pex -b toytest
reord2 -pex -b toytest
Ctoytest

You are ready to play around with "toytest.exe" which is a trivial text editor
handling console I/O with slow BIOS calls.
   Despite an impressive number of warning messages from Pcpc on unsupported
Crt and Dos calls: the result works with Turbo C++ . Please let me hear of
bugs with other C compilers.


2.9   Exporting the PCPC software from MS-DOS  to the world

Many non-DOS systems have C compilers which do not understand ANSI prototypes.
To transport the PCPC programs to a Ridge Computer, I did the following:

- Run "pcpc" and "reord2" on themselves with the -A -B flags.
- shake the modernisms off  convpac.h and convpac.c:
  ansikill convpac.h convpac.c
  (makes  convpac.krh and convpac.krc, to be renamed properly)
  The "toexport.bat" command sequence (below)  automates these steps.
- Patch the "convpac.h" file to undefine the msDOS symbol,
  i.e. comment out the #define msDOS line
- Transfer all the resulting .c files, including convpac.h, convpac.c,
  grammar5.txt and "pcpc.bat"(see below) via serial link with Kermit programs.
- Compile and link everything on ROS using the following batch file (oh sorry,
  "shell script" out there).
- Transfer all the *.pas programs of this project
- Check that the self-translation works properly on the non-DOS computer.
  (self translation = lines 2 thru 7 of "toexport.bat", runs on both systems! )
- Now I can program in Turbo Pascal under ROS 3.3 !

----------------------------------
rem  toexport.bat  : prepare all PCPC software for export, under DOS
pcpc -b pcpc
pcpc -b reord2
pcpc ansikill gramtool chekgram
reord2 -a -b pcpc
reord2 -a -b reord2
reord2 -a ansikill gramtool chekgram
del *.pc1
rem  now kill the Ansi features in "convpac" files.
ansikill convpac.c convpac.h
ren convpac.c convpac.ac
ren convpac.h convpac.ah
ren convpac.krc convpac.c
ren convpac.krh convpac.h
echo  Now export all *.c files , convpac.h  and  grammar5.txt !
echo  Do not forget to mask the MsDOS flag in convpac.h !
rem  end of DOS batch  toexport.bat

----------------------------------
# pcpc.bat  :  compile and link the pcpc software on  ROS 3.3
# type this command line :
#  sh -v pcpc.bat
cc -c convpac.c
cc -c pcpc.c
cc -c pcpcdata.c
cc -c pcpcpars.c
cc -c semanti6.c
cc -c pascannr.c
cc -c getunits.c
cc -c cdeclara.c
cc -c cnesting.c
cc -c cbulk.c
#  link pcpc
cc pcpc.o pcpcdata.o pcpcpars.o semanti6.o \
   pascannr.o getunits.o cdeclara.o cnesting.o cbulk.o \
   convpac.o -lm -o pcpc
cc -c killansi.c
cc -c reord2.c
#  link reord2
cc reord2.o killansi.o getunits.o convpac.o -lm -o reord2
cc -c ansikill.c
#  link ansikill
cc ansikill.o killansi.o convpac.o -lm -o ansikill
cc -c gramtool.c
cc -c chekgram.c
#  link chekgram
cc chekgram.o gramtool.o getunits.o semanti6.o pascannr.o pcpcdata.o \
   convpac.o -lm -o chekgram
# end of batch
----------------------------------

Bugs: Away from DOS, the -p and -c options of PCPC and REORD2 won't work.
Directories and file names are glued  with "/" there, whereas this software
follows the nasty "\" convention of DOS.  It would be nice, too, to generate
standard "makefiles" for non-DOS systems.

I quickly tried out my code on some Hewlett Packard workstation (don't ask
me what model). It seemed to work, after substitution of any "cc -c" by
this:  "cc -c +Np1000"  (don't ask me what it means).


III. TRANSLATION STRATEGY
-------------------------

  This part explains the rules, exceptions and known bugs in PCPC for the
translation of Turbo Pascal features: Identifiers, Units, Directives,
Constants, Types, Variables, Expressions, Nested Procedures, Sets, Strings,
Records.
   Examples are taken from PCPC self-translates  and from translation runs on
Borland's MicroCalc which is part of the Turbo Pascal 4 package. MicroCalc is
heavily hardware-oriented and uses string index 0 trickery and the like, and so
the C outputs will never-never link together to anything useful. Yet, it's a
good example to demonstrate the limits of PCPC which I do not want to conceal.


IDENTIFIERS: Uniqueness and Scopes

Identifiers are arbitrarily cut to 15 characters.
PCPC identifier Scope Rules differ slightly from Turbo Pascal's (sorry):
The re-declaration of Interface identifiers of some "used" unit in the
Interface part of another unit gives a Warning. Things work well ONLY if the
second declaration is identical to the first one (Level 1). However, in the
Implementation part or in the global scope of the main Program file, imported
identifiers may be redeclared without damage (Level 2). As a related bug,
the "qualified identifier" syntax is not (yet) fully supported.

The Borland System library units (System,Dos,Crt,Graph) have a special
status: their symbols may be redeclared everywhere. I do NOT support the
Turbo3 and Printer units which were introduced for backward compatibility
and are not recommended for new Turbo Pascal projects.

-  The  System Dos Crt Graph  identifiers have scope level Zero (privileged)
   Interface parts of other imported Units: scope level 1
   Globals in Implementation or Main Program: scope level 2
   Locals of a global procedure: scope 3
   Locals of local procedures:  4,5,6,.... a maximum of 10 is allowed.

 - Pascal programs may legally re-use scope 0 (and alien unit scope 1)
   identifiers in its global scopes( 1,2) , using re-definition.

 - C programs MUST create new distinct identifiers: no inter-unit recycling.
   PCPC flags such identifiers with a counter ReUse>0. After translation they
   pick up an underbar prefix, e.g. _New (if ReUse=1) or _2New (if ReUse=2)
   [Cdeclara.auxSuffix].
   (No risk of collision since TP4 identifiers should begin with a letter)

-  Prefixing of ALL redeclared identifiers from the System unit, at any scope,
   allows PCPC to #define freely any System features as macros.

 - The scanner protects the code converter against Pascal user symbols which
   happen to clash with C reserved words or library items: those are all
   lower_case (rare: lowercase only with underbar prefix) or all UPPER_CASE,
   in the few header files I need. [Pascannr.AnnexId] always sets the
   first letter of Pascal or source file symbols to upper, and the last
   one to lower case. This screening trick may give ugly results. For the
   letters in between, the identifier tables retain the user symbols the way
   they appear for the FIRST time in the Pascal source code, and the code
   generator always writes them like that. Always compile the produced C
   programs leaving case sensitivity ON, the standard setting!

 - Use of the underbar:
   In Pascal, an identifier officially starts with a letter. While the TP4
   compiler tolerates leading underbars, PCPC decides to reject them
   (though an "undocumented" flag in PCPC will let them slip through ).
   As C identifiers may legally start with an underbar, PCPC has a device
   to create names that do not collide with any symbols of the Pascal input
   program or with the basic C keywords and libraries (stdio stdlib math).
   In fact, PCPC makes identifiers that have the format:

   uppercaseLetter (alphanumerics)
   underbar uppercaseLetter (alphanumerics)
   underbar numerics (alphanumerics)
   underbar lowercaseLetter numerics
   underbar lowercaseLetter uppercaseLetter (alphanumerics)

"Non-conflicting" aux. identifiers invented by PCPC:
  _s1 _sX ...  auxiliary String variables and operations
  _e1 _eX      Set variables, operations
  _mX _cX      memory moves and compares
  _rX _wX      read and write operations
  _0 _1 ....   internal unions and structs of variant records
  _l99...      numeric labels
  _nIdent      enums
  _Ident       reused Pascal "system" identifiers, for ex. _Pi
  _gIdent      auxiliary global Id to some local "Ident"
  _fIdent      nested function made global
  _pIdent      aux. parameter for nested functions
  _tIdent      globalised local type Id
  _1Ident      multiply defined global Ident


UNITS:

  Upon translating a Unit, PCPC does not create separate header and code files.
Instead, the imported declarations from used Units are echoed in any output
file (with "extern" prefixes for data) and the own interface declarations
are written without storage class (implicit "global"). Global data and
functions appearing in the Implementation part pick up the "static" prefix to
prevent linkers from knowing about them.

COMPILER DIRECTIVES:

  These comments {$...} or (*$...*) are not treated with mathematical rigour.
  Compiler switches are initialized (one boolean per uppercase letter) with
  the TP4 defaults. Their state is monitored but has no immediate effect on
  the code generator, only an indirect one with IFOPT.
  The one-letter directives  L M U are completely ignored.

  Source file inclusion {$I...} is supported with severe size restrictions:
  PCPC physically inserts included files into the 50K source code buffer,
  hence the main file PLUS all included files must be smaller than the buffer!
  The Included file must not have its own directory path and must be in the
  same directory as the main file. Aborted inclusions will upset the parser
  as it encounters the first undefined-but-used item.

  To support the DEFINE and UNDEF directives, a buffer of 20 strings keeps
  track of defined symbols. Predefined: VER40, MSDOS, CPU86 but not CPU87.
  PCPC makes no effort to detect a coprocessor. A fourth predefined symbol
  (PCPC) allows for translator-specific code (debugging...).
  Conditional compilation directives IFDEF IFNDEF IFOPT ELSE ENDIF are
  understood up to a nesting level of 16. PCPC behaves like a compiler
  and handles only the unmasked code fragments. This means that no compiler
  directives are generated in the C output. To translate the conditionals would
  require the management of multiple threads of symbol tables...


CONSTANTS:

 Real, String and Structured Pascal Constants are translated in C as  Static
 Initialized variables, in order to respect scopes: [Cdeclara.ConstDeclare].
 Big integer-type constants translate to #define directives, because
 of their predominant use as array bounds. The resulting scope bugs are not
 yet tackled in this version. Small integers and char constants are coded
 with funny "enum" declarations to circumvent the scope problem.
 The ANSI-C "const" keyword goes beyond K&R, so I could not use it.

Examples: Pascal integer,real,string,set and char constants --> no #define !

const
  EXPLIMIT = 88;
  SQRLIMIT = 1E18;
  MSGHEADER = 'MICROCALC - A Turbo Pascal Demonstration Program';
  DEFAULTFORMAT = $42;
  COMMAS = $20;
  DOLLAR = $10;
  LETTERS : set of Char = ['A'..'Z', 'a'..'z'];
  NULL = #0;
  BS = #8;
---------------------------------------------PCPC output:
typedef enum {EXPLIMIt=88} _nEXPLIMIt;
Real SQRLIMIt=1E18;
char *MSGHEADEr="MICROCALC - A Turbo Pascal Demonstration Program"
;
typedef enum {DEFAULTFORMAt=66} _nDEFAULTFORMAt;
typedef enum {COMMAs=32} _nCOMMAs;
typedef enum {DOLLAr=16} _nDOLLAr;
Set LETTERs=
{0x0000,0x0000,0x0000,0x0000,0xfffe,0x07ff,0xfffe,0x07ff,0x0000
,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000};
typedef enum {NULl='\000'} _nNULl;
typedef enum {Bs='\010'} _nBs;

Constants in CASE labels may be integers, enumerates or characters. CASE
intervals are only supported up to a length of 15: the C output is an ugly
list of individual "case" lines, one for each interval member.
Pascal const declarations for Integers and chars become "enum" typefs
in C (scope awareness). Whenever such a constant identifier is used in
expressions, it is typecast to (long). This is because some C compilers do
not allow comparison operators between enums and integer types.

TYPES:

Sets and Strings are reproduced as arrays in C. The elegant Pascal
operators + - * IN, comparisons,... applied to these objects, translate into
awkward function and macro calls. Quite a few intermediate local variables
must be created for the C version of the program.
Bytes become wasteful "unsigned short" in C. Signed "char" could have been used
instead, with nasty sign-extension clipping (x & 255) in all expressions?

Examples for enumeration,string,pointer,record:
type
    idClass=
  (constId, typeId, fieldId, varId,  functId  );
  str8=string[8];
  ptpel=^tpel;
  tpel= record
      cl: char;
      l: longint;
      m: longInt;
      hook,
      p,q: ptpel;
      tName: pide;
      ixName:pide;
  end;
---------- PCPC output:

typedef enum {ConstId,TypeId,FieldId,VarId,FunctId} IdClass;
typedef Char Str8[9];
typedef struct _gTpel *Ptpel;
typedef struct _gTpel {
    Char Cl;
    Longint L;
    Longint M;
    Ptpel Hook;
    Ptpel P;
    Ptpel Q;
    Pide TName;
    Pide IxName;
  } Tpel;

EXPRESSIONS:

The operator precedence rules for Pascal and C differ quite a bit.
I gave tightest binding operators the lowest numbers. PCPC keeps track of the
binding force of the expressions on stack, to decide when to add parentheses.

Operator precedence for Pascal:

 1:  NOT  @
 2:  * / div mod and shl shr
 3:  + - or xor
 4:  = <> < > <= >= in

For C:

 0:  () [] -> .  identifiers
 1:  Unary   ! ~ -- ++ - * &  f(x) (typecast)
 2:  * / %
 3:  + -
 4:  << >>
 5:  < <= > >=
 6:  == !=
 7:  &
 8:  ^
 9:  |
 10: &&
 11: ||
 12: =

If the C precedence differs from the Pascal order, PCPC puts parentheses
around the loose-binding part ( higher C precedence number but lower Pascal
class number).

While PCPC is in the statementPart, all expression strings are accumulated on
a stack ( [Cdeclara.expStack]), and retrieved when the operator comes in (the
parser elaborates kind of a postfix order for expression trees).
Parentheses are added as follows: If a newcoming operator (unary or binary)
has a lower level (= higher binding force) than the last one used, say,
in the left operand, parentheses go around that operand.

Pascal string concatenations +..+..+ and set constructors
[...] are expressions of the "list" type: I do not know how many items I get.
They cannot generate code for a single C function call: restricted ANSI C
functions, the only ones I admit, have a fixed number of parameters. There is
no mechanism to generalise the flexible parameter scheme of library functions
such as "printf": the ellipsis (...) prototyping is unheard of in 1978
Kernighan-Ritchie, so I never use it. The comma operator provides the way out.
For example, the set constructor yields a comma expression ( , , , ) of calls
that add the elements to a temporary set variable, one by one. The last sub-
expression returns the pointer to that set (= an array of Words), the final
result:  PCPC produces slow, dirty code for set arithmetic.

ASSIGNMENTS:

Simple vairable assignments can be handled with the = expression in C.
Array,set,record,string ... assignments translate into appropriate macro calls
which know about the size of the objects to be copied. There is one quirk in
C which I discovered rather late (Turbo C++ Programmer's Guide, p. 82): When
an array A appears as a parameter of a function, sizeof(A) is the size of a
POINTER, even if the function prototype declares some array type!  PCPC catches
this situation and outputs sizeof(the_type) instead of sizeof(the_variable)
in those cases. Perhaps some bugs still lurk on "semilocal" arrays (see below)
which are artificially converted into parameters...


PROCEDURES & FUNCTIONS:

In ancient C, unlike Pascal, arrays and records may not be passed as value
parameters or appear as function results . The translator handles those
parameters as pointers and explicitly creates local copies for structured
types passed as value parameters.  However,
inspection of Pascal source texts shows that in many instances the "logical"
local copies are never used as alterable storage and only waste space and time.
The current version of PCPC does not detect this "not threatened" condition,
missing a chance of optimization.
Translation rules for array parameters (arrays, strings, sets) account for C's
pointer-array equivalence.

To support String-valued functions, the translator inserts a pointer to the
result string, as a first argument. The caller provides the necessary
auxiliary string storage on its local stack.

Slight type corrections in call-by-value situations are made: a char argument
gets "stringized" when the function asks for a formal string parameter; a short
integer argument undergoes a typecast to (long) if that's the formal parameter
type. An ANSI C compiler would handle the latter situation automatically, but
in K&R C, a forgotten typecast is disastrous.

LIBRARY PROCEDURES:

In my convpac.c library, a Turbo Pascal standard procedure with an optional
parameter has two C versions: the one without the parameter has its last
character converted to upper case.
For example, PCPC produces the code:
  InC(X);   Inc(X,3);
  ReseT(F); Reset(F,128);

System procedures with weakly defined numeric arguments produce different C
function calls, according to the actual parameter type:
  Abs(x)      Val(s,x,err)            if x is a (short) Integer
  ABs(x)      VAl(s,x,err)            if x il a long integer
  AbS(s)      VaL(s,x,err)            if x is real

The DOS linker  must be case-sensitive, of course.

The following assembler-like primitives are declared in Convpac.h and used
in addition to the Turbo Pascal system procedures. I introduced the comparison
opcodes  h:=   G L g l E U  for:  >  <  >=  <=  ==  != .

_mY(a,b)        array a:=b  (sizeof(a) known)          MEMORY MOVES
_mR(a,b)        record a:=b
_mA(a,b,n)      array a:=b, copy n bytes
_mV(a,b, n)     string a:=b, n bytes
_mF(a, n,c)     fill string a with char c, n bytes
_mC(h, a,b, n)  compare objects a,b: n bytes, operation code = char h = EU.

-cA(h,a,b)      compare arrays a,b with opcode h= EU    MEMORY COMPARES
_cR(h,a,b)      compare records a,b with       h= EU
_cF(h,a,b,n)    compare n bytes of a,b with    h= EU
_cS(h,a,b)      lexical compare null-terminated strings a,b, h= GLglEU
_cL(h,a,b,n)    lexical compare n bytes of char-arrays a,b,  h= GLglEU
_cE(h,a,b)      bitset compare Sets a,b, opcode              h= glEU

_eE(s,x)        add simple object x to Set s           SET OPERATIONS
_eR(s,x,y)      add interval x..y to Set s
_eE_(s, n)      add short int n to Set s
_eR_(s, x,y)    add short int range x..y to Set s
_eIn(x,s)       test if x is in Set s
_eU(s, a,b)     s:= Union of sets a + b
_eI(s, a,b)     s:= Intersection of sets a * b
_eD(s, a,b)     s:= set difference a - b
_eV(s)          s:= empty set []
_eC(s,n)        -- reserved --

_sI(s,t)        string s:=t                            STRING OPERATIONS
_sS(s,t)        string s:=s+t
_sM(s,t, n)     string s:=s+t,  length(s) cut to n bytes
_sK(s, k)       s:= one-char-string with char k
_sL(k, s)       _sK with inverted args
_sC(s, k)       add char k to string s
_sY(a, b, n)    add array b to string a,  n characters
_sA(a, b, n)

_wN()           write newline                          BIOS CONSOLE OUTPUT
_wC(c)          write char c
_wK(c, n)       write char c in field of size n
_wS(s, n)       write string s in field of size n
_wI(i, n)       wtrite long int i in field of size n
_wF(f, n,m)     write float  f with format n:m

_rN()           read   newline                         BIOS CONSOLE INPUT
_rC(c)          readln char c
_rS(s)          readln string s
_rI(i)          readln integer i
_rF(f)          readln float f

NESTED PROCEDURES:

 Untangling of nested procedures  is achieved by adding parameters.
A schoolbook case may be the translation of mutually recursive routines, one
of them defined inside the scope of the other. This is common in recursive
descent parsers like the one used in PCPC.

The following 2 principles underlie my design:
Never create auxiliary variables on the heap, to avoid complicated
  memory initializations and managements!
Never create them as global variables, in order to keep re-entrant Pascal code
  that way!

As a consequence, auxiliary variables are either "automatic", local to the
procedure that uses them or appear as additional parameters in the procedure
declaration (= the ANSI prototype).

Let me define a
   "SEMILOCAL" symbol
as an identifier that is declared neither in the global scope nor in the local
one of a nested procedure/function, but at an intermediate scope level.
The interesting case is the use of such a symbol at an innermost level. All
these "semilocal" data references give rise to additional pointer-type
parameters in an extended procedure header; only then the nested procedure may
be lifted to the global context, as required by C.

PCPC creates C function parameters for all SEMILOCAL data symbols.
I end up with 6 different contexts for such an object:

1.  Origin,      some outer procedure declares a VAR or a var/val parameter
2.  Use,         in the procedure where it originates
3.  Use,         in the body of an INNER procedure
4.  Declaration, in the header of the inner procedure to be made global
5.  Call,        parameter passed from the procedure declaring the symbol
6.  Call,        by another procedure inside the scope of symbol's origin

A Pascal program has the symbol in places 1 to 3 only, the translator
must add them in places 4 to 6. The C version will pass them as pointers
(addresses) between the procedures involved. When PCPC first encounters a
semilocal symbol, the C code generator adds it to a list for the current
procedure. In a later propagation phase, second and higer-order semilocals
are filled in: such symbols aren't needed immediately by the nested procedure
but by another non-global procedure which it calls, directly or not.
A translation table for the 6 contexts figures in pcpccode.txt, as well as an
example of code.

Semilocal Const and Type declarations are promoted to the global level.
The corresponding identifiers go into some special symbol list since they may
get lost otherwise. During the propagation phase for indirect auxiliary
parameters, the scope context for these identifiers and their
type qualifiers may no longer exist.

Currently, the unnesting machinery has a bug: It loses "anonymous semilocal"
types. That happens when you declare a semilocal variable with an explicit
structured type that has no name of its own (typical Pascal construct:
  var X: record .....  end; ). The C code generator still is unable to insert
the correct type info into the expanded ANSI prototypes of globalised
functions that use such a variable. PCPC does some guesswork on arrays and
pointers, but a no-name semilocal record type definitely gets lost.
To circumvent this bug, make explicit TYPE declarations in your Pascal source.
Future versions of PCPC will create adequate global typedefs.


POINTERS:

PCPC thinks of Pointers as 32-bit entities with an offset and a segment part.
( do not use the Ofs Seg Ptr  functions, however, if you want portable
programs). The MS-DOS based C compilers should work in the LARGE memory model.
The generic Pointer data type of Turbo Pascal is implemented as (char *):
unfortunately, the (void *) is not portable to classical C compilers.
Bug 1: Pascal may declare a pointer type to some base type BEFORE the
base type declaration; PCPC supports this order ONLY IF the base type
is a RECORD. In fact, that's the most reasonable use of "forward" pointers,
in list and tree structure declarations.
Bug 2: Taking the address of a procedure/function does not work at all.

SETS:

In C, a Set is rendered as an array of 16 2-byte words and occupies 32 bytes.
Set constants, in typed const declarations, generate an initializer code for
such an array with hexadecimal elements. Pascal's readability is gone...
Example for set expressions:

procedure testLL1( var conti:contiTp);
var  t,common:termSet;
begin
    calcFirst(prodList[k], t);
    if not (0 in t) then conti[k]:=t
    else conti[k]:=(t - [0]) + follow[prodList[k,0]-256];

--------------------------- PCPC output:
void TestLL1 (Conti)
ContiTp Conti;
{
  TermSet T,Common;
  Set _e1, _e2, _e3;
    CalcFirst(ProdList[K-1], T);
    if(!(In(0,T))) _mY(Conti[K-1],T);
    else _mY(Conti[K-1],_eU(_e3,(_eD(_e2,T,(_eV(_e1),_eE(_e1,0
    )))),Follow[(ProdList[K-1][0]-256)]));


STRINGS & CHARACTERS:

 The string constant scanner does recognize the ^C - kind embedded control
  characters even if the hat symbol is the reserved Pascal token for
  pointers. My ad-hoc strategy: When '^' is followed by one uppercase letter
  AND one non-alphanumeric, the scanner thinks there's a Control character.
  This gives rise to a  parsing bug: If a Pascal program declares a Type
  identifier T which is 1 character long (perfectly legal), the
  corresponding  pointer type (syntax ^T) is mistaken as a control char.
  Rules:
    1. Never declare one-letter type names!
    2. Recode the ^C  characters by using the # symbol.
  As an  excuse, I might mention that the ^-character syntax has become an
  "undocumented feature" of Turbo Pascal Version 4, intended to be
  dropped in modern programs.

In string and char constants, the special IBM-PC characters above 128 are
written in the \ddd octal format, so that the output C file contains only
standard ASCII; I avoided even the Tab character.

Pascal Strings are mapped into C's null-terminated arrays of char.
Two possible bugs derive from this transformation:
1.) The widespread Pascal trick of direct access to the length at
index zero (or worse, using an Absolute variable overlay) is not portable
with this translator. Only disciplined string constructions like concatenation
and library functions, and the use of the Length function, give good results.
2.) Pascal strings which explicitly contain the #0 character are ill-behaved
in C: my substitute for the Length function thinks that the object
stops when it runs into the first '\0' !

I had a portability problem in some Pascal code passing strings to MSDOS
interrupts: The pointer I made (= stringAddress+1) got the first character
right in Pascal but skipped it in C! My new rule was: Never use Pascal strings
to interface with the System, make arrays-of-char instead.

The C code is clumsy due to a lot of intermediate concatenation variables.
Example:
  Cfile:=dataDir + sourceName[iRun] + '.pc1';
Translation:
  _sM(Cfile,(_sI(_s1,DataDir),_sS(_s1,SourceName[IRun-1]),_sS(_s1,".pc1")),40);

Note that the character s[1] of Pascal string s becomes  s[0] in the C code,
and that PCPC doesn't support Pascal's  length(s)=ord(s[0]) .

C chars are signed (C compilers with unsigned chars are too sophisticated
for my purpose), so any comparison operation involving them has macro calls
which chop off the unwanted char->int sign extension:
 c > d  becomes Lo(c) > Lo(d)  ,  where Lo(x)  means  (x) & 0xff .


VARIANT RECORDS:

Records which have no variant part are mapped to C's  struct declarations.
Records with no fixed part (and anonymous! case selector) are mapped to C union
code. General variant records yield a struct with a union inside.
If there is a union, each one of the Pascal case clauses makes up for another
struct inside it, except when there's only one data item in that case clause.
The internal structs have dummy identifiers _1 , _2 , _3 etc.
The internal union has the dummy identifier _0 in C.
Thus, a Pascal record.field  variable R.F  may translate to one of these
horrible things: R.F  or  R._0.F  or  R._3.F  or R._0._3.F .
The case label's value has no equivalent at all in the C output.

Example: pascal record  --->  a nested struct-union-struct:
type
  IString = String[MAXINPUT];
  CellRec = record
    Error : Boolean;
    case Attrib : Byte of
      TXT : (T : IString);
      VALUE : (Value : Real);
      FORMULA : (Fvalue : Real;
                 Formula : IString);
  end;
  CellPtr = ^CellRec;
--------------------------------PCPC output:
typedef Char IString[80];
typedef struct _gCellRec {
    Boolean Error;
    Byte Attrib;
    union {
      IString T;
      Real Value;
      struct {
        Real Fvalue;
        IString Formula;
      } _3;
    } _0;
  } CellRec;
typedef CellRec *CellPtr;

   It is legal in Pascal to write nested Case lists inside a Case clause of
a variant record. Such things, like other complicated type nestings, are NOT
supported by this translator and result in an awful lot of nonsense in the C
output, without a warning from the program! That's a bug of this software
I might cynically apologize for, by calling it a punishment for obscure coding
practices. If anyone can give me valid arguments in favour of case-inside-case
records, I'll consider implementing them in an upcoming version, even if that
will gratify us with R._0._3._100._103.F in C.
  Using the same field tags _0 _1 etc. for all variant records may be a bug
in old C compilers: Their field identifiers, even for quite unrelated
records, are drawn from a common pool and must be essentially unique.

FILES:

The only practically portable thing is a Pascal TEXT file. And only if you try
to ignore the precise anatomy of end-of-line markers: use Eoln and Readln to
get across lines, do not assume there's a CR-LF pair!
BUG: Under MS-DOS, the Pascal and C versions will react in a different way on
CR without a subsequent LF in a file:  Pascal will flag Eoln(), the PCPC
translate will NOT!

------------------------------------

Size restrictions on the Pascal source code:

- No source file may be longer than 55 k bytes, including {$include ...}s.
- A global procedure or function text, including all its locally nested
  functions,  must be smaller than 60 k bytes in the intermediate .PC1 file.
- Any identifier is truncated to 15 characters.
- There may be no more than 10 active records inside WITH constructs.
- The scope nesting of procedures/functions is restricted to 15 levels.
- Nesting of function calls, parentheses, operators and other
  EXPRESSION-generating features is limited to a total of 10.
- There can be at most 20 arguments in a Read/Write list.
- The number of auxiliary parameters, to be added to a local procedure
  which is lifted to global scope, cannot exceed 40.
- The longest Strings have 255 characters.


   Error handling:

Suppose that you feed PCPC with a Program (or Unit) file that compiles
well under Turbo Pascal 4.0.
PCPC may still get lost on a more or less catastrophic path :

* A severe bug: PCPC goes into an infinite loop or hangs otherwise;
    stack or heap overflow;  pointer, index or variable out of range,....
    In spite of thorough testing, I cannot guarantee that there is no such bug.
    Please send the fatal Pascal code to the author. The worst known problem
    is the handling of undefined or redeclared identifiers (PCPC can be wrong
    on identifiers, being blind beyond 15 characters or ignoring Include
    directives). The scanning may go on but some semantic actions (heap
    activity!) are suppressed, leaving inconsistent pointers.
    A radical solution would declare identifier errors as Fatal and halt the
    program; I felt that would be an overkill, in this version.
* A bug in the grammar specification Grammar5.txt:
    This brings the parser to a halt with a message of the type "This symbol
    not allowed here" or "Another symbol expected" or "Undefined identifier".
    I tried to get very close to the Turbo Pascal syntax diagrams,
    but there still are some deviations. In particular, Constant Expressions
    which may appear instead of constants in TP versions higher than 4, are not
    supported; minor uses of sizeof and typecasts aren't recognised, either.
    If you discover a serious parser bug, please send a sample of the
    offending Pascal code to the author.
* Pascal constructs like "Inline", "Mem", "Port", "External", "Interrupt",
    which are not yet supported (or will never be):
    PCPC prints a message about the unsupported feature and goes on.
    Unsupported items have a _forbidden marker in the grammar rules.
* A procedure or function is called which is declared in the "System" unit
    but there is no proven C library code for it in the "convpac.c" file
    (for example "randomize" has C code, but I didn't any tests yet):
    PCPC prints a message "This function has no C code" and goes on.
    C compilers will produce OBJ files but linking might fail.

Whenever PCPC detects a problem, a message goes to the screen AND into the
output file *.PC1, as a comment.
        There are three levels of messages:
- Warnings have a question mark at the end?
    Formal translation is still possible.
    example: unsupported library function
- Errors end with a period.
    The C output code may be erroneous or incomplete.
    example: unsupported feature like Inline
- Fatal errors have the exclamation mark!
    Translation must be stopped as soon as possible.
    example: non-declared identifier.



```
{% endraw %}

## PCPCINFO.TXT

{% raw %}
```
PCPC  (Version 1.0)  Product Information                       August 1991

    PCPC stands for Post's Conservative Pascal-C Converter. This utility may
be useful to Pascal programmers unwilling to turn into C hackers. It runs on
industry-standard personal computers and comes entirely and exclusively
in SOURCE CODE (there's 400 K of Turbo Pascal;  a grammar text file, C library,
documentation, examples: a total > 600 K).
    No .COM .EXE .TPU .OBJ .LIB ..., no trade secrets, no viruses!

Recommended system:
- IBM-PC AT computer or compatible machine with 640 K of RAM
- MS-DOS version 3.3
- TURBO PASCAL compiler version 4.0
- any good C compiler with a Large Memory Model under MS-DOS

    The code is SELF-TRANSLATING and produces its own C version, running under
Turbo C++ and with Unix C compilers, for example. "Conservative" means that
PCPC generates 1978 K&R-C .
  ANSI function prototypes are the only extensions; stdio.h, stdlib.h and
math.h are the only library references. An option strips the ANSI features
down to old-fashioned function declarations: use PCPC as a bridge to move
Turbo Pascal programs (like the converter itself) to traditional UNIX systems.

    PCPC supports strings, sets, variant records, typed constants, units,
and nested procedures and functions, even if they are mutually recursive.
The generated C programs don't allocate any auxiliary global or heap memory:
only auxiliary stack variables and parameters are used so as to preserve any
re-entrant code.

    PCPC relies on a "human readable", formal grammar specification file for
Pascal and comprises tools for LL1 parser generation. Three parsers account for
various speed/memory tradeoffs. The scanner & symbol-table-manager & parser &
semantic-action modules of PCPC should be general enough to serve other
purposes, such as smart pretty printer utilities.

    PCPC is designed to translate all reasonably PORTABLE features of Turbo
Pascal 4.  PC-BIOS, MS-DOS and Intel processor specific details are somewhat
neglected. You may want to use PCPC on "algorithmic" programs migrating away
from MS-DOS to any other platform where the ubiquitous C is available, but
Turbo Pascal is not.

    Here's what I did NOT debug thoroughly (albeit formally translate)
    in release 1.0 (obviously, my source code refrains from all that):
- Unsafe constructs (which offend program flow structure or strong typing):
    goto, exit, absolute, move, fillchar, addr, @-operator, ptr,
    typeless parameters, generic pointers, typecasts, sizeof,
    string index 0 to handle length.
- Intel processor idiosyncracies and assembler interface:
    inline interrupt external mem port  ptr ofs seg cseg dseg sptr sseg
- Advanced file and directory manipulations (lack of time and portability):
    chDir mkDir rmDir getDir
    flush seekEof seekEoln seek truncate
    setTextBuf blockread blockwrite
- qualified identifiers
- Units DOS, CRT, GRAPH. (Turbo3 and Printer are deemed obsolete).
- Odds and ends:
    mark release random randomize

DISCLAIMER:
  The author makes NO WARRANTY that the PCPC program is fit for any particular
purpose. In no event shall the author be liable for any kind of loss or damage
related to its use.


License policy:

  PCPC is distributed as SHAREWARE and is NOT public domain or free software.
The author retains the Copyright on all of the Pascal *.PAS and documentation
*.TXT files. These texts represent all the human work.
  Any *.C and  *.H files, and uncommented C and binary files mechanically
derived by self-translation or compilation, are public: copyright claims
on them are void.
  You may test this software as you like  and duplicate it for others.
Users on a regular basis, commercial users and institutions, are asked
to license the product:
  Send your name, address, and a fee of 80.00 French Francs to the author.
Customers will receive a free upgrade to the upcoming version (1.1)  on a
3.5" disc, in early 1992.
  Add 20.00 FF for shipping outside the European Community.

  REGISTERED USERS are granted the right to include any part of PCPC source
code in their own programs and are free to give away or sell any  EXECUTABLE
or  C CODE  produced with the help of PCPC.
You may pass along PCPC Pascal SOURCE code and documentation TXT files,
modified or not, ONLY IF you include this package as a whole, without
removing any copyright or license statements.

    Bulletin board system operators and mail order distributors who want to
supply PCPC (with a moderate charge for their services) should:

1. Deliver the complete package which includes this licence information.
   To keep viruses out, no binary code, other than proven file compression
   utilities, should be used on it, or added to it.
2. Clearly explain to their customers that the unlimited use of this
   software still requires a registration with the author.


Please send your  suggestions, patches, bug reports, registrations,  to:

   Georg Post                          My Postal Check Account is:
   65, rue Racine                          CCP  LA SOURCE
   F-92120 MONTROUGE                       31 554 26 B
   France
```
{% endraw %}

## PCPCLOG.TXT

{% raw %}
```
PCPC.LOG      Journal on Post's Conservative Pascal-C Converter        G. Post

27 Feb 91:
----------
  Test version promoted  0.1 --> 0.2.
  First successful self-test: PCPC under Turbo Pascal 4.0  translates the 7
  modules (pascannr,semanti5,pmachine,cdeclara,cnesting,cbulk,getunits,pcpc)
  of its own code in 16 minutes (options {$R+,S+} , AT clone at 8 MHz ).
  Post-processor REORD2. Compiler Turbo C 1.0 (large model).
  Linker Microsoft Link under MSDOS 3.3: 1 fixup overflow error, ignored.
      Linker command file was:
---------------------------------------------------------------
\turboc\c0L+convpac+
pascannr+semanti5+cdeclara+cnesting+cbulk+pmachine+getunits+pcpc
pcpc  /stack:50000
pcpc
\turboc\emu+\turboc\mathL+\turboc\cL
;  Usage:  link @pcpc.msl
;  4 entry lines: .OBJectFiles, .EXEfile, .MAPfile, .LIBraries.
;  for math stuff, start last line with: \turboc\emu+\turboc\mathL+
------------------------------------------------------------------------
  "Bootstrap" Ok: The 100% C version PCPC.EXE handles the 7 Pascal modules in
  less than 8 minutes: identical results checked by FC.  One serious Bug:
  it doesn't manage the heap with RELEASE, one single command-line argument
  is allowed.

10 Mar 91:
----------
  Grammar check utility Chekgram: the state-table driven LL(1) parser works!
  New syntax definition file Grammar5.txt still has >= 2 deviations from TP4:
   - Before the ELSE clause of a CASE statement, this syntax does need a ";"
   - typecast Variables and  (pointer-valued function call)^  are NOT accepted
     to the left of an assignment (severe error)
     and as an argument to the @-operator (minor bug).
  Very clumsy enhanced grammar would help. LALR more elegant ?
  A stub semantic action "forbidden" flags unimplemented features: work on
  semantic actions and translator code for them is in progress.
  The Scanner still lacks a lookahead buffer and misses 2 more TP4 features:
   - the old control character syntax ( ^C ^[ ...)
   - the Qualified Identifiers <unitId>.<identifier>

1 May 91:
---------
  After too many system crashes with the Turbo C 1.0 compiler (experienced
  with C files bigger than 1000 lines, in the Integrated Environment)
  I switched to my new Turbo C++ 1.0. Seems to be stable, math library has been
  included anew, no more fixup overflow on linking, Microsoft Link no longer
  necessary. The "IDE" of Turbo C++ is my official test environment now.
  Compiler options: Large Memory Model, ALL warnings enabled.
  First code size comparison: a small 2-unit Pascal program, EXE file size
  15k with TP4, was translated to C, compiled and linked with TC++: the EXE
  output had 85k !?


12 August 91:
-------------
  PCPC and REORD2 earn the version number 1.0
  Test of the pre-ANSI C version of the software on Unix system successful.
  No test yet with a Microsoft C compiler: I do not own one;  I don't want
  to buy or borrow one:  I'd hate to run out of disk space!



  Distribution of the finished program as shareware:
  America and Europe.
  US mail-order company best-known in Europe, too, for shareware:
       PC-SIG
       1030-D East Duane Avenue
       Sunnyvale, CA 94086
```
{% endraw %}

## PCPCMESS.TXT

{% raw %}
```
PCPCMESS.TXT              Copyright (c) 1991   by  Georg Post

  MESSAGES FROM PCPC
-----------------------

Here is the list of warning and error messages produced by PCPC and inserted
into the C output. Fatal Errors end with the exclamation mark, Warnings end
with a question mark, the rest is other errors.


Pointer [xxxx] gone wild!                            [pascannr.rangeCheck]
   Fatal pointer bug in PCPC. xxxx is a hint to the subroutine which attempted
   to write to out-of-range pointer memory.

Expect here xxxx !                                   [pascannr.expect]
   Syntax error in the source code, with respect to the "Grammar5" rules.
   xxxx is the kind of symbol that the parser expected to find here:
      Number
      String const
      <start of an explicit production rule> (grammar nonterminal symbol)
      <any Pascal keyword or symbol>
      constId        constant identifier
      typeId         type identifier
      fieldId        record field identifier
      varId          variable identifier
      functId        function name
      procId         procedure name
      varParId       procedure VAR parameter name
      valParId       procedure value parameter
      fileId         File or Text variable
      forwId         forward declared type identifier (in pointer declaration)
      unitId         unit name
      labelId        label identifier

Maybe here xxxx !                                   [pascannr.expect]
   Syntax error in the source code, with respect to the "Grammar5" rules.
   xxxx is ONE OF the symbols that the parser expected to find here.
   See the list for Expect here ....

[annexId] redefined Id?                             [pascannr.annexId]
   A global identifier has been redeclared. This is tolerated in the
   interface sections of a pair of Units, if-and-only-if the second
   declaration has the same effect as the first one (example: the color names
   in Crt and Graph).

[annexId] linkage bug ?                             [pascannr.annexId]
   Internal bug of the annexId routine, in cases when a new identifier
   overrides an old one with the same name. Should only occur when the reuse
   is illegal in Pascal.

[treatsymbol] Redefined id?                         [pascannr.treatSymbol]
   A symbol which was already declared is redefined in the same block.

{$define} symbol overflow!                          [pascannr.defDirective]
   PCPC has a stack of only 20 compiler-switch symbols.

Unknown Directive xx                                [pascannr.doDirective]
   PCPC finds a compiler directive {$xx ...} which it cannot understand.

Why include xxxx ?                                  [pascannr.doInclude]
   PCPC found a {$I xxxx } file inclusion directive and is just sorry about
   not liking such things.

No room to Include xxxx                             [pascannr.doInclude]
   The included file, inserted into the main file, won't fit into PCPC's
   55k buffer.

Input buffer overflow!!                             [pascannr.readSource]
   The Unit or Program file is too big for PCPC's 55k buffer.

QualIdent not found!                                [pascannr.qualIdent]
   A qualified identifier (unitId.globalId) whose origin PCPC cannot detect
   without ambiguity. Proper conversion to C is difficult since Units
   translate to separate, linkable .C files: Globals must be unique across
   all imported  Units and the main file.

[pointSymbol] Dot not allowed                       [semanti6.pointSymbol]
   The dot "." was used following a non-record identifier.

[arithbin] illegal arith (X+Y)                      [semanti6.arithbin]
   An arithmetic operator was used between non-compatible types.
   X and Y are the type element symbols as listed in Pcpcdata.pas

[arithuna] illegal arith                            [semanti6.arithuna]
   A unary arithmetic operator is used on the wrong data type.

[logop] XY operands                                 [semanti6.logop]
   A logical operator is not supported between types X and Y.

[comparop] String comparison                        [semanti6.comparop]
   A string may not be compared to a non-string.

[comparop] illegal comparison                       [semanti6.comparop]
   Comparison operator was used between non-compatible types.

[checkProcPar] Too many params                      [semanti6.checkProcPar]
   A procedure call had more parameters than the procedure declaration.

[checkProcPar] param mismatch?                      [semanti6.checkProcPar]
   PCPC thinks that the actual parameter's type is not assignment compatible
   (call by value) or equivalent (call by reference) to the formal parameter
   type of the function declaration.

[subtypeUpdate] illegal index type                  [semanti6.subtypeUpdate]
   An array index type must be: Subrange,Enumeration,Char,Byte or Boolean.

[assignment] type conflict X <-- Y                  [semanti6.assignment]
   The types of a variable and an expression (X and Y) are not
   assignment compatible.

[getField] No field                                 [semanti6.getField]
   A non-field identifier occurs after a record symbol.

[getField] Rec.Field not compatible                 [semanti6.getField]
   A field identifier does not belong to the record symbol encountered.

[manageWith] no record argument                     [semanti6.manageWith]
   A With clause used a non-record identifier

Function has no C code?                             [semanti6.callSomething]
   The syntax is Ok, but a system function (+Dos+Crt+Graph) called here has no
   equivalent in PCPC's library (is marked with @ in the header files).

nnn  Missing parameters                             [semanti6.verifyCall]
   A function call has nnn parameters less than the declaration.

[-pointTo] No pointer                               [semanti6.semanticAction]
   A pointer symbol ^ is used without a pointer

[-arrayAddr] Index type
   An array index expression is not compatible with the declared index type

[-pushParam] invalid VAR par.?
   A value expression is used where a Var parameter is required

[-forInit] illegal loop var.
   FOR loop variables should have finite simple types.

duplicate : symbol?
   The "::" symbol is understood only for system headers (weak types)

[-subranEnd] type conflict
   The two constants of a subrange declaration do not have the same type

[-subranEnd] illegal subrange
   The end of a subrange is smaller than the beginning.

[-typeStr] String index <1 or >255
   A string type declaration is restricted to sizes 1...255

[-constRef] Sign illegal?
   A non-integer constant may not have a sign prefix

[-memAlloc] no pointer arg to NEW
   A "New" system call is made with a non-pointer

misplaced symbol
   An option symbol "[" is allowed only in System headers

Feature has no C code.
   Anything which has the _forbidden marker in the Grammar5 syntax rules.
   Turbo Pascal features which PCPC dislikes or does not implement:
     MEM and PORT addressing
     @ operator
     typecast operators
     sizeof operator
     inline code
     absolute qualifier
     interrupt or external procedure

meaningless "@" ?
   The "@" symbol may only be added after System procedure declarations.
   It means that the procedure is not (yet) supported in the PCPC library.

Expression too long.                                [Cdeclara.outC]
   The expression accumulator for C expressions saturates at 250 characters.

Expression stack bounds error: nn                   [Cdeclara.unaryOp]
   Underflow or overflow of the C expression stack, at index nn.

[CD:pushExp] stack overflow                         [Cdeclara.pushExp]
   Overflow of the C expression stack.
   With a screen dump of the "top ten" on stack.

unknown Forward xxxx                                [cNesting.insertGlobI]
   A local procedure was declared Forward but was not found again later on.
   (should be a bug of PCPC if TP input is correct)

Semilocal no-name type.                             [cNesting.makeAuxParam]
   A local Variable was declared with its composite private type, and is used
   inside a nested procedure block. When the nested procedure becomes global,
   the type info for that variable gets lost. (Bug of PCPC)

too many Primary Aux Params!                        [cNesting.propagate]
   Shifting a nested procedure to global scope, with more than 40 auxiliary
   parameters, is not supported.

too many secondary AuxParams!                       [cNesting.oneMoreParam]
   The propagation of auxiliary parameters through nested procedures created
   more than 40 parameters for some procedure.

Too many local functions.                           [cNesting.transitiveClose]
   There are more than 60 nested procedures in a block.

AuxParam propagation Bug                            [cNesting.transitiveClose]
   The aux parameter propagation loop does not stop normally (bug)

AuxParam insertion BUG                              [cNesting.insertAuxPars]
   aux parameter insertion attempted in an expression which is not a
   function call (bug, should never occur)

[Cnesting.ExtendParList]!
   Attempted call to an unknown local procedure (bug, should never occur)

Cnesting.MaxCaller too small!
   There is no room in the list of callers of a nested procedure (limit=20).
   The aux. parameter fill-in loop will need the complete list of callers.

Negative array index.                               [Cbulk.getArrayIndex]
   PCPC does not support index 0 for string length manipulation.

CASE too complicated                                [Cbulk.]
   An interval Case label is restricted to less than 15 items. For example,
   Pascal 'A'..'Z': is not supported since it would generate 26 lines of
   (inefficient?) "case " codes in C.

Cbulk_BlockEntry: lastProc>=maxNest!                [Cbulk.compilerAction]
   nesting level of procedure declarations is too big (max. depth is 15)
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 3500 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.50 for 5.25" or $4.00 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $14.95  ______

Super Saver Membership                                 $34.95  ______
(includes a 1 year subscription to Shareware Magazine,
 the PC-SIG Encyclopedia on Disk with WordCruncher,
 and 5 free disks)

The PC-SIG Catalog on Disk                              $7.00  ______

The PC-SIG Encyclopedia on Disk with WordCruncher      $20.00  ______

GAMES CD Amazing Disk - Amazing Price!                 $25.00  ______

*** PC-SIG Library on CD-ROM 12th Edition  ***         $99.00  ______

Upgrade to the 12th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $59.00  ______

Upgrade from ANY other shareware CD-ROM just           $59.00  ______

                                                    Subtotal   ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2351
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3672

     Volume in drive A has no label
     Directory of A:\

    PCPC     ZIP    216205   5-03-93  10:41a
    GO-STRT  DAT       540   1-06-93   4:57p
    SIGORDER TXT      3090   3-10-93   3:22p
    GO-FORM  DAT      3090   3-10-93   3:22p
    GO       EXE     26022   1-10-92  12:14p
    PKUNZIP  EXE     29378   2-01-93   2:04a
    PCSIG    TXT      2335   2-10-93   8:50a
    SHAREMAG TXT      1837   1-21-92   6:11a
    CDROM    TXT      4874   3-18-93   1:28p
            9 file(s)     287371 bytes
                           29696 bytes free
