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

const dbTables = [
    "files"
];

const dbModels = {
  files: {
    fileID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    itemID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    setID: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
      allowNull: false
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    compressed: {
      type: DataTypes.INTEGER,
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
    console: true,
    domain: "localhost",
    name: "software",
    user: "root",
    password: "",
    tables: dbTables
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
    return { config, sequelize, info, warn, error };
};

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
        db.sequelize.sync({ force: true });
        printf("Connected to database %s\n", dbConfig.name);
        //
        // Read the CSV file specified on the command line (eg, argv[1]).  Create an array of rows,
        // where each row is object containing properties that correspond to the header fields on the
        // first row of the CSV.
        //
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
            csvRows.push(csvRow);
            if (csvRows.length % 10000 == 0) {
                totalRows += csvRows.length;
                printf("Added %d rows...\n", totalRows);
                csvRows = [];
            }
            await getNextLine();
        }
        totalRows += csvRows.length;
        printf("Added %d rows...\n", totalRows);
        printf("All done (%d lines processed, %d rows added)\n", totalLines >> 1, totalRows);
        await file.close(file);
    })
    .catch(error => {
        printf(error.message);
    });
}

await main(...Format.parseArgs(process.argv));
