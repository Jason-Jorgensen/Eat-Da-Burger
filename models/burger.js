const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    insertOne(newValueName,cb){
        orm.insertOne('burgers','burger_name',newValueName, (res) => cb(res));
    },
    updateOne() {
        orm.updateOne('burgers','burger_name',newValueName,'id', oldValueID, (res) => cb(res));
    },
};

module.exports = burger;