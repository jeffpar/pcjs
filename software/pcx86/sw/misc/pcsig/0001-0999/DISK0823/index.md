---
layout: page
title: "PC-SIG Diskette Library (Disk #823)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0823/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0823"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "INTERACTIVE MATRIX CALCULATOR"

    Data collection for statistical analysis is made easier with MATRIX
    CALCULATOR.  Twenty matrix areas, numbered from 1 to 20, can store 150
    elements each.  Since the matrices are in contiguous blocks, the
    capacities may be enlarged by, for instance, using every other matrix.
    This strategy results in 10 matrices with a capacity of 300 each.  One
    operation at a time is performed; i.e., only one multiplication, one
    addition, etc.  Results may be displayed at any time using the Print
    command.
    
    The idea of the INTERACTIVE REGRESSION program is that the researcher
    knows his data best.  Rather than provide canned variable selection
    routines, the researcher is prompted for the next step each time the
    model changes due to the addition or deletion of a variable.  At any
    particular step, variables that are in the equation may be deleted, or
    variables which are not in the equation may be added.  No provision is
    made for residual analysis since no data is stored.  This is a serious
    limitation of the program in terms of modern regression analysis
    procedures.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES823.TXT

{% raw %}
```
Disk No  823
Program Title: INTERACTIVE MATRIX CALCULATOR, INTERACTIVE REGRESSION ver 2
PC-SIG version 1
 
    MATRIX CALCULATOR operates on 20 matrix areas, numbered from 1 through
20. Each matrix may store 150 elements, the product of the number of rows
with the number of columns. Since the matrices are stored in contiguous
blocks, if only every other matrix, say numbers 1,3,5, etc., are used, then
up to 300 elements per matrix may be stored. Storage of 450 elements per
matrix is possible if only areas 1,4,7, etc. are used, 600 elements if only
1,5, etc. are used, and so on. Since the program makes no boundary checks,
the 151st element of a matrix will be placed into the first position of the
next matrix. Only one operation at a time is performed; i.e., only one
multiplication, one addition, etc. Results may be displayed at any time
using the Print command. The storage limit of 20 matrices may be extended
by using the disk for additional storage and retrieval.
 
    The idea of INTERACTIVE REGRESSION is that the researcher knows his
data best. Rather than provide canned variable selection routines, the
researcher is prompted for the next step each time the model changes due to
the addition or deletion of a variable. At any particular step, variables
that are in the equation may be deleted, or variables which are not in the
equation may be added. No provision is made for residual analysis since no
data is stored. This is a serious limitation of the program in terms of
modern regression analysis procedures. The program is invoked by giving the
command STEPREG and then reading the opening screen which follows. An
annotated example of the interactive analysis of the Hald data is then
presented. Explanatory notes are set apart by "******" borders.
 
Usage: Statistical Analysis
 
System Requirements: 128K of memory and one floppy drive.
 
How to Start: Type MATRIX (press enter). We suggest that you read the
documentation before running any program. In order to read the
documentation type: COPY *.DOC PRN (press enter).
 
Suggested Registration: $25.00
 
File Descriptions:
 
HALD     DAT  Hald data file for stepwise regression.
LONGLEY  DAT  Longley data file for stepwise regression.
MATRIX   DOC  Documentation for interactive matrix calculator.
MATRIX   EXE  Compiled version of interactive matrix calculator.
READ     ME   Introduction file.
STEPREG  DOC  Documentation for stepwise interactive regression program.
STEPREG  EXE  Compiled version of stepwise interactive regression program.
WAMPLER  DAT  Wampler data file for stepwise regression.
HALD     MTW  Hald data as a saved matrix worksheet.
 
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
║          <<<<  Disk #823 INTERACTIVE MATRIX CALCULATOR  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer type:                         ║
║                  COPY *.DOC PRN (press enter)                           ║
║                                                                         ║
║ To start the MATRIX CALCULATOR type, MATRIX  (press enter)              ║
║                                                                         ║
║ To start the STEPREG program type, STEPREG (press enter)                ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MATRIX.DOC

{% raw %}
```



                    Interactive Matrix Calculator

                      Version of 2 January 1987

                         Copyright (c) 1987

                                 by

                           David L. Turner
                     Mountain Home Software Co.
                       13360 N. Mt. Home Road     
                     Cove (Lewiston),Utah  84320
                         Phone (801)258-5164



  Provided as User Supported Software, to be freely copied for 
  noncomercial use.  The author reserves the right to distribute this 
  package or any part thereof, for profit.

  If you find this program useful, your voluntary contribution of $25, 
  or whatever you feel the program is worth, will provide updates, 
  further documentation and encouragement for production of similar 
  software.

  The program is written and compiled in Microsoft Basic.  It uses 
  double precision arithmetic for all storage and operations.  Due to a 
  limitation of Microsoft Basic, the program operates on only 20 matrix 
  areas, numbered from 1 through 20.  Each matrix may store 150 
  elements, the product of the number of rows with the number of 
  columns.  Since the matrices are stored in contiguous blocks, if every 
  other matrix, say numbers 1,3,5, etc. only, are used, then up to 300 
  elements per matrix may be stored.  Storage of 450 elements per matrix is 
  possible if only areas 1,4,7 etc. are used, 600 elements if only 1,5, 
  etc. are used, etc.  Since the program makes no boundary checks, the 
  151st element of a matrix will be placed into the first position of 
  the next matrix.  

  Only one Operation at a time is performed, i.e. only one 
  multiplication, one addition, etc.  Results may be displayed at any 
  time using the Print command.  The storage limit of 20 matrices may be 
  extended by using the disk for additional storage and retrieval.  

  Known limitations of the program are those inherent to Microsoft 
  Basic, i.e. limited array storage size, no recognition of path names 
  for files, etc.  The program has been in use in classroom and 
  consulting work for several years, so most of the major bugs have been 
  taken care of.  Registered users will be notified of major updates and 
  new releases.  Problem reports are encouraged as are suggestions for 
  enhancements.

  The program is invoked from the MS-DOS prompt by giving the command 
  MATRIX.  This displays the opening screen, which lists the version, 
  the author and the following menu:









  Interactive Matrix Calculator Documentation              Page 2


  Valid Commands are:
     + or A to Add matrices
     C to do Cholesky (Square root) decomposition
     D to Duplicate (copy) from one area to another
     E for Elementary operations loop
     F to Fix a single element
     G to get Part of a matrix (copy part to another)
     I to calculate the Inverse using sweep operator (Gaussian eliminition)
     J to Join two matrices together
     K to Keep or retrive a worksheet to or from disk
     ?, L or H for Help or to List the menu
     * or M to Multiply matrices
     N to print or read a 'nice' matrix
     P to Print a matrix to screen or disk
     Q or X to Quit or Exit
     R to Read in a matrix from keyboard or disk
     - to Subtract matrices
     S to Sweep a matrix
     T to calculate Trace and/or sum of all elements of a matrix
     ' to Transpose a matrix
     Z to change Epsilon or change values < epsilon to 0

  READY

  Execution of each command is begun immediately after the appropriate 
  letter is touched.  The program prompts the user for additional 
  required input.  A brief alphabetical listing and discussion of each 
  command follows.


  ADD OR + COMMAND

  The program asks for indices for the left, right and answer or 
  destination matrices.  The example below adds Matrix 1 on the left and 
  Matrix 2 on the right, putting the answer into Matrix 3.

  READY
  A                                                        
  To Add (left or first) matrix +  (second or right) matrix
  into (destination) matrix, Enter numbers for             
  left, right and destination matrices: 1 2 3
  Matrix  3  = Matrix  1  + Matrix  2


  CHOLESKY COMMAND

  For a nonnegative (positive definite or positive semidefinite) matrix 
  A, the Cholesky or  square root decomposition finds an upper 
  triangular matrix T such that T'T = A.  If a nonsquare matrix (A,B), 
  is input to this routine, then A is still assumed to be a nonnegative 
  matrix.  For such nonsquare matrices, the Cholesky decomposition 
  leaves the T matrix in the first k rows and columns and the product 
  (T'inverse)B in place of the B matrix.  This is a very useful 
  procedure in statistical modeling.  

  If the following matrix is in area 3,

  Row #  1 :   1 ,   2 ,   3 ,
  Row #  2 :   2 ,   20 ,   26 ,




  Interactive Matrix Calculator Documentation              Page 3


  then the Cholesky command execution is begun by touching the C key at 
  the READY prompt.  The program then asks for the number of the 
  original matrix, the matrix to be "square rooted," and a number for 
  the result.  Again it is a good idea to print the resulting 
  "Choleskied" matrix.  To be certain of the output, calculation and 
  examination of T'T is also recommended.

  READY
  C                                                                          
  Cholesky or square root decomposition routine                              
  Enter number of matrix to square root and number of matrix for result:  3 4
  Matrix  4 contains the 'square root' of Matrix 3

  This produces the following matrix in area 4:

  Row #  1 :   1 ,   2 ,   3 ,
  Row #  2 :   0 ,   4 ,   5 ,


  DUPLICATE OR COPY COMMAND

  Sometimes it is useful to operate on a copy of a matrix rather than 
  the original matrix.  To Duplicate or copy a matrix, touch the D key 
  at the READY prompt.  Then enter the number of the original matrix and 
  the number for the copy or duplicate.

  READY
  D
  Matrix Duplication or Copy routine                
  Enter numbers for original and copy matrices:  1 2
  Matrix 2 is a copy or duplicate of Matrix 1


  ELEMENTARY OPERATIONS COMMAND

  This command lets the user perform elementary row operations such as 
  interchanging 2 rows, multiplying or dividing a row by a constant or 
  adding a multiple of a row to another row.   

  If a matrix A is augmented by an appropriate sized identity, and then 
  elementary row operations are performed on the augmented matrix (A,I) 
  until the matrix looks like (I,B), then B will be the inverse of A.  
  If the original A matrix cannot be reduced to an identity, coming as 
  close as possible will make B a generalized inverse of A.

  For the example below, the matrix (1 2/2 5) is augmented with a 2 x 2 
  identity matrix and this 2 x 4 matrix is then loaded into matrix area 
  1.  To start the Elemenrary row operations, press the E key at the 
  READY prompt and then follow the instructions.

  For this simple example, the first row is multiplied by -2 and added 
  to the second row.  After printing this intermediate result, it is 
  easy to see that the second row must be multiplied by -2 and added to 
  the first row.  This makes an identity matrix where the A matrix 
  started and consequently contains the inverse of A where the identity 
  started.  This inverse may then be extracted from this augmented 
  matrix using the Get command.

  READY
  E



  Interactive Matrix Calculator Documentation              Page 4


  Routine to do elementary row operations
  Enter number of matrix to work on:  ? 1

     C followed by numbers of rows to interchange

     Enter M or * (D or /) followed by first row#, scalar, second row#
     to Multiply(Divide) first row by scalar and add to second row

     If second row# is omitted, row will be multiplied by scalar

     P will print the matrix

     L or H to print menu (list) of elementary commands

     <CR> will return to main menu (terminate elementary operations)

  Enter operator:  M 1 -2 2
  Row # 1  has been multiplied by -2  and added to row # 2

  Enter operator:  P

  Row #  1 :   1 ,   2 ,   1 ,   0 ,
  Row #  2 :   0 ,   1 ,  -2 ,   1 ,

  Enter operator:  M 2 -2 1
  Row # 2  has been multiplied by -2  and added to row # 1

  Enter operator:  P

  Row #  1 :   1 ,   0 ,   5 ,  -2 ,
  Row #  2 :   0 ,   1 ,  -2 ,   1 ,
  Enter operator: <cr>


  FIX COMMAND

  Since few typists or data entry personnel are perfect, a command is 
  provided to fix a single element in any of the matrices.  To Fix a 
  matrix, touch the F key at the READY prompt and follow the 
  instructions.  The example below makes the element in row 1 and column 
  3 of matrix 1 equal to 33.  It is a good idea to print the matrix 
  after changing an element to confirm that the change has taken place.

  READY
  F
  Matrix Fixing routine                             
  Enter matrix number, row no. and column no.       
  of element to fix and the correct value:  1 1 3 33
  The element in row  1 and column  1 of Matrix  3 has been changed to 33


  GET COMMAND

  Sometimes a matrix must be decomposed into some smaller pieces.  This 
  may be done with the Get command.  Columns and rows from one matrix 
  are copied into a second matrix.  If matrix 3 contains the product 
  (X,Y)'(X,Y), then Rows 1 and 2 and columns 1 and 2 contain the X'X 
  matrix.  Rows 1 and 2 of column 3 contain X'Y.  





  Interactive Matrix Calculator Documentation              Page 5


  To start the Get command, just touch the G key at the READY prompt and 
  follow the instructions.
  READY
  G
  Get part of a matrix                      
  Enter number of original and new matrices:  3 5

  Enter the number of rows for the new matrix:  ? 2

  Now enter  2  indices for the rows to be selected from old matrix
  to be put into the new matrix  1 2

  Now enter the number of columns for the new matrix  ? 1

  Now enter   1  indices for columns to be selected from the old matrix
  to be put into the new matrix  3
  Matrix  5 contains parts of Matrix 3

  READY
  P
  Enter number of matrix to print:
  or enter file name to write matrix to a disk file: 5

  Row #  1 :   6 ,   46 ,
  Row #  2 :   46 ,   462 ,


  INVERSE COMMAND

  Gaussian elimination or pivoting is the only explicit inverse routine 
  provided in this package.  Some very elementary checks are built in to 
  prevent division by zero or by a number "close" to zero.  The validity 
  of any inverse computed by this procedure should be checked by seeing 
  if the product of the orignial matrix and the supposed inverse is 
  "close" to an identity matrix.

  The X'X matrix Gotten in the Get example is inverted.  The procedure 
  is invoked by touching the I key at the READY prompt and then giving 
  the number of the matrix to invert and the number of the matrix for 
  storing the result.  The actual value of the pivoting element is 
  printed. The matrix must be swept or pivoted on each diagonal element.  
  In the example below, the answer is checked by multiplication.  Note 
  that this product matrix is "close" to an identity matrix.

  READY
  I
  Inversion using Sweep operator (Gaussian elimination)
  Enter index of matrix to invert and index for result:  4 6
  Sweeping element # 2   With diagonal value= 462
  Sweeping element # 1   With diagonal value= 1.4199134199134
  Matrix  6 = (Matrix  4)inverse

  READY
  M
  To Multiply (left or first) matrix * (second or right) matrix
  into (destination) matrix, enter numbers for                 
  left, right and destination matrices                         
  Or to multiply a matrix by a scalar enter M (or D to divide) 
  followed by matrix number and scalar: 4 6 7
  Matrix  7  = Matrix  4  * Matrix  6



  Interactive Matrix Calculator Documentation              Page 6


  READY
  P
  Matrix output routine                              
  Enter number of matrix to display or               
  enter a file name to write matrix to a disk file: 7

  Row #  1 :   .9999999999999999 ,  -6.938893903907228D-18 ,
  Row #  2 :  -8.881784197001252D-16 ,   1 ,


  JOIN COMMAND

  The Join command is used to augment or put together two matrices.  To 
  Join 2 matrices together, touch the J key at the READY prompt and 
  follow the instructions.  Again it is a good idea to print the 
  resulting joined or augmented matrix.   For vertical augmentation, 
  work with transposes and then transpose the final augmented matrix.

  READY
  J
  Matrix Joining or augmentation routine                     
  Enter numbers for left, right and augmented matrices: 2 2 3
  Matrix  3 = (Matrix 2, Matrix 2)


  KEEP AND RETRIEVE COMMANDS

  To save or retrieve all the matrices for a particular worksheet, the 
  Keep command is used.  It dumps or retrieves all the matrices to or 
  from a file, allowing the user to save all of the current matrices or 
  to retrieve all of the matrices used in a previously saved worksheet.

  Touching the K key at the READY prompt causes the program to prompt 
  the user for more information.  To save the current worksheet type S 
  followed by a file name.  To retrieve a previously saved worksheet, 
  type R followed by the name of the file to be retrieved.  

  The Save operation creates a file whose first 2 records describe what 
  the file is.  The next record tells the overall size of the worksheet,  
  the number of matrices available and the number of elements for each 
  one.  Then comes information about each matrix:  the matrix number, 
  the number of rows and the number of columns followed by the elements 
  of the matrix in rowwise order.

  When retrieving a saved worksheet, the program lists the matrix number 
  and size for each matrix as it is retrieved.  An example of both 
  saving and the later retrieval of a worksheet is given below.

  READY
  K
  Worksheet Save/Retrieve routine
  Enter S to Save a worksheet
        R to Retrieve or Reload a worksheet: S
  Enter name of file to be Saved or Retrieved: try.sav
  Saving the matrix worksheet into a file named try.sav
   2  x  2  Matrix  1  in the worksheet stored in file try.sav
   2  x  2  Matrix  2  in the worksheet stored in file try.sav
   2  x  4  Matrix  3  in the worksheet stored in file try.sav





  Interactive Matrix Calculator Documentation              Page 7


  READY
  K
  Worksheet Save/Retrieve routine
  Enter S to Save a worksheet
        R to Retrieve or Reload a worksheet: R
  Enter name of file to be Saved or Retrieved: try.sav
  Retrieving a worksheet from the file named try.sav
  Beginning to load a matrix into area # 1
  Matrix area number  1  has been successfully loaded with a  2  x  2  matrix

  Beginning to load a matrix into area # 2
  Matrix area number  2  has been successfully loaded with a  2  x  2  matrix

  Beginning to load a matrix into area # 3
  Matrix area number  3  has been successfully loaded with a  2  x  4  matrix


  ?, HELP or LIST COMMAND

  Very limited help is provided in this program, i.e. the list of valid 
  commands is printed whenever a ?,H or L key is touched at the READY 
  prompt.


  MULTIPLY COMMAND

  Two matrices may be multiplied together only if they are conformable for 
  multiplication.  This means that the number of columns in the left or 
  first matrix must be the same as the number of rows in the right or 
  second matrix.  The program does not make any checks for conformability, 
  so the user must be careful, and printing of each of the component 
  matrices and the product matrix is recommended.  As an example, the 
  product M2*M1 is computed below and placed into matrix area number 3.

  READY
  M
  To Multiply (left or first) matrix * (second or right) matrix
  into (destination) matrix, enter numbers for                 
  left, right and destination matrices                         
  Or to multiply a matrix by a scalar enter M (or D to divide) 
  followed by matrix number and scalar: 2 1 3                  
  Matrix  3  = Matrix  2  * Matrix  1

  This command may also be used for performing scalar multiplication or 
  division where each element of a matrix is to be multplied or divided 
  by a scalar.

  READY                                                       
  M
  To Multiply (left or first) matrix * (second or right) matrix
  into (destination) matrix, enter numbers for                
  left, right and destination matrices                        
  Or to multiply a matrix by a scalar enter M (or D to divide)
  followed by matrix number and scalar: M 1 3                 
  Every element in matrix number  1  has been multiplied by  3

  READY                                                       
  M
  To Multiply (left or first) matrix * (second or right) matrix
  into (destination) matrix, enter numbers for                



  Interactive Matrix Calculator Documentation              Page 8


  left, right and destination matrices                        
  Or to multiply a matrix by a scalar enter M (or D to divide)
  followed by matrix number and scalar: D 1 2
  Every element in matrix number  1  has been multiplied by  .5


  NICE PRINT/READ COMMAND

  Microsoft Basic has very primitive output formatting capacities, but 
  some nicer formatting is possible.  This command functions just about 
  like the Print command.  To print a matrix in a "nice" format, touch 
  the N key, then the P key and then specify the matrix to print.  The 
  matrix is then printed in scientific notation.  For example, 
  -.7012195122D-01 translates as -.7012195122 times 10 to the -1 power, 
  or -0.07012195122 for the final answer.

  READY
  N
  For a 'nice' printout enter 'P'                                 
  To input a 'nice' (i.e. rectangular) matrix, enter 'R': P
  Matrix output routine                              
  Enter number of matrix to display or               
  enter a file name to write matrix to a disk file: 4

  Row #  1 :  0.7042682927D+00,  -.7012195122D-01,  0.4975609756D+01,
  Row #  2 :  -.7012195122D-01,  0.9146341463D-02,  0.8292682927D+00,
  Row #  3 :  -.4975609756D+01,  -.8292682927D+00,  0.1214634146D+02,

  The Nice command may also be used to read in rectangular matrices or 
  data from a previously prepared disk file.  For example, if the matrix 
  (1 2 3/4 5 6) is stored in a file named TRY.IT which contains 2 
  records, one for each row, then this file may be read into a matrix 
  area using the  Nice Read command.  Note that the 2 values for number 
  of rows and number of columns must be separated by a comma for this 
  routine.

  READY
  N
  For a 'nice' printout enter 'P'                              
  To input a 'nice' (i.e. square) matrix, enter 'R': R
  Enter name of previously saved file to read from disk: try.it
  Reading a matrix from a previously saved file try.it         
  Enter the number of the area to read matrix into ? 1         
  Enter number of rows and columns for the matrix: ? 2 3       
  ?Redo from start                                             
  ? 2,3                                                        
   2 x 3 matrix from file try.it read into Matrix 1
                                                               
  READY                                                        
  P
  Matrix output routine                                        
  Enter number of matrix to display or                         
  enter a file name to write matrix to a disk file: 2          
                                                               
  Row #  1 :   1 ,   2 ,   3 ,                                 
  Row #  2 :   4 ,   5 ,   6 ,                                 







  Interactive Matrix Calculator Documentation              Page 9


  PRINT COMMAND

  To see the results of any command, the Print command must be used.  
  The program prompts for and prints only one matrix at a time.  Any 
  matrix may also be printed to disk, expanding the storage capacity of 
  the program.  An example of disk storage for an individual matrix is 
  provided below.  The example below is started by touching the P key at 
  the READY prompt and then entering 2 as the number of the matrix to be 
  printed.

  READY
  P
  Matrix output routine                              
  Enter number of matrix to display or               
  enter a file name to write matrix to a disk file: 1


  PRINT TO DISK COMMAND

  While only 20 matrices are available for internal storage, matrices 
  may be written to disk files, one file per matrix.  To create a disk 
  file for any matrix, simply touch the P key at the READY prompt and 
  then enter a file name rather than a matrix number.  The program will 
  then prompt for the number of the matrix to be written to the disk 
  file.  For example, to create a file which contains the matrix stored 
  in area number 1, give the file name EXAMPLE.MAT when prompted for the 
  matrix number.

  READY
  P
  Matrix output routine                                        
  Enter number of matrix to display or                         
  enter a file name to write matrix to a disk file: example.mat
  Number of Matrix to write to disk: ? 1                       
  Matrix  1 written to the file example.mat


  QUIT, EXIT OR STOP COMMAND

  Although a control-C or control-Break command will kill the program, 
  the Q or X command will cause a "graceful" exit from the program.  
  Touching the Q or X key at the READY prompt causes the program to 
  terminate.


  READ COMMAND

  Before any operations may be performed, something must be read into 
  the matrix worksheet to operate on.  To read a matrix in, the Read 
  command is used.  The program then asks for the number of the matrix 
  to read data into, and then the number of rows and columns to be read 
  in.  The program then prompts for the entries for each row.  The 
  numbers for each row must then be entered separated by commas or 
  blanks.

  For example, to read a 2 row by 3 column matrix into area 1, start by 
  touching the R key at the READY prompt, and then following the 
  instructions.  The first line indicates that the matrix is to be read 
  into area 1 and that it will contain 2 rows and 3 columns.  The 
  elements for the first row are then entered, followed by the elements 
  for the second row.


  Interactive Matrix Calculator Documentation              Page 10




  READY
  R
  Matrix Read or Input Routine                              
  Enter matrix number, no. rows and no. columns or enter a  
  file name to read a previously saved file from disk: 1 2 3
  Input row #  1 :  1 2,3
  1 2,3
  Input row #  2 :  4,5,1
  4,5,1


  READ FROM DISK COMMAND

  To read a matrix back into a matrix area, give the file name when 
  prompted for a matrix number.  The example below reloads the matrix 
  saved previously in the file EXAMPLE.MAT.

  READY                                                             
  R
  Matrix Read or Input Routine                                      
  Enter matrix number, no. rows and no. columns or enter a          
  Enter name of previously saved file to read from disk: example.mat
  Reading a matrix from a previously saved file example.mat         
  Enter the number of the area to read matrix into ? 2              
   2 x 4 matrix read from the file example.mat into Matrix 2


  SUBTRACT OR - COMMAND

  The Subtract command works just like the addition command except that 
  the right or second matrix is subtracted from the left or first 
  matrix.  For example,

  READY
  -                                                             
  To Subtract (left or first) matrix -  (second or right) matrix
  into (destination) matrix, Enter numbers for                  
  left, right and destination matrices: 1 2 3                   
  Matrix 3 = Matrix 1 - Matrix 2


  SWEEP COMMAND

  The sweep command may be used in finding inverses of "nice" matrices.  
  It performs Gaussian elimination one step at a time.  It is a very 
  convenient method of performing multiple regression analysis 
  computations especially when any variable selection is to be done.  
  The matrix listed below contains the product (X,Y)'(X,Y) = X'X  X'Y
                                                             Y'X  Y'Y
  The X matrix contains the X or independent variables to be used in 
  predicting the Y variable.  After sweeping one or more variables into 
  the equation, the column which originally contained X'Y will contain 
  the regression coefficients for those variables in the equation.  The 
  single element corresponding to the Y'Y element in the initial or 
  original matrix will contain the error sum of squares for the model 
  containing the swept variables.  

  One nice feature of the sweep operator is that it is reversible. This 
  means that if a variable is swept twice, the second sweep removes the 


  Interactive Matrix Calculator Documentation              Page 11


  variable from the equation.  This procedure is widely used in stepwise 
  regression programs.  

  Generally the first column and row corresponds to an X variable which 
  is equal to 1 for each observation to put the intercept into the 
  equation.  The second, third, etc. columns correspond to the first, 
  second, etc. variables available for the equation.  The last row and 
  column corresponds to the Y variables.

  In the example below, the intercept is first "swept" into a 1 variable 
  equation which also has an intercept.  This gives corrected sums of 
  squares and crossproducts for the second and third columns and rows of 
  this matrix.  The second sweep operation gives the (X'X) inverse, the 
  vector of regression coefficients and the error sum of squares.  The 
  initial, unswept matrix is

  Row #  1 :   6 ,   46 ,   68 ,
  Row #  2 :   46 ,   462 ,   612 ,
  Row #  3 :   68 ,   612 ,   858 ,

  READY
  S
  Sweep Operator                               
  Enter matrix and element number to sweep: 4 1
  Matrix  4 has been swept on element  1

  READY
  S
  Sweep Operator                               
  Enter matrix and element number to sweep: 4 2
  Matrix  4 has been swept on element  2

  READY
  P
  Matrix output routine                            
  Enter number of matrix to display or             
  enter a file name to write matrix to a disk file: 4

  Row #  1 :   .1666666666666667 ,   7.666666666666667 ,   11.33333333333333 ,
  Row #  2 :  -7.666666666666667 ,   109.3333333333333 ,   90.66666666666667 ,
  Row #  3 :  -11.33333333333333 ,   90.66666666666667 ,   87.33333333333333 ,


  TRACE COMMAND

  Sometimes the sum of the diagonal elements, the trace of a matrix, is 
  needed.  This is done with the Trace Command which is started by 
  touching the T key at the READY prompt.  This causes the program to 
  prompt the user for a matrix number.  The sum of all the elements and 
  the sum of the diagonal elements is then computed and printed.

  READY
  T
  Matrix Trace and sum routine                          
  Enter number of matrix whose elements are to be summed
  or whose trace is to be found if matrix is square: ? 2
  Sum of all elements in matrix area # 2  is  2         
  Trace of matrix area # 2  is  2                       





  Interactive Matrix Calculator Documentation              Page 12


  TRANSPOSE COMMAND

  The Transpose command interchanges rows and columns, for example 
  changing the ith row into the ith column.  If a(ij) represents the 
  element in the ith row and jth column of the original matrix A, then it 
  will become the element in the jth row and ith column of A', the 
  transpose.  If the original matrix has m rows and n columns, then the 
  transpose will have n rows and m columns.  Again, it is a good idea to 
  print the transposed matrix.  Execution begins by touching the ' key 
  and then entering the numbers for the origninal and transpose 
  matrices.

  READY
  '                                                                     
  Transpose routine                                                     
  Enter number of matrix to transpose and matrix number for result:  1 2
  Matrix  2 = Matrix  1'


  FUZZ COMMAND

  Sometimes values that should be zero turn out "close" to zero.  For 
  example, -8.88 times 10 to the minus 16 is "close" to zero.  The Fuzz 
  routine goes through and compares each element of a matrix with an 
  "Epsilon" value, changing those which are smaller in absolute value 
  than Epsilon to zero.  The first part of the Fuzz command allows the 
  user to change the value of Epsilon.  The second part allows a 
  particular matrix to be "defuzzed."

  The product of a matrix with its diagonal should be an identity 
  matrix, but often the off-diagonal elements are close but not quite 
  equal to zero.  Touching the "Z" key at the READY prompt starts the 
  Fuzz procedure.  For the example below, a matrix is defuzzed and then 
  printed.  Note that the first element should be 1, but is instead 
  "close" to one.  The fuzz routine changes only values that are "close" 
  to zero. 

  READY
  Z
  Matrix defuZzing routine                                                 
  Epsilon is currently  1.000000013351432D-10                              
  Enter a new value to change, or hit <CR> to leave:                       
                                                                           
  To defuZz or convert absolute values <  1.000000013351432D-10  to zeroes,
  Enter matrix area number.  <CR> Otherwise: 2                             
                                                                           
  Values in matrix area # 2  which were less than                          
   1.000000013351432D-10  have been changed to zeroes                      
  p                                                  
  Matrix output routine                              
  Enter number of matrix to display or               
  enter a file name to write matrix to a disk file: 2

  Row #  1 :   .9999999999999999 ,   0 ,
  Row #  2 :   0 ,   1 ,
```
{% endraw %}

## STEPREG.DOC

{% raw %}
```



                     Stepwise Interactive Regression

                        Version of 2 January 1987

                            Copyright (c) 1987

                                    by

                             David L. Turner
                        Mountain Home Software Co.
                          13360 N. Mt. Home Road     
                       Cove (Lewiston),Utah  84320
                           Phone (801)258-5164



  Provided as User Supported Software, to be freely copied for 
  noncomercial use.  The author reserves the right to distribute this 
  package or any part thereof, for profit.

  If you find this program useful, your voluntary contribution of $25, 
  or whatever you feel the program is worth, will provide updates, 
  further documentation and encouragement for production of similar 
  software.

  This program is written in Microsoft Basic using double precision 
  storage and calculation routines.  An updating algorithm is used wo 
  increase the accuracy for computing the corrected or deviations sum of 
  squares and products matrix.  Observations may be added or deleted at 
  almost any time, and variables may be put into or taken out of the 
  equation at will.

  The idea of interactive regression is that the researcher knows his 
  data best.  Rather than provide canned variable selection routines, 
  the researcher is prompted for the next step each time the model 
  changes due to the addition or deletion of a variable.  At any 
  particular step, variables that are in the equation may be deleted or 
  variables which are not in the equation may be added.  

  No provision is made for residual analysis since no data is stored.  
  This is a serious limitation of the program in terms of modern 
  regression analysis procedures.  Perhaps in a future release...

  The program is invoked by giving the command STEPREG and then reading 
  the opening screen which follows.  An annotated example of the 
  interactive analysis of the Hald data is then presented.  Explanatory 
  notes are set apart by "******" borders.  

  The annotated output begins with the first question which follows the 
  opening screen.  The Hald data contains 5 variables, the fifth of 
  which is the Y or dependent variable.  Since the intercept is desired, 
  the carriage return is pressed in response to the second question.  
  The list of data entry commands is then printed.  Although data may be 
  entered from the keyboard, it is more convenient to read the data from 
  a prepared file.  The Hald data file is included at the end of this 
  documentation, and a few of the echoed data entry lines are listed.

  The Hald data, The Longley data and the Wampler data are included for 
  validation purposes.  The Hald data is used for the example below.  
  The Longley data contains 7 variables, the first of which is the Y or 



  Stepwise Interactive Regression Documentation                Page 2


  dependent variable.  It is used as a kind of benchmark data set since 
  many multiple regression programs do very poorly in estimating the 
  coefficients.  The Wampler data is an exact fit data set.  Variable X1 
  is simply the integers from 0 to 20.  Variables X2, X3, X4 and X5 are 
  computed by raising X1 to the 1st, 2nd, etc. power.  The sixth 
  variable is then taken as the Y variable.  It is computed as 
  1+X1+X2+X3+X4+X5.  Since there is no error in the data, and since each 
  regression coefficient is equal to 1, this provides a rather severe 
  test for any multiple regression program.
  ************************************************************************

  Enter number of original variables (X's AND Y's) <= 50: ? 5

  Press 'Y' to ELIMINATE intercept
  (Press any other key to include intercept) <cr>

  Intercept will be included by default
  Enter:
      X and Y values separated by blanks or commas
        to accumulate data

      'D' followed by values separated by blanks or commas to DELETE data

      'F' to read the data from disk FILE
      'L' to LIST the menu (this display)
      'M' to see the current MEANS (for data entered)
      'P' to 'toggle' the OUTPUT FILE on if off, off if on
      'Q' to QUIT
      'R' to start the REGRESSION module
      'S' to see the current corrected (deviations) SS and SP matrix
      'W' to capture or WRITE entered (and deleted) data to a disk file

  Ready for entry: f
  Enter file name:  hald.dat
  7 26 6 60 78.5
   1  Observations on  5  variables now included

  1 29 15 52 74.3
   2  Observations on  5  variables now included 
   . . .

   10 68 8 12 109.4
    13  Observations on  5  variables now included
   End of file encountered

  ************************************************************************
  At this point further data could be entered or an observation 
  could be deleted.  The current means or the current corrected sum 
  of squares and cross products matrix could also be printed.  
  Since all the data is entered, the example moves to the regress 
  module.  It is only at this point that the program needs to know 
  which variable is to be treated as the Y variable.
  ************************************************************************

   Ready for entry: r

   Now for regression--Of the  5  variables
   Enter the index of the variable to be used as Y:  ? 5





  Stepwise Interactive Regression Documentation                Page 3


   Enter
       Index of X variable to be added if out or deleted if in equation
       'C' to CHANGE the Y or dependent variable, add or delete data
           (Returns you to the data accumulation routine)
       'H' to calculate Y HAT values and their standard errors
       'I' to see the current INVERSE of the deviations matrix
       'L' to LIST the menu (repeat this display)
       'M' to see the current means
       'P' to 'toggle' the OUTPUT FILE on if off, off if on
       'Q' to QUIT
       'R' to REPEAT the current regression statistics
       'S' to print the current SWEPT matrix

   Press any key to continue

   For variables NOT in the equation for predicting variable # 5

   Var #    Partial Correlations                   t to enter
   --------------------------------------------------------------------
    1          .7307174719650772                    3.550002487954228
    2          .8162525697560126                    4.686214313510981
    3         -.5346706754908218                   -2.098431996337176
    4         -.8213050372009229                   -4.774779597152342
   --------------------------------------------------------------------
   Index= 4

  ************************************************************************
  The variable with the highest partial correlation (in absolute value) 
  is by definition the most important single variable that can be used 
  to predict variable 5, the dependent variable.  Note that 
  multiple variables could be added or deleted at any step by 
  entering more than 1 index or variable number in response to the 
  Index= prompt.

  For this example, the regression equation using only variable 4 
  to predict variable 5 is then formed.  An analysis of variance 
  table is printed followed by a table which summarizes the 
  regression equation.  

  Next comes a table which summarizes the importance of variables not 
  yet in the equation.  The correlations in this table are computed from 
  different sets of residuals.  The X4 variable is used to predict the Y 
  variable, variable 5, and it is also used to predict each of variables 
  X1, X2 and X3.  Residuals from each of these equations are then 
  computed and correlations are computed.  The most important of these 
  variables is seen to be X1.

  Variables 1 and 2 are then added to the equation.
  ************************************************************************

   Variable number  4  ADDED TO the equation for predicting variable # 5
            Analysis of Variance Table
   Source  df    Mean Square              F
   --------------------------------------------------------------------
   Total   12  2715.763076923077 /( 13 - 1 )
   Model   1      1831.896160023795        22.79852020138228
   Change  1      1831.896160023795        22.79852020138228
   Error   11     80.3515378999347
   --------------------------------------------------------------------
   R squared= .6745419641316094



  Stepwise Interactive Regression Documentation                Page 4


   Press any key to continue
   For variables IN the equation for predicting variable # 5
   Var #  Coefft          Std Error                      t
   --------------------------------------------------------------------
   Bo  117.5679311764975       5.262206511260616          22.34194551751503
    4 -.7381618084473527       .1545959961979374         -4.774779597152342
   --------------------------------------------------------------------
   Press any key to continue

   For variables NOT in the equation for predicting variable # 5
   Var #    Partial Correlations                   t to enter
   --------------------------------------------------------------------
    1          .9567730874777045                    10.40307211023475
    2          .1302149394018742                    .4153118466324249
    3         -.8950817946937817                   -6.347801208486072
   --------------------------------------------------------------------
  Index= 1

  Variable number  1  ADDED TO the equation for predicting variable # 5
           Analysis of Variance Table
  Source  df    Mean Square              F
  --------------------------------------------------------------------
  Total   12  2715.763076923077 /( 13 - 1 )
  Model   2      1320.500482383171        176.6269630818882
  Change  1      809.1048047425461        108.223909330744
  Error   10     7.476211215673551
  --------------------------------------------------------------------
  R squared= .9724710477169312
  Press any key to continue

  For variables IN the equation for predicting variable # 5
  Var #  Coefft          Std Error                      t
  --------------------------------------------------------------------
  Bo  103.0973816366747       2.123983606303393          48.53963153515418
   1  1.439958284998877       .1384166397906843          10.40307211023475
   4 -.6139536280042611       4.864455238558516D-02     -12.62122062790723
  --------------------------------------------------------------------
  Press any key to continue

  For variables NOT in the equation for predicting variable # 5
  Var #    Partial Correlations                   t to enter
  --------------------------------------------------------------------
   2          .5986053202773389                    2.241844028685262
   3         -.5657104726674511                   -2.058117032457405
  --------------------------------------------------------------------
  Index= 2
  Variable number  2  ADDED TO the equation for predicting variable # 5
           Analysis of Variance Table
  Source  df    Mean Square              F
  --------------------------------------------------------------------
  Total   12  2715.763076923077 /( 13 - 1 )
  Model   3      889.2634491742299        166.8316800524482
  Change  1      26.78938275634833        5.025864648951764
  Error   9      5.330303266709687
  --------------------------------------------------------------------
  R squared= .9823354512004266
  Press any key to continue






  Stepwise Interactive Regression Documentation                Page 5


  For variables IN the equation for predicting variable # 5
  Var #  Coefft          Std Error                      t
  --------------------------------------------------------------------
  Bo  71.64830697443485       14.14239348479434          5.066207997357015
   1  1.451937963027803       .1169975949681935          12.40998127715806
   2  .4161097619469194       .1856104870020546          2.241844028685262
   4 -.2365402155387731       .1732877949911987         -1.36501370769238
  --------------------------------------------------------------------
  Press any key to continue


  For variables NOT in the equation for predicting variable # 5
  Var #    Partial Correlations                   t to enter
  --------------------------------------------------------------------
   3          4.768648989047328D-02                .1350313796394636
  --------------------------------------------------------------------
  Index= 4

  ************************************************************************
  From the regression statistics table, variable X4 is no longer 
  significant.  It is therefore deleted from the equation.  This results 
  in an equation with X1 and X2 which are both significant variables.  
  Both the X3 and X4 variables are not significant, and hence are not 
  put into the equation.
  ************************************************************************

  Variable number  4  DELETED FROM the equation for predicting variable # 5
           Analysis of Variance Table
  Source  df    Mean Square              F
  --------------------------------------------------------------------
  Total   12  2715.763076923077 /( 13 - 1 )
  Model   2      1328.929296873482        229.5036971198939
  Error   10     5.790448317611381
  --------------------------------------------------------------------
  R squared= .9786783745356319
  Press any key to continue

  For variables IN the equation for predicting variable # 5

  Var #  Coefft          Std Error                      t
  --------------------------------------------------------------------
  Bo  52.57734888208951       2.286174334503356          22.99796130530496
   1  1.468305742215554       .1213009236062667          12.10465426447666
   2  .6622504912746448       4.585472146852283D-02      14.44236209632741
  --------------------------------------------------------------------
  Press any key to continue

  For variables NOT in the equation for predicting variable # 5
  Var #    Partial Correlations                   t to enter
  --------------------------------------------------------------------
   3          .4112643386462967                    1.35356137304088
   4         -.4141492481087618                   -1.36501370769238
  --------------------------------------------------------------------
  Index= i


  ************************************************************************
  The inverse that is printed is the inverse of the deviations X'X 
  matrix.  This is for the model (Y-Ybar) = 1.4683(X1-X1bar) + 
  0.66225(X2-X2bar).  Note that the intercept may be computed by 



  Stepwise Interactive Regression Documentation                Page 6


  expanding this equation and collecting terms.  The terms printed begin 
  with the diagonal elements and then all terms to the right.
  ************************************************************************

  After  13 observations on  5  variables have been accumulated

  The upper triangular portion of the inverse of the deviations matrix
  (from diagonal element over) is:

  Row#  1 :   2.54106647027341D-03 , -2.195701000416268D-04 ,

  Row#  2 :   3.631248161840386D-04 ,

  ************************************************************************
  The program may compute predicted values, Yhats, at any stage.  Values 
  for each of the possible X variables must be entered.  Zeroes are 
  allowable for the variables not in the equation and for the dependent 
  variable.
  ************************************************************************

  Index= h
  Enter  5  values for prediction (you may enter 0's for the Y value
  and for X variables not in the equation)
  10 10 10 10 0
  Y hat (predicted value)= 73.8829112169915
  Estimated s.e.= 1.9614736440764
  Estimated s.e. for prediction= 3.104485009469

  ************************************************************************
  The entire 5 x 5 swept matrix may be printed.  Portions of this matrix 
  contain the regression coefficients, the inverse of the deviations 
  matrix for the current model, and the error sum of squares.  It, like 
  the inverse of the deviations matrix, is printed from the diagonal 
  over since it is a symmetric matrix.
  ************************************************************************

  Index= s
  After  13 observations on  5  variables have been accumulated

  The upper triangular portion of the swept or
  deviations matrix
  (from diagonal element over) is:

  Row#  1 :   2.54106647027341D-03 , -2.195701000416268D-04 , -.910273593493406 ,

  -6.919660215270187D-02 ,  1.468305742215554 ,

  Row#  2 :   3.631248161840386D-04 ,  2.134094904332283D-02 , -1.040587237003589

  ,  .6622504912746448 ,

  Row#  3 :   156.6798359843643 , -161.081516072343 ,  39.17271760782677 ,

  Row#  4 :   177.5071976478016 , -41.98759079129457 ,

  Row#  5 :   57.90448317611381 ,

  ************************************************************************
  If the data set contains more than one Y or dependent variable, or if 
  one or more data points are to be deleted, the C command resets the 
  X'X and X'Y matrices to their pre-regression state.  


  Stepwise Interactive Regression Documentation                Page 7

  To delete an observation, the exact values previously entered must be 
  entered after a D.  This updates the vector of sample means and the 
  corrected sum of squares and cross products matrix.  Since no data is 
  generally stored by the program, this is a problem.  From the printout 
  above, the first observation is deleted.  The mean vector is printed 
  before and after the data deletion, to indicate that something really 
  has happened.  This feature would be more useful if there were some 
  diagnostics which flagged "outlier" type observations.  Perhaps in the 
  next release... 
  ************************************************************************

  Index= c
  You may now add or delete data--you are back in the data accumulation routine
  Enter:
      X and Y values separated by blanks or commas
        to accumulate data

      'D' followed by values separated by blanks or commas to DELETE data

      'F' to read the data from disk FILE
      'L' to LIST the menu (this display)
      'M' to see the current MEANS (for data entered)
      'P' to 'toggle' the OUTPUT FILE on if off, off if on
      'Q' to QUIT
      'R' to start the REGRESSION module
      'S' to see the current corrected (deviations) SS and SP matrix
      'W' to capture or WRITE entered (and deleted) data to a disk file

  Ready for entry: m
  After  13 observations on  5  variables have been accumulated
  The means are:
  Var #    Mean
  -------------------------
     1      7.461538461538462
     2      48.15384615384615
     3      11.76923076923077
     4      30
     5      95.42307692307692
  -------------------------

  Ready for entry: D 7 26 6 60 78.5
  Values deleted are:
   7   26   6   60   78.5
   12  Observations on  5  variables now included

  Ready for entry: m
  After  12 observations on  5  variables have been accumulated
  The means are:
  Var #    Mean
  -------------------------
     1      7.5
     2      50
     3      12.25
     4      27.5
     5      96.83333333333333
  -------------------------
  ************************************************************************
  At this point more data could be added, and/or the regression 
  procedure could then be invoked to look at the relationship without 
  the deleted observation or with any additional data.  
  ************************************************************************



  Stepwise Interactive Regression Documentation                Page 8

  The Hald data file:
 7 26  6 60  78.5
 1 29 15 52  74.3
11 56  8 20 104.3
11 31  8 47  87.6
 7 52  6 33  95.9
11 55  9 22 109.2
 3 71 17  6 102.7
 1 31 22 44  72.5
 2 54 18 22  93.1
21 47  4 26 115.9
 1 40 23 34  83.8
11 66  9 12 113.3
10 68  8 12 109.4

The Longley data file:
60323  83.0 234289 2356 1590 107608 1947
61122  88.5 259426 2325 1456 108632 1948
60171  88.2 258054 3682 1616 109773 1949
61187  89.5 284599 3351 1650 110929 1950
63221  96.2 328975 2099 3099 112075 1951
63639  98.1 346999 1932 3594 113270 1952
64989  99.0 365385 1870 3547 115094 1953
63761 100.0 363112 3578 3350 116219 1954
66019 101.2 397469 2904 3048 117388 1955
67857 104.6 419180 2822 2857 118734 1956
68169 108.4 442769 2936 2798 120445 1957
66513 110.8 444546 4681 2637 121950 1958
68655 112.6 482704 3813 2552 123366 1959
69564 114.2 502601 3931 2514 125368 1960
69331 115.7 518173 4806 2572 127852 1961
70551 116.9 554894 4007 2827 130081 1962

 The Wampler data file:
 0   0    0      0       0       1
 1   1    1      1       1       6
 2   4    8     16      32      63
 3   9   27     81     243     364
 4  16   64    256    1024    1365
 5  25  125    625    3125    3906
 6  36  216   1296    7776    9331
 7  49  343   2401   16807   19608
 8  64  512   4096   32768   37449
 9  81  729   6561   59049   66430
10 100 1000  10000  100000  111111
11 121 1331  14641  161051  177156
12 144 1728  20736  248832  271453
13 169 2197  28561  371293  402234
14 196 2744  38416  537824  579195
15 225 3375  50625  759375  813616
16 256 4096  65536 1048576 1118481
17 289 4913  83521 1419857 1508598
18 324 5832 104976 1889568 2000719
19 361 6859 130321 2476099 2613660
20 400 8000 160000 3200000 3368421
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0823

     Volume in drive A has no label
     Directory of A:\

    FILES823 TXT      2792   9-21-87  10:21a
    GO       BAT        38   7-08-87  12:19a
    GO       TXT       771   9-16-87   2:47p
    HALD     DAT       256   1-05-87  12:22p
    HALD     MTW      8448   1-02-87   3:48p
    LONGLEY  DAT       768   1-05-87  12:30p
    MATRIX   DOC     30976   1-05-87   9:53a
    MATRIX   EXE     58112   1-05-87  10:06a
    READ     ME       2260   1-09-87  12:20p
    STEPREG  DOC     22016   1-05-87  12:30p
    STEPREG  EXE     45824   1-02-87   3:39p
    WAMPLER  DAT       768   1-05-87  12:30p
           12 file(s)     173029 bytes
                          143360 bytes free
