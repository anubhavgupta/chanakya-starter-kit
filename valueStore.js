
var q = require('q');

var balanceDeferred = q.defer();

module.exports = function getBalanceDeferred(){
    return balanceDeferred;
};
