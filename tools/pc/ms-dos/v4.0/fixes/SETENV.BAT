@echo off
echo setting up system to build the MS-DOS 4.01 SOURCE BAK...
set CL=
set LINK=
set MASM=
set COUNTRY=usa-ms
set BAKROOT=C:
rem BAKROOT points to the home drive/directory of the sources.
set LIB=%BAKROOT%\SRC\TOOLS\BLD\LIB
set INIT=%BAKROOT%\SRC\TOOLS
set INCLUDE=%BAKROOT%\SRC\TOOLS\BLD\INC
set PATH=%PATH%;%BAKROOT%\SRC\TOOLS
prompt $p$g
