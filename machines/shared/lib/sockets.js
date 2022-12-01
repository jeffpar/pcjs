/**
 * @fileoverview Experimental code included by HTMLOut() only if "--sockets"
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

/* global io: false */

// connect to the socket server
var socket = io.connect();

// if we get an "info" emit from the socket server then console.log the data we receive
socket.on('info', function(data) {
    console.log(data);
});
