---
layout: page
title: "PC-SIG Diskette Library (Disk #907)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0907/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0907"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FUNKYTOOLBOX - MISC. UTILITIES"

    FUNKY TOOLBOX (function key toolbox) contains a large number of
    utilities for the programmer in you.  Along with the utilities are a
    lot of miscellaneous BASIC programs and text files, to be used as
    examples for doing a specific programming procedure, or even used as
    subroutines within a program you are creating.  See file descriptions
    for explanations of individual programs.
    File Descriptions:
    
    AINK$    TBX  Controls KYBD for opening files correctly.
    ANYKEY   TBX  Advanced routine for any key to continue.
    ARAYCOMP TBX  Compute ARRAY size overhead in DEFSNG-DEFDBL-DEFSTR.
    ALLCHARS TBX  Displays a hexadecimal table of all screen characters.
    ASCKEY$  TBX  ASCII Numbers for all keys.
    AUREVOIR TBX  Flashing panels say a big good-bye.
    BLACKOUT TBX  Example of a screen black-out.
    SOUNDZ   TBX  Unusual sounds and musical effects.
    SONGRITR TBX  Easy music from score to CPU.
    NICELEGS TBX  How to make legs for your printer.
    BANANA2  TBX  Error-trapping alternative.
    BANANA1  TBX  Error-trapping ON-OFF routine.
    ERROR2   TBX  Tough tests CPU for accuracy.
    ERROR1   TBX  Fun tests the IBM-PC CPU for accuracy.
    TESTEROR TBX  Error-trapping demo.
    COLRTOGL TBX  Switches between mono and color.
    LOKATE   TBX  Flashes screen address and points location.
    SCRNMAP  TBX  Creates a map of the computer screen.
    MARKSCRN TBX  Roadmap your display for convenience.
    FLIPPIES TBX  How to use both sides of your disks.
    INDEX1   BAS  Index on the files on this disk.
    ABSECTOR TBX  Converts track-sector to absolute sector for DEBUG use.
    DEBUG    DOC  How to use DEBUG and error trapping.
    GSBMUSIC TBX  Background music for your programs.
    GOBANANA DOC  How to error-trap your programs.
    PEEKFILE DOC  How to peek into files and ROM with DEBUG.
    HORNBOOK DOC  Information on DOS for programmers.
    ERORNUM  DAT  Data file for ERRMESAG.TBX.
    ERRMESAG TBX  Shows ERROR messages.
    CURSER   TBX  Demo of CRSLIN and POS(0) for bookmarking.
    INDEX2   BAS  Index of the files on this disk.
    LETTER   BAS  A letter from PeopleSystems.
    TALKPAGE BAS  Why talking pages make reading easier.
    BROWSE   COM  Utility for viewing text files.
    STUFCHIP DOC  How to protect your chips.
    DOLABEL  TBX  Self-producing label program. Uses printer, but no labels.
    DISKLABL TBX  Label your disks with wide Directory.  No labels needed.
    PEOPLSYS TBX  Big screen opening and closing.  Chains to AUREVOIR.TBX.
    INPUTEST TBX  Trap KYBD entry with easy INSTR routine.
    NOTENUMB TBX  Makes octave shifts easy.
    F5ERRMSG TBX  Print out error messages by pressing F5.
    README        How to get started.
    WHATISPS DOC  Information on PeopleSystems.
    SOFTKEYS TBX  Loads new F keys for color/mono then erases program.
    WPROT    TBX  How to unprotect a file to list and save it.
    MACHLANG TBX  Using poke and machine language complete easy computation.
    HEXSCALE TBX  Graphics for addressing-nibbles-bytes-segment:  offset.
    FUNCTKEY TBX  How to use your function keys.
    MEMTEST1 TBX  Tests your computer memory.
    COLORBOX TBX  Displays various colored boxes.
    MONO     BAS  Separate subroutine to run mono.
    COLOR    BAS  Separate subroutine to run color.
    COMO     TBX  Merge this color/mono subroutine into your program.
    IBMKEYS  TBX  Reloads the F1 to F10 keys the way they were.
    README2  DOC  Information on PeopleSystems.
    HEX2DEC  TBX  Automatically convert any HEX address to decimal numbers.
    SCRNCHRS TBX  Now see all screen chars, some unmentionables.
    BASUNPRO TBX  Create machine language to unprotect files.
    SAVEDLIN TBX  Recovers lost EDLIN file when disk is full.
    PROTECTD TBX  A protected file for you to practice on.
    PEPLSYST BAS  The system of people and computers.
    DAMNTRIV DOC  Information on PeopleSystems.
    FRIENDLY TBX  How to be friendly.
    CLUSECTR TBX  DOS 2.0 conversion of start cluster to absolute sector.
    SENSITIV DOC  How to work with people.
    DISKMOD  DOC  How to modify a disk with DEBUG.
    BOOBOO   DOC  Improvement for the IBM-PC.
    XMASTREE TBX  Mono graphics and music for the season.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BOOBOO.DOC

{% raw %}
```



****************************************************************

         WILL THE REAL IBM BOOBOO PLEASE STAND UP !

****************************************************************

                 PEOPLE SYSTEMS, LTD. (C) 1983

After producing the finest microcomputer ever manufactured, it almost
seems sacrilegious to discuss IBM's short-comings. But the problems
aren't with the computer at all. That is not the real booboo. We all
have heard of and searched for the Microsoft bug, found it and said,
"Great, I'm glad that's all that is wrong, it's not even worth talking
about."

And there have been glitches and gremlins that have cropped up
from time to time in communications, etc, and of course EASY WRITER 
wasn't so easy. But,  in the context of real booboos in the
microcomputer industry, these don't hold a candle to some of the 
bloopers that have taken place and right at this moment are being
created by some of the other "quality" manufacturers. IBM has done
well by comparison.

"O.K.,if its not the computer, " you ask," what is it ?"
Well, it's called a PERSONAL computer, but the emphasis has been on
the hardware and not the interpersonal interface. IBM in its super
ability to produce and market has set a standard for everyone else
to follow, but there are other important ingredients that need more
attention. The personal or inter-personal interface, as good as it
is, needs development.

"Do you mean the instruction manuals? ", you ask. "Why, they have 
been praised as the best in the business." Yes, they are, but still
the people-to-people aspects have not yet been developed, and we'll
go into more detail as we expand our horizons.
    
There is no doubt that IBM has demonstrated its prowess and craft
by projecting, producing and distributing the finest MICRO computer
system ever to be produced. The feat may never be equaled again.
IBM promised a superior product and they produced one, right from
the start. I have one of the early production models and I am
proud to say it has performed beyond my greatest expectations.

But as a technologist who is sensitive to people's needs, I found
a gapping hole in the complex marketing interface between the customer
and the producer. I don't believe it is a matter of IBM policy
being unsound, because there are indications that the IBM policies
intended for this interface to operate as smoothly as the PC does.
But it just hasn't happened, in the writer's opinion -- not yet.

Now that production and distribution are taking on the world, there 
will be time to re-examine this sort of consideration, and do some-
thing about it. Certainly there have been many others who have taken
this problem to heart and written letters to the trade magazines about
their feelings. And possibly IBM has a task force working on it
right now.

But lets get to the crux of the situation and then explain why it
may not be apparent to everyone. The computer industry is hardly one
generation old and the development in the last 10 years has been
astronomical. All sorts of people have migrated to the industy because
it is a boomer. There is a severe shortage of well qualified tech-
nologically trained people and many of the less technical jobs
are held by less qualified people.

IBM set up a fine service to its users that didn't become effective
because it's leadership wasn't organized or technically oriented.
This is the inquiry card included at the back of the software 
packages. The idea was good but the implementation seemed to be
ineffective. The people answering the letters didn't know what they
were talking about and the system failed to do what it was intended
to do.

I own a priceless exchange of letters trying to find out how to 
implement a simple DOS function in BASIC. One young lady, answered
very succinctly, " Yes, that can be done in BASIC." but overlooked
telling me how to do it. Apparently, she didn't know how either. Then 
I got another letter in this series that the typist copied exact code
into and there must have been a major  error in her transcription, 
because, it didn't work either.

This feedback should have provided a basis for a newsletter that was
created by IBM for it's customers. But I guess IBM thinks of the sales
organizations as its customers, not the ultimate consumer. You are
probably aware that the Cabots speak only to the Lodges and so forth.

Using the sales people as disseminators of technical information has
not worked. Salespeople are oriented to concerning themselves about
commissions and if you have bought the machine, they no longer have
a stake in its proper operation.

Technical "support" is like the weather, everyone talks about it, but
no one does anything about it. In fact, IBM sends technical releases
to its distribution outlets, but doesn't publicize them nor does the
store let on that they have a file of technical releases. These should 
be made available to the user as an obligation of the Company to its
customers. Others in the technical business makes a point of publishing
lists of technical releases, priced or otherwise, but IBM doesn't.
Perhaps a carry-over from the days when IBM never made mistakes.

It is not too late to correct. IBM is used to high paid hand-holders
who could personally guide the proper people in correcting glitches.
In the main frame business there are many of these available. But in
a consumer product, hand holding is an unnecessary expense  to many
managers. But it can be a source of future business and the finest
quality lowest priced advertising, that is "word of mouth" from a 
satisfied customer.

A picture is worth a 1000 words. But did you notice, there are almost
no pictures in the DOS and BASIC manuals. The "word people" are so
involved in producing non-emotional, non judgemental prose, they
have forgotten how to use illustrations.  They have republished and
reset the type in these manuals, but they haven't filled the gap
of interpersonal exchange in them. For example, there is
a need for a good detailed map of memory, using some of the common
formats of DOS and BASICA or DOS and DEBUG. We have produced simple
ones in TOOLBOX for someone to easily grasp low memory or high
memory concepts and the addressing methods used in the CPU.

There are piece meal address lists and a weak attempt at a memory map,
but there is no complete overall plan with detailed areas blown-up
to a larger scale offered. The information is there, but you have
to put it together yourself -- and why should this be done by one
million buyers when it could be done once for everyone.

Yes, the manuals are better than most, but they lack interpersonal
communications information that would have made them superior. There 
are several possible reasons for this type of failing. First, the
creator doesn't really understand what he is trying to explain. 
Or second, he does not want to fully explain it, because it is a
valuable secret and should not be disseminated.

Years ago these were valuable secrets, now it can hardly be the
reason. The emphasis is directed towards satisfactory prose instead
of concentrated on clearly explained and documented answers.
A little poor grammar would never be noticed if the information is
simple and sincere. By distilling information to its essense, too
much of the communicative understanding can be lost.

How would you like to visit New York City and find your way around
armed with the following street guide :

Broadway runs from the Battery to the Harlem River. Also 42 nd Street
runs from the East River to the Hudson River and crosses Broadway.

The information is correct but not as informative as it might be.
It is a disconnected expanation of two major thoroughfares without
proper priority.

Obviously, some personal feeling could be communicated with the
factual information to better prepare the receiver for the facts.
For example:

New York City is a long slender (judgmental) island with Broadway 
running north from the tip of the Battery to the Harlem River. Midtown
42 St. runs east from the Hudson to the East River, crossing Broadway.

For some time computer writers have hidden behind the broad disclaimer
"This is not intended to be a TUTORIAL" but they then set out to 
instruct the user on how to PRINT "Your Name". Its time to stand up
and be responsible for the warmware ( the manuals ) that go between
the hardware and the user. They can be easily improved if technically
prepared people are in command. The final drafts can be reviewed by
a word processing English student, but don't give them the creative
responsibility.

Since the IBM was the first of its kind in 16 Bits and MS-DOS and
since there were no good tutorials and there are lots of white spaces
left unused in the IBM manuals, IBM should make it their business to
do a better job of information creation and distribution.

In its infinite wisdom IBM created another albatross that they haven't
heard the end of and it will take a long time to live down. I call it 
the Graduates Club. It is the dubious process of advertising for soft-
ware submissions from outsiders and then writing most of it in-house.
IBM has just announced that they intend to release many new programs
created by their own staff.

Oh yes, IBM legal has tried to protect itself against those who would
cry foul in the courts, but an understanding judge may discount all
the disclaimers and demand to see the records of these submissions.
Why were so many submissions held for such long periods of time, only
to be shed with the standard computer letter  that said "we don't
wish to pursue your offer any further...."

And the most galling thing to the submitter is that IBM can't find
my information to return it to me. Even if agreed to in advance
such conditions place the submitter at an unfair disadvantage to the
Colossus and they may organize and fight back someday. The record I 
heard was holding the software for about a one year period and then
summarily rejecting it.

This is a low in interpersonal relations. Too many fine people worked
hard for this carrot not to feel they had been taken advantage of 
unfairly. The original terms of the software agreement were so one
sided and dictatorial that IBM revised them immediately. But the
real critical matters were left  untouched. Who is to say that IBM
ever intended to purchase any programs, maybe this was just a ploy
to get people to purchase computers and try to submit software for
IBM's future software development. I really don't believe it, but
the melody lingers on.

```
{% endraw %}

## COLOR.BAS

{% raw %}
```bas
30000 REM---~COLOR~----goto color
30010 KEY OFF
30020 WIDTH 80: DEF SEG=0: A=PEEK(&H410):  POKE &H410,(A AND &HCF) OR &H20
30030 WIDTH 40:SCREEN 1:SCREEN 0:LOCATE 1,2,1,6,7
30040 KEY ON
30050 NEW
```
{% endraw %}

## DAMNTRIV.DOC

{% raw %}
```
               
               
               
               
               Damn  the  Trivia
               
               Our Systems Are Sinking
               
               
               UPFRONT With PeopleSystems
               
               By
               
               Louis A. Warner, P.E.
               (C) Copyright 1987
               78 Maplevale Drive
               Woodbridge, CT 06525
               
               
               

               

               What is happening to the quality of life in the U.S.

          today? We hear people blaming the schools, the President,

          the parents, the politicians, the media. Nobody is really

          sure who is to blame.  There are some who fault other

          countries for our problems.  Our litigious society believes

          that someone else -- some other person or group of people

          must be at fault. Why is it people know all about trivia,

          but when it comes to something that is important to their

          lives, they don't seem to be concerned?

               We are regularly fed a diet of trivia, instead of

          importance. Readers, Viewers and Listeners are constantly

          bombarded with popular causes that usually have little or no

          bearing on their daily lives or well being. At the same time

          the real important matters are overlooked or given a once-

          over-lightly treatment. The media makes it fashionable to be

          knowledgible or just concerned about the whales, acid rain,

          the baby seals, the rain forests in South America, Rock

          Stars, book authors, wealthy celebrities, TV shows and sport

          celebrities, just to mention a few.

               While people are being brain-washed about trivia, the

          same people are seldom being motivated to do something about

          the unbalanced budget, the enormous deficit, our world trade

          imbalance, the high cost of hospitals, the overdue debts

          from the Third World and South America, the carnage on the

          highways, our illiteracy and other important problems. The

          cost of producing goods in this country makes it almost

          impossible for Americans to buy their own products. We can't

          afford to do business with ourselves. Nor can anyone else.

               These items of consequence are all matters that we

          could call systems for people -- the federal budget system,

          the hospital system, etc. Probably most people assume that

          there is nothing that they can do anyway, so why worry about

          it, unless you are directly affected, at the present time.

          Why worry about the social security system, as long as the

          check comes the first of the month?

               Many would like to blame THE SYSTEM. Obviously that's

          like blaming the stars in the sky. Unless spoken in a

          religious context, there is no one BIG SYSTEM to hold

          responsible. Of course, there are many kinds of systems.

          There are systems for technology and systems for people and

          some systems that are a mixture of both. Our problems always

          seem to start with inadequate systems.  Perhaps we all are

          at fault for letting our systems get so bad. The reader

          should try to think of a system for people that isn't having

          difficulty today. We were once a nation that other countries

          tried to copy -- not so today.  If you would like to know

          why the U.S. isn't a model any more, join us. We are now

          embarking on a safari into uncharted territory. Exploring

          this jungle of systems is a fascinating frontier.

               Americans have enjoyed a success rate for progress in

          science and technology that is second to no other country.

          At the same time, many domestic problems that are non-

          technical or nonscientific lack progress or solution and

          just go on and on.  The technology for sending a man to the

          moon is successful. Yet, at the same time, using present day

          educational systems, many of our youth drop out of high

          school and others don't receive a well rounded education.

          David T. Kearns, Chairman of Xerox Corporation said

          America's public schools have "put this country at a

          terrible competitive disadvantage" by turning out workers

          with "a 50 percent defect rate. . . The American work force

          is running out of qualified people."   What is wrong?

               Our ability to understand systems for things or systems

          for people (we call them PeopleSystems) begins in the early

          education systems; at home, at school, and on the street.

          Educators are sincerely trying to cope with the gap in

          math/science education, but the shortage of teachers

          equipped to teach these important thing-systems impedes

          improvement.

               A 1985 federal study, which will be discussed in more

          detail, found the lack of early age instruction in science

          and mathematics fuels an imbalance in U.S. students not

          found in students from other countries. Of course, the well

          rounded super student from any country is intellectually

          superior, but average students in the U.S. are considerably

          below average in math and science when compared with foreign

          students.

               In the U.S. the upper 10 percent are well educated and

          competent in most educational areas, but the next 90 percent

          of students are severely lacking in math and science talent

          compared to students from Japan, West Germany, or the

          U.S.S.R. In fact, many U.S. students avoid math and science

          as much as possible in high school. Yet, there is a daily

          need for most people to understand or at least have an

          feeling for matters technical. Why is this so hard?  What is

          wrong?

               Remember back to the time of NASA's flights into space

          in the 1960's.  Washington was prodded by the nation's

          voters to put some of those great scientists to work solving

          domestic problems. It sounded like a good idea, but it

          didn't have any real basis for success. Adept at controlling

          the physical environment, the scientists selected had no

          experience handling the sticky political ecology in the land

          of NeverNever -- Washington, D.C.

               The direct application of technical expertise to the

          nation's people problems was not productive and the idea

          soon died. Today, the considerable differences between

          thing- systems (the systems of technology) and systems for

          people which we call PeopleSystems are clear. Applying thing

          systems expertise directly to PeopleSystems problems

          obviously was the wrong approach. There will be more about

          this later in the book.

               Let's look at thing systems first and then

          PeopleSystems. Although relatively new, thing systems from

          technology are quite common in everyday life. Thing systems

          can range from simple, common principles like most bolts

          normally have right hand threads, etc., all the way up to

          the big complex systems. Systems that operate automated

          machinery or protect airline passengers with involved flight

          control systems.  For instance, most everyone knows how to

          tighten a nut clockwise, if it has a right handed (R.H.)

          thread. Of course, turn the nut counterclockwise, if it's

          left handed.

               A more detailed thing system works when tightening a

          number of nuts holding a large piece of machinery. First

          tighten all nuts by hand before using a wrench.  Let's take

          our example one more step. Few people may know about a

          graduated torque wrench. It makes the final adjustment

          leaving all nuts torqued or tightened to the same force. Not

          one nut will be over or understressed.

               Now, let's take a quick look at our  systems for

          people. PeopleSystems -- the systems of, by, and for the

          people trace back to the early tribal laws in Middle Eastern

          civilizations.  Later in UPFRONT, the author defines and

          classifies PeopleSystems (PS). For now, please study the

          following chart listing some common PeopleSystems. Notice

          the various levels of creative control.

               

               Common examples of PeopleSystems classified by level:

               

          

          GOVT/LAWS           CUSTOMS               HABITS

          ===================================================

          LEVEL I             LEVEL II              LEVEL III

          

          traffic laws        teach kids to drive   kids reckless

          marriage/divorce    kind to ladies        wolf whistle

          funeral/will        hold a wake           wear shoes

          pay attachments     speak English         talk clearly

          ingredients on pack eat three meals       chew politely

          don't mark bills    use US money          carry money

          get married         set up a household    date others

          pay taxes           earn a living         buy things

          

               This book on PeopleSystems does not propose applying

          technical systems directly to problems in systems for

          people.  Instead, PeopleSystems will make a new and detailed

          study of the various systems for people. Systems that are

          working and systems that are not.  This study may help

          redirect Washington's attention towards solving systems

          problems. Some long awaited answers may develop. There is a

          pressing need for better methods and systems for people.

          Universities may someday award degrees for the study of

          systems for both things and people.

               Few will ever forget the ivy covered halls, where we

          learned about the world's problems. We tried to solve them

          one by one. It all seemed so easy then, but we were very

          young and very foolish. We seldom learned that while solving

          problems A and B, we might be creating problems in C, D and

          probably X, Y and Z.

               In English Comp 101,  students learned to 1) state the

          need; 2) organize the problem; and 3) propose the solution.

          What can a poor researcher for PeopleSystems do after

          discovering that 1) the need has long been self-evident.

          2)There are actually hundreds of serious problems to

          organize. And 3) that finding solutions may depend on

          cooperation from those who have power to deny the existence

          of such problems?

               Why not just ignore the big problems and attack one of

          the tiny problems? We can hear Professor Snood whispering to

          the class. Can't you still hear his raspy voice saying,

          "Nibble on the problems -- don't chunk-off more than your

          readers can swallow." That is exactly what has been

          happening in systems for people, or as we know them

          PeopleSystems (PS).  For example, look at the Social

          Security System.  Once, one of the great accomplishments in

          PeopleSystems, imitated by many foreign governments.

          Washington has nibbled away until Social Security hardly can

          sustain itself. Today, even felons in prison receive checks.

          Originally self-supporting  now there is talk of possibly

          abandoning the once solid  financial system.

               There is no dispute that the U.S.A. is still the finest

          country to live -- in spite of its domestic problems.  We

          sing America, "My country, 'tis of thee." It says our

          country is great because of its people. How did a young

          country become so powerful so quickly? Probably the

          homogenization of diverse knowledge and experience brought

          by its immigrants was one key factor. Is the U.S.A. still

          used as the model for progress by the other countries of the

          world?  Or has the U.S.A. slipped off its pedestal somewhat?

               Has the melting pot boiled dry -- refined and packaged

          into a shiny hollow plastic bubble with nothing inside?  Has

          the rush for riches created a money-hungry people? Are we a

          product of too much specialization, too narrow concepts, too

          much futile experimentation?  Do we have too few basic

          principles?  Where is "The Bottom Line" -- the jargon for

          profit from an enterprise that ignores everything else. Are

          most Americans ignoring everything but that which enriches

          themselves?  Recently profits seem to come mostly from

          selling off assets. Can Americans reexamine their priorities

          before it is too late?

               Becoming familiar with a systemic concept like

          PeopleSystems may stretch the reader's mind at first.  It is

          not difficult,  provided the reader is willing to take one

          step at a time. (A few readers are probably wondering: If

          it's so damned important why haven't I heard of it before?)

          Each new science has had to establish its own turf. Or as

          R.G. Ingersoll put it, "Every science has been an outcast."

               If the reader likes to approach a new concept gently,

          then the reader should skip this chapter UPFRONT. Use

          UPFRONT as a reference if mired down in confusion.

               ELSE IF the reader wants all the new ideas lined up in

          a row, like bowling pins  "Then, lay on MacDuff." Study/Read

          UPFRONT and follow on with the explanation in the remaining

          chapters. Readers willing to accept new concepts, at least

          until they thoroughly understand, will find this book easy

          to read. Yet, those who would parry every inch of the way,

          defending the virtues of concepts inherited may find the

          book intolerable.  H.L. Mencken said, "The public, with its

          mob yearning to be instructed, edified and pulled by the

          nose, demands certainties;...but there are no certainties."

               UPFRONT with PeopleSystems is for those who like their

          information up front  clear, simple and logical.  Please, DO

          NOT TRY TO SKIM when studying this book.  There are many

          concepts here brought together in a unique manner. It needs

          the reader's concentrated attention, if he or she wants to

          understand.  The reader who is used to dashing through an

          article that contains only one or two basic ideas  and a lot

          of fluff  may be unhappy. Don't try to skim/read this book

          in that manner.

               There ought to be a word for study-reading because

          useful information becomes more complex every day. Skim

          reading a difficult subject just doesn't work, unless you

          are already an expert on the subject. In the event the

          reader feels obliged to play critic, he won't be able to

          properly judge the carelessly examined ideas.  Publishing

          savants always say that they READ a manuscript  which means

          they really scurried through a page here and there. No

          wonder the publishers try to decide what books aren't

          readable. Then, with this wonderful negative system,  why do

          publishers print so many books that people don't buy or

          read?

               Speaking of skimming, the author remembers meeting a

          young trial lawyer  called into a complex technical law suit

          at the last moment. "Give me ten minutes to get the gist of

          your report. Then  I'll argue them deaf, dumb and blind,

          right up to the courthouse door."  If the reader just plans

          to get the gist and make a quick judgment -- don't waste the

          time. The reader's presumptions will probably be wrong. If

          you're not interested in studying complex systems, and

          involved concepts, reexamining predetermined ideas -- then

          pass on. Don't read this book. Of course, few who suffer

          this malady will recognize its symptoms.

               Someone is grumbling in the back of the hall. "But, I

          have a right to my opinion about any subject. It's the

          American way."  True, true. Then,  pray tell, do you have an

          opinion about open heart surgery or celestial navigation?

          Are you up to date on the latest techniques?  DO you know

          why technology has been so successful with its thing-systems

          while people-systems are stumbling around. Then READ/STUDY

          this book carefully. Please, thoroughly chew and digest the

          concepts before arguing with them.

               Historically, the educated people carefully study

          what's already said many times before.  The works of

          Shakespeare and Thoreau annually give birth to still more

          volumes of commentary.  Too often, however, new authors may

          take one or two new concepts and grind them to powder.

          Writers invest many words looking at their  concepts in

          every conceivable way.  Readers now expect most books to be

          full of fluff, and the worthwhile ideas can be gleaned with

          ten minutes of skimming.  This book proposes a broad

          exploratory concept which requires the attention and

          patience of the reader. Of course, it's much easier to

          criticize new concepts than it is to struggle and understand

          them.  Throw the manuscript back on the slush pile and find

          one that says something you already know.

               In systems for people a piecemeal approach has patched

          the dyke. Patches which come undone every time the need for

          repairs surface like bubbles in the pool. Mind you, repairs

          are a way of life in any progressive activity. Repairs are

          necessary to even keep a spider's web useful. Spiders spend

          much of their time filling in and repairing their webs.

          Every so often, however,  even a spider must stop and decide

          to  move to a more effective operation. He must swing out

          and build a new superstructure for his new environment.

               The concept of PeopleSystems, which the author first

          identified in 1972, in his first book Standup, may already

          have achieved immortality. An advance copy of PeopleSystems

          has been critiqued in a small national publication, C.S.N.

          on Monday, March 30, 1987. Unfortunately the editor didn't

          really take the time to understand. PeopleSystems must have

          rattled his cage though, because he carefully avoided giving

          the complete definition.  He tried to play down the

          importance of PeopleSystems by calling it junk mail. If it

          was so unimportant,  why did he give it priority location?

          It was a two column sidebar, high on the editorial page and

          in color -- no less.  Oh, what a tangled web we weave...

               Free your presumptions,  loosen your imagination  let

          your mind soar. Americans are all in this same boat together

          seeking a better quality of life.  Some have their hands on

          the oars and some control the tiller.  We'll all sail faster

          and better when we start the engines and untie the anchor

          line dragging for a long time.

               Time is an important ingredient in the learning

          process. Don't pass judgment until you've heard it all and

          then have reflected on it a while.  AND then, only if you

          are confident that you really understand, then can you

          accept or reject the concepts. If you don't understand or

          don't care to understand PS, just ignore it. Don't try to

          destroy  PeopleSystems because you feel insecure about its

          concepts.

               The subject of PS is broad and yet quite definitive. PS

          can't be spoon-fed to the reader.  The reader needs a clear

          map of where PS is coming from and where it is going.  That

          is why our editors suggested writing this chapter UPFRONT --

          a capsule version of PeopleSystems.

               PeopleSystems is not a religion, nor a political party,

          and it's not fattening.  PeopleSystems can provide help

          just like a magnifying glass to examine systems for people

          that need improvement and repair. The rest of the book will

          amplify these ideas and further explain their consequences.

          Don't act surprised if the author views many of the new

          concepts from  different directions. It may help the reader

          to a better understanding. Be patient -- who would expect to

          learn a new language in an hour or two?

               For those disconsolate readers who neither accept nor

          trust anything new, we'll perhaps be building a boat that

          hovers like a dirigible. In their minds it will  soar like a

          jet, dig like a backhoe, plane like a speedboat, tunnel like

          a mole. This will all take place within five rooms and a

          bath with chrome wheels! If a reader isn't willing to accept

          anything new, then how can he or she expect to learn

          anything new?

               To those readers interested in quick fixes and nothing

          else, we suggest reading science fiction. SciFi has all the

          answers to everything except that which is needed today.

          Please do not expect to apply technical solutions to systems

          for people.  It's a lot more complicated than that.

               PeopleSystems doesn't presume to know all the answers.

          The author may be aware of some possibilities and will share

          them with the careful reader.  The skimming reader will

          probably fly right over them.

               This book will examine some improved PeopleSystems

          methods that can help find answers.  Don't look for quick

          fixes.  These occur only in fairy tales, Hollywood scripts

          and politician's promises.  Don't try to understand

          PeopleSystems if you want to cross examine it, line by line,

          while you are first learning about it. To learn about a new

          and complex concept, first take the time to patiently learn

          about it, try to understand it, then when you feel competent

          in its ideas, argue with it. Don't argue from a position of

          ignorance, rather from the standpoint of personal knowledge.

               If a reader is disappointed not to have strong feelings

          about PeopleSystems, don't let that concern you. An open

          mind is the garden for new concepts. If the reader is moved

          to have strong feelings in favor of the new concept, perhaps

          it's because PeopleSystems has merely organized this

          reader's thinking into a coherent thesis. BUT, if the reader

          quickly feels resentment or resistance towards these new

          concepts, he or she should examine their own attitudes

          towards technology and systems. Perhaps there is already an

          underlying antipathy about math and science and a hang-up

          exists about the importance of technology and its systems in

          the future.

               Let's look at the basic premise.  Why should we compare

          systems for things with systems for people? Let us go back

          to the beginning of the period of technical advancement

          towards the end of the Renaissance.  The need for honest

          scientific information was obvious.  Prior to people leaving

          their agricultural heritage for the cities, there was little

          need for development of crafts guilds.  People were usually

          poor and isolated, except some who lived in the castles,

          cities, churches and manor houses.  There were few useful

          systems, either for people or for things.

               The control of the people and their systems has changed

          hands many times in the past. In primitive beginnings, the

          tribe and its leaders were in control with the power of life

          and death over the members.  Later in history, in the city

          the mob sometimes took control out of the hands of the

          rulers.  On occasion the mob pressured progress, but more

          often, it produced chaos.

                For many decades in various countries, the struggle

          for control frequently changed hands among the clergy, the

          politicians and the mob. Most recently a new and powerful

          contender for control has arrived.  The media is no longer

          just an observer, a scrivener, a reporter of facts. Media

          tries to influence people's opinion and guide decisions.

          Even though it may begin in an unorganized manner, the hype

          grows as if there was only one single opinion. Such ballyhoo

          is self-feeding and fattens on itself until something more

          newsworthy comes along to displace it.   More later in

          Chapter VIII.

               The growth of the cities emerging from the Dark Ages

          increased the need for tradesmen and job specialization.

          There were butchers and bakers and candlestick makers needed

          and money slowly began to circulate among the working

          classes. There were no patent systems prior to the 16th

          century and few lawyers to protect against infringement.

               Transportation systems developed from town to town

          country to country, over both land and sea.  There are many

          ways to trace the progress of systems for things.  The

          increase in travel speed or the quality of the candlemaker's

          product are simple yardsticks.  It is not so simple,

          however, to determine the progress made in systems for

          people. In fact, the author discovered that progress in

          PeopleSystems usually occurs in big jumps that sometimes are

          backward, as well as forward. More later in  Chapter II.

               It is common knowledge that today many of these systems

          for people are ineffective and need improvement or

          replacement. Schools began in a one room schoolhouse, where

          every one helped each other to learn.  The ungraded primary

          school is no more, but there are strong advocates for its

          return.  Instead, an experiment with open classrooms has

          hampered elementary education.

               Important differences between systems for people  and

          systems for things quickly become obvious. How do the people

          rectify a mistake in a basic process?

               In the world of things, if the candlemaker produces a

          batch of poor candles he melts them down and makes better

          ones. That is,  if he values his reputation as candlemaker.

          However, when the King of England imposed an unfair tax on

          tea imported by the colonies, this despicable PeopleSystem

          remained. The repeal took many months and spawned a

          Revolutionary War in the process. If a system for things is

          not producing, a manufacturer can pull the plug on a machine

          that doesn't work properly.  How can the common people pull

          the plug on a bad law or an ineffective system?

               How can we compare systems for things to systems for

          people? They are diverse sets of systems at best. Except for

          the fact that each is a group of systems for the benefit of

          mankind, there may be little in common. Please be aware the

          comparison's greatest strengths will be in the differences

          and in the success rates of each group.

                We can easily compare the progress of the group of

          systems for things, with the lack of progress in systems for

          people. Oh yes, PeopleSystems have been improving over the

          years, mostly because of the individual efforts of the

          people affected. In fact, the need for making a comparison

          between thing systems and PeopleSystems may not be obvious.

          The recent quantum leap forward in computers, electronics

          and medical technology, however, makes the study imperative.

          We will pursue the history of PeopleSystems and thing

          systems in more detail, later in Chapter I.

               For now, let us compare progress in thing systems as a

          group with systems for people as a group. In fact, the

          author suggests the reader make  a list of successful

          technology systems. When the list gets to ten items stop.

          Now start compiling a list of successful PeopleSystems in

          the same manner. If the list gets to ten items, again stop

          and add another ten items to the thing systems list. It is

          soon obvious that the list of successful thing systems will

          grow and grow.  While at the same time, the list of

          successful PeopleSystems will be quite difficult to compile.

          With each PeopleSystem proposed there will be many questions

          about whether it's a real benefit for the people --  or not.

               Try PeopleSystems as a party game. Divide the guests

          into two teams, the Thing-People versus the People-People.

          Have each team select a leader. The Systems-Person leads the

          Thing-People team; the Word-Person leads the People-People.

          Taking turns, each team must propose a thing system or a

          PeopleSystem that is successful. Let the comments flow. The

          game soon runs out of successful PeopleSystems.  That is,

          unless the group starts proposing PS in Customs or Habits

          where there are many good ones. Discussions can get heated

          over the meaning of successful.

               Using some of today's thing systems, technology can put

          a man on the moon, and give him a vehicle to ride around in.

          Then, by pressing a few buttons, bring him safely back to

          earth to his loved ones. Yet, using today's PeopleSystems

          many youngsters can't get through high school learning what

          they need to be good citizens. How to enjoy a happy

          productive family life -- free from fear and want. The

          statistics are clear about problems in PeopleSystems.

          School dropout rates approach 50 % in big cities and 50 % of

          all marriages fail.

               Using another of today's thing systems, we can dial a

          phone number and talk with anyone in the free world. Still,

          some people can't communicate with their loved ones in the

          same room about an emotional subject.

               Please note that the word things appears in the context

          of physical entities or at least closely related to them.

          Not the way the average dictionary defines things  as in

          ANYthing.  Avoid using the word things for matters non-

          physical. In Hollywood, a guy can have a physical thing for

          a lady, but not in PeopleSystems.

               There are many kinds of systems affecting our lives

          today. Most separate into systems for people (like marriage,

          nursing, education, etc.) and systems for things (like

          aircraft guidance, surveying, machinery, etc.)  Of course,

          there will also be hybrid systems for both things and

          people. Nevertheless, let's not get mired down  with

          semantics. The definitions will become clearer as the reader

          becomes more familiar with PeopleSystems.

               Some readers may pale at the word systems and the

          author chooses to define it as simply as possible. A SYSTEM

          is just a set of EVENTS with a PURPOSE.  Yes, some thing

          people prefer a more technical definition, with clauses that

          discuss matters like testing, established, related events,

          often sequential, etc. Simplicity is the key to systems

          research. If you can't describe a concept in a simple

          manner, maybe there is something wrong with the concept.

               Here's a high sounding thing system that many people

          won't recognize, even though they are probably very familiar

          with it.  The automotive lubrication volumetric measurement

          verification unit indicates the machinery needs oil. That's

          right, the dipstick shows low.  When the reader has studied

          systems in depth, he or she will find there is no simpler

          definition. A system is just a set of events with a purpose.

          Please don't ignore this definition of systems just because

          it's simple. Einstein's E=mc^2 was simple too.

               There is no such thing as THE SYSTEM.  We hear the

          common complaint: "I HATE THE SYSTEM!" There is no single,

          all powerful system that controls all of us, unless spoken

          in a religious context. There are many individual systems,

          however,  as well as interrelated systems. If the complainer

          had said,"I hate the political system" it might be broad and

          ambiguous, but understandable. Nevertheless, there is no BIG

          SYSTEM to satisfy the complainer's need to strike out and

          blame someone or something -- anything.

               It is obvious to a student of systems that there are

          good systems, bad systems, old systems, new systems. There

          are systems that work and some that don't.  Perhaps a word

          like pattern instead of system would be acceptable to those

          who have a hangup. Some people don't appreciate seeing words

          like systems and people in the same sentence. People are

          generally very systematic, whether they know it, believe it,

          or not. More later in the Introduction.

               The reader has noted the two major divisions of systems

          -- thing systems and PeopleSystems. Please spell the latter

          exactly as shown -- one word, capital P and S, no space

          between.  PS is a new concept and needs identity in a new

          word form.

               Thing systems are by far the most prolific and most

          successful and technology can take credit. Most thing-

          systems are the product of economically motivated

          technologists who enjoy solving problems. Some people joke

          that thing-people are born problem solvers to whom problems

          present a challenge. But, people-persons instead, grow into

          problem watchers and see people themselves as the challenge.

          Please see Chapter III for more on the subject.

               PeopleSystems are really as old as history. Some trace

          back to the Hebrew laws and Cuneiform cave markings in the

          Middle East. The prohibition against eating pork was wise.

          There was no refrigeration. PeopleSystems  affect large

          numbers of people and are constantly in need of change and

          improvement. And of course, there are hybrid or mixed

          systems which may contain a number of lesser PeopleSystems

          and thing systems. Usually a hybrid system fits into either

          category depending on the importance of its various

          component systems.  For instance, teaching computer

          programming needs more technical talent than teaching

          talent. There are many detailed discussions of systems and

          the types of talents and jobs involved in later chapters.

          According to PeopleSystems, what is the difference between a

          surgeon and a physician -- or a tax collector and a tax

          appraiser?

               The natives are getting restless and trying to form

          their own definitions of PeopleSystems. The time is now.

               

               PEOPLESYSTEMS DEFINED

               ======================

               PeopleSystems are the repetitive patterns of people

          activities. The habits, the customs, the laws and

          regulations that guide, control or affect our daily life.

               

               PeopleSystems divide into three levels of control:

               

               1. Laws/Regulations  Level I  These PS affect very

          large groups. Created by representative political

          government, presumably expressing  the will of the majority.

               

               2. Customs Level II Created by the people themselves in

          concert or by the elite leadership. These PS affect large or

          small groups of people.

               

               3. Habits  Level III  PS for individuals -- created of,

          by and for the individual person or people.

               

               Many systems involve both people and thing activities,

          but there are unmixed, plain  or pure people and thing

          systems. Plain PeopleSystems are like the marriage system or

          the criminal law system, the Social Security or Welfare

          systems, also teaching or preaching.  By comparison, some

          plain thing systems are land surveying or navigation,

          accounting and mathematics, meteorology, etc. More later in

          Chapter III.

               Technology (thing) systems are growing at a rapid rate.

          Just consider the recent progress in computers, space travel

          and medical technology. Meanwhile, PeopleSystems seem

          struggling and stagnant -- Social Security and Welfare;

          Family Marriage and Divorce; Public Education, etc.

               For many decades the U.S.A. was the model for the world

          in new systems.  The U.S. Constitution, the Congress and the

          Patent Office, etc. have been copied.  Why aren't today's

          PeopleSystems as effective as they once were?  Washington

          spends over $400 billion per year on PeopleSystems. Some

          Americans believe in throwing money at problems. How can

          they reduce the waste?  Is the U.S.A. still a model that

          other countries want to copy?  More on the budget billions

          in Chapter 1.

               Washington's struggle with improving PeopleSystems has

          been very slow. It's like the old story about the drunk

          staggering around under a street light. As he stumbled over

          the curb, again and again, a policeman asked what he was

          doing. "Looking for me wallet  I dropped me wallet."  Asked

          where he dropped the wallet, the drunk pointed to a dark

          section of the street. The bluecoat asked why wasn't he

          looking over there. And the drunk politely explained, "The

          light's better over here."

               Maybe Washington has been looking for answers too near

          the lamp post, but, not where they dropped the ball. This

          author has researched how the recent stagnation came about

          in PeopleSystems. Where did the leadership drop the

          taxpayer's wallet?

               Thing systems have been making progress, even while PS

          are mired down in their own problems. Congress passed a

          balanced budget control law last year.  Congress now is

          talking about ignoring their own new law even before the ink

          is hardly dry.

               Some PeopleSystems are much easier to accept and follow

          than others. PeopleSystems are often more successful in

          Customs Levels II and Habits Level III. These PS developed

          of, by and for the people. They are not the result of

          governmental edicts, and don't contain penalties imposed by

          law.  Three meals a day is a fine PS from Customs Level II.

          Not chiseled in stone, these PS get tested by time and by

          the people themselves.

               It seems that the more input the ordinary people have

          in the creation of PeopleSystems, the more useful the

          systems become.  With Customs-II and Habits-III the people

          themselves usually create, test and put these PeopleSystems

          into use without any interference.  They know that it is the

          people -- themselves -- whom they must satisfy.  Otherwise,

          a PeopleSystem may be difficult to install, enforce or

          continue.

               The Supreme Court just approved a bad PeopleSystem that

          caused considerable public disapproval. The Court said that

          reverse discrimination is acceptable in cases where

          minorities had been penalized in the past. In California, a

          woman should have received the public works dispatcher job,

          instead of the more qualified man. This decision fails to

          satisfy the majority under PeopleSystems rules. Even pro-

          women's groups disapproved of this reverse discrimination.

          There is a need for a test to examine PeopleSystems for

          usefulness and acceptability?  If we look at the three

          levels I, II, and III, we find the basis for a Universal

          Test for PeopleSystems.

               

               The Universal Test for PeopleSystems requires that

          1) the PeopleSystem must be the truth of the matter. It must

          meet the requirements needed and it must be workable. Else

          2) it should clearly state that certain exceptions or

          defects still exist and 3) name the defects. 4) There should

          not be any extraneous matters attached like the common

          practice of riders hanging onto the coat-tails of popular

          legislation.  5) Finally, the PS must be acceptable at all

          levels, at least by a majority of those affected.  No matter

          how good it sounds to the leadership, the people should test

          proposed PS at each level. The politicians must query the

          individual, the small group, and the large political

          subdivision. A majority must agree. No longer can the

          leadership assume last minute compromises are acceptable to

          the average taxpayer.

               As we know, there are two major divisions in systems --

          PeopleSystems and thing-systems.  There are also two major

          groups of talents. Some people enjoy either people talents

          or thing talents or both.  Unhappily, some people have none.

          People persons jobs include teachers, nurses, artists, sales

          people, physicians, (not surgeons)  musicians, etc. Also

          included is the powerful elite leadership group of word

          people.

               The word persons group includes authors, writers,

          editors, directors, personalities, commentators, and news

          people. There are also legislators, politicians, clergy,

          lawyers, judges and others whose work product is generally

          in the form of words  either written or verbal.

               Word-people usually create, control, direct, or at

          least guide PeopleSystems.   Word-people have been around

          for centuries. In ancient times the scribes were the ones

          able to read and write and often held positions of trust.

          Unfortunately, most word people today have little training

          and experience with complicated systems of various kinds.

          Studies made by the author show that word people generally

          shy away from being involved with things. They prefer to

          interact with people. In a study group of fifteen

          congresspeople, only two showed interest in anything but

          politics or sports. One politician even said his hobby was

          politics.  More later in Chapter IV.

               Popular TV quiz shows demonstrate how few technical --

          subjects are available for the contestant to choose.

          Unfortunately,  most of the questions relate to trivia about

          literature, history, geography, movies, rock groups, or

          personalities.  On the JEOPARDY show there are six different

          lists of questions to pick from.  Usually not more than one

          of the lists has mathematical or scientific answers.

               Readers Digest has continued a monthly quiz feature on

          Increasing Your Word Power for as many years as the author

          can remember. Seldom do the general magazines discuss a

          technical subject, unless it's a put-down against nuclear

          energy, acid rain, or pollution. There is nothing evenhanded

          about the present treatment of technology and thing systems.

               Thing-people make up the largest group with their

          thing-talents and training. They are the people involved

          with some phase of a product, or mathematics, finances,

          scientific or technical services, etc.  Thing-person jobs

          include bakers, mechanics, butchers, pilots, builders, bank

          tellers, mathematicians, scientists, engineers,

          technologists, cashiers. Also include surgeons (not

          physicians), financial people, repair persons, farmers,

          ranchers, etc.  Obviously there are also many mixed or

          hybrid jobs that need both thing and people talents and

          people with mixed talents do this work. More later in

          Chapter III.

               Among the thing people, there is an elite group.

          Systems people are an emerging leadership, some of whom may

          not even be aware of their own significance.  They are

          probably too busy making things happen.  Not all technical

          people are systems people. Diversity in training, experience

          and talents are needed. The systematist should also be a

          word person with reasonable people talents for leadership.

          There are many technologists unaware of the responsibility

          of the systematist.  The need for people to create complex

          systems blossomed with the electronic and computer

          industries. Most systematists apply  their expertise to

          specific technical systems and may have little desire or

          opportunity to work with non-technical systems. There is a

          real need for trained systems people who can double in brass

          and handle more than their own specialty. Although sorely

          needed, there are no established criteria for training

          systematists -- the super-people.

               Systems people generally create thing systems though

          they may not recognize this new title. Although systems

          people come from technology, some may not possess systems

          talents of a broad enough nature.  They probably can handle

          systems for their own specialty, but may not be adept at

          broad based systems planning. Some managers with technology

          backgrounds, the author has observed, seem to have good

          systems planning talents.

               If the reader still needs convincing about the

          importance of thing-systems, this may do it. There are twice

          as many jobs connected with thing-systems as jobs connected

          with systems for people. The number of thing jobs is growing

          rapidly. Just count the number of motors in your home today

          and compare this with the small number that Grandma had.

          Many kinds of systems play a growing part in our lives.

          People might as well learn to enjoy them instead of fighting

          them. Systems are here to stay.
```
{% endraw %}

## DEBUG.DOC

{% raw %}
```


***************************
     BLOOPERS AND BUGS
***************************

PEOPLE SYSTEMS, LTD.
Copyright 1983 (c) L. A. Warner, P.E.

Even a musical genius practises and plays compositions, written
by others, for a long time before he sets out to play a concert
of his own creations. Similiarly, a programmer should keyboard-in,
and debug other people's programs long before he decides to give 
a recital of his own composing. There is much to be gained by 
copying in a program from a magazine or book and then debugging it
or adapting it for the idiosyncrasies of his particular PC.
Finding and fixing the bloopers is not all that difficult. Try it.

prgm : 20 READ X$, Z$        you typed:  20 REED X4, Z$

DEBUGGING KEYED-IN PROGRAMS FROM A MAGAZINE
At the time, debugging another's program may seem very difficult,
but as the work progresses, and experience is gained, debugging and
adapting a program becomes quite easy, even though the programming
may seem foreign or a little too advanced to understand. Of course,
debugging your own programs ensures a better understanding and also
a commitment to make them work well. Most of this
article will be concerned with debugging your own programming
efforts, so let us touch lightly on keyed-in debugging and 
adaptation before we plunge into the bottomless pit called DB.

prgm: 15 READ X$,B: DATA JONES,24 you typed:15 READ X,B$: DATA @$,JONES

SOME DB TIME SAVERS
Some of the time savers are: print-out the listing and place it 
side by side with the original and with two 3x5 cards cross-check
it line by line, marking the errors. Using a copy stand and good 
lighting with a line marker will expedite the keyboarding. There
are good references like "The BASIC Handbook" by David Lien and
"The Conversion Handbook" by D. A. Brain not to mention Appendix D
in the IBM BASIC manual, that will save time in translation of 
certain language specifics.

Technical publishers discovered that proof readers who didn't speak
the language they were checking were often very careful in their
galley corrections. Perhaps your family can spot typos that
you can't find?

Whats wrong? 25 PRINT "The number is, Z : GOTO 35    (end ")

DEBUGGING YOUR OWN PROGRAMS
This is a short tutorial on the process of debugging a program
and is not intended to teach how to use the DOS program called 
DEBUG, which is quite self explanatory although its usage could be
better explained with some examples and demonstrations. It is a tool
worth getting familiar with and we discuss some of its uses in Vol.2
to unlock protected files and recover EDLIN files when the disk 
is full.

For definition, debugging is the process of successive improvements
made to enable a program to do what it is intended to do, under most
conditions. Debugging should start right at the beginning of coding 
so that errors of most types can be eliminated, rather than
trapped and handled. Generally, error trapping is omitted until
the program is well developed, because error routines can present
serious impediments to program development and it is better to find
and correct an error instead of being satisfied by handling it.

DEBUGGING VS. ERROR HANDLING
In contrast to debugging, ERROR trapping and handling applies to the
run-time keyboard and peripheral errors that would cause a well 
debugged program to shut down, losing all work not already saved.
ERROR trapping is covered in another article in the series.

25 READ T,U,V : DATA 3,6       (not enough data)

Error handling installed prematurely can cast a smokescreen over
efforts to debug. However, sometimes ERR and ERL, error message and
error line can be used to debug a very involved program and save
data from being lost because of a crash. During the development of a
complex program, all error messages should be noted and line numbers
logged so that the decision to trap errors can be based on the 
programmer's experience in that part of the program.

STUDY THE ERROR MESSAGES IN BASIC AND DOS
The error messages in Appendix A : BASIC manual are extensive and worth
studying on their own terms. It's much easier to learn from them
when you don't have to solve a problem, than it is to read them, one
at a time after the program has shut down and you know you have a mess
to straighten out. By the way, the second edition of IBM BASIC Manual
has an extended section on error messages in Appendix A. Moving
in the right direction, IBM indicates how to correct the error now.

AFTER THE CRASH
Now what do you do? That's the question. Record the error message and
line number. Look it up for detail and study it.  Sometimes there are
many possibilities to consider. Then LIST the lines before the ERL and
see if you can detect the problem. There is another route to take
and that is in direct mode enter the print-out of variables, one by
one and see if there are any surprises. Entering  ?X,K$   provides the
value of X and K$ on the next line following the command.

Whats wrong?  10R5 PRINT "LINE NUMBER BAD"

TRON -- TROFF TRACE
One of the most useful tools, especially if you have a printer and a
quick trigger finger is TRON, which prints the line numbers as the
program proceeds towards the crash. You can stop the action using
Ctrl-NumLock and print out the screen for study purposes. TROFF turns
the trace off again.

MULTIPLE STATEMENT LINES
When you have narrowed the program area down to where you 
suspect the error is caused, it may be beneficial to rewrite those
lines especially if they contain multiple statements. Bad single
statement lines can be identified by the error message ERL. Sometimes
a line may show on the screen correctly but have a bug in it's bits.
Retyping a suspect line sometimes helps. Look-up in the manual
the correct spelling and check it letter for letter for any BASIC
statements or commands. ( Don't be fooled by CRSLIN or CSRLIN :
which is it ?)

PRINT, STOP AND CONT
In loops and other segments with inter-woven operations, it is often
beneficial to install PRINT commands that will show on the screen or
printer important variables or data that might be clogging the chute.
They can be REMed out temporarily when the trouble is passed. Some
crashes take with it all survivors and don't leave a record on the
screen. Exercise your right to know by installing a STOP just before
the scene of the accident. But don't leave, you can solve it if you
have the patience. The bigger the bug -- the easier they are to find,
sometimes. STOP and CONT can be used to hold the screen for inpection.

Whats wrong? 105 PRUNT " My name is Dhuh, I cannt speel."

We sometimes forget that DOS  allows us to print-out an LLIST for 
say lines 100-120 (LLIST 100-120) without waiting for the entire LIST
to be printed. An up-to-the-instant printout can be very useful in DB.
Printing the line   340 PRINT "PROGRAM IS AT LINE 340" may be handy
in detecting the progress of the program. Placing an apostrophe in
front of the PRINT will convert it to a REM until you use or delete it.

HAND TRACING
When you have tired of eye-ball tracing those fuzzy little green
characters on the screen, then try taking your print-out to a quiet
place and hand trace it. Oddly enough, a pencil is usually needed but
nobody calls it a pencil trace job. By the way do you have a light
hood over your CRT ? It saves eye fatigue, and a corrugated box is
certainly  a low initial cost investment. Tape it to the CRT with
a strong piece of duct tape or other. If you want to get fancy, paint
it black with your kids tempora paints, but standard box-tan works
well. It may be useful to hand calculate and compare results also.

LOOP-DE-LOOPS
Probably one of the greatest sources of gray hair, time delays, 
crashes and many other CPU maladies is the FOR NEXT loop we all love 
so dearly. Please be advised a bad loop may not issue an error message,
instead the CPU may politely ignore it. Unless STEP-1 or some
negative value is used  the loop FOR A = X TO Y where X=7 and Y=-4
will be ignored. Because, "... the initial value of the loop is
more than the final value. "

PARTIAL RUNS IN LONG PROGRAMS
One of the troublesome problems in a complex program being debugged
is sitting through the repeated sections to get to the problem area.
Doing a RUN 200 will start the show on line 200 but the variables and
arrays will not be there. Although it is not listed as a command
by IBM, but a statement,  GOTO line   can be used in direct mode to
debug areas of a program without destroying the variables and arrays.
If you have ever sat through many unnecessary replays of your pro-
grams, unwillingly committing them to memory, you will enjoy using
GOTO line  . It beats putting extra variable definitions into the
program sections to   RUN line  . 

What's wrong?  105 FOR DELAY = 1 TO 10000 : GOTO 65

RETURN TO GROUND ZERO
Since all good programmers faithfully keep back-up copies of all
their work as they progress forward through the stormy night, it is
a simple matter to create a useful system to protect the next to
the last version of your program. One that worked, before you added
the XY4AS-?!@W%$#@* blankety-blank lines to make it better.

By using two drives and alternating from one to the other each time
you save a newer edition you can be assured of having one available
that was free of the latest bugs that you built into it. Its also a
very good procedure to save any change that might hang up and
all memory could be lost in a cold restart. Thus an LLIST of the two
programs, one from each drive will produce hard copies for comparison.

A FUNNY THING HAPPENED ON THE WAY TO THE FORUM
Its often necessary to sit back and laugh at yourself once in a while.
Have you ever made a correction to a line and then carefully run the
program again to check it to find, lo and behold, someone, maybe a 
grinch, changed it back again? No, you aren't imagining things, you
did correct the line, really you did. BUT, you didn't enter it while
you were on the same line and probably moved off with the cursor
arrows to work on another line. Be thankful that it didn't tie all
the lines together like my word processor does when you don't enter
each line promptly, before you leave it.

SOME TYPICAL DEBUG BLOOPERS
If everyone made a list of their own bloopers it would include
the full BASIC vocabulary certainly and variations of every syntax
imaginable. Of course for the organized programmers there are
classifications of bloopers, although most roses, by any other
name, are still roses. They can be either Syntax Errors which the
IBM-PC wont stand for in a program, unless they occur because of
a Run-time Error or keyboard input. Another classification is the
Logic Errors which mean your intentions are good but the CPU can't
fulfill your desires because it doesn't understand them. No crash
but meaningless results.

Some of the Syntax errors are: No closing quote needed if it would
be the last character on the line. But 20 PRINT " HELLO : GOTO 60
won't work. A variable must begin with a letter. An array of over 11
items or multidimensional must be dimensioned before using. Erasing
a non-existant array. Misspelled Commands, Statements, Functions.
The CPU doesn't care if you misspell text ( inside quotes ). And so
the list goes on. I'd like to have a nickel for every blooper.

```
{% endraw %}

## FILES907.TXT

{% raw %}
```
Disk No  907
Program Title:  FUNKYTOOLBOX
PC-SIG version 1
 
    This disk contains numerous utilities for programmers, along with
miscellaneous BASIC programs and text files. Each program is described
individually below.
 
Usage:  Programming Utilities
 
System Requirements: 128K memory, one disk drive and BASIC.
 
How to Start: The files *.TBX and *.BAS must be loaded from BASICA or
GW-BASIC.
 
Suggested Registration:  None
 
File Descriptions:
 
ANYKEY   TBX  Advanced routine for any key to continue.
AINK$    TBX  Controls KYBD for opening files correctly.
AUREVOIR TBX  Flashing panels say a big GOOD-BYE
ASCKEY$  TBX  ASCII Numbers for all keys
ALLCHARS TBX  Displays a hexadecimal table of all screen characters
ARAYCOMP TBX  Compute ARRAY size overhead in DEFSNG-DEFDBL-DEFSTR
ABSECTOR TBX  Converts Track-Sector to absolute sector for DEBUG use
INDEX1   BAS  Index on the files on this disk
FLIPPIES TBX  How to use both sides of your disks
MARKSCRN TBX  Roadmap your display for convenience
SCRNMAP  TBX  Creates a map of the computer screen
LOKATE   TBX  Flashes screen address and points location
COLRTOGL TBX  Switches between MONO and COLOR
TESTEROR TBX  Error trapping demo
BANANA1  TBX  Error trapping ON-OFF routine
ERROR1   TBX  Fun tests the IBM-PC CPU for accuracy
ERROR2   TBX  Tough tests CPU for accuracy
BANANA2  TBX  Error trapping alternative
NICELEGS TBX  How to make legs for your printer
SONGRITR TBX  Easy music from score to CPU
SOUNDZ   TBX  Unusual sounds and musical effects
BLACKOUT TBX  Example of a screen black-out
GSBMUSIC TBX  Background music for your programs
DEBUG    DOC  How to use DEBUG and error trapping
GOBANANA DOC  How to error trap your programs
HORNBOOK DOC  Information on DOS for programmers
PEEKFILE DOC  How to peek into files and ROM with DEBUG
STUFCHIP DOC  How to protect your chips
BROWSE   COM  Utility for viewing text files
TALKPAGE BAS  Why talking pages make reading easier
LETTER   BAS  A letter from PeopleSystems
INDEX2   BAS  Index of the files on this disk
CURSER   TBX  Demo of CRSLIN and POS(0) for bookmarking
ERRMESAG TBX  Shows ERROR messages
ERORNUM  DAT  Data file for ERRMESAG.TBX
INPUTEST TBX  Trap KYBD entry with easy INSTR routine
PEOPLSYS TBX  Big screen opening and closing.  Chains to AUREVOIR.TBX
DISKLABL TBX  Label your disks with wide Directory.  No labels needed
DOLABEL  TBX  Self producing lable program.  Needs printer, but no labels
F5ERRMSG TBX  Print out ERROR messages by pressing F5
NOTENUMB TBX  Makes octave shifts easy
HEXSCALE TBX  Graphics for addressing-nibbles-bytes-segment:offset
MACHLANG TBX  Using POKE and Machine Language complete easy computation
WPROT    TBX  How to unprotect a file to LIST and SAVE it
SOFTKEYS TBX  Loads new F keys for color/mono then erases program
IBMKEYS  TBX  Reloads the F1 to F10 keys the way they were
COMO     TBX  Merge this color/mono subroutine into your program
COLOR    BAS  Separate subroutine to run color
MONO     BAS  Separate subroutine to run mono
COLORBOX TBX  Displays various colored boxes
MEMTEST1 TBX  Tests your computer memory
FUNCTKEY TBX  How to use your function keys
HEX2DEC  TBX  Automatically convert any HEX address to decimal numbers
BASUNPRO TBX  Create machine language to unprotect files
PROTECTD TBX  A protected file for you to practice on
SAVEDLIN TBX  Recovers lost EDLIN file when disk is full
SCRNCHRS TBX  Now see all screen chars, some unmentionables
XMASTREE TBX  Mono graphics and music for the season
BOOBOO   DOC  Improvement for the IBM-PC
DISKMOD  DOC  How to modify a disk with DEBUG
SENSITIV DOC  How to work with people
CLUSECTR TBX  DOS 2.0 conversion of start cluster to absolute sector
FRIENDLY TBX  How to be friendly
DAMNTRIV DOC  Information on PeopleSystems
PEPLSYST BAS  The system of people and computers
README2  DOC  Information on PeopleSystems
WHATISPS DOC  Information on PeopleSystems
README        How to get started
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  Disk No 907 FUNKYTOOLBOX  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ How to Start: The files *.TBX and *.BAS must be loaded from BASICA or   ║
║ GW-BASIC. Please consult your BASIC or GW-BASIC manual for full         ║
║ instructions on how to load a BASIC program on your specific computer   ║
║ system.                                                                 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GOBANANA.DOC

{% raw %}
```
***********************
  ON ERROR GO Bananas
***********************

PEOPLE SYSTEMS, LTD. -- SOFTWARE
Copyright 1983 (c) L. A. Warner

A short tutorial on error trapping and debugging in BASIC. It could
be a fat book if we tried to review the whole subject, but that is not
the intention of this program. We will try to make some sense out 
of the lack of priority in the manuals, and put some perspective
on the subject, for those who are not too familiar with it. For a
definition let us say that the purpose of ERROR handling routines is 
to catch the error and provide a means of handling it and keep the
program running, instead of shutting down when an error message is 
displayed. This is the purpose of error trapping in professional
software.

DEBUGGING  VS.  ERROR TRAPPING
First, let us separate DEBUGGING from ERROR handling so that we can
discuss them independently. Although there is a considerable
overlap, DEBUGGING a program is quite different from trapping run-
time errors in a well debugged program. Or saying it in another way,
ERROR TRAPPING routines should be kept out of a program until the
program has been well planned and executed, and thoroughly debugged.
Don't trap errors if you can conveniently eliminate them.

All program proceedures should be designed to eliminate errors in
keyboard inputs, and in peripheral operations, as well as the expected
program integrity for its intended purposes. There are many examples
in the manuals of how to extract the correct inputs and interfaces
with peripherals. The more experience playing ~what if~ a pro-
grammer has, the better he gets at DEBUGGING. We'll talk about 
DEBUGGING in another article in the series.

LONG PROGRAMS
Let us also eliminate the short programs that we play with for learn-
ing purposes from our consideration. This article is aimed at the big
program that takes 2 -3K or more of disk storage. The principles apply
to the small ones, but their problems are much clearer and easier to
isolate. In fact, one ON ERROR GOTO routine may be all that's needed
for a short program. However, we will recommend ERROR
trapping routines be sectionalized in various parts of  big pro-
grams, instead of trying to write one humongous ON ERROR GOTO
catch-all that can cause all kinds of interactive problems, that may
unravel at the speed of light if stirred up, like a hornet's nest.

Let us assume we have a well debugged program, and we want to keep
the possible peripheral and keyboard errors from causing an error
message that shuts down the program and loses all the work.
For example, one of the common errors to protect against 
is the problem of keyboard inputs that name a file to OPEN it.

FILE NAME ERRORS
Even with a protected input subroutine for keyboard (see VOL 2.0) an
operator can enter a name that is correct but just one letter short and
the CPU will issue an error message like File not found and shut down
with it's quizzical ~OK~. And you know the users are going to sit there
wondering what to do now. An error trapping routine is needed
that lets the operator have another chance to ~TRY AGAIN~ while looking
at the incorrect input string and if possible, the directory of FILES.

TRY AGAIN - VIEW THE PREVIOUS ERROR AND FILES ROUTINE
A simple way to show FILES and encourage correct FILEname type-in.

100 PRINT "PERHAPS YOU WOULD LIKE TO SEE THE FILEnames?"
110 PRINT "LOOK AT THE BOTTOM OF THE LIST FOR THE NAME"
120 PRINT
130 FILES  '**** prints out on screen list of FILEnames ****
140 PRINT
150 PRINT "NOW ENTER THE NAME CAREFULLY"
160 PRINT "TYPE IT THEN ENTER,  EXACTLY AS SHOWN"
170 PRINT
180 ON ERROR GOTO 1000   'error trap in place before input
190 GOSUB 20000              'controlled input routine ( see Vol 2.0 )
200 REM                      'returns WORD$
210 NAME1$ = WORD$           'assigns WORD$ to a $ and saves it
220 OPEN WORD$ FOR INPUT AS #1   'opens NAMEfile for input to program
230 FOR Z = 1 TO 15: INPUT #1, LK1$(Z),DLK1$(Z) : NEXT
240 PRINT    'line above reads disk into arrays LK1$, DLK1$
250 ON ERROR GOTO 0   'turns off the ERROR trapping
260 PRINT "GOOD SHOW -- THAT WAS FINE !" 'read-in completed
*
*
*
999 GOTO XXXX  'this bypasses the ERROR routine following
1000 PRINT " PLEASE, TRY AGAIN ":BEEP : RESUME 170
REM     'simple error routine returns to do it again - don't CLS
*

STUDY THE ERROR MESSAGES
Try this in BASIC-direct mode -  ENTER   ERROR n  -- see the messages.
Of course, IBM-PC Error Messages are shown in Appendix A, but there 
are some errors that are unprintable (31-49). Did you know, the pro-
grammer can create his own error routines and messages by using num-
bers above 200 (See ERROR n  --  page 4-80 in BASIC). IBM-PC's BASIC
is very extensive and error trapping is well supported and elegant.

IBM-PC ROM IS WHERE IT'S AT.
It's all in the 40 K of super ROM that demonstrates IBM's expertise.
Although there have been few articles written on the subject,
I'm sure you're aware that it's IBM's effective ROM and ERROR trapping
and the extended BASIC that makes a programmer's life pleasant. Reviews
comparing RAM sizes and drive capacities and plug-in slots don't
mean much. But DOS, ROM and the elegant BASIC is where IBM-PC's at.

VARIOUS TYPES OF USERS
There are at least three classes of users or operators that must be
considered by the programmer. The highest class of user is the
technical operator, someone of the quality and accuracy of a program-
mer, who can operate the CPU and make sense out of an ERROR and 
probably wouldn't make the same mistake twice. This is a special type
and should not be expected except in high tech software programs. And
the high tech will probably turn it over to his secretary after he gets
tired of playing with it, anyway.

Next in line of decreasing qualification is the secretary who will be
using the program regularly and will develop a facility for operating 
it without too many problems, but she is always being interrupted by
the phone and can not stay at the program for long periods, so she
needs especially clear instructions and prompts at every step.

THE YOUNGSTER IN THE ARCADE
Now, at the other end of the qualification spectrum we have the young
game player, who will, when things get boring, test the programming to
see how he can make it mess-up, if possible. Or the neophyte that 
doesn't pay attention to instructions the first or the second or the 
third time, but expects to be bailed out whenever he gets into trouble.
Obviously, game debugging and ERROR planning is a specialty far beyond
the purview of this short article. Fool-proof programming isn't too
difficult but idiot proofing is almost impossible.

There may be many more types of users in between these extremes, but
of course. The programmer would do well to consider the possible 
nature and quality of the users and plan accordingly. Is the user
under stress at an alarm system? Does the user understand a foreign
language better? Is he young, inexperienced or just having a good
time in an arcade or a tavern? Is it a sensitive subject or are the
users especially sensitive to the subject matter at this time?

So, decide the quality of the expected user and pattern your error and
debugging planning just a little bit more ~friendly~, if you like that
word, and you'll probably have few problems. But assume all users are
as careful and know as much about the program as you do, and you will
doubtless answer many long distance calls from irate consumers of your
products.

BANANA ROUTINES
On this disk there are several short routines that demonstrate some 
of the options in ERROR handling. They all have BANANA n  for a title.
It would be useful to print these out and play with them for a while,
to get familiar with the process. Then come back and read the following
sections for further information.

Incidentally, having read them all thoroughly, one of the better 
books on the IBM-PC is David Lien's  "Learning IBM Basic for the
Personal Computer" .It has a good introduction to ERROR handling. There
is also " A Guide to Programming -- IBM Personal Computer " by Bruce
Presley, that is also well worth owning. If you value your time, own
good reference books, and use them regularly.

TYPICAL ERROR HANDLING ROUTINE
Lets look at a typical ON ERROR handling routine :
                                (added after debugging)
90 REM --- there may have been programming preceding this point.
95 REM --- that didn't require error trapping and handling.
99 REM
100 REM --- program section requiring error routine follows
110 ON ERROR GOTO 1000  'on a small program this might be line 1
120 REM --- program section being trapped starts here
*
900 ON ERROR GOTO 0  ' turns off error trapping when not needed.
950 REM --- end of program section
*
999 GOTO 1200 :REM ---- protects against run-thru and hang-up
*
1000 IF ERR=25 OR ERR = 27 THEN PRINT "SORRY--PRINTER NOT READY":
            PRINT "PLEASE --PRESS RETURN WHEN READY" :INPUT ""; Z$:
            RESUME  0    ' resume at the statement causing error
1010 IF ERR=53 THEN PRINT "TRY THE NAME AGAIN, PLEASE":RESUME 170
*
1200 ON ERROR GOTO 2000  'error trapping for the next program section
1210 REM --- programming begins again

SUMMARY
Important factors that are worth repeating : ON ERROR GOTO line must
precede the error occuring in the program. The error handling routines
should be by-passed by GOTO or END avoiding infinite loops or crashes.
Turn off error trapping when not needed. The requirement for error 
trapping is determined during debugging. Don't trap an error, correct
the programming to eliminate it, if possible. Keep the error messages
simple and polite, of course. Show the error to the operator, so it
can be corrected, run it by  so that the error can be observed.

Generally error routines will interfer with debugging if imposed early.
So dont put them into complex programs until debugging has determined
where they are required. For every good rule, there is usually also
a good exception that " im - proves " the rule. Yes, sometimes 
debugging is helped with the proper error routine to keep from losing
input data from crashes. It might be better to SAVE it to a disk file
instead of confusing debugging with error handling. But in a complex
situation the use of ERL -- error line -- may assist you in debugging.

TYPES OF RESUME STATEMENTS
Study where you want the RESUME statement to take the program.
There are four options : omitting RESUME will restart the program at 
the point the ON ERROR GOTO directed it. If there is no error handling 
routine, it will continue from there. This may be useful for avoiding 
a loop when the operator isn't familiar with the equipment. In fact a
counter C=C+1 with an IF THEN -- RESUME can test whether the
user can recover but after three tries the program proceeds,
perhaps without the printer or other peripheral, if at all possible.

The RESUME ### line should be carefully selected. Are you setting up a 
loop, can the operator recover, if not is there a counter and an escape
route? Don't forget to initialize the counter or it wont work in
between RUNs. Of yes, we ought to remind you that RUN ### will
clear variables and arrays each time, but a GOTO will not, nor will it
reset a counter without the proper instruction, like C=0 in the right
place.

RESUME  or RESUME 0  returns the action to the statement that caused 
error. Which says that in the meantime the error must have been cor-
rected or else a hang-up loop will begin. Do not use RESUME[0].
This unnecessary form RESUME[0] has scared lots of IBM-PC-ers away. It
really wasn't intended to be used in that form ( [] contain optional
data, remember). But IBM would have been better advised to omit [0].

RESUME NEXT is self explanatory, it will restart at the next STATEMENT
after the one causing the error, not the next LINE, so watch multiple
statement lines when using RESUME NEXT.

Happy Error Chasing -- You will find it's easy once you get into it.
Read the section on debugging, note how they overlap.


```
{% endraw %}

## HORNBOOK.DOC

{% raw %}
```
COPY THIS FILE ONTO SEVERAL DISKS AND MAKE A HARD COPY PRINT OUT
*********************************************************************

             E N H A N C E D  D O S   H O R N B O O K 

                IBM-PC  EDLIN      PAGE  I  OF  V

*********************************************************************

The HORNBOOK is another DOS service tutorial in the series titled
DISKLINK-DIRECTORY and is prepared and distributed by PEOPLE SYSTEMS,
LTD.(c) 1983. 78 Maplevale Drive, Woodbridge, CT 06525. 203-393-3913

We call these service programs because they are useful to many people,
and they are easy to learn and use. DOS and EDLIN have many 
powerful facilities that this tutorial is designed to explain and
expand on the DOS manual. With its few minor faults EDLIN is
still worth taking the time to get familiar with even if you own an-
other Word Processor ( W.P.). You already know the keys, so why not?

The HORNBOOK will demonstrate  some enhanced command procedures such
as REPEAT line, MOVE line, SWAP line, and SPLIT line. You will learn
the DOS operation of two keyboard buffers. We will call them command
buffer  and line buffer. After this news we will also offer you some
homespun tips on making your EDLIN usage easier and faster, with less
room for error and confusion. There is a section on EDLIN WARNINGS
that can prove beneficial to DOS users, and finally a "SCORE CARD"
for EDLIN to keep handy for your use. However, you wont need it for 
long after you play with EDLIN and DOS  for a while.

It is interesting to note that several of these commands have been
implemented in DOS 2.0 along with a block move. Try them both ways,
you can still use them  with the F3 key if you don't like the DOS 2.0.
 
Although most IBM-PC users have had practice with some EDLIN usage
and are familiar with the DOS manual, there is no substitute for
practising with sample entries to get acquainted without the pressure
of losing valuable data if an accident occurs. Users have said that 
they tried DOS-EDLIN but gave it up when it lost lines or reversed 
them or lost data when the disk was too full. BASIC has a full-screen
editor that is easier to use, BUT there are no Search or Replace calls.

Of course, salepeople wanted to sell full screen oriented W. P.s and
put down EDLIN because it was a  simple line editor, without a lot
of bells and whistles (that many people never need or use). Perhaps,
because it was free, users took its value lightly and never got fam-
iliar with the super-speed SEARCH and REPLACE commands. They can whiz
through a file almost instantly and come up with the answers before
any BASIC programming could ever complete the task.

We all are familiar with EDLIN's limitations but some aren't aware of
EDLIN's productivity and easy usage, because they didn't try it long
enough to really get over the difficult period during the first few
hours of use. All right, EDLIN doesn't right justify paragraphs, but
EDLIN doesn't reformat the line so that it looks like the typist was
either drunk or stupid. Finding a $ at the end of a line and the num-
bers over on the beginning of the next line is hard to accept.

Users say they want to see the page in final form, before printing.
EDLIN does just this. What you see is what you get. Perhaps, if text,
no numbers, is all you're typing (like a munuscript) a WP may help your
production (full screen editor and text formatting). But, if you are






typing technical work (called statistical typing among the girls) there
are many reasons to stay with EDLIN.

Ever tear your hair out when the W.P. carefully positions a  ( or ) at
end of the line, front or back and worst of all, splits large numbers
on two lines etc.etc. Of course, there are some people who dont use WP
right justify also because a few long words in a line can produce a
print out with more spaces than copy. Hyphenation, the printer's abom-
ination is a slow proceedure in typesetting computers and even worse
in a few MICRO W.P.s . Usually the text has to be printed out to find
the bad line and paragraph breaks. Then the words affected are hyph-
enated and repaired and the print out checking starts all over again.

Edlin doesn't format the printer except MODE can be used for column
width of 132 characters. MXPLUS makes this easy with EDLIN using
manual buttons for printing control.

But let's give EDLIN an opportunity to show its stuff. Its worth the
time and trouble, we believe. For example, EDLIN will format its page
and paragraph breaks easily and if you add or subtract lines later,
its not difficult to adjust the pagination. On 8-1/2 x 11 there are
66 EDLIN lines and you know where each one of them is going. There are
no one word paragraph surprises on the next page with EDLIN. What you
see is what you print-out.

EDLIN FILES
These are usually text files (ASCII) but need not have been prepared 
on EDLIN generally. They can also be source files for programming in
BASIC, FORTRAN, PASCAL, or COBOL. EDLIN will read some BASIC program
files depending on the control characters embedded in them. So if you
try to read a file which EDLIN bob-tails or shortens use  Q )uit to
exit without saving. There is a caution about this later on.

The DOS manual says that EDLIN has a line length of 253 characters. It
does but the IBM printer will print it all on one line, to save paper.
So if you want to be able to read your EDLIN files dont go over length.
The screen prints them properly but the printer needs a line feed and
they are much easier to edit if every line has a number in EDLIN.

NEW EDLIN PROCEDURES -- REPEAT -- SPLIT -- MOVE -- SWAP LINES

DOS doesn't detail these procedures but if you investigate the
line buffer you'll find they are available without much difficulty.
DOS calls the line buffer an input buffer or "template" in the manual.
But on the DOS card its called the "retained" line. They do not mention
the command buffer, that is there to confuse you but is of little use.

REPEAT LINE
This procedure is made simple by the fact that the line buffer holds
each line as it is entered until it is replaced by another line or a
line of spaces. In insert, type a line and enter it. Now on the
next line number press function key F3 and the buffer will print
its contents on that line and the next and the next as long as you
keep entering F3, the same line each time. If you change it, enter it,
the buffer will hold the changed line as entered.

All the function keys for editing work here. F1, F2, F3, and F4 do
what you would expect. Remember, after using F4 to skip over, you must
use F1, or F2, or F3 to put the letters on the line. DO NOT TOUCH F6
It can bobtail your file when you try to read it again. It's a code
for EOF (end of file).





Now how do we make this REPEAT line  go where we want it ? First try 
this. Do a line edit command by typing in the line number that you want
to MOVE. Type it at the command prompt (the leftmost asterisk *_ ).
The entry should look like this    *22  enter  if it is line 22 you
desire. Now F3 enter to put it in the "template buffer" (line buffer).

You have merely confirmed the line without editing and loaded the 
buffer with the line. Now at command prompt  type in a line number 
with  i  after it for insert  23i  and enter. EDLIN will reproduce that
line number in the insert form 23:*   and if you press F3 enter, CTRL-
BK the line in the buffer will be inserted in the line shown. Now you 
have the same line in two places. Do an L enter and determine which
one to delete. Be careful of  D or d  they can be dangerous. Verify
every delete command very carefully. Do a list before and  after every
delete command to see the changed line numbers before you proceed.

SPLIT LINE
To split a line repeat it right above itself and then edit the front
half and insert a line for more words and then insert a blank line for
a paragraph. Then reword the second half line to fill the line or if
you're not that fussy, use it in a bobtailed fashion.

The procedure once more. After any (insert text enter) or (edit line
enter, F3 enter sequence) the buffer holds the last text line entered.
If you enter a line of spaces (no text) the buffer will be empty.
Select line to insert above (17) and enter 17i then F3 enter and the
line will now be on line 17 also and wherever it came from. Each time
you press  F3 enter   in insert mode you will repeat the line. Press
Ctrl-Bk to end insert mode and do an  L (list) to see the results.

You have now REPEATed and MOVEd a line. Practise it. Remember F3 will
only print out in the insert mode, when you have picked a line to put
(insert) it before that line number.

Here is the sequence of commands to REPEAT line 22 before line 7 for
example. Type at the command prompt   *22 enter F3 enter  at the next
command prompt   *7i  enter F3 enter.   Then to kill the insert mode
CTRL-BK . You now have line 22 REPEATed at line 7 . Do an L (list)
to see the effects and the changed line numbers.

SWAP LINE
To swap one line with another: do a REPEAT of lowest line in its new
linenumber. Do an L (list to determine the new numbers). Then REPEAT
the other line in its new position. Do an L (list) and note the lines
to delete.  Do the bottom one first, then the upper delete so as not to
change the line numbers or do a L after every delete to see what line
needs deleting. Doing an L every time is safest and it only takes a 
second to be safe.

EDLIN OPERATING SUGGESTIONS
1.Do not overrun line into the left margin of the screen. If line pops
up, stop typing and slowly backspace  each character on the second
line and count characters to be backspaced on the original line. Back-
space these characters slowly, even though you don't see anything being
deleted. Then enter the corrected line.(Press CTRL-BRK and enter the
corrected line number, to see it). Then, put the dropped letters on
the next line you type, and keep right on going. It works fine, watch.

2. Keep EDLIN lines under 60 - 65 characters when typing them in. Leave
room for editing. Mark screen with felt tip pen at say 64 characters
and last character before overrun. Use vertical lines. They wipe off.





DOS says EDLIN lines can be 253 characters in length. Don't go past
the pop up point. Printer needs line feeds or overrun lines are printed
all on one line. For best results each line should have its own number.
DOS lines are normally up to 128 chars long MAX. Use CTRL-ENTER for LF

4. Always pause in command prompt (col 1 asterisk) to avoid incorrect
entries on the line prompt  nnn:*  If interrupted use E )xitsave.

5. See special regimen for D )elete on "SCORE CARD" to avoid wipe-outs.

6. Use three blank lines at top and bottom of pages. There are 66 lines
per 8.5 x 11 inch page. Format pages by leaving lines 63 to 69 blank,
on the first perforation, 130 to 135 on the second perforation etc.
Enter 60L then 126L then 190L to see the blanks spaces for perf skip.

7. Use period  .  enter for current line. See current line review.
Only use  . (period) enter for line editing. Do not use for delete.

8. Insert  i locates BEFORE the line number used. *10i means before 10
New line becomes number 10.

9. Best rule -- at command prompt use form *17,33L  which means L )ist
lines 17 to 33 inclusive. Do not use space instead of comma.
Its better NOT to use  *,L which means current line (,comma) L )ist.
Commands beginning with a comma can cause wipe-outs in D )elete.
It is preferred not to use  ,  or   #  or  .  commands until you have
mastered the straight single line commands. Never use them in D )elete
Remember, the line number always comes before the l.c. letter.

10. It's easy to confuse command prompt ( * at col 1) with current
line insert prompt  174:*______  (asterisk is at col 8)

11. There will be an asterisk on each new (inserted) line because the
screen buffer holds the line as entered. A List shows the current line
asterisk, or none if it was used with a CTRL-BK.

12. Unless you are purposely deleting a line with ESC its a good habit
to leave an edited line that you want continued with an enter.

13. While typing in a line, if an error is less than half a line back,
backspace and correct it immediately. If further back, finish the line
and enter it. Do a CTRL-BK and enter the error line number. Correct
the line and proceed to insert mode again. Do not use the next level
of proof reading for picking up typing errors, but rather use it for
context and readability. (there may still be some typing errrrors.)

14. Do not use spaces as command separators. Do not use commas to
begin commands. Simplify your alternatives and use the most clear
methods, that do the job.

15. Do a CHKDSK before invoking EDLIN, also do a A>dir first. Examine
A>dir after both E )xitsave and Q )uitNOsave. Look for bob-tailing
or strange entries that don't make sense.

16. If you use F4 to skip over characters to a specified character
there will be no characters shown on the line until you use F1, F2 or
F3 to place them there. If you dont like the F4 choice enter ESC to
get back to original line in template then enter  . period to see 
current line ( the one you are repairing. )







17. WRITE and APPEND only apply to limited memories and super sized 
files, that are not recommended by your favorite egg-basket dropper.
Keep your files short for safety say 10K to 15K seems reasonable with
EDLIN, but the use you put them to is more indicative. More searching
can use longer files. More activities inputting and revising, there 
is more chance for a wipe-out.

DOS -- EDLIN "SCORE CARD"  -- Staple it to your DOS card.
********************************************************************
DOS card entries will not be duplicated unless comment is added.
line means line number   *_ is command prompt   nn:*_ is line prompt
DOS-EDLIN commands may be U.C.(caps) or L.C. Always end with <enter>

PLEASE  DO  A>CHKDSK  AND  A>DIR  BEFORE/AFTER  EDLIN  ALWAYS!
********************************************************************

EDLIN name   Edit or create file -- use short names for clarity.

*line        Linenumb to edit, REPEAT, SWAP, SPLIT,  or MOVE.
             See pages II & III in DOS HORNBOOK

*<enter>     Prints next line after current line for editing

*i (or) I    Starts Insert mode above current line, or 1st, last line

*lineI       Insert above line    USE CTRL-BREAK TO CANCEL INSERT MODE

*lineL       List 22 lines from line number shown.

*line,lineL  List lines specified

*L           List 11 lines before current line and 11 lines after.

*.(period)   Prints current line (w/asterisk) at line prompt nn:*___
             Current line is last line edited, next line after Delete
                 next line after inserted lines.

 ALWAYS      DO AN  L  (list)  BEFORE/AFTER PLANNING OR USING DELETE.

*lineD       Delete line specified only

*line,lineD  Delete range of lines specified 

*D<enter>    Deletes current line  DO NOT USE THIS COMMAND FOR SAFETY

*E<enter>    Exitsave -- always use this to save files.

*Q<enter>    QuitNOsave - leaves no file (use if EDLIN can't read file)

**********************************************************************
(C) PEOPLE SYSTEMS  1983  78 Maplevale Drive
Woodbridge, CT 06525   203-393-3913
**********************************************************************

```
{% endraw %}

## INDEX1.BAS

{% raw %}
```bas
10 REM---~INDEX1~---Index for Programmer's Toolbox 1.1
15 CLS :KEY OFF
16 P=1
20 COLOR 0,7:LOCATE 4,20 :PRINT "  FUNKY PROGRAM TOOL BOX - INDEX SHEET 00  ":COLOR 7,0
30 COLOR 15: LOCATE  6,19 :PRINT "TO MAKE SUBROUTINES TO MERGE WITH PROGRAM":COLOR 7
35 LOCATE  8,10 :PRINT "1. Find location for subroutine in program, say 7000-8000
40 LOCATE 10,10 :PRINT "2. LOAD ~subrtn~ into memory.
50 LOCATE 12,10 :PRINT "3. Clean out extra lines, etc.
60 LOCATE 14,10 :PRINT "4. RENUM to fit into your program -- start 7000-8000
70 LOCATE 16,10 :PRINT "5. SAVE~Asubrtn~,A in ASCII to merge into program
75 LOCATE 18,10 :PRINT "6. LOAD your program again and recheck 7000- for subrtn
80 LOCATE 20,10 :PRINT "7. Enter MERGE ~Asubrtn~ in direct mode.
90 LOCATE 22,10 :PRINT "8. Check 7000- in your program -- ITS DONE.
92 LOCATE 24,10 :PRINT "9. Put in GOSUB 7000's where needed and check RETURN.
95 GOSUB 1000
100 PRINT "SOUNDZ.TBX"TAB(20)"Unusual sounds and musical effects
110 PRINT :PRINT "SONGRITR.TBX"TAB(20)"Easy music from score to CPU
120 PRINT :PRINT "GSBMUSIC.TBX"TAB(20)"Background music for your programs.
130 PRINT :PRINT "MARKSCRN.TBX"TAB(20)"Roadmap your display for convenience.
150 PRINT :PRINT "FLIPPIES.TBX"TAB(20)"Now you can use both sides of your disks
160 PRINT :PRINT "COLRTOGL.TBX"TAB(20)"MONO to COLOR and back is easy.
170 PRINT :PRINT "NICELEGS.TBX"TAB(20)"Does your printer have nice legs?
180 PRINT :PRINT "BLACKOUT.TBX"TAB(20)"Delays, time-out, black-out.
200 GOSUB 1000
210 PRINT :PRINT "PLEASE NOTE: THESE ARE .DOC PROGRAMS. THEY WILL RUN A>TYPE filename.DOC         AND IF YOU WANT A PRINT A COPY TO STUDY --PRESS Ctrl-PrtSc BEFORE YOU ENTER.
220 PRINT:COLOR 15:PRINT "GOBANANA.DOC";:COLOR 7:PRINT TAB(20)"This is easy reading; broad scale tutorial - ERROR Traps.":PRINT "It helps describe the simple steps to include error trapping in your programs.
230 PRINT :COLOR 15:PRINT "DEBUG.DOC";:COLOR 7:PRINT TAB(20)"Not the same as ERROR trapping DEBUG helps git them gremlins":PRINT "When should you trap errors and when do you debug? What is the difference?
240 PRINT :COLOR 15:PRINT "HORNBOOK.DOC";:COLOR 7:PRINT TAB(20)"A treasure house of programmers goodies reside in DOS.":PRINT "Access the super search and replace commands and learn some new EDLIN commands
250 PRINT :COLOR 15:PRINT "PEEKFILE.DOC";:COLOR 7:PRINT TAB(20)"Peek into files and ROM using powerful DOS utility DEBUG":PRINT "You can explore any memory address or any disk sector with this great tool.
300 GOSUB 1000
310 PRINT "ERROR1.TBX"TAB(20)"FUN tests the IBM-PC  CPU for accuracy.
320 PRINT:PRINT "ANYKEY.TBX"TAB(20)"Advanced routine for any key to continue.
330 PRINT:PRINT "SCRNMAP.TBX"TAB(20)"Never get lost again !
340 PRINT:PRINT "TESTEROR.TBX"TAB(20)"Error trapping demo.
350 PRINT:PRINT "LOKATE.TBX"TAB(20)"Flashes screen address and points location
360 PRINT:PRINT "BANANA1.TBX"TAB(20)"Error trapping  ON - OFF routine
370 PRINT:PRINT "BANANA2.TBX"TAB(20)"Error trapping alternative.
380 PRINT:PRINT "ERROR2.TBX"TAB(20)"Tough tests CPU for accuracy.
400 GOSUB 1000
405 LOCATE 10:COLOR 15:PRINT "PEPLSYST.BAS":COLOR 7:PRINT TAB(20)"When is a PERSONAL computer like a PEOPLE system ?" :PRINT :PRINT "Think of the software as a link between PEOPLE and the COMPUTER - a SYSTEM.
410 LOCATE 15:COLOR 15:PRINT "TALKPAGE.BAS":COLOR 7:PRINT TAB(20)"Why Talking Pages makes reading lots easier.":PRINT :PRINT "Better communications with a modern printing system and your great IBM-PC.
420 LOCATE 20:COLOR 15:PRINT "LETTER.BAS":COLOR 7:PRINT TAB(20)"A meesage to Friends of PeopleSystems.":PRINT :PRINT "We want our friends to be satisfied without any fine print standing in the way.
500 GOSUB 1110
999 END
1000 REM page routine
1010 GOSUB 1100
1030 CLS
1033 PRINT TAB(10)"JOT DOWN THE FILENAME YOU WANT -- NOTE EXTENSION .DOC or.TBX
1035 PRINT :PRINT TAB(10)"PRESS ESC TO GO BASICA - LOAD ~FILENAME.TBX~ AND LIST
1038 PRINT "IF YOU WANT TO VIEW filename.DOC THEN ENTER system -- FOLLOW DIRECTIONS SHOWN
1040 COLOR 15:PRINT :PRINT TAB(20)"FUNKY PROGRAM TOOLBOX INDEX SHEET ";P
1042 PRINT :PRINT "FILENAME                    DESCRIPTION OF PROGRAM
1043 P=P+1
1045 COLOR 7
1050 RETURN
1100 REM any key routine
1105 LOCATE 25,20 :PRINT "FOR NEXT PAGE OF INDEX PRESS ANY KEY";
1110 X$=INKEY$:IF X$="" THEN 1110
1115 IF X$=CHR$(27) THEN 2000
1117 FOR Q=1 TO 15:X$=INKEY$:NEXT
1120 SOUND 1500,2: SOUND 2000,3
1130 RETURN
2000 REM---EXIT ROUTINE
2005 PRINT
2008 FILES
2010 COLOR 15:PRINT "YOU ARE IN BASICA - LOAD ~filename.TBX~ <enter> and LIST
2020 PRINT :PRINT "OR FOR filename.DOC ENTER SYSTEM AND A>type filename.DOC <enter>
2025 PRINT :PRINT "to printout a copy in DOS -- press Ctrl-PrtSc before <enter>
2030 COLOR 7
2040 END
```
{% endraw %}

## INDEX2.BAS

{% raw %}
```bas
10 REM---~INDEX2~---Index for Programmer's Toolbox 2.0
15 CLS :KEY OFF
16 P=1
20 COLOR 0,7:LOCATE 4,20 :PRINT "  FUNKY PROGRAM TOOLBOX INDEX2 SHEET 00  ":COLOR 7,0
30 COLOR 15: LOCATE  6,19 :PRINT "TO MAKE SUBROUTINES TO MERGE WITH PROGRAM":COLOR 7
35 LOCATE  8,10 :PRINT "1. Find location for subroutine in program, say 7000-8000
40 LOCATE 10,10 :PRINT "2. LOAD ~subrtn~ into memory.
50 LOCATE 12,10 :PRINT "3. Clean out extra lines, etc.
60 LOCATE 14,10 :PRINT "4. RENUM to fit into your program -- start 7000-8000
70 LOCATE 16,10 :PRINT "5. SAVE~Asubrtn~,A in ASCII to merge into program
75 LOCATE 18,10 :PRINT "6. LOAD your program again and recheck 7000- for subrtn
80 LOCATE 20,10 :PRINT "7. Enter MERGE ~Asubrtn~ in direct mode.
90 LOCATE 22,10 :PRINT "8. Check 7000- in your program -- ITS DONE.
92 LOCATE 24,10 :PRINT "9. Put in GOSUB 7000's where needed and check RETURN.
95 GOSUB 1000
100 PRINT :PRINT "HEXSCALE.TBX"TAB(20)"Graphics for Addressing-nibbles-bytes-segment:offset
110 PRINT :PRINT "XMASTREE.TBX"TAB(20)"Mono graphics and music for the season.
120 PRINT :PRINT "CURSER.TBX"TAB(20)"Interactive, demo of CRSLIN and POS(0) for bookmarking
130 PRINT :PRINT "PEOPLSYS.TBX"TAB(20)"Big screen opening and closing - chains to AU REVOIR
140 PRINT :PRINT "AUREVOIR.TBX"TAB(20)"Flashing panels say a big GOOD-BYE -see  above.
150 PRINT :PRINT "SCRNCHRS.TBX"TAB(20)"Now see all screen chars, some unmentionables
160 PRINT :PRINT "ERRMESAGE.TBX"TAB(20)"Shows ERROR messages - bookmarks place in ERORNUM.DAT
200 GOSUB 1000
210 PRINT :PRINT "PLEASE NOTE: THESE ARE .DOC PROGRAMS. THEY WILL RUN A>TYPE filename.doc          AND IF YOU WANT A PRINT A COPY TO STUDY --PRESS Ctrl-PrtSc BEFORE YOU ENTER.
220 PRINT :COLOR 15:PRINT "BOOBOO.DOC";:COLOR 7:PRINT TAB(20)"Will the real IBM-PC BooBoo please stand up! ":PRINT "As great as it is -- there is need for improvement in one important area.
230 PRINT :COLOR 15:PRINT "DISKMOD.DOC";:COLOR 7:PRINT TAB(20)"Modify a disk with the DEBUG powerhouse.":PRINT "How to recover one sector file and access Directory and FAT.":PRINT "SEE ABSECTOR.TBX and CLUSECTR.TBX for absolute sectors."
240 PRINT :COLOR 15:PRINT "SENSITIV.DOC";:COLOR 7:PRINT TAB(20)"Sensitive people and sensitive subjects":PRINT "How to work with and get the best out of people, without blowing the program.
250 PRINT :COLOR 15:PRINT "THE FOLLOWING ARE ~filename.TBX~ files in BASICA."
260 PRINT :PRINT "SAVEDLIN.TBX";:COLOR 7:PRINT TAB(20)"Recovers lost EDLIN file when Disk is Full.
270 PRINT :COLOR 15 :PRINT "FRIENDLY.TBX";:COLOR 7:PRINT TAB(20)"You can be friendly without being sticky.
300 GOSUB 1000
305 PRINT :PRINT "DISKLABL.TBX"TAB(20)"Label your disks with wide Directory -- No labels needed
308 PRINT :PRINT "DOLABLE.TBX"TAB(20)"Self producing lable program -- needs printer -- no lables
310 PRINT :PRINT "ABSECTOR.TBX"TAB(20)"Converts Track-Sector to Absolute sector for DEBUG use.
320 PRINT "CLUSECTR.TBX"TAB(20)"DOS 2.0 Conversion of start cluster to Abs. Sector
330 PRINT :PRINT "AINK$.TBX"TAB(20)"Controls KYBD for opening files correctly.
340 PRINT :PRINT "INPUTEST.TBX"TAB(20)"Trap KYBD entry with easy INSTR routine
350 PRINT :PRINT "F5ERRMSG.TBX"TAB(20)"Print out ERROR messages by pressing F5
360 PRINT :PRINT "NOTENUMB.TBX"TAB(20)"Makes Octave shifts easy -- Nn chart
370 GOSUB 1000
400 PRINT "MACHLANG.TBX"TAB(20)"Using POKE and Machine Language complete easy computation.
410 PRINT :PRINT "WPROT.TBX"TAB(20)"How to Unprotect a file to LIST and SAVE it
420 PRINT :PRINT "ASCKEY$.TBX"TAB(20)"ASCII Numbers for all keys -- learn about new F keys
430 PRINT :PRINT "SOFTKEYS.TBX"TAB(20)"Loads new F keys for Color/Mono then ERASES program
440 PRINT :PRINT "IBMKEYS.TBX"TAB(20)"Reloads the F1 to F10 keys the way they were
450 PRINT :PRINT "COMO.TBX"TAB(20)"Merge this color/mono subroutine into your program.
460 PRINT "COLOR.BAS"TAB(23)"These are separate subroutines to RUN~COLOR or RUN~MONO
470 PRINT "MONO.BAS"TAB(30)"When you get stuck and need it fast.
475 PRINT :PRINT "ALLCHARS.TBX"TAB(20)"Color or Mono -- charts all screen chars - unmentionables
490 GOSUB 1000
500 PRINT :PRINT "COLORBOX.TBX"TAB(20)"Demos Color combinations - copy down the ones you like.
510 PRINT :PRINT "MEMTEST1.TBX"TAB(20)"DANGER ** MEM WORKING ** tests memory for ERROR
520 PRINT :PRINT "ARAYCOMP.TBX"TAB(20)"Compute ARRAY size overhead in DEFSNG-DEFDBL-DEFSTR
530 PRINT :PRINT "FUNCTKEY.TBX"TAB(20)"Demos over 60 IBM function keys with a WILD WESTERN...drama?
540 PRINT :PRINT "HEX2DEC.TBX"TAB(20)"Automatically convert any HEX address to decimal numbers
550 PRINT :PRINT "BASUNPRO.TBX"TAB(20)"Create machine language to Unprot files.-LIST first.
560 PRINT :PRINT "PROTECTD.TBX"TAB(20)"A Protected file for you to practice on -NO write protect!
700 GOSUB 1110
999 END
1000 REM page routine
1010 GOSUB 1100
1030 CLS
1033 PRINT TAB(10)"SELECT THE filename YOU WANT -- NOTE EXTENSION .DOC or.TBX
1035 PRINT :PRINT TAB(10)"PRESS ESC TO GO BASICA - LOAD ~filename.TBX~ AND LIST
1038 PRINT "IF YOU WANT TO VIEW filename.DOC THEN ENTER system -- FOLLOW DIRECTIONS SHOWN
1040 COLOR 15:PRINT :PRINT TAB(20)"FUNKY PROGRAM TOOLBOX INDEX2 SHEET ";P
1042 PRINT :PRINT "FILENAME                    DESCRIPTION OF PROGRAM
1043 P=P+1
1045 COLOR 7
1050 RETURN
1100 REM any key routine
1105 LOCATE 25,20 :PRINT "FOR NEXT PAGE PRESS ANY KEY - ESC TO BASICA";
1110 X$=INKEY$:IF X$="" THEN 1110
1115 IF X$=CHR$(27) THEN 2000
1117 FOR Q=1 TO 15:X$=INKEY$:NEXT
1120 SOUND 1500,2: SOUND 2000,3
1130 RETURN
2000 REM---EXIT ROUTINE
2005 PRINT
2008 FILES
2010 COLOR 15:PRINT "YOU ARE IN BASICA - LOAD ~filename.TBX~ <enter> and LIST
2020 PRINT :PRINT "OR FOR ~filename.DOC~ ENTER SYSTEM AND A>type filename.DOC <enter>
2025 PRINT :PRINT "to printout a copy in DOS -- press Ctrl-PrtSc before <enter>
2030 COLOR 7
2040 END
```
{% endraw %}

## LETTER.BAS

{% raw %}
```bas
10 REM---"LETTER.BAS"---
15 GOTO 110
100 CHAYNBAK$="YES"
110 CLS: KEY OFF
120 PRINT :PRINT "DEAR FRIENDS
130 PRINT :PRINT "Thank you for TRYING --PEOPLE SYSTEMS, LTD.  SOFTWARE FOR IBM-PC  
140 PRINT :PRINT "We hope you will be a regular user of PEOPLE SYSTEM'S, LTD. WARMWARE.           It is a new concept. If you haven't already done so, RUN ~TALKPAGE~             and~PEPLSYST~ to learn more of our philosophy.
150 PRINT :PRINT "As you can easily see we are working hard to produce a unique and               useful product, one that is ahead of it's time, low priced, but with            full service and support.
160 PRINT :PRINT "We believe that PEOPLE SYSTEMS, LTD. has a LOCK on the better interface         to WARMWARE without FLASH or FANFARE.
170 PRINT :PRINT "We want our customers to be happy with our products. We will appreciate         receiving your feed back, either good or bad, after you have used the           product and are familiar with it. (See below) If you send us a
180 PRINT "disk, with your comments and a post-paid return mailer, we will send you        any updates or other suggestions we receive from other users.
190 GOSUB 430: CLS
200 PRINT "BASIC LANGUAGE IS THE BEST MICRO LANGUAGE"
210 PRINT "We believe that regardless of the contradictory statements by the               special interest people, compiler salemen, high priests of DATA                 PROCESSING and well meaning editorial people who don't really
220 PRINT "investigate their recommendations (that they just read in another               magazine) we sincerely believe that BASIC is the BEST language                  for PERSONAL COMPUTERS.
230 PRINT :PRINT "BASIC is interactive and quick to correct-- BASIC is the most used              and best understood of them all -- BASIC is the most extensive and              growing every day. BASIC can be easily compiled and if loops are ";
240 PRINT "too slow, machine or assembler language subroutines may be substituted."
250 PRINT :PRINT "At one time BASIC was limited, unreliable and slow. BUT, not any more.          We made a comparative study in ~Practical BASIC Programs~ and sister book       ~Practical Pascal Programs~. These are well written programs but it takes
260 PRINT "almost 50 percent more programming keystrokes to do it in Pascal, not to        mention the lost time getting error reports deciphered and repairing the        code so that it will run. In IBM Pascal and others there is no graphics"
270 PRINT "no music, and many BASIC tools are missing like TRON and ON KEY."
280 GOSUB 430
290 PRINT : PRINT "Yes, Pascal is fast--when you get it all together.BUT, Compiled BASIC is        FAST and EASY. You don't need a degree in DATA PROCESSING to make it work.
300 PRINT "Colleges can't support BASIC because of its interactive demand for              processor run-time. But everyone in college can own a micro and enjoy           the tremendous benefits of BASIC.
310 PRINT :PRINT "Not all BASIC is good BASIC -- but then neither is ALL Pascal.
320 PRINT :PRINT "With my personal best wishes for your continued interest in PEOPLE SYSTEMS      in your daily experiences.
330 PRINT
340 PRINT "Yours sincerely,
350 PRINT :PRINT "LOU WARNER
360 PRINT
370 PRINT "POST SCRIPT
380 PRINT "After you have become familiar with the program and have used it enough         to form an intelligent opinion, and you are NOT satified, then please           write for a copy of our MERCHANDISE RETURN QUESTIONNAIRE -- fill it out
390 PRINT "completely, so that we may understand exactly why you were disappointed         in the WARMWARE. Then pack all the materials safely in their wrapper and        return it to us with the QUESTIONNAIRE for a full refund of your purchase.
400 GOSUB 430
425 GOTO 500
430 LOCATE 25,1 :PRINT TAB(20);"PRESS ANY KEY TO CONTINUE -- ESC FOR MENU";
440 FOR N=1 TO 15 : I$=INKEY$ : NEXT
450 I$=INKEY$: IF I$="" THEN 450
455 IF I$=CHR$(27) THEN 500
460 LOCATE 25,20 :PRINT "                                               "
470 SOUND 2000,2 : SOUND 2500,3
480 CLS
490 RETURN
500 IF CHAYNBAK$="YES" THEN 505
502 PRINT "YOU ARE IN BASICA" :END
505 CHAIN "MENU",325,ALL
```
{% endraw %}

## MONO.BAS

{% raw %}
```bas
31000 REM---SAVE"MONO.BAS"   -----return to mono
31010 KEY OFF
31020 WIDTH 40: DEF SEG=0:A=PEEK(&H410):   POKE &H410,A OR &H30
31030 SCREEN 0:WIDTH  80:LOCATE 1,1,1,12,13
31040 NEW
```
{% endraw %}

## PEEKFILE.DOC

{% raw %}
```
   

***************************************************************

     P E E K I N G   I N T O   F I L E S   A N D   R O M 

***************************************************************

              PEOPLE SYSTEMS, LTD. (C)1983

Have you tried the X-RAY machine program in your IBM-PC ? Perhaps
you know it by another name. Its officially called DEBUG in DOS, but
it has the longest nose of any software around. All you have to do
is learn where things are kept and how to control its ability to get 
into mischief and you've got the finest tool for learning about 
your IBM-PC a little at a time.

A map -- a map -- my kingdom for a map. Well without being too dramatic
there really aren't any in the manuals. Lots of address lists here and
there but a good old fashioned road-map is needed. Maybe before we get 
through we'll develope one and you can print it out and put it up on
your operating room wall. But for now, pick up your IBM manual and 
look at what's there. It will give you a general idea of how the memory
is utilized in the PC and on the screen and graphic boards. (Both have 
about 16 Kbytes in addition to your own plugged in chips.)

Incidentally, adding RAM to your empty boards is not very difficult,
in fact, if you look for it you'll find a tutorial STUFCHIP
included in Programmer's Toolbox. Chips are available from good and
dependable dealers like Microprocessors Unlimited in Beggs. OKlahoma
ZIP 74421. Mr. John Gilchrist will give you good service and quality
parts you can depend on at (918)267-4961. His prices and chips are the
best around and he'll stand behind them if you need help.
 
Since we are going to be looking into both files and ROM we should get 
familiar with DEBUG's  LOAD  command. If you find it under DEBUG in DOS
and take a look you'll find there are several options (isn't that 
always the way). There are 2 options and No.2 has two formats. Lets do
Option 1 first. We used this in DISKMOD.DBG to recover a small, just
erased file. You may want to try that for an experiment. Please make
a TEST disk by DISKCOPY for fooling around purposes. DEBUG can really
screw up a Directory or FAT (File Allocation Table) if you're not
careful. But on a test disk you can't harm anything permanently.
If you remember, the LOAD command we used for disk sectors was in HEX
     
                -L 04B5:0100   0   3   4          <enter>

It means   -   (hyphen-DEBUG prompt)  04B5:0100 (hex address DOS 1.1 in
segment:offset )     0   means Drive A:   3 (starting sector on disk --
absolute)    4 (LOAD 4 sectors). In this example the HEXidecimal and
the decimal numbers are the same (up to 9). This is DOS 1.1 address.
04B5:0100 may be different in DOS 2.0.

This command LOADed the disk Directory which occupies sector numbers
3, 4, 5, 6, in that order. (there are 40 tracks with 8 sectors @ 512 
bytes each on IBM-PC 160 Kbyte SS drives--this adds up to sectors 0-319
in absolute numbers). Sector 0 is the boot sector and sector 1-2 is the
FAT (File Allocation Table).

Converting Track - Sector to absolute sector is not difficult. Tracks 
run from 0 to 39 on a 40 track disk there are 8 sectors on each track
and, in this case,  are numbered 1 thru 8 (just to be cute). So to 
convert DOS 1.1 SS say Track 10 Sector 6 to absolute sector use:

              (8 * Track No. +  Sectors) -1 = Absolute sector

In this case  (8 *  10       +    6)     -1  =  85
Of couse if you want absolute sectors 85 to 95 inclusive  there are 11.
Do it on your fingers if you have trouble -- really.
The fingers are the world's oldest Abacus. (Chinese bead computer)

Sometimes it helps to see it graphically:

THIS IS A DISK INITIALIZED WITH FORMAT/S (SYSTEM AND COMMAND.COM INCL.)

        This is a single sided disk - 8 sectors per track DOS 1.1

Track   Sector  Abs.Sector      File

  0	  1	  0		BOOT record  Part of System in Format/s
  0       2       1             File Allocation Table
  0       3       2             FAT second copy -- same as 2
  0       4       3             Directory
  0       5       4             Directory
  0       6       5             Directory
  0       7       6             Directory
  0       8       7             IBMBIO.COM (OR DATA-if FORMAT NOT/S)
NEXT    Sector 8  above is called Cluster 002 -- beginning of DATA
  1       1       8             IBMBIO.COM
  1       2       9             IBMBIO.COM
  1       3       10            IBMBIO.COM
  1       4       11            IBMDOS.COM  FIRST SECTOR OF IBMDOS.COM
  1       5       12            IBMDOS.COM
  1       6       13            IBMDOS.COM
  1       7       14            IBMDOS.COM
  1       8       15            IBMDOS.COM
NEXT
  2       1       16            DO
  2       2       17            DO
  2       3       18            DO
  2       4       19            DO
 (we have skipped a few lines of monotony)
  2       8       23            LAST SECTOR OF IBMDOS.COM
NEXT
  3       1       24            COMMAND.COM BEGINS

COMMAND.COM CONTINUES FOR 12 SECTORS
NEXT
  4       4       35            COMMAND.COM ENDS
  4       5       36            YOUR PROGRAM OR DATA BEGINS

  
MANY - MANY SECTORS LATER 
  
  39      8       319           LAST SECTOR AVAILABLE ON SS DISK

D.S.D.D. records each track front and back before proceeding to next.
There are 40 tracks (0-39) front and back and the disk drive covers 
Track 0 side 0 then Track 0 side 1 and goes back to the front(0) and 
moves to Track 1 side 0 then track 1 side 1 then T1-S0, T1-S1, 
T2-S0, T2-S1 etc. across the disk, reducing unnecessary head travel.

It would be easier to fathom  the arrangement IBM-PC chose 
if these terms were in rational order as they should have been. The 
progression logically is SIDE 0,1 TRACK 0-39 and SECTOR 1-8 but because
every one was used to working without a side number, IBM moguls added
the side designation to the end of the train instead of up front where
it belongs.

Double sided disks have a slightly different format -- they add 3 more
sectors to the Directory beginning at Track 0 sector 8 side 0, then on
back, Track 0 Sectors 1,2 Side 1, splitting the directory S0,S1. All of
the track 0 operations above take place on single sided disks. But the
system/data files don't start until Track 0 sector 3 side 1 (backside),
(on D.S.D.D. Disks).

DOS 1.1 is more complicated to compute the absolute sector number on 
double sided disks. D.S. disks use each track front and back before 
proceeding to the next track. DOS 2.0 increases the storage and the
problem, adding another sector to each track making it 9 instead of 8.

Sector numbering for debug is changed in DOS 2.0 -- so we will 
take that up. Just compare page 6-8 in DOS 1.1 with  12-11 in DOS 2.0
and if that doesn't confuse you for a while, I'll eat my IBM-PC. But,
they are now making the relative numbering (absolute) follow the
head and side counting system, as it should have been.

Try ABSECTOR.TBX and CLUSECTOR.TBX for computing on ToolBox disks.

Now there are 9 sectors on 40 Tracks (0-39) on Side 0 and Side 1 or 
9 * 40 * 2 = 720 sectors total. At 512 bytes per sector gives
a grand total of 720 * 512 = 368,640 bytes OR 2,949,120 Bits.
    
At 6 characters per word this is over 60,000 words. WOW, most folks
don't need a hard disk unless they have a humongous data base and 
people who are constantly entering data and maintaining the files,
like accessing a mainframe's database (as some PC's do.)

Why, 60,000 words is a paperback's  (about 160 pages) worth of memory
on a D.S.D.D.disk. Technical data recording, like analog to digital 
could produce a large amount of data storage. But the average computer
user might do well to avoid the expense and dubious advantages of a
hard disk. Who wants all their eggs (programs) in one basket with
no easy back-up?

In case you aren't  interested in getting a fixed disk (IBM jargon).
Here is a table from page C-2 in DOS 2.0 that will explain the vagaries
of 1 or 2 sides and 8 or 9 sectors. We have added the last column for
ease in computing absolute sectors from cluster numbers.

No. of   Sectors/  FAT size    DIR       DIR      Sectors/  Sector No.
Sides    Track      Sectors    Sectors   Entries   Cluster  Begin Data

1          8          1 * 2       4         64        1         6
2          8          1 * 2       7        112        2         9
1          9          2 * 2       4         64        1         8
2          9          2 * 2       7        112        2         11

Notice the change from  DOS 1.1 . Fat was 2 sectors -- each containing
a separate copy of FAT so that if one copy was unreadable there was an-
other. Now the FAT is two sectors times two copies for DOS 2.0 nine
sector disks. This change accompanied relative (absolute) renumbering
mentioned above in DOS 2.0.

In DOS 1.1 there is a table converting clusters to relative segments.
The pages begin on C-9 and cover single and double sided disks.
To convert a starting cluster (from Directory) to a "logical" sector
number used by DEBUG do the following in DOS 2.0.

1. Subtract 2 from the cluster number (first cluster of data is 002)
2. Multiple this result by the number of sectors/cluster.(1 or 2)
3. Add number of sectors to the beginning of data area. (Table above,
last column.)


               COMPOSITE MEMORY MAP FOR THE IBM-PC


0000:0000_____( 1.5 K ROM )
         @@@
         XXX    64K RAM    )<---------
         XXX               |  SEE DETAIL
0FFF:0000XXX____________   |     "A"
  65,536 XXX               |   96 K UNIT
         XXX    64K RAM    )<---------
         |X|
1FFF:0000|X|____________
 131,072 |X|
         |X|    64K RAM
         |X|
2FFF:0000|X|____________
 196,408 |X|
         |X|    64K RAM
         |X|
3FFF:0000|X|____________
 262,144 |O|
         |O|    DO                    NOTE ADDRESSES
         |O|
4FFF:0000|O|____________
 327,680 |O|
         |O|    DO                    ARE APPROXIMATE
         |O|
5FFF:000 |O|____________
 393,216 |O|
         |O|    DO                  USE DEBUG AND MANUALS
         |O|
6FFF:0000|O|____________
 458,752 |O|
         |O|    DO                        FOR EXACT
         |O|
7FFF:0000|O|____________
 524,288 |O|
         |O|    DO                        ADDRESSES.
         |O|
8FFF:0000|O|____________
 589,824 |O|
         |O|    DO
         |O|
9FFF:0000|O|____________
 655,360 |O|    16K RESERVED
         |0|
         |0|    48K RESERVED
B000:0000|0|____________
 720,896 XXX    16K MONO SCREEN     )<--------
B800:0000|O|    16K EXPANSION       |  SEE DETAIL
 753,664 XXX    16K COLOR/GRAPHICS  |      "B"
BFFF:0000|O|____16K EXPANSION       )<--------
 786,432 |O|
         |O|    64K RESERVED
         |O|
CFFF:0000|O|____________
 851,986 |O|
         |O|    64K RESERVED
         |O|
DFFF:0000|O|____________
 917,504 |O|
         |O|    64K RESERVED
         |O|
EFFF:0000|O|____________
 983,040 |O|    16K RESERVED        )<---------
         @@@    8K ROM SOCKET       |  SEE DETAIL
         @@@    32K ROM BASIC       |      "C"
FFFF:0000@@@____8K ROM BIOS         )<--------
1,048,576



   DETAIL "A"  DOS 1.1 & BASICA              DOS 1.1 & DEBUG.COM

      0000:0000_________________________________0000:0000_____________
                 @@@@    SYSTEM ROM 1.5 K Bytes            @@@@
      0060:0000  O~~O    BOOT-DISK RTN 600 Bytes           O~~O
                 OXXO                                      OXXO
                 OXXO    IBMBIO.COM IBMDOS.COM             OXXO
                 OXXO         COMMAND.COM                  OXXO  DOS1.1
                 OXXO    DOS 1.1 ABOUT 12 K                OXXO   
      PS:0000    OxxO    dos work space 256 bytes          OxxO
16 K  PS:0100   _OXXO_                                    _OXXO_      
                 OXXO                                      OXXO  DEBUG
  PS=DOS prog    OXXO                                      OXXO    6K
   segment       OXXO                                      OXXO
                 OXXO    BASICA (ADV) EXT                  OXXO  EDLIN
                 OXXO         about 13 K                   OXXO--------
     DS:0000-----OXXO------------------------              OXXO
                 OXXO   BASIC INTERPRETER                  OXXO
32K  DS:xxxx    _OXXO_    WORK AREA 4K  ----O----         _OXXO_  PROG-
                 OXXO                       |              OXXO
                 OXXO  _BASIC PROGRAM MIN.  |              OXXO   RAM
  DS=BASIC DATA  OXXO |     variables      MIN             OXXO
    SEGMENT      OXXO |     arrays        PROGRAM          OXXO
  xxxx @         OXXO |     string space    |              OXXO
   DS:30 Lo      OXXO |     basic stack     |              OXXO
   DS:31 Hi      OXXO |                 ----X----          OXXO
48K              OXXO |                     |             _OXXO_    
                 OXXO |-BASIC PROGRAM MAX.  |
   DS:yyyy_______OXXO_|                     |
  yyyy @         OXXO                    MAXIMUM       DETAIL "A"
   DS:358 Lo     OXXO                       |         -------------
   DS:359 Hi     OXXO                       |         DOS W/ DEBUG
                 OXXO                       |        (SAVEDLIN.TBX)
                 OXXO    V A R I A B L E S  |
64 K Bytes      _OXXO_                      |
                 OXXO                       |
                 OXXO                    PROGRAM
                 OXXO                       |
                 OXXO    A R R A Y S        |
                 OXXO                       |
                 OXXO                       |
                 OXXO                       |
80 K Bytes      _OXXO_                      |
                 OXXO                       |
                 OXXO    STRING SPACE       |
                 OXXO                       |
                 OXXO                       |
                 OXXO    BASIC STACK        |       512 BYTES OR SET 
                 OXXO                   ----O----        BY CLEAR
                 OXXO
96 K Bytes      _OXXO_    
                 OXXO
                 OXXO
                 OXXO
                 OXXO
                 OXXO
                 OXXO

            DETAIL "A" DOS 1.1 
            ------------------
                 & BASICA







     DETAIL "B"  DISPLAY CARD'S RAM
     --------------------------------
                 OXXO
                 OXXO
                 OXXO
                 OXXO    48K RESERVED
                 OXXO
                 OXXO
                 OXXO
B000:0000 _______OXXO__
 720,896         xXXx
                 xXXx
                 xXXx    16K MONO SCREEN
                 xXXx         (ON CARD)
                 xXXx         (ON CARD)
                 xXXx
                 xXXx
               __xXXx__
                 OXXO
                 OXXO
                 OXXO    16K EXPANSION
                 OXXO
                 OXXO
                 OXXO
                 OXXO
B800:0000   _____OXXO__
 753,664         xXXx
                 xXXx
                 xXXx    16K COLOR/GRAPHICS
                 xXXx       (ON CARD)
                 xXXx
                 xXXx
                 xXXx
               __xXXx__
                 OXXO
                 OXXO
                 OXXO    16K EXPANSION
                 OXXO
                 OXXO
                 OXXO
                 OXXO
C000:0000 _______OXXO__
 786,432         OXXO
                 OXXO
                 OXXO
                 OXXO    64K RESERVED
                 OXXO
                 OXXO
                 OXXO
               __OXXO__
                 OXXO
                 OXXO
                 OXXO
                 OXXO


    DETAIL "B"   DISPLAY CARD'S RAM
    -------------------------------






    DETAIL "C"   IBM-PC ROM
    -----------------------

                 OXXO
                 OXXO
                 OXXO
                 OXXO
                 OXXO
                 OXXO
                 OXXO
               __OXXO__
                 OXXO
                 OXXO
                 OXXO
                 OXXO     16 K
                 OXXO
                 OXXO     RESERVED
                 OXXO
               __OXXO__
                 OXXO
                 OXXO     8 K  R O M 
                 OXXO     S O C K E T 
 F600:0000 ______OXXO__
 1,007,616       @@@@
                 @@@@
                 @@@@
               __@@@@__   32 K  OF
                 @@@@
                 @@@@    
                 @@@@
                 @@@@
                 @@@@      R O M 
                 @@@@    
                 @@@@
               __@@@@__
                 @@@@
                 @@@@    B A S I C
                 @@@@
 FE00:0000 ______@@@@__
 1,040,384       @@@@
                 @@@@    8K ROM BIOS
                 @@@@
 FFFF:0000 ______@@@@__
 1,048,576


      DETAIL "C"  IBM-PC ROM
      ----------------------


  (TO PRINT OUT A COPY OF THE ABOVE MEMORY MAPS AND DETAILS)
  ( AT THE DOS PROMPT  A>TYPE PEEKFILE.ROM <Ctrl-PrtSc-Enter>  )


```
{% endraw %}

## PEPLSYST.BAS

{% raw %}
```bas
10 REM---"APEPLSYS",A --- people systems dialogue
20 KEY OFF
30 CLS
90 GOTO 1000
100 CHAYNBAK$="YES"
1000 CLS: LOCATE 2,3 :PRINT CHR$(201); STRING$(72,205) ;CHR$(187)
1010 FOR N=3 TO 20: LOCATE N,3 :PRINT  CHR$(186) :LOCATE N,76 :PRINT CHR$(186):NEXT
1020 LOCATE 21,3 :PRINT CHR$(200); STRING$(72,205) ;CHR$(188)
1030 LOCATE 4,15 :COLOR 15: PRINT  "  W h a t  a r e   P e o p l e S y s t e m s  ? " :COLOR 7
1040 PRINT :LOCATE ,6 : PRINT "While technology systems (THING-SYSTEMS) have made super progress,
1045 LOCATE ,6 : PRINT "have PeopleSystems really kept pace with society's urgent needs?
1050 LOCATE 9,6 : PRINT "In fact, THING-SYSTEMS can put a man on the moon; give him a vehicle
1055 LOCATE 10,6 :PRINT "to drive and then bring him safely back to his loved ones--BUT, using
1060 LOCATE 11,6 :PRINT "today's PeopleSystems we can't get kids through high school. They
1065 LOCATE 12,6 :PRINT "drop out and miss learning how to enjoy a full and happy life.
1070 LOCATE 14,6 : PRINT "Dialing a phone, we can talk with anyone in the free world, but we
1075 LOCATE 15,6 : PRINT "often can't communicate with our loved ones, even in the same room.
1080 LOCATE 17,6 :PRINT "PeopleSystems is a simple bridge between the problems of today,"
1085 LOCATE 18,6:PRINT "and the answers of tomorrow. Information especially designed for
1090 LOCATE 19,6:PRINT "easy reading, and dedicated to PROGRESS without FLASH or FANFARE.
1095 LOCATE 25,17 :PRINT "Press ANY KEY for next screen ";:
1098 X$=INKEY$: IF X$="" THEN 1098
1100 CLS: LOCATE 2,3 :PRINT CHR$(201); STRING$(72,205) ;CHR$(187)
1110 FOR N=3 TO 20: LOCATE N,3 :PRINT  CHR$(186) :LOCATE N,76 :PRINT CHR$(186):NEXT
1120 LOCATE 21,3 :PRINT CHR$(200); STRING$(72,205) ;CHR$(188)
1130 LOCATE 4,15 :COLOR 15: PRINT  "  W h a t  a r e   P e o p l e S y s t e m s ? " :COLOR 7
1135 LOCATE 5 ,35:PRINT "(continued)"
1140 LOCATE 6,6 :PRINT "PeopleSystems are the regular, often daily patterns that guide,
1145 LOCATE 7,6:PRINT "control or play a part in our lives. PeopleSystems are made up of
1150 LOCATE  8,6:PRINT "the habits, the customs and the laws that affect people's behaviour
1155 LOCATE  9,6:PRINT "and society's progress or its stagnation. EXAMPLES of PeopleSystems:
1157 LOCATE 10,6:PRINT "Three meals a day; grammar, high school, college, job or marriage.
1160 LOCATE 12,6:PRINT "The progress of THING-SYSTEMS is centuries ahead of PeopleSystems.
1165 LOCATE 13,6:PRINT "In fact, during the last several decades our PeopleSystems seem
1170 LOCATE 14,6:PRINT "to be stumbling through all sorts of self-destructive patterns in
1175 LOCATE 15,6:PRINT "our families, our government, big business, the environment and many
1180 LOCATE 16,6:PRINT "other institutions that once were a model of progress for the world.
1190 LOCATE 18,6:PRINT "As Rousseau said -- Perhaps people have grown too smart, too soon ?
1195 LOCATE 19,6:PRINT "Or - Some people don't understand much of what they think they know!
1200 LOCATE 25,20 :PRINT "Press ANY KEY for next screen ";:
1210 X$=INKEY$: IF X$="" THEN 1210
1220 CLS: LOCATE 2,3 :PRINT CHR$(201); STRING$(72,205) ;CHR$(187)
1230 FOR N=3 TO 20: LOCATE N,3 :PRINT  CHR$(186) :LOCATE N,76 :PRINT CHR$(186):NEXT
1240 LOCATE 21,3 :PRINT CHR$(200); STRING$(72,205) ;CHR$(188)
1250 LOCATE 4,15 :COLOR 15: PRINT  "  W h a t  a r e   P e o p l e S y s t e m s ? " :COLOR 7
1260 LOCATE 5 ,35:PRINT "(continued)"
1270 LOCATE 7,6:PRINT "You will hear the GURU's of people control, the psychologists claim
1275 LOCATE 8,6:PRINT "BUT, you can't control people ! HUH ? Perhaps what they mean is --
1280 LOCATE 9,6:PRINT "Try not to let people know you are trying to control them, otherwise
1285 LOCATE 10,6:PRINT "it may not succeed. Hog-wash from Sophomore Clinical Psychology 101A
1290 LOCATE 12,6:PRINT "Most people are quite systematic, and whether they know it or not,
1295 LOCATE 13,6:PRINT "they also want to use systems that work and succeed. They will rebel
1297 LOCATE 14,6:PRINT "however, if required to follow dumb systems that don't work.
1300 LOCATE 16,6:PRINT "Ask any dissenter how many ways he goes home from work?
1310 LOCATE 17,6:PRINT "Then ask-- Which way or which SYSTEM does he use most of the time?
1315 LOCATE 19,6:PRINT "HE DIDN'T KNOW THAT HIS PATTERN FOR GOING HOME WAS A SYSTEM!-- SHAME.
1320 LOCATE 20,6:PRINT "STUDY THE THREE KINDS OF PEOPLE SYSTEMS ON THE NEXT SCREEN -->>
1330 LOCATE 25,17 :PRINT "Press ANY KEY for next to last screen ";:
1332 X$=INKEY$: IF X$="" THEN 1332
1350 CLS: LOCATE 2,3 :PRINT CHR$(201); STRING$(72,205) ;CHR$(187)
1365 LOCATE 21,3 :PRINT CHR$(200); STRING$(72,205) ;CHR$(188)
1366 FOR N=3 TO 20: LOCATE N,3 :PRINT  CHR$(186) :LOCATE N,76 :PRINT CHR$(186):NEXT
1370 LOCATE 4,15 :COLOR 15: PRINT  "  W H A T  A R E   P E O P L E   S Y S T E M S  ? " :COLOR 7
1375 LOCATE 5 ,35:PRINT "(continued)"
1380 LOCATE 7,6:PRINT "     HABITS              CUSTOMS           GOVERNMENT OR LAWS
1385 LOCATE 9,6: PRINT "brush our teeth    watch our weight   follow traffic rules
1390 LOCATE 10,6:PRINT "wash our face      be kind to Ladies  marriage and divorce laws
1395 LOCATE 11,6:PRINT "wear shoes         holding a wake     funeral laws
1400 LOCATE 12,6:PRINT "speak clearly      talk English       pay judgments
1410 LOCATE 13,6:PRINT "chew mouth closed  eat three meals    ingredients on package
1415 LOCATE 14,6:PRINT "carry money        use U.S. money     don't deface money
1420 LOCATE 15,6:PRINT "date others        set up household   get married
1425 LOCATE 16,6:PRINT "buy things         earn a living      pay taxes
1500 LOCATE 25,10: PRINT "PRESS  ANY KEY  TO  RETURN TO BASIC -- ESC FOR MENU";
1505 X$=INKEY$ : IF X$="" THEN 1505
1510 IF X$=CHR$(27) THEN 1515
1515 IF CHAYNBAK$="YES" THEN 1520 ELSE 1525
1520 CHAIN "MENU.BAS",615,ALL
1525 CLS : PRINT "YOU ARE IN BASIC"
```
{% endraw %}

## README2.DOC

{% raw %}
```
          This is README2.DOC -- Enter A>browse readme2.doc to read.
          
          
          ***** PeopleSystems on the PCXT -- ON DISK *****
          
              Welcome to a SNEAK PREVIEW of a new concept. A new book.
          
          
                    DAMN THE TRIVIA -- OUR SYSTEMS ARE SINKING

          

          PeopleSystems, a new approach to some very old problems. On this

          disk there are also advance excerpts of DAMNTRIV.DOC, and

          WHATISPS.DOC for your use and information. Use A>BROWSE.COM

          filename.doc to view them. Try WHATISPS first.

          

              Systems for people, or PeopleSystems, or people-patterns as

          they are sometimes thought of, have been around for many

          centuries, but seem to be getting nowhere lately. Perhaps it is

          because PS are falling far behind when compared to the progress

          in thing-systems, commonly called technology.

          

              See the Table of Contents - Chapters (below.)

          

              The author is seeking comments and feedback from the readers.

          This is a people-to-people endeavor. Without your kind help,

          little may happen. Please tell your friends about the new ideas

          in PeopleSystems.

          

              PeopleSystems concepts are disarmingly simple -- as good

          concepts should be.   R.G. Ingersol said, "Every science has been

          an outcast." But, do not let PS's  simplicity deter you from

          discovering its importance

          

              If you can't get the 2 DSDD disks containing the whole book

          from your public domain software supplier please send $5 to the

          author. (or to be placed on the mailing list.) PeopleSystems on

          the PCXT will keep registered readers informed of the

          developments in PS.

          

              PeopleSystems is not a religion, not a political party and,

          of course, PS is salt-free and non-fattening. Like a magnifying

          glass, PS can help repair and improve the systems for people

          that, unfortunately seem to be badly floundering today.
          
          Title:  DAMN THE TRIVIA -- OUR SYSTEMS ARE SINKING!
          
          PeopleSystems on the PCXT
          
          Table of Contents
          
          DISK I
          
          UpFront ........Capsule version (on this Toolbox Disk)
          
          Introduction
          
          Chapter 1.......PeopleSystems Re-examined
          
          Chapter 2.......Research in Reverse
          
          Chapter 3.......Reprogramming our PeopleSystems
          
          Chapter 4.......Traditionalists -- Word People and the Law
          
          DISK II
          
          Chapter 5.......Cloning PeopleSystems
          
          Chapter 6.......PeopleSystems in the Schools
          
          Chapter 7.......PeopleSystems in the Family
          
          Chapter 8.......PeopleSystems in the Media
          
          Chapter 9.......PeopleSystems in TEKWRITE
          

          You will also receive the PS  ASCII text reader -- EZR.EXE

          

              EZREADER is a full function reader with all kinds of bells

          and whistles that you may want to use for other text files.

          EZR.EXE can single or double space, turn the screen intensity up

          or down, move a screen or a line or instantly jump to the top or

          bottom with one key stroke. And then push A(gain) and start

          another file -- anytime you so desire.

          

              EZR Lines are limited to about 60 characters -- no more 80

          char block busters that fill the screen -- packed so tight with

          wrap around words on two lines.  You can even make double spaced

          hardcopy for study.

          

              There are full instructions on the screen. You can also

          change disks, if the program you want isn't in the on-screen

          directory. Use EZREADER in good health.

          

          This is a Shareware disk. You may copy and distribute single

          copies of any or of all of these programs  --free.

          

          

          PeopleSystems

          Att: Louis A. Warner, P.E.

          78 Maplevale Drive

          Woodbridge, CT 06526

          (203) 393-3913

          

          Please send copies of news clippings or news releases.

          Also any Letters to the Editor, etc.

          

          PeopleSystems work is a not for profit enterprise.  The people

          who are dedicating their time and money to get PeopleSystems out

          to the people (where the best systems for people have always been

          created) would appreciate your participation in an optional

          shareware payment of $10 if you are using the PeopleSystems

          programs and software.

          

          If you want a 2 DSDD set containing the entire book and EZR.EXE

          text reader just send $5.00.

          Thank You

          

                                -30-

          
```
{% endraw %}

## SENSITIV.DOC

{% raw %}
```

***************************************************************

          SENSITIVE SUBJECTS -- SENSITIVE PEOPLE

***************************************************************

               PEOPLE SYSTEMS, LTD. (C) 1983

A SHORT DISCUSSION OF HOW SOME PEOPLE REACT TO THE COMPUTER AND HOW
TO GET THE BEST RESPONSE TO SOME SUBJECTS THAT MAY BE VERY PERSONAL.

The fact that many people are frightened by a computer is not news.
Let us examine what it is they may be objecting to, so that we may 
better serve them and perhaps enable them to overcome or at least,
work around their phobias.

Big Brother probably tops the list of fears. Some one is spying on
them and will use the information against them. Computers have a long-
standing reputation for screwing up people's charge accounts with
accompanying credit department hassles and intimidations. Most folks
have been troubled by computer controlled credit billings at one time
or another.

Electronics has always been a scary thing for some people. Probably 
from their first electrical shock or clap of thunder they have been
in awe of its powers. Lie detectors are electronic, and fearsome to
some individuals.

Tape recorders and telephone answering machines, like microphones (not
telephones) have turned some people off. Perhaps there is a burden of
guilt attached to their electronic fears, but that is conjecture only.

Of course, there is the normal reaction to something new they are not
familiar with. The phobia in some is more pronounced than in others.
This is the most common and easiest hang-up to help them overcome.
The more they get used to the computer and understand what it can
and can not do the sooner they will feel more comfortable with it.

The computer can out-think, out compute, and remember better than a 
human being, provided of course some human being has programmed it
and supplied the data inputs for its performance. Obviously, by itself
a computer can do nothing constructive or destructive -- accept waste
power and cost many dollars. As a matter of interest, even when it is
idleing, the electrons in the computer are milling around in a nano-
second frenzy, just maintaining a status quo. But they tell us that
is also going on in all the matter in the universe at the same time.
A puzzlement.

But back to our subject of SENSITIVE PEOPLE. Who are the members of
this elite group that haven't acquired a taste for the fascination
of having an electronic friend? Can we identify them and the subjects
that may also cause sensitivity to more all-to-gether people.

It is more frequently the older people rather than the 
younger folks with the hang-ups. They didn't have computer exposure
in their growing up years, to build a confidence and acceptance to
them. But add to this selection people who may be out of work. Today,
every modern appliance has been blamed for replacing people, and CPU's
have taken the blame from many of the jobless.

Recent severe trauma can also sensitize people to new situations very
easily. Death, terminal or lingering illness, divorce, or even a bad
marriage can upset a normal person's equilibrium for some time after
the experience. These people could all be sensitive to using a computer
for the first time. But of course there are many exceptions to any
criteria, and many people who have been exposed to these setbacks dont
necessarily follow the pattern.

Poor readers, obviously would have difficulty with computer reading.
There have been ergonometric problems with screens placed too high
for the wearer of bi-focal glasses. There also may be a language 
barrier in some situations like Disneyland's foreign language Help-
Screens around EPCOT or travel terminals, but these are a system
requirement for the programming.

People who are being tested by computers for some advancement or
position will probably have an aversion towards them if they are
not confident in their own ability to adapt. If the testing were 
psychological evaluation via computer, there would be a need for
large amounts of test data before an evaluation could be scaled.
The person who is comfortable with the computer, will of course,
be more adaptable and able to respond more fully it seems.

WELL ?  What can we do with all this information? What would make
our programs more useful and response gathering? How can we make
the user feel at home with the situation and less apprehensive
about the outcome?

The term is FRIENDLY. In fact there is another program on this
disk that you should view called FRIENDLY. It will give you the
more general information about inviting better responses by being
more poeple oriented in the queries and comments.

But is FRIENDLY enough ? If you're going to ask someone about the
sanctity of their marriage you can't expect them to peck it out on
the keyboard like it was an order for some vegetables at the market.
The experienced interviewer knows that the first few minutes can
set the stage for the quality of the discourse. 

In the beginning the questions should be non-threatening or not
important. The weather is still an easy subject to handle, or ~are you
comfortable? ~ may be a good ice breaker. Perhaps even more to the
point, ~can you see the screen clearly?~ will develop a rapport
between man and the machine. Several questions about non-
threatening subjects or a little humor may be a good way to start.
What can be done to make the user feel the computer is not an enemy?

Very early in the interview the user should be assured that there are
no recordings being made of the responses, or that they will be given 
the disk to take with them when they leave, if files are necessary.
If the program can use a printout of the responses and questions this
can be given to the user to keep or destroy as they choose.

Perhaps telling them how the computer loses its memory when it is 
turned off may assuage their fears about recordings. Help the user to
develop a confidence about the computer and its controller. Even 
though you personally, as an interviewer, have made them feel at home
the computer as a unique mentality that participates in the interview
should also display some empathy for the user. 

Here are some lines from a marriage encounter type of situation.


HELLO THERE !      
               I'M GLAD THAT YOU COULD COME TODAY.

MY NAME IS SAM.
               I'M A COMPUTER THAT MAY BE ABLE TO HELP YOU

I DON'T KNOW VERY MUCH ABOUT YOU FOLKS.

               SO I MAY HAVE TO ASK A FEW QUESTIONS TO GET TO KNOW YOU.

             please press the space bar to proceed
 
(And on the next panel:)

ARE YOU COMFORTABLE (Y/N) ?
          press either Y or N to respond.

                   Would you please type in the lady's first name
                         and then press enter -- Thank you.

Notice that the first response was limited to pressing the space bar.
Then a (Y/N ?) response that would alert the interviewer to do some-
to make them comfortable, helping the computer play the role of their
advocate.

Finally, the computer wants to record the Lady's first name ONLY.
Don't expect most people to be willing to enter their full name easily
unless they have used computers before. We have used an easy flow
of one-sided friendly dialog to get the user ready to talk about
themselves.

After names, the computer says ~I'm happy to meet you JOAN and JERRY
and proceeds with light questions, the kind you might ask of a 
stranger sitting next to you on an airplane. ~Do you have any children?
How old are they? What are their names ? and so on for a panel or two
while the user gets accustomed to keyboarding and learns to trust
the computer with private information.

Now the stage has been set to start the difficult questions. These 
more probing questions should be approached gingerly. They should be
worded in a non-judgemental format and increase in consequence.

Possibly, in the middle of the interview a time-out is in order. Clear
the screen and leave a ~press any key to resume~ message if the user
elects to take a time-out.

There are many little things you can do to ease the tension like using
a bird call for the proceed subroutine. Sometime giving them the choice
of answering a question or not answering it is useful too. They may not
be ready or able to talk about a subject in their spouses presence, so
it can be useful to suggest that they may want to do their own inputs
by themselves.

A nice good-bye message can be as beneficial as the hello sequence.
Wish them well and leave them with a feeling that inside that damned
computer is someone with a heart.

Go in Peace and Good Health !


```
{% endraw %}

## STUFCHIP.DOC

{% raw %}
```
 
              HOW TO STUFF YOUR OWN BOARDS WITH CHIPS
              By Louis A. Warner, P. E.
              PEOPLE SYSTEMS LTD. -- SOFTWARE (C) 1983
 
              You have just purchased some of the finest devices 
              that have ever been produced. These chips need 
              special attention if you want to get the best out 
              of them, because they are very easily damaged by 
              static electricity, that you and I wouldn't even 
              notice. No snap, crackle or pop, but zowie, there 
              goes a good chip, destroyed by static electricity.
 
              There are ways to protect your investment against 
              such damage, if you're careful and take your time. 
              Before you unpack the chips think of a pettigree 
              puppy that you just purchased, and treat it 
              tenderly and you'll enjoy. Oh, yes, don't open up 
              the chips until you're ready to install them.
 
              Remember static electricity hates humidity, but it 
              loves nylon and synthetic clothing, soft rugs and 
              slippery shoes. Static is worse in the dry winter 
              weather, and least in the humid summer time. 
              Before you unpack your chips, have you read your 
              owners manuals for adding chips to the main memory 
              or an expansion board? Refresh your memory and 
              plan your project and you'll do it easily. It's 
              really not very hard to do and unless you get 
              rough with your equipment there is little you can 
              harm if you take precautions. You will need a big 
              sheet of aluminum foil, a spray bottle of water, a 
              boiling teakettle and some light hobby tools, 
              flashlight, magnifier, pad and pencil along with 
              the manuals etc.
 
              A clear, clean kitchen table on a linoleum floor 
              where the light is very good is a fine place to 
              operate on the patient. Take your computer cabinet 
              off to get at the board you're going to stuff. 
              Read your manuals or ask your buddy's help to get 
              it unbuttoned. On the IBM-PC there are two large 
              screws in the lower rear corners, near the curve 
              at the bottom of the back. Slide the cover forward 
              and put it aside. Vacuum the fan and inlet areas 
              carefully, but don't let the air from the vacuum 
              stir up any dust in the room. Wiping the fan 
              blades with a tiny brush will help it do its job.
 
              Remove the rear hold down screw from the expansion 
              board and gently raise the board from the bus 
              socket on the mother board. Place a large piece of 
              aluminum foil flat on the table to touch and 
              ground yourself on when you're working on the 
              chips. If you have a battery powered board (clock 
              etc) remove the battery. You are now ready to open 
              up your chips and set them into the open sockets. 
              Review your conditions again. Shoes off, tea 
              kettle boiling, dog and cat out of the house, kids 
              gone to the movies, you are ready to operate, 
              Doctor.
 
              What do you do in the winter or when the humidity 
              is real low? Wait for a rainy day or raise the 
              humidity with a vaporizer in the room. Don't wear 
              synthetic clothes. But use a spray bottle to keep 
              from getting too dry. Mist your clothes and the 
              floor and chair seat (usually plastic too) with 
              water to keep it from generating static. Don't 
              work on rugs, if possible, or else spray them with 
              static guard and water mist. Look-out for nylon 
              lingerie whether you are stuffing a board or 
              whatever. Don't get your computer wet.
 
              You have unwrapped your chips and the board is 
              sitting on the aluminum foil waiting for the 
              chips. Stand your chips, pins down on the foil and 
              examine one carefully, while touching the foil. 
              There may be a production number marked on the 
              underside, in case you need a reference mark. They 
              can also be marked with ordinary pencil lead if 
              you write small enough. Note the indentation at 
              one end that indicates the number one pin end. 
              Find out which way it should go in your board. The 
              pins taper outwards and need to be gently squeezed 
              together into two straight lines.
 
              Press the side of the pins (lengthwise) against 
              the table to align and narrow down the spacing 
              between the lines. Do it again for the pins on the 
              opposite side. Now set it on the socket gently, 
              check direction for the dimpled end (socket covers 
              have been removed, if they existed). Inspect it 
              carefully, with a magnifying glass, if available. 

              If the pins line up with the contact holes 
              properly, then use your two thumbs and steadily 
              press it into the socket. You will feel the socket 
              grab the pins, but dont try to test its holding 
              power. It's hard to get them in but much harder to 
              take chips out of the sockets. There are special 
              chip tools that are available and are well worth 
              the money, if you are going to do much pushing and 
              pulling. Or you can use a couple of small 
              screwdrivers as wedges. But gently! Now take your 
              glass and inspect the chip pins for one that might 
              have been folded under when you pressed it in and 
              it was not in line with the hole. Inspect each pin 
              carefully for a few chips and develop a secure 
              feeling that you are doing it right before you 
              proceed too far.
 
              When the board is stuffed with one full set of 
              eight or nine chips, (populated as they say) and 
              you have reset your switches properly, it is best 
              to test, doctor. But first, look around and read 
              the labels and signs so that the inside of your 
              computer isn't such a strange place next time you 
              have to dig under its covers. You probably feel 
              like the radio receiver owner, when he first 
              changed a tube, years ago. But it's just another 
              piece of hardware to get familiar with. Don't 
              touch but do look, ask questions, and read the 
              manuals. Take a photo or two.
 
              Now, doctor, lets plug it in and test each set 
              before we suture up the patient, and put on the 
              cabinet again. Install the operating cables and 
              put the boot disk in the A: drive and turn it on. 
              Remember that with more memory its going to take 
              more self- diagnostic time, so dont be surprised 
              if 256K takes over a minute before the CPU 
              beeps,"All present and accounted for, Sir". Then 
              your normal boot routine should begin. Watch 
              carefully for error messages on the screen and 
              write them down. If you have parity lights on the 
              board note them and shut the power off in case 
              there is not a normal boot sequence (except for 
              the longer memory check at the beginning.)
 
              DON'T PANIC -- SLOW AND EASY IS THE GAME -- THIS 
              HAS HAPPENED BEFORE AND PEOPLE LIVE THROUGH IT. 
              Here's a list of what could be causing a 
              malfunction, IF THERE IS ONE!  The switches on the 
              board and in the computer could be set wrong, 
              recheck them in writing. Have someone else double 
              check you. There could be a bad chip. (We'll tell 
              you how to look for it). You may have disturbed 
              something in your cleaning or reassembling the 
              cables and case. Make sure everything is properly 
              turned on for the test. There is also the remote 
              possibility that the expansion board is defective 
              or intermittant in the section you have just 
              stuffed. Examine the solder joints on the printed 
              circuit board in these areas. Retrace your steps 
              and restudy the manuals, check the switches and 
              then try it again after a short period. Shut it 
              down if it still doesn't boot properly and once 
              more check all possibilities. The chip failure 
              probability is less than any of the other 
              possibilities, especially wrong switch settings. 

              Remember there are totals of the PC mother board 
              chips, total of the expansion board's memory, 
              total of other boards like a C/PM adapter memory 
              and then the grand total of all RAM installed. 
              Check them by writing them down and see if the 
              switches are correctly set, one by one. Then if, 
              you find that everything is O.K. but it still 
              doesn't work the way it should, continue on.
 
              Let's see if there is a bad chip. This is usually 
              the first assumption, but most often it is switch 
              settings or bent pins or bad sockets that make 
              intermittant contact or some silly thing like 
              leaving the keyboard unplugged. Since taking the 
              chips out is a stubborn operation that doesn't 
              improve with brute force, let's plan our attack. 

              If we have a couple of spare chips we can try them 
              in another working circuit on the board and reset 
              the switches. Go back to where you started. Ground 
              Zero we shall call it. Usually, you dont have to 
              pull the chips just reset the switches and try out 
              the old chips under the original conditions 
              (before stuffing). Put the board in and test it 
              again. It's probably O.K. and you haven't done any 
              damage. But electronic gremlins aren't called 
              glitches for nothing.
 
              Now swap the new spares to determine if they work 
              in the working circuit. Yup, they work O.K. Now 
              let's start a planned procedure to reduce the 
              confusion and the number of times we have to push 
              and pull the same sockets and chips. We don't want 
              to damage our board or the chips with too much 
              handling or abuse. If you stuffed three sets of 
              chips without testing each set and the last one 
              shows the parity error then take those out to 
              test. Work your way backwards, one set at a time, 
              until you get to a working state. Remember to 
              reset the switches correctly each time you test 
              another full set of chips. You can not test 
              partial sets although they can usually remain in 
              the sockets if you know they are good. But, when 
              in doubt, take them out.
 
              Now test three chips at a time and mark them. Put 
              nine that tested good in the old circuit into the 
              next set of sockets. If you only have one extra 
              chip, borrow the parity chip, and turn off the 
              parity reporting until you locate the bad chip 
              (probably only one, IF ANY). By testing your chips 
              two or three at a time in the working circuit, you 
              can isolate the bad group then test them one by 
              one to find the culprit, if there is one.

              When you get through testing and stuffing, you'll 
              find there is nothing wrong with any of the chips 
              and they all work fine. There apparently was a 
              temporary glitche the first time around that 
              issued the parity error and it took a while to 
              discharge a condensor or change a flag or 
              something. That's why, when you buy a pocket 
              calculator, they tell you to turn it off and on 
              several times, if it doesn't work properly the 
              first time.
 
              Try to keep track of your tests and actions on 
              paper so that you can isolate a bad chip or 
              convince yourself that it's something else that's 
              wrong. Mark the chips with a pencil or note the 
              production marks that should identify them 
              uniquely. For your own piece of mind when you 
              think that you have found a faulty chip, after all 
              else is done, test it to prove it's bad in a 
              working circuit, one chip at a time.

              Don't be surprised if it tests good now. That's why 
              manufacturers call it "burning in". (Finding the 
              good and the bad actors). But usually the 
              percentage of bad chips is miniscule unless there 
              is a run that quality control didn't catch before 
              it left the plant, which is almost unheard of. If 
              it now works, burn it in. Leave a colored mark on 
              any suspicious ones, just in case you need to 
              locate an intermittent one in a couple of days or 
              so. Keep a written record of them also.
 
              If you are using the same set of sockets to test a 
              lot of chips, alternate the sockets so that the 
              same ones don't get all the wear. Be careful not 
              to pry against any of the small electronic 
              components and damage them.
 
              Good luck stuffing -- you'll find the experience 
              worth while and not hard at all once you get the 
              knack of it.

```
{% endraw %}

## TALKPAGE.BAS

{% raw %}
```bas
10 REM --- The IBM Personal Computer  "TALKPAGE"
12 REM --- Licensed Material -- Program property of Louis A. Warner, P. E.
20 KEY OFF : CLS
90 GOTO 150
100 CHAYNBAK$="YES"
150 REM
160 REM
180 CLS
190 PRINT  "            W H Y   ~ T A L K I N G   P A G E S  ~"
200 PRINT
210 PRINT "*******************************************************************"
220 PRINT :PRINT "THIS IS STANDARD COMPUTER PRINTING -- TOUGH TO READ !"
230 PRINT "Year after year, more  and more people appear to be reading fewer and fewer"
240 PRINT"books. Television and several other forms of communication like radio and tele-"
250 PRINT "phone also have helped to eliminate many newspapers and magazines. A strange"
260 PRINT "thing is happening here. There are fewer and fewer readers but more and more "
270 PRINT "books of a non-fiction type being printed  and looked at. Many advertisers "
280 PRINT "wonder--how many of these tons of non-fiction printing are read?
290 PRINT "Remember back in college, when the sharp guys picked out the second-hand books"
300 PRINT "that were all marked up by the previous owner. It was worth a lot of hard"
310 PRINT "studying to find someone elses discard that had been well highlited. It helped"
320 PRINT "you understand the monotonous black ribbons of type that stretched across the"
330 PRINT "the clean white paper, page after page. Today, there are highliting pens, made"
340 PRINT "just for that special purpose. Then, we must ask, why aren't all books hilited"
350 PRINT "when they are printed ? Why must everyone do it, over and over again,for them-"
360 PRINT "selves?  This is the age of efficiency." :GOSUB 2800   'SPACBAR
370 COLOR 15:PRINT :PRINT "NOW READ THE SAME WORDS--TALKING PAGES STYLE":COLOR 7:PRINT :PRINT
380 PRINT
390 PRINT"Year after year, MORE and more people appear to be reading FEWER and"
400 PRINT
410 PRINT "FEWER books.  Television and several OTHER forms of communication "
420 PRINT
430 PRINT"like radio and telephone have also helped ELIMINATE many newspapers."
440 PRINT
450 PRINT"A STRANGE thing is happening here. There are FEWER and fewer readers"
460 PRINT
470 PRINT "but MORE and more books and magazines of a NON-fiction type  being"
480 PRINT
490 PRINT "printed and looked at. Many advertisers WONDER--how much is READ? "
500 PRINT
510 GOSUB 2800
520 PRINT
530 PRINT "Remember back in COLLEGE, when the sharp guys PICKED out the"
540 PRINT
550 PRINT "SECOND-hand books that were all MARKED up by the previous OWNER."
560 PRINT
570 PRINT "It was WORTH a lot of hard studying to FIND someones DISCARD that "
580 PRINT
590 PRINT "had been HIGHLIGHTED well. It HELPED you understand the MONOTONOUS"
600 PRINT
610 PRINT "black ribbons of type that STRETCHED across the CLEAN white paper,"
620 PRINT
630 PRINT "page after page. Today, there are super highlighting PENS made"
640 PRINT
650 PRINT "for that SPECIAL purpose. Then, we must ask, W H Y aren't ALL books"
660 PRINT
670 PRINT "highlighted WHEN they are printed ? Why must EVERYONE do it, over"
680 PRINT
690 PRINT "and over AGAIN for themselves ? This is the AGE of efficiency. "
700 PRINT
710 GOSUB 2800
720 PRINT
730 PRINT "What's that you say; you were taught NOT to mark up your books, in"
740 PRINT
750 PRINT "GRAMMAR school. But later you had to LEARN it yourself in COLLEGE."
760 PRINT
770 PRINT "Oh, yes the difference was that YOU didn't OWN the books when you"
780 PRINT
790 PRINT "were YOUNG, and may not have known HOW to mark them up effectively."
800 PRINT
810 PRINT "In fact, it might be one more PROBLEM for a CHILD to understand IF"
820 PRINT
830 PRINT "BEGINNERS reading books were highlited, unless GIFTED students were"
840 PRINT
850 PRINT "using them.
860 PRINT
870 GOSUB 2800
880 PRINT
890 PRINT "Advertisers discovered the VALUE of highliting by capitalizing the"
900 PRINT
910 PRINT "IMPORTANT words and phrases. They also know the EASE of reading "
920 PRINT
930 PRINT "SHORTER lines like the ones NEWSPAPERS use in their COLUMNS. There"
940 PRINT
950 PRINT "is one more ADDITION we can make to our IMPROVED printing system,"
960 PRINT
970 PRINT "NONE of which is UNIQUE, having been TRIED and PROVEN many times."
980 PRINT
990 PRINT "In fact, the author WROTE a paper on it back in 1952, long before "
1000 PRINT
1010 PRINT "the COMING of highliter pens. The last feature comes from the "
1020 PRINT
1030 PRINT "LAWYERS and the other WORD people, the WRITERS, who also KNOW that"
1040 PRINT
1050 PRINT "comprehension is IMPROVED and marking up is EASED by DOUBLE spacing"
1060 PRINT
1070 PRINT"or spacing one and one-half lines, as SOME typewriters do."
1080 PRINT
1090 GOSUB 2800
1100 PRINT
1110 PRINT "Oh yes, TALKING PAGES uses up more paper, and ISN'T this is the age"
1120 PRINT
1130 PRINT "of efficiency. But of course, the FIRST priority for efficiency is "
1140 PRINT
1150 PRINT "the purpose of printed matter -- COMMUNICATION. And the efficiency"
1160 PRINT
1170 PRINT "of UNDERSTANDING what you are READING is IMPROVED considerably."
1180 PRINT
1190 PRINT "Its GAIN far out strips the ADDITIONAL COST of PAPER, and MAKES it"
1200 PRINT
1210 PRINT "FUN to read, even for THOSE who often CLAIM they are POOR readers."
1220 PRINT
1230 GOSUB 2800
1240 PRINT
1250 PRINT "For many centuries there were only TWO major METHODS of gaining new"
1260 PRINT
1270 PRINT "INFORMATION. Method one was BEING there yourself to HEAR and SEE"
1280 PRINT
1290 PRINT "what went on and what was said. The OTHER method was the IMPORTED"
1300 PRINT
1310 PRINT "word/message, either written or verbal. This was ALL there was in"
1320 PRINT
1330 PRINT "COMMUNICATION for many centuries. Then along came the PRINTED word,"
1340 PRINT
1350 PRINT "greatly ENABLED by Gutenberg's MOVABLE type. But it wasn't UNTIL the
1360 PRINT
1370 PRINT "telegraph and telephone ARRIVED in the 19th century that a  really"
1380 PRINT
1390 PRINT "NEW communications MEDIUM became available to the PEOPLE."
1400 PRINT
1410 GOSUB 2800
1420 PRINT
1430 PRINT "Today television is the MOST liesurely way of RECEIVING information"
1440 PRINT
1450 PRINT "et al . We can get VARYING enlightenment and entertainment with"
1460 PRINT
1470 PRINT "LITTLE effort on our part EXCEPT to RECEIVE it attentively, if we"
1480 PRINT
1490 PRINT "desire to ENJOY its benefits."
1500 GOSUB 2800
1510 PRINT
1520 PRINT "Did you ever NOTICE that when YOU are discussing the SAME paragraph"
1530 PRINT
1540 PRINT "or article that SOMEONE else has READ, you may have DIFFERING opin-"
1550 PRINT
1560 PRINT "ions on its MEANING, and a rereading may ELIMINATE its ambiguity."
1570 PRINT
1580 PRINT "Somebody may have MISSED a `REVERSIBLE' word or phrase, that MADE "
1590 PRINT
1600 PRINT "all the difference. In the same vein of INTERPERSONAL communication"
1610 PRINT
1620 PRINT "when someone READS a paragraph to you its often much CLEARER than"
1630 PRINT
1640 PRINT "when YOU had READ it yourself. Why ? Probably because they ADDED"
1650 PRINT
1660 PRINT "inflection and emphasis to the monotonous RIBBONS of type and LENT"
1670 PRINT
1680 PRINT "their OWN interpretative information to its context. Just as if YOU"
1690 PRINT
1700 PRINT "had been READING highlited copy.
1710 PRINT
1720 GOSUB 2800
1730 PRINT
1740 PRINT "TALKING PAGES does this by EMPHASIZING or `hilite-ing' KEY words or"
1750 PRINT
1760 PRINT "phrases in CAPS like the copy writers do. You may RIGHTLY ask,"
1770 PRINT
1780 PRINT "What words SHOULD be hilited ? The rules are NOT HARD and fast for"
1790 PRINT
1800 PRINT "TALKING PAGES but experience has shown that THERE are some general-"
1810 PRINT
1820 PRINT "izations that CAN BE applied to MAKE the work more EFFECTIVE. But "
1830 PRINT
1840 PRINT "they are ALL subject to the writer's JUDGEMENT. Experiments have"
1850 PRINT
1860 PRINT "shown that the MORE you do hilite-ing the EASIER it becomes. And if"
1870 PRINT
1880 PRINT "the SAME paragraph is hilited on TWO separate occasions, a compar-"
1890 PRINT
1900 PRINT "ison will SHOW a very SIMILIAR pattern of hilite-ing EVEN if its"
1910 PRINT
1920 PRINT "done by TWO individuals who DON'T know what the OTHER has done."
1930 PRINT
1940 GOSUB 2800
1950 PRINT
1960 PRINT "First, there is automatic POSITION hilite-ing. The first and last"
1970 PRINT
1980 PRINT "words of a sentence are emphasized by  their LOCATION. The first"
1990 PRINT
2000 PRINT "BEGINS with a capital letter, the last, ENDS with a period.It may "
2010 PRINT
2020 PRINT "NOT be necessary to hilite these WORDS unless they  could be MIS-"
2030 PRINT
2040 PRINT "READ or are a NEW, or strange topic or expression.
2050 PRINT
2060 GOSUB 2800
2070 PRINT
2080 PRINT "When  NEW jargon is explained  it is a good time to hilite it and"
2090 PRINT
2100 PRINT "then to OMIT its hilite-ing later UNLESS it is necessary in the "
2110 PRINT
2120 PRINT "judgement of the writer. Modifiers and CONDITION words like yes,"
2130 PRINT
2140 PRINT "no, up, down, big, little, strong, weak usually NEED hiliting,but"
2150 PRINT
2160 PRINT "NOT always.Sometimes hiliting ONCE is enough to call the READERS "
2170 PRINT
2180 PRINT "attention to the WORD or phrase being REPEATED in a paragraph. But"
2190 PRINT
2200 PRINT "PERHAPS in a paragraph FURTHER along it MIGHT be worth repeating "
2210 PRINT
2220 PRINT "the hilite AGAIN.
2230 PRINT
2240 GOSUB 2800
2250 PRINT
2260 PRINT "Keywords that could REVERSE the TONE or position of the statement"
2270 PRINT
2280 PRINT "are LIKELY candidates for hiliting. There are MANY variations and"
2290 PRINT
2300 PRINT "RULES, at best, should be guidelines rather than iron bound. It is"
2310 PRINT
2320 PRINT "SUGGESTED however, that the writing be COMPLETELY finished before"
2330 PRINT
2340 PRINT "ANY attempt to do hiliting. Then the author or a proof-reader,
2350 PRINT
2360 PRINT "who is FAMILIAR with the work, should TAKE a hiliter and add JUST"
2370 PRINT
2380 PRINT "enough EMPHASIS to clarify and FACILITATE its READING. It's pref-"
2390 PRINT
2400 PRINT "erable NOT to write and hilite at the SAME time unless the AUTHOR "
2410 PRINT
2420 PRINT "wants a PARTICULAR word or phrase hilited in a particular way."
2430 PRINT
2440 GOSUB 2800
2450 PRINT
2460 PRINT "Try a TEST for your OWN information. Take a newspaper COLUMN and"
2470 PRINT
2480 PRINT "Xerox 4 copies and GIVE it to a friend to hilite WHILE you do it"
2490 PRINT
2500 PRINT "also. Save TWO copies to do LATER, WITHOUT looking at your FIRST"
2510 PRINT
2520 PRINT "set AGAIN. Mark them so that you KNOW which is FIRST and which "
2530 PRINT
2540 PRINT "is SECOND. Then COMPARE them in DETAIL with your friend. Read them"
2550 PRINT
2560 PRINT "ALOUD and look over your hilites. You'll be AMAZED at the similiar"
2570 PRINT
2580 PRINT "RESULTS you'll have and the LEARNING experience will be BENEFICIAL.
2590 PRINT
2600 COLOR 31
2610 PRINT :PRINT "REMEMBER, NO TWO PEOPLE HAVE THE SAME VERBAL INFLECTION --   AND THATS GOOD!"
2620 COLOR 7
2630 GOSUB 2800
2635 IF CHAYNBAK$="YES" THEN 2900
2640 PRINT "YOU ARE BACK IN BASIC"
2650 END
2660 REM ----SAVE"AMUSIC"-----SHORT SELECTIONS FOR GOSUBS
2670 PLAY "MSMBO2T240L8CFAO3C4O2AO3C2"             'CHARGE
2680 GOSUB 2770
2690 PLAY "MLMBT120O2L6GBDBB"                      'AOOGHA
2700 GOSUB 2770
2710 PLAY "MSMBT120O2L8GGGE-1FFFD1"                'FIFTH SYMPHONY
2720 GOSUB 2770
2730 PLAY "MNMBO2T210L8GFE2O1GO2E2O1GO2E2P4FED2O1AO2D2O1AO2D2" 'MERRY OLDSMOBL"
2740 GOSUB 2780
2750 PLAY "MSMBT180O2L8FFGAFAG4P16FFGAF4EP8FFGAB-AGFECDEF4F"  'YANKEE DOODLE
2760 END
2770 FOR DELAY = 1 TO 5000 :NEXT : RETURN
2780 FOR DELAY = 1 TO 10000:NEXT :RETURN
2790 STOP
2800 REM----SAVE"ASPACBAR----press space bar to continue subroutine
2810 DEF SEG=0:POKE 1052,PEEK(1050)      'REM flush kybdbuffer
2820 PRINT :PRINT TAB(10)"PRESS SPACE BAR TO CONTINUE--ESC FOR MENU"
2830 PLAY "MLMBT120O2L6GBDBB"                      'AOOGHA
2840 K$=INKEY$:IF K$="" THEN 2840
2850 IF K$=" " THEN 2870
2860 IF K$=CHR$(27) THEN 2890 ELSE 2820      'exit to MENU
2870 SOUND 1000,5
2880 RETURN
2890 IF CHAYNBAK$="YES" THEN 2900 ELSE RETURN
2900 CHAIN "MENU.BAS",615,ALL
2910 REM---SAVE"TALKPAGE"
```
{% endraw %}

## WHATISPS.DOC

{% raw %}
```






                  W h a t  a r e   P e o p l e S y s t e m s  PS ?

            

                 While technology systems (thing-systems) have made

            super progress, have present day systems for people kept

            pace with society's needs? The answer is  NO.  There is

            failure and despair in many places. The homeless, the poor,

            the drug addicts, the disadvantaged, the delinquents, the

            broken homes, the abused, the illiterate, the runaways, the

            drop outs, the criminals, the suicides, -- supporting the

            conclusion that many of today's systems for people are

            bankrupt.

            

                 In fact, thing-systems can put a man on the moon, give

            him a vehicle to ride and then bring him safely back to his

            loved ones -- BUT, using today's systems for people  many

            youngsters can't even get through high school, learning what

            they need to be good citizens -- to enjoy a productive life

            -- free of want and fear.

            

                 With powerful thing-systems, we can dial a new phone

            number, and talk with anyone, anywhere in the free world,

            BUT,  at the same time, using our outmoded systems for

            people, some folks can't even  talk about a serious subject

            with their loved ones in the same room.

            

















                 This new book on PeopleSystems works to create an

            improved interface between people and today's complex

            technology.

            

                          PeopleSystems on the PCXT

            

             -- designed for easy reading -- is dedicated to promoting

            progress without flash or fanfare.

                 PeopleSystems are simply the regular, often daily

            patterns that can guide, control or just play a part in our

            lives. PeopleSystems are made up of the HABITS-III, the

            CUSTOMS-II and the LAWS-I that can cause or restrict human

            activities. The progress or stagnation of society is often

            reflected its PeopleSystems.  Examples:   Three meals aday.

            Or K thru 12, then college, job or family.,etc.

                 The progress of thing-systems is centuries ahead of

            systems for people. In fact, during the last few decades,

            systems for people were mostly ineffective -- stumbling

            through all sorts of self-destructive patterns in the

            family, the government, big business, the environment and

            many other institutions. USA's systems for people were once

            a model of progress for the world.

            

                 As Rousseau said - Perhaps people have grown too smart,

            too soon ?  Or - Some people don't understand half of what

            they think they know.

            













                 You may hear the guru's of people control -- the psych-

            ologists exclaim:  BUT, you can't systemize people ! HUH ?

            Perhaps what they mean is -- Try not to let people know you

            want to help them, otherwise you may not succeed. CLAP-TRAP

            from Sophomore Clinical Psychology 101A.

            

                 PeopleSystems has found out that most people are super-

            systematic, and whether they know it or not, they also try

            to use systems that work and succeed. People will rebel,

            however, if required to follow dumb systems that don't work.

            

                 Ask the ~un-believer~ how many different routes he uses

            to go home from work? Then ask -- Which way (or system) does

            he use most of the time?    HE DIDN'T REALIZE HIS METHOD FOR

            GOING HOME WAS A SYSTEM or PATTERN! -- FOR SHAME.

            

                 Here are some commonplace examples of PeopleSystems:

            

               HABITS-III        CUSTOMS-II        GOVERNMENT OR LAWS-I

            

             brush  teeth      watch  weight      follow traffic rules

             wash  face        kind to ladies     marriage/ divorce laws

             wear shoes        hold a wake        funeral laws

             speak clearly     talk English       pay judgments

             chew mouth shut   eat three meals    ingredients on package

             carry money       use U.S. money     don't deface currency

             date others       set up household   get married













             buy things        earn a living      pay taxes

            

             REMEMBER: A SYSTEM is just  a SET of EVENTS with a PURPOSE.

            

                 There are many more complicated ways to define a

            system, but the simplest is the best. If a concept or idea

            can't be explained in a simple manner, than there may be

            something wrong with the system. OR this may not be a basic

            unit, a root unit, in systems. Most systems are made up of

            other systems.









































```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0907

     Volume in drive A has no label
     Directory of A:\

    ANYKEY   TBX       896   4-17-83   6:03a
    AINK$    TBX      1408   4-17-83   8:43a
    AUREVOIR TBX      3328   4-16-83  10:15a
    ASCKEY$  TBX      1152   4-17-83   9:12a
    ALLCHARS TBX       896   4-17-83   4:38a
    ARAYCOMP TBX       613   1-01-80  12:07a
    ABSECTOR TBX      1152   4-28-83   4:41p
    INDEX1   BAS      4022  10-26-87   7:29a
    FLIPPIES TBX      6656   3-15-83   6:59p
    MARKSCRN TBX      1024   2-21-83  11:50a
    SCRNMAP  TBX       384   2-21-83  11:53a
    LOKATE   TBX       482   1-01-80  12:21a
    COLRTOGL TBX      1110   1-01-80  12:25a
    TESTEROR TBX       640   4-15-83   4:13p
    BANANA1  TBX      1152   4-16-83  12:25p
    ERROR1   TBX      1664   4-15-83   5:50p
    ERROR2   TBX      1536   4-15-83   7:20p
    BANANA2  TBX       512   4-16-83  12:38p
    NICELEGS TBX      1664   4-16-83  12:45p
    SONGRITR TBX      5504   4-17-83  11:08a
    SOUNDZ   TBX      7424   4-17-83  11:22a
    BLACKOUT TBX      1920   4-17-83   4:26a
    GSBMUSIC TBX      1536   4-18-83   3:58a
    DEBUG    DOC     11507   4-01-83   8:18a
    GOBANANA DOC     12252   4-01-83   8:40a
    HORNBOOK DOC     15646   4-11-83   6:58p
    PEEKFILE DOC     17407   5-02-83   4:40p
    STUFCHIP DOC     14790   5-03-83  12:33p
    BROWSE   COM       960   2-26-86   3:31a
    TALKPAGE BAS     10752   1-01-80  12:19a
    LETTER   BAS      3968   5-06-83  10:16a
    -------              2   1-01-80  12:07a
    INDEX2   BAS      5026  10-26-87   7:46a
    CURSER   TBX       733   1-01-80  12:06a
    ERRMESAG TBX      1280   5-04-83   7:40p
    ERORNUM  DAT       128   1-01-80  12:09a
    INPUTEST TBX       768   4-16-83   9:56a
    PEOPLSYS TBX      3200   4-16-83  10:31a
    DISKLABL TBX      2304   4-16-83  10:40a
    DOLABEL  TBX       512   4-16-83  10:41a
    F5ERRMSG TBX       256   4-16-83  11:07a
    NOTENUMB TBX      1024   4-16-83  12:51p
    HEXSCALE TBX     10752   4-16-83  12:59p
    MACHLANG TBX      1152   4-16-83   1:23p
    WPROT    TBX      1024   4-17-83   8:02a
    SOFTKEYS TBX      1792   4-17-83  10:22a
    IBMKEYS  TBX      1024   4-17-83  10:55a
    COMO     TBX       768   4-17-83  11:46a
    COLOR    BAS       256   4-17-83  11:51a
    MONO     BAS       256   4-17-83  11:53a
    COLORBOX TBX      1408   4-17-83   6:58a
    MEMTEST1 TBX       896   4-18-83   4:15a
    FUNCTKEY TBX      2048   4-18-83   4:48p
    HEX2DEC  TBX       768   4-18-83   6:54p
    BASUNPRO TBX       512   4-18-83   7:13p
    PROTECTD TBX       128   4-18-83   7:22p
    SAVEDLIN TBX      6656   4-18-83   7:37p
    SCRNCHRS TBX       384   4-18-83   7:58p
    XMASTREE TBX       896   4-18-83   2:40p
    BOOBOO   DOC     10749   5-03-83  11:54a
    DISKMOD  DOC      6953   5-02-83  12:33p
    SENSITIV DOC      8801   4-26-83  11:13a
    CLUSECTR TBX      1280   5-01-83   8:22p
    FRIENDLY TBX      9856   4-25-83   4:33p
    DAMNTRIV DOC     50890  11-01-87   3:43p
    PEPLSYST BAS      4835  10-25-87   9:20p
    README2  DOC      5375  10-30-87   9:22a
    WHATISPS DOC      5492  10-30-87   8:08a
    README            1542   1-01-80  12:09a
    FILES907 TXT      4119  12-08-87   1:45p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617  12-07-87   3:16p
           72 file(s)     290457 bytes
                           36864 bytes free
