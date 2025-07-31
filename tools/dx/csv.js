/**
 * @fileoverview CSV Processing Library
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import fs from "fs/promises";

/**
 * @class CSV
 */
export default class CSV {

    /**
     * open(name)
     *
     * @this {CSV}
     * @param {string} name
     */
    async open(name)
    {
        this.file = await fs.open(name, 'r');
        const stats = await this.file.stat();
        this.fileSize = stats.size;
        this.lines = [];
        this.fields = [];
        this.chunkSize = 512 * 1024;
        this.buffer = Buffer.alloc(this.chunkSize);
        this.bytesRead = 0;
        this.remainingLine = "";
    }

    /**
     * close()
     *
     * @this {CSV}
     */
    async close()
    {
        if (this.file) {
            await this.file.close();
            this.file = null;
        }
        delete this.buffer;
    }

    /**
     * getMoreLines()
     *
     * @this {CSV}
     * @returns {Array.<string>}
     */
    async getMoreLines()
    {
        let lines = [];
        if (this.bytesRead < this.fileSize) {
            const result = await this.file.read(this.buffer, 0, this.chunkSize, this.bytesRead);
            if (result.bytesRead) {
                this.bytesRead += result.bytesRead;
                const chunk = this.remainingLine + this.buffer.subarray(0, result.bytesRead).toString("utf8");
                this.remainingLine = "";
                lines = chunk.split(/(\r?\n)/);
                if (this.bytesRead < this.fileSize && !lines[lines.length - 1].match(/\r?\n$/)) {
                    this.remainingLine = lines.pop();
                }
            }
        }
        return lines;
    }

    /**
     * getNextLine()
     *
     * @this {CSV}
     * @returns {string|null}
     */
    async getNextLine()
    {
        if (!this.lines.length) {
            this.lines = await this.getMoreLines();
        }
        if (!this.lines.length) {
            return null;
        }
        return this.lines.shift();
    }

    /**
     * getNextRow()
     *
     * @this {CSV}
     * @returns {Object|null}
     */
    async getNextRow()
    {
        let line = await this.getNextLine();
        if (line == "\n" || line == "\r\n") {
            line = await this.getNextLine();
        }
        if (!line) {
            return null;
        }
        if (!this.fields.length) {
            this.fields = line.split(",");
            line = await this.getNextLine();
            if (line == "\n" || line == "\r\n") {
                line = await this.getNextLine();
            }
            if (!line) {
                return null;
            }
        }
        let row = {};
        let i = 0, field = "";
        let nextField = 0, inQuotes = false, inField = false;
        while (i < line.length || inField) {
            if (i >= line.length) {
                if (!inQuotes) break;
                line = await this.getNextLine();
                if (line == null) break;
                i = 0;
                continue;
            }
            let char = line[i++];
            if (!inQuotes) {
                if (char == ',') {
                    row[this.fields[nextField++]] = field;
                    field = "";
                    inField = false;
                } else if (char == '"' && !inField) {
                    inQuotes = inField = true;
                } else {
                    field += char;
                    inField = true;
                }
            }
            else if (char == '"') {
                let nextChar = line[i];
                if (nextChar == '"') {
                    field += '"';
                    i++;
                } else if (nextChar == ',' || nextChar == undefined) {
                    inField = inQuotes = false;
                } else {
                    throw new Error(`error in line ${line}`);
                }
            } else {
                field += char;
            }
        }
        if (field) {
            row[this.fields[nextField++]] = field;
        }
        return row;
    }

    /**
     * hasFields(...fields)
     *
     * Returns true if the CSV has the specified field(s).
     *
     * @this {CSV}
     * @param {...string} fields
     * @returns {boolean}
     */
    hasFields()
    {
        if (!this.fields || !this.fields.length) {
            return false;
        }
        for (let i = 0; i < arguments.length; i++) {
            if (this.fields.indexOf(arguments[i]) < 0) {
                return false;
            }
        }
        return true;
    }
}
