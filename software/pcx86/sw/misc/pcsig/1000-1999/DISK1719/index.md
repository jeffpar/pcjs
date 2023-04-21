---
layout: page
title: "PC-SIG Diskette Library (Disk #1719)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1719/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1719"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FIND-X"

    If you are looking for an easy way to catalog household goods, coins,
    photographs and slides, record albums and compact discs, computer
    programs, or some other collectible, FIND-X is the program for you.
    
    Designed with the computer novice in mind, FIND-X is relatively easy to
    install and use. Once installed, FIND-X is totally menu-driven and
    very little computer knowledge is required to add or retrieve
    information. However, you probably will be able to use the program
    more effectively if you have some familiarity with how dBase programs
    create and handle files.
    
    By taking advantage of the relational capabilities of the dBase
    language, FIND-X stores data in two small files rather than one large
    one, allowing it to find and retrieve information relatively quickly.
    The size of the catalogs is limited only by the available disk space.
    
    Conduct exact or generic searches. Exact searches retrieve only those
    files containing identical text strings. (Entering "flower" will not
    yield entries for which the descriptor is "flowers.")  Generic
    searches will yield all entries containing a descriptor beginning with
    the same text string as that specified by the use. (Entering "flow"
    will yield "flower," "flowers," "flowery," and "flowing.")
    
    FIND-X is a friendly program that creates and searches catalogs with
    agility. For the home user in search of a bit more order in today's
    domestic life, it is worth a look.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DES_FDX.DOC

{% raw %}
```






FIND-X

UNIVERSAL, GENERAL-PURPOSE, CATALOGING AND INDEXING SYSTEMS

By John Forester, Custom Cycle Fitments
726 Madrone Ave, Sunnyvale, CA 94086. 408-734-9426

    Sure, a  catalog is  a list  of the  items in a collection. But its
most important use is to tell you which items have  the characteristics
that  interest  you  today.  Find-X  provides two different systems for
retrieving lists of items with combinations of characteristics. Find-X1
uses index  files for  rapid retrieval  of all  items that have all the
characteristics that you  specify.  Find-X2  searches  for  any logical
combination (AND,  OR, NOT)  of words or phrases that you specify. This
is more general and detailed, but is slower. Both Find-Xs are flexible.
Each allows  you to  enter a format for the records in each collection,
but you don't have to follow that format.  Whatever the  format you use
for each  record, Find-X  can find  that record  when you ask for items
that have its characteristics.

     For example, a collection of photographs of wild  flowers needs to
record the  common name  and the  scientific name of each flower in the
photo, the place and the date. When you ask FIND-X  for all  the photos
of Common  Monkey Flower taken in Edgewood Park or Los Trancos Reserve,
but not by Taylor, it displays or prints the list of photos  with their
file locations. That's easy. But Find-X doesn't require that you follow
the same format for all records. Some photographs  will show  scenes in
which  many  wildflowers  appear.  You  enter the location, the time of
year, the kinds  of  flowers,  the  photographer,  whether  the  sky is
cloudy, anything you think significant. You can enter any data that you
want, yet Find-X will retrieve that record when you ask  for items with
that data. 


```
{% endraw %}

## FILE1719.TXT

{% raw %}
```
Disk No: 1719                                                           
Disk Title: Find-X                                                      
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: Find-X                                                   
Author Version: 3.1                                                     
Author Registration: $20.00                                             
Special Requirements: 384K RAM, and 2 floppy drives.                    
                                                                        
If you are looking for an easy way to catalog household goods, coins,   
photographs and slides, record albums and compact discs, computer       
programs, or some other collectible, FIND-X may be the program for you. 
                                                                        
                                                                        
Apparently designed with the computer novice in mind, FIND-X is         
relatively easy to install and use. Once installed, FIND-X is           
totally menu-driven, so that very little computer knowledge is          
required to add or retrieve information.  However, you probably will    
be able to use the program more effectively if you have some            
familiarity with how DBASE programs create and handle files.            
                                                                        
By taking advantage of the relational capabilities of the DBASE         
language, FIND-X stores data in two relatively small files rather than  
one large one. This allows it to find and retrieve information          
relatively quickly, even when the catalogs being maintained are large.  
In fact, the size of the catalogs you can maintain is limited only by   
available disk space.                                                   
                                                                        
A particularly useful feature of FIND-X is that it allows you to conduct
either exact or generic searches.  Exact searches retrieve only those   
files containing text strings identical to that requested by the user.  
Thus, as noted in the manual, entering "flower" will not yield entries  
for which the descriptor is "flowers."  Generic searches will yield all 
entries containing a descriptor beginning with the same text string as  
that specified by the use. For example, entering "flow" will yield      
"flower," "flowers," "flowery," and "flowing."                          
                                                                        
FIND-X is a friendly program and it creates and searches catalogs with  
agility.  For the home user seeking to bring a bit more order to        
domestic life, it is worth a look.                                      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FINDXMAN.DOC

{% raw %}
```
















                           FIND-X UNIVERSAL CATALOGING SYSTEMS

                         Finds The Items That You Know Are There
                                 But Can't Locate Today

                             for IBM-PC-compatible computers

                                    FDX1 Version 2.3
                                    FDX2 Version 1.1




                                John Forester, M.S., P.E.















                                  Custom Cycle Fitments
                                    726 Madrone Ave.
                                   Sunnyvale CA 94086







                                                                            ii







                 The Find-X program was written, developed and compiled
                      in the Clipper dBase language from Nantucket












                                      Published by
                                  Custom Cycle Fitments
                                    726 Madrone Ave.
                                   Sunnyvale CA 94086

                                      408-734-9426






                               Find-X Programs and Manual
                              Copyright John Forester, 1988
                       The purchaser has purchased only a license
                            to use these software materials 
                            on one computer for one company.



            Copying of the Find-X system as a unit from the distributed disk,
            consisting  of its  program, its  data  file structures  and this
            manual, is permitted for purposes of  evaluation and trial. Those
            who decide  to use it should  pay a user  license fee  of  $20 to
            John Forester at the above address. 







                                                                           iii

                                    TABLE OF CONTENTS


            OVERVIEW  . . . . . . . . . . . . . . . . . . . . . . . . . .   1

            TWO KINDS OF FIND-X CATALOG   . . . . . . . . . . . . . . . .   1

            SEARCHING WITH THE FIND-X2 SYSTEM   . . . . . . . . . . . . .   3

            CHARACTERISTICS OF BOTH FIND-X SYSTEMS  . . . . . . . . . . .   3

            WHAT YOU NEED TO KNOW ABOUT DOS   . . . . . . . . . . . . . .   5
              FILE COMMANDS   . . . . . . . . . . . . . . . . . . . . . .   5
              DIRECTORY COMMANDS  . . . . . . . . . . . . . . . . . . . .   5

            GENERAL FIND-X INFORMATION  . . . . . . . . . . . . . . . . .   7
              SELECTING FROM MENUS, MOVING BETWEEN MENUS  . . . . . . . .   7
              KEYING IN DATA  . . . . . . . . . . . . . . . . . . . . . .   7
              INSERT AND TYPEOVER   . . . . . . . . . . . . . . . . . . .   8
              UPPER AND LOWER CASE LETTERS  . . . . . . . . . . . . . . .   8
              Y y N n T t F f   . . . . . . . . . . . . . . . . . . . . .   8
              DATES   . . . . . . . . . . . . . . . . . . . . . . . . . .   8
              FILE STRUCTURE AND DIRECTORIES FOR FIND-X   . . . . . . . .   9
              FILES AND DIRECTORIES ON THE FIND-X DISK  . . . . . . . . .   9

            INSTALLING THE FIND-X SYSTEM  . . . . . . . . . . . . . . .    10
              COPYRIGHTS AND COPYING  . . . . . . . . . . . . . . . . .    10
              BACKUP COPIES OF DISKS  . . . . . . . . . . . . . . . . .    10
              EQUIPMENT REQUIRED  . . . . . . . . . . . . . . . . . . .    10
              PREPARING WORKING DISKS BEFORE INSTALLATION   . . . . . .    10
              INSTALLING FIND-X ON A DUAL-FLOPPY SYSTEM   . . . . . . .    11
              INSTALLING FIND-X ON A HARD DISK SYSTEM   . . . . . . . .    13
              ALL INSTALLATIONS: ALLOWING SUFFICIENT FILES  . . . . . .    14
              TESTING THE STARTUP   . . . . . . . . . . . . . . . . . .    15

            OPERATING INSTRUCTIONS  . . . . . . . . . . . . . . . . . .    16
              GENERAL INSTRUCTIONS FOR FIND-X CATALOGS  . . . . . . . .    16
              SELECT & SET UP CATALOGS  . . . . . . . . . . . . . . . .    16
              NUMBERING ITEMS IN A CATALOG  . . . . . . . . . . . . . .    17
              LOCATING ITEMS FROM THE CATALOG DESCRIPTION   . . . . . .    18

            INSTRUCTIONS FOR SPECIFIC OPERATIONS WITH FIND-X1   . . . .    18
              A  ENTERING NEW ITEM  . . . . . . . . . . . . . . . . . .    18
              B  SEARCH FOR ITEMS   . . . . . . . . . . . . . . . . . .    19
              C  DISPLAY LIST OF FOUND ITEMS  . . . . . . . . . . . . .    20
              D  PRINT LIST OF FOUND ITEMS  . . . . . . . . . . . . . .    20
              E  EMPTY THE LIST OF FOUND ITEMS  . . . . . . . . . . . .    20







                                                                            iv

              F  DELETE EXISTING ITEM   . . . . . . . . . . . . . . . .    20
              H  CHANGE DESCRIPTORS FOR ONE ITEM    . . . . . . . . . .    21
              I  CHANGE THE DATE OF AN ITEM   . . . . . . . . . . . . .    21
              J  RENAME A DESCRIPTOR  . . . . . . . . . . . . . . . . .    21
              K  DISPLAY COMPLETE CATALOG OF ITEMS  . . . . . . . . . .    21
              L  DISPLAY ITEMS WITH DESCRIPTORS   . . . . . . . . . . .    21
              M  PRINT COMPLETE CATALOG OF ITEMS  . . . . . . . . . . .    21
              N  PRINT LIST OF DESCRIPTORS  . . . . . . . . . . . . . .    21
              O  SELECT, SET UP & REINDEX CATALOGS  . . . . . . . . . .    22
              P  MAKE BACKUP    . . . . . . . . . . . . . . . . . . . .    23

            INSTRUCTIONS FOR SPECIFIC OPERATIONS WITH Find-X2   . . . .    23
              A  ENTERING NEW ITEM  . . . . . . . . . . . . . . . . . .    23
              B  SEARCH FOR ITEMS   . . . . . . . . . . . . . . . . . .    24
              C  DISPLAY LIST OF FOUND ITEMS  . . . . . . . . . . . . .    25
              D  PRINT LIST OF FOUND ITEMS  . . . . . . . . . . . . . .    25
              E  EMPTY THE LIST OF FOUND ITEMS  . . . . . . . . . . . .    25
              F  DELETE EXISTING ITEM   . . . . . . . . . . . . . . . .    25
              H  CHANGE THE DATE OF AN ITEM   . . . . . . . . . . . . .    25
              I  DISPLAY COMPLETE CATALOG OF ITEMS  . . . . . . . . . .    25
              J  PRINT COMPLETE CATALOG OF ITEMS  . . . . . . . . . . .    26
              K  SELECT AND SET UP CATALOGS   . . . . . . . . . . . . .    26
              L  MAKE BACKUP    . . . . . . . . . . . . . . . . . . . .    27

            PROGRAM LANGUAGE  . . . . . . . . . . . . . . . . . . . . .    27

            COPYRIGHT AND LICENSE TO USE  . . . . . . . . . . . . . . .    27

            LIST OF FILES IN FIND-X SYSTEM  . . . . . . . . . . . . . .    28

            MENUS & DATA ENTRY SCREENS, FIND-X1   . . . . . . . . . . .    29

            MENUS AND DATA ENTRY SCREENS, FIND-X2   . . . . . . . . . .    32







                                                                      1










                          FIND-X CATALOG INDEXING SYSTEMS
                      Finds The Items That You Know Are There
                              But Cannot Locate Today

                                 INSTRUCTION MANUAL


                                      OVERVIEW


                  The Find-X Universal Cataloging  System finds all the
            items in a cataloged  collection that match the description
            that you  want to look for. The items in the collection may
            be  anything at  all, but  the Find-X  Universal Cataloging
            System is particularly useful for  items whose characteris-
            tics  you cannot  identify  by casual  inspection, such  as
            photographic  slides,  photographs or  documents  in files,
            record  collections  (particularly  records   with  several
            selections),  items  kept  in  different  places,  research
            notes, books, etc.

                  Find-X is particularly  suitable for  items that  you
            will want  to search by different  descriptors at different
            times.  With a record collection  you may want  to look for
            music by a particular composer, or by  a particular artist,
            or  by the  type of  composition, or  even by  the date  or
            publisher. Find-X  allows you  to seach the  collection for
            any characteristic  regardless of  the order that  you keep
            the collection in.

            TWO KINDS OF FIND-X CATALOG
                  There are  two different Find-X systems  that operate
            in slightly different ways for people with different needs.
            Find-X1 provides  a very  rapid search routine  through the
            use of indexed  files. Find-X2 provides  a slower but  more
            powerful search  routine by examining the  record for every
            item in  the collection. Because  each program has  its own
            set of files, you cannot use Find-X1 on  a catalog that was







                                                                      2
                                             Overview

            made by Find-X2, and vice versa.  Therefore you much choose
            at  the start which  type of catalog  you need  for each of
            your purposes.

            Find-X1 has the following characteristics:
            Fast search routine through index files
            Requires more storage space
            Less space in each item for descriptive detail
            Searches by only nine indexed characteristics per item

            Find-X2 has the following characteristics:
            More space in each item for descriptive detail
            Able to search for any combination of descriptive phrases
            Requires less storage space
            Slower search routine by examining every record

            SEARCHING WITH THE FIND-X1 SYSTEM
                  The Find-X1  System  operates by  searching  for  the
            descriptors of each item in the  collection. When you enter
            an item into the  catalog you are  asked to next enter  its
            descriptors,  which are  the pertinent  characteristics for
            which you may want to search for an item. You  may enter up
            to 9 descriptors  for each  item in the  catalog, and  each
            descriptor  may have up  to 30 characters.  In addition, if
            you wish, you  may enter the  dates of the items  and later
            search for items with  particular dates or between any  two
            dates.

                  When you wish to search for those items with particu-
            lar descriptors you enter  up to 9 descriptors and,  if you
            wish,  a time  interval.  Find-X1 will  then display  those
            items that match all of the descriptors and the time inter-
            val. If  you  have a  collection of  photographs of  nature
            subjects you may  ask for all the flowers that  you took in
            Edgewood Park. Find-X1 will display a list of those photos,
            with their descriptions and serial numbers.

                  Find-X1  provides two  different  types of  searches,
            Exact and Generic. An exact search returns only those items
            each of whose entire descriptors match the descriptors that
            you  enter. If  you search  for FLOWER  you won't  be shown
            items described as   FLOWERS. An exact search for  DOR will
            not return  DORMOUSE, DORIS  or DOROTHY items.  The generic
            seach  returns all  those items  each of  whose descriptors
            starts  like  the search  descriptor  that  you entered.  A
            generic  search for  FLOWER  will return  FLOWER items  and







                                                                      3
                                             Overview

            FLOWERS items. A  generic search for  DOR will return  DOR-
            MOUSE, DORIS and DOROTHY items.

                  Each Find-X1 search  is for items  that match ALL  of
            the  search descriptors; it is not for items that match ANY
            ONE  of them. A search for FLOWER and EDGEWOOD returns only
            those flowers photographed in Edgewood. To look at this  in
            logical terms,  the search is  an AND search  with up  to 9
            descriptors, not an OR search.  To search for those flowers
            that you photographed in both Edgewood  and Sunol Parks you
            must make two searches, one for FLOWER and EDGEWOOD and the
            other  for FLOWER and SUNOL.  You won't have  to sort these
            lists  out; no item  on one list will  duplicate any on the
            other. 

                  The amount of disk  space that Find-X1's catalogs use
            depends on the average  number of descriptors that you  use
            for the items in that catalog. A rule of thumb is that each
            item in the catalog will require 700 bytes of disk space.

            SEARCHING WITH THE FIND-X2 SYSTEM
                  The Find-X2 system  operates by examining  the record
            for every  item to see  whether it contains  the particular
            combination  of phrases  that you  have specified.  You are
            able to  ask for logical combinations  that are constructed
            with  symbols for AND, OR and NOT and with parentheses. For
            example, you can  ask for all Allium  AND validum to  get a
            list of all photos  of swamp onions (whose  scientific name
            is Allium validum). Or you can ask for (Allium AND validum)
            AND seed  to see if you  have a photo of  the swamp onion's
            seeds. For  another example, you can  ask for (photographer
            AND flower) OR (photographer  AND animal) to get a  list of
            all flower photographers and animal photographers.

                  Find-X2 provides up to  234 characters of description
            and requires only 270 bytes per entry.

            CHARACTERISTICS OF BOTH FIND-X SYSTEMS
                  Each  of  the Find-X  systems  will  service as  many
            different catalogs as  you have  disk space for  on a  hard
            disk system  or, on a  dual-floppy system, it  will service
            any catalog that you  put on the  disk in the other  drive.
            You will  probably find  it  most satisfactory  if you  use
            different catalogs  for different  kinds of items.  Even if
            you catalog only photo slides,  you will have shorter cata-
            logs if you keep slides of wild life  photos in a different







                                                                      4
                                             Overview

            catalog from those of yachting photos.

                  Each  of the  Find-X systems  provides  a descriptive
            section that you can format as you prefer. Find-X1 provides
            one  line of  78 characters.  Find-X2 provides  three lines
            totalling 234  characters. You may  format each description
            space  as you  prefer. When setting  up either  system, the
            description space  appears and you  are asked to  divide it
            into fields of any length. You enter the name of each field
            and  show its  termination  with the  | character.  Find-X1
            allows up to 10 fields on one line, while Find-X2 allows up
            to 20 fields for the three-line space. When you enter a new
            item or change  an existing item,  your own format  appears
            above the  illuminated blank for the  description, and when
            you  press the enter key  the cursor skips  to the start of
            the next  field. However, you can always  ignore this divi-
            sion  by  continuing to  type in  words  up to  the maximum
            amount  of space.  Therefore, you  can have  a format  that
            includes the scientific name  (family, genus, species), the
            common name, the part shown, etc., which you  normally use.
            However, you can also  enter the free-format description of
            a scenic photo  that shows many different items. With Find-
            X2  you can  search for  any combination  of words  in that
            description. Find-X1,  however, cannot search by items from
            the description.










                          WHAT YOU NEED TO KNOW ABOUT DOS

            FILE COMMANDS
                  For  preparing diskettes and  copying files  you will
            need  to know  how to  use a  few of  the DOS  commands. To
            prepare diskettes  you  need the  Format  A: or  Format  B:
            commands. To copy diskettes  you need the DiskCopy command.
            To copy  files you need  the Copy command. To  copy all the
            files  from a given directory you need the Copy *.* version
            of the Copy command. (In contrast  to DiskCopy, *.* reorga-
            nizes the files as  it copies them, so  that they are  more
            quickly  read after there have  been a lot  of changes.) To
            remove files you need the Delete command. 

            DIRECTORY COMMANDS
                  If you will operate  Find-X on a hard disk,  you need
            to understand  DOS's system  of directories and  method for
            describing the paths to reach them. Each hard disk and each
            floppy diskette may  be divided into  parts. Each of  these
            parts  may also be divided,  and each of  those parts also,
            and so  on to more levels of detail than you will need. DOS
            confuses matters by using the word directory in two senses.
            Directory means both  any part of the disk and  the list of
            files that that part contains. 

                  This system  of directories enables you  to logically
            arrange your files so that each directory contains informa-
            tion about one subject.  It also enables you to  have files
            with  the same name but with  different data, provided that
            they  are in  different directories.  For example,  you can
            have two files named  Items, one for each of  two catalogs.
            As long as they are in different directories, DOS won't get
            them mixed up.  To prevent  mixups, DOS works  in only  one
            directory at  a time unless you specifically  tell it which
            other directories it can  also use. To work on  one Catalog
            you must either move  to the directory that contains  it or
            tell  DOS in which directory  to look for  it. You move be-
            tween directories with the  Change Directory (CD)  command.
            You tell DOS where to look  by describing the Path by which
            DOS can reach a directory.

                  Each  Path starts  from the  drive that  contains the
            disk-- A: or B: for  floppy disks, C: for most  hard disks.
            Next, you name each directory that you must pass through to
            reach  the file. You separate each level of detail from the
            next by a \  (backslash). So the Catalog for  nature photos







                                                                      6
                               What You Need To Know About DOS


            that is on the hard disk  [drive C:] will be reached by the
            Path  C:\FINDX\NATURE.  Given  that path,  when  the Find-X
            program  looks for  a catalog  file it  will find  only the
            catalog of  nature photos,  not the catalog  for phonograph
            records,  which will be in the directory that is reached by
            the path C:\FINDX\RECORDS.

                  To make directories you  need the Make Directory (MD)
            command,  and to  remove  directories you  need the  Remove
            Directory (RD)  command.  To move  between directories  you
            need the Change  Directory (CD) command. To display  on the
            screen the directory that  you are in you must  change your
            DOS screen display with the Prompt $p$_$g command. 

                  To  operate Find-X  you  must first  make the  proper
            directory  structure for  the Find-X  program and  for each
            catalog, and  then describe to  Find-X, when you  first run
            it, the path for each catalog.








                             GENERAL FIND-X INFORMATION


            SELECTING FROM MENUS, MOVING BETWEEN MENUS
                  You control  all Find-X  operations by selecting  op-
            tions  from menus that list  the options that are available
            at that time. Each  option is designated by a  letter, like
            "A   Enter A New Item," which appears on the Main Menu. You
            select that option by keying in the letter that  designates
            the option  you desire. Although the  designating letter is
            always displayed  as upper  case (capital letter),  you may
            key in the letter as  either upper or lower case.  When you
            select one of the more complicated operations you will move
            to another menu which offers the options that are necessary
            to direct that operation. In  case you move to a menu  that
            offers options that  you don't want, every  menu offers the
            option  "X  Return To  Previous Menu" so  you can return to
            the  previous set  of choices.  Whenever an  operation will
            make a change that is not easily reversed, such as deleting
            an item, or that  requires a long processing time,  such as
            reindexing, you are  given the  option of  deciding not  to
            make that change. 

            KEYING IN DATA
                  Find-X  operates with  the frequently-used  key input
            conventions.  Information for  your use  appears  in bright
            letters on a black background. The space for you to  key in
            new information is indicated by an illuminated box in which
            letters appear  in black  (reverse video). The  place where
            the program will place your next keystrokes is indicated by
            a blinking  black cursor  within an illuminated  box. There
            are two ways  to complete  the information in  the box.  If
            your data doesn't  fill the box,  {Enter} to indicate  that
            that is all. (This means  to press the Enter key.  If other
            characters are between the curly  braces, type them in  and
            then press the Enter key.) If  your data fills the box, the
            cursor will  automatically move  to the  next  box and  the
            computer will beep. 

                  If any  box already contains  data that  you want  to
            accept  without change,  just  {Enter} when  the cursor  is
            anywhere in that box.  If the box has space for  two digits
            and contains only  one, a  6 for example  when the  correct
            value should be 5,  when you input  the 5 both digits  will
            appear. However,  when you {Enter} the  original digit will
            disappear without your having to erase it. 

                  With most data input  screens, when several boxes are







                                                                      8
                                   General Find-X Information

            shown you can return to previous  boxes to make corrections
            until  you reach  the  last box.  Completing  the last  box
            completes all the previous boxes.

            INSERT AND TYPEOVER
                  When making  corrections you  make them in  either of
            two  ways. One  way inserts new  characters at  the cursor,
            pushing remaining  characters to  the right. The  other way
            types over the  existing characters, obliterating them.  By
            pressing the INS(ert) key  you switch from one mode  to the
            other. Use whichever best fits the circumstances.


            UPPER AND LOWER CASE LETTERS
                  In the cases where input letters control the program,
            as in selecting items from a menu or entering  descriptors,
            when you key in  lower case letters they are  automatically
            changed to upper case  letters. In these cases you  may key
            in either upper or lower case letters as you choose. In all
            other  cases where you are  keying in other  types of data,
            the  program maintains upper  and lower cases  as you input
            them.

            Y y N n T t F f
                  These  are the  characters that  indicate Yes  or No,
            True or False  for times  when there is  a logical  choice.
            However, dBase and  Clipper display only T or F. If you key
            in  "y"  to answer  "Yes" to  a  question, the  screen will
            display T. T  means True or Yes while F  means False or No.
            You just have to get used to this convention. 

            DATES
                  Find-X has three choices in  dates, each of which  is
            selected  from the SetUp Data Screen. You may choose not to
            use dates for the catalog that you are setting up. Then you
            won't be  asked for dates and will  be unable to enter them
            or search by them. If you choose to use dates  you have two
            choices,  dates only within this century  or dates in other
            centuries  also. If you  choose dates only  in this century
            you will never have to enter the  '19' digits for the year,
            while if you choose dates in all centuries you will have to
            enter them. However, the choice has no effect on the actual
            data records; they all contain the correct dates. Therefore
            you  may change from using only this century dates to using
            all centuries whenever you like, or whenever that is conve-
            nient.







                                                                      9
                                   General Find-X Information

                  Find-X also gives  you the choice  of using dates  in
            either  American   format  (mm/dd/yy)  or   British  format
            (dd/mm/yy). This  selection is  also made from  the Set  Up
            Data Screen. As with century, this doesn't affect the dates
            in the files but only their presentation, so you can change
            back and forth as is convenient. 

            FILE STRUCTURE AND DIRECTORIES FOR FIND-X
                  Find-X  is set up so  that its programs  and its data
            are in separate directories  on a hard disk or  on separate
            floppy  disks.  This simplifies backing  up and enables one
            set of programs to operate on several sets of data files if
            necessary.   Program files are FDX1.EXE  and FDX2.EXE; data
            files have  .DBF, .NTX or  .MEM extensions; .DBF  files are
            multi-record data files [such as the Catalog]  in which all
            records in one file have the same structure. The .NTX files
            specify the  sequences in which  the .DBF file  records are
            searched, presented  and used. The .MEM  files each contain
            an  assortment of  things with  dissimilar structures  that
            have to  be remembered, such  as catalog  name and  whether
            dates are  used for  that catalog. Those  files whose  name
            ends with 1  (like ITEMS1.DBF) are used with FDX1.EXE only,
            while those whose name ends  with 2 (like PHRASES2.DBF) are
            used only with FDX2.EXE. One  copy of CATROADS.DBF must  be
            used with each installation of either FDX1 or FDX2.

            FILES AND DIRECTORIES ON THE FIND-X DISK
            The Find-X System is distributed as 5 files.

            READ-FDX.ME contains the starting instructions, essentially
                  a duplicate of the next few paragraphs. 

            FINDX.ZIP contains all the Find-X programs, manual and data
                  in condensed format.

            PKUNZIP.EXE is  the program  that extracts the  Find-X pro-
                  grams, manual and data from the .ZIP file.

            UZIPFDXF.BAT  controls the operation  of PKUNZIP to extract
                  the Find-X  programs, manual  and data from  the .ZIP
                  file on a dual-floppy system.

            UZIPFDXH.BAT controls the  operation of PKUNZIP  to extract
                  the Find-X  programs, manual  and data from  the .ZIP
                  file on a hard-disk system.








                            INSTALLING THE FIND-X SYSTEM

            COPYRIGHTS AND COPYING
                  The  Find-X  diskette is  not copy-protected  but the
            programs and data  on it are copyrighted by  John Forester.
            By  paying the user license fee of $20 you have purchased a
            license for you to use Find-X  on one computer and to  make
            backup copies of the Find-X software and  the catalogs that
            you prepare using it. John  Forester  retains title  to and
            ownership of the Find-X programs and data structures. Find-
            X programs and data structures  may not be modified without
            his written consent. 

                  Copying is  permitted to  give prospective  users the
            chance to try the Find-X  program, but if they use it  they
            are responsible for  paying the User License  Fee of $20.00
            to John Forester at 726  Madrone Ave., Sunnyvale CA  94086,
            408-734-9426

            BACKUP COPIES OF DISKS
                  Upon receipt, copy the original diskette to a working
            diskette and store the original in a safe place.

                  How you copy  from the working  copy of the  original
            Find-X disk  to the disk for  your own work will  depend on
            whether you have a dual  floppy system or a hard disk  sys-
            tem.  See  your DOS  instruction  manual  for the  Diskcopy
            command.

            EQUIPMENT REQUIRED
                  Find-X requires the following equipment:
            IBM-PC compatible computer with at least the following:

            384K of memory;

            Two floppy disk drives or one floppy drive and a hard disk;

            Printer with at least 80 columns. 

            On  a dual-floppy  system,  one floppy  drive will  contain
                  programs,  the other data. A 360K floppy disk has the
                  capacity of about 450  Find-X1 catalog items, depend-
                  ing on the number of  descriptors used. The same disk
                  could hold over 1,200 items in a Find-X2 catalog.

            PREPARING WORKING DISKS BEFORE INSTALLATION
                  Make a working  copy of the Find-X  Disk using either
            the  COPY *.* or  the Diskcopy  command. Use  the following







                                                                     11
                                 Installing The Find-X System

            instructions to make working disks. 

            In  the following  instructions,  {XXX} means  to type  the
            command XXX and then press the enter key.

            DUAL-FLOPPY SYSTEM
            Prepare 4 blank, formatted disks. Label them as follows:
            FIND-X1 Program
            FIND-X2 Program
            FIND_X  Data
            FIND-X  Manual

            Insert the FIND-X working disk into Drive B:
            Make Drive B: the current drive by {B:}


            Then {UZIPFDXF} and follow  the instructions that appear on
            the  screen. UZIPFDXF  will direct  you insert  the freshly
            prepared floppy disks  into drive A  and then will  extract
            the individual files from the .ZIP file on the other drive.

            After  UZIPFDXF has  unzipped all  the files  onto  the new
            disks, insert the FIND-X Manual disk into drive A: and type
            out the manual by {TYPE FINDXMAN.DOC >  PRN}. This produces
            this  manual. Then follow  its instructions  for installing
            and using the Find-X system. 

                  Decide on  a full name and  a short name for  each of
            the catalogs that you  are ready to start. Since  the short
            name is the one that you will key in when starting up, make
            it a convenient name.

            INSTALLING FIND-X ON A DUAL-FLOPPY SYSTEM
                  The  Find-X  Data  disk  contains  four  directories:
            EMPTY1, EXAMPLE1,  EMPTY2, EXAMPLE2. EMPTY1 contains  a set
            of empty  catalog files  for the Find-X1  program. EXAMPLE1
            contains a demonstration  catalog for the Find-X1  program.
            EMPTY2 contains  a  set  of  empty catalog  files  for  the
            Find-X2 program. EXAMPLE2 contains a  demonstration catalog
            for the Find-X2 program. 

                  First, make  one  working copy  of the  files in  the
            EMPTY directory for  each catalog that  you want to  start.
            Remember  to copy  from EMPTY1  if you  have chosen  to use
            Find-X1,  from EMPTY2  if you have decided to  use Find-X2.
            To do this, insert the  disk into Drive A: and {CD  EMPTY1}







                                                                     12
                                 Installing The Find-X System

            or {CD EMPTY2}. Insert a blank  disk into Drive B: and then
            {COPY *.*  B:}. Do the same  thing for one copy  of each of
            the EXAMPLE directories so you can see how they work.

                  To start  Find-X on a dual-floppy  system, insert the
            appropriate Program  Disk into drive A  and the appropriate
            catalog disk into drive B. Make A  the prime drive by {A:}.
            Then {FDX1}  or {FDX2}, depending on which program you have
            installed. The first screen that  Find-X shows will ask you
            for the name of the catalog. Enter a blank. The screen will
            reply that that  name is  not in the  file, and you  should
            press  any key. The second screen is a menu for maintaining
            the  CatRoads file of paths.  Below the menu  will appear a
            list  of all the catalogs  that are listed  in the CatRoads
            file. This file contains the short name of each catalog and
            the path to its data directory.  You may delete any one  or
            all of  these. Then select  A for  entering a new  name and
            path, and the  screen will ask again  for the name and  the
            path to the data directory. Enter the catalog name that you
            want.  For the path, since this is a dual-floppy system and
            the data  disk is in drive B:, enter {B:}. Then select D to
            tell  Find-X which catalog you  want to work  on, and enter
            its name.  Find-X will then give  you the full name  of the
            catalog  that is on  the disk.  If it  gives you  the wrong
            name, change  to the  correct  disk. (When  starting a  new
            disk, there won't be a full name until you complete the Set
            Up procedure.)

                  If you get  an error  message across the  top of  the
            screen saying  "open error", that means  that Find-X cannot
            open  the first file in the catalog. You have probably made
            an error in  entering the path or have not  copied a set of
            catalog files to the working data disk. The other situation
            is  that you  have not instructed  DOS to  allow sufficient
            files. In  this case,  see the ALL  INSTALLATIONS paragraph
            for further instructions.

                  Thereafter, whenever  you start Find-X for this cata-
            log you  need only enter its  name at the first  screen and
            the program will proceed.  When you want to work on  a dif-
            ferent catalog,  which must be  on a different  floppy, you
            must enter a  new name  and follow the  initial routine  to
            enter  that name and path  into the file.  In a dual-floppy
            system, all the paths are B:. While you theoretically could
            divide one floppy into two  or more directories for differ-
            ent catalogs, it is  not worthwhile to do so  because there







                                                                     13
                                 Installing The Find-X System

            is insufficient room  on one 360K  floppy for two  catalogs
            with significant amounts of data. 

            INSTALLING FIND-X ON A HARD DISK SYSTEM

            HARD DISK SYSTEM
            Make a new FINDX directory directly under the root directo-
            ry. Copy the  files of  the FIND-X working  disk into  that
            root  directory. Make  that  the current  directory by  {cd
            \FINDX}  or similar  command.  Then  {UZIPFDXH}.  When  the
            program  has completed its tasks you will have a new direc-
            tory,  FDX,  with  four subdirectories  under  it,  EMPTY1,
            EXAMPLE1, EMPTY2, EXAMPLE2. Directory FDX will contain  the
            two   programs   FDX1.EXE,    FDX2.EXE,   one   data   file
            CATROADS.DBF, and the Find-X manual, FINDXMAN.DOC. Directo-
            ry EMPTY1 will contain a set  of empty files for a  Find-X1
            catalog, EXAMPLE1  will contain a demonstration catalog for
            the  Find-X1  program.  EMPTY2  and  EXAMPLE2 will  contain
            similar files for the Find-X2 program. 

                  You use  this setup  as is to  try the  demonstration
            programs. All you have  to do is to enter the correct paths
            to the  EXAMPLE directories. If  you get error  messages at
            the start, make sure that you are using EXAMPLE1 files with
            FDX1 program, or EXAMPLE2 files with FDX2 program.

                  This particular directory setup  may not suit you. In
            any case,  you will want to  copy the EMPTY files  to blank
            disks for use when starting new catalogs, and once you have
            learned from the  EXAMPLE catalogs you will want  to delete
            them. Make  floppy disks for Find-X1  program, Find-X2 pro-
            gram,  Find-X data,  and Find-X  Manual. Copy  FDX1.EXE and
            CATROADS.DBF to the Find-X1 program disk. Copy FDX2.EXE and
            CATROADS.DBF to the Find-X2 program disk. Copy FINDXMAN.DOC
            to  the manual  disk. Either  create the  same subdirectory
            structure on  another floppy disk  and copy the  files into
            it, directory by  directory, or use  a separate floppy  for
            each directory. After having done this, you may delete from
            your  root  directory  the  5  initial   files:  FINDX.ZIP,
            PKUNZIP.EXE,  READ-FDX.ME, UZIPFDXF.BAT,  UZIPFDXH.BAT. You
            still have 2 copies  of the original files, don't  you? The
            original distribution disk and your working copy?

                  To  install Find-X  on a  hard disk, first  decide on
            full names and short  names for the catalogs that  you want
            to start. Make directories  for the Find-X program  and for







                                                                     14
                                 Installing The Find-X System

            each of the catalogs that you want to start.

            From the appropriate EMPTY disk, COPY *.*  to each directo-
            ry for your new catalogs. 

            From the appropriate PROGRAM disk, COPY *.* to the directo-
            ry for the Find-X program.

                  To start Find-X, move to the directory for the Find-X
            program. Then  {FDX1} or  {FDX2}, depending on  the program
            you have installed. The first screen that is displayed will
            ask you for the name  of the catalog that you want  to work
            on. Enter a blank. The screen will reply  that that name is
            not in  the file, and to  press any key. Do  so, and Find-X
            displays the  screen for  maintaining the CatRoads  file of
            short  names of  catalogs and their  paths. Below  the menu
            will appear  a list of  all the  catalog names that  are in
            that file. You  may delete any  one or  all of these.  Then
            select A  to enter a new  name, and enter the  name and its
            path. You may enter all the  names and paths now, or at any
            later time whenever you start Find-X. Then select D, to use
            a catalog, and  enter the name  again. Find-X will  display
            the name of the  selected catalog for your approval.  If it
            is the wrong name,  you have entered an incorrect  path. (A
            catalog has a full  name only after you have  completed the
            Set Up procedure for it.)

                  If you get  an error  message across the  top of  the
            screen saying  "open error", that means  that Find-X cannot
            open the catalog  files. This means that you  probably have
            made a mistake in entering the path or have not copied  the
            catalog data  files to that directory.  The other situation
            is  that you have  not instructed  DOS to  allow sufficient
            files. In  this case,  see the paragraph  ALL INSTALLATIONS
            for further instructions.

                  Whenever you start  Find-X after  this, entering  the
            short  name at the first  screen allows Find-X  to move di-
            rectly  to that catalog. Check  the name of  the heading to
            the main menu to see that you  are working with the correct
            catalog.

            ALL INSTALLATIONS: ALLOWING SUFFICIENT FILES
                  Find-X requires more files than DOS initially allows.
            Your CONFIG.SYS  file should include the statement FILES=15
            (or  some  larger number  if you  have  a print  spooler or







                                                                     15
                                 Installing The Find-X System

            similar  resident program that also requires files). Insert
            the FILES  statement into  your CONFIG.SYS file  and reboot
            the computer so  that DOS  knows to allow  for more  files.
            Increasing the number  of buffers to  15 by BUFFERS=15  may
            increase the speed of operation. For further information on
            the  CONFIG.SYS  file consult  your  DOS  manual under  the
            headings Files and Configuration.

            TESTING THE STARTUP
                  To test whether the paths have been properly set, you
            need to  check that the  proper catalog has  been selected.
            First look at the catalog name at the heading of each menu.
            It should be the name of the catalog  that you wanted. Then
            make a search for items that you know are in  that catalog.
            If Find-X doesn't find any items, or finds different items,
            you are in the wrong directory.

                  If items are correct but the name is wrong, then from
            the  main menu  select "N  Selecting  and Setting  Up Cata-
            logs." Then from the Set Up Menu select "A  Setting Up This
            Catalog." You will then  be asked to enter data  about that
            catalog, including the correct name.

                  If  the items are not  correct, you are  in the wrong
            directory. From  the main menu select "O  Select,  Set Up &
            Re-Index  Catalogs."  Then  from  the Set  Up  Menu  select
            "B  Select A  Different Catalog". Enter  a blank or  a non-
            sense name to  get to the menu for entering  new paths, and
            then enter the correct name and path.










                               OPERATING INSTRUCTIONS


            GENERAL INSTRUCTIONS FOR FIND-X CATALOGS

            SELECT & SET UP CATALOGS
                  Selecting Catalogs when starting  up has been covered
            under Installation. To Set Up a Catalog, select "O  Select,
            Set  Up &  Re-Index Catalogs".  Then from  the Set  Up Menu
            select "A  Set Up The Current Catalog". Find-X will display
            a data-entry screen for you to enter the  required informa-
            tion.  See  the illustration  under  Menus  and Data  Entry
            Screens. Enter the full name of the catalog. 

                  Choose the date format that  you wish for this  cata-
            log,  American or  British. Say whether  you choose  to use
            dates. If  you choose  not to  use dates,  you will  not be
            asked for them and can never select  by them. If you choose
            to use dates you will be asked for them and have the abili-
            ty to select  items by a range of dates.  You may choose to
            use dates in other centuries.  If you choose to do  so, you
            will have to enter  the full four digits  for the year;  if
            you choose dates only  in this century you will  enter only
            the last  two digits.  However, this is  reversible because
            Find-X  carries the full four  digits in its  files, so you
            can use other centuries only when you need to. 

                  If  you  are setting  up a  new or  a freshly-emptied
            catalog,  you may enter a new item starting number for this
            catalog.

                  Then enter,  if you wish,  a format for  the descrip-
            tion. Even  if you  enter one  you may  disobey it for  any
            item,  because it  is only for  your assistance  and Find-X
            doesn't select according to it. If you use  the | symbol as
            the  separator between  parts of  the description  you will
            find that entering  data is easier.  When you complete  one
            part of the description and press {Enter}, the  cursor will
            jump to the  start of the next part. For  FDX1 the descrip-
            tion may contain up to 10 parts, for FDX2 it may contain up
            to 20 parts. The  most convenient way to locate  items that
            are listed in the  catalog is to include their  location as
            part of  the description,  so  include a  section for  this
            purpose if possible.

                  For Find-X2 you want to save  part of the description







                                                                     17
                                     Operating Instructions

            format for a  general description.  In this you  can put  a
            series  of  abbreviations  for particular  characteristics,
            each one separated  from the others by a  special character
            (that you choose yourself) called the  description divider.
            Many people  choose the  semicolon, because  it is  easy to
            type and is not likely to  be needed otherwise. You may use
            any  character except ( ) ^ +  !, because these are used as
            logical  symbols.  In this  section  you  can include  many
            characteristics.  If your interests  are transportation you
            might use 'rr'  for railroad personnel  or firms, 'at'  for
            air transport, 'mt' for motor truck, 'ss' for  ocean steam-
            ships.  If  your  interests  are artistic,  you  might  use
            'paint', 'sculpt', 'phot', 'dance', as descriptors. If  you
            have both  interests, you can use all  of these and more as
            well. Use abbreviations to save space, but you can create a
            new  abbreviation at  any time,  just by  entering it  in a
            description. Just keep a list of abbreviations so you don't
            use  two different  abbreviations for  one concept,  or one
            abbreviation with  two meanings.  Find-X2 will print  out a
            list of  such abbreviations  in alphabetical order,  so you
            can keep these straight.

                  Find-X2 will ask for the description divider. This is
            one character that you  will use to divide sections  of the
            description to make the logical search easier. You want  to
            choose a  character that is  easy to type  but will not  be
            used otherwise. Many people use the semicolon.

                  Then enter two items about your hardware. Say whether
            your  printer is hand-fed or not, and whether you intend to
            use Drive A or Drive B for backing up catalogs.  If you are
            on a  dual-floppy system  it won't  matter which  you enter
            because  you will make backups by copying disks, but if you
            are on a hard-disk system enter this correctly.

                  After this final entry, Find-X will file the informa-
            tion  for later use. Do this once for each catalog that you
            start.

                  If you are  on a  hard-disk system you  may elect  to
            keep  all or any of your  catalogs on floppy disks. Just do
            whichever is most convenient for you for each catalog.

            NUMBERING ITEMS IN A CATALOG
                  Each Find-X catalog  has its own series  of item num-
            bers. These run from 1 to 999,999. Normally they start with







                                                                     18
                                     Operating Instructions

            1 for each catalog, but you can select a different starting
            number when you set up each catalog. You may find it conve-
            nient  to number the items in some catalogs with the Find-X
            item  number and keep them  in this order  in whatever con-
            tainers are suitable  for objects of this  type. With photo
            slides, for example, it is easy to number the frame of each
            and to store them in this order. 

            LOCATING ITEMS FROM THE CATALOG DESCRIPTION
                  The easiest way to  locate items from the  catalog is
            to  label  the items  with the  Find-X  item number  and to
            include  their locations  as  part of  the description,  as
            described  in the section on  setting up a  catalog. If you
            cannot  do this, here are some alternatives. If the item is
            easily  identifiable from its description (photo slides are
            not easily identifiable,  books are), then  it need not  be
            labeled.  If the item can be labeled with its precise loca-
            tion, such as Volume  Name or Number, Page Number  and Slot
            Number  for photo slides, then it may be extracted from the
            page,  used, and  returned to  precisely the  same location
            after use,  and it need not be labeled with the Find-X item
            number.  If your storage system  is so complicated that you
            cannot describe  locations within the space  allowed, or if
            you lend  out items so their  location continually changes,
            then you must use a supplementary card file. Keep the cards
            in  order of Find-X item  number so they  may be easily se-
            lected. 

            INSTRUCTIONS FOR SPECIFIC OPERATIONS WITH FIND-X1
                  The following instructions are in order of the selec-
            tions from the main menu.

            A  ENTERING NEW ITEM
                  When  entering items  into  a catalog,  Find-X1  will
            assign  an item number  to each item  in turn.  If you have
            chosen to  use dates, Find-X1 will ask  for the date of the
            item. Then, if you  have entered a format  for descriptions
            into  the Set  Up  Data Screen,  Find-X1 will  present that
            format, using the  | character as the divider  between each
            part of the  description (provided that you used this char-
            acter when setting up the catalog). Underneath that format,
            Find-X1 presents the 78-character  box for the description.
            If the description for this object can follow the format of
            the description,  enter the  first part of  the description
            and then {Enter}. The cursor will  jump to the next part of
            the description. If the  description for this object cannot







                                                                     19
                                     Operating Instructions

            follow the format, just type in the description and {Enter}
            until the box for the first descriptor appears.

                  Descriptions do not have  to have a consistent format
            because Find-X1  doesn't search from the  item description.
            It is there for your convenience in  recognizing and locat-
            ing the item whenever it is recalled.

                  Then Find-X1  opens a  box for the  first descriptor.
            You enter any  characteristic by  which you  might want  to
            recall the item  at a  later time. When  you {Enter}  after
            entering the  descriptor, Find-X1  opens another  box below
            the last. You enter  descriptors until you have no  more to
            enter, or  until you have entered 9.  When you have no more
            to  enter, just  {Enter} on  a blank  box and  Find-X1 will
            accept the complete item with its descriptors. You are then
            asked for  another item to enter  or to return to  the main
            menu.

                  When  entering  descriptors,  remember that  you  can
            search either  exactly or  generically. In a  collection of
            flowers you may have lupines named Lupinus bicolor, Lupinus
            arboreus and Lupinus polyphyllus. There is sufficient space
            in the descriptor for each of these names,  and if you make
            a  generic search  for LUPINUS  you will  get all  of these
            items, while if you  make a search for LUPINUS  BICOLOR you
            will  get only  the  lupinus bicolor  items. Therefore  you
            don't  have to use a different descriptor for each word for
            which you may search.  Just place the most general  word of
            each phrase at the front, the more specific afterwards.

                  The disk space required for a catalog is most affect-
            ed  by the  number of  descriptors you  use for  each item.
            Therefore,  if  you  are  disk-space  limited  economize on
            descriptors  and  don't  enter descriptors  which  you  are
            unlikely to use.

            B  SEARCH FOR ITEMS
                  When searching  for  items Find-X1  will present  you
            with an illuminated  box for the first descriptor. When you
            complete that box, Find-X1 will  present you with the next.
            When  you have  entered  all  the appropriate  descriptors,
            {Enter} on the next blank box to complete the list. If that
            catalog  uses dates, Find-X1 will ask if you want to search
            by dates.  If you do, Find-X1  will give you boxes  for the
            earliest and latest dates.







                                                                     20
                                     Operating Instructions

                  Then Find-X1 Searches for  the items with all  of the
            descriptors. It shows the list of descriptors on the screen
            and  the number  of  items that  it  finds that  meet  each
            descriptor.  For the first descriptor  it may find 154. For
            each succeeding descriptor the number will be no larger and
            probably smaller,  as Find-X1 discards from  the list items
            that  don't match  each succeeding  descriptor. If  Find-X1
            shows that some items  were found for the last  descriptor,
            it  has created a  file of items  that may be  displayed or
            printed.

                  Because  of this  search pattern,  Find-X1 will  work
            faster if  you enter  a rather  specific descriptor as  the
            first  one of  a series.  Then Find-X1  has to  match fewer
            items   against  the   later  descriptors.  If   the  first
            descriptor is very general and will match many items,  then
            Find-X1 has to make more matches to produce the final list.

            C  DISPLAY LIST OF FOUND ITEMS
                  When  Find-X1 displays  the list  of found  items, it
            first displays the list  of descriptors that determined the
            list. Then it displays  the items found four at a time. You
            may scroll the list one item at a time with the UP and DOWN
            Arrows  or move them  four at a  time with the  Page Up and
            Page Down keys. Find-X1 will notify you if you reach either
            the beginning or the end of the list, and won't move beyond
            these.

            D  PRINT LIST OF FOUND ITEMS
                  Find-X1 will  print the  list of found  items in  80-
            column format.

            E  EMPTY THE LIST OF FOUND ITEMS
                  Find-X1 will empty the list of found items in  prepa-
            ration for another run.

            F  DELETE EXISTING ITEM
                  Find-X1 will  remvove from the catalog  any item that
            is specified by its item number.

            G  CHANGE DESCRIPTION OF ONE ITEM
                  Find-X1 will  display the current description  of any
            item  that  you request  by item  number  and allow  you to
            change the description.







                                                                     21
                                     Operating Instructions

            H  CHANGE DESCRIPTORS FOR ONE ITEM 
                  Find-X1 will  change the list of  descriptors for any
            item  in the catalog. When you enter the item number, Find-
            X1 presents the  description of  the item and  its list  of
            descriptors. You may change  any descriptor, delete any, or
            add more (up to 9 total).  Then {Enter} until you exit from
            the bottom  illuminated box.  Find-X1 will then  change the
            list of descriptors in accordance with you latest input.

            I  CHANGE THE DATE OF AN ITEM
                  Find-X1 will  display the date  of any item  that you
            request by item number and allow you to change that date.

            J  RENAME A DESCRIPTOR
                  You may find that you have entered  a descriptor with
            two  different spellings,  or that you  want to  change one
            descriptor to match another.  Find-X1 will ask you for  the
            present  descriptor and the new name for it. When you enter
            both, Find-X1 will  revise all  of the items  with the  old
            descriptor to match the new descriptor.

            K  DISPLAY COMPLETE CATALOG OF ITEMS
                  Find-X1 will display the items in the catalog five at
            a time, starting at  any item number that you  request. You
            may scroll through the catalog one item at a time  with the
            Up and  Down Arrow keys, or  five items at a  time with the
            Pg Up and Pg Down keys. Press End to terminate the display.

            L  DISPLAY ITEMS WITH DESCRIPTORS
                  Find-X1 will display the items in the catalog, one at
            a time, with their descriptors, starting at any item number
            that you  request. You may  scroll through the  catalog one
            item at a time with  the Up and Down Arrow keys.  Press End
            to terminate the display.

            M  PRINT COMPLETE CATALOG OF ITEMS
                  Find-X1 will print a  complete list of all  the items
            in the catalog.

            N  PRINT LIST OF DESCRIPTORS
                  Find-X1  will  print  a  complete  list  of  all  the
            descriptors that have been used in one catalog. You may use
            this  list  when   entering  descriptors  to   ensure  that
            descriptors that should be spelled identically are actually
            so  spelled. When  you search  for items,  this saves  some
            multiple searches and some revisions of descriptors.







                                                                     22
                                     Operating Instructions


            O  SELECT, SET UP & REINDEX CATALOGS
                  This  moves you to the Setting Up Catalogs Menu. From
            this menu you may select:
                  A     SET UP THE CURRENT CATALOG
                        This  enables you to  enter the characteristics
                        for the current catalog as discussed above.

                  B     SELECT A DIFFERENT CATALOG
                        This moves you to the Setting Paths Menu. Below
                        the menu  is shown a  list of  all the  current
                        catalogs. From this menu you may select:

                        A  ENTER NEW PATH FOR ONE CATALOG
                        This is enables you to  enter the paths to  the
                        different catalogs.

                        B  DELETE PATH FOR ONE CATALOG
                        This  enables you  to  delete the  path to  one
                        catalog.

                        C  DELETE ALL PRESENT PATHS
                        This deletes all the paths to catalogs. This is
                        useful when you have rearranged directories and
                        you don't know the names of paths to delete.

                        D  PREPARE TO USE ONE CATALOG
                        This moves you to the designated catalog.

                  C     RENUMBER THE ITEMS IN THE CURRENT CATALOG
                        This renumbers the items  in the current  cata-
                        log.  You may select  the new  starting number,
                        but it can not be between the present first and
                        last item numbers. It may be equal to the pres-
                        ent first  item number. The items  are numbered
                        in  the  order in  which  they were  originally
                        entered. You  are given a chance  to reject the
                        renumbering task,  in case you reach this func-
                        tion inadvertently.

                  D     REINDEX ALL ITEMS IN THE CURRENT CATALOG
                        This does two tasks.  It physically removes all
                        the  empty and deleted records and it reindexes
                        all  the  valid records.  With a  large catalog
                        this  will take  considerable time.  Reindex to
                        reduce  the size  of the  files after  you have







                                                                     23
                                     Operating Instructions

                        made  many deletions. Reindex also if the files
                        have got into a mess through some errors.

                  E     EMPTY THE CURRENT CATALOG
                        This empties the current catalog. You are given
                        a chance  to reject the emptying  task, in case
                        you reach this function indavertently.

            P  MAKE BACKUP TO FLOPPY DISK 
                  There are two ways  to make backups of  Find-X1 cata-
            logs. For  catalogs that are  on floppy disks,  simply copy
            the disk with either  the COPY *.* command or  the DISKCOPY
            command.  For catalogs on a hard disk, which may exceed the
            capacity  of a  single floppy  disk, Find-X1  uses the  DOS
            BACKUP and RESTORE commands. To backup a hard-disk catalog,
            insert  a floppy  into the drive  that you  have designated
            during the  Set Up proceedure and select "O  Make Backup To
            Floppy  Disk." Find-X1  will fill  as many  floppies as  is
            required. To restore  that catalog to  the hard disk  after
            correcting  a failure,  you must  RESTORE into  a directory
            with the same  name and  path as before.  Consult your  DOS
            manual  for the correct procedure, as this is a bit tricky.
            You might DISKCOPY the backup  disks before trying this for
            the first time, just in case. 


            INSTRUCTIONS FOR SPECIFIC OPERATIONS WITH Find-X2
                  The following instructions are in order of the selec-
            tions from the main menu.

            A  ENTERING NEW ITEM
                  When entering  items  into a  catalog,  Find-X2  will
            assign an item  number to  each item in  turn. If you  have
            chosen to use  dates, Find-X2 will ask for the  date of the
            item. Then, if you  have entered a format for  descriptions
            into  the Set  Up Data  Screen, Find-X2  will present  that
            format in three triple-spaced  lines, using the | character
            as the divider between each part of the description. Under-
            neath  each line of  that format, Find-X2  presents the 78-
            character  box for  that line  of the  description.  If the
            description for  this object can  follow the format  of the
            description, enter  the first  part of the  description and
            then {Enter}.  The cursor will jump to the next part of the
            description.  If  the description  for  this  object cannot
            follow the format, just type in the description.







                                                                     24
                                     Operating Instructions

                  Descriptions do not have to have a consistent format.
            It is there for your convenience in recognizing  and locat-
            ing the item whenever it is recalled.

                  When  you get  to  the  general description  section,
            enter  the abbreviations that  indicate the characteristics
            that you may  consider significant in  the future. If  your
            interests are  transportation you might use  'rr' for rail-
            road personnel or  firms, 'at' for air  transport, 'mt' for
            motor truck,  'ss' for ocean steamships.  If your interests
            are artistic,  you  might use  'paint',  'sculpt',  'phot',
            'dance', as  descriptors. If  you have both  interests, you
            can use all of these and more as well. Use abbreviations to
            save  space, but you can  create a new  abbreviation at any
            time,  just by entering it in a description. You must start
            the  sequence  of  descriptors  with the  dividing  symbol,
            insert the dividing symbol between each pair of descriptors
            and add it to the end. The dividing symbol allows Find-X to
            make more  accurate searches by eliminating  all items that
            contain the searched-for sequence  of characters as part of
            larger  words. Thus, a search pattern of ;prob; will select
            only  ;prob; descriptors and will  skip over items with the
            words 'probable', 'improbable', 'probate',  'reprobate' and
            the like in their descriptions. 

            B  SEARCH FOR ITEMS
                  Find-X2 displays the instructions for  formatting the
            search request, with below  it the illuminated box  for the
            search request. You may search for any combination of words
            or  parts of  words that  may be  in the  description. Each
            string  of letters, either one  word or several words, that
            form  one string  to be  searched for  must be  enclosed in
            parentheses. You may combine all of these  strings with the
            logical  symbols + (AND),  ^ (OR),  and ! (NOT),  using the
            parentheses,  ( and  ),  to group  items.  For example,  to
            search  for all  photos  of the  swamp  onion you  enter:  
            (swamp  onion). If you want  all photos of  the swamp onion
            that were taken by H. Baum,  you enter (swamp onion) +  (H.
            Baum). If you want all photos of buildings taken by Taylor,
            then you enter  (;bldg;) + (Taylor). This presumes that you
            have  identified all  photos of  buildings with  the ;bldg;
            descriptor.  If you want  all photos of  buildings taken by
            either Taylor or Forester,  you enter ((;bldg;) + (Taylor))
            ^  ((;bldg;) + (Forester)). If  you want all  the photos of
            buildings  that  were  not  taken by  Forester,  you  enter
            ((;bldg;) + (! (Forester))). 







                                                                     25
                                     Operating Instructions

                  Take care to use parentheses to properly group items.
            If you don't have equal numbers of left and right parenthe-
            ses, Find-X2 will  tell you to correct the  search request.
            You  cannot use either single  or double quotation marks in
            any search request, or the  program will terminate. To find
            an  item identified as  Prince's Plume,  break it  into two
            strings as (Prince) + (Plume). 


            C  DISPLAY LIST OF FOUND ITEMS
                  When  Find-X2 displays  the list  of found  items, it
            first displays the search request that determined the list.
            Then  it displays the  items found four at  a time. You may
            scroll the  list one item  at a time  with the UP  and DOWN
            Arrows  or move them  four at a  time with the  Page Up and
            Page Down keys. Find-X2 will notify you if you reach either
            the beginning or the end of the list, and won't move beyond
            these.

            D  PRINT LIST OF FOUND ITEMS
                  Find-X2 will  print the  list of found  items in  80-
            column format.

            E  EMPTY THE LIST OF FOUND ITEMS
                  Find-X2 will empty the list of found items in  prepa-
            ration for another run.

            F  DELETE EXISTING ITEM
                  Find-X2 will  remvove from the catalog  any item that
            is specified by its item number.

            G  CHANGE DESCRIPTION OF ONE ITEM
                  Find-X2 will  display the current description  of any
            item  that  you request  by item  number  and allow  you to
            change the description.

            H  CHANGE THE DATE OF AN ITEM
                  Find-X2 will  display the date  of any item  that you
            request by item number and allow you to change that date.

            I  DISPLAY COMPLETE CATALOG OF ITEMS
                  Find-X2 will display the items in the catalog five at
            a time, starting at  any item number that you  request. You
            may scroll through the  catalog one item at a time with the
            Up and  Down Arrow keys, or  five items at a  time with the
            Pg Up and Pg Down keys. Press End to terminate the display.







                                                                     26
                                     Operating Instructions

            J  PRINT COMPLETE CATALOG OF ITEMS
                  Find-X2  will print a complete list  of all the items
            in the catalog.

            K  SELECT AND SET UP CATALOGS
                  This moves you to the Setting Up  Catalogs Menu. From
            this menu you may select:
                  A     SET UP THE CURRENT CATALOG
                        This  enables you to  enter the characteristics
                        for the current catalog as discussed above.

                  B     SELECT A DIFFERENT CATALOG
                        This moves you to the Setting Paths Menu. Below
                        the menu  is shown  a list  of all  the current
                        catalogs. From this menu you may select:

                        A  ENTER NEW PATH FOR ONE CATALOG
                        This is enables  you to enter the  paths to the
                        different catalogs.

                        B  DELETE PATH FOR ONE CATALOG
                        This  enables you  to  delete the  path to  one
                        catalog.

                        C  DELETE ALL PRESENT PATHS
                        This deletes all the paths to catalogs. This is
                        useful when you have rearranged directories and
                        you don't know the names of paths to delete.

                        D  PREPARE TO USE ONE CATALOG
                        This moves you to the designated catalog.

                  C     RENUMBER THE ITEMS IN THE CURRENT CATALOG
                        This renumbers  the items in  the current cata-
                        log. You  may select  the new  starting number,
                        but it can not be between the present first and
                        last item numbers. It may be equal to the pres-
                        ent first item number.  The items are  numbered
                        in the  order  in which  they  were  originally
                        entered. You  are given a chance  to reject the
                        renumbering task, in case you reach this  func-
                        tion inadvertently.

                  D     EMPTY THE CURRENT CATALOG
                        This empties the current catalog. You are given
                        a chance  to reject the emptying  task, in case







                                                                     27
                                     Operating Instructions

                        you reach this function indavertently.

            L  MAKE BACKUP TO FLOPPY DISK 
                  There  are two ways to  make backups of find-X2 cata-
            logs. For  catalogs that are  on floppy disks,  simply copy
            the disk with either  the COPY *.* command or  the DISKCOPY
            command.  For catalogs on a hard disk, which may exceed the
            capacity of  a single  floppy disk,  find-X2  uses the  DOS
            BACKUP and RESTORE commands. To backup a hard-disk catalog,
            insert a floppy  into the  drive that  you have  designated
            during the Set Up proceedure and select "O  Make  Backup To
            Floppy  Disk." find-X2  will fill  as  many floppies  as is
            required. To restore  that catalog to  the hard disk  after
            correcting  a failure,  you must  RESTORE into  a directory
            with the same  name and  path as before.  Consult your  DOS
            manual  for the correct procedure, as this is a bit tricky.
            You might  DISKCOPY the backup disks before trying this for
            the first time, just in case. 

            PROGRAM LANGUAGE
                  Find-X  was written,  developed and  compiled in  the
            Clipper dialect of dBase from Nantucket.

            COPYRIGHT AND LICENSE TO USE
                  The  Find-X programs and  this manual are copyrighted
            by John Forester. Copies of the programs, their data struc-
            tures and this manual may be made and circulated for review
            and  trial, but those who find it useful for their purposes
            ought  to obtain a user  license from John  Forester at 726
            Madrone  Ave., Sunnyvale, CA 94086  for a fee  of $20. John
            Forester  will answer  questions from  registered  users at
            408-734-9426.
                                        END










                           LIST OF FILES IN FIND-X SYSTEM

            IN THE TOP DIRECTORY
            READ.ME    Tells you to print the Find-X Instruction Manual
            FINDXMAN   This Find-X Instruction Manual

            IN THE PROGRAM DIRECTORY
            FDX1.EXE      Find-X1 Program
            FDX2.EXE      Find-X2 Program  
            CATROADS.DBF  List of paths to the catalogs

            IN THE DATA DIRECTORY FOR EACH Find-X1 CATALOG
            ITEMS1.DBF
            ITDEX1.NTX
            DATEDEX1.NTX
            CLUES1.DBF
            CLUEDEX1.NXT
            KNUMDEX1.NTX
            TEMP1.DBF
            TDEX1.DBF
            FINDMEM1.MEM

            IN THE DATA DIRECTORY FOR EACH Find-X2 CATALOG
            ITEMS2.DBF
            PHRASES2.DBF
            FINDMEM2.MEM
            ITDEX2.NTX
            PHDEX2.NTX








                           MENUS & DATA ENTRY SCREENS, FIND-X1


            'THE NAME OF YOUR CATALOG' CATALOG

                  Enter Task Letter

            A     Enter New Item
            B     Search For Items
            C     Display List of Found Items
            D     Print List of Found Items
            E     Empty The List of Found Items
            F     Delete Existing Item
            G     Change Description Of One Item
            H     Change Descriptors For One Item
            I     Change The Date of an Item
            J     Rename A Descriptor
            K     Display Complete Catalog Of Items
            L     Display Items With Descriptors
            M     Print Complete Catalog of Items
            N     Print List of Descriptors
            O     Select & Set Up Catalogs
            P     Make Backup To Floppy Disk
            X     Exit  Find-X Program


            Copyright (C) 1988 John Forester: All Rights Reserved


                                 The Main Menu, Find-X1

            Item 'I' does not appear when this catalog doesn't use dates.
            Item 'O' does not appear when the catalog is on a floppy drive.







                                                                          30
                                    Menus and Data Entry Screens


            SELECTING & SETTING UP CATALOGS IN THE FIND-X1 SYSTEM
            THE CURRENT CATALOG IS 'THE NAME OF YOUR CATALOG'

                  Enter Task Letter

            A     Set Up The Current Catalog
            B     Select A Different Catalog
            C     Renumber The Items In The Current Catalog
            D     Reindex All Items In The Current Catalog
            E     Empty The Current Catalog
            X     Return To The Main Menu



                                The Set Up Menu, Find-X1





            Find-X - The Universal Catalog Indexing  System

            SETTING PATHS FOR DIFFERENT CATALOGS

            A     Enter New Path For One Catalog
            B     Delete Path For One Catalog
            C     Delete All Present Paths
            D     Prepare To Use One Catalog
            X     Exit The Find-X Program


            RECIPES     SLIDES      BOOKS

                            The Path Selecting Menu, Find-X1







                                                                          31
                                    Menus and Data Entry Screens


            'YOUR CATALOG'S NAME' CATALOG -- SETTING UP CATALOG FORMAT

            Name of This Catalog:           Example of Photo Slide
            Date Format - A/B:              B
            Use Dates In This Catalog?      T
            Need Dates In Other Centuries?  F
            Enter Desired Next Item Number:      23
            Enter The Format For Item Descriptions:
            Latin Name       |Common Name        |Part of plant   |Location
            Is Your Printer Hand-Fed?       T
            Drive For Backup Data - A/B     B


                            Set Up Data Entry Screen, Find-X1


            'YOUR CATALOG'S NAME' CATALOG -- ADDING ITEM

            Item Number:  238         Date of Item  01/04/70
            Description of Item
            |Genus         |Species       |Variety      |Common Name       |
             Triteleia      laxa                         Wally's basket

            Triteleia laxa         This and the items below it are the
            Wally's basket         indexed fields upon which the item
            H. Baum                may be searched.
            grasslands
            Calif
            Oregon


                                Adding New Item, Find-X1







                                                                          32
                                    Menus and Data Entry Screens


                          MENUS AND DATA ENTRY SCREENS, FIND-X2

            'YOUR CATALOG'S NAME' CATALOG

                Enter Task Letter

            A   Enter New Item
            B   Search For Items
            C   Display List of Found Items
            D   Print List of Found Items
            E   Empty The List of Found Items
            F   Delete Existing Item
            G   Change Description of One Item
            H   Change Date of an Item
            I   Display Complete Catalog of Items
            J   Print Complete Catalog of Items
            K   Select and Set Up Catalogs
            L   Make Backup To Floppy Disk
            X   Exit Find-X2 Program

            Copyright 1989 John Forester: All Rights Reserved

                                   Main Menu, Find-X2


            SELECTING & SETTING UP CATALOGS IN THE FIND-X2 SYSTEM
            THE CURRENT CATALOG IS 'YOUR CATALOG'S NAME'

                Enter Task Letter

            A   Set Up The Current Catalog
            B   Select A Different Catalog
            C   Renumber The Items In The Current Catalog
            D   Empty The Current Catalog
            X   Return To The Main Menu


                      Selecting & Setting Up Catalogs Menu, Find-X2







                                                                          33
                                    Menus and Data Entry Screens


            SETTING PATHS FOR DIFFERENT CATALOGS

            A   Enter New Path For One Catalog
            B   Delete Path For One Catalog
            C   Delete All Present Paths
            D   Prepare To Use One Catalog
            X   Exit the Find-X2 Program


            RECIPES     BOOKS     PHOTOS      STAMPS
            AUDIOREC    AUDIOTAP


                               Setting Paths Menu, Find-X2


            'YOUR CATALOG'S NAME' CATALOG -- SETTING UP CATALOG

            Name Of This Catalog:           'Your Catalog'
            Date Format - A/B:              A
            Use Dates In This Catalog?      T
            Descriptor Dividing Character:  ;
            Is Your Printer Hand-Fed?       T
            Need Dates In Other Centuries?  F
            Enter The Format For Item Description:
            Use | For Description Separators & At End Of Line, 20 Max.
            Family           |Genus           |Species         |Variety    |
            Common Name      |hrt|CRTE|Plant Comm.        |Geo Range       |
            Remarks                                      |Slide #|Location |


                             Adding New Item Screen, Find-X2

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1719

     Volume in drive A has no label
     Directory of A:\

    UZIPFDXF BAT      1382  11-13-89   8:47a
    UZIPFDXH BAT       904  11-13-89   6:40a
    DES_FDX  DOC      1836  11-19-89   7:50a
    PKUNZIP  EXE     22022  10-01-89   1:02a
    FINDX    ZIP    225415   3-24-90   3:43p
    READ_FDX ME       1910   2-08-90   9:39a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694   4-22-90   5:49a
    FILE1719 TXT      3405   4-22-90   7:07p
            9 file(s)     257606 bytes
                           60416 bytes free
