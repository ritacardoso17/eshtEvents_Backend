const mysql = require('mysql');

let newdbConnection;

function release() {
    newdbConnection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });

    newdbConnection.connect(function (err) {
        if (err) {
            console.log('error when connecting to db:', err);
            setTimeout(release, 2000);
        }
    });

    newdbConnection.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            release();
        } else {
            release()
            throw err;
        }
    });
}

release();

module.exports = newdbConnection;