/**
 * @fileoverview Gulp file for pcjs.org
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2020 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/*
 * Tasks
 *
 *      default (eg: `gulp` or `gulp default`)
 *
 *          Recompiles all machine scripts in their respective release folder that are out-of-date with
 *          respect to the individual files (under /machines).  The target version comes from
 *          configs/machines.json:shared.version.
 *
 *          It does this by running the `concat`, `compile`, `copy`, and `disks` tasks for all machines,
 *          in that order.
 *
 *      concat (eg: `gulp concat` or `gulp concat/{machine}`)
 *
 *          Concatenates all the individual files (under /machines) that comprise the machines's compiled
 *          script; the resulting file (eg, pcx86-uncompiled.js) becomes the input file for the Closure
 *          Compiler, which is why each machine's `compile` task lists the corresponding `concat` task as
 *          a dependency/prerequisite.
 *
 *      compile (eg: `gulp compile` `gulp compile/{machine}`)
 *
 *          For example, `gulp compile/pcx86` will recompile the current version of pcx86-uncompiled.js
 *          if it's out of date.
 *
 *      compile/machines
 *
 *          This special task compiles all the newer machines that use Device classes; you can also compile
 *          them individually, just like any other machine (eg, `gulp compile/ti57`).
 *
 *      copy (eg: `gulp copy` or `gulp copy/{machine}`)
 *
 *          Copies any other individual resources files listed in machines.json (other than scripts) to the
 *          machine's current version folder.
 *
 *      disks (eg: `gulp disks-demo`, `gulp disks-private`)
 *
 *          Updates inlined disk manifests (eg, /disks/pcx86/library.xml) from the submodule manifests
 *          (eg, /disks-demo/pcx86/library.xml), which are actually "manifests of manifests" and therefore
 *          inherently slower to load.
 *
 *      version
 *
 *          Updates the version number in all project machine XML files to match the version contained in
 *          configs/machines.json:shared.version.
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

 "use strict";

var gulp = require("gulp");
var gulpNewer = require("gulp-newer");
var gulpConcat = require("gulp-concat");
var gulpForEach = require("gulp-foreach");
var gulpHeader = require("gulp-header");
var gulpReplace = require("gulp-replace");
var gulpClosureCompiler = require('google-closure-compiler').gulp();
var gulpSourceMaps = require('gulp-sourcemaps');

var fs = require("fs");
var path = require("path");
var pkg = require("./package.json");

var proc = require("./machines/shared/lib/proclib.js");
var args = proc.getArgs();
var argv = args.argv;

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
 * @property {Array.<string>} scripts
 * @property {Array.<string>} [styles]
 * @property {Array.<string>} [css]
 * @property {Array.<string>} [xsl]
 */

/**
 * @type {Object.<string,Machine>}
 */
var machines = require("./configs/machines.json");
var siteHost = "https://www.pcjs.org";

if (pkg.homepage) {
    let match = pkg.homepage.match(/^(https?:\/\/[^/]*)(.*)/);
    if (match) siteHost = match[1];
}

var aMachines = Object.keys(machines);
var aConcatTasks = [], aCompileTasks = [], aCopyTasks = [];

aMachines.forEach(function(machineID) {
    if (machineID[0] == '_' || machineID == "shared") return;

    /**
     * @type {Machine}
     */
    let Machine = machines[machineID];
    let machineName = Machine.name;
    let machineFolder = Machine.folder || machineID;

    while (Machine && Machine.copy) {
        Machine = machines[Machine.copy];
    }

    let machineDefines = [];
    let machineVersion = Machine.version || machines.shared.version;
    let machineReleaseDir = "./machines/" + machineFolder + "/releases/" + machineVersion;
    let machineReleaseFile  = machineID + ".js";
    let machineUncompiledFile  = machineID + "-uncompiled.js";

    /*
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

    let machineFiles = Machine.css || machines.shared.css;
    machineFiles = machineFiles.concat(Machine.xsl || machines.shared.xsl);

    /*
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
        return gulp.src(Machine.scripts)
            .pipe(gulpNewer(path.join(machineReleaseDir, machineUncompiledFile)))
            .pipe(gulpForEach(function(stream, file) {
                aMachinesOutdated.push(machineID);
                return stream
                    .pipe(gulpHeader('/**\n * @copyright ' + file.path.replace(/.*\/(modules|machines)\/(.*)/, "https://www.pcjs.org/$1/$2") + ' (C) 2012-' + pkg.year + ' Jeff Parsons\n */\n\n'))
                    .pipe(gulpReplace(/APPVERSION = "0.00"/g, 'APPVERSION = "' + machineVersion + '"'))
                    .pipe(gulpReplace(/(^|\n)[ \t]*(['"])use strict\2;?/g, ""))
                    .pipe(gulpReplace(/^(import|export)[ \t]+[^\n]*\n/gm, ""))
                    .pipe(gulpReplace(/^[ \t]*var\s+\S+\s*=\s*require\((['"]).*?\1\)[^;]*;/gm, ""))
                    .pipe(gulpReplace(/^[ \t]*(if\s+\(NODE\)\s*|)module\.exports\s*=\s*[^;]*;/gm, ""))
                    .pipe(gulpReplace(/\/\*\*\s*\*\s*@fileoverview[\s\S]*?\*\/\s*/g, ""))
                    .pipe(gulpReplace(/[ \t]*if\s*\(NODE\)\s*({[^}]*}|[^\n]*)(\n|$)/gm, ""))
                    .pipe(gulpReplace(/[ \t]*if\s*\(typeof\s+module\s*!==?\s*(['"])undefined\1\)\s*({[^}]*}|[^\n]*)(\n|$)/gm, ""))
                    .pipe(gulpReplace(/\/\*\*[^@]*@typedef\s*{([A-Z][A-Za-z0-9_<>.]+)}\s*(\S+)\s*([\s\S]*?)\*\//g, function(match, def, type, props) {
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
                        sType += "} */\nvar " + type + ";";
                        return sType;
                    }))
                    .pipe(gulpReplace(/[ \t]*(if *\(DEBUG\) *|)[A-Za-z_][A-Za-z0-9_.]*\.assert\([^\n]*\);[^\n]*/g, ""))
                }))
            .pipe(gulpConcat(machineUncompiledFile))
            .pipe(gulpHeader('"use strict";\n\n'))
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
                    language_in: 'ES6',                          // this is now the default, just documenting our requirements
                    language_out: 'ES5',                         // this is also the default
                    output_wrapper: '(function(){%output%})()',
                    js_output_file: machineReleaseFile,           // NOTE: if we go back to doing debugger/non-debugger releases, this must be updated
                    create_source_map: true
                  }))
                  .pipe(gulpSourceMaps.write('./'))             // gulp-sourcemaps automatically adds the sourcemap url comment
                  .pipe(gulp.dest(machineReleaseDir));
        }
        return stream;
    });

    if (machineVersion < "2" && machineFiles.length) {
        let taskCopy = "copy/" + machineID;
        aCopyTasks.push(taskCopy);
        gulp.task(taskCopy, function() {
            return gulp.src(machineFiles)
                .pipe(gulpNewer(machineReleaseDir))
                .pipe(gulpReplace(/(<xsl:variable name="APPCLASS">)[^<]*(<\/xsl:variable>)/g, '$1' + machineFolder + '$2'))
                .pipe(gulpReplace(/(<xsl:variable name="APPNAME">)[^<]*(<\/xsl:variable>)/g, '$1' + machineName + '$2'))
                .pipe(gulpReplace(/(<xsl:variable name="APPVERSION">)[^<]*(<\/xsl:variable>)/g, "$1" + machineVersion + "$2"))
                .pipe(gulpReplace(/"[^"]*\/?(common.css|common.xsl|components.css|components.xsl|document.css|document.xsl)"/g, '"' + machineReleaseDir.substr(1) + '/$1"'))
                .pipe(gulpReplace(/[ \t]*\/\*[^*][\s\S]*?\*\//g, ""))
                .pipe(gulpReplace(/[ \t]*<!--[^@]*?-->[ \t]*\n?/g, ""))
                .pipe(gulp.dest(machineReleaseDir));
        });
    }
});

gulp.task("concat", gulp.parallel(...aConcatTasks));
gulp.task("compile", gulp.parallel(...aCompileTasks));
gulp.task("compile/machines", gulp.parallel(
    "compile/invaders",
    "compile/led",
    "compile/pdp11v2",
    "compile/ti42",
    "compile/ti55",
    "compile/ti57",
    "compile/vt100"
));
gulp.task("copy", gulp.series(...aCopyTasks));

let matchRef = function(match, sIndent, sFile) {
    /*
     * This function mimics what components.xsl normally does for disk manifests referenced by the FDC
     * machine component.  Compare it to the following template in components.xsl:
     *
     *      <xsl:template match="manifest[not(@ref)]" mode="component">
     *
     * This code is not perfect (it doesn't process <link> elements, for example), but for machines
     * that use library.xml, having them use an inlined library.xml instead speeds up loading significantly.
     *
     * Granted, after the first machine has fetched all the individual manifest files, your browser should
     * do a reasonably good job using cached copies for all subsequent machines, but even then, there's
     * still a noticeable delay.
     */
    let sDisks = match;
    let sFilePath = path.join('.', sFile);
    try {
        let sManifest = /** @type {string} */ (fs.readFileSync(sFilePath, {encoding: 'utf8'}));
        if (sManifest) {
            sDisks = "";
            let sPrefix = "", sDefaultName = "Unknown";
            let matchTitle = sManifest.match(/<title(?: prefix="(.*?)"|)[^>]*>(.*?)<\/title>/);
            if (matchTitle) {
                sPrefix = matchTitle[1];
                sDefaultName = matchTitle[2];
                let matchVersion = sManifest.match(/<version.*?>(.*?)<\/version>/);
                if ( matchVersion) sDefaultName += ' ' +  matchVersion[1];
            }
            let reDisk, matchDisk;
            reDisk = /<disk.*? href="([^"]*)".*?\/>/g;
            while ((matchDisk = reDisk.exec(sManifest))) {
                if (sDisks) sDisks += "\n";
                let urlDisk = matchDisk[1];
                if (urlDisk.indexOf("http") != 0 && !fs.existsSync(path.join('.', urlDisk))) {
                    console.log("warning: disk image '" + urlDisk + "' may not exist");
                }
                sDisks += sIndent + "<disk path=\"" + urlDisk + "\">" + sDefaultName + "</disk>";
            }
            reDisk = /<disk.*? href="([^"]*)".*?>([\S\s]*?)<\/disk>/g;
            while ((matchDisk = reDisk.exec(sManifest))) {
                if (sDisks) sDisks += "\n";
                let matchName = matchDisk[2].match(/<name.*?>(.*?)<\/name>/);
                let sName = matchName? ((sPrefix? sPrefix + ": " : "") + matchName[1]) : sDefaultName;
                let urlDisk = matchDisk[1];
                if (urlDisk.indexOf("http") != 0 && !fs.existsSync(path.join('.', urlDisk))) {
                    console.log("warning: disk image '" + urlDisk + "' may not exist");
                }
                sDisks += sIndent + "<disk path=\"" + urlDisk + "\">" + sName + "</disk>";
            }
            return sDisks;
        }
    } catch(err) {
        console.log(err.message);
    }
    return sDisks;
};

gulp.task("disks-demo", function() {
    let replaceRefs = gulpReplace(/([ \t]+)<manifest.*? ref="(.*?)".*?\/>/g, matchRef);
    return gulp.src([
            "disks-demo/pcx86/library.xml",
            "disks-demo/pcx86/samples.xml",
            "disks-demo/pcx86/shareware/pcsig08/library.xml",
        ], {base: "disks-demo/pcx86/"})
        .pipe(replaceRefs)
        .pipe(gulp.dest("disks/pcx86/")
    );
});

gulp.task("disks-private", function() {
    let replaceRefs = gulpReplace(/([ \t]+)<manifest.*? ref="(.*?)".*?\/>/g, matchRef);
    return gulp.src([
            "disks-private/pcx86/**/library.xml",
            "disks-private/pcx86/**/manifest.xml",
            "disks-private/pcx86/**/machine.xml",
            "disks-private/pcx86/**/README.md"
        ], {base: "disks-private/pcx86/"})
        .pipe(replaceRefs)
        .pipe(gulp.dest("disks/pcx86/private/")
    );
});

gulp.task("disks", gulp.parallel("disks-demo", "disks-private"));

gulp.task("version", function() {
    let baseDir = "./";
    return gulp.src(["apps/**/*.xml", "devices/**/*.xml", "disks/**/*.xml", "disks-demo/**/*.xml", "disks-game/**/*.xml", "disks-private/**/*.xml", "pubs/**/*.xml"], {base: baseDir})
        .pipe(gulpReplace(/href="\/machines\/([^/]*)\/releases\/[0-9.]*\/(machine|manifest|outline)\.xsl"/g, 'href="/machines/$1/releases/' + machines.shared.version + '/$2.xsl"'))
        .pipe(gulp.dest(baseDir));
});

gulp.task("copyright", function(done) {
    let baseDir = "./";
    /*
     * TODO: Although I've added the 'skipBinary' option to gulpReplace(), to avoid mucking up files like ATT4425.ttf,
     * it would also be nice if we could avoid rewriting ANY file that contains no matches, because Gulp's default behavior
     * seems to be rewrite EVERYTHING, at least when we're doing these sorts of "in place" operations.
     */
    return gulp.src(["devices/**/*.js", "modules/**/*", "**/*.md", "_layouts/*.html", "*.js"], {base: baseDir})
        .pipe(gulpReplace(/(Copyright[ \S]+?)( Jeff Parsons)( +201\d-)[0-9]+/gi, '$1$3' + pkg.year + '$2', {skipBinary: true}))
        .pipe(gulpReplace(/(Copyright|\u00A9)( +201\d-)[0-9]+(.*?Jeff Parsons|.*?twitter_username)/gi, '$1$2' + pkg.year + '$3', {skipBinary: true}))
        .pipe(gulp.dest(baseDir));
});

gulp.task("default", gulp.series("concat", "compile"));
