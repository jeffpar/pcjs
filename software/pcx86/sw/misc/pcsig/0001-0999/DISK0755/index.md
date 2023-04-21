---
layout: page
title: "PC-SIG Diskette Library (Disk #755)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0755/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0755"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CANTONESE TUTOR"

    Cantonese is an extremely hard-to-learn language spoken by more people
    than any other language in the world.  This program can help you learn
    it.  It is menu-driven, with menus for both the student and teacher.
    Lessons can be tailored by the teacher for drilling in certain areas.
    
    CANTONESE is designed for use with other forms of Chinese language
    study, since it does not provide actual spoken Cantonese as an example.
    The documentation can be somewhat difficult to follow at times, but has
    all the needed information to run the program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES755.TXT

{% raw %}
```
Disk No  #755
Program Title: CANTONESE Tutor
PC-SIG version 1
 
CANTONESE is a program and data files used to teach spoken cantonese. The
Program is menu driven and has menus for both the student and the teacher,
and lessons can be tailered by the teacher to allow drilling in particular
areas of the language. The system is designed to be used in conjunction
with other forms of chinese language study as it does not provide actual
spoken cantonese as example. The documentation can be somewhat difficult
to follow at times, but provides all of the needed information to run the
program. The program will run on any IBM-PC or compatable with at least
256K of memory and one disk drive (printer is optional).
 
Usage: Educational
 
System Requirements: 256K of memory and one disk drive
 
How to Start: Type CANTONESE and (press enter)
 
File Descriptions:
 
CANTONES EXE   Main program
MERGETST DOC   Documentation  file
SCORE    SP    File to hold student progress
LESSONEX       Sample lesson
READ-ME  DOC   Documentation file
CANAUX   EXE   Part of main program
LESSONE?       Sample Lessons (3 files)
PARA           Holds printer data
LESSON??       Different lessons for cantones (16 files)
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## READ-ME.DOC

{% raw %}
```
                                READ-ME.DOC




                             An Explanation of 

                                  CANTONES

                    A Program to Teach Spoken Cantonese


                          Version 2.0 (May 1986)

          =======================================================


               (c) 1986 by Louie Crew.  All rights reserved.
.pa
                             Contents


          A note on Version 2.0's changes

          A note on Version 1.1's changes

I.        What the Program Does

II.       Limitations of the Program
 
III.      The Files That You Receive

IV.       Use

          Main Menu

          PREPARING LESSONS

          An Overview

          Naming Files

          Entering data

          Ending the Entry of a Lesson

          Resuming Entry

          Correcting Mistakes

          THE REVIEWS

          The Quick Reviews

               List both Chinese and English Forms

               List English Forms Only

               Chinese Forms Only

          The Slower Reviews

               Branching

               Scores

               A Sample Slow Review
     
               Translation Skills

          Specialized Reviews

V.        Creating New Files by Word Class

          A Tip On Alphabetizing

VI.       Printing Files

          Installing Your Printer
          
          MergePrinting
          
          English-Chinese Lists
          
          Back Up Your Files

VII.      Ending a Session

VIII.     Improving This Program:  A Note from the Author
.pa
                            A Note on Revisions 

                        incorporated in Version 2.0


                          (c) 1986 by Louie Crew.  

                                 April 1986


Essentially the main change in 2.0 was the compiled version, producing the 
two executable files, 

                         CANTONES.EXE

and 

                         CANAUX.EXE.

Each chains readily into the other, and vastly speeds the operation of the 
program.  

CANTONES easily shifts between the student and teacher menus.  CANAUX  
allows you to (re)install one menu as the default.  CANAUX allows you to 
print lists and to reorganize them.



                            A Note on Revisions 

                        incorporated in Version 1.1


                          (c) 1986 by Louie Crew.  

                                 April 1986


In response to requests from the first others to use my program:  I have 
added the following features:

     1.   New files:

          A student menu, much simplified menu for anyone to use in 
          reviewing lessons.  It shifts easily to the teacher menu,  
          but mainly allows one to avoid the more complicated options of 
          when not wanted. 

               The student menu automatically writes misses alternately to 
               REV1 or REV2.  It lists only those files which begin LESSON?? 
               when it prompts the user to name the file to review.  It 
               omits the options to review by parts of speech and to review 
               with sentences rather than by words.  It also bypasses the 
               options to create new lessons or to print files.  Those who 
               want these more complicated functions--especially teachers--
               can still access them,  through (S)hift to Teachers' Menu. 

          An install feature, to accommodate most different printers.

          PARA  -- the file which the install feature creates and 
          the program accesses automatically to supply the printer's data.

          A dictionary feature, to reorganize files. (See the "Tip on 
          alphabetizing in Section V).
          

             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

             Note:  If you have an earlier version, replace it with 
                    CANTONES vers. 2.0.  Otherwise, most of these
                    new files will not work for you. 
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

          New sample lessons:  Now 

               LESSONEW 
               LESSONEX
               LESSONEY
               LESSONEZ
               LESSON1 THROUGH LESSON 16   	  
	

     2.   An easy escape:   The program now allows a user to end a review 
          quickly, even after specifying a desire to review an entire 
          lesson.   As the screen prompts:  just hit * as in response to the 
          first prompt for any new item in a lesson.  The program will 
          immediately report your score on the items actually reviewed and 
          return you to the menu for an orderly exit.

     3.   A tip on use:  Some users complained that they do not type well 
          and find it too difficult to type in the Chinese when responding 
          to English prompts.  They do not have to.   The program asks you 
          to do so, but does not require you to do so.  The program makes no 
          use of the data that you type.  Proficient typists may like to 
          type, to test whether they really know the tone markers.  No one 
          needs to be concerned about spelling except as it references 
          pronunciation.  

          Many will prefer merely to respond orally.  Then type just a blank 
          answer for each translation.  The program moves rapidly.  Blank 
          answers in Chinese entries must be at least one space or one 
          character.  With English responses, even a carriage return moves to 
          the next prompt.

Please share your experiences with the program:  I will incorporate as many 
as fall within my programming skills and time allowed.    If you have sent a 
donation, I will keep you advised of any substantial updates.

.cp 7
                              Louie Crew  (a.k.a. Li Min Hua)
                              Department of English 
                              Chinese University
                              Shatin, NT
                              Hong Kong
                              TELEX  50301 CUHK HX
                              TELEGRAM SINOVERSITY     
.pa
     CANTONESE runs with MS-DOS 2.1 or higher.

     CANTONES is copyrighted "Free-Ware."  Copy a friend's disk or download 
from an electronic bulletin board.  

     Persons who use the program frequently may want to send a contribution 
to the researcher.  Those who contribute at least US$10 will be informed of 
all future updates as registered users.  

     Persons who don't use the program should give it to someone else who 
will.  

     The program itself is free and must remain so.  For those who cannot 
find a copy in another way, the author will supply a disk by air mail for 
US$15, or by local Hong Kong post for HK$70, to cover processing costs. 
Remit in either US$ or HK$.

     Warning:  No one may sell this program; you may only give it away.  

     The program comes with no guarantees, written or implied.  
.pa
                           I.  What the Program Does
          

     CANTONES is designed to teach spoken Cantonese, but can readily adapt to 
Mandarin, or to any other language which the IBM keyboard can support, 
sometimes with no modifications. 

     CANTONES serves mainly to teach vocabulary and pronunciation. The 
program accommodates the tone system used by Parker Po-Fei Huang and Gerard 
P. Kok in Speak Cantonese,  (New Asia--Yale-in-China Chinese Language 
Center, 1981), who distinguish the seven tones of Cantonese by using western 
script in combination with three superscript markers ( \ / and - ) and a 
silent letter "h,"  as with the following round vowel: 
               _ 
               o    =  high level
               \
               o    =  high falling
               /
               o    =  high rising

               o    =  mid level
               \
               oh   =  low falling
               /
               oh   =  low rising

               oh   =  low level
    
     CANTONES keeps score about the user's success with four categories which 
the user mush master: 

                    word recognition
                    tone recognition
                    measure recognitimn
                    sentence translation 

     CANTONES allows the user to  review in different ways:
     
          prompted by Chinese or by English
          prompted with words or with sentences
          completing whole lessons or special categories of lessons
          testing only those items which one missed last time or 
               the entire lesson again

     (The student menu simplifies matters, and retains only the first option 
here.)

     CANTONES will print lessons, including lists of those words the user 
still does not know from a lesson.  With a standard word-processor, the user 
can also MergePrint the lessons into other formats, as for flash cards, 
vocabulary tests, etc.

     The program is based on Crew's earlier version, "MailMerge Cantonese," 
Hong Kong Computer Journal (February 1985), awarded "Best Article of 1985 by 
the Hong Kong Computer Society.


.cp 7
                      II.  Limitations of the Program 



     The program teaches nothing about written Chinese characters.

     The program teaches nothing about grammar. 

     The program works best if one uses it in the context of a course, with 
lessons, textbook, audiotapes, and a class in which to practice.

     The program comes with 20 sample lessons, to demonstrate how the 
program will work with any lessons which the user wants to learn.  

     Users must finally talk to Cantonese speakers to test their real 
performance.  

     The program augments the work of teachers, textbooks, and friends who 
are native speakers.  The program allows learners to continue privately, at 
their own pace, processes which began in class, in books, or in live 
conversation.


                      III.  The Files That You Receive

     The full program contains the following files:

LESSONEW       Sample lessons.  
LESSONEX
LESSONEY
LESSONEZ
LESSON1-LESSON16  :  The vocabulary of the first 16 lessons of SPEAK CANTONESE
                     BOOK 1, by Parker Po-Fei Huang and Gerard P. Kok, 
                     supplied with the permission of Far Eastern Publications,
                     New Haven, Connecticut.         	

SCORE.SP       The file which stores data about your progress. (Empty at 
               first)  
CANTONES.EXE   The primary half of the program, which chains automatically 
               into CANAUX.EXE.
CANAUX.EXE     Half of the program, which chains into CANTONES.EXE 
               automatically.
PARA           A file which the install feature of CANAUX.EXE creates and 
               both CANTONES.EXE and CANAUX.EXE access. It automatically to 
               stores printer codes and sets one menu as the default.
READ-ME.DOC    This documentation file.   
MERGETST.DOC   A sample MergePrint file which MergePrints LESSONEX when used 
               with MailMerge.  (Serves as a model for other print options.)
     
     The program requires at least one lesson, the cantones.exe files, and 
para to work at all.

     The full program is available in one archive, CANTONES.ARC, via 
electronic bulletin boards.  CANTONES.ARC, vers. 2.0, was archived by the 
public domain program ARC500.EXE.   The archive requires Version 500 or a 
later version of ARC.EXE for the user to extract the files. 

     The program uses SCORE.SP to store data regarding your progress.  You 
never have to open or close SCORE.SP on your own.  CANTONES  maintains it 
automatically.  It arrives empty because you have not yet taken a lesson, 
but it will soon hold your scores during your ten most recent reviews.  The 
file must always appear in the same directory with CANTONES for the program 
to to work properly.  


.cp 5
                             IV.  Use


     To use, turn on your computer.  CANTONES.EXE and CANAUX.EXE are the two 
program files, and belong together on one drive. Put all other distributed 
files (plus any lessons you create) either on the same drive with the .EXE 
files or on another.  If you use more than one drive, log on the drive 
without the .EXE files and use the path command to tell MS-DOS where to find 
the program files. (See your DOS manual)
     
     When on the drive with the lessons, type:

          CANTONES

The distributed version loads the simpler, student menu automatically (you 
can change that default with install):


                          S P E A K   C A N T O N E S E                  
                                                                        
                           /           /       \       /                     
                         G o n g   G w o n g d u n g w a 
                                                                        
                       Vers. 2.0  (c) 1986 by Louie Crew                 
                                                                        



                             (C)omplete review
                             (Q)uick list

                             (S)witch to Teacher's Menu

                             <ESC> to end the session

                             Choice:                               
  

     First the user must specify whether to review completely to list 
rapidly all of the contents of a file.  Second, the user must name the 
lesson to review.  Third, the user must specify either English or Chinese 
prompts. 

     The teacher menu yields a fuller range of options:

                            Your Name's Copy of 
                 CANTONES  vers. 2.0  (C) 1986 by Louie Crew
                   Installed for Your Brand Name Printer

                            PREPARE NEW LESSONS

                1 = Enter data   2 =  Add data   3 = Edit

                       REVIEW LESSONS PROMPTED WITH

                   Chinese                    English

              4 = Words                      6 = Words
              5 = Sentences                  7 = Sentences

              8 = Toggle to review by parts of speech   (OFF)

                Just a quick list of (E)ng. (C)hinese (B)oth

        (A)uxiliary functions    (S)witch to Student Menu   0= END

            Enter:
              ===========================================

If you choose "A" you get another menu:


                 CANAUX   Auxiliary Programs to Use with CANTONES

              (c) 1986 by Louie Crew, Chinese University, Hong Kong

              1 = Reinstall the program
              2 = Reorganize a file, to put English words first
              3 = Print a regular file (Chinese words first)
              4 = Print a regorganized file (English words first)  
              5 = To Main Program
              6 = to MS-DOS


Study these menus very closely.  They can tell you almost everything else you 
will read in this booklet.  They are your main guide to the program.  The 
program should always return to the default menu after you complete any one 
task.


                             Preparing Lessons

                                An Overview

     Since the program is not tied to any one textbook, users (teachers or 
students) will need to to prepare the lessons for review, typically by 
entering words from a textbook or from some other source, such as a native 
speaker's list of words around a particular subject one wants to master.

     Learners will often find that the task of typing the lessons into the 
computer effectively introduces them to the material; and often in the very 
first review of the lesson, they will already know a several items from this 
exposure. 

     Many will not want to limit their use of the program to Cantonese, or 
even to Chinese.  The program allows you to build vocabulary lists for any 
two languages which the IBM keyboard can support.

     The Main Menu specifies the options: 

               1 = Enter data   2 =  Add data   3 = Edit


     "1" here begins a new lesson.

     "2" lets you continue adding material to an old lesson, as when you 
have stopped to do some other task or when you have discovered some new 
terms to add to your special word lists

     "3" lets you correct mistakes that you detect in lessons that you have 
already created.


                                Naming Files

     The student men;u assumes very simple naming conventions.  When it 
tells the user the files from which to choose, it lists only those named 
LESSON??.--where the two question marks represent the only part of the names 
which varies.   The student menu also writes the items missed to a new file, 
automatically named either REV1 or REV2.

     The teacher menu allows much more flexibility, both in creating new 
files and in accessing them.  (Actually, the student menu also lets users 
access any file: but the student would have to know the name, since the 
program lists only those in the form of LESSON??.  Thereby, teachers may 
prepare, review, and print special files. 

     Those who use the teacher menu rather than student menu will be wise to 
establish clear conventions in naming their files, especially to distinguish 
between permanent files and temporary ones.

     For example, if I am trying to learn most of my vocabulary from lessons 
in a textbook, I will want to create permanent files which contain all words 
in the lesson.  Even as I learn more and more of the words in a lesson, I 
will want to keep the full lesson in tact.   

     I will also want to have temporary files, to collect the items that I 
now do not know, so that I do not waste time reviewing material that I 
already know.  CANTONES collects mistakes automatically: whenever the user 
begins to review a lesson, the user must specify the name of a file which 
will store the items which the user did not know.  Then next time, the user 
can elect to review only that smaller file, and from that, write the 
mistakes into hopefully an even smaller file, etc., until the latest file of 
"mistakes" is empty.  Usually the user will want to return to the 
"permanent" file to test memory again. 

     For this process to work efficiently, users need to name files in ways 
that distinguish between the permanent and the temporary.  I recommend my 
own system:  

      I name all permanent files from the same source in a similar 
      way, such as L1, L2, L3.... for files which come from one source, 
      SLANG1, SLANG2.... for files from another, etc.
     
      I name all temporary files REV1 or REV2.  When I do, the program 
      recognizes my convention and automatically writes the mistakes in 
      REV1 to REV2, or the mistakes in REV2 to REV1, alternately. Or I may 
      simply number between 1 to 10, or often just "1" and "2" 
      alternately.  I don't need to fill the disk with my mistakes, but I 
      do need to store them briefly until I know them.

      Thereby my names always reflect a files relationship to other 
      files.  Whenever I begin a new sitting,  I always know which files I 
      can and cannot safely overwrite. 

     Especially remember:  the computer overwrites any old file if the user 
names a new file with the same name.   Users will want to overwrite 
temporary files, to limit their proliferation.  They are "temporary" 
precisely because you will not need them very long.  For example, I might 
need to see the items I missed at 9 a.m. this morning for five more times, 
but I will not need to see them next week, unless I am too stupid to be 
learning a language at all. If next week I need to review the same lesson, 
I need to start with the entire lesson, or with a file I have renamed on 
purpose, such as HARD6 for the ones I found hardest in Lesson 6.  

     The student menu employs most of my personal conventions, but the 
teacher menu allows users to adopt conventions that best serve their own 
purposes.  Users will need to have some conventions to make files easily 
recognizable and distinct.

     Novices to computers will want to read their computer manual for 
additional material about the conventions computers require for file names, 
such as the restriction to a maximum of 8 continuous letters, plus an 
optional extension of up to a maximum of 3 continuous letters.

     The teachers' menu requires users to name files often.  Do so 
purposefully, carefully. 


                           *********************


                                 Enter data


     If you choose "1," the screen responds:    


Here are the files you already have: 

                         C:
                         LESSONEX
                         SCORE   .SP       
                         CANTONES.EXE
                         CANAUX.EXE
                         READ-ME .DOC
                         MERGETST.DOC

                         What name would you like to give
                         to your new lesson?


Your own screen here will change to reflect any additions or subtractions  
to make to your collection of files as you continue to use the program.  
Notice:  Of these here, only "Lessonex" is a lesson file.  Only "Lessonex" 
is a files which you can actually review: and it alone would appear when 
this question is asked from the student menu. You cannot review any of the 
other files, but you can review any which you have prepared with options 1, 
2, or 3 of the teachers' menu. 

     Next you are prompted to enter data for each item:  

                         <> to end.

                         Word in Chinese?

                                         \
     Suppose you enter the Chinese word yahn.  First you type the "y"; then 
the "a"; then the "\" ...  The accent mark will appear over the previous 
letter automatically (unless you have come to the end of a line).   The 
program recognizes only three such tone markers, and only when you respond 
to prompts for Chinese:

               \  = the slash descending to the right
               /  = the slash ascending to the right
               -  =  the hyphen

     N.B.:  the program regards these keys strictly as superscripts  in 
     Chinese entries:  hence they are not available for other uses.   

     Next the screen prompts:


                         English?   

Here you would enter "person".  Then the screen reviews the following parts 
of speech and prompts you to specify one:

                a  = adverb                  p = particle 
                at = attributive           pat = patterns
                av = auxiliary verb         ph = phrase
                bf = boundform              pn = pronoun
                cv = coverb                 pv = postverb
                ev = equative verb          pw = placeword
                fv = functive verb          q  = question
                i  = interjection           rv = resultative verb
                ie = idiomatic expression  rve = resultative ending
                m  = measure                sp = specifier
                ma = movable adverb         sv = stative verb
                n  = noun                   vo = verb-object comp.
                nu = number                 tw = time word
                on = onomatopoeia

                             x   = other useful expressions
               ---------------------------------------------
               Part of speech? 
            \ 
     Since yahn is a noun, you would enter "n".  


     Lower case matters here.  Be consistent:  use upper or lower case all 
of the time, if you want the program to match properly with several options 
that you will specify when you review the lessons!

     (Note:  Programmers again could alter these codes to reflect different 
analyses of Cantonese or or any other languages.  See the note at the end 
about the availability of the source code.)  Non-programmers themselves 
can use different codes here without even changing the program, so long as 
they remember what codes they have used when later they ask to review items 
which match.) 

 
     Since you specified "n" the program will ask you 

                         Measure?


It will not ask for measure for other word classes.  

                          \
The correct measure for "yahn" is "go," which you would then enter.

     Next the program prompts:

                    Sample Chinese sentence: 


                     - -  \    /
You might respond:  Nidi yahn hou guih.<>   


Next the screen prompts:

                    English? 


You would need to type "These people are very tired."
     Finally, the program plays back the full entry and asks:

          Is the full entry correct?  Y/N

If you say "N,"  you are allowed to re-enter it from the beginning.  If you 
say "Y", the program prompts for the next word:  

     Note:  the program will also prompt "Correct?  (Y/N)" for earlier 
entries in Chinese, but not for those in English.  These prompts allow you 
to correct smaller, more difficult portions of the entry without having to 
retype the entire entry.   In practice, those prompts speed rather than 
delay the task, since the Chinese entries are less familiar and provoke more 
mistakes more easily. 


                             Ending the Entry of a Lesson

     Whenever you complete the entry of one item in a lesson, the program 
prompts you again for another items, as before:


.cp 4
                         Enter:         
                         <> to end.

                         Word in Chinese?

The "<>" here means "carriage return" or "ENTER key."  

     To end the session completely, hit the carriage return or the ENTER 
key.  The screen will remind you of the name which you have given to your 
new file "Your new entries have created ..." and will prompt "Hit any key to 
return to the main menu."  Make a note of the file name.  Return to the main 
menu, and enter your next response, even if merely "0" to end the session.

     Remember:  after each new item when you are entering a lesson, you will 
always return to this first prompt.  Always end a session in the orderly 
way described.  Otherwise you risk losing all data which you have entered 
for this lesson.  You can fearlessly terminate your the creation of lessons 
prematurely, because the program allows you to return to the same lesson: 


                               Resuming Entry


     As we have seen, the Main Menu specifies the options: 

                    1 = Enter data   2 =  Add data   3 = Edit


     Choice 2  allows users to enlarge lessons created earlier.  The 
program prompts for items exactly as in Choice 1, but first the user 
specifies an existing file to which the program will add them, rather than a 
new file.  The program also lists all existing files so that the user can 
precisely name the file to be enlarged.  

     Choice 2 especially helps one who needs to work in short segments of 
time while entering a long lesson.  One closes each "incomplete" version in 
the orderly way described above; leaves to do something else; and returns to 
the lesson by Choice 2.  


                            Correcting Mistakes

     Choice 3 provides an orderly way for users to rectify mistakes 
after they have already created a file.   It lists every item in a specified 
file individually, and prompts "Correct?  Y/N."   If the user says "N," the 
program prompts as the user re-enters that item completely.


                                THE REVIEWS 

                             The Quick Reviews


     Both menus support this option.  Many times one wants merely to flash 
through a lesson, sometimes just to see what it there, sometimes to warm up 
for a more thorough session.

     The program provides three ways to do so: 


                    List both Chinese and English Forms


     If one responds with a "B" at the Main Menu, the program will list all 
words in a lesson giving both the Chinese and the English versions.  When we 
type the letter, the screen prompts "Which of your files do you want to 
list?" and, to guide us as we choose, lists all of the files currently on 
the drive with the program. 

     When we answer, as with  LESSONEX, the program scrolls through the 
Chinese and the English words in that lesson: 

                               \
                             syu

                             book

                                 /
                             bouji

                             newspaper

                              \
                             Junggwok
                             China

                              /
                             meihgwok
                             America


                             gwai
                             expensive

                                      Hit any key for more...


     Notice that the program pauses when the screen fills.  As you hit a 
key, you see more of the lesson, until you have seen all items.   At the end 
of the lesson you have another choice: 


                         1 = List another file
                         2 = Return to the main menu

			Enter:
         
     If you choose "1," you will review according to the same terms that you 
expressed in your first review (here, to see both Chinese and English 
together).  The program prompts to you name the next lesson and you proceed.  
If you want to change terms for a different kind of review, choose "2" and 
specify your choice at the main menu. 

     "2" here speeds up this process if you mainly want to flash through 
several lessons very quickly.


.cp 4
                          List English Forms Only


     This review works just like Choice B, except that you flash through 
lessons with only the English words.  This is very useful if you want 
quickly to test your knowledge of a lesson.  


.cp 4
                          List Chinese Forms Only 


     This review works just like Choice B and Choice E, except that you 
flash through lessons with only the Chinese words.  


.cp 5
                             The Slower Reviews


     The heart of the program, and of any instruction, is the slower, more 
thoughtful review.  The teacher menu specifies: 


                            REVIEW LESSONS PROMPTED WITH

                        Chinese                    English

                   4 = Words                      6 = Words
                   5 = Sentences                  7 = Sentences

                   8 = Toggle to review by parts of speech   (OFF)

The student menu retains only options 4 and 6 here, i.e., the choice of 
reviewing all items prompted by either Chinese or English.  A teacher who 
wants students to review words by parts of speech, can still allow them to 
do so by culling all words in a category, such as all time words (see Part V 
below) and naming the new collect in a way that it will show up as a lesson 
in the student's listing, as would the name LESSONTW, for example. 


     The "slow" reviews add features essential to good instruction:

                                 Branching

     The student menu branches automatically, writing the items missed 
alternately to REV1 or REV2 and inviting the students to review this file in 
the next round.

     The more complex teacher menu prompts the user to specify a file to 
collect the ones missed. Typically, in the next round you will want to 
review only those items, writing the mistakes in that round to yet another 
(hopefully smaller) file....until the file of mistakes is an empty file and 
you have succeeded in learning the lesson.   (Alternatively, one may create 
specialized word lists by "missing" the ones desired for the lists.  See 
Part V.)

     This feature keeps the program from boring you.  It "branches," as any 
good program must, into what you personally need to know, and does not 
require you to stay with anyone's prior expectations, yours or those of the 
one who prepared the lesson which you have begun to review.  It also keeps 
the program from paying false compliments, as it would if you continued to 
get high scores but only because you limited your vision to what you already 
know.

.cp 3
                                   Scores

     The program keeps your score, in 4 categories: word recognition, proper 
tone designation (if you respond in Chinese), proper identification of 
measure (if the word is a noun), proper translation of sentences.

     At the end of any lesson, the program computes your score in all 
categories and reports it automatically.  It also allows you to choose to 
see how you compare in this lesson with your score on the last 10 lessons 
(or as many as you have completed up to that number).    

	This option lets you diagnose which of the 4 categories to 
concentrate more closely on next time.  The program never lies to you about 
your progress or your lack of it.  It does not court your approval, as many 
a teacher might.   Nor do you have to worry about others knowing your 
mistakes.  Many will find that they will sit at a lesson much longer merely 
under the compulsion to compete more effectively against their own private 
record.

     Note:  the program gets you to help keep score.  Some will consider 
this an annoyance, if not a "bug"; others an advantage.  After you answer,      
the screen shows you the correct answer and asks "Correct?  Y/N"--for each 
possible error.  One key stroke sends you along.  (The program never even 
shows the Y or N on the screen; nor does it require a carriage return.)

     Perhaps it would be nice for the computer to decide whether you were 
correct, but practically that would present more problems than efficiency 
now seems to warrant.  

     For example, some will want to credit themselves as correct with a 
translation in which they have only one error in tone.  Others will be 
stricter.  Almost everyone will want the freedom to put tone markers over 
any letter in a syllable, not just over the letter arbitrarily chosen when 
the lesson was created.    Spelling is not the object.  Few Chinese people 
could read these phonetic transcriptions anyway.  Their sole function is to 
point towards intonation and live performance.


                            A Sample Slow Review

     
     Here follows a sample of the screens that would appear as one reviewed 
an a lesson slowly, prompted with English words--i.e., when one requests "6" 
on the teacher menu or "E" from the student menu. The double underlining 
here indicates a user's responses from the keyboard.   

                        (The file to which you wrote those    
                        missed last was:  REV1).                

                        Type the name of the file which you     
                        would like to review.  

Note: the illustration here assumes that you have just reviewed another 
lesson.  (If you have not, the sentence will appear without a file name 
where "REV1" appears here.)  The program is reminding you that you wrote the 
items which you missed to a new file called "REV1" (or another specified 
file), in case you forgot).  Often the file of misses is the file you want 
to review next.  

                         Type the name of the file which you     
                         would like to review.  


.cp 2
                         ? REV1                           ====    
                         Type the name of the file in which you
                         would like to store the items 
                         that you miss:   

.cp 2 
                         ? REV2
                           ====

.cp 7
                         Person    
                                    /
                         Chinese:  yahn <>
                                   =======
                                   
                                    \
                                   yahn     

Note: the screen stops with the colon after "Chinese" until you enter
your answer and hit a carriage return.  Then the screen shows you the 
correct answer and asks


                         Regarding the Word?

          
.cp 2
                         Correct?  Y/N
                                   =

Here you confirm with one key that you got it right or wrong, as with next 
question, where you missed one: 

                         Regarding the Tone?


                         Correct?  Y/N

                         Measure:


.cp 4
                         go
                         ==
                         
                         go

.cp 5
                         RE measure: 


                         Correct?  Y/N
                                   =     

                         Translate:         


                         These people are tired. 
.cp 3
                          - -  \    /    
                         Nidi yahn hou guih.<> 
                         ===================           


.cp 2
                          - -  \    /    
                         Nidi yahn hou guih.

                         RE translation: 

.cp 2
                         Correct?  Y/N
                                   =

Because you acknowledged one one mistake, with tone the first time, the 
program will save this entire item into your new file of misses (here you 
named it "REV2"), so that you can review the entire entry again. 

     The program will continue in the same fashion with the next word, the 
next....   The program will inform you when you have finished and will 
review your score. (Here we will assume that only this one item was in the 
file.): 


.cp 7
                  You have completed your review of: REV1

                                  Summary

                    1            = Records in the file
                    1            = Records actually reviewed
                    100          = Percentage of records reviewed
                   -------------------------------------
                    75           = Overall score  **************

                    1            = Records with at least one error
                    100          = % of total

                   Words missed:               0  or  0   %
                   Measure missed:             0  or  0   % of tested
                   Tone missed:                1  or 100  %
                   Sentences missed:           0  or  0   %


     You earned only the 75% because you missed one of the four things 
tested for this item.  If you had reviewed a longer lesson, these counts 
would be much more useful, as you would lose track of your score.

     Often that score keeps you informed well enough before you dive into the 
misses for another try.  Sometimes, however, you want to back off for a fuller 
diagnosis as the program prompts: 

.cp 2
                    Do you want a fuller review?  Y/N
                                                  =

Had you said "N,"  you would have the choice of immediately going to the file 
of mistakes or of returning to the Main Menu for full options.  The full 
review follows.  The statistics here will vary from your own scores.  Always 
the program reports the scores for the most recent lesson first and then the  
score for 10 most lessons, whether or not the user has asked to review those 
scores each time.

.cp 7
                    Regarding Words Not Recognized
                    --------------------------------------------

                    File:        Percentage 
                   
                    REV1               0
                    REV2               0
                    REV1               0
                    LESSON1            1
                    REV2               0
                    REV1               17
                    REV2               17
                    REV1               40 
                    REV2               70 
                    REV1               80     
                    LESSON14           95

                    Hit any key to review next category.

                    Enter:

Notice:  The user here has recently reviewed two lessons, the current one, L1, 
(which has only 1 item in it, remember) and L14.  Notice how the user improved 
the score each time with L14 until finally the user had no errors, at least no 
errors in word recognition.  

     When the user hits any key, the program continues to review the score in 
like fashion for the other three categories monitored:  

                    Regarding Tones Missed
                    Regarding Measure Missed
                    Regarding Translations With Mistakes

If for one particular review, one of these categories did not apply, the 
program specifies  "N/A"--as when one reviewed a lesson prompted with Chinese 
and therefore did not test knowledge of tone.

.cp 7
     The full review concludes with a composite score:
                    
                    Enter:
                    Here is a review of your overall scores
                    on the recent lessons:

                    Lesson       Size          Score

                    REV1          1               75 
                    REV2          1               50
                    REV1          1               25
                    LESSON1       1                0
                    REV2          4              100
                    REV1          7               91
                    REV2          12              77
                    REV1          20              77
                    REV2          24              56
                    REV1          25              44
                    LESSON14      30              10


Here the user sees the progress, especially with the full LESSON14, which got 
smaller and smaller in the reviews of temporary files (here REV1 and REV2).  
The student still needs to review the full LESSON14 again to see whether 
these reviews have fixed the full list more permanently in mind.  These 
scores show that the user has chosen to progress only with those most 
recently missed and needs to test real memory or all of LESSON14, especially 
of those items recognized once but not reviewed recently. 

     The full score concludes with a reminder: 

                    Remember that you have stored all those
                    with any errors in the new file called
                    REV2

                    Hit any key to list them quickly.
                                                       
                                                                      \
If the user hits a key, the screen shows the Chinese and English for yahn, 
since that is the item which the user had missed.  Then the user must choose:

                    1 = Review this new file more slowly
                          again saving those missed.

                    2 = Return to the main menu.


.cp  5
                             Translation Skills


     Both menus review any example sentences stored with lessons.  Often 
lessons omit this feature.  The program allows teachers to create lessons of 
either kind.

     On the teacher menu, options 5 and 7 review only those items in lessons 
which include illustrative sentences.  These options by-pass many of the 
fundamental questions about individual words.  Most will not want to use 
them except for specialized instruction. 

     Nevertheless, CANTONES most effectively uses translation as an adjuncts 
to building vocabulary one word at a time.  Options 5 and 7 will not really 
prove very useful, because of two special problems, though a few users may 
want the freedom to do so.  The problems: 

     The program writes any item ("record" is the official term) into one 
     record line, maximally 254 characters long (including spaces, 
     accents...every jot and tittle).  After you have entered a word in 
     Cantonese, then in English, then its measure, and its part of speech, 
     typically you have room for maybe one line (80-columns) of sentence and 
     one more line of translation.  That is not much room for elaborate 
     translation exercises.  Besides, complicated translations do not make 
     good use of the computer screen: a user's answers are too hard to match 
     with stored answers when the eye must take in more than 2 lines at a 
     time. 

     Remember that the program will assume that you have ended entry for the 
     entire lesson unless you enter more than a space or carriage return for 
     the first prompt, the one that asks for a word in Chinese.  Even if you 
     user want to use only sentences, you person will still need to enter 
     something, however meaningless, when prompted for the Chinese word. 
     You can circumvent this problem by entering the same null character 
     every time, such as "."-- but will not be able to ask for a quick 
     review of the lesson, as it would list only a screen of dots. 


.cp 5
              Specialized Reviews:  Toggle for Parts of Speech


     A toggle works by hitting the specified key (here "8") to change its 
condition.   It alternates ON or OFF.  If ON, this toggle does focus merely 
on the one part of speech which it later prompts you to specify.    The 
condition when one load the program is stated on the main menu:


          8 = Toggle to review by parts of speech   (OFF)


Users may choose to review words of just one class by first hitting "8."  
The screen will then show that the toggle is ON.

     This option when on allows the user to specify any one class of words 
to review within a lesson, either of a class which the user has chosen and 
remembered when entering the words, or of a class which the screen prompted 
for at entry time: 

               a  = adverb                  p = particle 
               at = attributive           pat = patterns
               av = auxiliary verb         ph = phrase
               bf = boundform              pn = pronoun
               cv = coverb                 pv = postverb
               ev = equative verb          pw = placeword
               fv = functive verb          q  = question
               i  = interjection           rv = resultative verb
               ie = idiomatic expression  rve = resultative ending
               m  = measure                sp = specifier
               ma = movable adverb         sv = stative verb
               n  = noun                   vo = verb-object comp.
               nu = number                 tw = time word
               on = onomatopoeia

                            x   = other useful expressions


     If a person has problems with words in any one of these classes, this 
option allows the user to focus.


                    V.  Creating New Files by Word Class

     This section does not apply to those who use the student menu. It 
serves mainly those who prepare the lessons.

     With a little imagination, the user can exploit the toggle to generate 
specialized lessons of great variety.  Thereby the toggle can serve very 
effectively to help one design additional instruction. 

     Suppose, for example that after 10 lessons or so a user wants to review 
all time words.  One can enter each lesson one at a time an toggle to review 
on the "tw"  That method is easy enough--all that most users will need. 

     But suppose that a teacher or learner wants to create a new, permanent 
file which contains all and only time words.  Doing so is fairly easy:

     1)   Toggle "8" to ON.
     2)   Specify the class (here, tw) when prompted to do so
     3)   Specify the file to collect "mistakes" with a name that reflects 
          your design, e.g., LESSONTW.3 -- to contain all time words from 
          LESSON3.
     4)   "Miss" (i.e., say "N" when asked "CORRECT?  Y/N" for at least one 
          of the scores kept on each item.  (You can then hit carriage 
          return for all other answers to speed the "review")
     5)   Repeat steps 2-4 for each lesson from which you want to cull the
          time words, writing "mistakes" always to different files with the 
          same name, but a different extension, in LESSONTW.1, LESSONTW.2....
     6)   After you have culled time words from all files that you wanted to 
          review, then at the dos prompt, type 
               COPY LESSONTW.* LESSONTW.ALL
          LESSONTW.ALL will contain all of your gleanings.

These steps run very quickly and give you a huge freedom in building 
specialized word lists.

     Note that nothing prevents you from using other letters to designate 
word categories, so long as you do so when you enter the words initially 
into your word lists.  


.cp 5
                           A Tip On Alphabetizing


     Most word lists don't really need to be in alphabetical order, but that 
order helps for lists from which one frequently wants to isolate specific 
examples, as in special review lists, small dictionary-making, etc.

     Users can quickly sort any file which CANTONES creates.   All versions 
of MS-DOS come with a file called SORT.EXE.  Enter the following sequence at 
the DOS command line:

     SORT <FILETOBESORTED >NEWFILE 

Be sure to end the line with a carriage return.  Also be sure to type the 
"<" and ">" precisely as shown, with no spaces between the character and the 
file name.  Add drive designators for any files not on the same drive with 
SORT.EXE.  

     Then inspect NEWFILE (or whatever name you specified) to confirm that 
it is alphabetized.  Usually you will then enter the sequence:

     ERASE FILETOBESORTED
     REN NEWFILE FILETOBESORTED

--supplying your own names for the files.

                           VI.    Printing Files

     CANAUX allows you to print files. 

     The print facility is especially convenient if you have several words 
which you have not mastered when you have to end a session at the keyboard 
and want a paper copy of the words that you still do not know.  It is also 
useful when teachers want to prepare word lists.

                          Installing Your Printer

     Before you can print, however, you must Install the program to 
recognize the codes of your own printer.  You install this feature from 
CANAUX, accessible as an option from the teacher menu.  Install will ask you 
to give in decimals the codes your printer uses for superscript on, for 
superscript off, and for backspacing.   You can find those in the manual for 
your own printer.  For example, manuals for my two printers specify:

                              Juki 6100                Epson MX-80

          Superscript on        27  68                   27  83  0
          Superscript off       27  85                   27  72
          Backspacing            8                        8      

     Some may want to run install more than one printer.   That is easy to 
do if they make separate copies of the program, labeling their disks to 
reflect how the PARA file on each is installed. Then, to shift printers, 
choose the disk that the right printer in the PARA file. You may review the 
contents of PARA (or of any such file that you have renamed, if at the DOS 
prompt you enter    TYPE PARA <>.  It also stores the code for the default 
menu, your name and the name of your printer. 

     Option 9 and option "/" ask you to specify:



                    Be sure that the printer is ONLINE
                    and paper at the first line.

                    What file would you like to print?

                    ? 

     Then the text appears .

     Users may also view their lesson files directly by using the non-
document mode of their word-processors, but should do so very cautiously.  
Any alterations in the "comma separated variables" could make that file 
inaccessible to the computer.  These files are not very intelligible, as the 
accent marks appear next to rather than above the appropriate letters.  
CANTONES reads these files and reports them in the formats described 
earlier.  


                               MergePrinting

     A sample MailMerge file (MERGETST.DOC) is included with the program for 
users familiar with WordStar.  It shows how users can MergePrint data from 
the Lesson files.  Users can modify this model for other formats, as to 
print flash cards, vocabulary tests, etc.   This method makes print options 
much more available, as each user will already have installed the proper 
print codes for his or her version of WordStar. 

     MERGETST.DOC prints the accents (\ / or -) to the right of the letter.  
If you want the accents over the letters, you can make a second copy of the 
lesson and use WordStar to add the codes for backspacing and superscripting 
for each of the three accents used.  The procedure looks long, but actually 
works very quickly:

          1.   copy LESSONEX (or any other lesson you create) into a file of 
               another name.  

          2.   Let the new name replace the file named after .df in 
               MERGETST.DOC.  Better, make a copy of MERGETST.DOC and change
               the file name after .df to that of your lesson file altered
               to overprint the accents.

          3.   Enter the new copy of the lesson via WordStar.

          4.   Type ^QA
          5.   When prompted for string, enter     \
          6.   When prompted for replacement, enter  ^PH^PT\^PT
          7.   When prompted for options, enter  NG<ESC><ESC>
  
          8.   Type ^QA
          9.   When prompted for string, enter     /
         10.   When prompted for replacement, enter  ^PH^PT/^PT
         11.   When prompted for options, enter  NG<ESC><ESC>

         12.   Type ^QA
         13.   When prompted for string, enter     -
         14.   When prompted for replacement, enter  ^PH^PT-^PT
         15.   When prompted for options, enter  NG<ESC><ESC>

         16.   Save the revised file 
         17.   MergePrint either MERGETST.DOC (altered as in Step 2) or
               from a copy of MERGETST.DOC renamed after you have altered
               it. 


                           English-Chinese Lists

     Files will be sorted alphabetically only in Chinese, since 
the first word in any entry is the Chinese word.  However, the auxiliary 
menu allows you to re-organize any of these files into English-word-
first.  Access the auxiliary menu by typing "A" from the teacher menu or by 
typing AUXCAN at the MS-DOS prompt. Then choose option 2 from the auxiliary 
menu: 

               2 = Reorganize a file, to put English words first

After the program creates the new file, it lets you choose to leave to MS-
DOS so that you can sort the new file, as described above.  When you have 
done so, rerun CANAUX and specify option 4 to print your new file:  


              4 = Print a regorganized file (English words first)  


     SORT.EXE can handle any files up to 85K, far more space than most word 
lists will require.  Any longer files can be sorted by parts and recombined 
with your word-processor in the non-document mode.



                             Back Up Your Files


     ALWAYS WORK FROM BACKED-UP COPIES, both with program files and with 
lessons that you create!  You can create a batch file to backup lessons
after each new creation.  For example, if you use the convention of naming 
all lesson files with LESSON as the first six characters, the following 
command line from drive B: (with your lessons) will copy your files from to 
a backup disk in Drive A:  

               COPY LESSON?? A: 

If you don't want to bother with such a command, type it once into a file 
called daily.bat.  Store daily.bat on your disk wit the lessons, and then 
simply type DAILY when you are ready to back up.



.cp 5
                           VII. Ending a Session


     Always end a session in an orderly fashion:  type "0" when at the Main 
Menu.  You will return to the DOS prompt from which you began the program.

     Any other option on the Main Men will return you to the Main Menu when 
you have completed the task. 

     In this way you will help to assure that your files will remain in 
tact.


.cp  4
           VIII.  Improving This Program:  A Note from the Author


     I am not a professional computer programmer.  I am a writer who teaches 
Chinese people to write in English.  I began this project strictly to help 
me prepare as I began to study Cantonese.  First I wrote a version using 
MailMerge (see Hong Kong Computer Journal, February 1985).  Then I 
wrote it in BASIC and continued to embellish it, especially to add the 
scoring feature that made me study more aggressively.   Finally, I compiled
it.

     I began on a CP/M machine, and only recently rewrote the program to run 
on my IBM clone.  

     CANTONES does a job that no other program now does.  I avoided silly 
games, I hope.   For example, the computer does not ask for your name and 
then say, "Mary, got got that one right, didn't you?  Congratulations."  
Computers are not people, and I believe that people should learn from them 
without fiction.  We never had that problem with flash cards, but some 
programmers treat the computer like a modern prayer wheel.

     CANTONES never tires as it drills me.  I don't want to wear out my 
teacher or my friends. 

     I hope that my program will help them learn to speak Cantonese.  I also 
hope that some other programmers will help to make the program better.  

     I am now adapting the program to teaching English vocabulary to 
students of English.  The program tests students' mastery of new vocabulary 
in most of their readings for our literature assignments.  I hope that 
publishers of anthologies will soon provide much more sophisticated versions 
for the literature of all languages.  I want be the among the first to use a 
program that will let me review Faulkner's or Proust's vocabulary after a 
chapter has just moved me. 

     I will glady supply the source code for programmers who want to modify
CANTONES for other kinds of language instruction.   Send US$ 15 to cover my
costs in copying and mailing.

     I hope soon to make available versions of still other programs which I 
have written for myself, which may also help others.  Write me if you want 
more details:

          STYLE          A Program which profiles syntax 
          CHINGLISH      A Program which detects hundreds of forms of 
                         English which beset Chinese learners of English
                         and prompts for revision.
          MUSES          A Program which manages a writer's circulation data 
                         and related correspondence with publishers. (See 
                         Ratner's review  in CODA, publication of Poets & 
                         Writers, Inc., Summer, 1986)    
          APPLY          A Program which manages data for applications--as 
                         for jobs, grants, etc.
          F              Keeps up with all expenses and income, sorted into 
                         55 categories, and posts periodic totals to an 
                         eXecute files for use in SuperCalc (see preliminary 
                         report in Portable Companion, 1985).  
         
     Computer users are reviving "community" in substantive ways which too 
many academic settings long ago abandoned.  A few computer people still bark 
at a corner to protect their narrowness, but more and more are abandoning 
territoriality.  That is what "free-ware" is all about--another tradition, 
that of hospitality, of kindness to the stranger within our gates--as old as 
Buddah, Beowulf, Ulysses, or Abraham.  

     Please share reactions as you use this material.  I hope that 
CANTONES contributes modestly as you work to learn a language which will 
access the rich resources of friendship and culture which Cantonese opens.  

.cp 2
      /   \
     Hou teng indeed!                   Louie Crew, a.k.a. Li Min Hua
.pa

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0755

     Volume in drive A has no label
     Directory of A:\

    CANTONES EXE     60986   9-24-86  10:43p
    MERGETST DOC      1024   3-17-86  11:11p
    SCORE    SP        128   3-29-86   8:17p
    LESSONEX          1152   3-18-86  11:51a
    READ-ME  DOC     61568   8-10-86   8:42a
    CANAUX   EXE     43898   9-24-86  10:45p
    LESSONEW          1408
    LESSONEY          2688
    LESSONEZ          1664
    PARA               128   5-09-86  10:47a
    GO       BAT        38   5-15-87   4:11p
    LESSON1            896
    LESSON10          3200
    LESSON11          4480
    LESSON12          2688
    LESSON13          6528  12-29-85   8:26p
    LESSON14          3840  12-29-85   8:08p
    LESSON15          4096  12-29-85   7:51p
    LESSON16          4480  12-29-85   8:28p
    LESSON2            640
    LESSON3           1152
    LESSON4           1280
    LESSON5           1536
    LESSON6           1536
    LESSON7           4096
    LESSON8           3072
    LESSON9           3456
    GO       TXT       703   5-15-87   4:08p
    FILES755 TXT      1326   5-15-87   3:52p
           29 file(s)     223687 bytes
                           83968 bytes free
