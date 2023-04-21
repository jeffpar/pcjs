---
layout: page
title: "PC-SIG Diskette Library (Disk #1801)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1801/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1801"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SAILSCOR"

    SAILSCOR is a very powerful and comprehensive sailboat race scoring
    program.  It's a quick and easy way to score sailboat races, print
    results and maintain seasonal standings.  It features automatic
    prompting of race results on a boat-by-boat basis, thereby eliminating
    the need to enter a boat's description more than once.  Ties are
    automatically broken using the standard tie breaking rules.  Multiple
    copies of the results are generated without a copier or running the
    program multiple times.
    
    Easy-to-use menus simplify each step, from the creation of a fleet, to
    the printing of individual race results, regatta results and seasonal
    standings.  This program also contains an extensive set of editing
    capabilities so that fleet information easily can be updated and
    corrected.  It uses the three standard methods of scoring races: the
    high point method, the low point method, and the olympic method.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1801.TXT

{% raw %}
```
Disk No: 1801                                                           
Disk Title: SailScor                                                    
PC-SIG Version: S2                                                      
                                                                        
Program Title: SailScor                                                 
Author Version: 2                                                       
Author Registration: $19.95                                             
Special Requirements: None.                                             
                                                                        
SAILSCOR is a very powerful and comprehensive sailboat race scoring     
program.  It's a quick and easy way to score sailboat races, print      
results and maintain seasonal standings.  It features automatic         
prompting of race results on a boat-by-boat basis, thereby eliminating  
the need to enter a boat's description more than once.  Ties are        
automatically broken using the standard tie breaking rules.  Multiple   
copies of the results are generated without a copier or running the     
program multiple times.                                                 
                                                                        
Easy-to-use menus simplify each step, from the creation of a fleet, to  
the printing of individual race results, regatta results and seasonal   
standings.  This program also contains an extensive set of editing      
capabilities so that fleet information easily can be updated and        
corrected.  It uses the three standard methods of scoring races: the    
high point method, the low point method, and the olympic method.        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## SAILSCOR.DOC

{% raw %}
```













                                S A I L S C O R

                        A Sailboat Race Scoring System



                                 USER'S MANUAL

                                   Version 2















                                     SOFTAB
                                  3782 Covert
                               Pontiac, MI  48054 
				 (313)673-3565













                          Copyright (C) SOFTAB 1989.
                             All Rights Reserved












	SAILSCOR					     Version 2







                               TABLE OF CONTENTS


	SHAREWARE CONCEPT  ......................................  1

	WARRANTY AND COPYRIGHT INFORMATION  .....................  3

	INTRODUCTION  ...........................................  4

	FETCHING A FLEET  .......................................  6

	CREATING A FLEET  .......................................  7

	UPDATING A FLEET ........................................  9

	LISTING A FLEET   ....................................... 13

	RECORDING A FLEET  ...................................... 14

	SCORING A FLEET  ........................................ 15

	PRINTING A SCORED FLEET  ................................ 17

	DEFINING DISPLAY COLORS  ................................ 18

	ENDING THE PROGRAM  ..................................... 20

	COMMON PROBLEMS   ....................................... 21

	PROBLEM/SUGGESTION FORM   ............................... 23

	INDEX  .................................................. 24

	ENHANCEMENTS  ........................................... 25



















	Copyright (C) SOFTAB 1989.			             i




	SAILSCOR					     Version 2
        
        
	SHAREWARE CONCEPT

	Shareware software is a unique approach to software retailing
	in which consumers purchase software directly from the author.
	This eliminates costly marketing, promotion and packaging,
	allowing consumers to obtain quality software at a fraction of
	the commercial cost.

	Shareware users are encouraged to examine a program, copy it,
	and pass it on to friends and co-workers.  If the software
	program fulfills the users' needs, they are required to
	register it with the software author.  This usually means
	paying a registration fee directly to the shareware author.
	In return for this fee, full documentation, technical support
	and updated versions of the program are usually provided.

	The authors of shareware retain all rights to the software
	under the copyright laws and simply allow distribution of
	their programs to be done freely.

	If you use a piece of software and are going to depend upon it,
	the registration fee is an inexpensive way to:
	
     	  * Ensure that you have the support of the author.
     	  * Ensure that you know about updates, bug notices and fixes.
          * Allow the authors to make their software even better.

	The advantages of shareware are real.  You get an opportunity
	to test the software on your computer to make sure it is
	compatible with your system and to make sure that it performs
	to your satisfaction before you "buy" it with your
	registration.

	SAILSCOR represents many months of development.  I urge you to
	support shareware and help fight the high cost of software.

	SAILSCOR is a shareware program.  It is not public domain
	software and is not free.  You are granted a limited license
	to use SAILSCOR on a trial basis.  If you find SAILSCOR meets
	your needs, you must register it by filling out the form on
	the next page and send it to us.

	Whether you register this program or not, you are encouraged
	to share it with others.  It has been thoroughly tested, but
	if you find any problems or have any ideas on how to improve
	it, please let us know by using the form found in the section
	entitled "PROBLEM/SUGGESTION FORM".











        Copyright (C) SOFTAB 1989.			             1




        SAILSCOR					     Version 2






                             SAILSCOR Registration


	Please register SAILSCOR to the following person/company.
	
	We will use ____ copies of the program and have enclosed 
	$________ for each copy to be used.

	**************************************************************

	_____ Registration only .............................   $19.95
	_____ Registration and program disk .................   $24.95

	_____ Update of the latest version of SAILSCOR ......   $ 9.95

	**************************************************************


        Name: ________________________________________________________

        Company: _____________________________________________________

        Address: _____________________________________________________

                 _____________________________________________________

        City: ______________________________  	State: _______________

        Zip:  ______________________

	I would like my copy of SAILSCOR on a __ 5 1/4" diskette.
	                                      __ 3 1/2" diskette.


	I obtained my copy of SAILSCOR from: _________________________

        


              Send to:
                      SOFTAB
                      3782 Covert
                      Pontiac,  MI  48054











	Copyright (C) SOFTAB 1989.			             2


          
          
	SAILSCOR					     Version 2


	WARRANTY AND COPYRIGHT INFORMATION

	SOFTAB makes no warranty of any kind, express or implied,
	including without limitation, any warranties of merchantability
	and/or fitness for any specific application or use.  SOFTAB
	shall not be liable for ANY loss or damage arising from a
	failure of this program to operate in the manner described, or
	in a manner desired by the user.  SOFTAB shall not be liable
	for any damage to data or property which may be caused directly
	or indirectly by use of the program.

	IN NO EVENT SHALL SOFTAB OR IT'S SUPPLIERS BE LIABLE FOR ANY
	CONSEQUENTIAL, INCIDENTAL OR EXEMPLARY DAMAGES INCLUDING, BUT
	NOT LIMITED TO LOSS OF PROFITS OR REVENUES, LOSS OF USE OF ANY
	PRODUCT, SERVICE OR REPLACEMENT COSTS, OR CLAIMS BY ANY THIRD
	PARTY.

	This version of SAILSCOR may be copied and distributed freely,
	with the following restrictions:
	
	   1)  The program and documentation may not be modified. 
	   2)  The entire documentation file must be included with the
	       program
	   3)  No fee for the program may be charged outside of a
	       reasonable and customary charge for diskette media,
	       copying and/or shipping.
	   4)  It may not be packaged or sold in conjunction with any
	       other product.

	The software code and screen displays used in SAILSCOR are the
	sole property of SOFTAB, and may not be copied, in any form,
	in whole or in part, or included in any other program or
	document without the express written permission of SOFTAB.

























	Copyright (C) SOFTAB 1989.                                   3
          
          


	SAILSCOR					     Version 2


	INTRODUCTION

	SAILSCOR is a very powerful and comprehensive sailboat race
	scoring program.  It's a quick and easy way to score sailboat
	races, print results and maintain seasonal standings.  It
	features automatic prompting of race results on a boat by boat
	basis, thereby eliminating the need to enter a boats description
	more than once.  Ties are automatically broken by the program
	using the standard tie breaking rules.  Multiple copies of the
	results are generated without a copier or running the program
	multiple times.
	
	Easy to use menus simplify each step of operation from the
	creation of a fleet to the printing of individual race results,
	regatta results and seasonal standings.  This program also
	contains an extensive set of editing capabilities so that fleet
	information can be easily updated and corrected.  It also
	contains the three standard methods of scoring races: (1) the
	HIGH POINT method, (2) the LOW POINT method, (3) the OLYMPIC
	method.  It has the capability to support any number of fleets.
	Each fleet can contain as many as 200 boats and 100  races.  A
	sample fleet file(SAILSCOR.FLT) is supplied for your use.  It
	contains 10 boats and 5 races.  Use it to become familiar with
	this program.
	
	The files associated with this program are:
		SAILSCOR.EXE - The program itself.
		SAILSCOR.DOC - The Users Manual.
		SAILSCOR.FLT - A sample fleet.
	This program will run on any PC Compatible system(XT or AT).
	It requires an 80 column display(MONO or COLOR).
	It also requires an 80 column ASCII printer(EPSON, etc.)
	
	To start the program, you merely enter SAILSCOR.
	
	When this program is started, a menu is displayed containing
	all the major functions.  This menu is referred to as the 
	"main menu".   It is displayed as:
		ENTER (C) TO CREATE A FLEET
		      (D) TO DEFINE DISPLAY COLORS
		      (E) TO END
		      (F) TO FETCH A FLEET
		      (L) TO LIST A FLEET
		      (P) TO PRINT SCORES
		      (R) TO RECORD A FLEET
		      (S) TO SCORE A FLEET
		      (U) TO UPDATE A FLEET
		      
	Program errors do occasionally occur. Please report all  
	program errors to us using the PROBLEM/SUGGESTION FORM at the 
	end of this manual.  These errors are typically denoted by the 
	message "*** ERROR e AT LINE l ***".  This message is followed
	by the prompt:
		ENTER (C) TO CONTINUE, (R) TO RETRY OR (E) TO END?
	I suggest that you reply with an "E" unless you believe that  
	it can be retried(R) or continued(C) without causing any 
	additional loss of data.  
	
	Copyright (C) SOFTAB 1989.			       	     4




	SAILSCOR				             Version 2


	We would appreciate you notifying us of any and all problems 
	which generate this message, even if they are caused by some 
	action of yours.  This way we can warn other users of the type 
	of actions which generate these errors.  We may also be able 
	to prevent them through some program modifications.

	The BREAK(Ctrl & Pause) and ESC keys interrupt and terminate 
	the program regardless of what's happening.  Use them ONLY
	when you have to.  Nothing is saved when they are used.
 	
 	To create a new fleet, the sequence of operations is as 
	follows:
		1.  Select the C(TO CREATE A FLEET) function from the
		    main menu.
		2.  Once you've completed creating a fleet, select the 
		    R(TO RECORD A FLEET) function from the main menu
		    which saves on disk the fleet that you've created.
		    
	To update/modify an existing fleet, the sequence of operations 
	is as follows:
		1.  Select the F(TO FETCH A FLEET) function from the
		    main menu.  This will get the fleet data from disk
		    and make it available for editing.
		2.  Select the U(TO UPDATE A FLEET) function from the
		    main menu to update/modify the fleet.
		3.  Select the appropriate updating options from the
		    UPDATE menu(see the section titled "UPDATING A
		    FLEET").
		4.  Once all your updates have been completed, select
		    the E(TO END) function from the UPDATE menu.
		5.  And finally, select the R(TO RECORD A FLEET)
		    function from the main menu which saves your 
		    changes on disk.
	
	To display/print an existing fleet, the sequence of operations 
	is as follows:
		1.  Select the F(TO FETCH A FLEET) function from the
		    main menu.  This will get the fleet data from disk
		    and make it available for editing.
		2.  Select the L(TO LIST A FLEET) function from the
		    main menu to display/print the fleet.
		3.  See the section titled "LISTING A FLEET" to 
		    determine how to display/print fleet data.
		    
	To score an existing fleet, the sequence of operations 
	is as follows:
		1.  Select the F(TO FETCH A FLEET) function from the
		    main menu.  This will get the fleet data from disk
		    and make it available for editing.
		2.  Select the S(TO SCORE A FLEET) function from the
		    main menu to score the fleet.
		3.  See the section titled "SCORING A FLEET" to 
		    determine how to score a fleet.
		4.  Once you've scored the fleet, you can display or
		    print it.  See the section titled "PRINTING A
		    SCORED FLEET.


	Copyright (C) SOFTAB 1989.			             5




	SAILSCOR				             Version 2


	FETCHING A FLEET
	
	The function "FETCH A FLEET" fetches a fleet file from disk.
	
	The first display message you may see is:
		FLEET MODIFIED SINCE LAST SAVED,
		DO YOU WISH TO CONTINUE(Y/N)?
	This message indicates that a fleet is presently active and 
	has been modified, but wasn't recorded since the 
	modification.  If you do not want to lose the modifications, 
	reply N(no) to the prompt.  This will redisplay the main menu. 
	Select the R(record) function to save the current fleet 
	modifications.  If the modifications weren't meant to be 
	saved, reply Y(yes) to the prompt.
	
	Next, the names of all the existing fleets are displayed.  If
	no fleets exist, the message "*** NO FLEET AVAILABLE ***" is
	displayed along with the "PRESS (ENTER) TO CONTINUE? " prompt.
	The main menu will be displayed once any key is depressed.
	
	If fleets exist, the prompt:
		ENTER FLEET NAME(8 CHARACTERS MAXIMUM)?
	will appear.  Type the name of the fleet you want fetched.  
	If you don't want to execute this function, i.e., it was 
	selected inadvertently, reply with "END".  The main menu will 
	reappear.
	
	The "*** FETCHING FLEET ***" message will appear indicating 
	that the fleet is being fetched.  If the fleet doesn't exist, 
	the "ENTER FLEET NAME" prompt will reappear instead of the 
	"FETCHING FLEET" message.
	
	Next, the fleet name, creation date and date last modified are 
	displayed "xxxxxxxx FLEET CREATED mm/dd/yy UPDATED mm/dd/yy".
	Then the following prompt appears:
		IS THIS THE RIGHT FLEET (Y/N)?
	If this is the correct fleet, reply with a Y(yes).  The 
	message "xxx FLEET FETCHED" is displayed along with the 
	"PRESS (ENTER) TO CONTINUE? " prompt.  The main menu will
	be displayed once any key is depressed.
	
	If this isn't the correct fleet, reply with a N(no) and the 
	"ENTER FLEET NAME" prompt will appear.















	Copyright (C) SOFTAB 1989.			             6




	SAILSCOR				             Version 2
	
	
	CREATING A FLEET
	
	The function "CREATE A FLEET" creates a "new" fleet in memory. 
	Remember to "RECORD" it once you've finished creating it.
	  
	The first display message you may see is:
		FLEET MODIFIED SINCE LAST SAVED,
		DO YOU WISH TO CONTINUE(Y/N)?
	This message indicates that a fleet is presently active and 
	has been modified, but wasn't recorded since the 
	modification.  If you do not want to lose the modifications, 
	reply N(no) to the prompt.  This will redisplay the main menu. 
	Select the R(record) function to save the current fleet 
	modifications.  If the modifications weren't meant to be 
	saved, reply Y(yes) to the prompt.
	
	Next, it will ask you to:
		ENTER FLEET NAME(8 CHARACTERS MAXIMUM)?
	Respond with the name of the fleet.  This name will be the 
	disk file name.  The disk file extension is automatically set 
	to ".DAT".
	
	If the fleet already exists, you will see the following 
	message:
		*** xxxxxxxx FLEET EXISTS ***
		DO YOU WANT IT REPLACED (Y/N)?
	If you respond with a Y(yes), the existing fleet will be 
	replaced with the one you are creating.  If you respond with a 
	N(no), the file creation function will be terminated and you 
	will be returned to the main menu.
	
	Next, you will be prompted for a fleet title:
		ENTER FLEET TITLE?
	Type the title of the fleet.  This title is stored with the 
	fleet data and appears on the display and printed listings.
	
	Next, you will see the following prompt:
		DO YOU WANT EACH ENTRY LISTED AFTER INPUT (Y/N)?
	If you respond with a Y(yes), then the boats description and 
	finish positions will be displayed after the last finish 
	position is typed for that boat.
	
	Next, you will be prompted for the names/descriptions of the 
	boats in the fleet along with their finish positions.  The 
	boat name prompt is:
	    ENTER BOAT DESCRIPTION(20 CHARACTERS MAXIMUM) OR (END)?
	Type the description of the boat(name, number, etc.).  The  
	format of the description is up to you.  However, I would be 
	consistent for all the descriptions in a fleet or group of 
	fleets.
	







	Copyright (C) SOFTAB 1989.			             7




	SAILSCOR				             Version 2


	Next, you will be prompted for the boats finish positions:
		ENTER POSITION IN RACE x OR (END)?
	This prompt will be continued being issued for each race
	starting with race 1 until you type "END".  If you have 3 
	races to type, then you should type the boats actual finish 
	positions(example: 1,3,5) for races 1 through 3 and type 
	"END" for race 4.
	
	After you type "END" to the "ENTER POSITION" prompt, the 
	"ENTER BOAT DESCRIPTION" prompt will be displayed again. Type 
	the description of the next boat. The "ENTER POSITION" prompt  
	will reappear.  This sequence of events will continue until you 
	have typed the description and positions of the last boat. 
	When the "ENTER BOAT DESCRIPTION" prompt appears, type 
	"END".  This will complete the fleet creation function.
	
	The "xxxxxxxx FLEET CREATED" message will be displayed and the 
	"PRESS ENTER TO CONTINUE?" prompt will be displayed.  Pressing 
	any key will return you to the main menu.
	
	At this point you can update anything that was left out or 
	typed incorrectly by selecting the "UPDATE" function.  
	However, it might be a good idea to record the created fleet 
	before making any additional changes.


































	Copyright (C) SOFTAB 1989.			             8




	SAILSCOR				             Version 2


	UPDATING A FLEET
	
	The function "UPDATE A FLEET" is utilized to update an 
	existing fleet.  The fleet should have been previously fetched 
	or created.  If not, the first message you will see will be:
		*** NO FLEET AVAILABLE ***
		PRESS (ENTER) TO CONTINUE?
	Once you press a key, the main menu will appear and you should 
	fetch a fleet.
	
	When a fleet is available, the following menu appears:
		ENTER (A) TO ADD A BOAT
		      (C) TO CHANGE BOAT DESCRIPTION
		      (D) TO DELETE A BOAT
		      (E) TO END
		      (T) TO CHANGE TITLE
		      (U) TO UPDATE RACES
	Select the function you desire.
	
	
	ADD A BOAT:
		The A(ADD A BOAT) function allows you to add a new 
		boat to the fleet.  The first prompt is:
		    DO YOU WANT EACH ENTRY LISTED AFTER INPUT (Y/N)?
		If you respond with a Y(yes), then the boats
		description and finish positions will be displayed
		after you add each new boat and its finish positions.
		It is typically used to verify that the correct 
		description and finish positions were typed.
		
		Next, you may see the following prompt:
			*** FLEET FULL ***
			PRESS (ENTER) TO CONTINUE?
		This message indicates that there are already 200 
		boats in the fleet and another one cannot be added.  
		Once you depress any key, the main UPDATE menu will be 
		displayed.
		
		Next, you will be prompted for the name/description of
		the boat to be added with:
		ENTER BOAT DESCRIPTION(20 CHARACTERS MAXIMUM) OR (END)?
		Type the description of the boat(name, number, etc.). 
		The format of the description is up to you. However, I 
		would keep it consistent with all the other boat 
		descriptions in the fleet.  If you don't want to add a 
		boat, respond to the prompt with "END".  You will be 
		returned to the main UPDATE menu.
		
		Next, you will be prompted for the boats finish 
		positions with:
			ENTER POSITION IN RACE x OR (END)?
		This prompt will continue being issued for each race 
		starting with race 1 until you type "END".  If you 
		have 3 races to type, then you should type the boats 
		actual finish positions(example: 1,2,3) for races 1 
		through 3 and type "END" for race 4.
		
	
	Copyright (C) SOFTAB 1989.			             9




	SAILSCOR				             Version 2


		If you type an invalid position, such as "A", the 
		message "*** INVALID FINISH POSITION ***" will be 
		displayed and you will be prompted for the finish 
		position of that race again.
		
		After you type "END", the boat description and finish 
		positions will be displayed if you answered "Y" to the 
		"...WANT EACH ENTRY LISTED..." prompt mentioned 
		previously.
		
		Next, you will be prompted for the next boat to be 
		added.  This sequence of events will be repeated until 
		you reply with "END" to the boat description prompt.  
		Once you reply with "END", you will be returned to the 
		main UPDATE menu.
		
		
	CHANGE BOAT DESCRIPTION:
		The C(CHANGE BOAT DESCRIPTION) function allows you 
		to change the description of any boat in the fetched 
		fleet.  You will be requested to type the current 
		description with:
			ENTER CURRENT BOAT DESCRIPTION OR (END)?
		Type the description "EXACTLY" as it exists in the 
		fleet.  If the description cannot be found, the 
		message "*** BOAT NOT FOUND ***" is displayed along 
		with the "PRESS (ENTER) TO CONTINUE?" prompt.  Respond 
		by depressing any key and you will be returned to the 
		"ENTER CURRENT BOAT ...." prompt.  If the boat is 
		found, you will be requested to type the new 
		description with:
		   ENTER NEW BOAT DESCRIPTION(20 CHARACTERS MAXIMUM)?
		Type the new description.  If you type more than 20 
		characters, your description will be truncated to 20 
		characters.  If you answered "Y" to the "DO YOU WANT 
		EACH ENTRY LISTED AFTER INPUT" prompt, the new boat 
		description and finish positions will be displayed.  
		Then, you will be prompted for the next boat
		description to be changed.  This sequence of events 
		will be repeated until you reply with "END" to the 
		boat description prompt.  Once you reply with "END", 
		you will be returned to the main UPDATE menu.


	DELETE A BOAT:
		The D(DELETE A BOAT) function allows you to delete a 
		boat from the fetched fleet.  You will be requested to 
		type the description of the boat you want to delete 
		with:
		ENTER BOAT DESCRIPTION(20 CHARACTERS MAXIMUM) OR (END)?
		Type the description exactly as it exists in the 
		fleet.  If the description cannot be found, the 
		message "*** BOAT NOT FOUND ***" is displayed along 
		with the "PRESS (ENTER) TO CONTINUE?" prompt.  Respond 
		by depressing any key and you will be returned to the 



	Copyright (C) SOFTAB 1989.			            10




	SAILSCOR				             Version 2


		"ENTER BOAT DESCRIPTION" prompt.  If the boat is 
		found, it is deleted and you are returned to the
		"ENTER BOAT DESCRIPTION" prompt.  When you have 
		deleted all the boats you want to delete, reply with 
		"END" and you will be returned to the main UPDATE menu.
		
		
	END:
		The E(END) function allows you to exit the UPDATE 
		function and return to the main menu.

		
	CHANGE TITLE:
		The T(CHANGE TITLE) function allows you to change the 
		title of the fleet.  You will be prompted for the new 
		title with:
			ENTER NEW FLEET TITLE OR (END)?
		Type the new fleet title or "END" if you don't want a 
		new title.  The title should be no longer than 70 
		characters.  After you've typed a new title or 
		"END", you will be returned to the main UPDATE menu.
		
		
	UPDATE RACES:
		The U(UPDATE RACES) function allows you to update the 
		finish positions of selected boats or the whole fleet  
		for any individual race or group of races.
		
		The first prompt is:
			DO YOU WANT EACH ENTRY LISTED AFTER INPUT (Y/N)?
		If you respond with a Y(yes), then the boats
		description and finish positions will be displayed
		after you update each boats finish positions.  It is
		typically used to verify the finish positions typed.
		
		The next prompt:
			DO YOU WANT BOAT DESCRIPTION PROMPTING (Y/N)?
		asks you if you want the program to update the entire 
		fleet by prompting you for each boats finishes.  If 
		you respond with a Y(yes), the program will prompt you 
		with each boats description, otherwise, you will be 
		prompted for each boats description.  When you are 
		updating an entire fleet, you should utilize the 
		automatic prompting.  When you merely need to correct 
		an individual boat or a few boats, there is no need to
		use the automatic prompting.
		
		Next, you will be prompted for the starting and ending 
		race numbers for which changes are to be made if you 
		selected automatic boat prompting. The starting and 
		ending race numbers cannot be less than 1 or greater 
		than 100.  Also, the ending race number cannot be less 
		than the starting race number.  If you type an 
		incorrect number, the prompts are reissued.
		
		


	Copyright (C) SOFTAB 1989.			            11




	SAILSCOR				             Version 2


		Next, the fleet is checked to see if it contains any 
		boats.  If there aren't any boats in the fleet, the 
		message "*** NO BOATS IN FLEET ***" is displayed along 
		with the "PRESS (ENTER) TO CONTINUE?" prompt.  Once 
		you depress any key, you will be returned to the 
		UPDATE FLEET menu.
		
		If you have selected automatic boat prompting, the 
		following sequence of events will occur:
			1) A boat description will be displayed
			2) The "ENTER FINISH POSITION IN RACE x"
			   prompt will be displayed. Reply with 
			   the finish position for the boat and race 
			   requested.  If an invalid response is 
			   found, the prompt is reissued.
			3) Step 2 is continued until the finish for the
			   ending race is supplied.
			4) The boat description and finish positions 
			   are displayed if the "LIST ENTRY AFTER INPUT" 
			   option was selected.  Execution continues 
			   with Step 1 until the "END OF FLEET" 
			   message is displayed.
			   
		If you did not select automatic boat prompting, the 
		following sequence of events will occur:
			1) The "ENTER BOAT DESCRIPTION(20 CHARACTERS 
			   MAXIMUM) OR (END)?" prompt is displayed.  If 
			   you respond with "END", you are returned to 
			   the UPDATE A FLEET menu.  Otherwise, type a 
			   boat description.
			2) The boat is searched for.  If the boat 
			   isn't found, the "*** BOAT NOT FOUND ***" 
			   message is displayed along with the "PRESS 
			   (ENTER) TO CONTINUE?" prompt.  You're then 
			   returned to Step 1.  If the boat is found,  
			   the "ENTER FINISH POSITION OR (END)?" prompt 
			   is displayed.  Type the finish position or 
			   "END" if you've typed all the finish 
			   positions for this boat.  If "END" is 
			   typed, (1) the boat description and finish 
			   positions are displayed if the "LIST ENTRY 
			   AFTER INPUT" option was selected and (2) you
			   are returned to Step 1.
			3) The "ENTER RACE NUMBER?" prompt is 
			   displayed.  Type the number of the race 
			   for the previously typed finish position. 
			   If the race number is invalid, this step is 
			   repeated.  Execution continues with Step 1.
		









	Copyright (C) SOFTAB 1989.			            12




	SAILSCOR				             Version 2


	LISTING A FLEET
	
	The function "LIST A FLEET" lists a fetched fleet on the 
	display or the printer.
	
	The function verifies that a fleet has been fetched.  If a 
	fleet hasn't been fetched, the message "*** NO FLEET 
	AVAILABLE ***" is displayed along with the "PRESS (ENTER) TO 
	CONTINUE?" prompt.  The main menu is displayed once a key is 
	depressed.
	
	Next, the prompt:
		DO YOU WANT THE LISTING ON THE PRINTER (Y/N)?
	is displayed.  Respond with a Y(yes) if you want the listing 
	printed or a N(no) if you want the listing displayed.
	
	If you elect to  have it displayed, the message "DEPRESS ANY
	KEY TO FREEZE DISPLAY, THEN DEPRESS ANY KEY TO RESUME" is
	displayed.  This allows you to temporarily "freeze"
	the display for easy viewing.  The races are then displayed.
	
	If you elect to have it printed, be sure your printer is
	ready.  The message "*** LISTING ***" is displayed and the
	fleet is printed.  After the last entry is displayed or
	printed, the message "LISTING COMPLETE" is displayed along
	with the "PRESS (ENTER) TO CONTINUE?" prompt.  Depressing any
	key will return you to the main menu.
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	





	
	
	
	
	
	
	
	
	Copyright (C) SOFTAB 1989.			            13




	SAILSCOR				             Version 2


	RECORDING A FLEET
	
	The function "RECORD A FLEET" records a fetched fleet in a 
	file named (fleet name).FLT in the directory you currently 
	reside in.
	
	This function verifies that a fleet has been fetched.  If a 
	fleet hasn't been fetched, the message "*** NO FLEET AVAILABLE 
	***" is displayed along with the "PRESS (ENTER) TO CONTINUE?" 
	prompt.  The main menu is displayed once any key is depressed.
	
	The message "*** RECORDING FLEET ***" is displayed while the 
	fleet data is being recorded.  The "FLEET RECORDED" message
	appears along with the "PRESS (ENTER) TO CONTINUE?" prompt
	when the recording is complete.  The main menu is displayed
	once any key is depressed.










































	Copyright (C) SOFTAB 1989.			            14




	SAILSCOR				             Version 2


	SCORING A FLEET
	
	The function "SCORE A FLEET" scores a fetched fleet based on 
	the various scoring options selected.
	
	The function verifies that a fleet has been fetched.  If a 
	fleet hasn't been fetched, the message "*** NO FLEET 
	AVAILABLE ***" is displayed along with the "PRESS (ENTER) TO 
	CONTINUE?" prompt.  The main menu is displayed once a key is 
	depressed.
	
	The starting and ending race numbers are prompted for with the 
	following prompts:
		ENTER STARTING RACE NUMBER?
		ENTER ENDING RACE NUMBER?
	If invalid numbers are typed, the prompts will reappear 
	until correct numbers are typed.
	
	Next, the number of races to be thrown out are prompted for:
		ENTER NUMBER OF THROW-OUTS ALLOWED?
	If an invalid number is typed, the prompt will reappear
	until a valid number is typed.
	
	Then the scoring method will be prompted for with:
		ENTER (H) FOR HIGH POINT SCORING
		      (L) FOR LOW POINT SCORING
		      (O) FOR OLYMPIC SCORING
	An invalid entry will cause the prompt to reappear until a 
	valid entry is typed.
	
	The final prompts have to do with the point values assigned to 
	uncompleted races(DNC(Did Not Compete), DNS(Did Not Start), 
	DNF(Did Not Finish, DSQ(DiSQualified)).  They are:
		DNC = # OF COMPETITORS + ?
		DNS = # OF COMPETITORS + ?
		DNF = # OF COMPETITORS + ?
		DSQ = # OF COMPETITORS + ?
	An invalid number will cause the appropriate prompt to reappear
	until a valid number is typed.
	
	The scoring program verifies that there are consecutive 
	finish positions for all the boats that finished the race.  
	This is denoted by the "*** CHECKING FINISH POSITIONS ***" 
	message.  If a tie occurs, i.e., two boats have the same 
	finish position, a message will be displayed indicating a 
	missing finish position.  For example, suppose that for race  
	5 there were six finishers and that their positions were 1, 2, 
	3, 4, 4, 5.  The message "*** NO FINISH POSITION 6 IN RACE 5 
	***" would be displayed followed by the "PRESS (ENTER) TO 
	CONTINUE?" prompt.
	
	Once the verification is completed, the fleet is scored.  This 
	is denoted by the "*** SCORING ***" message.
	
	All the boats are scored according to the type of scoring 
	technique you selected(HIGH POINT, LOW POINT, OLYMPIC).


	Copyright (C) SOFTAB 1989.			            15




	SAILSCOR				             Version 2


	After the scoring has been completed, all the ties are settled
	by the standard tie-breaking criteria:
		The boat with the most number of firsts, seconds, etc.
			is the winning boat.
		If a tie still exists, the boat that beat the other
			boat the most number of times is the winner.
		If a tie still exists, the boat that beat the other 
			boat in the last race that they raced together
			is the winner.
	Be sure to manually verify all ties.  Many times the manner in 
	which ties are broken varies from sail club to sail club.
	There's nothing worse than discovering an error in the scoring 
	after the trophies have been awarded.  If you need another
	method of breaking ties, please let me know.
		
	The boats are then sorted according to their overall places 
	and the "SCORING COMPLETE" message is displayed followed by
	the "PRESS (ENTER) TO CONTINUE?" prompt.  Once any key is
	depressed, the main menu is displayed.







































	Copyright (C) SOFTAB 1989.			            16




	SAILSCOR				             Version 2


	PRINTING A SCORED FLEET
	
	The function "PRINT SCORES" displays or prints a scored 
	fleet.
	
	The function verifies that a fleet has been scored.  If a 
	fleet hasn't been scored, the message "*** NO SCORES 
	AVAILABLE ***" is displayed along with the "PRESS (ENTER) TO 
	CONTINUE?" prompt.  The main menu is displayed once a key is 
	depressed.
	
	Next, the prompt:
		DO YOU WANT THE LISTING ON THE PRINTER (Y/N)?
	is displayed.  Respond with a Y(yes) if you want the listing 
	printed or a N(no) if you want the listing displayed.
	
	If you elect to have it displayed, the message "DEPRESS ANY KEY
	TO FREEZE DISPLAY, THEN DEPRESS ANY KEY TO RESUME" is displayed.
	This allows you to temporarily "freeze" the display for easy 
	viewing.  The races are then displayed.
	
	If you elect to have it printed, be sure your printer is
	ready.  The message "*** LISTING ***" is displayed and the
	scored fleet is printed.  Once the listing is printed, the
	message"DO YOU WANT ANOTHER LISTING (Y/N)?" is displayed.
	Reply with a Y(yes) to get another listing or N(no) to
	terminate the printing of another listing.
	
	After the listing is printed, the message "LISTING COMPLETE"
	is displayed along with the "PRESS (ENTER) TO CONTINUE?"
	prompt.  Depressing any key will return you to the main menu.
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	Copyright (C) SOFTAB 1989.			            17




	SAILSCOR				             Version 2


	DEFINING DISPLAY COLORS
	
	The function "DEFINE DISPLAY COLORS" allows you to define the 
	display colors you desire for the foreground, background, 
	prompting line and title line.
	
	The following function menu is displayed:
		ENTER (B) TO CHANGE BACKGROUND COLOR(x)
		      (C) TO CHANGE CURSOR(x)
		      (E) TO END
		      (F) TO CHANGE FOREGROUND COLOR(x)
		      (P) TO CHANGE PROMPTING LINE COLOR(x)
		      (T) TO CHANGE TITLE LINE COLOR(x)
	The x represents the current color number for each particular
	color type or the cursor character.  Select the function you
	desire.
	
	CHANGE BACKGROUND COLOR:
		The following prompt is displayed:
			ENTER BACKGROUND COLOR NUMBER (0-7)?
		Enter the number of the color you want for the 
		background.
		  	
	CHANGE CURSOR:
		The following prompt is displayed:
			ENTER CURSOR CHARACTER?
		Enter the character you want for the cursor.  After
		you enter the character you want, the prompt:
			DO YOU WANT THE CURSOR TO BLINK(Y/N)?
		will be displayed.  Enter a Y if you want the cursor
		to blink, otherwise enter an N.  	

	END:
		The E(END) function allows you to exit the DEFINE 
		DISPLAY COLORS function and return to the main menu.
	
	CHANGE FOREGROUND COLOR:
		The following prompt is displayed:
			ENTER FOREGROUND COLOR NUMBER (0-31)?
		Enter the number of the color you want for the 
		foreground.  	

	CHANGE PROMPTING LINE COLOR:
		The following prompt is displayed:
			ENTER PROMPTING LINE COLOR NUMBER (0-31)?
		Enter the number of the color you want for the 
		prompting line.  	

	CHANGE TITLE LINE COLOR:
		The following prompt is displayed:
			ENTER TITLE LINE COLOR NUMBER (0-31)?
		Enter the number of the color you want for the 
		title line.  	





	Copyright (C) SOFTAB 1989.			            18




	SAILSCOR				             Version 2


	Typical colors are:
		0 = Black 	 8 = Gray
		1 = Blue	 9 = Light Blue
		2 = Green	10 = Light Green
		3 = Cyan	11 = Light Cyan
		4 = Red		12 = Light Red
		5 = Magenta	13 = Light Magenta
		6 = Brown	14 = Light Yellow
		7 = White	15 = High Intensity White
		
		The color numbers 16-31 provide for blinking colors 
		0-15, i.e., color 16 = blinking black, 17 = blinking 
		blue, etc.
		
	The colors and cursor you define are kept and utilized each
	time you run this program.  
	
	These colors and cursor are kept in a file called SAILSCOR.CFG
	in the directory you currently reside in.







































	Copyright (C) SOFTAB 1989.			            19




	SAILSCOR				             Version 2


	ENDING THE PROGRAM
	
	The function "END" allows you to quit(end, exit) the SAILSCOR 
	program.
	
	If you END and haven't recorded a fleet after modifying it, 
	the prompt:
		*** FLEET MODIFIED SINCE LAST SAVED,
		DO YOU WISH TO CONTINUE(Y/N)?
	is displayed.  If you respond with a Y(yes), the program will 
	end and your modifications will be LOST, LOST, LOST.  If you
	respond with a N(no), the main menu will be displayed.  This
	allows you to select the "RECORD A FLEET" function and save
	your modifications.












































	Copyright (C) SOFTAB 1989.			            20




	SAILSCOR				             Version 2


	COMMON PROBLEMS
	
	Several problems are common to most users.  I have listed 
	several here.  If you encounter any others, please report them 
	to me using the "PROBLEM/SUGGESTION" form in the section 
	titled "PROBLEM/SUGGESTION FORM".
	
	FLEET MODIFIED SINCE LAST SAVED,
	DO YOU WISH TO CONTINUE(Y/N)?
		This message indicates that a fleet is presently active
		and has been modified, but wasn't recorded since the 
		modification.  If you do not want to lose the
		modifications, reply N(no) to the prompt.  This will
		redisplay the main menu. Select the R(TO RECORD A FLEET)
		function to save the current fleet modifications.  If
		the modifications weren't meant to be saved, reply Y
		(yes) to the prompt.
	
	*** xxxxxxxx FLEET EXISTS ***
	DO YOU WANT IT REPLACED (Y/N)?
		This message indicates that you are trying to replace 
		an existing fleet with a newly created fleet.  If you
		respond with a Y(yes), the existing fleet will be 
		replaced with the one you are creating.  If you respond
		with a N(no), the file creation function will be
		terminated, the existing fleet will not be replaced and
		you will be returned to the main menu.
	
	*** BOAT NOT FOUND ***
	PRESS (ENTER) TO CONTINUE?
		This message indicates that you typed a boat description
		that did not "EXACTLY" match any boat description in 
		the currently fetched fleet.  Respond by depressing any
		key and you will be returned to the "ENTER CURRENT BOAT
		...." prompt. Then type in the correct/exact description.
		  
	*** ERROR e AT LINE l ***
	ENTER (C) TO CONTINUE, (R) TO RETRY OR (E) TO END?
		This message indicates a program error.  I suggest that
		you reply with an "E" unless you believe that it can be
		retried(R) or continued(C) without causing any 
		additional loss of data.  
	
	*** FLEET FULL ***
	PRESS (ENTER) TO CONTINUE?
		This message indicates that there are already 200 
		boats in the fleet and another one cannot be added.  
		Once you depress any key, the main UPDATE menu will be 
		displayed.  If you need more than 200 boats in a 
		fleet, please let me know.  I really didn't expect 
		anyone to require more than 200.
		
	*** INVALID FINISH POSITION ***
		This message  appears if you type an invalid position,
		such as an "A".  You will be prompted for the finish		
		position of that race again.
		
		
	Copyright (C) SOFTAB 1989.			            21




	SAILSCOR				             Version 2


	*** NO BOATS IN FLEET ***
	PRESS (ENTER) TO CONTINUE?
		This message indicates that you are trying to update a 
		fleet which  doesn't contain any boats.  Once 
		you depress any key, you will be returned to the 
		UPDATE FLEET menu.  You should then update this fleet 
		with some boats or if you've fetched the wrong fleet, 
		fetch the correct fleet.
		
	*** NO FINISH POSITION x IN RACE y ***
	PRESS (ENTER) TO CONTINUE?
		This message indicates that there is a missing finish 
		position "x" in race "y".  This is only a warning  
		message to inform you that you MAY have an error in 
		the finish positions in a particular race.  Whenever a
		tie occurs, i.e., two boats have the same finish position,
		this message will be displayed indicating a missing
		finish position.  In which case, no error exists.  In 
		our SUNFISH fleet, each skipper that serves on the 
		committee boat for a race is given a third place in 
		that race.  We have many third place ties and this 
		program handles that.  However, its still necessary 
		that you verify that no error exists.  If an error 
		exists, you need to correct the necessary finish 
		positions and then score the fleet again.
	
	*** NO FLEET AVAILABLE ***
	PRESS (ENTER) TO CONTINUE?
		This message indicates that you are trying to attempt 
		something with an existing fleet but haven't "fetched" 
		it yet.	 Once you press a key, the main menu will appear
		and you should then fetch a fleet.

	*** NO SCORES AVAILABLE ***
	PRESS (ENTER) TO CONTINUE?
		This message indicates that a fleet hasn't been scored 
		prior to you trying TO PRINT A SCORED FLEET.   A fleet 
		must be scored before you can print a scored fleet.  Go 
		score the fleet, then print it.  You can "LIST A FLEET" 
		without having to score it, but you can't "PRINT A
		SCORED FLEET".

















	Copyright (C) SOFTAB 1989.			            22




	SAILSCOR					     Version 2


        PROBLEM/SUGGESTION FORM
        
	We welcome all comments and enhancement suggestions. Please
	document each item clearly and provide printed examples if
	possible.  Please be sure to include this form with all
	requests, it will help to make sure we can provide you with
	the best possible service.

        Name: ________________________________________________________

        Company: _____________________________________________________

        Address: _____________________________________________________

                 _____________________________________________________

        City: ________________________________  State: _______________

        Zip: ______________________________

        Date: _________________________

        Version of SAILSCOR: __________

        Description of problem or enhancement:

        ______________________________________________________________

       	______________________________________________________________

        ______________________________________________________________

        ______________________________________________________________


        Suggested solution:

        ______________________________________________________________

        ______________________________________________________________

	System Configuration:
	
        CPU:________________________     Memory:______________________
        
        Video Card Type:____________     Type of Monitor:_____________
        
        Printer:____________________     Hard Disk:Y/N _______________
        
        Floppies: __________ 5 1/4"      ______________ 3 1/2"


	Send to:
            SOFTAB
            3782 Covert
            Pontiac, MI  48054
            

	Copyright (C) SOFTAB 1989.			       	    23




	SAILSCOR				             Version 2


				INDEX

	Add a boat, 9
	Background color, 18-19
	BREAK key, 5
	Capability, 4
	Change a boat description, 10
	Change fleet title, 11
	Color, 18-19
	Contents, i
	Copyright, 3
	Create a fleet, 5, 7
	Cursor, 18-19
	Delete a boat, 10
	Display a fleet, 5, 13, 17
	Display colors, 18-19
	End a function, 7-8, 9-11
	End program, 4, 11, 20
	Enhancements, 25
	Errors, 4, 21-22
	ESC key, 5
	Fetch a fleet, 6
	Files, 4
	Foreground color, 18-19
	Introduction, 4-5
	Main menu, 4
	Modify a fleet, 5
	Print a fleet, 5, 13, 17
	Problems, 4, 21-23
	Prompting line, 18-19
	Registration, 1-2
	Retrieve a fleet, 6
	Save a fleet, 14
	Scoring, 4-5, 15-16
	Shareware, 1
	Suggestions, 24
	Terminate program, 5
	Title line, 18-19
	Update a fleet, 5, 9
	Update races, 11
	Warranty, 3

















	Copyright (C) SOFTAB 1989.			            24




	SAILSCOR				             Version 2


	ENHANCEMENTS
	
	Added the "DEFINE DISPLAY COLORS" function to allow users with 
	color displays to define their own background and foreground 
	colors as well as define unique colors for prompting lines and 
	title lines.  It also allows you to define the cursor.
	
	Added ESC key support that allows the user to terminate the
	program when necessary.  This enhancement gives the user 
	commonality with other programs.
	
	Fixed problem of added boats not being scored until the fleet 
	is recorded and fetched.
	
	Changed the fleet file name extension from .DAT to .FLT so 
	that fleet files are unique and do not conflict with data 
	files.
	
	The sample file included with the program has been renamed 
	from SAMPLE.DAT to SAILSCOR.FLT.  This identifies the file as 
	a SAILSCOR program file.  





































	Copyright (C) SOFTAB 1989.			            25



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1801

     Volume in drive A has no label
     Directory of A:\

    READ     ME       3377   5-25-89   7:14p
    SAILSCOR CFG        77   3-07-90   3:34p
    SAILSCOR DOC     46533   6-07-89  10:12p
    SAILSCOR EXE     86986   6-13-89   8:46p
    SAILSCOR FLT       419   5-15-89   9:17p
    WILLOWBA FLT         0   3-07-90   3:33p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       728   7-11-90  12:53a
    FILE1801 TXT      2221   7-12-90   3:23p
            9 file(s)     140379 bytes
                           17920 bytes free
