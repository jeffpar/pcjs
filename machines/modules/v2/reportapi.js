/**
 * @fileoverview Report API, as defined by httpapi.js
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

const ReportAPI = {
    ENDPOINT:       "/api/v1/report",
    QUERY: {
        APP:        "app",
        VER:        "ver",
        URL:        "url",
        USER:       "user",
        TYPE:       "type",
        DATA:       "data"
    },
    TYPE: {
        BUG:        "bug"
    },
    RES: {
        OK:         "Thank you"
    }
};

export default ReportAPI;
