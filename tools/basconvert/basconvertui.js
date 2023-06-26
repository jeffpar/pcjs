/**
 * @fileoverview BASIC File Conversion UI
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import BASConvert from "../modules/basconvert.js";

/**
 * @class BASConvertUI
 * @property {boolean} localFiles
 */
export default class BASConvertUI {
    /**
     * BASConvertUI(idForm, idOutput)
     *
     * @this {BASConvertUI}
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
     * @this {BASConvertUI}
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
     * @this {BASConvertUI}
     * @param {Event} event
     */
    doConvert(event)
    {
        let file = this.file && this.file.files[0];
        if (file) {
            let ui = this;
            let reader = new FileReader();
            reader.onload = function() {
                let converter = new BASConvert(reader.result, true);
                let s = converter.convert().toString("utf-8");
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
