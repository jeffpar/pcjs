---
layout: page
title: "PC-SIG Diskette Library (Disk #1678)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1678/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1678"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EYESIGHT"

    Enter the world of artificial intelligence and learn about computer
    vision with EYESIGHT.
    
    EYESIGHT is a vision processing program designed as an introduction to
    the field of computer vision. You do not need a camera or any prior
    knowledge of computer vision to use EYESIGHT. EYESIGHT provides an
    environment for reading and writing image files, performing various
    image processing functions, and displaying the results.
    
    Computer vision is a branch of artificial intelligence attempting to
    give computers the gift of sight. Using EYESIGHT, you will learn how
    this is possible. EYESIGHT comes with sample image files that you can
    use to experiment and learn with. You will learn about region
    recognition and edge detection. EYESIGHT provides seventeen different
    image processing functions with which you can experiment. Also included
    is a tutorial on computer vision. EYESIGHT is an exciting look into
    computer vision.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1678.TXT

{% raw %}
```
Disk No: 1678                                                           
Disk Title: EyeSight                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: EyesSight                                                
Author Version: 1.7                                                     
Author Registration: $25.00                                             
Special Requirements: CGA.                                              
                                                                        
Enter the world of Artificial Intelligence and learn about Computer     
Vision with EYESIGHT.                                                   
                                                                        
EYESIGHT is a vision processing program designed as an introduction to  
the field of computer vision.  You do not need a camera or any prior    
knowledge of computer vision to use EYESIGHT.  EYESIGHT provides an     
environment for reading and writing image files, performing various     
image processing functions, and displaying the results.                 
                                                                        
Computer vision is a branch of Artificail Intelligence attempting to    
give computers the gift of sight.  Using EYESIGHT, you will learn how   
this is possible.  EYESIGHT comes with sample image files that you can  
use to experiment and learn with.  You will learn about pixel           
recognition and edge detection.  EYESIGHT provides seven different image
processing functions that you can experiment with.  Also included is a  
tutorial on computer vision.  EYESIGHT is an exciting look into computer
vision.                                                                 
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
   












                                E Y E S I G H T
  
                              V E R S I O N   1.7


							     
                 A ShareWare Computer Vision Program for IBM PCs
                                and compatibles
                       Copyright (c) 1989 by Robots, Etc                         


















                                  Loren Heiny
                                  Robots, Etc
                                  P.O. Box 122
                                Tempe, AZ  85280


                      T A B L E   O F   C O N T E N T S


 
          WHAT IS EyeSight?.......................................1
          WHAT CAN EyeSight DO?...................................1
          WHAT EQUIPMENT DO YOU NEED?.............................1
          WHAT FILES ARE ON THE EyeSight DISK?....................1
          WHAT IS COMPUTER VISION?................................1
          REGISTERING YOUR COPY OF EyeSight.......................2
          GETTING STARTED.........................................3
          MAKE A WORKING COPY.....................................3
          INSTALLING EyeSight ON A HARD DISK......................3
          RUNNING WITH EyeSight...................................3
          HOW DO I GET OUT OF HERE?  or  HELP!....................3
          LET'S DO SOMETHING......................................4
          TRYING TO THRESHOLD.....................................4
          EXPERIMENT SOME MORE....................................5
          USING THE ENVIRONMENT...................................5
          CHANGING YOUR MIND......................................6
          VISION PROCESSING SUPPORTED.............................6
          CONFIGURABLE EXEC MENU..................................7
          ALL IN AN IMAGE.........................................7
          WHAT YOU SEE............................................7
          THE LEFT DISPLAY WINDOW.................................7
          THE RIGHT DISPLAY WINDOW................................8
          IMAGE COLORS............................................8
          SELECTING THE DISPLAY WINDOW............................8
          COPYING BETWEEN DISPLAY WINDOWS.........................9
          READING AN IMAGE FILE AND MULTIPLE IMAGE BUFFERS........9
          READING A FILE FROM THE COMMAND-LINE...................10
          LISTING THE IMAGE BUFFERS..............................10
          WRITING AN IMAGE FILE..................................10
          DEFAULT PATHNAMES......................................11
          CONFIGURATION FILE.....................................11
          HELP!..................................................12
          INTERNAL DIRECTORY.....................................12
          EXITING THE PROGRAM....................................12
          PRINTING AN IMAGE......................................12
          EXAMINING PIXELS.......................................13
          TWO IMAGE OPERATIONS...................................13
          IMAGE ANALYSIS FUNCTIONS...............................13
          THE CONTOUR FOLLOWER...................................15
          EXPERIMENTING WITH EYESIGHT............................16
          SCRIPT LANGUAGE........................................19
          SETTING THE GRAPHICS MODE..............................19
          COMMAND SUMMARY........................................20
          QUICK COMMANDS.........................................21

      
      __________________________________________________________EyeSight

 
      WHAT IS EyeSight?

      EyeSight is a ShareWare vision processing program designed
      as an introduction to the field of computer vision. You do
      not need a camera or any prior knowledge of computer
      vision to use EyeSight. (For a brief introduction to computer
      vision refer to the file vision.doc.)

      WHAT CAN EyeSight DO?

      EyeSight provides an easy-to-use environment for reading and
      writing image files, performing various image processing
      functions, and displaying the results.

      WHAT EQUIPMENT DO YOU NEED?

      IBM PC/XT/AT or compatible computer
      A graphics adapter: CGA, EGA, or VGA
      At least 1 floppy drive (Hard disk recommended)
      DOS Version 2.1 or later
      At least 256K of memory (640k recommended)

      WHAT FILES ARE ON THE EyeSight DISK?
      
      manual.doc                 This file
      vision.doc                 An introductory article on computer vision
      eyesight.exe               The image processing program
      eyesight.hlp               Internal help file used by EyeSight
      clips.im                   An image of clips
      computer.im                An image of a computer
      mtn.im                     An image of a mountain scene
      bolts.im                   An image of bolts
      balloon.im                 An image of some balloons
      flower.im                  An image of a flower
      demo.scr                   A script file which demonstrates
                                 some of EyeSight's vision routines
      cga.cfg                    Configuration file for CGA mode
      ega.cfg                    Configuration file for EGA mode
      vga.cfg                    Configuration file for VGA mode

      WHAT IS COMPUTER VISION?

      Computer Vision is a branch of Artificial Intelligence (AI)
      attempting to endow computers with the gift of sight. There is
      little doubt that for most of us vision is our most relied upon
      sense. And as such, it is no wonder that computer vision is
      receiving such a large amount of attention in the AI community.



                                  - Page 1 -


      ______________________________________________________________EyeSight


      Already computer vision systems can be found on industrial assembly
      lines inspecting products, guiding robots, and reading identification 
      markers. Of course, there are numerous applications that go beyond 
      the doors of industry, such as text reading machines and vision 
      systems for household robots. And the applications are only beginning
      to unfold.

      However, up to this point, computer vision technologies have rarely
      been designed for the vast numbers of personal computers available.
      EyeSight is a break from this tradition. With EyeSight you will be able
      to experiment with a few simple vision processing techniques and
      along the way familiarize yourself with several of the basic
      concepts involved.

      REGISTERING YOUR COPY OF EyeSight

      EyeSight V1.7 is a ShareWare program and in the tradition of
      ShareWare, you are encouraged to try it out and share it with
      your friends. However, if you use EyeSight regularly and
      would like to encourage its further development, please
      register your copy by sending $25 in check or money order to
      the address below (AZ residents add sales tax). Please include
      the version number of your copy of EyeSight.

      If you register your copy of EyeSight you will enjoy the following
      benefits:

      1) One free version update of EyeSight 
      2) Technical support
      3) A diskette of sample images from our image library
      4) A one year subscription to the EyeSight newsletter -- an
         occassional publication dedicated to the computer vision
         experimenter which discusses ways to explore computer
         and robot vision using EyeSight.



      Please send all registrations and inquiries to:

                                Robots, Etc
                                P.O. Box 122
                              Tempe, AZ  85280
 

       * IBM PC and IBM are registered trademarks of International
         Business Machines Corporation


                                  - Page 2 -


      ______________________________________________________________EyeSight


      GETTING STARTED

      The following sections will lead you through a step-by-step
      introduction to EyeSight. Simply follow the instructions as they
      are presented and you should have little trouble stepping into the
      world of computer vision.

      MAKE A WORKING COPY

      Before you do anything else, it is a good idea to make a working
      copy of the EyeSight diskette. Once you have done this, set aside
      the original EyeSight diskette and use your working copy from
      this point on.

      INSTALLING EyeSight ON A HARD DISK

      If you want to run EyeSight from your hard disk, simply create a
      sub-directory and copy all of the files on the EyeSight diskette into 
      it. At this early stage in the game there isn't any reason to build
      up an extensive directory structure for EyeSight. Why not just keep
      it simple!

      RUNNING WITH EyeSight

      To run the program, get into the directory where the EyeSight.exe
      file resides and simply type:

	                      eyesight <Enter>

      at the DOS prompt (Whenever you see <Enter>, press the key marked
      Enter).

      EyeSight will now load and its environment will appear on the
      screen with an author message. Press any key to continue with the
      program. (If you are using a VGA card and the majority of the
      screen is purple, see the section SETTING THE GRAPHICS MODE.)

      If your machine does not have enough memory the message:

	                      Not enough memory

      will appear. If you do not have a CGA,EGA, or VGA card, the program
      will not run correctly either.

      HOW DO I GET OUT OF HERE?	 or  HELP!
      
      You can exit EyeSight at any time by holding down the ALT key and
      pressing the letter x. In addition, Help is accessible from most
      points in the program by pressing the F1 function key.


                                  - Page 3 -



      ______________________________________________________________EyeSight
    

      LET'S DO SOMETHING

      The EyeSight distribution disk includes several images that are ready
      for you to use. In this section we'll read one of these image files
      into memory and then perform an image processing operation on it.

      First let's read in one of the image files supplied on the EyeSight
      disk. The read function is a file operation and is listed with the
      other file options under the "File" menu option. To load an image:

              1) Use the left and right arrow keys on the number
	         pad to move the highlighted section in the main
                 menu bar to the "File" option.
              2) A pull-down menu will appear with several options.
	         Select "Load Image" by pressing the Enter key.
              3) A prompt will appear for the filename of the
	         image to read. Type:
                                 clips.im <Enter>
                 This is an image of several dark plastic clips on
                 a white background.
              4) The image of the clips should now appear on the
                 left side of the screen.

      Now let's try applying one of the vision processing functions to the
      image. You'll find several image processing routines located in
      the "Exec" pull-down menu. To get to these options, press the left
      or right arrow keys until "Exec" is highlighted in the main menu bar.
      A pull-down menu will appear with the options:

	                         Histogram
                                 Profile
                                 Threshold
                                 Roberts
                                 Average
                                 Contour
                                 Burns

      TRYING TO THRESHOLD

      You can select any of these image processing functions, but first
      let's try thresholding the image first. Never mind if you aren't
      sure what this really does - for now just try to get used to the
      environment (The section called IMAGE PROCESSING FUNCTIONS will
      discuss what each of these functions do). To select the thresholding
      function:
 
              1) Move the up-down arrow keys until the "Threshold"
                 option is highlighted. Press the <Enter> key.


                                  - Page 4 -


      ______________________________________________________________EyeSight


              2) A slide-bar will appear in the dialogue box at the
                 bottom of the screen. The slide-bar is used to
                 select a threshold value that will be used in the
                 thresholding operation. For now just use the default
                 value by pressing <Enter>.

      A thresholded image, which is simply a black-and-white version of
      the original image, will now appear on the right side of the
      screen.

      Congratulations, you have just completed your first image
      processing operation with EyeSight! It's easy, isn't it?

      EXPERIMENT SOME MORE

      While you have this image in memory, why not try thresholding the
      image again, but this time try using another threshold value. To
      perform another thresholding operation, select the "Threshold"
      function as before, but this time when the threshold bar pops-up
      in the dialogue box, use the left and right arrow keys to reposition
      the slide-bar to another threshold value. When the slide-bar is
      where you want it, press <Enter> and the thresholding operation
      will use this new threshold value.

      If you would like to go through a more in-depth example of using
      EyeSight, look at the section "Experimenting with EyeSight" which
      appears at the end of this manual.

      USING THE ENVIRONMENT

      EyeSight provides an extensive environment for vision processing. The
      functions are built around pull-down menus that you can easily
      access with the cursor keys, or as you become more familiar with
      the program, through specially defined keys.

      The various ways of pulling down a menu are:

              1) Move the highlighted bar to the desired option
                 with the arrow keys.
      or      2) If no pull-down menus are present, you can press
                 the first upper case letter of the desired
                 command. For example, you can type 'F' to select
                 the "File" option.
      or      3) While in any pull-down menu you can jump to
                 another pull-down menu by holding down the ALT
                 key and pressing the first upper case letter of
                 the desired command. 
      or      4) If the highlighted bar is on the selection and
                 no pull-down menu is present, press the "Enter"
                 key.


                                  - Page 5 -


      ______________________________________________________________EyeSight


      Ways of selecting a function within a pull-down menu:

              1) Move the highlighted bar up and down using the 
                 arrow keys until the desired function is high-
                 lighted, then press the <Enter> key.
      or      2) Type the capitalized letter that is in the
                 desired function name (i.e. e, f, s, p, o, or x).
      or      3) Some common functions, like reading an image file
                 have special function keys that can be used from
                 many points in the program (for a listing of
                 these see the section "Quick Commands").

      CHANGING YOUR MIND

      To abort or exit ANY command or pull-down menu use the "ESC" key.

      VISION PROCESSING SUPPORTED

      The following image processing functions are provided by default
      in EyeSight.

              Function          Brief Description
            ========================================================
              Histogram         Display a histogram of the current
                                image buffer
              Profile           Display the profile of the image
                                line specified for the current
			        image buffer
              Threshold         Threshold the current image buffer
              Roberts           Calculate and display the roberts
                                gradient of the current image
                                buffer
              Average           Average the current image and
                                display the result
              Contour           Trace the contours of regions in a
                                black and white image
              Burns             Locates lines in the current image

      In addition, there are several other functions that you can add
      to the EXEC menu. These functions are included under the OPTIONS/
      ADD FUNCTION selection. A list of these routines are:
       
             Function           Brief Description
            ========================================================
             Sobel              The Sobel edge detector
             Prewitt            The Prewitt edge detector
             Sharpen            Enhance the edges of the image
             Contrast           Stretch the contrast of the image
             And                Bitwise and two images
             Or                 Bitwise or two images

                                  - Page 6 -


      ______________________________________________________________EyeSight


             Function           Brief Description (Continued)
            ========================================================
             Add                Add two images pixel by pixel
             Subtract           Subtract two images
             Invert             Invert image values
             Log                Takes the log of the image
   
      CONFIGURABLE EXEC MENU
 
      These functions can be accessed by first adding them to the EXEC
      pull-down menu. This is accomplished by selecting the OPTIONS/
      ADD FUNCTION menu choice. A pop-up menu listing these
      functions will appear. Move the highlighted bar in the pop-up list
      to the function you would like to add and press the <Enter> 
      key. This function will then appear in the EXEC pull-down menu and 
      can be used like any of the other image processing routines in EXEC.

      Beyond these, you can examine individual pixel values in an image
      through the "Pixels" pull-down menu. For more on this, see the
      section "Examining Pixels."

      ALL IN AN IMAGE

      A computer image is made up of individual picture elements called
      pixels. The images in EyeSight are restricted to 128 x 128 pixels
      in size. A pixel represents the intensity of light in the image
      at its location in the scene. For the images in EyeSight each pixel
      can take on a value between 0 and 255, where 0 is black and 255
      is white. The values inbetween are various shades of gray.

      Note: EyeSight does not display all the gray-levels in an image.
      For instance, on a CGA graphics card, EyeSight will only display
      four gray-levels. For more on this, see the section entitled
      "Image Colors."

      WHAT YOU SEE ...

      EyeSight provides two windows for displaying images - one on the left
      side of the screen and the other on the right. In addition, the
      left window allows you to keep multiple images in memory at one time.

      THE LEFT DISPLAY WINDOW

      The left window is where all image files are read into and holds the
      input image used in all image processing function. Even though you
      can only display one image at a time in the left window, EyeSight
      allows you to have multiple images open at once by placing them  
      into a circular list of buffers. (The image currently being displayed


                                  - Page 7 -


      ______________________________________________________________EyeSight


      in the left window is often called the current image.) You can step
      through this list, and consequently change which one is displayed,
      with the F4 function key. Alternatively, you can get a list of all
      the currently open image buffers by holding the ALT key and pressing
      the letter b. From this list of buffers you can use the up and down
      arrow keys to select one of the buffers and then press <Enter> to
      have its image displayed in the left window.

      THE RIGHT DISPLAY WINDOW

      The right display window has only one image buffer. Its primary
      purpose is for displaying the results of an image processing
      operation. By placing the results in the right window, the original
      image (the image in the left display window) will not be over-
      written and will stay intact.

      IMAGE COLORS

      Each pixel in an image is represented by one pixel on the screen.
      The color on the screen indicates the value of the pixel.	Even
      though each image pixel can range between 0 and 255, you will
      not see all of the variations. For instance, on a CGA graphics
      card you will only see one of four colors displayed on the screen for
      any given pixel. The EGA mode also can only display four intensity
      levels but it uses four gray colors to accomplish this. VGA, on
      the other hand, can display 64 gray-levels.

      On a CGA the colors that are used to display an image correspond
      to the intensity values shown in the table below.

      Color on the screen      Pixel Value Range      Actual intensity
      ================================================================
            black                0 to 63                black
            magenta              64 to 127              dark gray
            cyan                 128 to 191             light gray
            white                192 to 255             white

      To configure EyeSight to use a particular mode, see the
      section SETTING THE GRAPHICS MODE.
      
      SELECTING THE DISPLAY WINDOW

      The output of all image processing operations is directed to the
      window above the " Result ^" message. When the program begins,
      "Result ^" defaults to the right window. You can alternate between
      the two display windows by pressing the TAB key. If "Result ^" is on
      the right side of the screen, (as it is by default) the result of
      all image processing functions will be displayed on the right and 
      the original image will stay intact. If the result is to be placed
      on the left side of the screen however, the original image will
      be overwritten and lost.

                                  - Page 8 -


      ______________________________________________________________EyeSight


      Note: Even though you can control where the output of an image
      processing function goes, all the vision processing functions use
      the current image from the left side of the screen as input.

      COPYING BETWEEN DISPLAY WINDOWS

      In order to provide a flexible environment for processing and
      displaying images, EyeSight allows you to copy images between the left
      and right windows. A "Duplicate" option exists under the "Images"
      menu. However, there are several quick keys which it informs you of
      that you can use directly. These commands are:

           Keys to use        Description
         ============================================================
              F5              Copy currently displayed left image
                              to the right display window
              F6              Copy the image in the right display
                              window to the left image. The
                              currently displayed left image will
                              be over-written
              SHIFT-F5        Copy the current image in the left
                              window into a NEW image buffer
                              (which this function will automat-
                              ically allocate) on the left side
                              of the screen. This effectively 
                              creates a duplicate of the current
                              image
              SHIFT-F6        Allocate a new image buffer in the
                              left window and copy the image in
                              the right window to it

      These copy commands will work with all images, except the results
      of the histogram, profile, contour, and Burns functions.

      READING AN IMAGE FILE AND MULTIPLE IMAGE BUFFERS

      As mentioned earlier, EyeSight supports multiple image buffers for the
      left display window. As a convenience, when EyeSight begins it
      automatically sets up a buffer for the first image to be read into. 
      Therefore, when the "Load Image" option is selected, the image will 
      be read directly from the image file to this buffer and displayed
      on the left side of the screen. The "Load Image" function will prompt
      you for the filename to read. If you use wildcard characters in
      the filename EyeSight will display a list of files that match its
      specifications from which you can select which file to be read.            

      By default, the "Load Image" function always reads an image file into
      the current image buffer in the left display window. However, if an
      image already exists in the current image buffer, EyeSight will prompt
      you if its okay to overwrite the buffer with the new image.
     
                                  - Page 9 -


      _____________________________________________________________EyeSight


      Alternatively, you can manually create a new buffer first by using
      the "Open Image" selection in the "File" pull-down menu and then
      reading the image file into this buffer by performing the "Load Image"
      function. Yet another way to read an image into a new buffer is to 
      use the SHIFT-F2 key combination. This will invoke a function which 
      allocates a new image buffer and then reads an image into it.

      (An alternative way of opening a new image buffer is to use the gray
      '+' key. Once again, to swap between the multiple buffers use the F4
      function key or the ALT-b command.)

      You can close a buffer by selecting the "Close Image" command also
      under the "File" menu bar. The grey '-' key performs the same
      function and makes a handy way of quickly deleting image
      buffers. Closing a buffer will erase the current image (in the left
      display window), delete it from the list of images, and then display
      the next image in the list, if one exists.

      READING A FILE FROM THE COMMAND-LINE

      You can also instruct EyeSight to read in an image file by specifying
      its name when you invoke the program. For instance, to read in the 
      clips image when the program is invoked, you need only type:

                            eyesight clips.im <Enter>

      If there are other images you want EyeSight to read, you may also put
      them after the EyeSight name -- each image file name should be
      separated by a space. The images will be placed into separate
      image buffers in the left display window and the last image in the
      list will be displayed in the left window.

      LISTING THE IMAGE BUFFERS

      You can pop-up a list of the currently open image buffers by
      holding down the ALT key and pressing the letter b. You can
      switch the current image to one of these buffers by using
      the up and down arrow keys to select a buffer by highlighting
      it and then pressing <Enter>. The image corresponding to the
      selected buffer will appear in the left display window.

      WRITING AN IMAGE FILE

      You can write the current image to a disk file with the "Save Image"
      option under the "File" selection in the main menu bar. The file
      is stored as a binary file with a special header that is used
      internally by EyeSight.


                                  - Page 10 -



      ______________________________________________________________EyeSight


      In addition to this, each buffer has a name associated with 
      it. This name is used as the filename for the "Save Image" command. 
      You can change the name of the image with the "Rename Image" option 
      under the "File" header.

      DEFAULT PATHNAMES

      EyeSight also provides a set of default path prefixes that are used
      when reading or writing image files. This is particularly useful
      when you want to store images in various directories. The path
      prefixes are:

               Pathname          Description
              =======================================================
               input image       Directory image files are read from.
               output image      Directory image files are written to.
               current           Directory used for internal dir.
               DOS               Directory holding COMMAND.COM

      When EyeSight begins, the path prefixes are set to NULL so that all
      image files default to the current directory.

      Note: If you specify a directory prefix you should not place a "\"
      symbol at the end of the pathname.

      For most uses of EyeSight you will never need to alter these path
      names. EyeSight will always default to using the current directory
      which is adequate for most operations.

      CONFIGURATION FILE

      There are several user-definable constants in EyeSight - threshold
      values, graphics mode, path prefixes, and so on. These can all be
      defined in a configuration file. When EyeSight begins it looks
      in the current directory for a text file called 

			  	eyesight.cfg

      If this file exists, the specifications in the configuration are
      used. If the file does not exist, the system defaults to the
      internal configurations. Once in EyeSight, you can read in any
      configuration file with the "Option", "Load Configuration" command.
      In addition, you can save the current state of all settings in
      EyeSight at any time to a configuration file, by using the
      "Save Configuration" command under the "Option" pull-down menu.



                                  - Page 11 -



      ______________________________________________________________EyeSight


      HELP!

      EyeSight provides two levels of help. Pressing the F1 function key
      will initiate a general help system that is divided into several
      topics. You can select topics from the help screen by using the
      cursor keys and pressing <Enter> when the topic desired is
      highlighted.

      In addition, EyeSight provides a hypertext, context-sensitive
      help that is accessible with the SHIFT-F1 key combination. It
      provides short help descriptions about your current location in the
      environment. For example, if the highlight bar is on the 
      "Threshold" option and SHIFT-F1 is pressed, a brief help message
      will appear explaining the threshold operation. Words that appear
      in color within a help window act as hypertext links to other
      help displays. If you want help on such a topic, move the highlight
      bar in the help screen (using the arrow keys) to the word and
      press Enter. To exit a help screen, press ESC.

      INTERNAL DIRECTORY

      You can get a listing of the current directory (the directory
      specified in the OPTIONS/ CURRENT DIRECTORY option) by selecting
      the DIRECTORY option under the FILE option. You may use a wild
      card specification to restrict the directory listing.

      EXITING THE PROGRAM

      You can exit EyeSight at almost any point in the program by typing
      ALT-x. Alternatively, you can elect to suspend the program by
      pressing ALT-z and thereby enter the DOS environment. This option is
      handy if you have forgotten a filename and want to go out searching
      for it. Once you have suspended the program you can return to
      where you left off in EyeSight by typing "exit" at a DOS prompt.

      PRINTING AN IMAGE

      Another utility provided in EyeSight is a print screen function. You
      will find it under the "Images" menu header. For this function you
      will need an IBM compatible graphics printer connected to your PC.
      This function will only work in CGA mode. The function uses the DOS
      print screen call, so you must first initialize the systems to
      graphics mode by executing GRAPHICS.COM which is included in your
      DOS distribution disk. You only need to run this program once before
      you run EyeSight and only if you are going to print the screen.
      If you select this option, you will see the screen redrawn with
      the negatives of the images, then the printing enabled, and finally
      the screen restored to its original form. The image negation is
      needed in order for the printing to appear as it does on the screen.


                                  - Page 12 -


      ______________________________________________________________EyeSight


      EXAMINING PIXELS

      You can check the location of pixels in an image and their values
      with the "pixel Values" option under "Images". This selection will
      let you move a cursor to a particular image location and display its
      coordinates and pixel value. The cursor defaults to the "Result ^"
      window. You can toggle between the left and right images with the
      TAB key. In addition, if the "Result ^" window is pointing to the
      left display window, you can step through the image buffers using
      the F4 function key. To exit the pixel inspection routine, use the
      ESC key.

      The arrow keys move the cursor around the image. You can toggle the
      "Insert" key below the keypad to alter the amount that the cursor
      moves by. At any time you can jump the cursor back to the center of
      the image by pressing CTRL-HOME.

      TWO IMAGE OPERATIONS
 
      Some image operations, like add and subtract, require two images
      as input. Therefore an image marking function is provided so
      that you can select which images in the list of image buffers
      will be used in the operation. All the functions that use
      two images use the current image in the left display window and
      the currently marked image as input.
    
      To mark an image, first step through the list of images until
      the desired image is in the left display window. Then hold down the
      ALT key and press the letter m. This will mark that image. To show
      that the image has been marked, its name will be shown in reverse
      video. The marked image will be used in all succeeding two image 
      operations until you unmark it by pressing ALT-m again or when 
      you mark another image.  

      Once you have selected the second image, step back through the
      list of images until you get to the other image you want in the
      image operation. The result will be shown in the Result window 
      as before.

      If there are only two images in the list of images, then you do
      not need to mark either of the images -- it will automatically
      use the two images.

      IMAGE ANALYSIS FUNCTIONS

      The following is a very brief overview of the image processing
      functions supported in EyeSight.


                                  - Page 13 -


      ______________________________________________________________EyeSight


      Histogram - This function graphically displays the number of
      occurrences of each intensity value in an image. All possible
      gray scale values (intensity values) are plotted on the horizontal 
      axis and the number of occurrences of each of the gray scale values
      is represented by the vertical axis. Histograms are useful for
      determining good threshold values and checking the intensity
      distribution in an image.

      Threshold - Converts the current image to a black and white image.
      All pixels below a threshold value are set to black and all other
      values are set to white. Converting gray scale images to binary form
      is quite common in industrial systems. It simplifies the processing
      since the vision program only has to deal with two intensities --
      black and white. Usually contour followers are used in conjunction
      with thresholding operations to locate objects. See the description
      of the contour operation.

      Profile - This function graphically displays the pixel intensities
      for a single line in an image. This routine can give you a good
      idea how strong edges are in an image.
   
      Roberts Gradient - Named after its developer, the Robert's gradient 
      is an edge detector known for its simplicity and speed. Edge
      detectors try to locate edges of objects in an image in the hopes
      of being able to identify them. Although the Robert's gradient 
      doesn't yield results that are as good as many other edge detectors, 
      it is acceptable for exploring computer vision. As with each of the
      edge detectors in EyeSight, the roberts function will display a
      gradient image where each pixel indicates how strong edges are at
      each point in the image. The stronger the edge the greater the
      image pixel value displayed in the gradient image.

      Average - Reduces noise in an image by averaging small 3 by 3
      neighborhoods of pixels. This operation will also tend to blur
      an image.
      
      Sharpen - Enhances the edges of images by subtracting the Laplacian
      of the image with itself. Unfortunately, it often enhances noise
      too. It's fun to experiment with this routine -- especially when 
      the image is a little blurred.   

      Sobel - One of the most common edge detectors. It detects
      edges reasonably well although it does take a bit more time to
      compute than say the Roberts gradient. (See Roberts.)
 
      Prewitt - Yet another edge detector. It works much like the Sobel
      edge detector. The main difference is how the pixel neighborhoods
      are weighted when the edge operation is performed. (See Roberts.)

      And - Performs a bitwise AND of two images.

                                  - Page 14 -


      ______________________________________________________________EyeSight


      Or - Performs a bitwise OR of two images.

      Add - Adds two images together. All values are truncated to 255.

      Invert - Inverts an image so that black becomes white, white
      becomes black, and so on.

      Subtract - Takes the absolute value of the difference between two
      images.

      Contrast - Improves the contrast of an image. It removes a
      portion of the image's intensity values from the top and bottom
      of the histogram. The rest of the image is stretched to fill
      the full range of intensity values.
 
      Log - Calculates the logarithm of an image and rescales the
      resulting intensity values so that they range between 0 and 255.
      Consequently, it alters the distribution of the gray scale values
      in an image. Some researchers theorize that the human eye 
      automatically performs a log operation on all scenes so that
      we can see greater detail in shadowy areas.

      Burns - A line finding algorithm that uses regions of edge gradients
      as a basis for locating lines. This algorithm is excellent for 
      detecting a wide variety of edges; however it is memory greedy and
      computationally expensive. Nonetheless, finding lines can be
      a useful step in higher level vision processing.

      Contour - Thresholds the image and then divides the result into
      black and white regions that can be used for object recognition.
      The next section discusses it in greater detail.

      THE CONTOUR FOLLOWER

      Under the "Exec" menu selection is the Contour option. This routine
      is an implementation of a Binary Region Tracer. Quite simply, the
      routine traces the outlines of any regions it finds in a black and
      white image (hence the name binary). Binary Region Tracers were
      developed as the result of early vision research towards object
      recognition. They have found greatest acceptance on the
      industrial assembly line where the lighting can be strictly
      controlled.

      The routine implemented in EyeSight accumulates statistics
      about each region's area, perimeter, color, and so on as it
      scans the image. You can inspect this data after the contour
      routine has been run by pressing ALT-d. After doing this, one
      of the regions will be marked with a cursor and a window will
      appear on the other side of the screen with its statistics. To
      inspect the statistics for other regions, use the up and down
      arrow keys. Press ESC when you are finished.

                                  - Page 15 -


      ______________________________________________________________EyeSight


      Since the routine will only work on a black and white image, each
      time you call the contour program it will prompt you for a
      threshold value to apply against the image. The contour result will
      be displayed in the result window.

      To fully understand the limitations of the contour routine, try
      various threshold values on each image and see what happens. 

      EXPERIMENTING WITH EYESIGHT
 
      This section provides a hands-on tour through some of the
      facilities included in EyeSight. You should already have read
      the previous sections in this manual before continuing with
      this section.

      In particular, we will use EyeSight to demonstrate some of
      the differences between the Roberts and Sobel edge detectors.
      The following set of step-by-step instructions will guide
      you through reading an image file, calculating its gradient
      using the Roberts and Sobel edge detectors, and then subtracting
      these two intermediate results to illustrate the differences
      between them. For this example we will use the clips.im image
      file. You may want to experiment with others later.

      Step 1: Begin the EyeSight program, if you have not already
      done so, by typing

                               eyesight

      at the DOS prompt and pressing the Enter key. EyeSight will
      appear with an author message, simply press Enter to continue.

      Step 2: Read the clips.im image file. This is done by moving the
      highlight bar to the File pull-down menu using the left and
      right arrow keys (if it is not already selected) and then
      selecting the Load Image function in this pull-down menu by
      moving its highlight bar to Load Image and then pressing
      Enter. The program will then prompt you for an image file
      name. You should now type:

                               clips.im

      and press Enter. The image of a set of black clips on a white
      background will appear.

      Step 3: Now let's calculate the Roberts gradient for this image.
      The Roberts gradient is located in the Exec pull-down menu. To
      get to it, move the highlight bar to Exec using the left and


                                  - Page 16 -


      ______________________________________________________________EyeSight


      right arrow keys and to the word Roberts within its pull-down
      menu using the up and down arrow keys. Press Enter to execute
      the Roberts function.
          On the right of the screen will appear a gradient image of
      the original clips image. It indicates how strong edges are
      at each pixel in the image. The stronger the edge, the higher
      the pixel value (and brighter the color used to display the pixel).

      Step 4: We will be using the Roberts gradient image later so
      we need to copy it to our list of image buffers on the left
      side of the screen. To do this, hold down the Shift key and
      press the F6 function key. The Roberts result will now appear
      on the left side of the screen. (Note: the original clips
      image is still intact since we have copied the gradient
      image into a NEW buffer.) It is given a name of NONAME.IM.

      Step 5: Give the gradient image a name. Since we will be
      referring to the Roberts gradient result later, let's give it
      a new name. This is accomplished using the Rename Image function
      contained in the File pull-down menu. To use it press ALT-f (or
      use the arrow keys to get to the File pull-down menu), move the
      highlight bar to "Rename Image" and then press Enter. EyeSight
      will prompt you for the new image name. Type in:

                                clips.rob

      and press Enter. The name of the gradient image is now clips.rob.

      Step 6: Now let's get back to the original image of the clips by
      pressing the F4 function key. The clips.im will now appear.

      Step 7: Perform the Sobel edge detector on the clips image.
      Before we can do this we must add the Sobel function to the
      Exec pull-down menu. This is done by selecting the Add Function
      operation under the Option header in the main menu. To do this
      press ALT-o, followed by the letter 'a'. (Alternatively you can
      select this function by using the arrow keys.) A pop-up window
      listing several functions will appear in the middle of the screen.
      Move the highlight bar in this window down (using the down arrow
      key) until it is on the word sobEl. Press the Enter key. Now the
      Sobel function is available to you in the Exec pull-down menu. To
      use it press ALT-e and move the highlight bar until sobEl is
      selected and then press Enter.
          This will execute the Sobel function. (Note that the Sobel
      function takes longer to execute than the Roberts gradient did.)

      Step 8: Copy the Sobel result to the image buffer list on the left
      side of the screen. This is done by holding down the Shift key and
      pressing the function key F6. (The Sobel result will now appear in
      the left window.)


                                  - Page 17 -


      ______________________________________________________________EyeSight


      Step 9: Although it is not necessary, let's give the Sobel
      gradient image a new name. This is accomplished, as before,
      by using the Rename Image function in the File pull-down
      menu. To do this type ALT-f followed by the letter 'r'.
      Then type:

                              clips.sob

      at the prompt.

      Step 10: Now to subtract the two gradient images... First
      we need access to the image subtraction function in EyeSight.
      It is also included in the Add Function list under the Options
      menu. To return to this list press ALT-o and then the letter 'a'.
      Move the highlight bar in the pop-up list of functions, that
      should now appear, to the word sUbtract and press Enter.
      The subtraction routine should now be in the Exec pull-down
      menu.

      Step 11: When we execute the image subtraction routine it will
      use as input the current image (shown in the left display window)
      and a marked image. We will select and mark an image by pressing
      the ALt-m key combination when the desired image to mark is in
      the left display window. In this case we will make clips.sob the
      marked image. Since it is already the current image, simply
      type ALT-m. The name clips.sob should now appear in bold to
      indicate that it is a marked image.

      Step 12: Now move to the clips.rob image in the circular list
      of image buffers by pressing the F4 function key until it appears.
      You should only have to press F4 twice.

      Step 13: And finally (!) let's subtract clips.rob and clips.sob to
      illustrate the difference between the Roberts and Sobel edge detectors.
      To do this, press ALT-e, move the highlight bar to the word sUbtract,
      and then press Enter. The difference between the two edge gradient
      images will now appear on the right side of the screen.
          In practical terms this example illustrates that not all
      edge detectors are made equal. As you can see, the Sobel edge
      detector has done a better job of detecting object edges -- although 
      it was a little slower to do so.
          To see how significant the differences are, you might want to
      try using the pixel Values function in the Images pull-down
      menu or run the histogram on the difference image (To do the latter
      you should first copy the difference image to the left display
      window, since all image functions operate on the current image in
      the left display window.)


                                  - Page 18 -


      ______________________________________________________________EyeSight
      

      If you've made it this far, you are well on your way to using
      EyeSight to its fullest and will probably be discovering (or
      rediscovering) just how amazing our own vision capabilities
      really are! Good-luck!
         
      SCRIPT LANGUAGE

      EyeSight is going through a change. EyeSight is being equipped
      with a powerful script language that provides access to each of
      its functions. Unfortunately, this language interface is not
      complete so it is not presented here. However, the EyeSight
      distribution disk does contain a short script file, demo.scr,
      that demonstrates a handful of the EyeSight language primitives.
      To run this demonstration file type at the DOS prompt:

                          eyesight demo.scr

      This script file will execute a few of the functions provided
      in EyeSight and will display brief statements on each. You
      may want to take a closer look at this file.

      SETTING THE GRAPHICS MODE

      EyeSight supports three video adapters: the CGA, EGA, and VGA.
      The CGA is used by default. (For more information on what each
      of these modes can display, see the section entitled: Image Colors.)
          You can select which graphics mode to use by specifying in the
      configuration file the type of adapter installed. This is done
      with the "DISPLAY" command. For example, to configure EyeSight
      to use CGA, the command is:

      DISPLAY = CGA
 
      Similarly, to use EGA:

      DISPLAY = EGA4

      and finally, to use VGA, use:

      DISPLAY = VGA64

      Three sample configuration files are included with the distribution
      disk that already have these values in them. The one CGA.CFG is
      for the CGA, EGA.CFG for EGA, and VGA.CFG for the VGA. If you
      want to use a mode other than CGA (remember, EyeSight uses CGA by
      default), you should rename the file corresponding to the mode
      you'd like to use to "eyesight.cfg" and place this file in
      EyeSight's directory. Then when you start EyeSight it will appear
      in the mode selected. 


                                  - Page 19 -


      ______________________________________________________________EyeSight


      Tip: The EGA mode is the slowest, so if you have an EGA card, you
      may want to use the CGA mode anyway-- the difference in speed will
      more than make up for the inability to display images in gray
      colors.

      Warning: On some VGA cards, the CGA colors will not appear correctly.
      For these boards, you should only use the EGA4 or VGA64 settings.
     
      
      COMMAND SUMMARY

      Although all of the commands can be accessed through the cursor
      keys, they may also be selected by entering one or two letter
      command sequences and some even have specially defined quick-keys.
      The following is a list of all of the commands available
      in the default configuration of EyeSight.

      These commands do not appear in the menu system:
    
      Key Sequence         Description
      ===================================================================
 
      ALT-b                List all image buffers -- enables you to
                           jump to another image buffer by selecting
                           a buffer from the list and pressing <Enter>
      ALT-m                Mark an image to be used in a two operand
                           image operation like and, subtract, or add

      The following commands are listed in the menu system. You can
      use a combination of the arrow keys and the <Enter> key to select
      one of these functions or you can elect to use the key sequences
      shown.

      Key Sequence         Description
      ===================================================================
 
      ALT-f, l             load an image file into the current buffer
      ALT-f, s             save the current image buffer to a file
      ALT-f, o             open a new image buffer
      ALT-f, c             close the current image buffer
      ALT-f, n             display the next image buffer
      ALT-f, r             rename the current image buffer
      ALT-f, d             list files in the current directory
 
      ALT-e, h             display histogram of current image buffer
      ALT-e, p             display a profile of the current image buffer
      ALT-e, t             threshold the current image
      ALT-e, r             calculate and display roberts gradient
      ALT-e, a             average the current image
      ALT-e, c             trace the contours of a b&w version of the image
      ALT-e, b             find lines in the current image
     
                                  - Page 20 -


      ______________________________________________________________EyeSight


      Key Sequence         Description
      ===================================================================

      ALT-s                take a picture from a camera - NOT SUPPORTED
                           IN EyeSight
 
      ALT-i, v             examine pixel values in the Result window
      ALT-i, p             print the screen
      ALT-i, c             clear the display window above the "Result ^"
                           message
      ALT-i, t             toggle the Result window to the other display
                           window
      ALT-i, d             make a duplicate of an image

      ALT-o, p             change the default directory prefixes
      ALT-o, w             save the settings of the program in a
                           configuration file
      ALT-o, l             load a configuration file
      ALT-o, a             add a function to the "Exec" pull-down menu
      ALT-o, d             remove a function from the "Exec" pull-down menu
      ALT-o, s             suspend the program and return to DOS

      Beyond the standard commands there are several quick access commands.
      These are:

      QUICK COMMANDS:

      Key Sequence         Description
      ===================================================================
 
      TAB                  change window for vision processing results
                           This window is called the result window.
      ALT-c                clear Result display window
      ALT-p                perform a print screen
      ALT-x                exit program
      ALT-z                suspend program, exit to DOS
      +                    open an image buffer
      -                    close an image buffer
      F1                   help
      F2                   load an image file into the current image buffer
      F3                   write the current image buffer to a file 
      F4                   display next image buffer
      F5                   copy current image buffer to right window
      F6                   copy right image to current image buffer
      SHIFT-F1             quick command reference sheet
      SHIFT-F2             load an image file into a NEW buffer
      SHIFT-F5             copy current image into a new image buffer
                           and display it in left window
      SHIFT-F6             copy right image into a NEW buffer and
                           display it on the left side of the screen
      
                                  - Page 21 -


 



```
{% endraw %}

## VISION.DOC

{% raw %}
```

            A Quick Introduction to Computer Vision

                           
                       Loren Heiny
                       Robots, Etc
                       P.O. Box 122
                     Tempe, AZ  85280


   (A version of this article first appeared in the Winter
    1989 issue of Robot Review, Vol 2, No. 1, pp. 1-5.,
    950 Trout Brook Drive, West Hartford, CT 06119.)



Vision is amazing. When you sit back and think about how

much detail and information is almost instantly available to

us as we gaze around, you begin to appreciate the real

complexity and amazing power of our vision system. 

     As a robot experimenter, I look forward to the day when

my robot can see what I can. Unfortunately, we are far from

this goal. Part of the problem is the lightning fast

computing speed that is needed, but what it really comes

down to is that we simply don't know yet how to build such a

vision system.

     Despite this, researchers have developed volumes of

computer vision algorithms, ideas, and strategies. Some are

even useful. In this article we'll take a quick tour of two

computer vision techniques which are often used to implement

vision systems that recognize objects -- region analysis and

edge detection. These two techniques represent only a small

portion of the vision field, but they will introduce you to

some of the basic concepts involved in computer vision so that

you can begin thinking about a vision system for your own

computer or robot.


What's in an Image?

A computer image is made up of (usually) tens of thousands

of tiny elements, called pixels which are much like the tiny

dots that make up the picture on your TV set. In computer

vision analysis, it is up to the computer to scan through

these thousands of pixels and figure out *what objects are where*.

Unfortunately, each pixel taken by itself, does not

really provide much information. In fact, all it does

indicate is the average intensity of light at its location

in the scene. Converting these intensity values into real-

world objects is no easy chore!


Object Recognition

Recognizing objects is an extremely important part of

computer vision. There are two techniques commonly used --

region analysis and edge detection. Although both are used

in recognizing objects, they each go about it by from two

seemingly opposite directions. Region analysis, on the one

hand, attempts to recognize objects by grouping regions of

like pixels and then trying to match these regions with the

shapes and sizes of known objects. In contrast, edge

detection attempts to recognize objects by locating their

edges by looking for unlike pixels and then basing its

recognition upon the contours of these edge points. Neither

technique is fool proof, but each has found acceptance in

many areas. Let's begin by looking at region analysis more

closely.

 
Region Analysis

Region analysis, in principle, is very simple -- regions of

like pixels are grouped together to form objects. Usually,

an image is scanned from top to bottom, comparing each pixel

intensity with its neighbors. If adjacent pixels are

similar, then they are assumed to belong to the same object,

otherwise the pixels are assumed to be located on different

objects or part of the background.

     Probably the most successful form of region analysis

is called binary region analysis. Here, images of objects

laying on a highly contrasting background are first

converted so that they only contain two intensity values (or

gray-levels as they are more commonly called) -- black and

white. This process is called thresholding because all

intensity values above a particular value, the threshold,

are set to one gray level (white, for instance) and all

others to a second value (in this case, black). As long as

all objects contrast with their background, they will

become one intensity and the background the other.

Once a binary image has been generated it is a matter of

grouping all connected pixels that are similar into regions

so that they can be matched with known objects. The matching

process is usually based on such things as the area,

"color," perimeter, and number of holes of the regions.

     To make the technique work well, however, several

conditions usually must be met. First, there must be good

contrast between the objects and the background. Second, in

order to maintain this contrast, many times the lighting

must be known or at least controlled. And thirdly,

recognition of objects usually requires that they are always

viewed from the same orientation and perspective.

     Although, each of these conditions can become very

restrictive, they aren't always a problem. For instance, on

assembly lines with overhead cameras and controlled

lighting binary region analysis can be very reliable and

useful.

     One of the reasons binary imagery is used is because it

is simple to implement. Therefore, it is worthwhile to try

to find some uses for it in our household robots. One

possibility, is to use binary region analysis to recognize

highly contrasting objects on a wall. For instance, your

robot might be able to recognize a dark door handle on a

white door by recognizing its circular contour and general

height above the floor. Another possibility is to "read"

special black-and-white markers that you have placed around

the house so your robot can see where it is.


--------------------------------------------------------------

EyeSight includes a binary region analysis function, called

Contour, which is located in the Exec pull-down menu. To run

this routine select the Contour command as outlined in the

EyeSight manual. It will display a slide-bar from which you

can select a threshold value which will be used to convert

the current image to binary form. (Use the left and right

arrow keys to select a threshold value and then press the

Enter key to accept it and begin processing.) Once the

threshold is chosen the binary version of the image will be

displayed followed by the outlines of the regions that were

found in the image.

     You can examine several of the statistics accumulated

on each region by pressing the ALT-D key combination. This

will cause a pop-up window to appear with the region

information for the region currently marked by a crosshair.

Use the up and down arrow keys to sequence through the

various regions in the image. Press ESC when you are done

and want to continue with EyeSight.

--------------------------------------------------------------


Edge Detection

There are many computer vision programs that base

their analysis not on the regions found in an image but

rather its edges. The basic idea is to scan the image

looking for significant changes in neighboring pixels.

This approach assumes that changes in adjacent pixels

will occur at the edges of objects. Therefore, once these

edge points are located, they can be chained together

and used to recognize what object they come from. Once

again, this is no easy chore.

     First, it is generally not easy to locate all of the

object edges in an image. In addition, it turns out that

many image edge points may not correspond to actual object

edges at all. For instance, shadows, texture, and lighting

variations can all create strong edges in an image that

obviously do not correspond to any real object edges.

Secondly, it is often very difficult to link edge points

correctly. Many times not all the edge points of an

object are strong enough to be detected. Therefore the

contour of the object is broken. Consequently, it is often

necessary to have to link small chains of non-connecting

edge points together to produce a complete chain of the

object's contour. This can be difficult because it is often 

a challenge to decide if two chains should really be

connected or not.


-----------------------------------------------------------

EyeSight:

EyeSight includes three edge detectors, each which is

named after its developer: Roberts, Sobel, and Prewitt.

Each edge detector uses a slightly different method to compare

neighboring pixels, although they all generate an edge

gradient image which indicates how strong edges are at

each location in an image.

     The Roberts edge detector is one of EyeSight's standard

functions and appears under the Exec pull-down menu. The Sobel

and Prewitt edge detectors, however, must be added to the

Exec menu before they can be used. This is accomplished by

selecting them from the Add Function command contained in

the Option menu. (Refer to the EyeSight manual for more

information on how to do this.)

     Each of the edge detectors, when selected, will display

a gradient image for the current image in EyeSight as

described in the EyeSight manual. In general, the stronger

the edges are in the gradient image, the brighter the pixels

will be. You may want to compare the results of each of the edge

detectors as described in the section EXPERIMENTING WITH EYESIGHT

in the EyeSight manual.

-----------------------------------------------------------


Line Finding

One common extension to edge detection is to combine

chains of edge points into lines and then base the image

analysis on these lines. This process, called line finding,

is quite attractive because it often simplifies object

recognition since there are far fewer lines in an image to

match or identify than edge points. In addition, line

finding often leads to fewer mis-matches and faster

processing.


-------------------------------------------------------------

EyeSight:

EyeSight includes the Burns line finding algorithm that

finds lines in an image by grouping regions of like *edge*

pixels and fitting lines to these regions. The Burns function

is located under the Exec pull-down menu. To find lines in

an image all you need to do is select the Burns command

(assuming you've already read in an image to the EyeSight

environment). Try experimenting with several different images

and note the number and quality of the lines found in each.

Alternatively, try guessing what is in the original image

based on the lines you see on the screen. This can be a 

real challenge!

----------------------------------------------------------------


Other Techniques and Closing Comments

So far we have briefly discussed some of the issues involved

in object recognition, but there are many more computer

vision techniques that have been developed over the years.

For example, researchers have used texture, shading, color,

focus, modeling, multiple image analysis (motion and

stereo), light striping, and much, much more to attempt to

interpret images.

     However, despite all of this effort, no one can yet

claim to have a vision system that can even remotely rival

our own. This is still a challenge yet to be met. Of course,

it does need to be said that a robot (or your computer) does

not necessarily have to be able to see the same way we do.

For example, it's probably not desirable to intentionally

program our robots to experience the same optical illusions

that we do--or is this unavoidable in a vision system that

equals our own?




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1678

     Volume in drive A has no label
     Directory of A:\

    BALLOON  IM      16512   3-11-89   3:06p
    BOLTS    IM      16512   3-11-89   2:58p
    CGA      CFG       189   3-13-89  10:37a
    CLIPS    IM      16512   3-11-89   3:03p
    COMPUTER IM      16512   3-11-89   3:04p
    DEMO     SCR       597   1-15-89   3:39p
    EGA      CFG       190   3-13-89  10:44a
    EYESIGHT EXE    154979   4-12-89   8:07p
    EYESIGHT HLP     22096   3-13-89   9:12a
    FILE1678 TXT      2443  12-07-89  12:31p
    FLOWER   IM      16512   3-11-89   3:07p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-08-89  12:47p
    MANUAL   DOC     58105   4-12-89  11:33a
    MTN      IM      16512   3-11-89   3:05p
    VGA      CFG       191   3-13-89  10:44a
    VISION   DOC     11668   4-07-89   1:12p
           17 file(s)     350108 bytes
                               0 bytes free
