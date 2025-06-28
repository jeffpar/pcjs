/**
 * import.js
 *
 * Imports CSV files produced by dx.js into a database
 *
 * Usage: node import.js [CSV file]
 */
import path from "path";
import CSV from "./csv.js";
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
    newest: {
        type: DataTypes.DATE,
        allowNull: true
    },
    entries: {
        type: DataTypes.INTEGER.UNSIGNED,
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
    volume: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    path: {
        type: DataTypes.STRING(255),
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
    thumb: {
        type: DataTypes.STRING(128),
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
    let csv;
    printf("import.js %s\n%s\n\nArguments: %s\n", "1.0", "Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>", argv[0]);
    if (argv.help) {
        options.help.handler();
        return;
    }
    if (!argv[1]) {
        errors.push("Missing CSV file");
    } else {
        try {
            csv = new CSV();
            await csv.open(argv[1]);
        }
        catch (error) {
            errors.push("Unable to open CSV file: " + error.message);
        }
    }
    if (errors.length) {
        for (let error of errors) {
            printf("%s\n", error);
        }
        return;
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
            //
            // Set 'timestamps' to false so that sequelize doesn't add 'createdAt' and 'updatedAt' fields,
            // and set 'freezeTableName' to true so that sequelize doesn't pluralize the table name.
            //
            db.models[table] = db.sequelize.define(table, dbFields, {timestamps: false, freezeTableName: true});
            await db.models[table].sync( { force: drop });
            let rows = [];
            let totalRows = 0;

            while (true) {
                let row = await csv.getNextRow();
                if (row == null) {
                    break;
                }
                //
                // We do some data sanity checks and fixups next...
                //
                if (row.name && row.name.length <= 255) {
                    if (!row.newest) {
                        row.newest = null;
                    }
                    if (!row.photo) {
                        row.photo = null;
                    }
                    if (!row.thumb) {
                        row.thumb = null;
                    }
                    if (!row.dimensions) {
                        row.dimensions = null;
                    }
                    if (row.warnings && row.warnings.length > 128) {
                        row.warnings = row.warnings.substring(0, 128);
                    }
                    if (!row.comment) {
                        row.comment = null;
                    }
                    if (row.modified && db.config.utc) {
                        row.modified = new Date(row.modified + db.config.timeZone);
                    }
                    if (row.attr) {
                        row.attr &= 0xff;
                    }
                    //
                    // This code is no longer needed, since we now set 'timestamps' to false,
                    // preventing sequelize from adding the 'createdAt' and 'updatedAt' fields.
                    //
                    // if (db.config.utc) {
                    //     let date = new Date();
                    //     date = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
                    //     row.createdAt = row.updatedAt = date;
                    // }
                    rows.push(row);
                }
                else {
                    printf("warning: skipping row %s\n", JSON.stringify(row));
                }
                if (rows.length % 10000 == 0) {
                    totalRows += await addRows(db, table, rows);
                    printf("Added %d rows...\n", totalRows);
                    rows = [];
                }
            }
            totalRows += await addRows(db, table, rows);
            printf("Added %d rows...\n", totalRows);
            await csv.close();
        })
        .catch(error => {
            printf(error.message);
        });
    }
}

await main(...Format.parseArgs(process.argv, options));
