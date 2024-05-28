@echo off
echo setting up system to build the MS-DOS 4.01 SOURCE BAK...
set CL=
set LINK=
set MASM=
set COUNTRY=usa-ms
set BAKROOT=c:
rem BAKROOT points to the home drive/directory of the sources.
set LIB=%BAKROOT%\src\TOOLS\BLD\LIB
set INIT=%BAKROOT%\src\TOOLS
set INCLUDE=%BAKROOT%\src\TOOLS\BLD\INC
set PATH=%PATH%;%BAKROOT%\src\TOOLS
