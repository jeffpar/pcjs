---
layout: page
title: "The MS-DOS Encyclopedia: Appendix O: IBM PC ROM BIOS Calls"
permalink: /documents/books/programming/msdos/encyclopedia/appendix-o/
redirect_from: /pubs/pc/reference/microsoft/mspl13/msdos/encyclopedia/appendix-o/
---

### Appendix O: IBM PC ROM BIOS Calls

{% raw %}

	     To invoke an IBM PC ROM BIOS routine, set register AH to the desired
	     function and execute the software interrupt (INT) for the desired
	     routine.
	
	     Graphics pixel coordinates and cursor row and column coordinates are
	     always zero based.
	
	
	Interrupt 10H: Video Services
	
	Function 00H: Set Video Mode
	
	To call:
	     AH      = 00H
	     AL      = mode:
	             = 00H    16-shade gray text           40 by 25    B000:8000H
	                      EGA: 64-color
	             = 01H    16/8-color text              40 by 25    B000:8000H
	                      EGA: 64-color
	             = 02H    16-shade gray text           80 by 25    B000:8000H
	                      EGA: 64-color
	             = 03H    16/8-color text              80 by 25    B000:8000H
	                      EGA: 64-color
	             = 04H    4-color graphics            320 by 200   B000:8000H
	             = 05H    4-shade gray graphics       320 by 200   B000:8000H
	             = 06H    2-shade gray graphics       640 by 200   B000:8000H
	             = 07H    monochrome text              80 by 25    B000:0000H
	             = 08H    16-color graphics           160 by 200   B000:0000H
	             = 09H    16-color graphics           320 by 200   B000:0000H
	             = 0AH    4-color graphics            640 by 200   B000:0000H
	             = 0BH    Reserved
	             = 0CH    Reserved
	             = 0DH    16-color graphics           320 by 200   A000:0000H
	             = 0EH    16-color graphics           640 by 200   A000:0000H
	             = 0FH    monochrome graphics         640 by 350   A000:0000H
	             = 10H    16/64-color graphics        640 by 350   A000:0000H
	
	Returns:
	     Nothing
	
	Function 01H: Set Cursor Size and Shape
	
	To call:
	     AH      = 01H
	     CH      = starting scan line
	     CL      = ending scan line
	
	     Note: CH < CL gives normal one-part cursor; CH > CL gives two-part
	     cursor; CH = 20H gives no cursor.
	
	Returns:
	     Nothing
	
	Function 02H: Set Cursor Position
	
	To call:
	     AH      = 02H
	     BH      = display page (0 in graphics)
	     DH      = row number
	     DL      = line number
	
	Returns:
	     Nothing
	
	Function 03H: Read Cursor Position, Size, and Shape
	
	To call:
	     AH      = 03H
	     BH      = display page
	
	Returns:
	     CH      = starting scan line
	     CL      = ending scan line
	     DH      = row number
	     DL      = column number
	
	Function 04H: Read Light-Pen Position
	
	To call:
	     AH      = 04H
	
	Returns:
	     AH      = status:
	             = 01H    pen triggered
	             = 00H    not triggered
	     BX      = pixel column number
	     CH      = pixel line number
	     CX      = pixel line number for some EGA modes
	     DH      = character row number
	     DL      = character column number
	
	Function 05H: Select Active Page
	
	To call:
	     AH      = 05H
	     AL      = page number:
	             = 00-07H    40-column text modes
	             = 00-03H    80-column text modes
	             = varies    EGA graphics modes
	
	     Note: Each page = 2 KB in 40-column text mode, 4 KB in 80-column text
	     mode.
	
	Returns:
	     Nothing
	
	Function 06H: Scroll Window Up
	Function 07H: Scroll Window Down
	
	To call:
	     AH      = 06H    scroll up
	             = 07H    scroll down
	     AL      = number of lines to scroll (00H blanks screen)
	     BH      = display attributes for blank lines
	     CH      = row number of upper left corner
	     CL      = column number of upper left corner
	     DH      = row number of lower right corner
	     DL      = column number of lower right corner
	
	Returns:
	     Nothing
	
	Function 08H: Read Character and Attribute at Cursor
	
	To call:
	     AH      = 08H
	     BH      = display page (for text mode only)
	
	Returns:
	     If text mode:
	
	     AH      = color attributes of character
	     AL      = ASCII character from current location
	
	     If graphics mode:
	
	     AL      = ASCII character (00H if unmatched)
	
	Function 09H: Write Character and Attribute
	
	To call:
	     AH      = 09H
	     AL      = ASCII character to write
	     BH      = display page
	     BL      = text attribute or graphics foreground color
	     CX      = number of times to write character (must be > 0)
	
	Returns:
	     Nothing
	
	     Note: Cursor position unchanged.
	
	Function 0AH: Write Character Only
	
	To call:
	     AH      = 0AH
	     AL      = ASCII character to write
	     BH      = display page
	     BL      = graphics foreground color (unused in text modes)
	     CX      = number of times to write character (must be > 0)
	
	Returns:
	     Nothing
	
	     Note: Cursor position unchanged.
	
	Function 0BH: Select Color Palette
	
	To call:
	     AH      = 0BH
	     BH      = palette color ID
	     BL      = color or palette value
	
	Returns:
	     Nothing
	
	Function 0CH: Write Pixel Dot
	
	To call:
	     AH      = 0CH
	     AL      = color attribute of pixel
	     CX      = pixel column number
	     DX      = pixel raster line number
	
	Returns:
	     Nothing
	
	Function 0DH: Read Pixel Dot
	
	To call:
	     AH      = 0DH
	     CX      = pixel column number (0-based)
	     DX      = pixel raster line number (0-based)
	
	Returns:
	     AL      = pixel color attribute
	
	Function 0EH: Write Character as TTY
	
	To call:
	     AH      = 0EH
	     AL      = ASCII character
	     BH      = display page
	     BL      = foreground color of character (unused in text mode)
	
	Returns:
	     Nothing
	
	     Note: Cursor position advanced; beep, backspace, linefeed, and
	     carriage return active; all other characters displayed.
	
	Function 0FH: Get Current Video Mode
	
	To call:
	     AH      = 0FH
	
	Returns:
	     AH      = characters per line (20, 40, or 80)
	     AL      = current video mode (see Interrupt 10H Function 00H)
	     BH      = active display page
	
	Function 13H: Write Character String
	
	To call:
	     AH      = 13H
	     AL      = subfunction number:
	             = 00H    string shares attribute in BL, cursor unchanged
	             = 01H    string shares attribute in BL, cursor advanced
	             = 02H    each character has attribute, cursor unchanged
	             = 03H    each character has attribute, cursor advanced
	     BH      = active display page
	     BL      = string attribute (for AL = 00H or 01H only)
	     CX      = length of character string
	     DH      = starting row number
	     DL      = starting column number
	     ES:BP   = address of string to be displayed
	
	     Note: For AL = 00H or 01H, string = (char, char, char, ...). For AL =
	     02H or 03H, string = (char, attr, char, attr, ...).
	
	Returns:
	     Nothing
	
	     Note: For AL = 01H or 03H, cursor position set to location following
	     last character output.
	
	Interrupt 11H: Get Peripheral Equipment List
	
	Returns:
	     AX      = equipment list code word (bit settings
	               PPMURRRUFFVVUUCI):
	             = PP    number of printers installed
	             = M     1 if internal modem installed
	             = RRR   number of RS-232 ports installed
	             = U     unused
	             = FF    number of floppy-disk drives minus 1 (0 = one drive)
	             = VV    initial video mode:
	                     00 = reserved
	                     01 = 40-by-25 color
	                     10 = 80-by-25 color
	                     11 = 80-by-25 monochrome
	             = U     unused
	             = C     1 if math coprocessor installed
	             = I     1 if IPL (Initial Program Load) diskette installed
	
	
	Interrupt 12H: Get Usable Memory Size (KB)
	
	Returns:
	     AX      = available memory size in KB
	
	
	Interrupt 13H: Disk Services
	
	Function 00H: Reset Disk System
	
	To call:
	     AH      = 00H
	     AL      = drive number:
	             = 00-7FH    floppy disk
	             = 80-FFH    fixed disk
	
	Returns:
	     CF      = 0    no error
	             = 1    error
	     AH      = error code (see Interrupt 13H Function 01H below)
	
	Function 01H: Get Disk Status
	
	To call:
	     AH      = 01H
	
	Returns:
	     AL      = disk status of previous disk operation:
	             = 00H    no error
	             = 01H    invalid command
	             = 02H    address mark not found
	             = 03H    write attempt on write-protected disk (F)
	             = 04H    sector not found
	             = 05H    reset failed (H)
	             = 06H    floppy disk removed (F)
	             = 07H    bad parameter table (H)
	             = 08H    DMA overflow (F)
	             = 09H    DMA crossed 64 KB boundary
	             = 0AH    bad sector flag (H)
	             = 10H    data error
	             = 11H    ECC data error (H)
	             = 20H    controller failed
	             = 40H    seek failed
	             = 80H    time out
	             = AAH    drive not ready (H)
	             = BBH    undefined error (H)
	             = CCH    write fault (H)
	             = E0H    status error (H)
	
	     Note: H = fixed disk only, F = floppy disk only.
	
	Function 02H: Read Disk Sectors
	Function 03H: Write Disk Sectors
	Function 04H: Verify Disk Sectors
	Function 05H: Format Disk Tracks
	
	To call:
	     AH      = 02H    read disk sectors
	             = 03H    write disk sectors
	             = 04H    verify disk sectors
	             = 05H    format disk track
	     AL      = number of sectors
	     CH      = cylinder number
	     CL      = sector number (unused if AH = 05H)
	     DH      = head number
	     DL      = drive number
	     ES:BX   = buffer address (unused if AH = 04H)
	
	Returns:
	     CF      = 0    no error
	             = 1    error
	     AH      = error code (see Interrupt 13H Function 01H)
	
	     If AH was 05H on call:
	
	     ES:BX   = 4-byte address field entries, 1 per sector:
	             = byte 0    cylinder number
	             = byte 1    head number
	             = byte 2    sector number
	             = byte 3    sector-size code:
	                         00H    128 bytes per sector
	                         01H    256 bytes per sector
	                         02H    512 bytes per sector (standard)
	                         03H    1024 bytes per sector
	
	Function 08H: Get Current Drive Parameters
	
	To call:
	     AH      = 08H
	     DL      = drive number
	
	Returns:
	     AX      = 00H
	     BH      = 00H
	     BL      = drive type
	     CH      = low-order 8 bits of 10-bit maximum number of cylinders
	     CL      = bits 7 and 6    high-order 2 bits of 10-bit maximum
	               number of cylinders
	             = bits 5-0        maximum number of sectors/track
	     DH      = maximum head number
	     DL      = number of drives installed
	     ES:DI   = address of floppy-disk-drive parameter table
	
	Function 09H: Initialize Hard-Disk Parameter Table
	
	To call:
	     AH      = 09H
	
	Returns:
	     Nothing
	
	Function 0AH: Read Long
	
	     Reads 512-byte sector plus 4-byte ECC code.
	
	To call:
	     See Interrupt 13H Function 02H.
	
	Returns:
	     See Interrupt 13H Function 02H.
	
	Function 0BH: Write Long
	
	     Writes 512-byte sector plus 4-byte ECC code.
	
	To call:
	     See Interrupt 13H Function 03H.
	
	Returns:
	     See Interrupt 13H Function 03H.
	
	Function 0CH: Seek to Head
	
	     Positions head but does not transfer data.
	
	To call:
	     See Interrupt 13H Functions 02H and 03H.
	
	Returns:
	     See Interrupt 13H Functions 02H and 03H.
	
	Function 0DH: Alternate Disk Reset
	
	To call:
	     AH      = 0DH
	     DL      = drive number
	
	Returns:
	     Nothing
	
	Function 10H: Test for Drive Ready
	
	To call:
	     AH      = 10H
	     DL      = drive number
	
	Returns:
	     AH      = status
	
	Function 11H: Recalibrate Drive
	
	To call:
	     AH      = 11H
	     DL      = drive number
	
	Returns:
	     AH      = status
	
	Function 14H: Controller Diagnostic
	
	To call:
	     AH      = 14H
	
	Returns:
	     AH      = status
	
	Function 15H: Get Disk Type
	
	To call:
	     AH      = 15H
	     DL      = drive number
	
	Returns:
	     AH      = drive type code:
	             = 00H    no drive present
	             = 01H    cannot sense when floppy disk is changed
	
	Function 16H: Get Disk Type
	
	To call:
	     AH      = 16H
	     DL      = drive number to check
	
	Returns:
	     AH      = 00H    no change
	             = 06H    floppy-disk change
	
	Function 17H: Set Disk Type
	
	To call:
	     AH      = 17H
	     DL      = drive number
	     AL      = floppy-disk type code
	
	Returns:
	     Nothing
	
	
	Interrupt 14H: Serial Port Services
	
	Function 00H: Initialize Port Parameters
	
	To call:
	     AH      = 00H
	     AL      = serial port parameters (bit settings BBBPPSCC):
	             = BBB    baud rate:
	                      000      110 baud
	                      001      150 baud
	                      010      300 baud
	                      011      600 baud
	                      100     1200 baud
	                      101     2400 baud
	                      110     4800 baud
	                      111     9600 baud
	             = PP     parity code:
	                      00         none
	                      01         odd
	                      10         none
	                      11         even
	             = S      number of stop bits code:
	                      0          one stop bit
	                      1          two stop bits
	             = CC     character size:
	                      00         unused
	                      01         unused
	                      10         7-bit character size
	                      11         8-bit character size
	     DX       = serial port number (0 = first port)
	
	Returns:
	     Nothing
	
	Function 01H: Send One Character
	
	To call:
	     AH      = 01H
	     AL      = character to send
	     DX      = serial port number (0 = first port)
	
	Returns:
	     AH      = error status (see Interrupt 14H Function 03H below):
	             = 00H    no error
	
	Function 02H: Receive One Character
	
	To call:
	     AH      = 02H
	     DX      = serial port number (0 = first port)
	
	Returns:
	
	     AL      = character received
	     AH      = error status (see Interrupt 14H Function 03H below):
	             = 00H    no error
	
	Function 03H: Get Port Status
	
	To call:
	     AH      = 03H
	     DX      = serial port number (0 = first port)
	
	Returns:
	     AX      = serial port status:
	             = 8000H    time out
	             = 4000H    transfer shift register empty
	             = 2000H    transfer holding register empty
	             = 1000H    break detect
	             = 0800H    framing error
	             = 0400H    parity error
	             = 0200H    overrun error
	             = 0100H    data ready
	             = 0080H    received line signal detect
	             = 0040H    ring indicator
	             = 0020H    data set ready
	             = 0010H    clear to send
	             = 0008H    delta receive line signal detect
	             = 0004H    trailing edge ring detector
	             = 0002H    delta data set ready
	             = 0001H    delta clear to send
	
	     Note: Multiple conditions can be active simultaneously.
	
	
	Interrupt 15H: Miscellaneous System Services
	
	Function 00H: Turn On Cassette Motor
	Function 01H: Turn Off Cassette Motor
	
	To call:
	     AH      = 00H    turn on cassette motor
	             = 01H    turn off cassette motor
	
	Returns:
	     Nothing
	
	Function 02H: Read Data from Cassette
	
	To call:
	     AH      = 02H
	     CX      = number of bytes to read
	     ES:BX   = buffer address
	
	Returns:
	     CF      = 0      no error
	             = 1      error
	     AH      = error status (if needed):
	             = 01H    CRC error
	             = 02H    bit signals scrambled
	             = 03H    no data found
	     DX      = number of bytes read
	     ES:BX   = location following last byte read
	
	Function 03H: Write Data to Cassette
	
	To call:
	     AH      = 03H
	     CX      = number of bytes to write
	     ES:BX   = buffer address
	
	     Note: Blocking factor = 256 bytes/block.
	
	Returns:
	     CX      = 00H
	     ES:BX   = location following last byte written
	
	
	Interrupt 16H: Keyboard Services
	
	Function 00H: Read Next Character
	
	To call:
	     AH      = 00H
	
	Returns:
	     If ASCII characters:
	
	     AH      = standard PC keyboard scan code
	     AL      = ASCII character
	
	     If extended ASCII codes:
	
	     AH      = extended ASCII code
	     AL      = 00H
	
	     Note: Does not return until character is read; removes character from
	     keyboard buffer.
	
	Function 01H: Report If Character Ready
	
	To call:
	     AH      = 01H
	
	Returns:
	     ZF      = 0      character ready
	             = 1      character not ready
	     AH      = see Interrupt 16H Function 00H
	     AL      = see Interrupt 16H Function 00H
	
	     Note: Returns immediately; does not remove character from keyboard
	     buffer.
	
	Function 02H: Get Shift Status
	
	To call:
	     AH      = 02H
	
	Returns:
	     AL      = shift status:
	             = 01H    right shift active
	             = 02H    left shift active
	             = 04H    Ctrl active
	             = 08H    Alt active
	             = 10H    Scroll Lock active
	             = 20H    Num Lock active
	             = 40H    Caps Lock active
	             = 80H    insert state active
	
	     Note: Multiple states can be active simultaneously.
	
	
	Interrupt 17H: Printer Services
	
	Function 00H: Send Byte to Printer
	
	To call:
	     AH      = 00H
	     AL      = character to be printed
	     DX      = printer number
	
	Returns:
	     AH      = status (see Interrupt 17H Function 02H
	
	Function 01H: Initialize Printer
	
	To call:
	     AH      = 01H
	     DX      = printer number
	
	Returns:
	     AH      = status (see Interrupt 17H Function 02H below)
	)
	
	Function 02H: Get Printer Status
	
	To call:
	     AH      = 02H
	     DX      = printer number
	
	Returns:
	     AH      = status:
	             = 01H    time out
	             = 02H    unused
	             = 04H    unused
	             = 08H    I/O error
	             = 10H    printer selected
	             = 20H    out of paper
	             = 40H    printer acknowledgment
	             = 80H    printer not busy (bit off, 0, = busy)
	
	     Note: Multiple states can be active simultaneously.
	
	
	Interrupt 18H: Transfer Control to ROM-BASIC
	
	
	Interrupt 19H: Reboot Computer (Warm Start)
	
	
	Interrupt 1AH: Get/Set Time/Date
	
	Function 00H: Read Current Clock Count
	
	To call:
	     AH      = 00H
	
	Returns:
	     AL      = midnight signal
	     CX      = high-order word of tick count
	     DX      = low-order word of tick count
	
	Function 01H: Set Current Clock Count
	
	To call:
	     AH      = 01H
	     CX      = high-order word of tick count
	     DX      = low-order word of tick count
	
	Returns:
	     Nothing
	
	Function 02H: Read Real-Time Clock
	
	To call:
	     AH      = 02H
	
	Returns:
	     CF      = 0      clock running
	             = 1      clock stopped
	     CH      = hours in BCD
	     CL      = minutes in BCD
	     DH      = seconds in BCD
	
	Function 03H: Set Real-Time Clock
	
	To call:
	     AH      = 03H
	     CH      = hours in BCD
	     CL      = minutes in BCD
	     DH      = seconds in BCD
	     DL      = 00H    standard time
	             = 01H    daylight saving time
	
	Returns:
	     Nothing
	
	Function 04H: Read Date from Real-Time Clock
	
	To call:
	     AH      = 04H
	
	Returns:
	     CF      = 0      clock running
	             = 1      clock stopped
	     CH      = century in BCD (19 or 20)
	     CL      = year in BCD
	     DH      = month in BCD
	     DL      = day in BCD
	
	Function 05H: Set Date in Real-Time Clock
	
	To call:
	     AH      = 05H
	     CH      = century in BCD (19 or 20)
	     CL      = year in BCD
	     DH      = month in BCD
	     DL      = day in BCD
	
	Returns:
	     Nothing
	
	Function 06H: Set Alarm
	
	To call:
	     AH      = 06H
	     CH      = hours in BCD
	     CL      = minutes in BCD
	     DH      = seconds in BCD
	
	Returns:
	     CF      = status:
	             = 0      operation successful
	             = 1      alarm already set or clock stopped
	
	Function 07H: Reset Alarm (Turn Alarm Off)
	
	To call:
	     AH      = 07H
	
	Returns:
	     Nothing

{% endraw %}

Return to [The MS-DOS Encyclopedia](../): [Contents](../#contents)
