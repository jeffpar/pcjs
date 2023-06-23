---
layout: page
title: "PC-SIG Diskette Library (Disk #3453)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3453/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3453"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## USER.DOC

{% raw %}
```








           





                                        SPORT 


                        WIDE AREA INFORMATION TRANSFER SYSTEM

                              REMOTE RESOURCE MANAGEMENT



                                     USERS GUIDE

            
                                     Version 1.50

                                  September 1, 1992

                                    Documentation:

                         (c) 1989, 1992 Augustine Associates,
                                 All Rights Reserved

                                      Software:

                        (c) 1989, 1992 Satore Center Software
                                 All Rights Reserved


























                    Welcome  to the  SPORT Wide  Area  Information Transfer
                    System. It  is our purpose to  provide a sophisticated,
                    automated  and  low  cost method  of  communication  to
                    people and organizations that need to easily access and
                    share information using personal computers. 




                         "Our own  success, to be real,  must contribute to
                         the successes of others." Eleanor Roosevelt 








             [I] TABLE OF CONTENTS
                  =================

          [I] TABLE OF CONTENTS . . . . . . . . . . . . . . . . . . . .   3

          [II] OVERVIEW . . . . . . . . . . . . . . . . . . . . . . . .   5

          [III] ABOUT W.A.I.T.S.  . . . . . . . . . . . . . . . . . . .   6

          [IV] SUMMARY OF SPORT FUNCTIONS . . . . . . . . . . . . . . .   7

          [V] REGISTRATION  . . . . . . . . . . . . . . . . . . . . . .   8

          [VI] SUPPORT  . . . . . . . . . . . . . . . . . . . . . . . .   9

          [VII] CUSTOM SERVICE  . . . . . . . . . . . . . . . . . . . .   9

          [VIII] LEGAL NOTICE . . . . . . . . . . . . . . . . . . . . .   9

          [1]  GETTING STARTED  . . . . . . . . . . . . . . . . . . .    10
               [1.1] SYSTEM REQUIREMENTS  . . . . . . . . . . . . . .    10
               [1.2] SYSTEM ENVIRONMENT . . . . . . . . . . . . . . .    10
               [1.3] SECURITY . . . . . . . . . . . . . . . . . . . .    11

          [2] INSTALLING SPORT  . . . . . . . . . . . . . . . . . . .    12
               [2.1] INSTALLATION . . . . . . . . . . . . . . . . . .    12
               [2.2] RUNNING SPORT  . . . . . . . . . . . . . . . . .    12
               [2.3] PORTS AND MODEMS   . . . . . . . . . . . . . . .    13
               [2.4] COMMAND LINE ARGUMENTS . . . . . . . . . . . . .    14
               [2.5] PHONE INDEX LIST . . . . . . . . . . . . . . . .    14
               [2.6] ADVANCED CONFIGURATION . . . . . . . . . . . . .    15

          [3] SENDING MAIL  . . . . . . . . . . . . . . . . . . . . .    16
               [3.1] THE MAIL MENU  . . . . . . . . . . . . . . . . .    16
               [3.2] CREATING MAIL  . . . . . . . . . . . . . . . . .    16
               [3.3] THE FULL SCREEN EDITOR . . . . . . . . . . . . .    17
               [3.4] CUSTOMIZED MESSAGE HEADER  . . . . . . . . . . .    18
               [3.5] ENTERING A MESSAGE . . . . . . . . . . . . . . .    18
               [3.6] ATTACHING FILES  . . . . . . . . . . . . . . . .    19
               [3.7] APPENDING MESSAGES . . . . . . . . . . . . . . .    19
               [3.8] POLLS  . . . . . . . . . . . . . . . . . . . . .    19
               [3.9] DELETING OUTGOING MESSAGES . . . . . . . . . . .    19
               [3.10] THE PERSONAL MEMO . . . . . . . . . . . . . . .    20

          [4] RECEIVING MAIL  . . . . . . . . . . . . . . . . . . . .    20
               [4.1] RECEIVING MESSAGES . . . . . . . . . . . . . . .    20
               [4.2] RECEIVING FILES  . . . . . . . . . . . . . . . .    21
               [4.3] THE LIBRARY  . . . . . . . . . . . . . . . . . .    21
               [4.4] READING MESSAGES . . . . . . . . . . . . . . . .    22
               [4.5] LIBRARY ARCHIVING  . . . . . . . . . . . . . . .    23
               [4.6] MULTI-MEDIA MESSAGING  . . . . . . . . . . . . .    24

          SPORT - Introduction                                       Page 3







               [4.7] BULLETIN BOARD PACKAGES  . . . . . . . . . . . .    24

          [5] SPORT UTILITIES . . . . . . . . . . . . . . . . . . . .    24
               [5.1] THE UTILITIES MENU . . . . . . . . . . . . . . .    24
               [5.2] FILE REQUESTING  . . . . . . . . . . . . . . . .    26
               [5.3] MAIL UTILITIES . . . . . . . . . . . . . . . . .    27
               [5.4] EXTENDED MAIL  . . . . . . . . . . . . . . . . .    28
               [5.5] COMPRESSING MAIL . . . . . . . . . . . . . . . .    28

          [6] OPERATING SPORT AS A TERMINAL . . . . . . . . . . . . .    28
               [6.1] THE TERMINAL MENU  . . . . . . . . . . . . . . .    28
               [6.2] DIALING A NUMBER . . . . . . . . . . . . . . . .    30
               [6.3] UP AND DOWNLOADING . . . . . . . . . . . . . . .    30
               [6.4] SCRIPTS  . . . . . . . . . . . . . . . . . . . .    30
               [6.5] MACROS . . . . . . . . . . . . . . . . . . . . .    31

          [7] BEING A HOST  . . . . . . . . . . . . . . . . . . . . .    31
               [7.1] REMOTE MAIL  . . . . . . . . . . . . . . . . . .    32
               [7.2] REMOTE SERVICES  . . . . . . . . . . . . . . . .    32
               [7.3] SUBSYSTEMS . . . . . . . . . . . . . . . . . . .    33
               [7.4] REMOTE ACCESS  . . . . . . . . . . . . . . . . .    34

          [8] MANAGING YOUR SYSTEM  . . . . . . . . . . . . . . . . .    34
               [8.1] THE SYSTEM ADMINISTRATOR . . . . . . . . . . . .    35
               [8.2] GRAPHIC SYSTEM REPORTING . . . . . . . . . . . .    35
               [8.3] POSTMAIL PROCESSING  . . . . . . . . . . . . . .    35
               [8.4] CREATING EVENTS  . . . . . . . . . . . . . . . .    36
               [8.5] ROUTING MAIL . . . . . . . . . . . . . . . . . .    36
               [8.6] CONFERENCING . . . . . . . . . . . . . . . . . .    37
               [8.7] SPECIAL SESSION INTERFACE SUPPORT  . . . . . . .    37
               [8.8] INTERMITTENT COMMAND PROCESSING  . . . . . . . .    37

          [9] MORE USEFUL INFORMATION . . . . . . . . . . . . . . . .    37
               [9.1] DEFINITIONS OF FILE EXTENSIONS . . . . . . . . .    37
               [9.2] MORE ON ADDRESSING . . . . . . . . . . . . . . .    38
               [9.3] PORT AND MODEM PROBLEMS  . . . . . . . . . . . .    40
               [9.4] MODEM INSTALLATION CHECKLIST . . . . . . . . . .    42

          [10] TROUBLESHOOTING  . . . . . . . . . . . . . . . . . . .    45
               [10.1] INSTALLATION  . . . . . . . . . . . . . . . . .    45
               [10.2] THE FULL-SCREEN EDITOR  . . . . . . . . . . . .    46
               [10.3] MAIL AND MESSAGES . . . . . . . . . . . . . . .    46
               [10.4] TERMINAL MODE . . . . . . . . . . . . . . . . .    47
               [10.5] TSR's . . . . . . . . . . . . . . . . . . . . .    48
               [10.6] SPORT AND DESQVIEW  . . . . . . . . . . . . . .    48

          INDEX . . . . . . . . . . . . . . . . . . . . . . . . . . .    50






          SPORT - Introduction                                       Page 4









          [II] OVERVIEW
               ========

          The  SPORT  software  package is  designed  to  serve  people who
          interact collaboratively in more than one location. 

          SPORT is  a Wide Area  Information Transfer  and Remote  Resource
          Management System which provides instantaneous, unattended direct
          transmission of messages, files and instructions between Personal
          Computers via modems and phone lines.

          SPORT may  be run in the  background under Windows 3.1  and other
          Multi-Tasking Programs.

          SPORT includes both mail and terminal capabilities, as well as an
          enhanced capacity to remotely manage computer system resources.

          You  can use  SPORT almost  immediately and,  as you  become more
          experienced, you can enjoy its many advanced features.

          SPORT  is designed  to be  configured by  users to  reflect their
          needs.  The  program  support  files  are  written  in  ASCII,  a
          universal text format, which means they can be edited by any text
          editor and most word processors. 

          The  documentation is divided into a Users Guide and an Operators
          Manual,  so you  can  easily  set up  and  use SPORT,  and  later
          customize its features as you need them. The Users Guide contains
          information for getting started and understanding SPORT. With it,
          you  can get  SPORT up  and running  and be  able to  explore and
          experiment with the program. You will  get a sense of what it can
          do for your organization. You will be able to set up your private
          network.

          The  Operators  Manual  is  available  to  registered  users  and
          contains more complete and technical information, which will help
          users  and  Systems   Operators  take  full   advantage  of   the
          capabilities of SPORT. It  is assumed that you have  a functional
          SPORT system and you need to know  how to set up and use its many
          features. 

          The  manual will help users who are  in charge of a SPORT network
          and  want  help  in  efficiently  setting  up,  fine  tuning  and
          enhancing the  whole  system,  both  on  site  and  remotely.  It
          contains information about interfacing SPORT with an existing  or
          proposed LAN system. 





          SPORT - Introduction                                       Page 5





















          [III] ABOUT W.A.I.T.S. 
                ================

               "WAITS programs  use PC's  to  move files  economically  and
               efficiently between PC's and LANs. 

               Automated, unattended operation is key to the WAITS concept.
               PCs  running  WAITS software  contact  each  other and  move
               information at scheduled times...or  simply move files  when
               they are ready.  They connect over  dial-up telephone  lines
               because  they don't need high  data rates, but  they can use
               any interconnecting circuits.

               WAITS products can solve...communications problems  for many
               people who  only  need  to move  files  between  (PC's  and)
               networks and don't need  more sophisticated computing  tasks
               involving  multiple layers of  protocols. These products are
               inexpensive  to  install and  invisible  to  the people  who
               benefit  from receiving  the latest  updated data  with very
               little fuss or recurring expense."

          Derfler,  Frank J., Jr. PC Magazine  Guide to Connectivity, P.333
          Ziff-Davis Press, 1992 
















          SPORT - Introduction                                       Page 6







          [IV] SUMMARY OF SPORT FUNCTIONS
               ==========================
          Mail - Messages to one or many recipients.

          Mail with File(s) Attached - Any kind of files may be sent.

          Automatic File Requesting -  A line within a message  that causes
          files to be received from the target system in the same session.

          Mass Mail - Have one or many lists for mass mailings.

          Routing - Ability to automatically route incoming mail.

          Mail Compression - Ability to automatically pack and unpack files
          before sending and after receipt.

          SPORT News -  Ability to have important  information displayed on
          the screen of receiving systems.

          Remote Programming  - A line within a message triggers activities
          on the target system.

          Event Scheduling - Ability to designate multiple daily  or weekly
          SPORT or DOS events. 

          Conferencing - Ability to design automatic conferences so mail is
          circulated according to planned topography.

          Library  Management -  Ability to  maintain a number  of separate
          mail  libraries. Send  messages to  specific libraries  on target
          system.

          Mail Special Session  Interface Support - Ability to  receive and
          send mail to/from other mail programs.

          Intermittent Command Processing -  Ability to process commands in
          the background.

          Subsystems - Allow callers access to one or two subsystems.

          LAN Compatibility - Interfaces with Local Area Networks. 

          Remote  Mail -  Ability  to access  mail  functions on  a  remote
          system.

          Remote Services - Pre-programmed remote services for callers.

          Special Session Interface  Support - Ability to  use passwords to
          access various levels and functions.

          Remote  BBS - Ability to  send entire package  of information and
          executable files programmed for a target system.   

          SPORT - Introduction                                       Page 7








          [V] REGISTRATION
              ============

          The distribution version of the SPORT program has  a registration
          number  0000000.  This  version  is fully  operational  and  full
          featured and will exchange  mail with ANY other SPORT  system, as
          well  as function  as a  terminal. Upon  quitting the  program, a
          screen is displayed requesting that you register.
           
          We will provide registered keys for SPORT that will have a unique
          registration number and will not have the screen. 

          Any uniquely registered SPORT system will exchange mail  with any
          other SPORT system except one with the same registration number. 

          An initial registration package contains  two keys, and a printed
          and  bound Users Guide  and Operators Manual.  This package costs
          $60.  Additional keys  are $8. Additional  Users Guides  are $12,
          additional Operators Manuals are $18.

          Send  registration  requests  to Augustine  Associates,  67  Wool
          Street, San Francisco,  CA 94110. You may obtain  as many keys as
          you  need. A registration request for 10 keys, for example, would
          be $60 for the initial package and $64 for eight extra keys. 


          With your request please provide:

          Name, Address, City, State, Zip and Phone Number. 

          Additional information or comments would be appreciated.

          When we  have all the required  information we will mail  you a 5
          1/4" disk (or a 3 1/2" disk if requested) with your personal keys
          and the documentation. You may request the  Operators Manual also
          in ASCII format file if that is helpful to you.  

          Keys are  contained in a  small program  in the form  of a  self-
          extracting archive. EACH  KEY IS  UNIQUE. Once the  key has  been
          applied to your copy  of SPORT becomes registered. You  only need
          to  do this  once. Any  updated versions  of SPORT  that you  may
          obtain will be automatically registered.

          Let us  know if you are  interested in being in  touch with other
          SPORT  users.  Distribution arrangements  and  site licenses  are
          available. 






          SPORT - Introduction                                       Page 8







          [VI] SUPPORT
               =======

          Installation and general support  by SPORT Mail is  available for
          registered users from  Augustine Associates. Net/Node 5210/10  in
          415 Area Code or 5210/20 outside the 415 area code. The data line
          phone number is (415) 648-8120. If you are requesting a response,
          you should poll back in two or three days to receive your answer.
          Voice support will be provided Mondays, Wednesday and Thursdays 7
          to 10 PM and on Saturdays 10AM to 1 PM (Pacific Standard Time). 
          You  may also  contact Bob  Ernstthal of Augustine  Associates on
          CompuServe, 70323,3003.


          [VII] CUSTOM SERVICE
                ==============

          SPORT is designed to interconnect people and to be easy to set up
          and run.  Like any networking system, setting  up maintaining and
          enhancing your network can  be a daunting task. Since  we believe
          that  much  computer  knowlege  is part  of  an  oral  tradition,
          Augustine Associates offers custom installations and maintenance,
          either  on-site or remotely. We also  offer training sessions for
          your  work   group.  Please  call  (415)   285-7064  for  further
          information.


          [VIII] LEGAL NOTICE
                 ============

          The  SPORT  Wide Area  Information  Transfer System  (c)  and its
          utilities from Satore Center Software are provided as is, with no
          warranty of any kind, either expressed or implied. 

          Under no circumstances will  Satore Center Software, or Augustine
          Associates, be liable to you or anyone else for any damages, lost
          profits, savings or data in any  form or for any other incidental
          or consequential damages arising  out of the use or  inability to
          use this program and system.

          All Satore Center Software, and Augustine Associates products are
          copywritten.  SPORT is neither in the Public Domain nor Freeware,
          but is Shareware, and we ask users to register. 










          SPORT - Introduction                                       Page 9







          [1]  GETTING STARTED
               

          [1.1] SYSTEM REQUIREMENTS
                ===================
           
                  An IBM compatible computer with 384K RAM.
           
                  A hard disk.

                  A modem with the  Hayes compatible instruction set and  a
          true modem cable.

                  SPORT supports a wide variety of display systems.



          [1.2] SYSTEM ENVIRONMENT
                ==================

          The Path
          --------

          The SPORT  installation process  will automatically  create three
          subdirectories:  \SPORT,  \SPORT\INCOMING  and   \SPORT\DOCS.  We
          recommend that  the \SPORT subdirectory  should be on  your PATH.
          The  path is  declared in  your AUTOEXEC.BAT  file. See  your DOS
          manual. 

          The CONFIG.SYS file
          -------------------

          SPORT requires at least 20 files designated by the line 

          FILES=20

          in your CONFIG.SYS file. 

          Buffers should be set at least

          BUFFERS=8

          in your CONFIG.SYS file. 

          Disk Caching
          ------------

          If  your  are using  a  CACHE  it should  be  set  for 256,  320,
          384...the bigger your cache, the better for SPORT to run.




          SPORT - Getting Started                                   Page 10







          WINDOWS 3.1
          -----------

          SPORT works well in the Multi-Tasking environment of Windows 3.1.
          This allows  you  to be  online at  all times  while using  other
          applications. The set up is simple and straightforward. 

          Choose  Text; KB  Required 384;  Execution -  Background; Display
          Usage - Windowed; Background Priority - 50; Foreground Priority -
          100. 

          Check  Detect Idle Time; Use High Memory Area; Emulate Text Mode.
          The other selections are not critical; you can use the defaults.

          TSR's
          -----

          Be alert to the possibility  that TSR's (RAM resident  programs),
          may  not  get along  well  with communications  programs.  If you
          should experience any system  problems, remove all TSR's and  try
          running SPORT  again. You may then add each TSR in turn until you
          can identify which  one is  causing the problem.  The guilty  TSR
          should be eliminated when you are running SPORT. 


          [1.3] SECURITY
                ========

          When  SPORT running,  your computer  is connected to  the outside
          world  via  your  modem.  The program  provides  a  selection  of
          security options that will help make your system secure. 

          For example, to prevent unauthorized outgoing calls, you may lock
          the Mailer Menu with Ctl L.  The password for this options is the
          one declared  for the Password  for Remote Access  (REMOTEPASS in
          your configuration file). Know your  password before you use  Ctl
          L!

          If you set  your system  for "CLOSEDSYSTEM", only  mail from  the
          systems  that are  included  in your  Phone  Index List  will  be
          accepted. 

          You may easily  run the  "anti-virus" utility of  your choice  on
          incoming material as part of your postmail processing procedures.
          [See Page 35].
           
          Many  other security features are  covered in more  detail in the
          Operators Manual.





          SPORT - Getting Started                                   Page 11







          [2] INSTALLING SPORT 

          [2.1] INSTALLATION
                ============

          If you have obtained SPORT as a single self-extracting archive on
          a single  high  density  disk, place  SPORTnnn.EXE  (nnn  is  the
          version number) in the root directory  of the drive on which  you
          want to install SPORT, type SPORTnnn and follow the instructions.

          If you  have obtained SPORT  in a three  or four disk  set, place
          disk   #1  in  drive  A:  and  follow  the  instructions  in  the
          "README.DOC" file.

          If you have  obtained SPORT in a three or  four compressed files,
          unpack  the files into a subdirectory named \SPORT and and follow
          the instructions in the "README.DOC" file.

          As  a  service to  users who  are  upgrading from  previous SPORT
          versions.  During reinstallation,  all  configuration, batch  and
          control files will be saved and you will be asked if you want  to
          restore them. 

          The  SPORT  installation  process  explains your  choices  as  it
          proceeds. Don't be too concerned about making the correct choices
          for every item, all choices may be modified at any time. 

                      
          [2.2] RUNNING SPORT
                =============

          After you have installed  SPORT, you will have a batch  file made
          for you called "RUNSPORT.BAT". Type 

                                       RUNSPORT

          at the prompt and you  are ready to go. You may use  command line
          arguments if you wish. [See Page 14]. Use Alt H for help. 

          A log file, called SPORT.LOG will record your SPORT activity. You
          may view the log by using Ctl E from the Mailer Menu. At midnight
          every day, or  when you run the Housekeeping function,  a new log
          will be started and the old log saved and named for the date. The
          end of the log will provide a summary of the days' activity. 

          You will have to manage or delete old log files because they will
          accumulate on your system.

          You  can  edit  the  RUNSPORT batch  file  to  add  a  variety of
          functions  to  customize  and   enhance  your  system.  They  are
          described  more fully  in the  file itself  and in  the Operators
          Manual.

          SPORT - Installation                                      Page 12








          [2.3] PORTS AND MODEMS 
                ================
          Most users install SPORT, then run  and see a stable Main Screen.
          They can  then begin to set  up their Phone Index  List [See Page
          14], try the Terminal Mode, make and send mail, etc. 

          However, if your system does not initialize right away, and drops
          back to DOS  with an error message, you are  probably having port
          or modem initialization problems. You should invoke SPORT in  the
          test mode using
           
                                      RUNSPORT X

          This will run  SPORT in the test mode without  accessing the port
          or modem and allow you  to edit the configuration file. When  you
          want to try the program "online", don't use the X anymore. In the
          program, use U)tility ConfiGure to edit the configuration file.

          All SPORT activity is recorded in an ASCII file called SPORT.LOG.
          This is where you will find information about what has occured on
          your system, and  hints as to  what may be  going wrong. You  can
          read it using Ctl E or the DOS "TYPE" command.

          PORT PROBLEMS
          -------------

          During the first  part of  the installation process  you will  be
          asked which port your  modem is connected to. If  you don't know,
          you  can  guess,  but  if  SPORT cannot  find  the  modem  on the
          designated  port, it  will be  unable to  run. You  will have  to
          choose another port. Port problems are explained more on fully at
          the end of this Users Guide. [See Page 45].


          MODEM PROBLEMS
          --------------

          During the last part of the the installation process, you will be
          asked to select the modem you are using. If the  exact model that
          you have does not appear on the list, first try choosing a "Hayes
          type"  with  the  appropriate  baud  rate  and  if  this  is  not
          satisfactory, choose the SPORT default.  

               Programs that use communications  in an unattended mode need
               to have  modems respond  to  the software  very exactly  and
               reliably. There are a  wide variety of modems and  many have
               unique requirements. We  have made every effort  to cover as
               many brands of modems as we could. If you have  a true Hayes
               compatible  modem, you should not  need to do  more than the
               installation  procedure to  have it  configured to  run with
               SPORT. 

          SPORT - Installation                                      Page 13







          A majority of  systems will  have no modem  problems with  SPORT.
          There is  alot more information about modem installation later in
          this guide. [See Page 40].



          [2.4] COMMAND LINE ARGUMENTS
                ======================

          During installation, a batch  file called RUNSPORT.BAT is created
          for you. To run the program, type RUNSPORT at the system prompt. 

          You  may use command line  arguments (also known  as command line
          parameters  or switches;  they  are letters,  numbers or  symbols
          typed  one space  after RUNSPORT  that  change the  monitor type,
          display characteristics  and functioning of the  program. You may
          edit RUNSPORT.BAT to add arguments  permanently. Where and how to
          do this is indicated in the file. 

          SPORT  uses a variety of command line arguments, for example, you
          may use RUNSPORT X as mentioned above, to run the program without
          accessing the  modem (this is  very handy during set  up); or use
          RUNSPORT B to run the program with screen blanking on, (this is a
          justifiably  popular feature)  or use  RUNSPORT  W to  display an
          abbreviated 6  line informational  window. A detailed  listing of
          the command line arguments is provided in the Operators Manual.


          [2.5] PHONE INDEX LIST
                ================

          You should set up  your Phone Index List using U)tilities  X Edit
          Phone List  or U)tilities  U)tility Menu IndeX  Manager from  the
          Main Screen. The  utility (called SPORTID)  that helps you  build
          your list will offer you  a series of questions relating  to each
          system you wish to contact. 

          [Note: If you are updating from an earlier version of SPORT, run 
          SPORTID C
          from the SPORT prompt one time only.]

          When  adding to  your  Phone Index  List,  there are  only  three
          choices which you  MUST make.  One is the  "Target System  Name":
          this  is the  Net/Node  number or  Alias for  the system  you are
          contacting. This can  be the phone number or  any other number or
          name that the target system calls itself. You must also enter the
          phone number and the  baud rate of the  receiving system. If  you
          are not  sure, you might choose  2400, which is very  common. You
          may want to enter something  as a comment, to help reference  the
          number for you. 

          All  other entries are for special services or functions, such as

          SPORT - Installation                                      Page 14







          cost reporting, you may just leave as they are and modify them at
          a later time.

          The SPORT  addressing system is designed  for utmost flexibility.
          You  may have  a  interconnected system  using  names only.  This
          subject is covered in the Operators Manual. 

          There  is more information on addressing in this guide. [See Page
          38].


          [2.6] ADVANCED CONFIGURATION 
                ======================

          You may  change and add  options to  your set-up at  any time  by
          choosing  the  Edit  CFG  (ConfiGuration file)  option  from  the
          U)tilities Menu.

          You will be editing a file called SFLASH.RAW and is  the basis of
          your system configuration.

          There   are  many  functions  of  SPORT  which  may  be  used  by
          uncommenting,  or editing out  the ! in  the left margin  next to
          keywords  in this file. It  is the characters  after the keywords
          that the program looks for as it operates. 

          You  may modify the  designation of  your FKeys  (function keys),
          aliases you would like to use, change and add passwords  and many
          other system  functions. As  you use  SPORT,  you will  certainly
          customize  this file. A full explanation of the custom options is
          included in the file itself and in the Operators Manual.

          If you choose to use your own text  editor from DOS to modify the
          SFLASH.RAW Configuration file, be sure to run SPREP to make these
          changes permanent and available to SPORT.

          The function of  SPREP is  to automatically make  the ASCII  file
          SFLASH.RAW become the encrypted file SFLASH.CFG. 

          The  encrypting is done for  security purposes. You  may save the
          readable configuration file  SFLASH.RAW containing passwords away
          from  your   system.  The  system  itself   reads  the  encrytped
          SFLASH.CFG file. 










          SPORT - Installation                                      Page 15







          [3] SENDING MAIL


          [3.1] THE MAIL MENU
                =============

          When  SPORT is  online, the  Main Screen  is displayed,  and your
          system is active,  ready to send and  receive mail or  calls from
          other systems. (Unless you have indicated that SPORT should never
          answer  the  phone. In  this case,  only  outbound calls  will be
          made.) 

          The Main Screen displays the mail in your library, its source and
          date and whether it  has been read or not. The bar across the top
          of this screen  contains pull-down menus. You may  select letters
          on the keyboard or a use a mouse to pull down the Mail, System or
          Utilities Menus. To return from the menus to the Main Screen, use
          Q,Alt Q or the right mouse button.

          You may choose a pull  down menu from the top bar, or, if you are
          using a mouse, you may  click on a message and read  that message
          immediately.

          The Main  Screen provides  options in four  areas; MAIL,  SYSTEM,
          UTILITIES and QUIT. 

          The lowest line on the screen will show a short definition of the
          option that is selected on any of the pull-down menus. 

          Hitting  Enter brings  up  a  pop-up  menu  that  shows  you  the
          "Immediate Commands" available.

          You may use a question  mark to view the complete status  of your
          system.

          To  access Mail  Options, use  M)ail. A  System Status  Screen is
          available  using "="  to  show you  an  overview of  your  system
          status.  This will show you all outgoing messages, how many times
          SPORT has attempted to send them, messages on hold and  that have
          gone BAD (have failed  to synch with the target  for any reason),
          as well as the contents of your incoming subdirectory.

          At the Main Screen, you may type Alt H for SPORT Online Help. For
          the  sake   of  saving  memory,   help  is  a   separate  module,
          SPORTHLP.EXE. You may therefore access help from the DOS prompt.


          [3.2] CREATING MAIL
                =============

          To create mail, use M)ail E)nter Message from the Main Screen.


          SPORT - Installation                                      Page 16







          Messages are referred  to as "Flash"  messages because they  were
          designed to  be like  cover letters, either  conveying reasonably
          short  amounts  of  information and/or  describing  the  attached
          material.  A  Flash Message  created  by the  built-in  editor is
          limited to 100 lines of text, including the header. 

          Flash  Messages are always created in flat ASCII, a standard text
          format, which allows for maximum flexibility. Any text editor and
          most  word processors will create  ASCII files. You  may use your
          favorite text editor with SPORT by using the keyword "EDITOR" and
          its full path and filename in the Configuration file.

          SPORT cycles through all outgoing mail and sends it on a constant
          basis  every  few  minutes.   If  a  piece  of  mail   cannot  be
          transmitted, SPORT  will send  another piece of  mail, until  all
          mail  has been sent. SPORT creates this automatic schedule on its
          own, without interaction  with the  user. Mail can  also be  sent
          immediately by using M)ail I)mmediately.

          The user may create his own schedule. Scheduled mail will be sent
          in the order  defined by the user.  See the Operators Manual  for
          more information on scheduling.  



          [3.3] THE FULL SCREEN EDITOR
                ======================

          During  installation, the  full-screen  text  editor SPORTEDT  is
          placed in  the SPORT  default directory  and becomes  the default
          editor. 

          However,  there is flexibility in  your choice of  editors. If an
          external  editor  is declared  in  your  Configuration File,  the
          external editor  will be used. If  you do not  select an external
          editor, and SPORTEDT.EXE is present in the  SPORT subdirectory it
          will  be used to make  messages.  If SPORTEDT is NOT present, the
          SPORT line editor will be used. 

          There is  a 100 line limit  to the editor. However,  you can also
          use this editor to edit most of the control files. If you want to
          edit SPORTEX.CTL, for example, simply type

          SPORTEDT SPORTEX.CTL

          from the SPORT system prompt.


          The header and  footer of messages  are automatically created  by
          SPORT and  should not be edited in  any way. The receiving system
          needs to have this information in a certain precise format.


          SPORT - Sending Mail                                      Page 17







          [3.4] CUSTOMIZED MESSAGE HEADER
                =========================

          Your installation creates  the file SFLASH.HDR  for you. It  will
          appear at the top of any message you write. You may  wish to edit
          this file to give your messages a more customized look.  This may
          be done from the system prompt typing

          SPORTEDT SFLASH.HDR      



          [3.5] ENTERING A MESSAGE
                ==================

          When  you use E)nter  Mail from  the SPORT  Mail Options  Menu to
          create mail, the first prompt you  will see as you begin to enter
          a message is:

          To:

          This can be ANYONE or ANYTHING. The "address" part of the message
          comes later. However if you type in "ALL", SPORT will expect this
          to be a "Mass Mail"  message which is discussed in  the Operators
          Manual.

          Next you will  be asked  for the subject,  for informational  and
          indexing  purposes. If you are using the default editor, you will
          be  asked if you want  to read a text file  into the message. You
          may  read any  ASCII document  into the  message.  If  you answer
          [Return] or N, you will start to write the body of the message.

          Now  you may type  in your message.  Your words will  wrap to the
          next  line automatically.  When  you are  finished entering  your
          message, use  Alt Q (Quit  and Save). If  you are using  your own
          text editor you have to save it now.

          After you have saved your message,  you will be asked if you want
          to  structure the  text. This  command allows  you reformat  your
          message. All lines that  do not begin with a colon (:), a bar (|)
          or  a preceding  carat  (>) which  denotes  a quotation  will  be
          reformated. You will  then be asked for the address  to which you
          want to send the message.

          If you enter a  question mark, you  will access your Phone  Index
          List to obtain  the address.  You may either  select the  address
          using "Q", or type the Net/Node  or Alias/ as the address for the
          message.





          SPORT - Sending Mail                                      Page 18







          [3.6] ATTACHING FILES
                ===============

          Any kind of files can be "attached"   to a Flash Message. You are
          prompted  for the  path and  name of  each of  the file(s)  to be
          attached after  you address the message.  Wildcards are accepted,
          but  SPORT will automatically limit  the number of attached files
          to 50.

          You may enter a question mark at the prompt and  select a file to
          attach from the display of the list of files on your system.


          [3.7] APPENDING MESSAGES
                 ==================

          Flash  Messages may be appended, one to another. When  creating a
          Flash Message to a system which already has a message waiting for
          it,  you are asked if the new message should O)verwrite (replace)
          the waiting message or if the  new message should be A)ppended to
          the  waiting message, or if  the old message  should be preserved
          and the new one be S)kipped. If you elect to  append the message,
          the system will send both messages. 

          Once  received,   a   combined   message   will   be   unappended
          automatically by the receiving system.


          [3.8] POLLS
                 =====
          Polls  are inquiries sent to  a target system,  asking "are there
          any  messages  or files  waiting for  me?"  If there  is anything
          waiting for you, it will be picked up. Polls will pick up pending
          messages,  messages on  hold and  messages which  have  failed to
          synch,  along with any attached files which are addressed to your
          Net/Node.

          You can initiate a Poll from the Mail Options Menu using P)oll or
          from the Utilities Menu using C)reate Poll. Simply enter the 
          address of the system you want to poll. SPORT will do the rest.


          [3.9] DELETING OUTGOING MESSAGES
                 ==========================

          It  was  a  conscious design  decision  not  to  have a  built-in
          deletion function  within SPORT. However, this may easily be done
          from DOS, through  a batch file designated on a  function key, or
          any other method that the user wishes. 

          To delete  an  outgoing  message  to  521010,  for  example,  the
          commands would be

          SPORT - Sending Mail                                      Page 19







          DEL 521010.FLS
          DEL 521010.FLO

          To delete an  outgoing message  on hold to  521010, the  commands
          would be 


          DEL 521010.HLO
          DEL 521010.FLO

          To delete  a message to 521010  that had gone BAD  [See Page 38],
          the commands would be

          DEL 521010.BAD
          DEL 521010.FLB


          [3.10] THE PERSONAL MEMO
                =================

          Using  Ctl O from  the Mailer Screen,  you can make  a message to
          yourself that will be  automatically placed in the  Library. Once
          in the Library,  the memo may be handled like  any other piece of
          mail.


          [4] RECEIVING MAIL


          [4.1] RECEIVING MESSAGES
                ==================

          You do NOT have to be present to  receive mail. You can leave the
          system  on for as long as you want, automatically accepting mail,
          then read through all the messages that have accumulated.

          If  incoming  Flash Messages  are  correctly  addressed, that  is
          addressed  to  your  Net/Node number  or  to  an  alias you  have
          declared,  they will  automatically be  moved into  your Library.
          Messages will be filed in the order received.

          If incoming  Flash messages are incorrectly  addressed, they will
          remain in your incoming area.

          SPORT  has the  ability to  provide a  wide variety  of optional,
          user-defined automatic processes.  As part of  receiving incoming
          material, SPORT checks for  any special instructions and for  any
          routing directions which  you have established. You  may also run
          virus checks and any number  of processes that you wish. You  may
          look  over the  RUNSPORT.BAT  file to  see  how to  insert  these
          commands.  A variety  of  "postmail" processing  instructions are
          described in detail in the Operators Manual.

          SPORT - Receiving Mail                                    Page 20








          [4.2] RECEIVING FILES
                ===============

          Often mail  comes with attached  files. These  files are  treated
          differently than the mail.

          Files will arrive in the incoming area, and will stay there until
          you do something with them. When the  default ZModem transmission
          is used, they will NOT be overwritten by a new incoming file with
          the same  name. Files with the same name will be renamed up to 10
          times. For example,  if a  file VERSION.TXT is  in your  incoming
          area,  the next  file that comes  in with  the same  name will be
          renamed VERSION.TX0, VERSION.TX1, VERSION.TX3...etc, by SPORT.

          If  there are certain  files you expect  to receive  on a regular
          basis, you may want to use  postmail processing to move them to a
          subdirectory where they CAN be overwritten. 

          If the sender selects YModem transmission, incoming files WILL be
          overwritten in the incoming area.

          The exception  to overwriting  is the special  SPORTNWS.TXT file,
          which is displayed  teletype style on the receiving  system. This
          file  can  be  created   using  Ctl  W  from  the   Mailer  Menu.
          SPORTNWS.TXT will  be overwritten in  the incoming area.  See the
          Operators Manual for an explanation of this interesting feature.

          [4.3] THE LIBRARY
                ===========

          The  Library is the repository of  messages received. The Library
          is accessed by using M)ail L)ibrary from the Main Screen. 

          Just  as "Flash" Messages were  designed as a  kind of electronic
          cover letter, so the SFlash Library was designed as an in-basket,
          and not to become a permanent  repository of mail. It is designed
          to keep  a  maximum of  100 messages.  If more  than 96  messages
          arrive in your Library, all  messages will automatically be saved
          to a file called OVERFLOW.LIB. 

          You just  have to use  the SPORTLIB  R utility to  retrieve these
          saved  messages. There are ways to keep your Library cleaned out.
          The  SPORTLIB(rary)  and   SPORTARC(hiving)  utilities  that  are
          provided  with SPORT  should take  care of  most of  your Library
          maintenance needs. 

          You  will find that periodic cleaning of the Library is something
          you will want to do.  You can directly access SPORTLIB using  the
          S)ave or G)etlib command  directly from the Library, or  from the
          Utilities Menu. You  can also  send messages with  flags in  them
          that will  cause them to be  copied to a specific  library on the

          SPORT - Receiving Mail                                    Page 21







          target system. There is more information on using SPORTLIB in the
          control file SPORTLIB.CTL and in the Operators Manual.


          [4.4] READING MESSAGES
                ================

          When  using the  Library  mode, the  last  message read  will  be
          accessed first. 

          The  Library screen tells you how  many messages you have in your
          Library and tells you which message you are currently reading. 

          After reading the message, you may press Enter to go to the next
          message.

          The available commands in the Library mode are:


          V =            The VERBOSE Mode which  shows the entire  message,
                         page by page.      

          I =            The  INDEX Mode  shows  you the  headings and  the
                         first lines of a message. [This is the default.]
                  
          T =            Table of Contents. This will show you the Table of
                         Contents of all messages  in the Library, with all
                         the  standard information  fields  (  From,  Date,
                         Subj...etc ) referenced.


          <^>Home End    The  Up Arrow and the  HOME key will  bring you to
                         the first message in your Library.
                    
                         The Down Arrow and  the END key will bring  you to
                         the highest numbered message in your Library.     
                                
                         The Left Arrow will  bring you to the next  lowest
                         message and the  Right Arrow will you  to the next
                         highest message.
              
          D)elete        Delete this message.

          E)cho          Send an "Echoback" message. This functions like  a
                         receipt.  A message  is automatically  created for
                         the  sending system, indicating that their message
                         has been received.

          F)rwd          This command will allow you to "forward" a copy of
                         this message to another destination. 

          G)etLib        Get messages  from another library which  has been

          SPORT - Receiving Mail                                    Page 22







                         created by SPORTLIB. [See Page 21]

          N)ew           Enter a new message.

          P)rint         Print this message to LPT1.

          R)eply         If  you want to reply to a message, using R brings
                         you to  the Enter a  Message Mode. The  subject is
                         automatically entered  as a reply  to the original
                         message and you will be asked if you want to quote
                         the original message in your reply.

          M)od           Modify an existing message.

          S)ave          Moves  the message  from  the  default Library  to
                         another Library created  by the SPORTLIB  Utility.
                         [See Page 21]. 

          O)pSys         This is  not shown, but exists for  the DOS shell.
                         Type "EXIT" to return to the program.

          #)             Go to message number "n".

          Q)uit          This will bring you back to the Mail Menu.


          Every  time you  change  the Library,  a  new table  of  contents
          ["TOC"] file will be written and the messages will be reordered. 


          [4.5] LIBRARY ARCHIVING
                =================

          The  library archiving utility, SPORTARC(hive),  may be run as an
          item from the SPORT Personal Menu or from DOS. 

          Running  SPORTARC will  automatically  MOVE all  messages  marked
          [READ] out of the main Library. It will  renumber the messages as
          1.MSG, 2.MSG...and place  them in a  \SPORT\ARCHIVE subdirectory.
          Thus you may  have a secondary  library with virtually  unlimited
          capacity.
           
          Running SPORTARC R will  do the same as SPORTARC, but  will allow
          you  to review, delete and  export archived messages  back to the
          primary  Library.  There are  various ways of  moving about among
          the archived messages.
           
          Running in SPORTARC  L, spawns SPORT in the Library  mode so that
          you have all regular SPORT message functions available.  




          SPORT - Receiving Mail                                    Page 23







          [4.6] MULTI-MEDIA MESSAGING
                =====================

          The SPORTMM  (Multi Media) utility creates  and reads Multi-Media
          Messages  using SPORT. With this utility  and SPORTPAC (the SPORT
          PACking utility) and the compression utility LHA.EXE(c), a widely
          available compression utility,  users may send  more than a  text
          message to  convey information to  the receiving system.  You may
          send text files, messages,  view screens or just about  any other
          type of information you choose so long as it is  capable of being
          displayed on the receiver's system.  

          Creating and sending such messages are  handled from within SPORT
          by attaching files. SPORTPAC, using a special flag, will compress
          the Multi-Media Message using LHA.EXE and  it will be sent on its
          way in the usual manner.

          [See  Page 28]. How  to set up  this function is  detailed in the
          Operators Manual.


          [4.7] BULLETIN BOARD PACKAGES
                =======================

          The  SPORT user has the  ability to prepare  and receive complete
          magazine like Bulletin Board informational packages. The packages
          have  the  file  extension   "SOS".  Running  SPORTBBS  from  the
          operating  system turns  the  SPORT  system  into a  kind  remote
          Bulletin Board,  capable of displaying information,  messages and
          files. 

          This topic is covered in the Operators Manual.


          [5] SPORT UTILITIES

          Utilities may be thought  of as small programs which  enhance the
          use of the main program. For example, you could simply use a text
          editor to create your event file, if you knew the  proper format.
          You  don't need  to  know the  format  that because  the  utility
          SPORTEVT.EXE helps you make your event file. SPORT  contains many
          such utilities and  can make use of many other  utilities you may
          have or  obtain, such as LIST  and WHERE. The easiest  way to use
          utilities is to designate an FKey for their use. [See Page 15].


          [5.1] THE UTILITIES MENU
                ==================

          This mode is accessed by pressing U)tility U)tility Menu from the
          Main Screen.


          SPORT - Receiving Mail                                    Page 24







          From  the Utility Menu you can perform several mail and operating
          system utility  functions, use the FKeys, and make notes directly
          into your log file. 

          The options are:


          -)   Hold ALL mail. Allows you to  put ALL outgoing mail on  hold
               to be  picked up by the  target systems, or sent  at a later
               time.

          +)   Unholds ALL mail. Allows  you to put all mail already  on   
               hold into a ready-to-send state.

          R)   Causes all  undeliverable Flash Messages to  be prepared for
               resending.

               This  has the effect of causing all messages which have gone
               "BAD", that is, have not been  able to synch properly with  
               their intended target, to be reset to sendable mail. Be sure
               to watch and/or know why the systems were not synching.

          D)   Display all outgoing Flash Messages. 

          U)   Runs SPORTU Utilities. [See Page 27].

          L)   Runs SPORTLIB  Library Utilities.  See the Operators  Manual
               and  the  SPORTLIB.CTL  file.  This is  different  than  the
               SPORTARC(chive) utility. [See Page 21].

          O)   This is a DOS shell function. 

          E)   Runs SPORTEVT Event Manager Utility. [See Page 36].

          X)   Edit your Phone Index List file. [See Page 14].

          G)   Edit your Configuration file. [See Page 15].

          C)   Create a poll. [See Page 19].

          P)   Delete all polls from the Library.

          N)   This will enter a note into your SPORT.LOG file. 

          AltH)Help. 

          Q)   Quit  will  return to  the Menu  from  which you  called the
               Utilities Menu.



               

          SPORT - Utilities                                         Page 25







          [5.2] FILE REQUESTING
                ===============

          There are several  ways to  retrieve files from  a remote  system
          using SPORT. File requesting  causes the file, if allowed  by the
          target system, to be sent back from the target system during your
          call.   Other methods of retrieving files are explained in detail
          in the Operators Manual.

          The simplest method to file request is to put the line

          REQUESTFILE [filename]

          against the left margin  of a message. The filename is simply the
          name of  the file you  wish to  receive. A file  request will  be
          created  automatically by SPORT and  sent along with the message.
          Remember that if  the word REQUESTFILE  is on the left  margin of
          any  message it  will  create a  file  request, even  if  you are
          F)orwarding a message. In a case like this, be sure to use R)eply
          instead.

          Another method is to create an ASCII file with the extension .REQ
          and  the  filename.  This  can  be  done  automatically from  the
          Utilities Menu using Utilities, using SPORTU G [address].  

          When you file  request, SPORT will automatically  return the file
          [NET/NODE].INF to  you  with the  status  of your  request,  e.g.
          whether  the requested file was  located or not  located. In this
          way  the caller can track  failed file requests.  The host system
          need do nothing to implement this  process. This file will be  in
          your inbound area.

          Files  which you  allow  to be  requested  from your  system  are
          designated as follows.

          For  a  file  to be  available,  the  host system  must  have the
          following entries in its CFG file.

          FILELIST [path\filename]
          MAXREQUEST n (how many files are allowed to be requested at one  
                       time).

          The file indicated after  the keyword FILELIST as [path\filename]
          must be an  ASCII file  that lists the  subdirectories which  are
          available for requesting, ending in a backslash. 

          For example the entry in the Configuration File might be

          FILELIST C:\SPORT\OKFILE.LST

          This file called OKFILE.LST and may contain one or two parts. One
          is a list of subdirectories from which files may be requested and

          SPORT - Utilities                                         Page 26







          two is the optional name of a ASCII file which contains a list of
          all available from your system. 
           
          For example, OKFILE.LST may look like this:

          C:\WP\DOCS\                <--area from which requesting allowed.
          C:\WP\INFO\                <--area from which requesting allowed.
          FILES C:\WP\AVAIL.LST      <--your list of available files.

          The last entry allows for a system to send a  file request simply
          called  FILES and  the file  C:\WP\AVAIL.LST will be  returned to
          them.  This ASCII file can contain whatever you want you consider
          appropriate. It can contain  information on your system,  what is
          available for requesting and/or any data you wish to publish. 


          [5.3] MAIL UTILITIES
                ==============

          The main mail utility is called  SPORTU, as in SPORT Utility. You
          may  invoke the SPORTU Utility  by entering U  from the Utilities
          Menu, by  designating SPORTU on  a FKey, or  by typing  SPORTU at
          your system prompt. The choices marked with an asterisk may be as
          events in the unattended mode with your events if desired.


            SPORTU A [FLS filename] ... add to an FLS/FLO file.
                                        This  is a  way to  add text  to an
                                        outgoing  message AND  add attached
                                        files.
          * SPORTU B [n]            ... sound bell for [n] seconds.
          * SPORTU D [n]            ... delay for [n] seconds.
          * SPORTU E POLL           ... delete polls from Library.
          * SPORTU F [filename]     ... show files, wildcards OK.
          * SPORTU G [address]      ... create a poll (w/file request).
          * SPORTU K [days_old]     ... delete messages [days_old].
          * SPORTU M                ... calculate call costs from SPORT.LOG
          * SPORTU P [address] (fn) ... to create a poll (w/file attach)
          * SPORTU U [filename]     ... unappend an appended Flash Message.
          * SPORTU - [address]      ... unsend a waiting Flash Message.    
                                        (may be "All").
          * SPORTU + [address]      ... resend waiting Flash Message.
                                        (may be "All").
          * SPORTU S CHECK          ... system check, can  be piped  (using
                                        >> filename).
          * SPORTU R [address] [to_name] [textfilename] for ROBOT Utility.







          SPORT - Utilities                                         Page 27







          [5.4] EXTENDED MAIL
                ============= 

          The SPORTEX  utility allows you to  distinguish between different
          callers  and  treat  them   differently.  It  allows  for  Remote
          Programming and is one of the most powerful features of SPORT. It
          is  outlined in the SPORTEX.CTL control file and explained in the
          Operators Manual.


          [5.5] COMPRESSING MAIL 
                ================

          The SPORTPAC Utility will be run if you add it in the appropriate
          place in  your  RUNSPORT.BAT  file  and  have  the  control  file
          SPORTPAC.CTL  in your default directory. You must have one or all
          of  four popular  compression utilities  on your  path. They  are
          PKZIP(c), LHARC(c) ARJ(c) and ARC(c). This utility  allows you to
          pack and  unpack pre-determined  pieces of incoming  and outgoing
          mail  and attached  files.  This  will  cut  down  the  size  and
          therefore the  time it takes  to send and  receive transmissions.
          See  SPORTPAC.CTL   file  and  the  Operators   Manual  for  more
          information.



          [6] OPERATING SPORT AS A TERMINAL
              
          Terminal  emulation allows your PC  to call and  connect with the
          world of telecommunications. Online services such as  CompuServe,
          world-wide networks  such as  Internet and local  bulletin boards
          may all be accessed using the SPORT terminal mode.

          [6.1] THE TERMINAL MENU
                =================

          The Terminal facility of SPORT allows your computer to emulate an
          ANSI  terminal. It  allows you  to get  files from  other systems
          (Downloading) and to send files to other systems (Uploading).

          Note for Compuserve users: When you up or download using the X or
          YModem protocols, SPORT will set your parameters to 8/N/1. 

          Therefore, the parameters on Compuserve  should be 8/N/1. You may
          see the initial logon questions in binary but that will clear up.
          You may  also use  7/E/1 and  temporarily change them  for up  or
          downloading.  

          Use S)ystem T)erminal from the Main Screen to  go to the Terminal
          Menu.

          At the top  of the screen are  the various Terminal  commands and

          SPORT - Utilities                                         Page 28







          the  keys to  use  them,  divided  into three  areas;  UTILITIES,
          COMMUNICATIONS and  OPTIONS. These are explained in detail in the
          Operators Manual.

          You can redisplay  the Terminal  Menu anytime you  are using  the
          Terminal Mode by hitting Alt T.

          Below the command list is a line describing "Current Settings:"

          The first data on the information line is:
           
                                     1/2400/n/8/1

          which represents:

                      port/baud rate/parity/word size/stop bits

          These may be changed at any time by using the ALT P command.


          The second item is:

                               "Echo ON" or "Echo OFF"

          This can be switched on and off using Alt E from the Terminal
          Menu.


          If you make a call and see everything double, turn Echo OFF.


          The third item is:

                         "Capture is ON" or "Capture is OFF"

          A "Capture" file is a file in which is saved the activity of your
          call for later examination, archiving or sending along to others.
          Chat sessions may also  be saved to a file. [See  Page 31].  When
          you turn the Capture file on, you will be asked to provide a name
          for  the file. You may turn a Capture file on (Alt C) or off (Alt
          F) anytime during  a call. The Capture file retains both text and
          ANSI graphics representation.


          In  the Terminal Mode, you may use Alternate FKey assignments for
          FKeys  1  through  9. This  feature  allows  you  to write  small
          "scripts"  to log  on  to  boards  and  services  with  a  single
          keystroke.
          They  may  be  listed  in  up  to  9  lines,  in   a  file  named
          SPORTERM.KEY. in the SPORT default directory. The contents of the
          respective lines will be sent to the modem. The limit on the line
          is 128 characters,  and the tilde (~) will represent a one second

          SPORT - Terminal Mode                                     Page 29







          delay, and the bar (|) will represent a carriage return. 

          [6.2] DIALING A NUMBER
                ================

          To  connect  to a  number in  your Phone  Index  List, go  to the
          Terminal Menu and use Alt D to start the dialing process.
          First you  will be asked  for the interval  at which you  want to
          redial in  case you are not connected the first time. If there is
          no connection made the first time, SPORT will keep dialing at the
          designated  interval. When  it  connects, the  console bell  will
          sound, to alert you to the connection.

          To  dial a number not in your  Phone Index List, turn the Echo On
          and send the appropriate commands directly to your modem.


          [6.3] UP AND DOWNLOADING
                ==================

          When you  access a remote system,  you will often want  to up and
          download files.

          Downloading  means transfering  files FROM  the remote  system TO
          your  system. Uploading  means  transfering files  TO the  remote
          system FROM your system.

          SPORT uses a ZModem protocol as well as XModem and  two varieties
          of  YModem. You must always use matching protocols on the sending
          and receiving systems. To  UPLOAD use the PgUP key.  To DOWNLOAD,
          use the PgDowm key.  You may integrate other protocols  into your
          SPORT system if you  want to. This is discussed in  the Operators
          Manual.


          [6.4] SCRIPTS 
                =======

          Scripts are used  to perform repetitive  communications functions
          like logging on to  online services or Bulletin Boards.  They can
          be quite  simple,  or  quite  complex. Using  a  certain  command
          structure,  you create a file which contains a series of commands
          which will execute when invoked. 
           
          Once  you know the sequence of required keystrokes, you can write
          your own scripts relatively simply. Scripts are fun to experiment
          with. 
            
          Script files are flat ASCII and must reside  in the SPORT default
          directory.  You may  name  them anything  you want,  however, the
          default  extension  is  .SCT.   If  you  always  use the  default
          extension then you won't have to specify the extension when using

          SPORT - Terminal Mode                                     Page 30







          Alt S (Run Script command) from the Terminal Menu or Shift @ from
          the Mail Menu. 
           
          Scripting commands  and detailed information is  available in the
          Operators Manual.


          [6.5] MACROS
                ======

          Similar to the SPORT  Scripts, SPORT supports macros. Macros  can
          be called up  in two ways: by  using CONTROL-R  from  the  Mailer
          Menu or by writing a special macro file called STARTUP.MAC in the
          SPORT  directory.    If this  latter  file  exists  in the  SPORT
          directory, SPORT will  run the macro before any  other processes.
          If  a macro is  requested from the keyboard  you will be prompted
          for the file name of the macro.  Each macro must bear a file name
          of  nnnnnnnn.MAC (the  ".MAC" is  required). The   macro  file is
          comprised of  single lines of ASCII macro  keywords,some of which
          stand alone, others which allow arguments.   

          The  keywords and the parameters of "macro making" are covered in
          the Operators Manual.



          [7] BEING A HOST
                         

          When  a  caller  at a  terminal  calls  your  system, SPORT  will
          recognize the  call as a human  caller, not mail, and  will greet
          the caller with the SPORT.BAN(ner) file. 

          All callers will first see the file SPORT.BAN. If the caller asks
          to Chat, the file SCHAT.BAN is displayed.

          A  default SPORT.BAN and SCHAT.BAN  are created for  you when you
          run the SPORT Installation utility.

          You  may want to edit these banner files personalize your system,
          but keep it short and simple, without graphics. 

          SPORT also provides callers the opportunity to leave a note. This
          is saved  for you in  a file called "SPORT.NOT".  You may prevent
          callers from leaving notes by using the keyword "NOTEOFF" in your
          CFG file.

          The  ability for a  caller to "Chat"  with you is  protected by a
          user-defined  password  and  operates  only  between   the  hours
          designated as "BELLON" and "BELLOFF" in your CFG file.

          Chatting is  a cross  between making a  phone call and  sending a

          SPORT - Terminal Mode                                     Page 31







          letter. Two systems are  connected and each person sees  what the
          other person is typing. Chat  sessions may be saved to  a capture
          file and reviewed offline. 

          The  ability to use any  SPORT remote capability  is optional and
          password  protected,  as is  the  ability  to  "drop" to  another
          subsystem  program like a Bulletin  Board. [See Page  33] and the
          Operators Manual. 



          [7.1] REMOTE MAIL
                ===========

          The  SPORTRM  Utility  allows you  to  log  in  to your  personal
          computer  from  a  remote  computer,  using  any   communications
          program, and both read and send mail from your own system. 

          SPORTRM provides two modes of operation: PUBLIC and PRIVATE. The
          PUBLIC mode of operation provides a way for callers to use SPORT
          Mail via SPORTRM without the system operator's concern for damage
          to his/her message library.

          [Note:  For installations  earlier than  1.40,  you will  need to
          modify  your  RUNSPORT.BAT file  to  use the  public  and private
          access modes.]

          An  example of the difference  between public and  private use is
          that the public user may NOT read a message beyond any line which
          contains the flag "[NOREMOTE]" in it. This allows the system
          operator to make private an entire message or portions of a      
          message.

          If you call in and type the "MAILPASS" password you have declared
          in  your CFG  file for remote  mail, you will  access the SPORTRM
          menu  in either the public or password protected private mode. It
          will  allow limited or unlimited access to read your through your
          library, and send mail and forward mail, as  well as attach files
          that  are on  your system. See  the Operators  Manual for  a more
          detailed explanation of the set up and use of SPORT Remote Mail. 



          [7.2] REMOTE SERVICES
                ===============

          The Sport Remote Services Utility is defined by the Operator, who
          edits  or  creates the  file  SPORTR.CTL,  in the  default  SPORT
          directory,  which  allows  up  to  twenty   separate  PRE-DEFINED
          operations to be performed.
               
          If  the caller  enters the  "REMOTEPASS" password  correctly, the

          SPORT - Terminal Mode                                     Page 32







          remote access submenu is displayed. This submenu is automatically
          generated by SPORT from the contents of SPORTR.CTL.

          In the command lines of the SPORTR.CTL file, you may enter any
          command  or  any  batch  process  that  DOES  NOT  require  human
          intervention.  If you want  to have automatic  up and downloading
          you need an external protocol.

          There  is  more information  in the  SPORTR.CTL  file and  in the
          Operators Manual.


          [7.3] SUBSYSTEMS
                ==========
          This is  a sketch of a complex subject which is covered in detail
          in the Operators Manual.

          Subsystems, typically Bulletin Boards, may be spawned or batched.
          Batching is the default mode for running sub-systems.

          If you want to run one or two sub-systems, in the batch mode, use
          these keywords in your CFG file:

          BBSBAT  <-- for 1st Subsystem
          and
          ALTBAT  <-- for 2nd Subsystem.

          RUNSPORT.BAT uses an  errorlevel of 5  for the first  sub-system,
          and an errorlevel of 4 for the secondary sub-system.

          This  option is  password protected  with the  passwords declared
          after the  keywords "SYSTEMPASS" and "ALTERNATEPASS"  in your CFG
          file.  When a caller correctly enters the subsystem password (any
          case)  SPORT  will  automatically  create the  batch  file  named
          SPTSPAWN.BAT which will contain the following information:

                SPTCHILD [baud rate] [port] [time to next event in min]

          where the  "baud rate" is the baud rate of the calling system and
          "port" is  the port in  use on the  receiving system. After  this
          file has been  written, SPORT  passes control to  the batch  file
          called SPTCHILD.BAT. 

          This is a user defined batch  file which should pass control to a
          subsystem  using  the  replaceable parameters  according  to  DOS
          procedures. This  batch file (SPTCHILD) should  make provision to
          return to SPORT upon completion.

          If you are using SPORTRA (SPORT Remote Access [See Page 34]) as a
          subsystem your SPTCHILD.BAT may look something like this:

          :START

          SPORT - Terminal Mode                                     Page 33







          sportra %1 %2 password
          if errorlevel 10 goto RMAIL
          GOTO FINIS
          :RMAIL
          sportrm %1 %2 x x
          goto START
          :FINIS
          cd\sport
          runsport


          Technical Note for BBS users
          ----------------------------

          If a  user is going  to run  a subsystem (BBS)  which requires  a
          Fossil  Driver such as  the X00 series,  it is  important to note
          that the vector capture should be TURNED OFF before running SPORT
          and TURNED ON before running the BBS.  
           
          The important thing to note is  that SPORT does not recognize the
          Fossil and wants to  deal directly with the same things  that the
          Fossil  does.   Therefore it  needs to  be moved  out of  the way
          before SPORT and back in the way before the subsytem.


          [7.4] REMOTE ACCESS
                =============
           
          SPORTRA is the built-in SPORT Remote Access Module.  This utility
          has  been  designed to  help  the  SPORT system  operator  manage
          his/her system remotely. It supports a variety of functions which
          may be needed when  working remotely and has been designed  to be
          installed  and  work as  a subsystem  to  SPORT. SPORTRA  is also
          linked to SPORTRM for Remote Mail functions.

          This  utility will allow callers  to your system  to look through
          and pick up  files, and several  other very rudimentary  Bulletin
          Board type functions. It has one password protected "sysop" level
          and other features which are described in the Operators Manual. 



          [8] MANAGING YOUR SYSTEM


          [2.7] PERSONAL MENU
                =============
           
          The installation will create a default Personal Menu which can be
          accessed  using  Ctl P.  You are  free  to experiment  with these
          functions. Be aware that #1 and #2 will archive the messages that
          have already been read and that #8 allows you to  modify all your

          SPORT - Terminal Mode                                     Page 34







          configuration files.  

          This menu  is easily customizable  using the file  SPORT.MNU (the
          menu  of choices  that you  see) and  appropriate entries  in the
          RUNSPORT.BAT  file. This handy function allows  you to have SPORT
          display a  menu from which you can  select other programs you use
          on  your system, and when you are finished with them recall SPORT
          automatically. 

          The  number of the choice  designated in the  SPORT.MNU file PLUS
          100 is the errorlevel drop in the RUNSPORT.BAT file.  This is not
          as  complex  as  it sounds,  and  is  an  extremely useful  SPORT
          feature. 

          Look at  both files. It is  easy to see the  relationship between
          them. Experiment  with changing  them to suit  your applications.
          Using the Personal  Menu will make it easy to  keep SPORT on line
          alot of the time.

          This is explained more fully in the Operators Manual.

             
          [8.1] THE SYSTEM ADMINISTRATOR
                ========================

          The SPORTADM  System Administration Utility can  be accessed from
          the   Personal  Menu  or  from  DOS.  It  provides  a  method  of
          configuring the various control files used by SPORT. This utility
          is  designed  to  assist the  knowleable  user  in  designing the
          various functions of his  or her system. Since it  cannot replace
          the  knowlege of  what the  control files  do, and  since it  can
          reconfigure these files,  it should  be used by  the novice  with
          some caution.  Refer to  the Operators Manual  for more  detailed
          information.

          [8.2] GRAPHIC SYSTEM REPORTING
                ========================

          SPORTRPT  is a  utility which  will display  a series  of graphic
          screens   representing  SPORT   activity   since   the   midnight
          housekeeping  event. You  may run  SPORTRPT without  command line
          arguments for  a list of options.  This utility may also  be used
          from with SPORT on an FKey or from the Personal Menu.


          [8.3] POSTMAIL PROCESSING
                ===================

          The default  installation uses the EXITAFTER  option and postmail
          processing is  be accomplished  by entering the  desired postmail
          commands in the appropriate place in your RUNSPORT.BAT file. 


          SPORT - System Management                                 Page ^N







          Looking at the file will show you where postmail commands may  be
          inserted.  If  EXITAFTER  is  not  used,  postmail  commands  are
          accomplished  by  a  batch  file  called  POSTMAIL.BAT.  See  the
          Operators Manual.


          [8.4] CREATING EVENTS
                ===============

          SPORT supports the ability to exercise unattended, regular events
          which may  be needed by  a user  to accomplish  routine mail  and
          maintenance functions. 

          Events may  be  the  running  of SPORT  Utilities,  batch  files,
          errorlevel numbers or scripts.  Errorlevel drops are indicated by
          the  number in square brackets  and script names  are enclosed in
          curly braces.

          To program Events,  use E from the Utility Menu. This invokes the
          utility SPORTEVT. It  will help  you write your  event file,  and
          will automatically sort the commands by time, help you to insert,
          change or delete events. Events are listed in the file SPORT.EVT.


          With  Version 1.45 and later,  you may designate  daily events or
          weekly events. Events are contained in the following files:

               SPORT.EVT    for Daily events
               SPORTEVT.MON for Monday events
               SPORTEVT.TUE for Tuesday events
               SPORTEVT.WED for Wednesday events
               SPORTEVT.THU for Thursday events
               SPORTEVT.FRI for Friday events
               SPORTEVT.SAT for Saturday events
               SPORTEVT.SUN for Sunday events

          SPORT  looks  for a  file named  SPORT.EVT  in the  default SPORT
          directory. If there is one, this file tells SPORT there are daily
          events of which  it should be aware. If  there is a file  for any
          particular day  of the  week, SPORT  will  use that  file on  the
          appropriate day. 

          [8.5] ROUTING MAIL 
                ============     

          SPORT  supports  the  ability  to  route  mail  to  one  or  many
          destinations.   If   you   have   SPORTRTE.EXE  in   your   SPORT
          subdirectory, and run it as part of your postmail processing, and
          have put your routing instructions in  the SPORTRTE.CTL file, you
          can cause incoming mail to be automatically distributed to others
          on  your  Phone Index  List. See  the  SPORTRTE.CTL file  and the
          Operators Manual for details.

          SPORT - System Management                                 Page 36








          [8.6] CONFERENCING
                ============

          Using the SPORTCON utility and the SPORTCON.CTL control  file you
          may set up  a variety of  conferences which allow you  to discuss
          subjects  with a defined list of participants. How to set this up
          is discussed in the control file and in the Operators Manual.


          [8.7] SPECIAL SESSION INTERFACE SUPPORT
                =================================

          The Special Session Interface  Support capability of SPORT allows
          the  user to  customize his  system  to accommodate  special mail
          protocols,   special   password  access,   scripting   and  other
          sophisticated  methods   of  accessing  and/or   managing  and/or
          exchanging information with other types of mail systems.
          This subject is covered in the Operators Manual.


          [8.8] INTERMITTENT COMMAND PROCESSING            
                ===============================   

          SPORT allows the user  to run batch files in the background while
          it  is online.  How  this is  accomplished  is explained  in  the
          Operators Manual.


          [9] MORE USEFUL INFORMATION

          [9.1] DEFINITIONS OF FILE EXTENSIONS 
                ==============================

          The SPORT program is contained in the files SPORT.EXE(executable)
          and  SPORT.OVR(overlay).  There are  also  many  EXE files  which
          comprise the various utility functions. 

          SPORT interfaces with  the user via  a collection of RAW  and CTL
          (ConTroL)  and  BAT  (BATch)  files.  Some  of  these  files  are
          interrelated.   

          The  program  must  know  how  your  system  is  configured.  The
          configuration  file   is  called  SFLASH.RAW   and  is  basically
          constructed for you during  installation. But you may edit  it to
          change  or enhance  your set  up using  the  CFG option  from the
          Utilities Menu. 

          You must be able to enter the phone  numbers ("addresses") of the
          systems with which  you wish to  be in contact.  The Phone  Index
          List  is called SFLASH.IDX. You may build it using the IDX option
          from the Utilities Menu. 

          SPORT - System Management                                 Page 37







          This  is how SPORT works: All outgoing messages always consist of
          TWO files, not one.

          First is the message -  the ADDRESS.FLS file.

          Second is the "flow" file, in which is declared what  material is
          to be transmitted to this address - the ADDRESS.FLO file.

          If the material is put on hold, these files become

          First - ADDRESS.HLO
          Second - ADDRESS.FLO (remains the same).

          If the material does  not synch properly with the  target system,
          to  prevent endless connection with no transmission the files are
          renamed

          First - ADDRESS.BAD
          Second - ADDRESS.FLB


          [9.2] MORE ON ADDRESSING
                ==================

          The utility SPORTID is used to create and manage your Phone Index
          List. It will make it easy for you to make this file. 

          Addresses are INDEXED in the IDX file to the phone  number of the
          system to which you are sending mail. 

          This is  how a "Target System  Name" also called an  "address" is
          indexed to a phone number in a line in the IDX file:

          8219556.FLS,8219556;2400     Bill at Acme       
            [1]   [2]   [3]   [4]          [5]    

          [1]  This  is the address. This  is the net/node  "821/9556" - in
               this case the same as the phone number.   

          [2]  The   FLS  message   extension.   (Required   and   inserted
               automatically).

          [3]  The  actual  phone  number   (including  the  area  code  if
               necessary).

          [4]  The baud rate.

          [5]  Comment

          Here are two examples showing a  line in the Phone Index List for
          two types of addresses for Bill at Acme Metal Spinning.


          SPORT - More Useful Information                           Page 38







          Example #1
          ----------
          The Index Line is:

          8219556.FLS,2038219556;2400     Bill at Acme

          THUS THE TARGET SYSTEM NAME or ADDRESS FOR THE MESSAGE IS:
          821/9556

          The Phone Number which will be called is:
          203-821-9556

          The Baud Rate of his system is:
          2400

          Net/Node numbers  are the  same as  the Prefix/Suffix concept  of
          telephone numbers. They  can be  THE SAME or  DIFFERENT than  the
          phone number. If you  are using Net/Node numbers, there  can be a
          maximum of four numbers on either side of the slash (/). 


          Example #2
          ----------

          The Index Line is:

          BILL.FLS,2038219556;2400     Bill at Acme

          Thus the "target system name" or address for the message is:

          BILL/

          The Phone Number which will be called is:
          203-821-9556

          The Baud Rate of his system is:
          2400

          Addressing by alias refers  to addressing by name. In  this case,
          you can have up to eight characters before the slash (/).

          You must put the slash (/) after any alias to let SPORT know that
          there  is a Net number or alias  name but no Node number. Because
          of this, you may have addresses like 15/ or 6/ or  A/. This gives
          you maximum flexibility in addressing.

          THE ADDRESS IS THE  PART OF THE INDEX  LINE BEFORE THE  EXTENSION
          .FLS.

          For  Bill to receive BILL.FLS as legitimate mail, he must declare
          BILL.FLS to be an acceptable alias, next to the keyword INFILE in
          his Configuration File like this:

          SPORT - More Useful Information                           Page 39







          INFILE C:\SPORT\INCOMING\BILL.FLS

          There are many  other options  which may be  chosen in the  Phone
          Index List.  For example, if you  want mail for an  address to be
          ALWAYS held, designate the first hour available AND the last hour
          available to be the SAME number. 



          [9.3] PORT AND MODEM PROBLEMS
                -----------------------

          If SPORT fails to initialize,  the nature of the problem  will be
          shown on the screen and in the ASCII file called SPORT.LOG. 

          If  you get the message "Invalid COM  port number" or " Unable to
          initialize the port specified",  you probably have designated the
          wrong COM(munications) port to which your modem  is attached. Try
          another port. [See Page 45].

          If  you run  SPORT  and get  the  message "Unable  to  Initialize
          Modem", and have checked that the modem is connected to the right
          port  and  turned  on,  perhaps  you  have  selected   the  modem
          incorrectly. You may want to start your investigation by running 

                                        SMODEM

          from  the system  prompt. This will  rerun the  last part  of the
          installation utility and provide you with a list of known modems,
          and will  automatically insert the initialization  string for the
          selected modem in  your configuration file.  You may have  better
          results by choosing another modem type.

          Once you have  selected the correct modem and  it is working, you
          can   enhance  your  system   performance  by   manipulating  the
          configuration file to  get the  software and your  modem to  work
          together in the best possible way. 

          If you see the message "Trouble Initializing Modem" come up a few
          times, then initialize correctly, you may only need to adjust the
          MODEMINITSPEED to a slower speed.


          Modem Issues in the Configuration File
          --------------------------------------
          SPORT  reads every line in  the configuration file  that does not
          have  an  exclamation  point on  the  left  margin.  The standard
          pattern is: 

          !KEYWORD [Command] or [Option]

          Therefore you "uncomment"  a keyword  to use it  by deleting  the

          SPORT - More Useful Information                           Page 40







          exclamation  point; you  "comment out"  to not  use a  keyword by
          inserting an exclamation point.

          SPORT provides four  main keywords in  the Configuration File  to
          deal with your modem. 

               One  is the  keyword "MODEMINIT"  which is  followed  by the
               Modem Initialization string. 

               Second,  there   is  the   keyword  "FASTMODEM",   which  is
               specifically for  modems which will accept  commands at high
               speed. 

               Third,  there are five  "MODEMINITSPEED" settings to control
               the speed at which the software talks to the modem. 

               Fourth,  there is  the keyword  "NOMODEMRESET" which  speeds
               operation  if  you  have   a  modem  that  consistently  and
               automatically resets itself to a known state. 


          Note that  you can only use FASTMODEM OR  ONE AND ONLY ONE of the
          MODEMINITSPEED  options. Should you use FASTMODEM  as well as one
          of the MODEMINITSPEED options, FASTMODEM will take precedence. If
          you use more than one MODEMINITSPEED option, the last one in your
          configuration file will be the one used by SPORT.



          Modem Installation Summary
          --------------------------

          General Operation
          - - - - - - - - -

          You            >Select your modem during installation. 

          SPORT          >Enters an initialization string after the keyword
                         MODEMINIT in the Configuration file. 
                         >Enters MODEMINITSPEED MEDIUM.

          High Performance Operation
          - - - - - - - - - - - - -  

          You            >Select your modem during installation. 

                         >Check the initialization  string in the CFG  file
                         after the keyword MODEMINIT and make sure it has a
                         complete command set that will reset the modem.

                         >Use the keyword "NOMODEMRESET" and make sure  you
                         are using "MODEMINITSPEED MEDIUM".

          SPORT - More Useful Information                           Page 41







          Fastest Operation
          - - - - - - - - -

          You            >Select your modem during installation.

                         >Check the initialization string after the keyword
                         MODEMINIT and make sure  it has a complete command
                         set that will reset the modem.

                         >Use  the  keyword  "NOMODEMRESET",   comment  out
                         "MODEMINITSPEED MEDIUM" and uncomment  the keyword
                         "FASTMODEM".

          If you  are having difficulties,  please see the  checklist below
          for a further discussion of installing your modem.     



          [9.4] MODEM INSTALLATION CHECKLIST
                ============================

          This section is designed to help you install and optimize the use
          of  your modem with SPORT. Following  this checklist will provide
          you with the most  effective match between your modem  and SPORT.
          Remember,  if  you cannot  initialize  your  modem properly,  use
          RUNSPORT X to run the program in the test mode while you  try are
          configuring your system.      

          General Operation
          -----------------
            
          1.  Use U)tilities Confi(G)uration from the  Main Screen to check
          your Configuration File and be sure that you are NOT using any of
          the following keywords.  Check each  keyword to make  sure it  is
          "commented out" by placing an "!" before the keyword. Keywords to
          be commented out or eliminated are these:
                  
                  FASTMODEM

                  MODEMINITSPEED VERYSLOW
                  MODEMINITSPEED SLOW
                  MODEMINITSPEED MEDIUM
                  MODEMINITSPEED FAST
                  MODEMINITSPEED VERYFAST

                  NOMODEMRESET
                  
                  
          2.   While you  are editing the  CFG file,  check the "MODEMINIT"
          line. Check your modem documentation to see if all the characters
          represent  valid commands. Your  string cannot be  longer than 40
          characters.        

          SPORT - More Useful Information                           Page 42







                  
          3.   Save the edited  file. (This automatically  runs the utility
          SPREP to prepare SFLASH.RAW for use with SPORT.)         
                  
          4.   Type RUNSPORT  at the DOS prompt.  If your modem initializes
          correctly go to step 6.         

          5.    If you are at this step than  your modem did not initialize
          correctly when  you  ran SPORT.  There are  two possible  causes.
          First,  your  modem  initialization  string  is  incorrect  (most
          likely)  or,  second,  your   modem  is  incapable  of  accepting
          characters at the default rate of SPORT (least likely).
                  
          If none of the SMODEM choices works, you may assume that you will
          need  a custom modem initialization string for SPORT. In building
          your  string bear  in  mind  that  SPORT  does  not  require  the
          preceding "AT", the  final Carriage Return or  a selected dialing
          mode for your modem initialization string. All  SPORT requires is
          the  actual sequence of commands preceded by "MODEMINIT " in your
          SFLASH.RAW file.
                       
          With your  modem manual,  build your modem  initialization string
          using these guidelines:         


          - SPORT requires a modem that supports a true Hayes command set.
          - SPORT requires that Carrier Detect not be forced high or low.
          - SPORT requires that Data Terminal Ready (DTR) not be forced.
          - SPORT requires that Auto_Answer be OFF.
          - SPORT requires that modem responses be in English.  
          - SPORT requires that modem responses be verbose.
                  
          Most  importantly, be  aware that  SPORT automatically  sends the
          command set
                                                                  "Q0E0V1&C1S7=30S0=0" 

          to your modem IF YOU ARE NOT USING AN INITIALIZATION STRING.  The
          reason for this is that SPORT needs VERBOSE results.
           
          Now, if you DO USE a customized initialization string, you should
          include  the  command  set  "Q0E0V1&C1S7=30S0=0"  in  the  string
          because SPORT WILL NOT USE ITS DEFAULT STRING IF YOU SPECIFY ONE.
          Remember, you cannot use more than 40 characters.
           
          For example, if you use this in your SFLASH.RAW file:

          MODEMINIT Q0E0V1&C1S7=30S0=0

          you are doing EXACTLY THE SAME THING as if you  did not even have
          a string declared.  However, if you want anything beyond
                                "Q0E0V1&C1S7=30S0=0"
          then  you must  include  "Q0E0V1&C1S7=30S0=0"  in your  MODEMINIT

          SPORT - Modem Installation Checklist                      Page 43







          command.         
          Build your modem string with these requirements in mind and enter
          that string in your SFLASH.RAW file like this:
                  
                  MODEMINIT command_sequence
                  
          where "command_sequence" is  the string you will be using WITHOUT
          the  preceding "AT" or the  following "|" command.  An example of
          this is:

          MODEMINIT &F&D2Q0E0V1&C1S7=30S0=0

          High Performance Operation
          --------------------------

          6.  If  you have reached  this step it  is assumed that  you have
          SPORT operational with a  correct modem initialization string and
          now  want to  optimize  its performance.  First  we will  try  to
          optimize the way SPORT answers incoming calls. SPORT supports two
          ways  to  answer a  call.  The  first  is  by sensing  the  "Ring
          Indicator"  or  "Ring  Detect"  line on  your  modem  and  acting
          immediately upon  it. The second  way is by waiting  for the word
          "RING" to be sent from your modem to SPORT. The  first way is the
          fastest   but  will   only   operate  with   modems  capable   of
          sending/receiving characters at a high rate of speed. To try this
          first method use the following keyword in your SFLASH.RAW:
                  
                  FASTMODEM
                  
          Now save the edited file. If  you are already running SPORT,  use
          S)ystem  R)einitialize to  reinitialize  the modem  with the  new
          configuration. If your modem initializes properly you have a high
          speed  modem and SPORT will  automatically talk to  your modem at
          the maximum speed available.
                  
          If your modem  does not  initialize properly or  fails to  answer
          incoming calls  properly, you cannot use  the "FASTMODEM" option.
          Go  on to the next step.
                 
          Modems must go back  to known states after use.  Some modems will
          do  this automatically, some will not. SPORT will normally  reset
          the  modem periodically. However,  this take time.  If your modem
          resets  itself,  or you  have  characters  in the  initialization
          string which do this,  you may use the keyword  "NOMODEMRESET" in
          your  configuration. This will  speed operation. If  you use this
          option,  what SPORT  will do  is try  to  initialize the  modem 3
          times, if  it cannot, it  will override the  NOMODEMRESET option,
          and try  to reset and initialize  3 more times. If  this does not
          work, SPORT will drop to DOS.


          7.  If you  reach this step  than you  have a  modem which cannot

          SPORT - Modem Installation Checklist                      Page 44







          always  rely JUST upon the  "Ring Detect" function  of your modem
          for SPORT to  answer incoming  calls. You will  need to  instruct
          SPORT to use  the word  "RING" received from  your modem when  it
          senses  an incoming call. You  can still optimize  your system by
          varying the  speed at which  SPORT receives  responses from  your
          modem.   This  is   a   simple  process   using  the   key-phrase
          "MODEMINITSPEED " and a modifier.
                  
          Here are  the modifiers you can use. They range from the slowest 
          modem response time (first item) to the fastest (last item):     
            
                  MODEMINTISPEED VERYSLOW
                  MODEMINITSPEED SLOW
                  MODEMINITSPEED MEDIUM       <--Recommended
                  MODEMINITSPEED FAST
                  MODEMINITSPEED VERYFAST
                     
          Remember  to use  ONLY ONE  of these  options at  a time  and not
          FASTMODEM. If  you should  forget and use  two or more,  only the
          last one encountered  by SPORT  in your SFLASH.RAW  file will  be
          used.
                  
          To optimize the speed of your modem just try each of these in the
          order presented  until your  modem fails to  initialize properly.
          You will  notice  a  considerable increase  in  speed  with  each
          successive item. You should use the one which sends characters to
          the  modem in the  shortest possible  time yet  still initializes
          your modem correctly.


          More detailed  information about the required  settings for SPORT
          are in the Operators  Manual. You may have to consult  your modem
          manual   for   any  special   characters   that   it  may   need.
          Experimentation is the key.


          [10] TROUBLESHOOTING


          [10.1] INSTALLATION
                ============

          * WHEN I INVOKE SPORT I GET THIS MESSAGE:
          "Invalid  COM port  number" or  " Unable  to initialize  the port
          specified". 

               This  means you have not designated the correct COM port, or
          the  COM port has a  non-standard address or  interrupt level. If
          you have the right port, you may designate a non-standard address
          and interrupt level by  using the keywords "COM" [Address_In_Hex]
          and "INT"  [Interrupt_Level] in  your configuration file.  To get
          this  information, look in the  documentation that came with your

          SPORT - Modem Installation Checklist                      Page 45







          I/O board.

          * WHEN I INVOKE SPORT I GET THIS MESSAGE:
          "Unable to find CFG file" OR I DROP BACK TO DOS.

               Check that  \SPORT and \SPORT\INCOMING subdirectories are on
          the path. Check that all SPORT files are in \SPORT. 



          [10.2] THE FULL-SCREEN EDITOR
                ======================

          *  WHEN USING THE SPORT FULL SCREEN EDITOR (SPORTEDT) FOR EDITING
          MY  CFG (CONFIGURATION) FILE, THE EDITOR WILL  SOMETIMES TRUNCATE
          A PART OF THE LINE I HAVE CREATED.

                  SPORTEDT    is  designed  primarily  for  creating  Flash
          Messages and only secondarily for use to edit the CFG file (using
          the G command from the Utility  Menu).  Because of this, SPORTEDT
          will  force a certain line length to ensure that  Flash  Messages
          remain   consistent from system to system.   This  line length is
          generally sufficient for most purposes, including editing the CFG
          file. If,  however, you find that  you must create  a line longer
          than  SPORTEDT permits,  you  should use  your favorite  external
          text  editor.  Since all of the SPORT  control and  support files
          are in  flat  ASCII, you  may  use  the editor  of  your  choice.
          Remember to run SPREP if you are using an external editor to edit
          SFLASH.RAW.


          * WHEN I WANT TO EDIT A MESSAGE I GET THE LINE EDITOR RATHER THAN
          THE FULL SCREEN EDITOR.

                  SPORTEDT.EXE  is  not  located  in  your   SPORT  default
          directory and you have not  declared your personal favorite  text
          editor useing the EDITOR keyword in the Configuration File.


          [10.3] MAIL AND MESSAGES
                =================
          * I GET THE MESSAGE "NO CARRIER" WHEN I TRY TO CONTACT A SYSTEM.

               The system is off-line or busy.

          * SPORT  WILL NOT  EXCHANGE MAIL WITH SOME SYSTEMS, BUT  WILL  DO
          SO WITH OTHERS.

                  You  may  be attempting  to contact a  "closed system".  
          SPORT has the capability  of increasing its level of  security by
          only  allowing    certain systems  to  exchange  mail.   See  the

                                                                    Page 46
          SPORT - Troubleshooting







          Operators Manual for information on this subject. 

          * I SEE  SOME OUTGOING  MESSAGES HAVE BEEN  RENAMED WITH A  "BAD"
          FILE EXTENSION.  WHAT IS WRONG?

                  This is  normal and  occurs whenever SPORT  has tried  to
          exchange mail with  another system but  the exchange has  failed.
          Once the attempted exchange  fails, SPORT immediately renames any
          FLS (Flash  Message) to  BAD so that no further mail will be sent
          to that system. Check your SPORT log for why the exchange failed.
          You may reset BAD files using R)eset from the Utilities Menu.

          * MY MAIL SESSIONS ARE INTERRUPTED AND MY LOG REFERS TO BAD LINES
          AND DEBRIS ON LINES. WHAT CAN I DO ABOUT THESE POOR PHONE LINES?

          SPORT  has the ability to  adjust to noisy  line conditions using
          the standard  ZModem protocol.  This option  is activated  by the
          user  by placing the symbol  |N| on the  Telephone Index Line for
          the  target system in question.  This flag will  cause the Zmodem
          mail session  to use a  256 byte packet  in place of  the default
          1024 byte  packet, thus  allowing for  quicker recovery  on noisy
          lines.  Speed  of transmission  may  be slightly  less  with this
          smaller size  but, difficult transmissions which  could fail will
          oftentimes succeed using this method.


          * I WANT TO MAKE MY SYSTEM AS SECURE AS POSSIBLE.

                  To take  full advantage of all of the security provisions
          which SPORT allows. Run a virus check on the incoming area in the
          postmail  section of  the  RUNSPORT.BAT file.  See the  Operators
          Manual.



          [10.4] TERMINAL MODE
                =============

          * MY MODEM DIALS THE PHONE, BUT THERE IS NO ANSWER.

               If  the modem  reports  UNABLE TO  CONNECT, then  the target
          system is off line or it is busy.

          * TRANSMISSION IS ERRATIC, OR IS CUT OFF.

               There could be line noise or other problems. Try later.

          * DURING A TERMINAL MODE CALL, NONE OF MY TYPED CHARACTERS APPEAR
          ON THE SCREEN. 

               Turn the Echo On.

                                                                    Page 47
          SPORT - Troubleshooting







          *  DURING A  TERMINAL MODE  CALL,  ALL OF  THE CHARACTERS  I TYPE
          APPEAR TWICE.

               Turn the Echo Off.

          * I  CALL A  BBS  BUT SEE  CHARACTERS IN  PARENTHESIS INSTEAD  OF
          GRAPHICS.

               ANSI  graphics should be on. You need the driver ANSI.SYS in
          your CONFIG.SYS file, and on your system.

          * DURING A CALL, BINARY CHARACTERS APPEAR ON THE SCREEN.

               Parameters  are set  incorrectly. That  is, the  8/n/1 (word
          size/parity/stop  bits)  are different  on  the  system you  have
          connected  with.  You  can  either experiment  by  changing  your
          parameters  and calling  again, or  try to  determine what  their
          parameters  are.  Many  Bulletin  Board  Systems  indicate  their
          settings when they publish their numbers.


          [10.5] TSR's
                =====
          RAM  resident  programs often  are  sometimes  not good  software
          neighbors. They can be programs and/or device drivers. If you are
          having  trouble  with SPORT  you  may  try disabling  your  TSR's
          (Terminate  and Stay  Resident) programs,  cold  booting (turning
          your  computer  off and  on again,  and  trying again.  This will
          indicate if  any of these  programs are interfering  with SPORT'S
          operation.

          [10.6] SPORT AND DESQVIEW 
                ==================

          * WHEN RUNNING UNDER  DESQVIEW, SPORT WILL SOMETIMES TAKE  ALL OF
          THE TIME SLICE, BRINGING THE TASK IN THE OTHER WINDOW TO A HALT.

                  This is normal if  you are not using the  IGNOREDV option
          in your Configuration File.  When not using this option  SPORT is
          very aggressive about  time slicing, attempting  to ensure   that
          nothing will  interrupt  the flow of communications.   SPORT will
          take  the  entire  time  slice during  preliminary  syncing  with
          another SPORT and  during file  transfer sessions.   If you  find
          this   to  be  a  problem,  add  the  keyword  IGNOREDV  to  your
          Configuration  File.   This  will prevent SPORT  from taking more
          than the  time slice  available  to the  window  in which  it  is
          running.   If you use   this option (IGNOREDV), be  sure that you
          understand how communications can be  affected.  You should refer
          to the documentation which came with DesqView for details.



                                                                    Page 48
          SPORT - Troubleshooting







          * SPORT WILL SOMETIMES HANG IN ITS WINDOW.

                  This can be caused by a number of things.  First check to
          be  sure  that you  have given  SPORT  sufficient memory  for the
          window in  which it is run.  We recommend a 384K  window for most
          purposes.   If you are supporting a  subsystem in memory, a large
          external  editor,  or making  extensive   use  of  SPORT shelling
          capabilities,  you may  need to  increase this  memory allocation
          according  to  the needs  of the  programs  you are  running with
          SPORT.   Also,  remove  any  TSRs  (Terminate and  Stay  Resident
          Programs) and try  running SPORT.  TSRs can be  the cause of many
          strange system problems when run with other programs.  If you are
          using any TSRs, suspect them first and check them out carefully.



          * SPORT BLEEDS THROUGH TO MY OTHER WINDOW.

                  Comment out the  keyword FASTSCREEN from your  SFLASH.CFG
          file. This will eliminate all direct screen writes with the
          exception of the Sport Editor (SPORTEDT). None of the SPORT
          utilities uses direct screen writes so they  will not bleed
          through to other multitasking windows.


                 WHAT IS THE BEST TIME SLICE FOR USING SPORT WITH DESQVIEW?

                 We recommend a 9:6 ratio, with the SPORT window  receiving
          9.























                                                                    Page 49
          SPORT - Troubleshooting








          INDEX
          ADDRESSING
               Messages . . . . . . . . . . . . . . . . . . . . . . . .  18
          ADMINSTRATOR
               System . . . . . . . . . . . . . . . . . . . . . . . . .  35
          ALIAS
               Addressing to an . . . . . . . . . . . . . . . . . . . .  39
          ALTBAT
               For Invoking Sub-System  . . . . . . . . . . . . . . . .  33
          ANSI.SYS
               For Graphics . . . . . . . . . . . . . . . . . . . . . .  48
          APPENDING
               Messages to Messages . . . . . . . . . . . . . . . . . .  19
          ATTACHING
               Files to Messages  . . . . . . . . . . . . . . . . . . .  19
          BANNERS
               You Display to Callers . . . . . . . . . . . . . . . . .  31
          BATCH FILES
               Running in the background  . . . . . . . . . . . . . . .  37
          BUFFERS
               Setting  . . . . . . . . . . . . . . . . . . . . . . . .  10
          CACHE
               Setting  . . . . . . . . . . . . . . . . . . . . . . . .  10
          COMMAND LINE
               Arguments, Parameters, Switches  . . . . . . . . . . . .  14
          COMMANDS
               In Library . . . . . . . . . . . . . . . . . . . . . . .  22
          COMPUSERVE
               Using  . . . . . . . . . . . . . . . . . . . . . . . . .  28
          CONFERENCING
               Using SPORTCON . . . . . . . . . . . . . . . . . . . . .  37
          CONFIG.SYS  . . . . . . . . . . . . . . . . . . . . . . . . .  10
          DELETING
               Outgoing Messages  . . . . . . . . . . . . . . . . . . .  19
          DIALING
               A Number . . . . . . . . . . . . . . . . . . . . . . . .  30
          DOWNLOADING
               From Another System  . . . . . . . . . . . . . . . . . .  30
          EVENTS  . . . . . . . . . . . . . . . . . . . . . . . . . . .  36
          FASTMODEM
               How to Use . . . . . . . . . . . . . . . . . . . . . . .  44
          FLASH
               Messages . . . . . . . . . . . . . . . . . . . . . . . .  17
          FOSSIL DRIVERS
               In Subsystems  . . . . . . . . . . . . . . . . . . . . .  34
          GETLIB
               In Library . . . . . . . . . . . . . . . . . . . . . . .  22
          HELP
               From Mail Menu . . . . . . . . . . . . . . . . . . . . .  12
               From Utilities Menu  . . . . . . . . . . . . . . . . . .  25
          HOLD 

          SPORT - Index                                             Page 50







               All Mail . . . . . . . . . . . . . . . . . . . . . . . .  25
               Mail Always On . . . . . . . . . . . . . . . . . . . . .  40
          HOST
               Being a  . . . . . . . . . . . . . . . . . . . . . . . .  31
          INCOMING
               Files  . . . . . . . . . . . . . . . . . . . . . . . . .  21
          INDEX
               Address/Phone Number . . . . . . . . . . . . . . . . . .  14
          INF
               File Request Information   . . . . . . . . . . . . . . .  26
          INITIALIZATION
               Setting up strings . . . . . . . . . . . . . . . . . . .  13
          INSTALLING
               SPORT  . . . . . . . . . . . . . . . . . . . . . . . . .  12
          INVOKING
               SPORT  . . . . . . . . . . . . . . . . . . . . . . . . .  12
          KEYWORDS
               Defining . . . . . . . . . . . . . . . . . . . . . . . .  15
          LEGAL NOTICE  . . . . . . . . . . . . . . . . . . . . . . . . . 9
          LIBRARY
               Message  . . . . . . . . . . . . . . . . . . . . . . . .  21
          LINE NOISE
               Debris On Line . . . . . . . . . . . . . . . . . . . . .  47
          LOCKING MAILER
               For Security . . . . . . . . . . . . . . . . . . . . . .  11
          LOG
               SPORT activity recorded in . . . . . . . . . . . . . . .  13
          MACROS
                  . . . . . . . . . . . . . . . . . . . . . . . . . . .  31
          MAIL SUMMARY MENU
                  . . . . . . . . . . . . . . . . . . . . . . . . . . .  16
          MASS MAILING
                  . . . . . . . . . . . . . . . . . . . . . . . . . . .  18
          MENU
               Personal . . . . . . . . . . . . . . . . . . . . . . . .  34
          MESSAGES
               Entering . . . . . . . . . . . . . . . . . . . . . . . .  18
          MODEM
               Guidelines for Intitalization  . . . . . . . . . . . . .  43
          MODEMINIT . . . . . . . . . . . . . . . . . . . . . . . . . .  44
          MODEMINITSPEED
               How to Use . . . . . . . . . . . . . . . . . . . . . . .  45
          MODEMS
               And SPORT  . . . . . . . . . . . . . . . . . . . . . . .  13
          MULTI-MEDIA MESSAGES
               SPORTMM  . . . . . . . . . . . . . . . . . . . . . . . .  24
          NOISY
               Phone Lines  . . . . . . . . . . . . . . . . . . . . . .  47
          NOMODEMRESET
               In Installation  . . . . . . . . . . . . . . . . . . . .  44
          OVERFLOW.LIB
               For over 100 messages  . . . . . . . . . . . . . . . . .  21

          SPORT - Index                                             Page 51







          OVERVIEW  . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
          PATH
               SPORT Subdirectories on  . . . . . . . . . . . . . . . .  10
          PERSONAL MEMO
                  . . . . . . . . . . . . . . . . . . . . . . . . . . .  20
          POLLS . . . . . . . . . . . . . . . . . . . . . . . . . . . .  19
          PORT
               Problems with  . . . . . . . . . . . . . . . . . . . . .  45
          POSTMAIL
               Processing . . . . . . . . . . . . . . . . . . . . . . .  35
          PRIVATEMAIL
               for Security . . . . . . . . . . . . . . . . . . . . . .  11
          READING
               Messages . . . . . . . . . . . . . . . . . . . . . . . .  22
          RECEIVING
               Messages and Files . . . . . . . . . . . . . . . . . . .  20
          REGISTER
               How to . . . . . . . . . . . . . . . . . . . . . . . . . . 8
          Remote Access . . . . . . . . . . . . . . . . . . . . . . . .  34
          REMOTE SERVICES
                  . . . . . . . . . . . . . . . . . . . . . . . . . . .  32
          REMOTEPASS  . . . . . . . . . . . . . . . . . . . . . . . . .  32
          REQ
               File Extension . . . . . . . . . . . . . . . . . . . . .  26
          REQUESTING
               Files  . . . . . . . . . . . . . . . . . . . . . . . . .  26
          ROUTING
               Mail to Other Systems  . . . . . . . . . . . . . . . . .  36
          SCHAT.BAN . . . . . . . . . . . . . . . . . . . . . . . . . .  31
          SCHEDULING
               Outgoing Mail  . . . . . . . . . . . . . . . . . . . . .  17
          SCREEN
               Mailer . . . . . . . . . . . . . . . . . . . . . . . . .  16
               Terminal . . . . . . . . . . . . . . . . . . . . . . . .  28
               Utilities  . . . . . . . . . . . . . . . . . . . . . . .  24
          SCRIPTS
               Using  . . . . . . . . . . . . . . . . . . . . . . . . .  30
          SECURITY  . . . . . . . . . . . . . . . . . . . . . . . . . .  11
          SET-UP
               Advanced . . . . . . . . . . . . . . . . . . . . . . . .  15
          SFLASH
               Creating messages with . . . . . . . . . . . . . . . . .  16
               Line Editor  . . . . . . . . . . . . . . . . . . . . . .  17
          SFLASH.HDR
               Message Header . . . . . . . . . . . . . . . . . . . . .  18
          SMODEM
               For choosing Init String . . . . . . . . . . . . . . . .  40
          SPORT
               How It Works . . . . . . . . . . . . . . . . . . . . . .  38
          SPORT.BAN . . . . . . . . . . . . . . . . . . . . . . . . . .  31
          SPORT.EVT
               Event File . . . . . . . . . . . . . . . . . . . . . . .  36

          SPORT - Index                                             Page 52







          SPORT.LOG
                  . . . . . . . . . . . . . . . . . . . . . . . . . . .  12
          SPORTARC
               Library Archive Utility  . . . . . . . . . . . . . . . .  23
          SPORTBBS
               Remote BBS Service . . . . . . . . . . . . . . . . . . .  24
          SPORTEDT
               SPORTEDT Editor  . . . . . . . . . . . . . . . . . . . .  17
          SPORTEX
               Extended Mail Utility  . . . . . . . . . . . . . . . . .  28
          SPORTLIB
               Library Utility  . . . . . . . . . . . . . . . . . . . .  21
          SPORTNWS.TXT  . . . . . . . . . . . . . . . . . . . . . . . .  21
          SPORTPAC
               For Packing/Unpacking  . . . . . . . . . . . . . . . . .  28
          SPORTR.CTL  . . . . . . . . . . . . . . . . . . . . . . . . .  32
          SPORTRM
               Remote Mail  . . . . . . . . . . . . . . . . . . . . . .  32
          SPORTRPT
               Reporting System Activity  . . . . . . . . . . . . . . .  35
          SPORTRTE.CTL
               Routing Control File . . . . . . . . . . . . . . . . . .  36
          SPORTU
               System Utility . . . . . . . . . . . . . . . . . . . . .  27
          SPTCHILD.BAT
               With Subsystem . . . . . . . . . . . . . . . . . . . . .  33
          SPTSPAWN.BAT
               Using for Subsystem  . . . . . . . . . . . . . . . . . .  33
          SUBSYSTEMS
               Running with SPORT . . . . . . . . . . . . . . . . . . .  33
          SYSTEM
               Requirements . . . . . . . . . . . . . . . . . . . . . .  10
          SYSTEM STATUS SCREEN
                  . . . . . . . . . . . . . . . . . . . . . . . . . . .  16
          TABLE OF CONTENTS . . . . . . . . . . . . . . . . . . . . . . . 3
          TARGET SYSTEM NAME
               As Address for Mail  . . . . . . . . . . . . . . . . . .  38
          TROUBLESHOOTING . . . . . . . . . . . . . . . . . . . . . . .  45
          TSR's
               SPORT and  . . . . . . . . . . . . . . . . . . . . . . .  11
          UNHOLD
               All Files  . . . . . . . . . . . . . . . . . . . . . . .  25
          UPLOADING
               From Another System  . . . . . . . . . . . . . . . . . .  30
          Viruses
               Checking For . . . . . . . . . . . . . . . . . . . . . .  47
          W.A.I.T.S.
               What It Means  . . . . . . . . . . . . . . . . . . . . . . 5
          WINDOWS
               Running SPORT with . . . . . . . . . . . . . . . . . . .  11



          SPORT - Index                                             Page 53

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3453

     Volume in drive A has no label
     Directory of A:\

    SPORT    EXE    168992   9-30-92   8:47a
    USER     DOC    126652  10-14-92   8:10a
    INSTALL  BAT     12858  10-14-92   2:49p
    DISK1                3   5-01-90   8:56a
    README   DOC       787  10-13-92   3:47p
    GO       BAT        38   4-13-93   2:30p
    SHOW     EXE      2040   9-12-88  10:48a
            7 file(s)     311370 bytes
                            7168 bytes free
