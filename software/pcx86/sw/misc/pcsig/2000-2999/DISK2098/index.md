---
layout: page
title: "PC-SIG Diskette Library (Disk #2098)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2098/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2098"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DBSCAN"

    DBSCAN is an easy-to-use browsing utility that lets you view the
    contents of dBase III files without having to enter the dBase program.
    If the information you need is simple, why are you waiting for dBase to
    load?
    
    This is a stand-alone program accessed from DOS -- you don't even need
    dBase, only dBase-type files. You can view the .DBF files but you
    can't change them. You do, however, have control of the fields
    displayed and their position on the screen.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DBSCAN.DOC

{% raw %}
```
                          DBSCAN by SOFTSHOP

WHAT IS IT?

        DBSCAN is a utility program that provides a browse like
scroll of any dBASE III type data file. The program allows the
user to select the fields and the position on the screen where
they are viewed. DBSCAN is similar to the BROWSE command of dBASE
III except that it permits no editing or adding of data and its
position on the screen is controlled by the user. Try it, you'll
like it, and read on to learn how you can use it for your own
programming needs.


HOW DO I USE IT?

        If you have a hard disk, copy just three files DBSCAN.EXE
, DBSCAN.DBF, and DBSCAN.DOC to a directory of your choice. Execute
the program by being in the proper directory and typing DBSCAN from
the DOS prompt. If you only have a floppy drive, simple type DBSCAN
at the A: or B: prompt. You will see the following:

Database To Scan DBSCAN  (This is the sample database file provided.
                          However, you may scan any dBASE III DBF
                          type file by providing the complete pathed
                          name without the DBF extension.

        Press enter to accept the database you wish to scan. You will
then see:

Fields To View CU_CODE + SPACE(1) + DTOC(CU_DATELC) + SPACE(1)
/use right arrow to see this/           + STR(CU_TYSALES,11,2)

Title            Customer  Chg Date  Amount Chg
Starting Row            11
Starting Column         30
Length of Window        10

        The entire description of the Fields To View entry can only
be seen by panning to the right by using the right arrow key.

        The Fields To View prompt is the most critical to understand,
so don't go the sleep now. DBSCAN will show any field in the database
as long as the field is in a string type format. On the far right of
the screen the first 20 field names are shown along with their field
codes. You simply enter the field names you want, look at the example
and experiment with your own entries. For example, enter:

                CU_CODE + SPACE(1) + CU_DESCR
or try          CU_DESCR + SPACE(1) + "$" + STR(CU_LYSALES,7,0)



                               Page 1








See what I mean? All data type fields must have the DTOC conversion
applied whereas a numeric field must have the STR conversion, logical
type fields cannot be viwed. The SPACE(x) is used simply to seperate
the data as shown in the window and the + signs are used to make one
continuous string of the window record display. If you make a mistake
here you will get an error message on the top line that says QUIT?
(Q/A/I). Enter Q to quit the program and start over by typing DBSCAN
at the DOS prompt. It helps to know the various field types and sizes
of the DBF file you are scanning in order to avoid the error above.

        The Title prompt gets the description you wish to use to
headline the scan window.

        The Starting Row prompt determines the starting row for the
window scan.

        The Starting Column prompt determines the starting column
of the window scan.

        The Length of window prompt determines the number of records
shown at one time and the actual length of the window.

        Window dimensions that would go off the screen are pre-empted
with an error message. You must stay within the displayable area of
the screen.

Big Deal, so What?

        The value of DBSCAN is the ability to use its techniques in
your own dBASE programs. This can be done by purchasing the source
code with complete commented documentation. Because the source is
written in plain old dBASE III Plus code NOT utilizing any compiler
enhancements provided by CLipper, Foxbase, and QuickSilver, its PRG
file can be used for scanning DBF records for any dBASE compatible
system. DBSCAN was compiled by Clipper; however, it can be compiled
by dBASE and Foxbase as well. The source to DBSCAN can even be used
as a DO PROCEDURE from the dBASE dot prompt. I have used the source
to DBSCAN for over a year now in over 100 working custom programs to
scan and select everything from Customer Names to Inventory Receipts
for a stock item. Review the attached order form to see exactly what
you get, the cost and ordering information. In the mean time, enjoy
the use of DBSCAN without restrictions or obligations and pass it on
to your friends for their review.

Clipper is a Nantucket trademark, QuickSilver is a Wordtech trademark,
Foxbase is a trademark of Fox Software, and dBASE is a trademark of
Ashton-Tate Corp.

  




                               Page 2











                     DBSCAN SOURCE CODE ORDER FORM

                               SOFTSHOP
                             P.O. BOX 353
                           SANDOWN, NH 03873

                          John A. Houck Pres.
                             (603)887-4887

        You will receive the complete source code to DBSCAN and the
window procedure file as written on dBASE III Plus code. The source
is well commented and additional documentation on how to incorporate
this source code into your own applications is provided. The diskette
will contain DBSCAN.PRG, DBWND.PRG, COLOR.PRG, and SOURCE.DOC.

                                             Qty   Price   Extension

DBSCAN source code and documentation         ___   $40.00    _______
Shipping                                                   $  3.00

                                                   TOTAL   $ _______

__ 5 1/4 md2D diskette
__ 3 1/2 mf2-dd diskette

SEND TO: ___________________________________________________________

STREET:  ______________________________________

CITY:    ______________________________________

STATE:   __  ZIP: __________

Thank you for your order of DBSCAN.





                               Page 3

```
{% endraw %}

## FILE2098.TXT

{% raw %}
```
Disk No: 2098                                                           
Disk Title: dbScan                                                      
PC-SIG Version: 1.1                                                     
                                                                        
Program Title: dbScan                                                   
Author Version: 1.00                                                    
Author Registration: $40.00.                                            
Special Requirements: None.                                             
                                                                        
DBSCAN is an easy-to-use browsing utility that allows you to view the   
contents of dBase III files without having to enter the dBase program.  
                                                                        
This is a stand-alone program you access from the DOS system prompt,    
and it allows you to view the .DBF files but not to change them.        
However, you have control of the fields displayed and where you want    
them displayed on the screen.                                           
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2098

     Volume in drive A has no label
     Directory of A:\

    DBSCAN   DBF     18130   2-02-88   6:17p
    DBSCAN   DOC      5925   2-03-88   2:27p
    DBSCAN   EXE    131804   2-01-88   6:02p
    FILE2098 TXT      1629   3-23-90   3:07p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       859   1-01-80   7:19a
            6 file(s)     158385 bytes
                               0 bytes free
