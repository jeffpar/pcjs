---
layout: page
title: "PC-SIG Diskette Library (Disk #4052)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4052/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4052"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CALCALC.DOC

{% raw %}
```
                        CALORIE CALCULATOR              

          Anyone  who  wants to lose or maintain  weight  must  simply 
       consume less calories than their body burns. The average  woman 
       will  maintain  weight at about 2,000 calories a day.  For  the 
       average man it is about 2,500. If you eat about 500 calories  a 
       day less that it takes to maintain, you will lose about a pound 
       a week (if you burn 3,500 more than you eat in a week, you will 
       lose 1 pound).

          Counting calories is not the easiest thing for most  people. 
       After  counseling people for several years at a weight  control 
       center,  I  found that if logging of food  eaten  and  calories 
       contained was made easier, a person was usually more successful 
       in losing weight, or knowing the reason why not.

          This  program  contains  over 280 foods  and  their  calorie 
       content  per unit (each or per ounce). The first time  you  run 
       this program, I strongly suggest you print out the entire  list 
       of foods and their calorie content. Use it as a shopping  guide 
       and as an aid as a meal planner.  NOTE:  AS REQUESTED BY USERS, 
       THE  PROGRAM NOW CONTAINS FOODS THAT SHOULD NOT BE ON  ANYONE'S 
       DIET, INCLUDING CANDY BARS.  THEY ARE LISTED SO THAT IF YOU  DO 
       "BLOW  IT" YOU CAN KEEP A LIST OF THE CALORIES  CONSUMED.   TRY 
       NOT TO REPEAT EATING OF THESE FOODS.  You will see, that at 160 
       calories  PER  OUNCE, even an innocent 4 oz. bag  of  Sunflower 
       seeds  can add 640 calories to your daily total.   Also,  foods 
       with refined sugar will set up a chain reaction compelling  you 
       to  eat more.  Avoid foods with SUCROSE (refined  white  sugar)  
       at  all  costs.  If you want sugar, eat fresh fruits.   Even  4 
       whole  oranges only have 320 calories and are far more  filling 
       than  a  couple of candy bars.  They are also better  for  your 
       body.  

           Once  you  start your diet, enter the foods that  you  have 
       eaten for a meal or for the entire day. The program will  total 
       the calorie content of the total amount of each food eaten  and 
       give  you a total of each meal or keep  adding  foods  for  the 
       whole day.
 
       You can now save the  information in  the  file  "CALCALC.LOG". 
       Every time you save a meal, it is added to this file which  you
       can print when you wish.  If you want to edit  this  file,  use
       the NOTEPAD editor that comes with Windows 3.0.  You can add or
       delete whatever you wish.  You can also  erase  this  file  and 
       start a new one automatically if you want to.  

          The  food database "CALCALC.DTA" is a pure ASCII  text  file 
       and can be edited or foods added with the NOTEPAD editor.  
       Just add the food  (up to 21 characters), the  calorie  content 
       per unit, and the numeric calorie content per unit.  If you  do 
       not plan to edit the list, pay no attention to this  paragraph,
       otherwise, when you view the  list, it will become clear to you 
       what to do.   MAKE A COPY OF "CALCALC.DTA"  BEFORE EDITING  THE 
       LIST OR ADDING FOODS FROM THE PROGRAM.  IF YOU MAKE A  MISTAKE, 
       YOU  CAN  ALWAYS RETRIEVE THE ORIGINAL FILE.  

          Keeping track of every calorie you eat is the absolute  best 
       way  to  lose  weight.  Try to keep  the  daily  calorie  total  
       between 1200 and 1400. At this amount, you should lose  between 
       1 and  3 pounds  per week, depending on your beginning  weight,  
       activity  level, etc.  Do NOT eat less than 1200  calories  per 
       day.  You should eat foods with bulk to feel satisfied.  Eat  a 
       lot of fresh fruits, raw or cooked vegetables, salads (with  no 
       dressing  or very small, measured amounts of low-cal  dressing) 
       and low calorie, whole grain breads. 

------------------------------[ end ]-----------------------------------
```
{% endraw %}

## CALORIES.DOC

{% raw %}
```
                         
                      Weight Loss vs. Calories    

                 The purpose of this program to let you calculate  and 
         see the effect caloric intake has on weight loss. The program 
         works  best when you have been on a diet for 6 weeks or  more 
         and  have  kept  a count of  your  daily  (therefore  weekly) 
         calorie  intake. However, you can give the program  estimated 
         values and it will calculate them. The big benefit is to  let 
         you  see how as little as 500 calories a day, more  or  less, 
         can result in a 1 pound gain or loss per week.

         Looking at the form, you see that you are to enter the  total
         pounds lost in the first box.  Then you enter the total number
         of weeks that it took you to lose that amount of weight.
         Hopefully, you have been counting calories each day and know
         how many calories per week, on the average, it took you to 
         loose the weight.  If you know, enter it in the box for
         either a woman or man, whichever applies.  If you don't know
         how many calories you ate, an average amount is supplied
         for you in the boxes.  Normally, a woman should be on about
         a 1200 calorie per day diet, and that would result in the
         8400 calories per week that you see.  A man would be on just
         slightly over 1400 calories per day, or 10,000 a week.

         Once these values are entered, click on the "Calculate" box
         and the resultant values will be displayed for all items.
         The primary objective of this program is to let you see how
         many calories per week and per day it will take you to stop
         losing weight when you get to GOAL.  However, you should
         continue to count calories and take in just the amount it
         takes for you to maintain and NOT GAIN the weight back.

         After some period of time (usually a couple of months) you
         will be in the habit of taking in the right amount of 
         calories per day to maintain your new weight level.  If you
         start to gain, just go back on the diet and calorie counting
         to lose it before it creeps up to become a problem again.

         Knowing what you eat (FOOD LOGS) and the calorie amounts
         consumed per day/week is the only truly effective way to 
         lose weight and keep it off.  Always eat healthy when dieting.
         Eat a lot of raw and cooked vegetables and a lot of fresh
         fruit for the bulk of your calories. 

                 There  is  quite a bit to learn from this  short  and 
         compact  program.

--------------------------------------[ END ]---------------------------
```
{% endraw %}

## DIET_QES.TXT

{% raw %}
```
"I eat three well balanced meals every day, especially breakfast."
"I include a lot of vegetables (especially raw) in my meals."
"I keep a food & calorie log of EVERY morsel of food I eat every day."
"I limit my calorie intake to 1200-1400 per day."
"I eliminate fats and oils from all my foods and cooking."
"I ONLY eat while sitting at the dinner table and NEVER while cooking."
"I reward myself with hobbies, clothes, entertainment, but NOT food."
"If I must snack, I use crunchy vegetables and fruit (and add to log)."
"I put all my food that I have measured on a plate. No 2nd helpings."
"I use smaller plates so what I am eating looks (and feels) like more."
"I cut all food in very small pieces, including apples & oranges."
"I eat slowly, small bites, and chew very thoroughly."
"I make snacks like Diet Strawberry soda/crushed ice in wine glass."
"I make meals elegant with China, Crystal, etc. to enjoy what I eat."
"I put my fork down on the plate between every bite to 'slow-down'."
"I concentrate on what I am eating at mealtime and not TV, etc."
"I leave table after eating and wait 20 minutes before starting clean-up."
"I immediately throw left-overs in the garbage or store in 'fridge'."
"I brush my teeth immediately after a meal, signifying meal is over."
"I eat a dill pickle after meals (dill fools taste buds as sweet)."
"I grocery shop when I have eaten and am not hungry at all."
"I drink several extra glasses of water & diet sodas every day."
"I only eat out if I can take food with me or get diet food."
"If I should binge, I start back on my diet at the very next meal."
"I make sure I keep notes and records of problems to avoid in future."
"I stay busy, especially between meals when I might snack."
"I keep legal snacks (carrots, pickles, cauliflower) ready to eat."
"I go weekly to a weight group and never miss a meeting."
"I set weight goals, but do not get discouraged if I miss them."
"I avoid alcohol, drugs, salt, fried foods, and sugar."
```
{% endraw %}

## DIETALL.DOC

{% raw %}
```
                 
                   Overview of all of the Dieting Modules
                               and skill areas 
              
---------------------------------------------------[ more ]-------------                      
                          
                         Diet Evaluation Questions     
                       

         This  is  the most helpful  program on the  entire  disk,  in 
         terms of the potential value to the dieter. The heart of  the 
         program  is a self-test of 30 items for self-evaluation.  You 
         read each item and decide if it applies to you Never,  Always 
         or somewhere in-between. 

         It  is  not  so important how you do on  the  test.  What  is 
         important  is that every single item is a strong dieting  aid 
         to  help you lose weight, change bad eating habits, and  help 
         you  stay on whatever diet you may be on. You should not  try 
         to be TOO good and consume less than 1200 calories per day... 
         and you should make sure that most of the 1200-1400  calories 
         is  food of bulk, like fresh vegetables and fruits.  Remember 
         that  a half of a cantaloupe is far more satisfying  than one 
         medium  banana....   a whole orange is better than 4  oz.  of 
         orange  juice....3  oz. of cooked chicken and two  slices  of 
         bread  is  more satisfying than than a hot-dog and  bun  (but 
         both have the same calories). 

         So  you  should certainly print out the 30 items and  make  a 
         point  to try to stick to "ALWAYS" for every one. If you  do, 
         you will be far more successful in both losing weight as well 
         as keeping it off. Also, you should enjoy the messages in the 
         message section. 
--------------------------------------------------[ more ]---------------
                         
                            CALORIE CALCULATOR              

          Anyone  who  wants to lose or maintain  weight  must  simply 
       consume less calories than their body burns. The average  woman 
       will  maintain  weight at about 2,000 calories a day.  For  the 
       average man it is about 2,500. If you eat about 500 calories  a 
       day less that it takes to maintain, you will lose about a pound 
       a week (if you burn 3,500 more than you eat in a week, you will 
       lose 1 pound).

          Counting calories is not the easiest thing for most  people. 
       After  counseling people for several years at a weight  control 
       center,  I  found that if logging of food  eaten  and  calories 
       contained was made easier, a person was usually more successful 
       in losing weight, or knowing the reason why not.

          This  program  contains  over 280 foods  and  their  calorie 
       content  per unit (each or per ounce). The first time  you  run 
       this program, I strongly suggest you print out the entire  list 
       of foods and their calorie content. Use it as a shopping  guide 
       and as an aid as a meal planner.  NOTE:  AS REQUESTED BY USERS, 
       THE  PROGRAM NOW CONTAINS FOODS THAT SHOULD NOT BE ON  ANYONE'S 
       DIET, INCLUDING CANDY BARS.  THEY ARE LISTED SO THAT IF YOU  DO 
       "BLOW  IT" YOU CAN KEEP A LIST OF THE CALORIES  CONSUMED.   TRY 
       NOT TO REPEAT EATING OF THESE FOODS.  You will see, that at 160 
       calories  PER  OUNCE, even an innocent 4 oz. bag  of  Sunflower 
       seeds  can add 640 calories to your daily total.   Also,  foods 
       with refined sugar will set up a chain reaction compelling  you 
       to  eat more.  Avoid foods with SUCROSE (refined  white  sugar)  
       at  all  costs.  If you want sugar, eat fresh fruits.   Even  4 
       whole  oranges only have 320 calories and are far more  filling 
       than  a  couple of candy bars.  They are also better  for  your 
       body.  

           Once  you  start your diet, enter the foods that  you  have 
       eaten for a meal or for the entire day. The program will  total 
       the calorie content of the total amount of each food eaten  and 
       give  you a total of each meal or keep  adding  foods  for  the 
       whole day.
 
       You can now save the  information in  the  file  "CALCALC.LOG". 
       Every time you save a meal, it is added to this file which  you
       can print when you wish.  If you want to edit  this  file,  use
       the NOTEPAD editor that comes with Windows 3.0.  You can add or
       delete whatever you wish.  You can also  erase  this  file  and 
       start a new one automatically if you want to.  

          The  food database "CALCALC.DTA" is a pure ASCII  text  file 
       and can be edited or foods added with the NOTEPAD editor.  
       Just add the food  (up to 21 characters), the  calorie  content 
       per unit, and the numeric calorie content per unit.  If you  do 
       not plan to edit the list, pay no attention to this  paragraph,
       otherwise, when you view the  list, it will become clear to you 
       what to do.   MAKE A COPY OF "CALCALC.DTA"  BEFORE EDITING  THE 
       LIST OR ADDING FOODS FROM THE PROGRAM.  IF YOU MAKE A  MISTAKE, 
       YOU  CAN  ALWAYS RETRIEVE THE ORIGINAL FILE.  

          Keeping track of every calorie you eat is the absolute  best 
       way  to  lose  weight.  Try to keep  the  daily  calorie  total  
       between 1200 and 1400. At this amount, you should lose  between 
       1 and  3 pounds  per week, depending on your beginning  weight,  
       activity  level, etc.  Do NOT eat less than 1200  calories  per 
       day.  You should eat foods with bulk to feel satisfied.  Eat  a 
       lot  of fresh fruits, raw or cook vegetables, salads  (with  no 
       dressing  or very small, measured amounts of low-cal  dressing) 
       and low calorie, whole grain breads. 

--------------------------------------------------[ more ]--------------- 
 
                            DIET FOOD SHOPPER

         This  program  is simply a shopping list  of  diet  food 
         items that you might want to get when you go shopping.  There 
         are  about 180 items in the list. The program will present  a 
         "screenful"  at a time for you to select from or,  using  the 
         SCROLL BAR   for More Items, the next screenful will  appear. 
         The  program is self-prompting and if you decide you  do  not 
         want a print-out, you can stop the program to end at any time. 
        

             The program uses the file "DIETSHOP.DTA" to read the list
         of foods. You can add to or change the list  using  any  text
         processor in NON-DOCUMENT mode.  Just make sure that "END" is
         always the last item in the list.

-------------------------------------------------[ more ]--------------- 
                     
                              AVERAGE WEIGHT LOSS     

                This  is  a section designed to let  you  record  your 
         weekly  weigh-ins along with the date. When you have  entered 
         one or more records you can total and average your weight loss. 
         Then you can store the dates and amounts in a file. The  next 
         time  you want to add to the records, just load the  existing 
         file and add the current week to it. The program will do  the 
         new calculations and allow you to store both the old and  the 
         new data in the file  "LOSS.DTA".  You can also elect to make 
         a hardcopy on your printer.

        
--------------------------------------------------[ more ]---------------     
                  
                          GOAL WEIGHT PROJECTIONS
                   

                This  program  allows you to play the  "what-if"  game 
         with  the computer and your dieting. It allows you  to  input 
         your current or starting weight. Then, you give it your  goal 
         weight, and finally, about how many pounds per week you think 
         you  will  be  able to lose. It will then  calculate  on  the 
         printer  or screen, how many weeks it will take along with  a 
         place  to record actual dates. This becomes a  projection  of 
         how  long it will take to get to goal and gives you a  target 
         weight each week to shoot for. This can be one of the  "ROAD-
         MAPS" for your success. 

               If  you have already been dieting and have an  accurate 
         weekly  weight  loss to enter, then your target  weights  and 
         dates  will be far more accurate. You can re-run the  program 
         at any time during your diet to get new "on-target" values to 
         help you reach your projected goals.
         
--------------------------------------------------[ more ]--------------- 
 
                                 CALORIES.DOC       
                          

                 This  is a function to let you calculate  and  to 
         see the effect caloric intake has on weight loss. The program 
         works  best when you have been on a diet for 6 weeks or  more 
         and  have  kept  a count of  your  daily  (therefore  weekly) 
         calorie  intake. However, you can give the program  estimated 
         values and it will calculate them. The big benefit is to  let 
         you  see how as little as 250 calories a day, more  or  less, 
         can result in 1/2 pound gain or loss per week.

                 There  is  quite a bit to learn from this  short  and 
         compact  program.

--------------------------------------------------[ more ]---------------         
                         
                          DIETING PRINCIPLES  
                        

         This  is a text file of dieting principles and ideas.  It  is 
         narrative  and is about 6 pages long. You can view it on  the 
         screen  or print it out on your printer. There are  narrative 
         ideas and suggestions in many of the problem areas of dieting 
         like,  "eating-out"  and what to do while  cooking  and  then 
         later when cleaning up (without cleaning OUT) the kitchen.

         No  single program in this series is a "catch-all"  of  every 
         dieting idea and suggestion. DIETTEST comes close. But if you 
         will  read  and/or run every one of the   programs  on  this 
         disk, you will have covered the material contained in a multi- 
         week  dieting  program.  Having been a Weight-Control Program 
         counselor and lecturer for 2 years, I should know.

--------------------------------------------------[ more ]---------------        
    
                          
                                  REASONS.DOC         
                          

         This  is not a program to run, it is a text file to read  and 
         can  be read from the main program.

         REASONS is a psychological message. Many dieters that fail to 
         get  to  goal  weight  or to  stay  there  can  blame  faulty 
         reasoning about getting thin. Books have been written on  the 
         subject and several are suggested in the text. 

         This  is a condensed message, but the potential for  good  to 
         help  you be successful is great. Read it  carefully  several 
         times....perhaps  print-out  a  copy to  study  later.  Don't 
         underestimate the power. It can truly free you to be yourself 
         and feel good about it. Then you can lose weight, if that  is 
         what YOU choose to do, for the right REASONS.

--------------------------------------------------[ more ]--------------- 

                         
                               DIETHOME.TXT        
                          

         DIETHOME  is not a program, it is a story to read. 

           The purpose  of this little "true-life" story,  is  to  let 
         you  see how easy it is to get tempted to snack and  what you 
         might  do about it.  It's for when you are home,  alone,  and
         voices begin coming from the "fridge."  Print out a  copy  if
         you wish to refer to it later.

--------------------------------------------------[ more ]--------------- 

                               FOOD LOG FORM

         The food logging form should be printed on paper.  Make copies
         of it and have one with you at all times.  Every time you eat
         anything, log it on the form.  Total the calories at the end of
         the day to see how you are doing.  Logging your food is one of
         the TOP MOST IMPORTANT things you can do in losing weight.

---------------------------------[ END ]---------------------------------
```
{% endraw %}

## DIETHOME.DOC

{% raw %}
```
                          
                       Dieting AT HOME -- ALONE !        
                         

         DIETHOME  is not a program, it is a story to read. 

           The purpose  of this little "true-life" story,  is  to  let 
         you  see how easy it is to get tempted to snack and  what you 
         might  do about it.  It's for when you are home,  alone,  and
         voices begin coming from the "fridge."  Print out a  copy  if
         you wish to refer to it later.

         There are things you can do...when you find yourself  DIETING
         AT HOME......ALONE?
                                    
 -----------------------------------[ end ]---------------------------
```
{% endraw %}

## DIETHOME.TXT

{% raw %}
```
                            DIETING AT HOME....ALONE?

         My diet had been going pretty good and it was a Wednesday 

         night. The wife and kids were going to the church supper of 

         fried chicken, mashed potatoes & gravy and other fattening 

         stuff. "No," I said, "I better stay at home alone and have my 

         special diet dinner. Y'all have a good time...see ya later." 

         They departed and I hurried into the kitchen to fix my diet 

         meal of turkey, slice of bread, some spinach and an apple. I 

         didn't want to spend too much time in the kitchen, less I be 

         tempted, so I ate the food quickly while standing up at the 

         kitchen counter. Off to the den to watch TV. Good, dinner was 

         over and I was out of the kitchen, even if I didn't feel very 

         full or satisfied from the meal. 



         It was then I heard the first little voice. But I was home 

         alone, wasn't I? Then, there it was again! "Hey, I am ice 

         cold in here," it said. I heard it clearly. Then it 

         continued, "I'm the leftover potato salad....I'm ice cold and 

         the pickles and mayonnaise make me taste so good. You were so 

         legal last night and didn't have any...and today you have 

         only had 1200 calories so far....what could just a little bit 

         hurt. You deserve it. You earned it."   How can I hold out 

         against such logical reasons, I thought. Then I heard another 

         voice......"I would be just perfect for such a good dieter as 

         a reward...I am the last bowl of chocolate pudding that your 

         5-year old wouldn't eat last night. I can't be used as desert 

         for the family and no-body wants me. I would be just perfect 

         for you." Now I am hearing these two voices....repeating over 

         and over...and the craving in my stomach is increasing. I am 

         at home, alone and no-one would know or say anything to me if 

         I did indulge. Besides the evidence would be gone. I feel 

         sure that we will have to throw the leftovers away in a few 

         days anyway...and what about all the starving people in other 

         parts of the world. Well, if all this wasn't enough...then I 

         hear yet one more sound....."POP, POP, POP....I am the 

         popcorn sitting here in the tin can....won't you please pop 

         some of me...it would be so good...and with a little bit of 

         extra melted butter and salt....oh, I would be such a good 

         reward for you....you have been such a good dieter these past 

         several weeks."  I can feel what little will-power I had left 

         dwindling away. I know what is about to happen and I know I 

         will hate it in the morning. But what could I do? No-one 

         would be expected to resist these "voices" calling so loud 

         and convincingly to me. I am rising out of my chair. It is 

         almost all over but the eating...the voices are cheering me 

         on...my stomach is doing flip-flops. Then, I have a one last 

         desperate thought. The mail hasn't been brought in today and 

         I was expecting an important letter. Hurriedly I put on my 

         jacket and dash to the mailbox. Heck, no mail. But I can 

         still hear the voices from my kitchen calling me ....as 

         loudly as ever. What is this, telepathy? Maybe if I just 

         walked down the street a little bit or something. After all I 

         am outside with my coat on....so I start down the street. It 

         is a full five minutes away from my house before the voices 

         start to dwindle..and other thoughts start to drift into my 

         mind....and that emptiness in my stomach begins to subside. 

         After ten minutes of walking, I turn around and walk home. It 

         has now been twenty minutes since my desperate exit from the 

         house. The voices are stilled. Things are quiet. My appetite 

         is satisfied.   Was this real?    I open the fridge just to 

         see...and those things are still there, whose names I won't 

         call out loud....but they are silent and don't even look so 

         attractive now.  I retire to my den and begin reading an 

         interesting book that I had forgotten about and the evening 

         passes quietly until the family returns. Saved! Thank 

         goodness for the mailbox....and then the walk...whatever. 

         Perhaps if those voices ever start to call for me again, I 

         will get up and do something sooner. I almost lost it last 

         time and I don't want that to happen again when I am home.... 

         ALONE !



         by M.D. Smith

 
```
{% endraw %}

## DIETMESS.TXT

{% raw %}
```

                  D I E T   S U C C E S S   T E S T

The Dieting Test in this section asks you 30 questions. Answer them
as truthfully as you can. When you have finished, you will see how you scored.
The test itself is the main learning tool to this program. Each time you run
this test, you will become more aware of what you should and should NOT be 
doing in attempting to lose weight on an Diet. If you are truly serious about
staying on a diet to lose weight, this program will help you. If you are doing
things wrong and are UNWILLING to change, then NO ONE can help you.
            
                 This program WILL work....if YOU will !


If you are not satisfied with your dieting skills and would like to be better,
print out the questionnaire and work on improving all 30 items.
When you feel that you are doing more of them and more often, re-take the 
questionnaire. If you can raise your average by 20 points or more, you will be
far more effective at losing weight. Remember, these are hard areas that
take practice to become automatic. When they do, you will be seeing the pounds
almost MELT away and the hunger pangs and binges will vanish, forever.

---------------------------------------------------[ more ]-----------------

         " TO BE SUCCESSFUL ON YOUR DIETING PLAN,
           JUST TAKE THE 'IF' OUT OF 'LIFE'."

                                         Anonymous

How often have you heard someone say....

                 "I COULD LOSE WEIGHT IF..."

and then go on to list a hundred things? 

Have you ever picked from this list:
 
    ...IF I HAD THE RIGHT FOODS PREPARED FOR ME
    ...IF I DIDN'T HAVE SUCH A STRESSFUL JOB
    ...IF I DIDN'T HAVE TO TRAVEL
    ...IF I DIDN'T HAVE SUCH TEMPTATIONS
    ...IF I COULD STAND TO EAT WHAT IS GOOD FOR ME
    ...IF I DIDN'T HAVE SUCH A SMALL AMOUNT OF WILL POWER
    ...IF I DIDN'T HAVE TO HAVE THESE FOODS IN THE HOUSE FOR THE KIDS
    ...etc. etc. etc......  Remove all the  IF's  from YOUR L-IF-E !

---------------------------------------------------[ more ]-----------------
                          
                                MY SCALES AND I 

            My Scales and I stood face to face;
            I swore they lied to me.
            They marked my weight and seemed to smirk
            In fiendish, ghoulish glee.
            I shifted weight from left to right;
            I twisted, jumped and rocked.
            My scales maintained that awful sum;
            They laughed at me and mocked.
            I donned my dress, put on my shoes;
            No need to feel so pained.
            I'd go weigh at my neighbor's house;
            Her scales were better trained!

                                       by Viola Bonam

---------------------------------------------------[ more ]-----------------

                              10  2-LETTER WORDS


              "IF IT IS TO BE, IT IS UP TO ME."

                                            Anonymous


The most important thing to burn into your mind when you are dieting is that
you are doing it for yourself. Therefore, if you are to reach goal and keep
the weight off, it is UP TO YOU to do it. No one else. If you have to rely on
the right time of the year with no temptations, you will fail. If you have to
rely on another person for fixing your food, you will fail. If you have to
always have things running smoothly to diet, you will fail. If you can
diet only if the kids don't bring in tempting snack foods, you will fail.
In fact, if you depend on someone else for any part of your dieting, you will
fail. BUT WAIT....this is about succeeding! Yes, it is. You only have to 
remember the 10 2-letter words above. Depend on yourself and refuse to let
yourself down. No IF's or MAYBE's and WISHES....say I CAN and I WILL or
I WILL NOT....but you take charge of your life. Say over and over to yourself,

              "IF  IT  IS  TO  BE...IT  IS  UP  TO  ME !"

---------------------------------------------------[ more ]-----------------

                     LIGHT-HEADED      by M.D. Smith


         I haven't had a morsel of food since lunch;
         Not a spoonful of liquid to drink.
         I'm getting a little bit woozy and dizzy,
         But what the heck I can still think.

         I have shaved very close and cut my hair;
         Trimmed the nails on my hands and my feet.
         I am wearing my thinnest of summer clothes,
         And it's winter, so I'll stay off the street.
  
         I won't wear a hat, or socks, or my shoes,
         And I'll pull my belt up so tight.....
         Headin' to my Weight Control Meeting you see...
         And I'm gonna WEIGH LIGHT TONIGHT !


It's one thing to honestly lose a pound or two when you check your weight 
once a week. But it is another to play the game of lighter clothes each 
week to keep losing.  Laugh at the poem, but don't play that game.

---------------------------------------------------[ more ]-----------------


                       T H E   W E L L - W I S H E R S

"You have been so good on your diet for so long, have a piece of this pie."

"You are looking thin and gaunt...I like that happy, healthy plump look..."

"You look good enough now. If you keep going your skin is going to sag."

"I love you the way you are; if you get thin I'll lose the girl I married."

"Yes you've tried and failed so many times before, but I surely wish you well."

"Sugar and Carbohydrates are the fuels for the body so eat this fresh fudge."

"If you get skinny you'll be catching all kinds of diseases and illnesses."

"It is certainly OK to fail again, so don't worry if you binge tonight."



The FRIENDLY-ENEMIES may or may not know what they are doing. Be ready for 
them and don't get side-tracked with their logic or comments. 
It is up to you !

---------------------------------------------------[ more ]-----------------


                      GROCERY SHOPPING FOR DIET FOODS

Of course, never go shopping when you are hungry. Make out a list and buy 
only what is on your list (use DIETSHOP for this). Concentrate on fresh 
vegetables and fruits. Keep meats to a minimum, but fish and seafoods are 
fine. All foods are to be broiled, boiled or microwaved with no added oils 
or fats. Check the calorie count of all prepared foods. Buy yourself some 
high priced special foods such as canned shrimp or crabmeat. At 30 calories
an ounce, it gives you special foods that fit your dieting. Low-Cal frozen 
dinners are the perfect answer to good food in a hurry. Add a can of 
mushrooms for more bulk without calories. Buy lots of single portion canned
vegetables. Yes they cost more, but you are worth it (you won't open a large
can just for yourself).  Time your shopping and try to get in and out 
quickly leaving no time to browse.  If you MUST buy fattening foods for 
others, get things you do not like.


The psychology of prudent shopping is that you have a lot to eat, but even
if you eat too much, a binge on fruit won't hurt too bad. With the right
things at home, you can feel every meal is special and you are not 
suffering to get through your dieting program. This is to be a new way 
of eating.

    PLANNING YOUR SHOPPING IS PLANNING TO SUCCEED. 
    SUCCESS CAN BE YOURS !

---------------------------------------------------[ END ]-----------------
```
{% endraw %}

## DIETPRIN.DOC

{% raw %}
```
                         
                          DIETING PRINCIPLES  
                        

         This  is a text file of dieting principles and ideas.  It  is 
         narrative  and is about 6 pages long. You can view it on  the 
         screen  or print it out on your printer. There are  narrative 
         ideas and suggestions in many of the problem areas of dieting 
         like,  "eating-out"  and what to do while  cooking  and  then 
         later when cleaning up (without cleaning OUT) the kitchen.

         No  single program in this series is a "catch-all"  of  every 
         dieting idea and suggestion. DIETTEST comes close. But if you 
         will  read  and/or run every one of the   programs  on  this 
         disk, you will have covered the material contained in a multi- 
         week  dieting  program.  Having been a Weight-Control Program 
         counselor and lecturer for 2 years, I should know.

     --------------------------------------------[END ]---------------    
```
{% endraw %}

## DIETPRIN.TXT

{% raw %}
```
                              DIETING PRINCIPLES
                                 by M.D. Smith

         CONTROL  BINGE  EATING:  To avoid binge eating,  think  about 
         what day(s), time(s) and circumstances were present the  last 
         times binge eating occurred. There is a good chance you  were 
         in  a  negative mood, bored or both. It is likely  to  happen 
         again unless you are ready when the time comes. Set up things 
         to  do  to get you out of the house in a  similar  situation. 
         Already  have a trip to the book store, craft shop  or  visit 
         with a friend lined up and written down. Also, always have  a 
         good  supply of low-cal beverages and crunchy raw  vegetables 
         on  hand  to  eat  and divert yourself  long  enough  to  get 
         interested in something else besides eating or to get out  of 
         the house. Exercise is uplifting for the spirit and body, and 
         a  short walk will do these things for you while getting  you 
         out  of  the house and temptation at the same time.  This  is 
         what to do BEFORE a binge eating spell can start.

         If  a  binge eating spree is in progress, like ice  cream  or 
         something,  AT LEAST measure out a normal portion in  a  bowl 
         and  put the carton back in the freezer. The worst thing  you 
         can  do is eat "just one little spoonful at a  time"....until 
         it is all gone. Then make a pact with yourself to get out  of 
         the house just as soon as that bowl is empty. If you can  not 
         get out of the house...at least leave that part of the  house 
         for at least 20 minutes and put your mind on something  else. 
         Concentrate on an interesting book, a game, a phone call to a 
         friend.  Twenty minutes is a magic number, because  it  takes 
         that  long for your stomach to tell your brain that  you  are 
         full  or  have had something filling to eat. That's  why  you 
         should eat your normal portion of food at the table, and then 
         go do something else for 20 minutes before starting to  clean 
         up the leftovers....or to even consider eating something else 
         because  you don't "FEEL FULL". In 20 minutes you  might  not 
         feel "stuffed", but you won't be truly hungry either.

         Finally, during an eating binge, the mind-set seems to be one 
         of  "since  I have blown it now, I might as well let  it  all 
         hang  out  and eat everything fattening in  sight."  Calories 
         count just as much during an eating binge as any other  time. 
         Also  the popular notion that a melted ice cream  sundae  has 
         very  few  calories  because "CALORIES DON'T  COUNT  AT  ROOM 
         TEMPERATURE",  is also a false premise. Inside you know,  but 
         stop  before it is all gone or you can not eat anymore.  This 
         is  a  success of sorts...just being able to  stop  a  binge. 
         Accept  that  the  damage has been done and  you  will  start 
         eating  your normal diet at the very next meal. Don't try  to 
         fast  to  make up for the binge, that will make  things  even 
         worse for you. 

         SALT:  Yes, salt has NO calories,  but it will stimulate your
         appetite to overeat.  Use  seasonings,  like  "Mrs. DASH", in
         place of salt.  It is also healthier to do so and before long
         food will taste better and more flavorful without salt.

         EATING  OUT:  Then  there is the problem  of  eating  out  at 
         restaurants.  It is easier than it used to be because of  the 
         many  salad-bars  that are available, even at the  fast  food 
         places where the kids want to go. Have the salad  bar...fine, 
         but  remember a few pointers.....NO SALAD  DRESSINGS.  Either 
         take your own pre-measured diet dressing or use plain vinegar 
         and a spoonful of oil. The dressings can easily be FIVE times 
         the  calorie  content of your entire salad.  Stay  away  from 
         potato  salad, ham salad and anything prepared with mayo  and 
         other unknown calories. Limit the egg (75 calories per  ounce 
         which equals one egg) and meats for toppings and cheese which 
         all  have  100-150 calories per ounce. Have all  the  greens, 
         mushrooms,   green  peppers,  onions,   sprouts,   cucumbers, 
         tomatoes  and radishes you wish. Then you can have the  fruit 
         dishes  for  desert and count only 75 calories  per  serving. 
         (This  certainly  does not count peaches preserved  in  sugar 
         syrup) Low cal drink and you are set.

         Avoid places where you have a menu and a long wait for dinner 
         with  bread  and  butter on the table  while  you  wait  (and 
         overeat). If you must go to a place like this, put the  bread 
         and butter and things on another table and immediately  order 
         coffee or hot tea and a salad (with no dressing) to munch  on 
         while  the  dinners  are prepared. Order what  you  know  you 
         should have, and do not scan the menu for all those  tempting 
         foods and descriptions. Order first to avoid the "that sounds 
         good, me too!" pattern that will get you high calorie  foods. 
         As soon as you have eaten your normal portion of food,  spoil 
         what is left with a lot of salt or something so that you will 
         not continue to eat until the plates are removed much later.

         BEFORE AND AFTER DINNER AT HOME: If you are the one preparing 
         the dinner, swear not to taste or nibble while preparing  the 
         meal. A big wad of bubblegum to chew on is a good  diversion. 
         It  keeps the mouth busy and keeps other foods out.  Or  have 
         some carrot sticks cleaned and sliced in cold water to  munch 
         on  and  a  diet drink to avoid  taking  in  calories  before 
         dinner. When it comes time for the meal, make sure of several 
         things. Serve the plates from the kitchen, not in bowls  full 
         at  the  table where second helpings are  too  easy(ask  your 
         family  to indulge and go to the kitchen themselves  if  they 
         want  seconds). Put all your food that you have measured  out 
         and intend to eat on a slightly smaller plate (it looks  like 
         more). Cut your food into very small bites, take a bite,  put 
         your fork down on the plate,and chew the food very thoroughly 
         and  completely  swallow it before lifting your  fork  again. 
         This will slow your eating down a lot....very desirable. Food 
         tastes better when chewed thoroughly,especially carbohydrates 
         and breads. Even cut foods like apples into very small pieces 
         and eat with a fork. You will be surprised how long a  medium 
         apple takes to eat in this manner.

         Have the food look elegant and appetizing. Looks add a lot to 
         the  enjoyment of any food, especially diet foods.  Use  good 
         silver and china. 

         As  soon as the meal is over...if possible....leave the  room 
         and let someone else clean up and store the  leftovers...even 
         if  you  have  to  make a deal with  them.  If  this  is  not 
         possible,  then at least leave the area for a while to  allow 
         time  for  the "stomach full" message to get to  your  brain. 
         Then  already have your leftover containers out and ready  to 
         put  the stuff up fast. You are not a human garbage  can  and 
         starving  people over in China won't benefit whether you  eat 
         it  or  chunk it....so chunk it unless it will  be  used  for 
         another  meal.  It  is  even  good  to  get  used  to  seeing 
         "perfectly  good food" go to waste in the garbage.  You  have 
         really  conquered this feeling when you can buy some of  your 
         favorite  food, bring it home, unwrap it and chunk it in  the 
         garbage....it may be a dollar or two very well spent to prove 
         to your inner self that the world did not swallow you up  for 
         committing  such  an unpardonable sin. If it  doesn't  go  to 
         WASTE  in the garbage it will go to your WAIST. Which do  you 
         prefer? But if you just have to save it, put it in containers 
         that won't tempt you to eat it. After several days if no  one 
         else eats it, it will spoil and you can throw it away with  a 
         clean conscience.

         Then leave the kitchen and even adjacent areas. Get busy  and 
         absorbed in reading, doing something....anything to let  food 
         and  dinner get completely out of your mind. Some people  say 
         that brushing the teeth is a good signal that eating is over.

         FOOD LOG: Perhaps the single most important TOOL in  dieting, 
         if  that  is the proper term, is the Food-Log. You  must  log 
         everything  you eat that has calories in it (don't  log  diet 
         sodas  and  the  like). This requires that you  have  a  good 
         complete  calorie guide for all types of foods and  that  you 
         weigh or measure everything you eat if not pre-measured  such 
         as  1 slice of bread = 75 calories.  Yes, this is a  pain  in 
         the  neck to do at every meal and snack...but you must.  This 
         is  the  only way you are going to REALLY KNOW what  you  eat 
         each  day,  count the calories and total each  day  and  week 
         intake.  Other  programs  in this series  help  you  see  how 
         important  this is in calculations for speed of  weight  loss 
         and  how  to  maintain  once you  get  to  goal.  Any  weight 
         counselor  will  tell  you  that  the  most  successful   and 
         consistent  dieters always keep and log everything, even  the 
         binges  and BAD foods when it happens (yes even  measure  the 
         ice  cream  while you are having a binge). By  the  way,  Ice 
         Cream  has  43  calories  per ounce and  a  full  1/2  gallon 
         container  will  deliver 2,752 calories to  your  body,  over 
         double  what your daily allotment of calories  normally  will 
         be.  If you won't keep a food log, you are not serious  about 
         dieting. I have known people who didn't diet at all, but just 
         by  keeping a food log, lost 10 overweight pounds and  didn't 
         think they did anything differently. Just looking at what you 
         have  had  to  eat at the end of the day  will  add  to  your 
         feeling of having had enough....or may stop you when you just 
         can't  stand to put a candy bar on your food log list.  There 
         are  many reasons why a food log works so well, but it  can't 
         work for you unless you are dedicated to keeping it with  you 
         at all times and using it. I keep a small reduced size log in 
         my  shirt pocket at all times. It has 21 blank blocks on  it; 
         good  for  a  week's worth of meals with  space  for  calorie 
         counts of each of the foods.

         FOOD-PROOFING  YOUR HOME:  We all spend a lot of time in  our 
         homes,  and that is where a lot of the improper  eating  goes 
         on. The very first thing to do is REMOVE ALL FOOD from  every 
         single  room  and location but the kitchen.  Not  one  edible 
         thing  anywhere in the house, but the kitchen. Then, put  any 
         foods out of sight and/or easy reach that is not part of your 
         legal diet. The best thing is to have a separate cabinet with 
         the  junk  foods  that you never open. Let  whomever  it  was 
         bought  for get it for themselves. Never take food  into  any 
         other  part  or  room of the house.  Always  eat  only  while 
         sitting down at the table. This will help you from getting an 
         "automatic  case  of  the  munchies" when  you  sit  in  your 
         favorite  chair  in the den to watch TV. Also, don't  sit  in 
         that  favorite  chair if it will trigger the  urges  to  eat. 
         Maybe you shouldn't sit at all if it is a danger time and you 
         will  feel the need to snack...go for a walk, run errands  or 
         call a friend from another room in the house...while you  sip 
         on a diet soda poured over crushed ice. 

         GIVE  YOURSELF  CREDIT:   When you have lost 5 or  10  or  15 
         pounds,  give yourself credit. If a spouse fails  to  notice, 
         try  one of these handy ideas. Next time you are both at  the 
         grocery store, load up his/her arms with 15 pounds of  ground 
         beef...and say "that's how much weight I have lost."  Another 
         more permanent way is to get a large metal container, like  a 
         10  gallon paint bucket. For every pound of weight  you  have 
         lost, add a pound of sand in the bucket. Soon it will get  so 
         heavy  it will be difficult to carry. This  will  demonstrate 
         very  clearly  how much weight YOU are  not  carrying  around 
         anymore...and you can add more sand as you continue to  lose. 
         It is a very good marker of your success. You need motivation 
         to  stay on your eating plan and gradually adapt to  a  whole 
         new way of eating properly. So give yourself credit for  what 
         you  have done...for the good days you have had...don't  kick 
         yourself  for  one or two BAD days. I heard a  little  saying 
         that illustrates this:

                          "WE AIN'T WHAT WE OUGHTA BE
                           WE AIN'T WHAT WE WANNA BE
                           WE AIN'T WHAT WE'RE GONNA BE
                           BUT THANK THE LORD....
                           WE AIN'T WHAT WE WAS !"

         The only caution is not to consider yourself "CURED" when you 
         get  close to or at your goal ... and go back to eating  like 
         you were when you were fat. You'll get fat again. So look  at 
         the weeks and perhaps months that you spend losing weight  as 
         training  for a whole new way of eating and handling  problem 
         foods....plan to live this way for the rest of your life.  It 
         is  healthy  and good for you. Take your  frustrations,  your 
         anger, your anxieties, your celebrations and all the emotions 
         and if you must react to them, react in NON-FOOD ways.  Heck, 
         hit  somebody  or  scream at  somebody...that's  better  than 
         quietly  going  to  the bathroom and  devouring  2  boxes  of 
         chocolate  cookies,  6 twinkies, and an  econo-pak  of  candy 
         bars.  Then you still have the anger and feelings....AND  THE 
         GUILT  over  what  you  have  just  done  with  foods.  While 
         mentioning guilt here, if it strikes a familiar cord, by  all 
         means read and print-out a copy of "REASONS" which is another 
         program in this series.

         SOME PARTING THOUGHTS:  "Life is like a cafeteria; there  are 
         no waiters to bring success to you."  "IF IT IS TO BE; IT  IS 
         UP TO ME" You'll see this thought in another program, but the 
         point  is that YOU are in charge of your own life...so  don't 
         look to others for your success and have to depend on them to 
         diet and reach your goal. 

         Speaking of cafeterias...this really happened. It was a  busy 
         day  in the cafeteria and Marge was having a diet salad.  All 
         the  tables were filled and shortly a man asked if  he  could 
         sit at the same table to have his coffee and doughnuts. Marge 
         said  sure. Presently, he finished his coffee and one of  the 
         powdered sugar doughnuts, but had not touched the other  one. 
         Then  he got up and left. Marge looked at the other  doughnut 
         for what seemed like a long time, knowing that soon the  bus-
         boy would come by and rake it into the garbage...so  quickly, 
         like  a spider darting after a fly, she whisked the  doughnut 
         off the plate and began eating it. Marge was just about  half 
         way  finished with it .....  when the man returned  with  his 
         second cup of coffee!

         The  worst slogan for people on a diet to ever come down  the 
         pike?
                               "BAKE SOMEONE HAPPY"


         OLD  CHINESE PROVERB:  "That the birds of worry and care  fly 
         above your head, this you cannot change, but that they  build 
         nests in your hair, this you can prevent."  Deal with  life's 
         problems  when they come, then forget them. If you don't,  it 
         will all go to waist.

         In dieting, we all have our good days when it is  easy...then 
         we  have  the  really rotten days when nothing  seems  to  go 
         right.  Well, everybody has those kinds of days and  we  just 
         have to get through them without letting it wreck our dieting 
         success. It might help to remember the story of this railroad 
         engineer when we think we are having a bad day....

                   A  railroad engineer got up on the  wrong 
                   side  of bed one morning. The  water  for 
                   his  shower was cold. His shoelace  broke 
                   when  he tried to tie it.  At  breakfast, 
                   his  toast was burned. His  car  wouldn't 
                   start  and he had to take a taxi  to  the 
                   yards.  He was late, so when  he  started 
                   his  train he speeded up to 90  miles  an 
                   hour. Just as he swung around a curve, he 
                   saw another train coming straight at him, 
                   on  the same track. He heaved a big  sigh 
                   and,  turning to the fireman, said,  "DID 
                   YOU EVER HAVE ONE OF THOSE DAYS WHEN JUST 
                   EVERYTHING GOES WRONG?"


         Some  of these "Principles of Dieting" are nothing more  than 
         common  sense,  others  are  methods  that  have  worked  for 
         thousands of people in the past and can work for you. If  you 
         have  the commitment to live by the plans and ideas  outlined 
         in these programs and text files, you WILL BE SUCCESSFUL !
         Have a safe trip!

```
{% endraw %}

## DIETSHOP.DOC

{% raw %}
```

                            DIET FOOD SHOPPER

         This  program  is simply a shopping list  of  diet  food 
         items that you might want to get when you go shopping.  There 
         are  about 200 items in the list. The program will present  a 
         "screenful"  at the beginning for you to select from; use the 
         SCROLL BAR for More Items.
         
         Click on the item you want to add to your shopping list.  You
         can delete an item from your shopping list if you wish.  When
         you are finished adding items to the list, select  the  print
         option and make a printed copy of your shopping list to  take
         to the grocery store with you.  The best way to avoid  buying
         foods you should not have and didn't  intend to  get,  is  to 
         always have a shopping list with you, and ONLY buy what is on
         your list.  Then quickly check out and leave the store.

         Never, NEVER shop when you are hungry.  Best time to shop  is
         30-45 minutes after a satisfying  meal.   Drink  a  diet soda 
         just before you go to further aid you  to  buy  only  "legal"
         diet foods when you shop.
        

             The program uses the file "DIETSHOP.DTA" to read the list
         of foods. You can add to or change the list  using  any  text
         processor in NON-DOCUMENT mode. NOTEPAD works just fine as an
         editor to change or add to this list. 

-------------------------------------------------[ END ]------------- 
```
{% endraw %}

## DIETTEST.DOC

{% raw %}
```
                        
                         Diet Evaluation Questions     
                       

         This  is  the most helpful  program on the  entire  disk,  in 
         terms of the potential value to the dieter. The heart of  the 
         program  is a self-test of 30 items for self-evaluation.  You 
         read each item and decide if it applies to you Never,  Always 
         or somewhere in-between. 

         It  is  not  so important how you do on  the  test.  What  is 
         important  is that every single item is a strong dieting  aid 
         to  help you lose weight, change bad eating habits, and  help 
         you  stay on whatever diet you may be on. You should not  try 
         to be TOO good and consume less than 1200 calories per day... 
         and you should make sure that most of the 1200-1400  calories 
         is  food of bulk, like fresh vegetables and fruits.  Remember 
         that  a half of a cantaloupe is far more satisfying  than one 
         medium  banana....   a whole orange is better than 4  oz.  of 
         orange  juice....3  oz. of cooked chicken and two  slices  of 
         bread  is  more satisfying than than a hot-dog and  bun  (but 
         both have the same calories). 

         So  you  should certainly print out the 30 items and  make  a 
         point  to try to stick to "ALWAYS" for every one. If you  do, 
         you will be far more successful in both losing weight as well 
         as keeping it off. Also, you should enjoy the messages in the 
         message section. 
--------------------------------------------------[ END ]---------------
```
{% endraw %}

## FILES.TXT

{% raw %}
```
****** Files on the DietDisk for Windows ******

CALCALC  DOC      4136 
CALCALC  DTA      7552 
CALORIES DOC      2828
DIET     EXE     63746   Main Program Run from Windows 3.0 or higher
DIET     ICO       766   Same Icon used in main program
DIETALL  DOC     12993 
DIETHOME DOC       717  |---------------------------------------|
DIETHOME TXT      4971  |  all files not specifically noted are |
DIETMESS TXT      7505  |  simply part of the main DIET.EXE     |
DIETPRIN DOC      1041  |  program.  They are listed here so    |
DIETPRIN TXT     18944  |  you would know if you were missing   |
DIETSHOP DOC      1563  |  one, or if you wished to remove all  |
DIETSHOP DTA      5635  |  of them from your hard disk at some  |
DIETTEST DOC      1680  |  future time.  Keep this list for     |
DIET_QES TXT      2007  |  reference.                           |
FOODLIST ALL      9585  |---------------------------------------|
FOODLOG  DOC      1313 
FOODLOG  TXT      5104 
ICON     TXT      2051   Tells how to install ICON in windows
LOSSAVG  DOC       788 
REASONS  DOC      1015
REASONS  TXT     10003
REG-DIET TXT      3727   DietDisk registration form (print from menu)
WEIGHT   DOC      1210
VBRUN100 DLL    271264   VisualBasic RunTime Library needed to run .EXE
FILES    TXT      1318   This file you are reading now.
```
{% endraw %}

## FOODLOG.DOC

{% raw %}
```
 -------------------------[  Food Log  Information  ]---------------

The food log on the Diet Disk is a form for you to print on your
printer and use to log what you eat at each meal.  

One of the most important tools for successful weight loss is
to know what you ate each day, and how many calories you consumed.

Further, there are important psychological reasons to be able to 
look at a listing of the food you have eaten at the end of the day.

This is one of the most important, if not THE most important tool
for dieters, yet many will NOT use it.  Why?  I don't know.
Will you?   I carry a folded copy with me every day when dieting.
Even if I snack, I take the form out of my shirt pocket and add
the snack and the calories, even if an estimate.

Then add up the calories at the end of each day.  You should try
to have between 1200 and 1500 calories if you are a woman, and 
1400 to 1700 calories if you are a man.   There are two other sections
on this disk that give you calorie amounts for foods.  You can 
print out a table of calorie amounts in foods from the 
calorie calculator program or from the diet shopping program.

Log your food, all the food you eat, and you WILL be MORE
successful!

--------------------------------------------------[ end ]--------------
```
{% endraw %}

## FOODLOG.TXT

{% raw %}
```
     This form is registered by Micro Development Software (M.D. Smith)        
               1000 Monte Sano Blvd.,  Huntsville, AL  35801                   
╔═════════════════════════════════════════════════════════════════════════════╗
║      Diet Disk Food Logging Form for week of _________________  19_______   ║
╚═════════════════════════════════════════════════════════════════════════════╝
╔══════════════╤════╤══════════════╤════╤══════════════╤════╤════════════╤════╗
║  Sunday      │Cal │   Monday     │Cal │   Tuesday    │Cal │ Wednesday  │Cal ║
├──────────────┼────┼──────────────┼────┼──────────────┼────┼────────────┼────┤
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
├──────────────┼────┼──────────────┼────┼──────────────┼────┼────────────┼────┤
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
├──────────────┼────┼──────────────┼────┼──────────────┼────┼────────────┼────┤
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
├──────────────┴────┴──────────────┴────┴──────────────┴────┴────────────┴────┤
│Daily totals│      │            │      │            │      │          │      │
└─────────────────────────────────────────────────────────────────────────────┘
╔══════════════╤════╤══════════════╤════╤══════════════╤════╤════════════╤════╗
║   Thursday   │Cal │   Friday     │Cal │  Saturday    │Cal │  TOTALS    │Cal ║
├──────────────┼────┼──────────────┼────┼──────────────┼────┼────────────┼────┤
│              │    │              │    │              │    │ for week   │    │
│              │    │              │    │              │    │ BREAKFAST  │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
├──────────────┼────┼──────────────┼────┼──────────────┼────┼────────────┼────┤
│              │    │              │    │              │    │ for week   │    │
│              │    │              │    │              │    │ LUNCH      │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
├──────────────┼────┼──────────────┼────┼──────────────┼────┼────────────┼────┤
│              │    │              │    │              │    │ for week   │    │
│              │    │              │    │              │    │ DINNER     │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
│              │    │              │    │              │    │            │    │
├──────────────┴────┴──────────────┴────┴──────────────┴────┴────────────┴────┤
│Daily totals│      │            │      │            │      │                 │
└────────────────────────────────────────────────────────────Grand Total──────┘
```
{% endraw %}

## ICON.TXT

{% raw %}
```


                             Documentation for ICON
                              use of DIET.ICO Icon
                               for MS Windows 3.0


          You will find a file on this disk called DIET.ICO which is 
          an ICON for the DIETDISK program.  While the program must be 
          run as a NON-WINDOWS application, it is easy to be set up 
          with your Program Manager and called from an ICON.  

          You click on the FILE of the Program manager and choose NEW 
          from the menu. 

          That will open up the dialog box that has NEW at the top of 
          it and the buttons for Program Group and Program ITEM, you 
          choose Program item and click on OK.

          The next screen is PROGRAM ITEM PROPERTIES.   You enter 
          under the Description box....the title `DIETDISK' and then 
          TAB to the Command box.  Then you enter the 
          drive\subdirectory\filename...which might look like this:
                 C:\WIN\APPS\WTMENU.EXE
          WTMENU.EXE is the menu program for the DIETDISK.  Then you 
          click on the Box that says, CHANGE ICON.

          Now you get the SELECT ICON dialog box with a request for a 
          File Name.  Wherever you have stored the icon, which could 
          still be on the floppy in the A: drive, or copied to your 
          hard disk.....enter the complete drive and path such as..
                 C:\WIN\APPS\DIET.ICO
          Or wherever the ICON is stored (DIET.ICO) and finally click 
          on NEXT and the ICON will appear in the window where the 
          generic ICON has been.  Then click OK on this box and OK on 
          the next BOX and you have the DIETDISK ICON on your program 
          group to call when you wish to run the program.

          If you have a problem installing the ICON, you may call me 
          at the number listed elsewhere in the documentation or write 
          to me at the address given.

          M.D. Smith




```
{% endraw %}

## LOSSAVG.DOC

{% raw %}
```
                 
                              AVERAGE WEIGHT LOSS     

                This  is  a section designed to let  you  record  your 
         weekly  weigh-ins along with the date. When you have  entered 
         one or more records you can total and average your weight loss. 
         Then you can store the dates and amounts in a file. The  next 
         time  you want to add to the records, just load the  existing 
         file and add the current week to it. The program will do  the 
         new calculations and allow you to store both the old and  the 
         new data in the file  "LOSS.DTA".  You can also elect to make 
         a hardcopy on your printer.

        
--------------------------------------------------[ END ]---------------   
```
{% endraw %}

## REASONS.DOC

{% raw %}
```
   
                          
                           Reasons to Diet         
                          

         This  is not a program to run, it is a text file to read  and 
         can  be read from the main program.

         REASONS is a psychological message. Many dieters that fail to 
         get  to  goal  weight  or to  stay  there  can  blame  faulty 
         reasoning about getting thin. Books have been written on  the 
         subject and several are suggested in the text. 

         This  is a condensed message, but the potential for  good  to 
         help  you be successful is great. Read it  carefully  several 
         times....perhaps  print-out  a  copy to  study  later.  Don't 
         underestimate the power. It can truly free you to be yourself 
         and feel good about it. Then you can lose weight, if that  is 
         what YOU choose to do, for the right REASONS.

--------------------------------------------------[ END ]--------------- 
```
{% endraw %}

## REASONS.TXT

{% raw %}
```



                                     REASONS 

          Everyone does everything for reasons.  Sometimes they are not 
          apparent.  Sometimes they are obvious .  . . to ourselves, 
          sometimes to others. 

          It has been said that everything we do from the Cradle to the 
          Grave is because we want something.   Let's assume that you 
          are on a diet right now because we want to lose weight...but 
          what are the reasons for that? 

          Try to think of several really valid reasons...beyond the 
          obvious ones. After you have thought of several....what were 
          they? Did they run something like... "Because I want to look 
          and feel better . . .I want to be happier with myself . . .My 
          husband really wants me to . . .I just want to be thin . . I 
          want to have more energy . . .I want to get into those 
          attractive slim clothes that you can buy off the rack in 
          stores . . .etc."  

          OK . . .now, let's look deep.   Lets especially examine 
          external reasons such as "my husband wants me to" which means 
          " he will love me more when I get thin," and even obvious 
          ones like .  . ."I want to look better, which says "I want 
          others to like the way I look more than they do now." OK . . 
          .now that we have a lot of reasons why people want to lose 
          weight, what will happen if you get to goal and your husband 
          doesn't love you more .  .  .or the way other people treat 
          you is not any better . . .possibly worse .  . .and none of 
          those good things you had been expecting seem to be happening 
          to you?  (You , will gain the weight back, right?) 

          So, if you are going to keep it off, or even get to goal in 
          the first place, you may have to modify your thinking and 
          your REASONS for losing weight.  Now this may happen 
          automatically to a degree as you lose weight and like 
          yourself more . . .for, as you like yourself more, it becomes 
          less important what others think of you.  Fat people often 
          build up a shell of the HAPPY FAT JOLLY PERSON, when, in 
          fact, they are sensitive, insecure, hurting people inside and 
          the more they hurt .  .  the more they eat, which makes them 
          hurt more. 

          If you bake someone a really delicious, wonderful cake and 
          give it to them, are they supposed to appreciate it?  Are 
          they supposed to thank you for it?  Are they supposed to 
          think a little more of you for it?  Are they supposed to like 
          you a little more because of it?  Are they supposed to be a 
          LITTLE kinder to you for it?  Are they supposed to do you a 
          tiny little favor when you really need it?  USUALLY, YES! 

          Then maybe you are giving for the WRONG REASONS.  When you 
          give anything, what should you expect?  Thanks?  Return 
          favors? Nothing?  Nothing at all? 

          Let me tell  you  a  little  ZEN  story.   Zen is a form of 
          Chinese religion or philosophy. From the book compiled by 
          Paul Reps, called ZEN FLESH, ZEN BONES:  "While Seisetsu was 
          the Master of Engaku in Kamakura he required larger quarters, 
          since those in which he was teaching were overcrowded.  Umezu 
          Seibei, a merchant of Edo, decided to donate five hundred 
          pieces of gold, called Ryo, toward the construction of a more 
          commodious school. This money he brought to the teacher.

                Seisetsu said:  "All right, I will take it."

          Umezu gave Seisetsu the sack of gold, but he was dissatisfied 
          with the attitude of the teacher.  One might live a whole 
          year on three Ryo, and the merchant had not been thanked for 
          five hundred. 

              "In that sack are five hundred Ryo," hinted Umezu. 

              "You told me that before," replied Seisetsu. 

              "Even if I am a wealthy merchant, five hundred Ryo is a      
               lot of money," said Umezu.
           
              "Do you want me to thank you for it?.. asked Seisetsu. 

              "You ought to." replied Umezu. 

              "Why should I?" inquired Seisetsu.  "The giver should be            
               thankful."
           
          The moral of this story is that the giver should give only 
          for the sake of wanting to give with no ulterior motives of 
          being thanked, rewarded, or receiving any tangible or 
          intangible receipt from the gift.  This is unselfish giving.  
          If we give in any other way, WE are often disappointed later 
          . . . because we gave for reasons other than the obvious one. 

          Losing weight is the same way; if we lose weight for a lot of 
          ulterior motives, such as unexpected results about the way 
          others will feel about us, treat us, or in some way they will 
          cause our life to change for the better, we will be, and 
          often are . . . sorely disappointed.  We should all carefully 
          examine why we are losing weight. 

          Let me quote from the book, ACTUALIZATIONS, YOU DON'T HAVE TO 
          REHEARSE TO BE YOURSELF by Stewart Emery. . . "We absolutely 
          do not know what we really want, because we have been 
          conditioned to want what everybody else except us tells us to 
          want. It started out when our mother told us what she wanted 
          us to want; our father told us what he wanted us to want; our 
          Grandmother and Grandfather did the same thing.  The Sunday-
          school teacher told us what God wanted us to want, and the 
          teacher told us what the principal wanted us to want.  
          Madison Avenue told us to want everything. 

          Society itself told us what to want.  When I was growing up, 
          it was a wife, two and a half children, two cars, and a home 
          in the suburbs.  Everyone was telling us what to want and 
          telling us that if we wanted and acquired the right things, 
          we would be happy.  Happiness was a function of wanting the 
          right things.  And when that did not make us happy, there was 
          always someone who told us that we were unhappy because we 
          wanted the wrong things and that if we would JUST want what 
          he wanted us to want, we would be happy. 

          So we end up completely disillusioned with what we thought we 
          wanted and with the people who told us to want it.  Now we 
          are feeling like a pawn in a chess game over which we have no 
          control. We absolutely look like a victim; it seems as if 
          there is no way out.  But, take heart, there is an answer." . 
          . . .  .  .You can transform.  If you make an apple become an  
          orange, that is not a transformation.  But if you make an 
          apple still look like an apple and TASTE like an orange, that 
          is a transformation.  Transformation means housing a 
          different essence in the same form. 

          To a Person who has undergone a transformation. The world is 
          exactly the same as it was before.  When you are transformed, 
          the immediate circumstances of your existence are the same.  
          What is altered is how you feel about it.  What is altered is 
          your RELATIONSHIP to the things in your life, not THE THINGS 
          in your life. 

          The absence of fear is not an option that is available to 
          most people.  The difference in people who are making it in 
          the world and those who are not is simple:  The people who 
          are making it in the world are making it AND they have fear.   
          Those who are not making it just have fear. 

          So we have to transform the RELATIONSHIP we have with fear, 
          not seek to get rid of it.  GUILT:  We must transform the way 
          we react to guilt (often an eating binge) not initially get 
          rid of the guilt (although in the long run we may get rid of 
          a lot of it.) 

          If we look at losing weight as a means to an end, which is to 
          say. if we believe that getting thin will MAKE us a happy 
          person forever and ever . . .you are in for a sad surprise.  
          First it will not MAKE You happy; it might contribute to some 
          temporary happiness.  Continuous "HAPPY EVER AFTER" is not 
          only NOT possible, it is not desirable.  Life is full of ups 
          and downs.  If we COULD eliminate the downs, there would be 
          no UPS (what could we compare it to?)  If losing weight is 
          simply something you have decided to do that you want to do 
          with your life and your body.....Good!  Do it for that 
          reason.  Let the ups and downs, the good and bad, the happy 
          and the sad, stress and calm, all be parts of a complete and 
          full life that you embrace fully .  .  . and NOW.  Don't wait 
          until . . .someday, for someday never comes.  Do what you 
          want to do.  Make decisions.  They will not all be perfect. 
          or even good.  That's the way it should be. 

                                  LIVE  LIFE. 

          Start living it right now . . .ALL OF IT. BE YOURSELF. And 
          when you are dead and gone . . .let it be like the song that 
          Frank Sinatra sings that says . . ."I DID IT MY WAY! ".... 
          For my own reasons and NOT for the reasons, desires, wants, 
          and wills of other people. 

```
{% endraw %}

## WEIGHT.DOC

{% raw %}
```
                 
                          GOAL WEIGHT PROJECTIONS
                   

                This  program  allows you to play the  "what-if"  game 
         with  the computer and your dieting. It allows you  to  input 
         your current or starting weight. Then, you give it your  goal 
         weight, and finally, about how many pounds per week you think 
         you  will  be  able to lose. It will then  calculate  on  the 
         printer or screen, how many weeks it will take along with the  
         amount you would weigh weekly. This becomes a  projection  of 
         how  long it will take to get to goal and gives you a  target 
         weight each week to shoot for. This can be one of the  "ROAD-
         MAPS" for your success. 

               If  you have already been dieting and have an  accurate 
         weekly average weight loss to enter, then your target weights 
         & dates will be far more accurate. You can re-run the program 
         at any time during your diet to get new "on-target" values to 
         help you reach your projected goals.
         
--------------------------------------------------[ END ]--------------- 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4052

     Volume in drive A has no label
     Directory of A:\

    WINDIET  ZIP    222690   1-04-92  12:49p
    PKUNZIP  EXE     29371   1-25-93   2:04a
    INSTALL  BAT      2114   1-01-92   6:04p
    README            1297   1-01-92   5:59p
    SHOW     EXE      2040   9-12-88  10:48a
    GO       BAT        28   9-10-93   8:22a
            6 file(s)     257540 bytes
                           61440 bytes free
