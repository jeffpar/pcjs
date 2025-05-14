/**
 * import.js
 *
 * Imports CSV files produced by dz.js into a database
 *
 * Usage: node import.js [CSV file]
 */
import fs from "fs/promises";
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
    name: "software",
    user: "root",
    password: ""
};

const dbTables = {
  files: {
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
    path: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    warnings: {
      type: DataTypes.STRING(128),
      allowNull: true
    }
  }
};

const format = new Format();
const printf = function(...args) {
    let s = format.sprintf(...args);
    process.stdout.write(s);
};

/**
 * dbInit()
 *
 * @param {Object} config
 * @returns {Object} (db)
 */
function dbInit(config)
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
        config.name,
        config.user,
        config.password,
        config.sequelize
    );
    return { config, sequelize, models: {}, info, warn, error };
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
 * main(argc, argv)
 *
 * @param {number} argc
 * @param {Array} argv
 */
async function main(argc, argv)
{
    let db = dbInit(dbConfig);
    db.sequelize.authenticate()
    .then(async () => {
        printf("Connected to database '%s'\n", dbConfig.name);
        //
        // Read the CSV file specified on the command line (eg, argv[1]).  Create an array of rows,
        // where each row is object containing properties that correspond to the header fields on the
        // first row of the CSV.
        //
        let table = "files";
        db.models[table] = db.sequelize.define(table, dbTables[table]);
        await db.models[table].sync( { force: true });
        let csvLines = [];
        let csvFields = [], csvRows = [];
        let totalLines = 0, totalRows = 0;
        const chunkSize = 512 * 1024;
        const file = await fs.open(argv[1], 'r');
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
            totalLines++;
            return csvLines.shift();
        };
        while (true) {
            let line = await getNextLine();
            if (line == null) {
                break;
            }
            if (!csvFields.length) {
                csvFields = line.split(",");
                await getNextLine();
                continue;
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
            //
            // We do some data sanity checks and fixups next...
            //
            if (csvRow.name && csvRow.name.length <= 255) {
                if (!csvRow.comment) {
                    csvRow.comment = null;
                }
                if (csvRow.modified && db.config.utc) {
                    csvRow.modified = new Date(csvRow.modified + db.config.timeZone);
                }
                if (csvRow.attr) {
                    csvRow.attr &= 0xff;
                }
                if (db.config.utc) {
                    let date = new Date();
                    date = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
                    csvRow.createdAt = csvRow.updatedAt = date;
                }
                csvRows.push(csvRow);
            }
            if (csvRows.length % 10000 == 0) {
                totalRows += await addRows(db, table, csvRows);
                printf("Added %d rows...\n", totalRows);
                csvRows = [];
            }
            await getNextLine();
        }
        totalRows += await addRows(db, table, csvRows);
        printf("Added %d rows...\n", totalRows);
        printf("All done (%d lines processed, %d rows added)\n", totalLines >> 1, totalRows);
        await file.close(file);
    })
    .catch(error => {
        printf(error.message);
    });
}

await main(...Format.parseArgs(process.argv));
