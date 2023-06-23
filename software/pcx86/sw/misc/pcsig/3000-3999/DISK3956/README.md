---
layout: page
title: "PC-SIG Diskette Library (Disk #3956)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3956/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3956"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ASAD.TXT

{% raw %}
```
	 QuickDir V1.22
         Copyright, 1993
         Jim Olsen SUPERWARE
         All Rights Reserved.

        ---------------------------------------------------------------------
        ASAD Ombudsman Policy

        QuickDir has been produced by a member of the Association of
        Shareware Authors and Distributors (ASAD).  Any problems of a
        shareware nature that can not be resolved either by the source of
        the program or the the author of the program (whichever is
        applicable) may be brought to the attention of the ASAD Ombudsman
        for possible correction.  Please send all information, including
        the name and address of the person or company you received the
        program from, to: ASAD, Attn: Ombudsman, 1323 Garfield Avenue
        Springfield, Ohio 45504. Telephone (voice) 513-399-4828 or
        (fax) 513-399-2501.  Additional information about ASAD may be
        obtained by writing the above address (Attn: Membership Director)
        and requesting a membership application package.

                ASAD -- Working for you and with you!
 
```
{% endraw %}

## ASP.TXT

{% raw %}
```


                                         ┌─────────┐
	QuickDir V1.22             ┌─────┴───┐     │ (R)
        Copyright, 1993          ──│         │o    │──────────────────
        Jim Olsen SUPERWARE        │   ┌─────┴╨──┐ │  Association of
        All Rights Reserved.       │   │         │─┘  Shareware
                                   └───│    o    │    Professionals
                                 ──────│    ║    │────────────────────
                                       └────╨────┘    MEMBER



        -------------------------------------------------------------------
        ASP Membership.

        "QuickDir is produced by a member of the Association
         of Shareware Professionals (ASP).  ASP wants to make sure
         that the shareware principle works for you. If you are
         unable to resolve a shareware-related problem with an ASP
         member by contacting the member directly, ASP may be able
         to help. The ASP Ombudsman can help you resolve a dispute
         or problem with an ASP member, but does not provide
         technical support for members' products. Please write to
         the ASP Ombudsman at 545 Grover Road, Muskegon, MI
         49442-9427 USA, FAX 616-788-2765 or send a Compuserve
         message via CompuServe Mail to ASP Ombudsman 70007,3536"


 
```
{% endraw %}

## README.DOC

{% raw %}
```




	QuickDir V1.22 Release information


        Copyright 1993, Jim Olsen SUPERWARE, All Rights Reserved.


        --------------------------------------------------------------------
        Thank You For Evaluating QuickDir!

        QuickDir is absolutely the simplest and quickest way to maintain
        your hard drive and perform the complex operations required to
        keep the drives organized. Installation instructions and new release
        documentation follow. I'm confident you will be thrilled with
        QuickDir, and use it daily as your primary file manager.

                                        Jim Olsen SUPERWARE <ASP>.

        --------------------------------------------------------------------
	Installing QuickDir V1.22

        QuickDir is installed to a DOS path directory. Follow these steps:

        -  Identify a DOS path directory. Type PATH at the DOS prompt.
           Look for a suitable directory, such as C:\UTIL or C:\DOS.

        -  Copy QuickDir to your HardDrive. Type:
                Copy A:\QUICKDIR\QD.EXE C:\UTIL\QD.EXE
                or   B:\QUICKDIR\QD.EXE C:\UTIL\QD.EXE
           -  Where: UTIL is the DOS path Directory you've chosen.

        -  For proper use, QuickDir must be installed in a DOS path
           directory on your hard drive.

        -  If you do not have LIST.COM, you may also copy QDLIST.EXE
           to the same DOS path directory.

        -  Type QD at the DOS prompt. QuickDir will want you to configure
           and then scan your drives.

        -  When at the Directory tree, use the mouse or cursor keys to
           scroll and press enter to view the directory contents. The left
           mouse button simulates an enter key.

        -  You may modify the directory tree display at any time. Use F3
           to configure IGNORE and INCLUDE drives. Use IGNORE to completely
           bypass the drive letter, QuickDir will treat the drive as if it
           did not exist. Use INCLUDE to treat the drive as a removable
           drive. INCLUDE can be used for any type of drive. It will always
           treat the drive as removable. Use ADD TO TREE to add an
           INCULDED drive to the directory tree. ADD TO TREE drives must
           be contain in the INCLUDE drive list to be recognized.

        -  Explore QuickDir.

	--------------------------------------------------------------------
	New Features in QuickDir V1.22
	-  Now, you can use .BAT files in the Configuration routine.
	   If you use special switches in your editor or viewer,
	   you can create a .BAT file. Remember to use %1 for the filename.
	-  Added Configuration .BAT files to documentation.
	-  Changed shareware reminder.
	-  Fixed problem recognizing the PATH= statement on some machines.
	-  Fixed problem with untagged move and out of space. V1.2+1.21
	   deleted the file if you did not continue on another disk.
	--------------------------------------------------------------------
	New Features in QuickDir V1.21
	-  Maintenance release which corrects most out of memory conditions
	   in utilities. No Documentation Change.
        --------------------------------------------------------------------
        New Features in QuickDir V1.2

        - Configuration Options:
          These are the new configuration options available:

             -  Ignore Drives: Add the drive letter (EG 'F') to this field
                to make QuickDir ignore the drive. QuickDir will treat this
                drive as if it does not exist.

              - Include Drives: To customize a drive QuickDir already
                recognizes, add the drive letter (EG 'G') to this field.
                Included drives are always treated as removable. If you
                want a drive not to appear on the directory tree display,
                add it to INCLUDE DRIVES. It will be accessable as a
                removable drive.

              - Add to Tree: To display an Included drive in the directory
                tree, add the drive letter to this field (EG. 'H'). The
                rive letter MUST be already in the 'INCLUDE DRIVE' field.

              - Include Examples: If QuickDir does not automaticly recognize
                a CD rom or LAN drive, add it to INCLUDE DRIVES.
                If you want a LAN drive or CD rom displayed on the directory
                tree, add the drive letter to both 'INCLUDE DRIVE' and
                'ADD TO TREE'.

              - Tag Edit/View: To disable View and Edit commands when files
                are tagged, change this field to 'N'. CTL-V and CTL-Edit
                will still be available for use.

              - Mouse Enable: If you have a mouse but never use it for
                QuickDir, changing this field to 'N' will save a few CPU
                cycles and prevent an accidental mouse scroll.

        - Mouse Support:

              - The mouse simulates the cursor keys. You can move through
                a scrolling display using the mouse.

              - The left mouse button simulates an enter key. Use it from
                the main directory display to enter the file display.

        - Automatic Tree Update.

              - For users who want to update QuickDir's directory tree
                display at bootup, add the following line to your
                AUTOEXEC.BAT file AFTER THE PATH= STATEMENT!

                QD /A /RCDE  - Where /A is short for Automatic.
                                     /R means Rescan
                                     CDE are the drives you want to rescan.

              - Use Automatic Tree Update to avoid having to manually rescan
                should your drives change significantly.


        - Print Option.

              - Use the 'P' option from the file display to print the file
                at the cursor.
              - Tagged printing and background printing are not supported.
              - This option is designed as a quick way to print a small file
                you are working on. Use the DOS Print command for large
                print files.

        - Verify.

              - When copying or moving files, a new Verify option is
                available.
              - Change VERIFY: to 'Y' to read the file after it is written.
              - Invaluable for copies to floppy drives, QuickDir makes
                verification a single step procedure. No need to copy the
                file back to the hard drive to see if it's readable.
              - Verify will work with write cached floppy drives; it clears
                the buffer before attempting to read. You might have to turn
                off READ caching; Certain caches read the memory copy. This
                is obvious when using Verify.

        - Continue if out of space.

                - When you run out of space on a disk, QuickDir will prompt
                  you to insert another disk to continue copying.

        - SysDups Utility. - 'K' on Dir Tree Display.

             - Sysdups provides more flexibility when searching for
               duplicate files. It's functions are primarily for LAN
               adminstrators and Bullitin Board Sysops who deal with
               many thousands of files, and wish to identify possible
               duplicate files.

             - 4 options are available:

               - Archive Version Duplicates - This identifies possible
                 version duplicates with extension of ZIP, ARJ, etc.
                 MATCHES: QDIR101.ARJ QDIR12.ZIP. - The first numeric in
                 a filename qualifies as the start of the version.

               - All File Version Duplicates - Same as above, except any
                 file extension is considered as a duplicate.
                 MATCHES: QDIR101.DOC - QDIR12.DOC.

               - Archive Only Duplicates - Identifies exact duplicate
                 filenames, with archive type extensions. Useful for
                 identifing the same archive in differing formats.
                 MATCHES: QDIR101.ZIP - QDIR101.ARJ.

               - Ignore Extension Duplicates - All duplicate filenames
                 are matched, without consideration of extension.
                 Matches: QD.EXE - QD.CFG.


        - Reduced Registration Price.

               - To keep competitive in the market, I have lowered QuickDir's
                 registration fee from $35 to $29 for a single PC.

               - I have also limited the free upgrade policy to 1 single
                 upgrade thru version 2.49. Upgrade costs after the single
                 free upgrade will be $15 per user, no manual included.

               - I will honor the unlimited free upgrade policy to all
                 currently registered users. Also, anyone paying the $35
                 registration will automaticly receive the unlimited upgrade
                 policy thru V2.49.

        - Association of Shareware Professionals <ASP> Membership.

                "QuickDir is produced by a member of the
                Association of Shareware Professionals (ASP).
                ASP wants to make sure that the shareware
                principle works for you. If you are unable to
                resolve a shareware-related problem with an ASP
                member by contacting the member directly, ASP may
                be able to help. The ASP Ombudsman can help you
                resolve a dispute or problem with an ASP member,
                but does not provide technical support for members'
                products.  Please write to the ASP Ombudsman at
                545 Grover Road, Muskegon, MI 49442 or send a
                CompuServe message via CompuServe Mail to ASP
                Ombudsman 70007,3536."
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
                          REGISTER.DOC



You may charge your registered version of QuickDir with VISA,
MASTERCARD or AMERICAN EXPRESS, by calling the Software Shopper
order line at (800) 847-0309. Outside the United States, call 
(502) 228-4492 or fax to (502) 228-5121 or mail your order to:

               Software Shopper
               The Falsoft Building
               PO Box 385
               Prospect, KY  40059

Registration fees and technical support for registered programs are
as stated in the author's documentation. Please contact the author
for technical assistance with this software. Software Shopper
assumes no technical or legal liability for software purchased
through the order service.
```
{% endraw %}

## RELEASE.DOC

{% raw %}
```
	 QuickDir Version 1.22
         Copyright, 1993. Jim Olsen - SUPERWARE.
         All Rights Reserved.

	Version 1.22 - August 16, 1993 -

	-  No programming changes, changed 1-800 order service, and updated
	   documentation to indicate it. Version stays the same.

	Version 1.22 - August 2, 1993 -

	-  Now, you can use .BAT files in the Configuration routine.
	   If you use special switches in your editor or viewer,
	   you can create a .BAT file. Remember to use %1 for the filename.
	-  Added Configuration .BAT files to documentation.
	-  Changed shareware reminder.
	-  Fixed problem recognizing the PATH= statement on some machines.
	-  Fixed problem with untagged move and out of space. V1.2+1.21
	   deleted the file if you did not continue on another disk.

	 Version 1.21 - July 28,1993   -  Maintenance Release.
				       -  Fix memory prob. with utilities.
				       -  All docs stay at V1.2 level.
         Version 1.2  - July 7, 1993   -  Upgrade New: <ASP> and <ASAD>.
                                       -  Configurable Drives - LAN Compat.
                                       -  Sysdups Version Dup Utility.
                                       -  File Print option.
                                       -  Faster Dir Scanning.
                                       -  Configurable Tag Edit/View.
                                       -  Mouse Support.
                                       -  Verify (read after write) copy/move
                                       -  Out of space - asks for next disk.
                                       -  Cache support for floppy.
                                       -  /Auto rescan at bootup.
                                       -  Numerous minor bug fixes. Including
                                          Black and White systems.
         Version 1.02 - April 5, 1993  -  ASP application Version. Not in
                                          general distribution.
         Version 1.01 - April 1, 1993  -  Added Safe Move.
                                       -  Corrected CopyDir Replace Prompt.
                                       -  A few other minor corrections.
         Version 1.00 - March 20, 1993 -  Beta Test Version


        ---------------------------------------------------------------------
        Looking ahead to future releases.

        I have many ideas to be incorporated into future releases.
        But, I'm really concerned with what you, the users of QuickDir want.
        Version 2.0 will be my rewrite version. There may be intermediate
        1.X versions, but 2.0 will be a complete internal rewrite of
	QuickDir, it may take a while to finish. Now is the time to make
        suggestions so I can add them to V2.0.

        Please fill out the survey when you register. That is the only way
        I can add to QuickDir the options you need.

	I'm planning on adding CD Rom Extensions and Logical EMS/DISK
	swapping to release 1.3 or 1.4.
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```




	 QuickDir Version 1.22
         Copyright 1993, Jim Olsen - SUPERWARE
         All Rights Reserved.



         -  I encourage Shareware Vendors, User Groups, Online Services,
	    and Bulletin Boards to distribute QuickDir V1.22 under the
            following conditions:


               1. - These descriptions are used for file listings:

		  - Filename: QDIR122.*.

                  - Short description (1 Line):

		    QuickDir V1.22 <ASP> - Does DOS/Archive Management.

                  - Medium description (2 Lines):

		    QuickDir V1.22 <ASP> - Does DOS/Archive Management.Over
		    50 DOS Functions, Archive, Duplicate files. A must try!


                  - Long description (4 Lines):

		    QuickDir V1.22 <ASP> - Does DOS/Archive Management.
		    Complete File Manager, Archive (2 key unzip!), and
		    file find utils (Dups,Temp). Over 50 DOS functions.
		    Instant Hard Drive Tree Display. Very Easy to Use.

               2. - The distribution package is not modified in any way.
		    It MUST contain these 15 Files:

                    QD.EXE        - QuickDir Executable File.
                    QD.DOC        - Program Documentation.
                    QD.ICO        - Windows QuickDir Icon.
                    QDHINTS.DOC   - QuickDir Hints and Tips Documentation.
                    QDLIST.EXE    - File List Executable.
                    QDLIST.DOC    - File List Documentation.
                    README.DOC    - Install/New Release Info.
                    ORDER.FRM     - QuickDir Order Form.
                    RELEASE.DOC   - Release Documentation.
                    ASAD.TXT      - ASAD Statement.
                    ASP.TXT       - ASP Statement.
                    FILE_ID.DIZ   - Product Description.
                    VENDOR.DOC    - Distribution Information.
		    REGISTER.DOC  - Registration Information.

                  - These files must not be modified in any way.
                  - Distributors are free to add their own
                    advertisements to the distribution package,
                    provided there are no more than two (2).

               3. - The QuickDir executable file must contain the words
                    SHAREWARE, and F4-Register on the main display screen.

               4. - You MAY NOT distribute any version of QuickDir
                    containing 'REGISTERED TO:' on the main screen.

               5. - You may not charge more than eight (8) U.S Dollars
                    for a shareware distribution fee.

               6. - You must clearly state this is SHAREWARE, and
                    additional payment is required to the AUTHOR.

               7. - To encourage QuickDir distribution, the author
		    is not limiting distribution of QuickDir V1.22.
                    However, the author reserves the right to change
                    this open distribution policy at any time.

	       8. - I'm asking CD ROM producers for a sample copy of
		    any CD ROM containing QuickDir. This policy is
		    NOT MANDATORY AT THIS TIME!

              -  Should you wish to make special distribution agreements
                 with the author, or to verify this distribution policy,
                 you may contact him at:


                     Jim Olsen - SUPERWARE
                     P.O. Box 1291
                     Naugatuck, CT. 06770.

	      Voice/Fax: (203) 723 - 0014.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3956

     Volume in drive A has no label
     Directory of A:\

    ASAD     TXT      1127   8-04-93  11:55a
    ASP      TXT      1356   8-04-93  11:55a
    GO       BAT        36   9-20-93  10:38a
    QD       BBS      2370   8-16-93   7:48p
    FILE_ID  DIZ       449   8-16-93   7:38p
    QD       DOC    137820   8-16-93   7:56p
    RELEASE  DOC      3035   8-16-93   8:01p
    QD       EXE     99548   8-16-93   6:48p
    VENDOR   DOC      3511   8-17-93   9:59a
    QDHINTS  DOC     16406   7-16-93   1:57p
    QDLIST   DOC      9165   8-16-93   7:58p
    QDLIST   EXE     23218   7-16-93  11:35p
    README   DOC     10047   8-04-93  12:08p
    QD       ICO      2238   8-16-93   9:15p
    ORDER    FRM      3166   8-16-93   7:29p
    REGISTER DOC       731   8-16-93   8:08p
    SHOW     EXE      2040   9-12-88  10:48a
           17 file(s)     316263 bytes
                           36864 bytes free
