/**
 * @fileoverview User API, as defined by httpapi.js
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/*
 * Examples of User API requests:
 *
 *      web.getHostOrigin() + UserAPI.ENDPOINT + '?' + UserAPI.QUERY.REQ + '=' + UserAPI.REQ.VERIFY + '&' + UserAPI.QUERY.USER + '=' + sUser;
 */
const UserAPI = {
    ENDPOINT:       "/api/v1/user",
    QUERY: {
        REQ:        "req",      // specifies a request
        USER:       "user",     // specifies a user ID
        STATE:      "state",    // specifies a state ID
        DATA:       "data"      // specifies state data
    },
    REQ: {
        CREATE:     "create",   // creates a user ID
        VERIFY:     "verify",   // requests verification of a user ID
        STORE:      "store",    // stores a machine state on the server
        LOAD:       "load"      // loads a machine state from the server
    },
    RES: {
        CODE:       "code",
        DATA:       "data"
    },
    CODE: {
        OK:         "ok",
        FAIL:       "error"
    },
    FAIL: {
        DUPLICATE:  "user already exists",
        VERIFY:     "unable to verify user",
        BADSTATE:   "invalid state parameter",
        NOSTATE:    "no machine state",
        BADLOAD:    "unable to load machine state",
        BADSTORE:   "unable to save machine state"
    }
};

export default UserAPI;
