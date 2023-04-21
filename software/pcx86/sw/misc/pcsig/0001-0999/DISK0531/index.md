---
layout: page
title: "PC-SIG Diskette Library (Disk #531)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0531/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0531"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "ALAN'S TEXT EDITOR"

    Alan's Text Editor & Spreadsheet is a full screen ASCII text processor
    program with simple wordprocessing functions, including multi-file
    capabilities.  The program is well supported with documentation and
    help menus, but does require an understanding of ASCII text editing.
    The spreadsheet is functional, but clumsy.  Sample spreadsheet files
    include balloon payments, loan mortgages and other simple accounting
    uses.
    
    System Requirements:  128K, two disk drives and monochrome display
    
    How to Start:   Load DOS and type AE to enter the ASCII editor program.
    Type AC to enter the spreadsheet program. Consult README and the .DOC
    files for program documentation.
    
    Suggested Registration:  $35.00
    
    File Descriptions:
    
    AE       HLP  Help Screens for Alan's Editor
    AE       DOC  Documentation for Alan's Editor - printer formatted manual
    AE       EXE  Alan's Editor ASCII Text Processor Program
    -------- ---  Alan's Editor
    BUDGET   AC   Sample Spreadsheet File - Household Budget Calculations
    SUMMARY  AC   Sample Spreadsheet File - Business Budget Summary
    BALANCE  AC   Sample Spreadsheet File - Checkbook Balancing exercize
    MORT     AC   Sample Spreadsheet File - Amortgage on a loan
    BALLOON  AC   Sample Spreadsheet File - Balloon Payments for car purchas
    AC       DOC  Documentation for Alan's Calc - printer formatted manual
    AC       EXE  Alan's Calc Spreadsheet Program
    -------- ---  Alan's Spreadsheet
    SHEET2   AC   Sample Spreadsheet File - Work Sheet #2 for Summary
    SHEET1   AC   Sample Spreadsheet File - Linked Work Sheet #1 for Summary
    README        Author's Introduction to files on disk.
    XYZCO    AC   Sample Spreadsheet File - Financial Data, XYZCO
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AC.DOC

{% raw %}
```





          
          
          
          
          
          
          
          
          
                                   ALAN'S CALC
          
          
          
                            (C) Alan C. Elliott, 1985
                              Mission Technologies
                                  P.O. Box 1169
                             Cedar Hill, Texas 75104
          
          
          
          
          
          C_O_N_D_I_T_I_O_N_S_:_ 
          
          This program is made available through the "user supported" 
          concept. You may copy and distribute this program, but 
          neither it nor any of the documentation may be altered. The 
          program may not be distributed commercially except as a part 
          of a PC user's group or similar organization. 
          
          You are encouraged to contribute to the support of this 
          program ($35 suggested). This will make you a registered 
          user, and will put you on the update and newsletter mailing 
          list. Site licenses, and source code licenses are also 
          available. Please refer to the order form at the back of 
          this manual. 
          
                           DESCRIPTION of Alan's Calc
          
          Alan's Calc (or AC for short) is a simple to use spreadsheet 
          program. It allows you to enter numbers and text on the 
          computer screen, and define relationships between the 
          numbers. Once these relationships are defined, you may 
          change some numbers, and the program will automatically 
          recalculate all of the relationships. With Alan's CALC you 
          san ask those "WHAT IF" questions. It can be used for 
          financial modelling, budget calculations, scientific 
          calculations, and more. 
          
          PREPARING TO USE AC 
          
          The only file required to use AC is the file named AC.EXE. 
          Note that you MUST include AC.DOC whenever the program is 
          distributed. However, we will see that there is another 
          file, which you can create, which sets up default values for 
          storage disk, tab settings, and colors. 



                                        1






          
          Alan's Calc
          
          ____________________________________________________________
          
          
          
          Use on Floppy 
          
          To setup AC for use on a floppy, first format a floppy disk 
          with the "/S" option. Then copy the files AC.EXE, AC.DOC, 
          and all files with an ".AC" extension to the newly formatted 
          diskette. Set up the initialization files as indicated later 
          in thes manual, usually specifying disk "B" as the storage 
          diskette. 
          
          Use on Hard disk 
          
          To use AC on a hard disk, copy the files AC.EXE to the hard 
          disk (usually to the ROOT directory) AC.EXE can be placed in 
          any directory (such as ROOT) if the paths are properly set 
          (See the DOS manual). Also, see the section on how to set up 
          initialization files. With AC in the ROOT directory, the 
          PATH should at least be "PATH ;_". 
          
          To begin the AC program (here from disk C), enter 
          
          C>AC 
          






























                                        2






          
          Alan's Calc
          
          ____________________________________________________________
          
          
          
          
          
          
          CONTENTS 
          
          
          
          SECTION 1.INTRODUCTION
               Overview....................................4
               Capabilities................................4
               Requirements................................4
               How To Start AC.............................5
               How to Stop The AC..........................5
               If Errors Occur.............................5
               
          SECTION 2.Fundamental Concepts
               Fundamental Concepts........................6
               The Table...................................6
               Arithmetic Relations Supported..............8
               When First You Calc.........................9
               Text and Numbers...........................10
               Function Options........................11-12
               Control Commands...........................13
               
          SECTION 3.How to Use AC
               Getting Acquainted......................15-16
               Formats....................................16
               Understanding the Structure.............17-18
               Checkbook Balancing........................19
               Linking Tables..........................20-23
               Printing a Table...........................24
               Saving a Table.............................24
               Suspending Calculations....................25
               Amortization Example....................26-27
               Balloon Note Example.......................28
               Household Budget Example...................29
               Editing the Relations Table................30
               
          APPENDICIES
               Error conditions...........................31
               Specifications.............................32
               Initialization file........................33
               INDEX......................................35
               ORDER FORM.................................36








                                        3






          
          Alan's Calc - Introduction
          
          
          
          
                              Section One
          
                             Introduction
          
          
          Overview 
          
          AC is an electronic spreadsheet which allows you 
          to create tables of text and numeric relations. 
          Once such a table is designed, changing one or 
          more numbers in the table causes all related 
          numbers to be recalculated before your eyes. Each 
          table consists of 14 columns and 60 rows of cells. 
          Each cell is 9 characters wide. Tables may be 
          linked together to form larger models. AC is 
          designed to be simple and straightforward to use. 
          The time required to learn to use AC is generally 
          less than one hour. No previous computer 
          experience is required. This manual consists of 
          step-by-step instructions, and a wide variety of 
          examples to get you started. Many of the examples 
          may be used immediately for your household or 
          business needs. 
          
          
          Capabilities 
          
          AC may be used to design applications from simple 
          household budgets to complex mathematical and 
          scientific models. Basic arithmetic relations are 
          available as well as scientific mathematical 
          functions such as SINE, COSINE, TANGENTS, 
          EXPONENTIATION, and others. 
          
          
          Requirements 
          
          Requires an IBM Personal Computer with 128K or 
          more of memory and DOS. Monochrome or color 
          monitor is supported. 
          
          
          Keep Backups 
          
          We recommend that you keep the original AC 
          diskette in a safe place, as a backup of the 
          program diskette. Keep backups of all files you 
          create to avoid accidental loss of valuable 
          information. 
          



                                        4






          
          Alan's Calc - Introduction
          
          
          
          
          
          INITIALIZATION FILE 
          
          Default conditions pertaining to storage disk and 
          color selections for the table are set in a file 
          named AC.INI. This procedure is described in the 
          APPENDIX. It is not necessary for you to set up 
          this file to operate AC. However, it allows you to 
          pre-set some initial(default) conditions which may 
          be handy. 
          
          
          
          HOW TO START 
          
          
          
          With the working copy of AC in the A disk drive, 
          the command to begin AC is 
          
          A>AC 
          
          
          HOW TO STOP 
          
          Once Spread is running, you may stop the program 
          by pressing the Esc key, and answering the 
          question 
          
          End (Y/N) _ 
          
          by pressing the "Y" key. 
          
          
          IF ERRORS OCCUR 
          
          If errors occur, an error message will appear on 
          the screen. Usually, you may simply press the 
          ENTER key to recover. Appendix 1 explains the 
          error messages, and gives more details. 













                                        5






          
          Alan's Calc - Introduction
          
          
          
          
                              Section Two
          
                         Fundamental Concepts
          
          
          Spread is an electronic spreadsheet. It allows you 
          to create tables of text and numeric 
          relationships, which allows you to analyze 
          budgets, loans, cost estimates, etc. on the 
          computer screen. After relationships have been 
          established, changing one or more numbers will 
          cause all related numbers to be recalculated 
          automatically. This gives you the power to quickly 
          answer questions about "What if a certain number 
          were different?" 
          
          Several definitions need to be established to 
          understand the instructions in this manual. 
          
          THE TABLE 
          
          The word "table" will refer to the "spreadsheet"  
          which is displayed on the computer monitor. 
          
          CELL 
          
          A "cell" is a block of nine characters located in 
          the table and referred to by a "letter-number" 
          name such as A1 or N60. 
          
          POSITION 
          
          Each cell is identified by a position. This 
          position consists of the column and row 
          designation (the location) of the cell. The 
          columns are labeled from A to N, and the rows are 
          labeled from 1 to 60. 
          
          RELATIONS 
          
          This word will refer to arithmetic relations such 
          as A1+G2 or Log(E4). 
          
          STRUCTURE 
          
          The structure of a table is the text and 
          arithmetic relations which determine the function 
          and appearance of the table. 





                                        6






          
          Alan's Calc - Introduction
          
          
          
          
                               The Table
          
          
      CELL:A1                                                ENTER
       |---A---||---B---||---C---||---D---||---E---||---F---||---G---||---H---|
    1 : _
    2 :
    3 :
    4 :
    5 :
    6 :
    7 :
    8 :
    9 :
   10 :
   11 :
   12 :
   13 :
   14 :
   15 :
   16 :
   17 :
   18 :
   19 :
   20 :
  
  1-Save 2-Get 3-Copy 4-Review 5-Options 6-Fetch 7-window 8-Clr 9-Print 10-Frmat
  ESC-End CTRL A-Alpha C-Cancl D-DelRw I-InsRw L-Lck R-RJ S-Susp Calc > DISK:B
  
  
  
  
  
          Columns are lettered from A to N and rows are numbered from 
          1 to 60. Each cell is referenced by a Column Row 
          designation. The upper left cell is A1, to its right is B1, 
          etc. Only a portion of the table is displayed at any time. 
          See page 10 for moving the table vertically or horizontally. 















                                        7






          
          Alan's Calc - Introduction
          
          
          
          
                              Arithmetic Relations
                                    Supported
          
          
          The following relationships are available as pairwise 
          operators. 
          
                + : addition
                - : subtraction
                / : division
                * : multiplication
                ^ : exponentiation
          
          
          Since these operators must be used pairwise, A1+B1 is a 
          legal operation, whereas A1+B1+C1 is not. This is no 
          problem, since the latter can be handled by stacking 
          operations, which will be discussed later. 
          
          In addition to the arithmetic relationships defined, the 
          following mathematical functions are also available. 
          
          
               LOG : natural logarithm
               SQR : square root
               EXP : exponential function
               SIN : sine function
               COS : cosine function
               TAN : tanget
               ATN : arctanget
               INT : returns integral part of a number
               ABS : returns absolute value of a number
          
          Example : LOG(A1), SIN(3.14), etc.
          
          
                                Special Functions
          
          SUMCOL or SUMROW - Sums numbers below or to the left of the 
          appropriate command. 
          
          SUM(N#-N#) - Sums a range of numbers vertically or 
          horizontally. 










                                        8






          
          Alan's Calc - Introduction
          
          
          
          
                               When First You CALC
          
          
          
          After preparing the diskette in a manner described earlier 
          in these instructions, you may begin AC with the command... 
          
          A>AC 
          
          Find the arrow keys on the numeric pad to the right of the 
          keyboard. Notice that by pressing the down arrow key, the 
          cursor moves down a column, and by the right arrow key the 
          cursor moves to the right one cell. The cursor is initially 
          positioned at the beginning of a cell. 
          
          Pressing the "Home" key moves the cursor to the upper left 
          corner. Pressing the "End" key moves the cursor horizontally 
          to the last cell on the screen. 
          
          
          
                             The Upper Right Corner
          
          
          Notice the word ENTER in the upper right corner of the 
          screen. This tells you that AC is ready for you to begin 
          entry of text. When you begin entry, this designation will 
          change to "Entry in progress", and the field in which the 
          entry is being made will be displayed in reverse video. The 
          o_n_l_y_ way to end an entry is by pressing the ENTER key, or 
          canceling the entry with a CTRL-C command. Corrections to 
          the entry before you press the enter key may be made with 
          the backup key (<--) located next to the "=" key. 
          
          After the entry of text or numbers, the upper right 
          designation will be "Please Wait". During this time, text is 
          being stored, or calculations are being performed. You must 
          wait for the "ENTER" designation to resume entering text. 















                                        9






          
          Alan's Calc - Introduction
          
          
          
          
                             The Difference Between
                                Text and Numbers
          
          
          
                                    A NUMBER
          
          In this program, a NUMBER is text which matches the standard 
          notions of a number. Any text containing a letter, such as 
          10E1 is not recognized as a number. 
          
          
                                   A RELATION
          
          A RELATION is any expression other than a number that 
          contains a "+", "-", "/", "*", or "^". In addition, a 
          relation can be "XXX( )" where XXX is one of 9 functions 
          previously listed. Also, the words SUMCOL, SUMROW or SUM(..) 
          are relations. Relations must not contain any blanks. For 
          example, A1+B1 is correct, whereas A1 + B1 is not. 
          
          
                                      TEXT
          
          If an entry is neither a number nor a relation, it is 
          assumed to be text. 
          
          
          
                            CTRL-A Forces ALPHA Mode
          
          By pressing CTRL-A, an entry will be automatically treated 
          as text, no matter what it contains. As an example, enter 
          3+4 on the screen. The number 7 will be displayed. Now press 
          CTRL-A and enter the same text. This time the entry is not 
          changed ... it was treated as text. Entering text which 
          contains a relation operator such as + or / will force AC to 
          check for a relation. If none is found, the entry is assumed 
          to be text. This may cause a long "please wait". Using the 
          F3 key may avoid this delay. 













                                        10






          
          Alan's Calc - Introduction
          
          
          
          
                                Function Options
          
          
          ESC - End 
          
          Ends AC program ,and returns you to the DOS system. 
          
          F1 - Save 
          
          This function allows you to save the s_t_r_u_c_t_u_r_e_ of the AC 
          table. By this we mean that all of the text and numeric 
          relations are saved in a file, and may be retrieved at a 
          later date for future use. 
          
          F2 - Get 
          
          This function allows you to get a table which has previously 
          been saved using the F1 option. 
          
          F3 - Copy 
          
          This function allows copying of row or columns. This 
          replication allows you to enter a row containing relations, 
          and to copy that row to another place, in which you want the 
          same type of relations. 
          
          F4 - Review Relations 
          
          This function allows you to review, delete or copy the 
          relations that have been set up in the AC Table. 
          
          F5 - Options 
          
          This function allows you to change cursor direction, set a 
          password, get a directory of files on disk, delete files, 
          and change the storage disk. 
          
          F6 - Define Fetch Files 
          
          This function allows you to define fetch files (which will 
          be covered in detail later.) 
          
          F7 - Window 
          
          This function allows you to select a vertical window 
          position which will cause the table to the left of some 
          selected column to always be displayed no matter where in 
          the table you are working. 





                                        11






          
          Alan's Calc - Introduction
          
          
          
          
          F8 - Clear 
          
          This function clears the current contents of the AC table. 
          All text and relations will be cleared, and a blank table 
          will appear. 
          
          F9 - Print 
          
          This function allows you to print a copy of the table to a 
          file or to a printer. You will be given an opportunity to 
          specify the dimensions of the table you wish to be printed 
          (print only part of a table). Printing a copy of the table 
          to a file allows it to be used in word processing programs 
          such as VersaText. 
          
          F10 - Format 
          
          This function allows you to specify the format to be used in 
          printing the table. Specifically, you may choose to force 
          numbers to appear to two decimal places (such as dollars and 
          cents). Very large or very small numbers may be printed in a 
          format chosen by the program. 
          
          PgUp and PgDn 
          
          These keys, located on the numeric pad, allow you to move 
          the table up or down. Pressing CTRL-PgUp will cause the 
          uppermost portion of the table to be displayed. Likewise, 
          pressing CTRL-PgDn will cause the bottom of the table to be 
          displayed. 
          
          Horizontal Move 
          
          When the cursor is in the far right field, pressing the 
          right arrow key will cause the table to move in such a way 
          to display two more columns to the right (until the limit is 
          reached). Likewise, moving the cursor to the left, and 
          pressing the left arrow key will cause the table to move 
          horizontally to the right. Pressing the Ctrl backspace key 
          (the <-- key located next to the "Num Lock" key) will take 
          you to the far left of the table, and pressing the Ctrl-End 
          key will take you to the far right of the table. CTRL-Home 
          will move you to the upper left "home" position of the 
          table. 









                                        12






          
          Alan's Calc - Introduction
          
          
          
          
                             Control (CTRL) Commands
          
                                     CTRL-A
          Set ALPHA mode - entry will automatically be treated as 
          text. 
          
                                     CTRL-C
          Cancel an entry which is in progress. 
          
                                     CTRL-D
          CTRL-D allows you to delete a row of the table. A row which 
          contains numbers or relations may not be deleted. 
          
                                     CTRL-I
          CTRL-I allows you to insert a blank row in the table, 
          provided the 60th row is blank. All rows below the inserted 
          row will be moved down, with relations intact. 
          
                                     CTRL-L
          This command locks the cell from further entry. This can be 
          used to protect cells containing relations from being 
          accidentally changed. If a cell is alread locked, CTRL-L 
          unlocks it. 
          
                                     CTRL-R
          Turns on/off right justify. When on, this causes textual 
          entries less than 9 characters in length to be right 
          justified within the cell. 
          
                                     CTRL-S
          CTRL-S suspends calculation. This may be used when a number 
          of changes are to be made to a table, and you do not wish to 
          wait for calculations to take place for each changed 
          variable. A following example will illustrate the use of 
          CTRL-S. 


















                                        13






           
          AC - How To Use It
          
          
          
          
          
                                  Section Three
          
          
                                  How to Use AC
          
          
          
          A Getting Acquainted Tutorial 
          
          In this section we will put AC through its paces, and see 
          what it can do. As mentioned earlier, AC is started by 
          issuing the command "AC" at the "A>" DOS prompt. (or ">C" 
          when using a hard disk) 
          
          A>AC 
          
          If this does not work properly, please consult the 
          instructions at the first of the manual. 
          
          Putting AC Through its Paces 
          
          Once AC screen has appeared, move the cursor around on the 
          screen with the arrow keys located on the number pad to the 
          right of the keyboard. Notice that the cursor always jumps 
          to the beginning of a cell, and that the name of the cell 
          always appears in the upper left corner of the screen. If 
          the cursor is moved to the far right of the screen, a new 
          screen, (the table moved one cell to the left) will appear. 
          Moving the cursor to the extreme right will cause the 
          portion of the table in view to move to the right (until the 
          limit of the table is reached). Similarly, the PgUp and PgDn 
          keys on the numeric pad may be used to move the table up and 
          down. 
          
          Other Fancy Moves 
          
          The Home key places the cursor in the upper left cell, and 
          the End key places the cursor in the last cell of a 
          particular row. Many of the move commands can be made to 
          take the table to its extremes. These commands require you 
          to jointly press the Ctrl key down (like a shift key), and 
          press the command key once. Thus, no matter where you are in 
          the table, the command Ctrl-Home will place you in the upper 
          left corner. 
          
          Expresso 
          
          Use the Ctrl-End to go to the cell at the extreme right of 
          the table. The Ctrl-"Backspace" (The key next to Num Lock) 



                                        14






           
          AC - How To Use It
          
          
          
          command will bring you back to the extreme left. Use the 
          Ctrl-PgDn to go to the bottom of the table, and the 
          Ctrl-PgUp to come back up. 
          
          Relations and Text 
          
          Let's enter a simple example to learn how to use AC. First, 
          make sure you have a cleared table (this may be done with 
          the F8 key). Let's say you want to know how much 
          (proportionally) an item (such as a coin in a coin 
          collection) has increased in value over the past year. You 
          know the price last year, and the price this year. Place the 
          cursor in A1, and enter "Last Year's Price". In A2 enter 
          "This Year's Price". In A3 enter the text "Net change", and 
          in A4 enter "Proportion Change". The formula for proportion 
          change is 
          
                        T_h_i_s_ _Y_e_a_r_'_s_ _P_r_i_c_e_ _-_ _L_a_s_t_ _Y_e_a_r_'_s_ _P_r_i_c_e_
                                    Last Year's Price
          
          Breaking that down into pairwise relations, we have
          
                     Net Change= Last Year's Price - This Year's Price
                     Proportion Change = Net Change/Last Year's Price
          
          Assuming that last year's Price for a coin was $100, we 
          enter the number 100 in cell C1. This year's Price is $125, 
          so we enter the number 125 in cell C2. To calculate Net 
          Change in cell C3, we enter the relation C2-C1. The number 
          25 will appear. To calculate proportion change in cell C4, 
          we enter the relation C3/C1, and 0.25 will appear. 
          
          Changing Values 
          
          If we change the value of Last Year's Price or This Year's 
          Price, the Net Change and Proportion Change will 
          automatically be recalculated. For instance, change the This 
          Year's Price to 200, by moving the cursor to the C2 
          position, entering 200, and pressing ENTER. Observe the 
          changes in Net Change and Proportion Change. 
          
          Short Stack 
          
          If you prefer to see percentages rather than proportions, 
          stack another relation at C4 to multiply the proportion by 
          100. Place the cursor at C4, and type in the relation 
          C4*100. This causes whatever is in cell C4 to be multiplied 
          by 100. Change the text "Proportion Change" to "Percent 
          Change". 





                                        15






           
          AC - How To Use It
          
          
          
          
          Here is How the Table Should Look 
          
          
             |---A---||---B---||---C---||
          1: Last Year's Price     100.0
          2: This Year's Price     125.0
          3: Net Change             25.0
          4: Percent Change         25.0
          
          
          After changing Last Year's Price to 30 and This Year's Price 
          to 45, the table will look like this 
          
             |---A---||---B---||---C---||
          1: Last Year's Price      30.0
          2: This Year's Price      45.0
          3: Net Change             15.0
          4: Percent Change         50.0
          
          
                                     Formats
          
          Formats may be chosen, using the F10 function key, to select 
          the format in which numbers will be printed. The six choices 
          are 
          
          
          1) Default - AC decides how to display a number. 
          2) Display numbers with two decimal places ( such as 100.00 
          instead of 100.0) 
          3) Display numbers with commas signifying thousands, such as 
          1,000.00 instead of 1000.0 
          4) Display numbers as dollars, such as $100.00. 
          5) Display whole numbers, such as 1000 instead of 1000.05. 
          6) Whole numbers, with commas signifying thousands. 
          7) Numbers displayed to four decimal places. 
          
          Using the table you have just created, experiment with the 
          different available formats. Note, that you can select to 
          choose a format for the entire table, for a single cell, or 
          for a range of cells. 












                                        16






           
          AC - How To Use It
          
          
          
                           Understanding the Structure
          
          
          In order to make effective use of the AC, it is important to 
          understand clearly how the tables are formed. To clarify 
          this, consider the table below. 
          
          
             |---A---||---B---||---C---||---D---||---E---|
          
          1: Numbers      Col 1    Col 2    Col 3
          2: ============================================
          3: 1st Num.     100.0    200.0    300.0    400.0  <-- (B3+D3)
          4: 2nd Num.     200.0    400.0    200.0    400.0  <-- (B4+D4)
          5: 3rd Num.     300.0    100.0    500.0    400.0  <-- (B5+C5)
          6: ---------------------------------------------
          7: Totals       600.0    700.0   1000.0   1200.0
          
          To construct this table, clear the current table (if there 
          is one) by using the F8 function key. You will be asked 
          "Clear Table (Y/N)?" Answer Y and a blank table will appear. 
          
          Begin Entry 
          
          Place the cursor at A1 and type in line 1. There is no need 
          to press the ENTER key until the entire line is typed. Now 
          type in line 2, using the equal "=" symbol. A_f_t_e_r_ reading 
          the rest of this paragraph, type in rows 3 to 5 one field at 
          a time. That is, type in "1st Num." and press the ENTER key, 
          type in "100" and press the ENTER key, etc. Do not type in 
          the numbers in column "E". The numbers in column E will be 
          calculated according to relations we will type in later. 
          
          Enter Relations for Column E 
          
          The relations for column E are noted in parentheses next to 
          the numbers. Place the cursor in cell E3 and type in B3+D3. 
          The number 400 will appear. Do the same for cell E4 and E5. 
          Enter line 6, a series of dashes. 
          
          Next, We Sum the Columns 
          
          Place the cursor in cell A7, type in "Totals",and press the 
          ENTER key. Next, place the cursor in cell B7 and type in 
          "SUMCOL". The number 600 will appear. Enter "SUMCOL" in 
          columns C, D and E also. 
          
          See What We Have Done 
          
          Press the F4 "Review" function key, and the following 
          relations, which we have entered, will be displayed. 



                                        17






           
          AC - How To Use It
          
          
          
          
              1. E3=B3+D3
              2. E4=B4+D4
              3. E5=B5+C5
              4. B7=SUMCOL
              5. C7=SUMCOL
              6. D7=SUMCOL
              7. E7=SUMCOL
          
          If your list of relations  does not match this list,  please
          begin the example over again. 
          
          To Correct a "Mistake" 
          
          Suppose you made a mistake in entering the relation in  cell
          E5. That is, suppose you r_e_a_l_l_y_ wanted to enter the relation
          "B5+D5" instead of the present "B5+C5". Place the cursor  at
          E5, and enter the desired  relation, B5+D5. Notice that  the
          correct sum of 800 appears. However, notice that the sum  of
          column E is now incorrect!  Moreover, if we changed  numbers
          in the body  of the  table, the  total would  still come  up
          wrong. A quick check of  the relations table will solve  the
          problem. 
          
          Look at the Relations 
          
          Press the F4 key, and you should see the following table. 
          
              1. E3=B3+D3
              2. E4=B4+D4
              3. E5=B5+C5
              4. B7=SUMCOL
              5. C7=SUMCOL
              6. D7=SUMCOL
              7. E7=SUMCOL
              8. E5=B5+D5
          
          Calculations Take Place in Logical Order 
          
          Since calculations take place in the same order as they are 
          created, we can see that the sum of column E occurred before 
          the last summation (B5+D5) took place. All can be made well 
          by deleting the relations "E5=B5+C5" and "E7=SUMCOL", and 
          then entering the SUMCOL in cell E7 again. Correct this 
          table by making these changes. 









                                        18






           
          AC - How to Use It
          
          
          
          
                             Checkbook Balancing Act
          
          An example AC table on your disk is called BALANCE. To get 
          it, press the F2 key, and enter BALANCE. This table can be 
          used to balance your checkbook. It requires that you enter 
          your bank statement amount, outstanding checks and fees, and 
          outstanding deposits and interest. From this, it gives you 
          the amount which should appear in your checkbook, as the 
          current balance. 
          
                       Checkbook Account Reconciliation Form
                                                                              
     Enter Outstanding Checks   Enter Outstanding Deposits   Enter Balance
     (debts) here:              (credits) here:              from statement
     Reference   Amount         Reference   Amount           here  $   716.41
           100    23.34         Dep 11/2    230.33
           101   125.00         Dep 11/4   1200.00         ----RESULTS------
           102    12.54                                    Balance in
           103   432.00                                    Checkbook  should
                                                           be =   $   1553.86
     
     
                                                           Total Outstanding
                                                           Checks and fees
                                                           are = $     592.88
     
                                                           Total Outstanding
                                                           Deps. and Int.
                                                           are = $    1430.33
     
     
          Notice that input of outstanding checks and deposits are in 
          columns B and E respectively. These columns are totaled on 
          row 50, which you can verify by paging down to the bottom of 
          the table (using Ctrl-PgDn). Your checkbook balance should 
          be Previous Balance-Debt+Credits, which appears under the 
          RESULTS sign. A total of outstanding Debts and Credits are 
          also given under the RESULTS sign. For your personal use, 
          you can enter your numbers over the sample numbers already 
          entered. 
          
          Can You Do It? 
          
          As an exercise to learn about how to create a AC table, 
          enter this table from a blank screen. In fact, all of the 
          examples in this manual have been created to use a variety 
          of AC's capabilities. Understanding how the examples were 
          created will help you design tables for your own needs. 





                                        19






           
          AC - How to Use It
          
          
          
          
                                 Linking Tables
          
          
          Numbers in tables may be "linked" together by calling them 
          from one table to another. For example, you may develop a 
          budget for several departments, and then create a summary 
          budget table by fetching the subtotals from the various 
          department budgets. If you will not be using this feature, 
          this section may be skipped without loss of additional 
          information. 
          
          Defining Files 
          
          Before you can fetch data from other tables, you must first 
          define which files you will be using. This is performed with 
          the F6 function key. Each file will be referred to by 
          number. 
          
          One Time and Dynamic Fetch 
          
          You may fetch a number from a file on a one time basis, 
          which means that if it is changed in the original file, it 
          will n_o_t_ be affected in the new file. You may also define a 
          "dynamic" fetch. This type of fetch will be updated if the 
          number in the original file is changed. 
          
          Step-By-step 
          
          (1) Decide from which files you wish to fetch information 
          from, and specify them using the F6 function key, responding 
          to program prompts. 
          
          (2) Place the cursor in the cell where you want the fetched 
          number to be placed, and issue the fetch command. 
          
          The structure for these commands are: 
                                                                                
          !(#:NAME) - one time fetch
                                                                                
          @(#:NAME) - dynamic fetch
                                                                                
          where # is the number assigned to the file name by the F6 
          procedure, and where NAME refers to the cell name of the 
          number in the fetch file, such as A1, N50 or C23. 
          
          That's all there is to it. The following pages give an 
          example of the use of the fetch commands. 






                                        20






           
          AC - How to Use It
          
          
          
          
                              Dynamic Fetch Example
          
          Suppose you wanted to create a budget in which each section 
          was stored in a different table. Perhaps budgets are by 
          department, or category. Each budget could be developed on 
          individual tables, and a summary budget table could be 
          calculated using the dynamic fetch command. Here is a simple 
          example of how that works. 
          
          Suppose you create a budget sheet for salaries which looks 
          like this... 
          
                   Budget Sheet #1 - Salaries
          
                   Employee                      Salary
                   William Carver                 50000
                   Bill Engle                     26300
                   Fred Fisher                    24000
                   Muriel Mayberry                35000
                   Annette Williams               26000
          
          
          
          
                   Total Salaries                161300
                                                                                
          The total, 161300, is in cell E13 for this example. Next you 
          create another sheet which contains expenses. It looks 
          like... 
          
                   Budget Sheet #2 - Expenses
          
                   Item                     Yearly Cost
                   Rent                        14000.00
                   Utilities                    2500.00
                   Postage                      5000.00
                   Supplies                    12000.00
                   Repairs                      3600.00
                   Telephone                    2400.00
                   Printing                     2400.00
                   Misc                         3000.00
          
                   Total Expenses              44900.00
          
          This time the total falls in cell E14. 








                                        21






           
          AC - How to Use It
          
          
          
          
          The Summary Sheet 
          
          The summary sheet is created by fetching the two totals from 
          sheet1 and sheet2 by first defining the two fetch files 
          (using function key F6) where sheet1 is file 1 and sheet2 is 
          file 2. The fetch is accomplished by placing the cursor in 
          the location where you wish the number to appear, and 
          issuing the command @(1:E13) to fetch the total from sheet1 
          and @(2:E14) to fetch the total from sheet2. The resulting 
          summary table looks like... 
          
          
                   Summary Budget Table combining Sheet1 and Sheet2
                                                                                
                                                                                
                                                                                
                   Total Salaries from sheet 1          161300.0
                   Total Expenses from sheet 2           44900.0
                                                       =========
                   Total Expenses                       206200.0
          
          
          After All is Set Up
          
          After such tables are set up, a change in one of the tables 
          sheet1 or sheet2 will result in an updated amount in the 
          summary table. These files are included on your AC diskette 
          for you to review. They are: 
          
          SHEET1 - Salary Information
          
          SHEET2 - Expenses
          
          SUMMARY - The Budget Summary Table
          
          As an example, change a value on sheet1 or sheet2, and 
          observe the update which is made in the summary table. Note 
          that the dynamic fetch (which uses the "@" command) will be 
          updated, whereas the one time fetch command (using the "!") 
          will not be updated when the original file is changed. 
          
          On the next page, observe that one of the numbers in the 
          salary table has been changed. Notice that this change has 
          caused an update of the summary table. 









                                        22






           
          AC - How to Use It
          
          
          
          
          Note The Salary Change: 
          
                   Budget Sheet #1 - Salaries
          
                   Employee                      Salary
                   William Carver                 50000
                   Bill Engle                     30000  <--Changed
                   Fred Fisher                    24000
                   Muriel Mayberry                35000
                   Annette Williams               26000
          
          
          
          
                   Total Salaries                165000  <-- New Total
          
          
          Note The Updated Summary Table
          
                   Summary Budget Table combining Sheet1 and Sheet2
          
          
          
                   Total Salaries from sheet 1          165000.0 <-- Updated
                   Total Expenses from sheet 2           44900.0
                                                       =========
                   Total Expenses                       209900.0
          
          
          
          A maximum of 20 files may be accessed at any one time with 
          the fetch command. 
          




















                                        23






          
          AC - How To Use It
          
          
          
          
                         Output to Printer or to a File
          
          Using the F9 option, you may print a table to a printer or 
          to a file. When you press F9, you will be given an 
          opportunity to specify which part of the table is to be 
          printed. A table indicates the part of the current table to 
          be printed... 
          
                PRINT CRITERIA
          
                Beginning Column         A
                Ending Column            H
                Beginning Row            1
                Ending Row               20
                ASCII code to printer    0
          
          The cursor will be located on the "Beginning Column" 
          criteria. You may enter a different column letter, or press 
          ENTER to continue to the next criteria. The ASCII code 
          criteria calls for printer codes such as 27+49, which 
          signals the printer to enter a special mode (such as 
          condensed printing). Notice that is multiple number are to 
          be send, they should be separate by plus (+) signs. 
          
          Once you have gone down to the bottom of the criteria list, 
          you may choose to: 
          
          (R)eturn to table (P)rint (F)ile (C)hange options 
          
          Return will return you to the table without printing, Print 
          will begin the printing process, File will send a "picture" 
          of the table to a file, in which you will be asked to 
          specify a file name, and Change will return you to the 
          Beginning Column criteria and allow you to change any of the 
          criteria. 
          
          If the table is printed to a file, it may be merged into 
          word processing or other programs which will read standard 
          ASCII files (such as the VersaText Word Processing System). 
          
          Two Ways to Save a Table 
          
          Please note that when a table is saved using the F2 option, 
          the S_T_R_U_C_T_U_R_E_ of the table is saved, not a picture of what 
          appears on the screen. This F9 option WILL create a file 
          containing a picture of the table. 







                                        24






          
          AC - How To Use It
          
          
          
          
                              SUSPEND CALCULATIONS
          
          
          
          This page covers an advanced feature of AC. You may skip it 
          without loss of information until you need this feature. 
          
          The Ctrl-S option, which suspends calculations, has several 
          uses. When a number of changes are to be made in the numeric 
          entries in a table, this command will permit faster 
          turnaround between "Please Wait" and "ENTER". Another use of 
          this command is illustrated as follows. 
          
          
          Constant Update 
          
          Place the cursor in A1 and enter the number 22. Now place 
          the cursor in B1 and enter the relation B1+A1. The number 22 
          will appear. Move the cursor to A1 again, and enter the 
          number 10. B1 will change to 32. In effect, B1 is adding 
          itself to A1 every time a new entry is made. Now move the 
          cursor to C1 and enter any number. Notice that B1 is again 
          updated by the 10 currently in A1, and becomes 42. This is 
          called constant update. Whenever any number is entered into 
          the table, B1 updates itself. 
          
          A Particular Use 
          
          Suppose you create an "invoice maker" as a AC table, and you 
          want to keep a running total of the day's activities. By 
          creating a constantly updating total, you can do this. 
          However, you only want the total update once per invoice. 
          Therefore, while the invoice is being written, you want to 
          suspend calculations. When the entries are all placed in the 
          invoice, you turn calculations back on, which performs the 
          invoice calculations, and updates the day's total. 

















                                        25






          
          AC - How To Use It
          
          
          
          
                              AMORTIZATION EXAMPLE
          
          An amortization table is a table which gives the amount of 
          principal and interest paid on a loan at the end of each 
          payment interval. The balance due at such time is also 
          tabled. In this example we demonstrate how AC can be used to 
          construct an amortization table. 
          
          It's Out There 
          
          To display this table on the screen, press the F2 key, and 
          specify the table MORT. The following table will be 
          displayed. 
  
  
      >---A---<>---B---><---C---><---D---><---E---><---F---><---G---><---H---
    1 :                  LOAN ANALYSIS FOR AN AMORITIZED LOAN
    2 :                                             Sched.For next 12 periods
    3 :Description.....  House Loan        Amounts  Principal     Int      Bal
    4 :========================================================================
    5 :Enter amount of loan                 65000.00    15.73   690.62 64984.27
    6 :Enter interest rate per year            12.75    15.89   690.46 64968.38
    7 :Enter number of years                   30.00    16.06   690.29 64952.32
    8 :Enter number of payments per year       12.00    16.23   690.12 64936.09
    9 :Enter number of payments (N) made           0    16.41   689.95 64919.68
   10 :---------------------------------------------    16.58   689.77 64903.10
   11 :Total number of payments                  360    16.76   689.59 64886.34
   12 :Amount of payment                      706.35    16.93   689.42 64869.41
   13 :Number of payments remaining              360    17.11   689.24 64852.30
   14 :Payoff bal after       0.00th pmt.   65000.00    17.30   689.05 64835.00
   15 :Total amount paid to date                0.00    17.48   688.87 64817.52
   16 :Principal paid to date                   0.00    17.67   688.69 64799.86
   17 :Interest paid to date                    0.00  ======= ======== ========
   18 :                   AMORTIZATION TABLE TOTALS    200.15  8276.06   NA
  
  
          The table as it now appears shows the monthly payment 
          required to payoff a $65000 loan in 30 years. It also shows 
          the total principal and interest paid, and gives a twelve 
          month amortization schedule. Note that all of the rows above 
          the single dotted line allow an entry on your part so that 
          you can obtain all of the information below the line for a 
          variety of loan amounts, interest rates, length of loan, 
          etc. To see this, change the loan above from monthly 
          payments (12 payments a year) to quarterly payments (4 
          payments per year) by changing the number on line eight from 
          12 to 4. 






                                        26






          
          AC - How To Use It
          
          
          
          
          
          Enter Your "Favorite" Loan 
          
          Use this table to enter your favorite loan amount. Recall 
          that you may only change numbers ABOVE the dashed line. 
          Changing values below that line will destroy the 
          relationships set up to perform these calculations. Of 
          course, if you do this by mistake, you may always get the 
          table again using the F2 key. 
          
          
          
          The Formula 
          
          This table is based on the following formula: 
          
                                  i
                      P=  A* ------------
                                     -n
                              1-(1+i)
          
          where P is the payment, A is the amount borrowed, n is the 
          number of payments, and i is the interest rate per pay 
          period. If you are mathematically inclined, review the 
          relations table to see if you can follow the steps in 
          calculating P from the above formula. 
          
          
          
          Principal and Interest 
          
          Row 16 contains principal paid to date as specified by the 
          number of payments given in row 9. Similarly, interest to 
          date is in row 17. To find total interest, enter the total 
          number of payments in row 9. (This number is calculated for 
          you in row 11). 

















                                        27






          
          AC - How To Use It
          
          
          
          
                              Balloon Note Example
          
          
          
          In the previous example, we demonstrated how AC can be used 
          to build an amortization schedule. This is a good example of 
          how AC can be used to tabulate virtually any finance 
          problem. This example is similar, except that it allows you 
          to choose the payment you want, which forces the last 
          payment to be a "balloon" payment (the payoff). This is 
          popular among used car salesmen. Any number above the dashed 
          line may be changed. 
          
          
  LOAN ANALYSIS FOR AN AMORITIZED LOAN,N-1 EQUAL PAYMENTS ,1 UNEQUAL PMT.
  Description:      Joe's Used Car (1964 Studebaker)
  
  ========================================================================
  Enter amount of loan                           1400.00
  Enter interest rate in % per year                18.00 %
  Enter number of years(N)                          2.00
  Enter number of payments per year                12.00
  Enter amount of equal payment                    50.00
  Enter number of equal pmts. made to date          1.00
  ------------------------------------------------------------------------
  Total number of equal payments                   23.00
  Number of equal payments remaining               22.00
  Amount of final payment                         619.63
  Payoff bal after       1.00th equal pmt        1371.00
  Total amount paid to date                        50.00
  Principal paid to date                           29.00
  Interest paid to date                            21.00
  
  
          Notice that for a loan on a 1964 Studebaker from Joe's Used 
          Car Sales, we have selected a monthly payment of $50.00 on a 
          2 year loan. The "Amount of final payment" is 619.63. This 
          is the balloon payment which is due as the 24th payment. 















                                        28






          
          AC - How To Use It
          
          
          
          
                            Household Budget Example
          
          
          
          Finally, the last example explained in this manual is named 
          BUDGET. This table is a simple example of how you could plan 
          a household budget using AC. 
          
                            Example of Monthly Budget Table
                                                                                  
          Amount available for this month's use is...    2000.00
          
           Loan Payments                   Bills
          House       450.00         VISA        150.00
          Car         150.00         M.C.         35.00
          Home Imp    125.00         Elect.       78.23
          Furn.        56.75         Water        14.44
                                     Gas          33.23
                                     Phone        43.55
          
          
          
                   ---------                  ---------
          Subtot#1    781.75         Subtot#2    354.45
          
          Total amount of money needed to pay bills=     1136.20
          
          Amount of money available after bills paid=     863.80
          
          
          This is a simple table to produce. Each column of payments 
          is summed using SUMCOL. The "Total amount needed" is the sum 
          of each column, and the "Amount available after" is the 
          amount available minus the amount spent. 



















                                        29






          
          AC - How To Use It
          
          
          
          
                           Editing the Relations Table
          
          
          
          The F4 function key displays the list of relations currently 
          established in a table. They could be thought of as a simple 
          computer program. While creating a table, it may be 
          necessary to alter this list of relations to achieve the 
          desired results. Two options are available to do this. 
          
          
          COPY RELATIONS 
          
          The F4 option allows you to copy an existing relation 
          anywhere in the relations list. If, for instance, you wish 
          to copy sixth relation so that it appeared as the third 
          relation, you may do so. This will cause the existing third 
          relation to be moved to four, four to five, etc. Thus, this 
          procedure allows you to rearrange the relations so they will 
          take place in the desired order. The copied relation remains 
          in the table. 
          
          
          DELETE RELATIONS 
          
          Another editing feature is the ability to delete relations. 
          This may be done by deleting one relation, or a range. After 
          choosing DELETE in the F4 option, you may enter a single 
          number, such as 6, or a range of numbers such as 6-12. After 
          deleting, relations below the deleted relations are moved up 
          an appropriate amount so that the relations always remain in 
          an unbroken consecutive order. 
          
          
          As you become more familiar with AC, these editing features 
          will allow you to create and edit complex tables with ease. 

















                                        30






           
          AC - APPENDICES
          
          
          
          
                                When Errors Occur
          
          
          
          When an error is encountered, the following type of notice 
          will appear on the screen. 
          
          Error Detected     Number 61    Reference 1000 
          
          This indicates that the program has encountered a barrier to 
          execution. Many times by simply pressing the ENTER key, the 
          program will recover. 
          
          If the program does not recover, please make a note of the 
          error number and reference. The meaning of the error codes 
          may be found in the IBM Personal Computer BASIC manual, 
          appendix A. For instance, code 61 indicates that the 
          diskette on which a file is to be stored is full. Most 
          errors such as this may be corrected by simple action on 
          your part. 
          
          If a puzzling error occurs, please make a note of the number 
          and reference, and contact Mission Technologies by mail. The 
          following is an abbreviated list of error codes. 
          
          
                                  Common Errors
          
          24- Device Timeout (Printer is off)
          25- Device Fault (Printer has malfunctioned)
          27- Out of Paper
          61- Disk full (diskette has used all available space)
          67- Too many files (diskette contains maximum number of files)
          70- Disk Write Protected
          71- Disk Not Ready (Is the drive door closed?)
          72- Disk Media Error (Your diskette may be bad)
          
          It is possible to define impossible mathematical relations 
          such as 10/0, which may cause an "overflow" or "undeflow" 
          error. If recovery is not possible, you may press CTRL-Break 
          to end the program, or CTRL-Alt-Del to reboot. 












                                        31






           
          AC - APPENDICES
          
          
          
          
                                 SPECIFICATIONS
          
          
          
          1) Maximum number of relations: 200 
          
          2) Maximum number of "fetch" files defined at any one time 
          is 20. 
          
          Extensions to names 
          
          When a table is saved without a filename extension, the 
          extension ".AC" is attached. Also, when a table is requested 
          in a "GET", the filename extension ".AC" is assumed when 
          none is given. A name may be given an extension such as 
          "TABLE.EXT", and it will be saved and retrieved as such. 
          When a default disk is specified in the INITIAL program, the 
          names of tables with the extension ".AC" will automatically 
          be displayed on the screen when a "GET" or "DIRECTORY" is 
          requested. 

































                                        32






           
          AC - APPENDICES
          
          
          
          
                       Setting up the initialization file
          
          
          The fil AC.INI may be created, which will tell Calc which 
          default disky to use for storage, and what colors to use in 
          the program 
          
          Default Disk 
          Once a default diskette is defined, all saves and gets will 
          automatically assume that the table to get or save is on the 
          default diskette. Thus, if the default disk is B, you may 
          get the table "TABLE" instead of having to request 
          "B:TABLE". This may be overridden at any time by use of the 
          disk specification such as "A:TABLE". The default disk may 
          be changed by pressing the "OPTIONS" (F5) key. 
          
          COLORS 
          The INI file specifies the colors for... 
          
                      1. The table outline.
                      2. Negative numbers.
                      3. Positive numbers.
                      4. Text.
          
          You may, for instance choose to display negative numbers as 
          red on a color monitor, or in high intensity on a monochrome 
          monitor. You may change these color choices at any time 
          without affecting the operation of the table (except for 
          color). 
          
          To create the AC.INI file, use a standard ASCII text file 
          editor such as Alan's Editor or EDLIN. The first line in the 
          file should continan the letter of the default disk, such as 
          B or C. The following four lines should contain four color 
          indications for the specifications above. Each color 
          specification is two numbers separated by a comma. Look up 
          what colors are available in your BASIC manual, under the 
          COLOR statement. For example, your file may look like this: 
          
          C
          0,7
          0,7
          7,0
          7,0









                                        33






           
          AC - APPENDICES
          
          
          
          
                                       INDEX
   
   
   
   AMORTIZATION EXAMPLE         26        PRINT                    12,24
   ARITHMETIC RELATIONS         8         PRINTER CODES            24
   BACKUPS                      4         RELATIONS                6,10,15,18
   BALLOON NOTE                 28        REQUIREMENTS             3,32
   BUDGET                       29        REVIEW RELATIONS         11
   CELL                         6         ROW COPY                 13
   CHECKBOOK                    19        SAVE                     11,24
   COLOR                        33        SPECIFICATIONS           32
   CONTROL COMMANDS             12,13     STOP                     5
   COPY                         13,30     STRUCTURE                6,17
   DELETE                       13,30     SUMCOL                   8,17
   DEFAULT DISK                 32,33     SUMROW                   8
   DYNAMIC FETCH                20,21     SUSPEND CALCULATIONS     13,25
   EDITING RELATIONS            30        TEXT MODE                10,11
   END                          11        TUTORIAL                 14
   ERRORS                       4,31      VERTICAL MOVES           12,14
   FETCH FILES                  10,20
   FORMAT                       12,16
   FUNCTIONS                    8
   FUNCTION OPTIONS             11,12
   GET                          11
   HORIZONAL MOVE               12
   INSERT                       13
   INITIAL SETUP                4,33
   LINKING TABLES               20-23
   LOANS                        26-28
   ONE TIME FETCH               20
   ORDER OF CALCULATION         18
   OUTPUT TO DISK FILE          24
   



















                                        34






           
          AC - APPENDICES
          
          
          
          
               ORDER FORM AND REQUEST FOR REGISTRATION - Alan's Calc
   
   I want to be on the mailing list for new Mission Tech-
   nologies Programs. I am enclosing registration fee
   (contribution suggested at $35) in the amount of $________.
   
   If paying by Credit Card: check      _____VISA  ______MC
   
   Card Number:__________________________ Exp Date:_____________
   
   Signature:___________________________________________________
   
   Check if applicable:
   ______ Send information on site licenses.
   ______ Send information on source code license.
   
   
   NAME:____________________________________________________
   
   ADDRESS:_________________________________________________
   
   CITY:_____________________STATE:_________ZIP:____________
   
   PHONE #:_________________________________________________
   ------------------------------------------------------------------
   Comments and suggestions:(Attach extra sheet if necessary)
   
   
   
   
   
   
   
   
   
   
   ------------------------------------------------------------------
   Send to :Mission Technologies
            PO BOX 1169
            Cedar Hill, TX 75104
   
   Phone:214-291-2115 (We cannot return long distance phone
   calls, but we can take VISA and MC orders over the phone.)
   If requesting technical help, please send a self addressed
   return envelope, and we will reply as soon as possible.








                                        35


```
{% endraw %}

## AE.DOC

{% raw %}
```





          
          
          
          
          
          
          
          
          
                                  ALAN'S EDITOR
          
          
          
                            (C) Alan C. Elliott, 1985
                              Mission Technologies
                                  P.O. Box 1169
                             Cedar Hill, Texas 75104
          
          
          
          
          
          C_O_N_D_I_T_I_O_N_S_:_ 
          
          This program is made available through the "user supported" 
          concept. You may copy and distribute this program, but 
          neither it nor any of the documentation may be altered. The 
          program may not be distributed commercially except as a part 
          of a PC user's group or similar organization. 
          
          You are encouraged to contribute to the support of this 
          program ($35 suggested). This will make you a registered 
          user, and will put you on the update and newsletter mailing 
          list. Site licenses, and source code licenses are also 
          available. Please refer to the order form at the back of 
          this manual. 
          
                          DESCRIPTION of Alan's Editor
          
          Alan's Editor (or AE for short) is a standard ASCII text 
          editor. This means that it creates standard text files, 
          which can be read by most computer programs. It is suitable 
          for writing source code (FORTRAN, etc), for writing BATCH 
          files (.bat), creating data files, and for creating memos 
          and documents to print or merge with other programs, In 
          essence, AE makes the computer screen into a notepad. You 
          can type text onto the screen -- copy it -- delete it -- or 
          save it for future use. 
          
          PREPARING TO USE AE 
          
          The only files required to use AE are the files named AE.EXE 
          and AE.HLP. Note that you MUST include AE.DOC whenever the 
          program is distributed. However, we will see that there is 
          another file, which you can create, which sets up default 
          values for storage disk, tab settings, and colors. 



                                        1






          
          Alan's Editor
          
          ____________________________________________________________
          
          
          
          Use on Floppy 
          
          To setup AE for use on a floppy, first format a floppy disk 
          with the "/S" option. Then copy the files AE.EXE, AE.DOC, 
          and AE.HLP to the newly formatted diskette. Set up the 
          initialization files as indicated later in thes manual, 
          usually specifying disk "B" as the storage diskette. 
          
          Use on Hard disk 
          
          To use AE on a hard disk, copy the files AE.EXE to the hard 
          disk (usually to the ROOT directory) AE.EXE can be placed in 
          any directory (such as ROOT) if the paths are properly set 
          (See the DOS manual). However, AE.HLP must be in the ROOT 
          directory. Also, see the section on how to set up 
          initialization files. With AE in the ROOT directory, the 
          PATH should at least be "PATH \;\". 
          
          To begin the AE program (here from disk C), enter 
          
          C>AE 
          
          Optionally, if you are editing an existing document, you may 
          give the command: 
          
          C>AE FILENAME 
          
          Where "FILENAME" is the name of the file to edit. You will 
          first see the Mission Technologies screen describing the 
          basics of how the program is made available. Press ENTER. 
          You will now be asked to enter the letter of the storage 
          drive. This refers to the drive which AE will use for its 
          temporary buffer space, and will also specify where you will 
          probably store the resulting file. It must be one character 
          in length. For a hard disk user, the answer will probably be 
          "C". For a two floppy user, the storage disk is most likely 
          going to be "B". 
          
          You will now see the AE title screen. Press enter, and you 
          are in the editor. Let's examine the screen. The phrase: "F7 
          is HELP" is at the upper left. Directly underneath the "F" 
          in F7 notice the blinking cursor. This cursor indicates the 
          location at which text can be entered. The number 1,1 
          appears next to the HELP, indicating the position of the 
          cursor, line 1, column 1. 
          
          A vertical mark on the top and bottom of the screen 
          indicates the screen line length. This line length is 
          usually initially set at 60 columns. This can be changed. 



                                        2






          
          Alan's Editor
          
          ____________________________________________________________
          
          
          You may enter text onto this blank screen in much the same 
          way as you would with a typewriter. A maximum of 22 lines of 
          text can be displayed on the screen at any one time. 
          
          In this manual, we will discuss three kinds of commands 
          which allow you to manipulate text within AE. They are 
          
                 Numeric Keypad Commands
                 Function Key Commands
                 Control Commands
          
          Description of these commands are illustrated in Lessons 1 
          to 3 in this manual. 
          
          
          
          
                             Numeric Keypad Commands
          
          
          The numeric keypad is located on the right side of the IBM 
          PC keyboard. Note that under the numerals on these keys is a 
          word, abbreviation, or symbol. During the operation of AE, 
          the numeric keypad is in what we call "cursor mode". By this 
          we mean that pressing one of these keys will produce the 
          action indicated at the bottom of the key rather than type 
          the number. If a number is to be entered, use the keys on 
          the top row of your PC keyboard. A description of the cursor 
          mode actions of the numeric keypad follows. 
          
          
          Home - Puts the cursor in the upper left hand 
                 corner of the screen. 
                 
          Arrow Keys (right, left, up, down) - Moves the 
                 cursor in the direction indicated by the 
                 arrow. 
                 
          End - Moves the cursor to the end of the current 
                 line. 
                 
          PgUp (Page Up) - Moves 11 lines toward the front 
                 of the document. Recall that only 22 lines 
                 of a document can be displayed at any one 
                 time. PgUp allows you to display a new 
                 screen in which the 11 lines immediately 
                 preceding the text on the original screen 
                 are located as the first 11 lines of this 
                 new screen followed by the first 11 lines 
                 of the original screen. 



                                        3






          
          Alan's Editor
          
          ____________________________________________________________
          
          
                 
          PgDn (Page Down) - Moves 11 lines forward in the 
                 document. 
                 
                 NOTE:by moving the cursor to the bottom of 
                 the screen, and pressing the down arrow key 
                 makes the document scroll one line at a 
                 time. Moving to the top of the screen, and 
                 pressing the up arrow makes the screen 
                 scroll down one line at a time. 
                 
          Del - Deletes the character at which the cursor is 
                 located. CTRL-End does the same thing. 
                 
          Ins - Turns on the character insert mode. 
                 Characters typed in will be entered 
                 directly preceding the cursor location. As 
                 each character is entered, a space is 
                 created in which that character can be 
                 inserted. Pressing the "Ins" key again or 
                 pressing the ENTER key will turn off 
                 insert mode. Note that when you are n_o_t_ in 
                 insert mode, typing a character will 
                 r_e_p_l_a_c_e_ the character which was located at 
                 the cursor position. 
                 
                 
                 
                          Three Special Keys
          
          
          Three other keys on the IBM PC keyboard have 
          special functions in AE. 
                 
          Destructive Backspace <--- - this is the arrow key 
                 on the top row of keys and directly to the 
                 right of the "=" key. It moves the cursor 
                 one column to the left and d_e_l_e_t_e_s_ the 
                 character located there. 
                 
          Tab -->| - Moves the cursor to the next tab 
                 position as indicated by the "T"'s on the 
                 highlighted bar at the bottom of the 
                 screen. (pressing CTRL-K) several times 
                 will eventually display these tab settings. 
                 Note that tabbing to the left is not 
                 currently supported. If no tab marks are 
                 set, they may be set with the CTRL-T 
                 command in AE, or may be included in the 
                 initialization file (described later). 



                                        4






          
          Alan's Editor
          
          ____________________________________________________________
          
          
                 
          Esc - End: Allows you to end the editor. A message 
                 will appear at the bottom of the screen to 
                 double check your motives. You file will 
                 NOT be saved. 
                 
                 
                             Function Keys
          
          
          The 10 keys marked F1-F10 on the left side of the 
          keyboard are called function keys. They have been 
          programmed so that they produce certain actions 
          within AE. 
          
          
          F1 - Save: Stores the current working file onto a 
               disk. After pressing the F1 key, you will be 
               prompted to enter a document name. Simply 
               pressing ENTER without any filename will 
               return you to the screen editor without 
               saving the file. 
               
          F2 - Get: This allows you to access a previously 
               saved file. You will be asked to enter the 
               name of the file at the bottom of the screen. 
               AE will then display the first 22 lines of 
               the document on the screen, and you are ready 
               to edit. Pressing ENTER without giving a file 
               name will return control to the screen, i.e. 
               to the screen editor with the current working 
               document. If you already have a document in 
               the editor when you do a get, it will append 
               the new document onto the old one at the end 
               of the buffer. 
               
          F3 - Top: Cursor moves to top of current 
               workspace.  If none of the document has been 
               "buffered out", this will be the top of the 
               document. See an explanation of "Buffering 
               Out" later in this manual. See also CTRL-F3. 
               
          F4 - Bottom: Cursor moves to the last line of the 
               workspace. See CTRL-F4. 
               
          F5 - Delete: Deletes a specified number of lines 
               beginning at the line on which the cursor is 
               located. You will be prompted to enter the 
               number of lines to delete. Entering 0 (or 
               nothing) will delete no lines. 



                                        5






          
          Alan's Editor
          
          ____________________________________________________________
          
          
               
          F6 - Insert: Inserts 1 to 10 blank line(s) above 
               the cursor. If more blank lines are needed, 
               simply repeat the process. 
               
          F7 - Help: Provides status information, and allows 
               you to request a directory of files on disk 
               and to delete files. 
               
          F8 - Clear: Clears current workspace, leaving you 
               with a blank screen. Note that the current 
               working document will be lost when the 
               workspace is cleared without first saving the 
               document using the F1 command. However, the 
               text in the copy buffer (see the F9 key) is 
               not lost when the workspace is cleared. This 
               can be used to move information from one file 
               to another. See F9 below. 
               
          F9 - Mark: Used to mark blocks of text for 
               copying. To mark text for copying, move the 
               cursor to the upper left corner of the 
               rectangular block to be copied, and Press F9. 
               The mark will be noted by a character in 
               reverse video. Move the cursor to the last 
               line of the text to be copied, and then move 
               it to the right at least as far as the length 
               of the longest line to be copied. The block 
               of text will be highlighted in reverse video. 
               Note that text in the copy buffer is not 
               destroyed when the F8-Clear command is 
               issued. This provides a method of 
               transferring blocks of text from one file to 
               another. Marks must be made on ONE screen. 
               The maximum size of a copy buffer is one 
               screen (22 lines). 
               
          F10- Copy: Used to copy a marked rectangular block 
               of text (see F9 - Mark). Moving the cursor to 
               the position where you wish to insert the 
               text previously marked using the F9 command 
               and pressing F10 will insert the text in the 
               desired position by first inserting enough 
               blank lines for it to fit. A copy which does 
               not insert before copying is CTRL C, 
               explained later. 







                                        6






          
          Alan's Editor
          
          ____________________________________________________________
          
          
               
               
               
               
                        Control Commands (CTRL)
          
          
          Control commands are issued by pressing the CTRL 
          key like a shift key, and then simultaneously 
          pressing a single command key such as a D, W or F. 
          Below is a list of the available control commands: 
          
          CTRL C - Is similar to the F10 function key. 
                   However, instead of first inserting blank 
                   lines before making a copy, CTRL C will 
                   place the copied text in the position 
                   specified by the cursor, directly over 
                   any text that may happen to exist there. 
                   
          CTRL D - Deletes all characters on the current 
                   line which are to the right of the 
                   cursor. If the cursor is in column one, 
                   the entire line will be deleted, and any 
                   text below that line will be moved up on 
                   the screen. 
                   
          CTRL F - This command "fills" the text from the 
                   current line to the next blank line which 
                   starts with a dot "." Each line is filled 
                   with as many words as will fit while 
                   observing the current line length 
                   specifications. 
                   
          CTRL K - The horizontal highlighted bar at the 
                   bottom of the screen which initially 
                   displays copyright information. 
                   Successively pressing CTRL K will display 
                   the function key commands, CTRL commands, 
                   and tab settings. 
                   
          CTRL L - This command may be used to reset the 
                   line length specifications within AE. 
                   After pressing CTRL L, you will be 
                   prompted to enter the new line length. 









                                        7






          
          Alan's Editor
          
          ____________________________________________________________
          
          
                   
          CTRL P - Places text on the current line in 
                   centered position with respect to the 
                   line length specifications. 
                   
          CTRL R - This command allows you to replace text 
                   on the screen. After pressing CTRL R, you 
                   will notice a request at the bottom of 
                   the screen which says "Old/New". Enter 
                   the string of characters to be replaced , 
                   followed by a "/", and the new string of 
                   characters. For example, responding to 
                   the request with wrong/right would result 
                   in the replacement of the word "wrong" 
                   with "right". Each "wrong" will be 
                   highlighted on the screen, and you will 
                   be able to replace, skip, end the replace 
                   procedure, or select the replacement of 
                   all further occurrences of "wrong" with 
                   "right" without any more prompting. After 
                   checking the first screen for matches, 
                   you will be prompted to indicate if you 
                   want the replace to continue. Enter Y or 
                   N. 
                   
          CTRL S - Will search for a specified text. You 
                   will be prompted to enter the text to be 
                   located. Each time this text is matched, 
                   it will be highlighted on the screen. The 
                   search is conducted from the beginning of 
                   the current workspace to the end of the 
                   current workspace. (See "Buffering Out" 
                   in this chapter). 
                   
          CTRL T - Allows you to reset the tab settings by 
                   entering up to 20 column numbers at which 
                   you wish the tabs to be set. These column 
                   numbers should be entered from smallest 
                   to largest, should be separated by 
                   semicolons, and none should exceed the 
                   line length. 
                   
          CTRL W - Deletes text from the position of the 
                   cursor to the next blank. This is usually 
                   used to delete a word. 
                   
          CTRL X - Splits a line at the position of the 
                   cursor, and places the text to the right 
                   of the cursor on the next line. This 
                   should be used for inserts of more than 



                                        8






          
          Alan's Editor
          
          ____________________________________________________________
          
          
                   several characters. 
                   
          CTRL F3 - Goes to top of document. This is the 
                   same as F3, if no buffering has been 
                   done. 
                   
          CTRL F4 - goes to bottom of document. This is the 
                   same as F4 is document is short. 
                   
          
          
                          SUMMARY OF COMMANDS
          
                               BY ACTION
          
          
          
          Cursor Movement 
          
          Arrows    - move cursor in direction indicated
          Home key  - move cursor to upper left of screen
          End key   - move cursor to end of current line
          (Tab)     - move cursor to next tab stop
          
          
          Delete
          
          Del key - delete character
          CTRL W  - delete word
          CTRL D  - delete to end of line (Also CTRL-END)
          F5      - delete line(s)
          <--     - destructive backspace
          
          
          Insert
          
          Ins key - insert character(s)
          F6      - insert line(s)
          
          
          Screen Formatting
          
          CTRL F - fill text
          CTRL L - set line length
          CTRL P - place text in center of screen
          CTRL T - set tab stops
          
          





                                        9






          
          Alan's Editor
          
          ____________________________________________________________
          
          
          Movement within document
          
          F3   - move to top of buffer
          F4   - move to bottom buffer
          CTRL-F3 - move to top of document
          CTRL-F4 - move to bottom of document
          PgDn - page down 11 lines
          PgUp - page up 11 lines
          
          
          Search and Replace
          
          CTRL S - search for text string - global to end
          CTRL R - replace text string - can be global to end
          
          
          Block copying
          
          F9     - mark text to be placed in rectangular copy buffer
          F10    - copy rectangular block - non destructive
          CTRL C - copy rectangular block - destructive
          
          
          Document storage and retrieval
          
          F1 - save current working document
          F2 - get document from disk for editing
          
          
          Miscellaneous
          
          CTRL K - change help key at bottom of screen
          CTRL X - split line
          F7     - help
          F8     - clear workspace
          Esc key- end Alan's Editor
          
          
                     Text Buffering and Scrolling
          
          The AE screen displays 22 lines of text at a time. 
          The PgUp and PgDn keys allow you to page up and 
          down a document to find the area with which you 
          wish to work. AE was designed so that any 
          document, no matter how long, could be edited. If 
          all text cannot be in memory at one time, it is 
          necessary to bring in a piece of the document at a 
          time. 
          
          



                                        10






          
          Alan's Editor
          
          ____________________________________________________________
          
          
          
          
                              "Buffering"
          
          Occasionally, you will hear a BEEP, and a message 
          will appear on the screen: "Buffering...please 
          wait". This indicates that part of the document is 
          being sent to a storage buffer (called FILE1.AE on 
          the disk in the default drive) in order to make 
          more space for additional text to be entered. This 
          means that when you issue the F3-top command, you 
          may not return to the top of the document, but 
          rather you will return to the top of the current 
          workspace. What if you want to go back to the 
          beginning of the d_o_c_u_m_e_n_t_ to make some additional 
          changes? Use CTRL-F3. 
          
          
          
          
                            File Structure
          
          When a "SAVE" takes place, the current working 
          document is written entirely into FILE1.ae which 
          was discussed previously. You are asked to specify 
          a name for the document which you are saving - 
          let's call it MYFILE.DOC. If MYFILE.DOC already 
          exists, you are asked if you want to replace its 
          contents with the new text. If you respond "N" 
          then the Save does not take place. If you respond 
          "Y", then the previous contents of MYFILE.DOC are 
          written to the backup file MYFILE.BAK, and finally 
          the contents of FILE1.AE are written to 
          MYFILE.DOC. The backup file (filename.BAK) that is 
          created when a document is saved, is a method of 
          retrieving a file as it was before being edited. 
          Notice, however, that the backup files for 
          MYFILE.DOC and MYFILE.LET have the same name, and 
          so the contents of MYFILE.BAK will depend on which 
          of these two files was the last one to be edited. 
          If many files are being created, you may need to 
          erase unneeded backup files to avoid running out 
          of disk space. 
          
          








                                        11






          
          Alan's Editor
          
          ____________________________________________________________
          
          
                              BE CAUTIOUS
          
          Text being created and changes being made to an 
          existing file are stored in memory until the F1 
          "Save" command is issued. So, a power failure or 
          human error could cause you to lose this 
          information. We recommend that you issue the F1 
          "Save" command periodically to protect your work. 
          
          
          
                           TUTORIAL LESSONS
          
          The remainder of this manual will be devoted to 
          three lessons to give you a better understanding 
          of the screen editing commands. We recommend that 
          you go through these lessons before attempting to 
          use AE to create your own files. 
          
          
                               LESSON 1
          
          This lesson will cover most of the function keys. 
          Additional keys will be covered in Lesson 2. Enter 
          Alan's Editor with the command: (The C> prompt is 
          assumed) 
          
          C>A_E_ 
          
          Enter the follow text, exactly as it appears here. 
          Do not type the borders. 
          
           ---------------------------------------------------------
          |                    Lesson One                           |
          |This text will help you learn about Alan's Edit.         |
          |We will learn how to use most of the functn keys.        |
          |                                                         |
          |These two lines will be copied to other locations        |
          |within this file using the F10 and CTRL C commands.      |
          |                                                         |
          |We will learn how to delete this line.                   |
          |                                                         |
          |When text is copied using the F10 command, text at the   |
          |location to which it is being copied is not destroyed.   |
          |However, when CTRL C is used to copy a block of text to  |
          |a new location, it replaces the text there.              |
          |                                                         |
           ---------------------------------------------------------





                                        12






          
          Alan's Editor
          
          ____________________________________________________________
          
          
          
          
          E_n_d_i_n_g_ _A_E_ _-_ _E_s_c_ 
          
          Press the Esc key.  You will hear a BEEP. Notice 
          the following request at the bottom of the screen 
          where you are asked to choose: 
          
          (S)ystem or (R)eturn to Edit 
          
          This time answer the request by typing an "R" -- 
          no need to press the ENTER key. "S" would have 
          returned you to the DOS system. 
          
          D_e_l_e_t_i_n_g_ _l_i_n_e_s_ _(_F_5_)_ 
          
          The F5 key deletes lines of text.  Move the cursor 
          to the "W" in "We..." in the fourth sentence of 
          the text on the screen. Press the F5 key. You will 
          be asked how many lines to delete. You may enter 0 
          or more. This time enter 1, and press ENTER. The 
          entire line is deleted. (See also CTRL D). 
          
          I_n_s_e_r_t_i_n_g_ _c_h_a_r_a_c_t_e_r_s_ _(_I_n_s_)_ 
          
          Did you notice that the word "function" is 
          misspelled in the example? This can be corrected 
          by moving the cursor to the second "n" in "functn" 
          and pressing the "Ins" key which is located below 
          the numeric pad. Notice the blinking message at 
          the top of the screen. This means that characters 
          entered will be inserted. Insert the missing "i" 
          and then the "o". Pressing the "Ins" key again 
          will turn off the insert mode. The insert mode is 
          meant for SMALL insertions of one or several 
          characters. Otherwise, use the F6 key to insert 
          blank lines before adding text or the CTRL X 
          command to split a line at the point new text is 
          to be added. 
          
          I_n_s_e_r_t_i_n_g_ _l_i_n_e_s_ _(_F_6_)_ 
          
          You may insert whole blank lines by using the F6 
          function key. Move the cursor to the beginning of 
          the second line. Press the F6 key. You will hear a 
          BEEP, and see the following request at the bottom 
          of the screen: 
          
          Insert how many lines (1-10):_ 
          



                                        13






          
          Alan's Editor
          
          ____________________________________________________________
          
          
          You may insert up to ten blank lines.  Type a "2" 
          and press the ENTER key. Notice the insertion of 
          the blank lines on the screen. You may type 
          additional text into these blank lines. Note: 
          Since the keypad is in function mode during screen 
          editing, DO NOT use the numeric keypad to enter 
          numbers during edit -- use the numbers at the top 
          of the keyboard. By using F6 more than once, you 
          may insert more than 10 blank lines. 
          
          
          Marking text for copy (F9) 
          
          Copying text is a two step process.  First, mark 
          the text you wish to copy and then specify the 
          location in the text at which you want the marked 
          text to be copied. To mark the text, we specify 
          the upper left hand corner and lower right hand 
          corner of the text. Move the cursor to the "T" in 
          "These" in the third sentence. Press the F9 
          function key. The "T" will be displayed in reverse 
          video. Move the cursor to the period at the end of 
          the sentence and press the F9 key again. Notice 
          that a block of text is highlighted. The text in 
          the highlighted rectangular box is now in the copy 
          buffer and can be copied to other locations using 
          the F10 and CTRL C commands. It will remain there 
          until pressing the F9 key again starts a new pair 
          of marks, or until you "End" editing. It should be 
          mentioned that copy blocks are always rectangular, 
          and the largest possible block is 22 lines by the 
          current line length. 
          
          M_o_v_i_n_g_ _T_e_x_t_ 
          
          To move text, simply perform a copy, and then 
          delete the old text. 
          
          
          Copying text (F10 and CTRL C) 
          
          Move the cursor to the line that begins with "When 
          text..." and press the F10 function key. This 
          copies the contents of the copy buffer to the 
          location specified by the current position of the 
          cursor. Notice that the text at the location where 
          the text is being copied is not destroyed. Now, 
          move the cursor to the "H" in "However,..." and 
          enter CTRL C. The two lines of text which formerly 
          occupied this position in the file have been 



                                        14






          
          Alan's Editor
          
          ____________________________________________________________
          
          
          replaced by the text in the copy buffer. Notice, 
          however, that characters in these lines which 
          extend beyond the rectangular copy block, still 
          remain. These may be deleted by using, for 
          example, the "Del" key discussed in Lesson 2. 
          
          
                               LESSON 2
          
          
          This lesson will cover the use of the function 
          keys F1, F7, F8, the "Home" and "Del" keys. First, 
          clear the edit screen by pressing g F*, and 
          answering "Y". 
          
          
          Next, enter the text exactly as it appears below: 
          
           ---------------------------------------------------------
          |                      Lesson Two                         |
          |                                                         |
          |In this lesson, we will learn about saving a document for|
          |future use, the "Help" key, the character ddelete, and   |
          |about the Home key.                                      |
           ---------------------------------------------------------
          
          
          C_h_a_r_a_c_t_e_r_ _D_e_l_e_t_e_ _(_D_e_l_)_ 
          
          Notice that there is an extra "d" in the word 
          "delete". Move the cursor (using the arrow keys) 
          to the first "d" in "ddelete". Locate the key 
          below the numeric pad labeled "Del". Press the 
          "Del" key once, and notice that the extra "d" has 
          been deleted. 
          
          
          
          Saving a Document (F1) 
          
          After creating or correcting a document, we will 
          have to save it in order to use it again. To do 
          this we will use the F1 "Save" function key. Press 
          the F1 key once, and you will hear a BEEP, and see 
          a request at the bottom of the screen. You must 
          now enter a name for the document to be saved. For 
          this example, we will name our file LESS2.TMP to 
          remind us that it is from Lesson Two, and that it 
          is temporary (we will delete it later). See your 
          DOS manual for a discussion of filenames. Type in 



                                        15






          
          Alan's Editor
          
          ____________________________________________________________
          
          
          LESS2.TMP and press the ENTER key. Again we are 
          assuming here that this file is to be written to 
          the disk in the default drive. Otherwise, the disk 
          must be specified, i.e. A:LESS2.TMP or 
          B:LESS2.TMP. You will asked whether you want to: 
          
             (R)eturn to Editor or goto (S)ystem 
          
          This time enter "R" which will return you to the 
          screen editor so that you may continue working on 
          the current document. Note: If more changes are 
          made to the document, it will have to be saved 
          again in order for these additional changes to be 
          recorded. 
          
          
          
          Clearing the Workspace (F8) 
          
          The next function key we will discuss is the F8 
          "Clear" key. This key lets you clear the current 
          working document from the workspace, and starts 
          you all over. BE CAREFUL in choosing to clear your 
          space -- if you have not saved your text with the 
          F1 key, it will be lost. Okay, you want to start 
          all over, so press the function key F8 once. You 
          will be asked (at the bottom of the screen) "Are 
          you sure?" Answering "N" will cancel the request, 
          and an answer of "Y" will cause the clearing to 
          take place. The text on the screen will vanish, 
          and you will see a new blank screen. Text in the 
          copy buffer will NOT be lost. Now, press the F2 
          key, and get the document "LESS2.TMP". This is the 
          file you saved earlier. 
          
          Help (F7) 
          
          The last function key you will learn about in this 
          chapter is F7, the "Help" key. Press the F7 key, 
          and you will see a screen with the following text: 
          
          
        To change key at bottom of screen, press CTRL-K while in Edit mode
        









                                        16






          
          Alan's Editor
          
          ____________________________________________________________
          
          
        Please Choose:
        
               (R)eturn to screen           (S)how files
               (D)elete a file              (H)elp
        
        
        Choice:
        
        
          The top of the screen reminds you that while in the edit 
          mode, the CTRL K command can be used to obtain brief 
          summaries of the Function and CTRL commands. You are 
          presented with four choices. Press "H" top request that the 
          AE help screens be displayed. These screens display an 
          summary of AE's commands. After looking that these, you 
          return to help mode. 
          
          Now enter "D" to which the computer will respond: 
          
          Enter name of file to delete: 
          
          Respond with LESS2.TMP which was stored on your default disk 
          a minute ago. Choosing "S" will display the names of the 
          documents which are currently saved on disk. This can be 
          helpful if you have forgotten a document name. To request a 
          directory of files on another directory, enter the 
          subdirectory specification, plus file specifications (ie *.* 
          means all files, *.TXT means all files ending with ".TXT"). 
          See the DOS manual for global filename parameters. 
          
          The Home Key (Home) 
          
          The function of the "Home" key on the numeric pad is very 
          simple. Move the cursor anywhere on the screen, then press 
          the "Home" key. The cursor will go to the upper left hand 
          corner of the screen. 
          
          Review this lesson until you feel comfortable with the 
          function keys, and you are on your way to bigger and better 
          things. 
          












                                        17






          
          Alan's Editor
          
          ____________________________________________________________
          
          
          
          
                                    LESSON 3
          
          
          Enter AE as before or clear the workspace with F8. Before 
          entering text onto the screen, we will discuss commands 
          which relate to the format of the text on the screen. The 
          first of these is the CTRL L key which sets the screen line 
          length. Press the CTRL key and then, while it is still 
          depressed, press the L key. Notice the message at the bottom 
          of the screen: 
          
          Line length is ## reset at column : 
          
          This message tells you what the current line length is, i.e. 
          how many characters can be written on a line, and allows you 
          to change it if you wish. Right now, we want the line length 
          to be 60, so respond to this request by typing the number 
          60. Notice that if the current line length is already 60, 
          there is no need to retype it. You can retain the 
          c_u_r_r_e_n_t_ line length by simply pressing the ENTER key without 
          typing in a number. At the bottom of the screen, the line 
          length is indicated by the "|" marks on the highlighted bar. 
          The line length must be at least 20 and no more than 79. 
          
          CTRL T 
          
          You may notice some capital T's on the highlighted bar. If 
          not, press CTRL-K until a mostly blank line appears with a 
          vertical mark toward the right of the screen. The "T's" 
          indicate the current location of the tab stops. CTRL T can 
          be used to reset these tabs. When you press CTRL T, you will 
          see the following prompt at the bottom of the screen: 
          
             Indicate tab stops, separate with semicolons: 
          
          You may enter up to 20 column numbers to which you want the 
          cursor to jump when the -->| Tab key is depressed. These 
          column numbers must be separated by semicolons, and should 
          be specified from smallest to largest. Note also that these 
          tab stops should all be less than the line length. Set the 
          tabs at columns 5,10, and 50 by entering 5;10;50 in response 
          to the prompt. Notice the tab markings at the bottom of the 
          screen now reflect these new settings. With the cursor at 
          the far left of the screen, press the Tab key and notice 
          that the cursor jumps to the fifth column. Pressing the Tab 
          key will always move the cursor to the next Tab setting. 
          




                                        18






          
          Alan's Editor
          
          ____________________________________________________________
          
          
                               Now Enter the Text
          
          Type in the following text, exactly as it appears below, but 
          do not type in the borders. After entering a line of text, 
          you can move to the first of the next line by pressing the 
          ENTER key. However, the automatic word wrap feature makes 
          this unnecessary in many cases. As you are typing in the 
          first sentence, continue to type without pressing ENTER. You 
          will notice that during the entry of the word "commands" it 
          is erased from the first line and moved to the next. You 
          will find this to be very useful, and the first 5 lines can 
          be typed without ever pressing ENTER. After typing 
          "happens." at the end of the fifth line, pressing ENTER will 
          take you to the beginning of the next line. In order to 
          leave a blank line either press ENTER again or move to the 
          beginning of the next line with the downarrow key. 
          
           -----------------------------------------------------------
          |In this lesson you will learn how several of the control   |
          |commands work. I am going to spell this word wrogn. I am   |
          |going to correct correct this line using CTRL W. I         |
          |recognize the fact that I actually spelled it wrogn again. |
          |We will split this line with CTRL X, to see what happens.  |
          |                                                           |
          |This is the last sentence in Lesson 3.                     |
           -----------------------------------------------------------
          
          CTRL R
          
          Notice that the word "wrong" is spelled incorrectly twice. 
          In order to correct this, press the CTRL key and the R key 
          at the same time. You will hear a BEEP. Now answer the 
          request at the bottom of the screen with: 
          
             Enter OLD/NEW:ogn/ong 
          
          and press the ENTER key.  The phrase "ogn" will light up, 
          and you will be given several options. Choose the "R" 
          option, and the phrase will be replaced with the correct 
          spelling. Notice now that the "ogn" in "recognize" is now 
          highlighted. However, "ogn" appears correctly in this case 
          and we should not change it. So, we respond with "S" that we 
          want to skip this occurrence of the phrase. The cursor then 
          moves to the second occurrence of the misspelling "wrogn". 
          Respond with "R" to replace this text with the correct 
          spelling. Two other options are available to you: you can 
          select "(N)o more prompting" or "(E)nd". Responding with an 
          "N" will cause all further occurrences of the old phrase to 
          be replaced by the new phrase. This example points out, 
          however, that you should be careful about choosing this 



                                        19






          
          Alan's Editor
          
          ____________________________________________________________
          
          
          option. Sometimes the old phrase will unexpectedly occur as 
          a correct part of other words. Choosing "E" simply ends the 
          replace request with no further changes being made to the 
          text. If your file is longer, AE will ask of you wish to 
          replace on subsequent screens. 
          
          
          CTRL S 
          
          The CTRL S command can be used to s_e_a_r_c_h_ for a particular 
          phrase. Press CTRL S and notice the prompt at the bottom of 
          the screen: 
          
             Enter search string : 
          
          Let's search for the string "spell". Notice that the first 
          occurrence of "spell" is highlighted as with CTRL R. You may 
          choose to continue to search, in which case the next 
          occurrence of "spell", if there is one, will be located, or 
          you may choose to stop searching. It should be noted that 
          CTRL S is similar to the CTRL R except that search strings 
          are located but n_o_t_ replaced. 
          
          
          CTRL W 
          
          Move the cursor to the space before the first "correct" in 
          the third line. Press CTRL W, and the word (to the next 
          blank) will be erased, and the remaining text will be moved 
          over to the left. 
          
          
          CTRL X 
          
          Move the cursor to the line beginning "We will split..." and 
          then place it in the space after "X,". Now enter CTRL X and 
          the line will be split. You may now insert text after "X,". 
          For this example, enter " so that you will be able". Of 
          course, this insertion could have been made using the "Ins" 
          key, but for longer insertions, we recommend using the 
          CTRL X and inserting additional lines with the F6-Insert key 
          if needed. 
          
          
          CTRL F 
          
          Notice that as a result of the manipulations we just went 
          through, the text looks pretty unorganized. In order to make 
          it look nicer, move the cursor to the first line and enter 
          CTRL F. The text now looks better since each line has been 



                                        20






          
          Alan's Editor
          
          ____________________________________________________________
          
          
          "filled" with as many words as possible. This filling takes 
          place from the current line to the next blank line or "dot" 
          command. Of course, the length of these lines depends on the 
          current line length setting. For this example, change the 
          line length to 30. If you do not remember how to do this, 
          refer back to CTRL L in this lesson. Place the cursor on the 
          first line and press CTRL F. Notice that the lines are again 
          filled, but this time the lines are shorter. Notice also 
          that the last line was not affected by this action since the 
          filling stopped at the blank line. 
          
          
          CTRL P 
          
          Using the cursor movement keys, place the cursor at the left 
          hand position of a line below the text you entered. Now type 
          in the word "hello". Press CTRL P and notice that this 
          places "hello" centered with respect to the current line 
          length. 
          
          This is the end of Lesson 3. 
          
          
          
                                LIMITATIONS TO AE
          
          1. Maximum length of any line is 79 characters. Files read 
          into AE whose lines are longer than 79 characters in length 
          may be truncated. 
          
          2. Maximum length of file is limited only by disk space. 
          However, AE requires that there be sufficient space for 
          buffering. Allow three times the file length of disk space 
          to avoid disk full errors. 
          
                        CREATING THE INITIALIZATION FILE
          
          You may set up default values for the storage disk, the line 
          length, tab settings, and colors in an initialization file. 
          This file may be created with AE or with any ASCII text 
          editor. 
          
          File AE.INI 
          
          The file AE.INI is used to specify the default settings. 
          Each indication should be on one line, making the file a 
          total of five lines long. For example, to set up the 
          following settings:(See BASIC manual for numbers on color 
          settings) 
          



                                        21






          
          Alan's Editor
          
          ____________________________________________________________
          
          
          Default disk :C
          Line length  :60
          Tab setting  :at columns 5, 10, 20, 30 and 40
          Text colors  :White on Black
          Highlight    :Bright White on Black
          
          Create a file name AE.INI, with the following contents
          (without borders):
          
          -----------------------------
          |C                          |
          |60                         |
          |5;10;20;30;40              |
          |7,0                        |
          |15,0                       |
          -----------------------------
          
                         PRINTING FILES YOU HAVE CREATED
          
          To print files you have created, you may use the DOS PRINT 
          command (See DOS manual). 
































                                        22






          
          Alan's Editor
          
          ____________________________________________________________
          
          
                     ORDER FORM AND REQUEST FOR REGISTRATION
          
          I want to be on the mailing list for updates to the AE
          Editor and other Mission Technologies Programs. I enclose
          registration fee (contribution suggested at $35) in the
          amount of $__________ .
          
          If paying by Credit Card: check one  _____VISA  ______MC
          
          Card Number:__________________________ Exp Date:_____________
          
          Signature:___________________________________________________
          
          Check those that apply:
          ____ Please send site license information.
          ____ Please send source code information.
          
          COMPANY:_________________________________________________
          
          NAME:____________________________________________________
          
          ADDRESS:_________________________________________________
          
          CITY:_____________________STATE:_________ZIP:____________
          
          PHONE #:_________________________________________________
          ------------------------------------------------------------------
          Comments and suggestions:(Attach extra sheet if necessary)
          
          
          
          
          
          
          
          ------------------------------------------------------------------
          Send to :Mission Technologies
                   PO BOX 1169
                   Cedar Hill, TX 75104
          
          Phone:214-291-2115 (We cannot return long distance phone
          calls, but we can take VISA and MC orders over the phone.)
          If requesting technical help, please send a self addressed
          return envelope, and we will reply as soon as possible.









                                        23


```
{% endraw %}

## FILES531.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  531 Alan's Text Editor & Spreadsheet                       V1 DS2
---------------------------------------------------------------------------
ALAN'S EDITOR is a full screen ASCII text editor with many word processor
capabilities suitable for program source code entry, data file construction,
and writing memos.  Help Screens are included.
 
ALAN'S CALC is a simple but comprehensive spreadsheet program with many built-
in and powerful functions, including multi-file capabilities.
 
------------  Alan's Editor
AE       EXE  Alan's Editor ASCII Text Processor Program
AE       DOC  Documentation for Alan's Editor - printer formatted manual
AE       HLP  Help Screens for Alan's Editor
------------  Alan's Spreadsheet
AC       EXE  Alan's Calc Spreadsheet Program
AC       DOC  Documentation for Alan's Calc - printer formatted manual
BALLOON  AC   Sample Spreadsheet File - Balloon Payments for car purchase
MORT     AC   Sample Spreadsheet File - Amortgage on a loan
BALANCE  AC   Sample Spreadsheet File - Checkbook Balancing exercize
SUMMARY  AC   Sample Spreadsheet File - Business Budget Summary
BUDGET   AC   Sample Spreadsheet File - Household Budget Calculations
SHEET1   AC   Sample Spreadsheet File - Linked Work Sheet #1 for Summary
SHEET2   AC   Sample Spreadsheet File - Work Sheet #2 for Summary
XYZCO    AC   Sample Spreadsheet File - Financial Data, XYZCO
 
README        Author's Introduction to files on disk.
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## NOTES531.TXT

{% raw %}
```
Program name: ALAN'S EDITOR/ ALAN'S CALC
 
Author name:  Alan C. Elliott
Address:      Mission Technologies
              P.O. Box 1169
              Cedar Hill, Texas  75104
 
Telephone Number:  (214) 291-2115
 
Suggested Donation: 
$35 per program.  This gets you on the mailing list for future upgrades and
provides access to technical help with a SASE.
 
Program Descriptions:
 
ALAN'S EDITOR is a full screen ASCII text editor that turns the computer screen
into a notepad. It is suitable for writing source code, BATCH files (.bat), 
data  files, memos and other documents for printing or mergeing with other pro-
grams. Text typed on the screen can be copied, deleted or saved for future use. 

The major functions of word processing are well supported.  Editing is done
through the use of three types of command keys: Keypad keys for cursor move-
ments, Function keys for file I/O and manipulation, and Control keys for most
of the other editing and formatting functions.  


ALAN'S CALC is an easy to use spreadsheet program that allows you to enter num-
bers and  text on the screen, and define relationships between fields. Once
defined, numbers may be changed and the program will automatically recalculate
all of the relationships between the numbers linked by formulas.  It allows you
to ask those "WHAT IF" questions, and can be used for financial modelling, 
budget calculations, scientific calculations, and much more. 

The program supports all of the usual mathematical functions that you would ex-
pect in a program of this type, and it also boasts a very powerful feature that
allows you to link one or more spreadsheets together by importing values from 
other worksheets to use in calculations.

System requirements are: 128K, one double sided, double density disk drive, and
a printer.

The documentation for both programs guide you through the learning process with
a series of lessons, and is conveniently formatted for the printer as a user
manual.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0531

     Volume in drive A has no label
     Directory of A:\

    AC       DOC     71108  12-29-85   5:02p
    AC       EXE     79104  12-29-85   9:19p
    AE       DOC     55528  12-26-85   9:37p
    AE       EXE     58240  12-26-85   9:11p
    AE       HLP      7552  12-26-85   9:13p
    BALANCE  AC       2176  12-15-83  12:35p
    BALLOON  AC       3968   1-26-84   8:49a
    BUDGET   AC       1664  12-15-83  12:37p
    FILES531 TXT      1653   6-02-86   8:42a
    GO       BAT       788   6-02-86   8:37a
    MORT     AC       6656   1-25-84   5:26a
    NOTES531 TXT      2021   1-03-80   5:17a
    README             640  12-29-85  12:42p
    SHEET1   AC        768  12-15-83  12:38p
    SHEET2   AC        768  12-15-83  12:38p
    SUMMARY  AC        640   1-16-84   1:34p
    XYZCO    AC       4864   1-26-84   9:10a
           17 file(s)     298138 bytes
                           17408 bytes free
