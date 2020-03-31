---
layout: page
title: "The MS-DOS Encyclopedia: Appendix N: An Object Module Dump Utility"
permalink: /documents/books/programming/msdos/encyclopedia/appendix-n/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/appendix-n/
---

### Appendix N: An Object Module Dump Utility

{% raw %}

	     The program OBJDUMP.C displays the contents of an object file as
	     individual object records. It can be used to study the structure of
	     object modules as well as to verify the output of a language
	     translator. The program recognizes all of the object record types
	     discussed in PROGRAMMING IN THE MS-DOS ENVIRONMENT: PROGRAMMING TOOLS:
	     Object Modules.
	
	     OBJDUMP.C should be executed with the following syntax:
	
	     OBJDUMP filename
	
	     where filename is a complete filename specification. For example, to
	     dump the contents of the object file MYPROG.OBJ, the user would type
	
	     C>OBJDUMP MYPROG.OBJ  <Enter>
	
	     The following is a typical object record as displayed by OBJDUMP:
	
	Record 9:  96h LNAMES
	96 002Eh 00 06 44 47 52 4F 55 50 05 5F 54 45 58 54 04 43   ..DGROUP._TEXT.C
	         4F 44 45 05 5F 44 41 54 41 04 44 41 54 41 05 43   ODE._DATA.DATA.C
	         4F 4E 53 54 04 5F 42 53 53 03 42 53 53 3F         ONST._BSS.BSS?
	
	     This sample LNAMES record defines a null name and eight names used in
	     subsequent SEGDEF and GRPDEF records. The first 3 bytes of the record
	     (the identifying byte and the 2-byte record length) are displayed to
	     the left of the hexadecimal and ASCII listings of the contents of the
	     record.
	
	/*************************************************************************
	*                                                                         *
	* OBJDUMP.C __ display contents of an object file                         *
	*                                                                         *
	*                                                                         *
	*     Compile:  msc objdump;   (Microsoft C version 4.0 or later)         *
	*     Link:     link objdump;                                             *
	*     Execute:  objdump <filename>                                        *
	*                                                                         *
	**************************************************************************/
	
	#include        <fcntl.h>
	
	#define         TRUE    1
	#define         FALSE   0
	main( argc, argv )
	int        argc;
	char       **argv;
	{
	        unsigned char        CurrentByte;
	        int    ObjFileHandle;
	        int    CurrentLineLength;               /* length of output line */
	        int    ObjRecordNumber = 0;
	        int    ObjRecordLength;
	        int    ObjRecordOffset = 0; /* offset into current object record */
	        char   ASCIIEquiv[17];
	        char   FormatString[24];
	        char   *ObjRecordName();
	        char   *memset();
	
	
	/* open the object file */
	
	        ObjFileHandle = open( argv[1],O_BINARY );
	
	        if( ObjFileHandle == -1 )
	        {
	          printf( "\nCan't open object file\n" );
	          exit( 1 );
	        }
	
	/* process the object file character by character */
	
	        while( read( ObjFileHandle, &CurrentByte, 1 ) )
	        {
	         switch( ObjRecordOffset ) /* action depends on offset to record */
	         {
	           case(0):                           /* start of object record */
	             printf( "\n\nRecord %d:  %02Xh %s",
	              ++ObjRecordNumber, CurrentByte, ObjRecordName(CurrentByte) );
	             printf( "\n%02X ", CurrentByte );
	             ++ObjRecordOffset;
	             break;
	
	            case(1):                       /* first byte of length field */
	             ObjRecordLength = CurrentByte;
	             ++ObjRecordOffset;
	             break;
	
	            case(2):                      /* second byte of length field */
	             ObjRecordLength += CurrentByte << 8; /* compute rec length */
	             printf( "%04Xh ", ObjRecordLength );        /* show length */
	             CurrentLineLength = 0;
	             memset( ASCIIEquiv, '\0' , 17 );       /* zero this string */
	             ++ObjRecordOffset;
	             break;
	            default:                  * remaining bytes in object record */
	              printf( "%02X ", CurrentByte );                     /* hex */
	
	              if( CurrentByte < 0x20 || CurrentByte > 0x7F )    /* ASCII */
	               CurrentByte = '.';
	              ASCIIEquiv[CurrentLineLength++] = CurrentByte;
	
	              if( CurrentLineLength == 16 ||/* if end of output line ... */
	                 ObjRecordOffset == ObjRecordLength+2 )
	              {                                        /* ... display it */
	                sprintf( FormatString, "%%%ds%%s\n         ",
	                  3*(16-CurrentLineLength)+2 );
	                printf( FormatString, " ", ASCIIEquiv );
	                memset( ASCIIEquiv, '\0', 17 );
	                CurrentLineLength = 0;
	              }
	
	              if( ++ObjRecordOffset == ObjRecordLength+3 )/* if done ... */
	                ObjRecordOffset = 0;       /* ... process another record */
	              break;
	          }
	        }
	
	        if( CurrentLineLength ) /* display remainder of last output line */
	          printf( "  %s", ASCIIEquiv );
	
	        close( ObjFileHandle );
	
	        printf( "\n%d object records\n", ObjRecordNumber );
	
	        return( 0 );
	}
	
	
	char *ObjRecordName( n )                    /* return object record name */
	int        n;                                         /* n = record type */
	{
	        int        i;
	
	        static        struct
	        {
	          int        RecordNumber;
	          char        *RecordName;
	        }                RecordStruct[] =
	                        {
	                          0x80,"THEADR",
	                          0x88,"COMENT",
	                          0x8A,"MODEND",
	                          0x8C,"EXTDEF",
	                          0x8E,"TYPDEF",
	                          0x90,"PUBDEF",
	                          0x94,"LINNUM",
	                          0x96,"LNAMES",
	                          0x98,"SEGDEF",
	                          0x9A,"GRPDEF",
	                          0x9C,"FIXUPP",
	                          0xA0,"LEDATA",
	                          0xA2,"LIDATA",
	                          0xB0,"COMDEF",
	                          0x00,"******"
	                        };
	
	    int   RecordTableSize = sizeof(RecordStruct)/sizeof(RecordStruct[0]);
	
	
	        for( i=0; i<RecordTableSize-1; i++ )      /* scan table for name */
	          if ( RecordStruct[i].RecordNumber == n )
	            break;
	
	        return( RecordStruct[i].RecordName );
	}
	
	
	                                                           Richard Wilton

{% endraw %}

Return to [The MS-DOS Encyclopedia](../): [Contents](../#contents)
