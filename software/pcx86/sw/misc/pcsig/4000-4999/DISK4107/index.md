---
layout: page
title: "PC-SIG Diskette Library (Disk #4107)"
permalink: /software/pcx86/sw/misc/pcsig/4000-4999/DISK4107/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #4107"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║   <<<<  PC-SIG DISK #4107 WEDL - Windows Enhanced Dialog Library >>>>   ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To Print documentation, type:  COPY WEDL.DOC PRN  (press Enter)        ║
║                                                                         ║
║  To Print registration form, type:  COPY REGISTER.DOC PRN (press Enter) ║
║                                                                         ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```

WEDL Registration Information

WEDL is a user-supported software product.  This means you are free to try
the software long enough to evaluate it and see if it meets your needs.
After a reasonable evaluation period, you are expected to either register
the software or cease using it.  Registering the software gives you many
benefits including:

    --  The full library source code.

    --  A high-quality printed manual.

    --  Royalty-free distribution of the WEDL.DLL library.  The evaluation
        version, WEDL-E.DLL, cannot be distributed.

    --  Unlimited technical support via E-mail or postal mail.

                          WEDL REGISTRATION FORM


NAME:_______________________________________________________________________


COMPANY:____________________________________________________________________


ADDRESS:____________________________________________________________________


____________________________________________________________________________


CITY, STATE:________________________________________________________________


ZIP CODE: ____________________________  COUNTRY:____________________________


TELEPHONE NUMBER:___________________  DISK SIZE:      5.25"     /     3.5"


WHERE DID YOU RECEIVE WEDL?_________________________________________________


WEDL Registration @ $55.00 per copy                            _____________

Shipping and Handling
(U.S.A. and Canada = $5.00,  Overseas = $10.00) per copy       _____________


Florida Residents, Add 7% State Sales Tax ($4.20) per copy     _____________


Total Amount Enclosed:                                         _____________


Payment must be with a check or money order payable in U.S. dollars and
drawn on a U.S. bank.  Make checks payable to Mike Smedley.

Purchase orders are accepted from Fortune 500, government, or educational
institutions ONLY for orders of 3 copies or more.

To register WEDL, send the above information and payment to:

        Mike Smedley
        P.O. Box 17325
        Jacksonville, FL 32245-7325

```
{% endraw %}

## WEDL.DOC

{% raw %}
```












                +----------------------------------------------+
                |                                              |
                |      W          W  EEEEE  DDDD    LL         |
                |      WW        WW  EE     DD  D   LL         |
                |       WW  WW  WW   EEEE   DD   D  LL         |
                |        WW WW WW    EE     DD  D   LL         |
                |         WW  WW     EEEEE  DDDD    LLLLLL     |
                |                                              |
                |                                              |
                |        Windows Enhanced Dialog Library       |
                |                                              |
                |                                              |
                |             Programmer's Manual              |
                |                                              |
                |                                              |
                |      Copyright (c) 1991, Mike Smedley        |
                |                                              |
                |             All Rights Reserved              |
                |                                              |
                |                                              |
                |               Version 1.21                   |
                |                                              |
                |             December 9, 1991                 |
                |                                              |
                +----------------------------------------------+


















                                      1    









                                SOFTWARE LICENSE

    This evaluation version of WEDL may be distributed, only in its
    entirety, for others to evaluate.  None of the evaluation files may be
    modified or deleted.  The evaluation version of the WEDL dynamic-link
    library (file name WEDL-E.DLL) cannot be distributed with applications
    built that use it.  This requires registration of the software.

    Software distribution companies that distribute user-supported software
    may distribute this evaluation version of WEDL and charge a disk copying
    fee not to exceed $10.00 in U.S. currency.






                                   DISCLAIMER

    The author of this software package, Mike Smedley, has used his best
    efforts in producing this software and documentation.  These efforts
    include the research, development, and testing of the software, and
    production of the documentation.

    The author makes no warranty of any kind, expressed or implied, with
    regards to the software or the documentation.  The author shall not be
    liable in any event for incidental or consequential damages in
    connection with, or arising out of, the furnishing, performance, or use
    of this software package.

    All pricing subject to change without notice.















                                      2    


                               TABLE OF CONTENTS


    Acknowledgements.....................................................6
    Introduction.........................................................7
    Welcome to WEDL!.....................................................8
    WEDL Features........................................................8
    System Requirements..................................................10
    Archive Contents.....................................................10
    Registration Information.............................................11
    WEDL Registration Form...............................................12
    Contacting the Author................................................13
    Programming Guide....................................................14
    Terminology..........................................................15
    Naming Conventions...................................................15
    How WEDL Fields Work.................................................15
    Creating the Dialog Box..............................................16
    Layout of the Dialog Procedure.......................................16
    Defining the Form....................................................17
    Defining Fields......................................................18
    Defining Buttons.....................................................18
    Defining Generic Controls............................................19
    Defining Status Messages.............................................20
    Writing Field Validation Functions...................................20
    Writing Error Handlers...............................................21
    Defining Context-Sensitive Help......................................21
    Compiling and Linking................................................22
    Executing the Program................................................22
    Common Programming Errors............................................22
    Function Reference...................................................25
    button_define........................................................26
    button_get_check.....................................................27
    button_get_from_ctrl_id..............................................27
    button_get_from_group................................................28
    button_get_from_hwnd.................................................28
    button_has_changed...................................................28
    button_lock..........................................................29
    button_set_check.....................................................29
    button_unlock........................................................30
    char_is_printable....................................................30
    char_to_lower........................................................30
    char_to_upper........................................................31
    dproc_enter_error....................................................31
    dproc_enter_idcancel.................................................31
    dproc_enter_idok.....................................................31
    dproc_enter_wm_command...............................................32
    dproc_exit_error.....................................................32
    field_data_to_log....................................................33
    field_define.........................................................33
    field_disable_feature................................................38



                                      3    
    field_enable_feature.................................................38
    field_get_character..................................................39
    field_get_decimal_pos................................................39
    field_get_from_ctrl_id...............................................39
    field_get_from_hwnd..................................................40
    field_get_pos_info...................................................40
    field_get_position...................................................41
    field_get_text.......................................................41
    field_has_changed....................................................41
    field_insert_decimal.................................................42
    field_lock...........................................................42
    field_log_to_data....................................................43
    field_log_to_phys....................................................43
    field_phys_to_log....................................................44
    field_set_text.......................................................44
    field_unlock.........................................................44
    form_begin...........................................................45
    form_end.............................................................45
    form_get_active......................................................45
    form_get_from_hdlg...................................................46
    form_has_changed.....................................................46
    form_in_error_cond...................................................46
    form_is_cancelled....................................................47
    form_lock............................................................47
    form_process.........................................................48
    form_set_help........................................................48
    form_terminate.......................................................49
    form_unlock..........................................................49
    form_validate........................................................49
    genctrl_define.......................................................50
    statmsg_define.......................................................50
    str_delete_char......................................................51
    str_insert_char......................................................52
    str_is_blank.........................................................52
    str_is_value_zero....................................................52
    str_trim_spaces......................................................53
    Data Type Reference..................................................54
    BUTTON...............................................................55
    FIELD................................................................56
    FIELD_POS............................................................57
    FORM.................................................................58
    HBUTTON..............................................................61
    HFIELD...............................................................61
    HFORM................................................................61
    HGENCTRL.............................................................61
    LPBUTTON.............................................................61
    LPFIELD..............................................................61
    LPFIELD_POS..........................................................62
    LPFORM...............................................................62
    PBUTTON..............................................................62
    PFIELD...............................................................62
    PFIELD_POS...........................................................62
    PFORM................................................................62


                                      4    
    PROC_ARRAY_INFO......................................................62
    Appendix A:  Picture String Characters...............................64
    Appendix B:  Field Editing Keys......................................66
    Appendix C:  Glossary................................................68



















































                                      5    



    Acknowledgements

    BIX is a registered trademark of McGraw-Hill, Inc.
    Borland is a registered trademark of Borland International.
    CompuServe is a registered trademark of CompuServe, Inc.
    IBM is a registered trademark of International Business Machines.
    Microsoft is a registered trademark of the Microsoft Corporation.
    MS-DOS is a registered trademark of the Microsoft Corporation.
    Windows is a trademark of the Microsoft Corporation.

    This manual was written using Microsoft Word for Windows.
    This manual was printed on a Hewlett-Packard LaserJet IIP.
    The software was written using SemWare's QEdit text editor.
    The resources for the demo program were created using Borland's Resource
    Workshop.





































                                      6    


























                                Introduction




























                                      7    


    Welcome to WEDL!

    Welcome to WEDL, the Windows Enhanced Dialog Library.  WEDL (pronounced
    "weddle") is a collection of C functions for Microsoft Windows
    programmers designed to make dialog box data entry much easier for both
    the programmer and the user.


    WEDL Features

    Enhanced Edit Fields

        Formatted Data Entry

            Picture strings are assigned to fields which describe the
            allowable characters for each field position and specify the
            position of formatting characters which aid the user in
            correctly entering data.  For example, a telephone number field
            could visually look like "(___)___-____" instead of just
            "__________".  The user is not able to move the cursor to, or
            edit, the embedded formatting characters.

        Field Validation

            Extensive field validation is provided via WEDL's own internal
            validations and optionally through programmer-written validation
            functions.  Validation is provided internally by picture strings
            which describe the allowable characters for each field position,
            and optional field validations such as Field Cannot Be Blank,
            Field Cannot Be Zero, and Field Cannot Be Edited.  In addition,
            you can write validation functions to perform any other needed
            validations.  The user is not able to leave the field or select
            "OK" until the field passes validation.

        Automatic Reading and Writing of Variables

            WEDL can automatically read and write your program's variables,
            placing their contents into the fields for updating, then
            storing the contents of the fields back to the variables upon
            completion of the form.  Data type conversion is performed
            on-the-fly.  This saves you from having to set and get the
            contents of the fields and convert between data types.  The data
            types supported by WEDL fields include character string, int,
            unsigned, long, unsigned long, and double.

        Numeric Data Entry

            Numeric data entry is fully supported by WEDL.  There is a
            standard numeric field which supports left-to-right digit input
            and a decimal point. In addition, there is a calculator-style
            numeric field which supports right-to-left digit input, a


                                      8    
            decimal point, and optional commas which appear only when a
            digit precedes them (eg. the user would see "1,000.00" instead
            of "1000.00").

        Overtype Mode

            WEDL fields provide an overtype mode in addition to the insert
            mode Windows' edit fields provide.

        Case Conversion

            WEDL can automatically convert letters entered into a field to
            uppercase or lowercase.  Also, there is a mixed-case option
            which converts characters to uppercase or lowercase depending on
            the previous character (eg. "Mixed Case").  Foreign alphabetic
            characters are supported.

        Enhanced Editing Keys

            In addition to the editing keys available in Windows' edit
            fields, WEDL provides a variety of new editing keys.  See
            Appendix B for a list of editing keys.

    Enhanced Radio Buttons and Check Boxes

        Automatic Reading and Writing of Variables

            WEDL can automatically read and write your program's variables,
            setting radio buttons and check boxes according to the
            variables' values, then when the form is finished, the variables
            are updated to specified values indicating whether the buttons
            or check boxes are checked or not.  For a group of radio buttons
            within a group box, a variable can automatically be set to a
            value indicating which button in the group was checked.

    Enhanced Combo Boxes

        The edit fields in combo boxes have the same features as standard
        edit fields, in addition to the ability to interact with the combo
        box's list box.

    Context-Sensitive Help

        Context-sensitive help can easily be applied to individual fields,
        radio buttons, check boxes, combo boxes, or any other control within
        a dialog box.  When the user presses the F1 key, the Windows Help
        application will be run and help information for the current control
        will be displayed.

    Dynamic-Link Library

        WEDL's functions are contained in a Windows dynamic-link library.
        The .DLL library format has many advantages over the normal .LIB


                                      9    
        format.  These include:

            The dynamic-link library will be loaded only once into memory,
            no matter how many running applications use it.

            There is no need for multiple memory model versions of the
            library.  No matter which memory model your program is written
            in, it still uses the same dynamic-link library.

            The dynamic-link library is not compiler-specific.  Any C or C++
            compiler that supports the creation of Windows applications will
            be able to use WEDL.  Other language compilers that can produce
            Windows applications may also be compatible with WEDL.

    Compatibility

        Since WEDL's functions are contained in a dynamic-link library, any
        C or C++ compiler that supports the creation of Windows applications
        will be able to use WEDL.

        WEDL does not replace Windows' dialog controls; it extends their
        capabilities by subclassing them. Therefore WEDL is compatible with
        all resource editors and CASE products that produce resource files.

        WEDL is compatible with foreign languages supported by Windows'
        language driver.


    System Requirements

    Microsoft Windows version 3.0 or greater (real, standard, or enhanced
    mode). MS-DOS version 3.1 or greater.

    Microsoft Windows Software Development Kit or compatible tools.

    To use the WEDL library:
        Any C or C++ compiler capable of producing Windows programs.  Other
        language compilers may or may not be compatible.

    To rebuild the WEDL library:
        Microsoft C 6.0 and Borland C++ 2.0 have been successfully tested.
        Other C or C++ compilers may work as well.


    Archive Contents

    The contents of the WEDL___.ZIP archive file are as follows:

    File Name       Description
    ---------       -----------
    DEMO.DEF        Demonstration program module definition file.
    DEMO.EXE        Demonstration program executable file.
    DEMO.H          Demonstration program header file.


                                      10   
    DEMO.ICO        Application icon for the demonstration program.
    DEMO.MAK        Demonstration program make file.
    DEMO.RC         Demonstration program resource source file.
    DEMO?.C         Demonstration program source code files.
    DEMOHELP.H      Header file containing demonstration program help
                    definitions.
    DEMOHELP.HLP    Demonstration program help file.
    DEMOHELP.HPJ    Project file for the demonstration program's help file.
    DEMOHELP.RTF    Source text for demonstration program's help file.
    READ.ME         Contains last-minute updates and other important
                    information.
    REGISTER.DOC    Information about registering WEDL.
    WEDL.DOC        WEDL documentation file.  (You are reading it now.)
    WEDL-E.DLL      WEDL dynamic-link library.
    WEDL.H          WEDL header file.
    WEDL-E.LIB      WEDL import library.


    Registration Information

    WEDL is a user-supported software product.  This means you are free to
    try the software long enough to evaluate it and see if it meets your
    needs. After a reasonable evaluation period, you are expected to either
    register the software or cease using it.  Registering the software gives
    you many benefits including:

        --  The full library source code.

        --  A high-quality printed manual.

        --  Royalty-free distribution of the WEDL.DLL library.  The
            evaluation version, WEDL-E.DLL, cannot be distributed.

        --  Unlimited technical support via E-mail or postal mail.
















                                      11   

                              WEDL REGISTRATION FORM


    NAME:___________________________________________________________________


    COMPANY:________________________________________________________________


    ADDRESS:________________________________________________________________


    ________________________________________________________________________


    CITY, STATE:____________________________________________________________


    ZIP CODE: ____________________________  COUNTRY:________________________


    TELEPHONE NUMBER:___________________  DISK SIZE:   5.25"    /    3.5"


    WHERE DID YOU RECEIVE WEDL?_____________________________________________


    WEDL Registration @ $55.00 per copy                        _____________

    Shipping and Handling
    (U.S.A. and Canada = $5.00,  Overseas = $10.00) per copy   _____________


    Florida Residents, Add 7% State Sales Tax ($4.20) per copy _____________


    Total Amount Enclosed:                                     _____________


    Payment must be with a check or money order payable in U.S. dollars and
    drawn on a U.S. bank.  Make checks payable to Mike Smedley.

    Purchase orders are accepted from Fortune 500, government, or
    educational institutions ONLY for orders of 3 copies or more.

    To register WEDL, send the above information and payment to:

            Mike Smedley
            P.O. Box 17325
            Jacksonville, FL 32245-7325




                                      12   

    Contacting the Author

    The author, Mike Smedley, can be contacted via one of the following
    methods:

        Electronic Mail:
            BIX:            m.smedley
            CompuServe:     71331,2244

        Postal Mail:
            Mike Smedley
            P.O. Box 17325
            Jacksonville, FL  32245-7325

    Electronic mail is the fastest and most reliable way to get technical
    support.  If enough interest is expressed in WEDL, a bulletin board
    system (BBS) may be established to provide even greater technical
    support.


























                               Programming Guide




























                                      14   


    Terminology

    There are several terms that are used throughout this manual that are
    important to understand.  Consult the Glossary in the back of this
    manual for the definition of any terms you do not understand.


    Naming Conventions

    Function Naming

        WEDL's functions are named in an object-oriented manner.  The first
        part of the function name is the prefix which identifies the type of
        object the function operates on.  The second part of the function
        name identifies the action to perform on the object.  The following
        is a list of prefixes used by WEDL functions:

        Prefix          Meaning
        ------          -------
        button_         Function operates on a button.
        char_           Function operates on a character.
        dproc_          Function operates on the dialog procedure.
        field_          Function operates on a field.
        form_           Function operates on a form.
        genctrl_        Function operates on a generic control.
        statmsg_        Function operates on a key status message.
        str_            Function operates on a character string.

    Data Type and Variable Naming

        Data type and variable naming in WEDL is fairly consistent.  The
        prefix 'h' is used for data types and variables corresponding to
        handles.  The prefix 'p' is used for data types and variables
        corresponding to pointers (not specifying near or far).  The prefix
        'lp' is used for data types and variables corresponding to far
        pointers.


    How WEDL Fields Work

    WEDL fields may have embedded formatting characters in them in order to
    assist the user in correctly inputting the required data.  For example,
    the '(', ')', and '-' characters in a phone number field are considered
    formatting characters.  Also there are special formatting characters
    such as the commas and decimal point in numeric fields.  The user is not
    able to move the cursor to, or edit, the formatting characters.
    Formatting characters are not copied to the destination by default.

    Fields that contain embedded formatting characters are considered to be
    in physical field format.  If you were to call the GetDlgItemText
    function, you would get the field's physical contents.  Fields that do


                                      15   
    not contain embedded formatting characters are considered to be in
    logical field format.

    When defining a field, the data type of the associated variable is
    converted to a character string in physical field format and this string
    is used to set the contents of the field.  When the user selects "OK",
    the field's contents are converted back to the data types of their
    variables and stored.


    Creating the Dialog Box

    When creating a dialog box to be used with WEDL, very few special
    considerations are needed.  You use your dialog box resource editor as
    normal.  For edit controls to be defined as WEDL fields, you should
    specify the WS_TABSTOP, WS_BORDER, WS_CHILD, ES_LEFT, and ES_AUTOHSCROLL
    styles. For edit controls that belong to a combo box, use
    CBS_AUTOHSCROLL instead of ES_AUTOHSCROLL.

    For radio buttons and check boxes, you should specify the
    BS_AUTORADIOBUTTON or BS_AUTOCHECKBOX styles respectively.  If the check
    box is a 3-state check box, use BS_AUTO3STATE.

    If you desire to have an automatically-updated Insert, CapsLock, or
    NumLock key status message in your dialog box, place a static text
    control for each message where you want the message to appear in the
    dialog box.  The static text control must be wide enough to display the
    entire status message.

    When assigning control IDs to the controls in the dialog box, avoid
    using values 27700 - 27799.  These values are reserved by WEDL.


    Layout of the Dialog Procedure

    The dialog procedure is where all definition and processing of the form
    occur.  The layout of the dialog procedure is as follows:

    int FAR PASCAL DialogProc( HWND hDlg, unsigned message, WORD wParam,
                               LONG lParam )
    {
        static HFORM hform = NULL;      /* must be static or global! */

        switch( message ) {

            case WM_INITDIALOG:
                /* Do not call any Windows functions that generate */
                /* WM_COMMAND messages before defining the form!   */
                hform = form_begin( hDlg );
                /* Call field_define() for each field to be defined. */
                /* Call button_define() for each button to be defined. */
                /* Call genctrl_define() for each generic control. */
                /* Call statmsg_define() for each status message. */


                                      16   
                form_end( hform );
                /* Perform any other WM_INITDIALOG processing. */
                return( TRUE );

            case WM_COMMAND:
                dproc_enter_wm_command( hform, wParam, lParam );
                switch( wParam ) {

                    /* Add a case statement for each error value */
                    /* given in your calls to field_define().    */

                    case MY_ERROR_VALUE:    /* defined by the programmer */
                        dproc_enter_error( hform );
                        /* display error message, etc. */
                        dproc_exit_error( hform, lParam );
                        return( TRUE );

                    case IDOK:
                        dproc_enter_idok( hform );
                        if( !form_in_error_cond( hform ) ) {
                            if( form_validate( hform ) != NULL ) break;
                                form_process( hform );
                                EndDialog( hDlg, TRUE );
                                form_terminate( hform );
                                /* Perform other IDOK processing. */
                        }
                        return( TRUE );

                    case IDCANCEL:
                        dproc_enter_idcancel( hform );
                        EndDialog( hDlg, TRUE );
                        form_terminate( hform );
                        /* Perform other IDCANCEL processing. */
                        return( TRUE );
                }
                break;
        }
        return( FALSE );
    }


    Defining the Form

    The definition of a form is performed during WM_INITDIALOG message
    processing in the dialog procedure.  The form_begin and form_end
    functions are required for form definition.  The functions used to
    define controls within the form are field_define, button_define,
    genctrl_define and statmsg_define. These functions define fields,
    buttons, generic controls, and status messages respectively.  The calls
    to these functions must be made between form_begin and form_end.

    It is recommended that form_begin be called immediately upon entry into
    WM_INITDIALOG.  If you call any Windows function which generate


                                      17   
    WM_COMMAND messages before the form is defined, the form handle returned
    by form_begin will not be valid and any WM_COMMAND message processing
    which relies on a valid form handle will fail.

    If you are planning on adding context-sensitive help to individual
    controls, you will need to call the form_set_help function somewhere
    after form_begin.  The form_set_help function sets the Windows Help file
    name that will be used for context-sensitive help.


    Defining Fields

    A field is an edit control within your dialog box and is usually of
    class "edit".  To define a field, you must call the field_define
    function for a given edit control.  Not all edit controls have to be
    defined, but if you want them to have WEDL field capabilities, you
    should define them.  The purpose of defining a field is to:

        1.  Assign a picture string to the field.  The picture string
        defines the size of the field, the allowable characters for each
        field position, and the placement of formatting characters in the
        field.  See Appendix A for a list of characters that can be used in
        picture strings.

        2.  Optionally assign a variable to the field.  The variable can be
        initialized or updated by the field.

        3.  Optionally specify various behavioral features of the field.
        Such features include numeric formatting, case conversion, space
        padding, and whether the field belongs to a combo box. See the
        description of the field_define function for a list of features that
        can be specified.

        4.  Optionally assign a validation function to the field.  The
        validation function is written by you, the programmer, to validate
        the contents of the field.  See the section on writing field
        validation functions below for more information.

        5.  Optionally assign a Windows Help context to the field.  If the
        user presses F1 in the field, a help screen will be displayed with
        information on that particular field.  See the section on defining
        context-sensitive help for more information.

    The following is an example of a call to field_define:

        field_define( hform, ID_ACCTNO, &acct_no, DT_INTEGER, "###",
                      FDF_NUMERIC | FDF_NOTZERO, pcheck_acct_num,
                      BAD_ACCTNO, HELPID_ACCTNO );


    Defining Buttons

    A button is a control within your dialog box that typically has an on or


                                      18   
    off state.  The control is usually of class "button" and can be a radio
    button, check box, or compatible button.  To define a button, you must
    call the button_define function for a given button control.  Not all
    button controls have to be defined, but if you want them to have WEDL
    button capabilities, you should define them.  The purpose of defining a
    button is to:

        1.  Optionally assign a variable to the button.  The variable can be
        set to a value indicating whether the button has been checked or not
        checked.  The variable can also be set to a value indicating which
        button in a group of buttons was checked.

        2.  Optionally initialize the state of the button.  The button can
        be initialized on, off, grayed (disabled), or can be set according
        to the value of the variable assigned to the button.

        3.  Optionally assign a Windows Help context to the button.  If the
        user presses F1 while on the button, a help screen will be displayed
        with information on that particular button.  See the section on
        defining context-sensitive help for more information.

    Do not use button_define to define a push button.  Since a push button
    only has an instantaneous "on" state, assigning a variable to the button
    would be useless.  Use the genctrl_define function for defining push
    buttons.  The "OK" and "Cancel" buttons are defined by default because
    WEDL needs to maintain them.

    The following is an example of a call to button_define where the button
    is not part of a group:

        button_define( hform, ID_SAVECHANGES, &bSaveChanges, 0, TRUE, FALSE,
                       BS_OFF, HELPID_SAVECHANGES );

    The following calls to button_define demonstrate the definition of a
    group of 3 related buttons:

        button_define( hform, ID_XMODEM, &protocol, 1, ID_XMODEM, 0,
                       BS_USEDATA, HELPID_XMODEM );
        button_define( hform, ID_YMODEM, &protocol, 1, ID_YMODEM, 0,
                       BS_USEDATA, HELPID_YMODEM );
        button_define( hform, ID_ZMODEM, &protocol, 1, ID_ZMODEM, 0,
                       BS_USEDATA, HELPID_ZMODEM );


    Defining Generic Controls

    A generic control can be any control within your dialog box.  It is
    usually a list box, push button, or custom control.  To define a generic
    control, you must call the genctrl_define function for a given dialog
    box control.  The only reasons for defining a generic control are to
    assign context-sensitive help to it, and to make sure that status
    messages get updated if the Insert, CapsLock, or NumLock keys are
    pressed while the control has input focus.


                                      19   

    The following is an example of a call to genctrl_define:

        genctrl_define( hform, ID_LISTBOX, HELPID_LISTBOX );


    Defining Status Messages

    In many circumstances, it is desirable to have a status message
    indicating whether the Insert, CapsLock, or NumLock key is toggled on or
    off.  WEDL provides a simple method for creating these automatically-
    updated key status messages.  All you have to do is define a static text
    control (class "static") in your dialog box to be used for the
    displaying of the status message.  Then call the statmsg_define function
    to link the key to the status message.

    The only drawbacks to these types of status messages is they cannot be
    updated while the input focus is set to a control not defined by WEDL.
    When the user moves to a control that has been defined by WEDL, the
    status message will be updated.


    Writing Field Validation Functions

    A field validation function is a function written by you, the
    programmer, to validate the information in a field. The validation
    function is called both when the user tries to leave the field and when
    the user selects "OK". The exception to this rule is when the field has
    the FDF_VAFFRM feature specified, in which case the validation function
    is called only when the user selects "OK".  A validation function is
    assigned to a field by the field_define function.  The validation
    function must be declared in this form:

        int FAR PASCAL ValidationFunc( LPSTR pbuf );

    Since the validation function is a callback function, it must be
    declared FAR and have an entry in the EXPORTS section of your
    application's module definition file.

    The validation function is passed a pointer to a temporary buffer
    containing a character string in logical field format.  You use this
    character string to validate the field.  If you need to convert the
    value to a numeric data type, you can use the field_log_to_data function
    to do so.  You may also use the atoi, atol, or field_insert_dec/atof
    functions for converting the string to a numeric data type.

    When you are done validating the field's contents, you return either
    zero if the field contains no errors or the position of the error in the
    field + 1.

    The following is an example of a validation function that checks an
    account number and makes sure it is within 100 and 400:



                                      20   
        int FAR PASCAL check_acct_num( LPSTR pbuf )
        {
            int acctno;

            acctno = atoi( pbuf );
            if( acctno < 100 || acctno > 400 ) return( 1 );
            return( 0 );
        }

    Use the validation function only for validating the field.  If you call
    Windows functions which generate messages, you chance crashing your
    program.  Modifying the contents of the temporary buffer will not change
    the contents of the field and is not recommended.


    Writing Error Handlers

    For every validation function, there is a corresponding error handler.
    The error handler is a piece of code that is responsible for displaying
    an error message, sounding a an audible beep, or any other actions you
    want to take in the event of an error.  WEDL takes care of repositioning
    the cursor to the position of the error in the field.

    The error handler is written in the dialog procedure.  The errval
    parameter you specified in the call to the field_define function is
    passed in the wParam parameter of the WM_COMMAND message.  You must call
    the dproc_enter_error function immediately upon entry into the error
    handler and dproc_exit_error just before leaving the error handler.  The
    error handler returns TRUE indicating the dialog procedure handled the
    message.

    The following is an example error handler:

        case BAD_ACCTNO:
            dproc_enter_error( hform );
            MessageBeep( 0 );
            MessageBox( hDlg, "Account number is invalid!", NULL, MB_OK );
            dproc_exit_error( hform, lParam );
            return( TRUE );


    Defining Context-Sensitive Help

    Context-sensitive help can be applied to controls defined by WEDL.  WEDL
    uses the standard Windows Help application and F1 key in its
    implementation.  First you must call the form_set_help function to let
    WEDL know you'll be using context-sensitive help and to specify the name
    of the Windows Help file that will be used.  You should call this
    function somewhere in the dialog procedure's WM_INITDIALOG message
    processing after form_begin has been called.

    In the field_define, button_define, and genctrl_define function calls,
    one of the parameters, help_context, is used to specify the context ID


                                      21   
    of the Windows Help topic associated with the control.  If the user
    presses F1 while in a control with a nonzero help_context, the Windows
    Help application will be executed.  Then Windows Help will automatically
    load the help file specified in the form_set_help function and display
    the topic for the control's help_context.

    To create a Windows Help file, you'll need a word processing program
    capable of producing Rich Text Format (.RTF) files and the help compiler
    included in the Microsoft Windows Software Development Kit. There is
    plenty of information on this in the Windows SDK documentation, so there
    is no need to cover this here.


    Compiling and Linking

    To create programs that use WEDL, you need the WEDL.H header file, the
    WEDL-E.DLL library file, and the WEDL-E.LIB import library file.

    First, you must first compile the source code file(s) into object code
    file(s).  Sample compiler command lines are:

        cl -c -AS -Gsw -Ox -Zpe -W3 demo.c
        bcc -c -ms -w -WS -O -Z demo.c

    Second, you must link object modules together to create an executable
    program.  Sample linker command lines are:

        link /NOD demo, demo, demo, libw slibcew wedl-e, demo
        tlink /Twe /v /n /c c0ws demo,demo,,cwins cs import maths \
                wedl-e, demo

    Finally, you must bind your resources to your executable program using a
    resource compiler.  A sample resource compiler command line is:

        rc demo


    Executing the Program

    When executing your program that uses WEDL, the only requirement is that
    the library file WEDL-E.DLL be in the current directory or in the PATH.


    Common Programming Errors

    There are a few common programming errors when using the WEDL library.
    These include:

    1.  You have a field that is larger than the character string buffer
    receiving the fields contents.  For example, if you have a phone number
    field defined like so:

        char phone_num[10];             // error - not large enough!


                                      22   
        field_define( hform, ID_PHONE, phone_num, DT_STRING,
                      "'('999')'999'-'9999", FDF_NONE, NULL, 0, 0 );

    When the user selects "OK", WEDL will copy the contents of the field
    plus a terminating '\0' character to 'phone_num'.  This means 11
    characters will be copied to a character string buffer only 10
    characters wide.  Changing 'phone_num' to an array of 11 characters will
    fix this problem. Suppose your phone number field is defined like:

        char phone_num[11];             // error - not large enough!
        field_define( hform, ID_PHONE, phone_num, DT_STRING,
                      "'('999')'999'-'9999", FDF_WRPHYS, NULL, 0, 0 );

    Now you have the same problem, but in a different way.  Since the
    FDF_WRPHYS feature is being used, the formatting characters '(', ')',
    and '-' will be copied to 'phone_num' as well.  This means 'phone_num'
    must be 14 characters wide.

    2.  Your form handle variable is not declared properly.  The 'hform'
    variable must be static or global.  Otherwise, it may not work.  This
    declaration is a no-no:

        int FAR PASCAL DialogProc( HWND hDlg, unsigned message, WORD wParam,
                                   LONG lParam )
        {
            HFORM hform;            //  error - not static!
            // ....the rest of the code

    As soon as WM_INITDIALOG returns, the value of 'hform' will be lost and
    later when the dproc_enter_wm_command function is called, it will be
    passed an invalid form handle.  Either change the declaration of 'hform'
    to static or make 'hform' a global variable.

    3.  A call to the field_define function keeps failing.  This is most
    likely occurring because your field's picture string is invalid or is
    invalid for the given field feature(s).  Check the picture string
    against the allowable characters listed in Appendix A.

    4.  You have a field in update mode (FDF_UPDATE or FDF_CONDUPD) and are
    getting garbage characters in the fields.  For example:

        char ssn[10];
        field_define( hform, ID_SOCSEC, ssn, DT_STRING,
                      "999'-'99'-'9999", FDF_UPDATE, NULL, 0, 0 );

    Here you would have a problem.  The variable 'ssn' has not been
    initialized, yet you have the field in update mode.  The field would be
    initialized with whatever garbage contents 'ssn' happens to contain.
    Make sure the variables you are updating actually have valid values.
    Otherwise, do not use update mode.

    5.  Your program locks up while in your validation function.  This is
    most likely the result of you calling a Windows function which generates


                                      23   
    messages that get sent to either the dialog procedure or the edit
    control procedure.  Some Windows function calls will work during a
    validation function; others will not.  You will have to experiment for
    yourself.

    6.  The data type you specified in the data_type parameter of the
    field_define function does not match the data type pointed to by the
    pdata pointer.  For example:

        long age;
        field_define( hform, ID_AGE, &age, DT_INTEGER,
                      "999", FDF_NONE, NULL, 0, 0 );

    Here the address of 'age', which is a long, is passed to field_define,
    yet the data_type was specified as an integer.  This will cause real
    problems.

    7.  You defined a combo box field without specifying FDF_COMBO as one of
    the field's features. The field will not function properly unless
    FDF_COMBO is specified.

    8.  You have a combo box field with formatting characters in the picture
    string.  Normally, the only characters that you should have in a picture
    string for a combo box field are validation characters. If you do use
    formatting characters, the strings contained in the combo box's list box
    must have the same format as the picture string.





























                                      24   

























                              Function Reference





























                                      25   

    button_define

    Syntax      HBUTTON    button_define(hform, ctrl_id, pdata, group_id,
                on_value, off_value, init_state, help_context)

                Defines a button.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

                ctrl_id         int    The dialog control ID of the button
                                or check box control being defined.

                pdata           LPINT    Pointer to the integer variable
                                that will be automatically initialized or
                                updated by the button control.  If NULL is
                                given, the button will not manipulate any
                                variables and the button's value will have
                                to be retrieved manually.

                group_id        int    An identifier specifying the group
                                the button belongs to.  For example, if
                                there was a group box containing 2 radio
                                buttons, one for "Male" and the other for
                                "Female", you'd define both of their buttons
                                with the same pdata and group_id.  If the
                                button does not belong to a group, set
                                group_id to 0.

                on_value        int    The value that will be stored at the
                                integer pointed to by pdata if the button is
                                checked.

                off_value       int    The value that will be stored at the
                                integer variable pointed to by pdata if the
                                button is not checked.  If the button
                                control belongs to a group (group_id is
                                nonzero), the value given for off_value is
                                ignored.

                init_state      int    The initial state of the button
                                control.  Can be one of the following
                                values:

                                Value       Meaning
                                -----       -------
                                BS_OFF      Button will be initialized off
                                            (not checked).

                                BS_ON       Button will be initialized on
                                            (checked).


                                      26   

                                BS_GRAYED   Button will be grayed (disabled)
                                            if it is a 3-state button.

                                BS_USEDATA  Button will be initialized to
                                            the value of the integer pointed
                                            to by pdata.  If the value is
                                            equal to the on_value, the
                                            button will be initialized on.
                                            Otherwise, the button will be
                                            initialized off.

                                BS_NOTSET   Button's state will not be set.

                help_context    DWORD    The help context identifier of the
                                Windows Help topic associated with the
                                button.  If context-sensitive help is not
                                being applied to the button, set
                                help_context to 0.  If context-sensitive
                                help is being applied to the button, the
                                form_set_help function must be called prior
                                to the F1 key being pressed.

    Return Value    The handle of the new button's record or NULL if an
                    error occurred.  An error can be caused by one of the
                    following conditions:

                        Control ID is invalid.
                        The form_end function has already been called.
                        Memory allocation error.

    ________________________________________________________________________

    button_get_check

    Syntax      int    button_get_check(hbutton)

                Gets the check state of a button.

                Parameter       Type/Description
                ---------       ----------------
                hbutton         HBUTTON    The button's handle.

    Return Value    BS_OFF if the button is off (not checked), BS_ON if the
                    button is on (checked), or -1 if an error occurred.

    ________________________________________________________________________

    button_get_from_ctrl_id

    Syntax      HBUTTON    button_get_from_ctrl_id(hform, ctrl_id)

                Gets the handle of a button using its dialog control ID as


                                      27   
                input.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

                ctrl_id         int    The dialog control ID of the control
                                the button is associated with.

    Return Value    The handle of the button associated with the input
                    dialog control ID or NULL if an error occurred.

    ________________________________________________________________________

    button_get_from_group

    Syntax      HBUTTON    button_get_from_group(hform, group_id)

                Gets the handle of the checked button in a group of buttons.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

                group_id        int    The group ID of the group of buttons
                                to test.

    Return Value    The handle of the button that is checked or NULL if an
                    error occurred.

    ________________________________________________________________________

    button_get_from_hwnd

    Syntax      HBUTTON    button_get_from_hwnd(hform, hWnd)

                Gets the handle of a button using the window handle of its
                control as input.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

                hWnd            HWND    The window handle of the control
                                associated with the button.

    Return Value    The handle of the button associated with the input
                    window handle or NULL if an error occurred.

    ________________________________________________________________________

    button_has_changed



                                      28   
    Syntax      int    button_has_changed(hbutton)

                Determines whether a button has been changed by the user.

                Parameter       Type/Description
                ---------       ----------------
                hbutton         HBUTTON    The button's handle.

    Return Value    TRUE if the user has changed the button, FALSE if the
                    user has not changed the button, or -1 if an error
                    occurred.

    ________________________________________________________________________

    button_lock

    Syntax      LPBUTTON    button_lock(hbutton)

                Locks a button's record in memory so it can be accessed.

                Parameter       Type/Description
                ---------       ----------------
                hbutton         HBUTTON    The button's handle.

    Return Value    A far pointer to the button's record or NULL if an error
                    occurred.  See the description for the BUTTON struct for
                    details.

    Comments    Once you have obtained a pointer to the button's record, you
                are able to read or change any of the record's elements.
                However, it is not recommended that you change the values of
                any of the elements.

                When you are done accessing the button's record, be sure to
                call button_unlock.

                Calling this function locks the button's record in the
                .DLL's local heap.  In addition, the .DLL's entire data
                segment is locked in the global heap.  This is required to
                ensure the returned far pointer will remain valid until the
                call to button_unlock.  For this reason, you should not keep
                the button locked any longer than absolutely necessary.

    ________________________________________________________________________

    button_set_check

    Syntax      int    button_set_check(hbutton, state)

                Sets the check state of a button.

                Parameter       Type/Description
                ---------       ----------------


                                      29   
                hbutton         HBUTTON    The button's handle.

                state           int    The state to set the button control
                                to.  See the description of the
                                button_define function for a list of valid
                                state values.

    Return Value    Nonzero if an error occurred.

    ________________________________________________________________________

    button_unlock

    Syntax      void    button_unlock(hbutton)

                Unlocks a button's record in memory.

                Parameter       Type/Description
                ---------       ----------------
                hbutton         HBUTTON    The button's handle.

    Return Value    None.

    ________________________________________________________________________

    char_is_printable

    Syntax      BOOL    char_is_printable(ch)

                Determines whether a character is printable.  This
                determination is made based upon Windows' current language
                driver settings.

                Parameter       Type/Description
                ---------       ----------------
                ch              int    The character to test.

    Return Value    TRUE if the character is printable; otherwise FALSE.

    ________________________________________________________________________

    char_to_lower

    Syntax      int    char_to_lower(ch)

                Converts a character to lowercase.  This conversion is made
                based upon Windows' current language driver settings.

                Parameter       Type/Description
                ---------       ----------------
                ch              int    The character to convert.

    Return Value    The converted character.


                                      30   

    ________________________________________________________________________

    char_to_upper

    Syntax      int    char_to_upper(ch)

                Converts a character to uppercase.  This conversion is made
                based upon Windows' current language driver settings.

                Parameter       Type/Description
                ---------       ----------------
                ch              int    The character to convert.

    Return Value    The converted character.

    ________________________________________________________________________

    dproc_enter_error

    Syntax      int    dproc_enter_error(hform)

                This function is part of the dialog procedure's framework.
                It must be the first function called in a field's error
                handler.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

    Return Value    Nonzero if an error occurred.

    ________________________________________________________________________

    dproc_enter_idcancel

    Syntax      int    dproc_enter_idcancel(hform)

                This function is part of the dialog procedure's framework.
                It must be the first function called in the IDCANCEL
                processing of the WM_COMMAND message.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

    Return Value    Nonzero if an error occurred.

    ________________________________________________________________________

    dproc_enter_idok

    Syntax      int    dproc_enter_idok(hform)


                                      31   

                This function is part of the dialog procedure's framework.
                It must be the first function called in the IDOK processing
                of the WM_COMMAND message.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

    Return Value    Nonzero if an error occurred.

    ________________________________________________________________________

    dproc_enter_wm_command

    Syntax      int    dproc_enter_wm_command(hform, wParam, lParam)

                This function is part of the dialog procedure's framework.
                It must be the first function called in the WM_COMMAND
                message processing.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

                wParam          unsigned    The wParam parameter passed to
                                the dialog procedure by Windows.

                lParam          LONG    The lParam parameter passed to the
                                dialog procedure by Windows.

    Return Value    Nonzero if an error occurred.

    ________________________________________________________________________

    dproc_exit_error

    Syntax      int    dproc_exit_error(hform, lParam)

                This function is part of the dialog procedure's framework.
                It must be the last function called in a field's error
                handler.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

                lParam          LONG    The lParam parameter passed to the
                                dialog procedure by Windows.

    Return Value    Nonzero if an error occurred.

    ________________________________________________________________________


                                      32   

    field_data_to_log

    Syntax      int    field_data_to_log(hfield, pbuf, pdata, data_type)

                Converts a value in a specified data type to a character
                string in logical field format.

                Parameter       Type/Description
                ---------       ----------------
                hfield          HFIELD    The field's handle.

                pbuf            LPSTR    Pointer to the buffer to receive
                                the converted value.

                pdata           LPVOID    Pointer to the data item to
                                containing the data to convert. This
                                parameter can point to one of the following
                                types:  char (string), int, unsigned, long,
                                unsigned long, or double.  The value you
                                give for the data_type parameter must
                                correspond to the data pointed to by pdata.

                data_type       int    Specifies the data type pdata points
                                to.  See the description of the field_define
                                function for a list of possible values.

    Return Value    Nonzero if an error occurred.

    ________________________________________________________________________

    field_define

    Syntax      HFIELD    field_define(hform, ctrl_id, pdata, data_type,
                picture_string, features, pvalid_func, error_value,
                help_context)

                Defines a field.  This function is called for each edit
                control in your dialog box you want to define.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

                ctrl_id         int    The dialog control ID of the edit
                                control you want to define.

                pdata           LPVOID    Pointer to the data item you are
                                going to initialize or update. This
                                parameter can point to one of the following
                                types:  char (string), int, unsigned, long,
                                unsigned long, or double.  It can also be
                                NULL if you do not want any data modified by


                                      33   
                                the field.  The value you give for the
                                data_type parameter must correspond to the
                                data pointed to by pdata.

                data_type       int    Specifies the data type pdata points
                                to.  Can be one of the following values:

                                Value       Meaning
                                -----       -------
                                DT_NULL     The pdata parameter is NULL.

                                DT_STRING   pdata points to a character
                                            string.  The string must be
                                            terminated with a '\0' if you
                                            are updating existing data.

                                DT_INTEGER  pdata points to a signed
                                            integer.

                                DT_UNSIGNED pdata points to an unsigned
                                            integer.

                                DT_LONG     pdata points to a signed long
                                            integer.

                                DT_ULONG    pdata points to an unsigned long
                                            integer.

                                DT_DOUBLE   pdata points to a double-
                                            precision real number.

                picture_string  LPSTR    The field's picture string.  The
                                picture string describes the allowable
                                characters for each position in the field,
                                the size of the field, and the positioning
                                of the formatting characters.  See Appendix
                                A for a list of characters you can use in
                                the picture string.

                features        DWORD    One or more features describing how
                                the field should behave.  You can combine
                                features with the bitwise OR operator. Can
                                be one or more of the following values:

                                Value           Meaning
                                -----           -------
                                FDF_NONE        No features defined.

                                FDF_COMPLETE    Field must be complete (no
                                                blanks allowed unless
                                                specified in the picture
                                                string).



                                      34   
                                FDF_NOTBLANK    Field cannot be blank.

                                FDF_NOTZERO     Field cannot be zero.

                                FDF_NOTEDIT     Field cannot be edited.
                                                Normally this feature is
                                                combined with FDF_UPDATE.

                                FDF_MUSTEDIT    Field must be edited.

                                FDF_UPDATE      Update existing data.  This
                                                initializes the edit control
                                                with the data pointed to by
                                                pdata.

                                FDF_CONDUPD     Conditionally update
                                                existing data.  This
                                                initializes the edit control
                                                with the data pointed to by
                                                pdata.  When the user enters
                                                the field, the cursor is
                                                placed after the last
                                                character in the field.  If
                                                a character is entered, the
                                                field is cleared and the
                                                cursor is placed in the
                                                first position of the field.
                                                If an editing key is
                                                pressed, the field is set to
                                                update mode.

                                FDF_SPCFILL     Space-fill field from the
                                                right.  The data_type must
                                                be DT_STRING.

                                FDF_ZEROFILL    Zero-fill numeric field from
                                                the left. FDF_NUMERIC or
                                                FDF_CALCNUM must also be
                                                specified.

                                FDF_BLNKZERO    Blank numeric field if equal
                                                to zero. FDF_NUMERIC or
                                                FDF_CALCNUM must also be
                                                specified.

                                FDF_RDPHYS      The DT_STRING variable
                                                pointed to by pdata is
                                                already in physical field
                                                format (has embedded
                                                formatting characters).

                                FDF_WRPHYS      Merges a DT_STRING field's
                                                formatting characters into


                                      35   
                                                its logical contents when
                                                storing it.  The destination
                                                character buffer will then
                                                contain the field's physical
                                                contents.

                                FDF_UPPER       Characters enters into the
                                                field will be converted to
                                                uppercase.

                                FDF_LOWER       Characters entered into the
                                                field will be converted to
                                                lowercase.

                                FDF_MIXED       Characters entered into the
                                                field will be converted to
                                                uppercase or lowercase
                                                depending upon the previous
                                                character.  The Shift keys
                                                override the conversion.

                                FDF_NUMERIC     Field is a standard numeric
                                                field.

                                FDF_CALCNUM     Field is a calculator-style
                                                numeric field. Digits to the
                                                left of the decimal are
                                                shifted to the left as
                                                digits are entered.

                                FDF_VAFFLD      Do not perform validation
                                                until the user tries to
                                                leave the field.

                                FDF_VAFFRM      Do not perform validation
                                                until the user selects "OK".

                                FDF_COMBO       Field belongs to a combo
                                                box. Use caution when
                                                defining a combo box field
                                                with embedded formatting
                                                characters - strings in the
                                                combo box's list box must
                                                have the same format as the
                                                picture string.

                pvalid_func     int (FAR PASCAL *) (LPSTR)    The procedure-
                                instance address of the field's validation
                                function or NULL if there is no validation
                                function. This cannot be the address of the
                                validation function itself. A procedure-
                                instance address must be created using
                                MakeProcInstance and this is the value given


                                      36   
                                here.  See the following "Comments" section
                                for details.

                error_value     int    This is the value that is passed to
                                the dialog procedure when the validation
                                function returns an error.  The error_value
                                is located in the wParam parameter of the
                                WM_COMMAND message sent to the dialog
                                procedure.  If pvalid_func is NULL, the
                                value given for error_value is ignored.

                help_context    DWORD    The help context identifier of the
                                Windows Help topic associated with the
                                field.  If context-sensitive help is not
                                being applied to the field, set help_context
                                to 0.  If context-sensitive help is being
                                applied to the field, the form_set_help
                                function must be called prior to the F1 key
                                being pressed.

    Return Value    The handle of the new field's record or NULL if an error
                    occurred.  An error can be caused by one of the
                    following conditions:

                        Picture string is invalid or invalid for the
                        specified field feature(s).
                        Control ID is invalid.
                        The form_end function has already been called.
                        Memory allocation error.

    Comments    You must make all calls to this function during your dialog
                procedure's WM_INITDIALOG message processing between the
                calls to form_begin and form_end.

                The validation function must use the Pascal calling
                convention and must be declared FAR.  The validation
                function must have the following form:

    Validation  int FAR PASCAL ValidationFunc(LPSTR pbuf)
    Function
                ValidationFunc represents the validation function's name.
                The name of the validation function must be listed in an
                EXPORTS statement in the program's module definition file.
                pbuf represents the validation function's parameter name.

                The validation function is used to validate a field.  When
                the user tries to leave the field, ValidationFunc is called
                and passed a pointer, pbuf, which points to a buffer
                containing the current logical contents of the field.  The
                ValidationFunc then validates the field's logical contents
                and returns zero if no error was found or the logical
                position of the error + 1.



                                      37   
                Parameter       Description
                ---------       -----------
                pbuf            Pointer to the buffer containing the field's
                                current logical contents.

                Return Value

                Zero if the field passed validation, or the logical position
                of the error in the field + 1.

                Comments

                Modifying the data pointed to by pbuf will have no effect on
                the contents of the field.

    ________________________________________________________________________

    field_disable_feature

    Syntax      int    field_disable_feature(hfield, feature)

                Disables one or more of a field's features.

                Parameter       Type/Description
                ---------       ----------------
                hfield          HFIELD    The field's handle.

                feature         DWORD    The feature to disable.  To disable
                                multiple features, combine them with the
                                bitwise OR operator.  See the description of
                                the field_define function for a list of
                                features that can be specified.

    Return Value    Nonzero if an error occurred.

    ________________________________________________________________________

    field_enable_feature

    Syntax      int    field_enable_feature(hfield, feature)

                Enables one or more of a field's features.

                Parameter       Type/Description
                ---------       ----------------
                hfield          HFIELD    The field's handle.

                feature         DWORD    The feature to enable.  To enable
                                multiple features, combine them with the
                                bitwise OR operator.  See the description of
                                the field_define function for a list of
                                features that can be specified.



                                      38   
    Return Value    Nonzero if an error occurred.

    ________________________________________________________________________

    field_get_character

    Syntax      int    field_get_character(hfield, position, physical)

                Gets a character from the contents of a field.

                Parameter       Type/Description
                ---------       ----------------
                hfield          HFIELD    The field's handle.

                position        int    The logical or physical position from
                                which the character will be retrieved.

                physical        BOOL    TRUE if position is a physical
                                position.  FALSE if position is a logical
                                position.

    Return Value    The specified character or -1 if an error occurred.

    ________________________________________________________________________

    field_get_decimal_pos

    Syntax      int    field_get_decimal_pos(hfield)

                Gets the virtual logical position of the decimal point in a
                field.  For example if a field had a picture string of
                "####.##", the virtual logical position of the decimal point
                would be 4. For "###", it would be 3.

                Parameter       Type/Description
                ---------       ----------------
                hfield          HFIELD    The field's handle.

    Return Value    The virtual logical position of the decimal point or -1
                    if an error occurred.

    ________________________________________________________________________

    field_get_from_ctrl_id

    Syntax      HFIELD    field_get_from_ctrl_id(hform, ctrl_id)

                Gets the handle for a field associated with a given dialog
                control ID.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.


                                      39   

                ctrl_id         int    The dialog control ID of the field's
                                edit control.

    Return Value    The handle of the field associated with the input dialog
                    control ID or NULL if an error occurred.

    ________________________________________________________________________

    field_get_from_hwnd

    Syntax      HFIELD    field_get_from_hwnd(hform, hWnd)

                Gets the handle for a field associated with a given edit
                control's window handle.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

                hWnd            HWND    The window handle of the field's
                                edit control.

    Return Value    The handle of the field associated with the input window
                    handle or NULL if an error occurred.

    ________________________________________________________________________

    field_get_pos_info

    Syntax      int    field_get_pos_info(hfield, logical_position, pfpos)

                Gets information related to a field's logical position.
                This information includes the physical position, selection,
                picture string position, validation character, validation
                character occurrence, and which side of the decimal point
                the position lies.

                Parameter           Type/Description
                ---------           ----------------
                hfield              HFIELD    The field's handle.

                logical_position    int    The logical position to get
                                    information for.

                pfpos               LPFIELD_POS    A pointer to the
                                    FIELD_POS struct which will receive the
                                    information.  See the description of the
                                    FIELD_POS structure for details.

    Return Value    Nonzero if an error occurred.

    ________________________________________________________________________


                                      40   

    field_get_position

    Syntax      int    field_get_position(hfield, pfpos)

                Gets information related to the current position in a field.
                This information includes the logical position, physical
                position, selection, picture string position, validation
                character, validation character occurrence, and which side
                of the decimal point the position lies.

                Parameter       Type/Description
                ---------       ----------------
                hfield          HFIELD    The field's handle.

                pfpos           LPFIELD_POS    A pointer to the FIELD_POS
                                struct which will receive the information.
                                See the description of the FIELD_POS
                                structure for details.

    Return Value    Nonzero if an error occurred.

    Comments    The field identified by hfield must have the focus when
                calling this function.

    ________________________________________________________________________

    field_get_text

    Syntax      int    field_get_text(hfield, pbuf, physical)

                Gets the contents of a field.

                Parameter       Type/Description
                ---------       ----------------
                hfield          HFIELD    The field's handle.

                pbuf            LPSTR    Pointer to the buffer to receives
                                the field's contents.

                physical        BOOL    TRUE specifies physical contents are
                                to be copied to pbuf. FALSE specifies
                                logical contents are to be copied.

    Return Value    Nonzero if an error occurred.

    ________________________________________________________________________

    field_has_changed

    Syntax      int    field_has_changed(hfield)

                Determines whether a field has been edited by the user.


                                      41   

                Parameter       Type/Description
                ---------       ----------------
                hfield          HFIELD    The field's handle.

    Return Value    TRUE if the user has edited the field, FALSE if the user
                    has not edited the field, or -1 if an error occurred.

    ________________________________________________________________________

    field_insert_decimal

    Syntax      int    field_insert_decimal(hfield, pbuf)

                Inserts a decimal point into a buffer containing a numeric
                field's logical contents.

                Parameter       Type/Description
                ---------       ----------------
                hfield          HFIELD    The field's handle.

                pbuf            LPSTR    Pointer to the buffer containing
                                the field's logical contents.

    Return Value    Nonzero if an error occurred.

    Comments    The resulting value in the buffer can be converted to a
                double by calling the atof function.  This is useful in
                validation functions.

    ________________________________________________________________________

    field_lock

    Syntax      LPFIELD    field_lock(hfield)

                Locks a field's record in memory so it can be accessed.

                Parameter       Type/Description
                ---------       ----------------
                hfield          HFIELD    The field's handle.

    Return Value    A far pointer to the field's record or NULL if an error
                    occurred.  See the description for the FIELD struct for
                    details.

    Comments    Once you have obtained a pointer to the field's record, you
                are able to read or change any of the record's elements.
                However, it is not recommended that you change the values of
                any of the elements.

                When you are done accessing the field's record, be sure to
                call field_unlock.


                                      42   

                Calling this function locks the field's record in the .DLL's
                local heap.  In addition, the .DLL's entire data segment is
                locked in the global heap.  This is required to ensure the
                returned far pointer will remain valid until the call to
                field_unlock.  For this reason, you should not keep the
                field locked any longer than absolutely necessary.

    ________________________________________________________________________

    field_log_to_data

    Syntax      int    field_log_to_data(hfield, pbuf, pdata, data_type)

                Converts a character string in logical field format to a
                value in a specified data type.

                Parameter       Type/Description
                ---------       ----------------
                hfield          HFIELD    The field's handle.

                pbuf            LPSTR    Pointer to the buffer containing
                                the string to convert.

                pdata           LPVOID    Pointer to the data item to
                                receive the converted value. This parameter
                                can point to one of the following types:
                                char (string), int, unsigned, long, unsigned
                                long, or double.  The value you give for the
                                data_type parameter must correspond to the
                                data pointed to by pdata.

                data_type       int    Specifies the data type pdata points
                                to.  See the description of the field_define
                                function for a list of possible values.

    Return Value    Nonzero if an error occurred.

    ________________________________________________________________________

    field_log_to_phys

    Syntax      int    field_log_to_phys(hfield, pbuf)

                Converts a character string in logical field format to
                physical field format.

                Parameter       Type/Description
                ---------       ----------------
                hfield          HFIELD    The field's handle.

                pbuf            LPSTR    Pointer to the buffer containing
                                the string to convert.


                                      43   

    Return Value    Nonzero if an error occurred.

    ________________________________________________________________________

    field_phys_to_log

    Syntax      int    field_phys_to_log(hfield, pbuf)

                Converts a character string in physical field format to
                logical field format.

                Parameter       Type/Description
                ---------       ----------------
                hfield          HFIELD    The field's handle.

                pbuf            LPSTR    Pointer to the buffer containing
                                the string to convert.

    Return Value    Nonzero if an error occurred.

    ________________________________________________________________________

    field_set_text

    Syntax      int    field_set_text(hfield, pbuf, physical)

                Sets the contents of a field.

                Parameter       Type/Description
                ---------       ----------------
                hfield          HFIELD    The field's handle.

                pbuf            LPSTR    Pointer to the buffer containing
                                the string to be used for the field's
                                contents.

                physical        BOOL    TRUE if the string pointed to by
                                pbuf is in physical field format. FALSE if
                                the string is in logical field format.

    Return Value    Nonzero if an error occurred.

    ________________________________________________________________________

    field_unlock

    Syntax      void    field_unlock(hfield)

                Unlocks a field's record in memory.

                Parameter       Type/Description
                ---------       ----------------


                                      44   
                hfield          HFIELD    The field's handle.

    Return Value    None.

    ________________________________________________________________________

    form_begin

    Syntax      HFORM  form_begin(hDlg)

                Begins a form definition.

                Parameter       Type/Description
                ---------       ----------------
                hDlg            HWND    The window handle of the dialog box.

    Return Value    The new form's handle or NULL if an error occurred. This
                    handle should be assigned to a static or global variable
                    for use in future function calls.

    Comments    This function must be called during the WM_INITDIALOG
                message processing in the dialog procedure.  You should not
                call any Windows functions which generate WM_COMMAND
                messages before calling form_begin.  Be sure to call
                form_end after all controls have been defined.

    ________________________________________________________________________

    form_end

    Syntax      int    form_end(hform)

                Ends a form definition.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

    Return Value    Nonzero if an error occurred.

    Comments    This function must be called during the WM_INITDIALOG
                message processing in the dialog procedure.  After calling
                this function, no more controls can be defined.

    ________________________________________________________________________

    form_get_active

    Syntax      HFORM    form_get_active()

                Gets the handle of the active form.

    Return Value    The handle of the active form or NULL if an error


                                      45   
                    occurred.

    ________________________________________________________________________

    form_get_from_hdlg

    Syntax      HFORM    form_get_from_hdlg(hDlg)

                Gets the handle of a form associated with a given dialog box
                window handle.

                Parameter       Type/Description
                ---------       ----------------
                hDlg            HWND    The window handle of the dialog box.

    Return Value    The handle of the form associated with the input dialog
                    box window handle or NULL if an error occurred.

    ________________________________________________________________________

    form_has_changed

    Syntax      int    form_has_changed(hform)

                Determines whether any of the defined fields or buttons of a
                form have been changed by the user.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

    Return Value    TRUE if one or more defined fields or buttons have been
                    changed by the user, FALSE if no defined fields or
                    buttons have been changed, or -1 if an error occurred.

    ________________________________________________________________________

    form_in_error_cond

    Syntax      int    form_in_error_cond(hform)

                Determines whether a form is in an error condition.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

    Return Value    TRUE if the form is in an error condition, FALSE if the
                    form is not in an error condition, or -1 if an error
                    occurred.

    Comments    When a validation error has occurred, the form is in an
                error condition.  Even if a field's error handler is active,


                                      46   
                messages are still sent to the dialog procedure.  It is
                often desirable to check to see if the form is in an error
                condition before processing these messages.  For example, if
                the form is in an error condition, you would not want to any
                IDOK processing to occur.  Calling this function first can
                prevent this from happening.

    ________________________________________________________________________

    form_is_cancelled

    Syntax      int    form_is_cancelled(hform)

                Determines whether a form has been cancelled.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

    Return Value    TRUE if the form has been cancelled, FALSE if the form
                    has not been cancelled, or -1 if an error occurred.

    Comments    The form is cancelled when the user presses the Escape key
                or clicks on the "Cancel" button.  Even if the form has been
                cancelled, messages are still sent to the dialog procedure.
                It is often desirable to check to see if the form has been
                cancelled before processing these messages.

    ________________________________________________________________________

    form_lock

    Syntax      LPFORM    form_lock(hform)

            Locks a form's record in memory so it can be accessed.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

    Return Value    A far pointer to the form's record or NULL if an error
                    occurred.  See the description for the FORM struct for
                    details.

    Comments    Once you have obtained a pointer to the form's record, you
                are able to read or change any of the record's elements.
                However, it is not recommended that you change the values of
                any of the elements.

                When you are done accessing the form's record, be sure to
                call form_unlock.

                Calling this function locks the form's record in the .DLL's


                                      47   
                local heap.  In addition, the .DLL's entire data segment is
                locked in the global heap.  This is required to ensure the
                returned far pointer will remain valid until the call to
                form_unlock.  For this reason, you should not keep the form
                locked any longer than absolutely necessary.

    ________________________________________________________________________

    form_process

    Syntax      int    form_process(hform)

                Processes all defined controls in a form.  Calling this
                function copies the values contained in the defined fields
                and buttons to the data items specified in the calls to
                field_define and button_define.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

    Return Value    Nonzero if an error occurred.

    Comments    This function is normally called during IDOK processing of
                the WM_COMMAND message in the dialog procedure.  The
                dproc_enter_idok, form_in_error_cond, and form_validate
                functions must be called first to ensure none of the fields'
                values have been invalidated.  EndDialog cannot be called
                until after calling this function.

    ________________________________________________________________________

    form_set_help

    Syntax      int    form_set_help(hform, help_file_name)

                Sets the file name of the Windows Help file to be used for
                context-sensitive help for individual controls in the dialog
                box.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

                help_file_name  LPSTR    Pointer to the character string
                                containing the Windows Help file name.  The
                                full drive:path specification can be
                                included.

    Return Value    Nonzero if an error occurred.

    Comments    This function must be called if context-sensitive help is to
                be applied to individual controls.


                                      48   

    ________________________________________________________________________

    form_terminate

    Syntax      int    form_terminate(hform)

                Terminates the form.  All memory allocated by the form and
                the defined controls within it will be freed.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

    Return Value    Nonzero if an error occurred.

    Comments    This function is normally called during IDOK and IDCANCEL
                processing of the WM_COMMAND message in the dialog
                procedure.  The call to EndDialog must be made before
                calling this function.

                All handles and pointers to the form and its defined
                cotnrols will no longer be valid after calling this
                function.

    ________________________________________________________________________

    form_unlock

    Syntax      void    form_unlock(hform)

                Unlocks a form's record in memory.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

    Return Value    None.

    ________________________________________________________________________

    form_validate

    Syntax      HFIELD    form_validate(hform)

                Validates all fields in a form.  If a field fails
                validation, input focus will be set to the field in error.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

    Return Value    The handle of the field that failed validation or NULL


                                      49   
                    if all fields passed validation.  A value of -1 will be
                    returned in the event of an error.

    Comments    This function is normally called during IDOK processing of
                the WM_COMMAND message in the dialog procedure.  The
                dproc_enter_idok and form_in_error_cond functions must be
                called before calling this function.

                If a field fails validation, IDOK processing should be
                discontinued.

    ________________________________________________________________________

    genctrl_define

    Syntax      HGENCTRL    genctrl_define(hform, ctrl_id, help_context)

                Defines a generic control.

                Parameter       Type/Description
                ---------       ----------------
                hform           HFORM    The form's handle.

                ctrl_id         int    The dialog control ID of the control
                                to define.

                help_context    DWORD    The help context identifier of the
                                Windows Help topic associated with the
                                control.  If context-sensitive help is not
                                being applied to the control, set
                                help_context to 0.  If context-sensitive
                                help is being applied to the control, the
                                form_set_help function must be called prior
                                to the F1 key being pressed.

    Return Value    The handle of the new generic control's record or NULL
                    if an error occurred.  An error can be caused by one of
                    the following conditions:

                        Control ID is invalid.
                        The form_end function has already been called.
                        Memory allocation error.

    ________________________________________________________________________

    statmsg_define

    Syntax      int    statmsg_define(hform, ctrl_id, which, onmsg, offmsg)

                Defines a static text control to be used as a status message
                for the Insert, CapsLock, or NumLock key.

                Parameter       Type/Description


                                      50   
                ---------       ----------------
                hform           HFORM    The form's handle.

                ctrl_id         int    The dialog control ID of the static
                                text control to be used for the status
                                message.

                which           int    Identifier that specifies which
                                status message is to be assigned to the
                                control.  Can be one of the following
                                values:

                                Value           Meaning
                                -----           -------
                                SM_INSERT       Insert key status message.

                                SM_CAPSLOCK     CapsLock key status message.

                                SM_NUMLOCK      NumLock key status message.

                onmsg           LPSTR    The message to set the static text
                                control to when the key identified by which
                                is toggled on.

                offmsg          LPSTR    The message to set the static text
                                control to when the key identified by which
                                is toggled off.

    Return Value    Nonzero if an error occurred.

    Comments    The static text control used for the key status message will
                be updated automatically when the user toggles the key.
                However, if the key is toggled while the user is in a
                control that has not been defined, the message will not be
                updated until the user moves to a control that has been
                defined.

    ________________________________________________________________________

    str_delete_char

    Syntax      int    str_delete_char(pstr, ch)

                Deletes the first occurrence of a character from a string.

                Parameter       Type/Description
                ---------       ----------------
                pstr            LPSTR    Pointer to the string to operate
                                on.

                ch              int    The character to delete.

    Return Value    Nonzero if the character was not found.


                                      51   

    ________________________________________________________________________

    str_insert_char

    Syntax      void    str_insert_char(pstr, ch, offs)

                Inserts a character into a string.

                Parameter       Type/Description
                ---------       ----------------
                pstr            LPSTR    Pointer to the string to operate
                                on.

                ch              int    The character to insert.

                offs            int    The offset into the string where the
                                character is to be inserted.

    Return Value    None.

    ________________________________________________________________________

    str_is_blank

    Syntax      BOOL    str_is_blank(pstr)

                Determines whether a string is blank.

                Parameter       Type/Description
                ---------       ----------------
                pstr            LPSTR    Pointer to the string to test.

    Return Value    TRUE if the string is blank; otherwise FALSE.

    ________________________________________________________________________

    str_is_value_zero

    Syntax      BOOL    str_is_value_zero(pstr)

                Determines whether a string contains a numeric value of
                zero.

                Parameter       Type/Description
                ---------       ----------------
                pstr            LPSTR    Pointer to the string to test.

    Return Value    TRUE if the string contains a numeric value of zero;
                    otherwise FALSE.

    ________________________________________________________________________



                                      52   
    str_trim_spaces

    Syntax      void    str_trim_spaces(pstr)

                Trims trailing spaces from a string.

                Parameter       Type/Description
                ---------       ----------------
                pstr            LPSTR    Pointer to the string to operate
                                on.

    Return Value    None.











































                                      53   


























                              Data Type Reference




























                                      54   

    BUTTON

    Button Record

            The BUTTON structure contains information about a defined
            button.

            typedef struct {
                HWND hWnd;
                HBUTTON hbutton;
                HBUTTON hnext_button;
                int ctrl_id;
                LPINT pdata;
                int group_id;
                int on_value;
                int off_value;
                DWORD help_context;
                BOOL has_changed;
            } BUTTON;

            The BUTTON structure contains the following elements:

            Element         Description
            -------         -----------
            hWnd            Window handle of the button control.

            hbutton         Handle of the BUTTON data structure.
                            (Self-reference)

            hnext_button    Handle of the next BUTTON data structure in the
                            linked list of buttons.

            ctrl_id         Dialog control ID of the button control
                            associated with the button.

            pdata           Pointer to the integer variable being updated or
                            initialized by the button.

            group_id        Group ID of the button.  Other buttons with the
                            same group ID belong to the same group as this
                            button.

            on_value        The value that will be stored at the integer
                            variable pointed to by pdata if the button is
                            checked.

            off_value       The value that will be stored at the integer
                            variable pointed to by pdata if the button is
                            not checked.

            help_context    The help context identifier of the Windows Help
                            topic associated with the button. has_changed


                                      55   
                            Flag indicating whether the button has been
                            changed by the user.

    Comments    The values of these elements should not be directly changed.

    ________________________________________________________________________

    FIELD

    Field Record

            The FIELD structure contains information about a defined field.

            typedef struct {
                HWND hwnd;
                HWND hcombo;
                HFIELD hfield;
                HFIELD hnext_field;
                int ctrl_id;
                LPVOID pdata;
                int data_type;
                LPSTR picture_string;
                DWORD features;
                int (FAR PASCAL *pvalid_func) (LPSTR);
                int error_value;
                DWORD help_context;
                BOOL has_changed;
                int logical_size;
                int physical_size;
                int decimal_position;
            } FIELD;

            The FIELD structure contains the following elements:

            Element         Description
            -------         -----------
            hwnd            Window handle of the field's edit control.

            hcombo          Window handle of the combo box a field belongs
                            to.

            hfield          Handle of the FIELD data structure.
                            (Self-reference)

            hnext_field     Handle of the next FIELD data structure in the
                            linked list of fields.

            ctrl_id         Dialog control ID of the edit control associated
                            with the field.

            pdata           Pointer to the data item being updated or
                            initialized by the field.  This can point to a
                            character string, integer, unsigned integer,


                                      56   
                            long integer, unsigned long integer, or double
                            precision floating point data type.

            data_type       Specifies what pdata points to.  See the
                            description of the field_define function for a
                            list of possible values.

            picture_string  Pointer to the picture string associated with
                            the field.

            features        Contains one or more field features combined
                            with the bitwise OR operator.  See the
                            description of the field_define function for a
                            list of possible values.

            pvalid_func     Procedure-instance address of the field's
                            validation function.

            error_value     Value that gets passed to the dialog procedure
                            (in the wParam parameter of the WM_COMMAND
                            message) when the validation function returns an
                            error.

            help_context    The help context identifier of the Windows Help
                            topic associated with the field.

            has_changed     Flag indicating whether the field has been
                            edited by the user.

            logical_size    Logical size of the field.

            physical_size   Physical size of the field.

            decimal_position    Virtual logical position of the decimal
                                point.

    Comments    The values of these elements should not be directly changed.

    ________________________________________________________________________

    FIELD_POS

    Field Position Information

            The FIELD_POS structure contains information about a position in
            a field.

            typedef struct {
                long selection;
                int physical_position;
                int logical_position;
                BOOL to_right_of_dec;
                LPSTR ppicture_str_pos;


                                      57   
                int val_char_occ;
                char validation_char;
            } FIELD_POS;

            The FIELD_POS structure contains the following elements:

            Element             Description
            -------             -----------
            selection           The field's selection.  The low-order word
                                will always be equal to the high-order word.

            physical_position   The field's physical position.  The
                                low-order and high-order words of selection
                                are equal to this value.

            logical_position    The field's logical position.

            to_right_of_dec     Flag indicating whether the position is on
                                the right-hand side of the decimal.

            ppicture_str_pos    Pointer to the position in the picture
                                string that is associated with the position.

            val_char_occ        Validation character occurrence.  When there
                                is multiple occurrence validation characters
                                (such as "A(25)") in a field, the values for
                                ppicture_str_pos and validation_char will
                                remain the same regardless of which
                                occurrence the position is at.  The
                                val_char_occ identifies which occurrence the
                                position is associated with.

            validation_char     The validation character.  See Appendix A
                                for a list of possible values.

    ________________________________________________________________________

    FORM

    Form Record

            The FORM structure contains information about a form.

            typedef struct {
                HWND hdlg;
                HFORM hform;
                HFORM hnext_form;
                HFIELD hhead_field;
                HFIELD hcurr_field;
                HBUTTON hhead_button;
                HANDLE hproc_array;
                int num_controls;
                LPSTR help_file_name;


                                      58   
                int insert_id;
                LPSTR insert_onmsg;
                LPSTR insert_offmsg;
                int capslock_id;
                LPSTR capslock_onmsg;
                LPSTR capslock_offmsg;
                int numlock_id;
                LPSTR numlock_onmsg;
                LPSTR numlock_offmsg;
                BOOL pressed_cancel;
                BOOL error_condition;
                BOOL ignore_ok;
                BOOL edit_key_pressed;
                BOOL just_passed_dec;
                BOOL help_invoked;
            } FORM;

            The FORM structure contains the following elements:

            Element             Description
            -------             -----------
            hdlg                The window handle of the dialog box
                                associated with the form.

            hform               Handle of the FORM data structure.
                                (Self-reference)

            hnext_form          Handle of the next FORM data structure in
                                the linked list of forms.

            hhead_field         Handle of the head FIELD structure in the
                                linked list of fields.

            hcurr_field         Handle of the FIELD structure of the current
                                field.

            hhead_button        Handle of the head BUTTON structure in the
                                linked list of buttons.

            hproc_array         Handle of the memory block which contains
                                the window procedure array that holds the
                                window procedure addresses for each defined
                                control.

            num_controls        Number of defined controls in the form.

            help_file_name      Pointer to the character string containing
                                the help file name.

            insert_id           Dialog control ID of the static text control
                                used for the Insert key status message.

            insert_onmsg        Pointer to the character string containing


                                      59   
                                the message indicating the Insert key is on.

            insert_offmsg       Pointer to the character string containing
                                the message indicating the Insert key is
                                off.

            capslock_id         Dialog control ID of the static text control
                                used for the CapsLock key status message.

            capslock_onmsg      Pointer to the character string containing
                                the message indicating the CapsLock key is
                                on.

            capslock_offmsg     Pointer to the character string containing
                                the message indicating the CapsLock key is
                                off.

            numlock_id          Dialog control ID of the static text control
                                used for the NumLock key status message.

            numlock_onmsg       Pointer to the character string containing
                                the message indicating the NumLock key is
                                on.

            numlock_offmsg      Pointer to the character string containing
                                the message indicating the NumLock key is
                                off.

            pressed_cancel      Flag indicating whether the user pressed or
                                clicked on the "Cancel" button.

            error_condition     Flag indicating whether the form is in an
                                error condition. The form is in an error
                                condition when a field fails validation.

            ignore_ok           Flag indicating whether the "OK" button or
                                Enter key should be ignored.  Used with
                                field validation.

            edit_key_pressed    Flag indicating whether the last key pressed
                                was an editing key or a character key.

            just_passed_dec     Flag indicating whether the last keystroke
                                moved the cursor from the position to the
                                left of the decimal to the position to the
                                right of the decimal.

            help_invoked        Flag indicating whether the Windows Help
                                application has been invoked from within any
                                of the defined controls.

    Comments    The values of these elements should not be directly changed.



                                      60   
    ________________________________________________________________________

    HBUTTON

    Handle of a BUTTON Structure

            typedef HANDLE HBUTTON;

    ________________________________________________________________________

    HFIELD

    Handle of a FIELD Structure

            typedef HANDLE HFIELD;

    ________________________________________________________________________

    HFORM

    Handle of a FORM Structure

            typedef HANDLE HFORM;

    ________________________________________________________________________

    HGENCTRL

    Handle of a Generic Control Record

            typedef HBUTTON HGENCTRL;

    Comments    The BUTTON data structure is used for storage of information
                about a generic control.

    ________________________________________________________________________

    LPBUTTON

    Far Pointer to a BUTTON Structure

            typedef BUTTON FAR * LPBUTTON;

    ________________________________________________________________________

    LPFIELD

    Far Pointer to a FIELD Structure

            typedef FIELD FAR * LPFIELD;

    ________________________________________________________________________



                                      61   
    LPFIELD_POS

    Far Pointer to a FIELD_POS Structure

            typedef FIELD_POS FAR * LPFIELD_POS;

    ________________________________________________________________________

    LPFORM

    Far Pointer to a FORM Structure

            typedef FORM FAR * LPFORM;

    ________________________________________________________________________

    PBUTTON

    Pointer to a BUTTON Structure

            typedef BUTTON * PBUTTON;

    ________________________________________________________________________

    PFIELD

    Pointer to a FIELD Structure

            typedef FIELD * PFIELD;

    ________________________________________________________________________

    PFIELD_POS

    Pointer to a FIELD_POS Structure

            typedef FIELD_POS * PFIELD_POS;

    ________________________________________________________________________

    PFORM

    Pointer to a FORM Structure

            typedef FORM * PFORM;

    ________________________________________________________________________

    PROC_ARRAY_INFO

    Dialog Control Window Procedure Array Information

            The PROC_ARRAY_INFO structure is used to hold information about


                                      62   
            a dialog control's window procedure.

            typedef struct {
                HWND hWnd;
                FARPROC lpProc;
            } PROC_ARRAY_INFO;

            The PROC_ARRAY_INFO structure contains the following elements:

            Element     Description
            -------     -----------
            hWnd        The window handle of the dialog control.

            lpProc      Pointer to the dialog control's window procedure.

    Comments    The window procedure array is not accessible.  This data
                structure is listed solely because it appears in the library
                header file.





































                                      63   

    Appendix A:  Picture String Characters


    Character       Meaning
    ---------       -------
    9               Accept an integer numeric character (0 - 9).

    #               Accept a real numeric character (0 - 9, -, +, ., E, e).

    A               Accept an alphabetic character (A - Z, a - z).  Foreign
                    alphabetic characters are supported.

    X               Accept an alphanumeric character (A - Z, a - z, 0 - 9).
                    Foreign alphabetic characters are supported.

    Y               Accept a yes/no character (Y, y, N, n).

    D               Accept a date character (0 - 9, -, /).

    T               Accept a telephone number character (0 - 9, (, ), -, +).

    F               Accept a file name character (any character except \, :,
                    *, ?, ;, ,, =, +, <, >, |, /, [, ], ").

    P               Accept a pathspec character (any character except ;, ,,
                    =, +, <, >, |, /, [, ], ").

    ?               Accept any printable character.

    !               Accept any printable character.  If the character is a
                    lowercase letter, convert it to uppercase.  Foreign
                    alphabetic characters are supported.

    < ..... >       Accept only one of the characters listed between the
                    angle brackets. For example, "<0123>" will accept only
                    0, 1, 2, or 3.  Also you can specify a range using two
                    periods between the two range limiting characters.  For
                    example, "<0..3>" would be equivalent to "<0123>".  Or
                    you can get fancy, "<0..3>5<7..9>" would accept 0, 1, 2,
                    3, 5, 7, 8, or 9. Characters are converted to uppercase.
                    For example, "<A..Z>" will accept any uppercase or
                    lowercase letter.

    > ..... <       Accept any character except the ones listed between the
                    angle brackets.  Works similar to the "<.....>"
                    characters.

    ( ..... )       Specifies multiple occurrences of one of the above
                    validation characters.  For example, "A(5)" is
                    equivalent to "AAAAA". "<0123>(3)" is equivalent to
                    "<0123><0123><0123>".  The open parenthesis must
                    immediately follow the validation character.


                                      64   

    ' ..... '       Insert formatting characters into field.  All characters
                    between the single quotes are formatting characters.

    \" ..... \"     Double quotes have the meaning as single quotes.  Useful
                    for when you need to insert formatting characters that
                    include the single quote character.  Note in the C
                    programming language, the backslashes preceding the
                    double quote characters are required.

    .               Special formatting character which specifies where the
                    decimal point will be in a numeric field.  You can only
                    have one decimal point in a picture string.  The field
                    must have either the FDF_NUMERIC or FDF_CALCNUM feature
                    defined.

    ,               Special formatting character which specifies where
                    conditional commas will be located in a calculator-style
                    numeric field.  A comma will only be displayed if a
                    digit exists to the left of it.  The field must have the
                    FDF_CALCNUM feature defined.

    space           The space character can be used throughout the picture
                    string to improve readability.  Do not put spaces
                    between angle brackets or quotes unless you intend for
                    them to be there.





























                                      65   

    Appendix B:  Field Editing Keys


                              CURSOR MOVEMENT

    Editing Key         Action
    -----------         ------
    LeftArrow           Moves the cursor to the previous position.

    RightArrow          Moves the cursor to the next position.

    Ctrl-LeftArrow      Moves the cursor to the beginning of the previous
                        word.

    Ctrl-RightArrow     Moves the cursor to the beginning of the next word.

    Home                Moves the cursor to the first position in the field.

    End                 Moves the cursor to the position following the last
                        character in the field.

    Ctrl-End            Move the cursor to the last position in the field.


                              TEXT DELETION

    Editing Key         Action
    -----------         ------
    Backspace           Deletes the character to the left of the cursor.

    Delete              Deletes the character at the cursor.

    Ctrl-Backspace      Deletes the word to the left of the cursor.

    Ctrl-Delete         Deletes the word at the cursor.

    Ctrl-Shift-Delete   Deletes all characters to the right of the cursor.



                                  CLIPBOARD

    Editing Key         Action
    -----------         ------
    Ctrl-Insert         Copies the contents of field to the clipboard.

    Shift-Insert        Pastes the contents of the clipboard into the field.

    Shift-Delete        Cuts the contents of the field to the clipboard.


                                  TOGGLES


                                      66   

    Editing Key         Action
    -----------         ------
    Insert              Toggles Insert mode.

    CapsLock            Toggles Caps Lock mode.

    NumLock             Toggles Num Lock mode.


                                MISCELLANEOUS

    Editing Key         Action
    -----------         ------
    Enter               Terminates processing of the form.  Field changes
                        are saved.

    Esc                 Terminates processing of the form.  None of the
                        field changes will be saved.

    Tab                 Sets the input focus to the next dialog control with
                        the WS_TABSTOP style.

    Shift-Tab           Sets the input focus to the previous dialog control
                        with the WS_TABSTOP style.

    Alt-Backspace       Restores the field to its previous contents.

    F1                  Displays context-sensitive help for the field.


























                                      67   


    Appendix C:  Glossary


    button
        A button is a dialog box button control with an on and off state
        defined by the button_define function.  The button control is
        usually a radio button or check box.

    button control
        A button control is a Windows dialog control that can be set either
        on or off.  A button control is actually a window of class "button"
        and is a child of the dialog box window.

    cursor
        The cursor is the blinking vertical bar that identifies the user's
        position in a field. Throughout the Windows SDK documentation, the
        term "cursor" refers to the mouse pointer and the term "caret"
        refers to the cursor.

    edit control
        An edit control is a Windows dialog control that is used for the
        input of text information by the user.  An edit control is actually
        a window of class "edit" and is a child of the dialog box window.

    edit field
        Another name for an edit control.

    field
        A field is a dialog box edit control that has been defined by the
        field_define function.

    form
        A form is a dialog box with one or more WEDL-defined controls within
        it.

    formatting characters
        Formatting characters are the characters embedded in a field to
        assist the user in entering the correct data.  The positions of the
        formatting characters in a field are defined in the picture string.
        The user is not able to move the cursor to, or edit, the formatting
        characters. The '/' characters in a date field, and the '(', ')',
        and '-' characters in a phone number field are good examples of
        formatting characters.

    generic control
        A generic control can be any control in a dialog box defined by the
        genctrl_define function.

    logical field contents
        The logical field contents are the contents of a field without the
        embedded formatting characters.  To get the logical contents of a


                                      68   
        field, call the field_get_text function.

    logical field format
        A character string is in logical field format if it contains no
        embedded formatting characters and it can be used to set the
        contents of a field.  You can set the contents of a field using a
        character string in logical field format by calling the
        field_set_text function.

    mouse pointer
        The mouse pointer is the icon on the screen that identifies where
        the mouse currently is.  This icon is very often a white arrow, but
        can have just about any shape. Throughout the Windows SDK, the term
        "cursor" refers to the mouse pointer.

    physical field contents
        The physical field contents are the contents of a field including
        the embedded formatting characters.  If you were to call
        GetDlgItemText on the field, you would get its physical contents,
        but it is preferable to use the field_get_text function.

    physical field format
        A character string is in physical field format if it contains any
        embedded formatting characters and it can be used to set the
        contents of a field.  You can set the contents of a field using a
        character string in physical field format by calling the
        field_set_text function.

    picture string
        The picture string is a character string assigned to a field by the
        field_define function.  It is used to define the number of
        characters in a field, the allowable characters for each position in
        the field (validation characters), and the placement of formatting
        characters.  See Appendix A for a list of characters that can exist
        in a picture string.

    validation character
        A validation character is a character in a picture string which is
        used to define the allowable characters that can be input for the
        corresponding position in its field.  See Appendix A for a list of
        validation characters.

    validation function
        A validation function is a function written by the programmer to
        validate the information in a field.  A validation function is
        assigned to a field by the field_define function.









                                      69   

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #4107

     Volume in drive A has no label
     Directory of A:\

    DEMO     C        6592  12-09-91   1:21a
    DEMO     DEF       637  12-09-91   1:21a
    DEMO     EXE     33280  12-09-91   1:21a
    DEMO     H        3027  12-09-91   1:21a
    DEMO     ICO      2238  12-09-91   1:21a
    DEMO     RC       8758  12-09-91   1:21a
    DEMO1    C       14743  12-09-91   1:21a
    DEMO2    C        7851  12-09-91   1:21a
    DEMO3    C        6258  12-09-91   1:21a
    DEMO4    C        3782  12-09-91   1:21a
    DEMOHELP H         759  12-09-91   1:21a
    DEMOHELP HLP      4518  12-09-91   1:21a
    DEMOHELP HPJ       765  12-09-91   1:21a
    DEMOHELP RTF      5842  12-09-91   1:21a
    REGISTER DOC      2108  12-09-91   1:21a
    WEDL     DOC    139725  12-09-91   1:21a
    WEDL     H       14829  12-09-91   1:21a
    WEDL-E   DLL     29632  12-09-91   1:21a
    WEDL-E   LIB      6144  12-09-91   1:21a
    READ     ME       1784  12-09-91   1:21a
    DEMO     MAK      1628  12-09-91   1:21a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       847  10-08-93   3:26p
           23 file(s)     295778 bytes
                           16384 bytes free
