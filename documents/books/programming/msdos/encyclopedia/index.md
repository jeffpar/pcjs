---
layout: page
title: The MS-DOS Encyclopedia (1988)
permalink: /documents/books/programming/msdos/encyclopedia/
redirect_from:
  - /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/
  - /pubs/pc/reference/microsoft/mspl13/msdos/encyc/
---

### Links

  - [Contents](#contents)
  - [Foreword](foreword/) by Bill Gates
  - [Preface](preface/) by Ray Duncan
  - [Introduction](introduction/)
  - [Section I: The Development of MS-DOS](section1/)
  - [Section II: Programming in the MS-DOS Environment](section2/)
  - [Section III: User Commands](section3/)
  - [Section IV: Programming Utilities](section4/)
  - [Section V: System Calls](section5/)
  - [Appendix A: MS-DOS Version 3.3](appendix-a/)
  - [Appendix B: Critical Error Codes](appendix-b/)
  - [Appendix C: Extended Error Codes](appendix-c/)
  - [Appendix D: ASCII and IBM Extended ASCII Character Sets](appendix-d/)
  - [Appendix E: EBCDIC Character Set](appendix-e/)
  - [Appendix F: ANSI.SYS Key and Extended Key Codes](appendix-f/)
  - [Appendix G: File Control Block (FCB) Structure](appendix-g/)
  - [Appendix H: Program Segment Prefix (PSP) Structure](appendix-h/)
  - [Appendix I: 8086/8088/80286/80386 Instruction Sets](appendix-i/)
  - [Appendix J: Common MS-DOS Filename Extensions](appendix-j/)
  - [Appendix K: Segmented (New) .EXE File Header Format](appendix-k/)
  - [Appendix L: Intel Hexadecimal Object File Format](appendix-l/)
  - [Appendix M: 8086/8088 Software Compatibility Issues](appendix-m/)
  - [Appendix N: An Object Module Dump Utility](appendix-n/)
  - [Appendix O: IBM PC BIOS Calls](appendix-o/)
  - [Figures](figures/)
  - [Indexes](indexes/)

### Contents

    THE MS-DOS(R) ENCYCLOPEDIA



    ───────────────────────────────────────────────────────────────────────────


    Ray Duncan, General Editor

    Foreword by Bill Gates





    Published by
    Microsoft Press
    A Division of Microsoft Corporation
    16011 NE 36th Way, Box 97017, Redmond, Washington 98073-9717
    Copyright (C) 1988 by Microsoft Press
    All rights reserved. No part of the contents of this book may be reproduced
    or transmitted in any form or by any means without the written permission
    of the publisher.

    Library of Congress Cataloging in Publication Data

    The MS-DOS encyclopedia : versions 1.0 through 3.2 /
        editor, Ray Duncan.
        p.     cm.
    Includes indexes.
    ISBN 1-55615-049-0
    1. MS-DOS (Computer operating system)  I. Duncan, Ray, 1952-
    II. Microsoft Press.
    QA76.76.063M74      1988    87-21452
    005.4'46--dc19                   CIP

    Printed and bound in the United States of America.

    1 2 3 4 5 6 7 8 9 RMRM 8 9 0 9 8 7

    Distributed to the book trade in the United States by Harper & Row.

    Distributed to the book trade in Canada by General Publishing Company, Ltd.

    Distributed to the book trade outside the
    United States and Canada by Penguin Books Ltd.

    Penguin Books Ltd., Harmondsworth, Middlesex, England
    Penguin Books Australia Ltd., Ringwood, Victoria, Australia

    British Cataloging in Publication Data available


    IBM(R), IBM AT(R), PS/2(R), and TopView(R) are registered trademarks of
    International Business Machines Corporation. GW-BASIC(R), Microsoft(R),
    MS(R), MS-DOS(R), SOFTCARD(R), and XENIX(R) are registered trademarks of
    Microsoft Corporation.

    Microsoft Press gratefully acknowledges permission to reproduce material
    listed below.
    Page 4: Courtesy The Computer Museum.
    Pages 5, 11, 42: Intel 4004, 8008, 8080, 8086, and 80286 microprocessor
    photographs. Courtesy Intel Corporation.
    Page 6: Reprinted from Popular Electronics, January 1975
    Copyright (C) 1975 Ziff Communications Company.
    Page 13: Reprinted with permission of Rod Brock.
    Page 16: Reprinted with permission of The Seattle Times Copyright (C) 1983.
    Pages 19, 34, 42: IBM PC advertisements and photographs of the PC, PC/XT,
    and PC/AT reproduced with permission of International Business Machines
    Corporation Copyright (C) 1981, 1982, 1984. All rights reserved.
    Page 21: "Big IBM's Little Computer" Copyright (C) 1981 by The New York
    Times Company. Reprinted by permission.
    "IBM Announces New Microcomputer System" Reprinted with permission of
    InfoWorld Copyright (C) 1981.
    "IBM really gets personal" Reprinted with permission of Personal Computing
    Copyright (C) 1981.
    "Personal Computer from IBM" Reprinted from DATAMATION Magazine, October
    1981 Copyright (C) by Cahners Publishing Company.
    "IBM's New Line Likely to Shake up the Market for Personal Computers"
    Reprinted by permission of The Wall Street Journal Copyright (C) Dow Jones
    & Company, Inc. 1981. All Rights Reserved.
    Page 36: "Irresistible DOS 3.0" and "The Ascent of DOS" Reprinted from
    PC Tech Journal, December 1984 and October 1986. Copyright (C) 1984, 1986
    Ziff Communications Company.
    "MS-DOS 2.00: A Hands-On Tutorial" Reprinted by permission of PC World from
    Volume 1, Issue 3, March 1983, published at 501 Second Street, Suite 600,
    San Francisco, CA 94107.

    Special thanks to Bob O'Rear, Aaron Reynolds, and Kenichi Ikeda.



    Encyclopedia Staff


    Editor-in-Chief:  Susan Lammers

    Editorial Director:  Patricia Pratt

    Senior Editor:  Dorothy L. Shattuck

    Senior Technical Editor:  David L. Rygmyr

    Special Projects Editor:  Sally A. Brunsman

    Editorial Coordinator:  Sarah Hersack


    Associate Editors and Technical Editors: Pamela Beason, Ann
    Becherer, Bob Combs, Michael Halvorson, Jeff Hinsch, Dean Holmes, Chris
    Kinata, Gary Masters, Claudette Moore, Steve Ross, Roger Shanafelt, Eric
    Stroo, Lee Thomas, JoAnne Woodcock

    Copy Chief:  Brianna Morgan. Proofreaders: Kathleen Atkins,
    Julie Carter, Elizabeth Eisenhood, Matthew Eliot, Patrick Forgette, Alex
    Hancock, Richard Isomaki, Shawn Peck, Alice Copp Smith

    Editorial Assistants:  Wallis Bolz, Charles Brod, Stephen
    Brown, Pat Erickson, Debbie Kem, Susanne McRhoton, Vihn Nguyen, Cheryl
    VanGeystel

    Index:  Shane-Armstrong Information Services

    Production:  Larry Anderson, Jane Bennett, Rick Bourgoin,
    Darcie S. Furlan, Nick Gregoric, Peggy Herman, Lisa Iversen, Rebecca
    Johnson, Ruth Pettis, Russell Steele, Jean Trenary, Joy Ulskey

    Marketing and Sales Director:  James Brown

    Director of Production:  Christopher D. Banks

    Publisher:  Min S. Yee





    Contributors


        Ray Duncan, General Editor   Duncan received a B.A. in Chemistry from
        the University of California, Riverside, and an M.D. from the
        University of California, Los Angeles, and subsequently received
        specialized training in Pediatrics and Neonatology at the Cedars-Sinai
        Medical Center in Los Angeles. He has written many articles for
        personal computing magazines, including BYTE, PC Magazine, Dr. Dobb's
        Journal, and Softalk/PC, and is the author of the Microsoft Press book
        Advanced MS-DOS. He is the founder of Laboratory Microsystems
        Incorporated, a software house specializing in FORTH interpreters and
        compilers.

        Steve Bostwick   Bostwick holds a B.S. in Physics from the University
        of California, Los Angeles, and has over 20 years' experience in
        scientific and commercial data processing. He is president of Query
        Computing Systems, Inc., a software firm specializing in the creation
        of systems for applications that interface microcomputers with
        specialized hardware. He is also an instructor for the UCLA Extension
        Department of Engineering and Science and helped design their popular
        Microprocessor Hardware and Software Engineering Certificate Program.

        Keith Burgoyne   Born and raised in Orange County, California,
        Burgoyne began programming in 1974 on IBM 370 mainframes. In 1979, he
        began developing microcomputer products for Apples, TRS-80s, Ataris,
        Commodores, and IBM PCs. He is presently Senior Systems Engineer at
        Local Data of Torrance, California, which is a major producer of IBM
        3174/3274 and System 3X protocol conversion products. His previous
        writing credits include numerous user manuals and tutorials.

        Robert A. Byers   Byers is the author of the bestselling Everyman's
        Database Primer. He is presently involved with the Emerald Bay
        database project with RSPI and Migent, Inc.

        Thom Hogan   During 11 years working with personal computers, Hogan
        has been a software developer, a programmer, a technical writer, a
        marketing manager, and a lecturer. He has written six books, numerous
        magazine articles, and four manuals. Hogan is the author of the
        forthcoming Microsoft Press book PC Programmer's Sourcebook.

        Jim Kyle   Kyle has 23 years' experience in computing. Since 1967, he
        has been a systems programmer with strong telecommunications
        orientation. His interest in microcomputers dates from 1975. He is
        currently MIS Administrator for BTI Systems, Inc., the OEM Division of
        BanTec Inc., manufacturers of MICR equipment for the banking
        industry. He has written 14 books and numerous magazine articles
        (mostly on ham radio and hobby electronics) and has been primary Forum
        Administrator for Computer Language Magazine's CLMFORUM on CompuServe
        since early 1985.

        Gordon Letwin   Letwin is Chief Architect, Systems Software, Microsoft
        Corporation. He is the author of Inside OS/2, published by Microsoft
        Press.

        Charles Petzold   Petzold holds an M.S. in Mathematics from Stevens
        Institute of Technology. Before launching his writing career, he
        worked 10 years in the insurance industry, programming and teaching
        programming on IBM mainframes and PCs. He is the author of the
        Microsoft Press book Programming Windows 2.0, a contributing editor to
        PC Magazine, and a frequent contributor to the Microsoft Systems
        Journal.

        Chip Rabinowitz   Rabinowitz has been a programmer for 11 years. He is
        presently chief programmer for Productivity Solutions, a microcomputer
        consulting firm based in Pennsylvania, and has been Forum
        Administrator for the CompuServe MICROSOFT SIG since 1986.

        Jim Tomlin   Tomlin holds a B.S. and an M.S. in Mathematics. He has
        programmed at Boeing, Microsoft, and Opcon and has taught at Seattle
        Pacific University. He now heads his own company in Seattle, which
        specializes in PC systems programming and industrial machine vision
        applications.

        Richard Wilton   Wilton has programmed extensively in PL/1, FORTRAN,
        FORTH, C, and several assembly languages. He is the author of
        Programmer's Guide to PC & PS/2 Video Systems, published by Microsoft
        Press.

        Van Wolverton   A professional writer since 1963, Wolverton has had
        bylines as a newspaper reporter, editorial writer, political
        columnist, and technical writer. He is the author of Running MS-DOS
        and Supercharging MS-DOS, both published by Microsoft Press.

        William Wong   Wong holds engineering and computer science degrees
        from Georgia Tech and Rutgers University. He is director of PC Labs
        and president of Logic Fusion, Inc. His interests include operating
        systems, computer languages, and artificial intelligence. He has
        written numerous magazine articles and a book on MS-DOS.

        JoAnne Woodcock   Woodcock, a former senior editor at Microsoft Press,
        has been a writer for Encyclopaedia Britannica and a freelance and
        project editor on marine biological studies at the University of
        Southern California. She is co-editor (with Michael Halvorson) of
        XENIX at Work and co-author (with Peter Rinearson) of Microsoft Word
        Style Sheets, both published by Microsoft Press.

    Special Technical Advisor
        Mark Zbikowski

    Technical Advisors

    Paul Allen        Michael Geary     David Melin         John Pollock
    Steve Ballmer     Bob Griffin       Charles Mergentime  Aaron Reynolds
    Reuben Borman     Doug Hogarth      Randy Nevin         Darryl Rubin
    Rob Bowman        James W. Johnson  Dan Newell          Ralph Ryan
    John Butler       Kaamel Kermaani   Tani Newell         Karl Schulmeisters
    Chuck Carroll     Adrian King       David Norris        Rajen Shah
    Mark Chamberlain  Reed Koch         Mike O'Leary        Barry Shaw
    David Chell       James Landowski   Bob O'Rear          Anthony Short
    Mike Colee        Chris Larson      Mike Olsson         Ben Slivka
    Mike Courtney     Thomas Lennon     Larry Osterman      Jon Smirl
    Mike Dryfoos      Dan Lipkie        Ridge Ostling       Betty Stillmaker
    Rachel Duncan     Marc McDonald     Sunil Pai           John Stoddard
    Kurt Eckhardt     Bruce McKinney    Tim Paterson        Dennis Tillman
    Eric Evans        Pascal Martin     Gary Perez          Greg Whitten
    Rick Farmer       Estelle Mathers   Chris Peters        Natalie Yount
    Bill Gates        Bob Matthews      Charles Petzold     Steve Zeck





    CONTENTS


    Foreword by Bill Gates

    Preface by Ray Duncan

    Introduction

    Section I: The Development of MS-DOS

    Section II: Programming in the MS-DOS Environment

        Part A: Structure of MS-DOS

        Article 1:  An Introduction to MS-DOS
        Article 2:  The Components of MS-DOS
        Article 3:  MS-DOS Storage Devices

        Part B: Programming for MS-DOS

        Article 4:  Structure of an Application Program
        Article 5:  Character Device Input and Output
        Article 6:  Interrupt-Driven Communications
        Article 7:  File and Record Management
        Article 8:  Disk Directories and Volume Labels
        Article 9:  Memory Management
        Article 10: The MS-DOS EXEC Function

        Part C: Customizing MS-DOS

        Article 11: Terminate-and-Stay-Resident Utilities
        Article 12: Exception Handlers
        Article 13: Hardware Interrupt Handlers
        Article 14: Writing MS-DOS Filters
        Article 15: Installable Device Drivers

        Part D: Directions of MS-DOS

        Article 16: Writing Applications for Upward Compatibility
        Article 17: Windows

        Part E: Programming Tools

        Article 18: Debugging in the MS-DOS Environment
        Article 19: Object Modules
        Article 20: The Microsoft Object Linker

    Section III: User Commands

        Introduction

        User commands are listed in alphabetic order. This section includes
        ANSI.SYS, BATCH, CONFIG.SYS, DRIVER.SYS, EDLIN, RAMDRIVE.SYS, and
        VDISK.SYS.

    Section IV: Programming Utilities

        Introduction

        CREF
        EXE2BIN
        EXEMOD
        EXEPACK
        LIB
        LINK
        MAKE
        MAPSYM
        MASM

        Microsoft Debuggers:

        DEBUG
        SYMDEB
        CodeView

    Section V: System Calls

        Introduction

        System calls are listed in numeric order.

    Appendixes

        Appendix A: MS-DOS Version 3.3
        Appendix B: Critical Error Codes
        Appendix C: Extended Error Codes
        Appendix D: ASCII and IBM Extended ASCII Character Sets
        Appendix E: EBCDIC Character Set
        Appendix F: ANSI.SYS Key and Extended Key Codes
        Appendix G: File Control Block (FCB) Structure
        Appendix H: Program Segment Prefix (PSP) Structure
        Appendix I: 8086/8088/80286/80386 Instruction Sets
        Appendix J: Common MS-DOS Filename Extensions
        Appendix K: Segmented (New) .EXE File Header Format
        Appendix L: Intel Hexadecimal Object File Format
        Appendix M: 8086/8088 Software Compatibility Issues
        Appendix N: An Object Module Dump Utility
        Appendix O: IBM PC BIOS Calls

    Indexes

        Subject
        Commands and System Calls
