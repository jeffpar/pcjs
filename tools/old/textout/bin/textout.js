#!/usr/bin/env node
/**
 * @fileoverview Provides miscellaneous text-munging services
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2023 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

var path = require("path");
var fs = require("fs");
var lib = path.join(path.dirname(fs.realpathSync(__filename)), "../lib/");

require(lib + "textout.js").CLI();
