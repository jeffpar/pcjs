/**
 * @fileoverview PCjs Report API Definitions
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

export default class ReportAPI {

    static ENDPOINT = "/api/v1/report";
    static QUERY = {
        APP:        "app",
        VER:        "ver",
        URL:        "url",
        USER:       "user",
        TYPE:       "type",
        DATA:       "data"
    };
    static TYPE = {
        BUG:        "bug"
    };
    static RES = {
        OK:         "Thank you"
    };
}
