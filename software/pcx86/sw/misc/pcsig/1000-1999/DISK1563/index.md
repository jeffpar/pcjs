---
layout: page
title: "PC-SIG Diskette Library (Disk #1563)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1563/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1563"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GUESS IT II"

    Game players beware, it's addictive.  If you like word or spelling
    games GUESS-IT may get you hooked.  Like hangman, you get several
    guesses to figure out all the letters in the mystery word.  In itself
    that might not sound too rough, but the 30,000 word list that comes
    with GUESS-IT  will challenge even the most developed vocabularies.
    
    As you make your guesses, the Guess-IT display keeps track of your
    progress.  The scoreboard displays how many guesses you are allowed and
    how many you have used.  The scoreboard also displays how many words or
    phrases you have tried and how many you have solved.  There's a
    "peanut gallery" that makes comments, and also asks you if you want to
    try another word.  You'll be kept abreast of the letters you have used
    and your progress with the current problem.  If you run out of guesses,
    the secret word will be displayed for you.
    
    GUESS-IT can be customized to use your own word or phrase lists.  By
    making your own lists, GUESS-IT becomes a great tutorial for any topic.
    Build a list of your favorite spelling words, great historical figures,
    important geographical points, or famous quotes.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1563.TXT

{% raw %}
```
Disk No: 1563                                                           
Disk Title: Guess IT II/Tower of Hanoi                                  
PC-SIG Version: S1                                                      
                                                                        
Program Title: Guess IT II                                              
Author Version: 2                                                       
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
Game players beware, it's addictive.  If you like word or spelling      
games GUESS-IT may get you hooked.  Like Hangman, you get several       
guesses to figure out all the letters in the mystery word.  In itself   
that might not sound too rough, but the 30,000 word list that comes     
with GUESS-IT  will challenge even the most developed vocabularies.     
                                                                        
As you make your guesses, the Guess-IT display keeps track of your      
progress.  The Scoreboard displays how many guesses you are allowed and 
how many you have used.  The Scoreboard also displays how many words or 
phrases you have tried and how many you have solved.  There's a         
``Peanut Gallery'' that makes comments, and also asks you if you want   
to try another word.  You'll be kept abreast of the letters you have    
used and your progress with the current problem.  If you run out of     
guesses, the secret word will be displayed for you.                     
                                                                        
GUESS-IT can be customized to use your own word or phrase lists.  By    
making your own lists, GUESS-IT becomes a great tutorial for any topic. 
Build a list of your favorite spelling words, great historical figures, 
important geographical points, or famous quotes.                        
                                                                        
File Descriptions:                                                      
                                                                        
GI       BAT  Batch file to show how to configure and start GUESS-IT.   
GUESSIT  DOC  Instruction manual.                                       
GUESSIT  EXE  Main Program.                                             
LOOK     EXE  Utility to search text files, such as the word lists.     
README        Brief information file about the GUESS-IT files.          
WORDS    LST  Sorted word list for GUESS-IT.                            
Program Title: Tower of Hanoi                                           
Author Version: S1                                                      
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
If you know the TOWER OF HANOI problem it may still be plaguing you--how
to get those discs restacked from one tower to another without stacking 
a big disc on top of a little one and only moving one disk at a time.   
If you don't know the problem yet, get this disk just to stress-out your
friends with one of the great all time brain teasers.  While the TOWER  
OF HANOI brain teaser can be depicted on paper or just described, this  
program uses the computer to animate the solution to the TOWER OF HANOI 
problem.  Options let you control the size of the problem, monitor the  
moves, and control the speed.  Good Luck and drive your friends crazy.  
                                                                        
File Descriptions:                                                      
                                                                        
HANOI    EXE  Main program complete with opening explanation screen.    
                                                                        
                                                                        
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
║       <<<<  Disk #1563  GuessIT II and TOWER OF HANOI  >>>>             ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start GuessIT II, type:  GUESSIT (press enter)                       ║
║ To start TOWER OF HANOI, type:  HANOI (press enter)                     ║
║                                                                         ║
║ To print documentation for GuessIT II, type:                            ║
║                                      COPY GUESSIT.DOC PRN (press enter) ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GUESSIT.DOC

{% raw %}
```
***********************************************************************
*                                                                     *
*   GuessIT: A PC-Based Game to Guess Words or Phrases (Version II)   *
*                                                                     *
***********************************************************************

          * tests your knowledge of words and facts
          * can be adapted for different levels of difficulty
          * can run flashcard quizzes on many subjects
          * can use your personal word and fact lists
          * comes with several challenging lists
          * distributed as shareware (suggested contribution: $10)

                      Copyright Gary Perlman 1989
                  Box 791, Worthington, Ohio 43085 USA

_______________________ QUICK START INSTRUCTIONS _______________________

        Put the floppy disk in drive A: and type the commands:
            A:GUESSIT
        Then, type letters to guess the letters in the words.

        For an idea of the quiz capabilities of GuessIT:
            A:GUESSIT -L STATES.LST
        When GuessIT asks you to Choose a Secret, type 3 (for Capital).
        When GuessIT asks you to Choose a Hint, type 1 (for State name).
        Then, type letters to guess the capital cities of states.

____________________________ DISK CONTENTS _____________________________

        GUESSIT .EXE   The word/phrase guessing program
        GUESSIT .DOC   This file describing GuessIT
        ANIMALS .LST   Names of animals, groups, male, female, and young
        AUTHORS .LST   Books and their authors
        ELEMENTS.LST   Chemical elements and facts about them
        LANGUAGE.LST   Months, weekdays, and numbers in several languages
        PROVINCE.LST   Names, capitals, and confederation dates in Canada
        NATIONS .LST   Nations and facts about them
        SPORTS  .LST   Sports teams and where they play
        STATES  .LST   U.S. states and facts about them
        WORDS   .LST   A list of about 30,000 difficult words

__________________________ TABLE OF CONTENTS ___________________________

                [1] WELCOME TO GuessIT
                    [1.1] The Purpose of GuessIT
                    [1.2] System Requirements
                    [1.3] A Short History of GuessIT
                    [1.4] The Shareware Concept

                [2] GETTING STARTED WITH GuessIT
                    [2.1] Installation Instructions
                    [2.2] Running GuessIT

                [3] CUSTOMIZING GuessIT WITH OPTIONS
                    [3.1] The Secret List (-L)
                    [3.2] Managing a Directory of Secret Lists (-D)
                    [3.3] Controlling the Degree of Difficulty (-G, -C)
                    [3.4] Hints in Secret Lists (-H, -T)
                    [3.5] Creating a Custom BATCH File to Run GuessIT

                [4] MORE ABOUT WORD, PHRASE, AND FACT LISTS
                    [4.1] Lists Supplied with GuessIT
                    [4.2] Advanced Information About GuessIT Lists
[1] WELCOME TO GuessIT

    GuessIT is a word game that comes with lots of challenging lists
    and tables of words and facts.  You can play it for a minute or an
    hour, and you can make your own lists.

  [1.1] The Purpose of GuessIT

    GuessIT is based on a popular word-guessing game.  In GuessIT, a
    template for a secret word or phrase is displayed on the screen, and
    your goal is to guess all its letters.  With some lists of secrets,
    you can get hints.  For example, to guess the French word "janvier"
    your hint might be "January" or even "enero" (Spanish for January). 
    Part of the playing "Arena" might look like this:

        Spanish: enero
        French:  _______

    You only get a limited number of guesses, so you can't simply type
    the whole alphabet.  As you make your guesses, the GuessIT display
    keeps track of your progress.  The Scoreboard displays how many
    guesses you are allowed and how many you have used.  The Scoreboard
    also displays how many words or phrases you have tried and how many
    you have guessed.  The Peanut Gallery makes superfluous but benign
    comments, and also asks you if you want to try another secret.  The
    Arena contains a record of the letters you have used and your
    progress with the current secret.  If you run out of guesses, the
    secret will be displayed in the Arena. 

  [1.2] System Requirements

    [1.2.1] CPU Requirements:  Any PC Compatible computer.

    [1.2.2] Software Requirements:  No other software needed.

    [1.2.3] Disk Requirements:  Minimal.  GuessIT can run directly from
    a 360 Kbyte floppy disk.  You can install Guess-IT on your hard disk,
    but that is not necessary for good performance.

    [1.2.4] Display Requirements:  Monochrome or color text displays.
    If you are running GuessIT on an LCD or shaded "color" display, you
    might find that the display is more readable if you run the program
    in black and white (BW) mode; before running GuessIT, you may want
    to run one of the following DOS commands.

        MODE BW80
        MODE BW40

    GuessIT runs in 40 or 80 column modes, and uses the mode that it
    detects when it starts.  If you prefer the 40 column mode, which is
    nice for younger players, you might set up a BATCH file to set the
    display mode to 40 column, run GuessIT, and reset back to 80 column:

        MODE BW40
        GUESSIT
        MODE CO80

    GuessIT displays directly to screen memory for high speed.  If this
    causes "snow" then you should run GuessIT with the -V option to
    turn off direct video display.

  [1.3] A Short History of GuessIT

    GuessIT grew out of a computer version of the game "hangman" in
    which you guess the letters of words.  I did not like the violent
    nature of hangman, which constructed gallows as you missed letters,
    and I wanted to have a game that had a fun display.  The first
    version of GuessIT accomplished this but I was not satisfied with
    the ability to play GuessIT with children.  In GuessIT II, I added
    hints so that children could guess an answer without using detailed
    knowledge about the structure of words.  The ability to interchange
    secrets and hints made GuessIT a good program for quizzes. 

  [1.4] The Shareware Concept

    GuessIT is distributed as shareware.  It is copyrighted, so you
    should not modify it or sell it, but you can copy and distribute it
    free of charge, provided that you distribute the program and this
    document file intact.  If you use and enjoy GuessIT, then please
    send $10 to me for my efforts.  I'll send you an upgrade of GuessIT
    when it becomes available.

        Gary Perlman, Box 791, Worthington, Ohio 43085 USA

[2] GETTING STARTED WITH GuessIT

  [2.1] Installation Instructions

    You do not need to do any installation of GuessIT because you can
    run GuessIT from a floppy disk.  You can also install GuessIT in any
    directory on your hard disk.  If you install GuessIT in a directory
    on your hard disk, you may want to edit a BATCH file to point to
    the directory.

    To install GuessIT in a directory, say C:\GUESSIT, all you need to
    do is create the directory and copy all the files on the floppy,
    which, in the following example, is assumed to be in drive A:

        MKDIR  C:\GUESSIT
        COPY  A:*.*  C:\GUESSIT

    GuessIT can read huge lists of words or phrases, but it only needs
    one word or phrase at a time.  Disk access time is not a problem for
    GuessIT so you can keep GuessIT on a floppy disk and save the
    space used by the program and word lists.  Being able to run from a
    floppy makes GuessIT an ideal game for people on the road with a
    portable computer.  GuessIT is a good game to play on a laptop for
    a few minutes while you wait for a plane. 

  [2.2] Running GuessIT

    [2.2.1] Starting GuessIT: If you are running GuessIT from a floppy or
    you are in the directory where it is installed, you only need to type:

        GUESSIT

    See the section on options to customize the way GuessIT works.

    [2.2.2] The GuessIT Display: The top line shows the name of the game
    and an instruction or two.  The top two windows are The Scoreboard and
    the Peanut Gallery.  The bottom window is The Arena, where the guessing
    takes place.  The bottom line shows the copyright and a 24-hour clock.

    [2.2.3] Guessing Letters: Depending on the secret list, you may have
    hints available to help you guess the secret word.  For secret lists of
    facts about things like nations or states, you will be shown a menu of
    what you would like to guess (the secret) and what hint you would like
    to be shown.  This setup, if applicable, is done in the Peanut Gallery.
    Select from menus with digits.  After setup, you begin guessing letters.

    [2.2.4] Stopping GuessIT: You can quit GuessIT at any time by typing the
    Escape (ESC) key.  At the end of a round of trying to guess a secret,
    GuessIT asks in the Peanut Gallery if you want to try another.  Typing
    the letter N here will also get you out. 

[3] CUSTOMIZING GuessIT WITH OPTIONS

    The following table is printed when you use the -O option when
    starting GuessIT or when an option error is detected.  Explanations
    of the options follow the table. 

    GuessIT: Guess the Word or Phrase [Version 2.0 (July 1989)]
    -C chars       minimum characters in secrets   7
    -D directory   directory holding lists . . .   A:\
    -G guesses     maximum guesses per word  . .   7
    -H hintchar    char between secret and hints   :
    -L listfile    file of list of secrets . . .   words.lst
    -O             print this option summary . .   NO
    -T             print table of listfile . . .   NO
    -V             turn off direct video output

  [3.1] The Secret List (-L)

    GuessIT comes with a list of over 30,000 words that will provide
    many hours of challenge.  GuessIT can be adapted to any list of
    words or phrases, provided that they are on one line that fits on
    the display (for long phrases, 80 column display mode is best).  To
    choose a new list of words or phrases for GuessIT, use the -L
    option.  For example, you might have a list of quotes called
    QUOTES.LST.  You could run GuessIT on this list with the command:

        GUESSIT -L QUOTES.LST

  [3.2] Managing a Directory of Secret Lists (-D)

    GuessIT comes with many secret lists (described later).  Instead of
    requiring that you type in the whole pathname of a secret list (for
    example, C:\GUESSIT\ANIMALS.LST), GuessIT lets you select the
    directory where it will look for lists.  First, GuessIT looks in the
    current directory for a list.  If it does not find it there, it looks
    in the directory where the GuessIT program (GUESSIT.EXE) resides.
    You can force GuessIT to look in a specific directory with the -D
    option.  If GUESSIT.EXE is in one directory and your secret lists are
    in C:\GUESSIT, you could access the list about nations with:

        GUESSIT -L NATIONS.LST -D C:\GUESSIT

    I save this information in a BATCH file, GI.BAT, to avoid retyping.
    In the future, a menu of lists may be available from inside GuessIT.

  [3.3] Controlling the Degree of Difficulty (-G, -C)

    You can make it easier to guess a word or phrase by allowing more missed
    letters to guess a secret.  The -G option will allow you to specify the
    minimum number of guesses allowed.  You can also make it easier to
    guess secrets by using longer secrets.  The -C option sets the minimum
    number of characters in secrets, blank spaces included.  The more
    letters in a secret, the easier it is to guess because it is more likely
    that a guessed letter appears in the secret.  The following command will
    allow 11 guesses for secrets with at least 9 characters:

        GUESSIT -G11 -C9

    GuessIT may not be able to find secrets if you ask for ones that are too
    long.  The number of characters (-C) option is ignored in short lists.

  [3.4] Hints in Secret Lists (-H, -T)

    With some secret lists, GuessIT lets you see a hint about the
    secret.  For example, you might make a list of famous events in
    which the hint is the date on which the event took place.  The hint
    for a secret follows the hint character (by default, the colon) as
    shown below. 

        Battle of Hastings         : 1066
        Signing of the Magna Carta : 1215
        Columbus Discovers America : 1492

    If you make your own lists, you should use the colon (:) to separate
    secrets from hints.  But if you have a list in about the right form,
    you can use the -H option to tell GuessIT to use a different
    character.  The next command says to use a comma.

        GUESSIT -L EVENTS.LST -H ,

    Many lists contain useful information that can be printed in a table
    with the -T option.  All columns are aligned in the output, which
    can be saved in a file with a command like the following:

        GUESSIT -T -L LANGUAGE.LST > LANGUAGE.TAB

    Tables can be very wide, so for printing, use small text!

  [3.5] Creating a Custom BATCH File to Run GuessIT

    Instead of typing long commands, you can save them in a BATCH file.
    You have to know how to edit files to be able to create and modify
    a BATCH file.  Any editor like LINEDIT is adequate for this.

    Before running GuessIT, you might want to put the screen in
    40-column mode to get big letters on the display:

        MODE CO40

    For MONO screens, only 80-column mode is available.  For black and
    white displays emulating color with shades, use MODE BW40.  After
    running GuessIT, you would reset the screen with a command like:

        MODE CO80

    Now, assume that the GuessIT program, GUESSIT.EXE, is in C:\GAMES and
    the lists (like WORDS.LST) are in D:\GUESSIT.  You can substitute your
    own directories.  The following will point GuessIT to the right directory:

        C:\GAMES\GUESSIT -D D:\GUESSIT -G7 -C8

    To be able to set or reset options from the BATCH file, BATCH file
    variables: %1, %2, ....  can be added to the commands in GI.BAT:

        MODE CO40
        C:\GAMES\GUESSIT -D D:\GUESSIT -G7 -C8 %1 %2 %3 %4 %5
        MODE CO80

    Place GI.BAT into a directory on your PATH command in AUTOEXEC.BAT.
    Then, to run GuessIT on the list of facts on nations of the world,
    allowing for 2 missed guesses, you would run:

        GI -L NATIONS.LST -G 2

    To avoid typing the -L and the .LST part, you could use:

        C:\GAMES\GUESSIT -D D:\GUESSIT -G7 -C8 -L %1.LST %2 %3 %4 %5

    and type:

        GI NATIONS
[4] MORE ABOUT WORD, PHRASE, AND FACT LISTS

    Besides ordinary words, which are fun to guess, you can get a lot of
    enjoyment and even some education from lists with hints in them. 
    For example, a list of states or countries and their capitals can
    help you learn about geography.  A list of chemical elements and
    their symbols can help you learn some science.  A list of books and
    their authors can help you learn about books you never read!  Famous
    quotes, biblical names, famous physicists, historical events, .... 
    The possibilities are unlimited.  Send your ideas for lists to me,
    or better yet, send me your lists on a floppy! 

  [4.1] Lists Supplied with GuessIT

    Here are the example lists that come with GuessIT.  They provide a
    rich set of challenges for all types of people, both young and old.
    Although I have worked hard at getting the information in the lists
    right, please don't stake anything of value on them.  By looking at
    the contents of the files, it is easy to figure out how to modify
    them or make your own new lists, but a detailed explanation follows.
    When you run GuessIT with a list with hints, you will be asked (in
    the Peanut Gallery) to choose from a menu the secret you want to
    guess and the hint you want to receive.  By selecting the same hint
    as the secret, you tell GuessIT to provide no hint.  With hints, it
    is much easier to guess secrets, so I suggest you use less guesses.
    Try running the following command to see how hints work.

        GUESSIT -L NATIONS.LST -G 2

    WORDS.LST: A sorted list of about 30,000 words.  This is the default
    list, with no hints.  Each word in the list has at least five
    letters, has only lower case letters, and any letter appears only
    once in a word.  This list is a subset of a much larger list (almost
    250,000 words) so many of the words are obscure.  You need to use
    abstract knowledge of word structure to do well with this list. 

    ANIMALS.LST: A list of names of animals, groups, male, female, and
    young.  Before you play this with your kids, you might want to think
    about what a female dog (or wolf) is called. 

    AUTHORS.LST: A list of works containing the name of the author, the
    title, and the date of authorship or publication. 

    ELEMENTS.LST: A list of chemical elements including the element
    name, its symbol, its number, and its group in the periodic table. 

    LANGUAGE.LST: A list of months, weekdays, and numbers in several
    languages:  English, French, Italian, Spanish, German, and Swedish.

    NATIONS.LST: A list of nations containing the name of the country,
    the capital city, the location (for example, the continent), the
    official or predominant languages, the money or currency used, and
    the year it was admitted to the United Nations. 

    PROVINCE.LST: A list of Canadian provinces and territories, their
    capitals, and the dates they joined Canada.

    SPORTS.LST: A list of professional sports teams with their team
    names, division, and where they play. 

    STATES.LST: A list of U.S. states containing the name of the state,
    the capital city, the two-letter postal abbreviation, the state
    flower, the state bird, the state tree, the state nickname, and the
    state motto (translated into English). 

[4.2] Advanced Information About GuessIT Lists

    There are two types of GuessIT lists: long lists with no hints and
    short lists with hints.  Short lists with no hints are either too
    hard or too boring.  Long lists with hints are a lot of work to
    create.  A short list is one with less than 16000 characters.  Short
    lists are loaded in their entirety into GuessIT when it starts, and
    the order of the secrets is randomized.  Each secret in a short list
    is presented only once (during a run of GuessIT).  In long lists,
    the file of secrets is opened and a secret is randomly selected;
    repeated presentations of the same secret is unlikely. 

    To simplify the explanation of lists, we'll work through an example
    of a list that you could make for a child.  FAMILY.LST is a fun game
    to play with your kid.  Make a list of family member names, with
    hints that describe the member.  Here is a list that might be made
    for Elroy Jetson:

        :NAME        : HINT
        :Elroy       : Your Name
        :George      : Your Dad
        :Jane        : Your Mom
        :Judy        : Your Sister
        :Astro       : Your Dog
        :Mr. Spacely : Dad's Boss

    The first line of the file describes the secret and hint.  You can
    tell it is a description line because it begins with a punctuation
    character (others might be a bar or comma).  Whatever is the
    punctuation character, it will be used as the separator between
    secrets and hints (over-riding the -H option).  These descriptions
    (NAME, HINT) will be used in the GuessIT display, so they should be
    eight characters or less.  If the description line is not present,
    then the part before the hint character is used as the secret and
    the part after is used as the hint.  When a description line is
    used, secrets and hints are interchangeable; that is, you can be
    shown "Astro" and have to guess "Your Dog".  When a description line
    is present, GuessIT displays a menu of all the possible hints and
    secrets in the Peanut Gallery and asks you to choose the secret and
    the hint.  Menu selection is done with single number digits. 

    Secret lists can have more than just one secret and one hint.  For
    example, in the STATES.LST file, there is the state name, its postal
    abbreviation, its capital city, its state flower, and so on.  From a
    state name (the hint) you might want to try to guess the state bird.
    Going the other way is also possible, but there are some birds that
    are the state bird of more than one state; the cardinal has been
    chosen by seven states.  When there is more information about a
    secret than just the hint you selected, you can see it by typing ?
    and looking in the Peanut Gallery.  For example, if you were guessing
    the state whose bird is the roadrunner, The Arena would contain:

        Bird:    Roadrunner
        State:   ___ ______

    and an extra hint (typing ?) would fill the Peanut Gallery with:

        Capital :  Santa Fe
        Abbrev  :  NM
        Nickname:  Land of Enchantment
        Motto   :  (It Grows as it Goes)
        Flower  :  Yucca
        Tree    :  Pinon
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1563

     Volume in drive A has no label
     Directory of A:\

    ANIMALS  LST       779   8-02-89
    AUTHORS  LST      7860   8-02-89
    ELEMENTS LST      2252   8-02-89
    FILE1563 TXT      4589  10-20-89   5:14p
    GI       BAT      1521   4-12-89  12:00p
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       694   1-01-80  12:44a
    GUESSIT  DOC     21844   8-02-89
    GUESSIT  EXE     38676   8-02-89
    HANOI    EXE     13588   4-12-89  12:00p
    LANGUAGE LST      1972   8-02-89
    NATIONS  LST      8696   8-02-89
    PROVINCE LST       381   8-02-89
    README            1058   1-01-80  12:23a
    SPORTS   LST      7050   8-02-89
    STATES   LST      5242   8-02-89
           16 file(s)     116240 bytes
                           40448 bytes free
