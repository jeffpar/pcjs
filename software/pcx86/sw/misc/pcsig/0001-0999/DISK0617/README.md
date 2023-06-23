---
layout: page
title: "PC-SIG Diskette Library (Disk #617)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0617/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0617"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "CORBIN HANDBOOK 2 OF 2 (ALSO 616)"

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

## CHAPT-12.TXT

{% raw %}
```
.he CHAPTER 12 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                       SWAGE DIES of the MITY MITE SYSTEM 

          There are so many different styles, calibers, and kinds of bullets 
     possible  in  the  Mity Mite system,  that it isn't practical  to  list 
     "kits" or tables of standard bullets you can make.   If it falls in the 
     range of .14 to .458 caliber,  with a weight not over 450 grains, and a 
     length not to exceed 1.3 inches base to tip,  you can probably make  it 

     in the Mity Mite.
          In  the  realm  of jacket making,  the Mity Mite system  can  form 
     copper   tubing  into  excellent  jackets  with  limitations  to   wall 
     thickness:   the  standard thickness offered is 0.030-inch,  in  copper 
     tubing.   Steel,  brass,  or  thicker walls are not practical  in  this 
     system, but require the power of the Corbin Hydro-press system.  
          If  I  were to suggest a good starting package for  the  beginning 
     bullet maker, it would usually consist of the following items:

          (1)  One or more Mity Mite presses (CSP-1)
          (2)  A set of dies in the style desired (normally, FJFB-3-M)
          (3)  A bottle of Corbin Swage Lube (CSL-2 or CSL-16)
          (4)  A jacket supply...
               which could be one of these:
               
               (a)  A CTJM-1-M tubing jacket maker (.030-wall)
               (b)  A quantity of Corbin bullet jackets (usually, 1000)
               (c)  A rimfire jacket-maker (RFJM-22M or RFJM-6MM)
               (d)  A sub-cal jacket drawing die set (JRD-1-M, one each
                      for .20, .17, and .14 draws)
               (e)  No jackets -- for lead bullets
               (f)  A JRD-1-M jacket reducer and supply of next-larger
                      jackets, where required
          (5)  A lead core supply...
               which could be one of these:

               (a)  Lead wire (LW-25) and core cutter (PCS-1)
               (b)  Core mould (CM-4)
               (c)  Sub-cal extruder (LED-2) kit  

          These  are  all you really need to consider.   There are  optional 
     items  that  I might want,  having been through it  all  before.   They 
     simply  make  life  a bit easier and  produce  better  bullets.   These 
     optional items include:

          (1)  Cannelure tool (HCT-1)
          (2)  Bullet polisher kit (BPK-1)
          (3)  Dip Lube (CDL-16) to preserve finish, or for lead bullets.
          (4)  Instrument grade lubricating oil (FSO-16) to preserve dies
          (5)  Cleaning solvent (CCS-16) for dies and bullets
          (6)  Core Bond (CCB-16) to make bonded core bullets
          (7)  Extra floating punch holders (FPH-1-M)
          (8)  Extra ejection pins (PUNCH-M, specify caliber, internal PF,
                 and/or actual diameter if known)

          As to exactly WHICH size of jacket,  mould,  lead wire, or die set 
     model to get,  you can just indicate the weight and style of bullet you 
     want to make,  either with a sketch,  a sample,  or reference to one of 
     the drawings or photos in any Corbin book (give title and page number).  
     The  die-maker will work out the correct combination to get  where  you 
     want to go, using the closest available materials.  
          That  still leaves you a bit in the dark as to which of  the  many 
     sets  of  dies will make the bullets you want.   Here is  a  check-list 
     describing  many general kinds of bullets,  and the dies that will make 
     them:

          A.  LEAD BULLETS WITH SMALL SHOULDER BEFORE START OF NOSE
               (1) Use LSWC-1-M single die set
               (2) Specify caliber  
               (3) Specify base shape:
                    a.  Flat Base (standard)
                    b.  Dish Base (shallow concave from side to side)
                    c.  Cup Base (flat margin around deeper concave portion)
                    d.  Hollow Base (more than 1/2 caliber deep cavity)
               (4) Specify nose shape:
                    a.  Keith Nose (standard for handgun)
                    b.  Round Nose
                    c.  Wadcutter Nose
                    d.  Conical Nose
                    e.  Hollow Point (a universal HP, used with any above)
                    f.  1-E (1-cal. long eliptical, standard for rifle)
               (5)  Specify weight range desired (max. 450 gr.)

          B.  LEAD BULLETS WITH NO SHOULDER BEFORE START OF NOSE
               (1) Use CSW-1-M and PF-1-M (core swage and point form dies)
               (2) Specify caliber
               (3) Specify ogive radius or nose shape
                    a. Tangential ogives from 0.5 to 10-S (6-S standard)
                    b. Spire point (12-degree standard)
                    c. Round Nose (same as .5-S or .5-E shape)
                    d. Eliptical ogive from .5-E to 2-E (1-E standard)
                    e. TC (truncated conical - standard handgun)
                    f. Dual-diameter, other special form (send sketch)
               (4) Specify base shape (same as in A.)
               (5) Specify weight range desired (max. 450 gr.)

          C.  JACKETED SEMI-WADCUTTER OR WADCUTTER
               (1) Use JSWC-1-M (core swage and core seater)
               (2) Specify caliber
               (3) Specify Nose shape (same as A.)
               (4) Specify Base shape (same as A.)
               (5) Specify weight range (max. 450 gr.)
               (6) Specify jacket (Corbin size, or send sample)     

          D.  FULL JACKET, OPEN TIP OR HANDGUN SOFT POINT, OR FMJ OPEN BASE
               (1) Use FJFB-3-M (core swage, core seater, and point form)  
               (2) Specify caliber
               (3) Specify ogive radius or nose shape (same as B.)
               (4) Specify Base shape (same as A.)
               (5) Specify weight range (max. 450 gr.)
               (6) Specify jacket (Corbin size, or send sample)

          E.  FULL JACKET, LEAD TIP RIFLE OGIVES
               (1) Use LTFB-4-M (as in D. but with lead tip die added)
               (2) Specify all items as in D.
               (3) Specify tip shape
                    a. flat
                    b. spitzer (sharp point to match PF-1-M die shape)
                    c. semi-spitzer (radius at tip)
                    d. round
              
          F.  REBATED BOATTAIL OPEN TIP RIFLE STYLE
               (1) Use RBTO-4-M (core swage, RBT-2 set, point form)
               (2) Specify all items as in D.

          G.  REBATED BOATTAIL AND FLAT BASE, OPEN TIP RIFLE STYLE
               (1) Use FRBO-5-M (3-die set with RBT-2 set added)
               (2) Specify all items as in D.

          H.  REBATED BOATTAIL WITH LEAD OR OPEN TIP
               (1) Use FRBL-5-M (same as F. with LT-1-M added)
               (2) Specify all items as in E.

          I.  REBATED BOATTAIL or FLAT BASE, LEAD or OPEN TIP (all style)
               (1) Use FRBL-6-M (complete set of all dies)
               (2) Specify all items as in E.

          Note that each set of dies simply adds additional kinds of dies to 
     one of the more simple sets.   You don't lose any capability as you  go 
     up in versatility.   The only decision that might be somewhat difficult 
     is  between  a LSWC-1-M lead semi-wadcutter die and a JSWC-2-M  two-die 
     set for either jacketed or lead semi-wadcutters.  The LSWC-1-M is a bit 
     faster if you are certain that you don't want to make jacketed bullets.  
     But the JSWC-2-M set handles both kinds well.   
          The  FJFB-3-M  and all higher sets still preserve the  ability  to 
     make  lead bullets or semi-wadcutters,  provided you order the  desired 
     nose punch to fit into the core seating die.  The exception is that the 
     RBTO-4-M  and the RBTL-4-M do not have a standard core seating die  for 
     flat  base  bullets.   They cannot make a  conventional  handgun  style 
     without a rebated boattail, since there is no die included to do it.
          When you order a die set for rifle calibers, and we know it is for 
     a  rifle  caliber,  we  provide a punch to fit INSIDE  the  jacket  you 
     specify (and if it isn't one of ours, we need samples or we cannot make 
     the  dies).   Rifle style implies that the jacket will curve around the 
     ogive like a rifle bullet jacket.   It is very popular for open tip  or 
     soft point handgun bullets, not just for rifle calibers. 
          A  more limited handgun style is the semi-wadcutter.   This  is  a 
     generic term to the die-maker, not a specific shape.  It means that the 
     bullet  has a nose made of lead,  with the jacket stopping short of the 
     ogive,  so  there can be a shoulder where the end of  the  nose-forming 
     punch  presses  against the lead.   In a rifle-style set with  a  point 
     forming  die,  there is NO nose-forming punch:   the point forming  die 
     itself controls the shape of the ogive and nose.  
          
          


                           INDIVIDUAL DIE DESCRIPTIONS


     CSW-1-M   Core Swage Die, Mity Mite
               This is the first die in most sets,  except for the LSWC-1-M.  
     In the lead semi-wadcutter set, the single die performs the function of 
     the core swage and the core seater in one operation,  since it operates 
     on  lead and has no jacket.   It is,  in essence,  a core swage made to 
     final diameter,  and fitted with nose and base punches.   The true core 
     swage  die  has  flat-ended punches,  and is used only  to  adjust  the 
     diameter and length,  roundness and weight of the raw lead  core.   The 
     core  swage die has bleed holes through which surplus lead is  extruded 
     to adjust the weight on each stroke.
          Core  swage  dies are made to a diameter which accepts a  standard 
     size of lead core, and increases it to a close fit to the proper jacket 
     size.  Since jacket wall thickness can be selected from a wide range of 
     jackets,  including tubing or thin rimfire case jackets, the core swage 
     must be matched to the jacket wall as well as caliber.   Some sets  use 
     more  than  one  core  swage,  to allow changing  to  different  jacket 
     thicknesses.  


     LSWC-1-M  Lead Semi-wadcutter Die, Mity Mite
               A  special form of core swage,  in which the bore diameter is 
     made  final bullet size and the punches are made to form the  base  and 
     nose shape.  This die operates on lead or half jacket bullets only.  It 
     is  faster than using a two-die set such as the JSWC-1-M,  but is  less 
     versatile since it does not handle a 3/4-jacket.


     CS-1-M    Core Seating Die, Mity Mite
               The  core  seater can form a finished handgun bullet  of  the 
     semi-wadcutter  style (or wadcutter style) either with or  without  the 
     use  of a core swage to adjust the core weight.   Combined with a  core 
     swage,  it  makes up the JSWC-2-M jacketed semi-wadcutter set.    It is 
     always  used  prior to forming the ogive on an open tip or  soft  point 
     bullet,  in  order to generate enough internal pressure to  expand  the 
     jacket and form a straight, round shank on the bullet.


     RBT-2-M   Rebated Boattail 2-Die Set, Mity Mite
               The  rebated  boattail  set consists of a pair of  dies  that 
     replace the regular CS-1-M core seater.  The jacket (ordinary flat base 
     type) is put into the first die, which is called the preform or BT die. 
     The  core is pushed into the jacket.   A punch enters the mouth of  the 
     jacket  and  presses on the core,  expanding the jacket to  fit  snugly 
     against  the  die walls.   The base of the die cavity  has  a  boattail 
     shape, which transfers to the jacket base.
          The  second die of this set has very closely matched diameter  and 
     taper  to the first die.   It also has a shoulder or edge machined into 
     the cavity.   The smoothly tapered jacket from the first die is  placed 
     in the finishing,  or RBT die (second die).  The same external punch is 
     used to push on the lead core,  creating internal pressure that presses 
     the tapered base against the shoulder in the die.   A rebate or step is 
     created in the jacket from this internal pressure.
          The  seated core and jacket are now ejected and put into the point 
     forming die to be completed.   The regular core seating die (CS-1-M) is 
     not used when making a RBT bullet.


     PF-1-M    Point Forming Die, Mity Mite
               The  point forming die has the actual bullet  shape  machined 
     into its interior cavity.   It does NOT use a nose forming punch, as in 
     the CS-1-M or LSWC-1-M dies,  but has a small spring-steel ejection pin 
     in a tiny hole at the tip of the die.   The seated core and jacket from 
     the core seating die (CS-1-M) or from the RBT-2 die set is put open-end 
     first  into  the PF-1-M die (to make open tip or soft  points),  and  a 
     full-caliber-size punch that fits into the point forming die presses on 
     the bullet base to shape the ogive.
          It  is not advisable to make the complete bullet in this die only, 
     except for full-jacket,  open-base styles.  The reason is that this die 
     does not form a sealed system,  as with the core seating die, since one 
     end  is  virtually open during forming.   The pressure within  the  die 
     tapers  from  base  to ogive in a complex pattern  depending  on  ogive 
     shape,  and  is  not  normally capable of expanding  the  jacket  shank 
     properly  by itself.   That is why the core seating die  pre-forms  the 
     shank prior to using this die.
          Several  different bullet shapes can be made with the same die set 
     by  purchasing  various point forming dies.   The match  of  the  point 
     forming  die  to  the core seater is extremely  critical.   Samples  of 
     seated cores are required to make another point forming die for a given 
     set.   It is normally best to order additional styles of point  forming 
     dies with the original set,  but with sample seated cores or the return 
     of the set, a new point forming die can be matched to the core seater.


     LT-1-M    Lead Tip Forming Die, Mity Mite
               The  lead  tip die shapes the exposed lead at the tip of  the 
     bullet after the bullet has been formed in the point forming  die.   It 
     is  normally  used only for sharp rifle ogives,  not for blunt  handgun 
     shapes.   When the tip of the bullet must be smaller than the  diameter 
     of the ejection pin required for a given caliber,  the lead tip die can 
     be  used  as a finisher to bring the tip slightly more  closed,  or  to 
     shape  the  exposed lead into a proper point after the ejection pin  in 
     the point forming die has deformed it during ejection.
          A lead tip die can be added to any set,  provided that the set has 
     a point forming die.  Lead tip dies are not used with JSWC-1-M or LSWC-
     1-M  sets.   A lead tip die cannot be used by itself to form a  bullet.  
     It  must act as a "clean-up" die for the tip of bullets formed  in  the 
     point  forming  die.   The  internal punch of the lead tip die  can  be 
     changed to various shapes, in order to make flat tip, blunt round tips, 
     semi-spitzer or sharp spitzer lead tips.  
          A  benefit of the lead tip die is that one can use a  sharp  ogive 
     point forming die,  and yet produce a good-looking flat tip.   This can 
     be desirable with a .308-caliber set, where bullets for .30-06 and .300 
     Winchester  can  be  made at the same time as bullets for  the  tubular 
     action .30-30, by finishing the .30-30 bullets with the LT-1-M die.



                              MATCHED SETS OF DIES


     LSWC-1-M  Lead Semi-wadcutter 1-die Set, Mity Mite
          A  "set" can be any number of dies,  including one,  as long as it 
     makes  a  completed bullet without the need of other dies  or  punches.  
     The LSWC-1-M is listed here because it forms a complete  semi-wadcutter 
     style  bullet  (or  a wadcutter,  or a lead rifle bullet with  a  small 
     shoulder between the ogive and the shank).  Normally the external punch 
     forms  the nose and the internal punch forms the  base,  especially  in 
     handgun bullets.   Some rifle bullets are made using the internal punch 
     to form the nose.  
          Remember  that  the  external punch fits into the  floating  punch 
     holder, a threaded cylinder which fits into the press head and does all 
     the  adjusting for die volume and bullet weight (as a  direct  result).  
     The internal punch remains in the die,  and is operated by the geometry 
     of  the ram,  sliding back to allow maximum bullet weight while sealing 
     off the threaded end of the die against swaging pressure,  and  sliding 
     forward to eject the bullet.
          The LSWC-1-M is normally stocked in .25 ACP,  .308", .312", .314", 
     .355",  .357",  .358", .400", .410", .429", .452", and .458" diameters.  
     It  can  be ordered in any diameter between .14 and .458 as  a  special 
     order.   Normal  punches  are either flat,  cup,  or hollow  base,  and 
     wadcutter,  Keith semi-wadcutter,  round nose, conical, or hollow point 
     (a  universal and very deep hollow cavity punch that can be  used  with 
     any  of  the  other punches to  produce  interesting  results).   Rifle 
     calibers  normally are made with a one-caliber-length,  eliptical round 
     nose, and either a flat or cup base.
          The  LSWC-1-M is made for soft lead.   It can handle  hard  alloys 
     without  breaking if you are very careful,  but it is folly to use them 
     in calibers over about .314" diameter.   It is not the hardness of  the 
     alloy that breaks a swage die:  it is the fact that the operator pushes 
     too hard trying to make the hard alloy flow and fill out the die.   You 
     are perfectly safe in using hard lead if you don't push any harder than 
     you  would for soft lead.   But that amount of force may not be  enough 
     for  the hard alloy to flow.    Hard lead by itself does no harm to the 
     die. 
          If you use a .44 caliber die or larger,  it is almost a  certainty 
     that sooner or later you will break the die if hard lead is used.  Dies 
     broken  by  excess pressure are the responsibility of the operator  who 
     applied  the  pressure.   Old Theodore Smith,  a pioneer of  swage  die 
     manufacture  and,  prior to the growth of the Corbin firm,  one of  the 
     largest suppliers of swage dies in the world, used to say that he ought 
     to  write  his instructions to read "jump on the handle with  all  your 
     might,  then remove the die you just ruined and send it and a check for 
     a new one to the die-maker".           
          Anyone  who  has  ever broken a swage die says  "...but  I  wasn't 
     applying THAT much pressure!   It felt about like it always does,  then 
     the die broke!"  With a little more experience,  it is easy to feel the 
     little bit of excess force that breaks a die.  A swage die for the Mity 
     Mite press can handle 171,745 psi in .224 caliber,  and 103,548 psi  in 
     .458  caliber.   That  is the ultimate strength.   A tiny bit more  and 
     CRACK!   When  the  press is adjusted to go "over  center",  using  the 
     nearly  infinite  leverage of the short stroke  system,  it  is  easily 
     possible  to generate pressures over 200,000 psi.   Use only enough  so 
     that soft lead -- pure,  soft lead -- forms correctly.  If a hard alloy 
     can be formed with that pressure, wonderful.  But if it refuses to form 
     without  "a  little bit more",  then check your replacement  die  funds 
     before proceeding to apply it!  
          This  friendly  warning  applies to any of the  dies,  but  it  is 
     especially  true with the LSWC-1 since many people order these in large 
     calibers  and  want to make alloy bullets.   If you  truely  need  hard 
     alloys,  I  strongly suggest that you consider the Hydro-press dies and 
     either the Hydro-press itself,  or the Mega Mite press.   The Mega Mite 
     doesn't  always  have enough leverage for hard alloys  in  the  largest 
     calibers,  but  it makes a good .50 caliber soft lead bullet and it can 
     handle hard alloys in any caliber without breaking the die.  The Hydro-
     press  never says never.   It just idles along while  swaging  linotype 
     alloy,  and  yawns with boredom when you try to challenge it with  jobs 
     that leave hand press dies in a pile of rubble.  

          
     JSWC-2-M  Jacketed Semi-wadcutter 2-die Set, Mity Mite
          The  job of making jacketed or lead bullets in two steps,  instead 
     of  one  like the LSWC-1-M,  means you can use jackets that  cover  the 
     sides of the bullet.  These would normally block the bleed holes on the 
     LSWC-1-M.   If you plan to make both lead and jacketed semi-wadcutters, 
     this is the right choice.   It consists of both a core swage and a core 
     seating die.  The core swage is made to produce a lead core to fit into 
     the normal jacket used in the caliber.   The core seater is made  final 
     diameter for the bullet, and has nose and base punches.
          Some  people  want a bevel base bullet,  a boattail bullet,  or  a 
     round  nose with no step between shank and ogive.    These  things  can 
     only be approximated in the straight-walled core seater die.   The nose 
     punch  does  not have an invisible,  razor-sharp edge.   It  has  about 
     0.020-inches of metal at the edge.  This lets it last for your lifetime 
     and  probably that of your grandchildren,  instead of wearing away in a 
     few bullets.  It also means there has to be a step or shoulder of about 
     0.020-inch depth between the nose (formed in the punch cavity) and  the 
     shank (formed against the die wall).
          I  see little point in the bevel base in this kind of  die,  since 
     the  shoulder  made  necessary by the punch really  doesn't  solve  the 
     problem  of  getting  the bullet easily into the case  mouth.   A  very 
     slight bell to the case mouth solves it.  If you want a true bevel, get 
     the next die set.   It has a point forming die,  which has NO  internal 
     punch  (in the normal sense of forming the bullet nose),  but forms the 
     bullet  against die wall all the way to the end.   You can reverse  the 
     bullet  and tap in into the die lightly (with a precise  adjustment  of 
     the punch holder,  this is more repeatable than I made it sound).  This 
     gives  you a perfectly formed bevel or taper on the base,  very  slight 
     but also very streamlined and adequate to align the bullet in the case.


     FJFB-3-M  Full Jacket, Flat Base 3-die Set, Mity Mite
          This is the workhorse of the system.   More of these sets are made 
     and  sold  than any other.   That is because they do what  most  people 
     want,  making lead bullets,  semi-wadcutter bullets,  or fully-jacketed 
     bullets of either open base or open point style.  
          When  we  say  full jacketed bullet,  it can  mean  two  different 
     things.   Most people mean a military full jacket with open base, which 
     is  formed  by  putting the base of the bullet jacket  into  the  point 
     forming die first, instead of the open end going in first.  But handgun 
     people  often  use the term full jacket to mean that the jacket  curves 
     around  the  ogive,  covering part or all of  the  nose  section.   The 
     alternative is the three-quarter jacket, or the half-jacket design.  
          A  three-quarter jacket bullet is the kind that is formed when you 
     use the JSWC-2-M set and a jacket that covers the shank completely, but 
     leaves  the lead nose to be formed in the punch cavity.   The  JSWC-2-M 
     die  set can't bring the jacket up around the nose at all,  not even  a 
     tiny bit.   This is because the edge of the punch which forms the  nose 
     in that set strikes the edge of the jacket, unless you have enough lead 
     to completely fill the punch cavity.
          A half-jacket bullet has half its shank covered by jacket and half 
     the  shank  made of exposed lead (as well as the entire  nose).   Half-
     jacket  bullets  are not really much better than lead ones  as  far  as 
     velocity and fouling are concerned.   But half-jackets still make great 
     short, light bullets in a 3/4-jacket style!  Confused?  
          Look at it this way:  there are names we give the jackets that are 
     based  on the normal bullet weight made in that jacket,  and then there 
     are  the  names we give bullets regardless of weight.   If you  make  a 
     light bullet in a short jacket,  it can have the whole shank covered by 
     jacket.   And  then,  it is a 3/4-jacket bullet even if the jacket  was 
     originally made for 1/2-jacket designs.   Conversely,  if you use a so-
     called "full" length jacket for a handgun,  and make a normal weight of 
     rifle bullet (such as using a 0.7-inch long .38 handgun jacket to  make 
     a 250 grain .358 rifle bullet), you really wind up with what amounts to 
     a half-jacketed bullet.  
          So,  if  you want to play with unusual weights (and I say,  go for 
     it!   Why  not explore it all since swaging gives you the power  to  do 
     so?)  you  may wind up having to order jackets by their catalog  number 
     and forget about what the rest of the world considers that jacket  good 
     for making.  The terms half, three-quarter, and full jacket are a crude 
     approximation,  anyway.   We'd  be better off without them.   Length in 
     inches is much more precise.
          The  three-die set (FJFB-3-M) has a core swage and a core  seater, 
     but  the  core seater usually is made just slightly (0.0005  to  0.0001 
     inch) smaller than if you were to order the same caliber in a JSWC-1-M.  
     Does this mean you can't add a point forming die to a JSWC-1-M and thus 
     produce a new set exactly like a FJFB-3?  
          No,  but the die-maker should either get the set back or should be 
     given several lead slugs swaged in the core seating die.   Then he  can 
     use the slugs,  or the die set itself, to make a point forming die that 
     is 0.0005 to 0.0001 inches larger than the core seater!  One way or the 
     other,  there  needs  to  be a microscopic difference to  allow  proper 
     ejection  of the final bullet.   Remember that swaging is a process  of 
     upward  expansion  to  meet the die walls.   Shoving a bullet  that  is 
     already  at final diameter into the same diameter of die is  a  formula 
     for stuck bullets and difficult ejection.
          While  we  are  on  the subject,  let  me  comment  that  diameter 
     differences of even 0.001 inch make very little difference in where the 
     bullets  will  group,  provided  all  the bullets fired  are  the  same 
     diameter.   In  the real world,  you can get away with shooting a  .309 
     bullet  in a .308 barrel and probably win the Nationals either  because 
     of or in spite of it,  and everyone else will rush out to buy the  same 
     kind  of oversize bullet once you do it.   What counts is  consistency, 
     not absolute size.   On the other hand,  you can get considerably worse 
     groups  if the bullets are 0.001 inch smaller than bore  size.   So,  I 
     usually recommend the nominal size, or larger.
          The  FJFB-3-M set makes soft points (provided the die is made with 
     a handgun kind of ogive or a flat tip,  and is not brought to a spitzer 
     point  cavity) as well as open tip,  open base (full metal  jacket)  as 
     well  as  open point,  and hollow points (which are made with a  hollow 
     point punch during the core seating operation) as well as open points.
          An open point has the jacket longer than the core.  A hollow point 
     has  a hole poked into the lead core.   You can combine  both.   To  do 
     this,  the  core seating punch has a projection on its face that  makes 
     the  cavity  in the lead core,  and it also fits inside the  jacket.  A 
     normal  hollow point punch fits the die bore,  so that only  the  probe 
     fits into the jacket.  Most hollow points are also lead tips.  
          The usual kind of punches supplied with the FJFB-3-M set depend on 
     whether  it  is  a  rifle or handgun  caliber.   Most  rifle  dies  are 
     purchased to make open tip bullets, so a core seating punch with a flat 
     face,  fitting  inside  the selected jacket,  is  provided.   The  base 
     punches  (internal core seating,  and external point forming) are  flat 
     faced.   The  handgun  sets  normally have a Keith or  a  hollow  point 
     external punch with the core seater,  and flat base punches in the core 
     seater and with the point former.  
          However,  just  because  the simple way to name this set  required 
     using the term "Flat Base",  don't be confused with the optional  bases 
     you  can  make.   Any kind of base that can be formed by  pressing  the 
     bullet base against a punch is perfectly suitable for this set.  A dish 
     base, a cup base, or a hollow base set of punches (meaning, one for the 
     inside of the core seater,  and one for the outside of the point former 
     to  match it) will convert the set from flat base to any of these other 
     base styles. 
          Flat  base is used here to differentiate the set from the  Rebated 
     Boattail  sets.   Those sets have a different kind of core seater  die:  
     in fact,  they have two dies to replace the one flat base core  seater.  
     If you want to make bullets for longest range shooting,  or if you want 
     to experiment with low velocity,  high efficiency bullets even at close 
     range  (where  the  speed  during flight will  approach  or  cross  the 
     transonic  region at Mach I) then I would suggest the rebated  boattail 
     sets that follow.  But first, a word for the lead tip bullet....


     LTFB-4-M  Lead Tip, Flat Base 4-die Set, Mity Mite
          You  can  make lead tips with a three-die set,  provided that  the 
     ogive is blunt enough to allow extremely easy ejection.   The  ejection 
     pin pushes on the lead tip, and with sharper ogives (such as the normal 
     rifle  styles  other  than round noses) the pin pushes  into  the  lead 
     because  it  usually  takes  a  bit more pressure  than  the  lead  can 
     withstand to eject a very pointed bullet.  
          The  result is a deformed blob of lead at the tip of  the  bullet.  
     To reshape this into a neat lead tip, and possibly to shear off surplus 
     lead,  the  LT-1-M  die  is added to the set.   If you  wish,  you  can 
     purchase  the LT-1-M separately and make any open tip set into  a  lead 
     tip  set.   Or,  you  can purchase the set together under the  LTFB-4-M 
     catalog  number.   This  set makes all the bullets that the  3-die  set 
     makes,  plus  good  lead tips.   Good lead tip bullets  take  a  little 
     experimenting, to get the right amount of exposed lead.
          Too much exposed lead usually doesn't hurt anything.   Too little, 
     and  you won't have enough to fill the cavity in the internal punch  of 
     the lead tip die.  The tips don't completely form, as a result.  A very 
     light  pressure  is  required.   If you apply too much,  you'll  put  a 
     shoulder in the jacket just below the tip from pressing the punch  edge 
     against the jacket.   The right amount of lead for the length of jacket 
     used places some limits on the weight of bullet that will work properly 
     and form a good lead tip.   Some combinations of jacket length and core 
     weight  don't form a good lead tip in certain shapes of bullets,  which 
     you will find out quickly by experimenting.  But a few grains more lead 
     hurts nothing, and gives the results you want.


     RBTO-4-M  Rebated Boattail Open Tip 4-die Set, Mity Mite
          Here is the set for the long-range target shooter.   If you  shoot 
     high power rifle with a capital HP,  meaning serious matches with a .30 
     caliber,  then  you  should  consider the lower  drag  coefficient  and 
     consequent shorter time of flight of the RBT design.   The rebate gives 
     you  an  edge in accuracy at the muzzle,  deflecting the  muzzle  blast 
     gasses to the side so that they do not flow along the streamline of the 
     bullet and break up in front of it.
          If you plan to make survival bullets,  or copper tubing bullets, I 
     usually  feel that the slight gain in ballistic coefficient isn't worth 
     the extra cost and trouble of making these bullets.   There is one more 
     step involved, and with tubing it is a little more difficult to produce 
     as good a bullet as with flat base styles.   It can be done,  and it is 
     practical, but most situations involving bullets at more than twice the 
     speed of sound just don't benefit enough from the base design to bother 
     with any extra trouble.
          This  set  doesn't  have  a regular flat  base  core  seating  die 
     included.  It makes rebated boattails, of the open tip style, only.  It 
     doesn't usually make FMJ styles,  but you can use the point forming die 
     alone  and  make a pretty good open base full jacket  "military"  style 
     bullet with a flat base.   Making an open base rebated boattail is  not 
     practical with this equipment, nor does it have any advantage since the 
     open tip is usually more accurate and easier to produce.


     FRBO-5-M  Flat or Rebated Boattail, Open Tip 5-die Set, Mity Mite
          This  set adds a regular core seating die to the previous one,  so 
     you  can make either flat base or rebated boattails with the same  set.  
     It is better to purchase this set together rather than adding on, since 
     the  die-maker can match the diameters better when he has all the  dies 
     in one place at the same time.  
          This set makes it easier to get a wide range of weights.   A  flat 
     base  design lets you get lower weights in the same ogive shape,  and a 
     rebated boattail lets you get lower weights for the same jacket length.  
     A  flat  base gives you the ability to make heavier weights  using  the 
     same jacket length.   If you have a "universal" caliber like the  .308, 
     which  can  produce anything from an 80 grain .32 ACP bullet to  a  220 
     grain .300 Magnum slug, then this is a pretty good choice in die sets.


     RBTL-5-M  Rebated Boattail Lead Tip 5-die Set, Mity Mite
          This  set  just  substitutes a lead tip forming die for  the  core 
     seating die, which means you can make either open tip target bullets or 
     lead tip hunting bullets, but only with the rebated boattail base.  The 
     reason  for a person buying this set is to use the same kind of  bullet 
     that  he  normally uses in his target shooting,  and with which  he  is 
     presumably quite familiar, in a soft point hunting bullet.
          The  odds  are that the high power shooter who does  take  such  a 
     bullet (and,  of course,  the familiar cartridge and powder combination 
     to  fit  it) afield after game with a properly-sighted  hunting  rifle, 
     probably  has  a  much better chance of coming home with meat  for  the 
     freezer  than someone who uses a completely different caliber than  his 
     usual, more familiar target experience requires.
          The  boattail  design  probably doesn't add much  to  the  hunting 
     success,  but it doesn't hurt.   It's contribution is familiarity:   if 
     you fire thousands of the same kind of bullet,  less the lead  tip,  at 
     200,  300,  600,  and  perhaps  1000 yard targets in all kinds of  wind 
     conditions, then chances are better that you can connect with a similar 
     bullet  and  load even if the range is less certain and the  target  is 
     moving.   The range is probably 60 yards to 200 yards,  more than  half 
     the  time,  and  the  bullet is going so fast it doesn't have  time  to 
     notice its tail in that range,  but the shooter has a good feel for the 
     drop and knows better how to hold for wind.  


     FRBL-6-M  All Style 6-die Set, Mity Mite
          Whatever you need,  you can probably make it with this package  of 
     dies.  Many people go for this one simply because "you never know" what 
     you might want to try.  That's not a bad reason.  If you have the dies, 
     you  can try things that you might otherwise never get around to doing.  
     And  dies  are  a good investment:   they don't seem to  get  any  less 
     expensive with the passing of time.   If you think there is much chance 
     you'll  want to make a variety of different purpose bullets in a  given 
     caliber, this is the right choice.  
          On the other hand,  most handgun bullets can be produced just fine 
     with a 3-die set.  There isn't much point in having either the lead tip 
     die or the rebated boattail dies for a .357 Magnum or a .45 ACP,  since 
     there  are tricks that let you make as good a boattail as anyone  could 
     possibly use on these bullets,  with the ordinary 3-die  package.   And 
     lead tips on blunt handgun bullets don't usually require the LT-1-M die 
     because  the  short  bullet length and blunt taper make  ejection  easy 
     enough that the broad lead tip doesn't deform. 
          If you have rifle calibers in mind, and want to go first class, by 
     all means give the 6-die set some consideration.  Even if you don't use 
     all the dies often, they will be ready when you do need them.



                              SPECIAL DIES FOR THE MITY MITE

          Draw dies have already been discussed.   In the Mity Mite  system, 
     you  can get sets of dies to reduce the bullet or the jacket  diameter.  
     The  punch fits into the press ram,  and the die replaces the  floating 
     punch  holder  in  the press head.   This is just the opposite  of  the 
     normal  swaging set (where the die screws into the press ram,  and  the 
     external punch is held in the floating punch holder, in the head of the 
     press).  For details on these dies, turn to the chapter on Draw Dies.
          A unique die set for the Mity Mite is the LED-2 Lead Extruder  Die 
     Set.   This  set solves a problem for the maker of sub-caliber bullets:  
     how to produce lead cores for the tiny .14,  .17 and .20 bullets.  Lead 
     wire is available,  but a normal 175,000 grain spool makes more bullets 
     than  a  person  could shoot in a reasonable  time.   Core  casting  is 
     possible, but very tedious with such tiny core diameters.
          The LED-2 outfit uses a standard .44/.45 caliber lead  core,  cast 
     in  a  .365-inch  diameter core mould.   You can also use  a  cast  .38 
     bullet, if you wish.   Cast these more reasonable sized slugs, and then 
     put them into the mouth of the extruder die.  Run the press ram forward 
     with the extruder punch screwed into the press ram.   Adjust the die so 
     that  you  can easily apply enough pressure to spurt lead wire out  the 
     end of the die, like toothpaste from a tube.  
          The extruder die comes with die inserts for making .20,  .17,  and 
     .14 caliber wire.    The insert can be changed easily.   Lubrication on 
     the cast slug is essential for easy operation.   This outfit is made to 
     extrude  soft lead only.   Hard alloys usually don't extrude well in  a 
     hand press or,  for that matter,  a power press.  I would not own a set 
     of  sub-caliber  dies without the LED-2 outfit to make my  own  sub-cal 
     wire.   It  is more economical,  easy and satisfactory that  any  other 
     method  except  perhaps  for buying a spool of wire to pass on  to  the 
     grandchildren (especially in .14 caliber).
          Dual  diameter  bullets can be made in a special  order  die  that 
     combines  the functions of a core seater and a draw die.   I don't even 
     have  a catalog number for this one,  but just call it a  special.   It 
     fits the press ram like a core seater,  but has a dual inside diameter.  
     It  acts like a draw die,  in that you press your finished bullet  into 
     the die and the forward portion is reduced by the depth of the  rifling 
     (usually  about  0.008 inches total reduction).   A punch matching  the 
     ogive pushes the bullet back out on the ejection stroke of the press.
          This kind of die is somewhat expensive to produce, and is never in 
     stock (being made specifically for experimental applications and custom 
     bullets),  but  it  does allow certain advantages over  a  conventional 
     bullet design.   First, the reduced nose section rides atop the rifling 
     and  reduces friction in the barrel.   This means you get higher speeds 
     and less pressure at maximum loads.  Second, the amount of reduced nose 
     section is adjustable so you can set your own freebore,  even in a  gun 
     without  any barrel freebore.   It is like having a  non-rifled,  bore-
     sized guide section built on the bullet instead of in the gun barrel.
          The  advantage is that you can retain the accuracy you  need,  yet 
     still get higher powder charges and more velocity, and at the same time 
     you can use a heavier or longer bullet than the gun and cartridge would 
     normally feed and chamber.  Feeding through the magazine is a different 
     problem:   this doesn't help in that department.   But feeding into the 
     barrel  is no longer a problem in regard to the amount of  freebore  in 
     your gun.   If the bolt would not close before because the rifling came 
     up against the longer bullet too soon, you can make it work now.
          For want of a better name, I just call this a "dual-diameter" draw 
     die.  We also make point forming dies that swage the bullet with a dual 
     diameter.   There  are  some problems,  however,  that keep  this  from 
     working  in all cases.  One is that the seated core and jacket are  one 
     diameter,  correct for the shank of a normal bullet.   Yet, the forward 
     part  of the point forming die is undersized by so much that it is like 
     using the wrong caliber,  and the bullet can stick or be very difficult 
     to eject.   This happens when the reduced portion extends back very far 
     from the ogive.  
          There are many special instances where experimental processes work 
     very well in one instance and not at all or with great difficulty in  a 
     similar  but  slightly different case.   When possible,  stick  to  the 
     proven  and tested sets of dies:   they have great versatility just  as 
     they  are.   But  if you do need something special and don't  mind  the 
     extra cost involved in working out the details to make it work for your 
     case,  Corbin  is one of the few places in the world where you can  get 
     expert assistance at reasonable cost.

           
     CTJM-1-M  Copper Tubing Jacket-Maker Set, Mity Mite
          A  special set of dies that forms 0.030-wall hard drawn,  straight 
     copper tubing into bullet jackets with flat bases.   The bases are  not 
     completely closed,  but are nearly so.   Partitions cannot be formed in 
     the jacket material itself,  but can be made by using a smaller caliber 
     jacket telescoped inside the tubing.   This technique works well and is 
     described in "Rediscover Swaging".   Tubing jacket-makers are practical 
     for calibers from 7mm to .458 in the Mity Mite system.


     LED-2     Lead Extruder Die, Mity Mite
          A  special  sub-caliber extruder die set that makes wire  for  the 
     .14,  .17,  and .20 calibers,  using either a .38 cast bullet or a cast 
     core from a .44/45 core mould (or cut wire of .365-inch diameter).  All 
     three calibers of wire are made with the standard set, without ordering 
     any special parts.


     JRD-1-M   Jacket Reducing Die, Mity Mite
          Can  be  ordered for either jackets or bullets,  within  practical 
     limitations.   Popular use is for turning a .357 into a 9mm bullet,  or 
     for reducing a .44 jacket to .41 caliber.   Specify starting  diameter, 
     send samples to help the die-maker adjust the die,  and specify desired 
     final  diameter.   Without samples,  it is impossible to guarentee  the 
     final  bullet diameter closer than about 0.002 inches.   With  samples, 
     diameter can be held to better than 0.0005 inches.  


     RFJM-22M  Rimfire Jacket-maker, .224, Mity Mite
          This is the functional equivalent of the same die in the reloading 
     press (RFJM-22R).   It turns fired .22 cases (short,  long, long rifle, 
     or Stinger) into excellent .224 caliber jackets by drawing out the head 
     and  reducing the diameter.   The only difference between this die  set 
     and  the  one  for the reloading press is the  punch.   The  Mity  Mite 
     version uses a punch that screws into the ram,  and the die screws into 
     the 7/8-14 TPI press head just as it would in a reloading press.


     RFJM-6MM  Rimfire Jacket-maker, .243, Mity Mite 
          This is the functional equivalent of the same die in the reloading 
     press (RFJM-6MR).  It turns fired .22 LR or Stinger cases into preforms 
     to  make  a 6mm jacket.   The final forming takes place as the core  is 
     being seated,  expanding the drawn case to 6mm diameter from the  .225-
     inch  diameter  body typical of a fired .22 case.   The head  is  drawn 
     until it becomes a smooth 0.219-inch section,  but the rest of the case 
     is  NOT pushed through the die.   This is different from forming a .224 
     jacket (because the .224 requires that the whole case be pushed through 
     the die).   A two-diameter ejector rod presses the partly-drawn  jacket 
     back out of the die.


     PUNCH-M   Mity Mite Punch
          To order a punch for any Mity Mite die,  specify the caliber,  the 
     function (CS,  CSW,  PF, etc.), and whether it is internal or external.  
     External  punches fit the floating punch holder.   Internal punches fit 
     inside  the die and the ram of the press.   They are the  longer  punch 
     with the small tail on one end.
```
{% endraw %}

## CHAPT-13.TXT

{% raw %}
```
.he CHAPTER 13 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                      SWAGE DIES OF THE HYDRO-PRESS SYSTEM

          Hydro-press  dies are huge.   They are larger than the ram of  the 
     Mity  Mite press and their punches are like night sticks,  so big  they 
     could just about replace the Mity Mite ram.  Naturally, there is no way 
     they would "interchange" with dies from a hand press or the Mity Mite.  
          The  reason for making these large dies is to withstand super-high 
     pressures  -- pressures  that  would  blow  a  firearm  to  bits.   For 
     instance,  a  .224 caliber die in the Hydro-press design can  withstand 
     176,667  psi  repeatedly.   Even  the huge .512 caliber  die  can  take 
     pressures  of 102,198 psi.   These pressures would crack a smaller  die 
     immediately.  
          Because these dies can withstand such monumental pressures,  it is 
     possible  to do things with them that were not possible before in  home 
     swaging.   In  fact,  things that are impractical for any of the  major 
     bullet plants can also be done easily at home because of the design  of 
     both the dies and the press.
          The  same dies that are made in the Mity Mite are also produced in 
     the  Hydro-press system.   Turn to the chapter on Mity Mite dies for  a 
     list of all the styles and sets you can obtain, and what they do.  Just 
     replace the -M at the end of the catalog number with a -H, and you have 
     a catalog number for the same thing in the Hydro-press system.  
          For details on the operation of each of the various kinds of dies, 
     I  will refer you to the section on Mity Mite dies.   The operation  is 
     basically  the  same,  except  that much greater pressure can  be  used 
     safely  in  the  Hydro-press die than is possible  in  the  Mity  Mite.  
     Hydro-press dies also fit into the Mega Mite press, but it isn't always 
     practical  or  even  possible to develop enough pressure  to  form  the 
     bullet.   The Mega Mite is strong enough and so are the dies,  but some 
     calibers,  materials, and designs simply require a full-power hydraulic 
     system in order to operate properly.   On the other hand,  many bullets 
     can be made in the Mega Mite,  including lead .50 calibers and jacketed 
     .458 calibers with up to 0.030-inch wall tubing.  
          There  are   special dies that the great control and power of  the 
     Hydro-press can utilize.  One is the LED-1 Lead Extruder Die set.  This 
     extruder makes any size of lead wire, from the .224 to the .458 caliber 
     size.   Four standard LED-D inserts are provided (.185, .250, .312, and 
     .365-inch diameters), and you can order any other standard diameter you 
     need, or have a special diameter made to order.
          The  LED-1 comes will instructions for use.   Basically,  the  die 
     replaces  the floating punch holder in the press head.   It  accepts  a 
     0.795-inch  diameter  lead  billet  four  inches  long.   Corbin  makes 
     packages  of four such billets under the catalog number of  LB-4,  from 
     pure  chemical lead.   The kit also comes with a set of two mould tubes 
     and a base, which lets you cast your own soft lead into proper-diameter 
     billets in rapid order.  Extra mould tubes can be ordered by name.
          A special,  long punch assembly with floating head screws into the 
     press  ram.   This punch self-aligns with the die bore,  and is a  very 
     snug fit.   I don't recommend pushing it in by hand,  because it can be 
     difficult to remove.   To extrude lead wire,  simply lubricate the lead 
     billet with Corbin Swage Lube, and drop it into the top of the extruder 
     die.   The  punch and die should be adjusted so that the punch is  just 
     inside the die mouth, and it will support the lead billet.
          Then,  place the desired diameter of die insert (LED-D)  carefully 
     in  the top of the die body,  with the smooth,  dished side toward  the 
     lead.   Slide  it  into place in the top of the die.   Then  screw  the 
     bushing  down  into the top of the die body to hold the die  in  place.  
     Start the press moving up.  Normally, I like to adjust the top position 
     sensor  so  that the ram is just short of the top of the die  when  the 
     press stops.  This is best done by running the ram up before the die is 
     installed,  then screwing the die down until it stops against the punch 
     face,  and finally backing it off slightly for clearance.  Then set the 
     location of the top sensor to shut off the press and reverse it at this 
     point in the ram travel.
          Small  diameter wire can take 1,800 psi or so to extrude.   Larger 
     diameters can take as little as 1000 psi on the press gauge.  The exact 
     pressures  are suggested in the literature that comes with  the  LED-1.  
     When  you  start up the press,  lead will come out the top of  the  die 
     quickly.   It  will  be hot,  so don't immediately grab it with a  bare 
     hand.   Trapped air or lube can cause bits of lead to be expelled  with 
     great  force  from the top of the die,  so never lean over the  die  or 
     place  any part of your body over the top of it while you are extruding 
     lead.  If you ever observe this rare occurrance, you will be careful to 
     follow that advise.
          The  quality  of wire that you can produce this  way  far  exceeds 
     nearly any commercial supply.   It looks like chrome, and it is so even 
     and  consistent  that it is hard to believe the material is soft  lead.  
     Many Corbin customers sell their lead wire at a premium price,  and get 
     it, because it is indeed a premium product.
          Copper tubing jacket-maker dies, CTJM-1-H, for the Hydro-press can 
     be  ordered  in .030,  0.049,  or 0.065-inch  wall  thickness.   Brass, 
     copper,  or even steel jackets can be formed.   In copper of 0.030  and 
     0.049  wall  thickness,  it  is practical to form a partition  or  wall 
     across  the  middle of the jacket in several of  the  larger  calibers.  
     This  isn't possible or practical in all calibers or wall  thicknesses, 
     but generally works well above .30 caliber in 0.030 wall copper tubing, 
     and with most of the larger calibers in 0.049 wall copper tubing.
          The  base closure that is possible with the Hydro-press die set is 
     total,  in flat base designs.   Recently,  we have developed methods of 
     making  nearly  total closures in a  rebated  boattail,  copper  tubing 
     jacket.   Solid  noses can also be formed to a high degree of  closure.  
     Bullet designs that far outshine any conventional factory design can be 
     produced  at home.   Hundreds of fired bullets,  recovered from  trophy 
     game  by  excited  customers,  line the shelves in  my  office.   Their 
     performance  all over the world,  time and time again,  proves  that  a 
     person  can  produce a better bullet in his own garage or loading  room 
     than most of the very expensive factory bullets available today.
          
          JRD-1-H   Jacket Reducing Die, Hydro-press
          Available for tubing reduction,  bullet drawing,  or jacket redraw 
     operations.   Also  used  for reducing the diameter of pieces  of  cut, 
     solid tubing in copper or brass alloys, in order to produce solid metal 
     bullets for special applications.   The JRD-1-H fits a 7/8-14 to 1.5-12 
     thread adapter in the press head,  and the punch screws into the  press 
     ram.   For  unusual applications,  automatic stripper plates and  guide 
     frames  can be built to fit on the CHP-1 Mark IV  Hydro-press,  quickly 
     removing  the  drawn  component from the punch on the down  stroke  and 
     allowing  rapid,  hand-fed  operation that  approaches  automatic  feed 
     production (at a fraction of the cost).

     CTJM-1-H  Copper Tubing Jacket-maker, Hydro-press
          Normally used in calibers above .308, up to and including the .600 
     Nitro,  special  sets  can  be used in calibers such as .270  and  7mm.  
     Usually, smaller calibers can utilize commercially available jackets at 
     lower  cost,  or use commercial jackets reduced in diameter to  thicken 
     the walls.   Wall thickness of 0.030,  0.049, and 0.065 are standard in 
     the  larger bores.   Special sets can be made for other wall  thickness 
     tubing.   The flat-base sets round the end of the tubing,  draw it down 
     to proper size,  and flatten the end in the regular core seating die of 
     your  swage set.   The partition sets utilize two punches to  fold  and 
     pressure-weld  a  band between their ends,  making a partition  in  the 
     middle  of  the  bullet  (exact position can be  set  by  punch  length 
     ratios).   The  base  is rolled over after the core is  inserted.   Two 
     short cores are inserted,  one from either end.  Partition sets are the 
     same  price  as regular sets,  although different kinds  of  parts  are 
     included.   Five  punches  are normally used to convert a  conventional 
     flat  base  set into a partition set.   Rebated boattail  sets  can  be 
     produced as well,  again at the same price.   RBT and partition designs 
     are not usually combined.

     CSW-1-H   Core Swage Die, Hydro-press
          The  core  swage makes precise lead cores from soft or hard  lead.  
     Unlike the Hydro-press dies,  there is no restriction on lead hardness.  
     Special  diameter bleed holes are utilized to produce a soft or a  hard 
     lead  swage  die.   Specify  which kind of lead you wish  to  use  when 
     ordering, in order to get optimum performance.

     CS-1-H    Core Swage Die, Hydro-press
          The  core swage die can make a semi-wadcutter handgun bullet  with 
     or without a jacket, or it can be used as a preliminary step in forming 
     a  rifle  bullet  (where the final stage is  the  point  forming  die).  
     Pressure  limits for each caliber of die are given in the book,  "Power 
     Swaging".   Punches  can  be ordered by function and shape  under  that 
     catalog number PUNCH-H (for this and all other Hydro-press dies).

     PF-1-H    Point Form Die, Hydro-press
          The point forming die has the actual bullet shape lapped into  its 
     cavity.   It  can form both jacket and lead into the ogive,  unlike the 
     straight  wall  core seater which uses a punch to shape just  the  lead 
     nose.   The  internal  punch  is a tough  spring-steel  ejection  wire.  
     Larger  calibers  normally use a wire that can be 0.180 to  0.200  inch 
     diameter.   This  assures  easy ejection on lead  tip  bullet  designs.  
     Smaller  calibers normally utilize wires of 0.120 or less,  down to  as 
     little as 0.080 inches for very small caliber bullets.  It is important 
     to  know  the  ejection  pin  diameter and  length  so  you  can  order 
     replacements  easily.   One of the first measurements you should record 
     is the diameter and length of the wire part of this punch, just in case 
     you ever need a replacement sent quickly.

     LT-1-H    Lead Tip Forming Die, Hydro-press
          The lead tip die shapes the extended lead tip of the  bullet,  and 
     it  can  also be used to close down the open tip of a bullet below  the 
     diameter  of the ejection pin (as discussed under the PF-1-H  heading).   
     The  internal  punch  of  this die has a  cavity  that  determines  the 
     tip  shape.   You can order extra internal punches to make  flat  nose, 
     spitzer  tip,  or semi-spitzer (rounded end) tips.   This die uses  the 
     same  external  punch  as the point forming die,  and  cannot  be  used 
     without first having a point forming die of the same caliber.   It does 
     not come with external punch for that reason.

     RBT-2-H   Rebated Boattail Add-On 2-die Set, Hydro-press
          This  set ounch  of  this die has a  cavity  that  determines  the 
     tip  shape.   You can order extra internal punches to make  flat  nose, 
     spitzer  tip,  or semi-spitzer (rounded end) tips.   This die uses  the 
     same  external  punch  as the point forming die,  and  cannot  be  used 
     without first having a point forming die of the same caliber.   It does 
     not come with external punch for that reason.

     RBT-2-H   Rebated Boattail Add-On 2-die Set, Hydro-press
          This  set o         The  combination of a core swage with bleed holes and the base and 
     nose  forming  punches of a semi-wadcutter or  paper-patch  rifle  core 
     swage die makes this die.  The weight is adjusted and the nose and base 
     formed  all  in  one stroke.   The die is used to make  lead  or  half-
     jacketed  handgun  and rifle bullets.   Typical rifle ogive would be  a 
     nose punch having a 1-caliber long,  eliptical shape.   Typical handgun 
     nose shape might be a Keith or wadcutter.   Other shapes can be made to 
     order.   Standard shapes include conical, Keith, round nose, wadcutter, 
     or hollow point,  and flat base,  cup base,  dish base, and hollow base 
     shapes.

     JSWC-2-H  Jacketed Semi-wadcutter 2-die Set, Hydro-press
          This  set breaks up the operation of weight adjustment  and  final 
     sizing  into two steps,  making it possible to use 3/4-jacket  lengths.  
     It  can also make lead or half jackets.   Since bullet noses and  bases 
     are formed by pressing against punches, there can be no curve or radius 
     of  the jacket away from full bore diameter.   The nose must be  formed 
     entirely  of lead,  with a small step between the end of the ogive  and 
     the  start of the shank,  also formed in the lead extending beyond  the 
     jacket.  

     FJFB-3-H  Full Jacket, Flat Base 3-die Set, Hydro-press
          The  3-die  set described under the Mity Mite section is also  the 
     basic  set for the power press.   Any caliber from .14 to .72  (or  so) 
     diameter  may  be ordered.   Standard calibers for  every  conventional 
     factory  bore  size  are available,  though demand is  quite  high  and 
     delivery  times depend entirely on the current backlog:   call or write 
     to get a copy of the immediate delivery list.          

     LTFB-4-H  Lead Tip, Flat Base 4-die Set, Hydro-press
          Lead  tip  bullets or open tip styles can be made with  this  set.  
     Generally,  the lead tip styles are for rifles, because a blunt handgun 
     ogive  can usually be formed with a lead tip even without  the  special 
     lead  tip  die.   Sharper ogives require the extra die to shape up  the 
     lead tip after the actual ogive is formed.

     RBT0-4-H  Rebated Boattail, Open Tip 4-die Set, Hydro-press
          The  open tip,  rebated boattail is a favorite amount  competition 
     rifle  shooters and is rapidly becoming popular among winning  metallic 
     silhouette shooters who use long range handguns.   The rebated boattail 
     can  be made in copper tubing jackets in the Hydro-press.   Hard alloys 
     are  also  feasible with these high pressure dies and  the  press  that 
     "thinks"  so  it  can  avoid  over-pressure  conditions  when  properly 
     programmed.

     RBTL-5-H  Rebated Boattail, Lead Tip 5-die Set, Hydro-press
          The  five  die  rebated boattail,  open or lead tip rifle  set  is 
     popular among shooters who take their firearms afield as well as to the 
     range.   Choosing  a  lead tip offers greater expansion than  the  same 
     weight  of open tip (and most people think it is the  opposite!).   The 
     open  tip  bullet brought to a small meplat (typically  less  than  0.1 
     inches  in diameter at the bullet tip) brings a considerable thickening 
     to the jacket tip.   Many factory bullets that were advertised as being 
     0.049-inch  wall  thickness showed over 0.060 inches at the  tip  as  a 
     result  of  this unavoidable thickening when the jacket is drawn  to  a 
     point.   Using  the lead tip gives you a greater opening at the  actual 
     jacket's end,  since the lead extends beyond it to serve the purpose of 
     a  smaller tip for better ballistics.   It is the jacket thickness  and 
     opening  size  that controls expansion,  rather than the mere  fact  of 
     whether or not the tip is open.

     FRB0-5-H  Flat or Rebated Boattail, Open Tip 5-die Set, Hydro-press
          A  set for the person who likes open tip (which is NOT the same as 

     hollow point,  no matter what some of the mass producers of bullets say 
     in  their literature) bullets,  but wants the widest possible range  of 
     weights.   Many  people purchase an extra point forming die,  as  well, 
     getting  a  6 or 7-S ogive for their longer range target work  and  for 
     more conventional weights,  then getting the extra PF-1-H in a 1-E or a 
     round  nose ogive (.5-E or .5-S -- it is the same thing) for  both  the 
     very  light  weights  (short shank and short nose) or  the  very  heavy 
     weights (long shank,  short nose).  The advantage of the blunt ogive is 
     that  it  gives  you a greater range of  useful  bullet  weights.   The 
     advantage  of  the  sharper  ogive is less drop  and  higher  delivered 
     velocity over a given range.

     FRBL-6-H  All Style System, 6-die Set, Hydro-press
          Finally,  the set that gives you everything.   This set makes  all 
     the  styles  of any of the other sets,  except that you would  need  to 
     order extra punches (PUNCH-H,  External,  specify caliber and shape) to 
     make  semi-wadcutter  noses in the core  seating  die.   Naturally,  it 
     doesn't make every possible ogive shape,  since the ogive is controlled 
     by the cavity lapped into the point forming die.   Various ogive curves 
     would  be  made  by ordering extra PF-1-H dies made  in  those  shapes.  
     Usually  one or two shapes will suffice for the widest range of hunting 
     and target shooting situations.

     LED-1     Lead Extruder Die Set, Hydro-press
          The lead extruder die set has a large heat-treated steel body that 
     fits into the press head, a long floating punch or piston assembly that 
     fits snugly into this die,  a series of four die inserts which  control 
     the  diameter of the lead wire you can extrude,  a bushing to hold  the 
     die insert into the top of the die, a pack of lead billets, and a mould 
     base with two mould tubes to make your own billets from scrap lead,  if 
     you wish.  Standard sizes of .185", .250", .312", and .365" die inserts 
     are included.   Others can be ordered in any desired size down to .125" 
     (which  is  the  smallest  size this extruder  can  safely  produce  -- 
     pressure and system size increase with the reduction in wire diameter).


     LED-D     Lead Extruder Die Insert, for LED-1
          The  die  insert for the LED-1 is a heat-treated button  which  is 
     about  three-quarters  of an inch long and equally broad,  made to  fit 
     precisely  into  the  top of the LED-1  extruder.   Corbin  also  makes 
     various  kinds of wire drawing dies for major lead  wire  manufacturers 
     and others involved in defense or sporting ammunition manufacture.  You 
     can  order a standard size for a caliber,  or you can specify a  custom 
     diameter.   Lead wire diameters depend both on the hole size in the die 
     and on the extrusion velocity and ambient temperature,  the lubrication 
     used  and the particular alloy being extruded.   If the application  is 
     critical,  it  may be necessary to purchase a set of dies in 0.001-inch 
     increments to adjust the size to your conditions and materials.

     LB-4      Lead Billet, Pack of 4, for LED-1
          Corbin  has  pure  (99.95  percent)  lead  billets  in  0.795-inch 
     diameter,  four inches long, sealed in packets of four.  A complete set 
     of  specifications  is included with each packet.   A  simple  Brinnell 
     hardness test can be made using a steel ball,  a vise,  and these known 
     hardness  cylinders  of  lead.   Details can be  found  in  the  Corbin 
     textbooks.

     RLA-1     Reloading Adapter Kit, Hydro-press
          This  is one accessory I would consider necessary with any  Hydro-
     press.  You would be amazed at the number of times you'll find yourself 
     putting  regular  type 7/8-14 dies and shell holders of the  RCBS  type 
     into your Hydro-press.   It is so fast and easy to set it up for  power 
     case  sizing and depriming,  using the automatic cycle.   Case forming, 
     military case conversion,  depriming crimped primers,  and other  tough 
     jobs  that put a strain on your progressive press are trivial jobs  for 
     the Hydro-press.   The bushing from the RLA-1 is required on JRD-1 type 
     dies,  which makes it possible to use your Mity Mite or Reloading Press 
     draw dies,  along with a different punch,  in the Hydro-press.  Come to 
     think  of  it,  you can use a reloading press  punch,  too,  with  this 
     adapter  kit.  (The  longer  Hydro-press  punches  are  sometimes  more 
     convenient, however.)

     RLA-50    .50 BMG Shell Holder, Hydro-press
          The  .50  caliber 1-1/2 inch threaded dies that CH and  RCBS  make 
     screw  directly into the head of the Hydro-press.   Using the reloading 
     adapter  kit,  you can screw this large shell holder directly into  the 
     ram extension that is part of the kit.  Primers are shunted to the side 
     and out an exhaust port in the side of the extender.   If you load  the 
     .50 Browning Machine Gun cartridge, this is a handy accessory.

     RFJM-22H  Rimfire Jacket Maker, 224 cal., for Hydro-press
          Why  not automate the making of free .22 jackets?   With the CHP-1 
     Hydro-press set for an automatic stroke cycle,  you can slip cases over 
     the punch and let the press shove them all the way through the die  and 
     out  the top in one stroke.   It certainly is more fun than doing it by 
     hand!

     RFJM-6MH  Rimfire Jacket Maker, 6MM cal., for Hydro-press
          The  6mm  or .243 caliber (also .244) jacket maker  utilizes  long 
     rifle or Stinger cases to make 65 to 70 grain bullets.   A special JRD-
     1-H  die  and punch set can be made to draw .22 Magnum cases to 6mm  or 
     .257  (undersized,   but  they  expand  nicely  in  the  core   seating 
     operation).

     SPJM-25H  Shotgun Primer Jacket Maker, 25 ACP cal., for Hydro-press
          For  50  grains and less,  a spent shotgun primer cup can be  made 
     into a good jacket for the .25 ACP or the .25-20,  .256 Winchester,  or 
     other  light-weight  quarter-inch bore.   The .25 ACP  uses  a  .251-2" 
     bullet  and the .25 rifles all use a .257" bullet,  but the same jacket 
     diameter works for making either.

```
{% endraw %}

## CHAPT-14.TXT

{% raw %}
```
.he CHAPTER 14 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                              CORBIN SWAGE PRESSES

          There  are  three  presses  currently made by  Corbin  for  bullet 
     swaging.   These are the Mity Mite press,  the Mega Mite press, and the 
     Corbin Hydro-press.  They are discussed in detail in previous chapters.  
     The  operation  of  the Corbin Hydro-press is discussed  in  the  book, 
     "Power Swaging", D. Corbin.
          On  special order,  Corbin has built air presses and other  custom 
     machinery for military and special ammunition manufacturing operations.  
     Whenever possible,  I would suggest that you consider the  Hydro-press.  
     This  machine will handle nearly any kind of job you have now or in the 
     future.   The cost of building special,  one-of-a-kind versions of some 
     other design, even if it appears to be quite a bit more simple, usually 
     involves  enough set-up and development time that a person  would  have 
     been  better  off financially to purchase the more  versatile  standard 
     product.
          A great many ideas which have merit also have development and set-
     up  costs associated with them,  which make them less economical than a 
     person  would  imagine  in  comparison  to  a  well-developed  standard 
     product.   I mention this because I am constantly asked to build or  at 
     least  to quote on modifications to reloading presses,  adding power to 
     the Mity Mite press, building dies that would fit into some punch press 
     or home-made press, etc.  
          The design of the press used for swaging has to be closely matched 
     to the punches and dies,  not only the ones made today but the ones you 
     might  need in the future.   Years of consideration have gone into  the 
     design of the present systems, in order to make them true systems which 
     work  together,   have  replaceable  components,   and  have  as   much 
     interchange as it is practical to obtain between various operations and 
     tools.  
          While  another press might be perfectly suitable to the one job at 
     hand,  when  one looks down the road a little way,  it becomes  evident 
     that  most  special  designs and modifications to  other  presses  have 
     built-in  problems with replacement parts,  expansion to new  products, 
     and  versatility.   Basically,  why re-invent the wheel every time  you 
     need  something different,  when so much time and thought  has  already 
     been put into developing swaging systems that can grow with your needs?
          It stands to reason that if a company makes thousands of identical 
     punches and dies, it will cost far less for much higher quality than if 
     they had to stop,  figure out what you need this time, and build it all 
     from  scratch.   In  the Corbin systems,  we have combined a degree  of 
     custom adaptation to your needs with a base of standard components  and 
     dimensions.   Thousands  of  blanks,  semi-finished parts,  are run  in 
     production.   Hundreds of  them  are turned into standard sets  in  the 
     popular calibers.   Then,  custom orders are filled using the  standard 
     dimensions  and  materials  with which the die-makers  have  become  so 
     familiar.  
          Rather than starting from scratch each time,  your custom order is 
     based  on  generations  of accumulated  experience  and  semi-finished, 
     standard  blanks  that can be more quickly finished to the exact  shape 
     and size you need without distrubing the versatility of the system.  
          The popular magazines often state that Corbin's major contribution  
     to  the shooting industry has been the development of a wide  range  of 
     swaging products and hundreds of articles on swaging techniques. I feel 
     that the most important single thing we have done for shooting has been 
     the development of the semi-custom production method, where most of the 
     benefits of mass production are retained,  and most of the benefits  of 
     totally hand-made,  custom products are still realized.  
          Small  wonder that Corbin has been swamped with orders for over  a 
     decade,  with no end in sight.   Prices are kept in the mass-production 
     range,  but the results are custom made with skilled die-makers working 
     one-to-one  with  you  on your order.   When I hear  someone  offer  an 
     improvement,  I listen... but looking at the whole picture, I think the 
     general welfare of most shooters is served well by the present course.

      
     CSP-1  Corbin Swage Press, Mity Mite Model
          The  Mity Mite is a 2-inch stroke,  balanced torque swaging  press 
     with  horizontal ram,  having the die in the ram and the external punch 
     in  a  floating  punch holder in the  press  head.   This  arrangement, 
     together  with  the  geometry of the  ram  and  punches,  permits  self 
     ejection on the back stroke.  
          The  CSP-1 press takes a die with 5/8-24 TPI thread,  which screws 
     finger-tight into the ram.   The external punch is held in the floating 
     punch holder (in the press head) by means of a hexagon-flanged threaded 
     bushing,  which slips over the punch and presses against its head.  The 
     floating punch holder and details of press operation are covered in the 
     prior chapter on the Mity Mite system.

     CSP-2  Corbin Swage Press, Mega Mite Model
          The  Mega  Mite  is a long-stroke,  balanced  torque  swaging  and 
     reloading press, built to accept reloading dies and shell holders, Mity 
     Mite  dies  and punches,  and Hydro-press dies  and  punches.   Various 
     adapters  and inserts change the press to suit the kind of  dies  being 
     used.  
          The  Mega Mite is quite possibly the strongest and most  certainly 
     the most precisely built hand press available for the handloader today.  
     It  is  machined from steel,  with the ram moving on  bearings  against 
     hardened  and  ground guide rods.   While it cannot substitute for  the 
     power and stroke control of the electronically controlled  Hydro-press, 
     the  CSP-2 fills a need for those who wish to manufacture bullets  just 
     larger  than the sizes which the CSP-1 can handle,  or in harder alloys 
     than are recommended for the CSP-1 dies.  
          Because  many other reloading manufacturers have  concentrated  on 
     progressive  type  presses,  most of which do not have the strength  or 
     simple rigid design features required of a heavy-duty reloading  press, 
     the  CSP-2  finds  use  as the ultimate hand  press  for  the  advanced 
     handloader  as  well as a premium choice for the person who  wishes  to 
     invest in only one universal handloading press.

     CHP-1 Mark IV  Corbin Hydro-press
          The  Hydro-press (trade-marked name of the CHP-1 series) has  gone 
     through  four generations of development.   The current model (Mark IV) 
     incorporates  all the features of the earlier models,  plus  electronic 
     proximity  sensing transducers and pressure  transducers,  solid  state 
     dwell time control,  and accuracy far beyond the ability of an ordinary 
     hydraulic or manual press.  
          The  great  power  of this system is secondary  to  its  precision 
     control.  The ability to precisely set stroke length, maximum pressure, 
     the  time the pressure will be held,  the speed with which the ram will 
     move,  and the point of ejection of the bullet (as well as the stopping 
     position for loading in another component),  is coupled with programmed 
     stroke cycles that offer manual, one-stroke, or automatic stroke modes.
          Even  the various modes offer programmable methods of  determining 
     how the component will be formed.  Operations which depend upon precise 
     volume  generation  use  electronic position sensing and  stop  when  a 
     precise volume has been achieved in the die.   Operations which  depend 
     more  on accurate pressure levels use the built-in pressure transducers 
     to  apply  a  pre-set level of pressure and then hold  it  for  a  pre-
     determined  length of time before backing off the ram and ejecting  the 
     part.
          The  ram  can be set to move like the hour-hand of  a  clock,  for 
     set up of a new operation.   Then, the throttle control can be adjusted 
     for  ram  velocity  of up to 120 inches per minute -- faster  than  any 
     conventional electric hydraulic system of 20-ton capacity,  capable  of 
     operating from ordinary household current.  The secret is the multiplex 
     or time-shared technology that makes the system appear to be developing 
     impossible  efficiency  from the 1.5 HP motor,  gaining both speed  and 
     pressure out of proportion to the power used.
          Since  swaging  only  requires maximum power at  the  end  of  the 
     stroke,  most  operations  utilize the high speed only to move the  ram 
     into  position and apply the first 500 psi of drive pressure.   If  the 
     system  calls for more than 500 psi drive,  then the second pump  takes 
     the load and moves up to 2000 psi more pressure into the lines.   Since 
     the  movement  has already been handled by  the  high-speed  pump,  the 
     automatic  pressure  switching  circuits make the press  appear  to  be 
     running  at  both  high  speed  and high pressure  at  the  same  time.  
     Actually, the system switches from one mode to the other instantly, and 
     is  only using the exact amount of power required to handle either  one 
     or the other.
          The  drive  line pressure is multiplied 8.3 times  by  the  system 
     before  being applied to the swage punches.   A drive line pressure  of 
     only  1000  psi produces 8300 pounds of ram force.   The ram  force  is 
     further  multiplied  by  being channeled through the punch  face  area,  
     which can result in pressures well over 170,000 psi inside of the swage 
     die.   A  chart of pressures in the dies for a given gauge pressure  on 
     the CHP-1 can be found in the book "Power Swaging".

     EX-10 Lead Wire Extruder
          This machine is not a swage press, but a special purpose lead wire 
     manufacturing machine for commercial operators.   It is one of the most 
     economical and versatile extruders available today,  costing a fraction 
     of  what most lead plants have had to invest in  their  machines.   For 
     making spools of 1,  5,  or 10 pounds of lead wire, hollow core fishing 
     wire,  or special extruded shapes for stained glass work, the EX-10 can 
     serve as the basis for a profitable home business.   Utilizing a 2-inch 
     diameter  billet,  the EX-10 operates from 220 volt single phase 60  Hz 
     power  (using the same kind of electricity as a standard electric dryer 
     or  range in the USA -- special versions can be built for 50 Hz  or  3-
     phase operation).  
          The ram automatically advances into the huge extrusion die, and is 
     controlled by pressure transducers.  When the pressure reaches a preset 
     safe level at the end of the stroke, the ram reverses and retracts from 
     the die.  If anything should cause the system to meet undue resistance, 
     the  ram will reverse and back out of the die.   At the full extent  of 
     the  back-stroke,  the  ram stops and the system goes into  idle  state 
     again, waiting for another billet to be inserted.
          Lead extruded from the EX-10 can be coiled or cut as it comes out, 
     in order to make convenient packages.  Extrusion rate is fast enough to 
     be  practical,  yet slow enough so that it is easy to handle the output 
     without  expensive high speed coilers and feeds.   Even a simple  hand-
     wound  bobbin  is adequate.   The billet size and  machine  design  are 
     suitable  for one-man handling and operation.   Unlike larger  machines 
     which use billets too large for safe handling by one person,  the EX-10 
     makes a compact package for the garage operation.
```
{% endraw %}

## CHAPT-15.TXT

{% raw %}
```
.he CHAPTER 15 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                         ACCESSORIES FOR THE HYDRO-PRESS

          The  Hydro-press  comes with a standard floating punch  holder,  a 
     tank  of hydraulic fluid (you may need to add a little),  and  the  USA 
     models  comes with a standard 115 volt power cord.   Export models come 
     with  a  power  cable but without a plug,  or with a  plug  matching  a 
     standard US 3-prong 220 volt outlet (which may have to be replaced with 
     a  plug meeting conventional standards for the country to which  it  is 
     exported).
          The  machine is designed to operate with Corbin swage dies of  the 
     Hydro-press  type without any optional accessory items.   The  external 
     punches  fit  into  the punch holder and the dies with  their  internal 
     punches screw into the press ram.   There are a number of items which a 
     commercial  operator  would be wise to have on hand,  either  as  spare 
     parts  or  as  accessory supplies to increase the  versatility  of  the 
     machine.                


     FPH-1-H  Floating Punch Holder, Hydro-press
          One comes with the press.   Having extras with the punch installed 
     and  a  locking nut secured makes it possible to pre-set commonly  used 
     punch depths for quick installation.  One can also order this unit with 
     a hole and retainer bushing size for 12 gauge shotgun and other  larger 
     calibers  (70  caliber and up).   Specify the "shotgun"  version.   The 
     regular  punch  holder  does not work with huge  12  gauge  and  larger 
     punches.


     A-220V    220 Volt Power Option, Hydro-press
          For  use  on  50-60 Hz single phase 220  volt  current,  which  is 
     standard line voltage in many countries besides the United States,  one 
     should  order  the  Hydro-press  with this  option  factory  installed.  
     Conversion  in  the  field is NOT  recommended,  although  a  qualified 
     electrician  can do it with the correct  components.    The  conversion 
     includes  an  internal  transformer  so  that  the  standard  115  volt 
     indicator lamps and electronic circuits can still be used (one does not 
     need  to purchase special 220 volt bulbs,  etc.,  for the machine after 
     the conversion).


     RY-1      Logic Relay, Hydro-press
          There  are a number of logic relays in the Hydro-press to  control 
     various  functions.   They are highly reliable and  interchangable,  so 
     that it is easy to troubleshoot a potential defective relay by changing 
     it with one of the others to see if the problem goes away or shifts  to 
     another function.  It is a good idea in isolated areas, or for critical 
     schedules,  to  have  at least one spare logic relay on hand  "just  in 
     case".   Logic relays plug into sockets in the Hydro-press.   They only 
     go in one way, so it isn't possible to put them in "backward".


     PUNCH-H   Punch, Hydro-press
          As  with the other swaging systems,  the Hydro-press system can be 
     expanded  to other operations by adding optional external  or  internal 
     punches to an existing die set.   To order any punch,  as a replacement 
     or spare,  or as a new option, use this catalog number, followed by the 
     caliber,  whether  INTERNAL or EXTERNAL,  the kind of die it works with 
     (such as CS-1,  PF-1,  etc.),  and any special face shape or  diameters 
     that  are needed to make it work for your application (as,  Keith nose, 
     or diameter to fit inside sample jacket provided with order).


     TDL-1     Timer Module, Hydro-press
          An  electronic  timer module,  also known as a time  delay  relay, 
     controls the dwell time at the top of the Hydro-press stroke.   You can 
     adjust it for any desired dwell,  from milliseconds (0.001 seconds)  to 
     several  seconds.   A top-panel knob gives you immediate control of the 
     dwell  time on mid-1986 and later models.   The solid-state  electronic 
     module is very reliable,  but it is easily changed by plugging in a new 
     unit  if  trouble  should  ever  develop.    In  critical  or  isolated 
     situations, a spare module is a good idea.


     PDX-1     Position Transducer, Hydro-press
          The  electronic position transducers are  sophistocated  proximity 
     detectors, which sense the position of the ram by the near-field effect 
     of  a magnetic detector circuit inside the unit.   These small threaded 
     cylinders hold a considerable amount of electronic circuitry,  and  are 
     highly reliable.   A red LED indicator shows you if the unit is working 
     by lighting when steel objects come close to the sensor face.
          There  are  THREE of these transducers on the mid-1986  and  later 
     model  Hydro-presses,  replacing  the earlier  Micro-Switch  roller-arm 
     limit switches.   They offer remarkable accuracy and ease of adjustment 
     -- simply  slide  them up or down their steel standard to set the  top, 
     bottom,  and loading positions for the press stroke.   However,  if you 
     should  happen to physically set the transducers too close to the  ram, 
     you can run the ram into one and smash it.   Replacement is  moderately 
     easy:  remove the back cabinet cover, and trace the shielded cable from 
     the broken transducer to the terminal strip on the logic board.  Loosen 
     the  screws and remove the wires from the unit to this terminal  strip, 
     and replace the new transducer with the same connections.
          If  you are careful not to adjust the transducers forward so  they 
     obviously  are in the path of the moving ram guide plate,  this  damage 
     will  never happen.   It is not really necessary to adjust the position 
     horizontally at any time.    Vertical adjustment is made by sliding the 
     transducer up and down on the standard,  in its slot.   Finger pressure 
     is  all  you need to hold the transducer locked in  position  with  its 
     locking   nut.    This  is  a  spare  part  that  probably  won't  need 
     replacement,  but in very remote areas and critical applications, where 
     being out of operation for a week or ten days would cost more than  the 
     transducer, it is a good idea.


     SV-1      Solenoid Valve, Hydro-press
          The  main  hydraulic  control in the press is the  4-way  electric 
     valve  that  switches  oil  flow direction in  and  out  of  the  drive 
     cylinder.   This valve usually has a very long life, but can be damaged 
     by contamination in the hydraulic fluid, incorrect kind of fluid, chips 
     or dirt in the fluid,  or normal wear.  Since it takes about 30 minutes 
     to remove the old valve and install a new one, the first time, it isn't 
     a troubleshooting technique to do this routinely and spares are usually 
     a good idea only if the application is very critical.  The main symptom 
     of a bad valve is erratic movement or variation in speed from stroke to 
     stroke,  loud noises from hydraulic fluid vibrating as it tries to move 
     past a partly stuck valve opening, failure to stop at the top or bottom 
     position  of the stroke,  and other failures related to ram movement or 
     speed that are erratic in nature or produce accompanying loud noises.
          A defective solenoid valve does not cause harm to the  press,  and 
     can  be operated if you can put up with the symptoms.   But one failure 
     mode  (where  the valve sticks in position instead of  switching  every 
     time) can cause the press to continue upward when it should be stopped, 
     and this can cause a problem (such as extruding all the lead out of the 
     core  swage  die  instead  of  making  the  right  weight  of   core!).  
     Fortunately,  such  problems  are extremely rare.   The solution is  to 
     remove the valve and replace it.
          Solenoid  valves  do  not  require removal  of  any  plumbing  for 
     replacment.   They  are  mounted on a sub-plate which carries  all  the 
     steel  tubing and ports.   The valve control wires (4) unplug from  the 
     rest  of  the system using a very obvious connector that you  will  see 
     when  you  open  the cabinet and trace the wires out  of  the  solenoid 
     valve.   A cover plate on top of the unit removes (with corner  screws) 
     to  expose  the box that holds the wire connections and also gives  you 
     vertical  access  to the corner scews that hold the valve on  the  sub-
     plate.
          Removal  of  these  corner screws allows you  to  lift  the  valve 
     straight  up,  off the sub-plate.   A small amount of oil will  trickle 
     out,  but  as  long as the pump is turned off there will be no need  to 
     worry about a flood of hydraulic fluid.  There are four o-rings on four 
     recessed port openings beneath the valve,  which you must make sure are 
     not lost.   Other than that, replacement is as simple as unplugging and 
     unscrewing the old valve, and putting the new one in its place. 
          Since  this  component is moderately expensive,  and  is  kept  in 
     stock,  it  is not something that most people need to stock as a spare.  
     The  ends  of the coil housings contain a movable manual  plunger  that 
     shifts the valve so you can test the operation.   If a symptom  appears 
     that you suspect is related to a sticking valve, press on the center of 
     one  and  then the other end cap (solenoid valve covers) with  a  small 
     dowel  to push the valve spool and help it shift into correct  position 
     while  the press is trying to run.   If this cures the problem then the 
     valve  is probably at fault.   The right end to push depends  on  which 
     direction the press is running.   One must be careful not to reach into 
     the  top panel electric wiring while fooling around inside the  cabinet 
     -- we  recommend  bringing in a qualified electrician for any  internal 
     service work.


     CHF-128   Corbin Hydraulic Fluid, Gallon Can
          Spare fluid is handy if you should ever need to replace a  fitting 
     or  if  you  spill fluid while moving the press.   If the  press  isn't 
     tipped too far,  but is kept vertical while moving, it should not spill 
     any fluid.   Fluid lasts for years in a typical operation without undue 
     contamination.   Condensed moisture,  bits of metal powder from natural 
     wear of the pump vanes and valves,  heat by-products in the fluid  from 
     long,  hard use, and dust from outside the system are potential reasons 
     why you might want to change the fluid after a few years of operation.
          A  combination of temperature and oil level gauge is located right 
     on the oil reservoir,  inside the cabinet.   You can easily see if  the 
     fluid  is low or the temperature rises above the recommended maximum of 
     140 degrees F.   Extended use at high temperature will cause the oil to 
     break  down,  and  can  lower the pressure you are  able  to  generate.  
     Eventual failure of the cylinder and valve seals,  as well as those  on 
     the  pump,  result from prolonged high-temperature operation above  the 
     recommended  levels.    Low  fluid  level  leads  to  high  temperature 
     operation  since  the  oil  does not have sufficient  thermal  mass  to 
     transfer  and adsorb the heat over the back surface of the tank  (which 
     is designed to act as a heat exchanger with the air compression of  the 
     dual  cooling  fans and air expansion during exit through the  closely-
     spaced exhaust grill.


     IL-1      Logic Indicator Bulb, Hydro-press
          Telephone-quality  115 volt indicator bulbs are used in  order  to 
     provide  bright  display  of the status of  the  logic  circuits.   LED 
     indicators  were  not chosen here,  since a clearly-visible display  in 
     bright light was deemed necessary for operator safety.  Spare bulbs are 
     a good idea.  They are not expensive and last a very long time (typical 
     bulb life is over 10,000 hours).   The bulbs are changed by  unscrewing 
     the  colored caps from the indicators,  and pulling straight out on the 
     glass bulb.  There are THREE IL-1 bulbs in each Hydro-press.


     IL-2      Work Lamp Bulb, Hydro-press
          The inspection lamp has a pre-focused ellipsoid spotlight bulb  of 
     the  R-14  type,   with  screw  base.   This  bulb  provides  excellent 
     inspection  lighting  with low power and heat.   It is a 115 volt  bulb 
     with a long life in normal use.   A spare is handy.  Only one such bulb 
     is used in each Hydro-press.

     FSO-16    Corbin Gun Oil, Pint Can
          This  instrument  grade  ISO-15  oil  is  highly  recommended  for 
     lubrication of the ground rods and bearings in the Hydro-press head, as 
     well  as  for preservation of the dies and punches while  they  are  in 
     storage.  It is a very economical product that works quite well as both 
     an instrument and lathe oil.  Originally marketed as Five Star Gun Oil, 
     the  pint  can contains as much oil as EIGHT conventional 2-ounce  cans 
     for about half the price.
```
{% endraw %}

## CHAPT-16.TXT

{% raw %}
```
.he CHAPTER 16 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                                 BULLET JACKETS


          Bullet  jackets are available from Corbin in popular calibers  and 
     lengths.   The current list is always available from Corbin on request.  
     The  typical  packaging is in boxes of 250 jackets for larger  calibers 
     and  lengths,  and  in boxes of 500  units  for  half-jackets,  smaller 
     calibers, and shorter lengths.  
          Gilding metal jackets with very consistent wall thickness and with 
     an expansion controlling taper from edge to base are usually about half 
     the  cost  of a quality bullet made from the same  material.   In  some 
     cases,  you can save considerably more.   In a few cases,  you can find 
     surplus  or low-cost factory bullets that are available for  about  the 
     same price as a good quality jacket.  
          In  the  .224 caliber,  this is often the case,  since many  firms 
     contract  with the government to manufacture .223 bullets and  can  use 
     much  of  this  investment  in  machinery to turn  out  low  cost  .224 
     projectiles for reloaders.   However,  in the .224 market, you can also 
     make  FREE jackets using fired .22 cases,  so you have the  last  laugh 
     anyway!
          Sizes  and lengths that are not popular enough (yet) to be stocked 
     can  often  be made from existing calibers  and  lengths.   Any  larger 
     caliber can be drawn down to a smaller size in a simple draw die,  such 
     as  the Corbin JRD-1.   The reduction usually is practical from .284 to 
     .270, from .270 to .257, and from .243 to anything down to a long heavy 
     .224 jacket.  
          Sub-calibers can be drawn from .224 jackets,  and pinch trimmed to 
     length in the same operation.   Jackets can be pinched off as they pass 
     through a constriction to the next smaller caliber size,  by having the 
     punch that pushes them through the draw die made with a shoulder.   The 
     smaller  diameter  of the punch,  from the shoulder to the end  of  the 
     punch,  is made to fit inside the reduced diameter of the jacket.   The 
     larger  diameter from the shoulder back to the base of the  punch  just 
     fits  through  the draw die by itself,  leaving no room for any  jacket 
     material.  
          A  minimum reduction of at least the thickness of the jacket  wall 
     is  required to do this pinch-trim operation.   But it works  well  and 
     gives  you one more tool to control your jacket supply.   In many cases 
     there is no need to reduce a jacket length as well as its diameter.   A 
     .41  and  a .40 caliber jacket can both be drawn from  a  standard  .44 
     jacket,  for instance.   Taking the jacket down in two steps is usually 
     better than trying to reduce it all at once.
          Copper  tubing provides for a superior jacket in calibers from 7mm 
     up.   Conventional water tubing such as type L hard drawn copper  works 
     very  well and makes bullets so accurate you would swear they came from 
     a custom bullet works (and,  come to think of it, they DID: -- YOURS!).  
     Tubing normally costs more than conventional jackets unless you find  a 
     good  deal  on  a  large  lot,  or have an uncle  in  the  plumbing  or 
     commercial refrigeration business.   Typical prices at this writing are 
     about five cents average price for a good commercial jacket,  and about 
     eighteen  cents  average  price for a pre-cut and  de-burred  piece  of 
     tubing.
          If you cut and de-burr your own lengths of tubing,  then of course 
     the  cost  can  be  lower.   It is still hard  to  beat  the  price  of 
     commercial jackets.   Trouble is,  they are not always available in the 
     calibers you want,  and they are usually much thinner than you need for 
     big  game.   Premium quality game bullets selling for as much as  $2.50 
     each can be reproduced for about eighteen to twenty cents, and they can 

     include partitions,  bonded cores, selective jacket thickness, brass or 
     steel  as  well  as pure copper jacket material,  plus the  weight  and 
     styles you want instead of those someone else wants to make for you.
          Those  are some of the reasons people often choose to make  tubing 
     jackets even when commercial ones are available at lower  cost.   Price 
     is  often  a secondary consideration when people get serious about  big 
     game,  defense,  or  competition shooting.   Performance is the  issue.  
     After  all,  taken to its extremes,  a fellow only worried  about  cost 
     should get a slingshot:   it throws a cheap projectile!  When you start 
     saying, "...but what about accuracy, expansion, delivered energy, etc., 
     ",  then  it becomes important to start weighing these factors  against 
     the cost of equipment to achieve them.  Tubing jackets, made correctly, 
     can  be  such  huge steps above ordinary jackets that  cost  really  is 
     out-distanced by performance.
          Corbin  supplies cut pieces of copper,  brass,  or steel tubing in 
     the 0.030,  0.049,  and 0.065-inch wall sizes.   Cut pieces are made to 
     order  (so  they are non-returnable) for the weight and style  of  your 
     caliber.   A minimum run is 100 pieces of stock material, 200 pounds of 
     custom material.   If you do want a custom wall thickness or alloy,  we 
     can probably get it made or make it for you, in the 200 pound minimums.  
     Prices typically have been running about $6 per pound with cutting  and 
     material included, but write for an accurate quote.
          
```
{% endraw %}

## CHAPT-17.TXT

{% raw %}
```
.he CHAPTER 17 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                                      LEAD

          Corbin  supplies  lead in several forms,  including lead wire  and 
     lead billets made to fit our extruder dies and machines.   We are not a 
     primary supplier of large quantities of lead,  however,  and  recommend 
     that  you locate a lead firm near your bussiness area for large lots of 
     lead.   If you wish to enter the extruded lead wire market, we can help 
     you  with machinery and billet moulds,  but we do not manufacture  lead 
     pots and would recommend that you contact the cast bullet suppliers for 
     these. 
          Corbin lead wire comes in sizes that are suitable for all calibers 
     of  rifle and handgun bullets.   The size of the wire usually  is  much 
     smaller  than the caliber of the bullet,  since the wire is made to fit 
     into a jacket.   Jackets are usually smaller than the caliber by a  few 
     thousands  of  an inch,  themselves.   Everything expands upward  under 
     swaging pressure to make a uniform, tightly fitted bullet.
          Custom  diameters and alloys are available on special order for  a 
     different price than the stock pure lead in standard  diameters.   When 
     you  order lead wire by caliber,  we supply the size that fits into the 
     standard  jacket for that caliber unless you specify some  other  size.  
     If  you order at the standard price and catalog number,  but specify  a 
     special size, then we supply the nearest stock size that appears likely 
     to fit into your jacket.  
          Lead  wire can be very economical,  depending on the caliber.   In 
     .224 caliber,  for instance,  a single 25-lb.  spool of lead wire makes 
     well  over 4,300 conventional 50 grain bullets (the jacket weighs  over 
     10  grains).   Even with coast-to-coast shipping,  your lead  cost  per 
     bullet is about one cent.  Who needs to bother with casting cores, when 
     you can snip off lead wire for that low a price?  On the other hand, if 
     you  already  have plenty of lead,  you may as well use it with a  core 
     mould, which makes around 1000 cores an hour.
          
     LW-25     Lead Wire, 25-lb. Spool
          To  order lead wire,  specify caliber or diameter you need to  fit 
     into  your jacket or core swage die.   Standard  diameters  are:   .125 
     (1/8") for .17 caliber,  .156 (5/32") for .20 caliber, .185 (3/16") for 
     .224,  .243, .25 caliber, and thick-wall .270 caliber, .218 (7/32") for 
     thin-wall  .270,  .284,  and thick-wall .308 caliber,  .250 (1/4")  for 
     .308,  8mm,  and other calibers up to .338 plus some tubing jacket big-
     bores,  .312 (5/16") for .38/9mm,  .358,  .366, .375 and some big bores 
     with  tubing jackets,  .340 (11/32") for the .40 and .41 calibers,  and 
     .356 (3/8") for most big bores except those with thick jackets.
          The  decimal size is the right one -- the fractional size  is  the 
     nearest  size you will normally find elsewhere.   Corbin makes wire  to 
     the  exact  size that fits rather than to match the  common  fractional 
     diameter.   However, you can use the next smaller wire in any jacket so 
     long  as  there is enough bulk to it that your desired  weight  doesn't 
     come out too long to fit into the die.
          Custom sizes and alloys are available but they are not stocked and 
     there is an additional cost involved in making special drawing dies and 

     in  getting a special alloy drawn.   A minimum of 100 pounds applies on 
     any special diameter or alloy.
          Stock lead wire is made in 99.95% chemically pure lead with  trace 
     silver,  packaged on spools of 25 lbs., and is not sold in smaller lots 
     since  this would be a costly way to stock and sell wire.   Many Corbin 
     clients  do  manufacture  lead wire in smaller lots  for  other  bullet 
     makers.   The book "World Directory of Custom Bullet Makers" is full of 
     information  by  and about other bullet makers who can  help  you  with 
     these  purchases.   If you wish to make lead wire or bullets for  sale, 
     please  request  a form to allow us to list your business in  the  next 
     edition of this directory.   


     LB-4      Lead Billets, Pack of Four             
          This is a package of four chemically pure Bh 5 hardness 0.795-inch 
     diameter  cylinders,  four  inches long.   The package  weighs  5,687.5 
     grains  and  the density of the lead is 0.4092 pounds per  cubic  inch.  
     You can use this as a test standard for other lead,  or as raw material 
     to extrude excellent wire in the Hydro-press LED-1 extruder kit.


     LB-5      Lead Billet, 1.5-inch Diameter
          These  billets are for melting down,  primarily,  although you can 
     use them to make 5 pound lengths of wire in an extruder.  If you need a 
     source for good quality pure lead,  and cannot find anyone near to you, 
     we  stock  a  moderate  quantity of these billets  to  help  solve  the 
     problem.


     BMT-1     Billet Mould Tube, for LED-1
          The LED-1 Lead Extruder Die kit comes with two mould tubes to make 
     your own 0.795-inch billets.   If you need more, these tubes are honed, 
     blued,  and ready to slip over the steel mould base that you fasten  to 
     your workbench.   Fill them full, pull them off the base, and give them 
     a shake to slide the billet out!

     
     PCS-1     Precision Core Cutter 
          The  Corbin  precision core cutter uses a pair of  hardened  steel 
     dies  which  slide over each other to slice off pieces of lead wire  to 
     proper  length.   You can adjust the length with a threaded stop  screw 
     that is supported by a steel bar below the dies.  The cutter comes with 
     a complete set of dies in standard wire sizes.    The dies are held  in 
     the two cutter bars by set screws and are easily changed.
          Mount  one bar of the cutter to your bench.   The other has a nice 
     padded  handle  that  you pull to cut the wire.   Push  the  wire  down 
     through the stationary top bar and die,  with the handle in a  straight 
     line  so the dies are above each other.   Adjust the stop screw so that 
     the lead wire will shear off at the length you wish (weigh a few pieces 
     to adjust the length for the right weight).   The stop screw can be set 
     off  to just catch the edge of the lead,  so it doesn't drag across the 
     top of the screw.   This gives you more accurate weights.   The  Corbin 
     Precision Core Cutter is made for soft lead to .365-inch diameter,  and 
     will  handle  lead of Bhn 10 hardness up to .312-inch  diameter.    For 
     larger diameters,  or for alloys up to Bhn 22 in any size,  I recommend 
     the PCS-2 "Magnum" model, instead.


     PCS-2     Corbin "Magnum" Core Cutter
          This  huge  version of the PSC-1 is built with  over-sized  pivot, 
     extra  large  frame and handle,  and accepts much larger diameter  dies 
     than  the PCS-1.   We make this on special order -- it is not  a  stock 
     item  -- and  will make the dies at the same time,  to fit any size  of 
     wire  you wish up to half an inch in diameter!   Few people  need  this 
     tool,  but  for those who do,  it is available from the die-works  that 
     makes whatever you need to produce bullets.


     PCS-D     Core Cutter Die, Pair
          Sometimes  people  lose  a die or need a different size  for  some 
     reason.  If you need a standard size, they are very inexpensive and are 
     in stock for each of the standard wire diameters (we use the  .365-inch 
     wire  die  for  the .340,  since it works just fine).   If you  want  a 
     special  diameter,  this can be made at standard shop rate rather  than 
     the stock die price.  Normally there is no need for any size other than 
     the  standards.   These dies are for the PCS-1 standard core cutter and 
     are kept in stock in standard sizes.  I recommend that you use standard 
     sizes in the PCS-1, and order your custom diameters along with a PCS-2, 
     since the cost will be about the same either way for custom work.

     
     CM-4      Corbin Four-Cavity Adjustable Weight Core Mould
          Turning your own scrap lead into useful lead cores is easier  than 
     casting bullets, and much faster.  These moulds do not require handles.  
     One  arm mounts to the bench.   The mould projects from the bench,  and 
     hangs over the edge.   The other arm is a sprue cutter,  but a long one 
     that doesn't need to be beaten to open it.  
          There  are four pistons and cylinders in the mould,  just  like  a 
     four-cylinder  in-line car engine.   The engine head would be like  the 
     sprue  cutter.   Adjustable weights screw up and down on the bottoms of 
     four connecting rods that project from the cylinders.   You can set all 
     four  cavities to have exactly the same displacement by means of  these 
     adjustment weights.  
          The  over-all weight range is from zero to some large maximum  for 
     each standard caliber.  This is achieved by resting the four pistons on 
     a sliding captive bar,  which we call a rest plate.  The rest plate has 
     two over-sized holes that let it slide easily up and down on a pair  of 
     threaded  rods.   The rods have a locking pairs of nuts on them,  under 
     the holes in the rest plate.
          You  adjust  the  weight by setting the nuts  on  the  rods,  thus 
     changing  the displacement or volume in all four cylinder at one  time.  
     To  eject  the cores,  you open the sprue cutter by pivoting it to  one 
     side, and then press up on the rest plate.  It easily moves up, pushing 
     all four pistons at once in front of it,  and pushing the cores out the 
     top of the die!  
          Core moulds are made in all standard sizes from .224 to  .458,  in 
     the same step ranges as the lead wire.   For sub-calibers,  Corbin does 
     not  make  a  core mould.   It is not worth the trouble to  cast  these 
     cores, when you can easily extrude a life-time supply using a LED-2 kit 
     in  your  Mity Mite press!   The LED-2 uses a  regular  .44/45  caliber 
     (.365") core mould for its billet supply.


     CM-I      Core Mould Insert (Piston & Cylinder Unit)
          Each  Corbin  Core Mould has four piston and  cylinder  units,  or 
     inserts,  installed in a steel frame with set screws.   You can  change 
     these if you wish, to use one core mould for several calibers.  I would 
     advise  a  person with a fairly active shooting schedule not to  change 
     inserts, but to purchase a mould for each caliber.  
          First, you will find that it is faster and much more convenient to 
     have a complete,  ready-to-use mould when you want to make cores.  Time 
     is  short  enough for enjoying the shooting part and most of  us  don't 
     need  to  waste any of it if there is a faster way to get  the  bullets 
     made.   Second,  you will find that after changing the mould inserts  a 
     few  dozen  times,  they are hard to get in and out.   This is  because 
     every  time you tighten the set screws,  you raise a little burr  which 
     eventually  builds  up the diameter of the insert so it won't  fit  the 
     frame.
          The  interchangability is fine for someone who only changes  mould 
     inserts  a few times a year.   You can easily stone off the burrs  that 

     result  on the mould inserts.   Eventually,  if you change  them  often 
     enough,  they  get  sloppy in the mould frame and have to be  replaced.  
     The best plan is to use a separate mould for each caliber as originally 
     intended  for  this design,  and to use replacement inserts  only  when 
     damage or dirty,  gritty lead spoils the honed inside of the die insert 
     and makes the lead stick.

     
     CM-2      Corbin "Magnum" Core Mould, Two-cavity Adjustable Weight
          This  adjustable weight two cavity mould is a huge version of  the 
     CM-4,  which has more cavities but is limited to diameters of .365-inch 
     and less.  When you want a special, larger diameter, order one of these 
     moulds  custom made to your requirements.   Custom inserts are no  less 
     costly  for  the CM-4,  and you may as well have the  larger  equipment 
     since it will stand up longer when used with large diameters.
          For  diameters  of half-inch and less,  the CM-2 offers  a  rugged 
     steel  frame with interchangable mould cylinders and pistons,  made  to 
     your  order.   These  are not stocked,  and there will  probably  be  a 
     waiting  list.   Examples of possible need for this mould would be  the 
     case  of  a person who wants to manufacture a lead .50  caliber  Sharps 
     bullet and wants a mould to turn out .490-.495 inch cores.  

```
{% endraw %}

## CHAPT-18.TXT

{% raw %}
```
.he CHAPTER 18 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                             TOOLS FOR BULLET MAKERS

          The  basic  tools  of swaging are the press  and  dies.   We  have 
     already  discussed the core mould,  core cutter,  and the  supplies  of 
     jackets  and  lead.   Beyond this,  most tools are to help you  prepare 
     commercially-acceptable  bullets for sale or to help you  make  bullets 
     more quickly, easily, or with a wider range of performance.
          Some  of  these  special tools involve controlled heating  of  the 
     components.   For  instance,  you  can make bonded core  bullets  using 
     Corbin Core Bond and either a Flameless Heat Gun (FHG-1) or one of  the 
     electronic  Heat Treatment Ovens (HT0-1 or HTO-2).   Heating the jacket  
     materials to precisely controlled temperatures gives you the ability to 
     control  the  ductility  and  expansion in  a  way  that  most  people, 
     including many otherwise experienced shooters (and writers) never dream 
     is possible.
          A  cannelure is not something that your bullets must have in order 
     to function properly, but it can add value to your commercial offerings 
     and  perform  useful functions in your own  handloads.   The  cannelure 
     tends  to  stop  expansion  of the jacket within  a  limited  range  of 
     deceleration  rates,  and  helps  hold the core within  the  jacket  on 
     impact.   It gives you an area into which the case mouth can be crimped 
     if  you wish to do this.   And it identifies the bullet and points  out 
     the correct seating depth if you wish to make it do so.              
          Bullets that have been polished to a high gloss have greater sales 
     appeal than mottled,  dull bullets,  even if there is no difference  in 
     their actual performance.   The BPK-1 Bullet Polisher Kit is a safe and 
     easy way to polish bullets, since it operates on the opposite principle 
     of  a case tumbler.   Case tumblers roll the components around  against 
     the media and each other.   They work fairly quickly, but they are also 
     rough  on the exposed lead tips of your bullets.   Vibratory  polishers 
     work  by rapidly shaking the polishing medium against the slowly moving 
     component.   In other words,  the medium does the moving instead of the 
     component  (although  the bullets do slowly move round in  the  boiling 
     mass  of polishing material).   This keeps the bullets themselves  from 
     striking each other with such force that the tips are damaged.
     
     HCT-1     Corbin Hand Cannelure Tool
          No,  it  isn't for canneluring your hand:   the HCT-1 uses a hand-
     turned  crankshaft  to  put  professional  cannelure  grooves  on  your 
     bullets.   A  cannelure (that's CAN-A-LOOR) is a ring or groove  around 
     the circumference of the bullet.   Little serrations on the groove help 
     the cannelure wheel get a grip on the shiny bullet surface, and let you 
     put as deep a groove as you wish into it.
          The  HCT-1  tool received high marks from  the  American  Rifleman 
     staff  in a report in the "Dope Bag" of December,  1985.   Since  then, 
     we  have  found ways to make it even better,  with  knurled  adjustment 
     knobs  to  set the bullet position and cannelure depth on  any  caliber 
     from .224 to .50 MG.   The comfortable padded handle is wide enough for 
     your  entire hand to press down,  while powerful leverage puts tons  of 
     force on the contact point of the bullet and roller.   A roller V-block 
     supports the bullet as it turns.  
          Unlike  vertical  designs,  the Corbin tool doesn't have to  fight 
     gravity to hold the bullet in position.   Also,  it's a lot easier  and 
     more  comfortable  to  apply pressure by leaning slightly down  on  the 
     handle than it would be to try and press sideways.  The leverage of the 
     Corbin  tool is roughly three times more than the  nearest  competitive 
     model  available  today.   But best of all,  the HCT-1 works as  it  is 
     supposed to do, and then some.   You'll find it handy for hard lead and 
     jacketed bullets, as well as straight pistol cases like the .45 ACP.    


     PCM-1     Corbin Power Cannelure Machine
          This  machine is a model of rugged simplicity.   Housed in its own 
     steel case, with a powerful 115 volt drive motor and torque-multiplying 
     gear train, the PCM-1 takes bullets as fast as you can feed them to it, 
     and  applies precisely located cannelures automatically.   The  bullets 
     ride on a rotating disk,  through a machined steel guide plate, and out 
     the other side.  
          The cannelure wheel itself is unique to each caliber:   you  order 
     the tool complete with one wheel,  and order additional wheels for each 
     caliber  of  bullet.   This arrangement assures precise  alignment  and 
     exact  control that cannot get out of adjustment during production runs 
     of millions of bullets.   The position of the cannelure is set by steel 
     spacer disks that locate the wheel on a keyed  shaft.   Again,  nothing 
     can get out of adjustment because the adjustment is a solid steel disk.
          The machines are individualized for your order:  they are standard 
     products,  but  the  cannelure wheel is set for the  caliber,  and  the 
     spacer disk is made for the proper cannelure height.  Extra spacers are 
     provided so you can set make minor adjustments in position.   While the 
     PCM-1  is  obviously  slower to set up for a job than  the  HCT-1,  and 
     requires different cannelure wheels for various calibers,  it does take 
     all the work out of big runs of cannelured bullets, and is very fast.
          Order this tool by caliber and by the location,  from the base, of 
     the bottom edge of the cannelure groove.  Specify also the width of the 
     groove if you do not want the stock width (.050-inches wide,  serrated, 
     very much like the conventional factory standard -- which it should be, 
     since  many factory bullets are cannelured on a Corbin  machine!).   If 
     you  want  multiple  grooves,  be sure and send a  drawing  and  sample 
     bullets if you have them already.   Cannelure wheels are non-returnable 
     since they are made to your order -- a drawing will assure that you get 
     what you thought you ordered!


     BPK-1     Bullet Polisher Kit
          The  Corbin Bullet Polisher Kit has been popular with  handloaders 
     for  well over a decade:   long before any of the commercial  vibratory 
     polishers were dreamed of,  Corbin customers were happily making  their 
     own for a fraction of the price!  
          This  kit contains a thermally-protected vibrator motor,  a  steel 
     mounting  bracket  to  hold  it  onto  the  bottom  of  any  convenient 
     container  (a 3-pound coffee can is most often used),  a 1-pound bag of 
     walnut  shell  polishing medium,   the self-locking nuts and  bolts  to 
     assemble the polisher,  and instructions.   The motor comes wired  with 
     its  own  power  cord and in-line switch,  and runs on  115  volts  AC.  
     (Sorry,  no 220 volt models for export -- but Corbin DOES have a 220 to 
     115 volt converter unit available).
          Simply  punch four holes in the bottom of your container to accept 
     the four 1/4-inch mounting bolts,  fasten the steel mounting bracket to 
     the container bottom (on the outside), slip the motor into the bracket, 
     and  secure the clamping bolt that pulls the bracket tight  around  the 
     motor  housing.   Suspend the container by means of a coat hanger  made 
     into a bail (punch two holes near the top,  on opposite sides, and bend 
     the ends of the coat hanger wire through them).  A door spring helps to 
     make the unit vibrate more efficiently and more quietly.  The other end 
     of  the door spring should be hooked over a shelf bracket or  suspended 
     from a rafter by a cord.  
          This is the simple and quick way to do it.   Many people have sent 
     us  pictures of attractive stands with walnut bases and a single curved 
     steel  rod made into the shape of a question mark,  with the  container 
     suspended under it.   We don't make a base unit, since most handloaders 
     seem quite willing and able to make their own, and I'm not sure we'd do 
     as well as some of you have!       
          If you have a tumbler now, you may still want a vibratory polisher 
     for your finished bullets.   The large tumblers are hard on bullets  -- 
     they bang the tips and scratch up the ogives.   The vibratory action of 
     the  BPK-1 is much more gentle.   The particles of polishing medium are 
     set  into rapid motion,  instead of rolling the whole contents  of  the 
     container  to get relative movement.   The more massive bullets are not 
     banged into each other as they are with a tumbler.


     WS-1      Walnut Shell Polishing Medium
          Corbin  packages  walnut  shells in the  correct  granulation  for 
     bullet polishing,  in one pound bags.   Two of these bags is just about 
     all you want to put into a 3-pound coffee can.  One is adequate.  Extra 
     bags are economical and will work in your tumbler as well as the  BPK-1 
     bullet polisher kit.


     FHG-1     Flameless Heat Gun
          A  propane  torch can be used to melt lead in a bullet jacket  for 
     bonding  the  core (with Corbin Core Bond),  or to anneal tubing  or  a 
     bullet  jacket for improved performance or for reforming  to  different 
     calibers.  But propane torches apply a very high temperature if you are 
     not  careful.   The  flameless  heat gun applies  a  lower,  very  even 
     temperature.  
          It  takes longer to do the job with the heat gun,  but you can  do 
     many  at one time by making a small enclosure out of boiler bricks  and 
     aiming  the heat gun air stream into the opening.   A metal shelf  made 
     from a cookie tray will hold the bullets.  General purpose heating jobs 
     such as drying washed jackets and cores,  applying a stress-relief heat 
     to gun springs and parts that you have made,  and simlar 600-750 degree 
     F. jobs can be done without open flame, using the super-heated air from 
     the  115 volt FHG-1.   The control switch has three  positions:   heat, 
     cool,  and  off.   Operate  the gun in the cool mode for a few  minutes 
     before turning it off.


     PE-1      Power Ejector Unit
          We met this tool in the section on reloading press dies.   It fits 
     over the top of any Corbin reloading press swage die,  and most of  the 
     jacket-drawing  dies.   Three  set-screws  fit into a  groove  machined 
     around the circumference of the die,  just below the knurled top.   The 
     PE-1  applies the multiple leverage of a minature compound lever  press 
     to  the  top of your reloading press die,  to eject the bullet  with  a 
     quick pull of a handle.  
          This operation replaces the mallet and ejector rod normally  used.  
     A  short piece of 1/4-inch diameter steel rod fits into the top of  the 
     die  instead  of the normal knurled-head ejector  rod.   An  adjustable 
     position ram with fine screw thread can be set to take up all the slack 
     in  the system,  so that you get full benefit of the compound  leverage 
     (no  wasted  motion).   The  PE-1  uses a forked  handle  made  with  a 
     remarkable  alloy,  by  the  way:   it is a high-tech  version  of  the 
     aluminum-iron  bronze which was once tried in the Winchester Model 1886 
     firing  pin!    The  paramagnetic  alloy  took  nearly  100  years   of 
     development  to reach a point where you could have a machined handle on 
     a modestly priced hand tool formed from it,  but there it is:  stronger 
     than  iron,  corrosion and rust proof,  with over 110,000  psi  tensile 
     strength  and  the  combined  characteristics of  stainless  steel  and 
     bronze bearing material.  
          I mention this because if you have a reloading press and  purchase 
     the PE-1, you might want to take a good look at the handle of the tool.  
     The  entire  frame and handle of the Mity Mite presses made  in  1985-6 
     were  machined  from castings of this alloy,  making the Mity Mite  the 
     only  swaging  press  in  the world to have ever  been  constructed  of 
     bronze,  and  also making it the most indestructable hand swaging press 
     ever made (until the advent of the Mega Mite).


     HTO-1     Corbin Heat Treatment Oven, Model 1
          Experimental  labs and prototype shops all over the world use  the 
     Corbin  HTO-1  for precision heating  of  alloy  steels,  manufacturing 
     springs and gun parts,  and of course for routine core bonding,  jacket 
     annealing,  and  heat  treatment  of copper or brass  tubing  prior  to 
     forming into jackets.
          The  HTO-1 is one of the most economical ovens in its size  range.  
     Nearly any other furnace you will see advertised with the features,  or 
     somewhat fewer,  will be priced at two to three times as much!   Corbin 
     purchases lab grade Thermolyne furnaces, strips out the cook-stove type 
     thermo-mechanical  heat  control,  and completely rebuilds the  furnace 
     with an electronic "brain" that applies a precise heating pulse, senses 
     heat  rise,  turns  off the power,  and senses  heat  loss.   Then,  it 
     compensates  for  the amount of heat loss by adjusting the  next  power 
     pulse width.  
          In  this  manner the HTO-1 is able to maintain heat  control  much 
     more precisely than any standard furnace.   It is so accurate that  you 
     can  set  it and forget it -- the temperature will go to the level  you 
     set regardless of the oven load,  and it will not go over it no  matter 
     how  long  you  leave the furnace on.   A stainless  steel  2000-degree 
     sensor probe replaces the original open junction thermocouple,  and RF-
     shielded input cable keeps the electronics from picking up motor noises 
     and other extraneous data.  
          The HTO-1 has a direct-reading knob setting.  It is not calibrated 
     in  relative  units which have no relation to the  actual  temperature, 
     like the furnaces sold by others which look like the Corbin unit.   The 
     furnace you would normally be able to purchase for about half the price 
     of the Corbin furnace has the original cook-stove type  control.   With 
     this  very  simple thermostat,  there is no feedback from the  furnace.  
     The control does not know what the temperature is in the  furnace:   it 
     only  knows  how  long  it has been feeding power  to  the  furnace  in 
     relation  to how hot an internal bi-metal strip is getting,  heated  by 
     its own internal heating wire.  
          You  could  mount the thermostat in another  room,  and  it  would 
     operate just the same way.  If you connected a lamp to the control, and 
     didn't  even have a furnace wired to it,  it would perform exactly  the 
     same service of turning the lamp on and off at regular intervals.   The 
     reading on the dial has no relationship to actual oven temperature.  It 
     is merely the relative amount of time that power is applied to whatever 
     is connected to the control.
          This means that you have to be right there, watching the pyrometer 

     reading,  to  know  what is going to happen to  the  temperature.   You 
     twiddle with the knob, setting it higher to try and get the temperature 
     to rise,  and then watching to make sure it doesn't rise too high.   If 
     you change the mass of material you put into the furnace,  it will come 
     to  a different temperature.   As the oven is used and the radiation of 
     heat  from  it  changes with time,  the settings  will  mean  different 
     temperatures even with the same load.   In other words, it is a type of 
     control that gets you by,  but only if you have plenty of time to watch 
     the meter and play with the knob.
          The  Corbin system is absolute.   You set  the  temperature.   The 
     electronics  takes over and brings the oven to that  temperature.   The 
     pyrometer is still there,  so you can read the temperature if you like.  
     But you don't need to be there if you have something better to do.
          The cavity size of the HTO-1 is approximately 4 inches by 4 inches 
     square, with a five inch depth.  The furnace runs on standard household 
     115  volt current,  no special wiring required.   (Export versions  are 
     available at no extra cost, using 220 volts).


     HTO-2     Corbin Heat Treatment Oven, Model 2
          This  is  the  commercial,  heavy duty version designed  for  more 
     accurate setting and control,  longer life,  and slightly larger cavity 
     size.  It has a built-in forced-air cooling system for the electronics, 
     a  standard  1/4-DIN slip-out,  interchangable controller box  (and  we 
     stock spares so if you should ever need a new controller,  it is a fast 
     and easy job to slip in a new unit).
          The  HTO-2  also comes with a 50-degree plus  or  minus  deviation 
     meter readout,  in addition to the full scale 2000-degree F. pyrometer, 
     and  an  LED indicator tells when the controller is applying a  heating 
     pulse  to the furnace coils.    The main power switch is also  a  5-amp 
     circuit  breaker,  controlling  power  to  the  electronics  and  power 
     switching relay.   The furnace can be ordered with Nitrogen atmosphere, 
     so  that  you  can apply a small charge of inert Nitrogen  gas  to  the 
     cavity and keep scale and oxidation at a minimum.  
          The  cavity size is approximately 4.5 inches by 4.5 inches  square 
     with  a  6 inch depth.   The larger oven cabinet allows for  additional 
     ceramic fiber insulation (a space age material similar to the that used 
     on the Space Shuttle), and for generally heavier construction desirable 
     in a production unit.   If you plan to manufacture bonded core  bullets 
     in batches,  this is the correct choice in a heat treatment furnace you 
     can  depend  on.   (We use this same model every day,  and have  for  a 
     decade, to make your dies!)


     HTC-1     Heat Treatment Compound, 1-lb. 
          If you heat treat steel, this compound is going to make life a lot 
     easier  for  you!   As you know,  iron and steel parts oxidize and  the 
     carbon  "burns  out"  of the surface,  leaving a softer  alloy  at  the 
     surface,  and  often  leaving  pits or scale  that  destroys  a  finely 
     finished part. 
          A nitrogen atmosphere furnace is useful in reducing this oxidation 
     or decarburization,  but at higher temperatures and with more sensitive 
     alloy  steels,       If you heat treat steel, this compound is going to make life a lot 
     easier  for  you!   As you know,  iron and steel parts oxidize and  the 
     carbon  "burns  out"  of the surface,  leaving a softer  alloy  at  the 
     surface,  and  often  leaving  pits or scale  that  destroys  a  finely 
     finished part. 
          A nitrogen atmosphere furnace is useful in reducing this oxidation 
     or decarburization,  but at higher temperatures and with more sensitive 
     alloy  steels, 
     temperatures,  for  as  long as you could reasonable want to  heat  the 
     part.   Then,  when  you quench the part or air-cool it,  the  compound 
     protects the surface from pitting and checking.  
          The  glass  is  almost impossible  to  remove  by  grinding,  wire 
     brushing, or handling.  Only one thing works quickly, easily:  boil the 
     part  in hot water!   The black protective coating  dissolves,  leaving 
     your  part  clean  and heat-treated without any damage to  the  highly-
     finished  surface.   This remarkable compound has been used to  protect 
     Corbin  swage dies,  finished to 50 millionths of an inch with  diamond 
     lapped interiors,  for the past 15 years.   We're willing to share this 
     important discovery with our friends in the gunsmith trade.

```
{% endraw %}

## CHAPT-19.TXT

{% raw %}
```
.he CHAPTER 19 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                             CHEMICALS AND SUPPLIES  

     BOX-25    Bullet Packaging, 25 Boxes
          Available  in  packages  of  25,   the  Corbin  commercial  bullet 
     packaging  system  is one of the most cost-effective ways to  sell  and 
     ship  your custom-made bullets.   Each bullet is individually nested in 
     its own "chamber" surrounded by charcoal-color soft foam.  There is a 5 
     by 5 matrix of chambers or cells in the 2-inch-thick foam block,  which 
     results  in either 25 large bullets or 50 small ones being safely  held 
     in the foam.
          There  are years of research behind the packaging.   Let me  share 
     with  you  some of the reasons for this particular  arrangement  before 
     going into the other details of the box itself.
          First,  why 25 instead of 100 or 50 holes,  or some other  number?  
     Experience  shows  that  handloaders will pay more per  bullet  without 
     complaint  when the quantity purchased and priced is smaller  than  the 
     standard factory package of 50 or 100 bullets.  Since there are half as 
     many or less in the package, your price for the package will seem lower 
     than it really is to the buyer who is comparing numbers in his head.
          Second,  good  marketing practice in this field does not match the 
     number of bullets with the typical number of empty cases to be reloaded 
     at  one  sitting.   Most rifle cartridges are packaged in lots  of  20.  
     When  a handloader reloads,  he usually will reload all  twenty  cases.  
     With  your custom bullets packaged in lots of 25,  this gives him  five 
     extra bullets. 
          The  reason for the five is so that he will be more likely to take 
     one  of  them  along with him to the range,  to show  his  friends  the 
     bullet he is test-firing.   Also,  he will have five bullets left over, 
     and  few people want to throw away five bullets.    They will  probably 
     wind up on display somewhere,  or be given to a friend,  or,  even more 
     likely, will remind him to purchase another package from you!
          If  you  feel that there is space going to waste in the  box  with 
     smaller bullets,  you can put two bullets in each chamber.   There is a 
     foam  cylinder in each hole,  which will compress as much as needed  in 
     order to hold any reasonable length of bullet on either side.  Load one 
     side first,  pressing the foam down with the bullet,  then slip the box 
     over the foam block.  Turn the box over, so the other side of the block 
     shows,  and press 25 more bullets down against the foam cylinder (now a 
     disk compressed between the two bullets).
          The package itself is square,  and has triple fold end  walls,  to 
     make  it highly crush-resistant.   While plastic boxes look good on the 
     dealer shelves and on your reloading bench,  they often are damaged  in 
     handling and shipping when you try to send them without another package 
     around them for protection.  And if you do that, your cost is more than 
     double what it would be with the single Corbin box.  
          The Corbin box is made for direct mail or UPS shipment without any 
     other protection.   It is finished with eggshell white, and stores flat 
     until you need it.  The interior dimensions are just right for the foam 
     block  and foam pad which accompanies it (for tip protection).   One of 
     the best features is that the box takes any size of bullets from .14 to 
     .600  Nitro!   The  special  plastic foam  material  stretches  without 
     tearing to hold the larger calibers snugly,  and is soft enough so that 
     your small calibers will not be scratched up.   Styrofoam (white  semi-
     rigid foam such as most ammo-makers use in the cartridge boxes) quickly 
     crumbles  and becomes dirty from handling.   The charcoal color  sponge 
     foam  looks good and stands up for your customer to use.   The  double-
     wall  corrugated  box  is actually tougher than  either  pasteboard  or 
     plastic when it comes to handling.  
          If you wish to have a custom label made,  your local printing firm 
     can make a self-adhesive label that is perfect for both shipping label, 
     box  sealer,  and advertising.   Write for a free pattern and suggested 
     designs to assist your printer.  
          Remember,  when  you begin selling your product,  the  package  is 
     extremely  important.   It  can  make or break your  sales  until  your 
     reputation  for a quality product is secure.    If your package arrives 
     in good condition,   has good eye appeal,  and obvious thought has gone 
     into the way it is assembled and holds the bullets,  then your customer 
     will be impressed with your concern for the product.   You can spend  a 
     lot  more  for plastic or reinforced pastboard without getting as  much 
     benefit for the dollar,  and wind up having to repackage all your boxes 
     in  another  shipping carton,  adding to  your  expenses.   The  Corbin 
     packaging  system does it all,  and gets it there,  at miminum cost and 
     with maximum protection.


     CSL-2     Corbin Swage Lube, 2-0unce Bottle
     CSL-16    Corbin Swage Lube, 16-Ounce (Pint) Bottle
          All steps of swaging a bullet require a thin film of high-pressure 
     lubricant  on  the  surface  of  the  lead  or  jacket.   Even  if  the 
     instructions  don't mention it,  proper lubrication is assumed any time 
     you  put a piece of metal into a die.   Core swaging,  jacket  drawing, 
     bullet reducing, and swaging all require Corbin Swage Lube for long die 
     life and proper operation.
          The natural components of Corbin Swage Lube are clean,  acid-free, 
     and good for the skin.   Lanolin-based,  but not lanolin alone,  Corbin 
     Swage  Lube  has  been used for over 20 years by  the  masters  in  the 
     swaging  field.   Synthetic lubes have come and gone,  but this  proven 
     formula remains the best choice.  
          Corbin  Swage  Lube is normally applied by putting a drop on  your 
     fingertip  and  giving the component a twist between  your  finger  and 
     thumb as you raise it to the die.   This quick,  natural movement saves 
     you  time and does a good job.   A thin film on the surface is all that 
     you  need.   A  two-ounce  bottle will  normally  service  about  2,500 
     bullets.  The pint size is a lifetime supply for most shooters.
          Many handloaders have found that Corbin Swage Lube is far superior 
     to  most  of  the  case-sizing lubes on the market,  and  they  use  it 
     exclusively for resizing cases.   The converse it not true:  do not try 
     to use a standard case lube for swaging, as you will have stuck bullets 
     or  worse.   Case lubes simply are not designed to stand up to the high 
     pressures  involved  in  swaging.   They either break  down  or  diesel 
     (ignite from high pressure within the die),  neither of which does much 
     good and can result in a badly stuck bullet.


     CDL-2     Corbin Dip Lube, 2-ounce Sampler
     CDL-16    Corbin Dip Lube, 16-ounce (pint) Can
     CDL-128   Corbin Dip Lube, 128-ounce (gallon) Can
          Dip Lube,  also called "Liquid Jacket", is a special wax lubricant 
     in a solvent carrier.  If you manufacture lead bullets, you can dip the 
     lead cores into Dip Lube prior to swaging,  then swage them while damp. 
     The  lube  works well enough for lead in the swage die,  and then  drys 
     quickly  to form a tight skin or jacket of wax on the  bullet  surface.  
     No  grooves or cannelures are needed to hold this film,  which is  hard 
     and non-sticky, yet flexible enough for rough handling.
          The  lube  works  by the process of  molecular  attraction,  using 
     polarized wax molecules to attract to the metallic surface of the  lead 
     bullet.   The  special  wax is designed both for this feature  and  for 
     resistance to high temperatures.  You can also use it for cast bullets, 
     if (heaven forbid!) you should still want to cast bullets once you have 
     read  this manual!   It takes the work out of the process.   Instead of 
     having  to  size  and lubricate each bullet,  you can  put  them  in  a 
     strainer or wire basket and dip them all at once in a can of Dip Lube.
          No  particular  time  is required for the wax to  attract  to  the 

     bullet.   Once it touches the lead, a film of wax molecules has already 
     bonded  to the surface.   If you want to let the wax cure and then  dip 
     again, you can repeat the process.  But successive layers are held by a 
     different mechanism than the first one.  Repeated dipping may help with 
     guns  and loads that tend to foul the bore with lead bullets,  as  will 
     rolling  the  damp,  freshly  dipped bullets in graphite or  a  product 
     called  "Motor Mica".    Most users,  including some  large  commercial 
     bullet makers who buy it by the gallon,  find that Dip Lube works quite 
     well just as it comes.
          Other  uses for this quality wax compound include a stock wax that 
     is tougher than most, a boot water-proofing that gets in all the seams, 
     a protective film for gun metal exposed to the rain, and a great way to 
     keep  screws  and nuts from rusting when used  outdoors.   Wood  screws 
     dipped  in Dip Lube go in easier and are not attacked by the acids  and 
     moisture  in the wood.   I have even soaked cardboard rolls in Dip Lube 
     and  used  it  as a very safe-to-carry fire  starter  for  my  campfire 
     (the  supposedly dry undersides of standing deadwood even get soaked in 
     our Oregon rains!).


     CCB-2     Corbin Core Bond, 2-ounce Sampler
     CCB-16    Corbin Core Bond, 16-ounce (Pint) Bottle
     CCB-128   Corbin Core Bond, 128-ounce (Gallon) Bottle
          Most  people only need this product to make good hunting  bullets.  
     If  your interest is target shooting,  there isn't much point in  using 
     it.  Core Bond makes it possible to form an alloy junction by diffusion 
     of  metal,  between the lead core and the jacket.   Core Bond  forms  a 
     junction stronger than solder, and more easily. 
          The  reason you might want to try it is that bullets made this way 
     will  outperform the same bullet made with a partition by 50% or  more, 
     judging by retained weight and expansion.   Partition designs typically 
     lose  most of the front core when they expand.   We like  them  because 
     they  manage to protect the rear half of the core.   But a bonded  core 
     bullet  typically  holds 90 to 100 percent of the original weight  with 
     just as great, or greater, expansion!
          In test after test,  including more than 150 Cape Buffalo to date, 
     and  both domestic cattle and a wide variety of game,  the bonded  core 
     bullet will outperform nearly any other kind of construction.  And best 
     of  all,  you  can  use the bonded core IN ADDITION to  other  designs.  
     Several Corbin clients have established high quality businesses  making 
     partitioned,  bonded-core  bullets  for people who feel they want  both 
     features,  or  for people who want the partition and think it does  the 
     job  while actually the bonded core is what is making these bullets  so 
     good.
          To  use Core Bond,  swage your cores as  usual.   Then,  swab  the 
     inside  of  a group of jackets with Core Bond.   Use a liberal  amount.  
     Some  people use a cotton swab large enough to squeeze into the  jacket 
     and  thus wipe the entire inside in one pass.   Put the cores into  the 
     jackets.   They should fit closely but not so tightly that they have to 
     be  pressed in.   Use an eyedropper to put one more drop of  Core  Bond 
     down the gap between the core and jacket wall.
          If you have a small quantity to make,  you can use a propane torch 
     to  heat the jackets,  thus melting the lead inside and letting it form 
     an alloy with the jacket wall.   If you have many to make,  the  Corbin 
     HTO-2  furnace  (or the smaller HTO-1 for less frequent production)  is 
     the best way to apply controlled heat.  Raise the temperature enough to 
     melt the lead.  Then let the jacket cool.   Do NOT quench in water!
          Cautions:   First, do NOT lean over or look into the jackets while 
     you heat them.   If the core fits too tightly,  the gas pressure in the 
     base  will pop the core out of the jacket and splatter you with  molten 
     lead!   If your core does fit somewhat snugly in the jacket bottom, and 
     you experience a problem with the cores popping out,  then you may need 
     to  get a smaller core swage,  or at least rig up a screen to put  over 
     the top of your jackets to keep the core inside during heating.  
          Second,  be  careful with Core Bond.   It contains a strong  acid, 
     among other things,  which can cause blindness or painful burns to  the 
     skin.  Wash up spills immediately, and neutralize with baking soda.  Do 
     not  use Core Bond in aluminum or steel containers,  as it attacks them 
     quickly.  
          Batch  processing  of  bonded  cores  usually  involves  making  a 
     rack  out  of stainless steel mesh.   Water systems often use  a  wide-
     spaced  woven  stainless wire grid to keep foreign matter  out  of  the 
     intake.  If you can find some of this material, it is ideal for folding 
     into a rack to hold jackets upright, simply by placing them in the grid 
     holes.   Other  methods  involve making a rack (like a test tube  rack) 
     with aluminum blocks drilled with holes to support the  jackets.   Make 
     the  rack so it fits into the cavity of the HT0-2 oven without touching 
     the  sides.   About half an inch of space should be left  between  oven 
     walls and the first jacket. 
          You  can stack two such racks in the oven at one time,  with  most 
     jackets.   About  100 jackets can be bonded at one time this way.   But 
     even if you do them one at a time,  using a propane torch,  the bonding 
     process  is  fairly quick and well worth the  effort.   When  you  have 
     finished  and  the jackets are cool,  lubricate them well and seat  the 
     core in the normal manner.  If there is a surplus of black oxide at the 
     top of the core, you may wish to tumble the bonded cores and jackets or 
     vibrator polish them before going on.  Make certain that you do NOT use 
     any  abrasive  in your walnut shells,  if you plan to  seat  the  cores 
     after  polishing.   Abrasive particles will embed in the  jackets,  and 
     will quickly lap the dies at random, just as they are lapped on purpose 
     with brass and diamond.  
          

     CCB-2     Corbin Bore Cleaner, 2-ounce Sampler
     CCB-16    Corbin Bore Cleaner, 16-ounce (Pint) Can 
     CCB-128   Corbin Bore Cleaner, 128-ounce (Gallon) Can
          Some  of  the  top  shooters in the world have  stated  that  they 
     "couldn't have won without it".   That's very kind of them, but I think 
     they'd  win no matter what they used.    Still,  this cleaner  is  very 
     effective  and  much  different  from the others that  have  so  loudly 
     appeared and enjoyed a brief spotlight of publicity, then vanished.
          For the past twenty years, Corbin Bore Cleaner has been quietly at 
     work in the commercial gunshops,  in the gun rooms of top  competitors, 
     and in military and law enforcement armories,  removing rust,  leading, 
     powder  fouling,  plastic  from shotgun bores,  and copper traces  from 
     jacket fouling.  We haven't raised a big fuss about it:  it is just one 
     more  of those products waiting for the curious handloader to  discover 
     on his own.   When you do, you'll wonder why anyone is impressed by all 
     the  advertising  that floods the magazines and impresses  the  writers 
     concerning cleaners that promise to get "all the fouling out".
          Just try this some day:   clean your gun with anything else.  When 
     you think it is clean, dip a cloth patch in Corbin Bore Cleaner and run 
     it  down  the bore.   Look at the patch.   You'll see why  Corbin  Bore 
     Cleaner is one of the quiet secrets of many master shooters around  the 
     world.   Now,  if  you  like,  you can really clean your barrel with  a 
     couple more patches.   And then follow it up with one of the other fine 
     products  that  doesn't shout at you from every  magazine  article  and 
     page,  then  fade  into the night:   Hoppe's Number Nine!   No,  I  had 
     nothing to do with developing this and I don't sell it.   But it  works 
     very  well  as a follow-up to protect your bore and to remove the  last 
     traces of Corbin Bore Cleaner,  which holds the last traces of  fouling 
     in its grip. 
          Between Corbin Bore Cleaner,  Hoppe's Number Nine, Corbin Cleaning 
     Solvent,  and Corbin Gun Oil, you need nothing else to take expert care 
     of your firearms.  These four products will remove gunk and accumulated 
     grease,  clean out the bores and protect them, and apply a thin film of 
     protective oil to lubricate and preserve the metal.  


     CBL-2     Corbin Bore Lap, 2-ounce Bottle
          If  you have a badly rusted or pitted bore,  severe fouling,  or a 
     newly-cut barrel to be lapped,  this abrasive compound is formulated to 
     remove  as  little steel as possible while taking off  burrs  and  high 
     points,  and  anything that projects above the steel surface,  such  as 
     fouling.   The 40-micron particle size is fine enough not to scratch or 
     damage your bore, yet the disc-shaped particles align under pressure so 
     that  they  tend to act in one direction,  along the axis of the  bore, 
     rather  than  cutting  in all  directions  like  conventional  grinding 
     compounds.
          This  is a product for people who know how to lap bores,  not  for 
     casual use on a new barrel.   But if you have an old barrel and want to 
     try to save it, clean it up, and get it shooting reasonably well again, 
     a  good polishing with Corbin Bore Lap is worth a try.   (Try to remove 
     fouling  with Corbin Bore Cleaner first.   If that doesn't do  it,  try 
     anything else you care to spend money on to assure yourself that Corbin 
     Bore Cleaner really is the most powerful safe cleaner available.  Then, 
     when you are convinced that only lapping the bore can save it, use CBL-
     2.  If that doesn't do it, have it rebored!)


     FSO-16    Corbin Gun Oil, 16-ounce (Pint) Can
          There must be a good dozen gun oils on the market.   The reason we 
     offer  another  one is because it is probably the same  thing  you  are 
     already  purchasing in small lore to spend money on to assure yourself that Corbin 
     Bore Cleaner really is the most powerful safe cleaner available.  Then, 
     when you are convinced that only lapping the bore can save it, use CBL-
     2.  If that doesn't do it, have it rebored!)


     FSO-16    Corbin Gun Oil, 16-ounce (Pint) Can
          There must be a good dozen gun oils on the market.   The reason we 
     offer  another  one is because it is probably the same  thing  you  are 
     already  purchasing in small lo from Corbin,  in pint cans that give  you  more 
     gun oil (which is really high grade ISO-15 instrument and lathe spindle 
     oil)  for  the money.   You can wind up paying three times as much  per 
     ounce in the little cans.   So, save your last little can and refill it 
     yourself with Corbin Gun Oil in the bulk (pint) container!
          We recommend using this oil on moving parts of Corbin presses,  to 
     protect Corbin dies that are not going to be used for a while,  and for 
     your fine firearms.   We use it for our lathes and mills,   and general 
     purpose lubrication,  as well as packaging the dies with a few drops of 
     the preservative oil inserted into the poly packs.   


     CCS-16    Corbin Cleaning Solvent, 16-ounce (Pint) Can
          This  is  a  good general purpose clean-up  solvent  for  removing 
     fingerprints, grease, and oils from metal.  It is flammable, but not as 
     volatile as gasoline or alcohol.   It can be used to remove Corbin Bore 
     Cleaner  from  the  bore  after it has done its  job  of  removing  the 
     fouling,  if  you  would  rather use it  than  Hoppe's.   This  solvent 
     actually  pulls  oils from the surface of whatever it contacts,  so  it 
     will draw the natural oils from your skin as quickly as it removes  oil 
     from  metal.   I recommend using dishwasher gloves when degreasing  any 
     significant  number of gun parts,  and avoiding any unnecessary contact 
     with the skin.
          CCS-16  is  also  good for cleaning jackets  and  cores  prior  to 
     swaging,  to  remove any traces of lubrication inside the jacket or  on 
     the core.   (First you lubricate the core,  then swage it,  then remove 
     the  lube  completely  so there will be nothing between  the  core  and 
     jacket to prevent a close, non-slipping bond.)


     CHF-128   Corbin Hydraulic Fluid, 128-ounce (Gallon) Can
          Specially  formulated for the Corbin Hydro-press,  this  hydraulic 
     fluid stands up to hard use and is safe with the seal materials used in 
     the  valves  and cylinder of the CHP-1 series presses.   If you  should 
     lose  oil  from  moving the press or doing any work  on  its  hydraulic 
     circuits,  a  gallon  of CHF-128 is the right quantity for  most  minor 
     service  replacements.    The red gallon container makes a  nice  spare 
     gasoline can, too!


     SL-4      Silver Lube, 4-ounce Can
          Silver  Lube is a high temperature,  high pressure lubricant  that 
     can  stand up to 2000 degrees F.    It is used for extreme drawing jobs 
     such as heavy copper,  brass,  or steel tubing jacket manufacture,  for 
     certain kinds of swaging where regular swage lube is not suitable,  and 
     has  applications  where heat and pressure are  extreme.   It  prevents 
     rusting  and corrosion when used on lead moulds,  such as on the  pivot 
     points and sprue plates,  adjustments and mounting screws.   It is also 
     rather messy and turns everything silver,  including your hands!   When 
     you need it,  nothing else does the job.   Most of the time, if you can 
     use CSL-2 Corbin Swage Lube, it's a lot neater and easier to clean up. 
          Special  note for makers of bonded core bullets:   If you  form  a 
     bullet jacket using Silver Lube,  as recommended with most of the heavy 
     copper tubing jacket-makers, you must clean off every trace of the lube 
     before  trying  to  bond the core.   Silver Lube protects  the  surface 
     against  the action of Core Bond and prevents alloy formation with  the 
     lead  core.   Strong  solvents such as MEK or Tri-Chlor are  needed  to 
     remove the lube film.   Remember,  it takes heat to 2000 degrees F., so 
     there is no way to melt it off.


     WS-1      Walnut Shell Polishing Medium
          Corbin  packages  walnut  shells in the  correct  granulation  for 
     bullet polishing,  in one pound bags.   Two of these bags is just about 
     all you want to put into a 3-pound coffee can.  One is adequate.  Extra 
     bags are economical and will work in your tumbler as well as the  BPK-1 
     bullet polisher kit.
```
{% endraw %}

## CHAPT-20.TXT

{% raw %}
```
.he CHAPTER 20 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                            TAKING CARE OF YOUR DIES

           A  good quality bullet swage die should last a lifetime in normal 
     operation.   With  the right lubricant and normal  pressures,  wear  is 
     virtually non-existent.  Here are some tips for avoiding damage:

          (1)   Use only CLEAN components.   Never use dusty,  corroded,  or 
     dirty lead or jackets in the dies.   Keep a clean work area.   Wipe the 
     inside of the dies with a clean cotton swab prior to use.   Never put a 
     die away with a component inside it,  especially one that has been used 
     with Core Bond.  If you tumble or vibrator polish your components prior 
     to swaging,  make absolutely sure that no abrasive compounds have  been 
     added  to the polishing medium.    Abrasive additives will embed in the 
     jacket  and  core material,  and will act just like laps  to  wear  the 
     surface of the die when you swage the bullet.

          (2)   If you should stick a bullet in a die,  never try to  drill, 
     dig,  scrape, or pry out the bullet.   Certainly never  heat the die to 
     melt out the stuck bullet,  as this will ruin the precise temper of the 
     metal.   Instead,  use  the methods outlined in the  book,  "Rediscover 
     Swaging".   No  tools  are required,  and the methods work 100% of  the 
     time.   A detailed description is also given in the "World Directory of 
     Custom Bullet Makers", on removal of stubborn stuck bullets.

          (3)   Do not attempt to "improve" the dies or punches  unless  you 
     are  willing to accept responsibility for the warranty yourself.   If a 
     punch  or die does not seem to be the right size,  send it back with  a 
     note and samples of your components.  If you decide to go after it with 
     a file,  you've probably spoiled it for anyone else to use,  so sending 
     it back then doesn't help anyone.    By now,  any basic design problems 
     have been solved a thousand times over,  and any problems would  either 
     be  misuse,  a  defective  part or the wrong part  sent  by  error,  or 
     mismatch of components to the dies.  These can all be solved by a phone 
     call or, at most, an exchange or replacement.  

          (4)  Use the right lubricant.  Most problems with stuck bullets or 
     hard operation can be traced to lubricant (or lack of it).

          (5)  Never force any component into a swage die,  if the component 
     is  larger than the bore of the die.   This is a major bad thing to do.  
     You can destroy the die, the punches, or both.  If a part won't go into 
     a  swage die by hand,  then do not force it  under  pressure.   Swaging 
     always increases the diameter,  never reduces it.  To "swage down" is a 
     contradiction.  You can "draw down" with an open-end ring die.

          (6)   Use jackets and core lengths recommended for a given set  of 
     dies.   If  you  want to experiment,  bear in mind that you will  quite 
     likely reach some limits for any given shape and size of die.  Each set 
     has  a wide range of latitude in bullet weight,  but you cannot  always 
     make  both the weight and the style you want in the jacket you  select.  
     Sometimes,  you have to trade off one parameter against another to make 
     the  system work with the available supplies.   Part of  the  practical 
     side  of  bullet  making  is recognizing that  some  of  the  arbitrary 
     specifictions  can  be  moved  one  way or  the  other  without  really 
     affecting  the  bullet performance.   If you are practical  about  your 
     bullet design, you will have no trouble coming up with designs that are 
     easy to make in existing equipment.  

          (7)   Swaging pressures are high because of the small area of  the 
     typical  punch,  through which all the force of the ram is  channelled.  
     It is NOT necessary to use all your might to operate the press.  If any 
     operation  seems  to  be  taking  more  than  a  comfortable,  one-hand 
     pressure,  then it is likely something is wrong and you should find out 
     what it is.   I have seen .243 caliber punches shoved into a .224  die, 
     drawing  down the solid tool steel of the punch and wrecking  it.   But 
     the  operator kept on making bullets with his newly-formed .224  punch, 
     only returning it when he finally realized that the operation took more 
     force  than  it should.   I have gotten back point forming dies with  a 
     piece  of  solid brass or copper pushed into them,  which  started  out 
     being  7/16-inch  diameter  (.4375").    The  die  bore  was  .429-inch 
     diameter.    You can't do that.    Use a draw die first,  to bring  the 
     material down to less the bore size.

          (8)   There  may  be some initial confusion over the  punches  and 
     dies.    It  looks  like  confusion could reign  supreme  whenever  you 
     accidently mix up a set of dies with another one.   But  actually,  the 
     components will serve as quick gauges to sort everything fast.  All you 
     have to do is slip a punch into the die to see if it fits.  To discover 
     which caliber of die you have,  just slip a jacket into it.  If it fits 
     easily but closely into the core seater, then you have the right die.
          Core  swages  have punches that fit closely into the die  on  both 
     ends.   Core  seaters have an internal punch that fits the die bore and 
     an external punch that fits either the die bore (semi-wadcutter styles) 
     or the jacket inside diameter.   A micrometer is handy for checking out 
     the  dies.   If  you  have a set of 9mm and a  set  of  .38  dies,  for 
     instance, there is only about 0.003-inches difference, at most, between 
     their bores.   You cannot see that small a difference.  So, make a lead 
     core  using whatever external punch fits easily into the die.   Measure 
     the lead core.  That's your caliber.  

          (9)   If you should ever find yourself getting frustrated  over  a 
     seemingly  difficult  problem  in  swaging,  don't  keep  fighting  the 
     problem:   give  me a call.   With thousands of people around the world 
     now  making their own bullets,  and with a history of better  than  two 
     decades  of  operation of the equipment,  it is unlikely that you  have 
     equipment that won't work or that the process is too difficult for you.
          The  odds  are that (1) I didn't write  the  instructions  clearly 
     enough  and a little discussion on the phone or in a letter would  make 
     some  point clear to you that solves everything,  or...  (2) Someone in 
     the shipping department picked up the wrong die or punch when they were 
     testing and packaging,  and you got it,  or... (3) You are trying to do 
     something  that  seems  reasonable to you,  but  which  a  little  more 
     experience  with  the  principles of swaging would quickly show  to  be 
     impractical or impossible.  
          In  any  case,  remember that help is a  phone  call  away.   Most 
     problems  resolve themselves with great ease when the die-maker gets in 
     on the case.   Sometimes a die or samples may have to be exchanged, and 
     in  difficult  cases  where  you are  trying  to  make  something  with 
     components other than those we used to design the set,  it may take two 
     or three exchanges to solve the problem.  But rest assured, you are not 
     alone to solve everything yourself.   I have had a taste of that in the 
     computer industry, where you can spend tens of thousands of dollars and 
     get a shrug when nothing seems to work right, the warranties all expire 
     before you even figure out that the system isn't working right, and you 
     wind  up with no choice but paying more for something you  should  have 
     gotten  in the first place.   Corbin is noted for outstanding  support, 
     and that is the way it should be.

```
{% endraw %}

## CHAPT-21.TXT

{% raw %}
```
.he CHAPTER 21 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                        DELIVERY AND PAYMENT INFORMATION

          Corbin dies are hand-made, often to custom order.  We are the only 
     die-works  in the world willing to offer so many calibers and styles of 
     equipment.   In  fact,  the  development of the entire field of  bullet 
     swaging  in the past twenty years has primarily been due to  the  heavy 
     investment  of time and effort we have made in bringing bullet  swaging 
     back  from  the  brink  of  oblivion to  a  commonly-used  process  for 
     handloaders.   Part  of that effort has been to bring the cost  of  the 
     dies within reach, while maintaining the custom features and quality.
          And  part of the cost of the dies has often been the fact that  we 
     are absolutely buried in orders,  making it necessary to have a waiting 
     list  for  delivery on many items.   I often state "If you can't  wait, 
     don't  order!",  because it is easier not to know that I lost an  order 
     from  someone impatient than to try and explain over and over how  much 
     work I have backed up and how long it takes to get to any given job.
          Since 1985,  most of the orders have been shipped within two  days 
     of receipt.   The new plant,  which is the world's largest bullet-swage 
     die  works,  is  stocked with most of the common calibers most  of  the 
     time.   We  do get behind even on common calibers,  but not the two and 
     three  years  we  used to quote.   Today,  you have a  good  chance  of 
     delivery on standard items within two days, a slight chance that we may 
     be  out and will be making more within 30 to 45 days,  and a very  slim 
     chance that what you ordered is odd enough that it will take us several 
     months  to  schedule in the making of reamers,  laps,  and  tooling  to 
     produce your dies.
          Still,  I would rather that you are prepared to wait than that you 
     expect immediate delivery and are disappointed.  So, I cannot guarentee 
     delivery on any specified date, or within any specified period of time.  
     Making  as many custom dies as we do,  and with the limited  number  of 
     skilled  die-makers  to do it,  I cannot guess how long the next  five, 
     fifty  or five hundred orders will actually take from start to  testing 
     and completion.   Each one presents its own problems,  its own  special 
     differences in tooling and technique to be developed and tested.  
          The end result,  though, is that each set of dies will produce the 
     bullet it is designed to make.   We can develop a whole new product for 
     you to sell or use,  one that did not exist before, and you do not have 
     to  bear  the  expense of the lost time developing it.   Once  we  have 
     worked  it out,  solving problems you will never have to know  existed, 
     you  get  a  set of tooling that is subtly  modified  to  perform  your 
     particular  job correctly.   If you took your bullet idea to just about 
     any other die-works in the world and had them make tools to produce it, 
     you  would  most likely be paying time and material charges  for  every 
     hour spent chasing down the problems and trying different ideas.
          We are working as fast as we can, and there is nothing more we can 
     do.  Offers to "buy a lot more later" or threats to "go somewhere else" 
     are both beside the point and have no effect.   As I say, if you decide 
     you  want  the equipment and support that goes with it,  both of  which 
     have  a hard-earned reputation that reaches back a couple  of  decades, 
     then you should make up your mind before ordering it whether or not you 
     have the patience to wait for delivery.
           I have simply cancelled orders and handed back deposits to people 
     who become unpleasant to deal with.   Life is too short and I enjoy  my 
     other  customers  far too much to waste time with blustering fools  who 
     don't  appreciate the effort that would go into their dies,  and  don't 
     realize  how closely  a die-maker needs to work with his  clients  both 
     before and after the dies are done.   One is not motivated quite by the 
     same things in this business as, for example, in selling a conventional 
     kind  of  mass  produced  tool.   I don't mind spending  hours  with  a 
     beginner explaining  how something works,  if necessary,  but I have no 
     time  for  demanding individuals who think that money  substitutes  for 
     manners.  
          We  do  publish  a periodic list of items that are  available  for 
     immediate delivery,  called our "Immediate Delivery List".   Ask for  a 
     copy  when you write or call.   The items on this list are on the shelf 
     and can be sent to you straight away.   Quite often, we have new things 
     that are not yet on the list,  and if you have some particular  caliber 
     in  mind you might mention it when you write or call.   We can let  you 
     know,  then,  whether or not the item is available for delivery.  It is 
     harder  to let you know when it will be available...many factors affect 
     the delivery of dies, including the possibility that a nearly completed 
     run  may have to be thrown away because of tiny flaws that show  up  in 
     final testing.  If this should happen, our original estimate may be off 
     by months.
          It  is  always best to place an order as soon as you are sure  you 
     want  it  and are willing to wait for it.   The sooner  your  order  is 
     placed,  the sooner we will have enough backlog on a particular item to 
     schedule it.  We run non-stock or special items based on when the order 
     came in,  you see.  If your order for a .416 Rigby bullet swage came in 
     four  months ago,  and someone else wanted a .577 Snyder set six months 
     before,  we'd  schedule  the  earliest positive  order  first.   I  say 
     positive  order  because  the mention on the phone that  you  might  be 
     interested in something is not an order.   If we have a deposit on  it, 
     and  your written order in hand,  then it is an order and we will place 
     it  in the computer scheduling system.   It will be done as soon as  it 
     can be done.  Otherwise, it probably will be lost in the constant flood 
     of phone calls that continues morning to night.
          A  good way to assure prompt delivery on a phone order is to  give 
     alternatives where such alternatives are acceptable to you.   In  other 
     words, if you don't really care whether your .366 rifle bullet has a 4-
     S or a 6-S ogive, then let us know either is acceptable.  The first one 
     finished  goes to you.   It might be that we finished a fine set of 4-S 
     ogive dies a day after your order came in, but since you specified a 6-
     S ogive, we never even considered sending that set.  And it may well be 
     months before we can get time to make the 6-S reamers and laps.
          Likewise,  if the diameter can be 0.429 or .430,  either way,  and 
     still be acceptable to you for your battery of .44 Magnums (practically 
     speaking, it doesn't usually make much difference and there is probably 
     that much or more variation in the bores anyway), then let us know.  We 
     may  have  a dozen sets of .429 dies just like you want,  but  if  your 
     order specifies .430, then we will wait until we can make the .430 size 
     to fill it.  If a cup base or a flat base is equally acceptable, let us 
     know that.   We will give you exactly what you specify unless you  give 
     us a range of acceptable differences that might speed up delivery.
          It  doesn't  necessarily slow up delivery to specify exactly  what 
     you  want  with no alternatives.   It is just that many times  we  have 
     something close on hand.   If it really does not matter to you, then we 
     could  ship the available package and you'd be making bullets within  a 
     few days.  On the other hand, if you really do want a specific style or 
     size,  we are glad to provide it.  Just be patient until the die-makers 
     work  their  way through the mountain of orders and can get  your  work 
     done.
          I  hope that this makes sense to you,  and doesn't  offend  anyone 
     except  people neither you nor I would like to deal with in  the  first 
     place!  The alternative to being swamped with orders is to raise prices 
     so few people could afford to buy.   Then, those who could would let us 
     work a lot less for the same income.   That was the situation before we 
     came into the swaging field,  many years ago,  and that is how most die 
     makers  operate  today.   But  motives other than simply  making  money 
     brought  us to this field and inspired us to develop it.   I'm no  more 
     altruistic than the next fellow, but I do feel somewhat responsible for 
     the survival of the bullet swaging art.   You are the carriers of  that 
     torch:   all  I  can  do  is make sure the equipment  continues  to  be 
     available  at  a reasonable price,  and that new ideas continue  to  be 
     explored and written about.                     

     
                                TERMS OF PAYMENT
     
          Corbin   accepts  VISA  and  MASTER-CHARGE  orders  by  letter  or 
     telephone.   If  an  article will not be availble  for  some  time,  we 
     normally submit a bank card payment request only for those items we can 
     ship  quickly.   The  rest of the articles will not usually be "put  on 
     your card" until they are ready to ship, unless you specify otherwise.
          Corbin  accepts postal money orders,  bank money orders  drawn  on 
     U.S.  banks  in U.S.  dollar amounts,  certified checks,  International 
     Money Orders, and other instruments of immediate negotiability drawn on 
     U.S. banks for U.S. dollar amounts.  Checks from other countries, drawn 
     on correspondent U.S. banks, must be sent for collection.  This process 
     usually involves a delay,  and the local banks charge a healthy fee for 
     this service. Sometimes this doesn't leave enough actual payment to pay 
     for the equipment.
          Thus,  we  ask our friends in other countries to use one of  these 
     methods of payment:
          (1) International Money Order
          (2) Postal Money Order for U.S. Dollars
          (3) VISA or Master-Charge 
          (4) Direct funds transfer to our current account  number.   Please 
     write for the address and number.   At the time of this writing,  it is 
     Jefferson  State Bank,  Medford,  Oregon 97501,  USA,  but problems can 
     develop  if  you send funds to an account we have closed or to  a  bank 
     from  which  we have switched our account.   If you  plan  to  transfer 
     funds,  please  write first and get instructions.   When you do make  a 
     transfer,  insist  that your bank send notification to us and have  our 
     bank  notify  us as well when they receive the funds.   This is  simply 
     good business and makes sure funds are not misplaced or stolen.
          Domestic  orders paid with personal or business checks do  require 
     at least two weeks for check clearance.   We will hold any items on the 
     Immediate  Delivery List,  upon first receipt of your  funds,  so  that 
     check  clearance will not cause the last item to be sold while you  are 
     still waiting. 
          Remember  that UPS delivery usually takes about 10 days,  and that 
     the  UPS  will not even begin a trace on a package until  at  least  15 
     working  days  have  passed.   Foreign shipment usually  involves  both 
     fairly long transit time by surface (or fairly high air mail cost)  and 
     a  delay in getting through foreign customs offices.   We send a notice 
     when  packages are shipped,  to let you know they are  in  transit,  in 
     these cases.
          We do accept COD orders, but if you are not there when the package 
     comes,  it may come back to us.   If a package sent COD comes back,  we 
     send you a card to let you know,  wait about 15 days for some response, 
     and  if we hear nothing,  cancel the order and any pending orders  that 
     are COD,  and sell the equipment.    If a COD package is refused, we do 
     the same thing.  When packages are refused, or otherwise undeliverable, 
     it  costs  us  to ship and receive the same  package  back.   For  this 

     reason,  we  do  not accept additional COD orders when we have had  any 
     significant number of problems with sending them before. 
          COD orders may be paid to the UPS delivery man by certified check, 
     money order, or in cash.  If someone signs for a COD order and pays for 
     it,  then UPS has a record of where and to whom they delivered it,  and 
     if for any reason you did not receive it,  let us know. We can have UPS 
     trace the delivery, and find out who got it.    
          When a COD shipment is sent, a postcard is also mailed telling you 
     the amount and date of shipment.   I can't guarentee that the  postcard 
     will  get there before the package does,  because that is up to the  US 
     Mail.  But  it usually does.   In some rare cases,  a person might have 
     sent  funds for something,  and then received it COD.   If you want  it 
     quickly, the best solution is to go ahead and accept the COD, notify us 
     immediately  of  the error,  and let us credit your account or  send  a 
     refund check.  Otherwise, it may be weeks before the package finally is 
     routed back to us and we are able to get it re-shipped again.
          Usually,  this  latter  kind of error only happens when  a  person 
     orders by telephone,  follows up by letter,  and repeats the order,  or 
     uses  both COD and prepayment at different times on parts of  the  same 
     order.  The most trouble-free method is to send payment with the order, 
     or  to  use  a bank card.   Bank cards give you a good tax  record  and 
     simplify  the  entire payment operation,  and are only  a  little  more 
     paperwork for us, so don't feel reluctant to use them on our account!

```
{% endraw %}

## CHAPT-22.TXT

{% raw %}
```
.he CHAPTER 22 CORBIN HANDBOOK AND CATALOG NO. 7, PAGE #

                              WARRANTY INFORMATION


          If   any   Corbin  product  proves  defective  in   materials   or 
     worksmanship, call 503-826-5211 and request authorization to return the 
     product.    If,  upon  inspection  by Corbin,  the product  does  prove 
     defective,  it  will be repaired or replaced without charge other  than 
     transportation.
          The  warranty in this section is in lieu of all other  warranties, 
     including  any implied warranties of merchantability or fitness  for  a 
     particular purpose.
          Firearms  safety requires that individual handloaders and shooters 
     ascertain at their own discretion and risk the proper  loads,  bullets, 
     and  cartridges to use in their firearms.   Corbin has no control  over 
     the  circumstances  of  loading,  and can assume no liability  for  the 
     results obtained.   We can guarantee only that our products are capable 
     of producing bullets which meet our own high standards of quality.
          The  accuracy  of firearms is dependent upon a number of  factors, 
     most of which are beyond the control of the manufacturer of the  bullet 
     or the tooling which produces the bullet.   Individual firearms require 
     careful  load development to achieve satisfactory accuracy.   A  bullet 
     which  performs well in one firearm may not perform as well in another, 
     very similar firearm,  for a variety of reasons,  some of which are not 
     well understood.
          The  responsibility  for accuracy rests with  the  handloader  and 
     shooter.   Corbin  has  no  control over the  circumstances  of  either 
     loading or shooting, and can therefore assume no responsibility for the 
     results obtained by any particular shooter, handloader, or firearm.
           Delivery   of  Corbin  products  cannot  be  guaranteed  at   any 
     particular  time  nor  within  any  specified  period.   Purchasers  of 
     equipment  must  bear  full responsibility for  the  results  of  their 
     advertising  and promotion,  contracts or agreements between themselves 
     and  other parties,  which could be affected by the delivery of  Corbin 
     equipment.  Corbin advises that NO committments be entered which depend 
     upon  timely  delivery of equipment from Corbin  for  their  successful 
     completion.   Potential  commercial operations based on swaging bullets 
     made  on Corbin equipment should wait until delivery has been  received 
     before offering products for sale,  entering contracts for delivery  of 
     bullets,   or  making  other  agreements  involving  the  use  of  such 
     equipment.
```
{% endraw %}

## FILES617.TXT

{% raw %}
```
-------------------------------------------------------------------------
Disk No  617  Corbin Handbook   (Disk 2 of 2)                   v1   DS2
-------------------------------------------------------------------------
This disk has the table of contents and chapters 12 through 22 of the Corbin
Handbook of Bullet Swaging, No. 7 written by Dr. Corbin.  It is saved in
text format.  The subject of bullet swaging is the manufacture of
projectiles using high pressure to flow ductile metals at room temperature
into the precise dimensions of a strong, highly-finished steel die.  The
process is discussed both as a hobby for the firearms enthusiast and as a
highly profitable part-time business venture, supplying handloaders with
high quality, special purpose bullets.  This is first of a two diskette
series.  Utility programs on this diskette facilitate the retrieval of the
Corbin Handbook information.
 
------------- Corbin Handbook (Chptr 12-22)
ANSI     SYS  System information
AUTOEXEC BAT  Startup Batch file
AUTOEXEC BAK  Startup Batch file backup
CHAPT-?? TXT  Handbook chapter ?? (10 Files) (168k)
CONFIG   SYS  System information
CONTENT  TXT  Table of Contents
FIND     EXE  Text search utility
FKEY     BAT  Batch file
HB7      BAK  Backup batch file
HB7      BAT  Setup Corbin chapters
READ     ME   Short information
SCRNSAVE COM  Screen save utility
SDIR     COM  Show directory utility
SHOW     BAT  Batch file for text display
SHOW     DOC  Documentation for SHOW.BAT
ST       COM  Text display utility
ST       DOC  Documentation for ST.COM
 
PC-SIG (Software Interest Group)
1030 East Duane Ave. Suite D
Sunnyvale Ca. 94086
Ph# (408) 730-9291
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

### Directory of PC-SIG Library Disk #0617

     Volume in drive A has no label
     Directory of A:\

    AUTOEXEC BAK       640   1-01-85   4:01a
    AUTOEXEC BAT       640   1-01-85   4:14a
    CHAPT-12 TXT     47715   4-05-86   2:40p
    CHAPT-13 TXT     23503   4-05-86   2:51p
    CHAPT-14 TXT     12443   4-05-86   2:56p
    CHAPT-15 TXT     13569   4-05-86   3:01p
    CHAPT-16 TXT      5794   4-05-86   3:06p
    CHAPT-17 TXT     13266   4-05-86   3:09p
    CHAPT-18 TXT     20805   4-05-86   3:38p
    CHAPT-19 TXT     24248   4-05-86   3:51p
    CHAPT-20 TXT      8225   4-05-86   4:21p
    CHAPT-21 TXT     14598   4-05-86   4:23p
    CHAPT-22 TXT      2800   4-05-86   4:24p
    CONTENT  TXT      1920   1-01-85   5:44a
    FKEY     BAT       896   1-01-85   4:13a
    HB7      BAK      2432   1-01-85   3:46a
    HB7      BAT      2560   1-01-85   4:15a
    READ     ME       5504   1-01-85   1:54a
    SCRNSAVE COM       688   1-01-85   2:03a
    SDIR     COM      1555   1-01-85   2:04a
    SHOW     BAT       128   1-01-85   2:04a
    SHOW     DOC       640   1-01-85   2:04a
    ST       COM     14336   2-03-84   2:43a
    ST       DOC      1152   1-01-85   2:04a
    FILES617 TXT      1705  10-15-86   1:23p
    GO       BAT       590   9-15-86   9:28p
           26 file(s)     222352 bytes
                           88064 bytes free
