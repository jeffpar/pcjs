---
layout: page
title: "PC-SIG Diskette Library (Disk #1688)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1688/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1688"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE ASIAN CHALLENGE"

    Attention geography teachers -- teach your students about Asian
    geography in a text adventure setting.  Make learning exciting.
    
    The ASIAN CHALLENGE is an educational program, written for grades five
    through ten, which provides the student with information concerning the
    geography of the countries on the Asian continent.  It is to be used as
    a supplement to text books and other instructional material.  It uses
    the text adventure format to encourage the student to carefully read the
    information presented.  The text adventure format is an effective means
    for holding the student's attention for prolonged periods.  Learning
    becomes a fun experience and the student becomes much more interested in
    the study of geography.  The use of this program also increases the
    student's reading and spelling capabilities.
    
    This educational adventure is similar to a novel in which the student is
    the main character.  The students will visit most of the countries in
    Asia.  In each country they will be presented with important facts
    concerning the geographical features, early history, and animals native
    to the country.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1688.TXT

{% raw %}
```
Disk No: 1688                                                           
Disk Title: The Asian Challenge                                         
PC-SIG Version: S1                                                      
                                                                        
Program Title: The Asian Challenge                                      
Author Version: 2.0                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
Attention geography teachers - teach your students about ASIAN geography
in a text adventure setting.  Make learning exciting.                   
                                                                        
The ASIAN CHALLENGE is an educational program, written for grades five  
through ten, which provides the student with information concerning the 
geography of the countries on the ASIAN continent.  It is to be used as 
a supplement to text books and other instructional material.  It uses   
the text adventure format to encourage the student to carefully read the
information presented.  The text adventure format is an effective means 
for holding the student's attention for prolonged periods.  Learning    
becomes a fun experience and the student becomes much more interested in
the study of geography.  The use of this program also increases the     
student's reading and spelling capabilities.                            
                                                                        
This educational adventure is similar to a novel in which the student is
the main character.  The students will visit most of the countries in   
Asia.  In each country they will be presented with important facts      
concerning the geographical features, early history, and animals native 
to the country.                                                         
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## README.DOC

{% raw %}
```
    CONRAD BUTTON'S EDUCATIONAL TEXT ADVENTURES

    THE ASIAN CHALLENGE
    (C) Copyright 1989 by Conrad Button

    This educational text adventure provides the student with information
    concerning the geography and history of the countries on the Asian
    Continent.  Geography can be a very uninteresting subject to some
    students.  However, when their textbooks are supplemented with an
    educational adventure, these students typically become much more
    interested in the study of geography.  Learning becomes a fun
    experience with a Button Adventure.  We have also found that the use of
    our educational adventures increases both the students' reading and
    spelling capabilities.  Their ability to reason is also enhanced.

    During the course of play, the students will visit most of the
    countries on the Asian Continent.  In each country, they will be
    presented with several important facts concerning the geographical
    features, early history, and animals native to the country.  The
    locations of each country within the adventure correspond to the actual
    locations of the countries on a map of the continent.  We therefore
    encourage the students to obtain an Atlas and trace their progress on
    the map of Asia (the map is not required, however).  At the conclusion
    of the adventure, the students will be presented with a list of
    questions concerning the countries that they have visited.  They must
    answer the questions correctly in order to successfully complete their
    quest.  When an incorrect answer is given, the students are encouraged
    to revisit the appropriate country to determine the correct answer.

    This educational adventure is similar to a novel in which the students
    are the main character.  They will be given a quest which must be
    successfully completed.  Their computer will become their guide.  It
    will tell them what it sees and hears and will ask them for commands.
    It will obey their commands most of the time.  Although it speaks
    fluent English, it has trouble understanding long sentences.
    Therefore, the students should limit their commands to no more than two
    words, with the verb as the first word (e.g. `read scroll').  If the
    computer does not know or understand a word, it will tell them so.  In
    that case they should use another word of similar meaning.  The
    computer will present the following information at the start of each
    round of play:

         1. A description of the students' current location.
         2. Items that the students can see at this location.
         3. Directions in which the students can move
            (n-north, s-south, e-east, w-west, u-up, d-down).

    The students must then respond by typing in the actions they wish to
    perform.  Most actions require two words, for example:
    light candle, get gold, drop sword, examine hay, enter house, etc.
    Some actions require only  a single word:
    HELP - in certain areas, the computer will provide clues or advice when
           this command is typed.
    QUIT - allows the students to exit from the adventure.
    To move to a new area, the students need only type n, s, e, w, u, or d
    which means go north, go south, go east, go west, go up, or go down
    (the long form of the command is also acceptable, however).

    An important feature included in all Button Adventures is the
    SAVE GAME command.  This command allows the students to save their
    current location, and all items acquired during their quest, in a file
    which can be loaded the next time they restart the adventure.  Each
    student will have a different file name as the computer will combine
    their first and middle names together to form a unique name (e.g.
    Robert James Smith is saved as ROBJAM).  SAVE GAME is not only
    important at the end of a learning session, it is also used when the
    player feels that an action he is about to take may result in "death".
    As "death" results in the automatic cessation of the game, the player
    can rapidly return to his current status by saving the game before his
    "death" occurs.

    We strongly suggest that the students construct a simple map during
    their travels so that they can more easily return to previously
    explored areas.  This map will greatly reduce the amount of time
    required to play the adventure as it eliminates confusion and the
    associated random wandering.  A simple map is nothing more than a block
    diagram with area names, objects found, and permitted directions of
    travel.  A portion of a typical map is shown below:

       !-----------!e      w!-------!e      w!----------!
       ! mountains !--------! river !--------! dark pit ! (gold)
       !-----------!        !---!---!        !-----!----!
          (deer)                !s                 !s
                               n!                 n!
                            !---!---!e      w!-----!----!e    w!------!
                            ! house !--------! old tree !------! barn !
                            !-------!        !-----!----!      !------!
                            (candle)               !s           (shovel)
                                                  n!
                                             !-----!----!
                                             !  pyramid ! (scroll)
                                             !----------!

    Most of the objects found by the students are to be used elsewhere in
    the adventure.  For example, the candle found in the house may be
    needed to explore the dark pit.  The shovel in the barn may be needed
    to dig for the gold in the pit.

    Although the students may play the adventure by themselves, use of
    teams comprised of two or more students will normally allow the
    adventure to progress at a more rapid pace.  One student is selected to
    enter the commands to the computer; the other team members contribute
    additional ideas about alternative actions to be taken when a seemingly
    difficult problem has been encountered.  Use of the team concept also
    reduces the number of computers required during a class session.

    Although helpful suggestions and hints are provided by the computer
    during the course of play, on rare occasions the students may encounter
    a seemingly insurmountable block and cannot progress further. This is
    highly unlikely, especially when the team concept is used, but, should
    it occur, the author will provide additional hints.  This service is
    free of charge to REGISTERED USERS.  Please write us and describe the
    area in which the difficulty has been encountered.  We will then help
    you to solve the problem.  A self-addressed, stamped envelope for
    returning the hints to you should be included with your letter.
    NOTE: Inquiries from NON-REGISTERED users will not be answered!
    To register your copy of The Asian Challenge, copy and fill out the
    registration form which appears on the screen when the adventure is
    first started.  Be sure to select the FREE adventure that you would
    like to receive as a bonus for registering.  The fee for registering is
    $15.00.

    We sincerely hope that you will find our educational adventure series
    to be both useful and enjoyable in the study of geography.  Two other
    educational adventures are also available for the study of geography.
    SOUTH AMERICAN TREK and AFRICAN SAFARI may be ordered directly from
    Conrad Button; please use the order form which appears in THE ASIAN
    CHALLENGE adventure.

    Thank you for trying our software.  Your comments would be most
    welcome.

    Conrad Button
    Conrad Button's Software
    13807 S. E. 282 St.
    Kent, WA 98042



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1688

     Volume in drive A has no label
     Directory of A:\

    ASIA     EXE    118034   5-02-89  12:26a
    FILE1688 TXT      2591  12-11-89   5:29p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-12-89   1:05p
    README   BAT       896   4-30-89   1:32a
    README   DOC      8064   5-02-89  12:04a
            6 file(s)     130163 bytes
                           28160 bytes free
