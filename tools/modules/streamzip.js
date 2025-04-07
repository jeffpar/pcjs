/**
 * @license node-stream-zip | (c) 2020 Antelle | https://github.com/antelle/node-stream-zip/blob/master/LICENSE
 * Portions copyright https://github.com/cthackers/adm-zip | https://raw.githubusercontent.com/cthackers/adm-zip/master/LICENSE
 * Updated for PCjs with ES13 (ES2022) features and support for assorted "legacy" archive/compressed data formats
 */

import fs from 'fs';
import path from 'path';
import events from 'events';
import zlib from 'zlib';
import stream from 'stream';
import Structure from './structure.js';
import {LegacyArc, LegacyZip} from './legacyzip.js';

/**
 * @typedef {Object} Config
 * @property {string} file (filename; required, unless fd is specified)
 * @property {string} password (decryption password; optional)
 * @property {Buffer} buffer (buffer; optional, and if present, used instead of file/fd)
 * @property {boolean} arcType (ARC file if 1, ZIP file if 2 or undefined; added for PCjs)
 * @property {boolean} storeEntries (default is true; ie, always store entries)
 * @property {boolean} skipEntryNameValidation (default is false; ie, always validate entry names)
 * @property {string} nameEncoding (default is "utf8"; undocumented)
 * @property {number} fd (file descriptor; undocumented as normally we open our own file descriptor)
 * @property {number} chunkSize (size of internal file buffer, default is generally 1024; undocumented)
 * @property {boolean} holdErrors (hold errors instead of throwing them; added for PCjs and LegacyZip support)
 * @property {function()} printfDebug (optional debug logging function; added for PCjs)
 */

/**
 * @class StreamZip
 */
export default class StreamZip extends events.EventEmitter {
    /**
     * Public class fields
     */
    static TYPE_ARC = 1;
    static TYPE_ZIP = 2;
    static LocalHeader = new Structure("LocalHeader")
        .field('signature',     Structure.UINT32, {
            'LOCSIG': 0x04034b50                        // "PK\003\004" (local file header signature)
        })
        .field('version',       Structure.UINT16)       // version needed to extract
        .field('flags',         Structure.UINT16, {     // general purpose bit flag
            ENC:        0x0001,                         // encrypted file
            COMP1:      0x0002,                         // compression option
            COMP2:      0x0004,                         // compression option
            DESC:       0x0008,                         // data descriptor
            ENH:        0x0010,                         // enhanced deflation
            STR:        0x0040,                         // strong encryption
            LNG:        0x0400                          // UNICODE encoding
        })
        .field('method',        Structure.UINT16)       // compression method
        .field('time',          Structure.UINT16)       // modification time
        .field('date',          Structure.UINT16)       // modification date
        .field('crc',           Structure.INT32)        // uncompressed file CRC-32 value
        .field('compressedSize',Structure.UINT32)       // compressed size
        .field('size',          Structure.UINT32)       // uncompressed size
        .field('fnameLen',      Structure.UINT16)       // filename length
        .field('extraLen',      Structure.UINT16)       // extra field length
        .verifySize(30);

    static SpanHeader = new Structure("SpanHeader")
        .field('signature',     Structure.UINT32, {
            'SPANSIG': 0x08074b50                       // "PK\007\008" (spanned/split archive signature)
        })                                              // if present, followed by 1 or more LocalHeader structures
        .verifySize(4);

    static CentralHeader = new Structure("CentralHeader")
        .field('signature',     Structure.UINT32, {
            'CENSIG': 0x02014b50                        // "PK\001\002" (central file header signature)
        })
        .field('verMade',       Structure.UINT16)       // version made by
        .field('version',       Structure.UINT16)       // version needed to extract
        .field('flags',         Structure.UINT16)       // general purpose bit flag
        .field('method',        Structure.UINT16)       // compression method
        .field('time',          Structure.UINT16)       // modification time
        .field('date',          Structure.UINT16)       // modification date
        .field('crc',           Structure.INT32)        // uncompressed file CRC-32 value
        .field('compressedSize',Structure.UINT32)       // compressed size
        .field('size',          Structure.UINT32)       // uncompressed size
        .field('fnameLen',      Structure.UINT16)       // filename length
        .field('extraLen',      Structure.UINT16)       // extra field length
        .field('comLen',        Structure.UINT16)       // file comment length
        .field('diskStart',     Structure.UINT16)       // disk number start
        .field('intAttr',       Structure.UINT16)       // internal file attributes
        .field('attr',          Structure.UINT32)       // external file attributes (host system dependent)
        .field('offset',        Structure.UINT32)       // relative offset of local header
        .verifySize(46);

    static CentralEndHeader = new Structure("CentralEndHeader")
        .field('signature',     Structure.UINT32, {
            'ENDSIG': 0x06054b50                        // "PK\005\006" (end of central dir signature)
        })
        .field('diskNum',       Structure.UINT16)       // number of this disk
        .field('diskStart',     Structure.UINT16)       // disk where central directory starts
        .field('volumeEntries', Structure.UINT16)       // number of entries on this disk
        .field('totalEntries',  Structure.UINT16)       // total number of entries
        .field('size',          Structure.UINT32)       // central directory size in bytes
        .field('offset',        Structure.UINT32)       // offset of first CEN header
        .field('commentLength', Structure.UINT16)       // zip file comment length
        .verifySize(22);

    static MAXFILECOMMENT = 0xffff;

    static Central64LocHeader = new Structure("Central64LocHeader")
        .field('signature',     Structure.UINT32,{
            'ENDL64SIG': 0x07064b50                     // "PK\006\007" (ZIP64 end of central directory locator)
        })
        .field('diskNum',       Structure.UINT32)       // number of this disk
        .field('headerOffset',  Structure.UINT64)       // offset of the ZIP64 end of central directory record
        .field('disks',         Structure.UINT32)       // total number of disks
        .verifySize(20);

    static Central64EndHeader = new Structure("Central64EndHeader")
        .field('signature',     Structure.UINT32, {
            'END64SIG': 0x06064b50                      // "PK\006\006" (ZIP64 end of central directory record)
        })
        .field('sizeEOCD',      Structure.UINT64)       // size of zip64 end of central directory record
        .field('verMade',       Structure.UINT16)       // version made by
        .field('version',       Structure.UINT16)       // version needed to extract
        .field('diskNum',       Structure.UINT32)       // number of this disk
        .field('diskStart',     Structure.UINT32)       // disk where central directory starts
        .field('volumeEntries', Structure.UINT64)       // number of entries on this disk
        .field('totalEntries',  Structure.UINT64)       // total number of entries
        .field('size',          Structure.UINT64)       // central directory size in bytes
        .field('offset',        Structure.UINT64)       // offset of first CEN header
        .verifySize(56);

    static ArcHeader = new Structure("ArcHeader")
        .field('signature',     Structure.UINT8, {
            'ARC_SIG':  0x1a                            // EOF
        })
        .field('type',          Structure.UINT8, {      // header type
            'ARC_END':  0x00,                           // end of archive
            'ARC_OLD':  0x01,                           // old archive header (unpacked, no 'size' field)
            'ARC_UNP':  0x02,                           // new archive header (unpacked, 'size' == 'compressedSize')
            'ARC_NR':   0x03,                           // non-repeat packing ("pack")
            'ARC_HS':   0x04,                           // Huffman squeezing ("squeeze")
            'ARC_LZ':   0x05,                           // LZ compression
            'ARC_LZNR': 0x06,                           // LZ non-repeat compression
            'ARC_LZNH': 0x07,                           // LZ with new hash
            'ARC_LZC':  0x08,                           // LZ dynamic ("crunch")
            'ARC_LZS':  0x09                            // LZ dynamic ("squash")
        })
        .field('name',          13)                     // filename (null terminated)
        .field('compressedSize',Structure.UINT32)       // compressed size
        .field('date',          Structure.UINT16)       // modification date
        .field('time',          Structure.UINT16)       // modification time (date and time order is reversed from ZIP files)
        .field('crc',           Structure.UINT16)       // CRC value
        .field('size',          Structure.UINT32)       // uncompressed size (not present if type == ARC_OLD)
        .verifySize(29);

    /* Compression methods */
    static ARC_UNP              = -2;                   // unpacked (no compression)
    static ARC_NR               = -3;                   // non-repeat packing ("pack")
    static ARC_HS               = -4;                   // Huffman squeezing ("squeeze")
    static ARC_LZ               = -5;                   // LZ compression
    static ARC_LZNR             = -6;                   // LZ non-repeat compression
    static ARC_LZNH             = -7;                   // LZ with new hash
    static ARC_LZC              = -8;                   // LZ dynamic ("crunch")
    static ARC_LZS              = -9;                   // LZ dynamic ("squash")

    static ZIP_STORE            = 0;                    // no compression
    static ZIP_SHRINK           = 1;                    // shrink
    static ZIP_REDUCE1          = 2;                    // reduce with compression factor 1
    static ZIP_REDUCE2          = 3;                    // reduce with compression factor 2
    static ZIP_REDUCE3          = 4;                    // reduce with compression factor 3
    static ZIP_REDUCE4          = 5;                    // reduce with compression factor 4
    static ZIP_IMPLODE          = 6;                    // implode
    static ZIP_DEFLATE          = 8;                    // deflate
    static ZIP_DEFLATE64        = 9;                    // deflate64
    static ZIP_IMPLODE_DCL      = 10;                   // PKWare DCL implode
    static ZIP_BZIP2            = 12;                   // compressed using BZIP2
    static ZIP_LZMA             = 14;                   // LZMA
    static ZIP_IBM_TERSE        = 18;                   // compressed using IBM TERSE
    static ZIP_IBM_LZ77         = 19;                   // IBM LZ77

    /* 4.5 Extensible data fields */
    static EF_ID                = 0;
    static EF_SIZE              = 2;

    /* Header IDs */
    static ID_ZIP64             = 0x0001;
    static ID_AVINFO            = 0x0007;
    static ID_PFS               = 0x0008;
    static ID_OS2               = 0x0009;
    static ID_NTFS              = 0x000a;
    static ID_OPENVMS           = 0x000c;
    static ID_UNIX              = 0x000d;
    static ID_FORK              = 0x000e;
    static ID_PATCH             = 0x000f;
    static ID_X509_PKCS7        = 0x0014;
    static ID_X509_CERTID_F     = 0x0015;
    static ID_X509_CERTID_C     = 0x0016;
    static ID_STRONGENC         = 0x0017;
    static ID_RECORD_MGT        = 0x0018;
    static ID_X509_PKCS7_RL     = 0x0019;
    static ID_IBM1              = 0x0065;
    static ID_IBM2              = 0x0066;
    static ID_POSZIP            = 0x4690;

    static EF_ZIP64_OR_32       = 0xffffffff;
    static EF_ZIP64_OR_16       = 0xffff;

    /**
     * Private instance fields
     *
     * Most of the StreamZip instance data is private, but instead of prefixing everything with '#', explicitly
     * private fields will be limited to those that conflict with public methods.
     */
    #entries;

    /**
     * Most of the instance methods are private as well, but again, in the interest of simplicity, we'll just
     * explicitly mark each public method in its comment header (wouldn't it be nice if all methods and properties
     * in JavaScript classes could default to private unless explicitly declared public?)
     */

    /**
     * @this {StreamZip}
     * @param {Config} config
     */
    constructor(config)
    {
        super();

        this.config = config;
        this.opened = false;        // true if WE opened the file (as opposed to the caller)
        this.ready = false;
        this.#entries = config.storeEntries !== false? {} : null,
        this.fileName = config.file,
        this.password = typeof config.password == "string"? config.password.toUpperCase() : null;
        this.buffer = config.buffer;
        this.arcType = config.arcType || StreamZip.TYPE_ZIP;
        this.arcOffset = config.arcOffset || 0;
        this.textDecoder = config.nameEncoding? new TextDecoder(config.nameEncoding) : null;
        this.printfDebug = config.printfDebug || function() {};

        /**
         * Don't automatically call open() if the caller has provided a buffer, because in that case,
         * all the initial reads are synchronous, and so the caller won't have a chance to set up its
         * event handlers before we start emitting events.
         *
         * Personally, I don't think open() should have *ever* been automatic in the first place....
         */
        if (!this.buffer) {
            this.open();
        }

        Object.defineProperty(this, 'ready', {
            get() {
                return this.ready;
            },
        });
    }

    /**
     * open()
     *
     * @this {StreamZip}
     */
    open()
    {
        if (this.buffer) {
            this.readFile();
        }
        else if (this.config.fd) {
            this.fd = this.config.fd;
            this.readFile();
        } else {
            fs.open(this.fileName, 'r', (err, f) => {
                if (err) {
                    return this.emit('error', err);
                }
                this.fd = f;
                this.opened = true;
                this.readFile();
            });
        }
    }

    /**
     * readFile()
     *
     * @this {StreamZip}
     */
    readFile()
    {
        let readFileDone = function(archive) {
            if (archive.arcType == StreamZip.TYPE_ARC) {
                archive.readArcEntries();
            } else {
                archive.readCentralDirectory();
            }
        };
        if (this.buffer) {
            this.fileSize = this.chunkSize = this.buffer.length;
            readFileDone(this);
        } else {
            fs.fstat(this.fd, (err, stat) => {
                if (err) {
                    return this.emit('error', err);
                }
                this.fileSize = stat.size;
                this.chunkSize = this.config.chunkSize || Math.round(this.fileSize / 1000);
                this.chunkSize = Math.max(
                    Math.min(this.chunkSize, Math.min(128 * 1024, this.fileSize)), Math.min(1024, this.fileSize)
                );
                readFileDone(this);
            });
        }
    }

    /**
     * readCentralDirectoryCallback()
     *
     * @this {StreamZip}
     */
    readCentralDirectoryCallback(err, bytesRead)
    {
        if (err || !bytesRead) {
            return this.emit('error', err || new Error('archive read failure'));
        }
        let pos = this.op.lastPos;
        let bufferPosition = pos - this.op.win.position;
        const buffer = this.op.win.buffer;
        const minPos = this.op.minPos;
        while (--pos >= minPos && --bufferPosition >= 0) {
            if (buffer.length - bufferPosition >= 4 && buffer[bufferPosition] === this.op.firstByte) {
                // quick check first signature byte
                if (buffer.readUInt32LE(bufferPosition) === this.op.sig) {
                    this.op.lastBufferPosition = bufferPosition;
                    this.op.lastBytesRead = bytesRead;
                    this.op.complete();
                    return;
                }
            }
        }
        if (pos === minPos) {
            return this.emit('error', new Error('bad archive'));
        }
        this.op.lastPos = pos + 1;
        this.op.chunkSize *= 2;
        if (pos <= minPos) {
            return this.emit('error', new Error('bad archive'));
        }
        const expandLength = Math.min(this.op.chunkSize, pos - minPos);
        this.op.win.expandLeft(expandLength, this.readCentralDirectoryCallback.bind(this));
    }

    /**
     * readCentralDirectory()
     *
     * @this {StreamZip}
     */
    readCentralDirectory()
    {
        const totalReadLength = this.buffer?
            this.fileSize :
            Math.min(StreamZip.CentralEndHeader.getSize() + StreamZip.MAXFILECOMMENT, this.fileSize);
        this.op = {
            totalReadLength,
            minPos: this.fileSize - totalReadLength,
            lastPos: this.fileSize,
            chunkSize: Math.min(1024, this.chunkSize),
            firstByte: StreamZip.CentralEndHeader.signature.ENDSIG & 0xff,
            sig: StreamZip.CentralEndHeader.signature.ENDSIG,
            complete: this.readCentralDirectoryComplete.bind(this),
        };
        if (this.buffer) {
            this.op.win = {
                buffer: this.buffer,
                position: 0
            };
            this.readCentralDirectoryCallback(null, this.fileSize);
        } else {
            this.op.win = new FileWindowBuffer(this, "CentralDirectory");
            this.op.win.read(this.fileSize - this.op.chunkSize, this.op.chunkSize, this.readCentralDirectoryCallback.bind(this));
        }
    }

    /**
     * readCentralDirectoryComplete()
     *
     * @this {StreamZip}
     */
    readCentralDirectoryComplete()
    {
        const buffer = this.op.win.buffer;
        const pos = this.op.lastBufferPosition;
        try {
            this.centralDirectory = new CentralDirectoryHeader();
            this.centralDirectory.read(buffer.slice(pos, pos + StreamZip.CentralEndHeader.getSize()));
            this.centralDirectory.headerOffset = this.op.win.position + pos;
            if (this.centralDirectory.commentLength) {
                //
                // Return a Buffer instead of a String, because a generic toString() call assumes
                // the data is UTF-8, and in the case of old ZIP files, it's almost invariably CP437.
                //
                this.comment = buffer.slice(
                    pos + StreamZip.CentralEndHeader.getSize(),
                    pos + StreamZip.CentralEndHeader.getSize() + this.centralDirectory.commentLength
                ) /* .toString() */;
            } else {
                this.comment = null;
            }
            this.entriesCount = this.centralDirectory.volumeEntries;
            if ((this.centralDirectory.volumeEntries === StreamZip.EF_ZIP64_OR_16 && this.centralDirectory.totalEntries === StreamZip.EF_ZIP64_OR_16) ||
                this.centralDirectory.size === StreamZip.EF_ZIP64_OR_32 || this.centralDirectory.offset === StreamZip.EF_ZIP64_OR_32) {
                this.readZip64CentralDirectoryLocator();
            } else {
                this.readEntries();
            }
        } catch (err) {
            this.emit('error', err);
        }
    }

    /**
     * readZip64CentralDirectoryLocator()
     *
     * @this {StreamZip}
     */
    readZip64CentralDirectoryLocator()
    {
        const length = StreamZip.Central64LocHeader.getSize();
        if (this.op.lastBufferPosition > length) {
            this.op.lastBufferPosition -= length;
            this.readZip64CentralDirectoryLocatorComplete();
        } else {
            this.op = {
                win: this.op.win,
                totalReadLength: length,
                minPos: this.op.win.position - length,
                lastPos: this.op.win.position,
                chunkSize: this.op.chunkSize,
                firstByte: StreamZip.ENDL64SIGFIRST,
                sig: StreamZip.ENDL64SIG,
                complete: this.readZip64CentralDirectoryLocatorComplete.bind(this),
            };
            this.op.win.read(this.op.lastPos - this.op.chunkSize, this.op.chunkSize, this.readCentralDirectoryCallback.bind(this));
        }
    }

    /**
     * readZip64CentralDirectoryLocatorComplete()
     *
     * @this {StreamZip}
     */
    readZip64CentralDirectoryLocatorComplete()
    {
        const buffer = this.op.win.buffer;
        const locHeader = new CentralDirectoryLoc64Header();
        locHeader.read(
            buffer.slice(this.op.lastBufferPosition, this.op.lastBufferPosition + StreamZip.Central64LocHeader.getSize())
        );
        const readLength = this.fileSize - locHeader.headerOffset;
        this.op = {
            win: this.op.win,
            totalReadLength: readLength,
            minPos: locHeader.headerOffset,
            lastPos: this.op.lastPos,
            chunkSize: this.op.chunkSize,
            firstByte: StreamZip.Central64EndHeader.signature.END64SIG & 0xff,
            sig: StreamZip.Central64EndHeader.signature.END64SIG,
            complete: this.readZip64CentralDirectoryComplete.bind(this),
        };
        this.op.win.read(this.fileSize - this.op.chunkSize, this.op.chunkSize, this.readCentralDirectoryCallback.bind(this));
    }

    /**
     * readZip64CentralDirectoryComplete()
     *
     * @this {StreamZip}
     */
    readZip64CentralDirectoryComplete()
    {
        const buffer = this.op.win.buffer;
        const zip64cd = new CentralDirectoryZip64Header();
        zip64cd.read(buffer.slice(this.op.lastBufferPosition, this.op.lastBufferPosition + StreamZip.Central64EndHeader.getSize()));
        this.centralDirectory.volumeEntries = zip64cd.volumeEntries;
        this.centralDirectory.totalEntries = zip64cd.totalEntries;
        this.centralDirectory.size = zip64cd.size;
        this.centralDirectory.offset = zip64cd.offset;
        this.entriesCount = zip64cd.volumeEntries;
        this.readEntries();
    }

    /**
     * readArcEntries()
     *
     * @this {StreamZip}
     */
    readArcEntries()
    {
        let win;
        if (this.buffer) {
            win = {                     // fake FileWindowBuffer
                buffer: this.buffer,
                position: this.arcOffset,
                avail: this.buffer.length - this.arcOffset
            };
        } else {
            win = new FileWindowBuffer(this, "readArcEntries");
        }
        this.op = {
            win,
            pos: this.arcOffset,
            chunkSize: this.chunkSize,  // StreamZip.ArcHeader.getSize(),
            entriesLeft: -1
        };
        this.entryTotal = 0;            // used as a sanity check to make sure we didn't miss any entries
        if (this.buffer) {
            this.readArcEntriesCallback(null, 0);
        } else {
            this.op.win.read(this.op.pos, Math.min(this.op.chunkSize, this.fileSize - this.op.pos), this.readArcEntriesCallback.bind(this));
        }
    }

    /**
     * readArcEntriesCallback()
     *
     * @this {StreamZip}
     */
    readArcEntriesCallback(err, bytesRead)
    {
        if (err) {
            return this.emit('error', err);
        }
        const buffer = this.op.win.buffer;
        let bufferPos = this.op.pos - this.op.win.position;
        let bufferAvail = Math.min(this.op.win.avail + bytesRead, buffer.length - bufferPos);
        const headerLen = StreamZip.ArcHeader.getSize();
        try {
            while (this.op.entriesLeft != 0) {
                let entry = new ArcEntry(this, this.config.holdErrors);
                if (!entry.getArcHeader(buffer, bufferPos, bufferAvail)) {
                    /**
                     * Too many ARC files are padded with garbage to enable this sanity check....
                     *
                     *  if (this.entryTotal + 2 < this.fileSize) {
                     *      this.emit('error', new Error("ARC entry total (" + this.entryTotal + ") does not match ARC size (" + this.fileSize + ")"));
                     *  }
                     */
                    break;
                }
                let entrySize = headerLen + entry.compressedSize;
                entry.offset = this.op.win.position + bufferPos;
                if (!this.config.skipEntryNameValidation) {
                    entry.validateName();
                }
                if (this.#entries) {
                    this.#entries[entry.name] = entry;
                }
                this.entryTotal += entrySize;
                this.emit('entry', entry);
                if (!--this.op.entriesLeft) break;
                this.op.pos += entrySize;
                bufferPos += entrySize;
                bufferAvail -= entrySize;
                if (bufferPos + headerLen > buffer.length) {
                    if (this.op.win.moveRight) {
                        this.op.win.moveRight(bufferPos, this.readArcEntriesCallback.bind(this));
                        this.op.move = true;
                        return;
                    }
                }
            }
            this.emit('ready');
        } catch (e) {
            this.emit('error', e);
        }
    }

    /**
     * readEntries()
     *
     * @this {StreamZip}
     */
    readEntries() {
        this.op = {
            pos: this.centralDirectory.offset,
            chunkSize: this.chunkSize,
            entriesLeft: this.centralDirectory.volumeEntries,
        };
        if (this.buffer) {
            this.op.win = {
                buffer: this.buffer,
                position: 0
            };
            this.readEntriesCallback(null, this.fileSize);
        } else {
            this.op.win = new FileWindowBuffer(this, "readEntries");
            this.op.win.read(this.op.pos, Math.min(this.chunkSize, this.fileSize - this.op.pos), this.readEntriesCallback.bind(this));
        }
    }

    /**
     * readEntriesCallback()
     *
     * @this {StreamZip}
     */
    readEntriesCallback(err, bytesRead)
    {
        if (err || !bytesRead) {
            return this.emit('error', err || new Error('ZIP entries read failure'));
        }
        let bufferPos = this.op.pos - this.op.win.position;
        let entry = this.op.entry;
        const buffer = this.op.win.buffer;
        const bufferLength = buffer.length;
        try {
            while (this.op.entriesLeft > 0) {
                if (!entry) {
                    entry = new ZipEntry(this, this.config.holdErrors);
                    entry.getCentralHeader(buffer, bufferPos);
                    entry.headerOffset = this.op.win.position + bufferPos;
                    this.op.entry = entry;
                    this.op.pos += StreamZip.CentralHeader.getSize();
                    bufferPos += StreamZip.CentralHeader.getSize();
                }
                const entryHeaderSize = entry.fnameLen + entry.extraLen + entry.comLen;
                const advanceBytes = entryHeaderSize + (this.op.entriesLeft > 1? StreamZip.CentralHeader.getSize() : 0);
                if (bufferLength - bufferPos < advanceBytes) {
                    this.op.win.moveRight(bufferPos, this.readEntriesCallback.bind(this));
                    this.op.move = true;
                    return;
                }
                entry.getEntryName(buffer, bufferPos, this.textDecoder);
                if (!this.config.skipEntryNameValidation) {
                    entry.validateName();
                }
                if (this.#entries) {
                    this.#entries[entry.name] = entry;
                }
                this.emit('entry', entry);
                this.op.entry = entry = null;
                this.op.entriesLeft--;
                this.op.pos += entryHeaderSize;
                bufferPos += entryHeaderSize;
            }
            this.emit('ready');
        } catch (e) {
            this.emit('error', e);
        }
    }

    /**
     * checkEntriesExist(callback)
     *
     * @this {StreamZip}
     * @param {function} callback
     */
    checkEntriesExist(callback)
    {
        if (!this.#entries) {
            let err = new Error('storeEntries disabled');
            if (callback) {
                callback(err);
                return;
            }
            throw err;
        }
    }

    /**
     * entry(name)
     *
     * @public
     * @this {StreamZip}
     */
    entry(name)
    {
        this.checkEntriesExist();
        return this.#entries[name];
    }

    /**
     * entries()
     *
     * @public
     * @this {StreamZip}
     */
    entries()
    {
        this.checkEntriesExist();
        return this.#entries;
    }

    /**
     * stream()
     *
     * @public
     * @this {StreamZip}
     */
    stream(entry, callback)
    {
        return this.openEntry(
            entry,
            (err, entry) => {
                if (err) {
                    return callback(err);
                }
                const offset = this.dataOffset(entry);
                let entryStream = new EntryDataReaderStream(this, "stream", offset, entry.compressedSize);
                if (entry.method === StreamZip.ZIP_STORE) {
                    // nothing to do
                } else if (entry.method === StreamZip.ZIP_DEFLATE) {
                    entryStream = entryStream.pipe(zlib.createInflateRaw());
                } else {
                    return callback(new Error("unsupported compression method (" + entry.method + ")"));
                }
                if (this.canVerifyCRC(entry)) {
                    entryStream = entryStream.pipe(
                        new EntryVerifyStream(entryStream, entry)
                    );
                }
                callback(null, entryStream);
            },
            false
        );
    }

    /**
     * entryDataSync()
     *
     * We now call entry.error() instead of throwing errors ourselves, to accommodate callers who want to
     * hold errors instead of catching them.  This also makes it possible for the caller to process as many
     * GOOD entries as possible, even if some of them are BAD.  Treating all errors as equally fatal is not
     * the best design and is something this entire library should probably revisit.  It's not clear what
     * mixture of try/catch and emit error handlers the caller is supposed to use, because relying just on
     * the emit 'error' handler means that any problem with a single entry can halt processing of the entire
     * archive.
     *
     * @public
     * @this {StreamZip}
     * @param {ZipEntry} entry
     * @returns {Buffer}
     */
    entryDataSync(entry)
    {
        let dst;
        let err = null;
        this.openEntry(
            entry,
            (e, en) => {
                err = e;
                entry = en;
            },
            true
        );
        if (err) {
            if (!entry) {
                throw err;
            }
            entry.error(err);
            return dst;
        }
        let src = Buffer.alloc(entry.compressedSize);
        if (this.buffer) {
            this.buffer.copy(src, 0, this.dataOffset(entry), this.dataOffset(entry) + entry.compressedSize);
        } else {
            new FsRead(this, "entryDataSync", src, 0, entry.compressedSize, this.dataOffset(entry), (e) => {
                err = e;
            }).read(true);
            if (err) {
                entry.error(err);
                return dst;
            }
        }
        /**
         * The actual decompression is now inside a loop AND a try/catch block, to automatically retry
         * decryption in case 1) a password was supplied but not actually required (the ARC file doesn't tell
         * us one way or the other) or 2) the ARC contains a mixture of encrypted and unencrypted files.
         *
         * With ARC files, our only clue that no password (or a different password) is required is when
         * decompression fails, and failure can take almost any form, since we may be feeding the decompressor
         * garbage.
         *
         * In the rare case where we do make a 2nd attempt, re-running the password code will restore the
         * src data to its original state, and entry.reset() will clear any logged errors from the 1st attempt.
         */
        let attempts = 2;                       // maximum of two attempts
        while (attempts--) {
            try {
                if (this.arcType != StreamZip.TYPE_ARC || !this.password) {
                    attempts = 0;               // only one attempt for the normal case
                } else {
                    /**
                     * TODO: decryption of password-protected files is limited to ARC archives, because
                     * the ARC implementation is simple and I haven't looked into how PKZIP implemented it yet.
                     */
                    for (let off = 0; off < src.length; off++) {
                        src.writeUInt8(src.readUInt8(off) ^ this.password.charCodeAt(off % this.password.length), off);
                    }
                    /**
                     * ARC file headers don't have a "flags" field, but we still include a flags field in the entry object,
                     * and we borrow the "ENC" flag from the ZIP file header definition to track whether this particular file
                     * was encrypted.
                     */
                    if (attempts) {
                        entry.flags |= StreamZip.LocalHeader.flags.ENC;
                    } else {
                        entry.reset();          // clear any errors from the previous attempt
                        entry.flags &= ~StreamZip.LocalHeader.flags.ENC;
                    }
                }
                let largeWindow, literalTree;
                switch(entry.method) {
                case StreamZip.ARC_UNP:
                case StreamZip.ZIP_STORE:
                    dst = src;
                    break;
                case StreamZip.ARC_NR:          // aka "Pack"
                    dst = LegacyArc.unpackSync(src, entry.size).getOutput();
                    break;
                case StreamZip.ARC_HS:          // aka "Squeeze" (Huffman squeezing)
                    dst = LegacyArc.unsqueezeSync(src, entry.size).getOutput();
                    break;
                case StreamZip.ARC_LZ:          // aka "Crunch5" (LZ compression)
                    dst = LegacyArc.uncrunchSync(src, entry.size, 0).getOutput();
                    break;
                case StreamZip.ARC_LZNR:        // aka "Crunch6" (LZ non-repeat compression)
                    dst = LegacyArc.uncrunchSync(src, entry.size, 1).getOutput();
                    break;
                case StreamZip.ARC_LZNH:        // aka "Crunch7" (LZ with new hash)
                    dst = LegacyArc.uncrunchSync(src, entry.size, 2).getOutput();
                    break;
                case StreamZip.ARC_LZC:         // aka "Crush" (dynamic LZW)
                    dst = LegacyArc.uncrushSync(src, entry.size, false).getOutput();
                    break;
                case StreamZip.ARC_LZS:         // aka "Squash"
                    dst = LegacyArc.uncrushSync(src, entry.size, true).getOutput();
                    break;
                case StreamZip.ZIP_SHRINK:
                    dst = LegacyZip.stretchSync(src, entry.size).getOutput();
                    break;
                case StreamZip.ZIP_REDUCE1:
                case StreamZip.ZIP_REDUCE2:
                case StreamZip.ZIP_REDUCE3:
                case StreamZip.ZIP_REDUCE4:
                    dst = LegacyZip.expandSync(src, entry.size, entry.method - StreamZip.ZIP_REDUCE1 + 1).getOutput();
                    break;
                case StreamZip.ZIP_IMPLODE:
                    largeWindow = !!(entry.flags & StreamZip.LocalHeader.flags.COMP1);
                    literalTree = !!(entry.flags & StreamZip.LocalHeader.flags.COMP2);
                    dst = LegacyZip.explodeSync(src, entry.size, largeWindow, literalTree).getOutput();
                    break;
                case StreamZip.ZIP_IMPLODE_DCL:
                    dst = LegacyZip.blastSync(src).getOutput();
                    break;
                case StreamZip.ZIP_DEFLATE:
                case StreamZip.ZIP_DEFLATE64:
                    dst = zlib.inflateRawSync(src);
                    break;
                default:
                    attempts = 0;
                    break;
                }
                if (dst) break;
            } catch(e) {
                entry.error(e);
            }
        }
        if (dst) {
            if (dst.length !== entry.size) {
                entry.error("expected " + entry.size + " bytes, received " + dst.length + " (method " + entry.method + ")");
            }
            else {
                /**
                 * If the sizes didn't match, then it's pretty much a given that the CRCs won't match either,
                 * so let's cut down on unnecessary errors.
                 */
                if (this.arcType == StreamZip.TYPE_ARC) {
                    let crc = LegacyArc.getCRC(dst);
                    if (crc != entry.crc) {
                        entry.error("expected CRC " + entry.crc.toString(16) + ", received " + crc.toString(16));
                    }
                } else {
                    if (this.canVerifyCRC(entry)) {
                        const verify = new CRCVerify(entry);
                        verify.data(dst);
                    }
                }
            }
        }
        else if (!entry.errors) {
            if (dst !== undefined) {
                entry.error("decompression failure");
            } else {
                entry.error("unsupported compression method (" + entry.method + ")");
            }
        }
        return dst;
    }

    /**
     * openEntry()
     *
     * @this {StreamZip}
     */
    openEntry(entry, callback, sync)
    {
        if (typeof entry === 'string') {
            this.checkEntriesExist(callback);
            entry = this.#entries[entry];
            if (!entry) {
                return callback(new Error('entry not found'));
            }
        }
        if (!entry.isFile) {
            return callback(new Error('entry is not file'), entry);
        }
        if (this.arcType == StreamZip.TYPE_ARC) {
            /**
             * ARC files contain only one set of file headers, which we have already read,
             * so all we have to do is return the entry.
             */
            callback(null, entry);
        }
        else {
            /**
             * ZIP files have both central directory entries (which were used to create the list
             * of entries) and local directory entries, which is what we read now.
             */
            if (this.buffer) {
                /**
                 * If we're using a buffer, we can simply use the buffer's data as the local header.
                 */
                let err = null;
                try {
                    entry.getLocalHeader(this.buffer, entry.offset);
                    if (entry.encrypted) {
                        err = new Error('entry encrypted');
                    }
                } catch (e) {
                    err = e;
                }
                return callback(err, entry);
            }
            if (!this.fd) {
                return callback(new Error('archive closed'), entry);
            }
            const buffer = Buffer.alloc(StreamZip.LocalHeader.getSize());
            new FsRead(this, "openEntry", buffer, 0, buffer.length, entry.offset, (err) => {
                if (!err) {
                    try {
                        entry.getLocalHeader(buffer, 0);
                        if (entry.encrypted) {
                            err = new Error('entry encrypted');
                        }
                    } catch (e) {
                        err = e;
                    }
                }
                callback(err, entry);
            }).read(sync);
        }
    }

    /**
     * dataOffset()
     *
     * @this {StreamZip}
     */
    dataOffset(entry)
    {
        let sizeHeader = (this.arcType == StreamZip.TYPE_ARC? StreamZip.ArcHeader.getSize() : StreamZip.LocalHeader.getSize());
        return entry.offset + sizeHeader + entry.fnameLen + entry.extraLen;
    }

    /**
     * canVerifyCRC()
     *
     * @this {StreamZip}
     * @returns {boolean}
     */
    canVerifyCRC(entry)
    {
        // If bit 3 (0x08) of the general-purpose flags field is set, then the CRC-32 and file sizes are not known when the header is written
        return !(entry.flags & StreamZip.LocalHeader.flags.DESC);
    }

    /**
     * createDirectories()
     *
     * @this {StreamZip}
     */
    createDirectories(baseDir, dirs, callback)
    {
        if (!dirs.length) {
            return callback();
        }
        let dir = dirs.shift();
        dir = path.join(baseDir, path.join(...dir));
        fs.mkdir(dir, { recursive: true }, (err) => {
            if (err && err.code !== 'EEXIST') {
                return callback(err);
            }
            this.createDirectories(baseDir, dirs, callback);
        });
    }

    /**
     * extractFiles()
     *
     * @this {StreamZip}
     */
    extractFiles(baseDir, baseRelPath, files, callback, extractedCount)
    {
        if (!files.length) {
            return callback(null, extractedCount);
        }
        const file = files.shift();
        const targetPath = path.join(baseDir, file.name.replace(baseRelPath, ''));
        this.extractFile(file, targetPath, (err) => {
            if (err) {
                return callback(err, extractedCount);
            }
            this.extractFiles(baseDir, baseRelPath, files, callback, extractedCount + 1);
        });
    }

    /**
     * extractFile()
     *
     * @this {StreamZip}
     */
    extractFile(entry, outPath, callback)
    {
        this.stream(entry, (err, stm) => {
            if (err) {
                callback(err);
            } else {
                let fsStm, errThrown;
                stm.on('error', (err) => {
                    errThrown = err;
                    if (fsStm) {
                        stm.unpipe(fsStm);
                        fsStm.close(() => {
                            callback(err);
                        });
                    }
                });
                fs.open(outPath, 'w', (err, fdFile) => {
                    if (err) {
                        return callback(err);
                    }
                    if (errThrown) {
                        fs.close(this.fd, () => {
                            callback(errThrown);
                        });
                        return;
                    }
                    fsStm = fs.createWriteStream(outPath, { fd: fdFile });
                    fsStm.on('finish', () => {
                        this.emit('extract', entry, outPath);
                        if (!errThrown) {
                            callback();
                        }
                    });
                    stm.pipe(fsStm);
                });
            }
        });
    }

    /**
     * extract()
     *
     * @public
     * @this {StreamZip}
     */
    extract(entry, outPath, callback)
    {
        let entryName = entry || '';
        if (typeof entry === 'string') {
            entry = this.entry(entry);
            if (entry) {
                entryName = entry.name;
            } else {
                if (entryName.length && entryName[entryName.length - 1] !== '/') {
                    entryName += '/';
                }
            }
        }
        if (!entry || entry.isDirectory) {
            const files = [],
                dirs = [],
                allDirs = {};
            for (const e in this.#entries) {
                if (
                    Object.prototype.hasOwnProperty.call(this.#entries, e) &&
                    e.lastIndexOf(entryName, 0) === 0
                ) {
                    let relPath = e.replace(entryName, '');
                    const childEntry = this.#entries[e];
                    if (childEntry.isFile) {
                        files.push(childEntry);
                        relPath = path.dirname(relPath);
                    }
                    if (relPath && !allDirs[relPath] && relPath !== '.') {
                        allDirs[relPath] = true;
                        let parts = relPath.split('/').filter((f) => f);
                        if (parts.length) {
                            dirs.push(parts);
                        }
                        while (parts.length > 1) {
                            parts = parts.slice(0, parts.length - 1);
                            const partsPath = parts.join('/');
                            if (allDirs[partsPath] || partsPath === '.') {
                                break;
                            }
                            allDirs[partsPath] = true;
                            dirs.push(parts);
                        }
                    }
                }
            }
            dirs.sort((x, y) => x.length - y.length);
            if (dirs.length) {
                this.createDirectories(outPath, dirs, (err) => {
                    if (err) {
                        callback(err);
                    } else {
                        this.extractFiles(outPath, entryName, files, callback, 0);
                    }
                });
            } else {
                this.extractFiles(outPath, entryName, files, callback, 0);
            }
        } else {
            fs.stat(outPath, (err, stat) => {
                if (stat && stat.isDirectory()) {
                    this.extractFile(entry, path.join(outPath, path.basename(entry.name)), callback);
                } else {
                    this.extractFile(entry, outPath, callback);
                }
            });
        }
    }

    /**
     * close()
     *
     * @public
     * @this {StreamZip}
     */
    close(callback)
    {
        if (!this.opened || !this.fd) {
            this.opened = false;
            if (callback) {
                callback();
            }
        } else {
            this.opened = false;
            fs.close(this.fd, (err) => {
                this.fd = null;
                if (callback) {
                    callback(err);
                }
            });
        }
    }

    /**
     * parseDateTime(date, time, fLocal, entry)
     *
     * ZIP archives contain local times, but this function treated them as UTC/GMT times,
     * forcing callers to jump through hoops (eg, getTimezoneOffset()) to get the original time.
     *
     * To avoid compatibility issues, we're leaving the 'time' entry property alone and calling
     * this a second time (with fLocal set) to return a Date object with the correct local time;
     * this will be stored in the entry as 'date'.
     *
     * Using a Date object makes this consistent with other file system APIs, such as fs.stat(),
     * which returns a file's modification time as a Date, in local time.
     *
     * @param {number} date (16 bits)
     * @param {number} time (16 bits)
     * @param {boolean} [fLocal]
     * @param {ZipEntry|ArcEntry} [entry]
     * @returns {number|Date} (milliseconds since the UNIX epoch, or a Date object if fLocal)
     */
    static parseDateTime(date, time, fLocal = false, entry = null)
    {
        let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
        let d = {
            y: (date >> 9) + 1980,
            m: ((date >> 5) & 0xf) - 1,
            d: (date & 0x1f),
            h: (time >> 11),
            n: (time >> 5) & 0x3f,
            s: (time & 0x1f) << 1
        };
        /**
         * date/time validation follows (although each part of the date/time is stored
         * in a limited number of bits, those bits can still contain out-of-bounds values).
         *
         * If date/time wasn't set (ie, 0x00000000), then m will be -1 and d will be 0,
         * resulting in a Date where getFullYear() < 1980.  We allow that, so that the caller
         * can detect that case and act accordingly; however, if date/time WAS set, then
         * we do NOT allow those values.
         *
         * Unfortunately, while files without dates were zipped by PKZIP with a date of zero,
         * when such files are unzipped with a modern `unzip` utility, the date is set to the
         * UNIX epoch, and when such files are re-zipped with a modern `zip` utility, the date
         * is set to Jan 1 1980, which is NOT zero.  By "rounding up" invalid dates to the
         * oldest valid MS-DOS date, modern zip utilities fail to preserve original timestamps
         * (or rather, the lack thereof); they should have re-zipped any date < 1980 as zero.
         */
        let errors = 0;
        let orig = { ...d };
        if ((date || time) && d.m < 0) {
            d.m = 0;
            errors++;
        }
        if (d.m > 11) {
            d.m = 11;
            errors++;
        }
        if ((date || time) && d.d < 1) {
            d.d = 1;
            errors++;
        }
        if (d.d > 31) {
            d.d = monthDays[d.m];
            if (d.y % 4 == 0) d.d++;        // adequate for the time-frame of dates we're dealing with
            errors++;
        }
        if (d.h > 23) {
            d.h = 23;
            errors++;
        }
        if (d.n > 59) {
            d.n = 59;
            errors++;
        }
        if (d.s > 59) {
            d.s = 59;
            errors++;
        }
        if (errors && entry) {
            entry.warning("invalid date/time " + '(' + (orig.m+1) + '/' + orig.d + '/' + orig.y + ' ' + orig.h + ':' + (orig.n < 10? '0' : '') + orig.n + ':' + (orig.s < 10? '0' : '') + orig.s + ')');
        }
        if (fLocal) {
            return new Date(d.y, d.m, d.d, d.h, d.n, d.s);
        }
        return Date.UTC(d.y, d.m, d.d, d.h, d.n, d.s);
    }
}

//
// TODO: Figure out if this is still necessary, because it's currently broken (fs is read-only)
//
// StreamZip.setFs = function(customFs) {
//     fs = customFs;
// };

const propZip = Symbol('zip');

StreamZip.async = class StreamZipAsync extends events.EventEmitter
{
    // eslint-disable-next-line require-jsdoc
    constructor(config)
    {
        super();

        const zip = new StreamZip(config);

        zip.on('entry', (entry) => this.emit('entry', entry));
        zip.on('extract', (entry, outPath) => this.emit('extract', entry, outPath));

        this[propZip] = new Promise((resolve, reject) => {
            zip.on('ready', () => {
                zip.removeListener('error', reject);
                resolve(zip);
            });
            zip.on('error', reject);
        });
    }

    // eslint-disable-next-line require-jsdoc
    get entriesCount()
    {
        return this[propZip].then((zip) => zip.entriesCount);
    }

    // eslint-disable-next-line require-jsdoc
    get comment()
    {
        return this[propZip].then((zip) => zip.comment);
    }

    // eslint-disable-next-line require-jsdoc
    async entry(name)
    {
        const zip = await this[propZip];
        return zip.entry(name);
    }

    // eslint-disable-next-line require-jsdoc
    async entries()
    {
        const zip = await this[propZip];
        return zip.entries();
    }

    // eslint-disable-next-line require-jsdoc
    async stream(entry)
    {
        const zip = await this[propZip];
        return new Promise((resolve, reject) => {
            zip.stream(entry, (err, stm) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(stm);
                }
            });
        });
    }

    // eslint-disable-next-line require-jsdoc
    async entryData(entry)
    {
        const stm = await this.stream(entry);
        return new Promise((resolve, reject) => {
            const data = [];
            stm.on('data', (chunk) => data.push(chunk));
            stm.on('end', () => {
                resolve(Buffer.concat(data));
            });
            stm.on('error', (err) => {
                stm.removeAllListeners('end');
                reject(err);
            });
        });
    }

    // eslint-disable-next-line require-jsdoc
    async extract(entry, outPath)
    {
        const zip = await this[propZip];
        return new Promise((resolve, reject) => {
            zip.extract(entry, outPath, (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    // eslint-disable-next-line require-jsdoc
    async close()
    {
        const zip = await this[propZip];
        return new Promise((resolve, reject) => {
            zip.close((err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
};

// eslint-disable-next-line require-jsdoc
class CentralDirectoryHeader
{
    // eslint-disable-next-line require-jsdoc
    read(data) {
        StreamZip.CentralEndHeader.setData(data);
        StreamZip.CentralEndHeader.verifyField('signature', 'ENDSIG');
        StreamZip.CentralEndHeader.assignField(this, ['volumeEntries', 'totalEntries', 'size', 'offset', 'commentLength']);
    }
}

// eslint-disable-next-line require-jsdoc
class CentralDirectoryLoc64Header
{
    // eslint-disable-next-line require-jsdoc
    read(data)
    {
        StreamZip.CentralEndLocator64.setData(data);
        StreamZip.CentralEndLocator64.verifyField('signature', 'ENDL64SIG');
        StreamZip.CentralEndLocator64.assignField(this, 'headerOffset');
    }
}

// eslint-disable-next-line require-jsdoc
class CentralDirectoryZip64Header
{
    // eslint-disable-next-line require-jsdoc
    read(data)
    {
        StreamZip.Central64EndHeader.setData(data);
        StreamZip.Central64EndHeader.verifyField('signature', 'END64SIG');
        StreamZip.Central64EndHeader.assignField(this, ['volumeEntries', 'totalEntries', 'size', 'offset']);
    }
}

// eslint-disable-next-line require-jsdoc
class Entry
{
    // eslint-disable-next-line require-jsdoc
    constructor(streamZip)
    {
        this.streamZip = streamZip;
        this.messages = [];
        this.flags = 0;
        this.errors = 0;
        this.holdErrors = streamZip.config.holdErrors;
    }

    // eslint-disable-next-line require-jsdoc
    reset()
    {
        this.messages = [];
    }

    // eslint-disable-next-line require-jsdoc
    message(err, type = "")
    {
        let msg;
        if (typeof err == "string") {
            msg = err;
            err = null;
        } else {
            msg = err.message;
        }
        msg = (type? type + ": " : "") + path.basename(this.streamZip.fileName) + "/" + (this.name? this.name + ": " : "") + msg;
        if (this.name) {
            this.messages.push(msg);
        }
        if (!this.holdErrors && type == "error") {
            throw new Error(msg);
        }
    }

    // eslint-disable-next-line require-jsdoc
    error(msg)
    {
        this.message(msg, "error");
        this.errors++;
    }

    // eslint-disable-next-line require-jsdoc
    warning(msg)
    {
        this.message(msg, "warning");
    }

    // eslint-disable-next-line require-jsdoc
    validateName()
    {
        let match = this.name.match(/\\|^\w+:|^\/|(^|\/)\.\.(\/|$)/);
        if (match) {
            this.warning("unexpected filename character(s) (" + match[0] + ")");
        }
    }

    // eslint-disable-next-line require-jsdoc
    get encrypted()
    {
        return (this.flags & StreamZip.LocalHeader.flags.ENC) === StreamZip.LocalHeader.flags.ENC;
    }

    // eslint-disable-next-line require-jsdoc
    get isFile()
    {
        return !this.isDirectory;
    }
}

// eslint-disable-next-line require-jsdoc
class ArcEntry extends Entry
{
    // eslint-disable-next-line require-jsdoc
    getArcHeader(data, offset, length)
    {
        /**
         * Normally, the final header in an ARC will contain at least 2 bytes (ARC_SIG followed
         * by ARC_END), but if we don't even have 2 bytes, give up now.
         */
        if (length < 2) {
            return false;
        }
        StreamZip.ArcHeader.setData(data, offset, length);
        /**
         * verifyField() will throw an exception if 1) 'signature' does not match the specified
         * value in the field definition, or 2) 'type' does not match *any* of the values listed
         * in the field definition.
         */
        StreamZip.ArcHeader.verifyField("signature", "ARC_SIG");
        this.type = StreamZip.ArcHeader.verifyField("type");
        /**
         * Since we can't know ahead of time how many headers are present in an ARC file, we rely on this
         * function returning false as soon as it encounters an ARC_END header.
         */
        if (StreamZip.ArcHeader.assignField(this, "type") === StreamZip.ArcHeader.type.ARC_END) {
            return false;
        }
        StreamZip.ArcHeader.assignField(this, ["name", "compressedSize", "size", "crc"]);
        const date = StreamZip.ArcHeader.getField("date");
        const time = StreamZip.ArcHeader.getField("time");
        this.time = StreamZip.parseDateTime(date, time);
        this.date = StreamZip.parseDateTime(date, time, true, this);
        this.method = -this.type;           // convert type to ARC method (signed to avoid conflict with ZIP methods)
        if (this.type == StreamZip.ArcHeader.type.ARC_OLD) {
            this.size = this.compressedSize;
            this.method = StreamZip.ARC_UNP;
        }
        if (this.type == StreamZip.ArcHeader.type.ARC_UNP && this.size != this.compressedSize) {
            throw new Error("invalid ARC header");
        }
        this.fnameLen = this.extraLen = 0;  // not present in ARC headers
        return true;
    }
}

// eslint-disable-next-line require-jsdoc
class ZipEntry extends Entry
{
    // eslint-disable-next-line require-jsdoc
    getLocalHeader(data, offset)
    {
        StreamZip.LocalHeader.setData(data, offset);
        StreamZip.LocalHeader.verifyField("signature", "LOCSIG");
        StreamZip.LocalHeader.assignField(this, ["version", "flags", "method"]);
        const time = StreamZip.LocalHeader.getField("time");
        const date = StreamZip.LocalHeader.getField("date");
        this.time = StreamZip.parseDateTime(date, time);
        this.date = StreamZip.parseDateTime(date, time, true, this);
        this.crc = StreamZip.LocalHeader.getField("crc") || this.crc;
        const compressedSize = StreamZip.LocalHeader.getField("compressedSize");
        if (compressedSize && compressedSize !== StreamZip.EF_ZIP64_OR_32) {
            this.compressedSize = compressedSize;
        }
        const size = StreamZip.LocalHeader.getField("size");
        if (size && size !== StreamZip.EF_ZIP64_OR_32) {
            this.size = size;
        }
        StreamZip.LocalHeader.assignField(this, ["fnameLen", "extraLen"]);
    }

    // eslint-disable-next-line require-jsdoc
    getCentralHeader(data, offset)
    {
        StreamZip.CentralHeader.setData(data, offset);
        StreamZip.CentralHeader.verifyField("signature", "CENSIG");
        StreamZip.CentralHeader.assignField(this, ["verMade", "version", "flags", "method"]);
        const time = StreamZip.CentralHeader.getField("time");
        const date = StreamZip.CentralHeader.getField("date");
        this.time = StreamZip.parseDateTime(date, time);
        this.date = StreamZip.parseDateTime(date, time, true, this);
        StreamZip.CentralHeader.assignField(this, ["crc", "compressedSize", "size", "fnameLen", "extraLen", "comLen", "diskStart", "intAttr", "attr", "offset"]);
    }

    // eslint-disable-next-line require-jsdoc
    getEntryName(data, offset, textDecoder)
    {
        const nameData = data.slice(offset, (offset += this.fnameLen));
        this.name = textDecoder? textDecoder.decode(new Uint8Array(nameData)) : nameData.toString('utf8');
        const lastChar = data[offset - 1];
        this.isDirectory = lastChar === 47 || lastChar === 92;

        if (this.extraLen) {
            this.getEntryExtra(data, offset);
            offset += this.extraLen;
        }
        //
        // Return a Buffer instead of a String, because a generic toString() call assumes
        // the data is UTF-8, and in the case of old ZIP files, it's almost invariably CP437.
        //
        this.comment = this.comLen? data.slice(offset, offset + this.comLen) /* .toString() */ : null;
    }

    // eslint-disable-next-line require-jsdoc
    getEntryExtra(data, offset)
    {
        let signature, size;
        const maxPos = offset + this.extraLen;
        while (offset < maxPos) {
            signature = data.readUInt16LE(offset);
            offset += 2;
            size = data.readUInt16LE(offset);
            offset += 2;
            if (StreamZip.ID_ZIP64 === signature) {
                this.getZip64Extra(data, offset, size);
            }
            offset += size;
        }
    }

    // eslint-disable-next-line require-jsdoc
    getZip64Extra(data, offset, length)
    {
        if (length >= 8 && this.size === StreamZip.EF_ZIP64_OR_32) {
            this.size = ZipEntry.getUInt64LE(data, offset);
            offset += 8;
            length -= 8;
        }
        if (length >= 8 && this.compressedSize === StreamZip.EF_ZIP64_OR_32) {
            this.compressedSize = ZipEntry.getUInt64LE(data, offset);
            offset += 8;
            length -= 8;
        }
        if (length >= 8 && this.offset === StreamZip.EF_ZIP64_OR_32) {
            this.offset = ZipEntry.getUInt64LE(data, offset);
            offset += 8;
            length -= 8;
        }
        if (length >= 4 && this.diskStart === StreamZip.EF_ZIP64_OR_16) {
            this.diskStart = data.readUInt32LE(offset);
            // offset += 4; length -= 4;
        }
    }

    /**
     * getUInt64LE(buffer, offset)
     *
     * TODO: Should Zip64 support be using BigInts?  Because what this function is currently
     * doing cannot accurately handle integer values larger than 2^53 (Number.MAX_SAFE_INTEGER).
     *
     * @param {Buffer} buffer
     * @param {number} offset
     * @returns {number}
     */
    static getUInt64LE(buffer, offset)
    {
        return buffer.readUInt32LE(offset + 4) * 0x0000000100000000 + buffer.readUInt32LE(offset);
    }
}

// eslint-disable-next-line require-jsdoc
class FsRead
{
    // eslint-disable-next-line require-jsdoc
    constructor(streamZip, descriptor, buffer, offset, length, position, callback)
    {
        this.streamZip = streamZip;
        this.descriptor = descriptor;
        this.fd = streamZip.fd;
        this.buffer = buffer;
        this.offset = offset;
        this.length = length;
        this.position = position;
        this.callback = callback;
        this.bytesRead = 0;
        this.waiting = false;
    }

    // eslint-disable-next-line require-jsdoc
    read(sync)
    {
        this.streamZip.printfDebug('read("%s", len=%#x, pos=%#x, bytesRead=%#x)\n', this.descriptor, this.length - this.bytesRead, this.position + this.bytesRead, this.bytesRead);
        this.waiting = true;
        let err;
        if (sync) {
            let bytesRead = 0;
            try {
                bytesRead = fs.readSync(
                    this.fd,
                    this.buffer,
                    this.offset + this.bytesRead,
                    this.length - this.bytesRead,
                    this.position + this.bytesRead
                );
            } catch (e) {
                err = e;
            }
            this.readCallback(sync, err, err ? bytesRead : null);
        } else {
            fs.read(
                this.fd,
                this.buffer,
                this.offset + this.bytesRead,
                this.length - this.bytesRead,
                this.position + this.bytesRead,
                this.readCallback.bind(this, sync)
            );
        }
    }

    // eslint-disable-next-line require-jsdoc
    readCallback(sync, err, bytesRead)
    {
        if (typeof bytesRead === 'number') {
            this.bytesRead += bytesRead;
        }
        if (err || !bytesRead || this.bytesRead === this.length) {
            this.waiting = false;
            return this.callback(err, this.bytesRead);
        } else {
            this.read(sync);
        }
    }
}

// eslint-disable-next-line require-jsdoc
class FileWindowBuffer
{
    // eslint-disable-next-line require-jsdoc
    constructor(streamZip, descriptor)
    {
        this.streamZip = streamZip;
        this.descriptor = descriptor;
        this.fd = streamZip.fd;
        this.position = 0;
        this.buffer = Buffer.alloc(0);
        this.avail = 0;
        this.fsOp = null;
    }

    // eslint-disable-next-line require-jsdoc
    checkOp()
    {
        if (this.fsOp && this.fsOp.waiting) {
            throw new Error('operation in progress');
        }
    }

    // eslint-disable-next-line require-jsdoc
    read(pos, length, callback)
    {
        this.checkOp();
        if (this.buffer.length < length) {
            this.buffer = Buffer.alloc(length);
        }
        this.position = pos;
        this.fsOp = new FsRead(
            this.streamZip,
            this.descriptor + ":read",
            this.buffer,
            0,
            length,
            this.position,
            callback
        ).read();
    }

    // eslint-disable-next-line require-jsdoc
    expandLeft(length, callback)
    {
        this.checkOp();
        this.buffer = Buffer.concat([Buffer.alloc(length), this.buffer]);
        this.position -= length;
        if (this.position < 0) {
            this.position = 0;
        }
        this.fsOp = new FsRead(
            this.streamZip,
            this.descriptor + ":expandLeft",
            this.buffer,
            0,
            length,
            this.position,
            callback
        ).read();
    }

    // eslint-disable-next-line require-jsdoc
    expandRight(length, callback)
    {
        this.checkOp();
        const offset = this.buffer.length;
        this.buffer = Buffer.concat([this.buffer, Buffer.alloc(length)]);
        this.fsOp = new FsRead(
            this.streamZip,
            this.descriptor + ":expandRight",
            this.buffer,
            offset,
            length,
            this.position + offset,
            callback
        ).read();
    }

    // eslint-disable-next-line require-jsdoc
    moveRight(shift, callback)
    {
        this.checkOp();
        this.avail = 0;
        if (shift && shift < this.buffer.length) {
            /**
             * Copy all the bytes in this.buffer from shift onward to this.buffer at offset 0.
             */
            this.avail = this.buffer.copy(this.buffer, 0, shift);
        }
        this.position += shift;
        if (shift > this.buffer.length) {
            shift = this.buffer.length;
        }
        this.fsOp = new FsRead(
            this.streamZip,
            this.descriptor + ":moveRight",
            this.buffer,
            this.buffer.length - shift,
            shift,
            this.position + this.buffer.length - shift,
            callback
        ).read();
    }
}

// eslint-disable-next-line require-jsdoc
class EntryDataReaderStream extends stream.Readable
{
    // eslint-disable-next-line require-jsdoc
    constructor(streamZip, descriptor, offset, length)
    {
        super();
        this.streamZip = streamZip;
        this.descriptor = descriptor;
        this.fd = streamZip.fd;
        this.offset = offset;
        this.length = length;
        this.pos = 0;
        this.readCallback = this.readCallback.bind(this);
    }

    // eslint-disable-next-line require-jsdoc
    _read(n)
    {
        const buffer = Buffer.alloc(Math.min(n, this.length - this.pos));
        if (buffer.length) {
            this.streamZip.printfDebug('_read("%s", len=%#x, pos=%#x)\n', this.descriptor, buffer.length, this.offset + this.pos);
            fs.read(this.fd, buffer, 0, buffer.length, this.offset + this.pos, this.readCallback);
        } else {
            this.push(null);
        }
    }

    // eslint-disable-next-line require-jsdoc
    readCallback(err, bytesRead, buffer)
    {
        this.pos += bytesRead;
        if (err) {
            this.emit('error', err);
            this.push(null);
        } else if (!bytesRead) {
            this.push(null);
        } else {
            if (bytesRead !== buffer.length) {
                buffer = buffer.slice(0, bytesRead);
            }
            this.push(buffer);
        }
    }
}

// eslint-disable-next-line require-jsdoc
class EntryVerifyStream extends stream.Transform
{
    // eslint-disable-next-line require-jsdoc
    constructor(baseStm, entry)
    {
        super();
        this.verify = new CRCVerify(entry);
        baseStm.on('error', (e) => {
            this.emit('error', e);
        });
    }

    // eslint-disable-next-line require-jsdoc
    _transform(data, encoding, callback)
    {
        let err;
        try {
            this.verify.data(data);
        } catch (e) {
            err = e;
        }
        callback(err, data);
    }
}

// eslint-disable-next-line require-jsdoc
class CRCVerify
{
    // eslint-disable-next-line require-jsdoc
    constructor(entry)
    {
        this.entry = entry;
        this.state = {
            crc: ~0,
            size: 0,
        };
    }

    // eslint-disable-next-line require-jsdoc
    data(data)
    {
        const crcTable = this.getCRCTable();
        let crc = this.state.crc;
        let off = 0;
        let len = data.length;
        while (--len >= 0) {
            crc = crcTable[(crc ^ data[off++]) & 0xff] ^ (crc >>> 8);
        }
        this.state.crc = crc;
        this.state.size += data.length;
        if (this.state.size >= this.entry.size) {
            if (this.state.size !== this.entry.size) {
                this.entry.error("expected " + this.entry.size + " bytes, received " + this.state.size);
            }
            else if (~this.state.crc !== this.entry.crc) {
                this.entry.error("expected CRC " + this.entry.crc.toString(16) + ", received " + crc.toString(16));
            }
        }
    }

    // eslint-disable-next-line require-jsdoc
    getCRCTable()
    {
        let crcTable = CRCVerify.crcTable;
        if (!crcTable) {
            CRCVerify.crcTable = crcTable = [];
            for (let n = 0; n < 256; n++) {
                let c = n;
                for (let k = 8; --k >= 0; ) {
                    if ((c & 1) !== 0) {
                        c = 0xedb88320 ^ (c >>> 1);
                    } else {
                        c = c >>> 1;
                    }
                }
                crcTable[n] = c;
            }
        }
        return crcTable;
    }
}
