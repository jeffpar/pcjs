---
layout: page
title: "PC-SIG Diskette Library (Disk #3161)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3161/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3161"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## HISTORY.TXT

{% raw %}
```
**********************
* History of Changes *
**********************

Most of the following changes have been suggested by users of The
Desktop Helper.  I believe in giving credit to those who have taken
the time to pass along their suggestions.



----Version 1.4----
1.  DH will now make sure that its pop-up menu has the input focus
    and that the input focus will be restored to the correct window
    when the DH pop-up menu is removed from the screen.

    First reported by Jim D'Agostino.  Thanks.

2.  The Launch Parameters dialog box (accessed from the Launch
    Maintenance dialog box) now includes an optional Working Directory
    field.

    Added a selection for starting a task in the normal, maximized, or
    minimized Run Style.

    Added a Browse button.  If you can't remember where the program to
    be run is located then use this button to find it and automatically
    enter its path and file name into the Command Line field.

    You no longer have to type a "?" character at the beginning of the
    Command Line to get DH to prompt for command line parameters when a
    program is launched.  There is now a check box that should be used
    to indicate this.

    First requested by Jim Freeman, Jim D'Agostino, and MANY others.
    Thanks to all.


----Version 1.3----
1.  Fixed a bug when running under Windows 3.1.  When configured to
    use the left mouse button, the pop-up menu would stick and not
    disappear after letting up on the mouse button.  Even worse, a
    second left click would just bring the pop-up menu to a new location.
    Only the escape key would make it go away (sometimes).

2.  Windows (3.x) seems to lie about how high a single menu item is and
    therefore my calculation for how many items will fit in the pop-up
    menu list are wrong when the screen height is greater than 600.
    This didn't show up until I moved to 1024x768.  I was mystified when
    I had fewer items in the menu list than when I was using 800x600.
    Until I can figure a way around this I have disabled the calculation
    on resolutions greater than 600.  The maximum is set to 48.  If you
    should add more items to the list than will actually fit on the screen
    then the list will automatically be truncated.

3.  Added a Resources item to the Windows menu.  It displays information
    such as free memory and system resources.

4.  The Cascade and Tile menu items will only show up in the pop-up menu
    list for Windows 3.0.  These two items will not be included in the
    list if you run DH under Windows 3.1.  The Windows 3.1 Software
    Development Kit no longer supports the undocumented calls used to
    implement these two commands.

5.  With the death of Real Mode in Windows 3.1, DH will no longer work
    on an 8080 or 8086 processor.

6.  When an application caused critical error (system modal) dialog box
    appeared on the screen, often because you referenced a floppy drive
    without a diskette in it, you could not use your mouse to click on
    the Cancel or Retry buttons if DH was configured to use the left-hand
    mouse button.  This has now been fixed.

    First reported by Jim D'Agostino.  Thanks.


----Version 1.2----
1.  Fixed bug that caused a UAE when the DH pop-up menu was activated
    while the beg box was still on the screen.  The fix ensures that
    the user can not activate the pop-up menu while the beg box is
    on the screen.

    First reported by Ken Roser.  Thanks.

2.  The "Exit Windows" menu item has been moved to the Window sub-
    menu.  This seemed like a more appropriate place.

3.  Fixed bug with changing mouse button preferences.  After making a
    change only the desktop click activation method worked with the
    new button preference.  The non-client activation method would
    continue working with the old button preference until DH was
    exited and restarted.

4.  Double-clicking an item in the list box of the "Launch Maintenance"
    dialog box will now automatically invoke edit mode.  This is a
    short cut for- select an item and then select the "Edit" button.

5.  Fixed bug that did not tell the user if changes could not be saved
    to the DH.INI file.

    First reported by Jim D'Agostino.  Thanks.

6.  Changed the method by which a click on the Desktop is detected in
    order to avoid problems with Adobe Type Manager and other
    applications that subclass the Desktop.

    The symptom was that DH could be activated by a non-client area
    mouse click but NOT by a Desktop click.

    This also eliminates the problem of not being able to use the
    "Close" command to exit DH because some other task started after
    DH had also sub-classed the Desktop window.

7.  The default mouse button for first-time users has been changed
    from the left button to the right button.


----Version 1.1----
1.  The "Launch Maintenance" dialog box is now (finally!) functional.
    This eliminates the need to exit DH, use a text editor to edit
    DH.INI, and rerun DH.

    You view, change, delete, and add menu entries as well as move an
    entry up or down to change its position in the list.

    Because it is no longer necessary to edit DH.INI, the description
    of its format and contents have been dropped from the manual
    (DH.WRI).

    Even though the format of DH.INI has changed slightly (SEPARATORs
    now have a digit appended to them), you do not need to make any
    changes manually.  A minor change will be made automatically the
    first time you use the new "Launch" menu to make a change to the
    menu list.

    Thanks to all those who have been patiently awaiting this feature
    and thanks to Jim & Jim who insisted that it be implemented in order
    to call DH a finished product.

2.  Minor bug fix- when calculating how many items will fit in the pop-up
    menu based on screen resolution the result was off by one.  For some
    reason I subtracted one from the result.  You may now have room to
    add one more item to the menu.

3.  DH will now first look for your DH.INI file in the same directory
    that DH was run from.  If it fails to find it there then it will
    default to the Windows directory.

    First suggested by Jim D'Agostino.  Thanks.


----Version 1.0----
1.  Public Release.
    
    Version 0.9 was released only to beta testers.


----Version 0.9----
1.  Increased the maximum number of characters per menu item from sixteen
    to thirty-two.

    First suggested by Tom Clark.  Thanks.

2.  The "Registration" dialog box allowed you to type more characters on
    each line then was acceptable.  The User Name is limited to twenty-
    five characters and the License Number is limited to six characters.
    It was possible to exceed both limits.

3.  Added additional Task Manager functionality- a multi-level "Windows"
    menu with the usual "Cascade", "Tile", and "Arrange ICONs".  This
    menu selection will arrange all desktop windows and ICONs.  It will
    not arrange child MDI windows and ICONs.

    First hinted at by Alan Mandler.  Thanks.

4.  Added a "Preferences" dialog box.  This dialog will allow you to
    choose left, right, or middle mouse button activation.  If you
    choose the right or middle buttons then it is not necessary to
    hold down the Control key when clicking in the non-client area of
    a window.  The other benefit is that you do not have to hold the
    button down- the menu won't disappear like it does when the left
    button is used.

    Also, note that if you select the middle button and your Windows
    mouse driver is not capable of supporting this button then you will
    not be able to activate DH.  You must manually edit DH.INI, change
    the "Button=3" entry in the "[Preferences]" section back to "Button=1"
    (left button) or "Button=2" (right button), and restart Windows.

    First suggested by Alan Mandler and Jim Freeman.  Thanks.

5.  Rearranged the components of the "Run" dialog box to allow for a
    longer list of directories and a larger path.

6.  Renamed the "Exit" menu item to "Close" so as not to be confused
    with the new "Exit Windows" menu item.

7.  Added an "Exit Windows" menu item.  This will terminate Windows
    without asking whether you want to save your Desktop changes.

    First suggested by Antonio R. Dias.  Thanks.

8.  DH can now be used as your primary shell program.  DH will display
    a minimal shell (title bar with System menu).  Just
    change the "shell" entry in system.ini to run dh.exe.  DH.EXE and
    DHHOOK.DLL must both be located in your Windows directory.

    The only other catch is that if your are running ATM (and possibly
    some other software, but who knows?...) any other programs in your
    "load=" or "run=" lines in win.ini will not automatically start up.
    They must be started manually.  This is a restriction at the moment.
    This problem will be solved in a future release.

    First suggested by Brent Ingraham.  Thanks.

9.  The "Run" dialog box now contains radio buttons that dictate what
    the default file name will be.

    First suggested by Ermine Todd III.  Thanks.

10. Try to find the hidden dedication display in the "About" dialog box.


----Version 0.8----
1.  Public Release.
    
    Version 0.7 was released only to beta testers.


----Version 0.7----
1.  There is now an alternate, more convenient way to activate The
    Desktop Helper.  Hold down the <Control> key while pressing the
    left mouse button on top of any non-client area of any window.
    Suitable non-client areas of a window are the title bar, a blank
    portion of the menu bar, scroll bars, ICONs, etc.

    This method is superior to the "hot keys" method of activation
    that some other launching utilities use.  Who wants to change
    the hot key used when ever you install a new application/utility
    that happens to use the same hot key?  It is also better than
    appending entries to the System Menu because the System Menu
    is not always available in every window, such as some dialog
    boxes.

    First suggested by Jim D'Agostino.  Thanks.

2.  In order to allow more space for user added programs, the "Launch",
    "Task", "Run", "About", and "Exit" menu items have been collapsed
    into one menu item called "Desktop Helper".

    First suggested by Jim Freeman.  Thanks.

3.  The maximum number of possible items that can be added to the
    pop-up menu has been increased from thirty-two to forty-eight
    (actual mileage will vary with vertical screen resolution).

4.  You can now add your own separator bars to the pop-up menu by
    placing the following line at the appropriate positions in the
    DH.INI file:

        (SEPARATOR)=

    Note that the above line must be typed exactly as stated.

    Also, note that a separator counts as one of the forty-eight possible
    menu items.

    First suggested by Brent Ingraham.  Thanks.

5.  Windows caches all .INI files.  It was possible to exit The Desktop
    Helper, edit DH.INI, and restart DH.EXE and not have the changes
    reflected in the pop-up menu.  This problem has now been corrected.

6.  The "Run" dialog box now contains the prompt for optional command
    line parameters and the "Run minimized" check box.  These two items
    used to be in a separate dialog box that popped up after the main
    file selection box.  This extra dialog box was a mild annoyance.

7.  It is now possible to have a program located on the launch menu to
    prompt for command line parameters.  This is done by placing a
    question mark as the very first character in front of the program
    name.  For example, to prompt for command line input when selecting
    the Write program the entry in DH.INI should look like this:

        Write=?write.exe

8.  The "About" dialog box now contains a button to allow you to
    register your copy of The Desktop Helper.  A registration number
    will be provided when you submit your registration fee.  A valid
    registration number will be necessary in the future to unlock
    additional functionality.


----Version 0.6----
1.  It was possible for Windows to crash when selecting a program to
    launch from the pop-up menu if Windows was running in Real or
    Standard mode.

2.  If the Windows Debugging Kernel was running, The Desktop Helper
    would cause a problem to be reported.


----Version 0.5----
1.  First general release to the public.
```
{% endraw %}

## ORDER.TXT

{% raw %}
```
                            REGISTRATION FORM
                            The Desktop Helper

Remit to:           Robert E. Alleger
                    317 Monroe Avenue
                    Edgewater Park, NJ 08010

Name (Last, First): ________________________________________________

Company:            ________________________________________________

Address:            ________________________________________________

                    ________________________________________________

                    ________________________________________________

CompuServe Account Number (if applicable):  ________________________

Version number of The Desktop Helper (displayed in About): _________

Where did you obtain this version?:  _______________________________

Quantity  Product                                Unit Price    Total

_______   Single User registration (license only)   $15       ______

_______   Upgrade to latest 1.xx version (check one)
          5 1/4" 360K [ ]  -OR-  3 1/2" 720K [ ]    $10       ______
          (only if you paid the registration fee)

          New Jersey residents   - sales tax                  ______

          Shipping and handling  - U.S. & Canada    $2        ______
          (only when ordering an
          upgrade diskette)      - International    $3        ______

                                                    Total     ______


Notes:    All prices are in U.S. currency.
          Residents of countries outside the U.S.A. and Canada
          will need to remit extra money to cover postage cost.

Comments about current release and suggestions for future releases:

____________________________________________________________________

____________________________________________________________________

____________________________________________________________________

____________________________________________________________________

____________________________________________________________________

____________________________________________________________________
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3161

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        14   1-12-92   1:00a
    READ     ME       4241   7-09-92   1:04a
    ORDER    TXT      2118   7-09-92   1:04a
    DH       WRI     38400   7-09-92   1:04a
    DH       INI       566   7-09-92   1:04a
    DH       EXE     40448   7-09-92   1:04a
    DHHOOK   DLL      6144   7-09-92   1:04a
    HISTORY  TXT     12769   7-09-92   1:04a
    SHOW     EXE      2040   9-12-88  10:48a
            9 file(s)     106740 bytes
                           51712 bytes free
