---
layout: page
title: "PC-SIG Diskette Library (Disk #1181)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1181/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1181"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FOUR PROGRAMS FOR WRITERS"

    BASIC ENGLISH can tell you how many words in your poem or prose are on
    the magic list of 850 words scholars agree are simple and most
    understandable to the average reader.  The program can flag words
    excluded from the magic list and is valuable for technical writers.
    File Descriptions:
    
    -------- ---  BASIC ENGLISH.
    BE       EXE  The main program for BASIC ENGLISH.
    BE       DF   The main data file.
    BE       DOC  Documentation for BASIC ENGLISH.
    BASMAN   BAT  Batch file to copy documentation to your printer.
    
    Roses are red, violets are blue, POETEASE will rhyme most anything for
    you!
    
    POETEASE generates rhyming, consonant or assonant endings for poetry.
    One drawback: the program matches spelling only.  Hence, POETEASE will
    not list `liar' as a rhyme word for `buyer.'
    File Descriptions:
    
    -------- ---  POETEASE.
    POETDOC  BAT  Batch file to copy documentation to your printer.
    PZ       EXE  The main program for POETEASE.
    INITS         Data file.
    ENDS          Data file.
    VOWELS        Data file.
    POETEASE DOC  Text documentation for POETEASE.
    
    Writers -- Analyze your writing style.  Step back and take a cool look
    at how you do it.
    
    STYLED and STYLIST chart word and letter patterns in ASCII text files to
    help you revise, analyze and compare your writing style.  The programs
    only work with ASCII text files, but included on this disk is a utility
    program that converts any non-ASCII text file into ASCII format (this
    includes documents).
    
    These two programs can save you time in your revisions and help improve
    your writing style.  STYLED analyzes each text for word length,
    punctuation, syntax or nominalization.  You can view a text file without
    leaving the program, and you can shell to DOS. STYLLIST does the same
    thing as STYLED, except that it records your long words, forms of ``to
    be,'' and potential nominalizations in a disk file.
    File Descriptions:
    
    AUTOEXEC BAT  Start-up batch file.
    STUDNESE TXT  Sample text file.
    STPAUL   TXT  Sample text file.
    REVTEACH TXT  Sample text file.
    REVSTUD  TXT  Sample text file.
    UNWS     EXE  ASCII utility.
    UNWS     DOC  Documentation for UNWS.EXE.
    TEACHESE TXT  Sample text file.
    
    INVENT helps you create beautiful metaphors from words that you supply
    to the program.  You enter up to 40 words into each of the these
    categories, nouns, verbs, adjectives and adverbs and then let the
    program do the work.
    
    The program then generates sentences, which you may use in your
    wrighting endeavors, quickly one screen full at a time.  You can request
    as many re-scramblings of the same data as you like.
    
    FILE DESCRIPTIONS
    INVENT   EXE  Main program.
    INVENT   DOC  Program documentation.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADMINESE.TXT

{% raw %}
```
     Implicit in what has been suggested above is the fact that the 
Department needs significantly to increase its expectations and its 
requirements.  Both sections of the Graduate Division now have completed the 
pioneering phase of their programs.  The programs are well established.  A 
satisfactory international recognition for the programs has been achieved.  
The time now has come to build upon the initial successes of the 
Department's postgraduate program.  During the forthcoming triennium, 
postgraduate coursework within the Department must be made more complex.  
Students must be required to operate at more sophisticated--at genuinely 
international--levels of commitment and skill.
```
{% endraw %}

## BE.DOC

{% raw %}
```
                               BASIC ENGLISH

                                  (BE.EXE)

                                Version 1.0


                          (c) 1988 By Louie Crew

BASIC ENGLISH analyzes your text and reports how many words are in BASIC
English.  Optionally, it creates a new copy of your text, flagging the
words not BASIC.


                                   Syntax

At the MS-DOS command line, enter:

                           BE <filename>[*]

For <filename> substitute the name of the file which you wish to analyze.
Add the asterisk if you desire the flagged copy of your file.  Without the
*, the program will merely report statistics.

Note:  If you choose the flagged report, it automatically appears as a new
file called R.BE.   Save that file under another name to avoid having
BE.EXE overwrite it the next time that you use the program.

                          BASIC according to whom?

Early in the Twentieth Century many scholars around the world rallied to
support BASIC ENGLISH as a convenient vehicle for international
communication.  BASIC ENGLISH was comprised of a list of 850 words which,
they argued, allow anyone to say almost anything.  (See C. K. Ogden, The
System of Basic English.   New York: Harcourt Brace and Company, 1934.)

Although few foreigners learn the minimal 850, the list still provides a
good guide for simplicity and accessibility for those who write for
readers who use English as a second language, as well as for younger native
speakers.   Technical writers, for example, might want to restrict the
stock of additional words to those which are specific to the technology,
and they might try to describe the new words in terms from the 850.


                                Requirements

BASIC ENGLISH should work with MS-DOS 2.0+, but I have tested it only on
MS-DOS 3.3.

BASIC ENGLISH requires ASCII text.  If you use WordStar or any other word-
processor which adds high-bit characters to your text, you will have to
strip those high-bits, as with UNWS.EXE, CLEAN.COM and various other
programs in the public domain.  WordStar versions 4.0+ allow you to strip
any text file if you select  ASCII as the printer when you print it.  It
prints a new version of your text to a disk file called ASCII.WS.  See your
manual.

BASIC ENGLISH requires the following files:

          BE.EXE    The main program
          BE.DF     The main data file

BE.DF must be on the logged subdirectory.  BE.EXE may be anywhere in the
path.  Do not ever alter the format of BE.DF   It contains all of 850 words
of BASIC English formatted as BE.EXE requires.  If you wish to see them in
a more conventional format, you may TYPE them at the MS-DOS command, of
copy the file into a file with another name, to edit.



                                Limitations

Those who promote BASIC English never intend to restrict users to the one
inflection in the list of 850.   Given the irregularities of English
spelling, with about 97 percent accuracy, BE.EXE accommodates the most
common suffixes: ing, ings, ied, ed, er, ers, ies, es, s.   Hence, BE.EXE
will treat "comes" as BASIC, although only "come" appears in the list.


                                  Shareware

BASIC ENGLISH is copyrighted shareware.  You may give it away, but you may 
not sell it.  If you use it after examining it, you are expected to 
contribute $5 to

                         Louie Crew
                         P. O. Box 64839
                         Chicago, IL 60664-0839
                         
                         
           Other MS-DOS(2.1+) Shareware Available from Louie Crew

                All programs come with manuals on the disks.

ADDRESS    A program to manage addresses.  It processes people by up
           to ten categories, which the user specifies. It also sorts by
           zip codes and by birthdays.   It prints lists and envelopes,
           the latter with or without your return address.
           It includes RAMADD.EXE, a program in RAM which reports any
           address you need while doing other tasks. (Contribute $5)

APPLY      A program which monitors applications (for jobs, grants,
           contests....),  for the applicant. It stores the relevant
           data and merges it with text files which you create.  It allows you
           to edit your text for fine changes. It orders dossiers and prints
           your letters, resumes, and envelopes.  APPLY reviews any past
           experience you may have had with the person/institution before
           you try again. (Contribute $10)

CANTONES   A program to help you learn to speak Cantonese.
           An earlier version, "MailMerge Cantonese," won
           best-article-of-1985 by the Hong Kong Computer Society,
           reprinted in the Journal of the Chinese Language Teachers'
           Association, May 1986.  (Contribute $10)

HIRE       A program which monitors applications (for jobs,
           grants, contests....), for the employer or granting
           institution.  It stores the relevant data and merges it
           with text files which you create.  It allows you to edit
           your text for fine changes. It writes acknowledgments, alerts
           when support documents have not arrived, and writes rejections.
           It lets you code the applicants and clone special lists, for
           printouts to your committee or for private reference.
           It prints your letters and envelopes.  HIRE does the busy work.
           It lets you respond professionally to everyone and frees time for
           you to identify the best applicants.  (Contribute $10)

MUSES      A program which codes publishers; prints and circulates
           manuscripts; queries; catalogs publications; prepares
           bibliographies; tallies.....  (2 disks)  (Contribute $20)

MYLOG      Documents how you use your computer.  MYLOG works best as a
           command within batch files.  It adds logs to a file call LOGGED
           on your root directory.  It lists the log either to screen
           or to a disk file, and may list the logs for any one project,
           or for all projects in the log.  MYLOG computes the time you spent
           on each log-in and for all log-ins reported.  (Contribute $5)

POETEASE   A program which asks you to specify phonetic spelling and then
           quickly generates lists which match according to:

                            1=Assonance
                            2=Consonance
                            3=Rhyme

           POETEASE requires only 34k.  It is easy to SHELL to it from most
           word-processors, choose the rhyming word or assonant word...that
           you want, and return immediately to your composition.

           Pronounce it `poet ease,' `poet tease,' or `poetese':   your
           skill determines the quality of its service.  (Contribute $5)

PRINTASC   A program which installs two printers and accesses their special
           codes (such as proportional spacing); prints envelopes using the
           address typed only once, in the letters themselves; lets you
           specify headers, footers, etc. at print time, recognizes several
           WordStar dot commands; keeps up with two of your names, two of
           your addresses; facilitates indexing... Requires ASCII text, but
           shares another public-domain program to let you convert
           speedily.  (Contribute $5)

STYLED     Two programs which monitor prose and measure several
           dimensions of style.  One graphs and lists to the
           screen; another reports to disk files which you can use when
           you  edit.  STYLED monitors sentence length, word length,
           punctuation, syntax, weak verbs, and nominalization.  (Contribute 
           $10)


             Copy freely.  Do not sell.  If you use, contribute.


                                 Louie Crew
                                 P. O. Box 64839
                                 Chicago, IL 60664-0839

```
{% endraw %}

## FILE1181.TXT

{% raw %}
```
Disk No: 1181
Program Titles:  POETEASE version 1.1
PC-SIG versions: 2

Roses are red, violets are blue, POETEASE will rhyme most anything for
you.  POETEASE generates rhyming, consonant or assonant endings for
poetry.  One drawback: the program matches spelling only.  Hence,
POETEASE will not list `liar' as a rhyme word for `buyer.'

Usage:  Poetry Writing Assistance.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $5.00

File Descriptions:

POETDOC  BAT  Batch file to copy documentation to your printer.
PZ       EXE  The main program for POETEASE.
INITS         Data file.
ENDS          Data file.
VOWELS        Data file.
POETEASE DOC  Text documentation for POETEASE.

===========================================================================

Program Title: STYLED version 3.00 AND STYLLIST

STYLED charts patterns in ASCII text files to help revise, analyze, or
compare one's writing style.  The programs only work with an ASCII text,
but on this program there is a utility that converts any non-ASCII text
file into ASCII format (this includes WordStar documents).  These two
programs can save you time in your revisions, and help improve your
writing style.  STYLED analyzes each text for word length, punctuation,
syntax, or nominalization.  You can view a text file without leaving the
program STYLED, and you can shell to DOS.

STYLLIST does about the same thing as STYLED, except that it records
your long words, forms of "to be," and potential nominalizations in a
disk file.

Usage:  Writer's Tool.

Special Requirements:  Printer (optional).

How to Start:  Type GO (press enter).

Suggested Registration:  $7.00

File Descriptions:

ADMINESE TXT  Sample text file.
AUTOEXEC BAT  Batch file to start program.
MANUAL   BAT  Batch file to print documentation.
REVADMIN TXT  Sample text file.
REVSTUD  TXT  Sample text file.
REVTEACH TXT  Sample text file.
STPAUL   TXT  Sample text file.
STUDNESE TXT  Sample text file.
STYLED   DOC  STYLED documentation.
STYLED   EXE  STYLED main program.
STYLLIST EXE  STYLLIST main program.
TEACHESE TXT  Sample text file.
UNWS     DOC  Unwordstar documentation.
UNWS     EXE  Unwordstar program.
===========================================================================

Program Title: BASIC ENGLISH version 1.0

BASIC ENGLISH tells you how many words in your poem or
prose are on the magic list of 850 words scholars agree are simple and
most understandable by most people.  BASIC ENGLISH can flag words
excluded from the magic list and is valuable for technical writers.

Usage:  Prose Analysis

Special Requirements:  Printer (optional).

How to Start:  Type GO (press enter).

Suggested Registration: $5.00

File Descriptions:

BE       EXE  The main program for BASIC ENGLISH.
BE       DF   The main data file.
BE       DOC  Documentation for BASIC ENGLISH.
BASMAN   BAT  Batch file to copy documentation to your printer.
===========================================================================

Program Title: INVENT version 2.1

INVENT helps you create beautiful metaphors from words that you supply
to the program.  You enter up to 40 words into each of the these
categories, nouns, verbs, adjectives and adverbs and then let the
program do the work.

The program then generates sentences, which you may use in your
wrighting endeavors, quickly one screen full at a time.  You can request
as many re-scramblings of the same data as you like.

Usage:  Writers tool.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $7.00

File Descriptions:

INVENT   EXE  Main program.
INVENT   DOC  Program documentation.
```
{% endraw %}

## INVENT.DOC

{% raw %}
```
                                   INVENT


                            (c) 1988 by Louie Crew


Invent prompts you to enter words and then scrambles them.

To run, at the MS-DOS prompt enter just

                INVENT

Then hit the <ENTER> key and follow directions on the screen.

You may enter up to 40 each:  nouns, verbs, adjectives and adverbs.

The screen reminds you that you may stop the entry of any category as soon
as you like, by hitting the <ENTER> key without entering a new word.

The program generates new sentences quickly, one screen full at a time.
You may request as many re-scramblings of the same data as you like.

In a file called INVENTED.DAT, the program preserves all the data it
generates.  If INVENTED.DAT already exists, the program appends new
material to it.  From time to time you should rename or erase INVENTED.DAT
so that it will not become too bulky.


                                   Tips


1. INVENT works best if you enter words that matter to you

2. The more words you enter, the richer the variety of the combinations which
   the program will generate.  Also, the wider your range of words, the
   richer the associations which INVENT will suggest.

3.  INVENT works best if you resist entering strings of synonyms.   Also
    resist entries which are all abstract, or all concrete.  Otherwise,
    enter words quickly:  don't try to anticipate the scramble.  Edit after
    you see INVENT's suggestions, not before.  Let INVENT disinhibit you,
    not box you in.

4.  You may enter phrases or clauses when the program prompts for words,
    especially when it prompts for ADVERBS.  If you enter clauses for
    ADJECTIVES they will sometimes appear in ungrammatical order.

5.  As a "noun," you can enter the noun plus and adjective phrase or clause
    (e.g., "man who ate my dog"), but the full phrase or clause will appear
    each time the program randomly chooses this "noun."

6.  If you enter all verbs in the past tense, INVENT will make fewer verb
    errors.

.cp 7
                                   Caveats


The program will generate some novel collocations, gems which you may
polish to set in an appropriate jewelry.  Sort these from the silly and
sometimes ungrammatical ones.

INVENT does NOT think for you; it rearranges some of your own thoughts and
may provoke you to think new thoughts.  It works best as an heuristic.

INVENT is shareware. Copy freely, but don't dare sell.  If you use,
contribute $7 to:

                            Louie Crew
                            P. O. Box 1545
                            Orangeburg, SC 29116-1545.

Send an SSAE to learn about other programs Louie Crew has written for writers.

```
{% endraw %}

## POETEASE.DOC

{% raw %}
```
                            POETEASE, Version 1.1

                            (c) 1988 by Louie Crew
                               P. O. Box 64839
                           Chicago, IL 60664-0839



                               I.  What It Is


Pronounce it `poet ease,' `poet tease,' or `poetese':   your skill determines 
the quality of its service to you.  

As the menu notes, POETEASE helps you discover

                            1=Assonance
                            2=Consonance
                            3=Rhyme

The program very quickly generates lists to match with the phonetics which
you specify.


.cp 5
                               II.  How to Use



You may initiate the program at the command level, if you enter at the MS-DOS
prompt:

                               PZ<ENTER>


<ENTER> means the <ENTER> key.

That will take you to the menu above.

You may bypass the menu and choose the help you want when you first summon
the program.  At the MS-DOS prompt, enter:


                              PZ<ENTER> x


(for `x' substitute `a' for help with assonance, `c' for help with
consonance, or `r' for help with rhyme.)


.cp 4
                  Reports to Screen: Reports to Disk

The program automatically reports to the screen.  You may make it report to
disk instead if you you add an asterisk to command at the MS-DOS prompt:

                              PZ<ENTER> x*

(As before, for `x' substitute `a' for help with assonance, `c' for help
with consonance, or `r' for help with rhyme.)


.cp 6
                            III. How to Interpret


POETEASE does not think.  It generates real words and phony words.  You
should have no trouble sorting out the legitimate words from the non-words in
its lists.  You may have more trouble choosing the best words.

POETEASE matches spelling only.  English spelling often mismatches with 
sound.  Hence, POETEASE will not list `liar' as a rhyme word for `buyer.' 
When you enter `uyer' to request help, POETEASE lists only:


.cp 6
buyer               luyer               stuyer
bluyer              muyer               styuyer
bruyer              nuyer               swuyer
byuyer              puyer               tuyer
cuyer               phuyer              thuyer
chuyer              pluyer              thruyer
cluyer              pruyer              truyer
cruyer              quyer               tyuyer
duyer               ruyer               vuyer
druyer              rhuyer              wuyer
fuyer               suyer               whuyer
fluyer              scuyer              wruyer
fruyer              shuyer              xuyer
guyer               shluyer             yuyer
gluyer              shmuyer             zuyer
gnuyer              shruyer
gruyer              skuyer              
gyuyer              sluyer
huyer               smuyer
juyer               snuyer
kuyer               spuyer
kluyer              squyer
kruyer              sruyer

When you eliminate the non-words from this list, look closely:  it also 
suggests `flyer,' `shyer' and others.   If you enter `yer,'`iar,' and `ire' 
you will generate other lists for the same rhyme.


.cp 5
                             IV.  Efficient Use


Most good word-processors let you SHELL to the command level and return 
without having to re-load your word-processor or your current file. 

For example, while writing a poem in WordStar version 4.0, hit Ctrl-K-F. Run 
POETEASE as described above.  When you finish, you will return automatically 
to your poem, with any words that you have discovered.  If you have asked 
PZ to save them in a  disk file, you can read that file (TEM.PZ) into your 
document (WordStar's ^KR function:  see the manual for your word-processor).   

If you want to run several lists while outside WordStar 4.0, specify COMMAND 
as the first command, before you summon POETEASE.  You will have to specify 
EXIT when you have finished and want to return to WordStar.  See the 
WordStar manual for more advice about SHELLing. 



.cp 6
                             V.  Files Required


POETEASE comes with the program file:


                              PZ.EXE


with three data files:

.cp 3
                             INITS
                             ENDS
                             VOWELS

.cp 3
and with this explanation:

                             POETEASE.DOC

You never have to read or look at the data files, and you should never alter 
them or erase them.  The data files must be on the current subdirectory for
the program to work properly.  POETEASE may reside in any subdirectory, so 
long as you have that subdirectory in your PATH (see the MS-DOS manual).


.cp 5
                               VI.  Share-Ware


POETEASE is shareware.  If you use it, send $5 to the programmer:  otherwise 
you will write doggerel and have nightmares.

.cp 3
                                 Louie Crew
                               P. O. Box 64839
                           Chicago, IL 60664-0839

If you order your first copy from Crew, send an extra $5 to cover his copying
and mailing costs (i.e., $10 total).

When you pay to use a version you already have, specify that version and the
date of the file.  Crew will describe the next substantial update for you and
let you order it merely for the additional $5 it costs him to copy and send
it.


.cp 8
         VII. Other MS-DOS(2.1+) Shareware Available from Louie Crew

                All programs come with manuals on the disks.

ADDRESS    A program to manage addresses.  It processes people by up
           to ten categories, which the user specifies. It also sorts by
           zip codes and by birthdays.   It prints lists and envelopes,
           the latter with or without your return address.
           It includes RAMADD.EXE, a program in RAM which reports any
           address you need while doing other tasks. (Contribute $5)

APPLY      A program which monitors applications (for jobs, grants,
           contests....),  for the applicant. It stores the relevant
           data and merges it with text files which you create.  It allows you
           to edit your text for fine changes. It orders dossiers and prints
           your letters, resumes, and envelopes.  APPLY reviews any past
           experience you may have had with the person/institution before
           you try again. (Contribute $10)

BASICENG   A program to analyze your text and report how many words are in 
           BASIC English.  Optionally, it creates a new copy of your text, 
           flagging the words not in the BASIC list of 850 words.  Extremely
           useful for those who write for readers that use English as a 
           second language.  (Contribute $5)

CANTONES   A program to help you learn to speak Cantonese.
           An earlier version, "MailMerge Cantonese," won
           best-article-of-1985 by the Hong Kong Computer Society,
           reprinted in the Journal of the Chinese Language Teachers'
           Association, May 1986.  (Contribute $10)

HIRE       A program which monitors applications (for jobs,
           grants, contests....), for the employer or granting
           institution.  It stores the relevant data and merges it
           with text files which you create.  It allows you to edit
           your text for fine changes. It writes acknowledgments, alerts
           when support documents have not arrived, and writes rejections.
           It lets you code the applicants and clone special lists, for
           printouts to your committee or for private reference.
           It prints your letters and envelopes.  HIRE does the busy work.
           It lets you respond professionally to everyone and frees time for
           you to identify the best applicants.  (Contribute $10)

MUSES      A program which codes publishers; prints and circulates
           manuscripts; queries; catalogs publications; prepares
           bibliographies; tallies.....  (2 disks)  (Contribute $20)

MYLOG      Documents how you use your computer.  MYLOG works best as a
           command within batch files.  It adds logs to a file call LOGGED
           on your root directory.  It lists the log either to screen
           or to a disk file, and may list the logs for any one project,
           or for all projects in the log.  MYLOG computes the time you spent
           on each log-in and for all log-ins reported.  (Contribute $5)

PRINTASC   A program which installs two printers and accesses their special
           codes (such as proportional spacing); prints envelopes using the
           address typed only once, in the letters themselves; lets you
           specify headers, footers, etc. at print time, recognizes several
           WordStar dot commands; keeps up with two of your names, two of
           your addresses; facilitates indexing... Requires ASCII text, but
           shares another public-domain program to let you convert
           speedily.  (Contribute $5)

STYLED     Two programs which monitor prose and measure several
           dimensions of style.  One graphs and lists to the
           screen; another reports to disk files which you can use when
           you  edit.  STYLED monitors sentence length, word length,
           punctuation, syntax, weak verbs, and nominalization.  (Contribute 
           $10)


             Copy freely.  Do not sell.  If you use, contribute.


                                 Louie Crew
                                 P. O. Box 64839
                                 Chicago, IL 60664-0839

```
{% endraw %}

## REVADMIN.TXT

{% raw %}
```
          I have implied that the Department needs to expect more, to 
     require more.  We have pioneered long enough.  Now we must sophisticate 
     our graduate students.  During the new triennium, our students must 
     demonstrate more skill.   They must commit themselves to the more 
     complex materials.  The faculty must serve international, not parochial 
     standards. 
```
{% endraw %}

## REVSTUD.TXT

{% raw %}
```
     The science fiction here does not engage.  No fancy detail, no mystery, 
no wonder: no rumor haunts planets; the bronze statue neither puzzles nor 
amuses.  The author only plots.  The book bores me.

```
{% endraw %}

## REVTEACH.TXT

{% raw %}
```
     A student who expects to improve prose must apply our analysis 
cautiously.  Even when our counts correlate with good grades, further 
research needs to define precisely how the correlation occurs.  For example, 
we found that grades go up when students spell correctly and use few 
abstract words; but one cannot exchange a word for another as mechanically 
as one can alter spelling.  Perhaps students should read more if they expect 
to use words effectively.  Then possibly they can meaningfully raise average 
word length from the low mean (4.3) to the high limit of 5.0.  Sentence 
length, word length, and readability measure scribal fluency.   Classes need 
to improve these rather than practice with those discrete grammatical and 
stylistic elements which do not correlate significantly with grades.
```
{% endraw %}

## STPAUL.TXT

{% raw %}
```
     If I have all the eloquence of men or of angels, but speak without 
love, I am simply a gong booming or a cymbal clashing.  If I have the gift 
of prophecy, understanding all the mysteries there are, and knowing 
everything, and if I have faith in all its fulness, to move mountains, but 
without love, then I am nothing at all.  If I give away all that I possess, 
piece by piece, and if I even let them take my body to burn it, but am 
without love, it will do me no good whatever.
     Love is always patient and kind; it is never jealous; love is never 
boastful or conceited; it is never rude or selfish; it does not take 
offence, and is not resentful.  Love takes no pleasure in other people's 
sins but delights in the truth; it is always ready to excuse, to trust, to 
hope, and to endure whatever comes.
```
{% endraw %}

## STUDNESE.TXT

{% raw %}
```
     As far as science fiction is concerned, the story is not the least 
interesting.  I can hardly read anything really interesting and mysterious:  
no fancy about the wonderful world on planets, no extremely mysterious, 
haunted rumors about the bronze statue, no need to puzzele, no way of 
amusement.   Since the author only reports the plot, the story is quite 
boring.  And I was dissatisfied after reading it.
```
{% endraw %}

## STYLED.DOC

{% raw %}
```
.XE 1B 0E
                           STYLED.DOC


                              The  Manual  for 



                             STYLED 

                                 Version 3.0


                           (c) 1988 by Louie Crew
                 
				 Louie Crew
                               P. O. Box 1545
                          Orangeburg, SC 29116-1545

                             Tele: 803-533-0017

    ---------------------------------------------------------------------
                   Copy freely.  Pass it on.  Do NOT sell.
	                If you use, contribute $7.
    ---------------------------------------------------------------------
.he            Manual for Louie Crew's STYLED, Version 3.0, page #      


                                  To use:  


     STYLED requires MS-DOS, version 2.1 or higher. 

     1)   Put STYLED on a disk with at least one text file.

     2)   Type      STYLED      plus a carriage return.

     3)   Follow the menus.

     4)   STYLED automatically creates files to store 4 word lists. 
	  They could require as much space as your original text, 
          but rarely do.  Save plenty of space. 
		

                or, for a report to disk only


      1)  Put STYLLIST on a disk with at least one text file.

      2)  Type      

            STYLLIST   plus a carriage return.
          
            or

            STYLLIST   plus the name of a file to analyze

           
          The second choice automates everything and returns to MS-DOS
          after it has created REPORT.   The first choice (slower) 
          allows you to enter the filename from a prompt within the
          program.

          REPORT lists your long words,  your forms of "to be," 
          and your potential nominalizations, without some of the overkill
          in STYLED.	It lacks the punctuation report and other screen 
          graphs in STYLED.




                                    Why?


     STYLED and STYLLIST chart patterns in texts.  I created them to help me 
revise. I now also use them to analyze what others write.  They help me as I 
compare professionals with amateurs.  

     Each program serves as a heuristic.  It only describes:  it cannot 
prescribe or remedy.  It can help a clever person to identify and arrange
insight.  A dullard a dullard will remain.

     Each program abstracts several forms from texts.  Writers must 
integrate form and content.  Form alone lacks efficacy.  Witness thousands 
of bad poems in good iambic meter, hundreds of bad symphonies in perfect 3/4 
time, millions of discarded images painted with the finest of oils.  
Monsieur Jourdain, beware!   

     Each program detects patterns.  Clever writers will preserve some, 
expunge others. 

     Each program can freshen the air for those who know little to do with a 
text except to check for "mistakes."  

     At the least, each program orders dickering. Occasionally they prompt a 
reVision, a new way to see.  Epiphanies come rarely, however.  Only muses 
can program those.

     The programs offer no help with pre-writing and early drafts. They 
attend to matters that most writers notice only minimally in early on. 

     The programs serve those who think they have said something worth the 
time to polish. 

     Revision can gobble huge amounts of time.  Many people revise for hours 
without improving.  Many lack strategy.  These programs can help, modestly.

     I sometimes spend an entire day revising one page.  When I can't, I 
wish I could.  I wish more of the writers I read, would.  


                                  Warning:

     Do not let this program waste your time.  I have appended samples of my 
own sessions with the program.  You should find many other uses. 

     I cringe when I imagine mindless ways to use the program.  For example,
the program quantifies transitionals.  Transitionals often evidence 
cohesion, but only if the writers have used them accurately.  For some 
writers, THUS=ALSO, MOREOVER=NEVERTHELESS, etc.  This program will not 
detect their confusion.  No program protects us from sophomores.   Thank the 
goddess, most grow up.

     I smile when I imagine those who think these matters completely 
unimportant.  At Breadloaf, Robert Frost used to talk for hours about a 
minute effect of meter.  "But surely you don't think about such things when 
you write!" allegedly a poetaster exclaimed.  Frost teased, "About little 
else."  

     Too many people think that mystery abides only in abstracted ideas, 
that the package counts for little.  Like choristers who sing in showers 
only, these compose not, and woo an audience of only one. 

     Interpret, but distrust your interpretations. Features most important 
often occur but once.   

     Each program identifies slots.  You must imagine wise ways to fill 
them.

                                    ====

                                   What?


First you tell STYLED the name of the text you want to analyze.  You can name
the file from the command line in one of two ways:

              STYLED file.txt

or 

              STYLED #*.txt

The second way loads STYLED and start with a list of *.TXT files for you
to choose from.

You can also simply load 

	      STYLED		

The program will then prompt you:


      Answer # (plus wild cards) if you you wish to see the directory.

      Hit just <ENTER> if you you wish to end.



             Which TEXT file would you like to analyze?


Note that STYLED allows you to use MS-DOS wild cards (? or *) after the symbol 
`#' if you want to view a directory.  You may ask to see a list of the files 
on a different drive or subdirectory as well, as when you are logged on A: 
and enter for the FILENAME

              #B:\mysubdirectory\*.DOC

You will then see all the files with the extension .DOC on \mysubdirectory on
the B: drive.


				The Main Menu 



Once you have told STYLED what text you want to analyze, the main menu 
gives you 



     STYLED's menu initially gives eight choices:
     
 
                         Regarding \l\problem.txt

                                   Analyze

                              1 =  Word length
                              2 =  Punctuation
                              3 =  Syntax
                              4 =  Nominalization
                             ----------------------
                               (V)iew the file
                               (N)ame another file
                               (S)hell to MS-DOS
                               (E)nd a session

                              Choice:


     Any of the first seven will return to the menu.  Use  the  E  
key to exit to the MS-DOS prompt in an orderly way. 

     The   V   choice lets you view the text.  You do not have to leave the 
program to return to your word-processor.  The program shows the text to you 
one screen at a time.  Hit ESC to exit, any other key to continue whenever 
the program pauses.  The program numbers each screen when you view the text. 
 
     The   S   choice lets you leave STYLED temporarily.  While you work
at the MS-DOS level, STYLED remains in memory.  To return, type EXIT at
the MS-DOS prompt.  You may even run some other programs while you have
Shelled, if your computer has enough memory.

 ========================================================================
    Note: if you run STYLLIST, that program bypasses these the choices 
and directly prepares one file which reports the long words, the forms of 
TO BE, and the potential nominalizations.
 ========================================================================


     At this point, I recommend that you stop.  If you have not done so, 
run STYLED and STYLLIST.  Investigate one of the samples or test a text file 
of your own.  Return to this document only to reflect about how to interpret 
the data.


                             xxxxxxxxxxxxxxxxxx


                                 The Reports  


                              1.  Word Length. 


     This report replaces each word with a bar the length of the word, 
and it preserves the terminal punctuation.  It prints in dark-on-light only 
words with 10 or more characters.   It adds a sentence number, totals the 
words in each sentence, and calculates:

                  Total word count:     
                  Words 10+ chars.:       (  %)
                  Aver. wds/per/sent:   

Then it lists all the long words with a sentence number.


                            2.  Punctuation.


     (STYLLIST does not include this report.)

     All punctuation blinks.  One diamond character represents each word.   
Afterwards, the program tallies the punctuation and computes the average 
interval. 


                             3.  Syntax.


     (STYLLIST does not include this report.)

     Structure words ( possible coordinators, subordinators, and 
transitionals) appear in high intensity.

     First and last words of sentences, as well as words before and after 
internal punctuation, appear in low intensity, unless reported as structure 
words.

     A dull bar replaces each other word.  

     The program tallies the structure words and it lists them, each with 
its sentence number. 


                              4. Nominalization.


     Forms of the verb TO BE appear in dark-on-light letters.  Many words 
that may hide action appear in high intensity.  All other words appear in 
low intensity.  After the program tallies forms of TO BE and the words 
that may hide action, it lists them on screen with sentence number.


                             How to Use These Data


     Your own goals should dictate how you use any statistics.  Pattern 
to integrate content.   What should you emphasize?  What should you intensify. 
What junctures should you stress as such?....   What does your audience 
expect?  How can you use their expectations to engage them on your terms?
Or on theirs?  

     If STYLED's graphs correspond in no way to what you intend,  put a new 
Duracel in your inner ear and reprocess the words.

     If all sentences look alike, rearrange them to serve a purpose, 
possibly one you had not seen?   If you detect monotony, make it serve you 
or delete it. 

     A writer who strives primarily for style seems a bit like someone 
who arranges books by color.  A writer with style, resembles someone who 
arranges some books by size. 

     Thurber's editor warned him not to use the colon. Thurber persisted.  
One day the editor came to Thurber's desk, touched the colon, and ripped 
the key from Thurber's word-processor.  

     Scholars have written about "Tennyson's scissors."

     Some verbal fetishes enrich; others impoverish.  STYLED can help you 
only to spot them, not to evaluate them.  The program will not zap any 
combinations on your keyboard or printer, but you should.
 
     Use the program to sample published texts which share your goals and 
your audience.  Interpret carefully.  Generalize reluctantly.  Reverse 
a common practice if to reverse improves your manuscript.  Norms should not 
imprison, but should liberate.  Attend them consciously, cautiously.   

      Visit the sculptor's private studio, not the gallery.  Suspend 
reverence.  Let the moment demystify.  Ask how you might sculpt better.
Models which deserve your praise will survive. 

     In time you will discover your own norms. AUTHOR derived from AUCTOR,
L., `originator,' which in turn derived from AUGERE, `to increase,' `to 
produce.'  Those faithful to this etymology do not merely copy, but originate
and augment.


                                 Word Length


     Readers understand and remember shorter sentences better than longer 
ones.  Longer sentences suggest complexity.  Shorter sentences suggest 
simplicity.  Clever writers and readers master both.  Some pack complexity
into few words.  Others uninterrupt simplicity beautiful for many lines.

     Many writers use short sentences to clarify the steps of a process.   
Some writers subordinate profusely to illustrate delicate logical 
relationships between abstract ideas.  How does what you want to say 
constrain how you might say it?  

     I like to require my "long words" to serve major rather than minor 
plans.  When I see my long words lifted alone from the text in LONGWORD.REP,
I do not welcome those for which I had no special purpose.  A company will 
soon fail if its managers do not contribute to the company's net worth, 
especially if they ride in limousines.  Shakespeare reserved limousines like 
INCARNADINE for matters hunky-dory.

     I try to identify clusters of long or short bars.  If many short words 
cluster, do I dictate?  Do I sound childish?  If many long words cluster, do 
they cloud?  What verbs can I use to unpack action?  What clearer words can 
I use?

     How long is long?  Each must decide.  Another style-checker, Grammatik,
(now released as Grammatik II, Reference Software, 330 Townsend, Suite 232,
San Francisco, CA 94107) calls sentences under 14 words "short," sentences 
over 30 words "long."  Just as arbitrarily, STYLED calls "long" all words 
with 10 or more characters.  You decide.
  
     Some sociologists call all adults from 21-35 "young", from 36-50 
"middle-aged", and from 50-65 "old".  Since they give me only 7 more months of 
middle age, I dislike their arbitrary trifurcation of the work years, but I 
know what they analyze.  Distrust categories; but respect them.


                              Punctuation


     Punctuation often reveals whether I have stressed as I planned. 

     For example, 

          Sometimes I begin moderately and intensify later.  

          At other times I begin dramatically (as with a short sentence, a 
          long one,  or a highly modified one) and then moderate, as with a 
          stretch of sentences less varied.   

          Sometimes I risk monotony and then surprise. 

Contexts influence the effects of patterns in prose just as much as in 
music.  A series of short sentences from Hemingway will not likely 
function the way the short sentences function in a pamphlet to accompany 
aspirin.

     STYLED can help me spot places where I have deafened. 

     Use the program to report how the translators punctuated STPAUL.TXT.   
Many consider this passage one of the most beautiful in English literature:  
perhaps only the style compels them?  The substance cynically indicts 
everyone, especially in the Greek. 

     Use STYLED as a stethoscope to monitor the pulse of any "set piece"--by 
Adrienne Rich, Lincoln, Sojourner Truth, Jefferson, Chinua Achebe, Maxine 
Hong Kingston.....   


                                  Syntax 


     Some words, like bones, structure the skeleton of a text.  STYLED 
monitors three types of "structure words":  coordinators, subordinators, and
transitionals.  

     When sentence after sentence appears with only the first and last words, 
the rest in bars, either the text does not cohere well or the writer has 
fleshed with other words to hide the bones.  When the program shows structure 
words at frequent intervals, either the skeleton protrudes or supports a 
complex body of text.  Compare the cohesion of the sample STPAUL.TXT.  

     If I never subordinate by pattern, I might try to do so at the part of 
the paper that I think most important. 

     Beware:  the computer does not know what constitutes a subordinator, a 
transitional, or a coordinator.   The word THAT, for example, can function 
in a variety of these ways, or just as a demonstrative pronoun.   The 
favorite of grammar tests--

           That that that that that boy used is wrong is obvious.

won't confound this program.  [We need no program to call this sentence 
terrible!]  STYLED reports the 5 THATs as potential structure words, and 
reports the 2 forms of TO BE.  

     Specifically the program reproduces any word which matches one of these 
56:

          ACCORDINGLY, AFTER, ALSO, ALTHOUGH, AND, AS, BECAUSE, BEFORE, 
          BESIDES, BOTH, BUT, CONSEQUENTLY, EITHER, ETC., FIFTH, FIRST, 
          FOURTH, FURTHERMORE, HENCE, HOW, HOWEVER, IF, INDEED, INSTEAD, 
          MEANWHILE, MOREOVER, NEITHER, NEVERTHELESS, NOR, OR, OTHERWISE, 
          PROVIDED, SECOND, SIMILARLY, SINCE, SO, STILL, THAT, THEN, 
          THEREFORE, THIRD, THIS, THOUGH, THUS, UNLESS, UNTIL, WHAT, WHEN, 
          WHENEVER, WHERE, WHEREAS, WHETHER, WHICH, WHILE, WHO, WHOM



                           The Cholesterol Report


                               Forms of TO BE


     The program finds AM, ARE, AREN'T, BE, BEEN, BEING, IS, ISN'T, WAS, 
WASN'T, WERE, WEREN'T, I'M, YOU'RE, HE'S, SHE'S, IT'S, THERE'RE, THERE'S,
WE'RE, THEY'RE, WHO'S, WHICH'S, THAT'S, and WHAT's--regardless of case.

     These forms almost always force a writer to bury action in less 
forceful words, usually in nouns.  These forms locate all passives (except 
the lone past participle) and all expletives. 

     What's at stake:  When you fetch your transcripts, only the novice 
tells you:  "I have lost your records."  The experienced tells you, "Your 
records have been lost."  (Passive:  agent dropped.)  Those ready for 
Washington say, "There has been a loss of your records"--with no hint of an 
agent who responds.

     In documents which I edit most thoroughly,  I try to restrict TO BE to 
situations in which I name or identify--or to those sentences where all 
other alternatives sound silly.   


                               Nominalization


     Buried action can clog a text, like verbal cholesterol. 

     When a noun contains an action, we call it a nominalization.  

     NOMINALIZATION illustrates what it names: "-ize" buries the action "to 
make."  Nominalizations make nouns out of other words.  Often they take a 
part of a word, usually a verb, and remake it into a noun.

     Even when we can reverse the process and restore the action to a verb, 
should we?  When?  How often? 

     Everyone uses nominalizations.  I welcome them when: 

          1) They re-name old information  

          Kwong acted well in the play....  Other ACTors in Hong Kong 
          respect his talent, though he does not aspire to RESPECTability.  
     
          2) Alternatives strain, obscure, or seem silly and tedious.

          "The administration....."  instead of "Those who administer"
          "Writer" instead of "One who writes"

     Nevertheless, I test as many nominalizations as time allows.  They 
can violate the integrity of what anyone wants to say.  If you need 
evidence, review the work of the Committee on Doublespeak at the National 
Council of Teachers of English.  

     Bureaucrats and others who write for captive audiences like to mask 
most action.  Review ADMINESE.TXT.  The writer administers a department.  
He knew that his captives would read him closely.  Presumably he wanted to 
impress them.  He does not impress me.  Read my version in REVADMIN.TXT.  
Which do you prefer?    

     The program does not identify nominalization, but identifies words that
MAY evidence it.  Several English morphemes often turn verbs into nouns.
For example, the morpheme MENT makes nouns out of hundreds of verbs, such as
investment [invest+], endorsement [endorse+]....  But MENT does not always 
make a noun.  Witness DEPARTMENT, which buries no action, yet the program 
highlights it.  The program is stupid:  you should not be.  Stay awake.  
Don't expect the  program to find all buried action, or always to highlight 
words that hide it.  

     Even after the program catches buried action, the user must choose 
whether to keep it. 

     Version 1.5+ of the program highlights any word which contains 
one of the following strings:  ING, MENT, ION, ANCE, ENCE, NCIES, but excludes 
DURING and any word that contains the string HING (e.g., sometHING).

     An earlier version highlighted words that contain ER, OR, at the end,
to locate words like actOR, inventER, but sent more false alarms than 
true ones.  If you find some of these matches annoy you more than others, or 
if you discover strings not included here which would help you edit more 
effectively, write me.  If I incorporate those changes in later versions, I 
will acknowledge you and send you a free copy.  

     Please share any other reactions.  I don't mind the odd mismatch.  
STYLED saves me an enormous amount of time because it finds most of the
cholesterol which previously I used WordStar to seek and replace. 

     The more a writer names agents as subjects and puts action into 
verbs, the more the program will seem inaccurate.  Fewer and fewer of its 
matches will hide action.  That principle affects many computer checks.  The 
better I spell, the more a good spelling program matches with words which I 
have not misspelled. 

                                 Text Formats 


     The program assumes text in ASCII (American Standard Code for Information 
Interchange).  

     If you (V)iew your file first and it appears as you expected to, then 
you have a text in ASCII and can go on to my next paragraph.  If, however, 
your text adds strange graphics, then your text does not conform to ASCII.  
Various programs to strip these characters exist.  I like to use Gene Plantz' 
UNWS.EXE, copyrighted in the public domain.  I share copies with the copies 
of STYLED I send out.  UNWS means un-WordStar.   WordStar uses the non-ASCII 
characters for its (D) option, the "document" mode from the main menu.  You 
can create ASCII texts in WordStar if you use the "N" (Non-Document) option 
from the WordStar main menu.  I prefer to use the D mode first, to have full 
editing power, then to strip with UNWS.

     STYLED reports sentences by number, consecutively,  from the beginning 
to the end of the document.  It ignores any line that begins with a period, 
since many programs format REMARKS thus.  It recognizes all initials, plus 
a few abbreviations--Ms., Mrs., Dr., Prof., Mr.--as long as the period follows 
with no space between.  

     The program will count the quotation marks (either " or `) at the left 
of words to compute the number of your quotes, the <,(, or [ to determine 
the number of parenthetical remarks.  It does not detect whether you close 
these or whether you use them for any other purposes (such as for mathematics).
The program will treat as an ellipsis any string of uninterrupted periods.  If 
you put spaces between them, you will distort the punctuation report.
    
      The program recognizes spaces as the boundaries of words and tests
the left of each word for no more than one punctuation mark, the right of each
for no more than 2 punctuation marks.  The program will treat any additional 
punctuation as part of the word:  if it ever treats a quotation mark as 
part of the word, the program will abort.  Although the extra quotation mark 
distorts the format of the report files, you can still view all the data if 
you type the name of the .REP file from the MS-DOS prompt.  
	 
      The program recognizes -- as a dash, - as a hyphen.  It treats words on 
either side of the dash as separate, on either side of a hyphen as one.

      The program cannot determine whether a sentence continues after a
quotation that includes terminals.  It will treat as two sentences an
item such as:
 
                   "John, did you leave?" Mary asked.
	
or

       When I asked "Could you come?" I was not sure you understood.

  	
                             Reports as Disk Files


     STYLLIST saves three lists: 

	Long words
	Forms of `to be'
	Potential nominalizations

	(It does not save the punctuation report or the report of transitionals
	and conjunctions.  I describe below a method by which to save even 
	those.)

     STYLLIST stores these three lists into a file called REPORT.

     You may rename REPORT at the MS-DOS prompt with the syntax:    

	REN oldfile newfile.

      You must reserve space for these files with any new analysis.  They 
vary, and all together could require as much space as the original text.  Log 
onto a disk with plenty of space. 


                      A Tip about the Directory Option


     When the program prompts you for the file to view or analyze, it allows
you to see request the directory first.  If you enter just the pound sign plus 
a carriage return, you will see the full current directory of the logged drive.
You may specify another drive.  You may also specify the MS-DOS "wild cards"
--asterisks and question question marks--to limit the clutter.  For example: 
If you respond: 

                            #B:\ws\*.TXT
 
the program will show you all files with the extension .TXT on subdirectory 
called \ws on Drive B:.


                        How to Preserve the Reports


     STYLLIST preserves for you the three most reports most useful when you
edit.  See REPORT, above.

     Alternatively, you may save the session with STYLED as a file, from 
the MS-DOS prompt type: 

               STYLED >filetosave  

Replace "filetosave" with the name of the file in which to reserve the 
session.  (Upper/lower case does not matter, but you must use the blank 
space and the greater-than sign exactly as shown.)  If you trap the session 
in this way, you will slow the program slightly, and you must have enough 
disk space for the large new file.  Some word-processors allow you to 
see the graphics in the new file; others, such as WordStar, do not.  You 
can view the reports if at the MS-DOS prompt you enter

               TYPE sessionsaved

If you hit Ctrl-P before you enter this command, you will print the entire 
session.

The versions saved in this way will NOT distinguish between high and low 
intensity.


                         Smaller Portions of a Session:


     Those who have a dot matrix printer that supports MS-DOS graphics, can 
use PrtSc to print any screen.  This method saves too much data for most 
purposes, however.  

     Use PrtSc to print the word lists.  Refer to those lists as you return 
to edit your text with your word-processor.  

     Or you may print any of the four report files described above.   You 
may edit them and print them from your word-processor or just TYPE them from 
the MS-DOS menu.  


                                 Soft Copy
     

      I have explained earlier that the STYLLIST stores three lists as a disk
file named REPORT.  When I edit, I use Sidekick to window REPORT. 
	



                                   ======

A Note on the versions of STYLED (and STYLLIST):

                           Version 1.0 (May 1986)

No STYLLIST.

                          Version 1.1 (June 1986)  

Simplified the displays, to view more text with each screen.

Added more forms of TO BE to check, specifically more contractions.

Debugged for codes by word-processors that store ASCII text in lines 
(records) the full 255-character length.   
 
Added STYLLIST.EXE, the version that reports only to the disk file the
REPORT of longwords, forms of to be, and a reduced version of 
nominalizations in which I eliminate most of the overkill.


                         Version 1.11 (June 1986) 

Further reduced the overkill.   Added more examples.

.cp 5
                       Version 1.5 (September 1986)

Reduced the size of both STYLED.EXE and STYLLIST.EXE by 18%.

In STYLLIST, allowed you to bypass the menu: now you may name the file to 
analyze when you invoke the program at the MS-DOS prompt:    

                   styllist filename 
 

                         Version 1.6 (March 1987) 

Simplified the menus.  Added a shell feature for STYLED.  


                         Version 1.7 (April 1987) 

Added the ability to specify a text to analyze when you evoke STYLED 
from the command line.

Added prompts to help you when you enter an incorrect file name.


                           Version 2.0 (June 1987)

Reduced by 20% the time STYLED takes.  Added more counters for STYLLIST. 


                          Version 3.0 (March 1988)

Compiled with a much faster compiler.  Provided in a self-extracting archive. 

                                   ======



       Other  MS-DOS(2.1+) Shareware Available from Louie Crew

                All programs come with manuals on the disks.

ADDRESS    A program to manage addresses.  It processes people by up
           to ten categories, which the user specifies. It also sorts by
           zip codes and by birthdays.   It prints lists and envelopes,
           the latter with or without your return address.
           It includes RAMADD.EXE, a program in RAM which reports any
           address you need while doing other tasks. (Contribute $5)

APPLY      A program which monitors applications (for jobs, grants,
           contests....),  for the applicant. It stores the relevant
           data and merges it with text files which you create.  It allows you
           to edit your text for fine changes. It orders dossiers and prints
           your letters, resumes, and envelopes.  APPLY reviews any past
           experience you may have had with the person/institution before
           you try again. (Contribute $10)

BASICENG   A program to analyze your text and report how many words are in 
           BASIC English.  Optionally, it creates a new copy of your text, 
           flagging the words not in the BASIC list of 850 words.  Extremely
           useful for those who write for readers that use English as a 
           second language.  (Contribute $5)

CANTONES   A program to help you learn to speak Cantonese.
           An earlier version, "MailMerge Cantonese," won
           best-article-of-1985 by the Hong Kong Computer Society,
           reprinted in the Journal of the Chinese Language Teachers'
           Association, May 1986.  (Contribute $10)

HIRE       A program which monitors applications (for jobs,
           grants, contests....), for the employer or granting
           institution.  It stores the relevant data and merges it
           with text files which you create.  It allows you to edit
           your text for fine changes. It writes acknowledgments, alerts
           when support documents have not arrived, and writes rejections.
           It lets you code the applicants and clone special lists, for
           printouts to your committee or for private reference.
           It prints your letters and envelopes.  HIRE does the busy work.
           It lets you respond professionally to everyone and frees time for
           you to identify the best applicants.  (Contribute $10)

INVENT     A program which helps writers invent fresh metaphors.  It prompts
           users to supply nouns, verbs, adjectives, and adverbs.  It
           randomly scrambles the entries to provide novel arrangements.
           (Contribute $7)

MUSES      A program which circulates manuscripts, catalogs publishers,
           monitors queries, writes letters, prints manuscripts, summarizes
           data, tallies circulation, specializes bibliographies, and more.
           (2 disks) (Contribute $15)

MYLOG      Documents how you use your computer.  MYLOG works best as a
           command within batch files.  It adds logs to a file call LOGGED
           on your root directory.  It lists the log either to screen
           or to a disk file, and may list the logs for any one project,
           or for all projects in the log.  MYLOG computes the time you spent
           on each log-in and for all log-ins reported.  (Contribute $7)

POETEASE   A program which asks you to specify phonetic spelling and then
           quickly generates lists which match according to:

                            1=Assonance
                            2=Consonance
                            3=Rhyme

           POETEASE requires only 34k.  It is easy to SHELL to it from most
           word-processors, choose the rhyming word or assonant word...that
           you want, and return immediately to your composition.

           Pronounce it `poet ease,' `poet tease,' or `poetese':   your
           skill determines the quality of its service.  (Contribute $5)

PRINTASC   A program which installs two printers and accesses their special
           codes (such as proportional spacing); prints envelopes using the
           address typed only once, in the letters themselves; lets you
           specify headers, footers, etc. at print time, recognizes several
           WordStar dot commands; keeps up with two of your names, two of
           your addresses; facilitates indexing... Requires ASCII text, but
           shares another public-domain program to let you convert
           speedily.  (Contribute $5)


             Copy freely.  Do not sell.  If you use, contribute.



                                 Louie Crew
                                 P. O. Box 1545
                                 Orangeburg, SC 29116-1545

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

                         Appendix:  STYLED Practice 


     The program tests what we intuit about texts.  For example, the program 
can chart a writer's "leanness" or "periodicity" with specific, visible 
evidence.

     The program helps writers test drafts.  If we want a lean style, or a 
periodic one, the program charts how each new draft nears our goal.  

     The program cannot provide a style; but it can measure several 
dimensions of style.  We must know our own goals before we can use the 
program effectively. 

     I value force and directness.  I like to unpack nouns, to restore 
action to verbs.  I eschew passives and most other forms of TO BE....  
Joseph Williams' STYLE (Scott, Foresman, and Company) and Richard Lanham's 
REVISING PROSE (Scribner's) both preach the style I aspire to practice.  I 
recommend them highly.  Both help me winnow. 


                  A Sample Session with a Student's Paper


     I asked my second-year students to write about a book which they had 
hated.  One student concluded: 

          As far as science fiction is concerned, the story is not the least 
     interesting.  I can hardly read anything really interesting and 
     mysterious: no fancy about the wonderful world on planets, no extremely 
     mysterious, haunted rumors about the bronze statue, no need to puzzele, 
     no way of amusement.  Since the author only reports the plot, the 
     story is quite boring.  And I was dissatisfied after reading it. 

           [This paragraph appears as STUDNESE.TXT on the disk.]


Notice how she gropes.  INTERESTING appears twice, as does MYSTERIOUS.  But
her text builds.  Use STYLED to look at the punctuation, especially in 
sentence number 2, where she repeats more meaningfully.  The final two 
sentences jab.  STYLED charts the pulse. 

     I argue that the student can make a strong paragraph here but needs 
skill to determine what to keep, what to excise.  If she merely cuts the 
repetition, she could turn turn her pulsating indictment into a cadaver.
	
     With the "cholesterol" report, I found 4 forms I wanted to cleanse. 
Instead of the two forms of TO BE,  compare

          The science fiction here does not engage.  

I tried to preserve the pulse of the second sentence, as a weighty 
indictment, but to repeat less, and to put the more vivid action into 
verbs:

          No fancy detail, no mystery, no wonder: no rumor haunts planets; 
          the bronze statue neither puzzles nor amuses.  

In my version, verbs reinforce the jabs at the end.  

     The author only plots.  The book bores me.
 
(The punctuation report of her text shows the jabs, but the report of her 
word-length marks them less clearly than does the report of my word length.)

     Some readers may prefer the less forceful original.  Perhaps I have 
even changed her meaning, especially with "author only plots."  I argue that 
I have discovered more meaning than she had yet freighted, as I often do 
when I revise my own texts.

     These exercises cannot prove one's taste better than another's.   Some 
may prefer to write like the student here, or like the teachers and the  
administrator below.  Which versions would you prefer to read?  Which will 
you more likely remember?


                    A Sample Session with Teachers' Prose


     In a 1986 issue of Computers and Composition, two teachers reported:


          In order to meet the second condition, that the analysis should 
     lead to direct improvements in a revision, even the measurements which 
     do correlate with essay quality need to be used with some caution.  
     Research which studies the relationship of revised essays to holistic 
     scores should provide more accurate guidance in this area, but our 
     initial findings suggest some starting points.  Reducing the percentage 
     of abstract words and spelling errors can be accomplisehd directly and 
     with measureable effect on essay quality; however, students should not 
     expect that direct changes in word length, sentence length, or 
     readability will improve an essay.  The correlation of average word 
     length to quality, for instance, cannot be directly addressed in 
     revision.  Substitution of lexical units for the mere sake of length 
     would change the data but not, necessarily, the quality of the revised 
     draft.  Perhaps indirectly, through active experience of reading and 
     practice in writing which increase active vocabulary, a student could 
     meaningfully raise his or her average word length from the low mean 
     (4.3) to the high limit of 5.0.  The fact that these measurements can 
     be improved only indirectly, suggests the overall importance of scribal 
     fluency.  Since sentence length, word length, and readability are all 
     measurements of scribal fluency, the results of this study seem to 
     suggest that more classroom time should be spent on improving scribal 
     behavior than on practicing those discrete grammatical and stylistic 
     elements which do not correlate significantly with essay quality.  

Whew!  

STYLLIST cites the following long words in this paragraph: 

	 1 > improvements 
	 1 > measurements 
	 2 > relationship 
	 3 > percentage 
	 3 > accomplisehd 
	 3 > measureable 
	 3 > readability 
	 4 > correlation 
	 5 > Substitution 
	 5 > necessarily 
	 6 > indirectly 
	 6 > experience 
	 6 > vocabulary 
	 6 > meaningfully 
	 7 > measurements 
	 7 > indirectly 
	 7 > importance 
	 8 > readability 
	 8 > measurements 
	 8 > practicing 
	 8 > grammatical 
	 8 > significantly 

	    Total word count:         242 
            Words 10+ chars.:         22  ( 9 %)

They also practice what they preach.  They value long words and want 
students to value them.   In their last sentence they claim that writers 
waste time to remove those forms for which  holistic graders do not lower 
the score.  Elsewhere they specify nominalizations and forms of TO BE as 
examples.  Again they follow their own advice: STYLLIST cites 6 forms of TO 
BE in their paragraph:


	 1 > be 
	 3 > be 
	 4 > be 
	 7 > be 
	 8 > are 
	 8 > be 
	Forms of TO BE:           2 %

and the following words as possible nominalizations:

	 1 > condition 
	 1 > improvements 
	 1 > revision 
	 1 > measurements 
	 1 > caution 
	 2 > relationship 
	 2 > guidance 
	 2 > findings 
	 2 > starting 
	 3 > Reducing 
	 3 > spelling 
	 3 > sentence 
	 4 > correlation 
	 4 > instance 
	 4 > revision 
	 5 > Substitution 
	 6 > experience 
	 6 > reading 
	 6 > writing 
	 6 > meaningfully 
	 7 > measurements 
	 7 > importance 
	 8 > sentence 
	 8 > measurements 
	 8 > improving 
	 8 > practicing 
	 8 > elements 
         Possible buried action:   27  ( 11 %)
         Total word count:         242 

I used these lists when I revised, to express their ideas in my style: 

          A student who expects to improve prose must apply our analysis 
     cautiously.  Even when our counts correlate with good grades, further 
     research needs to define precisely how the correlation occurs.  For 
     example, we found that grades go up when students spell correctly and 
     use few abstract words; but one should not exchange a word for another 
     as mechanically as one alters spelling.  Perhaps students should read 
     more.  Then they may meaningfully raise average word length from the 
     low mean (4.3) to the high limit of 5.0.  Sentence length, word length, 
     and readability measure scribal fluency.   Classes need to improve 
     these rather than practice with those discrete grammatical and 
     stylistic elements which do not correlate significantly with grades. 

     Crusted with nominals, their prose sounds intelligent. But  when I 
unclog its arteries, the teachers do not impress me.  They discovered too 
little:   

          Spelling helps grades.  
          
          &

          "Perhaps" [their word!] students should read more.

and claim too much:

          Why waste time with features graders do not notice? 

Holistically I too give a lower grade to the clearer version, because of its 
poverty, not because of its clarity.   

     I agree that we need to search the data again to determine how quality 
correlates with style.   

     I never finish a text, but halt.  STYLLIST cites these long words in my 
version:

		1 > cautiously 
		2 > correlation 
		3 > mechanically 
		4 > effectively 
		5 > meaningfully 
		6 > readability 
		7 > grammatical 
		7 > significantly 
		Total word count:         125 
                Words 10+ chars.:         8  ( 6 %)

I used no forms of the verb TO BE, but STYLLIST reports five words as 
possible nominalizatons:

		2 > correlation 
		3 > spelling 
		5 > meaningfully 
		6 > Sentence 
		7 > elements 
                Possible buried action:   5  ( 4 %)
                Total word count:         125 


Since I reduced the total word length by almost half, I decided to live with 
the long words listed.  I used no form of TO BE, but did use three 
nominalizations:  CORRELATION and SPELLING name old information, introduced 
with the verbs CORRELATE and SPELL.  I kept the ambiguous word MEANINGFULLY 
because I did not know what the writers MEAN. (SENTENCE and ELEMENTS hide no 
action; with them the program misfired.)

     Explore your own logic.  I share mine to fortify you;  examine me for 
weakness.


                 A Sample Session With an Adminstrator's Report 


     Option 4 of the program reveals many places an administrator buried 
action in nouns or used forms of TO BE: 

          Implicit in what has been suggested above is the fact that the  
     Department needs significantly to increase its expectations and its  
     requirements.  Both sections of the Graduate Division now have 
     completed the  pioneering phase of their programs.  The programs are 
     well established.  A  satisfactory international recognition for the 
     programs has been achieved.   The time now has come to build upon the 
     initial successes of the  Department's postgraduate program.  During 
     the forthcoming triennium,  postgraduate coursework within the 
     Department must be made more complex.   Students must be required to 
     operate at more sophisticated--at genuinely  international--levels of 
     commitment and skill.   

Compare: 

          I have implied that the Department needs to expect more, to 
     require more.  We have pioneered long enough.  Now we must sophisticate 
     our graduate students.  During the new triennium, our students must 
     show more skill.   They must commit themselves to more complex 
     materials.  The faculty must serve international, not parochial 
     standards. 

When I showed the two versions to a graduate student, he exclaimed, "So much 
clearer!   The second doesn't sound like a report." 

     It does not have to.  It IS [sic] one.

     Yes, I revolt.  If you have read this far, maybe you will join me.  
Just how many more hours will unclear prose abuse?  

     Re-Visers unite.


                               ==============


```
{% endraw %}

## TEACHESE.TXT

{% raw %}
```
     In order to meet the second condition, that the analysis should lead to 
direct improvements in a revision, even the measurements which do correlate 
with essay quality need to be used with some caution.  Research which 
studies the relationship of revised essays to holistic scores should provide 
more accurate guidance in this area, but our initial findings suggest some 
starting points.  Reducing the percentage of abstract words and spelling 
errors can be accomplisehd directly and with measureable effect on essay 
quality; however, students should not expect that direct changes in word 
length, sentence length, or readability will improve an essay.  The 
correlation of average word length to quality, for instance, cannot be 
directly addressed in revision.  Substitution of lexical units for the mere 
sake of length would change the data but not, necessarily, the quality of 
the revised draft.  Perhaps indirectly, through active experience of reading 
and practice in writing which increase active vocabulary, a student could 
meaningfully raise his or her average word length from the low mean (4.3) to 
the high limit of 5.0.  The fact that these measurements can be improved 
only indirectly, suggests the overall importance of scribal fluency.  Since 
sentence length, word length, and readability are all measurements of 
scribal fluency, the results of this study seem to suggest that more 
classroom time should be spent on improving scribal behavior than on 
practicing those discrete grammatical and stylistic elements which do not 
correlate significantly with essay quality.  
```
{% endraw %}

## UNWS.DOC

{% raw %}
```
UNWS converts text files into pure ASCII format.  

To use UNWS, at the MS-DOS prompt, type 

		UNWS <>.  

The program will prompt you to name the input and the output file names.  

The input file must have an extension or the program will abort.  The program 
does not require your output file name to have an extension.

Gene Plantz created UNWS and put it in the public domain.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1181

     Volume in drive A has no label
     Directory of A:\

    FILE1181 TXT      3787   7-12-89   9:36a
    GO       BAT        12   7-12-89   9:29a
    HELP              1553  11-05-88   1:23p
    PAGE     COM       325   1-06-87   4:21p
    BE       DF       5376   1-09-88   1:54p
    BE       DOC      8320   1-30-88   1:35p
    BE       EXE     35472  10-21-88  11:47p
    INVENT   DOC      2771  10-15-88   2:43p
    INVENT   EXE     38832  12-05-88   6:18p
    ENDS               504   1-05-88   6:10p
    INITS              243   1-30-88   2:50p
    POETEASE DOC      9856   1-30-88   4:30p
    PZ       EXE     34752  10-21-88  11:50p
    VOWELS             119   1-05-88   5:55p
    ADMINESE TXT       768   3-27-88   9:46p
    AUTOEXEC BAT        31   3-27-88   9:46p
    MANUAL   BAT       183   3-27-88   9:46p
    REVADMIN TXT       512   3-27-88   9:46p
    REVSTUD  TXT       256   3-27-88   9:46p
    REVTEACH TXT       896   3-27-88   9:46p
    STPAUL   TXT       896   3-27-88   9:46p
    STUDNESE TXT       512   3-27-88   9:46p
    STYLED   DOC     45440  11-05-88   1:28p
    STYLED   EXE     56483  10-20-88  10:30p
    STYLLIST EXE     44838  10-20-88  10:27p
    TEACHESE TXT      1664   3-27-88   9:46p
    UNWS     DOC       512   3-27-88   9:46p
    UNWS     EXE      2714   3-27-88   9:46p
           28 file(s)     297627 bytes
                           10240 bytes free
