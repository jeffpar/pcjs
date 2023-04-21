---
layout: page
title: "PC-SIG Diskette Library (Disk #1771)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1771/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1771"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EZ-CRYPT-LITE"

    If file privacy and security is a priority, EZ-CRYPT-LITE is a powerful
    encryption/decryption package that anyone can use.  EZ-CRYPT-LITE will
    encrypt a source file using any one of several methods, and only decrypt
    the file using a confidential key.  And do it all without cryptic
    commands!
    
    Ideal for use with electronic information services and almost any type
    of file transfer (both electronic and mail service).  Extensive menus,
    on-line manual, and context-sensitive help make it easy to use.  And if
    you want file statistics to determine how well your file is encrypted
    (frequency/distribution, mode, mean, median, and more) they are
    available from within EZ-CRYPT-LITE.  There is even a "file wipe"
    option to completely erase all traces of your file after deletion.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EZCRL.DOC

{% raw %}
```










                                 E Z - C R Y P T

                                      L I T E


                          UNREGISTERED, VALUEWARE VERSION


                                   Version 1.x

                                 Reference Manual



               Encryption, decryption, and cryptanalysis program.

             Context sensitive help and on-line manual make it easy!

     Note: This Valueware (tm, EZX) version of EZ-CRYPT LITE may be "shared"
           with anyone you wish, as long as a duplication fee of no more than 
           $10 per disk is charged. Uploading for BBS purposes, isalso OK.
           Also, upon trial, registration is required of all who use this
           program, no exceptions. Please do not call our offices for technical
           assistance if you are not a registered user of this product.


                                  EZ-Crypt Lite

        "Encryption/Decryption/Cryptanalysis -- Fast, Safe, and Easy to Use"

                                 is published by

                EZX Publishing [Telephone Number: (713) 280-9900]
                    P.O. Box 58177, Webster, TX 77598 U.S.A.
             Published and printed in the United States of America.

            Copyright 1989 EZX Publishing as a licensed, unpublished,
              proprietary work.  All international rights reserved.











                                        1







        THE FOLLOWING APPLIES ONLY TO REGISTERED COPIES OF EZCRL!
        The printed Reference Manual and associated registered software 
        may not be copied, resold, reproduced, disclosed, archived, 
        transmitted, or transferred in any form, electronic or otherwise, 
        without the expressed written permission of EZX Publishing.  You 
        may freely distribute the "Valueware" version.

        EZX Publishing hereby grants a "book" license to the original 
        individual (even if purchased by a company) user of this copy of 
        EZ-Crypt Lite. You may use the program on your computer and make 
        one backup for storage as long as there is no possibility of use 
        or residence on more than one machine at any time. Just like two 
        people cannot read the same book in different locations at the 
        same time.  Every registered copy of EZ-Crypt Lite has a unique 
        embedded serial number for traceabililty. You may not sell or 
        give copies of the registered program or printed documentation 
        to anyone. No exceptions.

        Pricing, specifications, and conditions are subject to change 
        without notice.

        Send all registrations and inquires for site (multiple CPU or 
        network) licensing to EZX Publishing at the above address.

        Disclaimer:

        EZX Publishing, Inc.  makes NO claims AND offers NO warranties 
        of any sort with EZ-Crypt Lite.  EZX Publishing assumes NO 
        responsibility for any sort of damage resulting from the apparent 
        or actual use of EZ-Crypt Lite (mental or physical).  The forms 
        and program provided are not guaranteed as to merchantability or 
        fitness for their ultimate use.  The user accepts all 
        responsibility for use and may not resell the program or any 
        supplied form.

        IBM PC/XT/AT are registered trademarks of the International 
        Business Machines Corporation.

        EZ-Crypt, EZ-Crypt Lite, and Valueware are trademarks of EZX. 
        Other trademarks belong to their respective owners.


















                                        2








        PREFACE

        This manual is dedicated to Mae and Dave of MaeDae Enterprises 
        without whose never ending perseverance, EZ-Crypt Lite would not 
        be possible.

        ABOUT THIS MANUAL

        You will notice that this manual is concise.  This is intentional 
        as we have strived to make EZ-Crypt Lite the easiest program of 
        its type to use. We have opted to provide an on-line manual and 
        extensive context sensitive user help. Feel free to use this 
        reference manual to install and get acquainted with the program.

        Also, we will be using the acronynm "EZCRL" interchangeably with 
        EZ-Crypt Lite throughout this manual.

        The real fun and learning begin when you use the program. So 
        enjoy, live long, and prosper.

        With warmest regards,

        The gang at EZX Publishing.


































                                        3









                                   Table of Contents
                                   =================

        Page    Description
        ====    ============

        5. What is EZ-Crypt Lite?

        5. Hardware Requirements

        6. Installation - Introduction

        6. Installation for the Valueware Diskette

        7. Installation for Floppy Disk Drive Systems

        8. Installation for Hard Drive Systems

        10. Getting Started

        11. Tutorial

        13. Additional Features

        13. Troubleshooting

        15. Definitions

        16. Encrypted Ramblings

        18. Appendix A, Ordering Information

























                                        4









        WHAT IS EZ-CRYPT LITE?
        ======================

        EZ-Crypt Lite is a powerful encryption/decryption package that 
        allows you to:

        1. Encrypt a source file using one of several methods,

        2. Decrypt the file using a confidental key,

        3. Obtain file statistics (frequency/distribution, mode, mean, 
        median, and more) to determine how well the file is encrypted 
        (also to look at other encrypted files),

        4. And do it all without cryptic commands!


        EZ-Crypt Lite comes configured to work with most display adapters 
        and monitors.  You can easily customize it to suit your needs.


        HARDWARE REQUIREMENTS
        =====================

        1.  IBM PC/XT/AT, IBM PS/2, or fully compatible computer.

        2.  384K RAM and DOS 3.0 or later.

        3.  Any monitor.  EZ-Crypt Lite has been written to accommodate 
        monochrome, color, enhanced graphics,  and video graphics array 
        adapters.  Some "autoswitch" adapters may need to be in "manual".

        4.  At least one 5.25" floppy disk drive.  Two floppy disk drives 
        or one floppy and a hard disk (300K free space minimum for the 
        full system) are strongly recommended. 





















                                        5








        INSTALLATION
        ============

        Two 5.25" diskettes are normally included with EZ-Crypt Lite. 
        Also, some copies sold thru various distributors may vary in disk 
        quantity and make up, but all the files will be there.

        The diskette with the bright green label contains a Valueware 
        version of EZ-Crypt Lite that has additional information screens,  
        but all features are enabled.  The purpose of this diskette is to 
        check your entire system for proper operation before you break 
        the seal on the full system diskettes. (a.k.a. Diskette #0)

        Diskette #1 (the main disk) contains the actual program, the 
        context sensitive help, the on-line manual and additional support 
        files. Diskette 1 is sealed.


        INSTALLATION FOR the Valueware DISKETTE
        =======================================

        1. Make sure the Disk Operating System (DOS) has been loaded into 
        your system and you are at A>> (system prompt).  If you are 
        confused, consult your computer manual or your local PC "guru" 
        first as we can only help you with EZCRL.  If you need help with 
        DOS, try a local community college, adult continuing education 
        course at a local high school, or a "Puter-Tutor" type training 
        service.

        2. Insert the Valueware diskette into DRIVE A.

        3. Type

        EZCRL

        and press

        RETURN (ENTER on some machines, also, <<cr>> )

        The opening screen of EZ-Crypt Lite will ask you to press any key 
        to continue. Pressing any key will allow you to scroll through 
        various opening screens with important information (these screens 
        may not be included).  When the EZ-Crypt Lite's Main Menu appears 
        on your screen, go to the "GETTING STARTED" section of the manual 
        (this section is just after this installation section). Follow 
        the easy to understand instructions and welcome to the world of 
        EZ-Crypt Lite!

        Some packaging may not contain the "Valueware" diskette, so just 
        ignore this section of the manual if you do not have one. Reasons 
        include site licensing and/or other distributor arrangements.

        P.S. The Valueware version of EZ-Crypt Lite will do everything; 
        however, help may be limited due to space limitations.  Also 
        additional product information screens may be added.


                                        6









        Feel free to share ONLY the Valueware version with friends and 
        potential users of EZ-Crypt Lite for evaluation purposes only. 
        You may not use the Valueware version on other machines in order 
        to avoid purchasing additional copies of the full program.  You 
        may not give away any copies or make more than one copy of the 
        fully operational program for other than archival purposes.  The 
        full version of EZ-Crypt Lite has a unique serial number embedded 
        in each copy for traceability.


        INSTALLATION FOR FLOPPY DRIVE SYSTEMS (NO HARD DRIVE)
        =====================================================

        Please read through the entire installation procedure before 
        proceeding. This may save you some frustration later.

        1. Make sure Disk Operating System (DOS) has been loaded into 
        your system and you are at A:> system prompt.  If you need help, 
        consult your DOS manual or find a local computer "guru" to help 
        you out.

        2. Make a backup copy of the diskettes.  ONLY operate from backup 
        copies!

        3. Insert diskette #1 into DRIVE A.  No additional steps are 
        needed.

        Please sign and mail your registration card to the address on it. 
        Make a copy for your own records.  User support and updates 
        cannot be provided UNTIL your registration form is on file.

        Although EZCRL is not copy protected, you may make copies for 
        archive purposes only.  The purchase of one copy does not 
        authorize you to install EZCRL on more than one machine or on a 
        network.  If you intend to install to a hard drive, but run the 
        program from your floppy drive first, delete the file EZCRL.CNF 
        (if it exists) before loading to your hard drive.


        INSTALLATION FOR HARD DISK SYSTEMS
        ==================================

        1.  Make sure DOS has been loaded into your system and you are at 
        C:>.  (Note: Installation on a hard disk will require a minimum 
        of 300K of free disk space for the full system.)

        2.  Create a subdirectory called "EZCRL".  If you are not 
        familiar with creating a subdirectory, simply type

        MD  C:\EZCRL followed by Return

        If your drive is other than C:, substitute the appropriate 
        letter.



                                        7








        3.  Place diskette #1 (bright red label) into DRIVE A and type

        COPY A:*.*  C:\EZCRL followed by Return

        The program, on-line manual, and other related files on diskette 
        #1 will now be copied to your hard disk.

        8.  At C:> type

        CD \EZCRL followed by Return

        This will put you in the EZCRL subdirectory.

        9. Type

        EZCRL followed by Return.

        Admire the glittering opening screen, press any key to continue, 
        and select one of the menu options on your screen.


        IMPORTANT INSTALLATION NOTES:

        1. Diskette #1 contain many files in addition to EZCRL.EXE. 
        Because EZ-Crypt Lite is a large program, the additional files 
        EZCRLHLP.TXT and EZCRLHLP.INX are required for context sensitive 
        help.  EZCRLMAN.TXT and EZCRLMAN.INX are required for the on-line 
        manual.  So please make sure that these files are in your default 
        directory when running the program.

        If you have only one floppy drive, you can build a work diskette
        containing: EZCRL.EXE, EZCRLHLP.TXT, EZCRLHLP.INX, EZCRLMAN.TXT, 
        and EZCRLMAN.INX.  Do not copy EZCRL.CNF, if it exists. A new 
        EZCRL.CNF will be saved when you select options.

        2. If your EZ-Crypt Lite does not run properly:

        A. Delete the EZCRL.CNF file and try to run again.  Check out our 
        troubleshooting section near the end of this manual.

        B. Your machine may not be totally IBM PC operating system 
        compatible.  This is not always disastrous and a quick call to 
        our phone support staff may solve your problem.

        C. You may have a slightly incompatible "EGA" card with auto 
        switch features.  Usually, turning off autoswitch and forcing the 
        system into the EGA mode solves the problem.

        D. If you have any memory resident programs or system drivers, 
        try running without them loaded in your computer.  On some 
        computers, ANSI.SYS is suspect.  






                                        8








        3. If your monitor appears to be losing certain characters or 
        features, you may have a "color" system with a composite 
        monochrome (green, amber, LCD, etc.) monitor.  Adjust the 
        contrast and brightness of the monitor until the screen is 
        readable.  In some cases, you may have to go to the Install Menu 
        to chose acceptable "colors".  See the "Troubleshooting" section.

        4. This Manual is designed to give you a general overview and 
        familiarity with the program.  More complete, up-to-date 
        information is available to you through the context sensitive 
        help (F1) and the on-line manual.  When using the more advanced 
        features of the program, the help screens will guide you through 
        the toughest questions with ease.  As EZ-Crypt Lite continues to 
        add more features, you can be sure that the on-line manual and 
        context sensitive help will give you the guidance needed.  This 
        way everybody wins.  We don't spend money continually revising 
        manuals and charging you higher prices, and you get what you want 
        and deserve: accurate up-to-date information.  So fire up the 
        computer, dig in, and welcome to EZ-Crypt Lite!

        5. Note to advanced users:  To be able to run EZCRL from any point 
        on your hard disk, create a batch file called EZCRL.BAT and store 
        it in your path.  

        It should contain -->  C:\EZCRL\EZCRL.EXE C:\EZCRL\EZCRL.CNF

        This will enable you to run EZCRL from anywhere on your hard disk 
        with full context sensitive help and on-line manual.  Be sure to 
        install the help/manual path within EZCRL to be C:\EZCRL.




























                                        9








        GETTING STARTED
        ===============

        After you type EZCRL <<cr>> (Enter or Return), the opening screen 
        of EZ-Crypt Lite (EZCRL) will appear.  At the bottom of your EZCRL 
        opening screen you are instructed to press any key to continue. 
        The MAIN MENU will appear on your screen.

        The Main Menu options with descriptions are below.

        On-Line Manual: This is an on-line manual covering features of 
        EZ-Crypt Lite in more depth than the documentation available in 
        this manual. 

        Encrypt: Encode or hide the information within a file to make it 
        unreadable to anyone who doesn't have a special access code 
        called a key.  Just like you can't unlock a lock without a key, 
        you can't look at an encrypted file without the key.  You limit 
        the number of people who know the key, thereby limiting the 
        number of people who can access the intelligence within the file 
        even if they have access to the file.  A key is simply a 
        combination of letters and numbers.  They may or may not have any 
        conventional meaning.  For example, the letters xyz12345 could be 
        a key.

        Please note that we provide several methods of encryption and 
        decryption.  The methods are listed roughly in order of the level 
        of protection they provide for your data.  The more powerful the 
        method, the further down in the methods list it is.  EZ-Crypt 
        doesn't store the encryption method or the key you used to 
        encrypt the file.  If you forget this information for the 
        decryption process you can also forget your file.  This is the 
        nature of data protection.

        Decrypt: Decryption is the opposite of encryption.  You use a key 
        with the encrypted file to reverse the encryption process giving 
        you the file you started with.

        Analysis/Statistics:  Here you can "look" at any file to see how 
        the characters are distributed within the file.  Statistics are 
        provided to allow you to get a feel for the "goodness" of the 
        encryption process.  

        Install: The installation portion of EZ-Crypt Lite allows you to 
        customize the colors, directory defaults, and other options.

        Quit and exit to DOS: All good things must come to an end.  
        Choose this option if you want to leave EZ-Crypt Lite and return 
        to DOS.

        You may choose any of the displayed options by pressing the first 
        letter or by moving the light bar (the giant cursor) with your 
        cursor keys or space bar to the desired option and pressing 
        Return.  Please note that once you have a pulldown active, the 
        first letter selects options within the pulldown NOT the top EZ-


                                       10








        Crypt Lite main menu line.

        (If you have a "color" system with a composite monochrome monitor 
        and don't see a light bar or other features, try adjusting the 
        brightness or contrast of your monitor. You may also need to 
        install special colors for your system. See the Install Menu.)

        Now let's do something simple to demonstrate how EZ-Crypt Lite 
        works.

        Press E (Encrypt)

        Then press enter with the "pick from a menu" option highlighted.  
        Your screen should clear and you will be given a list of files to 
        encrypt.  Press enter with the first file highlighted.  Press 
        enter again on the next menu to accept the default name for the 
        encrypted file.

        You have just encrypted your first file.


        TUTORIAL (encrypting/decrypting a file)
        =======================================

        Now let's encrypt a file while using various options.  Don't 
        worry about being fancy or being intimidated; this first use is 
        only for practice.  We can get fancy later.

        From the Main Menu, highlight the encrypt section and press

        E

        (Encrypt) a file.  

        The encrypt pulldown will appear on the menu with the SelectMenu 
        option highlighted.  Steps are:

        1.  Press enter.  You will now be prompted for where the file is 
        located which is to be encrypted.  You are being asked for the 
        subdirectory name for its storage location. 

        2.  Press enter to accept the default directory.  A directory of 
        files will appear with the first filename highlighted.  

        3.  Press enter to use this file.  You will then see a window 
        listing multiple options for encryption method, key, and output 
        file.  Accept all the defaults by pressing enter.  Note:  
        Pressing enter on the destination filename is the signal that you 
        are done editing the options.

        4.  A file will now be written in encrypted form using the 
        default key (probably Unknown) and the default filename show.  
        The file to be encrypted is broken into small blocks which can be 
        easily handled and then encrypted.  You will see the block number 
        increase as each block is processed.  Press any key to return to 


                                       11








        the main menu after it finishes.

        From the Main Menu, highlight the decrypt section and press

        D 

        (Decrypt) a file.
         
        To decrypt a file you reverse the process for encrypting a file.  
        You first select the file you just encrypted using the same steps 
        as for encryption.  Don't change the encryption method or key!  
        Specify a output file name as appropriate.  It's that simple.













































                                       12








        ADDITIONAL FEATURES
        ===================

        COLOR CONTROL

        For users with color monitors, the color option in the Install 
        menu gives you total color control of text, background, borders, 
        highlighted areas, etc.  Just press C from the install menu.


        Troubleshooting
        ===============

        Displays

        If, after loading EZ-Crypt Lite, you see text and no borders, or 
        nothing at all, you may have a compatibility problem.  EZCRL uses 
        high speed screen updates which may cause a problem with some 
        not-too-close IBM PC operating system compatibles.  For example, 
        the Tandy 2000 and Sanyo 555 series computers are not compatible 
        with EZCRL.

        IBM type monochrome (MDA), color (CGA), EGA (enhanced graphic), 
        and VGA (video graphics array) adapters are known to work with 
        EZ-Crypt Lite.  If you are using a compatible color video card 
        with a green or amber screen, or LCD monitor, you may need to 
        adjust your brightness and contrast, or Install other "colors" 
        from the color installation screen.  Also see the BWVIDEO.DOC 
        file.  BWVIDEO.COM is a "color killer" that works especially well 
        with composite monochrome monitors, and lap top computers with 
        LCD monitors.  Sometimes executing the DOS "MODE BW80" command 
        works.

        Some "autoswitch" Enhanced Graphic Adapters and "Hercules" type 
        mono-graphics cards may need to have their auto modes disabled 
        for proper operation.

        If EZ-Crypt Lite will not run, you may have insufficient memory, 
        or too many memory resident programs.  Try running EZCRL with no 
        memory resident programs.

        If EZ-Crypt Lite just stops running or "freezes", you may have 
        removed the program diskette from the disk drive.  The program 
        disk must be available to access the context sensitive help and 
        on-line manual.  Of course, if EZCRL.EXE and its support files are 
        on your hard drive, this will probably not be a problem.

        Occasionally, certain memory resident, TSR, or "pop-up" programs 
        conflict with EZ-Crypt Lite.  In general, there is no problem, 
        but there are many new programs being written without regard to 
        the system requirements of EZCRL.  Remove them from memory, and 
        try again. If that fails, try getting rid of device drivers in 
        your CONFIG.SYS file.  ANSI.SYS is a prime suspect for some not-
        so-compatibles.



                                       13








        The latest information on monitors and displays may be put on a 
        distribution diskette (see Disk #1) in a file called 
        MONITORS.DOC.  To print this information on your printer, just 
        make sure the file is in the default directory and type COPY 
        MONITORS.DOC PRN <<cr>>.


        Miscellaneous

        EZ-Crypt Lite works closely with your computer's hardware to 
        gain much of its speed.  However, it never directly addresses 
        the hardware without using standard DOS calls.  If you have any 
        memory resident software that modifies the way DOS works, then 
        EZ-Crypt Lite may not function properly.  We strongly recommend 
        that you remove all memory resident software before running EZCRL!










































                                       14








        Basic Definitions:
        ==================

        The terms used in EZ-Crypt Lite may be a little confusing.  These 
        terms are not made up, they are frequently used when discussing 
        cryptography.  We have tried to pick a handful of the most 
        important terms and define them for you.  They are:

        Cryptography -- The general study of hiding the meaning of 
        messages and the general techniques used for the hiding.
          
        Cryptanalysis -- The solving or breaking of codes without any 
        knowledge of the key.

        Cipher -- Any technique,  method,  or scheme (substitution, 
        transposition, and XOR) used to encrypt and decrypt text,  
        without regard to its linguist structure.

        Plaintext -- The unencrypted or totally decrypted readable text.

        Cyphertext -- The unintelligible text, after encrypting it.

        Encrypting -- The process of encoding a plaintext file to hide 
        the intelligence.

        Decrypting -- Decoding an encrypted/ciphertext file.

        Key -- The text that was used to encrypt or decrypt a file.   
        Sometimes called a code word.  Keys can be simple everyday words 
        or very complex combinations of characters that have no meaning.  
        Some electronic information services pick your password by 
        combining two regular words with a character between them.  
        Examples keys: abc1234, Never:Again, and alsdkfqiaef. 

        Substitution encipherment -- Replaces each letter of the original 
        message by another.

        Transposition encipherment -- Rearranges  the position  of  each 
        letter of the original message, but doesn't change their 
        identities.

        XOR -- Exclusive or, an arithmetic based encryption technique 
        working at the bit level on characters.














                                       15








        Encrypted Ramblings  - Some Good Information
        ============================================ 

        As networks proliferate the need for data security increases.  
        The world in the past has largely depended on physical security, 
        that is safes and locks.  Computers, much to the bureaucrats 
        consternation, are rapidly eroding the possibility of physical 
        security (wherever a modem is connected to a phone line).  Laws 
        will be passed, but in the final result, honesty depends on good 
        locks and all the ministrations of legislators  and bureaucrats 
        will come have little positive effect on security.  Human nature 
        will win out.  The easier it is to get, the more likely it is to 
        be stolen.  Encryption provides part of the answer to the need 
        for increased security.  It will be especially useful in systems 
        that are open to all users but have some confidential data.  
        Instead of complex levels of users verification through 
        passwords, everyone can get the file but only the people with the 
        key can decode the information.  Encryption at its present state 
        is cumbersome and time consuming but, faster computers and better 
        programs can ease this problem.  This is where EZ-Crypt Lite 
        comes to the rescue.

        Encryption if nothing else is a fascinating exercise.  EZ-Crypt 
        Lite implements a version of Vernham's machine developed at Bell 
        labs in the 20's.  The original machine used Baudot code on the 
        Teletype and performed an exclusive or (XOR) on each character of 
        the message and the key to produce the encrypted character.  The 
        message was decoded by the same machine in the same manner.  The 
        method is considered unbreakable if two conditions are met.  
        First the key is longer than the message and second the key is 
        only used once, sometimes called a "one time pad."  Typically the 
        files you will be encrypting are much longer than the your key
        (also much longer than the one we build from your key) thereby 
        weakening the encryption.  

        Distribution and maintenance of keys is unworkable in the day to 
        day operation of any communications operation of any size.  EZ-
        Crypt Lite builds a much more complex key from your simple key, 
        in an effort to provide a method to ease this problem.  It 
        creates a one time pad based on your unique key.  Most random 
        keys are not truly random since all random functions are 
        repeatable and their true randomness is somewhat suspect.  What 
        is the solution?  Always the specter of a bigger and faster 
        computers loom in the future to provide even faster encryption.  
        Thinkers build on the best thoughts of those preceding them.  
        More powerful computers and better encryption techniques will 
        eventually provide a good solution to this problem. 

        EZ-Crypt Lite provides encryption methods that range from the 
        very simple to the complex.  Combinations of these encryption 
        methods are supported.  This further complicates the process of 
        breaking the code.

        In our implementation two compromises were made.  Potentially 
        the most dangerous compromise is allowing you to store a set of 


                                       16








        default keys in a configuration file.  So be careful about 
        allowing access to this configuration file (called EZCRL.CNF).  
        Another compromise was in using a relatively simple exclusive or 
        method used in the simpler encryption techniques.  Use the higher 
        numbered methods for more protection.

        How do you select a good key?  Several things should be 
        considered.  The key should not have a lot of repeating 
        characters, if they have any pattern to the eye they should not 
        be used.  The keys should be kept secure.

        If there is any question of the randomness of the encrypted file, 
        EZ-Crypt Lite could be used on it multiple times using different 
        keys.  The true randomness of the key should not matter since the 
        use of more than one key should make unraveling very difficult if 
        not impossible.  This process could be repeated until the 
        paranoia of the person generating the keys was satisfied.  








































                                       17








                              ORDERING INFORMATION
                              ====================
        Mail Order To:                    Information/Customer Service:
                                            1-713-280-9900
        EZX Publishing                    VISA/MasterCard/AMEX Orders Only:
        P.O. Box 58177                    1-800-US-EASY-X ext. v100
        Webster, TX 77598  USA            (1-800-873-2799)

        QUANTITY                    DESCRIPTION                         AMOUNT
        ----------------------------------------------------------------------

        ___ EZ-CRYPT LITE Version 1.0 Registration........ @ $ 39 ea  $ ______
            (includes registration, printed manual, telephone 
            support, and update notices)

        ___ EZ-FORMS EXECUTIVE Ver. 2.2 Registration...... @ $119 ea  $ ______
            (includes registration, printed manual, 100+ forms,
            telephone support, and update notices)

        ___ EZ-SPREADSHEET Ver. S22. Become a Spreadsheet .@ $ 49 ea. $ ______
            pro in only 20 minutes!  Only $29 with purchase of other products.

        ___ EZ-COPY LITE Version 1.3 Registration..........@ $ 39 ea  $ ______
            (includes printed manual, telephone support, and update notices)

        ___ EZ-COPY PLUS - Full support for 3 1/2" diskettes plus paging 
            to hard disk and extended/expanded memory support. @ $ 199 $ _____

        Registration is for each computer or workstation.
                                                              Subtotal   _____
        PACKAGING AND HANDLING:
        Add $5 in the USA-48.
        (Add $10 for 2nd business day, or $20 for next day, USA-48)
        (AK, HI, PR, VI, Canada, add $10. $20 all other foreign)    ______
        (3.5 inch diskettes, add $5.00 per copy, $10 EZFX)          ______
        (Texas residents please add 8% sales tax)             Tax   ______

                                                                Total $ ______
        Payment by:( ) Check ( ) MC ( ) VISA ( ) AM EXP ( ) PO #______

           Name: ____________________________________________________________

        Company:_____________________________________________________________

        Address: ____________________________________________________________

               : ____________________________________________________________

        Day Phone: _________________________ Eve: ___________________________

        CARD #: __________________________________ EXP DATE _________________

        Signature of Card Holder Only: ______________________________________

                  THANK YOU FOR YOUR ORDER AND PROMPT PAYMENT.


                                       18






```
{% endraw %}

## EZCRLHLP.TXT

{% raw %}
```
#1#


                                EZ-Crypt Lite
                              by EZX Publishing


  EZ-Crypt Lite was written by David Black and Perry Kelley.

  EZ-Crypt Lite provides multiple methods for encryption and decryption plus
  tools to help you analyze the encrypted code.  Comments or suggestions for
  improving EZ-Crypt Lite will be appreciated.
     
  EZ-Crypt Lite requires an  IBM PC or compatible with 384K of RAM.  Display
  adapters  known  to work with EZ-Crypt Lite are the  IBM monochrome (MDA),
  color (CGA),  enhanced  graphics (EGA),  and  video  graphics  array (VGA)
  adapters.
#5#

  You are currently using the EZ-Crypt Lite On-Line Manual.

  Normal commands:
  ════════════════
  Escape -- Escape from the on-line manual.
  Home -- First page of the on-line manual.
  End -- Last page of the on-line manual.
  PgUp -- Previous page (will wrap from first page to last page).
  PgDn -- Next page (will wrap from last page to first page).
  Any key -- Proceed  thru  the  manual  one page at a  time,  exit  on-line
             manual after the last page.


  Possible errors:
  ════════════════
  1. No manual screen defined for your selected area.
  2. Couldn't find EZCRLMAN.TXT.  Are both the manual (EZCRLMAN.TXT) and the
     index   (EZCRLMAN.INX)  in   the   subdirectory   specified  under  the
     installation portion of EZ-Crypt?    Use  the installation  portion  of
     EZ-Crypt Lite to set up a new default help/manual path.
#20#

  General help for all menus:
  
  This menu is broken up into two basic windows.   The  window  at  the  top
  of  your screen shows several options to choose from.   The window at  the
  bottom  of  the  screen expands on what  will  occur  if  you  choose  the
  highlighted option (the one that has a different background color).
     
  Options may be selected in one of two ways.   You  can  either  press  the
  first letter of the desired command  or  move the highlight bar  over  the
  desired option and press enter.   To move the  highlight  bar  use  either
  the space bar, up arrow, down arrow, left arrow, or right arrow.   You can
  also use home to move to the first top line item on the menu.

  Using the first letter of a command only works in the  ACTIVE  window.  If
  you  don't have any pulldown then the active window  is  the  top  window.
  Once you pulldown one of the options that becomes the active window.   You
  must use one of the commands in the pulldown once it is active.    You can
  always  use Escape to back out of the pulldown and return to the top menu.
#21#

  You  are  now  using  the EZ-Crypt Lite  Main Menu.   From  here  you  can
  access  the main functional  areas  of EZ-Crypt.   Refer  to  the  On-Line
  Manual to get a feel for what a fully featured diskette duplicator can do.

  Please note that an abbreviated directory window will appear in the middle
  of your screen as soon as a valid source diskette has been loaded. It will
  show the diskette volume label (if any) and the first four file names.

  We have tried to design EZ-Crypt to let you get your job done quickly  and
  easily.  Please feel free to forward any suggestions for improvement to us
  at EZX Publishing, Attn: EZ-Crypt Lite Author.
#50#

  This  option  allows  you to  define the default  path for  accessing  the
  on-line manual and context sensitive help.   Make  sure  you  include  the
  index files  (.INX)  along with the help and manual  files  (.TXT) in  the
  specified directory.

#55#

  This option allows you to enable/disable the sound  or  beeps  on  errors.
  Some  people  find  programs  that beep on errors to  be annoying  (me for
  one).   This option  will  allow you  to  disable  ALL  warning  beeps  in
  EZ-Crypt Lite.

#60#
   
  This menu allows you to change all the colors used in  EZ-Crypt Lite.   To
  change a default color - first use the up or down arrow key to select  the
  color, then type in the new color.   When you have changed all the  colors
  press Ctrl+D to display these colors in a  sample  window.   As  with  all
  installation options,  these changes will not be used until you choose the
  retain option on the main menu.   This allows you to experiment  with  the
  installation options  and  then  not have to lose your original  defaults.
   
  Please  keep  in  mind  the  foreground  text  colors  can  be  0-15,  the
  background 0-7. If you choose a text color the same as a background  color
  then the text will disappear.  You may notice some of your installed color
  combinations  result  in  invisible lines  on  the  Ctrl+D  popup  window.
  Please be careful not to choose this color for one of your text colors!!

  Note:  For  many of the EZ-Crypt installable options and  user inputs  you
  will  see a prompt containing the characters  .   If  you  count  the
  number of 's you will find the maximum number of characters that  can  be
  entered.  Also Escape is used throughout EZ-Crypt to signal  "I want out".
  Press Enter, up arrow, down arrow, or whatever is  asked for to enter  the
  desired value.   Escape  will  throw away any  immediate changes  and  get
  you out of the area you are in.
#61#

  Please  note  that  the background color (0-7) is one digit long  and  the
  foreground color (0-15) is two digits long.   That is why you will see the
  input  prompt  (the  s) change it's  width as you go between the  colors.

#65#

  This screen shows the possible combinations of  colors in  EZ-Crypt  Lite.

  If you are using a non IBM display adapter you may have to "play" with the
  colors to get a pleasing combination.   EZ-Crypt  defaults to colors  that
  work  well  with the  IBM Color Graphics Adapter,  IBM  Enhanced  Graphics
  Adapter, and IBM Monochrome Display Adapter.

  On  some  monochrome  display  adapter  clones  you  may  need  to alter a
  foreground text color to get the background to change intensity.

  The default combination of colors will work on any 100% IBM PC  compatible
  display adapter!

#70#

  EZ-Crypt Lite  allows the help and manual paths, program colors,  etc.  to
  be saved in a configuration file.   If no configuration file is  specified
  on the command line (ex. C:>EZCRL MyConfg.CNF) when you call  up  EZ-Crypt
  then EZ-Crypt will use the default name of EZCRL.CNF.

  You are being asked for the name of the configuration file to  load.   You
  may have several configuration files saved under different names.

  Example:   BW.CNF (for black and white composite monitors  attached  to  a
  composite color card), etc.

  Please make sure that the  configuration file you are  asking EZ-Crypt  to
  use is really an EZ-Crypt configuration file!

  Remember you can always press ESC if you got into this area by accident.

#75#

  EZ-Crypt Lite allows the default help/manual paths, program colors, etc to
  be saved in a configuration file.   If no configuration file is  specified
  on the command line (ex. C:>EZCRL MyConfg.CNF) when you call  up  EZ-Crypt
  then EZ-Crypt will use the default name of EZCRL.CNF.

  You are being asked for the name of the configuration file to save all the
  program defaults to.  You may have several configuration files saved under
  different names.

  Examples:  BW.CNF  (for black and white composite monitors attached  to  a
  composite color card), etc.

  Please  remember  you can always press ESC  if you got into this  area  by
  accident.
#80#

  EZ-Crypt Lite is looking for a valid file name with an optional drive  and
  directory path.


  Example: C:\EZCRL\FileName.EXT
           │││     ││          │
           ╞╛╞═════╛╘══════════╧═ The file you want to use
           │ ╘═══════════════════ The working directory
           ╘═════════════════════ The working drive
           
    

  Refer to your Disk Operating System (DOS) manual for detailed  information
  on paths and file names.

#85#

  EZ-Crypt Lite  couldn't  locate  any  files  in  the  specified directory.

  The computer uses a "mask" for  directories.   The  mask  used  is  "*.*".
  EZ-Crypt Lite automatically adds this mask to the path for you.
#90#

  EZ-Crypt Lite couldn't locate your path.   Are you sure  you  entered  the
  correct path  to get to your file.   Computers are dumb, you have  to tell
  them everything.

  Try  using  the select file option on the main menu.   EZ-Crypt Lite  will
  find  all  the files in your specified directory and allow you  to  use  a
  color bar to select the file.
#95#

  Your floppy or hard disk is used to store files.   Many times,  files will
  be  organized   into  groups  and  stored   in   specific   areas   called
  subdirectories.   The  computer  needs to  be given  a location  called  a
  directory, to find the files.

  The  computer's  first  "guess" on where to find  the files will  be  your
  current default subdirectory (unless you install a default path under  the
  installation section).  Most of the time this will be what you want.

  If in doubt, press enter!   The files are probably located in the  current
  directory which is normally the default.

  A more technical description follows on the next help page.
  
#96#

  This area allows you to specify the path EZ-Crypt Lite will use  to access
  your files.  You can access files anywhere on your system.

  Example: C:\EZCRL
           │││    │
           ╞╛╞════╛
           │ ╘═════════ The working directory
           ╘═══════════ The working drive

  EZ-Crypt Lite will ask the  computer to tell it all the files on drive  C:
  in  the  subdirectory  \EZCRL.  The "mask"  used to get the  directory  is
  C:\EZCRL\*.*.   If there are no files in the directory you  specified  you
  may see the error message that says "Could not find C:\EZCRL\*.*".

  If you are not sure what you should use just press enter without  changing
  any of the information.   Chances  are that the default is what  you  want
  (that is why we made it the default).

  Refer to your Disk Operating System (DOS) manual for detailed  information
  on paths and file names.
#100#

  EZ-Crypt Lite will store up to 10 keys within  its  configuration file for
  easy access by you  (or someone else with access to your computer).   This
  feature  makes it  easy  for you to remember keys but should be used  with
  caution.   The keys you specify here can be selected during the encryption
  or decryption process using a menu.   Be careful of who is allowed  access
  to your computer if you use this option.   The  best encryption method  in
  the world won't protect your data if you give away the key!

  What is a key?  It is a special access code used to make a file unreadable
  to anyone who doesn't have the access code.   Just like you can't unlock a
  lock without a key,  you can't look at an encrypted file without the  key.
  You  limit the number of people  who know the key,  thereby  limiting  the
  number of people who can access the intelligence within the  file  even if
  they have access to the file. A key is simply a combination of letters and
  numbers.  They may or may not have any conventional meaning.  For example,
  the letters xyz12345 could be a key.  More keys: never-again, paeirj, etc.

  Keys may consist of letters, numbers, spaces, etc.   Try to come up with a
  key that is unique.   Don't use your name, social security number,  or any
  other item  that someone could easily guess after gathering a few of  your
  personal statistics.
#110#

  The name you are trying to save the new file to already exists.   EZ-Crypt
  is asking if you would like to use the name anyways.  In that case the old
  file will be overwritten by the new file.   You  will  lose  the old  file
  forever.

  If you answer no to  -- OK to erase (Y/N)? --  EZ-Crypt  will allow you to
  enter a new name and will try again using the new name.

#150#

  EZ-Crypt Lite  breaks  up big files into smaller blocks for the encryption
  or decryption process.  This window gives you the status of the operation.
  You will see the block number increase as more of your file is  processed.

  If an error occurs you will be given a message concerning the problem.   A
  couple of the possible errors are:

  1.  EZ-Crypt couldn't find your input file.   Please recheck the filename.
  2.  EZ-Crypt couldn't create your output file.   Is  your  diskette  write
      protected?  Is the disk full?

  After the entire file has been processed (encrypted or decrypted) you will
  be asked  to  press any key to continue.   The  last block processed  will
  normally be only a portion of a block just to finish off the last  portion
  of the file.

#200#

  Help for Directory Screen: To edit a file use the up or down arrows on the
  numeric keypad to highlight a file name and then press enter.
     
  All  files  in  the  directory listing are sorted.   EZ-Crypt   Lite   can
  handle a directory containing up to 500 files. If you have more files than
  that in a SINGLE directory then  please  break  the directory into smaller
  ones before running EZ-Crypt Lite.
     
  Cursor key movements:

  Up Arrow - Move up one file.
  Down Arrow - Move down one file.

  PgUp - Move up one page of files.
  PgDn - Move down one page of files.

  Ctrl+Home - Move to the first file in the directory.
  Ctrl+End - Move to the last file in the directory.

  Use Enter to select the highlighted file and start operations using it.
#205#

  EZ-Crypt Lite will sort the directory you are viewing based on the "field"
  you select.  It may be:

  1.  The name of the files.
  2.  The date the files were last modified.
  3.  The size of the files.
  4.  You may also choose the direction of the sort.  Forwards or backwards.


  NOTE:  Do NOT delete files and then use the sort option.   Once you delete
         a file, it's information is removed from the directory listing  and
         you  will  be sorting the  "Deleted"  message  instead of the  real
         information.   This  also applies when you press a key  during  the
         file directory to abbreviate the listing.

#210#

  EZ-Crypt provides a secure delete command called file wipe.   The  file is
  overwritten first with the binary pattern 10101010 then with  the  pattern
  01010101 followed by the default pattern for a freshly formatted diskette.
  This process is repeated three times before the file is  finally  deleted.

  The  military  typically accepts three overwrites of alternating ones  and
  zeros as a secure method of completely erasing a file.   That is  why this
  method was chosen.

  During the wipe process each byte in the file will be overwritten a  total
  of nine times.  This process will be slow for large files and when used on
  a floppy based system.

#300#

  IBM ASCII characters range in value from decimal 0 (00 hex) to decimal 255
  (FF hex).  Please note that the numbers displayed on the screen are scaled
  to allow them to fit into a limited space.  The scale is displayed on  the
  window border at the top of the screen and will vary depending on the size
  of the file being used.

  This screen gives you detailed statistics on both  the number  of times  a
  character  occurred  in a file  and  some frequently  used  yardsticks  to
  measure the quality of the character distribution.  Some  definitions  for
  the terms used to describe the data:

  Mode - That value which is repeated most often in a  data set.   When  you
         look at the statistics  you  will see the number of occurrences for
         each value within the file.   The number with the largest value  is
         the mode.

  Median - Middlemost or most central item in a set of numbers.  Half of the
           numbers lie above this point,  and the other half  lie  below it.

#301#

  Mean - Basically the arithmatic average.  Add all the values and divide by
         the number of values.   We commonly refer to this as the average of
         a set of numbers.

  Std Dev - The standard deviation is a measure of how the characters in the
            file deviate from the  central value  of the  distribution  (the
            mean).   This number  characterizes  the  width  or  variability
            around the mean.   If you assume a normal distribution, then 60%
            of the data will fall within one standard deviation of the mean.

#302#
  Listed below are the viewable versions  of the ASCII characters  (at least
  those  that  could be displayed on your screen from within this  program).
  This is an IBM ASCII table numbered in hex.  The vertical axis is in steps
  of 10 hex (16 decimal),  the horizontal axis counts up by 1 from the step.

        0   1   2   3   4   5   6   7   8   9   A   B   C   D   E   F
   00                                          
      
   10                                 
```
{% endraw %}

## EZCRLMAN.TXT

{% raw %}
```
#50#
  Quick startup info:

  EZ-Crypt Lite  allows  you  to  encrypt and decrypt files.   This means it
  allows  you  to limit the distribution  of your important information to a
  restricted group of people.   EZ-Crypt Lite  will  give you the ability to
  make your important information unintelligible  to  those who don't have a
  "need to know".   ONLY  those with the correct decryption  key  can access
  your important data.

  EZ-Crypt Lite provides four methods for privacy of communication.   First,
  the simple or fast operation which is basically an exclusive or. Second, a
  form of substitution.   Third, a form of transposition.   Fourth, a slower
  combination of substitution and transposition. EZ-Crypt Lite also performs
  analysis on your data which can be used to check your encrypted output.

  Some people  are  interested  in  determining  what a message said.  Those
  people can use the analysis capability to determine what form of cypher as
  well as try to break the key of an encrypted message. Efforts at reading a
  secret message is called cryptanalysis.

  Refer to other sections of the On-Line Manual for additional  information.
  F1  is always available to call up help while you are using EZ-Crypt Lite.
#51#

                       ┌──────────────────────────┐
                       │ Commonly Asked Questions │
                       └──────────────────────────┘

  1. Does  EZ-Crypt Lite (EZCRL) allow me  to send software  thru  the  mail
     without  worrying about unauthorized people getting access to it?  Yes!
     Both  you  and  the person  you are sending the files to need a copy of
     EZ-Crypt Lite and the common shared key.  Before sending the files thru
     the mail, encrypt them using the highest encryption method in  EZ-Crypt
     Lite (this provides the maximum protection).  At the receiving end they
     will decrypt the file using the same method and the common key.

  2. Can  I  be sure that no one will ever be able to  "read"  my  encrypted
     data?   No!   All  that you can do is make it  extremely difficult  for
     anyone to have access to your data.   Your goal  should  be to make  it
     more costly  for  someone  to gain access to your data than the data is
     worth.   EZ-Crypt's  encryption methods  can be broken  but  it is very
     costly to break the higher encryption methods within EZ-Crypt.  It will
     cost someone hundreds or thousands of  hours of manpower  and  computer
     time to "crack" the  higher  encryption methods that EZ-Crypt provides.
#100#

  EZ-Crypt Lite requires an IBM PC or close compatible with at least 384K of
  RAM and DOS 3.0 or later.   A hard disk is not required but is recommended
  when  encrypting/decrypting  large files because of the much  faster  disk
  access.

  EZ-Crypt Lite  provides  several  encryption/decryption methods for you to
  choose  from.   We  are  not  trying  to confuse you  with  extra choices.
  Depending on the type of data you are working with a simple  but very fast
  method may be all you need.   As your need for more  protection  increases
  you can use the slower but safer encryption routines we provide.

#200#
  The use  of  coded messages for secret communications has been  a practice
  throughout history.   Julius Ceasar sent coded messages to his general  to
  ensure the  messages couldn't be read  if  they  fell  into  enemy  hands.
  George  Washington,  during  the  Amercian  Revolution,  passed  important
  information about the British forces in coded form. Today, the US Military
  and  many large corporations  pass important information  in  a  coded  or
  encrypted form.

  The ability to communicate is very important.  But there will be occasions 
  when you may want to limit your information. To limit the number of people
  who can read your important information,  EZ-Crypt Lite  will encrypt  and
  decrypt your files.   You can store or transmit those files to communicate
  and still keep your information unintelligible to others.

  Some individuals may be interested in determining  what your message said.
  If this individual  obtains a copy of  your  encrypted  message,  he  will
  attempt to determine what your message said.   Your message  is considered
  safe as long as it will take too long to unravel the message, for it to be
  useful to the other person.

  Some of the fundamental understanding of basic cryptanalytic endeavor,  is
  taken up in the manual.
#201#

  Some basic definitions follow:

  Cryptography -- The general study  of  hiding the meaning  of messages and
  the general techniques used for the hiding.
  
  Cryptanalysis -- The solving or breaking of codes without any knowledge of
  the key.

  Cipher -- Any technique,  method,  or scheme (substitution, transposition,
  and XOR) used to encrypt and decrypt text,  without regard to its linguist
  structure.

  Plaintext -- The unencrypted or totally decrypted readable text.

  Cyphertext -- The unintelligible text, after encrypting it.

  Encrypting -- The  process  of  encoding  a  plaintext  file to  hide  the
  intelligence.

  Decrypting -- Decoding an encrypted/ciphertext file.
#202#

  Some more basic definitions follow:

  Key -- The text  that  was used to encrypt or decrypt  a file.   Sometimes
  called a code word.

  Substitution encipherment -- Replaces each letter of the  original message
  by another.

  Transposition encipherment -- Rearranges  the position  of  each letter of
  the original message, but doesn't change their identities.

  XOR -- Exclusive or, an arithmetic encryption technique working at the bit
  level on characters.

#300#

                           HISTORY OF REVISIONS:
                           ═════════════════════

  EZ-Crypt Lite ver 1.0    Initial  release.   Provided  several  encryption
  May 1989                 decryption methods  along with a  statistics area
                           to  let  you  analyze  the   encrypted  text  for
                           frequency distribution.

  EZ-Crypt Lite ver 1.1    Enhanced the directory  to add  sorting based  on
  June 1989                any field plus a secure file wipe option. Several
                           other additional enhancements.


#500#

  GENERAL:
  ════════

  1.  EZ-Crypt was developed by David Black and Perry Kelley.
  2.  Special thanks to all of our Beta testers.
  3.  EZ-Crypt Lite  was written in C  and uses  the  Professional C Windows
      described below.  The source for EZ-Crypt Lite consists of about 5,000
      lines of code.
  4.  Special thanks to  Jim Nech  at  SSS  for  his excellent  C & Assembly
      language windowing package (Professional C Windows)  used in  EZ-Crypt
      Lite.   It  comes  with complete source code and is  only  $89.   This
      package is a must for software developers  (info/orders 713-943-8060).

#900#

  EZX Publishing
  Publishers of the EZ Series
  P.O. Box 58177, Suite 1777
  Webster, TX 77598 USA

  Telephone: 713-280-9900   EZ-HOST BBS!    713-280-8180   (1200/2400,N,8,1)
                        (Customer support plus extras for registered users!)

  EZX Publishing Presents....

  EZ-FORMS LITE (tm)  Great price,  Less bytes than EZFX!   Never be without
  the perfect form with the PREMIER forms processor!   Create/Fill-in/Print/
  Revise all kinds of forms.  And,  when you have the perfect form,  print a
  perfect master for your copier or local printer.   Or,  leave  the  master
  form on screen, fill in your data, and print the perfect form, error free.
  In just a snap! Your filled-in form can be automatically stored, each with
  its own control number.   Its like having an electronic filing cabinet for
  perfect audit control.  You can make solid borders, lines,  shades,  combs
  and numerous graphics with just a few key strokes. In fact, you can create
  the  perfect custom form  faster  than  your  local  typesetter  can  say,
  OVERCHARGE!    *** Continued on the next page ***
#901#

  Clear Forms Overlay is great for pre-printed forms.   Just enter your data
  in the available spaces on the master form while previewing the results on
  screen.   It prints perfectly!   No more goof-ups  and  wastage  of  those
  expensive  multi-part forms.   Speeds processing too.   Features  include:
  auto-time/date/sequence  numbering;  block cut/paste/copy;  import/export;
  forms up to 130 columns by 86 lines.   Operates  on  IBM family  and close
  compatible computers.  DOS 2.1+, 384K RAM and 1 floppy required.  Complete
  printer drivers included.   Supports most printers including Epson/IBM and
  compatible printers;  also the HP-LaserJet and compatibles ("Y" cartridge;
  other fonts may vary see soft font pack below).   Over 90  user modifiable
  forms  also  included.   Additional  new  features  include:   slick  user
  interface with moving bar  "pull-down"  menus and on-line help;  annotated
  forms directory;  "LQ"  24 pin dot matrix  and  integrated  Laser  printer
  support  (see optional laser Font pack below);  bolding  and  underlining;
  printed user guide and 90+ basic forms pack included.

  ...Only $59 (Extra forms packs... see below.)  Add shipping to all prices.

#902#

  EZ-FORMS EXECUTIVE (tm)   "The Ultimate Forms Generator and Manager".   In
  addition to all the features of EZ-FORMS LITE, add:  moving-bar menus with
  over 175 screens of on-line help, a comprehensive printed manual/tutorial,
  Math  (add,  subtract,  multiply,  divide,  column/row addition);   Macros
  (keystroke record/playback makes form fill-out a breeze);  ASCII data file
  merge,  auto date,  time,  increment numbering,  multi-character  drawing,
  fill-in  and  file,  clear forms  overlay  (for pre-printed forms);  chain
  (multi-page forms)  and  multi-copy printing;  handles  forms  up  to  248
  columns by 132 lines.   Enhanced printer support  includes  extensive user
  modifiable printer attributes and embedded characters,  also double/single
  block/shade  character  line  drawing  and  any  character  "drag"  modes,
  italics, superscript, subscript,  double wide, bold, underline,  etc.  for
  properly equipped printers.   Laser Printer  (HP and compatibles)  support
  includes auto font downloading, graphics emulation and custom font support
  see optional font disk below.   "LQ" 24 pin. as well as,  9 pin dot matrix
  printers are also fully supported.    *** Continued on the next page ***

#903#
  Other features include:   Free form data searches,  form tag  and  search,
  just like a free form database.  Plus file encryption; file compression to
  save valuable disk space; description annotation; increment number counter
  (different number on each form) printing; auto-tab/fill-in and file (makes
  filling out pre-printed forms a snap);  field markers (lock out designated
  areas);  vertical typing; word-wrap,  centering,  justification;  cut  and
  paste; graphics "walk-around" mode and fully customizeable printer driver.
  Operates on IBM family and close compatible computers.  DOS 2.1 or higher,
  640K RAM and 2 floppy drives are required, hard drive recommended.    101+
  pre-designed  and  user  modifiable  forms  (Basic  Forms  Pack)  plus   a
  comprehensive printed user guide are included.

  New features for EZ-Forms Executive version 2.2

  Enhanced HP LaserJet support:  10  fonts  and  15  print macros  per  form
  -  unlimited switching within the form.  Shading, landscape, print macros,
  multiple fonts, plus much more!  Requires Optional Laser Font Support Pack
  v2.0 or greater for full support.   (Ver 2.0 - Available for only $99+S&H.
  Includes portrait  and  landscape fonts - 6, 9, 12, 15, 18, 21, 24, 27, 30
  point in 3 type faces.)
  Expanded math functions:  Financial calculations, larger values, and more!
  ...Only $119 plus s/h (Extra forms packs and laser fonts ... see below.)
#904#

  FORMS PACKS

  Basic Forms Pack (101+ of all types of forms), ... Only $39
                   (Usually included with EZFX or EZFL)

  Forms Pack "A" (General Business): 68+ forms, ...Only $29
  Forms Pack "B" (Sales and Marketing): 56+ forms, ...Only $29
  Forms Pack "C" (Management and Personnel): 33+ forms,...Only $19
  Forms Pack "D" (Technical): 47+ forms, ...Only $24
  Forms Pack "E" (Home and Personal): 27+ forms, ...Only $15
  Forms Pack "F" (Contracts): 22+ forms, ... Only $15
  Forms Pack "G" (Property Management): 40+ forms, ... Only $24
  Forms Pack "H" (Home/Office Records): 60+ forms, ... Only $15
  Forms Pack "I" (Construction Related): 70+ forms, ... Only $29
  Forms Pack "J" (Genealogy Related): 60+ forms, ... Only $15

  Forms Combo Pack (Over 400 forms.  Includes forms packs A through J listed
  above): Only $79 with EZFX or $99 with EZFL (a $200+ value).  ($119+S&H if
  purchased alone.)

#905#

  Laser Font Support Pack v1.2 for EZFL  Ten downloadable soft fonts for the
  HP LaserJet Plus,  Series II  and compatibles.   Includes 5 portrait and 5
  landscape fonts in  "LINE PRINTER BOLD".  10, 11, 12, 15 and 17  pitch are
  represented.   These fonts are integrated with EZFL and  include  the line
  drawing, block, shade, etc. graphics characters not normally included with
  other soft fonts.  Includes full documentation and download utilities.

  ... $49 plus s&h (ONLY $39 with the purchase of EZFL)

  Laser Font Support Pack v2.0 for EZFX   Requires EZ-Forms Executive v2.2+!
  Provides  100+ fonts  to  support landscape and portrait,  normal and bold
  text, 6 and 8 lpi,  10 and 17 cpi,  plus text ranging in size from 6 point
  to 30 point in increments of 3 points.   Also provided  are  100+  graphic
  images with software  to  easily convert to print macros for  printing  on
  your form. Useful as logos and signatures or just to add a special graphic
  touch  to your form.   The  larger  fonts are especially useful  in making
  slides for presentations!   All fonts support the entire  line drawing and
  graphic character set. Logo/RLE Editor/Creator included. (Scanning service
  available soon.  Write or call (713) 280-9900 for details.)

  ... $99+s&h (ONLY $79 when purchased with EZFX).  $109 for 3.5" disk.
#906#
  EZ-SPREADSHEET (tm)  "THE ULTIMATE SPREADSHEET"   You  too  can  become  a
  spreadsheet pro in 20 minutes or less!   EZ-SPREADSHEET won't confuse you,
  try your patience,  or  force you  to learn 457 commands  to  get started.
  What you get is a spreadsheet that will produce  64 columns  by  512 rows;
  more than enough for 99% of your needs.  EZS requires an IBM or compatible
  computer,  DOS 2.1+,  256K RAM  minimum  and  1 disk drive.   Any  monitor
  and almost any printer will work.  Includes printed manual/tutorial.  Only
  $49 (Only $39 with any other purchase.)

  EZ-COPY Lite(tm) Did you ever need to copy a bunch of the same disk? DOS's
  DISKCOPY  must read  the source disk before each disk is produced.   We've
  got the answer.  With just 1 source disk read into memory, you can make as
  many copies as you like. EZ-COPY LITE is almost as fast (about 1 minute to
  format and copy) as commercial disk copy machines and much,  much cheaper!
  Other features include, verification, speed optimizations,  and directory.
  Requirements: DOS 3.0+, 640K RAM, 5.25" 360K drives only.  Only $39.

  EZ-Copy Plus (tm) Copy, format, and store almost any format. 5 1/4" (1.2M,
  360K, 180K, etc.), 3 1/2" (1.44M, 720K).   Also stores disk images on hard
  disk and restores to floppy.  Very good and fast.   Great for professional
  users, software companies, and large organizations.  Requires 640K of RAM,
  DOS 3.1+, and hard disk.  ONLY $199+S&H.  Includes a copy of EZ-Copy Lite.
#907#
  Note:  Because  EZ-Copy Lite  and  Plus work directly with the disk drive,
  memory resident programs should be considered carefully.  Some systems may
  require you to boot your computer from floppy for proper operation.

  EZX-WRITE (tm)  WordStar  compatible   word  processor  with  hundreds  of
  features including:  Pulldown menus with  on-line help;  windows  let  you
  edit two files at once;  Macros  for  "recording"  repetitive commands  or
  boilerplate; print spooling - allows you  to continuing editing while your
  printer does its thing;   Supports  all popular printers - bold,  italics,
  underline, super/subscript,  and alternate fonts are available - or create
  your own printer driver; DOS shell for formatting that ever full diskette;
  EGA monitor support;  headers  and  footers;  lightning  fast  search  and
  replace; word wrap and justification; "undo"; adjustable tabs, margins and
  ruler lines;  "point-and-shoot" directories;  automatic file backup; block
  copy,  move,  delete,  read or write from disk,  even  between windows and
  documents;  user  defined colors;  Requires  IBM family  of  computers  or
  compatible,  with 256K RAM, DOS 2.1+,  one disk drive, any monitor, and of
  course, a compatible printer.     

  ...$49 Includes printed manual.  (Only $29 with any other purchase)

  *** Continued on the next page ***
#908#

  DOC Disk "A"  125 Business/Personal Letters and Contracts:
  ... $29 - Only $10 with EZXW.

  DOC Disk "B" Over 100 Legal Documents: ...$29 - Only $10 with EZXW.


  EZX-BASE (tm)  Capable of millions of records with a hard drive  (hundreds
  on a floppy).  Great for that mailing or customer list.  Fast  search  via
  one  of  three keys so you can quickly find the record you're looking for.

  Database can be printer to paper or labels (up to 4 across or "cheshire"),
  or  displayed  on the screen with full scrolling support.   While  in  the
  scroll mode, any record may be selected to print a label, delete, edit, or
  just view.   With this version,  you  may  now  output a file  for use  by
  EZ-FORMS EXECUTIVE(tm).   Complete options control allows printing, sound,
  and color control.

  Fast  and  easy to use,  no complicated  setup  or  programming  involved.
  Requires IBM/compatible, 256K,  monitor, and  printer (for print options).

  ...Only $29 ($49 SRP)  Includes printed manual.  ($24 with other purchase)
#909#
  EZX-TALK (tm)  Quick and easy  modem communications  (300 thru 9600 baud);
  large number auto-dial directory, etc.  Requires  IBM/compatible computer,
  256K, 1 floppy, and Hayes or compatible modem.

  ...Only $29 ($49 Standard Retail Price - SRP)  Includes printed manual.
     ($24 with other purchase)

  ORDER INFO:  If you  are ordering with a  VISA,  MasterCard,  or  American
  Express/Optima,   feel   free  to  call  in  your  order  toll   free   at
  1-800-US-EASY-X (1-800-873-2799) which rings only our order desk.   Please
  note that the information and customer service line is 1-713-280-9900, the
  order line staff is  not able  to answer technical or order status related
  questions.

  Mail orders to:   EZX Publishing, Suite 1777
                    P.O. Box 58177
                    Webster, TX 77598 USA.

  (s/h add,  $5 USA/48,  $10 AK, HI, PR, APO, FPO, VI, Canada, $20 foreign.)

  Pricing, terms, and conditions are subject to change without notice.
#END#
```
{% endraw %}

## FILE1771.TXT

{% raw %}
```
Disk No: 1771                                                           
Disk Title: Ez-Crypt-Lite                                               
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: EZ-CRYPT-LITE                                            
Author Version: 1.0                                                     
Author Registration: $39.00                                             
Special Requirements: 384K RAM.                                         
                                                                        
If file privacy and security is a priority, EZ-CRYPT LITE is a powerful 
encryption/decryption package that anyone can use.  EZ-CRYPT LITE will  
encrypt a source file using any one of several methods, and only decrypt
the file using a confidential key.  And do it all without cryptic       
commands!                                                               
                                                                        
Ideal for use with electronic information services and almost any type  
of file transfer (both electronic and mail service).  Estensive menus,  
on-line manual, and context sensitive help make it easy to use.  And if 
you want file statistics to determine how well your file is encrypted   
(frequency/distribution, mode, mean, median, and more) they are         
available from within EZ-CRYPT LITE.  There is even a ``file wipe''     
option to completely erase all traces of your file after deletion.      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1771

     Volume in drive A has no label
     Directory of A:\

    README   COM      8560   6-03-89  10:33a
    README            5183   6-03-89  10:33a
    EZCRLHLP INX       300   6-01-89   7:26a
    EZCRLHLP TXT     24504   6-01-89   7:26a
    EZCRL    EXE     95205   6-01-89   6:47a
    EZCRLMAN INX       300   6-01-89   6:40a
    EZCRLMAN TXT     19578   6-01-89   6:40a
    EZXINFO  COM     15185   5-30-89   1:53p
    MOUSENFO COM      4656   5-30-89  12:59p
    EZCRLDOC COM     40829   5-15-89   7:48a
    EZCRL    DOC     35392   5-15-89   7:47a
    MONITORS COM     14065   3-28-89   7:57a
    FILE1771 TXT      2073   2-15-90  10:31a
    GO       TXT       540  12-20-89  12:01p
    GO       BAT        38   1-01-80   1:37a
           15 file(s)     266408 bytes
                           48128 bytes free
