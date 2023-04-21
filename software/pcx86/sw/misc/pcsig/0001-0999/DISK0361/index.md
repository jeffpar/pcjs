---
layout: page
title: "PC-SIG Diskette Library (Disk #361)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0361/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0361"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FAMILY HISTORY 1 OF 3 (ALSO 632, 2291)"

    Ever wonder who's lurking in the upper branches of your family tree?
    The FAMILY HISTORY system, a modular genealogy program, will help you
    organize and refine your search.
    
    The system stores information about individuals, including all family
    relationships.  You are not limited in the number of relationships that
    might exist for each individual, or the number of generations of
    ancestors or descendants.  Information for up to 3200 individuals may
    be stored on a diskette and up to 9999 on a hard disk.  You can produce
    ancestor, descendant, relative, and family group reports and ancestor
    (tree) charts.  You may print out blank worksheets and charts to record
    information for entry into the system.  Sample files are included for
    the descendants of Adam (as recorded in Genesis) and the family of
    Prince Charles.  A GEDCOM export/import program permits sharing
    information with other genealogy software.
    
    Research your roots and know where you came from.  A great gift for the
    next generation.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## APENDIXA.DOC

{% raw %}
```




      Appendix A: Extended Options for Registered Users

      These programs were first made available for public use in March 1985.  
      Since then the system has been going through an almost continuous 
      process of revision and extension.  The descendant "chart" and rela-
      tive report are two significant enhancements that have been made to 
      the basic set of programs.  In addition, a number of other options 
      have been made part of an "extended" system which is available only to 
      registered users of the programs (see the introduction to this 
      manual).

      As of July 1990, the extended options include:

      1. A program for creating INDEX files which permit processing the 
         Family History System files in various orders.  An index may be 
         created based upon one or more of: Surname, GivenName, BirthDate 
         (YMD or MDY), DeathDate (YMD), Latest Marriage Date (MDY) and ID#.  
         Further, you may request that a husband's surname be substituted 
         for a wife's when creating the index.  An index may also be created 
         which sequences related individuals in relationship sequence.

      2. A program for producing printed indexes for ancestor, descendant, 
         relative and "batched" family group reports, for sets of ancestor 
         charts, for ancestor Maps and for descendant charts.

      3. A program for searching the files based upon up to 9 selection 
         rules stated in terms of: 
            ranges of ID#, Birthdate & Deathdate, Sex, 
            substrings or soundex of Surname, GivenName, BirthPlace and 
              DeathPlace, and 
            existence of Marriage records, children or residence 
              information.  
         The program produces detailed listings in indexed or ID# sequence 
         of selected information including comments, latest residence 
         information, and common-term relationship (if any).  

      4. A program for producing Summary reports.  The SURNAME Summary 
         report provides a means for evaluating the completeness of certain 
         types of information among selected records, grouped by Surname.  
         Similar ANCESTOR and DESCENDANT Summary reports show statistics, 
         such as numbers of males & females and ranges of birth and death 
         dates, for records grouped by generation level.  The RELATIVE 
         Summary report is presented as a 2-dimensional relationship table 
         with the number of relatives in each relationship category.

      5. A RELATIONSHIP CALCULATOR, which accepts two name record ID numbers 
         and "dynamically" determines the "relationship", if any.  It also 
         shows the nearest common ancestor of two related ID's.

      6. An `IMPORT/EXPORT' utility which permits copying information from a 
         set of family files into an ASCII (standard character) dataset and 
         transferring the information from that ASCII dataset into another 
         FHS family file.  While this program was designed using a prelim-
         inary GEDCOM definition which was not widely used, it does permit 


                                     65



         you to transfer all types of information between FHS family files.  
         The export/import program provided with the basic set of programs 
         only supports those fields of data which are common to both FHS 
         files and the current PAF GEDCOM description.

         This program also has an option for creating a "MailMerge" format 
         address file which may be used with database programs such as the 
         publicly distributed PC-FILE III to print mailing labels.  The file 
         may also be used with many word-processors for printing form 
         letters.  

      Registered users are notified of major updates to the system, though 
      there is a $15.00 fee for updates after the initial registration.  All 
      updates are cumulative, so it isn't necessary to order each update as 
      it is announced. 










































                                     66

```
{% endraw %}

## APENDIXB.DOC

{% raw %}
```



      Appendix B: Recording information for the Family History System

      This section is not intended to be a `How to' for doing genealogical 
      research.  For that information I would suggest that you go to a 
      local library or bookstore to get one of the many excellent books 
      you can find there on that subject.  What I do want to tell you 
      here, is how to use the Individual/Family Group worksheets to record 
      information for the systematic entry of this information into the 
      Family History System files.

      Before continuing with the discussion here, however, you should get 
      several blank copies of the Individual/Family Group worksheets.  You 
      may get copies by using MAIN MENU option F2-B-1 to select the System 
      Function for producing Family Group worksheets, and then selecting 
      function F5 of that program's option menu.  (You should also request 
      that space for ID numbers be included on the worksheets by responding 
      "Y" to the program's query about this item.)

      Now, you should have before you several blank Individual/Family Group 
      worksheets.  The first thing to note on these worksheets is that every 
      individual mentioned, whether a parent, spouse or child, has an assoc-
      iated ID number.  This number is assigned sequentially to individuals 
      when they are first identified to the system. The numbers assigned two 
      individuals does not have anything to do with the family relationship 
      that may exist between these individuals, however these numbers are 
      used whenever family relationships are being defined between indivi-
      duals.  It isn't necessary for you to remember the ID number of every 
      individual (they are easily determined by searching the files by 
      'name' or other key information), however you will probably be able to 
      recall the ID numbers of many of your close relatives or significant 
      ancestors.

      To begin filling in one of your blank worksheets, select one of your 
      ancestors that you would like to start with.  Eventually you will 
      have a file of family group worksheets produced by the system (1 for 
      each of your direct ancestors, at least, and probably others for 
      uncles, cousins, etc. as you systematically expand the information 
      in your files).  But first you should record the information on a 
      blank (or partially blank) worksheet.  If you do not have a very 
      distant ancestor whose line of ancestry you particularly wish to 
      record, I would suggest choosing one of your grandparents.  Fill in 
      his/her name in the first block of individual information provided 
      on the worksheet.  Put the last name first (this is the 'SURNAME'), 
      then a comma, followed by the 'GIVEN' name(s).  If it is a grandmother 
      that you have selected, use her maiden name for the surname, not the 
      name of your grandfather.  Fill in as much as you can of the remaining 
      personal information about the individual including birth and death 
      dates and places.

      Concerning the recording of dates on these worksheets, the almost 
      universally recommended format (the one used when these reports are 
      printed from information in the system) is: DD MON YYYY, where MON 
      is a 3 character abbreviation for the month.  However, when entering 
      dates in the file maintenance program, the required format is MM-DD-
      YYYY (or DD.MM.YYYY or YYYY.MM.DD), so I would recommend that you use 


                                     67



      here the format in which you intend to enter the dates.  If the month 
      or day is not known, enter 00, and if the person has died, but the 
      year of death is unknown, use 9999...(This is recognised by the system 
      as a "don't know" year and will eliminate the calculation of ages or 
      anniversarys).  Do not use 9999 for an unknown Birth year, instead use 
      0000.  (Also see "Appendix C" for a discussion of additional ways of 
      indicating uncertain dates.)

      When recording Birth and Death places, do not put 'addresses' but 
      rather the CITY, COUNTY and STATE or country.  You will only have 22 
      characters for entering the information so you may have to abbreviate.  

      Enter '1' for the ID number of the individual for whom you are filling 
      out this worksheet.  This is the first person you will be entering 
      into the system files.

      For the meantime, ignore the information about the individual's 
      parents; we have agreed that this individual is the most distant 
      ancestor we are interested in now.

      Proceeding to the spouse information, enter the appropriate data 
      according to the 'rules' we have mentioned above, again using the 
      maiden name if the individual is a female.  An additional piece of 
      information for the spouse is the date of marriage.  If the marriage 
      has been terminated, either thru divorce or by death of one of the 
      persons, this date should also be recorded if known.  The ID number 
      of this person should be '2'.  You will note that additional spouses 
      may be identified.  The marriage records are maintained within the 
      system in a most recent to least recent order.

      Next you should enter information concerning the children of the 
      individual with ID #1.  (See Appendix C. for the handling of adoptive 
      relationships within the system.)  These should be recorded in 
      increasing order of birth with ID numbers assigned sequentially 
      following that of the last recorded spouse.  The last name of a child 
      should be the same as that of the father.  If more than one spouse is 
      recorded for individual #1, then the ID # of the appropriate spouse 
      should be recorded in the space for 'Parent ID#' under the child's 
      name.  You needn't bother recording spouse information for each child.  
      This would more appropriately be entered on a Family Group worksheet 
      for that child.

      Incidentally, the children will be recorded in the file in increasing 
      order of birth under each parent, no matter what order you enter 
      them into the file.  This has the unfortunate consequence that 
      individuals whose birth year is not known may end up listed in the 
      wrong order of birth in reports.  The order will be corrected however, 
      as the birth information is learned and recorded correctly.

      The remarks section is not intended for writing a person's life 
      history, but rather for making notes; for example concerning sources 
      of birth, death information or for burial information.  You will find 
      that there are many places in the Family History files for recording 
      remarks such as these.  I trust that you will develop a feeling for 
      the types of information you will want to record in each place.  (The 


                                     68



      comments that are placed under a spouse record should have relevance 
      for both partners of the marriage.  These remarks will appear under 
      the marriage information for either spouse.)

      Now set the 'completed' worksheet aside and take another blank work-
      sheet and set about filling it out, in the same way, for your ancestor 
      that was included among the children on the previous worksheet.  (If 
      you started with a grandparent, then one of your parents was listed 
      among the children).  The only information you need enter for the 
      individual is the name and ID#.  You can also write down the ID#'s of 
      the parents in the appropriate places, as a reminder that this infor-
      mation is already available.  Then continue filling in spouse and 
      child information just as before, assigning ID#s sequentially, 
      following the ID# of the last child of the previous worksheet.

      When the second worksheet has been completed, set it aside and fill 
      out another for your ancestor listed among the children on this 
      worksheet...continuing in this way until you have filled out a 
      worksheet for yourself.

      Now, with the several worksheets you have completed in hand (in the 
      order that you have created them), you should be ready to start 
      putting information in your Family files. (see section II.B.4)


































                                     69

```
{% endraw %}

## APENDIXC.DOC

{% raw %}
```



      Appendix C. Notes on Adoptive Relationships & Date Status Fields

      I will try to explain in this section the purpose of several `status' 
      fields which have been added to the NAME record information.  Each 
      field appears as a one character extension to the right of the Birth 
      & Death dates and Mother & Father ID numbers in the NAME information 
      view in the file maintenance program (Main Menu option F1).

      For the Birth & Death date fields, these status indicators permit you 
      to assign 3 different levels of `assurance' regarding the accuracy of 
      the dates shown.  Symbols recognised in these fields are "!", " ", 
      and "?".  The "!" symbol would indicate a date backed by a primary 
      source of information (this can mean whatever you want it to, but 
      might include a `birth' or `death' certificate or family Bible 
      entry).  A blank (" ") would indicate a secondary source such as a 
      document whose own source is not known, and a "?" would indicate a 
      questionable source of information (such as a computed date from 
      vague recollections).  Explanations for the choice of symbols could 
      be included in the comments for the individual's name record.  These 
      symbols are displayed in all reports produced.

      The status fields appearing to the right of the mother and father ID 
      numbers may be used to indicate that a parent-child relationship is 
      an adoptive one or is questionable (for example when it is uncertain 
      which of the spouses of an individual parented a child).  The symbols 
      recognized by the program are "*" for an adoptive relationship and 
      "?" for one whose information is uncertain.  Descendant reports may 
      optionally include or exclude adopted individuals and their 
      descendants, and if included, the relationship is marked with an "*" 
      in the bloodline next to the entry corresponding to the adoptive 
      relationship.

      Perhaps a few remarks might be in order to try to explain my reason 
      for treating adoptive relationships as I have.  When I first began 
      designing the formats for the Family History files, I intended 
      allowing for maintaining a complete history of both biological and 
      adoptive parent/child relationships.  However, because of the 
      complexity of handling the record of adoptions, which could 
      conceivably involve one or more `parents' singly or in pairs, and 
      because of the relative rarity of the situation, the limit of my 
      commitment was allowing for a `pointer' field to an un-implemented 
      adoption record.
           
      As I have worked on adding information to my own family files from an 
      extensive list of descendants of a 7th generation ancestor, gathered 
      through the dedicated efforts of a distant cousin, I have been 
      repeatedly faced with the decision of how to treat children who are 
      identified as being adopted.  In all cases, I had chosen to omit 
      establishing the parent/child relationship.  However, I was troubled 
      by the thought that such individuals would be left out of reports 
      which would include "siblings" with whom they shared a common 
      traditional heritage, if not a biological one.  I did notice, though, 
      that in the information I had, the `missing' biological parent was 
      seldom indicated; therefore, I opted for an alternative approach to 
      the `adoption problem' which would permit including an adoptive 


                                     70



      relationship and would allow producing reports which would optionally 
      include or exclude information for such relationships, but which 
      forces one to decide, when full information is available, whether to 
      record a biological or `traditional' ancestry for an individual.  
      Though I am not entirely satisfied with this approach, I feel that it 
      is an improvement over the previous situation.

      I would still like to provide a more complete treatment of adoptive 
      relationships but this would now require changes to the file format 
      that would make it incompatible with previous versions of the system.  
      Of course the export/import program of the extended system could 
      provide a means for converting between the two formats but still, I 
      don't expect to accomplish this any time soon.












































                                     71

```
{% endraw %}

## APENDIXD.DOC

{% raw %}
```



      Appendix D: DATECALC, a RAM Resident Date Calculator Utility

      The program DATECALC.COM that has been placed on your Family History 
      System program diskette (or in the \FAMILY sub-directory of your hard 
      disk) is a program to assist you in performing some standard opera-
      tions involving dates, including:

          Determining the day of the week on which a given date falls;
          Computing the number of years, months and/or days between two 
             given dates;
          Determining the date that is a given number of years, months 
             and/or days before or after another date;
          Displaying a calendar for the month containing a given date;
          Converting between "old style" and "new style" dates.

      In providing these functions, the DATECALC utility also permits you to 
      select the format for dates entered or displayed from among:
              DD MON YYYY   (e.g. 10 APR 1943)
              MON DD, YYYY  (e.g. APR 10, 1943)
              MM-DD-YYYY    (e.g. 04-10-1943)
              DD.MM.YYYY    (e.g. 10.04.1943)
              YYYY MM DD    (e.g. 1943 04 10)
         or   YYYY DDD      (e.g. 1943 100).

      The "difference" or length of interval between dates can be displayed 
      in several formats also, including:  
               +/- Yr,Mon,Day   (+ 0044 Y  004 M  02 D)
               +/- Yrs,Days     (+ 0044 Y  124 D)
          or   +/- Days         (+ 016195 Days).
      (A "-" before the date difference indicates that the second date 
      occurs before the first one.)

      The DATECALC utility can be invoked in several ways.  If you are using 
      DOS 3.0 or later and have sufficient RAM available, you should be able 
      to invoke it from the MainMenu of the Family History System by 
      pressing the F7 key.  It can also be executed as a command from the 
      DOS prompt, for example by entering:  A>datecalc
      assuming the DATECALC.COM program is on the diskette in the "A" drive.
      Finally it can be made memory resident by entering:  A>datecalc r
      (again assuming the DATECALC.COM program is on the diskette in the "A" 
      drive) after which it may be called up at just about any time by 
      simultaneously pressing the ALT and CTRL keys.  The utility will not 
      "pop up" when the screen is being used to display graphics and it may 
      be incompatible with some other resident utilities or with some 
      programs which take control of keyboard input.  

      The AUTOEXEC.BAT file created on program diskettes during the standard 
      INSTALL procedure has a command line in it which will make this 
      utility memory resident when you boot from those diskettes.  If you 
      are running from a hard disk or do not boot from your Family History 
      System program diskette, you may consider modifying the AUTOEXEC.BAT 
      file used during your normal boot procedure to automatically make the 
      DATECALC utility RAM resident.  Be aware that making the program 
      resident in memory will "permanently" reduce the available memory for 
      other programs by about 7k.


                                     72




      When you invoke DATECALC in one of the above ways, it "pops" into 
      view, overlaying the previous contents of the screen.  The utility's 
      options are listed together with the function keys that are used to 
      select them.  (Note that the ESCape key is used to exit from the 
      program.  The previous contents of the screen are restored when you 
      do.)  Below the list of options you will find the descriptions for the 
      current formats for DATEs and Date DIFference.  If "old style" dates 
      are being processed, then the characters "OS" will appear to the right 
      of the literal describing the date format.  Near the bottom of the 
      viewing area, on separate lines, appear two dates (DATE1, DATE2) and 
      the computed DIF (calendar interval) between the dates.  The day of 
      the week for each date is also shown for each date.  The first time 
      the utility is used the dates will have the value of the current date 
      (or 01 JAN 1980 if you don't have a clock calendar board and haven't 
      previously corrected the date using the DOS DATE command or some other 
      utility) and the computed DIF will be 0 years, 0 months and 0 days.

      You can use the cursor control keys (as well as the HOME, END, PGUP, 
      PGDN keys) to move the viewing area for the utility to different 
      locations on the screen.  This allows you to reveal any area on the 
      screen in which a date appears that you may want to examine.  If you 
      are running DATECALC as a memory resident utility, then the location 
      of the viewing area will remain unchanged between separate invocations 
      of the program.

      The list of program options appears as follows:
              F1  Enter DATE1 (find DAY)
              F2  Enter DATE2 (find DIF)
              F3  Enter DIF   (find DATE2)
              F4  Show Calendar for DATE1/2
              F5  Change DATE Format/Style
              F6  Change DIF Format
              ESC  Exit

      USING THE DATE CALCULATOR:

      If you press function key F1 or F2 then a reverse video cursor will 
      appear in the first position of the value field for the corresponding 
      date at the bottom of the viewing area.  You can then type in the 
      value you wish and press the Enter or RETURN key when you are through 
      (or press the ESCape key to restore the previous value for the date).    
      Month literals should be among: 
              JAN,FEB,MAR,APR,MAY,JUN,JUL,AUG,SEP,OCT,NOV,DEC
      Any other values entered will be changed to "JAN".  Lower case charac-
      ters are automatically changed to upper case when entering these 
      values.  If a value is entered for the day of the month which is 
      greater than the "legal" number of days in the month, then the month 
      and day (and year if necessary) will be automatically adjusted accor-
      dingly.  For example an entered date of "MAR 35, 1987" will be changed 
      to "APR 04, 1987".  Similarly, if a value greater than 12 is entered 
      for the number of the month, then the month and year (and day value if 
      necessary) will be adusted accordingly.  For example an entered date 
      of "14-30-1987" will be changed to "03-01-1988".



                                     73



      If you press function key F3 then a reverse video cursor will appear 
      in the first position of the value for the DIF field at the bottom of 
      the viewing area.  The first character must be a + or - (indicating 
      whether the computed value for DATE2 is to be after or before DATE1).  
      Press the Enter or RETURN key when you are finished (or press the 
      ESCape key to restore the previous value for DIF).

      When entering any of these values you can use the left and right 
      cursor control keys to move the cursor and you can use the TAB key to 
      move quickly to different parts of the field.  The cursor automatically 
      skips over the "filler" characters (such as "-" or ",") so you don't 
      have to enter these.

      If you have changed either DATE1 or DATE2, then the program will 
      compute and display the day of the week and compute and redisplay the 
      value of DIF, the difference between the two dates.  If you change the 
      value of DIF, then the program will compute the value of DATE2 which 
      is the specified interval before or after the current value of DATE1 
      and will compute and redisplay the DIF between the dates.  Note that 
      in computing date differences the following procedure is used:
          The larger of the two dates is determined and the sign of the 
              difference is set to - if DATE1>DATE2 and + otherwise;
          The smaller date is subtracted from the larger, first days, then 
              months and then years.
      On the other hand, when DATE2 is computed from DATE1 the adjustment of 
      the components of the date are made in the reverse order, first years, 
      then months and then days.  (This is an important distinction and one 
      which was not followed by an early version of the DATECALC utility.  
      If the components of DATE2 are computed in days, months, years order 
      then the computed DIF between DATE1 and the computed DATE2 will some-
      times not match the original DIF value entered.)

      DISPLAYING A MONTHLY CALENDAR

      If you press the F4 key then the middle portion of the viewing area 
      for the DATECALC utility will be cleared and a calendar will be 
      displayed for the month of the year containing DATE1. (If instead you 
      press the SHIFT and F4 keys simultaneously, then the calendar for 
      DATE2 will be displayed.)  Once the calendar is displayed, you can 
      scroll the calendar backward or forward by months by pressing the left 
      or right cursor keys respectively.  The calendar may also be scrolled 
      forward or backward by years by pressing the up or down cursor keys 
      respectively.  The calendar display is terminated by pressing the 
      ESCape key.  (Note: if you are currently using "old style" dates then 
      the calendar will be computed using "old style" rules.)

      CHANGING DATE AND DIF FORMATS

      Pressing the F5 key causes the DATEs to cycle through the various 
      formats described previously.  Both the literal describing the format 
      and the values for DATE1 and DATE2 will automatically change.  All 
      dates will be entered and displayed in the currently selected format.  

      Similarly, if you press the F6 key then the value for DIF will cycle 
      through the various formats described above.  All DIFs will be entered 


                                     74



      and displayed in the currently selected format.

      If you are running DATECALC as a memory resident utility, then the 
      format for DATEs and DIF will be retained between invocations of the 
      utility.

      CONVERTING BETWEEN "OLD" AND "NEW" STYLE DATES

      It is generally well known that the "standard" calendar year of 365 
      days differs from the "solar" year by an amount that makes it neces-
      sary to insert extra days occasionally (as a 29th day in the month of 
      February) to get back in synch with the sun.  The years in which such 
      days are added are called "leap years".  The rule for determining leap 
      years that has been used in English speaking countries since 1752 (and 
      from earlier dates in other enlightened areas of the world...in fact 
      the new calendar is called a "Gregorian" calendar after Pope Gregory 
      XIII who requested that Catholic countries begin using it in 1582) may 
      be stated as follows:
            A given year will be a leap year if it is evenly divisible by 4
            UNLESS the year ends in "00" in which case it is NOT a leap year
            UNLESS it is divisible by 400 in which case it IS a leap year.
      Prior to the establishment of this leap rule, most of the Western 
      world employed a rule which was just the first line in the above 
      statement, that is every fourth year was a leap year.  The effect of 
      using this simplified rule over a long period of time was that the
      planting season, which is determined by the sun, would creep a 
      calendar day earlier every 133 years or so.  By the Spring of 1752 
      people were having to plant their potatoes the day after Groundhog Day 
      instead of Valentine Day.  Therefore to correct the situation all 
      English subjects were asked to go to bed the evening of 02 SEP 1752, 
      get up the next morning on 14 SEP 1752, and from that day forward use 
      the new leap year rule for constructing calendars.

      Today this calendar change is just a curiosity for most of us, but to 
      people of that day and genealogists today who have to deal with dates 
      both before and after this adjustment it is a problem which has been 
      recognised by labeling dates based upon the old leap rule as "old 
      style" dates and designating those following the new rule as "new 
      style" dates.

      The calendar adjustment to "new style" dates occurred at different 
      times in different countries so rather than just treating all dates 
      prior to 14 SEP 1752 as "old style" dates, the DATECALC utility pro-
      vides an option for converting between the two "styles".  Pressing the 
      SHIFT and F5 keys simultaneously causes the program to shift between 
      old and new style treatment of dates with a corresponding adjustment 
      of displayed DATEs and DIF values.  When dates are being treated as 
      "old style" dates the characters "OS" will appear to the right of the 
      literal describing the current Date format.  When the new leap rule is 
      in effect there is no special indicator to the right of the Date 
      format descriptor (though genealogists will sometimes use an "NS" 
      suffix for such dates).

      As an example, call up the DATECALC utility, press F1 and enter the 
      new style date: 22 FEB 1732 (or equivalent for the date format you are 


                                     75



      using).  You will find that George Washington was born on a Friday.  
      But if you press F4, the "new style" calendar displayed will not be 
      the one that George's parents used to mark his birth.  Instead, press 
      ESCape (to erase the calendar display) and then SHIFT+F5 to switch to 
      "old style" dates.  You will find that George's birthdate was actually 
      11 FEB 1732 (still a Friday though) and if you then press F4 you will 
      see the "old style" calendar that was in effect at the time. 

      Before ending this discussion, perhaps I should note another distinc-
      tion between some old and new style dates.  Prior to the implementa-
      tion of the new leap rule, the first day of the new year was con-
      sidered variously as Jan 1, Mar 1 and Mar 25 (e.g. according to some, 
      25 MAR 1645 was the day after 24 MAR 1644). This left some ambiguity 
      concerning the year for such dates as:  11 FEB 1732 OS.  Therefore the 
      custom was developed of using "double dating" to take note of the fact 
      that this discrepancy had been considered.  The above date might then 
      be written:  11 FEB 1731/2 OS.  You should be aware that the DATECALC 
      utility will always assume JAN 1 to be the first day of the year.  You 
      may even use this to determine the correct double dating for an event.  
      For example, suppose it is known that a person was born on Saturday, 
      30 JAN 1691 OS, but it is not known which new year rule was in effect.  
      The DATECALC program will show that 30 JAN 1691 OS is a Friday but 
      that 30 JAN 1692 OS is a Saturday.  Therefore the correct double-
      dating would be:  30 JAN 1691/2 OS and the person who originally 
      recorded the date was apparently using something other than JAN 1 as 
      the date for the beginning of the new year.


      For those wanting to find out more about various calendar systems I 
      would recommend your reading the discussions in the books:
         "Tracing Your ROOTS" by the editors of Consumer Guide and distri-
             buted by Bell Publishing Company, New York  (p. 47)
         "Ancestry's Guide to Research" by Johni Cerny & Arlene Eakle,
             published by Ancestry, Inc., Salt Lake City























                                     76

```
{% endraw %}

## APENDIXE.DOC

{% raw %}
```



      Appendix E: Logical File Structure diagram


          
                                +---------+
                                !  NAME   !
                                ! RECORD  !
                                +----+----+
                                     !
          +--------+-------+---------+------------+----------+---------+--->
          !        !       !         !            !          !         !
          !        !     +-!---+  +--!-----+      !       +--!---+  +--!---+
      +---+--+ +---+--+ +--+--+! +---+----+! +----+----+ +---+--+! +---+--+!
      !FATHER! !MOTHER! !CHILD!! !MARRIAGE!! !BORN/DIED! ! ADDR !! ! COM  !!
      ! NAME ! ! NAME ! !NAME !+ ! RECORD !+ ! PLACES  ! !RECORD!+ !RECORD!+
      +------+ +------+ +-----+  +---+----+  +---------+ +---+--+  +------+
                                     !                       !
                                     !                    +--!---+
                 +--------+----------+----------+        +---+--+!
                 !        !          !          !        ! COM  !!
                 !        !       +--!----+  +--!---+    !RECORD!+
             +---+--+ +---+----+ +---+---+! +---+--+!    +------+
             !SPOUSE! !MARRIAGE! ! ADDR  !! ! COM  !!                                                 
             ! NAME ! ! PLACES ! !RECORD !+ !RECORD!+
             +------+ +--------+ +---+---+  +------+
                                     !
                                  +--!---+
                                 +---+--+!
                                 ! COM  !!
                                 !RECORD!+
                                 +------+

        >---------+--------------------+--------------------+----------
              +---!-----+          +---!-----+          +---!-----+    
             +----+----+!         +----+----+!         +----+----+!    
             ! MEDICAL !!         !EDUCATION!!         !   WORK  !!    
             !  RECORD !+         !  RECORD !+         !  RECORD !+    
             +----+----+          +----+----+          +----+----+     
                  !                    !                    !          
             +----+----+          +----+----+          +----+----+     
             !         !          !         !          !         !     
          +--!---+  +--!---+   +--!---+  +--!---+   +--!---+  +--!---+ 
         +---+--+! +---+--+!  +---+--+! +---+--+!  +---+--+! +---+--+! 
         ! ADDR !! ! COM  !!  ! ADDR !! ! COM  !!  ! ADDR !! ! COM  !! 
         !RECORD!+ !RECORD!+  !RECORD!+ !RECORD!+  !RECORD!+ !RECORD!+ 
         +---+--+  +------+   +---+--+  +------+   +---+--+  +------+  
             !                    !                    !               
          +--!---+             +--!---+             +--!---+           
         +---+--+!            +---+--+!            +---+--+!           
         ! COM  !!            ! COM  !!            ! COM  !!           
         !RECORD!+            !RECORD!+            !RECORD!+           
         +------+             +------+             +------+             





                                     77

```
{% endraw %}

## APENDIXF.DOC

{% raw %}
```



      Appendix F. Responses to Questions

      Among the many questions and requests regarding the Family History 
      System, there are some that have been repeated often enough that they 
      seem to indicate a general interest, or state of confusion, regarding 
      the item.  In this appendix, I will present some of those queries, 
      along with my usual response.  

      1. Can I use my own scheme for ID numbers?
         A. Probably not. The FHS Name record ID numbers are simply a 
            convenient means for uniquely identifying each record.  You 
            should not try to attach any special meaning to them by entering 
            name records in an order that would cause the ID numbers to have 
            some "relational" significance.  The program automatically 
            generates relationship identifiers that conform to the most 
            commonly used schemes, including lineage or "ahnentafel" numbers 
            for ancestors and "bloodlines" for descendants (which are 
            essentially the same as the "Henry" system for denoting 
            descendants) so there is really no need to make the ID numbers 
            serve that purpose.  
         
      2. How do you delete duplicate or unwanted name records?
         A. There is no direct means for deleting name records.  At first, 
            I left the option out because I didn't think there would be much 
            need for it, but as the file update program grew, there just 
            wasn't room to add instructions for deleting a name record along 
            with all the "subordinate" information that may be associated 
            with it.  I usually tell someone who has a record that they wish 
            to delete to manually delete all associated records (marriages, 
            addresses, comments, etc.), dis-associate any children (by 
            setting the parent ID to 0), and "space out" the remaining 
            information in the Name record.  The record may then be used to 
            "add" the next new name to your family file.  If there are 
            several name records to be "deleted" and you don't have any new 
            names to add, you may want to change the Surname of these 
            records to something like: (UNUSED).  You can then Search for 
            them the next time you have new names to add.  If you accumulate 
            a large number of (UNUSED) records, you may effectively remove 
            them by EXPORTing all except the (UNUSED) records and IMPORTing 
            them back into an empty family file.  The Search/Select/LIST 
            option of the extended system allows you to search for records 
            with surname "#UNUSED" (which is read: "Not Equal to UNUSED") so 
            that it is easy to select the desired records for exporting.  It 
            is also best to use the "older format" GEDCOM program in the 
            extended system for doing the transfer because it will process 
            all types of information that are allowed in a FHS family file.

      3. Should I create separate family files for each of my parents and my 
         spouse's parents?  How can I print reports from several files?
         A. Each FHS report can only have information from a single family 
            file.  Therefore I always recommend that all information for 
            individuals who are linked in any way, whether by marriage or 
            family relationship, be kept in a single family file.  The only 
            exception would be if the file were so large that it exceeded 
            the maximum size allowed for the disks you are using (currently 


                                     78



            3600 name records for 360k diskettes, 7200 records for 720k 
            diskettes and 9999 records for high density diskettes or a hard 
            disk).  When you reach that point, it is possible to subdivide a 
            family file, along family lines, into two or more separate 
            files.  (The Search/Select/LIST option and Export/Import option 
            of the extended system are best suited for doing this.)  If the 
            subdivision is done carefully, you may be able to make each 
            family file correspond to different "chapters" of a family 
            history so that you may not need to be so concerned about being 
            able to include information from multiple files in a single 
            report.

      4. I only have about 2500 names in my family file but my data diskette 
         is almost full!
         A. Name records are each 100 characters so it is possible to have 
            up to 3600 name records on a 360k diskette.  However, birth & 
            death place records, marriage records, and comment lines each 
            require a 50 character record in the ".OTH" dataset, and each 
            address places a 108 character record in the ".ADR" dataset.  
            Therefore, if you keep all of your datasets on a single 
            diskette, you will not be able to get the maximum number of name 
            records into your family file.  

            If you have two diskette drives, you can ease the situation some 
            by "splitting" your family file datasets between two data 
            diskettes.  For instance, you may place the ".NAM" dataset on a 
            diskette which you will keep in the "B" drive and place the 
            ".ADR" and ".OTH" datasets on a second diskette which will share 
            time in the "A" drive with the program diskette.  The program 
            diskette is required only when you are starting the system and 
            when you are going back and forth between the Main Menu and the 
            option processing programs.  At all other times, you may remove 
            it and replace it by a data diskette.  If you do this, then you 
            should always wait until you are prompted to replace the program 
            diskette when you are returning to the Main Menu.  This assures 
            that your family file is properly "closed" and all updates 
            written before you remove the data diskette.

            By following this procedure of employing two diskettes for your 
            family file, you should be able to approach the maximum number 
            of name records for your family file on the size diskettes that 
            you are using.

      5. Can an address be automatically attached to more than one name?
         A. The only way of associating a single address record with more 
            than one name is by placing the address under a marriage record.  
            Such addresses are treated as a "residence" of each spouse and 
            will appear as a residence in the family group report for either 
            spouse.  Some persons have asked about having a parent's address 
            associated with the children and I have given some thought to it 
            but I don't have any plans for doing that in the near future.

      6. Can the addresses and phone numbers be made more flexible?
         A. The inflexible address and phone number format is undoubtedly 
            the most commonly expressed lament of users outside the U.S.  I 


                                     79



            hadn't anticipated the amount of interest in these programs that 
            would come from other countries (currently about 30-40% of all 
            registrations come from outside the U.S.) or I would have given 
            more thought to this aspect of the file design.  I do intend to 
            make changes in this area but it will probably be part of a 
            general redesign of the FHS family file format.  That is a 
            process that I expect will take at least 2 years to complete.  

      7. What about Baptismal and Burial information?
         A. I originally intended to make Baptismal information part of a 
            separate "Religious information" record, and provided a separate 
            "pointer" field to support it, but could never decide just what 
            other information should go into that record.  Eventually there 
            just wasn't enough room left in the file update program to 
            implement another record format.  When I do get around to 
            "reworking" the FHS file design (see the "Answer" to the 
            previous question), baptismal and burial information will be 
            given special consideration.  In the meantime, the name record 
            comment area is the place to put those details.  In the new 
            "free form" reports these comments appear as a more "natural" 
            extension of the name record so that the baptismal and burial 
            information "almost look like" they are part of the file design.  

      8. Can I incorporate "note files", created by my word processor, into 
         FHS reports?
         A. No.  Only information from your FHS family file, or generated by 
            the programs (such as lineage numbers and "bloodlines") can 
            appear in the FHS reports.  

      9. The Comment area is too limited!
         A. It is true that the routine for entering comments is rather 
            "primitive" and the area for entering comments appears rather 
            small, but it is possible to include rather extensive notes with 
            this facility.  Some persons have the impression that only 9 
            short lines of comments can be entered, however when the comment 
            viewing area is "full", you can press the PGDN key to continue 
            entering additional remarks.  The "theoretical limit" for these 
            notes is about 32000 of those 38 character lines.  That would be 
            roughly 200,000 words.  The "practical limit" is much less than 
            that, although it still allows for fairly extensive notes.  
            Each comment line is held in a single record of the ".OTH" 
            dataset of your family file and the ".OTH" dataset can have up 
            to 32000 records.  But that dataset also holds Marriage records, 
            Birth/Death and Marriage Places, Education, Medical, Military 
            and Occupation information, and these also contribute to that 
            maximum of 32000 records.  I've yet to come across anyone who is 
            nearing this limit, although several persons have mentioned 
            approaching the 9999 name record limit. 

      10.Is it possible to increase the Name limit beyond 9999?
         A. When I originally began working on these programs, I thought 
            that the 9999 name record limit would not be much of a problem.  
            In fact, I still believe that it will prove sufficient for a 
            very large majority of FHS users.  In recent months I have had 
            several people express concern about reaching it though, 


                                     80



            including one person in England who was using the programs for 
            maintaining a file of pedigrees for dogs.  Actually, the design 
            of the name file allows for up to 32000 records.  The number 
            9999 comes from allowing only 4 digits for ID numbers in the 
            screen displays and on reports.  Extending the limit to 32000 is 
            not quite as simple as increasing the number of digits for ID 
            numbers however.  Some of the system's routines for building 
            relationship tables take advantage of the fact that no ID number 
            can be bigger than 16000...those routines would have to be 
            carefully evaluated and probably rewritten.  Another consider-
            ation is the limited size of the ".OTH" file, mentioned in the 
            response to the previous question.  Increasing the maximum size 
            of the Name file without a corresponding increase in size of the 
            ".OTH" file would likely lead to another set of problems.  The 
            "long term solution" would be to make an increase in these 
            limits part of the general file redesign mentioned previously.  
            I'm not sure right now whether there will be any other "interim" 
            solution.

      11.Are there versions of the Family History System for other types of 
         equipment (besides those compatible with the IBM family of PC's)?
         A. No, and I don't expect that I will ever have time to work on 
            versions for any other equipment.  There are some ways of making 
            programs written for the MSDOS world run on other machines.  I 
            have heard of users who have run the programs using "emulator" 
            software (and/or hardware) for the Atari, and there may be such 
            "setups" for the Apple or Amiga as well.  There is usually a 
            "performance penalty" to be paid though.  It is almost always 
            best to have software that is designed for the equipment on 
            which it is being run.  With the growing number of genealogy 
            programs supporting the GEDCOM format for data sharing, it is 
            likely that one can be found for those other environments as 
            well.  In that case, you can at least be "data conversant" with 
            your friends who are using other equipment, even though you may 
            not be using the same software.

      12.Are there versions of Family History System for other languages?
         A. Actually, I have received copies of the system that have been 
            modified to provide screen displays and/or reports in German and 
            Dutch and have heard of similar modifications in Swedish.  None 
            of these are supported by me though, and you may not receive 
            the system extensions in these other languages.  In recognition 
            of the interest in these programs in countries where English (or 
            "American") is not the native language, I do have plans for 
            enhancements that would at least provide for customizing reports 
            so that the report headings and field labels could be easily 
            tailored for different languages.  This will be my primary goal 
            for the next FHS update.  If all goes well (and it seldom does) 
            this should be ready late in 1990 or early 1991.  When I do get 
            around to redesigning the FHS file format, it will likely be 
            part of an extensive rewrite of the entire system.  At that time 
            I will give consideration to making the screen displays 
            "customizable" as well so that it may be possible to provide 
            both programs and reports (though not documentation) in "multi-
            lingual" versions.


                                     81

```
{% endraw %}

## BROWSE.DOC

{% raw %}
```
                              FAMILY HISTORY SYSTEM
                             View Document Procedure

  This Procedure for VIEWing the Family History System documentation files
  uses a utility program which permits you to scroll forward and backward
  through each document before continuing to the next one.

  You control the action of the program using the PC's special function keys
  as follows:  PGDN        advances down the document by one screen
               PGUP        moves back up the document by one screen
               DN Cursor   advances down the document by one line
               UP Cursor   moves back up the document by one line
               ESC         ends the viewing of the document
                           and advances to the next when viewing several
                           in succession




```
{% endraw %}

## CONTENTS.DOC

{% raw %}
```
                           FAMILY HISTORY SYSTEM
                     Contents of Distribution Diskettes
                         for Basic Set of Programs

Contents of FHS Distribution Diskette B1
  FHSDISK.B1    Identification File
  README        "Bootstrap" Document
  GO.BAT        Orientation procedure
  INTRO.DOC     Description of Software
  COPYRITE.DOC  Copyright Statement
  OPTIONS.DOC   Description of GO Procedure Options
  CONTENTS.DOC  This Document
  VERSIONS.DOC  Description of Versions of FHS from 1985 to March 1990
  MANUAL.DOC    Description of Documentation
  BROWSE.DOC    Using the BROWSE Utility
  PRINT.DOC     Preparing to Print Manual
  REGISTER.DOC  How to Register and Why
  REGFORM.DOC   FHS Registration/Software Order Form
  INSTALL.DOC   Instructions for Creating Working Copy of Programs
  INSTALL.BAT   Procedure for GO INSTALLing the programs
  FDINSTAL.BAT  Procedure for GO INSTALLing the programs on Diskettes
  HDINSTAL.BAT  Procedure for GO INSTALLing the programs on a Hard Disk
  BROWSE.COM    Utility for VIEWing long Documents
  SAMPLE.DOC    Description of some sample FHS family files

 The Following Files contain the Manual for the Basic FHS Programs
   SECTION1.DOC   Table of Contents and Introduction
   SECTION2.DOC   Getting Started
   SECTION3.DOC   Family History System Design
   SECTION4.DOC   Family History System Files and Datasets
   SECTION5.DOC   Report Descriptions
   SECTION6.DOC   Pointer Validation Program
   SECTION7.DOC   Export/Import Programs
   APENDIXA.DOC   Extended Options for Registered Users
   APENDIXB.DOC   Recording information for entry into the system
   APENDIXC.DOC   Adoptive Relationships & Date Status Fields
   APENDIXD.DOC   DATECALC, a Memory Resident Date Calculator
   APENDIXE.DOC   Logical File Record Structure Diagram
   APENDIXF.DOC   Responses to Frequently Asked Questions

-----------------------------------------------------------------------------

Contents of FHS Distribution Diskette B2
  FHSDISK.B2    Identification File
  FAMINIT.EXE   FHS Initialization Program
  FAMMENU.EXE   Main Menu Program
  FAMFILES.EXE  Maintain File Name Table
  FAMSCRNA.EXE  Maintain Screen Color Table and Error Tone
  FAMPRNTC.EXE  Maintain Printer Control Tables
  FAMVALID.EXE  File Validation Utility
  PAFGEDCM.EXE  GEDCOM Export/Import Program
  DATECALC.COM  Memory Resident DATE Calculator
  BRUN30.EXE    Runtime Library for QuickBASIC 3.0
                (C) Copyright 1986,1987 by Microsoft Corp.
  PKUNZIP.EXE   Program for Expanding FHS Sample Files
                (C) Copyright 1989 by PKWARE Inc.
  GENESIS.ZIP   Compressed FHS Sample File (Adam's Family)
  ROYAL.ZIP     Compressed FHS Sample File (Prince Charles' Family)
------------------------------------------------------------------------------

Contents of FHS Distribution Diskette B3
  FHSDISK.B3    Identification File
  FAMILY.EXE    File Update Program
  FAMRELAT.EXE  Ancestor/Descendant/Relative Report Program
  FAMGROUP.EXE  Family Group Worksheet Program
  FAMFFGRP.EXE  "Free Form" Family Group Report Program
  FAMCHART.EXE  Ancestor Chart Program
  FAMDESCH.EXE  Descendant Chart Program
  FAMEXORG.EXE  ORGCHART Export Program

-----------------------------------------------------------------------------

If you would like a printed copy of this document, enter: GO PRINT CONTENTS


```
{% endraw %}

## COPYRITE.DOC

{% raw %}
```
                            FAMILY HISTORY SYSTEM
                              Copyright Notice


  Although all programs on these diskettes are copyrighted by the author, you
  are permitted to make unlimited copies of these programs for your own use.
  Further, you are authorized, even encouraged, to share this system with
  others, provided you only supply them with a complete copy of the
  distribution diskettes as you received them (use the DOS DISKCOPY command).
  You may not request payment for such copies beyond the cost of media,
  postage and handling unless given permission in writing by the author.

  These programs are being provided for your use without any request or
  implied obligation for payment.  Those of you who do find them useful and
  want to receive the additional system options that are available should
  consider registering your use of the system as described elsewhere in this
  orientation procedure (enter: A>GO REGISTER).


  All programs on this diskette (C) Copyright 1985-1990 by Phillip E. Brown



```
{% endraw %}

## FILE0361.TXT

{% raw %}
```
Disk No:  361                                                           
Disk Title: Family History 1 of 3 (also 632, 2291)  (Disk 1 of 2)       
PC-SIG Version: S2.4                                                    
                                                                        
Program Title: FAMILY HISTORY SYSTEM                                    
Author Version: 07/90                                                   
Author Registration: $35.00                                             
Special Requirements: None.                                             
                                                                        
Ever wonder who's lurking in the upper branches of your family tree?    
The FAMILY HISTORY system, a modular genealogy program, will help you   
organize and refine your search.                                        
                                                                        
The system stores information about individuals, including all family   
relationships.  You are not limited in the number of relationships that 
might exist for each individual, or the number of generations of        
ancestors or descendants.  Information for up to 3200 individuals may   
be stored on a diskette and up to 9999 on a hard disk.  You can produce 
ancestor, descendant, relative, and family group reports and ancestor   
(tree) charts.  You may print out blank worksheets and charts to record 
information for entry into the system.  Sample files are included for   
the descendants of Adam (as recorded in Genesis) and the family of      
Prince Charles.  A GEDCOM export/import program permits sharing         
information with other genealogy software.                              
                                                                        
Research your roots and know where you came from.  A great gift for the 
next generation.                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## INSTALL.DOC

{% raw %}
```
                             FAMILY HISTORY SYSTEM
                          Installation  Procedure for
                             Basic Set of Programs

  Before beginning this INSTALL procedure, you should first make sure that you
  have all the diskettes that make up the public portion of the Family History
  System software.  You should have three 5 1/4" (360k) diskettes or two 3 1/2
  (720k) diskettes.  During the INSTALL procedure, the 5 1/4" diskettes will
  be referred to as "B1", "B2" and "B3", or the 3 1/2" diskettes will be
  referred to as "B1" and "B2".  If your diskettes are not labeled this way,
  you should mark them properly before beginning the INSTALL procedure.  To
  determine the proper Identification for a diskette, place the diskette in
  your A drive and enter:    dir  a:/p
  The "B1" diskette will have a file named "FHSDISK.B1" on it.  Similarly, the
  "B2" diskette will have a file: "FHSDISK.B2" and the "B3" diskette will have
  a file named "FHSDISK.B3".  In the following description, I will refer to
  these diskettes as the Family History System "distribution diskettes"
  because that is how they are "distributed" or "sent out" by me.

  (NOTE to Registered Users:  If you are installing the complete set of
  Family History System programs, you should have two additional 5 1/4"
  diskettes or one additional 3 1/2" diskette.  These will be labeled "X1"
  and "X2" for 5 1/4" or just "X1" for 3 1/2".  You should place the X1
  diskette in your A drive and enter:  A:GO INSTALL
  to receive instructions for installing the complete set of programs.  The
  remaining instructions in this document are for those who are just working
  with the public version of the system.)

  The distribution diskettes for the Family History System contain many files
  that are not used during the normal operation of the system.  The purpose of
  this procedure is to prepare a "working copy" of those files that are
  required for you to create, maintain and process files of information about
  your own Family.

  If you are planning to run the system from diskettes you will first have to
  format one or two diskettes to hold this working copy of the programs.  One
  diskette should be labeled the STARTUP diskette.  To prepare it, place your
  DOS diskette, which has the FORMAT command, in the "A" drive of your PC, the
  STARTUP diskette in the "B" drive and enter the following command:
    A>FORMAT B:/s
  If you are using 360k diskettes, you will need a second diskette which
  should be labeled the REPORT diskette.  After preparing the STARTUP diskette
  place the REPORT diskette in the "B" drive and enter the command:
    A>FORMAT B:    (leave off the "/S" this time)

  WARNING: any form of the FORMAT command will destroy all contents of the
    diskette which is placed in the "B" drive, so make sure the one you use
    does not have anything on it that you wish to save.

  If you are planning to run the programs from a HARD DISK, the INSTALL
  procedure will create a FAMILY sub-directory on your hard disk and copy
  all program files to it.  An FHS.BAT file will be created in the main
  directory of your hard disk to assist you in starting the programs.

  When you have completed this preparation and are ready for installation
  to begin, place the Family History System "B1" diskette in drive "A" and
  enter:

            A:GO INSTALL xx y

  where:   xx = 2D    if installing on two 360k floppy diskettes
              = 1D    if installing on a 720k (or greater) capacity diskette
              = HD    if installing on a hard disk

       and  y = the drive identifier (B,C,D,...) for the hard disk drive
                or floppy drive on which the working copy of the programs
                or the sample files is to be created.


  SOME NOTES ABOUT THE INSTALL PROCESS:
    1. The INSTALL procedure requires that the distribution diskettes be
       compatible with the "A" drive of your PC.  If the diskettes you
       received are not compatible with your "A" drive, but instead are
       on diskettes for your "B" drive, you can still install the
       programs on a hard drive by using the DOS ASSIGN command to redirect
       all requests for the "A" drive to the "B" drive.  The command for
       doing this is:  C>assign a b
       Following this command, your "B" drive will be treated as the "A"
       drive (as well as the "B" drive).  You may then continue with the
       INSTALL procedure described above.  After the installation is
       complete, you will want to immediately restore the drives to their
       normal identification by entering:      C>assign

    2. If you are upgrading from an earlier version of this software, you
       may continue working with all your family files just as before.  No
       conversion process is required.  If you have made any changes to the
       default file name tables, screen colors, or printer control tables,
       you may transfer those changes to the new program diskettes by
       copying the FAMILY.DAT file from your previous program diskette to
       the STARTUP diskette.  If you are re-installing the programs on a
       hard disk, your FAMILY.DAT file will not be affected so your changes
       to these default values will be retained throughout the INSTALL
       process.

  --------------------------------------------------------------------------

       Enter:          GO PRINT INSTALL
       to receive a printed copy of these instructions.


```
{% endraw %}

## INTRO.DOC

{% raw %}
```

                            FAMILY HISTORY SYSTEM
                              July 1990 Update

 These programs were written to provide a simple means for maintaining files
 of information concerning related individuals and for producing standard
 types of genealogical reports from information in those files.

 Reports produced by the system include: Ancestor, Descendant & Relative lists,
 Family Group Reports, Descendant Charts, and complete sets of Ancestor (tree)
 Charts.  No limits are placed on the numbers of generations or relationships
 stored in the files and information for up to 3500 individuals may be stored
 on a 360K diskette (or up to 9999 individuals on a high density diskette or
 hard disk).

 Requirements for running the programs on these diskettes are:
   an IBM-PC,PCjr,XT,AT or compatible; 256k RAM; at least one disk drive;
   an 80 column monitor; and DOS 2.0 or later.
 A printer is not required for creating family files or for displaying
 information in a file.

 These programs were compiled with Microsoft QuickBASIC 3.0.  There is another
 (very slow) version which will run on a PCjr with as little as 128k using the
 PCjr Cartridge Basic.

```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
                               FAMILY HISTORY SYSTEM
                                   DOCUMENTATION

  Documentation for the Family History System consists of a 81 page manual.
  You may VIEW or PRINT this document in whole or in part by entering:
           A>GO VIEW xxxxxx    to view on the screen
       or  A>GO PRINT xxxxx    to print on LPT1:
  where xxxxx is one of the following: (with indication of content)
       MANUAL         -  to view or print the entire manual
       SECTION1       -  Table of Contents and Introduction
       SECTION2       -  Getting Started
       SECTION3       -  Family History System design
       SECTION4       -  Family History System Files and Datasets
       SECTION5       -  Report Descriptions
       SECTION6       -  Pointer Validation Program
       SECTION7       -  Export/Import Programs
       APENDIXA       -  Extended Options for Registered Users
       APENDIXB       -  Filling out Family Group Worksheets
       APENDIXC       -  Note on Adoptive Relationships and Date Status fields
       APENDIXD       -  DATECALC, a Memory Resident Date Calculator
       APENDIXE       -  Diagram of Family file record structure
       APENDIXF       -  Responses to Frequent Questions


```
{% endraw %}

## OPTIONS.DOC

{% raw %}
```
                            FAMILY HISTORY SYSTEM
                                 GO Options

  Options available to you using the GO command are:

      GO            to see a description of the Family History System
      GO OPTIONS    to see this list of OPTIONS
      GO CONTENTS   to see a description of this diskette's CONTENTS
      GO VERSIONS   to see list of changes to previous VERSIONS of this system
      GO SAMPLE     for a description of some FHS sample files
      GO MANUAL     to see a description of Family System documentation
      GO VIEW x..x  to display all or part of manual on the screen
      GO PRINT x..x to print all or part of the manual on an attached printer
      GO INSTALL    to find out how to create a working copy of the programs
      GO REGISTER   to find out about other system functions available


  NOTE: All "parameters" supplied to the GO procedure must be in CAPS.
        All commands must be entered with the Family History System
        distribution diskette in the "A" drive.



```
{% endraw %}

## PRINT.DOC

{% raw %}
```
                              FAMILY HISTORY SYSTEM
                            Print Document Procedure

  Before beginning the printing of this document, you should make sure that
  your printer is set at the top of forms.

  Make sure your printer has enough paper to print the parts of the document
  you have requested.  The following table indicates the (approx) number of
  pages contained in each part of the manual.

    SECTION1 (5); SECTION2 (13); SECTION3 (10); SECTION4 (3); SECTION5(17);
    SECTION6 (6); SECTION7 (8)
    APENDIXA (2); APENDIXB (3); APENDIXC (2); APENDIXD (5); APENDIXE (1);
    APENDIXF (3)



```
{% endraw %}

## REGFORM.DOC

{% raw %}
```




                              FAMILY HISTORY SYSTEM
                         Registration/Software Order Form


      The Family History System only runs on equipment that is compatible
      with the IBM family of personal computers.  Other requirements are:
         at least 256k RAM, one diskette drive, an 80 column monitor,
         and PC/MSDOS 2.1 or later.


         ___  $12.00  Update to Public Version of Family History System only
                      (3-5 1/4" or 2-3 1/2" diskettes)

         ___  $ 2.00  Demo Copy of Shareware ORGCHART Program
                      (This program requires separate registration with its
                       author, Jerming Lee.  Details are on the diskette.)

         ___  $35.00  FHS Registration (5-5 1/4" or 3-3 1/2" diskettes)
                      (The Public version of programs is included in package)
                      NOTE: All documentation (81 page + 43 page manuals) is
                      VIEWed or PRINTed from the diskettes that you receive.
                      Although you may share copies of the public version of
                      the programs that you receive, the programs that are
                      on the Extensions diskette(s) may only be used by
                      you and members of your immediate family.  You will be
                      notified of major updates to the system.  Currently, a
                      $15.00 fee is required at the time that you order an
                      update.  All updates are cumulative.

        Disk Format:  ___ 5 1/4" (360k)   ___ 3 1/2" (720k)
                      (The format you choose should be compatible with the
                      "A" drive of the PC on which they will be INSTALLed.)

                                                      

         NAME: _____________________________    +--------------------------+
         ADDRESS: __________________________    !   Send all requests to:  !
               _____________________________    !      Phillip E. Brown    !
               _____________________________    !      834 Bahama Drive    !
         CITY: _____________________________    !      Tallahassee, Fla    !
         STATE/PROVINCE: ___________________    !                32311     !
         ZIP/POSTAL CODE: __________________    +--------------------------+
         COUNTRY: __________________________


        I cannot process charge card orders.

        Payment for orders outside the U.S. should be made in U.S. funds
        with a Bank Check or International Money Order drawn against a bank
        with a branch address in the U.S.  At this time there is no added
        fee for Air Mail postage to locations outside the U.S.







```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
                             FAMILY HISTORY SYSTEM
                            Registration Information

  The programs provided on this diskette are made available for you to use
  without any obligation for payment to the author.  Many people should find
  the functions provided by this basic system to be completely adequate for
  organizing and maintaining a record of their family's history.  However,
  there are now several extensions to the system that you may find useful.
  These extensions to the Family History System will only be available to
  persons who have registered their use of the system by sending $35.00 to:

                              Phillip E. Brown
                              834 Bahama Drive
                              Tallahassee, Fla. 32311

  Registered users will receive the latest version of all the programs and
  will be notified of subsequent major updates to the system.

  The following enhancements are now available for registered users:

       1. a program for creating sorted indexes for the NAME file (based upon
          combinations of: Surname, Given name, Birth & Death dates, most
          recent marriage date, Sex and ID);
          this program can also create an index in which the individuals in
          an ancestor/descendant/relative work file are in "relationship"
          sequence...that is, the order they would appear in an ancestor,
          descendant or relative report.  Such an index is useful for
          printing a merged family group report in relationship sequence;

       2. a program for producing printed indexes for ancestor, descendant,
          relative and family group reports, descendant charts, and for
          ancestor charts and maps;

       3. a program for searching the family files on criteria similar to
          the search option of the maintenance program (Search options
          include soundex searches on names and places.); this program also
          produces listings of information for selected individuals
          (including addresses, comments, and relationship) in indexed or
          ID# sequence.

       4. an option for producing Summary Reports; these include a Surname
          Summary report, Ancestor and Descendant generation level summary
          reports, and a Relative "table".

       5. a relationship calculator;

       6. an export option for creating a MailMerge format address file;

       7. an additional GEDCOM export/import program that allows you to
          transfer all types of information between FHS family files.

There is a separate 40+ page manual describing the operation of these extended
options.  It is printed from the Extensions diskette(s).

If you do decide to register,  you should designate what format diskettes you
wish to receive:  5 1/4" (360k) or 3 1/2" (720k).  The format you choose
should be compatible with the "A" drive of the PC that will be used to INSTALL
the programs.

As a registered user, you will be notified of future major enhancements.  I
do ask a $15.00 fee when you order updates after the initial registration
packet.  All updates are cumulative, so if you decide not to order one, you
will still receive all enhancements to date with an order for a later update.

At this time I do not ask any additional fee for postage to locations outside
the U.S.  I do request that payments for registration or updates from
outside the U.S. be made with a money order or bank check drawn against a
bank with a branch address in the U.S.

                  -------------------------------------

Enter: GO PRINT REGISTER  to print a copy of this document

Enter:  GO PRINT REGFORM  to print a Registration/Software Order form
```
{% endraw %}

## SAMPLE.DOC

{% raw %}
```



                              Family History System
                                   Sample Files

      To help you become familiar with the Family History System report
      options without having to enter a great deal of data, there are two
      FHS sample files that have been placed on these diskettes.  They are
      in datasets:  GENESIS.NAM, GENESIS.ADR, GENESIS.OTH
              and   ROYAL.NAM, ROYAL.ADR, ROYAL.OTH.

      The GENESIS file contains information for 24 generations of descen-
      dants of ADAM as recorded in the book of GENESIS in the Bible.  I
      created this file during the early stages of work on these programs,
      to test their capacity for handling very long family lines.  The
      birthyears were estimated by accumulating the ages recorded there and
      the birth places simply indicate the scripture verse in which the
      individual was first mentioned.

      While the GENESIS file may be interesting, because of its source, the
      lines of descendancy and ancestry do not show much "branching".  The
      second family file, ROYAL.*, has a much more interesting pattern of
      relationships.  That file was created by a FHS user and records the
      ancestry of Prince Charles of England (ID #1).  It has 39 generations
      of ancestry for him, which results in quite an ancestor Map.  (This
      Map does require that you print it in two "strips", using the printer
      OFFSET parameter.)  Unfortunately, it also hilites the occasional
      inadequacy of the FHS name fields, especially when used for recording
      title information.

      You should copy these family files to a separate data diskette (or
      into the FAMILY directory of your hard disk) rather than try to use
      them directly from the distribution diskettes.  If you are going to
      place the files on your hard drive (assumed here to be drive C), then
      you should:
          Place the B2 diskette in your A drive and enter:
                      A>PKUNZIP GENESIS C:\FAMILY
               and:   A>PKUNZIP ROYAL C:\FAMILY
      If you wish to move the files to another diskette, then format a
      blank diskette and place it in the B drive of your PC.
      Then place the B2 diskette in your A drive and enter:
                      A>PKUNZIP GENESIS B:
               and:   A>PKUNZIP ROYAL B:

      When you start a family session to try out these files, use Main Menu
      option F3-A to change the file name table to point to the right drive
      and file name.



```
{% endraw %}

## SECTION1.DOC

{% raw %}
```



                            Family History System 
                     Manual For the Basic Set of Programs

                                  CONTENTS

      I.   Introduction................................................1
           Note to New Users...........................................2
           Note to Former Users........................................2
           Note to Users of Other Genealogy Software...................2

      II.  Getting Started  
           A.Creating working copies of the programs...................4
           B.Beginning a Family History System work session............5
             1.MAIN MENU program, EXITing from the system..............5
             2 Setting the DATE, TIME and Default DATE Format..........6
             3.Setting default system parameters.......................7
             4.Creating a set of Family files..........................7
               a.Adding a Name Record to the File......................9
               b.Creating a Marriage or Family Record.................11
               c.Maintaining Address Information......................13
               d.Listing CHILDREN of an Individual or Marriage........13
               e.Climbing Ancestor Trees..............................14
               f.Searching the Name Records on File...................14 
           C.Importance of `backing up' system files..................15

      III. Family History System design
           A.Use of Fixed Formatted screen displays...................17
           B.Modular design, switching between programs...............17
           C.System MESSAGES (use of ellipsis)........................17 
           D.Use of FUNCTION keys.....................................17
           E.Use of ESCAPE key........................................18
           F.Full Screen mode of data update..........................18
             1.Updating screen displays (other than comments).........19
             2.Updating Comment display...............................19
             NOTE:Concerning the Formatting of Comments in Reports....21
           G.Segmented Screen in File Maintenance Program.............21
           H.Changing the Screen Attribute Table & Error Tone.........22
             Color/Monochrome support, setting default values
             Changing frequency and duration of the Error Tone........24
           I.Use of Printer Setup Table...............................24
             1.Printer control codes
             2.Form size
             3.Multiple printer SETUP tables
             4.Standard Setup tables
           J.File Name Table..........................................25
             1.Use of multiple disk drives
             2.Use of RAM disk

      IV.  Family History System Files and Datasets...................27
           A. FHS Family File.........................................27
           B. Report Program WORK Datasets............................29
              Ancestor/Descendant/Relative WRK Files
              Select WRK Files
              Reference WRK Files
              INDEX Files


                                      1



      V.   Report Descriptions
           A. Definitions.............................................30
           B. Report Descriptions
              ..Fixed Format vs. Free Format..........................32
              ..Report Option Menus...................................32
              ..Other Report Options..................................32
              ..Pausing and Cancelling the Printing of Reports........33
              1.Ancestor Report.......................................33
                Ancestor/Descendant/Relative Report Options Menu......34
              2.Descendant Report.....................................35
              3.Relative Report.......................................36
              4.Family Group Report...................................38
                a.Identifying Group Reports to be Printed.............40
                b.Printing Family Group Reports.......................41
              5.Ancestor Charts.......................................44
                4 Generation Charts
                All Generation Map
              6.Descendant Charts.....................................45
           C.Report Program Parameters................................49

      VI.  Validating System Maintained "Pointer" Information.........51
       
      VII. Export/Import Utilities....................................57
           A.GEDCOM Export/Import Program.............................57
             ..Version 2.0 and 2.1....................................58
             1.Program Operation......................................58
             2.Changing the Table of Information to Process...........59
             3.Exporting Data from your Family file...................59
             4.Importing Information into your Family file............61
             5.Producing listings of Exported Data....................63
           B.ORGCHART Export Progrm...................................63

      Appendix A.  Extended Options for Registered Users..............65
      Appendix B.  Recording information for Entry into the system....67
      Appendix C.  Date Status Fields and Adoptive Relationships......70
      Appendix D.  DATECALC, a RAM Resident Date Calculator...........72
      Appendix E.  Logical File Record structure diagram..............77
      Appendix F.  Answers to some frequently asked questions.........78














            (C) Copyright 1985,1986,1987,1988,1990 by Phillip E. Brown




                                      2



      I. Introduction
         
      I want to thank you for choosing the "Family History System" for 
      organising and reporting the results of your research into your own 
      family history.  Although I first began work on these programs for the 
      purpose of "computerising" the information in a family booklet 
      prepared by a distant cousin of mine, I have been pleased to find that 
      this software has proven useful to so many others with similar 
      interests.  

      Using this software, you will be able to build one or more "family 
      files", each of which may have information for up to 9999 individuals 
      recorded in it.  (Each file is limited to the size of the disk(s) on 
      which it resides.  On 360k, 5 1/4" floppies a file may have up to 3600 
      names, on 720k 3 1/2" diskettes a file may have up to 7200 names.)  
      Provision is made for recording family relationships as well as names, 
      dates and places.  No limits are placed on the number of relationships 
      that may exist for each individual or for the number of generations of 
      ancestors or descendants that may be recorded.

      The basic system produces Ancestor, Descendant, Relative and Family 
      Group reports, Ancestor (tree) Charts and Descendant Charts.  Blank 
      worksheets and charts may be produced to record information for entry 
      into the system.  

      Requirements for running these programs are:
          1. an IBM PC, PCjr, PC XT, AT, PS/2 or compatible computer
          2. at least 1 diskette drive 
          3. an 80 column monitor
          4. at least 256k of RAM memory
          5. Dos 2.0 or later 
      A printer is recommended for making full use of the system but is not 
      required for creating, maintaining or displaying information in the 
      system files.

      For users of the PCjr who have only 128k of RAM installed, there is a 
      version of the program which runs on that machine using Cartridge 
      BASIC.  It is very slow, but provides all the capabilities of the 
      system with that configuration.  

      These programs are being made available for general use and unmodified 
      copies of the distribution diskettes (the diskettes on which you 
      received the programs) may be freely shared with others.  No fee may 
      be charged for such copies beyond that required to cover the expense 
      of media, postage and handling incurred in producing them unless 
      written permission is given by the author. 

      Those who find these programs useful and would like to receive 
      additional options may become `registered' users by sending $35.00 to:

                              Phillip E. Brown
                              834 Bahama Drive
                              Tallahassee, Fla. 32311

      Registered users will receive the most recent update to the extended 


                                      1



      system and will be notified of future major updates as they become 
      available.  Please see Appendix A at the end of this manual for a 
      description of the enhancements that are currently available among the 
      system extensions.

      A NOTE ESPECIALLY FOR NEW USERS

      While I have tried to make these programs as easy to use as possible 
      without reducing the available options, the on-screen help is limited 
      to brief menus of program functions.  Therefore, I hope you will come 
      to this manual often to try to clear up any questions you may have 
      about the programs' operation.  I realize that this is not the 
      "tutorial" type of instruction booklet that many would like, but I 
      have tried to include descriptions of every aspect of the operation of 
      the programs.  

      A NOTE FOR USERS OF EARLIER VERSIONS OF "Family History System"

      Those of you who may be upgrading from an earlier version of the 
      programs should be interested in knowing that, during the 5 years 
      that the system has been distributed publicly, there have been no 
      changes to the file format that affect your being able to use your 
      existing "Family History System" data files with the programs in this 
      update.  After installing these programs, you should be able to 
      continue working with your previous family files just as before.

      There were, however, errors in some earlier versions of the file 
      update program that may have caused problems involving program 
      maintained information that "connects" the various pieces of an 
      individual's record together.  There is now a utility program (the 
      "validation" option) which can help you to locate and correct any such 
      program generated file errors, as well as errors that may have 
      resulted from a prematurely interrupted file update session.  I 
      encourage you to review Section VI of this manual describing that 
      option.

      For those who have been using the "Sept 88" version of the programs, 
      the parts of the manual to which you should pay particular attention 
      are Section V.B, especially regarding the new "free form" reports and 
      report option Menus and Descendant Charts, and Section VII.B, 
      describing the new ORGCHART export option.  The new Appendix F may be 
      of interest too.  

      A NOTE FOR USERS OF OTHER GENEALOGICAL SOFTWARE

      If you have information stored in files prepared by other genealogical 
      software, you may be able to transfer much of that information into a 
      FHS family file without having to "rekey" any of it.  This set of 
      programs includes a utility program that makes use of the GEDCOM 
      format for transfer of genealogical information.  If the software that 
      was used to prepare your other files also supports that format, and 
      many of today's most popular programs do, you may be able to EXPORT 
      information from those files and IMPORT them into a FHS file.  Please 
      read Section VII.A below for more information about the GEDCOM 
      utility.


                                      2




                                -----------------

      Although this public version of the 'Family History System' is the 
      foundation for the extended system that is sent to registered users, I 
      have tried in the past to avoid any references to those extended 
      options in these programs so that those who do not wish to register 
      will not feel that they are using an incomplete set of programs.  
      However, in the past two updates, in an attempt to extend the 
      usefulness of the indexing features of the registered version, I have 
      been forced to include, within these programs, options that only have 
      significance for those who have the extended system.  In particular, 
      the ability to print family group reports in INDEXed sequence, and the 
      optional creation of REFERENCE work files for the printing of report 
      indexes are either unavailable or of no use to unregistered users.

      I believe that most people will still find this basic set of programs 
      to be an excellent tool for recording and reporting their Family 
      History.

                                -----------------

      While I have encountered (and corrected) a number of errors during my 
      use of the system, there are no doubt errors remaining in some of the 
      programs, hopefully none serious.  If you should find any, I would 
      appreciate very much your sending a description of the problem to me 
      at the address shown on the previous page so that I may try to correct 
      it.


                       Good luck in tracing your `roots'.





















             All Programs (C) Copyright 1985-1990 by Phillip E. Brown




                                      3

```
{% endraw %}

## SECTION2.DOC

{% raw %}
```



      II.  Getting Started.

      A. Creating working copies of the programs

      The basic set of programs in the Family History System is distributed 
      on three 5 1/4" diskettes or two 3 1/2" diskette.  The diskettes 
      should be labeled B1, B2 (and B3) for identification purposes during 
      the installation of the programs.  If your diskettes do not have 
      external labels marked in this way, you may identify the diskettes by 
      the following:  
      Place a diskette in the A drive and enter:    A>dir A:
           the B1 diskette will have a file named:  FHSDISK.B1
           the B2 diskette will have a file named:  FHSDISK.B2   
       and the B3 diskette will have a file named:  FHSDISK.B3

      The B1 diskette has an "orientation" procedure that may be started by 
      placing the diskette in the "A" drive of your PC and entering:  A:GO
      This 80+ page manual can be printed from files on the diskette by 
      entering the command:  A:GO PRINT MANUAL

      The "GO" procedure requires that the B1 diskette be in the "A" drive 
      of your PC.  If you have received the diskettes in a format that is 
      not compatible with your "A" drive, you may still be able to use this 
      procedure by employing the DOS ASSIGN command.  For example, suppose 
      you have received the programs on 5 1/4" diskettes but you have a 
      3 1/2" A drive and a 5 1/4" B drive.  If you enter:  ASSIGN A B
      and place the B1 diskette in the B drive, you may use the GO procedure 
      to print the manual and install the programs on a hard disk.  After 
      finishing those tasks, you will want to "undo" the reassignment of 
      drives by simply entering:   ASSIGN
      which will return all drive assignments to normal.

      These "distribution" diskettes  contain many files which are not 
      required during the normal operation of the system.  For instructions 
      on how to create a working copy of the programs, without those 
      unnecessary files, place the B1 diskette in drive "A" and enter: 
           A:GO INSTALL    
      Instructions are provided for installing the programs on either floppy 
      diskettes or a hard disk.  For example, you will be instructed to 
      enter:    A:GO INSTALL 2D B   to install the programs on 2 360k disks
             or A:GO INSTALL 1D B   to install the programs on 1 diskette
                                    with capacity >= 720k
             or A:GO INSTALL HD C   to install the programs on hard disk
                                    drive "C"

      Those running the programs from 360k, 5 1/4" floppy diskettes should 
      note that two program diskettes are now required (a STARTUP and a 
      REPORT Program diskette).  During an FHS working session it will be 
      necessary for you to change program diskettes when some options are 
      selected from the Main Menu. 

      If you are installing the programs on a hard disk, they will be placed 
      in a FAMILY sub-directory of the hard disk.  If you are reinstalling 
      the programs, they will simply replace the existing programs in the 
      FAMILY sub-directory.  


                                      4




      After installing the programs on diskette(s), you may start the system 
      by placing the STARTUP program diskette in drive "A" and entering:    
            A>fhs      or    A>faminit
      If the programs are installed on a hard disk, you will start the 
      system by entering:   C>fhs
      or by entering:  C>cd \family  
                  and  C>faminit

      On the PCjr, the BASIC language cartridge must be installed in one of 
      the cartridge slots when using the "interpreted" or uncompiled version 
      of the programs.  


      B. Beginning a Family History System work session

      When starting the Family History System, the screen will be cleared 
      and reformatted with the system's `introductory panel'. This panel, 
      which shows the `update' of the program diskette that you are using, 
      will only appear for a few seconds, after which the MAIN MENU of 
      system options will appear.


      1. MAIN MENU Program

      Besides being the first functioning panel that you will see when 
      entering the system, the MAIN MENU provides the only `authorized' and 
      `safe' means of exiting the system (by pressing F10).  You are never 
      far from the MAIN MENU.  It can be reached from any of the programs in 
      the system by pressing the `F9' key.

      The purpose of the MAIN MENU is to permit you to easily select the 
      system function that you wish to perform.  These functions include:
             1. F1 - Display/Update/Create Family History System files
             2. F2 - Produce Reports
             3. F3 - Utility Functions
             4. F4 - Set current DATE, TIME and DATE Format
             5. F8 - Execute DOS Commands (DOS 3.0 or later)
             6. F10- Exit from the system (Return to DOS)

      The system functions are selected by pressing the indicated `function 
      key'.  If any other key is pressed, a soft tone is sounded and nothing 
      else happens.  When a `legal' key is pressed, the corresponding func-
      tion key designator, next to the function description on the screen, 
      will be hilited.  If you have selected a function, such as F2, that 
      has several options to choose from, you will be prompted to enter a 
      character corresponding to the one you wish to select.

      When you have fully described the system function you wish to perform, 
      the program which performs that function will be read from the program 
      diskette and given control.  If the program cannot be read from the 
      diskette (for example, if the correct program diskette is not in the 
      `default' drive, or the drive door is open, or the program diskette is 
      for some other reason unreadable), the message: 
               "Put Program diskette in default drive..." 


                                      5



      will appear on the bottom line of the screen.  If you are able to 
      determine the reason for the problem and correct it (for example, by 
      putting the correct program diskette in the appropriate drive), you 
      may press the `space bar' and the system will make another attempt to 
      read the program from the diskette.  If for any reason you decide not 
      to continue with the selected option, you may press the `ESC' key and 
      you will be able to reselect any MAIN MENU option.  (The ESCape key is 
      recognised by most programs in the set as an operator request to 
      terminate a process that has been started.)

      The next paragraph discusses the setting of current date and time.  
      The section following that discusses some procedures for "customizing" 
      the system for your configuration.  If you are a first time user of 
      the Family History System, I recommend that you review these sections 
      before going into any other area of the system.


      2. Setting CURRENT DATE, TIME and DATE Format

      The setting of the current date, time and default format for entering 
      dates are the only system functions that are performed within the MAIN 
      MENU program.  

      Unless you have a `clock calendar' board on your computer or have 
      previously set the date and time under the control of DOS or another 
      program, the current DATE will probably be `01-01-1980'.  Because the 
      current date is used to determine the ages of living persons that 
      appear on some of the reports and in the file maintenance program, it 
      is important that it be properly set if any reports are to be 
      produced.  The time is not used by the system and is only included for 
      your convenience.  

      If you press the F4 key, you will be prompted to:
             Select:  1) Change DATE and TIME   2) Change DATE Format

      If you select "2) Change DATE Format", you will be prompted to:
             Select:  1) MM-DD-YYYY  2) DD.MM.YYYY  3) YYYY.MM.DD  4) SAVE
      If you press "1", "2" or "3" the format for the current date will be 
      changed accordingly.  The format that appears there will be the one 
      that must be used for entering dates in the file update program.  
      After you have selected your preferred format, you may press "4" to 
      SAVE the date format in file FAMILY.DAT so that it will be 
      "remembered" the next time you begin a FHS working session.  If you 
      simply press the Enter key, the format will be used only for the 
      remainder of the current working session.

      If you select "1) Change DATE and TIME", you will be prompted to:
                        Enter the current DATE and TIME
      and the cursor will appear at the left most character of the displayed 
      date.  You must enter the date in the format displayed.  Further, it 
      must be a valid date and not be before "Jan 1,1980".  After entering 
      the date, the cursor will automatically advance to the first character 
      of the time.  The time must be entered in the form HH:MM:SS.  You may 
      use the 24 hour convention for denoting AM or PM.  If you wish to go 
      back to reenter the date, press the SHIFT+TAB keys at the same time.  


                                      6



      After you have keyed in the date and time to your liking, you may 
      indicate to the program that you wish to reset the current values by 
      pressing the RETURN or ENTER key.  If an error is found in either the 
      date or time, a tone will be sounded and you may correct the error.

      If for any reason you wish to terminate the option, you may press the 
      ESC key and you will then be able to reselect any of the MAIN MENU 
      options.


      3. Setting DEFAULT System Parameters

      One thing you may wish to do when you first begin a FHS session is to 
      examine the system defaults for the file names, screen attribute 
      table, and printer setup table used by the system (Main Menu options 
      F3-A,B,C).  Some reasons for doing this are:

         a. To customize the default family file names.  For example, you 
            may want to change the names of the family file datasets from 
            FAMILY.NAM, FAMILY.ADR and FAMILY.OTH to something like 
            RUSSELL.NAM, RUSSELL.ADR and RUSSELL.OTH.  You can of course 
            build multiple family files and it is common to use the primary 
            surname as a dataset prefix to distinguish them.  You will also 
            want to make sure that the "drive identifiers", that is, the two 
            characters at the beginning of each dataset name ("A:", "B:", 
            "C:" etc.), are correct for your placement of the datasets.  
            These adjustments can be made using Main Menu option F3-A.

         b. To choose a more satisfactory set of screen attributes (colors 
            or light/normal/dim brightness) for the display of information 
            on the screen.  Although the system, upon first entry, checks to 
            see whether the IBM monochrome or a graphics display adapter is 
            being used and selects a "screen attribute table" accordingly, 
            if you are using a color monitor you may find the colors used to 
            be unappealing or difficult to read. Main Menu option F3-B 
            permits you to adjust these.

         c. To choose a printer control table more appropriate for your 
            equipment.  While the original printer table is based upon a 
            common standard, there are a number of tables for more specific 
            printers selectable under Main Menu option F3-C.  You may also 
            create a custom printer setup for printers not formally 
            supported by a prepared setup. 

      (Please see Sections III-H,I,J for more complete discussions of these 
      options).


      4. CREATING and UPDATING a set of Family files

      Data files for the Family History System are initialized and updated 
      in the system's FILE MAINTENANCE Program which is selected by MAIN 
      MENU option F1.  This program is distinguished by its use of `seg-
      mented' displays.  Sections III.G and III.F discuss in more detail 
      the design of these displays and the general rules for updating infor-


                                      7



      mation on them.  In the following discussion I will refer to each of 
      the formatted segments of the screen as a "view". 

      The first `view' you are presented in the file update program shows 
      the Menu of options available in the File Maintenance program.  This 
      view provides the only `legal' means for EXITing the file maintenance 
      program (by pressing `F9' to request a return to the system's MAIN 
      MENU display).  At that time, all "open" files will be "closed" and 
      all updates which may have been held in memory by DOS will be 
      permanently written to your family files.  If the program diskette has 
      been removed from the default drive (for example if a separate data 
      diskette has been placed in that drive) you will be prompted to 
      replace the program diskette at the appropriate time.  You should not 
      replace the program diskette before being prompted to do so because 
      the "open" files may not have been completely updated yet.  (You are 
      never `far' from this list of primary options while in the file 
      maintenance program.  It can be reached from just about any part of 
      the program by pressing the ESCape key enough times.)

      The first option selected whenever the file update program is being 
      used should be `F1', Open/Close/Create Family Files.  (It is automat-
      ically selected for you when you enter this program.)  When a program 
      `opens' a file, it is requesting the operating system to permit it to 
      read information from or write information to the file.  Ordinarily 
      this is done automatically by a program without the user's having to 
      do anything.  In this program however, because the files remain open 
      for long periods of time to process multiple user requests, and 
      because a file could potentially become `damaged' if the user were to 
      change data diskettes or `illegally' exit from the system (for 
      example, by turning the machine off) while the file is open, I have 
      chosen to require you to explicitly request that the files be opened 
      at the beginning of the program as a reminder of the situation that 
      prevails.  All open files will automatically be closed when you return 
      to the MAIN MENU program.  (See section II.C for a discussion about 
      protecting yourself from loss of information in damaged files.)

      When the "Open/Close/Create" option is selected, you will see dis-
      played in the upper right viewing area a list of the "datasets" used 
      to store your family information as well as the options that may be 
      `function key' selected from this view.  You should also note that the 
      `hilited' border moves from the upper left to the upper right viewing 
      area.  While in this program, the `active' view (the one from which 
      program options may be selected) is enclosed by a `hilited' border.  

      (NOTE: The term "dataset" is used here to refer to a named area on a 
      diskette or hard disk which contains a program or data.  I am told 
      that this term is peculiar to an IBM environment, but it is one that I 
      find natural and will use frequently in this document.  Many people 
      will use the term "file" for what I am calling a dataset, however I 
      usually think of a "file" as a collection of logically related infor-
      mation and as such it may consist of several datasets.  When I speak 
      of a "Family File" I will mean the entire collection of information 
      that is stored in the three datasets described here.)

      Three datasets are used by the system to store your family history 


                                      8



      information.  You might think of these as three card files used to 
      store different types of information.  The first dataset, the NAME 
      dataset, is used to store basic information concerning an individual, 
      including the name, sex, birth and death dates of the individual.  The 
      second dataset is used to store the various types of ADDRESSes that 
      are permitted in the system.  The third dataset of OTHER data 
      contains: birth, death and marriage places; marriage records; health, 
      education, military and work information; and notes or comments.

      Because you may wish to maintain multiple family files, with different 
      names, or you may wish to place the datasets on one or more separate 
      data diskettes located on a different drive from the program diskette, 
      you are permitted to change the file `specifications' displayed before 
      opening or creating the files.  I refer you to your DOS manual for a 
      description of file naming conventions which you should use.  (Please 
      note that the "A:" before the dataset name describes the drive on 
      which the program is to look for the dataset.  You may change this to 
      "B:", "C:", etc. if you want the program to look for the datasets on a 
      drive other than the "A" drive.)

      If this is your FIRST time using the system you will want to `CREATE' 
      or initialize the file by selecting option F3.  (If the datasets 
      already exist, you will be asked to confirm that it is okay to DELETE 
      the datasets during the process of re-initializing them.  Be WARNED 
      that REinitializing a set of family datasets will result in the LOSS 
      of ALL DATA currently stored in them.)  After the file has been 
      CREATEd, in future executions of this program you will use F1 to 
      simply OPEN the files.  When the datasets are open you may return to 
      the view of main options of the file maintenance program by pressing 
      the ESCape key.

      (Before continuing with this section, you may want to read Appendix B 
      concerning the recording of information on Family Group Worksheets 
      prior to entry in the system.)

      In what follows, I will not attempt to fully describe all the options 
      available in the file maintenance program, however I will try to 
      describe the following:

         a) ADDING a NAME record to the file;
         b) Recording MARRIAGE information;
         c) Maintaining ADDRESS information;
         d) Listing CHILDREN of an individual or `marriage';
         e) `Climbing' the ancestor tree through PARENT relationships;
         f) SEARCHing name records.

      I hope that you will experiment to become familiar with these and 
      other parts of the file maintenance program so that you may determine 
      which options of the program are appropriate for recording the histor-
      ical information of your family.

      a) ADDING a NAME RECORD to the File
         If you are just beginning to enter data into your family file then, 
         after opening the files and returning to the primary menu of file 
         maintenance options,you will select option "F2  ADD a Name Record".  


                                      9



         The `current viewing area' will move to the upper right corner of 
         the screen which will be formatted with labels describing the 
         information that you may enter into the name record for the first 
         individual to be added to the system.  

         You will note that the assigned record ID (on the first line of the 
         screen) is `1'.  Each NAME record that you create will be assigned 
         an ID number which just indicates the order in which the records 
         have been entered into the file.  These ID numbers are used to 
         identify records for the purpose of defining relationships between 
         them (such as parent-child or spousal relationships) but the value 
         of the ID number itself has no special significance.  

         When you start to enter information into a Name record, the 
         blinking cursor appears in the 1st position of the SURNAME field.  
         Pressing the "TAB" key (to the left of the "Q" on most keyboards) 
         causes the cursor to advance successively to other updatable fields 
         on the screen.  You will note that pressing the ENTER or RETURN key 
         will move the cursor to the first position of the first updatable 
         field on the NEXT line.  You must use the TAB key to move to other 
         fields which are to the right of the cursor on the SAME line.  
         Section III.F.1 describes other rules for entering information into 
         the formatted displays used in this program.

         Of course the ID # of a parent cannot be entered into a child's 
         record unless a record has previously been created for the parent.  
         If the parent's record is added after the child's, then you may go 
         back and update the child's record with the correct ID number for 
         the parent to establish the parent-child relationship.

         Although the Birth and Death places appear in the view of the name 
         record information, they are not actually stored in the NAME
         record.  Because this information is not generally known for 
         distant ancestors or relatives, I have made this part of a separate 
         record.  If neither location is known, leave the fields blank and 
         no space will be used on the data diskette.  Entry of anything in 
         either data item will result in the creation of a single 50 
         character record for storing the information.

         I have allowed for recording the times of birth and death in the 
         NAME record.  Although this is also information which is not 
         generally known about distant ancestors or relatives, in this case 
         a total of only 4 `characters' are required to store the informa-
         tion so relatively little space is lost if these times are unknown 
         or you decide not to maintain a record of them.

         You will note four unlabeled single-character fields to the right 
         of the birth/death dates and father/mother ID's.  These are 
         "status" fields whose use is described in Appendix C.  Among other 
         things, these may be used to distinguish adoptive parent/child 
         relationships.

         The "Use:" field to the right of the Surname field was added in 
         February 1987 to handle a "problem" that arises when creating 
         indexes or printing reports using some of the extended options of 


                                     10



         the system.  There you are permitted to request that a woman's 
         surname be replaced with that of her (most recent) husband, which 
         seems more appropriate for things like Birthday or Anniversary 
         lists.  However this didn't take into account the situation in 
         which a woman chooses to continue using her own surname after 
         marriage.  A value of "Y" entered in the "Surname...Use:" field of 
         a married woman tells those programs that her own surname is always 
         to be used when building indexes or printing reports.

         After all information has been correctly entered, press F1 to 
         cause a record to be created in the file.  The bottom line of the 
         viewing area will then be replaced with a list of standard 
         options available when displaying an individual's information.

         The displayed Name record information may be modified by pressing 
         function key F1 twice, and making changes as above.  Another record 
         may be added by pressing the F1 key, then the F2 key and proceeding 
         as above.  Other options will be discussed in the following 
         sections.

         Please note when adding or updating a NAME record, the action of 
         the F3 key is described as "RESTORE FIELD VALUE".  This means that 
         when you press the F3 key, the field that contains the cursor will 
         be restored to the last displayed value.  This should simplify the 
         sequential entry of records with repeated values in certain fields.  
         For example birth or death places, or the Surnames of children in 
         the same family.

      b) Creating a MARRIAGE or FAMILY record.
         After name records have been created for each of the participants 
         in a marriage, the marriage or family record may be created by 
         pressing the F4 (SPOUSE) key in the view of name record informa-
         tion for either spouse (a single marriage record is maintained 
         for both spouses).  The `current viewing area' will shift to the 
         upper left corner of the screen, which will be formatted with 
         descriptions of the information stored in a marriage record.  If 
         a marriage has previously been recorded for the spouse whose name 
         record is displayed, information from the most recent marriage 
         record will be shown.  A new record may be created by pressing the 
         F1 key, then the F2 key.  If no marriage record currently exists 
         for the displayed spouse, the view will be ready for information to 
         be entered.  If you do not want to enter information at that time, 
         you may press the ESCape key to return to the Name record viewing 
         area.

         When entering marriage information, to describe the other partner 
         in the marriage, press the F2 key, type the record ID for that 
         individual and press the RETURN key.  The individual's NAME record 
         will be retrieved and descriptive information displayed to confirm 
         that the correct ID # has been entered.  If it is incorrect, you 
         may press the F2 key again to change the value of the spouse ID.
         
         To update the marriage STATUS, Date and Place fields, press the F3 
         key and use the TAB key to move to the fields that need to be 
         updated.  Although the beginning status field will normally 


                                     11



         indicate that a marriage was performed, other types of arrangements 
         may be indicated such as common-law (marriage), communal (living 
         arrangement), etc; the partners in the relationship will still be 
         identified as spouses in all reports.  The termination status field 
         may indicate: "wife died", "husband died", "divorced", "annulled", 
         "agreement", etc.  If a relationship is known to have terminated 
         but the date is unknown, the year of the ending date should be 
         9999.  Please note that it is necessary for you to manually enter 
         this termination date even when one or both spouses are recorded as 
         deceased.  It is not automatically updated with the death date of a 
         spouse because that may represent an incorrect assumption on the 
         part of the program.  The report programs will take the death dates 
         of the spouses into consideration when computing the number of 
         years married, however an "*" will appear to the right of that 
         number, if a death date was used to determine it, to call your 
         attention to the fact that the program has made what may be an 
         incorrect assumption in computing it. 

         The PLACE fields that appear after the STATUS/DATE fields are 
         handled similarly to BIRTH/DEATH place fields.  If nothing is 
         entered in either of the fields, then no space is taken in the file 
         for them.  If any text is entered in either field, then a single 50 
         character record is created to hold both 22 character fields.

         Press the F1 key when all status information has been correctly 
         entered.  

         After both spouse ID and status information have been satisfac-
         torily entered, pressing the F1 key again will cause the record to 
         be written to the family file.  If either spouse has other spouse 
         records on file, the record being added will be merged with the 
         others in reverse order of the beginning dates (so that the most 
         recent record occurs first).  If there is an earlier marriage 
         record on file for the spouse whose name record is displayed in the 
         NAME record viewing area, there will be a message at the bottom of 
         the screen informing you that you may:
                  Press the PGUP key to display an earlier record
         You cannot press the PGDN key to display a later record.  If you 
         wish to back up in a series of marriages, you must press the ESCape 
         key to return to the NAME record viewing area, then press the F4 
         key to begin again with the most recent marriage record.

         Please note that there are three separate steps to creating a 
         marriage record:
              a. Update the ID for spouse
              b. Update the status fields, dates and places
              c. Save the information in a file record
         No information is placed in the file until the last step is 
         performed.

         You should also be aware that a marriage record need not be created 
         in order to establish parent/child relationships.  Within the FHS 
         family files, there is no forced connection between parenting and 
         marriages.



                                     12



         Options available to you after the marriage record has been added 
         are shown on the bottom line of the viewing area and include:
              F1 UPDATE (Change, Add or Delete);
              F2 SELECT (the spouse to be displayed in Name record viewing 
                 area);  
              F3 List CHILDren having both spouses as parents;
              F4 List RESidence information;
              F5 Display/Enter COMments about the family relationship.

         Pressing the ESCape key in the view of SPOUSE or MARRIAGE informa-
         tion returns you to the Name record viewing area.

      c) Maintaining ADDRESS information.
         Address information may be recorded in a number of places within an 
         individual's total information record.  It may indicate the indivi-
         dual's residence, a family residence (under the spouse record), or 
         an address related to one of the additional records for education, 
         health, work or military information.  The information which is 
         stored in an address record includes:
                Beginning and ending dates during which the address 
                   information was current;
                Address (two 30 character lines);
                City    (15 character field);
                State   (4 character abbreviation);
                Zip or country (5 character field);
                Telephone (3 numeric fields; early phone numbers using 
                   alphabetic prefixes cannot be recorded here.) 

         Comments may subsequently be recorded concerning information that 
         is particularly relevant to the address record. (This might include 
         a physical description of a home.)

         Multiple addresses may be recorded of each of the above types.  
         All addresses under a given type record (name, spouse, health, 
         etc.) will be `chained' together in reverse order of beginning date 
         so that the most recent address occurs first.  The extended system 
         offers options for producing lists of latest (residence) addresses 
         and for creating a MailMerge format file of address information.  
         The MailMerge file can be used with many database programs for 
         printing mailing labels.  It may also be used with many word 
         processors for printing form letters.

         (NOTE: it has come to my attention that the above described format 
         for address information is not appropriate for many foreign 
         addresses, and some domestic U.S. ones as well.  I do plan to 
         make adjustments to this area sometime in the future, but it will 
         not likely be in the very near future because it will require that 
         all users go thru a conversion process for their family files.)

      d) Listing CHILDREN of an individual or marriage
         Pressing the F3 key in the display for the individual's Name 
         record or for a SPOUSE record results in the listing of children 
         parented by the individual or by both spouses.  The list appears 
         in a viewing area occupying the bottom half of the screen.  Up to 
         9 children may be listed; if there are more, you may continue the 


                                     13



         list by pressing the PGDN key.

         You may request to select one of the children for display in the 
         Name record viewing area by pressing the F1 key and using the UP 
         and DOWN cursor control keys to select the ID number of the desired 
         child.  Another child may be selected by returning to the child 
         list (as a result of pressing the ESCape key in the view of Name 
         record information) or by pressing the CTRL+PGDN or CTRL+PGUP key 
         combinations in the view of Name record information for the pre-
         viously selected child.

      e) Climbing Ancestor Trees through PARENT relationships.
         The file maintenance program was designed so that the user could 
         easily follow lines of ancestry (or descendancy) from one gene-
         ration to another.  The previous section described how you might 
         start with an individual, list his/her children, select one of the 
         children for display, after which the grandchildren parented by 
         that child may be listed, a grandchild selected for display, etc.  
         The family tree may be examined in the `reverse' direction also.  

         From the display of an individual's Name record information, 
         pressing the F2 key moves the current viewing area to the upper 
         left corner of the screen where information about the parents is 
         displayed.  From that view, the parents' children may be displayed 
         (the full brothers and sisters of the original individual) by 
         pressing the F3 key, or the Father or Mother may be selected for 
         display in the Name record viewing area by pressing the F1 or F2 
         function keys respectively.  If a parent is selected for display, 
         then their parents (one set of grandparents of the original indivi-
         dual) may be displayed using the F2 key.  Continuing in this way, a 
         single chain of ancestor relationships may be examined to exhaus-
         tion.  

         To help you remember how far the ancestor chain has been examined, 
         the `RELATIVE GENERATION LEVEL' of the displayed individual(s) is 
         shown in the upper right corner of the Name record, parent, spouse 
         and child displays.  The generation level is reset to 0 whenever an 
         individual is selected for viewing for some reason other than a 
         parent, child or spouse relationship (for example, by selecting 
         from a `search list'...see below).

      f) SEARCHing the Name Records on file.
         The file maintenance program contains a procedure for making 
         (limited) searches of the Name records on file.  This would ordi-
         narily be used to determine the record ID for some individual whose 
         information or family relationships were to be examined or modi-
         fied.

         The view for initiating searches is displayed by pressing the F4 
         function key from the view of primary options for the file mainte-
         nance program.  The viewing area in the upper left corner of the 
         screen will be cleared and reformatted with fields describing the 
         criteria for limiting the search.  These include:
               limits on record ID;
               Surname (or portion of a surname...e.g. the first 2 char);


                                     14



               Given name (or portion of a Given name);
               Range of Birth dates;
               Range of Death dates.
         The searches on Surname and Given name are sensitive to upper and 
         lower cases; i.e. neither `brown' nor `BROWN' will match a record 
         with Surname `Brown' (but a search for `Brown' will match).  Also 
         the range comparisons on dates make the month-day and Year checks 
         independently.  Therefore a search with:
                   02/00/1930 <= Birth Date <= 02/99/1940
         will locate name records with birth dates in the month of February 
         and between the years 1930, 1940 inclusive.

         After the search criteria have been satisfactorily entered, the 
         search is started by pressing the F1 key.  The current viewing area 
         moves to the lower half of the screen and the search begins.  A 
         reverse-video display in the lower left corner of the screen shows 
         the record ID for the name record currently being examined.  The 
         search process can be interrupted by pressing the space bar,  then 
         the search may be continued by pressing the PGDN key or you may 
         select for display one of the record ID's already found by pressing 
         the F1 key and using the UP and DOWN cursor controls to move the 
         reverse-video `box' to the correct ID #, and  then pressing the 
         ENTER or RETURN key.

         After displaying a name record located through a search, other 
         members in the `active search list' may be selected for display 
         by either pressing the ESCape key from the name record viewing 
         area to return to the search list (if it has not been overlain) 
         or by pressing the PGDN or PGUP keys in the Name record viewing 
         area.

         A search list becomes inactive when another search begins or when 
         the ESCape key is pressed in the search list viewing area.


      C. Importance of `BACKING UP' your FAMILY Files

      As with all `dynamic' files whose creation and maintenance represents 
      a considerable investment of time, the importance of keeping multiple 
      backup copies of the files cannot be overemphasized.

      All of the information you enter is stored in the three datasets that 
      make up a FHS family file.  Using the "default" names, these are the 
      FAMILY.NAM, FAMILY.ADR and FAMILY.OTH datasets.  These are the only 
      files that you need "backup" to preserve your data.  There is one 
      other file that you may consider backing up...the FAMILY.DAT file.  
      That is where any changes that you make to the file name table, the 
      screen colors, the error tone, the printer tables and the date format 
      are kept.

      The standard DOS COPY utility should be adequate for most users to 
      create these `backup' files.  If one of your family file datasets 
      exceeds the capacity of your backup device, then you must use the DOS 
      BACKUP utility (or something equivalent) to create your backup files. 
      The BACKUP utility will prompt you for additional diskettes if they 


                                     15



      are needed to receive the backup copy of your family information.  

      The DOS RESTORE utility is required to recover a file from a backup 
      created with the BACKUP program.  Furthermore, the 'backup' files that 
      you create with the BACKUP utility cannot be used directly by the FHS 
      programs.  The backup files MUST be RESTOREd in order to be used by 
      the programs.  The usual COPY command is used to recover a file from 
      backups created with the COPY command.  The copies created by the COPY 
      command ARE usable by the programs without having to copy them back to 
      their original location.

      I would recommend always creating a backup copy of the data files 
      before each extended file maintenance session, especially if your area 
      is subject to power fluctuations.  I would also recommend that you not 
      reuse a backup diskette until at least two subsequent backups have 
      been taken.

      If portions of a data file do become unreadable, you are cautioned 
      that when using standard disk utilities to remove the damaged 
      sections, direct file pointers joining information together within the 
      files may become unusable.  It is best in this case to return to a 
      backup copy of the files.  The "validation" option, Main Menu option 
      F3-E described in Section VI of this manual, may be able to eliminate 
      the "pointer errors" but it will not be able to "correct" them.

      If it is necessary to restore your family file from a backup copy, you 
      should always restore all three datasets from the same backup copy.  
      Attempting to restore just part of a family file will likely result in 
      some system maintained pointer fields becoming invalid.  This can 
      cause abnormal program termination, spurious messages, or "garbage" or 
      invalid information in reports.  Again the validaton program may be 
      able to eliminate the problems associated with "bad pointers" if it is 
      necessary to "partially restore" a file, but you will have to 
      carefully examine the resulting file to determine whether any informa-
      tion will have to be reentered.

      If you have an extended update session interrupted by a power failure 
      or by inadvertantly turning off your PC, it is possible that some of 
      the updates will not have been written to the file, which could result 
      in incorrect "pointer fields" connecting records in the family file.    
      The "pointer validation option" can locate and help eliminate such 
      file errors as well.















                                     16

```
{% endraw %}

## SECTION3.DOC

{% raw %}
```



      III. Family History System design

      In developing the programs in this system, a number of decisions were 
      made which influenced the appearance and character of the final 
      product.  The following paragraphs provide descriptions of some of the 
      features of the system which resulted from those decisions.  I hope 
      that this will increase your understanding of how the system works and 
      will make you feel more comfortable with its operation.

      A. Fixed Formatted Displays

      One of the first decisions made concerning the design of the system 
      was for the use of `static' formatted screen displays instead of the 
      `scrolling' mode of operation found in many early programs written for 
      personal computers.  Because the programs were written in `inter-
      preted' BASIC, a notoriously slow language, the use of formatted 
      displays made the execution of some parts of the system seem a bit 
      ponderous.  I believe that the benefits derived from the use of the 
      formatted screens outweigh the occasional `performance' problem.  (The 
      compiled version of the programs performs much more satisfactorily in 
      this area.) 

      B. Modular program design

      It was impossible to include all functions of the system within a 
      single program, however I decided that each system function should be 
      completely contained within one program.  As a result, it is only 
      necessary for a program diskette to be placed in the system's default 
      drive while changing system functions.  At other times it may be 
      replaced with a separate diskette containing data files.  This should 
      be especially appreciated by those who have PC's with a single disk 
      drive.  If the program diskette is replaced by a data diskette 
      however, you must wait until prompted to restore the program diskette 
      to the drive when you are returning to the Main Menu display.  This is 
      especially important when using the file maintenance program.

      C. System Messages

      The bottom line on the screen is reserved for displaying messages.  In 
      some cases, these messages ask for a response from the operator (such 
      as `Y' or `N'); if a `single-key' response is expected, you do not 
      have to use the ENTER or RETURN key to indicate the end of your 
      response.  Some messages are merely informational; these will be 
      terminated by an ellipsis (...) which indicates that the program is 
      waiting for you to press any key on the keyboard to show that you have 
      received the message so that the program may continue.  I haven't 
      included a list of messages in this document.  I trust that they will 
      be self-explanatory as they appear.  Please let me know of any prob-
      lems you have interpreting them.

      D. Use of Function keys

      The system has been designed to take full advantage of the PC's 
      function keys for simplifying the selection of program options.  
      Allowable function keys are indicated on the currently displayed 


                                     17



      panel.  Pressing an `illegal' key will result in the sounding of a 
      soft tone without any further action.

      E. Use of the ESCAPE key

      The ESCAPE key, labeled `Esc' on most keyboards, is used almost 
      uniformly as a request to terminate an operation without further 
      action.  It only has effect, however, at those times that the program 
      is looking for input from the keyboard.  It cannot be used to 
      interrupt the adding of a record to the files after you have requested 
      that the information be written to disk, and it usually cannot be used 
      to interrupt the creation of a work file.

      One extended operation which may be interrupted is the printing of 
      reports.  After each line of a report is written to the output device, 
      the report program looks for input from the keyboard.  If some key has 
      been pressed, the printing is interrupted and a message such as:
                            `Waiting...'
      is displayed on the bottom line of the screen.  If the ESCape key is 
      then pressed, the report is terminated; pressing any other key causes 
      the program to continue the printing of the report.  The SPACE BAR is 
      a convenient key for pausing and continuing a scrolling report.

      The ESCape key is the standard means for returning from one `viewing 
      area' of the segmented display used in the file maintenance program to 
      the previous `viewing area' from which control was passed as a result 
      of some operator request.  The one exception is the viewing area for 
      comments in which the ESCape key acts as the `undo' key to restore the 
      line on which the cursor is located to its contents at the time the 
      cursor was moved to the line.  Return to the viewing area from which 
      the comments display was requested is accomplished by pressing the F1 
      key.

      F. Full Screen Mode of Data Update

      Part of the decision to use static formatted screen displays in which 
      data is shown in fixed labeled areas of the screen called `fields' was 
      the plan to permit operator update of the displayed information 
      directly on the screen within the limits of the field containing the 
      data.  This has the advantage that the operator may make changes to 
      any of the fields without prompting from the program.  You may return 
      to previous fields to correct errors and may view all changes made 
      before submitting the changes to the program for processing.

      Certain conventions have been established to make use of many of the 
      PC's special function keys to simplify the updating of information on 
      the screen.  Actually two sets of conventions were established, one 
      for the update of text stored as comments, and the other for the 
      update of information displayed in discrete fields on the screen.  
      These sets of conventions will be described separately in the 
      following paragraphs.






                                     18



      1. Updating screen displays (other than comments)

         a. The "cursor control keys" can only be used to move the cursor 
            within the area permitted for a single labeled field (the field 
            containing the blinking cursor);
         b. The "TAB" key (just to the left of the "Q" key on the keyboard) 
            may be used to move the cursor to the first position of the next 
            `updatable' field on the screen (if there is no next field, the 
            cursor goes to the first updatable field on the display);
         c. The "SHIFT+TAB" keys (press the SHIFT and TAB keys simulta-
            neously) may be used to move the cursor to the last previous 
            updatable field on the screen (if there is no prior field, the 
            cursor goes to the beginning of the last updatable field on the 
            screen);
         d. The "HOME" key moves the cursor to the first updatable field on 
            the screen;
         e. The "END" key moves the cursor to the last updatable field on 
            the screen;
         f. The Enter or Return Key moves the cursor to the first updatable 
            field of the next line (when updating 2 or more lines of data on 
            the screen); 
         g. The "CTRL+END" keys erase (replaces with blanks) all characters 
            from the cursor position to the end of the field containing 
            the cursor;
         h. The "DEL" key removes the character at the cursor position and 
            moves all trailing characters (in the field) one position to 
            the left;
         i. When a character is entered in the last position of an 
            updatable field, the cursor is automatically `tabbed' to the 
            next updatable field;
         j. For some fields (e.g. Record ID, DATES) you will only be 
            permitted to enter numeric digits; a tone is sounded if other 
            characters are entered;
         k. For some fields (e.g. SEX, File names) entered alphabetic 
            characters will automatically be changed to upper case.
         l. When entering NAME record information in the file update program 
            the F3 key is used to simplify the repetitive entry of 
            information such as surname or birth/death places.  Pressing the 
            F3 key will restore the cursor field with the last displayed 
            contents.

      Entered updates are committed by pressing a function key designated by 
      the program (usually F1) or by pressing the ENTER or RETURN key if no 
      function key is designated.  Pressing the ESC key terminates the 
      update request without any changes being made.

      2. Updating Comment displays
           
         a. Cursor control keys:
            Right arrow  - moves the cursor right one position; at the end 
                           of a line the cursor goes to the beginning of 
                           the next line; a tone is sounded at the end of 
                           the last displayed text line.
            Left arrow   - moves the cursor left one position; at the 
                           beginning of a line the cursor goes to the end 


                                     19



                           of the previous line; a tone is sounded at the 
                           beginning of the top displayed text line.
            Up arrow     - moves the cursor to the next line up, same 
                           column; a tone is sounded if the cursor is on 
                           the top line.
            Down arrow   - moves the cursor to the next line down, same 
                           column; a tone is sounded if the cursor is on 
                           the bottom line.
            HOME key     - moves the cursor to the first position of the 
                           current line
            END key      - moves the cursor to the last non-blank character  
                           of the current line after the current cursor 
                           position.
            ENTER key    - moves the cursor to the first position of the 
                           next line; a tone is sounded if the cursor is 
                           on the bottom line.

         b. Special Update keys:
            DEL key      - erases character at cursor position and moves 
                           characters following it to the left one position.
            Ctrl END     - Erases current character and all characters 
                           following it on the line.
            INS key      - toggles a "character insert" mode.  When this 
                           mode is in effect a "^" character appears on the 
                           last line of the viewing area.  Characters 
                           entered at the cursor location will cause the 
                           current character at that location, and all 
                           subsequent characters on the line to be moved 
                           right one position.  The last character on the 
                           line will be truncated.
            BKSP key     - same as Left arrow key;
            ESCape key   - removes all updates made to the current line since 
                           moving the cursor to the line.
         
        c. Special function keys:
            PGDN key     - moves the current line to the top of the screen 
                           and displays the succeeding lines.  If the current 
                           line is at the top of the page, the next full page 
                           of text is displayed. Changes which have been 
                           made to the displayed text lines will be 
                           written to the file.
            PGUP key     - returns to the first line of text for the 
                           comments. Changes made to the current page of 
                           text are written to the text file.
            F2 key       - `toggles' between INSERT and EDIT modes.
                           If not in insert mode, then the text lines after 
                           the current line are replaced by blank lines 
                           for new text to be entered.
                           If already in insert mode, then non-updated blank 
                           lines are replaced by existing lines in the file 
                           beginning with the line which originally followed 
                           the text line after which the insertions were 
                           made.
                           The current mode of operation is shown as a 
                           `reverse-video' literal in the lower left corner 


                                     20



                           of the area.
            F3 key       - deletes the current line of text.

         The numbers shown in the lower right corner of the viewing area 
         are the number of the text line containing the cursor, and the 
         total number of text lines for the comments.  The first number may 
         be greater than the second in the case that it is a new line 
         which no operator action has yet caused to be added to the text 
         of the comments.

         Pressing the F1 key causes all unrecorded updates on the current 
         display to be written to the file and then returns you to the view 
         from which the comments display was requested.

         NOTE CONCERNING THE FORMATTING OF COMMENTS IN REPORTS:
         When entering comment information you should take into considera-
         tion the following conventions for joining comment lines together 
         to form blocks of text when comments are included in reports 
         produced by the system:
            1. Three successive blanks at the beginning or in the middle of 
               a comment line will cause all text on that line to the right 
               of the blanks to be ignored.
            2. A blank character is placed between two successive comment 
               lines only if the last character of the first, or the first 
               character of the second one is a space.  (This permits a word 
               which has been typed across a line break to be joined back 
               together properly.)  Additional blank characters at the end 
               of a comment line are dropped.
            3. The backslash "\" character is recognised as a request to 
               begin a new line of text in the formatted output.  Two 
               successive backslash characters result in a blank line being 
               inserted between the preceding and following blocks of text 
               when the comments are formatted for reports.
            4. You may enclose parts of your comments in "curly brackets" or 
               "braces", that is "{" and "}", and the report programs may be  
               instructed to omit that text from the comments that are 
               printed.  This allows you to remove sensitive or conjectural
               remarks from reports that are distributed to others.


      G. Segmented Screen in the File Maintenance Program

      Because of the complex nature of the Family History System files and 
      the variety of information that can be stored in them, I decided to 
      use a `segmented' screen in the program that is used to display and 
      update information in these files (MainMenu option F1).  Within this 
      program the standard 24x80 screen area is divided into 4 `viewing 
      areas': upper left, upper right, lower left and lower right. (A 5th 
      viewing area occupies the lower half of the screen.)

      Different information is displayed in the various viewing areas so 
      that up to 4 types of information may be viewed at one time without 
      interferance.  Of the several viewing areas that may appear at one 
      time on the screen, one will be designated the `current viewing area' 
      and will be distinguishable by its being enclosed by a `hilited' 


                                     21



      border.  The hilited border is moved from one viewing area to another 
      by selecting options (or terminating requests using the ESCape key).

      While viewing information for one of the record types that may occur 
      multiple times, ordered by some date, you will be prompted by the 
      message:      `Press PGUP key for earlier record'
      if there is some record of that type which precedes the one currently 
      being viewed. (The PGDN key can not be used to return to later 
      occurrences of the record type however.)

      The lower half of the screen is used as a fifth viewing area for 
      displaying lists of individuals resulting from a `search' of the 
      system files or a request to list the children of an individual or of 
      a marriage.  Individuals may be selected from these lists for display 
      of related information by following the instructions in the `view'.  
      Others in the list may be selected for display at a later time by 
      returning to the list (after pressing the ESCape key in the `view' of 
      Name record information).  Alternatively, one may go up (or down) an 
      active SEARCH list by pressing PGUP (or PGDN) key in the view of name 
      record information.  (Similarly one may go up or down an active CHILD 
      list by pressing the CTRL+PGUP or CTRL+PGDN keys in the view of name 
      record information.)

      In the upper right corner of most viewing areas is the "relative 
      generation level" of the individual(s) whose information is displayed.  
      This level is adjusted whenever a parent/child relationship is crossed 
      and is set to 0 whenever an individual is selected for display based 
      upon something other than a parent/child or spouse relationship 
      (spouses are assumed to be in the same generation level).


      H. Changing the Screen Attribute Table and Error Tone

      It was a suggestion of a member of our local PC user's group that 
      prompted me to implement a `screen attribute table' to provide a 
      common base for the use of color in the different programs in this 
      system.  Although my own PC used the IBM monochrome board & display, 
      my friend's remarks that `any program which didn't permit him to take 
      advantage of his color monitor would receive little use on his system' 
      resulted in the program described in this section. 

      If you select MAIN MENU option F3-B, you are presented with a display 
      which lists 11 different types of information that may be used in 
      building the screens used by programs in the Family History System.  
      These types are:

          Non-displayable data (such as passwords)...not used in the system
          Standard literals or labels
          Hilited literals, labels or messages
          Numeric text
          Upper Case text
          REVERSE video text
          Updatable Alphanumeric text
          Updatable Numeric text
          Updatable Upper Case text


                                     22



          Lowlite borders        
          Hilited borders

      Different color attributes may be assigned to each of these types of 
      information resulting in much more pleasant displays for those who 
      have color monitors at their disposal.  The only restriction in 
      assignment of colors is that each of the three types of `updatable' 
      information must have attributes which are distinct from all others in 
      the table.  If you attempt to return to the MainMenu with an "illegal" 
      combination of attributes, a message will be displayed and the problem 
      entries will be marked. 

      A `screen attribute' consists of a foreground/background color 
      combination together with a `blink' option.  Each position of the 
      display screen has an associated `screen attribute' that describes the 
      appearance of any character that is placed at that screen location.  
      To the left of each described type of information is a character 
      displayed with the screen attribute currently being used for that type 
      of information.

      A small `arrow' on the left side of the screen points to the informa-
      tion type whose screen attribute is currently being examined.  The UP 
      and DOWN cursor controls may be used to move this `selection' arrow to 
      different information types.

      The foreground/background/blink components of the `selected' informa-
      tion type are shown on the bottom portion of the screen.  Small 
      `arrows' point to the foreground and background component colors in 
      `pallettes' of 16 and 8 colors respectively.  (These pallettes are 
      really not very interesting for PC's using IBM's monochrome board and 
      monitor, the only really distinguishing combinations in this case 
      being ones which produce reverse-video, underscore or hilite effects.)  
      The blink component is shown by a hilited `Y' or `N'.

      The screen attributes for a selected information type may be changed 
      using the function keys and the horizontal cursor control keys.  Func-
      tion key F3 toggles the blink attribute on and off.  The horizontal 
      cursor control keys are used to move the indicator arrow for the 
      foreground and background color pallettes.  Function key F1 is used to 
      select which of the pallettes is being controlled by the cursor keys.

      Function keys F5 & F6 may be used to load the screen attribute table 
      with previously prepared versions `suitable' for use on IBM's mono-
      chrome or color monitors respectively.  If you have a color monitor 
      and would like to try a color table which uses a light colored 
      background, press ALT+F6 to load a table which I have found pleasing 
      on an IBM Enhanced Color Monitor.  Function key F7 may be used to 
      restore the screen attribute table with the last saved values.

      Function key F9 is used to return to the MAIN MENU display.  You will 
      be asked whether you wish to save the screen attribute table which 
      exists at that time.  Actually you will be asked:
                          1)Temporary or 2)Permanent
      A response of `2' will result in the attribute table's being written 
      to the program diskette (in dataset FAMILY.DAT) for use in later 


                                     23



      Family system work sessions.  Any other response will result in a 
      return to the MAIN MENU panel without saving the table although it 
      will continue in use until you leave the system or return to this 
      program to change the table again.


      CHANGING THE ERROR TONE FREQUENCY & DURATION
      Option F8 of the program that maintains the Screen Attribute Table 
      allows you to change the frequency and duration of the tone that is 
      used to inform you of error conditions.  During this option, you can 
      press the F1 and F2 keys to decrease or increase the tone frequency, 
      or press F3 or F4 to decrease or increase the duration of the tone.  
      The tone may be sampled by pressing the space bar.  Pressing the F9 
      key terminates the routine.  The changes will be saved for later use 
      if you request that all entered changes be made permanent when you 
      return to the MainMenu.  (Note: setting the frequency to a very large 
      value reduces the error signal to a barely audible click.)


      I. Use of PRINTER SETUP Table

      The Family History System makes use of a printer table which contains 
      control sequences and special characters used when printing the 
      system's reports.  A program is also provided to permit you to custom-
      ize this table for your printer.  The current printer setup table is 
      displayed by selecting MAIN MENU option F3-C.

      Upon entry to the Printer Control Setup program, you will see 
      displayed in a reverse video array of boxes, the decimal numbers for 
      the ASCII values of characters in the printer control sequences and 
      for certain `chart building' symbols.  The printer control sequences 
      identified are for:
             Resetting the printer at the beginning of a report;
             Selecting the type size at the beginning of a report;
             Causing a carriage return and line feed at the end of a 
                 print line;
             Requesting an advance to top of next page at the end of a 
                 page or a report.

      The chart symbols are those used for the `ancestor tree' lines when 
      printing an ancestor chart.  The Gemini 15 and IBM Graphics printers 
      produce symbols similar to those which are used on the screen.  The 
      Epson FX-100 has no such symbols in its character set and so the +,-,! 
      symbols are used.  Examination of your printer's manual should provide 
      you with the information required for setting up these tables for it.

      You should be aware that some printers will print more slowly when 
      graphic characters, such as the chart building symbols, are included 
      in a print line.  If yours is one such printer, you may consider using 
      a printer setup which uses the +,-,! symbols for producing "draft" 
      copies of ancestor charts and use the more pleasing graphic symbols 
      for final copies.

      (If you have a printer for which none of the supplied tables work, I 
      would be interested in receiving a set of the control sequences and 


                                     24



      symbols that do work, along with the name of your printer, so that I 
      can add it to the list of `supported' printers whose control sequences 
      may be selected under this program's `F3' option.).
       
      The Form Size is used to describe the limitation of the output page 
      size in characters/line and lines/page based upon both the font and 
      printer initialization parameters specified as well as the physical 
      size of the paper being used.

      Up to 9 different tables may be saved.  Table number 1 is the 
      default table that will be loaded upon entry to the Family system.
         
      (Some notes concerning the printer control sequences:
         a. The first two entries in the table are sent together to the 
            printer before printing each report.  If necessary, they may be 
            treated as a single 16 character initialization sequence.
         b. the decimal number `255' may be used to mark the end of a 
            short control sequence to prevent sending extraneous trailing 
            zeroes.
         c. If your printer doesn't recognise a `form feed' control sequence 
            you can put a decimal `255' in the first character of the table 
            entry and the report programs will use multiple line-feeds to 
            advance to the top of a page.
         d. If you are using a printer which requires you to manually feed 
            individual sheets of paper for a report, you can force the 
            report programs to stop at the top of each page by putting a 
            decimal '254' as the last character (before the '255') in the 
            table entry for 'Advance to top of Form'
         e. The table for the HP LaserJet+ is intended to make use of the 
            resident compressed LINE PRINTER font of that printer and may 
            not work correctly if a font cartridge is installed.
         f. The table for "Dataset" is intended for routing reports to disk 
            files. This has been used by some to print reports with a 
            SIDEWAYS printing utility. 

      J. System "File" Name Table

      The File Name Table (or more consistently, the Dataset Name Table) 
      describes the default values to be used for family dataset, work 
      dataset and printer output file specifications.  Included in the "file 
      specification" is the designated drive which is to contain the file 
      disk (that's the character preceding the ":").  Default values for 
      file name table entries are:
                   x:FAMILY  .NAM    Name dataset
                   x:FAMILY  .ADR    Address dataset
                   x:FAMILY  .OTH    Miscellaneous information dataset
                   x:ANCESTOR.WRK    Ancestor work file
                   x:DESCNDNT.WRK    Descendant work file
                   LPT1:             Printer output destination
              where x: is
                   A: for systems installed on a diskette 
                   C: for systems installed on a hard disk.
      Individual entries in the table may be changed temporarily within each 
      program that uses it.  Permanent changes may be made using MAIN MENU 
      option F3-A.


                                     25





      Some reasons for making changes to the table might be:
         a. use of a RAM disk (usually designated as C: drive on non-XT 
            systems) to hold data and/or work files.  This can greatly 
            improve the performance of the system in creating work files 
            and producing reports.  It also reduces considerably the `wear 
            and tear' of mechanical disk drives.
         b. You may wish to maintain multiple family files using the 
            primary surname as a prefix for each set of files.  The file 
            name table default values would be the set of values upon 
            which your work is concentrated.
         c. If you have two drives on your system, you may wish to assign 
            some of the files to each of the drives.  This may require 
            removing the program diskette from drive A at times.  Read the 
            cautions in sections II.B.4 and III.B concerning this.
         d. If your system has no printer, a printer designation of SCRN: 
            will result in all printer output automatically going to the 
            screen without the program's asking whether to send the output 
            to the printer or screen.

      Users of the extended system should note the following conventions for 
      default names for datasets used only in that set of programs:
         a. The prefix for the default index file name is taken from the 
            default name for the NAME dataset.  To this the suffix `.NDX' is 
            added.
         b. The first character of the default ancestor work area name is 
            used for the drive designator for the SELECT, TRANSFER and 
            MAILMERG datasets, as well as the RELATIVE.WRK dataset.




























                                     26

```
{% endraw %}

## SECTION4.DOC

{% raw %}
```



      IV. Family History System Files and Datasets
           
      The following discussion is provided for the interested user, but an 
      understanding of it is not necessary to make use of the system.

      A. FHS Family File

      The file used in the Family History System to store information about 
      individuals and their family relationships consists of three datasets 
      containing variable format `records' which are `linked' together into 
      a `hierarchic' logical file structure.  Pictorially, a portion of the 
      logical file structure is represented by the diagram appearing in 
      Appendix E, at the end of this document. 

      In this diagram, each of the `boxes' represents a record type in one 
      of the system's datasets.  In some cases, (for example child records, 
      marriage records, address records) a `logical record' may include 
      multiple records of information of that type.  The number of multiple 
      records is essentially unlimited...there can be no more than 9999
      occurrences of the name records or 32000 occurrences of the other 
      types of records.  Records containing information of the various types 
      are `logically connected' by a system of program maintained `pointer' 
      fields.  Though this structure may appear a bit more complex than the 
      more common `flat' file which has a single fixed record type, the 
      advantage in using the hierarchic structure is that there is no need 
      to `reserve' space in a dataset (other than a 2 character pointer 
      field) for types of information which may or may not be recorded for 
      an individual at some time in the future.

      The only information that the user needs to provide to the system to 
      begin retrieving information in one of these extended logical records 
      is that required for locating the name record of the individual about 
      whom the information has been recorded.  The basic `record key' that 
      the system requires is the `ID number' for the individual.  This is a 
      number which is assigned to each individual by the system at the time 
      his/her Name is initially entered into the system.  These numbers are 
      assigned sequentially (ID #216 is assigned to the 216th person entered 
      into the system).  The ID numbers assigned two individuals need not 
      indicate any blood relationship between the individuals.  These ID 
      numbers may (optionally) appear in reports produced by the system and 
      may also be determined by `searching' the files for other information 
      (such as surname, given name or birth date) using the search option of 
      the file maintenance program.

      While the ID numbers of 2 individuals need not indicate any blood 
      relationship between them, these numbers are used to define the only 
      type of relationship that you are required to establish between indi-
      viduals.  The relationship of father or mother to a child is specified 
      by recording the ID numbers of the parents in the Name record for the 
      child.  All other blood relationships between individuals are deter-
      mined from the complete system of parent-child relationships recorded 
      in this way.

      Perhaps it should be noted that the system provides for recording 
      additional information (e.g. educational, occupational, military and 


                                     27



      health information) in record types not shown in the structure 
      described above.  Further, address and comment records may also be 
      created under each of these record types. 

      It should also be noted that the system provides for extensive `com-
      menting' with the comments or remarks being logically connected to the 
      appropriate record type.  Care should be taken in the use of this 
      feature of the system because of the limited number of records in the 
      "...OTH" dataset of miscellaneous info.  It is not intended for 
      writing a person's life history or for extended anecdotes, but rather 
      for recording notes concerning sources of, or explanations for, infor-
      mation found in the record.

      In the cases where multiple record types are permitted within a 
      logical record, the records are automatically maintained in some 
      `natural' order.  For all but comment records, this is based upon a 
      date stored in the record.  Children are ordered by increasing birth-
      date; marriage records by decreasing date of marriage, and address 
      records by decreasing beginning date of residency.  This has the 
      unfortunate consequence that unknown birth, marriage or beginning 
      dates (recorded as 00/00/0000) may result in information appearing out 
      of chronological sequence in the file and in reports.  The order is 
      automatically adjusted as the correct information is determined and 
      recorded.  You may consider entering a `best guess' for unknown dates, 
      making note of the fact in comments for the record type.

      This discussion of the Family History System data files will conclude 
      with a brief description of the datasets which comprise the file.  
      There are three such datasets:

         1. Name dataset - each record is 100 characters long; 
            information stored includes surname, given name, date and 
            time of birth and death, sex, and father and mother ID 
            numbers.  Up to 3500 name records may be stored on a single 
            DS/DD diskette, or 9999 records may be stored on a hard disk.
            
         2. Address dataset - each record is 108 characters long; 
            information stored includes: beginning and ending dates, 2 
            address lines, city, state, zip or country, and (numeric) 
            phone number.  Up to 3500 address records may be stored on 
            a single DS/DD diskette, or up to 32000 may be stored on a 
            hard disk.

         3. Miscellaneous INFO dataset - each record in this dataset is 
            50 characters long.  Record types include:
               a. spouse, family or marriage record;
               b. Birth/Marriage/Death location record;
               c. Comment record (1 record for each line of comments);
               d. Occupation, Education, Military and Health records.
            Up to 7000 records may be stored on a DS/DD diskette; up to 
            32000 may be stored on a hard disk.






                                     28



      B. Report Program WORK FILES
      There are several types of "work" datasets that are used in the Family 
      History System.   These are semi-temporary files that are used to 
      store information derived from certain processes so that those some-
      times lengthy processes do not have to be repeated too frequently.  
      Among these work datasets are the RELATIONSHIP Work Files, the SELECT 
      Work file and the INDEX File.

      A RELATIONSHIP WORK FILE must be created prior to producing the 
      ancestor, descendant or relative reports or the ancestor charts.  
      Although there appear to be three types of relationship files: 
      Ancestor, Descendant and Relative, in fact these all share a common 
      format...the only differences being in the number of generations of 
      ancestors or descendants that are searched in order to build the work 
      file.  In building an Ancestor work file, no search is performed for 
      descendants at all.  In building a Descendant work file, no search is 
      performed for ancestors.  While in creating a Relative work file, the 
      program first searches for all ancestors and then all descendants of 
      the ancestors.  Actually, you may specify the maximum number of 
      generations (of ancestors and descendants) that are to be included in 
      the work dataset.  This is done to permit you to exercise some control 
      over the extent to which lines of ancestry or descendancy will be 
      followed in producing the report.  A relationship work file may be 
      reused (without recreating it) if no new or changed relationships have 
      been recorded in the family file that was used to create the workfile.

      Another type of work file is the SELECT file used by the Family Group 
      Report program and the export/import program.  (Among the FHS 
      extensions, this work file is also used in the Search/Select/LIST 
      program and the Summary report program.)  This file is essentially an 
      ID sequenced "check list" of individuals that have been chosen for 
      processing.  It permits the system to isolate the sometimes complex 
      process of selecting ID #'s within certain programs but to pass the 
      results of the selection process to other programs in the system.

      The Family History System INDEX File is one which contains a complete 
      but re-ordered sequence of ID #'s.  The reordering could be accom-
      plished by SORTing the ID#'s based upon the contents of certain 
      fields, for instance in Surname, Given Name sequence or in birthdate 
      sequence.  The reordering could also represent the sequence that indi-
      viduals identified in a relationship work file would be listed in an 
      ancestor, descendant or relative report.  This last type index is most 
      likely to be used for printing family group reports in "relationship 
      sequence".  The option for creating an INDEX file is one of the 
      "extensions" provided to registered users of the system.

      Another type "work" file introduced in the March 1990 update is the 
      REFERENCE work file, which contains notes concerning the ID's that 
      appear in a particular report and the location of the reference within 
      that report.  This work file is used by a program in the extended 
      system to print report indexes.  These indexes may be printed for 
      ancestor, descendant, relative and family group reports as well as 
      sets of ancestor charts, ancestor maps and descendant charts.




                                     29

```
{% endraw %}

## SECTION5.DOC

{% raw %}
```



      V. System Reports

      This section discusses the various reports produced by the FAMILY 
      HISTORY SYSTEM.  While these are standard types of reports expected 
      from a genealogical record system, that is: Ancestor Report, Ancestor 
      (TREE) Charts and MAPs, Descendant Report, Descendant Charts, Relative 
      Report and Individual/Family Group Information, some of the data items 
      displayed or terms used in describing the reports may be unfamiliar to 
      you.  The following paragraphs describe some of these terms, including 
      those of `ancestor', `descendant', `lineage number', `generation 
      level', `bloodline' and `related individuals'.

      A.Some Definitions 

      An `ANCESTOR' of an individual refers to one of the parents, grand-
      parents, great-grandparents, etc., of the individual.  A `DESCENDANT' 
      of an individual refers to any one of his or her children, grand-
      children, great-grandchildren, etc.  The parent-child relationships 
      described are `blood' relationships and do not refer to `legal' or 
      adoptive relationships.  (Adoptive relationships may be recorded and 
      distinguished from other parent-child relationships, as described in 
      Appendix C.)  Two individuals are considered to be `RELATED' if they 
      have a common ancestor.  Therefore we would not consider individuals 
      who are only `inlaws', that is `related' through marriage, to be rela-
      tives in the above sense.  A `SPOUSE' refers to either partner in a 
      marital relationship.  (One aspect of this system's files and reports 
      is that they have been designed so as not to give a preferential 
      status to any individual based upon their sex.)

      The `GENERATION LEVEL' of an ancestor or descendant of an individual 
      refers to the number of `parent-child' relationships that separate the 
      ancestor or descendant from the individual.  For example, with respect 
      to a selected individual (who is said to have generation level 0), the 
      generation levels of some relatives are: children (GL=+1), grand-
      children (GL=+2), great grandchildren (GL=+3), parents (GL=-1), grand-
      parents (GL=-2), great grandparents (GL=-3).  Notice that descendants 
      have positive generation levels and ancestors have negative generation 
      levels.

      The `BLOODLINE' between an ancestor and any of his/her descendants 
      refers to a sequence of numbers, one for each parent-child relation-
      ship that separates the ancestor from the descendant, where the number 
      for a given parent-child relationship refers to the number of the 
      child in that generation level who is an ancestor of the descendant.  
      For example, the bloodline (3,2,4,2) indicates that the descendant is 
      the 2nd child, of the 4th child of the 2nd child of the 3rd child of 
      the ancestor in question.

      The `LINEAGE NUMBER' of an ancestor refers to a number that is 
      assigned sequentially to the ancestors of the individual in the 
      following manner:
           the base individual has lineage number 1;
           the individual's father has lineage number 2;
           the individual's mother has lineage number 3;
           the father's father has lineage number 4;


                                     30



           the father's mother has lineage number 5;
           the mother's father has lineage number 6;
           the mother's mother has lineage number 7; etc.
      In general, if an ancestor has lineage number n, then that ancestor's 
      father will have lineage number 2n and the ancestor's mother will have 
      lineage number 2n+1.  These are the `counting' numbers that would 
      naturally be assigned to persons on the traditional `horizontal' 
      ancestor tree chart.  Some relationships to notice: all male ancestors 
      have "even" lineage numbers and all female ancestors have "odd" 
      lineage numbers, and for a given ancestor on the chart, the lineage 
      number of the child which appears on the chart is found by dividing 
      the parent's lineage number by 2 (and discarding the remainder, if 
      any...for example, an ancestor with lineage number 127 will have a 
      child with lineage number 63 appearing on the ancestor tree).  Since 
      beginning to work on these programs I have become aware that the term 
      "ahnentafel number" is more commonly applied to the lineage number in 
      genealogical literature, though I have become accustomed to the term 
      "lineage number" and so will continue to use it in this manual.

      While "lineage number" and "bloodline" are convenient "numerical" 
      concepts for describing "direct" relationships such as exist between 
      an individual and his/her ancestors or descendants, the problem of 
      uniquely describing one's non-direct relatives (aunts, uncles, 
      cousins, etc.) is a bit more complicated.  The very definition of 
      "relative" given above suggests a natural approach which would combine 
      these concepts to label relatives with a "lineage number"+"bloodline" 
      where the lineage number is that of the "nearest common ancestor" of 
      the two individuals (that is the common ancestor with lowest lineage 
      number) and the "bloodline" is the one that 
      describes the line of 
      descendancy of the relative from the common ancestor.  This is the 
      approach that is used by this system's relative report for grouping 
      and listing all recorded relatives of an individual.   The family 
      group report provides an option for showing the relationship and 
      LINEAGE of the subject of the report.  In that case, the LINEAGE 
      displayed consists of:
             a. the LINEAGE Number if it is an ancestor
             b. the BLOODLINE, in the format (x,x,x,...,x), if it is a 
                descendant
          or c. the LINEAGE Number + BLOODLINE as described above if it is a 
                non-direct relative.

      There is another method for describing relatives which, though it 
      assigns a non-numeric and non-unique label to relatives, gives a more 
      generally understood idea of the relationship between individuals.  
      These labels are ones such as: mother, father, cousin, aunt, grand-
      mother, great-great-grand-uncle, etc.  The set of rules used to assign 
      such labels in the relative report (and the relative report index of 
      the extended system) is the one which describes the child of a First-
      Cousin as a First-Cousin-once-Removed, rather than as a Second Cousin.  
      These are sometimes called the "Common" rules for relationships.  






                                     31



      B. Report Descriptions

      FIXED FORMAT and FREE FORMAT Reports

      Prior to March 1990, all Family History System reports were in a style 
      that placed all information of a given type in a "fixed" location in 
      the report.  In Ancestor/Descendant/Relative reports, a column format 
      was used and family group reports appeared as "filled out" information 
      sheets.  Most of these reports required a printline of at least 132 
      characters.  Consequently they required using compressed print with 
      standard 8 1/2" wide paper.

      In March 1990, new FREE FORM styles of Ancestor/Descendant/Relative 
      and Family Group reports were introduced in which all information is 
      printed out in a "block" or "paragraph" format.  This permitted using 
      printlines as narrow as 80 characters for most reports, allowing the 
      use of more readable PICA or ELITE type styles.

      While the FREE FORM reports are likely to prove popular for sharing 
      information with others, I believe the FIXED FORMat reports will still 
      be most useful for continuing research because they allow more room 
      for recording changes and new information.  I hope you will try both 
      of them to determine which is most appropriate for your own work.

      REPORT OPTION MENUS

      Many report options are selectable from a Menu that appears in the 
      lower right corner of the screen.  Any changes you make to these 
      options will be "remembered" throughout a FHS working session, though 
      the options will return to their "default" values in subsequent 
      working sessions.  

      OTHER REPORT OPTIONS

      Other report options will be offered to you through "bottom line" 
      prompts.  One such option allows you to select the style for 
      formatting names.  You may select name formats from among:
            1) Last, First   2) LAST, First   3) First Last   4)First LAST
      where formats 2 and 4 provide automatic conversion of surnames to all 
      CAPs for visual emphasis.

      Most report programs will also ask something like:
              Start at Beginning? (Y/N)
      What it wants to know is whether you want it to begin printing with 
      the first page of the report or skip forward to another page.  This 
      permits you to restart an interrupted report without having to reprint 
      the initial pages.  If you reply "N", you will be asked the number of 
      the page to begin printing.  There may be a long pause after the 
      program indicates that it is printing the report because it must still 
      process all the information on the pages that are being skipped "to 
      find its place" for continuing the report.  You will want to make sure 
      that you are using all the same options for printing the report as 
      were originally used so that all information will end up in the same 
      place as before.



                                     32



      Another "bottom line" option in the report programs asks whether you 
      wish to:      Create REFERENCE File for Index?  (Y/N)
      This permits you to create a WORK file which contains the locations of 
      names refered to in the reports.  One of the extended options provided 
      to registered users will print report indexes from the REFERENCE file.  
      If you have already printed a report and wish to go back to create the 
      reference file for an index, you can print the report again, with all 
      the same options, but when asked whether you wish to "Start at the 
      Beginning?", answer "N" and enter "9999" for the number of the page to 
      begin printing.  The entire report will be "processed", for recording 
      references in the work file, but nothing will actually be printed.

      PAUSING AND CANCELLING THE PRINTING OF REPORTS

      While producing any of the reports, the printing may be temporarily 
      interrupted by pressing the `space bar' or any of the `character 
      keys'.  The report may then be continued by again pressing the space 
      bar (or one of the character keys) or may be terminated by pressing 
      the ESC key.  If you use the PGDN key to continue a report, then the 
      program will pause at the top of the next page of output.  This may 
      prove convenient for pausing a printer that is running low on paper.  
      You can continue the printing by pressing any key.


                             -----------------------

      In the following report descriptions, the keystrokes required to 
      select the report program from the Main Menu are shown, in parentheses, 
      following the name of the report in the section heading.  I will 
      sometimes refer to the Ancestor, Descendant and Relative reports as 
      "relationship" reports because their organization is designed to 
      emphasize the relationship between individuals.  The Family Group 
      reports give more detailed information about each individual.   The 
      Ancestor Charts and "Map" should prove useful for tracking the results 
      of your ancestral research while the Descendant Chart option produces 
      a "wall chart" that graphically illustrates family relationships.  You 
      may also want to see Section VII.B which describes how you may use a 
      shareware organization chart program to print descendant charts.



      1. ANCESTOR Report (Main Menu option F2-A-1)

      The `Ancestor REPORT' groups ancestors by generation level and shows 
      the lineage numbers of the ancestors listed.  Because no lines are 
      printed for `missing' lineage numbers, (for ancestors not yet recorded 
      in the files), this report is much more concise than the traditional 
      ancestor chart.  The lineage numbers may be used to follow lines of 
      ancestry on the ancestor report using the relationships described in 
      the previous discussion concerning lineage numbers.  (The term 
      `Ahnentafel list' is also used for reports of this type.)

      Before printing an ancestor report (or any of the other "relationship" 
      reports described in this section) you must identify which individuals 
      are to be listed.  This is done by entering a "Base ID" for the 


                                     33



      individual whose ancestors are to be listed and letting the program 
      "search for" the ancestors of the individual.  The number of genera-
      tions of ancestors that are to be searched appears under the File 
      names and may be modified by selecting the option (F1) for changing 
      File Names.  

      When you press F3, the program asks you for the Base ID and whether 
      you wish to include adoptive relationships.  It then begins the 
      ancestor search, recording information about the located ancestors in 
      the ANCESTOR.WRK file.  This "work" dataset does not have to be 
      recreated each time an ancestor report is printed if there is no 
      change to the family file that would change the relationships recorded 
      in it.

      If you have decided to identify adoptive relationships as indicated 
      in Appendix C and you have included adoptive relationships in the 
      ancestor search, adoptive parents will be noted by an "*" to the right 
      of the lineage number in this report.

      If a child is born to related individuals, the common ancestor of 
      those individuals will appear twice on an ancestor report for that 
      child.  In the ancestor reports produced by this system, such common 
      ancestors will be noted and the lineage of the ancestor will be 
      continued only for the ancestor's occurrence with the smallest lineage 
      number.

      If you have elected to show marriage dates in this report, the date of 
      marriage will only be shown on the line for female ancestors.  The 
      number of years married is computed from the dates in the marriage 
      record, the death dates of the spouses and/or the current date at the 
      time the report is produced.  If the death date of one of the spouses 
      is used to determine the number of years married, then an "*" will 
      appear to the right of that number in the report.

      ANCESTOR REPORT OPTIONS MENU
      As noted previously, many of the options for printing ancestor reports 
      appear as a Menu in a viewing area in the lower right corner of the 
      screen.  This menu appears as follows:

                Print ID's:  N   Sex: N
                 Age/Anniv:  D   (Y/N/D)
                Relations:   N   (Y/N)
                Places:      N   (Y/N)
                Marriage:    N   (Y/N)
                Comments:    N   (Y/N/A/S)
                Page Nos:  Y  Line REF:  Y
                First Page Number:    1

      The option for printing Ages or Last Anniversary may have values 
      "Y"es, "N"o or "D".  The "D" means that an Age is only to be printed 
      if the individual has Died (or a Last Anniversary will be printed only 
      if the marriage has been terminated by death or other cause).  

      The option for printing Comments may have values "Y", "N", "A" or "S".  
      The "A" selection (for ALL) means that the comments are to be printed 


                                     34



      (as with "Y") but that "bracketed" comments are to be included.  
      "Bracketed comments" are those that are enclosed in "curly brackets" 
      or "braces", "{" and }".  This permits you to isolate possibly sensi-
      tive or conjectural remarks from other comments.  When you choose to 
      print these comments with the "A" option, the enclosing braces are 
      replaced with spaces.  The value "S" requests that bracketed comments 
      be printed, but to "S"how the brackets instead of replacing them with 
      spaces.

      Line REFerence indicators are line numbers that are printed in the 
      margin area, when Margin >= 4, to assist in finding the location of 
      individuals referred to in a report index.  Producing report indexes 
      is one of the extended options provided to registered users.

      Being able to set the value with which page numbers are to begin 
      allows you to print several different reports with continuous, 
      sequential numbering of the pages.


      2. DESCENDANT Report (Main Menu option F2-A-2)

      The Descendant Report may be produced in several formats.  Individuals 
      may be grouped either by "generations" or by "families".  The genera-
      tion grouping uses the `bloodline' to  group and `label' the indivi-
      duals listed.  In so doing, individuals in the same generation who are 
      `closely related' appear near one another in the report.  Brothers and 
      sisters appear in succession in birth date sequence, with 1st cousins, 
      2nd cousins, etc. grouped around them.  It is also easy to locate, in 
      previous generations, the ancestor which an individual has on that 
      generation level by locating the individual on that level whose blood-
      line forms the initial sequence of numbers in the bloodline of the 
      descendant in question.  

      The "family" grouping will have children located closer to their 
      parents, though brothers and sisters will be more widely separated in 
      the report.  The report for "family" grouping is printed in a "chart" 
      or "outline" format with each individual's name offset according to 
      the generation in which he/she belongs.  This outline format will 
      probably be easier for most people to use.

      Before printing a descendant report (or any of the other "relation-
      ship" reports described in this section) you must identify which 
      individuals are to be listed.  This is done by entering a "Base ID" 
      for the individual whose descendants are to be listed and letting the 
      program "search for" the descendants of the individual.  The number 
      of generations of descendants that are to be searched appears under 
      the File Names in the upper left corner of the screen and may be 
      changed by selecting the option (F1) for changing file names.    

      When you press F3, the program asks you for the Base ID and whether 
      you wish to include adoptive relationships.  It then begins the 
      descendant search, recording information about the located descendants 
      in the DESCNDNT.WRK file.  This "work" dataset does not have to be 
      recreated each time an ancestor report is printed if there is no 
      change to the family file that would change the relationships recorded 


                                     35



      in it.

      Most Descendant report options appear in a viewing area in the lower 
      right portion of the screen.  These are identical to those for the 
      Ancestor report.  Please refer to the discussion of the ANCESTOR 
      REPORT OPTIONS MENU above for a further description.

      If you have decided to identify adoptive relationships within the 
      system as described in Appendix C, you may optionally include or 
      exclude the adoptees and their descendants in this report.  When 
      included, the bloodline will have an "*" next to an entry resulting 
      from an adoptive parent-child relationship.

      If you have elected to show spouse information  in this report, the   
      number of years married is computed from the dates in the marriage 
      record, the death dates of the spouses and/or the current date at the 
      time the report is produced.  If the death date of one of the spouses 
      is used to determine the number of years married then an "*" will 
      appear to the right of that number in the report.

      It should be noted that an individual may have more than one bloodline 
      to an ancestor in the case that a child has been born to cousins or 
      other related individuals, and that such persons would appear more 
      than once on the `descendant tree' of such an ancestor.  The children 
      of such unions are noted on the descendant report produced by the 
      system and their descendants will be continued only under the first 
      listed bloodline.


      3. RELATIVE Report (Main Menu option F2-A-3)

      This report includes entries for all relatives of an individual found 
      during a search of the files which:
         a. First locates all ancestors of the individual going back a user 
            specified number of generations, and
         b. then finds all descendants of the individual and all located 
            ancestors, going forward a user specified number of generations.
      The limits on numbers of generations searched allow some control over 
      the maximum "distance" located relatives will be from the individual 
      used to start the search.  For example, if you are only interested in 
      "offline" relations to the 1st cousin level, you would set the number 
      of descendant generations searched to 2.  The numbers of generations 
      searched appear under the file names in the upper left part of the 
      screen and may be changed by pressing F1 to change the File Names 
      section.

      Before printing a relative report (or any of the other "relationship" 
      reports described in this section) you must identify which individuals 
      are to be listed by selecting option F3 and entering the "Base ID" for 
      the individual whose relatives are to be listed. The program will then 
      create a RELATIVE.WRK dataset in which the ID#'s of the relatives are 
      recorded.  This "work" dataset does not have to be recreated each time 
      a relative report is printed if there is no change to the family file 
      that would change the relationships recorded in it.



                                     36




      The RELATIVE Report is a combination of the ancestor and descendant 
      reports which have been described above.  In fact the ancestor and 
      descendant reports are "special cases" of the relative report as 
      follows:
         a. the Ancestor report is a relative report in which the number of 
            "descendant" generations searched is 0, and
         b. the Descendant report is a relative report in which the number 
            of "ancestor" generations located is 0.
      All three types of reports are produced by the same program.  

      Prior to the introduction of the relative report, the ancestor and 
      descendant reports were produced by separate programs and were 
      selected by separate Main Menu options.  For the sake of continuity, 
      you are still allowed to select the ancestor and descendant report 
      options independently from the Main Menu and the format of the 
      displays produced by these options reproduce those of the previous 
      programs.  To avoid making the user have to unnecessarily go back to 
      the MainMenu program to return to a different one of the three func-
      tions of this program, a method of directly switching between these 
      options is provided as follows:
         a. pressing ALT+A selects the Ancestor report function (while in 
            the descendant or relative report portions of the program)
         b. pressing ALT+D selects the Descendant report function (while in 
            the ancestor or relative report portions of the program) and
         c. pressing ALT+R selects the Relative report function (while in 
            the ancestor or descendant report portions of the program).

      The relative report is like a combination of the descendant reports of 
      the "base" individual and all the located ancestors.  These individual 
      descendant reports are presented in the lineage number sequence of the 
      ancestors.  If an individual occurs in more than one descendant report 
      (for example the father will appear as a child in the descendant 
      report of each paternal grand-parent) then the descendants of the 
      individual will only appear within the descendant report for the 
      ancestor of lowest lineage number.  In subsequent "descendant" 
      reports, only a single line of information will appear for the indivi-
      dual with a reference to the page and line number of the next previous 
      reference to the individual in the relative report.  This has the 
      effect of eliminating much of the redundancy that results when pro-
      ducing separate and complete descendant reports for each of your 
      ancestors.

      There is an additional piece of information that can be shown for each 
      entry on the relative reports.  It is a literal describing the 
      "common" relationship between the relative and the individual on whom 
      the report is based.  Some of these relationship labels are:
         Child, gChild, ggChild, g2gChild (great,great grandchild) etc;
         Father, Mother, ggFather, ggMother, g3gFather (great,great,great 
            grandfather) etc;
         Brother, Sister, Niece, Nephew, gNiece, g2gNephew, etc;
         Aunt, Uncle, ggAunt, g4gUncle, etc;
         Cousin, 2Cousin, 3Cousin (third cousin), 4Cousin, etc;
         1C1R (1st cousin, once removed), 2C3R, 4C11R, etc.
      These relationships are particularly useful for getting over that 


                                     37



      "bloodline barrier" that sometimes makes relatives seem more distant 
      than they really are.

      The options for formatting each of the "descendant" reports within the 
      relative report are the same as previously described for the full 
      descendant reports.  They may be produced with descendants grouped by 
      generations or by families, and when grouped by families they will 
      appear in a "chart" or "outline" format with names offset according to 
      the generation level within the descendant report.

      Most Relative report options appear in a viewing area in the lower 
      right portion of the screen.  These are identical to those for the 
      Ancestor report.  Please refer to the discussion of the ANCESTOR 
      REPORT OPTIONS MENU above for a further description.

      If you have elected to show marriages and "Anniv"ersaries  in this 
      report, the number of years married is computed from the dates in the 
      marriage record, the death dates of the spouses and/or the current 
      date at the time the report is produced.  If the death date of one of 
      the spouses is used to determine the number of years married then an 
      "*" will appear to the right of that number in the report.

      Another type of information that can be included in the relative 
      report (and after Sept 86 also the Ancestor and Descendant reports) is 
      the "COMments" that you have recorded under the name and spouse 
      records in your family files.   Prior to the introduction of this 
      report, comment information was only printable in the Family Group 
      Reports. Being able to include these notes in the lists produced by 
      the system, should make them more accessible and useful in your 
      continuing research efforts.

      The COMment information appears on separate lines following the line 
      of standard information for a relative or spouse.  In the Fixed format 
      report it is preceded by a "COM:" literal, and individual comment 
      lines are joined together to form longer lines whose length is deter-
      mined by the length of the standard data line for the types of infor-
      mation you have chosen to include in the report.  In the Free Form 
      report, the comments appear as a continuation of the "paragraph" of 
      information about the individual.

      It is possible to isolate parts of the comment information for 
      optional exclusion from the printed comments.  This is done by 
      enclosing the text of those comments within "braces" or "curly 
      brackets" ("{" and "}").  (If the entire comment area is enclosed in 
      braces, then no comment area will be printed.)  A more complete 
      description of the formatting of comments in reports is given in 
      Section III.F.2 of this manual. 


      4. Family Group Reports  (Main Menu options F2-B-1 and F2-B-2)

      When the "Free Format" style of reports was introduced in March 1990, 
      I was unable to put all the instructions for both "old" and "new" 
      reports in a single program.  Therefore you must choose between the 
      two styles of reports when you select the Family Group report option 


                                     38



      from the Main Menu.  The "Fixed Format" for the family group report 
      appears as a "filled in" family group worksheet.  If you have recorded 
      only partial information for an individual, portions of the report 
      will appear as "blank" lines which could be completed as the informa-
      tion is discovered.  In the "Free Form" group report, all basic 
      information recorded for an individual "flows together" in "block" or 
      "paragraph" style.  There are no "blank" lines for missing informa-
      tion, but you may find this report more appropriate for sending to 
      relatives.

      The FAMILY GROUP REPORT produced by the system is intended to provide 
      a complete listing of information on record for an individual.  Infor-
      mation that may be printed includes: personal information (name, 
      birth/death dates and places), parents, spouse(s), spouse's parents, 
      children, child's (latest) spouse, and all residence information for 
      the individual.  The report may also show the "other" types of infor-
      mation from Medical, Educational, Work and Military records.  In 
      addition, all addresses and comments relating to the above information 
      can be included in the report.  You may also include a line which 
      shows the Relationship and Lineage of the subject of the report based 
      upon a supplied relationship work file (i.e. an Ancestor/ Descendant/ 
      Relative work file).

      The `viewing area' in the lower right corner of the screen lists the 
      types of family file information that you may optionally include in 
      the family group report.  Using program option F6, you may specify 
      whether or not a category of information is to be INCluded and (in the 
      Fixed Format report) the MINimum number of entries of that type that 
      are to be shown.  If a category is to be included but the minimum 
      number of entries is set to 0, then a section for that type of 
      information will appear in the report only if there is information of 
      that type recorded in the family file.  A section will appear in a 
      blank family group report form only if the MINimum number of entries 
      for that section is not 0.

      There are two entries for comments in the list of information types.  
      The first controls the printing of NAME and SPOUSE record comments; 
      the last entry in the list controls all other comments.  Several 
      people have requested being able to print both the SPOUSE record 
      comments and the spouse's NAME record comments under the spouse entry 
      in this report.  This is allowed by the INClude parameter for the 4th 
      item in the list.  If it has a value of "A" (for ALL), then both the 
      spouse record comments and the spouse's name record comments will be 
      printed (with a blank line separating them if they are both present); 
      if the INC parameter has a value of "Y" then just the spouse record 
      comments will be printed.   

      You will probably want to produce a Family Group report for each of 
      your ancestors (male and female) and any descendants who have main-
      tained separate households.  To help simplify the task of printing the 
      many Family Group reports that you will want to be saving, you are 
      given several options for BATCH printing of family group reports.  You 
      may enter a list of ID #'s for reports that you want printed, or you 
      can instruct the program to read a relationship file (Ancestor/ 
      Descendant/ Relative Work file) or a SELECT.WRK file to determine 


                                     39



      which reports are to be printed.  It is therefore relatively easy to 
      print reports for all ancestors of an individual or for all descen-
      dants or relatives of a given individual.  When printing reports using 
      one of these lists of ID#'s, you may also request to BYPASS the 
      printing of reports for children whose own group report contains no 
      information that is not found on the one being printed for a parent or 
      for wives whose own family group report contains no information that 
      is not found on the one being printed for the husband.  (The last 
      option may sound a bit sexist, but I believe it probably conforms to a 
      common procedure for maintaining files of family group reports.)

      Program option F4 requests the printing of reports for the selected 
      individuals.  When printing reports for ID's in a list (either entered 
      individually or read from a file) you may specify whether to print the 
      reports in ID# sequence or in the order specified by an INDEX file. 
      (Creating an INDEX file is one of the extended options for the system.  
      It may be either a SORTED Index or one which sequences a group of 
      ancestors, descendants or relatives in the order that they would 
      appear in one of the relationship reports.)  Further, you may request 
      that the reports be printed separately or that they be merged into a 
      single report with a line of asterisks separating individual reports.  
      In the merged report, pages are numbered sequentially and line number 
      indicators may be placed in the margins (when the margin is >4) to 
      assist in locating the source of references in the report indexes 
      produced by one of the system's extended options.  The merged family 
      group report is intended to simplify the task of producing booklets of 
      family information. 

      a. Identifying Group Reports to be Printed

         Group reports that are to be printed are identified by giving the 
         program the ID # of the primary subject of the report.  Program 
         option:  "F3  Change SELECT Type or ID's"   allows you four ways 
         of entering these ID's.  When you press the F3 key you will be 
         asked to:
          Select: 1)Single ID 2)List of ID's 3)Select File 4)Relative File 

         If you choose "1", you will be asked to enter a single ID (in the 
         middle of the screen where it says:  "Processing ID #:"
         The Name record corresponding to the ID # will be retrieved and 
         the name found there will be displayed to confirm your selection.  
         This option was the only one provided prior to Oct 87.  When using 
         this mode of selection, the printing of the reports is handled just 
         the same as it was prior to Oct 87.

         If you choose SELECT option "2) List of ID's", the bottom line of 
         the screen will be formatted with an "option line", and the 
         blinking cursor will appear near the middle of the screen to the 
         right of the label "Processing ID #:".  You can enter a list of 
         individual ID numbers by typing each one on the screen and pressing 
         the enter key.  After entering an ID#, the corresponding name 
         record will be retrieved and the name found in the record will be 
         displayed to the right of the ID#.  You can enter a range of ID #'s 
         by pressing the F2 key and following the prompts that appear on the 
         bottom line of the screen.  Pressing the F3 key will delete the 


                                     40



         currently displayed ID from the list.  All ID #'s entered are kept 
         in a list in ID# sequence and you may use the PGUP and PGDN keys to 
         move up and down the list to review previously entered ID's.  The 
         CTRL+PGUP and CTRL+PGDN key combinations will move you respectively 
         to the lowest and highest ID #'s in the list.  Near the right 
         center portion of the screen the number of ID #'s currently in the 
         list and the total number of name records in the file are shown.  
         You may press the F10 key to SAVE the list in a SELECT Work file 
         for later reuse.  After you have finished adding all the ID #'s to 
         the list that you want, press the F1 key to terminate the process. 
         You can return to change a previously entered list of ID #'s by 
         pressing the F3 key and then the SPACE bar.

         If you choose SELECT options "3" or "4" then the SELECT work file 
         or the relationship work file, respectively, (identified in the 
         File name section of the screen display) will be used to determine 
         the ID #'s for which family group reports are to be printed.  The 
         name record for the first ID in the resulting list will be 
         retrieved and the individual's NAME displayed.  The number of 
         reports selected for printing and the total number of name records 
         in the file will be displayed at the right center part of the 
         screen.  You may then proceed to change the list just as described 
         in the previous paragraph.

      b. Printing Family Group Reports
         
         When you use function F4 to print family group reports for a list 
         of ID#'s or for ID #'s in a work file, you will be given the 
         choice of printing the reports in ID # sequence or in INDEXed 
         sequence (described by the INDEX File in the File name section).  
         Creation of an INDEX file is one of the functions provided by the 
         extended protion of the system.  Using an index file, it is 
         possible to print the group reports in SORTed order (for instance 
         in "Surname" sequence), or in RELATIONSHIP order (that is, in the 
         order that the individuals would appear in an ancestor, descendant 
         or relative report).

         The viewing area in the lower right corner of the screen will be 
         reformatted with a Menu of Family Group Report options and you will 
         be asked if you want to:   Change Report Options? (Y/N)
         If you respond "Y", you will be given an opportunity to change the 
         following Menu:

                  N   (Y/N) Print ID Numbers
                  Y   (Y/N) Fill Blanks with Underlines
                  N   (Y/N) Print Subject Lineage
                  N   (Y/N) Line Between Children
                  N   (Y/N/S) Print Brkt Comments
                  B   (C/W/B/N) Use Bypass Logic
                  Y   (Y/N) Print Line Ref
                  Y   (Y/N) Print Page Numbers
                    1 = First Page Number 
               
         If you choose "Y" for "Print Subject Lineage", then the file 
         described by the RELATIVE file description among the FILE NAMES 


                                     41



         will be used to create a relative table.  While the group reports 
         are being printed, the relative table will be used to determine the 
         RELATIONSHIP (g3gFather, 3C4R, etc.) and LINEAGE (lineage 
         number+bloodline) of the subject of the report, if the subject is 
         among the individuals included in the table. 

         The option for "Line Between Children" allows you to request that a 
         blank line be inserted between children in the group report.  This 
         came at the suggestion of a user who felt that it would make it 
         easier to read the child information.  I agree with her, but it 
         also takes extra paper, so you are given the choice.

         Beginning with the Sept 1988 update, you were given the option of 
         enclosing the text of certain comments with braces or "curly 
         brackets" ("{" and "}"), for instance to isolate sensitive or 
         conjectural remarks that you might not want to make generally 
         available.  If you enter "Y" next to "Print Brkt Comments", then 
         bracketed comments will be printed along with the rest and the 
         brackets will be replaced with spaces.  If you enter "N", the 
         bracketed comments (including the brackets) will be replaced by a 
         single space.  If you enter "S" (for "Show") then the bracketed 
         comments will be printed along with the brackets.

         When printing family group reports from a list of ID's, you are 
         given an opportunity to eliminate the printing of certain reports 
         whose information duplicates that found on another report that is 
         being printed.  This is done by entering "C", "W" or "B" next to 
         the "Use Bypass Logic" option.  

         A value of "C" for "Use Bypass Logic" tells the program to 
         eliminate the printing of a report for a "C"hild whose parent's 
         group report is being printed and for whom there is no information 
         being printed in the child's report beyond that which appears in 
         that of the parent(s).  For instance, if you are printing family 
         group reports for all descendants of an ancestor this option would 
         allow you to skip printing Family Group Reports for the many 
         persons (including minor children) who have simply been listed as a 
         child on one Family Group Worksheet but for whom you have never 
         received or had need to create a separate Family Group Worksheet of 
         their own.  

         A value of "W" for "Use Bypass Logic" tells the program to  
         eliminate the printing of a report for a "W"ife if the husband's 
         report is to be printed and her own group report would have no 
         information on it beyond that that appears on the group report of 
         her husband. 

         A value of "B" for "Use Bypass Logic" instructs the program to 
         employ the rules for eliminating "unnecessary" group reports for 
         "B"oth Children and Wives.

         Line REFerence indicators are line numbers that are printed in the 
         margin area, when Margin >= 4, to assist in finding the location of 
         individuals referred to in a report index.  Producing report 
         indexes is one of the extended options provided to registered 


                                     42



         users.

         Being able to set the value with which page numbers are to begin 
         allows you to print several different reports with continuous, 
         sequential numbering of the pages.

         You are given two format options for printing family group reports 
         from a list of ID's.  In particular, you will be asked to:
                    Select:  1)Separate Reports  2)Merged Reports
         If you enter "1" then separate Family Group Reports will be printed 
         for each ID in the ID List that has been created (who is not 
         Bypassed as described above) just as if you had printed them 
         separately and individually.  Any other response will result in all 
         family group reports being printed continuously with a line of "* * 
         * *" separating them.  The pages in the "merged" report will also 
         be sequentially numbered.  In effect, this provides you with still 
         another type of report...one which can show ALL information in the 
         file for each individual.  

         In the "Fixed Format" reports the MINimum counts of the types of 
         information to be included will be assumed to be zero (sections 
         will be shown for information of a given type only if it is to be 
         INCluded and there actually is information in the file for the 
         individual whose family group report is being printed).  

         One of the options in the extended part of the system allows you to 
         produce a printed index for these reports with the page and line 
         numbers for each reference to each individual in any of the family 
         group reports printed.

         When printing batches of family group reports, you will be asked 
         whether to:   Start at Beginning of LIST? (Y/N)
         If you reply "N" then if you are printing separate group reports, 
         you will be asked to:
                    Enter Starting ID=xxxx
         or if you are printing a merged family group report, you will be 
         asked to:  Enter Starting Page=xxxx
         This allows you to restart the printing of a batch of family group 
         reports without having to reprint those that have already been 
         successfully processed.  

         Finally, when printing batches of family group reports, you will be 
         asked before printing each report:
                        Print Report for ID=xxxx  (Y/N/A)
         If you reply "N" then the next ID to be printed will be looked up 
         and a similar message will be shown for it.  If you reply "A" then 
         this report and all succeeding ones will be printed until you 
         terminate a report by pressing the SPACE key to pause it, and then 
         the ESCape key to cancel it.  If you cancel a report, then you will 
         again be asked whether you want to print a report for the next ID.  
         If you press the ESCape key when this prompt is displayed, then the 
         entire print process will be terminated.





                                     43



      5. ANCESTOR CHARTs and MAPs  (Main Menu option F2-C-1)

      The system also produces ANCESTOR CHARTS for an individual in the 
      traditional `horizontal tree' format, with an individual appearing on 
      the left (center) of the page and the parents appearing to the right 
      above (father) and below (mother) the line on which the individual is 
      identified.  You can print either "formal" ancestor charts, showing 4 
      generations of ancestry on each chart, or an Ancestor MAP with up to 
      53 generations of ancestors in a single continuous chart.

      FOUR GENERATION ANCESTOR CHARTS
      Because only 4 generations of ancestors (comprising 15 individuals) 
      may appear on a single "formal" chart, several charts may be required 
      to show all ancestors on file for an individual.  The Family History 
      System has been designed to produce as many `subcharts' as are 
      required to show all recorded ancestors.  In doing so, it is necessary 
      to employ some scheme to show how to proceed from one chart to the 
      next in a set.  I have chosen to assign a `chart-ID' to each of the 
      charts produced.  This chart-ID consists of the generation level of 
      the ancestor appearing to the left on the chart, and the number of 
      that ancestor within that generation level.  Some chart-ID's would be 
      0-1 (the first chart of a set), 4-1, 4-2, 4-3,...,4-16,8-1,8-2,...,8-
      256, etc.  This method of identifying charts has the advantage that 
      charts which are not printed, because they are empty, can be printed 
      at a later time (when information does appear on them) and they will 
      have a natural place in the sequence of charts, without affecting the 
      previous Chart ID's.

      Charts will be printed only if an ancestor has been recorded on the 
      chart.  If an ancestral line may be continued beyond one of the charts 
      in the series, then the chart-ID for the appropriate continuation 
      chart will be shown on the right side of the chart to be continued.

      Individual entries on the chart may be numbered from 1 to 16 on each 
      chart, or you may choose to label each entry with the lineage number 
      of the ancestor recorded on the line.  

      If you have decided to identify adoptive relationships as indicated in 
      Appendix C, the adopted parent will be noted on the ancestor chart 
      with an "*" in the first position of the NAME field.

      The "Spouse of Entry #1" appearing in the lower left corner of each 
      chart is the most recent spouse of the individual listed in entry #1 
      and may not be the "paired" ancestor on the chart.
       
      Blank ancestral charts may be produced for recording ancestral infor-
      mation prior to entering the information into the system's files.

      ALL GENERATION ANCESTOR MAP
      You may also print an ALL GENERATION Chart which, though not as 
      formally presentable as the 4 Generation Charts, has the advantage of 
      providing a complete overview or MAP of ALL (up to 53 generations) of 
      the recorded ancestors for an individual in a single report.  The 
      format of this report is such that:
           the information for each ancestor occupies a single line 


                                     44



           no lines are produced for "missing" ancestors
           the line for the father of an individual on the report is above 
               the line of information for the individual
           the line for the mother of an individual on the report is below 
               the line of information for the individual
           the information for ancestors is offset 4 spaces to the right for 
               each generation level
           all parent-child relationships are graphically represented by 
               lines connecting the child to the parent(s).

      The information shown for each ancestor includes:
           The lineage number of the ancestor
           (Optionally) the ID # of the ancestor, within parentheses
           The ancestor's NAME
           (Optionally) the birth/death dates and age, in the format
                    b. 7 Apr 1863,d.10 Feb 1937 at age 73
           (the age is shown only if both birth and death years are known. 
            If either date's month and day are unknown an "?" will appear to 
            the right of the age)

      This ALL GENERATION Ancestor Chart or MAP is printed continuously 
      in a single long report with no breaks at page boundaries.  Up to 20 
      generations of ancestors may be printed using compressed print on   
      8 1/2" wide paper.  Reports which exceed the width of the available 
      paper can be printed out in 2 or more strips using the OFFSET Printer 
      parameter.  For example, suppose you wish to print a report that would 
      require a 150 character print line but you are using a font and form 
      which only allow 80 printed characters.  You can print the report 
      first with a Form Width of 80 and OFFSET=0 to get the left most 80 
      characters of each print line and then print it again with an OFFSET 
      of 80 to get the right most 70 characters of each print line.  The two 
      strips can then be joined together along the side to produce a 
      complete ancestor Map.


      6. DESCENDANT CHARTs (F2-C-2)

      The Family History System can also produce graphical charts of descen-
      dants with information in "boxes" connected by "relationship lines".  
      A descendant chart may include up to 99 generations.  Large charts can 
      be printed in 'strips' which can be joined together to make a "wall 
      chart" or you can print the full chart to a file for special 
      processing by any printing utilities you may have.

      The chart format groups descendants by "generation levels" with 
      information on individuals in the same generation level recorded in 
      boxes which are in the same column of the chart.  The first child of 
      each descendant is recorded in a box to the right of the parent and in 
      the same row of the chart.  Children are sequentially numbered and an 
      adopted child is denoted by an "*" to the right of the child number.  
      You may request that the descendants of each individual in the chart 
      be printed before the row containing the next sibling or cousin, or 
      you may permit the program to "nest" the families together whenever 
      possible, producing a more compact chart.



                                     45



      The information shown for each descendant may include name, birth and 
      death dates and places, marriage dates and places, spouses' names and 
      spouses' birth and death dates and places.  All boxes of information 
      are the same width, which you may specify.  If the width is not 
      sufficient to show the information that is to appear on a line, the 
      data will be truncated to the size of the box.  To help minimize this 
      truncation without requiring excessively large boxes, the program will 
      adjust the format according to the box width as follows:
             If datawidth is less than 27 characters, then birth and death 
             dates will appear on separate lines; if place information is 
             included and the box width is less than 35 characters, then 
             dates and places will be shown on separate lines.
      In addition you may request that names be shown on 2 lines, with 
      surname and given names on separate lines.  (You can request either 
      surname or given name be first, and you may ask that the surname be 
      capitalized for emphasis.)

      As with other relationship reports, 'crossed' family lines are noted 
      and the descendants of the children of related individuals will only 
      be shown under their earliest appearance in the chart.  Subsequent 
      chart entries for the same individual will have a back reference of 
      the form:     (Same as GL=xxx, line=yyy)
      where xxx is the generation level of the earlier occurrence and yyy is 
      the line number.  Please note that the left most 'generation level' is 
      the '0' level, the next is '1', etc.

      Realizing that it may be difficult to locate particular individuals on 
      a large chart, you can create a REFERENCE file which identifies the 
      generation level and line number on which each individual's name 
      appears.  An extended option can then print a Chart Index from 
      information in the REFERENCE file.

      PRINTING DESCENDANT CHARTS
      Before printing a chart, you must identify the individual whose 
      descendants are to be "charted".  This is done using the chart program 
      option F3 and entering the ID number of the individual's name record 
      in the FHS family file.  This process does not build a "work" file, as 
      the descendant report program does, but just verifies that the ID # is 
      valid and displays the name from the chosen record.

      Charts are printed using chart program option F4.  You will be asked 
      whether you want the output to go to the SCREEN, PRINTER or FILE.  If 
      you choose file output, you will be prompted to enter the name of the 
      output file which is to be created.  Screen output is limited to 79 
      characters and printer output is limited to the "forms width" given in 
      the Printer Parameters, but file output contains the entire chart...
      When printing to the screen or printer, if a line of the chart extends 
      beyond the right side of the strip being printed, then after the 
      printing of the strip is completed, you will be asked if you want to 
      continue printing with the next strip.

      When printing a chart, you are also asked to select the format for 
      names from among:
            1. Last, First  2. LAST, First  3. First Last  4. First LAST
      Therefore you can have the surname either precede or follow the given 


                                     46



      name, and you may request that the surname be converted to all capital 
      characters (options 2, 4) for visual emphasis.

      Before the printing of the chart begins, you will be asked whether you 
      wish to create a REFERENCE work file.  This file will contain an entry 
      for each name in the chart, identifying the generation level and line 
      number on which the name appears.  The report index option of the 
      extended system can then print an index from information in the 
      reference file.

      If you are not sending output to a file, you will be asked if you want 
      to:           Start at beginning?  (Y/N)
      This permits you to continue printing an interrupted chart at a line 
      below the top of the chart.  If you reply "N", then you will be asked 
      to:    Enter Line number to begin printing: ____
      If you choose this option then the printing of the chart may appear to 
      be delayed because the program must still process the unprinted lines 
      in order to "find its place".  (Please note that starting the print 
      with a 'strip' after the first or leftmost one is accomplished by 
      using the Printer OFFSET field among the printer parameters in the 
      upper right corner of the screen.  For instance, if you have a forms 
      width of 132 charactres and you want to begin printing the 3rd strip 
      of a chart, you would set the OFFSET to 264.)

      You can pause the printing by tapping the space bar.  You can then 
      terminate the printing by pressing the ESCape key, or continue it by 
      pressing any other key.  If you continue the printing by pressing the 
      PGDN key, then the program will pause at the top of the next page.  
      This can be useful if you see that your printer is running low on 
      paper and want to pause at a convenient place for adding a new supply.

      Several options for formatting descendant charts are shown in a 
      viewing area in the lower right corner of the screen.  Program option 
      F5 permits you to change these options.  Your changes will be 
      'remembered' throughout a FHS working session but the default values 
      will be restored at the beginning of the next session.  These options, 
      together with their default values are:
                     15  Data Area Width
                      Y  Print Name on 2 Lines
                      N  Show ID Numbers
                      Y  Show Birth/Marriage/Deate Dates
                      Y  Show Places
                      Y  Show Marriages
                      N  Show Line Refernce Index
                      Y  Allow Nesting
                      Y  Continuous Forms
      The 'Data Area Width' is the number of characters that can be placed 
      on each line of an 'information box'.  Each generation shown in the 
      chart actually requires 5 more characters, for the sides of the box 
      and connecting lines.  The minimum value for the data area width is 0 
      and this is really only suitable for seeing the basic structure of the 
      chart.  The default value of 15 allows viewing four generations on the 
      screen but would probably not be suitable for a printed chart because 
      of the amount of truncation.  A width of 25 would allow places to be 
      shown without truncation.  If places are not shown, a width of 27 will 


                                     47



      permit birth and death dates to be placed on a single line of the box.  
      If places are included, a value of 39 will permit date and place 
      information to be placed on the same line.  A value of 32 is the 
      smallest box width that would guarantee no truncation of any informa-
      tion (assuming names are placed on 2 lines).  In many cases, a value 
      smaller than 32 will be sufficient to avoid truncation, even with the 
      full name on a single line.  Whatever value you choose for the data 
      width, the full chart can be printed on any printer, though it will 
      likely be necessary to print it in several 'strips' that can be joined 
      together to produce the full chart.

      The option 'Print Name on 2 Lines' allows you to request that the 
      Given name and Surname appear on separate lines in the information 
      box.  When you begin printing a chart, you are allowed to request 
      whether the surname (the last name) or the given name will occur 
      first.  The name that occurs first in the chosen format will be placed 
      on the first line when the name is placed on 2 lines.  The purpose of 
      this option is to permit you to print a chart with a smaller data 
      width without having any truncation of a person's name.

      If 'Show ID Numbers' is chosen as a chart option, then the ID number 
      of each name record will appear, within parentheses, at the beginning 
      of the formatted name.  If marriages are also to be shown then the ID 
      number area of each descendant who has another parent recorded will be 
      in the form:  (xxx:yyy)   where the first number is the ID for the 
      child's record and the second number is the ID number for the parent 
      that is NOT among the descendants charted.  This may be one of the 
      spouse's of the parent on the chart (this may be determined by looking 
      at the information box for the parent) or it may be the ID number of 
      someone who was never married to the parent.  If the ID of the other 
      parent is shown, then an "*" will appear to the right of the ID if it 
      is an adoptive relationship.

      The 'Show Line Ref' option controls whether or not a 'line index' will 
      be printed in the leftmost 5 characters of the chart.  This line index 
      can be useful for locating a particular information box from a 
      reference in the chart index that can be printed using one of the FHS 
      extended options.

      The 'Continuous Forms' option determines whether the chart is to be 
      printed continuously across perforations of 'fan-fold' paper, or 
      whether it should be stopped 2 lines from the bottom of the page, 
      followed by a form-feed to the top of the next page.  This option is 
      primarily for those who are using laser printers or other cut sheet 
      printers.

      The 'Allow Nesting' option controls whether or not the chart entry for 
      a younger sibling can be placed in the chart before all the descen-
      dants of an older sibling have been charted.  See the diagrams on the 
      following page for a comparison of nested and un-nested charts.  In 
      the charts that I have tried, nested charts require 20%-30% fewer 
      lines than unnested ones for the same group of descendants.  Of course 
      this is very much dependant on the pattern of relationships being 
      charted. 



                                     48



                   An UNNESTED Chart                     A NESTED Chart
                +----+   +----+   +----+           +----+   +----+   +----+
             ---+    +-+-+    +-+-+    !        ---+    +-+-+    +-+-+    +
                +----+ ! +----+ ! +----+           +----+ ! +----+ ! +----+
                       !        !                         !        ! 
                       !        ! +----+                  ! +----+ ! +----+
                       !        +-+    +                  +-+    + +-+    +
                       !          +----+                    +----+   +----+
                       !
                       ! +----+
                       +-+    +
                         +----+                    
                                                   +----+   +----+   +----+
                                                ---+    +-+-+    +-+-+    +
      The chart at the right is the same whether   +----+ ! +----+ ! +----+
      nesting is chosen or not.  The second               !        !
      child in the first generation cannot be             !        ! +----+
      placed on the chart earlier because of the          !        +-+    +
      space required for his/her own child.               !          +----+
                                                          !
                                                          ! +----+   +----+
                                                          +-+    +---+    +
                                                            +----+   +----+

      B. Report Program Parameters

      Each report program permits the operator to change several 'para-
      meters' that control the information going into a report as well as 
      the format of the output.  This includes the names of system input and 
      work files as well as printer destination and `setup', and form size.  

      Changes to the report parameters are made by selecting the type infor-
      mation to be changed using the appropriate function key, changing the 
      information on the screen (using TAB and SHIFT+TAB to move between 
      updatable fields just as in the file maintenance program) and pressing 
      the F1 key when all desired changes have been made.  

      Printer destination can be LPT1: or  LPT2: (parallel printers), COM1: 
      or COM2: (serial printers), or SCRN:.  In the case that the destina-
      tion is set for SCRN:, you will not be prompted to identify whether a 
      report is to be sent to the screen or printer.  

      The report programs will also permit you to route your printer output 
      to a file.  Some users have taken advantage of this feature to print 
      reports with a longer print line than is normally allowed for their 
      printer and then using a sideways printing utility to process the 
      report output file.  You may want to create a separate printer table 
      just for this process.

      The printer "SETUP"s selected must previously have been created (using 
      MAIN MENU option  F3-C).  If you change the SETUP number, the program 
      will attempt to read the printer table from the FAMILY.DAT file on the 
      "default" drive (the one on which you started the programs).  If it 
      doesn't find the FAMILY.DAT file there, it will ask you to:
               Place diskette with FAMILY.DAT in default drive...


                                     49



      This should only happen if you are running the programs from diskettes 
      and have removed the STARTUP diskette from the default drive.  If you 
      replace the STARTUP diskette in that drive and press any key, the 
      program will again attempt to find the FAMILY.DAT file to retrieve the 
      desired printer table SETUP. 

      The `MARGIN' parameter allows you to indicate the left margin offset 
      in numbers of blank characters.  This is to allow room for binding or 
      punching holes for inserting the report in a notebook.  (Note that 
      when printing the Ancestor, Descendant, Relative or "batched" Family 
      Group reports, use of a margin >3 will result in the placement of 
      "line number" indicators in the margin area.  These are useful when 
      locating a reference from the report index, which may be produced as 
      an option of the extended system.

      The `Form OFFSET' parameter may be used to print a report (in more 
      than one pass) when a selected printer or printer font is unable to 
      print an entire report line.  For example, if you are using a font 
      which allows only 80 characters across a page but the report line 
      requires 132 characters, you could print the first eighty characters 
      of the line with an OFFSET=0 and print the report again with OFFSET=80 
      to pick up the last 52 characters of the report line.

      The ancestor/descendant/relative report program, when printing "fixed 
      format" reports, will print each individual's information on two lines 
      in the case that birth and death places are to be shown and the form 
      size is too narrow to put all information on a single line.  When 
      individual record ID's are also being printed, these may appear on a 
      2nd line if the form is too narrow to include the information on a 
      single line.



























                                     50

```
{% endraw %}

## SECTION6.DOC

{% raw %}
```



      VI. Validating System Maintained "Pointer" Information (F3-E)

      In order to permit you to place variable amounts of "miscellaneous" 
      information and comments about an individual in your family files 
      without requiring excessive amounts of space on your diskette or hard 
      disk, an individual's information is stored in many "records" distri-
      buted among 3 datasets (name, address and miscellaneous information).  
      All of these records are "drawn together" by a collection of system 
      maintained pointer fields.  You are no doubt familiar with some of 
      these fields: the mother and father ID numbers in the name record are 
      two, and the spouse ID in a marriage record is another.  There are 
      many others that you are not (and need not be) aware of.  In addition, 
      each record in the family file datasets has an identifier as to the 
      type of information stored in the record and the "source" of the 
      information (whether an address record is an individual or family 
      residence, for example).  It is important that the complete set of 
      "pointers" and record identifiers for those records relating to an 
      individual be valid and consistent.

      The first record of each family file dataset also has information that 
      helps the programs determine whether the datasets that you are using 
      "belong together".  This is to protect you from inadvertantly 
      attempting to enter information into, or produce reports using 
      datasets that are from two or more family files that you may be 
      working with at different times.  In the ".ADR" and ".OTH" datasets, 
      these "header records" also have some additional "hidden pointers" 
      that help the file update program keep track of deleted records. 

      There are several ways in which inconsistencies may be introduced into 
      this "hidden" collection of information.  Because updated file records 
      may remain in memory and not be written to disk until the files are 
      closed (or until you return to the Main Menu program from the file 
      update program) any interruption of an update session by prematurely 
      turning off your coumputer or by a power failure may result in 
      incomplete updates to the system information.  Errors in some versions 
      of the file update program are another (unfortunate) source of 
      inconsistencies in system pointers (for instance, at one time you 
      could enter the same ID number for mother and father, which would 
      introduce errors in the files).  

      The purpose of the program invoked by Main Menu option "F3-E" is to 
      detect and correct any errors in the system maintained "hidden" 
      information.  Upon entry to the program you will see that all three 
      datasets that make up your family file are used by the program.  You 
      also will see displayed some information about these datasets that is 
      not shown by other programs in the system; this includes the "date of 
      (most recent) update" for each dataset, the number of records in each 
      dataset, and the number of "free" records in the address and 
      Miscellaneous info datasets. ("Free" records are ones which have been 
      deleted by you using the file update program, thus permitting them to 
      be re-used the next time information is added to the dataset.)  These 
      dates and record counts are stored in the "header records" of each 
      dataset and are maintained by the file update program when you enter 
      or change information in the files.  As usual, program option "F1" of 
      the validation program may be used to respecify the names of datasets 


                                     51



      to be "validated".

      (NOTE: if a family file has been corrupted as a result of an 
      interrupted update session and a recent backup is available, it is 
      always preferrable to restore the file from the backup, since 
      correction using the validation program may result in some loss of 
      information.  If there have been many updates to the file since the 
      last backup or the file errors are also in the backup copy, then the 
      validation program can provide a "clean" file for you to continue your 
      work with minimal loss of data.)

      Option "F2" of the validation program is the one that does all the 
      work.  When you select it you will be asked whether error messages 
      should be sent to the screen or printer, whether you want the program 
      to make corrections to the files, and which name record ID number to 
      begin with.  

      If you get the message:  
                   "Unmatched Files...Do you want to Continue?"
      when you select the F2 option then the program has determined that the 
      "header record" of the ".ADR" or the ".OTH" dataset does not have the 
      same date or time of creation as the ".NAM" dataset does.  This may 
      happen as the result of a problem with previous versions of the file 
      update program in which the "date time stamps" in the header records 
      were not "synchronised" when the files were first CREATEd.  In very 
      early FHS versions, the programs didn't make use of these date and 
      time fields for determining whether files went together, so you may 
      not have had any problem until you updated your version of the 
      programs to one that DID check these values....If you are absolutely 
      certain that the files you are using DO belong together, you may reply 
      "Y" and the header records will be "synchronized" during the 
      validation procedure.

      Actually this validation procedure is divided into several phases.
      More will be said about what is done in each phase later but they may 
      be described briefly as follows:
         I. Validate information in Name records (this is by far the most 
            time consuming of the phases, taking perhaps 90% of the total 
            execution time); this is the only phase of checking performed if 
            you request to begin with an ID# other than 1;
        II. Check for broken "sibling" chains (determine children who are 
            not "listed" as a child of a recorded parent);
       III. Check Address dataset free record chain;
            Check for isolated or unreferenced address records;
        IV. Check Miscellaneous dataset free record chain;
            Check for isolated or unreferenced miscellaneous records;
            Check for "partially referenced" marriage records; 
         V. Synchronise date time stamps in "header" records if files are 
            "unmatched" and updates are being performed.

      The suggested procedure for using this program is:
         1. Backup your family file datasets.  If none of the datasets 
            exceed the capacity of the diskettes you use, the DOS COPY 
            command can be used to back them up, otherwise you will have to 
            use the DOS BACKUP command (or some equivalent utility) to back 


                                     52



            them up;
         2. Run option "F2" of this program with output going to the printer 
            and allowing the program to make file changes;
         3. Run option "F2" again with output going to the printer...all 
            program correctible errors should now be gone.
         4. Using the file update program (Main Menu option F1), review 
            information for individuals whose ID# appeared in any of the 
            error messages.  

      Some suggestions and comments concerning the use of this program:

         if possible, run this program with your family files located on a 
         RAM disk.  It will greatly reduce the time required for the run; 
         (incidentally, running the validation program against my files, 
         which contain information on about 1500 individuals, required about 
         55 minutes using a standard IBM-PC with all datasets on a single 
         floppy diskette using the interpreted version of the program; it 
         takes about 55 seconds running the compiled version off the hard 
         disk of an AT);

         a "progress report" is given when you tap the space bar while the 
         program is processing the name record file (phase "I" above); the 
         validation procedure can also be interrupted if you press the 
         ESCape key during this phase of operation.

      The remainder of this section gives more detailed descriptions of the 
      various phases of the validation process.  This information is 
      primarily for my own documentation so don't feel that you have to 
      understand it to make use of the program.


      Before discussing the phases in detail, let's first look at the type 
      of "identity" information stored in the "prefix" of each address and 
      misc info record.  Each record begins with a 1 character record type 
      as shown in the "RTYPE" table which follows.  (The record types were 
      changed in the December 1985 update of the system.  This program 
      recognises both the old and new record types, but changes all old 
      record types to the new type when updating the datasets.)  In 
      addition, the "header" record of each family file dataset has a 
      leading 1 character file type which is used to check that a dataset 
      used in one of the report programs has been properly initialized.  
      This "file type" is also shown in the following table.

       TYPE Table:           Old RTYPE            New RTYPE
                          CHAR      ASCII           ASCII
        Name record         1        049             001
        Address record      2        050             002
        Spouse Record       3        051             003
        Place Record        4        052             004
        Comments            F        070             005
        Education record    7        055             007
        Work record         8        056             008
        Military record     9        057             009
        Medical record      A        065             010
       


                                     53



        NAME dataset        N        078             078 (unchanged)
        ADDRESS dataset     A        065             065 (unchanged)
        MISC dataset        M        077             077 (unchanged)

      In addition, each address and misc info record contains the record 
      type and record number of the "source" record to which it is appended.  
      In the error messages produced by this program, the "source record 
      type" is labeled "SRTYPE" and the "source record number" is labeled 
      "SRNO".  (For example a "family" residence will have SRTYPE=3, the 
      record type of a spouse record.  A comment record attached to an 
      Education record will have SRTYPE=7.)  

      I. During "Phase I" of the validation process, each name record is 
         read successively  (beginning with the ID# specified by you at the 
         beginning) and the following checks are performed:

         1. Mother and Father ID
            a. must be between 0 and the highest ID# on record (invalid 
               parent ID's are set = 0); 
            b. if parent ID>0, sex of parent is checked and discrepancies 
               reported (father's sex should be "M", mother's sex should be 
               "F"); no corrections are made since the program cannot 
               determine whether the sex or the parent ID is in error;

         2. Sibling chain
            a. the name record for the oldest child is retrieved and parent 
               ID's checked to make sure that ID# of name record being 
               validated is either the father ID (FID) or mother ID (MID);
            b. younger children's records are retrieved and parent ID's are 
               similarly verified; (if the ID# of the name record being 
               validated is not found as a parent in a child's record, the 
               sibling chain is terminated);
            c. if a child's ID is encountered a second time while following 
               the sibling chain, the "loop" is noted and the sibling chain 
               is terminated;
            d. a note is made of each child correctly located on sibling 
               chain; this information will be used later for identifying 
               "broken" sibling chains;

         3. Birth/Death Place Record
            a. record number must be between 0 and max Misc Rec #;
            b. if record number>0 then record is retrieved and record type 
               and source record information is checked (see previous table 
               of record types and discussion of source record information);

         4. Comment Records for individual
            a. first comment record ID must be between 0 and max Misc rec#;
            b. if comment records are present, first comment record is 
               retrieved and record type and source record information 
               checked; total comment record count from first record is 
               saved; backward pointer should be 0;
            c. successive comment records are retrieved and record prefix 
               verified as for first record; backward pointer should point 
               to previous record;
            d. after last comment record is retrieved, total record count is 


                                     54



               compared to what had been stored in first comment record;
               (if record type or source record information is incorrect, 
               the comment chain is terminated; all other discrepancies are 
               corrected by the program);

         5. Address Records for individual
            a. first address record # must be between 0 and max addrs rec#;
            b. if address records are present, first address record is 
               retrieved and record type and source record information 
               checked; 
            c. successive address records are retrieved and record prefix 
               verified as for first record;
               (if record type is incorrect it is corrected; if source 
               record information is incorrect, the address chain is 
               terminated);
            d. address comment records are checked (as in 3.)

         6. Spouse information
            a. first spouse record # must be between 0 and max misc rec#;
            b. if spouse records are present; each spouse record is 
               retrieved and checked for valid record type and source record 
               information; 
            c. spouse ID's in the record are checked to see if one 
               corresponds to the name record being validated;
               (if record type or source record information is incorrect, or 
               ID# is not in spouse record, the spouse record chain is 
               terminated);
            d. if marriage place record is present for any of them, that 
               record is retrieved and record type and source record 
               information is checked;
            e. spouse comment records are checked (as in 3.)     
            f. spouse residence records are checked (as in 4.)

         7. Miscellaneous information
            a. first misc record # of each type must be between 0 and max 
               misc rec#;
            b. if misc information is present, first record is retrieved and 
               record type and source record information is checked;
               (if record type or source record information is incorrect the 
               chain is terminated for that type of misc info);
            c. misc info comment records are validated (as in 3.)
            d. misc info address information is validated (as in 4.)

      II. After all name records have been individually checked, the record 
         of all validated parent pointers is checked to see if any name 
         record was not located on a parent-child chain.  (Unverified parent 
         ID's are set =0 in the name record.)

      III. Records on free chain of Address dataset are checked to see if 
         they have been referenced during Phase "I".  Address records which 
         were unreferenced in Phase "I" and not on FREE record chain are 
         noted and added to FREE record chain.  Count of FREE records in the 
         address dataset header record is compared to the number of records 
         on the FREE chain.  A discrepancy is noted and corrected.



                                     55



      IV. Records on free chain of Miscellaneous Info dataset are checked to 
         see if they have been referenced during Phase "I".  Records in Misc 
         Info dataset which were unreferenced in Phase "I" and not on FREE 
         record chain are noted and added to FREE record chain.  Count of 
         FREE records in the misc info dataset header record is compared to 
         the number of records on the FREE chain.  A discrepancy is noted 
         and corrected.  

         While checking for unreferenced misc records, the number of 
         references (during Phase "I") to each spouse record is checked.  A 
         message is displayed if a spouse record was not referenced exactly 
         2 times.  This situation may be correct in the case that a marriage 
         record was created with a spouse ID=0.  This is permitted by the 
         system to allow for the (unlikely) case that a marriage date is 
         known but insufficient information about the spouse exists to 
         justify creating a name record (the spouse name is given as 
         "(Unknown)" in descendant and family group reports).  If both 
         spouse ID's are shown to be non-zero in the error line produced by 
         the program, then an incorrect situation does exist.  You must then 
         use the file update program (main menu option F1) to retrieve the 
         marriage record from the spouse ID that it is accessible from, 
         delete the marriage record, and then readd it.



































                                     56

```
{% endraw %}

## SECTION7.DOC

{% raw %}
```



      VII. Export\Import Utilities.

      Whenever you spend a great deal of time entering information into a 
      file on your PC, there are invariably instances when you would like to 
      be able to get to that information for processing by another program.  
      When the file is in a format that was designed especially for the 
      program used to originally create it, it may be very difficult or 
      impossible to use it with any other software.  At such times you may 
      get the feeling that your own information is being held "captive" 
      within the "non-standard" format file.

      To alleviate the anxiety of users, most software that employs special 
      formats for storing information will supply utility programs for 
      "converting" information into a more generatlly usable form.  The 
      process for converting information from a "special" format file to a 
      "standard" format file is called "EXPORT" while the term "IMPORT" 
      refers to a process of converting information from a "standard" format 
      file to a "special" (non-standard) format file.  

      This section describes two FHS programs that allow you to EXPORT 
      family file information into "text" files that can be used by other 
      software.  One of these utilities also supplies an IMPORT procedure 
      for moving (possibly large quantities of) information from a "text" 
      file into an FHS family file.  One of these programs uses the GEDCOM 
      (GEnealogical Data COMmunication) format for sharing information with 
      other genealogy software.  The other creates files that can be used 
      with a shareware organization chart utility for printing graphical 
      descendant charts.


      A. GEDCOM Export/Import Program (F3-D-1)

      The PAFGEDCM Export/Import program allows you to transfer information 
      between Family History System files and family files maintained by 
      other software packages that support the GEDCOM format.  The "Export" 
      option converts information from a FHS family file into an expanded 
      ASCII (or standard character) format and places it in a text file, 
      TRANSFER.GED.  Information in the text file can then be "Imported" 
      into a new empty set of family files, or may be appended to an 
      existing set of family files.  In the latter case, the system's file 
      maintenance program may then be used to establish relationships 
      between old and new individual records.  All family relationships 
      between transferred records are preserved across the export/import 
      procedure.

      The format of the transfer dataset is based upon the descriptions of 
      the format provided by the LDS Family History Department as imple-
      mented in the Personal Ancestor File (PAF) software, v2.0 and v2.1.  
      This format prescribes that each data item (Name, BirthDate, etc.) 
      appear on a separate line in the transfer dataset, with related items 
      being grouped by associated "level numbers" and each individual data 
      item labeled by a 3-4 character "Tag".  

      Actually, the GEDCOM formats introduced by PAF 2.0 and 2.1 have some 
      significant differences, both in the TAGs used and the methods for 


                                     57



      representing family and marriage relationships.  When this GEDCOM 
      option was first added to FHS, in Sept 88, only PAF 2.1 was actually 
      using the new format.  The other GEDCOM supporting packages were 
      designed to the PAF 2.0 specifications.  Since PAF 2.1 could handle 
      either format, there seemed to be no loss in generality by having the 
      FHS utility able to import either PAF 2.0 or 2.1 format GEDCOM files, 
      but export information using the 2.0 format.

      In the subsequent year and a half, many other genealogy packages added 
      GEDCOM utilities, but nearly all embraced the 2.1 format only.  
      Therefore, in the March 1990 update, the FHS utility was modified to 
      permit exporting or importing information using either GEDCOM 
      description.  The format used during an export operation is determined 
      from the SOURce and DEST items in the GEDCOM header record.  If the 
      SOURce is "PAF" or the DEST is "PAF 2.0", the GEDCOM file is processed 
      using the rules introduced with PAF 2.0.  Otherwise it will be 
      processed using the rules introduced with PAF 2.1 and continued with 
      PAF 2.2.  During an import operation you will be asked whether the 
      file being imported follows the rules for PAF 2.0 or PAF 2.1.

      1. Program Operation
         Upon entry to the Export/Import program you will notice that the 
         screen is formatted similarly to others in the system.  In the 
         upper left corner are listed the datasets that may participate in 
         the various program options.  These include the NAM and OTH data-
         sets from a family file, an index dataset (name records may be 
         exported in ID# sequence or in an indexed sequence), a SELECTion 
         dataset created by the system's Search/Select/LIST program or the 
         Family Group Report Program, and a new TRANSFER dataset.  The 
         identification of the datasets to be used may be changed using 
         program option F1 as usual.

         In the upper right corner of the display are the familiar printer 
         parameters.  These are used when the program option (F6) is 
         selected for printing the information in the TRANSFER dataset.  
         The printer parameters may be changed using program option F2.

         In the "viewing area" in the lower right corner of the screen are 
         listed the various types of information (by family file record 
         type) that may be transferred.  The number next to each record type 
         will be hilited or not depending on whether or not that type of 
         information is to be processed during the next selected import or 
         export procedure.  Although Name Records are always processed, you 
         may adjust the selection of other types of information using 
         program option F3.  (Note: this program will only process those FHS 
         record types that provide information that is found in the PAF 
         implementaton of GEDCOM.)

         The lower left part of the display lists the program options that 
         may be function key selected.  These include:
                      F1  Change File Names
                      F2  Change Printer Parameters
                      F3  Change Information Table
                      F4  Export Information to Transfer dataset
                      F5  Import Information from Transfer dataset


                                     58



                      F6  List Dataset of Exported Information
                      F9  Return to Main Menu

         Options F1,F2, & F9 have either been described above or should be 
         familiar from their similarity to options in other programs of the 
         system.  The other options will be described in the following 
         sections.

      2. Changing the Table of Types of Information to be Processed
         
         As described above, the lower right corner of the display has a 
         "viewing area" in which are listed the different types of 
         information that are stored in the Family History System datasets.  
         These include:   
                         0.Name Records
                         1.Places (Birth/Death/Marriage/Divorce Locations)
                         2.Spouse Records
                         3.Educational Records
                         4.Occupational Records
                         5.Military Records
                         6.Medical Records
                         7.Address Information
                and      8.Comment Lines          

         Program option "F3" permits you to indicate which of these types of 
         information are to participate in an import or export process.  A 
         reason for wanting to restrict the information transfered might be 
         that you want to exclude sensitive information among the remarks.

         When you select program option F3, the hilited border moves to the 
         lower right corner of the screen and the message:
               Enter 1,2 or 8 to Toggle Transfer of Information Type
         appears at the bottom of the screen.  If you press one of the 
         indicated number keys you will find that the corresponding 
         character in the list of information types will be alternately 
         hilited or displayed in normal intensity.  If the character is 
         hilited, it indicates that the information type is to be processed 
         during the next export or import procedure.  When you have hilited 
         just the items that you wish to process, press the Enter or Return 
         (or ESC) key to terminate the process and return to the selection 
         of another program option.

      3. Exporting Data from your Family file

         (NOTE: Prior to using the Export option, I would recommend that you 
         use the Validation option (F3-E) to verify that there are no 
         inconsistent relationships between the family file records that 
         could cause problems during the export procedure.  The export 
         procedure will also assume that husbands have a sex code of "M" and 
         that only one of the participants in a marriage is a "M"ale.)

         Selecting program option F4 initiates an export process in which 
         information is copied from your family files into the TRANSFER 
         dataset.  You will first be asked whether you want to:
             Export   1) ALL Records   2) SELECTed Records


                                     59



         If you choose to export selected records, you must have previously 
         used the system's Search/Select/LIST program (Main Menu option F2-E 
         of the extended system) or the Family Group Report Program to 
         create a "selection table" and save it in the SELECT dataset. 

         You will next be asked to:
               Select:  1)INDEXed    2)ID # Sequence
         that is, you must specify whether the exported individual name 
         records are to be in indexed order or in ID# sequence.  To export 
         in an indexed order, you must first have created the INDEX file 
         using Main Menu option F3-F of the extended system.  If you have 
         entered information from family group worksheets, then ID# sequence 
         would be the best choice to permit efficient processing of the 
         family files created from the Transfer dataset.  After indicating 
         the order of export, the program builds the "Sequence Reference 
         Table" that identifies which name records are to be processed and 
         in what order. 

         Next, the viewing area in the lower right corner of the screen is 
         cleared and formatted to permit entry of descriptive information 
         that will be stored in the transfer dataset's header record.  This 
         information includes the Name, Address & Phone number of the 
         "submitter", the source and destination system identifiers, and up 
         to 3 lines of comments.  If the SOURce system is "PAF" or the DEST 
         system is "PAF 2.0", the information will be exported in PAF 2.0 
         GEDCOM format, otherwise the rules for PAF 2.1 GEDCOM files will be 
         used.  You may choose not to enter anything in the header record 
         for datasets only used for local transfer of information.  Press 
         the F1 key when you are ready to continue with the export 
         procedure.  

         You will next be asked to:
                Enter Drive ID (A,B,C,...) for POINTER Workfile
         This workfile is a temporary dataset needed only for the duration 
         of the export operation to place information concerning the rela-
         tionships between records in the TRANSFER dataset.  It is needed 
         because of the differences in the ways records are connected in the 
         FHS family file and in the PAF GEDCOM file.  A RAM disk would be a 
         good place for this dataset if you have one available.

         The process of building the POINTER workfile is accompanied by the 
         sequential display of the messages:
             Building POINTER Workfile
             Reversing Direction of Sibling Pointers (only PAF 2.0 format)
             Finding Family Record of Parents
         If there are children in the file whose parents are not married, a 
         dummy marriage record will be created for the parents because 
         within PAF GEDCOM files parent-child relationships are established 
         through the marriage record of the parents.  In this case, at the 
         termination of the building of the pointer workfile, the message:
              xxx NEW Parent Family Records Created...
         will be displayed.  You must press a key to acknowledge the message 
         before the export process will continue.

         When the export process begins, the viewing area in the lower right 


                                     60



         corner of the screen will again be cleared and the list of Infor-
         mation to Transfer will be redisplayed.  As the export process 
         continues, the number of records exported of each type will be 
         shown next to the line describing the record type.  You will see 
         that family records are created only after all the name records 
         have been processed.

         Perhaps I should note that I have chosen to include a few "non-
         standard" data items to allow for information that seemed too sig-
         nificant to omit.  In particular, an adoptive parent relationship 
         will be noted by tags of ADFA (for ADoptive FAther) or ADMO (for 
         ADoptive MOther), and comments under a marriage record will be 
         exported as NOTEs under the GEDCOM family record...Although indi-
         vidual record ID's in the GEDCOM file are numbered sequentially, 
         beginning with I1, the original ID # of the source record in the 
         FHS file is given as an RFN tag (in PAF 2.0 format) or a REFN tag 
         (in PAF 2.1 format) under the INDI record.
         
         The export procedure may be terminated at any time by pressing the 
         ESCape key, though a partially created transfer dataset should not 
         be used in a subsequent import procedure.

         When the process is finished, the message:
                     Export finished at hh:mm:ss...
         will be displayed at the bottom of the screen.  Pressing any key 
         will "clean up" the display and allow you to select another program 
         option.

      4. Importing Information into your Family Files

         The process of moving information from a TRANSFER dataset into an 
         existing set of family datasets is begun by selecting program 
         option "F5".  The family datasets being used must have been 
         previously "created" using the system's file maintenance program 
         but may be otherwise empty.

         At the beginning of the import procedure, the program opens the 
         family file datasets and checks to see that all "header" infor-
         mation is valid (indicating that the file has been "created") and 
         consistent (i.e. the Name and Misc datasets "match"). 

         If name records have been previously placed in the family file, the 
         program displays the message:
               "Imported Name Records will begin with ID=nnn..."
         All imported information will be placed after existing information 
         in the family file.  You may later use the file maintenance program 
         to establish relationships between old and new name records.  If 
         you had intended to import the information into an "empty" file but 
         forgot to change the names of the family datasets before beginning 
         the import procedure, you may terminate the process now by pressing 
         the ESCape key.  Pressing any other key will permit the process to 
         continue.

         The program must keep a table of name and marriage records created 
         so that it may subsequently go back and update the internal 


                                     61



         "pointers" to these records.  Therefore, you will be asked to:
               "Enter Maximum for Name Record ID in Transfer File: 1000"
           and "Enter Maximum for Family Record ID in Transfer File: 1000"
         The number entered (1000 is the default) tells the program how big 
         the table needs to be to hold this information.  The program will 
         not import records that would cause it to exceed the capacity of 
         this table.  The numbers entered don't necessarily indicate how 
         many name or marriage records are to be imported, but rather the 
         highest value that is used for an ID of a name or marriage record 
         in the TRANSFER file that is being imported.  

         You will next be asked if you want to:
               "Print Unprocessed Data Lines (Y/N)"
         Although you will be shown a "running total" of the number of 
         incoming data lines in the TRANSFER dataset that have not been 
         processed (either because you have requested not to process the 
         type of information recorded on those lines, or because the program 
         doesn't recognise the type of information on the line) and these 
         unprocessed lines will also be displayed on the bottom line of the 
         screen, you may also request that the program write a copy of the 
         bypassed lines (together with the value of the most recent Name 
         record "identifier") to an attached printer.  If you respond "Y" or 
         "y" to this question you must have a printer available and made 
         ready to receive output.

         You will also be asked whether you want to:
                  Import Long PLACE Names into Notes? (Y/N)
         If you respond with a "Y" then birth, death or marriage place names 
         which exceed the FHS limit of 22 characters will be placed in the 
         COMMENTs under the name or marriage record, and the literal "see 
         Notes" will be stored in the PLACE field in the file.  If you reply 
         "N" then long place names will be truncated to 22 characters, but 
         the incoming line will also be listed among the "unprocessed" data 
         lines to call attention to the fact.

         If there is Baptismal or Burial information in the transfer dataset 
         then it will also be imported into comment records under the 
         individual's NAME Record.  

         The program next reads the transfer dataset for header information.  
         If no header information is found a message is displayed and you 
         are asked whether to continue or not.  Otherwise the viewing area 
         in the lower right corner of the screen is formatted to display the 
         header information and you are asked whether to:
                          "Continue with Import...(Y/N)"

         If you choose to continue, the list of types of information that 
         can be imported is redisplayed, followed by another line for 
         "unprocessed data lines".  During the input procedure a running 
         total is displayed of each of these data types next to the line 
         describing it.

         Near the end of the import procedure, you will see the message: 
                 "Updating Family Record Pointers"
         which lets you know that the program is updating the internal 


                                     62



         spouse record pointers from the table previously mentioned.  
         Following this, the message:
                 "Updating Other Family & Sibling Pointers"
            and  "Final Cleanup"
         document the beginning of other cleanup phases.

         At the end of the import procedure the message:
                  "Import Finished at hh:mm:ss..."
         is displayed.  Pressing any key will result in the display's being 
         "cleaned up" and the program will be ready to process another 
         option.  I would recommend that following the completion of each 
         import procedure, you run the system's pointer validation option 
         (Main Menu option F3-E) against the updated file to verify that all 
         relationships between records in the TRANSFER dataset are 
         consistent.  

      5. Producing Listings of GEDCOM format exported data

         Program option F6 may be used to produce listings of the contents 
         of the TRANSFER dataset.  You may route the output to the screen, 
         for verification of an export procedure or examination of a 
         TRANSFER dataset prior to import, or to the printer.  As usual, the 
         printing may be "paused" by pressing any key, and then may be 
         terminated (by pressing the ESCape key) or continued (by pressing 
         any other key).  Thse listings will be in "outline" format with 
         each data item offset according to its "level number".


      B. ORGCHART Export Program (F3-D-2)

         Late in 1988 I ran across a shareware program which produced rather 
         nice organization charts in "inverted tree" format.  The data used 
         to produce the charts is taken from a simple text file, created by 
         a text editor or word processor (in non-document mode).  Because 
         the charts were in a format that appeared useful for representing 
         family descendancy, I wrote a little program for "Exporting" 
         information for descendants in an FHS family file to an ORG format 
         text file that could be used for printing such a descendant chart. 
         That is the program invoked by Main Menu option F3-D-2.

         While the procedure had some short-comings, I felt that it may 
         prove useful for some among you.  Of course you must have a copy of 
         the ORGCHART program to produce the charts, and if you decide to 
         add this to your "genealogy toolkit", it will be necessary for you 
         to send a ($20.00) registration fee to its author.  While the 
         program is available from public software libraries (in particular, 
         "The Public (Software) Library" in Houston Texas, you should also 
         be able to order copies from the author:
             Jerming Lee, P.O. Box 102, Chappaqua, NY  10514-0102

         The operation of the "ORGCHART Export program" is similar to other 
         programs in the system.  You must have first created a descendant 
         "relationship" work file, DESCNDNT.WRK, using Main Menu option F2-
         A-2.  You may then use option F3 of this program to export 
         information from your FHS family file, using the DESCNDNT.WRK file 


                                     63



         as a guide, into the ORGCHART file.


         When you select program option F3, you will be asked to:
             Select Name Format:  1) SURNAME, Given   2) Given Surname
         The first option will result in the name appearing on 2 lines 
         within the "information box" on the chart, with the surname, in 
         CAPS, centered on the first line and the Given name centered below 
         it.  If the second option is chosen, the name will appear in a 
         single line of the box.  The first option may result in slightly 
         more compact charts.

         You will also be asked if you wish to:
              Include BIRTH/DEATH Dates? (Y/N)
         If you include dates, they will appear centered below the name in 
         the format:    14 Oct 1884-12 Nov 1969

         You will have the option to:
               Include NAME of Most Recent Spouse?  (Y/N)
         and if you you choose this and have also chosen the first form for 
         the Name, you will be asked if you wish to:
               Substitute Husband's Surname for WIFE's (Y/N)
         Choosing "Y" for this option may produce slightly more compact 
         charts.  If you do substitute the husband's surname for the wife, 
         and the wife is the "subject" of the box of information, then an 
         "*" will appear to the right of the SURNAME at the top of the box, 
         to note that it is the married surname and not the surname at 
         birth.

         After the creation of the ORG workfile is complete, you may choose 
         to use option F8 (if you have DOS 3.3 or later) to temporarily go 
         into DOS mode for running the ORGCHART program.  After completing 
         your work there, you can return to FHS by entering the EXIT 
         command.  You should be aware that the ORGCHART program is 
         completely separate from FHS.  It does not use the FHS printer 
         or screen tables and any questions about it should be directed to 
         that program's author.


         While the charts that can be produced in this manner are somewhat 
         limited and there is no effort to denote "crossed" lines of 
         descendancy, a few persons who have tried preliminary versions of 
         this program have expressed satisfaction with the results.  Perhaps 
         you will find them pleasing as well.













                                     64

```
{% endraw %}

## VERSIONS.DOC

{% raw %}
```
                      List of Changes in versions of
                           Family History System

The following list indicates the changes incorporated in the various versions
of the basic Family History System.  The version is identified by the date
that appears on the title screen for the system.  Some versions were distri-
buted only to registered users who had reported problems.  All changes are
cumulative in later versions.

  February 1985  - first version released for general use
  March    1985  - corrected error in ancestor chart program when producing
                   charts for an individual with related ancestors;
  May 7,   1985  - corrected loop that occurred when attempting to select
                   an individual from empty search or child list;
  May      1985  - corrected GWBASIC syntax error in descendant report program;
                   changed report programs to permit giving 1-5 character file
                   specification as the `printer' destination;
                   changed default screen attributes for graphics adapter to
                   avoid `colors' that do not show up on TANDY monochrome
                   monitor;
  June     1985  - changed report programs to allow for versions of Basic that
                   do not erase line 25 when the screen is cleared.
  September 1985 - Added Status fields for Birth/Death dates and Mother/Father
                   ID numbers.  Recognise adoptive relationships.
                   Added page numbers to descendant report.
                   Corrected error in report programs when "Forms Offset">0
                   Added orientation/installation procedure (GO.BAT).
                   Distribution diskette changed to 9 sector format.
                   DOS 2.0 or later required for using distribution diskette.
  October 7, 1985- Corrected "pointer" update error when deleting first line
                   of comments display.  Corrected un-cleared "?" characters
                   in "Birth Date" field of ancestor charts.
  October 23, 1985 corrected errors when adding/deleting "other" data records
                   in file update program.
  November 1985    Minor changes/corrections to Manual; correct error (loss of
                   free record chain) when ESCaping from the addition of
                   address or "other" type information; correct errors in
                   family group and descendant reports when marriage record
                   exists but spouse is not known (spouse ID=0).
  December 1985    added checks in report programs to assure that all files
                   used "match"; corrected problem with non-appearing cursor
                   on Tandy 1000; removed "undocumented" program FAMLIST.BAS;
                   changed all programs to recognise cursor control keys on
                   Tandy 2000; added "margin" to printer parms of report
                   programs to allow "centering" report on page;
                   corrected error when updating mother ID status field;
  (after Dec 5 -   added options to print descendant reports grouped by
                   generation or families, and when grouped by families may
                   be in a "chart" format.
  December 9, 1985 Updated Section 5 of manual (descendant report description;
                   use of printer destination to route report output to
                   dataset); added line numbers to descendant report (in
                   margins when MARGIN>=3).
  (after Dec 17 -  corrected missing spouse death date, spouse mother dates
                   in family group report.
         Dec 19 -  corrected update of "offset" parm in family group prog.)

                   (First set of enhancements available for registered users.
                   Enter: A>GO REGISTER          for more information.)

 December 25, 1985 corrected error when producing descendant list for
                   married individual with no children when margin=0
  January 1986  -  corrected problem with "lost descendants" in descendant
                   report program when using GWBASIC; update Appendix A.
  January 9, 1986  changed ancestor chart program to correctly process death
                   date status field.
  February 8, 1986 Changed Chart program to place info about latest spouse
                   of entry #1 in lower left corner; added line indicating
                   which previous chart is being continued. Changed install
                   procedure for hard disk (requires BASIC language files to
                   be in main directory of the hard disk).
  February 1986    Corrected problem when formatting invalid dates.
  March 1986       Added Main Menu option F8 for executing DOS commands;
                   (Search/Select/LIST program available for registered users)
  May 1986         Added primary menu option F5 (weekday routine) to file
                   maintenance program; changed FAMFILES, FAMSCRNA, FAMPRNTC
                   to require diskette with FAMILY.DAT in default drive;
                   Changed FAMSCRNA to check for invalid attributes and
                   allow changing the error tone;
                   compiled version of programs now available;
                   (Export/Import option available for registered users.)
  June 1986        Allow printing ID #'s in family grouped descendant report;
                   Recognise delimiter (decimal '255') in printer table
                   entries to truncate trailing zeroes; option for creating
                   (MailMerge format address file for registered users.)
  Sept 1986        Added Relative Report; May include Comments in Ancestor,
                   Descendant & Relative reports; Allow ESCape from update
                   of Spouse ID & marriage status; corrected CLEAR option of
                   search options in file maintenance program.
  after Sept 27    corrected problems in ancestor chart program: truncated
                   chart ID's, missing name in header if chart 0-1 not printed
  December 1986    Family Group Report program changed to allow report to
                   include all information on file for an individual; report
                   programs changed to allow for printers that don't recognise
                   a form feed control; GENESIS files moved to diskette with
                   compiled programs.
  January 1987     Adds character insert mode when editing comments; corrects
                   some errors.  Add IBM ProPrinter, HP Laserjet+ to select-
                   able printers.
  February 1987    Add "Surname...Use:" field to name record for use with
                   indexed files/reports in extended system.
  March 1987       Add "Marriage PLACE" field to file definition and most
                   reports; put marriage date & place fields in entries for
                   male ancestors on ancestor chart; add "Date Produced" to
                   ancestor chart
  May 14, 1987     Added POPUPS directory with DATECALC & TIMECALC utilities.
  June 6, 1987     Corrected error in spouse of entry #1 on ancestor chart
                   when ancestor in entry #1 appeared in earlier chart entry;
                   Changed report programs to check for FAMILY.DAT on program
                   diskette before attempting to change printer SETUP.
  (after June 10   Corrected inconsistency in DATECALC routine)
  (after June 25   added prompt for ending update of spouse status info.)
  (after July 18   Corrected error in FAMGROUP program-extraneous comments
                   in empty spouse record area)
  October 1987     Added options for "batch" printing of family group reports;
                   added Merged Family Group Report; use death dates of
                   spouses to determine # years married; DATECALC can now
                   convert between old and new "style" dates; corrected error
                   in printing spouse of entry #1 on ancestor chart
  (after Nov 6     Added Mother & Father ID's in parent view; corrected
                   missing underscores in marriage term place of family group
                   report change all programs to run FAMINIT if COMMON
                   variables haven't been initialized.)
  (after Jan 4     Make corrections to bypass logic for batch printing of
                   family group reports)
  (after Jan 12    Change Chart program to always place marriage place on
                   chart; move chart entries #9,11,13,15 down one line)
  (after Jan 15    Add #children for each child in family group report)
  (after Mar 26    Corrected error in file update program when deleting
                   marriage records having information in place fields
  September 1988 - Added PAF GEDCOM Export/Import Program
                   Moved FAMVALID to public version of system
                   Added ALLGEN Ancestor Map option to FAMCHART
                   Corrected FAMRELAT, FAMCHART to handle>26 generations
                   (up to 53); Allow dates to be entered in DD.MM.YYYY or
                   YYYY MM DD formats; Add "FILE" as option for report
                   destination; Add options for pausing at the top of page;
                   Allow isolating comments within braces for optional
                   printing; Add F3 key for restoring field data when
                   entering Name records; Add printer setups for Epson LQ850
                   and Star NX 1000; Add alternate Color table using light
                   background (ALT+F6); Change Warning msg when file is
                   being Re-CREATEd; Allow starting print of relationship
                   reports and merged group reports at page>1; Use Free Form
                   address format in merged group report; allow use of
                   relationship work file for selecting group reports to
                   print; allow to save group report selection list in
                   SELECT work file; allow to print line with relationship
                   and lineage of subject of group report; removed WEEKDAY
                   option from file update program (replaced by DATECALC);
                   add BROWSE.COM for viewing manual
  (after Oct 25    correct error in famgroup program...wouldn't print blank
                   group report first time it was tried
  (after 1/11/89   correct errors in: FAMINIT (if file names not saved in
                   FAMILY.DAT then not able to print relationship in group
                   reports); FAMFILES (escape from table update left msg
                   at bottom of screen); and FAMGROUP (erroneous relationship
                   when printing single report; "illegal function call" error
                   when formatting bloodline with adoptive relationship)
  (after 1/14/89   corrected errors in PAFGEDCM: problems importing PAF 2.1
                   format GEDCOM files when name record numbers are not in
                   sequence, 1,2,3,...; burial, christening dates truncated;
                   long death, marriage places not NOTEd correctly
  March 1990       Added "free format" ancestor/descendant/relative and
                   family group reports; added menus for report options;
                   optional name formats; allowed to set beginning page
                   number of reports; revised Main Menu screen; allowed
                   to set default format for date entry; create REFERENCE
                   work file in report programs; print up to 9 blank group
                   sheets at one time; GEDCOM program exports and imports
                   either PAF 2.0 or PAF 2.1 format files; added export
                   to ORGCHART file; validation program will reset mis-
                   matched header records; added ROYAL sample file;
                   restored GENESIS sample file;

                   Basic set of programs expanded to 3 diskettes.

  (after 4/26/90   Corrected problems:
                    FAMINIT "locked up" after saving change to date format;
                    PAFGEDCM processed dates incorrectly in 2.1 format;
   after 4/30/90    FAMCHART didn't process request for showing ID #'s or
                     lineage numbers in 4 gen charts;
   after 5/2/90     PAFGEDCM will not produce DEAT DATE tag if year=9999;
                    DATECALC corrected handling of computing DATE2 when
                    DIF is in years, months and days (e.g. 31 MAY + or -
                    1 month);
   after 5/07/90    Corrected problem that some people had updating form
                    size in Main Menu option F3-C;
   after 5/21/90    Corrected problems printing spouse information in
                    free form descendant/relative reports;

  July 1990        Added FAMDESCH program for printing Descendant Charts;
                   GENESIS and ROYAL family files compressed with PKZIP;

If you would like a printed copy of this document, Enter:  GO PRINT VERSIONS
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0361

     Volume in drive A has no label
     Directory of A:\

    FHSDISK  B1        104   3-27-90   8:13p
    README            1071   3-27-90   9:35p
    GO       BAT      1733   7-09-90  11:30p
    INTRO    DOC      1207   7-09-90   9:59p
    COPYRITE DOC      1070   3-27-90   9:37p
    OPTIONS  DOC      1057   4-02-90   7:12p
    CONTENTS DOC      3446   7-09-90  10:07p
    VERSIONS DOC     13202   7-09-90  10:12p
    MANUAL   DOC      1265   7-16-90  10:14p
    BROWSE   DOC       856   9-28-88   8:22p
    PRINT    DOC       643   3-27-90  10:13p
    REGISTER DOC      3788   7-09-90  10:16p
    REGFORM  DOC      2791   7-14-90   8:43p
    INSTALL  DOC      5615   7-14-90   8:08p
    INSTALL  BAT      2787   7-14-90   8:06p
    HDINSTAL BAT      1017   7-14-90   7:51p
    FDINSTAL BAT      3157   7-14-90   7:06p
    BROWSE   COM       958   1-02-86   3:54a
    SECTION1 DOC     13956   7-08-90  10:33p
    SECTION2 DOC     43369   7-08-90  10:34p
    SECTION3 DOC     31742   7-08-90  10:34p
    SECTION4 DOC     10396   7-08-90  10:35p
    SECTION5 DOC     70435   7-08-90  10:36p
    SECTION6 DOC     18682   7-08-90  10:36p
    SECTION7 DOC     26178   7-08-90  10:39p
    APENDIXA DOC      4276   7-08-90  10:39p
    APENDIXB DOC      8744   7-08-90  10:39p
    APENDIXC DOC      4682   7-08-90  10:40p
    APENDIXD DOC     16093   7-08-90  10:40p
    APENDIXE DOC      3223   7-08-90  10:40p
    APENDIXF DOC     15247   7-08-90  10:41p
    SAMPLE   DOC      2591   7-09-90  11:06p
    FILE0361 TXT      2443   9-10-90   8:32a
           33 file(s)     317824 bytes
                           27648 bytes free
