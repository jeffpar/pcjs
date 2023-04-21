---
layout: page
title: "PC-SIG Diskette Library (Disk #3148)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3148/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3148"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## POKER.TXT

{% raw %}
```
               THE POKER PROGRAM - VERSION 2.1  8/15/92

 The Poker Program is a high resolution graphics program which requires a
 color EGA or VGA monitor.

 To run The Poker Program, type POKER and press the Enter key. After the
 title screen, you will be presented with a menu with 6 options:

  P = Poker tutorial
  T = Texas Hold'em tutorial
  I = Instructions for the Texas Hold'em game
  G = Game of Texas Hold'em
  S = Shareware and you
  Q = Quit to DOS

 1. POKER TUTORIAL - This teaches the basics of poker. If you are familiar
    with the rules of poker, you may want to skip this. The tutorial explains
    the ranks of poker hands, shows examples of each rank and tells how ties
    are broken. At the end of the tutorial, there is a practice drill which
    deals pairs of poker hands and asks you to determine the rank of each
    hand and to tell which is the better hand. The program shuffles and deals
    random hands and keeps track of your score.

 2. TEXAS HOLD'EM TUTORIAL - This teaches the rules for Texas Hold'em, the
    version of poker that is steadily gaining in popularity. If you are
    familiar with the rules of Texas Hold'em, you may want to skip this.
    The tutorial explains the structure of the game and how betting is done.
    After explaining the rules, the program walks you through the play of a
    a hand of Texas Hold'em. This is done using the graphics of the Texas
    Hold'em program.

 3. INSTRUCTIONS FOR THE TEXAS HOLD'EM GAME - This explains how to use the
    Texas Hold'em program; single key stroke commands are used throughout.

 4. GAME OF TEXAS HOLD'EM - You play in the game against 1 to 9 computer
    controlled opponents. After the title screen, you will be presented
    with a choice of 3 levels of difficulty:
     1. Easy game
     2. Medium game
     3. Tough game
    Next you choose how many opponents you wish; from 1 to 9. Your opponents
    each have unique playing styles. They are programmed to play (fold, bet,
    raise or re-raise) according to the cards they hold, the cards on the
    table, the actions of their opponents and the size of the pot. As the game
    progresses, the program tracks statistics for each player. These are avail-
    able for your review at the end of each hand. Colorful graphs and 3-D bar
    charts tell how well you and each of your opponents are doing.

 5. SHAREWARE AND YOU - The Poker program is shareware. This briefly explains
    what shareware is and who authored the program.

 6. QUIT TO DOS - This is how you end the program.


PROGRAM FILES

 Poker consists of 8 files:

  POKER.EXE  -  The Poker program
  *.DAT      -  4 data files used by the program
  *.IMG      -  2 graphic image files used by the program
  POKER.TXT  -  This file
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3148

     Volume in drive A has no label
     Directory of A:\

    POKER    EXE    269424   8-20-92   2:06p
    PIPS     IMG      3888   2-27-92  11:02a
    GPIPS    IMG      3888   3-01-92  11:05a
    POKER    TXT      2828   8-17-92  12:55p
    HOLDVARS DAT        32   7-09-92   8:02a
    EASYVAR  DAT      3700   7-06-92   1:58p
    MEDVAR   DAT      3700   7-06-92   2:06p
    TOUGHVAR DAT      3700   7-06-92   1:14p
    GO       TXT       847  11-30-92   2:44p
    GO       BAT        31   6-04-92   2:25a
           10 file(s)     292038 bytes
                           25600 bytes free
