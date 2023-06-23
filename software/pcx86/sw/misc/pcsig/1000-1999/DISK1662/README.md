---
layout: page
title: "PC-SIG Diskette Library (Disk #1662)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1662/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1662"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE1662.TXT

{% raw %}
```
Disk No: 1662                                                           
Disk Title: RSTPRINT                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: Rstprint                                                 
Author Version: 1.1                                                     
Author Registration: $5.00                                              
Special Requirements: None.                                             
                                                                        
The on/off switch is often the first thing to fail with computer        
products; so quit shortening the life of your printer when RSTPRINT will
reset your printer without ever reaching for the switch.  This easy to  
use program quickly resets any printer on a parallel port on your system
It does not check for any other operation, just issues a reset.         
                                                                        
RSTPRINT is unique in that it does not require the printer to be ready, 
or on-line.  If the printer is powered on and not ready, off-line, it   
will be set to a ready condition, on-line, after RSTPRINT is run.       
RSTPRINT causes the printer to do a power-on reset, which is the same as
turning the printer power off and back on.  RSTPRINT is an excellent    
program to use after you have done some fancy printing because it sets  
the printer back to its default settings.                               
                                                                        
File Descriptions:                                                      
                                                                        
RSTPRINT  EXE Main program.                                             
RSTPRINT  DOC Documentation.                                            
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk #1662  RSTPRINT >>>>                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type:  CD\RSTPRINT (press enter)                      ║
║                          RSTPRINT (press enter)                         ║
║                                                                         ║
║ To print documentation, type:  COPY RSTPRINT.DOC PRN                    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## RSTPRINT.DOC

{% raw %}
```

                             RSTPRINT.DOC
                             RSTPRINT.EXE
                       Copyright 1988 by Harry P Calevas
                                                        
IMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM;
:                       Disk Copywrite Information                         :
LMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM9
:          Programs and Documents in this file copywrite by                :
:                                                                          :
:          DDDDDD |       Harry P. Calevas         | DDDDDD                :
:                                                                          :
:          DDDDDD |          P O Box 830           | DDDDDD                :
:                                                                          :
:          DDDDDD |          Trenton Ga            | DDDDDD                :
:                                                                          :
:          DDDDDD |                    30752       | DDDDDD                :
:                                                                          :
:  Day Time Phone Number (404 ) 657-5484___________________                :
:                                                                          :
LMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM9

      What is RSTPRINT
      --------------
       A simple printer reset program. It does no more than reset the printer on
ALL PARALLEL PORTS on the system . No check for any other operation .Printer
does not have to be ready ,online or even on , program does not wait for printer
.For all other programs I have seen the printer must be ready ,not this one ,
but if on ,it should be ready after the reset! If printer is on, offline or on
line and on a parallel printer port, it should do a poweron reset, just as if it
had been powered off and back on(!) with all the same results!!. Use care with
spoolers!

This program was written to reset the printer back to its default settings after
doing some fancy printing.It does and, if spooling ,right in the middle of the
spooled printout!

                      Use at your OWN risk ,no guarantees!
                    just type     (drive:) RSTPRINT  to run.

                                   DISCLAIMER

      I  suggest  that  you  make a copy of the original diskette before you get
started. Most of my programs were  written  to  solve a problem on my system and
may or may not work on other systems. In no event will the I be  liable  to  you
for  any damages,including any lost profits, lost savings or other incidental or
consequential damages arising  out  of  the  use  of  or  inability to use these
programs, even if the I have been advised of the possibility of such damages, or
for any claim by any other party.

      THIS SYSTEM IS PROVIDED "AS IS"  WITHOUT  WARRANTY  OF  ANY  KIND,  EITHER
EXPRESSED  OR  IMPLIED,  INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR  PURPOSE. THE ENTIRE RISK AS TO THE
QUALITY AND PERFORMANCE OF THIS SYSTEM IS WITH  YOU.  SHOULD  THE  SYSTEM  PROVE
DEFECTIVE,  YOU  ASSUME  THE  ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR AND
CORRECTION.

      Program file(s) may only be distributed  as on the original diskette. Such
duplication and distribution is authorized without compensation as long  as  the
copies  are  an exact duplicate of the original files. All other distribution is
strictly prohibited.


      Registering RSTPRINT
      ------------------------

      RSTPRINT is  distributed  under  the  Shareware  concept.    This makes it
available for anyone to try without obligation.  If you decide it is useful  and
want  to  keep  it, I ask that you register your use of it.  This will allow for
continued support and maintenance of the program and will help to encourage that
more quality software be made  available  through  this  channel.  I require all
corporate and government users of this utility register their copies.


                 To register the program, $15.00 is requested.
                         Send registration requests to:

                                 Harry P Calevas
                                  P.O. Box 830  
                                Trenton Ga 30752

      The registration charge is a one time fee  that  entitles  you  to  future
versions  of  the  product for the next 2 years for a disk fee of $5.00. Updates
after 2 years will be based on  program  value at that time. Registration is for
one person or group on one machine at a time!

      If You Received this program from a bulleten board System it  should  have
been  an  archive  file , please be kind enough to upload it to another Bulleten
board system at your first chance. Give Others a chance to try it out. Thanks


           Following is a form that may be used to register RSTPRINT

      Please Register RSTPRINT to the following person.  We will use ____
   copies  of  the program and have enclosed $____ for each copy to be used.

         **************************************************************

         ___ Registration only ..............................    $15.00

         ___ Update of RSTPRINT disk (if updated) (call)    ADD   $5.00
         **************************************************************

            Name: __________________________________________________

            Company: _______________________________________________

            Address: _______________________________________________

                     _______________________________________________

            City: ______________________________  State: ___________

                                        Zip:  ______________________

            Please register this software under the following name:

                ____________________________________________________

                                    Send to:
                                Harry P Calevas 
                                 P.O. Box 830   
                               Trenton Ga  30752
                                 404-657-5484   
                            Problems and Maintenance
                            ------------------------

      I welcome all comments  or  enhancement  suggestions. Please document each
item clearly and provide printed examples  if  possible.    Please  be  sure  to
include  this  form  with all requests, it will help to make sure we can provide
you with the best possible service.

        Name: __________________________________________________________

        Company: _______________________________________________________

        Address: _______________________________________________________

                 _______________________________________________________

        City: __________________________________  State: _______________

                                     Zip: ______________________________

             Telephone: _______ / ________________________ (Home / Work)


                        Date: _________________________

                     Description of problem or enhancement:

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________


                              Suggested solution:

        ________________________________________________________________

        ________________________________________________________________


```
{% endraw %}

## RSTPRINT.DOC

{% raw %}
```

                             RSTPRINT.DOC
                             RSTPRINT.EXE
                       Copyright 1988 by Harry P Calevas
                                                        
IMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM;
:                       Disk Copywrite Information                         :
LMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM9
:          Programs and Documents in this file copywrite by                :
:                                                                          :
:          DDDDDD |       Harry P. Calevas         | DDDDDD                :
:                                                                          :
:          DDDDDD |          P O Box 830           | DDDDDD                :
:                                                                          :
:          DDDDDD |          Trenton Ga            | DDDDDD                :
:                                                                          :
:          DDDDDD |                    30752       | DDDDDD                :
:                                                                          :
:  Day Time Phone Number (404 ) 657-5484___________________                :
:                                                                          :
LMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM9

      What is RSTPRINT
      --------------
       A simple printer reset program. It does no more than reset the printer on
ALL PARALLEL PORTS on the system . No check for any other operation .Printer
does not have to be ready ,online or even on , program does not wait for printer
.For all other programs I have seen the printer must be ready ,not this one ,
but if on ,it should be ready after the reset! If printer is on, offline or on
line and on a parallel printer port, it should do a poweron reset, just as if it
had been powered off and back on(!) with all the same results!!. Use care with
spoolers!

This program was written to reset the printer back to its default settings after
doing some fancy printing.It does and, if spooling ,right in the middle of the
spooled printout!

                      Use at your OWN risk ,no guarantees!
                    just type     (drive:) RSTPRINT  to run.

                                   DISCLAIMER

      I  suggest  that  you  make a copy of the original diskette before you get
started. Most of my programs were  written  to  solve a problem on my system and
may or may not work on other systems. In no event will the I be  liable  to  you
for  any damages,including any lost profits, lost savings or other incidental or
consequential damages arising  out  of  the  use  of  or  inability to use these
programs, even if the I have been advised of the possibility of such damages, or
for any claim by any other party.

      THIS SYSTEM IS PROVIDED "AS IS"  WITHOUT  WARRANTY  OF  ANY  KIND,  EITHER
EXPRESSED  OR  IMPLIED,  INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR  PURPOSE. THE ENTIRE RISK AS TO THE
QUALITY AND PERFORMANCE OF THIS SYSTEM IS WITH  YOU.  SHOULD  THE  SYSTEM  PROVE
DEFECTIVE,  YOU  ASSUME  THE  ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR AND
CORRECTION.

      Program file(s) may only be distributed  as on the original diskette. Such
duplication and distribution is authorized without compensation as long  as  the
copies  are  an exact duplicate of the original files. All other distribution is
strictly prohibited.


      Registering RSTPRINT
      ------------------------

      RSTPRINT is  distributed  under  the  Shareware  concept.    This makes it
available for anyone to try without obligation.  If you decide it is useful  and
want  to  keep  it, I ask that you register your use of it.  This will allow for
continued support and maintenance of the program and will help to encourage that
more quality software be made  available  through  this  channel.  I require all
corporate and government users of this utility register their copies.


                 To register the program, $15.00 is requested.
                         Send registration requests to:

                                 Harry P Calevas
                                  P.O. Box 830  
                                Trenton Ga 30752

      The registration charge is a one time fee  that  entitles  you  to  future
versions  of  the  product for the next 2 years for a disk fee of $5.00. Updates
after 2 years will be based on  program  value at that time. Registration is for
one person or group on one machine at a time!

      If You Received this program from a bulleten board System it  should  have
been  an  archive  file , please be kind enough to upload it to another Bulleten
board system at your first chance. Give Others a chance to try it out. Thanks


           Following is a form that may be used to register RSTPRINT

      Please Register RSTPRINT to the following person.  We will use ____
   copies  of  the program and have enclosed $____ for each copy to be used.

         **************************************************************

         ___ Registration only ..............................    $15.00

         ___ Update of RSTPRINT disk (if updated) (call)    ADD   $5.00
         **************************************************************

            Name: __________________________________________________

            Company: _______________________________________________

            Address: _______________________________________________

                     _______________________________________________

            City: ______________________________  State: ___________

                                        Zip:  ______________________

            Please register this software under the following name:

                ____________________________________________________

                                    Send to:
                                Harry P Calevas 
                                 P.O. Box 830   
                               Trenton Ga  30752
                                 404-657-5484   
                            Problems and Maintenance
                            ------------------------

      I welcome all comments  or  enhancement  suggestions. Please document each
item clearly and provide printed examples  if  possible.    Please  be  sure  to
include  this  form  with all requests, it will help to make sure we can provide
you with the best possible service.

        Name: __________________________________________________________

        Company: _______________________________________________________

        Address: _______________________________________________________

                 _______________________________________________________

        City: __________________________________  State: _______________

                                     Zip: ______________________________

             Telephone: _______ / ________________________ (Home / Work)


                        Date: _________________________

                     Description of problem or enhancement:

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________


                              Suggested solution:

        ________________________________________________________________

        ________________________________________________________________


```
{% endraw %}

## RSTPRINT.DOC

{% raw %}
```

                             RSTPRINT.DOC
                             RSTPRINT.EXE
                       Copyright 1988 by Harry P Calevas
                                                        
IMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM;
:                       Disk Copywrite Information                         :
LMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM9
:          Programs and Documents in this file copywrite by                :
:                                                                          :
:          DDDDDD |       Harry P. Calevas         | DDDDDD                :
:                                                                          :
:          DDDDDD |          P O Box 830           | DDDDDD                :
:                                                                          :
:          DDDDDD |          Trenton Ga            | DDDDDD                :
:                                                                          :
:          DDDDDD |                    30752       | DDDDDD                :
:                                                                          :
:  Day Time Phone Number (404 ) 657-5484___________________                :
:                                                                          :
LMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM9

      What is RSTPRINT
      --------------
       A simple printer reset program. It does no more than reset the printer on
ALL PARALLEL PORTS on the system . No check for any other operation .Printer
does not have to be ready ,online or even on , program does not wait for printer
.For all other programs I have seen the printer must be ready ,not this one ,
but if on ,it should be ready after the reset! If printer is on, offline or on
line and on a parallel printer port, it should do a poweron reset, just as if it
had been powered off and back on(!) with all the same results!!. Use care with
spoolers!

This program was written to reset the printer back to its default settings after
doing some fancy printing.It does and, if spooling ,right in the middle of the
spooled printout!

                      Use at your OWN risk ,no guarantees!
                    just type     (drive:) RSTPRINT  to run.

                                   DISCLAIMER

      I  suggest  that  you  make a copy of the original diskette before you get
started. Most of my programs were  written  to  solve a problem on my system and
may or may not work on other systems. In no event will the I be  liable  to  you
for  any damages,including any lost profits, lost savings or other incidental or
consequential damages arising  out  of  the  use  of  or  inability to use these
programs, even if the I have been advised of the possibility of such damages, or
for any claim by any other party.

      THIS SYSTEM IS PROVIDED "AS IS"  WITHOUT  WARRANTY  OF  ANY  KIND,  EITHER
EXPRESSED  OR  IMPLIED,  INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR  PURPOSE. THE ENTIRE RISK AS TO THE
QUALITY AND PERFORMANCE OF THIS SYSTEM IS WITH  YOU.  SHOULD  THE  SYSTEM  PROVE
DEFECTIVE,  YOU  ASSUME  THE  ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR AND
CORRECTION.

      Program file(s) may only be distributed  as on the original diskette. Such
duplication and distribution is authorized without compensation as long  as  the
copies  are  an exact duplicate of the original files. All other distribution is
strictly prohibited.


      Registering RSTPRINT
      ------------------------

      RSTPRINT is  distributed  under  the  Shareware  concept.    This makes it
available for anyone to try without obligation.  If you decide it is useful  and
want  to  keep  it, I ask that you register your use of it.  This will allow for
continued support and maintenance of the program and will help to encourage that
more quality software be made  available  through  this  channel.  I require all
corporate and government users of this utility register their copies.


                 To register the program, $15.00 is requested.
                         Send registration requests to:

                                 Harry P Calevas
                                  P.O. Box 830  
                                Trenton Ga 30752

      The registration charge is a one time fee  that  entitles  you  to  future
versions  of  the  product for the next 2 years for a disk fee of $5.00. Updates
after 2 years will be based on  program  value at that time. Registration is for
one person or group on one machine at a time!

      If You Received this program from a bulleten board System it  should  have
been  an  archive  file , please be kind enough to upload it to another Bulleten
board system at your first chance. Give Others a chance to try it out. Thanks


           Following is a form that may be used to register RSTPRINT

      Please Register RSTPRINT to the following person.  We will use ____
   copies  of  the program and have enclosed $____ for each copy to be used.

         **************************************************************

         ___ Registration only ..............................    $15.00

         ___ Update of RSTPRINT disk (if updated) (call)    ADD   $5.00
         **************************************************************

            Name: __________________________________________________

            Company: _______________________________________________

            Address: _______________________________________________

                     _______________________________________________

            City: ______________________________  State: ___________

                                        Zip:  ______________________

            Please register this software under the following name:

                ____________________________________________________

                                    Send to:
                                Harry P Calevas 
                                 P.O. Box 830   
                               Trenton Ga  30752
                                 404-657-5484   
                            Problems and Maintenance
                            ------------------------

      I welcome all comments  or  enhancement  suggestions. Please document each
item clearly and provide printed examples  if  possible.    Please  be  sure  to
include  this  form  with all requests, it will help to make sure we can provide
you with the best possible service.

        Name: __________________________________________________________

        Company: _______________________________________________________

        Address: _______________________________________________________

                 _______________________________________________________

        City: __________________________________  State: _______________

                                     Zip: ______________________________

             Telephone: _______ / ________________________ (Home / Work)


                        Date: _________________________

                     Description of problem or enhancement:

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________


                              Suggested solution:

        ________________________________________________________________

        ________________________________________________________________


```
{% endraw %}

## RSTPRINT.DOC

{% raw %}
```

                             RSTPRINT.DOC
                             RSTPRINT.EXE
                       Copyright 1988 by Harry P Calevas
                                                        
IMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM;
:                       Disk Copywrite Information                         :
LMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM9
:          Programs and Documents in this file copywrite by                :
:                                                                          :
:          DDDDDD |       Harry P. Calevas         | DDDDDD                :
:                                                                          :
:          DDDDDD |          P O Box 830           | DDDDDD                :
:                                                                          :
:          DDDDDD |          Trenton Ga            | DDDDDD                :
:                                                                          :
:          DDDDDD |                    30752       | DDDDDD                :
:                                                                          :
:  Day Time Phone Number (404 ) 657-5484___________________                :
:                                                                          :
LMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM9

      What is RSTPRINT
      --------------
       A simple printer reset program. It does no more than reset the printer on
ALL PARALLEL PORTS on the system . No check for any other operation .Printer
does not have to be ready ,online or even on , program does not wait for printer
.For all other programs I have seen the printer must be ready ,not this one ,
but if on ,it should be ready after the reset! If printer is on, offline or on
line and on a parallel printer port, it should do a poweron reset, just as if it
had been powered off and back on(!) with all the same results!!. Use care with
spoolers!

This program was written to reset the printer back to its default settings after
doing some fancy printing.It does and, if spooling ,right in the middle of the
spooled printout!

                      Use at your OWN risk ,no guarantees!
                    just type     (drive:) RSTPRINT  to run.

                                   DISCLAIMER

      I  suggest  that  you  make a copy of the original diskette before you get
started. Most of my programs were  written  to  solve a problem on my system and
may or may not work on other systems. In no event will the I be  liable  to  you
for  any damages,including any lost profits, lost savings or other incidental or
consequential damages arising  out  of  the  use  of  or  inability to use these
programs, even if the I have been advised of the possibility of such damages, or
for any claim by any other party.

      THIS SYSTEM IS PROVIDED "AS IS"  WITHOUT  WARRANTY  OF  ANY  KIND,  EITHER
EXPRESSED  OR  IMPLIED,  INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR  PURPOSE. THE ENTIRE RISK AS TO THE
QUALITY AND PERFORMANCE OF THIS SYSTEM IS WITH  YOU.  SHOULD  THE  SYSTEM  PROVE
DEFECTIVE,  YOU  ASSUME  THE  ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR AND
CORRECTION.

      Program file(s) may only be distributed  as on the original diskette. Such
duplication and distribution is authorized without compensation as long  as  the
copies  are  an exact duplicate of the original files. All other distribution is
strictly prohibited.


      Registering RSTPRINT
      ------------------------

      RSTPRINT is  distributed  under  the  Shareware  concept.    This makes it
available for anyone to try without obligation.  If you decide it is useful  and
want  to  keep  it, I ask that you register your use of it.  This will allow for
continued support and maintenance of the program and will help to encourage that
more quality software be made  available  through  this  channel.  I require all
corporate and government users of this utility register their copies.


                 To register the program, $15.00 is requested.
                         Send registration requests to:

                                 Harry P Calevas
                                  P.O. Box 830  
                                Trenton Ga 30752

      The registration charge is a one time fee  that  entitles  you  to  future
versions  of  the  product for the next 2 years for a disk fee of $5.00. Updates
after 2 years will be based on  program  value at that time. Registration is for
one person or group on one machine at a time!

      If You Received this program from a bulleten board System it  should  have
been  an  archive  file , please be kind enough to upload it to another Bulleten
board system at your first chance. Give Others a chance to try it out. Thanks


           Following is a form that may be used to register RSTPRINT

      Please Register RSTPRINT to the following person.  We will use ____
   copies  of  the program and have enclosed $____ for each copy to be used.

         **************************************************************

         ___ Registration only ..............................    $15.00

         ___ Update of RSTPRINT disk (if updated) (call)    ADD   $5.00
         **************************************************************

            Name: __________________________________________________

            Company: _______________________________________________

            Address: _______________________________________________

                     _______________________________________________

            City: ______________________________  State: ___________

                                        Zip:  ______________________

            Please register this software under the following name:

                ____________________________________________________

                                    Send to:
                                Harry P Calevas 
                                 P.O. Box 830   
                               Trenton Ga  30752
                                 404-657-5484   
                            Problems and Maintenance
                            ------------------------

      I welcome all comments  or  enhancement  suggestions. Please document each
item clearly and provide printed examples  if  possible.    Please  be  sure  to
include  this  form  with all requests, it will help to make sure we can provide
you with the best possible service.

        Name: __________________________________________________________

        Company: _______________________________________________________

        Address: _______________________________________________________

                 _______________________________________________________

        City: __________________________________  State: _______________

                                     Zip: ______________________________

             Telephone: _______ / ________________________ (Home / Work)


                        Date: _________________________

                     Description of problem or enhancement:

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________


                              Suggested solution:

        ________________________________________________________________

        ________________________________________________________________


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1662

     Volume in drive A has no label
     Directory of A:\

    COPYRITE DSK      1250   8-04-89   9:41p
    FILE1662 TXT      2591  11-22-89  10:14a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617  11-22-89  12:37p
    RSTPRINT     <DIR>    
            5 file(s)       4496 bytes

     Directory of A:\RSTPRINT

    .            <DIR>    
    ..           <DIR>    
    COPYRITE FIL      1250   8-04-89   9:41p
    RSTPRINT ARC     36924   8-04-89   9:41p
    RSTPRINT DOC      7936   8-04-89  12:48a
    RSTPRINT EXE     37734   8-15-88   1:28a
            6 file(s)      83844 bytes

    Total files listed:
           11 file(s)      88340 bytes
                           68608 bytes free
