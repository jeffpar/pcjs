/**
 * @fileoverview PCjs Assorted Helper Functions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import StrLib from "./strlib.js";

/**
 * @typedef {Object} BitField
 * @property {number} mask
 * @property {number} shift
 */

/**
 * @typedef {Object.<BitField>} BitFields
 */

/**
 * @class UsrLib
 * @unrestricted
 */
export default class UsrLib {

    static aMonthDays = [
        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];

    /**
     * binarySearch(a, v, fnCompare)
     *
     * @param {Array} a is an array
     * @param {number|string|Array|Object} v
     * @param {function((number|string|Array|Object), (number|string|Array|Object))} [fnCompare]
     * @returns {number} the index of matching entry if non-negative, otherwise the index of the insertion point
     */
    static binarySearch(a, v, fnCompare)
    {
        let left = 0;
        let right = a.length;
        let found = 0;
        if (fnCompare === undefined) {
            fnCompare = function(a, b)
            {
                return a > b ? 1 : a < b ? -1 : 0;
            };
        }
        while (left < right) {
            let middle = (left + right) >> 1;
            let compareResult;
            compareResult = fnCompare(v, a[middle]);
            if (compareResult > 0) {
                left = middle + 1;
            } else {
                right = middle;
                found = !compareResult;
            }
        }
        return found ? left : ~left;
    }

    /**
     * binaryInsert(a, v, fnCompare)
     *
     * If element v already exists in array a, the array is unchanged (we don't allow duplicates); otherwise, the
     * element is inserted into the array at the appropriate index.
     *
     * @param {Array} a is an array
     * @param {number|string|Array|Object} v is the value to insert
     * @param {function((number|string|Array|Object), (number|string|Array|Object))} [fnCompare]
     */
    static binaryInsert(a, v, fnCompare)
    {
        let index = UsrLib.binarySearch(a, v, fnCompare);
        if (index < 0) {
            a.splice(-(index + 1), 0, v);
        }
    }

    /**
     * getTimestamp()
     *
     * @returns {string} timestamp containing the current date and time ("yyyy-mm-dd hh:mm:ss")
     */
    static getTimestamp()
    {
        let date = new Date();
        return StrLib.sprintf("%T", date);
    }

    /**
     * getMonthDays(nMonth, nYear)
     *
     * NOTE: If we're being called on behalf of the PCx86 RTC, its year is always truncated to two digits (mod 100),
     * so we have no idea what century the year 0 might refer to.  When using the normal leap-year formula, 0 fails
     * the mod 100 test but passes the mod 400 test, so as far as the RTC is concerned, every century year is a leap
     * year.  Since we're most likely dealing with the year 2000, that's fine, since 2000 was also a leap year.
     *
     * TODO: There IS a separate RTC CMOS byte that's supposed to be set to CMOS_ADDR.CENTURY_DATE; it's always BCD,
     * so theoretically it will contain values like 0x19 or 0x20 (for the 20th and 21st centuries, respectively), and
     * we could add that as another parameter to this function, to improve the accuracy, but that would go beyond what
     * a real RTC actually does.
     *
     * @param {number} nMonth (1-12)
     * @param {number} nYear (normally a 4-digit year, but it may also be mod 100)
     * @returns {number} the maximum (1-based) day allowed for the specified month and year
     */
    static getMonthDays(nMonth, nYear)
    {
        let nDays = UsrLib.aMonthDays[nMonth - 1];
        if (nDays == 28) {
            if ((nYear % 4) === 0 && ((nYear % 100) || (nYear % 400) === 0)) {
                nDays++;
            }
        }
        return nDays;
    }

    /**
     * adjustDays(date, days)
     *
     * Although the setDate() method compensates for day-of-month values outside the current month:
     *
     *      > let d = new Date('11/4/2012');d
     *      2012-11-04T07:00:00.000Z
     *      > new Date(d.setDate(d.getDate() + 365))
     *      2014-11-04T08:00:00.000Z
     *
     * notice the discrepancy in the time-of-day.  Even if there is some technical reason (eg, a DayLight
     * Savings Time side-effect) why that answer is correct, it doesn't satisfy my goal of adjusting ONLY the
     * day, not the time-of-day.
     *
     * By comparison, the method below (multiplying the number of milliseconds in a day by the number of days)
     * works just fine, without any unexpected side-effects:
     *
     *      > let d = new Date('11/4/2012');d
     *      2012-11-04T07:00:00.000Z
     *      > new Date(d.getTime() + 365 * 86400000)
     *      2013-11-04T07:00:00.000Z
     *
     * @param {Date} date
     * @param {number} days (+/-)
     * @returns {Date}
     */
    static adjustDays(date, days)
    {
        return new Date(date.getTime() + days * 86400000);
    }

    /**
     * subtractDays(date1, date2)
     *
     * @param {Date|string} date1
     * @param {Date|string} date2
     * @returns {number} (date1 - date2, returned as a signed integer number of days)
     */
    static subtractDays(date1, date2)
    {
        if (typeof date1 == "string") date1 = new Date(date1);
        if (typeof date2 == "string") date2 = new Date(date2);
        return Math.round((date1.getTime() - date2.getTime()) / 86400000);
    }

    /**
     * defineBitFields(bfs)
     *
     * Prepares a bit field definition for use with getBitField() and setBitField(); eg:
     *
     *      let bfs = UsrLib.defineBitFields({num:20, count:8, btmod:1, type:3});
     *
     * The above defines a set of bit fields containing four fields: num (bits 0-19), count (bits 20-27), btmod (bit 28), and type (bits 29-31).
     *
     *      UsrLib.setBitField(bfs.num, n, 1);
     *
     * The above set bit field "bfs.num" in numeric variable "n" to the value 1.
     *
     * @param {Object} bfs
     * @returns {BitFields}
     */
    static defineBitFields(bfs)
    {
        let bit = 0;
        for (let f in bfs) {
            let width = bfs[f];
            let mask = ((1 << width) - 1) << bit;
            bfs[f] = {mask: mask, shift: bit};
            bit += width;
        }
        return bfs;
    }

    /**
     * initBitFields(bfs, ...)
     *
     * @param {BitFields} bfs
     * @param {...number} var_args
     * @returns {number} a value containing all supplied bit fields
     */
    static initBitFields(bfs, var_args)
    {
        let v = 0, i = 1;
        for (let f in bfs) {
            if (i >= arguments.length) break;
            v = UsrLib.setBitField(bfs[f], v, arguments[i++]);
        }
        return v;
    }

    /**
     * getBitField(bf, v)
     *
     * @param {BitField} bf
     * @param {number} v is a value containing bit fields
     * @returns {number} the value of the bit field in v defined by bf
     */
    static getBitField(bf, v)
    {
        return (v & bf.mask) >> bf.shift;
    }

    /**
     * setBitField(bf, v, n)
     *
     * @param {BitField} bf
     * @param {number} v is a value containing bit fields
     * @param {number} n is a value to store in v in the bit field defined by bf
     * @returns {number} updated v
     */
    static setBitField(bf, v, n)
    {
        return (v & ~bf.mask) | ((n << bf.shift) & bf.mask);
    }

    /**
     * indexOf(a, t, i)
     *
     * Use this instead of Array.prototype.indexOf() if you can't be sure the browser supports it.
     *
     * @param {Array} a
     * @param {*} t
     * @param {number} [i]
     * @returns {number}
     */
    static indexOf(a, t, i)
    {
        if (Array.prototype.indexOf) {
            return a.indexOf(t, i);
        }
        i = i || 0;
        if (i < 0) i += a.length;
        if (i < 0) i = 0;
        for (let n = a.length; i < n; i++) {
            if (i in a && a[i] === t) return i;
        }
        return -1;
    }
}
