/**
 * @fileoverview PCjs State Class
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import MESSAGE from "./message.js";
import WebLib from "./weblib.js";
import Component from "./component.js";

/**
 * @class State
 * @unrestricted
 */
export default class State {
    /**
     * State(component, sVersion, sSuffix)
     *
     * State objects are used by components to save/restore their state.
     *
     * During a save operation, components add data to a State object via set(), and then return
     * the resulting data using data().
     *
     * During a restore operation, the Computer component passes the results of each data() call
     * back to the originating component.
     *
     * WARNING: Since State objects are low-level objects that have no UI requirements, they do not
     * inherit from the Component class, so you should only use class methods of Component, such as
     * Component.assert() (or Debugger methods if the Debugger is available).
     *
     * NOTE: 1.01 is the first version to provide limited save/restore support using localStorage.
     * From that point on, care must be taken to insure that any new version that's incompatible with
     * previous localStorage data be released with a version number that is at least 1 greater,
     * since we're tagging the localStorage data with the integer portion of the version string.
     *
     * @param {Component} component
     * @param {string} [sVersion] is used to append a major version number to the key
     * @param {string} [sSuffix] is used to append any additional suffixes to the key
     */
    constructor(component, sVersion, sSuffix)
    {
        this.id = component.id;
        this.dbg = component.dbg;
        this.json = "";
        this.state = {};
        this.fLoaded = this.fParsed = false;
        this.key = State.getKey(component, sVersion, sSuffix);
        this.unload(component.parms);
    }

    /**
     * set(id, data)
     *
     * @this {State}
     * @param {number|string} id
     * @param {Object|string} data
     */
    set(id, data)
    {
        try {
            this.state[id] = data;
        } catch(e) {
            Component.printf(MESSAGE.ERROR, e.message);
        }
    }

    /**
     * get(id)
     *
     * @this {State}
     * @param {number|string} id
     * @returns {Object|string|null}
     */
    get(id)
    {
        return this.state[id] || null;
    }

    /**
     * data()
     *
     * @this {State}
     * @returns {Object}
     */
    data()
    {
        return this.state;
    }

    /**
     * load(json)
     *
     * WARNING: Make sure you follow this call with either a call to parse() or unload(),
     * because any stringified data that we've loaded isn't usable until it's been parsed.
     *
     * @this {State}
     * @param {string|null} [json]
     * @returns {boolean} true if state exists in localStorage, false if not
     */
    load(json)
    {
        if (json) {
            this.json = json;
            this.fLoaded = true;
            this.fParsed = false;
            return true;
        }
        if (this.fLoaded) {
            /*
             * This is assumed to be a redundant load().
             */
            return true;
        }
        if (WebLib.hasLocalStorage()) {
            let s = WebLib.getLocalStorageItem(this.key);
            if (s) {
                this.json = s;
                this.fLoaded = true;
                Component.printf(MESSAGE.DEBUG, "localStorage(%s): %d bytes loaded\n", this.key, s.length);
                return true;
            }
        }
        return false;
    }

    /**
     * parse()
     *
     * This completes the load() operation, by parsing what was loaded, on the assumption there
     * might be some benefit to deferring parsing until we've given the user a chance to confirm.
     * Otherwise, load() could have just as easily done this, too.
     *
     * @this {State}
     * @returns {boolean} true if successful, false if error
     */
    parse()
    {
        let fSuccess = true;
        if (!this.fParsed) {
            try {
                this.state = JSON.parse(this.json);
                this.fParsed = true;
            } catch (e) {
                Component.error(e.message || e);
                fSuccess = false;
            }
        }
        return fSuccess;
    }

    /**
     * store()
     *
     * @this {State}
     * @returns {boolean} true if successful, false if error
     */
    store()
    {
        let fSuccess = true;
        if (WebLib.hasLocalStorage()) {
            let s = JSON.stringify(this.state);
            if (WebLib.setLocalStorageItem(this.key, s)) {
                Component.printf(MESSAGE.DEBUG, "localStorage(%s): %d bytes stored\n", this.key, s.length);
            } else {
                /*
                 * WARNING: Because browsers tend to disable all alerts() during an "unload" operation,
                 * it's unlikely anyone will ever see the "quota" errors that occur at this point.  Need to
                 * think of some way to notify the user that there's a problem, and offer a way of cleaning
                 * up old states.
                 */
                Component.printf(MESSAGE.ERROR, "Unable to store %d bytes in browser local storage\n", s.length);
                fSuccess = false;
            }
        }
        return fSuccess;
    }

    /**
     * toString()
     *
     * @this {State}
     * @returns {string} JSON-encoded state
     */
    toString()
    {
        return this.state? JSON.stringify(this.state) : this.json;
    }

    /**
     * unload(parms)
     *
     * This discards any data saved via set() or loaded via load(), creating an empty State object.
     * Note that you have to follow this call with an explicit call to store() if you want to remove
     * the state from localStorage as well.
     *
     * @this {State}
     * @param {Object} [parms]
     */
    unload(parms)
    {
        this.json = "";
        this.state = {};
        this.fLoaded = this.fParsed = false;
        if (parms) this.set("parms", parms);
    }

    /**
     * clear(fAll)
     *
     * This unloads the current state, and then clears ALL localStorage for the current machine,
     * independent of version, to reduce the chance of orphaned states wasting part of our limited allocation.
     *
     * @this {State}
     * @param {boolean} [fAll] true to unconditionally clear ALL localStorage for the current domain
     */
    clear(fAll)
    {
        this.unload();
        let aKeys = WebLib.getLocalStorageKeys();
        for (let i = 0; i < aKeys.length; i++) {
            let sKey = aKeys[i];
            if (sKey && (fAll || sKey.substr(0, this.key.length) == this.key)) {
                WebLib.removeLocalStorageItem(sKey);
                Component.printf(MESSAGE.DEBUG, "localStorage(%s) removed\n", sKey);
                aKeys.splice(i, 1);
                i = 0;
            }
        }
    }

    /**
     * State.getKey(component, sVersion, sSuffix)
     *
     * This encapsulates the key generation code.
     *
     * @param {Component} component
     * @param {string} [sVersion] is used to append a major version number to the key
     * @param {string} [sSuffix] is used to append any additional suffixes to the key
     * @returns {string} key
     */
    static getKey(component, sVersion, sSuffix)
    {
        let key = component.id;
        if (sVersion) {
            let i = sVersion.indexOf('.');
            if (i > 0) key += ".v" + sVersion.substr(0, i);
        }
        if (sSuffix) {
            key += "." + sSuffix;
        }
        return key;
    }

    /**
     * State.compress(aSrc)
     *
     * @param {Array.<number>|null} aSrc
     * @returns {Array.<number>|null} is either the original array (aSrc), or a smaller array of "count, value" pairs (aComp)
     */
    static compress(aSrc)
    {
        if (aSrc) {
            let iSrc = 0;
            let iComp = 0;
            let aComp = [];
            while (iSrc < aSrc.length) {
                let n = aSrc[iSrc];
                Component.assert(n !== undefined);
                let iCompare = iSrc + 1;
                while (iCompare < aSrc.length && aSrc[iCompare] === n) iCompare++;
                aComp[iComp++] = iCompare - iSrc;
                aComp[iComp++] = n;
                iSrc = iCompare;
            }
            if (aComp.length < aSrc.length) return aComp;
        }
        return aSrc;
    }

    /**
     * State.decompress(aComp)
     *
     * @param {Array.<number>} aComp
     * @param {number} [nLength] (expected length of decompressed data)
     * @returns {Array.<number>}
     */
    static decompress(aComp, nLength)
    {
        let iDst = 0;
        let aDst = nLength? new Array(nLength) : [];
        let iComp = 0;
        while (iComp < aComp.length - 1) {
            let c = aComp[iComp++];
            let n = aComp[iComp++];
            while (c--) aDst[iDst++] = n;
        }
        Component.assert(!nLength || aDst.length == nLength);
        return aDst;
    }

    /**
     * State.compressEvenOdd(aSrc)
     *
     * This is a very simple variation on compress() that compresses all the EVEN elements of aSrc first,
     * followed by all the ODD elements.  This tends to work better on EGA video memory, because when odd/even
     * addressing is enabled (eg, for text modes), the DWORD values tend to alternate, which is the worst case
     * for compress(), but the best case for compressEvenOdd().
     *
     * One wrinkle we support: if the first element is uninitialized, then we assume the entire array is undefined,
     * and return an empty compressed array.  Conversely, decompressEvenOdd() will take an empty compressed array
     * and return an uninitialized array.
     *
     * @param {Array.<number>|null} aSrc
     * @returns {Array.<number>|null} is either the original array (aSrc), or a smaller array of "count, value" pairs (aComp)
     */
    static compressEvenOdd(aSrc)
    {
        if (aSrc) {
            let iComp = 0, aComp = [];
            if (aSrc[0] !== undefined) {
                for (let off = 0; off < 2; off++) {
                    let iSrc = off;
                    while (iSrc < aSrc.length) {
                        let n = aSrc[iSrc];
                        let iCompare = iSrc + 2;
                        while (iCompare < aSrc.length && aSrc[iCompare] === n) iCompare += 2;
                        aComp[iComp++] = (iCompare - iSrc) >> 1;
                        aComp[iComp++] = n;
                        iSrc = iCompare;
                    }
                }
            }
            if (aComp.length < aSrc.length) return aComp;
        }
        return aSrc;
    }

    /**
     * State.decompressEvenOdd(aComp, nLength)
     *
     * This is the counterpart to compressEvenOdd().  Note that because there's nothing in the compressed sequence
     * that differentiates a compress() sequence from a compressEvenOdd() sequence, you simply have to be consistent:
     * if you used even/odd compression, then you must use even/odd decompression.
     *
     * @param {Array.<number>} aComp
     * @param {number} nLength is expected length of decompressed data
     * @returns {Array.<number>}
     */
    static decompressEvenOdd(aComp, nLength)
    {
        let iDst = 0;
        let aDst = new Array(nLength);
        let iComp = 0;
        while (iComp < aComp.length - 1) {
            let c = aComp[iComp++];
            let n = aComp[iComp++];
            while (c--) {
                aDst[iDst] = n;
                iDst += 2;
            }
            /*
             * The output of a "count,value" pair will never exceed the end of the output array, so as soon as we reach it
             * the first time, we know it's time to switch to ODD elements, and as soon as we reach it again, we should be
             * done.
             */
            Component.assert(iDst <= nLength || iComp == aComp.length);
            if (iDst == nLength) iDst = 1;
        }
        Component.assert(aDst.length == nLength);
        return aDst;
    }
}
