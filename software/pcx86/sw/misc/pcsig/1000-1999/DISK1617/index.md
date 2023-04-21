---
layout: page
title: "PC-SIG Diskette Library (Disk #1617)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1617/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1617"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DISAM"

    DISAN is a GW-BASIC programmer's answer to random access.  No block
    numbers to translate.  No hashing formulas.  Just pass the character key
    of the record and let DISAM do the work.  A resident file handler, DISAM
    handles variable length records up to 255 bytes.  Easy as:
    Open,filename; Get,Jim Jones; Close;.
    
    You can open up to five DISAM files at one time.  Assembler programs
    with record lengths in excess of 8K can also use DISAM.  With loads of
    documentation, DISAM includes test files and a test program with
    structured BASIC source code.  DISAM accesses records by assigned
    character key and will read records sequentially in ascending key order.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DISAM.DOC

{% raw %}
```

















                                   DISAM3

                  Dynamic Indexed Sequential Access Method

                                Version 3.5

                                Apr. 20, 1990

                                Written by:
                                Robert Pearce
                                2326 W. Cabana
                                Mesa, AZ. 85202
                                (602) 835-9189




                             LICENSE AGREEMENT


             The author, Robert Pearce, grants you without charge
      the right to reproduce, distribute and use copies of this
      "shareware" version of the DISAM file handler software product
      (including the on disk documentation), on the express condi-
      tion that you do not receive any payment, commercial benefit,
      other consideration for such reproduction or distribution, or
      change this license agreement.

             Support from users such as yourself enable the author
      to develop additional features and future versions of the
      DISAM product. Your contribution of $10.00 would be greatly
      appreciated and should be mailed to:

             Robert Pearce
             2325 W. Cabana
             Mesa, AZ. 85202

             By sending your contribution, along with your  name and
      address you will become a registered user of DISAM and
      eligible to receive technical support, announcements of new
      releases and fixes to problems as they become known.


             THIS PRODUCT IS LICENSED WITHOUT ANY WARRANTY OF
      MERCHANTABILITY, FITNESS OF PARTICULAR PURPOSE, PERFORMANCE,
      OR OTHERWISE; ALL WARRANTIES ARE DISCLAIMED. BY USING THE
      DISAM PRODUCT, YOU AGREE THAT THE AUTHOR WILL NOT BE LIABLE TO
      YOU OR ANY THIRD PARTY FOR ANY USE OF (OR INABILITY TO USE)
      THIS SOFTWARE, OR FOR ANY DAMAGES WHATSOEVER.

             This software was tested as follows:
      DISAM and DFH3 were assembled using Microsoft MASM V5.1.
      User programs are compiled GW-BASICusing Microsoft GW-BASIC
      Compiler V3.2 as sold by Zenith Data Systems and assembler
      programs also assembled using Microsoft MASM V5.1.




                               Introduction



             In the beginning, there was punched paper tape and fly
      readers. Records were stored and read sequentially. Then came
      magnetic tape drivers for mass storage but records were still
      stored and read sequentially.

             Records were blocked by one and it took 6 seconds to
      read or write them. Then came blocked record formats and many
      records could be gotten for that 6 seconds. I/O was getting
      faster but it was still sequential.

             When the diskette came along, sequential access was
      preserved and random access was added. Random access provides
      a way to access a specific record in a file. However, there
      is no intelligence built into the random access file handler
      and records are fixed length.

             The main difference between DISAM and Random access is
      the way data is accessed.

             Random access, accesses records by relative numbered
      data blocks. Each block is fixed length without regard to how
      much data is stored in them.

             DISAM accesses records by an assigned character key.
      Record lengths are variable and can be up to the GWBASIC limit
      of 255 bytes. Records can be longer if DISAM is accessed
      through an assembler or "C" interface.

             Random access will read records sequentially in block
      number order.

             DISAM access will read records sequentially in
      ascending key order. (0-9,A-Z,a-z)

             Random access allows fields to be defined within the
      data block via the FIELD command.

             DISAM relies on the user to provide field delimiters
      and a parsing routine. Possible delimiters could be "\", "^",
      or "*" or any other special character not being used as data.





                                  DISAM


             DISAM is a resident file handler initially designed
      for use with GWBASIC. The need for this type of file
      handler arose when ASCII data files were required to be
      accessed by a specific alphanumeric key.

             DISAM stores records in key ascending order regardless
      of data entry. The record length is limited by GWBASIC's
      limit of 255 bytes,although DISAM can handle much longer
      records. The size of the file is limited to the amount of free
      space on the recording media.

             The record key has a maximum length of 125 bytes and
      can be anywhere within the first 255 bytes of the record. The
      key's position in the record has no affect on the response
      time of the file handler.

             Because of the nature of the file handler, there is a
      special utility, DISAM.COM, that is used to define the file.
      There is also a special set of GWBASIC code statements used to
      access the file handler. Other than the above restrictions, a
      DISAM file can be copied, renamed, or deleted through the
      normal MS-DOS commands.

             DISAM records can be retrieved either sequentially, by
      full key or by a shortened (generic) key.  You might use a
      generic key to set the position in the file and then read
      sequentially until the generic key changes, or you might read
      a specific record by full key, or just read the entire file
      sequentially. DISAM is designed for all of these.

             Adding records to DISAM can be done in any order. The
      file handler will insert them in their proper place. An
      existing record may be replaced with a record of a different
      length. The file handler will make additional room for the
      replaced record or free up the extra space if the new record
      is shorter that the original.

             The file handler buffers its data blocks so that if
      records being accessed or added fall within the same block,
      unnecessary I/O is not performed. However if the users
      program should fail, current added records may be lost. To
      provide for additional data integrity, there is an "Immediate"
      mode that can be invoked to force the file handler to write
      the data buffer after each record is added, changed or
      deleted. This is a great help during program development but
      should be used sparingly after the program is completed
      because of the increased time it takes to write the data
      buffers.





                             Installation

             There is no special installation needs for DISAM. The
      module, DFH3.COM, is executed. Its execution will make it
      resident in low memory and set up an entry pointer at 12:0
      Hex. The user has the opportunity at this time to provide
      multiple file access buffers. Based on using the index and
      data block defaults, one file buffer is needed to access each
      DISAM file.  One is provided by default.  If there is to be
      more than one DISAM file open at the same time, a buffer must
      be provided for each file. The limit is 5 DISAM files opened
      at the same time. E.I.  DFH3 3 will provide buffers for three
      DISAM files.

             If there is a second attempt to load the file handler
      the user will get a message that it is already loaded. If the
      address, 12:0, is being used by another module, then the user
      will get a message for that also and DISAM cannot be loaded.
      This address is also known as INT 48H and the code uses 5
      bytes. This also includes 1 byte of INT 49H.

             More on the DFH3 buffers. The buffers are made up of
      four dynamic parts. Based on the defaults this amounts to
      about 3K per buffer.

             128 = File Control Block
             512 = File Index Block
            2048 = File Data Block
             256 = User Add Record Buffer
            ----
            2944 = Default Buffer size

             If your file needs more than this you can define more
      buffers. If you do and you need to have more than one DISAM
      file open at the same time then use the odd numbered ones.
      Define 4 buffers and use 1 and 3. This will give you 6K of
      buffer space. If you really need a larger buffer size, you can
      "zap" the space allocation size using PC-ZAP and file
      DFH3.Z03.

             The following code is placed in the GWBASIC program.


      nnn REM Make sure that the file handler is in memory.
      nnn DEF SEG=&H0012       'This sets the segment address
      nnn X=PEEK(&H0)          'Get the code byte at the entry
      nnn DEF SEG              'Restore the data segment to GWBASIC
      nnn IF X<>234 THEN STOP  'Expect to find a long JMP inst.
                               'If it is not, DFH3 is not loaded.




      nnn REM Set up variables for file handler calls
      nnn F$="x[,n]"           ' "x" is the file handler command
      nnn R$="y"               ' "y" depends on the command




      nnn DEF SEG=&H0012       'Set the segment address
      nnn DFH3=&h0             'Set offset address

      nnn CALL ABSOLUTE (F$,R$,DFH3)      'Compiled basic call

      nnn CALL DFH3 (F$,R$)           'Interpretive basic call

      nnn IF LEN(R$)=1 ....    'Return code from file handler
                               'else R$=data record





                           COMMANDING DISAM

      OPEN
      F$="O[,n]"    (for all programs except Quick-BASIC)
      F$="Q[,n]"    (for Quick-BASIC programs)
      R$="filename.ext"+""
             The open command; opens the file, reads the control
      block, the first index block and the first data block into the
      file handler's buffer. Quick BASIC does not allow the size in
      the string descriptor block to be changed for chaining reasons
      I suppose. If you use the "O" to open a quick BASIC file you
      will get a string corrupt message. The "Q" open sets an
      internal flag to stop the modification of the string length
      being passed back to the calling program. This means that if
      you send 80 bytes to DFH3 your response will be 80 bytes. You
      must test for the first character in a return-code. This is
      for "Q" open only.     e.i nnn IF LEFT$(R$,1)="0" GOTO ...



      RETURN-CODES
             "0" Normal response to the open.
             "5" The file is currently in use by another program and
                 the share option is set to "N". No sharing allowed.
             "7" The file was not found.
             "8" The buffer specified was found in use. This is
                 because it has been opened by another file or the
                 program using the buffer ABENDed leaving it open.
                 Use the FREE command to close the buffer if it was
                 left open by a program ABEND.
             "9" This is a general error usually accompanied by a
                 register dunp and error address.


      CLOSE
      F$="C[,n]"
      R$=" "
             The close command writes the file buffers if required
      to disk and closes the file to the system.

      RETURN-CODES
             "0" Normal response.
             "9" An invalid buffer number was used.


      ADD
      F$="A[,n]"
      R$="Data record to be added to the DISAM file"
             The add command checks for an existing record of the
      same key. If it is not found, the record is added to the DISAM
      file.

      RETURN-CODES
             "0" Normal response.
             "2" Record already exists.
             "4" Record length invalid.The record length must be
                 longer then the key offset plus the key length and
                 shorter than  Data Block Size - 10.


      DELETE
      F$="D[,n]"
      R$="full-key"
             The delete command requires a full key. Generic deletes
      are not permitted. The delete removes the record and makes
      room in the data block for another record.

      RETURN-CODES
             "0" Normal response.
             "1" Record not found.




      GET
      F$="G[,n]"
      R$="full-key"+SPACE$(255-keylength)       'Keyed read
      R$="generic-key"+SPACE$(255-keylength)    'generic keyed read
      R$=SPACE$(255)                            'sequential read
             Space must be provided for the record to be inserted
      into the GWBASIC string work space. The file handler will not
      corrupt the basic string space. Only as much space sent to the
      file handler will be used. 255 bytes is the max. for a GWBASIC
      program. The file handler will return a shorter record and
      make the necessary changes to the string descriptor. It will
      not use more space than provided by the calling program.
             Quick-BASIC users, be careful here. You must know how
      long the record is and pass that many bytes to DFH3.
      Return-codes of "1" and "3" will also be "record length" long.
      Be aware of records that start with the above numerics.

      RETURN-CODES
             "<------data record------>" Normal response.
             "1" Record not found.
             "3" End of file. (sequential read)

      PUT
      F$="P[,n]"
      R$="Existing record that is to be changed"
             The put command searches out the existing record on
      the file. Deletes it and adds the replacement record. This
      way there is no need for the existing and the new record to
      be the same length.

      RETURN-CODES
             "0" Normal response.
             "1" Record not found.
             "4" Record length invalid.The record length must be
                 longer then the key offset plus the key length and
                 shorter than Data Block Size - 10.

      IMMEDIATE
      F$="I[,n]"
      R$=" "
             The immediate command sets a file handler flag to
      update the data block immediately after each update. This will
      provide maximum file integrity and maximum response time. This
      command is provided to maintain the DISAM file while the
      calling program is being developed and should be removed when
      all program fixes are in place. The flag is reset when the
      file is closed.

      RETURN-CODE
             "0" Only response

      FREE
      F$="F[,n]"
      R$=" "
             The free command makes the specified buffer available
      for use. This command is provided to free a buffer after a
      program has ABENDed, leaving the file and the buffer open.

      RETURN-CODE
             "0" Normal response





                       THE DISAM UTILITY PROGRAM



             DISAM.COM is the utility program that is used to set up
      a DISAM file. When the program is started the screen will
      display:

                    DISAM UTILITY PROGRAM Ver 3.n
                   Written by R. Pearce. dd-mmm-yy
                   Enter Function:
                           CATalog listing of DISAM file statistics
                           DEFine a new DISAM file
                           DELete a file
                           FREe DISAM file handler buffer space
                           LOAd a DISAM file from a sorted source
                           UNLoad all or part of a DISAM file
                           VERify the condition of a DISAM file
                           END






            The following defines the functions of DISAM




    DEFine:
           This function defines the DISAM file. You will be prompted
    for the file name. A check will be made for an existing DISAM
    file. Then you will be prompted for the key length and the key
    offset.

           The key length can be from 1 to 125 characters in length.

           The key offset is a place within the record where the key
    starts. The first position in the record is offset 0 (zero).  The
    offset plus the key length will establish the minimum record
    length.

           Normally a key length of 11 to 15 characters is adequate
    for most data retrieval.

           After the key length and offsets are entered you will be
    prompted to specify the Index Block Size (IBS), or take the
    default of 512 bytes.

           The minimum IBS is four times the key length (FKL) plus 4,
    plus eight. IBS = (4*(FKL+4))+8.  If you specify a size smaller,
    DISAM will calculate the minimum size for you.

           Next you will be prompted for the Data Block Size (DBS), or
    you may take the default of 2048 bytes.

           The minimum size of the DBS is equal to the IBS. The
    maximum size to stay within the buffer default is 2048. This will
    allow you to write a record up to 2038 bytes long. DISAM will
    round up the DBS to the next multiple of the IBS if you specify a
    size that is not a multiple of the IBS.

           Next you will be prompted for the load free space in whole
    percentage points. This is the amount of free space to be kept
    available in each data block during the load of the DISAM file.
    At this point you have to know what the DISAM file is going to be
    used for.

           If there are no data records to be loaded after the define
    of the DISAM file, then the value is not used and it does not
    matter what you enter. a C/R will provide 0%.  If this is a read
    mostly reference file then you could use 0 - 2 %. If you are going
    to be changing and adding data on a regular basis then 10 to 20
    percent would be good.

           The intent is to provide the file growth space before it is
    necessary to split the data blocks. A file load function with 0%
    load free space will pack the records into the smallest space so
    that any record adds will cause the data blocks to be split and
    increase file response time for adds.  Fifty percent load free
    space will cause the load function to double the size of the DISAM
    file. Records added on a random basis will not cause as many block
    splits hence faster file response time. The maximun value is 50%.

           Lastly you will be asked if this file may be shared with
    other programs.You must answer "Y" or "N". In such multitasking
    environments as DESQview, several virtual 8086 windows may be
    opened, each running tasks that may include DISAM files. If you
    specify "N" only one program may access a DISAM file at a time. If
    you specify "Y" then no data integraty is insured. Several
    programs can update the same DISAM file, even the same record. It
    is the users responsibility to insure that if "Y" is specified,
    only one program updates and all other programs read the DISAM
    file.

           With the file definition complete a CATalog display will be
    presented. Take note of the maximum record length on this display.
    This is the edited value when it comes to adding records.




    LOAd:
    The load function loads the DISAM file from sequential file.  A
    program such as QSORT may be used to sort the sequential file
    prior to the load. DISAM expects the input file to be sorted in
    key sequence.

           You will be prompted for the sequential file name and the
    DISAM file name.

           At the end of the load the number of records loaded will be
    displayed.




    UNLoad:
           The unload function copies the DISAM file to a sequential
    file. You will be prompted for the DISAM file name, the sequential
    file name, the number of records to unload (default is ALL), the
    number of records to skip (default is NONE), and the starting
    DISAM record key (default is NONE).  The skip count and the
    starting key are mutually exclusive.  Use one or the other.  Not
    both.

           The DISAM file will be unloaded and the unload count will
    be displayed.

           The sequential file may also be the printer (PRN)or the
    display (CON).




    DELete:
           The delete function allows you to delete a file while using
    the DISAM utility program. Used during repacking of the DISAM
    file.




    CATalog:
           The catalog function displays the current information about
    the DISAM file. You will be prompted for the DISAM file name.
    Below is a display of the pertanent information about the DISAM
    file.

           1) the key length
           2) the key offset
           3) control block size
           4) index block size
           5) data block size
           6) next available block number
           7) the maximum record length allowed

           8) number of index records
              (same as the number of data blocks)
           9) number of index splits

          10) number of data records
          11) number of data splits

          12) percent free space at load time
          13) the share option




    VERify:
           The verify command is used to close files left open by
    program ABENDs. You will be prompted for the DISAM file name.
    Verify will display a message indicating how the file was found
    and the catalog record count. It then will read the file
    sequentially and display the actual record count.

           If there is a difference between the two record counts then
    records were lost as a result of the program ABEND. Use the
    "Immediate" command while debuging the program to prevent record
    losses.




    FREe:
            The free command frees all 5 of the file handler's
    buffers. This command is useful during program development to
    clean up the buffers used by DFH3 after program ABENDs.





    THE COMPRESS PROCEDURE

           Because of the way the records are added, described above,
    the DISAM must be compressed from time to time. The following is
    the recommended procedure.

    run DISAM
           select CAT to get the file key length and offset
                         and the Index and Data buffer sizes.
           select UNL to unload the DISAM file to a seq. file
           select DEL to delete the DISAM file
           select DEF to redefine the DISAM file
           select LOA to reload the DISAM file
           select CAT to verify record counts
           select DEL to delete the seq. file
           select END


    Note:
           If you are an assembler programmer, there is a sub routine
    included in this package that will allow you to access DISAM from
    the program as easy as:

           mov  si,offset datrec    ;point to record key
           call dsmget              ;get the record

           datrec db max_rec_len


    ZAPS......

           Zap fixes documented and applied to this product use the
    PC-SIG software "PC-ZAP" located on disk #355. PC-ZAP is available
    at your local authorized PC-SIG dealer.




           SYSTEM ERROR messages:

           You may get a system error message due to an internal
    error. It will be in the form:

    System Error occurred in DFH3 near 027D
    AX=0005 BX=.. CX=.. DX=.. SI=.. DI=.. CS=264B DS=2724 ES=2830

    AX= INT 21 RETURN-CODE
    CS= SEGMENT ADDRESS FOR DFH3
    DS= SEGMENT ADDRESS FOR THE BUFFER SPECIFIED
    ES= SEGMENT ADDRESS OF THE CALLING PROGRAM (e.i. GWBASIC)

           In the above message, 027D is the address of the open file
    interrupt +3. AX=0005 is an access denied error.





                      SOME INTERNAL THOUGHTS


           DISAM uses three buffers within the file handler. The first
    is the control block buffer. It contains pointers, counters, and
    the necessary things to manipulate the other two buffers. This
    buffer is 128 bytes long and is built when the file is defined.

           The second buffer is the index block buffer. This buffer is
    by default, 512 bytes in length and contains key records that
    point to data blocks. There is a also a pointer to the next index
    block. The first index block is numbered, block zero (0).

           The third buffer is the data block buffer. It is by
    default, 2048 bytes in length and contains the data records.  The
    data block also has a pointer to the next data block. The first
    data block is numbered, block 1.

           Records are stored in the data block in ascending key
    order. The last record in the data block has its key stored in the
    index block with a pointer to the data block.

           When a record is added to the data block, the free space in
    the data block is used. When the free space is used up, the data
    block is split in half. A new index record is created pointing to
    the new data block. The new record is then added to one of the
    data blocks. The other remains half used.  Over time the DISAM
    file will grow bigger than necessary and will have to be
    compressed. There is a process using the utility program to
    compress the file.

           The addition of new records is the most costly in response
    time. Normally a record is added by simply rearranging the data
    block in the buffer. No I/O required.  When a data block split
    occurs there are four writes performed. If a data block split
    causes an index block split, six writes are required before the
    record is added. After a split occurs, all blocks will have been
    written to the file.

           An example using the defaults; If the key length of a file
    is 11 bytes. the index block can hold 33 data block keys.  If the
    average length of a data record is 80 bytes, each data block can
    hold 24 records. 24x33=792 Since the index block is already in the
    buffer, with 1 I/O you have access to any one of 792, 80 byte
    records.



```
{% endraw %}

## DSMLOGIC.DOC

{% raw %}
```















                                 DISAM 3 LOGIC


                                  Version 3.5


                                 Apr. 20, 1990


                                  Written by:
                                 Robert Pearce
                                2325 W. Cabana
                                Mesa, AZ. 85202
                                (602) 835-9189



          FILE CONTROL BLOCKS

                When a DISAM file is defined, the file is composed of
          three basic blocks. 1)Control block,  2)Index block, and
          3)Data block.


                              CONTROL BLOCK


                The control block is 128 bytes long and is used to
          track some of the statistical data about the file's perfor-
          mance and to hold the address constants (ADCONS) of the
          buffers since more than one file can be accessed at a time.
          See DSMADCON.DEF for the specific fields defined. Some are
          defined here.

          offset label value (all values are in decimal)
          000    CBS   128    Control Block Size
          002    IBS   U/D    Index Block Size  Min size=(FKL+4)*4+8
          004    DBS   U/D    Data Block Size   n*IBS
          006    FKL   U/D    File Key Length (user defined)
          008    FKO   U/D    File Key Offset (user defined)
          010    NFB   0      Next File Block (to be assigned)
          012    IRC   0      Index Record Counter
          014    DRC   0      Data Record Counter
          016    ISC   0      Index Split Counter
          018    DSC   0      Data Split Counter
          020    FS1   0      File Status Flag1           EQU
                 FOF   00000001B  File Open Flag           01
                 FUF   00000010B  File Update Flag         02
                 IUF   00000100B  Immed Update Flag        04
                 QBOF  00001000B  Quick-BASIC Open Flag    08
          021    FS2   0      File Status Flag2
                 FSO   00000001B  File Share Option        01
                 SIF   00000010B  Secondary Index Flag     02
          022    PFS   0      Percent Load Free Space
          024    SIKL  0      Secondary Index Key Length
          026    SIKO  0      Secondary Index Key Offset
          028    HANDLE0      DISAM File Handle

          The following are address constants for file buffers

          030    IBA   0      Index Buffer Address
          032    IFSA  0      Index Free Space Address
          034    INBA  0      Index Next Block Address
          036    DBA   0      Data Buffer Address
          038    DFSA  0      Data Free Space Address
          040    DNBA  0      Data Next Block Address

          The following ADCONS point file records.

          042    CIRA  0      Current Index Record Address
          044    NIRA  0      Next Index Record Address
          046    CDRA  0      Current Data Record Address
          048    NDRA  0      Next Data Record Address

          The following ADCONS point file blocks.

          050    CIBN  0      Current Index Block Number
          052    NIBN  0      Next Index Block Number
          054    CDBN  0      Current Data Block Number
          056    NDBN  0      Next Data Block Number

          The following locations are used during a block split

          058    SRL   0      Save Record Length
          050    CBN   0      Changed Block Number
          062    UBUFA 0      User Buffer Address

          The following ADCONS point secondary index records.

          064    CSIRA 0      Current Secondary Index Record Address
          066    NSIRA 0      Next Secondary Index Record Address
          068    CSIBN 0      Current Secondary Index Block Number
          070    NSIBN 0      Next Secondary Index Block Number

          Offsets 072 through 126 are not used.



                                  INDEX BLOCK


                The index block (physical block 0) is IBS long, as
          defined by the user at definition time. In number terms this
          means that the minimum size is: (Key-length+4)*4+8 or 512
          bytes, the default, or what ever the user specified. It
          contains fixed length records equal to the key length plus
          four bytes. Two used to specify the record length and two
          used to point to the data block.

          ----------------------------------------------------------
          |IRL|  key      |DBN|IRL|X'FFFFFFFFFF'|DBN|000|          |
          |----------------------------------------------          |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                            ------------|
          |                                            | IFS | NIB |
          ----------------------------------------------------------


              |___2___|___________FKL___________________|___2__|
                 IRL          record key                   DBN

                The length of the record key is defined by the user.
          Maximum current key length is 125 bytes.

                Four bytes at the end of the index block are used for
          block control.
                IFS is the free space in the block. This is initially
          set to IBS-8
                NIB is the pointer to the next index block. The last
          index block points to zero.

          IBS = index block size
          IRL = index record length
          DBN = data block number
          IFS = index free space
          INB = index next block

          Based on a 512 byte index block:
          offset label = value
          000    start of index block
          508     IFS  = 504=(IBS-8)
          510     INB  = 0




                             SECONDARY INDEX BLOCK


                The secondary index block when used is IBS long, the
          same as the index block. It is placed at the end of the file
          and the file is marked as read only. The secondary index
          provides an alternate way to find a set of data records.

          ----------------------------------------------------------
          |SIRL| SI key    |DBN|CDRA|SIRL|X'FFFFF'|DBN|CDRA|000|   |
          |-----------------------------------------------------   |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                            ------------|
          |                                            | IFS | NIB |
          ----------------------------------------------------------


             |___2___|__________SIKL___________|___2___|___2___|
               SIRL         SI record key         DBN     DRO

                The length of the Secondary Index key is defined by
          the user.  Maximum current key length is the File Key Length
          (FKL) times 2.

                Four bytes at the end of the secondary index block are
          used for block control.
                IFS is the free space in the block. This is initially
          set to IBS-8
                NIB is the pointer to the next index block. The last
          index block points to zero.

          SIRL = secondary index record length
          DBN  = data block number
          DRO  = data record offset
          IFS  = index free space
          INB  = index next block

          Based on a 512 byte index block:
          offset label = value
          000    start of index block
          508     IFS  = 504=(IBS-8)
          510     INB  = 0




                              DATA BLOCK


                The data block, (physical block 1) is constructed in
          the same way as the index block but holds the data records.
          The size, (DBS) is defined by the user at file definition
          time. It must be a multiple of the index block size. Minimum
          size is equal to the index block. Max can be up to 10,000
          bytes. 2048 is the default size.

          ----------------------------------------------------------
          |DRL|   data record  |DRL|X'FFFFFFFFFF'|000|             |
          |-------------------------------------------             |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                                        |
          |                                            ------------|
          |                                            | DFS | NDB |
          ----------------------------------------------------------


             |__2__|_______________Variaable_____________________|
               DRL                data record

          DBS = data block size
          DFS = data free space (DBS-4)
          DNB = data next block (DBS-2)
          DRL = data record length

          The record length value does not include the 2 length bytes.


          Based on a 2048 byte data block:
          offset label = value
          0000   start of data block
          2044   DFS   = 2040=(DBS-8)
          2046   DNB   = 0

          The "8" in the initial free space calculation allows 4
          control bytes, 2 terminator bytes and 2 extra slop bytes.





          FILE DEFINITION

                At file definition time the user provides the key
          length (FKL) and the key offset (FKO). The key length is
          edited for less than 126 bytes and not zero. The offset is
          edited for less than 255-FKL.

                The Index and the data block sizes, (IBS and DBS,) are
          also provided by the user with some restrictions. The index
          block must be at least 4 times the key length. Specifically,
          the minimum size is FKL+4 times 4 plus 8. The data block
          must be a multiple of the index block size. There are no
          maximum sizes. However current design limits are 3K per DFH3
          buffer and 5 buffers max. This allows the work area for 1
          file to be 15K in buffer space. Or 2 files of 7.5K etc.
          Beyond this you will get a MS-DOS memory allocation error
          and be forced to reboot the system.

                Load free space, (PFS), is the last value required
          from the user. This is used only when the DISAM file is
          loaded using the DISAM utility LOAd function. This
          percentage is subtracted from the data free space value
          before the data block is filled. When the free space value
          is used up, the percentage is restored and the block is
          written. In effect, this maintains a percentage of free
          space in each data block. e.i. A 1000 byte data block with
          20 percent free space is loaded with 800 bytes worth of data
          records. the 20 percent is then restored (200+) to the data
          free space and the block is written. This will allow a 20
          percent growth in each data block before a data split is
          required.

                These five values are placed in the control block as
          FKL, FKO, IBS, DBS, and PFS.

                Based on the FKL a record of high-values is placed in
          the index block with a data block pointer of 1.

                Based on FKL and FKO a record of high-values is placed
          in the data block. The record lengths are subtracted from
          the free space fields respectively and all three blocks are
          written to the DISAM file.

          These are known as logical end of file records. They force
          all records to be inserted below them.





          FILE HANDLER EXECUTION

                DHF3.COM is executed by the user to load the DISAM
          file handler into the system. The file handler checks to see
          if it has already been loaded by checking the entry point
          address (12:0). It expects to find a four byte
          segment:offset address pattern. A compare of three sets of
          addresses at 12:0, 12:4 and 12:8 is done. If these addresses
          are all the same they are considered as trap addresses and
          the load continues. DFH3 builds a long JMP instruction (5
          bytes) at that address to its own entry point. Based on the
          number of buffers specified, default=1, it acquires 3K
          chunks of memory. Then it terminates and stays resident.

                If the address is not part of a segment:address train
          then DFH3 checks for a x'EA' at 12:0. If this is true then
          DFH3 displays an already loaded message and exits.  If there
          is any other value, DFH3 assumes that the address is being
          used by another interrupt and displays a message to that
          effect and terminates. To change the location of the entry
          address will require a reassembly of DFH3.COM or ZAP
          DFH3.Z01.

                Once loaded, DFH3 becomes a FAR subroutine to the
          calling program. The user entry address, 12:0, is used
          because MS-DOS will load DFH3 where ever there is space and
          the user has no control over its placement. In the GWBASIC
          program the DFH3 segment address is coded DEF SEG=&H12 and
          the offset is coded DFH3=&h0. This code sets up the entry
          address for the file handler at 12:0.





          FILE ACCESS (PASSING VARIABLES)

                There are two variables normally sent to DISAM.  Some
          functions require only one, e.i. close. But because a
          return-code is returned in the second variable, it is still
          required with a minimum length of one byte. The first
          variable is the function code and the buffer number
          separated by a comma.  If there is no comma and buffer
          number, "1" is assumed. The second variable will depend on
          the first.  Usually the second will be a file name, a data
          record, or a record key.

                The variables' string descriptor blocks are passed on
          the stack to DFH3. Only the CS register points to the
          subroutine's base address. The stack belongs to GWBASIC as
          does the DS register. DFH3 tries to use as little of the
          stack as possible due to not knowing how deep the subroutine
          is into the stack.

                The variables are string descriptor addresses offset
          DS. The DS register is saved and the strings are moved into
          DFH3's address space (CS). All work done by DFH3 will be
          done in it own address space so that no problems will be
          created with GWBASIC.

                The first variable, the file function, is converted to
          upper case and tested. Next the buffer number is checked.
          The buffer specified is an offset into the buffer address
          table. It's value may be from 1 to 5. The number is doubled
          and the table accessed. Functional chart follows.

                                          Initial Buffer status
                                      |  closed | open  | invalid |
                         ------------------------------------------
            Function:    O,Q          |  open * | error | error   |
                         C            |  ignore | close | ignore  |
                         All others   |  error  | open *| error   |
                         ------------------------------------------
           *  The address of the buffer is placed in the DS register.
          In the case of the close, the buffer address is closed after
          being moved to the DS register.

                The function of opening and closing buffers is as
          follows. Buffer addresses come in three flavors. Open,
          Closed and nonexistant. Nonexistant buffer addresses are the
          buffers not specified. e.i. If you specify 3 buffers, then 4
          and 5 are nonexistant. Thus, zero.  An open buffer address
          is a valid address pointing to a 3K block of memory.  A
          closed buffer address is a valid buffer address or'd with
          X'8000'. 2CF0 is valid and open.  ACF0 is valid and closed

                The second variable is checked for a minimum length of
          one (1) byte. If not, control is passed immediately back to
          the calling program. Exit.

                Next, the users data is moved into DFH3's address
          space. The function code is used to determine what is to be
          done.

                When the function is completed the return-code or
          record is moved to GWBASIC's address space defined by the
          second variable. Normally the length code in the string
          descriptor is shortened to fit the response. If there is not
          enough length to hold the record, the record is truncated.
          If the file was opened as a Quick-BASIC file the length is
          NOT changed and it is up to calling program to determine how
          much of the returning string is valid.




          FILE ACCESS (OPEN)


                The file open can originate from one of two places.
          The first is a normal open. The second is a Quick-BASIC
          open. The difference is that the Quick-BASIC open sets the
          QBOF flag.

                The open process checks to see if an open has already
          been processed.(This is not the same as assigning a buffer
          address.) If the file is already open, an invalid function
          "9" is returned to the calling program.

                There is another user error condition, "8", which is
          caused when the calling program ABnormally ENDs (ABENDs)
          while the DISAM file is open.  MS-DOS will close the file at
          the time of the abend. However the open flag, FOF, and
          possibly the update flag, FUF, May still be set.  If the FUF
          flag is set then the update data is lost.  The open will
          reset the flags and return to the calling program with an
          (8) return-code.

                If the file is not found then the user will get a "7"
          (file not found) return-code.

                Next the control block is read to get the sizes of the
          index and data blocks.Using the buffer base address the
          index block and data block ADCONS are built.

                A check for an open file is again done. This time with
          the control block gotten from the file. If the file is
          closed, then the open continues. If the file is already
          marked as open, the share option is checked. If the share
          option is "Y" (1), then the open continues. If not, then
          the file is closed and the buffer is released. An error of
          "5" (sharing not allowed) is returned to the user.
          Continuation of the open function includes marking the file
          as open and writing the control block back to disk. This
          allows other programs to check to see if the file is open.

                CIBN is set -1 and NIBN is set to 0.  The Read Index
          Block (RIB) subroutine is called which forces a read and the
          index buffer is filled. CDBN is set to 0 and NDBN is set to
          1. a call to Read Data Block (RDB) forces a read and the
          data buffer is filled. Last the file is marked open (FOF),
          the return code is set to "0" and control is returned to the
          calling program.




          FILE ACCESS (CLOSE)

                The close routine first resets the Immediate Update
          Flag (IUF).  Then checks the File Status Flag (FSF)to see
          if the file has been opened. If not the routine terminates
          without error.

                The File Update Flag (FUF)is checked. If it is set,
          which means there is still an unwritten buffer, the data
          buffer is written.

                The "update" and "file open" flags are reset and the
          control buffer is written.

                The file is then closed to MS-DOS and routine
          terminates without error.



                             RECORD KEY SEARCHES


                When I initially designed DISAM for the HDOS 2.0
          environment, module size was more important than access
          speed. So I chose not to use rotating index-block searches.
          I continued this into the MS-DOS environment.

                All key searches start at index block zero.

                When a search for a key is initiated, the index buffer
          is checked for the first index block. If it is not there it
          is read in from the file.

                The index search looks for a key equal or greater than
          the user's key. The index block chain is used to search
          through multiple index blocks until the index key conditions
          are met.

                The data block number associated with the index key is
          used to read the data block.

                Before the data block is read into the buffer a check
          is made to see if the data block in the buffer is the one
          wanted or has been updated (FUF). If the data block is
          already in the buffer, the search for the record begins. If
          the data buffer is not the correct one and has been updated,
          it is written to the file. The data block wanted is read
          into the buffer and the search for the data record begins.

                Each data record is checked sequentially against the
          user's key. As the search progresses, data record address
          fields are maintained. The CDRA (current data record
          address) points to the record under test. The NDRA (next
          data record address) points the next data record. When the
          match is found, control is returned to the calling function
          with the carry flag clear.  If there is no match, control is
          returned with the carry flag set. Since the data records are
          stored in ascending sequence, a data key greater than the
          user key is a not found condition.

                With all this in mind, we move on to the rest of the
          file functions.




          FILE ACCESS (ADD)

                A search for the record is initiated. If the record is
          found, an error is returned to the calling program.

                The add function first checks to see if there is
          enough free space in the data block for another record.

                If there is, the free space value is reduced by the
          length of the record plus 2. (2 bytes for the length value)
          The CDRA is then used as the data block dividing point. All
          data records fron the CDRA to the end of the data in the
          block are moved up for a distance of the new record length
          plus 2.  The new record is then inserted in the space
          provided by the move.  Control is passed back to the calling
          program.

                If there is not enough space, the block is split and
          then the record is added as above.

                Part of the Add routine is used by the "PUT" logic and
          is explained there.





          FILE ACCESS (DELETE)

                A search is initiated for the record. If the record is
          not found, an error is passed to the calling program.

                If it is, the record length plus 2 is added to the
          free space value. All records beyond the record to be
          deleted (NDRA) are moved down in the block to cover the
          deleted record(CDRA).  Control is passed back to the
          calling program.

                Part of this function is used by the "PUT" function.




          FILE ACCESS (GET)

                The GET access can be performed in three ways.
          1) A sequential read.
                (First character in the key is a space)
          2) A partial (generic) key read.
                (The user key length is less than FKL)
          3) A full key read.
                (The user key is equal or greater than FKL)

                For a sequential read, the NDRA is moved to the CDRA
          and the data record is gotten from the CDRA.In the event
          that the NDRA is zero, (end of data block), the NDB is used
          to get the next data block. If the NDB is zero then the
          logical end of file has been reached.

                For a generic read, a key compare is done only for the
          length of the user key.

                For a full read, a key compare is done for the length
          of the file key.

                In both keyed reads a search is initiated for the
          record.  If the record is not found, an error is passed to
          the calling program.

                Using the CDRA, the record is placed in the address
          space defined by the second calling parm not to exceed the
          input parm length.  In a GWBASIC call to DFH3 it is
          important that the length of the second parm be 255 bytes
          insure that the whole record is returned.

                If the file record is less that the provided length,
          the length is shortened to the file record length.

                The exception is for the "Q" open for Quick-BASIC. The
          user's length in the second field is used regardless of data
          record length. It is up to the Quick-BASIC program to know
          how much of the return field to use.  Quick-BASIC will get a
          string integraty violation if the string descriptor length
          is changed outside of Quick-BASIC.



          FILE ACCESS (PUT)

                A search is initiated for the record using the full
          key. If the record is not found, an error is passed to the
          calling program.

                The PUT function replaces an existing record using the
          DELETE and ADD functions. A delete for the record is issued
          using the DELETE routine. Then an add for the record is
          issued using the ADD routine. In this way record length
          changes are allowed. If the replacement record causes a data
          block split it is handled as a normal add.



          SECONDARY INDEXING

                Once a DISAM file has been defined and loaded it may
          have a secondary index created. The "Sec" finction of DISAM
          will add the secondary index to the end of the file. This
          will also lock the file as READ ONLY. You may reorganize the
          file and that will allow it to be a normal DISAM file.  The
          secondary index records point directily to the physical
          location of the data records on a 1-for-1 basis. Any changes
          to the file will render the secondary index useless.



          SPLIT LOGIC

                When a record is to be added to a block, first the
          record length plus 2 is subtracted from the free space
          field. If this subtraction causes an overflow, carry flag to
          be set, there is not enough space in the block for the
          record.

                When a block is split approximatly half of the data is
          copied to another block and half of the data is kept in the
          current block. When a DATA block is split, a new index
          record is created.  So before we can split a DATA block
          there must be enough space in the index block for another
          record.So the index block must be  checked to see if there
          is enough space for another key record. If there is, the
          data block split continues. If not, the index block is split
          first.

          INDEX SPLIT

                The index block is split by dividing the block size by
          2 and stepping through the block, subtracting the record
          length until the value goes negative. At this point the
          address of the next record is saved (NIRA) and the index
          string is terminated. The free space is recalculated. The
          block chain is updated to point to the Next File Block
          (NFB). The index record is written.

                Using the same data in the index buffer, the upper
          index records are moved to the bottom of the index block.
          The free space is recalculated and the new index record is
          appended to the file using the next file block number. Last
          the Next File Block pointer in incriminated and the control
          record is written.

                At this point we are abend safe. Control is passed
          back to the "ADD" function for another try.

          DATA SPLIT

                The data split occurs in the same way as the index
          split with three exceptions.
                1) The original data block index record is updated
                   with the NFB value.
                2) The key of the last record in the lower data buffer
                  is written to the index buffer.
                3) The Next Block Number is calculated based on the
                  algorythm DBS/IBS.

                All buffers are written after a data block split to
          protect the file. Control is passed to the "ADD" function.



          EXAMPLE:

          1) Before DISAM file image.



                          0     index
                          --------------
                          | ee1 kk2 oo3|
                          | FF4        |
                          |           0|
                          --------------

          1     data    2    data   3   data     4   data
          ------------- ----------- ------------ -----------
          |aaaaaaaaacc| |ggggggiii| |mmmmmmmmmm| |qqqqqqqqq|
          |cccccccccee| |iiiiiiikk| |mmmmmmmmoo| |qqssssssu|
          |eeeeeeee  2| |kkkkkk  3| |ooooooo  4| |uuuFF   0|
          ------------- ----------- ------------ -----------










          2) "jjjjjjjjjjj" record added,  causes data block split



                          0     index
                          --------------
                          | ee1 kk2 oo3|
                          | FF4        |
                          |           0|
                          --------------

          1     data    2    data   3    data    4  data
          ------------- ----------/ ------------- -------------
          |No         | |ggggggiii| |No         | |No         |
          |  Change   | |iiiiiiikk| |  Change   | |  Change   |
          |          2| |kkkkkk  3| |         4 | |          0|
          ------------- --/-------- ------------- -------------
                        data split




          3) data block splits



                          0     index
                          --------------
                          | ee1 ii2 kk5|
                          | oo3 FF4    |
                          |           0|
                          --------------

          1     data    2    data   3    data  4  data    5  data
          ------------- ----------- ---------- ---------- ----------
          |No         | |ggggggiii| |No      | |No      | |kkkkkkk |
          |  Change   | |iiiiiii  | | Change | | Change | |        |
          |          2| |        5| |       4| |       0| |       3|
          ------------- ----------- ---------- ---------- ----------








          4) "jjjjjjjjjjj"  record added



                          0     index
                          --------------
                          | ee1 ii2 kk5|
                          | oo3 FF4    |
                          |           0|
                          --------------

          1     data    2    data   3    data  4  data    5  data
          ------------- ----------- ---------- ---------- ----------
          |aaaaaaaaacc| |ggggggiii| |mmmmmmmm| |qqqqqqqq| |jjjjjjjj|
          |cccccccccee| |iiiiiii  | |mmmmmmoo| |qqsssssu| |kkkkkk  |
          |eeeeeeee  2| |        5| |ooooo  4| |uuuFF  0| |       3|
          ------------- ----------- ---------- ---------- ----------



```
{% endraw %}

## FILE1617.TXT

{% raw %}
```
Disk No: 1617                                                           
Disk Title: DISAM                                                       
PC-SIG Version: S1.3                                                    
                                                                        
Program Title: DISAM                                                    
Author Version: 3.5                                                     
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
DISAN is a GW-BASIC programmer's answer to random access.  No block     
numbers to translate.  No hashing formulas.  Just pass the character key
of the record and let DISAM do the work.  A resident file handler, DISAM
handles variable length records up to 255 bytes.  Easy as:              
Open,filename; Get,Jim Jones; Close;.                                   
                                                                        
You can open up to five DISAM files at one time.  Assembler programs    
with record lengths in excess of 8K can also use DISAM.  With loads of  
documentation, DISAM includes test files and a test program with        
structured BASIC source code.  DISAM accesses records by assigned       
character key and will read records sequentially in ascending key order.
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1617

     Volume in drive A has no label
     Directory of A:\

    ADDRBOOK EXE     47546  11-25-89   6:33p
    ADDRBOOK LST     13516  11-25-89   6:33p
    ADDRBOOK SBA      8567  11-25-89   3:28p
    DFH3     COM      3821   4-20-90   3:50a
    DFH3     Z01      2555   4-20-90   3:50a
    DFH3     Z03      2925   4-20-90   3:50a
    DISAM    COM     10517   4-20-90   3:50a
    DISAM    DOC     26440   4-20-90   3:50a
    DISAMACC SUB      4806   9-06-88   6:52p
    DISAMTST EXE     39530   6-02-90   6:14p
    DISAMTST LST      6061   6-02-90   2:29p
    DISAMTST SBA      3726   6-02-90   1:26p
    DSMLOGIC DOC     35299   4-20-90   3:50a
    READ     ME       1213  11-25-89   7:07p
    TESTFILE DAT     88376  11-25-89   9:14a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       729   7-10-90  12:32a
    FILE1617 TXT      1925   7-10-90   2:23p
           18 file(s)     297590 bytes
                           16384 bytes free
