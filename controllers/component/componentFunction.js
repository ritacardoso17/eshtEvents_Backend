const dbConfig = require("../../database/dbConfig.json")
const mySql = require("mysql")
var connection = mySql.createConnection(dbConfig)