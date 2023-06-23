---
layout: page
title: "PC-SIG Diskette Library (Disk #1313)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1313/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1313"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMPUTER DARKROOM AND PRO LIBRARIAN"

    For those who develop their own pictures, calculating exposure times
    that are dependent on many factors can involve tedious (and expensive)
    guesswork.  COMPUTER DARKROOM calculates new settings for you quickly
    and accurately.
    
    Once you have one acceptable exposure with test prints, this program
    gives you the proper exposure times for any changes you decide to make
    in paper speed, contrast, magnification, or filter factors for all black
    and white prints, color prints, or color slides for f/stop values from
    f/2 to f/32.
    
    PROFESSIONAL LIBRARIAN is an information-retrieval system for storing
    citations of articles and books in your own library.
    
    Add, delete, edit, sort, and search citations in your database.  Each
    record includes the author, date, title, citation, number, four subject
    categories, and a short description.  A listing of the database can be
    output to the screen, a file, or the printer.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CDR.TXT

{% raw %}
```









           
           
           
           
           
           
           
           
           
           
           
           
           
           
                            C O M P U T E R  D A R K R O O M 
           
           
                                       Version 1.0
           
           
           
                             R E F E R E N C E  M A N U A L
           
           
           
           
           
           
           
           
           
           
           
           
           
           
                                   Benjamin M. Kacenas
                                    1414 Moorgate Dr.
                                   Knoxville, TN 37922
           
           
           
                           Copyright (c) 1988 Benjamin Kacenas
                                   All Rights Reserved
           
          
           
           
          COMPUTER DARKROOM 1.0





           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
           
          This manual has  been  revised  to  reflect  the current state of
          COMPUTER DARKROOM as of version 1.0.
           
          The specifications contained herein are subject to change without
          notice.
           
          This document is Copyright (c) 1988, Benjamin Kacenas.
           
          The computer systems mentioned  in  the  manual are trademarks of
          specific hardware manufacturers.
           
          Printed in the United States of America.
           







          
                                            i
          
           
           
          COMPUTER DARKROOM 1.0





           
           
                                     USAGE AGREEMENT
           
           
          All versions of COMPUTER DARKROOM, including version 1.0, are not
          public domain software, nor are they free software.
           
          COMPUTER DARKROOM is Copyright (c) 1988; by Benjamin M. Kacenas.
           
          This  software  may  be   copied   or  transmitted  free  without
          restriction for evaluation purposes  but  not sold or modified in
          any way. A charge of no  greater  then $10.00 my be requested for
          copies of this program to cover  the labor and media required for
          this purpose.
           
          No user may modify  COMPUTER  DARKROOM  in any way, including but
          not limited to  decompiling,  disassembling  or otherwise reverse
          engineering the program.
           





























          
                                           ii
          
           
           
          COMPUTER DARKROOM 1.0





           
           
                                         WARRANTY
           
           
          The author makes no  warranty  of  any  kind, express or implied,
          including without limitations,  any warranties of merchantability
          and/or fitness for a particular  purpose. The author shall not be
          liable for  any  damages,  whether  direct,  indirect, special or
          consequential arising from a  failure  of this program to operate
          in the manner desired by the user. The author shall not be liable
          for any damage to data  or  property which may be caused directly
          or indirectly by use of this program.
           
           
          *****************************************************************
           
          In no event  will  the  author  be  liable  to  the  user for any
          damages,  including  any  lost  profits,  lost  savings  or other
          incidental or consequential  damages  arising  out  of the use or
          inability to use  the  program,  or  for  any  claim by any other
          party.
           
          *****************************************************************

























          
                                           iii
          
           
           
          COMPUTER DARKROOM 1.0





                                     C O N T E N T S
           
           
          USAGE AGREEMENT . . . . . . . . . . . . . . . . . . . . . . . ii
           
          WARRANTY  . . . . . . . . . . . . . . . . . . . . . . . . . . iii
           
          1.0 INTRODUCTION  . . . . . . . . . . . . . . . . . . . . . . 1
           
          2.0 GENERAL OPERATION . . . . . . . . . . . . . . . . . . . . 2
           
          3.0 BLACK AND WHITE PRINTING  . . . . . . . . . . . . . . . . 4
                   3.1 Negative Identification: . . . . . . . . . . . . 4
                   3.2 Date:  . . . . . . . . . . . . . . . . . . . . . 4
                   3.3 Paper Type:  . . . . . . . . . . . . . . . . . . 5
                   3.4 Exposure Time: . . . . . . . . . . . . . . . . . 5
                   3.5 Lens Opening:  . . . . . . . . . . . . . . . . . 6
                   3.6 Negative Size: . . . . . . . . . . . . . . . . . 6
                   3.7 Projection Size: . . . . . . . . . . . . . . . . 6
                   3.8 Magnification Factor:  . . . . . . . . . . . . . 7
                   3.9 Print This Specification:  . . . . . . . . . . . 7
                   3.10 Return To Main Menu:  . . . . . . . . . . . . . 7
                   3.11 Clear The Screen: . . . . . . . . . . . . . . . 8
           
          4.0 COLOR NEGATIVE PRINTING . . . . . . . . . . . . . . . . . 9
                   4.1 Negative Identification: . . . . . . . . . . . . 9
                   4.2 Date:  . . . . . . . . . . . . . . . . . . . . . 9
                   4.3 Exposure Time: . . . . . . . . . . . . . . . . . 9
                   4.4 Lens Opening:  . . . . . . . . . . . . . . . . . 9
                   4.5 Negative Size: . . . . . . . . . . . . . . . . . 10
                   4.6 Projection Size: . . . . . . . . . . . . . . . . 10
                   4.7 Magnification Factor:  . . . . . . . . . . . . . 10
                   4.8 Enter Starting Filter Pack:  . . . . . . . . . . 10
                   4.9 Modify Filter Pack:  . . . . . . . . . . . . . . 11
                   4.10 Print This Specification: . . . . . . . . . . . 11
                   4.11 Clear The Screen: . . . . . . . . . . . . . . . 11
                   4.12 Return to Main Menu:  . . . . . . . . . . . . . 11
           
          5.0 COLOR SLIDE PRINTING  . . . . . . . . . . . . . . . . . . 12
                   5.1 Slide Identification:  . . . . . . . . . . . . . 12
                   5.2 Date:  . . . . . . . . . . . . . . . . . . . . . 12
                   5.3 Exposure Time: . . . . . . . . . . . . . . . . . 12
                   5.4 Lens Opening:  . . . . . . . . . . . . . . . . . 12
                   5.5 Slide Size:  . . . . . . . . . . . . . . . . . . 13
                   5.6 Projection Size: . . . . . . . . . . . . . . . . 13




          
                                           iv
          
           
           
          COMPUTER DARKROOM 1.0





                   5.7 Magnification Factor:  . . . . . . . . . . . . . 13
                   5.8 Enter Starting Filter Pack:  . . . . . . . . . . 13
                   5.9 Modify Filter Pack:  . . . . . . . . . . . . . . 13
                   5.10 Print This Specification: . . . . . . . . . . . 13
                   5.11 Clear Screen: . . . . . . . . . . . . . . . . . 14
                   5.12 Return to Main Menu:  . . . . . . . . . . . . . 14
           
          6.0 THE SHAREWARE CONCEPT . . . . . . . . . . . . . . . . . . 15
           
          7.0 ORDER FORM: . . . . . . . . . . . . . . . . . . . . . . . 15







































          
                                            v
          
           
           
          COMPUTER DARKROOM 1.0





          1.0 INTRODUCTION
           
                   The  program  COMPUTER  DARKROOM  was  written  for  the
          purpose of reducing the  work  involved in determining the proper
          exposure for photographic  printing.  Three forms of photographic
          printing  are  addressed  in  three  major  functions  within the
          program. The first major  function  is  used  for the printing of
          black and white negatives using many forms of photographic paper.
          The second major function covers  the printing of color negatives
          onto color reversal media. The  third  and last major function is
          provided for those who  deal  with  the  printing of color slides
          onto Ilford Cibachrome material.
           
                   The features  that are  found  in  the  program COMPUTER
          DARKROOM are listed below.
           
          * Computation of exposure times  based  on the speed of seventeen
          popular black and white printing papers.
           
          * Computation of exposure times  based  on the contrast grades of
          black and white  printing  papers  and  filter factors when using
          variable contrast papers.
           
          * Computation of exposure  times  based on magnification ratio of
          black and white or color printing media.
           
          * Continues display of  exposure  times  for f/stops ranging from
          f/2 to f/32.
           
          * Computation of exposure times  based on color correcting filter
          factors for color printing.
           
          * Print out of  specifications  for  reproduction of a previously
          printed slide or negative.
           














          
                                         page 1
          
           
           
          COMPUTER DARKROOM 1.0





           
          2.0 GENERAL OPERATION
           
                   After the program is  loaded,  with the command from the
          operating system prompt "cdr",  the  main menu is displayed. This
          menu  allows  four  options.  BLACK  AND  WHITE  PRINTING,  COLOR
          NEGATIVE  PRINTING,  COLOR  SLIDE  PRINTING,  and  RETURN  TO DOS
          SYSTEM. The  up  and  down  arrows  found  on  the  keyboard will
          sequence through these options. When  the major function that you
          require is high-lighted or in a different color press the "ENTER"
          key. This will transfer operation over to this function.
           
                   The basic procedure  for  using  COMPUTER DARKROOM is as
          follows. When you have made  an  acceptable print or know what is
          needed to reach an acceptable  print,  by a test print operation,
          this information is input  to  the  program and it will calculate
          the proper exposure for  the  modifications  that you will enter.
          Once you have reached what you  feel  is close to the final print
          the specifications  can  be  entered.  Once  the  program has the
          starting point for exposure it will calculate the new exposure to
          compensate  for   changes   in   paper   type,   contrast  grade,
          magnification and color filter density. The calculations for each
          major function  will  automatically  compensate  for reciprocity-
          failure for the specific media and paper type.
           
                   As an example for the function Black and White Printing.
          Suppose  that  you  have  completed  a  test  print  using  Kodak
          Kodabromide contrast grade 3  paper  at  f/8  and  20 sec. with a
          magnification factor of 8.  The  program,  once it has been given
          this information, will display the exposure times for all f/stops
          from 2 to 32.  Now  you  wish  to  print  this same negative at a
          magnification factor of 11 on  Ilford  Multigrade II paper with a
          Kodak Polycontrast filter  of  2  1/2.  When  you enter these new
          specifications into the program all  the new exposure values will
          be calculated and displayed.
           
                   As an example for the functions Color Negative and Color
          Slide Printing. Suppose that you  have  achieved a test print but
          the color balance is not quite what you need. You would enter the
          information that you have for the test print as a starting point.
          Now you have determined  that  an  extra  Magenta filter of 10 is
          needed. When this  information  is  entered  into the program all
          exposure times will be calculated  for this modified filter pack.
          This  function  will  also  calculate  exposure  times  based  on
          magnification changes.




          
                                         page 2
          
           
           
          COMPUTER DARKROOM 1.0





                   The term  magnification  factor  when  used for COMPUTER
          DARKROOM refers to the ratio of the short side of the negative or
          slide in relation to the short  side of the projected image. This
          information can be given to the program in two ways. The first is
          to enter the magnification factor  directly using the three major
          function  specification  input  procedures  described  later. The
          second method is to enter  the  dimensions  of the short sides of
          the negative or slide  and  the  projected  image measured on the
          enlarger  baseboard.  When  these   dimensions  are  entered  the
          magnification  factor  will   be   calculated  automatically  and
          displayed.  If  the   dimensions   have   been  entered  and  the
          magnification  factor  is   modified   the  new  projected  image
          dimension will be  calculated  and  displayed  by the program. It
          should be noted that this  magnification factor does not have any
          relationship to the  print  size  because  the  dimension that is
          required or calculated is  not  the  short  side dimension of the
          print but rather the short side dimension of the projected image.
           
                   Each  major  function  and  it's  capabilities  will  be
          discussed in detail in the following sections.





























          
                                         page 3
          
           
           
          COMPUTER DARKROOM 1.0





           
          3.0 BLACK AND WHITE PRINTING
           
                   This function performs most of the exposure calculations
          that are necessary when  printing  from black and white negatives
          onto black and white printing papers.
           
                   When you first enter  this  function you will notice the
          screen will display the  various  specifications that you will be
          required to give the  program.  These  are  numbered from 1 to 12
          along the left side of the  display. You will also notice that on
          the right of the  screen  is  an  area called Exposure Time. This
          area is where the  program  displays the calculated exposure time
          for f/stop from f/2 to f/32. At this time all values are set to 0
          because the program has not  been given the information necessary
          to do any exposure calculations. At the very bottom of the screen
          are the instruction  lines.  This  area  is  provided to help you
          understand each step  as  you  progress through the specification
          input portion of the use of COMPUTER DARKROOM.
           
          3.1 Negative Identification:
           
                   Specification  1.  is  labeled  Negative Identification.
          When 1. is selected and  "ENTER"  is pressed the instruction line
          will ask for the  identification  for  this negative. If you have
          cataloged your negatives or have them in some order that each can
          be separately identified you may  type  this in and press return.
          Up to 20 characters may be entered and any displayable characters
          may be used. When you  have  completed this input the screen will
          display this identifier at the appropriate location.
           
                   This specification may be changed at any time or omitted
          completely with  out  affecting  the  ability  of  the program to
          perform it's calculations.
           
          3.2 Date:
           
                   Specification 2. is labeled Date.  As you can see, there
          is a date displayed already. The program has asked the system for
          the current date and  used  this response for this specification.
          If your computer has  the  current  date available from a battery
          backed up clock calender or you  have entered the current date at
          power up time this will be  correct.  If this date is not correct
          then you can enter the  proper  date by selecting 2. and pressing
          "ENTER". The program will  ask  for  the  month,  day and year in




          
                                         page 4
          
           
           
          COMPUTER DARKROOM 1.0





          sequence. Each entry is tested except the year to insure that the
          month and day are legal. Month  can  be  from 1 to 12 and the day
          can be from 1 to 31. After  the input is complete the screen will
          display the entered date as you have specified.
           
          3.3 Paper Type:
           
                   Specification  3.  is  labeled  Paper  Type.  During the
          printing process, if you wish  to  change  the paper that you are
          using or contrast grade of the  paper of contrast filter you will
          need to enter this information via this Paper Type function. When
          3. is entered the screen will  display 16 popular black and white
          papers from three  manufactures.  You  will  be instructed by the
          program to enter the appropriate number that represents the paper
          that you are using. Depending on weather you have chosen a single
          contrast type paper or a variable  contrast type you will then be
          asked to chose a contrast  grade  or contrast filter. The program
          will not allow you to chose  a filter type or contrast grade that
          is not legal for the specific paper that you have selected.
           
                   The procedure for  selecting  the  paper and contrast is
          the same for all papers  except  Ilford Multigrade II. This paper
          allows the use  of  three  types  of  contrast filters. Therefore
          extra information must be entered  to  chose the filter type. The
          program will automatically  proceed  through  this operation when
          this selection is made.                                          
           
                   When this information  is  first  entered no calculation
          will be performed on the exposure time because this is considered
          the starting point  and  initial  entry.  Any subsequent entry to
          this specification  will  force  a  calculation  and display. The
          calculation is based  on  the  previous  paper  type and contrast
          grade speed rating in relation to the new paper type and contrast
          grade speed rating.
           
          3.4 Exposure Time:
           
                   Specification 4. is  labeled  Exposure  Time. When 4. is
          entered the  program  will  instruct  you  to  enter  the initial
          exposure time that you feel  has  given an acceptable print. When
          this specification is entered  and  there  has been an entry made
          for Lens Opening this  function  will  force a calculation to the
          exposure times displayed  on  the  right  of  the screen. If this
          specification is 0 then  all  calculated exposure times displayed
          on the right of the screen will also be 0.




          
                                         page 5
          
           
           
          COMPUTER DARKROOM 1.0





                   This specification may be changed at any time during the
          operation of this major function to  set the exposure time to the
          initial point for the exposure calculations.
           
                   The range  of  values  that  will  be  accepted  by this
          program for  the  exposure  are  from  1  sec.  through  500 sec.
          inclusive. Any values  falling  outside  this  range  will not be
          accepted.
           
          3.5 Lens Opening:
           
                   Specification 5. is  labeled  Lens  Opening.  When 5. is
          entered the program will instruct  you  to enter the lens opening
          that has been used  to  produce  your  test print. If an exposure
          time has already  been  entered  this  specification will force a
          calculation of the exposure times  displayed  on the right of the
          screen to reflect the new f/stop. If this specification is set to
          zero then no calculation can  be performed and the exposure times
          displayed on the right of  the  screen  will  also be 0. Any Lens
          opening  from  f/2  to  f/32  may  be  used  for  input  to  this
          specification and all calculations will be made accordingly. 
           
                   There is no requirement for entering any of the standard
          f/stops for the  calculations  to  be  accurate although only the
          exposure times for the  standard  f/stops  from  2  to 32 will be
          displayed on the right of  the  screen. This input procedure will
          allow values ranging from 2 through 32 inclusive. If values below
          2 or above 32 are entered they will not be accepted.             
           
          3.6 Negative Size:
           
                   Specification 6. is  labeled  Negative  Size. When 6. is
          entered the program will instruct  you to enter the negative size
          (short side). This dimension  can  be  measured form the negative
          carrier used with your specific  enlarger. The value for negative
          size must be specified in inches  in  a range from 0 to 8 inches.
          This range will allow  any  negative  size  up  to 8 inches. This
          value will never be calculated  or  changed by the program and is
          used to calculate the magnification factor when the print size is
          also entered.
           
          3.7 Projection Size:
           
                   Specification 7. is labeled  Projection Size. When 7. is
          entered the program will instruct  you  to enter the dimension of




          
                                         page 6
          
           
           
          COMPUTER DARKROOM 1.0





          the projection (short side). This  dimension can be measured from
          the projected image  on  the  baseboard  of  the enlarger. Do not
          enter the dimension of the  print  unless the print short side is
          the same size as the projected image.
           
                   This value must be in the range of from 0 to 100 inches.
          Any value entered outside this range  will not be accepted by the
          program. If the negative has  been entered using specification 6.
          the entry of this projection  size  will force the calculation of
          the magnification factor  for  specification  8..  Each time this
          value is changed the magnification  factor will be calculated. If
          the negative  size  and  magnification  factor  are  known to the
          program it will  calculate  this specification automatically each
          time the magnification factor is changed.
           
          3.8 Magnification Factor:
           
                   Specification 8. is  labeled  Magnification Factor. When
          8.  is  entered  the  program  will  instruct  you  to  enter the
          magnification factor. This  value  is  the  ratio of the negative
          size (short side) to the projected image (short side).
           
                   This value must be in the range  0 to 100. If a value is
          entered outside this range  this  entry  will  be ignored. If you
          have entered the negative  size  as  described earlier this entry
          will force the program  to  calculate  and display the projection
          size. Any change to this value  will cause the projection size to
          be calculated.
           
          3.9 Print This Specification:
           
                   Command 9. is labeled  Print This Specification. When 9.
          is entered the program  will  send  the information that you have
          entered or the values that  have been calculated and displayed on
          the left side of the  screen  to  the printer. This option is for
          the  purpose  of   retaining   a   hard   copy  printout  of  the
          specifications that were used to make each print. This allows you
          to duplicate any print at a later date with minimum effort.
           
          3.10 Return To Main Menu:
           
                   Command 10. is labeled Return  To Main Menu. When 10. is
          entered the  program  will  transfer  control  to  the  Main Menu
          routine as if you  have  just  entered  from DOS. The screen will
          display the same three major  functions that greeted you when you
          first started COMPUTER DARKROOM.



          
                                         page 7
          
           
           
          COMPUTER DARKROOM 1.0





          3.11 Clear The Screen:
           
                   Command 11. is  labeled  Clear  The  Screen. When 11. is
          entered  the  program  will   blank   the   screen  so  that  the
          illumination will not interfere  with  the printing process. This
          feature has been added for those  who wish to have their computer
          with them in their  darkroom.  After  the screen has been cleared
          any  keystroke  will   instruct   the   program  to  display  the
          information that was entered or calculated without modification.








































          
                                         page 8
          
           
           
          COMPUTER DARKROOM 1.0





           
          4.0 COLOR NEGATIVE PRINTING
           
                   The  purpose  of  this  major  function  is  to  provide
          calculated  exposure  times   for   color   printing  from  color
          negatives.
           
                   When this function  is  first  entered  by selecting the
          COLOR NEGATIVE PRINTING  displayed  in  the  main menu the screen
          will  display  twelve  separate  specifications  or  commands. By
          choosing one of these you  may enter the information required for
          exposure calculations. As in  black  and  white printing you will
          notice the area to  the  right  on  the  screen that displays the
          exposure time for f/stops from  2  to  32. There is also an added
          area in the center  on  the  screen  to display the filter values
          that you will enter. This area is labeled Filter Pack.
           
                   We  will  now  discuss  each  specification  or  command
          individually.                                                    
           
          4.1 Negative Identification:
           
                   This specification  is  provided  for  you  to enter the
          specific identification  for  the  negative  using  the system of
          cataloging that you  have  chosen.  Refer  to  section  3.1 for a
          complete explanation.
           
          4.2 Date:
           
                   As discussed in  section  3.2  this specification is for
          the purpose of logging the date that you are making the print.
           
          4.3 Exposure Time:
           
                   This specification is  for  the  purpose of entering the
          starting exposure time that you have found to be satisfactory for
          this negative during the  test  print procedure. Refer to section
          3.4 for further instructions.
           
          4.4 Lens Opening:
           
                   This specification will also  be  derived from your test
          print procedure and  is  required  by  the  program as a starting
          point from the exposure calculations.  Refer to section 3.5 for a
          further explanation.




          
                                         page 9
          
           
           
          COMPUTER DARKROOM 1.0





          4.5 Negative Size:
           
                   This specification is entered  and  used  if you wish to
          change the print size or  projection size for cropping during the
          printing process.  The  negative  size  and  projection  size are
          required information to the  program  if  you change the enlarger
          head height and wish the program to calculate the exposure times.
          Refer to section 3.6 for a further explanation.
           
          4.6 Projection Size:
           
                   As described in  section  3.7  this specification is for
          the purpose  of  determining  the  magnification  factor from the
          dimensions of  the  negative  and  projection.  The negative size
          specification  and  the  projection  size  specification  are not
          required if you wish to enter the magnification factor directly.
           
          4.7 Magnification Factor:
           
                   This specification  may  be  entered  directly from this
          menu by selecting 7.  or  the  program  will calculate this value
          from the information provided by specifications Negative Size and
          Projection  Size.  Refer  to  section  3.8  for  a  more complete
          description.
           
          4.8 Enter Starting Filter Pack:
           
                   Specification 8. is labeled  Enter Starting Filter Pack.
          When 8. is  entered  the  program  will  display the six possible
          printing filters and ask you  to  pick  the  one that you wish to
          enter. When you have chosen the  filter type the program will ask
          you to enter the filter value.  This  value  may be from 0 to 100
          but must be in increments of  5.  Any entry outside this range or
          not a multiple of 5 will be rejected.
           
                   When you have entered  the specification for each filter
          that you will  be  using  selection  7.  will  return  you to the
          Negative Printing menu  and  display  these  filter values in the
          center of the screen.
           
                   This specification  has  a  different  function then the
          selection labeled Modify Filter  Pack  because this function does
          not cause a  calculation  of  the  exposure times. Therefore this
          entry is used by  you  to  enter  the starting filter pack values
          that you have obtained  from  the  test  print procedure. You can




          
                                         page 10
          
           
           
          COMPUTER DARKROOM 1.0





          also use this function for changing the filter values without the
          program calculating a new exposure time.
           
          4.9 Modify Filter Pack:
           
                   Specification 9. is labeled  Modify Filter Pack. When 9.
          is selected the program will display the same screen as described
          above.  The  information  is  also  entered  using  the procedure
          described in the previous section.
           
                   The purpose of this entry function is different then the
          Enter Starting Filter Pack in that when you leave this function a
          new exposure time will  be  calculated  based on the changes that
          you have made  to  the  filter  values.  When  you  return to the
          negative printing menu if you  have  changed any filter value the
          new exposure times will be based on the same printing density but
          with the color shift obtained from these new filters.
           
          4.10 Print This Specification:
           
                   This  command  is  provided  so  that  you  may  make  a
          permanent  hard  copy  of  the  values  used  for  this  printing
          operation. Refer to section  3.9  for a more complete description
          of this command.
           
          4.11 Clear the Screen:
           
                   As described completely in section 3.11 this command may
          be used to  blank  the  screen  for  use  in  the darkroom during
          printing.
           
          4.12 Return to Main Menu:
           
                   By selecting command 12. the  program will return to the
          main menu where you may  continue with another printing operation
          or return to the operating system prompt.













          
                                         page 11
          
           
           
          COMPUTER DARKROOM 1.0





           
          5.0 COLOR SLIDE PRINTING 
           
                   The purpose of this major  function is to provide to the
          photographer a convenient  way  to  determine  the exposure times
          required for the printing of  color slides. All calculations used
          in this function are based on the characteristics associated with
          the Ilford Cibachrome materials.
           
                   Once the  exposure  time  is  chosen  by  the test print
          procedure then any change in magnification or filter density will
          calculate the exposure times  for  these new specifications based
          on the original.
           
                   The following sections  will  discuss each specification
          and command in detail.
           
          5.1 Slide Identification:
           
                   This specification, as described  in section 3.1, is for
          the purpose  of  entering  your  catalog  identification for this
          slide. When  the  Print  This  Specification  command  is used to
          produce a  hard  copy  this  information  will  allow  for future
          reproduction by identifying this slide.
           
          5.2 Date:
           
                   This specification is for  the  purpose of including the
          date with the hard copy printout  that may be cataloged with this
          slide for future reproduction. Refer to section 3.2 for a further
          discussion.
           
          5.3 Exposure Time:
           
                   This specification  is  where  the  initial  exposure is
          entered after being  obtained  from  the  test print process. All
          subsequent calculations are based from this starting point. Refer
          to section 3.4 for a further explanation.
           
          5.4 Lens Opening:
           
                   This specification is a  required  entry for the program
          to use as a starting point for the calculations of exposure time.
          Refer to section  3.5  for  a  more  complete description of this
          entry.




          
                                         page 12
          
           
           
          COMPUTER DARKROOM 1.0





          5.5 Slide Size:
           
                   This specification is used  by  the program to calculate
          the magnification factor, if  entered.  The slide size dimensions
          are the same as the negative size dimensions explained in section
          3.6.
           
          5.6 Projection Size:
           
                   This  specification  is  also  used  by  the  program to
          calculate the magnification  factor  with  relation  to the slide
          size specification. Refer to section 3.7 for a better description
          of the value.
           
          5.7 Magnification Factor:
           
                   This specification may be  entered directly by selecting
          number 7. or calculated by the  program by the entry of the Slide
          Size and Projection Size specifications. Refer to section 3.8 for
          a better description of this function.
           
          5.8 Enter Starting Filter Pack:
           
                   This selection performs  a  function  that will lead the
          user through a procedure  to  enter  the starting filter pack for
          slide printing. When  the  filter  specifications are entered and
          this function is concluded  no exposure calculation is performed.
          Refer to section 4.8 for a complete description.
           
          5.9 Modify Filter Pack:
           
                   This  specification  entry  procedure,  as  described in
          detail in section 4.9, is  used  when calculation of the exposure
          time is required for  changes  in  the color filter values. Color
          balance modifications to a print can be made quickly with the new
          exposure value  obtained  from  the  program  by  entering filter
          changes from this function.
           
          5.10 Print This Specification:
           
                   This command function will  provide a hard copy printout
          containing the information  entered  or  calculated for the color
          slide printing major function.  Refer  to  section 3.9 for a more
          complete description.
           




          
                                         page 13
          
           
           
          COMPUTER DARKROOM 1.0





          5.11 Clear the Screen:
           
                   This command  will  blank  the  screen,  as described in
          section 3.11 so  that  this  program  can  be  used by a computer
          located within  the  darkroom.  After  this  command  is entered,
          pressing any key will  return  the  screen  to the original color
          slide printing display.
           
          5.12 Return to Main Menu:
           
                   This  command,  as   described   for   the  other  major
          functions,  is  used  to   terminate  the  color  slide  printing
          operation. When this command  is  selected control will return to
          the main menu function  and  further  work  or  an exit to DOS is
          possible.


































          
                                         page 14
          
           
           
          COMPUTER DARKROOM 1.0





           
          6.0 THE SHAREWARE CONCEPT
           
                   COMPUTER DARKROOM is not  public  domain software nor is
          it free  software.  This  product  is  copyright  by  Benjamin M.
          Kacenas and is marketed under the shareware concept.
           
                   The  shareware  concept  is  to  provide  to prospective
          users, at no cost, a  working  copy of the program for evaluation
          in the hopes that  enough  users  will  feel  that the program is
          worth the price  that  is  requested.  This marketing concept can
          only work if users are willing to pay for worthwhile software.
           
                   This software may be  copied or transmitted free without
          restriction for evaluation purposes  but  not sold or modified in
          any way. A charge of no greater  then  $10.00 my be requested for
          copies of this program to cover  the labor and media required for
          this purpose.
           
                   The program  COMPUTER  DARKROOM  may  not  be  rented or
          leased under any circumstances.
           
                   If you  wish  a  registered  and  current  copy  of this
          program that will include a  printed  manual as well as technical
          support, this  may  be  purchased  for  $25.00  from  Benjamin M.
          Kacenas. Please  refer  to  the  order  form  provided  with this
          manual.
           





















          
                                         page 15
          
           
           
          COMPUTER DARKROOM 1.0





           
          7.0 ORDER FORM
           
          _________________________________________________________________
          BENJAMIN M. KACENAS
          1414 MOORGATE DR.
          KNOXVILLE, TN 37922
           
           
          ITEM                  QTY      PRICE EACH      PRICE EXTENDED
          -----------------     ---      ----------      --------------
           
          COMPUTER DARKROOM     ___      $ 25.00         $_____________
           
                                               SUBTOTAL  $_____________
           
                                         7.0% SALES TAX
                         TENNESSEE STATE RESIDENTS ONLY  $_____________
           
                                                  TOTAL  $_____________
           
           
          SHIP TO 
           
          NAME ________________________________________
           
          ADDRESS _____________________________________
           
          CITY ________________________________________
           
          STATE ____________ ZIP ______________________
           
          COD ORDERS NOT ACCEPTED:
















          
                                         page 16
```
{% endraw %}

## FILE1313.TXT

{% raw %}
```
Disk No: 1313
Program Title:  COMPUTER DARKROOM, PROFESSIONAL LIBRARIAN
PC-SIG version: 1

For anyone who develops their own pictures, calculating exposure times
that are dependent on many factors can involve tedious (and expensive)
guesswork.  COMPUTER DARKROOM calculates new settings for you quickly
and on the button.

Once you have one exceptable exposure with test prints, this program
gives you the proper exposure times for any changes you decide to make
in paper speed, contrast, magnification, or filter factors for all black
and white prints, color prints, or color slides for f/stop values from
f/2 to f/32.

PROFESSIONAL LIBRARIAN is an information-retrieval system for storing
citations of articles and books of your own library.  You can add,
delete, edit, sort and search citations in your database.  Each record
includes the author, date, title, citation, number, four subject
categories, and a short description.  A listing of the database can be
outputted to the screen, a file, or the printer.

Usage:  Photography/Database.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00 each

File Descriptions:

READ     ME   Introductory Documentation.
CDR      EXE  Main Program.
CDR      TXT  Main manual text.
PL       EXE  Main program.
PLREAD   ME   Documentation.
PL       MEM  Memory variables file.
PL       FRM  Report formats.
PL2      FRM  Report formats.
FILES    TXT  File descriptions.
EXAMPLE  DBF  Example database.

PC-SIG
1030D E. Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## FILES.TXT

{% raw %}
```
The following files should be on your disk.

PL.EXE..........The main program for Professional Librarian.

PLREAD.ME.......Documentaion for Professional Librarian.

PL.MEM..........Memory variables file.

PL.FRM..........Report formats.

PL2.FRM.........More report formats.

EXAMPLE.DBF.....Example database of citations from a horticulturist.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║   <<<<  Disk No 1313  COMPUTER DARKROOM, PROFESSIONAL LIBRARIAN  >>>>   ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation, type:                                     ║
║                                                                         ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║   To start the program Computer Darkroom, type:                         ║
║                                                                         ║
║             CDR (press enter)                                           ║
║                                                                         ║
║   To start the program Professional Librarian, type:                    ║
║                                                                         ║
║             PL (press enter)                                            ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1313

     Volume in drive A has no label
     Directory of A:\

    CDR      EXE     69676  10-24-88   1:20p
    CDR      TXT     43519  10-31-88  12:20p
    EXAMPLE  DBF     11619  11-17-87  12:20p
    FILE1313 TXT      1643   2-23-89   1:49p
    FILES    TXT       360  11-17-87  12:17p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1310   2-21-89   3:23p
    MANUAL   BAT       146   1-18-89  10:47a
    PL       EXE    159104   6-10-87   2:46p
    PL       FRM      1990   6-09-87   2:07p
    PL       MEM       189  11-17-87  12:21p
    PL2      FRM      1990   6-09-87   2:23p
    PLREAD   ME      12446   8-12-87   4:59p
    READ     ME       3975  10-31-88  12:01p
           14 file(s)     308005 bytes
                            6144 bytes free
