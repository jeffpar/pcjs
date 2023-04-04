---
layout: page
title: "PC-SIG Library Disk #1097"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1097/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1097"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "RESUMEBEST (FORMGEN NOW ON #1561)"

    For most of us, the first contact a prospective employer has is not with
    us but with our resume.  This is truly a first impression and we should
    take care that it is the best we can present.  RESUMEBEST can help you
    create a good-looking, properly-prepared resume.
    
    RESUMEBEST presents several different formats.  You choose the one that
    best fits your past experience and the particular job you are seeking.
    Not only does it show what you should do for each resume section, but it
    also gives information concerning the proper order of
    presentation, the correct wording, the amount of copy you should write,
    the type of paper to use, how to make a cover letter, and more.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADDINFO.BAS

```bas
10 REM This is the addinfo section.
20 PRINT "
30 PRINT "
35 PRINT "     ████████████████████████████████████████████████
36 PRINT "     █                                              █
40 PRINT "     █         ╒══════════════════════════╕         █
50 PRINT "     █         │                          │         █
60 PRINT "     █         │        ADDITIONAL        │         █
70 PRINT "     █         │                          │         █
80 PRINT "     █         │        INFORMATION       │         █
90 PRINT "     █         │                          │         █
91 PRINT "     █         │          SECTION         │         █
92 PRINT "     █         │                          │         █
93 PRINT "     █         ╘══════════════════════════╛         █
94 PRINT "     █                                              █
95 PRINT "     ████████████████████████████████████████████████
96 PRINT "
97 PRINT "
100 PRINT "     This section of your resume is your miscellaneous area
110 PRINT "     where you can place any information that didn't properly
120 PRINT "     fit into other categories.  It should always be the second
130 PRINT "     to the last category shown, just before the REFERENCE area.
140 PRINT "
150 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
160 CLS
170 PRINT "
180 PRINT "     Keep in mind that you can lump all your additional infor-
190 PRINT "     mation into this category and just give it the title of
200 PRINT "     ADDITIONAL INFORMATION, or you can actually break off and
210 PRINT "     list certain categories separately if you so desire.
220 PRINT "
230 PRINT "     Some of the information that can be contained in this section
240 PRINT "     is:
250 PRINT "
260 PRINT "     PERSONAL INFORMATION
270 PRINT "     SALARY REQUIREMENTS
280 PRINT "     MILITARY
290 PRINT "     CIVIC ACTIVITIES
300 PRINT "     PROFESSIONAL AFFILIATIONS
310 PRINT "     HONORS AND AWARDS
320 PRINT "
330 PRINT "     Again, these can be listed all together under ADDITIONAL
340 PRINT "     INFORMATION, as one category, or broken off separately and
350 PRINT "     highlighted as a separate area.  Examples will follow at
360 PRINT "     the end of this section.
370 PRINT "
380 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
390 CLS
400 PRINT "
410 PRINT "     Let's briefly discuss each category and then you can make
420 PRINT "     the decision as to whether you have enough pertinent infor-
430 PRINT "     mation in any one area to break it off or if you will just
440 PRINT "     combine it all under ADDITIONAL INFORMATION.
450 PRINT "
460 PRINT "     PERSONAL INFORMATION:
470 PRINT "
480 PRINT "     Included in this category can be personal statistics con-
490 PRINT "     cerning you and your life outside of the job.  This is not
500 PRINT "     a required section; in fact, it is against the law for a
510 PRINT "     prospective employer to ask  you any of these questions.
520 PRINT "     However, it is completely proper for you to volunteer this
530 PRINT "     information and you should if you feel like it will help
540 PRINT "     you appear in your best possible light to the interviewer.
550 PRINT "     You can include your marital status, number of children,
560 PRINT "     health information, hobbies and interests.  You can also
570 PRINT "     list if you would be willing to travel and/or willing to
580 PRINT "     relocate for a position.  Keep in mind that you want to
590 PRINT "     only list information that will help you.
591 PRINT "
592 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
593 CLS
594 PRINT "
595 PRINT "     For example:
600 PRINT "     If you are a woman with several small children, you may not
610 PRINT "     want to list that you have children and their ages.  Some
620 PRINT "     potential employers may feel you will be home with sick
630 PRINT "     children or problems a lot.  Unfair, it's true, but the
640 PRINT "     resume is your opportunity to put yourself in the best
650 PRINT "     possible light, so don't list any information that may be
660 PRINT "     seen as negative in an interviewer's eyes--fair or unfair!
670 PRINT "
680 PRINT "     The following is an example of how you can show personal
690 PRINT "     information under an ADDITIONAL INFORMATION section:
700 PRINT "
710 PRINT "     ADDITIONAL     Marital Status:       Single
720 PRINT "     INFORMATION:   No. of Children:      None
730 PRINT "                    Health:               Excellent
740 PRINT "                    Willing to travel:    Yes
750 PRINT "                    Willing to relocate:  Yes
760 PRINT "
770 PRINT "     This is information that would probably help the applicant,
780 PRINT "     especially with a nationwide organization that might be
790 PRINT "     interested in transferring you.  You are single, with no
800 PRINT "     family responsibilities; in good health and willing to move.
810 PRINT "
820 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
830 CLS
840 PRINT "
850 PRINT "     SALARY REQUIREMENTS:
860 PRINT "
870 PRINT "     While you are free to list any minimum beginning salary or
880 PRINT "     a salary range in this section, it is advisable to leave
890 PRINT "     yourself open and discuss this at interview time.  For
900 PRINT "     example, you may put down Minimum Starting Salary: $20,000/yr.
910 PRINT "     If the job started at $19,000, they may not interview you when
920 PRINT "     in fact you would have considered it due to the excellent
930 PRINT "     benefits, bonuses, advancement opportunities, etc.  It can
940 PRINT "     hurt you the other way too.  Perhaps the job started at $23,000,
950 PRINT "     but they see you are willing to accept $20,000 so they drop the
960 PRINT "     salary.  Unless you have an absolute minimum and want to weed
970 PRINT "     out any positions beneath that, the following is usually best:
980 PRINT "
990 PRINT "     SALARY          Negotiable;
995 PRINT "     REQUIREMENTS:   Will discuss at interview time.
996 PRINT "
997 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
998 CLS
999 PRINT "
1000 PRINT "     MILITARY:
1020 PRINT "     Military can be shown as a separate section, mentioned in
1030 PRINT "     additional information only or listed in your EXPERIENCE
1040 PRINT "     section.  It depends on what space you have available on
1050 PRINT "     your resume and if it will help you to expand on this.
1070 PRINT "     Usually, mentioning that you have served your country is
1080 PRINT "     seen in a favorable light, and I recommend putting it
1090 PRINT "     somewhere on the resume.  The only time I recommend it
1100 PRINT "     detailed in length in the EXPERIENCE section is when the
1110 PRINT "     the experience you gained in the military and the positions
1120 PRINT "     you held are directly applicable to your objective.  For
1130 PRINT "     instance, if you were in a management or supervisory position
1140 PRINT "     in the service and seeking a management position in the
1150 PRINT "     civilian working world, then I would detail your military
1160 PRINT "     supervisory positions.  I recommend taking out any military
1170 PRINT "     terminology, however, and making it as civilian-oriented as
1180 PRINT "     possible.  Use the same format as you would for any other
1190 PRINT "     position listed in your EXPERIENCE section.
1210 PRINT "     The following is an example of how it can be briefly noted:
1230 PRINT "     MILITARY:     U.S. ARMY, 3 years, Honorable Discharge
1240 PRINT "
1250 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
1260 CLS
1270 PRINT "
1280 PRINT "     CIVIC ACTIVITIES:
1300 PRINT "     Civic activities includes any community or volunteer work
1310 PRINT "     you may have performed, either in the present or the past.
1330 PRINT "     These can include organizations such as the boy scouts,
1340 PRINT "     telethons, political campaigns, little league, etc.  If
1350 PRINT "     you have been active in the community, this can sometimes
1360 PRINT "     help you on the resume.  It helps you to appear as a civic
1370 PRINT "     minded, community conscious individual and prospective
1380 PRINT "     employers like this type of integrity and moral character.
1400 PRINT "     If you have one or two activities, I would suggest just
1410 PRINT "     including it in the ADDITIONAL INFORMATION section.  If
1420 PRINT "     you have extensive activities, I would recommend a separate
1430 PRINT "     section where it will really stand out.  As an example:
1450 PRINT "     CIVIC          Currently active in Little League Baseball
1460 PRINT "     ACTIVITIES:    as a Coach and American Heart Association as
1470 PRINT "                    a Volunteer Collector.
1480 PRINT "                    Past activities include Board Member of
1490 PRINT "                    Opportunity Village, a non-profit organiza-
1500 PRINT "                    tion for employment of the handicapped.
1510 PRINT "
1520 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
1530 CLS
1540 PRINT "
1550 PRINT "     PROFESSIONAL AFFILIATIONS:
1560 PRINT "
1570 PRINT "     Memberships in any professional or business association,
1580 PRINT "     particularly if they are directly associated with your
1590 PRINT "     career field, can be included in the ADDITIONAL INFORMATION
1600 PRINT "     section or shown separately under PROFESSIONAL AFFILIATIONS
1610 PRINT "     or PROFESSIONAL ASSOCIATIONS or even PROFESSIONAL ACTIVITIES.
1620 PRINT "     If you have held offices, include those and also include if
1630 PRINT "     it is a present or a past activity/position.  Example:
1640 PRINT "
1650 PRINT "     PROFESSIONAL    Current member of:
1660 PRINT "     AFFILIATIONS:   Toastmasters, Local #131;
1670 PRINT "                     Personnel Directors Association.
1680 PRINT "                     Past President of:
1690 PRINT "                     Women Business Owners of America.
1700 PRINT "
1710 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
1720 CLS
1730 PRINT "
1740 PRINT "     HONORS AND AWARDS (or SPECIAL ACHIEVEMENTS):
1750 PRINT "
1760 PRINT "     As mentioned with all other material in this section, honors
1770 PRINT "     and awards should be lumped in the ADDITIONAL INFORMATION
1780 PRINT "     section if brief and given its own category if extensive or
1790 PRINT "     important.
1800 PRINT "
1810 PRINT "     Information in this section can include any type of honor
1820 PRINT "     and award you have received, whether academic, sports,
1830 PRINT "     military, business or from your employers.  You can include
1840 PRINT "     such items as attending school on scholarship--academic or
1850 PRINT "     athletic; being employee of the month; receiving the United
1860 PRINT "     States Air Force Good Conduct Medal, being voted Mother of
1870 PRINT "     the year, etc.  Even awards that are not within your career
1880 PRINT "     field can still show you as an achiever and put you in a
1890 PRINT "     favorable light with prospective employers.  A brief example:
1900 PRINT "
1910 PRINT "     HONORS         Recipient, George A. Smith Scholarship Fund
1920 PRINT "                    Employee of the Year (entire nation),
1930 PRINT "                    TOWACORPORATION, 1985.
1940 PRINT "
1950 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
1960 CLS
1970 PRINT "
1980 PRINT "     In conclusion, keep in mind this general principle of whether
1990 PRINT "     you should put all miscellaneous material into ADDITIONAL
2000 PRINT "     INFORMATION or break it off into its own category...
2010 PRINT "
2020 PRINT "     If the information is extensive...
2030 PRINT "     If it is extremely favorable towards you...
2040 PRINT "     If it directly applies to your career field...
2050 PRINT "     It it is something you are extremely proud of...
2060 PRINT "
2070 PRINT "     then you should probably make it a separate category.
2080 PRINT "
2090 PRINT "     This is usually not a problem on a two-page, but can be more
2100 PRINT "     more difficult on a one-page.  Just use your editing skills
2110 PRINT "     and keep cutting it down until it works for you!
2120 PRINT "
2130 PRINT "     (To return to your directory type SYSTEM after the OK.)
```

## COVLTR.BAS

```bas
10 REM This is the covltr section.
20 PRINT "
30 PRINT "          XXXXXXXX   XXXXX  X     X  XXXXXX  XXXXX
31 PRINT "         X          X     X  X   X   X       X    X
32 PRINT "         X          X     X   X X    XXXXX   XXXXX
33 PRINT "         X          X     X    X     X       X    X
34 PRINT "          XXXXXXXX   XXXXX     X     XXXXXX  X     X
35 PRINT "
36 PRINT "         X         XXXXXX  XXXXXXX XXXXXXX XXXXXX XXXXX
37 PRINT "         X         X          X       X    X      X    X
38 PRINT "         X         XXXXX      X       X    XXXXX  XXXXX
39 PRINT "         X         X          X       X    X      X    X
40 PRINT "         XXXXXXXX  XXXXXX     X       X    XXXXXX X     X
41 PRINT "
42 PRINT "
43 PRINT "                    ┌──────────┐
44 PRINT "                    │          │    when should I use it?
45 PRINT "                    │          │    what should it say?
46 PRINT "                    │          │
47 PRINT "                    │          │    personalized...
48 PRINT "                    │          │    or generic...
49 PRINT "                    └──────────┘
50 PRINT "
60 INPUT "         PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
70 CLS
80 PRINT "
100 PRINT "     ░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓
110 PRINT "
120 PRINT "     A cover letter should be used to introduce your resume when
130 PRINT "     you are mailing out cold.  In other words, you decide you
140 PRINT "     might want to work for a particular company and decide to
150 PRINT "     send your resume, in case they have any openings in your
160 PRINT "     area or to keep on file for future possible openings.  You
170 PRINT "     do not need a cover letter when responding to advertised
180 PRINT "     openings or when the resume has been requested from you.
190 PRINT "     The purpose of the cover letter is to tell the organization
200 PRINT "     why they are getting the resume.  This does not have to be
210 PRINT "     explained when they are soliciting the resume themselves.
220 PRINT "
230 PRINT "     There can be exceptions to this rule.  For example, if you
240 PRINT "     are applying for a particular position and your resume does
250 PRINT "     not contain enough detail about your past experience as it
260 PRINT "     relates to this area, then you can use a cover letter to give
270 PRINT "     the prospective employer more detail in that specific area as
280 PRINT "     it applies to the position they are offering.
290 PRINT "
300 PRINT "     ░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓░▒▓
310 PRINT "
320 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
330 CLS
340 PRINT "
350 PRINT "     There are two types of cover letters...the individually
360 PRINT "     addressed or personalized cover letter and the generic cover
370 PRINT "     letter.  If you have the time, money and/or equipment, it is
380 PRINT "     always best to go with a personalized, individually prepared
390 PRINT "     cover letter, written specifically to a company and/or
400 PRINT "     individual, concerning their needs only.  If time, money or
410 PRINT "     equipment presents a problem to you, you can do a generic
420 PRINT "     cover letter, using it for all jobs you apply for.  In that
430 PRINT "     case, you can't date it or address the letter individually;
440 PRINT "     just use the salutation DEAR SIR OR MADAM: or TO WHOM IT MAY
450 PRINT "     CONCERN.  Then prepare the body of the letter so it will fit
460 PRINT "     all possible jobs applied for or in other words, just make it
470 PRINT "     a general introduction to your resume.
490 PRINT "     If you do a specific letter, you can insert the proper company
500 PRINT "     name, individual's name, position advertised, etc., and tailor
510 PRINT "     all parts of the letter specifically for this job and company.
520 PRINT "     The cover letter should be neatly prepared; no spelling or
530 PRINT "     typographical errors and should be fairly brief, leaving a lot
540 PRINT "     of white space around the outside so the reader will feel he/she
550 PRINT "     can read it quickly.
570 PRINT "     The following screen contains a very condensed generic cover
580 PRINT "     letter that can be personalized according to your background:
590 PRINT "
600 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
610 CLS
620 PRINT "
630 PRINT "                                     Your Name
640 PRINT "                                     Your Address
650 PRINT "                                     Your City, State, Zip
660 PRINT "                                     Your Telephone Number
670 PRINT "     Dear Sir or Madam:
680 PRINT "
690 PRINT "     I am very interested in obtaining a position with your organ-
700 PRINT "     ization.  Enclosed please find my resume for your review.
720 PRINT "     You will find most of the necessary background information con-
730 PRINT "     tained in my resume.  However, I would like to briefly mention
740 PRINT "     that I am available for immediate employment.  I am also
750 PRINT "     specifically exploring the job market to obtain a career posi-
760 PRINT "     tion.  Therefore, I can definitely offer you longevity.
780 PRINT "     I would like very much to schedule a personal interview wherein
790 PRINT "     we can further discuss both my enthusiasm and qualifications
800 PRINT "     for a position with your organization.  I can be reached at the
810 PRINT "     address and telephone number listed above.  Thank you for your
820 PRINT "     time; I look forward to a favorable response.
830 PRINT "
840 PRINT "     Sincerely,
850 PRINT "
960 PRINT "     (To return to your directory, type SYSTEM after the OK)
```

## COVSHT.BAS

```bas
10 REM This is the covsht section.
20 PRINT "
30 PRINT "                    ╬╬╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪╪
40 PRINT "                    ╬                             ╬
50 PRINT "                    ╬         T H E               ╬
60 PRINT "                    ╬         R E S U M E         ╬
70 PRINT "                    ╬           C O V E R         ╬
80 PRINT "                    ╬           S H E E T         ╬
90 PRINT "                    ╬                             ╬
95 PRINT "                    ╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬
100 PLAY " cccdddeeefffeeedddcccc"
110 PRINT "
120 PRINT "
130 INPUT "     Your name--first, middle initial and last?";N$
140 CLS
150 PRINT "
160 PRINT "     OK ";N$; " that is the most important item on your resume
170 PRINT "     cover sheet...your name...";N$"!"
180 PRINT "
190 PRINT "     A resume cover sheet is simply a sheet of paper that goes on
200 PRINT "     top of the one or two page resume itself.  It can have a
210 PRINT "     variety of material, but the most important item is that it
220 PRINT "     shows your name in capital letters, such as:
230 PRINT "
240 PRINT "                           JOHN D. JONES JR.
250 PRINT "
260 PRINT "     This should be centered attractively in the center of the
270 PRINT "     page.  It can be underlined or done in dark bold print to
280 PRINT "     help it stand out.
290 PRINT "
300 PRINT "     Other introductions or terms can be used on the cover sheet,
310 PRINT "     such as:
320 PRINT "
330 PRINT "                      PRESENTATION OF QUALIFICATIONS
340 PRINT "                              JOHN D. JONES
350 PRINT "
360 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
370 CLS
380 PRINT "
390 PRINT "     You can also list your name and address information on the
400 PRINT "     cover sheet and eliminate it from the resume itself, such as:
410 PRINT "
420 PRINT "                         JOHN D. JONES
430 PRINT "
440 PRINT "                      5345 Applewood Street
450 PRINT "                     SMALLVILLE, UTAH  84059
460 PRINT "                         (801) 388-5400
470 PRINT "
480 PRINT "     Be sure and center this attractively on the sheet.
490 PRINT "
500 PRINT "     You can purchase paper from some resume and/or printing com-
510 PRINT "     panies that has a border around the sheet to use as a cover
520 PRINT "     sheet if you want this type of effect.
521 PRINT "
522 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
523 CLS
524 PRINT "
525 PRINT "     Without any added expense, you can use your very own
530 PRINT "     typewriter or computer to draw lines or stars to border the
540 PRINT "     page as shown in the example below:
550 PRINT "
560 PRINT "               ***************************************
570 PRINT "
580 PRINT "                          JOHN D. JONES JR.
590 PRINT "                        5345 Applewood Street
600 PRINT "                       Smallville, Utah  84059
610 PRINT "                           (801) 388-5400
620 PRINT "
630 PRINT "               ***************************************
640 PRINT "
650 PRINT "     Again, this should be spaced out properly on an 8-1/2 x 11
660 PRINT "     inch page, with the stars close to the top and bottom and
670 PRINT "     the other information placed to look attractive.
680 PRINT "
690 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
700 CLS
710 PRINT "
720 PRINT "      ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺ ☺
730 PRINT "
740 PRINT "
750 PRINT "      Just keep in mind the same truth used for cover sheets that
760 PRINT "      is used throughout all of your resume...you are trying to
770 PRINT "      present your resume in the most visually appealing manner
780 PRINT "      possible.
790 PRINT "
800 PRINT "      A cover sheet is not a necessary or essential part of the
810 PRINT "      resume.  However, you must feel comfortable and pleased with
820 PRINT "      your own resume and if you feel a cover sheet on top of the
830 PRINT "      resume itself presents you in a more positive light and is
840 PRINT "      is more attractive, then do one!
850 PRINT "
860 PRINT "      If you decide to use a cover or portfolio purchased from a
870 PRINT "      stationary or office supply store, then a cover sheet looks
880 PRINT "      better through the open box on the front of these folders than
890 PRINT "      not having one at all.  It also looks good with clear plastic.
900 PRINT "
910 PRINT "      ☺ ☺ ☺ ☺ ☺     ☺ ☺ ☺ ☺ ☺     ☺ ☺ ☺ ☺ ☺     ☺ ☺ ☺ ☺ ☺     ☺ ☺
920 PRINT "
930 PRINT "      (To return to your main directory type SYSTEM after the OK)
```

## EDUC.BAS

```bas
10 REM This is the EDUC section.
20 PRINT "
30 PRINT "
40 PRINT "          ╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╣
50 PRINT "          ╟                ☺☺☺☺☺                ╟
60 PRINT "          ╟                                     ╟
70 PRINT "          ╟          E D U C A T I O N          ╟
80 PRINT "          ╟                 O R                 ╟
81 PRINT "          ╟           T R A I N I N G           ╟
82 PRINT "          ╟                                     ╟
83 PRINT "          ╠╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╣
84 PRINT "
85 PRINT "
86 PRINT "          This is the section where you will detail your
87 PRINT "          educational and/or training background.  High
88 PRINT "          school, college and trade school degress can be
89 PRINT "          highlighted here as well as other certificates
90 PRINT "          received or courses completed.  Military training
91 PRINT "          can also be listed here.
92 PRINT "
93 INPUT "          PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
94 CLS
95 PRINT "
96 PRINT "     This should be a chronological listing, with your last
100 PRINT "     education completed listed first; then work backwards.
110 PRINT "     There are a few exceptions to this general rule.  For
120 PRINT "     example, you may have a B.A. Degree, but you have taken
130 PRINT "     some post-degree classes, working towards your Masters.
140 PRINT "     It would be best to show the degree first; then list
150 PRINT "     the additional studies as that degree has not been obtained
160 PRINT "     yet.  The same would hold true for various courses/seminars
170 PRINT "     you may have completed.  Usually these would not be listed
180 PRINT "     first, even if they are the most recent education.  If you
190 PRINT "     have any type of formal degree, this should always come
200 PRINT "     before anything else.  Then all other education can follow
210 PRINT "     chronologically.  A good rule of thumb to follow is to
220 PRINT "     once again compose your list so it presents you in the most
230 PRINT "     favorable light.  This will perhaps become clearer to you
240 PRINT "     in the example screens that follow.  These will clearly show
250 PRINT "     not only a proper order, but format, wording, etc.
260 PRINT "
270 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
280 CLS
290 PRINT "
300 PRINT "     EDUCATION:     B.A. Degree - Business Administration
310 PRINT "                    UNIVERSITY OF NEVADA, Reno, NV
320 PRINT "
330 PRINT "                    High School Diploma
340 PRINT "                    WASATCH HIGH SCHOOL, Sparks, NV
350 PRINT "                    (emphasis on Business studies)
360 PRINT "
370 PRINT "
380 PRINT "     EDUCATION/     High School Diploma
390 PRINT "     TRAINING:      WILBUR HIGH SCHOOL, Wilbur, IL
400 PRINT "
410 PRINT "                    UNITED STATES AIR FORCE
420 PRINT "                    Completed extensive training/courses such as:
430 PRINT "                    OJT Supervisors Course;
440 PRINT "                    NCO Academy;
450 PRINT "                    USAF Effective Writing Course.
460 PRINT "
470 PRINT "
480 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
490 CLS
500 PRINT "
510 PRINT "     EDUCATION/     State of Nevada Real Estate License
520 PRINT "     LICENSES:      Active - Received 1/87
530 PRINT "
540 PRINT "                    High School Diploma
550 PRINT "                    SMALLVILLE HIGH SCHOOL, Smallville, WY
560 PRINT "
570 PRINT "                    Completed numerous business-related courses
580 PRINT "                    including: Small Business Management, Per-
590 PRINT "                    sonnel, Effective Communications.
600 PRINT "
610 PRINT "     EDUCATION:     M.A. Degree - Special Education
620 PRINT "                    UNIVERSITY OF UTAH, Salt Lake City, UT
630 PRINT "
640 PRINT "                    B.A. Degree - Elementary Education
650 PRINT "                    OREGON STATE UNIVERSITY, Corvallis, OR
660 PRINT "
670 PRINT "                    Also completed several local seminars:
680 PRINT "                    Child Abuse--A National Disgrace;
690 PRINT "                    Ghetto Children--The Forgotten Ones.
700 PRINT "
710 PRINT "
720 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
730 CLS
740 PRINT "
750 PRINT "     These examples should give you a good idea of how the
760 PRINT "     EDUCATION or EDUCATION/TRAINING or EDUCATION/LICENSES
770 PRINT "     section should look.
780 PRINT "
790 PRINT "     Just keep in mind two major factors when creating and
800 PRINT "     forming your own particular section:
810 PRINT "
820 PRINT "     1.   Considering your field of expertise and/or what
830 PRINT "          type of work you are looking for, list the education
840 PRINT "          in the best possible order; preferably chronologically.
850 PRINT "     2.   Show all formal degrees, if any, first, followed
860 PRINT "          chronologically by other education/training.
870 PRINT "
880 PRINT "     EDUCATION should always follow your OBJECTIVE or follow
890 PRINT "     the SUMMARY OF QUALIFICATIONS section if there is one.
900 PRINT "     The only exception is if your EXPERIENCE shows you in a
910 PRINT "     much better light than your education and you have no
920 PRINT "     formal college degrees.  Then you can flip-flop EDUCATION
930 PRINT "     and EXPERIENCE and list your EXPERIENCE first, followed
940 PRINT "     by your EDUCATION.
950 PRINT "
960 PRINT "     (Type the word SYSTEM following the OK to return to directory)
```

## EXPER.BAS

```bas
10 REM This is the exper section.
20 PRINT "
30 PRINT "               ▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄
31 PRINT "               █                                 █
32 PRINT "               █              the                █
33 PRINT "               █                                 █
34 PRINT "               █           EXPERIENCE            █
35 PRINT "               █                                 █
36 PRINT "               █             SECTION             █
37 PRINT "               █                                 █
38 PRINT "               █▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█▄█
40 PRINT "
50 PRINT "
60 PRINT "               THE LARGEST SECTION OF YOUR RESUME...
70 PRINT "
80 PRINT "
90 INPUT "          PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
95 CLS
100 PRINT "
110 PRINT "     ***** ***** ***** ***** ********** ***** ***** ***** *****
120 PRINT "
130 PRINT "     The experience area of the resume is usually the largest sec-
140 PRINT "     tion and also usually the section most prospective employers
150 PRINT "     are the most interested in reviewing.  In fact, when resumes
160 PRINT "     were first being used, sometimes experience was the only area
170 PRINT "     that was even listed.
180 PRINT "
190 PRINT "     This can sometimes make your resume a little more difficult to
200 PRINT "     do if you have had very little experience.  If this is your
210 PRINT "     case, such as you are a student just graduating or a full-time
220 PRINT "     housewife trying to get back into the job market after a long
230 PRINT "     absence, you can disguise this lack of experience by enlarging
240 PRINT "     your SUMMARY OF QUALIFICATIONS section a little and listing your
250 PRINT "     EDUCATION section before your experience.  You can also rack
260 PRINT "     your brain a little and perhaps come up with community or civic
270 PRINT "     activities/positions that can be listed in the EXPERIENCE sec-
280 PRINT "     tion.  It does say EXPERIENCE...not paid employment!  You may
290 PRINT "     want to consider using an accomplishment or targeted format in
300 PRINT "     your experience section, rather than a chronological.
310 PRINT "
320 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
330 CLS
340 PRINT "
350 PRINT "     ***** ***** ***** ***** ********** ***** ***** ***** *****
370 PRINT "     If you are going to use a targeted or accomplishment approach
380 PRINT "     in your EXPERIENCE section, you do not need to go in order of
390 PRINT "     most recent position on back...and you also do not need to
400 PRINT "     include dates.  A very brief targeted-type experience section
410 PRINT "     is shown below and the following screen will show you an exam-
420 PRINT "     ple of how an accomplishment EXPERIENCE section might look:
440 PRINT "                               TARGETED
450 PRINT "
460 PRINT "     EXPERIENCE:   15+ years of work experience specifically in
470 PRINT "                   legal secretarial positions.  Gained extensive
480 PRINT "                   expertise in typing, computer data entry, trans-
490 PRINT "                   cription and legal file maintenance.  Also gained
500 PRINT "                   good working knowledge of paralegal duties, with
510 PRINT "                   an emphasis on legal research.
520 PRINT "
530 PRINT "                   Employers include the law firms of:
540 PRINT "                   SMITH, JONES & CLOSE, Las Vegas, NV;
550 PRINT "                   MELLAMAN AND MELLAMAN, Las Vegas, NV.
560 PRINT "
570 PRINT "                   Other past employment includes positions as:
580 PRINT "                   Waitress, cashier, fast food worker.
590 PRINT "
600 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
610 CLS
620 PRINT "
630 PRINT "     ***** ***** ***** ***** ********** ***** ***** ***** *****
640 PRINT "                           ACCOMPLISHMENT
650 PRINT "
660 PRINT "     EXPERIENCE:   Numerous accomplishments with a variety of
670 PRINT "                   employers, functioning in management positions:
680 PRINT "
690 PRINT "                   * Supervised staffs of up to 450 employees.
700 PRINT "                   * Simultaneously directed up to 7 departments.
710 PRINT "                   * Personally created, designed, produced and
720 PRINT "                     implemented new policies & procedures manual
730 PRINT "                     that is currently utilized nationwide.
740 PRINT "                   * Reduced staff by 31% and cut operating costs
750 PRINT "                     by 12% while increasing productivity by 6%.
760 PRINT "                   * Successfullly recruited, hired and trained
770 PRINT "                     mid-level management staff members.
780 PRINT "                   * Gained extensive expertise in all facets of
790 PRINT "                     personnel matters, including Federal and local
800 PRINT "                     laws and regulations.  Acted as liaison for
810 PRINT "                     employer during union negotiations.
820 PRINT "
830 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
840 CLS
850 PRINT "
860 PRINT "     ***** ***** ***** ***** ********** ***** ***** ***** *****
870 PRINT "
880 PRINT "     You will note that the targeted resume was obviously a person
890 PRINT "     interested in a legal secretarial position only.  However, this
900 PRINT "     particular person had been in and out of this profession for
910 PRINT "     20 years, trying other lines of work.  You can see it looked
920 PRINT "     much better to target and lump all 15 years of legal secretarial
930 PRINT "     work together and mention the other positions at the end instead
940 PRINT "     of showing it in chronological order: first a legal secre-
950 PRINT "     tarial position, then waitress, then back to legal secretarial,
960 PRINT "     then cashier, then back to legal secretarial, etc.  That chrono-
970 PRINT "     logical format would have shown the person in a negative light;
980 PRINT "     a job-hopper; someone who couldn't stick with something or
990 PRINT "     couldn't make up their mind.  Targeted, however, this looks like
991 PRINT "     a person with a lot of expertise!
992 PRINT "
993 PRINT "     The person in the accomplishment-type resume looks good, but
994 PRINT "     this was a person who had job-hopped and held a dozen manage-
995 PRINT "     ment positions.  It showed this person in a much more favorable
996 PRINT "     light to merely pull out their major accomplishments and let the
997 PRINT "     reader see those, instead of the many different positions.
998 PRINT "
999 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
1000 CLS
1010 PRINT "
1020 PRINT "     ***** ***** ***** ***** ********** ***** ***** ***** *****
1030 PRINT "
1040 PRINT "     These examples were given to you only as illustrations of
1050 PRINT "     what you can do if you cannot go in chronological format.
1060 PRINT "     I always recommend chronological format whenever possible as
1070 PRINT "     this is what prospective employers look for.  However, if a
1080 PRINT "     targeted or accomplishment format shows you in a better light,
1090 PRINT "     do it, as your first impression to the employer is what counts.
1100 PRINT "     Even if the reader finds out later that you have job-hopped or
1110 PRINT "     have some gaps or finds out whatever it was you were trying to
1120 PRINT "     disguise by using a different format, it may not matter at all,
1130 PRINT "     because the initial first impression was good.
1140 PRINT "
1150 PRINT "     The most commonly used format in the EXPERIENCE section is the
1160 PRINT "     chronological format.  You should list your most recent or
1170 PRINT "     present position first, with your position title, dates of
1180 PRINT "     employment (month/year preferable), company name, location,
1190 PRINT "     and a brief description of your major responsibilities.  There
1200 PRINT "     are many different formats for listing this.  I will show you
1210 PRINT "     several styles in the screens that follow.  You may also select
1220 PRINT "     different category titles other than just EXPERIENCE, such as
1230 PRINT "     WORK EXPERIENCE, JOB HISTORY, JOB EXPERIENCE, EMPLOYMENT, etc.
1240 PRINT "
1250 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
1260 CLS
1270 PRINT "
1280 PRINT "     ***** ***** ***** ***** *********** ***** ***** ***** *****
1290 PRINT "
1300 PRINT "     EXPERIENCE:    Waitress                   6/81 - Present
1310 PRINT "                    JOE BLOW'S CAFE, Las Vegas, NV
1320 PRINT "                    Responsible for assisting customers with
1330 PRINT "                    food selections.  Serve food items to clien-
1340 PRINT "                    tele and ensure positive public relations
1350 PRINT "                    for employer.
1360 PRINT "
1370 PRINT "                    Cocktail Waitress          7/76 - 6/81
1380 PRINT "                    KERRY'S LOUNGE, Reno, NV
1390 PRINT "                    Full-time position, working graveyard shift,
1400 PRINT "                    serving a variety of mixed drinks to walk-in
1410 PRINT "                    clientele.  Served as Shift Manager two nights
1420 PRINT "                    per week.
1430 PRINT "
1440 PRINT "                    Other past employment includes:
1450 PRINT "                    Fast Food Worker, MCDONALD'S, Las Vegas, NV;
1460 PRINT "                    Cashier, KENTUCKY FRIED CHICKEN, Las Vegas, NV.
1470 PRINT "
1480 PRINT "
1490 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
1500 CLS
1510 PRINT "
1520 PRINT "     ***** ***** ***** ***** ********** ***** ***** ***** *****
1530 PRINT "
1540 PRINT "     WORK          Aircraft Mechanic
1550 PRINT "     EXPERIENCE:   EG&G, Las Vegas, NV
1560 PRINT "
1570 PRINT "     3/86 - 3/88   Responsible for inspecting, troubleshooting,
1580 PRINT "                   repairing and overhauling a variety of air-
1590 PRINT "                   craft engines and associated equipment.  Trained
1600 PRINT "                   other mechanics; supervised day shift with up to
1610 PRINT "                   4 employees.  Successfully completed company
1620 PRINT "                   40-hour Aircraft Mechanic Training Course.
1630 PRINT "
1640 PRINT "     3/82 - 3/86   Jet Mechanic
1650 PRINT "                   UNITED STATES AIR FORCE
1660 PRINT "                   Served in a variety of mechanic positions
1670 PRINT "                   worldwide, handling basic technician duties.
1680 PRINT "                   Emphasis on TA-16 aircraft repairs.  Also held
1690 PRINT "                   Top Secret Clearance.
1700 PRINT "
1710 PRINT "                   Other past experience includes:
1720 PRINT "                   Part-time Auto Mechanic, JOE's GARAGE.
1730 PRINT "
1740 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
1750 CLS
1760 PRINT "
1765 PRINT "     ***** ***** ***** ***** ********** ***** ***** ***** *****
1770 PRINT "     Through studying these examples and slightly different for-
1780 PRINT "     mats, you can see the style of writing and set-up that is
1790 PRINT "     recommended.  Also note that usually the experience section
1800 PRINT "     only goes back in detail 5-10 years.  After that, previous
1810 PRINT "     employment is either not mentioned at all, or all lumped
1820 PRINT "     together at the end.  One of the most difficult things most
1830 PRINT "     people run into when doing their own resume is their descrip-
1840 PRINT "     tive sections of the job.  KEEP IT BRIEF.  Nobody wants to
1850 PRINT "     read every little thing you ever did!  Make it 3-10 lines
1860 PRINT "     only, keeping in mind that the resume is only a brief synopsis
1870 PRINT "     of your background, meant to perk the interest of the reader.
1880 PRINT "     Further details can be asked at interview time, and the pro-
1890 PRINT "     spective employer will appreciate your brevity.
1900 PRINT "
1910 PRINT "     In conclusion, select the desired format for your particular
1920 PRINT "     background, going with a chronological lay-out if at all
1930 PRINT "     possible.  Briefly and concisely list your main information.
1940 PRINT "     Remember that this is the section that contains the bulk of
1950 PRINT "     your resumes information, so make it good!
1970 PRINT "     ***** ***** ***** ***** ********** ***** ***** ***** *****
1990 PRINT "     (To return to your prompt, type the word SYSTEM after the OK)
```

## INTRO.BAS

```bas
10 REM THIS IS THE INTRO TO THE RESUMEBEST PROGRAM.
20 PRINT "
30 PRINT "     ┌─────────────────────────────────────────────────┐
40 PRINT "     │     ☺     ☺     ☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺     ☺     ☺     │
50 PRINT "     │                                                 │
60 PRINT "     │      CONNIE POLOSKEY'S ...                      │
61 PRINT "     │                                 ☺               │
62 PRINT "     │   ☺                                           ☺ │
63 PRINT "     │              INTRODUCTION                       │
64 PRINT "     │        ☺☺                           ☺           │
65 PRINT "     │  ☺                         TO                   │
66 PRINT "     │                                                 │
67 PRINT "     │          ☺ ☺ ☺                   RESUMES !!!    │
68 PRINT "     │     ☺                         ☺                 │
69 PRINT "     │                                                 │
70 PRINT "     │     ☺    ☺     ☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺    ☺     ☺    │
71 PRINT "     └─────────────────────────────────────────────────┘
72 PRINT "
73 PLAY  "     EDCEDCFEDFEDEDCEDCEDCCCC
80 PRINT "     Welcome to RESUMEBEST by Connie Poloskey of the firm
85 PRINT "     POLOSKEY & POLOSKEY: the Computor Tutors! Las Vegas,
90 PRINT "     Nevada.
95 PRINT "
96 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
97 CLS
100 PRINT "
110 PRINT "    I have taken 5+ years of experience running an extremely
120 PRINT "    busy resume service and the expertise I have gained in
130 PRINT "    personally handling in excess of 5,000 resumes AND...
140 PRINT "    put all that knowledge into this RESUMEBEST disk for you!
150 PRINT "
160 PRINT "    At any time during this program you wish to print informa-
170 PRINT "    tion out hard copy to your printer, just use your Shift and
180 PRINT "    Prt Sc * key or on some models, just hit your Prt Sc * key.
190 PRINT "    This will send that particular screen to your printer for
200 PRINT "    future reference.
210 PRINT "
220 PRINT "    Keep in mind while you are learning how to prepare your
230 PRINT "    own resume that you are not only saving yourself anywhere
240 PRINT "    from $25.00 - $250.00, which is what a professional resume
250 PRINT "    service would charge you for a resume from scratch, but you
260 PRINT "    will probably get a better resume because not only do you
270 PRINT "    know yourself better than anyone else, but you are also
280 PRINT "    willing to put the time into the preparation to make the
290 PRINT "    absolute RESUMEBEST you can!
300 PRINT "
310 INPUT "    PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
320 CLS
330 PRINT "
340 PRINT "     ***** ***** ***** ***** ***** ***** ***** ***** ***** *****
360 PRINT "     There are basically three types of resumes and two lengths:
370 PRINT "
380 PRINT "          * CHRONOLOGICAL * TARGETED * ACCOMPLISHMENTS
390 PRINT "
400 PRINT "                 * One Page   ***   Two Page *
410 PRINT "
420 PRINT "     Whenever possible, use a one-page resume.  We live in an
430 PRINT "     extremely rushed and busy society and if you can concisely
440 PRINT "     put your most important information on a one-page, do it.
450 PRINT "     If you have extensive experience, qualifications, education,
460 PRINT "     etc. and feel a one-page just won't do you justice, then go
470 PRINT "     to the second page.
480 PRINT "
490 PRINT "     A chronological resume is the most preferable form and it
500 PRINT "     means that all your experience and education is shown in
510 PRINT "     chronological order--from the most recent on back.  This is
520 PRINT "     what prospective employers expect to see and should always
530 PRINT "     be used unless you have a lot of gaps or short time on the
540 PRINT "     job in which case it would not show you to advantage.
560 PRINT "     ***** ***** ***** ***** ***** ***** ***** ***** ***** *****
570 PRINT "
580 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
590 CLS
600 PRINT "
610 PRINT "     A targeted resume is where you are specifically going for
620 PRINT "     one particular job, area of field.  It is very detailed
630 PRINT "     in one area only, even if you have other areas of expertise.
640 PRINT "
650 PRINT "     A accomplishment resume is best used when you don't want to
660 PRINT "     go chronological form due to gaps, short time on the job,
670 PRINT "     etc.  An accomplishment resume can disguise these factors
680 PRINT "     while showing the prospective employer what skills, talents
690 PRINT "     and experience you do have.
700 PRINT "
710 PRINT "     The forms to use for structuring your resume are shown in
720 PRINT "     the OUTLINE1 section for a one-page and OUTLINE2 section
730 PRINT "     for a two-page resume.  These basic structures can be used
740 PRINT "     whether you are doing a chronological, targeted or accomplish-
750 PRINT "     ment type resume.  The category names would remain the same;
760 PRINT "     you would change the content depending on which form you
770 PRINT "     select.
780 PRINT "
790 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
800 CLS
810 PRINT "
820 PRINT "     For example,  let's use the experience section to detail
830 PRINT "     this.  In a chronological resume, under EXPERIENCE, you
840 PRINT "     would put your most recent job first, with the dates
850 PRINT "     included.  In an accomplishment resume, you would not
860 PRINT "     even list your EXPERIENCE section by job or date, but by
870 PRINT "     a list of accomplishments, responsibilities, awards and
880 PRINT "     duties.  In a targeted resume, the EXPERIENCE section
890 PRINT "     might not start out with the most recent position if you
900 PRINT "     had another position in the past that was more applicable
910 PRINT "     to your current goal you were targeting the resume for.
920 PRINT "     You might not list dates either.
930 PRINT "
940 PRINT "     Don't worry too much about what kind of resume you have.
950 PRINT "     This is for your information only, to assist you in forming
960 PRINT "     a correct mental picture of your particular goals and back-
970 PRINT "     ground and which way to formulate and present it, to show
980 PRINT "     you in your best possible light so you can get the job you
990 PRINT "     want.  That is what RESUMEBEST is all about...to teach you
991 PRINT "     how to do your own resume, fine tuning it to present you
992 PRINT "     to prospective employers in the most positive way possible.
993 PRINT "
994 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
995 CLS
1000 PRINT "
1010 PRINT "     The basic components in a resume include the sections
1020 PRINT "     listed in the README section or the directory of this
1030 PRINT "     disk.  Your one or two page resume can consist of the
1040 PRINT "     categories:  OBJECTIVE, SUMMARY OF QUALIFICATIONS,
1050 PRINT "     EDUCATION, EXPERIENCE, ADDITIONAL INFORMATION, REFERENCES.
1060 PRINT "     Your resume package can also consist of a COVER SHEET,
1070 PRINT "     A COVER LETTER, A REFERENCE SHEET AND A THANK YOU LETTER.
1080 PRINT "     What components you select will depend on your particular
1090 PRINT "     background.  Each section of this disk details a specific
1100 PRINT "     area to assist you in your selection.
1110 PRINT "
1120 PRINT "     As you study the OUTLINE1 and OUTLINE2 section, keep in
1130 PRINT "     mind that format and appearance are extremely important.
1140 PRINT "     This is the first impression a prospective employer will
1150 PRINT "     have of you.  That is why I recommend placing category
1160 PRINT "     titles to the left, bolded, leaving some white space so
1170 PRINT "     the page doesn't appear too full and crowded and the reader
1180 PRINT "     can easily pick out what he/she wants to read.  The quality
1190 PRINT "     of your paper should be good--thick, light colored paper
1200 PRINT "     such as gray parchment or beige linen is best.  Keep in
1210 PRINT "     mind that your resume on first impression should have a
1220 PRINT "     positive visual impact--before the content is even read!
1230 PRINT "
1240 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
1250 CLS
1260 PRINT "
1270 PRINT "     ▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▓
1290 PRINT "     If you have a letter quality computer printer or type-
1300 PRINT "     writer, prepare your own resume.  IT MUST BE 100% ERROR
1310 PRINT "     FREE...NO SPELLING/PUNCTUATION ERRORS AT ALL!  This is
1320 PRINT "     very important and if you aren't qualified to do that
1330 PRINT "     yourself, hire someone to do the final typing for you.
1340 PRINT "     NO STRIKEOVERS OR CORRECTIONS.  And either have original
1350 PRINT "     print-outs of the resume done, excellent copies or have
1360 PRINT "     the resume typeset.  The first visual impression of the
1370 PRINT "     resume is how the reader will view you, and if that
1380 PRINT "     impression is that you sloppily prepared your resume,
1390 PRINT "     the reader may feel you will sloppily handle a job.
1410 PRINT "     While you are writing and preparing the various sections,
1420 PRINT "     remember to stay in the THIRD PERSON at all times.  In
1430 PRINT "     other words, you never use the words I or MY.  When you
1440 PRINT "     use I or MY, it sounds as if you are saying all these
1450 PRINT "     wonderful things about yourself, and it is not as believ-
1460 PRINT "     able to the reader as if it is written in the third person
1470 PRINT "     and it sounds like someone else is saying all these wonder-
1480 PRINT "     ful things about you!  For example, you wouldn't say:
1490 PRINT "     My responsibilities included:  You would say:  Responsibil-
1500 PRINT "     ities included:
1510 PRINT "     ▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒
1520 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
1530 CLS
1540 PRINT "
1550 PRINT "     While you are doing your creative writing in the various
1560 PRINT "     sections, use as many action verbs as possible.  Using
1570 PRINT "     action verbs shows you are a DOING or CAN DO person and
1580 PRINT "     gives the interviewer the impression you CAN GET THINGS
1590 PRINT "     DONE!  Action verbs include such words as:
1600 PRINT "        developed, created, implemented, initiated, handled,
1610 PRINT "        presented, solved, managed, coordinated, composed,
1620 PRINT "        controlled, motivated, administered, ETC.!
1640 PRINT "     I am sure you can see how these words inspire and convey
1650 PRINT "     the feeling that you are an ACTION person--a DOER!
1660 PRINT "
1670 PRINT "     Feel free to use some adjectives in your descriptions,
1680 PRINT "     particularly in the SUMMARY OF QUALIFICATIONS section,
1690 PRINT "     but don't get carried away.  Prospective employers don't
1700 PRINT "     want to read a novel...or read too many descriptive
1710 PRINT "     phrases as they are well aware that anything can be said
1720 PRINT "     on paper!  Some good adjectives include:
1730 PRINT "             excellent...successful...extensive...
1740 PRINT "
1750 PRINT "     If you have a word processor with a thesaurus, now is the
1760 PRINT "     the time to use it!  You'll find it extremely helpful in
1770 PRINT "     selecting verbs and adjectives for your resume.
1780 PRINT "
1790 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
1800 CLS
1810 PRINT "
1820 PRINT "     ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
1830 PRINT "     *                                                         *
1840 PRINT "     *     That is the basic information to introduce you      *
1850 PRINT "     *     to the world of RESUMES.                            *
1860 PRINT "     *                                                         *
1870 PRINT "     *     Please go back to your main directory by typing     *
1880 PRINT "     *     the word SYSTEM after the OK.  You may begin        *
1890 PRINT "     *     anywhere, but I suggest going in order by begin-    *
1900 PRINT "     *     ning with OUTLINE1 and progressing on down the      *
1910 PRINT "     *     list, to learn in order of resume preparation.      *
1920 PRINT "     *                                                         *
1930 PRINT "     *     Once you have reviewed the entire disk, begin to    *
1940 PRINT "     *     rough out your own resume, referring to each sec-   *
1950 PRINT "     *     tion individually, if and when it is necessary.     *
1960 PRINT "     *                                                         *
1970 PRINT "     *     GOOD LUCK --- AND HAPPY RESUMEBEST !   C.Poloskey   *
1980 PRINT "     *                                                         *
1990 PRINT "     ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
```

## MAILTIPS.BAS

```bas
10 REM This is the mailtips section.
20 PRINT "
30 PRINT "     ████████████████████████████████████████████████████████
40 PRINT "     █                                                      █
50 PRINT "     █    M                                                 █
51 PRINT "     █     A                                                █
52 PRINT "     █      I                                               █
53 PRINT "     █       L                                              █
54 PRINT "     █        I                                             █
55 PRINT "     █         N                                            █
56 PRINT "     █          G                                           █
57 PRINT "     █                                                      █
58 PRINT "     █             T                                        █
59 PRINT "     █              I                                       █
60 PRINT "     █               P                                      █
61 PRINT "     █                S                                     █
62 PRINT "     █                                                      █
63 PRINT "     █                       FOR                            █
64 PRINT "     █                           YOUR                       █
65 PRINT "     █                                RESUME !!!            █
66 PRINT "     █                                                      █
67 PRINT "     █                                                      █
70 PRINT "     ████████████████████████████████████████████████████████
80 PRINT "
85 PRINT "
90 INPUT "     PRESS (RETURN) FOR NEXT PAGE";Z$
100 CLS
110 PRINT "
120 PRINT "
130 PRINT "     HOW YOU MAIL YOUR RESUME CAN MAKE A DIFFERENCE!
140 PRINT "
150 PRINT "     The most important point is never fold your resume to fit
160 PRINT "     it inside an envelope.  Don't use the standard #10 business
170 PRINT "     envelope, even if you have matching ones to the color of
180 PRINT "     your resume paper.  When you fold your resume, it destroys
190 PRINT "     the clean, smooth look of the page.  The prospective employer
200 PRINT "     receives it, opens the envelope, takes it out and begins to
210 PRINT "     wrestle with it right away, trying to smooth out the folds
220 PRINT "     so he/she can read it.  Not only is this irritating and time
230 PRINT "     consuming, but during the smoothing out process, they can
240 PRINT "     actually rub off some of the print!  Think about it...you go
250 PRINT "     to a lot of time and often expense to print up a nice looking
260 PRINT "     resume, understanding that the first visual impression of
270 PRINT "     the resume, how it looks, the quality of paper, etc. is what
280 PRINT "     the prospective employer first sees about you...AND THEN YOU
290 PRINT "     GO AND FOLD IT AND RUIN IT!  Always mail your resume out flat.
300 PRINT "     Never fold it.  Buy the large manilla envelopes in tan or
310 PRINT "     white, 9x12 inches and insert your resume/materials in that.
320 PRINT "
330 INPUT "     PRESS (RETURN) FOR NEXT PAGE OR (P) FOR PREVIOUS PAGE";Z$
340 CLS
350 IF Z$ = "P" THEN GOTO 10
360 PRINT "
370 PRINT "     █████▒▒▒▒▒█████▒▒▒▒▒█████▒▒▒▒▒█████▒▒▒▒▒█████▒▒▒▒▒█████▒▒▒▒▒
380 PRINT "
390 PRINT "     Other considerations for proper mailing include:
400 PRINT "
410 PRINT "     Consider placing your resume between two stiff pieces of
420 PRINT "     cardboard to protect it from being bent or creased.
430 PRINT "
440 PRINT "     Shop your local office supply or stationary stores for the
450 PRINT "     purchase of a folder to place your resume in for protection
460 PRINT "     and a better appearance.  A variety of folders exist,
470 PRINT "     in different colors, wood grained or clear covers.
480 PRINT "
490 PRINT "     When addressing the envelope, try and find out the name of
500 PRINT "     individual to send it to, rather than just PERSONNEL DEPT.
510 PRINT "     or HUMAN RESOURCES DIVISION.  Then address it to this person
520 PRINT "     specifically and mark it PERSONAL & CONFIDENTIAL.  Your
530 PRINT "     resume will have a better chance of being read this way as
540 PRINT "     it is personalized.
550 PRINT "
560 PRINT "     █████▒▒▒▒▒█████▒▒▒▒▒█████▒▒▒▒▒█████▒▒▒▒▒█████▒▒▒▒▒█████▒▒▒▒▒
570 PRINT "
580 INPUT "     PRESS (RETURN) FOR NEXT PAGE OR (P) FOR PREVIOUS PAGE";Z$
590 CLS
600 IF Z$ = "P" THEN GOTO 110
610 PRINT "
620 PRINT "     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
640 PRINT "     If you are mailing your resume to a prospective employer who
650 PRINT "     has either requested it from you or you are responding to a
660 PRINT "     definite opening, then it is perfectly acceptable to just mail
670 PRINT "     the resume.  However, if you are mailing out without being
680 PRINT "     solicited or to a company who has not advertised any openings,
690 PRINT "     because you want your resume on file, then you should include a
700 PRINT "     cover letter with your resume, stating why they are recieving
710 PRINT "     your resume--otherwise, it can be confusing to the prospective
720 PRINT "     employer, presenting a slightly negative impression.  Please see
730 PRINT "     the COVLTR section of this disk for more information on when and
740 PRINT "     how to prepare and include a cover letter.
770 PRINT "     In conclusion, just use common sense in mailing your resume.
780 PRINT "     Remember that the first impression the prospective employer
790 PRINT "     will get of you is that first visual impression of your
800 PRINT "     resume, so you want it to be clean, neat, flat and totally
810 PRINT "     free of smudges, wrinkles, folds, tears, etc.  The way your
820 PRINT "     resume is first viewed is most likely the way you will be
830 PRINT "     viewed, so adhere to common sense and these basic mailing
840 PRINT "     tips; you'll increase your chances of a favorable impression!
860 PRINT "     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
870 PRINT "     (Type system after the OK to return to main directory.)
```

## OBJGEN.BAS

```bas
10 REM This is the OBJGEN section.
20 PRINT "
25 PRINT "
30 PRINT "
40 PRINT "
50 PRINT "                    ██████████████████████████████
60 PRINT "                   █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
70 PRINT "                  █▒                              ▒█
80 PRINT "                 █▒            GENERAL            ▒█
81 PRINT "                █▒█           OBJECTIVE            █▒█
82 PRINT "                 █▒                                ▒█
83 PRINT "                  █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
84 PRINT "                   ████████████████████████████████
85 PRINT "
90 PRINT "
95 PRINT "
96 INPUT "            PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
97 CLS
98 PRINT "
100 PRINT "
110 PRINT "     Your objective category is the first item shown on your
120 PRINT "     your resume, following your name and contact information.
130 PRINT "
140 PRINT "     If you do not want to be specific about what type of position
150 PRINT "     or what field you are want to work in specifically, then it
160 PRINT "     is best to formulate a general objective that leaves you open
170 PRINT "     for a variety of positions and/or fields.
180 PRINT "
190 PRINT "     For example, perhaps your background is clerical, but you are
200 PRINT "     also interested in exploring sales and marketing or perhaps
210 PRINT "     public relations.  However, if you are unable to obtain employ-
220 PRINT "     ment in these areas, you may fall back on clerical again.
230 PRINT "     Rather than list all these areas in your objective, which not
240 PRINT "     only looks cluttered, but shows that you haven't made up your
250 PRINT "     mind about what you want to do, it is best to stay very general,
260 PRINT "     which will allow you to use the resume for any type of position.
270 PRINT "
280 PRINT "
290 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
300 CLS
310 PRINT "
320 PRINT "     Some examples of general objectives are as follows:
330 PRINT "
340 PRINT "     OBJECTIVE:     Seeking a challenging position with an organi-
350 PRINT "                    zation offering growth opportunities.
360 PRINT "
370 PRINT "     PROFESSIONAL   To obtain a challenging, career position with
380 PRINT "     OBJECTIVE:     an organization which will effectively utilize
390 PRINT "                    extensive background experience and skills.
400 PRINT "
410 PRINT "     CAREER         To secure a career position with an organization
420 PRINT "     OBJECTIVE:     which will offer advancement opportunities while
430 PRINT "                    fully utilizing background experience, training
440 PRINT "                    and skills.
450 PRINT "
460 PRINT "     OBJECTIVE:     To obtain a full-time, permanent position.
470 PRINT "
480 PRINT "     JOB            Seeking a part-time position while completing
490 PRINT "     OBJECTIVE:     education with an organization which will
500 PRINT "                    offer learning opportunities for a student.
510 PRINT "
520 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
530 CLS
540 PRINT "
550 PRINT "     You can see through these examples exactly what we are trying
560 PRINT "     to accomplish.  We are not naming any specific type of work
570 PRINT "     or position, nor do we narrow it down to a specific industry
580 PRINT "     or field.  However, we are saying some things to a prospective
590 PRINT "     employer, to give him a clue as to what you are looking for.
600 PRINT "
610 PRINT "     We are stating that we are looking for a job and we sometimes
620 PRINT "     specify whether full-time or part-time.  Also, by using the
630 PRINT "     word CAREER in our objective, we are stating we are seeking
640 PRINT "     and offering longevity.  Sometimes we use the word CHALLENGING
650 PRINT "     in our objective to show we are not seeking a low level or
660 PRINT "     entry level, mundane type of position.  When we use the phrase
670 PRINT "     of an employer offering growth or advancement opportunities,
680 PRINT "     we are again stating we want longevity and the possibility of
690 PRINT "     growth within the same firm.  When we talk about utilizing
700 PRINT "     our background experience, training or skills, we are saying
710 PRINT "     we have something to offer and the prospective employer will
720 PRINT "     read on to discover what.
730 PRINT "
740 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
750 CLS
760 PRINT "
770 PRINT "     So even though we are doing a general objective, we are
780 PRINT "     giving the interviewer some information and clues as to
790 PRINT "     what we want, but we are not limiting ourselves to a certain
800 PRINT "     type of work or field.
810 PRINT "
820 PRINT "     Again, this is most effective when you are unsure of what you
830 PRINT "     want or very open as to what you are seeking...or...when you
840 PRINT "     have a varied background and want the employer to read on fur-
850 PRINT "     ther to specifically pull out what he or she might be most
860 PRINT "     interested in.
870 PRINT "
880 PRINT "     See the OBJSPEC section if you haven't already read it to
890 PRINT "     learn what specific objectives look like and then you can make
900 PRINT "     your own decision about what type of objective will work best
910 PRINT "     in your particular case.
920 PRINT "
930 PRINT "     (Type the word SYSTEM after the OK to return to the directory)
```

## OBJSPEC.BAS

```bas
10 REM This is the objspec section.
20 PRINT "
30 PRINT "
40 PRINT "               ▒██████████████▒█████▒██████████████▒
50 PRINT "               ▒                                   ▒
51 PRINT "               ▒          S P E C I F I C          ▒
52 PRINT "               ▒        O B J E C T I V E S        ▒
53 PRINT "               ▒                                   ▒
54 PRINT "               ▒█████▒█████▒███████████▒█████▒█████▒
55 PRINT "
60 PRINT "
70 PRINT "     This section will give you some information on formulating
75 PRINT "     specific objectives rather than general objectives.  You
80 PRINT "     should use a specific objective whenever you are searching
85 PRINT "     for a position in a specific area or field.
90 PRINT "
95 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
96 CLS
100 PRINT "
110 PRINT "     When you are considering formulating a specific objective,
120 PRINT "     it is a very helpful process to your overall job search.  It
130 PRINT "     forces you to think about both your short-term and long-term
140 PRINT "     goals and evaluate just what you are looking for.
150 PRINT "
160 PRINT "     When you have a lot of years within the same field...and
170 PRINT "     you are seeking employment within this same field, then it
180 PRINT "     is easy to formulate an objective to match.  You can also
190 PRINT "     formulate a specific objective when you are searching in
200 PRINT "     several different areas, as long as the areas relate to
210 PRINT "     each other.
220 PRINT "
230 PRINT "     The following screens will give you some examples of what
240 PRINT "     a specific objective is composed of.  Keep in mind that
250 PRINT "     following a specific objective should be a SUMMARY or
260 PRINT "     SUMMARY OF QUALIFICATIONS section that should detail your
270 PRINT "     specific experience in the field you area seeking.
280 PRINT "
290 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
295 CLS
300 PRINT "
310 PRINT "     OBJECTIVE:     To obtain a management position, preferably
320 PRINT "                    in the area of personnel, with an organization
330 PRINT "                    which will fully utilize extensive experience,
340 PRINT "                    education and skills.
350 PRINT "
360 PRINT "     CAREER         Seeking an entry-level management position
370 PRINT "     OBJECTIVE:     with an organization offering advancement
380 PRINT "                    opportunities.
390 PRINT "
400 PRINT "     JOB            To secure a career position in the field of
410 PRINT "     OBJECTIVE:     advertising, public relations and/or marketing.
420 PRINT "
430 PRINT "     OBJECTIVE:     To obtain a part-time position while completing
440 PRINT "                    college education, preferably within chosen
450 PRINT "                    career field of hotel administration, with an
460 PRINT "                    organization offering growth opportunities.
470 PRINT "
480 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
490 CLS
500 PRINT "
510 PRINT "     In studying these objectives, I am sure they will help you
520 PRINT "     in formulating your own.  You can see the different titles
530 PRINT "     you can utilize such as OBJECTIVE, CAREER OBJECTIVE, JOB
540 PRINT "     OBJECTIVE.  You should specifically state the type of position
550 PRINT "     you are seeking, such as management, and/or the specific area
560 PRINT "     or field, such as advertising.  Please note how we com-
570 PRINT "     bined advertising, public relations and/or marketing.  These
580 PRINT "     are all related fields and it is possible you might obtain a
590 PRINT "     position that would encompass all three areas or only one.
610 PRINT "     Also note you can include other information in your objec-
620 PRINT "     tive, giving the prospective employer more information on
630 PRINT "     what you are looking for and how it compares to what he/she
640 PRINT "     has to offer.  Growth opportunities, career position, advance-
650 PRINT "     ment opportunities, full-time or part-time, etc.
660 PRINT "
670 PRINT "     In conclusion, review both the OBJGEN section for general
680 PRINT "     objective information and this OBJSPEC section for specific
690 PRINT "     objective information, determine your own job and career
700 PRINT "     goals...and formulate a personal objective for your own
710 PRINT "     resume that clearly reflects what you are seeking.
720 PRINT "
730 PRINT "     (To return to directory type SYSTEM following OK)
```

## OUTLINE1.BAS

```bas
10 REM This is the Outline1 section.
20 PRINT "
30 PRINT "
40 PRINT "
50 PRINT "
60 PRINT "
70 PRINT "
80 PRINT "                    ╔═════════════════════════════╗
90 PRINT "                    ║                             ║
91 PRINT "                    ║       O N E   P A G E       ║
92 PRINT "                    ║                             ║
93 PRINT "                    ║        O U T L I N E        ║
94 PRINT "                    ║                             ║
95 PRINT "                    ╚═════════════════════════════╝
96 PRINT "
97 PLAY "CDEFGFEDCCC"
98 INPUT "     ARE YOU READY TO CONTINUE?  YES OR NO!";Z$
99 CLS
100 IF Z$ = "YES" THEN PRINT "Good...let's go on!"
110 IF Z$ = "NO" THEN PRINT "Too bad...we're continuing anyway!"
120 PRINT "
130 PRINT "
140 PRINT "     A one-page resume, as discussed in the introduction section,
150 PRINT "     can be the most effective length of resume used when you are
160 PRINT "     dealing with an extremely busy prospective employer or apply-
170 PRINT "     ing for a position that will have numerous other applicants.
180 PRINT "     Prospective employers are busy people and they appreciate a
190 PRINT "     brief, concise synopsis of a person's background.  From this,
200 PRINT "     they will make the determination of who will be interviewed.
210 PRINT "
220 PRINT "     A one-page resume, with sections easily identified, prepared
230 PRINT "     so there is some white space and the page doesn't look too
240 PRINT "     full or crowded, printed on a good quality paper...can catch
250 PRINT "     the eye and interest of the reader.  And isn't that what you
260 PRINT "     are trying to do?  Get your resume to stand out from all the
270 PRINT "     others?
280 PRINT "
290 PRINT "     When preparing a one-page, you must always include at mini-
300 PRINT "     mum, at least the following four categories, in order:
305 PRINT "
310 PRINT "          * OBJECTIVE * EDUCATION * EXPERIENCE * REFERENCES *
315 PRINT "
320 INPUT "      PRESS (RETURN) FOR NEXT PAGE OR (P) FOR PREVIOUS PAGE";Z$
330 CLS
340 IF Z$ = "P" THEN GOTO 10
350 PRINT "
360 PRINT "     These categories should be listed over to the left of the
370 PRINT "     page, capitalized and highlighted in bold if possible.  A
380 PRINT "     colon should be placed after each one and then text should
390 PRINT "     begin several spaces, lined up, to the right.  Name, address
400 PRINT "     and telephone should be centered at the top of the page,
405 PRINT "     with the names in all CAPS and preferably highlighted in bold.
410 PRINT "
411 INPUT "     PRESS (RETURN) FOR NEXT PAGE OR (P) FOR PREVIOUS PAGE";Z$
412 CLS
413 IF Z$ = "P" THEN GOTO 120
420 PRINT "                              NAME
430 PRINT "                             Address
440 PRINT "                          City State Zip
450 PRINT "                            Telephone #
460 PRINT "
465 PRINT "
470 PRINT "     OBJECTIVE:     To obtain a food service position, preferably
480 PRINT "                    in a full-time capacity, with an organization
490 PRINT "                    offering advancement opportunities.
500 PRINT "
510 PRINT "     EDUCATION:     High School Diploma
520 PRINT "                    AMERICAN HIGH SCHOOL, Seattle, WA
530 PRINT "
540 PRINT "     EXPERIENCE:    Waitress                    3/84 - Present
550 PRINT "                    THE GOURMET ROOM, Richmond Beach, WA
560 PRINT "                    Ensured positive clientele relations for the
570 PRINT "                    restaurant.  Provided customer assistance on
580 PRINT "                    selections and excellent food service.
590 PRINT "
600 PRINT "     REFERENCES:    Business and personal references are available
610 PRINT "                    upon request.
620 PRINT "
625 PRINT "
630 INPUT "     PRESS (RETURN) FOR NEXT PAGE OR (P) FOR PREVIOUS PAGE";Z$
640 CLS
650 IF Z$ = "P" THEN GOTO 350
660 PRINT "
670 PRINT "
680 PRINT "     Of course, you would want to space your resume out properly
690 PRINT "     on an 8-1/2 x 11 inch page.  I have merely condensed one and
700 PRINT "     made the entries small so you could see it all at once on
710 PRINT "     your screen.
720 PRINT "
730 PRINT "     If you want to print any of these samples out, merely depress
740 PRINT "     your Shift key and then your Prt Sc (*) key on your keyboard;
750 PRINT "     some models use the Prt Sc (*) key only.  This will send what-
760 PRINT "     ever is on your screen directly to your printer.
770 PRINT "
780 PRINT "     These are the four basic categories and the most important to
790 PRINT "     to include on a one-page.  However, if you have room, you can
800 PRINT "     add in other categories, under perhaps ADDITIONAL INFORMATION.
810 PRINT "     Whatever particular information you have in your background
820 PRINT "     that will show you in a positive light should be included on
830 PRINT "     the resume as long as the basic format/order is adhered to.
850 PRINT "     The resume should always begin with OBJECTIVE and end with
860 PRINT "     REFERENCES.  If a SUMMARY of SUMMARY OF QUALIFICATIONS section
870 PRINT "     is used, that follows the OBJECTIVE.  EDUCATION and/or EXPER-
880 PRINT "     IENCE can be flip-flopped; in other words, put whichever one
890 PRINT "     first puts you in the best light.  Following these 2 sections
990 PRINT "     you place any miscellaneous categories, closing with REFERENCES.
991 PRINT "
992 INPUT "     PRESS (RETURN) FOR NEXT PAGE OF (P) FOR PREVIOUS PAGE";Z$
993 CLS
994 IF Z$ = "P" THEN GOTO 420
1000 PRINT "
1010 PRINT "
1020 PRINT "     In conclusion, it is my opinion that whenever possible, you
1030 PRINT "     should do a one-page resume.  Some of the exceptions are:
1040 PRINT "
1050 PRINT "          You have 15+ years in the same field;
1060 PRINT "          You are going for a mid-level to top-level management
1070 PRINT "            position which requires extensive detail;
1080 PRINT "          You have numerous technical skills that need to be
1090 PRINT "            be defined in list form.
1100 PRINT "          Etc.!
1110 PRINT "
1120 PRINT "     I am sure you can make this determination yourself.  The
1130 PRINT "     common theme in going to a second page is when your back-
1140 PRINT "     ground is extensive and the salary compensation for the
1150 PRINT "     position is high; thus the second page is not only warranted,
1160 PRINT "     but will probably help you by providing the details.
1170 PRINT "
1180 PRINT "     To return to the main directory, merely type system after OK.
1190 PRINT "
```

## OUTLINE2.BAS

```bas
10 REM This is the Outline2 section.
20 PRINT "
30 PRINT "       *******************************************************
35 PRINT "
36 PRINT "
37 PRINT "
40 PRINT "          T W O
50 PRINT "
60 PRINT "                   P A G E
70 PRINT "
80 PRINT "                              O U T L I N E S !
90 PRINT "
91 PRINT "
92 PRINT "
93 PRINT "       *******************************************************
94 PRINT "
95 PRINT "
96 PRINT "
97 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
98 CLS
99 PRINT "
100 PRINT "
110 PRINT "     Please read the OUTLINE1 section if you have not already done
120 PRINT "     so.  After completing that section, return to this section to
130 PRINT "     see if you will be shown at your best advantage with a two-page
140 PRINT "     resume.
150 PRINT "
160 PRINT "     In most areas of the country, a one-page seems to be the most
170 PRINT "     preferable length, unless you meet one of the following condi-
180 PRINT "     tions:
190 PRINT "
200 PRINT "     You have 15 or more years of work experience in the same area;
210 PRINT "     You are seeking a mid- to upper-level management position;
220 PRINT "     You have extensive technical skills to be identified & listed.
230 PRINT "
240 PRINT "     If you fall into one of these three categories, then a two-page
250 PRINT "     resume will probably work to your advantage better than a one-
260 PRINT "     page.  A one-page resume, in your case, would probably be too
270 PRINT "     brief and not give the prospective employer enough information
280 PRINT "     about you and your background.  He or she will be willing to
290 PRINT "     read a second page considering your length or experience, type
300 PRINT "     of position seeking or technical skills.
310 PRINT "
320 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
330 CLS
340 PRINT "
350 PRINT "     A two-page resume follows the same basic format as a one page.
360 PRINT "     You will just be including more detail and/or perhaps some
370 PRINT "     additional categories.
380 PRINT "
390 PRINT "     The two-page resume still follows the order of the one page:
400 PRINT "
410 PRINT "     OBJECTIVE   *   EXPERIENCE * EDUCATION   *   REFERENCES
420 PRINT "
430 PRINT "     The experience/education can be flip-flopped as in the one-
440 PRINT "     page resume.
450 PRINT "
460 PRINT "     Again, refer to the one-page outline for a sample of how an
470 PRINT "     outline for your resume would look.  The following two screens
480 PRINT "     will show you an example of a layout of a typical page one and
490 PRINT "     page two of a two-page resume.
500 PRINT "
510 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
520 CLS
530 PRINT "
540 PRINT "                               NAME
550 PRINT "                              ADDRESS
560 PRINT "                          CITY, STATE, ZIP
570 PRINT "                              TELEPHONE
580 PRINT "
590 PRINT "     OBJECTIVE:        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
600 PRINT "                       XXXXXXXXXX.
610 PRINT "
620 PRINT "     SUMMARY OF        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
630 PRINT "     QUALIFICATIONS:   XXXXXXXXX
640 PRINT "
650 PRINT "                       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
660 PRINT "                       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
670 PRINT "
680 PRINT "     EDUCATION:        XXXXXXXXXXXXXXXXXXXXXXXXX
690 PRINT "                       XXXXXXXXXXXXXXXXXXXXXXXXXXXX
700 PRINT "
710 PRINT "                       XXXXXXXXXXXXXXXXXXX
720 PRINT "                       XXXXXXXXXXXXXXXXXXXXXXX
730 PRINT "                       XXXXXXXXXXXXXXXXXXXXXXXXXXX
740 PRINT "
750 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
760 CLS
770 PRINT "
780 PRINT "     JOHN D. SMITH
790 PRINT "     Page Two
800 PRINT "
810 PRINT "     EXPERIENCE:       XXXXXXXXXXXXXXX
820 PRINT "                       XXXXXXXXXXXXXXXXXXXXXXXX
830 PRINT "                       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
840 PRINT "                       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
850 PRINT "                       XXXXXXXXXXXXXXXXXXXXXXXX
860 PRINT "
870 PRINT "                       XXXXXXXXXXXXXXXXXX
880 PRINT "                       XXXXXXXXXXXXXXXXXXXXXXXXXXX
890 PRINT "                       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
900 PRINT "                       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
910 PRINT "
920 PRINT "     MILITARY:         XXXXXXXXXXXXXXXXXXXX
930 PRINT "                       XXXXXXXXXXXXXXXXXXXXXXXXXX
940 PRINT "
950 PRINT "     PROFESSIONAL      XXXXXXXXXXXXXXXXXXX
960 PRINT "     AFFILIATIONS:     XXXXXXXXXXXXXXXXXXXXXXX
970 PRINT "
980 PRINT "     REFERENCES:       XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
990 PRINT "                       XXXXXXXXXXXXXXXXXXXXXXXXXXXXX.
991 PRINT "
992 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
993 CLS
1000 PRINT "
1010 PRINT "     Of course, this is condensed and you would want to space it
1020 PRINT "     out attractively on 8-1/2 x 11 inch pages.  This is just to
1030 PRINT "     give you some idea of how a two-page resume would appear vs.
1040 PRINT "     a one-page resume.
1050 PRINT "
1060 PRINT "     Try not to break up your categories if possible between page
1070 PRINT "     one and two.  Also, keep in mind you still want your most
1080 PRINT "     important information to show on the first page if possible.
1090 PRINT "
1100 PRINT "     When handing out or distributing your resume, if you do not
1120 PRINT "     place your resume in any type of folder, be sure to staple
1130 PRINT "     the two pages together so they will not get separated.
1140 PRINT "
1150 PRINT "     (To return to directory type SYSTEM after the OK)
```

## README.BAS

```bas
10 REM This is the 1Readme section of ResumeBest by Connie Poloskey.
30 PRINT "     ***********************************************************
50 PRINT "     *    ▓▓▓▓▓   ▓▓▓▓▓▓  ▓▓▓▓    ▓     ▓    ▓   ▓   ▓▓▓▓▓▓    *
60 PRINT "     *    ▓    ▓  ▓       ▓   ▓   ▓     ▓   ▓ ▓ ▓ ▓  ▓         *
70 PRINT "     *    ▓   ▓   ▓        ▓      ▓     ▓   ▓  ▓  ▓  ▓         *
80 PRINT "     *    ▓▓▓▓    ▓▓▓▓      ▓▓    ▓     ▓   ▓     ▓  ▓▓▓▓      *
90 PRINT "     *    ▓   ▓   ▓       ▓   ▓   ▓     ▓   ▓     ▓  ▓         *
100 PRINT "     *    ▓    ▓  ▓▓▓▓▓▓   ▓▓▓▓    ▓▓▓▓▓    ▓     ▓  ▓▓▓▓▓▓    *
120 PRINT "     *                                                         *
130 PRINT "     *            ▒▒▒▒▒   ▒▒▒▒▒▒  ▒▒▒▒  ▒▒▒▒▒▒▒                *
140 PRINT "     *           ▒     ▒  ▒      ▒    ▒    ▒                   *
150 PRINT "     *           ▒    ▒   ▒      ▒         ▒                   *
160 PRINT "     *           ▒▒▒▒▒    ▒▒▒▒    ▒        ▒                   *
170 PRINT "     *           ▒    ▒   ▒        ▒▒      ▒                   *
180 PRINT "     *           ▒     ▒  ▒      ▒   ▒     ▒                   *
190 PRINT "     *           ▒▒▒▒▒▒   ▒▒▒▒▒▒  ▒▒▒▒     ▒    ▒  ▒  ▒        *
200 PRINT "     ***********************************************************
210 PRINT "     *                                                         *
220 PRINT "     *                         by                              *
230 PRINT "     *                  Connie A. Poloskey                     *
240 PRINT "     *        POLOSKEY & POLOSKEY: the Computer Tutors!        *
250 PRINT "     *                                                         *
260 PRINT "     ***********************************************************
270 PRINT "
275 PLAY "      CEGECFAFCEGECCC"
280 INPUT "          What is your name, please?";N$
290 CLS
300 PRINT "     ☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺
310 PRINT "     Hello, "N$; "!"
320 PRINT "     Thank you for selecting my program for your personal review.
330 PRINT "     ☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺
335 PRINT "
340 PRINT "     You will find this is a very complete package on 'HOW YOU DO
350 PRINT "     your own resume!'  THERE ARE FIFTEEN SEPARATE SECTIONS YOU CAN
360 PRINT "     access from the directory by using your GWBASIC disk.  You can
370 PRINT "     either use your GWBASIC disk in a separate drive or I have
380 PRINT "     left room on the disk that you can place your GWBASIC.EXE file
390 PRINT "     directly on this disk.
400 PRINT "
410 PRINT "     If you are using different drives, access each file by typing,
420 PRINT "     for example, A:GWBASIC B:NAMEOFFILE (if you have GWBASIC in
430 PRINT "     the A drawer and this disk in the B drawer.)  If you place
440 PRINT "     GWBASIC.EXE directly on this disk using your DOS copy command,
450 PRINT "     then at your prompt you merely type GWBASIC NAMEOFFILE>.  (The
460 PRINT "     > symbol stands for your return or enter key.)  It is a good
465 PRINT "     idea to type your answers IN ALL CAPS when in BASIC.
466 PRINT "
470 PRINT "     ╟╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╬╣
475 PRINT "
480 INPUT "       PRESS (RETURN) FOR NEXT PAGE OR (P) FOR PREVIOUS PAGE";Z$
490 CLS
500 IF Z$ = "P" THEN GOTO 10
520 PRINT "
530 PRINT "     The fifteen sections are as follows, with brief descriptions:
550 PRINT "     ***************************************************************
570 PRINT "     INTRO - This is general information on resume preparation, such
580 PRINT "             as one page versus two page, basic components, action
590 PRINT "             verbs, styles, format, etc.
600 PRINT "     OUTLINE1 - This is a sample one-page outline.
610 PRINT "     OUTLINE2 - This is a sample two-page outline.
620 PRINT "     OBJGEN - This area discusses how to properly identify and word
630 PRINT "              your objective section for a general resume.
640 PRINT "     OBJSPEC - This area discusses how to properly identify and word
650 PRINT "                your objective section for a targeted resume.
660 PRINT "     SUMMARY - This section discusses a very important area of your
670 PRINT "               resume called summary or summary of qualifications.
680 PRINT "     EDUC - Your education and training background are appropriate
690 PRINT "            and discussed for this section.
700 PRINT "     EXPER - Background experience and how to properly present it,
710 PRINT "             with several different options, is detailed here.
720 PRINT "     ADDINFO - This is a catch-all section of your resume where we
730 PRINT "               can put our personal or miscellaneous categories such
740 PRINT "               as military, salary, civic activities, professional
750 PRINT "               affiliations: lumped as one or done separately.
760 PRINT "
770 INPUT "     PRESS (RETURN) FOR NEXT PAGE OR (P) FOR PREVIOUS PAGE";Z$
780 CLS
790 IF Z$ = "P" THEN GOTO 310
800 PRINT "
900 PRINT "     REFER - This is the section where you will discuss personal
910 PRINT "             and/or business-professional references.
920 PRINT "     COVSHT - We will detail how to do a cover sheet for your resume.
930 PRINT "     COVLTR - An introductory or cover letter will be discussed here,
940 PRINT "              with examples of general and specific.
950 PRINT "     REFSHT - How to prepare a separate sheet of references will be
960 PRINT "              detailed here.
970 PRINT "     THANKS - How to determine and prepare an interview thank you
980 PRINT "              letter.
990 PRINT "     MAILTIPS - Hints for proper mailing of your resume package.
992 PRINT "
995 PRINT "     ***************************************************************
996 PRINT "
997 INPUT "     PRESS (RETURN) FOR NEXT PAGE OR (P) FOR PREVIOUS PAGE";Z$
998 IF Z$ = "P" THEN GOTO 520
999 CLS
1000 PRINT "
1020 PRINT "     ☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼ ☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺ ☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼
1050 PRINT "     I am sure you will find this resume disk extremely helpful,
1060 PRINT "     either in the preparation of your own personal resume or if
1070 PRINT "     you are considering opening a resume service for others.
1080 PRINT "     I have taken five years of extensive resume experience, having
1090 PRINT "     personally prepared in excess of 5,000 resumes, and put that
1100 PRINT "     knowledge and expertise into this disk.  I have had numerous
1110 PRINT "     reports and compliments over the years that people felt like
1120 PRINT "     the resume I prepared for them was a key factor in their job
1130 PRINT "     hunting success and offers.  Indeed, my service functioned on
1140 PRINT "     a 70% repeat/referral factor on resumes!
1150 PRINT "
1160 PRINT "     If you enjoy this disk, please register with me, and for only
1170 PRINT "     $29.95, you will receive the following:
1190 PRINT "     A Resume Paper Packet (8 different colors of both parchment
1200 PRINT "     and linen papers, highly recommended for your resume copies);
1220 PRINT "     Future updates of ResumeBest free of charge!
1240 PRINT "     A free copy of one of my DISK OF THE MONTH disks, which is
1250 PRINT "     8-12 programs I have selected and combined for your PC use.
1260 PRINT "     ☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺
1270 PRINT "
1280 INPUT "     PRESS (RETURN) FOR NEXT PAGE OR (P) FOR PREVIOUS PAGE";Z$
1290 CLS
1300 IF Z$ = "P" THEN GOTO 900
1320 PRINT "     Send check or money order to:
1340 PRINT "
1350 PRINT "     Connie Poloskey
1360 PRINT "     5336 Hillsboro Lane
1370 PRINT "     Las Vegas, NV 89120
1380 PRINT "     Telephone: (702) 458-4835
1390 PRINT "
1400 PRINT "     YES!  ENCLOSED IS MY $29.95.  PLEASE RUSH ME YOUR PACKET
1410 PRINT "     OF RESUME PAPER, REGISTER ME FOR FUTURE UPDATES AND SEND
1420 PRINT "     MY FREE DISK OF THE MONTH!  SEND TO:
1440 PRINT "     Name:
1450 PRINT "
1460 PRINT "     Address:
1470 PRINT "
1480 PRINT "     City, State, Zip:
1490 PRINT "
1500 PRINT "     Telephone:
1510 PRINT "
1520 PRINT "     Comments (if any)????
1530 PRINT "
1540 PRINT "     THANK YOU...AND HAPPY RESUME!
1550 PRINT "     ( to return to directory, type SYSTEM> after the OK)
```

## REFER.BAS

```bas
10 REM This is the refer section.
20 PRINT "     ☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺
25 PRINT "
30 PLAY "EDCEDCEDCFEDFEDFEDEDCEDCEDCCCC"
40 PRINT "                    R E F E R E N C E
50 PRINT "
60 PRINT "                      S E C T I O N
70 PRINT "
80 PRINT "                           O F
90 PRINT "
91 PRINT "                         Y O U R
92 PRINT "
93 PRINT "                        R E S U M E
94 PRINT "
95 PRINT "     ☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺☺
96 PRINT "
97 PRINT "
98 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
99 CLS
100 PRINT "
110 PRINT "     **************************************************************
120 PRINT "
130 PRINT "     Your one or two page resume should always close with the
140 PRINT "     Reference section.  In this category, references should be
150 PRINT "     offered to the prospective employer.
160 PRINT "
170 PRINT "     You can list personal and/or business references by name
180 PRINT "     and contact point here, but it is usually recommended that
190 PRINT "     you merely state they are available and list your references
200 PRINT "     on a separate sheet, to be handed out at interview time.  If
210 PRINT "     your references are listed right on your resume, then every
220 PRINT "     time you are handing your resume out, these people may be
230 PRINT "     called.  This can become irritating for them to be receiving
240 PRINT "     multiple calls and perhaps for jobs you aren't being seriously
250 PRINT "     considered for or you don't want.  (See the REFSHT of this
260 PRINT "     disk for more information on your separate sheet preparation).
270 PRINT "
280 PRINT "     The reference section can be worded in several different ways.
290 PRINT "     The most important idea to get across is that you do have
300 PRINT "     references and you are ready and willing to supply them.
310 PRINT "
320 PRINT "     ***************************************************************
330 PRINT "
340 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
350 CLS
360 PRINT "
370 PRINT "     You may use any of the examples shown below:
380 PRINT "
390 PRINT "     REFERENCES:     Available upon request.
400 PRINT "
410 PRINT "     REFERENCES:     Furnished upon request.
420 PRINT "
430 PRINT "     REFERENCES:     Business and personal references are available
440 PRINT "                     upon request.
450 PRINT "
460 PRINT "     REFERENCES:     Professional and personal references are avail-
470 PRINT "                     able upon request.
480 PRINT "
490 PRINT "     REFERENCES:     Business and personal references, as well as
500 PRINT "                     written letters of recommendation, are avail-
510 PRINT "                     able upon request.
520 PRINT "
530 PRINT "     REFERENCES:     Written references are available on request.
540 PRINT "
550 PRINT "     Select one that fits you best.  Be sure that you have 3 per-
560 PRINT "     sonal and 3 business names either written down or in your
570 PRINT "     memory.  See REFSHT section of this disk for more information.
600 PRINT "     (To return to directory type SYSTEM after the OK)
```

## REFSHT.BAS

```bas
10 REM This is the refsht section.
20 PRINT "
40 PRINT "          R
41 PRINT "           E
42 PRINT "            F
43 PRINT "             E
44 PRINT "              R
45 PRINT "               E
46 PRINT "                N
47 PRINT "                 C
48 PRINT "                  E
49 PRINT "
50 PRINT "                     S
51 PRINT "                      H
52 PRINT "                       E
53 PRINT "                        E
54 PRINT "                         T
57 PRINT "                                is it necessary?
58 PRINT "                                business and/or personal names?
59 PRINT "                                how many of each?
60 PRINT "                                how is it set up?
61 PRINT "                                how do I hand it out?
62 INPUT "     PUSH RETURN/ENTER KEY...";Z$
90 CLS
100 PRINT "
110 PRINT "   In answer to the five most commonly asked questions concerning
120 PRINT "   a reference sheet:
130 PRINT "        No, it is not absolutely necessary.
140 PRINT "        You should use both business and personal references.
150 PRINT "        Use 3 of each---3 business---3 personal.
160 PRINT "        It is set up on a separate page from the resume.
170 PRINT "        It is best to hand out at interview time only.
180 PRINT "
190 PRINT "   ***************************************************************
200 PRINT "
210 PRINT "                         D E T A I L S !
220 PRINT "
230 PRINT "   It is not a necessity to have a printed reference sheet.  The
240 PRINT "   resume itself usually states that references are available upon
250 PRINT "   request and when asked, your references can be provided to the
260 PRINT "   individual verbally or written on their application form.  How-
270 PRINT "   ever, it is both convenient and professional to have the refer-
280 PRINT "   ences already written down, ready to hand the personnel depart-
290 PRINT "   ment or interviewer upon request.
300 PRINT "
310 INPUT "   PUSH RETURN OR ENTER KEY...";Z$
320 CLS
330 PRINT "
340 PRINT "     It is best to provide both business and personal references.
350 PRINT "     Business references should be past or current supervisors or
360 PRINT "     can be other types of people you have worked with such as
370 PRINT "     customers, vendors or even fellow employees.  Personal refer-
380 PRINT "     ences are people who will vouch for your character.  They
390 PRINT "     should not be relatives and preferably should be people you
400 PRINT "     have known for some time and live in the area you are applying
410 PRINT "     for work in.  Be sure and contact the people you are using on
420 PRINT "     your reference sheet prior to typing up and handing the sheet
430 PRINT "     out.  This both asks their permission for their name to be
440 PRINT "     used and prepares them for any possible calls.
450 PRINT "
460 PRINT "     You should provide three names of each or a total of six
470 PRINT "     references.
480 PRINT "
490 PRINT "     The page should be set up attractively, with  your name and
500 PRINT "     address centered at the top and REFERENCES centered below.
510 PRINT "     The person's name should be listed and a contact address and
520 PRINT "     telephone number.  You can also separate the two types by
530 PRINT "     doing a centered heading BUSINESS and one called PERSONAL.
540 PRINT "     You should also identify the business references by their
550 PRINT "     company name and title.
560 PRINT "
570 INPUT "     PUSH RETURN OR ENTER KEY...";Z$
580 CLS
590 PRINT "
600 PRINT "     It should be handed out usually at interview time only.  You
610 PRINT "     do not want to give it out with every resume as you don't
620 PRINT "     want a lot of people calling and bothering your references,
630 PRINT "     for jobs you may not even want.  You want them ready and
640 PRINT "     willing to give you an excellent reference when the right
650 PRINT "     job comes along.  The only exception to this is if you are
660 PRINT "     answering a blind ad in the newspaper, you don't know who
670 PRINT "     the company is and no other details, except the job sounds
680 PRINT "     good and they ask you to include references...then go ahead.
690 PRINT "
700 PRINT "     It goes without saying that you want to select the people
710 PRINT "     who will without question give you a top recommenda-
720 PRINT "     tion.  If you know a few big names around town and obtain
730 PRINT "     their permission to use them as references, don't hesitate
740 PRINT "     to do so!
750 PRINT "
760 PRINT "     The next screen will show you a condensed example of how a
770 PRINT "     reference sheet should be set up.  You should space yours
780 PRINT "     out attractively over an 8-1/2 x 11 inch page.
790 PRINT "
800 INPUT "     PRESS YOUR RETURN OR ENTER KEY...";Z$
810 CLS
820 PRINT "
830 PRINT "                                  NAME
840 PRINT "                              STREET ADDRESS
850 PRINT "                              CITY STATE ZIP
860 PRINT "                               TELEPHONE #
870 PRINT "
880 PRINT "                                REFERENCES:
890 PRINT "                                 Business:
900 PRINT "
910 PRINT "                            Full Name and Title
920 PRINT "                            Company Name
930 PRINT "                            Telephone Number
940 PRINT "
950 PRINT "                            (do 2nd & 3rd names)
970 PRINT "
980 PRINT "                                 Personal:
990 PRINT "
991 PRINT "                                 Full Name
992 PRINT "                                 City, State
993 PRINT "                                  Telephone
994 PRINT "
995 PRINT "                             (do 2nd & 3rd names)
996 PRINT "
997 PRINT "     (Type SYSTEM to return to prompt after the OK)
```

## SUMMARY.BAS

```bas
10 REM  This is the Summary Section of the Resume by C. Poloskey
20 PRINT "
21 PRINT "
22 PRINT "          ▓▓▓    ▓  ▓     ▓   ▓     ▓   ▓     ▓     ▓▓▓▓     ▓   ▓
23 PRINT "         ▓   ▓   ▓  ▓    ▓ ▓ ▓ ▓   ▓ ▓ ▓ ▓   ▓ ▓    ▓   ▓     ▓ ▓
24 PRINT "          ▓▓     ▓  ▓   ▓   ▓   ▓ ▓   ▓   ▓ ▓▓▓▓▓   ▓▓▓▓       ▓
25 PRINT "            ▓    ▓  ▓   ▓       ▓ ▓       ▓ ▓   ▓   ▓   ▓      ▓
26 PRINT "         ▓   ▓   ▓  ▓   ▓       ▓ ▓       ▓ ▓   ▓   ▓    ▓     ▓
27 PRINT "          ▓▓▓     ▓▓    ▓       ▓ ▓       ▓ ▓   ▓   ▓     ▓    ▓
28 PRINT "         ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
29 PRINT "
30 PRINT "
40 PRINT "
50 PRINT "         THIS SECTION ALWAYS FOLLOWS YOUR OBJECTIVE...IT IS ALWAYS
60 PRINT "         THE SECOND SECTION ON YOUR RESUME.  I PERSONALLY FEEL IT
70 PRINT "         IS THE MOST IMPORTANT SECTION OF THE RESUME!!!
80 PRINT "
90 PRINT "
95 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
96 CLS
100 PRINT "
110 PRINT "    ▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
120 PRINT "
130 PRINT "    This section can be called by several different names:
140 PRINT "
150 PRINT "          SUMMARY OF QUALIFICATIONS
160 PRINT "          PRESENTATION OF QUALIFICATIONS
170 PRINT "          SUMMARY
180 PRINT "          SYNOPSIS
190 PRINT "          SPECIAL SKILLS
200 PRINT "
210 PRINT "    This section should be used to briefly condense your back-
220 PRINT "    ground and a few character traits.  You should spend more
230 PRINT "    time on this section than any other area of your resume as
240 PRINT "    when the prospective employer reads this section, it will
250 PRINT "    either interest him enough to read on or perhaps place it
260 PRINT "    immediately in the interview stack, or...he will toss it in
270 PRINT "    the round file--the wastebasket!
280 PRINT "
290 PRINT "    ▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
300 PRINT "
310 INPUT "    PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
320 CLS
330 PRINT "
340 PRINT "     Some of the information that can be placed in this section
350 PRINT "     includes:
360 PRINT "
370 PRINT "     Number of years of experience within a certain field;
380 PRINT "     A list of your areas of expertise;
390 PRINT "     Special skills, such as typing and shorthand speed;
400 PRINT "     Positive character traits;
410 PRINT "     Special honors, awards, certificates and/or achievements.
420 PRINT "
430 PRINT "     Rather than go into a lot of detail, let me show you some
440 PRINT "     examples on the next few screens that I feel will completely
450 PRINT "     clarify this section for you and assist you greatly in
460 PRINT "     composing your own personal SUMMARY or SUMMARY OF QUALIFICA-
470 PRINT "     TIONS SECTION...
480 PRINT "
490 PRINT "
500 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
510 CLS
520 PRINT "
530 PRINT "     SUMMARY OF          20+ years of successful work history in
540 PRINT "     QUALIFICATIONS:     management capacities, supervising both
550 PRINT "                         daily operations of multiple departments
560 PRINT "                         and staffs of up to 23 employees.
570 PRINT "
580 PRINT "                         Extensive personnel experience, including
590 PRINT "                         hiring/firing, training, scheduling and
600 PRINT "                         evaluating.  Personally created and imple-
610 PRINT "                         mented new policies and procedures manual
620 PRINT "                         used nationwide in major corporation.
630 PRINT "
640 PRINT "                         Excellent communication skills, both verbal
650 PRINT "                         and written.  Able to deal effectively with
660 PRINT "                         all levels of individuals.  Proven ability
670 PRINT "                         to motivate others to achieve assigned goals
680 PRINT "                         or desired results.
690 PRINT "
700 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
710 CLS
720 PRINT "
730 PRINT "     SUMMARY:     Areas of expertise include:
740 PRINT "                  Office Administration;
750 PRINT "                  Computer input, updates and retrievals;
760 PRINT "                  Clerical functions (typing, filing, telephones).
770 PRINT "
780 PRINT "                  Excellent work skills and office equipment
790 PRINT "                  familiarity:
800 PRINT "                  Typing Speed - 100+ words per minute;
810 PRINT "                  Shorthand Speed - 80+ words per minute;
820 PRINT "                  Hands on experience with multi-line telephone
830 PRINT "                  systems, photocopiers, facsimiles, typewriters
840 PRINT "                  and computers (emphasis on IBM PC).  Gained
850 PRINT "                  knowledge of multiple word processing programs
860 PRINT "                  as well as Lotus 1-2-3 and dBaseIII.
870 PRINT "
880 PRINT "     SPECIAL     Extensive hands on experience in the following
890 PRINT "     SKILLS:     areas:
900 PRINT "                 Carpentry;
910 PRINT "                 Electrical;
920 PRINT "                 Plumbing.
930 PRINT "                 Also experienced as Foreman, supervising crews of
940 PRINT "                 up to 39 individuals.
950 PRINT "
960 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
970 CLS
1000 PRINT
1010 PRINT "
1020 PRINT "     SUMMARY OF       15 years of expertise gained in the field of
1030 PRINT "     QUALIFICATIONS:  construction, with 10+ years of experience
1040 PRINT "                      functioning in supervisory capacities.
1050 PRINT "
1060 PRINT "                      Extremely hardworking and dependable indi-
1070 PRINT "                      vidual.  Definitely self-motivated and
1080 PRINT "                      able to function well independently.
1090 PRINT "                      Extensive expertise working in liaison
1100 PRINT "                      assignments, dealing with contractors, sub-
1110 PRINT "                      contractors, owners, employees and the public.
1120 PRINT "
1130 PRINT "
1140 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
1150 CLS
1160 PRINT "
1170 PRINT "     **************************************************************
1180 PRINT "
1190 PRINT "     I am sure you can see by the examples what this section can
1200 PRINT "     do for you.  It can capture the reader's interest immediately
1210 PRINT "     and when they have a stack of resumes to look at and don't
1220 PRINT "     want to read them all, it can get yours put in the interview
1230 PRINT "     pile merely by concisely and briefly stating your background
1240 PRINT "     for the prospective employer.
1250 PRINT "
1260 PRINT "     I always recommend this section on a two-page resume and
1270 PRINT "     whenever possible, on a one-page also.
1280 PRINT "
1290 PRINT "     ***************************************************************
1295 PRINT "
1296 PRINT "     (To return to your main directory, type SYSTEM after the OK)
```

## THANKS.BAS

```bas
10 REM This is the thanks section.
20 PRINT "
22 PRINT "
24 PRINT "
30 PRINT "     █████████  █      █        █       █     █  █     █    ███
31 PRINT "         █      █      █       █ █     █ █    █  █    █    █   █
32 PRINT "         █      █      █      █   █    █  █   █  █   █     █
33 PRINT "         █      ████████     ███████   █   █  █  ████       ███
34 PRINT "         █      █      █     █     █   █    █ █  █   █         █
35 PRINT "         █      █      █     █     █   █     ██  █    █    █  █
36 PRINT "         █      █      █     █     █   █     ██  █     █    ██
37 PRINT "
38 PRINT "     ██████████████████████████████████████████████████████████████
39 PRINT "
40 PRINT "
50 PRINT "
60 PRINT "     Something that is not said often enough as a follow-up to an
70 PRINT "     interview...and just may make the difference between you get-
80 PRINT "     ting the job instead of another candidate!
90 PRINT "
93 PRINT "
94 PRINT "
95 INPUT "     PRESS THE RETURN OR ENTER KEY TO CONTINUE...";Z$
97 CLS
100 PRINT "
110 PRINT "     ☺☺☺☺☺☺☺☺☺☺     ☺☺☺☺☺☺☺☺☺☺     ☺☺☺☺☺☺☺☺☺☺     ☺☺☺☺☺☺☺☺☺☺
130 PRINT "     In my years of experience, I could count on both my
140 PRINT "     hands how many interview thank you letters I have done
150 PRINT "     for my clientele.  When those thank you letters were
160 PRINT "     done, my feedback was that the prospective candidate got
170 PRINT "     the job!  Now I am not saying if you do a thank you letter
180 PRINT "     for an interview, you will get the position.  Of course
190 PRINT "     other factors enter into the picture such as your qualifi-
200 PRINT "     cations, personal appearance, etc.  What I am saying is
210 PRINT "     that an interview thank you letter may make the difference
220 PRINT "     between you and another candidate getting the job if it is
230 PRINT "     a close decision and/or may just bring you to mind at
240 PRINT "     exactly the right moment--when the prospective employer is
250 PRINT "     trying to make his decision!  A thank you letter is an
260 PRINT "     extremely classy, polite and business-like way of keeping
270 PRINT "     your name in front of the interviewer as well as letting
280 PRINT "     him know, in writing, you appreciate his/her time and
290 PRINT "     efforts AND...that you are still interested in the position.
310 PRINT "     ☺☺☺☺☺          ☺☺☺☺☺          ☺☺☺☺☺          ☺☺☺☺☺
320 PRINT "
330 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
340 CLS
350 PRINT "
360 PRINT "     *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
370 PRINT "
380 PRINT "     The following is a  condensed version of a recommended thank
390 PRINT "     you letter.  Use your Shift/Prt Sc to send this example to the
400 PRINT "     printer; retype it into your word processor.  It is imperative
410 PRINT "     to spell the interviewer's name correctly and make no other
420 PRINT "     errors in the letter.
421 PRINT "
422 PRINT "     It is also recommended that you mail the thank you letter to
423 PRINT "     to the interviewer within 1-3 days following the interview,
424 PRINT "     if you have been informed that it will be a quick decision.
425 PRINT "     If you are informed that a decision won't be reached until
426 PRINT "     some other date in the future, try to time the arrival of your
427 PRINT "     thank you letter with the time period of the decision.
428 PRINT "
429 PRINT "     *** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***
430 PRINT "
440 INPUT "     PRESS YOUR RETURN OR ENTER KEY TO CONTINUE...";Z$
445 CLS
446 PRINT "
447 PRINT "
450 PRINT "      Date
460 PRINT "
470 PRINT "                                        Your Name
480 PRINT "                                        Your Address
490 PRINT "                                        City State Zip
500 PRINT "                                        Your Phone No.
520 PRINT "     Interviewer's Name
530 PRINT "     Company Name
540 PRINT "     Address
550 PRINT "     City State Zip
560 PRINT "
570 PRINT "     Dear Name:
580 PRINT "
590 PRINT "     This is just a brief letter to thank you for the time you
600 PRINT "     spent with me last Thursday.  I am still very interested in
610 PRINT "     this position with your company and look forward to hearing
620 PRINT "     from you regarding your decision.
630 PRINT "
640 PRINT "     Again, thank you for the time and consideration shown to me.
650 PRINT "
680 PRINT "     (To return to main directly, type SYSTEM after the OK)
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1097

     Volume in drive A has no label
     Directory of A:\

    FORM     CFG       186   3-30-89   3:04a
    FORM     COL      1817   3-30-89   3:04a
    FORM     DOC     32400   3-30-89   3:04a
    FORM     EXE     92446   3-30-89   3:04a
    FORM     HLP     17933   3-30-89   3:04a
    FORM     OVL      1896   3-30-89   3:04a
    B&W      BAT        23   3-30-89   3:04a
    COLOR    BAT        25   3-30-89   3:04a
    COMPAQ   BAT        26   3-30-89   3:04a
    MANUAL   BAT       123   3-30-89   3:04a
    MONO     BAT        24   3-30-89   3:04a
    B&W      CFG       186   3-30-89   3:04a
    COLOR    CFG       186   3-30-89   3:04a
    COMPAQ   CFG       186   3-30-89   3:04a
    MONO     CFG       186   3-30-89   3:04a
    BBS-DIST DOC      1863   3-30-89   3:04a
    UPGRADE  DOC      9396   3-30-89   3:04a
    CHARS    FRM      2449   3-30-89   3:04a
    CREDIT   FRM      4661   3-30-89   3:04a
    DESIGN   FRM      1896   3-30-89   3:04a
    EXPENSE  FRM      4345   3-30-89   3:04a
    INSERTIO FRM      4582   3-30-89   3:04a
    MAP      FRM      1738   3-30-89   3:04a
    MESSAGE  FRM      4661   3-30-89   3:04a
    FILE1097 TXT      4869   5-25-89  12:36p
    REF      FRM      4503   3-30-89   3:04a
    REG      FRM      4740   3-30-89   3:04a
    SCREEN   FRM      1501   3-30-89   3:04a
    WO       FRM      4661   3-30-89   3:04a
    BBS-DESC TXT       891   3-30-89   3:04a
    FILES    TXT      2836   3-30-89   3:04a
    READ     ME       1053   3-30-89   3:04a
    GO       TXT      1156   2-17-89  10:45a
    GO       BAT        38  10-19-87   3:56p
    ADDINFO  BAS     11385   3-10-88   1:23p
    COVLTR   BAS      5391   3-22-88   3:17p
    COVSHT   BAS      4267   3-07-88   1:37p
    EDUC     BAS      5189   3-22-88   1:24p
    EXPER    BAS     11678   3-23-88   8:55a
    INTRO    BAS     12019   3-22-88   9:30a
    MAILTIPS BAS      5729   3-07-88  10:09a
    OBJGEN   BAS      5093   3-14-88  10:03a
    OBJSPEC  BAS      4278   3-22-88  10:41a
    OUTLINE1 BAS      6078   3-03-88   8:47a
    OUTLINE2 BAS      5279   3-14-88  10:29a
    README   BAS      7628  12-27-88   9:14a
    REFER    BAS      2948   3-09-88  11:41a
    REFSHT   BAS      5414   3-22-88   2:36p
    SUMMARY  BAS      6556   3-22-88   8:12a
    THANKS   BAS      4201   3-07-88  12:47p
           50 file(s)     312615 bytes
                           19456 bytes free
