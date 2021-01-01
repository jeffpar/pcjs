/**
 * @fileoverview Definitions for PRIVATE configurations
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2021 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

"use strict";

/*
 * PRIVATE enables certain private features that we don't want enabled on the public web server, so by default,
 * PRIVATE is false.  For Jekyll configurations, if site.pcjs.private is set, this file gets included, overriding
 * the default.
 *
 * Currently, the only (checked-in) use of the private setting is to set the client's PRIVATE global and trigger
 * the loading of alternate (ie, private) XML files in embed.js.
 */
PRIVATE = true;
