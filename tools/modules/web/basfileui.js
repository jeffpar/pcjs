/**
 * @fileoverview BASIC File Conversion UI
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import BASFile from "../basfile.js";

/**
 * @class BASFileUI
 * @property {boolean} localFiles
 */
export default class BASFileUI {
    /**
     * BASFileUI(idForm, idOutput)
     *
     * @this {BASFileUI}
     * @param {string} [idForm]
     * @param {string} [idOutput]
     */
    constructor(idForm, idOutput)
    {
        this.localFiles = (window && "FileReader" in window);
        if (idForm) {
            this.form = document.querySelector('#' + idForm);
            if (this.form) {
                this.file = this.form.querySelector('input[type="file"]');
                this.submit = this.form.querySelector('input[type="submit"]');
                this.form.addEventListener("change", this.doChange.bind(this));
                this.form.addEventListener("submit", this.doConvert.bind(this));
            }
        }
        if (idOutput) {
            this.output = document.querySelector('#' + idOutput);
        }
    }

    /**
     * doChange(event)
     *
     * @this {BASFileUI}
     * @param {Event} event
     */
    doChange(event)
    {
        let files = this.file && this.file.files || [];
        if (this.submit) this.submit.disabled = !files.length;
    }

    /**
     * doConvert(event)
     *
     * @this {BASFileUI}
     * @param {Event} event
     */
    doConvert(event)
    {
        let file = this.file && this.file.files[0];
        if (file) {
            let ui = this;
            let reader = new FileReader();
            reader.onload = function() {
                let baslib = new BASFile(reader.result, true);
                let s = baslib.convert().toString("utf-8");
                if (ui.output) {
                    ui.output.innerHTML = s;
                }
            };
            reader.onerror = function() {
                if (ui.output) {
                    ui.output.innerHTML = "Unable to read file";
                }
            };
            reader.readAsArrayBuffer(file);
            event.preventDefault();
        }
    }
}
