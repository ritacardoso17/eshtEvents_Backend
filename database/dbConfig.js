const mysql = require('mysql');

let newdbConnection;

function release() {
    newdbConnection = mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
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