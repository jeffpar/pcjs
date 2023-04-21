---
layout: page
title: "PC-SIG Diskette Library (Disk #1412)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1412/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1412"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LEARN TO GUESS"

    LEARN TO GUESS is a set of four games that can help your child,
    grades 1-12, to learn basic arithmetic and develop problem-solving
    strategies. Each of the games is complete in itself. When used in
    sequence, skills already learned are honed and reinforced.
    
    In GUESSME, for one to four players, students in grades 1-8 develop
    their problem-solving strategies by trying to guess the computer's
    secret number. There are eight levels of difficulty which sustain the
    challenge for most players. Other concepts used in the remaining
    programs are introduced here.
    
    ROMAN GUESSME is identical to GUESSME, except the numbers used are
    displayed as, and must be entered as, Roman numerals. Grades 5-12.
    
    At first glance, NEAREST (a game for two to four players) seems to be a
    simple number-guessing game, but it requires sharper thinking than is at
    first apparent. Appropriate for grades 2-8.
    
    SUPERGUESS, for two to four players, challenges students in grades 3-12
    to exercise their knowledge of prime numbers, composite numbers,
    factors, multiples, sums, differences, and products as they compete
    against one another in a race across the computer's screen.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1412.TXT

{% raw %}
```
Disk No: 1412
Program Title:  LEARN TO GUESS
PC-SIG version 1

LEARN TO GUESS is a set of four games that can help your child, in
grades 1-12, to learn basic arithemetic and develop problem-solving
strategies.  Each of the games is complete in itself.  When used in
sequence, skills already learned are honed and reinforced.

In GUESSME, for one to four players, students in grades 1-8 develop
their problem solving strategies by trying to guess the computer's
secret number.  There are eight levels of difficulty which will sustain
a challenge for most players.  Other concepts used in the remaining
programs are introduced here.

ROMAN GUESSME is identical to GUESSME, except that all of the numbers
used in the game are displayed as, and must be entered as, Roman
numerals.  Grades 5-12.

At first glance NEAREST, a game for from two to four players, seems to
be a simple number guessing game, but it requires sharper thinking than
is first apparent.  Appropriate for grades 2-8.

SUPERGUESS, for two to four players, challenges students in grades 3-12
to call upon all of their knowledge of prime numbers, composite numbers,
factors, multiples, sums, differences and products as they compete
against one another in a race across the computer's screen.

Synopsis: A set of four challenging games for children, grades 1-12,
that teaches arithmetic and problem-solving skills.

Usage:  Children's Educational-Math/Game.

Special Requirements:  CGA graphics card.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00

File Descriptions:

GUESS    CHN  Chain programs for LEARN TO GUESS.
GUESSME  CHN  Chain programs for LEARN TO GUESS.
NEAREST  CHN  Chain programs for LEARN TO GUESS.
ROMAN    CHN  Chain programs for LEARN TO GUESS.
SUPERG   CHN  Chain programs for LEARN TO GUESS.
GUESS    COM  Main executable program file for LEARN TO GUESS.
README   DOC  Introduction text file with operating instructions.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## READMEG.DOC

{% raw %}
```








                               LEARN TO GUESS
                               GUESS TO LEARN
                             (C) 1988 D. Bodnar

     The Learn to Guess series is a set of four programs that are designed
to develop problem solving strategies and reinforce whole number concepts. 
Each of the programs is complete in itself and uses the computer's secretly
chosen number as a means to challenge student's mathematical and analytical
abilities at a range of difficulty levels.  The series is composed of the
following programs:

GUESSME
     GUESSME, for from one to four players, is designed to help students in
grades 1-8 to develop problem solving strategies while trying to guess the
computer's secret number.  It also serves as an introduction to the
concepts and procedures used in the other programs in the series. 
Depending on the difficulty level, the numbers chosen by the computer may
be positive and/or negative.

ROMAN GUESSME
     This program is identical to GUESSME, except that all of the numbers
used in the game are displayed as, and must be entered as, roman numerals. 
ROMAN GUESSME is appropriate for students of all ages.

NEAREST
     At first glance NEAREST, a game for from two to four players, seems to
be a simple number guessing game, but it has a diabolical twist.  Rather
than telling if a guess is too high or too low, the computer uses a high
resolution display to indicate which of the guesses that was made is
CLOSEST to the computer's secret number.  This program is appropriate for
grades 2-8.

SUPERGUESS
     SUPERGUESS, for two to four players, is a program designed to help
students in grades 3-12 to develop problem solving strategies in this most
challenging number guessing game.

     Students must call upon all of their knowledge of prime numbers,
composite numbers, factors, multiples, sums, differences and products as
they compete against one another in a race across the computer's screen.

     The series requires an IBM-PC or compatible with 256K and a CGA or EGA
display monitor and one disk drive.

     GUESS is distributed under the SHAREWARE concept.  This simply means
that I have given you the right to use this software, evaluate it and share
it with your friends.  All that I ask in return is that you register the 
program with me by sending a check for $15.00 to:
     David G. Bodnar
     26 Ralston Place
     Pittsburgh, PA 15216
     In return you will receive the latest version of the program, a
complete, printed manual, an additional program, MATHDUEL, and a catalog of
other educational software.












                                    LEARN TO GUESS
                                  (c) 1988 D. Bodnar

                             Table of Contents

GETTING STARTED . . . . . . . . . . . . . . . . . . . . . . . . . . . .   1

GUESSME . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   2
     OBJECTIVES . . . . . . . . . . . . . . . . . . . . . . . . . . . .   2
     GUESSME - Part 1 . . . . . . . . . . . . . . . . . . . . . . . . .   2
     GUESSME - Part 2 . . . . . . . . . . . . . . . . . . . . . . . . .   4

ROMAN GUESSME . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   5

NEAREST . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   6
     NEAREST - Part 1 . . . . . . . . . . . . . . . . . . . . . . . . .   6
     NEAREST - Part 2 . . . . . . . . . . . . . . . . . . . . . . . . .   7

SUPERGUESS  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   8
     OBJECTIVES . . . . . . . . . . . . . . . . . . . . . . . . . . . .   8
     SUPERGUESS - Part 1  . . . . . . . . . . . . . . . . . . . . . . .   8
     SUPERGUESS - Part 2  . . . . . . . . . . . . . . . . . . . . . . .  11












































                                    LEARN TO GUESS
                                  (c) 1988 D. Bodnar


                              GETTING STARTED

     Boot the computer as you normally would.  Once the A> prompt is
displayed on the screen type GUESS and press the ENTER/RETURN key.

     The program selection menu will appear.  It looks like this:


     1.   GUESSME ON THE NUMBER LINE
          (1-4 players)

     2.   ROMAN GUESSME ON A NUMBER LINE
          (1-4 players)

     3.   NEAREST NUMBER
          (2-4 players)

     4.   SUPER GUESS!!!!!
          (2-4 players)

     5.   end

     You may choose one of the five options by pressing the number to its
left or by typing its initial letter.  For example, you may choose GUESSME
by pressing 1 or G.

     Next you must type in the player information that is needed for each
game.  The number of players is one to four for GUESSME and ROMAN GUESSME
and two to four for NEAREST and SUPERGUESS.  A single player can use either
of the last two games by entering two names and competing against
himself/herself, perhaps while using two different strategies.

     After the number of players and their names are typed the difficulty
level for each game must be chosen.  A detailed description of each level
is given in the section that describes each program.



     The following manual is tutorial in nature and assumes that you are
running the programs as you read.









                                                                          1












                                    LEARN TO GUESS
                                  (c) 1988 D. Bodnar

                                  GUESSME

     GUESSME is a program designed to help students to develop problem
solving strategies while trying to guess the computer's secret number.  It
also serves as an introduction to the concepts and procedures used in the
other programs in the series.

     Student guesses serve to limit the range within which the computer's
secret number is located.  With practice, a strategy should evolve that
will allow as student to rapidly and consistently discover the secret
number.  Once the number is discovered the student plays a 'Hangman' style
game that challenges him to discover a number-word that the computer has
chosen.

                                 OBJECTIVES

     The following objectives were used in the development of GUESSME:

     1.   Students will develop problem solving strategies that will allow
          them to systematically discover the computer's secret number.

     2.   Students will recognize a number line and the relationships of
          numbers on a number line.

     3.   Students will develop problem solving strategies that will allow
          them to discover the secret number-word that the computer has
          chosen.

     4.   Students will be able to work with negative numbers on a number
          line.

                                  GUESSME - Part 1

     Once GUESSME has been chosen from the first menu and the number of
students and their names have been entered, the difficulty level must be
chosen.  The difficulty levels determine the size of the number line and
the range of numbers that will be used by the computer.  The levels are as
follows:

     Difficulty Level 1 -- numbers between 1 and 10
     Difficulty Level 2 -- numbers between 1 and 100
     Difficulty Level 3 -- numbers between 1 and 1000
     Difficulty Level 4 -- numbers between 1 and 10,000

     Difficulty Level 5 -- numbers between -5 and 5
     Difficulty Level 6 -- numbers between -50 and 50
     Difficulty Level 7 -- numbers between -500 and 500
     Difficulty Level 8 -- numbers between -5000 and 5000


2












                                    LEARN TO GUESS
                                  (c) 1988 D. Bodnar



     After the difficulty level is entered the playing field is displayed. 
Is consists of a number line displaying numbers in the range indicated by
the difficulty level.  The bar above the number line indicates that the
computer's secret number could be anywhere on the number line.  This bar
will shrink as guesses are made.

     If two or more students are
competing, one of their names will be
chosen at random and he/she will be
asked to make a guess.  If a guess is
out of the range that is indicated by
the bar above the number line, a tone is
sounded and the guess may be reentered.

     Once an acceptable guess has been
entered one of three things will occur. 
First, if the guess is correct, a line
will be drawn to the correct spot on the
number line.  If the guess is too large,
the part of the bar above the number line to the right of the guess will be
erased.  Similarly, if the guess is too small, the part of the bar to the
left of the guessed number will be erased.

     Guess-by-guess the bar above the number line will shrink until the
correct number is chosen.  If the number line is greater than 100 the
screen will periodically 'zoom' in for a more detailed display.  This
'zooming' will occur until the range of the number line does not exceed 100
units in size.

     If two or more students compete, their names are chosen at random. 
Occasionally the same student will have two consecutive turns, but each
student will receive the same number of guesses.

     Once students have had an opportunity to play the game a few times
they may wish to see how well they can do at guessing the number in the
number of guesses indicated under # TO BEAT = at the top of the GUESS
NUMBER box.  This number is the most guesses it will take to guess a number
if a pure 'binary' search strategy is used.  A binary search always guesses
the exact middle number in the range of possibilities.  For 100 numbers the
# TO BEAT is 7 guesses, for 1000 it is 10 and so on.  

     In levels 1 and 2 the computer continually displays the range of
acceptable guesses above the guesser's name.  If a student in level 3 or
above needs this type of help he/she may type H or HELP when asked to make
a guess.



                                                                          3












                                    LEARN TO GUESS
                                  (c) 1988 D. Bodnar


                              GUESSME - Part 2

     The student who correctly guesses the secret number will be given the
opportunity to win the game by guessing the second secret number, a number-
word between 1 and 100.  (In levels 1 and 6 the range is 1 to 10.)

     This number-word, such as SEVENTEEN or THIRTY-SIX, must be guessed
letter-by-letter.  The number of letters in the word will be indicated by a
set of blanks across the center of the screen.  To discover the word the
student must choose a letter that he/she feels is included in the word.  If
the letter is in the word it will be inserted at the proper position.  If
the word contains more than one of the letter all of the occurrences will
be displayed.  Note that if the word contains a hyphen that it must also be
guessed.

     An incorrect guess will end the student's turn at guessing the word
and the game will continue with a second try at the number line.

     This routine continues until someone guesses the secret number-word in
the second part of the game.  The number line number changes each time the
number line part of the game begins, but that the number-word remains the
same until it is guessed.

     Once the game is completed an option of stopping or playing again is
given.  Answering Y to AGAIN(Y/N) will start the game from the beginning,
using the same players and difficulty level.  A response of N will return
you to the first menu where a different game or set of players may be
chosen.

     A player may quit the game and return to the main menu by typing the
word END when asked for a guess.


















4












                                    LEARN TO GUESS
                                  (c) 1988 D. Bodnar

                               ROMAN GUESSME

     This game is identical to GUESSME, except that all of the numbers on
the number line are displayed as ROMAN NUMERALS.  In addition guesses must
also be entered as ROMAN NUMERALS.




















                  ROMAN SCREEN




     The difficulty levels are as follows:

     Difficulty Level 1 -- numbers between 1 and 10
     Difficulty Level 2 -- numbers between 1 and 100
     Difficulty Level 3 -- numbers between 1 and 1000
     Difficulty Level 4 -- numbers between 1 and 2000

          To select a number it must be entered as a ROMAN NUMERAL.  That
is, if you wish to guess 47 for your first guess, you must enter it as
XLVII.  An incorrect ROMAN NUMERAL will be ignored.

     With the exception of difficulty level 4 and the ROMAN NUMERALS, all
facets of the game are identical to GUESSME.







                                                                          5












                                    LEARN TO GUESS
                                  (c) 1988 D. Bodnar

                                  NEAREST

     NEAREST is best when played by two or more different students compete. 
Again a secret number has been chosen by the computer.  The student's
guesses are compared to the secret number and to each other.  The computer
reports, not if a guess is too high or too low, but which of the guesses is
closest to the secret number.  This report is given in sentence form and on
a graphic display.

     The difficulty levels for NEAREST are as follows:

     Difficulty Level 1 -- numbers between 1 and 10
     Difficulty Level 2 -- numbers between 1 and 25
     Difficulty Level 3 -- numbers between 1 and 50
     Difficulty Level 4 -- numbers between 1 and 100


                              NEAREST - Part 1

     The game screen shows the players' names, the current guess number and
a number line whose size is determined by the difficulty level.

     One of the players will be chosen at random and a question mark will
be displayed next to the name.  Once that student's guess is entered
another student will be chosen and so on
until each has guessed.  Each guess will
be shown at the appropriate point on the
number line as a dot.  After all of the
guesses are entered one or, in the  case
of a tie two, of the dots will be
circled.  If, for example, the guesses
for a three player game were 18, 12 and
7 and the computer's secret number were
11, the dot over the 12 would be
circled.  If the secret number had been
15, both 12 and 18 would have been
circled since they are an equal distance
from 15.  If a tie is indicated this can
be a powerful clue that should allow the
next player to win.

     The game continues in a similar fashion with each succeeding series of
guesses being indicated higher and higher above the number line.  An
examination of the circled dots will help in finding the secret number.






6












                                    LEARN TO GUESS
                                  (c) 1988 D. Bodnar

                              NEAREST - Part 2

     Once the secret number has been found, the second game screen will be
displayed.  Here the player who successfully guessed the secret number must
accomplish a task similar to, but more difficult than, that used in GUESSME
and ROMAN.

     A secret number-word, in the same range as that chosen under
difficulty level, must be found.  This time, however, no indication of the
word's length is given.  As a letter is guessed, it is placed on the screen
if it is in the word.  The correctly chosen letters are placed on the
screen in the order in which they are guessed, not necessarily in the order
in which they appear in the secret word.

     A player may continue guessing letters until an error is made or until
all of the word's letters have been discovered.  (Don't forget the hyphen!) 
Once all of the word's letters are on the screen, a box will be drawn
around them to indicate that the guessing is complete.  Now the player must
determine what the screen number-word is.  If, for example, the letters in
the box on the screen were ITTLYSREEV-HN the correct guess would be 37. 
Notice that the final guess must be given as a numeral, 37, not as a word,
THIRTY-SEVEN.




























                                                                          7












                                    LEARN TO GUESS
                                  (c) 1988 D. Bodnar

                                 SUPERGUESS

OBJECTIVES

     The following objectives were used in the development of SUPERGUESS:

     1.   Students will develop problem solving strategies that will allow
          them to choose among the clues that the computer has to offer.
     2.   Students will use their knowledge of the following concepts to
          help them to deduce the computer's secret number:
          A.   Prime numbers have only two factors.
          B.   Composite numbers have three or more factors.
          C.   Zero and one are neither prime nor composite.
          D.   A sum is found by adding numbers.
          E.   A difference is found by subtracting numbers.
          F.   A product is found by multiplying numbers.
          G.   A number is even if it is evenly divisible by two.
          H.   A number is odd if it is one more that an even number.
          I.   Factors of a number are those numbers that divide evenly
               into the number.
          J.   Multiples of a number are found by multiplying the number by
               0, 1, 2, 3, 4, 5, ... and so on.
     3.   Students will develop problem solving strategies to help them to
          beat their opponent(s) in a race across the computer's screen.


                            SUPERGUESS - Part 1

     SUPERGUESS differs from the other games in this series in that the
student buys clues to help him/her to discover the computer's secret
number.  It is also the only one of the games where each player may choose
to work at a different difficulty level.  This allows students of different
ability or experience to compete.

     The difficulty levels are:

     Difficulty Level 1 -- numbers between 1 and 25
     Difficulty Level 2 -- numbers between 1 and 75
     Difficulty Level 3 -- numbers between 0 and 100
     Difficulty Level 4 -- numbers between 0 and 150



     The first game screen shows one of the player's names, his/her
difficulty level and that he/she starts the game with 40 points.  It also
shows eight different clues that can be used to discover the secret number
that the computer has chosen.



8












                                    LEARN TO GUESS
                                  (c) 1988 D. Bodnar

     Each player may use his/her points to buy clues in their quest to
discover the number.  The number to the left of each clue is its 'cost' in
points.

     (1)  Prime/Composite
     (10) Digit Sum
     (10) Digit Difference
     (15) Digit Product
     (2)  Number of Digits
     (1)  Odd/Even
     (5)  Number of Factors
     (2)  Multiple of

     A clue is selected by pressing the
UP and DOWN arrow keys until the marker
is next to the clue that you wish to
buy.  Pressing ENTER will select the
clue.  The following is a brief
description of what each clue means:

***  Prime/Composite
          A number is prime if it has only 2 factors, 1 and itself.
          7 and 13 are both prime numbers.
          If a number has more than 2 factors it is composite.
          15 and 24 are composite numbers because they have many factors.
          1 and 0 are neither prime nor composite.
     When this clue is chosen a P, C or N is displayed.

***  Digit Sum
          To compute the digit sum the computer takes the digits that make
          up a number and adds them.
          The digit sum of 25 is 7 since +5=7.
          The digit sum of 148 is 13 since 1+4+8=13.

***  Digit Difference
          The computer subtracts the smallest digit of a number from the
          largest.
          The digit difference for 84 is 4 since 8-4=4.
          The digit difference for 48 is also 4.
          The digit difference for a one digit number is the number itself.
          The digit difference for a three digit number is the difference
          between the largest and smallest digits. 
          The digit difference for 138 is 7 since 8-1=7.

***  Digit Product
          The computer multiplies all of the digits of the number to
          compute the digit product.
          The digit product of 17 is 7 since 1X7=7.
          The digit product of a one digit number is the number itself.

                                                                          9












                                    LEARN TO GUESS
                                  (c) 1988 D. Bodnar


***  Number of Digits
          This is the number of digits that make up the number.
          The number of digits for 25 is 2, for 421 is 3.

***  Odd/Even
          A number is even if it is evenly divisible by 2.
          A number is odd if it is one more than an even number.
          3, 11, 83 and 133 are odd numbers.
          4, 12, 5 and 130 are even numbers.

***  Number of Factors
          This is the number of numbers that will divide evenly into the
          number.
          12 has 6 factors.  They are: 1, 2, 3, 4, 6 and 12.
          50 has 6 factors.  They are: 1, 2, 5, 10, 25 and 50.
          17 has only 2 factors, 1 and 17, since it is a prime number.

***  Multiple of?
          This clue allows you to choose a number and the computer will
          tell if the number that you choose divides into the secret number
          evenly.  In other words, it tells if the secret number is a
          multiple of the number you select.
          If the number you pick is a factor of the secret number it is
          printed on the screen directly below Multiple of.
          If it is not a factor it is printed with an X.
          If the secret number were 24 and you picked 5 for 'Multiple of?'
          the computer would print '5X' since 24 is not a multiple of 5. 
          If you chose 8 it would print '8' on the screen since 24 is a
          multiple of 8.
          This is the only clue that may be chosen more than once.  It may
          be used up to four times.

     Each time a clue is chosen you are given the opportunity to make a
guess.  After the guess has been entered the computer will tell you if you
are correct.  If you are incorrect each guess that you make will be
displayed at the bottom of the screen.

     Each time a clue is selected the number of points is reduced by the
cost of the clue.  If you run out of points your turn will end.










10












                                    LEARN TO GUESS
                                  (c) 1988 D. Bodnar

                            SUPERGUESS - Part 2

     Once you have successfully found the secret number you will be shown
the second game screen.  This screen shows a square board with randomly
chosen barriers through it.  Your task is to move across the board from the
side where your name is displayed to the opposite side before any of your
opponents move across the board.

     On the left side of the screen you
will see the words Blast and Escape. 
Next to the words a vertical line
indicates how far the points that you
have remaining will take you across the
board.

     Use the arrow keys to move the
flashing cursor from the side of the
board with your name to the opposite
side.  Holding an arrow key will cause
it to repeat.

     When you come to a barrier, one
placed there by the computer or an opponent's line, you may go around it
or, if you have at least 20 points remaining, through it.

     To go through a barrier line you must move up to it, as close as you
can get, and press the B key.  B stands for Blast and it allows you to
expend 20 points at one time to blast through a line.  Once B has been
pressed a buzzing sound will be heard.  At this point you must press one
arrow key and you will be moved one space in that direction regardless of
what is in your path.  Once you use blast the vertical line that shows your
remaining points shrinks significantly since each blast uses 20 points.

     Once your points are exhausted your turn is over and the game
continues until someone makes it to the other side.

     If you should come up against a barrier and not have sufficient points
to blast you may press the E key to escape and save your points for the
next turn.

     At the end of each round you will see the current standings displayed. 
They show how far each player has moved and, after the '+' sign, any points
that they have saved by using escape.  Three start indicate the player or
players who lead.

     The game is over when one or more players reach the far side of the
board.  A winner is not declared until each player has completed a round of
play.


                                                                         11





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1412

     Volume in drive A has no label
     Directory of A:\

    FILE1412 TXT      2084   6-01-89   9:00a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   6-01-89   9:01a
    GUESS    CHN      5248   7-02-88   4:22p
    GUESS    COM     25600   7-12-88   4:51p
    GUESSME  CHN      8448   7-09-88   8:41a
    MANUAL   BAT       147   6-01-89   9:02a
    NEAREST  CHN      8320   7-09-88   8:49a
    PAGE     COM       325   1-06-87   4:21p
    READMEG  DOC     25724   7-10-88  11:03a
    ROMAN    CHN     10368   7-09-88   8:45a
    SUPERG   CHN     11264   7-12-88   4:52p
    TITLE    CHN       128   6-05-88   7:59a
    TITLEG   COM     20352   7-10-88   8:12a
    VIEW     BAT        43   6-01-89   9:02a
           15 file(s)     118783 bytes
                           36864 bytes free
