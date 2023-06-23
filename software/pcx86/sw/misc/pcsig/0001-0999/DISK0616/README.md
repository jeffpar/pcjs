---
layout: page
title: "PC-SIG Diskette Library (Disk #616)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0616/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0616"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "CORBIN HANDBOOK 1 OF 2 (ALSO 617)"

    This disk is the first of a two disk set containing the Corbin Handbook
    of Bullet Swaging, No. 7 written by Dr. Corbin.  This one has the
    table of contents and the first 11 chapters.  It is saved in ASCII text
    format.
    
    The subject of bullet swaging is the manufacture of projectiles using
    high pressure to flow ductile metals at room temperature into the
    precise dimensions of a strong, highly-finished steel die.  The process
    is discussed both as a hobby for the firearms enthusiast and as a
    highly profitable part-time business venture, supplying handloaders
    with high quality, special purpose bullets.  Utility programs on this
    diskette facilitate the retrieval of the Corbin Handbook information.
    
    System Requirements:  64K, one disk drive, a monochrome display and an
    ASCII text editor or word processor.
    
    How to Start:  Consult the READ.ME and INTRO.TXT for directions.  To
    run, prepare two formatted disk with the DOS system command and add
    files FIND.EXE and ANSI.SYS; copy 616 to one and 617 to another using
    the COPY *.* command.  Either can now be run by placing in A: and
    hitting CRTL-ALT-DEL and following the access menus that then appear.
    
    Suggested Registration:  The handbook is available in a bound, printed
    book format for $4.00 by ordering directly from Corbin Manufacturing &
    Supply.
    
    File Descriptions:
    The First Disk Contains:
    -------- ---  -  Corbin Handbook
    SHOW     DOC  Documentation for SHOW.BAT
    SHOW     BAT  Display text file utility
    ST       DOC  Documentation for ST.COM
    ST       COM  Display text file program
    SDIR     COM  Show directory utility batch file
    SCRNSAVE COM  Screen save utility
    READ     ME   Documentation about Corbin and Bullet Swaging
    INTRO    TXT  Short introduction text of Corbin
    HB7      BAK  Backup of HB7.BAT
    HB7      BAT  Introduction Batch file
    *        TXT  Documentation for the Corbin Handbook (11 files) (245k)
    AUTOEXEC BAT  Start up batch file
    
    The Second Disk Contains:
    AUTOEXEC BAT  Startup Batch file
    -------- ---  -  Corbin Handbook (Chptr 12-22)
    HB7      BAT  Setup Corbin chapters
    HB7      BAK  Backup batch file
    *        TXT  Documentation for the Corbin Handbook (10 Files) (168k)
    AUTOEXEC BAK  Startup Batch file backup
    READ     ME   Information from the author
    SHOW     DOC  Documentation for SHOW.BAT
    SHOW     BAT  Batch file for text display
    SDIR     COM  Show directory utility
    SCRNSAVE COM  Screen save utility
    ST       DOC  Documentation for ST.COM
    ST       COM  Text display utility
    FKEY     BAT  Function key batch file to set utility function
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHAPT-1.TXT

{% raw %}
```
.he CHAPTER 1 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                            HOW DO YOU SWAGE BULLETS?  


          There  are  five different ways to swage bullets today.   You  can 
     use:
                    (1) A POUND DIE
                    (2) A RELOADING PRESS
                    (3) The CORBIN MITY MITE PRESS
                    (4) The CORBIN MEGA MITE PRESS
                    (5) The CORBIN HYDRO-PRESS

          Each  of the five methods has certain advantages.   The pound  die 
     requires no press, but instead, uses a mallet.  It is somewhat lower in 
     cost because you do not need to purchase a press, but it is much slower 
     to  use and doesn't produce jacketed bullets.   It is ideal for swaging 
     large  caliber lead bullets,  and is often selected by  replica  black-
     powder  rifle shooters who wish to use an authentic reproduction of the 
     earliest form of swaging die (from the 1890's). 
          The  reloading  press system is economical since most  handloaders 
     already own a suitable reloading press.  It is limited to smaller rifle 
     calibers (from .257 to .224) and medium handgun calibers (from .357  to 
     .25  ACP) because of the inherent weakness of the slotted  ram.   There 
     are certain design restrictions imposed on this system by the press, so 
     it  is  not ideal for special work or custom  calibers.   Corbin  makes 
     standard  calibers and shapes only,  in this system.   The cost is thus 
     kept low for the quality.  Speed is greater than the pound die but less 
     than the other, special swaging systems.
          The  Corbin Mity Mite system uses a special horizontal  ram  press 
     with more power than any reloading press built.  It is much faster than 
     a  reloading press since it ejects the bullet automatically on the back 
     stroke.   The dies for this system,  and the matching punches,  do  not 
     interchange with the reloading press system.  They are made to fit into 
     the RAM of the press,  instead of the press head.  Calibers from .14 to 
     .458,  tubing  jackets  with walls of up to  .030-inch  thickness,  and 
     weights up to 450 grains, can all be swaged with the Mity Mite.  Custom 
     work is done in this system.
          The  Corbin Mega Mite system is based on a massive machined  steel 
     press that can handle both reloading and bullet swaging.  It can accept 
     ANY  of  the Corbin dies,  including those for the  Hydro-press.   This 
     ability  to interchange various kinds of dies can be important to  some 
     owners.   However,  there  are limits to any hand-powered  press.   The 
     amount of force the Mega Mite produces is awesome,  but still less than 
     required for certain large caliber, heavy-jacketed production work.
          The   Corbin  Hydro-press  system  is  the  ultimate   in   bullet 
     manufacturing  today.    It  features  automatic  stroke  and  pressure 
     control,  electronic  sensors and timing,  programmable stroke control, 
     and  many other advanced concepts that place it at the top of the  list 
     for custom bullet firms around the world.  Any caliber from 20mm cannon 
     to a 10 gauge shotgun slug can be swaged, in virtually unlimited weight 
     or  style.   Solid  brass or copper rod can be  formed  instantly  into 
     bullets  of  higher  precision than lathe turning.   Lead wire  can  be 
     extruded  like  toothpaste.   And the press adapts easily  to  standard 
     reloading dies for the convenience of automatic sizing and seating.
          Any  of  the various swaging systems use the principle  that  cold 
     metal will flow under sufficient pressure and take on the shape of  the 
     vessel holding that pressure.   The swage die is a very strong,  highly 
     finished  vessel for containing the pressure.   You swage the bullet in 
     all  these systems by driving a punch against the material while it  is 
     held within the confines of the die cavity.   Upward expansion from the 
     internal  pressure  created is the key factor in forming  the  bullets.  
     Reduction in diameter is called "drawing".   Remember,  swaging  always 
     expands the bullet or material upward in diameter.  
          Drawing dies are used to reduce the diameter of an object, such as 
     a  bullet  or a piece of copper tubing or a jacket.   They differ  from 
     swaging  dies,  in  that the drawing die has an open top and  only  one 
     punch  is used.   The component is pressed through the die and out  the 
     top.   In passing through a hardened constriction,  it becomes smaller.  
     Drawing has serious restrictions when applied to finished bullets,  and 
     can  only  be  used for very limited amounts  of  reduction.   But  for 
     reforming  jackets  and  making copper tubing into  jackets,  it  is  a 
     valuable tool.
          If  you try to put a piece of lead or a jacket into a die that has 
     a smaller diameter of cavity,  the material will be forced down in size 
     and  will exert a strong pressure against the sides of the  die.   When 
     the pressure is relieved,  by ejecting the component,  the material may 
     exert a certain amount of springiness,  and become slightly larger than 
     the die cavity.  In making swage dies,  the die-makers have to  contend 
     with  the  various  amounts of spring-back in different  hardnesses  of 
     jackets,  different thicknesses of jacket wall, and other factors.  The 
     die  itself is normally a different diameter from the  actual  finished 
     bullet that comes out of it.
          What  this means to you as a potential bullet-maker,  is that  you 
     should  NEVER try to force anything into a swage die.   If it won't fit 
     easily,  don't push it in.  At best, it will make the wrong diameter of 
     bullet.   But  generally,  it  will stick fast in the die  and  require 
     special  techniques to remove.   And at worst,  it can generate  enough 
     pressure to break the die!
          In  the following chapters,  we'll discuss the various methods  of 
     making bullets in more detail, one system at a time.  Bear in mind that 
     there are hundreds of possible variations on the techniques,  depending 
     on  what you want to make.   It would be impossible to send this manual 
     to  you  by mail if every style of bullet were to be described  detail, 
     with each step required to make it.   We have to give you the basics of 
     making  two  or  three  styles,  and refer you  to  the  more  detailed 
     technical books for advanced techniques.
          It  is  far  more important for you to  understand  the  principle 
     differences between lead bullet swaging,  semi-wadcutter (and  jacketed 
     wadcutter) styles of swaging, and the styles that bring the jacket into 
     the nose curve or ogive portion of the bullet.  These three basic kinds 
     of  bullets form the basis for everything else.   If you understand how 
     to make them,  then variations such as rebated boattails, liquid-filled 
     internal cavities,  partitions,  and other advanced designs are  fairly 
     simple to pick up.   They aren't different:   they just expand a bit on 
     the basic techniques.
```
{% endraw %}

## CHAPT-10.TXT

{% raw %}
```
.he CHAPTER 10 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                     INDIVIDUAL DIES FOR THE RELOADING PRESS

          You can make up your own swaging kit for a reloading press, or you 
     can   add  dies  to  existing  kits  and  expand  your   bullet-swaging 
     capabilities caliber by caliber.  
          With the suggested kits in the previous chapter,  I didn't suggest 
     any lead tip dies.   They are very useful in the three rifle  calibers, 
     when you want a nice factory-finished lead tip.  But they are something 
     you  can  add  at any time.   It isn't necessary to match this  die  as 
     exactly as with the core seater and point former.  A half-thousandth of 
     an inch tolerance is plenty, and that is easy enough for the die-makers 
     to handle without getting your set back.
          Individual dies are available in these styles and calibers:

          .224      6-S Ogive      CS-1-R, PF-1-R, LT-1-R
          .243      6-S Ogive      CS-1-R, PF-1-R, LT-1-R
          .257      6-S Ogive      CS-1-R, PF-1-R, LT-1-R

          .251      RN, TC ogive   CS-1-R, PF-1-R
          .308      RN ogive       CS-1-R, PF-1-R
          .312      RN ogive       CS-1-R, PF-1-R
          .314      RN ogive       CS-1-R, PF-1-R
          .355      RN, TC ogive   CS-1-R, PF-1-R
          .357      RN, TC ogive   CS-1-R, PF-1-R
          .358      RN, TC ogive   CS-1-R, PF-1-R

          When  you  order the CS-1-R,  it comes with a flat  base  internal 
     punch  and a Keith external punch in the handgun  calibers.   In  rifle 
     calibers,  it  comes  with  flat base internal and  open  tip  external 
     punches.   If  you  would  like  to add other  shapes  to  the  handgun 
     calibers, you can order these additional punches:

          (1) Conical (semi-wadcutter angled to a point, like a pencil)
          (2) Round Nose (semi-wadcutter eliptical round nose)
          (3) Hollow Point (universal projection punch, used with any other)
          (4) Wadcutter (slightly raised button nose style)
          (5) Cup Nose (a shallow, round cup shape)
          (6) Open Tip (a punch that fits inside the jacket, for 2-die sets)
          
          Those are nose shapes available, in standard off the shelf designs 
     only.   In  this system,  the punches are made to standard patterns and 
     cannot  be  made to special order without incurring  regular  time  and 
     material charges over the usual punch price.  With current salaries for 
     die-makers where they are,  you may not be thrilled to hire one to make 
     a  punch  slightly different from standard (chances  are,  your  target 
     would never know the difference anyway).
          Base  shapes  can  also  be changed by ordering  an  extra  punch.   
     There are internal punches to replace the standard flat base.   You can 
     order:
          
          (1) Dish Base (very shallow curve to the edge of the jacket)
          (2) Cup Base (slightly deeper, like the cup nose, with flats to
              the edge of the bullet)
          (3) Hollow Base (very deep, like the hollow point punch.  Not well
              suited to jacketed bullets but nice for lead bullets)

          The rifle calibers are always ordered with a matching point former 
     die.   You can't make a complete bullet in the CS-1-R alone for a rifle 
     caliber,  since  the velocity is so high that pistol designs tend to be 
     unstable and have poor ballistics.  You are welcome to order these dies 
     for  replacements,  but  good luck trying to make a finished bullet  in 
     one!   When  you order the core seater and point former as  a  set,  it 
     makes  up  the BSD-xxxR catalog number.   You don't need to order  each 
     one, if you specify the BSD-xxxR.
          All  punches  are ordered with the catalog  number  "PUNCH-R"  for 
     reloading  press  use.   Then,  specify  internal  or  external  punch, 
     caliber,  and  shape  (if it needs to be specified,  as with noses  for 
     handgun  punches).   To order a replacement ejection pin for the  point 
     forming dies,  always specify the caliber.  You can call it a "PUNCH-R" 
     and specify ejection pin, plus caliber.  That will get it.  
          Core seating punches for the rifle calibers are made in  different 
     diameters to fit inside the various jackets available.   Either tell us 
     the  diameter you want and we will supply the closest standard diameter 
     that we have,  or send a sample jacket to match.   In the .224, we have 
     two core seat external punches.   One fits the rimfire jacket,  and one 
     fits the commercial jacket that we sell.   The diameters are 0.204  and 
     0.197 inches, respectively.  
          Many people have commented that they were not able to make a light 
     enough bullet with a certain jacket.   After I checked it out,  I found 
     that the problem was the style of bullet.  Most of the standard jackets 
     make just about any weight you like, if you know how to make use of the 
     punches  and dies.   The open tip core seating punch will push a  short 
     lead  core as far into the jacket as you like.   Then the point forming 
     die  will wrap the end of the jacket around the ogive,  and the  bullet 
     can be as light as you wish.  
          The problem is with solid lead tip Keith style bullets.  They fill 
     the  jacket,  and  then some.   Typical jackets  available  today  make 
     maximum weights for the caliber with this sort of style.  The answer is 
     to use the hollow point and cup base punches on the bullet first,  then 
     follow with the Keith punch.   This lets you use a lot less lead, moves 
     it  forward  so  it can form lead nose within the cavity of  the  Keith 
     punch, and thus produces a very light bullet in a very long jacket.
          One last point about reloading press dies:   they are just as good 
     as  any  other kind,  except that they are made to fill  the  need  for 
     entry-level,  lower  cost  bullet-making.   Rather than cut corners  on 
     quality,  we  decided long ago that the best approach was to limit  the 
     styles,  calibers,  and options available to a managable, popular group 
     and  then  make the equipment in longer runs,  without the  expense  of 
     individual, custom work.
          When  someone calls and insists on having a reloading  press  die, 
     but  with some special options that are not standard ones,  they are in 
     effect crashing the whole idea of equal quality at lower cost.   If one 
     can afford the expense of the custom work, they can probably save money 
     by  getting the Mity Mite system to start with.   It was designed  with 
     custom work in mind.  And if someone doesn't want to buy the press, but 
     just wants the dies made special, then they should consider the cost of 
     the die-maker's time.   It amounts to buying the press anyway.  Why not 
     get  it?   Then,  everything  made  in the future will  still  fit  and 
     interchange properly.  Custom work usually doesn't.
```
{% endraw %}

## CHAPT-11.TXT

{% raw %}
```
.he CHAPTER 11  CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                                    DRAW DIES 

          Draw dies,  or drawing dies (as they are also called),  are simply 
     ring dies used to reduce the diameter of a component.   When you size a 
     cast  bullet,  you are using a much less precise version of a draw die.  
     The draw dies made by Corbin are extremely hard,  tough  venturi-shaped 
     tools held in a 7/8-14 TPI body.   A punch pushes the component through 
     the die and out the top.  
          There are two general types of draw dies.   The JRD-1 can be  made 
     either  for  bullets,  or for jackets.   The bullet draw die reduces  a 
     finished  bullet  by  a small amount,  sometimes as  little  as  0.0005 
     inches,  and  sometimes  as much as  0.003  inches.   However,  greater 
     reductions cause distortion of the bullet and are not feasible.  
          Jacket draw dies can reduce an existing jacket by a whole caliber.  
     This  is  the  way that .41 caliber jackets  are  obtained  today,  for 
     instance.   A  .44  caliber  jacket is pushed through a  draw  die  and 
     reduced  to .41 caliber.   This would not work with a  bullet.   Jacket 
     drawing  punches fit inside the jacket,  and actually push  it  through 
     base first, while bullet draw dies push the bullet through nose first.
          Special  versions of draw dies turn fired .22 cases into  .224  or 
     .243  caliber rifle jackets.   The .22 WMR case can be drawn to a  long 
     6mm jacket in another die,  and shotgun primers can be turned into free 
     .25 ACP jackets with another.   Draw dies perform a remarkable service. 
     Their  limitations  are  discussed in "REDISCOVER SWAGING"  in  detail.  
     Dies  ending in "R" fit the standard reloading press and have  a  punch 
     that  fits  into the press ram.   Dies ending in "M" fit the Mity  Mite 
     press,  and have a punch that screws into the press ram.   The die goes 
     into the press head,  replacing the floating punch holder.  Dies ending 
     in  "H" are made for the Corbin Hydro-press.   They have a  long  punch 
     that screws into the ram,  and the die fits into a 7/8-14 adapter which 
     in  turn fits the 1.5-12 thread of the press head,  also replacing  the 
     floating punch holder.  
          
          RFJM-22R       Rimfire Jacket Maker, 22 LR to .224 caliber
          RFJM-6MR       Rimfire Jacket Maker, 22 LR to .243 caliber
          SPJM-25R       Shotgun Primer Jacket Maker, 25 ACP caliber
          JRD-1-R        Jacket Reducing Die,  specify starting and ending
                         caliber.

          Draw  dies  for the reloading press are used by adjusting the  die 
     position  so that you can push the component through the tightest  part 
     of  the  die  using the end of the  stroke.   Careful  die  setting  is 
     necessary so that the component is pushed far enough into the die,  yet 
     the  more  powerful portion of the stroke is still  utilized.   If  you 
     simply  put  the die in the press at random settings,  it might not  be 
     possible to push the component far enough so the next component  pushes 
     it out the top.  Or, it might require so much effort that the operation 
     becomes impossibly difficult.  
          It  is  important to realize that effort varies quickly  with  the 
     exact  part  of the stroke where the most resistance is met.   This  is 
     adjustable by your setting of the die.   Too high, and the press easily 
     pushes the component in,  but not nearly far enough.   Too low, and the 
     press has little leverage or power to do the job,  even though there is 
     plenty of stroke to push the component through.  The optimum adjustment 
     can be found in a few attempts, if you bear the critical nature of this 
     balance in mind.
          It  might  seem  as  if a draw die is a very  inexpensive  way  of 
     creating a custom bullet.  In a few limited instances, it is.  But, for 
     most calibers, reducing an existing factory bullet to a smaller size is 
     more  expensive than making it yourself,  produces a far less  accurate 
     bullet,  and  limits  you  to the same weight and basic  style  as  the 
     factory bullet itself.   Giving up the advantage of superior  accuracy, 
     the ability to make the bullet in any weight or style you wish, and the 
     cost  savings  of using jackets and lead instead of  buying  ready-made 
     bullets,  seems  like  quite  a bit to give up just because  drawing  a 
     bullet down seems simple.
          The lure of getting an inexpensive bullet-production die sometimes 
     overwhelms  one's sense of values,  though,  and it isn't uncommon  for 
     someone  to  sacrifice all these advantages -- all the  real  power  of 
     bullet  swaging -- in order to draw down some existing bullet.   In the 
     instance of the .357 and 9mm,  the two 8mm diameters,  and sometimes in 
     the reduction of a military bullet purchased very cheaply in  quantity, 
     the process works well enough to justify the lost advantages.  It isn't 
     a general cure, and it certainly does not replace swaging your own.
          On the other hand, a jacket draw die makes good sense.  The jacket 
     will  be  expanded  by internal lead pressure during  swaging,  so  any 
     diameter  changes  made  to  it are rather  unimportant  to  the  final 
     product.   The ability to change standard diameters, to use an existing 
     longer jacket or heavier design in the next smaller caliber,  is a good 
     advantage.  Sometimes, it is the only way to obtain a good, inexpensive 
     jacket.   In  .41 caliber,  a drawn .44 is the standard jacket used  by 
     bullet swagers.  Likewise, for the .40 calibers. 
          One  does pick up a little longer draw on one side of  the  jacket 
     when  the reduction is extreme.   This is unavoidable without extremely 
     high cost equipment,  but its effect is primarily cosmetic:  the tip of 
     an  open  tip  jacket may  appear  uneven.   Accuracy  generally  seems 
     unaffected  by  this,  since the jacket walls themselves seldom  become 
     eccentric in any normal drawing operation.  
          A  set of dies to make .14,  .17,  and .20 caliber bullet  jackets 
     from commercial .224 0.6-inch length jackets is available from  Corbin.  
     The  process of making sub-calibers involves drawing the standard  .224 
     jacket  through these three stages,  stopping at the stage you  desire.  
     The  jackets  must be annealed after the first draw (from .224  to  .20 
     caliber)  or  else  the end will break out on the next draw  or  during 
     swaging.  
          Since the jacket for a .17 or .14 usually is shorter than that for 
     a .224,  the jacket must be trimmed at some point.  This can be done in 
     the  first draw,  from .224 to .20,  using a PINCH-TRIM die and  punch.  
     The punch is made with a shoulder,  so that the shoulder to tip  length 
     determines  the length of the jacket.   Any jacket that extends  beyond 
     this  punch  step or shoulder will be sheared off as the  punch  passes 
     through the die constriction.  
          The process works well provided the correct jacket is used,  since 
     the temper,  grain, and diameter as well as wall thickness are somewhat 
     critical for proper shearing action.   Usually, the jacket will be made 
     quite short,  and will be drawn longer in the .17 and .14 stages.   The 
     exact  final length is a bit experimental,  since variations in  jacket 
     lots,  temper,  wall thickness, and material composition will produce a 
     somewhat  different final drawn length.   But it seems quite consistent 
     within one lot or kind of jacket.  
          Jacket  and bullet draw dies that fit the reloading press  or  the 
     Mity Mite press require careful adjustment so that the maximum leverage 
     can  be  properly utilized to push the component through  the  tightest 
     point  in  the die,  yet still gain maximum stroke within the  required 
     leverage range.    In some cases, such as drawing copper tubing to make 
     long rifle jackets,  there isn't any easy way to get enough stroke  and 
     enough  power at the same time.   In those instances,  a short "helper" 
     punch or rod must be used.                 
          The jacket is drawn in two stages.   First,  the jacket is started 
     into  the die using the end of the stroke,  where there  is  sufficient 
     power.   Then,  the  ram is drawn back,  the helper rod inserted in the 
     jacket,  and the ram is run forward again, gaining extra stroke to push 
     the component all the way through the ring die.  This is, admittedly, a 
     slower way to do the job.  But in some cases, it is the only thing that 
     works in a hand press.
          Dies made for the Hydro-press,  on the other hand, seldom have any 
     such   difficulties  because  the  programmable  Hydro-press   develops 
     whatever  power is needed,  at any point in the stroke cycle.   With  a 
     full  six  inches of stroke to work with,  and full power from  top  to 
     bottom,  it  is a simple job to draw just about any length or thickness 
     of  jacket  in one stroke.   Copper tubing jackets are a  product  that 
     point up the advantages of the Hydro-press design.
          Remember   that  in  most  home  swaging   operations,   you   are 
     accomplishing  tasks  in very few steps,  with  relatively  inexpensive 
     equipment, that the major factories spend tens or hundreds of thousands 
     of dollars in time and equipment to accomplish,  often in 10, 12, or 14 
     stages.   Sometimes,  there  are obvious limitations to what you can do 
     without a bit of leeway in your final lengths or weights.   (Sometimes, 
     the amazing thing is that the process works at all!) 
          On the other hand,  for the person who doesn't mind  experimenting 
     and  can put up with things coming out just a bit differently than  his 
     original blueprints might have demanded,  these processes offer a great 
     deal  of  freedom from high costs,  abritrary supply sources,  and  the 
     ability to make bullets that are extremely accurate and unusually  high 
     in  performance.   Just  don't  confuse accuracy and  performance  with 
     predictable adherence to a pre-existing design concept!  Sometimes, the 
     way  it  happens  to come out is what you have to  work  with,  in  the 
     practical  world of limited costs,  simple  operations,  and  available 
     supplies.   Fortunately,  the  way it comes out is usually pretty  darn 
     good!
```
{% endraw %}

## CHAPT-2.TXT

{% raw %}
```
.he CHAPTER 2 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #    

                              MAKING THE LEAD CORES

          The  two  main components that go into most bullets are  the  lead 
     filling,  or core,  and the outer skin,  or jacket.   We'll talk  about 
     jackets in the next chapter.  Right now, let's make some cores.
          There  are  two main sources for lead cores.   You can purchase  a 
     spool  of lead wire in the proper diameter,  along with a core  cutter, 
     and chop off accurately-measured lengths.  Corbin has lead wire in pure 
     175,000  grain spools (LW-25),  and the PCS-1 Precision Core Cutter  to 
     cut  them.   The core cutter has an adjustable stop screw that  adjusts 
     the amount of lead cut on each stroke of the tool.  
          The  second source is your own supply of scrap lead,  the same  as 
     you might use for bullet casting.   Corbin makes a 4-cavity, adjustable 
     weight core mould that mounts to the reloading bench.   You don't  have 
     to  pick  it  up,  and there are no handles  required.   Four  pistons, 
     precision  fitted  to four cylinders,  slide up and down to  eject  the 
     cores.   The bottom position is set by a rest plate.   This steel plate 
     rests on a pair of nuts, fastened to two threaded rods at either end of 
     the mould.  
          Adjusting  the nuts upward decreases the volume in the  cylinders, 
     and gives you a lighter core.   Pouring molten lead into the top of the 
     mould  fills all four cavities.   Moving a long sprue cutter chops  off 
     the lead at the top of the cavities, leaving even lengths of lead to be 
     ejected  straight  up from the cylinders.   The process is  very  fast, 
     making it possible to produce at least 1000 cores per hour.
          Lead wire can also be manufactured at home.   Corbin makes a  lead 
     wire  extruder  kit for the Hydro-press,  capable of making lengths  of 
     lead  wire  from lead billets.   Lead wire can be extruded  in  special 
     shapes, as well, for use in stained glass work or as hollow tubing used 
     for fishing sinker wire.  The LED-1 Lead Extruder Die set comes with  a 
     selection  of popular diameters of interchangeable dies,  all of  which 
     fit into a master body.   Included with the kit are billet mould  tubes 
     to  form  the proper diameter of lead cylinders  for  extrusion.  These 
     special forms can be the basis of additional income for the Hydro-press 
     owner.   Hand  presses  do  not  have sufficient stroke  or  power  for 
     commercial lead wire extrusion.  
          Small diameter lead wire for the sub-calibers (.14,  .17, and .20) 
     can be produced in the Corbin hand presses with the LED-2 extruder kit.  
     Only relatively short lengths are made at one time,  but they are  very 
     economical sources of cores for the tiny sub-caliber bullets.  
          For  those  who wish to make commercial quantities of  lead  wire, 
     Corbin manufactures the EX-10 lead wire extruder,  a dedicated, single-
     purpose  machine to produce any size or shape of lead wire in 10  pound 
     spools.   The EX-10 uses lead billets of 2-inch diameter,  which can be 
     cast  using  Corbin's tube moulds.   Write for specific information  on 
     this product.
          Lead  wire  for  bullet cores can be used in  two  ways,  and  the 
     diameter depends on what way you plan to use it.   You can simply swage 
     the lead into a finished bullet,  with no jacket.   In that  case,  the 
     lead  only has to slip easily into the smallest die bore in the set you 
     are  using.   Dies made only for lead bullets are at final diameter  of 
     the  bullet,  and consequently your lead core should be just  a  little 
     under bullet diameter.
          If  the lead is too small in diameter,  it will stick out the  die 
     mouth before you have enough of it to make the weight you desire.  That 
     is a situation to avoid -- never apply any pressure to a component that 
     isn't  completely  contained within the die.   The punch will  probably 
     slip  off to one side and be damaged by striking the mouth of the  die. 
     The  exact diameter isn't important as long as the core fits  into  the 
     die easily and doesn't stick out the die mouth.
          But  if you want to make a jacketed bullet,  then the core has  to 
     fit  inside  the jacket (obviously!).   You cannot start  with  a  .357 
     caliber  lead bullet and somehow "put a jacket on it" to wind up with a 
     .357  caliber jacketed bullet.   Instead,  you use lead wire or a  cast 
     core that fits inside the .38 jacket,  and expand it upward in the die.  
     The lead pressure expands the jacket right along with it,  resulting in 
     a tight, uniform assembly.  
          The  walls of a .357 or .38 caliber jacket are usually about  .017 
     inches  thick.   There  is a wall on both sides of the  core,  and  the 
     jacket  normally  is made small enough so that it will  work  for  .355 
     (9mm)  as  well  as  .38 caliber.   Bullet jackets  are  almost  always 
     considerably smaller than the final bullet diameter so that they can be 
     expanded upward from core seating pressure.
          This  means  that you have a jacket with an  outside  diameter  of 
     about  0.354 inches,  minus two walls of 0.017 inches,  for a remaining 
     inside  diameter of about 0.320 inches.   Better quality  jackets  have 
     tapered walls,  so that the base is even thicker.  In practice, a 0.318 
     inch core will fit inside most .38/.357 caliber jackets properly.
          But for higher precision, a die set for the Corbin presses usually 
     includes a separate core swage die, which accepts the raw lead core and 
     reshapes it to a more perfect cylinder,  flattens the ends nicely,  and 
     expands  the core diameter very slightly in the process.   The die also 
     extrudes a small amount of lead from the core to adjust the weight.
          Because  of this extra die,  it is necessary to use a bit  smaller 
     diameter of core.  A 0.312 inch lead core fits nicely into the standard 
     0.315 to 0.318 inch core swage die, allowing for any bending or denting 
     that the core might receive in handling.   And that is how we arrive at 
     the  proper diameter of lead wire to use for any set of  dies,  in  any 
     caliber.   For jacketed bullets,  the core must fit into the jacket and 
     it  must  also fit easily into any core swage die that is part  of  the 
     set.   For lead bullets,  the core must at least fit into the final die 
     and not be so long that it sticks out the die mouth.
          In  the CM-4 Core Mould,  six diameters cover most of the  bullets 
     you  might  wish to make.   The .224 mould makes a core of about  0.185 
     inch diameter, which works well in the 6mm and .25 as well as the 6.5mm 
     caliber.  The .257 caliber mould crosses over slightly into the .25 and 
     6.5mm  caliber range,  but since different jackets have different  wall 
     thickness,  it is useful for thinner wall .25 jackets and thicker  wall 
     .270 and 7mm jackets.  
          The  standard  7mm jacket takes a 0.218 inch core,  so a 7mm  core 
     mould  is made in that size.   The .30 calibers all take a  0.250  inch 
     core,  as  do  most of the .32 and .338 jackets.   Heavy walled  tubing 
     jackets in large bores can use the same core size as a standard  jacket 
     might in a smaller caliber.  A pair of standard sizes cover the .38 and 
     the   .44-45   calibers.    These  are  0.312  inch  and  0.365   inch, 
     respectively.   A slightly smaller size is made for the .41 caliber and 
     the .40 Bren 10 caliber.
          Using  the next smaller size normally serves quite  well,  without 
     the expense of having a custom mould built.  However, custom moulds CAN 
     be  made  to order if desired.   For large diameters  of  lead,  Corbin 
     builds  special moulds to order at a correspondingly higher  cost  than 
     the  CM-4.   Moulds  for billets of half inch diameter can be used  for 
     shotgun slugs.   Tube moulds,  which have a steel base with a plug that 
     slips  into the bottom of a honed steel tube,  are generally  used  for 
     large diameter billets.  
          Lead cores are discussed in great detail in the book,  "REDISCOVER 
     SWAGING".   The advantage of using a lead core mould is the lower  cost 
     of using scrap lead.  The advantage of using lead wire is the neatness, 
     safety,  speed,  and  ease  of use.   There is not much  difference  in 
     potential  accuracy.   Lead  wire  has a slight edge  over  cast  cores 
     because of the great uniformity of the extruded product. 
          You  probably wonder about the hardness of the lead:   can you use 
     wheelweights, or casting alloys to swaging bullets?  The answer depends 
     on  the caliber,  and the system of swaging you plan to use.   In  most 
     reloading press dies, you can't quite generate enough pressure to swage 
     any  lead  harder than about Brinnell Hardness 8 (or  about  3  percent 
     antimony/lead alloy) before breaking either the die or the punch.   But 
     in  certain  circumstances,  you  can  even swage  linotype  alloys  of 
     Brinnell  Hardness 22.   The Corbin Hydro-press can swage any alloy  of 
     lead ever made, or even solid copper if you wish.  
          The reason that you can swage hard alloys in some calibers and not 
     in others,  in some shapes and not others,  and in the Hydro-press  but 
     not  in  a reloading press has less to do with the power of  the  press 
     than it does the strength of the dies and punches.   If you are curious 
     about the mathematics involved in engineering dies to withstand certain 
     pressures,  the  book  "POWER  SWAGING"  is  full  of  revealing  data, 
     formulae, and charts that will make it all clear. 
          As a rule of thumb,  it's safer to use soft, pure lead for swaging 
     in  all  circumstances  because pure lead flows more  easily  at  lower 
     pressures,  and thus puts less strain on the dies.   But, if you have a 
     need to swage hard lead for some reason,  don't give up just because of 
     a  rule  of thumb!   We have a way to do it in every case,  if you  are 
     willing to purchase the correct kind of tooling.  Your stock of casting 
     alloys can be used if the caliber,  die,  and press system is  selected 
     with  proper specifications for hard lead.   Tooling made for hard lead 
     may,  in some circumstances,  not be as useful for soft lead because of 
     the  different size bleed holes.   That is one reason why you  need  to 
     talk  to the die-maker before jumping in head first with a bar of  hard 
     alloy in hand!  
          If  you  use Hydro-press dies,  hard lead is perfectly  acceptable 
     in calibers up to .500 diameter,  unless very deep and thin base skirts 
     or other special designs are planned.  The dies are so strong that they 
     can handle any lead alloy.  In the Mity Mite system, hard alloys can be 
     handled  if the die-maker knows in advance you plan to  use  them.   In 
     calibers  above .358 diameter,  they are a bit risky because of the die 
     wall  in  the smaller Mity Mite series -- an imprudent  stroke  of  the 
     handle  could crack a .45 caliber die used with too hard an alloy.   In 
     the  reloading press,  calibers of .243 and .224 work  reasonably  well 
     with  hard  lead,  but  anything larger should be used with  alloys  of 
     Brinnell  Hardness 6 and under.   Corbin supplies pure lead in  billets 
     and  in  lead  wire form,  but does not furnish alloy  lead  except  on 
     special order.
          A  potential objection to lead wire is the cost of  shipping.   At 
     the  time of this writing,  it costs about $10 to ship a spool of  lead 
     wire completely across the country.   A spool of .22 caliber wire makes 
     over 4,000 .224 bullets.   The cost of shipping, then, breaks down to a 
     mere 0.0025 cents per bullet (that is a quarter of a penny per bullet).  
     This amount is not prohibitive,  and consequently most people choose to 
     use  lead wire for the smaller calibers.   In the larger calibers,  the 
     cost  per  bullet increases since there is more lead consumed  in  each 
     bullet,  but the trade-off of convenience and safety still results in a 
     majority of bullet-makers using lead wire.
          Corbin has lead billets in 0.795-inch diameter for use in the LED-
     1  extruder  die  (in case you don't care to  cast  billets),  and  can 
     furnish lead in just about any size of billet.  Alloys can be furnished 
     only  in minimum lots that generally are 100 to 250 pound,  because  of 
     the minimum billet required for a commercial extruder operation.   Many 
     of  our customers can provide you with the smaller quantities of  alloy 
     leads:   check  the  "WORLD  DIRECTORY  of CUSTOM  BULLET  MAKERS"  for 
     addresses and phone numbers.
```
{% endraw %}

## CHAPT-3.TXT

{% raw %}
```
.he CHAPTER 3 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                              ABOUT BULLET JACKETS

          Bullet jackets are the skin of the bullet.  They are what makes it 
     possible to achieve velocities over 4,000 fps and still have no fouling 
     from  melted  lead  in your barrel.   But besides elimination  of  lead 
     fouling,  the jacket has another important job.   It helps control  the 
     terminal performance of the bullet.
          Bullet jackets are available from Corbin in packages of 250 or 500 
     jackets,  depending  on the caliber and length.   Popular calibers  are 
     stocked in certain lengths that are most useful.   Not all calibers  or 
     lengths are available directly.  Some you have to make yourself, by re-
     drawing a more common size.  This is done with a Corbin JRD-1 draw die.
          Other  calibers  can be made from copper,  brass,  or  even  steel 
     tubing.   A  reloading  press can only use the  commercially  available 
     drawn gilding metal jackets,  which range from 0.017 to 0.032 inches in 
     thickness depending on the length and caliber.  The Mity Mite press can 
     form jackets from 0.030 inch thick copper tubing (hard drawn,  straight 
     tubing,  not the soft coiled type).  The Mega Mite can handle tubing in 
     0.030  and sometimes in 0.049,  depending on caliber.   The Hydro-press 
     can  handle anything,  from the thinnest copper to the  thickest  steel 
     walls  (typically 0.050 steel or 0.065 brass is the heaviest  practical 
     jacket wall, beyond which you may as well swage solid copper rod).
          From .30 caliber rifle down,  it is both easier and cheaper to use 
     commercially made jackets and either use them as is, or redraw them for 
     smaller or longer jackets.   Jackets can expand considerably during the 
     core  seating  operation,  to become larger in diameter.   Jackets  for 
     bullet  swaging in Corbin equipment are all made several thousandths of 
     an inch smaller than the final bullet diameter,  so you can expand them 
     upward for a perfect, tight fit on the core.
          This  is one reason that it isn't feasible to pour hot lead into a 
     jacket and make a jacketed bullet.   The pressure of swaging is  needed 
     to  expand  the assembly to the right diameter inside a  die.   Another 
     reason  is that the hot lead would shrink away from the  jacket  during 
     cooling, leaving a loose core that would not stabilize in the rifling.
          In  the calibers from .309 to .338,  it is possible to use regular 
     .30  caliber jackets.   Special techniques to expand the jacket  evenly 
     include seating the core in two short sections,  so that the base  will 
     form properly.   This is done on the .338 and .333 calibers,  but isn't 
     necessary  on the .311 and .314 sizes.   Using this method,  it is even 
     possible to expand a drawn .22 Magnum fired case into a nice 7mm (.284) 
     bullet!   It  works best with a rebated boattail die set and with three 
     or four short cores seated on top of each other, one at a time.
          The  best known jacket among bullet-makers is the .22  Long  Rifle 
     case used for a .224 or a .243 caliber jacket.   Corbin makes a die set 
     called  the RFJM-22 that turns these rimfire cases into  straight-sided 
     jackets of the proper diameter.   Vernon Speer,  Harvey Donaldson,  and 
     Fred  Huntington  were a few of the well-known experimenters  who  used 
     this  method  in the late 1940's.   Speer and Huntington both  launched 
     major businesses from this beginning.  
          The  process had flaws in those days,  because rimfire cases  used 
     mercuric priming compound.   This left the jackets weak and brittle, so 
     they  fouled the bores and often came apart  on  firing.   Today,  non-
     mercuric  priming is used in rimfire cases.   The jackets you can  make 
     for yourself not only are as good as any you can buy for most practical 
     purposes, but they are free!
          The  disadvantage  of making rimfire jackets is that  the  bullets 
     have  very  thin skins -- typically under 0.015 inches  -- without  the 
     thick taper toward the base which commercial jackets have.   This means 
     that  they are excellent for varmint shooting,  because if they hit the 
     ground they normally blow up and do not cause a ricochet.  But they are 
     not  suitable for high velocity (beyond about 3500 fps they blow up  in 
     the air), nor are they suitable for serious game hunting.
          You  may  be surprised to learn that the  commercial  standard  52 
     grain bullet has a jacket that matches the length of the drawn .22 Long 
     Rifle  case.   This  is because the first .224 commercial bullets  were 
     made  from  such cases!   When bullet makers switched  to  drawn  strip 
     metal, they kept the traditional length.  Thus, you do not need to trim 
     your  home-made  jackets  or make excessive weights of bullets  to  use 
     them. 
          The  jacket  material  is normally  either  commercial  bronze  or 
     gilding  metal.   These alloys are 10% zinc and 5% zinc,  respectively, 
     with the balance of copper.   The zinc is for strength and anti-fouling 
     characteristics.   A  rimfire  case  is about 30%  zinc.   It  is  more 
     brittle,  but also less likely to foul the bore at normal  speeds.   By 
     annealing  the  case,  you can make it just as ductile as  the  regular 
     jacket.
          A  6mm  (.243-.244) bullet jacket can be made from the  fired  .22 
     case  (a  Stinger or other long case is best).   The head  is  smoothly 
     drawn  off,  leaving a diameter of about 0.219 inches at the end.   The 
     body  of the fired case is about 0.225 inches in diameter.   A  special 
     punch with a flare or bottleneck,  like a bottleneck cartridge, is used 
     inside  the case.   The jacket becomes slightly longer as it is  drawn, 
     and  this lengthening forces the mouth partly over the tapered part  of 
     the  punch.   It is this tapered mouth that lets you seat a  lead  core 
     into  the undersized jacket and expand it to full .243 size during  the 
     core  seating operation.   The flared mouth seals the die against  lead 
     leakage and makes the jacket expand perfectly. 
          The  .22  WMR case takes a different die (a special type of  JRD-1 
     die  is used) to make a long 6mm jacket.   By careful  manipulation  of 
     core weights and seating technique,  you can coax this jacket to become 
     a .257,  a 6.5mm,  or even a 7mm bullet!   This isn't something for the 
     beginner  to try,  but once you have mastered the basics,  it is fairly 
     easy to learn.
          Bullet jackets have different wall thicknesses,  not only  between 
     different  calibers  and  makes,  but  also  within  the  same  jacket.  
     Commercial jackets have a taper, to control expansion.  This means that 
     when  you seat the lead core into the jacket,  the core has to be small 
     enough to fit easily into whatever jacket you are using.   If you buy a 
     set  of dies that is made with punches for a certain jacket,  and  then 
     change to another jacket (such as going from a commercial drawn  jacket 
     to  a  copper  tubing  jacket),  you will probably  need  to  obtain  a 
     different core seating punch.  
          The core seating punch fits inside the jacket, rather than the die 
     itself,  whenever  you want bullets with the lead seated down past  the 
     jacket mouth.   (Bullets with large lead tips,  such as semi-wadcutters 
     and  lead round nose bullets,  are made using a core seating punch that 
     fits  and  seals pressure against the die wall instead  of  inside  the 
     jacket.)  If you change from a 0.020 inch wall jacket to one with walls 
     of  0.050  inch thickness,  then you need a punch that is  considerably 
     smaller in diameter to fit the new jacket.  When you order dies, either 
     let Corbin supply the right jacket to fit them, or send a sample of the 
     jacket  you want to use.   If you want more than one  jacket,  remember 
     that you may need more than one core seating punch.
          The other part that you may need for different jackets is the core 
     swage  die.   Core swage dies make the core the right size and  weight, 
     starting with an undersized piece of lead.   Reloading press dies don't 
     use a core swage for technical reasons.   Special swage presses  almost 
     always  use die sets that can have a core swage as the first die of the 
     set.   When you order a set of dies for jacketed bullets,  the diameter 
     of the core swage die is important to the diemakers.   The core that is 
     produced  must  be small enough to fit inside whatever jacket  you  are 
     going to use.   If you later add copper tubing,  or change to a thicker 
     wall  jacket  (such  as drawing down a larger caliber to get  a  longer 
     jacket for a heavier bullet),  it may require another core swage die of 
     smaller diameter.
          The  right size of lead wire or core mould for a  certain  caliber 
     depends on the jacket you plan to use.   Most standard jackets that are 
     available  from Corbin take standard,  off-the-shelf diameters of  lead 
     wire and core moulds.  If you furnish your own jackets, you may need to 
     send  samples to get a special size made to order.   Core size for  the 
     jacket  is  not terribly critical:   as long as the core fits  and  the 
     weight  is  about right without being so long that the core sticks  out 
     the die mouth, you can use any size.
          One exception is that your core shouldn't normally be a press  fit 
     into the jacket,  so that it traps air in the bottom.  The short, thick 
     half jackets for .38 caliber sometimes fit a bit snugly on the standard 
     core,  but  they  don't cause any problem.   It is  the  long,  tapered 
     jackets  of larger caliber handguns and of rifle bullets that create  a 
     potential problem with too snug a core.  
          The  problem  arises  when the core fits so tightly  that  air  is 
     pushed  into a highly compressed disk at the bottom of the jacket.   If 
     the  bullet  is  finished with the jacket brought around  the  nose  or 
     ogive section,  you don't notice any problem.  Accuracy is usually good 
     because the air is normally quite highly compressed and centered rather 
     well.   But if you make a semi-wadcutter style bullet (and by that,  we 
     in the bullet-swaging field refer to ANY style of nose,  be it round or 
     flat,  hollow or pointed,  so long as the nose is entirely made of lead 
     projecting from the jacket, and the jacket is NOT curved at all to lock 
     the  core in place),  then the trapped air can expand when the  bullets 
     are brought into the hot sun.  Sometimes, the cores will pop out with a 
     loud bang and jump harmlessly across the room!  
          The answer is to use a core that slips to the bottom of the jacket 
     without force.   Or, if you want to use a core swage die that is nearly 
     but not exactly right,  you might want to have the die-maker machine  a 
     special  internal  punch  with a cavity in the shape of a  boattail  or 
     Keith nose in its end.   The cavity would form a mirror image of itself 
     in the lead core,  so that a section of the core would then fit  nicely 
     into  the bottom of your tapered wall jacket without trapping any  air.  
     This  technique  lets  you  use the same core swage  die  with  several 
     calibers  and  with  several different styles of  jacket  in  the  same 
     caliber.
          The right core mould for heavy wall tubing jackets is much smaller 
     in  diameter than the right core mould for a standard drawn  commercial 
     jacket.   In fact,  the next smaller caliber of mould is normally used.  
     For  instance,  a  .30 caliber core mould might be used with  a  tubing 
     jacket  bullet  in .358 caliber,  whereas a .38 caliber mould would  be 
     used  if  you were to make commercial jacket bullets  with  those  same 
     dies.   When  you  order,  we supply the size of equipment  needed  for 
     standard popular jackets that we stock unless you specify otherwise, or 
     unless we know that tubing jackets are going to be used.
          Bullet jackets can make a wide range of weights even with the same 
     length.   The  exact weight range for any given caliber  and length  of 
     jacket depends on the ogive shape and base shape, as well as the degree 
     of  hollow  point  or hollow base and the lead density  used,  and  the 
     thickness of the jacket.  There is no single "right" weight for a given 
     jacket  because of all these variables.   But that means  you,  as  the 
     bullet-maker,  can  manipulate  the variables and produce all kinds  of 
     different weights using a limited stock of jackets.
          For instance, in the .44 caliber, a 0.54-inch long drawn jacket is 
     very  popular  with shooters who have 3-die sets,  such as  the  FJFB-3 
     type,  to  make bullets with the jacket curved around  the  ogive.   By 
     adjusting  the  amount  of lead used in the jacket,  you can  make  any 
     weight  from 180 to 250 grains with this jacket.   The lighter  weights 
     have  open  points,  and the heavier weights have more  and  more  lead 
     exposed at the tip.
          The  bullet-maker  who  uses a semi-wadcutter die  limits  himself 
     somewhat on the range of weights possible with a given jacket, since he 
     cannot take up any jacket length by curving jacket material around  the 
     nose.   He  can,  however,  change  the  amount of  nose  by  selecting 
     different  punches,  or  change  the amount of lead used  by  selecting 
     hollow point or cup base punches and adjusting how far he presses these 
     into  the die.   Then,  he can follow with the regular Keith  or  other 
     semi-wadcutter type of punch to shape the lead that is moved forward by 
     the hollow point punch. 
          This  technique lets the bullet-maker adjust weight even on  semi-
     wadcutter  style bullets with the same jacket length and still have the 
     same amount of lead showing!   A technique not widely known is the  use 
     of  ordinary  cornstarch  as a filler in the base of  the  jacket.   By 
     placing cornstarch in the bottom of the jacket and seating a lead  core 

     over  it,  you can produce very high velocity,  light weight bullets in 
     jackets that everyone else thinks only make heavy weight slugs.
          In  the .25 ACP caliber,  you can make jackets from fired  shotgun 
     primers  using  the SPJM-25 die set.   This kit lets you push  out  the 
     anvil  and cap,  and draw the top hat battery cup into  a  smooth-sided 
     jacket for a 45-50 grain .25 caliber bullet.  Jackets for sub-calibers, 
     such as the .14,  .17,  and .20 caliber, can be made from ordinary .224 
     commercial  jackets using three drawing dies.   The jackets need to  be 
     annealed  by heating to a dull red briefly,  so that the bottoms  won't 
     crack out when you draw them to .14 caliber.
          Dies that use larger caliber jackets, such as the sub-caliber draw 
     dies,  can  be made with a pinch trim punch so that surplus material is 
     pinched off as the jacket is drawn.   In order to pinch trim a  jacket, 
     there  must  be a reasonable amount of reduction taking place.   It  is 
     difficult to pinch trim a .38 jacket being drawn to .350, for instance, 
     because most .38 jackets begin at .3545 diameter.   That doesn't  leave 
     enough  difference for a pinch trim punch to work.   But drawing from a 
     .308  to a 7mm,  or from a 7mm to a 6.5mm,  leaves plenty of metal  for 
     pinch trimming to any desired length.
          You  don't  have  to use a jacket.   Many  handloaders  don't  yet 
     realize that bullet swage dies can be used with or without jackets, and 
     that a swaged lead bullet can be made faster,  more precisely, and with 
     far greater control of weight and style than a cast bullet.   The  same 
     dies  can be used for jacketed bullets or lead bullets.   (This doesn't 
     necessarily work in reverse:   if you buy a LSWC-1 lead  semi-wadcutter 
     die,  designed just to make lead bullets,  it won't make fully jacketed 
     bullets  because the bleed holes in the side of this die would then  be 
     covered by the jacket.) 
          Lubrication  on a swaged,  smooth-sided bullet is accomplished  by 
     changing  from  Corbin Swage Lube to Corbin Dip Lube.   Dip Lube  is  a 
     liquid  wax  that is applied to the core before swaging a lead  bullet.  
     The  pressure of swaging forms a hard,  tough film of wax all over  the 
     bullet.   The wax doesn't melt or affect the powder like bullet greases 
     do.  Since it covers the whole bullet, no lead is exposed to the air or 
     to the bore without having some lube between the bore and the lead.  
          Naturally,  this "liquid jacket",  as some people call it, doesn't 
     stand  up to the torque and heat of high velocity firing like a regular 
     jacket  would.  It does serve well for most shooters using loads up  to 
     1,200 fps,  and cuts the cost of shooting by eliminating the jacket  as 
     well  as speeding up the whole bullet-making process.   Corbin Dip Lube 
     is  available  in  pint cans or gallons.   A  sample  2-oz.  bottle  is 
     available as well.
          Re-forming  jacketed,  factory  or military surplus bullets  in  a 
     standard swage die (the point forming die,  usually) is also  possible.  
     There  are some cautions and limitations.   The bullet must be  smaller 
     than  the  final  diameter desired,  because you cannot expect  a  .308 
     bullet  to fit easily into a .308 diameter hole and eject easily  after 
     reforming.   It should be a 0.3085 to 0.3090 inch die in order to use a 
     .3080 inch diameter bullet for reforming.   Also,  there are some minor 
     problems  with  lead coming forward out the nose of a  finished  bullet 
     when you change the ogive shape to reduce the total internal volume.  
          But, on the other hand, we have made hundreds of single-die swages 
     that turned rather inaccurate military surplus bullets into soft points 
     of  very  good accuracy simply by swaging them backward,  so  the  base 
     became the nose and the pointed nose became a solid base!  And in other 
     cases,  we  have made 5.56 and 7.62 mm bullets shoot twice as  well  by 
     simply  bumping them up half a thousandth of an inch while making their 
     open bases more perfect and even.   These transformations are quick and 
     easy  when they can be made to work with a standard die.   I would  not 
     recommend  putting a lot of money into tooling specially built  for  it 
     unless you have a tremendous number of surplus bullets to reform.  
          Bullet  jackets  can be made that have partitions,  variations  in 
     thickness (selective heavier base sections),  completely closed  bases, 
     solid  copper  bases,  and multiple jackets stacked inside each  other.  
     Most of the heavy duty jacket making,  using copper or brass tubing and 
     such styles as the partition or H-mantle, are done on the Corbin Hydro-
     press.   Hand presses and dies made for them do not have the ability to 
     produce or withstand the extreme pressures used.  Within a more limited 
     range,  however,  you can still make exotic jacket designs by using the 
     telescoping  jacket idea:   putting smaller calibers inside  of  larger 
     ones is a very effective way to control performance.  
          A  thorough discussion of bullet jackets can be found in the  book 
     "REDISCOVER SWAGING",  and the various technical bulletins published by 
     Corbin  Manufacturing  have  further details on  making  tubing  bullet 
     jackets,  rimfire  cases into jackets,  and even the use of fired brass 
     cases as bullet jackets.
```
{% endraw %}

## CHAPT-4.TXT

{% raw %}
```
.he CHAPTER 4 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                         SWAGING IN THE RELOADING PRESS

          If  your reloading press accepts standard 7/8-14 TPI dies and  its 
     ram will take regular RCBS button-type shell holders,  then you can use 
     it  for  swaging  certain  calibers and kinds of  bullets  with  Corbin 
     reloading press swage dies.   A heavy-duty press makes the work easier, 
     but any modern press capable of resizing a .30-06 case is strong enough 
     for bullet swaging in the styles and calibers we offer.
          There are limits to the pressure you can safely apply to the  soft 
     screw-stock  rams  used in nearly all current reloading  presses.   The 
     size of the frame or leverage of the press has nothing to do with this.  
     A massive press like the RCBS Big Max still has a four-inch stroke,  to 
     get a magnum rifle case in and out.   Small arms bullets,  on the other 
     hand,  need only about two inches of stroke in order to be successfully 
     swaged.  This wastes half the leverage in a reloading press.
          Single  station,  ram-type  presses are the  only  kind  currently 
     supported by swaging equipment.   Presses with turrets,  rotating shell 
     holder  plates,  aluminum  frames,  mechanical type shell holders  that 
     adjust to different size cartridge heads, progressive loaders, and bar-
     type  rams  used in H-frame presses all have features  that  make  some 
     swaging  operations difficult or impossible.   Standard swage dies  for 
     reloading presses do not require a massive press, but they do work best 
     in a simple, single-station conventional round-ram press. 
          A  special  swaging press like the Corbin Mity Mite (CSP-1)  or  a 
     combination reloading and swaging press like the Corbin Mega Mite (CSP-
     2)  has the capability to more than double the leverage in a  reloading 
     press  design.   It does this by cutting the stroke in half.   The same 
     effort that moves a reloading press ram four inches is now put to  work 
     moving  the ram only two inches.   The effort is converted into  higher 
     pressure within the die.
          Such  presses have many special features designed to allow  higher 
     stresses,  equalize the torque on the ram, align the die and punch more 
     precisely, and provide for automatic ejection of the bullet on the back 
     stroke.  The die can be designed to withstand higher pressure, since it 
     doesn't  have to fit into the constraint of a standard reloading  press 
     dimension.  
          In these presses,  any caliber from .14 to .458 rifle bullets with 
     tubing  jackets  as  thick as 30 thousandths of an inch  are  perfectly 
     feasible.   In a conventional reloading press,  you are limited to  the 
     .224,  .243,  and .257 rifle calibers,  and the .25 ACP, .30-32 Handgun 
     and  carbine  (130 grains or less,  no spitzer rifle shapes),  9mm  and 
     .357/.38   Handgun  calibers.    Within  those   calibers,   there   is 
     considerable latitude for weight and style variation.
          Regardless  of the press or system,  you can make lead bullets  or 
     gas-checked bullets in any die capable of jacketed bullet swaging. And, 
     you  can use longer or shorter jackets in the same set of dies.   There 
     are some dies made just for lead bullets,  combining the steps of  core 
     swaging  and  core  seating so that you can make a lead bullet  in  one 
     quick stroke,  and these special (model LSWC-1) dies are not  generally 
     suited  for use with more than a half-jacket.   These dies are not made 
     for the reloading press, in any case, since they require bleed holes in 
     the die wall.  
          Core  swage  dies and other lead-forming dies that have  extrusion 
     holes through their walls to let you automatically adjust the lead core 
     weight  on each stroke (instead of just using whatever weight  of  core 
     you  happen  to put into the die) need room around the side of the  die 
     for the lead to come out.   In a reloading press,  the die is put  into 
     the  head of the press.   Because of the length and top position of the 
     ram  in a reloading press,  the die has to be located so its walls  are 
     surrounded  by the threads of the press.   This doesn't leave room  for 
     correctly located bleed holes.  
          In order to do it right, core swaging and lead semi-wadcutter dies 
     that  adjust  the core as they form the bullet are made  only  for  the 
     special swaging presses, and not for use in reloading presses.  You can 
     still  make lead bullets of equal quality in a reloading press,  but to 
     get  there,  you  must be more careful about how you cut  or  cast  the 
     cores.   What  you put into the die is what you get out,  in regard  to 
     weight control.  This is a major advantage of the special swaging press 
     systems,  and is one of the things that makes it difficult to "convert" 
     or  adapt  many  of  the advanced kinds of dies  for  use  in  ordinary 
     reloading presses.
          Reloading press swage dies are made with a UNIVERSAL ADAPTER BODY, 
     which is the same for all styles and calibers of dies.   This component 
     holds the actual die "insert" and internal punch together in the proper 
     relationship,   and   fits   into  the  7/8-14  TPI  threads  of   your 
     reloading  press.   All adjustment for different weights and styles  of 
     bullets is made by turning the whole die, universal adapter and all, up 
     and down in the threads of the press like a big micrometer thimble.  
          There  are  two punches in every swage die.   The INTERNAL   PUNCH  
     stays inside the die.   It is held there by two restraints:   the punch 
     has  a  head on the top that won't let it fall through the die  on  the 
     "downstroke",  or ejection cycle,  and the universal adapter body  only 
     lets  the punch head slide up a certain distance before it strikes  the 
     top  of the hole machined in the adapter.  The EXTERNAL PUNCH fits into 
     the slot in the press ram,  just like a shell holder.  It can easily be 
     removed and changed.  Most people own several external punches for each 
     of their die sets.
           A small hole goes all the way through the top of the adapter.  It 
     is .257 inches in diameter, and takes a quarter-inch diameter KNOCK-OUT 
     ROD  (also called the ejector rod or simply K.O.  rod).   The Knock-Out 
     rod  is long enough so that it can push the internal punch down  nearly 
     the same distance as the die is long.   That pushes the bullet out  the 
     die  mouth.   On  one end of the Knock-Out rod is a knurled  head,  big 
     enough  to  give you a good target to tap with a plastic  mallet  or  a 
     piece  of  wood.   This  drives the bullet back out of  the  die  after 
     swaging.
          The ejector rod comes completely out of the die, so you can use it 
     on any of your reloadin press swage dies.  Another way to eject bullets 
     -- one  with a little more sophistocation -- is to slip a Corbin  POWER 
     EJECTOR  UNIT  over the top of the die and fasten the three  set-screws 
     into  the  ring machined around each of the universal  adapter  bodies, 
     right below the knurled part.
          The power ejector is an optional accessory item.  It speeds up the 
     operation  by  eliminating  the need to pick up a mallet  and  tap  the 
     ejector.   Instead of using the regular ejector, you install a straight 
     piece  of  quarter-inch  diameter steel rod,  supplied  with  the  PE-1 
     ejector.   Following the instructions that come with this tool,  adjust 
     its ram so that all the free play is taken up when you have a bullet in 
     the  die,  ready  to be ejected.   From this  point  on,  your  swaging 
     operation  is  reduced  to two levers:   the press  handle  swages  the 
     bullet, and the power ejector handle gently but firmly pushes it out of 
     the die.  
          The  internal  punch  in  your reloading press swage  die  can  be 
     removed easily.   Identify the die insert itself.   This is the  super-
     hard  high-carbide alloy steel cylinder at the very bottom of the whole 
     die  assembly,  just protruding from the adapter about a quarter  inch.  
     Most of the die insert is up inside the adapter body, which is machined 
     to  accept  the 5/8-24 TPI threads on the other end  of  the  die.   To 
     remove the die,  grasp the small protruding surface with pair of pliers 
     and  unscrew it.   (Don't worry about marring the die -- it is so  much 
     harder  and  tougher than your pliers that you can't hurt it this  way.  
     On  the  other  hand,  don't grasp the oxide-blued  adapter  body  with 
     pliers:  it isn't very hard, and you can damage the threads.  Just hold 
     it in your hand.)
          There  are basically three dies available for the reloading  press 
     that  are swage dies,  and several kinds of draw dies.   The swage dies 
     are:
                         (1) The CORE SEATER
                         (2) The POINT FORMER 
                         (3) The LEAD TIP DIE

          The  core  seater  (CS-1-R designation,  in  the  reloading  press 
     system)  can perform two different jobs.   It can be used by itself  to 
     make  any kind of bullet that has straight,  parallel  sides,  a  small 
     shoulder,  and a lead nose from the shoulder up.   The whole bullet can 
     be  lead,  or  any amount of it can be covered by a jacket right up  to 
     that  shoulder.   Think of a Keith handgun bullet with a jacket  coming 
     right up to the semi-wadcutter shoulder and then stopping.  Right up to 
     this point,  the bullet is straight.   The jacket can't be curved  past 
     this point in this kind of die alone.  
          However,  the nose can be any shape you like.   The nose is formed 
     by letting the lead core flow down into a cavity machined in the end of 
     the  external  punch.   You  can make a round nose,  a  Keith  nose,  a 
     wadcutter (very little cavity,  if any,  in the external punch tip!), a 
     conical  nose  like a pencil point,  or anything else  including  fancy 
     multi-cavity hollow points (instead of just a cavity,  there is also  a 
     probe  or  rod in the end of the punch to make these).   The point  is, 
     while  you can just change the punch to whatever the lead core flow down into a cavity machined in the end of 
     the  external  punch.   You  can make a round nose,  a  Keith  nose,  a 
     wadcutter (very little cavity,  if any,  in the external punch tip!), a 
     conical  nose  like a pencil point,  or anything else  including  fancy 
     multi-cavity hollow points (instead of just a cavity,  there is also  a 
     probe  or  rod in the end of the punch to make these).   The point  is, 
     while  you can just change the punch to whatever  thickness to its  edge, 
     or  it would quickly crumble away.   A 0.015 to 0.025 edge thickness is 
     standard.   This small edge comes up against the jacket in our example, 
     and  presses  hard on the thin jacket material.   One of  them  has  to 
     buckle and fold.  Usually it is the jacket. 
          If  you try to make a semi-wadcutter bullet,  and the jacket comes 
     out with radial folds, much as if someone sat on your top hat, then see 
     if  you have enough lead sticking out the jacket to completely fill  up 
     the cavity in the punch you selected.   If not, that's the problem, and 
     the  solution is to use a heavier core,  a shorter jacket,  or a  punch 
     with less of a cavity.  Another solution is to use a hollow point punch 
     first,  moving lead up and out of the jacket,  and then form your  nose 
     using the extra amount of lead displaced from inside the jacket.  
          Let's  back up a minute in case anyone is lost at this point.   We 
     are  talking about the most basic kind of swage die,  the core  seating 
     die.  It is called a core seating die because it can be used to seat or 
     press  the core down into a jacket,  expanding the core and the  jacket 
     together  until  they  contact the walls  of  the  die.   The  internal 
     pressure  becomes  uniform as soon as the jacket is pushed out  against 
     the die walls evenly, and the base of the jacket comes hard against the 
     internal punch face.   This uniform internal pressure can exceed 20,000 
     psi (and usually does).  
          Compressed  oxygen gas in a welding tank is in the 2,000 to  3,000 
     psi  range.   Compressed air in your car tires is usually 35 to 45 psi.  
     When  you fire a typical rifle,  pressures momentarily peak  at  levels 
     that reach 25,000 to 55,000 psi typically.  The average pressure over a 
     second of time is vastly lower.   The swage die must be able to sustain 
     anywhere from 20,000 to 50,000 psi constantly, year after year, without 
     change in its diameter,  roundness,  straightness.   It can't develop a 
     barrel shape inside, nor can it grow with the continued stress.  
          Tolerances  in a casting mould usually are held to 0.003 to  0.001 
     inches,  plus or minus.  Tolerances in the core seating die are usually 
     held to better than 0.00005 inches, plus or minus!  Your bullet doesn't 
     need  to be within that tolerance of some arbitrary standard  diameter, 
     of course,  but it is nice to know that whatever diameter it comes out, 
     it is repeatable to such high precision.  The typical absolute diameter 
     tolerance  on  the  bullet diameter is normally 0.0005 inches  plus  or 
     minus, although this has long been proven of little importance, as long 
     as the variance is held to high precision tolerances.  
          In other words,  if you have a .308 rifle,  and you know for  sure 
     that  your barrel has a .3000 bore,  with all grooves at exactly 0.0040 
     inch depth,  it still doesn't matter nearly as much whether you shoot a 
     .3079  bullet or a .3090 bullet down that barrel,  compared to  whether 
     your bullets vary from one to the next as you try to put them into  one 
     hole.   Many  competitive shooters find a bullet with nearly 0.001 inch 
     larger  than  nominal  diameter  shoots better at  long  range  than  a 
     conventional "correct" diameter bullet. 
          In any case,  the core seating die is a straight hole die.  If you 
     take  it out of the adapter body and pull out the internal  punch,  you 
     will be able to see straight through it.   The hole is round, straight, 
     and highly finished.   The internal punch is a very close sliding  fit.  
     The  external  punch  can  fit the die bore,  for  making  those  semi-
     wadcutter and wadcutter type bullets,  or it can fit inside the  jacket 
     for making rifle-style bullets.
          Let  me make a definition of these two general kinds  of  bullets.  
     It's  important  to understand what I'm talking about so you  can  make 
     proper and cost-effective decisions later on.  There are semi-wadcutter 
     styles,  and rifle styles of bullets, relative to the kind of equipment 
     needed.  When  a  swage  die-maker  talks about  a  semi-wadcutter  (or 
     wadcutter) style,  it isn't just a specific nose shape.   In regard  to 
     the kind of equipment required, it means any bullet that is made with a 
     lead  nose,  ending at a small shoulder,  and having the jacket at full 
     bore diameter all the way to the base (if there is any jacket).  
          This  kind of bullet can be made in a single core seating  die  in 
     one  stroke of the press.   One pass -- all done.   No lubricating,  no 
     sizing.   Just load it and enjoy shooting it.   Lead bullets are swaged 
     with  a  film  of  flexible,  hard wax bonded  to  them  under  swaging 
     pressure.   This  is accomplished by dipping the core in a liquid  "Dip 
     Lube",  which some people call "liquid jacket",  just prior to swaging.  
     The film evenly covers the bullet,  making it usable to speeds of 1,200 
     fps with no grooves, no separate lubricating steps.
          Cup  bases?   Hollow bases?   No problem -- just remove that  flat 
     ended  internal punch,  and install an optional internal punch  with  a 
     probe shaped like the cavity you want to form.   Both the nose and base 
     are  formed  at  the same time,  by pressing against the  two  punches.  
     Unlke  a mould,  there is no conflict between hollow bases  and  hollow 
     points.  They are independent of each other and can be mixed or matched 
     any  way you like.   In fact,  you can turn the swaged bullet over  and 
     swage it the other direction,  perhaps using a little higher setting of 
     the die to get slightly less penetration of the punch.   This gives you 
     shapes that neither of the punches has by itself,  and demonstrates one 
     of the more powerful experimental features of swaging equipment.
          We  mentioned seating the core inside the jacket.   If you  wanted 
     to,  you  could  select an external punch (the one that slips into  the 
     slotted  ram like a shell holder) with a small enough diameter  to  fit 
     right  inside the jacket.   Jackets usually have some taper in the wall 
     thickness to control expansion.  The punch will contact the jacket wall 
     at some point if it is a close fit.  Obviously there are some limits as 
     to the depth of insertion of any given diameter punch, and to the range 
     of weights of cores that you could seat with each punch.
          If the punch is too small,  lead will spurt out around it and  you 
     may not be able to build enough pressure inside the jacket to expand it 
     properly.   This produces undersized and tapered bullets.  If the punch 
     is too large,  it may not go into the jacket at all,  or it may plow up 
     jacket material as it presses down.  This isn't always bad -- it can be 
     used  to  thin the front of the jacket,  or to help lock the core  into 
     place.   Usually, though, the jacket and punch need to be made for each 
     other  to  avoid this.   Fortunately,  Corbin is  the  world's  largest 
     supplier  of  bullet jackets of all types,  and can provide  the  right 
     punches for any jacket or core weight, as well as the jackets to match.
          The  reason  for seating a core inside the jacket is to make  that 
     second kind of bullet,  the rifle-style bullet having the jacket curved 
     around the ogive,  with an open tip.   Let's define open tip and hollow 
     point for bullet swagers.  An open tip bullet has the core seated below 
     the  end of the jacket.   The jacket extends forward,  past  the  core.  
     This leaves an opening or an area devoid of lead just below the tip.  A 
     hollow  point,  on the other hand,  is made by pressing a punch with  a 
     projection  or  probe machined on the end into the core.   The hole  or 
     cavity  thus  formed in the core is further shaped when  the  ogive  is 
     made.   The result is a bullet with a hollow area in the point,  formed 
     in the lead itself.  
          A hollow point bullet can have a lead tip, or it can have the core 
     seated  down inside the jacket.   Usually,  it has a lead  tip  exposed 
     beyond  the  end  of the jacket.   But an open  tip  bullet  can't,  by 
     definition,  have a lead tip.  The reason to be clear about these terms 
     is  so that when you order tools and punches,  everyone will be talking 
     about the same thing.   It makes a big difference whether you can  make 
     what  you want once you get the tools.   A hollow point is made with an 
     optional punch,  during the core seating stage.  An open tip is made by 
     using a punch that pushes the core down inside the jacket.   It is  the 
     standard,  "default"  design for any regular set of dies that  includes 
     more  than  a core swage and core seating die.   And a lead tip  bullet 
     takes  a  lead tip forming die in rifle  styles,  but  seldom  requires 
     anything special in the blunt, wide-tip handgun styles.
          To  make that second kind of bullet,  the rifle-style bullet,  you 
     still need the straight-walled core seater.   The uniform pressure that 
     this  die  produces  is  necessary to  expand  the  jacket  to  correct 
     diameter,  mate the core and jacket perfectly, and produce the straight 
     and  round  tolerances in the jacket.   But with the core  seated  down 
     inside  the  jacket,  all  you  have now is a  very  accurately  formed 
     cylinder!
          To  put the ogive (that's OH-JIVE,  by the way,  like  "Oh,  don't 
     gimme no jive, man!") on the bullet, we'll use the second kind of swage 
     die,  the  point  forming die (designated PF-1-R  for  reloading  press 
     dies).  Now,  the  term "point" is often confused with the term  "tip".  
     Again, it's nice to talk the same language when ordering parts over the 
     phone.   A  point  on  a bullet refers to anything past  the  shank  or 
     straight part.   A point is the same thing as a nose.   The tip, on the 
     other  hand,  is just the very end of the point.   It is the part  that 
     ends, technically, after the meplat, and begins at some arbitrary place 
     on  the  ogive curve that is close enough to the meplat so that it  can 
     have  a  different  curve and not affect the  over-all  bullet  outline 
     significantly.  
          Simply  put,  the tip is the very end of the bullet's  nose.   The 
     point  is  everything from the tip to the start of  the  straight  part 
     (shank) and the point is the same thing as the nose.  To add confusion, 
     some  people even call the point the ogive,  so really the terms point, 
     ogive, and nose all refer to the same thing in general sales talk.  But 
     tip is different.
          The  ogive is formed by pushing the straight cylinder you made  in 
     the  core  seating die into the point forming die.   It  goes  in  nose 
     first.   If you want the nose to be made on the open end of the jacket, 
     then  the open end goes in first.   You can make a solid nose,  or full 
     metal jacket (FMJ,  as it is called, though strictly speaking, the open 
     tip  also is a full metal jacket bullet) design by pushing  the  seated 
     core  and jacket into the point forming die base first.   Special notes 
     on this technique can be found in Corbin technical papers and books.
          The  point forming die has the actual shape of your bullet  frozen 
     in  tough  die  steel,  diamond lapped to  extremely  fine  finish  and 
     tolerance  by skilled die-makers.   It is a hand-made die,  produced by 
     craftsmen with years of experience.   It isn't much like a punch  press 
     die  or  a plastic moulding die,  and people who have skills  in  those 
     fields  usually  can't produce good point forming dies without a  great 
     deal more training.  
          To  make  this  die,  both  reamers and laps have  to  be  cut  to 
     precisely  the right shape and diameter for your  desired  bullet.   In 
     reloading press equipment, the great attraction is the lower cost since 
     you can use an existing press.   If your main goal is economy,  then it 
     doesn't help that goal to increase the cost of the dies by adding extra 
     labor,  so we manufacture only standard shapes and offer no custom work 
     in  the  reloading press line.   By doing this,  we have been  able  to 
     produce  swage dies superior to those costing ten times as  much,  that 
     are  made to special order.   Corbin makes the only serious attempt  at 
     mass  production  of hand-crafted swage dies:   by eliminating all  the 
     stages of custom fitting and tooling,  we've been able to bring swaging 
     equipment of high quality to every corner of the earth,  and  introduce 
     thousands  of  people to swaging who could not otherwise afford to  try 
     it.
          If you want custom shapes and diameter, on the other hand, then we 
     do  have  another system set up to handle it at  reasonable  cost.   In 
     fact,  this  system is designed on two levels:   semi-custom and  fully 
     custom work using the same basic equipment.   The advantage is that  we 
     can use all standard blanks, that fit into standard presses and use the 
     same general parts.   Your cost is lower,  your replacements or repairs 
     are much simpler,  and the whole system is so well proven it has become 
     the  world's defacto standard for swaging.   It's called the Mity  Mite 
     system,  and  we'll  discuss it shortly.   Semi-custom outfits  can  be 
     obtained by selecting from the wide variety of off-the-shelf components 
     kept  in moderate supply for immediate delivery.   Fully custom outfits 
     can be produced, subject to the usual waiting list.      
          In the reloading press,  the point forming die is built very  much 
     like the core seating die.  It fits the same universal adapter body, so 
     both  dies look almost identical from the outside.   The difference  is 
     easy  to tell:   push on the ejector rod.   The core seating die has no 
     internal  spring.   The ejector rod will slide the internal punch  down 
     and you'll see it at the mouth of the die.  The point forming die has a 
     small  (0.080")  spring-steel wire pin passing through the tip  of  the 
     cavity.  This pin is a press fit into a steel button "head".   The head 
     is machined to go into one end of a coil spring. 
          The spring presses between the top of the die and the head of  the 
     ejection  pin.   We call the internal punch an ejection pin.  The heavy 
     rod that pushes on it is called the ejection rod,  you'll  recall.   If 
     you order a new ejection rod, you'll get this quarter-inch diameter rod 
     with the knurled head.   If you order a new ejection pin, we'll want to 
     know the diameter of wire, or at least what caliber of die it fits.
          The  reason for having a spring in this die is to hold the pin out 
     of  the main part of the die cavity during bullet  swaging.   The  only 
     purpose of the ejection pin is to push the bullet out of the die by its 
     nose.   If  the pin were down in the cavity,  the bullet would form  up 
     around  the  pin,  and then it would be stuck in the bullet.   This  is 
     exactly what happens if you forget to use lubricant.   Now it's time to 
     mention a very important part of swaging:  the correct lube. 
          For  lead  bullets,  you have seen that a wax solution called  Dip 
     Lube can be applied before swaging the core.   For jacketed bullets,  a 
     different  kind  of  lube,  serving a  totally  different  purpose,  is 
     required.   Swage lube is made to stand up to extreme pressures without 
     losing  its protective film -- a barrier between the smoothly  finished 
     die  wall  and the moving jacket material.   Ordinary  case  lubes  are 
     useless.   Don't try them.   Swage lube is a little more expensive, but 
     it goes a long way and it works.  Your dies will last virtually forever 
     if you use the right lube and clean materials.  
          Every  component needs a thin film of lube applied before it  goes 
     into the die.   Lead or jacket, there must be a film of lube between it 
protective film -- a barrier between the smoothly  finished 
     die  wall  and the moving jacket material.   Ordinary  case  lubes  are 
     useless.   Don't try them.   Swage lube is a little more expensive, but 
     it goes a long way and it works.  Your dies will last virtually forever 
     if you use the right lube and clean materials.  
          Every  component needs a thin film of lube applied before it  goes 
     into the die.   Lead or jacket, there must be a film of lube between it 
 You simply press 
     the seated core in (using proper lube), and eject the final bullet out.  
     The  bullet goes in nose first,  pressed in with an external punch that 
     is as big as the bullet base.   It comes out base first, pressed out by 
     a  tiny ejection pin that bears on the tip of the bullet.   The  reason 
     you  cannot form the complete bullet in one stroke in this die is  that 
     the pressure required to expand the jacket uniformly is not present  in 
     this kind of die.  There are two exceptions.  You can make a full metal 
     jacket bullet in this die alone.  And you can make a lead bullet.  
          The techniques for FMJ styles are discussed in other books.   Lead 
     bullets  are simply a matter of shoving the lead into the die.   It has 
     to be smaller than the die cavity,  naturally. Everything about swaging 
     assumes you know better than to push a larger component into a  smaller 
     die  cavity.   The match between core seating die and point forming die 
     is  very  good.   For many years,  bullet makers thought  that  it  was 
     necessary and desirable to have a slight pressure ring at the bottom of 
     the bullet.   This "pressure ring",  as it was called,  was promoted as 
     increasing accuracy by many die-makers of the 1950's.   It may not hurt 
     accuracy at all, and it could help in some cases.
          In reality,  though,  the story is a little different.   Most die-
     makers  of the past worked at home or in very small shops,  and  didn't 
     have  the  money for really expensive,  high-precision  instruments  to 
     measure  the bore sizes of the dies as they were being produced.   As a 
     result,  a match of 0.002 to 0.0008 inches between core seat and  point 
     form  die  cavities was about all the die-makers  could  manage.   Even 
     today,  that is typical of the best amateur work and is seen in some of 
     the higher priced benchrest dies as well.  
          Because of this difference, the seated core and jacket always went 
     into  the  point forming die considerably under  final  diameter.   The 
     pressure of swaging the point expanded the jacket slightly, but most of 
     the  expansion  took  place at the base.   These bullets won a  lot  of 
     matches,  but  they still had a bit of taper and a bulge at  the  base.  
     The  die-makers,  not knowing how to get rid of it,  and noticing  that 
     even  with this defect,  the bullets still outshot most factory  slugs, 
     started  hinting that maybe this was really a design feature put in  by 
     plan,  instead  of  something  they hadn't yet acquired  the  tools  to 
     eliminate.
          Today,  we  still run into a number of precision shooters who read 
     the  old  literature  and come to believe that  a  "pressure  ring"  is 
     necessary  for good shooting.   I don't think that having a  0.001-inch 
     larger  base is harmful to accuracy,  but I don't think it  necessarily 
     does  anything  valuable.   On the other hand,  a bullet that is up  to 
     0.001-inch larger than standard size,  and straight,  is probably going 
     to be a good shooter and it won't expand the case neck as it is seated, 
     then  leave the case somewhat loose on the forward part of the  bullet.  
     With  much taper on the bullet,  the act of feeding the round can  push 
     the bullet back into the powder, and I know that won't help accuracy.
          We can make bullets tapered,  straight,  or with a pressure  ring.  
     In the reloading press, we don't offer a choice.  In general, it is one 
     of   those  features  that  is  best  left  to  the  die-maker,   since 
     specification of too many "nit-picking" details only runs up your  cost 
     for special charges on the die-maker's labor,  and doesn't give you any 
     more accurate bullet one way or the other.   But, if you need something 
     very special in this regard,  it is one more thing that has been pinned 
     down  and  can  be offered to anyone who feels it is  worth  the  extra 
     expense.
          The  core seating die has made us some semi-wadcutters and  seated 
     some  cores  for  rifle-style bullets (I say rifle style  because  they 
     could  just as well be .32 handgun bullets or .243 rifle bullets  -- it 
     is exactly the same process,  same kind of die, and the only difference 
     is the size of the hole and the size of the components going into  it).  
     We  have used the point forming die to shape the rifle-style bullet  by 
     forming the ogive, and in two steps we have made nice open tip bullets.
          What about lead tips and hollow points?   The hollow point is made 
     by seating the core with a hollow point punch,  then forming the ogive.  
     If  the hollow point is also a lead tip,  then the lead is longer  than 
     the jacket.   Trying to eject this bullet may cause some deformation of 
     the tip, since the ejection pin has to push on the tip with some force.  
     The third die we mentioned (lead tip die) is made to finish off the tip 
     so it looks as good as or better than factory bullets.
          The  lead tip die (designated LT-1-R for the reloading  press)  is 
     much  like the core seating die,  except that it has a slightly  larger 
     bore  size,  and the internal punch has a cavity that matches the ogive 
     in  the  point form die.   The deformed lead tip fits  up  inside  this 
     cavity.  Applying gentle pressure reshapes the lead tip, shears off any 
     surplus  lead,  and  leaves a fine looking lead tip that can  be  flat, 
     sharp,  or  radiused.   The lead tip die is a nice addition to any set, 
     giving  you the ability to reform the tips and even to close  the  open 
     tip more tightly than you can do it in the point forming die alone.
          The  smallest tip opening is the same diameter as the ejection pin 
     in  the point form die.   This ejection pin has to be strong enough  to 
     push  the bullet out of your die,  or you will be constantly  replacing 
     the ejection pins and having stuck bullets.   So,  a diameter of  about 
     0.080-inch is used in reloading press sets.   This is a good compromise 
     between  design  strenght and appearance.   You can close the tip  even 
     further  by  using the lead tip die carefully.   This  takes  a  little 
     practice to avoid pressing a little shoulder in the ogive, but once you 
     figure it out, it is easily repeated.
          How  do  you  know how hard to push on the handle?   Just  push  a 
     little  bit,  very lightly.   See if the jacket and core remain in  the 
     core seating die,  or if they come back with the punch.   Normally, the 
     correct pressure just expands the jacket enough so that it stays up  in 
     the die.  In point forming, use just enough pressure to form the bullet 
     until  you  start to get a parallel pipe of jacket or lead on  the  tip 
     (pushing the bullet material up into the ejection pin hole). That is as 
     far  as you can expect to go.   Back off slightly on the die adjustment 
     by raising it higher a half turn or so in the press,  and you can  then 
     use the full ram stroke to set your insertion depth each time.
          One  key  to uniform swaging in the reloading press is to use  the 
     top of the stroke, so that each time you move the press handle, you are 
     using  the  physical limit of the press to control how  far  the  punch 
     inserts into the die. This controls amount of hollow cavity, the degree 
     to which you reshape a bullet, the amount of tip closure on your ogive, 
     and  whether or not you are going to get a good lead  tip.   Everything 
     depends on uniform stroke, uniform insertion of the punch.  And that is 
     most  easily set by raising the die,  so that the ram goes as far up as 
     it can.  Then lower the die, to obtain the desired shape or insertion.
          The right pressure should be about like sizing a case.  The larger 
     the caliber, the more pressure you will feel on the handle.  In no case 
     is  it  necessary to throw your weight on the  handle,  or  break  your 
     loading bench,  or use a cheater bar.   Doing these things will quickly 
     make the die-makers more wealthy,  because you will soon break your die 
     and  mash your punches into pancakes,  requiring that you replace them.  
     If you feel generous toward die-makers this week,  by all means jump up 
     and down on the press handle a few times.   Otherwise,  a mild one-hand 
     force is quite enough.
          Another  point in regard to destruction of parts:   always  try  a 
     punch by hand first.  If it won't fit, wipe it off several times with a 
     clean  cloth,  oil it lightly,  and try again.   If it still won't fit, 
     make sure that you have the right punch!   Punches must fit closely but 
     with relative ease into the dies.   Keith nose punches, and others with 
     deep  cavities,  expand slightly and may not fit easily by  hand  after 
     they have been used.   But they do fit, given a little oil and a little 
     gentle pressure.  I have seen .242-inch diameter rifle punches (for the 
     6mm  point  forming die) pushed into a .2238-inch diameter hole in  the 
     .22  core  seating  die.   "I thought it went in a  little  hard,"  the 
     bullet-maker said.   Yes,  I guess it might.   Comes out a little hard, 
     too.  Try it by hand first.  
          The  slot in the reloading press ram collects primer  residue  and 
     metal  shavings.   Take a cotton swab or a wood pick and scrape it  out 
     before  installing your bullet swage punch.   The material stuck in the 
     slot can tip the punch,  causing it to ram into the die at an angle and 
     tear a nasty gouge all down the side of the punch.   Again,  be  gentle 
     when  you  first  start out.   Don't use speed or force  on  the  first 
     stroke,  but instead,  gently guide things together and notice how they 
     fit.  Then go after it, once you know everything is lined up.
          Making .22 caliber bullets out of rimfire cases is one of the most 
     popular  swaging  activities today for a reloading press  bullet-maker.  
     It has been so for twenty years.   The process takes three steps.  Draw 
     the jackets, seat the cores, and form the points.  Lead tip bullets add 
     a  further step of forming the tips.   Detailed instructions come  with 
     the die sets, and further information is found in the various technical 
     bulletins and text books we publish. 
          The  photos  in  this book will give you a good idea  of  how  the 
     process works.  The most questions are about annealing and cleaning .22 
     cases.   First,  annealing  is usually done after boiling in hot  soapy 
     water and vinegar (to clean and shine the brass).  Annealing is only so 
     that the ogive will form without any folding.   If you make a big  lead 
     tip,  you  probably can avoid annealing.   There are several ways to go 
     about it.   Putting a group of clean cases in a tuna can, inside a lead 
     pot, and letting them turn dark brown (15 minutes, usually) will do it.  
     Using  a  toaster oven on high,  or putting a pan of cases in  a  self-
     cleaning  oven for the duration of the self-clean cycle is  also  good.  
     Using a propane torch or electric heat gun (Corbin FHG-1) is also good, 
     primarily for smaller lots.  
          The older books suggested 600 to 650 degrees F.  I have found that 
     modern  cases take 800 to 900 degrees F.,  and that a standard electric 
     oven doesn't usually get hot enough.  We do make excellent quality heat 
     treatment furnaces,  but for the hobbyist they are too expensive.   The 
     time  and  quench after heating are not  critical.   Quenching  has  no 
     effect  on  the  hardness.   It  merely helps to  knock  of  any  scale 
     that  might have formed.   If you use the right temperature,  you won't 
     get any scale,  and you can forget about any quench. Just let the cases 
     air cool.  Use swage lube on the punch when you draw the jackets.  Just 
     slip them over the long, 0.2-inch diameter punch and push them into the 
     die, following instructions provided with the tool. 
          Rimfire  cases  are good to about 3,000 or 3,200 fps  before  they 
     start  to  come  apart.   Actual speed depends  on  rifling  depth  and 
     sharpness.  They force you to load a .22-250 down to .222 Mag velocity, 
     but on the other hand, they also make you save powder, barrel, and cost 
     nothing for material.   When they hit, you'd swear they were going over 
     4,000  fps compared to a factory bullet performance.   And there is  no 
     problem with barrel fouling or wear:   if anything, the thinner jackets 
     are  easier on your gun than a standard bullet.   Try it!   You will be 
     surprised at the accuracy.
```
{% endraw %}

## CHAPT-5.TXT

{% raw %}
```
.he CHAPTER 5 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #.op

                        SWAGING WITH THE MITY MITE SYSTEM

          Swaging  with the Mity Mite press and dies is a huge step up  from 
     using a reloading press.  It's faster, easier to use, more than doubles 
     the  power you have,  so that the effort is cut by more than half,  and 
     extends the caliber and design range to dizzying heights.
          You  can  obtain dies to make any caliber from .14  to  .458,  any 
     weight  up to about 450 grains,  with a maximum bullet length of  about 
     1.3 inches.   You're read about the CORE SEATING DIE, POINT FORMER, and 
     LEAD TIP DIE in the previous chapter (or, if you skipped it, you should 
     read  it  now).   Let's explore other kinds of dies that  can  actually 
     adjust the weight of the bullet as you swage,  or form boattails on the 
     normal flat-base jacket.

          There are FIVE kinds of swage dies for the Mity Mite system:

                             (1) The CORE SWAGE die
                             (2) The CORE SEATER die
                             (3) The POINT FORMING die
                             (4) The LEAD TIP die
                             (5) The REBATED BOATTAIL die set

          In addition to swage dies, there are draw dies, and special jacket 
     forming  dies.   Copper  tubing can be formed into bullet  jackets  for 
     those calibers where regular drawn jackets are not available,  too thin 
     for big game hunting, or too expensive and difficult to obtain.  Tubing 
     jackets  can be made in the Mity Mite in 0.030-inch wall thickness,  in 
     the  calibers  from  .308 to .458.   The quality  of  such  jackets  is 
     outstanding, even if they are produced from ordinary copper water tube.  
     The  literature that comes with the kit of dies explains the process in 
     detail.  The one die that is used in this set and not discussed here is 
     the  END ROUNDING DIE,  which rolls over the tubing in preparation  for 
     closing  one end.   In reality,  it is simply a special size  of  point 
     forming die, with a round nose cavity and special punches for tubing.
          The  core swage die is made like a core seating die,  except  that 
     both the internal and external punches are very close,  sliding fits to 
     the  bore,  and  the bore is just large enough to accept a cast or  cut 
     lead core.   Also, there are three orifices in the walls of the die, at 
     120-degree positions around the circumference.  
          You can easily tell this die from the others by looking for  these 
     three  bleed holes.   It is easy to determine which punches go with the 
     die:   the punches are far too small to fit closely in any other die of 
     the  same caliber set.   Just try them by hand.   If they fit  smoothly 
     into the die cavity, they are right.
          There are really two forms of core swage die.  One is the ordinary 
     core swage,  used to adjust the lead core weight shape before making  a 
     bullet  from  it.   The  other  is a variation called  the  LEAD  SEMI-
     WADCUTTER DIE, or LSWC-1.  In the Mity Mite system, we place a -M after 
     the  model number of the die set,  and for the same kind of set in  the 
     Hydro-press system,  we place a -H after the model.  There is no LSWC-1 
     or,  for that matter,  any kind of core swage or bleed-off die for  the 
     reloading press.
          The  LSWC-1-M can be used to make a complete bullet in one stroke.  
     It  has a bore size that is finished bullet diameter,  and the  punches 
     have  ends that are shaped just like a reverse of the bullet  nose  and 
     base  you  want to form.   Because the punch forms the nose by  flowing 
     lead into its cavity, there has to be a small shoulder between the nose 
     and  shank,  where the edge of the punch presses into  the  core.   The 
     LSWC-1-M cannot make a smoothly curved ogive without a step.
          Let's  make  a bullet in this die.   First,  cut or cast  a  small 
     quantity of lead core as described in the earlier chapters.   But leave 
     from  two to five grains more lead than you actually want in the  final 
     bullet weight.  Locate your LSWC-1-M die set.  You can see that the die 
     has no adapter body like the reloading press die.  
          The  Mity  Mite dies don't use an adapter body,  because they  are 
     made to screw directly into the RAM of the Mity Mite press!  The die is 
     a very tough knurled cylinder of costly, special steel, heat treated in 
     electronic  furnaces  with a special kind of  atmosphere.   The  Corbin 
     process of die-making has been developed over the past twenty years  to 
     a  level  far beyond that used by most of the mass-production arms  and 
     ammo companies.   The dies you receive are superior in construction and 
     in design to the usual production die,  and the bullets you can make in 
     them should be superior to those you can purchase, if you do your part!
          The die has an internal punch,  which normally is left in the  die 
     (no need to remove it).   It goes into the die from the threaded end of 
     the  die.   The threaded end of the die screws directly into the  press 
     ram.   This  is just the opposite of reloading press dies,  which screw 
     into the press head.  In the Mity Mite, the press head holds a FLOATING 
     PUNCH HOLDER.   This black oxide finished, 7/8-14 TPI threaded cylinder 
     looks like a reloading press die.  But it holds the external punch.
          The ram of the Mity Mite press is machined so it performs all  the 
     functions  of  the universal adapter body.   There is a  shoulder  that 
     stops the internal punch from coming out of the top of the die when you 
     move the ram forward to swage.  There is also a hardened tool steel pin 
     with  a  knurled head,  passing through a slot in the side of the  ram.  
     This is the STOP PIN.  It's job is to stop the backward movement of the 
     internal punch when you pull the ram back,  so that the internal  punch 
     is  forced  to slide forward and eject the bullet.   You don't  need  a 
     mallet, ejector rod, or the power ejector unit with the Mity Mite.
          When  you consider the wide range of calibers,  styles,  and  jobs 
     that  Mity  Mite dies must do,  then think of the years of  development 
     that went into the complete system of interchangable,  simple dies  and 
     punches to fit the Mity Mity press, you may realize why it is better to 
     purchase  the ready-made system rather than trying to modify  reloading 
     presses,  come up with custom parts or tools,  or try to modify dies to 
     work  in  arbor presses,  hydraulic jacks,  or  vises.   The  universal  
     interchange of calibers,  jobs, and styles in the Mity Mite system is a 
     major benefit,  and the ease which which future changes or special work 
     can be done in this system makes it far more cost-effective than trying 
     to come up with one-of-a-kind tools for specific jobs.
          The  FLOATING PUNCH HOLDER,  (Model FPH-1),  is included with each 
     Mity  Mite  press.   Instead of moving the die to adjust for  depth  of 
     punch  insertion,  you screw the die all the way into the ram until  it 
     comes to rest on a shoulder.  This shoulder, not the threads, takes all 
     the force.  Adjustment is all done with the micrometer-like movement of 
     the  threaded punch holder.   Screw it toward the ram to  make  lighter 
     bullets,  or to push a punch further into the core.  Screw it away from 
     the  ram  to fit a heavier core,  or to push a punch a little less  far 
     into the die. 
          To  install the LSWC-1-M die and punches in the Mity  Mite,  first 
     make sure that the internal punch is correctly placed in the die.   The 
     internal  punch has a 1/2-inch diameter head at one end,  and  a  short 
     "tail" protruding from the other side of this head.   The tail is about 
     5/16-inch  diameter,  and its length varies from a quarter inch to five 
     eighths of an inch,  depending on the nominal weight (length) for which 
     the  punch was designed.   This tail,  working with the over-all  punch 
     length  and the dimensions of the ram itself,  determines the  lightest 
     and heaviest weight of bullet that you can get into the  die.   Lighter 
     bullets require less of a tail, and heavier ones take a longer tail.
          You  don't need to know the technical details -- just let us  know 
     what  general  weight  range you want,  and we'll see  that  the  punch 
     provided will do it.  If one punch won't handle the whole range, we may 
     suggest  a second punch.   Usually,  the range is so great that you can 
     reasonably  expect  to make handgun weights with one  punch  and  rifle 
     weights  with  another.   The punch tail determines how much volume  is 
     left in the die cavity,  which 
          You  don't need to know the technical details -- just let us  know 
     what  general  weight  range you want,  and we'll see  that  the  punch 
     provided will do it.  If one punch won't handle the whole range, we may 
     suggest  a second punch.   Usually,  the range is so great that you can 
     reasonably  expect  to make handgun weights with one  punch  and  rifle 
     weights  with  another.   The punch tail determines how much volume  is 
     left in the die cavity,  which nger pressure.  It isn't necessary 
     to use a pair of pliers.  Now identify the external punch.  
          The  external  punch  fits the die cavity,  but it has  no  "tail" 
     section on its half-inch diameter head.  Whereas the internal punch has 
     to  be  as long as the entire die,  so it can push the bullet  out  the 
     mouth,  the external punch needs only to fit half-way or less into  the 
     die bore.   It is shorter.   The part that is matched to the die cavity 
     diameter is less than half the entire punch length.  There is a section 
     of  the punch just after the head that is turned to about three eighths 
     of an inch in diameter.  
          This  section  slips into a hardened bushing that  you  will  find 
     inside  the floating punch holder.   There are three parts in the punch 
     holder  besides  the body itself.   First,  there is  a  hexagon-shaped 
     bushing  or retainer that threads into the mouth of the  punch  holder.  
     Remove  this bushing.   It should unscrew easily by hand.   Inside  the 
     punch  holder  are two hardened tool steel parts.   One is a  half-inch 
     diameter bushing or ring.  One side is flat, the other curved.  
          This  part  is  called the ROCKER  BUSHING.   It  slips  over  the 
     external  punch,  so  that the flat side rests against the head of  the 
     punch,  and  the  curved side faces toward the small end of  the  punch 
     (toward the die).   On punches that must be made larger than 0.375-inch 
     diameter,  the  hex  bushing  and the rocker  bushing  are  permanently 
     assembled to the punch.   These punches must have the end opposite  the 
     head  larger than the standard hole size in the two bushings.   We make 
     them  fit the standard system by building them with a  removable,  cap-
     screw secured head.   We assemble them here,  so you don't have to take 
     them  apart  and  reassemble  them every time you  want  to  install  a 
     bushing.  
          If  your  caliber  takes  a  punch  smaller  than  0.375-inch  tip 
     diameter,  the rocker bushing and hex bushing supplied with the  press, 
     in  the punch holder,  will easily slip over the punch.   Assemble them 
     now.  Put the hex bushing over the punch so it will hold the punch into 
     the  punch  holder.   Look inside the punch holder.   If you  use  your 
     little finger, or a toothpick, you can probably pick out the last part, 
     called  the  ROCKER  BUTTON.   This part looks  just  like  the  rocker 
     bushing, but is solid.
          The  rocker  button fits into a V-shaped surface in the bottom  of 
     the punch holder cavity.   It allows the head of the punch to  transfer 
     all the tons of swaging force to the punch holder in a safe manner, yet 
     still  allows  the punch to rotate slightly so it can line up with  the 
     die bore perfectly.   If the punch were held rigid,  it could not self-
     align or float to keep the punch perfectly aligned under stress.   This 
     is  another  advantage  of  the Mity Mite  system  over  other  swaging 
     methods.
          Notice that the rocker button has a curve on one side, and is flat 
     on the other.  Make sure that you put this button into the punch holder 
     so that the curved side goes in first.  You want the punch head to rest 
     against the flat side of the button.   And the flat side of the  rocker 
     bushing  presses against the other side of the punch head.   The curved 
     side of the rocker bushing matches a curve machined in the inside  edge 
     of the hex bushing.   When you screw it all into the punch holder,  the 
     punch  is held so that the exact center of its head is in the center of 
     a  1-1/4 inch ball,  most of which is not physically present,  but  the 
     working  parts  of  which are formed by the  curves  and  their  mating 
     surfaces.
          You don't need to take any special precautions with this assembly.  
     It doesn't need oiling or maintenance.   Just make sure you assemble it 
     correctly.   Look at the pictures in this manual before you try it.  If 
     any  of  the three parts are missing,  your punch will not be  properly 
     supported  and could be damaged under swaging  pressure.   Many  people 
     purchase  spare  punch holders so that they can assemble the punch  and 
     leave  it,  locking the lock ring on the punch holder to  repeat  their 
     favorite adjustment quickly.   This is nearly as fast as having several 
     presses, since it is the only adjustment that ever needs to be made.
          With the die assembled into the ram, and the external punch in the 
     punch  holder,  back  off the punch holder several turns away from  the 
     ram.   Pick up a core,  moisten it with a little Corbin Swage Lube  (or 
     Corbin Dip Lube,  if you want to make a lead bullet with a wax film for 
     up to 1200 fps velocity), and place it into the die mouth.  
          The core must fit into the die easily.  If it won't fit, it is too 
     large and you should not attempt to swage it.  Never swage anything too 
     large  to fit into the die by hand.   If it is far too small,  you will 
     tend to get folds and wrinkles in the shank, and it will be hard to get 
     enough  weight without having the core stick out the  die  mouth.   The 
     maximum  length of core still must fit into the die before any pressure 
     is  noticed on the handle.   Never try to swage something that is  just 
     barely inside the die, or sticks out of the die mouth. 
          Carefully move the ram forward so that you can align the  external 
     punch and die.   Don't pinch your fingers!  Just help the punch go into 
     the die this first time, and then, when you have it inside, gently snug 
     up the hex bushing so that the punch doesn't move freely (it will still 
     move under swaging forces).  
          The  Mity  Mite press is so powerful it can pinch your finger  off 
     just by dropping the handle with your finger between the die and punch.  
     Always  keep  your hand firmly on the handle when you are  adjusting  a 
     punch,  and  don't  trust gravity or friction to keep the  handle  from 
     falling!   I never place my finger between the die and punch.  Any time 
     I make a manual adjustment or help the punch line up the first time,  I 
     always  keep my fingers on the sides of the punch,  away from the  tip.  
     If  I should drop the handle on the press,  the die would move my  hand 
     out  of  the way.   I might pinch myself against the end of  the  punch 
     holder, but that wouldn't be too bad. 
          If  the  punch won't reach into the die at this  point,  move  the 
     punch  holder  forward.   The  ram  should be  moved  to  its  foremost 
     position,  so it reaches as close to the press head as it can go.  This 
     happens at the point of maximum leverage, with the pivots in the handle 
     lined  up in a straight line with the ram centerline.   This  press  is 
     unique  in having all its linkage and ram concentric and in a  straight 
     line  with  maximum forward travel.   Most presses have  a  side-torque 
     caused by offsetting the handle,  and several can't reach full leverage 
     because they physically run out of travel before then.
          If  the die can't be moved forward because the lead core comes  up 
     against the external punch,  back off the external punch by turning the 
     punch holder.  When you have the ram all the way forward, hold it there 
     and  screw the punch holder toward the die until you can't turn it  any 
     more.  The punch will have come up against the lead core.  
          Back off the ram slightly, and move the floating punch holder half 
     a turn forward.   Stroke the press forward again.  Then pull the handle 
     back  and almost,  but not quite,  eject the bullet.   You can see  the 
     bullet  at the die mouth,  ready to be ejected.   Notice whether or not 
     the  nose is completely filled out.   If not,  adjust the punch  holder 
     forward  another half turn and swage the bullet again.   Within  a  few 
     strokes  you  will  have the press set up so that the nose  is  forming 
     completely.
          A small quantity of lead should begin to move out the bleed holes.  
     I  like  to make my cores so that about one eighth of an inch  of  lead 
     extrusion comes out the bleed holes on every stroke.   Also,  I like to 
     swage the cores so that they are double-swaged:  every stroke goes over 
     and past the "top dead center" position, and then passes "over the top" 
     again on the back stroke.   You will notice that the Mity Mite retracts 
     the ram slightly as you continue through the end of the  stroke.   This 
     slight retraction gives you a double-swaging action on each stroke,  if 
     you use it.
          If  you eject the bullet and weigh it,  you can see whether or not 
     to adjust the punch holder and in what direction.  If the bullet is too 
     light,  then you may need to adjust the punch holder away from the  ram 
     (to  make  more room in the die at the end of the stroke,  and  extrude 
     less  lead).   If it is too heavy,  then you need to adjust  the  punch 
     holder  toward  the ram (to reduce the volume in the die at the end  of 
     the stroke, and force more lead out the bleed holes).
          Obviously, if your lead cores start out too light, there is no way 
     to  make  them all weigh the same by swaging and still come up  with  a 
     heavier  bullet.   The only way to get consistent core weight  by  this 
     method is to start out with plenty of lead,  and remove all the surplus 
     along with the variation.   The hardness of the lead has a good deal to 
     do with consistency of weight.  Harder lead will flow more slowly.  You 
     may get variations in weight with harder lead,  because you don't allow 
     enough time for the lead to quit flowing.   I recommend only pure, soft 
     lead  for  the  Mity  Mite.   You can get by with alloys of  up  to  3% 
     antimony, in the smaller calibers.  
          If  you  don't notice any lead coming out the  bleed  holes,  stop 
     swaging  and figure out whether the core is so short that it  lets  the 
     external  punch move past the bleed hole location.   If this happens to 
     be  the  case,  then  you need an internal punch with  a  shorter  tail 
     section.   Most  people assume the external punch is  too  short.   But 
     making it any other size tends to cause other problems.   The right way 
     to  adjust for extreme weight ranges is with the design of the internal 
     punch tail.  
          After you have swaged some bullets, the internal punch may be more 
     difficult  to move.   This is because the three extrusion holes in  the 
     die become filled with the last lead wire extrusion made.   The ends of 
     the  lead wire press against the punch sides.   This  is  normal.   You 
     should still be able to remove and re-insert the external punch, though 
     there  is no reason to do so unless you want to change to another style 
     (such as going from flat base to cup base).
          Read  this  part  over  again and make  sure  you  understand  the 
     principle  involved.   This is the same operation you use with all  the 
     various  core swages and lead semi-wadcutter dies.   It works the  same 
     way  whether  you use the automatic proximity  detectors  and  pressure 
     transducers of the Hydro-press or whether you do it by hand on the Mega 
     Mite  or  Mity Mite press.   It doesn't matter whether you  are  making 
     benchrest  .224 rifle cores,  handgun .44 Magnum cores,  or .40  Sharps 
     rifle  bullets  for paper-patching.   Airgun pellets or precision  lead 
     weights for phonograph cartridges all are made exactly this way.
          Two notes about high precision:  (1) Make sure the ram does indeed 
     go past the "top of stroke" position each time,  and (2) try to use the 
     same timing for each stroke.  Timing is important because lead flows on 
     an  exponential  curve  with time.   Lead has a  creep  rate  that  can 
     continue  for  years under a constant low stress.   If you  maintain  a 
     steady rate,  your cores will come out much closer than if you whip the 
     handle back and forth one time, and lean on it to drink a cup of coffee 
     the next.
          You  should  be able to get less than 1% variation in  total  core 
     weight on your first attempt.  If you are really good, you can get less 
     than 0.5% variation.   Some people actually achieve such high precision 
     that  there  is no discernable weight variation on a  normal  reloading 
     scale.  It is all the same equipment.  Your skill in operating it makes 
     the difference. 
          But  think about what this means:   If you start with a 100  grain 
     core,  one percent is one grain.  Half a percent is half a grain.  With 
     a 50 grain core,  one percent is half a grain.   With a 500 grain core, 
     one percent is five grains.   In other words,  don't just expect half a 
     grain  or  less  on everything,  because it is very  sloppy  for  light 
     bullets  and  beyond  any  reasonable  expectation  for  heavier  ones.  
     Besides  which,  weight  variation  alone has very little  to  do  with 
     accuracy.   
          Weight variation that is caused by differences in jacket thickness 
     or alloy composition is a bad thing for accuracy.  It means the trouble 
     is elsewhere,  and it means differences in bore friction, bullet upset, 
     and  other  factors.   Weight  variation that is merely the  result  of 
     having another grain or two of lead is quite insignificant.  I have won 
     matches  with  bullets  that varied more than five  grains  in  weight.  
     Fortunately,  there was nothing else wrong with them. A great number of 
     factory bullets have horrible weight variation from lot to lot.   If it 
     came from having more or less core material, I wouldn't worry about it.  
     But  usually it comes from having differences in jacket  material,  and 
     that affects groups.
          You've made some nice lead semi-wadcutter bullets now,  using  the 
     LSWC-1-M,  and  they  are ready to shoot if you used Dip Lube on  them.  
     Using Corbin Swage Lube, you would have made lead cores that could then 
     be  further processed into bullets.   In that case,  you would want  to 
     clean  off  the  cores  to remove any lube  before  putting  them  into 
     jackets.   The reason is that any lube inside the jacket contributes to 
     a possible unbalance of the bullet.
          Put  the cores in a strainer or wire basket and slosh them  around 
     in a strong solvent.   Corbin Cleaning Solvent comes in pint cans,  and 
     is able to remove any lubricant traces,  fingerprints,  and grease from 
     either  cores,  jackets,  or  from  your guns.   It  will  remove  some 
     finishes,  too,  so  be careful around stocks and  table  tops!   After 
     cleaning the cores,  spread them out to dry.  Change the core swage die 
     for the core seating die.  
          We've  already talked about the reloading press core seating  die.  
     It  is exactly like the one for the Mity Mite and Hydro-press  systems.  
     Only differences in size and how it is held in the press apply.  A core 
     seating  die looks like a core swage without any bleed holes.   That is 
     your first clue.  The second is that the bore is larger, and it accepts 
     the  right caliber of jacket for the bullet you want to  make.   Try  a 
     jacket in the die -- if it fits, probably it is the same caliber as the 
     die.   A  positive test for caliber is to swage a lead core in the core 
     seating  die,  and  then  use  your trusty micrometer  to  measure  the 
     diameter of the lead after swaging.  
          Core seating dieore swage without any bleed holes.   That is 
     your first clue.  The second is that the bore is larger, and it accepts 
     the  right caliber of jacket for the bullet you want to  make.   Try  a 
     jacket in the die -- if it fits, probably it is the same caliber as the 
     die.   A  positive test for caliber is to swage a lead core in the core 
     seating  die,  and  then  use  your trusty micrometer  to  measure  the 
     diameter of the lead after swaging.  
          Core seating dies  or  rifle 
     bullets,  and there is no need to purchase another special die for lead 
     bullets,  and (2) you can sometimes get a more precisely formed  bullet 
     for  critical  applications  by  doing  it  in  more  steps.   This  is 
     especially true for harder lead alloys.
          The internal punch of the core seating die fits into the die bore, 
     and either has a flat face,  a probe (for hollow base bullets),  a dome 
     (for  a  dish or cup base bullet),  or it can have a cavity  (for  some 
     kinds special bases, not usually on jacketed bullets as the jacket edge 
     has  a  hard time jumping over the edge of the  punch).   The  external 
     punch can be almost anything!
          If you want to make a handgun bullet, the external punch will have 
     a nose cavity shaped like a mirror image of the nose.  This is only for 
     lead  nose  bullets,  not for those with the jacket curved  around  the 
     ogive.   If you want to make an open tip bullet,  as most rifle bullets 
     tend to be,  then the external punch should fit into the jacket  rather 
     than  the sides of the die.   This means that the external punch can be 
     quite a bit smaller than the die bore.
          A  hollow  point  bullet uses a core seating punch  with  a  probe 
     machined  on  the tip.  This probe pushes down into the lead  core  and 
     displaces  lead  around itself.  The punch is made so that  it  centers 
     itself either in the jacket (for an internal hollow point,  having  the 
     jacket  wrapped  around it),  or on the die walls (a typical  lead  tip 
     hollow point).   This keeps the cavity concentric with the sides of the 
     bullet.
          You can use another external punch in the same die.  First press a 
     cavity  into the lead core,  as deep as you wish (you don't have to use 
     the  full extension of the punch into the core,  you  know...).   Then, 
     change  punches  and push a Keith nose or a round nose punch  into  the 
     die,  setting  the adjustment so that you don't completely  reform  and 
     close the cavity you just made.  Again, you will soon see that there is 
     a  lot of control possible between not forming the bullet sufficiently, 
     and completely forming it to the punch shape.  
          Your first punch should be used with reasonable force, compressing 
     the  lead core and filling out the jacket to meet the  die  walls.   It 
     should  leave the jacket and core in the die,  not pull it out with the 
     punch.   But any subsequent punch that you want to use does not have to 
     be pushed so far or hard into the core.   The shank is already  formed.  
     Everything  else is just a matter of styling the bullet.   Go ahead and 
     experiment.  Two punches can make twenty different bullet shapes if you 
     use them with various degrees of insertion and in different orders.
          But  the  point  forming  die  really  brings  out  the  power  to 
     experiment!   You read about this die already under the reloading press 
     section. It has a cavity shaped just like the bullet, except there is a 
     little hole in the tip for a strong,  spring-wire ejection pin to  push 
     the  bullet back out again.   In the Mity Mite system,  this die has  a 
     major  difference  from the reloading press types.    It has a  captive 
     internal punch instead of a retraction spring.
          You'll recall that the point forming die has a very small ejection 
     pin instead of a conventional internal punch, and it is held out of the 
     die  cavity by a spring.   In the Mity Mite press,  there is no spring.  
     That  stop  pin we discussed earlier is pulled out of the  top  of  the 
     press,  and  slipped into a slot in the head of the ejection pin  after 
     you  screw  the die into place.   Don't forget to do this,  or you  can 
     damage the ejection pin.
          The first thing I do is pull out the stop pin.   Then I place  the 
     ejection  pin  in the end of my point forming die (it goes in from  the 
     threaded end, just like all internal punches in all dies), and screw it 
     into the ram as one assembly.   With the ram in the right position,  it 
     is  easy to grasp the tip of the ejection pin while it sticks  out  the 
     die mouth.   I do this, and slide and turn the ejection pin until I can 
     see  the slot underneath the stop pin hole.   Then I push the stop  pin 
     back  into  place,  and give the ejection pin a tug to make sure it  is 
     actually locked in place.
          Now, the ejection pin will be retracted automatically from the die 
     without any spring pressure,  and it will be held in place to eject the 
     bullet.   The  Mity  Mite  system has less of a problem  with  a  stuck 
     bullet,  since you can use the press to retract the pin again and  make 
     another attempt to swage it.  If you feel resistance to ejection, it is 
     usually  better  to unscrew the die and use a short piece of  the  same 
     diameter of spring wire as the ejection pin, along with a small mallet, 
     to  tap  the  bullet  out.    This  happens  when  you  use  over-sized 
     components,  try  to  reswage  a finished factory bullet  in  the  same 
     diameter  of die (many people do this,  not realizing that you  usually 
     need a slightly larger die for it to work),  or forget to use the right 
     lubricant.
          The  most common problem people have when first starting to  swage 
     is bending the ejection pin.   After a while, you get a better feel for 
     the  kind of resistance that is normal,  and bent pins become less  and 
     less  frequent.   It is a good idea to purchase spares if you would  be 
     under  any pressure because of having your set out of commission for  a 
     little  while due to a damaged ejection pin or a stuck bullet  (usually 
     the cause).  One or two spare ejection pins can save your day.
          Now  let's  talk about a set of dies that we usually consider  one 
     package:   the RBT-2 set,  or rebated boattail forming dies.   This  is 
     actually a matched pair of dies,  not just one.  They replace the usual 
     straight-walled  core  seater  whenever  you want  to  make  a  rebated 
     boattail bullet.  
          A  rebated boattail bullet has a step,  or shoulder,  like a Keith 
     nose on a pistol bullet.  That step acts like a spoiler to break up the 
     blast  of hot muzzle gas just as the bullet exists your barrel.   On  a 
     conventional smooth boattail design, the gas flows with the streamlined 
     shape and zips past the bullet,  flows along the ogive, and then breaks 
     up  right in front of the bullet as it tries to get away.   A  boattail 
     means  that  you are probably shooting through your  own  muzzle  blast 
     turbulence!   That  can  add  perhaps another 10% error factor  to  the 
     bullet dispersion. 
          The  small  rebate has a minor  drag  effect,  but  over-all,  the 
     improvement  in  total performance is greater.   Not only do  you  gain 
     ballistic  coefficient by reducing base drag,  but you also retain  the 
     natural  good disperson characteristics of the flat base bullet  during 
     that critical exit time from the muzzle.  Add to that the fact that the 
     dies  and punches last longer,  there is less gas cutting and a  better 
     seal  in your barrel.   Those are compelling reasons to forget about  a 
     conventional boattail design if you have the option of making your  own 
     bullets.
          The process is just like seating a regular core.  You use the same 
     external core seating punch that you would use with your flat-base core 
     seater.  But instead of using the flat base core seating die, place the 
     core and jacket into the BT-1 or BOATTAIL PREFORMING die.  This die has 
     a  standard boattail shape inside.   You push the flat-base jacket into 
     this die, seat the core, and the jacket is converted into a boattail.
          Having  this  taper on the bottom of the jacket makes it  easy  to 
     form  the rebated step or edge.   The next die,  BT-2 or RBT  FINISHING 
     DIE,  has  a  shoulder that transposes itself into the jacket when  you 
     once  again seat the core.   If you tried to use this  die  alone,  the 
     shoulder would catch the jacket bottom and tear it.  But the taper gets 
     the  bottom of the jacket past the shoulder before any real pressure is 
     applied.  The jacket moves outward to take on the die shape, instead of 
     trying to draw over this shoulder.
          Included with the RBT-2-M set (which can be purchased as an add-on 
     to  a  conventional three-die or four-die set) is  a  special  external 
     punch  for the point forming die.   This punch has a cavity in the tip, 
     to  match the shape of the boattail.   The punch supports  the  rebated 
     boattail shape,  and keeps it from being mashed out of form.  The punch 
     is  a  little fragile,  so don't use it for other  experiments  without 
     considering the forces you plan to apply to those edges. 
          In a short, fat pistol caliber, you can use a Keith nose punch for 
     a  rebated boattail bullet.   First form a conventional jacketed bullet 
     with a nice truncated conical nose.   This is done in the point forming 
     die.   In fact,  you can make the whole bullet in the point forming die 
     if you put the jacket into this die backward (base first) and then  use 
     a  core  seating punch to seat the core.   Eject this bullet,  turn  it 
     over,  and now you have a tapered section facing out of the die and  an 
     open  tip flat end facing in.   Use the Keith punch to push the  bullet 
     into the die.  
          The tapered nose will fit into the Keith punch nicely, and will be 
     made  into a rebated boattail base.   The flat open end will be  formed 
     into a new nose in the point forming die.  It is simple, effective, and 
     the  bullets seem to gain between 20% and 40% in ballistic  coefficient 
     at  subsonic  speeds.   This doesn't work if the bullet is much  longer 
     than its caliber, so don't try it with conventional rifle bullets.
          Lead  tip  dies  for  the Mity Mite system  are  just  like  those 
     described for reloading presses,  except,  of course,  they are made to 
     fit the press ram.   They look very much like a core seating die.  Some 
     people wonder why we can't use a core seating die.   The reason is that 
     the bullet won't slip back into the core seater after it is finished at 
     full  diameter.   It will go in,  but only under some force.   And  the 
     force is greater than that required to form the lead tip.  
          Making a lead tip bullet requires a little experience.   At first, 
     you  will probably have some experimenting to do,  because you need  to 
     have  just  enough lead protruding so that the cavity in  the  internal 
     punch of the lead tip die can reshape it fully.   Too much lead showing 
     doesn't hurt,  but too little is a problem.   It can't fill the cavity, 
     and won't shape up properly.  With the lead tip die, it is necessary to 
     use very light pressure.   Pressing too hard makes a ring in the  ogive 
     of  the bullet.   In some small tips,  it helps to grind a sharp  wedge 
     shape on the ejection pin of the point forming die.  Then, the ejection 
     pin  will split the protruding,  deformed lead and come to rest against 
     the jacket edge.  
          The jacket edge won't split easily,  so the bullet can be ejected.  
     Then,  when you put the bullet into the lead tip die to finish the end, 
     the  neatly  split  blob of lead will reform nicely  and  become  whole 
     again.  This technique is useful for problem cases, where one must have 
     a  small  tip size and bring the jacket nearly  closed.   Generally  it 
     isn't required.   Large handgun-style lead tips,  which are probably  a 
     quarter  of the caliber or more,  don't generally require the lead  tip 
     die  in order to form properly.   A conventional three-die package  for 
     open tip bullets works well for making large lead tips of this type.
          The  lead tip die (LT-1-M) can be purchased separately as an  add-
     on,  or it can be included with your set of dies in the LTFB-4-M, RBTL-
     5-M,  or  the  FRBL-6-M sets.   These all have an "L" in their  catalog 
     number.   The "L" stands for "Lead Tip".   All it means is that a  lead 
     tip die has been included:   you can still make open tip bullets.   All 
     the  various sets of dies are assembled from the same basic  individual 
     dies.   Everything  but the LSWC-1-M set starts with a core swage and a 
     core  seating  die,   and  adds  a  point  forming  die,   and  various 
     combinations of lead tip and rebated boattail dies.  
          A "FB" in the catalog number means "Flat Base".  It indicates that 
     you  have a standard core seating die in the package,  not  necessarily 
     that  you are limited to flat base rather than  cup,  dish,  or  hollow 
     bases.  In fact, if you order a pistol set with the cup base specified, 
     you  could very well receive a set that doesn't have a flat base  punch 
     at  all,  but it still has the basic ability to make one if you get the 
     right punch.   We'd still call it a "FJFB-3-M" if it has a core  swage, 
     core seat, and point forming die.  
          The  "FJ" only stands for "Full Jacket",  and is primarily to fill 
     in space in the catalog number,  since any set with a point forming die 
     can be used to make a full jacket bullet.  The letters "RB" or "RBT" in 
     the catalog number stand for "Rebated Boattail", and they mean that the 
     two  RBT  dies are included,  along with the proper RBT punch  for  the 
     point forming die.   If the "F" for "Flat base" is also in the  catalog 
     number,  then  it  means that you can make both flat and  RBT  bullets.  
     Both  the  standard  core  seater  and the two  RBT  core  seaters  are 
     included, in that case. 
          The  number in the catalog number tells how many dies are  in  the 
     set.   For instance,  in a "FRBL-6-M" set,  you have flat base (F) core 
     seater,  two RBT core seaters (RB), a lead tip die (L), and of course a 
     core  swage  and point former,  which are assumed present  in  anything 
     above  a two-die set.   That makes six dies,  ae both flat and  RBT  bullets.  
     Both  the  standard  core  seater  and the two  RBT  core  seaters  are 
     included, in that case. 
          The  number in the catalog number tells how many dies are  in  the 
     set.   For instance,  in a "FRBL-6-M" set,  you have flat base (F) core 
     seater,  two RBT core seaters (RB), a lead tip die (L), and of course a 
     core  swage  and point former,  which are assumed present  in  anything 
     above  a two-die set.   That makes six dies,  a     one  die with matching punches,  and it makes the same kind  of  bullet 
     with  the exception that you cannot use jackets so long that they cover 
     the bleed holes.   That means half-jacket and straight lead bullets are 
     the proper kind for a LSWC-1-M.
          The  techniques of swaging are covered in much greater  detail  in 
     the other books.   I recommend that you invest a little time in reading 
     about the process,  if you have not done it before.   Bullet swaging is 
     quite  simple,  but  also quite powerful.   Because there are  so  many 
     possible  variations,  it is far more important to learn the principles 
     than  it is to try and follow a block of pictures and repeat each  step 
     exactly.   With six different kinds of dies,  and hundreds of different 
     techniques  and styles in thousands of calibers,  can you  imagine  the 
     number of pages you'd need to keep on hand, in order to have a "1-2-3-" 
     cookbook to follow for each possible bullet you wanted to make?
          On the other hand,  if you understand how a core swage works,  how 
     to use a core seater,  and what kind of bullets you could expect from a 
     point  forming  die  and  a lead tip die,  you can  work  out  all  the 
     variations for yourself,  and probably come up with others that none of 
     us  have yet discovered!   In the Mity Mite system,  pressures run from 
     20,000 to 50,000 psi or more.   That is some kind of power!   And, it's 
     all under your control. 
```
{% endraw %}

## CHAPT-6.TXT

{% raw %}
```
.he CHAPTER 6 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #.op

                       SWAGING WITH THE HYDRO-PRESS SYSTEM

          The  manufacture  of custom bullets has grown tremendously in  the 
     past decade:   people with a diverse range of jobs (and quite a few who 
     were  between jobs),  people who had successful  professional  careers, 
     have found custom bullet manufacture to be pleasant,  profitable, and a 
     wonderful  way  to plan a comfortable retirement income or to  build  a 
     business at low cost that can be turned over to a son or daughter.
          There is no typical custom bullet maker,  as far as I can tell.  I 
     know doctors,  carpenters,  locksmiths, attorneys, laborers, people who 
     had  severe physical handicaps,  people who are the picture of a robust 
     outdoors  athlete,  people  with  gruff  personalities  and  a  lot  of 
     mechanical aptitude, and people who are extremely pleasant, quiet types 
     who have a hard time with a screwdriver.   All of them seem to be doing 
     quite well in the custom bullet field.
          Today,  you  can  purchase  a complete  package,  ready  to  start 
     production   of  bullets  so  advanced,   and  so  difficult  for  mass 
     production,  that  none of the big names in bullet making  can  compete 
     with you.  It may seem hard to believe, but none of them have machinery 
     capable  of  forming some of the extremely  tough,  thick  jackets,  in 
     heavier weights of large calibers,  that you can easily make on a small 
     machine that fits in your den or garage.
          The  reason  they don't (and can't) compete in so  many  areas  is 
     their  committment  to volume.   Their very size dictates that  limited 
     production items are not profitable to them.   The wiser executives  at 
     these  firms welcome my customers into the field:   they know that  the 
     need  for quality specialty bullets can be met by custom bullet  makers 
     and that there is no direct competition,  but in fact a benefit:   they 
     can  now  forget  about pressure to make unprofitable (to  them)  small 
     runs, and just refer clients to you, the custom bullet maker.
          Besides, the kind of equipment needed to mass produce heavy walled 
     jackets in larger diameters is extremely expensive.   The stroke length 
     and  tonnage of the multi-station presses for high speed production  is 
     quite  beyond  anything used for ordinary target and  smaller  diameter 

     hunting bullets.   It would cost a minimum of half a million dollars to 
     install the equipment required, and the market for specialty bullets of 
     this kind is far too small to be investing even that kind of money, not 
     to mention the promotion, inventory, and special materials required.
          On the other hand,  what is unprofitable to a big outfit is enough 
     to  keep  a  family  or two living in  high  style!   A  custom  bullet 
     typically  is  sold for prices from 50 cents to over  two  dollars  per 
     bullet.  They are NOT price competitive with mass produced bullets, and 
     they don't have to be.   Even at twice those prices,  there are between 
     ten  thousand  and  one  hundred thousand  (typically  fifty  thousand) 
     bullets sold in any given specialty size and caliber each year,  on the 
     average.  
          Who  pays  that  for bullets?   People who  own  exotic  calibers.  
     People who like to hunt big game and have experienced repeated failures 
     of cheaper mass produced bullets.  People who want a specific weight or 
     style in some caliber and don't mind investing a little more than usual 
     to  try  it.  People  who...  well,  basically,  people  interested  in 
     something better, different, or unavailable elsewhere at any price.  
          You  don't  sell  a lot of these bullets  to  local  plinkers,  of 
     course.  But serious competitors, people spending five thousand dollars 
     or more to make a trip to Africa for hunting,  special police teams who 
     need  bullets  of  unusual design  for  tactical  situations,  and  the 
     everyday  handloader  with  a spark of curiosity in his  soul  -- these 
     people  are  the  ones who produce backlogs  for  my  customers,  often 
     cleaning  out  their  entire  supply at  trade  shows  or  by  magazine 
     advertising sales.
          The  machine  that  makes it possible is the  Corbin  Hydro-press.  
     Everything  about the machine is designed so that you can get into  the 
     field  at  minimum  cost,  and  grow  without  having  to  worry  about 
     outgrowing  the  capacity of the equipment.   It is capable of  forming 
     solid brass bullets in one stroke,  making a 10-gauge shotgun slug from 
     a  chunk  of raw lead,  forming partitioned jackets  in  heavy  tubing, 
     making brass,  copper,  or even steel jackets with thin or heavy walls, 
     and extruding lead wire in any diameter.
          It can turn right around and reload some ammo for you,  too, using 
     regular  RCBS type dies and shell holders.   When you suddenly  realize 
     that  all  your  reloading  presses are  now  complex  progressives  or 
     turrets  and  you  have lost the old rugged simplicity  of  a  powerful 
     single-station machine, the Hydro-press greets you with a "can-do!" and 
     barely  begins  to  unleash  its tremendous power on  jobs  that  would 
     shatter the fragile parts of modern reloading machines.
          It's  not large -- only 34 inches tall,  23 inches  wide,  and  15 
     inches  deep (about like a small refrigerator).   But the design is the 
     essence of rugged simplicity.  We use a Hydro-press to cold-forge steel 
     parts (used in other Hydro-presses, by the way!).  It can stamp, blank, 
     coin,  trim,  and punch steel,  in addition to its regular duties as  a 
     profit center for your bullet making.
          The  major advantage of the Hydro-press is its built-in electronic 
     controls  and  logic  circuits:   the "brains" of  the  press  and  the 
     sensitive  transducers  that  tell it what is going on  in  the  world.  
     Anyone can assemble a hydraulic cylinder to a ram,  somehow adapt it to 
     a set of dies, and let it slam blindly back and forth.  That won't make 
     good  bullets,  however.   The ability to control pressure in the  die, 
     exact  position  of the punches,  and precise amount of time  that  the 
     pressure  is being applied,  is needed in order produce a  consistently 
     good product.
          The  Hydro-press uses transducers that sense the position  of  the 
     ram  and  control  its movement though  logic  circuits.   The  earlier 
     versions  used  high  quality limit switches to tell  top,  bottom  and 
     loading position.  Current versions use electronic proximity  detectors 
     that  have  no moving parts and do not contact the  ram.   Solid  state 
     timing  controls  the  application  time  of  the  pressure.   Pressure 
     transducers  control  the  level  of pressure  applied.   All  this  is 
     automatic, locked away in the steel innards of the cabinet.  
          What you see is a colorful Lexan-laminate-on-steel top panel, with 
     a  digital  counter,  adjustable  inspection  light,  key-locked  power 
     switch,  selector switches for various modes of operation, and brightly 
     colored  oversize  push-buttons to cycle the press.  At the  left  rear 
     corner  of  the cabinet is a massive steel press head  with  inch-thick 
     plate  for a base and head,  and hardened,  ground tool steel  ram  and 
     guide rods running on bearings.   
          As powerful as it can be,  the Hydro-press is also sensitive.  You 
     can set the pressure, speed, and timing in seconds. It can reload a .25 
     ACP case just as easily as it cold-flows a solid hunk of copper.  Blind 
     force  cannot  begin  to accomplish the tasks you can handle  with  the 
     intelligent  Hydro-press system.   The dies and tooling for the  Hydro-
     press are capable of sustaining much higher pressures than smaller dies 
     for  the  reloading press or Mity Mite.   They  use  1.5-inch  diameter 
     blanks, with 1-12 TPI threads.  The press head accepts a floating punch 
     holder  with  1.5-inch by 12 TPI threads,  and an adapter for  standard 
     7/8-14 TPI dies as well.  The ram can be adapted to 7/8-14 TPI, or to a 
     conventional shell holder.  Shell holders for 20 mm and for 50 Browning 
     Machine Gun cartridges are also available.  
          Fifty  caliber  MG dies (for reloading) are made by C-H  Dies  and 
     they fit directly into the head of the Hydro-press.   I recommend them. 
     Corbin  builds  a lead wire extruder kit,  jacket maker  kits,  and  of 
     course the full range of bullet swaging dies for the Hydro-press.
          Calibers  are  virtually limitless.   No small arms bullet is  too 
     large.   Weights  and  styles are also quite open to a  wide  range  of 
     designs.   If  you want something that cannot be made in a hand  press, 
     this  is the system that is most likely to handle it.   (If the  Hydro-
     press won't handle it, chances are it cannot be done.)
          The  dies  and  punches are massive,  far too large for use  in  a 
     reloading  press or the Mity Mite.   And smaller dies do not  fit  into 
     this  press for good reason:   it would be too easy to destroy the dies 
     by  using  pressures  only  a Hydro-press die  of  that  caliber  could 
     sustain.   All of the kinds of dies previously discussed are  available 
     in this system.   They work the same way.   The only difference is that 
     the  die  goes into the ram so it faces straight up,  and the  external 
     punch fits into the floating punch holder so it faces straight down.
          This  arrangement  makes it possible for you to drop  a  component 
     into the open mouth of the die,  then move your hands back to the  two-
     hand,  safety  controls to start the stroke.   In the key-locked manual 
     start mode,  it would take a contortionist to put a part of their  body 
     in  the way of the moving ram.   (An automatic mode,  controlled by the 
     key switch,  is also available -- you need to know the code sequence to 
     start it.  It is handy for sizing long runs of cartridge cases with the 
     ram set for a moderately slow travel).
          Rather than describe all the modes and controls of the Hydro-press 
     here,  I will refer you to the book "POWER SWAGING", which is all about 
     the  use of power presses including the  Hydro-press.   Basically,  the 
     adjustment  is still done with the punch holder,  just as it is in  the 
     Mity Mite.   The main difference is that you can control exactly  where 
     the start and stop of the stroke takes place, so that the stroke length 
     is  adjustable  to  precisely what you need for any job.   (Up  to  six 
     inches of stroke can be used, if need be!)
          The press can stop and reverse itself,  after a applying  pressure 
     for  whatever time you tell it (0.1 to 10 seconds).   It will  continue 
     down,  eject  the bullet gently to the top of the die,  and then  raise 
     slightly to retract the internal punch so you can put another component 
     into  the  die.   The  point  at which it reverses can  be  a  physical 
     location set by the position transducer,  or it can be a pressure level 
     achieved  by the compression of the material,  sensed by  the  pressure 
     transducer.
          Naturally,  if you set the press to stop when it reaches a certain 
     position,  it is possible to adjust the punch holder so that the bullet 
     has yet to be contacted,  or so that it is pushed too far for the shape 
     you want.  I like to set the stroke length first, leaving myself enough 
     room  to easily put components into the die but not wasting time moving 
     the ram any further than it needs to go.  Then, after I have a pleasant 
     working  stroke  length set up,  I back off the  punch  holder,  put  a 
     component  into  the die (core,  jacket,  whatever I might be doing  at 
     the time), and run the press ram up to the top of its stroke.    
          With the position switch and pressure switch both turned off,  the 
     ram will simply stop when it reaches this point.   It is now as far  up 
     as  it  will go during this particular job.   Then,  I screw the  punch 
     holder down by hand,  until the punch contacts the material within  the 
     die.   I  back  the ram down slightly (press the green  "ENERGIZE"  and 
     yellow  "DOWN"  buttons,  then release them after the ram moves down  a 
     bit).   Then  I  give  the punch holder another quarter  to  half  turn 
     downward,  just to put some compression on the component on the next up 
     stroke.
          The  ram is then moved up (press the green "ENERGIZE" and the  red 
     "UP" buttons).   Again, with pressure and position switches turned off, 
     the  ram  will  do  one of two  things:   if  the  component  is  being 
     compressed  and  is resisting with pressure equal to that of the  press 
     (as  read  on the gauge),  then the ram will simply stop and  hold  the 
     pressure.   I  can read it on the gauge,  and I can hear the motor  and 
     pump inside the cabinet as it pushes oil over the by-pass valves.   Or, 
     if the pressure I have set is great enough to move the component into a 
     more compact shape,  so that the position sensor is activated, then the 
     pressure gauge will drop to zero, the red LED light on the top position 
     sensor will come on,  and the ram will stop.   The motor and pump  will 
     make their usual idling sound.
          It's  easy to tell whether or not you have formed the component to 
     a limit that was set by position or by resistance to the pressure.   In 
     some jobs,  you want consistent pressure.  This would be true of a core 
     seating  operation.   The  Hydro-press can form seated cores  far  more 
     accurately  than you can do it by hand,  on the larger  calibers.   (On 
     small calibers, I still think a person can do it better -- given enough 
     experience).  
          But on a core swage operation, or when making a lead bullet with a 
     LSWC-1-H (note that the die designations are the same as the Mity Mite, 
     except  that  the letter "H" is added to indicate the  big  Hydro-press 
     design),  using  constant pressure would simply move all the  lead  out 
     through  the bleed holes!   It would come out very consistently,  under 
     the precise control of the pressure and logic circuits, but there would 
     be no indication of when to stop pressing.
          In this operation, you adjust the pressure sensor to a value lower 
     than  that listed in "POWER SWAGING" as maximum safe pressure  for  the 
     caliber  of  die.  Then,  you actually stop the ram using the  position 
     sensor  (turn  on  the "POSITION" switch).  The  location  of  the  top 
     position transducer will control the length and weight of the bullet in 
     this  case.   It is extremely important to use sensitive,  high-quality 
     transducers for this kind of work,  because variation in their range of 
     sensing will cause variation in bullet weight.   I use a highly precise 
     electronic proximity detector that can sense position within millionths 
     of an inch, far better than the human eye.  
          In  manufacturing a bullet jacket with the Hydro-press,  the  same 
     basic  steps  are  used  as with thinner materials in  the  Mity  Mite.  
     First,  a piece of tubing is cut to length.   The length is  determined 
     experimentally  and  is different for various weights,  styles of  tip, 
     ogive  radius,  and  kinds  of bases,  as well  as  for  partitions  or 
     conventional cup jackets.   (We work this out when we build the dies -- 
     design is a large part of the making of a tubing jacket set).  
          Tubing is cut to length using a turret lathe with air feed,  or an 
     automatic  screw  machine.   Corbin  cuts  tubing  for  customers,  and 
     furnishes  the correct temper and wall thickness,  alloy and length  to 
     make  the bullet you order.   Or,  you can farm this out to a local job 
     shop,  or  cut  the  tubing yourself with a  fine-tooth  saw  (bandsaw, 
     circular  saw,  or even a hand saw,  using a V-block and a stop to  get 
     even, square cuts).
          Boxes of from 100 to 5000 pieces of tubing are normally  purchased 
     with the dies.   One end has been deburred and chamfered.  The other is 
     left with as much of the cut-off burr as possible on it.   It will form 
     the  base,  so any extra metal is welcome and causes no  problem.   The 
     piece of tubing is placed over a punch that fits precisely inside, with 
     a  length  that  allows  at least half the caliber length  of  tube  to 
     protrude beyond the punch tip, unsupported.  
          The punch has a shoulder that presses on the other (chamfered) end 
     of the tube. One simply installs the END ROUNDING die (or, as some call 
     it, the JACKET MAKING die) in the press, making sure that the steel pin 
     that  passes through the punch head is indeed installed  correctly  (on 
     top  of the knock-out bar,  but under the retraction spring -- pictures 
     in   POWER  SWAGING  illustrate   how).    Thof  tube  to 
     protrude beyond the punch tip, unsupported.  
          The punch has a shoulder that presses on the other (chamfered) end 
     of the tube. One simply installs the END ROUNDING die (or, as some call 
     it, the JACKET MAKING die) in the press, making sure that the steel pin 
     that  passes through the punch head is indeed installed  correctly  (on 
     top  of the knock-out bar,  but under the retraction spring -- pictures 
     in   POWER  SWAGING  illustrate   how).    Th end of the tube will now be rounded like a  round 
     nose bullet,  and will have a small projection on the end.  If the tube 
     isn't closed this far, check the position sensor and make sure that the 
     right  pressure is being used,  and the position sensor isn't coming on 
     before  that pressure is reached.  (If it is,  move the floating  punch 
     holder down a bit -- don't adjust the position sensor).
          The  next  step  is to draw that piece of rounded-end  tube  to  a 
     diameter that will fit into the core seat die for your  caliber.   Draw 
     dies are part of the jacket-maker package if they are required.  Again, 
     it  is the working system you are purchasing,  with all the development 
     and  testing  that  went  into making it work  with  as  few  steps  as 
     possible,  not a specific number of parts.  We provide what it takes to 
     make the jacket.  Sometimes it takes thousands of dollars worth of die-
     maker labor to develop some little change that you might desire, but we 
     don't charge you for it.   On the other hand,  if we can come up with a 
     process  that eliminates one or two steps by putting in all this  work, 
     then I think you can see that it's a better deal even if you don't need 
     some specific die or punch that might otherwise be included.
          I  mention  this because not every jacket design is made the  same 
     way.   Some alloys,  thicknesses,  calibers,  or combinations of jacket 
     features take differnt paths during production.  Because this is almost 
     entirely unique,  one-of-a-kind development work done just for you,  to 
     make  your bullet,  it is impossible to predict whether your  set  will 
     include  any given number of punches,  dies,  or whether certain  steps 
     will  be necessary in advance.   Instructions are written after the set 
     has been developed and tested.   Generally, they all follow the process 
     oulined here.  Sometimes there are radical exceptions.  
          Rather  than charging you for full shop time every time  something 
     requires  a lot of working out,  we just have one standard price for  a 
     package  of  tools we call the "Copper Tubing  Jacket  Maker  Set",  or 
     "CTJM-1-H".   This  set  is NOT a fixed physical number of  parts,  but 
     varies  with  whatever is needed.   You are  purchasing  the  completed 
     concept, the process of manufacturing something that no one else in the 
     world has worked out quite this way.   If it takes an extra die or two, 
     then  the  extra material you got may be considered a bonus -- I  would 
     consider it unfortunate, since it makes the bullet manufacture a little 
     slower.  On the other hand, if we were able to eliminate everything but 
     one or two dies in the set, you might consider it an over-priced set if 
     you  just  looked at the parts received and not at the time  that  went 
     into developing this faster,  easier method for you.   I would consider 
     it  a  blessing that someone had eliminated all the extra steps  in  my 
     bullet making operation!
          But,  as I was saying,  the next step is usually to draw down  the 
     end-rounded tube.   For this, a die is provided.  The die fits into the 
     head of the Hydro-press, using an adapter that takes it from 7/8-14 TPI 
     to  the  1.5-inch  by  12  TPI  press  head.   Adapters  are  available 
     separately,  if  you  want to permanently install one on each  die  for 
     convenience,  or  you  can use the one that comes with the  press,  and 
     simply change the dies.
          A very long punch is provided,  with a base that looks like a die.  
     It  screws  directly into the press ram.   This  drawing  operation  is 
     exactly a mirror image of the usual swaging set-up.   The die and punch 
     positions are reversed,  and of course there is no internal punch since 
     the  draw die is an open,  annular or ring die.   The tubing is  simply 
     dropped over the punch and pushed through the die, coming out the top.
          After  drawing,  the  tubing  normally must be annealed  to  avoid 
     cracks  in  the base.   We make a very nice  electronically  controlled 
     furnace  for  this,  which can be optionally equipped with  a  Nitrogen 
     atmosphere for even greater control (no scale,  no oxidation).   If you 
     don't  feel ready for the electric furnace (which is the  same  quality 
     that  we  use  to make our dies,  by the way),  then a propane  or  gas 

     welding torch will do.   Heat the tip red and drop the jacket in water.  
     The water quench is to knock off scale.  It doesn't do anything for the 
     anneal.
          Now  remove  the draw die and punch,  replace the  floating  punch 
     holder,  and  install the regular core seating die from whatever  swage 
     set  you  plan  to use with these  jackets.   Some  kinds  of  jackets, 
     especially  partitioned  ones,  have  a  different  internal  punch  to 
     install.   Instructions  will  be included with those sets to tell  you 
     how.  Otherwise, just use the normal flat internal punch.  The external 
     punch is a special one in all cases, however.
          The  external  punch  is made for a specific  wall  thickness  and 
     length of tubing.  It fits into the jacket,  supporting the walls while 
     pressing on the open mouth.   The length of this punch is a bit shorter 
     than  the end-rounding punch,  but otherwise they appear to be similar.  
     The END-FLATTENING punch, as it is called, fits inside the drawn jacket 
     snugly,  but it does fit.   The end-rounding punch only fits inside the 
     tubing, before drawing.   
          As with most swaging tools, sorting out the parts is just a matter 
     of knowning what they are supposed to accomplish,  then seeing if  they 
     fit  into  the parts they are supposed to fit.   If they don't  fit  by 
     hand,  chances are they are not the right parts.  If they do, then they 
     probably are!
          The  purpose of the end-flattening punch is to flatten the rounded 
     end  of  the  tube,  and make a  closed  jacket.   Application  of  the 
     recommended  pressure,  as given in the instructions that come with the 
     set,  will produce a flat base.  The jacket is now finished!  It can be 
     used just like any other jacket.   The operation just described can  be 
     applied  to  the  Mity Mite system,  using the 0.030-inch  wall  tubing 
     suitable  for this press.   Tubing jacket manufacture  is  considerably 
     easier and faster on the Hydro-press, even with thin jackets, since the 
     stroke  length  is  considerably greater and the press has  full  power 
     anywhere in the stroke.  
          The Mity Mite and the Hydro-press systems both use different  size 
     dies,  and do not interchange.  The Hydro-press can use reloading press 
     swage  dies,  though I don't recommend the practice:   it's too easy to 
     over-stress a swage die by applying more pressure than the  recommended 
     limit  (the charts in POWER SWAGING are for Hydro-press dies,  not  the 
     smaller diameter reloading press dies).   However,  the Mega Mite press 
     is  a common ground for all Corbin dies.
          
```
{% endraw %}

## CHAPT-7.TXT

{% raw %}
```
.he CHAPTER 7 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #.op

                   SOME SPECIFIC BULLETS AND HOW TO MAKE THEM


           I've  already  written seven books and my editors tell me I  have 
     over  400 articles in print,  describing the various things you can  do 
     with swaging.  It would be ridiculous to try and explain every possible 
     bullet style in this book -- you'd need a flat-bed truck to haul it out 
     and a crane to flip the pages!  
          Rather  than  that,  I  will try to explain how  each  of  several 
     examples of bullets can be made,  selecting very simple and very exotic 
     kinds of bullets,  including features that shooters find exciting,  and 
     designs  that  appear difficult or impossible until you have  seen  how 
     simple swaging makes it.   From these few examples, you should begin to 
     gain  an understanding of the process and how much more you can do with 
     it.  

                      HOLLOW BASE TARGET PISTOL WADCUTTERS

          Lead  wadcutters with hollow base can be made in a reloading press 
     in  the calibers from .25 ACP to .357/.38,  up to .458 caliber  in  the 
     Mity  Mite,  and up to .75 caliber in the Hydro-press.   The  reloading 
     press makes as accurate a bullet in regard to diameter control, but for 
     superior weight control, you should use the Mity Mite or larger swaging 
     presses.  
          Select  either  a core seating die or a lead  semi-wadcutter  die.  
     The  core seating die should be ordered with a wadcutter nose  external 
     punch,  and a hollow base internal punch.  So should the LSWC-1 die, if 
     you  wish  to  use that one.   (I would -- it isn't  available  in  the 
     reloading press system, however.)
          Prepare  your  lead cores by either casting them in the Corbin  4-
     cavity  adjustable  weight core mould,  or by  cutting  uniform  length 
     pieces from a spool of lead wire.  Specific instructions are found with 
     the tools or in other sections of this book.  More detailed information 
     can be found in the book "Rediscover Swaging".     
          To  establish the proper weight of core,  make one and put it in a 
     scale pan.  Then adjust the next few until you get what you  want.   If 
     you plan to use a core seating die (CS-1) without a core swage (CSW-1), 
     then  what  you  put in is what you will get out in regard  to  weight.  
     This is the case with reloading press die sets,  since there is no core 
     swage for them.  It isn't necessarily a bad situation.  I shot a lot of 
     good groups when I was in the Navy using bullets that had 3-5 grains 
     variation in my trusty .45 Colt Government pistol. 
          If you do use the Mity Mite or other special swage press, and plan 
     to use a core swage or the all-in-one lead semi-wadcutter die (LSWC-1), 
     then  make  the cores from 2 to 5 grains heavier than you want  in  the 
     bullet.   That  gives  you some extra lead to extrude  along  with  any 
     variation in weight.
          Lubricate  the  core by one of two methods.   If you want a  clean 
     lead bullet with no lubrication,  use Corbin Swage Lube on your  finger 
     tip  and thumb,  and just give each core a little rotation between them 
     as you pick them up to put them in the die.   It's simple and  natural, 
     no  big deal.   Let the benchrest rifle fanatics worry about  measuring 
     out  lube  with a hypodermic needle on a special stamp pad:   it  won't 
     make any practical difference in where the bullet lands.
          The other method is for placing a wax jacket on the bullet itself.  
     Instead  of lube grooves which apply a little band of lube and let  the 
     rest of the bullet scrape along the bare metal contact with your  bore, 
     the whole surface of the bullet can be covered by a thin,  hard film of 
     high temperature wax.  
          The  product  that  does this is Corbin Dip Lube.   Some  call  it 
     "Liquid  Jacket".   That's what it acts like.   You dip the core  in  a 
     small  container  and  put  it wet into  the  swage  die.   Then  apply 
     pressure,  swage the bullet,  and it comes out nearly dry.  Let it cure 
     for  fifteen  minutes,  and  you are ready to load and  shoot  it!   No 
     sizing, no lubricating, and more lube contacts the bore than if you had 
     it plastered with conventional drag-producing grooves.
          Drawback?   Alox-beeswax  lube works at somewhat  higher  velocity 
     levels  than  Corbin Dip Lube.   If you are pushing the bullets  toward 
     magnum speeds, you may be in for some leading.  On the other hand, that 
     is  what  Corbin bullet jackets are made to prevent.   From  1,200  fps 
     down,  I have had excellent results with the Dip Lube.  Many commercial 
     firms purchase it in gallon lots for their bullets,  so I know that  it 
     works  as  well  for their customers.   Any lead  bullets  can  produce 
     leading  in some guns and with some loads,  of course.   I certainly do 
     not claim this product is the best lubricant made, but it is one of the 
     most convenient and easily used, especially with swaged bullets.
          Before  swaging the bullets,  you may want to know how to put  the 
     dies  in  the press.   For the Hydro-press,  you should have  the  book 
     "Power Swaging" at hand.   You need it,  period.   Without it you  will 
     break  dies.   For  the Mity Mite,  a brief reading of the  instruction 
     sheet  that comes with the press and dies should make the  installation 
     and operation fairly clear.  For the reloading press, ditto.
          But here's a quick run-down:   the Mity Mite die goes into the ram 
     of  the Mity Mite press.   The ram is the steel cylinder that moves  in 
     and out of the press frame when you pull on the handle.   It has a 5/8-
     24 TPI thread in the working end,  and the handle forks attached to the 
     other end.  
          There  are  two punches with the die (each and every die  has  two 
     punches that are required to operate it,  except for draw dies).   Lead 
     tip dies come with one punch,  but use your existing point forming  die 
     bottom  punch.   We  are  not going to be using those  dies  now.   The 
     reloading  press  has  an  internal punch  captive  inside  the  black, 
     threaded adapter body.   It's external punch slips into the press  ram, 
     and the die screws into the pressd head like any reloading press die.
          In the reloading press, you would be using the CS-1-R core seating 
     die,  and you would have the hollow base internal punch inside the die.  
     If  you  wanted to install this punch (because the die  normally  comes 
     with a flat base internal punch, and you order the other base shapes as 
     optional punches),  you would unscrew the die insert from the bottom of 
     the  die and then pull the original flat base punch straight out of the 
     top  of the die insert.   You would clean the new punch,  and press  it 
     gently  into the top of the die insert,  then screw the die  and  punch 
     together back into the adapter body.
          In the Mity Mite press,  you would see that the die has threads on 
     one  end and a venturi (funnel-shaped) opening at the other end.   This 
     venturi  opening  helps align the external  punch.   The  threaded  end 
     should  have  a steel cylinder with two diameters protruding  from  it.  
     This  is  the head and tail of the internal punch.   The tail is  about 
     0.312 inches in diameter, and the head (right next to it) is about 0.50 
     inches in diameter.   The rest of the punch is the same size,  minus  a 
     tad, as the die bore.  It is a diamond-lapped sliding fit.  
          If you want to change the base shape,  you slide this punch out of 
     the die, clean the new one carefully of all grit and dust, and slide it 
     carefully  into the die from the threaded end.   Flat base,  cup  base, 
     hollow base, and dish base shapes can all be made this way.  Bevel base 
     can  be simulated but remember that all end shapes which are formed  by 
     pressing  against  a  punch will have some degree of shoulder  or  step 
     where the edge of the punch contacts the bullet.   A true bevel base is 
     not made in this simple kind of die.
          Screw the die into the press by hand.   In the Mity Mite, screw it 
     in all the way.   Don't use tools.   Hand-tight is tight enough.  Don't 
     confuse the swage die,  which is about 3/4-inch in diameter,  with  the 
     black threaded floating punch holder (FPH-1-M) in the press head!  Many 
     people  think  the  punch holder is the die,  because it looks  like  a 
     reloading press die.  
          The  external punch is held in the punch holder.   In  a  previous 
     chapter this was covered with photos and detailed description.  The hex 
     bushing  unscrews  from the end of the FPH-1.   Inside is a  collar  or 
     bushing that slips over the punch.  (If the punch is smaller than  .375 
     diameter  -- if not,  the punch already has the bushing and hex bushing 
     assembled  to it.   Just remove the one in the FPH-1 and set it  aside, 
     take  out  the  round rocker bushing  but leave  in  the  solid  rocker 
     button.  Install the punch as one unit.)
          Assemble  the  round rocker bushing and then the hex bushing  over 
     the  external  punch.   If you have any doubt as to what  part  is  the 
     external  punch,  look for the one part that does NOT fit into the  die 
     full  length  so  that it comes to the mouth of the die  and  fills  it 
     completely  from end to end with some left over! 
          The die is the round steel cylinder with the hole through it.  You 
     can see through it if you pull out the internal punch.    The  internal 
     punch  will NOT fit into the floating punch holder properly.   It has a 
     tail section that keeps it from fitting. The head of the internal punch 
     and  the  head of the external punch are the  same  diameter,  but  the 
     external  punch has no projection or tail section.   It steps down from 
     the  head (about .50 inches diameter) to the shank (about  0.36  inches 
     diameter)  to  a section that is just below bullet diameter,  having  a 
     portion that is closely fitted to the die bore.
          The punch should be held finger-tight in the floating punch holder 
     at this point.   The adjustment of the punch holder is made by  putting 
     one  of the lubricated cores into the die mouth,  and carefully  moving 
     the  ram forward so that the external punch can be aligned with the die 
     and  moved into it.   The object now is to adjust the punch  holder  so 
     that  the  press  handle  can be moved to the point where  the  die  is 
     forward  as far as it can go.   If the punch and holder stops  the  ram 
     from  going  forward  now,  back off the punch holder.   If  the  punch 
     doesn't contact anything yet, that's fine.  Just get it into the die.
          Make  sure  that  the ram is capable of going as  far  forward  as 
     possible, unlimited by coming against the punch or holder.  No pressure 
     should be generated,  no particular force required.   The weight of the 
     handle  should be more than sufficient to move the ram forward all  the 
     way.   Have you got that adjustment made?  Make sure the ram is free to 
     move back and forth on both sides of its foremost extension.   You  can 
     tell  if it is right,  because the pivot pin that holds the ram to  the 
     press  handle will line up on the same plane as the bolt that holds the 
     handle to the two links.
          Now,  holding  the  handle  so that the ram  is  at  the  furthest 
     position forward, screw the floating punch holder toward the ram.  Keep 
     turning  it by hand until the punch contacts your lead core and you can 
     no longer turn the punch holder by hand.   If,  at this point,  you are 
     able to screw the punch completely into the die and the die face  comes 
     up against the hex bushing on the punch holder, something is not right.  
          The  possibility is that you didn't have enough lead core for  the 
     set  the way it is.   The cure is to obtain a hardened steel bushing to 
     slip over the tail of the internal punch, extending it forward.  Do NOT 
     try to machine or modify the external punch or die to cure  thholder by hand.   If,  at this point,  you are 
     able to screw the punch completely into the die and the die face  comes 
     up against the hex bushing on the punch holder, something is not right.  
          The  possibility is that you didn't have enough lead core for  the 
     set  the way it is.   The cure is to obtain a hardened steel bushing to 
     slip over the tail of the internal punch, extending it forward.  Do NOT 
     try to machine or modify the external punch or die to cure  thward again.  
     Did  any  lead come out the bleed holes in the side of the LSWC-1  die?  
     Or, did you feel a rather sudden increase in the resistance in the CS-1 
     die?   Back  off the ram,  eject the bullet,  and see if it  is  nicely 
     filled out.   See if it stays in the die,  or if it comes back out with 
     the punch. 
          Normally,  the  bullet will stay in the die even if it is somewhat 
     undersized  at this point.   Jacketed bullets often come out  with  the 
     external punch until enough pressure has been applied to expand them to 
     die  diameter.   When  you run the ram all the way back,  the  internal 
     punch comes up against the stop pin in the back of the press and pushes 
     the  bullet  out  by holding the internal punch  still  while  the  die 
     continues to move back with the ram.
          If the bullet is poorly formed, adjust the punch holder a fraction 
     of  a turn forward and try another core.   When you get it  right,  the 
     bullet  will  be properly formed and will measure the correct  diameter 
     from one end to the other.   The internal punch will have formed a deep 
     hollow  cavity  and the external punch will have transferred  its  nose 
     shape to the end of the bullet (in this case, a wadcutter nose).  
          If you have voids or unfilled edges on the bullet,  then you might 
     have a bit too much lube.  Wipe the lube off the external punch and try 
     another core without so much lube applied.   If that still doesn't come 
     out well,  adjust the punch holder slightly forward again.   But do NOT 
     keep adjusting the holder forward until you feel an extreme resistance.  
     One hand force is all you should ever need to apply.   If it feels like 
     you  should be using both hands,  something is wrong and you may be  on 
     the verge of breaking your die.  Stop and find out what is wrong.
          If the lead is too hard, this can be a serious problem.  Hard lead 
     does not flow or swage very well.   Soft lead swages very nicely.   The 
     pressure  required  to swage even a 3% antimonial alloy of lead  is  at 
     least double that of pure lead.   When you first start,  it may be hard 
     to judge how much pressure is enough.   The press is so powerful that a 
     very  light pressure on the handle produces a very great force  on  the 
     ram.   With  calibers in the .375-inch range and up,  you can break the 
     die  without  seeming  to apply undue effort,  so be  careful  to  stop 
     applying  force  or adjusting the punch holder forward as soon  as  you 
     reach the point where the bullet begins to form nicely.
          With a little pressure on the ram,  while swaging a bullet,  cinch 
     the hex bushing on the punch holder up snugly by hand.   This keeps the 
     punch aligned with the die,  so you don't have to do more than check it 
     from time to time.  Swage all your bullets with the punch holder set at 
     this position and the locking nut secured against the face of the press 
     head.  If you want to repeat this setting soon, lock down the set screw 
     on  the  punch holder.   Having several punch holders gives  you  quick 
     repeatability by leaving each punch in its own holder with pre-set lock 
     nut.  
          Now,  back to the reloading press.   The adjustment is exactly the 
     same,  except that you put the external punch in the slotted  ram,  and 
     adjust the die downward toward the punch,  while the punch is raised to 
     the topmost position of the ram.  It is important that you realize that 
     the  furthest extension of the ram is what controls consistent results.  
     If  you swage by feel entirely,  you may get widely  changing  weights.  
     Use  feel  to  judge whether or not a core is a great deal  lighter  or 
     heavier as you approach the top of the stroke.  
          Do  NOT  continue  to  press if you  meet  resistance  before  you 
     normally did on similar bullets during a run.   You will probably swage 
     a  heavier than usual bullet,  at best,  and at worst you may break the 
     die or mash the punch flat.   Set aside any cores that either developed 
     less  or more resistance to swaging than your usual bullet  during  any 
     given run.   Those are light or heavy cores.  They can be used for some 
     other weight, or melted down for a cast core.  
          We have covered a lot of elementary material here.   Refer to this 
     basic  bullet  and adjustment procedure for just about any  other  die.  
     The concept is the same:   approach the right adjustment from the loose 
     side,  where you have no pressure,  and increase it in small bits until 
     you  achieve  the desired result without exceeding moderate efforts  on 
     the handle.   It is a lot like experimenting with a new powder  charge:  
     build  the  load in small increments and watch for signs  of  pressure.  
     Here we are dealing with pressures that could destroy a rifle when they 
     are normal.   But they don't contain much total energy, so no parts fly 
     around  when a die breaks.   You hear a crack,  and you see one in  the 
     die.   That's about it.   With just reasonable care,  you'll never know 
     what a broken die sounds like.
          For  the  rest  of the bullet styles,  I will give  only  a  brief 
     description  of  the process,  detailing only the  unusual  aspects  of 
     making  the  bullet.   Please  remember the basic  rules:   swage  dies 
     increase diameter,  never reduce it.   Lubricant is required for  every 
     swaging  operation  (I won't keep mentioning it).   The punch must  fit 
     easily into the die, or it is the wrong one to use.  The force you feel 
     should  on  the handle should be mild,  never  requiring  double-handed 
     effort.   And while you can experiment,  do get a good understanding of 
     the basic operations for each die first.

          
                      HOLLOW POINT JACKETED HANDGUN BULLETS
     
          The hollow point is made during core seating.   Instead of using a 
     flat  faced punch to push the core into the jacket (in the core seating 
     die), you need to order the optional hollow point external punch.  This 
     punch has a conical probe on the face, which presses down into the lead 
     core  and forms a cavity at the same time that the lead is  pressurized 
     to move the jacket walls out and meet the die.
          A more uniform hollow point can be made if you first seat the lead 
     core  with  a flat punch,  then change to a hollow point  to  form  the 
     cavity.   This  step is for the perfectionist,  and may be  unnecessary 
     even then, depending on how deep the lead seats in the jacket and other 
     factors.
          In  any press,  this operation takes place as a result of using  a 
     hollow  point  punch  during the  core  seating  operation.   The  dies 
     themselves  are  the same,  regardless of whether you select  a  hollow 
     point or a soft point,  an open tip or a full jacket.  In a single core 
     seating die,  for making semi-wadcutter or wadcutter hollow points, you 
     can use the HP punch either before or after using another nose punch.  
          The  key  to  successful use of more than one punch  on  the  same 
     bullet  is  to realize that you do not have to press the punch all  the 
     way into the die.   Using a portion of the possible extension into  the 
     die and lead gives you almost total control of how deep and how big the 
     cavity  will be.   Whether you swage the HP first or use another punch, 
     such as a Keith nose punch,  first,  determines the cavity size and the 
     shape of the bullet.  
          A Keith punch and a hollow point punch can produce a wide range of 
     shapes,  including  a simulated round nose!   Experiment  with  various 
     insertion  depths.   In other words,  adjust one punch to go in further 
     and the other one to stop short of going in all the way.  Using both to 
     the  full extent possible only means that the bullet will be  primarily 
     formed by the last punch you press against the lead.   Whichever  punch 
     is pushed in hardest and further against the lead is the one that gives 
     the bullet most of its final shape.
          If you use a point forming die,  then of course you do not need to 
     experiment  with  semi-wadcutter nose punches.   The point forming  die 
     will  shape  up the ogive for you.   It will also  smoothly  close  the 
     hollow point to a more long and narrow shape, depending on how far into 
     the  point forming die you wish to push the bullet.   If you adjust the 
     press  and die so that you just barely push the bullet into  the  point 
     forming die, then you will have a very large hollow point.
          On the other hand,  if you push the bullet into the die as far and 
     as  hard  as you reasonably can,  you may well close the  hollow  point 
     completely.   This  can  produce an unusual result:   you can fill  the 
     hollow point cavity with a fluid or powder,  or a steel ball,  and then 
     cause  the end of the bullet to roll over this material and trap it  in 
     the cavity.   If the hollow point is much deeper than the ogive length, 
     a good portion of the cavity will remain at its original size while the 
     part toward the end of the bullet becomes more narrow.  
          This  means  you can make   hollow  point 
     completely.   This  can  produce an unusual result:   you can fill  the 
     hollow point cavity with a fluid or powder,  or a steel ball,  and then 
     cause  the end of the bullet to roll over this material and trap it  in 
     the cavity.   If the hollow point is much deeper than the ogive length, 
     a good portion of the cavity will remain at its original size while the 
     part toward the end of the bullet becomes more narrow.  
          This  means  you can make th 
     your more experimental designs.


                            BOATTAIL HANDGUN BULLETS   

          With a long shanked rifle-style bullet,  a special set of dies  is 
     required to manufacture a good boattail base.   At Corbin,  we make the 
     rebated  boattail  base,  popularized by the fine Lapua match  bullets.  
     But in a short,  stubby handgun bullet, it is easy to make a rebated or 
     a regular boattail using only a special punch (and not really all  that 
     special).
          Usually,  it's necessary to seat a lead core in the jacket using a 
     core  seating  die.   The  die is sealed on both ends  by  punches,  so 
     pressure can be built up inside the jacket to expand it like a balloon.  
     If  you turn the jacket over so the closed end is toward to top of  the 
     cavity  in  a point forming die,  then you can apply a fair  amount  of 
     pressure  inside the jacket with an external punch that fits down  into 
     the jacket.  The fit must be close, to keep the pressure from extruding 
     lead around the punch. But it is practical and works well.
          If  you  put  a core inside a handgun jacket,  then  use  a  punch 
     (ordered as an open tip core seating external punch) that fits into the 
     jacket to press against the core,  and put the assembly into your point 
     forming  die (base first),  you will produce a full jacket,  open  base 
     handgun bullet.  
          Should you have a truncated conical point forming die, rather than 
     a  round nose shape,  you will actually have what could  be  considered 
     either  a  nose or a boattail base!   To use it as a  base,  eject  the 
     bullet and change the external punch to a regular Keith nose punch that 
     fits  into  the  point  forming  die  by  hand.    (Remember,  in  your 
     experiments,  to  try each punch by hand first -- you don't want to fit 
     the punch to the die permanently!)
          Now,  with  the Keith nose punch installed in  die, rather than 
     a  round nose shape,  you will actually have what could  be  considered 
     either  a  nose or a boattail base!   To use it as a  base,  eject  the 
     bullet and change the external punch to a regular Keith nose punch that 
     fits  into  the  point  forming  die  by  hand.    (Remember,  in  your 
     experiments,  to  try each punch by hand first -- you don't want to fit 
     the punch to the die permanently!)
          Now,  with  the Keith nose punch installed in  point 
     (depending on how much lead you moved forward) TC nose,  a short shank, 
     and a rebated boattail base -- what a combination!   But give it a try.  
     You  can load it either direction.   I like to make these bullets  with 
     about  one  caliber  length of straight shank.   That usually  means  a 
     bullet with one of the longer jackets and toward the heavier end of the 
     weight  scale.   But  as  you can see from some of  the  tests  in  the 
     magazines   (one  of  which  is  reproduced  in  the  Corbin  Technical 
     Bulletins)  this  design can result in a 40% improvement  in  ballistic 
     coefficient and as good or better accuracy than conventional shapes!


                      SHOTGUN SLUGS WITH ATTACHED BASE WADS

          This  is  a  task for the  Hydro-press  system.   There  are  many 
     possible kinds of highly accurate slugs you can produce.  One is a slug 
     that  fits  inside the Winchester Red Wad,  and is thus  made  slightly 
     under  normal diameter to use the sabot effect of the standard  plastic 
     wad.   Another is the slug with wad attached to it.   This operation is 
     quite  simple.    A die set can even be produced to stamp out excellent 
     wads from various materials.  The details of operating the press are in 
     the book "Power Swaging".  
          I will just outline the process here.  The wad is made with a hole 
     through the center.   The hole is precisely centered as a result of the 
     die-forming  process.   The pre-swaged core and wad are put into a  die 

     with a nose cavity punch in the die,  and a base punch having a  slight 
     depression in the face,  like a smooth rivet head, follows the wad into 
     the swage die. A core seating or lead semi-wadcutter type die is used.
          As  pressure  is applied,  the lead flows up into the  nose  punch 
     cavity and forms any desired shape of nose.  Usually a conical flat tip 
     or a domed shape is made.   The lead also presses hard against the wad, 
     and  finds a pressure escape through the hole in the middle of the wad.  
     The lead flows through this hole,  and fills the cavity in the head  of 
     the punch that is backing up the wad.
          The wad is compressed under tons of pressure,  and so is the lead.  
     The  lead  extrusion through the hole in the wad forms a perfect  rivet 
     head on the other side of the hole.   When the bullet is  ejected,  you 
     have a lead slug firmly attached to the wad,  which now tries to spring 
     back to original size and keeps pressure on the base of the slug.
          Another  unique twist on this is to form a hollow base cavity with 
     a  post in the middle,  and with a hole in the middle of the post  that 
     will take the threads of a number six or eight metal screw.   It  might 
     seem very complex, but in reality all you have to do is imagine a punch 
     having  a mirror image of this cavity and post and hole formed into the 
     steel  face.   The reamer and polishing work required  is,  of  course, 
     somewhat expensive.  But it is well within reason for anyone who wishes 
     to manufacture a unique kind of slug.
          The idea is to shift the weight forward, maintain a longer bearing 
     surface  for alignment,  without having a massive weight,  and  provide 
     solid  support in the middle of the cavity so that the wad is not blown 
     into the cavity upon firing.   The screw attaches the wad to the  post.  
     It  might even be possible to fill the cavity with cornstarch and  then 
     swage  the wad to the slug,  but this has not yet been tried (maybe  by 
     the time this book has been out a year, it will be common).


                            PRECISION AIRGUN PELLETS

          Airgun  pellets are really no different from any other hollow base 
     semi-wadcutter bullet.  The dies have smaller punches and cavities than 
     most calibers.   Corbin makes .20, .14, .17, .224, or anything else you 
     like.  Diameter is critical.  Rather than the waisted design, these are 
     like a precision handgun bullet in minature. 
          They  have  a deep hollow cavity and thin skirts to  give  a  good 
     seal,  and they usually are made slightly smaller than a waisted pellet 
     so that the bore friction is reduced.   Swaged with a Dip Lube coating, 
     they  provide  good  lubrication  that is consistent  and  dry  in  all 
     temperatures.  The  nose  can  be conical or of the  Keith  style  with 
     equally  good results.   Such pellets in .2235" diameter make excellent 
     indoor practice bullets or mouse shooters in a conventional  centerfire 
     rifle used with a primer only.
          There  are complex ways to swage the waisted pellet,  but it isn't 
     usually  worth  the  effort compared to the results you  get  with  the 
     simple  single die method in either reloading press or Mity  Mite.   In 
     the reloading press,  only a .22 pellet is offered,  unless a run of at 
     least 100 dies is ordered (for resale).   But in the Mity Mite, you can 
     have anything you wish.


                            PLASTIC TIP RIFLE BULLETS
          
          Several  of the common plastic rod materials swage nicely to  form 
     lead  tip  replacements  in any  conventional  rifle  caliber.   Nylon, 
     polyethylene,  and other "soft" plastics that can be shaped by pressure 
     and retain that shape after pressure is removed make nice tips for your 
     hunting  bullets.   The  idea of the plastic tip predates  the  current 

     Nosler design by many years,  as seen in the early Norma nylon tips and 
     in  home-swaged  bullets using Nylon tubeless tire patches  (plugs)  in 
     stark black or white.
          The  FBI  once  contacted Corbin about making  Nylon  bullets  for 
     handgun  use  in  an indoor training facility.   The  idea  came  about 
     because  a  conventional Speer Nylon bullet had a sharp  shoulder  that 
     prevented the use of speed loaders.   When these bullets were re-swaged 
     in  a  simple  Corbin point forming die,  right  off  the  shelf,  they 
     acquired  a  more bullet-like profile and worked  in  the  conventional 
     speed loader.  
          A side benefit turned out to be that the agency could reload these 
     plastic  bullets seemingly without end,  after reswaging to remove  the 
     rifling and other impact marks.   I have one left in my collection that 
     was shot and reloaded and reswaged over 25 times, and it could still go 
     on without any apparent change.  
          Nylon rod can be obtained from most plastic suppliers.   It can be 
     cut to short lengths in a lathe or bandsaw.   The bullet is made in the 
     same  way as any open tip design,  by seating the lead down inside  the 
     jacket with a punch which fits into the jacket.   But before the  point 
     is formed,  the short piece of Nylon is placed inside the jacket.   The 
     diameter should be close to the jacket ID.  
          When  the point is formed the jacket and Nylon plug smoothly swage 
     into one profile.  The ogive locks the plastic in place (it crimps into 
     the material since the plug is larger inside than at the external tip).


                               FRAGMENTING BULLETS 

          Bullet  swagers  have been making their  own  fragmenting  defense 
     bullets  for years.   It is extremely simple.   Just dipper a charge of 
     number twelve lead shot into a jacket,  and seat the shot like it was a 
     solid core.   Press a bit of soft wax or a thin cardboard wad over  the 
     shot.   A  wad can be made in a regular swage die of smaller caliber by 
     putting  a  bit  of cardboard between the punch  and  die  and  pushing 
     through it.  
          Then,  form  the  ogive in a point forming die.   To increase  the 
     fragmenting  effect,  first  roll or tumble a quantity of shot  with  a 
     little  dab  of  Corbin Swage Lube.   This lube  keeps  the  shot  from 
     sticking  together  -- it may appear solid when you swage  it,  but  on 
     impact it break up nicely.  


                               HYPERSPEED BULLETS

          What  would you call a bullet that goes 2000 fps from a snubby .38 
     Special?  Impossible?  No, you can develop an ultra-light bullet in any 
     caliber  and  then find a fast-burning charge of the  right  powder  to 
     propel it at unbelievable speed.  Some of the effects are dazzling.
          Here  is how you retain enough bearing for a semblence of accuracy 
     and still keep the bullet weight down:  use cornstarch as a core!  
          The  secret  is  out...but  only bullet  swagers  know  about  it.  
     Cornstarch  swages under high pressure to form a sort of  hard  plastic 
     material that is much lighter than any conventional jacket filling, yet 
     expands the jacket as well as lead under swaging pressures.  
          Because of the low density of the material,  even when swaged to a 
     plastic  state,  you  can make a regular length bullet that  seats  and 
     balances as it should, yet has very low inertia.  The sectional density 
     is  very  low,  which means it doesn't penetrate very far and  it  also 
     doesn't  fly  very  far before losing its speed.   Those  can  be  good 
     features in a defense bullet used in populated areas.  
          When  you top the cornstarch with a small amount of lead,  you can 
     produce  a method of delivering a devastating high velocity  projectile 
     without  nearly  as much danger to people behind the  intended  target.  
     Make the filling out of swaged lead shot of small diameter, rolled with 
     Corbin  Swage Lube,  and you have just produced a superior  fragmenting 
     bullet  with ultra-high velocity.   You need nothing special to do  all 
     this,  except the right punch to fit into the jacket at the depth where 
     you want to swage the material.


                    PARTITION STYLE HANDGUN OR RIFLE BULLETS 

          Putting  a partition across the middle of a bullet is as  easy  as 
     telescoping  two  different  diameters of  jackets  together.   This  is 
     covered  in some detail in the book "Rediscover  Swaging".   Basically, 
     the inside jacket is of smaller caliber and is about half the length of 
     the  outside jacket.   When jackets do not exist ready-made to fit this 
     way,  a  Corbin JRD-1 draw die can turn some available jacket into  the 
     right size.  
          In  the Hydro-press system,  it is possible to make partitions  by 
     folding  and  pressure-welding the actual jacket wall material  into  a 
     band across the jacket at any desired point.  Copper tubing is normally 
     selected,  so  you have both the benefit of the soft copper tubing  and 
     the partition effect.   If you want to go one further,  add Corbin Core 
     Bond and a little heat, and you have a bonded core, partitioned, copper 
     tube  bullet  -- something none of the famous firms who are  known  for 
     making one of these features apiece have managed to combine.


               
                 PENETRATOR CORE OR LIQUID FILLED CAVITY BULLETS

          I  group these two styles because they are made the same  way.   A 
     set of special punches is made to seat a very light core in the  bottom 
     of the jacket.   One punch seats the core,  and the other puts a center 
     in  the  core.   Then  a long hollow point punch slips  down  into  the 
     jacket,  finds the center, and starts extruding lead up along the punch 
     sides.  Plenty of good lube is required on the punch. 
          The  punch  is withdrawn,  leaving a long,  deep cavity  precisely 
     centered  in a lead sheath inside the jacket.   A carbide,  uranium  or 
     other heavy metal core can be placed in this cavity.   It works best if 
     the  insert  material is slightly larger than the cavity for  a  gentle 
     press fit.  A punch can also be made to do this.  
          Corbin  does  not provide these heavy metal  cores.  Most  of  the 
     people  who  do  this work are able to obtain their  own  from  defense 
     agencies  or  suppliers.   Such  bullets are usually made  for  special 
     projects  within the military and are discussed here only to  show  the 
     possibilities.   Liquid  filling  for  the  same cavity  can  easiy  be 
     substituted.   A  lead ball is placed in the end of the cavity to  help 
     seal  it,  and then the bullet is put into a point forming die and  the 
     ogive  shape extrudes lead over the widest part of the ball  and  locks 
     the assembly together.



                     ULTRA PRECISION BENCHREST RIFLE BULLETS

          The quality of the bullets you can make in a typical Corbin  swage 
     die  for the Mity Mite or Hydro-press will equal or exceed that of  any 
     bullet  made  today.   You do not need to pay thousands of dollars  for 
     special "benchrest" quality.  The best quality that money can buy comes 
     far less dear than some folks imagine possible.  
          On  the  other  hand,  I do not recommend the  die  sets  that  we 
     manufacture  for  use  in a reloading press as benchrest  bullet  dies.  
     They  are  good dies,  and have often been used to  make  match-winning 
     bullets.   But the system does not lend itself to what I would call the 
     ultimate control over the bullet weight and style.  
          Reloading  press  dies are made to work in a press  that  was  not 
     designed specifically for bullet swaging.   Corbin Mity Mite and Hydro-
     press  dies  were  designed along with the  press,  without  having  to 
     consider factors necessary for reloading.  The Hydro-press and the Mega 
     Mite  press both handle reloading as a side benefit,  not as a  primary 
     goal that might restrict optimum design for bullet making.
          Alignment,  sensitivity of control ("feel",  if you like), balance 
     of  the  forces that tend to produce ram torque,  amount of press  head 
     movement under stress,  maximum leverage potential,  and other  factors 
     from  how ejection is handled to where the top of the ram comes to rest 
     in relation to the press head,  are all optimized for bullet making the 
     the special swaging presses.   These things simply are not there,  in a 
     reloading press.   It doesn't matter how big or strong or expensive the 
     press  is:   if  it was made primarily for reloading  ammo,  it  wasn't 
     optimized for making bullets.  
          I  have  had  a few perverse clients shoot  winning  matches  with 
     bullets  made  in our standard reloading press dies,  and they  enjoyed 
     telling their fellow shooters (who had spent thousands of  dollars,  in 
     some  cases,  for  the  "right" benchrest equipment) how  little  their 
     equipment  cost (usually under $250 for everything -- dies  alone  cost 
     about $160).   But while it can be done,  I certainly feel that you are 
     better  advised  to  use equipment made with all the  benefits  of  the 
     special swaging press in mind.
          There  are two secrets to making benchrest  bullets.   First,  the 
     jackets  themselves  must be very concentric and should be  weighed  so 
     that  you  can cull out any over or under a nominal  value.   Different 
     weight by itself has little effect on the bullet path,  within a factor 
     of from 1 to 2 percent of the total bullet weight.  (Calculate the drop 
     difference and you will see that one-hole groups at 100 yards are still 
     possible  with  bullets that weigh plus or minus half a grain in  a  55 
     grain .224 caliber,  or bullets that have 1.5 grain variation in a  150 
     grain .308 caliber).
          The  problem  with weight variation is that it can be caused by  a 
     thicker  base,  thicker walls,  or even a difference in wall  thickness 
     from one side to the other.   If it is merely a bit longer  jacket,  it 
     won't  have  much  effect.   And the heavier  or  lighter  jackets,  by 
     themselves,  do  not  cause bad groups.   It is a mixture of  different 
     jackets that can throw off the group size.   A heavier or lighter  wall 
     is  not  bad,  it  just  can't be used with something  different  in  a 
     benchrest match.  
          The  next  secret  is  consistency in the  method  of  making  the 
     bullets.   The  little  rituals and weird theories about what  makes  a 
     bullet shoot are a lot of fun for the people who believe in  them,  and 
     even  if  they make little sense to rational people,  I see no harm  in 
     following the latest fad in regard to many of the rituals.   But for  a 
     person  who is mainly interested in fact,  and wants to see what really 
     does  and does not make a difference,  it doesn't take too long to  see 
     that a machine rest in an indoor tunnel easily proves that  consistency 
     makes more difference than any specific method.
          In  other words,  whatever you do in regard to how you apply  your 
     lubricant,  whether  or  not  you  "rest" the  cores  overnight  before 
     swaging,  or  whether  or not you spin and weigh each  bullet  in  some 
     questionable  fixture or tool made to point up some mysterious accuracy 
     factor,  the real effects will come from doing things the same way each 
     time,  so  all the bullets do indeed come out looking and shooting  the 
     same way.
          Some of these rituals help produce a more consistent bullet, often 
     for reasons not entirely related to the goal that the shooter feels  he 
     is  trying  to  reach by that ritual.   Benchrest  shooting  originally 
     brought  a  great many serious benefits and pointed out errors  in  how 
     bullets were being made during the 1940's and 50's.   To some extent, a 
     level  of mystique and fraternalism has moved into the place that  used 
     to  be  held by serious investigation,  with the quirks of  the  latest 
     winner being slavishly repeated by next year's would-be winners.
          But this is true in all competitive sports.   Winning matches does 
     not necessarily make the shooter an expert on every aspect of the tools 
     and  equipment  used  to win.   Sometimes a good  deal  of  winning  is 
     attitude  and  practice,  especially when equipment differences  become 
     very slight at the top levels.  All of this is merely to point out that 
     making benchrest quality bullets is not necessarily the exclusive realm 
     of  a white-bearded wizzard who knows cosmic secrets  which  you,  mere 
     mortal, can hardly be expected to understand.
          As  a matter of fact,  nearly anyone with a reasonably good set of 
     dies  and  careful attention to what he is doing can turn  out  bullets 
     capable of one-hole groups.   Then it is up to the rest of the  system, 
     including the handload and the gun, the shooter and the fates that blow 
     the winds, to let that one-hole group appear on any given day.
          This  information  doesn't play well with those who would like  to 
     have you believe there are dark secrets beyond your reach,  which  only 
     certain  people  (who happen to have something they might -- hold  your 
     breath!  -- be persuaded to sell you) have in their posession.  But you 
     can prove it to yourself, and to anyone else who doesn't have too big a 
     stake in keeping it quiet!   There is no fundamental difference in  the 
     potential  quality  of a .458 bullet,  a .600 Nitro bullet,  or a  .224 
     benchrest bullet made by the process of swaging outlined here.
          All  swaged  bullets  made  by  hand  on  good  equipment,   using 
     consistent components, can be made carefully and well.  They can all be 
     benchrest  bullets  of their caliber.   A heavy  recoiling  .458  isn't 
     likely  to  produce as tight a group as a conventional .224 short  case 
     benchrest  cartridge  using  specially selected  primers,  but  if  you 
     compare  similar kinds of guns and loads,  you will soon see that  your 
     own  home-built  bullets  stack up in the same way  as  benchrest  .224 
     bullets stack up against the average factory offering.
          You have nothing to fear in the accuracy department,  in regard to 
     the  dies  or the bullets you can make,  given the  material  and  care 
     necessary.   Do not, however, make the error of assuming that a perfect 
     bullet  will turn an average rifle into a benchrest gun.   It will not.  
     The errors caused by poor bedding,  a light barrel,  gas cutting in the 
     throat or leade,  improper powder charges,  or even a less than  steady 
     shooter,  will  completely  overwhelm the slight errors produced  by  a 
     bullet of average quality.   No difference between a perfect bullet and 
     an  average one could be told with most of the guns that are capable of 
     being  carried afield,  if the load is right and the shooter  does  his 
     part.
          A  good discussion of accuracy and bullet design can be found  the 
     the  textbook,  "Rediscover  Swaging".   The techniques  for  obtaining 
     greater  than  usual  core weight consistency and proper  core  seating 
     are  also  discussed in this book.   Multiple passes at  core  swaging, 
     holding the pressure for a consistent length of time,  application of a 
     precision film of lube rather than the usual transfer of lube with  the 
     fingers, and other factors that increase the consistency of results are 
     discussed.  

```
{% endraw %}

## CHAPT-8.TXT

{% raw %}
```
.he CHAPTER 8 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                            BOOKS FOR BULLET SWAGERS

          Learn about bullet swaging, the fast accurate process that gives 
     you  total  control over bullet design and  production!   The  combined 
     knowledge of generations of master die-makers has been collected in the 
     Corbin  Swaging Library -- seven volumes of  easy-to-read,  fact-filled 
     information.   More  than 840 pages of authorative work,  with  charts, 
     photos,  data, drawings, and technical reports, in a special package to 
     save you money!

        USE YOUR VISA/MASTER-CHARGE AND ORDER BY TELEPHONE:  503-826-5211

     The Corbin Swaging Library includes these books:
                    
                         The BULLET SWAGE MANUAL, T.Smith
                         The CORBIN TECHNICAL BULLETINS, Vol. I
                         The CORBIN TECHNICAL BULLETINS, Vol. II
                         The CORBIN TECHNICAL BULLETINS, Vol. III
                         POWER SWAGING, D. Corbin
                         RE-DISCOVER SWAGING, D. Corbin
                         The CORBIN HANDBOOK & CATALOG of BULLET SWAGING

                         Order catalog number BP-7
     ----------------------------------------------------------------------- 

     The BULLET SWAGE MANUAL, T. Smith, 1976, 45 pgs.
          
          This book is one of the earliest works on bullet swaging,  written 
     by  a  pioneer in the field.   Many of the illustrations are  of  early 
     Corbin swaging tools.   The book is intended as a primer for beginners, 
     but belongs in any complete library of swaging as a historical work.

                         Catalog number BSM
     -----------------------------------------------------------------------

     The CORBIN TECHNICAL BULLETINS, Volume I   1977, 66 pgs.

          The  first  collection  of  Corbin  technical  papers,  this  book 
     contains  a  detailed section of definitions,  specific  questions  and 
     answers  about  swaging  technique,  comparisons  of  cost,  speed  and 
     accuracy between casting and swaging,  and answers to the most commonly 
     asked  questions about bullet swaging.   Rimfire jacket-making,  hollow 
     and  cup  points,  designs  for deep  penetration,  and  other  similar 
     subjects are covered.

                         Catalog number TB-1
     -----------------------------------------------------------------------

     The CORBIN TECHNICAL BULLETINS, Volume II   1980, 102 pgs.

          This  book  gives  a  detailed chapter by  chapter  discussion  of 
     specific  calibers  and how to make bullets  for  them.   Included  are 
     obsolete,  foreign,  current centerfire rifle and handgun calibers,  in 
     fifteen  chapters.   In addition,  there is an experimental .375 design 
     with loading data,  chamber dimensions,  and test results.  A wealth of 
     information about the history of swaging is included.

                         Catalog number TB-2
     -----------------------------------------------------------------------

     The CORBIN TECHNICAL BULLETINS, Volume III   1983, 106 pgs.

          Experimental work with custom bullets, the rise of the survivalist 
     movements,  and concerns about the future supplies of bullets in the US 
     and  abroad  brought  a flood of technical  articles  addressing  these 
     subjects.   Original  papers  and translations from trade journals  are 
     included.  Bonding and heat treatment of jackets, manufacture of copper 
     tubing bullets, and hunting bullets are covered in detail.

                         Catalog number TB-3  
     -----------------------------------------------------------------------

     POWER SWAGING, D. Corbin   1984, 195 pgs.

          Also known as Corbin Technical Bulletins,  Volume IV,  this is the 
     bible of commercial bullet making. It is filled with data on pressures, 
     forces,  and die strength, calculations, charts, computer programs, and 
     photos.   Hundreds  of dollars worth of dies were destroyed to test the 
     limits of the formulae, and photos of these are included as well.  
          The  book  serves  as an operator's  guide  for  the  Hydro-press, 
     although  it  also covers several earlier models of air  and  hydraulic 
     power  presses  that  are no longer manufactured.   Two  very  valuable 
     chapters deal with organization of a custom bullet business,  and  with 
     the  numbers  involved in  production  volume.   Marketing,  promotion, 
     feasibility  studies,  and  selection of a product line are written  so 
     they can be understood by a beginner, yet interesting enough to attract 
     experienced engineers.  
     
                         Catalog number TB-4
     -----------------------------------------------------------------------

     RE-DISCOVER SWAGING, D. Corbin   1983, 244 pgs.

          This  is the standard textbook of swaging.   The washable  morroco 
     cover  is gold-embossed.   It is used by law enforcement  agencies  and 
     schools around the world, in public and private libraries from Brussels 
     to Perth, read by the Royal Canadian Mounted Police and by the students 
     at  gunsmithing schools.   You'll find detailed,  accurate  information 
     arranged in twenty-two chapters,  covering everything from lubricant to 
     lead,  pressure to press design, history of swaging (including original 
     letters  from  Biehler and Astles,  Fred  Huntington,  and  Capt.  G.L. 
     Wotkyns  at  critical points during the 1940 to 1960 period)  and  just 
     about anything else you might care to know about swaging.   If you only 
     want one book, make it this one.
      
                         Catalog number RDS 
     -----------------------------------------------------------------------


     The WORLD DIRECTORY of CUSTOM BULLET MAKERS  

          Data  has  been collected from all over the world for a decade  on 
     bullet  markets,  and  the people who are active in the  custom  bullet 
     field.   If you are looking for a certain caliber -- modern,  obsolete, 
     wildcat,  foreign, or experimental -- this is the sourcebook for people 
     who  can make it!   Articles of interest to  experimenters,  purchasing 
     agents, engineers, and ballisticians as well as those who might wish to 
     enter the custom bullet field as suppliers are included.
          Editors,  writers,  and publishers of firearms journals around the 
     world have a copy of this book for reference.  Buyers in government and 
     industry, defense agencies and law enforcement operations, game control 
     commissions,  ballistic labs, and applied science libraries can turn to 
     the sources listed to find out who makes what.  
          Corbin  customers who are selling bullets commercially are invited 
     to  write for a free listing in the book's next  edition.   Advertising 
     space is periodically available  to qualified firms.   Agencies dealing 
     with firearms-related suppliers should check out the tremendous  market 
     exposure this book gives.

                         Catalog Number WD-1 
     -----------------------------------------------------------------------

     The CORBIN HANDBOOK and CATALOG of BULLET SWAGING, No. 7

          You are reading a copy now!   If you would like additional  copies 
     for friends,  order directly from Corbin.  This is the seventh edition: 
     it  is  not the seventh book of the collection,  or the  seventh  year, 
     since Corbin has been in business much longer than that.   We publish a 
     new  edition  whenever the information becomes outmoded  and  continued 
     editions of the same book begin to lose their relevance to newer ideas.

                         Catalog number HB-7
     -----------------------------------------------------------------------

     OTHER LITERATURE...


     The BASICS of BULLET SWAGING

          This  is a color brochure,  6-pages,  telling what swaging is  and 

     what you can do with it.   Single copies are available postpaid for  $1 
     (to  cover postage and handling).   Write for quantity prices to  clubs 
     and schools.



     The Corbin HYDRO-PRESS brochure

          A color folder describing the powerful CHP-1 Hydro-press.   Single 
     copies  are  $1 (for postage and handling) -- no additional  charge  if 
     ordered with other literature.   Write for quantity prices to clubs and 
     schools.



     The Corbin IMMEDIATE DELIVERY LIST
     
          This  is a list of dies available for immediate  delivery.   Since 
     Corbin dies are all hand-made products, individually diamond lapped and 
     fitted,  there  can be a considerable backlog on certain calibers  from 
     time  to time.   The Immediate Delivery List tells what is on the shelf 
     right now.   It changes from month to month, and is not a guarentee but 
     only  a  temporary  listing.   If you  see  something  you  want,  call 
     immediately  and  use your VISA/MASTER-CHARGE card to have  it  shipped 
     right  away.   (Sorry - no holding for future payment!   Demand is just 
     too high to tie up products in this manner.)
          This  list  is  free  for the  asking,  when  ordered  with  other 
     literature  or  products.   Included with most shipments  is  also  our 
     current  price list,  any specials we may have on supplies or products, 
     announcements of new books or computer software, etc.

     -----------------------------------------------------------------------

     CORBIN COMPUTER SOFTWARE

          Now you can design bullets quickly,  easily, with Corbin's DC-1001 
     Bullet Design program.  All you need to know is the weight and style of 
     bullet you want to make -- the program asks these simple questions, and 
     then  calculates  the  ballistic  coefficient,   form  factor,  average 
     density, stable twist rate, core and jacket volumes, core weight, over-
     all length,  length of ogive and length of shank, and a number of other 
     parameters of importance to makers of commercial bullets.  
          If you don't know what to answer,  the program supplies a standard 
     default  value.   You  can  just  hit the  "enter"  key,  and  run  the 
     calculation  automatically with all default values if you wish,  to see 
     how it works.  You need absolutely NO math background, NO experience in 
     bullet design or ballistics.  Automatic tables appear on the screen for 
     each  question that requires some special knowledge,  and  the  program 
     checks  your input to see if it is reasonable.   If not,  it gives  you 
     another chance to input a value, or just hit return and let the program 
     supply a value.
          There is no way you can "mess up" this program.   And best of all, 
     when  you  have designed the bullet (which takes perhaps two  seconds), 
     those values can be printed out,  and/or automatically used in a second 
     program that is part of the first one:   kinetic parameters.   You  can 
     "fire"  the  bullet  at any velocity within reason,  see what  kind  of 
     energy density,  muzzle energy,  momentum,  and other values the bullet 
     would  have.   And,  you can change one or more parameters and  try  it 
     again to see the effect, all within seconds.  The program keeps all the 
     values  you put in last,  and uses them until you change them.   If you 
     turn  off  the program,  it resets to standard default  values  so  you 
     can't "get lost" or forget important standard values.
          The  DC-1001 program is currently available on 5-1/4" floppy  disk 
     for  IBM-PC/XT  or  /AT computers.  The  program  is  completely  self-
     contained  in executable machine code for the 8088 processor,  and runs 
     at either 4.77 mhz or at accelerated clock rates.   Either color or B&W 
     monitors will work.   All display is in the text mode.  The disk is NOT 
     copy  protected and can be loaded onto your hard disk drive.              
          Don't confuse DC-1001 with ordinary external ballistics  programs:  
     it  is  not  merely  an electronic table  of  values,  but  a  powerful 
     calculus-based  tool  for design of bullets.   It is not the same as  a 
     program  that  gives  you drop and remaining  energy  for  an  existing 
     bullet,  but  a way to create new bullets of your own design.   You can 
     input various densities of core and jacket material,  and find out what 
     effect aluminum,  tungsten,  brass, or plastic might have on the bullet 
     paramters.   You  can even select the target material density and  find 
     out what spin rate would stabilize the bullet in space,  in air,  under 
     water,  or in any other media.   DC-1001 is a one-of-a-kind program for 
     the bullet maker. (To run the program, simply type "Bullets").
               
                         Catalog Number DC-1001
     -----------------------------------------------------------------------
```
{% endraw %}

## CHAPT-9.TXT

{% raw %}
```
.he CHAPTER 9 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                          KITS for your RELOADING PRESS 

     The  easiest  way to get started is to purchase a  complete  kit,  with 
     everything  you  need  to  start making your  own  private  "brand"  of 
     bullets!   Here  are  several kits that you can put together  yourself.  
     Just  specify the caliber,  and order however many bullet  jackets  and 
     other  supplies  you may want.   I've made suggestions  for  reasonable 
     amounts of supplies with each kit...
     -----------------------------------------------------------------------

                                ECONOMY .224 KIT 

          Order these items to make up your own minimal cost kit, for making 
     excellent quality .224 caliber bullets (.221,  .222,  5.56mm,  and .220 
     Swift  as  well as every other centerfire .22 made today uses  a  .224" 
     bullet).  The equipment listed can produce jacketed bullets using fired 
     .22  long rifle or short cases in the weight range of 45 to 60  grains, 
     with  a 6-caliber spitzer ogive and a flat base.  (No boattails,  other 
     ogives, or special work in the reloading press series -- rather defeats 
     the whole reason for it,  since these extras would bring the cost  more 
     in  line with the Mity Mite system,  and then you would be far ahead to 
     get a Mity Mite!)

          BSD-224R  Core Seater and Point Former, 2-die set
          RFJM-22R  Rimfire Jacket Maker, 224 caliber
          CSL-2     Corbin Swage Lube, 2-ounce bottle
          CM-4      Corbin 4-cavity adjustable core mould (specify 224)  

          If  you  prefer  the speed of cutting lead wire  to  the  slightly   
     lower cost of cast cores, you might prefer this package instead:

          BSD-224R  Core Seater and Point Former, 2-die set
          RFJM-22R  Rimfire Jacket Maker, 224 caliber
          CSL-2     Corbin Swage Lube, 2-ounce bottle
          PCS-1     Corbin Precision Core Cutter                           
          LW-25     Lead Wire, 25-lb. spool (specify 224)
     ----------------------------------------------------------------------- 

                                 DELUXE .224 KIT

          A faster, easier system includes the power ejector unit and a hand 
     cannelure  tool,  plus  a supply of commercial drawn jackets  for  high 
     precision  benchrest work.   I personally like this because it gives  a 
     good  chance to compare your own free jackets with the best  commercial 
     ones made today.

          BSD-224R  Core Seater and Point Former, 2-die set
          RFJM-22R  Rimfire Jacket Maker, 224 caliber
          CSL-2     Corbin Swage Lube, 2-ounce bottle
          CM-4      Corbin 4-cavity adjustable core mould (specify 22 cal)
          LW-25     Lead wire, 25 lb.  (specify .185" -- 22 caliber)
          PCS-1     Corbin Precision Core Cutter
          J-22-705  Jackets, 224 caliber, .705-length, box of 500
          HCT-1     Corbin Hand Cannelure Tool
          PE-1      Corbin Power Ejector Unit
     -----------------------------------------------------------------------

                                ECONOMY .243 KIT

          If  you  want to make 6mm bullets (.243 -.244 caliber) from  fired 
     .22 cases, then this is the right kit for you:

          BSD-243R  Core Seater and Point Former, 2-die set
          RFJM-6MR  Rimfire Jacket Maker, 6mm from 22LR
          CSL-2     Corbin Swage Lube, 2-ounce bottle
          CM-4      Corbin 4-cavity adjustable core mould (specify 6mm)
                    * Note: the 6mm and .224 both use the same .185 core --
                      You can use the same core mould for both.
          
          Or,  you might consider replacing the CM-4 mould with a lead  wire 
     cutter and a spool of lead wire, for safer, faster bullet-making.

          If  you wish to use commercial jackets,  leave out the RFJM-6M and 
     instead, order the following jackets:

          J-6M-750  Jackets, 6mm, .750-inch length, box of 500
          J-6M-825  Jackets, 6mm, .825-inch length, box of 500

     -----------------------------------------------------------------------

                                 DELUXE 243 KIT

          You  can  put together a nice kit that would also be  my  personal 
     choice  for making .243 bullets in the reloading press by ordering  the 
     following items:

          BSD-243R  Core Seater and Point Former, 2-die set
          RFJM-6MR  Rimfire Jacket Maker, .22 LR to 6mm
          LW-25     Lead wire, 25 lb. spool.  (specify 6mm) 
          PCS-1     Corbin Precision Core Cutter
          CM-4      Corbin 4-cavity adjustable core mould (specify 6mm)
          CSL-2     Corbin Swage Lube, 2-ounce bottle
          PE-1      Corbin Power Ejector Unit
          HCT-1     Corbin Hand Cannelure Tool
          J-6M-750  Jackets, 6mm, .750-inch length, box of 500
          J-6M-825  Jackets, 6mm, .825-inch length, box of 500
     -----------------------------------------------------------------------

                                  .25 RIFLE KIT

          We've not advertised the .257 rifle dies for reloading press for a 
     number of deep, dark reasons:  primarily, we didn't want to get too far 
     behind.  But now, with our new die-works going full-blast, it's time to 
     let you know that we have .257 caliber dies developed for the reloading 
     press in a flat base,  6-caliber spitzer design similar to our .224 and-----------------------------------------------------------------

                                  .25 RIFLE KIT

          We've not advertised the .257 rifle dies for reloading press for a 
     number of deep, dark reasons:  primarily, we didn't want to get too far 
     behind.  But now, with our new die-works going full-blast, it's time to 
     let you know that we have .257 caliber dies developed for the reloading 
     press in a flat base,  6-caliber spitzer design similar to our .224 andkets in stock.
          Here  is a potential group of kits you could put together  to  use 
     either  6mm jackets or drawn 7mm jackets (or,  when available,  regular 
     .257 jackets):
          
          BSD-257R  Core Seater and Point Former, 2-die set
          CSL-2     Corbin Swage Lube
          CM-4      Corbin 4-cavity adjustable core mould (specify 257 cal.)
          J-6M-825  Jackets, 6mm caliber, .825-inch length, box of 500
          
          Or,  you could go the deluxe route,  and add the convenience of  a 
     power  ejector and the ability to install precision cannelure  grooves, 
     the  speed of cutting lead wire,  and the ability to use 7mm jackets by 
     adding these items to the above list:

          PE-1      Corbin Power Ejector Unit
          HCT-1     Corbin Hand Cannelure Tool
          LW-25     Lead Wire, 25-lb spool.  (Specify .257 caliber)
          PCS-1     Corbin Precision Core Cutter
          JRD-1-R   Corbin Jacket Reducing Die (Specify 7mm to .257 cal.)
     -----------------------------------------------------------------------

                    HANDGUN CALIBER KITS for RELOADING PRESS

          In the handgun calibers, we offer these calibers:
          
               .25 ACP   .30 Mauser/Luger    .32 ACP        .32 S&W Long
               .32 H&R   .30 Carbine         .380 ACP       .32 Colt    
               .38 S&W   .38 Long Colt       .357 Maximum   9mm Browning
                         .38 Special         .357 Magnum    .32-20 WCF
                              
          For  those of you who know the score,  many of the above  calibers 
     are actually the same diameter,  such as .380 ACP and 9mm,  .38 Special 
     and .357 Magnum.  Thus, you can make several calibers with the same set 
     of  dies,  if  you know what diameter each caliber is supposed  to  be.  
     This  is  covered in great detail in the  Corbin  Technical  Bulletins, 
     Volume  II.   Rather  than repeat each and every one of these  calibers 
     along  with the items that would make kits,  I'll just list  a  generic 
     catalog number and you can pick the numbers to fill in from this list: 

          Available  diameters  in  Corbin  Handgun  Reloading  Press  Swage 
     Dies...

          .251      .308      .312      .314      .355      .357     .358
     
          To  order  a specific caliber of die,  specify either  the  actual 
     caliber  or  the diameter of the bullet from the above  list.   If  you 
     specify   the   caliber  of  the  cartridge,   we  will  use   standard 
     specifications to determine what diameter to ship.   Unless you specify 
     the actual diameter from the above list, it isn't possible to guarentee 
     that what you really wanted is the same as the standard  specifications 
     for the caliber you ordered.   If your 9mm happens to have a .357 bore, 
     then  order  a .357 diameter rather than a 9mm.   Die makers go by  the 
     actual diameter, not by the cartridge designation.
     -----------------------------------------------------------------------

                               ECONOMY HANDGUN KIT

          The  basic handgun package can have just the core seating die  and 
     the  Keith  nose punch provided with it,  to make  semi-wadcutter  type 
     bullets.  To add greater versatility, purchase the point forming die to 
     go with the set.  Here is the basic wadcutter or semi-wadcutter package 
     that I would suggest.   It makes lead,  gas-checked,  half-jacketed, or 
     3/4-jacketed  bullets  (not  with the jacket curved around  the  ogive, 
     however.  That is the job of the point forming die). 

          CS-1-R    Core Seating Die, with Keith punch. (Specify caliber)
          CSL-2     Corbin Swage Lube, 2-ounce bottle 
          CM-4      Corbin 4-cavity adjustable core mould. (Specify caliber)
          
          Now,  in  the  department of bullet  jackets,  there  are  certain 
     options  open  for  .25 caliber that don't apply  elsewhere.   You  can 
     purchase  a  .25  ACP jacket-making kit  (SPJM-25R)  that  turns  fired 
     shotgun primers into 45-50 grain jacketed bullet cups.  In  all the .30 
     calibers,  from .308 to .314,  you can use one size of jacket.   In the 
     .380,  9mm, and all .38/.357 Magnum calibers, you can also use one size 
     of jacket (diameter).  There are several lengths available in .38.
          The right length of jacket for a semi-wadcutter of standard weight 
     is  the .437-inch length in .38,  and for stacking multi-projectiles or 
     half-jacket bullets,  the .250-inch jacket is ideal.  The 0.5-inch long 
     jacket  is  a bit heavy for most single-die sets,  but if you  add  the 
     second die (point former) it is the best all-around choice for all  but 
     the very heaviest weights.   For 200 grain and up,  the 0.7-inch jacket 
     is what you need.
          To  complete your kit,  select one of these jackets for the single 
     die set, or the jacket-making kit for the .25 ACP:

          SPJM-25R  Shotgun primer jacket-maker kit
          J-30-375  Jacket, 30 caliber, 3/8-inch length, box of 500
          J-38-250  Jacket, 38 caliber, 1/4-inch length, box of 500
          J-38-437  Jacket, 38 caliber, .437-inch length, box of 500
          J-38-500  Jacket, 38 caliber, .500-inch length, box of 500
     -----------------------------------------------------------------------

              DELUXE SEMI-WADCUTTER SWAGE KIT FOR HANDGUN CALIBERS
     
          I  don't  see how a person could consider his  swaging  outfit  as 
     being deluxe unless he has the point forming die.   With this die,  you 
     multiply all the previous styles and shapes to incredible levels.   You 
     add  the  ability  to  curve  the jacket  around  the  ogive,  to  make 
     boattailed  and full-jacket bullets,  and to curve the ogive around  so 
     that  a  hollow cavity becomes a pear-shaped or even  a  closed  cavity 
     within the tip of the bullet.  
          When you order the PF-1-R point former separately, be sure to send 
     a  sample  lead  slug and a few seated cores from  your  existing  core 
     seater die (CS-1-R).   The die has to be carefully matched in diameter, 
     and this is one way we can do it.  Another is to get your die back, but 
     you may not want to part with it while we work on the new die.
          When  you order these items,  substitute the diameters listed  for 
     the "XXX" in the die set catalog number.

          BSD-XXXR  Core Seater and Point Former, 2-die set
          CM-4      Corbin 4-Cavity adjustable core mould. (specify caliber)
          CSL-2     Corbin Swage Lube, 2-ounce bottle
          PE-1      Corbin Power Ejector Unit
          HCT-1     Corbin Hand Cannelure Tool
          LW-25     Lead wire, 25 lb. spool (specify caliber)
          PCS-1     Corbin Precision Core Cutter
     -----------------------------------------------------------------------

```
{% endraw %}

## FILES616.TXT

{% raw %}
```
-------------------------------------------------------------------------
Disk No  616  Corbin Handbook v1.0   (Disk 1 of 2)              v1   DS2
-------------------------------------------------------------------------
This disk has the table of contents and the first 11 chapters of the Corbin
Handbook of Bullet Swaging, No. 7 written by Dr. Corbin.  It is saved in
text format.  The subject of bullet swaging is the manufacture of
projectiles using high pressure to flow ductile metals at room temperature
into the precise dimensions of a strong, highly-finished steel die.  The
process is discussed both as a hobby for the firearms enthusiast and as a
highly profitable part-time business venture, supplying handloaders with
high quality, special purpose bullets.  This is first of a two diskette
series.  Utility programs on this diskette facilitate the retrieval of the
Corbin Handbook information.
 
------------- Corbin Handbook (Chptr 1-11)
ANSI     SYS  System information
AUTOEXEC BAT  Start up batch file
CHAPT-?  TXT  Handbook chapter ? (11 files)  (245k)
CONFIG   SYS  System information
CONTENT  TXT  Table of contents
FIND     EXE  Find utility
HB7      BAT  Introduction Batch file
HB7      BAK  Backup of HB7.BAT
INTRO    TXT  Short introduction text of Corbin
READ     ME   Documentation about Corbin and Bullet Swaging
SCRNSAVE COM  Screen save utility
SDIR     COM  Show directory utility batch file
SHOW     BAT  Display text file utility
SHOW     DOC  Documentation for SHOW.BAT
ST       COM  Display text file program
ST       DOC  Documentation for ST.COM
 
PC-SIG (Software Interest Group)
1030 East Duane Ave. Suite D
Sunnyvale Ca. 94086
Ph# (408) 730-9291
 
```
{% endraw %}

## INTRO.TXT

{% raw %}
```
.he Corbin Handbook & Catalog No. 7, Introduction, Page #


                         INTRODUCTION TO BULLET SWAGING


          I'm Dave Corbin, and I'd like to be your guide on a trip you won't 
     soon forget:  a safari to the ultimate levels of handloading, where the 
     final  control  over  your  firearm's  performance  -- the  design  and 
     construction of the bullet itself -- is totally in your hands.  This is 
     the awesome power of bullet swaging.
          What  is  bullet  swaging?   It  is so simple  that  one  sentence 
     describes  the process.   Yet,  it is so powerful that more than  seven 
     books are in print today,  crammed with  experiments,  techniques,  new 
     ideas  that  swaging makes possible.   Research keeps adding  to  those 
     bulging files every day.  
          Technically,  bullet  swaging is the manufacture of bullets  using 
     high  pressure  to  cold-flow  metals at  room  temperature,  inside  a 
     precision die and punch set.   You merely put a piece of lead (or other 
     flowable materials) into a high-pressure die, squeeze it by inserting a 
     precisely-matched  punch (driven by a press),  and the lead flows  like 
     putty to take on the exact dimensions of the die cavity.
          The die must be extremely strong and remarkably well-finished  for 
     this  process to work.   Bullet swaging is done at pressures that often 
     exceed those of a typical rifle chamber!   Yet, even under thousands of 
     pounds of internal pressure,  the die cannot change its size or  shape.  
     The  level  of precision required for these  hand-made,  diamond-lapped 
     dies is measured in the millionths of an inch.   Only a handful of die-
     makers have ever existed who could produce the quality required.
          There  are dies to make semi-wadcutter  pistol  bullets,  boattail 
     rifle bullets,  partitioned,  hollow-pointed,  cup based, spitzer rifle 
     bullets,  and anything else you might imagine!  All the dies operate on 
     the same simple principle:  an undersized piece of material is expanded 
     outward in diameter by high pressure,  at room temperature, until it is 
     stopped by taking on the exact form of the die cavity.
          We'll cover technical details in a minute.  But there is something 
     beyond  all this that describes what swaging really means.   More  than 
     just  the technical power it places in your hands,  swaging reaches out 
     to capture the imagination of people in all walks of life,  and becomes 
     something far greater.
          Bullet  swaging,  to  a  rapidly  growing  number  of  people,  is 
     financial security.   The famous Corbin HYDRO-PRESS system,  now in use 
     around the world by nearly all custom bullet makers, makes it simple to 
     offer  highly-advanced designs of bullets that cannot  be  economically 
     produced by the mass-marketing firms.   Corbin has developed the tools, 
     the  techniques,  even the marketing expertise,  to the point where the 
     average person interested in a second income or a new career can afford 
     to operate a successful bullet manufacturing operation from his home.
          The  custom  bullet maker of today has huge  advantages  over  the 
     founders  of major bullet firms of the past.   Knowing what to make and 
     how to sell it is part of the advantage.  Having standard manufacturing 
     systems, methods, and expertise as close as a phone call or letter is a 
     major  leap over the hurdles Speer,  Hornady,  and Sierra had to  face.  
     You don't have to start from scratch and design not only the bullet but 
     also the tools to manufacture it.  It has all been done for you.  There 
     are  at  least  seven  books at this writing to tell you  how  to  take 
     advantage of these years of experience!
          Corbin publishes the WORLD DIRECTORY of CUSTOM BULLET MAKERS.   It 
     is the source-book for writers,  experimenters, procurement officers in 
     military  and police headquarters,  defense contractors,  and  advanced 
     handloaders  in at least nine countries.   Your own brand of bullet can 
     be listed,  along with your address,  just for the asking.  Advertising 
     space is available for a very reasonable cost.  Reaching the world with 
     your custom bullets is no longer a major challenge.
          By  keeping  in close contact with our  commercial  customers  and 
     working  with them on exotic design variations and tooling,  Corbin has 
     been  able  to help insure a healthy market,  prevent  unnecessary  and 
     wasteful  duplication  of  efforts,  and see that  the  real  needs  of 
     shooters  are met with constant new developments in the field of custom 
     bullets.   Every  individual,  like yourself,  who decides to  offer  a 
     small-scale  supply of some special product is just one more  guarantee 
     against quality bullets ever being swept out of reach.  
          During  major  wars,  economic upheavals,  or bouts of  mis-guided 
     legislative fervor,  it is the small-scale,  wide-spread producers  who 
     stand  strongest  against  shortages.   It  is much  less  likely  that 
     thousands of smaller operators will be forced to cease operations  than 
     the chance that three or four major outfits can be shut down!   Most of 
     the  major firms have other interests to protect and are very  visible, 
     vunerable,  and  sensitive to pressures that would not affect the  home 
     operation.
          You  don't  need  to  sell bullets to get a  pleasant  feeling  of 
     security  in owning a quality set of swaging dies.   Many  people  find 
     that the lower cost of making your own bullets lets them enjoy far more 
     shooting, with less drain on the family finances.  And the equipment is 
     always there, waiting, if you should want to make a little money on the 
     side.    Friends,   club  members,  local  gunshops  -- all  provide  a 
     convenient  market for certain specialty bullets that the factories  do 
     not offer.
          Because bullet swaging is so fast and easy to do,  you can produce 
     enough bullets in a weekend to help cover your own shooting costs.  The 
     "make a few, sell a few" approach serves vast numbers of shooters.  You 
     need only to obtain your Class 1 and Class 6 Federal Firearms Licenses, 
     neither  of  which is expensive or difficult.   Write to your  regional 
     Bureau of Alcohol, Tobacco, and Firearms for forms.  Note that you ONLY 
     need the licenses if you plan to SELL the bullets:  you need NO license 
     to buy equipment and make them for your own use.
          For  many  people,  selling bullets is not  important.   The  real 
     thrill  of  swaging to them is seeing their ideas come alive  in  solid 
     metal.   What  hunter hasn't dreamed of some improvement,  some  better 
     construction,  different weight, or modified style of bullet that would 
     fill  a specific need -- and yet,  it just isn't offered by any of  the 
     mass production firms?
          Sitting  around  the campfire with the remains of a  spent  bullet 
     that  utterly  failed to do the job brings wistful thoughts  of  making 
     something  better.   The  tools  of swaging turn  these  thoughts  into 
     reality  with  lightning swiftness.   Versatility is one of  the  major 
     advantages of swaging, along with speed.  The equipment doesn't have to 
     cost any more than the messy, dangerous hot lead casting equipment with 
     which you are undoubtedly familiar.  Yet the same investment in swaging 
     tools can make literally hundreds of different bullets!  
          Changes in weight are entirely up to you.   In five  minutes,  you 
     can  use  the same dies to make whole bench-top covered with  different 
     bullet  weights.   The dies don't care how much material you  put  into 
     them,  within a broad limit.  They faithfully reproduce the diameter to 
     a  precision  impossible  with any hot lead  process,  operating  at  a 
     constant room temperature instead of changing from molten to solid lead 
     temperature  on  every bullet made.   The lightest weight and  heaviest 
     weight  a certain die can make are normally beyond the limits  of  what 
     you would want to shoot.
          With a cast bullet,  you buy a certain mould for a certain weight, 
     shape,  and style of bullet.  You are limited to various forms of lead.  
     If you want a different weight,  or style, you have to buy a new mould.  
     And  you  spend half an hour waiting for a lead pot to melt the  metal, 
     cast several times to get the mould up to temperature, sort through the 
     bad  casts and rejects,  clean the whole mess up after it has  time  to 
     cool down to safe levels,  and THEN, when all that is done, you have to 
     start all over again and run each of the remaining good bullets through 
     a  sizer  and  lubricator tool,  with the mess of greasy lube  and  the 
     chance of getting too much or too little application.  
          The bullet you get from casting is limited in velocity because the 
     lead will melt in contact with the bore of your gun and the hot  powder 
     gas  if  you  try to drive it too fast.   The  performance  is  limited 
     because  if you try to use harder alloys and reduce the leading of your 
     barrel, the bullets no longer expand or hold together as well.  Using a 
     copper gas check on the base of the bullet is a small step in the right 
     direction, but it isn't nearly enough for full performance.
          With a swaged bullet, you can use any alloy that you might use for 
     casting  (depending on the particular system and dies -- anything  from 
     pure  lead  to solid brass rod can be swaged on the  right  equipment).  
     The  dies make a wide range of weights without further expense to  you, 
     and  the range can usually be extended even further with  simple  punch 
     changes.   The  styles you can make are virtually unlimited.   There is 
     nothing commercially produced today or at any time in the past that you 
     cannot make at home,  and make it more accurately at the same time!  It 
     all depends on the particular kind of equipment you get.  
          Bullet  swaging  equipmenmt quickly demonstrates to  you  that  it 
     saves  you money over casting,  when you begin making different weights 
     and  styles.   If all you want is one weight and style to be shot at  a 
     velocity  of  perhaps  1,200 fps or less,  and that one  style  can  be 
     nothing more than a lubricated piece of lead,  swaging may have  little 
     to  offer you except speed and safety.   If you are looking only at the 
     cost per bullet, there is no difference.  What you pay for lead to cast 
     bullets is what you would pay for the lead to swage the same bullet.
          If,  on the other hand, you are interested in making the bullet to 
     tolerances  that can't be approached with hot lead -- repeatability  of 
     less  than  0.0001 inches -- and you want a system that  can  give  you 
     weight  tolerances so small a normal scale barely registers them,  then 
     even  this one simple cast lead bullet might take a second seat to  its 
     swaged cousin.   In our own experiments, we have found that group sizes 
     of  .308 caliber cast bullets could be cut in half at 100 yards  simply 
     by running the same cast bullets through the final point forming die of 
     a .308 bullet swage outfit.  
          In some calibers -- not all,  mind you! -- you can make absolutely 
     FREE bullets for the rest of your life by using materials others  throw 
     away!   Do you shoot a .224 or a .243 caliber rifle or handgun?  Do you 
     shoot a .25 ACP once in a while (which you might shoot more if the ammo 
     wasn't so costly) or a .257 rifle?   In these calibers,  it is possible 
     to  make  bullets using fired shotgun primers,  spent  .22  cases,  and 
     recovered range lead.  
          All  the materials you need to keep yourself shooting for the rest 
     of your life are lying on the ground by your feet,  when you go to  the 
     target range.   Those empty .22 long rifle cases make excellent quality 
     .22  centerfire  bullets.   The  empty .22 Magnums  and  Stingers  make 
     reasonable  quality .257 and 6mm bullets.   Fired shotgun primers  turn 
     into acceptable .25 ACP bullets.  
          In  the  .224  caliber  (all modern .22 centerfires  use  a  .224" 
     bullet),  the  quality of bullet you can make from a fired rimfire  .22 
     case  and  scrap lead is as good or better than you  can  purchase  for 
     $6.50 a box!  The material is actually easier on the bore than standard 
     thicker jacketed bullets,  shoots well enough that matches are won with 
     the  bullets  (although it isn't a recommended benchrest bullet by  any 
     means!),  and  is  so  explosive that you seldom get  a  ricochet  when 
     varmint hunting.
          Bullet swaging can be profitable, and it is versatile, economical, 
     and enjoyable.   It has the advantage of the highest possible precision 
     in bullet making,  on the order of ten times better than lathe  turning 
     the bullets.   The pressure of more than 2,000 atmospheres in a typical 
     swage  die  contrasts  sharply  to the pressure of  slightly  over  one 
     atmosphere  typical  of  casting a  bullet,  compacting  the  lead  and 
     squeezing  bubbles and voids into oblivion.   The cost of the equipment 
     always  SEEMS  high  to a beginner,  because (1) he  is  starting  from 
     scratch  and  usually needs all the basics at once and (2)  he  doesn't 
     realize yet how much power he is getting for those dollars.  
          In the final analysis, swaging is far lower in cost than any other 
     method  of  bullet making,  except in the one instance where  a  single 
     weight  and  style of lead bullet is all you want,  and a mould  exists 
     that will make it.   As soon as you start experimenting, swaging begins 
     to prove its economy.   As to the cost of the bullets  themselves,  the 
     range starts at zero cost -- remember the rimfire cases! -- and goes up 
     from there depending on the material you choose.   It is quite possible 
     to  make swaged bullets that cost more than a roughly similar style  of 
     factory  bullet.   In  fact,  if you only want to duplicate  a  factory 
     bullet  with  no thought of making something better,  then quite  often 
     swaging won't justify its cost unless you shoot quite a bit.
          The  casual  shooter  who goes through one or two  boxes  of  some 
     caliber a year has no real need for swaging equipment.   It would  take 
     far  too long for him to amortize its cost,  and besides,  he might  be 
     able  to  find  some  bullet  that costs just about  the  same  as  the 
     materials he would have to purchase to make it!   In general,  a swaged 
     jacketed  rifle  or handgun bullet costs about half that of  a  similar 
     factory bullet,  but there are some exceptions.   And many people  make 
     high  performance bullets,  using heavy copper or brass tubing jackets, 
     or  other exotic constructions,  with swaging's  ultra-high  precision, 
     that  cost several times as much as a run-of-the-mill factory bullet in 
     the  same  caliber.   But  they are getting something  that  cannot  be 
     obtained anywhere else, at any price:  a premium bullet made exactly to 
     their order.
          You can see that economy can be a good reason for swaging,  but it 
     isn't necessarily the best or only reason,  and in some cases there are 
     over-riding needs that make cost per bullet relatively unimportant.  If 
     you  want  to  shoot a fine double-rifle and  simply  cannot  find  any 
     suitable weight or even caliber of bullets for it,  what does it matter 
     that your own custom-built bullets might wind up costing you fifteen or 
     twenty cents each?   On the market,  they'd be easily worth a dollar or 
     more in some of these calibers.!   That, in fact, is one of the secrets 
     of  being a successful commercial bullet maker:   picking a product  to 
     make  that  does  indeed  command a price higher  than  standard  mass-
     produced bullets, but which is so unique and valuable to those who want 
     it that they are glad to see you offer it at almost any price.
          If,  for example,  you are affluent enough to afford to travel  to 
     Africa  or  the Far East for big game hunting,  you certainly  are  not 
     going to worry about the cost of a few boxes of bullets.  The important 
     thing is whether or not they will work correctly,  reliably,  when that 
     big  trophy is in your sights at last.   It could mean life or death if 
     you are facing a charging Cape Buffalo.   Anyone who has been there and 
     experienced a bullet failure at such a time -- and has lived through it 
     -- isn't likely to quibble over the price of bullets.   Perhaps you can 
     begin  to see why there are so many successful custom bullet makers  in 
     the  world  today,  making  bullets that sell as fast as  they  can  be 
     produced,  for  over  $1 each and in some cases as much  as  $2.50  per 
     bullet!
          "OK", you say,"bullet swaging sounds like it's got a lot going for 
     it.   But how hard is it to learn?   Is it going to take me the rest of 
     my life to figure out?"
          Have you ever dug a post hole?   Filled a pipe with tobacco?  Both 
     those operations are good allegories for swaging.   When you put a post 
     into a post hole, you tamp earth back around the hole.  When you fill a 
     pipe,  you  tamp tobacco into the bowl.   In a very crude way,  this is 
     what  it takes to learn to start swaging:   press the material  into  a 
     hole  or  cavity,  so  it takes on the shape of the  cavity.   The  die 
     corresponds  to  the pipe bowl or the sides of  the  post  hole.   Your 
     tamping stick or thumb corresponds to the punch in a swage die.  
          There  are  a lot of variations on this process,  and a number  of 
     different  dies  made  to  form  certain  shapes  on  the  bullet,  but 
     basically,  every swaging operation is filling a hole with material  by 
     pushing an undersized piece of material into the hole with a punch. The 
     end  of the punch forms one end of the bullet.   The die walls form the 
     sides of the bullet.   There is another punch,  held captive in the die 
     assembly, that blocks off the other end of the die, and is used to push 
     the bullet back out the die mouth when you are finished.
          A lead bullet takes one stroke to finish.   A semi-wadcutter takes 
     from  one to two dies (one stroke per die) depending on how  fancy  you 
     want  to  get  with the weight control.   A rifle bullet or  a  handgun 
     bullet  made  with  the jacket wrapped over the  ogive  (nose  portion) 
     requires either two or three dies (one stroke per die, again) to finish 
     the projectile.   Whether it takes two or three dies depends on whether 
     or  not you want to swage the lead slug that makes up the  filling,  or 
     core,  by itself first.    You can insert the core into the jacket (the 
     skin of the bullet) with or without first swaging the core.  Either way 
     makes  a  reasonably good bullet.   Swaging the core  first  makes  the 
     weight variation extremely small.
          We'll get into the details later.  But that is really all there is 
     to  learn in order to get started.   You can be making your own bullets 
     within a few minutes after you get the dies.   And you can be  learning 
     to  make  ever better ones fifty years later!   It's a little bit  like 
     learning to shoot:   you can start hitting the target the first day you 
     get  your new rifle,  and then you start working on getting  10's,  and 
     never quit working on getting all X's.   The bullets you can make right 
     away will probably be equal quality to what you can buy off the  shelf.  
     But why stop with that?  Swaging is capable of giving you so much more.
          You may not have any desire, at this time, to make exotic bullets.  
     You may not want to extrude your own lead wire, or produce heavy copper 
     or  brass  jackets  yourself,  or  form  partitions  and  liquid-filled 
     internal cavities in your projectiles.  You may not want to make a high 
     performance  12  gauge  shotgun slug,  or a solid  copper  .14  caliber 
     bullet,  or  a  rebated  boattail .500 caliber  slug.   The  tools  are 
     available,  if you do.  Knowing what is possible can be as important as 
     doing it.  
          The  same copper tubing that runs air conditioners,  nuclear power 
     plants,  automobiles,  and  apartment  buildings  can  be  turned  into 
     excellent  quality jackets.   The same lead that is used  for  roofing, 
     plumbing,  x-ray shielding,  and nuclear medicine containers is capable 
     of  supplying you with an endless quantity of cores.   Until you  place 
     the  lead core into the jacket and swage that bullet in the privacy  of 
     your home, nothing about your supplies is unique to bullet making.  The 
     materials are all around you.  
          The bullets you can make in times of serious economnic upheaval or 
     a great national disaster might well be worth more than their weight in 
     gold.   Survival  weapons  don't shoot gold coins.  It's hard  to  make 
     change  with  a  couple  of  investment grade  diamonds  when  you  are 
     bartering for medicine or food.   And cast bullets tend to foul the gas 
     ports of automatics and gas-operated military rifles.  It isn't radical 
     to consider, at least, the potential for barter and the value that your 
     bullet-making ability might have in such circumstances.
          "Sounds interesting.   What's next?", you may be asking. The first 
     step  was obtaining this manual.   It will give you a wide view of  the 
     field  of  swaging and show you what kinds of equipment  are  available 
     today.    There  isn't  room  to  describe  every  possible  trick  and 
     technique,  nor to go into the details of a commercial business, nor to 
     really give you an intense course in the art of swaging. Those subjects 
     are  found  the seven books Corbin has published over the  past  twenty 
     years.
          Before  jumping  in,   you  should  read  at  least  the  textbook 
     "REDISCOVER SWAGING".  This should be read primarily as a course in the 
     art  of swaging and not with a great deal of attention to the  specific 
     machines or tools described,  since the principles are the same but the 
     products may change over the years.   If your interest leans toward the 
     commercial  aspects,  then by all means read "POWER SWAGING"  as  well.  
     Greater detail on a wide range of specific subjects can be found in the 
     three  volumes  of  the Corbin Technical Bulletins.   And  the  ancient 
     "BULLET SWAGE MANUAL" gives a different writer's viewpoint from an  age 
     gone by.  
          With  the  information at your fingertips,  you have a  tremendous 
     advantage over the handloader of the past -- as well as the founders of 
     the big bullet factories of today!   Corbin has brought swaging out  of 
     the dark,  mysterious realm of the die-maker and turned it over to you:  
     one  of  the most powerful tools ever devised for advancing the art  of 
     handloading is placed in your hands.
          In  August,  1984,  Corbin opened the world's largest bullet  die-
     works,  in  a new plant built just for this purpose.   Located  at  600 
     Industrial Circle,  White City,  Oregon,  on a 44,000 square foot site, 
     the  entire  plant  features electronically cleaned and  filtered  air, 
     climate control for both offices and machine shop, and a six-inch thick 
     barrier on both ceiling and walls to insulate the shop from temperature 
     changes.  Brilliant  shadowless  lighting and  spacious  workroom  give 
     Corbin's die-makers remarkable conditions for testing and inspection of 
     their work, even as it is being produced.  
          The  Corbin facility is unique:   no other firm has ever poured so 
     much time,  effort, and capital into the development of bullet swaging.  
     If some of the things you read here seem completely different from  the 
     general  public's impression of swaging,  there's a good reason for it!  
     Most  of  the limitations and problems with swaging in  the  past  were 
     simply waiting for someone to find the solutions.
          Swaging itself has few limitations.  It is a quantum leap over the 
     usual  "cookbook"  kind of reloading.   Swaging releases you  from  the 
     limits of mere repetition of what others have done.  Instead of forcing 
     you  to  follow  recipes in a reloading  kitchen,  swaging  turns  your 
     handloading  bench  into  a  laboratory  where  new  knowledge  can  be 
     developed.
          At any point, you could be holding in your hand the prototype of a 
     design that could change the future of shooting.   And yet, at the same 
     time,  you  can immediately begin producing bullets "as good as factory 
     ones", and likely, a great deal better!  No matter how routine a bullet 
     you may wish to make right now,  it's hard to resist the temptation  to 
     nudge  the  throttle a bit on the powerful design  machinery,  and  try 
     something a little better.  The spirit of invention is far from dead in 
     most of us.
          At  the moment when you first hold the gleaming perfection in your 
     own hand, which only seconds before was empty copper and dull lead, you 
     may  sense  the  presence of other eyes  looking  over  your  shoulder.  
     Perhaps,  if you turn quickly enough, you may catch a fading glimpse of 
     the spirit of the ancient founders of the swaging art:  men like Harvey 
     Donaldson,  who  swaged some of the first .22 caliber jacketed  bullets 
     from  fired .22 cases -- a trick you can handle much more easily with a 
     simple  kit,  today.   Behind  him,  you  might  see  a  long  line  of 
     experimenters,  slug-gun  shooters with their Carver pound-dies in  one 
     hand -- the men who first began the process of shaping lead bullets  in 
     swage  dies,  to  advance the art of accurate shooting beyond  anything 
     that had been done before. 
         Whatever work you might do,  whatever ideas you might explore,  you 
     have  just  as much potential as they did to advance the whole  art  of 
     shooting  into  a  new generation.   When you place your  hand  on  the 
     powerful leverage of swaging equipment, you are stepping far beyond the 
     experiences  of  even the most knowledgable handloader  who  has  never 
     tried this remarkable field.
         Men  with  forty or fifty years of handloading  experience  express 
     wonder  at  the  vast new horizon swaging lays  before  them.   It's  a 
     feeling all of us, from the dim beginnings to this day, can appreciate.  
     It's  the feeling of pride that comes,  when you realize that your  own 
     bullets  -- your  ideas  and  experiments turned  into  reality  -- are 
     building  on  the solid foundation built by the greatest  experimenters 
     shooting has ever known.  If you could catch that glimpse in the fading 
     light, I'm sure you'd notice each of them nodding their approval.
      
```
{% endraw %}

## NOTES616.TXT

{% raw %}
```
Abstract by Anthony Murabito
 
Program Name: Corbin Handbook (Chptrs 1-22)
 
Author Name:  Corbin Manufacturing and Supply, Inc.
Address:      PO Box 2659
              White City, Oregon  97503
 
Tel number:   (503) 826-5211
 
Suggested donation: None, but for $4.00 you'll get the bound handbook.
 
Program description:
 
This diskette contains a segment of the Corbin Handbook of bullet
swaging on computer text files saved in ascii format.  This disk series
contains chapters 1 through 22 of the handbook.  The subject of bullet
swaging is the manufacture of projectiles using high pressure to flow
ductile metals at room temperature into the precise dimensions of a
strong, highly-finished steel die.  The process is discussed both as a
hobby for the firearms enthusiast and as a highly profitable part-time
business venture, supplying handloaders with high quality, special
purpose bullets.  This two-disk set is handy for the quick reference of
words or phrases by using the utility and batch files included on the
disks.  In order to use the batch files, you need to have the MS-DOS
"FIND.EXE" command either in the current path (using DOS 2.1+) or copied
onto the disks.  There is room on the disk for this command.  "FIND.EXE"
is part of the external commands supplied with the MS-DOS 2.1+ operating
systems.  The author of this handbook is president of the firm
recognized in the firearms industry as being the foremost supplier and
developer of the field of bullet swaging.  In addition to more than 400
articles and papers on the technical aspects of bullet swaging, Mr.
Corbin is the author of seven books which comprise virtually every work
in print today on the subject.  His firm does advanced ballistics design
for military and public safety agencies and provides nearly all of the
experimental equipment used in manufacturing new projectiles for small
arms today.  Software regarding bullet swaging is available from Corbin.
Any text file processor will read the Corbin chapters with color or
monochrome, at least 128 is required.
 
```
{% endraw %}

## SHOW.DOC

{% raw %}
```

------------------------------------------------------------------------------

SHOW.DOC --- how to find words or phrases in the HB7 files:

        To display all lines that contain a word or phrase in the
        Corbin Handbook, simply type this command:

                          SHOW word

         ...where "word" is any word or phrase you want to find.  
         The entire line in which the word or phrase appears in
         every file will be displayed, as well as the chapter.

---------------------------------------------------------------END------------

```
{% endraw %}

## ST.DOC

{% raw %}
```

ST -- the SuperTyper program -- an improved version of the DOS type command.

This program provides three significant enhancements to the type command:

 1) the display is paged, not scrolled, and thus is much easier to read.

 2) Previously displayed pages are saved and can be accessed by use of the 
    PgUp and PgDn keys. (CURSOR PAD 9 and 3, numlock OFF)

 3) Wordstar's 'funny' characters are converted to normal display characters.
    (as all WordStar users know, 'type'ing a WordStar file creates a strange
     display)

Directions:
Type ST for directions and to be prompted for a filename to be listed.
Type ST <filename> to list a file.
PgUp and PgDn move through the display pages in the file.
The '+' toggles the display of page number in each page.  This display 
is convenient for keeping your place in big files -- especially files 
that are bigger than memory and only part of the file can be kept in memory.
This display is normally off, it is toggled on when "buffer wrap-around"
occurs.  If it bugs you, hit the '+' key and turn it off.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0616

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAT       256   7-21-86  11:49a
    CHAPT-1  TXT      7431   4-05-86   1:36p
    CHAPT-10 TXT      7266   4-05-86   2:33p
    CHAPT-11 TXT     10961   4-05-86   2:36p
    CHAPT-2  TXT     13402   4-05-86   1:47p
    CHAPT-3  TXT     20634   4-05-86   1:52p
    CHAPT-4  TXT     41942   4-05-86   2:00p
    CHAPT-5  TXT     43545   4-05-86   2:14p
    CHAPT-6  TXT     25900   4-05-86   2:18p
    CHAPT-7  TXT     48273   4-05-86   2:25p
    CHAPT-8  TXT     13422   4-05-86   2:26p
    CHAPT-9  TXT     13295   4-05-86   2:30p
    CONTENT  TXT      1920   1-01-85   5:44a
    HB7      BAK      2560   1-01-85   2:14a
    HB7      BAT      2560   1-01-85   4:21a
    INTRO    TXT     28359   1-01-85   2:03a
    READ     ME       5504   1-01-85   1:54a
    SCRNSAVE COM       688   1-01-85   2:03a
    SDIR     COM      1555   1-01-85   2:04a
    SHOW     BAT       128   1-01-85   2:04a
    SHOW     DOC       640   1-01-85   2:04a
    ST       COM     14336   2-03-84   2:43a
    ST       DOC      1152   1-01-85   2:04a
    NOTES616 TXT      2093   9-15-86   9:41p
    FILES616 TXT      1726  10-15-86   1:06p
    GO       BAT       590   9-15-86   9:28p
           26 file(s)     310138 bytes
                           37888 bytes free
