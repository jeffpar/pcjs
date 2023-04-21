---
layout: page
title: "PC-SIG Diskette Library (Disk #300)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0300/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0300"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "CUBS AND INVENTORY"

    There are two dBASE III programs on this disk.  INV is a household
    goods inventory program.  INV maintains a description of each item,
    date purchased and cost.  It also figures the total cost during the
    print routine.  CUBS is a system for keeping the records of a cub
    scout pack.
    
    System Requirements: 256K, two disk drives, dBASEIII, and a C. ITOH
    Prowriter printer.
    
    How to Start: To use, insert a dBASE disk in drive A and this disk in
    drive B. Then type <dBASE INV>, or <dBASE CUB> for the CUBS program.
    To read the documentation, enter TYPE README.INV or TYPE README.CUB
    
    File Descriptions:
    
    ???      PRG  More programs in CUB system (30)
    README   CUB  Brief description of CUB system
    CUBS     PRG  Main program, type: DBASE CUBS to start
    -------- ---  CUBS - Cub scout record keeping
    INV      TXT  Sample printout
    INV      NDX  Index file
    INV      DBF  Database file
    INV      PRG  Main program
    -------- ---  INV - Household Goods Inventory
    ???      FMT  dBase report programs
    INV???   PRG  dBase home inventory programs
    ???      BAK  dBAse backup files
    ???      NDX  dBase index files
    ???      DBF  dBase data files
    README   INV  Notes on inventory programs
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## INV.TXT

{% raw %}
```
Sorted by:  CATEGORY, ITEM

ITEM                                                 AQUIRED          COST CATEGORY  

****AUTO FOLLOWS****                                                       Auto      
Audi 4000S, #WAUFA 0816EA 055815, Key #AH7486         Jan 84    $10,200.00 Auto      
Chevy LUV Pickup, 1979                                Sep 81     $5,000.00 Auto      
****CLOTHES FOLLOWS****                                                    Clothes   
Carton, 1.5, Boots                                    Jan 79         $0.00 Clothes   
Clothes, Alice                                                   $5,000.00 Clothes   
Clothes, Don                                                     $3,000.00 Clothes   
Clothes, Travis                                                  $1,000.00 Clothes   
Duffle bag                                                           $0.00 Clothes   
Duffle bag                                                           $0.00 Clothes   
Duffle bag                                                           $0.00 Clothes   
****ENTERTAIN FOLLOWS****                                                  Entertain 
Bike, Huffy, #E6712203, #MO3 005330, Silver           Mar 83        $85.00 Entertain 
Bike, Western Auto, #HC1800230, Yellow                Dec 80        $85.00 Entertain 
Camera, Minolta Hi-Matic AF2-M, #1108453              Jan 83       $130.00 Entertain 
Camera, Minolta SRT-101, #1497319 w/55mm lense        Jun 70       $300.00 Entertain 
Computer monitor                                      Sep 83       $120.00 Entertain 
Computer program, DOS 2.10                            Aug 84        $50.00 Entertain 
Computer program, Fast Graphs                         Aug 84       $100.00 Entertain 
Computer program, Flight                              Sep 84        $50.00 Entertain 
Computer program, Infoscope                           Sep 84       $125.00 Entertain 
Computer program, Perfect Calc                        Aug 84       $150.00 Entertain 
Computer program, Volkswriter                         Aug 84       $175.00 Entertain 
Computer, IBM-PC, 256K, #08379955150                  Aug 84     $2,500.00 Entertain 
Fishing box with assorted fishing lures and gear      Aug 82       $100.00 Entertain 
Go-Kart, Sears, Serial #1977, Model #391-8069         Jun 83       $550.00 Entertain 
Golf bag, with clubs, on cart                         Jan 68       $200.00 Entertain 
Lense, Soligor telephoto 2.8, 135mm #1678782          Jun 70       $100.00 Entertain 
Printer Interface, Botek                              Apr 84        $79.00 Entertain 
Printer, Prowriter DMP M8510SCP, #SCP 100303          Apr 84       $550.00 Entertain 
Projector Screen                                      Apr 79       $100.00 Entertain 
Sewing machine                                        Dec 41       $100.00 Entertain 
Sewing machine                                        Jul 84       $200.00 Entertain 
Snow sled                                             Jan 79        $25.00 Entertain 
Snow sled                                             Jan 80        $25.00 Entertain 
TRS-80 tape recorder                                  Feb 83        $60.00 Entertain 
TV antenna, indoor                                    Sep 82        $35.00 Entertain 
TV, RCA 12"B&W                                        Jan 82       $100.00 Entertain 
TV, Sanyo 13" color                                   Oct 83       $260.00 Entertain 
TV, Zenith 25" color with remote control              Sep 81     $1,000.00 Entertain 
TV, color, in stereo cabinet                          Sep 70     $1,000.00 Entertain 
Zebco Omega 144 spincast reel                         Aug 82        $30.00 Entertain 
Zebco spinning rod, #2114, ultra-light 5'             Aug 82        $30.00 Entertain 
****FURNITURE FOLLOWS****                                                  Furniture 
Bed frame, with brass headboard                       Jan 81       $200.00 Furniture 
Bed, queen size with head board                       Dec 75     $1,000.00 Furniture 
Bookcase, Army type                                   Apr 84         $7.00 Furniture 
Boy's bed with mattress                               Jan 75       $225.00 Furniture 
Cabinet, sewing machine                               Dec 84       $270.00 Furniture 
Chair, Ethan Allan ladderback                         Jun 79       $100.00 Furniture 
Chair, Ethan Allan ladderback                         Jun 79       $100.00 Furniture 
Chair, Ethan Allan ladderback                         Jun 79       $100.00 Furniture 
Chair, Ethan Allan ladderback                         Jun 79       $100.00 Furniture 
Chair, kitchen                                        Jun 79        $50.00 Furniture 
Chair, kitchen                                        Jun 79        $50.00 Furniture 
Chair, kitchen                                        Jun 79        $50.00 Furniture 
Chair, kitchen                                        Jun 79        $50.00 Furniture 
Chair, overstuffed                                    Jun 81       $100.00 Furniture 
Chair, rocker, upholstered                            Dec 70       $500.00 Furniture 
Chest for Don                                         Sep 81       $200.00 Furniture 
Chest of drawers, mahogany                            Aug 81       $100.00 Furniture 
Chest to match queen size bed                         Dec 75     $1,000.00 Furniture 
Clock, alarm, 3 each                                      75        $50.00 Furniture 
Clock, steeple                                        Dec 78        $75.00 Furniture 
Clock, wall, 1910 antique                             Sep 82       $175.00 Furniture 
Clock, wall, antique with china pendulum              Dec 83       $200.00 Furniture 
Cuckoo clock                                          Jan 83        $25.00 Furniture 
Cuckoo clock                                          Aug 82        $25.00 Furniture 
Cuckoo clock                                          Sep 82        $50.00 Furniture 
Dresser mirror top, Thomasville                       Mar 80       $500.00 Furniture 
Dresser with double mirror for queen bed              Dec 75     $1,000.00 Furniture 
Dresser, Thomasville                                  Mar 80     $1,000.00 Furniture 
Dresser, hutch bottom                                 Apr 69       $500.00 Furniture 
File cabinet, two drawer metal                        Dec 65        $20.00 Furniture 
Hutch top                                             Apr 69       $500.00 Furniture 
Hutch, china, Army type                               Apr 84        $15.00 Furniture 
Lamp to match queen size bed                          Dec 75       $125.00 Furniture 
Lamps, table, 4 each                                  Dec 78       $300.00 Furniture 
Nicky-Knacks                                              99       $200.00 Furniture 
Nightstand to match queen size bed                    Dec 75       $250.00 Furniture 
Picture, wall                                             99         $0.00 Furniture 
Pictures, 16 each                                         99       $200.00 Furniture 
Quilt rack                                            Jan 83        $50.00 Furniture 
Sofa and loveseat, matching                           Jan 70     $1,500.00 Furniture 
Stool, foot, wicker                                   Dec 69        $50.00 Furniture 
Table, coffee, Ethan Allan                            Mar 70       $200.00 Furniture 
Table, dining room, Ethan Allan, with legs            Sep 79       $100.00 Furniture 
Table, kitchen with 4 chairs                          Oct 81       $175.00 Furniture 
Thread box                                            Dec 76       $200.00 Furniture 
****GARDEN FOLLOWS****                                                     Garden    
Barbeque grille, propane                              Mar 81       $150.00 Garden    
Chair, lawn                                           Apr 78       $100.00 Garden    
Chair, lawn                                           Apr 78       $100.00 Garden    
Chair, lawn                                           Apr 78       $100.00 Garden    
Lawnmower, 3.5 HP, push MTD end# 3312N                Jun 84       $120.00 Garden    
Lawnmower, riding, Sears, 8HP, 32" cut                Mar 81       $900.00 Garden    
Snowblower, Simplicity, M524                          Jan 83        $90.00 Garden    
Snowblower, Simplicity, M824                          Jan 83        $90.00 Garden    
****HOUSEWARE FOLLOWS****                                                  Houseware 
Appliances, kitchen, small                                99       $500.00 Houseware 
Carton, 3.0, china                                    Feb 80       $500.00 Houseware 
China and crystal                                     Dec 83     $1,000.00 Houseware 
Dishes and silverware                                     99       $700.00 Houseware 
Linen, assorted                                           99     $2,000.00 Houseware 
Luggage, 9 pieces                                     Mar 82       $400.00 Houseware 
Silver service                                        Dec 83       $270.00 Houseware 
****STORAGE FOLLOWS****                                                    Storage   
Carton, 1.5                                               99               Storage   
Carton, 3.0                                               99               Storage   
Carton, 3.0                                               99               Storage   
Carton, 3.0                                               99               Storage   
Carton, 3.0                                               99               Storage   
Carton, 3.0                                               99               Storage   
Carton, 3.0                                               99               Storage   
Carton, 3.0                                               99               Storage   
Carton, 3.0                                               99               Storage   
Dishpack                                                  99        $50.00 Storage   
Fan, Toastmaster                                      Feb 81        $50.00 Storage   
Ladder, step, aluminum                                Jan 81       $100.00 Storage   
Paper, Xmas wrapping                                      99        $20.00 Storage   
Rack, hangar                                          Mar 80        $10.00 Storage   
Stove, General Electric                               Jun 81       $500.00 Storage   
****TOOLS FOLLOW****                                                       Tools     
Awl, scratch                                          Jun 75         $5.00 Tools     
Battery charger, Sears, 200 amp                       Jun 83       $140.00 Tools     
Chest, tool, lower cabinet, Remline                   Jan 67       $200.00 Tools     
Chest, tool, upper cabinet, Remline                   Jan 67       $200.00 Tools     
Chisel, air, with bits                                Mar 77        $75.00 Tools     
Come-along, 2,000 lbs                                 May 83        $26.00 Tools     
Coveralls, blue, german                               Mar 83        $25.00 Tools     
Drill, 1/2", Penneys                                  May 83        $50.00 Tools     
Drill, 3/8" Skill, variable speed                     Feb 83        $30.00 Tools     
Drill, 3/8", Penneys                                  Dec 82        $50.00 Tools     
Droplight, 220 volt                                   Aug 82        $20.00 Tools     
Extension cord, 25 foot                               Feb 83        $20.00 Tools     
Files, round and flat                                 Feb 78        $12.00 Tools     
Flaring set, double                                   Mar 83        $40.00 Tools     
Gasket maker                                          Oct 79        $50.00 Tools     
Grinder, body, German                                 Feb 83        $60.00 Tools     
Hacksaw                                               Jun 75        $10.00 Tools     
Hammers, sledge, rubber, plastic and claw             Jan 70        $50.00 Tools     
Heater, shop, Sears                                   Dec 82       $250.00 Tools     
Hub cap tool                                          Jun 67        $15.00 Tools     
Pliers, plain, water pump, wire and hose              Sep 80        $70.00 Tools     
Pliers, water pump, 24"                               May 79        $30.00 Tools     
Pop rivet tool                                        Feb 83        $25.00 Tools     
Pry bars, crowfoot and plain                          Jun 73        $30.00 Tools     
Punches and chisels, 8 each                           Feb 70        $30.00 Tools     
Saw, Skill, 7 1/4"                                    Jan 83        $40.00 Tools     
Screwdriver, impact                                   Jan 81        $25.00 Tools     
Screwdrivers, regular, phillips and X                 Jul 70        $50.00 Tools     
Snips, aviation                                       Feb 78        $30.00 Tools     
Socket set, 3/4" set with ext, breaker and ratchet    Mar 79       $200.00 Tools     
Socket set, 3/8"drive with short and deep, US         Feb 72       $150.00 Tools     
Sockets, 1/2" drive impact, short and deep, US        Jan 77        $50.00 Tools     
Spring compressor, valve                              Jan 83        $40.00 Tools     
T-square, small                                       May 75        $10.00 Tools     
Tap and die set, metric                               Jan 83       $100.00 Tools     
Tester, electric circuit                              Aug 82        $10.00 Tools     
Tester, engine, Wards digital                         Sep 82        $90.00 Tools     
Timing light, Hawk                                    Sep 82        $45.00 Tools     
Vice grips, small and large                           May 80        $30.00 Tools     
Vise, bench                                           Nov 82        $50.00 Tools     
Wheel puller, steering                                Jul 79        $40.00 Tools     
Wrench set, box end, 6mm to 19mm                      Feb 83        $50.00 Tools     
Wrench set, combination, 6mm to 19mm                  Jul 82        $50.00 Tools     
Wrench set, open end, 6mm to 16mm                     Jul 80        $40.00 Tools     
Wrench, 3/8" air impact                               May 82        $75.00 Tools     
Wrench, air impact, 1/2", CP brand                    Oct 78       $150.00 Tools     
Wrench, tire, 4 way, metric                           Aug 82        $20.00 Tools     
Wrenches, allen, US and metric                        Jun 79        $50.00 Tools     
Wrenches, brake adjusting                             Feb 71        $20.00 Tools     
Wrenches, brake bleeder, 3 each, US                   Jul 68        $20.00 Tools     
Wrenches, combination, 1" to 1 1/4"                   Sep 75        $25.00 Tools     
Wrenches, distributor, 3 each                         Oct 79        $30.00 Tools     
Wrenches, ratcheting box, US                          May 75        $50.00 Tools     
****WEAPON FOLLOWS****                                                     Weapons   
Carbine, cal 30, US, #2358                            Dec 66       $150.00 Weapons   
Case, shotgun                                         Dec 84        $50.00 Weapons   
Pistol, Daisy air                                     Jan 83        $30.00 Weapons   
Pistol, Walther P-38, 9mm, #228030                    Feb 83       $200.00 Weapons   
Rifle, Daisy air                                      Jun 79        $30.00 Weapons   
Rifle, Daisy pellet                                   Jan 83        $40.00 Weapons   
Rifle, Marlin 22 Auto, #20607590                      Dec 81        $85.00 Weapons   
Rifle, Remington 700BDL, 308 cal, #222399             Dec 67       $250.00 Weapons   
Rifle, Ruger 22 Auto, #118344                         Dec 75       $120.00 Weapons   
Scope, 6X Weaver                                      Dec 67       $100.00 Weapons   
Shotgun, Remington 1200, 12 ga, #331315V              Dec 67       $200.00 Weapons   
Shotgun, Remington 1200, 20 ga, #N910697K             Jan 85       $200.00 Weapons   
Shotgun, Winchester 101, #364000                      Nov 84       $400.00 Weapons   
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0300

     Volume in drive A has no label
     Directory of A:\

    AGE      PRG       256   2-23-85   6:53a
    APPEND   PRG        34   3-01-85  11:51p
    BOMB     PRG       216   2-18-85   2:11p
    BROWSE   PRG        34   3-01-85  11:48p
    CUB      NDX      3584   2-15-85   7:28p
    CUBLDR   DBF       512   3-03-85   8:04p
    CUBLDR   FMT       457   2-16-85   1:40p
    CUBLDR   NDX      1536   3-03-85   8:04p
    CUBPRINT PRG      1369   2-23-85   9:43a
    CUBS     DBF       560   3-05-85   7:54p
    CUBS     FMT       443   2-23-85   9:54p
    CUBS     NDX      1536   3-04-85  10:58p
    CUBS     PRG       768   3-04-85  10:35p
    CUBS1    NDX      3584   2-15-85   7:28p
    DORK     FMT      1024   2-27-85  10:28p
    DORK     PRG       442   2-18-85   4:51p
    IND      NDX     25088   3-04-85  11:16p
    INDEX    BAK       116   3-03-85   9:23a
    INDEX    PRG       138   3-03-85   9:26a
    INV      BAK      1152   3-01-85  11:55p
    INV      DBF       512   3-04-85  11:16p
    INV      NDX      1536   3-04-85  11:16p
    INV      PRG      1152   3-03-85  10:31p
    INV      TXT     16650   3-01-85   8:07p
    INVPRINT BAK      1251   3-03-85   7:37p
    INVPRINT PRG      1243   3-04-85  11:17p
    LDRPRINT PRG      1147   2-23-85   9:14a
    LOOK     PRG       640   3-03-85  10:31p
    LOOKCUB  FMT       633   2-18-85   2:39p
    LOOKLDR  FMT       628   2-23-85   9:48p
    LOOKLDR  PRG       375   2-20-85  10:43p
    MAIN     PRG      9856   3-05-85   7:51p
    MENU     BAK      1490   3-04-85  10:58p
    MENU     PRG      1390   3-05-85   7:54p
    README   CUB      1024   3-03-85  10:06p
    README   INV      1024   3-03-85  10:02p
    ROSTERS  PRG      3328   2-17-85   3:08p
    SEARCH   BAK       570   3-02-85  12:18a
    SEARCH   PRG       376   2-20-85  10:40p
    STATS    BAK      2689   2-23-85  10:07p
    STATS    PRG      2688   3-05-85   7:48p
    STERILE  PRG       268   2-18-85   2:07p
           42 file(s)      93319 bytes
                           57856 bytes free
