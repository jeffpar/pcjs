---
layout: page
title: "PC-SIG Diskette Library (Disk #1841)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1841/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1841"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BACKMAIL"

    Turn your computer into the center of your own electronic mail
    network with BACKMAIL, a background communications program that will
    not interrupt your work or your incoming voice calls.
    
    BACKMAIL can be used to compose and send messages, files and programs
    with other BACKMAIL users over regular phone lines using a standard
    modem while you are using your computer as you ordinarily would.
    
    Operating in the background, BACKMAIL will call phone numbers to which
    you have addressed messages or files, deliver them at a preassigned
    time, collect any mail addressed to you from there, terminate the call
    and repeat this process for the next appropriate destination on your
    list.  All of this without bothering you, and without interrupting the
    normal use of your machine.
    
    BACKMAIL doesn't interfere with the normal use of your phone for voice
    messages. Turn down the bell on your phone and carry on with your
    work. BACKMAIL will use your modem to answer all calls. If it's a
    voice call, the program will ring the speaker on your computer and ask
    you to pick up the phone. If it's another BACKMAIL calling, the
    program will receive your mail, store it to disk, and send any pending
    mail that you have addressed to the person who called you.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BM2.TXT

{% raw %}
```
                           BackMail II
                  *****************************
BackMail II will be released in April-May 1990. Here are the new features of
BackMail-II.

1.   SCRIPTS
     BackMail-II reads communications scripts. We call the
     script language "BSL". It is a very compact, very terse,
     communications language. It is designed with fast, unobtrusive,
     background operation in mind.

     Scripts enable Backmail to:

     -    dial through data switches, PADs and services like PC-
          pursuit that require log on, id  and route addressing.
          Access to dial through PAD's will give BackMailers
          tremendous savings on long distance traffic.

     -    Do complex Initialization of High Speed modems for
          selected destinations. (E.g. set MNP levels etc)

     -    log on and into information services and E-mail nodes
          that support a BackMail server.

     Scripts files are ASCII text files kept in the backmail
     directory. From within BackMail they are defined under
     "Change Setup" very much like prefixes, except instead of
     giving a arbitrary label you enter a list of up to 8 script
     names. These names appear in the phone directory window just
     like prefixes. Thus a user might have scripts for 'DATAPAC',
     'TYMNET', 'UUCP', 'USR-HST' ... &c. and declare some users
     "LONG DATAPAC","LOCAL UUCP" an so on.

     The Script language includes a command to save all
     script transactions in a "SCRIPT.LOG" file, to help in the
     debugging of complex scripts. BackMail-II will come with plenty of
     sample scripts and a BSL manual. The script.log file is
     placed in the user's "transfer" directory.

2.   POLLING
     Now in addition to declaring some destinations as e.g. "High
     Priority' one can, from the Phone Directory Menu, mark
     declarations  to be "polled". A polled destination is called
     at least once every hour, even if you have no mail addressed
     to it, to collect mail pending from that destination. This
     is one more step towards complete voice compatibility. Using
     polling the user can set his availability and answer Mode
     such that BackMail will never answer the phone with carrier,
     and yet regularly receive mail from all the polled
     destinations. It will be particularly useful as BackMail
     servers on mainframe based E-mail networks like UUCP
     proliferate.
     
3.   OUTCALL ONLY (SECURE CALLS)
     Marking a destination as OUTCALL is the reverse of the
     current feature "Do not accept return mail". When a
     destination is marked as an OUTCALL BackMail will only
     deliver mail to it when BackMail has called that
     destination, not when that destination (or a BackMail that has
     that destination's phone number) calls. OUTCALL is intended
     to satisfy users who wanted more security for their BackMail
     traffic.

4.   CHECK FOR SUSPENDED DESTINATION ON REPLY
     In version 2, BackMail will warn you when you reply to a suspended
     destination, and offer the option of unsuspending.

5.   TIME ZONE ADJUSTMENT
     With version 2, Backmails automatically compare local times and
     adjust for time zone diferences in availability times.

6.   AVAILABILITY LOCK
     There are certain circumstances in which you may want your
     BackMail *not* to adjust a availability to the users declared
     settings (e.g. if you wish to poll a long distance number
     once a day after midnight). In BackMail-II an individual destination's
     availability can be "locked" at the phone directory window.

7.   CALL NOW
     Now hitting "N" at the main menu sends the first available message
     immediately, overiding BackMail's normal approx 3 minute cycle.
     (Note: Call Now does not overide availability or priority.)

8.   GROUPS
     The user can define 6 group names and assign any subset of
     his destination directory to a group. Group names appear
     at the top of the destination window below "All local" and
     "All internal phone numbers"

9.   NEW UTILITIES
     SEND.COM is a utility that allows you to post files by backmail from the
     dos prompt or from a batch file. Files can be adressed by
     number or handle. Thus:
       SEND -c:\backmail -Hjoe -Fd:\123\myfile.wks
     will post "myfile.wks" to "joe" without having to access the
     main menu.  If your editor supports macros this utility allows
     you to substitute your editor for the BackMail message editor.
     CONVERT.COM alows you to convert your BackMail-I phone directories
     to version II format saving the trouble of having to re-enter the
     numbers.
     PMERGE.EXE allows you to merge 'foreign' phone directories with yours.

10.  CC. LISTS
     BackMail now appends a CC list to all messages which are adressed
     to more that one destination. CC lists can be supressed from the
     phone address list.

11.  DISPLAY STATUS
     Now displays information about the status of polled destinations
     as well as errors in reading scripts or logging scripts or script
     language errors.

12.  AUTODIALER
     The voice autodialer will now read phone numbers from the screen of
     the user's foreground application.

13.  BMCONFIG
     A new BMCONFIG will make installation much easier and will includes
     predefined settings for non-standard modems.

14.  WELCOME FILE
     The user can designate a file (it must reside in the BackMail
     directory) which will be sent to any "unknown caller". I.e. any
     caller who is not already in the user's phone directory. The
     name of the file is entered under the change setup menu.

15.  ALPHABETICAL LOOK UP
     Now in the phone directory or destination list, the user can search
     through handles by hitting the first letter of the user's name or handle.

16.  VARIABLE NUMBER FORMAT
     BackMail-II supports non-North American phone number formats (e.g. 1-5
     digit area codes, 6 digit numbers...etc).

17.  SIZE?
     With all this BackMail-II takes *less* RAM that BackMail-I. (At this
     point about 33k)

PRICING, UPGRADES AND CRIPPLEWARE
*****************************************************
      BackMail-II will cost $50. Upgrades (though not manuals) will
be free to users who have registered BackMail-I prior to BackMail-II's release.
      BackMail-II is a kind of "crippleware".  The way it works is
that some program functions (send file, forward and reply) are
locked out until the user actually registers. The functions are
automatically unlocked by a call to the registration machine once
the users payment has cleared.
     There is no whining message. A user can elect to Register by
hitting 'G' at the main menu when it appears (it isn't always there).
     Some people will not like this. But we think it is reasonable. The
complaints against standard crippleware/test drive programs do not apply
here since the program is fully function and unlocking the relevant
functions is very easy thanks to our Teleware system. The new system
also makes it possible for users to pay by check or purchase site
licenses. Note that there are lots of BackMail-I's out there and users
who want to avoid registration can continue to (indeed are encouraged to!)
use them.
```
{% endraw %}

## FILE1841.TXT

{% raw %}
```
Disk No: 1841                                                           
Disk Title: Backmail                                                    
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: BACKMAIL                                                 
Author Version: 1.1                                                     
Author Registration: $30.00                                             
Special Requirements: Modem.                                            
                                                                        
BACKMAIL is a background communications program that turns your computer
into the center of your own electronic mail network.  All without       
interrupting your work or your incoming voice calls.                    
                                                                        
BACKMAIL can be used to compose and send messages, files and programs   
with other BACKMAIL users over regular phone lines using a standard     
modem while you are using your computer as you ordinarily would.        
                                                                        
Operating in the background, the program will call phone numbers to     
which you have addressed messages or files, deliver them at a           
preassigned time, collect any mail addressed to you from there,         
terminate the call and repeat this process for the next appropriate     
destination on the list.  All of this without intervention by you, and  
without interrupting your normal use of your machine.                   
                                                                        
BACKMAIL doesn't interfere with the normal use of your phone for voice  
messages.  Turn down the bell on your telephone, and carry on with your 
work.  BACKMAIL will use your modem to answer the phone; if it's a voice
call, the program will ring the speaker on your computer and ask you to 
pick up the phone.  If it's another BACKMAIL calling, the program will  
receive your mail, store it to disk, and send any pending mail that you 
have addressed to the person who called you.  All without interrupting  
you.                                                                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk #1841  BACKMAIL  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To start using the program, type: COPY READ.ME PRN  (press enter)       ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.

```
{% endraw %}

## MODEMS.TXT

{% raw %}
```

                                                                        B-1




           APPENDIX B:  Customizing BackMail for your Modem

   The default values in Backmail should enable it to operate with any
  truly Hayes Compatible 1200 or 2400 baud modem.  Apart from insuring
  that your DIP switches are set correctly, we recommend that you use
  BackMail for a bit before undertaking any customization. The default
  values the program uses have been chosen with great care and work
  with a wide variety of modems.

  However, should you encounter problems or if your modem is non-
  standard, don't despair. We have designed BackMail to allow you to
  alter virtually all of the parameters that control the modems
  operations. So even if you have a modem that does not conform to
  industry standards it should be possible to configure the program to
  drive your modem.


  DIP SWITCHES
  Your Modem may or may not have DIP switches which may control some
  or all of these functions.

  +------------------------++-------------------------------------+
  |    SWITCH              ||      SETTING                        |
  +------------------------++-------------------------------------+
  |    Carrier Detect      ||Should be set so that Carrier is NOT |
  |                        ||always on.                           |
  |                        ||                                     |
  |    Data Terminal Ready ||Should be set so that DTR is NOT     |
  |                        ||always on; i.e. is controlled by the |
  |                        ||computer.                            |
  |                        ||                                     |
  |    Verbose             ||Should be set so that modem produces |
  |                        ||numeric responses                    |
  |                        ||                                     |
  |    Echo                ||Should be set so the modem does NOT  |
  |                        ||echo commands                        |
  |                        ||                                     |
  |    Auto Answer         ||Should be off so modem does not      |
  |                        ||automatically answer the phone       |
  +------------------------++-------------------------------------+
  

  It is most important that you have Carrier and DTR detect enabled.
  If your modem does not have DIP switches for these functions then
  they will be set by command strings. Check the Setting for Tech 3 to
  make sure that it is the appropriate string to enable carrier and
  DTR. Setting of Tech settings is described below.
                                                                        B-2




  MODEM RESPONSE CODES
  Your modem responds to commands by sending "response codes" to your
  computer. BackMail sets your modem to respond with numeric
  responses. These are numbers (usually between 0-10, though we have
  provided up to 20) that tell the program about the state of your
  modem. Responses 1-4 are standard but, above 4, modems can mean
  different things by these numbers. To bring BackMail fully en
  rapport with your modem you should tell the program what these
  response codes mean to your modem.  You do this by altering TECH
  SETTINGS under the CHANGE SETUP menu.

  You change TECH SETTINGS by entering the number of the tech setting
  you want to change and entering an appropriate string or number.

  For modem response codes you will be entering numbers. Tech Settings
  50-60 correspond to modem responses from 0-20. Each Tech Setting in
  this range has associated with it a number which indicates its
  meaning to BackMail.

  These numbers indicate the interpretation that BackMail will place
  upon the corresponding modem responses and dictate what action
  BackMail will take.

  Here are the BackMail Numbers and their meaning:

       +---------+------------------------------------------------+
       | Setting |            Interpretation                      |
       +---------|------------------------------------------------+
       |    0    | 'OK': Modem has accepted a command             |
       |    1    |  Modem has detected a Carrier at 300 Baud      |
       |    2    |  Modem has detected a Carrier at 1200 Baud     |
       |    3    |  Modem has detected a Carrier at 2400 Baud     |
       |    4    |  Modem has detected your phone is ringing      |
       |    5    |  Modem has lost or failed to detect a carrier  |
       |    6    |  Modem has detected a Busy signal              |
       |    7    |  Modem detects ring at the called number       |
       |    8    |  Modem has failed to detect a dial tone        |
       |    9    |  This response code is undefined for this modem|
       |   10    |  Modem has found an error in some command      |
       +---------+------------------------------------------------+
  
                                                                        B-3




  Here are the default settings which backmail uses to interpret Modem
  responses 0-20.

                 +--------+-----------+------------------+
                 | Tech   |  Modem    | Default BackMail |
                 | Number | Response  | Setting          |
                 +--------+-----------+------------------+
                 |  50    |    0      |         0        |
                 |  51    |    1      |         1        |
                 |  52    |    2      |         4        |
                 |  53    |    3      |         5        |
                 |  54    |    4      |        10        |
                 |  55    |    5      |         2        |
                 |  56    |    6      |         5        |
                 |  57    |    7      |         5        |
                 |  58    |    8      |         9        |
                 |  59    |    9      |         9        |
                 |  60    |   10      |         3        |
                 |  61    |   11      |         9        |
                 |  62    |   12      |         9        |
                 |  63    |   13      |         9        |
                 |  64    |   14      |         9        |
                 |  65    |   15      |         9        |
                 |  66    |   16      |         9        |
                 |  67    |   17      |         9        |
                 |  68    |   18      |         9        |
                 |  69    |   19      |         9        |
                 |  70    |   20      |         9        |
                 +--------+-----------+------------------+
  

  As you will see, by default, all of the modem responses from 6-20
  have a default BackMail setting of '9' which means that BackMail
  will do nothing if it receives these responses. If these extended
  codes do mean something to your modem then you will want to fill
  BackMail in by setting the appropriate interpretation beside the
  tech setting that corresponds to that tech setting.

  For example:  Suppose that your modem manual tells you that your
  modem issues response code "6" when it receives no dial tone and "7"
  when it detects a busy signal.  In that case you should alter Tech
  settings "56" and "67" to the Backmail settings for these responses.

          +-------------------+-------------------+------------+
          | Modem Response    |   Tech Setting    | BackMail   |
          +-------------------|-------------------|------------+
          | 6                 |     56            |          8 |
          | 7                 |     57            |          6 |
          +-------------------+-------------------+------------+
  

  Sorry if all this sounds complicated. Indeed we aren't out of the
  woods yet for now we have to talk about "X" settings...
                                                                        B-4




  X SETTINGS: CONTROLLING EXTENDED RESPONSES
  The meaning of modem response codes above "5" are not wholly
  standardized and any modem that uses these extended responses will
  have a command to tell your modem which responses it will issue.
  These are usually the "X1-X4" command strings. Tech Setting 4 sends
  an  X command to the modem whenever it hangs up the phone.

  It is possible (though not likely) that you will want your modem to
  be set to a different "X" value when it is answering the the phone
  than when it is calling out. For this reason we have two Tech
  settings for 'X' commands. The "X" value at Tech 4 is sent to the
  modem each time BackMail hangs up the phone and will be in effect
  when BackMail Calls out. The "X" string at tech 21 is used when
  BackMail picks up the phone to dial out.

  The default values for both these strings are "X1" which normally
  tells the modem to do nothing except report the difference between
  1200 and 2400 baud carriers. For a typical fully featured modem the
  values might be:

  +-----------+----------------+--------------------------------+
  |    Tech   |    Recommended |                                |
  |    Number |      Setting   |       Function                 |
  +-----------+-------------------------------------------------+
  |      4    |        X3      |Wait for Dial tone , 1200/2400  |
  |           |                |Detect,Busy Detect              |
  |      21   |        X1      |No wait for dial tone, 1200/2400|
  |           |                |detect                          |
  +-----------+----------------+--------------------------------+
  

  Use the "X" settings that correspond to these values.

  Do NOT use an "X" setting if your manual tells you that in that "X-
  mode" Backmail will wait for silence before dialing. You do NOT want
  BackMail to do that.


 MNP MODEMS
  Some high speed modems which support the MNP error connection
  protocol, have very great difficulty in establishing a stable
  connection with lower speed modems that do not support MNP. If you
  have an MNP modem but want to BackMail with other modems that don't,
  it is probably a good idea to turn MNP off for BackMailing purposes.
  You can do this by including the string "&M0" in your TECH 7 String.
  (but confirm the effect of this in your modem manual).
                                                                        B-5




DOES YOUR MODEM SUPPORT "&" COMMANDS
  Internal modems that do not have DIP switchs (and some extrnal
  modems that do) require the command "&C1&D2" to enable DTR and
  Carrier Detect to be controled by BackMail. We have included this
  string as a default under TECH 3.

  However, many modems do not support and do not require this command,
  a few of these respond badly to the unknown command. If your modem
  does not support "&" commands, and you experience bad performance,
  it might be a good idea to blank out Tech setting 3.


TURNING ON BUSY DETECT AND WAIT FOR DIAL TONE
  If you have entered in the right response codes and "X" modes then
  busy detect will already be in effect. To turn on wait for dial tone
  just bring up the CHANGE SETUP MENU and select WAIT FOR DIAL TONE.
  Turning "WAIT FOR DIAL TONE" on will greatly enhance the ease with
  which you can use BackMail for dialing out Voice calls.


  WHICH RING TO ANSWER
  Tech setting 73 contains a number which corresponds to the number of
  rings Backmail should wait for before it answers the phone. The
  default is "1" so that BackMail will answer your phone on the first
  ring. If you want to give an answering machine or other people on an
  extension a first shot at answering the phone you might want to
  increase this number.


  SLUGGISH MODEMS
  Tech setting 72 contains a number which indicates how long it takes
  your modem to hang up after it receives an on/off transition in the
  DTR line from the computer. The default is 1 second, but if your
  modem seems not to be answering the phone, or failing to connect
  with calling BackMailers, then try increasing this number to 2
  seconds.


  CAVEAT
  There are many different brands of modem on the market and they vary
  widely in how well they perform. BackMail makes extensive use of all
  of the features of standard modems and if the manufacturer has cut
  corners in production they are more likely to show up with BackMail
  than with some other less sophisticated communication programs.

  We have done thousands of hours of testing BackMail with many
  different kinds of modems. There are some real turkeys out there:
  modems that claim to do things that they don't, modems designed to
  do things no one in their right mind would ever want them to do, and
  modems so flaky that they are not good for much more than
  autodialing. Unsurprisingly, we have found that modem performance is
  more or less directly correlated with price. We hope that your modem
  wasn't too much of a bargain.
                                                                        B-6




  Of particular note are some very inexpensive, internal 2400 baud
  modems. These can typically run quite hot, which is not highly
  recommended if you want to keep your chips happy.  Some of these
  have very great difficulty connecting with other modems at 2400 baud
  and you have to set your LAG TIME (See the manual for an
  explanation) to a very high value (e.g. 30 seconds). To successfully
  connect with these modems.

  If you frequently get calls which BackMail identifies as voice calls
  but which are really other BackMailers, or if other BackMailers have
  trouble connecting with you we recommend that you use BMCONFIG.COM
  to set your "ANSWER BAUD" rate to 1200 baud. If you have trouble
  connecting with other modems at 2400 baud then you should reduce
  your "CALL BAUD" rate down to 1200 baud. The trade off of
  reliability for speed is usually worth it.
                                                                        B-7




  MODEM COMMAND STRINGS
  Tech Settings 0 -22 contain the strings that are used to control the
  modem.

  If you encounter difficulties with BackMail controlling your modem
  you may wish to change some of these after consulting your modem.
  Command strings can be up to 15 characters long.

  +----------+--------+-------------------------------------------+
  |    Tech  |Default |                                           |
  |    Number|Value   |                  FUNCTION                 |
  +----------+--------+-------------------------------------------+
  |    0     |AT      |Modem attention string. Precedes all       |
  |          |        |commands                                   |
  |    1     |Z       |Hang up the phone & Reset                  |
  |    2     |S9=6    |Time to wait to identify carrier           |
  |    3     |&C1&D2  |Carrier Detect and hang up on DTR enabled. |
  |    4     |X3      |Mode to using in calling out               |
  |    5     |M1      |Modem speaker on                           |
  |    6     |M0      |Modem speaker off                          |
  |    7     |Q0E0V0  |Send result codes, Don't Echo Commands,    |
  |          |        |Numerical responses                        |
  |    8     |S0=0    |Do NOT auto-answer                         |
  |    9     |S7=60   |Time to wait for carrier                   |
  |    10    |DT      |Touch tone dial out                        |
  |    11    |DP      |Pulse tone dialing                         |
  |    12    |A       |Answer with carrier                        |
  |    13    |;       |Return to command state                    |
  |    14    |D       |Dial prefix                                |
  |    15    |CR>     |Terminator for Command lines               |
  |    16    |W       |Wait for dial tone                         |
  |    17    |S6=2    |Time to wait for dial tone                 |
  |    18    |        |                                           |
  |    19    |        |                                           |
  |    20    |        |                                           |
  |    21    |X1      |Mode to use when dialing out               |
  |    22    |+++     |Modem escape sequence                      |
  +----------|--------+-------------------------------------------+
                                                                        B-8




  ADVICE TO HACKERS
  The strings associated with TECH 1,2,3,4 and 7  are sent to the
  modem every time BackMail resets or hangs up the phone. If your
  modem requires special command strings you may wish to include them
  here.  If your modem does not Accept "&" commands you may wish to
  blank out tech setting 3 to speed the reset of your Modem.
                                                                        C-1




             APPENDIX C: UNDERSTANDING EXTENSION NUMBERS

  In an office enviornment it often happens that many phones share the
  same phone number and differ only in their extension. For this
  reason BackMail allows you to specify your own extension number as
  part of your phone number and to specify extension numbers in
  addition to destination's 7 digit phone numbers.

  In using extension numbers the most important thing to remember is
  that:

          For its own purposes BackMail identifies all destinations by
          their phone number and BackMail treats extension numbers as
          part of that identification.

  This becomes important when you remember that BackMail won't deliver
  or recieve mail from another BackMail unless the other BackMail has
  a phone number (the whole phone number) corresponding to some piece
  of mail.

  If you think about it you will see that this is essential for
  systems with extension numbers. When you call,say, "424-3811 Ext.
  1112", you do not want to deliver messages that are adressed to
  "424-3811 ext.1113."


DECLARING YOUR OWN EXTENSION
  One upshot of all this is that if, when declaring your own phone
  number, you include your extension number, then other BackMailers
  should know about that extension and use it as part of your phone
  number. Note, this is so even if their call to you is a local or
  long distance call.

  Otherwise the following may happen. Other Backmails will call your
  backmail and say: "Hello I have mail for 424-3811". Your BackMail
  will say "Sorry I am 424-3811 Ext.1112". The calling BackMailer will
  say "Ooops, then I have no mail for you!" and will disconnect
  without delivering its mail.

  In the other direction you may call BackMail's that already have you
  listed in their directory as 424-3811, but because your mail comes
  in stamped as being from 424-3811 Ext. 1123, those destinations will
  identify your mail as coming from "unknown".


THE INTERNAL PREFIX
  The prefix "intern" comes pre-defined in BackMail and you can enter
  other prefixes or Suffixes of the INTERNAL type. When a
  destination's phone number bears an INTERNAL prefix/suffix type then
  BackMail will use the 1-4 digit extension number you have associated
  with that destinations phone number.
                                                                        C-2




  If you declare a destination to be an INTERNAL call, but have not
  entered an extension number for the destination then BackMail will
  use the last four digits of the destinations phone number in placing
  its call.

  So, to make an internal call to the destination:

          424-3811 Ext: 12

  BackMail would simply dial "12". On the other hand if you had no
  extension entered for this number but declared it to be an "Intern"
  call, BackMail would try to reach this number by dialing: "3811".

QUICK FIXES
************
In our experience %90 of modem problems among Hayes compatible modems
go away when one does one of the following 3 things:

        If TECH SETTING #1 is "Z" change it to "H0". If it is "H0"
        change it to "Z".

        If your modem does *not* support "&" commands then *blank out*
        the TECH #3 string "&C1 &D2"

        If your modem supports MNP you may find that MNP modems have a
        hard time connecting with non-MNP modems. The simplest fix
        is to turn MNP *off* by including the relevant string in
        TECH #7 or TECH #2. (Eg. for the USR-HST this would mean
        adding "&M0" in one of these TECH strings).
```
{% endraw %}

## SAFETY.TXT

{% raw %}
```
              Make Life Easier:  Take some Sensible Precautions

        Alethic is quite aware that the potential for disaster is great with
all TSR (terminate and stay resident) programs and particularly for those
which read and write files in the background.  Because of this, Alethic has
intensively tested BackMail to a far greater extent than commercial programs
are normally tested.  That there have been many thousands of hours of trouble-
free BackMailing is a tribute to this testing.  But saying this is not
to say that all potential for catastrophic failure has been circumvented.
Since BackMail must run behind another application, there is no way that the
polite behavior, or even sanity of these third-party foreground applications
can be assured.

        For this reason, BackMailers should take a few precautions against the
evil day.  In particular Alethic recomends the frequent backing up of mail files
and phone directory.  This is because the most common symptom of trouble is
a corrupted mail file and/or phone directory.  The files in question contain
not only text but also pointers (which is to say the locations of messages,
headers and other information).  When BackMail writes to the files it must also
update these pointers or the information in the files will become invalid and
the files themselves unreadable by BackMail.  This can happen if a program
running in the forground (the one behind which BackMail is running) prevents
BackMail from writing to its mail files at a crucial time.  Some such
programs can 'tie up' DOS so that BackMail cannot gain access to its files.
BackMailers should also note that the mail files and the phone directory are
all cross-linked; they contain pointers to locations in each other.  This means
that those files must be backed-up together.  The easiest way to do this is by
means of a batch file.

        Suppose, for example, that your BackMail subdirectory is:
                                  C:\BACKMAIL
Here is a batchfile called SAVEMAIL.BAT which takes a 'snapshot' of your
mail files and phone directory in files of the same name but with type
'.SAV'

COPY C:\BACKMAIL\PHONE C:\BACKMAIL\PHONE.SAV
COPY C:\BACKMAIL\INMAIL C:\BACKMAIL\INMAIL.SAV
COPY C:\BACKMAIL\OUTMAIL C:\BACKMAIL\OUTMAIL.SAV

Use a text editor (in non-document mode!) to create a file called SAVEMAIL.BAT
with just these lines in it.  While you are at it, you might as well also
create a file called RESTMAIL.BAT which will be a means of restoring a
previously saved image of mail and phone directory.  Place the following lines
in the batch file:

DEL C:\BACKMAIL\PHONE
DEL C:\BACKMAIL\INMAIL
DEL C:\BACKMAIL\OUTMAIL
COPY C:\BACKMAIL\PHONE.SAV C:\BACKMAIL\PHONE
COPY C:\BACKMAIL\INMAIL.SAV C:\BACKMAIL\INMAIL
COPY C:\BACKMAIL\OUTMAIL.SAV C:\BACKMAIL\OUTMAIL

        Now each and every time your mail files or phone directory increase
in a way it would hurt to lose, give the comand SAVEMAIL at the DOS prompt.
This will overwrite your previously saved images so be careful not to
overwrite uncorrupted images with corrupt ones!  You can be reasonably sure
that your current files are safe if they display properly under the 'maintain'
functions and 'update phone directory', so take a quick look before you issue
the save.

        You are ready for disaster.  Suppose that one day you receive a warning
from BackMail that your mail files have become corrupt (which message you will
also receive if your phone file has become corrupt).  Follow these steps to
recover.
(1) Kill BackMail
(2) From the DOS prompt, give the command RESTMAIL
(3) Restart BackMail
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1841

     Volume in drive A has no label
     Directory of A:\

    ACTIVE   COM       436   5-29-90  11:28a
    BGROUND  COM     37994   5-29-90  11:28a
    BM2      TXT      7429   5-29-90  11:28a
    BMCONFIG COM     23072   5-29-90  11:28a
    CANADA   REG      2147   5-29-90  11:28a
    FGROUND  COM     49928   5-29-90  11:28a
    INSTALL  BAT       883   5-29-90  11:28a
    MANUAL   EXE     77866   5-29-90  11:28a
    MODEMS   TXT     20739   5-29-90  11:28a
    NNANSI   SYS      3598   5-29-90  11:28a
    READ     ME       7113   5-29-90  11:28a
    SAFETY   TXT      3676   5-29-90  11:28a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       574   1-01-80  12:20a
    FILE1841 TXT      2813   7-12-90   3:48p
           15 file(s)     238306 bytes
                           75776 bytes free
