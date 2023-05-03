---
layout: page
title: "PC-SIG Diskette Library (Disk #1736)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1736/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1736"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TOMMY'S INSULTS"

    "You Hare-Brained Import of Slimy Maggot Fodder!"  "You Premature Hamper
    of Gummy Toe Jam!"  These are just a taste of the callous offenses you
    can view in TOMMY'S INSULTS.  Aliens from another world have a favorite
    pastime of trading insults to gain friendship, and they want to teach
    you their customs.  A rather odd premise, but also a rather odd program.
    Although not a "player's" game (it is more like a nickelodeon), it does
    offer the user uncounted thousands of insults ranging from the gross to
    the absurd.
    
    While viewing, enjoy the many TV show tunes being played, as well as
    other jingles.  Function keys allow you to change screen and border
    colors, while the space bar allows you to freeze the current insults on
    the screen, so you can print them for future use on your friends.  Also
    supported is the Covox Speech Thing, an external speaker unit, to
    bombard your ears with insults.
    
    TOMMY'S INSULTS is not recommended for the very young -- some
    language is rated PG-13 and you have to read well to keep up with it
    all.  Do not expect any interaction with this program.  You can add
    adverbs and adjectives to the dictionary bank, but this is the only
    input you can have with the toy.  If you enjoy viewing obscure and
    ridiculous phrases, you will enjoy the program; if not, as a gift it
    would convey the same message as a can of deodorant.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1736.TXT

{% raw %}
```
Disk No: 1736                                                           
Disk Title: Tommy's Insults                                             
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Tommy's Insult                                           
Author Version: 12/89                                                   
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
"You Hare-Brained Import of Slimy Maggot Fodder!"  "You Premature Hamper
of Gummy Toe Jam!"  These are just a taste of the callous offenses you  
can view in INSULTS.  Aliens from another world have a favorite past tim
trading insults to gain friendship.  A rather odd premise, but also a   
rather odd program.  Although not a "player's" game, it does offer the  
user thousands of insults ranging from the gross to the absurd.         
                                                                        
While viewing, enjoy the many T.V. show tunes being played as well as   
other jingles.  Function keys allow you to change screen and border     
colors, while the space bar allows you to freeze the current insults on 
the screen, so you can write them down for future use on you friends.   
Also mentioned is the Covox Speech Thing, an external speaker unit, to  
speak the insults orally.                                               
                                                                        
I would not recommend INSULTS for the very young - some language is rate
PG-13.  Do not expect any interaction with this program.  You can add   
adverbs and adjectives to the "dictionary bank," but this is the only   
input you can have with the "game."  If you enjoy viewing obscure and   
ridiculous phrases then you will enjoy the program, if not - stay away  
from all unnecessary insults.                                           
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk #1736  TOMMY'S INSULTS  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: INSULTS                                         ║
║                                                                         ║
║ To print documentation, type: COPY INSULTS.DOC PRN                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INSULTS.DOC

{% raw %}
```
TOMMY'S INSULTS (C) COPYRIGHT 1987 BY TOMMY'S TOYS
P. O. BOX 11261, DENVER, CO 80211 USA.  ALL RIGHTS RESERVED.
CATALOG #87-092-1A

INSTRUCTIONS:

IN OUTER SPACE, WHERE WE COME FROM, THERE IS AN OLD ALIEN PASTIME OF TRADING
INSULTS.  THIS PROGRAM SIMULATES OUR SPACE HELMET INSULT GENERATORS, AND
INTRODUCES YOU EARTHLINGS TO THE WORLD OF MANNERS.  IF YOU FIND IT INSULTING,
IT IS WORKING; IF YOU GET A GOOD LAUGH OUT OF IT TOO, WHAT A DEAL.  REMEMBER
THAT IT IS ALL IN FUN.

TO OPERATE:
USE THE UP AND DOWN ARROW KEYS ON THE NUMERIC KEYPAD TO INCREASE AND DECREASE
(RESPECTIVELY) THE SPEED OF INSULT GENERATION.

USE FUNCTION KEYS F9 AND F10 TO CONTROL THE BACKGROUND AND BORDER COLORS,
RESPECTIVELY.

TO FREEZE AND UNFREEZE THE INSULT SCREEN, USE THE SPACE BAR.

TO DISPLAY THESE INSTRUCTIONS: HIT FUNCTION KEY F5.

COVOX SPEECH THING:
THIS TOY IS PROGRAMMED TO DRIVE THE COVOX SPEECH THING (TM) WITH THE FIRST
BYTE SMOOTHTALKER (TM) SOFTWARE INSTALLED.  INSULTS ARE MADE TO BE HEARD AS
WELL AS READ, NOW AREN'T THEY?  (BOTH AVAILABLE FROM COVOX, INC., 975 CONGER
ST., EUGENE, OR 97402).

IF THE SPEECH UNIT IS NOT INSTALLED, THE PROGRAM OPERATES ANYWAY.

WE DRIVE THE UNIT DIRECTLY WITH THE ENGLISH PHRASE, SO IF THE PRONUNCIATION
IS A LITTLE OFF, BLAME THEM NOT US (COMPARED TO THEIRS, OUR ACCENTS WOULD
REALLY GIVE YOU FITS).

SOUND EFFECTS CONTROL:
FUNCTION KEY F1 CONTROLS THE SOUND EFFECTS.  HITTING IT REPEATEDLY CAUSES THE
PROGRAM TO ALTERNATE BETWEEN THE FOLLOWING 3 MODES:

     1. COVOX SPEECH SYNTHESIZER
     2. BACKGROUND MUSIC
     3. MUTE

IF THE SPEECH UNIT IS NOT INSTALLED, F1 WILL ONLY TOGGLE BETWEEN MODES 2 AND
3.

DATA FILE:
THE FILE "INSULTS.DAT" (ON THE DEFAULT DOS DIRECTORY PATH) IS READ IN BY THE
PROGRAM TO SUPPLEMENT ITS INSULT VOLCABULARY.  THE FORMAT OF EACH LINE IS:

            ADJECTIVE,NOUN,ADJECTIVE,NOUN

WHERE THE LINE BEGINS IN COLUMN 1 AND CONTAINS NO BLANKS.  IF YOU LEAVE A
KEYWORD OUT, LEAVE THE COMMA IN, E.G.:

            ADJECTIVE,,,
            ,,,NOUN
            ,NOUN,ADJECTIVE,

THESE WORDS WILL BE ADDED TO THE 4 INDEPENDENT DICTIONARIES, AND USED IN THE
TEMPLATE: "YOU <ADJECTIVE> <NOUN> OF <ADJECTIVE> <NOUN>."

A LINE BEGINNING WITH AN ASTERISK (*) IN COLUMN 1 IS IGNORED AND YOU CAN USE
IT AS A COMMENT TO YOURSELF.

STARTUP SCREEN:
WHEN THE PROGRAM STARTS UP, THE NUMBER OF PHRASES IN EACH OF THE 4 INSULT
DICTIONARIES IS DISPLAYED ON THE SCREEN, ALONG WITH THE PRODUCT OF THE NUMBER
OF PHRASES, SO YOU KNOW THE MAXIMUM NUMBER OF DIFFERENT INSULTS THAT WILL BE
GENERATED IF YOU WAIT LONG ENOUGH.

THE TOP NUMBERS ARE THE MAXIMUM DICTIONARY SIZES, WHICH CANNOT BE CHANGED.

NOTE THAT THE PROGRAM READS IN ITS OWN UNCHANGEABLE INTERNAL DATA BASE FIRST,
THEN READS IN THE DATA FROM THE DATA FILE.  TO FORGET ABOUT THE INTERNAL DATA
BASE, USE THE "F" COMMAND LINE PARAMETER DESCRIBED BELOW.

COMMAND LINE PARAMETERS:
   M    FORCE MONO DISPLAY MODE
   C    FORCE COLOR DISPLAY MODE
   F    FORGET ABOUT INTERNAL DATA BASE.  (NOTE: IF YOU SPECIFY THIS PARAMETER
        THEN SUPPLY AN EMPTY DATA FILE, THE PROGRAM WILL READ IN ITS OWN
        INTERNAL DATA BASE ANYWAY).

EXAMPLE: >INSULTS MF

DID YOU LIKE THIS TOY?
DON'T FORGET TO TRY OUR GOBS OF OTHER NEAT LOW-PRICED ($3 TO $5) TOYS AND
GAMES FOR THE IBM PC AND COMPATIBLES, DESIGNED BY ALIENS FROM OUTER SPACE FOR
EARTH KIDS ALL AGES.  OUR 5.25 INCH (360KB) OR 3.5 INCH (720KB) DEMO DISK,
CONTAINING AN ELECTRONIC TOY CATALOG AND OTHER GOODIES, IS ONLY $2 TO ANY
U.S. ADDRESS, $3 OUTSIDE U.S. (U.S FUNDS ONLY OR CHECK DRAWN ON U.S. BANK).
IF YOUR PC BORES YOU WRITE US NOW.

HAVE FUN!

```
{% endraw %}

## TOMMYS.DOC

{% raw %}
```


                 *WELCOME TO THE WORLD OF TOMMY'S TOYS*

DEAR EARTHLINGS,

HELLO!  MY NAME IS TOMMY.  I AM AN ALIEN FROM OUTER SPACE.  I DESIGN NEAT
FUN SOFTWARE TOYS AND GAMES FOR IBM PCS AND COMPATIBLES AND SELL THEM AT
ASTOUNDINGLY LOW PRICES ($3 TO $6 EACH) TO NICE EARTHLINGS LIKE YOU TO PAY
FOR MY REESE'S PIECES AND MAKE EARTHLINGS HAPPY.  I HOPE YOU ENJOY MY TOYS.

THE TOY(S) ON THIS DISK ARE BEING DISTRIBUTED BY AN AUTHORIZED SHAREWARE
DEALER WITHOUT ANY STRINGS ATTACHED IN THE HOPES THEY WILL MAKE YOU WANT TO
SEND A TOKEN $2 FOR MY NEAT DEMO DISK CONTAINING, AMONG OTHER GOODIES (REALLY
IT IS A LOT OF VALUE), AN ELECTRONIC CATALOG OF THE AWESOME ASTOUNDING LINE
OF OTHER TOYS I HAVE FOR SALE, CURRENTLY WELL OVER A HUNDRED, INCLUDING SUCH
CLASSIC GOODIES AS TOMMY'S TREK, TOMMY'S WHEEL OF MISFORTUNE, TOMMY'S TRIVIA,
TOMMY'S CROSSWORDS, TOMMY'S PATIENCE (SOLITAIRE), TOMMY'S GIN RUMMY (AND GOBS
OF OTHER NEAT CARD GAMES), TOMMY'S BACKGAMMON, TOMMY'S DOMINOES, TOMMY'S DICE,
AND DOZENS OF NEAT OUT-OF-THIS-WORLD ARCADE STYLE GAMES (TOMMY'S HYPERDRIVE,
TOMMY'S E-NET, TOMMY'S SPACE GOBLINS, ETC.), WORD GAMES (TOMMY'S HIDDEN-WORDS,
TOMMY'S JOTTOMANIA), AND SPACE GAMES, ..., WHEW, GET THE CATALOG AND READ FOR
YOURSELF!

THESE SHAREWARE VERSIONS ARE IDENTICAL WITH THE PRODUCTS I SELL DIRECTLY,
THAT IS, THEY ARE NOT CRIPPLED JUST BECAUSE YOU ARE GETTING THEM FOR FREE
(TRUE, THEY ARE UPDATED CONSTANTLY SO YOU MIGHT GET A NEWER VERSION BY
WRITING DIRECT TO ME).

AND DON'T FEEL GUILTY FOR NOT SENDING IN YOUR REGISTRATION FEES, THEY DON'T
HAVE ANY!  RATHER, THEY ARE "FREE SAMPLES" (THOUGH I RETAIN THE COPYRIGHTS)
SO YOU CAN TASTE A LITTLE OF WHAT YOU HAVE BEEN MISSING.  YOU SEE, I
AUTHORIZE ONLY A SMALL FRACTION OF MY TOYS FOR SHAREWARE DISTRIBUTION, AND
ONLY UNDER CERTAIN CONDITIONS, BECAUSE, TO BE FRANK, I'M TRYING TO GET YOU
*ADDICTED* TO MY TRADEMARK BRAND OF CEREBRAL SILLINESS!  THEN I AM BANKING
THAT SOONER OR LATER YOU WILL *WISE UP* AND QUIT BUYING EARTHLING VIDEO GAME
AND TOY PRODUCTS AT $25, $35, OR $50 APIECE WHEN YOU CAN GET MINE FOR A TENTH
OF THAT -- WHY MANY EARTHLING COMPANIES CHARGE $3 TO $5 JUST FOR SHIPPING AND
HANDLING.

WHEN YOU WISE UP, YOU WILL BREAK DOWN YOUR PREJUDICES AGAINST ALIENS FROM
OUTER SPACE (HA HA) AND BEGIN ORDERING FROM THE LONG LIST OF OTHERS WHICH YOU
CAN ONLY GET DIRECT FROM ME!  (ACTUALLY US, WE HAVE A LITTLE BAND OF ALIENS
ON YOUR PLANET RIGHT NOW -- JUST A FRIENDLY LITTLE BAND OF GALACTIC TOYMAKERS,
NO INVASION INTENDED).

AND NO, WE DON'T TAKE ADVANTAGE OF OUR LID ON THE EARTH MARKET BY COPY-
PROTECTING THEM, SO EVEN IF WE DID RAISE PRICES THE ROBIN HOODS OUT THERE
WOULD BEGIN PIRATING THEM AT CUT-RATE PRICES AND SAVE YOU FROM SELLING YOUR
PLANET OFF TO ALIENS FROM OUTER SPACE LIKE YOUR FOREBEARS DID (HA HA -- JUST
KIDDING TO SEE IF YOU ARE AWAKE).

YOU MIGHT WONDER HOW WE CAN GIVE AWAY REGISTRATION-FREE SAMPLES AND STAY IN
BUSINESS, OR HOW WE CAN CHARGE SO LITTLE FOR OUR HOT SOFTWARE IN THE PRESENT
DAY EARTHLING COMMERCIAL ARENA, OR WHY WE DON'T HAVE A $10-$25 SHAREWARE
REGISTRATION FEE.

WELL, SIMPLE MY DEAR EARTHLING.  1. WHO PAYS FOR A MOVIE ON THE WAY OUT?
2. WHO CAN SELL A RECORD ALBUM IF THEY DON'T GET SOME TRACKS PLAYED FOR FREE
ON THE RADIO?  3. WHO WANTS TO PAY A BUNCH OF MIDDLEMEN AND ADVERTISERS WHEN
THEY CAN GET IT DIRECT FROM THE SOURCE?  ENJOY THE TOMMY'S TOY(S) ON THIS
DISKETTE WITH MY COMPLIMENTS -- I FIGURE THAT THEY DO MORE GOOD ON YOUR PC
THAN GATHERING DUST ON MY SPACE SHIP ... AND WHEN YOU ARE DOWN IN THE DUMPS
AFTER HOURS OF ANGUISHING OVER SPREADSHEETS, WORD PROCESSING, OR NUMBER
CRUNCHING, AND WANT SOME MORE FUN, YOU WILL KNOW WHERE YOU CAN GET IT, CHEAP,
VIA AIR MAIL, FROM A CONVENIENT, HIGH-ALTITUDE, CENTRALLY LOCATED EARTH
ADDRESS.

IN SUMMARY, EARTHLINGS, THIS IS NOTHING LESS THAN A BOLD NEW ALIEN METHOD OF
MARKETING (OF COURSE WE ALIENS *INVENTED* THE SHAREWARE CONCEPT AND IMPLANTED
IT IN YOUR MINDS TO START WITH, MAKING YOU THINK IT WAS YOUR OWN IDEA) AND,
AFTER IT WORKS AS WE ALIENS HAVE PLANNED (SO THAT EVERY PC IN THE WORLD IS
CRAWLING WITH !TOMMY'S TOYS!) YOU THE EARTHLING CONSUMERS WILL REAP THE
BENEFITS -- AND WE ALIENS HAVE PULLED OFF YET ANOTHER COMPUTERIZED TAKEOVER
OF A LIVE PLANET (HA HA, JUST KIDDING, WE'RE NOT TRYING TO TAKE OVER YOUR
PLANET, JUST MAKE EARTHLINGS HAPPY, YOU KNOW THE STORY, SURE).

AS AN ALIEN TOYMAKER WITH A LONG GALACTIC TRADITION TO UPHOLD, BELIEVE ME, I
REALLY LIKE GETTING ORDERS AND LETTERS FROM NICE EARTHLINGS, SO TRY WRITING
TO ME AND SEE IF IT DOESN'T MAKE YOU FEEL BETTER.  THIS IS A LOT CHEAPER THAN
A JAUNT TO DEVIL'S TOWER NATIONAL MONUMENT IN SEARCH OF CLOSE ENCOUNTERS, NOW
ISN'T IT?

NOW PLEASE SEND FOR YOUR DEMO DISK AND JOIN THE GROWING NUMBERS OF EARTHLINGS
WHO APPRECIATE GOOD EXTRATERRESTRIAL ENGINEERING AT DOWN TO EARTH PRICES --
BEFORE WE GET FRUSTRATED AND LEAVE THIS PLANET FOR A KINDER, GENTLER GALAXY
(HA HA HO HO, JUST KIDDING, WE LIKE YOUR SILLY PLANET EVEN IF YOU PRIMITIVES
STILL THINK OF PCS AS INTERNATIONAL BUSINESS <YUK> MACHINES.)


YOUR FRIEND,

             TOMMY

             TOMMY'S TOYS, BOX 11261, DENVER, CO 80211 USA

                   "SEND ME AN ALIEN -- RIGHT NOW!"
                   "NOW YOU'RE PLAYING WITH *ALIENS*"
                   "DID YOU EVER DANCE WITH AN ALIEN BY THE BIG BLUE LIGHT?"

NOTE:
PLEASE SPECIFY 5.25 INCH OR 3.5 INCH DISKETTE.  OUTSIDE U.S. PLEASE ADD $1.
U.S. FUNDS ONLY OR CHECK DRAWN ON U.S. BANK.

* * *
NOTE: CENTER THIS ORDER FORM ON YOUR SCREEN, THEN TURN ON YOUR PRINTER, INSERT
PAPER, HOLD DOWN THE SHIFT KEY, AND HIT THE PRTSC KEY ON YOUR KEYBOARD TO
PRINT THE ORDER FORM OUT.

-----------------------------------------------------------------------------
               ORDER FORM FOR TOMMY'S TOYS DEMO DISK

DEAR TOMMY,

    PLEASE SEND YOUR NIFTY DEMO DISK.  I CERTIFY THAT I AM A NATURAL-BORN
    EARTHLING AND NOT A BORG.  AS PAYMENT I ENCLOSE

                              ( ) $2.00         ( ) $3.00 (OUTSIDE U.S.)

    IN U.S. CURRENCY, CHECK DRAWN ON U.S. BANK, OR INTERNATIONAL POSTAL MONEY
    ORDER PAYABLE IN U.S. DOLLARS.

    DISK FORMAT DESIRED IS    ( ) 5.25 INCH     ( ) 3.5 INCH

    MY NAME AND ADDRESS:




    MY BIRTHDAY (MO.-DAY):

    ( ) I AM SENDING A CASE OF REESE'S PIECES BY SEPARATE FREIGHT AS A FREE
        WILL LOVE OFFERING (OPTIONAL, HA HA).
-----------------------------------------------------------------------------

(C) 1989 BY TOMMY'S TOYS.  ALL RIGHTS RESERVED.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1736

     Volume in drive A has no label
     Directory of A:\

    FILE1736 TXT      2591   1-12-90   5:53p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   4:35a
    INSULTS  DAT       627   3-18-89   7:06a
    INSULTS  DOC      3693   3-18-89   7:06a
    INSULTS  EXE     78306   3-18-89   7:06a
    TOMMYS   DOC      6603  10-10-89   7:06a
            7 file(s)      92398 bytes
                           65536 bytes free
