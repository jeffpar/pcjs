/**
 * @fileoverview Gulp file for pcjs.org
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2024 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/**
 * Tasks
 *
 *      default (eg: `gulp` or `gulp default`)
 *
 *          Recompiles all machine modules in their respective release folder that are out-of-date with
 *          respect to the individual files (under /machines).  The target version comes from
 *          machines/machines.json:shared.version.
 *
 *          It does this by running the `concat` and `compile` tasks for all machines.
 *
 *      concat (eg: `gulp concat` or `gulp concat/{machine}`)
 *
 *          Concatenates all the individual files (under /machines) that comprise the machine's compiled
 *          script; the resulting file (eg, pcx86-uncompiled.js) becomes the input file for the Closure
 *          Compiler, which is why each machine's `compile` task lists the corresponding `concat` task as
 *          a dependency/prerequisite.
 *
 *      compile (eg: `gulp compile` `gulp compile/{machine}`)
 *
 *          For example, `gulp compile/pcx86` will recompile the current version of pcx86-uncompiled.js
 *          if it's out of date.
 *
 *      compile/v2
 *
 *          This special task compiles all machines that use the new (v2) Device classes; you can also
 *          compile them individually, just like any other machine (eg, `gulp compile/ti57`).
 *
 *      compile/v3
 *
 *          This special task compiles all new work-in-progress (v3) machines; you can also compile them individually,
 *          just like any other machine (eg, `gulp compile/pcx86v3`).
 *
 *      version
 *
 *          Updates the version number in all project machine XML files to match the version contained in
 *          machines/machines.json:shared.version.
 *
 *      copyright
 *
 *          Updates the copyright year in all project files to match the year contained in package.json.
 *
 * Options
 *
 *      --rebuild will force the "compile" tasks to recompile the code for the specified machines, even if the
 *      compiled code is up-to-date.
 */

import fs from "fs";
import path from "path";
import gulp from "gulp";
import gulpNewer from "gulp-newer";
import gulpChmod from "gulp-chmod";
import gulpConcat from "gulp-concat";
import gulpMergeJSON from "gulp-merge-json";
import gulpForEach from "gulp-foreach";
import gulpHeader from "gulp-header";
import gulpReplace from "gulp-replace";
import closureCompiler from "google-closure-compiler";
import gulpSourceMaps from "gulp-sourcemaps";
import pcjslib from "./tools/modules/pcjslib.js";

let argv = pcjslib.getArgs()[1];
let gulpClosureCompiler = closureCompiler.gulp();
let pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"));
let eol = process.platform === "win32"? "\r\n" : "\n";

/**
 * Every machine must necessarily have a unique machine type ID (eg, "ti57").
 *
 * That ID determines the name of the compiled code file (eg, "ti57.js") and how web pages refer
 * to the machine type (eg, "type: ti57").
 *
 * @typedef {Object} Machine
 * @property {string} name
 * @property {string} [folder] (if not defined, same as machine type ID)
 * @property {string} [version] (if not defined, shared.version is used instead)
 * @property {string} [copy] (if defined, then all the copy properties are used instead, except for name and folder)
 * @property {string} factory
 * @property {Array.<string>} defines
 * @property {Array.<string>} externs
 * @property {Array.<string>} modules
 * @property {Array.<string>} [styles]
 * @property {Array.<string>} [css]
 * @property {Array.<string>} [xsl]
 */

/**
 * @type {Object.<string,Machine>}
 */
let machines = JSON.parse(fs.readFileSync("./machines/machines.json", "utf8"));
if (!machines.shared) machines.shared = {};
let siteHost = "https://www.pcjs.org";

/**
 * This is the set of the disk collections (stored as JSON) that the PCx86 floppy disk component (FDC) typically
 * loads -- although the exact set can vary, and some machines, like PCSIG08, load several additional collections.
 *
 * Each collection is stored in a separate repo; eg, /diskettes/pcx86/diskettes.json is stored in the "pcjs-diskettes"
 * repo, which is then published with all the corresponding diskette images at https://diskettes.pcjs.org.
 *
 * Anyway, one problem with this arrangement is that the PCjs website page templates (_includes/explorer/software.html)
 * need access to ALL the collections, and being spread across multiple repos makes that difficult.  So we solve the
 * problem by automatically combining all the "src" collections into a single "dst" collection located in the main repo,
 * at /machines/pcx86/diskettes.json.
 *
 * Another advantage of the combined file is the PCx86 FDC can now choose to load the combined file at runtime as well,
 * instead of using the separate files, and speed up machine page loads slightly.
 */
let aSrcDiskCollections = [
    "./disks/diskettes/pcx86/diskettes.json",
    "./disks/gamedisks/pcx86/diskettes.json",
    "./disks/miscdisks/pcx86/diskettes.json"
];
let sDstDiskCollection = "./machines/pcx86/diskettes.json";

if (pkg.homepage) {
    let match = pkg.homepage.match(/^(https?:\/\/[^/]*)(.*)/);
    if (match) siteHost = match[1];
}

let aMachines = Object.keys(machines);
let aConcatTasks = [], aCompileTasks = [];
let aWatchedFiles = aSrcDiskCollections.slice();

aMachines.forEach(function(machineID)
{
    if (machineID[0] == '@' || machineID == "shared") return;

    /**
     * @type {Machine}
     */
    let Machine = machines[machineID];
    let machineName = Machine.name;
    let machineFolder = Machine.folder || machineID;

    while (Machine && Machine.copy) {
        Machine = machines[Machine.copy];
    }

    if (Machine.modules) {
        Machine.modules.forEach((module) => {
            if (aWatchedFiles.indexOf(module) < 0) aWatchedFiles.push(module);
        });
    }

    let machineDefines = [];
    let machineVersion = Machine.version || machines.shared.version || "0.00";
    let machineReleaseDir = "./machines/" + machineFolder + "/releases/" + machineVersion;
    let machineReleaseFile  = machineID + ".js";
    let machineUncompiledFile  = machineID + "-uncompiled.js";

    /**
     * The following @defines should always be overridden, even if the Machine didn't list them.
     */
    let alwaysDefine = ["MAXDEBUG", "DEBUG", "COMPILED"];
    if (!Machine.defines) Machine.defines = [];
    for (let define in alwaysDefine) {
        if (Machine.defines.indexOf(alwaysDefine[define]) < 0) {
            Machine.defines.unshift(alwaysDefine[define]);
        }
    }

    if (Machine.defines) {
        for (let i = 0; i < Machine.defines.length; i++) {
            let define = Machine.defines[i], value = undefined;
            switch(define) {
            case "APPVERSION":
            case "VERSION":
                value = '"' + machineVersion + '"';
                break;
            case "FACTORY":
                value = Machine.factory;
                break;
            case "SITEURL":
                value = siteHost;
                break;
            case "BACKTRACK":
            case "DEBUG":
            case "MAXDEBUG":
                value = false;
                break;
            case "COMPILED":
            case "DEBUGGER":
            case "I386":
            default:
                value = true;
                break;
            }
            // console.log(define + '=' + value);
            machineDefines.push(define + '=' + value);
        }
    }

    let machineFiles = Machine.css || machines.shared.css || [];
    machineFiles = machineFiles.concat(Machine.xsl || machines.shared.xsl || []);

    /**
     * The gulpNewer() plugin doesn't seem to work properly with the closureCompiler() plugin;
     * if the destination file is newer than the source, the compiler still gets invoked, but
     * with an incomplete stream, resulting in bogus errors.  My work-around is to compare filetimes
     * myself, marking the machine as "outdated" ONLY if the destination file is older, and then
     * change the appropriate "compile" tasks to simply ignore any machines that aren't outdated.
     *
     * Since this code runs *before* any of the actual tasks, the "outdated" machines array must
     * ALSO be updated by any "concat" task that recreates one of the uncompiled input files.
     */
    let aMachinesOutdated = [];
    let srcFile = path.join(machineReleaseDir, machineUncompiledFile);
    let dstFile = path.join(machineReleaseDir, machineReleaseFile);
    try {
        let srcStat = fs.statSync(srcFile);
        let dstStat = fs.statSync(dstFile);
        let srcTime = new Date(srcStat.mtime);
        let dstTime = new Date(dstStat.mtime);
        if (dstTime < srcTime || argv['rebuild']) aMachinesOutdated.push(machineID);
    } catch(err) {
        // console.log(err.message);
    }

    let taskConcat = "concat/" + machineID;
    aConcatTasks.push(taskConcat);
    gulp.task(taskConcat, function() {
        return gulp.src(Machine.modules)
            .pipe(gulpNewer(path.join(machineReleaseDir, machineUncompiledFile)))
            .pipe(gulpForEach(function(stream, file) {
                aMachinesOutdated.push(machineID);
                return stream
                    .pipe(gulpHeader('/**' + eol + ' * @copyright ' + file.path.replace(/.*[\\/](machines)[\\/](.*)/, "https://www.pcjs.org/$1/$2").replace(/\\/g,'/') + ' (C) 2012-' + pkg.year + ' Jeff Parsons' + eol + ' */' + eol + eol))
                    .pipe(gulpReplace(/(\s+APPVERSION\s*=\s*)"(0\.00|[0-9]\.xx)"/g, '$1"' + machineVersion + '"'))
                    .pipe(gulpReplace(/(\s+VERSION\s*=\s*)"[0-9X.]*"/g, '$1"' + machineVersion + '"'))
                    .pipe(gulpReplace(/(^|\r?\n)[ \t]*(['"])use strict\2;?/gm, ""))
                    .pipe(gulpReplace(/^import[ \t]+[^\r\n]*\r?\n/gm, ""))
                    .pipe(gulpReplace(/^export[ \t]+(.*;\r?\n|default[ \t]+|)/gm, ""))
                    .pipe(gulpReplace(/^[ \t]*var\s+\S+\s*=\s*require\((['"]).*?\1\)[^;]*;/gm, ""))
                    .pipe(gulpReplace(/^[ \t]*(if\s+\(NODE\)\s*|)module\.exports\s*=\s*[^;]*;/gm, ""))
                    .pipe(gulpReplace(/\/\*\*\s*\*\s*@fileoverview[\s\S]*?\*\/\s*/gm, ""))
                    .pipe(gulpReplace(/[ \t]*if\s*\(NODE\)\s*({[^}]*}|[^\r\n]*)(\r?\n|$)/gm, ""))
                    .pipe(gulpReplace(/[ \t]*if\s*\(typeof\s+module\s*!==?\s*(['"])undefined\1\)\s*({[^}]*}|[^\r\n]*)(\r?\n|$)/gm, ""))
                    .pipe(gulpReplace(/\/\*\*[^@]*?@typedef\s*\{([A-Z][A-Za-z0-9_<>.]+)\}\s*(\S+)\s*([\s\S]*?)\*\//g, function(match, def, type, props) {
                        let sType = "/** @typedef {", sProps = "";
                        let reProps = /@property\s*{([^}]*)}\s*(\[|)([^\s\]]+)]?/g, matchProps;
                        while ((matchProps = reProps.exec(props))) {
                            if (sProps) sProps += ", ";
                            sProps += matchProps[3] + ": " + (matchProps[2]? ("(" + matchProps[1] + "|undefined)") : (matchProps[1].indexOf('|') < 0? matchProps[1] : "(" + matchProps[1] + ")"));
                        }
                        if (!sProps) {
                            sType += def;
                        } else {
                            sType += "{ " + sProps + " }";
                        }
                        sType += "} */" + eol + "let " + type + ";";
                        return sType;
                    }))
                    .pipe(gulpReplace(/[ \t]*(if *\(DEBUG\) *|if *\(MAXDEBUG\) *|)[A-Za-z_][A-Za-z0-9_.]*(\.assert\(|\.printf\(Messages\.DEBUG|\.printf\(Device\.MESSAGE\.DEBUG)[^\r\n]*\);[^\r\n]*/g, ""));
                }))
            .pipe(gulpConcat(machineUncompiledFile, {newLine: eol}))
        //  .pipe(gulpHeader('"use strict";' + eol + eol))
            .pipe(gulp.dest(machineReleaseDir));
    });

    let taskCompile = "compile/" + machineID;
    aCompileTasks.push(taskCompile);
    gulp.task(taskCompile, function() {
        let stream = gulp.src(srcFile /*, {base: './'} */);
        if (aMachinesOutdated.indexOf(machineID) >= 0) {
            stream.pipe(gulpSourceMaps.init())
                  .pipe(gulpClosureCompiler({
                    assume_function_wrapper: true,
                    compilation_level: 'ADVANCED',
                    define: machineDefines,
                    externs: machines.shared.externs,
                    warning_level: 'VERBOSE',
                    language_in: 'UNSTABLE',                    // formerly ES6, but we've since started using ES2022 (v13) features, we must use UNSTABLE now
                    language_out: 'ES5',                        // this is also the default
                    output_wrapper: '(function(){%output%})()',
                    js_output_file: machineReleaseFile,         // NOTE: if we go back to doing debugger/non-debugger releases, this must be updated
                    create_source_map: true
                  }))                                           // gulp-sourcemaps automatically adds the sourcemap url comment
                  .pipe(gulpSourceMaps.mapSources(function(sourcePath, file) {
                    // console.log("mapSources: " + sourcePath + " (" + srcFile + ")");
                    if (sourcePath == srcFile.replaceAll('\\', '/')) {
                        sourcePath = path.basename(srcFile);    // for reasons unknown, sourcePath is a full path in Windows, so we apply basename to make macOS and Windows consistent
                    }
                    return sourcePath;
                  }))
                  .pipe(gulpSourceMaps.write('./', {includeContent: false}))
                  .pipe(gulp.dest(machineReleaseDir));
        }
        return stream;
    });
});

let combineTask = true;
for (let i = 0; i < aSrcDiskCollections.length; i++) {
    if (!fs.existsSync(aSrcDiskCollections[i])) {
        combineTask = false;
        break;
    }
}
if (combineTask) {
    gulp.task("combine", function() {
        if (!combineTask) return;
        let baseDir = "./";
        let mergeOptions = {
            fileName: sDstDiskCollection,
            edit: function(collection, file) {
                /**
                 * Each parsed collection should have a '@server' property at the top level; the combined file
                 * obviously can't have multiple '@server' properties at the top level, so we propagate it to each
                 * of the top level objects and then remove it.
                 */
                if (collection['@server']) {
                    let keys = Object.keys(collection);
                    for (let k = 0; k < keys.length; k++) {
                        let key = keys[k];
                        if (typeof collection[key] == "object") {
                            collection[key]['@server'] = collection['@server'];
                        }
                    }
                    delete collection['@server'];
                }
                return collection;
            }
        };
        fs.chmodSync(sDstDiskCollection, 0o644);
        return gulp.src(aSrcDiskCollections)
            .pipe(gulpNewer(sDstDiskCollection))
            .pipe(gulpMergeJSON(mergeOptions))
            .pipe(gulp.dest(baseDir, {'mode': 0o444}));
    });
}

gulp.task("concat", gulp.parallel(...aConcatTasks));
gulp.task("compile", gulp.parallel(...aCompileTasks));
gulp.task("compile/v2", gulp.parallel(
    "compile/invaders",
    "compile/led",
    "compile/pcx86v3",
    "compile/pdp11v3",
    "compile/ti42",
    "compile/ti55",
    "compile/ti57",
    "compile/vt100"
));
gulp.task("compile/v3", gulp.parallel(
    "compile/pcx86v3",
    "compile/pdp11v3"
));

gulp.task("version", function() {
    let baseDir = "./";
    return gulp.src(["machines/**/*.xml"], {base: baseDir})
        .pipe(gulpReplace(/href="\/machines\/([^/]*)\/releases\/[0-9.]*\/(machine|manifest|outline)\.xsl"/g, 'href="/machines/$1/releases/' + machines.shared.version + '/$2.xsl"'))
        .pipe(gulp.dest(baseDir));
});

gulp.task("copyright", function(done) {
    let baseDir = "./";
    /**
     * TODO: Although I've added the 'skipBinary' option to gulpReplace(), to avoid mucking up files like ATT4425.ttf,
     * it would also be nice if we could avoid rewriting ANY file that contains no matches, because Gulp's default behavior
     * seems to be rewrite EVERYTHING, at least when we're doing these sorts of "in place" operations.
     */
    return gulp.src(["gulpfile.js", "LICENSE.txt", "_includes/machine.html", "machines/**/*.{js,css,xsl}", "software/**/*.js", "tools/**/*.js", "**/*.md", "_layouts/*.html"], {base: baseDir})
        .pipe(gulpReplace(/(Copyright[ \S]+?)( Jeff Parsons)( +201\d-)[0-9]+/gi, '$1$3' + pkg.year + '$2', {skipBinary: true}))
        .pipe(gulpReplace(/(Copyright|\u00A9|\(c\))( +201\d-)[0-9]+(.*?Jeff Parsons|.*?twitter_username)/gi, '$1$2' + pkg.year + '$3', {skipBinary: true}))
        .pipe(gulp.dest(baseDir));
});

gulp.task("default", combineTask? gulp.series("combine", "concat", "compile") : gulp.series("concat", "compile"));

gulp.task("watch", function() {
    return gulp.watch(aWatchedFiles, gulp.series("default"));
});
