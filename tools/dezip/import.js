/**
 * import.js
 *
 * Imports CSV files produced by dz.js into a database
 *
 * Usage: node import.js [CSV file]
 */
import fs from "fs/promises";
import path from "path";
import Format from "./format.js";
import { Sequelize, DataTypes } from "sequelize";

const dbConfig = {
    sequelize: {
        host: "localhost",
        dialect: "mysql",
        dialectOptions: {},
        logging: false,
        logQueryParameters: false,
        define: {
            charset: "utf8mb4",
            collate: "utf8mb4_0900_as_ci"
        }
    },
    console: false,
    domain: "localhost",
    user: "root",
    password: ""
};

const dbFields = {
    fileID: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    itemID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    setID: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    hash: {
        type: DataTypes.STRING(32),
        allowNull: true
    },
    modified: {
        type: DataTypes.DATE,
        allowNull: false
    },
    attr: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    size: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    compressed: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    method: {
        type: DataTypes.STRING(16),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    photo: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    dimensions: {
        type: DataTypes.STRING(16),
        allowNull: true
    },
    path: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    disk: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    warnings: {
        type: DataTypes.STRING(128),
        allowNull: true
    }
};

const format = new Format();
const printf = function(...args) {
    let s = format.sprintf(...args);
    process.stdout.write(s);
};

const options = {
    "database": {
        type: "string",
        usage: "--database [name]",
        alias: "-d",
        description: "specify the database name"
    },
    "download": {
        type: "boolean",
        usage: "--download",
        description: "download the site URLs in the CSV file",
        default: false
    },
    "drop": {
        type: "boolean",
        usage: "--drop",
        description: "drop the table before importing",
        default: false
    },
    "table": {
        type: "string",
        usage: "--table [name]",
        alias: "-t",
        description: "specify the table name"
    },
    "help": {
        type: "boolean",
        usage: "--help",
        alias: "-h",
        description: "display this help message",
        handler: function() {
            printf("\nUsage:\n    %s [options] [CSV file]\n", path.basename(process.argv[1]));
            printf("\nOptions:\n");
            for (let key in options) {
                let option = options[key];
                if (option.internal) continue;
                let aliases = Array.isArray(option.alias)? option.alias.join(",") : option.alias;
                printf("    %-18s %s%s\n", option.usage, option.description, aliases? " [" + aliases + "]" : "");
            }
        }
    }
};

/**
 * dbInit(config, database)
 *
 * @param {Object} config
 * @param {string} database
 * @returns {Object} (db)
 */
function dbInit(config, database)
{
    //
    // Even if the caller isn't interested in logging, we still create log functions,
    // so that calls to db.info(), db.warn(), or db.error() will pass through any messages.
    //
    let info = function(msg) {
        if (config.console) console.log(msg);
        return msg;
    };
    let warn = function(msg) {
        if (config.console) console.log("WARNING: " + msg);
        return msg;
    };
    let error = function(msg) {
        if (config.console) console.log("ERROR: " + msg);
        return msg;
    };
    if (config.console) {
        config.sequelize.logging = (...args) => {
            console.log(args[0]);
        };
        config.sequelize.logQueryParameters = true;
    }
    config.utc = true;
    config.timeZone = "Z";
    let sequelize = new Sequelize(
        database,
        config.user,
        config.password,
        config.sequelize
    );
    return { config, name: database, sequelize, models: {}, info, warn, error };
};

/**
 * addRows(db, table, rows)
 *
 * @param {Object} db
 * @param {string} table
 * @param {*} rows
 */
async function addRows(db, table, rows)
{
    let totalRows = 0;
    let rowsPerChunk = 100;
    for (let i = 0; i < rows.length; i += rowsPerChunk) {
        let j = i + rowsPerChunk;
        if (j > rows.length) j = rows.length;
        let chunk = rows.slice(i, j);
        try {
            await db.models[table].bulkCreate(chunk);
            totalRows += chunk.length;
        } catch(error) {
            printf("unable to import rows %d-%d: %s\n", i, j-1, error.message);
        }
    }
    return totalRows;
}

/**
 * main(argc, argv, errors)
 *
 * @param {number} argc
 * @param {Array} argv
 * @param {Array} errors
 */
async function main(argc, argv, errors)
{
    let file;
    printf("import.js %s\n%s\n\nArguments: %s\n", "1.0", "Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>", argv[0]);
    if (argv.help) {
        options.help.handler();
        return;
    }
    if (!argv[1]) {
        errors.push("Missing CSV file");
    } else {
        try {
            file = await fs.open(argv[1], 'r');
        }
        catch (error) {
            errors.push("Unable to open CSV file: " + error.message);
        };
    }
    if (errors.length) {
        for (let error of errors) {
            printf("%s\n", error);
        }
        return;
    }

    let csvLines = [];
    let csvFields = [];
    const chunkSize = 512 * 1024;
    const stats = await file.stat();
    const fileSize = stats.size;
    let buffer = Buffer.alloc(chunkSize), bytesRead = 0, remainingLine = "";

    let getMoreLines = async function() {
        let lines = [];
        if (bytesRead < fileSize) {
            const result = await file.read(buffer, 0, chunkSize, bytesRead);
            if (result.bytesRead) {
                bytesRead += result.bytesRead;
                const chunk = remainingLine + buffer.subarray(0, result.bytesRead).toString("utf8");
                remainingLine = "";
                lines = chunk.split(/(\r?\n)/);
                if (bytesRead < fileSize && !lines[lines.length - 1].match(/\r?\n$/)) {
                    remainingLine = lines.pop();
                }
            }
        }
        return lines;
    };

    let getNextLine = async function() {
        if (!csvLines.length) {
            csvLines = await getMoreLines();
        }
        if (!csvLines.length) {
            return null;
        }
        return csvLines.shift();
    };

    let getNextRow = async function(fields) {
        let line = await getNextLine();
        if (line == "\n") {
            line = await getNextLine();
        }
        if (line == null) {
            return null;
        }
        if (!csvFields.length) {
            csvFields = line.split(",");
            line = await getNextLine();
            if (line == "\n") {
                line = await getNextLine();
            }
            if (line == null) {
                return null;
            }
        }
        let csvRow = {};
        let i = 0, field = "";
        let nextField = 0, inQuotes = false, inField = false;
        while (i < line.length || inField) {
            if (i >= line.length) {
                if (!inQuotes) break;
                line = await getNextLine();
                if (line == null) break;
                i = 0;
                continue;
            }
            let char = line[i++];
            if (!inQuotes) {
                if (char == ',') {
                    csvRow[csvFields[nextField++]] = field;
                    field = "";
                    inField = false;
                } else if (char == '"' && !inField) {
                    inQuotes = inField = true;
                } else {
                    field += char;
                    inField = true;
                }
            }
            else if (char == '"') {
                let nextChar = line[i];
                if (nextChar == '"') {
                    field += '"';
                    i++;
                } else if (nextChar == ',' || nextChar == undefined) {
                    inField = inQuotes = false;
                } else {
                    printf("error in line: '%s'\n", line);
                }
            } else {
                field += char;
            }
        }
        if (field) {
            csvRow[csvFields[nextField++]] = field;
        }
        return csvRow;
    };

    if (argv.download) {
        let csvID = 0;
        let urlCache = {};
        while (true) {
            let csvRow = await getNextRow();
            if (csvRow == null) {
                break;
            }
            let siteURL = csvRow['siteURL'];
            if (urlCache[siteURL]) {
                continue;
            }
            urlCache[siteURL] = true;
            let response = await fetch(siteURL);
            if (!response.ok) {
                printf("# unable to fetch %s (%s)\n", siteURL, response.statusText);
                continue;
            }
            //
            // Get the response as a string
            //
            let matches = 0;
            let url = new URL(siteURL);
            let text = await response.text();
            let titleMatch = text.match(/<h1 class="sr-only">\s*(.*?)\s*<\/h1>/);
            let matchAll = text.matchAll(/<a.* href="(\/download\/[^"]+.iso)"[^>]*>([^<]*)</g);
            for (let match of matchAll) {
                let desc = match[2].trim();
                if (!desc) {
                    desc = titleMatch && titleMatch[1] || "unknown";
                }
                desc += ".iso";
                printf("curl -s -I -L %s%s | grep -E \"^location:\" | sed -E \"s|location: (.*)\\r|%d,\\\"%s\\\",\\\"%s%s\\\",\\\"%s\\\",\\\"\\1\\\"|\"\n", url.origin, match[1], ++csvID, siteURL, url.origin, match[1], desc);
                matches++;
            }
            if (!matches) {
                printf("# unable to find any download links in %s\n", siteURL);
            }
        }
        await file.close();
    }

    if (argv.database && argv.table) {
        let db = dbInit(dbConfig, argv.database);
        db.sequelize.authenticate()
        .then(async () => {
            printf("Connected to database '%s'\n", db.name);
            //
            // Read the specified CSV file a chunk at a time, converting each chunk into an array
            // of lines, then removing lines from the array as we convert them into rows for the table,
            // and then once we have a batch of rows, we add them to the database and free the batch.
            //
            let table = argv.table;
            let drop = argv.drop || false;
            db.models[table] = db.sequelize.define(table, dbFields, {timestamps: false});
            await db.models[table].sync( { force: drop });
            let csvRows = [];
            let totalRows = 0;

            while (true) {
                let csvRow = await getNextRow();
                if (csvRow == null) {
                    break;
                }
                //
                // We do some data sanity checks and fixups next...
                //
                if (csvRow.name && csvRow.name.length <= 255) {
                    if (!csvRow.photo) {
                        csvRow.photo = null;
                    }
                    if (!csvRow.dimensions) {
                        csvRow.dimensions = null;
                    }
                    if (csvRow.warnings && csvRow.warnings.length > 128) {
                        csvRow.warnings = csvRow.warnings.substring(0, 128);
                    }
                    if (!csvRow.comment) {
                        csvRow.comment = null;
                    }
                    if (csvRow.modified && db.config.utc) {
                        csvRow.modified = new Date(csvRow.modified + db.config.timeZone);
                    }
                    if (csvRow.attr) {
                        csvRow.attr &= 0xff;
                    }
                    //
                    // This code is no longer needed, since we now set 'timestamps' to false,
                    // preventing sequelize from adding the 'createdAt' and 'updatedAt' fields.
                    //
                    // if (db.config.utc) {
                    //     let date = new Date();
                    //     date = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
                    //     csvRow.createdAt = csvRow.updatedAt = date;
                    // }
                    csvRows.push(csvRow);
                }
                if (csvRows.length % 10000 == 0) {
                    totalRows += await addRows(db, table, csvRows);
                    printf("Added %d rows...\n", totalRows);
                    csvRows = [];
                }
            }
            totalRows += await addRows(db, table, csvRows);
            printf("Added %d rows...\n", totalRows);
            await file.close();
        })
        .catch(error => {
            printf(error.message);
        });
    }
}

await main(...Format.parseArgs(process.argv, options));
