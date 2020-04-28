---
layout: page
title: FlickerFree 1.0
permalink: /software/pcx86/util/other/flickerfree/1.0/
redirect_from: /disks/pcx86/tools/other/flickerfree/
machines:
  - id: ibm5150
    type: pcx86
    config: /configs/pcx86/machine/ibm/5150/cga/256kb/machine.xml
    autoMount:
      B:
        name: FlickerFree 1.0
    autoStart: true
    autoType: $date\r$time\rDIR\r$15B:\rDIR\r$15$5FF\r\rFPA\rYFF_HIST\r\r
---

FlickerFree was a DOS utility created by Steve Gibson in 1986 that improved common IBM PC display operations.
It was reviewed by Peter Norton in the
[July 1986 Issue of PC Magazine](https://books.google.com/books?id=5hdeC0k_JHwC&lpg=PP1&pg=PA73#v=onepage&q&f=false),
who described it as "the most fascinating software I've seen for some time."  He goes on to say:

> FlickerFree is a memory-resident program that solves several problems that muck up display screens: snow,
flicker, and lack of speed.  The original IBM Color/Graphics Adapter was cursed with an ugly "snow" effect
whenever programs wrote directly to the display memory (unless the programs used time-consuming desnowing
operations).  Fortunately, newer display adapters, such as Compaq's nifty built-in adapter, don’t suffer
from snow, but they do sometimes suffer from an even greater pain-in-the-eye: screen flickers when information
is scrolled.  And all the screens, even with the IBM monochrome adapter, often function much more slowly
than they should.

The demo machine below is configured as an IBM PC (Model 5150) with a CGA and 256Kb of RAM.  It will automatically
load FlickerFree (`FF.COM`) and then run the companion FlickerFree Performance Analyzer (`FPA.COM`).

{% include machine.html id="ibm5150" %}

### Directory of FlickerFree 1.0

     Volume in drive A is FlickerFree
     Directory of A:\

    FF       COM     22330   4-01-86  12:00a
    FPA      COM      5438   4-01-86  12:00a
    FFIX     COM      3590   4-01-86  12:00a
    FF_HIST          14610   4-01-86  12:00a
    README             859   4-01-86  12:00a
            5 file(s)      46827 bytes
                               0 bytes free

### A Brief History of FlickerFree

From the file `FF_HIST`:

	            -------------------------------------------------------
	
	                        A brief history of FlickerFree
	
	                                    - or -
	
	               A look at the Technology behind "FlickerFreedom".
	
	                                    - or -
	
	                  Software efficiency is MUCH more important
	                           than raw hardware power!!
	
	            -------------------------------------------------------
	
	
	
	
	                                THANKS TO IBM!
	            -------------------------------------------------------
	              Before I begin,  I'd like to take a moment to  give 
	              my  sincere,  public  thanks  and  appreciation  to 
	              International Business Machines,  Inc. (aka IBM) as 
	              the  company which created the IBM PC ...  and  the 
	              tidal-wave phenomenon of that product's success.
	
	              FlickerFree,  would  not  exist if the  marketplace 
	              created by IBM was any less vital and wonderful.
	
	              FlickerFree has the benefit of being designed  many 
	              years  AFTER the architecture of the PC was cast in 
	              marketing-hardened  concrete  ...  so  I  have  the 
	              advantage of hindsight which IBM never enjoyed.
	
	              If here,  or elsewhere,  I ever appear to be harsh, 
	              acerbic, or "Holier-than-IBM", please remember that 
	              I  NEVER STOP BEING GRATEFUL for the  opportunities 
	              created by IBM's success with this machine.
	            -------------------------------------------------------
	
	
	
	            -------------------------------------------------------
	                             Phase ONE - discovery
	            -------------------------------------------------------
	
	            It began rather innocently.
	
	            Like everyone else, I kept reading about all the things 
	            which  could be purchased to speed up my "old  clunker" 
	            4.77  Mhz 8088 PC.  Each passing "enhancement"  article 
	            reminded  me  that OTHER PEOPLE were  computing  FASTER 
	            than I.....  Hmmmm.....
	
	            From  among  all the TURBO  Add-In  Cards,  V20  chips, 
	            faster  clock  crystals,  new motherboards,  weird  do-
	            hickies,  and the like,  one product caught my eye: The 
	            286-EXPRESS CARD from PC Technologies.   This excellent 
	            card  is  the  same  one also  being  sold  by  Victor, 
	            Mountain Computer,  as well as several other well-known 
	            companies.
	
	            So one of these beauties found its way into the  unused 
	            slot-8 of my trusty  (rusty)  old XT.
	
	
	                   WHIZZZZZZZZzzzzzzzzzzzz . . .. ... (hic!)
	
	
	            Sure enough, the RAW PROCESSING POWER of my system shot 
	            up SIGNIFICANTLY, just as I'd hoped, but to my surprise 
	            and consternation, the SCREEN didn't receive NEARLY the 
	            same speed boost as raw number-crunching.
	
	            My  prior  hardware  products:   The LPS II  Light  Pen 
	            System  for  Apple  II computers  followed  by  Koala's 
	            GIBSON Light Pen System,  demonstrate that I'm a  *BIG* 
	            *FAN*   of  Display  Screens.    Screens  are  *REALLY* 
	            important.   They're our only WINDOWS into what's going 
	            ON in there!!    And SCREEN SPEED MATTERS . . . A LOT!!
	
	            I'm  also sure that computers should be FAST!   I  mean 
	            our EXPERIENCE of them should feel  light,  responsive, 
	            and snappy under our fingers.
	
	            A slow screen makes EVERYTHING feel slow ... and dull.
	
	
	                    Something was wrong in IBM screenland.
	
	
	            Out came my trusty IBM PC Technical Reference manual -- 
	            I  hoped  to  understand where all of  my  new  80286's 
	            power-juice was going.   After all, the finest hardware 
	            in  the  world is POWERLESS to perform in the  face  of 
	            inefficient SOFTWARE. . . .
	
	
	                                       |
	                                   \       /
	
	                                 >   GULP!   <
	
	                                   /       \
	                                       |
	
	
	            I couldn't BELIEVE what I found. Did I say inefficient?  
	
	                       Horrifying would be more accurate. . .
	
	
	            The  original authors of IBM's ROM BIOS could not  have 
	            known  just  what a phenomenon the IBM PC would  become 
	            ...  so  I suppose that no one spent much  (or  perhaps 
	            any)  time worrying about the efficiency of the  lower-
	            level  ROM  BIOS routines...  after  all,  they  WORKED 
	            didn't they???
	
	                                  Yeah, sure.
	
	
	            It's  just  that no one ever knew HOW MUCH  BETTER  the 
	            BIOS might have been or could be. The deeper and closer 
	            I looked, the more room for "improvement" I found.
	
	            Though  I still didn't know it then,  the product which 
	            would become FlickerFree ... was well on its way!
	
	
	
	            -------------------------------------------------------
	                    Phase TWO - a closer look at the issues
	            -------------------------------------------------------
	
	
	            The Performance Issue:
	
	            The original IBM Color Graphics Display Adapter has  an 
	            intrinsic  hardware limitation which places a FIXED LOW 
	            RATE on display update speed.   However,  the CRIME  is 
	            that  the BIOS ROM,  which was written with these Color 
	            Adapter  limitations  in mind,  treats  the  Color  and 
	            Monochrome  Display  Adapters  identically,  needlessly 
	            reducing  the speed of the Monochrome Display output to 
	            the slow speed of the Color Display!!
	
	            What's more,  many of the newer color display  adapters 
	            do  not suffer under the "screen static" limitations of 
	            the original CGA,  but they are STILL RUNNING UNDER THE 
	            SAME (OLD) BIOS .....  and are therefore not  permitted 
	            to function as fast as their better designs allow!!
	
	            Finally, this FIXED LOW DISPLAY RATE is NOT TIED to the 
	            speed and power of your computer's CPU chip ...  but is 
	            set  by  the  FIXED RASTER SCAN RATE of  the  display's 
	            sweeping beam.  The BIOS only permits a single byte  or 
	            word  to be written to the display for each  horizontal 
	            scan retrace.
	
	            Therefore,  the addition of more PROCESSING POWER (like 
	            my  addition  of  the PC Technologies 80286)  does  not 
	            deliver a proportionate increase in screen performance.  
	            Your FASTER MACHINE simply spends a greater  percentage 
	            of its time WAITING for the ROM BIOS to permit a single 
	            character  to be written to the display...  then  waits 
	            again for the next one....
	
	
	
	            -------------------------------------------------------
	            The FLICKER issue:
	            -------------------------------------------------------
	
	            Scrolling  the  screen  image UP by one  line  normally 
	            requires the rapid movement of all 4000 bytes of screen 
	            character  data.   Essentially,  EACH CHARACTER on  the 
	            screen is advanced FORWARD by exactly eighty locations.
	
	            As  we've  just  seen,  the  Color  Adapter's  hardware 
	            limitation prevents this mass data movement from  being 
	            performed quickly, so the IBM ROM BIOS simply TURNS THE 
	            SCREEN  OFF  (to black) while the data is  all  quickly 
	            moved up one line. (What you can't see can't hurt you?)
	
	            Since  I  found the Flickering effect to  be  extremely 
	            annoying, and was sure you would too, I decided that it 
	            would just have to go.   So I invented a completely new 
	            technique  for  scrolling the screen's data  ...  which 
	            results in a effectively INSTANTANEOUS VERTICAL SCROLL.
	
	            (If you've seen the INFO page, you've already seen that 
	            super-smooth HORIZONTAL SCROLLING can now be done too.)
	
	
	
	            -------------------------------------------------------
	            The Color Issue:
	            -------------------------------------------------------
	
	            I'm sure I'll NEVER understand how a computer could  be 
	            sold  with  a Color Graphics Adapter and Color  Monitor 
	            ...  but without any simple,  semi-permanent means  for 
	            choosing  and  setting  the  display's  default  screen 
	            colors.    That's just unbelievable to me.
	
	            You've  already  seen how much nicer ANY  COLORS  OTHER 
	            than  the PC's default "DimWhite-on-Black" appears  ... 
	            and you may have already used the on-screen menu to set 
	            up your own preferred screen colors.    So enough said.
	
	
	
	            -------------------------------------------------------
	            The Inefficient Code Issue:
	            -------------------------------------------------------
	
	            I  don't  want to be critical of anyone else's  work  - 
	            especially behind their back,  so I'll keep this short, 
	            polite, and a bit white washed:
	
	            The video portion (at least) of the standard IBM PC ROM 
	            BIOS was not skillfully written.  I don't need to stand 
	            here  in judgment,  since FlickerFree is the result  of 
	            what  I consider skillful writing (he said modestly)... 
	            and you have seen the difference for yourself.
	
	
	
	            -------------------------------------------------------
	                   Phase THREE - implementation of a product
	            -------------------------------------------------------
	
	
	            So I began dabbling here and there,  counting each  and 
	            every  single  "thought" cycle of the PC's 8088  micro-
	            processor.   Even  though each "tick" of its  clockwork 
	            brain would make a difference of only 210 Billionths of 
	            a second, I knew how quickly they tend to all add up.
	
	            (Having waited for your display screen, you know too!)
	
	            Every  part of this project HAD to be  hand-written  in 
	            100%  machine language.  Fortunately (and happily)  I'm 
	            one  of  that  dying breed who eats and  breathes  (and 
	            loves)  machine language.  I've never been  comfortable 
	            tolerating  the inevitable performance loss  of  higher 
	            level  languages.  I  prefer  the  experience  of  that 
	            special hand-crafted feeling ... the power, and control 
	            which comes with machine language.
	
	
	                             I was gaining ground.
	
	
	            With the new FlickerFree technologies up,  working, and 
	            tightly  hand-coded for maximum speed and power,  I had 
	            two  major  aspects  remaining:    User  Interface  and 
	            Software Compatibility.
	
	            I  decided to go all out on the user  interface.   I've 
	            always felt that little things make big differences.
	
	            Like the diagonal on-screen wipe.
	
	            I  didn't  just  want *MY* menus to  explode  onto  the 
	            screen like so many other products.  I wanted something 
	            smoother.    After  hand-coding  about  ten   "special-
	            effects" I settled upon the diagonal wipe.
	
	            But it wasn't right yet.
	
	            The EASY WAY for the menu to operate would have been to 
	            let  it "wipe-on" first,  WITHOUT the inverse highlight 
	            bars ...  and add them AFTERWARD.  That would have been 
	            easy.   I tried it,  and knew it was wrong.   The  wipe 
	            phase  was so smooth and "proper" that  the  subsequent 
	            sudden appearance of the inverse highlights carried the 
	            impression of an afterthought.   So,  I did it the hard 
	            way.   The  menu is completely built (WITH the  inverse 
	            highlight bars) "off stage",  and only then wiped  onto 
	            the screen, complete.
	
	            I wouldn't ship it any other way.
	
	            What about the horizontal smooth-scroll??  Well I guess 
	            I  was  just showing off ...  but I never get tired  of 
	            seeing it slide by!
	
	
	
	            -------------------------------------------------------
	            Software Compatibility
	            -------------------------------------------------------
	
	            Boy... there is a nightmare! But I don't suppose I have 
	            to  tell  you about the mish-mash of  today's  software 
	            compatibility  problems.   It's  all so  technical  and 
	            uninteresting  that  I won't waste your  time  further, 
	            except to say that fully one third of my time (and two-
	            thirds  of  my anxiety!) was devoted to developing  the 
	            resident  technology behind  FlickerFree.   Again,  I'm 
	            proud of the result and know that it speaks for itself.
	
	
	            *******************************************************
	            -------------------------------------------------------
	
	            So, What's next???
	
	            Well, I'm at work on product number two (code name: P-2)
	
	            As a paid,  registered, owner of FlickerFree, you'll be 
	            receiving  early  notification of  P-2's  availability.  
	            I'm as excited about it as I was about FlickerFree  ... 
	            and I know you will be too!!
	
	            In the mean time,  enjoy being FlickerFreed, and thanks 
	            again for you support and your purchase!
	
	                                                    Steve Gibson
	                                                    April, 1986
	                                                    Irvine, CA, USA
	
	                                - End Of File -
