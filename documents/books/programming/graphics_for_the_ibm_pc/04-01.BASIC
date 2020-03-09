100 REM Program to demonstrate palettes 0 and 1
110 REM   in medium-resolution graphics mode.
120 SCREEN 1,0:CLS:KEY OFF      'Set screen
130 COLOR 0             'Black background
140 REM Do palette 0 first
150 COLOR, 0            'Select palette 0
160 REM Draw circles in colors 1, 2, and 3
170 CIRCLE(80,100),30,1:PAINT STEP(0,0),1
180 CIRCLE(160,100),30,2:PAINT STEP(0,0),2
190 CIRCLE(240,100),30,3:PAINT STEP(0,0),3
200 REM Label screen
210 LOCATE 22,17:PRINT "PALETTE 0"
220 LOCATE 24,9:PRINT "PRESS ANY KEY TO CONTINUE";
230 A$=INKEY$:IF A$="" THEN 230
240 REM Palette 1
250 COLOR, 1            'Select palette 1
260 LOCATE 22,17:PRINT "PALETTE 1"
270 LOCATE 24,9:PRINT "PRESS ANY KEY TO CONTINUE";
280 A$=INKEY$:IF A$="" THEN 280
290 COLOR 0,1:CLS
300 END
