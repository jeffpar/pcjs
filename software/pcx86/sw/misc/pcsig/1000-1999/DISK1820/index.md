---
layout: page
title: "PC-SIG Diskette Library (Disk #1820)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1820/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1820"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOCUHELP"

    DOCUMENTOR allows you to use your own documentation text file to create
    an on-line user's manual and an associated index file for that manual.
    Use it primarily as a display tool once the documentation files are
    created, or as a conversion tool for the documentation.  Finally, create
    the index file to be used by the program.
    
    When used as a display tool the program will window up on the lower
    portion of the screen and display the document which you have specified.
    You will also be able to use the index which you specified to go to
    various places in the document to provide an easy method for finding
    various places within the document.  If you use the program with the
    index display option you will be able to add index descriptions and line
    numbers to the index file with only a few simple keystrokes.
    
    When used as a conversion tool the program will convert a text file
    (which you create with your own wordprocessor or text editor) to a
    DOCUMENTOR file, which then can be used by the program to provide an
    on-line display tool for your document.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DOCUMENT.DOC

{% raw %}
```
                                                                              
                                                                              
                                              TM                              
                                   DocuMentor                                 
                                                                              
                                  Version 1.05                                
                                                                              
              Copyright (C) 1989, Cygnus Systems Development, Inc.            
                                                                              
                                                                              
                                TABLE OF CONTENTS                             
                                                                              
                                                                              
        System Overview  . . . . . . . . . . . . . . . . . . . . . .  2       
                                                                              
        Program Use and Features . . . . . . . . . . . . . . . . . .  3       
                                                                              
             Using the Find feature from the display screen  . . . .  3       
                                                                              
             Using the Index feature from the display screen . . . .  3       
                                                                              
             Using the Print feature from the display screen . . . .  3       
                                                                              
        Invocation of the Program from the DOS Prompt  . . . . . . .  4       
                                                                              
             Invoking the Documentation Display/Index Option . . . .  4       
                                                                              
             Invoking the File Conversion Option . . . . . . . . . .  5       
                                                                              
        Files Required by the Program  . . . . . . . . . . . . . . .  6       
                                                                              
             Main Documentation Text File  . . . . . . . . . . . . .  6       
                                                                              
             DocuMentor Display File for the Program's Use . . . . .  6       
                                                                              
             Index Text File for the Program's Use . . . . . . . . .  7       
                                                                              
        Using the INDEX Option to Create or add to an Index File . .  8       
                                                                              
        Use of the Program from Within the QB Environment  . . . . .  9       
                                                                              
             Loading the QuickLib File . . . . . . . . . . . . . . .  9       
                                                                              
             Using the QuickLib for the Display Option . . . . . . .  9       
                                                                              
             Using the QuickLib for the File Conversion Option . . .  9       
                                                                              
        File Listing with Descriptions . . . . . . . . . . . . . . . 10       
                                                                              
        Listing of Selected Color Codes  . . . . . . . . . . . . . . 10       
                                                                              
        Trouble Shooting Guidelines  . . . . . . . . . . . . . . . . 11       
                                                                              
        Copyright Information  . . . . . . . . . . . . . . . . . . . 12       
                                                                              
        Licensing and Ordering Information . . . . . . . . . . . . . 13       
                                                                              
                                                                              
                                                                              
                                                                        1     
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                           DocuMentor System Overview                         
                                                                              
        The DocuMentor program is a program which allows you to use  your     
        own  documentation  text  file as an on-line user's manual.   The     
        program may be used directly as a display tool and as  a  conver-     
        sion tool.                                                            
                                                                              
        When  used  as  a  display tool the program will window up on the     
        lower portion of the screen and display the  document  which  you     
        have specified.  You will also be able to use the index which you     
        specified  to  go to various places in the document to provide an     
        easy method for finding various places within the document.    If     
        you  use  the program with the index display option,  you will be     
        able to add index descriptions and line numbers to the index file     
        with only a few simple keystrokes.                                    
                                                                              
        When used as a conversion tool the program will  convert  a  text     
        file  (which  you  create  with  your  own word processor or text     
        editor) to a DocuMentor file  which  can  then  be  used  by  the     
        program to provide an on-line display tool for your document.         
                                                                              
        As  far  as  the  actual  use of the program goes,  it provides a     
        'command box' at the bottom of the window with most of the avail-     
        able options.   The options can be executed by  pressing  various     
        keys, and are as follows:                                             
                                                                              
                                                                              
                                                                              
                                                                              
                      Program Features and "Function Keys"                    
                                                                              
        PageUp   -  Scrolls up 16 lines except when at top of document.       
        PageDown -  Scrolls down 16 lines except when at end of document.     
        ArrowUp  -  Scrolls up 1 line except when at top of document.         
        ArrowDown-  Scrolls down 1 line except when at end of document.       
        Home     -  Goes to the beginning of the document.                    
        End      -  Goes to the end of the last page of the document.         
        F        -  Allows you to find a string of text.                      
        I        -  Brings up an Index for selecting different topics.        
        Esc      -  Aborts viewing of either Index or Document on screen.     
        Alt A    -  Adds the emphasized line to the Index file.               
        Alt P    -  Prints the entire DocuMentor file on default printer.     
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                        2     
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                             Using the Find Feature                           
                                                                              
        Press  the  F key from the main display screen and then type in a     
        text string to be searched for and press the enter key.  Once you     
        have done so,  the search will begin from the current  screen  to     
        the  end of the document.   If no matches are found,  you will be     
        prompted as such and then need only to press any key to  continue     
        as before.   If a match is found the line of text containing that     
        match will be displayed as the top line on  the  viewing  screen.     
        Note:  the search is not "case sensitive",  so you need not worry     
        about any capitalization.                                             
                                                                              
                                                                              
                                                                              
                                                                              
                             Using the Index Feature                          
                                                                              
        Press the I key from the main display screen,  and you will  then     
        be  prompted  with  the index selection screen from which you may     
        use the Up and Down arrows to highlight the  desired  topic,  and     
        then press the enter key to go to that section of the document.       
                                                                              
                                                                              
                                                                              
                                                                              
                       Exiting from the DocuMentor Program                    
                                                                              
        To  end  a "DocuMentor session",  simply press the ESC key at the     
        beginning screen of the session.   If you began viewing the docu-     
        ment from the main display screen,  pressing the ESC key from the     
        display screen will terminate the program.    If  you  began  the     
        program  on  the index display screen,  pressing the ESC key from     
        the index selection screen will terminate the program.   At most,     
        all  you  need  do when in doubt is press the ESC key a couple of     
        times.                                                                
                                                                              
                                                                              
                                                                              
                                                                              
                             Using the Print Feature                          
                                                                              
        Hold down the Alt key and then press the P key, and you will then     
        be prompted with the question: OK to print Documentation ? (Y/N).     
        Press the N key if you do not want  to  print  the  Documentation     
        file,  or  make  sure  that your printer is on and is on-line and     
        press the Y key if you do want to print the file.   If you  press     
        the  Y  key,  the entire documentation file as you see it on dis-     
        played from within the DocuMentor program will be  sent  to  your     
        system's default printer.   You may abort the printing process at     
        any time by simply pressing  the  ESC  key  as  prompted  on  the     
        screen.                                                               
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                        3     
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                Using the DocuMentor Program from the DOS Prompt              
                                                                              
        The  DocuMentor program can be used from either the DOS prompt or     
        from within the Microsoft QuickBasic environment  (by  using  the     
        DOCUMENT.QLB  file).    There are two parameter formats for using     
        the DocuMentor program,  the viewing format  and  the  conversion     
        format.                                                               
                                                                              
        Format  1 allows the use of the program as a document display and     
        indexing tool from the DOS  command  line  (or  by  calling  from     
        QuickBasic), and should be issued as follows:                         
                                                                              
                                                                              
        DOCUMENT ManualFileName IndexFileName Option LinesPerPage Colors      
                                                                              
                                                                              
             ManualFileName should be the filename of the DocuMentor file     
             to  be  viewed  by the program.  (this is the file which you     
             create with the "CONVERT" option)                                
                                                                              
                                                                              
             IndexFileName should be the filename of the Index Text  File     
             for the Documentor file specified in the ManualFileName.         
                                                                              
                                                                              
             Option should be VIEW/# or VIEW/I or INDEX, as follows:          
                                                                              
                  VIEW/  followed with number causes the program to begin     
                  displaying text on that page number which you specify.      
                                                                              
                  VIEW/I causes the program to begin the display  at  the     
                  index  rather than at some line of text in the documen-     
                  tation.                                                     
                                                                              
                  INDEX allows the display of page numbers and  additions     
                  to the index file from within viewing environment.          
                                                                              
                  The Option will default to VIEW/I if not specified.         
                                                                              
                                                                              
             LinesPerPage  is  the  number  of lines on each page of text     
             (will default to 66 if not specified)                            
                                                                              
                                                                              
             Colors should be a 6 digit string that contains the  follow-     
             ing  two  digit  colors  (with leading zeroes) in order: the     
             highlighted text color,  the standard text  color,  and  the     
             background color.  (will default to 150700 if left blank)        
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                        4     
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
        Format  2  allows  the use of the program as a document text file     
        conversion tool to convert a text file document to  a  DocuMentor     
        file which is in a format that will be used by the program:           
                                                                              
                                                                              
        DOCUMENT InputFileName OutputFileName Option LinesPerPage Colors      
                                                                              
                                                                              
             InputFileName  should  be  the filename of the Document text     
             file to be converted by the program.                             
                                                                              
                                                                              
             OutputFileName should be  the  filename  of  the  DocuMentor     
             file.  (this  will be the file you use as the ManualFileName     
             in format 1 option specifications)                               
                                                                              
                                                                              
             Option should be CONVERT (If not specified, this option will     
             default to VIEW/I and the documents will be  viewed  instead     
             of converted.)                                                   
                                                                              
                                                                              
             LinesPerPage  should  be the number of lines on each page of     
             text (will default to 66 if not specified)                       
                                                                              
                                                                              
             Colors should be a 6 digit string that contains the  follow-     
             ing  two  digit  colors  (with leading zeroes) in order: the     
             highlighted text color,  the standard text  color,  and  the     
             background color.  (will default to 150700 if left blank)        
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                        5     
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                          Main Documentation Text File                        
                                                                              
        The  text file which you create for use by this program should be     
        an ASCII sequential text file which should have lines 78  charac-     
        ters  long  or  less.   The file should not contain any form feed     
        characters,  as this may produce unpredictable results when  dis-     
        playing the final documentation to the end user.   This file will     
        be read by the DocuMentor program (using the CONVERT option), and     
        will be the basis for the creation of the DocuMentor  file.  (the     
        file which the program uses for actual display purposes)              
                                                                              
        This text file can most likely be created from your word process-     
        ing  program  with  a  print  to disk option.   When you actually     
        create your 'master document' for your user's manual or  documen-     
        tation  you should use your word processor to it's full extent in     
        order to make your word processing not only easier to create, but     
        also easier to modify later on.   When you have a  'final  draft'     
        created with your word processing program, you should then create     
        a text file for use by the DocuMentor.                                
                                                                              
        After  you  have created your text file,  you will want to create     
        the DocuMentor Display file as described below.                       
                                                                              
                                                                              
                                                                              
                             DocuMentor Display File                          
                                                                              
        This file will be created with the CONVERT option from  the  text     
        file (described above) which you have specified.   This is neces-     
        sary for the overall functional capabilities  of  the  DocuMentor     
        program.    There  are no limits placed on the size of either the     
        documentation text file,  or the DocuMentor display file  by  the     
        program.  Only physical disk space limitations apply as limits to     
        the size of either of the files described on this page.               
                                                                              
        Once  you  have  created the DocuMentor display file,  you should     
        then use the DocuMentor INDEX option to easily create or  add  to     
        an index file for the new file which you have created.                
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                        6     
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                            Index File Specifications                         
                                                                              
        The  Index  file  that  you create for your document may be named     
        with any valid DOS name, however you may want to decide on a con-     
        sistent naming convention (ie. *.IDX).                                
                                                                              
        The file must be a sequential text file with a record  length  of     
        seventy eight characters (78).                                        
                                                                              
        The first seventy characters are displayed on the screen when the     
        index records are shown to the user.                                  
                                                                              
        The  last  eight characters are evaluated for a page number,  and     
        are not displayed when the Index records are shown on the screen.     
        The 'page number' should refer to the physical page  number  that     
        the  index description appears on.   You may use whole numbers to     
        indicate the beginning of a physical page,  or fractions to begin     
        at  some  point  other  than  the  beginning  of a physical page.     
        (Example: if the page number was 1.5 and  you  had  specified  66     
        lines  per page,  viewing of the document would start on the 33rd     
        line of the first page if that index selection were made.)            
                                                                              
             As an overall example of the records in an index file,  con-     
             sider  the  following:  The text of your document has an in-     
             troduction page,  a table of contents page,  and then starts     
             with  numbered  pages...so  in  the  index records you would     
             specify the numbering as follows:                                
                  Introduction page ..........//.....   1                     
                  Table of Contents page .....\\.....   2                     
                  Your documents page 1 ......//.....   3                     
                                                                              
        This Index file may contain  up  to  320  different  records  (20     
        screens  worth) with their associated physical page numbers.   It     
        is important to correctly define the number  of  lines  per  page     
        when  using the program,  as the DocuMentor software uses the in-     
        formation you give it to calculate which line to  go  to  in  the     
        document by using the physical page number multiplied by the num-     
        ber of lines per page.                                                
                                                                              
        The most simple method for creating or making additions to an in-     
        dex file is to simply use the INDEX option of the program.   This     
        option is described more fully on the next page.                      
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                        7     
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
               Using the DocuMentor program with the INDEX Option             
                                                                              
        Begin the program with the following specifications:                  
                                                                              
                                                                              
        DOCUMENT ManualFileName IndexFileName Option LinesPerPage Colors      
                                                                              
                                                                              
             ManualFileName should be the filename of the DocuMentor file     
             to be viewed by the program.  (this is the  file  which  you     
             create with the "CONVERT" option)                                
                                                                              
             IndexFileName  should be the filename of the Index Text File     
             for the Documentor file specified in the ManualFileName.         
                                                                              
             Option should be INDEX.   This option allows you to make ad-     
             ditions  to  the index file from within the viewing environ-     
             ment.                                                            
                                                                              
             LinesPerPage is the number of lines on  each  page  of  text     
             (will default to 66 if not specified)                            
                                                                              
             Colors  should be a 6 digit string that contains the follow-     
             ing two digit colors (with leading  zeroes)  in  order:  the     
             highlighted  text  color,  the standard text color,  and the     
             background color.  (will default to 150700 if left blank)        
                                                                              
                                                                              
                                                                              
        Once the program has been started with the INDEX option,  the top     
        line  of the DocuMentor display will prompt you with instructions     
        and the current index page number.   The emphasized line  at  the     
        top of the text display can be added to the index file (which you     
        specified  when  you  started  the  program)  along with its cor-     
        responding index page number.   This option enables you to simply     
        go  through  your  document and press the Alt  A key when the em-     
        phasized line should be added to the index file.   Once you  have     
        done  this you may then want to edit the index file with your own     
        word processor to "tidy it up a  bit".    The  additions  to  the     
        specified  index  file  will be made at the end of the file,  not     
        disrupting any of the current entries in that file.    The  addi-     
        tions  will  also  be left justified,  so if you want the options     
        centered or set away from the left margin,  you will also have to     
        make the required changes to the file after you have made the ad-     
        ditions.                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                        8     
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
          Use of the DocuMentor program from within the QB Environment        
                                                                              
        The  program may be called from within the QuickBasic environment     
        in the same manner which it is called from the DOS prompt.    You     
        have  a  couple  of  options  for  using the DocuMentor from your     
        program.   The first would be to simply call it as  a  DOS  SHELL     
        command  or the second would be to use the .QLB and .LIB files to     
        call the program directly from the environment, and to ultimately     
        link it to your application.                                          
                                                                              
        Method 1 - Calling the DocuMentor program as DOS SHELL.               
                                                                              
        Simply issue a shell command as you would invoke the program from     
        the command line:                                                     
                                                                              
             SHELL "Document DOCUMENT.DOC DOCUMENT.IDX VIEW/1 66 150700"      
                                                                              
        Where  DOCUMENT.DOC  is  the  name  of   the   DocuMentor   file,     
        DOCUMENT.IDX is the name of the Index File for the document, VIEW     
        is  the option with the /1 indicating that display is to begin on     
        page 1 of the document,  66 is the number of lines per page,  and     
        15,  07,  & 00 are the highlighted,  standard,  & background text     
        colors.                                                               
                                                                              
        Method 2 - Calling the DocuMentor program from within QuickBasic.     
                                                                              
        The file entitled DOCUMENT.QLB is a  QuickLibrary  for  use  with     
        Microsoft's QuickBasic Versions 4.XX.   In order to debug, or use     
        the program from within the environment,  you must first load the     
        QuickLib when you initialize QuickBasic.   Second,  you must also     
        declare the subroutine to the program which you  are  calling  it     
        from. Then finally you must call the program with all of the cor-     
        rect parameters.  See steps 1, 2, & 3 below:                          
                                                                              
        Step 1                                                                
        Load QuickBasic with the following parameters: QB /L DOCUMENT.QLB     
                                                                              
        Step 2                                                                
        At the Main Module level declare the subroutine to your program:      
        DECLARE SUB DOCUMENT(File1$,File2$,Option$,LinesPerPage%,Colors$)     
                                                                              
        Step 3                                                                
        Call  the program from your program using either of the following     
        syntax options:                                                       
        CALL DOCUMENT(File1$,File2$,Option$,LinesPerPage%,Colors$)            
          or                                                                  
        DOCUMENT File1$,File2$,Option$,LinesPerPage%,Colors$                  
                                                                              
        When calling the DocuMentor routine, the calling option names can     
        actually  be  anything  you  want,   however  calling  parameters     
        1,2,3,&5  must be string expressions,  and parameter 4 must be an     
        integer.   The defaults will be "honored" if the  parameters  are     
        left  blank  or null,  however you must issue all five parameters     
        when making the call.                                                 
                                                                              
                                                                              
                                                                              
                                                                        9     
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                       Listing of DocuMentor System Files                     
                                                                              
                                                                              
        File Name       Description                                           
        ------------    --------------------------------------------------    
        DOCUMENT.EXE    DocuMentor program file                               
        DOCUMENT.QLB    DocuMentor QuickLib file for use with QuickBasic      
        DOCUMENT.LIB    DocuMentor Library file for linking with programs     
                                                                              
        DOCUMENT.DOC    the DocuMentor file for display by the program        
        DOCUMENT.IDX    the index file for text display and selection         
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                         Listing of Selected Color Codes                      
                                                                              
                                                                              
                       00 - Black      08 - Gray                              
                       01 - Blue       09 - Light Blue                        
                       02 - Green      10 - Light Green                       
                       03 - Cyan       11 - Light Cyan                        
                       04 - Red        12 - Light Red                         
                       05 - Magenta    13 - Light Magenta                     
                       06 - Brown      14 - Yellow                            
                       07 - White      15 - High intensity White              
                                                                              
                                                                              
                                                                              
        For a monochrome monitor you may want to use the following  codes     
        to  produce  an  underlined  letter  or  word for the highlighted     
        characters as the color definitions will have  little  effect  on     
        the  display,  and  you  will  have  difficulty determining which     
        characters or lines are highlighted.   Try using  010700  as  the     
        Color  definition  for a monochrome monitor if the default colors     
        don't work satisfactorily.                                            
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                       10     
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                 Troubleshooting                              
                                                                              
        The DocuMentor program is designed to function with a very  mini-     
        mal potential for encountering an error.  The most likely reasons     
        for unexplained errors or problems will most likely stem from one     
        of the situations outlined below.                                     
                                                                              
        Although the program is designed to work on virtually any type of     
        monitor,  if erroneous color definitions are made, you may not be     
        able to see the displayed text.   For example if all three colors     
        were defined as the same,  you would not be able to see the text.     
        Similarly,  if you choose colors that  are  incompatible  with  a     
        specific  type of monitor,  partial or incomplete displays may be     
        encountered.   When encountering these type of difficulties,  try     
        using the defaults as a starting point,  and then experiment from     
        that point forward.                                                   
                                                                              
        If the program from which the DocuMentor is being called is  very     
        large,  or if there are a lot of memory resident programs loaded,     
        a situation where the DocuMentor  program  did  not  have  enough     
        available memory to run may occur.  (the program requires ~64K of     
        RAM to function properly)  This may be corrected by checking  the     
        available  memory  immediately  prior  to invoking the DocuMentor     
        program.                                                              
                                                                              
        If a file which was specified for the  program's  use  cannot  be     
        found in the "current default directory",  an error may occur ...     
        which will result in a displayed message,  and then a  subsequent     
        return to DOS.                                                        
                                                                              
        If  an  erroneous  declaration  statement  is made when using the     
        DocuMentor from within a programming environment (where the argu-     
        ment count does not match that in the documentation),  memory al-     
        location errors are likely to occur.                                  
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                       11     
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                               TM                             
                                   DocuMentor                                 
                                                                              
                                  Version 1.05                                
                                                                              
              Copyright (C) 1989, Cygnus Systems Development, Inc.            
                                                                              
              Compiler Copyright (C) 1982-88, Microsoft Corporation           
                                                                              
        -----------------------------------------------------------------     
        LIMITATIONS OF LIABILITY                                              
                                                                              
        Cygnus Systems Development,  Inc. makes no warranty for the error     
        free accuracy of the program,  nor  does  the  corporation  imply     
        suitability  for  any  specific  purpose or use.   Cygnus Systems     
        Development,  Inc.  will not be  liable  for  any  consequential,     
        direct,  incidental,  indirect, or special damages arising out of     
        the use or inability to use the software or documentation.  Under     
        no circumstances shall liability to Cygnus  Systems  Development,     
        Inc. exceed the purchase price of the DocuMentor program.             
                                                                              
        COPYRIGHT NOTICE                                                      
                                                                              
        The  DocuMentor  program  is  a  user-supported  software product     
        protected by federal copyright.   Neither the  documentation  nor     
        the software may be copied,  duplicated,  reproduced, translated,     
        or reduced to any  electronic  medium  or  machine-readable  form     
        either  in  whole or part in any form without the express,  prior     
        written consent of Cygnus Systems  Development,  Inc.  except  as     
        authorized herein.                                                    
                                                                              
        If you use the software,  a contribution of forty nine dollars is     
        required in exchange for written consent to use the program under     
        a private,  non-commercial license and to receive notice  of  up-     
        dates from Cygnus Systems Development, Inc.                           
                                                                              
        Without written consent,  any users of this software and documen-     
        tation are granted a limited license to make an  evaluation  copy     
        for thirty days of trial use on a private,  non-commercial basis.     
        This license does NOT include distribution of this product:           
                                                                              
             - For any consideration or fee.                                  
             - For use within an organization.                                
             - In a modified form.                                            
             - In connection with any other product or service.               
                                                                              
        All Rights Reserved.                                                  
                                                                              
                                                                              
        To receive a license for the program,  see the following  page(s)     
        to place an order.   Thank you for supporting the free enterprise     
        system.                                                               
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                       12     
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
        To receive a usage license for the product, and a current program     
        diskette,  simply complete the following information and send the     
        designated amount to:                                                 
                                                                              
        Cygnus Systems Development, Inc.                                      
        P.O. Box 1616                                                         
        Lee's Summit, MO  64063                                               
                                                                              
                                                                              
                                                                              
        Company Name ______________________________________                   
                                                                              
        Contact Name ______________________________________                   
                                                                              
             Address ______________________________________                   
                                                                              
                     ______________________________________                   
                                                                              
         City, State ______________________________________                   
                                                                              
            Zip Code ______________________________________                   
                                                                              
        Phone Number ______________________________________                   
                                                                              
                                                                              
        Today's date ___________________                                      
                                                                              
                                                                              
        _________________________________________________________________     
                                                                              
                          DocuMentor (tm)  Version 1.05                       
                                                                              
        License includes one program diskette with program and documenta-     
        tion files.                                                           
                                                                              
                                                                              
        1 computer         ...at $49 each: # computers   1  x $49 = _____     
                                                                              
        2 to 49 computers  ...at $25 each: # computers ____ x $25 = _____     
                                                                              
        50 to 99 computers ...at $15 each: # computers ____ x $15 = _____     
                                                                              
        100 or more computers at a $ 1500 one time fee            = _____     
                                                                              
                                                                              
                                      Total Amount Due =   $    _________     
                                                                              
                                                                              
                                                                              
                                                                              
        Please indicate diskette format:   3.5" _____    or   5.25" _____     
                                                                              
                                                                              
        All license orders are accepted on a prepaid basis only.              
        To  receive  a distribution license for the product,  simply com-     
                                                                              
                                                                       13     
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
        plete the following information and send the completed form to:       
                                                                              
        Cygnus Systems Development, Inc.                                      
        P.O. Box 1616                                                         
        Lee's Summit, MO  64063                                               
                                                                              
        Upon receipt the information will be evaluated, and a representa-     
        tive will contact you with  information  about  the  distribution     
        license terms.                                                        
                                                                              
                                                                              
        Company Name ______________________________________                   
                                                                              
        Contact Name ______________________________________                   
                                                                              
             Address ______________________________________                   
                                                                              
                     ______________________________________                   
                                                                              
         City, State ______________________________________                   
                                                                              
            Zip Code ______________________________________                   
                                                                              
        Phone Number ______________________________________                   
                                                                              
        Today's date ___________________                                      
                                                                              
                                                                              
        State  the name(s) of and descriptions for any products which you     
        plan to distribute the DocuMentor program with:                       
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
        How many copies of the program  do  you  estimate  will  be  dis-     
        tributed each year:                                                   
                                                                              
                                                                              
                                                                              
                                                                              
        State or Country of Incorporation (if applicable):                    
                                                                              
                                                                              
                                                                              
                                                                              
        Comments or Questions:                                                
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
        Signature ________________________________  Title _______________     
                                                                              
                                                                              
                                                                              
                                                                       14     
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              
                                                                              

```
{% endraw %}

## FILE1820.TXT

{% raw %}
```
Disk No: 1820                                                           
Disk Title: DocuHelper                                                  
PC-SIG Version: S1                                                      
                                                                        
Program Title: DocuHelper                                               
Author Version: 1.05                                                    
Author Registration: $49.00                                             
Special Requirements: None.                                             
                                                                        
DOCUMENTOR allows you to use your own documentation text file to create 
an On-line user's manual and an associated index file for that manual.  
Use it primarily as a display tool once the documentation files are     
created or as a conversion tool for the documentation.  Finally, create 
the index file to be used by the program.                               
                                                                        
When used as a display tool the program will window up on the lower     
portion of the screen and display the document which you have specified.
You will also be able to use the index which you specified to go to     
various places in the document to provide an easy method for finding    
various places within the document.  If you use the program with the    
index display option you will be able to add index descriptions and line
numbers to the index file with only a few simple keystrokes.            
                                                                        
When used as a conversion tool the program will convert a text file     
(which you create with your own word processor or text editor) to a     
DocuMentor file which can then be used by the program to provide an     
on-line display tool for your document.                                 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1820

     Volume in drive A has no label
     Directory of A:\

    DOCUMENT DOC     73920   7-11-89   4:18p
    DOCUMENT EXE     64193   7-11-89   7:04a
    DOCUMENT IDX      1522   7-11-89   4:11p
    DOCUMENT LIB     28721   7-11-89   7:05a
    DOCUMENT QLB     25603   7-11-89   7:05a
    FILE1820 TXT      2443  12-20-89   5:04p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-21-89   1:16p
            8 file(s)     196980 bytes
                          119808 bytes free
