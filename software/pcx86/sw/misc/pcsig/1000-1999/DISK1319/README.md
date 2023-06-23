---
layout: page
title: "PC-SIG Diskette Library (Disk #1319)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1319/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1319"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BASSTOUR"

    BASSTOUR is a fishing tournament game in which you captain a
    fully-rigged bass fishing boat.  You control where the boat goes and how
    it gets there.  Your bass boat has all the latest accessories, including
    a trolling motor, LCD chart recorder, a rod box containing six different
    fishing rods, and a fully-stocked tackle box.  The object of the game
    is to catch the heaviest five fish limit on each of three days of the
    tournament.  The fisherman with the highest total weight wins the
    tournament.  As in real fishing, it's not always easy!
    
    BASSTOUR has three levels of play: novice, intermediate and
    professional.  In any of the skill levels, you are fishing against 30 of
    the top names in bass tournament fishing.  You have six different bodies
    of water that you can fish.  The fishing area is drawn on the screen,
    and the program randomly decides where fish should be placed.  If you
    love to fish, you will love BASSTOUR.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BT.DOC

{% raw %}
```












                                   BASSTOUR

                                  Version 4.3

                     The Ultimate fishing tournament game

                                 By Dick Olsen







                        A Few Words About ShareWare....


             BASSTOUR is made available to the general public under  the
       concept  of  ShareWare.  As  such,  you  are  free to copy it and
       distribute it to others provided that all accompanying files  are
       distributed  intact  and  unmodified, and that no fee is charged.
       The author retains ALL rights to the program. You are  encouraged
       try  the  program  for  a reasonable period of time to see if you
       like it. If it proves to be enjoyable, please consider supporting
       the efforts of the author by sending a small contribution to  the
       address  shown  below.  Once you have done so, you are considered
       "registered", and can expect a prompt  reply  to  correspondence.
       Once  registered,  you  will  also  receive the latest version of
       BASSTOUR if the version you  have  is  not  the  newest.  In  any
       correspondence  regarding BASSTOUR, please be SURE to specify the
       following information:


           * What version of BASSTOUR you have
           * What brand and model computer you have
           * How much memory your machine has
           * The disks your machine has (hard, 2 floppies etc.)
           * What kind of video card your machine has
           * Any other type of cards your machine has


       To  register  your  copy  of BASSTOUR, send $15.00 along with the
       registration form at the end of this document to the author:

                        Richard Olsen
                        68 Hartwell Ave.
                        Littleton, MA. 01460

       Thank you for supporting my efforts!


                                 Introduction


            BASSTOUR is a fishing tournament  game  in  which  you  have
       complete  control  of a fully rigged bass boat. You control where
       it goes, and how it gets there. Your bass boat  has  all  of  the
       latest   accessories,  including  a  trolling  motor,  LCD  chart
       recorder, a rod box containing six different fishing rods, and  a
       fully stocked tackle box we would all be proud to own. The object
       of  the  game is to catch the heaviest five fish limit on each of
       three days of the tournament.  The  fisherman  with  the  highest
       total  weight  wins  the tournament. As in real fishing, it's not
       always easy! Each day of the tournament allows you  to  fish  for
       six  hours.  Just  about  everything  you do takes time. Changing
       lures consumes time. So does turning on your LCD recorder. Moving
       your boat takes longer if you use the trolling motor than if  you
       use  the  outboard  motor.  On the other hand, the outboard motor
       consumes gasoline while the trolling motor  uses  battery  power.
       You  make  the  trade  offs. You must bring your boat back to the
       weigh in area before the six hour fishing  day  has  elapsed  and
       have your fish weighed in.


        Here is a brief explanation of the situation:

        You  are  a  professional  bass  tournament  fisherman. You have
       complete control of a fully rigged bass boat. You  control  every
       aspect  of  the  boat, just as if it were real. You face the same
       problems a real fisherman encounters during a bass tournament. If
       you're not careful, accidents  can  occur  that  cost  you  time,
       possibly  some  cash,  and  if severe enough, the tournament. You
       decide where you will fish, what type rod  you'll  use  and  what
       kind  of  bait.  Fish the open water with a crankbait or work the
       stumps with a plastic worm. Locate a drop off with your LCD graph
       and rip a Rat-L-Trap if you want.  Maybe  you'll  win  the  daily
       lunker award or set a new record for the lake!


        What You Need To Run BASSTOUR

       BASSTOUR  requires an IBM PC or compatible computer with at least
       512k of memory. BASSTOUR will run with  either  an  EGA,  CGA  or
       Hercules  compatible  video  system.  You can run BASSTOUR from a
       floppy disk or from a hard disk.  If you are lucky enough to have
       a VGA card and monitor, BASSTOUR will run fine on it also. If you
       have a mouse on your computer, you can use it to  play  BASSTOUR,
       although  it  is not necessary. It is highly recommended that you
       make a backup copy of your  BASSTOUR  diskette.  Use  the  backup
       copy,  and store the original diskette in a safe place. Beginning
       with  version  2.0  of  BASSTOUR,  one  command  line  option  is
       supported.  This command line option allows you to force BASSTOUR
       to  run  in  one  of  the  four  video  modes:  VGA, EGA, CGA, or
       Hercules. In most instances, you will not need to  specify  which
       video  mode  since  BASSTOUR can detect what kind of video system
       your computer has.  There are a  few  types  of  EGA  cards  that
       BASSTOUR cannot detect however. If your computer has an EGA card,
       but  BASSTOUR  will not detect it, you can force it to run in EGA
       mode anyway. To do this, use the command line  shown  below  when
       you want to run BASSTOUR:

                       BASSTOUR -e

       You can also use a -h for Hercules or a -c for CGA. If you simply
       type  BASSTOUR,  the program will choose the best mode it can. If
       you have a VGA display, BASSTOUR can be forced  to  use  the  256
       color  320  x  200  MCGA  mode.  Running the program in MCGA mode
       requires the use of a -m command line option. For example, to run
       in the 256 color 320 x 200 mode of your  VGA,  type  BASSTOUR  -m
       when  you  start  the  program. Simply typing BASSTOUR will cause
       your VGA display to run in the 640 x 350 16 color EGA mode.

       Since  BASSTOUR  requires  a large amount of FREE memory, be sure
       that you do not  have  memory  resident  programs  loaded  before
       running  BASSTOUR.  Ramdisks,  printer buffers, menu programs and
       other TSR's occupy large amounts of memory in your system, making
       it unusable by BASSTOUR. BASSTOUR may appear to run normally, but
       if there is not enough available memory, the program  will  halt.
       If this happens, a message will inform you of the fact that there
       is insufficient memory available for BASSTOUR. In this situation,
       BASSTOUR  will  not  run properly on your system until you remove
       the offending software from memory.


        How To Run BASSTOUR From A Floppy Disk

       If  your  computer  does not have a hard disk, at the DOS prompt,
       insert the distribution diskette into drive A:  and  simply  type
       BASSTOUR  <enter>.  After  a  few  seconds, the title screen will
       appear. You will be asked to answer a few  questions  before  the
       game  starts.  If  your  computer  does have a hard disk, but you
       still want to run BASSTOUR from  your  floppy  disk,  insert  the
       distribution diskette into drive A: and type A:<enter> at the DOS
       prompt,  then  type  BASSTOUR <enter>. Be sure that you leave the

       diskette in the drive while you are playing, and that it  is  NOT
       write  protected. If you get real lucky, and catch a record sized
       fish, BASSTOUR will try to save your record catch on the disk. If
       the disk isn't there, or if it's write  protected,  BASSTOUR  may
       halt, waiting for the disk to be available.
       BASSTOUR  will  allow  you  to save a game so that you can finish
       playing it at a later time. If you are running BASSTOUR from your
       floppy disk, there may not be enough disk space to save  a  game.
       To  avoid  "insufficient disk space" errors, it is suggested that
       you delete this file (BT.DOC) from the disk  you  are  using.  BE
       SURE THAT YOU HAVE MADE A COPY FIRST!!! If you attempt to save  a
       game  on a disk with insufficient space, a message will appear to
       notify you that the game was not saved due to lack of disk space.

        How To Run BASSTOUR From A Hard Disk

        To run BASSTOUR from your hard disk, first it must be installed.
       The   distribution  diskette  has  a  batch  file  on  it  called
       "BTINSTAL.BAT"  that  will  do  this  for  you.   To   run   this
       installation  file,  first  insert the distribution diskette into
       drive A:. Then type A:BTINSTAL. The installation file will create
       a directory on your hard disk called BTOUR. Then it will copy all
       of the files from the floppy disk to the hard disk. After all  of
       the   files   have   been   copied,   the  message  "installation
       completed..."  will  appear  on  your  screen,  and BASSTOUR will
       automatically run. BASSTOUR can be run at any time thereafter  by
       just typing BT<enter>.


        The Program

       BASSTOUR has four levels of play; Novice, Intermediate,  Pro  and
       Practice.  In the first three levels, you are a professional bass
       fisherman participating in a three day tournament.  Each  of  the
       days  represents six hours of fishing, and you must weigh in your
       fish at the designated weigh in area before the end of the  day's
       fishing.   If  you  fail  to  weigh  in before the six hours have
       elapsed, all of the fish in your live well are released, and  you
       receive  no  credit  for  them.  The total weight of your fish is
       accumulated at the end of each day of  the  tournament,  and  the
       current  standings  are  posted. At the end of the third day, the
       final standings and the winnings are posted. In Novice level, the
       fish are very easy to catch, and  it's  easy  to  finish  in  the
       money.  Intermediate level requires a bit more searching and lure
       experimenting to fill your live well with decent sized fish.  Pro
       level is just plain tough! The fish are more selective and harder
       to locate. In Pro mode, just as in reality, it can be pretty hard
       to  catch your limit. In fact, it's not unusual to fish an entire
       day of the tournament without catching a legal fish. You'll  need
       to  be  more  alert  to  your  current  situation. The weather is
       important. Your boat may drift if it's windy, and you may end  up
       stuck  somewhere  preventing  you  from making the weigh in time.
       Each fishing area has a record for the  largest  fish  caught  at
       that  area.  If, during the course of the tournament, you catch a
       fish that is larger than the current  record,  a  small  ceremony
       will  ensue  and you will be established as the new record holder

       for that particular lake or river. The records are kept in a file
       called LAKERECS.TXT on your disk, and the current record fish for
       each  of  the fishing areas can be viewed at any time. In another
       file on your distribution diskette, STRINGER.TXT, BASSTOUR  keeps
       records of the 10 heaviest stringers. A stringer is considered to
       be  the  accumulated  tournament weight for the three days of the
       tournament.

       The  fourth  mode is Practice. This mode was added at the request
       of users. In Practice mode, there is no time limit,  gasoline  is
       assumed  to  be  unlimited,  and  battery  power  lasts  forever.
       Practice mode forces the Pro skill level. In Practice  mode,  you
       can  fish to your hearts content, and you can still weigh in your
       fish just as if it were a tournament. Lake records can  still  be
       set in Practice mode, but heavy stringer records cannot.

       The Boat

       Your  boat  is  equipped  with  a  trolling  motor,  an LCD chart
       recorder, 20 gallons of gasoline, batteries, a rod box, a  tackle
       box, various emergency and safety devices, a live well, an anchor
       and  of  course  a  powerful  outboard motor. As with a real bass
       boat, you need to exercise care and good judgment in the  use  of
       this  equipment.   Time  is your biggest enemy, with the constant
       threat of obstacles such as stumps  and  rocks,  running  out  of
       gasoline or killing your batteries contributing to your problems.
       As  if  all of these things weren't enough, there are other boats
       in the area to contend with. As  in  a  real  fishing  situation,
       these  other  boats sometimes seem to be piloted by inconsiderate
       people; they hog fishing areas or crowd you. Sometimes they spook
       fish or even cause accidents!


       The Fishing Areas

       Included on your BASSTOUR disk are six different bodies of  water
       that  you  can  fish. When the title screen appears, the names of
       the six fishing areas will be listed. To pick an area, just enter
       the corresponding area number. Once you have selected  the  area,
       it  remains  selected  throughout  the three day tournament. Each
       fishing area is unique in itself. Every time you start a new  day
       of fishing, the location of the fish will be different, and their
       sizes  will  vary  greatly.  Additionally, every time the game is
       started, the depths on a particular lake will vary. When fishing,
       it is wise to keep a check on  the  time  remaining,  the  charge
       level of your batteries, and how much gasoline you have left. You
       must  weigh in your fish before the time has expired. In order to
       weigh in your fish, you must be close to the weigh in  area.  The
       weigh in area on each lake is signified by a yellow flag, usually
       near  where  your  boat  is placed when the tournament begins. If
       your computer has a CGA or Hercules video system,  the  weigh  in
       area  will  be  signified  by a flag with a black X in it. On EGA
       systems, your boat is the light blue (cyan) colored  boat,  while
       in  Hercules  or CGA systems, your boat is the solid colored one.
       If  you  are  running  in the MCGA mode of your VGA display, your
       boat is the bright pink one. In all cases, your boat starts  each

       day of the tournament adjacent to the weigh in flag.

        The Fish

        After the lake has been drawn on the screen, the program decides
       where  fish  should  be  placed. As in real fishing, bass seem to
       like to be in or near some sort of  cover.  Stumps,  rocks,  lily
       pads  etc.  will  usually  hold  the most fish. Fish also seem to
       congregate along humps or drop offs elsewhere on the  lake.  Boat
       docks,  moored boats and weeds are also good places to look. Fish
       can also be caught in the middle of the lake. Each fish  has  its
       own  unique personality, which determines how easy the fish is to
       catch. Fish have an aggression factor assigned to them,  as  well
       as lure type and color preferences. If a fish is very aggressive,
       it  will  usually strike almost any type or color of bait. Mildly
       aggressive fish are more selective. Sometimes fish  will  cluster
       in  an  area,  so  it's  a good idea to cover an area of the lake
       thoroughly because several fish can be caught in the  same  place
       at  times.  If  you  catch a decent fish in an area, it's wise to
       make several casts to the same general area since fish of similar
       size often stick together. In  Intermediate  and  especially  Pro
       modes, lure choice and color are important. You can cover an area
       completely  without  catching any fish, then change bait types or
       colors and catch fish after fish in the area  you  just  covered.
       The  program  typically  places  about  2000  in  a lake. If your
       computer is an XT type, it may take several seconds for the  fish
       to  be  placed. When the small timer window appears, you're ready
       to start. The potential exists to catch an 18 lb.  plus  fish  on
       each lake.

       In each lake, there lurks a GIANT bass called Lulu. She  is  very
       finicky,  and will only strike a bait if it is the exact type and
       color she wants. To catch Lulu is truly a  magnificent  feat.  If
       you  catch  her,  you  will  be  given the opportunity to print a
       special certificate  (assuming  you  have  a  printer  connected)
       which,  if  sent  to the author together with the exact weight of
       Lulu, will earn you a nice surprise.

       The Opponents

       In any of the skill levels, you are fishing against 30 of the top
       names in bass tournament fishing. Although it's quite easy to win
       the tournament if you are fishing in Novice or even  Intermediate
       mode,  Pro mode is quite another story. These guys you're fishing
       against  are  the  best.  They  got  to  be  the  best  by  being
       consistent.  In  Pro  mode, it's not unusual to weigh in 18 or 20
       pounds of fish, and not make the top ten!



       The Equipment

       * Trolling Motor ( F2 or T )

       The trolling motor is raised or lowered by pressing the F2 key or
       by  pressing  'T'. If the trolling motor is down, pressing F2 (or
       T) will raise it. If the trolling motor is up, pressing F2 (or T)
       will lower it. Starting the  outboard  motor  will  automatically
       raise  the  trolling  motor if it is down. Likewise, lowering the
       trolling motor automatically stops the outboard motor. If you are
       using a mouse, first bring up the command list  by  pressing  the
       left  mouse  button.  Then point to the trolling motor command in
       the list and press the left button again. The  command  list  can
       only  be  displayed if you are not in the cast mode. The trolling
       motor uses more time than the outboard motor to move  your  boat,
       and  it  also  consumes battery power. Once you have fished a few
       tournaments with BASSTOUR, you will begin to remember  what  keys
       to  press  and  find that you rely on the command list much less.
       Mouse users can always use the keys if they  wish.  The  trolling
       motor can be raised or lowered while in the cast mode.

       * The Outboard Motor (alt-F9 or O)

       Pressing ALT-F9 (hold down the ALT key while you press  F9)  will
       start  the  outboard  motor. Pressing 'O' will do the same thing.
       The outboard will NOT run if you are out of gas. If you have  the
       sound enabled, you will hear a buzz that indicates that the motor
       is  running.  Remember that any time the outboard is running, you
       are consuming gasoline. The outboard motor can also be started by
       first bringing up the command window (by pressing the LEFT  mouse
       button  or by pressing F1) then pointing at the RUN/STOP OUTBOARD
       command with your mouse. Remember that you cannot  bring  up  the
       command  window  if  you  are  in cast mode.  There are two other
       things to be aware of  when  using  the  outboard  motor.  First,
       tournament  rules state that when moving your boat under power of
       the outboard motor, you must wear a life jacket. Failure to  wear
       your  life  jacket  may  cost  you a fine or even cause you to be
       disqualified.  The life jacket usage is discussed later  in  this
       document.   The  second  thing  to  be  aware  of when using your
       outboard motor are zones designated "NO WAKE".  These  areas  are
       found  on  most  lakes,  and  are  indicated by the presence of a
       floating sign.  Sometimes, you will be given a  citation  if  you
       pass  through  these  areas with your outboard motor running at a
       faster than allowed speed. If you pass through a NO WAKE ZONE  at
       idle  speed, you will not get a citation, nor will you if you are
       using the trolling motor. Receiving a citation not only costs you
       money, it costs time as well.  You cannot start the  outboard  if
       you  are  in  cast  mode.  The outboard motor has five speeds. To
       increase the speed, press the INS key. To slow  down,  press  the
       DEL  key.   The  faster  you  run  the outboard, the more gas you
       consume. On the other hand, moving the boat at a fast speed  uses
       less  time to travel long distances.  As you increase or decrease
       the speed of the outboard motor, the sound will vary in pitch and
       a short note will appear to verify the change in speed. Each time
       you press the INS key, your outboard speed is increased until you

       are at maximum RPM's. Likewise, each press of the DEL  key  slows
       down  your  motor  until  it  is  at  idle speed. If you run your
       outboard motor at the highest speed, be careful. If  you  hit  an
       obstacle,  your  outboard  may  be damaged and out of service for
       that day of the tournament.


       * LCD Chart Recorder (alt-F1 or G)

       Pressing  ALT-F1  (hold down the ALT key while you press F1) will
       turn on the LCD recorder if it is off, or turn it off  if  it  is
       on.  Pressing  'G' will do the same thing. If your boat is in the
       left half of the screen, the LCD  recorder  will  appear  in  the
       upper  right  corner  of the screen. If your boat is in the right
       half of the screen, it will appear in the upper left  corner.  If
       you  have  the LCD recorder on, it will move to the opposite side
       of the screen from where your boat is. The LCD works almost  like
       a real one. It's screen will show fish directly under the boat in
       the  center of it's screen, fish to the port side of the boat are
       on the left of it's screen, and fish to the starboard side of the
       boat appear on the right side of it's screen. To select  the  LCD
       when using a mouse, first bring up the command window by pressing
       the  left mouse button. The command window will only be displayed
       while you are not in the cast mode. Point the mouse cursor at the
       LCD command then click the left mouse button to turn  on  or  off
       the LCD recorder. The LCD recorder is continuously updated as you
       move the boat around the screen. It uses battery power, so use it
       sparingly.  As  with other commands, mouse users can also use the
       keyboard to control the LCD.

       * Rod Box (F9 or R)

       Your bass boat has a rod box containing six  different  types  of
       rods. Each of these rods has certain advantages or disadvantages.
       For example, a spinning rod with 6 pound test line will allow you
       to  cast  your  lure farther than a flippin rod (saving excessive
       boat moving) but the light line may cause you to lose a few fish.
       Some of the differences are obvious, others are not.   You  start
       each  day  of  fishing with no rod selected. Before you can begin
       casting, you must select a rod. You can change rod types  at  any
       time.  The F9 (or 'R') key allows you to select a rod. You cannot
       select a rod while in cast mode. Once you have the rod box window
       on  the  screen, the up and down arrow keys will cause the hilite
       bar to move up or down highlighting the rod selection. After  you
       have  the  hilite  bar positioned over the rod you'd like to use,
       press the ESC key to return to the  move  mode.  If  you  have  a
       mouse,  first  bring  up  the  command  window, then point at the
       SELECT ROD command. Point the mouse cursor at the rod  you  would
       like  to  use,  then press the left mouse button which will cause
       the hilite bar to move to the rod you have selected. If  you  are
       satisfied  with  your  selection, press the right mouse button to
       resume the game. If you change your mind after clicking on a  rod
       type, just point to the rod you want and click again.

       You  can "load up" all six rods with different baits, then change
       rods thus changing baits quickly, just like in real fishing.


       * Tackle Box (F10 or B)


       At  your  disposal  is  a  six  drawer  tackle  box  containing a
       selection of lures we all wish we had. Many lure types and colors
       are there for your use. You can select lures from the tackle  box
       at  any  time  except when you are in cast mode. Pressing F10 (or
       'B') will give you access to the tackle box. If you are  using  a
       mouse, select the tackle box from the command list by pointing to
       the tackle box command and pressing the left button on the mouse.
       If  you are in cast mode (you'll see the cast instruction line at
       the bottom of your screen), you  will  have  to  exit  cast  mode
       before  you can access the tackle box. The Tackle Box consists of
       three windows.  The first  window  allows  you  to  choose  which
       drawer  to  look  in.  Each drawer is neatly organized (I wish MY
       tackle  box  was  this  neat)  into  bait  types.  For   example,
       crankbaits  are  in  one drawer, spinnerbaits in another, plastic
       worms in another etc. Use the mouse to  point  at  and  click  on
       which  drawer  you want, or use the UP or DOWN arrow keys to move
       the highlight bar to where you want it. After  that,  the  drawer
       contents will appear in another window next to the first. In this
       window,  you  select  the specific bait you want to use. Once you
       choose your bait, a third  window  will  appear  that  lists  the
       available  colors for that particular lure.  After you select the
       color, the tackle box windows will disappear. If you forget  what
       bait  you are fishing with, the STATUS command will tell you. Use
       of the LIST STATUS command is discussed  later.  Over  2300  lure
       type and color combinations are possible with BASSTOUR.


       * Live Well (F3 or L)

       Your boat contains an aerated live well that holds  all  of  your
       legal (12 inches or better) fish. You can examine the contents of
       your  live  well at any time, including while in cast mode. While
       examining the live well contents, you also  have  the  option  of
       turning on or off the aeration system. The aerator will save your
       fish if you run it enough, but it does use battery power. Failure
       to  use  your  aerator enough may cause some of your fish to die,
       costing you a one pound penalty for each dead fish weighed in. On
       the other hand, the live well aerator consumes battery power. The
       live well will hold a maximum of five fish. Every legal fish  you
       catch will be added to the live well until it contains five fish.
       After  that, if you catch a fish that is larger than the smallest
       fish currently in the  live  well,  the  smallest  fish  will  be
       released,  and  the  fish  you just caught will replace it in the
       live well. This way, the  live  well  always  contains  the  five
       largest fish you have caught. To examine the live well or to turn
       on  or off the aerator, just press F3 (or 'L')on the keyboard. If
       you are using a mouse, first  bring  up  the  command  window  by
       pressing F1, then point the mouse cursor at and click on the LIVE
       WELL command.  Then press the left button on the mouse. A  window
       will appear on your screen that shows how many fish are currently
       in  the  live  well,  what the total weight of those fish is, and
       gives you the option of turning the aerator on or off. If you are

       using a mouse, simply click on the ON or OFF command in the  live
       well  window.  If  you are using the keyboard, press the F7 or F8
       key to control the aerator. To resume fishing, press the ESC  key
       or  the  right  mouse button. Examining the contents of your live
       well uses time, but no energy is consumed.

       See the ALT-F command listed under Miscellaneous Commands.

       * Life Jacket (alt-F2 or J)

       You must wear a life jacket any time you are moving the boat with
       the  outboard  motor.  Failure  to  do so may cost you time and a
       citation with an associated fine. It may also  cause  you  to  be
       disqualified  from  the tournament on that day. Wearing your life
       jacket is a bit of a nuisance since  it  restricts  your  casting
       distance a little. The life jacket is selected by pressing ALT-F2
       or  by selecting the appropriate item with the mouse.  Taking off
       your life jacket uses a little time, as does putting  it  on.  If
       you are wearing your life jacket when you make this selection, it
       will  be  removed.  If you are not wearing it, it will be put on.
       Pressing 'J' will also execute this command.


       * Anchor

       The anchor is of no use unless you are fishing in  Pro  mode.  In
       Pro mode, the anchor will prevent your boat from drifting.  Don't
       forget  to  raise  the  anchor  before  trying  to move the boat.
       Pressing F7 lowers the anchor, pressing F8 raises it. If you  are
       using  a  mouse,  just  select  the item from the command list by
       pointing the mouse cursor at the command you want to execute  and
       then  click  the left button of the mouse. As with most things in
       fishing, raising or lowering the anchor takes time. There are  no
       alternate keys assigned to this command.

       * Paddle (alt-F3 or P)

       Although  the  paddle  can  be used to move the boat at any time,
       most of us think of it as a last resort. The paddle uses quite  a
       bit  of  time,  but could be used to get you to the weigh in area
       before the allotted time has elapsed if  both  your  battery  was
       dead  and you were out of gas. ALT-F3 selects the paddle from the
       keyboard, and you can select it with the mouse also. As with  the
       trolling  motor or the outboard motor, selecting the paddle turns
       off any other form of propulsion that may be active. Pressing 'P'
       will also cause you to start paddling.


        The next section explains how to move the boat, scroll the screen
        and make casts:


       * Moving the boat

       Boat positioning is crucial to fishing success  both  in  reality
       and  while  playing BASSTOUR. Beginning with version 2.1, you can
       move your boat at any time. Previous versions  only  allowed  the
       boat to be moved if you were not in cast mode. If you are in cast
       mode, the Q, W, E, A, D, Z, X, and C keys will move the boat. The
       Q  key  will move the boat to the upper left, the W key moves the
       boat straight up, the E key moves toward the upper right,  the  A
       key  moves  to  the left, the D key moves to the right, the Z key
       moves to the lower left, the X key moves straight down, and the C
       key moves the boat toward the lower right. This change allows  to
       move  the  boat  along a shore line and cast at the same time. If
       you are NOT in cast  mode,  eight  keys  on  the  numeric  keypad
       control  boat movement.  The left, right, up, and down arrow keys
       cause the boat to move in the direction indicated by the arrow on
       the key.  Additionally, you can move diagonally by  pressing  the
       HOME key to move the boat toward the upper left, the PG UP key to
       move  the boat to the upper right, the END key to move diagonally
       toward the lower left, and the PG DN key to move toward the lower
       right.  The arrow keys will not move the boat while  you  are  in
       cast  mode.   Instead,  they are used to position the cast if you
       are not using a mouse. Conversely, the Q, W, E, A, D, Z, X, and C
       keys will not move the boat if you are not in cast mode. Instead,
       they are used to execute various commands. Each time you move the
       boat, time is consumed. There is one other key  you  should  know
       about  when  it  comes to moving the boat. The '-' key will cause
       the boat to back up. If you are using the trolling motor, battery
       power is also used.  The outboard motor uses less  time  to  move
       your  boat, but also consumes gasoline.  The paddle uses the most
       time  of  all,  but  obviously  uses  neither  battery  power  or
       gasoline.   The boat cannot be moved off the screen. It should be
       noted here that the arrow keys will not  work  if  the  NUM  LOCK
       light on your keyboard is ON.

       * Rotating the boat

       The left and right arrow keys, if pressed while holding down  the
       CTRL  key  will  cause  your  boat  to rotate either clockwise or
       counter-clockwise while maintaining it's current location on  the
       screen. Rotating the boat allows for optimum cast positioning and
       also  uses  less  battery  power,  gas  and time. The boat may be
       rotated whether you are in cast mode or not. Obviously, to either
       move  or  rotate  your  boat  you  must  have  the outboard motor
       running, the trolling motor running, or be using the paddle.


       * Scrolling the screen

       When BASSTOUR first draws the lake on your screen, what  you  see
       is  really  only about one fourth of the lake. The initial screen
       represents the upper left corner of the lake.  You can scroll the
       screen (the 'lake') to the right, left up or  down  to  give  you
       access  to  the  whole  lake.  Press SHIFT-LEFT ARROW to move the
       screen to the left, SHIFT-RIGHT ARROW to move the screen  to  the

       right, SHIFT-UP ARROW to move the screen up, and SHIFT-DOWN ARROW
       to  move  the screen down. Scrolling the screen does not uses any
       battery power, gas or time. The arrow keys on the NUMERIC  KEYPAD
       are  the  ones you should use to scroll. Make sure too, that your
       NUM LOCK is not on.

       NOTE:  Some  computers  only  have  the four cursor (ARROW) keys.
       Others have these keys plus a numeric key pad with cursor (ARROW)
       keys. If you have one of these computers (i.e.  PS-2  model  25),
       pressing  SHFT  and one of the four separate cursor keys will not
       cause the screen to scroll. To scroll the screen on one of  these
       computers,  use  the  2, 4, 6, and 8 keys. Pressing 2 will scroll
       the screen down, 4 will scroll it left, 6 will scroll  it  right,
       and 8 will scroll it up. When scrolling in this manner, it is NOT
       necessary to use the SHFT key. Some  models  of  Tandy  computers
       also  exhibit  scrolling  problems. If you have trouble scrolling
       the screen, using the 2,4,6, and 8 keys on the main keyboard will
       usually work.

       * Casting (F5 or C)

       To make a cast, first you need to have a rod selected. Once a rod
       has been selected, each cast you make will assume the same rod is
       being  used.   Once  you have selected a rod to use, you will not
       need to select another unless you want to. Cast mode  is  entered
       by  pressing  F5  ('C' will also work) or by selecting the 'start
       casting' command with the mouse. You can easily determine if  you
       are  in  cast mode because the bottom line of screen will contain
       some brief casting instructions, and will disappear when you exit
       cast mode. If you are using the mouse, move the mouse cursor (the
       white arrow on the screen) to the place you want the cast to  go.
       Then,  press  the left button on the mouse. A line will appear on
       your screen between the boat and where the arrow is pointing.  If
       the sound is turned on, a squirt noise will accompany the line on
       the screen. The distance that you can cast will vary depending on
       the type of rod you have selected, and whether  or  not  you  are
       wearing  a  life  jacket. The skill level you are playing at also
       helps to determine the maximum cast  distance.  A  novice  cannot
       cast  as  far  as  a  pro. You cannot cast toward the rear of the
       boat.  If you are not using a  mouse,  a  small,  +  symbol  will
       appear somewhere near your boat when you enter cast mode. Use the
       up, down left and right arrow keys to then  position  your  cast.
       You  can  also move the cast marker diagonally by using the HOME,
       PgUp, END, and PgDn keys.  Once  you  have  positioned  the  cast
       marker  (the  + symbol) where you want it, press either the space
       bar or the F10 key.  If a fish strikes, the message FISH ON! will
       pop onto your screen, followed by other information windows about
       the fish. These messages will stay on the screen for short  time,
       then  disappear.  They will disappear immediately if you move the
       mouse or press a key while they are displayed.  This is to  speed
       up  the  game  if  you  desire.   Casting  too close to land will
       sometimes cause your bait to snag.   Casting  at  stumps,  docks,
       other  boats,  lily pads, rocks, etc. will normally not cause you
       to snag. While you are in cast mode, you can move the boat  using
       the  Q,  W,  E, A, D, Z, X, or C keys as described under the MOVE
       BOAT instructions.



       * Weighing In Your Fish (alt-F8 or W)

       Weighing  in your fish is almost as important as catching them in
       the first place. If you don't weigh in some fish, you  can't  win
       the  tournament.  Each  lake  has  a weigh in area signified by a
       bright yellow flag (or a flag with an X on  monochrome  systems).
       In  order  to weigh in, you must proceed to the weigh in area and
       dock your boat as close to the flag as possible  before  for  the
       six  hour  time  limit  has  expired. When you think your boat is
       close enough to the flag, press ALT- F8 (or  'W')  to  begin  the
       weigh  in  procedure. If you are not close enough to the weigh in
       area, a message will appear to let you know. If  you  are  within
       the weigh in area, the message "Are you sure you want to weigh in
       now?"  will  appear.   A  "Yes"  reply  will  start  the weigh in
       procedure, any other reply will abort the weigh in process.   You
       cannot  weigh in if you are in the cast mode. Fish can be weighed
       in at any time, but once you do, you are done  fishing  for  that
       day  of the tournament. A message will appear on your screen that
       say's  "Beginning  weigh  in...".  After  a  few  seconds,   your
       statistics  for  the day will pop onto the screen.  Once you have
       looked at your statistics for the day, press any key to view  the
       current  tournament  standings.  If  you  are  one of the top ten
       fisherman, your name will appear in red.  After you have examined
       the tournament standings, press any key to start the next day  of
       the  tournament.   The  tournament is over after you weigh in for
       the third day. It is a good idea to allow yourself plenty of time
       to get to the weigh in area.  You never know what might happen on
       your way back! If you are weighing in on  the  last  day  of  the
       tournament,  before  the  game  ends, you will have the option of
       listing the standings for the entire field of competition.

       If  you  have  a printer connected, you can make a listing of the
       day's fishing results, the daily tournament standings, the  final
       tournament standings and the standings for the entire field. Just
       press P when so instructed to get your print out.

                      Miscellaneous Commands

       * Contour Map (M or m)

       Pressing 'm' will display a small contour map of the lake you are
       fishing. The contour map can only be displayed if you are not  in
       the  cast  mode.  The map consists of shaded areas that represent
       the various depths in the lake. Shallow areas  are  indicated  by
       the lighter colors while deeper areas are indicated by the darker
       colors.  The weigh in area is shown as a bright yellow square and
       the current location of your boat is represented  by  a  blinking
       black/blue  square.   On  monochrome  displays,  both  the  block
       indicating the weigh in area and the block indicating  your  boat
       position  will blink. Consulting the contour map does not use any
       time or energy. The contour map can also be displayed  by  making
       the  proper  selection  with  the  mouse when the command list is
       displayed.


       * Sound ON/OFF ( F4 )

       This command is executed by pressing F4 while the command list is
       displayed,  or  by  clicking  on it with your mouse. There are no
       messages announcing whether or not the sound is on or off. If the
       sound is on  (the  default  at  the  start  of  the  tournament),
       selecting  this  command  will turn it off. If the sound has been
       turned off, this command will turn it back on. It can be  changed
       any  time  during  the  tournament,  and  will  remain  in effect
       throughout the three days of the tournament unless you change it.
       When the sound is on, a 'squirt' noise will be heard as you  make
       each  cast,  and  a buzzing sound will be heard when the outboard
       motor is running.  When you hook a fish, another  distinct  sound
       will be heard.

       * List Status (alt-F10 or S)

       This  command  is executed by pressing ALT-F10 (hold down the ALT
       key while you press F10), or by clicking on  it  with  the  mouse
       while the command list is displayed. A window will pop up on your
       screen  with  lots  of information pertaining to the rod you have
       selected, the lure type and color, time remaining etc.. It  costs
       you  no  time, battery power or gasoline to execute this command.
       Pressing 'S' will also cause the status to be displayed.


       * Add Fish Formula to bait ( F )

       When  you are in cast mode, you can add Fish Formula to your bait
       by pressing the F key. A short message will appear on the  screen
       to  notify  you  that  Fish Formula was used. Each time you add a
       shot  of  Fish  Formula,  it  costs  you  ten  seconds  in  time.
       Sometimes,  adding  Fish Formula seems to have a great deal to do
       with your success. You'll have to be the judge! Each shot of Fish
       Formula lasts for about 6 or 7 casts.


       * Weather Report

       This command causes a weather report to appear on your screen. It
       is  executed  by  pressing  ALT-F4  while  the  command  list  is
       displayed  or by clicking on it with the mouse. The weather is of
       little interest unless you are fishing at the  Pro  level.   Wind
       speed  and direction are important in that your boat may drift if
       the wind is strong enough. The boat will drift in  the  direction
       that  the wind is blowing.  Be aware that it is possible to drift
       into rocks or other obstacles that can  cost  you  some  kind  of
       penalty. It is also possible that your boat can become stuck as a
       result  of  drifting.  If you get stuck, it is sometimes (but not
       always) possible to run your boat in the opposite direction  from
       that  which  is  was  moving  when it became stuck. If you become
       stuck, and cannot get out, keep trying. There is no alternate key
       to access this command.


       * Quitting the Game

       Pressing  "Q"  will  give  you  the  option  of  ending the game,
       continuing the game, or starting the  tournament  over  from  the
       beginning.   You cannot quit the game while in cast mode.  If you
       start the tournament over from the beginning, the same lake  will
       be  used.  In order to change lakes, you must exit from the game,
       and then run it again.

       * View Record Catches ( V )

       Pressing the V key will display the current record sized fish for
       each  of the fishing areas. A total of 20 fishing areas exist for
       BASSTOUR, and the biggest fish caught at each of these areas will
       be listed along with who the angler was, and the  date  the  fish
       was  caught.  The standard BASSTOUR distribution disk is supplied
       with six different areas to fish, although an additional 14 areas
       are  available  (see  order  form  at  the end of this document).
       BASSTOUR will also work with lakes created with  Nels  Anderson's
       program,  BassMap  (see the credits at the end of this document).
       Up to a maximum of 50 fishing areas can be  used  with  BASSTOUR.
       The  listing  of the record fish will remain on your screen until
       you press the V key again, which will  display  the  10  heaviest
       stringers  (the  most weight weighed in) on record. When you have
       finished  viewing  the  heaviest  stringers,  press  any  key  to
       continue  what  you  were  doing.  If, during the weigh in, it is
       determined that your total weight qualifies you for one of the 10
       heaviest stringers, your name, total weight, date, and  the  name
       of  the  lake or river will be saved, and your record will become
       one of those to beat! The big fish records and the heavy stringer
       records can be printed when you see them displayed on the screen.
       To do this, first make sure your printer is ready, then press P.


       * The - (minus) Key

       Pressing the '-' key will cause the boat to go backwards.

       * ALT-S     Saving a Game

       You can save a game and continue playing it at a later time. This
       can  be  done  at  any time by holding down the ALT key while you
       press the "S" key. The current status of the game will  be  saved
       on your disk in a file called BTOUR.SAV. This file occupies about
       60k  of  disk space so be sure that your disk has enough room for
       the file. If you have  saved  a  game,  it  can  be  restored  by
       selecting "R" when you are asked what area you would like to fish
       on the title screen.

       Do  not  try  to save a game in a particular video mode and later
       try to restore it in a different video mode than  what  you  were
       playing when you saved it. This will cause your computer to hang,
       and may require that you turn the machine off and then back on to
       recover.  For  example,  if  you save the game while in EGA mode,
       then attempt to restore it by  forcing  CGA  mode  (with  the  -c

       option) your computer will probably hang up.

       * List Fish in Livewell  (ALT-F)

       This  command  will  display a list of the fish currently in your
       livewell. Up to five fish are listed, showing their weights.

       * BOSS Mode    (ALT-Z)

       This was not my idea! Many people requested it so here it is. You
       know what to use it for. When  you  press  ALT-Z,  the  lake  map
       disappears  and  is replaced with a dummy disk directory listing.
       The lake map will reappear and the game will  continue  when  you
       press any key.

       NOTE: If you ARE a boss, you cannot use this command!


                      SUPPORT CATCH AND RELEASE!



        A Few Choice Words....

        * Wear your life jacket at all times. Put it on at the start of
          each day of fishing. (good advice in real fishing too!)

        * Start the live well aerator as soon as the first fish is
          added to it. This will usually save you a penalty at weigh
          in time.

        * Work a likely spot thoroughly. Make several casts to the
          same area. Applying Fish Formula sometimes helps.

        * If you're not catching fish, try another bait or change
          colors. Often, a totally different type of bait will produce
          results.

        * Allow plenty of time to return to the weigh in area.

        * Use the ROTATE keys. They use less time and energy than
          moving the boat.

        * If you run into rocks, stumps etc. back your boat out in the
          opposite direction.

        * Learn to recognize areas that might cause you to snag. Lost
          lures cost you time and money.

        * Use the contour map. It will help you find the deep holes,
          and make it easier to get back to the weigh in area.


        Credits:

        * Nels Anderson for allowing me to use  some  of  his  marvelous
       programming  tools.  Without  him,  BASSTOUR  could not have been
       written. Nels is the wizard that  brought  us  MAHJONGG  and  EGA
       TREK.  You  haven't  seen an EGA program until you've seen one of
       his! Nels has a program available called  BassMap,  which  allows
       you  to  create your own lakes for use with BASSTOUR. His address
       is: Nels Anderson 92 Bishop Drive Framingham, MA 01701

          BassMap costs  $15  plus  $2  for  postage.  It  can  also  be
          downloaded from the Xevious BBS mentioned below.

        * J.R. Mead, my 8 year old nephew for his tireless play
          testing of BASSTOUR. At the age of eight, J.R. has caught
          more and bigger real bass the most fisherman ever will.

        * Jodi Mead, my 11 year old niece for her play testing of
          BASSTOUR. She holds the big fish record in BASSTOUR with a
          10.4 pound lunker.

        * John Mead, my brother-in-law and dedicated fishing partner.
          They don't come much better!

        * Bob Lovelace, my tournament partner and valued friend. He
          has been a play tester for the whole six months of
          development.

        * My brother, Pete Olsen. He created 'Pete's Pond', one of the
          lakes on the distribution disk. He also did plenty of play
          testing and had lots of suggestions.

        * My sister, Pinki (Mrs John Mead) for putting up with all of us
          throughout the test period and during the fishing season.

        Good Fishing!

        Dick Olsen


        Be  sure  to  try the )(evious BBS system in Framingham, MA. The
        newest version of BASSTOUR is always available there first!  You
        can  also  leave  me  messages there. Leave notes to Dick Olsen,
        then check again in a day or two for a  reply.  The  number  for
        )(evious is : (508)-875-3618.


                      PROBLEM REPORT FORM

       If you encounter a problem with BASSTOUR, I'd like to know about
       it. Please take a few minutes to fill out the following form, then
       mail it to me. I will do my best to correct the problem. If a new
       version of BASSTOUR is created as a result of the problem you have
       reported, I will send you the new version with the problem
       corrected.

       Your Name_______________________________________________________

       Street Address__________________________________________________

       City, State, ZIP________________________________________________

       Day time Phone #________________________________________________

       Evening Phone #_________________________________________________

       Best time to call_______________________________________________

       What version of BASSTOUR do you have?___________________________

       Where did you get it?___________________________________________

       What brand of computer are you using?___________________________

       What Model of computer__________________________________________

       How much memory does your computer have?________________________

       What brand of video card does your computer have?_______________

       If EGA, how much memory is on the EGA card?_____________________

       What other cards are in your computer?

       ___________________________________________________________________

       Are you using a mouse?___________________
       Does your computer have a hard disk?__________More than one?_______

       Describe the problem. What were you doing when it happened? What
       mode were you operating in? Were you out of gas or was the battery
       dead? Was the LCD recorder on? Was the sound on?
       ___________________________________________________________________

       ___________________________________________________________________

       ___________________________________________________________________

       ___________________________________________________________________


                            REGISTRATION FORM v4.3

       Dear Dick,

       Enclosed please find my check or money order for $15.00. Please
       register me as a BASSTOUR user and send me the latest version if
       the version I currently have is not the latest.

       Thanks!

       YOUR NAME________________________________________________

       STREET ADDRESS___________________________________________

       CITY, STATE, ZIP_________________________________________

       COUNTRY__________________________________________________

       BASSTOUR Version you have________________________________

       COMMENTS_________________________________________________

       _________________________________________________________

       _________________________________________________________

       Other programs available from the author:

             LAKES #1......A collection of 7 new fishing areas you can
                           add to BASSTOUR. Installation instructions
                           are included.

             LAKES #2......Another  seven  fishing  areas  to  use  with
                           BASSTOUR.  Use  of both LAKES #1 and LAKES #2
                           will bring the total number of fishing  areas
                           to 20. Includes installation instructions.

             FISHBASE ][...A fisherman's data base/statistics program
                           for color or monochrome systems

             BASSTIPS......A  collection  of  valuable  fishing  tips. A
                           program is provided to pop the tips onto your
                           screen, or add your own tips. Over 100 tips.

             TIKLER........A simple, quick reminder program
                           for color or monochrome systems

       Available   for  $10  each.  Plus  $2.00  to  cover  postage  and
       materials. Please specify what you want.

       Mail TO:

       Richard Olsen
       68 Hartwell Ave.
       Littleton, MA.  01460









```
{% endraw %}

## FILE1319.TXT

{% raw %}
```
Disk No: 1319                                                           
Disk Title: BassTour                                                    
PC-SIG Version: S4                                                      
                                                                        
Program Title: Basstour                                                 
Author Version: 4.3                                                     
Author Registration: $15.00                                             
Special Requirements: 512K RAM and EGA, VGA, CGA or Hercules.           
                                                                        
BASSTOUR is a fishing tournament game in which you captain a fully-     
rigged bass fishing boat.  You control where the boat goes and and how  
it gets there.  Your bass boat has all the latest accessories, including
a trolling motor, LCD chart recorder, a rod box containing six different
fishing rods, and a fully-stocked tackle box.  The object of the game   
is to catch the heaviest five fish limit on each of three days of the   
tournament.  The fisherman with the highest total weight wins the       
tournament.  As in real fishing, it's not always easy!                  
                                                                        
BASSTOUR has three levels of play: novice, intermediate and             
professional.  In any of the skill levels, you are fishing against 30 of
the top names in bass tournament fishing.  You have six different bodies
of water that you can fish.  The fishing area is drawn on the screen,   
and the program randomly decides where fish should be placed.  If you   
love to fish, you will love BASSTOUR.                                   
                                                                        
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
║               <<<<  PC-SIG Disk #1319  BASSTOUR   >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print author's beginning instructions, type:                         ║
║                  COPY README.DOC PRN (press Enter)                      ║
║                                                                         ║
║ To print the BASSTOUR documentation, type:  COPY BT.DOC PRN (Enter)     ║
║                                                                         ║
║ To install BASSTOUR, type:  BTINSTAL (press Enter)                      ║
║                                                                         ║
║ To view "Common Questions and Problems with BassTour," type:            ║
║                     TYPE Q&A.TXT (press Enter)                          ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1990, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## LAKERECS.TXT

{% raw %}
```
CRYSTAL LAKE
8.0
JOE Q. FISHERMAN
1/1/89
MEAD RESERVOIR
8.0
JOE Q. FISHERMAN
1/1/89
MAZE LAKE
8.0
JOE Q. FISHERMAN
1/1/89
LAKE LEWIS
8.0
JOE Q. FISHERMAN
1/1/89
HORSESHOE POND
8.0
JOE Q. FISHERMAN
1/1/89
PETES POND
8.0
JOE Q. FISHERMAN
1/1/89
```
{% endraw %}

## Q&A.TXT

{% raw %}
```



                  Common Questions and Problems With BassTour

       The  following  represents the most common questions and problems
       encountered with BassTour. Before calling or writing  us,  please
       read  the  instruction manual thoroughly. We have found that many
       problems can be answered right there.

       [1]
       PROBLEM: "I cannot make the program scroll to another section  of
                 the lake".

       SOLUTION:  First,  make  sure  the  NUM  LOCK  is not set on your
                  keyboard. Then, be sure  you  are  using  the  NUMERIC
                  KEYPAD  ARROWS, not the separate cursor control arrows
                  on  101  key enhanced keyboards. Remember to press the
                  SHIFT key while you press the arrow keys.

                  On  many  computers,  in  particular  the  early Tandy
                  machines,  there  was  an  incompatibility  with   the
                  keyboard.  These  machines  would   not   generate   a
                  different  keycode  when the NUMERIC KEYPAD arrow keys
                  were shifted. This  problem  occurs  on  some  'clone'
                  machines  too.  This  can usually be remedied by using
                  the 2,4,6 and 8 keys in  the  top  row  of  your  MAIN
                  KEYBOARD. Do not use the SHIFT  key  when  using  this
                  method.

       [2]
       PROBLEM:  "Sometimes  'garbage'  appears when I try to scroll the
                  screen or select a rod or bait".

       SOLUTION: BassTour needs lots of FREE memory. Just  because  your
                 computer  has 640k or more of memory does not mean it's
                 all free for BassTour to use. We have found that memory
                 resident programs (TSR'S) are one of the main causes of
                 this problem. Programs like RAM DISKS, PRINTER BUFFERS,
                 KEYBOARD  ENHANCERS  and  MENU  programs  should not be
                 loaded before running BassTour. These  programs  occupy
                 memory  space  even  when  not  running, thus making it
                 unavailable to BassTour.

                 Another occasional cause of this  problem  is  lack  of
                 sufficient  memory  on  your EGA card (if you are using
                 one). Many of the older EGA cards only had 64k or  128k
                 of  video memory. They should have 256k to properly run
                 BassTour.


       [3]
       PROBLEM: "The program tries to start, but then stops."

       SOLUTION: One of the main causes of this problem is too many open
                 files. DOS only allows 15 open files per process. Check
                 your  CONFIG.SYS  file  to  be  sure  it  contains  the
                 following two lines:

                                  FILES=20
                                  BUFFERS=20

                 BassTour tries to open several files when it starts. It
                 then  assumes  they  were  open for its use. If in fact
                 they were NOT opened, the program may hang waiting  for
                 them  to  be  available.  The two lines described above
                 will help prevent this from happening.

       [4]
       PROBLEM: "I cannot save a game to the disk."

       SOLUTION: Many people try to save games (to be played  later)  on
                 the  original  distribution diskette. A saved game uses
                 about 60k of disk space, and the distribution  diskette
                 must have at least that much free if you expect to save
                 a  game.  Also,  make sure you're not in CAST MODE when
                 trying to save a game with the ALT-S key combination.

                 Sometimes, people have a clock or some other  interrupt
                 driven program running at the same time they're running
                 BassTour. Since these programs use interrupts, they can
                 'steal'  time  from BassTour. If one of these prrograms
                 decides to 'steal' its time while BassTour  is  writing
                 to the disk, the resultant file may be damaged. This is
                 because  DOS  itself  is  inherently non-reentrant, and
                 BassTour uses DOS facilities to write to the disk.  See
                 #3 above as well.

       [5]
       PROBLEM: "I cannot restore a saved game."

       SOLUTION: See #3 and #4 above. Also, make sure ALL files that are
                 supplied  on your BassTour distribution disk are in the
                 same directory as  BassTour.EXE.

       [6]
       PROBLEM:  "BassTour  does  not  always  save  my  record  catches
                  properly!"

       SOLUTION:  See  #3  above.  Also,  some  people thought they were
                  clever, and tried to edit the LAKERECS.TXT and/or the
                  STRINGER.TXT  files.   Don't  try  it!  One  misplaced
                  space or deleted/added line can mess the files up beyond
                  repair.


       [7]
       PROBLEM: "I get a RUNTIME ERROR 002 then the program stops!"

       SOLUTION: This means  that  BassTour  cannot  open  a  file  it
                 needs. This can happen if you do not have all the files
                 that are supplied on the original distribution diskette
                 in   the   same   directory   as   the   main  program,
                 BASSTOUR.EXE. It can also happen if you are  missing  a
                 file altogether. Also, refer to item 3, above.

       [8]
       PROBLEM: "I get a runtime ERROR 004 then the program stops!"

       SOLUTION: This means that access to a file needed by BassTour has
                 been denied by DOS. Make sure there is no write-protect
                 tab on your diskette, and see item 3 above.

       [9]
       PROBLEM: "I have an IBM  PS-2.  The  program  reports  that  it
                 detects a VGA card then stops, hanging up my machine".

       SOLUTION: Some models of PS-2 computers have the MCGA video mode.
                 This  mode  (320 x 200 x 256 colors) is a subset of the
                 VGA specification. These  computers  reports  VGA  when
                 queried by BassTour. BassTour then assumes that since a
                 VGA  card  was detected, that it should use the maximum
                 screen resolution it  can,  which  is  640  x  350,  16
                 colors.  You  can  force  BassTour  to  run  in  either
                 standard CGA mode (320 x 200 x 4 colors) or in the MCGA
                 mode by using one of these command lines when you start
                 the game:

                           BASSTOUR -C    (for CGA Mode)
                           BASSTOUR -M    (for MCGA mode)

       [10]
       QUESTION: "I have a VGA card in my machine, yet the program seems
                  to run in 16 color EGA mode. Why, and how do I make it
                  utilize the 256 colors of my VGA?"

       ANSWER: See item 9, above. BassTour runs in the EGA mode of  your
               VGA  card.  It  does not support true VGA (640 x 480 x 16
               colors) at this time. You can use the MCGA  mode  of  VGA
               (320 x 200 x 256 colors) as described in item 9.

       [11]
       QUESTION:  "I  have  a  Tandy  machine that supports 16 color CGA
                   mode. Is there a way I can run BassTour in this mode,
                   or am I stuck with the four color CGA mode?"

       ANSWER:  No, at least not at this time. The 16 color 'Tandy' mode
                is a non-standard video mode currently only supported by
                Tandy machines. I'm afraid you're stuck  with  good  ol'
                CGA.  Why not upgrade to VGA if you want great color and
                screen resolution in BassTour?


       [12]
       QUESTION: "Why did you choose such awful colors in CGA mode?  Why
                  not  blue  for the water, brown for land, or something
                  more realistic?"

       ANSWER: We didn't choose those colors! In CGA, we have  a  choice
               of Palettes (groups of colors), NOT the individual colors
               within those palettes. If you think these colors are bad,
               take  a  look  at  your  CGA card manual and see what the
               alternatives were!

       [13]
       QUESTION: "I have added disks LAKES #1 and LAKES #2 to  BassTour.
                  Having  20  lakes  to choose from is great, but why do
                  I set lakes records with such small fish?  I  find  it
                  annoying  to  wait for the 'Record Fish Ceremony' each
                  time!"

       ANSWER: You won't for long. As supplied, BassTour only has record
               information for the original six lakes. When you add  new
               lakes, records need to be established for those lakes. At
               first,  a  one pound fish will be a record. Gradually, as
               the sizes of the record  fish  increase,  record  setting
               will occur much less often. Why not just get it over with
               quickly and catch an 8 or 10 pound fish right away!



```
{% endraw %}

## README.DOC

{% raw %}
```
Welcome to BassTour, the ULTIMATE fishing game! Hopefully, you'll enjoy the 
game enough to support my efforts by registering your copy. To register, send
cash, check or money order for $15.00 (U.S. funds) to:

                     Richard Olsen
                     68 Hartwell Ave.
                     Littleton, MA  01460

Registered users will receive the newest version of the game unless the
version they have is the latest. In that case, they will be notified as such
and their name will be added to my list of users to whom I owe an update.
If a new version is then released, I will send these people a copy.

Several other programs are available from the author. Please see the order
form at the end of the BT.DOC file included on this disk.

The BT.DOC file contains all the operating instructions for BassTour. To copy 
it to your printer, insert the BassTour diskette into your A: disk drive and
type:

              copy A:BT.DOC PRN:

This disk also contains a file called Q&A.TXT. It is a list of common
questions and problems about BassTour. Before you write or call with a 
question, please read both the BT.DOC file and the Q&A.TXT file.

Thanks, and good fishin'!

Dick Olsen
```
{% endraw %}

## STRINGER.TXT

{% raw %}
```
PETES POND
40.0
JOE Q. FISHERMAN
1/1/89
MEAD RESERVOIR
40.0
JOE Q. FISHERMAN
1/1/89
HORSESHOE POND
40.0
JOE Q. FISHERMAN
1/1/89
LAKE LEWIS
40.0
JOE Q. FISHERMAN
1/1/89
MAZE LAKE
40.0
JOE Q. FISHERMAN
1/1/89
CRYSTAL LAKE
40.0
JOE Q. FISHERMAN
1/1/89

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1319

     Volume in drive A has no label
     Directory of A:\

    BTINSTAL BAT       136  12-11-89   4:56p
    BASSTOUR EXE     90569   7-17-90  11:38a
    BT       DOC     56032   7-05-90  10:23a
    CRYSTAL  MAP      2332  10-25-88   1:20p
    HORSE    MAP      2334   2-06-89   1:53p
    LEWIS    MAP      2330  10-21-88   9:20a
    MAZE     MAP      2329   2-06-89   1:54p
    MEAD     MAP      2334   2-06-89   1:54p
    PETES    MAP      2330  10-21-88   9:18a
    WAVES    PAL       130   5-10-88  11:46a
    BASSBOAT PIC      6962  12-07-89  10:47p
    CGAMAP   PIC     13936   2-08-89   9:51p
    HERCMAP  PIC     13936  12-24-88   4:51a
    MAP      PIC     13936  10-24-88  12:38p
    MCGAMAP  PIC     27248  12-07-89  11:41p
    TITLE    PIC     11186  12-07-89  10:45p
    MAP      TRN       375  10-21-88   8:28a
    LAKERECS TXT       267  11-16-89   8:34p
    STRINGER TXT       275  11-16-89   8:34p
    README   DOC      1225   7-16-90   2:39p
    Q&A      TXT      9444   4-05-90  11:28p
    FILE1319 TXT      2221   9-20-90  11:58a
    GO       BAT        40   1-01-80   6:00a
    GO       TXT      1233   1-01-80   4:21a
           24 file(s)     263140 bytes
                           44032 bytes free
