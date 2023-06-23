---
layout: page
title: "PC-SIG Diskette Library (Disk #3367)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3367/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3367"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.TXT

{% raw %}
```

               Professional Capture Systems Readme.txt file


                  Subject                          Page
                  -------------------------------------

                  Shareware...........................1

                  ASP Ombudsman Policy................1

                  Limited Warrany.....................2

                  Installation........................3

                  The User's Manual...................5

                  Technical Support...................5

                  Distributing........................5

                  Purchasing the Licensed Version.....6

                  Order Forms:
                    JASC, Inc.................(US)
                    The Thompson Partnership..(England)



                          Definition of Shareware

Shareware distribution gives users a chance to try software before buying it.
If you try a Shareware program and continue using it, you are expected to
register. Individual programs differ on details -- some request registration
while others require it, some specify a maximum trial period. With
registration, you get anything from the simple right to continue using the
software to an updated program and a printed manual.

Copyright laws apply to both Shareware and retail software, and the
copyright holder retains all rights, with a few specific exceptions as stated
below. Shareware authors are accomplished programmers, just like retail
authors, and the programs are of comparable quality. (In both cases, there are
good programs and bad ones!) The main difference is in the method of
distribution. The author specifically grants the right to copy and distribute
the software, either to all and sundry or to a specific group. For example,
some authors require written permission before a commercial disk vendor may
copy their Shareware.

Shareware is a distribution method, not a type of software. You should find
software that suits your needs and pocketbook, whether it's retail or
Shareware. The Shareware system makes fitting your needs easier, because you
can try before you buy. And because the overhead is lower, prices are lower
also. Shareware has the ultimate money-back guarantee -- if you don't use the
product, you don't pay for it.


                           ASP Ombudsman Policy

This program is produced by a member of the Association of Shareware
Professionals (ASP).  ASP wants to make sure that the shareware principle
works for you. If you are unable to resolve a shareware-related problem with
an ASP member by contacting the member directly, ASP may be able to help. The
ASP Ombudsman can help you resolve a dispute or problem with an ASP member,
but does not provide technical support for members' products. Please write to
the ASP Ombudsman at 545 Grover Road, Muskegon, MI 49442-9427 or send a
Compuserve message via CompuServe Mail to ASP Ombudsman 70007,3536

                                    1



                   LIMITED WARRANTY AND DISCLAIMER OF WARRANTY 
 
	THIS SOFTWARE AND ACCOMPANYING WRITTEN MATERIALS (INCLUDING INSTRUCTIONS 
FOR USE) ARE PROVIDES "AS IS" WITHOUT WARRANTY OF ANY KIND. FURTHER, JASC,
INC.(JASC) DOES NOT WARRANT, GUARANTEE, OR MAKE ANY REPRESENTATIONS REGARDING
THE USE, OR THE RESULTS OF USE, OF THE SOFTWARE OR WRITTEN MATERIALS IN TERMS
OF CORRECTNESS, ACCURACY, RELIABILITY, CURRENTNESS, OR OTHERWISE. THE ENTIRE
RISK AS TO THE RESULTS AND PERFORMANCE OF THE SOFTWARE IS ASSUMED BY YOU. IF
THE SOFTWARE OR WRITTEN MATERIALS ARE DEFECTIVE YOU, AND NOT JASC OR ITS
DEALERS, DISTRIBUTORS, AGENTS, OR EMPLOYEES, ASSUME THE ENTIRE COST OF ALL
NECESSARY SERVICING, REPAIR, OR CORRECTION.
 
	THE ABOVE IS THE ONLY WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE, THAT IS MADE BY JASC, ON THIS JASC PRODUCT.
NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY JASC, ITS DEALERS,
DISTRIBUTORS, AGENTS OR EMPLOYEES SHALL CREATE A WARRANTY OR IN ANY WAY
INCREASE THE SCOPE OF THIS WARRANTY AND YOU MAY NOT RELY ON ANY SUCH
INFORMATION OR ADVICE. YOU MAY HAVE OTHER RIGHTS WHICH VARY FROM STATE TO
STATE.
 
	NEITHER JASC NOR ANYONE ELSE WHO HAS BEEN INVOLVED IN THE CREATION, 
PRODUCTION OR DELIVERY OF THIS PRODUCT SHALL BE LIABLE FOR ANY DIRECT,
INDIRECT, CONSEQUENTIAL OR INCIDENTAL DAMAGES (INCLUDING DAMAGES FOR LOSS OF
BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS INFORMATION, AND
THE LIKE) ARISING OUT OF THE USE OR INABILITY TO USE SUCH PRODUCT EVEN IF
JASC HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
 
	This Limited Warranty shall be governed and construed in accordance with 
the laws of the State of Minnesota. 
 


                           ACKNOWLEDGEMENT
 
BY USING THE SHAREWARE VERSION OF PROFESSIONAL CAPTURE SYSTEMS YOU ACKNOWLEDGE
THAT YOU HAVE READ THIS LIMITED WARRANTY, UNDERSTAND IT, AND AGREE TO BE BOUND
BY ITS' TERMS AND CONDITIONS. YOU ALSO AGREE THAT THE LIMITED WARRANTY IS THE
COMPLETE AND EXCLUSIVE STATEMENT OF AGREEMENT BETWEEN THE PARTIES AND
SUPERSEDE ALL PROPOSALS OR PRIOR AGREEMENTS, ORAL OR WRITTEN, AND ANY OTHER
COMMUNICATIONS BETWEEN THE PARTIES RELATING TO THE SUBJECT MATTER OF THE THE
LIMITED WARRANTY.


                                    2

                 Installing Professional Capture Systems

Before you can use the Professional Capture Systems you have to run the setup
program from DOS or Windows so it will work properly on your computer.

You cannot just copy the files from the Professional Capture Systems disk to
your hard disk. The files on the distribution disk are packed in a special
way to save space. The setup program unpacks those files and builds them on
your working disk.

Installation from within Microsoft Windows

1.  Make Windows' "Program Manager" the active window.

2.  From Windows' "Program Manager", select "File", then select "Run".
    This will open the "Run" dialog box.

    Place the copy of Professional Capture Systems in your floppy drive.
    Now, the dialog box needs for you to type in the command that will run
    the Professional Capture Systems installation program.

    * If your floppy disk goes in your Drive "A", type:
    A:SETUP
    Leave the "Run Minimized" box un-selected, and click the "OK" command
    button (or press "Enter").

    * If your floppy disk goes in your Drive "B", type:
    B:SETUP
    Leave the "Run Minimized" box un-selected, and click the "OK" command
    button (or press "Enter").

3.  Fill in the required information in the dialog box.

    * It will ask you for the "Source Drive and Directory" designation where
    your Professional Capture Systems floppy disk is located.  (This is the
    same floppy drive designation you typed in the previous step before the
    word "setup".)

    * It will ask you for the hard disk "Destination Drive and Directory"
    designation on which you want it to install Professional Capture Systems.
    It will suggest a directory named "C:\PCS".

    If you want the Professional Capture Systems program files installed on a
    different drive or directory, just click the pointer to the right of the
    characters you want to change, backspace over the ones you want to erase,
    then type in the new designation.

    * It will automatically build a Professional Capture Systems icon and
    add it to "Program Manager".  Accept the "Yes" (already selected by
    default) if you do want it to do this. Select "No" if you do not.

4.  Professional Capture Systems Setup will unpack the necessary files (for
    both WinCapture and DosCapture) and place them into your directory.

5.  Professional Capture Systems Setup will notify you when the installation
    is completed.

                                    3

        Installing Professional Capture Systems (continued)

Installation from DOS

1.  Place the copy of Professional Capture Systems in your floppy drive.
    Now, at the DOS prompt you will need to type in the command that will
    run the Professional Capture Systems installation program.

    * If your floppy disk goes in your Drive "A", type:
    A:SETUP

    * If your floppy disk goes in your Drive "B", type:
    B:SETUP

2.  If the setup program cannot find the file PCS.CMP, it will ask you for
    the drive and directory where it can be found.  If the setup program
    finds PCS.CMP this step will be skipped. If you are asked for the drive
    and directory, you should type in the drive name followed by a colon
    and slash and then the directory. The following is an example.
    B:\

3.  The setup program will ask you for the hard disk "Destination Drive
    and Directory" designation on which you want it to install Professional
    Capture Systems.

4.  Professional Capture Systems Setup will unpack the necessary files (for
    both WinCapture and DosCapture) and place them into your directory.

5.  Professional Capture Systems Setup will notify you when the installation
    is completed.

                                    4


                             The User's Manual

The user's manual is one of the files that will be unpacked and placed on
your working disk when you run the SETUP program. The file is PCS.TXT.
It is a text file.

When you purchase the licensed version of Professional Capture Systems you
will receive a fully illustrated, printed User's Guide.




              Professional Capture Systems Technical Support

Technical support for Professional Capture Systems can be obtained from:

USA
---------
JASC, Inc.
10901 Red Circle Drive
Suite 340
Minnetonka, MN 55343 USA

(612) 930-9171 (9am to 5pm USA central time)


England
------------------------
The Thompson Partnership
Church Croft,
Bramshall,
UTTOXETER,
Staffs.
ST14 5DE

0889 564601


                            Distributing

You are encouraged to pass a copy of the shareware verison of Professional
Capture Systems along to your friends for evaluation.

If you do so, you must provide them with the entire set of Professional
Capture Systems shareware version files. These include:
SETUP.EXE
PCS.CMP
README.TXT
VENDOR.DOC

Do not simply copy the files off your hard drive. Professional Capture Systems
must be installed using the SETUP program!

                                    5




                       Purchasing the Licensed Version

You may use the shareware version of Professional Capture Systems for a 30 day
trial period. If you would like to continue to use Professional Capture Systems
after the 30 day trial period, you are required to purchase the licensed
version of Professional Capture Systems.

When you purchase the licensed version of Professional Capture Systems you will
receive a disk with the licensed version and the printed user's guide.

Professional Capture Systems may be purchased from a number of sources. You are
free to purchase your copy from where ever you desire.

The vendors include:

The Thompson Partnership     - England
JASC, Inc.                   - USA


                                   6


                          JASC, Inc. (USA)

You can order from JASC, Inc. by payment with check or credit card.
The credit cards accepted are MC and Visa.

The numbers for ordering are: Voice (612) 930-9171 or FAX (612) 930-9172

Professional Capture Systems 1.00 (or latest version)

NAME______________________________________________

COMPANY___________________________________________

STREET____________________________________________

STREET____________________________________________

CITY______________________________________________

STATE_________________________     ZIP____________

COUNTRY_________________

TELEPHONE NUMBER_____________________

Disk Size Prefered  3.5"_____   5.25"_____

Where did you hear about Professional Capture Systems?

________________________________________

Professional Capture Systems....................$39.00...______

Minnesota residents add 6.5% sales tax...................______

Shipping/Handling - US or Canada.................$4.00...______

Shipping/Handling - Outside of US or Canada.....$15.00...______
                                                       ==========

            Total in US Funds drawn on a US Bank.........______

Make checks payable to: JASC, Inc.

Mail to:
  JASC, Inc.
  10901 Red Circle Drive
  Suite 340
  Minnetonka, MN 55343
  USA




                The Thompson Partnership (England)

You can order from The Thompson Partnership by payment with cheque or
credit card. The credit cards accepted are: MC, Visa and American Express.

The numbers for ordering are: 0889 564601 (Voice) or 0889 563219 (FAX)

Please use this form when ordering by mail.

Professional Capture Systems 1.00 (or latest version)

NAME______________________________________________

COMPANY___________________________________________

ADDRESS___________________________________________

ADDRESS___________________________________________

TOWN______________________________________________

CITY______________________________________________

COUNTRY_____________________ POST CODE____________

TELEPHONE NUMBER__________________________

CREDIT CARD TYPE__________________________

CREDIT CARD NUMBER________________________

EXPIRATION DATE___________________________

Disk Size Prefered  3.5"_____   5.25"_____

Where did you hear about Professional Capture Systems?

________________________________________


Professional Capture Systems (Shipping/Handling/VAT included)...£29.00***
(UK Pounds)
*** Be aware that if you live in Europe and purchase a copy of Professional
Capture Systems from a distributor outside of Europe, you will be liable for
the VAT and Customs charges. Thus a cheaper price from an non-European
distributor may end up costing you more.

Make cheques or EuroCheque payable to: The Thompson Partnership
(remember to put your card number on the reverse of the cheque)

Mail to:
 The Thompson Partnership
 Church Croft,
 Bramshall,
 UTTOXETER,
 Staffs, England
 ST14 5DE
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```



                      _______
                 ____|__     |               (R)
              --|       |    |-------------------
                |   ____|__  |  Association of
                |  |       |_|  Shareware
                |__|   o   |    Professionals
              -----|   |   |---------------------
                   |___|___|    MEMBER





                  PROFESSIONAL CAPTURE SYSTEMS
                  ----------------------------

                          Version 1.00
                          ------------

               V E N D O R    I N F O R M A T I O N
              --------------------------------------



This file provides information for Shareware Distributors, Disk Vendors
and BBS SYSOPs who wish to distribute Professional Capture Systems.


-----------------------------------------------------------------
                  Part 1:  Program Information:
-----------------------------------------------------------------

Program Name, Category, Keywords:
---------------------------------
   Name     - Professional Capture Systems
   Category - Graphics / Screen Capture
   Keywords - WINDOWS
              DOS
              SCREEN CAPTURE
              TEXT
              VGA


Description:
------------
   Professional Capture Systems is a combination of both Windows and DOS
programs that will simplify your screen capturing.
   The Windows program, WinCapture, allows for the capturing of a defined
area, full screen, window, or client area. The capture can be sent to any
combination of the clipboard, printer and disk. The capture can be saved
using the formats BMP, GIF, PCX, PIC, TGA, TIFF, or WPG. WinCapture
requires Windows 3.0 or greater.
   The DOS program, DosCapture, will allow you to capture standard and
extended VGA mode text screens and standard VGA mode graphics screens.
The captures are saved to PCX graphics files. DosCapture requires an
80286 or better and a VGA card.



-----------------------------------------------------------------
                Part 2:  Distribution Requirements
-----------------------------------------------------------------
The Shareware Version of Professional Capture Systems may be freely
distributed.

BBSs - please name the file PCS100.xxx.

ASP approved vendors will automatically receive the latest version.

Non ASP vendors may receive the latest version by contacting JASC, Inc.


When distributing Professional Capture Systems the following files must
be distributed togeather.
SETUP.EXE
PCS.CMP
README.TXT
VENDOR.DOC
    
Disk Vendors, Shareware Distributors and BBS(s) may charge a nominal fee for
distribution of the program. The recipient of Professional Capture Systems
must be informed, in advance, that the fee paid to acquire Professional
Capture Systems does not relieve the recipient from puchasing the Licensed
Version of Professional Capture Systems if the recipient continues to use
Professional Capture Systems.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3367

     Volume in drive A has no label
     Directory of A:\

    README   TXT     14440  10-15-92   2:00a
    VENDOR   DOC      3026  10-15-92   2:00a
    SETUP    EXE     61392  10-15-92   2:00a
    PCS      CMP     99063  10-15-92   2:00a
    GO       BAT        18   2-12-93   7:25a
    SHOW     EXE      2040   9-12-88  10:48a
            6 file(s)     179979 bytes
                          140288 bytes free
