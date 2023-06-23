---
layout: page
title: "PC-SIG Diskette Library (Disk #922)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0922/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0922"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "WIZQUIZ AND JEM"

    WIZQUIZ is an educational program that offers randomly-generated
    problems across a wide area of the average elementary school
    mathematics curriculum including such disciplines as addition,
    subtraction, multiplication, division, lowest common denominator,
    greatest common factor, simple and advanced fractions, decimals and
    percentages, and reciprocals.
    
    Each type of problem has 10 levels with a target score determined by
    the number of errors and the time it takes to solve all 10 problems of
    that level. Since WIZQUIZ asks for and remembers a player's age, it
    restricts access to easier problems by age.
    
    After each set of 10 problems, the program calculates the new average,
    checks the score against the best ever and the player's own previous
    best performance, and announces the score. WIZQUIZ keeps a separate
    record for each player's best score and averages.
    
    WIZQUIZ can be used both at home for personal studying and at school in
    the classroom.
    
    JEM LOGO was written to teach children the basics of computer
    programming. A very simple programming language, it teaches children
    the logic associated with a computer and how to combine commands to
    carry out complex tasks.
    
    JEM has three basic modes: Help, Explain, and Run. The first mode you
    see is Run, when the logos are displayed. If you type Help, you get
    four pages of text, giving a brief description of the logo or word you
    indicated when you requested help.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES922.TXT

{% raw %}
```
Disk No   922
Program Title:  WIZQUIZ and JEM
PC-SIG Version 1.2
 
WIZQUIZ is an educational program which brings up randomly-generated
problems covering a wide area of the average elementary school
mathematics curriculum.  Problems cover addition, subtraction,
multiplication, division, lowest common denominator, greatest common
factor, simple and advanced fractions, decimals and percents, and
reciprocals.
 
Each type of problem has ten levels, and each level has a target score
determined by the number of errors and the time it takes to solve ten
problems.  Since WIZQUIZ asks for and remembers a player's age, it
restricts access to easier problems by age.  After each set of ten
problems the program calculates the new average, checks the score
against the best ever and the player's own previous best performance,
and announces the score.  WIZQUIZ keeps a separate record for each
player's best score and averages.  Each record is password-protected,
but there is a "super wizard's" password that lets anyone look at
anybody's scores.  WIZQUIZ is a program that can be used both at home
for personal studying and at school in the classroom.
 
JEM LOGO was written to teach children the basics of computer
programming.  It is a very simple programming language that teaches
children the logic associated with a computer and how you can combine
commands to carry out complex tasks.  JEM has three basic modes: Help,
Explain, and Run. The first mode you see is Run, when the Logos are
displayed.  If you type in HELP, you see four pages of text, giving a
brief description of the Logo or word you asked for help with.
 
JEM has two types of words: Primary and Secondary.  Primary words are
the base of JEM, and the secondary words are created out of primary
words.  Primary words are the simplest commands used by JEM. The most
important words to the beginner are HELP and END. HELP displays the
help, while END saves the file and exits.  Secondary words are the way
you program the turtle to do higher functions.  They may be any
combination of primary words and secondary words.
 
Usage:  Mathematics/Programming Language.
 
Special Requirements:  Color graphics.
 
How To Start:  Type GO (press enter).
 
Suggested Registration:  $9.00 for WIZQUIZ and $20.00 for JEM.
 
File Descriptions:
 
-------- ---  WHIZQUIZ
WHOZWIZ  EXE  Score keeper.
README        Documentation.
WIZQUIZ  EXE  Main program.
-------- ---  JEM
JEM      BAK  Backup of the documentation file.
JEM      COM  Main program.
JEM      DAT  Data file used by JEM.
JEM      DOC  Documentation file.
READ     ME   Description of what is on this disk.
 
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
║                  <<<<  Disk No 922 WIZQUIZ, JEM  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for WIZQUIZ, Type:                           ║
║                  COPY README LPT1: (press enter)                        ║
║                                                                         ║
║ To run the program WIZQUIZ, Type: WIZQUIZ (press enter)                 ║
║                                                                         ║
║ To print the documentation for JEM, Type:                               ║
║                  COPY JEM.DOC LPT1: (press enter)                       ║
║                                                                         ║
║ To run the program JEM, Type: JEM (press enter)                         ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## JEM.DOC

{% raw %}
```

	    
	    
	    
	    
	     	
	    
	    
	    
	    
	    
	    
	    
	                            JEM LOGO
	              
	    
	    
	                            VER 1.10 
	         
	    
	            
	    
	    
	                           RELEASE # 2
	    
	    
	              (c)Copyrighted  1987 by James Moriartey
	                        174 Garnet Crescent 
	                        Wetaskiwin Alberta
	                         Canada T9A-2S6
	    
	    


	                       Table Of Contents
	    
	    
	    
     JEM LOGO Table of Contents (c)Copyright 1987 by James Moriartey
	
	    
	         
	    
	    Disclaimer.................................1
	    Shareware Concept..........................1
	    Permission to Copy.......................1,2
	    Information for Teachers...................2
	    What Need to get Started...................3
	    Minimum System Needed......................3
	    List of Files..............................3
	    JEM overview...............................4
	    Primary Word List......................5,6,7
	    Variables..................................8
	    Explain to Turtle..........................9
	    Run Mode..................................10
	    end Command...............................11
	    Explain Overview.......................12,13
	    Limitations...............................14
	    Order Form................................15
	    
	        
	    
	                                                          page 1
	                       DISCLAIMER

	    	    
	    	    This software will perform as described when used
			properly. By using this software you acknowledge That this
			software may not 
	   suit your particular needs or be completly completely trouble free
	   If this software does not perform as discribed, our liability to
	   you is limited to replacing the software or refunding the purchase
	   price if registered.
	    In no event will James Moriartey be liable to you for any
	   damages, including any lost profits, lost savings or other 
	   incidental or consequential damages arising out of the use or
	   inability to use this program , even if James Moriartey has been
	   advised of the possibility of such damages.
	    
	       
	                      The Shareware Concept
	    
	    JEM is distributed as user supported software, and you may freely
	   copy this program to use , you are in fact encouraged to make
	   copies for your friends. As long as the program is not modified in
	   any way and the copyright notice is not removed or tampered with.
	    And that all the files including this manual is copied also and
	   the manual is not modified or tampered with.
	     BBS operators may ARC the files for transmission as long as all
	   the files are sent in the library.
	     No one can make charge for JEM , except authorized users groups,
	   which may charge a cost based fee not to exceed $10.00.
	    
	            
	    
	    
	                                                      page 2
	    
        Teachers and other Educators
	    
	    Educators may make as many copies to use on site (in the same
	   building) for no charge if the first copy is a registered copy.
	    Any additional copies for use off site may be purchased at one
	   half the current price for JEM. And the following lines are given
	   to the user.
	    
	    
	                 This program is brought to you by
	                      James Moriartey 
	                     174 Garnet Crescent
	                  Wetaskiwn Alberta Canada
	                           T9A-2S6
	                 and " Educators Name "
	                 If you have any questions or comments    
	                 about JEM please write to the address
	                 above.
	    
	    Please address any comments or questions about JEM to the above
	   address even if you do not wish to register as JEM owner.
	    	    
	    What you need to get going
	    
	    First make a copy of JEM-Logo to floppy disk. JEM will run under
	   PC-DOS 3.1 and MS-DOS 3.0 it should run under DOS 2.2 but it has
	   been tested in the 3.0 and higher DOS only. It will run on the IBM
	   XT,AT and all true Compatible computers. JEM needs 256K of memory
	   and a single 5 1/4 Floppy Drive. To use JEM on a Hard Drive create
	   a directory (MD JEM) and copy the disk to that directory. If you
	   have any problems look in your DOS manual.
	    JEM-LOGO must have two files to run they are JEM.COM and JEM.DAT
	   these files must be in the same Directory for JEM to work. 
	    JEM.COM is the main program JEM.DAT is a list of words that JEM
	   uses JEM.DAT is a ASCII file it may or may not contain some data.
	    
	    
	    
	    LIST of Files You Should Have
	    
	    JEM.COM                   The Program
	    JEM.DAT                   Data file used by JEM must be in the
                            	  same Directory as JEM.COM
	    JEM.DOC                   This Manual
	    Read.me                   File list and How to Start JEM 
	    
 
	    
	    	           A OVER VIEW OF JEM LOGO
	    
	    
	    Jem Logo was written to teach my children the basics of computer
	programing. I have never seen any version of LOGO nor do I care to see
	one. JEM is written in Turbo Pascal and the source code is not available
	JEM has three basic modes they are Help Mode , Explain Mode and Run mode
	the first mode you see is Run Mode when the Logo's are displayed and one
	line says " Type in help for Help" if you type in this word you will
	shown four pages of text these page give a brief description of the words
	in the help file. JEM is a interpreter and runs at quite slow speeds
	,there are ways to make JEM run fast these commands will be explain
	later.
 	 JEM has two types of words they are Primary words and Secondary words.

    PRIMARY WORDS
	
	 Primary words are the base of JEM all secondary words are created out of
	primary words.Primary words are the simplest commands used by JEM
	the most important words to the beginner are : help , end. The word
	help displays the  help file the word end saves all the work done and
	exits JEM LOGO.
     Primary words can be entered in a short hand version the first three
    characters must be entered. (Note JEM runs faster if only the first three
    letters	are used of the Primary Words only).

    SECONDARY WORDS
	    
	    Secondary words are the way you program the turtle to do higher
	   functions they many be any combination of primary words and
	   secondary words the more levels of secondary words the slower the
	   response of the turtle all secondary words must be type in exactly
	   as created. Also a secondary word that is called the same as
	   primary word will be ignored and a secondary word with two
	   meanings the first found will be used the second will found will
	   be ignored. Care must be taken to ensure that two meanings do not
	   share the same word as JEM does not check for double meanings for
	   a word. Secondary words must be at least five characters or more
	   long otherwise the interpreter will not find them.


       


                        PRIMARY WORD LIST

	    This list will explain each word in more detail and the syntax
	   and give the short hand word also.All words must be typed in
	   exactly in upper or lower case.

        WORD         Short hand          Explanation and Syntax
 
		upen         upe                 Lifts Pen up Turtle does not draw
                                         a line  or leave a mark if pen is up
                                         pen stays up

        dpen	     dpe                 Puts pen down begins to draw or
                                         leave a mark if pen is down pen
                                         stays down.

        hide         hid                 Hide turtle from view turtle can
                                         still perform all functions the
										 turtle itself is hidden.

        show         sho                 Display turtle (default setting)

        cs           cs                  Clear screen contains of screen are
                                         gone. Turtle is sent to center of
										 screen.

        wrap         wra                 Screen wrap is on turtle will wrap
                                         around the display (default setting)

        nwrp         nwr                 Sreen wrap is off turtle will not
                                         wrap around display.
     
        med          med                 Medium Resolution graphics mode
                                         preferred setting (default setting)

        Hi           Hi                  High Resolution graphics mode
									     not recommended.

        gh           gh                  Turtle goes to the center of the
                                         screen no line is drawn.

        pse          pse                 Pause and wait for any key to be
                                         pressed before doing next command.


        1            1                   Use colour Palette Number 1

        2            2                   Use colour Palette Number 2

       Clr [x]       Clr [x]            Clr<space>[number]
                                        Set pen colour between 0 and 3
                                        colour depends on Palette Number

       forw [x]      for [x]             forw<space>[distance]
                                         Turtle moves forward x spaces

       back [x]      bac [x]             back<space>[distance]
                                         Turtle moves back x spaces

       turn [x]      tur [x]             turn<space>[compass degree]
                                         Turtles turns to face degree on the
                                         compass example turn [90] turtle
										 will turn to the 90 degrees of
										 home position.

       ltrn [x]       ltr [x]            ltrn<space>[angle]
                                         Turtle turns at that angle from
                                         current position. example ltrn [90]
                                         will turn the turtle 90 degrees from
                                         current position

       rtrn [x]       rtrn [x]           rtrn<space>[angle]
                                         see ltrn turns to right

       again [x]      aga [x]            again<space>[number of times]
                                         Do following word x number of times
                                         example again [4] forw [1] would
										 move the turtle ahead five spaces.
                                         again statement must precede the
                                         statement you wish to again.
                                         NESTED again statement are not
                                         allowed Turtle does check for nested
										 again statements.

       
       help           hel                Display help file contains of screen
                                         are lost.






       B [x]         B [x]              Sets Background colour between 0-3
                                        colour depends on Palette Number
       
       end           end                End JEM Logo save all secondary words
                                        in file "JEM.DAT" and exit JEM Logo
										if JEM.DAT is not found all secondary
										words are lost.


       Rept           Rep                Repeat following words until a "p" 
                                         key is pressed and wait until a "s"
                                         key is pressed then stop if the "s"
										 key is not pressed the continue the
										 repeat until a "p" key is pressed.
        
       off            off                Turns command line off it is no
                                         longer displayed .

       Lineon         Lin                Turns command line on command line
                                         is displayed

       secondaryword                     Do secondary word see explain


       explain        exp                Enter explain to Turtle mode 
                                         see explain mode and explain mode
                                         commands.



                              Variables 

       JEM Logo allows the use of two variables only they are "var1" and 
       "var2" they are numeric values only the only operations allowed on
       them are addition and subtraction. 
       The syntax for the variables is :
	    
         s [var1=x]                         s<space>[var1=x]
         									Sets the value of the var1 to x
                                            example s [var1=1] would set the
                                            value of var1 to 1.
	    
         s [var1+x]                         s<space>[var1+x]
                                            Will add x to the value of
											var1 and set the value of
											var1 to var1+x.   example
	                                        current value of var1 is 2 so
                                            s [var1+1] would set the
											value of var1 to 3. x can be
											any number.
	    
	     s [var1-x]                         s<space>[var1-x]
	                                        Will subtract x from the
	                                        value of var1 and set the
	                                        value of var1 to var1-x.
	                                        example current value of var1
                                     	    is 4 so  s [var1-2] would set
											the value of var1 to 2. x can
											be any number
	    
	    The syntax for var2 is the same as it is for var1. Variables can
	   not perform operations on each other. The commands listed above
	   are the only commands that will be performed. Also each operation
	   can be preformed in any word , the value of the variable is passed
	   to the next word. See sample secondary words.
	    Variables are used to create spirals and other shapes
	   the uses of the variables are limited.
	    
	
	                  EXPLAIN to Turtle Mode
	    
	    
	    
	    Explain turtle mode is the way you can add secondary words to the
	   turtles vocabulary.The explain mode has three main commands they
	   are show , forget and tell
	    
	            show                      show will have turtle display
            	                          the show subfunctions they are
										  find and all. find will ask for
										  the word to find if the word
										  exists it will be shown. all
	                                      will display All the secondary
                                   	      words in the JEM.DAT file all
										  the secondary words are in
										  memory for faster execution.
	           
	            show                       all  will display all
                                                secondary words
	            
	            show                       word  will find and display a
	                                             specific secondary word  
	    
	    
	            forget                     will have turtle forget the
	     								   secondary word. If you do not
										   use the end command to exit
										   turtle the word will still be
										   in the JEM.DAT file to make
										   forget changes permanent use
										   the end  command to exit JEM
										   and save all changes.
	             
	                 	  
	           
                tell                       tell turtle mode
						                   when you enter tell command
                                           turtle will let enter a
 	                                       secondary word  example
	                                       "wordd =forwd [10] rtrn [90];" 
	                                       all words must be 5 or more
	                                       characters long 

	    
	    	

                             RUN MODE



	    This is the normal mode of the turtle when you are in run mode
	   you will see the turtle in the center of the screen and the last
	   line of the screen you will see a 
	    ?                                             !
	    (Note command line is limited to 40 Chars input)
	    That is the command line all commands  are enter in the command
	   line. Enter a cs  command the turtle will clear the screen and 
	   home the turtle to the center of the screen. Enter a f [10] turtle
	   will move forward 10 spaces and leave a line from the start
	   position to the current position. Enter a r [90]  the turtle will
	   turn right 90 degrees. Enter a l [90]  the turtle will turn left
	   90 degrees.
	    If you enter a word the turtle does not know turtle will display
	   at the top of screen "I do not know the word 'xxxxx'" if you see
	   this line its means turtle did not find the word and can not do
	   that word check to see if the word  was misspelled or in fact does
	   exists in the secondary word file.
	    
	    Repeat Command    
	    Using the R command the Repeat command will make turtle perform
	   much faster. Repeat command will repeat all words after the R
	   until a "p" key is struck if the "p" key is struck repeat will
	   halt and wait until any other key is struck or the "s" key is
	   struck if the "s" key is struck the repeat will stop and the
	   turtle will return to run mode. The R command can be used in the
	   run mode on any word or it can be part of a secondary word.  
	    
	    
	    
	    Using the end command the end command exits JEM and saves all
	   secondary words into the file named JEM.DAT if you exit JEM
	   without using the end command any new secondary words are lost and
	   are not saved to the JEM.DAT file. If you create new secondary
	   words and you wish to save them use the end command. To create a
	   new JEM.DAT file simplify use the DOS copy con command leave one
	   blank line close the file with a F6. 
	                                  example copy con Jem.dat
	                                          blank line
	                                          ^z
	    
	    JEM can use only one data file at one time,the whole file is
	   entered in memory the reasoning behind this is to increase JEM
	   logo's speed of operation.
	    
	    Getting JEM to run faster to make JEM run at the fastest posible
	   speed use three characters or less for the primary words secondary
	   words can not be abbreviated nor can var1 or var2. An example of
	   the speed increase is enter a explain  command turtle will enter
	   explain mode hit the enter key turtle will return to the run mode
	   now enter exp turtle will enter explain mode much faster. The
	   speed increase is because of the way the interpreter checks each
	   word. When entering a secondary word using the shorthand word is
	   best way to get JEM to run at top speed.
	    
	     Try each primary word to see what its function is and purpose
	   is. 
	     When JEM enters run mode the turtle is set to pen down, wrap on
	   ,lineon , med and gohome. 

	    
	                   EXPLAIN MODE
	    
	    Explain mode is  the most powerful part of JEM explain lets the
	   user create their only words or commands. In run mode the entry of
	   a secondary word causes the turtle to perform the commands within
	   the secondary word. A secondary word can be a number of primary
	   words or number of secondary words or a combination of primary
	   words and secondary words. They may be in any order the in the
	   word itself but any secondary words must be previously defined in
	   the word list. To enter a secondary word in run mode just type in
	   the word and turtle will perform that definition as it would a
	   primary word.
	    Explain mode has three main subfunctions they are tell , show and
	   forget.
	    We will begin with the show command while in run mode enter the
	   command exp or explain. Turtle will enter explain mode you will
	   now see the line asking for one of the subfunctions.
	    Type in  show  turtle will now ask for the secondary word to find
	   or all. Enter the word all turtle will display all secondary words
	   currently defined. To display a current defined secondary word
	   type in the word exactly as it is (caps and lowercase) JEM will
	   then display the word and it definition.
	    The  forget command is used to remove secondary words from the
	   word list. In run mode enter exp or explain now in explain mode
	   enter the forget  command turtle will ask for a string enter in
	   the word you wish turtle to forget. Turtle will now not remember
	   that word to make the changes permanent while in run mode enter a
	   end  command. Turtle will rewrite the data file and the changes to
	   the secondary word list will be saved.

	    
	    
	    
	    
	    The tell command is used to define a secondary word all secondary
	    words must be five characters or longer. In run mode enter a exp
	    or explain command then enter tell command turtle will now enter
	   a edit mode. Enter the name of the word you wish to used followed
	   by a "=" then the definition.
	    Example :
	    
	            <space>wordd=<space>definition<;>
	    
	            wordd= f [10] r [90] ;
	    
	    This word after it is entered will now be a word turtle 'knows'
	    and can be used in the same way as you would use a primary word.
	     Return to run mode and enter the word "wordd" turtle will now
	   move forward ten spaces and turns 90 degrees to the right.
	    
	   Error Codes
	     There is only one (1) error code it is "I do not known the word
	   xx " . JEM will display this code if a word it can not find is
	   encountered. Check to see if the word is misspelled or in fact
	   does exist.

	    
	    
	   Limitations of JEM-LOGO
	    
	    The two biggest limitations of JEM are the number of data files
	    allowed currently one (1). And the size of the data file that is
	   about 48 K. JEM-Logo was made for the ages of about 5 years to 10
	   years old it is not meant to be all things to all people. My
	   daughter enjoys the program very much and my friends children also
	   enjoy the program.If the program is teaching the idea of
	   programming that is good. But its main purpose is to break down
	   any apprehension of computers I think young or old alike will get
	   some enjoyment of ordering the Turtle around the screen.
	     Also the HiRes mode of the turtle does not create true geometric
	   shapes. Try the word "shapes" it was created by my 6 year old.

	    
	    
	    Order Form
	    
	    
	        Please rush Me my Registered copy of JEM    
	    
	     	Last Name_______________________________
	    
	        First Name______________________________    
	       
	        Mailing Address_________________________
	    
	        City/State/Prov_________________________
	      
	        Zip/PosalCode___________________________
	      
	        Enclosed is the donation of Twenty dollars ($20.00)
	    
	          Mr. James Moriartey
	          174 Garnet Crescent
	          Wetaskiwin Alberta
	          Canada T9A-2S6
  
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0922

     Volume in drive A has no label
     Directory of A:\

    FILES922 TXT      2793  10-06-88   8:32a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1079   9-29-88   3:07p
    JEM      COM     30961   1-01-80   2:38a
    JEM      DAT      2203   9-01-88   3:16p
    JEM      DOC     23995   1-01-80   3:21a
    JEM2     DAT      2182   8-17-88  10:15a
    PRINTME  BAT       112   1-01-80  12:51a
    README            5782   1-01-80  12:34a
    README   1ST       728   1-01-80  12:45a
    TUTOR    JEM     23743   9-05-88  10:09a
    TUTOR    PRN     34335   9-05-88  10:10a
    WHOZWIZ  EXE     21504   1-01-80   1:23a
    WIZQUIZ  EXE     51712   1-01-80   1:25a
           14 file(s)     201167 bytes
                          112640 bytes free
