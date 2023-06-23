---
layout: page
title: "PC-SIG Diskette Library (Disk #2996)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2996/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2996"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CMP.DOC

{% raw %}
```





CMP                                                   Version 1.0





        CMP

        CMP is a file compression program.  It is intended to work with
        the "On This Day" events database program, but can be used as a
        general purpose compression program, nonetheless.  To get the
        original file back from a compressed program, use the UCMP
        program.

        We are NOT attempting in any way to compete with existing general
        purpose compression programs.  ARC, LHARC, PKZIP, etc. are all
        fine products and deserve your support if you are looking for a
        fast and optimal compression program.  CMP was developed to
        provide the ability to keep databases for "On This Day" in a
        compressed form so as to minimize disk usage, yet not have to be
        uncompressed before OTD was run.

        For our databases, we have found that we can achieve roughly a
        33% reduction in size.

        The syntax of the command line is:

                CMP <original file> <compressed file>

        <original file> and <compressed file> may not be the same name.

        Please note that CMP is NOT to be shared with other users.  It is
        not distributed under the Shareware concept and remains under the
        strictest copyright limitations.  It is provided as one benefit
        of having registered OTD.

        More information about this program, "On This Day," and other
        programs may be obtained by writing to:

                The Software Construction Co.
                P.O. Box 160
                North Billerica, MA  01862












  (c) Copyright 1991 The Software Construction Co., All Rights Reserved.

```
{% endraw %}

## FILE2996.TXT

{% raw %}
```
Disk No: 2996
Disk Title: On This Day
PC-SIG Version: S1.0

Program Title: On This Day
Author Version: 1.1
Author Registration: $25.00
Special Requirements: No special requirements.

On This Day is a cute little program that will display astronomical
events, birthdays of famous people, historical events, holidays and
special events that occurred on any day of the year.  If you don't
supply a date, it uses the DOS systems date and displays the current
events.  All the events are stored in ASCII text files so you can
add any events you want with most word processors.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1992 PC-SIG, Inc.
```
{% endraw %}

## OTD.DOC

{% raw %}
```





















                      The Software Construction Co.

                              Presents ...










                               On This Day
                               Version 1.1
                               April 1991















                      The Software Construction Co.
                              P.O. Box 160
                       North Billerica, MA  01862

  (C) Copyright 1990-1991 The Software Construction Co., All Rights Reserved.






         1. Introduction                                             1
         2. Command Line                                             2
         3. Databases                                                4
         4. Database format                                          7
         5. Date specifiers                                          8
         6. Notes about calendars                                   11
         7. User Supported Software                                 13
         8. Bug Reports                                             15
         9. Known Problems/Limitations                              16
         Appendices                                                 17
             A. Bibliography                                        17
             B. Program History                                     18





         On This Day                                       Version 1.1

         1. Introduction

         Have you ever been curious about events that happened on this
         day in history?  On This Day is a collection of databases and
         a printing interface which will generate a list of items of
         note concerning today.  The databases sent to registered
         users contain more than 11,000 entries (see section 7 for
         more information about registration).

         Some of the types of information which may be displayed are:

                   - Astronomical events.

                   - Birthdays of famous people.

                   - Historical events.

                   - National observations.

                   - Religious holidays and events.

         In addition, a personal database may be created to contain
         events important to each specific user.  Events such as
         birthdays of relatives and friends may be appropriate for
         this file.

         To clarify, the question this software is intending to answer
         is:

         What historical events, religious holidays, etc. happened on
         a particular date?

         It is not intended to answer questions like:

         What date is Easter next year?
         When was John Wayne born?
















                                       1 





         On This Day                                       Version 1.1

         2. Command Line

         To run On This Day, use the following command line (note that
         []s enclose optional arguments):

                   OTD [-b] [-e] [-p] [-r] [-d <date>]
                       [-m <day-number>|all]

                   where:

                             b  prints famous birthdays

                             d  allows you to specify a date other
                                than today's date.  Date may be ANY
                                form specified in section 5, below.
                                Some may not make sense in actual use
                                (e.g. R(*) would only print stuff on
                                Thursdays.)  Note also that only items
                                that occurred before the date
                                specified will be printed.

                             e  prints today's events

                             p  prints today's personal events

                             r  prints today's religious events

                             m  indicates when to print monthly events
                                (<day-number> indicates the day each
                                month.  all indicates to print every
                                day.) (default: 1)  For example, the
                                command:  'otd -m 3' will print
                                today's events and if today is the
                                third day of the month, it will also
                                print any existing monthly events. For
                                more information on monthly events,
                                see section 5.

         Again, we must emphasize that it is NOT necessary to input
         ANY arguments to the OTD command.  Simply typing "OTD"
         (without the quotes, of course) will get you all the output
         in the format that we believe most users want.  If you want
         to alter the output in any way, use the options as described
         above.

         Running OTD with none of the b, e, p, or r options is the
         same as running with all the options.  If any of these
         options are specified, only those categories will be
         displayed.



                                       2 





         On This Day                                       Version 1.1

         DOS hints:

         Q:     How can I print the output of OTD?

         A:     Append '> PRN:' to your command line (e.g. OTD > PRN:
                will send today's information to the printer).

         Q:     It all goes by so quickly ... How do I get it to slow
                down so I can read it all?

         A:     Append '| MORE' to your command line (e.g. OTD | MORE
                will run OTD, displaying the results one screen at a
                time).  For more information on the MORE filter, see
                your DOS manual.






































                                       3 





         On This Day                                       Version 1.1

         3. Databases

         On This Day reads it's data from a subset of the following
         databases:


                   BIRTHDAY.JAN         EVENTS.JAN
                   BIRTHDAY.FEB         EVENTS.FEB
                   BIRTHDAY.MAR         EVENTS.MAR
                   BIRTHDAY.APR         EVENTS.APR
                   BIRTHDAY.MAY         EVENTS.MAY
                   BIRTHDAY.JUN         EVENTS.JUN
                   BIRTHDAY.JUL         EVENTS.JUL
                   BIRTHDAY.AUG         EVENTS.AUG
                   BIRTHDAY.SEP         EVENTS.SEP
                   BIRTHDAY.OCT         EVENTS.OCT
                   BIRTHDAY.NOV         EVENTS.NOV
                   BIRTHDAY.DEC         EVENTS.DEC
                   RELIGION             EVENTS.OTH
                   PERSONAL

         Files in the current directory by these names will be used
         first.  If they do not exist there, the environment variable
         OTDDIR will be searched.  It has the same syntax as the PATH
         environment variable.  That is, you could place all the
         BIRTHDAY databases in one subdirectory and all EVENTS
         databases in another specifying all these subdirectories in
         the OTDDIR environment variable.  For example:

         SET OTDDIR=C:\OTD\BDAY;C:\OTD\EVT

         Or, you might want to place some of the databases on a disk
         in each of two floppy drives on a floppy-only system.  In
         this case, you might want to use the following setting to
         enable OTD to search both places for data:

         SET OTDDIR=A:\;B:\

         Typically, however, this facility will be used so that the
         OTD command may be invoked from anywhere on your disk and it
         will find the appropriate data files in one directory.  For
         example:

         SET OTDDIR=C:\OTD

         If the -d option has not been specified, the current date
         from the system clock is used it to determine the extension
         to use in the BIRTHDAY and EVENTS files.

         If you set the TZ environment variable, OTD will use that
         value when printing times for astronomical events.  The

                                       4 





         On This Day                                       Version 1.1

         syntax of the TZ environment variable is:

         SET TZ=zzz[+/-]d[d][lll]

         zzz is a three character field representing the name of the
         current time zone (e.g. EST, PST).

         [+/-]d[d] is an optionally signed number of one or more
         digits.  It is the local time zone's difference from GMT in
         hours.  Negative numbers adjust westward from GMT. (e.g.
         5=EST, +8=PST, and -1=continental Europe).

         lll is an optional three-character field that represents the
         local time zone daylight savings time (e.g. EDT, PDT).  Don't
         include this field if your time zone does not have daylight
         savings time.

         If the TZ environment variable isn't present or is not of the
         above form, a default value of EST5EDT will be used.

         If birthday information was requested, BIRTHDAY.<mon> will be
         read.  If events were requested, EVENTS.<mon> and EVENTS.OTH
         will be read.  EVENTS.OTH is used for those events which
         might be in different months in different years.  If
         religious events were requested, RELIGION will be read.  If
         personal events were requested, PERSONAL will be read.

         The entries will be printed as they are encountered in each
         database.  If you want entries printed in a specific order,
         they must be in that order in the database.

         OTD is distributed with all the above databases with the
         exception of PERSONAL.  Note, however, that much larger and
         more extensive databases will be sent to you should you
         register your copy (see section 7 for more information about
         this and other advantages of registration).

         Some of the databases distributed with the program are
         compressed.  This helps save disk space upon installation.
         OTD determines dynamically whether a database is compressed
         or not and reads it appropriately.  Upon registration, you
         will also receive the compression and decompression programs
         so that you may maintain the databases that we distribute.

         You may, of course, replace any of our compressed databases
         with your own in order to try out some of the features of the
         event specification language.  Or, you may try out
         interesting features in your PERSONAL database without
         touching any of our databases.  The program itself is not
         crippled in any way.  You have the ability to test all
         functionality it is capable of performing.

                                       5 





         On This Day                                       Version 1.1

         Note that the information contained in the databases
         distributed with the program has been taken from a great many
         sources since sometime in 1985 or so.  We do not guarantee
         their accuracy.  You may also find duplicate entries which
         are not indicated in the database.  We would appreciate
         hearing about these as we do try to weed out the duplicates
         when and if we can find another source to collaborate one of
         the dates.

         We are always interested in new dates.  If possible, please
         try to give us supporting evidence of a new date.  We do not
         want the databases to get any less reliable than they already
         are.  In fact we want them to improve in reliability over
         time.  We do, however, reserve the right not to add any date
         to the database.





































                                       6 





         On This Day                                       Version 1.1

         4. Database format

         A line in the database file may be in one of the following
         forms:

                   #:<stuff>

                        This line is ignored by OTD.  It is merely
                        used to add commentary to the file.

                   <relative date specifier>:<stuff>

                        Should today match the relative date
                        specifier, print the stuff to the standard
                        output device.  See section 5 for more
                        detailed information about date specifiers.

                   <blanks>:<stuff>

                        This type of line indicates a continuation of
                        the line preceding for use when one line won't
                        hold enough text.






























                                       7 





         On This Day                                       Version 1.1

         5. Date specifiers

         Date specifiers may have one of the following forms:

         Absolute Dates -

                   <month-number>

                        If this month (in the specified calendar)
                        matches <month-number> and the -m option
                        specifies today as the print day, print the
                        item.

                   <month-number>/<day>

                        If this month (in the specified calendar)
                        matches <month-number> and this day matches
                        <day>, print the item.

                   <month-number>/<day>/<year>

                        If this month (in the specified calendar)
                        matches <month-number> and this day matches
                        <day>, print the item with "In <year>,"
                        prepended.

         Relative dates -

                   <alternate calendar><absolute date>

                        This form directs OTD to use the specified
                        calendar to evaluate <absolute date>.  Valid
                        <alternate calendar>s are:

                             G or <none> Gregorian
                             H           Hebrew
                             HF          Hebrew Fast Day
                                         (will be moved to following
                                          day if it is Saturday)
                             I           Islamic
                             J           Julian

                        See section 6 for short descriptions of these
                        calendars.

                   <absolute date>+<days>

                        Add <days> to the date specified in <absolute
                        date>.  For example, 1/3+37 is the same as
                        2/9.


                                       8 





         On This Day                                       Version 1.1

                   <absolute date>-<days>

                        Subtract <days> from the date specified in
                        <absolute date>.  For example, 1/3-21 is the
                        same as 12/13.

                   <wkday>(<month>/<day>)

                        This specifies the first <wkday> occurring on
                        or before the date specified by <month> and
                        <day>.  Valid values for <wkday> are:

                             M          Monday
                             T          Tuesday
                             W          Wednesday
                             R          thuRsday
                             F          Friday
                             S          Saturday
                             U          sUnday

                        For example, W(8/14) specifies the second
                        Wednesday occurring in the month of August.

                   <wkday>(*)

                        This denotes every day that happens to fall on
                        the specified <wkday>.  Valid values for
                        <wkday> are:

                             M          Monday
                             T          Tuesday
                             W          Wednesday
                             R          thuRsday
                             F          Friday
                             S          Saturday
                             U          sUnday

                        For example, M(*) specifies every Monday.

                   E

                        This denotes the Christian holiday Easter.

                   E+<days>

                        This denotes a date <days> days following the
                        Christian holiday Easter.  This format is
                        necessary to specify all the Christian
                        holidays as many are based upon Easter's date.



                                       9 





         On This Day                                       Version 1.1

                   E-<days>

                        This denotes a date <days> days before the
                        Christian holiday Easter.  This format is
                        necessary to specify all the Christian
                        holidays as many are based upon Easter's date.

                   *

                        This denotes every day.










































                                      10 





         On This Day                                       Version 1.1

         6. Notes about calendars

         Gregorian calendar

                This calendar is the one in use currently by much of
                the world (including the United States).  It was
                designed by a commission assembled by Pope Gregory
                XIII in the sixteenth century.  It is based on the
                revolution of the earth about the sun.

                The months and corresponding numbers that are legal
                for this calendar are:
                January         1
                February        2
                March           3
                April           4
                May             5
                June            6
                July            7
                August          8
                September       9
                October         10
                November        11
                December        12

         Hebrew calendar

                This calendar was placed in operation in the mid-
                fourth century by Hillel II.  It is based on the
                moon's revolution about the earth.  However, it has
                solar corrections built in.

                The months and corresponding numbers that are legal
                for this calendar are:

                Nisan   1
                Iyyar   2
                Sivan   3
                Tammuz  4
                Av      5
                Elul    6
                Tishri  7
                Heshvan 8
                Kislev  9
                Teveth  10
                Shevat  11
                Adar    12
                Adar II 13 {Note Adar is Adar I in years when
                            there is an Adar II}



                                      11 





         On This Day                                       Version 1.1

                Certain holidays (fast days) must be moved to the
                following day (Sunday) if they fall on a Saturday.
                The HF calendar specifier allows you to indicate a
                Hebrew date is one of these "special" holidays.

                Note that one holiday (Ta'anit Esther) occurs on the
                preceding Thursday when Purim is on a Sunday.  There
                is no way, currently, to specify this relationship.

         Islamic calendar

                This calendar is based upon the moon revolving around
                the earth.  There are no dates in this calendar before
                Friday, July 16, 622 (Julian)

                Much of the Islamic world does not agree with
                calculations to determine this calendar at all.  They
                only rely on proclamation of the new moon by the
                authorities at al-Azhar in Cairo to define the
                calendar.  Consequently, the dates computed here may
                differ by a day or two from those observed by much of
                the Islamic population of the world.

                The months and corresponding numbers that are legal
                for this calendar are:

                Muharram        1
                Safar           2
                Rabi I          3
                Rabi II         4
                Jumada I        5
                Jumada II       6
                Rajab           7
                Sha'ban         8
                Ramadan         9
                Shawwal         10
                Dhu al-Qada     11
                Dhu al-Hijjah   12

         Julian calendar

                This calendar was instituted in 45 BC by Julius
                Caesar.  It, too, is based on the revolution of the
                earth about the sun.

                The months for the Julian calendar are the same as
                those used for the Gregorian calendar.  See above for
                more information on the proper month numbers to use
                when constructing dates.



                                      12 





         On This Day                                       Version 1.1

         7. User Supported Software

         This software is distributed through a unique marketing
         approach called Shareware.  What this means is that we
         encourage you to copy this software distribution and share it
         with your friends.  We must make the stipulation, however
         that you not modify the distribution in any way when you do
         share it.

         If you have received this software through one of the so
         called "Shareware Houses" (companies whose business is
         selling disks containing other author's software), please
         note that none of the money you have paid so far has (or
         will) make its way to the author.  You have simply paid for
         the duplication and distribution costs.

         This method of distribution is based on the following
         principles:

                   1.   Users need to try out software to determine
                        its usefulness.

                   2.   Authors of software can get support directly
                        from their users.

                   3.   Software sharing and copying can/should be
                        encouraged.

         If you use this software, we ask that you register your copy.
         For your $25 registration fee, you'll receive the benefits
         listed below.  You may use the registration form on the last
         page of this manual to forward the necessary information to
         us.

         Registration benefits include:

                   - Notification of any updates.

                   - The latest version of the software.

                   - A much more extensive collection of data.

                   - The compression and decompression programs.

                   - Several other utilities which make the
                     maintenance of the databases much easier.

         Although we encourage copying and sharing of On This Day to
         distribute our product, we must insist that you NOT share the
         utilities, compression/decompression programs, and larger
         databases you will receive upon registration.  We retain full

                                      13 





         On This Day                                       Version 1.1

         copyrights to these files.  It is an infringement of
         copyright law to distribute copies of these files.

         Please send your registration fee to:

                          The Software Construction Co.
                                 P.O. Box 160
                           North Billerica, MA   01862

         If you do not use this software, we'd also like to know why.
         It is obvious you're somewhat interested or you wouldn't have
         gotten this far into the manual.  We'd like to know how we
         can make this product better.  Please write to us at the same
         address and let us know what we could have done to make them
         useful to you.

         For $5 to cover the cost of the diskette(s) and shipping, we
         will supply you with the latest edition of the software.
         Please specify if you'd like 5.25" or 3.5" diskettes.

         We would sincerely like to thank you for giving this, the
         fruits of our labor, a trial.  We hope it proves useful to
         you.





























                                      14 





         On This Day                                       Version 1.1

         8. Bug Reports

         Should you discover a bug in this code, please let us know at
         the same address listed in section 7.  We regret that we
         can't provide phone support at this time (maybe in the
         future).  Provide us with as much of a description of the
         problem as you can, as well as your name and address.  If you
         would prefer being contacted by phone, by all means, add your
         phone number and the hours you will be available at that
         number.

         What do you get for your trouble?  We will send a copy of the
         fixed program to the first registered user to report the
         problem and will strive to answer all others with a letter.






































                                      15 





         On This Day                                       Version 1.1

         9. Known Problems/Limitations

         a.     The Jewish holiday Ta'anit Esther occurs on the
                preceding Thursday when Purim falls on Sunday.  There
                is no way, currently, to indicate this relationship.
                We are not sure that this functionality will ever be
                included as this relationship is extraordinarily rare.













































                                      16 





         On This Day                                       Version 1.1

         A. Bibliography

         Special thanks to John Peyton, a friend who helped get me
         thinking along the right path several times.

         Following is a list (no doubt partial) of items I found
         helpful when learning how to calculate the various calendars,
         astronomical events, etc. that are contained in the software:

         Astronomical Formulae for Calculators by Jean Meeus, 1982,
                Willmann-Bell, Inc.

         Calendrical Calculations by Edward M. Reingold and Nachum
                Dershowitz, 1989, University of Illinois at Urbana-
                Champaign.

         Practical Astronomy With Your Calculator by Peter Duffett-
                Smith, 3rd edition 1988, Cambridge University Press.


































                                      17 





         On This Day                                       Version 1.1

         B. Program History

         Version 1.0 - April 1990.

         Version 1.1 - April 1991.

                - Phases of the moon added.

                - Lunar eclipses added.

                - Compression for databases.

                - Serial numbers to track distribution better.

                - TZ environment variable controls times for
                  astronomical events.

                - A few minor bug fixes.


































                                      18 






   - A -

         absolute dates                 <see dates, absolute>
         address                        14, 15
         alternate date specification   2
         astronomical events            <see events, astronomical>

   - B -

         birthdays                      1, 2, 5
         bugs                           15

   - C -

         calendar, Gregorian            8, 11
         calendar, Hebrew               8, 11
         calendar, Islamic              8, 12
         calendar, Julian               8, 12
         calendars                      11
         command line                   2
         command line options           2
         comments                       7
         compression                    5
         continuation lines             7

   - D -

         database format                7
         databases                      4
         date specifiers                8
         dates, absolute                8
         dates, relative                8
         decompression                  5

   - E -

         Easter                         9
         events                         2, 5
         events, astronomical           1
         events, historical             1
         events, monthly                2
         events, personal               2, 5
         events, religious              1, 2, 5

   - G -

         Gregorian calendar             <see calendar, Gregorian>

   - H -

         Hebrew calendar                <see calendar, Hebrew>
         Hillel II                      11
         historical events              <see events, historical>






   - I -

         introduction                   1
         Islamic calendar               <see calendar, Islamic>

   - J -

         Julian calendar                <see calendar, Julian>
         Julius Caesar                  12

   - L -

         limitations                    16

   - M -

         monthly events                 <see events, monthly>

   - N -

         national observances           1

   - O -

         options, command line          <see command line options>
         OTDDIR environment variable    4

   - P -

         PATH environment variable      4
         personal events                <see events, personal>
         Pope Gregory XIII              11
         problems                       15
         problems, known                16

   - R -

         registration information       5
         relative dates                 <see dates, relative>
         religious events               <see events, religious>
         religious holidays             <see events, religious>
         reporting bugs                 15

   - S -

         shareware                      13

   - T -

         time zone                      <see TZ environment variable>
         TZ environment variable        4

   - U -

         user supported software        <see shareware>





   - Misc -

         -m option                      8















                          The Software Construction Co.
                                  P.O. Box 160
                           North Billerica, MA  01862

        Name:    ________________________________________________________

        Address: ________________________________________________________

                 ________________________________________________________

                 ________________________________________________________

        Phone:   ________________________________________________________

        Where did you get your copy of On This Day (version 1.1)?

        The Software Construction Co. _____        BBS              _____

        Friend                        _____        Shareware Dealer _____

        If you checked BBS or Shareware Dealer above please tell us which
        one:

        _________________________________________________________________

        What format media would you like?         5.25" _____  3.5" _____

        Comments or suggestions: ________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________

        _________________________________________________________________


```
{% endraw %}

## UCMP.DOC

{% raw %}
```





CMP                                                   Version 1.0





        UCMP

        UCMP is a file decompression program.  It is intended to work
        with the compression program (CMP) distributed with the "On This
        Day" events database program.

        We are NOT attempting in any way to compete with existing general
        purpose compression programs.  ARC, LHARC, PKZIP, etc. are all
        fine products and deserve your support if you are looking for a
        fast and optimal compression program.  CMP was developed to
        provide the ability to keep databases for "On This Day" in a
        compressed form so as to minimize disk usage, yet not have to be
        uncompressed before OTD was run.

        For our databases, we have found that we can achieve roughly a
        33% reduction in size.

        The syntax of the command line is:

                UCMP <compressed file> <uncompressed file>

        <uncompressed file> and <compressed file> may not be the same
        name.

        Please note that neither CMP nor UCMP is to be shared with other
        users.  It is not distributed under the Shareware concept and
        remains under the strictest copyright limitations.  It is
        provided as one benefit of having registered OTD.

        More information about this program, "On This Day," and other
        programs may be obtained by writing to:

                The Software Construction Co.
                P.O. Box 160
                North Billerica, MA  01862













  (c) Copyright 1991 The Software Construction Co., All Rights Reserved.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2996

     Volume in drive A has no label
     Directory of A:\

    BIRTHDAY SEP      1691   4-08-91   9:11p
    BIRTHDAY AUG      1541   4-08-91   9:05p
    BIRTHDAY FEB      1464   3-24-91   9:46p
    BIRTHDAY JUN      1443   4-06-91   9:59p
    BIRTHDAY DEC      1626   4-08-91  10:03p
    BIRTHDAY JAN      1519   3-24-91   9:36p
    BIRTHDAY OCT      1617   4-08-91   9:45p
    BIRTHDAY NOV      1668   4-08-91   9:55p
    BIRTHDAY MAR      1548   3-24-91   9:55p
    BIRTHDAY APR      1419   4-06-91   9:39p
    BIRTHDAY MAY      1757   4-06-91   9:51p
    BIRTHDAY JUL      1633   4-08-91   8:57p
    CMP      EXE     37910   4-06-91   9:29p
    CMP      DOC      1770   4-06-91   9:25p
    EVENTS   MAY      1877   4-10-91   9:30p
    EVENTS   MAR      1847   4-10-91   9:14p
    EVENTS   JUL      2013   4-10-91   9:51p
    EVENTS   AUG      1848   4-10-91  10:00p
    EVENTS   OCT      1981   4-11-91   9:46p
    EVENTS   NOV      1933   4-11-91   9:54p
    EVENTS   DEC      2095   4-11-91  10:00p
    EVENTS   FEB      1981   4-10-91   9:07p
    EVENTS   APR      1928   4-10-91   9:22p
    EVENTS   OTH       258   4-11-91  10:01p
    EVENTS   JAN      2240   4-10-91   8:59p
    EVENTS   SEP      1766   4-10-91  10:10p
    EVENTS   JUN      2021   4-10-91   9:39p
    OTD      DOC     33698   4-06-91   9:25p
    OTD      EXE     76729   1-26-92   3:59p
    GO       BAT        89   4-21-92  12:11p
    RELIGION          1405   4-11-91  10:03p
    UCMP     DOC      1685   4-06-91   9:25p
    UCMP     EXE     18367   4-06-91   9:38p
    PREVIEW  EXE      7347   4-18-91   1:15p
    FILE2996 TXT       693   4-21-92   2:20p
           35 file(s)     222407 bytes
                           86016 bytes free
