
 5 SC=13*16*256+128:C=0          
 6 FOR R=0 TO 31:PRINT:NEXT          
 10 FOR R=0 TO 15          
 15 FOR S=0 TO 15          
 20 POKE SC+S*2+R*32,C:C=C+1          
 25 NEXT S:NEXT R          
 30 PRINT "OSI CHARACTER SET"          