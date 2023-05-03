---
layout: page
title: "PC-SIG Diskette Library (Disk #1430)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1430/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1430"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "JOVE 2 OF 3 (ALSO 1429, 1454)"

    JOVE stands for Jonathan's Own Version of EMACS, the popular
    wordprocessor for programmers, used on mainframe computers.  This PC
    version has all the wordprocessing functions of its mainframe relative,
    with some interactive PC niceties.
    
    Experienced users will enjoy the convenience of using the same editor
    they use with UNIX.  JOVE provides simple insertion and deletion,
    multiple buffers and files, virtually unlimited file size, on-line help,
    file encryption, and more.  An extensive built-in macro command language
    and the complete C source code are also included for further
    customization.  JOVE goes beyond EMACS, with a LISP programmers' mode,
    added document functions, and operating system interaction.  On-disk
    documentation is backed up by a tutorial.
    File Descriptions:
    
    COMPRESS EXE  File compression utility.
    COMPRESS MAN  Manual for COMPRESS.
    CONTENTS      File descriptions.
    EXAMPLE  RC   Sample macro file.
    JOVE     D    EMACS Tutorial.
    JOVE     DXZ  Data file.
    JOVE     EXE  Program executable.
    README   DOS  MS-DOS version notes.
    SYSTEM   RC   Sample macro file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1430.TXT

{% raw %}
```
Disk No: 1430
Program Title:  JOVE (Disk 2 of 3)
PC-SIG version: 1

JOVE comes on a three disk set, the other numbers are 1429 and 1454.
Please refer to disk 1429 for a full description of the program.

Synopsis: PC-version of EMACS, the mainframe programers' text processor,
with most of the same functions plus a LISP programers' mode and
operating system interaction.

Usage:  Editor for Programmers/LISP.

Special Requirements:  512K memory.

How to Start:  Type GO (press enter).

Suggested Registration:  None.

File Descriptions:

COMPRESS EXE  File compression utility.
COMPRESS MAN  Manual for COMPRESS.
CONTENTS      Listing of what is on this disk.
DOC     <DIR> Subdirectory containing program documentation.
SRC     <DIR> Subdirectory containing source code files..

PC-SIG
1030D E. Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## KEYMAPS.TXT

{% raw %}
```
/***************************************************************************
 * This program is Copyright (C) 1986, 1987, 1988 by Jonathan Payne.  JOVE *
 * is provided to you without charge, and with no warranty.  You may give  *
 * away copies of JOVE, including sources, provided that this notice is    *
 * included in all the files.                                              *
 ***************************************************************************/

/* Warning:  You probably shouldn't put ifdefs anywhere *inside* the keymaps
   definitions.	 It'll screw up the stuff in comments (at least), and maybe
   a few other things.	Yes, it *WILL* screw up the comments ... but it's
   not clear that you care ... */

#include "jove.h"

keymap	mainmap = {
	"set-mark",			/* ^@ */
	"beginning-of-line",		/* ^A */
	"backward-character",		/* ^B */
	"unbound",			/* ^C */
	"delete-next-character",	/* ^D */
	"end-of-line",			/* ^E */
	"forward-character",		/* ^F */
	"unbound",			/* ^G */
	"delete-previous-character",	/* ^H */
	"handle-tab",			/* ^I */
	"newline-and-indent",		/* ^J */
	"kill-to-end-of-line",		/* ^K */
	"redraw-display",		/* ^L */
	"newline",			/* ^M */
	"next-line",			/* ^N */
	"newline-and-backup",		/* ^O */
	"previous-line",		/* ^P */
	"quoted-insert",		/* ^Q */
	"search-reverse",		/* ^R */
	"search-forward",		/* ^S */
	"transpose-characters",		/* ^T */
	"gather-numeric-argument",	/* ^U */
	"next-page",			/* ^V */
	"kill-region",			/* ^W */
	"prefix-2",			/* ^X */
	"yank",				/* ^Y */
	"scroll-up",			/* ^Z */
	"prefix-1",			/* ^[ */
	"search-forward",		/* ^\ */
#ifndef MSDOS
	"unbound",			/* ^] */
#else /* MSDOS */
	"find-tag-at-point",		/* ^] */
#endif /* MSDOS */
	"quoted-insert",		/* ^^ */
	"unbound",			/* ^_ */
	"self-insert",			/*    */
	"self-insert",			/* !  */
	"self-insert",			/* "  */
	"self-insert",			/* #  */
	"self-insert",			/* $  */
	"self-insert",			/* %  */
	"self-insert",			/* &  */
	"self-insert",			/* '  */
	"self-insert",			/* (  */
	"paren-flash",			/* )  */
	"self-insert",			/* *  */
	"self-insert",			/* +  */
	"self-insert",			/* ,  */
	"self-insert",			/* -  */
	"self-insert",			/* .  */
	"self-insert",			/* /  */
	"self-insert",			/* 0  */
	"self-insert",			/* 1  */
	"self-insert",			/* 2  */
	"self-insert",			/* 3  */
	"self-insert",			/* 4  */
	"self-insert",			/* 5  */
	"self-insert",			/* 6  */
	"self-insert",			/* 7  */
	"self-insert",			/* 8  */
	"self-insert",			/* 9  */
	"self-insert",			/* :  */
	"self-insert",			/* ;  */
	"self-insert",			/* <  */
	"self-insert",			/* =  */
	"self-insert",			/* >  */
	"self-insert",			/* ?  */
	"self-insert",			/* @  */
	"self-insert",			/* A  */
	"self-insert",			/* B  */
	"self-insert",			/* C  */
	"self-insert",			/* D  */
	"self-insert",			/* E  */
	"self-insert",			/* F  */
	"self-insert",			/* G  */
	"self-insert",			/* H  */
	"self-insert",			/* I  */
	"self-insert",			/* J  */
	"self-insert",			/* K  */
	"self-insert",			/* L  */
	"self-insert",			/* M  */
	"self-insert",			/* N  */
	"self-insert",			/* O  */
	"self-insert",			/* P  */
	"self-insert",			/* Q  */
	"self-insert",			/* R  */
	"self-insert",			/* S  */
	"self-insert",			/* T  */
	"self-insert",			/* U  */
	"self-insert",			/* V  */
	"self-insert",			/* W  */
	"self-insert",			/* X  */
	"self-insert",			/* Y  */
	"self-insert",			/* Z  */
	"self-insert",			/* [  */
	"self-insert",			/* \  */
	"paren-flash",			/* ]  */
	"self-insert",			/* ^  */
	"self-insert",			/* _  */
	"self-insert",			/* `  */
	"self-insert",			/* a  */
	"self-insert",			/* b  */
	"self-insert",			/* c  */
	"self-insert",			/* d  */
	"self-insert",			/* e  */
	"self-insert",			/* f  */
	"self-insert",			/* g  */
	"self-insert",			/* h  */
	"self-insert",			/* i  */
	"self-insert",			/* j  */
	"self-insert",			/* k  */
	"self-insert",			/* l  */
	"self-insert",			/* m  */
	"self-insert",			/* n  */
	"self-insert",			/* o  */
	"self-insert",			/* p  */
	"self-insert",			/* q  */
	"self-insert",			/* r  */
	"self-insert",			/* s  */
	"self-insert",			/* t  */
	"self-insert",			/* u  */
	"self-insert",			/* v  */
	"self-insert",			/* w  */
	"self-insert",			/* x  */
	"self-insert",			/* y  */
	"self-insert",			/* z  */
	"self-insert",			/* {  */
	"self-insert",			/* |  */
	"paren-flash",			/* }  */
	"self-insert",			/* ~  */
#ifdef ASCII
	"delete-previous-character"	/* ^? */
#else
	"delete-previous-character",	/* ^? */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
#ifdef IBMPC
	"prefix-3"				/* ALT- 255 */
#else
	"self-insert"
#endif	/* IBMPC */
#endif /* ASCII */
};

struct data_obj *pref1map[NCHARS] = {
	"set-mark",			/* ^@ */
	"unbound",			/* ^A */
	"backward-s-expression",	/* ^B */
	"unbound",			/* ^C */
	"down-list",			/* ^D */
	"unbound",			/* ^E */
	"forward-s-expression",		/* ^F */
	"unbound",			/* ^G */
	"unbound",			/* ^H */
	"unbound",			/* ^I */
	"unbound",			/* ^J */
	"kill-s-expression",		/* ^K */
	"clear-and-redraw",		/* ^L */
	"unbound",			/* ^M */
	"forward-list",			/* ^N */
	"unbound",			/* ^O */
	"backward-list",		/* ^P */
	"unbound",			/* ^Q */
	"unbound",			/* ^R */
	"unbound",			/* ^S */
	"unbound",			/* ^T */
	"backward-up-list",		/* ^U */
	"page-next-window",		/* ^V */
	"unbound",			/* ^W */
	"unbound",			/* ^X */
	"unbound",			/* ^Y */
	"unbound",			/* ^Z */
	"unbound",			/* ^[ */
	"unbound",			/* ^\ */
	"unbound",			/* ^] */
	"unbound",			/* ^^ */
	"unbound",			/* ^_ */
	"unbound",			/*    */
	"unbound",			/* !  */
	"unbound",			/* "  */
	"unbound",			/* #  */
	"unbound",			/* $  */
	"unbound",			/* %  */
	"unbound",			/* &  */
	"unbound",			/* '  */
	"unbound",			/* (  */
	"unbound",			/* )  */
	"unbound",			/* *  */
	"unbound",			/* +  */
	"beginning-of-window",		/* ,  */
	"digit",			/* -  */
	"end-of-window",		/* .  */
	"unbound",			/* /  */
	"digit",			/* 0  */
	"digit",			/* 1  */
	"digit",			/* 2  */
	"digit",			/* 3  */
	"digit",			/* 4  */
	"digit",			/* 5  */
	"digit",			/* 6  */
	"digit",			/* 7  */
	"digit",			/* 8  */
	"digit",			/* 9  */
	"unbound",			/* :  */
	"unbound",			/* ;  */
	"beginning-of-file",		/* <  */
	"unbound",			/* =  */
	"end-of-file",			/* >  */
	"describe-command",		/* ?  */
	"unbound",			/* @  */
	"backward-sentence",		/* A  */
	"backward-word",		/* B  */
	"case-word-capitalize",		/* C  */
	"kill-next-word",		/* D  */
	"forward-sentence",		/* E  */
	"forward-word",			/* F  */
	"goto-line",			/* G  */
	"unbound",			/* H  */
	"make-macro-interactive",	/* I  */
	"fill-paragraph",		/* J  */
	"kill-to-end-of-sentence",	/* K  */
	"case-word-lower",		/* L  */
	"first-non-blank",		/* M  */
	"unbound",			/* N  */
	"unbound",			/* O  */
	"unbound",			/* P  */
	"query-replace-string",		/* Q  */
	"replace-string",		/* R  */
	"unbound",			/* S  */
	"unbound",			/* T  */
	"case-word-upper",		/* U  */
	"previous-page",		/* V  */
	"copy-region",			/* W  */
	"execute-named-command",	/* X  */
	"yank-pop",			/* Y  */
	"scroll-down",			/* Z  */
	"backward-paragraph",		/* [  */
	"delete-white-space",		/* \  */
	"forward-paragraph",		/* ]  */
	"unbound",			/* ^  */
	"unbound",			/* _  */
	"unbound",			/* `  */
	"backward-sentence",		/* a  */
	"backward-word",		/* b  */
	"case-word-capitalize",		/* c  */
	"kill-next-word",		/* d  */
	"forward-sentence",		/* e  */
	"forward-word",			/* f  */
	"goto-line",			/* g  */
	"unbound",			/* h  */
	"make-macro-interactive",	/* i  */
	"fill-paragraph",		/* j  */
	"kill-to-end-of-sentence",	/* k  */
	"case-word-lower",		/* l  */
	"first-non-blank",		/* m  */
	"unbound",			/* n  */
	"unbound",			/* o  */
	"unbound",			/* p  */
	"query-replace-string",		/* q  */
	"replace-string",		/* r  */
	"unbound",			/* s  */
	"unbound",			/* t  */
	"case-word-upper",		/* u  */
	"previous-page",		/* v  */
	"copy-region",			/* w  */
	"execute-named-command",	/* x  */
	"yank-pop",			/* y  */
	"scroll-down",			/* z  */
	"unbound",			/* {  */
	"unbound",			/* |  */
	"unbound",			/* }  */
	"make-buffer-unmodified",	/* ~  */
#ifdef ASCII
	"kill-previous-word"		/* ^? */
#else /* IBMPC or MAC */
	"kill-previous-word",		/* ^H */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound"			/* ALT- or Option-	 */
#endif /* ASCII */
};

keymap	pref2map = {
	"unbound",			/* ^@ */
	"unbound",			/* ^A */
	"list-buffers",			/* ^B */
	"exit-jove",			/* ^C */
	"unbound",			/* ^D */
	"compile-it",			/* ^E */
	"find-file",			/* ^F */
	"unbound",			/* ^G */
	"unbound",			/* ^H */
	"insert-file",			/* ^I */
	"unbound",			/* ^J */
	"unbound",			/* ^K */
	"unbound",			/* ^L */
	"write-modified-files",		/* ^M */
	"next-error",			/* ^N */
	"delete-blank-lines",		/* ^O */
	"previous-error",		/* ^P */
	"unbound",			/* ^Q */
	"visit-file",			/* ^R */
	"save-file",			/* ^S */
	"transpose-lines",		/* ^T */
	"unbound",			/* ^U */
	"visit-file",			/* ^V */
	"write-file",			/* ^W */
	"exchange-point-and-mark",	/* ^X */
	"unbound",			/* ^Y */
	"unbound",			/* ^Z */
	"unbound",			/* ^[ */
	"save-file",			/* ^\ */
	"unbound",			/* ^] */
	"unbound",			/* ^^ */
	"unbound",			/* ^_ */
	"unbound",			/*    */
	"shell-command",		/* !  */
	"unbound",			/* "  */
	"unbound",			/* #  */
	"unbound",			/* $  */
	"unbound",			/* %  */
	"unbound",			/* &  */
	"unbound",			/* '  */
	"begin-kbd-macro",		/* (  */
	"end-kbd-macro",		/* )  */
	"unbound",			/* *  */
	"unbound",			/* +  */
	"unbound",			/* ,  */
	"unbound",			/* -  */
	"unbound",			/* .  */
	"unbound",			/* /  */
	"unbound",			/* 0  */
	"delete-other-windows",		/* 1  */
	"split-current-window",		/* 2  */
	"unbound",			/* 3  */
	"window-find",			/* 4  */
	"unbound",			/* 5  */
	"unbound",			/* 6  */
	"unbound",			/* 7  */
	"unbound",			/* 8  */
	"unbound",			/* 9  */
	"unbound",			/* :  */
	"unbound",			/* ;  */
	"unbound",			/* <  */
	"unbound",			/* =  */
	"unbound",			/* >  */
	"describe-key",			/* ?  */
	"unbound",			/* @  */
	"unbound",			/* A  */
	"select-buffer",		/* B  */
	"unbound",			/* C  */
	"delete-current-window",	/* D  */
	"execute-kbd-macro",		/* E  */
	"unbound",			/* F  */
	"unbound",			/* G  */
	"unbound",			/* H  */
	"unbound",			/* I  */
	"unbound",			/* J  */
	"delete-buffer",		/* K  */
	"unbound",			/* L  */
	"set-mark",			/* M */
	"next-window",			/* N  */
	"previous-window",		/* O  */
	"previous-window",		/* P  */
	"unbound",			/* Q  */
	"unbound",			/* R  */
	"save-file",		        /* S  */
	"find-tag",			/* T  */
	"unbound",			/* U  */
	"unbound",			/* V  */
	"unbound",			/* W  */
	"unbound",			/* X  */
	"unbound",			/* Y  */
	"unbound",			/* Z  */
	"unbound",			/* [  */
	"unbound",			/* \  */
	"unbound",			/* ]  */
	"grow-window",			/* ^  */
	"unbound",			/* _  */
	"unbound",			/* `  */
	"unbound",			/* a  */
	"select-buffer",		/* b  */
	"unbound",			/* c  */
	"delete-current-window",	/* d  */
	"execute-kbd-macro",		/* e  */
	"unbound",			/* f  */
	"unbound",			/* g  */
	"unbound",			/* h  */
	"unbound",			/* i  */
	"unbound",			/* j  */
	"delete-buffer",		/* k  */
	"unbound",			/* l  */
	"unbound",			/* m  */
	"next-window",			/* n  */
	"previous-window",		/* o  */
	"previous-window",		/* p  */
	"unbound",			/* q  */
	"unbound",			/* r  */
	"save-file",		/* s  */
	"find-tag",			/* t  */
	"unbound",			/* u  */
	"unbound",			/* v  */
	"unbound",			/* w  */
	"unbound",			/* x  */
	"unbound",			/* y  */
	"unbound",			/* z  */
	"unbound",			/* {  */
	"unbound",			/* |  */
	"unbound",			/* }  */
	"unbound",			/* ~  */
#ifdef ASCII
	"kill-to-beginning-of-sentence" /* ^? */
#else /* IBMPC or MAC */
	"kill-to-beginning-of-sentence",	/* ^? */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound"			/* ALT- or Option-	 */
#endif /* ASCII */
};

#ifndef IBMPC
keymap	miscmap = {0};
#else /* IBMPC */
keymap	miscmap = {
	"unbound",			/* 0 */
	"unbound",
	"unbound",
	"set-mark",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",			/*		10 */
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"query-replace-string",		/* alt q */
	"copy-region",			/* alt w */
	"forward-sentence",		/* alt e */
	"replace-string",		/* alt r */
	"unbound",			/* alt t	20 */
	"yank-pop",			/* alt y */
	"case-word-upper",		/* alt u */
	"make-macro-interactive",	/* alt i */
	"unbound",			/* alt o */
	"unbound",			/* alt p */
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"backward-sentence",		/* alt a	30 */
	"unbound",			/* alt s */
	"kill-next-word",		/* alt d */
	"forward-word",			/* alt f */
	"goto-line",			/* alt g */
	"unbound",			/* alt h */
	"fill-paragraph",		/* alt j */
	"kill-to-end-of-sentence",	/* alt k */
	"case-word-lower",		/* alt l */
	"unbound",
	"unbound",			/* F11		40 */
	"unbound",
	"unbound",
	"unbound",
	"scroll-down",			/* alt z */
	"execute-named-command",	/* alt x */
	"case-word-capitalize",		/* alt c */
	"previous-page",		/* alt v */
	"backward-word",		/* alt b */
	"unbound",			/* alt n */
	"first-non-blank",		/* alt m	50 */
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",			/* F1 */
	"unbound",			/* F2		60 */
	"unbound",			/* F3 */
	"unbound",			/* F4 */
	"unbound",			/* F5 */
	"unbound",			/* F6 */
	"unbound",			/* F7 */
	"unbound",			/* F8 */
	"unbound",			/* F9 */
	"unbound",			/* F10 */
	"unbound",
	"unbound",			/*		70 */
	"beginning-of-line",		/* Home */
	"previous-line",		/* Up	*/
	"previous-page",		/* PgUp */
	"unbound",
	"backward-character",		/* Left */
	"unbound",
	"forward-character",		/* Right*/
	"unbound",
	"end-of-line",			/* End	*/
	"next-line",			/* Down		80 */
	"next-page",			/* PgDn */
	"over-write-mode",		/* Ins	*/
	"delete-next-character",	/* Del	*/
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",			/*		90 */
	"unbound",
	"unbound",
	"unbound",
	"unbound",			/* ctrl F1 */
	"unbound",			/* ctlr F2 */
	"unbound",			/* ctrl F3 */
	"unbound",			/* ctrl F4 */
	"unbound",			/* ctrl F5 */
	"unbound",			/* ctrl F6 */
	"unbound",			/* ctrl F7	100 */
	"unbound",			/* ctrl F8 */
	"unbound",			/* ctrl F9 */
	"unbound",			/* ctrl F10*/
	"unbound",			/* alt	F1 */
	"unbound",			/* alt	F2 */
	"unbound",			/* alt	F3 */
	"unbound",			/* alt	F4 */
	"unbound",			/* alt	F5 */
	"unbound",			/* alt	F6 */
	"unbound",			/* alt	F7	110 */
	"unbound",			/* alt	F8 */
	"unbound",			/* alt	F9 */
	"unbound",			/* alt	F10*/
	"unbound",
	"backward-word",		/* ctrl Left */
	"forward-word",			/* ctrl Right */
	"end-of-file",			/* ctrl End */
	"next-window",			/* ctrl PgDn */
	"beginning-of-file",		/* ctrl Home */
	"select-buffer-1",		/* alt 1	120 */
	"select-buffer-2",		/* alt 2 */
	"select-buffer-3",		/* alt 3 */
	"select-buffer-4",		/* alt 4 */
	"select-buffer-5",		/* alt 5 */
	"select-buffer-6",		/* alt 6 */
	"select-buffer-7",		/* alt 7 */
	"select-buffer-8",		/* alt 8 */
	"select-buffer-9",		/* alt 9 */
	"select-buffer-10",		/* alt 0 */
	"unbound",			/* alt -	130 */
	"unbound",			/* alt = */
	"previous-window",		/* ctrl PgUp */
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound"
};
#endif /* IBMPC */
```
{% endraw %}

## MENUMAPS.TXT

{% raw %}
```
/************************************************************************
 * This program is Copyright (C) 1986 by Jonathan Payne.  JOVE is	*
 * provided to you without charge, and with no warranty.  You may give	*
 * away copies of JOVE, including sources, provided that this notice is *
 * included in all the files.						*
 ************************************************************************/

/* menumaps.txt K. Mitchum 1/88. The same warnings apply as in keymaps.txt.
   You MUST use a version of setmaps compiled with MAC defined for this
   file to be converted correctly. */


#include "jove.h"
#include "mac.h"
#MENU
data_obj MDIV = { STRING, "(-" };
data_obj MAJM = { STRING, "(Major Modes:" };
data_obj MINM = { STRING, "(Minor Modes:" };
data_obj BOOL = { STRING, "(Boolean:" };
data_obj DECM = { STRING, "(Decimal:" };
data_obj STRM = { STRING, "(String:" };
data_obj CHAR = { STRING, "(Character:" };
#define MENU_DIV &MDIV

struct menu Menus[NMENUS] = {
"File",101,0, {
	"visit-file",
	"find-file",
	"insert-file",
	MENU_DIV,
	"save-file",
	"write-file",
	MENU_DIV,
	"write-modified-files",
	"write-region",
	MENU_DIV,
	"write-macros-to-file",
	MENU_DIV,
	"exit-jove",
	0
},

"Buffer",103,0, {
	&MAJM,
	"c-mode",
	"fundamental-mode",
	"lisp-mode",
	"text-mode",
	&MINM,
	"auto-fill-mode",
	"auto-indent-mode",
	"over-write-mode",
	"show-match-mode",
	"word-abbrev-mode",
	MENU_DIV,
	0
},

"Window",104,0, {
	"grow-window",
	"shrink-window",
	MENU_DIV,
	"split-current-window",
	"delete-other-windows",
	"window-find",
	MENU_DIV,
	"number-lines-in-window",
	0
},

"Point",105,0, {
	"set-mark",
	"exchange-point-and-mark",
	MENU_DIV,
	"search-forward",
	"search-reverse",
	"i-search-forward",
	"i-search-reverse",
	"query-replace-string",
	"replace-string",
	MENU_DIV,
	"find-tag",
	0
},

"Command",106,0, {
	"begin-kbd-macro",
	"end-kbd-macro",
	"name-kbd-macro",
	"execute-kbd-macro",
	"execute-macro",
	MENU_DIV,
	"bind-macro-to-key",
	"bind-to-key",
	"describe-key",
	MENU_DIV,
	"execute-named-command",
	0
},

"Set",107,0, {
	&BOOL,
	"allow-bad-filenames",
	"auto-case-abbrev",
	"case-ignore-search",
	"files-should-end-with-newline",
	"macify",
	"make-backup-files",
	"marks-should-float",
	"match-regular-expressions",
	"send-typeout-to-buffer",
	"wrap-search",
	&DECM,
	"c-indentation-increment",
	"internal-tabstop",
	"left-margin",
	"mark-threshold",
	"paren-flash-delay",
	"right-margin",
	"scroll-step",
	"sync-frequency",
	&STRM,
	"comment-format",
	"mode-line",
	"tag-file",
	&CHAR,
	"abort-char",
	0
}
};

```
{% endraw %}

## KEYMAPS.TXT

{% raw %}
```
/***************************************************************************
 * This program is Copyright (C) 1986, 1987, 1988 by Jonathan Payne.  JOVE *
 * is provided to you without charge, and with no warranty.  You may give  *
 * away copies of JOVE, including sources, provided that this notice is    *
 * included in all the files.                                              *
 ***************************************************************************/

/* Warning:  You probably shouldn't put ifdefs anywhere *inside* the keymaps
   definitions.	 It'll screw up the stuff in comments (at least), and maybe
   a few other things.	Yes, it *WILL* screw up the comments ... but it's
   not clear that you care ... */

#include "jove.h"

keymap	mainmap = {
	"set-mark",			/* ^@ */
	"beginning-of-line",		/* ^A */
	"backward-character",		/* ^B */
	"unbound",			/* ^C */
	"delete-next-character",	/* ^D */
	"end-of-line",			/* ^E */
	"forward-character",		/* ^F */
	"unbound",			/* ^G */
	"delete-previous-character",	/* ^H */
	"handle-tab",			/* ^I */
	"newline-and-indent",		/* ^J */
	"kill-to-end-of-line",		/* ^K */
	"redraw-display",		/* ^L */
	"newline",			/* ^M */
	"next-line",			/* ^N */
	"newline-and-backup",		/* ^O */
	"previous-line",		/* ^P */
	"quoted-insert",		/* ^Q */
	"search-reverse",		/* ^R */
	"search-forward",		/* ^S */
	"transpose-characters",		/* ^T */
	"gather-numeric-argument",	/* ^U */
	"next-page",			/* ^V */
	"kill-region",			/* ^W */
	"prefix-2",			/* ^X */
	"yank",				/* ^Y */
	"scroll-up",			/* ^Z */
	"prefix-1",			/* ^[ */
	"search-forward",		/* ^\ */
#ifndef MSDOS
	"unbound",			/* ^] */
#else /* MSDOS */
	"find-tag-at-point",		/* ^] */
#endif /* MSDOS */
	"quoted-insert",		/* ^^ */
	"unbound",			/* ^_ */
	"self-insert",			/*    */
	"self-insert",			/* !  */
	"self-insert",			/* "  */
	"self-insert",			/* #  */
	"self-insert",			/* $  */
	"self-insert",			/* %  */
	"self-insert",			/* &  */
	"self-insert",			/* '  */
	"self-insert",			/* (  */
	"paren-flash",			/* )  */
	"self-insert",			/* *  */
	"self-insert",			/* +  */
	"self-insert",			/* ,  */
	"self-insert",			/* -  */
	"self-insert",			/* .  */
	"self-insert",			/* /  */
	"self-insert",			/* 0  */
	"self-insert",			/* 1  */
	"self-insert",			/* 2  */
	"self-insert",			/* 3  */
	"self-insert",			/* 4  */
	"self-insert",			/* 5  */
	"self-insert",			/* 6  */
	"self-insert",			/* 7  */
	"self-insert",			/* 8  */
	"self-insert",			/* 9  */
	"self-insert",			/* :  */
	"self-insert",			/* ;  */
	"self-insert",			/* <  */
	"self-insert",			/* =  */
	"self-insert",			/* >  */
	"self-insert",			/* ?  */
	"self-insert",			/* @  */
	"self-insert",			/* A  */
	"self-insert",			/* B  */
	"self-insert",			/* C  */
	"self-insert",			/* D  */
	"self-insert",			/* E  */
	"self-insert",			/* F  */
	"self-insert",			/* G  */
	"self-insert",			/* H  */
	"self-insert",			/* I  */
	"self-insert",			/* J  */
	"self-insert",			/* K  */
	"self-insert",			/* L  */
	"self-insert",			/* M  */
	"self-insert",			/* N  */
	"self-insert",			/* O  */
	"self-insert",			/* P  */
	"self-insert",			/* Q  */
	"self-insert",			/* R  */
	"self-insert",			/* S  */
	"self-insert",			/* T  */
	"self-insert",			/* U  */
	"self-insert",			/* V  */
	"self-insert",			/* W  */
	"self-insert",			/* X  */
	"self-insert",			/* Y  */
	"self-insert",			/* Z  */
	"self-insert",			/* [  */
	"self-insert",			/* \  */
	"paren-flash",			/* ]  */
	"self-insert",			/* ^  */
	"self-insert",			/* _  */
	"self-insert",			/* `  */
	"self-insert",			/* a  */
	"self-insert",			/* b  */
	"self-insert",			/* c  */
	"self-insert",			/* d  */
	"self-insert",			/* e  */
	"self-insert",			/* f  */
	"self-insert",			/* g  */
	"self-insert",			/* h  */
	"self-insert",			/* i  */
	"self-insert",			/* j  */
	"self-insert",			/* k  */
	"self-insert",			/* l  */
	"self-insert",			/* m  */
	"self-insert",			/* n  */
	"self-insert",			/* o  */
	"self-insert",			/* p  */
	"self-insert",			/* q  */
	"self-insert",			/* r  */
	"self-insert",			/* s  */
	"self-insert",			/* t  */
	"self-insert",			/* u  */
	"self-insert",			/* v  */
	"self-insert",			/* w  */
	"self-insert",			/* x  */
	"self-insert",			/* y  */
	"self-insert",			/* z  */
	"self-insert",			/* {  */
	"self-insert",			/* |  */
	"paren-flash",			/* }  */
	"self-insert",			/* ~  */
#ifdef ASCII
	"delete-previous-character"	/* ^? */
#else
	"delete-previous-character",	/* ^? */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
	"self-insert",			/* ALT- or Option-	 */
#ifdef IBMPC
	"prefix-3"				/* ALT- 255 */
#else
	"self-insert"
#endif	/* IBMPC */
#endif /* ASCII */
};

struct data_obj *pref1map[NCHARS] = {
	"set-mark",			/* ^@ */
	"unbound",			/* ^A */
	"backward-s-expression",	/* ^B */
	"unbound",			/* ^C */
	"down-list",			/* ^D */
	"unbound",			/* ^E */
	"forward-s-expression",		/* ^F */
	"unbound",			/* ^G */
	"unbound",			/* ^H */
	"unbound",			/* ^I */
	"unbound",			/* ^J */
	"kill-s-expression",		/* ^K */
	"clear-and-redraw",		/* ^L */
	"unbound",			/* ^M */
	"forward-list",			/* ^N */
	"unbound",			/* ^O */
	"backward-list",		/* ^P */
	"unbound",			/* ^Q */
	"unbound",			/* ^R */
	"unbound",			/* ^S */
	"unbound",			/* ^T */
	"backward-up-list",		/* ^U */
	"page-next-window",		/* ^V */
	"unbound",			/* ^W */
	"unbound",			/* ^X */
	"unbound",			/* ^Y */
	"unbound",			/* ^Z */
	"unbound",			/* ^[ */
	"unbound",			/* ^\ */
	"unbound",			/* ^] */
	"unbound",			/* ^^ */
	"unbound",			/* ^_ */
	"unbound",			/*    */
	"unbound",			/* !  */
	"unbound",			/* "  */
	"unbound",			/* #  */
	"unbound",			/* $  */
	"unbound",			/* %  */
	"unbound",			/* &  */
	"unbound",			/* '  */
	"unbound",			/* (  */
	"unbound",			/* )  */
	"unbound",			/* *  */
	"unbound",			/* +  */
	"beginning-of-window",		/* ,  */
	"digit",			/* -  */
	"end-of-window",		/* .  */
	"unbound",			/* /  */
	"digit",			/* 0  */
	"digit",			/* 1  */
	"digit",			/* 2  */
	"digit",			/* 3  */
	"digit",			/* 4  */
	"digit",			/* 5  */
	"digit",			/* 6  */
	"digit",			/* 7  */
	"digit",			/* 8  */
	"digit",			/* 9  */
	"unbound",			/* :  */
	"unbound",			/* ;  */
	"beginning-of-file",		/* <  */
	"unbound",			/* =  */
	"end-of-file",			/* >  */
	"describe-command",		/* ?  */
	"unbound",			/* @  */
	"backward-sentence",		/* A  */
	"backward-word",		/* B  */
	"case-word-capitalize",		/* C  */
	"kill-next-word",		/* D  */
	"forward-sentence",		/* E  */
	"forward-word",			/* F  */
	"goto-line",			/* G  */
	"unbound",			/* H  */
	"make-macro-interactive",	/* I  */
	"fill-paragraph",		/* J  */
	"kill-to-end-of-sentence",	/* K  */
	"case-word-lower",		/* L  */
	"first-non-blank",		/* M  */
	"unbound",			/* N  */
	"unbound",			/* O  */
	"unbound",			/* P  */
	"query-replace-string",		/* Q  */
	"replace-string",		/* R  */
	"unbound",			/* S  */
	"unbound",			/* T  */
	"case-word-upper",		/* U  */
	"previous-page",		/* V  */
	"copy-region",			/* W  */
	"execute-named-command",	/* X  */
	"yank-pop",			/* Y  */
	"scroll-down",			/* Z  */
	"backward-paragraph",		/* [  */
	"delete-white-space",		/* \  */
	"forward-paragraph",		/* ]  */
	"unbound",			/* ^  */
	"unbound",			/* _  */
	"unbound",			/* `  */
	"backward-sentence",		/* a  */
	"backward-word",		/* b  */
	"case-word-capitalize",		/* c  */
	"kill-next-word",		/* d  */
	"forward-sentence",		/* e  */
	"forward-word",			/* f  */
	"goto-line",			/* g  */
	"unbound",			/* h  */
	"make-macro-interactive",	/* i  */
	"fill-paragraph",		/* j  */
	"kill-to-end-of-sentence",	/* k  */
	"case-word-lower",		/* l  */
	"first-non-blank",		/* m  */
	"unbound",			/* n  */
	"unbound",			/* o  */
	"unbound",			/* p  */
	"query-replace-string",		/* q  */
	"replace-string",		/* r  */
	"unbound",			/* s  */
	"unbound",			/* t  */
	"case-word-upper",		/* u  */
	"previous-page",		/* v  */
	"copy-region",			/* w  */
	"execute-named-command",	/* x  */
	"yank-pop",			/* y  */
	"scroll-down",			/* z  */
	"unbound",			/* {  */
	"unbound",			/* |  */
	"unbound",			/* }  */
	"make-buffer-unmodified",	/* ~  */
#ifdef ASCII
	"kill-previous-word"		/* ^? */
#else /* IBMPC or MAC */
	"kill-previous-word",		/* ^H */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound"			/* ALT- or Option-	 */
#endif /* ASCII */
};

keymap	pref2map = {
	"unbound",			/* ^@ */
	"unbound",			/* ^A */
	"list-buffers",			/* ^B */
	"exit-jove",			/* ^C */
	"unbound",			/* ^D */
	"compile-it",			/* ^E */
	"find-file",			/* ^F */
	"unbound",			/* ^G */
	"unbound",			/* ^H */
	"insert-file",			/* ^I */
	"unbound",			/* ^J */
	"unbound",			/* ^K */
	"unbound",			/* ^L */
	"write-modified-files",		/* ^M */
	"next-error",			/* ^N */
	"delete-blank-lines",		/* ^O */
	"previous-error",		/* ^P */
	"unbound",			/* ^Q */
	"visit-file",			/* ^R */
	"save-file",			/* ^S */
	"transpose-lines",		/* ^T */
	"unbound",			/* ^U */
	"visit-file",			/* ^V */
	"write-file",			/* ^W */
	"exchange-point-and-mark",	/* ^X */
	"unbound",			/* ^Y */
	"unbound",			/* ^Z */
	"unbound",			/* ^[ */
	"save-file",			/* ^\ */
	"unbound",			/* ^] */
	"unbound",			/* ^^ */
	"unbound",			/* ^_ */
	"unbound",			/*    */
	"shell-command",		/* !  */
	"unbound",			/* "  */
	"unbound",			/* #  */
	"unbound",			/* $  */
	"unbound",			/* %  */
	"unbound",			/* &  */
	"unbound",			/* '  */
	"begin-kbd-macro",		/* (  */
	"end-kbd-macro",		/* )  */
	"unbound",			/* *  */
	"unbound",			/* +  */
	"unbound",			/* ,  */
	"unbound",			/* -  */
	"unbound",			/* .  */
	"unbound",			/* /  */
	"unbound",			/* 0  */
	"delete-other-windows",		/* 1  */
	"split-current-window",		/* 2  */
	"unbound",			/* 3  */
	"window-find",			/* 4  */
	"unbound",			/* 5  */
	"unbound",			/* 6  */
	"unbound",			/* 7  */
	"unbound",			/* 8  */
	"unbound",			/* 9  */
	"unbound",			/* :  */
	"unbound",			/* ;  */
	"unbound",			/* <  */
	"unbound",			/* =  */
	"unbound",			/* >  */
	"describe-key",			/* ?  */
	"unbound",			/* @  */
	"unbound",			/* A  */
	"select-buffer",		/* B  */
	"unbound",			/* C  */
	"delete-current-window",	/* D  */
	"execute-kbd-macro",		/* E  */
	"unbound",			/* F  */
	"unbound",			/* G  */
	"unbound",			/* H  */
	"unbound",			/* I  */
	"unbound",			/* J  */
	"delete-buffer",		/* K  */
	"unbound",			/* L  */
	"set-mark",			/* M */
	"next-window",			/* N  */
	"previous-window",		/* O  */
	"previous-window",		/* P  */
	"unbound",			/* Q  */
	"unbound",			/* R  */
	"save-file",		        /* S  */
	"find-tag",			/* T  */
	"unbound",			/* U  */
	"unbound",			/* V  */
	"unbound",			/* W  */
	"unbound",			/* X  */
	"unbound",			/* Y  */
	"unbound",			/* Z  */
	"unbound",			/* [  */
	"unbound",			/* \  */
	"unbound",			/* ]  */
	"grow-window",			/* ^  */
	"unbound",			/* _  */
	"unbound",			/* `  */
	"unbound",			/* a  */
	"select-buffer",		/* b  */
	"unbound",			/* c  */
	"delete-current-window",	/* d  */
	"execute-kbd-macro",		/* e  */
	"unbound",			/* f  */
	"unbound",			/* g  */
	"unbound",			/* h  */
	"unbound",			/* i  */
	"unbound",			/* j  */
	"delete-buffer",		/* k  */
	"unbound",			/* l  */
	"unbound",			/* m  */
	"next-window",			/* n  */
	"previous-window",		/* o  */
	"previous-window",		/* p  */
	"unbound",			/* q  */
	"unbound",			/* r  */
	"save-file",		/* s  */
	"find-tag",			/* t  */
	"unbound",			/* u  */
	"unbound",			/* v  */
	"unbound",			/* w  */
	"unbound",			/* x  */
	"unbound",			/* y  */
	"unbound",			/* z  */
	"unbound",			/* {  */
	"unbound",			/* |  */
	"unbound",			/* }  */
	"unbound",			/* ~  */
#ifdef ASCII
	"kill-to-beginning-of-sentence" /* ^? */
#else /* IBMPC or MAC */
	"kill-to-beginning-of-sentence",	/* ^? */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound",			/* ALT- or Option-	 */
	"unbound"			/* ALT- or Option-	 */
#endif /* ASCII */
};

#ifndef IBMPC
keymap	miscmap = {0};
#else /* IBMPC */
keymap	miscmap = {
	"unbound",			/* 0 */
	"unbound",
	"unbound",
	"set-mark",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",			/*		10 */
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"query-replace-string",		/* alt q */
	"copy-region",			/* alt w */
	"forward-sentence",		/* alt e */
	"replace-string",		/* alt r */
	"unbound",			/* alt t	20 */
	"yank-pop",			/* alt y */
	"case-word-upper",		/* alt u */
	"make-macro-interactive",	/* alt i */
	"unbound",			/* alt o */
	"unbound",			/* alt p */
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"backward-sentence",		/* alt a	30 */
	"unbound",			/* alt s */
	"kill-next-word",		/* alt d */
	"forward-word",			/* alt f */
	"goto-line",			/* alt g */
	"unbound",			/* alt h */
	"fill-paragraph",		/* alt j */
	"kill-to-end-of-sentence",	/* alt k */
	"case-word-lower",		/* alt l */
	"unbound",
	"unbound",			/* F11		40 */
	"unbound",
	"unbound",
	"unbound",
	"scroll-down",			/* alt z */
	"execute-named-command",	/* alt x */
	"case-word-capitalize",		/* alt c */
	"previous-page",		/* alt v */
	"backward-word",		/* alt b */
	"unbound",			/* alt n */
	"first-non-blank",		/* alt m	50 */
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",			/* F1 */
	"unbound",			/* F2		60 */
	"unbound",			/* F3 */
	"unbound",			/* F4 */
	"unbound",			/* F5 */
	"unbound",			/* F6 */
	"unbound",			/* F7 */
	"unbound",			/* F8 */
	"unbound",			/* F9 */
	"unbound",			/* F10 */
	"unbound",
	"unbound",			/*		70 */
	"beginning-of-line",		/* Home */
	"previous-line",		/* Up	*/
	"previous-page",		/* PgUp */
	"unbound",
	"backward-character",		/* Left */
	"unbound",
	"forward-character",		/* Right*/
	"unbound",
	"end-of-line",			/* End	*/
	"next-line",			/* Down		80 */
	"next-page",			/* PgDn */
	"over-write-mode",		/* Ins	*/
	"delete-next-character",	/* Del	*/
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",			/*		90 */
	"unbound",
	"unbound",
	"unbound",
	"unbound",			/* ctrl F1 */
	"unbound",			/* ctlr F2 */
	"unbound",			/* ctrl F3 */
	"unbound",			/* ctrl F4 */
	"unbound",			/* ctrl F5 */
	"unbound",			/* ctrl F6 */
	"unbound",			/* ctrl F7	100 */
	"unbound",			/* ctrl F8 */
	"unbound",			/* ctrl F9 */
	"unbound",			/* ctrl F10*/
	"unbound",			/* alt	F1 */
	"unbound",			/* alt	F2 */
	"unbound",			/* alt	F3 */
	"unbound",			/* alt	F4 */
	"unbound",			/* alt	F5 */
	"unbound",			/* alt	F6 */
	"unbound",			/* alt	F7	110 */
	"unbound",			/* alt	F8 */
	"unbound",			/* alt	F9 */
	"unbound",			/* alt	F10*/
	"unbound",
	"backward-word",		/* ctrl Left */
	"forward-word",			/* ctrl Right */
	"end-of-file",			/* ctrl End */
	"next-window",			/* ctrl PgDn */
	"beginning-of-file",		/* ctrl Home */
	"select-buffer-1",		/* alt 1	120 */
	"select-buffer-2",		/* alt 2 */
	"select-buffer-3",		/* alt 3 */
	"select-buffer-4",		/* alt 4 */
	"select-buffer-5",		/* alt 5 */
	"select-buffer-6",		/* alt 6 */
	"select-buffer-7",		/* alt 7 */
	"select-buffer-8",		/* alt 8 */
	"select-buffer-9",		/* alt 9 */
	"select-buffer-10",		/* alt 0 */
	"unbound",			/* alt -	130 */
	"unbound",			/* alt = */
	"previous-window",		/* ctrl PgUp */
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound",
	"unbound"
};
#endif /* IBMPC */
```
{% endraw %}

## MENUMAPS.TXT

{% raw %}
```
/************************************************************************
 * This program is Copyright (C) 1986 by Jonathan Payne.  JOVE is	*
 * provided to you without charge, and with no warranty.  You may give	*
 * away copies of JOVE, including sources, provided that this notice is *
 * included in all the files.						*
 ************************************************************************/

/* menumaps.txt K. Mitchum 1/88. The same warnings apply as in keymaps.txt.
   You MUST use a version of setmaps compiled with MAC defined for this
   file to be converted correctly. */


#include "jove.h"
#include "mac.h"
#MENU
data_obj MDIV = { STRING, "(-" };
data_obj MAJM = { STRING, "(Major Modes:" };
data_obj MINM = { STRING, "(Minor Modes:" };
data_obj BOOL = { STRING, "(Boolean:" };
data_obj DECM = { STRING, "(Decimal:" };
data_obj STRM = { STRING, "(String:" };
data_obj CHAR = { STRING, "(Character:" };
#define MENU_DIV &MDIV

struct menu Menus[NMENUS] = {
"File",101,0, {
	"visit-file",
	"find-file",
	"insert-file",
	MENU_DIV,
	"save-file",
	"write-file",
	MENU_DIV,
	"write-modified-files",
	"write-region",
	MENU_DIV,
	"write-macros-to-file",
	MENU_DIV,
	"exit-jove",
	0
},

"Buffer",103,0, {
	&MAJM,
	"c-mode",
	"fundamental-mode",
	"lisp-mode",
	"text-mode",
	&MINM,
	"auto-fill-mode",
	"auto-indent-mode",
	"over-write-mode",
	"show-match-mode",
	"word-abbrev-mode",
	MENU_DIV,
	0
},

"Window",104,0, {
	"grow-window",
	"shrink-window",
	MENU_DIV,
	"split-current-window",
	"delete-other-windows",
	"window-find",
	MENU_DIV,
	"number-lines-in-window",
	0
},

"Point",105,0, {
	"set-mark",
	"exchange-point-and-mark",
	MENU_DIV,
	"search-forward",
	"search-reverse",
	"i-search-forward",
	"i-search-reverse",
	"query-replace-string",
	"replace-string",
	MENU_DIV,
	"find-tag",
	0
},

"Command",106,0, {
	"begin-kbd-macro",
	"end-kbd-macro",
	"name-kbd-macro",
	"execute-kbd-macro",
	"execute-macro",
	MENU_DIV,
	"bind-macro-to-key",
	"bind-to-key",
	"describe-key",
	MENU_DIV,
	"execute-named-command",
	0
},

"Set",107,0, {
	&BOOL,
	"allow-bad-filenames",
	"auto-case-abbrev",
	"case-ignore-search",
	"files-should-end-with-newline",
	"macify",
	"make-backup-files",
	"marks-should-float",
	"match-regular-expressions",
	"send-typeout-to-buffer",
	"wrap-search",
	&DECM,
	"c-indentation-increment",
	"internal-tabstop",
	"left-margin",
	"mark-threshold",
	"paren-flash-delay",
	"right-margin",
	"scroll-step",
	"sync-frequency",
	&STRM,
	"comment-format",
	"mode-line",
	"tag-file",
	&CHAR,
	"abort-char",
	0
}
};

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1430

     Volume in drive A has no label
     Directory of A:\

    COMPRESS EXE     19945  11-11-87  11:50p
    COMPRESS MAN      8074   7-21-87   8:24p
    CONTENTS          1510   5-19-88  11:25p
    FILE1430 TXT       911   6-01-89   4:16p
    DOC          <DIR>    
    SRC          <DIR>    
            6 file(s)      30440 bytes

     Directory of A:\DOC

    .            <DIR>    
    ..           <DIR>    
    CMDSDOC  NR        270   5-18-88  11:49p
    EXAMPLE  RC        739   5-18-88  11:49p
    JOVE     1XZ     18293   5-18-88  11:49p
    JOVE     2XZ     17194   5-18-88  11:49p
    JOVE     3XZ      6653   5-18-88  11:49p
    JOVE     4XZ     18184   5-18-88  11:49p
    JOVE     5XZ     15997   5-18-88  11:49p
    JOVE     DXZ     84391   5-18-88  11:49p
    JOVE     NXZ      6204   5-18-88  11:49p
    README             312   5-18-88  11:49p
    SYSTEM   RC        385   5-18-88  11:49p
    JOVE     QXZ      3040   5-18-88  11:49p
    TEACHJOV NR        748   5-18-88  11:49p
    TEACH-JO Z       18291   5-18-88  11:49p
           16 file(s)     190701 bytes

     Directory of A:\SRC

    .            <DIR>    
    ..           <DIR>    
    EXTERNS  HXZ      8956   5-04-88  10:34p
    JOVE     HXZ      8489   5-04-88  10:45p
    REC      HXZ       525   5-04-88  10:30p
    TABLE    HXZ       521   5-04-88  10:30p
    TEMP     HXZ      2210   5-04-88  10:30p
    TERMCAP  HXZ      1246   5-04-88  10:30p
    TUNE     HXZ      2645   5-04-88  10:39p
    MAKEFILE DOS      1946   5-04-88  10:29p
    MENUMAPS TXT      2670   5-04-88  10:30p
    MJOVERS  HQX      1124   5-04-88  10:30p
    TUNE     DOS       890   5-04-88  10:30p
    TUNE     TEM      1067   5-04-88  10:30p
    IO       HXZ       948   5-04-88  10:30p
    RE       HXZ       541   5-04-88  10:30p
    COMP     BAT      1020   5-18-88  11:25p
    CTYPE    HXZ       926   5-04-88  10:30p
    MAC      HXZ      2611   5-04-88  10:38p
    OVMAKEFI Z        3563   5-04-88  10:41p
    README   DXZ      5800   5-04-88  10:42p
    README   Z        4885   5-04-88  10:42p
    README   MXZ      8879   5-04-88  10:45p
    COMPILE  BAT      1830   5-12-88  11:35p
    DECOMP   BAT      1305   5-18-88  11:25p
    KEYMAPS  TXT     31866   5-06-88   7:39a
    LOAD     LST       495   5-06-88   8:07a
    LOAD     BAT        16   5-12-88  10:49p
    MAKEFILE Z        4586   5-04-88  10:41p
           29 file(s)     101560 bytes

    Total files listed:
           51 file(s)     322701 bytes
                           17408 bytes free
