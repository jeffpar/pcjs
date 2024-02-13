/**
 * @fileoverview PCx86-specific BIOS/DOS error codes
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

const Errors = {
    DOS: {
        INVALID_FUNC:           0x01,       // Invalid function number
        FILE_NOT_FOUND:         0x02,       // File not found
        PATH_NOT_FOUND:         0x03,       // Path not found
        TOO_MANY_OPEN_FILES:    0x04,       // Too many open files (no handles left)
        ACCESS_DENIED:          0x05,       // Access denied
        INVALID_HANDLE:         0x06,       // Invalid handle
        MEM_BLOCK_DAMAGED:      0x07,       // Memory control blocks destroyed
        OUT_OF_MEMORY:          0x08,       // Insufficient memory
        INVALID_MEM_BLOCK:      0x09,       // Invalid memory block address
        INVALID_ENV:            0x0A,       // Invalid environment
        INVALID_FORMAT:         0x0B,       // Invalid format
        INVALID_ACCESS:         0x0C,       // Invalid access code
        INVALID_DATA:           0x0D,       // Invalid data
        INVALID_DRIVE:          0x0F        // Invalid drive specified
    }
};

export default Errors;
