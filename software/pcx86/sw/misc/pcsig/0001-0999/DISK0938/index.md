---
layout: page
title: "PC-SIG Diskette Library (Disk #938)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0938/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0938"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CHEMICAL MOLECULAR MODELING"

    CHEMICAL -- a molecular-modeling program for 3-D representations of
    chemical elements.
    
    Select atoms from the Periodic Table and the program retrieves the
    electron orbital information. The atoms can be bonded into molecules,
    and the molecules bonded with other molecules to make large chemical
    structures. The chemical is displayed as it is constructed, and when
    formed, can be rotated and viewed. The Hybrid and Ionize commands can
    be used to alter the orbitals before bonding. Read, write and view a
    chemical data file from the disk. CHEMICAL also has a help function
    and a tutorial.
    
    Included is CHEMVIEW (an EGA-only function), a companion program that
    shows three-dimensional animation of the models made with CHEMICAL.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHEM.DOC

{% raw %}
```
                  CHEMICAL Ver 4.2  Feb 23, 1990

     CHEMICAL is a molecular modeling Program to aid in the formation
     of three dimensional pictures of chemicals. Atoms are selected
     from a Periodic Table (using the A command) and electron
     orbital information retrieved. The Atoms are then bonded
     (using the B command). The chemical is displayed as it is
     being constructed. The chemical can be viewed from different
     directions by using the up and down cursor keys and the V
     command. If desired the Hybrid and Ionize commands can be used
     to alter the orbitals before bonding. Atoms can be bonded
     into groups, then the groups bonded to other groups to make
     large chemicals. The current version for CHEMICAL (4.1)
     includes support for MicroSoft Mouse Drivers.

     CHEMVIEW is a companion program that shows 3-dimensional
     animation of the models generated with CHEMICAL. CHEMVIEW
     requires an EGA board and monitor. CHEMVIEW is written in
     Turbo PROLOG with the graphics routines written in Turbo C.
     To use CHEMVIEW simply start the program and select the
     file desired.

     BIOCHEM is a companion program that combines files made with
     CHEMICAL into larger molecules.  Chemical groups can be
     bonded together using Covalent, Ionic, Hydrogen, or Peptide
     bonds. This program provides much more capability than Group
     command that was included in older versions of CHEMICAL.
     BIOCHEM works with a CGA, EGA, or VGA monitor.

     CRYSTAL is companion program that places atoms on a lattice
     framework to form crystal structures. The structure is
     defined by a text file. A text editor is built into the
     program. The text file is converted to a image that is shown
     rotating in three dimensions. An EGA or VGA monitor is
     required.

     CHEMICAL requires 640K bytes of RAM and a CGA or EGA
     display. You may need to eliminate RAM resident programs
     in order to run CHEMICAL.


     CHEMICAL is started by entering CHEM at the DOS prompt. The
     CHEM.DOC, CHEM.TUT, and *.BGI files should all be on the
     same directory. Select the graphic mode desired, then push
     the Enter key. The program GRAFTABL should be run prior to
     running CHEMICAL with a CGA monitor. The graphic display
     format is different for the various modes for a particular
     monitor. Try each mode to determine your preference.

     Commands are selected by depressing the first letter of
     the command or by depressing (cr) if the command has already
     been selected. The following commands are available:

     The commands for version 4.0 of chemical are:

     A  - (Atom) This command displays a periodic table.
          Elements are selected by moving the cursor to the
          desired Element, then depressing the CR key. The esc
          key is used to exit this command.

     B  - (Bond) This command is used to bond two atoms. A list
          of all atoms selected is displayed, along with its
          electron orbital configuration. The size of the atom is
          determined the first time it is bonded.

          A choice of three bond types: Anti, Dative, and Shared, is
          provided to determine which atom in a bond will supply the
          two electrons needed for a molecular orbital. A shared bond
          takes two electron from each atom. A Dative bond takes both
          electons from one atom. An anti bond allows three or four
          electrons to be used in the bond.

     C  - (Clear) This command clears the screen and the buffer for
          all Atoms and Bonds selected so far. A Yes/No menu is
          used to reduce the change of accidently clearing the buffer.

     FA - (Animate) This command executes program CHEMVIEW which shows
          molecules in 3 dimensional rotation (on EGA monitors only).
          The cursor keys are used to change the direction of rotation,
          the + and - keys change the size, the End key stops rotation,
          the space bar returns to the CHEMVIEW window and the Ctrl
          Break key returns to CHEMCIAL. CHENVIEW.EXE must be on the
          default disk.


     FB - (View Buffer) This command stores the buffer under the
          file name TEMP.DAT, then allows the file to be viewed.

     FH - Show help file

     FM - Minimize Chemical File size by deleting unused
          orbitals. Do not use this command until you are
          completely done, since no additional bonds can be
          made to a minimized file.

     FR - Read a Chemical File

     FS - Goto Operating System

     FT - Show Tutorial File

     FV - View a file from disk

     FW - Write a Chemical File

     H  - (Hybrid) This command is used to combine electron orbitals
          into hybrids. A list of possible Hybrids is displayed.
          A _5 or _6 ending indicates that the bonding angles have
          been adjusted to make a 5 or 6 bond flat ring.

     I  - (Ionize) This command is used to ionize an atom. A list of
          the possible ionizations is displayed.

     MA - (Move) This command is used to manually move an Atom or
          Group.

     MC - Change color of atom. The color for all atoms of the
          type selected are changed.

     MD - Deletes a selected atom from the current buffer. This
          command is most useful for modifing an existing file
          into a similar chemical. All atoms following the one
          selected are re-numbered. This command may require
          several seconds on large files.

     MR - (Re-center) All atoms are re-centered on the screen.
          This command is used when reading files generated by
          older versions of CHEMICAL.

     MS - Rotate around Sigma Bond - Atoms are free to move around
          sigma bonds, and will generally do so to minimize the
          energy of the system. This command will rotate an atom
          and other attached atoms.

     MX - Rotate atoms around X axis. Do not use any of the
          rotate commands until the molecule is complete. The
          angle for bonds made after rotation may not be correct.

     MY - Rotate atoms around Y axis

     MZ - Rotate atoms around Z axis

     P  - Print the screen. CGA mode should be used if you want
          the atoms to be labeled.

     R  - (Not on Menu) Read to buffer from TEMP.DAT

     SB - Toggles Bond lines on/off. Bond lines are only available
          in graphic mode with 16 colors.

     SC - Toggles electronegativity scale on/off. When on, a color
          scale is shown at the bottom of the display window (EGA
          mode only). The atom colors are changed to correspond to
          the electronegtivity of the atom. When off no scale is
          shown and the colors are changed to have more contast.

     SE - Toggles expanded view on/off.

     SG - Toggles grid on/off.

     SN - Toggles atom numbering on/off.

     V  - (View) This command will show the view of the chemical
          that has been selected by the up/down cursor keys.
          The horizonal axis and vertical axis are shown in the
          upper right hand corner of the screen. Lines are
          shown to indicate bonds. The upper right hand corner of
          the screen shows which axis (X, Y, or Z) is aligned
          with the vertical and horizontal view shown.

          Atoms are listed on the left. In 16 color modes, the
          color is used to designate the atoms. In 2 and 4 color
          modes, the atoms are labeled.

     W  - (Not on Menu) The Write command write the buffer to
          the file TEMP.DAT. The Write and the Read commands
          can be used to recover from an error during
          construction of a chemical.


 Contruction of Ring Structures

   Ring structures are difficult to make because of the large number
   of possible bonds. Also the angles need adjustment to make a
   closed ring. Special hybrids ending in _5 or _6 are provided in
   CHEMICAL for constructing 5 and 6 flat ring structures. The ' and `
   bonds should be selected to form rings. CHEMICAL defaults (high-
   lights) to this choice to simplify ring formation.

   The formation of combined six and five ring structures such as
   Purine requires adjustment of the angles for the atoms to meet
   correctly. CHEMICAL will make this adjustment if the six atom
   ring (using _6 hybrids) is made first (don't forget to bond the
   1st and 6th atoms before added the 7th). Then three _5 hybrids
   should be selected. The default bonds should then form the correct 
   double ring structure. The first ring is generated clockwise and
   the second ring is generated counter-clockwise.

   The angles in the sp3 hybrid do not allow a flat ring. A
   twisted ring can be made by selecting the default bond
   selection sequence.

 Example 1:   Make Water Molecule

   1) Use the A command to show periodic table
   2) Select O,H, and H using the cursor keys and Enter Key
   3) use esc to exit A command
   4) Select the Bond Command
   5) Select O and H
   6) Select shared (default) bond
   7) Select one of the O-H bonds
   8) Use the Bond Command to make the other O-H bond
      (Two atoms always need to be selected to make a bond)

   Note: The angle between the Hydrogen atoms can be made closer
   to the actual angle by selecting the sp3 hybrid for Oxygen.

 Example 2: Benzene C6H6

  1) Clear previous entries with (C)lear
  2) Enter 6 Carbon Atoms using (A)tom
  3) Select the sp2 hybrid for each Carbon Atom using (H)ybrid
  4) Use the Up/Down cursor key to set view to TOP
  5) Bond Atoms 1-2, 2-3, 3-4, 4-5, 5-6, 1-6 (selecting highlighted bond)
  6) Make a pi bond between atoms 1-2, 3-4, and 5-6 using (B)ond
  7) Enter 6 Hydrogen Atoms using (A)tom
  8) Bond each hydrogen atom to a carbon atom


Example 3)  [Co(NH3)6]3+  Coordination Compound

  1) Select Co and six N atoms
  2) Select the +3 ionization and d2sp3 Hybridization of Co using
     the Ionize and the Hybrid commands
  3) Select the sp3 Hybrization of N using the Hybrid command
  4) Bond the six d2sp3 orbitals on Co with the six N atoms using
     the dative bond
  5) Select 18 hydrogen atoms
  6) bond the hydrogen atoms to the six nitrogen atoms

     CHEMICAL, CHEMVIEW, and CRYSTAL are placed in the Public Domain
     and may be freely copied and distributed. The latest version of
     including source code can be obtained from the author for $20.
     Updates are $10 for registered users. The source code is not
     for public distibution and is only available from the author.

     The following programs are also available:

     PLANETS computes information relating to the position,
     distance, magnitude, orbit view, skyview, etc. for the major
     planets, four minor planets, and  halley's comet on a specified
     date and time. Also, orbital data for any desired planet or
     comet can be entered and saved in a disk file. Skyview and
     orbital views can shown in  forward or backward motion. The moons
     for each planet can be displayed. This program requires a
     graphics display and 256K bytes of memory. The latest
     version is 4.1.

     CHARACTER is a computer program designed to draw faces. The
     drawings consist of lines of different color and thickness. The
     age, weight, and emotions (Anger, Disgust, Fear, Happiness,
     Sadness, Surprise) can be changed by adjusting scales on the left
     side of the screen. Individual features, such as eye seperation,
     nose position, or nose width, can be changed by accessing
     additional menus. The detailed positions of the lines can be
     changed by using a mouse. CHARACTER requires 512K bytes of
     memory, and a CGA, EGA, VGA, or Hercles monitor. A mouse is
     required to access all the features of CHARACTER.


     Larry Puhl
     6 Plum Court
     Sleepy Hollow, Ill. 60118

     ORDER FORM:

     CHEMICAL/CHEMVIEW/CRYSTAL (price is for all 3) $20      ____

     BIOCHEM                                        $10      ____

     PLANETS                                        $10      ____

     CHARACTER                                      $20      ____

     Shipping outside of USA                         $5      ____

     3 1/2 inch disks                                $2      ____

     (Updates for registered users are half price)


                                                 TOTAL       ____



     send to:   ______________________________________________

                ______________________________________________

                ______________________________________________

                ______________________________________________

     Comments:



```
{% endraw %}

## FILE0938.TXT

{% raw %}
```
Disk No:  938                                                           
Disk Title: Chemical Molecular Modeling                                 
PC-SIG Version: S1.4                                                    
                                                                        
Program Title: Chemical                                                 
Author Version: 4.2                                                     
Author Registration: $20.00                                             
Special Requirements: 640K RAM, and CGA or EGA.                         
                                                                        
CHEMICAL is a molecular-modeling program for 3-D representations of     
chemical elements.                                                      
                                                                        
Select atoms from the Periodic Table and the program retrieves the      
electron orbital information.  The atoms can be bonded into molecules,  
and the molecules bonded with other molecules to make large chemical    
structures.  The chemical is displayed as it is constructed, and when   
formed, can be rotated and viewed.  The hybrid and ionize commands can  
be used to alter the orbitals before bonding.  Read, write and view a   
chemical data file from the disk.  CHEMICAL also has a help function and
a tutorial.                                                             
                                                                        
Included is CHEMVIEW (an EGA-only function), a companion program that   
shows three-dimensional animation of the models made with CHEMICAL.     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0938

     Volume in drive A has no label
     Directory of A:\

    CGA      BGI      6221   6-21-88   2:00a
    CHEM     DOC     13036   2-24-90  10:47a
    CHEM     EXE    265804   2-20-90   9:10p
    CHEM     TUT      4584   4-24-88   3:17p
    CHEMVIEW EXE     48868  11-24-88  10:10a
    EGAVGA   BGI      5363   6-21-88   2:00a
    FILE0938 TXT      2147   3-23-90   8:59p
    GO       BAT        38   3-23-90   1:17p
    GO       TXT       694   3-23-90   8:49p
    H2SO4    DAT       928  11-17-89   6:28p
    HERC     BGI      6093   6-21-88   2:00a
    WATER    DAT       405  12-03-88   3:37p
           12 file(s)     354181 bytes
                            2048 bytes free
