---
layout: page
title: "PC-SIG Diskette Library (Disk #188)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0188/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0188"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "MINITEL"

    MINITEL is an asynchronous communications program for any MSDOS or PCDOS
    machine.  The program's author calls it a "stripped version of TELINK."
    MINITEL can receive or transmit files in XMODEM, MODEM7 (batch) or
    TELINK modes.  It is menu-driven, with all commands accessible by two
    keystrokes.  Error handling is simple and straightforward.
    Documentation is provided on the disk.
    
    Features:
    
    ~ MINITEL  can receive or transmit files in XMODEM,
    MODEM7(batch) or TELINK modes
    ~ MINITEL is menu driven, with all commands accessible by two
    keystrokes
    ~ Most command keys are mnemonic
    ~ Error handling is simple and straightforward
    ~ Error recovery usually consists of some default action
    ~ Illegal baud rate selections result in no change
    ~ All error messages are in plain English, so you don't have
    to memorize secret codes
    
    System Requirements: Serial port, and a modem.
    
    How to Start:  From DOS, enter TYPE MINITEL.DOC for documentation.  To
    run MINITEL, at the system prompt enter MINITEL <ENTER>.
    
    File Descriptions:
    
    IBMMINI  EXE  IBM PC version of MINITEL MINITEL  ABS  Abstract
    MINITEL  DOC  Documentation
    MINITEL  LBR  File transfer program
    MINITEL  DQC  Compressed documentation
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #188, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  IBMMINI .EXE         CRC = CF 1F

--> FILE:  MINITEL .ABS         CRC = 11 BB

--> FILE:  MINITEL .DOC         CRC = 2A 6B

--> FILE:  MINITEL .DQC         CRC = 6C DA

--> FILE:  MINITEL .LBR         CRC = 69 FA

--> FILE:  XXX     .            CRC = 18 2D

 ---------------------> SUM OF CRCS = FA 46

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## MINITEL.DOC

{% raw %}
```
	(CRC) MINITEL Operating Manual (c) T. Jennings 1983	Page 1





        
        -----------------------------------------------------------------
             This  program  is made available free of cost  to  all  non-
        commercial users. It is not to be sold or traded in any form. 
        
        
             Please  leave any questions,  suggestions and problems at my 
        BBS:
                  Fido (415)-864-1418
        
             MINITEL  is  a  stripped version of  TELINK.  The  following 
        functions  have  been  removed:   text  download,   auto-dialing, 
        telephone  directory  support,  SmartModem  modes  and  controls, 
        console  control character  processing,  configureable  keyboard, 
        file transmission/reception statistics.
        -----------------------------------------------------------------
        
        	MINITEL is an asynchronous communications program for any 
        MSDOS  or  PCDOS machine.  (A version must be  configured  for  a 
        particular machine.) 
        
        	MINITEL  can receive or transmit files in XMODEM,  MODEM7 
        (batch)  or  TELINK modes.  TELINK mode is  described  in  detail 
        later,  but  basically  it is a MODEM7 compatible  protocol  that 
        supports DOS exact file sizes and dates.
        
        	This manual is divided into a number of sections:
        
        	Section 1	Operating TELINK
        	Section 2	Quick Command Summary
        	Section 3	Command Descriptions
        	Appendix A 	File Transmission Format
        	Appendix B 	File and Path names
        	Appendix C	Command prompt Line Editing
        	Appendix D	TELINK console details
        	Index
        
        	The  first  section walks you through operating  MINITEL,  
        and gives you a feel of how it works.   Section 2 is a  one  page  
        list  of MINITEL's  commands,    followed  in section  3  with  a  
        complete descrip tion of each.  You will find all commands in the  
        index. You do not need to read any appendixes to operate MINITEL;   
        they  are provided  for more detailed  operating  and   technical  
        information.
        
        	To   run  MINITEL,   you need (besides the computer)  64K   
        of memory,   a  disk of some sort,  a serial port,  and a  modem.   
        You  will  have  to refer to your modem  manual  for  details  on  
        dialing and making connections.











	(CRC) MINITEL Operating Manual (c) T. Jennings 1983	Page 2





        
        1.00            O P E R A T I N G   M I N I T E L
        
        	MINITEL  is menu driven,   with all  commands  accessible  
        with  two   keystrokes.   You   do  not need to  enter  and  exit  
        "modes"  or levels to get where you want.  Most command keys  are 
        mnemonic. 
        
        	Error  handling  is  simple,    straightforward  and  non 
        dangerous,   especially in entering keyboard commands.  (Like all 
        programs,    you  can  bash  diskfiles if you try hard   enough.)  
        Error recovery usually consists of some default action;  entering   
        a non-existent command results in a list of available   commands;   
        ente ring  a blank line at a prompt quits that command;   illegal   
        baud rate  selections  result in  no  change,    etc.  All  error  
        messages are  in plain English,   so you don't have  to  memorize  
        secret codes.
        
        	Running MINITEL is easy: at the system prompt, type:
        
        	A: MINITEL <cr>
        	
        	MINITEL  clears the screen,  displays it's signon on  the  
        top two lines,  and waits for commands.  At this point,  anything  
        you type goes directly to your modem;  for a SmartModem,  you can  
        dial and make your connection.


































	(CRC) MINITEL Operating Manual (c) T. Jennings 1983	Page 3





        
        Entering Commands:
        
        	MINITEL   provides  fancy line editing whenever you  need   
        to enter filenames or whatever; see Appendix C for details. 
        
        	MINITEL  is always in communication mode;  if  the  modem 
        were  to receive data,  it would be displayed on the screen  now,  
        and you could type directly back to it. 
        
        	With  the  cursor still in the lower  left  corner,  type 
        ESCape. The cursor now moves to the upper left corner, and types:
        
        		Command: _
        
        	If you wait a second or so, the menu is displayed.
        
        	Entering  one  of the command letters from the  menu  now 
        executes  that  command.  (How to send an  ESCape?  Type  another 
        ESCape.)  If  you type a key that's not a command,  MINITEL  will 
        type  the menu again (if it's not already there),   display  your 
        screen,  and return the cursor to where it came from. You can get  
        the menu  at  any time by typing the ESCape key,    and   waiting   
        about one  second.
        
        	If  you type the ESCape key,  followed by a  command  key 
        within  one  second,  the  command will be  executed  immediately 
        without  displaying the menu.  This provides an expert mode  once  
        you remember the command keys.
        






























	(CRC) MINITEL Operating Manual (c) T. Jennings 1983	Page 4





        
        2.00              C O M M A N D   S U M M A R Y
        
        Here is a quick list of command available in MINITEL.
        
        	Text and character oriented commands.
        
        ESC C	Save all console conversation.
        ESC S	Stops the 'C' command.
        ESC L 	Auto linefeeds on.
        ESC M 	Disable Auto line feed (default)
        ESC F 	Full duplex. (default)
        ESC H 	Half duplex.
        ESC ESC Send an ESCape.
        ESC V 	Parity selection. (none, default)
        
        	File oriented commands.
        
        ESC R 	Receive file(s) in selected mode
        ESC T 	Transmit file(s) in selected mode
        ESC N   Select a file transfer protocol
        
        	System and miscelaneous commands.
        
        ESC ?	List current MINITEL settings.
        ESC Q 	Quit. Closes any text collection file.
        ESC B	Select a baud rate for the modem. Default is 300.
        ESC Y	List disk files, sizes and transmission times.
        































	(CRC) MINITEL Operating Manual (c) T. Jennings 1983	Page 5





        
                    C O M M A N D    D E S C R I P T I O N S 
        
        	All  of  the following commands act somehow on the  disk. 
        Some  create files and write on the disk;  with these you can  do 
        things like delete files or change their contents,  so some  care   
        is required.
        
        	ESC Y		List disk file information
        
        	The   'Y'  command is similar to a DIR command  from  the  
        operating  system,   but   gives you more information.   You  are 
        asked for  the name of files to look for;  entering an empty line  
        is the same as *.*, like the DIR command.
        
        	Under  MSDOS  version 2.00,  you can  enter  a  pathname, 
        specifying the directory you want to look at. If you do not, only 
        files  within the current directory are listed.  Wildcards cannot   
        be used in the directory portion of the path name.
        
        	In  addition to the file names,   MINITEL gives  you  the 
        file  size,   in  bytes,   and the time it would take to send it,   
        at the current baud rate.(See the 'T' and 'R' file   transmission  
        commands.)
        
        	The transmission times are of course approximate, because 
        errors sometimes occur,  requiring blocks to be resent, and other 
        variables in both computers. The guesses are a little on the safe 
        side for that reason.  It also takes time for the person  running 
        each  each  computer to type whatever is necessary to start  file 
        transmission,   and  of  course  this cannot  be  accounted  for.  
        Transmission  times are most accurate when sending more than  one 
        file, using the automatic batch mode.
        
        	After all the files are listed, the total file count, and  
        the total  size and transmission times for all of the  files   is  
        listed.























	(CRC) MINITEL Operating Manual (c) T. Jennings 1983	Page 6





        
        	ESC C 	Collect text
        
        	This  asks you for a file name,  then starts putting  all 
        text  you  see  on the screen into  it.   Everything  the  remote 
        computer   sends you is saved as is.   (Control-Z characters  are  
        NOT  put  in the file if they appear from the modem  or  console;   
        this prevents "lost" data.    Though one is put at the end of the  
        file when it is closed.)
        
        	The  text  file  can be closed  by  the  S  command,   or 
        automatically   by  the  ESC Q command.   You will get  an  error 
        message  if you try an ESC C when one is already in effect.
        
        	Text  is  temporarily stored in memory;  every once in  a 
        while it must be written out to disk to make room for more.  When 
        MINITEL  is  almost out of room,  it sends  a  control-S  to  the 
        remote  computer,   to tell it to pause sending data.   Up to  82 
        characters after the control-S are collected,  to give the remote  
        a chance to stop.  Then, the text is written out to the disk, and  
        a control-Q  is sent to tell it that it may continue.    This  is  
        done automatically by MINITEL. 
        
        	Most  remote  computers will pause when  a  control-S  is 
        received;   if   it  does  not,   you will probably  lose  a  few 
        characters.  On systems with hard disks, you won't lose more that   
        10 or so; with mini-floppies, you may lose up to 40 or so.
        
        	If  the  disk fills up while collecting  text,  an  error 
        message  will  appear at the top of the  screen.  If  the  screen 
        happens  to  scroll while you're not looking,  you won't see  the 
        message. Oh well.
        
        	When   MINITEL is first run,   it gets as much memory  as   
        it can  (up to 64K) to use as the text buffer.   You can see  the  
        amount available using the ESC ? command.   The only  thing  this  
        affects  is  how  often  MINITEL must write saved  text  to   the   
        disk;  the  more memory, the less often it must write it out.
        
        
        
        
        
        
        	ESC S 	Stop text collection
        
        	Stops the collection of text.  (The 'C' command.) You get   
        an error  message if you're not  collecting  text.     Appends  a  
        control-Z  to  the file,   flushes it and closes the disk   file,  
        where  you  can type,  print or edit it.  If you forget  to  stop 
        collecting,   MINITEL  will  do  it  when you exit  via  the  'Q' 
        command.








	(CRC) MINITEL Operating Manual (c) T. Jennings 1983	Page 7





        
        	ESC T 	Transmit file(s) 
        	ESC R 	Receive file(s) 
        
             The  T  (transmit)  and  R (receive) commands  are  used  to 
        transfer files,  to a similar program running on another machine. 
        Either   binary  or  text  files  can  be   transmitted.    Error  
        detection  and recovery are done automatically.
        
        	There  are  a  number  of  ways in  which  files  can  be 
        transferred; see ESC N for details. Selecting the right method is 
        important, as transfers sometimes will not work. MINITEL tries to 
        automatically  choose  the right transfer mode,  but  it  is  not 
        always possible.
        
             Invoking  either command prompts you for files to be sent or 
        received.  Except in XMODEM mode (again, see ESC N) you can enter  
        any number  of  filenames,    where  each  can  contain  wildcard 
        characters.  Seperate each name with spaces commas or plus signs.  
        The filenames can contain drive letters,  and pathnames on  MSDOS  
        v2.00.
        
             The  default  mode on CP/M is MODEM7,  and on MSDOS  is  the 
        TELINK mode.   The TELINK mode is identical to MODEM7,  except it 
        "sneaks in"  information on exact file size and creation date. If 
        you  use this  mode  with  MODEM7 running on the other  computer,  
        that  computer   will  get four or six errors on the  first  data  
        block,   by which  time  MINITEL will figure out that it will not 
        accept   the  extra   information,  and finish the  transfers  in 
        MODEM7 mode.
        
             All  display transmission status continually on the top  two 
        lines.   The   current  block  number   being   sent,   estimated 
        transmission  time  left,  name,  etc is displayed.  The time  is 
        constantly  recalculated,  and may be blank if:  (1) less than  1 
        second,  or (2) receiving a file where the file size is  unknown. 
        EXAMPLES:
        
             The  following  are valid filenames that can be entered  for 
        transmitting files. (XMODEM can only accept a single filename.)
        
             FOO.COM                            send one file
             B:FOO.COM                          send one file
             FOO.*                              one or more files
             B:FOO.*,XYZ.ASM                    one or more files
             FOO.COM,\BIN\*.COM,/WORK/*.ASM     many files
             AFILE.EXE,BFILE.DOC ANOTHER.FIL    many files
        
             These  are  valid entries for  receiving  files.  Note  that 
        filenames  themselves  are ignored,  since the actual  names  are 
        received along with the files.
        
             B:                                 put files on drive B:







	(CRC) MINITEL Operating Manual (c) T. Jennings 1983	Page 8





             ?                                  files to default drive
             *                                  same as above
             \bin\                              put files in \BIN\
             foo                                in default drive 
























































	(CRC) MINITEL Operating Manual (c) T. Jennings 1983	Page 9





        
             ESC N          Select file transmission mode
        
        
        	MINITEL  now  supports all popular  file  transfer  modes 
        currently in use. These are:
        
                XMODEM		One file at a time, popular on remote systems,
        	MODEM7		Similar to XMODEM, one or more at a time,
        	TELINK		Similar to MODEM7, but sends DOS info.
        
        	In  addition,  transfers  can  be  done  with  the  older 
        CHECKSUM  method,  or the newer,  more  reliable,  CRC  (Cyclical 
        Redundancy Check). This of course makes for six different ways to 
        handle files, but it's not really that bad.
        
        	When receiving file(s) (ESC R) you must select either CRC 
        or  CHEKSUM properly.  Most systems that support CRC say so  when 
        you  start the transfer.  If you get it wrong,  then you'll get a 
        "timeout" or other error; change to CHECKSUM and it should work.
        
        	The  methods  and how to select one is  described  below; 
        first, some suggestions on how to choose the right one.
        
        BULLETIN BOARDS AND OTHER REMOTE SYSTEMS:
        
        	Most of these support only XMODEM, so there is usually no 
        choice!  (Fido  supports all methods.) More and more systems  are 
        supporting CRC mode;  MINITEL defaults to CRC mode. Try selecting 
        XMODEM and CRC; if that does not work, try XMODEM and CHECKSUM.
        
        TO ANOTHER COMPUTER OR SYSTEM USING MINITEL, TELINK, OR MODEM7:
        
        	Using  the TELINK method,  CRC vs.  CHECKSUM  is  handled 
        automatically;  this  is  the  best way to  transfer  files  from 
        machine  to machine.  It handles multiple files,  etc so you dont 
        need to do ESC T and ESC R for each file. If both have MINITEL or 
        TELINK,  then use TELINK and CRC;  if either machine has an older 
        MINITEL  or TELINK that does no support CRC,  it will  switch  to 
        CHECKSUM automatically.
        
        	If  MODEM7 is used on one or the other,  you may have  to 
        select CHECKSUM.  TELINK mode will switch to MODEM7 automatically 
        if necessary.
        
        SELECTING THE TRANSFER METHOD:
        
        	After  entering  ESC N,  you will see a small  menu.  You 
        select a type by typing the first letter of a selection.  At  the 
        left edge,  you will se the current setting;  just type the right 
        letter until you see what you want,  then type [CR]. This setting 
        is  also displayed by ESC ?  and also when actually  transferring 
        files.







	(CRC) MINITEL Operating Manual (c) T. Jennings 1983	Page 10





        
        MODEM7:
             This is the most popular method used to transfer files,  and   
        is available on almost all CP/M and MSDOS machines.   The  MODEM7 
        compatible  programs  can transfer one or more files at  a  time, 
        with  full  error detection and correction.  The  limitations  on 
        MSDOS  are  that the original file creation time and  exact  file 
        size are lost.  For text files this does not matter, but for data 
        base and spreadsheet files, it can cause great problems.
        
        XMODEM:
             Most frequently used on bulletin boards and the like,  it is  
        the original MODEM transfer protocol.   It can transfer only  one  
        file  at  a  time,    and  the  user  must  enter  the   filename 
        specifically.  (No  wild card characters.) It is included  mostly  
        for completeness,   and should only need to be used for computers  
        that do not support MODEM7 or TELINK modes.
        
        TELINK:
             The TELINK mode is an extention of the MODEM7 protocol,  but 
        includes extra information on each file sent.  After the filename   
        is sent,  the file size,  creation time and date are sent  before   
        the first data block.    If MINITEL receives this block,   it  is  
        used  to exactly duplicate the file on the receiving end.
        
             This mode is still compatible with the MODEM7 mode. However, 
        MODEM7  will get four or six errors while transferring the  first 
        file,   while   MINITEL  figures out that it cannot  accept  this 
        data.   If  it   cannot  be accepted,   then  MINITEL  will  stop  
        sending   this  info,  and will operate for the rest of the files  
        in MODEM7 mode.
        
        CRC / CHECKSUM:
        
        	Entering  C  at  the prompt will toggle between  CRC  and 
        CHECKSUM.   The   CRC  method  is  a  very  reliable  method   of 
        transferring files; the worst error rate is 99.9969% reliability! 
        CHECKSUM is probably about 95% or more accurate. Use CRC whenever 
        possible,  CHECKSUM  only  if CRC isn't supported  by  the  other 
        computer.




















	(CRC) MINITEL Operating Manual (c) T. Jennings 1983	Page 11





        
        	The  following commands control the way MINITEL  acts  to  
        the remote computer,   and you. All of these are "not dangerous",  
        i.e. you cannot wreck anything with them.
        
        	ESC ?		List MINITEL status
        
        	The  current  settings  of the commands  in  MINITEL  are 
        listed  on the screen, like so:
        
        	<Full, half> duplex			(ESC F, H)
        	Auto linefeed <on, off>		(ESC L, M)
        	The cursor is at line 10 column 23
        Either:
        *	Collecting text in file TEXT.FIL,	(ESC C, S)
        *	 4022 saved so far, room for 18101 more 
        Or:	Not collecting text
        	Currently <300, 1200, 9600> baud	(ESC B)
        	<TELINK,  MODEM7,  XMODEM> file transmission	(ESC N,J)
        	<no, odd, even> parity selected		(ESC V)
        
        	Most   of  these can be changed via a  MINITEL   command.  
        The command  is listed to the right of each,   above.  Others are 
        just internal status: they are:
        
        	The cursor is at line <n> column <n>
        
        	This  just tells you where the cursor is.  Some  bulletin 
        boards  and  editors  require  you to fit  typed  lines  in  some  
        arbitrary  line length;   with this you can see how close to  the  
        end you are. It is updated every time you type a key.
        
        Either:	Collecting text in file TEXT.FIL,
        	 4022 saved so far, room for 48101 more in memory
        -or-	Not collecting text
        
        	If  you  have not started text collection with the ESC  C 
        command,  you  will get "Not collecting text",  which means  just 
        what it says.
        
        	If  you  are collecting text,  MINITEL will tell you  the 
        name  of the file being used,  and some simple statistics on  it.  
        The "...  saved so far" is the number of characters saved in  the 
        disk   file.  The  "room  ..." message tells you about  how  many 
        characters   will   be  saved in memory before they  need  to  be 
        written   out  to  disk.   You do  not ever need to  worry  about  
        the   numbers  here;   MINITEL automatically takes care of saving 
        text in the disk file.  (See the ESC C command description) 












	(CRC) MINITEL Operating Manual (c) T. Jennings 1983	Page 12





        
        	ESC ESCape
        
        	Not  really  a command,  it just sends an ESCape  to  the 
        remote. The cursor will still go up to the command area, but will   
        go right back down.
        
        
        	ESC F	 	Full duplex
        	ESC H	 	Half duplex
        
        	Changes  the  line operating mode.  The default is  Full. 
        Half  duplex caused keyboard characters to be displayed  as  they  
        are typed.
        
        	ESC L	 	Enable Auto linefeed
        	ESC M 		Disable auto linefeed
        
        	When enabled, causes a line feed character (control-J) to   
        be typed after each carriage return typed. This is independent of   
        half duplex. The linefeed is sent to the remote.
        
        
        	ESC V	 Parity selection
        
        	The  default  is no parity.  Parity is  generated  within 
        MINITEL, and  is  either none,  even or odd.  If even or  odd  is 
        selected,   the   parity  bit replaces bit 7 of  the  data  byte.  
        (Obviously   only  7  bit  data can be  sent.)  Parity  will   be  
        suspended when file transmission or reception is used.
        
        	ESC Q	Exit to DOS
        
        	The  'Q' command exits MINITEL,  and returns  control  to 
        DOS.   If  text  collection  is on (via the 'C' command) text  is  
        saved  before exiting.
        
        	CAUTION:
        	You must remember to disconnect from the remote computer. 
        MINITEL cannot do it when you Quit.  You will still  be connected  
        to the remote computer.
        
        	Of you do quit,  (to change diskettes,  or whatever) then  
        run MINITEL again,  do not forget to set the baud rate again,  as  
        MINITEL cannot remember what it was set to when you  exited,  and   
        it always selects 300 baud when started.
        
        	ESC B		Baud rate
        
        	Tells you the current baud rate,  and lets you change it. 
        Only 300,  1200 and 9600 are implemented.  A blank line or a  bad 
        selection results in no change.  Once you type CR, it changes the 
        rate, and displays the rate now in effect. 







	(CRC) MINITEL Operating Manual (c) T. Jennings 1983	Page 13





        
        
             MINITEL  supports all popular file transfer  modes:  XMODEM, 
        MODEM7, TELINK, in CRC or Checksum modes.
        
        	All  use  an identical technique to  transmit   the  data   
        in   the   file;    the  difference is that   batch   mode   also  
        transmits  the  file  name,   and there is a method to  tell  the  
        receiver "no more files".
        
        	Batch mode operates in the following manner:
        
        	Send filename,
        	Send data,
        	Send end of file,
        	Send filename,
        	Send data,
        	Send end of file,
        
        	....
        
        	Send "no more files".
        
        	Single file mode is simply:
        
        	Send data,
        	Send end of file.
        
        
        BATCH MODE FILENAMES:
        
        	In  batch  mode,  the file name is sent before the  data. 
        When  the  receiver is ready,  it sends a NAK  character  to  the 
        transmitter,  telling it that it's ready to receive the file. The 
        transmitter then sends an ACK to acknowledge that.
        
        	The  11 filename characters are sent one at a  time,  and  
        the  receiver  acknowledges  each by sending an  ACK  after  each 
        character. After the last one has been sent, the transmitter then 
        sends an ___,  indicating end of name, at which time the receiver 
        sends  a checksum of all the characters it's received so far.  If  
        the checksum matches the transmitter's checksum,  the transmitter  
        sends an ___,  indicating filename sent and received properly. If   
        at any point during this something goes wrong,   the  transmitter   
        sends an ___,  indicating a bad transmission,  and both computers   
        abort.
        
        	If the first filename character is an EOT,  it  indicates 
        that  there  are no more files,   i.e.  end of batch  mode.  Both 
        computers are then finished with the file transmissions.










Appendix A	Block Mode File Transmission Page 14





        SINGLE FILE TRANSFER and BATCH MODE DATA TRANSFER
        
        	File  data  is sent 128 bytes at a time,   in a  132 byte 
        block. After a block is sent to the receiver, the receiver either 
        acknowledges  good or bad reception of the block.  If  good,  the 
        next  block is sent,  otherwise the block is retransmitted up  to 
        some predetermined number of times. Once the entire file has been 
        transmitted,  an  end  of transmission character  is  sent.  This 
        should be also acknowledged by the remote.
        
        	The   first  character  sent  by  the  file   transmitter  
        determines  what  kind of block it is;  an ASCII SOH (01 hex)  or 
        Start  Of Header,   indicates an upcoming block,  and an EOT  (04 
        hex), or End Of Transmission, means no more blocks. 
        
        	If  the first byte of the block is an SYN,  it  indicates 
        it's a TELINK extended information block.  The 128 byte data area 
        then  contains extended system information.  The first four  byte   
        are  the file size,   in bytes,   and the next four bytes contain 
        the  MSDOS creation date and time.   This block is only sent once  
        per   file,  just be fore the first data block.  If the  receiver 
        does  not  properly acknowlege this block (i.e.    MODEM7  thinks 
        it's   a   bad  block) TELINK will not make further  attempts  at 
        sending  it.    In  this  case,   TELINK will write all  received 
        data  blocks as is  to  the disk,  which will cause the file size 
        to  be  rounded off to the  next highest multiple  of  128  bytes 
        (like MODEM7).   If the file size is received  properly, the file 
        size will be exact.
        
        	The receiver uses one of two ASCII characters to indicate  
        the sucess  of  the block just  transmitted:   ACK  (06  hex)  to 
        acknowledge  correct  reception,   or  NAK  (15  hex),   Negative 
        Acknowledgement, to indicate the block was received incorrectly.
        
        	Each   block   contains  a  block  number,   which   (not 
        coincedentally)  corresponds to a CP/M file record number.  There  
        are 128 data bytes per block,    and all other bytes in the block  
        are overhead.
        
        	The data block format is like so:
        
         	SOH SEC /SEC data0 data1 ... data126 data127 CHKSUM
        or      SOH SEC /SEC data0 data1 ... data126 data127 CRCH CRCL
        
        	Where:
        
        	SOH is the ASCII Start Of Header character,
        
        	SEC is the 8 bit disk record number,
        
        	/SEC  is  the  ones complement of SEC,  the  disk  record 
        number, used for error checking. (later...)
        







Appendix A	Block Mode File Transmission Page 15





        	data0 ...  data127 are the 128 bytes of data.  These  are  
        all 8 bit quantities, with no contraints as to the contents.
        
        	CHKSUM  is an 8 bit checksum of the 128 data  bytes.  The 
        idea  is that the receiver makes it's own check sum of the  data, 
        adds it to the CHKSUM, and the result should become zero. This is  
        one  of  the  criteria  used  in selecting  ACK  or  NAK  as  the  
        aknowledgement.
        
                CRCH is the upper 8 bits of the CRC, and
                CRCL is the lower 8 bits.
             Like  the  checksum  method,  CRC is used  to  validate  the 
        contents of the data block. The CRC is a polynomial that the data 
        gets passed though. The CCITT method is used, which is:
        
                       X^16 + X^12 + X^5 + 1
        
             Each  data  byte is passed through this,  and the result  is 
        sent to the receiving computer, which makes the same calculation. 
        if both match, then the block was good. 
        
             CRC  vs.  CHECKSUM method is selected just before  the  file 
        transfer  starts;  when the receiving end is ready,  it sends  an 
        initial character to tell the sender it is ready.  This character 
        (sent  by the receiver) determines the transfer mode:  NAK  means 
        CHECKSUM, C (capital C) means CRC. (Older systems don't recognize 
        the  C  character;  it  waits for the  NAK,  which  never  comes; 
        therefore  it  is  important  to select the  right  mode  on  the 
        receiving end.
        
             The  accuracy  of the CRC method is:  detects  100%  of  all 
        single  and double bit errors,  all errors with an odd number  of 
        error  bits,  all burst errors of length 16 or less,  99.9969% of 
        all  17 bit error bursts,  99.984% of all possible  longer  error 
        bursts.
        
             The  original XMODEM CRC method and polynomial algorithm was 
        done  by Paul Hanksknecht,  of Carpenter  Associates,  Bloomfield 
        Hills, MI.





















Appendix A	Block Mode File Transmission Page 16





        
        
        	MINITEL   can   be used on any version of  MSDOS  or   PC  
        DOS.  Version  2 or higher of either DOS,   however,   has a more 
        complex file structure. MINITEL supports both.
        
        	Under older DOS's,  (before version 2) only "normal" file 
        names can be used: The format is:
        
        	d:filename.ext
        
        	Where:
        
        	d:		is an optional drive specifier,
        	filename	is an 8 character maximum name,
        			* or ? being allowed for certain
        			commands,
        	.ext		is an optional filename extention,
        			wildcards * and ? the same as in
        			'filename'.
        
        	FRUMP.ASM, *.COM are typical examples.
        
        	Under later DOS's,  however,  full path names can be used 
        wherever a filename is asked for. This takes the form:
        
        	pathname\filespec
        
        	Where:
        
        	pathname	is a valid path name specifier. It
        			may contain one or more directory
        	specifiers, seperated by a \, and also / if the 
        	switch character has been set to - in CONFIG.SYS.
        
        	filespec	is a "normal" filename, described 
        			above.
        	/BIN/*.COM
        	/MARCH/DOG/BARF	are typical examples.
        
        	You  can  of course enter a "simple"  filename  in  newer 
        DOS's, as long as the file is in the current directory.
        
        	Any  filename  typed  in  to  MINITEL can  be  up  to  80 
        charaters long.   In any case,   see the appropriate DOS  manuals 
        for filename  and path name restrictions and operation.














Appendix B	Filenames and Pathnames                Page 17





        
        
        	Obviously some commands will require more input than just  
        the  ESC/command  key;    filenames and baud rates are  the  most  
        common. MINITEL prompts you for these as necessary. When ever you  
        are prompted for a filename or whatever,   you enter it by typing   
        the name,    and  a <cr> when done.  Up until you type the  <cr>,  
        however, you can do some simple editing of the line.
        
        	Control keys are used to edit the line. Control keys that 
        areen't    used   by MINITEL are ignored.     The following   are  
        the control keys used:
        
        	^C	Delete the entire line
        	^X	Same as ^C
        	^U	Same as ^C
        	^Y	Same as ^C
        	^H	Delete the last character typed
        	^G	Same as ^H
        	^S	Same as ^H
        	DEL or RUBOUT
        		Same as ^H
        
        	Carriage return (CR),  linefeed (LF) and ESCape (ESC) are 
        used to enter the line, executing it.
        
        	Two more special keys are:
        
        	^R	Retype the previous line
        	^D	Retype the last deleted character
        
        	These  can be useful if you want to enter the same  thing  
        as last time.  If you delete the line (using ^C, ^X, etc) you can  
        get it all back ("undelete" the line) by typing a  ^R,   and  the  
        last character by typing a ^D.   Also,  you can get back the line  
        you used for the last command by typing ^R before anything  else.  
        After  you type any other key,  (exceptt an editing key) you lose  
        the old contents.
        
        	All  commands  can be aborted by entering a  blank  line. 
        Either enter <cr> at the prompt,  or delete the line,  then  type 
        <cr>.


















	Appendix C	Line editing 			Page 18





        
        
        	MINITEL   does   some processing of the  characters   you  
        see displayed  on  the console.   None of this processing affects  
        the text collected in a disk file using the ESC C command.
        
        	This processing is done to ensure a "clean"  screen,  and  
        to make sure that MINITEL can keep track of where the cursor is.
        
        	All  characters  have bit 8 stripped off,  to  make  sure 
        they're 7 bit ASCII.  Some terminals respond differently to 8 bit 
        characters,  and some strip them internally. In particular, files 
        created by popular editors such as WordStar set bit 8 on carriage 
        returns   (CR  ) to make "soft paragraphs",   and  MINITEL  would  
        not otherwise know it was a carriage return.
        
        	Certain   code  sequences  make a mess  of  the  terminal  
        display;   these  characters can be filtered out using the ESC  I  
        com  mand,   and  not sent to the display.   Mainly this  is  the 
        control-Z character,   which  clears  the screen on many  popular  
        terminals, such  as the ADM-3A,  most Televideo models,  and  the  
        Hazeltine Esprit. 
        
        	Tabs  are  expanded within MINITEL to space over  to  the 
        next  tab column,   which are fixed at every eight columns.  Tabs 
        are put  as is into any ESC C disk file. 
        
        	None  of this filtering ever affects characters put  into  
        the text collection file, if one is used.































	Index





        
                Auto linefeed........................... 4,10,11
                Auto-dialing............................ 1
                Baud rate............................... 4,11
                Binary.................................. 7
                Collect text............................ 6
                Collecting text......................... 6
                Command key............................. 3
                Command letter.......................... 3
                Commands................................ 2
                Control-J............................... 11
                Control-Q............................... 6
                Control-S............................... 6
                Control-Z............................... 6,6,17
                CP/M.................................... 8
                CR...................................... 17
                Cursor.................................. 3,3
                DEL..................................... 16
                DIR command............................. 5
                Disk.................................... 1,6
                Error detection......................... 7
                Error handling.......................... 2
                Error messages.......................... 2
                Error recovery.......................... 2
                ESC ?................................... 4,6,10
                ESC B................................... 4,11
                ESC C................................... 4,6,6,10,17
                ESC ESC................................. 4,11
                ESC F................................... 4,11
                ESC H................................... 4,11
                ESC I................................... 17
                ESC L................................... 4,11
                ESC M................................... 4,11
                ESC N................................... 4,7,8
                ESC Q................................... 4,6,11
                ESC R................................... 4,7
                ESC S................................... 4,6
                ESC T................................... 4,7
                ESC V................................... 4,11
                ESC Y................................... 4,5
                ESCape)................................. 3
                Exit to DOS............................. 11
                Expert mode............................. 3
                File count.............................. 5
                File size............................... 5
                File transfer protocol.................. 4
                File transmission mode.................. 8
                Filenames............................... 7
                Files................................... 5
                Full duplex............................. 4,11
                Half duplex............................. 4,11
                Memory.................................. 1,6,6
                Menu.................................... 2,3,3







	Index





                MINITEL................................. 1
                Modem................................... 1,3
                MODEM7.................................. 1,7
                MODEM7:................................. 8
                Parity.................................. 4,11
                Pathname................................ 5
                Quit.................................... 4
                Receive file(s)......................... 4,7
                RUBOUT.................................. 16
                SmartModem.............................. 1
                TELINK.................................. 1,7
                TELINK:................................. 9
                Text.................................... 6
                Text collection......................... 6
                Text download........................... 1
                Text file............................... 6
                Transmission status..................... 7
                Transmission time....................... 5
                Transmission times...................... 5
                Transmit file(s)........................ 4,7
                Wildcards............................... 5
                XMODEM.................................. 1,7
                XMODEM:................................. 8
                ^C...................................... 16
                ^D...................................... 16
                ^G...................................... 16
                ^H...................................... 16
                ^R...................................... 16
                ^S...................................... 16
                ^U...................................... 16
                ^X...................................... 16
                ^Y...................................... 16


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0188

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT       841  11-15-84   7:51a
    CRCK4    COM      1536  10-21-82   7:54p
    IBMMINI  EXE     30208   4-11-84   2:31p
    MINITEL  ABS       384   4-11-84   2:30p
    MINITEL  DOC     42624   4-11-84   2:54p
    MINITEL  DQC     21888   4-11-84   2:31p
    MINITEL  LBR     52736   4-11-84   1:30p
    XXX                512   6-03-84  10:43p
            8 file(s)     150729 bytes
                            8704 bytes free
