/**
 * @fileoverview Command-line interface to disk image processing module
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import DiskDump from "./diskdump.js";
import StdLib from "../../modules/stdlib.js";

/**
 * main()
 */
function main()
{
    let lib = new StdLib();
    let {argc, argv} = lib.getArgs();
    let printf = lib.printf.bind(lib);

    for (let i = 0; i < argc; i++) {
        printf("arg %d: %s\n", i, argv[i]);
    }
    let diskdump = new DiskDump(printf);
}

main();
