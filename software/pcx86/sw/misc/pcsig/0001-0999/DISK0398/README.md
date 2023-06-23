---
layout: page
title: "PC-SIG Diskette Library (Disk #398)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0398/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0398"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ESIE"

    Put some smarts in your personal computer and turn it into your very own
    assistant. ESIE, the Expert System Inference Engine, is an artificial
    intelligence shell that lets you build a custom knowledge base, or
    expert system, to help you make decisions.
    
    Simple but effective, ESIE operates by loading in a knowledge base and
    building inferences out of the rules contained therein. You define the
    rules that the system uses. This is especially good as an introduction
    to expert systems as well as having excellent on-disk documentation to
    get you started in AI. For the advanced student, ESIE can handle the
    normal gamut of expert systems building.
    
    To see how ESIE works without building your own knowledge base, load
    ESIE and one of the three supplied knowledge bases (ANIMAL, DOCTOR, or
    GLASS) and try it!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ABOARD.DOC

{% raw %}
```

           






         


                                      ESIE 

    
                       The Expert System Inference Engine 


                      Manual For the ABOARD Knowledge Base
         
         

         
         






         
         
         
         Lightwave                                        July 1986 
         P.O. Box 16858 
         Tampa, FL  33617 
         
         

         
         
                                 Copyright 1986 

                              All Rights Reserved. 

         
         
         This manual may only be distributed as one file on the ESIE 
         distribution diskette.  Such duplication and distribution is 
         authorized without compensation as long as the diskette is a 
         duplicate of the ESIE distribution diskette.  This manual may 
         also be distributed in printed form as long as a copy of the 
         distribution diskette is attached.  All other distribution is 
         strictly prohibited. 
         

.L:55
.W:70
.N:1
.I:Page $$$
.H:...Page $$$

         
         
         The following documentation was written by one our users.  
         This documentation is intended to accompany the ABOARD 
         knowledge base.
         
         All names and addresses have been removed to protect the 
         innocent.
         
         Lightwave takes no responsibility for the accuracy of the 
         contents, but we offer our sincere thanks to the user who 
         submitted this material.  He is receiving a complimentary 
         upgrade to ESIE 2.0 for his troubles.
         






           




                                 To Get Abaord
                                      
                             An Expert System Shell

                               and Knowledge Base
                  

          

        
         Introduction.

         This project was done in fulfillment of the requirements for 
         Decision Support Systems, Naval Postgraduate School, 
         Monterey.  

         Part 1.  Application.  

         The military application that this expert system is designed 
         to meet is the circumstance where a Coast Guard cutter 
         arrives alongside another vessel at sea and wishes to conduct 
         a boarding.  The legal grounds on which to base a boarding 
         are scattered through several laws and treaties.  Knowledge 
         of this material is an expert application.  

         Coast Guard commanding officers, operations officers and 
         boarding officers are usually familiar with this material, 
         but other people assisting us frequently are not.  This 
         system is designed to provide some assistance.  For instance, 
         Coast Guard boarding teams are now riding Navy ships.  Navy 
         personnel are generally unfamiliar with the law enforcement 
         mission details, yet a Navy CO is required to support that 
         boarding party.  This system can function as a training aid 
         or intelligent checklist for him.  

         A little mare nostrum. 

         The law is made up of a few generalizations and thousands of 
         exceptions.  The two generalizations considered here are: 

         1) Vessels of a flag state on the high seas are subject to 
         the jurisdiction of that state and no other. 

         2) Vessels within the jurisdictional waters of a state are 
         subject to that state's jurisdiction.  

         The exceptions are coded into the knowledge base.  These 
         exceptions are found in a number of places: 

               The Constitution, particularly the Bill of Rights, 
               Treaties and conventions with other countries, US laws 
               (found in the US Code -- USC), Coast Guard and State 
               Department policies, Presidential orders. 

         For the operator. 

         Scenario.  You are a Commanding Officer, or Operations 
         Officer of a vessel carrying a Coast Guard boarding officer 
         (not necessarily a Coast Guard cutter -- the boarding 
         authority goes with the people, not the cutter).  You have 
         just driven up alongside a vessel 'out there'.  You want to 
         get the boarding officer aboard that vessel and need a legal 
         basis.  This knowledge base asks pertinent questions directed 
         at gaining that basis.  

         To run.  From the MSDOS prompt: 

                >esie   <cr> 
                filename for knowledge base: aboard <cr> 
                ==>go   <cr> 
                answer questions yes or no followed by <cr> 

         Things are error trapped, so typing mistakes are no problem.  
         If the scenario changes, rerun the program from the top.  

         WARNING.  This knowledge base assumes that the user is a 
         Coast Guard boarding officer (or his supervisor).  No one 
         else anywhere has the same combination of law enforcement 
         jurisdiction, so any other user could easily be overstepping 
         his authority.  

         For instance, if a vessel is inside the US Fishery 
         Conservation Zone and is a fishing vessel, Coast Guard 
         boarding officers and National Marine Fisheries agents both 
         have jurisdiction.  But Customs officers do not.  Similarly, 
         if a vessel is operating in the Contiguous Zone, and not 
         fishing, then the jurisdiction falls to Coast Guard boarding 
         officers and Customs officers -- but not to NMFS agents.  

         Other military agencies are prohibited from direct exercise 
         of law enforcement authority by the Posse Comatatus Act and 
         do not have any of this authority.  
                                        
         Part 2.  The shell. 

         This knowledge base was built to run on ESIE, an Expert 
         System Inference Engine.  ESIE, in turn, runs under MSDOS and 
         is available from Lightwave.  ESIE is a 'shareware' variant 
         of public domain.  As explained in the documentation, the 
         program is released to the public domain.  For $145, full 
         support including the source code is furnished.  

         For definitions, see the MANUAL file on the ESIE disk.  
        
         The single GOAL allowed is 'board.reason'.  When the 
         knowledge base is able to reach a conclusion, the 
         'board.reason' goal has been satisfied.  The ANSWER clause at 
         the end of the file acts to print it out.  

         The second line in the file (after the GOAL) is LEGALANSWERS.  
         For this knowledge base, the only legal answers are 'yes' and 
         'no'. (Answers are case insensitive and illegal answers are 
         all harmlessly trapped.) 

         Following the LEGALANSWERS clause are a series of IF...THEN 
         rules.  Order is of note.  The first IF...THEN clause is 
         attempted to be satisfied.  All the questions within the 
         clause are tracked in a backward chain fashion (which may be 
         directly through the question clauses or indirectly through 
         other IF...THEN clauses).  If the GOAL remains unsatisfied at 
         this point, then ESIE falls through and considers the next 
         IF...THEN statement.  
         
         For this reason, the statement about requesting the master's 
         permission and being denied is last.  You want to exhaust the 
         other alternatives first and you don't want the system to 
         give up in disgust until you have tried everything else.  

         In a few cases (like government vessels) a quick conclusion 
         can be reached.  In that case, board.reason is satisfied and 
         the session terminates.  The system is designed to be 
         persistent -- unless a definite reason not to board is 
         arrived at, the system will grasp at virtually any reason to 
         get aboard (which is how seizures are made...) 

         Following the IF...THEN clauses are the QUESTION statements.  
         These inqure of data from the operator in order to satisfy 
         the IF...THEN clauses.  QUESTIONS are only asked as the 
         result of IF...THEN clauses needing data.  

         The final statement is the aforementioned ANSWER clause.  

         Limitations.  ESIE has no capability for handling 
         uncertainty.  That is not required for this application.  
         Systems involving more judgement than boarding legalities 
         would be found short.  

         ESIE is implemented under MSDOS; the Coast Guard is buying a 
         'standard terminal' that runs CTOS which is not compatible 
         (despite the same 8088/8086 under the hood).  To implement 
         the system for Coast Guard use, the source code would have to 
         be recompiled under the CTOS Pascal compiler.  However, once 
         that is done, the knowledge base itself should run without 
         changes.  

         This application does not need it, but ESIE provides no 
         alternative to keyboarding input.  If the database changes, 
         the program must be rerun to reflect those changes.  

         Part 3.  Implementation.  [Code is attached.]      
                  
         Part 4.  Diary. 

         The initial work was done in February 1986.  After printing 
         out the ESIE documentation and idly chewing on it for a 
         couple weeks, I spent about 4 hours assembling an initial 
         working program.  I functioned as the expert as well as the 
         knowledge engineer.  The knowledge base then worked using my 
         knowledge which is about two years rusty.  

         A day or so later, another person worked through the program 
         and suggested several cosmetic and a few substantive changes, 
         again on his memory knowledge.  This update took an hour, 
         including his time.  

         Second stage, late Feb 86.  Obtained a copy of the Coast 
         Guard's Maritime Law Enforcement Manual.  This allowed me to 
         make some minor corrections to some existing rules, and to 
         add several rules that pertain to the more obscure exceptions 
         (try getting aboard a Japanese salmon boat outside the US FCZ 
         -- it can be done.) The diminishing marginal returns are very 
         obvious -- lots of rules gain minimal production.  But the 
         detailed exceptions are frequently where the big cases are 
         made. 3 more hours.  

         Final work.  Early in March, I had mulled over what I had and 
         wanted to get in some improvements.  Particularly, I wanted 
         to avoid asking the user about Pacific specific conventions 
         if he was operating in the Atlantic.  So those area-specific 
         convention rules were updated.  

         Part 5.  Benchmarking. 

         Since input is keyboarded rather than drawn from a database 
         on disc, it is not practical to benchmark in the traditional 
         sense (stopwatch).  The processing appears prompt to the 
         user, even on a slow 8088.  Consequently, there is no real 
         incentive to recode the program more conventionally.  Indeed, 
         that would limit its maintainability.  

         Loading and compilation of the knowledge base takes about 30 
         seconds from the > operating system prompt using a 4.77mHz 
         CPU.  

         Intuition to the contrary, a considerable evolutionary change 
         has occurred over the body of law that this application 
         covers.  Examples include the case of US vs Piner which 
         limited boarding authority in the 9th Circuit for about 4 
         years, until a related case was heard by the Supreme Court 
         and resolved.  Similarly, the Fisheries Conservation and 
         Management Act, and its special jurisdiction, is now ten 
         years old.  

         Since the Coast Guard is chronically too tight-fisted to hire 
         a programmer to maintain an application like this, leaving 
         the system in a higher level, maintainable, construction 
         makes sense.  

         Part 6.  Lessons. 

         The first lesson is that I was lucky.  The application and 
         the shell were very well matched to each other.  Most of the 
         things this shell lacks are features that the application 
         doesn't need.  Probably the one desired feature is the 
         ability to chain to another file and display it.  

         The surprise to me was the small number of rules (about 30) 
         necessary to manage a complex problem.  I expected a lot more 
         rules to be required when I started.  

         The existing system runs in 128K of memory, which appears 
         minimal to handle an exhaustive set of rules for this 
         application.  If the reference material were on disc, the 
         shortcoming could be in disc space, not RAM.  Since the 
         author will provide the source code for $145, it would be 
         quite practical to recompile the code for a larger memory 
         space which would enlarge the stack space and push back the 
         limitations.  

         The system can be expected to run as fast as an operator can 
         type in data.  The only shortcoming here is that data cannot 
         be edited once it is entered (e.g. as circumstances change). 
```
{% endraw %}

## CHECK.TXT

{% raw %}
```
         
         You can test your copy of the distribution diskette, to make 
         sure the copy is accurate, by entering the command CHECK *.* 
         at the DOS prompt.  The output should look like this: 


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  READ    .ME          CRC = 89 EB

--> FILE:  ESIE    .COM         CRC = 70 F3

--> FILE:  CONFIG  .COM         CRC = 71 16

--> FILE:  MANUAL  .            CRC = 56 1A

--> FILE:  TUTOR   .            CRC = B1 C9

--> FILE:  NOVICE  .            CRC = 63 D7

--> FILE:  HISTORY .            CRC = DD 31

--> FILE:  FINAL   .USE         CRC = B7 3F

--> FILE:  ANIMAL  .            CRC = 6B A8

--> FILE:  DOCTOR  .            CRC = 4C 3E

--> FILE:  GLASS   .            CRC = A0 08

--> FILE:  ABOARD  .            CRC = 9B FC

--> FILE:  ABOARD  .DOC         CRC = AE 02

--> FILE:  GETAWAY .            CRC = 7C 82

--> FILE:  HEIGHT  .            CRC = FC C9

--> FILE:  HAIR    .            CRC = 99 4A

--> FILE:  SUPPORT .            CRC = 06 72

--> FILE:  CHECK   .COM         CRC = BD 22

--> FILE:  CHECK   .TXT         CRC = 00 00

 ---------------------> SUM OF CRCS = E4 33

DONE
         
         Note: the CRC for CHECK.TXT will be incorrect as will be the 
         total, because you cannot write a file's CRC to the file 
         without altering the CRC of the file.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0398

     Volume in drive A has no label
     Directory of A:\

    ABOARD            8783   7-02-86  12:20a
    ABOARD   DOC     13810   7-06-86   6:42a
    ANIMAL            9872   7-05-86  10:12a
    CHECK    COM      1536  10-21-82   5:50p
    CHECK    TXT      1432   7-06-86   8:02a
    CONFIG   COM     14363   7-06-86  12:05a
    DOCTOR            6403   8-22-85   1:51a
    ESIE     COM     24028   7-04-86  10:23a
    FINAL    USE     11159   7-06-86   7:50a
    GETAWAY           1519   7-05-86  10:03a
    GLASS             5748   7-14-85  12:55a
    HAIR               402   7-02-86   2:54a
    HEIGHT             719   7-05-86  10:00a
    HISTORY          26033   7-06-86   7:50a
    MANUAL           61626   7-06-86   7:37a
    NOVICE           13665   7-06-86   7:50a
    READ     ME       1816   7-05-86   9:10a
    SUPPORT           2082   7-05-86   8:57a
    TUTOR            60767   7-06-86   7:42a
           19 file(s)     265763 bytes
                           46080 bytes free
