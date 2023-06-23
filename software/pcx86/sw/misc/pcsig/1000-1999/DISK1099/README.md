---
layout: page
title: "PC-SIG Diskette Library (Disk #1099)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1099/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1099"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FORM MASTER"

    FORM MASTER is a versatile, powerful, and easy-to-use tool for creating,
    modifying, completing, and printing specialized forms for a home or
    business. Once you create a form, you can fill it in on-screen and
    print it, or print it and fill it out manually. If you have pre-printed
    forms, they can be fed into the printer and the data fills the blanks.
    You can export FORM MASTER forms into other software. It includes
    capabilities for word wrap, field justify, look-up, math operations,
    plus automatic date, time and form sequence number insertion.
    
    FORM MASTER is easily configured to support most printers with features
    including boldface, underlining, italics, super- and subscripts,
    expanded or compressed text, overstrike, and others. Should problems
    develop in printer configuration, registered users can get telephone
    assistance. Documentation is straightforward and clearly written, and
    learning FORM MASTER is easy, with examples and four on-disk tutorial
    lessons. You can even add customized help files for other people using
    your forms.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1099.TXT

{% raw %}
```
Disk No: 1099                                                           
Disk Title: Form Master                                                 
PC-SIG Version: S2.3                                                    
                                                                        
Program Title: Form Master                                              
Author Version: 3.2                                                     
Author Registration: $25.00                                             
Special Requirements: 320K RAM.                                         
                                                                        
Questionnaires?  Surveys?  Order blanks?  If you routinely make and use 
such standard forms, FORM MASTER is a versatile, powerful, and          
inexpensive shareware tool for creating, modifying, completing, and     
printing them.  Once you create a form, you can fill it in on-screen and
print it, or print it and fill it out manually.  If you have pre-printed
forms, they can be fed into the printer and the data fills the blanks.  
You can export FORM MASTER forms into other software.                   
                                                                        
FORM MASTER is easily configured to support most printers with features 
including boldface, underlining, italics, super- and subscripts,        
expanded or compressed text, overstrike, and others.  Should problems   
develop in printer configuration, registered users can get telephone    
assistance.  Documentation is straightforward and clearly written, and  
learning FORM MASTER is easy, with examples and four on-disk tutorial   
lessons.                                                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FM.DOC

{% raw %}
```

                                     FORM MASTER


                       FORM MASTER Forms Package  version 3.2
                       ======================================

                                    DOCUMENTATION
                                    =============

      This document  describes Form  Master, a  versatile and  powerful  forms
      software package.  It allows you  to create, modify, fill in, and  print
      forms.  A 'form' is defined  here as being computer printable  material,
      having fields which are  filled in and is  used in a repetitive  manner.
      Form Master has  been designed  to handle  the needs  of many  different
      users.  You can print a form, or  fill in the blanks on your screen  and
      then print, or fill in the blanks and print only what you have typed for
      use with pre-printed forms. It supports most of the capabilities of your
      printer such as boldface,  italic, subscript, superscript,  underlining,
      expanded text, compressed text,  overstrike, etc.  You  can use the  IBM
      graphics character set to do things like boxes, if your printer supports
      it.  If  your printer  isn't fully IBM  compatible, Form  Master can  be
      configured to support most printers.   It can include the current  date,
      time and  form sequence  number on  your form.   A  look-up facility  is
      included which can look  up a 'key'  you enter and fill  in one or  more
      fields on your  form.  A  word wrap feature  eases entry into  connected
      fields.  Fields can  be defined to  right, left, or  center justify.   A
      powerful math capability  can compute  with numbers in  your fields  and
      fill in the result.  Form Master is easy to learn and contains on-screen
      help.   It can  also provide  additional on-screen  help relating  to  a
      specific form by using a help file  you create.  This is handy if  other
      people will be using your forms.

                                     Disclaimer
                                     ----------
      No warranty  is  made, express  or  implied,  that this  manual  or  the
      software  described  is  free  of  error,  or  is  consistent  with  any
      particular standard  of performance,  quality, or  merchantability.   It
      should not be relied on for  solving a problem whose incorrect  solution
      could result in injury to a person or  loss of property.  Use in such  a
      manner is at your own risk.

      Section                         Contents                            Page

      1.           Installation                                              2
      2.           Getting Started                                           2
      3.           Running The Form Master Program                           4
      3.1.         Form Master Program Main Menu                             4
      3.2.         Form Master Program Editor                                8
      3.3.         Form Master Program Form Executor                        11
      4.           Running The Form Executor Only                           14
      5.           Advanced Features                                        15
      6.           Adding More Printer Functions To Form Master             16
      7.           Configuring Form Master For Your Printer                 18
      8.           If You Have Computer Compatibility Problems              19
      9.           Form Master Files                                        19
      10.          Error Messages                                           20
      11.          Registering Your Copy                                    24


                                         1
                                     CastleSoft


                                     FORM MASTER

      1.  Installation

      To install Form  Master, you  simply copy its  files to  where you  want
      them.  Two scenarios follow, one for a system containing two floppy disk
      drives, and another for a system  containing one floppy disk and a  hard
      disk drive.  You may  have to adjust these  commands to comply with  the
      particular configuration of your system.

      To install onto  a system with  two floppy disk  drives, place an  empty
      formatted diskette into your 'B' drive.  (You may want to first  install
      the system files so  it will be  bootable - refer  to your DOS  manual.)
      Place the Form  Master diskette  into your 'A'  drive.   Then enter  the
      following command:
              COPY A:*.* B:

      To install onto a system containing  one floppy disk and one hard  disk,
      it is suggested you place the files  in a separate directory.  Start  by
      placing the Form Master diskette into  your floppy drive.  Assuming  you
      are at a  'C>' prompt  (your hard  drive), the  following commands  will
      place these files into the directory 'FORM':
              MD \FORM
              CD \FORM
              COPY A:*.*
      Prior to executing Form Master programs, you should make sure you are in
      the '\FORM'  directory  (use  the  'CD  \FORM'  command)  or  that  this
      directory is in the current path.

      It is important to keep your  original copy of the Form Master  diskette
      in a safe place.  This protects you  if your files get corrupted or  you
      suffer a hard disk crash.


      2.  Getting Started

      You should  read  this document  completely  at  least once  to  get  an
      understanding of the  functionality of  this package.   It is  suggested
      that you print this document and  have a copy handy when first  learning
      it.

      Form Master  consists  of two  programs.   The  first  one is  the  Form
      Master program, FM.EXE.  It allows you to:
          o  Create forms
          o  Modify forms (edit)
          o  Execute forms (fill in / print)
          o  Convert files, created with your editor, into forms (import a
             form)
          o  Convert a form into an edit file (export a form)

      FM.EXE can be  invoked in such  a way  to only execute  forms using  the
      batch file FORM.BAT.  Simply enter FORM  followed by the form name at  a
      DOS prompt and the form will be displayed ready to be filled in.

      The second program,  PRINTER.COM, is  used to configure  Form Master  to
      your own printer.  You may need to do this if your printer is not  fully
      Epson LX-800 compatible, the default used by Form Master.


                                         2
                                     CastleSoft


                                     FORM MASTER

      Executing a form is a good way to  get an idea of what this package  can
      do for you.  To execute a form just enter one of the following lines  at
      a DOS prompt (first making sure the drive containing Form Master is your
      default drive):
          FORM INVOICE     <press enter>
          FORM REG         <press enter>
      This invokes the form executor  and displays a form.   You can fill  out
      the form by typing into various fields on the form.  Help is provided by
      pressing F1.  You can  print the form using F10.   To exit back to  DOS,
      press ESC twice.

      Form Master allows  you to build  a form tailored  to your own  specific
      needs.  Building a form involves the following sequence of operations:
          1.  Design your form on paper.
          2.  Enter the text of the form (Lesson 1 - Basics)
          3.  Add input fields to your form (Lesson 2 - Using Attributes)
          4.  Add borders to your form (Lesson 3 - Lines And Boxes)
          5.  Add special printer control functions (Lesson 4 - Special
              Functions)
          6.  Define word wrap, justification, math.  Re-define function keys.

      Details steps 2 through 5 are covered by lessons in this package.  Forms
      are used (as you might have guessed) for each of these lessons.  Step  6
      is covered later  under 'Advanced Features'.   To go  through the  first
      lesson, make  your Form  Master diskette  the default  (i.e. place  your
      diskette in drive A and change the prompt to 'A>') or go to the  '\FORM'
      directory of your hard disk.  Do the following:

          Type in 'FM' and  press  Enter.  This  starts  Form  Master  and the
             program menu will appear.

          Press F5, then press F10.  Select the form 'LESSON1' using the arrow
             keys and press Enter.  This  loads the form containing  Lesson 1.
             [Note:  you may need to press  NumLock  to make  the  arrow  keys
             work.]

          Press F3  twice to start the form editor and follow the instructions
             on the display.

      When you're through with the lesson, press ESC twice to get back to  the
      menu.  To return back  to DOS, press ESC twice  again.  However, if  you
      want to go on to the next lesson, do the following:

          Press F5, then press F10.  Select the form 'LESSON2' using the arrow
             keys and press Enter.  This loads the form containing Lesson 2.

          Press F3 twice to start the form editor.  Follow the instructions.

      Proceed in  this  manner through  all  the lessons.    If you  make  any
      mistakes, just reload the form and begin editing again.

      A step by step tutorial file  is also included.  Print TUTORIAL.DOC  and
      use it as a guide to building your first form.




                                         3
                                     CastleSoft


                                     FORM MASTER

      3.  Running The Form Master Program

      The Form  Master program,  FM.EXE, provides  the capability  to  create,
      modify, and execute  forms.  It  can also  convert a form  into an  edit
      file, usable by your editor or word processor.  Such a file can also  be
      converted into a form.

      Most operations in  Form Master are  done with function  keys.  Help  is
      always obtain using F1.  In those cases where a function key could cause
      undesirable consequences  if  pressed  accidently,  a  second  press  is
      required.

      Starting FM.EXE from DOS is done by typing "FM" at the DOS prompt.   The
      Form Master main menu will then appear on the screen.  This menu  allows
      you to invoke the  form editor and  the form executor.   The main  menu,
      form editor, and form executor are described in the following sections.


      3.1.  Form Master Program Main Menu

      The Form Master main  menu appears on your  screen when the Form  Master
      program is started.  It describes the  use of the function keys and  the
      ESC key. The currently loaded form and form control parameters in effect
      are show  in  the  second part  of  the  menu.   The  following  diagram
      illustrates the major functions of this menu:

                                                               F2 Create Form
                                    Computer                         |
                                     Memory                          v
           Disk                    +--------+                     _________
        +-------+                  |        |  F3 Edit Form      /         \
        |       |  F5 Load Form    | Memory | <---------------> <FORM EDITOR>
        | form  | ---------------> |  Copy  |                    \_________/
        | files |                  |  of a  |                     _________
        |       |  F6 Save/Update  |  Form  |  F4 Execute Form   /         \
        |       | <--------------- |        | ----------------> < FORM EXEC >
        +-------+                  |        |                    \_________/
                                   +--------+                         |
                                                                      v
                                                                    Print

      Functions:

          ESC - Return to  DOS:   Terminates  the Form  Master program.    Two
                consecutive pushes of this  key are required.   If you have  a
                current form that has been edited  but not saved, you will  be
                reminded of this after the first push of ESC.  If you push ESC
                once by accident, hit any other  key except ESC to cancel  and
                resume with the program.

                ESC is also used  to cancel any function  key operation.   For
                instance, if you type F2 by accident, press ESC to cancel.

          F1  - Help:  Displays on-screen help.



                                         4
                                     CastleSoft


                                     FORM MASTER

          F2  - Create Form:  Starts the form editor with a blank screen so  a
                new form can be built.  Before the editor is started, a pop-up
                menu will appear showing all the form control parameters  such
                as the  number of  rows, columns,  etc.   These are  described
                later.  Modify them as needed  and then press F2 again to  get
                started  editing.    Help  specific  to  the  form  editor  is
                available by pressing F1.

                NOTE:  Use F3 instead of this key if you have already  created
                a form and you want to do more editing.

          F3  - Edit Form:  Starts  the form editor with  the current form  in
                memory.  A form must have  been previously loaded using F5  or
                F7, or created using F2.  Before the editor is started, a pop-
                up menu will  appear showing all  the form control  parameters
                such as the number of rows, columns, etc.  These are described
                later.  Modify them  as needed, then press  F3 again to  begin
                editing. Help  specific to  the form  editor is  available  by
                pressing F1.

          F4  - Execute Form:  Executes the  current form you have created  or
                loaded from disk.   Executing  a form  allows you  to fill  in
                fields on the form and/or print the form.  In addition, fields
                on the form may be loaded from  disk, or saved to disk.   Help
                specific to the form executor is available by pressing F1.

          F5  - Load Form from Disk:  Retrieves a form from disk and places it
                in memory so it may be edited (F3), executed (F4), or exported
                (F8).  The form must have been previously saved on disk (F6).

                Pressing F5, a pop-up menu will appear prompting you to  enter
                the name of a form.  You can  enter the name of a form on  the
                first input line such  as 'INVOICE'.  It  is not necessary  to
                enter the form name extension, '.FRM'.  You can specify  where
                the form  resides -  a  different drive  or directory  on  the
                second input line (e.g.  'A:' or 'D:\BUSINESS'  ).  Leave  the
                second line blank if  you want to  use the current  directory.
                Then press F5 again to load the form.

                Alternately, you can  press F10 after  the first F5  to see  a
                directory list of forms.  Selection  of the form is made  with
                the arrow keys and pressing enter.  If the second line of  the
                pop-up  menu  is  blank,   the  current  directory  is   used.
                Otherwise, the directory specified is used.

          F6  - Save/Update Form to  Disk:   Writes the  currently loaded  (or
                created) form  to a  disk file.   A  pop-up menu  will  appear
                prompting you to enter the name of the form.  Type the name on
                the first input line.  It  is not necessary to enter the  form
                name extension, '.FRM'.  The second input line can be used  to
                specify a different drive or directory other than the  current
                one to place the file.  Press  F6 a second time.  Form  Master
                will let  you  know  if  this form  already  exists  on  disk.
                Therefore you will be either creating a new file or  replacing
                an old one.  Press F6 a third time to complete the operation.


                                         5
                                     CastleSoft


                                     FORM MASTER

                Be sure to use F6 if you want to save your editing work,  even
                if you just changed the number of copies to print and did  not
                change the form content.

          F7  - Import Form from  Edit File:   Reads a file  and places it  in
                memory in a form format.  A pop-up menu will appear  prompting
                you  to enter a file name. Press F7 a second time to load  the
                file.   Importing  means you  can  create a  form  using  your
                favorite editor or  word processor  (some restrictions  apply)
                and use it with this program.  If using Word Star, be sure  to
                create a non-document file.  The form generated will be  black
                and white (normal video) with no special attributes or special
                print functions.  You  will not be  able to enter  information
                onto this form with the form executor until you modify it with
                the form editor.  It is suggested that after F7, edit the form
                (F3) and fill  in the form  control parameters  appropriately,
                then save it (F6).

          F8  - Export Form to Edit File:   Writes the current form in  memory
                to an edit file.  A  pop-up menu will appear prompting you  to
                enter a file name.  Press F8 a second time.  Form Master  will
                let you know if this file  already exists on disk.   Therefore
                you will be  either creating a  new file or  replacing an  old
                one.  Press F8  a third time to  complete the operation.   You
                should be able  to use your  editor on this  file.  Note  that
                attributes and  special  print  function  characters  are  not
                placed into your edit file.

          F9  - Advanced Features:  This allows you to add or edit the current
                advanced features  defined for  the form.   Advanced  features
                allow you  to define  fields  with word  wrap,  justification,
                look-up tables, and math operations.

          F10 - Temporarily Go To  DOS:   Executes a  DOS shell  and you  will
                receive a DOS prompt.  A second press of F10 is required.  Use
                this to perform DOS functions  such as DIR, TYPE, COPY,  etc.,
                or to even execute another program.  To return to Form Master,
                enter EXIT at a DOS prompt.

      Form Control Parameters:

      Form control parameters will appear on  a pop-up menu when you press  F2
      to create a form or F3 to edit  a form.  These parameters determine  the
      size of the form, the type of fields that text can be entered into  when
      executing, the  form number,  and form  printing controls.   You  should
      modify them as  needed.   The current  values are  displayed in  inverse
      video fields in the pop-up menu.   Simply type over any values that  are
      to be modified.  The  cursor shows where you are  typing.  You can  move
      from one value to the next using the 'Enter', 'Tab', and 'Backtab' keys.
      'Home' moves you to  the first value  and 'End' to the  last.  To  begin
      editing, press F2 or F3 a second time.

      While in the editor, pressing 'ESC' will also display this pop-up  menu.
      You can return to the main menu by pressing 'ESC' a second time, or  you
      can change a control parameter such as the number of rows, then press F3
      to resume editing.

                                         6
                                     CastleSoft


                                     FORM MASTER

      If you want to change only the form sequence number of a form, load  the
      form and press F3 to display the pop-up menu.  Tab to the 'Form  Number'
      field and enter a new  value.  Press 'ESC' to  return to the main  menu.
      Don't forget to save your work by using F6 to update the form on disk.

      Following is a description of each of the menu control fields.

        Number Of Rows             The number of lines in the form.  Functions
                                   F2, F3, F4,  F6, and F8  use this to  limit
                                   the number of  lines in the  form.  If  you
                                   find you  need  more lines  while  you  are
                                   editing, press 'ESC', increase this number,
                                   then press  F3  to resume  editing.    This
                                   number may range from 1 to 132 (2 pages).

        Number Of Columns          The number of columns  is used ONLY BY  THE
                                   FORM EXECUTOR (F4) to  limit the number  of
                                   columns printed.    This number  may  range
                                   from 20 to 133.

        Input Fields Attributes    THESE FOUR FIELDS ARE  USED TO SPECIFY  THE
                                   ATTRIBUTES  OF   FIELDS  WHERE   THE   FORM
                                   EXECUTOR ALLOWS TEXT  TO BE  ENTERED.   See
                                   the Form Editor for more information.

        Form Number                The sequence  number  of the  form.    This
                                   number can  be automatically  entered  onto
                                   your form  by the  form  executor.   It  is
                                   incremented each time  you print the  form.
                                   It can help you keep track of the number of
                                   times you  have  filled in  and  printed  a
                                   form.  The  example invoice  form uses  the
                                   form number as the invoice number which  is
                                   filled in automatically each time the  form
                                   is executed.

        Line Feeds After Printing  The number of blank lines to add to the end
                                   of your  form after  it has  been  printed.
                                   This is used (1) to align the paper in your
                                   printer  to  the  next  form  if  you  have
                                   continuous forms, or (2) to eject the  form
                                   you have just printed from your printer.

        Number Of Copies To Print  This is  the default  number of  copies  to
                                   print when you  tell the  form executor  to
                                   print a form.  You can override the default
                                   if you want at that time.

        Pre-printed Form           Specifies if  non-input  portions  of  your
                                   form  are  to  be  printed.    If  you  are
                                   printing on  blank pages,  enter 'N'  here.
                                   If you are  printing on pre-printed  forms,
                                   enter 'Y' so  only the  input fields  (what
                                   you have typed) are printed.



                                         7
                                     CastleSoft


                                     FORM MASTER

      3.2.  Form Master Program Editor

      The form editor is used for creating and modifying forms.  It allows you
      to move the  cursor about the  form and type  in its contents.   It  has
      features to draw lines and  boxes as well as  copy groups of lines  from
      one place to another.  You can  set attributes to control the colors  of
      characters and backgrounds on your form for use with a color monitor, or
      use normal, high intensity, inverse video, or underlining for use with a
      monochrome monitor.  You must choose an attribute(s) for input fields  -
      areas you can type into when the  form is executed.  You can  optionally
      specify  where  the  date,  time,  and/or  form  number  which  will  be
      automatically filled  in when  the form  is executed.   There  are  also
      special printer  control characters  which control  your printer  to  do
      boldface, italic,  subscript, superscript,  underlining, expanded  text,
      compressed text, overstrike, etc.

      To add such features as word wrap, field justify, look-up, and math  see
      the section on 'Advanced Features'.

      When the form  editor takes control,  you will see  your form appear  on
      lines 2 through 25 of your display, or these lines will be blank if  you
      are creating a new form.   The first line will display 'EDIT:'  followed
      by the form name,  the cursor position, the  attribute of the  character
      the cursor is on, and the current attribute which is used when you  type
      characters onto your form.   An 'Ins' will appear  on the first line  if
      you are in insert mode meaning characters will be inserted at the cursor
      as you type instead of replacing existing ones.  Another indicator  will
      appear when the cursor is on certain special characters.  The  indicator
      gives the meaning of these special characters.

      Attributes:

          Attributes determine how a character  appears on your monitor,  such
          as its  color,  background  color,  highlighting,  and  underlining,
          depending on what  your monitor  supports.  Each  character on  your
          display has its  own attribute.   You  have control  over how  these
          attributes are used on your form with function keys F2, F7, F8,  and
          F9 (listed below).

          Attributes have  two purposes.   They  are used  to make  your  form
          colorful and also TO  DEFINE INPUT FIELDS WHICH  ARE PLACES YOU  CAN
          TYPE INTO  WHEN  THE  FORM  IS  EXECUTED.    Up  to  four  different
          attributes may be  used to  define input fields.   A  common one  is
          inverse video (black characters on  a white background) which has  a
          value of  '70'.    This attribute  is  selected  with F8.    Use  of
          attributes is important and is covered in lesson 2.

      Functions:

          ESC - Return to Menu:  Exits Form Generation.  After the first  push
                the form control parameters pop-up menu will appear.  You  can
                modify any of these parameters at  this point.  Press 'ESC'  a
                second time to return to the  main menu or press F3 to  resume
                editing.



                                         8
                                     CastleSoft


                                     FORM MASTER

          F1  - Help: Displays on-screen  help.   A condensed  help screen  is
                shown first.  Pressing F1 a second time will provide  detailed
                help.  Press 'ESC' to resume editing.

          F2  - Define Special Characters & Attributes:  Displays a menu which
                allows you to (1) select  any character including the  special
                IBM graphics characters to enter on your form; and (2)  define
                any attribute you want to use on your menu.

                Any character  in  the  IBM  character  graphics  set  may  be
                selected by using the cursor keys.   To place it on your  form
                press 'ESC' to resume editing, then press F10.

                Attributes apply characters on your form.  They define  colors
                and the ability to  underline, highlight, and blink  depending
                on what your monitor supports.  Each character on your display
                has its own attribute defined for it.  Attributes are used  by
                Form Master to designate areas on your form where  information
                may be filled in when the form  is executed.  It is up to  you
                to define these input fields.  You must give them a  different
                attribute than  other  places on  your  form.   The  suggested
                attribute for input  fields is inverse  video (attribute  70).
                Select it by pressing F8 while editing.  You can then move the
                cursor to where  the field  will be  and press  the space  bar
                repeatedly to watch it  appear.  This  F2 menu however  allows
                you to define any attribute you may want to use.

                There are three functions associated with this special menu:
                   o  Select a character
                   o  Select the foreground component of the attribute
                   o  Select the background component of the attribute
                You can  change  the  function by  pressing  the  Return  key.
                Selection is  made using  the cursor  control keys.   Exit  by
                pressing ESC.

          F3  - Start Box / Line:  The  current cursor position is noted  when
                you press this key and a "Start line or box" pop-up menu  will
                appear.  You can  select if you want  a single or double  line
                box to be built.   Press F3  a second time.   The pop-up  menu
                will disappear and a blinking cross will appear at the  cursor
                position to mark where the line of box will start from.

          F4  - Draw Box / Line:   Either a "Draw Box" or a "Draw Line" pop-up
                menu will appear.  Press F4 a second time to draw the line  or
                box from the  blinking cross  marked using F3  to the  current
                cursor position.  A line will be drawn if the cursor is in the
                same row or  column as the  blinking cross.   Otherwise a  box
                will be drawn.   A single  line or double  line style will  be
                used as specified by F3.  The  line or box will also be  drawn
                using the current attribute.  Therefore make sure the  current
                attribute is what you want before using this key.  Form Master
                will attempt  to connect  all lines  and boxes  wherever  they
                meet, even single lines with double lines.




                                         9
                                     CastleSoft


                                     FORM MASTER

          F5  - Pick Line:  A "Pick Lines"  pop-up menu will appear.  You  can
                specify the number of  lines to pick from  1 to 24,  beginning
                with the line the cursor falls on.  Press F5 a second time  to
                pick the lines.  Use this with F6 to copy lines from one place
                to another.

          F6  - Put Line:  An "Insert n  lines" pop-up menu will appear  where
                'n' is the number of lines picked with F5.  Press F6 a  second
                time to copy the picked lines in front of the line  containing
                the cursor.

          F7  - Use Normal Attribute:  The current attribute is set to  normal
                video which is  white characters on  a black background  (07).
                Further typing, lines, and boxes will add characters in normal
                video.  Note  that white  appears as  green or  amber on  some
                monochrome monitors.

          F8  - Use Inverse Video Attribute:  The current attribute is set  to
                inverse video, black  characters on a  white background  (70).
                Further typing,  lines,  and  boxes  will  add  characters  in
                inverse video.

          F9  - Use Special Attribute:  The  current attribute is set to  that
                last defined using F2.  Further typing, lines, and boxes  will
                add characters with this attribute.

          F10 - Type Special Character:  The special character defined with F2
                is entered onto the form at the cursor position in the current
                attribute.

      Other Form Editor Features

          Alt-F1              Execute view:  shows how form looks without
                              special printer characters (as when executing)
          Home                Move cursor to line 1 and column 1.
          End                 Move cursor to last row and column 133
          Tab                 Move cursor right 8 columns.
          BackTab             Also shift-Tab.  Moves cursor left 8 columns.
          PgUp                Move form down 23 lines.
          PgDn                Move form up 23 lines.
          Insert              Toggle between insert and overwrite text.
          Delete              Delete character at the cursor
          Control Right Arrow Move cursor to column 133.
          Control Left Arrow  Move cursor to column 1.
          Control N           Insert blank line at cursor.
          Control Y           Delete line at cursor.
          Control D           Place current date on form (will not update)
          Control T           Place current time on form (will not update)

      Special characters may be inserted in your form using the 'Alt' key  and
      pressing a letter.   These  perform special functions  when you  execute
      and/or print your  form although they  are not seen  when executing  it.
      The following are pre-defined:
          Alt-B   Print Boldface, Enhanced text
          Alt-C   Print Compressed text (17 characters per inch)
          Alt-D   Enter the current date when executing form

                                         10
                                     CastleSoft


                                     FORM MASTER

          Alt-E   Print Elite text (12 characters per inch)
          Alt-F   Enter the form sequence number when executing form
          Alt-H   Print Higher, Superscript
          Alt-I   Print Italic text
          Alt-L   Print Lower, Subscript
          Alt-O   Overstrike with next line (skip line feed after
                  printing line - therefore 2 lines are printed on top of
                  each other)
          Alt-P   Print Pica text (10 characters per inch)
          Alt-T   Enter the current time when executing form
          Alt-U   Print with Underline
          Alt-X   Print Expanded text
      Other Alt-letter combinations can be defined as needed for other printer
      functions.  Refer to  the section on 'Adding  More Printer Functions  To
      Form Master'.

      Note:  If  Alt-D,  Alt-F,  or Alt-T is used adjacent to one of the other
      Alt-letters, it  should be  placed second.   For  example, to  have  the
      current date underlined place the characters in the following order:
           Alt-U Alt-D   .          (See the example Invoice form.)

      Note:  If  you  place  one  Alt-U  character  on  a  line  to  underline
      characters, underlining will continue only to the last character on  the
      line. If you want the underlining to  continue to the right side of  the
      form beyond the last character, place a second Alt-U at the right end of
      the line.


      3.3.  Form Master Program Form Executor

      The form  executor  is used  to  fill in  forms  and/or to  print  them.
      Actually filling in and  printing are optional.   You can print to  your
      printer or to a  file if your  printer is unavailable.   The form  field
      inputs you have typed can  be saved to a file.   Likewise, you can  load
      the input  fields  on  your  form  from a  file.    This  is  handy  for
      complicated forms with many input fields or to review how previous forms
      such as invoices were filled out.   The form executor also handles  such
      features as word wrap, field justify, look-up, and math operations.

      When the form executor takes control,  you will see your form appear  on
      lines 2  through  25 of  your  display.   The  special  printer  control
      characters will not  be visible.   Automatic form  date, numbering,  and
      time will have  updated your form  if you included  these options  while
      editing.  The first line will display 'EXEC:' followed by the form  name
      and the cursor position.  An 'Insert Mode' will appear on the first line
      if you are  in insert mode  meaning characters will  be inserted at  the
      cursor as you type instead of replacing existing ones.

      The following is a description of the default functions available.  Keep
      in mind that it is  possible to leave out  some of these functions,  add
      others, or even  change the function  keys used.   This is  accomplished
      using advanced features described later.  Those functions available  for
      your form can be displayed using F1 (help).

          ESC - Exit  Form  Execute:     Terminates  form   execution.     Two
                consecutive pushes of this key are required.

                                         11
                                     CastleSoft


                                     FORM MASTER

          F1  - Help:  Displays  on-screen help.   Basic  help information  is
                shown first.  Pressing F1 a second time will provide  detailed
                generic help.  Pressing F2  instead will cause Form Master  to
                display the file having the same  name as the form but with  a
                '.HLP' extension.  Thus you can  build a custom help file  for
                your form.  The 'Printer' form has its own help file which  is
                PRINTER.HLP.  Pressing any other  key after the first F1  push
                will resume the form executor.

                NOTE:  If the function keys have been re-defined, the  generic
                help is not available.  Pressing F1 a second time will display
                the form's customized help file instead (if it exists).

          F2  - Restore Form:  Restores the form back to where it was when you
                started the form executor,  ready to be filled  in.  The  only
                difference is the  form number will  have been incremented  if
                you had printed  the form, and  you will have  a new date  and
                time if  these are  automatically fill  in.   Two  consecutive
                pushes of this key are required.

          F4  - Field Look-up:   Those  fields  defined for  look up  will  be
                processed.  Their field contents will be compared against look
                up files.   In each case  one or more  fields may be  replaced
                with information from these files.  Two consecutive pushes  of
                this key are required.

                F4 processes all look-up fields in your form in one step.   To
                look-up the field that the cursor is currently in, use Alt-F.

          F5  - Temporarily Go To  DOS:   Executes a  DOS shell  and you  will
                receive a DOS prompt.  A second press of F10 is required.  Use
                this to execute DOS functions  such as DIR, TYPE, COPY,  etc.,
                or even to  execute another program.   To return  to the  form
                executor enter EXIT at a DOS prompt.

          F6  - Math Operations:   Performs math operations  on numbers  taken
                from specified fields.  Results can be placed into one or more
                fields.  Two consecutive pushes of this key are required.

          F7  - Load fields from an  edit file:  All  the fields on your  form
                will be filled  in using  lines from  a file  of your  choice.
                When loading fields from a file, each line from the file  will
                be used to  fill in  one field  on the form.   If  a field  is
                longer than  the line  used to  fill it,  the field  is  blank
                filled at the end. Fields are filled until the end of file  is
                reached or when all the fields  are filled.  This function  is
                used to re-load entries saved earlier with F8.

                After pressing F7,  a "Load fields"  pop-up menu will  appear.
                Enter a file name and press F1 to continue.

                To load the form  fields again, press F7.   The "Load  fields"
                pop-up menu will now show a new option.  You can then use  F10
                to continue reading from  the current load file;   or you  can
                specify a new  load file and  press F1.   (Alt-L performs  the
                same function as the F7-F10 combination in one step.)

                                         12
                                     CastleSoft


                                     FORM MASTER

          F8  - Save fields to  an edit file:   Saves your  form's fields  for
                later use.  When saving the fields to a file, the contents  of
                each form input field will be used in order to fill the  lines
                of the edit file.  Use  this option to save your form  entries
                if you would like to use them  again (F7) or to make a  record
                of what you typed.

                After pressing F6,  a "Save fields"  pop-up menu will  appear.
                Enter a file name and press F1 to continue.  Form Master  will
                check for the existence of  this file.  If  it is a new  file,
                you will be prompted to  press F8 to create  it.  If the  file
                exists, a pop-up  menu will allow  you to append  (add to  the
                end) to the file or replace it.

                To save the form  fields again, press F8.   The "Save  fields"
                pop-up menu will now show a new option.  You can then use  F10
                to append to the current save file;  or you can specify a  new
                save file and press F1.  (Alt-S performs the same function  as
                the F8-F10 combination in one step.)

          F9  - Print to a file:  A "Print to a file" pop-up menu will  appear
                showing the current printer configuration.  To continue  enter
                a file name.  You can also change the default number of copies
                to print that has been defined for the form.  Press F9  again.
                You will then be prompted to  press F9 a third time to  create
                the file or replace it, whichever applies.

                Printing to a file is useful if your printer is currently  not
                available.  The file  that is written will  contain the   same
                characters  including  printer  configuring  escape  sequences
                which would normally have gone to your printer if you had used
                F10.  To send the contents  of this file to your printer,  use
                the DOS copy command (i.e., COPY filename PRN).

          F10 - Print to your printer:  A "Print form" pop-up menu will appear
                showing the current printer configuration.  You can change the
                default number of copies to print at this point.  To continue,
                press F10 again.   Forms are printed  to the standard  printer
                device - PRN.

      NOTE:     The form sequence number is  incremented by one each time  the
                form is printed.

      Additional  functions  can  also  be  defined  using  advanced  features
      described later.  Here are the currently available functions:

          o     List a file one page at a time.

          o     Execute another program.

          o     Perform a DOS command such as DIR, COPY, batch file ...






                                         13
                                     CastleSoft


                                     FORM MASTER

      Other Form Executor Features

          Tab          Go to beginning of next input field.
          Return       Go to beginning of next input field, or in the case of
                       a wrapping field, go to the wrap-to field
          BackTab      [Shift-Tab]  Go to beginning of previous input field.
          Home         Move cursor to row 1 and column 1.
          End          Move cursor to the last row and column.
          PgUp         Move form down 23 lines.
          PgDn         Move form up 23 lines.
          Insert       Toggle between insert and overwrite text.
          Delete       Delete character in the input field at cursor.
          Control Return  Delete characters from cursor position to the
                       end of the field.
          Alt-F        Perform look-up for the field the cursor is currently
                       in.
          Alt-L        Load form fields again from currently open load file.
                       This is the same as an F7, F10 combination.
          Alt-S        Save form fields and append them to the currently open
                       save file.  This is the same as an F8, F10 combination.


      4.  Running The Form Executor Only

      Previous versions of Form Master  had a separate form executor  program,
      FORM.EXE.  This program is not included because of space  considerations
      on the 5-1/4 inch floppies.   However, FORM.BAT has been included  which
      runs FM.EXE as  a form executor  only.   List FORM.BAT to  see how  this
      works.

      Using FORM.BAT is the preferred method of executing forms, especially if
      other people will be using your form.  Simply type from DOS:
          FORM formname      <press enter>
      where 'formname' is the name of the form you wish to execute.  Your form
      will appear on the screen ready to be filled in and/or printed.  You can
      leave off the '.FRM' file extension if  you want.  If you leave off  the
      form name entirely,  a "Load  form" pop-up menu  will appear.   You  can
      enter a form name,  its disk drive and/or  directory (leave blank if  in
      the current directory), and then  press F5 to load it;   or you enter  a
      disk drive and/or  directory (leave blank  if current directory),  press
      F10 to display  the forms in  the directory, select  one with the  arrow
      keys, and then press 'Enter' to load it.

      The form executor program operates in the same manner as described above
      in section 3.3.

      There are two other options for using FORM.BAT which make it useful as a
      menu interface to  another application.   The following  can be  entered
      from a DOS prompt or can be part of a batch file:

          FORM formname input output

              Form Master will read  in the form  'formname', load its  fields
              from the file 'input', then execute the form.  Upon exiting, the
              form fields are saved in the file 'output'.


                                         14
                                     CastleSoft


                                     FORM MASTER

          FORM formname iofile

              Form Master will read  in the form  'formname', load its  fields
              from the file 'iofile',  then execute the  form.  Upon  exiting,
              the form fields are saved in the file 'iofile'.

      In each case  the input file  does not have  to exist.   One example  of
      using FORM.BAT this way is in  printer configuration, sections 6 and  7.
      The CONFIG.BAT procedure executes FM.EXE in a similar manner to  provide
      a file of definitions for the program PRINTER.COM.

      NOTE:  FM.EXE requires  320 Kbytes of  RAM to execute.   If you plan  to
      execute forms on machines having only 256 Kbytes of RAM, you may want to
      purchase FORM.EXE since it will run on those machines.  Cost is $5.


      5.  Advanced Features

      Advance feature  editing provides  such functions  as function  key  re-
      definitions, word  wrap, field  justify, look-up,  and math  operations.
      These features are accessed through F9 on the main menu after a form has
      been loaded or  created.  Forms  edited in this  manner have  additional
      information added to them (making them require somewhat more disk space)
      which can then be utilized by the form executor.

      To further understand how these features may work for you, try executing
      the form FEATURES.FRM (enter from a DOS prompt:  FM FEATURES).

      Three special forms have been set up  for Form Master so it can  support
      addition and modification of advanced features for your forms:
         FMKEY.FRM  for re-defining the functions keys,
         FMWRD.FRM  for defining word wrap, field justify, field look-up, and
                    read only fields,
         FMMTH.FRM  for defining math operations.
      Form Master will display information about  the form you are working  on
      using these  three special  forms.   Simply fill  in and/or  modify  the
      information you see to add special features to your form.

      After pressing F9  twice on  the main  menu, three  temporary files  are
      created from your form  which are used  to fill in  fields on the  above
      special forms.  These temporary files are modified when you execute  the
      special forms.  A  fourth file, FIELDS.LST, is  created which lists  the
      position and size of all the fields on your form.  At this point you are
      presented with a pop-up menu giving you  4 choices:  go to (1)  function
      key re-definition, (2) word processing features, (3) math operations, or
      (4) return to the main menu.  Each of the first three choices causes one
      of the above special forms to be executed.   You then fill it in.   Each
      special form has its own help file.   You may want to print these  files
      (FMKEY.HLP, FMWRD.HLP,  FMMTH.HLP)  for  reference.   When  you  exit  a
      special form, the pop-up  menu is presented again.   When you return  to
      the main menu, the  information in the three  temporary files is  merged
      with your form so  the form executor  can utilize it.   Don't forget  to
      save your form (F6 on main menu) so your work will not be lost.

      The word processing features and  math operations special forms  require
      you to enter in the number of various fields.  Form Master numbers  your

                                         15
                                     CastleSoft


                                     FORM MASTER

      input fields in the following way:   The first field is field number  1.
      It is where  the cursor will  first lie  when you execute  the form  (an
      exception is where the first field does  not lie on the first screen  in
      which case you must tab to get to it).  Pressing the Tab key will  place
      the cursor into field 2.  Pressing  it again will place it into field  3
      and so on.  For your convenience, a function key on the word  processing
      and math operations special forms is used to display the file FIELDS.LST
      showing you the location and size of each field.  It is also helpful  to
      have a printed copy of your form handy.

      Since the word  processing feature  and math  operation definitions  are
      tied to the numbering of your fields, these features may not work if you
      add or delete fields  on your form.   Therefore, if you  edit a form  in
      such a way as to cause changes in the numbering of its fields, you  must
      make corresponding changes to its features using these special forms.

      NOTE:  The special feature forms should be placed the same directory  as
      you execute  Form Master  from.   Look-up  files  should reside  in  the
      directory as their associated form.

      All further information regarding advanced features can be found in  the
      special feature form help files.  To better learn how to use the special
      feature forms, begin with the FEATURES  form.  Start Form Master  (enter
      from DOS:  FM)  and load the FEATURES  form.   Press  F9 twice and  then
      explore the special feature forms:  F1, F2, and F3.  Try making changes,
      then execute FEATURES to see what happens.


      6.  Adding More Printer Functions To Form Master

      You can add more printer functionality to Form Master if you would  like
      to take advantage of additional features  of your printer.  Form  Master
      is very configurable.  The way to  do this is to build the file  FM.PRT.
      This is discussed at  the end of  this section.   FM.EXE checks for  the
      existence of FM.PRT prior  to printing.   If it exists,  it is read  and
      used instead of  the default configuration.   To return  to the  default
      configuration, delete or rename FM.PRT.

      You have  many options  for adding  functionality.   Recall, that  while
      editing a form, holding down the Alt key and typing a letter inserted  a
      special character into the form which is later interpreted when the form
      is executed.  Since  there are 26 letters  in the alphabet, there  would
      appear to be  26 printer  configuration possibilities.   However  Alt-D,
      Alt-F, and Alt-T  are used  for automatic  form date,  number, and  time
      insertion.   Alt-O is  used to  cancel the  line feed  after a  line  is
      printed so  the  next line  is  printed on  top  of  it.   This  is  how
      overstriking is done by Form Master.  There are 22 letters left.  All 22
      possibilities are available for printer configuring.  Some are  reserved
      for the following functions but you may redefine them any way you wish:
          Alt-B   Boldface, Enhanced text
          Alt-C   Compressed text (17 characters per inch)
          Alt-E   Elite text (12 characters per inch)
          Alt-H   Higher, Superscript
          Alt-I   Italic text
          Alt-L   Lower, Subscript
          Alt-P   Pica text (10 characters per inch)

                                         16
                                     CastleSoft


                                     FORM MASTER

          Alt-U   Underline
          Alt-X   Expanded text
      In each  of the  22 possibilities,  a printer  invoking sequence  and  a
      printer canceling sequence can be defined.  This is so the form executor
      will know what to send to your printer  to set a print mode and what  to
      send to your printer to cancel the mode.

      Here is a description of how  your printer is configured when lines  are
      printed.  Characters  are sent to  your printer  one at a  time as  they
      appear on your form.  However if a special printer control character  is
      encountered, the  form executor  will send  the invoking  or  cancelling
      sequence instead.  The first time a special printer control character is
      encountered on a line, the invoking sequence is sent.  The second  time,
      the cancelling sequence is sent.  The third time, the invoking  sequence
      is sent, and so on.  Thus you  can turn a printer mode on and off  (such
      as underlining) as often as you wish  within a line.  You don't have  to
      place the cancelling sequence at the end of  a line.  When the end of  a
      line is reached,  the form executor  will turn off  any printer  options
      left on by sending the cancelling sequences.

      In each case, it is not necessary to define an invoking or a  cancelling
      sequence.  The form executor will send nothing to your printer if  there
      is nothing defined.   If  you want to  configure your  printer for  near
      letter quality  and  have it  stay  that way  while  the whole  form  is
      printed, you can  do the following:   Define the  invoking sequence  for
      Alt-A to be whatever  is required by  your printer to  put it into  that
      mode.  Leave the cancelling sequence for Alt-A blank.  Then put an Alt-A
      character into the upper left corner of your form with the editor.

      Printer configuration also allows you to  define a sequence of up to  12
      characters to  send to  your printer  prior to  start of  printing,  and
      another sequence  when  printing is  finished.   These  are  called  the
      'initial startup' and 'termination' sequences.  For example, you can use
      the startup sequence to configure  your printer for near letter  quality
      before printing a form,  and the termination sequence  to reset it  when
      through.

      Printer configuration requires the following  files to be present:   (1)
      the configuration procedure CONFIG.BAT,  (2) the form executor,  FM.EXE,
      (3) the  printer configuration  form PRINTER.FRM,  and (4)  the  printer
      program PRINTER.COM.

      Here are the steps for printer configuration:

          o  Enter the following command from DOS:
                CONFIG configfile      <press enter>
             where 'configfile' is the name  of a configuration file.   (Note:
             This  assumes   that   CONFIG.BAT,   FM.EXE,   PRINTER.COM,   and
             PRINTER.FRM are on the default drive.)  The printer configuration
             form will then appear.

             'configfile' need  not exist  and  will not  the first  time  you
             configure.   However  this file  will  contain all  your  printer
             control strings so it is  wise not to delete  it.  Choose a  name
             related to your printer and one you won't forget.


                                         17
                                     CastleSoft


                                     FORM MASTER

          o  Fill in the  form.   The first  input field is the name  of  your
             printer.  Change it if necessary.  This field is displayed on the
             print pop-up menu  by the  form executor just  prior to  printing
             your forms.  Fill  in the invoking  and cancelling sequences  for
             any of the  22 available letters  you want to  define.  You  must
             enter the sequences in hexadecimal notation.  Your printer manual
             should list these sequences  in hexadecimal.  Contact  CastleSoft
             for support  if you  have problems  here.   Fill in  the  printer
             'Initial Startup Sequence' with anything you want to send  before
             a form is printed.   Fill in  the printer 'Termination  Sequence'
             with anything you want to send after a form is printed.  The rest
             of the  form allows  you  to redefine  the special  IBM  graphics
             characters.   For  instance,  some  printers  that  can  print  a
             vertical bar will  require a  different character be  sent to  it
             than the one use in the form.  An Epson LX-800 printer will print
             a vertical bar  if sent 'B3'  but a Gemini  10X printer  requires
             'F5'.  You  shouldn't have  to worry about  redefinition if  your
             printer is Epson LX-800 compatible.

          o  Press  'ESC'  twice.   The program  PRINTER.COM will  be  invoked
             automatically.  It will  create the file  'FM.PRT' if it  doesn't
             exist or replace it if it does.

          o  Make  sure  FM.PRT is in your  current  directory  when  you  run
             FM.EXE.  It uses this file, if it exists, to re-configure to your
             printer when printing a form.


      7.  Configuring Form Master For Your Printer

      Configuring Form Master  to your  printer is  necessary if  you want  to
      print a form using print features  where your printer is not  compatible
      with the Epson LX-800 printer.   The method is  the same as outlined  in
      section 6.  If  you have problems or  questions, contact CastleSoft  for
      support.

      It is possible that your printer  is Epson LX-800 compatible and yet  it
      does not print lines and boxes correctly.  Instead italic characters are
      printed where the lines should be.  This is caused by your printer being
      in standard mode and  not IBM mode.   Usually a  dip switch inside  your
      printer will  control  this.   Changing  its position  may  correct  the
      problem.   Another approach  is to  configure using  the modified  Epson
      configuration file EPSON2.CFG.  Enter the following command:
              CONFIG EPSON2.CFG
      Then press ESC twice  after the printer  configuration form appears  and
      the file  FM.PRT will  be created,  or replaced  if it  already  exists.
      Later, if you  want to return  to the default  configuration, delete  or
      rename FM.PRT.

      If you are still having problems printing lines and boxes, here are some
      more tips:  Check your printer  manual for different types of  character
      sets - choose the IBM character set  instead of the standard set.   Make
      sure you printer is configured to receive 8 bit characters.  If you have
      an HP Laserjet, use the PC-8 symbol set (front panel setting of IBM-US).



                                         18
                                     CastleSoft


                                     FORM MASTER

      8.  If You Have Computer Compatibility Problems

      Forms are placed  onto your monitor  by writing directly  to the  screen
      buffer.  This makes them appear very fast but can lead to  compatibility
      problems if your computer is not completely IBM PC compatible.  This can
      also cause snow  on IBM computers  equipped with the  old color  display
      adapters.  A modified version of Form Master is possible which  disables
      this feature.   This  should allow  compatibility with  more PC  clones.
      Contact CastleSoft for more information.


      9.  Form Master Files

      The following files comprise the Form Master software package:

          FM.EXE          Form Master program file
          FM.DOC          Form Master documentation
          FORM.BAT        Runs Form Master form executor only

          FMMENU.HLP      Main menu help file
          FMEDIT.HLP      Form creation/maintenance help file
          FMEXEC.HLP      Form execute help file
          FMKEY.FRM       Form supporting editing function key definitions
          FMKEY.HLP       Help for function key definitions
          FMKEY.LU1       Look up file for FMKEY.FRM
          FMWRD.FRM       Form supporting editing word processing features
          FMWRD.HLP       Help for word processing features
          FMMTH.FRM       Form supporting editing math operations
          FMMTH.HLP       Help for math operations

          CONFIG.BAT      Printer configuration procedure
          PRINTER.COM     Printer configuration program which builds FM.PRT
          PRINTER.FRM     Form used for configuring your printer.  The default
                          Epson LX-800 inputs are included.
          PRINTER.HLP     On-screen help for PRINTER.FRM
          EPSON2.CFG      Alternate printer configuration if you have trouble
                          printing lines and boxes
          HPLASER.CFG     Printer form load file showing HP Laser Jet
                          configuration

          LESSON1.FRM     Lesson 1 - Basics
          LESSON2.FRM     Lesson 2 - Using Attributes
          LESSON3.FRM     Lesson 3 - Lines And Boxes
          LESSON4.FRM     Lesson 4 - Special Functions
          TUTORIAL.DOC    Step by step tutorial for building a form

          REG.FRM         Registration form
          INVOICE.FRM     Example invoice form
          COLOR.FRM       Example form showing use of colors if you have a
                          color monitor
          PTEST.FRM       This form tests some of your printer capabilities
          MESSAGE.FRM     Example phone message form
          CALENDAR.BAT    Build calendar form for given month
                          Enter from DOS prompt: CALENDAR
                          A calendar form help file is provided.
          MONTH.COM       Builds the appropriate month for the Calendar form

                                         19
                                     CastleSoft


                                     FORM MASTER

          CALENDAR.FRM    Calendar form
          CALENDAR.HLP    On-screen help for CALENDAR.FRM
          SIGNIN.FRM      Example child care sign-in form
          FEATURES.FRM    Example form showing word wrap, math, etc.
          FEATURES.HLP    On-screen help for FEATURES.FRM
          FEATURES.LU1    Look-up file for FEATURES.FRM

      Required files
         - for form execution:  FM.EXE

         - for form creation/editing:  FM.EXE, FMKEY.FRM, FMWRD.FRM, FMMTH.FRM

         - to change default printer configuration:  FM.PRT (must create)

         - to create or replace FM.PRT:  CONFIG.BAT, FM.EXE,
                                         PRINTER.FRM, PRINTER.COM

      It is suggested that  you copy all  the Form Master  files to your  work
      diskette or hard disk until you become familiar with this software.

      IMPORTANT:  If you use a printer configuration file, FM.PRT, place it in
      the directory you execute Form Master from.  Form Master help files must
      be there.  If you plan to  edit your forms for advanced features,  place
      the special forms FMKEY.FRM, FMWRD.FRM, and FMMTH.FRM there also.   Form
      specific help files, and  look-up files, (files  with a '.LU1',  '.LU2',
      '.LU3', or '.LUP'  extension) should  be placed in  the directory  where
      their associated forms reside.


      10.  Error Messages

      Following is  an alphabetical  list of  Form Master  error messages  and
      explanations:

      0 to 0 power encountered
          During math, 0 to the 0 power was encountered.  '1' was used as the
          result.

      Bad field # nnn
          During math, an out of range or bad number for a field encountered.

      Bad Field Attribute [xx: x=0-9,A-F]
          Attributes are 2 characters long where each character is a number
          from 0 to 9 or a letter from A to F.

      Bad Form Number [enter number]
          A valid number must be entered.

      Bad format: fff, field nnn
          During math, field number 'nnn' had an illegal format of 'fff'.

      Bad Line Feed Count [enter number >= 0]
          A valid number greater than or equal to zero must be entered.

      Bad Number Of Columns [20-133]
          A valid number between 20 and 133 must be entered.

                                         20
                                     CastleSoft


                                     FORM MASTER

      Bad number of copies to print
          A valid number between 1 and 99 must be entered.

      Bad Number Of Rows [1-132]
          A valid number between 1 and 132 must be entered.

      Bad operand:   xxx
          During math, a bad value of 'xxx' was encounted in an expression.

      Bad Pre-print Specifier [Y or N]
          'Y' for pre-print forms, or 'N' for normal printing must be entered.

      Bad Print Count [enter number > 0]
          A valid number between 1 and 99 must be entered.

      Bad value in field nnn: xxx
          During math, an out of range or bad value of 'xxx' was
          encountered in field 'nnn'.

      Could not update form on disk
          After printing, the form's sequence number is incremented and the
          form is updated on disk.  This was not possible due an open or write
          error.  Most likely cause is the diskette containing the form was
          removed.

      Divide by zero
          During math, a divide by zero was encountered.

      DOS Error
          Contact CastleSoft.

      End Of File - No more fields
          When loading fields from a file, the end of the file was reached
          before the last field was filled.

      Error writing field list file
          Most likely out of room on diskette.

      Field file create error
          Most likely out of room on diskette.

      Field file read error
          Most likely a diskette was swapped during advanced feature editing.

      Field number bad or out of range
          A word processing features form field was bad or out of range.

      File could not be opened on disk
          Most likely out of room on diskette.

      File could not be written on disk
          Most likely out of room on diskette.

      File not found
          File not in expected directory or doesn't exit.


                                         21
                                     CastleSoft


                                     FORM MASTER

      File open error
          File not in expected directory or doesn't exit.

      File open error:  nnn
          The look-up file 'nnn' not in expected directory or doesn't exit.

      File read error
          File bad.

      File write error
          Most likely out of room on diskette.

      Form could not be opened on disk
          Most likely out of room on diskette.

      Form could not be written to disk
          Most likely out of room on diskette.

      Form file is bad
          File does not contain form or is bad.

      Form help file name error
          Contact CastleSoft.

      Form not found
          Form not in expected directory or doesn't exit.

      Form read error
          Form file bad.

      Format too large for field nnn
          During math, the format specified for field 'nnn' was greater than
          the length of the field.

      Help file not found:  nnn
          Help file 'nnn' not found.

      Help file read error:  nnn
          File 'nnn' is bad.

      Illegal read-only:  n.  Changed to blank
          The read-only flag must be 'Y', 'N', or blank.

      Illegal justify:  n.  Changed to blank
          Justify must be 'R', 'C', 'L', or blank.

      Illegal output specifier:  xxx
          During math, output can only be sent to a field, or to registers A
          through F.

      Illegal look-up:  n.  Changed to blank
          The look-up flag must be '1', '2', '3', or blank.

      Insufficient Memory
          You don't have enough memory (RAM) to run a DOS shell.


                                         22
                                     CastleSoft


                                     FORM MASTER

      Must enter "A" or "R"
          Must enter 'A' for append to, or 'R' for replacement of file

      Must enter file name

      Must enter form name

      Must pick range from 1 to 24 lines
          Form editor can only pick from 1 to 24 lines.

      Negative power encountered
          Form Master can not take a number to a negative power.

      Next field value bad or out of range
          Number of field to word wrap to bad.

      No current load file, use F7 first
          Use F7 for first load from a file then Alt-L for subsequent loads.

      No current save file, use F8 first
          Use F8 for first save to a file then Alt-S for subsequent saves.

      No form files found
          There are no forms in the specified directory.

      No input fields present
          The form has no input fields for entering text.

      No lines picked, use F5 first
          Pick lines before trying to put them.

      No look-up fields present
          The form has no fields defined for look-up.

      No match for:  nnn
          The look-up key 'nnn' was not found in the look-up file.

      No math operations defined
          The form has no math expressions defined.

      Not in look-up field
          Alt-F only works when the cursor is in a look-up field.

      Open or write error
          The file being printed to is read only, or possibly out of room on
          diskette.

      Overflow in field nnn
          During math, the format specified for field 'nnn' is too small for
          the size of the number.

      Power of negative number
          Form Master can not take the power of a negative number.

      There is no current form
          You must load a form first.

                                         23
                                     CastleSoft


                                     FORM MASTER

      This form is edit protected
          Modification of this form is not allowed.

      This form is protected - can't overwrite
          Writing of this form is not allowed.

      This is an EDIT ONLY form
          The intended use of this form is for editing only.

      This is an EXECUTE ONLY form
          The intended use of this form is for executing only.

      Too many fields.  Press any key ...
          Form Master can only support forms up to 500 fields.

      Unknown command: nnn
          A function key has been re-defined to an unknown command.


      11.  Registering Your Copy

      If you  copy this  program and  find it  useful, please  register it  by
      sending $25.00 to:
              Brad Simpson
              CastleSoft
              P.O. Box 695
              Castle Rock, CO  80104-0695
              (303)688-2954

      A printed manual is available for an additional $10 (includes shipping).

      Reasons for registering your copy are:
              o  Form Master is an evolving product.  New features are
                 planned.  User support pays the cost of these improvements.
              o  You will receive the latest version of this package along
                 with telephone support.  If you already have the latest copy,
                 the next one will be sent when it becomes available.
              o  You will be notified of future updates.
              o  Form Master may just be well worth the registration fee.

      Form Master has been designed for further growth and flexibility.  If it
      doesn't quite meet your  needs, it may be  possible to customize it  for
      you specific application.  Any suggestions for future enhancements  will
      be welcome.   Users  will help  determine where  Form Master  goes  with
      respect to adding new  features.  The  following enhancements are  being
      considered:

              o  Improved form editor with more functionality
              o  Word unwrap to complement word wrap
              o  Direct interfacing to database files such as dBase files
              o  Multi-page forms
              o  More example forms
              o  Windows and OS/2 compatibility




                                         24
                                     CastleSoft


                                     FORM MASTER

      Additional Notes:

      Form Master is written in Microsoft FORTRAN.  The code has been enhanced
      with additional keystroke, sound, display, and system related  functions
      using a utility library,  FORUTIL.LIB.  This  library is available  from
      CastleSoft for a small cost.  Versions exist for both the Microsoft  and
      Lahey compilers.  Contact CastleSoft for more information.


















































                                         25
                                     CastleSoft


```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk #1099 FORM MASTER  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation, type: COPY FM.DOC PRN (press enter)         ║
║                                                                         ║
║ To run the program, type: FM (press enter)                              ║
╚═════════════════════════════════════════════════════════════════════════╝
(c)Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## TUTORIAL.DOC

{% raw %}
```
Following is a step by step procedure for building a working form.  You should 
proceed here only after finishing the four lesson forms.

The form to be built here is a simple cat show registration form.  It should 
provide insights to help you build your own customized forms.  All keystrokes 
will be listed on the left side with explanations given on the right.  It is 
assumed that you are now in a directory containing the file FM.EXE. 

------------------------------------------------------------------------------

type: FM <Enter>                        Start the Form Master program
press: F2 3 times                       Proceed to editor to create form
                                        After pressing F2 the second time,
                                        make sure that '70' is listed as an
                                        input field attribute.  The other 3
                                        attributes should be '00'.

move cursor to row 2 column 35
type: ACME Cat Show
move cursor to row 4 column 5
type: Name                              Name field label
move cursor to row 6 column 5
type: Address                           Address field label
move cursor to row 9 column 5
type: Pet's Name                        Pet's name field label
move cursor to row 11 column 5
type: Competition                       Competition field label

press: F8                               Go to inverse video (attribute 70)
move cursor to row 4 column 20
press: space bar 25 times               Create name field
move cursor to row 6 column 20
press: space bar 25 times               Create 1st address field
move cursor to row 7 column 20
press: space bar 25 times               Create 2nd address field
move cursor to row 9 column 20
press: space bar 25 times               Create name field
move cursor to row 11 column 20
press: space bar 25 times               Create competition field
press: F7                               Go back to normal video (attribute 07)

press: Home
press: F3 twice                         Start box
move cursor to row 12 column 78
press: F4 twice                         Finish box

move cursor to row 2 column 69
hold down Alt and type f                Alt-F causes form number to be 
                                        inserted during form execution
move cursor to row 4 column 65
hold down Alt and type d                Alt-D causes date to be inserted
                                        during form execution
move cursor to row 2 column 35
hold down Alt and type b                Alt-B starts boldface printing
move cursor to row 2 column 49
hold down Alt and type b                2nd Alt-B stops boldface

hold down Alt and press function key F1  View form without special characters
                                        which cause right side of box to
                                        appear uneven
press F1                                Return to editing

press: ESC
enter a 12 after 'Number Of Rows'       This form is 12 lines long
enter a 1001 after 'Form Number'        Start numbering forms at 1001
enter a 54 after 'Line Feeds...'        Add 54 lines so page is ejected after
                                        printing 12 lines (66 lines total)
press: ESC                              Return to main menu

press: F6
type: Catshow                           Name of form will be 'CATSHOW'
press: F6 twice                         Create the form 'CATSHOW'

press: F4                               Execute the form
fill in form
press: F10 twice                        Print the form
press: ESC twice                        Return to main menu

------------------------------------------------------------------------------

At this point you can make further changes to the form by pressing F3 twice 
(edit current form) instead of F2 (create form).  You can also return to DOS 
by pressing ESC twice.

NOTE:  If you need to make the form longer than 12 lines, don't forget to 
change the number of rows before proceeding to the editor. 

If the box around the form does not print correctly, see the section 
"Configuring Form Master For Your Printer" in the documentation.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1099

     Volume in drive A has no label
     Directory of A:\

    READ     ME       3222   3-24-90  11:49a
    FM       EXE    111270   3-24-90  12:09p
    FM       DOC     77355   3-25-90   5:34p
    FORM     BAT       121   1-28-90  11:18a
    FMMENU   HLP     10828   2-03-90   1:55p
    FMEDIT   HLP      8819   2-03-90   2:07p
    FMEXEC   HLP      7780   2-03-90   2:18p
    FMKEY    FRM      1024   2-03-90   5:10p
    FMKEY    HLP      3947   2-18-90  10:11p
    FMKEY    LU1       247   1-27-90   3:46p
    FMWRD    FRM      3072   2-03-90   3:46p
    FMWRD    HLP      8326   2-24-90   9:43p
    FMMTH    FRM       512   2-03-90   3:46p
    FMMTH    HLP      5989   2-04-90   5:48p
    CONFIG   BAT      1590   1-28-90   5:18p
    PRINTER  COM     14690  11-14-89   9:40p
    PRINTER  FRM      3584   2-03-90   3:47p
    PRINTER  HLP      5195   2-03-90   4:44p
    EPSON2   CFG      1686   6-12-89  10:30p
    HPLASER  CFG      1338   1-28-90   5:22p
    LESSON1  FRM      4608   2-03-90   4:15p
    LESSON2  FRM      5632   2-03-90   4:15p
    LESSON3  FRM      5120   2-03-90   4:15p
    LESSON4  FRM      5120   2-19-90  10:05p
    TUTORIAL DOC      4264   2-19-90   9:25p
    REG      FRM      1024   3-24-90  11:52a
    INVOICE  FRM      1536   2-03-90   3:48p
    COLOR    FRM      1024   2-03-90   3:49p
    PTEST    FRM       512   2-03-90   3:49p
    MESSAGE  FRM      1024   2-03-90   3:49p
    CALENDAR BAT        66   1-29-90   9:03p
    MONTH    COM     14556   1-29-90   9:14p
    CALENDAR FRM      4608   2-03-90   3:49p
    CALENDAR HLP      1201   1-29-90   9:29p
    SIGNIN   FRM      2560   2-03-90   3:49p
    FEATURES FRM      2048   2-03-90   4:30p
    FEATURES HLP       173   2-03-90   1:17p
    FEATURES LU1       146   1-29-90  10:35p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       574   7-09-90   1:10a
    FILE1099 TXT      2221   7-10-90   2:04p
           41 file(s)     328650 bytes
                           13312 bytes free
