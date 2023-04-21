---
layout: page
title: "PC-SIG Diskette Library (Disk #3035)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3035/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3035"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BMASTER.DOC

{% raw %}
```
========================================================================
                     <<   BLASTER Master v5.2   >>
                 for the Sound Blaster and compatibles 
                   Copyright (C) 1992 by Gary Maddox 
========================================================================

BLASTER Master is a program designed for serious PC soundcard enthusiasts
who are interested in getting the most from their PC audio cards 
when sampling sounds and then playing them back.  A tool kit for working
with Sound Blaster type VOC, .WAV and .SND files, BLASTER Master
offers many features that are available on Digital Audio Workstations 
which normally cost many thousands of dollars.                          
 
SYSTEM REQUIREMENTS ---------------
  Before running BLASTER Master on your PC, please check the system
  requirements and user information listed below:
  
  > This program requires EGA/VGA graphics, a mouse, a hard disk and
    at least a 286 PC. 
  > NOTE: BLASTER Master will function without a soundcard being
    present, but the PLAY, RECORD and SCOPE functions will be disabled.
  > Unregistered versions will only process a 25 second sound file while
    the registered version will process any size sound file. 

  More requirements and performance tips for using BLASTER Master can be
  found in the section entitled "Performance Tips" (near the end of the
  documentation).

OVERVIEW ---------------
  One of the great features of the Sound Blaster and other PC audio cards
  is the ability to sample sound and play it back.  Now you can tailor your
  own sound files using the BLASTER Master program, a very fast EGA/VGA
  graphic editor. Useless and noisy sample data (at the beginning and 
  endings of VOC files) can be quickly removed and sections from within the
  sample can be saved as a new sample file.  A graphic of the entire sample  
  appears on your monitor along with a grid that divides the sample into 
  seconds to aid in selecting the "cut points". A zero-crossing/phase 
  approximation method allows you to select the displayed bytes, helping
  you choose the "cleanest" points for processing. Cross-fading is applied
  to splice points when needed. 
  
  During playback, a pulsing index line displays the position of the file
  being played. The various digital processes can be selected using the
  mouse, or in most cases, you can use ALT plus the first letter of the option.
  > Example: ALT-P (holding down the ALT key while pressing the "P" at
    the same time) will "PLAY" the currently selected sound file.
    
  A color palette is also included in BLASTER Master's graphic capabilities.
  Using your keyboard's function keys F1-F10, you can control the colors
  displayed on the screen. Play around with the available color combinations to
  find the one that best suits you! For a listing of the function key color
  settings, refer to the section entitled "Changing Screen Colors" on page 7.
  
  Functions of a sound file -- SELECTing, IMPORTing, RECORDing and
  EDITing -- are covered in the following four sections.

                                                                   page 2

SELECTING A SOUND FILE ---------------
  If you don't specify a sound file when starting the editor, a file selection
  dialog box will appear. The current path can be changed by selecting the 
  right selection box and selecting a new path. From this dialog box, you can 
  PLAY the sound file, RECORD a new sound file, DELETE an unwanted sound file,
  ACCEPT the file to process or QUIT the program, returning to DOS. You can 
  also display useful file information to audition a file by choosing the PLAY 
  option. The various options can be selected using the mouse or, in most cases, 
  pressing <ALT> plus the first letter of the option as explained earlier. You 
  can also select files with your mouse by double-clicking on the file you want
  to access. If you accept a sound file that is multi-blocked, BLASTER Master 
  will allow you to remove the blocks and convert to a RAW VOC file.

IMPORTING A SOUND FILE ---------------
  Choosing the IMPORT option from the File Selection Dialog Box will allow you 
  to import .WAV, .NTI, .8SV and .SND format files into BLASTER Master. 
  > WAV files are the Microsoft Multi-Media format and are supported by the 
    Pro Audio Spectrum and the ATI Stereo F/X sound cards and others. 
  > SND files: completely raw wave data files not including header information. 
  > NTI files are Amiga sample files as used by Tetra Compositor. 
  > VOC type files can also be saved in these three formats. 
  > 8SV: the extension normally used for Amiga IFF sound files. You can import 
    Amiga IFF sound files, but cannot currently save files in Amiga IFF format.

RECORDING A SOUND FILE ---------------
  When you select RECORD from the File Selection Dialog Box, the Record Dialog 
  Box appears. Here, enter the name of the VOC file you wish to record. 
  > NOTE: If specifying a VOC file that already exists, it will be overwritten!
  Using a mouse, select the sample rate to use when recording-- 13,000-4000 if
  using Sound Blaster or 44,000-4000 if using Sound Blaster Pro. (The higher 
  the sample rate, the better the file will sound.) When using the various 
  digital processes, a higher rate will produce much better sounding file.
  Choose SCOPE to display a graphic scope, which is very useful for setting the
  volume on a device from which you are recording. Select RECORD when ready to 
  begin recording and <ESC> when ready to stop. Your file is then displayed on 
  the Editor screen so you can modify it.
  > NOTE: Sound Blaster Pro users will also select the recording input source, 
          input filter, and MONO or STEREO recording. Users of Creative Lab's 
          MultiMedia CDROM need to read about Syncro CD sampling on page 3.
          
EDITING A SOUND FILE ---------------
  The EDIT option enables you to edit selected sections of a sound file. When 
  selecting a sound file section to edit (remove, save, hear or zoom), position
  the cursor over the graph at the first desired cut point and press the LEFT 
  mouse button. Now, position the cursor over the second cut point and press 
  the LEFT button again. This marks a section with a blue box, signifying that 
  you can HEAR that section, CUT it from the sample or SAVE it as a new file. 
  The ZOOM option displays the marked section so you can choose a new block 
  from the zoomed area, editing the sound file with surgical precision. (You 
  can zoom the file until the resolution reaches 1:1. The current resolution 
  is shown just above the options selection box.) 
  > MOVE: allows a selected block to be moved to a new section in the same file. 
  > COPY: (Vanishing Menu only) moves a copy of the selected block to a new 
          section of the same file.

                                                                      page 3

USING SYNCRO CD ---------------
  Anyone using a CDROM from Creative Labs MultiMedia can use BLASTER Master to
  sample recordings directly from your favorite CDs! I have gotten excellent
  (if not the BEST) recordings with the Sound Blaster Pro using the CDROM. 
  If you are equipped with a CDROM, a standard CD player control bar will appear
  on the RECORD dialog box you see on your monitor. BLASTER Master currently 
  supports the following CD player controls -- PLAY, PAUSE, STOP, REWIND, FAST 
  FORWARD, PREVIOUS TRACK and NEXT TRACK. To sample from your favorite CDs, 
  make sure you have selected "CD" as your input source. You can either start 
  the CD and then pick RECORD, or what I have found works better is to use 
  SYNCRO CD, as explained below.
  
  If BLASTER Master detects that your CDROM is in PAUSE mode, you can select
  RECORD to automatically synchronize the sampling and the CD audio playback.
  When you press <ESC> to stop recording, the CD playback will shut off
  automatically. Using this SYNCRO CD feature, your results are a very precise,
  high quality sample that should require very little editing.

SETTING A MARKER ---------------
  BLASTER Master features a marker function which allows you to pre-select 
  a point in a sound ile. This function is especially useful for mixing and
  inserting sounds in sound files. To set a marker, position the mouse cursor
  at the appropriate spot on the blue bar just below the sound file grid. Then,
  using the right mouse button, click on this position to place a white arrow 
  on this blue bar. 

TOOLS ---------------
  This program includes special processes, called tools, that operate on a block
  of data. When you select the TOOLS button, a selection menu containing special
  block functions pops up on your screen. These tool functions are listed below:
    
  LOOP:
  Repeats block up to 10 times, adding a Max Headroom-type stutter to the file.
    
  MUTE:
  Replaces the block with silence bytes, which is very useful for removing 
  glitches and other undesirable noises without effecting the playback time.
    
  REVERSE:
  Reverses the block to playback backwards.
    
  PITCH:
  Changes the pitch of the block (lowering/raising it); effects playback time.
    
  ECHO:
  Adds echo to the block. Same parameters as in Echo function for whole files.
    
  VOLUME:
  Adjusts the block's playback volume. Same parameters as in Volume function 
  for whole files.
  > NOTE: The editor program should work on all single block compressed data. 
    This does not include silence encoding. The graphic representation of the 
    sound data will not be accurate,but the time display should be very close.

                                                                      page 4
                                                                                                                                                  
SPECIAL PROCESSES ---------------
  BLASTER Master supports several special digital processes for modifying your 
  sound files: SCOPE, ECHO, REVERSE, INSERT, FAST, SLOW,  RATE, VOLUME, PITCH, 
  PACK, FADE, VOCALS and MIXER. The processes are not all displayed at the same 
  time on the Wave Edit screen, so to display the next set of options, press 
  the MORE button. Once again, options here are selected using the mouse or, in
  most cases, pressing <ALT> plus the first letter of the option you want. 
  > EXAMPLE: ALT-E (holding down the ALT and "E" keys simultaneously) allows 
             you to "ECHO" the currently selected sound file. 
  You can use the NEW button to select a new file when in the Editor screen
  or to unmark a block when in the Cut/Save/Zoom screen. The special processes
  listed above are described in detail as follows:

    SCOPE:
    Graphically displays sample input real-time. To see this first-hand, speak 
    into a microphone and see what your voice looks like or play music directly
    into the Sound Blaster. (This works particularly well on faster machines 
    and is an excellent way to check your system's quality.) When there is no
    sound input, you should see a straight, flat line that is exactly even with
    the white line on the sound file grid. Any spikes you see above or below 
    this white line indicate that your system is registering noise of some kind.
    Pressing any key or either of the mouse buttons will cancel the scope and 
    return you to the editor. 
    
    ECHO:
    Adds echo or delay to a VOC file to give it a richer, fuller sound. 
    This feature is also great for adding special effects. Two parameters 
    are used to determine the type of echo desired:
      1) SIZE -- The "size" of the effect is determined by the number of 
         milliseconds before the echo starts. Delays of 60-100 simulate a 
         large room, while larger delays (up to 200 milliseconds) will sound 
         like a cavern or canyon.
      2) MIXTURE -- The mixture (how loud the echo should be mixed in) has an 
         effect on the type of echo desired. A 30-60% mixture will sound more
         realistic than using a higher volume for the delayed sounds. To 
         determine how the echo will repeat, select either INFINITE or FINITE.

    REVERSE: 
    Reverses the playback of a VOC file, which is effectively the same as 
    playing a tape backwards. You older Beatles fans can see for yourself 
    if the song "Number 9" really says "turn me on, dead man" backwards. 
    This is also a great tool for televangelists to use in searching for 
    those pesky satanic references in rock & roll songs! Did you know that 
    the famous Tarzan yell sounds the same backwards as forwards? Try it!

                                                                    page 5
                                                                    
    INSERT:
    Allows another sound file to be inserted into the sound file you are 
    currently editing. When you select INSERT, the File Select Dialog Box will
    appear. From here, you can SELECT a VOC file, RECORD a new sound file 
    or CANCEL the INSERT process and return to the Edit screen. Once you have
    selected a VOC file for insertion, the system will give you the option of
    selecting the point in the original file for insertion by using either the
    mouse pointer, the marker, a sample point in the file or a point in time.
    If the sample rate of the new sound file does not match the original file, 
    the sample rate will be adjusted to blend in correctly. 
    > NOTE: Use care when selecting a new sound file that is not packed, 
            contains silence compression or is a multi-block file. 
            The resulting sound file will not be usable!

    SLOW:
    Extends the time domain without effecting the frequency domain... or in 
    plain English, the SLOW process allows you to re-sample a VOC file that 
    will play back at approximately 1/2 speed without effecting the pitch. 
    This function will double the size of the original sound file. Imagine 
    you are a guitar player and want to learn the latest white hot guitar 
    licks from Joe Satriani or Eric Johnson... SLOW makes listening and 
    learning MUCH easier! It is also very useful for preparing multi-media 
    presentations. 
    > HINT: Sound files with sample rates above 12khz produce a more 
            natural sound.

    FAST:
    I couldn't have a "slow down" process without a "speed up" one, too, 
    could I? Unlike SLOW, the FAST process includes a "slider" for selecting 
    how much of a speed increase you desire. This function will decrease the 
    size of the original sound file accordingly. 
    > HINT: Like SLOW, sound files with higher sample rates produce 
            better results.
                                                                   
    RATE:
    Allows a VOC file created with a high sample rate to be "down" sampled to 
    a lower sample rate. Some PCs have problems playing VOC files with the 
    higher sample rates, so this RATE process provides you with a way to 
    change the sample rate to something more compatible with your PC. It is 
    also a good way to make files smaller without the degradation associated 
    with compression. 
    > A VOC file recorded at 12,000Hz+ down-sampled to 8000Hz will probably 
      sound better than if it had been originally recorded at the slower rate. 
    > Sound files originally sampled on the MAC at 22,000Hz can be 
      down-sampled to 12,000Hz or less with almost no loss in clarity.
    The RATE process is also capable of "up" sampling, although you WILL NOT 
    gain any noticable resolution. Approximating the "missing" byte is just 
    not the same as having the original bytes in all cases.

                                                                    page 6
                                                                    
    VOLUME:
    Either increases or decreases the amplitude of VOC files. One way to get 
    a very clean sample is to make your sample at a fairly low volume and 
    then re-sample up to a higher volume. (The Sound Blaster has a tendency
    to introduce distortion as you increase the volume used for sampling.) 

    The VOLUME process works very well for sampling directly from a CD or 
    tape deck. Enter either "I" to increase the volume or "D" to decrease the 
    volume. The numeric value you enter after either "I" or "D" will determine 
    the amount of change in the resulting file.
    > Increasing the volume: values of 10-50 have a subtle effect on the 
      resulting sound file. Values of 50-200+ will have an even more 
      dramatic effect.
    > Decreasing the volume: values of 1-99 will cause the resulting file to 
      have approximately the same volume as the percent of the number entered. 
      Entering "50" will produce a sound file that is only 50% as loud as 
      the original. If a value greater than 100 is entered, the effect will 
      be to INCREASE the volume, even though you selected to DECREASE.

    MIXER:
    Blends two VOC files into a single sample. There is also a volume mix 
    parameter that controls how loud the mixed-in sample will be. The volume 
    mix can be a number between 1 and 100; 50 to 60 is often a very good 
    mixing level. Before beginning the MIXing process, you can select the 
    point within your original file where you want to begin mixing.
    If you want to start at the beginning of your file, choose the farthest 
    point to your left. 

    The Mixer is a great way to add special effects to your sound files. This 
    process does not try to adjust the sample rates if the files are different. 

    PACK/UNPACK:
    These processes will either pack or unpack a sound file, depending on its 
    current state. The previously-discussed functions only work on unpacked 
    files. Many of the available files come packed; once unpacked, all of the 
    special BLASTER Master features can be applied to the files. 

    PITCH:
    Alters the sample rate value contained within the VOC file. If you want to
    raise or lower the pitch, you can select the slider. Altering the pitch 
    will also effect the playback time, but not the size of the file.

    FADE:
    Allows you to fade in or out on the volume of a sound file at the file's 
    beginning and ending points. When choosing this function, you can specify 
    the amount of time you want for the fade in and fade out. Neither of these
    times can exceed 1/2 of the total time of the sound file. If for instance, 
    you wish to only fade out a sound file, use zero as the fade in time. When 
    combining multiple files, a little fading can result in a smoother
    transition in the sound, making the switch between sounds less abrupt. 
    This can be especially effective when a sound file has lots of background 
    noise and the joining sound file does not.

                                                                      page 7
   
   VOCALS: (Stereo files only)  
    "Removes" vocals from a stereo sound file. This process actually inverts 
    the left channel 180 degrees and mixes it back into the right channel. 
    This has a tendency to cancel out all the center waves where vocals are 
    often mixed in. The effect varies significantly from song to song depending 
    on how it was originally mixed. For example, "I Feel Fine" by The Beatles 
    will process out 99% of the vocal, whereas "Eleanor Rigby" has the effect 
    of enhancing the vocals and reducing the cellos. You can also tweak the 
    results by modifying the sampling SOURCE -- that is, play around with 
    the channel balance and use some EQ or even stereo synthesis. In any case, 
    VOCALS is lots of fun and works as well as the $350 unit you see advertised. 
  
USING THE VANISHING MENU ---------------
The system reveals a drop-down bar menu when, during file editing, you move
the mouse cursor to the top of the screen or hold down the <SHIFT> key. All 
of the button functions are available from the Vanishing Menu. Many other 
useful functions are also available, as explained below.

FILE MENU:
   > SAVE -- Save the current sound file. If the current sound file is UNTITLED,
     you will be prompted for a file name.
   > SAVE AS -- Save the current sound file by a new name or file format.
   > QUIT -- Quit to DOS immediately. If the current sound file is UNTITLED, 
     you will be prompted for a file name.
OPTIONS MENU:
   > LOOP PLAY ON/OFF -- Causes playback to be single or looped.
   > SAVE SCREEN COLORS -- Saves the current screen colors. For more details, 
     see the sections about Changing and Saving Default screen colors.
   > BLOCK PLAY ON/OFF (block edit only) -- Plays either the whole 
     sound file or selected block. This function is not supported in ZOOM.
HELP: 
   Displays a short help file that briefly details the various functions. 
   You can access these menus quickly from the keyboard by using <SHIFT> and 
   the first letter of each option: Shift-F for FILE, Shift-H for HELP, etc.
                                                                    
CHANGING SCREEN COLORS ---------------
  BLASTER Master's graphic screen colors can be changed via these function keys:
  [Default colors are given as <color> after each function key description.] 
     F1:      Background  <Cyan>
     F2:      Fileselect Playbox  <Red>
     F3:      Time Grid  <Brown>
     F4:      File Info text, Highlighted text, Vanishing Menu text <White>
     F5:      Field labels, backgrounds of Vanishing Menu & Dialog Box  <Blue> 
     F6:      Vanishing Menu Bar background, Pipe shading  <Bright Blue>
     F7:      Button Highlights, Pipe shading  <Bright Cyan>
     F8:      List Box Highlight, Fileselect Playbox text <Yellow>
     F9:      Wave Tip Highlight  <Bright Red>
     F10:     Wave Background  <Cyan>
     CTRL-F2: Wave  <Red>
  
  If you have color VGA graphics, you can choose from 256 colors. EGA users 
  can choose from 64 separate colors. Keep in mind that the way certain colors 
  interact with each other should effect your color choices. A poor choice of 
  screen colors (the poor interaction between F4 and F5, for example) could 
  result in unreadable dialog boxes and help screens.

                                                                    page 8
                                                                    
SAVING SCREEN COLORS ---------------
  To save your current screen colors, select the Options Menu available via
  the Vanishing Menu, which saves the colors in a file named BMASTER.CFG. 
  Return to the Default screen colors by renaming or deleting this file. 
  > NOTE: When renaming BMASTER.CFG, always use the file extension .PAL.
          Future versions of BLASTER Master may include support for "point
          and click" PAL file selection.

USING PAL FILES ---------------
  I have included several small saved screen colors files with the file 
  extension .PAL. To use a PAL file, copy it to BMASTER.CFG.
   > Example: COPY OLDMOVIE.PAL BMASTER.CFG
  
  BLASTER Master can also be started up with a particular PAL file by using
  the command line switch /P.
  > Example: BMASTER /POLDMOVIE.PAL

SETTING BLASTER MASTER DEFAULTS ---------------
  SB Pro card users can set certain recording parameter defaults by using 
  the SET BMDEFS environment parameter. 

              Input Source  Input Mode    Filter  Rate CDROM
  SET BMDEFS= {CD/MIC/LINE} {STEREO/MONO} {LO/HI} {NN} {ROMx:}

  To set BLASTER Master's default recording parameters to stereo line input 
  with lo-pass filter and a sample rate of 22khz, use settings like the one 
  shown in this example: SET BMDEFS= LINE STEREO LO 22

  The order of the parameters does not matter. Use the SET command alone at 
  the DOS prompt to check your environment. Users of the Multimedia upgrade 
  CDROM may find a long pause on the Fileselect Dialog Box when an Audio CD 
  is in the drive. Use the ROMx: parameter to skip verifying that drive. 
  To skip CD ROM drive F:, use ROMF:.

SETTING THE BLASTER ENVIRONMENT ---------------
  Users of compatible soundcards and 1.0 Sound Blasters can skip the 
  port/IRQ/DMA scanning by using the SET BLASTER environment parameters 
  supported by the 2.0 and Pro versions of the Sound Blaster. 
  > Example:  SET BLASTER=A220 I7 D1           
    (A = the port address; I = the interrupt; and D = the DMA channel.
  
  If you have problems with BLASTER Master executing on your machine, try using 
  this setting. It will also make the program boot up quicker!

> NOTE: It is possible that BLASTER Master may not correctly identify your 
        graphics interface. If BLASTER Master tells you that you don't have 
        EGA/VGA graphics and you know you do, try using the command line switch 
        "/G". This switch forces graphics mode and bypasses the interface check.

                                                                      page 9
                                                                      
REPORTING TROUBLE ---------------
  If you find a bug in BLASTER Master, please report it in as much detail 
  as possible so that I can fix it in the next version. I need to know which 
  specific function you were using, where the VOC file originated from and the 
  sample rate. If the problem is hardware-related  (i.e. video display, mouse 
  functions), please include information about the system you are using. 
  Support beyond that will only be provided to registered users. 

COMMON PROBLEMS ---------------
  ERROR 5:
  This is a DOS error meaning Illegal Function Call, which could signify just 
  about anything. The most common occurrence of this is when try to run 
  BLASTER Master on a PC with a graphics card that does not properly support 
  640x350x16 HI-RES EGA graphics mode. If you get this error immediately after 
  typing BMASTER, then the problem is probably with your graphics card. The 
  only fix in this case is to change your graphics card.
  
  MOUSE CURSOR ERASE SYNDROME:
  I have recently heard of three or four instances of the mouse cursor seeming 
  to erase the screen when it is moved. This is a problem with your mouse 
  driver. I only make calls to the Mouse API; I don't re-paint the screen. 
  Switching mouse drivers has fixed this problem in every case so far.

PERFORMANCE TIPS ---------------
  BLASTER Master works best on a very fast PC -- fast processor, fast 
  graphics and fast hard drive. I use mostly floating point operations for 
  accuracy. A Math Co-Processor speeds up most of the functions by as much 
  as 40%. For example, mixing two 50K files requires over 1,000,000 
  calculations. A slow graphics card can cause wait states on your processor. 
  That bargain-priced VGA system may not be such a bargain if you saved a mere
  $50 yet slowed your PC down by 40-60% in graphics mode. BLASTER Master is 
  based on using "virtual memory", i.e., using your hard drive wherever 
  possible. While this is slower, it is much more reliable and supports a 
  wider system base. It also easily supports HUGE file sizes. If you are lucky 
  enough to have several megabytes of RAM, try running from a RAM Disk or at 
  least use an extended/expanded memory Disk Cache. It makes a big difference 
  in performance. Disk fragmentation can also lessen performance, regardless 
  of what software you are running.

                                                                    page 10

SUGGESTED READING ---------------
  If you are interested in learning more about how BLASTER Master works, 
  I suggest you read the following books:
  
  > "Principles of Digital Audio" by Ken C. Pohlmann
    (Howard W. Sams & Co., 1985, 1989 second edition)
        An excellent introduction to everything from fundamental acoustic 
        theory to the way compact disks work. Some chapters are relatively 
        easy to understand & others are definitely NOT for the faint of heart.

  > "Musical Applications of Microprocessors" by Hal Chamberlin
    (Hayden Books, 1985, 1987 second edition)
         Absolutely the best edition ever published in the field of digital 
         sound production and is universally considered a classic. This book 
         is 800 pages long and you really must have an understanding of 
         advanced mathematics to read it.

   > "Elements of Computer Music" by F. Richard Moore
      (Prentice-Hall, Inc. 1990)
         An excellent source of information about digital sound reproduction. 
         Especially good for C programmers; examples are working C routines.

   > "An Introduction to Digital Signal Processing" by John H. Karl
     (Academic Press, Inc. 1989)
         This is a very good crash study course in DSP and assumes the 
         reader is familiar with higher mathmatics. 

Distribution BBS Numbers ---------------
  These BBS's should always have the latest release. BLASTER Master is also 
  available on hundreds of other BBS's around the world.

  CompuServe       GO MIDIFORUM         Channel One     (617) 354-3137
  Data Dimension   (404) 921-1186       America Online  PC MUSIC
  New Dimension    (408) 274-5550       Rusty & Eddy's  (216) 726-3589
  User-to-User     (214) 492-6565       GEnie           IBMPC
  Music Connection (214) 596-2827       EXEC-PC         (414) 789-4360
   
  BLASTER Master is the result of many, many hours of programming, study 
  and experimentation (not to mention 6 years of college). If you find 
  this program to be interesting and of use to you, please register 
  BLASTER Master and help support future development towards more 
  applications of sound files. I would like to take this opportunity to 
  thank the individuals and institutions that have already registered. 
  Your support has made this version possible. As long as you continue to 
  support BLASTER Master, I will continue to release new versions. All 
  future updates are free. One registration will automatically register 
  future versions. Please mention the version number in your letter and 
  include your telephone number and computer system hardware. I will also 
  be interested to hear which BBS you downloaded it from. Please tell me 
  of your suggestions for future enhancements, too! Think of it this way...
  when you register BLASTER Master, you aren't paying for the version you are 
  currently using; you are helping to finance the next release! When I receive 
  your payment, I will send you your registration number and instructions 
  on installing it.

                                                                    page 11

To register, send $29.95 in US dollars to:       
                  Gary Maddox
                  1901 Spring Creek #315
                  Plano, TX 75023
                  USA

Foreign orders mailed directly to me should include $5 for the extra postage. 
PLEASE send payment in US dollars only. 

To register in Germany, send 59 Deutche Marks plus handling fee to:
                  CDV
                  Ettlingerstr. 5
                  D-7500 Karlsruhe 1
                  Germany

I suggest you contact CDV to find out the current handling charges and 
to obtain a catalog of their other excellent shareware offerings.

To register in the U.K., send 16 pounds Sterling to:
                  Carl Ricketts
                  54 St. Anne's Road
                  Tankerton
                  Whitstable
                  Kent
                  CT5 2DR
                  England

>> You can drop me a line on Prodigy at KTSM62A or CompuServe at 76711,547.<<

              Thank you for using my digital sound software.
   * Sound Blaster is a registered trademark of Creative Labs, Inc

-------------------------------------------------------------------------------
BLASTER Master Copyright (C) 1990,1991,1992 by Gary Maddox, all rights reserved
-------------------------------------------------------------------------------
 
```
{% endraw %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library. It has over 3000 different, and complete applications
for your every need.  Every shareware program we have is on one disc;
over 700 megabytes (unzipped) of software you can have immediate access
to.

Easy to use, all you have to do is insert the disc and type 'GO' at the
DOS prompt.  We've included all the tools you need for fast easy access
to the programs and their descriptions.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

#             #             #
PC-SIG UPDATES PC-SIG LIBRARY ON CD-ROM

For Immediate Release


PC-SIG LIBRARY ON CD-ROM UPDATED TO INCLUDE A NEW USER INTERFACE AND MORE
THAN 800 MB OF PROGRAMS June 21, 1992, SUNNYVALE, CALIF. - PC-SIG, Inc.
today announced availability of The Eleventh Edition of the PC-SIG Library
on CD-ROM.  The PC-SIG Library on CD-ROM contains over 800 megabytes of
shareware and includes more than 300 new programs, 550 updated programs,
and the addition of 75 megabytes of Windows 3.x shareware.  The
user-interface has been completely re-engineered to take advantage of the
HyperWriter! hypermedia and multimedia authoring system from NTERGAID, Inc.

The implementation of HyperWriter! provides significant performance and
ease of use enhancements.  Programs can access and download much faster
than with previous editions.  Programs have been reorganized and indexed
for better referencing.  Users just c lick with a mouse, or point with the
cursor, on a program name to see a complete description of the program.
Downloading or copying a program is handled automatically by HyperWriter!
Addition of a preview option is especially important for anyone who uses
images, icons, or fonts.  "You can preview the whole library of images to
find the right one," according to Bruce Kent, product development manager.
"This CD finally makes it possi ble to conserve your disk space and paper,
yet still have all the information you need to make an informed decision,"
said Kent.

All new and updated programs have been reviewed and tested by PC-SIG. Every
program goes through extensive virus checking using the most recent version
of VIRUSCAN from McAfee Associates, and other anti-virus software.
According to Kent, "In the ten ye ars we've distributed shareware, we have
never had a confirmed report of a virus on any of our distributed programs
or CD-ROMs."

The PC-SIG Library on CD-ROM, Eleventh Edition has a list price of $179.

Upgrades from previous editions are available for $99.

Users of PC-SIG's Essential Home & Business Collection CD-ROM can upgrade
for $120.

PC-SIG CD-ROMs are distributed worldwide through a network of distributors
and resellers. Based in Sunnyvale, Calif., PC-SIG, Inc. markets and
supports one of the world's largest collections of shareware for IBM PCs
and compatible systems.  PC-SIG also publishes Shareware Magazine, which is
devoted solely to shareware.  The magazine is availa ble by subscription
and on newsstands nationwide.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 640K memory, DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions, and a hard drive. Microsoft compatible
mouse supported and VGA highly recommended.

To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 2700 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.25 for 5.25" or $3.75 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $12.95  ______

Super Saver Membership                                 $34.95  ______
(includes a 1 year subscription to Shareware Magazine )
(also The Encyclopedia of Shareware, and 5 free disks )

The Encyclopedia of Shareware special price at         $14.95  ______

The Essential Home & Business Collection for           $59.00  ______

*** PC-SIG Library on CD-ROM 11th Edition  ***         $159.00 ______
              NEW LOWER PRICE!

Upgrade to the 11th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $85.00  ______

Upgrade from ANY other shareware CD-ROM just           $99.00  ______

                                                    Subtotal   ______

If you want 3-1/2 inch disks please add .25 cents per disk     ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2316





                                *****




              TO PRINT THIS ORDER FORM, PRESS ANY KEY AND
              THEN "Quit" ONCE TO RETURN TO THE MAIN MENU.
                     SELECT "Print Reply Form."
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3035

     Volume in drive A has no label
     Directory of A:\

    PKUNZIP  EXE     23528   3-15-90   1:10a
    BMSTR52  ZIP    246094   9-05-92   5:11p
    CDROM    TXT      3972   6-24-92   1:25p
    GO-FORM  DAT      3109   6-29-92   3:26p
    GO-STRT  DAT       537  10-19-92   2:54p
    GO       EXE     26022   1-10-92  12:14p
    PCSIG    TXT      2335   1-21-92   6:09a
    SHAREMAG TXT      1837   1-21-92   6:11a
    SIGORDER TXT      3332   6-25-92   2:28p
            9 file(s)     310766 bytes
                            7168 bytes free
