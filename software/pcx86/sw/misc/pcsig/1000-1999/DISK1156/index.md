---
layout: page
title: "PC-SIG Diskette Library (Disk #1156)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1156/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1156"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MANAGEMENT MENTOR"

    MANAGEMENT MENTOR helps you evaluate management skills and fine tune
    them.  A comprehensive self-assessment inventory, MANAGEMENT MENTOR uses
    questionnaires to evaluate your strengths and weaknesses in 12
    management categories.  A separate emphasis-selection process helps
    decide which questionnaires are most relevant to you.  Results can be
    read on screen and printed.
    
    For an additional fee, registered users get expert consultation in any
    of 244 management skill areas.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DESCRIP.TXT

{% raw %}
```
MANAGEMENT MENTOR is a comprehensive self-assessment inventory for managers, 
allowing the user to evaluate his/her strengths and weaknesses in twelve 
management categories. A separate "Emphasis-Selection Process" can be used to 
decide which questionnaires are most relevant. The "Skills Listing" makes it 
possible to get a breakdown of the skills involved in all twelve categories, 
without first completing a questionnaire. Results are saved in separate files 
so they can be read on screen first and then printed. The program also contains 
telecommunication software that can be used (for an additional fee, for 
registered users) to get guidance from an expert consultant regarding 
development in any of 244 separate management skill areas.

File Descriptions

MM.EXE        Executes program
USER.DOC      User documentation
HELP.MSG      Text for on-screen "Help"
RELATED.PRD   Text for "Samples of Related Products"
*.INT         Questionnaire and Emphasis-Selection Process instructions
*.DAT         Questionnaire and "ESP" results files
*.LST         "Skills Listing" files
*.BEP         Text to follow bar-chart displays of questionnaire and "ESP"     
                 results
PROFILE       Stores results (created when questionnaire or ESP completed)
LPT           Print file
```
{% endraw %}

## FILE1156.TXT

{% raw %}
```
Disk No  1156
Program Title:  MANAGEMENT MENTOR version 1.00
PC-SIG version 1

MANAGEMENT MENTOR helps you to evaluate management skills and fine tune
them.  A comprehensive self-assessment inventory, MANAGEMENT MENTOR uses
questionnaires to evaluate your strengths and weaknesses in twelve
management categories.  A separate "Emphasis-Selection Process" helps
decide which questionnaires are most relevant to you.  Results can be
read on screen and printed.

For an additional fee, registered users get expert consultation in any
of 244 management skill areas.

Usage:  Management Skill Evaluation.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $35.00

File Descriptions:

MM       EXE  Executes program.
USER     DOC  User documentation text.
HELP     MSG  Text for on-screen "Help."
RELATED  PRD  Text for "Samples of Related Products."
???????  INT  Questionnaire and ESP instructions (18 files).
???????  DAT  Questionnaire and "ESP" results files (12 files).
???????  LST  Skills listing  files (12 files).
???????  BEP  Bar-chart display results (10 files).
PROFILE       Stores results.
LPT           Print file.

PC-SIG
1030 E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk No 1156 MANAGEMENT MENTOR  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type MM (press enter)                             ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter).   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## USER.DOC

{% raw %}
```
           
                                 MANAGEMENT MENTOR
           
                            Written by: Gerald de Jaager
                   Design and Programming Services: Mike Rufflo,
                            Teresa Rufflo, and Jim Houha
           
           
           
           This is a SHAREWARE PROGRAM. If you like this program and 
           intend to use it beyond an initital preview, please send 
           $35.00 to:
                                  Jerry de Jaager
                                      Box 1666
                                Palo Alto, CA  94302
           
           As a REGISTERED USER, you will receive:
                o A printed manual
                o Program updates and scoring norms as they are 
                     developed
                o $25 dicount on certain related products
           SPECIAL NOTE: If you refer others who become registered 
           users, you will receive a $7.50 referral fee when they 
           include your registration number with their payment. 
           
           
           
                                      Contents
           
           Special Option: Teleconsulting Tailored to Your
           Individual Needs and Interests .........................  1
           
           I.   Getting Started ...................................  3
           II.  Program Overview ..................................  4
           III. The Questionnaires ................................  6
           IV.  The Emphasis-Selection Process ....................  9
           V.   About the Questionnaires and Their Interpretation.. 12
           
           Appendix A: Teleconsulting Staff ....................... 13
           
           
           
           
           
           
            SPECIAL OPTION: TELECONSULTING TAILORED TO YOUR INDIVIDUAL 
                                NEEDS AND INTERESTS
           
           MANAGEMENT MENTOR gives you advice about the specific skills 
           that will make you a more effective manager.
           
           You can get expert assistance in developing those skills. 
           Use our teleconsulting service to obtain personalized 
           guidance from an expert consultant who will help you carry 
           out a targeted development program. (For biographies of some 
           of our consultants, see Appendix A, page 13). Examples of 
           the available services can be viewed from the Browsing Menu 
           on your program disk.
           
                              HOW TELECONSULTING WORKS
           
           1. You select a topic you want to learn more about. The 
           questionnaires on your program disk will help you do this 
           with precision. 
           
           2. Using the free built-in telecommunication software that 
           is available to registered users, you simply send a message 
           to our Message Center, requesting the service that you 
           desire.
           
           3. Within three working days, your consultant will reply 
           with a personalized learning exercise. You use the built-in 
           telecommunication program to pick up this message, at your 
           convenience. If you ask for a reading, the assigned article 
           will be mailed to you.
           
           4. When you have finished the learning exercise, you send a 
           message to your consultant answering the assigned questions, 
           describing how you will put your skills to use, and asking 
           any questions that have occurred to you. 
           
           5. Your consultant reviews your progress, comments on what 
           you have done, answers any questions you have asked, and 
           offers further guidance. You pick up this message at your 
           convenience.
           
                                SYSTEM REQUIREMENTS
           
           To send and receive messages, you need a Hayes-compatible 
           modem. You use your own word-processing software to compose 
           your messages.
           
                               FEES AND REGISTRATION
           
           Each teleconsulting module consists of four parts: your 
           initial message to your consultant; the consultant's 
           response and follow-up assignment; your reply; and the 
           consultant's comments on your reply. The fee for each module 
           is $35. You must register for a minimum of three modules. 
           Use the coupon in the front of your manual for a $25 
           discount on your first teleconsulting services.
           
                                        --1--
           
           
           You must be a registered user of MANAGEMENT MENTOR to use 
           the teleconsulting services. See first page for information 
           about that registration.
           
           You register for teleconsulting by sending a check for 
           $105.00 ($80 if you use the coupon) to:
                Connections Software
                Box 1666
                Palo Alto, California  94302
           
           Within ten days you will receive your system password, the 
           Message Center telephone number, and easy-to-follow 
           instructions. 
           
           The full amount you submit is applied toward teleconsulting 
           services--nothing is deducted for registration or 
           administration. You can begin using the service as soon as 
           you receive you information package.
           
                              FREE TO REGISTERED USERS
           
           As a registered user, you have access, at no charge, to more 
           than 250 lists of carefully-selected readings, covering 
           every topic in the MANAGEMENT MENTOR program. These lists 
           are updated regularly. See your program's BROWSING 
           MENU/SAMPLES OF RELATED PRODUCTS  for more information.
           
                                   REFUND POLICY
           
           If you decide, at any time, to cancel your registration, you 
           will receive a refund of the remaining balance in your 
           account, less an administration fee of $15.
           
                                TELECONSULTING STAFF
           
           Appendix A (page 13) contains information about the 
           consultants available to help you with the development of 
           your management skills.
           
           
                                        --2--
           
           
           
           
                                 I: GETTING STARTED
           
                                SYSTEM REQUIREMENTS
           
           MANAGEMENT MENTOR can be used on any IBM or IBM-compatible 
           computer with at least 256K of memory. The display is 
           suitable for either color or monochrome monitors.
           
                                   MAKING BACKUPS
           
           Your disk is not copy protected, so you can make a backup 
           before you begin. While you are making your backup copy, you 
           may also make other copies to distribute to people who would 
           be interested in the program. See the first page for 
           information about the referral fees you can earn when others 
           register.
           
                                STARTING THE PROGRAM
           
           Boot DOS. At the DOS prompt, insert your MANAGEMENT MENTOR 
           disk, type "MM" and press the RETURN key. 
           
           
                                        --3--
           
           
           
           
                                II. PROGRAM OVERVIEW
           
                                  SELF-ASSESSMENT
           
           MANAGEMENT MENTOR provides focused guidance about the 
           specific skills you should develop to become a more 
           effective manager.
           
           There are twelve separate questionnaires, allowing you to 
           evaluate your skills in any or all of the following 
           categories:
           Managing Projects              Organizing
           Communication                  Representing the Organization
           Creating A Motivating Climate  Planning
           Financial Decision-Making      Management Control
           Managerial Problem-Solving     Staffing
           Business Development and Sales Influencing Others  
                
           You access these questionnaires by selecting the Management 
           Skills Assessment Menu from the Main Menu. For information 
           about completing the questionnaires, see page 6.
           
           The Emphasis-Selection Process helps you identify the 
           general management categories that are most important in 
           your present job, or in some desired future job. It is 
           accessed from the Management Skills Assessment Menu. For 
           information about completing the Emphasis-Selection Process, 
           see page 9.
            
                                   RESULTS FILES
           
           After you have completed a questionnaire or the Emphasis-
           Selection Process, your results are saved in a file that can 
           be accessed from the Management Skills Assessment Menu. 
           
                                 THE BROWSING MENU
           
           To view samples of the unique teleconsulting services that 
           are available to registered users, select Samples of Related 
           Products from the Browsing Menu.
           
           The Skills Listing, also accessed from the Browsing Menu, 
           allows you to obtain a listing of the skills that make up 
           any of the twelve questionnaire categories, without first 
           completing a questionnaire. 
           
                                      PRINTING
           
           You can print your questionnaire results, Emphasis-Selection 
           Process results, the Samples of Related Products, or the 
           Skills Listing. Just type "p" when you are asked whether you
           
                                        --4--
           
           
           
           
           
           
           want your results sent to the screen or to your printer. If 
           you turn off your printer before a printing is completed, 
           you will exit the program. If you want to print your 
           questionnaire or ESP results after you have read them from 
           the computer screen, you can do that by going to the 
           "Results" files and selecting the print option.
           
                                        HELP
           
           A general help screen is accessed by pressing F1.
           
           
           
                                        --5--
           
           
           
                              III: THE QUESTIONNAIRES
           
                             SELECTING A QUESTIONNAIRE
           
           If you already know which questionnaire you want to begin 
           with, select Questionnaires from the Management Skills 
           Assessment Menu, and then select the questionnaire you 
           want.  
           
           On the other hand, if you would like to think about how each 
           category relates to success in your present job (or in a  
           future job), you should begin with the Emphasis-Selection 
           Process, accessed from the Management Skills Assessment 
           Menu. The Emphasis-Selection Process will tell you where the 
           greatest differences exist between a category's importance 
           and your capability level; these are the most important 
           general gaps for you to address. 
           
           For more information about the Emphasis-Selection Process, 
           see page 9.
           
                            ANSWERING THE QUESTIONNAIRES
           
           
           An instruction screen precedes each questionnaire, telling 
           you how to enter your response to each question.  The end 
           points of the scale are defined each time, and the procedure 
           for responding is also depicted on the screen.
           
           You can also use the number keys at the top of your keyboard 
           to enter your answers.
           
           Ten questionnaires use the same format for responding, a 9-
           point scale ranging from "completely untrue" to "completely 
           true." You use the left and right arrow keys to move the 
           cursor, and then press the return key to register your 
           answer.
           
           Two inventories use a different format, a 5-point scale 
           which asks you to assign a value to each of a series of 
           topics. These scales range from "Not Important At All" to 
           "Extremely Important." You enter your responses in the same 
           way, using either the arrow keys and return key, or the 
           number keys at the top of your keyboard. (If you want to
           know why these questionnaires use a different format, please 
           see page 11.)
           
           You must answer all the questions. If you feel that a 
           question is not applicable to you, answer it to the best of 
           your ability, or select the mid-point response--5.
           
           
           
                                        --6--
           
           
           
           
                         Reviewing Or Changing Your Answers
           
           As you proceed through a questionnaire, you may want to take 
           a second look at your previous answers. You can do this
           easily: press F3 and it will return you to the preceding 
           question. The answer you gave to that question is shown on 
           the screen. You can leave the answer as it is, or change it 
           by using the same process you used to enter the original 
           answer. Continue using F3 to go back to any previous 
           question. To go forward, use F4.
           
                              Quitting A Questionnaire
           
           At any time while you are taking a questionnaire, you can 
           quit by pressing F10. Your answers will not be saved. An 
           item counter in the upper-right corner of the screen tells 
           you which question you are on, and how many questions there 
           are in the entire questionnaire.
           
           
                               QUESTIONNAIRE RESULTS
           
           Each time you complete a questionnaire, your results are 
           presented, and their management development implications are 
           described. Your results are also saved in the Results of 
           Questionnaires file, which is accessed from the Management 
           Skills Assessment Menu. If you take a questionnaire more 
           than once, your most recent results are saved in this file.
           
           As you review your questionnaire results, you will see 
           identifying codes after each skill that is listed. For 
           example:
           
                Obtaining commitment (III.E.4)
                Rehearsing a presentation (XI.B.3)
           Each code designates a carefully-selected reading list that 
           is available either through telecommunication (free to 
           registered users) or in the 414-page book, The Best 
           Management Resources. The Best Management Resources contains 
           reading lists and audiocassette recommendations for every 
           topic in the MANAGEMENT MENTOR program. It has been hailed 
           by reviewers as "a treasure chest of references for anyone 
           interested in better management" and "a tour de force of 
           management knowledge." To order the 1988 updated version, 
           which costs $80.00 ($55.00, if you use the discount coupon 
           in the front of your manual), contact: 
           
                Seiler-Doar Books
                Box 1666
                Palo Alto, California  94302
                (415) 857-0280
           
           
                                        --7--
           
           
           
           
                           Printing Questionnaire Results
           
           You have the choice of reading your results on your computer 
           screen, or sending them to your printer. If you decide to 
           read them on-screen first, you can then print them by going 
           to the Results of Questionnaires file and selecting the 
           print option. Bar charts are not printed.
           
                        INTERRPRETING QUESTIONNAIRE RESULTS
           
           Generally, the dimensions in which your scores are lowest 
           are those where you should develop your skills. Where 
           further evaluation would be beneficial, a section called 
           "Interpreting Your Scores" appears on the screen.
           
           Further information about interpreting questionnaire results 
           is provided on page 12.
           
                                   TELECONSULTING
           
           MANAGEMENT MENTOR allows you to obtain expert advice and 
           guidance in developing your management skills. After 
           registering for teleconsulting services, you use the 
           program's built-in communications software to send and 
           receive messages. See page 1.
           
           
                                        --8--
           
           
           
                         IV: THE EMPHASIS-SELECTION PROCESS
           
                                      OVERVIEW
           
           The Emphasis-Selection Process (ESP) guides you to the 
           questionnaire that will be most relevant to your management 
           development. You should use it if you are not sure which 
           questionnaire to begin with.
           
           The ESP has two parts. In the first part, you rank the 
           skills needed in your job. In the second part, you evaluate 
           your own capabilities.
           
           You don't have to use your present job for the ESP. You may 
           wish to use some desired future job, to help you think about 
           the skills you should develop in order to achieve your 
           career-advancement goals.
           
                              ANSWERING THE QUESTIONS
           
                    Part 1 of the ESP: Defining Job Requirements
           
           As each pair of categories is displayed on the screen, use 
           the left arrow or right arrow key to indicate which of the 
           two items is more important. A brief definition of each 
           category appears at the bottom of the screen. There is an 
           item counter in the upper-right-hand corner, which keeps 
           track of how far you have proceeded. There are 66 pairs to 
           compare in the first part of the ESP. The item counter uses 
           78 as its basis, not 66, because there are 12 questions to 
           answer in the second part of the ESP.
           
                  Part 2 of the ESP: Evaluating Your Capabilities
           
           Here you are asked to rate your capabilities in each of the 
           management skill categories, using a 9-point scale. Use the 
           left and right arrow keys, then press RETURN. You can also 
           use the number keys at the top of the keyboard.
           
                         Reviewing Or Changing Your Answers
           
           As you proceed through the ESP, you may want to take a 
           second look at your previous answers. You can do this 
           easily: press F3 and it will return you to the preceding 
           question. The answer you gave to that question is 
           highlighted on the screen. You can leave the answer as it 
           is, or change it by using the same process you used to enter 
           the original answer. Continue using F3 to go back to any 
           previous question.
           
           To go forward, use F4.
                                    
           
                                        --9--
           
           
           
           When you have reviewed or changed as many of your previous 
           answers as you want, you can return to the next unanswered 
           question by pressing F9. This feature is only available in 
           Part 1.
           
           Example: You have just answered Item 20. You want to review
           your previous answers. Pressing F3 returns you to Item 19, 
           where you can either revise your answer or let it stand. 
           Pressing F3 again returns you to Item 18, and so on.
           If you want to go forward from, for example, Item 15 to Item 
           16, pressing F4 accomplishes that.
           
           When you have reviewed as many answers as you want, pressing 
           F9 returns you to the next unanswered item--Item 21, in this 
           example.
           
                           Taking The ESP More Than Once
           
           You can take the ESP as many times as you want. Since the 
           questionnaire has previously been completed, the F9 key 
           (which returns you to the next unanswered item) does not 
           work the second time through.
           
                                  Quitting The ESP
           
           At any time while you are taking the ESP, you can quit by 
           pressing F10. Your answers will not be saved, so it is 
           recommended that you begin the ESP when you have the twenty 
           to thirty minutes you will need to finish it. 
           
                                    ESP RESULTS
           
           When you finish the Emphasis-Selection Process, your results 
           are presented, and you receive a suggestion about which 
           questionnaire would be most valuable to begin with. These 
           results cannot be printed, but you can print a summary of 
           your results by accessing Results of Emphasis-Selection 
           Process (from the Management Skills Assessment Menu) and 
           choosing the print option. Only scores from the most-
           recently-taken ESP are saved.
           
                              Interpreting ESP Results
           
           Results are displayed in a bar graph format on three 
           screens. The first bar graph shows the importance you 
           assigned to each management category. 11 is the highest 
           possible importance ranking, and the lowest is 0.
           
           The second graph reviews your self-rankings regarding your 
           capability level in each category. The highest possible 
           capability ranking is 9, and the lowest is 1.
           
           
                                        --10--
           
           
           
           The final bar chart displays a visual representation of the 
           difference between your capability ranking and the 
           managerial demands of your job. The closer the score 
           approaches to zero, the more evenly your skill is matched to 
           the job's requirements.  Bars extending to the right of the 
           center line indicate skills you possess to a greater degree
           than your job requires. Those extending to the left indicate 
           areas where your skills fall short of meeting the 
           requirements of your job. The farther left the bar extends, 
           the greater the gap between the job requirements and your 
           skills.
                                        
           Remember that these are comparisons in ratings, not absolute 
           values. Negative numbers, for instance, do not mean that you 
           are "bad" at something, but only that your capabilities do 
           not match the requirements of your job, as you defined them.
           
           Two tables are then presented, showing the six categories 
           where the greatest difference exists between job 
           requirements and skills, and suggesting a questionnaire to 
           begin with.
           
                                        --11--
           
           
                V. ABOUT THE QUESTIONNAIRES AND THEIR INTERPRETATION
           
                                     BACKGROUND
           
           The questionnaires were originally published in 1984 in a 78-
           page book, The Management Skills Inventory, which 
           HRD Quarterly called "the most comprehensive paper-and-
           pencil inventory we have seen....a find for management 
           development departments!" 1  After reviewing the results 
           from over 2,000 managers' use of the questionnaires, they 
           were revised and incorporated into the MANAGEMENT MENTOR 
           program.
           
           The goal of the book, and the program, is to present a 
           comprehensive array of self-assessment inventories, without 
           the requirement that the manager answer questions that are 
           irrelevant to his or her personal development needs.
           
           Wherever possible, the questions ask about the outcomes of 
           management skills, not about the skills directly. This 
           approach allows for the assessment of development needs 
           based on real-world results, not on some arbitrary 
           "checklist" of desired skills. 
           
                                       NORMS
           
           As these questionnaires are used in management settings, 
           statistical norms for responses will de developed. 
           Registered users will be provided with that information when 
           it is sufficient to allow for the development of reliable 
           norms. While these norms may add an additional level of 
           interest or insight for the user, they are not necessary for 
           the program's primary purpose--self-assessment.
           
                         THE TWO "DIFFERENT" QUESTIONNAIRES
           
           The different format used for the "Organizing" and 
           "Financial Decision-Making" questionnaires stems from the 
           program goals described above. These are important 
           categories, which should be included in any comprehensive 
           inventory, but managers' skill levels are not easily 
           discernible from the results of their activities. For 
           example, a poorly-structured organization can still perform 
           successfully, because individuals make adjustments to get 
           the job done (through the "informal organization"); the 
           consequences of imperfect financial decisions are often 
           diluted by other factors, or are not immediately apparent.
           
           Furthermore, there are many topics in those two categories 
           which may be unfamiliar to many managers, but which deserve 
           consideration as areas of development. Those topics include 
           understanding the organization as an information-processing 
           system, organizing to manage uncertainty, human resource 
           accounting and social-responsibility accounting.
           
                                        --12--
           
           
                          APPENDIX A: TELECONSULTING STAFF
           
                                     BACKGROUND
           
           Teleconsulting is part of the growing use of communications 
           technology to make learning easier, and to put you in 
           direct, one-on-one contact with experts. In a May 9, 1988 
           article, headlined "Long-Distance Learning Gets An 'A' At 
           Last," Business Week says that more than 500,000 people are 
           using this convenient, personalized approach to learning.
           
           Services provided by our teleconsulting faculty have earned 
           comments like these:
           
                "I thank you for the encouragement, motivation and 
           understanding you provided. . . I am curious as to how many 
           students you handle, but I felt that you were working with 
           me on an individual basis. I have enjoyed working with you 
           very much. Thank you for a job WELL DONE!"
                      --PROJECT ENGINEER, TELEPHONE COMPANY
           
                "I'd like to take this opportunity to thank you for 
           your time, support, and commitment to quality. It had been 
           so long since I attended formal college courses, I was not 
           sure I still had the capacity to learn. With your patience 
           and help, I now know I can do it. I cannot thank you 
           enough."
                      --INFORMATION SYSTEMS MANAGER, AT&T
           
                "This course has brought a myriad of loose ends into a 
           whole part and I have the confidence and enthusiasm to 
           create opportunity for myself. It has always been there to 
           some degree but the loose edges have been finely honed and 
           polished up. THANKS."
                      --FURNITURE STORE MANAGER
           
                "It would like to say what a pleasure it has been to 
           study with you. Thank you for your kind words of 
           encouragement. I am not very comfortable putting things in 
           writing, I guess I'm a verbal person, but you have made it 
           easy and fun."
                      --PARTS AND SERVICE MANAGER, HONDA DEALERSHIP
           
           
                                  TELECONSULTANTS
           
           The following are brief biographical sketches of our 
           teleconsulting staff.
           
           TED COCHEU headed a sizeable training staff at Burroughs 
           before establishing his own consulting and training 
           practice. He has published numerous articles on performance
           
           
                                        --13--
           
           
           
                          TELECONSULTING STAFF (CONTINUED)
           
           
           management, customer service and product quality, and is the 
           creator of the "Performance Manager" multi-media program 
           used in many companies.
           
           JERRY DE JAAGER developed the questionnaires that comprise 
           Management Mentor. He has been a management consultant and 
           trainer for more than 20 years, during which time he has 
           trained over 25,000 managers. A Phi Beta Kappa graduate of 
           Yale, Jerry taught at Yale, where he was rated as one of the 
           ten best teachers.
           
           MARY ANN GALLAGHER has twenty-five years experience in 
           management development. Holding a Doctorate in Education 
           from Harvard, she has held high-level staff positions with 
           the United States Department of Labor, the China Lake Naval 
           Weapons Center, and the U.S. Forest Service.
           
           PATRICIA NOVICK combines executive experience with a broad 
           consulting and educational background. She served for five 
           years as Director of Corporate Social Responsibility at 
           McDonald's, was on the faculty of Roosevelt University in 
           Chicago, and has consulted with companies from Alaska to 
           Florida.
           
           DON RUDISUHLE holds an M.B.A. from Cornell. Specializing in 
           financial decision-making, he served in management positions 
           at Bristol-Myers and Foremost-McKesson before launching his 
           own consulting practice, which has taken him to more than 32 
           overseas locations in addition to his extensive U.S. 
           practice.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1156

     Volume in drive A has no label
     Directory of A:\

    DESCRIP  TXT      1317   6-21-88   7:59a
    ESP      INT       107   4-22-87   9:47a
    ESPA     INT       671   1-07-88  11:06p
    ESPB     INT       655   1-07-88  11:06p
    ESPC     INT       829   1-07-88  11:05p
    ESPD     INT       517   1-07-88  11:05p
    FILE1156 TXT      1308  10-20-88   3:21p
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       540  10-07-88   3:32p
    HELP     MSG      3156   6-19-88   6:56p
    MANUAL   BAT       147  10-07-88   3:27p
    MM       EXE     98162   7-26-88   4:33p
    Q1       BEP       218   4-14-87   6:13p
    Q1       DAT      6913   7-28-87   6:54p
    Q1       INT      1024   1-06-88   3:53p
    Q10      BEP       460   4-14-87   6:14p
    Q10      DAT      1890   6-16-87   7:33p
    Q10      INT       512   1-06-88   3:58p
    Q11      BEP       429   4-14-87   6:14p
    Q11      DAT      5543   6-16-87   7:33p
    Q11      INT       512   1-06-88   3:58p
    Q12      DAT      5905   6-16-87   7:33p
    Q12      INT       512   1-06-88   3:58p
    Q2       BEP       422   4-14-87   6:13p
    Q2       DAT      2930   6-16-87   7:37p
    Q2       INT       768   1-06-88   3:53p
    Q3       BEP       685   4-20-87  12:11p
    Q3       DAT      5582   6-07-88   7:56a
    Q3       INT       453   1-10-87  11:07p
    Q3B      INT       561   1-10-87  11:19p
    Q4       DAT      5695   6-16-87   7:32p
    Q4       INT       768   1-06-88   3:55p
    Q5       DAT      8327   6-16-87   7:32p
    Q5       INT       513   1-08-87  10:06a
    Q6       BEP       367   4-14-87   6:13p
    Q6       DAT      4377   6-16-87   7:32p
    Q6       INT       512   1-06-88   3:56p
    Q7       BEP       439   4-14-87   6:14p
    Q7       DAT      2867   1-11-87  12:15a
    Q7       INT       640   1-06-88   3:57p
    Q8       BEP       444   4-14-87   6:14p
    Q8       DAT      3682   6-16-87   7:33p
    Q8       INT       512   1-06-88   3:57p
    Q9       BEP       421   4-14-87   6:14p
    Q9       DAT      3297   6-16-87   7:33p
    Q9       INT       512   1-06-88   3:57p
    RELATED  PRD     11790   6-19-88   6:38p
    S1       LST      6821   1-08-87  11:02a
    S10      LST      2113   1-10-87   4:37p
    S11      LST      5797   1-10-87   4:37p
    S12      LST      4373   1-10-87   4:35p
    S2       LST      3140   1-10-87   3:31p
    S3       LST      4266   1-10-87   3:40p
    S4       LST      5863   1-10-87   3:46p
    S5       LST      8497   1-10-87   4:36p
    S6       LST      4616   1-10-87   4:36p
    S7       LST      3172   1-10-87  11:47p
    S8       LST      3919   1-10-87   4:37p
    S9       LST      3501   1-10-87   4:37p
    USER     DOC     33070   7-30-88   4:40p
           60 file(s)     277077 bytes
                           13312 bytes free
