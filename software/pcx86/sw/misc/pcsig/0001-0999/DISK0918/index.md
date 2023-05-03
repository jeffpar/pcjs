---
layout: page
title: "PC-SIG Diskette Library (Disk #918)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0918/
preview: https://pcsigdisks.pcjs.org/pcx86/sw/misc/pcsig/0001-0999/DISK0918/DISK0918.jpg
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0918"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CAMBRIDGE THOROUGHBRED HANDICAPPER"

    CAMBRIDGE THOROUGHBRED HANDICAPPER attempts to predict a horse or dog's
    race performance by analyzing past performances in a consistent,
    scientific manner.  It also gives you a strategy for betting on races
    based on your handicapping analysis.
    
    The system blends sophistication and ease-of-use for the race fan who
    enjoys the sport but doesn't have hours to devote to handicapping.  If
    you've never handicapped a race before, you'll find this informative.
    If you're an experienced handicapper, the data you collect is just as
    useful as the ratings themselves.  Sharpen your own analytical thinking.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0918.TXT

{% raw %}
```
Disk No:  918                                                           
Disk Title: Cambridge Thoroughbred Handicapper                          
PC-SIG Version: S2.5                                                    
                                                                        
Program Title: Cambridge Thoroughbred Handicapper                       
Author Version: V3.0                                                    
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
CAMBRIDGE THOROUGHBRED HANDICAPPER attempts to predict a horse or dog's 
race performance by analyzing past performances in a consistent,        
scientific manner.  It also gives you a strategy for betting on races   
based on your handicapping analysis.                                    
                                                                        
The system blends sophistication and ease-of-use for the race fan who   
enjoys the sport but doesn't have hours to devote to handicapping.  If  
you've never handicapped a race before, you'll find this informative.   
If you're an experienced handicapper, the data you collect is just as   
useful as the ratings themselves.  Sharpen your own analytical thinking.
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES918.TXT

{% raw %}
```
Disk No  918
Program Title: CAMBRIDGE HANDICAPPER SERIES version 3.0
PC-SIG version 2
 
    CAMBRIDGE HANDICAPPER SERIES attempts to predict a horse's or dog's
performance in an upcoming race by analyzing past performances in a
consistent, scientific manner. It also gives you a strategy for betting on
races given the outcome of your handicapping analysis. Knowing how and when
to bet is just as important as analyzing the horse or dog. There are as
many handicapping systems as there are handicappers. Some are quite good,
others are worthless. Some require hours or days of effort, while some
require only a few minutes of preparation. The CAMBRIDGE HANDICAPPER SERIES
blends sophistication and ease-of-use for the race fan who enjoys the sport
but doesn't have hours to devote to handicapping. If you've never tried to
handicap a race before, you'll find this quite easy to use. If you're an
experienced handicapper, the information the system requires you to collect
is just as useful as the ratings themselves. The program sharpens your own
thinking and handicapping analysis.
 
Usage: Horse and Dog Race Analysis Programs.
 
System Requirements: 256K memory and one disk drive.
 
How to start: Type: COPY THISDISK.DOC PRN: (press enter).
 
Suggested Registration: $20.00
 
File Descriptions:
 
HARNESS  ARC  Harness Racing Handicapper
HOUNDS   ARC  Greyhound Racing Handicapper
THORO    ARC  Thoroughbred Horse Racing Handicapper
THISDISK DOC  Documentation
PKXARC   COM  Unarchiving utility
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║            <<<<  Disk #918 CAMBRIDGE HANDICAPPER SERIES  >>>>           ║
╠═════════════════════════════════════════════════════════════════════════╣
║      To print the readme, type:   COPY THISDISK.DOC PRN                 ║
║                                                    (press Enter)        ║
║                                                                         ║
║      To extract these programs, put this disk in drive A: and a blank   ║
║      formatted disk in drive B:. Then type the following:               ║
║                                                                         ║
║                                   PKXARC HARNESS (HOUNDS,THORO) B:(C,D) ║
║                                             (press Enter)               ║
║                                                                         ║
║      After extracting each arc file to a formatted disk, you can print  ║
║      the manual by typping: PRINTMAN (press Enter)                      ║
║                                                                         ║
║                                   (c) COPYRIGHT 1991, PC-SIG INC.       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HARNESS.DOC

{% raw %}
```




                        The Cambridge Harness Handicapper
                 (C)1987 By Leonard Hyre and Michael J. Himowitz
                      Distributed by Federal Hill Software
                             8134 Scotts Level Road
                              Baltimore, Md. 21208
       
       
       
            The Cambridge Harness Handicapper is a powerful,
       sophisticated tool that will allow you to handicap Harness horses
       quickly and easily. It's not a magic, get-rich-quick scheme. But
       if you follow these instructions, impose some discipline and use
       the handicapper wisely, you should be able to improve your
       performance at the track and make money in the process.
            The Cambridge Handicapper is easy to use. All the information
       you need is available in the track program, although you may want
       to check with the track for late scratches and driver changes.
       With a little practice, you'll be able to handicap a race in a few
       minutes and a whole card in less than an hour.
       
                  About the Program and User-Supported Software
       
            This is a proven handicapper. Federal Hill Software has been
       marketing Thoroughbred, Harness and Greyhound programs
       commercially for a variety of computers since 1983. You may have
       seen our advertisements in magazines such as Compute!, Compute's
       Gazette, Computer Shopper, RUN, PCResource, Rainbow, PCM and
       others.
            We have sold thousands of copies. The problem is that
       advertising rates--the largest single cost of doing business--have
       skyrocketed in the last two years. Eventually we decided that it
       was just too expensive to market special interest programs such as
       handicappers in general-interest computer magazines.
            So we did two things.
            First, we rewrote the handicappers from top to bottom, making
       them more attractive, quicker and even easier to use with
       full-screen data entry, on-line help, and revised rating formulas
       that reflect our most recent research.
            Second, we decided to put working versions of the IBM
       handicappers directly in the hands of the people who want them.
       This is known as user-supported software. If you like the program
       and use it, we ask that you send us a $30 registration fee. This
       is $20 less than the previous selling price.
            For your money you'll get an Enhanced version of the program
       with additional features that will make your handicapping even
       easier and more exciting--including the WAGERMASTER betting
       analysis program. We'll talk more about the enhanced version at
       the end of these instructions.
             The User-Supported version you have here is in no way
       crippled. Some shareware companies do this as a come-on, but we
       don't think that's fair. This User-Supported version uses exactly
       the same handicapping forumlas as our enhanced version and
       produces the same results. You may use it and distribute it to
       anyone. Give it away, post it on your local computer bulletin
       boards, or put in in your user-group library. There are only a few
       conditions. They are:
       





             1. The Cambridge Handicappers are copyrighted by the authors
       and remain their intellectual property, protected by U.S. and
       international copyright laws.
       
             2. You may not distribute a modified version of the
       User-Supported program or any version of the Enhanced program.
       
             3. When you distribute the User Supported version, you must
       include ALL the files on this disk (or in the group of files which
       you un-ARCed). The program won't work properly unless they're all
       there.
       
             Enough of that. Let's get on with the program itself.
       
                               System Requirements
       
            The Cambridge Harness Handicapper will run on any
       IBM-compatible computer with 256K of memory and a video display
       adapter that emulates the IBM Color Graphics Adapter, IBM
       Monochrome Graphics Adapter or the Hercules Monochrome Graphics
       Adapter. That means just about everything on the market today,
       including all models of the Tandy 1000, 1200, 3000 and 4000 with
       sufficient memory.
            There are a few computers with which the program is not
       compatible. They include the Tandy 2000 and unmodified Sanyo 550
       series
            If you have one of these non-IBM compatible MS-DOS computers,
       we do have an earlier version of the program which will run on
       them. Contact us for information.
       
                             The Files on this Disk
       
            The Cambridge Harness Handicapper is composed of five files.
       All of these files must be on the disk from which the program is
       launched or the hard disk directory from which the program is
       launched. They are as follows:
            HARNESS.BAT   The batch file that starts the program.
            NHARN1.EXE    The handicapper program.
            NHARN1.PAK    The screen files used by the program.
            SPEEDSCR.COM  A memory resident screen driver.
            HARNESS.DOC   Instructions for the use of the program.
       
            If these files are on a floppy disk, that's all you'll need
       to run the program. If you want to use a hard disk, set up a
       directory for the program and use the DOS "Copy" command to
       transfer all the files on this disk to the directory you have set
       up for it.
       
       
                               Running the Program
       
            To run The Cambridge Harness handicapper, put the disk with
       the program in Drive A or use the "CHDIR" command to switch to the
       hard disk directory in which the programs are stored.
       
            Type HARNESS and hit the <RETURN> key. This will load the
       program.

                                         Cambridge Harness Handicapper - 2




            DO NOT ATTEMPT TO LAUNCH NHARN1.EXE directly. Use the
       HARNESS.BAT file to do it. Here's why:
       
            HARNESS.BAT first loads SPEEDSCR.COM, a memory resident
       program which manages the screens used by the Cambridge Harness
       Handicapper. Without SPEEDSCR, the program will not work. The
       HARNESS.BAT file also removes SPEEDSCR from memory when you
       terminate the handicapper program. While SPEEDSCR probably won't
       cause difficulties if left in memory after you exit from the
       handicapper, it can, under some circumstances, produce some
       unusual if harmless results. So always start the program by typing
       HARNESS and hitting the RETURN key.
       
            When you type HARNESS and hit <RETURN>, your disk drive will
       whir for a few seconds. Then you'll see a message asking if you
       have a color monitor. If you do, type "Y" and the display will
       change to color. If you don't have a color monitor, type "N" and
       the program will run in monochrome mode.
       
            At this point, you'll see a title screen followed by a
       message explaining the handicapper's shareware status. (We've
       removed that message from the enhanced version). A few seconds
       later, the MAIN MENU will appear. Before you start handicapping,
       however, please read the following sections that describe
       handicapping systems and the information you'll need to use the
       Cambridge Harness Handicapper.
       































                                         Cambridge Harness Handicapper - 3




                  ============================================
                           About Handicapping Systems
                  ============================================
       
            A handicapping system does two things.
       
            First, it attempts to predict a horse's peformance in an
       upcoming race by analyzing past performances in a consistent,
       scientific manner.
       
            Second, it provides you with a strategy for betting on races
       given the outcome of your handicapping analysis.
       
            As strange as it sounds, the true purpose of a handicapping
       system is not to pick winners. The purpose of a handicapping
       system is to give you a tool that will help you make money at the
       track. Knowing how and when to bet is just as important as
       analyzing the horses
            There are as many handicapping systems as there are
       handicappers. Some are quite good, others are worthless. Some
       require hours or days of effort, some require only a few minutes
       of preparation.
            You don't really need a computer to handicap a race. There
       are plenty of manual handicapping systems around, and some are
       excellent. Unfortunately, they're often tedious and
       time-consuming. A computer handicapping system takes the
       handicapper's knowledge, sets up handicapping tables and rules
       internally, and then makes calculations instantly.
            We designed the Cambridge Harness Handicapper to provide a
       blend of sophistication and ease of use for the race fan who
       enjoys the sport but doesn't have hours and hours to devote to
       handicapping. If you've never tried to handicap a race before,
       you'll find this quite easy to use. If you're an experienced
       handicapper, the information the system requires you to collect
       will be just as useful as the ratings themselves. The program will
       sharpen your own thinking and handicapping analysis.
       
                  ============================================
                              The LAST RACE Theory
                  ============================================
       
            The Cambridge Harness Handicapper relies heavily on
       information from a horse's LAST RACE on a fast or sloppy track.
       Now you may ask, "Why only one race? Wouldn't it be better to
       average performances over half a dozen races, or a whole year?"
            The answer is no. It's a fact that a horse's performance
       today is most likely to mirror his performance last time out.
       Remember, a handicapper is interested in how a horse is going to
       perform RIGHT NOW, not how the horse performed a month or two ago.
       The horse that ran six weeks ago may have been in much better or
       worse shape than he is today.
            While it is possible to develop a system that uses an average
       of past performances, our research shows that such systems at best
       yield only marginally better results than a "last race" system.
       And they take so long and require so much data that most people
       are unwilling or unable to spend the time necessary to make them
       work.

                                         Cambridge Harness Handicapper - 4




            The disadvantage of a "last race" system is that it may
       downgrade a good horse who happened to post a bad performance last
       time, or upgrade a horse who ran way over his head last time out.
       But this doesn't happen very often. And the advantages of a "last
       race" system--speed and ease of use--mean you'll be able to do
       more handicapping and have a better chance of making money over
       the long run.
       
                  ============================================
                            The Information You Need
                               And Where to Get It
                  ============================================
       
            To use The Cambridge Harness Handicapper, you must be
       familiar with the information available to you in the track
       program. The program is available on most newsstands on the day of
       a race and usually the day before.
            The program contains three different pieces of information
       you'll need. First, there's a summary of each race, showing the
       horse's name, post position and driver. Second, there's the
       "condition line," a table of of information about the past
       performances of each horse in a race. Finally, there is a listing
       of the "Top 10" drivers at each track.
       
            Here is the information you'll need about each horse:
       
            1. The horse's post position, for this race and the horse's
       last race on a fast or sloppy track.
       
            2. The driver's name, for this race and the horse's last race
       on a fast or sloppy track.
       
            3. The driver's record. We're interested in whether a driver
       wins 15 percent or more of his races. If you look at the "Top 10"
       drivers list in your program, you'll usually find all the 15
       percent winners. If you're not sure, inquire at the track itself.
       
            4. The date of the horse's last race on a fast ("ft") or
       sloppy ("sy") track. We will use sloppy tracks for rating
       purposes, since they don't seem to affect horses' times, but it's
       not a good idea to bet on races being run on a sloppy track.
       
            5. The purses and/or claiming prices for the horse's previous
       races. This is necessary to determine whether the horse is moving
       up or down in class.
       
            6. The leader's time at the half-mile point of the horse's
       last race on a fast or sloppy track. If the horse's last race was
       on a slower track ("good" or "muddy"), go back and find the last
       performance on a fast or sloppy track.
       
            7. The final time of the horse in his last race on a fast or
       sloppy track.
       
            8. The number of lengths the horse gained on the leader in
       the stretch of his last race on a fast or sloppy track.
       

                                         Cambridge Harness Handicapper - 5




            9. Parked Out Signs: These are small superscript zeros that
       appear next to the numbers representing the horse's position at
       various points in his last race on a fast or sloppy track. These
       indicate that the driver took the horse wide to give him room to
       run. They usually indicate a strong horse.
       
           10. CLASS--This is the hardest factor to determine. It is
       important to know whether a horse is racing today against tougher,
       easier or the same level of horses he raced against last time.
       Here are basic guidelines:
       
            * Generally, if the purse or claiming price of the horses in
       this race is higher than the purse or claiming price of the
       horse's last race, the horse is moving UP in class. That means
       he's running against tougher competition than he did last time.
       
            *  If a horse is racing for a lower purse or in a race with a
       lower claiming price than his last race, the horse is moving DOWN
       in class. That means he's running against easier competition than
       he did last time.
       
            *  If the purse or claming price is about the same (a few
       hundred dollars doesn't matter) in this race as it was for the
       horse's last race, then he's staying in the SAME class.


































                                         Cambridge Harness Handicapper - 6




                  ============================================
                             Handicapping Principles
                  ============================================
       
            A computer can help you with handicapping calculations, but
       there's no substitute for a little human judgment in the process.
       The key to handicapping is knowing which races to bet (not every
       race can be properly handicapped) and which horses to eliminate
       from contention before you start handicapping.
       
                              When to Bet on a Race
       
            For any handicapping system to work, there must be a good
       probability that the past performances of the horses involved will
       be reflected in their performance in the race you're handicapping.
       Unfortunately, this isn't the case in every race. At the very best
       tracks, such as Roosevelt, almost every non-maiden race may be
       handicappable. At tracks with lower-class horses, you may only
       find five or six races on a card that lend themselves to analysis.
       Here are the guidelines we use:
       
            * Don't bother going to the track and using this program if
       the track condition is not "fast." An off track--good, muddy, or
       sloppy--should be avoided. There's a good reason for this. Horses
       usually run on fast tracks. They train on fast tracks. While some
       horses may be good "mudders," there's no real way of knowing how
       they'll respond to bad track conditions. Some horses may love soft
       footing, others may hate it. The problem is that there's no way to
       tell for sure. So stay away from off tracks.
       
            * DON'T BET ON MAIDEN RACES. These are unproven or just plain
       bad horses, and most handicapping techniques are useless when
       they're running.
       
            * Dont bet on races featuring the cheapest horses on the
       grounds. These are old, bad or tired horses who are unpredictale.
       They may run well one week and terribly the next. If you can't
       count on a horse's past performance to be indicative of his
       performance today, you can't handicap the horse. These horses
       usually show up in the first and last races of a card,
       particularly at tracks where the overall quality of horses is not
       high. At the very best tracks, this rule may not apply, since even
       the cheapest horses could be feature race material at lesser
       tracks.
       
            * Don't bet on races with a high proportion of "shippers." A
       shipper is a horse running at a track for the first time. You have
       no way of knowing how a horse will respond to a new surface. If
       you run across a race in which a shipper looks like a real
       contender, our advice is to pass it up. This takes some
       discipline, but you'll be better off for it. Also, any race with
       three or more shippers is probably a bad bet. We realize that this
       will eliminate many stakes races with high purses. While these are
       fun to watch, they're not usually good handicapping propositions.
       You can take consolation in the fact that the other races on the
       same card with a high-purse stakes race are likely to be good
       ones.

                                         Cambridge Harness Handicapper - 7




                              Eliminate Bad Horses
       
            Once you have decided whether to bet a race, you can easily
       eliminate certain horses from contention. These will usually be
       eliminated by the computer, but occasionally a really bad horse
       will score highly. Take a few seconds to eliminate these first and
       the system will work much better. Only at the very best tracks
       will you have to handicap more than a half-dozen horses in a race.
       
            * Eliminate any horse which has not raced in the last three
       weeks. You have no way of knowing why this horse has been on
       vacation, but if an animal is running well, the trainer will race
       him regularly. Time off is usually a bad sign. This may not apply
       to the absolutely best-quality stakes horses, who race less
       frequently, but stakes races are bad bets anyway.
       
            * Eliminate any horse who did not show a strong performance
       last time out. By this we mean a win, place or show, a strong run
       on the leader in the stretch, or setting the early pace as the
       leader in fairly quick time. If a horse showed none of these,
       forget him.
       
            * Eliminate "shippers." These are horses running at a track
       for the first time. Once again, this may not be possible in big
       stakes races, but we think these are difficult to handicap anyway
       and should be avoided.
       































                                         Cambridge Harness Handicapper - 8




                  ============================================
                                Using the Program
                  ============================================
       
            When you run the Cambridge Harness Handicapper, you'll see a
       menu with four choices. The choices are:
       
                    1. Handicap a Horse
                    2. About the Enhanced Handicapper
                    3. Registration Form
                    4. Quit the Program
       
            To select any choice, just type the number opposite that
       choice. We'll discuss handicapping first.
       
                  ============================================
                               1. Handicap a Horse
                  ============================================
       
            When you choose this item, you'll be presented with a
       handicapping form with blank, highlighted fields for the
       information the program needs to analyze the horse. This is just
       like filling in a paper form.
       
            When you're through entering information in any field, just
       press the <RETURN> or <ENTER> key to go onto the next field. Some
       fields require single keystroke entries (Such as a "Y" for yes or
       "N" for no). In this case, just typing the appropriate letter will
       send you to the next field.
       
            You can correct information in any field by using the right
       and left cursor keys and typing over the previously entered
       information. The BACKSPACE key will move the cursor one character
       to the left without deleting. To delete material, use the DEL key.
       
            You can move backwards and forwards from field to field
       throughout the form by using the UP and DOWN cursor keys. When you
       reach the bottom field, the DOWN cursor key will cycle you back to
       the first field.
       
            Most fields in the form are checked for errors. If you have
       typed inappropriate information in a field, the program will
       return your cursor to the field with the bad information and
       display an error message at the bottom of the screen telling you
       what the problem is.
       
            As you go from field to field, the program will display a
       "Help" message in the box at the lower left hand side of the form
       telling you exactly what information is required for that field.
       
            When you have finished entering all the information in a
       form, you can exit from the form and get your handicapping
       calculations by hitting the <ESC> key.
       
            Here's the information required for each field:
       
            1. Horse No. and Name: Type the horse's betting number,

                                         Cambridge Harness Handicapper - 9




       followed by a space and his name. Then hit <RETURN>.
       
            2. Post position last time: Enter the horse's post position
       in his last race on a fast or sloppy track.
       
            3. Post position this race: Enter the horse's post position
       in this race.
       
            4. 1/2-Mile time: This is the leader's time at the 1/2-mile
       point of the horse's last race on a fast or sloppy track. The half
       mile time will generall be in the one-minute range, give or take a
       few seconds. Type the number in minutes, seconds and fifths of
       seconds. There is no need to type a colon. The program takes care
       of that. For example, if the half-mile time of the horse's last
       race was 59 and 2/5ths seconds, all you have to type is 0592. If
       it was 1 minute, 2 and 3/5ths seconds, type 1023.
       
           5. Final time: This is the horse's final time in the his last
       outing on a fast track. Once again, there is no need to type a
       colon. If the final time of the horse was last race was 2 minutes,
       4 and 3/5ths seconds, all you have to type is 2043. The program
       will format the time properly.
       
            6. Stretch gain: This is the number of lengths the horse
       gained on the leader in the stretch of his last race on a fast or
       sloppy track. This is determined by looking at the lightface
       superscript numbers that appear to the right of the numbers
       showing the horse's position at various points of the race. Find
       how many lengths behind the horse was at the beginning of the
       stretch and how many lenghts behind he was at the end of the race.
       The difference is the stretch gain. If the horse won the race and
       increased his lead or overtook the leader in the stretch, you can
       enter the increase in his lead. If he won but the second horse
       gained on him in the stretch, enter zero. If the horse lost ground
       in the stretch, enter zero.
       
            7. Parked out signs: Count the number of parked out signs
       (superscript zeros) you see to the right of the horse's position
       at various points in his last race on a fast or sloppy track.
       Enter the number of parked out signs you counted.
       
            8. Driver Record Last Race: If the driver in the horse's LAST
       race on a fast or sloppy track has won 15% or more of his races,
       type a "Y" in the "Last race" field. Otherwise, type an "N" in
       this field.
       
            9. Driver Record This Race: If the driver in THIS race has
       won 15% or more of his races, type a "Y" in the field labled "This
       race." Otherwise, type an "N" in this field.
       
           10. Class: If a horse is moving up, type "U" in this blank. If
       the horse is moving down, type "D". If the horse is staying in the
       same class, type "S". For guidelines to determine whether the
       horse is moving up or down in class, see the discussion of CLASS
       in the section titled "Where to get the Information You need."
       
           Once you have entered all the information in the form (It

                                        Cambridge Harness Handicapper - 10




       takes longer to read about it than to do it), and you're sure it's
       correct, hit the <ESC> key.
       
           The program will ask you, "Are you through with this horse
       (Y/N)." If the information is correct, type "Y". If it isn't
       correct, type "N" and you will be returnd to the form, where you
       can correct the bad entry or entries.
       
           Once you have indicated that the information is correct, the
       numeric score of the horse will be displayed in the "Help window."
       The score will generally be a number between 70 and 300, although
       the best or worst horses could go higher or lower.
       
           The program will then ask, "Do you want to handicap another
       horse? (Y/N)." If you want to handicap another horse, type "Y" and
       a new handicapping screen will be displayed. If you're finished
       handicapping, type "N" and you'll be returned to the Main Menu.
       
                                Now What Do I Do?
       
           To analyze a race, handicap each horse. When you're through
       with each horse, write down the horse's name, number and score
       (The Enhanced version takes care of all this for you). When you're
       through, you'll have a list of horses and numeric scores.
       
           THE HIGHER A HORSE'S SCORE COMPARED TO THE OTHERS IN THE RACE,
       THE MORE LIKELY THAT HORSE IS TO WIN THE RACE.
       
           For example, suppose these were the horses and scores:
       
           No.  Name               Score
       
           4    Paula's Dream       232
           2    Big Bad Ike         228
           5    BennyBear           212
           7    Mom's Mink          201
           8    Bag o' Bones        175
           6    Glue Factory        103
       
           In this case, the handicapper indicates that Paula's Dream is
       most likely to win the race, although Big Bad Ike is quite close.
       
















                                        Cambridge Harness Handicapper - 11




                  ============================================
                                   How to Bet
                  ============================================
       
           OUR RECOMMENDATION IS TO BET THE HIGHEST RATED HORSE (the one
       with the highest score) TO WIN AND PLACE. This is the safest wager
       and the one most likely to put money in your pocket over the long
       run.
       
           As usual, there are exceptions to this rule. For example, in
       the race above, suppose Paula's Dream is going off at less than
       even money, but Big Bad Ike is going off at 4-1. You're not going
       to make much if you bet on Paula's Dream, but Big Bad Ike is so
       close in the scoring that he becomes a better bet.
       
           IF THE TOP TWO HORSES ARE ONLY A FEW POINTS APART AND THE
       SECOND RATED HORSE IS GOING OFF AT MUCH BETTER ODDS, YOU MAY WANT
       TO BET THE SECOND-RANKED HORSE.
       
            This is one of the Cambridge Harness Handicapper's major
       strengths. Because it rates horses without regard to local betting
       habits or prejudices, it will often spot undervalued horses that
       make sound wagers.
       
           Finally, at some tracks our customers have reported better
       results by betting both the first and second-rated horses to win.
       This is particularly true if the handicapper ranks them closely,
       neither is a strong favorite and the odds on both are relatively
       good.
       
           Determining how all of this works at your track takes some
       trial and error. Before you plunk down your money for the first
       time, handicap a couple of cards and see how the program works at
       your track. Wagering patterns vary greatly from locality to
       locality. Knowing when and how to bet is just as important as
       selecting the right horse. It can make the difference between
       winning and losing money at the track.
       
            You'll notice we haven't mentioned exotic wagers, such as
       exactas, perfectas, triples and trifectas. That's because we don't
       believe in them as a sound wagering strategy. Without going into
       long explanations, just remember that it's tough enough to pick a
       winner in a race, let alone a winner and two particular losers.
       Tracks make a lot of their money from exotic wagers because the
       return to the bettors is much lower than it is on straight bets.
       We can virtually guarantee that you'll lose money on any strategy
       that involves exotic bets. Stay away from them.
       
           That's all you really need to know to get started. Obviously,
       familiarity with your track conditions will help. But even if
       you're new to horse racing, the Cambridge Harness Handicapper will
       make race analysis easier and more accurate. Remember that the
       most important factor in any handicapping system is discipline and
       consistency. If you choose your races wisely, apply the rules
       we've laid down and overcome the fan's natural tendency to put
       down money on every contest, you'll be able to turn a profit on
       your hobby.

                                        Cambridge Harness Handicapper - 12




             =======================================================
                    2. About the Enhanced Harness Handicapper
             =======================================================
       
            Menu Choice 2 will show you a screen containing information
       about the Enhanced version of this handicapping program, which
       will be sent to you when you send in your registration fee. We
       think this represents an oustanding buy, and we'll discuss some of
       the advanced version's additional features here:
       
            * The WAGERMASTER--This alone could be worth the price of
       registration. It will show you anticipated payoffs for a wide
       variety of odds and win/place/show bets. It's great for developing
       a wagering strategy or just plain "whatiffing." In addition, The
       WAGERMASTER will show you the conbinations and permutations of
       bets on various horses for daily double, exacta/perfecta and
       triple/trifecta type wagers. (We don't recommend exotic wagers,
       but we know you all love them, so we'll at least make sure you get
       the combinations right).
       
            * Handicap an entire race at once. You'll be able to input
       data for all the horses in a race (up to 16) at one time and see a
       screen or printed report, sorted by score from most likely winner
       to least-likely winner. See the sample report at the end of this
       section.
       
            * Keep track of shippers and last race date. While this
       doesn't effect the handicapping outcome, it will show you how many
       shippers are in a race, how long it has been since each horse last
       raced and how many horses have had layoffs of three weeks or more.
       Having this information can help you alter your betting strategy
       or pass up a bad race that you might otherwise have wasted money
       on.
       
            * Enhanced documentation. The instructions with the enhanced
       version contain all the information you see here, plus a detailed
       discussion of parimutuel betting that will eliminate much of the
       mystery and hopefully make you a wiser bettor.




















                                        Cambridge Harness Handicapper - 13




             =======================================================
                              3. Registration Form
             =======================================================
       
            This will make it even easier to register your program. When
       you choose No. 3 from the Main Menu, you'll be presented with a
       handicapper registration form. When you're finished filling out
       the form, you can print it out on your printer. This form is good
       for the Cambridge Harness Handicapper, Greyhound Handicapper and
       Harness Handicapper. You can register one or more programs at the
       same time. The registration fees are as follows:
       
            1 Handicapper             $30
            Any 2 handicappers        $50
            All 3 handicappers        $70
       
            When you mail the form to us with your registration fee (We
       also accept VISA and MasterCard), we'll ship you the enhanced
       version(s) right away. Here's how to fill out the form:
       
            Name and address fields: Type your full name on the first
       line and hit <RETURN>. Type your street address on the second and
       third lines (you can skip the third line if you only have a
       one-line address). The City, State and Zip Code go in separate
       blanks on the fourth line. You can use the <RETURN> and CURSOR
       keys to move from field to field the same way as you do in the
       handicapper data entry form.
       
            Type of Payment: If you're paying by check or money order,
       type a "Y" in the "Check/money order" box. If you're paying by
       credit card, type a "Y" in the Credit Card Box.
       
            Credit Card information: If you're paying by credit card,
       type a "V" or "M" for Visa or MasterCard in the box labeled "Type
       of Card." Then type your credit card number and expiration date in
       the following blanks.
       
            Handicappers registered: Type a "Y" in the appropriate blank
       for each handicapper you want to register, Harness, Thoroughbred
       or Greyhound.
       
            When you're through entering the registration information,
       hit the <ESC> key. You'll be asked if the information is correct.
       If it is, type "Y". If the information is not correct, type "N"
       and you'll be returned to the data entry screen.
       
            Once you have confirmed that the information is correct,
       you'll be asked if you want to print out the registration form. If
       you do, type "Y". You'll be prompted to make sure your printer is
       on line and then strike any key to print the registration form.
       
             If you don't want to print out the form, type "N" and you'll
       be returned to the Main Menu.
       
             Send the completed form with your registration fee to
       Federal Hill Software, 8134 Scotts Level Road, Baltimore, Md.
       21208. Make sure to include your signature on the proper blank if

                                        Cambridge Harness Handicapper - 14




       you're using a credit card. A registration form is also included
       at the end of these instructions.
       
       
             =======================================================
                                  Program Notes
             =======================================================
       
            The Cambridge Harness Handicapper was written and compiled
       using Borland International's Turbo Basic (TM). We chose Turbo
       Basic because it writes to the screen more quickly and produces
       more compact code than other Basic compilers.
            The data entry screens were created using the Screen Sculptor
       (TM) and SpeedScreen (TM) utilities from the Software Bottling
       Company of New York. The SPEEDSCR.COM file distributed with this
       program is licenced from and copyrighted by The Software Bottling
       Co. and may not be used with any other program.
       
            The Registered Version of The Cambridge Harness Handicapper
       is guaranteed to load and run as indicated in the accompanying
       instructions. No other warranties of any kind are made or implied,
       and Federal Hill Software will not be responsible for any damage
       or loss resulting from the use of any of its programs.
       
            LAST MINUTE NOTES: When your are entering data in the
       handicapping form and indicate the horse's post position in either
       this race or its last race was greater than 8, a message will pop
       up at the bottom of the screen asking you if the horse is or was
       running in the second tier. If the answer is yes, type "Y"; if the
       answer is no, type "N".




























                                        Cambridge Harness Handicapper - 15




             =======================================================
                           Sample Handicapping Report
             =======================================================
       
       The following is a sample of the type of full race handicapping
       report produced by the Enhanced Version of the Cambridge Harness
       Handicapper:
       
       
       ===================================================================
       
                          HANDICAPPER RATING REPORT
                      TRACK: FREESTATE  DATE: 10/07/87
                         RACE NO. 8 -- $8,000 Claiming
       ===================================================================
       
         HORSE              RATING      LAYOFF    CLASS  SHIP   FIN  PAID
       ===================================================================
       
       
       2 IKE'S DREAM          256          7        D
       -------------------------------------------------------------------
       
       6 BILLY BOY            254         10        S      Y
       -------------------------------------------------------------------
       
       8 JACK'S REVENGE       242          7        U
       -------------------------------------------------------------------
       
       1 WILL 'O WISP         228         12        S
       -------------------------------------------------------------------
       
       5 BENNYBEAR            218         14        S      Y
       -------------------------------------------------------------------
       
       7 TURKEY NICK          202          7        D
       -------------------------------------------------------------------
       
       3 PIZZA TO GO          196         24        S
       -------------------------------------------------------------------
       
       
       Total number of shippers in race: 2
       CAUTION: Contending horses include shippers
       Total number of horses with layoffs of 21 days or more: 1
       
       ===================================================================
       
                    The Cambridge Harness Handicapper
       ===================================================================
       







                                        Cambridge Harness Handicapper - 16




       ===================================================================
                                        
                        The Cambridge Harness Handicapper
                                Registration Form
       ===================================================================
                                        
       
       
       
       NAME:
                  ------------------------------------------------------
       ADDRESS:
                  ------------------------------------------------------
       
                  ------------------------------------------------------
       
       CITY                                       ST       ZIP
                  -------------------------------   ------    ----------
       
       Type of Payment:  Check/mo (  )     Credit Card (    )
       
       Card Type (V/M)    No.                            EXP.
                      ---    ---------------------------     -----------
       
       SIGNATURE:
                  ------------------------------------------------------
       
       Please Register the Following Programs:
       
       ( ) Cambridge Harness Handicapper
       ( ) Cambridge Thoroughbred Handicapper
       ( ) Cambridge Greyhound Handicapper
       
       Price List:    1 Handicapper            $30
                      Any two handicappers      50
                      All three handicappers    70
       
       Total Registration fee enclosed:
                                         ----------
       
       
       
       
       
       
       
       
       
       ==================================================================
                               Send This Form To:
                              Federal Hill Software
                             8134 Scotts Level Road
                               Baltimore, MD 21208
                                  301-521-4886
       ==================================================================



                                        Cambridge Harness Handicapper - 17

```
{% endraw %}

## HOUNDS.DOC

{% raw %}
```




                       The Cambridge Greyhound Handicapper
                 (C)1987 By Leonard Hyre and Michael J. Himowitz
                      Distributed by Federal Hill Software
                             8134 Scotts Level Road
                              Baltimore, Md. 21208
       
       
       
            The Cambridge Greyhound Handicapper is a powerful,
       sophisticated tool that will allow you to handicap Greyhound races
       quickly and easily. It's not a magic, get-rich-quick scheme. But
       if you follow these instructions, impose some discipline and use
       the handicapper wisely, you should be able to improve your
       performance at the track and make money in the process.
            The Cambridge Handicapper is easy to use. All the information
       you need is available in the race track program, which is usually
       available the day before the race. With a little practice, you'll
       be able to handicap a race in a few minutes and a whole card in
       less than an hour.
       
                  About the Program and User-Supported Software
       
            This is a proven handicapper. Federal Hill Software has been
       marketing Greyhound, Thoroughbred and Harness programs
       commercially for a variety of computers since 1983. You may have
       seen our advertisements in magazines such as Compute!, Compute's
       Gazette, Computer Shopper, RUN, PCResource, Rainbow, PCM and
       others.
            We have sold thousands of copies. The problem is that
       advertising rates--the largest single cost of doing business--have
       skyrocketed in the last two years. Eventually we decided that it
       was just too expensive to market special interest programs such as
       handicappers in general-interest computer magazines.
            So we did two things.
            First, we rewrote the handicappers from top to bottom, making
       them more attractive, quicker and even easier to use with
       full-screen data entry, on-line help, and revised rating formulas
       that reflect our most recent research.
            Second, we decided to put working versions of the IBM
       handicappers directly in the hands of the people who want them.
       This is known as user-supported software. If you like the program
       and use it, we ask that you send us a $30 registration fee. This
       is $20 less than the previous selling price.
            For your money you'll get an Enhanced version of the program
       with additional features that will make your handicapping even
       easier and more exciting--including the WAGERMASTER betting
       analysis program. We'll talk more about the enhanced version at
       the end of these instructions.
             The User-Supported version you have here is in no way
       crippled. Some shareware companies do this as a come-on, but we
       don't think that's fair. This User-Supported version uses exactly
       the same handicapping forumlas as our enhanced version and
       produces the same results. You may use it and distribute it to
       anyone. Give it away, post it on your local computer bulletin
       boards, or put in in your user-group library. There are only a few
       conditions. They are:
       





             1. The Cambridge Handicappers are copyrighted by the authors
       and remain their intellectual property, protected by U.S. and
       international copyright laws.
       
             2. You may not distribute a modified version of the
       User-Supported program or any version of the Enhanced program.
       
             3. When you distribute the User Supported version, you must
       include ALL the files on this disk (or in the group of files which
       you un-ARCed). The program won't work properly unless they're all
       there.
       
             Enough of that. Let's get on with the program itself.
       
                               System Requirements
       
            The Cambridge Greyhound Handicapper will run on any
       IBM-compatible computer with 256K of memory and a video display
       adapter that emulates the IBM Color Graphics Adapter, IBM
       Monochrome Graphics Adapter or the Hercules Monochrome Graphics
       Adapter. That means just about everything on the market today,
       including all models of the Tandy 1000, 1200, 3000 and 4000 with
       sufficient memory.
            There are a few computers with which the program is not
       compatible. They include the Tandy 2000 and unmodified Sanyo 550
       series (although they should work on Sanyos that have
       IBM-compatible graphics adapters). If you have one of these
       non-IBM compatible MS-DOS computers, we do have an earlier version
       of the program which will run on them. Contact us for information.
       
                             The Files on this Disk
       
            The Cambridge Greyhound Handicapper is composed of five
       files. All of these files must be on the disk from which the
       program is launched or the hard disk directory from which the
       program is launched. They are as follows:
       
            HOUNDS.BAT    The batch file that starts the program.
            NHOUND1.EXE   The handicapper program.
            NHOUND1.PAK   The screen files used by the program.
            SPEEDSCR.COM  A memory resident screen driver.
            HOUNDS.DOC    Instructions for the use of the program.
       
            If these files are on a floppy disk, that's all you'll need
       to run the program. If you want to use a hard disk, set up a
       directory for the program and use the DOS "Copy" command to
       transfer all the files on this disk to the directory you have set
       up for it.
       
       
                               Running the Program
       
            To run The Cambridge Greyhound handicapper, put the disk with
       the program in Drive A or use the "CHDIR" command to switch to the
       hard disk directory in which the programs are stored.
       
            Type HOUNDS and hit the <RETURN> key. This will load the

                                       Cambridge Greyhound Handicapper - 2




       program.
       
            DO NOT ATTEMPT TO LAUNCH NHOUND1.EXE directly. Use the
       HOUNDS.BAT file to do it. Here's why:
       
            HOUNDS.BAT first loads SPEEDSCR.COM, a memory resident
       program which manages the screens used by the Cambridge
       Thoroughbred Handicapper. Without SPEEDSCR, the program will not
       work. The HOUNDS.BAT file also removes SPEEDSCR from memory when
       you terminate the handicapper program. While SPEEDSCR probably
       won't cause difficulties if left in memory after you exit from the
       handicapper, it can, under some circumstances, produce some
       unusual if harmless results. So always start the program by typing
       HOUNDS and hitting the RETURN key.
       
            When you type HOUNDS and hit <RETURN>, your disk drive will
       whir for a few seconds. Then you'll see a message asking if you
       have a color monitor. If you do, type "Y" and the display will
       change to color. If you don't have a color monitor, type "N" and
       the program will run in monochrome mode.
       
            At this point, you'll see a title screen followed by a
       message explaining the handicapper's shareware status. (We've
       removed that message from the enhanced version). A few seconds
       later, the MAIN MENU will appear. Before you start handicapping,
       however, please read the following sections that describe
       handicapping systems and the information you'll need to use the
       Cambridge Greyhound Handicapper.
       





























                                       Cambridge Greyhound Handicapper - 3




                  ============================================
                           About Handicapping Systems
                  ============================================
       
            A handicapping system does two things.
       
            First, it attempts to predict a dog's peformance in an
       upcoming race by analyzing past performances in a consistent,
       scientific manner.
       
            Second, it provides you with a strategy for betting on races
       given the outcome of your handicapping analysis.
       
            As strange as it sounds, the true purpose of a handicapping
       system is not to pick winners. The purpose of a handicapping
       system is to give you a tool that will help you make money at the
       track. Knowing how and when to bet is just as important as
       analyzing the dogs.
            There are as many handicapping systems as there are
       handicappers. Some are quite good, others are worthless. Some
       require hours or days of effort, some require only a few minutes
       of preparation.
            You don't really need a computer to handicap a race. There
       are plenty of manual handicapping systems around, and some are
       excellent. Unfortunately, they're often tedious and
       time-consuming. A computer handicapping system takes the
       handicapper's knowledge, sets up handicapping tables and rules
       internally, and then makes calculations instantly.
            We designed the Cambridge Greyhound Handicapper to provide a
       blend of sophistication and ease of use for the race fan who
       enjoys the sport but doesn't have hours and hours to devote to
       handicapping. If you've never tried to handicap a race before,
       you'll find this quite easy to use. If you're an experienced
       handicapper, the information the system requires you to collect
       will be just as useful as the ratings themselves. The program will
       sharpen your own thinking and handicapping analysis.
       
                  ============================================
                            The Information You Need
                               And Where to Get It
                  ============================================
       
            To use The Cambridge Greyhound Handicapper, you must be
       familiar with the information available to you in track program.
       The program is always available on the day of a race and usually
       the day before.
            The program contains two different pieces of information
       you'll need. First, there's the "condition line," a table of of
       information that shows the distance and class of each race and
       provides information about about each dog's performance in the
       last six to eight races. Second, the program contains a listing of
       kennels and how much money each kennel has won.
       
            Here is the information you'll need about each dog:
       
            1. The dog's box, or post position. This is the position
       relative to the rail from which the dog will start the race. The

                                       Cambridge Greyhound Handicapper - 4




       No. 1 dog will start next to the rail. The higher the number, the
       further from the rail the dog will start. Most Greyhound races are
       limited to eight dogs.
       
            2. The date of the dog's last race on a fast ("ft") or sloppy
       ("sy") track. We will use sloppy tracks for rating purposes, since
       they don't seem to affect dogs' times, but it's not a good idea to
       bet on races being run on a sloppy track. We're interested in this
       because dogs running after a layoff of three weeks or more can be
       difficult to handicap.
       
            3. The class of this race and the dog's previous races.
       Classes vary from state to state, but generally they run from
       "AA," which is the highest class, to "E," which is the lowest
       class. A class of "M" indicates a Maiden race, which means none of
       the dogs running in that race has ever won.
       
            4. The dog's time in his last race at same distance he's
       running tonight. This time is expressed in seconds and hundredths.
       For most races, the time will be in the 28 to 34 second range,
       although marathons can go as high as 50 seconds.
       
            5. The dog's position going into the first turn in his last
       four races. This is important because a dog that gets out in front
       early displays good strength and  maneuverability. Also,
       statistics show that dogs who consistently get to the first turn
       at the front of the pack have a better chance of winning than dogs
       who have to come from behind.
       
            6. Significant comments: These short comments show how the
       dog ran each of his previous races. We are specifically interested
       in comments indicating that the dog ran either WIDE/OUTSIDE or
       went for the RAIL/INSIDE. This is important when compared to the
       box from which the dog is starting, because a dog who likes to run
       inside will do well if he's got an inside box but may be in
       trouble if he's drawn an outside starting position, and vice
       versa.
       
            7. Was the dog a beaten favorite? This determines whether the
       dog was the favorite last time out on a fast or sloppy track and
       whether or not he won the race. If the dog was the favorite, an
       asterisk (*) will appear next to the dollar odds on the dog in the
       line containing the information for the dog's last race. This is
       important because a favorite who was beaten last time out will
       often win this time around.
       
            8. The record of the dog's kennel. We want to know whether
       the kennel is in the top four moneywinners at the track.










                                       Cambridge Greyhound Handicapper - 5




                  ============================================
                             Handicapping Principles
                  ============================================
       
            A computer can help you with handicapping calculations, but
       there's no substitute for a little human judgment in the process.
       The key to handicapping is knowing which races to bet (not every
       race can be properly handicapped) and which dogs to eliminate from
       contention before you start handicapping.
       
                              When to Bet on a Race
       
            For any handicapping system to work, there must be a good
       probability that the past performances of the dogs involved will
       be reflected in their performance in the race you're handicapping.
       Unfortunately, this isn't the case in every race. At the very best
       tracks, almost every non-maiden race may be handicappable. At
       tracks with lower-class dogs, you may only find five or six races
       on a card that lend themselves to analysis. Here are the
       guidelines we use:
       
            * Don't bother going to the track and using this program if
       the track condition is not "fast." An off track--good, muddy, or
       sloppy--should be avoided. There's a good reason for this. Dogs
       usually run on fast tracks. They train on fast tracks. While some
       dogs may be good "mudders," there's no real way of knowing how
       they'll respond to bad track conditions. Some dogs may love soft
       footing, others may hate it. The problem is that there's no way to
       tell for sure. So stay away from off tracks.
       
            * DON'T BET ON MAIDEN RACES. These are unproven or just plain
       bad dogs, and most handicapping techniques are useless when
       they're running.
       
            * Dont bet on races featuring the cheapest dogs on the
       grounds.  These are old, bad or tired dogs who are unpredictale.
       They may run well one week and terribly the next. If you can't
       count on a dog's past performance to be indicative of his
       performance today, you can't handicap the dog.
             These dogs usually show up in the first and last races of a
       card, particularly at tracks where the overall quality of dogs is
       not high. At the very best tracks, this rule may not apply, since
       even the cheapest dogs could be feature race material at lesser
       tracks. As a general rule, avoid handicapping class "D" races if
       you can and forget entirely about "E" races.
       
            * Don't bet on races with a high proportion of "shippers." A
       shipper is a dog running at a track for the first time. You have
       no way of knowing how a dog will respond to a new surface. If you
       run across a race in which a shipper looks like a real contender,
       our advice is to pass it up. This takes some discipline, but
       you'll be better off for it. Also, any race with three or more
       shippers is probably a bad bet. We realize that this will
       eliminate many stakes races with high purses. While these are fun
       to watch, they're not usually good handicapping propositions. You
       can take consolation in the fact that the other races on the same
       card with a high-purse stakes race are likely to be good ones.

                                       Cambridge Greyhound Handicapper - 6




                               Eliminate Bad dogs
       
            Once you have decided whether to bet a race, you can easily
       eliminate certain dogs from contention. These will usually be
       eliminated by the computer, but occasionally a really bad dog will
       score highly. Take a few seconds to eliminate these first and the
       system will work much better. Only at the very best tracks will
       you have to handicap more than a half-dozen dogs in a race.
       
            * Eliminate any dog which has not raced in the last three
       weeks. You have no way of knowing why this dog has been on
       vacation, but if an animal is running well, the trainer will race
       him regularly. Time off is usually a bad sign. This may not apply
       to the absolutely best-quality stakes dogs, who race less
       frequently, but stakes races are bad bets anyway.
       
            * Eliminate any dog who did not show a strong performance
       last time out. By this we mean a win, place or show, or setting
       the early pace as the leader in fairly quick time. If a dog showed
       none of these, forget him.
       
            * Eliminate "shippers." These are dogs running at a track for
       the first time. Once again, this may not be possible in big stakes
       races, but we think these are difficult to handicap anyway and
       should be avoided.
       
































                                       Cambridge Greyhound Handicapper - 7




                  ============================================
                                Using the Program
                  ============================================
       
            When you run the Cambridge Greyhound Handicapper, you'll see
       a menu with four choices. The choices are:
       
                    1. Handicap a dog
                    2. About the Enhanced Handicapper
                    3. Registration Form
                    4. Quit the Program
       
            To select any choice, just type the number opposite that
       choice. We'll discuss handicapping first.
       
       
                  ============================================
                                1. Handicap a dog
                  ============================================
       
            When you choose this item, you'll be presented with a
       handicapping form with blank, highlighted fields for the
       information the program needs to analyze the dog. This is just
       like filling in a paper form.
       
            When you're through entering information in any field, just
       press the <RETURN> or <ENTER> key to go onto the next field. Some
       fields require single keystroke entries (Such as a "Y" for yes or
       "N" for no). In this case, just typing the appropriate letter will
       send you to the next field.
       
            You can correct information in any field by using the right
       and left cursor keys and typing over the previously entered
       information. The BACKSPACE key will move the cursor one character
       to the left without deleting. To delete material, use the DEL key.
       
            You can move backwards and forwards from field to field
       throughout the form by using the UP and DOWN cursor keys. When you
       reach the bottom field, the DOWN cursor key will cycle you back to
       the first field.
       
            Most fields in the form are checked for errors. If you have
       typed inappropriate information in a field, the program will
       return your cursor to the field with the bad information and
       display an error message at the bottom of the screen telling you
       what the problem is.
       
            As you go from field to field, the program will display a
       "Help" message in the box at the lower left hand side of the form
       telling you exactly what information is required for that field.
       
            When you have finished entering all the information in a
       form, you can exit from the form and get your handicapping
       calculations by hitting the <ESC> key.
       
            Here's the information required for each field:
       

                                       Cambridge Greyhound Handicapper - 8




            1. Dog No. and Name: Type the dog's betting number, followed
       by a space and his name. Then hit <RETURN>.
       
            2. Time: This is dog's final time in his last race at the
       dis1ance being run tonight. Enter the time in seconds and
       hundredths, i.e., 31.24 or 30.49
       
            3. Highest class in which this dog has raced: Look at the
       entries for each of the six or eight races listed for this dog.
       Find the highest class of race in which he has raced. Some track
       programs refer to this as the GRADE of the race. Then look at the
       HELP box on the screen. You will see the following table of
       classes:
       
                1> AA    3> B    5> D   7> M (Maiden)
                2>  A    4> C    6> E
       
       
            Type the NUMBER opposite the letter representing the highest
       class in which the dog has raced. For example, if the dog's
       highest listed race was a  Class B race, type 3. Classes vary from
       state to state. Assume that Class AA represents the highest class
       in your state.
       
            4. Class of this race: Using the same table as in (3) above,
       type the number opposite the letter which represents the class of
       this race and type it in the appropriate box. The class of the
       race is a large letter at the very top of the page listing for
       each race. Some tracks refer to this as the GRADE of the race.
       
            5. Box: Enter the number of the box from which the dog is
       racing today. This is the large number at the extreme left hand
       side of the entry for each dog.
       
            6. Inside comments: Look at the listing of comments for each
       of the dog's last SIX races. Count the number of times the words
       INSIDE or RAIL appear. Type the number in this box. Do not count
       comments that say FORCED INSIDE or BUMPED INSIDE.
       
            7. Outside comments: Look at the listing of comments for each
       of the dog's last SIX races. Count the number of times the words
       OUTSIDE OR WIDE appear. Type the number in this box. Do not count
       comments that say FORCED OUTSIDE, FORCED WIDE, BUMPED OUTSIDE or
       BUMPED WIDE.
       
            8. Turn position last four races: Look at the column labeled
       "1/8" for the dog's last FOUR races. This shows where the dog was
       running as the pack entered the first turn. For each of these
       races, type the appropriate position number in the appropriate
       box.
       
           9. Beaten favorite last time?: If the dog was the favorite
       last time out on a fast or sloppy track but did NOT win the race,
       type "Y" here. You can tell if a dog was the favorite because
       there will usually be an asterisk (*) next to the column showing
       the dollar odds on the dog for that race.
       

                                       Cambridge Greyhound Handicapper - 9




           10. Top Kennel: Check the track program and find the listing
       of kennels and their records. If the this dog's kennel is in the
       top four, type "Y". If it isn't in the top four, type "N".
       
           Once you have entered all the information in the form (It
       takes longer to read about it than to do it), and you're sure it's
       correct, hit the <ESC> key.
       
           The program will ask you, "Are you through with this dog
       (Y/N)." If the information is correct, type "Y". If it isn't
       correct, type "N" and you will be returned to the form, where you
       can correct the bad entry or entries.
       
           Once you have indicated that the information is correct, the
       numeric score of the dog will be displayed in the "Help window."
       The score will generally be a number between 80 and 200, although
       the best or worst dogs could go higher or lower.
       
           The program will then ask, "Do you want to handicap another
       dog? (Y/N)." If you want to handicap another dog, type "Y" and a
       new handicapping screen will be displayed. If you're finished
       handicapping, type "N" and you'll be returned to the Main Menu.
       
                                Now What Do I Do?
       
           To analyze a race, handicap each dog. When you're through with
       each dog, write down the dog's name, number and score (The
       Enhanced version takes care of all this for you). When you're
       through, you'll have a list of dogs and numeric scores.
       
           THE HIGHER A DOG'S SCORE COMPARED TO THE OTHERS IN THE RACE,
       THE MORE LIKELY THAT dog IS TO WIN THE RACE.
       
           For example, suppose these were the dogs and scores:
       
           No.  Name               Score
       
           4    Paula's Dream       144
           2    Big Bad Ike         142
           5    BennyBear           136
           7    Mom's Mink          122
           8    Bag o' Bones        116
           6    Glue Factory        102
       
           In this case, the handicapper indicates that Paula's Dream is
       most likely to win the race, although Big Bad Ike is quite close.
       











                                      Cambridge Greyhound Handicapper - 10




                  ============================================
                                   How to Bet
                  ============================================
       
           OUR RECOMMENDATION IS TO BET THE HIGHEST RATED DOG (the one
       with the highest score) TO WIN AND PLACE. This is the safest wager
       and the one most likely to put money in your pocket over the long
       run.
       
           As usual, there are exceptions to this rule. For example, in
       the race above, suppose Paula's Dream is going off at less than
       even money, but Big Bad Ike is going off at 4-1. You're not going
       to make much if you bet on Paula's Dream, but Big Bad Ike is so
       close in the scoring that he becomes a better bet.
       
           IF THE TOP TWO DOGS ARE ONLY A FEW POINTS APART AND THE SECOND
       RATED DOG IS GOING OFF AT MUCH BETTER ODDS, YOU MAY WANT TO BET
       THE SECOND-RANKED DOG.
       
            This is one of the Cambridge Greyhound Handicapper's major
       strengths. Because it rates dogs without regard to local betting
       habits or prejudices, it will often spot undervalued dogs that
       make sound wagers.
       
           Finally, at some tracks our customers have reported better
       results by betting both the first and second-rated dogs to win.
       This is particularly true if the handicapper ranks them closely,
       neither is a strong favorite and the odds on both are relatively
       good.
       
           Determining how all of this works at your track takes some
       trial and error. Before you plunk down your money for the first
       time, handicap a couple of cards and see how the program works at
       your track. Wagering patterns vary greatly from locality to
       locality. Knowing when and how to bet is just as important as
       selecting the right dog. It can make the difference between
       winning and losing money at the track.
       
            You'll notice we haven't mentioned exotic wagers, such as
       exactas, perfectas, triples and trifectas. That's because we don't
       believe in them as a sound wagering strategy. Without going into
       long explanations, just remember that it's tough enough to pick a
       winner in a race, let alone a winner and two particular losers.
       Tracks make a lot of their money from exotic wagers because the
       return to the bettors is much lower than it is on straight bets.
       We can virtually guarantee that you'll lose money on any strategy
       that involves exotic bets. Stay away from them.
       
           That's all you really need to know to get started. Obviously,
       familiarity with your track conditions will help. But even if
       you're new to dog racing, the Cambridge Greyhound Handicapper will
       make race analysis easier and more accurate. Remember that the
       most important factor in any handicapping system is discipline and
       consistency. If you choose your races wisely, apply the rules
       we've laid down and overcome the fan's natural tendency to put
       down money on every contest, you'll be able to turn a profit on
       your hobby.

                                      Cambridge Greyhound Handicapper - 11




             =======================================================
                   2. About the Enhanced Greyhound Handicapper
             =======================================================
       
            Menu Choice 2 will show you a screen containing information
       about the Enhanced version of this handicapping program, which
       will be sent to you when you send in your registration fee. We
       think this represents an oustanding buy, and we'll discuss some of
       the advanced version's additional features here:
       
            * The WAGERMASTER--This alone could be worth the price of
       registration. It will show you anticipated payoffs for a wide
       variety of odds and win/place/show bets. It's great for developing
       a wagering strategy or just plain "whatiffing." In addition, The
       WAGERMASTER will show you the conbinations and permutations of
       bets on various dogs for daily double, exacta/perfecta and
       triple/trifecta type wagers. (We don't recommend exotic wagers,
       but we know you all love them, so we'll at least make sure you get
       the combinations right).
       
            * Handicap an entire race at once. You'll be able to input
       data for all the dogs in a race (up to 16) at one time and see a
       screen or printed report, sorted by score from most likely winner
       to least-likely winner. See the sample report at the end of this
       section.
       
            * Keep track of shippers and last race date. While this
       doesn't effect the handicapping outcome, it will show you how many
       shippers are in a race, how long it has been since each dog last
       raced and how many dogs have had layoffs of three weeks or more.
       Having this information can help you alter your betting strategy
       or pass up a bad race that you might otherwise have wasted money
       on.
       
            * Enhanced documentation. The instructions with the enhanced
       version contain all the information you see here, plus a detailed
       discussion of parimutuel betting that will eliminate much of the
       mystery and hopefully make you a wiser bettor.




















                                      Cambridge Greyhound Handicapper - 12




             =======================================================
                              3. Registration Form
             =======================================================
       
            This will make it even easier to register your program. When
       you choose No. 3 from the Main Menu, you'll be presented with a
       handicapper registration form. When you're finished filling out
       the form, you can print it out on your printer. This form is good
       for the Cambridge Greyhound Handicapper, Thoroughbred Handicapper
       and Harness Handicapper. You can register one or more programs at
       the same time. The registration fees are as follows:
       
            1 Handicapper             $30
            Any 2 handicappers        $50
            All 3 handicappers        $70
       
            When you mail the form to us with your registration fee (We
       also accept VISA and MasterCard), we'll ship you the enhanced
       version(s) right away. Here's how to fill out the form:
       
            Name and address fields: Type your full name on the first
       line and hit <RETURN>. Type your street address on the second and
       third lines (you can skip the third line if you only have a
       one-line address). The City, State and Zip Code go in separate
       blanks on the fourth line. You can use the <RETURN> and CURSOR
       keys to move from field to field the same way as you do in the
       handicapper data entry form.
       
            Type of Payment: If you're paying by check or money order,
       type a "Y" in the "Check/money order" box. If you're paying by
       credit card, type a "Y" in the Credit Card Box.
       
            Credit Card information: If you're paying by credit card,
       type a "V" or "M" for Visa or MasterCard in the box labeled "Type
       of Card." Then type your credit card number and expiration date in
       the following blanks.
       
            Handicappers registered: Type a "Y" in the appropriate blank
       for each handicapper you want to register, Thoroughbred, Harness
       or Greyhound.
       
            When you're through entering the registration information,
       hit the <ESC> key. You'll be asked if the information is correct.
       If it is, type "Y". If the information is not correct, type "N"
       and you'll be returned to the data entry screen.
       
            Once you have confirmed that the information is correct,
       you'll be asked if you want to print out the registration form. If
       you do, type "Y". You'll be prompted to make sure your printer is
       on line and then strike any key to print the registration form.
       
             If you don't want to print out the form, type "N" and you'll
       be returned to the Main Menu.
       
             Send the completed form with your registration fee to
       Federal Hill Software, 8134 Scotts Level Road, Baltimore, Md.
       21208. Make sure to include your signature on the proper blank if

                                      Cambridge Greyhound Handicapper - 13




       you're using a credit card. A registration form is also included
       at the end of these instructions.
       
             =======================================================
                                  Program Notes
             =======================================================
       
            The Cambridge Greyhound Handicapper was written and compiled
       using Borland International's Turbo Basic (TM). We chose Turbo
       Basic because it writes to the screen more quickly and produces
       more compact code than other Basic compilers.
            The data entry screens were created using the Screen Sculptor
       (TM) and SpeedScreen (TM) utilities from the Software Bottling
       Company of New York. The SPEEDSCR.COM file distributed with this
       program is licenced from and copyrighted by The Software Bottling
       Co. and may not be used with any other program.
       
            The Registered Version of The Cambridge Greyhound Handicapper
       is guaranteed to load and run as indicated in the accompanying
       instructions. No other warranties of any kind are made or implied,
       and Federal Hill Software will not be responsible for any damage
       or loss resulting from the use of any of its programs.




































                                      Cambridge Greyhound Handicapper - 14




             =======================================================
                           Sample Handicapping Report
             =======================================================
       
       The following is a sample of the type of full race handicapping
       report produced by the Enhanced Version of the Cambridge Greyhound
       Handicapper:
       
       
       ===================================================================
       
                          HANDICAPPER RATING REPORT
                     TRACK: SANFORD/ORLANDO DATE: 10/07/87
                             RACE NO. 8 -- $8,000
       ===================================================================
       
         dog              RATING      LAYOFF    CLASS  SHIP   FIN  PAID
       ===================================================================
       
       
       2 IKE'S DREAM          142          7        D
       -------------------------------------------------------------------
       
       6 BILLY BOY            140         10        S      Y
       -------------------------------------------------------------------
       
       8 JACK'S REVENGE       136          7        U
       -------------------------------------------------------------------
       
       1 WILL 'O WISP         132         12        S
       -------------------------------------------------------------------
       
       5 BENNYBEAR            122         14        S      Y
       -------------------------------------------------------------------
       
       7 TURKEY NICK          116          7        D
       -------------------------------------------------------------------
       
       3 PIZZA TO GO          102         24        S
       -------------------------------------------------------------------
       
       
       Total number of shippers in race: 2
       CAUTION: Contending dogs include shippers
       Total number of dogs with layoffs of 21 days or more: 1
       
       ===================================================================
                    The Cambridge Greyhound Handicapper
       ===================================================================
       







                                      Cambridge Greyhound Handicapper - 15




       ===================================================================
                                        
                       The Cambridge Greyhound Handicapper
                                Registration Form
       ===================================================================
                                        
       
       
       
       NAME:
                  ------------------------------------------------------
       ADDRESS:
                  ------------------------------------------------------
       
                  ------------------------------------------------------
       
       CITY                                       ST       ZIP
                  -------------------------------   ------    ----------
       
       Type of Payment:  Check/mo (  )     Credit Card (    )
       
       Card Type (V/M)    No.                            EXP.
                      ---    ---------------------------     -----------
       
       SIGNATURE:
                  ------------------------------------------------------
       
       Please Register the Following Programs:
       
       ( ) Cambridge Greyhound Handicapper
       ( ) Cambridge Thoroughbred Handicapper
       ( ) Cambridge Harness Handicapper
       
       Price List:    1 Handicapper            $30
                      Any two handicappers      50
                      All three handicappers    70
       
       Total Registration fee enclosed:
                                         ----------
       
       
       
       
       
       
       
       
       
       ==================================================================
                               Send This Form To:
                              Federal Hill Software
                             8134 Scotts Level Road
                               Baltimore, MD 21208
                                  301-521-4886
       ==================================================================



                                      Cambridge Greyhound Handicapper - 16

```
{% endraw %}

## THISDISK.DOC

{% raw %}
```
                          The Cambridge Handicappers
                (C)1987 by Leonard Hyre and Michael J. Himowitz
                     Distributed by Federal Hill Software
                            8134 Scotts Level Road
                              Baltimore, MD 21208
                                 301-521-4886
       
          This disk contains .ARC files for the Cambridge Thoroughbred,
       Harness and Greyhound Handicappers. These are fine, professional
       quality handicappers distributed on a USER-SUPPORTED basis. We
       encourage user groups, shareware and public-domain libraries to
       distribute these files, include them in their catalogs, and post
       them on computer bulletin boards.
       
          THORO.ARC  contains the THOROUGHBRED handicapping files.
          HOUNDS.ARC contains the GREYHOUND handicapping files.
          HARNESS.ARC contains the HARNESS handicapping files.
       
          Use PKXARC, XARC or ARCE programs to unsqueeze the .ARC
       files. Each un-ARCed file will take up about 140K of disk space.
       If you should run into any problems, please contact Mike
       Himowitz at the number above or leave messages to Mike Himowitz
       on Compuserve (71655,1327). We hope you like our programs.


```
{% endraw %}

## THORO.DOC

{% raw %}
```




                     The Cambridge Thoroughbred Handicapper
                 (C)1987 By Leonard Hyre and Michael J. Himowitz
                      Distributed by Federal Hill Software
                             8134 Scotts Level Road
                              Baltimore, Md. 21208
       
       
       
            The Cambridge Thoroughbred Handicapper is a powerful,
       sophisticated tool that will allow you to handicap thoroughbred
       horses quickly and easily. It's not a magic, get-rich-quick
       scheme. But if you follow these instructions, impose some
       discipline and use the handicapper wisely, you should be able to
       improve your performance at the track and make money in the
       process.
            The Cambridge Handicapper is easy to use. All the information
       you need is available in the Racing Form, although you may want to
       check your local newspaper for late scratches and jockey changes.
       With a little practice, you'll be able to handicap a race in a few
       minutes and a whole card in less than an hour.
       
                  About the Program and User-Supported Software
       
            This is a proven handicapper. Federal Hill Software has been
       marketing Thoroughbred, Harness and Greyhound programs
       commercially for a variety of computers since 1983. You may have
       seen our advertisements in magazines such as Compute!, Compute's
       Gazette, Computer Shopper, RUN, PCResource, Rainbow, PCM and
       others.
            We have sold thousands of copies. The problem is that
       advertising rates--the largest single cost of doing business--have
       skyrocketed in the last two years. Eventually we decided that it
       was just too expensive to market special interest programs such as
       handicappers in general-interest computer magazines.
            So we did two things.
            First, we rewrote the handicappers from top to bottom, making
       them more attractive, quicker and even easier to use with
       full-screen data entry, on-line help, and revised rating formulas
       that reflect our most recent research.
            Second, we decided to put working versions of the IBM
       handicappers directly in the hands of the people who want them.
       This is known as user-supported software. If you like the program
       and use it, we ask that you send us a $30 registration fee. This
       is $20 less than the previous selling price.
            For your money you'll get an Enhanced version of the program
       with additional features that will make your handicapping even
       easier and more exciting--including the WAGERMASTER betting
       analysis program. We'll talk more about the enhanced version at
       the end of these instructions.
             The User-Supported version you have here is in no way
       crippled. Some shareware companies do this as a come-on, but we
       don't think that's fair. This User-Supported version uses exactly
       the same handicapping forumlas as our enhanced version and
       produces the same results. You may use it and distribute it to
       anyone. Give it away, post it on your local computer bulletin
       boards, or put in in your user-group library. There are only a few
       conditions. They are:





             1. The Cambridge Handicappers are copyrighted by the authors
       and remain their intellectual property, protected by U.S. and
       international copyright laws.
       
             2. You may not distribute a modified version of the
       User-Supported program or any version of the Enhanced program.
       
             3. When you distribute the User Supported version, you must
       include ALL the files on this disk (or in the group of files which
       you un-ARCed). The program won't work properly unless they're all
       there.
       
             Enough of that. Let's get on with the program itself.
       
                               System Requirements
       
            The Cambridge Thoroughbred Handicapper will run on any
       IBM-compatible computer with 256K of memory and a video display
       adapter that emulates the IBM Color Graphics Adapter, IBM
       Monochrome Graphics Adapter or the Hercules Monochrome Graphics
       Adapter. That means just about everything on the market today,
       including all models of the Tandy 1000, 1200, 3000 and 4000 with
       sufficient memory.
            There are a few computers with which the program is not
       compatible. They include the Tandy 2000 and unmodified Sanyo 550
       series (although they should work on Sanyos that have
       IBM-compatible graphics adapters). If you have one of these
       non-IBM compatible MS-DOS computers, we do have an earlier version
       of the program which will run on them. Contact us for information.
       
                             The Files on this Disk
       
            The Cambridge Thoroughbred Handicapper is composed of five
       files. All of these files must be on the disk from which the
       program is launched or the hard disk directory from which the
       program is launched. They are as follows:
            THORO.BAT     The batch file that starts the program.
            NTHO1.EXE     The handicapper program.
            NTHO1.PAK     The screen files used by the program.
            SPEEDSCR.COM  A memory resident screen driver.
            THORO.DOC     Instructions for the use of the program.
       
            If these files are on a floppy disk, that's all you'll need
       to run the program. If you want to use a hard disk, set up a
       directory for the program and use the DOS "Copy" command to
       transfer all the files on this disk to the directory you have set
       up for it.
       
       
                               Running the Program
       
            To run The Cambridge Thoroughbred handicapper, put the disk
       with the program in Drive A or use the "CHDIR" command to switch
       to the hard disk directory in which the programs are stored.
       
            Type THORO and hit the <RETURN> key. This will load the
       program.

                                    Cambridge Thoroughbred Handicapper - 2




            DO NOT ATTEMPT TO LAUNCH NTHO1.EXE directly. Use the
       THORO.BAT file to do it. Here's why:
       
            THORO.BAT first loads SPEEDSCR.COM, a memory resident program
       which manages the screens used by the Cambridge Thoroughbred
       Handicapper. Without SPEEDSCR, the program will not work. The
       THORO.BAT file also removes SPEEDSCR from memory when you
       terminate the handicapper program. While SPEEDSCR probably won't
       cause difficulties if left in memory after you exit from the
       handicapper, it can, under some circumstances, produce some
       unusual if harmless results. So always start the program by typing
       THORO and hitting the RETURN key.
       
            When you type THORO and hit <RETURN>, your disk drive will
       whir for a few seconds. Then you'll see a message asking if you
       have a color monitor. If you do, type "Y" and the display will
       change to color. If you don't have a color monitor, type "N" and
       the program will run in monochrome mode.
       
            At this point, you'll see a title screen followed by a
       message explaining the handicapper's shareware status. (We've
       removed that message from the enhanced version). A few seconds
       later, the MAIN MENU will appear. Before you start handicapping,
       however, please read the following sections that describe
       handicapping systems and the information you'll need to use the
       Cambridge Thoroughbred Handicapper.
       































                                    Cambridge Thoroughbred Handicapper - 3




                  ============================================
                           About Handicapping Systems
                  ============================================
       
            A handicapping system does two things.
       
            First, it attempts to predict a horse's peformance in an
       upcoming race by analyzing past performances in a consistent,
       scientific manner.
       
            Second, it provides you with a strategy for betting on races
       given the outcome of your handicapping analysis.
       
            As strange as it sounds, the true purpose of a handicapping
       system is not to pick winners. The purpose of a handicapping
       system is to give you a tool that will help you make money at the
       track. Knowing how and when to bet is just as important as
       analyzing the horses
            There are as many handicapping systems as there are
       handicappers. Some are quite good, others are worthless. Some
       require hours or days of effort, some require only a few minutes
       of preparation.
            You don't really need a computer to handicap a race. There
       are plenty of manual handicapping systems around, and some are
       excellent. Unfortunately, they're often tedious and
       time-consuming. A computer handicapping system takes the
       handicapper's knowledge, sets up handicapping tables and rules
       internally, and then makes calculations instantly.
            We designed the Cambridge Thoroughbred Handicapper to provide
       a blend of sophistication and ease of use for the race fan who
       enjoys the sport but doesn't have hours and hours to devote to
       handicapping. If you've never tried to handicap a race before,
       you'll find this quite easy to use. If you're an experienced
       handicapper, the information the system requires you to collect
       will be just as useful as the ratings themselves. The program will
       sharpen your own thinking and handicapping analysis.
       
                  ============================================
                              The LAST RACE Theory
                  ============================================
       
            The Cambridge Thoroughbred Handicapper relies heavily on
       information from a horse's LAST RACE on a fast or sloppy track.
       Now you may ask, "Why only one race? Wouldn't it be better to
       average performances over half a dozen races, or a whole year?"
            The answer is no. It's a fact that a horse's performance
       today is most likely to mirror his performance last time out.
       Remember, a handicapper is interested in how a horse is going to
       perform RIGHT NOW, not how the horse performed a month or two ago.
       The horse that ran six weeks ago may have been in much better or
       worse shape than he is today.
            While it is possible to develop a system that uses an average
       of past performances, our research shows that such systems at best
       yield only marginally better results than a "last race" system.
       And they take so long and require so much data that most people
       are unwilling or unable to spend the time necessary to make them
       work.

                                    Cambridge Thoroughbred Handicapper - 4




            The disadvantage of a "last race" system is that it may
       downgrade a good horse who happened to post a bad performance last
       time, or upgrade a horse who ran way over his head last time out.
       But this doesn't happen very often. And the advantages of a "last
       race" system--speed and ease of use--mean you'll be able to do
       more handicapping and have a better chance of making money over
       the long run.
       
                  ============================================
                            The Information You Need
                               And Where to Get It
                  ============================================
       
            To use The Cambridge Thoroughbred Handicapper, you must be
       familiar with the information available to you in The Racing Form.
       The Form is available on most newsstands on the day of a race and
       usually the day before. In addition, you'll want to consult the
       track program or your local newspaper for information on
       last-minute scratches or jockey changes that occured after The
       Racing Form went to press.
            The Racing Form contains three different pieces of
       information you'll need. First, there's a summary of each race,
       showing the horse's name, post position and jockey. Second,
       there's the "condition line," a table of of information about the
       past performances of each horse in a race. Finally, there is a
       listing of the "Top 10" jockeys at each track.
       
            Here is the information you'll need about each horse:
       
            1. The horse's post position. This is usually available in
       the summary listings for each track at the beginning of that day's
       card in The Racing Form. Sometimes, however, these are not
       accurate because of late scratches, and the best source is the
       morning line from your local newspaper.
       
            2. The jockey's name. This is usually in the summary listing
       for each race, too. But sometimes no jockey has been assigned by
       the Racing Form's press time and the entry will say "No Rider." In
       this case, consult your local paper or the trace track program.
       
            3. The jockey's record. We're interested in whether a jockey
       wins 10 percent or more of his races. If you look at the "Top 10"
       jockeys for each track in the Racing Form, you'll usually find all
       the 10 percent winners. If you're not sure, consult a recent race
       track program or inquire at the track itself.
       
            4. The date of the horse's last race on a fast ("ft") or
       sloppy ("sy") track. We will use sloppy tracks for rating
       purposes, since they don't seem to affect horses' times, but it's
       not a good idea to bet on races being run on a sloppy track.
       
            5. The purses and/or claiming prices for the horse's previous
       races. This is necessary to determine whether the horse is moving
       up or down in class.
       
            6. The leader's time at the half-mile point of the horse's
       last race on a fast or sloppy track. If the horse's last race was

                                    Cambridge Thoroughbred Handicapper - 5




       on a slower track ("good" or "muddy"), go back and find the last
       performance on a fast or sloppy track.
       
            7. The final time of the winner of the horse's last race on a
       fast or sloppy track.
       
            8. The number of lengths behind the winner the horse finished
       in his last race on a fast or sloppy track. If the horse won last
       time out, this number will, of course, be zero.
       
            9. Was the horse a beaten favorite? This detmines whether the
       horse was the favorite last time out on a fast or sloppy track and
       whether or not he won the race. If the horse was the favorite, an
       asterisk (*) will appear next to the dollar odds on the horse in
       the line containing the information for the horse's last race.
       This is important because a favorite who was beaten last time out
       will often win this time around.
       
           10. WEIGHT--The weight the horse will carry this time out and
       the weight he carried last time out on a fast or sloppy track.
       
           11. DISTANCES--The distance of this race and the distance of
       the horse's last race on a fast or sloppy track.
       
           12. CLASS--This is the hardest factor to determine. It is
       important to know whether a horse is racing today against tougher,
       easier or the same level of horses he raced against last time.
       Here are basic guidelines:
       
            * Generally, if the purse or claiming price of the horses in
       this race is higher than the purse or claiming price of the
       horse's last race, the horse is moving UP in class. That means
       he's running against tougher competition than he did last time.
       
            *  If a horse is racing for a lower purse or in a race with a
       lower claiming price than his last race, the horse is moving DOWN
       in class. That means he's running against easier competition than
       he did last time.
       
            *  If the purse or claming price is about the same (a few
       hundred dollars doesn't matter) in this race as it was for the
       horse's last race, then he's staying in the SAME class.
















                                    Cambridge Thoroughbred Handicapper - 6




                  ============================================
                             Handicapping Principles
                  ============================================
       
            A computer can help you with handicapping calculations, but
       there's no substitute for a little human judgment in the process.
       The key to handicapping is knowing which races to bet (not every
       race can be properly handicapped) and which horses to eliminate
       from contention before you start handicapping.
       
                              When to Bet on a Race
       
            For any handicapping system to work, there must be a good
       probability that the past performances of the horses involved will
       be reflected in their performance in the race you're handicapping.
       Unfortunately, this isn't the case in every race. At the very best
       tracks, such as Santa Anita or Aqueduct, almost every non-maiden
       race may be handicappable. At tracks with lower-class horses, you
       may only find five or six races on a card that lend themselves to
       analysis. Here are the guidelines we use:
       
            * Don't bother going to the track and using this program if
       the track condition is not "fast." An off track--good, muddy, or
       sloppy--should be avoided. There's a good reason for this. Horses
       usually run on fast tracks. They train on fast tracks. While some
       horses may be good "mudders," there's no real way of knowing how
       they'll respond to bad track conditions. Some horses may love soft
       footing, others may hate it. The problem is that there's no way to
       tell for sure. So stay away from off tracks.
       
            * DON'T BET ON MAIDEN RACES. These are unproven or just plain
       bad horses, and most handicapping techniques are useless when
       they're running.
       
            * Dont bet on races featuring the cheapest horses on the
       grounds. These are old, bad or tired horses who are unpredictale.
       They may run well one week and terribly the next. If you can't
       count on a horse's past performance to be indicative of his
       performance today, you can't handicap the horse. These horses
       usually show up in the first and last races of a card,
       particularly at tracks where the overall quality of horses is not
       high. At the very best tracks, this rule may not apply, since even
       the cheapest horses could be feature race material at lesser
       tracks.
       
            * Don't bet on races with a high proportion of "shippers." A
       shipper is a horse running at a track for the first time. You have
       no way of knowing how a horse will respond to a new surface. If
       you run across a race in which a shipper looks like a real
       contender, our advice is to pass it up. This takes some
       discipline, but you'll be better off for it. Also, any race with
       three or more shippers is probably a bad bet. We realize that this
       will eliminate many stakes races with high purses. While these are
       fun to watch, they're not usually good handicapping propositions.
       You can take consolation in the fact that the other races on the
       same card with a high-purse stakes race are likely to be good
       ones.

                                    Cambridge Thoroughbred Handicapper - 7




                              Eliminate Bad Horses
       
            Once you have decided whether to bet a race, you can easily
       eliminate certain horses from contention. These will usually be
       eliminated by the computer, but occasionally a really bad horse
       will score highly. Take a few seconds to eliminate these first and
       the system will work much better. Only at the very best tracks
       will you have to handicap more than a half-dozen horses in a race.
       
            * Eliminate any horse which has not raced in the last three
       weeks. You have no way of knowing why this horse has been on
       vacation, but if an animal is running well, the trainer will race
       him regularly. Time off is usually a bad sign. This may not apply
       to the absolutely best-quality stakes horses, who race less
       frequently, but stakes races are bad bets anyway.
       
            * Eliminate any horse who did not show a strong performance
       last time out. By this we mean a win, place or show, a strong run
       on the leader in the stretch, or setting the early pace as the
       leader in fairly quick time. If a horse showed none of these,
       forget him.
       
            * Eliminate "shippers." These are horses running at a track
       for the first time. Once again, this may not be possible in big
       stakes races, but we think these are difficult to handicap anyway
       and should be avoided.
       































                                    Cambridge Thoroughbred Handicapper - 8




                  ============================================
                                Using the Program
                  ============================================
       
            When you run the Cambridge Thoroughbred Handicapper, you'll
       see a menu with four choices. The choices are:
       
                    1. Handicap a Horse
                    2. About the Enhanced Handicapper
                    3. Registration Form
                    4. Quit the Program
       
            To select any choice, just type the number opposite that
       choice. We'll discuss handicapping first.
       











































                                    Cambridge Thoroughbred Handicapper - 9




                  ============================================
                               1. Handicap a Horse
                  ============================================
       
            When you choose this item, you'll be presented with a
       handicapping form with blank, highlighted fields for the
       information the program needs to analyze the horse. This is just
       like filling in a paper form.
       
            When you're through entering information in any field, just
       press the <RETURN> or <ENTER> key to go onto the next field. Some
       fields require single keystroke entries (Such as a "Y" for yes or
       "N" for no). In this case, just typing the appropriate letter will
       send you to the next field.
       
            You can correct information in any field by using the right
       and left cursor keys and typing over the previously entered
       information. The BACKSPACE key will move the cursor one character
       to the left without deleting. To delete material, use the DEL key.
       
            You can move backwards and forwards from field to field
       throughout the form by using the UP and DOWN cursor keys. When you
       reach the bottom field, the DOWN cursor key will cycle you back to
       the first field.
       
            Most fields in the form are checked for errors. If you have
       typed inappropriate information in a field, the program will
       return your cursor to the field with the bad information and
       display an error message at the bottom of the screen telling you
       what the problem is.
       
            As you go from field to field, the program will display a
       "Help" message in the box at the lower left hand side of the form
       telling you exactly what information is required for that field.
       
            When you have finished entering all the information in a
       form, you can exit from the form and get your handicapping
       calculations by hitting the <ESC> key.
       
            Here's the information required for each field:
       
            1. Horse No. and Name: Type the horse's betting number,
       followed by a space and his name. Then hit <RETURN>.
       
            2. Distance Last Race: Look at the help area of the screen.
       You will see a table of distances displayed. Each distance is
       numbered. Type the number opposite the distance of the horse's
       last race on a fast or sloppy track. For example, if the last race
       was one mile, type "7", which is the number opposite the one-mile
       distance in the table displayed in the help area.
       
            3. Distance This Race: Look at the help area of the screen.
       You will see a table of distances displayed. Each distance is
       numbered. Type the number opposite the distance of this race. For
       example, if the distance of this race is one mile, type "7", which
       is the number opposite the one-mile distance in the table
       displayed in the help area. Hit <RETURN> when you're through.

                                   Cambridge Thoroughbred Handicapper - 10




            4. 1/2-Mile: This is the leader's time at the 1/2-mile point
       of the horse's last race on a fast or sloppy track. Be careful
       here. In some listings of shorter races, quarter-mile times are
       included as well as half-mile times. Generally the half-mile time
       will be in the 40-50 second range. Type the number in seconds and
       fifths of seconds. There is no need to type a colon. The program
       takes care of that. For example, if the half-mile time of the
       horse's last race was 48:2, all you have to type is 482.
       
           5. Final: This is the winner's final time in the horse's last
       outing on a fast track. Once again, there is no need to type a
       colon. If the final time of the last race was 1:48:2, all you have
       to type is 1482. The program will format the time properly.
       
           6. Winner last time? (Y/N): If the horse won last time out,
       type "Y". If the horse was not the winner, type "N".
       
           7. Lengths behind winner: If the horse did not win, type the
       number of lenghts behind the winner he finished. This is available
       in the portion of the listing showing the horse's position at
       various points in the race.  It will appear as a superscript
       number next to the horse's position as he crossed the finish line.
       If the horse won last time out, type "0" and hit the return key.
       NOTE: The program will check for consistency between the "Winner
       last time" and "Lenghts Behind" fields. If you indicate that the
       horse won but also enter a number larger than zero in the "Lengths
       behind" field, the program will display an error message and
       return the cursor to the "Winner Last Time" field.
       
            8. Jockey Weight: There are two blanks here. In the first,
       type the weight the horse carried LAST time out on a fast or
       sloppy track and hit <RETURN>. In the second field, enter the
       weight the horse will carry in THIS race and hit <RETURN>.
       
            9. Jockey Record: There are also two blanks here. If the
       jockey in the horse's LAST race has won 10% or more of his races,
       type a "Y" in the "Last race" field. If the jockey in THIS race
       has won 10% or more of his races, type a "Y" in the field labled
       "This race."
       
           10. Post position today: Type the number of the horse's post
       position in today's race and hit <RETURN>.
       
           11. Beaten favorite last time?: If the horse was the favorite
       last time out on a fast or sloppy track but did NOT win the race,
       type "Y" here. You can tell if a horse was the favorite because
       there will usually be an asterisk (*) next to the column showing
       the dollar odds on the horse for that race.
       
           12. Class: If a horse is moving up, type "U" in this blank. If
       the horse is moving down, type "D". If the horse is staying in the
       same class, type "S". For guidelines to determine whether the
       horse is moving up or down in class, see the discussion of CLASS
       in the section titled "Where to get the Information You need."
       
           Once you have entered all the information in the form (It
       takes longer to read about it than to do it), and you're sure it's

                                   Cambridge Thoroughbred Handicapper - 11




       correct, hit the <ESC> key.
       
           The program will ask you, "Are you through with this horse
       (Y/N)." If the information is correct, type "Y". If it isn't
       correct, type "N" and you will be returnd to the form, where you
       can correct the bad entry or entries.
       
           Once you have indicated that the information is correct, the
       numeric score of the horse will be displayed in the "Help window."
       The score will generally be a number between 70 and 300, although
       the best or worst horses could go higher or lower.
       
           The program will then ask, "Do you want to handicap another
       horse? (Y/N)." If you want to handicap another horse, type "Y" and
       a new handicapping screen will be displayed. If you're finished
       handicapping, type "N" and you'll be returned to the Main Menu.
       
                                Now What Do I Do?
       
           To analyze a race, handicap each horse. When you're through
       with each horse, write down the horse's name, number and score
       (The Enhanced version takes care of all this for you). When you're
       through, you'll have a list of horses and numeric scores.
       
           THE HIGHER A HORSE'S SCORE COMPARED TO THE OTHERS IN THE RACE,
       THE MORE LIKELY THAT HORSE IS TO WIN THE RACE.
       
           For example, suppose these were the horses and scores:
       
           No.  Name               Score
       
           4    Paula's Dream       232
           2    Big Bad Ike         228
           5    BennyBear           212
           7    Mom's Mink          201
           8    Bag o' Bones        175
           6    Glue Factory        103
       
           In this case, the handicapper indicates that Paula's Dream is
       most likely to win the race, although Big Bad Ike is quite close.
       

















                                   Cambridge Thoroughbred Handicapper - 12




                  ============================================
                                   How to Bet
                  ============================================
       
           OUR RECOMMENDATION IS TO BET THE HIGHEST RATED HORSE (the one
       with the highest score) TO WIN AND PLACE. This is the safest wager
       and the one most likely to put money in your pocket over the long
       run.
       
           As usual, there are exceptions to this rule. For example, in
       the race above, suppose Paula's Dream is going off at less than
       even money, but Big Bad Ike is going off at 4-1. You're not going
       to make much if you bet on Paula's Dream, but Big Bad Ike is so
       close in the scoring that he becomes a better bet.
       
           IF THE TOP TWO HORSES ARE ONLY A FEW POINTS APART AND THE
       SECOND RATED HORSE IS GOING OFF AT MUCH BETTER ODDS, YOU MAY WANT
       TO BET THE SECOND-RANKED HORSE.
       
            This is one of the Cambridge Thoroughbred Handicapper's major
       strengths. Because it rates horses without regard to local betting
       habits or prejudices, it will often spot undervalued horses that
       make sound wagers.
       
           Finally, at some tracks our customers have reported better
       results by betting both the first and second-rated horses to win.
       This is particularly true if the handicapper ranks them closely,
       neither is a strong favorite and the odds on both are relatively
       good.
       
           Determining how all of this works at your track takes some
       trial and error. Before you plunk down your money for the first
       time, handicap a couple of cards and see how the program works at
       your track. Wagering patterns vary greatly from locality to
       locality. Knowing when and how to bet is just as important as
       selecting the right horse. It can make the difference between
       winning and losing money at the track.
       
            You'll notice we haven't mentioned exotic wagers, such as
       exactas, perfectas, triples and trifectas. That's because we don't
       believe in them as a sound wagering strategy. Without going into
       long explanations, just remember that it's tough enough to pick a
       winner in a race, let alone a winner and two particular losers.
       Tracks make a lot of their money from exotic wagers because the
       return to the bettors is much lower than it is on straight bets.
       We can virtually guarantee that you'll lose money on any strategy
       that involves exotic bets. Stay away from them.
       
           That's all you really need to know to get started. Obviously,
       familiarity with your track conditions will help. But even if
       you're new to horse racing, the Cambridge Thoroughbred Handicapper
       will make race analysis easier and more accurate. Remember that
       the most important factor in any handicapping system is discipline
       and consistency. If you choose your races wisely, apply the rules
       we've laid down and overcome the fan's natural tendency to put
       down money on every contest, you'll be able to turn a profit on
       your hobby.

                                   Cambridge Thoroughbred Handicapper - 13




             =======================================================
                 2. About the Enhanced Thoroughbred Handicapper
             =======================================================
       
            Menu Choice 2 will show you a screen containing information
       about the Enhanced version of this handicapping program, which
       will be sent to you when you send in your registration fee. We
       think this represents an oustanding buy, and we'll discuss some of
       the advanced version's additional features here:
       
            * The WAGERMASTER--This alone could be worth the price of
       registration. It will show you anticipated payoffs for a wide
       variety of odds and win/place/show bets. It's great for developing
       a wagering strategy or just plain "whatiffing." In addition, The
       WAGERMASTER will show you the conbinations and permutations of
       bets on various horses for daily double, exacta/perfecta and
       triple/trifecta type wagers. (We don't recommend exotic wagers,
       but we know you all love them, so we'll at least make sure you get
       the combinations right).
       
            * Handicap an entire race at once. You'll be able to input
       data for all the horses in a race (up to 16) at one time and see a
       screen or printed report, sorted by score from most likely winner
       to least-likely winner. See the sample report at the end of this
       section.
       
            * Keep track of shippers and last race date. While this
       doesn't effect the handicapping outcome, it will show you how many
       shippers are in a race, how long it has been since each horse last
       raced and how many horses have had layoffs of three weeks or more.
       Having this information can help you alter your betting strategy
       or pass up a bad race that you might otherwise have wasted money
       on.
       
            * Enhanced documentation. The instructions with the enhanced
       version contain all the information you see here, plus a detailed
       discussion of parimutuel betting that will eliminate much of the
       mystery and hopefully make you a wiser bettor.




















                                   Cambridge Thoroughbred Handicapper - 14




             =======================================================
                              3. Registration Form
             =======================================================
       
            This will make it even easier to register your program. When
       you choose No. 3 from the Main Menu, you'll be presented with a
       handicapper registration form. When you're finished filling out
       the form, you can print it out on your printer. This form is good
       for the Cambridge Thoroughbred Handicapper, Greyhound Handicapper
       and Harness Handicapper. You can register one or more programs at
       the same time. The registration fees are as follows:
       
            1 Handicapper             $30
            Any 2 handicappers        $50
            All 3 handicappers        $70
       
            When you mail the form to us with your registration fee (We
       also accept VISA and MasterCard), we'll ship you the enhanced
       version(s) right away. Here's how to fill out the form:
       
            Name and address fields: Type your full name on the first
       line and hit <RETURN>. Type your street address on the second and
       third lines (you can skip the third line if you only have a
       one-line address). The City, State and Zip Code go in separate
       blanks on the fourth line. You can use the <RETURN> and CURSOR
       keys to move from field to field the same way as you do in the
       handicapper data entry form.
       
            Type of Payment: If you're paying by check or money order,
       type a "Y" in the "Check/money order" box. If you're paying by
       credit card, type a "Y" in the Credit Card Box.
       
            Credit Card information: If you're paying by credit card,
       type a "V" or "M" for Visa or MasterCard in the box labeled "Type
       of Card." Then type your credit card number and expiration date in
       the following blanks.
       
            Handicappers registered: Type a "Y" in the appropriate blank
       for each handicapper you want to register, Thoroughbred, Harness
       or Greyhound.
       
            When you're through entering the registration information,
       hit the <ESC> key. You'll be asked if the information is correct.
       If it is, type "Y". If the information is not correct, type "N"
       and you'll be returned to the data entry screen.
       
            Once you have confirmed that the information is correct,
       you'll be asked if you want to print out the registration form. If
       you do, type "Y". You'll be prompted to make sure your printer is
       on line and then strike any key to print the registration form.
       
             If you don't want to print out the form, type "N" and you'll
       be returned to the Main Menu.
       
             Send the completed form with your registration fee to
       Federal Hill Software, 8134 Scotts Level Road, Baltimore, Md.
       21208. Make sure to include your signature on the proper blank if

                                   Cambridge Thoroughbred Handicapper - 15




       you're using a credit card. A registration form is also included
       at the end of these instructions.
























































                                   Cambridge Thoroughbred Handicapper - 16




             =======================================================
                                  Program Notes
             =======================================================
       
            The Cambridge Thoroughbred Handicapper was written and
       compiled using Borland International's Turbo Basic (TM). We chose
       Turbo Basic because it writes to the screen more quickly and
       produces more compact code than other Basic compilers.
            The data entry screens were created using the Screen Sculptor
       (TM) and SpeedScreen (TM) utilities from the Software Bottling
       Company of New York. The SPEEDSCR.COM file distributed with this
       program is licenced from and copyrighted by The Software Bottling
       Co. and may not be used with any other program.
       
            The Registered Version of The Cambridge Thoroughbred
       Handicapper is guaranteed to load and run as indicated in the
       accompanying instructions. No other warranties of any kind are
       made or implied, and Federal Hill Software will not be responsible
       for any damage or loss resulting from the use of any of its
       programs.






































                                   Cambridge Thoroughbred Handicapper - 17




             =======================================================
                           Sample Handicapping Report
             =======================================================
       
       The following is a sample of the type of full race handicapping
       report produced by the Enhanced Version of the Cambridge
       Thoroughbred Handicapper:
       
       
       ===================================================================
       
                          HANDICAPPER RATING REPORT
                        TRACK: PIMLICO   DATE: 10/07/87
                         RACE NO. 8 -- $8,000 Claiming
       ===================================================================
       
         HORSE              RATING      LAYOFF    CLASS  SHIP   FIN  PAID
       ===================================================================
       
       
       2 IKE'S DREAM          256          7        D
       -------------------------------------------------------------------
       
       6 BILLY BOY            254         10        S      Y
       -------------------------------------------------------------------
       
       8 JACK'S REVENGE       242          7        U
       -------------------------------------------------------------------
       
       1 WILL 'O WISP         228         12        S
       -------------------------------------------------------------------
       
       5 BENNYBEAR            218         14        S      Y
       -------------------------------------------------------------------
       
       7 TURKEY NICK          202          7        D
       -------------------------------------------------------------------
       
       3 PIZZA TO GO          196         24        S
       -------------------------------------------------------------------
       
       
       Total number of shippers in race: 2
       CAUTION: Contending horses include shippers
       Total number of horses with layoffs of 21 days or more: 1
       
       ===================================================================
       
                    The Cambridge Thoroughbred Handicapper
       ===================================================================
       







                                   Cambridge Thoroughbred Handicapper - 18




       ===================================================================
                                        
                     The Cambridge Thoroughbred Handicapper
                                Registration Form
       ===================================================================
                                        
       
       
       
       NAME:
                  ------------------------------------------------------
       ADDRESS:
                  ------------------------------------------------------
       
                  ------------------------------------------------------
       
       CITY                                       ST       ZIP
                  -------------------------------   ------    ----------
       
       Type of Payment:  Check/mo (  )     Credit Card (    )
       
       Card Type (V/M)    No.                            EXP.
                      ---    ---------------------------     -----------
       
       SIGNATURE:
                  ------------------------------------------------------
       
       Please Register the Following Programs:
       
       ( ) Cambridge Thoroughbred Handicapper
       ( ) Cambridge Greyhound Handicapper
       ( ) Cambridge Harness Handicapper
       
       Price List:    1 Handicapper            $30
                      Any two handicappers      50
                      All three handicappers    70
       
       Total Registration fee enclosed:
                                         ----------
       
       
       
       
       
       
       
       
       
       
       
       
       
       ==================================================================
                               Send This Form To:
                              Federal Hill Software
                             8134 Scotts Level Road
                               Baltimore, MD 21208

                                   Cambridge Thoroughbred Handicapper - 19




                                  301-521-4886
       ==================================================================
























































                                   Cambridge Thoroughbred Handicapper - 20

```
{% endraw %}

## THORO4SW.DOC

{% raw %}
```








               ============================================================
                    The Cambridge Thoroughbred Handicapper
               ============================================================














                    User Supported Version 4.15
                    (C)1990 by Leonard Hyre and Michael J. Himowitz
                    Distributed by Federal Hill Software
                    8134 Scotts Level Road
                    P.O. Box 15001
                    Baltimore, Md. 21208







                                          _______
                                     ____|__     |               (tm)
                                  --|       |    |-------------------
                                    |   ____|__  |  Association of
                                    |  |       |_|  Shareware
                                    |__|   o   |    Professionals
                                  -----|   |   |---------------------
                                       |___|___|    MEMBER




                             Thoroughbred Handicapper 4
                                      Contents


                     1  Introduction . . . . . . . . . . . . . . . . 1
                        1.1  What's New In This Version  . . . . . . 1
                        1.2  About the Program and User-Supported
                             Software  . . . . . . . . . . . . . . . 1
                        1.3  System Requirements   . . . . . . . . . 3
                        1.4  The Files on this Disk  . . . . . . . . 3
                        1.5  Running the Program . . . . . . . . . . 4
                     2  About Handicapping Systems   . . . . . . . . 4
                        2.1  The LAST RACE Theory  . . . . . . . . . 5
                        2.2  The Information You Need And Where to Get
                             It  . . . . . . . . . . . . . . . . . . 6
                     3  Handicapping Principles  . . . . . . . . . . 8
                        3.1  When to Bet on a Race   . . . . . . . . 8
                        3.2  Eliminate Bad Horses  . . . . . . . . . 9
                     4  Using the Program  . . . . . . . . . . . .  10
                        4.1  Handicap a Horse  . . . . . . . . . .  10
                     5  Now What Do I Do?  . . . . . . . . . . . .  14
                        5.1  How to Bet  . . . . . . . . . . . . .  14
                     6  Set Monitor Type . . . . . . . . . . . . .  15
                     7  Program Notes  . . . . . . . . . . . . . .  16
                     8  The Enhanced Thoroughbred Handicapper 4  .  16
                     9  New Version 5 with Database  . . . . . . .  17
                     10  How to Order  . . . . . . . . . . . . . .  17
                        10.1  On-Line Registration Form  . . . . .  18
                        10.2  Printed Registration Form  . . . . .  19






















                                          i






                       The Cambridge Thoroughbred Handicapper
                             User Supported Version 4.15
                   (C)1990 By Leonard Hyre and Michael J. Himowitz
                        Distributed by Federal Hill Software
                               8134 Scotts Level Road
                                   P.O. Box 15001
                                Baltimore, Md. 21208



          1  Introduction

               The Cambridge Thoroughbred Handicapper is a powerful,
          sophisticated tool that will allow you to handicap thoroughbred
          horses quickly and easily. It's not a magic, get-rich-quick
          scheme. But if you follow these instructions, impose some
          discipline and use the handicapper wisely, you should be able to
          improve your performance at the track and make money in the
          process.
               The Cambridge Handicapper is easy to use. All the
          information you need is available in the Racing Form, although
          you may want to check your local newspaper for late scratches and
          jockey changes. With a little practice, you'll be able to
          handicap a race in a few minutes and a whole card in less than an
          hour.

          1.1  What's New In This Version

               This is Version 4.15 (September, 1990) of the Cambridge
          Thoroughbred Handicapper. If you've used the earlier version,
          you'll know how to use this one. We have, however, added three
          important factors to the handicapping caluclations in this
          version: Speed Rating, Track Variant and Gender.

               In addition, we've improved our formulas to work better with
          longer races and weed out horses who show early speed but fade at
          longer distances.

                We have also compiled this program with different software.
          This should eliminate some video incompatibilities experienced by
          users in Version 3.

          1.2  About the Program and User-Supported Software

               This is a proven handicapper. Federal Hill Software has been
          marketing Thoroughbred, Harness and Greyhound programs
          commercially for a variety of computers since 1983. You may have
          seen our advertisements in magazines such as Compute!, Compute's


          Page 2                     The Cambridge Thoroughbred Handicapper



          Gazette, Computer Shopper, RUN, PCResource, Rainbow, PCM and
          others.

               We have sold thousands of copies. The problem is that
          advertising rates--the largest single cost of doing business--
          have skyrocketed in the last few years. Eventually we decided
          that it was just too expensive to market special interest
          programs such as handicappers in general-interest computer
          magazines.

               So we did two things.

               First, we rewrote the handicappers from top to bottom,
          making them more attractive, quicker and even easier to use with
          full-screen data entry, on-line help, and revised rating formulas
          that reflect our most recent research.

               Second, we decided to put working versions of the IBM
          handicappers directly in the hands of the people who want them.
          This is known as user-supported software. If you like the program
          and use it, we ask that you send us a $30 registration fee for
          Version 4 or a $50 registration fee for Version 5.

               For your money you'll get an Enhanced version of the program
          with additional features that will make your handicapping even
          easier and more exciting--including the WAGERMASTER betting
          analysis program. We'll talk more about the enhanced version at
          the end of these instructions.

                The User-Supported version you have here is in no way
          crippled. Some shareware companies do this as a come-on, but we
          don't think that's fair. This User-Supported version uses exactly
          the same handicapping forumlas as our enhanced version and
          produces the same results. You may use it and distribute it to
          anyone. Give it away, post it on your local computer bulletin
          boards, or put in in your user-group library. There are only a
          few conditions. They are:

             1.  The Cambridge Handicappers are copyrighted by the authors
                 and remain their intellectual property, protected by U.S.
                 and international copyright laws.

             2.  You may not distribute a modified version of the User-
                 Supported program or any version of the Enhanced program.

             3.  When you distribute the User Supported version, you must
                 include ALL the files on this disk (or in the group of


          The Cambridge Thoroughbred Handicapper                     Page 3



                 files which you un-ARCed). The program won't work properly
                 unless they're all there.

                Enough of that. Let's get on with the program itself.

          1.3  System Requirements

               The Cambridge Thoroughbred Handicapper will run on any IBM-
          compatible computer with 256K of memory and a video display
          adapter that emulates the IBM Color Graphics Adapter, IBM
          Monochrome Graphics Adapter or the Hercules Monochrome Graphics
          Adapter. That means just about everything on the market today,
          including all models of the Tandy 1000, 1200, 3000 and 4000 with
          sufficient memory.

               There are a few computers with which the program is not
          compatible. They include the Tandy 2000, Sanyo 550 series, IBM
          PCjr, IBM Convertible and the TI Professional (We know it's hard
          to believe that IBM made some non-IBM compatible computers, but
          the Jr. and Convertible use a slightly different video system).
          If you have one of these computers, we do have an earlier version
          of the program which will run on them. Contact us for
          information.

          1.4  The Files on this Disk

               The Cambridge Thoroughbred Handicapper is composed of seven
          files. All of the files marked with asterisks must be on the disk
          from which the program is launched or the hard disk directory
          from which the program is launched. They are as follows:

               THORO.BAT*     The batch file that starts the program.
               NTHO4SW.EXE*   The handicapper program.
               NTHO4SW.PAK*   The screen files used by the program.
               SPEEDSCR.COM*  A memory resident screen driver.
               THORO4SW.DOC   Instructions for the use of the program.
               PRINTME.BAT    A batch file to print the instructions.
               CAP.CFG*       Information about your monitor.

               If these files are on a floppy disk, that's all you'll need
          to run the program. If you want to use a hard disk, set up a
          directory for the program and use the DOS "Copy" command to
          transfer all the files on this disk to the directory you have set
          up for it.


          Page 4                     The Cambridge Thoroughbred Handicapper



          1.5  Running the Program

               To run The Cambridge Thoroughbred handicapper, put the disk
          with the program in Drive A or use the "CHDIR" command to switch
          to the hard disk directory in which the programs are stored.

               Type THORO and hit the RETURN key. This will load the
          program.

               DO NOT ATTEMPT TO LAUNCH THORO4SW.EXE directly. Use the
          THORO.BAT file to do it. Here's why:

               THORO.BAT first loads SPEEDSCR.COM, a memory resident
               program which manages the screens used by the Cambridge
               Thoroughbred Handicapper. Without SPEEDSCR, the program will
               not work. The THORO.BAT file also removes SPEEDSCR from
               memory when you terminate the handicapper program. While
               SPEEDSCR probably won't cause difficulties if left in memory
               after you exit from the handicapper, it can, under some
               circumstances, produce some unusual if harmless results. So
               always start the program by typing THORO and hitting the
               RETURN key.

               When you type THORO and hit RETURN, your disk drive will
          whir for a few seconds. Then you'll see a title screen. Strike
          any key and the MAIN MENU will appear. Before you start
          handicapping, however, please read the following sections that
          describe handicapping systems and the information you'll need to
          use the Cambridge Thoroughbred Handicapper.

          2  About Handicapping Systems

               A handicapping system does two things.

             1.  It attempts to predict a horse's peformance in an upcoming
                 race by analyzing past performances in a consistent,
                 scientific manner.

             2.  It provides you with a strategy for betting on races given
                 the outcome of your handicapping analysis.

               As strange as it sounds, the true purpose of a handicapping
          system is not to pick winners. The purpose of a handicapping
          system is to give you a tool that will help you make money at the
          track. Knowing how and when to bet is just as important as
          analyzing the horses.


          The Cambridge Thoroughbred Handicapper                     Page 5



               There are as many handicapping systems as there are
          handicappers. Some are quite good, others are worthless. Some
          require hours or days of effort, some require only a few minutes
          of preparation.

               You don't really need a computer to handicap a race. There
          are plenty of manual handicapping systems around, and some are
          excellent. Unfortunately, they're often tedious and time-
          consuming. A computer handicapping system takes the handicapper's
          knowledge, sets up handicapping tables and rules internally, and
          then makes calculations instantly.

               We designed the Cambridge Thoroughbred Handicapper to
          provide a blend of sophistication and ease of use for the race
          fan who enjoys the sport but doesn't have hours and hours to
          devote to handicapping. If you've never tried to handicap a race
          before, you'll find this quite easy to use. If you're an
          experienced handicapper, the information the system requires you
          to collect will be just as useful as the ratings themselves. The
          program will sharpen your own thinking and handicapping analysis.

          2.1  The LAST RACE Theory

               The Cambridge Thoroughbred Handicapper relies heavily on
          information from a horse's LAST RACE on a fast or sloppy track.
          Now you may ask, "Why only one race? Wouldn't it be better to
          average performances over half a dozen races, or a whole year?"

               The answer is no. It's a fact that a horse's performance
          today is most likely to mirror his performance last time out.
          Remember, a handicapper is interested in how a horse is going to
          perform RIGHT NOW, not how the horse performed a month or two
          ago. The horse that ran six weeks ago may have been in much
          better or worse shape than he is today.

               While it is possible to develop a system that uses an
          average of past performances, our research shows that such
          systems at best yield only marginally better results than a "last
          race" system. And they take so long and require so much data that
          most people are unwilling or unable to spend the time necessary
          to make them work.

               The disadvantage of a "last race" system is that it may
          downgrade a good horse who happened to post a bad performance
          last time, or upgrade a horse who ran way over his head last time
          out. But this doesn't happen very often. And the advantages of a
          "last race" system--speed and ease of use--mean you'll be able to


          Page 6                     The Cambridge Thoroughbred Handicapper



          do more handicapping and have a better chance of making money
          over the long run.

          2.2  The Information You Need And Where to Get It

               To use The Cambridge Thoroughbred Handicapper, you must be
          familiar with the information available to you in The Racing
          Form. The Form is available on most newsstands on the day of a
          race and usually the day before. In addition, you'll want to
          consult the track program or your local newspaper for information
          on last-minute scratches or jockey changes that occured after The
          Racing Form went to press.

               The Racing Form contains three different pieces of
          information you'll need. First, there's a summary of each race,
          showing the horse's name, post position and jockey. Second,
          there's the "condition line," a table of of information about the
          past performances of each horse in a race. Finally, there is a
          listing of the "Top 10" jockeys at each track.

              Here is the information you'll need about each horse:

             1.  The horse's post position. This is usually available in
                 the summary listings for each track at the beginning of
                 that day's card in The Racing Form. Sometimes, however,
                 these are not accurate because of late scratches, and the
                 best source is the morning line from your local newspaper.

             2.  The jockey's name. This is usually in the summary listing
                 for each race, too. But sometimes no jockey has been
                 assigned by the Racing Form's press time and the entry
                 will say "No Rider." In this case, consult your local
                 paper or the trace track program.

             3.  The jockey's record. We're interested in whether a jockey
                 wins 10 percent or more of his races. If you look at the
                 "Top 10" jockeys for each track in the Racing Form, you'll
                 usually find all the 10 percent winners. If you're not
                 sure, consult a recent race track program or inquire at
                 the track itself.

             4.  The date of the horse's last race on a fast ("ft") or
                 sloppy ("sy") track. We will use sloppy tracks for rating
                 purposes, since they don't seem to affect horses' times,
                 but it's not a good idea to bet on races being run on a
                 sloppy track.


          The Cambridge Thoroughbred Handicapper                     Page 7



             5.  The purses and/or claiming prices for the horse's previous
                 races. This is necessary to determine whether the horse is
                 moving up or down in class.

             6.  The leader's time at the half-mile point of the horse's
                 last race on a fast or sloppy track. If the horse's last
                 race was on a slower track ("good" or "muddy"), go back
                 and find the last performance on a fast or sloppy track.

             7.  The final time of the winner of the horse's last race on a
                 fast or sloppy track.

             8.  The number of lengths behind the winner the horse finished
                 in his last race on a fast or sloppy track. If the horse
                 won last time out, this number will, of course, be zero.

             9.  Was the horse a beaten favorite? This detmines whether the
                 horse was the favorite last time out on a fast or sloppy
                 track and whether or not he won the race. If the horse was
                 the favorite, an asterisk (*) will appear next to the
                 dollar odds on the horse in the line containing the
                 information for the horse's last race. This is important
                 because a favorite who was beaten last time out will often
                 win this time around.

            10.  WEIGHT--The weight the horse will carry this time out and
                 the weight he carried last time out on a fast or sloppy
                 track.

            11.  DISTANCES--The distance of this race and the distance of
                 the horse's last race on a fast or sloppy track.

            12.  This is the hardest factor to determine. It is important
                 to know whether a horse is racing today against tougher,
                 easier or the same level of horses he raced against last
                 time. Here are basic guidelines:

                     *  Generally, if the purse or claiming price of the
                        horses in this race is higher than the purse or
                        claiming price of the horse's last race, the horse
                        is moving UP in class. That means he's running
                        against tougher competition than he did last time.

                     *  If a horse is racing for a lower purse or in a race
                        with a lower claiming price than his last race, the
                        horse is moving DOWN in class. That means he's
                        running against easier competition than he did last
                        time.


          Page 8                     The Cambridge Thoroughbred Handicapper



                     *  If the purse or claming price is about the same (a
                        few hundred dollars doesn't matter) in this race as
                        it was for the horse's last race, then he's staying
                        in the SAME class.

            13.  The speed rating for the horse's last race on a fast or
                 sloppy track. The speed rating is a calculation made by
                 the Racing Form indicating how fast the horse ran compared
                 to the track record at that distance prior to the current
                 meeting. A speed rating below 100 indicates the horse ran
                 slower than the track record. A rating above 100 means the
                 horse ran faster than the previous meeting's track record.
                 This factor is particularly useful in trying to handicap
                 races with shippers.

            14.  The track variant for the horse's last race on a fast or
                 sloppy track. The track variant is an attempt to determine
                 how all the horses were running on the day of that race.
                 This reflects on the quality of the competition and/or the
                 track condition. A lower track variant means better
                 competition and/or a faster track. This factor,
                 conjunction with the speed rating, is useful in trying to
                 handicap races with shippers.

          3  Handicapping Principles

               A computer can help you with handicapping calculations, but
          there's no substitute for a little human judgment in the process.
          The key to handicapping is knowing which races to bet (not every
          race can be properly handicapped) and which horses to eliminate
          from contention before you start handicapping.

          3.1  When to Bet on a Race

               For any handicapping system to work, there must be a good
          probability that the past performances of the horses involved
          will be reflected in their performance in the race you're
          handicapping. Unfortunately, this isn't the case in every race.
          At the very best tracks, such as Santa Anita or Aqueduct, almost
          every non-maiden race may be handicappable. At tracks with
          lower-class horses, you may only find five or six races on a card
          that lend themselves to analysis. Here are the guidelines we use:

              *  Don't bother going to the track and using this program if
                 the track condition is not "fast." An off track--good,
                 muddy, or sloppy--should be avoided. There's a good reason
                 for this. Horses usually run on fast tracks. They train on
                 fast tracks. While some horses may be good "mudders,"


          The Cambridge Thoroughbred Handicapper                     Page 9



                 there's no real way of knowing how they'll respond to bad
                 track conditions. Some horses may love soft footing,
                 others may hate it. The problem is that there's no way to
                 tell for sure. So stay away from off tracks.

              *  DON'T BET ON MAIDEN RACES. These are unproven or just
                 plain bad horses, and most handicapping techniques are
                 useless when they're running.

              *  Don't bet on races featuring the cheapest horses on the
                 grounds. These are old, bad or tired horses who are
                 unpredictale. They may run well one week and terribly the
                 next. If you can't count on a horse's past performance to
                 be indicative of his performance today, you can't handicap
                 the horse. These horses usually show up in the first and
                 last races of a card, particularly at tracks where the
                 overall quality of horses is not high. At the very best
                 tracks, this rule may not apply, since even the cheapest
                 horses could be feature race material at lesser tracks.

              *  Don't bet on races with a high proportion of "shippers." A
                 shipper is a horse running at a track for the first time.
                 You have no way of knowing how a horse will respond to a
                 new surface. If you run across a race in which a shipper
                 looks like a real contender, our advice is to pass it up.
                 This takes some discipline, but you'll be better off for
                 it. Also, any race with three or more shippers is probably
                 a bad bet. We realize that this will eliminate many stakes
                 races with high purses. While these are fun to watch,
                 they're not usually good handicapping propositions. You
                 can take consolation in the fact that the other races on
                 the same card with a high-purse stakes race are likely to
                 be good ones.

          3.2  Eliminate Bad Horses

               Once you have decided whether to bet a race, you can easily
          eliminate certain horses from contention. These will usually be
          eliminated by the computer, but occasionally a really bad horse
          will score highly. Take a few seconds to eliminate these first
          and the system will work much better. Only at the very best
          tracks will you have to handicap more than a half-dozen horses in
          a race.

              *  Eliminate any horse which has not raced in the last three
                 weeks. You have no way of knowing why this horse has been
                 on vacation, but if an animal is running well, the trainer
                 will race him regularly. Time off is usually a bad sign.


          Page 10                    The Cambridge Thoroughbred Handicapper



                 This may not apply to the absolutely best-quality stakes
                 horses, who race less frequently, but stakes races are bad
                 bets anyway.

              *  Eliminate any horse who did not show a strong performance
                 last time out. By this we mean a win, place or show, a
                 strong run on the leader in the stretch, or setting the
                 early pace as the leader in fairly quick time. If a horse
                 showed none of these, forget him.

              *  Eliminate "shippers." These are horses running at a track
                 for the first time. Once again, this may not be possible
                 in big stakes races, but we think these are difficult to
                 handicap anyway and should be avoided.

          4  Using the Program

               When you run the Cambridge Thoroughbred Handicapper, you'll
          see a menu with five choices. The first will be highlighted. The
          choices are:

          1. Handicap a Horse
          2. Set Monitor Type
          3. About the Enhanced Handicapper
          4. Registration Form
          5. Quit the Program

               To select any choice, use the cursor keys to move the
          highlight bar and hit RETURN. Or just type the number opposite
          that choice. We'll discuss handicapping first.

          4.1  Handicap a Horse

               When you choose this item, you'll be presented with a
          handicapping form with blank, highlighted fields for the
          information the program needs to analyze the horse. This is just
          like filling in a paper form.

               When you're through entering information in any field, just
          press the RETURN or ENTER key to go onto the next field. Some
          fields require single keystroke entries (Such as a "Y" for yes or
          "N" for no). In this case, just typing the appropriate letter
          will send you to the next field.

               You can correct information in any field by using the right
          and left cursor keys and typing over the previously entered
          information. The BACKSPACE key will move the cursor one character


          The Cambridge Thoroughbred Handicapper                    Page 11



          to the left without deleting. To delete material, use the DEL
          key.

               You can move backwards and forwards from field to field
          throughout the form by using the UP and DOWN cursor keys. When
          you reach the bottom field, the DOWN cursor key will cycle you
          back to the first field.

               Most fields in the form are checked for errors. If you have
          typed inappropriate information in a field, the program will
          return your cursor to the field with the bad information and
          display an error message at the bottom of the screen telling you
          what the problem is.

               As you go from field to field, the program will display a
          "Help" message in the box at the lower left hand side of the form
          telling you exactly what information is required for that field.

               When you have finished entering all the information in a
          form, you can exit from the form and get your handicapping
          calculations by hitting the ESC key.

               Here's the information required for each field:

             1.  Horse No. and Name: Type the horse's betting number,
                 followed by a space and his name. Then hit RETURN.

             2.  Distance Last Race: Look at the help area of the screen.
                 You will see a table of distances displayed. Each distance
                 is numbered. Type the number opposite the distance of the
                 horse's last race on a fast or sloppy track. For example,
                 if the last race was one mile, type "7", which is the
                 number opposite the one-mile distance in the table
                 displayed in the help area.

             3.  Distance This Race: Look at the help area of the screen.
                 You will see a table of distances displayed. Each distance
                 is numbered. Type the number opposite the distance of this
                 race. For example, if the distance of this race is one
                 mile, type "7", which is the number opposite the one-mile
                 distance in the table displayed in the help area. Hit
                 RETURN when you're through.

             4.  Speed rating: This is the first of two numbers, separated
                 by a hyphen, located just to the left of the order of
                 finish in the condition line. Type the speed rating and
                 hit RETURN.


          Page 12                    The Cambridge Thoroughbred Handicapper



             5.  Track variant: This is the second of two numbers,
                 separated by a hyphen, located just to the left of the
                 order of finish in the condition line. Type the track
                 variant and hit RETURN.

             6.  1/2-Mile: This is the leader's time at the 1/2-mile point
                 of the horse's last race on a fast or sloppy track. Be
                 careful here. In some listings of shorter races, quarter-
                 mile times are included as well as half-mile times.
                 Generally the half-mile time will be in the 40-50 second
                 range. Type the number in seconds and fifths of seconds.
                 There is no need to type a colon. The program takes care
                 of that. For example, if the half-mile time of the horse's
                 last race was 48:2, all you have to type is 482.

             7.  Final: This is the winner's final time in the horse's last
                 outing on a fast track. Once again, there is no need to
                 type a colon. If the final time of the last race was
                 1:48:2, all you have to type is 1482. The program will
                 format the time properly.

             8.  Sex of Horse: Type "M" for male or "F" for female. This is
                 primarily for races in which horses of both sexes are
                 running. If you want to disregard the gender factor, type
                 "N" in this field.

             9.  Winner last time? (Y/N): If the horse won last time out,
                 type "Y". If the horse was not the winner, type "N".

            10.  Lengths behind winner: If the horse did not win, type the
                 number of lengths behind the winner he finished. This is
                 available in the portion of the listing showing the
                 horse's position at various points in the race.  It will
                 appear as a superscript number next to the horse's
                 position as he crossed the finish line. If the horse won
                 last time out, type "0" and hit the return key. NOTE: The
                 program will check for consistency between the "Winner
                 last time" and "Lenghts Behind" fields. If you indicate
                 that the horse won but also enter a number larger than
                 zero in the "Lengths behind" field, the program will
                 display an error message and return the cursor to the
                 "Winner Last Time" field.

            11.  Jockey Weight: There are two blanks here. In the first,
                 type the weight the horse carried LAST time out on a fast
                 or sloppy track and hit RETURN. In the second field, enter
                 the weight the horse will carry in THIS race and hit
                 RETURN.


          The Cambridge Thoroughbred Handicapper                    Page 13



            12.  Jockey Record: There are also two blanks here. If the
                 jockey in the horse's LAST race has won 10% or more of his
                 races, type a "Y" in the "Last race" field. If the jockey
                 in THIS race has won 10% or more of his races, type a "Y"
                 in the field labled "This race."

            13.  Post position today: Type the number of the horse's post
                 position in today's race and hit RETURN.

            14.  Beaten favorite last time?: If the horse was the favorite
                 last time out on a fast or sloppy track but did NOT win
                 the race, type "Y" here. You can tell if a horse was the
                 favorite because there will usually be an asterisk (*)
                 next to the column showing the dollar odds on the horse
                 for that race.

            15.  Class: If a horse is moving up, type "U" in this blank. If
                 the horse is moving down, type "D". If the horse is
                 staying in the same class, type "S". For guidelines to
                 determine whether the horse is moving up or down in class,
                 see the discussion of CLASS in the section titled "Where
                 to get the Information You need."

              Once you have entered all the information in the form (It
          takes longer to read about it than to do it), and you're sure
          it's correct, hit the ESC key.

              The program will ask you, "Are you through with this horse
          (Y/N)." If the information is correct, type "Y". If it isn't
          correct, type "N" and you will be returnd to the form, where you
          can correct the bad entry or entries.

              Once you have indicated that the information is correct, the
          numeric scores of the horse will be displayed in the "Help
          window." The scores consist of two numbers separated by a hyphen.

               The first number is the horse's score with the speed rating
               and track variant included in the caculations.

               The second number is the horse's score WITHOUT the speed
               rating and track variant included. This is essentially the
               way the previous versions of the Handicapper calculated the
               score. We've done it both ways because some users prefer not
               to use the speed rating and track variant.

               The scores will generally be numbers between 70 and 300,
          although the best or worst horses could go higher or lower.


          Page 14                    The Cambridge Thoroughbred Handicapper



              The program will then ask, "Do you want to handicap another
          horse? (Y/N)." If you want to handicap another horse, type "Y"
          and a new handicapping screen will be displayed. If you're
          finished handicapping, type "N" and you'll be returned to the
          Main Menu.

          5  Now What Do I Do?

              To analyze a race, handicap each horse. When you're through
          with each horse, write down the horse's name, number and score
          (The Enhanced version takes care of all this for you). When
          you're through, you'll have a list of horses and numeric scores.

              *  THE HIGHER A HORSE'S SCORE COMPARED TO THE OTHERS IN THE
                 RACE, THE MORE LIKELY THAT HORSE IS TO WIN THE RACE.

              For example, suppose these were the horses and scores:

              No.  Name               Score

              4    Paula's Dream       232
              2    Big Bad Ike         228
              5    BennyBear           212
              7    Mom's Mink          201
              8    Bag o' Bones        175
              6    Glue Factory        103

              In this case, the handicapper indicates that Paula's Dream is
          most likely to win the race, although Big Bad Ike is quite close.

          5.1  How to Bet

              OUR RECOMMENDATION IS TO BET THE HIGHEST RATED HORSE (the one
          with the highest score) TO WIN AND PLACE. This is the safest
          wager and the one most likely to put money in your pocket over
          the long run.

              As usual, there are exceptions to this rule. For example, in
          the race above, suppose Paula's Dream is going off at less than
          even money, but Big Bad Ike is going off at 4-1. You're not going
          to make much if you bet on Paula's Dream, but Big Bad Ike is so
          close in the scoring that he becomes a better bet.

               IF THE TOP TWO HORSES ARE ONLY A FEW POINTS APART AND THE
               SECOND RATED HORSE IS GOING OFF AT MUCH BETTER ODDS, YOU MAY
               WANT TO BET THE SECOND-RANKED HORSE.


          The Cambridge Thoroughbred Handicapper                    Page 15



               This is one of the Cambridge Thoroughbred Handicapper's
          major strengths. Because it rates horses without regard to local
          betting habits or prejudices, it will often spot undervalued
          horses that make sound wagers.

              Finally, at some tracks our customers have reported better
          results by betting both the first and second-rated horses to win.
          This is particularly true if the handicapper ranks them closely,
          neither is a strong favorite and the odds on both are relatively
          good.

              Determining how all of this works at your track takes some
          trial and error. Before you plunk down your money for the first
          time, handicap a couple of cards and see how the program works at
          your track. Wagering patterns vary greatly from locality to
          locality. Knowing when and how to bet is just as important as
          selecting the right horse. It can make the difference between
          winning and losing money at the track.

               You'll notice we haven't mentioned exotic wagers, such as
          exactas, perfectas, triples and trifectas. That's because we
          don't believe in them as a sound wagering strategy. Without going
          into long explanations, just remember that it's tough enough to
          pick a winner in a race, let alone a winner and two particular
          losers. Tracks make a lot of their money from exotic wagers
          because the return to the bettors is much lower than it is on
          straight bets. We can virtually guarantee that you'll lose money
          on any strategy that involves exotic bets. Stay away from them.

              That's all you really need to know to get started. Obviously,
          familiarity with your track conditions will help. But even if
          you're new to horse racing, the Cambridge Thoroughbred
          Handicapper will make race analysis easier and more accurate.
          Remember that the most important factor in any handicapping
          system is discipline and consistency. If you choose your races
          wisely, apply the rules we've laid down and overcome the fan's
          natural tendency to put down money on every contest, you'll be
          able to turn a profit on your hobby.

          6  Set Monitor Type

               The Cambridge Thoroughbred Handicapper comes configured for
          a monochrome monitor. But you can change the display to color by
          selecting Choice No. 2 from the Main Menu.

               You'll be asked if you have a color or monochrome monitor.
          If you have a color monitor, type "C"; if you have a monochrome
          monoitor, type "M".  The display will switch to the mode you have


          Page 16                    The Cambridge Thoroughbred Handicapper



          just chosen and the information will be stored in the CAP.CFG
          file on your disk. The next time you run the program, it will
          automatically display in the chosen mode. You can switch from
          color to monochrome and back again at any time by Selecting
          Choice No. 2.

          7  Program Notes

               The Cambridge Thoroughbred Handicapper was written and
          compiled using Microsoft QuickBasic 4.5. The data entry screens
          were created using the Screen Sculptor (TM) and SpeedScreen (TM)
          utilities from the Software Bottling Company of New York. The
          SPEEDSCR.COM file distributed with this program is licensed from
          and copyrighted by The Software Bottling Co. and may not be used
          with any other program.

               Copies of The Cambridge Thoroughbred Handicapper supplied by
          Federal Hill Software are guaranteed to load and run as indicated
          in the accompanying instructions. No other warranties of any kind
          are made or implied, and Federal Hill Software will not be
          responsible for any damage or loss resulting from the use of any
          of its programs. In particular, Federal Hill Software is not
          liable for replacement of defective disks supplied by third
          parties such as user group libraries or shareware companies.

          8  The Enhanced Thoroughbred Handicapper 4

              Menu Choice 3 will show you a screen containing information
          about the Enhanced Version 4 of this handicapping program, which
          will be sent to you when you send in your registration fee. We
          think this represents an oustanding buy, and we'll discuss some
          of the advanced version's additional features here:

              *  The WAGERMASTER--This alone could be worth the price of
                 registration. It will show you anticipated payoffs for a
                 wide variety of odds and win/place/show bets. It's great
                 for developing a wagering strategy or just plain
                 "whatiffing." In addition, The WAGERMASTER will show you
                 the conbinations and permutations of bets on various
                 horses for daily double, exacta/perfecta and
                 triple/trifecta type wagers. (We don't recommend exotic
                 wagers, but we know you all love them, so we'll at least
                 make sure you get the combinations right).

              *  Handicap an entire race at once. You'll be able to input
                 data for all the horses in a race (up to 16) at one time
                 and see a screen or printed report, sorted by score from
                 most likely winner to least-likely winner. The report


          The Cambridge Thoroughbred Handicapper                    Page 17



                 includes an estimated odds calculation and indicates
                 horses that are running at unaccustomed distances.

              *  Keep track of shippers and last race date. While this
                 doesn't effect the handicapping outcome, it will show you
                 how many shippers are in a race, how long it has been
                 since each horse last raced and how many horses have had
                 layoffs of three weeks or more. Having this information
                 can help you alter your betting strategy or pass up a bad
                 race that you might otherwise have wasted money on.

              *  Data printout for each horse. At your request, the program
                 will print out the raw data you've entered for each horse.
                 This makes it easier to look for mistakes or conduct
                 further analysis.

              *  Enhanced documentation. The instructions with the enhanced
                 version contain all the information you see here, plus a
                 detailed discussion of parimutuel betting and money
                 management that will eliminate much of the mystery and
                 hopefully make you a wiser bettor.

          9  New Version 5 with Database

               We're delighted to announce the release of Thoroughbred 5,
          which includes a complete relational database manager. In
          addition to rating the horses, Thoroughbred 5 allows you to store
          your handicapping data and recall it for correction or future
          use. It also keeps track of how the horses performed, how much
          you wagered, and how much you won. It's an outstanding value.

               Which version you order is up to you. The new Enhanced
          Version 5 requires 512K of memory. The registration fee is $50.
          If you don't have that much memory or don't need the Database
          capabilities, Enhanced Version 4 offers the same great handicap-
          ping formulas and runs in 256K. The registration fee is $30.


          10  How to Order

               If you'd like to order Thoroughbred 5, please fill out the
          form at the end of this manual.

               If you'd like Thoroughbred 4, you can use the printed from
          or use our On-Line Registration form.

               If you register Version 4, we'll send you an upgrade form
          along with your Enhanced program. It allows you up upgrade to


          Page 18                    The Cambridge Thoroughbred Handicapper



          Version 5 at any time for $20 (the difference in price between
          the two versions).

          10.1  On-Line Registration Form

               This will make it easy to register your program. When you
          choose No. 4 from the Main Menu, you'll be presented with a
          handicapper registration form. When you're finished filling out
          the form, you can print it out on your printer. This form is good
          for the Cambridge Thoroughbred Handicapper 4, Greyhound
          Handicapper and Harness Handicapper.

               Note: Use the on-line registration form only if you're
               ordering Thoroughbred 4. If you'd like to register
               Throughbred 5, please use the form at the end of this
               manual.

               You can register one or more programs at the same time. The
          registration fees are as follows:

               1 Handicapper             $30
               Any 2 handicappers        $50
               All 3 handicappers        $70

               When you mail the form to us with your registration fee (We
          also accept VISA and MasterCard), we'll ship you the enhanced
          version(s) right away. Here's how to fill out the form:

             1.  Name and address fields: Type your full name on the first
                 line and hit RETURN. Type your street address on the
                 second and third lines (you can skip the third line if you
                 only have a one-line address). The City, State and Zip
                 Code go in separate blanks on the fourth line. You can use
                 the RETURN and CURSOR keys to move from field to field the
                 same way as you do in the handicapper data entry form.

             2.  Type of Payment: If you're paying by check or money order,
                 type a "Y" in the "Check/money order" box. If you're
                 paying by credit card, type a "Y" in the Credit Card Box.

             3.  Credit Card information: If you're paying by credit card,
                 type a "V" or "M" for Visa or MasterCard in the box
                 labeled "Type of Card." Then type your credit card number
                 and expiration date in the following blanks.

             4.  Handicappers registered: Type a "Y" in the appropriate
                 blank for each handicapper you want to register,
                 Thoroughbred, Harness or Greyhound.


          The Cambridge Thoroughbred Handicapper                    Page 19



               When you're through entering the registration information,
          hit the ESC key. You'll be asked if the information is correct.
          If it is, type "Y". If the information is not correct, type "N"
          and you'll be returned to the data entry screen.

               Once you have confirmed that the information is correct,
          you'll be asked if you want to print out the registration form.
          If you do, type "Y". You'll be prompted to make sure your printer
          is on line and then strike any key to print the registration
          form.

                If you don't want to print out the form, type "N" and
          you'll be returned to the Main Menu.

               Send the completed form with your registration fee to
               Federal Hill Software, 8134 Scotts Level Road, P.O. Box
               15001, Baltimore, Md. 21208. Make sure to include your
               signature on the proper line if you're using a credit card.
               A registration form is also included at the end of these
               instructions.

          10.2  Printed Registration Form

               You can use the form below to order either Thoroughbred 4 or
          Thoroughbred 5. The registration fee for Thoroughbred 5 is $50.
          The registration fee for Thoroughbred 4 is $30.

               If you register Version 4 and later decide you'd like
          Version 5, you can upgrade for $20 (the difference in price
          between the two programs).

               With your Thoroughbred registration, you may register the
          Greyhound and/or Harness Handicappers for $20 each.


          Page 20                    The Cambridge Thoroughbred Handicapper



                         Cambridge Thoroughbred Handicapper
                                  Registration Form


          =================================================================
          Yes, I want to register my Cambridge Handicapper! Please send the
          Enhanced Version of the program right away!
          =================================================================

          Name:   _______________________________________________

          Address: ______________________________________________

          City:  _______________________  State ______   Zip _______


          Please send me the following programs:

               Price List                        With one of
                                                 the programs
                                       Alone     above
          ---------------------------------------------------------

          (  ) Thoroughbred 5            $50                  _________

          (  ) Thoroughbred 4            $30        $20       _________

          (  ) Harness Handicapper       $30        $20       _________

          (  ) Greyhound Handicapper     $30        $20       _________

                                                   Total      _________

          Method of Payment: ( ) Check/M.O.  ( ) Visa  ( ) MasterCard

          Card No. ____________________________________ Exp. ___________

          Signature _____________________________________


          Send to: Federal Hill Software
                   8134 Scotts Level Road
                   P.O. Box 15001
                   Baltimore, MD 21208
                   301-521-4886

          Note: We Accept Checks, Money Orders, Visa and Mastercard.
          Foreign orders should be made payable in U.S. funds.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0918

     Volume in drive A is #918  S2.5
     Directory of A:\

    GO       BAT        38   4-18-91   8:22a
    HARNESS  ARC     97459  12-13-87  12:32p
    HOUNDS   ARC     96274  11-22-87   5:24a
    PKXARC   COM     11482  12-15-86
    THISDISK DOC      1304  12-13-87  12:43p
    THORO    ARC    115799   4-18-91   8:16a
    GO       TXT      1310   4-18-91   8:53a
    FILE0918 TXT      1851   4-18-91   7:55a
            8 file(s)     325517 bytes
                           30720 bytes free

![PC-SIG Library Disk #0918]({{ site.software.pcsigdisks.server }}/pcx86/sw/misc/pcsig/0001-0999/DISK0918/DISK0918.jpg)
