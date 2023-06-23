---
layout: page
title: "PC-SIG Diskette Library (Disk #3341)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3341/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3341"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FEATURES.TXT

{% raw %}
```
.RRL       !!      !       !       !       !       !       !       !    R
DESCRIPTION 1

Contacts Unlimited is a contacts database system with context-sensitve
help that allows for an unlimited number of contacts for any one
company whether it be one or ten thousand. Many other features.
Requires DOS 3.3, 640K RAM and HD.

DESCRIPTION 2

Contacts Unlimited is a contacts database system with context-sensitve
help that allows for an unlimited number of contacts for any one
company whether it be one or ten thousand. Companies can be placed in
up to 4000 categories. Companies can be seen in either Company or
Category order. Shows all contacts of company selected on screen at
one time with full name, title and extension. Produces Form Letters
and labels. Auto dialling for company selected or direct dial contact.
Requires DOS 3.3, 640K RAM and HD.

DESCRIPTION 3

MAIN FEATURES OF CONTACTS UNLIMITED
* Allows for unlimited number of contacts for any one company whether
it be one or ten thousand.
* Companies can be placed in up to 4000 categories.
* Companies can be seen in either Company or Category order.
* Shows all contacts of company selected on screen at one time with
full name, title and extension.
* Contact within company can be searched by surname.
* Short "memory booster" notes can be added for each company.
* Short "memory booster" notes can be added for each contact within a
company.
* Form letters can be printed for
   1. Single contact within a company.
   2. All contacts within a company.
   3. All contacts for all companies.
   4. All contacts for companies within a certain category.
* A single address can be printed straight on to an DL or C5 envelope.
* Self adhesive labels can be printed for
   1. Single contact within a company.
   2. All contacts within a company.
   3. All contacts for all companies.
   4. All contacts for companies within a certain category.
* Auto dialling for company selected or direct dial contact.
* Multi-user
* Ease of use. Short learning curve.


```
{% endraw %}

## FILES.TXT

{% raw %}
```

                   List of Contact UnLimited Files

PALETTE  HLP         6 10-07-92   4:48p Help File
LETTERS  NTX      2048 08-07-92   4:57p Index for Form Letters
CATEGORY DBF       150 09-06-92   2:55p Category Database
CATEGORY NTX      2048 09-06-92   2:55p Category Database Index
COMPANY  NTX      2048 25-06-92   9:05a Company Database Index
COMPCAT  NTX      2048 25-06-92   9:05a Company Database Index
COMPDELT NTX      2048 25-06-92   9:05a Company Database Index
CONTDELT NTX      2048 25-06-92   9:05a Contact Database Index
DELTCAT  NTX      2048 09-06-92   2:55p Contact Database Index
LET_DELT NTX      2048 17-06-92   2:41p Index for Form Letters
PHONE    NTX      2048 25-06-92   9:05a Company Database Index
CATZIP   NTX      2048 25-06-92   9:05a Contact Database Index
REFSUR   NTX      2048 25-06-92   9:05a Contact Database Index
SURNAME  NTX      2048 08-06-92   1:36p Contact Database Index
ZIPCODE  NTX      2048 25-06-92   9:05a Company Database Index
CONTACT  DBF       387 25-06-92   9:05a Contact Database
COMPANY  DBF       515 26-06-92  11:26a Company Database
REF      DBF       460 30-06-92  11:27a Presets Database
FM_LETS  DBF       131 08-07-92   4:50p Form Letters Database
FM_LETS  DBT       512 08-07-92   4:50p Form Letters Memo File
CU       EXE    430080 21-07-92   8:53a Contacts Unlimited Program
HELP     DAT     62311 21-07-92  10:13a Context-Senstive Help File
       24 file(s)     521176 bytes
```
{% endraw %}

## GETSTART.TXT

{% raw %}
```
.po 0
                  SHORT NOTES ON CONTACTS UNLIMITED Version 1.0

         MAIN FEATURES
         * Allows for unlimited number of contacts for any one company
           whether it be one or ten thousand.
         * Companies can be placed in up to 4000 categories.
         * Companies can be seen in either Company or Category order.
         * Shows all contacts of company selected on screen at one
           time with full name, title and extension.
         * Contact within company can be searched by surname.
         * Short "memory booster" notes can be added for each company.
         * Short "memory booster" notes can be added for each contact
           within a company.
         * Form letters can be printed for
             1. Single contact within a company.
             2. All contacts within a company.
             3. All contacts for all companies.
             4. All contacts for companies within a certain category.
         * A single address can be printed straight on to an DL or C5
           envelope.
         * Self adhesive labels can be printed for
             1. Single contact within a company.
             2. All contacts within a company.
             3. All contacts for all companies.
             4. All contacts for companies within a certain category.
         * Auto dialling for company selected
         * Multi-user
         * Ease of use. Short learning curve.

         INSTALLING AND SETTING UP CONTACTS UNLIMITED
         Please follow carefully the instructions listed before for
         trouble free installation of Contacts Unlimited. For any
         further information refer to the on-line help by pressing <F1>
         from anywhere inside Contacts Unlimited.

         INSTALLATION
         1. Place disk in drive A:
         2. At A: prompt, type "install" and press <Enter>.
         3. You can install Contacts Unlimited on any drive by
            changing the destination drive. Press <Enter>.
         4. Contacts Unlimted will now self-install.
         5. Answer Yes to change Autoexec.bat and Config.sys files.
         6. If the last command in your autoexec.bat file is a menu
            command, you will need to move the line "SET CLIPPER=F45"
            above the menu command.

         SETTING UP CONTACTS UNLIMITED
         At the \CU prompt type "cu" and press <Enter>.

         SETTING DATE FORMAT
         If you are using Contacts Unlimited outside of the United
         States then you may want to change the date format from U.S.
         (m/d/y) to British format (d/m/y). At the Company Search screen
         press <F10>. The options menu will now appear. Select Set Date.
         Now select date format required. After selecting the date
         format, a message will appear informing you that Contacts
         Unlimited will now restart.

         SETTING UP CATEGORIES
         With the initial installation, there are a small number of
         categories included in the category database. You will probably
         need to change them to suit your own type of business. Now is
         the time to do it. Take your time in selecting the catogories
         you are going to use, not only for the present time but also
         for future needs. For example, say at present you only use
         distributors within your own country, but in the future you
         intend to distribute your products overseas some time in the
         forseeable future. Now is the time to set up categories for
         your local distributors and your planned overseas
         distributors. A little time spent now can save many hours in
         the future. For further information refer to the on-line help
         "Categories, Updating".

         PRINTING MANUAL
         Turn your printer on making sure that you have plenty of paper.
         At the A: prompt, type MANUAL then press <Enter>. The manual
         will now be printed.

                   *********************************

         Below are a small number of extacts from the manual which
         should be read before entering any data in Contacts Unlimited.

         Categories, Updating
         You cannot delete or change a category if there are any company
         records with the same category. You must first change all
         company categories to a different category. To add, change or
         delete a category, at the Company Search screen press <F4>. A
         pop-up menu will appear and a box containing the categories
         will also appear. To add a category press <F2> and enter the
         new category. To change a category press <F4>. If there are
         Company records with the same category as the one you want to
         change then a message will appear informing you that you will
         have to change all of the company records before you can change
         the category required. This is done so that the Company records
         are always maintained in correct category order. In order to do
         this you first need to create a new category, change all the
         Company records to the new category and then delete the old
         category. To delete a category press <F6>. If there are Company
         records with the same category as the one you want to delete
         then you will have to change all of the company records before
         you can delete the category required. This is done so that the
         Company records are always maintained in correct category
         order.

         Companies without contacts
         If at all possible, it is best to try and obtain at least one
         contact before sending any mail to a company. A fully
         personalized letter will nearly always be opened if only for
         curiosity sake. There will always be times when is not possible
         to obtain the required information. In this case, enter the
         company information in the company database, and in the
         contacts database, enter "Manager" in the Position field and in
         the salutation field, enter either "Sir" or "Sir/Madam". This
         should at least make any mail look presentable if you are using
         a standard form of letter. By filling in the Salutation field,
         you will not print any odd looking form letters with nothing
         after the "Dear".



         Contacts without companies
         If you have a data entry for a person which has no registered
         company then enter the Company field with Surname, First-name.
         e.g. 'Keir, Mr Ian'. Make sure that there is a comma between
         the Surname and First-name. When the form letter or label is
         printed out then the Surname, First-name will be reversed. You
         may add a record in the Contacts Database. If you do, leave the
         Title, First-name and Surname fields empty but fill in the
         Position and Salutation fields and optionally any of the other
         fields as required. If you do not fill in the Position field
         then when you press <F3> to go to the Contacts database, then
         nothing will be visible even though there is a record. By
         filling in the Salutation field, you will not print any odd
         looking form letters with nothing after the "Dear".

```
{% endraw %}

## MANUAL.DOC

{% raw %}
```

                                   SECTION ONE



         DISCLAIMER

         ABIS Software hereby disclaims all warranties relating to this
         product, whether express or implied, including without
         limitation any implied warranties of merchantability or fitness
         for a particular purpose. ABIS Software cannot and will not be
         liable for any special, incidental, consequential, indirect or
         similar damages due to loss of data or any other reason, even
         if ABIS Software or an authorized ABIS Software agent has been
         advised of the possibility of such damages.  In no event shall
         the liability for any damages ever exceed the price paid for
         the license to use software, regardless of the form and/or
         extent of the claim.  The user of this program bears all risk
         as to the quality and performance of the software.


         LICENSE

         Contacts Unlimited is a Shareware product and is made available
         to the general computing public as such for evaluation.  Users
         are licensed to operate Contacts Unlimited on their personal
         computers for the purpose of test and evaluation on a trial
         basis for a period of 30 days.  If the user decides the program
         is not of sufficient merit to warrant purchase through
         registration with ABIS Software, the program should be removed
         from the user's personal computer.  Otherwise, if the program
         is deemed useful and the user has used or intends to use it,
         registration with ABIS Software is required.

         Registered users are those users that elect to pay for Contacts
         Unlimited and register by payment with ABIS Software.  By
         virtue of registration and payment for the program, registered
         users are granted a license to continue to utilize the program
         on their personal computer for as long as they choose.  This
         license authorizes the user to use the program on any personal
         computer system he or she may own so long as the program is
         operated on only one computer system at a time.

         Site licenses for use of Contacts Unlimited on multiple
         computers are available upon request at a reduced fee (see
         order form) based upon the number of single machines licensed
         for use.


         REGISTRATION

         Contacts Unlimited is the sole property of ABIS Software. The
         Shareware version, and ONLY that version, may be freely copied
         and transferred to individual parties for evaluation purposes.
         The Shareware version, and ONLY that version, may be posted on
         Bulletin Board Systems (BBS) for electronic access as long as
         NO FEE is charged for its distribution except for private BBS
         operations that charge a regular user subscription fee.
         Computer information services are authorized to post this
         product for subscriber access. The Shareware version of
         Contacts Unlimited may NOT be distributed on diskette by any
         disk distributor/vendor that charges more than $12.00 for the

                                     PAGE 1


                                   SECTION ONE



         diskette upon which the program and attendant files are
         recorded without written consent from ABIS Software.

         Contacts Unlimited is a fully functional Shareware product.
         Shareware is a computer program distribution/marketing method
         that permits potential buyers to thoroughly try the program
         prior to purchase. It is NOT free and it is not in the Public
         Domain.  If, after evaluating the program, you find it to be
         useful enough to incorporate into one or more applications, you
         are expected to pay for it by registering with ABIS Software.
         The registration fee is $45.00 (see order form for quantity
         discounts) and the registered version which will be sent in
         return, which is NOT distributed as Shareware, will not contain
         Shareware labels nor the closing message. The registered
         version also includes a bound Manual. Registered users will be
         kept informed of all future updates of Contacts Unlimited plus
         help by phone, fax or mail.


         You may register by completing and despatching the form on the
         following page together with the registration fee stated
         therein.




































                                     PAGE 2


                                   SECTION ONE




      |---------------------------------------------------------------|
      |                        ORDER FORM                             |
      |                       ABIS Software                           |
      |                        P.O. Box 88                            |
      |                     LAWNTON QLD 4501                          |
      |                         AUSTRALIA                             |
      |_______________________________________________________________|
      |                                                               |
      | NAME:_________________________________________                |
      |                                                               |
      | COMPANY:______________________________________                |
      |                                                               |
      | ADDRESS:______________________________________                |
      |                                                               |
      | CITY:____________________ POSTCODE_______ STATE______         |
      |                                                               |
      | COUNTRY:__________________ PHONE (____)______________         |
      |                                                               |
      | DISK SIZE  5 1/4  [  ]    3 1/2   [   ]                       |
      |                                                               |
      | How did you hear about this software__________________________|
      | If you have used a shareware copy to evaluate Contacts        |
      | Unlimited, please supply the following information            |
      | Version of shareware copy __________                          |
      | Shareware name and address                                    |
      | Name:___________________________________________________      |
      | Address ________________________________________________      |
      | Town_______________________ State____ Zipcode_______________  |
      | Country _____________________                                 |
      |---------------------------------------------------------------|
      |  ITEMS ORDERED                     |QTY|UNIT PRICE | AMOUNT   |
      |----------------------------------|-----|-----------|----------|
      | Contacts Unlimited               |     |           |          |
      |   Single Program                 |_____| $45.00    | $_______ |
      |   10 Pack   ($42.00 each)        |_____| $420.00   | $_______ |
      |   50 Pack   ($39.00 each)        |_____| $1940.00  | $_______ |
      |   Over 250 units. Site Licence   |_____| $34.00 ea | $_______ |
      |   Over 500 units  Site Licence   |_____| $29.00 ea | $_______ |
      | SUPPORTING INFORMATION                             |          |
      | 1. Multi-User Packs contain one set media and      |          |
      |    documentation, with licence to cover 10 or 50   |          |
      |    users.                                          |          |
      | 2. Site Licences contain two master disks and      |          |
      |    nominated quantity of sets of manuals in line   |          |
      |    with site licence.
      |----------------------------------------------------|----------|
      |                                           SUBTOTAL | $_______ |
      |----------------------------------------------------|----------|
      | ADD Shipping/Handling charge        Australia $5   |          |
      |                                     Overseas $15   | $_______ |
      |----------------------------------------------------|----------|
      | Prices subject to change                           |          |
      | All amounts in AUS currency     GRAND TOTAL ($AUST)| $_______ |
      |_______________________________________________________________|



                                     PAGE 3


                                   SECTION ONE




         MAIN FEATURES

         * Allows for unlimited number of contacts for any one company
           whether it be one or ten thousand.
         * Companies can be placed in up to 4000 categories.
         * Companies can be seen in either Company or Category order.
         * Shows all contacts of company selected on screen at one
           time with full name, title and extension.
         * Contact within company can be searched by surname.
         * Short "memory booster" notes can be added for each company.
         * Short "memory booster" notes can be added for each contact
           within a company.
         * Form letters can be printed for
             1. Single contact within a company.
             2. All contacts within a company.
             3. All contacts for all companies.
             4. All contacts for companies within a certain category.
         * A single address can be printed straight on to an DL or C5
           envelope.
         * Self adhesive labels can be printed for
             1. Single contact within a company.
             2. All contacts within a company.
             3. All contacts for all companies.
             4. All contacts for companies within a certain category.
         * Auto dialling for company selected or direct dial contact.
         * Multi-user
         * Ease of use. Short learning curve.
         * Context-senstive help available anywhere in program.

                           **************************

         INSTALLING AND SETTING UP CONTACTS UNLIMITED

         Please follow carefully the instructions listed before for
         trouble free installation of Contacts Unlimited. For any
         further information refer to the on-line help by pressing <F1>
         from anywhere inside Contacts Unlimited.

                           **************************

         INSTALLATION

         1. Place disk in drive A:
         2. At A: prompt, type "install" and press <Enter>.
         3. You can install Contacts Unlimited on any drive by
            changing the destination drive. Press <Enter>.
         4. Contacts Unlimited will now self-install.
         5. Answer Yes to change Autoexec.bat and Config.sys files.
         6. If the last command in your autoexec.bat file is a menu
            command, you will need to move the line "SET CLIPPER=F45"
            above the menu command.

                           **************************




                                     PAGE 4


                                   SECTION ONE




         STARTING UP CONTACTS UNLIMITED

         At the \CU prompt type "cu" and press <Enter>.

                           **************************

         SETTING DATE FORMAT

         If you are using Contacts Unlimited outside of the United
         States then you may want to change the date format from U.S.
         (m/d/y) to British format (d/m/y). At the Company Search screen
         press <F10>. The options menu will now appear. Select Set Date.
         Now select date format required. After selecting the date
         format, a message will appear informing you that Contacts
         Unlimited will now restart.

                           **************************

         SETTING UP CATEGORIES

         With the initial installation, there are a small number of
         categories included in the category database. You will probably
         need to change them to suit your own type of business. Now is
         the time to do it. Take your time in selecting the categories
         you are going to use, not only for the present time but also
         for future needs. For example, say at present you only use
         distributors within your own country, but in the future you
         intend to distribute your products overseas some time in the
         foreseeable future. Now is the time to set up categories for
         your local distributors and your planned overseas distributors.
         A little time spent now can save many hours in the future.
         For further information refer to the on-line help "Categories,
         Updating".

                           **************************






















                                     PAGE 5


                               SECTION TWO



         NOTE: All of the following subjects are also available through
         the Context-Sensitive Help while running Contacts Unlimited. To
         activate the Context-Sensitive Help press <F1>.

                            ***************************

         ABOUT CONTEXT-SENSITIVE HELP

         Context Sensitive Help is available from anywhere within
         Contacts Unlimited by simply pressing the <F1> Key. You can use
         the <Esc> to back out of almost anywhere within Contacts
         Unlimited.

         Many of the Help subjects have been cross-referenced. It is to
         your advantage to check out each of these additional references
         as they contain additional information.

         To make sure that you see all the help on each subject, press
         the Down Arrow until you hear a beep.

         If you are in context-sensitive Help, then you can press
         <Alt><F1> for a menu of Help subjects.

                           **************************

          CATEGORY, SELECTING

          To select a category while entering a new company record,
          simply press the first letter of the category required. If
          there is more than one category with the same first letter,
          then keep pressing the same letter until you reach the
          category required.

          SEE ALSO Company Database, Adding record

                           ***************************

         CATEGORIES, UPDATING

         You cannot delete or change a category if there are any company
         records with the same category. You must first change all
         company categories to a different category.

         To add, change or delete a category, at the Company Search
         screen press <F4>. A pop-up menu will appear and a box
         containing the categories will also appear.

         To add a category press <F2> and enter the new category.

         To change a category press <F4>. If there are Company records
         with the same category as the one you want to change then a
         message will appear informing you that you will have to change
         all of the company records before you can change the category
         required. This is done so that the Company records are always
         maintained in correct category order. In order to do this you
         first need to create a new category, change all the Company
         records to the new category and then delete the old category.

                                     PAGE 6


                               SECTION TWO




         To delete a category press <F6>. If there are Company records
         with the same category as the one you want to delete then you
         will have to change all of the company records before you can
         delete the category required. This is done so that the Company
         records are always maintained in correct category order.

         SEE ALSO Company Database, Editing records
                  Contacts without companies
                  Companies without contacts

                           ***************************

         COMPANY DATABASE, ADDING RECORD

         To add a new company record, at the Company Search screen,
         press <F2> which will bring up the Company Menu. Press <F2>
         again to select Add Company. A box will appear. Just fill in
         the details required. When entering the phone number include
         the full STD number, or in the case of an overseas company, the
         full ISD number.

         There are two reasons for this. Firstly if you have a modem, or
         intend to buy one in the future, then you can phone the company
         from within Contacts Unlimited by moving to the Contacts screen
         and pressing <F10>. The second reason is after the phone number
         is entered, Contacts Unlimited will then check for a duplicate
         phone number and if found will move to the record with the
         duplicate phone number.

         By adding the STD number (even for a local call) or the ISD
         number, the phone number then becomes a unique number. This is
         done as a check against entering the same company/branch twice.

         If you are adding ISD numbers, remember to your own country's
         code if intend using a modem dial an overseas number from
         within Contacts Unlimited.

         SEE ALSO Category, Selecting
                  Companies without contacts
                  Contacts without companies
                  Phone, Autodial

                           ***************************

         COMPANY DATABASE, BROWSING RECORDS

         There are a number of ways to browse through the Company
         records. You can use the Up or Down Keys to move to each
         separate record. You can use the PageUp and PageDown keys to
         move through the records a screenful at a time. You can use the
         <Ctrl><PageUp> keys to move to the first record or
         <Ctrl><PageDown> to the last record.

         You can also move sideways through the fields. Use the Right or
         Left key to move a field at a time. You can use the
         <Ctrl><Right> to move a screenful right at a time or

                                     PAGE 7


                               SECTION TWO



         <Ctrl><Left> to move a screenful left at a time.

         You can also move the fields into different order. To move a
         field right move the highlight bar to the field required and
         press <F7>. To move a field left move the highlight bar to the
         field required and press <F6>.

         You can also lock a field so that it always remains as the left
         most field on the screen. To do this first move to the field
         required then keep pressing <F6> until it is the first of all
         the fields. Then press <F8>. This can be repeated for any
         number of fields. To unlock the last field locked press <F9>.

                           ***************************

         COMPANY DATABASE, CHANGING INDEXES

         The Company database can be shown in either Company name or
         Category order.

         To change the Company database from company name order to
         category order press <F12>. If you do not have an extended
         keyboard press <Ctrl><F2>. Select the category you want to look
         at and press <Enter>.

         To change the Company database from category order to company
         name order press <F11>. If you do not have an extended keyboard
         press <Ctrl><F1>. Enter the company name you want to look at
         and press <Enter>.

                          *****************************

         COMPANY DATABASE, DELETING RECORD

         You cannot delete a company record, until you have deleted all
         contacts for that company. This is done to prevent the contacts
         database being filled with garbage.

                           ***************************

         COMPANY DATABASE, EDITING RECORD

         To edit a company record, at the Company Search screen press
         <F2>. This will bring up the Company Menu, now press <F6>. A
         box will appear with details of the company selected. Make any
         changes required then press <F2> to save or <Esc> to back out
         without saving.

                           ***************************

         COMPANY DATABASE, SEARCHING

         The Company database can be searched in either Company name or
         Category order.

         To search for a category press <F12>. If you do not have an
         extended keyboard press <Ctrl><F2>. Select the category you

                                     PAGE 8


                               SECTION TWO



         want to look at and press <Enter>.

         To search for a company name press <F11>. If you do not have an
         extended keyboard press <Ctrl><F1>. Enter the company name you
         want to look at and press <Enter>.

         SEE ALSO Company Database, Browsing records

                           ***************************

         COMPANIES WITHOUT CONTACTS

         If at all possible, it is best to try and obtain at least one
         contact before sending any mail to a company. A fully
         personalized letter will nearly always be opened if only for
         curiosity sake.

         There will always be times when is not possible to obtain the
         required information. In this case, enter the company
         information in the company database, and in the contacts
         database, enter "Manager" in the Position field and in the
         salutation field, enter either "Sir" or "Sir/Madam".

         This should at least make any mail look presentable if you are
         using a standard form of letter. By filling in the Salutation
         field, you will not print any odd looking form letters with
         nothing after the "Dear".

         SEE ALSO Form Letters, Printing
                  Contacts without companies

                           ***************************

         CONTACT DATABASE, BROWSING RECORDS

         There are a number of ways to browse through the Contact
         records. You can use the Up or Down Keys to move to each
         separate record. You can use the PageUp and PageDown keys to
         move through the records a screenful at a time. You can use the
         <Ctrl><PageUp> keys to move to the first record or
         <Ctrl><PageDown> to the last record.

         You can also move sideways through the fields. Use the Right or
         Left key to move a field at a time. You can use the
         <Ctrl><Right> to move a screenful right at a time or
         <Ctrl><Left> to move a screenful left at a time.

         You can also move the fields into different order. To move a
         field right move the highlight bar to the field selected then
         press <F7>. To move a field left move the highlight bar to the
         field selected then press <F6>. You can also lock a field so
         that it always remains as the left most field on the screen. To
         do this first move to the field required then keep pressing
         <F6> until it is the first of all the fields. Then press <F8>.
         This can be repeated for any number of fields. To unlock the
         last field locked press <F9>.
                           ***************************

                                     PAGE 9


                               SECTION TWO




         CONTACT DATABASE, ADDING RECORD

         At the Company Search screen select the company you want to add
         contacts for, then press <F3>. The contacts screen will now
         appear. At the top of the screen the name of the company for
         which contacts are for will be shown. If there are no contacts
         for this company then a box will appear informing you that
         there are no contacts for the company selected. Press <Enter>
         to remove the box. Now press <F3> again. A box will appear.
         Enter contact details and press <F2> when complete to add the
         record or <Esc> to back out.
         If the contact is an employee of a large company with direct
         dialling facilities, add the direct dial number. You can then
         direct dial the contact.
         To add another contact for the company press <F3> again.

         SEE ALSO Contacts without companies
                  Companies without contacts
                  Phone Autodial, Company or contact
                           ***************************

         CONTACT DATABASE, DELETING RECORD

         At the Company Search screen select the company you want to
         delete the contact for, then press <F3>. The contacts screen
         will now appear. At the top of the screen the name of the
         company for which contacts are for will be shown. If there are
         no contacts for this company then a box will appear informing
         you that there are no contacts for the company selected. Press
         <Enter> to remove the box. Move to the contact to be deleted
         and press <F5>. A box will appear showing details of the
         contact selected. Towards the bottom of the screen another box
         will appear confirming that you want to delete that record. If
         you want to delete that contact press <Enter>, otherwise move
         the highlight to NO and press <Enter>.

                           ***************************

         CONTACT DATABASE, EDITING RECORD

         At the Contacts screen, select the contact you want to edit and
         press <F4>. A box will appear with details of the contact
         selected. Edit the details and press <F2> to save or <Esc> to
         back out.

                           ***************************

         CONTACTS WITHOUT COMPANIES

         If you have a data entry for a person which has no registered
         company then enter the Company field with Surname, First-name.
         e.g. 'Keir, Mr Ian'. Make sure that there is a comma between
         the Surname and First-name. When the form letter or label is
         printed out then the Surname, First-name will be reversed.



                                     PAGE 10


                               SECTION TWO



         You may add a record in the Contacts Database. If you do, leave
         the Title, First-name and Surname fields empty but fill in the
         Position and Salutation fields and optionally any of the other
         fields as required. If you do not fill in the Position field
         then when you press <F3> to go to the Contacts database, then
         nothing will be visible even though there is a record.

         By filling in the Salutation field, you will not print any odd
         looking form letters with nothing after the "Dear".

         SEE ALSO Company Database, Adding Record
                  Companies without contacts

                           ***************************

         DOS VERSION

         Contacts Unlimited requires DOS 3.3 or later in order to open
         all the files required. The DOS version is checked each time
         that Contacts Unlimited is started, and if the DOS version is
         less than 3.3 then an error message will appear.

                           ***************************

         FORM LETTERS, ADDING

         At the Company search screen press <F5>. A menu called Form
         Letters will now appear. Now press <F2>. A box will now appear
         asking for the letters description. Enter the letter's
         description and press <Enter>. Another box will now appear. Now
         enter details of the form letter.

         To add a field press <F9>. A box will appear with a list of
         field names. Press the first letter of the field name required.
         If there is more than one field name with the same first letter
         then keep pressing the first letter until the required field
         name is highlighted. Then press <Enter>. When the letter is
         complete, press <F8> to save the letter.

         If you want to have paragraphs within your form letter, then
         leave a blank line between paragraphs, otherwise when the
         letter is being formatted during printing, all the paragraphs
         will be merged into one.

         To proof a letter, select a company with at least one contact,
         select the contact. Press <F5> to bring up the Form Letter
         menu. Now press <F5>. Select 1. PRINT LETTER FOR SINGLE CONTACT
         and print out the letter.

         NOTE: If you change the date format after you have written some
         form letters which have the date included, then it will be
         necessary to change the date format in each letter.

         SEE ALSO Form Letters, Printing
                  Options, Setting Date

                           ***************************

                                     PAGE 11


                               SECTION TWO




         FORM LETTERS, DELETING

         At the Company search screen press <F5>. A menu called Form
         Letters will now appear. Now press <F4>. If there are no form
         letters then a box will appear informing you that there are no
         form letters otherwise a box will appear with a list of each of
         the letters description. Move the highlight bar to the letter
         to be deleted and press <Enter>. Another box will now appear
         asking you to confirm that you want to delete that letter.
         Answer Y or N.

                           ***************************

         FORM LETTERS, EDITING

         At the Company search screen press <F5>. A menu called Form
         Letters will now appear. Now press <F4>. If there are no form
         letters then a box will appear informing you that there are no
         form letters otherwise a box will appear with a list of each of
         the letters description. Move the highlight bar to the letter
         to be edited and press <Enter>. A box will appear with the
         letter to be edited. Edit the letter as required and press <F8>
         to save the changes or <Esc> to leave without saving the
         changes.

         NOTE: If you change the date format after you have written some
         form letters which have the date included, then it will be
         necessary to change the date format in each letter.

          SEE ALSO Options, Setting Date

                           ***************************

         FORM LETTERS, SETTING MARGINS

         You can change the margins from either the Company Search
         screen by pressing <F10> when the options menu box pops up and
         then selecting Change Margins, or by pressing <F5> when the
         Form Letters menu pops up and again selecting Change Margins by
         pressing <F6>.

         About the only time you would probably need to change the
         margins is when you are producing form letters for window faced
         envelopes and you need to change the margins so that the
         address is shown correctly in the window.

         SEE ALSO Form Letters, Printing

                           ***************************








                                     PAGE 12


                               SECTION TWO



         FORM LETTERS, PRINTING

         At the Company Search screen press <F5> which will bring up the
         Form Letters menu. Press <F5> again to select Print Form
         Letters. If there are no form letters then a message will
         appear informing you as such otherwise a list of form letters
         will appear. Select the form letter required and press <Enter>.

         Now select whether the printer will be using continuous or
         single sheets. Another menu will now appear. Select the type of
         letters you want to print.

         If you want to print to a single contact, then prior to
         selecting the Form Letters menu, you must select the contact
         you want send the letter to. If you fail to do this then an
         error message will appear informing you that no contact has
         been selected.

         If you select to print letters to a single company then you
         must select the company before you press <F5> at the Company
         Search screen.

         If you select to print letters for a category, then a box will
         appear with a list of categories. Select the category. Contacts
         Unlimited will then check to see if there are any companies
         within that category. If there are no companies within that
         category then an error message will appear informing you that
         there are no companies with that category.

         SEE ALSO Companies without contacts
                  Contacts without companies
                  Form Letters, Print Order
                  Form Letters, Setting Margins

                           ***************************

         FORM LETTERS, PRINT ORDER

         If you are printing letters for all companies, or you are
         printing letters for a category, then if you select company
         order then all letters will be printed in alphabetical company
         order, or if you can save money by presenting your mail in
         zipcode order then select zipcode order, in which case the
         letters are printed in zipcode order. Handy if you are using
         window-faced envelopes.

         SEE ALSO Form Letters, Printing

                           ***************************

         LABELS, PRINTING

         At the Company Search screen press <F5> which will bring up the
         Form Letters menu. Press <F7> again to select Print Labels. A
         menu will now appear asking what type of label you want to
         print. NOTE: With this version of Contacts Unlimited you can
         only print one across labels.

                                     PAGE 13


                               SECTION TWO




         If you select PRINT ENVELOPE then you be asked if you to print
         on a DL or C4 (A4 size) envelope. If you want to print to a
         single contact, then prior to selecting the Form Letters menu,
         you must select the contact you want send the label to. If you
         fail to do this then an error message will appear informing you
         that no contact has been selected.

         If you select to print labels to a single company then you must
         select the company before you press <F5> at the Company Search
         screen.

         If you select to print labels for a category, then a box will
         appear with a list of categories. Select the category. Contacts
         Unlimited will then check to see if there are any companies
         within that category. If there are no companies within that
         category then an error message will appear informing you that
         there are no companies with that category.

         SEE ALSO Labels, Print Order

                           ***************************

         LABELS, PRINT ORDER

         If you are printing labels for all companies, or you if are
         printing labels for a category, then if you select company
         order then all labels will be printed in alphabetical company
         order, or if you can save money by presenting your mail in
         zipcode order then select zipcode order, in which case the
         labels will be printed in zipcode order.

         SEE ALSO Labels, Print Printing

                           ***************************

         OPTIONS, SETTING DATE

         The default date format is U.S. (m/d/y). If you are using
         Contacts Unlimited outside of the United States then you may
         need to change the date format to British (d/m/y). At the
         Company Search screen press <F10>. The options menu will now
         appear. Select Set Date. Now select date format required. After
         selecting the date format, a message will appear informing you
         that Contacts Unlimited will now restart.

         NOTE: If you change the date format after you have written some
         form letters which have the date included, then it will be
         necessary to change the date format in each letter.

         SEE ALSO Form Letters, Adding
                  Form Letters, Editing
                  Form Letters, Printing
                  Form Letters, Setting Margins

                           ***************************


                                     PAGE 14


                               SECTION TWO



         PHONE, AUTODIAL COMPANY OR CONTACT

         If you have an autodial modem connected to your computer, then
         you can either phone a company or direct dial a contact from
         within Contacts Unlimited.

         To phone a company, at the Company Search screen, select the
         company you want to phone, press <F3> to bring up the Contacts
         screen, then press <F10>. Now select '1. Phone Company'.
         Contacts Unlimited will now phone the company selected. After
         the phone has started to ring, press <Enter> to disconnect
         modem.

         To phone a contact, at the Company Search screen, select
         the company the contact works for, press <F3> to bring up the
         Contacts screen. Now select the contact, then press <F10>. Now
         select '2. Direct dial Contact.' Contacts Unlimited will now
         phone the contact selected. After the phone has started to
         ring, press <Enter> to disconnect modem.

         SEE ALSO Company Database, Adding Record
                  Phone, Setting Parameters
                  Contact Database, Adding Record

                           ***************************

         PHONE, SETTING PARAMETERS

         There is an option to change the modem parameters if required.
         Normally this should not be necessary unless you are having
         some problems with your modem. At the Company Search screen
         press <F10>. The options menu will now appear. Select Modem
         Defaults. A box will now appear with the following details:

         Which Serial Port?
         The default is 1. If you have the modem connected to the second
         serial port then you will need to change this to 2.

         Modem Speaker on?
         The default is Y. If the modem speaker is annoying other people
         in the room then you can turn the modem off by selecting N.

         Pulse or Tone dial?
         The default is P. You will only need to change this if the
         exchange your phone is connected to does not support pulse
         dialling.

         Time Delay 1/2/3
         The default is 1. You will only need to change this if you are
         using a slow telephone system and you are having trouble making
         connections.

         SEE ALSO Phone, Autodial Company

                           ***************************



                                     PAGE 15


                               SECTION TWO



          About Context-Sensitive Help    6
          Categories, Updating    6
          Category, Selecting    6
          Companies without contacts    9
          Company Database, Adding Record    7
          Company Database, Browsing Records    7
          Company Database, Changing Indexes    8
          Company Database, Deleting Record    8
          Company Database, Editing Record    8
          Company Database, Searching    8
          Contact Database, Adding Record    10
          Contact Database, Browsing records    9
          Contact Database, Deleting Record    10
          Contacts without companies    10
          DOS Version    12
          Disclaimer    1
          Form Letters, Adding    12
          Form Letters, Deleting    13
          Form Letters, Editing    13
          Form Letters, Print Order    14
          Form Letters, Printing    14
          Form Letters, Setting Margins    13
          Installation    4
          Installing and Settiny Up Contacts Unlimited    4
          Labels, Print Order    15
          Labels, Printing    14
          Licence    1
          Main Features    4
          Options, Setting Date    15
          Phone, Autodial company    16
          Phone, Setting Parameters    16
          Registration    1
          Setting Date Format    5
          Setting up Categories    5
          Starting up Contacts Unlimited    5























                                     PAGE 16



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3341

     Volume in drive A has no label
     Directory of A:\

    CUSARC1  EXE      5622   7-08-92   4:58p
    CUSARC3  EXE     10173   7-21-92  10:18a
    CUSARC2  EXE    197511   7-25-92   3:52p
    INSTCU   EXE     46080   7-21-92  10:52a
    INSTALL  BAT       423   7-10-92   5:32p
    GETSTART TXT      7443   7-23-92  11:36a
    ASK      COM      1024   1-16-85   2:26p
    ASK      DOC      2048   1-16-85   2:30p
    ORDER    FRM      3965   7-15-92   4:50p
    MANUAL   BAT        47   7-21-92  10:10a
    MANUAL   CVR      3914   7-21-92  10:11a
    MANUAL   DOC     41704   7-31-92   9:39a
    FEATURES TXT      2067   7-25-92  10:39a
    FILES    TXT      1473   7-31-92  10:41a
    GO       BAT        32   1-28-93   6:20a
    SHOW     EXE      2040   9-12-88  10:48a
           16 file(s)     325566 bytes
                           30720 bytes free
