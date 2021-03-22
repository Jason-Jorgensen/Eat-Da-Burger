
const connection = require('./connection.js');

const orm = {
    selectAll(tableInput, cb) {
        const queryString = `SELECT * FROM ??`
        connection.query(
            queryString,
            [tableInput],
            (err,result) => {
                if (err) {
                throw err;
                }
                cb(result);
            }
        );
    },
    insertOne(tableInput, columnName, newValueName,cb) {

        const queryString = 'INSERT INTO ?? (??) VALUES (?)'
        connection.query(
            queryString,
            [tableInput,columnName,newValueName],
            (err,result) => {
                if (err) {
                    throw err;
                    }
                cb(result);
            }
        );
    },
    updateOne(tableInput, columnName, newValueName, searchColName, oldValueId, cb) {
        const queryString = `UPDATE ?? SET ?? = ? WHERE ?? = ?`
        connection.query(
            queryString,
            [tableInput, columnName, newValueName, searchColName, oldValueId],
            (err, result) => {
                if (err) {
                    throw err;
                    }
                cb(result)
            }
        );
    },
    clearDataBase(cb) {
        connection.query('DELETE FROM burgers',
        
        (err,result) => {
            if (err) {
                throw err;
            }
            cb(result)
            }
        );
    },
};

module.exports = orm;