---
layout: page
title: "PC-SIG Diskette Library (Disk #3500)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3500/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3500"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## PTCREAD.TXT

{% raw %}
```

		 Welcome to Personal Time Card for Windows

			
  		     *******************************

                   All rights reserved - Copyright 1992

	        Member Association of Shareware Professionals

                       This is a Shareware Program

                     Program designed and written by
			     
                        Fischer Grafix & Software
                              P.O. Box 606
                          Midway City, Ca 92655

                     *******************************

SELECT "Edit" - "Word Wrap" from menu to view file properly.

Personal Time Card is a very easy to use way to keep track of the time you spend on specific jobs. We did not include any help screens as this short documentation should be all that is required to use the program (we also didn't want to clutter up you hard disk with additional help files).

Getting Started:
If you have not yet installed PTC and are reading this document the installation procedure is as follows; Select File - "Run" from Program Manger window, at the text box type in "A:SETUP" (be sure your diskette is in the drive or you will start the windows setup program). You may change the drive or directory selection during installation (setup defaults to drive C:). The setup program will create a new group window and install all necessary files to run PTC.

Using PTC:
You can either use the tab key or the mouse to move from entry box to entry box when filling in your time. 
1) Enter the Job# or Name for your task (use as few characters as possible here).
2) Enter the time you have spent on each task.
3) Select Description "Show" to enter additional information about that job.
4) Select Description "Hide" to close the description window.
5) Select Total, you can select either straight time or overtime to view your totals.
6) Select File - "Save", the date will show up automatically (this date is taken from your computer clock, if it's off correct it now).
The save format is "00-00-00.ptc" to change this date use the mouse to select the day and change it to the desired date then click OK, your card is now saved under that date. This can be a week ending or daily date.
You have now completed a time card.

File Menu,

Open: Once you have saved a card you can now File - "Open". You will be given a list of cards by dates. You can either select the card to open and click OK or double click on the card. You can now add or change the data in that card. The card you are working on will show the date at the top of the window (Personal Time Card for; 00-00-00.ptc").

Save: If you have a card open and you select save the old file is overwritten with the new file (even if you have not made any changes). See above step 6 for saving your card.

Save As: Allows you to save the card with the date you select.

Print: This will give you a hard copy of your card currently displayed on the screen. Keep this for your records or turn in for accounting. You will be asked to type in your name before printing.

Make Dir.: You can use this for a convenient way to make a new directory to either save the cards for a new job or to add an additional person. Caution: the cards are saved by date, if more than one person is using this program make a directory for each person by their name to save their cards.

New Total,

Straight Time: Once you enter your times you can view your totals by straight time. This will show you the daily and weekly total calculating the number without any overtime (Saturday & Sunday will be normal days.

8 hr's + OT: This selection will calculate the time using 8 hours as a  standard day with additional hours per day as overtime. (Saturday & Sunday will be viewed as overtime days).

Description,

Show: You can enter additional information about the job you are working on in this area. Describe what you have done or a brief description of the job itself. This will help you to remember what it is the number means in the future.

Hide: This removes the description window from the screen but does not clear the data.

Options,

New Card: If you have "Opened" or "Saved" a card and you want to start a new one select this option and all the data on the screen will be cleared.

Copy to clipboard: You can use this to copy the card on the screen to the clipboard and paste into your favorite spreadsheet program (set your spread sheet to coma delimited).

Vacation Time: The first time you select this item you will get an error message which says the program cannot find the file (one does not yet exist). Click OK and one will be created. You will automatically be placed into the deduct box. Select Reset - "Vacation" from the menu and enter your starting vacation balance. Do the same for sick time. Click "Calc - Save" button. You now have a vacation file saved. You can enter a deduction now. Note: Before you cancel press "Calc-Save" or your deduction will not be saved to disk.

Register PTC: This is the registrations screen for PTC. Registration is $18.50 + $1.50 s/h ($20.00) total for either 5 1/4" or 3 1/2" diskette . You can register the program with Fischer Grafix & Software directly by filling in the registration form then printing it and returning it with a check. Registering the program entitles you to phone help (if needed) and placement on our update list (you will be the first notified).
You may also register PTC online with CompuServe. Registration ID# 395 (type SWREG at the prompt)
Visa, Master Card or American Express users may call 1-800-847-0309 or 1-714-898-7262 to reigster.

About,
Small blurb about Fischer Grafix & Software.

Note that the Card window can be minimized and kept on the desktop for entry during the day. Please do not modify or change in any way this file as we have put it in the notepad format for your convenience.
If you require a second card you can change the default name from 00-00-00.ptc to any
name you want such as 000000a.ptc, 000000b.ptc, etc.. Do not change the extension.

About Shareware,
    Shareware is a try-before-you-buy process in which you are allowed to use the program for a specific amount of time. This time will vary from software to software.  The grace period for this program is three weeks. If after that time you find this program useful you are expected to register with the author (see registration Information below). If however after the specified time you do not find the program useful you are required to remove it from use. Remember that the Shareware system will only work if you support it by registering your program with the author. This also encourages the authors of Shareware to continue to write quality programs, upgrade existing programs and supply support. If you choose not to register, we would still like to hear about any comments or suggestions you have about Personal Time Card.

Permission to Copy,
    Clubs, Individuals and other Organizations are granted permission to freely distribute this program and its associated documents by
    Distribution Requirements;

    1. The registration fees for this program are to the author ONLY. Unless authorized agents are noted within        the program itself (NO authorized agent will appear in any documentation (only the program)).	
       No fees charged for the software and it's documentation above and beyond the fees for disk duplication and           distribution, (normally under $6.00)
 
    2. No advertisement made as to the program being public domain or free.
       All advertisements must state this program is SHAREWARE.

    3. No modifications made to the program or its accompanying documentation.

    4. All persons whom this program is distributed to should be informed of and encouraged to support the Shareware        concept.

    5. All files with Personal Time Card must remain together and be distributed on the same diskette or compressed        together. NO FILE MAY BE DELETED

    6. This prorgam may NOT be distributed as "RackWare" without the written consent of Fischer Grafix & Software.

 License Agreement:
    You are encouraged to use this program for 30 days prior to obtaining a permanent license. You may share this program with anyone you choose as long as you do not change or remove any files. You may not charge for sharing a copy unless you comply with the items described
in section 5. Licenses are non-transferable and may not be modified.
    
 Disclaimer:
    Fischer Grafix & Software disclaims all warranties relating to this software, whether express or implied, including but not limited to any implied warranties of usefulness and fitness for a particular purpose, and all such warranties are expressly and specifically disclaimed. Neither Fischer Grafix & Software nor anyone else involved in the creation, delivery or production of this software, shall be liable for any indirect, incidental or consequential damages arising out of the use or misuse-use of this software even if Fischer Grafix & Software have been advised of the possibility of such damages or claims. In no event shall Fischer Grafix & Software's liability for any damages ever exceed the price paid for the license to use the software, regardless of the form of the claim. The person using the software bears all risks as to the quality and performance of the software. Some states do not allow the exclusion of the limit of liability for incidental or consequential damages, so the above limitation may not apply to you.
    This agreement shall be governed by the laws of the State of California and shall insure to the benefit of Fischer Grafix & Software and any successors, administrators, heirs and assigns. Any action or proceeding brought by either party against the other arising out of or related to this agreement shall be brought only in a STATE of FEDERAL COURT of competent jurisdiction located in Orange County, California. The parties hereby consent to in person
jurisdiction of said court.

    It is your responsibility to determine if the program will work reliably on your equipment and for your particular business environment. This is the reason for the evaluation copy made available to you. If you feel the program or documentation can be improved, we always welcome your ideas. If you discover a problem with the program or documentation, please let us know and we will try to the best of our ability to correct it. If you do not agree with these conditions, delete the program and all of its accompanying files from your computer and do not register.  

ASP (Ombudsman),
    This program is produced by Fischer Grafix & Software, a member of the
    Association of Shareware Professionals (ASP). ASP wants to make sure that
    the Shareware principle works for you. If you are unable to resolve a
    Shareware-related problem with an ASP member by contacting the member
    directly, ASP may be able to help. The ASP Ombudsman can help you resolve
    a dispute or problem with an ASP member, but does not provide technical
    support for members' products. Please write to the ASP Ombudsman at
    545 Grover Road, Muskegon, MI 49442 or send a Compuserve message via
    easyplex to ASP Ombudsman 70007,3536.
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
	************************************
	******** VENDOR INFORMATION ********
	************************************

	Fischer Grafix & Software
	P.O. Box 606
	Midway City, CA 92655

	THIS PROGRAM MAY NOT BE DISTRIBUTED AS "RACKWARE" without
	the written consent of Fischer Grafix & Software.

 	Vendor Information / Packing List

 	Program Name : Personal Time Card

 	Catagories : (in order of preference)

		1 : Windows Utilities

		2 : Windows

		3 : Time Management

 	Program Requirements : 
		Windows 3.1
		HD STRONGLY RECOMMENDED

 	List of Features : 
		Enter job# or name
		Enter description of job
		Put in times
			Drag icons or enter manually
		Save in text format for import into spreadsheet
		Save Vacation and Sick times
		Quick Help Screen
		Program is SELF-INSTALLING
		
 	Included Files : 
		NO FILES FROM THIS LIST MAY BE OMITTED.		
		fgs001.fgs
		fgs002.fgs
		ptc.exe
		ptcread.txt
		read.1st
		setup.exe
		setup.lst
		setup1.exe
		setupkit.dll
		vbrun200.dll
		ver.dl_
		vendor.doc

 	Registration Information : 
		$18.50 + S/H (Reg. screen included in program)

 	Author Information : Vendors may contact us at;
			
			Fischer Grafix & Software
			P.O. Box 606
			Midway City, CA. 92655			
			Phone/Fax
			(714) 898-7262			
			CompuServe ID: 70233,1315
 	
	NOTE: PTC MAY NOT be distributed as "RACKWARE" without our express
	written consent.
	
	Program Description :
	Personal Time Card is an easy to use Windows time tracking program.
	PTC will let you enter job #'s or names, descriptions and time on
	the job. To enter a time you can either drag an icon to the proper
	box or insert the time manually. Also saves vacation and sick time.
	All files are saved in text format for easy import into your favorite
	spreadsheet. Self-Installing through Windows.

 	*** Help Us to Serve You Better ***
 	If you are going to include Household Tracker in you library
 	/Catalog, please notify us so you can be placed on our update
 	list. We would also very much appreciate anything you write about,
 	review or enter in your catalog about Household Tracker. If we do not
	hear from you we assume you have not accepted the program and will
 	remove your name from our listing. We would like to thank you for
	for your time and for your support in the Shareware Concept.

 	*** Software Reviewers ***
	Please contact us to be sure you have the latest version of the
	program. This is to insure your information on the program and
	it's registration is correct at the time of your review.
	Thank You in advance.

 	*** ASP Vendor ***
 	We would recommend that you think about becoming an ASP approved
 	vendor if you are not one now. The ASP is working for all of us in
 	the Shareware Market Concept. The ASP has guidelines for programs to 
	meet thier standards, these help give customers confidence that they 
	are getting quality programs and a place to turn if no one else can
 	help. For more info about ASP contact them at:

		Association of Shareware Professionals
		Vendor Certification Committee
		545 Grover Road
		Muskegon, MI 49442
		USA
```
{% endraw %}

## GO.TXT

{% raw %}
```


╔═════════════════════════════════════════════════════════════════════════╗
║            <<<<  PC-SIG Disk #3500 PERSONAL TIME CARD  >>>>             ║
╠═════════════════════════════════════════════════════════════════════════╣
║  Copy all files to a directory on your hard drive.                      ║
║                                                                         ║
║  After copying all files, type: PKUNZIP FGSPTC25.ZIP (Enter).           ║
║                                                                         ║
║  To Start Personal Time Card, run PTC.EXE from within File Manager.     ║
║                                                                         ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3500

     Volume in drive A has no label
     Directory of A:\

    PKUNZIP  EXE     23528   3-15-90   1:10a
    FGSPTC25 ZIP    314603   1-01-93   9:44a
    GO       TXT      1007   4-05-93   3:10p
    GO       BAT        32   4-05-93   3:11p
            4 file(s)     339170 bytes
                           21504 bytes free
