/**
 * @license node-stream-zip | (c) 2020 Antelle | https://github.com/antelle/node-stream-zip/blob/master/LICENSE
 * Portions copyright https://github.com/cthackers/adm-zip | https://raw.githubusercontent.com/cthackers/adm-zip/master/LICENSE
 */

import fs from 'fs';
import util from 'util';
import path from 'path';
import events from 'events';
import zlib from 'zlib';
import stream from 'stream';

/**
 * @typedef {Object} Config
 * @property {boolean} storeEntries
 * @property {boolean} skipEntryNameValidation
 * @property {string} nameEncoding
 * @property {string} file (file name; undocumented)
 * @property {number} fd (file descriptor; undocumented)
 * @property {number} chunkSize (undocumented)
 */

/**
 * @class StreamZip
 */
export default class StreamZip {
    /*
     * Public class fields
     */

    /* The local file header */
    static LOCHDR = 30;                 // LOC header size
    static LOCSIG = 0x04034b50;         // "PK\003\004"
    static LOCVER = 4;                  // version needed to extract
    static LOCFLG = 6;                  // general purpose bit flag
    static LOCHOW = 8;                  // compression method
    static LOCTIM = 10;                 // modification time (2 bytes time, 2 bytes date)
    static LOCCRC = 14;                 // uncompressed file crc-32 value
    static LOCSIZ = 18;                 // compressed size
    static LOCLEN = 22;                 // uncompressed size
    static LOCNAM = 26;                 // filename length
    static LOCEXT = 28;                 // extra field length

    /* The Data descriptor */
    static EXTSIG = 0x08074b50;         // "PK\007\008"
    static EXTHDR = 16;                 // EXT header size
    static EXTCRC = 4;                  // uncompressed file crc-32 value
    static EXTSIZ = 8;                  // compressed size
    static EXTLEN = 12;                 // uncompressed size

    /* The central directory file header */
    static CENHDR = 46;                 // CEN header size
    static CENSIG = 0x02014b50;         // "PK\001\002"
    static CENVEM = 4;                  // version made by
    static CENVER = 6;                  // version needed to extract
    static CENFLG = 8;                  // encrypt, decrypt flags
    static CENHOW = 10;                 // compression method
    static CENTIM = 12;                 // modification time (2 bytes time, 2 bytes date)
    static CENCRC = 16;                 // uncompressed file crc-32 value
    static CENSIZ = 20;                 // compressed size
    static CENLEN = 24;                 // uncompressed size
    static CENNAM = 28;                 // filename length
    static CENEXT = 30;                 // extra field length
    static CENCOM = 32;                 // file comment length
    static CENDSK = 34;                 // volume number start
    static CENATT = 36;                 // internal file attributes
    static CENATX = 38;                 // external file attributes (host system dependent)
    static CENOFF = 42;                 // LOC header offset

    /* The entries in the end of central directory */
    static ENDHDR = 22;                 // END header size
    static ENDSIG = 0x06054b50;         // "PK\005\006"
    static ENDSIGFIRST = 0x50;
    static ENDSUB = 8;                  // number of entries on this disk
    static ENDTOT = 10;                 // total number of entries
    static ENDSIZ = 12;                 // central directory size in bytes
    static ENDOFF = 16;                 // offset of first CEN header
    static ENDCOM = 20;                 // zip file comment length
    static MAXFILECOMMENT = 0xffff;

    /* The entries in the end of ZIP64 central directory locator */
    static ENDL64HDR = 20;              // ZIP64 end of central directory locator header size
    static ENDL64SIG = 0x07064b50;      // ZIP64 end of central directory locator signature
    static ENDL64SIGFIRST = 0x50;
    static ENDL64OFS = 8;               // ZIP64 end of central directory offset

    /* The entries in the end of ZIP64 central directory */
    static END64HDR = 56;               // ZIP64 end of central directory header size
    static END64SIG = 0x06064b50;       // ZIP64 end of central directory signature
    static END64SIGFIRST = 0x50;
    static END64SUB = 24;               // number of entries on this disk
    static END64TOT = 32;               // total number of entries
    static END64SIZ = 40;
    static END64OFF = 48;

    /* Compression methods */
    static STORED = 0;                  // no compression
    static SHRUNK = 1;                  // shrunk
    static REDUCED1 = 2;                // reduced with compression factor 1
    static REDUCED2 = 3;                // reduced with compression factor 2
    static REDUCED3 = 4;                // reduced with compression factor 3
    static REDUCED4 = 5;                // reduced with compression factor 4
    static IMPLODED = 6;                // imploded
    static DEFLATED = 8;                // deflated
    static ENHANCED_DEFLATED = 9;       // deflate64
    static PKWARE = 10;                 // PKWare DCL imploded
    static BZIP2 = 12;                  // compressed using BZIP2
    static LZMA = 14;                   // LZMA
    static IBM_TERSE = 18;              // compressed using IBM TERSE
    static IBM_LZ77 = 19;               // IBM LZ77

    /* General purpose bit flag */
    static FLG_ENC = 0;                 // encrypted file
    static FLG_COMP1 = 1;               // compression option
    static FLG_COMP2 = 2;               // compression option
    static FLG_DESC = 4;                // data descriptor
    static FLG_ENH = 8;                 // enhanced deflation
    static FLG_STR = 16;                // strong encryption
    static FLG_LNG = 1024;              // language encoding
    static FLG_MSK = 4096;              // mask header values
    static FLG_ENTRY_ENC = 1;

    /* 4.5 Extensible data fields */
    static EF_ID = 0;
    static EF_SIZE = 2;

    /* Header IDs */
    static ID_ZIP64         = 0x0001;
    static ID_AVINFO        = 0x0007;
    static ID_PFS           = 0x0008;
    static ID_OS2           = 0x0009;
    static ID_NTFS          = 0x000a;
    static ID_OPENVMS       = 0x000c;
    static ID_UNIX          = 0x000d;
    static ID_FORK          = 0x000e;
    static ID_PATCH         = 0x000f;
    static ID_X509_PKCS7    = 0x0014;
    static ID_X509_CERTID_F = 0x0015;
    static ID_X509_CERTID_C = 0x0016;
    static ID_STRONGENC     = 0x0017;
    static ID_RECORD_MGT    = 0x0018;
    static ID_X509_PKCS7_RL = 0x0019;
    static ID_IBM1          = 0x0065;
    static ID_IBM2          = 0x0066;
    static ID_POSZIP        = 0x4690;

    static EF_ZIP64_OR_32   = 0xffffffff;
    static EF_ZIP64_OR_16   = 0xffff;

    /*
     * Private instance fields
     *
     * NOTE: Most of the StreamZip instance data is private, but instead of prefixing everything with '#',
     * private fields will be limited to those that conflict with public methods.
     */
    #entries;

    /*
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
        this.config = config;
        this.opened = false;
        this.ready = false;
        this.#entries = config.storeEntries !== false? {} : null,
        this.fileName = config.file,
        this.textDecoder = config.nameEncoding? new TextDecoder(config.nameEncoding) : null;
        this.open();
        Object.defineProperty(this, 'ready', {
            get() {
                return this.ready;
            },
        });
        this.originalEmit = events.EventEmitter.prototype.emit;
    }

    /**
     * open()
     *
     * @this {StreamZip}
     */
    open()
    {
        if (this.config.fd) {
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
        fs.fstat(this.fd, (err, stat) => {
            if (err) {
                return this.emit('error', err);
            }
            this.fileSize = stat.size;
            this.chunkSize = this.config.chunkSize || Math.round(this.fileSize / 1000);
            this.chunkSize = Math.max(
                Math.min(this.chunkSize, Math.min(128 * 1024, this.fileSize)),
                Math.min(1024, this.fileSize)
            );
            this.readCentralDirectory();
        });
    }

    /**
     * readUntilFoundCallback()
     *
     * @this {StreamZip}
     */
    readUntilFoundCallback(err, bytesRead)
    {
        if (err || !bytesRead) {
            return this.emit('error', err || new Error('Archive read error'));
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
            return this.emit('error', new Error('Bad archive'));
        }
        this.op.lastPos = pos + 1;
        this.op.chunkSize *= 2;
        if (pos <= minPos) {
            return this.emit('error', new Error('Bad archive'));
        }
        const expandLength = Math.min(this.op.chunkSize, pos - minPos);
        this.op.win.expandLeft(expandLength, this.readUntilFoundCallback.bind(this));
    }

    /**
     * readCentralDirectory()
     *
     * @this {StreamZip}
     */
    readCentralDirectory()
    {
        const totalReadLength = Math.min(StreamZip.ENDHDR + StreamZip.MAXFILECOMMENT, this.fileSize);
        this.op = {
            win: new FileWindowBuffer(this.fd),
            totalReadLength,
            minPos: this.fileSize - totalReadLength,
            lastPos: this.fileSize,
            chunkSize: Math.min(1024, this.chunkSize),
            firstByte: StreamZip.ENDSIGFIRST,
            sig: StreamZip.ENDSIG,
            complete: this.readCentralDirectoryComplete.bind(this),
        };
        this.op.win.read(this.fileSize - this.op.chunkSize, this.op.chunkSize, this.readUntilFoundCallback.bind(this));
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
            this.centralDirectory.read(buffer.slice(pos, pos + StreamZip.ENDHDR));
            this.centralDirectory.headerOffset = this.op.win.position + pos;
            if (this.centralDirectory.commentLength) {
                this.comment = buffer
                    .slice(
                        pos + StreamZip.ENDHDR,
                        pos + StreamZip.ENDHDR + this.centralDirectory.commentLength
                    )
                    .toString();
            } else {
                this.comment = null;
            }
            this.entriesCount = this.centralDirectory.volumeEntries;
            if ((this.centralDirectory.volumeEntries === StreamZip.EF_ZIP64_OR_16 && this.centralDirectory.totalEntries === StreamZip.EF_ZIP64_OR_16) ||
                this.centralDirectory.size === StreamZip.EF_ZIP64_OR_32 || this.centralDirectory.offset === StreamZip.EF_ZIP64_OR_32) {
                this.readZip64CentralDirectoryLocator();
            } else {
                this.op = {};
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
        const length = StreamZip.ENDL64HDR;
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
            this.op.win.read(this.op.lastPos - this.op.chunkSize, this.op.chunkSize, this.readUntilFoundCallback.bind(this));
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
            buffer.slice(this.op.lastBufferPosition, this.op.lastBufferPosition + StreamZip.ENDL64HDR)
        );
        const readLength = this.fileSize - locHeader.headerOffset;
        this.op = {
            win: this.op.win,
            totalReadLength: readLength,
            minPos: locHeader.headerOffset,
            lastPos: this.op.lastPos,
            chunkSize: this.op.chunkSize,
            firstByte: StreamZip.END64SIGFIRST,
            sig: StreamZip.END64SIG,
            complete: this.readZip64CentralDirectoryComplete.bind(this),
        };
        this.op.win.read(this.fileSize - this.op.chunkSize, this.op.chunkSize, this.readUntilFoundCallback.bind(this));
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
        zip64cd.read(buffer.slice(this.op.lastBufferPosition, this.op.lastBufferPosition + StreamZip.END64HDR));
        this.centralDirectory.volumeEntries = zip64cd.volumeEntries;
        this.centralDirectory.totalEntries = zip64cd.totalEntries;
        this.centralDirectory.size = zip64cd.size;
        this.centralDirectory.offset = zip64cd.offset;
        this.entriesCount = zip64cd.volumeEntries;
        this.op = {};
        this.readEntries();
    }

    /**
     * readEntries()
     *
     * @this {StreamZip}
     */
    readEntries() {
        this.op = {
            win: new FileWindowBuffer(this.fd),
            pos: this.centralDirectory.offset,
            chunkSize: this.chunkSize,
            entriesLeft: this.centralDirectory.volumeEntries,
        };
        this.op.win.read(this.op.pos, Math.min(this.chunkSize, this.fileSize - this.op.pos), this.readEntriesCallback.bind(this));
    }

    /**
     * readEntriesCallback()
     *
     * @this {StreamZip}
     */
    readEntriesCallback(err, bytesRead)
    {
        if (err || !bytesRead) {
            return this.emit('error', err || new Error('Entries read error'));
        }
        let bufferPos = this.op.pos - this.op.win.position;
        let entry = this.op.entry;
        const buffer = this.op.win.buffer;
        const bufferLength = buffer.length;
        try {
            while (this.op.entriesLeft > 0) {
                if (!entry) {
                    entry = new ZipEntry();
                    entry.readHeader(buffer, bufferPos);
                    entry.headerOffset = this.op.win.position + bufferPos;
                    this.op.entry = entry;
                    this.op.pos += StreamZip.CENHDR;
                    bufferPos += StreamZip.CENHDR;
                }
                const entryHeaderSize = entry.fnameLen + entry.extraLen + entry.comLen;
                const advanceBytes = entryHeaderSize + (this.op.entriesLeft > 1 ? StreamZip.CENHDR : 0);
                if (bufferLength - bufferPos < advanceBytes) {
                    this.op.win.moveRight(this.chunkSize, this.readEntriesCallback.bind(this), bufferPos);
                    this.op.move = true;
                    return;
                }
                entry.read(buffer, bufferPos, this.textDecoder);
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
        } catch (err) {
            this.emit('error', err);
        }
    }

    /**
     * checkEntriesExist()
     *
     * @this {StreamZip}
     */
    checkEntriesExist()
    {
        if (!this.#entries) {
            throw new Error('storeEntries disabled');
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
                let entryStream = new EntryDataReaderStream(this.fd, offset, entry.compressedSize);
                if (entry.method === StreamZip.STORED) {
                    // nothing to do
                } else if (entry.method === StreamZip.DEFLATED) {
                    entryStream = entryStream.pipe(zlib.createInflateRaw());
                } else {
                    return callback(new Error('Unknown compression method: ' + entry.method));
                }
                if (this.canVerifyCrc(entry)) {
                    entryStream = entryStream.pipe(
                        new EntryVerifyStream(entryStream, entry.crc, entry.size)
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
     * @public
     * @this {StreamZip}
     */
    entryDataSync(entry)
    {
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
            throw err;
        }
        let data = Buffer.alloc(entry.compressedSize);
        new FsRead(this.fd, data, 0, entry.compressedSize, this.dataOffset(entry), (e) => {
            err = e;
        }).read(true);
        if (err) {
            throw err;
        }
        if (entry.method === StreamZip.STORED) {
            // nothing to do
        } else if (entry.method === StreamZip.DEFLATED || entry.method === StreamZip.ENHANCED_DEFLATED) {
            data = zlib.inflateRawSync(data);
        } else {
            throw new Error('Unknown compression method: ' + entry.method);
        }
        if (data.length !== entry.size) {
            throw new Error('Invalid size');
        }
        if (this.canVerifyCrc(entry)) {
            const verify = new CrcVerify(entry.crc, entry.size);
            verify.data(data);
        }
        return data;
    }

    /**
     * openEntry()
     *
     * @this {StreamZip}
     */
    openEntry(entry, callback, sync)
    {
        if (typeof entry === 'string') {
            this.checkEntriesExist();
            entry = this.#entries[entry];
            if (!entry) {
                return callback(new Error('Entry not found'));
            }
        }
        if (!entry.isFile) {
            return callback(new Error('Entry is not file'));
        }
        if (!this.fd) {
            return callback(new Error('Archive closed'));
        }
        const buffer = Buffer.alloc(StreamZip.LOCHDR);
        new FsRead(this.fd, buffer, 0, buffer.length, entry.offset, (err) => {
            if (err) {
                return callback(err);
            }
            let readEx;
            try {
                entry.readDataHeader(buffer);
                if (entry.encrypted) {
                    readEx = new Error('Entry encrypted');
                }
            } catch (ex) {
                readEx = ex;
            }
            callback(readEx, entry);
        }).read(sync);
    }

    /**
     * dataOffset()
     *
     * @this {StreamZip}
     */
    dataOffset(entry)
    {
        return entry.offset + StreamZip.LOCHDR + entry.fnameLen + entry.extraLen;
    }

    /**
     * canVerifyCrc()
     *
     * @this {StreamZip}
     */
    canVerifyCrc(entry)
    {
        // if bit 3 (0x08) of the general-purpose flags field is set, then the CRC-32 and file sizes are not known when the header is written
        return (entry.flags & 0x8) !== 0x8;
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

    emit(...args)
    {
        if (this.opened) {
            return this.originalEmit.call(this, ...args);
        }
    }
}

//
// TODO: Figure out if this is still necessary, because it's currently broken (fs is read-only)
//
// StreamZip.setFs = function(customFs) {
//     fs = customFs;
// };

StreamZip.debugLog = (...args) => {
    if (StreamZip.debug) {
        // eslint-disable-next-line no-console
        console.log(...args);
    }
};

util.inherits(StreamZip, events.EventEmitter);

const propZip = Symbol('zip');

StreamZip.async = class StreamZipAsync extends events.EventEmitter
{
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

    get entriesCount()
    {
        return this[propZip].then((zip) => zip.entriesCount);
    }

    get comment()
    {
        return this[propZip].then((zip) => zip.comment);
    }

    async entry(name)
    {
        const zip = await this[propZip];
        return zip.entry(name);
    }

    async entries()
    {
        const zip = await this[propZip];
        return zip.entries();
    }

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
}

class CentralDirectoryHeader
{
    read(data) {
        if (data.length !== StreamZip.ENDHDR || data.readUInt32LE(0) !== StreamZip.ENDSIG) {
            throw new Error('Invalid central directory');
        }
        // number of entries on this volume
        this.volumeEntries = data.readUInt16LE(StreamZip.ENDSUB);
        // total number of entries
        this.totalEntries = data.readUInt16LE(StreamZip.ENDTOT);
        // central directory size in bytes
        this.size = data.readUInt32LE(StreamZip.ENDSIZ);
        // offset of first CEN header
        this.offset = data.readUInt32LE(StreamZip.ENDOFF);
        // zip file comment length
        this.commentLength = data.readUInt16LE(StreamZip.ENDCOM);
    }
}

class CentralDirectoryLoc64Header
{
    read(data)
    {
        if (data.length !== StreamZip.ENDL64HDR || data.readUInt32LE(0) !== StreamZip.ENDL64SIG) {
            throw new Error('Invalid zip64 central directory locator');
        }
        // ZIP64 EOCD header offset
        this.headerOffset = ZipEntry.readUInt64LE(data, StreamZip.ENDSUB);
    }
}

class CentralDirectoryZip64Header
{
    read(data)
    {
        if (data.length !== StreamZip.END64HDR || data.readUInt32LE(0) !== StreamZip.END64SIG) {
            throw new Error('Invalid central directory');
        }
        // number of entries on this volume
        this.volumeEntries = ZipEntry.readUInt64LE(data, StreamZip.END64SUB);
        // total number of entries
        this.totalEntries = ZipEntry.readUInt64LE(data, StreamZip.END64TOT);
        // central directory size in bytes
        this.size = ZipEntry.readUInt64LE(data, StreamZip.END64SIZ);
        // offset of first CEN header
        this.offset = ZipEntry.readUInt64LE(data, StreamZip.END64OFF);
    }
}

class ZipEntry
{
    readHeader(data, offset)
    {
        // data should be 46 bytes and start with "PK 01 02"
        if (data.length < offset + StreamZip.CENHDR || data.readUInt32LE(offset) !== StreamZip.CENSIG) {
            throw new Error('Invalid entry header');
        }
        // version made by
        this.verMade = data.readUInt16LE(offset + StreamZip.CENVEM);
        // version needed to extract
        this.version = data.readUInt16LE(offset + StreamZip.CENVER);
        // encrypt, decrypt flags
        this.flags = data.readUInt16LE(offset + StreamZip.CENFLG);
        // compression method
        this.method = data.readUInt16LE(offset + StreamZip.CENHOW);
        // modification time (2 bytes time, 2 bytes date)
        const timebytes = data.readUInt16LE(offset + StreamZip.CENTIM);
        const datebytes = data.readUInt16LE(offset + StreamZip.CENTIM + 2);
        this.time = ZipEntry.parseZipTime(timebytes, datebytes);

        // uncompressed file crc-32 value
        this.crc = data.readUInt32LE(offset + StreamZip.CENCRC);
        // compressed size
        this.compressedSize = data.readUInt32LE(offset + StreamZip.CENSIZ);
        // uncompressed size
        this.size = data.readUInt32LE(offset + StreamZip.CENLEN);
        // filename length
        this.fnameLen = data.readUInt16LE(offset + StreamZip.CENNAM);
        // extra field length
        this.extraLen = data.readUInt16LE(offset + StreamZip.CENEXT);
        // file comment length
        this.comLen = data.readUInt16LE(offset + StreamZip.CENCOM);
        // volume number start
        this.diskStart = data.readUInt16LE(offset + StreamZip.CENDSK);
        // internal file attributes
        this.inattr = data.readUInt16LE(offset + StreamZip.CENATT);
        // external file attributes
        this.attr = data.readUInt32LE(offset + StreamZip.CENATX);
        // LOC header offset
        this.offset = data.readUInt32LE(offset + StreamZip.CENOFF);
    }

    readDataHeader(data)
    {
        // 30 bytes and should start with "PK\003\004"
        if (data.readUInt32LE(0) !== StreamZip.LOCSIG) {
            throw new Error('Invalid local header');
        }
        // version needed to extract
        this.version = data.readUInt16LE(StreamZip.LOCVER);
        // general purpose bit flag
        this.flags = data.readUInt16LE(StreamZip.LOCFLG);
        // compression method
        this.method = data.readUInt16LE(StreamZip.LOCHOW);
        // modification time (2 bytes time ; 2 bytes date)
        const timebytes = data.readUInt16LE(StreamZip.LOCTIM);
        const datebytes = data.readUInt16LE(StreamZip.LOCTIM + 2);
        this.time = ZipEntry.parseZipTime(timebytes, datebytes);

        // uncompressed file crc-32 value
        this.crc = data.readUInt32LE(StreamZip.LOCCRC) || this.crc;
        // compressed size
        const compressedSize = data.readUInt32LE(StreamZip.LOCSIZ);
        if (compressedSize && compressedSize !== StreamZip.EF_ZIP64_OR_32) {
            this.compressedSize = compressedSize;
        }
        // uncompressed size
        const size = data.readUInt32LE(StreamZip.LOCLEN);
        if (size && size !== StreamZip.EF_ZIP64_OR_32) {
            this.size = size;
        }
        // filename length
        this.fnameLen = data.readUInt16LE(StreamZip.LOCNAM);
        // extra field length
        this.extraLen = data.readUInt16LE(StreamZip.LOCEXT);
    }

    read(data, offset, textDecoder)
    {
        const nameData = data.slice(offset, (offset += this.fnameLen));
        this.name = textDecoder
            ? textDecoder.decode(new Uint8Array(nameData))
            : nameData.toString('utf8');
        const lastChar = data[offset - 1];
        this.isDirectory = lastChar === 47 || lastChar === 92;

        if (this.extraLen) {
            this.readExtra(data, offset);
            offset += this.extraLen;
        }
        this.comment = this.comLen ? data.slice(offset, offset + this.comLen).toString() : null;
    }

    validateName()
    {
        if ((/\\|^\w+:|^\/|(^|\/)\.\.(\/|$)/).test(this.name)) {
            throw new Error('Malicious entry: ' + this.name);
        }
    }

    readExtra(data, offset)
    {
        let signature, size;
        const maxPos = offset + this.extraLen;
        while (offset < maxPos) {
            signature = data.readUInt16LE(offset);
            offset += 2;
            size = data.readUInt16LE(offset);
            offset += 2;
            if (StreamZip.ID_ZIP64 === signature) {
                this.parseZip64Extra(data, offset, size);
            }
            offset += size;
        }
    }

    parseZip64Extra(data, offset, length)
    {
        if (length >= 8 && this.size === StreamZip.EF_ZIP64_OR_32) {
            this.size = ZipEntry.readUInt64LE(data, offset);
            offset += 8;
            length -= 8;
        }
        if (length >= 8 && this.compressedSize === StreamZip.EF_ZIP64_OR_32) {
            this.compressedSize = ZipEntry.readUInt64LE(data, offset);
            offset += 8;
            length -= 8;
        }
        if (length >= 8 && this.offset === StreamZip.EF_ZIP64_OR_32) {
            this.offset = ZipEntry.readUInt64LE(data, offset);
            offset += 8;
            length -= 8;
        }
        if (length >= 4 && this.diskStart === StreamZip.EF_ZIP64_OR_16) {
            this.diskStart = data.readUInt32LE(offset);
            // offset += 4; length -= 4;
        }
    }

    get encrypted()
    {
        return (this.flags & StreamZip.FLG_ENTRY_ENC) === StreamZip.FLG_ENTRY_ENC;
    }

    get isFile()
    {
        return !this.isDirectory;
    }

    static parseZipTime(timebytes, datebytes)
    {
        const timebits = ZipEntry.toBits(timebytes, 16);
        const datebits = ZipEntry.toBits(datebytes, 16);
        const mt = {
            h: parseInt(timebits.slice(0, 5).join(''), 2),
            m: parseInt(timebits.slice(5, 11).join(''), 2),
            s: parseInt(timebits.slice(11, 16).join(''), 2) * 2,
            Y: parseInt(datebits.slice(0, 7).join(''), 2) + 1980,
            M: parseInt(datebits.slice(7, 11).join(''), 2),
            D: parseInt(datebits.slice(11, 16).join(''), 2),
        };
        const dt_str = [mt.Y, mt.M, mt.D].join('-') + ' ' + [mt.h, mt.m, mt.s].join(':') + ' GMT+0';
        return new Date(dt_str).getTime();
    }

    static toBits(dec, size)
    {
        let b = (dec >>> 0).toString(2);
        while (b.length < size) {
            b = '0' + b;
        }
        return b.split('');
    }

    static readUInt64LE(buffer, offset)
    {
        return buffer.readUInt32LE(offset + 4) * 0x0000000100000000 + buffer.readUInt32LE(offset);
    }
}

class FsRead
{
    constructor(fd, buffer, offset, length, position, callback)
    {
        this.fd = fd;
        this.buffer = buffer;
        this.offset = offset;
        this.length = length;
        this.position = position;
        this.callback = callback;
        this.bytesRead = 0;
        this.waiting = false;
    }

    read(sync)
    {
        StreamZip.debugLog('read', this.position, this.bytesRead, this.length, this.offset);
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

class FileWindowBuffer
{
    constructor(fd)
    {
        this.position = 0;
        this.buffer = Buffer.alloc(0);
        this.fd = fd;
        this.fsOp = null;
    }

    checkOp()
    {
        if (this.fsOp && this.fsOp.waiting) {
            throw new Error('Operation in progress');
        }
    }

    read(pos, length, callback)
    {
        this.checkOp();
        if (this.buffer.length < length) {
            this.buffer = Buffer.alloc(length);
        }
        this.position = pos;
        this.fsOp = new FsRead(this.fd, this.buffer, 0, length, this.position, callback).read();
    }

    expandLeft(length, callback)
    {
        this.checkOp();
        this.buffer = Buffer.concat([Buffer.alloc(length), this.buffer]);
        this.position -= length;
        if (this.position < 0) {
            this.position = 0;
        }
        this.fsOp = new FsRead(this.fd, this.buffer, 0, length, this.position, callback).read();
    }

    expandRight(length, callback)
    {
        this.checkOp();
        const offset = this.buffer.length;
        this.buffer = Buffer.concat([this.buffer, Buffer.alloc(length)]);
        this.fsOp = new FsRead(
            this.fd,
            this.buffer,
            offset,
            length,
            this.position + offset,
            callback
        ).read();
    }

    moveRight(length, callback, shift)
    {
        this.checkOp();
        if (shift) {
            this.buffer.copy(this.buffer, 0, shift);
        } else {
            shift = 0;
        }
        this.position += shift;
        this.fsOp = new FsRead(
            this.fd,
            this.buffer,
            this.buffer.length - shift,
            shift,
            this.position + this.buffer.length - shift,
            callback
        ).read();
    }
}

class EntryDataReaderStream extends stream.Readable
{
    constructor(fd, offset, length)
    {
        super();
        this.fd = fd;
        this.offset = offset;
        this.length = length;
        this.pos = 0;
        this.readCallback = this.readCallback.bind(this);
    }

    _read(n)
    {
        const buffer = Buffer.alloc(Math.min(n, this.length - this.pos));
        if (buffer.length) {
            fs.read(this.fd, buffer, 0, buffer.length, this.offset + this.pos, this.readCallback);
        } else {
            this.push(null);
        }
    }

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

class EntryVerifyStream extends stream.Transform
{
    constructor(baseStm, crc, size)
    {
        super();
        this.verify = new CrcVerify(crc, size);
        baseStm.on('error', (e) => {
            this.emit('error', e);
        });
    }

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

class CrcVerify
{
    constructor(crc, size)
    {
        this.crc = crc;
        this.size = size;
        this.state = {
            crc: ~0,
            size: 0,
        };
    }

    data(data)
    {
        const crcTable = this.getCrcTable();
        let crc = this.state.crc;
        let off = 0;
        let len = data.length;
        while (--len >= 0) {
            crc = crcTable[(crc ^ data[off++]) & 0xff] ^ (crc >>> 8);
        }
        this.state.crc = crc;
        this.state.size += data.length;
        if (this.state.size >= this.size) {
            const buf = Buffer.alloc(4);
            buf.writeInt32LE(~this.state.crc & 0xffffffff, 0);
            crc = buf.readUInt32LE(0);
            if (crc !== this.crc) {
                throw new Error('Invalid CRC');
            }
            if (this.state.size !== this.size) {
                throw new Error('Invalid size');
            }
        }
    }

    getCrcTable()
    {
        let crcTable = CrcVerify.crcTable;
        if (!crcTable) {
            CrcVerify.crcTable = crcTable = [];
            const b = Buffer.alloc(4);
            for (let n = 0; n < 256; n++) {
                let c = n;
                for (let k = 8; --k >= 0; ) {
                    if ((c & 1) !== 0) {
                        c = 0xedb88320 ^ (c >>> 1);
                    } else {
                        c = c >>> 1;
                    }
                }
                if (c < 0) {
                    b.writeInt32LE(c, 0);
                    c = b.readUInt32LE(0);
                }
                crcTable[n] = c;
            }
        }
        return crcTable;
    }
}
