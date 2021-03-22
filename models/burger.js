const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    insertOne(newValueName,cb){
        orm.insertOne('burgers','burger_name',newValueName, (res) => cb(res));
    },
    updateOne(oldValueId,cb) {
        orm.updateOne('burgers','devoured',true,'id', oldValueId, (res) => cb(res));
    },
    clearDataBase(cb) {
        orm.clearDataBase((res) => cb(res));
    }
};

module.exports = burger;