/**
 * @fileoverview Disk Search UI and Functions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/**
 * @class DiskSearch
 * @property {string} url
 * @property {Object} diskettes
 * @property {Element} input
 * @property {Element} output
 * @property {string} idMachine
 */
export default class DiskSearch {
    /**
     * DiskSearch()
     *
     * @this {DiskSearch}
     * @param {string} [url]
     * @param {string} [idInput]
     * @param {string} [idOutput]
     * @param {string} [idMachine]
     */
    constructor(url, idInput, idOutput, idMachine)
    {
        if (url) {
            this.loadDiskettes(url);
        }
        if (idInput) {
            this.input = document.querySelector('#' + idInput);
            if (this.input) {
                this.input.addEventListener("keypress", this.doSearch.bind(this));
                this.input.addEventListener("input", this.incSearch.bind(this));
            }
        }
        if (idOutput) {
            this.output = document.querySelector('#' + idOutput);
        }
        this.idMachine = idMachine;
    }

    /**
     * loadDiskettes(url)
     *
     * @this {DiskSearch}
     * @param {string} url
     */
    loadDiskettes(url)
    {
        this.url = url;
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                this.diskettes = json;
                console.log(this.url + ": loaded");
                this.media = [];
                this.walkJSON(json, "/software/pcx86", "@media", this.media);
                console.log("found " + this.media.length + " media items");
                if (this.output) {
                    this.output.innerHTML = "<p>" + this.media.length + " disks available</p>";
                }
            });
    }

    /**
     * walkJSON(json, path, name, results, title)
     *
     * Walk the JSON object tree, looking for the named elements, and return an array of those elements.
     *
     * @this {DiskSearch}
     * @param {Object} json
     * @param {string} path
     * @param {string} name
     * @param {Array} results
     * @param {string} [title]
     */
    walkJSON(json, path, name, results, title)
    {
        let keys = Object.keys(json);
        for (let key of keys) {
            let items = json[key];
            if (key == name) {
                if (!Array.isArray(items)) {
                    items = [items];
                }
                for (let item of items) {
                    item['@path'] = path;
                    if (!item['@diskTitle']) item['@diskTitle'] = title;
                    results.push(item);
                }
                continue;
            }
            if (typeof items == "object") {
                title = items['@title'] || title;
                this.walkJSON(items, path + (key[0] != '@'? "/" + key : ""), name, results, title);
            }
        }
    }

    /**
     * containsText(item, text)
     *
     * @this {DiskSearch}
     * @param {string} item
     * @param {string} text
     * @returns {boolean}
     */
    containsText(item, text)
    {
        return item && text && item.indexOf(text) >= 0 || false;
    }

    /**
     * matchesFile(list, re)
     *
     * @this {DiskSearch}
     * @param {string} list
     * @param {RegExp} re
     * @returns {boolean}
     */
    matchesFile(list, re)
    {
        return !!(list && re && list.match(re));
    }

    /**
     * matchesText(obj, props, re)
     *
     * @this {DiskSearch}
     * @param {object} obj
     * @param {Array} props
     * @param {RegExp} re
     * @returns {boolean}
     */
    matchesText(obj, props, re)
    {
        for (let prop of props) {
            if (obj[prop] && obj[prop].match(re)) return true;
        }
        return false;
    }

    /**
     * getMatches(text)
     *
     * @this {DiskSearch}
     * @param {string} text
     * @returns {Array} of matching media indexes
     */
    getMatches(text)
    {
        let matches = [];
        text = text.trim();
        let match = text.match(/^DISK\s*([0-9]+)$/i);
        let diskName = match? "DISK" + ("000" + match[1]).slice(-4) : "";
        let reText = new RegExp(text.replace(/ /g, '.*'), 'i');
        let isFileName = (text.length <= 12 && text.indexOf('.') > 0 && text.indexOf(' ') < 0);
        let reFileName = (isFileName? new RegExp("/" + text + "(||$)", 'i') : null);
        for (let i = 0; i < this.media.length; i++) {
            let media = this.media[i];
            if (diskName && this.containsText(media['@diskette'], diskName)) {
                matches.push(i);
                continue;
            }
            if (this.matchesFile(media['@fileList'], reFileName)) {
                matches.push(i);
                continue;
            }
            if (!diskName && this.matchesText(media, ['@diskTitle', '@diskSummary', '@fileList'], reText)) {
                matches.push(i);
                continue;
            }
        }
        return matches;
    }

    /**
     * doSearch(event)
     *
     * Called on input keypress events, to implement specific search actions.
     *
     * @this {DiskSearch}
     * @param {KeyboardEvent} event
     */
    doSearch(event) {
        if (event.key == "Enter") {
            let text = this.input.value;
            this.input.value = "";
            console.log("search for '" + text + "'");
            if (this.output) {
                let list = this.output.getElementsByTagName("ul");
                if (list.length) list[0].remove();
                this.output.innerHTML = "";
                let matches = this.getMatches(text);
                if (matches.length > 0) {
                    this.output.innerHTML = "<p>" + matches.length + " result" + (matches.length > 1? "s" : "") + "</p>";
                    list = document.createElement("ul");
                    for (let i = 0; i < matches.length; i++) {
                        let item = document.createElement('li');
                        let media = this.media[matches[i]];
                        let title = media['@diskTitle'];
                        let summary = media['@diskSummary'];
                        if (!summary) {
                            summary = title;
                            title = "";
                        }
                        title = media['@diskette'].slice(0, -5) + (title? " - " + title : "");
                        let j = summary.indexOf('.');
                        if (j > 0 && j < summary.length-1) {
                            item.setAttribute("title", summary);
                            summary = summary.slice(0, j) + "...";
                        }
                        let onclick = "";
                        let pathDisk = media['@path'];
                        let matchDisk = pathDisk.match(/[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]\/DISK([0-9]+)$/);
                        if (matchDisk) {
                            pathDisk = "?automount={A:\"None\",B:\"PC-SIG%20Library%20Disk%20%23" + matchDisk[1] + "\"}";
                            if (this.idMachine) {
                                onclick = "return !commandMachine(this, false, '" + this.idMachine + "', '', 'script', 'select FDC listDrives &quot;B:&quot;; select FDC listDisks &quot;PC-SIG Library Disk #" + matchDisk[1] + "&quot;; loadDisk FDC scroll; wait FDC; type Keyboard &quot;DIR B:\\r&quot;')";
                            }
                        }
                        item.innerHTML = "<a href='" + pathDisk + "' target=\"_blank\"" + (onclick? " onclick=\"" + onclick + "\"" : "") + ">" + title + "</a>: " + summary;
                        list.appendChild(item);
                     }
                     this.output.appendChild(list);
                } else {
                    this.output.innerHTML = "<p>No results for '" + text + "'</p>";
                }
            }
        }
    }

    /**
     * incSearch(event)
     *
     * Called on input field changes, to implement incremental search.
     *
     * @this {DiskSearch}
     * @param {InputEvent} event
     */
    incSearch(event) {
        // console.log(event.target.value);
    }
}
